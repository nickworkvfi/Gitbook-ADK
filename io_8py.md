---
title: packman/packmanlib/io.py

---

# packman/packmanlib/io.py



## Namespaces

| Name           |
| -------------- |
| **[packmanlib::io](namespacepackmanlib_1_1io.md)**  |
| **[vosconstants](namespacevosconstants.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[packmanlib::io::ArchiveReader](classpackmanlib_1_1io_1_1_archive_reader.md)**  |
| class | **[packmanlib::io::ArchiveWriter](classpackmanlib_1_1io_1_1_archive_writer.md)**  |
| class | **[packmanlib::io::ArchiveWriter::ModifiedArchiveLister](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md)**  |
| class | **[packmanlib::io::ArchiveBuilder](classpackmanlib_1_1io_1_1_archive_builder.md)**  |
| class | **[packmanlib::io::ArchiveExtractor](classpackmanlib_1_1io_1_1_archive_extractor.md)**  |
| class | **[packmanlib::io::ArchiveExtractor::Extractor](classpackmanlib_1_1io_1_1_archive_extractor_1_1_extractor.md)**  |




## Source code

```python
import gzip
import os
import re
from pathlib import Path, PurePosixPath
import tarfile
import io
import shutil
import pickle
from multiprocessing.dummy import Pool

from .platform import PLATFORM_VOS3
from .filecontent import FileContent
from .signers.signerfactory import SIGNER_TYPE_NO
from .treeaction import TreeAction
from .treeinternal import TreeInternal
from .treewalk import Observer, TreeWalker
from .vosconstants import *
from .node import Node, Signature, Control, ChangesetData, BundleInfo, Changeset, Manifest, DlfileMeta, UPfile


class ArchiveReader:
    def __init__(self):
        self.last_node_added_stack = []

    def __add_node(self, node, tarinfo, start_pos=0, archive_node=None):
        """Add a new node to the tree related to tarinfo. This method is recursive and creates missing directories
        if encountered during the processing of the path in tarinfo.name
        @param tarinfo: reference tarinfo
        @param start_pos: current position in tarinfo.name
        @param archive_node: specialized archive instance child node to be added
        @return node that has been added
        """
        slash_pos = tarinfo.name.find('/', start_pos)
        if slash_pos < 0:
            # final part of path
            child_name = tarinfo.name[start_pos:]
            if child_name not in node.children:
                if archive_node:
                    node.children[child_name] = archive_node
                elif PurePosixPath(child_name).suffix.lower() == node.get_platform().sig_ext:
                    node.children[child_name] = Signature(child_name, node, tarinfo)
                elif node.name == CONTROL_DIR and child_name == CONTROL_FILE:
                    node.children[child_name] = Control(child_name, node, tarinfo)
                elif child_name == MANIFEST_FILE:
                    node.children[child_name] = Manifest(child_name, node, tarinfo)
                elif child_name == CHANGESET_FILE:
                    node.children[child_name] = Changeset(child_name, node, tarinfo)
                else:
                    node.children[child_name] = Node(child_name, node, tarinfo)
            else:
                # if entry does already exist, replace tarinfo
                node.children[child_name].overwritten_mark = True
                node.children[child_name].tarinfo = tarinfo
            # update last node added on top of stack
            self.last_node_added_stack[-1] = node.children[child_name]
            return node.children[child_name]
        else:
            # middle part of path
            child_name = tarinfo.name[start_pos:slash_pos]
            if child_name not in node.children:
                # if node is missing, add directory
                new_node = Node.create_node(tarinfo.name[:slash_pos], tarfile.DIRTYPE)
                new_node.implied_mark = True
                new_node.parent = node
                node.children[child_name] = new_node
                return self.__add_node(node.children[child_name], tarinfo, slash_pos + 1)
            else:
                # follow symlinks
                if node.children[child_name].tarinfo.issym():
                    link_target_node = node.find(node.children[child_name].tarinfo.linkname)
                    if not link_target_node:
                        return None
                    link_target_node.implied_mark = True
                    link_target_node.overwritten_mark = True
                    tarinfo.name = link_target_node.name + tarinfo.name[slash_pos:]
                    return self.__add_node(link_target_node, tarinfo, slash_pos + 1)
                else:
                    # check depth-first
                    last_node_added = self.last_node_added_stack[-1]
                    if last_node_added and not last_node_added.has_ancestor(node.children[child_name]):
                        node.children[child_name].implied_mark = True
                        node.children[child_name].overwritten_mark = True
                    # update archive node
                    if archive_node:
                        archive_node.parent = node.children[child_name]
                        archive_node.name = tarinfo.name[slash_pos+1:]
                    return self.__add_node(node.children[child_name], tarinfo, slash_pos + 1, archive_node=archive_node)

    def __read(self, archive, fileobj, name, parent, tarinfo):
        """Recursive part of the archive extraction
        """
        archive.name = name
        archive.parent = parent
        archive.tarinfo = tarinfo
        archive.tar = tarfile.open(mode="r|*", fileobj=fileobj)
        # save information that archive is compressed
        archive.is_gzip = archive.tar.fileobj.comptype == 'gz'
        self.last_node_added_stack.append(None)
        for tarinfo in archive.tar:
            # remove trailing / in tarinfo name
            tarinfo.name = tarinfo.name.rstrip('/')
            file_content_bytes = None
            archive_node = None
            if tarinfo.isfile():
                bytesio = io.BytesIO()
                tmp_fileobj = io.BufferedRandom(bytesio)
                shutil.copyfileobj(archive.tar.extractfile(tarinfo), tmp_fileobj)
                tmp_fileobj.seek(0)
                tarinfo_path = PurePosixPath(tarinfo.name)
                # check archive candidates by extension
                if tarinfo_path.suffix.lower() in TARFILE_EXT_LIST:
                    # check for csd and inf
                    if tarinfo_path.name.endswith(CSD_EXT):
                        archive_node = ChangesetData(archive.get_platform())
                        archive_node.structural_archive = True
                    elif tarinfo_path.name.endswith(INF_EXT):
                        archive_node = BundleInfo(archive.get_platform())
                        archive_node.structural_archive = True
                    elif tarinfo_path.name.endswith(META_EXT):
                        archive_node = DlfileMeta(archive.get_platform())
                        archive_node.structural_archive = True
                    elif tarinfo_path.name.endswith(UP_FILE_EXTS):
                        archive_node = UPfile(archive.get_platform())
                        archive_node.structural_archive = True
                    else:
                        archive_node = archive.new_archive_child()
                    if archive_node:
                        self.__read(archive_node, tmp_fileobj, tarinfo.name, archive, tarinfo)
                elif re.match(PREMISSIVE_CONTROL_PATH_RE, str(tarinfo_path)):
                    # control file is present, this is structural archive
                    archive.structural_archive = True
                file_content_bytes = bytesio.getvalue()
            # keep only archives which are structural
            if archive_node and hasattr(archive_node, 'structural_archive'):
                del archive_node.structural_archive
                new_node = self.__add_node(archive, tarinfo, archive_node=archive_node)
            else:
                new_node = self.__add_node(archive, tarinfo)
            if new_node and file_content_bytes is not None:
                new_node.file_content = FileContent(file_content_bytes)
        self.last_node_added_stack.pop()
        # keep marker if pax header were found
        if archive.tar.pax_headers:
            archive.pax_headers_found = True
        # clean archive of unneeded attributes
        del archive.tar
    
    @staticmethod
    def read_file(archive, path):
        """! Extract archive from file recursively to build in-memory node tree
        @param archive: archive root node
        @param path: path to the archive file
        """
        path = Path(path)
        with path.open("rb") as fileobj:
            ArchiveReader.read_fileobj(archive, fileobj, path.name)

    @staticmethod
    def read_fileobj(archive, fileobj, name):
        """! Extract archive from file object recursively to build in-memory node tree
        @param archive: archive root node
        @param fileobj: path to the archive file
        @param name: name of the root archive node
        """
        reader = ArchiveReader()
        reader.__read(archive, fileobj, name, None, None)
        TreeInternal.link_signature(archive)
        archive.set_signer(SIGNER_TYPE_NO)

    @staticmethod
    def read_pickled_file(path, gz=False):
        """! Extract pickled file
        @param path: path to the pickled file
        @param gz: whether pickled file is gzipped
        :return pickled object
        """
        if gz:
            with gzip.open(Path(path), mode='rb') as fp:
                return pickle.load(fp)
        else:
            with Path(path).open(mode='rb') as fp:
                return pickle.load(fp)


class ArchiveWriter:

    class ModifiedArchiveLister(Observer):
        def __init__(self):
            self.level0 = []
            self.level1 = []
            self.level2 = []

        def get_result(self):
            return self.level2, self.level1, self.level0

        def found_dlfile_cb(self, dlfile):
            if dlfile.modified:
                self.level0.append(dlfile)

        def found_upfile_cb(self, upfile):
            if upfile.modified:
                if upfile.parent:
                    self.level1.append(upfile)
                else:
                    self.level0.append(upfile)

        def found_bundle_cb(self, bundle):
            if bundle.modified:
                self.level1.append(bundle)

        def found_package_cb(self, package):
            if package.modified:
                self.level2.append(package)

        def found_csd_cb(self, csd):
            if csd.modified:
                # must be built first for archive digest
                self.level2.append(csd)

        def found_inf_cb(self, inf):
            if inf.modified:
                self.level1.append(inf)

        def found_meta_cb(self, meta):
            if meta.modified:
                self.level1.append(meta)

    @staticmethod
    def __write_node(node, tar, node_signer, node_hasher):
        tmp_fileobj = None
        if node.file_content:
            # if signature node is writable and has empty content, ignore it
            if node.is_signature() and node.writable and not node.file_content.get_value():
                return
            # update tarinfo size with new size
            if node.tarinfo:
                node.tarinfo.size = len(node.file_content.get_value())
            tmp_fileobj = node.file_content.get_reader()
        tar.addfile(node.tarinfo, fileobj=tmp_fileobj)
        if not node.is_archive():
            for child in node.children.values():
                ArchiveWriter.__write_node(child, tar, node_signer, node_hasher)
        if node_signer:
            node_signer.sign(node)

    @staticmethod
    def __archive_build_sign(archive, node_signer, node_hasher):
        if not archive.modified:
            return
        bytesio = io.BytesIO()
        tmp_fileobj = io.BufferedRandom(bytesio)
        tar_name = archive.name
        mode = 'w'
        if archive.is_gzip:
            mode = 'w:gz'
            tar_name = Path(archive.name).with_suffix(TAR_EXT)
        with tarfile.open(name=tar_name, fileobj=tmp_fileobj, mode=mode, format=tarfile.GNU_FORMAT) as tar:
            for child in archive.children.values():
                ArchiveWriter.__write_node(child, tar, node_signer, node_hasher)
        tmp_fileobj.seek(0)
        if not archive.file_content:
            archive.file_content = FileContent()
        archive.file_content.set_value(bytesio.getvalue())
        if node_hasher:
            node_hasher.hash(archive)

    @staticmethod
    def write_file(archive, path, fix=True, force_resign=True):
        """! Write archive to file by recursively walking through the in-memory node tree
        @param archive: archive node
        @param path: path to the file to write to
        @param fix: fix archive before writing
        @param force_resign: True will for resigning even if a signature file is already present
        """
        path = Path(path)
        # rename archive with path name provided
        archive.rename(path.name)
        with path.open("wb") as fileobj:
            ArchiveWriter.write_fileobj(archive, fileobj, fix=fix, force_resign=force_resign)
        # rename archive with path name again (as it may have been fixed)
        # this allows subsequent validation to report wrong namings
        archive.rename(path.name)

    @staticmethod
    def write_fileobj(archive, fileobj, fix=True, force_resign=True):
        """! Write archive to file object by recursively walking through the in-memory node tree
        @param archive: archive node
        @param fileobj: file object to write to
        @param fix: fix archive before writing
        @param force_resign: True will for resigning even if a signature file is already present
        """
        TreeInternal.setup_writable(archive)
        node_hasher = TreeAction.create_node_hasher(archive)
        node_signer = TreeAction.create_node_signer(archive, archive.get_signer(), force_resign=force_resign)
        if fix:
            TreeAction.fix_all(archive)
        # mark root as modified in any case
        archive.mark_modified()
        lister = ArchiveWriter.ModifiedArchiveLister()
        TreeWalker.walk(archive, [lister], writable_only=True)
        level2, level1, level0 = lister.get_result()
        with Pool() as pool:
            for archives in [level2, level1, level0]:
                args = [(archive, node_signer, node_hasher) for archive in archives]
                # multithread launch
                pool.starmap(ArchiveWriter.__archive_build_sign, args)
                # sequential launch equivalent (uncomment for debug)
                #for archive, node_signer, node_hasher in args:
                #    ArchiveWriter.__archive_build_sign(archive, node_signer, node_hasher)
        src_fileobj = archive.file_content.get_reader()
        shutil.copyfileobj(src_fileobj, fileobj)
        fileobj.flush()
        archive.file_content = None

    @staticmethod
    def write_pickled_file(archive, path, gz=False):
        """! Write pickled file
        @param o: object to pickle
        @param path: path to the pickled file
        @param gz: wether pickled file is gzipped
        """
        archive.unlink()
        if gz:
            with gzip.open(Path(path), mode='wb') as fp:
                pickle.dump(archive, fp)
        else:
            with Path(path).open(mode='wb') as fp:
                pickle.dump(archive, fp)


class ArchiveBuilder:
    @staticmethod
    def build_from_dircontent(archive, name, path, filter_path=None):
        """! build in-memory node tree from directories content
        @param archive: archive root node
        @param name: archive name
        @param path: path to parent directory of the content
        @param filter_path: callback include or not the child path
        """
        file_content = io.BytesIO()
        tmp_fileobj = io.BufferedRandom(file_content)
        with tarfile.open(fileobj=tmp_fileobj, mode='w:gz', format=tarfile.GNU_FORMAT) as tar:
            path = Path(path)
            for child in path.iterdir():
                if not filter_path or filter_path(archive, child):
                    tar.add(child, arcname=child.relative_to(path))
        tmp_fileobj.seek(0)
        ArchiveReader.read_fileobj(archive, tmp_fileobj, name)


class ArchiveExtractor:
    class Extractor(Observer):
        def __init__(self, root_path):
            self.root_path = root_path

        def __fs_path(self, node):
            node_names = [self.root_path]
            for node in node.get_path_nodes():
                # for vos3, bundle nodes are already stems
                if node.is_archive() and node.get_platform().name != PLATFORM_VOS3:
                    node_names.append(Path(node.name).stem)
                else:
                    node_names.append(node.name)
            return Path(*node_names)

        def found_node_cb(self, node):
            if node.name == ".":
                return
            path = self.__fs_path(node)
            if node.is_archive():
                path.mkdir()
            else:
                if node.tarinfo.type == tarfile.REGTYPE:
                    with path.open("wb") as fp:
                        if node.file_content:
                            fp.write(node.file_content.get_value())
                    path.chmod(node.tarinfo.mode)
                elif node.tarinfo.type == tarfile.DIRTYPE:
                    path.mkdir()
                    path.chmod(node.tarinfo.mode)
                elif node.tarinfo.type == tarfile.SYMTYPE:
                    path.symlink_to(node.tarinfo.linkname)

    @staticmethod
    def extract_to_dir(archive, path, filter_path=None):
        """! extract in-memory node tree to directory
        @param archive: archive root node
        @param path: path to output parent directory
        @param filter_path: callback to extract or not the node
        """
        path.mkdir(exist_ok=True)
        extractor = ArchiveExtractor.Extractor(path)
        TreeWalker.walk(archive, [extractor], children_start=True)
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

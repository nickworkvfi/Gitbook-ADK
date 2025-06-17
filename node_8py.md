---
title: packman/packmanlib/node.py

---

# packman/packmanlib/node.py



## Namespaces

| Name           |
| -------------- |
| **[packmanlib::node](namespacepackmanlib_1_1node.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[packmanlib::node::Node](classpackmanlib_1_1node_1_1_node.md)**  |
| class | **[packmanlib::node::JSONContent](classpackmanlib_1_1node_1_1_j_s_o_n_content.md)**  |
| class | **[packmanlib::node::Manifest](classpackmanlib_1_1node_1_1_manifest.md)**  |
| class | **[packmanlib::node::Changeset](classpackmanlib_1_1node_1_1_changeset.md)**  |
| class | **[packmanlib::node::Control](classpackmanlib_1_1node_1_1_control.md)**  |
| class | **[packmanlib::node::Signature](classpackmanlib_1_1node_1_1_signature.md)**  |
| class | **[packmanlib::node::Archive](classpackmanlib_1_1node_1_1_archive.md)**  |
| class | **[packmanlib::node::Package](classpackmanlib_1_1node_1_1_package.md)**  |
| class | **[packmanlib::node::Bundle](classpackmanlib_1_1node_1_1_bundle.md)**  |
| class | **[packmanlib::node::DlfileMeta](classpackmanlib_1_1node_1_1_dlfile_meta.md)**  |
| class | **[packmanlib::node::ChangesetData](classpackmanlib_1_1node_1_1_changeset_data.md)**  |
| class | **[packmanlib::node::BundleInfo](classpackmanlib_1_1node_1_1_bundle_info.md)**  |
| class | **[packmanlib::node::UPfile](classpackmanlib_1_1node_1_1_u_pfile.md)**  |
| class | **[packmanlib::node::Dlfile](classpackmanlib_1_1node_1_1_dlfile.md)**  |




## Source code

```python
import json
import tarfile
from collections import OrderedDict
from datetime import datetime, timezone
from pathlib import PurePosixPath

from .controlfile import ControlFile
from .nodeactiontrace import NodeActionTraceMixin
from .nodepath import NodePathMixin
from .nodeaction import NodeActionMixin
from .platform import PLATFORM_VOS3, Platform
from .basenode import BaseNode
from .signers.nosigner.nosigner import NoSigner
from .signers.signerfactory import SignerFactory
from .treeinternal import TreeInternal
from .validation import Report
from .vosconstants import *


class Node(NodePathMixin, NodeActionMixin, NodeActionTraceMixin):
    """ Node class collecting mixins """
    def __init__(self, name=None, parent=None, tarinfo=None):
        super().__init__(name, parent, tarinfo)

    @staticmethod
    def create_node(name, entry_type):
        return Node(PurePosixPath(name).name, tarinfo=BaseNode.create_tarinfo(name, entry_type))


class JSONContent:
    """ Common class for json files """
    def __init__(self):
        self.d = OrderedDict()

    def set_jsoncontent_from_dict(self):
        self.set_content(json.dumps(self.d, indent=2).encode())

    def set_dict_from_jsoncontent(self):
        if self.file_content:
            self.d = json.loads(self.file_content.get_value().decode(), object_pairs_hook=OrderedDict)

    @property
    def dict(self):
        if not self.d:
            self.set_dict_from_jsoncontent()
        return self.d

    def _update_with_defaults(self, default_fields_in_order):
        old_d = self.dict
        self.d = OrderedDict()
        # keep order of keys while keeping old values and adding non-empty default values
        for k, v in default_fields_in_order.items():
            if k in old_d:
                self.d[k] = old_d[k]
            elif v:
                self.d[k] = v


class Manifest(Node, JSONContent):
    """ Represents a manifest file node """
    def __init__(self, name=None, parent=None, tarinfo=None):
        super().__init__(name, parent, tarinfo)
        JSONContent.__init__(self)
        self.writable = True

    @staticmethod
    def create():
        mft_node = Manifest(name=MANIFEST_FILE, parent=None,
                            tarinfo=BaseNode.create_tarinfo(MANIFEST_FILE, tarfile.REGTYPE))
        return mft_node

    def update_with_defaults(self):
        default_fields_in_order = OrderedDict({
            '$schema': "https://www.verifone.com/json_schemas/vos/packaging/1.0.0/manifest_schema.json",
            'datetime': '',
            'name': '',
            'version': '',
            'version_extension': '',
            'ar_counter': '',
            'user': '',
            'user_membership': [],
            'signers': ['SPONSOR'],
            'software_platforms': [PLATFORM_VOS3],
            'hardware_platforms': [],
            'tags': [],
            'sponsor_change': {},
            'bundle_remove': [],
            'hook': {},
            'owned_bundles': [],
            'requires': [],
            'target': {},
            'digest_algorithm': 'sha512',
            'packages': []
        })
        self._update_with_defaults(default_fields_in_order)
        if 'packages' not in self.d:
            self.d['packages'] = []
        # always update date and time
        self.d['datetime'] = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')


class Changeset(Node, JSONContent):
    """ Represents a changeset file node """
    def __init__(self, name=None, parent=None, tarinfo=None):
        super().__init__(name, parent, tarinfo)
        JSONContent.__init__(self)
        self.writable = True

    @staticmethod
    def create():
        cs_node = Changeset(name=CHANGESET_FILE, parent=None,
                            tarinfo=BaseNode.create_tarinfo(CHANGESET_FILE, tarfile.REGTYPE))
        return cs_node

    def update_with_defaults(self):
        default_fields_in_order = OrderedDict({
            '$schema': "https://www.verifone.com/json_schemas/vos/packaging/1.0.0/changeset_schema.json",
            'datetime': '',
            'digest_algorithm': 'sha512',
            'csd_digest': '##digest##',
            'packages': []
        })
        self._update_with_defaults(default_fields_in_order)
        if 'packages' not in self.d:
            self.d['packages'] = []
        # always update date and time
        self.d['datetime'] = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

    def is_differential(self):
        if 'packages' in self.dict:
            for p in self.dict['packages']:
                if p.get('differential', False):
                    return True
        return False

class Control(Node):
    """ Represents a control file node """
    def __init__(self, name=None, parent=None, tarinfo=None):
        super().__init__(name, parent, tarinfo)


class Signature(Node):
    """ Represents a signature node """
    def __init__(self, name=None, parent=None, tarinfo=None):
        super().__init__(name, parent, tarinfo)
        self.signed_node = None


class Archive(Node):
    """ Represents an archive node
    Base class for Dlfile, Bundle and Package
    """

    def __init__(self, platform):
        super().__init__()
        if isinstance(platform, Platform):
            self.platform = platform
        else:
            self.platform = Platform.get(platform)
        self.tar = None
        self.is_gzip = False
        self.pax_headers_found = False
        self.signer = None
        self.report = Report(self)

    @staticmethod
    def setup_archive(archive, full_name):
        archive.tarinfo = BaseNode.create_tarinfo(full_name, tarfile.REGTYPE)
        archive.name = full_name
        archive.writable = True
        archive.set_mode(0o644)
        # set default signer to NoSigner()
        archive.signer = NoSigner()
        return archive

    @property
    def control_node(self):
        return self.find(CONTROL_PATH)

    @property
    def control(self):
        if self.control_node:
            control = ControlFile()
            control.read(self.control_node.file_content.get_value())
            return control
        return None

    def set_signer(self, signer_type):
        root = self.get_root_archive()
        root.signer = SignerFactory.create(root.get_platform(), signer_type)
        TreeInternal.setup_writable(root)


class Package(Archive):
    """ Represents a package node """

    def __init__(self, platform):
        super().__init__(platform)

    @staticmethod
    def create_package(platform, base_name, stem_name=None, control_content=None):
        """! Create a package node
        It also creates a CONTROL directory and a control file in it.
        Name of node will be '[stem_name].tgz' or '[stem_name].tar' depending on platform
        @param platform: platform name or instance
        @param base_name: name to be used in control file
        @param stem_name: will be 'pkg.[base_name]' if not provided
        @param control_content: bytes content of the control file. Name and version are populated if not provided.
        @return this node
        """
        package = Package(platform)
        if not stem_name:
            stem_name = f"pkg.{base_name}"
        ext = TGZ_EXT
        if not package.get_platform().package_compressed:
            ext = TAR_EXT
        Archive.setup_archive(package, f"{stem_name}{ext}")
        if not control_content:
            control_content = f"Package: {base_name}\nVersion: 1.0.0\n".encode()
        package.create_dir(CONTROL_DIR).create_file(CONTROL_FILE, control_content)
        return package

    def new_archive_child(self):
        return None


class Bundle(Archive):
    """ Represents a bundle node """
    def __init__(self, platform):
        super().__init__(platform)

    @staticmethod
    def create_bundle(platform, base_name, stem_name=None, control_content=None):
        """! Create a bundle node
        It also creates a CONTROL directory and a control file in it.
        Name of node will be '[stem_name].tgz'
        @param platform: platform name or instance
        @param base_name: name to be used in control file
        @param stem_name: will be 'bdl.[base_name]' if not provided
        @param control_content: bytes content of the control file. Name and version are populated if not provided.
        @return this node
        """
        bundle = Bundle(platform)
        if not stem_name:
            stem_name = f"bdl.{base_name}"
        Archive.setup_archive(bundle, f"{stem_name}{TGZ_EXT}")
        if not control_content:
            control_content = f"Name: {base_name}\nVersion: 1.0.0\n".encode()
        bundle.create_dir(CONTROL_DIR).create_file(CONTROL_FILE, control_content)
        return bundle

    def new_archive_child(self):
        return Package(self.get_platform())


class DlfileMeta(Archive):
    """ Represents a dlfile meta node (vos3)"""
    def __init__(self, platform):
        super().__init__(platform)

    @staticmethod
    def create(platform):
        archive = DlfileMeta(platform)
        Archive.setup_archive(archive, VOS3_DLFILE_META_FILE)
        archive.is_gzip = True
        return archive


class ChangesetData(Archive):
    """ Represents a CSD node (vos3)"""
    def __init__(self, platform):
        super().__init__(platform)

    @staticmethod
    def create(platform, base_name):
        archive = ChangesetData(platform)
        Archive.setup_archive(archive, f"{base_name}{CSD_EXT}")
        return archive

    def get_inf_node(self):
        if not self.parent:
            return None
        inf_node_name = f"{self.get_base_name()}{INF_EXT}"
        return self.parent.children.get(inf_node_name)

    def get_base_name(self):
        if self.name.endswith(CSD_EXT):
            return self.name[:-len(CSD_EXT)]
        return None

    def new_archive_child(self):
        return Archive(self.get_platform())

class BundleInfo(Archive):
    """ Represents a INF node (vos3)"""
    def __init__(self, platform):
        super().__init__(platform)

    @staticmethod
    def create(platform, base_name):
        archive = BundleInfo(platform)
        Archive.setup_archive(archive, f"{base_name}{INF_EXT}")
        return archive

    @property
    def changeset_node(self):
        return self.find(CHANGESET_FILE)

    @property
    def manifest_node(self):
        return self.find(MANIFEST_FILE)

    def get_base_name(self):
        if self.name.endswith(INF_EXT):
            return self.name[:-len(INF_EXT)]
        return None

    def get_csd_node(self):
        if not self.parent:
            return None
        csd_node_name = f"{self.get_base_name()}{CSD_EXT}"
        return self.parent.children.get(csd_node_name)


class UPfile(Archive):
    """ Represents a unified packaging file node """
    def __init__(self, platform):
        super().__init__(platform)

    @staticmethod
    def create_upfile(platform, name, uptype):
        """! Create a upfile node
        Name of node will be '[name].[uptype].tar'
        @param platform: platform name or instance
        @param name: name to be used for the archive
        @param uptype: upfile type
        @return this node
        """
        upfile = UPfile(platform)
        Archive.setup_archive(upfile, f'{name}.{uptype}{TAR_EXT}')
        return upfile

    @staticmethod
    def build_ending(uptype):
        if uptype not in UP_TYPES:
            return None
        return f'.{uptype}{TAR_EXT}'

    @property
    def uptype(self):
        stem = PurePosixPath(self.name).stem
        return PurePosixPath(stem).suffix[1:]

    @property
    def ending(self):
        exts = PurePosixPath(PurePosixPath(self.name).stem).suffix
        exts += PurePosixPath(self.name).suffix
        return exts


class Dlfile(Archive):
    """ Represents a dlfile node """
    def __init__(self, platform):
        super().__init__(platform)

    @staticmethod
    def create_dlfile(platform, base_name, stem_name=None):
        """! Create a dlfile node
        Name of node will be '[stem_name].tgz'
        @param platform: platform name or instance
        @param base_name: name to be used in control file
        @param stem_name: will be 'dl.[base_name]' if not provided
        @return this node
        """
        dlfile = Dlfile(platform)
        if not stem_name:
            stem_name = f"dl.{base_name}"
        if dlfile.get_platform().dlfile_compressed:
            name = f"{stem_name}{TGZ_EXT}"
        else:
            name = f"{stem_name}{TAR_EXT}"
        Archive.setup_archive(dlfile, name)
        return dlfile

    def new_archive_child(self):
        return Bundle(self.get_platform())

    def is_differential(self):
        if not self.platform.is_vos3():
            return False
        meta = self.find(f"{VOS3_DLFILE_META_FILE}/{VOS3_DIFFERENTIAL_FILE}")
        if not meta:
            return False
        return True
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

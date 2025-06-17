---
title: packman/packmanlib/basenode.py

---

# packman/packmanlib/basenode.py



## Namespaces

| Name           |
| -------------- |
| **[packmanlib::basenode](namespacepackmanlib_1_1basenode.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[packmanlib::basenode::BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md)**  |




## Source code

```python
from __future__ import annotations

import tarfile
import time
from collections import OrderedDict
from typing import Dict

from packmanlib.vosconstants import VHQ_MANIFEST_FILE, MANIFEST_FILE, CHANGESET_FILE

NODE_TYPE_PACKAGE = "Package"
NODE_TYPE_BUNDLE = "Bundle"
NODE_TYPE_DLFILE = "Dlfile"
NODE_TYPE_SIGNATURE = "Signature"
NODE_TYPE_CONTROL = "Control"
NODE_TYPE_VHQMANIFEST = "VHQManifest"
NODE_TYPE_MANIFEST = "Manifest"
NODE_TYPE_CHANGESET = "Changeset"
NODE_TYPE_FILE = "File"
NODE_TYPE_DIR = "Dir"
NODE_TYPE_SYMLINK = "Symlink"
NODE_TYPE_UPFILE = "UPfile"
NODE_TYPE_UNKNOWN = "Unknown"

NODE_TYPE_BUNDLE_INFO = "BundleInfo"
NODE_TYPE_CHANGESET_DATA = "ChangesetData"
NODE_TYPE_DLFILE_META = "DlfileMeta"

NODE_TYPE_ARCHIVES = [NODE_TYPE_PACKAGE, NODE_TYPE_BUNDLE, NODE_TYPE_DLFILE,
                      NODE_TYPE_BUNDLE_INFO, NODE_TYPE_CHANGESET_DATA, NODE_TYPE_UPFILE, NODE_TYPE_DLFILE_META]


class BaseNode:
    """ Base node class for all nodes
    """

    def __init__(self, name:str=None, parent:BaseNode=None, tarinfo:tarfile.TarInfo=None):
        
        self.name = name
        
        self.parent = parent
        
        self.children: Dict[str, BaseNode] = OrderedDict()
        
        self.tarinfo = tarinfo
        
        self.file_content = None
        
        self.signature_nodes = []
        
        self.additional_signature_nodes = []
        
        self.writable = False
        
        self.implied_mark = False
        
        self.overwritten_mark = False
        
        self.modified = False

    @staticmethod
    def create_tarinfo(tarinfo_name: str, entry_type) -> tarfile.TarInfo:
        """! Tarinfo creation helper
        @param tarinfo_name: name for tarinfo
        @param entry_type: type of tar entry (see TarInfo)
        @return TarInfo instance created
        """
        new_tarinfo = tarfile.TarInfo(tarinfo_name)
        new_tarinfo.type = entry_type
        new_tarinfo.mtime = int(time.time())
        new_tarinfo.uid = 1000
        new_tarinfo.gid = 1000
        new_tarinfo.uname = 'packman'
        new_tarinfo.gname = 'packman'
        return new_tarinfo

    @staticmethod
    def create_node(tarinfo_name, entry_type):
        pass

    def get_type_str(self) -> str:
        """! Returns node type as string
        Supported are: "Package", "Bundle", "Dlfile", "Signature", "Control", "Manifest", "Dir", "File", "Symlink"
        @return node type string or 'Unknown'
        """
        if self.is_archive():
            if self.is_package():
                return NODE_TYPE_PACKAGE
            if self.is_bundle():
                return NODE_TYPE_BUNDLE
            if self.is_dlfile():
                return NODE_TYPE_DLFILE
            if self.is_upfile():
                return NODE_TYPE_UPFILE
            if self.is_csd():
                return NODE_TYPE_CHANGESET_DATA
            if self.is_inf():
                return NODE_TYPE_BUNDLE_INFO
            if self.is_meta():
                return NODE_TYPE_DLFILE_META
        else:
            if self.is_signature():
                return NODE_TYPE_SIGNATURE
            if self.is_control():
                return NODE_TYPE_CONTROL
            if self.is_manifest():
                return NODE_TYPE_MANIFEST
            if self.is_changeset():
                return NODE_TYPE_CHANGESET
            if self.tarinfo.name == VHQ_MANIFEST_FILE:
                return NODE_TYPE_VHQMANIFEST
            if self.tarinfo.type == tarfile.REGTYPE:
                return NODE_TYPE_FILE
            if self.tarinfo.type == tarfile.DIRTYPE:
                return NODE_TYPE_DIR
            if self.tarinfo.type == tarfile.SYMTYPE:
                return NODE_TYPE_SYMLINK
        return NODE_TYPE_UNKNOWN

    def is_csd(self) -> bool:
        """! Test if node is a CSD
        @return True if it is a CSD archive, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_CHANGESET_DATA

    def is_inf(self) -> bool:
        """! Test if node is an INF
        @return True if it is an INF archive, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_BUNDLE_INFO

    def is_meta(self) -> bool:
        """! Test if node is a META
        @return True if it is a META archive, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_DLFILE_META

    def is_manifest(self) -> bool:
        """! Test if node is a manifest
        @return True if it is a manifest, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_MANIFEST

    def is_changeset(self) -> bool:
        """! Test if node is a changeset
        @return True if it is a changeset, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_CHANGESET

    def is_archive(self) -> bool:
        """! Test if node is an archive
        @return True if it is an archive, False otherwise
        """
        return self.__class__.__name__ in NODE_TYPE_ARCHIVES

    def is_dlfile(self) -> bool:
        """! Test if node is a dlfile
        @return True if it is a dlfile, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_DLFILE

    def is_upfile(self) -> bool:
        """! Test if node is an upfile
        @return True if it is an upfile, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_UPFILE

    def is_bundle(self) -> bool:
        """! Test if node is a bundle
        @return True if it is a bundle, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_BUNDLE

    def is_package(self) -> bool:
        """! Test if node is a package
        @return True if it is a package, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_PACKAGE

    def is_signature(self) -> bool:
        """! Test if node is a signature
        @return True if it is a signature, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_SIGNATURE

    def is_control(self) -> bool:
        """! Test if node is a control
        @return True if it is a control file, False otherwise
        """
        return self.__class__.__name__ == NODE_TYPE_CONTROL

    def mark_modified(self):
        self.modified = True
        if not self.parent or self.parent.modified:
            return
        self.parent.mark_modified()

    def get_parent_archive(self):
        """! Retrieve parent archive node
        @return Parent archive node, itself if no parent
        """
        node = self.parent
        if not node:
            return self
        while node and not node.is_archive():
            node = node.parent
        return node

    def get_platform(self):
        """! Retrieve platform for this node
        @return platform instance
        """
        if self.is_archive():
            archive_node = self
        else:
            archive_node = self.get_parent_archive()
        return archive_node.platform

    def get_root_archive(self):
        """! Retrieve root archive node
        Root archive node has no parent archive.
        @return Root archive node
        """
        node = self
        while node.parent:
            node = node.parent
        return node

    def get_index(self) -> int:
        """! Retrieve index of this node in the list of its parent's children
        @return 0-based index of this node
        """
        if not self.parent:
            return -1
        dict_keys = list(self.parent.children.keys())
        return dict_keys.index(self.name)

    def get_signer(self):
        return self.get_root_archive().signer

    def get_mode(self) -> int:
        """! Retrieve file mode of this node
        @return mode value or None if error
        """
        if not self.tarinfo:
            return None
        return self.tarinfo.mode

    def __str__(self):
        return self.name
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

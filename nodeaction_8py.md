---
title: packman/packmanlib/nodeaction.py

---

# packman/packmanlib/nodeaction.py



## Namespaces

| Name           |
| -------------- |
| **[packmanlib::nodeaction](namespacepackmanlib_1_1nodeaction.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[packmanlib::nodeaction::NodeActionMixin](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md)**  |




## Source code

```python
import copy
import tarfile
from collections import OrderedDict
from pathlib import PurePosixPath
from .basenode import BaseNode
from .filecontent import FileContent
from .treeinternal import TreeInternal
from .treewalk import TreeWalker, Observer


class NodeActionMixin(BaseNode):
    
    class __TarinfoNameUpdater(Observer):
        def found_node_cb(self, node):
            node.tarinfo.name = node.get_path(within_archive=True)
            node.mark_modified()

    
    class __NodeDestroyer(Observer):
        def found_node_cb(self, node):
            if node.file_content:
                node.file_content.destroy()

    def __check_writable(self):
        assert self.writable, f"{self.get_path()} is not writable"

    def __check_structure(self, child_node):
        assert self.is_archive() or self.tarinfo.isdir()
        if self.is_package():
            assert not child_node.is_archive()
        elif self.is_bundle():
            if not child_node.tarinfo.isdir():
                assert child_node.is_package() or child_node.is_signature() or '.' in self.children
        elif self.is_dlfile():
            assert not child_node.is_package()

    def unlink(self):
        """! Remove this node from tree. Node and children are not destroyed.
        @return removed node
        """
        if self.parent:
            self.parent.__check_writable()
            self.trace_unlink()
            self.parent.mark_modified()
            del self.parent.children[self.name]
            # update signature links
            TreeInternal.link_signature(self.parent, max_depth=1)
            self.parent = None
        return self

    def destroy(self):
        """! Remove and destroy this node and all its children.
        @return removed node
        """
        TreeWalker.walk(self, [self.__NodeDestroyer()])
        self.unlink()

    def add_child(self, child_node, index=None):
        """! Add a child node.
        If same child name exists, it will be replaced
        @param child_node: node to be added
        @param index: index where to insert node, None means append
        @return added node or None if it could not be added
        """
        self.__check_writable()
        self.__check_structure(child_node)
        if len(self.children) == 0 or child_node.name in self.children:
            index = None
        elif index and (index < 0 or index >= len(self.children)):
            index = None
        if index is None:
            previous = self.children.get(child_node.name)
            self.children[child_node.name] = child_node
            if previous and hasattr(previous, 'file_content') and previous.file_content:
                previous.file_content.destroy()
        else:
            new_children = OrderedDict()
            for count, (k, v) in enumerate(self.children.items()):
                if count == index:
                    new_children[child_node.name] = child_node
                new_children[k] = v
            self.children = new_children
        child_node.parent = self
        # create tarinfo if not present (case of a root archive)
        if not child_node.tarinfo:
            child_node.tarinfo = BaseNode.create_tarinfo(child_node.name, tarfile.REGTYPE)
        TreeWalker.walk(child_node, [self.__TarinfoNameUpdater()])
        child_node.trace_add()
        # update signature links
        TreeInternal.link_signature(child_node.parent, max_depth=1)
        # update writable for node itself
        TreeInternal.setup_writable(child_node)
        # if adding a signature node, update writable for signed node too
        if child_node.is_signature() and child_node.signed_node:
            TreeInternal.setup_writable(child_node.signed_node)
        return child_node

    def create_dir(self, dir_name):
        """! Add a child directory
        If same child name exists, it will be replaced
        @param dir_name: name of the directory
        @return created node
        """
        self.__check_writable()
        child_node = self.create_node(dir_name, tarfile.DIRTYPE)
        child_node.writable = True
        child_node.set_mode(0o755)
        return self.add_child(child_node)

    def create_file(self, file_name, content=b''):
        """! Add a child file
        @param file_name: name of the file
        @param content: content of file
        @return created node
        """
        self.__check_writable()
        child_node = self.create_node(file_name, tarfile.REGTYPE)
        child_node.writable = True
        child_node.set_content(content)
        child_node.set_mode(0o644)
        return self.add_child(child_node)

    def set_content(self, content):
        """! Set the content of this file node
        @param content: content of file
        @return this node
        """
        self.__check_writable()
        if self.tarinfo.type == tarfile.REGTYPE:
            if not self.file_content:
                self.file_content = FileContent()
            self.file_content.set_value(content)
            self.tarinfo.size = len(content)
            self.mark_modified()
        return self

    def set_mode(self, mode):
        """! Set the mode of this file/directory
        @param mode: octal mode value
        @return this node
        """
        self.__check_writable()
        if self.tarinfo.mode != mode:
            self.trace_chmod(self.tarinfo.mode, mode)
            self.tarinfo.mode = mode
            self.mark_modified()
        return self

    def set_user_name(self, name):
        """! Set the user name of this file/directory
        @param name: user name
        @return this node
        """
        self.__check_writable()
        if self.tarinfo.uname != name:
            self.tarinfo.uname = name
            self.mark_modified()
        return self

    def set_group_name(self, name):
        """! Set the group name of this file/directory
        @param name: group name
        @return this node
        """
        self.__check_writable()
        if self.tarinfo.gname != name:
            self.tarinfo.gname = name
            self.mark_modified()
        return self

    def copy(self):
        """! Make a deep copy of this node and its content, children and attributes
        @return copied node
        """
        # avoid copying whole tree
        tmp_parent = self.parent
        self.parent = None
        new_node = copy.deepcopy(self)
        # restore parent
        self.parent = tmp_parent
        return new_node

    def move(self, parent):
        """! Move this node to another parent
        @param parent: new parent node
        @return this node
        """
        if parent != self.parent:
            # will check if self.parent is writable
            self.unlink()
            # will check if parent is writable
            parent.add_child(self)
        return self

    def rename(self, newname):
        """! Rename this node and underlying tarinfo name
        @param newname: new name for the node
        @return this renamed node
        """
        self.__check_writable()
        ret_node = self
        if newname != self.name:
            if not self.parent:
                self.name = newname
            else:
                index = self.get_index()
                parent = self.parent
                self.unlink()
                # save signature node
                sav_signature_nodes = self.signature_nodes
                self.signature_nodes = []
                ret_node = self.copy()
                if ret_node.tarinfo:
                    ret_node.tarinfo.name = str(PurePosixPath(self.tarinfo.name).with_name(newname))
                ret_node.name = newname
                parent.add_child(ret_node, index=index)
                # restore signature node
                ret_node.signature_nodes = sav_signature_nodes
                if ret_node.signature_nodes:
                    signature_names = self.get_platform().get_signature_names(newname)
                    for node, sig_name in zip(ret_node.signature_nodes, signature_names):
                        node.rename(sig_name)
        return ret_node
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

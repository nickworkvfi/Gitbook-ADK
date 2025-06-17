---
title: packman/packmanlib/nodepath.py

---

# packman/packmanlib/nodepath.py



## Namespaces

| Name           |
| -------------- |
| **[packmanlib::nodepath](namespacepackmanlib_1_1nodepath.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[packmanlib::nodepath::NodePathMixin](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md)**  |




## Source code

```python
import re

from packmanlib.basenode import BaseNode


class NodePathMixin(BaseNode):
    def __search_child(self, child_name, leaf=False):
        return self.children.get(child_name)

    def __search_child_re(self, child_name_re, leaf=False):
        matches = []
        for child in self.children.values():
            # if not on leaf, only dir, symlink and archives are possible
            if not leaf and not (child.is_archive() or child.tarinfo.isdir() or child.tarinfo.issym()):
                continue
            if re.fullmatch(child_name_re, child.name):
                matches.append(child)
        if leaf:
            return matches
        if len(matches) == 1:
            return matches[0]
        return None

    def __find(self, node_path, search_method):
        if not node_path:
            return self
        # absolute refers to start of archive
        if node_path.startswith('/'):
            parent_archive = self.get_parent_archive()
            if not parent_archive:
                parent_archive = self
            return parent_archive.__find(node_path[1:], search_method)

        # find first position of '/'
        slash_pos = node_path.find('/')
        if slash_pos < 0:
            # allow multiple match on leafs
            result_nodes = search_method(self, node_path, leaf=True)
            if not result_nodes and '.' in self.children:
                # not found, give it another try with special case of dir links '.'
                result_nodes = self.children['.'].__find(node_path, search_method)
            return result_nodes
        child_name = node_path[:slash_pos]
        remaining = node_path[slash_pos+1:]

        # allow only unique match along the path
        child_node = search_method(self, child_name)
        if not child_node:
            # not found, give it another try with special case of dir links ('.' and '..')
            if child_name == '..':
                return self.parent.__find(remaining, search_method)
            elif child_name == '.':
                return self.__find(remaining, search_method)
            elif '.' in self.children:
                return self.children['.'].__find(node_path, search_method)
            else:
                return None
        # there is more recursion needed
        return child_node.__find(remaining, search_method)

    """! Retrieve list ancestor nodes this node within the archive or withing whole tree of archives
    @param include_root: include root in path
    @param within_archive: stop at first parent archive
    @return list of ancestor nodes
    """
    def get_path_nodes(self, include_root=False, within_archive=False):
        nodes_path = []
        node = self
        if not node.parent:
            if include_root:
                nodes_path.append(node)
        else:
            while node:
                nodes_path.append(node)
                node = node.parent
                if not node.parent or (within_archive and node.is_archive()):
                    if include_root:
                        nodes_path.append(node)
                    break
        nodes_path.reverse()
        return nodes_path

    def get_path(self, include_root=False, within_archive=False) -> str:
        """! Retrieve path of this node within the archive or withing whole tree of archives
        Separator '/' is used within archives and for recursion into archives.
        Example for 'dlfile.tgz/bundle.tgz/package.tgz/dir/file':
        - include_root=False, within_archive=False -> 'bundle.tgz/package.tgz/dir/file'
        - include_root=True, within_archive=False -> 'dlfile.tgz/bundle.tgz/package.tgz/dir/file'
        - include_root=True/False, within_archive=True -> 'dir/file'
        @param include_root: include root in path
        @param within_archive: stop at first parent archive
        @return path of the node
        """
        nodes = self.get_path_nodes(include_root=include_root, within_archive=within_archive)
        if not nodes:
            return '/'
        return '/'.join([node.name for node in nodes])

    def get_depth(self, within_archive=False) -> int:
        """! Retrieve depth of node within the archive or within whole tree of archives.
        Example for 'dlfile.tgz/bundle.tgz/package.tgz/dir/file':
        - within_archive=False: -> 4
        - within_archive=True: -> 2
        @param within_archive: stop at first parent archive
        @return depth of node
        """
        nodes = self.get_path_nodes(False, within_archive=within_archive)
        return len(nodes)

    def find(self, node_path: str):
        """! Find node according to node path provided.
        Search will look for exact node name match along the path.
        Example: dlfile.find("mybundle.tgz/mypackage.tgz/dir/file")
        @param node_path: node path
        @return node (BaseNode) if found, None if not
        """
        return self.__find(node_path, NodePathMixin.__search_child)

    def find_re(self, node_path_re: str):
        """! Find node according to regular expression node path provided
        Search will look for regex matching node name match along the path. Only the leaf node is accepted to have
        multiple matches
        @param node_path_re: node path regex
        @return a list of nodes matching, None if none found
        """
        return self.__find(node_path_re, NodePathMixin.__search_child_re)

    def has_ancestor(self, ancestor) -> bool:
        """! Find if node has another node as ancestor
        @param ancestor: ancestor (BaseNode) to look for
        @return return True if ancestor is found
        """
        node = self
        while node and node != ancestor:
            node = node.parent
        if node:
            return True
        return False
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

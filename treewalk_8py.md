---
title: packman/packmanlib/treewalk.py

---

# packman/packmanlib/treewalk.py



## Namespaces

| Name           |
| -------------- |
| **[packmanlib::treewalk](namespacepackmanlib_1_1treewalk.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[packmanlib::treewalk::Observer](classpackmanlib_1_1treewalk_1_1_observer.md)**  |
| class | **[packmanlib::treewalk::TreeWalker](classpackmanlib_1_1treewalk_1_1_tree_walker.md)**  |




## Source code

```python
class Observer:
    def found_node_cb(self, node):
        """! Callback for all nodes visited
        @param node: node visited
        """
        pass

    def found_archive_cb(self, archive):
        """! Callback for all archive nodes visited
        @param archive: archive visited
        """
        pass

    def found_dlfile_cb(self, dlfile):
        """! Callback for all dlfile nodes visited
        @param dlfile: dlfile visited
        """
        pass

    def found_upfile_cb(self, upfile):
        """! Callback for all upfile nodes visited
        @param upfile: upfile visited
        """
        pass

    def found_bundle_cb(self, bundle):
        """! Callback for all bundle nodes visited
        @param bundle: bundle visited
        """
        pass

    def found_package_cb(self, package):
        """! Callback for all package nodes visited
        @param package: package visited
        """
        pass

    def found_csd_cb(self, csd):
        """! Callback for all csd nodes visited
        @param csd: csd visited
        """
        pass

    def found_inf_cb(self, inf):
        """! Callback for all inf nodes visited
        @param inf: inf visited
        """
        pass

    def found_meta_cb(self, meta):
        """! Callback for all meta nodes visited
        @param meta: meta visited
        """
        pass

    def end_cb(self, node):
        """! Callback called once at the end of the tree walk
        @param node: node on which walk was started
        """
        pass


class TreeWalker:
    def __init__(self, max_arc_depth, max_depth, writable_only, post_order):
        self.observers = None
        self.max_arc_depth = max_arc_depth
        self.max_depth = max_depth
        self.writable_only = writable_only
        self.post_order = post_order

    def __visit(self, node):
        for observer in self.observers:
            observer.found_node_cb(node)

        if node.is_archive():
            for observer in self.observers:
                observer.found_archive_cb(node)

            if node.is_dlfile():
                for observer in self.observers:
                    observer.found_dlfile_cb(node)
            elif node.is_upfile():
                for observer in self.observers:
                    observer.found_upfile_cb(node)
            elif node.is_bundle():
                for observer in self.observers:
                    observer.found_bundle_cb(node)
            elif node.is_package():
                for observer in self.observers:
                    observer.found_package_cb(node)
            elif node.is_csd():
                for observer in self.observers:
                    observer.found_csd_cb(node)
            elif node.is_inf():
                for observer in self.observers:
                    observer.found_inf_cb(node)
            elif node.is_meta():
                for observer in self.observers:
                    observer.found_meta_cb(node)

    def __walk_children(self, node, arc_depth=1, depth=1):
        # make list first in order to allow modification in observers
        for child in list(node.children.values()):
            if not self.writable_only or child.writable:
                self.__walk(child, arc_depth, depth)

    def __walk(self, node, arc_depth=0, depth=0):
        if self.writable_only and not node.writable:
            return
        if 0 <= self.max_arc_depth < arc_depth:
            return
        if 0 <= self.max_depth < depth:
            return

        if not self.post_order:
            self.__visit(node)

        if node.is_archive():
            self.__walk_children(node, arc_depth + 1, depth + 1)
        else:
            self.__walk_children(node, arc_depth, depth + 1)

        if self.post_order:
            self.__visit(node)

    @staticmethod
    def walk(nodes, observers, max_arc_depth=-1, max_depth=-1, children_start=False, writable_only=False,
             post_order=False):
        """!
        Performs a depth-first / pre-order walk through the node calling observers callbacks
        @param node: start traversal from these nodes (single or list)
        @param observers: list of observers to be called
        @param max_arc_depth: maximum archive recursion depth, negative is infinite
        @param max_depth: maximum recursion depth, negative is infinite
        @param children_start: start with node's children instead of node itself
        @param writable_only: call observers only on writable nodes
        @param post_order: post-order traversal if True, pre-order traversal if False
        """
        if not isinstance(nodes, list):
            nodes = [ nodes ]
        treewalker = TreeWalker(max_arc_depth, max_depth, writable_only, post_order)
        treewalker.observers = observers
        for node in nodes:
            if children_start:
                treewalker.__walk_children(node)
            else:
                treewalker.__walk(node)
            for observer in treewalker.observers:
                observer.end_cb(node)
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

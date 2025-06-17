---
title: packmanlib::nodepath::NodePathMixin

---

# packmanlib::nodepath::NodePathMixin





Inherits from [BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md)

Inherited by [Node](classpackmanlib_1_1node_1_1_node.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[get_path_nodes](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-get-path-nodes)**(self self, include_root include_root =False, within_archive within_archive =False) |
| str | **[get_path](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-get-path)**(self self, include_root include_root =False, within_archive within_archive =False)<br>Retrieve path of this node within the archive or withing whole tree of archives Separator '/' is used within archives and for recursion into archives.  |
| int | **[get_depth](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-get-depth)**(self self, within_archive within_archive =False)<br>Retrieve depth of node within the archive or within whole tree of archives.  |
| def | **[find](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-find)**(self self, str node_path)<br>Find node according to node path provided.  |
| def | **[find_re](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-find-re)**(self self, str node_path_re)<br>Find node according to regular expression node path provided Search will look for regex matching node name match along the path.  |
| bool | **[has_ancestor](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-has-ancestor)**(self self, ancestor ancestor)<br>Find if node has another node as ancestor.  |

## Additional inherited members

**Public Functions inherited from [BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md)**

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](classpackmanlib_1_1basenode_1_1_base_node.md#function---init--)**(self self, str name =None, [BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md) parent =None, tarfile.TarInfo tarinfo =None) |
| str | **[get_type_str](classpackmanlib_1_1basenode_1_1_base_node.md#function-get-type-str)**(self self)<br>Returns node type as string Supported are: "Package", "Bundle", "Dlfile", "Signature", "Control", "Manifest", "Dir", "File", "Symlink".  |
| bool | **[is_csd](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-csd)**(self self)<br>Test if node is a CSD.  |
| bool | **[is_inf](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-inf)**(self self)<br>Test if node is an INF.  |
| bool | **[is_meta](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-meta)**(self self)<br>Test if node is a META.  |
| bool | **[is_manifest](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-manifest)**(self self)<br>Test if node is a manifest.  |
| bool | **[is_changeset](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-changeset)**(self self)<br>Test if node is a changeset.  |
| bool | **[is_archive](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-archive)**(self self)<br>Test if node is an archive.  |
| bool | **[is_dlfile](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-dlfile)**(self self)<br>Test if node is a dlfile.  |
| bool | **[is_upfile](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-upfile)**(self self)<br>Test if node is an upfile.  |
| bool | **[is_bundle](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-bundle)**(self self)<br>Test if node is a bundle.  |
| bool | **[is_package](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-package)**(self self)<br>Test if node is a package.  |
| bool | **[is_signature](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-signature)**(self self)<br>Test if node is a signature.  |
| bool | **[is_control](classpackmanlib_1_1basenode_1_1_base_node.md#function-is-control)**(self self)<br>Test if node is a control.  |
| def | **[mark_modified](classpackmanlib_1_1basenode_1_1_base_node.md#function-mark-modified)**(self self) |
| def | **[get_parent_archive](classpackmanlib_1_1basenode_1_1_base_node.md#function-get-parent-archive)**(self self)<br>Retrieve parent archive node.  |
| def | **[get_platform](classpackmanlib_1_1basenode_1_1_base_node.md#function-get-platform)**(self self)<br>Retrieve platform for this node.  |
| def | **[get_root_archive](classpackmanlib_1_1basenode_1_1_base_node.md#function-get-root-archive)**(self self)<br>Retrieve root archive node Root archive node has no parent archive.  |
| int | **[get_index](classpackmanlib_1_1basenode_1_1_base_node.md#function-get-index)**(self self)<br>Retrieve index of this node in the list of its parent's children.  |
| def | **[get_signer](classpackmanlib_1_1basenode_1_1_base_node.md#function-get-signer)**(self self) |
| int | **[get_mode](classpackmanlib_1_1basenode_1_1_base_node.md#function-get-mode)**(self self)<br>Retrieve file mode of this node.  |
| def | **[__str__](classpackmanlib_1_1basenode_1_1_base_node.md#function---str--)**(self self) |
| tarfile.TarInfo | **[create_tarinfo](classpackmanlib_1_1basenode_1_1_base_node.md#function-create-tarinfo)**(str tarinfo_name, entry_type entry_type)<br>Tarinfo creation helper.  |
| def | **[create_node](classpackmanlib_1_1basenode_1_1_base_node.md#function-create-node)**(tarinfo_name tarinfo_name, entry_type entry_type) |

**Public Attributes inherited from [BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md)**

|                | Name           |
| -------------- | -------------- |
| | **[name](classpackmanlib_1_1basenode_1_1_base_node.md#variable-name)** <br>node name (str)  |
| | **[parent](classpackmanlib_1_1basenode_1_1_base_node.md#variable-parent)** <br>parent node ([BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md))  |
| | **[tarinfo](classpackmanlib_1_1basenode_1_1_base_node.md#variable-tarinfo)** <br>children of this node in order.  |
| | **[file_content](classpackmanlib_1_1basenode_1_1_base_node.md#variable-file-content)** <br>Object representing the content of the file.  |
| | **[signature_nodes](classpackmanlib_1_1basenode_1_1_base_node.md#variable-signature-nodes)** <br>Nodes holding signature of this node.  |
| | **[additional_signature_nodes](classpackmanlib_1_1basenode_1_1_base_node.md#variable-additional-signature-nodes)** <br>Nodes holding additional signature of this node.  |


## Public Functions Documentation

### function get_path_nodes

```python
def get_path_nodes(
    self self,
    include_root include_root =False,
    within_archive within_archive =False
)
```


### function get_path

```python
str get_path(
    self self,
    include_root include_root =False,
    within_archive within_archive =False
)
```

Retrieve path of this node within the archive or withing whole tree of archives Separator '/' is used within archives and for recursion into archives. 

Example for 'dlfile.tgz/bundle.tgz/package.tgz/dir/file':

* include_root=False, within_archive=False -> 'bundle.tgz/package.tgz/dir/file'
* include_root=True, within_archive=False -> 'dlfile.tgz/bundle.tgz/package.tgz/dir/file'
* include_root=True/False, within_archive=True -> 'dir/file' include_rootinclude root in path 

within_archivestop at first parent archive 

path of the node 


### function get_depth

```python
int get_depth(
    self self,
    within_archive within_archive =False
)
```

Retrieve depth of node within the archive or within whole tree of archives. 

Example for 'dlfile.tgz/bundle.tgz/package.tgz/dir/file':

* within_archive=False: -> 4
* within_archive=True: -> 2 within_archivestop at first parent archive 

depth of node 


### function find

```python
def find(
    self self,
    str node_path
)
```

Find node according to node path provided. 

**Parameters**: 

  * **node_path** node path 


**Return**: node (BaseNode) if found, None if not 

Search will look for exact node name match along the path. Example: dlfile.find("mybundle.tgz/mypackage.tgz/dir/file") 


### function find_re

```python
def find_re(
    self self,
    str node_path_re
)
```

Find node according to regular expression node path provided Search will look for regex matching node name match along the path. 

**Parameters**: 

  * **node_path_re** node path regex 


**Return**: a list of nodes matching, None if none found 

Only the leaf node is accepted to have multiple matches 


### function has_ancestor

```python
bool has_ancestor(
    self self,
    ancestor ancestor
)
```

Find if node has another node as ancestor. 

**Parameters**: 

  * **ancestor** ancestor (BaseNode) to look for 


**Return**: return True if ancestor is found 

-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
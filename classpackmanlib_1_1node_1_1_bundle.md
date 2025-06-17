---
title: packmanlib::node::Bundle

---

# packmanlib::node::Bundle



 [More...](#detailed-description)

Inherits from [Archive](classpackmanlib_1_1node_1_1_archive.md), [Node](classpackmanlib_1_1node_1_1_node.md), [NodePathMixin](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md), [NodeActionMixin](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md), NodeActionTraceMixin, [BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](classpackmanlib_1_1node_1_1_bundle.md#function---init--)**(self self, [platform](classpackmanlib_1_1node_1_1_archive.md#variable-platform) platform) |
| def | **[new_archive_child](classpackmanlib_1_1node_1_1_bundle.md#function-new-archive-child)**(self self) |
| def | **[create_bundle](classpackmanlib_1_1node_1_1_bundle.md#function-create-bundle)**([platform](classpackmanlib_1_1node_1_1_archive.md#variable-platform) platform, base_name base_name, stem_name stem_name =None, control_content control_content =None)<br>Create a bundle node It also creates a CONTROL directory and a control file in it.  |

## Additional inherited members

**Public Functions inherited from [Archive](classpackmanlib_1_1node_1_1_archive.md)**

|                | Name           |
| -------------- | -------------- |
| def | **[control_node](classpackmanlib_1_1node_1_1_archive.md#function-control-node)**(self self) |
| def | **[control](classpackmanlib_1_1node_1_1_archive.md#function-control)**(self self) |
| def | **[set_signer](classpackmanlib_1_1node_1_1_archive.md#function-set-signer)**(self self, signer_type signer_type) |
| def | **[setup_archive](classpackmanlib_1_1node_1_1_archive.md#function-setup-archive)**(archive archive, full_name full_name) |

**Public Attributes inherited from [Archive](classpackmanlib_1_1node_1_1_archive.md)**

|                | Name           |
| -------------- | -------------- |
| | **[platform](classpackmanlib_1_1node_1_1_archive.md#variable-platform)**  |
| | **[tar](classpackmanlib_1_1node_1_1_archive.md#variable-tar)**  |
| | **[is_gzip](classpackmanlib_1_1node_1_1_archive.md#variable-is-gzip)**  |
| | **[pax_headers_found](classpackmanlib_1_1node_1_1_archive.md#variable-pax-headers-found)**  |
| | **[signer](classpackmanlib_1_1node_1_1_archive.md#variable-signer)**  |
| | **[report](classpackmanlib_1_1node_1_1_archive.md#variable-report)**  |

**Public Functions inherited from [Node](classpackmanlib_1_1node_1_1_node.md)**

|                | Name           |
| -------------- | -------------- |
| def | **[create_node](classpackmanlib_1_1node_1_1_node.md#function-create-node)**([name](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-name) name, entry_type entry_type) |

**Public Functions inherited from [NodePathMixin](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md)**

|                | Name           |
| -------------- | -------------- |
| def | **[get_path_nodes](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-get-path-nodes)**(self self, include_root include_root =False, within_archive within_archive =False) |
| str | **[get_path](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-get-path)**(self self, include_root include_root =False, within_archive within_archive =False)<br>Retrieve path of this node within the archive or withing whole tree of archives Separator '/' is used within archives and for recursion into archives.  |
| int | **[get_depth](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-get-depth)**(self self, within_archive within_archive =False)<br>Retrieve depth of node within the archive or within whole tree of archives.  |
| def | **[find](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-find)**(self self, str node_path)<br>Find node according to node path provided.  |
| def | **[find_re](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-find-re)**(self self, str node_path_re)<br>Find node according to regular expression node path provided Search will look for regex matching node name match along the path.  |
| bool | **[has_ancestor](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#function-has-ancestor)**(self self, ancestor ancestor)<br>Find if node has another node as ancestor.  |

**Public Functions inherited from [NodeActionMixin](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md)**

|                | Name           |
| -------------- | -------------- |
| def | **[unlink](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-unlink)**(self self)<br>Remove this node from tree.  |
| def | **[destroy](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-destroy)**(self self)<br>Remove and destroy this node and all its children.  |
| def | **[add_child](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-add-child)**(self self, child_node child_node, index index =None)<br>Add a child node.  |
| def | **[create_dir](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-create-dir)**(self self, dir_name dir_name)<br>Add a child directory If same child name exists, it will be replaced.  |
| def | **[create_file](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-create-file)**(self self, file_name file_name, content content =b'')<br>Add a child file.  |
| def | **[set_content](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-set-content)**(self self, content content)<br>Set the content of this file node.  |
| def | **[set_mode](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-set-mode)**(self self, mode mode)<br>Set the mode of this file/directory.  |
| def | **[set_user_name](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-set-user-name)**(self self, [name](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-name) name)<br>Set the user name of this file/directory.  |
| def | **[set_group_name](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-set-group-name)**(self self, [name](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-name) name)<br>Set the group name of this file/directory.  |
| def | **[copy](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-copy)**(self self)<br>Make a deep copy of this node and its content, children and attributes.  |
| def | **[move](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-move)**(self self, [parent](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-parent) parent)<br>Move this node to another parent.  |
| def | **[rename](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#function-rename)**(self self, newname newname)<br>Rename this node and underlying tarinfo name.  |

**Public Attributes inherited from [NodeActionMixin](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md)**

|                | Name           |
| -------------- | -------------- |
| | **[parent](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-parent)**  |
| | **[children](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-children)**  |
| | **[file_content](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-file-content)**  |
| | **[name](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-name)**  |
| | **[signature_nodes](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-signature-nodes)**  |

**Public Functions inherited from [BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md)**

|                | Name           |
| -------------- | -------------- |
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


## Detailed Description

```python
class packmanlib::node::Bundle;
```




```
Represents a bundle node ```

## Public Functions Documentation

### function __init__

```python
def __init__(
    self self,
    platform platform
)
```


**Reimplements**: [packmanlib::node::Archive::__init__](classpackmanlib_1_1node_1_1_archive.md#function---init--)


### function new_archive_child

```python
def new_archive_child(
    self self
)
```


### function create_bundle

```python
static def create_bundle(
    platform platform,
    base_name base_name,
    stem_name stem_name =None,
    control_content control_content =None
)
```

Create a bundle node It also creates a CONTROL directory and a control file in it. 

**Parameters**: 

  * **platform** platform name or instance 
  * **base_name** name to be used in control file 
  * **stem_name** will be 'bdl.[base_name]' if not provided 
  * **control_content** bytes content of the control file. Name and version are populated if not provided. 


**Return**: this node 

Name of node will be '[stem_name].tgz' 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
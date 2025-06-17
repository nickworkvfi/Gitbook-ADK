---
title: packmanlib::nodeaction::NodeActionMixin

---

# packmanlib::nodeaction::NodeActionMixin





Inherits from [BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md)

Inherited by [Node](classpackmanlib_1_1node_1_1_node.md)

## Public Functions

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

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| | **[parent](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-parent)**  |
| | **[children](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-children)**  |
| | **[file_content](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-file-content)**  |
| | **[name](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-name)**  |
| | **[signature_nodes](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#variable-signature-nodes)**  |

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
| | **[tarinfo](classpackmanlib_1_1basenode_1_1_base_node.md#variable-tarinfo)** <br>children of this node in order.  |
| | **[additional_signature_nodes](classpackmanlib_1_1basenode_1_1_base_node.md#variable-additional-signature-nodes)** <br>Nodes holding additional signature of this node.  |


## Public Functions Documentation

### function unlink

```python
def unlink(
    self self
)
```

Remove this node from tree. 

**Return**: removed node 

Node and children are not destroyed. 


### function destroy

```python
def destroy(
    self self
)
```

Remove and destroy this node and all its children. 

**Return**: removed node 

### function add_child

```python
def add_child(
    self self,
    child_node child_node,
    index index =None
)
```

Add a child node. 

**Parameters**: 

  * **child_node** node to be added 
  * **index** index where to insert node, None means append 


**Return**: added node or None if it could not be added 

If same child name exists, it will be replaced 


### function create_dir

```python
def create_dir(
    self self,
    dir_name dir_name
)
```

Add a child directory If same child name exists, it will be replaced. 

**Parameters**: 

  * **dir_name** name of the directory 


**Return**: created node 

### function create_file

```python
def create_file(
    self self,
    file_name file_name,
    content content =b''
)
```

Add a child file. 

**Parameters**: 

  * **file_name** name of the file 
  * **content** content of file 


**Return**: created node 

### function set_content

```python
def set_content(
    self self,
    content content
)
```

Set the content of this file node. 

**Parameters**: 

  * **content** content of file 


**Return**: this node 

### function set_mode

```python
def set_mode(
    self self,
    mode mode
)
```

Set the mode of this file/directory. 

**Parameters**: 

  * **mode** octal mode value 


**Return**: this node 

### function set_user_name

```python
def set_user_name(
    self self,
    name name
)
```

Set the user name of this file/directory. 

**Parameters**: 

  * **name** user name 


**Return**: this node 

### function set_group_name

```python
def set_group_name(
    self self,
    name name
)
```

Set the group name of this file/directory. 

**Parameters**: 

  * **name** group name 


**Return**: this node 

### function copy

```python
def copy(
    self self
)
```

Make a deep copy of this node and its content, children and attributes. 

**Return**: copied node 

### function move

```python
def move(
    self self,
    parent parent
)
```

Move this node to another parent. 

**Parameters**: 

  * **parent** new parent node 


**Return**: this node 

### function rename

```python
def rename(
    self self,
    newname newname
)
```

Rename this node and underlying tarinfo name. 

**Parameters**: 

  * **newname** new name for the node 


**Return**: this renamed node 

## Public Attributes Documentation

### variable parent

```python
parent;
```


### variable children

```python
children;
```


### variable file_content

```python
file_content;
```


### variable name

```python
name;
```


### variable signature_nodes

```python
signature_nodes;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
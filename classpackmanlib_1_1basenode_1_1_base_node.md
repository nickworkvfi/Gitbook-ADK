---
title: packmanlib::basenode::BaseNode

---

# packmanlib::basenode::BaseNode



 [More...](#detailed-description)

Inherited by [NodeActionMixin](classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md), [NodePathMixin](classpackmanlib_1_1nodepath_1_1_node_path_mixin.md)

## Public Functions

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

## Public Attributes

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
class packmanlib::basenode::BaseNode;
```




```
Base node class for all nodes
```

## Public Functions Documentation

### function __init__

```python
def __init__(
    self self,
    str name =None,
    BaseNode parent =None,
    tarfile.TarInfo tarinfo =None
)
```


### function get_type_str

```python
str get_type_str(
    self self
)
```

Returns node type as string Supported are: "Package", "Bundle", "Dlfile", "Signature", "Control", "Manifest", "Dir", "File", "Symlink". 

**Return**: node type string or 'Unknown' 

### function is_csd

```python
bool is_csd(
    self self
)
```

Test if node is a CSD. 

**Return**: True if it is a CSD archive, False otherwise 

### function is_inf

```python
bool is_inf(
    self self
)
```

Test if node is an INF. 

**Return**: True if it is an INF archive, False otherwise 

### function is_meta

```python
bool is_meta(
    self self
)
```

Test if node is a META. 

**Return**: True if it is a META archive, False otherwise 

### function is_manifest

```python
bool is_manifest(
    self self
)
```

Test if node is a manifest. 

**Return**: True if it is a manifest, False otherwise 

### function is_changeset

```python
bool is_changeset(
    self self
)
```

Test if node is a changeset. 

**Return**: True if it is a changeset, False otherwise 

### function is_archive

```python
bool is_archive(
    self self
)
```

Test if node is an archive. 

**Return**: True if it is an archive, False otherwise 

### function is_dlfile

```python
bool is_dlfile(
    self self
)
```

Test if node is a dlfile. 

**Return**: True if it is a dlfile, False otherwise 

### function is_upfile

```python
bool is_upfile(
    self self
)
```

Test if node is an upfile. 

**Return**: True if it is an upfile, False otherwise 

### function is_bundle

```python
bool is_bundle(
    self self
)
```

Test if node is a bundle. 

**Return**: True if it is a bundle, False otherwise 

### function is_package

```python
bool is_package(
    self self
)
```

Test if node is a package. 

**Return**: True if it is a package, False otherwise 

### function is_signature

```python
bool is_signature(
    self self
)
```

Test if node is a signature. 

**Return**: True if it is a signature, False otherwise 

### function is_control

```python
bool is_control(
    self self
)
```

Test if node is a control. 

**Return**: True if it is a control file, False otherwise 

### function mark_modified

```python
def mark_modified(
    self self
)
```


### function get_parent_archive

```python
def get_parent_archive(
    self self
)
```

Retrieve parent archive node. 

**Return**: Parent archive node, itself if no parent 

### function get_platform

```python
def get_platform(
    self self
)
```

Retrieve platform for this node. 

**Return**: platform instance 

### function get_root_archive

```python
def get_root_archive(
    self self
)
```

Retrieve root archive node Root archive node has no parent archive. 

**Return**: Root archive node 

### function get_index

```python
int get_index(
    self self
)
```

Retrieve index of this node in the list of its parent's children. 

**Return**: 0-based index of this node 

### function get_signer

```python
def get_signer(
    self self
)
```


### function get_mode

```python
int get_mode(
    self self
)
```

Retrieve file mode of this node. 

**Return**: mode value or None if error 

### function __str__

```python
def __str__(
    self self
)
```


### function create_tarinfo

```python
static tarfile.TarInfo create_tarinfo(
    str tarinfo_name,
    entry_type entry_type
)
```

Tarinfo creation helper. 

**Parameters**: 

  * **tarinfo_name** name for tarinfo 
  * **entry_type** type of tar entry (see TarInfo) 


**Return**: TarInfo instance created 

### function create_node

```python
static def create_node(
    tarinfo_name tarinfo_name,
    entry_type entry_type
)
```


**Reimplemented by**: [packmanlib::node::Node::create_node](classpackmanlib_1_1node_1_1_node.md#function-create-node)


## Public Attributes Documentation

### variable name

```python
name;
```

node name (str) 

### variable parent

```python
parent;
```

parent node ([BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md)) 

### variable tarinfo

```python
tarinfo;
```

children of this node in order. 

Keys are node name, values [BaseNode](classpackmanlib_1_1basenode_1_1_base_node.md) instances Tarinfo object containing the type of archive entry, path, user, group, permission, etc. see TarInfo documentation 


### variable file_content

```python
file_content;
```

Object representing the content of the file. 

### variable signature_nodes

```python
signature_nodes;
```

Nodes holding signature of this node. 

### variable additional_signature_nodes

```python
additional_signature_nodes;
```

Nodes holding additional signature of this node. 

-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
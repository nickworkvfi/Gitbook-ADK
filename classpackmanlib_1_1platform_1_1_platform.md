---
title: packmanlib::platform::Platform

---

# packmanlib::platform::Platform





## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](classpackmanlib_1_1platform_1_1_platform.md#function---init--)**(self self, [name](classpackmanlib_1_1platform_1_1_platform.md#variable-name) name) |
| bool | **[is_vos1](classpackmanlib_1_1platform_1_1_platform.md#function-is-vos1)**(self self) |
| bool | **[is_vos2](classpackmanlib_1_1platform_1_1_platform.md#function-is-vos2)**(self self) |
| bool | **[is_vos3](classpackmanlib_1_1platform_1_1_platform.md#function-is-vos3)**(self self) |
| bool | **[is_vaos](classpackmanlib_1_1platform_1_1_platform.md#function-is-vaos)**(self self) |
| def | **[get_signature_names](classpackmanlib_1_1platform_1_1_platform.md#function-get-signature-names)**(self self, base_name base_name)<br>Creates list of names using base_name + signature extensions.  |
| def | **[get_signature_strindex](classpackmanlib_1_1platform_1_1_platform.md#function-get-signature-strindex)**(self self, [name](classpackmanlib_1_1platform_1_1_platform.md#variable-name) name) |
| def | **[get_signed_node_name](classpackmanlib_1_1platform_1_1_platform.md#function-get-signed-node-name)**(self self, sig_name sig_name)<br>Get signed node name from signature name.  |
| def | **[get_mode](classpackmanlib_1_1platform_1_1_platform.md#function-get-mode)**(self self) |
| def | **[user_is_valid](classpackmanlib_1_1platform_1_1_platform.md#function-user-is-valid)**(self self, user user) |
| def | **[user_type](classpackmanlib_1_1platform_1_1_platform.md#function-user-type)**(self self, user user) |
| def | **[can_remove](classpackmanlib_1_1platform_1_1_platform.md#function-can-remove)**(self self, user user, user_to_remove user_to_remove) |
| def | **[get](classpackmanlib_1_1platform_1_1_platform.md#function-get)**(str name)<br>Retrieve platform instance by name.  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| list | **[ALL](classpackmanlib_1_1platform_1_1_platform.md#variable-all)**  |
| list | **[UI_SUPPORTED](classpackmanlib_1_1platform_1_1_platform.md#variable-ui-supported)**  |
| list | **[MODES](classpackmanlib_1_1platform_1_1_platform.md#variable-modes)**  |
| | **[name](classpackmanlib_1_1platform_1_1_platform.md#variable-name)**  |
| | **[dlfile_compressed](classpackmanlib_1_1platform_1_1_platform.md#variable-dlfile-compressed)**  |
| | **[package_compressed](classpackmanlib_1_1platform_1_1_platform.md#variable-package-compressed)**  |
| | **[naming](classpackmanlib_1_1platform_1_1_platform.md#variable-naming)**  |
| | **[filelist_optim](classpackmanlib_1_1platform_1_1_platform.md#variable-filelist-optim)**  |
| | **[blacklist_optim](classpackmanlib_1_1platform_1_1_platform.md#variable-blacklist-optim)**  |
| | **[order_optim](classpackmanlib_1_1platform_1_1_platform.md#variable-order-optim)**  |
| | **[sig_ext](classpackmanlib_1_1platform_1_1_platform.md#variable-sig-ext)**  |
| | **[signature_count](classpackmanlib_1_1platform_1_1_platform.md#variable-signature-count)**  |
| | **[mode](classpackmanlib_1_1platform_1_1_platform.md#variable-mode)**  |
| | **[vfi_nocheck](classpackmanlib_1_1platform_1_1_platform.md#variable-vfi-nocheck)**  |
| | **[vfi_noumask](classpackmanlib_1_1platform_1_1_platform.md#variable-vfi-noumask)**  |
| | **[collapse_fixed_issues](classpackmanlib_1_1platform_1_1_platform.md#variable-collapse-fixed-issues)**  |
| | **[windows_force_permissions](classpackmanlib_1_1platform_1_1_platform.md#variable-windows-force-permissions)**  |
| | **[vfi_internal](classpackmanlib_1_1platform_1_1_platform.md#variable-vfi-internal)**  |
| | **[vhq_force_info](classpackmanlib_1_1platform_1_1_platform.md#variable-vhq-force-info)**  |

## Public Functions Documentation

### function __init__

```python
def __init__(
    self self,
    name name
)
```


### function is_vos1

```python
bool is_vos1(
    self self
)
```


### function is_vos2

```python
bool is_vos2(
    self self
)
```


### function is_vos3

```python
bool is_vos3(
    self self
)
```


### function is_vaos

```python
bool is_vaos(
    self self
)
```


### function get_signature_names

```python
def get_signature_names(
    self self,
    base_name base_name
)
```

Creates list of names using base_name + signature extensions. 

**Return**: list of signature names 

### function get_signature_strindex

```python
def get_signature_strindex(
    self self,
    name name
)
```


### function get_signed_node_name

```python
def get_signed_node_name(
    self self,
    sig_name sig_name
)
```

Get signed node name from signature name. 

**Return**: signed node name 

### function get_mode

```python
def get_mode(
    self self
)
```


### function user_is_valid

```python
def user_is_valid(
    self self,
    user user
)
```


### function user_type

```python
def user_type(
    self self,
    user user
)
```


### function can_remove

```python
def can_remove(
    self self,
    user user,
    user_to_remove user_to_remove
)
```


### function get

```python
static def get(
    str name
)
```

Retrieve platform instance by name. 

**Parameters**: 

  * **name** name of platform (one of PLATFORM_XXX) 


**Return**: [Platform](classpackmanlib_1_1platform_1_1_platform.md) instance 

## Public Attributes Documentation

### variable ALL

```python
static list ALL =  [PLATFORM_VOS1, PLATFORM_VOS2, PLATFORM_VOS3, PLATFORM_VAOS];
```


### variable UI_SUPPORTED

```python
static list UI_SUPPORTED =  [PLATFORM_VOS1, PLATFORM_VOS2, PLATFORM_VOS3];
```


### variable MODES

```python
static list MODES =  [MODE_OSDEV, MODE_APPDEV, MODE_PROD];
```


### variable name

```python
name;
```


### variable dlfile_compressed

```python
dlfile_compressed;
```


### variable package_compressed

```python
package_compressed;
```


### variable naming

```python
naming;
```


### variable filelist_optim

```python
filelist_optim;
```


### variable blacklist_optim

```python
blacklist_optim;
```


### variable order_optim

```python
order_optim;
```


### variable sig_ext

```python
sig_ext;
```


### variable signature_count

```python
signature_count;
```


### variable mode

```python
mode;
```


### variable vfi_nocheck

```python
vfi_nocheck;
```


### variable vfi_noumask

```python
vfi_noumask;
```


### variable collapse_fixed_issues

```python
collapse_fixed_issues;
```


### variable windows_force_permissions

```python
windows_force_permissions;
```


### variable vfi_internal

```python
vfi_internal;
```


### variable vhq_force_info

```python
vhq_force_info;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
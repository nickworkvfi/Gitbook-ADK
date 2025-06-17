---
title: packmanlib::treeinfo::VOSTreeInfo

---

# packmanlib::treeinfo::VOSTreeInfo





## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#function---init--)**(self self, [dlfile](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#variable-dlfile) dlfile) |
| def | **[get_adk_version](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#function-get-adk-version)**(self self)<br>Retrieve ADK version.  |
| def | **[get_os_version](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#function-get-os-version)**(self self)<br>Retrieve OS version.  |
| def | **[has_os](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#function-has-os)**(self self)<br>Check if contains an OS.  |
| def | **[has_blacklists](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#function-has-blacklists)**(self self)<br>Check if contains blacklists.  |
| def | **[get_blacklists](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#function-get-blacklists)**(self self)<br>Returns dictionary such as dict[device] = set(blacklisted bundles,...)  |
| def | **[get_full_device_list](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#function-get-full-device-list)**(self self)<br>Return sorted list of devices.  |
| def | **[get_bundle_device_list](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#function-get-bundle-device-list)**(self self, bundle bundle)<br>Returns sorted list of all products on which this bundle can be installed.  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| | **[dlfile](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#variable-dlfile)**  |
| | **[blacklists](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#variable-blacklists)**  |
| | **[full_device_list](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md#variable-full-device-list)**  |

## Public Functions Documentation

### function __init__

```python
def __init__(
    self self,
    dlfile dlfile
)
```


### function get_adk_version

```python
def get_adk_version(
    self self
)
```

Retrieve ADK version. 

**Return**: adk version string or empty string if not found 

### function get_os_version

```python
def get_os_version(
    self self
)
```

Retrieve OS version. 

**Return**: adk version string or empty string if not found 

### function has_os

```python
def has_os(
    self self
)
```

Check if contains an OS. 

**Return**: True if contains OS, False if not 

### function has_blacklists

```python
def has_blacklists(
    self self
)
```

Check if contains blacklists. 

**Return**: True if contains blacklists, False if not 

### function get_blacklists

```python
def get_blacklists(
    self self
)
```

Returns dictionary such as dict[device] = set(blacklisted bundles,...) 

**Return**: return blacklists dictionary 

### function get_full_device_list

```python
def get_full_device_list(
    self self
)
```

Return sorted list of devices. 

**Return**: sorted list of devices 

Dlfile must contain an OS. Looks for devices in blacklists, then by llayer bundle names 


### function get_bundle_device_list

```python
def get_bundle_device_list(
    self self,
    bundle bundle
)
```

Returns sorted list of all products on which this bundle can be installed. 

**Return**: sorted list of supported devices for this bundle 

This takes into account blacklisting and targeting :param bundle: bundle node 


## Public Attributes Documentation

### variable dlfile

```python
dlfile;
```


### variable blacklists

```python
blacklists;
```


### variable full_device_list

```python
full_device_list;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
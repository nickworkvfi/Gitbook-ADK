---
title: packmanlib::treeinfo::VOS3TreeInfo

---

# packmanlib::treeinfo::VOS3TreeInfo





## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[BundleCounter](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_bundle_counter.md)**  |
| class | **[UPFileCounter](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_u_p_file_counter.md)**  |
| class | **[UserBundleFinder](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_user_bundle_finder.md)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info.md#function---init--)**(self self, [dlfile](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info.md#variable-dlfile) dlfile) |
| def | **[get_adk_version](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info.md#function-get-adk-version)**(self self)<br>Retrieve ADK version.  |
| def | **[has_adk](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info.md#function-has-adk)**(self self)<br>Check if contains an ADK.  |
| def | **[has_user_bundle](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info.md#function-has-user-bundle)**(self self) |
| def | **[nb_bundles](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info.md#function-nb-bundles)**(self self) |
| def | **[nb_upfiles](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info.md#function-nb-upfiles)**(self self) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| | **[dlfile](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info.md#variable-dlfile)**  |

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

### function has_adk

```python
def has_adk(
    self self
)
```

Check if contains an ADK. 

**Return**: True if contains ADK, False if not 

### function has_user_bundle

```python
def has_user_bundle(
    self self
)
```


### function nb_bundles

```python
def nb_bundles(
    self self
)
```


### function nb_upfiles

```python
def nb_upfiles(
    self self
)
```


## Public Attributes Documentation

### variable dlfile

```python
dlfile;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
---
title: packmanlib::io::ArchiveWriter::ModifiedArchiveLister

---

# packmanlib::io::ArchiveWriter::ModifiedArchiveLister





Inherits from [Observer](classpackmanlib_1_1treewalk_1_1_observer.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function---init--)**(self self) |
| def | **[get_result](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-get-result)**(self self) |
| def | **[found_dlfile_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-dlfile-cb)**(self self, dlfile dlfile)<br>Callback for all dlfile nodes visited.  |
| def | **[found_upfile_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-upfile-cb)**(self self, upfile upfile)<br>Callback for all upfile nodes visited.  |
| def | **[found_bundle_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-bundle-cb)**(self self, bundle bundle)<br>Callback for all bundle nodes visited.  |
| def | **[found_package_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-package-cb)**(self self, package package)<br>Callback for all package nodes visited.  |
| def | **[found_csd_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-csd-cb)**(self self, csd csd)<br>Callback for all csd nodes visited.  |
| def | **[found_inf_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-inf-cb)**(self self, inf inf)<br>Callback for all inf nodes visited.  |
| def | **[found_meta_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-meta-cb)**(self self, meta meta)<br>Callback for all meta nodes visited.  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| | **[level0](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#variable-level0)**  |
| | **[level1](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#variable-level1)**  |
| | **[level2](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#variable-level2)**  |

## Additional inherited members

**Public Functions inherited from [Observer](classpackmanlib_1_1treewalk_1_1_observer.md)**

|                | Name           |
| -------------- | -------------- |
| def | **[found_node_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-node-cb)**(self self, node node)<br>Callback for all nodes visited.  |
| def | **[found_archive_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-archive-cb)**(self self, archive archive)<br>Callback for all archive nodes visited.  |
| def | **[end_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-end-cb)**(self self, node node)<br>Callback called once at the end of the tree walk.  |


## Public Functions Documentation

### function __init__

```python
def __init__(
    self self
)
```


### function get_result

```python
def get_result(
    self self
)
```


### function found_dlfile_cb

```python
def found_dlfile_cb(
    self self,
    dlfile dlfile
)
```

Callback for all dlfile nodes visited. 

**Parameters**: 

  * **dlfile** dlfile visited 


**Reimplements**: [packmanlib::treewalk::Observer::found_dlfile_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-dlfile-cb)


### function found_upfile_cb

```python
def found_upfile_cb(
    self self,
    upfile upfile
)
```

Callback for all upfile nodes visited. 

**Parameters**: 

  * **upfile** upfile visited 


**Reimplements**: [packmanlib::treewalk::Observer::found_upfile_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-upfile-cb)


### function found_bundle_cb

```python
def found_bundle_cb(
    self self,
    bundle bundle
)
```

Callback for all bundle nodes visited. 

**Parameters**: 

  * **bundle** bundle visited 


**Reimplements**: [packmanlib::treewalk::Observer::found_bundle_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-bundle-cb)


### function found_package_cb

```python
def found_package_cb(
    self self,
    package package
)
```

Callback for all package nodes visited. 

**Parameters**: 

  * **package** package visited 


**Reimplements**: [packmanlib::treewalk::Observer::found_package_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-package-cb)


### function found_csd_cb

```python
def found_csd_cb(
    self self,
    csd csd
)
```

Callback for all csd nodes visited. 

**Parameters**: 

  * **csd** csd visited 


**Reimplements**: [packmanlib::treewalk::Observer::found_csd_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-csd-cb)


### function found_inf_cb

```python
def found_inf_cb(
    self self,
    inf inf
)
```

Callback for all inf nodes visited. 

**Parameters**: 

  * **inf** inf visited 


**Reimplements**: [packmanlib::treewalk::Observer::found_inf_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-inf-cb)


### function found_meta_cb

```python
def found_meta_cb(
    self self,
    meta meta
)
```

Callback for all meta nodes visited. 

**Parameters**: 

  * **meta** meta visited 


**Reimplements**: [packmanlib::treewalk::Observer::found_meta_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-meta-cb)


## Public Attributes Documentation

### variable level0

```python
level0;
```


### variable level1

```python
level1;
```


### variable level2

```python
level2;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
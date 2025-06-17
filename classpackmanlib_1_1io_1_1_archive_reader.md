---
title: packmanlib::io::ArchiveReader

---

# packmanlib::io::ArchiveReader





## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](classpackmanlib_1_1io_1_1_archive_reader.md#function---init--)**(self self) |
| def | **[read_file](classpackmanlib_1_1io_1_1_archive_reader.md#function-read-file)**(archive archive, path path)<br>Extract archive from file recursively to build in-memory node tree.  |
| def | **[read_fileobj](classpackmanlib_1_1io_1_1_archive_reader.md#function-read-fileobj)**(archive archive, fileobj fileobj, name name)<br>Extract archive from file object recursively to build in-memory node tree.  |
| def | **[read_pickled_file](classpackmanlib_1_1io_1_1_archive_reader.md#function-read-pickled-file)**(path path, gz gz =False)<br>Extract pickled file.  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| | **[last_node_added_stack](classpackmanlib_1_1io_1_1_archive_reader.md#variable-last-node-added-stack)**  |

## Public Functions Documentation

### function __init__

```python
def __init__(
    self self
)
```


### function read_file

```python
static def read_file(
    archive archive,
    path path
)
```

Extract archive from file recursively to build in-memory node tree. 

**Parameters**: 

  * **archive** archive root node 
  * **path** path to the archive file 


### function read_fileobj

```python
static def read_fileobj(
    archive archive,
    fileobj fileobj,
    name name
)
```

Extract archive from file object recursively to build in-memory node tree. 

**Parameters**: 

  * **archive** archive root node 
  * **fileobj** path to the archive file 
  * **name** name of the root archive node 


### function read_pickled_file

```python
static def read_pickled_file(
    path path,
    gz gz =False
)
```

Extract pickled file. 

**Parameters**: 

  * **path** path to the pickled file 
  * **gz** whether pickled file is gzipped :return pickled object 


## Public Attributes Documentation

### variable last_node_added_stack

```python
last_node_added_stack;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
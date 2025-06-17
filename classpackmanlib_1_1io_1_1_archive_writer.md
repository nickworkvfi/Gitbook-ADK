---
title: packmanlib::io::ArchiveWriter

---

# packmanlib::io::ArchiveWriter





## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[ModifiedArchiveLister](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[write_file](classpackmanlib_1_1io_1_1_archive_writer.md#function-write-file)**(archive archive, path path, fix fix =True, force_resign force_resign =True)<br>Write archive to file by recursively walking through the in-memory node tree.  |
| def | **[write_fileobj](classpackmanlib_1_1io_1_1_archive_writer.md#function-write-fileobj)**(archive archive, fileobj fileobj, fix fix =True, force_resign force_resign =True)<br>Write archive to file object by recursively walking through the in-memory node tree.  |
| def | **[write_pickled_file](classpackmanlib_1_1io_1_1_archive_writer.md#function-write-pickled-file)**(archive archive, path path, gz gz =False)<br>Write pickled file.  |

## Public Functions Documentation

### function write_file

```python
static def write_file(
    archive archive,
    path path,
    fix fix =True,
    force_resign force_resign =True
)
```

Write archive to file by recursively walking through the in-memory node tree. 

**Parameters**: 

  * **archive** archive node 
  * **path** path to the file to write to 
  * **fix** fix archive before writing 
  * **force_resign** True will for resigning even if a signature file is already present 


### function write_fileobj

```python
static def write_fileobj(
    archive archive,
    fileobj fileobj,
    fix fix =True,
    force_resign force_resign =True
)
```

Write archive to file object by recursively walking through the in-memory node tree. 

**Parameters**: 

  * **archive** archive node 
  * **fileobj** file object to write to 
  * **fix** fix archive before writing 
  * **force_resign** True will for resigning even if a signature file is already present 


### function write_pickled_file

```python
static def write_pickled_file(
    archive archive,
    path path,
    gz gz =False
)
```

Write pickled file. 

**Parameters**: 

  * **o** object to pickle 
  * **path** path to the pickled file 
  * **gz** wether pickled file is gzipped 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
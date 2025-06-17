---
title: packmanlib::io::ArchiveBuilder

---

# packmanlib::io::ArchiveBuilder





## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[build_from_dircontent](classpackmanlib_1_1io_1_1_archive_builder.md#function-build-from-dircontent)**(archive archive, name name, path path, filter_path filter_path =None)<br>build in-memory node tree from directories content  |

## Public Functions Documentation

### function build_from_dircontent

```python
static def build_from_dircontent(
    archive archive,
    name name,
    path path,
    filter_path filter_path =None
)
```

build in-memory node tree from directories content 

**Parameters**: 

  * **archive** archive root node 
  * **name** archive name 
  * **path** path to parent directory of the content 
  * **filter_path** callback include or not the child path 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
---
title: packmanlib::io::ArchiveExtractor

---

# packmanlib::io::ArchiveExtractor





## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Extractor](classpackmanlib_1_1io_1_1_archive_extractor_1_1_extractor.md)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[extract_to_dir](classpackmanlib_1_1io_1_1_archive_extractor.md#function-extract-to-dir)**(archive archive, path path, filter_path filter_path =None)<br>extract in-memory node tree to directory  |

## Public Functions Documentation

### function extract_to_dir

```python
static def extract_to_dir(
    archive archive,
    path path,
    filter_path filter_path =None
)
```

extract in-memory node tree to directory 

**Parameters**: 

  * **archive** archive root node 
  * **path** path to output parent directory 
  * **filter_path** callback to extract or not the node 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
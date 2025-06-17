---
title: packmanlib::treewalk::Observer

---

# packmanlib::treewalk::Observer





Inherited by [ArchiveExtractor.Extractor](classpackmanlib_1_1io_1_1_archive_extractor_1_1_extractor.md), [ArchiveWriter.ModifiedArchiveLister](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md), [VOS3TreeInfo.BundleCounter](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_bundle_counter.md), [VOS3TreeInfo.UPFileCounter](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_u_p_file_counter.md), [VOS3TreeInfo.UserBundleFinder](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_user_bundle_finder.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[found_node_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-node-cb)**(self self, node node)<br>Callback for all nodes visited.  |
| def | **[found_archive_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-archive-cb)**(self self, archive archive)<br>Callback for all archive nodes visited.  |
| def | **[found_dlfile_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-dlfile-cb)**(self self, dlfile dlfile)<br>Callback for all dlfile nodes visited.  |
| def | **[found_upfile_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-upfile-cb)**(self self, upfile upfile)<br>Callback for all upfile nodes visited.  |
| def | **[found_bundle_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-bundle-cb)**(self self, bundle bundle)<br>Callback for all bundle nodes visited.  |
| def | **[found_package_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-package-cb)**(self self, package package)<br>Callback for all package nodes visited.  |
| def | **[found_csd_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-csd-cb)**(self self, csd csd)<br>Callback for all csd nodes visited.  |
| def | **[found_inf_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-inf-cb)**(self self, inf inf)<br>Callback for all inf nodes visited.  |
| def | **[found_meta_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-found-meta-cb)**(self self, meta meta)<br>Callback for all meta nodes visited.  |
| def | **[end_cb](classpackmanlib_1_1treewalk_1_1_observer.md#function-end-cb)**(self self, node node)<br>Callback called once at the end of the tree walk.  |

## Public Functions Documentation

### function found_node_cb

```python
def found_node_cb(
    self self,
    node node
)
```

Callback for all nodes visited. 

**Parameters**: 

  * **node** node visited 


**Reimplemented by**: [packmanlib::io::ArchiveExtractor::Extractor::found_node_cb](classpackmanlib_1_1io_1_1_archive_extractor_1_1_extractor.md#function-found-node-cb)


### function found_archive_cb

```python
def found_archive_cb(
    self self,
    archive archive
)
```

Callback for all archive nodes visited. 

**Parameters**: 

  * **archive** archive visited 


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


**Reimplemented by**: [packmanlib::io::ArchiveWriter::ModifiedArchiveLister::found_dlfile_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-dlfile-cb)


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


**Reimplemented by**: [packmanlib::treeinfo::VOS3TreeInfo::UPFileCounter::found_upfile_cb](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_u_p_file_counter.md#function-found-upfile-cb), [packmanlib::io::ArchiveWriter::ModifiedArchiveLister::found_upfile_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-upfile-cb)


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


**Reimplemented by**: [packmanlib::io::ArchiveWriter::ModifiedArchiveLister::found_bundle_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-bundle-cb)


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


**Reimplemented by**: [packmanlib::io::ArchiveWriter::ModifiedArchiveLister::found_package_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-package-cb)


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


**Reimplemented by**: [packmanlib::io::ArchiveWriter::ModifiedArchiveLister::found_csd_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-csd-cb)


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


**Reimplemented by**: [packmanlib::treeinfo::VOS3TreeInfo::UserBundleFinder::found_inf_cb](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_user_bundle_finder.md#function-found-inf-cb), [packmanlib::treeinfo::VOS3TreeInfo::BundleCounter::found_inf_cb](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_bundle_counter.md#function-found-inf-cb), [packmanlib::io::ArchiveWriter::ModifiedArchiveLister::found_inf_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-inf-cb)


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


**Reimplemented by**: [packmanlib::io::ArchiveWriter::ModifiedArchiveLister::found_meta_cb](classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md#function-found-meta-cb)


### function end_cb

```python
def end_cb(
    self self,
    node node
)
```

Callback called once at the end of the tree walk. 

**Parameters**: 

  * **node** node on which walk was started 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
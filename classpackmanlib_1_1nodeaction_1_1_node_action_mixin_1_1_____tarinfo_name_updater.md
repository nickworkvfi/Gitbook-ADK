---
title: packmanlib::nodeaction::NodeActionMixin::__TarinfoNameUpdater

---

# packmanlib::nodeaction::NodeActionMixin::__TarinfoNameUpdater





Inherits from [Observer](classpackmanlib_1_1treewalk_1_1_observer.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[found_node_cb](classpackmanlib_1_1nodeaction_1_1_node_action_mixin_1_1_____tarinfo_name_updater.md#function-found-node-cb)**(self self, node node) |

## Additional inherited members

**Public Functions inherited from [Observer](classpackmanlib_1_1treewalk_1_1_observer.md)**

|                | Name           |
| -------------- | -------------- |
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


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
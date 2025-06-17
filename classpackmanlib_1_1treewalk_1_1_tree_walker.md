---
title: packmanlib::treewalk::TreeWalker

---

# packmanlib::treewalk::TreeWalker





## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](classpackmanlib_1_1treewalk_1_1_tree_walker.md#function---init--)**(self self, [max_arc_depth](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-max-arc-depth) max_arc_depth, [max_depth](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-max-depth) max_depth, [writable_only](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-writable-only) writable_only, [post_order](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-post-order) post_order) |
| def | **[walk](classpackmanlib_1_1treewalk_1_1_tree_walker.md#function-walk)**(nodes nodes, [observers](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-observers) observers, [max_arc_depth](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-max-arc-depth) max_arc_depth =-1, [max_depth](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-max-depth) max_depth =-1, children_start children_start =False, [writable_only](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-writable-only) writable_only =False, [post_order](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-post-order) post_order =False)<br>Performs a depth-first / pre-order walk through the node calling observers callbacks.  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| | **[observers](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-observers)**  |
| | **[max_arc_depth](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-max-arc-depth)**  |
| | **[max_depth](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-max-depth)**  |
| | **[writable_only](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-writable-only)**  |
| | **[post_order](classpackmanlib_1_1treewalk_1_1_tree_walker.md#variable-post-order)**  |

## Public Functions Documentation

### function __init__

```python
def __init__(
    self self,
    max_arc_depth max_arc_depth,
    max_depth max_depth,
    writable_only writable_only,
    post_order post_order
)
```


### function walk

```python
static def walk(
    nodes nodes,
    observers observers,
    max_arc_depth max_arc_depth =-1,
    max_depth max_depth =-1,
    children_start children_start =False,
    writable_only writable_only =False,
    post_order post_order =False
)
```

Performs a depth-first / pre-order walk through the node calling observers callbacks. 

**Parameters**: 

  * **node** start traversal from these nodes (single or list) 
  * **observers** list of observers to be called 
  * **max_arc_depth** maximum archive recursion depth, negative is infinite 
  * **max_depth** maximum recursion depth, negative is infinite 
  * **children_start** start with node's children instead of node itself 
  * **writable_only** call observers only on writable nodes 
  * **post_order** post-order traversal if True, pre-order traversal if False 


## Public Attributes Documentation

### variable observers

```python
observers;
```


### variable max_arc_depth

```python
max_arc_depth;
```


### variable max_depth

```python
max_depth;
```


### variable writable_only

```python
writable_only;
```


### variable post_order

```python
post_order;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
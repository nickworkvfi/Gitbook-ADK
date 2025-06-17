---
title: PoolNode

---

# PoolNode



 [More...](#detailed-description)


`#include <mem_pool.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct [PoolNode](struct_pool_node.md) * | **[pxNext](struct_pool_node.md#variable-pxnext)**  |
| unsigned | **[uSize](struct_pool_node.md#variable-usize)**  |

## Detailed Description

```cpp
struct PoolNode;
```


**Author**: M. Meixner 

**Date**: 4.12.2006 

structure for managing free chunks of memory 

## Public Attributes Documentation

### variable pxNext

```cpp
struct PoolNode * pxNext;
```


pointer to next free memory chunk 


### variable uSize

```cpp
unsigned uSize;
```


size of this [PoolNode](struct_pool_node.md) i.e. this free memory 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
---
title: MemoryPoolInfo

---

# MemoryPoolInfo



 [More...](#detailed-description)


`#include <mem_pool.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned | **[uSegments](struct_memory_pool_info.md#variable-usegments)**  |
| unsigned | **[uFree](struct_memory_pool_info.md#variable-ufree)**  |
| unsigned | **[uLargest](struct_memory_pool_info.md#variable-ulargest)**  |

## Detailed Description

```cpp
struct MemoryPoolInfo;
```


**Author**: M. Meixner 

**Date**: 8.2.2007 

statistics information of free memory 

## Public Attributes Documentation

### variable uSegments

```cpp
unsigned uSegments;
```


number of segments of free memory 


### variable uFree

```cpp
unsigned uFree;
```


number of free bytes in the pool 


### variable uLargest

```cpp
unsigned uLargest;
```


size of the largest segment in the memory pool 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
---
title: MemoryPool

---

# MemoryPool



 [More...](#detailed-description)


`#include <mem_pool.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct [PoolNode](struct_pool_node.md) * | **[pxFirst](struct_memory_pool.md#variable-pxfirst)**  |
| void * | **[pvStart](struct_memory_pool.md#variable-pvstart)**  |
| void * | **[pvEnd](struct_memory_pool.md#variable-pvend)**  |

## Detailed Description

```cpp
struct MemoryPool;
```


**See**: [vPoolInit()](mem__pool_8h.md#function-vpoolinit), [pvPoolMalloc()](mem__pool_8h.md#function-pvpoolmalloc),[pvPoolRealloc()](mem__pool_8h.md#function-pvpoolrealloc),[vPoolFree()](mem__pool_8h.md#function-vpoolfree)

**Author**: M. Meixner 

**Date**: 4.12.2006 

Memory pool structure.

The memory pool allows to allocate/free memory from a given region of memory. Using such a pool has some interesting properties:

* By releasing the memory of the pool itself all allocations that have been made from the pool are released.
* The allocatable size is limited to the size of the pool.
* Memory fragmentation is limited to the pool.

## Public Attributes Documentation

### variable pxFirst

```cpp
struct PoolNode * pxFirst;
```


pointer to the first free memory chunk 


### variable pvStart

```cpp
void * pvStart;
```


start of the managed memory region 


### variable pvEnd

```cpp
void * pvEnd;
```


end of the managed memory region (first addres past the end) 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
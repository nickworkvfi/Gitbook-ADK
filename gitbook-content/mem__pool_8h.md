---
hidden: true
title: mem_pool.h File Reference
---

[Data Structures](#nested-classes) \| [Macros](#define-members) \| [Functions](#func-members)

This graph shows which files directly or indirectly include this file:

![](mem__pool_8h__dep__incl.png)

<a href="mem__pool_8h_source.md">Go to the source code of this file.</a>

|                 |                                            |
|-----------------|--------------------------------------------|
| Data Structures |                                            |
| struct          | [PoolNode](#struct_pool_node)              |
| struct          | [MemoryPool](#struct_memory_pool)          |
| struct          | [MemoryPoolInfo](#struct_memory_pool_info) |

|          |                                                          |
|----------|----------------------------------------------------------|
| Macros   |                                                          |
| #define  | [TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) |

|  |  |
|----|----|
| Functions |  |
| [TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void  | [vPoolInit](#a1cf0544df5dadc299bcc60e8e3c3961e) (struct [MemoryPool](#struct_memory_pool) \*pool, void \*mem, unsigned size) |
| [TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void \*  | [pvPoolMalloc](#ad61c1fd291939dc423bfd58a1b455c10) (struct [MemoryPool](#struct_memory_pool) \*pool, unsigned size) |
| [TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void \*  | [pvPoolRealloc](#a9ff3d2a2c810e692ad344650ced21427) (struct [MemoryPool](#struct_memory_pool) \*pool, void \*memory, unsigned newsize) |
| [TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void  | [vPoolFree](#afbd27e75ab44ed7dfd909c64756dc869) (struct [MemoryPool](#struct_memory_pool) \*pool, void \*memory) |
| [TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void  | [vPoolFreeAll](#aa1871b4604a6614f379abb30e1613f47) (struct [MemoryPool](#struct_memory_pool) \*pool) |
| [TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void  | [vPoolInfo](#a468509547e43de5621df45470c15d70a) (struct [MemoryPool](#struct_memory_pool) \*pool, struct [MemoryPoolInfo](#struct_memory_pool_info) \*info) |

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## PoolNode <a href="#struct_pool_node" id="struct_pool_node"></a>

<p>struct PoolNode</p>

structure for managing free chunks of memory

### Date

4.12.2006

### Author

M. Meixner

Collaboration diagram for PoolNode:

![Collaboration graph](struct_pool_node__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

| Data Fields |  |  |
|----|----|----|
| struct [PoolNode](#struct_pool_node) \* | pxNext | <p>pointer to next free memory chunk</p> |
| unsigned | uSize | <p>size of this [PoolNode](#struct_pool_node) i.e. this free memory</p> |

## MemoryPool <a href="#struct_memory_pool" id="struct_memory_pool"></a>

<p>struct MemoryPool</p>

Memory pool structure.

The memory pool allows to allocate/free memory from a given region of memory. Using such a pool has some interesting properties:

- By releasing the memory of the pool itself all allocations that have been made from the pool are released.
- The allocatable size is limited to the size of the pool.
- Memory fragmentation is limited to the pool.

### Seealso {#see-also}

[vPoolInit()](#a1cf0544df5dadc299bcc60e8e3c3961e), [pvPoolMalloc()](#ad61c1fd291939dc423bfd58a1b455c10),[pvPoolRealloc()](#a9ff3d2a2c810e692ad344650ced21427),[vPoolFree()](#afbd27e75ab44ed7dfd909c64756dc869)

### Date

4.12.2006

### Author

M. Meixner

Collaboration diagram for MemoryPool:

![Collaboration graph](struct_memory_pool__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

| Data Fields |  |  |
|----|----|----|
| void \* | pvEnd | <p>end of the managed memory region (first addres past the end)</p> |
| void \* | pvStart | <p>start of the managed memory region</p> |
| struct [PoolNode](#struct_pool_node) \* | pxFirst | <p>pointer to the first free memory chunk</p> |

## MemoryPoolInfo <a href="#struct_memory_pool_info" id="struct_memory_pool_info"></a>

<p>struct MemoryPoolInfo</p>

statistics information of free memory

### Date

8.2.2007

### Author

M. Meixner

| Data Fields |  |  |
|----|----|----|
| unsigned | uFree | <p>number of free bytes in the pool</p> |
| unsigned | uLargest | <p>size of the largest segment in the memory pool</p> |
| unsigned | uSegments | <p>number of segments of free memory</p> |

## MacroDefinition Documentation {#macro-definition-documentation}

## TLV_UTIL_INTERFACE <a href="#ae809ada9194252356dbaa46410dfbb39" id="ae809ada9194252356dbaa46410dfbb39"></a>

<p>#define TLV_UTIL_INTERFACE</p>

## FunctionDocumentation {#function-documentation}

## pvPoolMalloc() <a href="#ad61c1fd291939dc423bfd58a1b455c10" id="ad61c1fd291939dc423bfd58a1b455c10"></a>

<p>[TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void\* pvPoolMalloc</p>

## pvPoolRealloc() <a href="#a9ff3d2a2c810e692ad344650ced21427" id="a9ff3d2a2c810e692ad344650ced21427"></a>

<p>[TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void\* pvPoolRealloc</p>

## vPoolFree() <a href="#afbd27e75ab44ed7dfd909c64756dc869" id="afbd27e75ab44ed7dfd909c64756dc869"></a>

<p>[TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void vPoolFree</p>

## vPoolFreeAll() <a href="#aa1871b4604a6614f379abb30e1613f47" id="aa1871b4604a6614f379abb30e1613f47"></a>

<p>[TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void vPoolFreeAll</p>

## vPoolInfo() <a href="#a468509547e43de5621df45470c15d70a" id="a468509547e43de5621df45470c15d70a"></a>

<p>[TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void vPoolInfo</p>

## vPoolInit() <a href="#a1cf0544df5dadc299bcc60e8e3c3961e" id="a1cf0544df5dadc299bcc60e8e3c3961e"></a>

<p>[TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) void vPoolInit</p>

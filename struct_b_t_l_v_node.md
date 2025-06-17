---
title: BTLVNode

---

# BTLVNode



 [More...](#detailed-description)


`#include <btlv.h>`

Inherited by [BTLVRootNode](struct_b_t_l_v_root_node.md)

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct [BTLVNode](struct_b_t_l_v_node.md) * | **[pxNext](struct_b_t_l_v_node.md#variable-pxnext)**  |
| struct [BTLVNode](struct_b_t_l_v_node.md) * | **[pxFirst](struct_b_t_l_v_node.md#variable-pxfirst)**  |
| struct [BTLVNode](struct_b_t_l_v_node.md) * | **[pxParent](struct_b_t_l_v_node.md#variable-pxparent)**  |
| struct [MemoryPool](struct_memory_pool.md) * | **[pxMempool](struct_b_t_l_v_node.md#variable-pxmempool)**  |
| char[2 *MAX_TAGSIZE+1] | **[tcName](struct_b_t_l_v_node.md#variable-tcname)**  |
| char | **[cConstructed](struct_b_t_l_v_node.md#variable-cconstructed)**  |
| unsigned char * | **[pucData](struct_b_t_l_v_node.md#variable-pucdata)**  |
| unsigned | **[uSize](struct_b_t_l_v_node.md#variable-usize)**  |

## Detailed Description

```cpp
struct BTLVNode;
```


**Author**: M. Meixner 

**Date**: 4.12.2006 

data node containing one tag or a root node 

## Public Attributes Documentation

### variable pxNext

```cpp
struct BTLVNode * pxNext;
```


used for chaining nodes 


### variable pxFirst

```cpp
struct BTLVNode * pxFirst;
```


first child (content) node 


### variable pxParent

```cpp
struct BTLVNode * pxParent;
```


parent node 


### variable pxMempool

```cpp
struct MemoryPool * pxMempool;
```


memory pool used for allocation 


### variable tcName

```cpp
char[2 *MAX_TAGSIZE+1] tcName;
```


tag name (0-terminated C-string) 


### variable cConstructed

```cpp
char cConstructed;
```


type: 0=primitive, 1=constructed 


### variable pucData

```cpp
unsigned char * pucData;
```


pointer to data (only primitive nodes) 


### variable uSize

```cpp
unsigned uSize;
```


size of data (primitive node) or total size of child nodes (constructed). This size does not include the tag name or the number of bytes for the size field 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
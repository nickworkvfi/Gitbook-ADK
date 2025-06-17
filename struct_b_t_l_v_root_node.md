---
title: BTLVRootNode

---

# BTLVRootNode



 [More...](#detailed-description)


`#include <btlv_helper.h>`

Inherits from [BTLVNode](struct_b_t_l_v_node.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[BTLVRootNode](struct_b_t_l_v_root_node.md#function-btlvrootnode)**([MemoryPool](struct_memory_pool.md) * mp =0) |
| virtual | **[~BTLVRootNode](struct_b_t_l_v_root_node.md#function-~btlvrootnode)**() |

## Additional inherited members

**Public Attributes inherited from [BTLVNode](struct_b_t_l_v_node.md)**

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
struct BTLVRootNode;
```


helper class for BTLV root nodes, which cares about automatic initialization and cleanup of the [BTLVNode](struct_b_t_l_v_node.md)

## Public Functions Documentation

### function BTLVRootNode

```cpp
inline BTLVRootNode(
    MemoryPool * mp =0
)
```


**Parameters**: 

  * **mp** memory pool, which shall be used for the [BTLVNode](struct_b_t_l_v_node.md) (optional) 


constructor to init the root node with [vBTLVInit()](btlv_8h.md#function-vbtlvinit)


### function ~BTLVRootNode

```cpp
inline virtual ~BTLVRootNode()
```


destructor which cares about the resource cleanup of the [BTLVNode](struct_b_t_l_v_node.md) with [vBTLVClear()](btlv_8h.md#function-vbtlvclear)


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
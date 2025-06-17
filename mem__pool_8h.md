---
title: emv/TLV_Util/export/emv/mem_pool.h

---

# emv/TLV_Util/export/emv/mem_pool.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[PoolNode](struct_pool_node.md)**  |
| struct | **[MemoryPool](struct_memory_pool.md)**  |
| struct | **[MemoryPoolInfo](struct_memory_pool_info.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vPoolInit](mem__pool_8h.md#function-vpoolinit)**(struct [MemoryPool](struct_memory_pool.md) * pool, void * mem, unsigned size) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void * | **[pvPoolMalloc](mem__pool_8h.md#function-pvpoolmalloc)**(struct [MemoryPool](struct_memory_pool.md) * pool, unsigned size) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void * | **[pvPoolRealloc](mem__pool_8h.md#function-pvpoolrealloc)**(struct [MemoryPool](struct_memory_pool.md) * pool, void * memory, unsigned newsize) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vPoolFree](mem__pool_8h.md#function-vpoolfree)**(struct [MemoryPool](struct_memory_pool.md) * pool, void * memory) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vPoolFreeAll](mem__pool_8h.md#function-vpoolfreeall)**(struct [MemoryPool](struct_memory_pool.md) * pool) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vPoolInfo](mem__pool_8h.md#function-vpoolinfo)**(struct [MemoryPool](struct_memory_pool.md) * pool, struct [MemoryPoolInfo](struct_memory_pool_info.md) * info) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface)**  |


## Functions Documentation

### function vPoolInit

```cpp
TLV_UTIL_INTERFACE void vPoolInit(
    struct MemoryPool * pool,
    void * mem,
    unsigned size
)
```


### function pvPoolMalloc

```cpp
TLV_UTIL_INTERFACE void * pvPoolMalloc(
    struct MemoryPool * pool,
    unsigned size
)
```


### function pvPoolRealloc

```cpp
TLV_UTIL_INTERFACE void * pvPoolRealloc(
    struct MemoryPool * pool,
    void * memory,
    unsigned newsize
)
```


### function vPoolFree

```cpp
TLV_UTIL_INTERFACE void vPoolFree(
    struct MemoryPool * pool,
    void * memory
)
```


### function vPoolFreeAll

```cpp
TLV_UTIL_INTERFACE void vPoolFreeAll(
    struct MemoryPool * pool
)
```


### function vPoolInfo

```cpp
TLV_UTIL_INTERFACE void vPoolInfo(
    struct MemoryPool * pool,
    struct MemoryPoolInfo * info
)
```




## Macros Documentation

### define TLV_UTIL_INTERFACE

```cpp
#define TLV_UTIL_INTERFACE 
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     VeriFone
*  Author:      GSS R&D Germany
*  Content:     Memory pool
****************************************************************************/

#ifndef MEM_POOL_H
#define MEM_POOL_H

#ifdef __cplusplus
extern "C" {
#endif

#define TLV_UTIL_INTERFACE // NOTE: Do not set visibility("default") because export.map is used

struct PoolNode {
   struct PoolNode *pxNext; 
   unsigned uSize;          
};

struct MemoryPool {
   struct PoolNode *pxFirst; 
   void *pvStart; 
   void *pvEnd;   
};

struct MemoryPoolInfo {
   unsigned uSegments; 
   unsigned uFree;     
   unsigned uLargest;  
};

TLV_UTIL_INTERFACE void vPoolInit(struct MemoryPool *pool, void *mem, unsigned size);
TLV_UTIL_INTERFACE void *pvPoolMalloc(struct MemoryPool *pool, unsigned size);
TLV_UTIL_INTERFACE void *pvPoolRealloc(struct MemoryPool *pool, void *memory, unsigned newsize);
TLV_UTIL_INTERFACE void vPoolFree(struct MemoryPool *pool, void *memory);
TLV_UTIL_INTERFACE void vPoolFreeAll(struct MemoryPool *pool);
TLV_UTIL_INTERFACE void vPoolInfo(struct MemoryPool *pool, struct MemoryPoolInfo *info);

#ifdef __cplusplus
}
#endif

#ifndef TLV_UTIL_COMPILE
#   undef TLV_UTIL_INTERFACE
#endif

#endif  // #ifndef MEM_POOL_H
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

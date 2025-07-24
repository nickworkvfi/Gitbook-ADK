---
hidden: true
title: mem_pool.h
---

<a href="mem__pool_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: VeriFone
 4 * Author: GSS R&D Germany
 5 * Content: Memory pool
 6 ****************************************************************************/
 7 
 8 #ifndef MEM_POOL_H
 9 #define MEM_POOL_H
 10 
 11 #ifdef __cplusplus
 12 extern "C" {
 13 #endif
 14 
 15 #define TLV_UTIL_INTERFACE // NOTE: Do not set visibility("default") because export.map is used
 16 
 20 struct PoolNode {
 21  struct PoolNode *pxNext;
 22  unsigned uSize;
 23 };
 24 
 37 struct MemoryPool {
 38  struct PoolNode *pxFirst;
 39  void *pvStart;
 40  void *pvEnd;
 41 };
 42 
 46 struct MemoryPoolInfo {
 47  unsigned uSegments;
 48  unsigned uFree;
 49  unsigned uLargest;
 50 };
 51 
 52 TLV_UTIL_INTERFACE void vPoolInit(struct MemoryPool *pool, void *mem, unsigned size);
 53 TLV_UTIL_INTERFACE void *pvPoolMalloc(struct MemoryPool *pool, unsigned size);
 54 TLV_UTIL_INTERFACE void *pvPoolRealloc(struct MemoryPool *pool, void *memory, unsigned newsize);
 55 TLV_UTIL_INTERFACE void vPoolFree(struct MemoryPool *pool, void *memory);
 56 TLV_UTIL_INTERFACE void vPoolFreeAll(struct MemoryPool *pool);
 57 TLV_UTIL_INTERFACE void vPoolInfo(struct MemoryPool *pool, struct MemoryPoolInfo *info);
 58 
 59 #ifdef __cplusplus
 60 }
 61 #endif
 62 
 63 #ifndef TLV_UTIL_COMPILE
 64 # undef TLV_UTIL_INTERFACE
 65 #endif
 66 
 67 #endif // #ifndef MEM_POOL_H
 68 
```

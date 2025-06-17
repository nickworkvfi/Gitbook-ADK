---
title: iso8583/export/dl_mem.h

---

# iso8583/export/dl_mem.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[DL_MEM_malloc](dl__mem_8h.md#function-dl-mem-malloc)**([DL_UINT32](dl__base_8h.md#typedef-dl-uint32) iNumBytes, void ** oPtr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[DL_MEM_callocWithInit](dl__mem_8h.md#function-dl-mem-callocwithinit)**([DL_UINT32](dl__base_8h.md#typedef-dl-uint32) numItems, size_t itemSize, void ** out) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ISO_EXP_DECL](dl__mem_8h.md#define-iso-exp-decl)**  |
|  | **[kDL_ERR_MEM_ALLOC](dl__mem_8h.md#define-kdl-err-mem-alloc)**  |
|  | **[DL_MEM_free](dl__mem_8h.md#define-dl-mem-free)**(ptr)  |
|  | **[DL_MEM_memset](dl__mem_8h.md#define-dl-mem-memset)**(ptr, value, numBytes)  |
|  | **[DL_MEM_memcpy](dl__mem_8h.md#define-dl-mem-memcpy)**(toPtr, fromPtr, numBytes)  |
|  | **[DL_MEM_memcmp](dl__mem_8h.md#define-dl-mem-memcmp)**(aPtr, bPtr, len)  |


## Functions Documentation

### function DL_MEM_malloc

```cpp
ISO_EXP_DECLDL_ERR DL_MEM_malloc(
    DL_UINT32 iNumBytes,
    void ** oPtr
)
```


### function DL_MEM_callocWithInit

```cpp
ISO_EXP_DECLDL_ERR DL_MEM_callocWithInit(
    DL_UINT32 numItems,
    size_t itemSize,
    void ** out
)
```




## Macros Documentation

### define ISO_EXP_DECL

```cpp
#define ISO_EXP_DECL 
```


### define kDL_ERR_MEM_ALLOC

```cpp
#define kDL_ERR_MEM_ALLOC (DL_ERR)(1000+0)
```


### define DL_MEM_free

```cpp
#define DL_MEM_free(
    ptr
)
{ if ( (ptr) != NULL ) { free(ptr) ; (ptr) = NULL ; } }
```


### define DL_MEM_memset

```cpp
#define DL_MEM_memset(
    ptr,
    value,
    numBytes
)
((void)memset((void*)(ptr),(int)(value),(size_t)(numBytes)))
```


### define DL_MEM_memcpy

```cpp
#define DL_MEM_memcpy(
    toPtr,
    fromPtr,
    numBytes
)
((void)memcpy((void*)(toPtr),(void*)(fromPtr),(size_t)(numBytes)))
```


### define DL_MEM_memcmp

```cpp
#define DL_MEM_memcmp(
    aPtr,
    bPtr,
    len
)
(memcmp((void*)(aPtr),(void*)(bPtr),(size_t)(len)))
```


## Source code

```cpp
/******************************************************************************/
/*                                                                            */
/* Copyright (C) 2005-2007 Oscar Sanderson                                    */
/*                                                                            */
/* This software is provided 'as-is', without any express or implied          */
/* warranty.  In no event will the author(s) be held liable for any damages   */
/* arising from the use of this software.                                     */
/*                                                                            */
/* Permission is granted to anyone to use this software for any purpose,      */
/* including commercial applications, and to alter it and redistribute it     */
/* freely, subject to the following restrictions:                             */
/*                                                                            */
/* 1. The origin of this software must not be misrepresented; you must not    */
/*    claim that you wrote the original software. If you use this software    */
/*    in a product, an acknowledgment in the product documentation would be   */
/*    appreciated but is not required.                                        */
/*                                                                            */
/* 2. Altered source versions must be plainly marked as such, and must not be */
/*    misrepresented as being the original software.                          */
/*                                                                            */
/* 3. This notice may not be removed or altered from any source distribution. */
/*                                                                            */
/******************************************************************************/

#ifndef __INC_DL_MEM
#define __INC_DL_MEM

#include "dl_base.h"
#include "dl_err.h"

#include <string.h>

#ifndef _DOXYGEN_
  #ifdef _VRXEVO
    #ifdef ISO_SHARED_EXPORT
      #define ISO_EXP_DECL __declspec(dllexport) // used for VSL symbol export
    #elif ISO_STATIC_EXPORT
      #define ISO_EXP_DECL // used for static libraries
    #else
      #define ISO_EXP_DECL __declspec(dllimport) // used for VSA symbol import (also used for static linking)
    #endif
  #elif defined __GNUC__ && defined ISO_SHARED_EXPORT
    #define ISO_EXP_DECL __attribute__((visibility("default")))
  #else
    #define ISO_EXP_DECL // used for both, static libraries and program symbol import
  #endif
#endif

#ifdef __cplusplus
extern "C" {
#endif /* ndef __cplusplus */

/******************************************************************************/
//
// ERROR CODES (1000-1019)
//

#define kDL_ERR_MEM_ALLOC   (DL_ERR)(1000+0)

/******************************************************************************/

#define DL_MEM_free(ptr)\
{ if ( (ptr) != NULL ) { free(ptr) ; (ptr) = NULL ; } }

/******************************************************************************/

#define DL_MEM_memset(ptr,value,numBytes)\
 ((void)memset((void*)(ptr),(int)(value),(size_t)(numBytes)))

#define DL_MEM_memcpy(toPtr,fromPtr,numBytes)\
 ((void)memcpy((void*)(toPtr),(void*)(fromPtr),(size_t)(numBytes)))

#define DL_MEM_memcmp(aPtr,bPtr,len)\
 (memcmp((void*)(aPtr),(void*)(bPtr),(size_t)(len)))

/******************************************************************************/

// allocates a chunk of memory
// returns: error code
ISO_EXP_DECL DL_ERR DL_MEM_malloc ( DL_UINT32   iNumBytes,
                       void      **oPtr );

/* based on calloc - but does not indicate an error if 0 items requested
   NB also init's the array elements to 0 on success */
// returns: error code
ISO_EXP_DECL DL_ERR DL_MEM_callocWithInit ( DL_UINT32   numItems,
                               size_t      itemSize,
                               void      **out );

/******************************************************************************/
#ifdef __cplusplus
}
#endif

#endif /* __INC_DL_MEM */
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

---
hidden: true
title: dl_mem.h
---

<a href="dl__mem_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /******************************************************************************/
 2 /* */
 3 /* Copyright (C) 2005-2007 Oscar Sanderson */
 4 /* */
 5 /* This software is provided 'as-is', without any express or implied */
 6 /* warranty. In no event will the author(s) be held liable for any damages */
 7 /* arising from the use of this software. */
 8 /* */
 9 /* Permission is granted to anyone to use this software for any purpose, */
 10 /* including commercial applications, and to alter it and redistribute it */
 11 /* freely, subject to the following restrictions: */
 12 /* */
 13 /* 1. The origin of this software must not be misrepresented; you must not */
 14 /* claim that you wrote the original software. If you use this software */
 15 /* in a product, an acknowledgment in the product documentation would be */
 16 /* appreciated but is not required. */
 17 /* */
 18 /* 2. Altered source versions must be plainly marked as such, and must not be */
 19 /* misrepresented as being the original software. */
 20 /* */
 21 /* 3. This notice may not be removed or altered from any source distribution. */
 22 /* */
 23 /******************************************************************************/
 24 
 25 #ifndef __INC_DL_MEM
 26 #define __INC_DL_MEM
 27 
 28 #include "dl_base.h"
 29 #include "dl_err.h"
 30 
 31 #include <string.h>
 32 
 33 #ifndef _DOXYGEN_
 34  #ifdef _VRXEVO
 35  #ifdef ISO_SHARED_EXPORT
 36  #define ISO_EXP_DECL __declspec(dllexport) // used for VSL symbol export
 37  #elif ISO_STATIC_EXPORT
 38  #define ISO_EXP_DECL // used for static libraries
 39  #else
 40  #define ISO_EXP_DECL __declspec(dllimport) // used for VSA symbol import (also used for static linking)
 41  #endif
 42  #elif defined __GNUC__ && defined ISO_SHARED_EXPORT
 43  #define ISO_EXP_DECL __attribute__((visibility("default")))
 44  #else
 45  #define ISO_EXP_DECL // used for both, static libraries and program symbol import
 46  #endif
 47 #endif
 48 
 49 #ifdef __cplusplus
 50 extern "C" {
 51 #endif /* ndef __cplusplus */
 52 
 53 /******************************************************************************/
 54 //
 55 // ERROR CODES (1000-1019)
 56 //
 57 
 58 #define kDL_ERR_MEM_ALLOC (DL_ERR)(1000+0)
 59 
 60 /******************************************************************************/
 61 
 62 #define DL_MEM_free(ptr)\
 63 { if ( (ptr) != NULL ) { free(ptr) ; (ptr) = NULL ; } }
 64 
 65 /******************************************************************************/
 66 
 67 #define DL_MEM_memset(ptr,value,numBytes)\
 68  ((void)memset((void*)(ptr),(int)(value),(size_t)(numBytes)))
 69 
 70 #define DL_MEM_memcpy(toPtr,fromPtr,numBytes)\
 71  ((void)memcpy((void*)(toPtr),(void*)(fromPtr),(size_t)(numBytes)))
 72 
 73 #define DL_MEM_memcmp(aPtr,bPtr,len)\
 74  (memcmp((void*)(aPtr),(void*)(bPtr),(size_t)(len)))
 75 
 76 /******************************************************************************/
 77 
 78 // allocates a chunk of memory
 79 // returns: error code
 80 ISO_EXP_DECL DL_ERR DL_MEM_malloc ( DL_UINT32 iNumBytes,
 81  void **oPtr );
 82 
 83 /* based on calloc - but does not indicate an error if 0 items requested
 84  NB also init's the array elements to 0 on success */
 85 // returns: error code
 86 ISO_EXP_DECL DL_ERR DL_MEM_callocWithInit ( DL_UINT32 numItems,
 87  size_t itemSize,
 88  void **out );
 89 
 90 /******************************************************************************/
 91 #ifdef __cplusplus
 92 }
 93 #endif
 94 
 95 #endif /* __INC_DL_MEM */
```

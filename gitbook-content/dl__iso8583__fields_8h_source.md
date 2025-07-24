---
hidden: true
title: dl_iso8583_fields.h
---

<a href="dl__iso8583__fields_8h.md">Go to the documentation of this file.</a>

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
 24 /* */
 25 /* ISO8583 field packers / unpackers */
 26 /* */
 27 /******************************************************************************/
 28 
 29 #ifndef __INC_DL_ISO8583_FIELDS
 30 #define __INC_DL_ISO8583_FIELDS
 31 
 32 #include "dl_base.h"
 33 #include "dl_err.h"
 34 #include "dl_mem.h"
 35 
 36 #include "dl_iso8583_common.h"
 37 
 38 #ifndef _DOXYGEN_
 39  #ifdef _VRXEVO
 40  #ifdef ISO_SHARED_EXPORT
 41  #define ISO_EXP_DECL __declspec(dllexport) // used for VSL symbol export
 42  #elif ISO_STATIC_EXPORT
 43  #define ISO_EXP_DECL // used for static libraries
 44  #else
 45  #define ISO_EXP_DECL __declspec(dllimport) // used for VSA symbol import (also used for static linking)
 46  #endif
 47  #elif defined __GNUC__ && defined ISO_SHARED_EXPORT
 48  #define ISO_EXP_DECL __attribute__((visibility("default")))
 49  #else
 50  #define ISO_EXP_DECL // used for both, static libraries and program symbol import
 51  #endif
 52 #endif
 53 
 54 #ifdef __cplusplus
 55 extern "C" {
 56 #endif
 57 
 58 /******************************************************************************/
 59 
 60 ISO_EXP_DECL DL_ERR _DL_ISO8583_FIELD_Pack ( DL_UINT16 iField,
 61  const DL_ISO8583_MSG *iMsg,
 62  const DL_ISO8583_HANDLER *iHandler,
 63  DL_UINT8 **ioPtr,
 64  const DL_UINT16 ioPtrSize);
 65 
 66 ISO_EXP_DECL DL_ERR _DL_ISO8583_FIELD_Unpack ( DL_UINT16 iField,
 67  DL_ISO8583_MSG *ioMsg,
 68  const DL_ISO8583_HANDLER *iHandler,
 69  DL_UINT8 **ioPtr );
 70 
 71 /******************************************************************************/
 72 
 73 #ifdef __cplusplus
 74 } /* end of the 'extern "C"' block */
 75 #endif
 76 
 77 #endif /* __INC_DL_ISO8583_FIELDS */
```

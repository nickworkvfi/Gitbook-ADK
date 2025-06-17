---
title: iso8583/export/dl_iso8583_fields.h

---

# iso8583/export/dl_iso8583_fields.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[_DL_ISO8583_FIELD_Pack](dl__iso8583__fields_8h.md#function--dl-iso8583-field-pack)**([DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iField, const [DL_ISO8583_MSG](dl__iso8583__common_8h.md#typedef-dl-iso8583-msg) * iMsg, const [DL_ISO8583_HANDLER](dl__iso8583__common_8h.md#typedef-dl-iso8583-handler) * iHandler, [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) ** ioPtr, const [DL_UINT16](dl__base_8h.md#typedef-dl-uint16) ioPtrSize) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[_DL_ISO8583_FIELD_Unpack](dl__iso8583__fields_8h.md#function--dl-iso8583-field-unpack)**([DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iField, [DL_ISO8583_MSG](dl__iso8583__common_8h.md#typedef-dl-iso8583-msg) * ioMsg, const [DL_ISO8583_HANDLER](dl__iso8583__common_8h.md#typedef-dl-iso8583-handler) * iHandler, [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) ** ioPtr) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ISO_EXP_DECL](dl__iso8583__fields_8h.md#define-iso-exp-decl)**  |


## Functions Documentation

### function _DL_ISO8583_FIELD_Pack

```cpp
ISO_EXP_DECLDL_ERR _DL_ISO8583_FIELD_Pack(
    DL_UINT16 iField,
    const DL_ISO8583_MSG * iMsg,
    const DL_ISO8583_HANDLER * iHandler,
    DL_UINT8 ** ioPtr,
    const DL_UINT16 ioPtrSize
)
```


### function _DL_ISO8583_FIELD_Unpack

```cpp
ISO_EXP_DECLDL_ERR _DL_ISO8583_FIELD_Unpack(
    DL_UINT16 iField,
    DL_ISO8583_MSG * ioMsg,
    const DL_ISO8583_HANDLER * iHandler,
    DL_UINT8 ** ioPtr
)
```




## Macros Documentation

### define ISO_EXP_DECL

```cpp
#define ISO_EXP_DECL 
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
/*                                                                            */
/* ISO8583 field packers / unpackers                                          */
/*                                                                            */
/******************************************************************************/

#ifndef __INC_DL_ISO8583_FIELDS
#define __INC_DL_ISO8583_FIELDS

#include "dl_base.h"
#include "dl_err.h"
#include "dl_mem.h"

#include "dl_iso8583_common.h"

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
#endif

/******************************************************************************/

ISO_EXP_DECL DL_ERR _DL_ISO8583_FIELD_Pack ( DL_UINT16                  iField,
                                const DL_ISO8583_MSG      *iMsg,
                                const DL_ISO8583_HANDLER  *iHandler,
                                DL_UINT8                 **ioPtr,
                                const DL_UINT16            ioPtrSize);

ISO_EXP_DECL DL_ERR _DL_ISO8583_FIELD_Unpack ( DL_UINT16                  iField,
                                  DL_ISO8583_MSG            *ioMsg,
                                  const DL_ISO8583_HANDLER  *iHandler,
                                  DL_UINT8                 **ioPtr );

/******************************************************************************/

#ifdef __cplusplus
}  /* end of the 'extern "C"' block */
#endif

#endif /* __INC_DL_ISO8583_FIELDS */
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

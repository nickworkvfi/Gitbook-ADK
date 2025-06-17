---
title: iso8583/export/dl_iso8583_common.h

---

# iso8583/export/dl_iso8583_common.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[DL_ISO8583_FIELD_DEF_S](struct_d_l___i_s_o8583___f_i_e_l_d___d_e_f___s.md)**  |
| struct | **[DL_ISO8583_HANDLER_S](struct_d_l___i_s_o8583___h_a_n_d_l_e_r___s.md)**  |
| struct | **[DL_ISO8583_MSG_FIELD_DEF_S](struct_d_l___i_s_o8583___m_s_g___f_i_e_l_d___d_e_f___s.md)**  |
| struct | **[DL_ISO8583_MSG_HANDLER_S](struct_d_l___i_s_o8583___m_s_g___h_a_n_d_l_e_r___s.md)**  |
| struct | **[DL_ISO8583_MSG_FIELD_S](struct_d_l___i_s_o8583___m_s_g___f_i_e_l_d___s.md)**  |
| struct | **[DL_ISO8583_MSG_S](struct_d_l___i_s_o8583___m_s_g___s.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [DL_ISO8583_FIELD_DEF_S](struct_d_l___i_s_o8583___f_i_e_l_d___d_e_f___s.md) | **[DL_ISO8583_FIELD_DEF](dl__iso8583__common_8h.md#typedef-dl-iso8583-field-def)**  |
| typedef struct [DL_ISO8583_HANDLER_S](struct_d_l___i_s_o8583___h_a_n_d_l_e_r___s.md) | **[DL_ISO8583_HANDLER](dl__iso8583__common_8h.md#typedef-dl-iso8583-handler)**  |
| typedef struct [DL_ISO8583_MSG_FIELD_DEF_S](struct_d_l___i_s_o8583___m_s_g___f_i_e_l_d___d_e_f___s.md) | **[DL_ISO8583_MSG_FIELD_DEF](dl__iso8583__common_8h.md#typedef-dl-iso8583-msg-field-def)**  |
| typedef struct [DL_ISO8583_MSG_HANDLER_S](struct_d_l___i_s_o8583___m_s_g___h_a_n_d_l_e_r___s.md) | **[DL_ISO8583_MSG_HANDLER](dl__iso8583__common_8h.md#typedef-dl-iso8583-msg-handler)**  |
| typedef struct [DL_ISO8583_MSG_FIELD_S](struct_d_l___i_s_o8583___m_s_g___f_i_e_l_d___s.md) | **[DL_ISO8583_MSG_FIELD](dl__iso8583__common_8h.md#typedef-dl-iso8583-msg-field)**  |
| typedef struct [DL_ISO8583_MSG_S](struct_d_l___i_s_o8583___m_s_g___s.md) | **[DL_ISO8583_MSG](dl__iso8583__common_8h.md#typedef-dl-iso8583-msg)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[_DL_ISO8583_MSG_AllocField](dl__iso8583__common_8h.md#function--dl-iso8583-msg-allocfield)**([DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iField, [DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iSize, [DL_ISO8583_MSG](dl__iso8583__common_8h.md#typedef-dl-iso8583-msg) * ioMsg, [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) ** oPtr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) void | **[DL_ISO8583_COMMON_SetHandler](dl__iso8583__common_8h.md#function-dl-iso8583-common-sethandler)**([DL_ISO8583_FIELD_DEF](dl__iso8583__common_8h.md#typedef-dl-iso8583-field-def) * iFieldDefArr, [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) iFieldDefItems, [DL_ISO8583_HANDLER](dl__iso8583__common_8h.md#typedef-dl-iso8583-handler) * oData) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ISO_EXP_DECL](dl__iso8583__common_8h.md#define-iso-exp-decl)**  |
|  | **[kDL_ISO8583_MAX_FIELD_IDX](dl__iso8583__common_8h.md#define-kdl-iso8583-max-field-idx)**  |
|  | **[kDL_ISO8583_FIXED](dl__iso8583__common_8h.md#define-kdl-iso8583-fixed)**  |
|  | **[kDL_ISO8583_LLVAR](dl__iso8583__common_8h.md#define-kdl-iso8583-llvar)**  |
|  | **[kDL_ISO8583_LLLVAR](dl__iso8583__common_8h.md#define-kdl-iso8583-lllvar)**  |
|  | **[kDL_ISO8583_LLLLVAR](dl__iso8583__common_8h.md#define-kdl-iso8583-llllvar)**  |
|  | **[kDL_ISO8583_LLLLLLLLVAR](dl__iso8583__common_8h.md#define-kdl-iso8583-llllllllvar)**  |
|  | **[kDL_ISO8583_LLVARA](dl__iso8583__common_8h.md#define-kdl-iso8583-llvara)**  |
|  | **[kDL_ISO8583_LLLVARA](dl__iso8583__common_8h.md#define-kdl-iso8583-lllvara)**  |
|  | **[kDL_ISO8583_LLLLVARA](dl__iso8583__common_8h.md#define-kdl-iso8583-llllvara)**  |
|  | **[kDL_ISO8583_LLLLLLLLVARA](dl__iso8583__common_8h.md#define-kdl-iso8583-llllllllvara)**  |
|  | **[kDL_ISO8583_CONTVAR](dl__iso8583__common_8h.md#define-kdl-iso8583-contvar)**  |
|  | **[kDL_ISO8583_N](dl__iso8583__common_8h.md#define-kdl-iso8583-n)**  |
|  | **[kDL_ISO8583_NS](dl__iso8583__common_8h.md#define-kdl-iso8583-ns)**  |
|  | **[kDL_ISO8583_XN](dl__iso8583__common_8h.md#define-kdl-iso8583-xn)**  |
|  | **[kDL_ISO8583_A](dl__iso8583__common_8h.md#define-kdl-iso8583-a)**  |
|  | **[kDL_ISO8583_AN](dl__iso8583__common_8h.md#define-kdl-iso8583-an)**  |
|  | **[kDL_ISO8583_ANS](dl__iso8583__common_8h.md#define-kdl-iso8583-ans)**  |
|  | **[kDL_ISO8583_ANSB](dl__iso8583__common_8h.md#define-kdl-iso8583-ansb)**  |
|  | **[kDL_ISO8583_ANP](dl__iso8583__common_8h.md#define-kdl-iso8583-anp)**  |
|  | **[kDL_ISO8583_B](dl__iso8583__common_8h.md#define-kdl-iso8583-b)**  |
|  | **[kDL_ISO8583_Z](dl__iso8583__common_8h.md#define-kdl-iso8583-z)**  |
|  | **[kDL_ISO8583_BMP](dl__iso8583__common_8h.md#define-kdl-iso8583-bmp)**  |
|  | **[kDL_ISO8583_AZ](dl__iso8583__common_8h.md#define-kdl-iso8583-az)**  |
|  | **[kDL_ISO8583_AZLP](dl__iso8583__common_8h.md#define-kdl-iso8583-azlp)**  |
|  | **[kDL_ISO8583_AZT0P](dl__iso8583__common_8h.md#define-kdl-iso8583-azt0p)**  |
|  | **[DL_ISO8583_IS_BITMAP](dl__iso8583__common_8h.md#define-dl-iso8583-is-bitmap)**(fieldType)  |
|  | **[DL_ISO8583_GetFieldDef](dl__iso8583__common_8h.md#define-dl-iso8583-getfielddef)**(fieldIdx, handler)  |

## Types Documentation

### typedef DL_ISO8583_FIELD_DEF

```cpp
typedef struct DL_ISO8583_FIELD_DEF_S DL_ISO8583_FIELD_DEF;
```


### typedef DL_ISO8583_HANDLER

```cpp
typedef struct DL_ISO8583_HANDLER_S DL_ISO8583_HANDLER;
```


### typedef DL_ISO8583_MSG_FIELD_DEF

```cpp
typedef struct DL_ISO8583_MSG_FIELD_DEF_S DL_ISO8583_MSG_FIELD_DEF;
```


### typedef DL_ISO8583_MSG_HANDLER

```cpp
typedef struct DL_ISO8583_MSG_HANDLER_S DL_ISO8583_MSG_HANDLER;
```


### typedef DL_ISO8583_MSG_FIELD

```cpp
typedef struct DL_ISO8583_MSG_FIELD_S DL_ISO8583_MSG_FIELD;
```


### typedef DL_ISO8583_MSG

```cpp
typedef struct DL_ISO8583_MSG_S DL_ISO8583_MSG;
```



## Functions Documentation

### function _DL_ISO8583_MSG_AllocField

```cpp
ISO_EXP_DECLDL_ERR _DL_ISO8583_MSG_AllocField(
    DL_UINT16 iField,
    DL_UINT16 iSize,
    DL_ISO8583_MSG * ioMsg,
    DL_UINT8 ** oPtr
)
```


### function DL_ISO8583_COMMON_SetHandler

```cpp
ISO_EXP_DECL void DL_ISO8583_COMMON_SetHandler(
    DL_ISO8583_FIELD_DEF * iFieldDefArr,
    DL_UINT8 iFieldDefItems,
    DL_ISO8583_HANDLER * oData
)
```




## Macros Documentation

### define ISO_EXP_DECL

```cpp
#define ISO_EXP_DECL 
```


### define kDL_ISO8583_MAX_FIELD_IDX

```cpp
#define kDL_ISO8583_MAX_FIELD_IDX 128
```


### define kDL_ISO8583_FIXED

```cpp
#define kDL_ISO8583_FIXED 0
```


Length of Variable: Fixed , no length byte 


### define kDL_ISO8583_LLVAR

```cpp
#define kDL_ISO8583_LLVAR 2
```


Length of Variable: 0..99 , 1 length byte (BCD) 


### define kDL_ISO8583_LLLVAR

```cpp
#define kDL_ISO8583_LLLVAR 3
```


Length of Variable: 0..999 , 2 length bytes (BCD) 


### define kDL_ISO8583_LLLLVAR

```cpp
#define kDL_ISO8583_LLLLVAR 4
```


Length of Variable: 0..9999, 2 length bytes (BCD) 


### define kDL_ISO8583_LLLLLLLLVAR

```cpp
#define kDL_ISO8583_LLLLLLLLVAR 8
```


Length of Variable: 0..99999999, 4 length bytes (BCD) 


### define kDL_ISO8583_LLVARA

```cpp
#define kDL_ISO8583_LLVARA 0x82
```


Length of Variable: 0..99 , 2 length bytes (ASCII) 


### define kDL_ISO8583_LLLVARA

```cpp
#define kDL_ISO8583_LLLVARA 0x83
```


Length of Variable: 0..999 , 3 length bytes (ASCII) 


### define kDL_ISO8583_LLLLVARA

```cpp
#define kDL_ISO8583_LLLLVARA 0x84
```


Length of Variable: 0..9999, 4 length bytes (ASCII) 


### define kDL_ISO8583_LLLLLLLLVARA

```cpp
#define kDL_ISO8583_LLLLLLLLVARA 0x88
```


Length of Variable: 0..99999999, 4 length bytes(ASCII) 


### define kDL_ISO8583_CONTVAR

```cpp
#define kDL_ISO8583_CONTVAR 0
```


### define kDL_ISO8583_N

```cpp
#define kDL_ISO8583_N 0
```


### define kDL_ISO8583_NS

```cpp
#define kDL_ISO8583_NS 1
```


### define kDL_ISO8583_XN

```cpp
#define kDL_ISO8583_XN 2
```


### define kDL_ISO8583_A

```cpp
#define kDL_ISO8583_A 3
```


### define kDL_ISO8583_AN

```cpp
#define kDL_ISO8583_AN 4
```


### define kDL_ISO8583_ANS

```cpp
#define kDL_ISO8583_ANS 5
```


### define kDL_ISO8583_ANSB

```cpp
#define kDL_ISO8583_ANSB 6
```


### define kDL_ISO8583_ANP

```cpp
#define kDL_ISO8583_ANP 7
```


### define kDL_ISO8583_B

```cpp
#define kDL_ISO8583_B 8
```


### define kDL_ISO8583_Z

```cpp
#define kDL_ISO8583_Z 9
```


### define kDL_ISO8583_BMP

```cpp
#define kDL_ISO8583_BMP 10
```


### define kDL_ISO8583_AZ

```cpp
#define kDL_ISO8583_AZ 11
```


### define kDL_ISO8583_AZLP

```cpp
#define kDL_ISO8583_AZLP 12
```


### define kDL_ISO8583_AZT0P

```cpp
#define kDL_ISO8583_AZT0P 13
```


### define DL_ISO8583_IS_BITMAP

```cpp
#define DL_ISO8583_IS_BITMAP(
    fieldType
)
(kDL_ISO8583_BMP==(fieldType))
```


### define DL_ISO8583_GetFieldDef

```cpp
#define DL_ISO8583_GetFieldDef(
    fieldIdx,
    handler
)
((DL_ISO8583_FIELD_DEF*)(((handler)->fieldArr) + (fieldIdx)))
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

#ifndef __INC_DL_ISO8583_COMMON
#define __INC_DL_ISO8583_COMMON

#include "dl_base.h"
#include "dl_err.h"
#include "dl_mem.h"
#include "ConstData.h"

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
//
// CONSTANTS
//

#define kDL_ISO8583_MAX_FIELD_IDX       128

/******************************************************************************/
//
// CONSTANTS (Fixed/Variable size indicators)
//
// ** DO NOT MODIFY - used by 'dl_iso8583_field.c' **
//

#define kDL_ISO8583_FIXED       0 
#define kDL_ISO8583_LLVAR       2 
#define kDL_ISO8583_LLLVAR      3 
#define kDL_ISO8583_LLLLVAR     4 
#define kDL_ISO8583_LLLLLLLLVAR 8 
#define kDL_ISO8583_LLVARA   0x82 
#define kDL_ISO8583_LLLVARA  0x83 
#define kDL_ISO8583_LLLLVARA 0x84 
#define kDL_ISO8583_LLLLLLLLVARA 0x88 
// NB special type for bitmap continuation bit
#define kDL_ISO8583_CONTVAR     0

/******************************************************************************/
//
// CONSTANTS (Field Types)
//
// ** DO NOT MODIFY - used by 'dl_iso8583_field.c' **
//

#define kDL_ISO8583_N           0
#define kDL_ISO8583_NS          1
#define kDL_ISO8583_XN          2
#define kDL_ISO8583_A           3
#define kDL_ISO8583_AN          4
#define kDL_ISO8583_ANS         5
#define kDL_ISO8583_ANSB        6
#define kDL_ISO8583_ANP         7
#define kDL_ISO8583_B           8
#define kDL_ISO8583_Z           9
#define kDL_ISO8583_BMP         10
#define kDL_ISO8583_AZ          11
#define kDL_ISO8583_AZLP        12 // AZ + leading 0 pad
#define kDL_ISO8583_AZT0P       13 // AZ + trailing 0 pad

/******************************************************************************/
//
// MACROS
//

// Indicates whether the field type is BITMAP
#define DL_ISO8583_IS_BITMAP(fieldType)\
 (kDL_ISO8583_BMP==(fieldType))

// Gets the field definition for the specified handler
#define DL_ISO8583_GetFieldDef(fieldIdx,handler)\
 ((DL_ISO8583_FIELD_DEF*)(((handler)->fieldArr) + (fieldIdx)))

/******************************************************************************/
//
// TYPES
//

struct DL_ISO8583_FIELD_DEF_S
{
    DL_UINT8   fieldType;
    DL_UINT16  len;        /* length for fixed size / max-len for variables */
    DL_UINT8   varLen;     /* number of variable length digits - e.g. 0-4   */
};
typedef struct DL_ISO8583_FIELD_DEF_S DL_ISO8583_FIELD_DEF;

struct DL_ISO8583_HANDLER_S
{
    DL_ISO8583_FIELD_DEF *fieldArr;
    DL_UINT8              fieldItems;
};
typedef struct DL_ISO8583_HANDLER_S DL_ISO8583_HANDLER;


struct DL_ISO8583_MSG_FIELD_DEF_S
{
    DL_UINT8                         fieldNo;
    bool                             mandatory;        /* Field is mandator*/
    com_verifone_TLVLite::ConstData  tlvTag;     /* */
};
typedef struct DL_ISO8583_MSG_FIELD_DEF_S DL_ISO8583_MSG_FIELD_DEF;

struct DL_ISO8583_MSG_HANDLER_S
{
    DL_ISO8583_HANDLER       isoHandler;
    DL_ISO8583_MSG_FIELD_DEF *fieldArr;
    DL_UINT8                 fieldItems;
};
typedef struct DL_ISO8583_MSG_HANDLER_S DL_ISO8583_MSG_HANDLER;

struct DL_ISO8583_MSG_FIELD_S
{
    DL_UINT16  len; /* used mainly for binary fields               */
    DL_UINT8  *ptr; /* null terminated data bytes (even if binary) */
};
typedef struct DL_ISO8583_MSG_FIELD_S DL_ISO8583_MSG_FIELD;

struct DL_ISO8583_MSG_S
{
    /* static memory details */
    DL_UINT8 *sPtrNext; /* next static point - NULL if dynamic mode  */
    DL_UINT8 *sPtrEnd;  /* end of the static buffer (if static mode) */

    /* NB bitmap is not stored, it is implied if the field is set */

    /* fields */
    DL_ISO8583_MSG_FIELD field[1+kDL_ISO8583_MAX_FIELD_IDX];
};
typedef struct DL_ISO8583_MSG_S DL_ISO8583_MSG;

/******************************************************************************/

// attempts to allocate memory for a field within the ISO8583 message
// NB used internally - not for client usage
// returns: error code
ISO_EXP_DECL DL_ERR _DL_ISO8583_MSG_AllocField ( DL_UINT16        iField,
                                    DL_UINT16        iSize,
                                    DL_ISO8583_MSG  *ioMsg,
                                    DL_UINT8       **oPtr );

/******************************************************************************/

// sets the handler details in 'oData'
// returns: none
ISO_EXP_DECL void DL_ISO8583_COMMON_SetHandler ( DL_ISO8583_FIELD_DEF *iFieldDefArr,
                                    DL_UINT8              iFieldDefItems,
                                    DL_ISO8583_HANDLER   *oData );

/******************************************************************************/

#ifdef __cplusplus
}  /* end of the 'extern "C"' block */
#endif

#endif /* __INC_DL_ISO8583_COMMON */
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

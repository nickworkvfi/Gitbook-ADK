---
title: iso8583/export/dl_str.h

---

# iso8583/export/dl_str.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_CHAR](dl__base_8h.md#typedef-dl-char) * | **[DL_STR_GetEnv](dl__str_8h.md#function-dl-str-getenv)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iEnvStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) int | **[DL_STR_StrLen](dl__str_8h.md#function-dl-str-strlen)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) int | **[DL_STR_StrLenExWS](dl__str_8h.md#function-dl-str-strlenexws)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) int | **[DL_STR_StrCmp](dl__str_8h.md#function-dl-str-strcmp)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr1, const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr2, int iIgnoreCase) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) int | **[DL_STR_StrNCmp](dl__str_8h.md#function-dl-str-strncmp)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr1, const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr2, int iIgnoreCase, int iMaxChars) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) void | **[DL_STR_StrCpy](dl__str_8h.md#function-dl-str-strcpy)**([DL_CHAR](dl__base_8h.md#typedef-dl-char) * ioToPtr, const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iFromPtr, int iMaxChars) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[DL_STR_StrDup](dl__str_8h.md#function-dl-str-strdup)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr, [DL_CHAR](dl__base_8h.md#typedef-dl-char) ** oStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[DL_STR_StrNDup](dl__str_8h.md#function-dl-str-strndup)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr, [DL_UINT32](dl__base_8h.md#typedef-dl-uint32) iMaxChars, [DL_CHAR](dl__base_8h.md#typedef-dl-char) ** oStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[DL_STR_StrCat](dl__str_8h.md#function-dl-str-strcat)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr1, const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr2, [DL_CHAR](dl__base_8h.md#typedef-dl-char) ** oStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) void | **[DL_STR_LTrim](dl__str_8h.md#function-dl-str-ltrim)**([DL_CHAR](dl__base_8h.md#typedef-dl-char) * ioStr, [DL_CHAR](dl__base_8h.md#typedef-dl-char) iTrimCh) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) void | **[DL_STR_RTrim](dl__str_8h.md#function-dl-str-rtrim)**([DL_CHAR](dl__base_8h.md#typedef-dl-char) * ioStr, [DL_CHAR](dl__base_8h.md#typedef-dl-char) iTrimCh) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) void | **[DL_STR_ToUpper](dl__str_8h.md#function-dl-str-toupper)**([DL_CHAR](dl__base_8h.md#typedef-dl-char) * ioStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_CHAR](dl__base_8h.md#typedef-dl-char) * | **[DL_STR_SkipWS](dl__str_8h.md#function-dl-str-skipws)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) int | **[DL_STR_IsNumeric](dl__str_8h.md#function-dl-str-isnumeric)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) int | **[DL_STR_Validate](dl__str_8h.md#function-dl-str-validate)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr, int iMinLen, int iMaxLen, const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iValidChars) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl) int | **[DL_STR_Contains](dl__str_8h.md#function-dl-str-contains)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr, const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iContains) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[DL_STR_EncapsulateStr](dl__str_8h.md#function-dl-str-encapsulatestr)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr, [DL_CHAR](dl__base_8h.md#typedef-dl-char) iEncapChar, [DL_CHAR](dl__base_8h.md#typedef-dl-char) ** oStr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_ERR](dl__err_8h.md#typedef-dl-err) | **[DL_STR_GetEncapsulatedStr](dl__str_8h.md#function-dl-str-getencapsulatedstr)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr, [DL_CHAR](dl__base_8h.md#typedef-dl-char) iEncapChar, [DL_CHAR](dl__base_8h.md#typedef-dl-char) ** oDataStr, [DL_CHAR](dl__base_8h.md#typedef-dl-char) ** oNextPtr) |
| [ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)[DL_CHAR](dl__base_8h.md#typedef-dl-char) * | **[DL_STR_ReadToBuffer](dl__str_8h.md#function-dl-str-readtobuffer)**(const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iStr, const [DL_CHAR](dl__base_8h.md#typedef-dl-char) * iValidChars, int iBufferSize, [DL_CHAR](dl__base_8h.md#typedef-dl-char) * oBuffer) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| [DL_CHAR](dl__base_8h.md#typedef-dl-char)[1] | **[kDL_STR_EmptyStr](dl__str_8h.md#variable-kdl-str-emptystr)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ISO_EXP_DECL](dl__str_8h.md#define-iso-exp-decl)**  |
|  | **[DL_STR_SafeStr](dl__str_8h.md#define-dl-str-safestr)**(str)  |
|  | **[DL_STR_SafeNum](dl__str_8h.md#define-dl-str-safenum)**(a)  |
|  | **[DL_STR_StrChr](dl__str_8h.md#define-dl-str-strchr)**  |
|  | **[DL_STR_IsWS](dl__str_8h.md#define-dl-str-isws)**(iCh)  |


## Functions Documentation

### function DL_STR_GetEnv

```cpp
ISO_EXP_DECLDL_CHAR * DL_STR_GetEnv(
    const DL_CHAR * iEnvStr
)
```


### function DL_STR_StrLen

```cpp
ISO_EXP_DECL int DL_STR_StrLen(
    const DL_CHAR * iStr
)
```


### function DL_STR_StrLenExWS

```cpp
ISO_EXP_DECL int DL_STR_StrLenExWS(
    const DL_CHAR * iStr
)
```


### function DL_STR_StrCmp

```cpp
ISO_EXP_DECL int DL_STR_StrCmp(
    const DL_CHAR * iStr1,
    const DL_CHAR * iStr2,
    int iIgnoreCase
)
```


### function DL_STR_StrNCmp

```cpp
ISO_EXP_DECL int DL_STR_StrNCmp(
    const DL_CHAR * iStr1,
    const DL_CHAR * iStr2,
    int iIgnoreCase,
    int iMaxChars
)
```


### function DL_STR_StrCpy

```cpp
ISO_EXP_DECL void DL_STR_StrCpy(
    DL_CHAR * ioToPtr,
    const DL_CHAR * iFromPtr,
    int iMaxChars
)
```


### function DL_STR_StrDup

```cpp
ISO_EXP_DECLDL_ERR DL_STR_StrDup(
    const DL_CHAR * iStr,
    DL_CHAR ** oStr
)
```


### function DL_STR_StrNDup

```cpp
ISO_EXP_DECLDL_ERR DL_STR_StrNDup(
    const DL_CHAR * iStr,
    DL_UINT32 iMaxChars,
    DL_CHAR ** oStr
)
```


### function DL_STR_StrCat

```cpp
ISO_EXP_DECLDL_ERR DL_STR_StrCat(
    const DL_CHAR * iStr1,
    const DL_CHAR * iStr2,
    DL_CHAR ** oStr
)
```


### function DL_STR_LTrim

```cpp
ISO_EXP_DECL void DL_STR_LTrim(
    DL_CHAR * ioStr,
    DL_CHAR iTrimCh
)
```


### function DL_STR_RTrim

```cpp
ISO_EXP_DECL void DL_STR_RTrim(
    DL_CHAR * ioStr,
    DL_CHAR iTrimCh
)
```


### function DL_STR_ToUpper

```cpp
ISO_EXP_DECL void DL_STR_ToUpper(
    DL_CHAR * ioStr
)
```


### function DL_STR_SkipWS

```cpp
ISO_EXP_DECLDL_CHAR * DL_STR_SkipWS(
    const DL_CHAR * iStr
)
```


### function DL_STR_IsNumeric

```cpp
ISO_EXP_DECL int DL_STR_IsNumeric(
    const DL_CHAR * iStr
)
```


### function DL_STR_Validate

```cpp
ISO_EXP_DECL int DL_STR_Validate(
    const DL_CHAR * iStr,
    int iMinLen,
    int iMaxLen,
    const DL_CHAR * iValidChars
)
```


### function DL_STR_Contains

```cpp
ISO_EXP_DECL int DL_STR_Contains(
    const DL_CHAR * iStr,
    const DL_CHAR * iContains
)
```


### function DL_STR_EncapsulateStr

```cpp
ISO_EXP_DECLDL_ERR DL_STR_EncapsulateStr(
    const DL_CHAR * iStr,
    DL_CHAR iEncapChar,
    DL_CHAR ** oStr
)
```


### function DL_STR_GetEncapsulatedStr

```cpp
ISO_EXP_DECLDL_ERR DL_STR_GetEncapsulatedStr(
    const DL_CHAR * iStr,
    DL_CHAR iEncapChar,
    DL_CHAR ** oDataStr,
    DL_CHAR ** oNextPtr
)
```


### function DL_STR_ReadToBuffer

```cpp
ISO_EXP_DECLDL_CHAR * DL_STR_ReadToBuffer(
    const DL_CHAR * iStr,
    const DL_CHAR * iValidChars,
    int iBufferSize,
    DL_CHAR * oBuffer
)
```



## Attributes Documentation

### variable kDL_STR_EmptyStr

```cpp
DL_CHAR[1] kDL_STR_EmptyStr;
```



## Macros Documentation

### define ISO_EXP_DECL

```cpp
#define ISO_EXP_DECL 
```


### define DL_STR_SafeStr

```cpp
#define DL_STR_SafeStr(
    str
)
((str)==NULL?kDL_STR_EmptyStr:(str))
```


### define DL_STR_SafeNum

```cpp
#define DL_STR_SafeNum(
    a
)
((a)==NULL?0:*(a))
```


### define DL_STR_StrChr

```cpp
#define DL_STR_StrChr strchr
```


### define DL_STR_IsWS

```cpp
#define DL_STR_IsWS(
    iCh
)
((((iCh)>=kDL_ASCII_HT)&&((iCh)<=kDL_ASCII_CR))||((iCh)==kDL_ASCII_SP) )
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
/* String manipulation module                                                 */
/*                                                                            */
/******************************************************************************/

#ifndef __INC_DL_STR
#define __INC_DL_STR

#include "dl_base.h"
#include "dl_err.h"
#include "dl_mem.h"

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

extern DL_CHAR kDL_STR_EmptyStr[1];

/******************************************************************************/
//
// MACROS
//

/* returns an empty string if the pointer is NULL */
#define DL_STR_SafeStr(str)\
 ((str)==NULL?kDL_STR_EmptyStr:(str))

/* accepts a pointer to a numeric - outputs safe values (ie 0 if NULL) */
#define DL_STR_SafeNum(a)\
 ((a)==NULL?0:*(a))

#define DL_STR_StrChr   strchr

/* returns 1 if character is whitespace / 0 otherwise */
/* NB whitespace: 0x09-0x0D or 0x20 */
#define DL_STR_IsWS(iCh)\
 ((((iCh)>=kDL_ASCII_HT)&&((iCh)<=kDL_ASCII_CR))||((iCh)==kDL_ASCII_SP) )

/******************************************************************************/

/* returns: static pointer to the request environment variable OR empty */
/*          string if not found / set                                   */
ISO_EXP_DECL DL_CHAR *DL_STR_GetEnv ( const DL_CHAR *iEnvStr );

/******************************************************************************/

/* returns: length of string */
ISO_EXP_DECL int DL_STR_StrLen ( const DL_CHAR *iStr );

/* returns length of string excluding whitespace characters */
ISO_EXP_DECL int DL_STR_StrLenExWS ( const DL_CHAR *iStr );

/******************************************************************************/

/* compares two strings                                     */
/* returns: -1 if str1<str2, 0 if str1=str2, 1 if str1>str2 */
ISO_EXP_DECL int DL_STR_StrCmp ( const DL_CHAR *iStr1,
                    const DL_CHAR *iStr2,
                    int            iIgnoreCase );

/* compares two string up to maximum length (iMaxChars)     */
/* returns: -1 if str1<str2, 0 if str1=str2, 1 if str1>str2 */
/* NB compares at most 'maxCompareChars'                    */
ISO_EXP_DECL int DL_STR_StrNCmp ( const DL_CHAR *iStr1,
                     const DL_CHAR *iStr2,
                     int            iIgnoreCase,
                     int            iMaxChars );

/******************************************************************************/

/* copies a string (iFromPtr) to another string (ioToPtr) up to a maximum */
/* length (iMaxChars)                                                     */
/* returns: n/a                                                           */
/* NB if 'ioToPtr' is NULL then empty string is copied                    */
ISO_EXP_DECL void DL_STR_StrCpy ( DL_CHAR       *ioToPtr,
                     const DL_CHAR *iFromPtr,
                     int            iMaxChars );

/* outputs an allocated copy of the string (caller must free) */
/* NB if 'iStr' is NULL then empty string is output           */
/* returns: error code                                        */
ISO_EXP_DECL DL_ERR DL_STR_StrDup ( const DL_CHAR  *iStr,
                       DL_CHAR       **oStr );

/* as per 'DL_STR_StrDup' but limited to 'iMaxChars' */
/* NB if 'iStr' is NULL then empty string is output  */
/* returns: error code                               */
ISO_EXP_DECL DL_ERR DL_STR_StrNDup ( const DL_CHAR  *iStr,
                        DL_UINT32       iMaxChars,
                        DL_CHAR       **oStr );

/* concatenates the two specified strings and outputs an allocated string */
/* NB caller must free                                                    */
/* returns: error code                                                    */
ISO_EXP_DECL DL_ERR DL_STR_StrCat ( const DL_CHAR  *iStr1,
                       const DL_CHAR  *iStr2,
                       DL_CHAR       **oStr );

/******************************************************************************/

/* trims any occurances of the specified character from the left of the */
/* string and shifts the string to the left                             */
ISO_EXP_DECL void DL_STR_LTrim ( DL_CHAR *ioStr,
                    DL_CHAR  iTrimCh );

/* trims any occurances of the specified character from the right of the */
/* string                                                                */
ISO_EXP_DECL void DL_STR_RTrim ( DL_CHAR *ioStr,
                    DL_CHAR  iTrimCh );

/* converts all lowercase characters to uppercase */
ISO_EXP_DECL void DL_STR_ToUpper ( DL_CHAR *ioStr );

/* moves past whitespace characters                           */
/* returns: pointer to character following whitespace or NULL */
ISO_EXP_DECL DL_CHAR *DL_STR_SkipWS ( const DL_CHAR *iStr );

/******************************************************************************/

/* indicates if the specified string comprises only of digits */
/* NULL is treated as a non-numeric string                    */
/* returns: 1 if numeric / 0 otherwise                        */
ISO_EXP_DECL int DL_STR_IsNumeric ( const DL_CHAR *iStr );

/* returns: 1 if string is valid / otherwise 0                     */
/* minLen: indicates minimum length of the string (-1 if no check) */
/* maxLen: indicates maximum length of the string (-1 if no check) */
/* validChars: string of valid characters (NULL if no check)       */
ISO_EXP_DECL int DL_STR_Validate ( const DL_CHAR *iStr,
                      int            iMinLen,
                      int            iMaxLen,
                      const DL_CHAR *iValidChars );

/* returns: 1 if the string (iStr) contains any of the characters in */
/*          'iContains', 0 otherwise                                 */
ISO_EXP_DECL int DL_STR_Contains ( const DL_CHAR *iStr,
                      const DL_CHAR *iContains );

/******************************************************************************/

/* encapsulates the input string (iStr) using the encapsulation character  */
/* (iEncapChar) - outputting an allocated string (oStr) - caller must free */
/* returns: error code                                                     */
ISO_EXP_DECL DL_ERR DL_STR_EncapsulateStr ( const DL_CHAR  *iStr,
                               DL_CHAR         iEncapChar,
                               DL_CHAR       **oStr );

/* gets the (escaped) content of an encapsulated string                  */
/* outputs: oDataStr - content of encapsulated string (caller MUST free) */
/*          oNextPtr - pointer to next character OR 'iStr' if error      */
/* returns: error code                                                   */
ISO_EXP_DECL DL_ERR DL_STR_GetEncapsulatedStr ( const DL_CHAR  *iStr,
                                   DL_CHAR         iEncapChar,
                                   DL_CHAR       **oDataStr,
                                   DL_CHAR       **oNextPtr );

/******************************************************************************/

/* reads characters (from 'iStr') into the specified buffer (oBuffer) until   */
/* an invalid character is encountered (based on 'iValidChars') or the buffer */
/* if full (i.e. contains 'iBufferSize'-1 characters)                         */
/* returns: pointer to next character in 'iStr'                               */
ISO_EXP_DECL DL_CHAR *DL_STR_ReadToBuffer ( const DL_CHAR *iStr,
                               const DL_CHAR *iValidChars,
                               int            iBufferSize,
                               DL_CHAR       *oBuffer );

/******************************************************************************/
#ifdef __cplusplus
}
#endif

#endif /* __INC_DL_STR */
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

---
hidden: true
title: dl_str.h
---

<a href="dl__str_8h.md">Go to the documentation of this file.</a>

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
 25 /* String manipulation module */
 26 /* */
 27 /******************************************************************************/
 28 
 29 #ifndef __INC_DL_STR
 30 #define __INC_DL_STR
 31 
 32 #include "dl_base.h"
 33 #include "dl_err.h"
 34 #include "dl_mem.h"
 35 
 36 #include <string.h>
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
 56 #endif /* ndef __cplusplus */
 57 
 58 /******************************************************************************/
 59 
 60 extern DL_CHAR kDL_STR_EmptyStr[1];
 61 
 62 /******************************************************************************/
 63 //
 64 // MACROS
 65 //
 66 
 67 /* returns an empty string if the pointer is NULL */
 68 #define DL_STR_SafeStr(str)\
 69  ((str)==NULL?kDL_STR_EmptyStr:(str))
 70 
 71 /* accepts a pointer to a numeric - outputs safe values (ie 0 if NULL) */
 72 #define DL_STR_SafeNum(a)\
 73  ((a)==NULL?0:*(a))
 74 
 75 #define DL_STR_StrChr strchr
 76 
 77 /* returns 1 if character is whitespace / 0 otherwise */
 78 /* NB whitespace: 0x09-0x0D or 0x20 */
 79 #define DL_STR_IsWS(iCh)\
 80  ((((iCh)>=kDL_ASCII_HT)&&((iCh)<=kDL_ASCII_CR))||((iCh)==kDL_ASCII_SP) )
 81 
 82 /******************************************************************************/
 83 
 84 /* returns: static pointer to the request environment variable OR empty */
 85 /* string if not found / set */
 86 ISO_EXP_DECL DL_CHAR *DL_STR_GetEnv ( const DL_CHAR *iEnvStr );
 87 
 88 /******************************************************************************/
 89 
 90 /* returns: length of string */
 91 ISO_EXP_DECL int DL_STR_StrLen ( const DL_CHAR *iStr );
 92 
 93 /* returns length of string excluding whitespace characters */
 94 ISO_EXP_DECL int DL_STR_StrLenExWS ( const DL_CHAR *iStr );
 95 
 96 /******************************************************************************/
 97 
 98 /* compares two strings */
 99 /* returns: -1 if str1<str2, 0 if str1=str2, 1 if str1>str2 */
 100 ISO_EXP_DECL int DL_STR_StrCmp ( const DL_CHAR *iStr1,
 101  const DL_CHAR *iStr2,
 102  int iIgnoreCase );
 103 
 104 /* compares two string up to maximum length (iMaxChars) */
 105 /* returns: -1 if str1<str2, 0 if str1=str2, 1 if str1>str2 */
 106 /* NB compares at most 'maxCompareChars' */
 107 ISO_EXP_DECL int DL_STR_StrNCmp ( const DL_CHAR *iStr1,
 108  const DL_CHAR *iStr2,
 109  int iIgnoreCase,
 110  int iMaxChars );
 111 
 112 /******************************************************************************/
 113 
 114 /* copies a string (iFromPtr) to another string (ioToPtr) up to a maximum */
 115 /* length (iMaxChars) */
 116 /* returns: n/a */
 117 /* NB if 'ioToPtr' is NULL then empty string is copied */
 118 ISO_EXP_DECL void DL_STR_StrCpy ( DL_CHAR *ioToPtr,
 119  const DL_CHAR *iFromPtr,
 120  int iMaxChars );
 121 
 122 /* outputs an allocated copy of the string (caller must free) */
 123 /* NB if 'iStr' is NULL then empty string is output */
 124 /* returns: error code */
 125 ISO_EXP_DECL DL_ERR DL_STR_StrDup ( const DL_CHAR *iStr,
 126  DL_CHAR **oStr );
 127 
 128 /* as per 'DL_STR_StrDup' but limited to 'iMaxChars' */
 129 /* NB if 'iStr' is NULL then empty string is output */
 130 /* returns: error code */
 131 ISO_EXP_DECL DL_ERR DL_STR_StrNDup ( const DL_CHAR *iStr,
 132  DL_UINT32 iMaxChars,
 133  DL_CHAR **oStr );
 134 
 135 /* concatenates the two specified strings and outputs an allocated string */
 136 /* NB caller must free */
 137 /* returns: error code */
 138 ISO_EXP_DECL DL_ERR DL_STR_StrCat ( const DL_CHAR *iStr1,
 139  const DL_CHAR *iStr2,
 140  DL_CHAR **oStr );
 141 
 142 /******************************************************************************/
 143 
 144 /* trims any occurances of the specified character from the left of the */
 145 /* string and shifts the string to the left */
 146 ISO_EXP_DECL void DL_STR_LTrim ( DL_CHAR *ioStr,
 147  DL_CHAR iTrimCh );
 148 
 149 /* trims any occurances of the specified character from the right of the */
 150 /* string */
 151 ISO_EXP_DECL void DL_STR_RTrim ( DL_CHAR *ioStr,
 152  DL_CHAR iTrimCh );
 153 
 154 /* converts all lowercase characters to uppercase */
 155 ISO_EXP_DECL void DL_STR_ToUpper ( DL_CHAR *ioStr );
 156 
 157 /* moves past whitespace characters */
 158 /* returns: pointer to character following whitespace or NULL */
 159 ISO_EXP_DECL DL_CHAR *DL_STR_SkipWS ( const DL_CHAR *iStr );
 160 
 161 /******************************************************************************/
 162 
 163 /* indicates if the specified string comprises only of digits */
 164 /* NULL is treated as a non-numeric string */
 165 /* returns: 1 if numeric / 0 otherwise */
 166 ISO_EXP_DECL int DL_STR_IsNumeric ( const DL_CHAR *iStr );
 167 
 168 /* returns: 1 if string is valid / otherwise 0 */
 169 /* minLen: indicates minimum length of the string (-1 if no check) */
 170 /* maxLen: indicates maximum length of the string (-1 if no check) */
 171 /* validChars: string of valid characters (NULL if no check) */
 172 ISO_EXP_DECL int DL_STR_Validate ( const DL_CHAR *iStr,
 173  int iMinLen,
 174  int iMaxLen,
 175  const DL_CHAR *iValidChars );
 176 
 177 /* returns: 1 if the string (iStr) contains any of the characters in */
 178 /* 'iContains', 0 otherwise */
 179 ISO_EXP_DECL int DL_STR_Contains ( const DL_CHAR *iStr,
 180  const DL_CHAR *iContains );
 181 
 182 /******************************************************************************/
 183 
 184 /* encapsulates the input string (iStr) using the encapsulation character */
 185 /* (iEncapChar) - outputting an allocated string (oStr) - caller must free */
 186 /* returns: error code */
 187 ISO_EXP_DECL DL_ERR DL_STR_EncapsulateStr ( const DL_CHAR *iStr,
 188  DL_CHAR iEncapChar,
 189  DL_CHAR **oStr );
 190 
 191 /* gets the (escaped) content of an encapsulated string */
 192 /* outputs: oDataStr - content of encapsulated string (caller MUST free) */
 193 /* oNextPtr - pointer to next character OR 'iStr' if error */
 194 /* returns: error code */
 195 ISO_EXP_DECL DL_ERR DL_STR_GetEncapsulatedStr ( const DL_CHAR *iStr,
 196  DL_CHAR iEncapChar,
 197  DL_CHAR **oDataStr,
 198  DL_CHAR **oNextPtr );
 199 
 200 /******************************************************************************/
 201 
 202 /* reads characters (from 'iStr') into the specified buffer (oBuffer) until */
 203 /* an invalid character is encountered (based on 'iValidChars') or the buffer */
 204 /* if full (i.e. contains 'iBufferSize'-1 characters) */
 205 /* returns: pointer to next character in 'iStr' */
 206 ISO_EXP_DECL DL_CHAR *DL_STR_ReadToBuffer ( const DL_CHAR *iStr,
 207  const DL_CHAR *iValidChars,
 208  int iBufferSize,
 209  DL_CHAR *oBuffer );
 210 
 211 /******************************************************************************/
 212 #ifdef __cplusplus
 213 }
 214 #endif
 215 
 216 #endif /* __INC_DL_STR */
```

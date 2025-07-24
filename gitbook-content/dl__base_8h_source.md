---
hidden: true
title: dl_base.h
---

<a href="dl__base_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /******************************************************************************/
 2 /* */
 3 /* Copyright (C) 2001-2007 Oscar Sanderson */
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
 25 /* Base Types / Constants */
 26 /* */
 27 /******************************************************************************/
 28 
 29 #ifndef __INC_DL_BASE
 30 #define __INC_DL_BASE
 31 
 32 #include <stdio.h>
 33 #include <stdlib.h>
 34 #include <stdarg.h>
 35 #include <assert.h>
 36 
 37 /******************************************************************************/
 38 //
 39 // OPERATING SYSTEM / ENVIRONMENT SETTINGS
 40 //
 41 
 42 // DL_WIN32 (Target = Windows 32)
 43 // DL_UNIX (Target = UNIX)
 44 
 45 #ifdef WIN32
 46 /* Win32 */
 47 #define DL_WIN32
 48 #else
 49 /* Unix (assumed) */
 50 #define DL_UNIX
 51 #endif
 52 
 53 #if 0
 54 #ifdef DL_WIN32
 55 /* Include Windows header file */
 56 #include <windows.h>
 57 #endif /* DL_WIN32 */
 58 #endif
 59 
 60 // Debug
 61 #ifdef DEBUG
 62 #define DL_DEBUG
 63 #endif
 64 
 65 /******************************************************************************/
 66 //
 67 // TYPES
 68 //
 69 
 70 #ifdef DL_WIN32
 71 typedef unsigned char DL_UINT8;
 72 typedef char DL_SINT8;
 73 typedef unsigned short DL_UINT16;
 74 typedef short DL_SINT16;
 75 typedef unsigned int DL_UINT32;
 76 typedef int DL_SINT32;
 77 #elif defined DL_UNIX
 78 typedef unsigned char DL_UINT8;
 79 typedef char DL_SINT8;
 80 typedef unsigned short DL_UINT16;
 81 typedef short DL_SINT16;
 82 typedef unsigned long DL_UINT32;
 83 typedef long DL_SINT32;
 84 #else
 85 // Unsupported platform
 86 #error Platform Not Supported
 87 #endif
 88 
 89 // NB not used by all library code!
 90 typedef DL_SINT8 DL_CHAR;
 91 typedef DL_UINT32 DL_UCHAR; // unicode character
 92 
 93 /******************************************************************************/
 94 //
 95 // CONSTANTS (INTEGER TYPES)
 96 //
 97 
 98 #define DL_SIZE_OF_UINT8 3 /* 0..255 */
 99 #define DL_SIZE_OF_SINT8 4 /* -127..128 */
 100 #define DL_SIZE_OF_UINT16 5 /* 0-65535 */
 101 #define DL_SIZE_OF_SINT16 6
 102 
 103 #define DL_SIZE_OF_UINT24 8
 104 
 105 #define DL_SIZE_OF_UINT32 10
 106 #define DL_SIZE_OF_SINT32 11
 107 
 108 #define DL_MAX_UINT8 0xff
 109 #define DL_MAX_UINT16 0xffff
 110 #define DL_MAX_UINT24 0xffffffL
 111 #define DL_MAX_UINT32 0xffffffffL
 112 
 113 /******************************************************************************/
 114 //
 115 // CONSTANTS (ASCII CHARACTERS)
 116 //
 117 
 118 #define kDL_ASCII_NULL 0x00
 119 #define kDL_ASCII_HT 0x09
 120 #define kDL_ASCII_LF 0x0A
 121 #define kDL_ASCII_CR 0x0D
 122 #define kDL_ASCII_SP 0x20
 123 
 124 #define kDL_ASCII_QUOTE 0x22
 125 #define kDL_ASCII_APOSTROPHE 0x27
 126 #define kDL_ASCII_FORWARDSLASH 0x2F
 127 #define kDL_ASCII_BACKSLASH 0x5C
 128 
 129 /******************************************************************************/
 130 //
 131 // MACROS (BIT MANIPULATION)
 132 //
 133 
 134 #define DL_BIT_TEST(value,bit)\
 135  ((((DL_UINT32)(value)) & ((DL_UINT32)1 << (bit))) ? 1 : 0)
 136 
 137 #define DL_BIT_SET(value,bit)\
 138  (((DL_UINT32)(value)) |= ((DL_UINT32)1 << (bit)))
 139 
 140 #define DL_BIT_CLEAR(value,bit)\
 141  (((DL_UINT32)(value)) &= ~((DL_UINT32)1 << (bit)))
 142 
 143 /******************************************************************************/
 144 //
 145 // MACROS (BYTE-ARR -> INTEGER)
 146 //
 147 
 148 // converts 2 bytes to UINT16 - assumes logical ordering of the integer
 149 #define DL_BYTES_TO_UINT16(byteArr)\
 150  ((((DL_UINT16)((byteArr)[0]) & DL_MAX_UINT8) << 8) +\
 151  ((DL_UINT16)((byteArr)[1]) & DL_MAX_UINT8))
 152 
 153 // converts 3 bytes to UINT24 (ie 32) - assumes logical ordering of the integer
 154 #define DL_BYTES_TO_UINT24(byteArr)\
 155  ((((DL_UINT32)((byteArr)[0]) & DL_MAX_UINT8) << 16) +\
 156  (((DL_UINT32)((byteArr)[1]) & DL_MAX_UINT8) << 8) +\
 157  ((DL_UINT32)((byteArr)[2]) & DL_MAX_UINT8))
 158 
 159 // converts 4 bytes to UINT32 - assumes logical ordering of the integer
 160 #define DL_BYTES_TO_UINT32(byteArr)\
 161  ((((DL_UINT32)((byteArr)[0]) & DL_MAX_UINT8) << 24) +\
 162  (((DL_UINT32)((byteArr)[1]) & DL_MAX_UINT8) << 16) +\
 163  (((DL_UINT32)((byteArr)[2]) & DL_MAX_UINT8) << 8) +\
 164  ((DL_UINT32)((byteArr)[3]) & DL_MAX_UINT8))
 165 
 166 /******************************************************************************/
 167 //
 168 // MACROS (INTEGER -> BYTE-ARR)
 169 //
 170 
 171 // writes the UINT16 to the specified memory address (logical ordering)
 172 // NB this macro DOES NOT advance the pointer
 173 #define DL_UINT16_TO_BYTES(iVal,oArr)\
 174 { (oArr)[0]=((iVal) >> 8) & DL_MAX_UINT8;\
 175  (oArr)[1]= (iVal) & DL_MAX_UINT8; }
 176 
 177 // writes the UINT24 to the specified memory address (logical ordering)
 178 // NB this macro DOES NOT advance the pointer
 179 #define DL_UINT24_TO_BYTES(iVal,oArr)\
 180  {(oArr)[0]=((iVal) >> 16) & DL_MAX_UINT8;\
 181  (oArr)[1]=((iVal) >> 8) & DL_MAX_UINT8;\
 182  (oArr)[2]= (iVal) & DL_MAX_UINT8;};
 183 
 184 // writes the UINT32 to the specified memory address (logical ordering)
 185 // NB this macro DOES NOT advance the pointer
 186 #define DL_UINT32_TO_BYTES(iVal,oArr)\
 187  {(oArr)[0]=((iVal) >> 24) & DL_MAX_UINT8;\
 188  (oArr)[1]=((iVal) >> 16) & DL_MAX_UINT8;\
 189  (oArr)[2]=((iVal) >> 8) & DL_MAX_UINT8;\
 190  (oArr)[3]= (iVal) & DL_MAX_UINT8;};
 191 
 192 /******************************************************************************/
 193 //
 194 // MACROS (ASCII-HEX <--> NIBBLE)
 195 //
 196 
 197 #define DL_ASCHEX_2_NIBBLE(aschex)\
 198  ( ((aschex)>='a') ? (((aschex)-'a')%6)+10 : (((aschex)>='A') ? (((aschex)-'A')%6)+10 : ((aschex)-'0') ) )
 199 
 200 #define DL_NIBBLE_2_ASCHEX(nibble)\
 201  ( ((nibble)>9) ? (((nibble)-10)%6)+'A' : ((nibble)+'0') )
 202 
 203 /******************************************************************************/
 204 //
 205 // MACROS (INTEGER COMPARISON)
 206 //
 207 
 208 #define MIN(x,y) ((x)<(y)?(x):(y))
 209 
 210 #define MAX(x,y) ((x)>(y)?(x):(y))
 211 
 212 /******************************************************************************/
 213 //
 214 // MACROS (INTEGER ADDITION)
 215 //
 216 
 217 // adds the amount indicated by 'addition' to 'initial' unless it would exceed
 218 // the value indicated by 'limit', in which case the returned amount is limited
 219 #define DL_UINT32_AddWithLimit(initial,addition,limit)\
 220  ((((DL_UINT32)(initial)>=(DL_UINT32)(limit))||\
 221  ((DL_UINT32)(addition)>=(DL_UINT32)(limit))||\
 222  (((DL_UINT32)(limit)-(DL_UINT32)(initial))<(DL_UINT32)(addition)))\
 223  ? (DL_UINT32)limit : (DL_UINT32)(initial)+(DL_UINT32)(addition))
 224 
 225 /******************************************************************************/
 226 
 227 #endif /* __INC_DL_BASE */
```

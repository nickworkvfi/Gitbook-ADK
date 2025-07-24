---
hidden: true
title: dl_iso8583_common.h
---

<a href="dl__iso8583__common_8h.md">Go to the documentation of this file.</a>

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
 25 #ifndef __INC_DL_ISO8583_COMMON
 26 #define __INC_DL_ISO8583_COMMON
 27 
 28 #include "dl_base.h"
 29 #include "dl_err.h"
 30 #include "dl_mem.h"
 31 #include "ConstData.h"
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
 51 #endif
 52 
 53 /******************************************************************************/
 54 //
 55 // CONSTANTS
 56 //
 57 
 58 #define kDL_ISO8583_MAX_FIELD_IDX 128
 59 
 60 /******************************************************************************/
 61 //
 62 // CONSTANTS (Fixed/Variable size indicators)
 63 //
 64 // ** DO NOT MODIFY - used by 'dl_iso8583_field.c' **
 65 //
 66 
 67 #define kDL_ISO8583_FIXED 0 
 68 #define kDL_ISO8583_LLVAR 2 
 69 #define kDL_ISO8583_LLLVAR 3 
 70 #define kDL_ISO8583_LLLLVAR 4 
 71 #define kDL_ISO8583_LLLLLLLLVAR 8 
 72 #define kDL_ISO8583_LLVARA 0x82 
 73 #define kDL_ISO8583_LLLVARA 0x83 
 74 #define kDL_ISO8583_LLLLVARA 0x84 
 75 #define kDL_ISO8583_LLLLLLLLVARA 0x88 
 77 // NB special type for bitmap continuation bit
 78 #define kDL_ISO8583_CONTVAR 0
 79 
 80 /******************************************************************************/
 81 //
 82 // CONSTANTS (Field Types)
 83 //
 84 // ** DO NOT MODIFY - used by 'dl_iso8583_field.c' **
 85 //
 86 
 87 #define kDL_ISO8583_N 0
 88 #define kDL_ISO8583_NS 1
 89 #define kDL_ISO8583_XN 2
 90 #define kDL_ISO8583_A 3
 91 #define kDL_ISO8583_AN 4
 92 #define kDL_ISO8583_ANS 5
 93 #define kDL_ISO8583_ANSB 6
 94 #define kDL_ISO8583_ANP 7
 95 #define kDL_ISO8583_B 8
 96 #define kDL_ISO8583_Z 9
 97 #define kDL_ISO8583_BMP 10
 98 #define kDL_ISO8583_AZ 11
 99 #define kDL_ISO8583_AZLP 12 // AZ + leading 0 pad
 100 #define kDL_ISO8583_AZT0P 13 // AZ + trailing 0 pad
 101 
 102 /******************************************************************************/
 103 //
 104 // MACROS
 105 //
 106 
 107 // Indicates whether the field type is BITMAP
 108 #define DL_ISO8583_IS_BITMAP(fieldType)\
 109  (kDL_ISO8583_BMP==(fieldType))
 110 
 111 // Gets the field definition for the specified handler
 112 #define DL_ISO8583_GetFieldDef(fieldIdx,handler)\
 113  ((DL_ISO8583_FIELD_DEF*)(((handler)->fieldArr) + (fieldIdx)))
 114 
 115 /******************************************************************************/
 116 //
 117 // TYPES
 118 //
 119 
 120 struct DL_ISO8583_FIELD_DEF_S
 121 {
 122  DL_UINT8 fieldType;
 123  DL_UINT16 len; /* length for fixed size / max-len for variables */
 124  DL_UINT8 varLen; /* number of variable length digits - e.g. 0-4 */
 125 };
 126 typedef struct DL_ISO8583_FIELD_DEF_S DL_ISO8583_FIELD_DEF;
 127 
 128 struct DL_ISO8583_HANDLER_S
 129 {
 130  DL_ISO8583_FIELD_DEF *fieldArr;
 131  DL_UINT8 fieldItems;
 132 };
 133 typedef struct DL_ISO8583_HANDLER_S DL_ISO8583_HANDLER;
 134 
 135 
 136 struct DL_ISO8583_MSG_FIELD_DEF_S
 137 {
 138  DL_UINT8 fieldNo;
 139  bool mandatory; /* Field is mandator*/
 140  com_verifone_TLVLite::ConstData tlvTag; /* */
 141 };
 142 typedef struct DL_ISO8583_MSG_FIELD_DEF_S DL_ISO8583_MSG_FIELD_DEF;
 143 
 144 struct DL_ISO8583_MSG_HANDLER_S
 145 {
 146  DL_ISO8583_HANDLER isoHandler;
 147  DL_ISO8583_MSG_FIELD_DEF *fieldArr;
 148  DL_UINT8 fieldItems;
 149 };
 150 typedef struct DL_ISO8583_MSG_HANDLER_S DL_ISO8583_MSG_HANDLER;
 151 
 152 struct DL_ISO8583_MSG_FIELD_S
 153 {
 154  DL_UINT16 len; /* used mainly for binary fields */
 155  DL_UINT8 *ptr; /* null terminated data bytes (even if binary) */
 156 };
 157 typedef struct DL_ISO8583_MSG_FIELD_S DL_ISO8583_MSG_FIELD;
 158 
 159 struct DL_ISO8583_MSG_S
 160 {
 161  /* static memory details */
 162  DL_UINT8 *sPtrNext; /* next static point - NULL if dynamic mode */
 163  DL_UINT8 *sPtrEnd; /* end of the static buffer (if static mode) */
 164 
 165  /* NB bitmap is not stored, it is implied if the field is set */
 166 
 167  /* fields */
 168  DL_ISO8583_MSG_FIELD field[1+kDL_ISO8583_MAX_FIELD_IDX];
 169 };
 170 typedef struct DL_ISO8583_MSG_S DL_ISO8583_MSG;
 171 
 172 /******************************************************************************/
 173 
 174 // attempts to allocate memory for a field within the ISO8583 message
 175 // NB used internally - not for client usage
 176 // returns: error code
 177 ISO_EXP_DECL DL_ERR _DL_ISO8583_MSG_AllocField ( DL_UINT16 iField,
 178  DL_UINT16 iSize,
 179  DL_ISO8583_MSG *ioMsg,
 180  DL_UINT8 **oPtr );
 181 
 182 /******************************************************************************/
 183 
 184 // sets the handler details in 'oData'
 185 // returns: none
 186 ISO_EXP_DECL void DL_ISO8583_COMMON_SetHandler ( DL_ISO8583_FIELD_DEF *iFieldDefArr,
 187  DL_UINT8 iFieldDefItems,
 188  DL_ISO8583_HANDLER *oData );
 189 
 190 /******************************************************************************/
 191 
 192 #ifdef __cplusplus
 193 } /* end of the 'extern "C"' block */
 194 #endif
 195 
 196 #endif /* __INC_DL_ISO8583_COMMON */
```

---
hidden: true
title: dl_iso8583.h
---

<a href="dl__iso8583_8h.md">Go to the documentation of this file.</a>

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
 25 /* dl_iso8583.c - An implementation of the ISO-8583 message protocol */
 26 /* */
 27 /******************************************************************************/
 28 
 29 #ifndef __INC_DL_ISO8583
 30 #define __INC_DL_ISO8583
 31 
 32 #include "dl_base.h"
 33 #include "dl_err.h"
 34 #include "dl_str.h"
 35 
 36 #include "ConstData.h"
 37 #include "SafeBuffer.hpp"
 38 
 39 #include "dl_iso8583_common.h"
 40 #include "dl_iso8583_fields.h"
 41 
 42 
 43 
 44 #ifndef _DOXYGEN_
 45  #ifdef _VRXEVO
 46  #ifdef ISO_SHARED_EXPORT
 47  #define ISO_EXP_DECL __declspec(dllexport) // used for VSL symbol export
 48  #elif ISO_STATIC_EXPORT
 49  #define ISO_EXP_DECL // used for static libraries
 50  #else
 51  #define ISO_EXP_DECL __declspec(dllimport) // used for VSA symbol import (also used for static linking)
 52  #endif
 53  #elif defined __GNUC__ && defined ISO_SHARED_EXPORT
 54  #define ISO_EXP_DECL __attribute__((visibility("default")))
 55  #else
 56  #define ISO_EXP_DECL // used for both, static libraries and program symbol import
 57  #endif
 58 #endif
 59 
 60 #ifdef __cplusplus
 61 extern "C" {
 62 #endif
 63 
 67 class ISO_EXP_DECL ISO8583_MSG
 68 {
 69 public:
 70  /******************************************************************************/
 71 
 76  ISO8583_MSG ( DL_ISO8583_MSG_HANDLER *iMsgHandler,
 77  DL_UINT8 *_iStaticBuf = NULL,
 78  DL_UINT16 _iStaticBufSize = 0);
 79 
 83  virtual ~ISO8583_MSG ( );
 84 
 85  /******************************************************************************/
 86 
 93  DL_ERR SetField_Str ( DL_UINT16 iField,
 94  const DL_SINT8 *iDataStr );
 95 
 103  DL_ERR SetField_Bin ( DL_UINT16 iField,
 104  const DL_UINT8 *_iData,
 105  DL_UINT16 _iDataLen );
 106 
 112  DL_ERR SetFields_TLV ( com_verifone_TLVLite::ConstData_t tlvFields );
 113 
 114  /******************************************************************************/
 115 
 121  int HaveField ( DL_UINT16 iField);
 122 
 123  /******************************************************************************/
 124 
 131  DL_ERR GetField_Str ( DL_UINT16 iField,
 132  DL_UINT8 **oPtr );
 133 
 141  DL_ERR GetField_Bin ( DL_UINT16 iField,
 142  DL_UINT8 **oPtr,
 143  DL_UINT16 *oByteLen );
 144 
 150  DL_ERR GetFields_TLV ( com_verifone_TLVLite::SafeBuffer & tlvFields );
 151 
 152  /******************************************************************************/
 153 
 162  DL_ERR Pack ( DL_UINT8 *ioByteArr,
 163  DL_UINT16 ioByteArrSize,
 164  DL_UINT16 *oNumBytes,
 165  DL_UINT16 *errFieldIdx=NULL );
 166 
 173  DL_ERR Unpack ( const DL_UINT8 *iByteArr,
 174  DL_UINT16 iByteArrSize);
 175 
 176  /******************************************************************************/
 177 #if defined(_VRXEVO) || defined(_VOS)
 178 
 182  void Dump ( );
 183 
 184 #else
 185 
 190  void Dump ( FILE *iOutFile,
 191  const char *_iEolStr);
 192 #endif
 193 
 194  /******************************************************************************/
 195 
 196 private:
 197  DL_ISO8583_MSG iMsg;
 198 
 199  DL_ISO8583_MSG_HANDLER *iMsgHandler;
 200 
 201 };
 202 
 203 #ifdef __cplusplus
 204 } /* end of the 'extern "C"' block */
 205 #endif
 206 
 207 #endif /* __INC_DL_ISO8583 */
```

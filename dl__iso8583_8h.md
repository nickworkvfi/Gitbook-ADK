---
title: iso8583/export/dl_iso8583.h

---

# iso8583/export/dl_iso8583.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[ISO8583_MSG](class_i_s_o8583___m_s_g.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ISO_EXP_DECL](dl__iso8583_8h.md#define-iso-exp-decl)**  |




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
/* dl_iso8583.c - An implementation of the ISO-8583 message protocol          */
/*                                                                            */
/******************************************************************************/

#ifndef __INC_DL_ISO8583
#define __INC_DL_ISO8583

#include "dl_base.h"
#include "dl_err.h"
#include "dl_str.h"

#include "ConstData.h"
#include "SafeBuffer.hpp"

#include "dl_iso8583_common.h"
#include "dl_iso8583_fields.h"



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

class ISO_EXP_DECL ISO8583_MSG
{
public:
    /******************************************************************************/

    ISO8583_MSG ( DL_ISO8583_MSG_HANDLER *iMsgHandler,
                  DL_UINT8       *_iStaticBuf = NULL,
                  DL_UINT16       _iStaticBufSize = 0);

    virtual ~ISO8583_MSG ( );

    /******************************************************************************/

    DL_ERR SetField_Str ( DL_UINT16       iField,
                          const DL_SINT8 *iDataStr );

    DL_ERR SetField_Bin ( DL_UINT16       iField,
                          const DL_UINT8 *_iData,
                          DL_UINT16       _iDataLen );

    DL_ERR SetFields_TLV ( com_verifone_TLVLite::ConstData_t tlvFields );
                          
    /******************************************************************************/

    int HaveField ( DL_UINT16             iField);

    /******************************************************************************/

    DL_ERR GetField_Str ( DL_UINT16              iField,
                          DL_UINT8             **oPtr );

    DL_ERR GetField_Bin ( DL_UINT16              iField,
                          DL_UINT8             **oPtr,
                          DL_UINT16             *oByteLen );

    DL_ERR GetFields_TLV ( com_verifone_TLVLite::SafeBuffer & tlvFields );
                          
    /******************************************************************************/

    DL_ERR Pack ( DL_UINT8                 *ioByteArr,
                  DL_UINT16                ioByteArrSize,
                  DL_UINT16                *oNumBytes,
                  DL_UINT16                *errFieldIdx=NULL );

    DL_ERR Unpack ( const DL_UINT8           *iByteArr,
                    DL_UINT16                 iByteArrSize);

    /******************************************************************************/
#if defined(_VRXEVO) || defined(_VOS)

    void Dump ( );

#else

    void Dump ( FILE                     *iOutFile,
                const char               *_iEolStr);
#endif

    /******************************************************************************/

private:
    DL_ISO8583_MSG iMsg;
    
    DL_ISO8583_MSG_HANDLER *iMsgHandler;

};

#ifdef __cplusplus
}  /* end of the 'extern "C"' block */
#endif

#endif /* __INC_DL_ISO8583 */
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

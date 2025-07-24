---
hidden: true
title: hexutil.h
---

<a href="emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef HEXUTIL_H
 2 #define HEXUTIL_H
 3 
 4 /*****************************************************************************
 5 * Thales e-Transactions GmbH
 6 ******************************************************************************
 7 * Internal ECR-Interface
 8 ******************************************************************************
 9 *
 10 * $Workfile: hexutil.h $ $Date: 19 Mar 2007 10:28:54 $
 11 * $Revision: 1.0 $ $Modtime: 15 Mar 2007 16:00:46 $
 12 * $Archive: U:/ArcTRM/Terminals/archives/ARCHIVES/Headerdateien/hexutil.h-arc $
 13 *
 14 *****************************************************************************/
 22 /*****************************************************************************
 23 * (c) Thales e-Transactions GmbH, Bad Hersfeld
 24 *****************************************************************************/
 25 /*HOC************************************************************************
 26 * REVISIONS HISTORY OF CHANGE:
 27 *----------------------------------------------------------------------------
 28  $Log: U:/ArcTRM/Terminals/archives/ARCHIVES/Headerdateien/hexutil.h-arc $
 29  * 
 30  * Rev 1.0 19 Mar 2007 10:28:54 Groennert
 31  * Initial revision.
 32 
 33 ****************************************************************************/
 34 
 39 #define TLVUTIL_4BYTE_TO_UINT32(bytes)(((unsigned) (bytes)[0] << 24) | ((unsigned) (bytes)[1] << 16) | ((unsigned) (bytes)[2] << 8) | (unsigned) (bytes)[3])
 40 
 41 #ifdef __cplusplus
 42 extern "C" {
 43 #endif
 44 
 45 #define TLV_UTIL_INTERFACE // NOTE: Do not set visibility("default") because export.map is used
 46 
 56 TLV_UTIL_INTERFACE int hextobin(unsigned char *dst, const unsigned char *src, int srclen) __attribute ((deprecated));
 57 
 66 TLV_UTIL_INTERFACE int TLVUTIL_hextobin(unsigned char *dst, const unsigned char *src, int srclen);
 67 
 75 TLV_UTIL_INTERFACE int TLVUTIL_hexstringtobin(unsigned char *dst, int dstLength, const unsigned char *src);
 76 
 85 TLV_UTIL_INTERFACE void bintohex(unsigned char *dst, const unsigned char *src, int srclen) __attribute ((deprecated));
 86 
 94 TLV_UTIL_INTERFACE void TLVUTIL_bintohexstring(unsigned char *dst, const unsigned char *src, int srclen);
 95 
 104 TLV_UTIL_INTERFACE void TLVUTIL_bintohex(unsigned char *dst, const unsigned char *src, int srclen);
 105 
 119 TLV_UTIL_INTERFACE int TLVUTIL_utf8(char* dst, unsigned dstLen, const unsigned char* src, unsigned srcLenMax, unsigned char codeTableIndex);
 120 
 121 #ifdef __cplusplus
 122 }
 123 #endif
 124 
 125 #ifndef TLV_UTIL_COMPILE
 126 # undef TLV_UTIL_INTERFACE
 127 #endif
 128 
 129 #endif
```

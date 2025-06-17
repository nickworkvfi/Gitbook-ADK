---
title: emv/TLV_Util/export/emv/hexutil.h

---

# emv/TLV_Util/export/emv/hexutil.h

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[hextobin](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#function-hextobin)**(unsigned char * dst, const unsigned char * src, int srclen) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[TLVUTIL_hextobin](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#function-tlvutil-hextobin)**(unsigned char * dst, const unsigned char * src, int srclen) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[TLVUTIL_hexstringtobin](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#function-tlvutil-hexstringtobin)**(unsigned char * dst, int dstLength, const unsigned char * src) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[bintohex](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#function-bintohex)**(unsigned char * dst, const unsigned char * src, int srclen) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[TLVUTIL_bintohexstring](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#function-tlvutil-bintohexstring)**(unsigned char * dst, const unsigned char * src, int srclen) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[TLVUTIL_bintohex](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#function-tlvutil-bintohex)**(unsigned char * dst, const unsigned char * src, int srclen) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[TLVUTIL_utf8](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#function-tlvutil-utf8)**(char * dst, unsigned dstLen, const unsigned char * src, unsigned srcLenMax, unsigned char codeTableIndex) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TLVUTIL_4BYTE_TO_UINT32](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#define-tlvutil-4byte-to-uint32)**(bytes)  |
|  | **[TLV_UTIL_INTERFACE](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#define-tlv-util-interface)**  |

## Detailed Description


**Author**: : M. Meixner 

**Date**: Created: 09.09.2005 

Conversion functions Hexdump <-> Binary


## Functions Documentation

### function hextobin

```cpp
TLV_UTIL_INTERFACE int hextobin(
    unsigned char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size srclen/2 
  * **src** source buffer 
  * **srclen** length of source data, must be even! 
  * **dst** destination buffer of size srclen/2 
  * **src** source buffer 
  * **srclen** length of source data, must be even! 


**Deprecated**: 

Use prefixed version TLVUTIL_hextobin or TLVUTIL_hexstringtobin instead 

**Return**: 

  * 1 if successful, 0 if the input contained invalid characters 
  * 1 if successful, 0 if the input contained invalid characters or parameter error 


**Author**: 

  * M. Meixner 
  * M. Meixner 


**Date**: 

  * 9.9.2005 
  * 9.9.2005 


**Note**: 

  * src and dest may be identical 
  * src and dest may be identical 


convert an ASCII-HEX buffer to binary 

convert an ASCII-HEX buffer to binary 


### function TLVUTIL_hextobin

```cpp
TLV_UTIL_INTERFACE int TLVUTIL_hextobin(
    unsigned char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size srclen/2 
  * **src** source buffer 
  * **srclen** length of source data, must be even! 


**Return**: 1 if successful, 0 if the input contained invalid characters 

**Author**: M. Meixner 

**Date**: 9.9.2005 

**Note**: src and dest may be identical 

convert an ASCII-HEX buffer to binary 


### function TLVUTIL_hexstringtobin

```cpp
TLV_UTIL_INTERFACE int TLVUTIL_hexstringtobin(
    unsigned char * dst,
    int dstLength,
    const unsigned char * src
)
```


**Parameters**: 

  * **dst** destination buffer 
  * **dstLength** desitination buffer length 
  * **src** source buffer with terminated string containing HEX ASCII (blanks between bytes ignored) 


**Return**: length of binary data up to dstLength 

**Note**: src and dest may be identical 

convert an ASCII-HEX buffer to binary 


### function bintohex

```cpp
TLV_UTIL_INTERFACE void bintohex(
    unsigned char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size 2*srclen+1 
  * **src** source buffer 
  * **srclen** length of source data 
  * **dst** destination buffer of size 2*srclen 
  * **src** source buffer 
  * **srclen** length of source data 


**Deprecated**: 

Use prefixed version TLVUTIL_bintohexstring instead 

**Author**: 

  * M. Meixner 
  * M. Meixner 


**Date**: 

  * 9.9.2005 
  * 9.9.2005 


**Note**: 

  * src and dest may be identical 
  * src and dest may be identical 


convert a binary buffer to ASCII-HEX representation (0-9,A-F) 

convert a binary buffer to ASCII-HEX representation (0-9,A-F) Please note: A string termination is not appended. 


### function TLVUTIL_bintohexstring

```cpp
TLV_UTIL_INTERFACE void TLVUTIL_bintohexstring(
    unsigned char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size 2*srclen+1 
  * **src** source buffer 
  * **srclen** length of source data 


**Author**: M. Meixner 

**Date**: 9.9.2005 

**Note**: src and dest may be identical 

convert a binary buffer to ASCII-HEX representation (0-9,A-F) 


### function TLVUTIL_bintohex

```cpp
TLV_UTIL_INTERFACE void TLVUTIL_bintohex(
    unsigned char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size 2*srclen 
  * **src** source buffer 
  * **srclen** length of source data 


**Author**: M. Meixner 

**Date**: 9.9.2005 

**Note**: src and dest may be identical 

convert a binary buffer to ASCII-HEX representation (0-9,A-F) Please note: A string termination is not appended. 


### function TLVUTIL_utf8

```cpp
TLV_UTIL_INTERFACE int TLVUTIL_utf8(
    char * dst,
    unsigned dstLen,
    const unsigned char * src,
    unsigned srcLenMax,
    unsigned char codeTableIndex
)
```


**Parameters**: 

  * **dst** destination buffer for the utf-8 encoded string 
  * **dstLen** size of destination buffer 
  * **src** encoded character sequence, usually Application Preferred Name 9F12 
  * **srcLenMax** sequence length, if a binary 0 is found in `src` before the conversion finishes 
  * **codeTableIndex** part number of ISO-8859, usually Issuer Code Table Index 9F11 [1..10] 


**Return**: length of converted label, -1 for buffer exceeded, other negative values indicate other errors (RFU) 

convert ISO-8859 character sequence to UTF-8

Note: The destination should be bigger than the character count. Very worst case: 3 times. If there is remaining space the result will be terminated by a 0 byte.




## Macros Documentation

### define TLVUTIL_4BYTE_TO_UINT32

```cpp
#define TLVUTIL_4BYTE_TO_UINT32(
    bytes
)
(((unsigned) (bytes)[0] << 24) | ((unsigned) (bytes)[1] << 16) | ((unsigned) (bytes)[2] << 8) | (unsigned) (bytes)[3])
```


**Parameters**: 

  * **bytes** buffer of 4 bytes length in network byte order (const unsigned char[4]) 


**Return**: converted integer of type "unsigned" for assigning to "unsigned long" on 32 bit and 64 bit architecture 

convert a byte buffer to unsigned long 


### define TLV_UTIL_INTERFACE

```cpp
#define TLV_UTIL_INTERFACE 
```


## Source code

```cpp
#ifndef HEXUTIL_H
#define HEXUTIL_H

/*****************************************************************************
* Thales e-Transactions GmbH
******************************************************************************
* Internal ECR-Interface
******************************************************************************
*
* $Workfile:   hexutil.h  $                      $Date:   19 Mar 2007 10:28:54  $
* $Revision:   1.0  $                      $Modtime:   15 Mar 2007 16:00:46  $
* $Archive:   U:/ArcTRM/Terminals/archives/ARCHIVES/Headerdateien/hexutil.h-arc  $
*
*****************************************************************************/
/*****************************************************************************
*  (c) Thales e-Transactions GmbH, Bad Hersfeld
*****************************************************************************/
/*HOC************************************************************************
* REVISIONS HISTORY OF CHANGE:
*----------------------------------------------------------------------------
 $Log:   U:/ArcTRM/Terminals/archives/ARCHIVES/Headerdateien/hexutil.h-arc  $
 * 
 *    Rev 1.0   19 Mar 2007 10:28:54   Groennert
 * Initial revision.

****************************************************************************/

#define TLVUTIL_4BYTE_TO_UINT32(bytes)(((unsigned) (bytes)[0] << 24) | ((unsigned) (bytes)[1] << 16) | ((unsigned) (bytes)[2] << 8) | (unsigned) (bytes)[3])

#ifdef __cplusplus
extern "C" {
#endif

#define TLV_UTIL_INTERFACE // NOTE: Do not set visibility("default") because export.map is used

TLV_UTIL_INTERFACE int hextobin(unsigned char *dst, const unsigned char *src, int srclen) __attribute ((deprecated));

TLV_UTIL_INTERFACE int TLVUTIL_hextobin(unsigned char *dst, const unsigned char *src, int srclen);

TLV_UTIL_INTERFACE int TLVUTIL_hexstringtobin(unsigned char *dst, int dstLength, const unsigned char *src);

TLV_UTIL_INTERFACE void bintohex(unsigned char *dst, const unsigned char *src, int srclen) __attribute ((deprecated));

TLV_UTIL_INTERFACE void TLVUTIL_bintohexstring(unsigned char *dst, const unsigned char *src, int srclen);

TLV_UTIL_INTERFACE void TLVUTIL_bintohex(unsigned char *dst, const unsigned char *src, int srclen);

TLV_UTIL_INTERFACE int TLVUTIL_utf8(char* dst, unsigned dstLen, const unsigned char* src, unsigned srcLenMax, unsigned char codeTableIndex);

#ifdef __cplusplus
}
#endif

#ifndef TLV_UTIL_COMPILE
#   undef TLV_UTIL_INTERFACE
#endif

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

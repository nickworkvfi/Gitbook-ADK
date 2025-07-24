---
hidden: true
title: ISO8583_MSG Class Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="dl__iso8583_8h_source.md">dl_iso8583.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [ISO8583_MSG](#ab6770578ee33a483298f19fdf22e8bf4) (<a href="dl__iso8583__common_8h.md#a54a752ff3ab9e14ceb4ef464e34ab00d">DL_ISO8583_MSG_HANDLER</a> \*iMsgHandler, <a href="dl__base_8h.md#a9d9aaccaaea86a21d606052de3f715b9">DL_UINT8</a> \*\_iStaticBuf=NULL, <a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> \_iStaticBufSize=0) |
| virtual  | [\~ISO8583_MSG](#a2663a19350cc2325f017166c7ddc0b18) () |
| <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [SetField_Str](#a486e10ba11c9b6c42726e3a3c5a829a6) (<a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> iField, const <a href="dl__base_8h.md#a7aa4be16706eebc38e7b00abff383f3f">DL_SINT8</a> \*iDataStr) |
| <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [SetField_Bin](#a51cfb0b27cba9944239d729a01b6e2d5) (<a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> iField, const <a href="dl__base_8h.md#a9d9aaccaaea86a21d606052de3f715b9">DL_UINT8</a> \*\_iData, <a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> \_iDataLen) |
| <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [SetFields_TLV](#a7c864d44dd051ed5a19b706717b33dda) (com_verifone_TLVLite::ConstData_t tlvFields) |
| int  | [HaveField](#a92b548693c28ebb563a01becac2983ad) (<a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> iField) |
| <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [GetField_Str](#a672b03a086fa4ba288d5816f0f41ed80) (<a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> iField, <a href="dl__base_8h.md#a9d9aaccaaea86a21d606052de3f715b9">DL_UINT8</a> \*\*oPtr) |
| <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [GetField_Bin](#a63acb86409c14c73f68ba1e9b9350bdc) (<a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> iField, <a href="dl__base_8h.md#a9d9aaccaaea86a21d606052de3f715b9">DL_UINT8</a> \*\*oPtr, <a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> \*oByteLen) |
| <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [GetFields_TLV](#a949b56cfe233b75b8129a5a4e68a09d5) (<a href="classcom__verifone___t_l_v_lite_1_1_safe_buffer.md">com_verifone_TLVLite::SafeBuffer</a> &tlvFields) |
| <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [Pack](#aa2c8b619a7f9f6174d84c1ee03badd9f) (<a href="dl__base_8h.md#a9d9aaccaaea86a21d606052de3f715b9">DL_UINT8</a> \*ioByteArr, <a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> ioByteArrSize, <a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> \*oNumBytes, <a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> \*errFieldIdx=NULL) |
| <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [Unpack](#a23deb320292cb615b881a33d3da3864f) (const <a href="dl__base_8h.md#a9d9aaccaaea86a21d606052de3f715b9">DL_UINT8</a> \*iByteArr, <a href="dl__base_8h.md#ad253e3225fa9ea736548d20a90dbf237">DL_UINT16</a> iByteArrSize) |
| void  | [Dump](#a5f0c1db5272b67e06699e8aded732582) (FILE \*iOutFile, const char \*\_iEolStr) |

## DetailedDescription {#detailed-description}

This class allows building and parsing ISO8583 messages

## Constructor& Destructor Documentation

## ISO8583_MSG() <a href="#ab6770578ee33a483298f19fdf22e8bf4" id="ab6770578ee33a483298f19fdf22e8bf4"></a>

<p><a href="class_i_s_o8583___m_s_g.md">ISO8583_MSG</a></p>

constructor

**Parameters**

\[in\] **iMsgHandler** pointer to message handler instance

## \~ISO8583_MSG() <a href="#a2663a19350cc2325f017166c7ddc0b18" id="a2663a19350cc2325f017166c7ddc0b18"></a>

<p>virtual \~<a href="class_i_s_o8583___m_s_g.md">ISO8583_MSG</a></p>

virtual

destructor

## MemberFunction Documentation {#member-function-documentation}

## Dump() <a href="#a5f0c1db5272b67e06699e8aded732582" id="a5f0c1db5272b67e06699e8aded732582"></a>

<p>void Dump</p>

outputs the contents of the ISO8583 message to the log

**Parameters**

\[in\] **iOutFile** output stream \[in\] **\_iEolStr** EOL terminator string, defaults to \'\' if NULL

## GetField_Bin() <a href="#a63acb86409c14c73f68ba1e9b9350bdc" id="a63acb86409c14c73f68ba1e9b9350bdc"></a>

<p><a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> GetField_Bin</p>

get data from message

**Parameters**

\[in\] **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX \[out\] **oPtr** static pointer to field data \[out\] **oByteLen** length of field data

### Returns

error code

## GetField_Str() <a href="#a672b03a086fa4ba288d5816f0f41ed80" id="a672b03a086fa4ba288d5816f0f41ed80"></a>

<p><a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> GetField_Str</p>

get data from message

**Parameters**

\[in\] **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX \[out\] **oPtr** static pointer to field data

### Returns

error code

## GetFields_TLV() <a href="#a949b56cfe233b75b8129a5a4e68a09d5" id="a949b56cfe233b75b8129a5a4e68a09d5"></a>

<p><a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> GetFields_TLV</p>

get data in TLV format

**Parameters**

\[out\] **tlvFields** buffer to store TLV data

### Returns

error code

## HaveField() <a href="#a92b548693c28ebb563a01becac2983ad" id="a92b548693c28ebb563a01becac2983ad"></a>

<p>int HaveField</p>

check if field is set

**Parameters**

\[in\] **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX

### Returns

1 if the field is set, otherwise 0

## Pack() <a href="#aa2c8b619a7f9f6174d84c1ee03badd9f" id="aa2c8b619a7f9f6174d84c1ee03badd9f"></a>

<p><a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> Pack</p>

pack ISO message

**Parameters**

\[out\] **ioByteArr** buffer to store message data \[in\] **ioByteArrSize** size of buffer ioByteArr \[out\] **oNumBytes** length of stored message \[out\] **errFieldIdx** in case of error: contains the field index that caused the error

### Returns

error code

## SetField_Bin() <a href="#a51cfb0b27cba9944239d729a01b6e2d5" id="a51cfb0b27cba9944239d729a01b6e2d5"></a>

<p><a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> SetField_Bin</p>

allocates and sets the specified field

**Parameters**

\[in\] **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX \[in\] **\_iData** buffer with data to be set, may be NULL \[in\] **\_iDataLen** length of \_iData

### Returns

error code

## SetField_Str() <a href="#a486e10ba11c9b6c42726e3a3c5a829a6" id="a486e10ba11c9b6c42726e3a3c5a829a6"></a>

<p><a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> SetField_Str</p>

allocates and sets the specified field

**Parameters**

\[in\] **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX \[in\] **iDataStr** string containing data to be set

### Returns

error code

## SetFields_TLV() <a href="#a7c864d44dd051ed5a19b706717b33dda" id="a7c864d44dd051ed5a19b706717b33dda"></a>

<p><a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> SetFields_TLV</p>

allocates and sets the specified fields

**Parameters**

\[in\] **tlvFields** buffer with TLV data

### Returns

error code

## Unpack() <a href="#a23deb320292cb615b881a33d3da3864f" id="a23deb320292cb615b881a33d3da3864f"></a>

<p><a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> Unpack</p>

unpack ISO message

**Parameters**

\[in\] **iByteArr** buffer with message data \[in\] **iByteArrSize** length of message data

### Returns

error code

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- iso8583/export/<a href="dl__iso8583_8h_source.md">dl_iso8583.h</a>

---
title: ISO8583_MSG

---

# ISO8583_MSG



 [More...](#detailed-description)


`#include <dl_iso8583.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[ISO8583_MSG](class_i_s_o8583___m_s_g.md#function-iso8583-msg)**([DL_ISO8583_MSG_HANDLER](dl__iso8583__common_8h.md#typedef-dl-iso8583-msg-handler) * iMsgHandler, [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) * _iStaticBuf =NULL, [DL_UINT16](dl__base_8h.md#typedef-dl-uint16) _iStaticBufSize =0) |
| virtual | **[~ISO8583_MSG](class_i_s_o8583___m_s_g.md#function-~iso8583-msg)**() |
| [DL_ERR](dl__err_8h.md#typedef-dl-err) | **[SetField_Str](class_i_s_o8583___m_s_g.md#function-setfield-str)**([DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iField, const [DL_SINT8](dl__base_8h.md#typedef-dl-sint8) * iDataStr) |
| [DL_ERR](dl__err_8h.md#typedef-dl-err) | **[SetField_Bin](class_i_s_o8583___m_s_g.md#function-setfield-bin)**([DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iField, const [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) * _iData, [DL_UINT16](dl__base_8h.md#typedef-dl-uint16) _iDataLen) |
| [DL_ERR](dl__err_8h.md#typedef-dl-err) | **[SetFields_TLV](class_i_s_o8583___m_s_g.md#function-setfields-tlv)**(com_verifone_TLVLite::ConstData_t tlvFields) |
| int | **[HaveField](class_i_s_o8583___m_s_g.md#function-havefield)**([DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iField) |
| [DL_ERR](dl__err_8h.md#typedef-dl-err) | **[GetField_Str](class_i_s_o8583___m_s_g.md#function-getfield-str)**([DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iField, [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) ** oPtr) |
| [DL_ERR](dl__err_8h.md#typedef-dl-err) | **[GetField_Bin](class_i_s_o8583___m_s_g.md#function-getfield-bin)**([DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iField, [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) ** oPtr, [DL_UINT16](dl__base_8h.md#typedef-dl-uint16) * oByteLen) |
| [DL_ERR](dl__err_8h.md#typedef-dl-err) | **[GetFields_TLV](class_i_s_o8583___m_s_g.md#function-getfields-tlv)**([com_verifone_TLVLite::SafeBuffer](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md) & tlvFields) |
| [DL_ERR](dl__err_8h.md#typedef-dl-err) | **[Pack](class_i_s_o8583___m_s_g.md#function-pack)**([DL_UINT8](dl__base_8h.md#typedef-dl-uint8) * ioByteArr, [DL_UINT16](dl__base_8h.md#typedef-dl-uint16) ioByteArrSize, [DL_UINT16](dl__base_8h.md#typedef-dl-uint16) * oNumBytes, [DL_UINT16](dl__base_8h.md#typedef-dl-uint16) * errFieldIdx =NULL) |
| [DL_ERR](dl__err_8h.md#typedef-dl-err) | **[Unpack](class_i_s_o8583___m_s_g.md#function-unpack)**(const [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) * iByteArr, [DL_UINT16](dl__base_8h.md#typedef-dl-uint16) iByteArrSize) |
| void | **[Dump](class_i_s_o8583___m_s_g.md#function-dump)**(FILE * iOutFile, const char * _iEolStr) |

## Detailed Description

```cpp
class ISO8583_MSG;
```


This class allows building and parsing ISO8583 messages 

## Public Functions Documentation

### function ISO8583_MSG

```cpp
ISO8583_MSG(
    DL_ISO8583_MSG_HANDLER * iMsgHandler,
    DL_UINT8 * _iStaticBuf =NULL,
    DL_UINT16 _iStaticBufSize =0
)
```


**Parameters**: 

  * **iMsgHandler** pointer to message handler instance 


constructor 


### function ~ISO8583_MSG

```cpp
virtual ~ISO8583_MSG()
```


destructor 


### function SetField_Str

```cpp
DL_ERR SetField_Str(
    DL_UINT16 iField,
    const DL_SINT8 * iDataStr
)
```


**Parameters**: 

  * **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX 
  * **iDataStr** string containing data to be set 


**Return**: error code 

allocates and sets the specified field 


### function SetField_Bin

```cpp
DL_ERR SetField_Bin(
    DL_UINT16 iField,
    const DL_UINT8 * _iData,
    DL_UINT16 _iDataLen
)
```


**Parameters**: 

  * **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX 
  * **_iData** buffer with data to be set, may be NULL 
  * **_iDataLen** length of _iData 


**Return**: error code 

allocates and sets the specified field 


### function SetFields_TLV

```cpp
DL_ERR SetFields_TLV(
    com_verifone_TLVLite::ConstData_t tlvFields
)
```


**Parameters**: 

  * **tlvFields** buffer with TLV data 


**Return**: error code 

allocates and sets the specified fields 


### function HaveField

```cpp
int HaveField(
    DL_UINT16 iField
)
```


**Parameters**: 

  * **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX 


**Return**: 1 if the field is set, otherwise 0 

check if field is set 


### function GetField_Str

```cpp
DL_ERR GetField_Str(
    DL_UINT16 iField,
    DL_UINT8 ** oPtr
)
```


**Parameters**: 

  * **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX 
  * **oPtr** static pointer to field data 


**Return**: error code 

get data from message 


### function GetField_Bin

```cpp
DL_ERR GetField_Bin(
    DL_UINT16 iField,
    DL_UINT8 ** oPtr,
    DL_UINT16 * oByteLen
)
```


**Parameters**: 

  * **iField** field index, range is 0..kDL_ISO8583_MAX_FIELD_IDX 
  * **oPtr** static pointer to field data 
  * **oByteLen** length of field data 


**Return**: error code 

get data from message 


### function GetFields_TLV

```cpp
DL_ERR GetFields_TLV(
    com_verifone_TLVLite::SafeBuffer & tlvFields
)
```


**Parameters**: 

  * **tlvFields** buffer to store TLV data 


**Return**: error code 

get data in TLV format 


### function Pack

```cpp
DL_ERR Pack(
    DL_UINT8 * ioByteArr,
    DL_UINT16 ioByteArrSize,
    DL_UINT16 * oNumBytes,
    DL_UINT16 * errFieldIdx =NULL
)
```


**Parameters**: 

  * **ioByteArr** buffer to store message data 
  * **ioByteArrSize** size of buffer ioByteArr 
  * **oNumBytes** length of stored message 
  * **errFieldIdx** in case of error: contains the field index that caused the error 


**Return**: error code 

pack ISO message 


### function Unpack

```cpp
DL_ERR Unpack(
    const DL_UINT8 * iByteArr,
    DL_UINT16 iByteArrSize
)
```


**Parameters**: 

  * **iByteArr** buffer with message data 
  * **iByteArrSize** length of message data 


**Return**: error code 

unpack ISO message 


### function Dump

```cpp
void Dump(
    FILE * iOutFile,
    const char * _iEolStr
)
```


**Parameters**: 

  * **iOutFile** output stream 
  * **_iEolStr** EOL terminator string, defaults to '

' if NULL 


outputs the contents of the ISO8583 message to the log 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
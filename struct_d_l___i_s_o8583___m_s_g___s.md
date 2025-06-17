---
title: DL_ISO8583_MSG_S

---

# DL_ISO8583_MSG_S






`#include <dl_iso8583_common.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) * | **[sPtrNext](struct_d_l___i_s_o8583___m_s_g___s.md#variable-sptrnext)**  |
| [DL_UINT8](dl__base_8h.md#typedef-dl-uint8) * | **[sPtrEnd](struct_d_l___i_s_o8583___m_s_g___s.md#variable-sptrend)**  |
| [DL_ISO8583_MSG_FIELD](dl__iso8583__common_8h.md#typedef-dl-iso8583-msg-field)[1+kDL_ISO8583_MAX_FIELD_IDX] | **[field](struct_d_l___i_s_o8583___m_s_g___s.md#variable-field)**  |

## Public Attributes Documentation

### variable sPtrNext

```cpp
DL_UINT8 * sPtrNext;
```


### variable sPtrEnd

```cpp
DL_UINT8 * sPtrEnd;
```


### variable field

```cpp
DL_ISO8583_MSG_FIELD[1+kDL_ISO8583_MAX_FIELD_IDX] field;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
---
title: MSR_Decoded_Track_2

---

# MSR_Decoded_Track_2



 [More...](#detailed-description)


`#include <msr_common.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[valid](struct_m_s_r___decoded___track__2.md#variable-valid)**  |
| char[20] | **[pan](struct_m_s_r___decoded___track__2.md#variable-pan)**  |
| char[5] | **[exp_date](struct_m_s_r___decoded___track__2.md#variable-exp-date)**  |
| char[4] | **[service_code](struct_m_s_r___decoded___track__2.md#variable-service-code)**  |
| char[35] | **[disc_data](struct_m_s_r___decoded___track__2.md#variable-disc-data)**  |

## Detailed Description

```cpp
struct MSR_Decoded_Track_2;
```


Decoded data of track 2. 

## Public Attributes Documentation

### variable valid

```cpp
unsigned char valid;
```


1: data valid, 0: data invalid. 


### variable pan

```cpp
char[20] pan;
```


PAN, ASCII null-terminated. 


### variable exp_date

```cpp
char[5] exp_date;
```


Expiry date, YYMM, ASCII null terminated. 


### variable service_code

```cpp
char[4] service_code;
```


Service code, ASCII null terminated. 


### variable disc_data

```cpp
char[35] disc_data;
```


Discretionary data, ASCII null terminated. 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
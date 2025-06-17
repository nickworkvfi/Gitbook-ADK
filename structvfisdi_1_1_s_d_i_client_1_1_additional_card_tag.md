---
title: vfisdi::SDIClient::AdditionalCardTag

---

# vfisdi::SDIClient::AdditionalCardTag

**Module:** **[EMV contact interface](group__sdiemvct.md)**



 [More...](#detailed-description)


`#include <sdi.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned | **[tag](structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag.md#variable-tag)**  |
| [EMVType](namespacevfisdi.md#enum-emvtype) | **[type](structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag.md#variable-type)**  |
| unsigned char | **[minLen](structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag.md#variable-minlen)**  |
| unsigned char | **[maxLen](structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag.md#variable-maxlen)**  |

## Detailed Description

```cpp
struct vfisdi::SDIClient::AdditionalCardTag;
```


additional card tag entry for additional tag store configuration 

## Public Attributes Documentation

### variable tag

```cpp
unsigned tag;
```


tag number 


### variable type

```cpp
EMVType type;
```


type of data 


### variable minLen

```cpp
unsigned char minLen;
```


minimum data length 


### variable maxLen

```cpp
unsigned char maxLen;
```


maximun data length 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
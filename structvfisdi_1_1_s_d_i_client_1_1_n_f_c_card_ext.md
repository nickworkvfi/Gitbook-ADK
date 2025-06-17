---
title: vfisdi::SDIClient::NFCCardExt

---

# vfisdi::SDIClient::NFCCardExt

**Module:** **[SDI client NFC interface](group__sdinfc.md)**



 [More...](#detailed-description)


`#include <sdi.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[type](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md#variable-type)**  |
| unsigned char | **[SAK](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md#variable-sak)**  |
| unsigned short | **[ATQ](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md#variable-atq)**  |
| unsigned | **[typeFull](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md#variable-typefull)**  |
| [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) | **[info](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md#variable-info)**  |
| [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) | **[RFU](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md#variable-rfu)**  |

## Detailed Description

```cpp
struct vfisdi::SDIClient::NFCCardExt;
```


extended NFC card type 

## Public Attributes Documentation

### variable type

```cpp
unsigned char type;
```


card type (DFDB21) 


### variable SAK

```cpp
unsigned char SAK;
```


SAK of the card (DFDB2D) 


### variable ATQ

```cpp
unsigned short ATQ;
```


### variable typeFull

```cpp
unsigned typeFull;
```


ATQ of the card (DFDB2E) full card type (DFDB27) 


### variable info

```cpp
bytevector info;
```


card info (DFDB22) 


### variable RFU

```cpp
bytevector RFU;
```


RFU of the card (DFDB2F) 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
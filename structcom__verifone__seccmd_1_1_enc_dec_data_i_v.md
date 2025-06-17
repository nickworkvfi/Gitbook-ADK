---
title: com_verifone_seccmd::EncDecDataIV

---

# com_verifone_seccmd::EncDecDataIV



 [More...](#detailed-description)


`#include <libseccmd-comp.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint8_t * | **[pInData](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md#variable-pindata)**  |
| u_long | **[uiInLen](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md#variable-uiinlen)**  |
| uint8_t * | **[pOutData](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md#variable-poutdata)**  |
| u_long | **[uiOutLen](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md#variable-uioutlen)**  |
| uint8_t * | **[IV](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md#variable-iv)**  |
| u_long | **[uiIVLen](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md#variable-uiivlen)**  |

## Detailed Description

```cpp
struct com_verifone_seccmd::EncDecDataIV;
```


Data container for encryption/decryption functions 

## Public Attributes Documentation

### variable pInData

```cpp
uint8_t * pInData;
```


input buffer 


### variable uiInLen

```cpp
u_long uiInLen;
```


length of input buffer 


### variable pOutData

```cpp
uint8_t * pOutData;
```


output buffer 


### variable uiOutLen

```cpp
u_long uiOutLen;
```


length of output buffer 


### variable IV

```cpp
uint8_t * IV;
```


IV, optional, NULL value as default {0} 


### variable uiIVLen

```cpp
u_long uiIVLen;
```


length of IV buffer 


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
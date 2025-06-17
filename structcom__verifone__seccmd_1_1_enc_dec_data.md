---
title: com_verifone_seccmd::EncDecData

---

# com_verifone_seccmd::EncDecData



 [More...](#detailed-description)


`#include <libseccmd-comp.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint8_t * | **[pInData](structcom__verifone__seccmd_1_1_enc_dec_data.md#variable-pindata)**  |
| u_long | **[uiInLen](structcom__verifone__seccmd_1_1_enc_dec_data.md#variable-uiinlen)**  |
| uint8_t * | **[pOutData](structcom__verifone__seccmd_1_1_enc_dec_data.md#variable-poutdata)**  |
| u_long | **[uiOutLen](structcom__verifone__seccmd_1_1_enc_dec_data.md#variable-uioutlen)**  |
| uint8_t * | **[stan](structcom__verifone__seccmd_1_1_enc_dec_data.md#variable-stan)**  |
| uint8_t * | **[tid](structcom__verifone__seccmd_1_1_enc_dec_data.md#variable-tid)**  |

## Detailed Description

```cpp
struct com_verifone_seccmd::EncDecData;
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


### variable stan

```cpp
uint8_t * stan;
```


up to 6 bytes, NULL terminated ASCII data, optional, NULL value as default 


### variable tid

```cpp
uint8_t * tid;
```


up to 8 bytes, NULL terminated ASCII data, optional, NULL value as default 


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
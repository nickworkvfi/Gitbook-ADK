---
title: com_verifone_seccmd::PINBlockParams

---

# com_verifone_seccmd::PINBlockParams



 [More...](#detailed-description)


`#include <libseccmd-comp.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| u_char * | **[pPAN](structcom__verifone__seccmd_1_1_p_i_n_block_params.md#variable-ppan)**  |
| u_char * | **[pSTAN](structcom__verifone__seccmd_1_1_p_i_n_block_params.md#variable-pstan)**  |
| u_char | **[PinBlockFormat](structcom__verifone__seccmd_1_1_p_i_n_block_params.md#variable-pinblockformat)**  |
| u_char[TRANS_AMOUNT_SIZE] | **[TransAmount](structcom__verifone__seccmd_1_1_p_i_n_block_params.md#variable-transamount)**  |

## Detailed Description

```cpp
struct com_verifone_seccmd::PINBlockParams;
```


Parameter container for PIN block using in PIN entry/retrieving functions 

## Public Attributes Documentation

### variable pPAN

```cpp
u_char * pPAN;
```


pointer to NULL terminated string containing PAN (19 digits max) 


### variable pSTAN

```cpp
u_char * pSTAN;
```


pointer to NULL terminated string containing STAN (6 digits max) 


### variable PinBlockFormat

```cpp
u_char PinBlockFormat;
```


### variable TransAmount

```cpp
u_char[TRANS_AMOUNT_SIZE] TransAmount;
```


Used only for Sec_RetrieveEncryptedPIN - 6 bytes BCD transaction amount 


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
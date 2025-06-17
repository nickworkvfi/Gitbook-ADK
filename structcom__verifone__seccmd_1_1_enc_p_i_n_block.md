---
title: com_verifone_seccmd::EncPINBlock

---

# com_verifone_seccmd::EncPINBlock



 [More...](#detailed-description)


`#include <libseccmd-comp.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint8_t * | **[pPINBlock](structcom__verifone__seccmd_1_1_enc_p_i_n_block.md#variable-ppinblock)**  |
| u_char | **[ucPINBlockLen](structcom__verifone__seccmd_1_1_enc_p_i_n_block.md#variable-ucpinblocklen)**  |

## Detailed Description

```cpp
struct com_verifone_seccmd::EncPINBlock;
```


Online PIN Cipher Block container 

## Public Attributes Documentation

### variable pPINBlock

```cpp
uint8_t * pPINBlock;
```


pointer to data buffer 


### variable ucPINBlockLen

```cpp
u_char ucPINBlockLen;
```


[in] maximal buffer size, [out] length of data stored in pPINBlock buffer 


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
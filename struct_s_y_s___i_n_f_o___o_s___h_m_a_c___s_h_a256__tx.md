---
title: SYS_INFO_OS_HMAC_SHA256_tx
summary: Input data for hashing. 

---

# SYS_INFO_OS_HMAC_SHA256_tx



Input data for hashing. 


`#include <libsecins.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[HMAC_MAX_HMAC] | **[key](struct_s_y_s___i_n_f_o___o_s___h_m_a_c___s_h_a256__tx.md#variable-key)**  |
| unsigned int | **[keysize](struct_s_y_s___i_n_f_o___o_s___h_m_a_c___s_h_a256__tx.md#variable-keysize)**  |
| int | **[mode](struct_s_y_s___i_n_f_o___o_s___h_m_a_c___s_h_a256__tx.md#variable-mode)**  |

## Public Attributes Documentation

### variable key

```cpp
unsigned char[HMAC_MAX_HMAC] key;
```


Key buffer 


### variable keysize

```cpp
unsigned int keysize;
```


Key buffer size 


### variable mode

```cpp
int mode;
```


Ignored, exists for app compatibility with Verix or future option 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
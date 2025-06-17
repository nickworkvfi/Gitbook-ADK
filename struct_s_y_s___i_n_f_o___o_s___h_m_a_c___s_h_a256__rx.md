---
title: SYS_INFO_OS_HMAC_SHA256_rx
summary: Data received from hashing. 

---

# SYS_INFO_OS_HMAC_SHA256_rx



Data received from hashing. 


`#include <libsecins.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[HMAC_MAX_HMAC] | **[hmac](struct_s_y_s___i_n_f_o___o_s___h_m_a_c___s_h_a256__rx.md#variable-hmac)**  |
| unsigned int | **[hmacsize](struct_s_y_s___i_n_f_o___o_s___h_m_a_c___s_h_a256__rx.md#variable-hmacsize)**  |

## Public Attributes Documentation

### variable hmac

```cpp
unsigned char[HMAC_MAX_HMAC] hmac;
```


Hash buffer result 


### variable hmacsize

```cpp
unsigned int hmacsize;
```


Hash buffer size 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
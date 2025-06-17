---
title: sdi::MD5_CTX

---

# sdi::MD5_CTX



 [More...](#detailed-description)


`#include <md5.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint32_t[4] | **[state](structsdi_1_1_m_d5___c_t_x.md#variable-state)**  |
| uint32_t[2] | **[count](structsdi_1_1_m_d5___c_t_x.md#variable-count)**  |
| unsigned char[64] | **[buffer](structsdi_1_1_m_d5___c_t_x.md#variable-buffer)**  |

## Detailed Description

```cpp
struct sdi::MD5_CTX;
```


MD5 context. 

## Public Attributes Documentation

### variable state

```cpp
uint32_t[4] state;
```


state (ABCD) 


### variable count

```cpp
uint32_t[2] count;
```


number of bits, modulo 2^64 (lsb first) 


### variable buffer

```cpp
unsigned char[64] buffer;
```


input buffer 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
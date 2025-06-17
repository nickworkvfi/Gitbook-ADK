---
title: KS_IOBuffer

---

# KS_IOBuffer



 [More...](#detailed-description)


`#include <engine_keyservice.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned | **[maxsize](struct_k_s___i_o_buffer.md#variable-maxsize)**  |
| unsigned | **[size](struct_k_s___i_o_buffer.md#variable-size)**  |
| unsigned char[0] | **[buffer](struct_k_s___i_o_buffer.md#variable-buffer)**  |

## Detailed Description

```cpp
struct KS_IOBuffer;
```


I/O buffer used for the keyservice to pass/read data to/from the keyservice engine 

## Public Attributes Documentation

### variable maxsize

```cpp
unsigned maxsize;
```


allocated size for the data buffer 


### variable size

```cpp
unsigned size;
```


size of stored data in the buffer 


### variable buffer

```cpp
unsigned char[0] buffer;
```


pointer to data buffer 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
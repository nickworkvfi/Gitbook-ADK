---
title: MSR_Track_2

---

# MSR_Track_2



 [More...](#detailed-description)


`#include <msr_common.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[status](struct_m_s_r___track__2.md#variable-status)**  |
| char[41] | **[data](struct_m_s_r___track__2.md#variable-data)**  |

## Detailed Description

```cpp
struct MSR_Track_2;
```


Track data of track 2. 

## Public Attributes Documentation

### variable status

```cpp
unsigned char status;
```


[Status code](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md). 


### variable data

```cpp
char[41] data;
```


Track data including start sentinel, end sentinel and LRC, ASCII null-terminated. 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
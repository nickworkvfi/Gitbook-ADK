---
title: MSR_TrackData3

---

# MSR_TrackData3



 [More...](#detailed-description)


`#include <msr_common.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[add_info](struct_m_s_r___track_data3.md#variable-add-info)**  |
| [MSR_Track_1](struct_m_s_r___track__1.md) | **[t1](struct_m_s_r___track_data3.md#variable-t1)**  |
| [MSR_Track_2](struct_m_s_r___track__2.md) | **[t2](struct_m_s_r___track_data3.md#variable-t2)**  |
| [MSR_Track_3](struct_m_s_r___track__3.md) | **[t3](struct_m_s_r___track_data3.md#variable-t3)**  |

## Detailed Description

```cpp
struct MSR_TrackData3;
```


Track data including additional information. 

## Public Attributes Documentation

### variable add_info

```cpp
unsigned char[8] add_info;
```


additional information, add_info[0]: [Card Type Code](group___m_s_r___c_a_r_d___c_o_d_e_s.md), add_info[1]: [Track Type Code](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md), add_info[2..7]: RFU. 


### variable t1

```cpp
MSR_Track_1 t1;
```


Track data of track 1. 


### variable t2

```cpp
MSR_Track_2 t2;
```


Track data of track 2. 


### variable t3

```cpp
MSR_Track_3 t3;
```


Track data of track 3. 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
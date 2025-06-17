---
title: MSR_TrackData4

---

# MSR_TrackData4



 [More...](#detailed-description)


`#include <msr_common.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[add_info](struct_m_s_r___track_data4.md#variable-add-info)**  |
| [MSR_Track_1](struct_m_s_r___track__1.md) | **[t1](struct_m_s_r___track_data4.md#variable-t1)**  |
| [MSR_Track_2](struct_m_s_r___track__2.md) | **[t2](struct_m_s_r___track_data4.md#variable-t2)**  |
| [MSR_Track_3](struct_m_s_r___track__3.md) | **[t3](struct_m_s_r___track_data4.md#variable-t3)**  |
| unsigned char[8] | **[add_info2](struct_m_s_r___track_data4.md#variable-add-info2)**  |
| [MSR_Track_1](struct_m_s_r___track__1.md) | **[t21](struct_m_s_r___track_data4.md#variable-t21)**  |
| [MSR_Track_2](struct_m_s_r___track__2.md) | **[t22](struct_m_s_r___track_data4.md#variable-t22)**  |
| [MSR_Track_3](struct_m_s_r___track__3.md) | **[t23](struct_m_s_r___track_data4.md#variable-t23)**  |

## Detailed Description

```cpp
struct MSR_TrackData4;
```


Track data including additional information. 

## Public Attributes Documentation

### variable add_info

```cpp
unsigned char[8] add_info;
```


Additional information, add_info[0]: [Card Type Code](group___m_s_r___c_a_r_d___c_o_d_e_s.md), add_info[1]: [Track Type Code](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md), add_info[2..7]: RFU. 


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


### variable add_info2

```cpp
unsigned char[8] add_info2;
```


Second magstripe: Additional information, add_info[0]: [Card Type Code](group___m_s_r___c_a_r_d___c_o_d_e_s.md), add_info[1]: [Track Type Code](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md), add_info[2..7]: RFU. 


### variable t21

```cpp
MSR_Track_1 t21;
```


Second magstripe: Track data of track 1. 


### variable t22

```cpp
MSR_Track_2 t22;
```


Second magstripe: Track data of track 2. 


### variable t23

```cpp
MSR_Track_3 t23;
```


Second magstripe: Track data of track 3. 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
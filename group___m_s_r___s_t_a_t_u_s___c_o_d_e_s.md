---
title: Status code
summary: These values indicate the status of each read track. 

---

# Status code

These values indicate the status of each read track. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MSR_STATUS_NOERR](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-noerr)**  |
|  | **[MSR_STATUS_NODATA](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-nodata)**  |
|  | **[MSR_STATUS_NOSTX](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-nostx)**  |
|  | **[MSR_STATUS_NOETX](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-noetx)**  |
|  | **[MSR_STATUS_BADLRC](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-badlrc)**  |
|  | **[MSR_STATUS_PARITY](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-parity)**  |
|  | **[MSR_STATUS_REVETX](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-revetx)**  |
|  | **[MSR_STATUS_BADJIS](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-badjis)**  |
|  | **[MSR_STATUS_BADTRK](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-badtrk)**  |




## Macros Documentation

### define MSR_STATUS_NOERR

```
#define MSR_STATUS_NOERR 0
```


Valid data. 


### define MSR_STATUS_NODATA

```
#define MSR_STATUS_NODATA 1
```


No data. 


### define MSR_STATUS_NOSTX

```
#define MSR_STATUS_NOSTX 2
```


Missing start sentinel or insufficient data. 


### define MSR_STATUS_NOETX

```
#define MSR_STATUS_NOETX 3
```


Missing end sentinel or excessive data. 


### define MSR_STATUS_BADLRC

```
#define MSR_STATUS_BADLRC 4
```


Missing LRC or LRC error. 


### define MSR_STATUS_PARITY

```
#define MSR_STATUS_PARITY 5
```


Parity error. 


### define MSR_STATUS_REVETX

```
#define MSR_STATUS_REVETX 6
```


Reversed end sentinel found. 


### define MSR_STATUS_BADJIS

```
#define MSR_STATUS_BADJIS 7
```


Insufficient printable characters. 


### define MSR_STATUS_BADTRK

```
#define MSR_STATUS_BADTRK 8
```


Insufficient characters. 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
---
title: Error codes
summary: These error codes are returned by the various libmsr functions. 

---

# Error codes

These error codes are returned by the various libmsr functions. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok)**  |
|  | **[MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error)**  |
|  | **[MSR_TIMEOUT](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-timeout)**  |
|  | **[MSR_ABORTED](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-aborted)**  |
|  | **[MSR_ACTIVE](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-active)**  |
|  | **[MSR_PARAM](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-param)**  |
|  | **[MSR_PROCESS](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-process)**  |
|  | **[MSR_NO_DEVICE](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-no-device)**  |




## Macros Documentation

### define MSR_OK

```
#define MSR_OK 0
```


No error, function executed successfully. 


### define MSR_ERROR

```
#define MSR_ERROR -1
```


Device error, magnetic card reader not activated, or internal error. 


### define MSR_TIMEOUT

```
#define MSR_TIMEOUT -2
```


Timeout occurred (returned by [MSR_GetData()](msr_8h.md#function-msr-getdata)). 


### define MSR_ABORTED

```
#define MSR_ABORTED -3
```


Aborted by user (returned by [MSR_GetData()](msr_8h.md#function-msr-getdata)). 


### define MSR_ACTIVE

```
#define MSR_ACTIVE -4
```


Already activated (returned by [MSR_Activate()](msr_8h.md#function-msr-activate)). 


### define MSR_PARAM

```
#define MSR_PARAM -5
```


Parameter error (returned by [MSR_GetData()](msr_8h.md#function-msr-getdata), [MSR_SetOptions()](msr_8h.md#function-msr-setoptions) and [MSR_SwitchLeds()](msr_8h.md#function-msr-switchleds)). 


### define MSR_PROCESS

```
#define MSR_PROCESS -6
```


Process error (returned by [MSR_GetData()](msr_8h.md#function-msr-getdata) and [MSR_DataAvailable()](msr_8h.md#function-msr-dataavailable)). 


### define MSR_NO_DEVICE

```
#define MSR_NO_DEVICE -7
```


No MSR hardware available (returned by [MSR_Activate()](msr_8h.md#function-msr-activate)) 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
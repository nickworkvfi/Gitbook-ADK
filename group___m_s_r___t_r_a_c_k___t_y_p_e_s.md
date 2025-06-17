---
title: Track Type Code
summary: These values indicate the type of track data. 

---

# Track Type Code

These values indicate the type of track data. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MSR_CARD_UNKNOWN](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-unknown)**  |
|  | **[MSR_CARD_ISO](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-iso)**  |
|  | **[MSR_CARD_JIS_II](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-jis-ii)**  |
|  | **[MSR_CARD_AAMVA](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-aamva)**  |
|  | **[MSR_CARD_CADLID](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-cadlid)**  |




## Macros Documentation

### define MSR_CARD_UNKNOWN

```
#define MSR_CARD_UNKNOWN 0x00
```


Unknown track data. 


### define MSR_CARD_ISO

```
#define MSR_CARD_ISO 0x01
```


ISO track data. 


### define MSR_CARD_JIS_II

```
#define MSR_CARD_JIS_II 0x02
```


JIS-II track data. 


### define MSR_CARD_AAMVA

```
#define MSR_CARD_AAMVA 0x04
```


AAMVA driver license magnetic card encoding (returned since VOS 3), see also option MSR_ENABLE_LICENSE_DECODE 


### define MSR_CARD_CADLID

```
#define MSR_CARD_CADLID 0x08
```


CADLID driver license magnetic card encoding (returned since VOS 3) see also option MSR_ENABLE_LICENSE_DECODE 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
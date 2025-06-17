---
title: TEC technology code
summary: These codes are used to specify supported technologies. A combination is possible using | operator. 

---

# TEC technology code

These codes are used to specify supported technologies. A combination is possible using | operator. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CTS_CHIP](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-chip)**  |
|  | **[CTS_MSR](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-msr)**  |
|  | **[CTS_CTLS](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-ctls)**  |
|  | **[CTS_SYNC](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-sync)**  |




## Macros Documentation

### define CTS_CHIP

```
#define CTS_CHIP 1
```


Contact Chip (asynchronous card). 


### define CTS_MSR

```
#define CTS_MSR 2
```


Magstripe. 


### define CTS_CTLS

```
#define CTS_CTLS 4
```


Contactless (EMV, NFC, and/or VAS). 


### define CTS_SYNC

```
#define CTS_SYNC 8
```


Contact Chip, synchronous card. Output only, synchronous card detection is activated by [CTS_CHIP](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-chip) plus [CTS_OPTION_TAG_SYNC_CARD_TYPE](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-sync-card-type)




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
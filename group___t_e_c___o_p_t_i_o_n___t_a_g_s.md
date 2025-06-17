---
title: TEC option tags
summary: These options can be set by cts_SetOptions(). 

---

# TEC option tags

These options can be set by [cts_SetOptions()](). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CTS_OPTION_TAG_APP_ID](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-app-id)**  |
|  | **[CTS_OPTION_TAG_SYNC_CARD_TYPE](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-sync-card-type)**  |
|  | **[CTS_OPTION_TAG_UX_MSR_TIMEOUT](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-ux-msr-timeout)**  |




## Macros Documentation

### define CTS_OPTION_TAG_APP_ID

```
#define CTS_OPTION_TAG_APP_ID 0xDFDB40
```


application ID, passed on to [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate). 


### define CTS_OPTION_TAG_SYNC_CARD_TYPE

```
#define CTS_OPTION_TAG_SYNC_CARD_TYPE 0xDFDB41
```


Card Type for synchroneous (contact) Chip, passed on to [crdSync_PowerUp()](crdsync_8h.md#function-crdsync-powerup). 1-byte value. Not supported for trinity/android. 


### define CTS_OPTION_TAG_UX_MSR_TIMEOUT

```
#define CTS_OPTION_TAG_UX_MSR_TIMEOUT 0xDFDB42
```


Ux30x only: How long to wait for MSR data after card removal.

 Precondition: Callback [CTS_NOTIFICATION_CBK_TYPE_UX_CARD_INSERTED](group___t_e_c___n_o_t_i_f_i_c_a_t_i_o_n___c_b_k___t_y_p_e.md#define-cts-notification-cbk-type-ux-card-inserted) is registered.

 Format b2 (binary coded, little endian). min = 0x0001, max = 0xFFFF = 65535 ms.

 "0x0000" means "wait until main timeout of [cts_StartSelection()](tec_8h.md#function-cts-startselection) expires" 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
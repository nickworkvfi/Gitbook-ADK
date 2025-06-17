---
title: Verifone internal tags
summary: There are many data objects, which do not have an EMVCo defined tags. For usage of TLV interface it's necessary to define internal tags. 

---

# Verifone internal tags

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)**

There are many data objects, which do not have an EMVCo defined tags. For usage of TLV interface it's necessary to define internal tags. 

## Modules

| Name           |
| -------------- |
| **[Constructed tags](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md)**  |
| **[Primitive tags](group___v_e_r_i___p_r_i_m___t_a_g_s.md)**  |
| **[Three-byte-tags](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md)**  |
| **[Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md)**  |
| **[Primitive tags for L1 dump](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_C0_TRM_CL_CVM_LIMIT](group___v_e_r_i___t_a_g_s.md#define-tag-c0-trm-cl-cvm-limit)** <br>CVM limit.  |
|  | **[TAG_C1_TRM_CL_CEIL_LIMIT](group___v_e_r_i___t_a_g_s.md#define-tag-c1-trm-cl-ceil-limit)** <br>Ceiling limit (Contactless transaction limit)  |
|  | **[TAG_C2_TRM_CL_MODES](group___v_e_r_i___t_a_g_s.md#define-tag-c2-trm-cl-modes)**  |
|  | **[TAG_C3_INDEX](group___v_e_r_i___t_a_g_s.md#define-tag-c3-index)**  |
|  | **[TAG_C4_APP_PRG_ID_LEN](group___v_e_r_i___t_a_g_s.md#define-tag-c4-app-prg-id-len)**  |
|  | **[TAG_C5_APP_PRG_ID](group___v_e_r_i___t_a_g_s.md#define-tag-c5-app-prg-id)**  |
|  | **[TAG_C6_TXN_LIMIT](group___v_e_r_i___t_a_g_s.md#define-tag-c6-txn-limit)**  |
|  | **[TAG_C7_LED_ID](group___v_e_r_i___t_a_g_s.md#define-tag-c7-led-id)** <br>[EMV_CTLS_LED()](): `ucLedId`.  |
|  | **[TAG_C8_LED_STATE](group___v_e_r_i___t_a_g_s.md#define-tag-c8-led-state)** <br>[EMV_CTLS_LED()](): `ucLedState` resp. [TAG_BF10_CTLS_CBK_LEDS]().  |
|  | **[TAG_C9_POLL_TIMEOUT](group___v_e_r_i___t_a_g_s.md#define-tag-c9-poll-timeout)** <br>[EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout).  |
|  | **[TAG_CA_DRL_ON_OFF](group___v_e_r_i___t_a_g_s.md#define-tag-ca-drl-on-off)** <br>EMV_CTLS_VISA_DRL_STRUCT::OnOffSwitch.  |
|  | **[TAG_CB_BEEP_SCENARIO](group___v_e_r_i___t_a_g_s.md#define-tag-cb-beep-scenario)** <br>Buzzer scenario in callback [TAG_BF19_CTLS_CBK_BEEP]().  |
|  | **[TAG_FA_VISA_DRL_RISK](group___v_e_r_i___t_a_g_s.md#define-tag-fa-visa-drl-risk)**  |
|  | **[TAG_FB_PP3_PMSG_TABLE](group___v_e_r_i___t_a_g_s.md#define-tag-fb-pp3-pmsg-table)**  |
|  | **[TAG_FC_EP_BF0C_FINAL_SELECT](group___v_e_r_i___t_a_g_s.md#define-tag-fc-ep-bf0c-final-select)** <br>BF0C from SELECT response, can be used with [EMV_CTLS_fetchTxnTags()]() |
|  | **[TAG_FD_AMEX_DRL_RISK](group___v_e_r_i___t_a_g_s.md#define-tag-fd-amex-drl-risk)**  |




## Macros Documentation

### define TAG_C0_TRM_CL_CVM_LIMIT

```
#define TAG_C0_TRM_CL_CVM_LIMIT 0xC0
```

CVM limit. 

### define TAG_C1_TRM_CL_CEIL_LIMIT

```
#define TAG_C1_TRM_CL_CEIL_LIMIT 0xC1
```

Ceiling limit (Contactless transaction limit) 

### define TAG_C2_TRM_CL_MODES

```
#define TAG_C2_TRM_CL_MODES 0xC2
```


**Deprecated**: 

[EMV_CTLS_TRANSRES_TYPE::CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode)

### define TAG_C3_INDEX

```
#define TAG_C3_INDEX 0xC3
```


### define TAG_C4_APP_PRG_ID_LEN

```
#define TAG_C4_APP_PRG_ID_LEN 0xC4
```


### define TAG_C5_APP_PRG_ID

```
#define TAG_C5_APP_PRG_ID 0xC5
```


### define TAG_C6_TXN_LIMIT

```
#define TAG_C6_TXN_LIMIT 0xC6
```


### define TAG_C7_LED_ID

```
#define TAG_C7_LED_ID 0xC7
```

[EMV_CTLS_LED()](): `ucLedId`. 

### define TAG_C8_LED_STATE

```
#define TAG_C8_LED_STATE 0xC8
```

[EMV_CTLS_LED()](): `ucLedState` resp. [TAG_BF10_CTLS_CBK_LEDS](). 

### define TAG_C9_POLL_TIMEOUT

```
#define TAG_C9_POLL_TIMEOUT 0xC9
```

[EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout). 

### define TAG_CA_DRL_ON_OFF

```
#define TAG_CA_DRL_ON_OFF 0xCA
```

EMV_CTLS_VISA_DRL_STRUCT::OnOffSwitch. 

### define TAG_CB_BEEP_SCENARIO

```
#define TAG_CB_BEEP_SCENARIO 0xCB
```

Buzzer scenario in callback [TAG_BF19_CTLS_CBK_BEEP](). 

### define TAG_FA_VISA_DRL_RISK

```
#define TAG_FA_VISA_DRL_RISK 0xFA
```


### define TAG_FB_PP3_PMSG_TABLE

```
#define TAG_FB_PP3_PMSG_TABLE 0xFB
```


### define TAG_FC_EP_BF0C_FINAL_SELECT

```
#define TAG_FC_EP_BF0C_FINAL_SELECT 0xFC
```

BF0C from SELECT response, can be used with [EMV_CTLS_fetchTxnTags()]()

### define TAG_FD_AMEX_DRL_RISK

```
#define TAG_FD_AMEX_DRL_RISK 0xFD
```




-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
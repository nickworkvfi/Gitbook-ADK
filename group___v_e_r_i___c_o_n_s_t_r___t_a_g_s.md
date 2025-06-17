---
title: Constructed tags

---

# Constructed tags

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** **/** **[Verifone internal tags](group___v_e_r_i___t_a_g_s.md)**



## Modules

| Name           |
| -------------- |
| **[Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md)**  |
| **[Constructed tags for new scheme specific config interface](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___c_o_n_s_t_r.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_E2_FORMAT_B](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e2-format-b)** <br>Format: Binary.  |
|  | **[TAG_E3_FORMAT_N](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e3-format-n)** <br>Format: Numeric.  |
|  | **[TAG_E4_FORMAT_CN](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e4-format-cn)** <br>Format: Compressed Numeric.  |
|  | **[TAG_E5_FORMAT_A](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e5-format-a)** <br>Format: Alphabetic.  |
|  | **[TAG_E6_FORMAT_AN](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e6-format-an)** <br>Format: Alpha Numeric.  |
|  | **[TAG_E7_FORMAT_ANS](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e7-format-ans)** <br>Format: Alphanumeric Special data elements.  |
|  | **[TAG_F0_EMV_TEMPLATE](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-f0-emv-template)** <br>All BER TLV streams are packed in this tag.  |
|  | **[TAG_DOM_CHIP](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-dom-chip)** <br>Contact only: Domestic chip applications.  |
|  | **[TAG_FALLBACK_MSR](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-fallback-msr)** <br>Contact only: MSR data.  |
|  | **[TAG_CAND_LIST](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-cand-list)** <br>Contact only: Candidate list.  |
|  | **[TAG_KEY](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-key)** <br>CAP keys, usd to enclose data of [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md).  |
|  | **[TAG_HOTLIST](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-hotlist)** <br>Hot list, used as [EMV_CTLS_TERMDATA_STRUCT::Hotlist](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hotlist).  |
|  | **[TAG_FF10_DE_DET_DATA](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff10-de-det-data)** <br>DataExchange, constructed tag for DET data, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE]().  |
|  | **[TAG_EXCLUDE_COMBO](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-exclude-combo)** <br>used to serialise data from [EMV_CTLS_APPS_SELECT_TYPE::ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos) |
|  | **[TAG_FF8F13_SIGNAL_MSG](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f13-signal-msg)** <br>PayPass 3, tag for reading list of User Interface Request Signals with [EMV_CTLS_fetchTxnTags]().  |
|  | **[TAG_FF8F14_SIGNAL_OUT](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f14-signal-out)** <br>PayPass 3, tag for reading list of Outcome Signals with [EMV_CTLS_fetchTxnTags]().  |
|  | **[TAG_FF8013_SIGNAL_MSG](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8013-signal-msg)**  |
|  | **[TAG_FF8014_SIGNAL_OUT](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8014-signal-out)**  |
|  | **[TAG_E2_FORMAT_B](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e2-format-b)** <br>Data objects with format "b"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E3_FORMAT_N](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e3-format-n)** <br>Data objects with format "n"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E4_FORMAT_CN](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e4-format-cn)** <br>Data objects with format "cn"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E5_FORMAT_A](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e5-format-a)** <br>Data objects with format "a"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E6_FORMAT_AN](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e6-format-an)** <br>Data objects with format "an"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E7_FORMAT_ANS](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e7-format-ans)** <br>Data objects with format "ans"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_F0_EMV_TEMPLATE](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-f0-emv-template)** <br>All BER TLV streams are packed in this tag.  |
|  | **[TAG_DOM_CHIP](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-dom-chip)** <br>constructed tag for domestic chip applications  |
|  | **[TAG_FALLBACK_MSR](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-fallback-msr)** <br>constructed tag for MSR data  |
|  | **[TAG_CAND_LIST](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-cand-list)** <br>constructed tag for candidate list, used for EMV_CT_CANDIDATE_TYPE, [EMV_CT_CandListType](struct_e_m_v___c_t___cand_list_type.md) and within EMV_CT_updateTxnTags  |
|  | **[TAG_KEY](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-key)** <br>constructed tag for CAP keys  |




## Macros Documentation

### define TAG_E2_FORMAT_B

```
#define TAG_E2_FORMAT_B 0xE2
```

Format: Binary. 

### define TAG_E3_FORMAT_N

```
#define TAG_E3_FORMAT_N 0xE3
```

Format: Numeric. 

### define TAG_E4_FORMAT_CN

```
#define TAG_E4_FORMAT_CN 0xE4
```

Format: Compressed Numeric. 

### define TAG_E5_FORMAT_A

```
#define TAG_E5_FORMAT_A 0xE5
```

Format: Alphabetic. 

### define TAG_E6_FORMAT_AN

```
#define TAG_E6_FORMAT_AN 0xE6
```

Format: Alpha Numeric. 

### define TAG_E7_FORMAT_ANS

```
#define TAG_E7_FORMAT_ANS 0xE7
```

Format: Alphanumeric Special data elements. 

Contain a single character per byte. The permitted characters and their coding are shown in the Common Character Set table in [EMV 4.3 Book 4], Annex B. 

 There is one exception: The permitted characters for Application Preferred Name are the non-control characters defined in the ISO/IEC 8859 part designated in the Issuer Code Table Index associated with the Application Preferred Name. 


### define TAG_F0_EMV_TEMPLATE

```
#define TAG_F0_EMV_TEMPLATE 0xF0
```

All BER TLV streams are packed in this tag. 

### define TAG_DOM_CHIP

```
#define TAG_DOM_CHIP 0xFF01
```

Contact only: Domestic chip applications. 

### define TAG_FALLBACK_MSR

```
#define TAG_FALLBACK_MSR 0xFF02
```

Contact only: MSR data. 

### define TAG_CAND_LIST

```
#define TAG_CAND_LIST 0xFF03
```

Contact only: Candidate list. 

### define TAG_KEY

```
#define TAG_KEY 0xFF04
```

CAP keys, usd to enclose data of [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md). 

### define TAG_HOTLIST

```
#define TAG_HOTLIST 0xFF05
```

Hot list, used as [EMV_CTLS_TERMDATA_STRUCT::Hotlist](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hotlist). 

### define TAG_FF10_DE_DET_DATA

```
#define TAG_FF10_DE_DET_DATA 0xFF10
```

DataExchange, constructed tag for DET data, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE](). 

### define TAG_EXCLUDE_COMBO

```
#define TAG_EXCLUDE_COMBO 0xFF69
```

used to serialise data from [EMV_CTLS_APPS_SELECT_TYPE::ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos)

### define TAG_FF8F13_SIGNAL_MSG

```
#define TAG_FF8F13_SIGNAL_MSG 0xFF8F13
```

PayPass 3, tag for reading list of User Interface Request Signals with [EMV_CTLS_fetchTxnTags](). 

### define TAG_FF8F14_SIGNAL_OUT

```
#define TAG_FF8F14_SIGNAL_OUT 0xFF8F14
```

PayPass 3, tag for reading list of Outcome Signals with [EMV_CTLS_fetchTxnTags](). 

### define TAG_FF8013_SIGNAL_MSG

```
#define TAG_FF8013_SIGNAL_MSG TAG_FF8F13_SIGNAL_MSG
```


**Deprecated**: 

use [TAG_FF8F13_SIGNAL_MSG](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f13-signal-msg) instead 

### define TAG_FF8014_SIGNAL_OUT

```
#define TAG_FF8014_SIGNAL_OUT TAG_FF8F14_SIGNAL_OUT
```


**Deprecated**: 

use [TAG_FF8F14_SIGNAL_OUT](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f14-signal-out) instead 

### define TAG_E2_FORMAT_B

```
#define TAG_E2_FORMAT_B 0xE2
```

Data objects with format "b"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E3_FORMAT_N

```
#define TAG_E3_FORMAT_N 0xE3
```

Data objects with format "n"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E4_FORMAT_CN

```
#define TAG_E4_FORMAT_CN 0xE4
```

Data objects with format "cn"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E5_FORMAT_A

```
#define TAG_E5_FORMAT_A 0xE5
```

Data objects with format "a"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E6_FORMAT_AN

```
#define TAG_E6_FORMAT_AN 0xE6
```

Data objects with format "an"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E7_FORMAT_ANS

```
#define TAG_E7_FORMAT_ANS 0xE7
```

Data objects with format "ans"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

Contain a single character per byte. The permitted characters and their coding are shown in the Common Character Set table in [EMV 4.3 Book 4], Annex B. 

 There is one exception: The permitted characters for Application Preferred Name are the non-control characters defined in the ISO/IEC 8859 part designated in the Issuer Code Table Index associated with the Application Preferred Name. 


### define TAG_F0_EMV_TEMPLATE

```
#define TAG_F0_EMV_TEMPLATE 0xF0
```

All BER TLV streams are packed in this tag. 

### define TAG_DOM_CHIP

```
#define TAG_DOM_CHIP 0xFF01
```

constructed tag for domestic chip applications 

### define TAG_FALLBACK_MSR

```
#define TAG_FALLBACK_MSR 0xFF02
```

constructed tag for MSR data 

### define TAG_CAND_LIST

```
#define TAG_CAND_LIST 0xFF03
```

constructed tag for candidate list, used for EMV_CT_CANDIDATE_TYPE, [EMV_CT_CandListType](struct_e_m_v___c_t___cand_list_type.md) and within EMV_CT_updateTxnTags 

### define TAG_KEY

```
#define TAG_KEY 0xFF04
```

constructed tag for CAP keys 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
---
title: Proprietary tags used by Gemalto/Pure

---

# Proprietary tags used by Gemalto/Pure

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_9F71_PURE_GDDOL_RESULTS](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-9f71-pure-gddol-results)** <br>GDDOL Resulting Buffer. Its content is the result of the concatenation of the data elements listed in GDDOL. See [TAG_BF18_CBK_PURE_GET_PUT_DATA]().  |
|  | **[TAG_9F74_PURE_DATA_UPDATE_RESULT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-9f74-pure-data-update-result)** <br>Data Elements Update Result. Result of the data element update requested by the reader using Memory Slot Update Template. See [TAG_BF18_CBK_PURE_GET_PUT_DATA]().  |
|  | **[TAG_9F76_PURE_TERM_TRX_DATA](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-9f76-pure-term-trx-data)** <br>Terminal transaction data.  |
|  | **[TAG_BF70_PURE_PUT_DATA_MSUT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-bf70-pure-put-data-msut)** <br>Used in [TAG_BF18_CBK_PURE_GET_PUT_DATA]().  |
|  | **[TAG_BF71_PURE_GET_DATA_MSRT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-bf71-pure-get-data-msrt)** <br>Memory Slot Read Template. This data element provides to the PURE kernel, the list of data elements to read. Used in [TAG_BF18_CBK_PURE_GET_PUT_DATA]().  |




## Macros Documentation

### define TAG_9F71_PURE_GDDOL_RESULTS

```
#define TAG_9F71_PURE_GDDOL_RESULTS 0x9F71
```

GDDOL Resulting Buffer. Its content is the result of the concatenation of the data elements listed in GDDOL. See [TAG_BF18_CBK_PURE_GET_PUT_DATA](). 

### define TAG_9F74_PURE_DATA_UPDATE_RESULT

```
#define TAG_9F74_PURE_DATA_UPDATE_RESULT 0x9F74
```

Data Elements Update Result. Result of the data element update requested by the reader using Memory Slot Update Template. See [TAG_BF18_CBK_PURE_GET_PUT_DATA](). 

### define TAG_9F76_PURE_TERM_TRX_DATA

```
#define TAG_9F76_PURE_TERM_TRX_DATA 0x9F76
```

Terminal transaction data. 

Allows the Terminal Application to communicate transaction-related information to the Card Payment application. Depending on card payment application setting, this information may participate in the card payment application risk management or may be inserted inside the card payment application transaction log. 

 Used as [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalTransactionData_9F76](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminaltransactiondata-9f76)


### define TAG_BF70_PURE_PUT_DATA_MSUT

```
#define TAG_BF70_PURE_PUT_DATA_MSUT 0xBF70
```

Used in [TAG_BF18_CBK_PURE_GET_PUT_DATA](). 

Memory Slot Update Template. This data element provides to the PURE kernel, the list of data elements to update using the PUT DATA. 


### define TAG_BF71_PURE_GET_DATA_MSRT

```
#define TAG_BF71_PURE_GET_DATA_MSRT 0xBF71
```

Memory Slot Read Template. This data element provides to the PURE kernel, the list of data elements to read. Used in [TAG_BF18_CBK_PURE_GET_PUT_DATA](). 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
---
title: Options for fetching TLV data
summary: options for EMV_CT_fetchTxnTags()

---

# Options for fetching TLV data

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)**

`options` for [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_FETCHTAGS_NO_EMPTY](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-no-empty)** <br>In case no data is found for a given TLV tag: don't include this tag in the output.  |
|  | **[EMV_ADK_FETCHTAGS_KERNEL](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-kernel)** <br>Search tags only in kernel database, excluding kernel private tags ("readHypTag").  |
|  | **[EMV_ADK_FETCHTAGS_ADK](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-adk)** <br>Search tags only in the ADK configuration database.  |
|  | **[EMV_ADK_FETCHTAGS_KERNEL_PRV](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-kernel-prv)** <br>Search tags only in kernel private database ("readHypTag").  |
|  | **[EMV_ADK_FETCHTAGS_GET_DATA](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-get-data)** <br>Issue Get Data command '80 CA' to directly read the information from the chip card.  |
|  | **[SENSITIVE_TAG_OMIT](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-sensitive-tag-omit)** <br>(b1 & b2): Default handling of sensitive tags by [SDI_fetchTxnTags()](): Sensitive tags are not returned in the response.  |
|  | **[SENSITIVE_TAG_TRUNCATE](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-sensitive-tag-truncate)** <br>b1: Sensitive tags are returned with zero length. Note: b1 and b2 are mutually exclusive  |
|  | **[SENSITIVE_TAG_REPLACE](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-sensitive-tag-replace)** <br>b2: Sensitive tags are returned with data replaced by 0xFF bytes and original length  |
|  | **[FETCHTAGS_EXPIRY_DATE_IN_CLEAR](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-fetchtags-expiry-date-in-clear)** <br>b3: Get expiry date (tag 5F24) in clear text if VCL encryption is enabled  |
|  | **[FETCHTAGS_GET_DATA](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-fetchtags-get-data)** <br>b4: Use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only)  |

## Detailed Description

`options` for [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags)

options for [SDI_fetchTxnTags()](sdi__data_8h.md#function-sdi-fetchtxntags)




## Macros Documentation

### define EMV_ADK_FETCHTAGS_NO_EMPTY

```
#define EMV_ADK_FETCHTAGS_NO_EMPTY (1 << 0)
```

In case no data is found for a given TLV tag: don't include this tag in the output. 

Exception for MIR: In case there is no data for 9F70 and/or DF74 those tags are never included in the output. 


### define EMV_ADK_FETCHTAGS_KERNEL

```
#define EMV_ADK_FETCHTAGS_KERNEL (1 << 1)
```

Search tags only in kernel database, excluding kernel private tags ("readHypTag"). 

Data originated from kernel, ICC and [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm) can be found. To be used in case of double definition of tags. 


### define EMV_ADK_FETCHTAGS_ADK

```
#define EMV_ADK_FETCHTAGS_ADK (1 << 2)
```

Search tags only in the ADK configuration database. 

Data originated from [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-scheme-specific-type) and [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) can be found. To be used in case of double definition of tags. 


### define EMV_ADK_FETCHTAGS_KERNEL_PRV

```
#define EMV_ADK_FETCHTAGS_KERNEL_PRV (1 << 3)
```

Search tags only in kernel private database ("readHypTag"). 

### define EMV_ADK_FETCHTAGS_GET_DATA

```
#define EMV_ADK_FETCHTAGS_GET_DATA (1 << 4)
```

Issue Get Data command '80 CA' to directly read the information from the chip card. 

### define SENSITIVE_TAG_OMIT

```
#define SENSITIVE_TAG_OMIT 0
```

(b1 & b2): Default handling of sensitive tags by [SDI_fetchTxnTags()](): Sensitive tags are not returned in the response. 

### define SENSITIVE_TAG_TRUNCATE

```
#define SENSITIVE_TAG_TRUNCATE 0x01
```

b1: Sensitive tags are returned with zero length. Note: b1 and b2 are mutually exclusive 

### define SENSITIVE_TAG_REPLACE

```
#define SENSITIVE_TAG_REPLACE 0x02
```

b2: Sensitive tags are returned with data replaced by 0xFF bytes and original length 

### define FETCHTAGS_EXPIRY_DATE_IN_CLEAR

```
#define FETCHTAGS_EXPIRY_DATE_IN_CLEAR 0x04
```

b3: Get expiry date (tag 5F24) in clear text if VCL encryption is enabled 

### define FETCHTAGS_GET_DATA

```
#define FETCHTAGS_GET_DATA 0x08
```

b4: Use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only) 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
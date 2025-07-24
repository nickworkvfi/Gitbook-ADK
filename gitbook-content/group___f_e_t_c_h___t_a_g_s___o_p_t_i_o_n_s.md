---
hidden: true
title: Options for fetching TLV dataTransaction execution » Output data
---

[Macros](#define-members)

`options` for <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags()</a> [More\...](#details)

Collaboration diagram for Options for fetching TLV data:

![](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_FETCHTAGS_NO_EMPTY](#ga21aa8da8d69f7acd9d8e13b9543df5c0)   (1 \<\< 0) |
|   | In case no data is found for a given TLV tag: don\'t include this tag in the output. [More\...](#ga21aa8da8d69f7acd9d8e13b9543df5c0)<br/> |
| #define  | [EMV_ADK_FETCHTAGS_KERNEL](#gaf2ba6457aff8e9f5bc3acc1b84715061)   (1 \<\< 1) |
|   | Search tags only in kernel database, excluding kernel private tags (\"readHypTag\"). [More\...](#gaf2ba6457aff8e9f5bc3acc1b84715061)<br/> |
| #define  | [EMV_ADK_FETCHTAGS_ADK](#gaa31b37586c799160f1439280de97c8cc)   (1 \<\< 2) |
|   | Search tags only in the ADK configuration database. [More\...](#gaa31b37586c799160f1439280de97c8cc)<br/> |
| #define  | [EMV_ADK_FETCHTAGS_KERNEL_PRV](#gafb7d6f4621362bf0576cc8ec0dee96e7)   (1 \<\< 3) |
|   | Search tags only in kernel private database (\"readHypTag\"). [More\...](#gafb7d6f4621362bf0576cc8ec0dee96e7)<br/> |
| #define  | [EMV_ADK_FETCHTAGS_GET_DATA](#ga4aaa4083df605146b8ca652c6ceee553)   (1 \<\< 4) |
|   | Issue Get Data command \'80 CA\' to directly read the information from the chip card. [More\...](#ga4aaa4083df605146b8ca652c6ceee553)<br/> |
| #define  | [SENSITIVE_TAG_OMIT](#ga4d0d4200051eace7b386b0b60576a7f8)   0 |
|   | (b1 & b2): Default handling of sensitive tags by <a href="sdi__data_8h.md#aa0964da27a7a19aaae21a423f330af83">SDI_fetchTxnTags()</a>: Sensitive tags are not returned in the response. [More\...](#ga4d0d4200051eace7b386b0b60576a7f8)<br/> |
| #define  | [SENSITIVE_TAG_TRUNCATE](#ga6f8e5b493d848f1d3c55031be9d729b8)   0x01 |
|   | b1: Sensitive tags are returned with zero length. Note: b1 and b2 are mutually exclusive [More\...](#ga6f8e5b493d848f1d3c55031be9d729b8)<br/> |
| #define  | [SENSITIVE_TAG_REPLACE](#ga02da4a00c6611051f852cba64f25696e)   0x02 |
|   | b2: Sensitive tags are returned with data replaced by 0xFF bytes and original length [More\...](#ga02da4a00c6611051f852cba64f25696e)<br/> |
| #define  | [FETCHTAGS_EXPIRY_DATE_IN_CLEAR](#ga7b8ac5b03afa9de30ceb1700d2d696a3)   0x04 |
|   | b3: Get expiry date (tag 5F24) in clear text if VCL encryption is enabled [More\...](#ga7b8ac5b03afa9de30ceb1700d2d696a3)<br/> |
| #define  | [FETCHTAGS_GET_DATA](#gab484f75a638e56fe47d83bc9259c67fb)   0x08 |
|   | b4: Use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only) [More\...](#gab484f75a638e56fe47d83bc9259c67fb)<br/> |

## DetailedDescription {#detailed-description}

`options` for <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags()</a>

options for <a href="sdi__data_8h.md#aa0964da27a7a19aaae21a423f330af83">SDI_fetchTxnTags()</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_FETCHTAGS_ADK <a href="#gaa31b37586c799160f1439280de97c8cc" id="gaa31b37586c799160f1439280de97c8cc"></a>

<p>#define EMV_ADK_FETCHTAGS_ADK   (1 \<\< 2)</p>

Search tags only in the ADK configuration database.

Data originated from <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ga6632685219259930248b2c7aa2186f66">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE</a> and <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CTLS_TERMDATA_STRUCT</a> can be found. To be used in case of double definition of tags.

## EMV_ADK_FETCHTAGS_GET_DATA <a href="#ga4aaa4083df605146b8ca652c6ceee553" id="ga4aaa4083df605146b8ca652c6ceee553"></a>

<p>#define EMV_ADK_FETCHTAGS_GET_DATA   (1 \<\< 4)</p>

Issue Get Data command \'80 CA\' to directly read the information from the chip card.

## EMV_ADK_FETCHTAGS_KERNEL <a href="#gaf2ba6457aff8e9f5bc3acc1b84715061" id="gaf2ba6457aff8e9f5bc3acc1b84715061"></a>

<p>#define EMV_ADK_FETCHTAGS_KERNEL   (1 \<\< 1)</p>

Search tags only in kernel database, excluding kernel private tags (\"readHypTag\").

Data originated from kernel, ICC and <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad7a6039ab1aa91113c012eab4293d664">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM</a> can be found. To be used in case of double definition of tags.

## EMV_ADK_FETCHTAGS_KERNEL_PRV <a href="#gafb7d6f4621362bf0576cc8ec0dee96e7" id="gafb7d6f4621362bf0576cc8ec0dee96e7"></a>

<p>#define EMV_ADK_FETCHTAGS_KERNEL_PRV   (1 \<\< 3)</p>

Search tags only in kernel private database (\"readHypTag\").

## EMV_ADK_FETCHTAGS_NO_EMPTY <a href="#ga21aa8da8d69f7acd9d8e13b9543df5c0" id="ga21aa8da8d69f7acd9d8e13b9543df5c0"></a>

<p>#define EMV_ADK_FETCHTAGS_NO_EMPTY   (1 \<\< 0)</p>

In case no data is found for a given TLV tag: don\'t include this tag in the output.

Exception for MIR: In case there is no data for 9F70 and/or DF74 those tags are never included in the output.

## FETCHTAGS_EXPIRY_DATE_IN_CLEAR <a href="#ga7b8ac5b03afa9de30ceb1700d2d696a3" id="ga7b8ac5b03afa9de30ceb1700d2d696a3"></a>

<p>#define FETCHTAGS_EXPIRY_DATE_IN_CLEAR   0x04</p>

b3: Get expiry date (tag 5F24) in clear text if VCL encryption is enabled

## FETCHTAGS_GET_DATA <a href="#gab484f75a638e56fe47d83bc9259c67fb" id="gab484f75a638e56fe47d83bc9259c67fb"></a>

<p>#define FETCHTAGS_GET_DATA   0x08</p>

b4: Use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only)

## SENSITIVE_TAG_OMIT <a href="#ga4d0d4200051eace7b386b0b60576a7f8" id="ga4d0d4200051eace7b386b0b60576a7f8"></a>

<p>#define SENSITIVE_TAG_OMIT   0</p>

(b1 & b2): Default handling of sensitive tags by <a href="sdi__data_8h.md#aa0964da27a7a19aaae21a423f330af83">SDI_fetchTxnTags()</a>: Sensitive tags are not returned in the response.

## SENSITIVE_TAG_REPLACE <a href="#ga02da4a00c6611051f852cba64f25696e" id="ga02da4a00c6611051f852cba64f25696e"></a>

<p>#define SENSITIVE_TAG_REPLACE   0x02</p>

b2: Sensitive tags are returned with data replaced by 0xFF bytes and original length

## SENSITIVE_TAG_TRUNCATE <a href="#ga6f8e5b493d848f1d3c55031be9d729b8" id="ga6f8e5b493d848f1d3c55031be9d729b8"></a>

<p>#define SENSITIVE_TAG_TRUNCATE   0x01</p>

b1: Sensitive tags are returned with zero length. Note: b1 and b2 are mutually exclusive

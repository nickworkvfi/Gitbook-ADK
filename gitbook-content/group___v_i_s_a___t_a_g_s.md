---
hidden: true
title: Propriertary tags used by VisaGeneral topics » Serialization » BER TLV tags used by EMV ADK
---

[Macros](#define-members)

see \[Visa_Card\], page A-63 [More\...](#details)

Collaboration diagram for Propriertary tags used by Visa:

![](group___v_i_s_a___t_a_g_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_9F51_APP_CURRENCY_CODE](#ga139390165050f732efd3ae2ec2418634)   0x9F51 |
|   | Application Currency Code. [More\...](#ga139390165050f732efd3ae2ec2418634)<br/> |
| #define  | [TAG_9F52_DEFAULT_ACTION](#gaa1834fd73125f470c7205db305fd8202)   0x9F52 |
|   | Application Default Action (ADA) [More\...](#gaa1834fd73125f470c7205db305fd8202)<br/> |
| #define  | [TAG_9F53_CONSECUTIVE_LIM_TRANS_INT](#ga3ef6440dcd667069daac0bd9ce7fa724)   0x9F53 |
|   | Consecutive Transaction Limit (International) [More\...](#ga3ef6440dcd667069daac0bd9ce7fa724)<br/> |
| #define  | [TAG_9F54_CUMULATIVE_TRANS_LIMET](#ga10ce7e78c2c6251e3a0161f08b3962f9)   0x9F54 |
|   | Cumulative Total Transaction Amount Limit. [More\...](#ga10ce7e78c2c6251e3a0161f08b3962f9)<br/> |
| #define  | [TAG_9F56_ISS_AUTH_INCATOR](#ga783c672ef82c5769eddff3c4009999aa)   0x9F56 |
|   | Issuer Authentication Indicator. [More\...](#ga783c672ef82c5769eddff3c4009999aa)<br/> |
| #define  | [TAG_9F5A_APP_PROGRAM_ID](#gab2e09e3e34f3443924d6cd79016cadec)   0x9F5A |
|   | Application Program Identifier. [More\...](#gab2e09e3e34f3443924d6cd79016cadec)<br/> |
| #define  | [TAG_9F5D_VISA_AOSA](#gaf91a05658cd7bfa54c3670018779e15c)   0x9F5D |
|   | Contactless: Available Offline Spending Amount (AOSA)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aef18e9908577cfd63de0f526111ed110">EMV_CTLS_TRANSRES_STRUCT::T_9F5D_CL_VISA_AOSA</a>. [More\...](#gaf91a05658cd7bfa54c3670018779e15c)<br/> |
| #define  | [TAG_9F66_TTQ](#ga30362da6e863c342f262adc3cafb680e)   0x9F66 |
|   | VISA TTQ (Contactless only) [More\...](#ga30362da6e863c342f262adc3cafb680e)<br/> |
| #define  | [TAG_9F6C_VISA_CTQ](#ga9f71361a75edb14683a5b2e3049ee1b0)   0x9F6C |
|   | VISA CTQ (Contactless only)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a1c4c877fb876a73190afc8f7465b11ec">EMV_CTLS_TRANSRES_STRUCT::T_9F6C_CL_VISA_CTQ</a>. [More\...](#ga9f71361a75edb14683a5b2e3049ee1b0)<br/> |
| #define  | [TAG_9F6D_TRM_APP_VERSION_NB](#ga730c9d269d7399e534a6d1aad81f4fef)   0x9F6D |
|   | Terminal application version number. [More\...](#ga730c9d269d7399e534a6d1aad81f4fef)<br/> |
| #define  | [TAG_DF04_PK_CVM_REQUIREMENTS](#gad00d4584c8dece99bc5afe17252560c0)   0xDF04 |
|   | Visa Asia/Pacific: CVM requirements, see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afbcb816298915570ae5e47a12805913d">EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04</a>. [More\...](#gad00d4584c8dece99bc5afe17252560c0)<br/> |
| #define  | [TAG_DF02_PK_FLOOR_LIMIT](#gaefbade1401fdfc9c4f1f95779a8a8262)   0xDF02 |
|   | Visa Asia/Pacific: Floor limit, see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5cd219dce6240490e80e2580f9328966">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02</a>. [More\...](#gaefbade1401fdfc9c4f1f95779a8a8262)<br/> |
| #define  | [TAG_DF01_PK_CVM_REQ_LIMIT](#ga7c31703a767a4eb7a8de7a708f601633)   0xDF01 |
|   | Visa Asia/Pacific: CVM required limit, see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aebed9ba683c113382c9a5c521d63ec27">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01</a>. [More\...](#ga7c31703a767a4eb7a8de7a708f601633)<br/> |

## DetailedDescription {#detailed-description}

see \[Visa_Card\], page A-63

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_9F51_APP_CURRENCY_CODE <a href="#ga139390165050f732efd3ae2ec2418634" id="ga139390165050f732efd3ae2ec2418634"></a>

<p>#define TAG_9F51_APP_CURRENCY_CODE   0x9F51</p>

Application Currency Code.

## TAG_9F52_DEFAULT_ACTION <a href="#gaa1834fd73125f470c7205db305fd8202" id="gaa1834fd73125f470c7205db305fd8202"></a>

<p>#define TAG_9F52_DEFAULT_ACTION   0x9F52</p>

Application Default Action (ADA)

## TAG_9F53_CONSECUTIVE_LIM_TRANS_INT <a href="#ga3ef6440dcd667069daac0bd9ce7fa724" id="ga3ef6440dcd667069daac0bd9ce7fa724"></a>

<p>#define TAG_9F53_CONSECUTIVE_LIM_TRANS_INT   0x9F53</p>

Consecutive Transaction Limit (International)

## TAG_9F54_CUMULATIVE_TRANS_LIMET <a href="#ga10ce7e78c2c6251e3a0161f08b3962f9" id="ga10ce7e78c2c6251e3a0161f08b3962f9"></a>

<p>#define TAG_9F54_CUMULATIVE_TRANS_LIMET   0x9F54</p>

Cumulative Total Transaction Amount Limit.

## TAG_9F56_ISS_AUTH_INCATOR <a href="#ga783c672ef82c5769eddff3c4009999aa" id="ga783c672ef82c5769eddff3c4009999aa"></a>

<p>#define TAG_9F56_ISS_AUTH_INCATOR   0x9F56</p>

Issuer Authentication Indicator.

## TAG_9F5A_APP_PROGRAM_ID <a href="#gab2e09e3e34f3443924d6cd79016cadec" id="gab2e09e3e34f3443924d6cd79016cadec"></a>

<p>#define TAG_9F5A_APP_PROGRAM_ID   0x9F5A</p>

Application Program Identifier.

## TAG_9F5D_VISA_AOSA <a href="#gaf91a05658cd7bfa54c3670018779e15c" id="gaf91a05658cd7bfa54c3670018779e15c"></a>

<p>#define TAG_9F5D_VISA_AOSA   0x9F5D</p>

Contactless: Available Offline Spending Amount (AOSA)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aef18e9908577cfd63de0f526111ed110">EMV_CTLS_TRANSRES_STRUCT::T_9F5D_CL_VISA_AOSA</a>.

## TAG_9F66_TTQ <a href="#ga30362da6e863c342f262adc3cafb680e" id="ga30362da6e863c342f262adc3cafb680e"></a>

<p>#define TAG_9F66_TTQ   0x9F66</p>

VISA TTQ (Contactless only)

used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalTransactionQualifier_9F66</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalTransactionQualifier_9F66</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalTransactionQualifier_9F66</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalTransactionQualifier_9F66</a>

## TAG_9F6C_VISA_CTQ <a href="#ga9f71361a75edb14683a5b2e3049ee1b0" id="ga9f71361a75edb14683a5b2e3049ee1b0"></a>

<p>#define TAG_9F6C_VISA_CTQ   0x9F6C</p>

VISA CTQ (Contactless only)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a1c4c877fb876a73190afc8f7465b11ec">EMV_CTLS_TRANSRES_STRUCT::T_9F6C_CL_VISA_CTQ</a>.

## TAG_9F6D_TRM_APP_VERSION_NB <a href="#ga730c9d269d7399e534a6d1aad81f4fef" id="ga730c9d269d7399e534a6d1aad81f4fef"></a>

<p>#define TAG_9F6D_TRM_APP_VERSION_NB   0x9F6D</p>

Terminal application version number.

## TAG_DF01_PK_CVM_REQ_LIMIT <a href="#ga7c31703a767a4eb7a8de7a708f601633" id="ga7c31703a767a4eb7a8de7a708f601633"></a>

<p>#define TAG_DF01_PK_CVM_REQ_LIMIT   0xDF01</p>

Visa Asia/Pacific: CVM required limit, see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aebed9ba683c113382c9a5c521d63ec27">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01</a>.

## TAG_DF02_PK_FLOOR_LIMIT <a href="#gaefbade1401fdfc9c4f1f95779a8a8262" id="gaefbade1401fdfc9c4f1f95779a8a8262"></a>

<p>#define TAG_DF02_PK_FLOOR_LIMIT   0xDF02</p>

Visa Asia/Pacific: Floor limit, see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5cd219dce6240490e80e2580f9328966">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02</a>.

## TAG_DF04_PK_CVM_REQUIREMENTS <a href="#gad00d4584c8dece99bc5afe17252560c0" id="gad00d4584c8dece99bc5afe17252560c0"></a>

<p>#define TAG_DF04_PK_CVM_REQUIREMENTS   0xDF04</p>

Visa Asia/Pacific: CVM requirements, see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afbcb816298915570ae5e47a12805913d">EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04</a>.

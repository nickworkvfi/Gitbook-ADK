---
hidden: true
title: "StartTransaction: Which data was received from the chipTransaction execution » Output data"
---

[Macros](#define-members)

Contents of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab08da8ecbb047104d0c58e6f0ea141ee">EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data</a>. [More\...](#details)

Collaboration diagram for StartTransaction: Which data was received from the chip:

![](group___d_e_f___d_f61___s_e_l_e_c_t.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [DF61_SEL_DF62_ERRORDATA](#gae16afced77441224b7e157570e996cc1)   0x01 |
|   | B1b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab039fd7178746c8616263dae202cde7b">EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData</a>. [More\...](#gae16afced77441224b7e157570e996cc1)<br/> |
| #define  | [DF61_SEL_AGREED_APPNAME](#ga2378e97de62fd2f6cea91be559d35f88)   0x02 |
|   | B1b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a1a933985680b099e926e54086a602c12">EMV_CT_SELECTRES_STRUCT::AppName</a>. [More\...](#ga2378e97de62fd2f6cea91be559d35f88)<br/> |
| #define  | [DF61_SEL_50_APPLICATION_NAME](#ga2a136de4b885bf0efb99812105a2dbf9)   0x04 |
|   | B1b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9ceca12ea3832abf7776d72645b86686">EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName</a>. [More\...](#ga2a136de4b885bf0efb99812105a2dbf9)<br/> |
| #define  | [DF61_SEL_9F11_CODE_TABLE](#ga6f2019836faeb7c75c5d00fe56a7aa78)   0x08 |
|   | B1b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a77254a708d1c2d25bb365a8599c6789a">EMV_CT_SELECTRES_STRUCT::T_9F11_CodeTable</a>. [More\...](#ga6f2019836faeb7c75c5d00fe56a7aa78)<br/> |
| #define  | [DF61_SEL_5F2D_LANG_PREF](#gafcefbcbc00c29d564087846a0a82c51e)   0x10 |
|   | B1b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab78d27dc34487f922049e2708780f0b5">EMV_CT_SELECTRES_STRUCT::T_5F2D_Lang_Pref</a>. [More\...](#gafcefbcbc00c29d564087846a0a82c51e)<br/> |
| #define  | [DF61_SEL_84_DF_NAME](#gad8fc10e41c5b76dd2ce850889ee55740)   0x20 |
|   | B1b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a461cb8e7a2ca9d6005f976b490a4bf9f">EMV_CT_SELECTRES_STRUCT::T_84_DFName</a>. [More\...](#gad8fc10e41c5b76dd2ce850889ee55740)<br/> |
| #define  | [DF61_SEL_9F12_PREF_NAME](#gaae585dbc65a76a43d4db141d251dd241)   0x40 |
|   | B1b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a28ecfde503701d9121a947f569c269f5">EMV_CT_SELECTRES_STRUCT::T_9F12_PreferredName</a>. [More\...](#gaae585dbc65a76a43d4db141d251dd241)<br/> |
| #define  | [DF61_SEL_9F63_DISPTXT](#ga49f1c3ce5ba96754ae16bcdc63fc8a18)   0x80 |
|   | B1b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3f81899cf94ac8087ae118d0a74bd5a7">EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText</a>. [More\...](#ga49f1c3ce5ba96754ae16bcdc63fc8a18)<br/> |
| #define  | [DF61_SEL_MID_DATA](#gab5055a2e8156f9bc4d8046062b7cff34)   0x01 |
|   | B2b1: MID data, <a href="group___a_d_k___t_r_x___e_x_e_c.md#afc03bd4acdbf2ecf08cf25237e1c0672">EMV_CT_SELECTRES_STRUCT::countFallbackMS</a>, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0ce15f8ce270bd4f01e39c8c8dd5953b">EMV_CT_SELECTRES_STRUCT::xFallback_MS</a>. [More\...](#gab5055a2e8156f9bc4d8046062b7cff34)<br/> |
| #define  | [DF61_SEL_PDOL](#ga4af2dc6442c7ca54af02b6a86ad0d609)   0x02 |
|   | B2b2: PDOL info, <a href="group___a_d_k___t_r_x___e_x_e_c.md#af6254dc7c96cee5696e56da49cd643d7">EMV_CT_SELECTRES_STRUCT::PDOL_tags</a>. [More\...](#ga4af2dc6442c7ca54af02b6a86ad0d609)<br/> |
| #define  | [DF61_SEL_AID](#ga81ed11f4cb6d5283679be158b8ee9afe)   0x04 |
|   | B2b3: selected AID, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ad8a8786ab1f6da49f730d02490857d10">EMV_CT_SELECTRES_STRUCT::T_DF04_Aidselected</a>. [More\...](#ga81ed11f4cb6d5283679be158b8ee9afe)<br/> |
| #define  | [DF61_SEL_CANDIDATES](#gaf3edcff6fa8fb5b900af301310f2a113)   0x08 |
|   | B2b4: candidate list, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ad45fa4ce538993473540188bd35612b3">EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates</a>. [More\...](#gaf3edcff6fa8fb5b900af301310f2a113)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab08da8ecbb047104d0c58e6f0ea141ee">EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## DF61_SEL_50_APPLICATION_NAME <a href="#ga2a136de4b885bf0efb99812105a2dbf9" id="ga2a136de4b885bf0efb99812105a2dbf9"></a>

<p>#define DF61_SEL_50_APPLICATION_NAME   0x04</p>

B1b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9ceca12ea3832abf7776d72645b86686">EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName</a>.

## DF61_SEL_5F2D_LANG_PREF <a href="#gafcefbcbc00c29d564087846a0a82c51e" id="gafcefbcbc00c29d564087846a0a82c51e"></a>

<p>#define DF61_SEL_5F2D_LANG_PREF   0x10</p>

B1b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab78d27dc34487f922049e2708780f0b5">EMV_CT_SELECTRES_STRUCT::T_5F2D_Lang_Pref</a>.

## DF61_SEL_84_DF_NAME <a href="#gad8fc10e41c5b76dd2ce850889ee55740" id="gad8fc10e41c5b76dd2ce850889ee55740"></a>

<p>#define DF61_SEL_84_DF_NAME   0x20</p>

B1b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a461cb8e7a2ca9d6005f976b490a4bf9f">EMV_CT_SELECTRES_STRUCT::T_84_DFName</a>.

## DF61_SEL_9F11_CODE_TABLE <a href="#ga6f2019836faeb7c75c5d00fe56a7aa78" id="ga6f2019836faeb7c75c5d00fe56a7aa78"></a>

<p>#define DF61_SEL_9F11_CODE_TABLE   0x08</p>

B1b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a77254a708d1c2d25bb365a8599c6789a">EMV_CT_SELECTRES_STRUCT::T_9F11_CodeTable</a>.

## DF61_SEL_9F12_PREF_NAME <a href="#gaae585dbc65a76a43d4db141d251dd241" id="gaae585dbc65a76a43d4db141d251dd241"></a>

<p>#define DF61_SEL_9F12_PREF_NAME   0x40</p>

B1b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a28ecfde503701d9121a947f569c269f5">EMV_CT_SELECTRES_STRUCT::T_9F12_PreferredName</a>.

## DF61_SEL_9F63_DISPTXT <a href="#ga49f1c3ce5ba96754ae16bcdc63fc8a18" id="ga49f1c3ce5ba96754ae16bcdc63fc8a18"></a>

<p>#define DF61_SEL_9F63_DISPTXT   0x80</p>

B1b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3f81899cf94ac8087ae118d0a74bd5a7">EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText</a>.

## DF61_SEL_AGREED_APPNAME <a href="#ga2378e97de62fd2f6cea91be559d35f88" id="ga2378e97de62fd2f6cea91be559d35f88"></a>

<p>#define DF61_SEL_AGREED_APPNAME   0x02</p>

B1b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a1a933985680b099e926e54086a602c12">EMV_CT_SELECTRES_STRUCT::AppName</a>.

## DF61_SEL_AID <a href="#ga81ed11f4cb6d5283679be158b8ee9afe" id="ga81ed11f4cb6d5283679be158b8ee9afe"></a>

<p>#define DF61_SEL_AID   0x04</p>

B2b3: selected AID, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ad8a8786ab1f6da49f730d02490857d10">EMV_CT_SELECTRES_STRUCT::T_DF04_Aidselected</a>.

## DF61_SEL_CANDIDATES <a href="#gaf3edcff6fa8fb5b900af301310f2a113" id="gaf3edcff6fa8fb5b900af301310f2a113"></a>

<p>#define DF61_SEL_CANDIDATES   0x08</p>

B2b4: candidate list, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ad45fa4ce538993473540188bd35612b3">EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates</a>.

## DF61_SEL_DF62_ERRORDATA <a href="#gae16afced77441224b7e157570e996cc1" id="gae16afced77441224b7e157570e996cc1"></a>

<p>#define DF61_SEL_DF62_ERRORDATA   0x01</p>

B1b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab039fd7178746c8616263dae202cde7b">EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData</a>.

## DF61_SEL_MID_DATA <a href="#gab5055a2e8156f9bc4d8046062b7cff34" id="gab5055a2e8156f9bc4d8046062b7cff34"></a>

<p>#define DF61_SEL_MID_DATA   0x01</p>

B2b1: MID data, <a href="group___a_d_k___t_r_x___e_x_e_c.md#afc03bd4acdbf2ecf08cf25237e1c0672">EMV_CT_SELECTRES_STRUCT::countFallbackMS</a>, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0ce15f8ce270bd4f01e39c8c8dd5953b">EMV_CT_SELECTRES_STRUCT::xFallback_MS</a>.

## DF61_SEL_PDOL <a href="#ga4af2dc6442c7ca54af02b6a86ad0d609" id="ga4af2dc6442c7ca54af02b6a86ad0d609"></a>

<p>#define DF61_SEL_PDOL   0x02</p>

B2b2: PDOL info, <a href="group___a_d_k___t_r_x___e_x_e_c.md#af6254dc7c96cee5696e56da49cd643d7">EMV_CT_SELECTRES_STRUCT::PDOL_tags</a>.

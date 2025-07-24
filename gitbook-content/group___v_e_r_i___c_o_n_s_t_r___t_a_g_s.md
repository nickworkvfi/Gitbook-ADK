---
hidden: true
title: Constructed tagsGeneral topics » Serialization » BER TLV tags used by EMV ADK » Verifone internal tags
---

[Modules](#groups) \| [Macros](#define-members)

Collaboration diagram for Constructed tags:

![](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.png)

|  |  |
|----|----|
| Modules |  |
|   | <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a> |
|   | <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___c_o_n_s_t_r.md">Constructed tags for new scheme specific config interface</a> |

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_E2_FORMAT_B](#gafc9636e2e6f07e6711a527883900e61c)   0xE2 |
|   | Format: Binary. [More\...](#gafc9636e2e6f07e6711a527883900e61c)<br/> |
| #define  | [TAG_E3_FORMAT_N](#ga921898c1164e3bcb44ca2a78bd28bf5a)   0xE3 |
|   | Format: Numeric. [More\...](#ga921898c1164e3bcb44ca2a78bd28bf5a)<br/> |
| #define  | [TAG_E4_FORMAT_CN](#ga6b04aad1b0a3d5fe14fc86f12b6ca2c6)   0xE4 |
|   | Format: Compressed Numeric. [More\...](#ga6b04aad1b0a3d5fe14fc86f12b6ca2c6)<br/> |
| #define  | [TAG_E5_FORMAT_A](#gab684ebc7f6bfb422d1af2d1985563014)   0xE5 |
|   | Format: Alphabetic. [More\...](#gab684ebc7f6bfb422d1af2d1985563014)<br/> |
| #define  | [TAG_E6_FORMAT_AN](#ga6beb5c015ec1d897ac240bafe1ed9a53)   0xE6 |
|   | Format: Alpha Numeric. [More\...](#ga6beb5c015ec1d897ac240bafe1ed9a53)<br/> |
| #define  | [TAG_E7_FORMAT_ANS](#gaebdbe25c32f1af5298ac17278c9af80a)   0xE7 |
|   | Format: Alphanumeric Special data elements. [More\...](#gaebdbe25c32f1af5298ac17278c9af80a)<br/> |
| #define  | [TAG_F0_EMV_TEMPLATE](#ga08c17dcb68a90b0a1916a713c3d33219)   0xF0 |
|   | All BER TLV streams are packed in this tag. [More\...](#ga08c17dcb68a90b0a1916a713c3d33219)<br/> |
| #define  | [TAG_DOM_CHIP](#ga4867cbd479109dca0043fac71180f63e)   0xFF01 |
|   | Contact only: Domestic chip applications. [More\...](#ga4867cbd479109dca0043fac71180f63e)<br/> |
| #define  | [TAG_FALLBACK_MSR](#ga6d9fe9c9623eb1558647e7c5913e11a5)   0xFF02 |
|   | Contact only: MSR data. [More\...](#ga6d9fe9c9623eb1558647e7c5913e11a5)<br/> |
| #define  | [TAG_CAND_LIST](#ga6ac06f1d6d42a5e163c1be8d5323e7d6)   0xFF03 |
|   | Contact only: Candidate list. [More\...](#ga6ac06f1d6d42a5e163c1be8d5323e7d6)<br/> |
| #define  | [TAG_KEY](#ga9808b602dc1ad05f05054f288e80099e)   0xFF04 |
|   | CAP keys, usd to enclose data of <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t">EMV_CTLS_CAPREAD_STRUCT</a>. [More\...](#ga9808b602dc1ad05f05054f288e80099e)<br/> |
| #define  | [TAG_HOTLIST](#ga0f16662930e6aee415115b531fcefa47)   0xFF05 |
|   | Hot list, used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ad0009ae39ab506b4158d8002d4b33da5">EMV_CTLS_TERMDATA_STRUCT::Hotlist</a>. [More\...](#ga0f16662930e6aee415115b531fcefa47)<br/> |
| #define  | [TAG_FF10_DE_DET_DATA](#ga8cba9e04a32675f7ed16d81f3af7ebed)   0xFF10 |
|   | DataExchange, constructed tag for DET data, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>. [More\...](#ga8cba9e04a32675f7ed16d81f3af7ebed)<br/> |
| #define  | [TAG_EXCLUDE_COMBO](#ga13bc9955418fefffabd468d2608411c5)   0xFF69 |
|   | used to serialise data from <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ad87415ec2bcc2e988462d432a46f8065">EMV_CTLS_APPS_SELECT_TYPE::ExcludeCombos</a> [More\...](#ga13bc9955418fefffabd468d2608411c5)<br/> |
| #define  | [TAG_FF8F13_SIGNAL_MSG](#gafbd7dbf0777c05e3767966068ce6d1a7)   0xFF8F13 |
|   | PayPass 3, tag for reading list of User Interface Request Signals with <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags</a>. [More\...](#gafbd7dbf0777c05e3767966068ce6d1a7)<br/> |
| #define  | [TAG_FF8F14_SIGNAL_OUT](#ga338143e80bd209946f38173c58585d8f)   0xFF8F14 |
|   | PayPass 3, tag for reading list of Outcome Signals with <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags</a>. [More\...](#ga338143e80bd209946f38173c58585d8f)<br/> |
| #define  | [TAG_FF8013_SIGNAL_MSG](#ga21557a8556930c9e5b4c372ab421b5a4)   [TAG_FF8F13_SIGNAL_MSG](#gafbd7dbf0777c05e3767966068ce6d1a7) |
| #define  | [TAG_FF8014_SIGNAL_OUT](#gac96efced4e96c5919ea42bdddd2252a4)   [TAG_FF8F14_SIGNAL_OUT](#ga338143e80bd209946f38173c58585d8f) |
| #define  | [TAG_E2_FORMAT_B](#gafc9636e2e6f07e6711a527883900e61c)   0xE2 |
|   | Data objects with format \"b\"<br/>Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. [More\...](#gafc9636e2e6f07e6711a527883900e61c)<br/> |
| #define  | [TAG_E3_FORMAT_N](#ga921898c1164e3bcb44ca2a78bd28bf5a)   0xE3 |
|   | Data objects with format \"n\"<br/>Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. [More\...](#ga921898c1164e3bcb44ca2a78bd28bf5a)<br/> |
| #define  | [TAG_E4_FORMAT_CN](#ga6b04aad1b0a3d5fe14fc86f12b6ca2c6)   0xE4 |
|   | Data objects with format \"cn\"<br/>Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. [More\...](#ga6b04aad1b0a3d5fe14fc86f12b6ca2c6)<br/> |
| #define  | [TAG_E5_FORMAT_A](#gab684ebc7f6bfb422d1af2d1985563014)   0xE5 |
|   | Data objects with format \"a\"<br/>Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. [More\...](#gab684ebc7f6bfb422d1af2d1985563014)<br/> |
| #define  | [TAG_E6_FORMAT_AN](#ga6beb5c015ec1d897ac240bafe1ed9a53)   0xE6 |
|   | Data objects with format \"an\"<br/>Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. [More\...](#ga6beb5c015ec1d897ac240bafe1ed9a53)<br/> |
| #define  | [TAG_E7_FORMAT_ANS](#gaebdbe25c32f1af5298ac17278c9af80a)   0xE7 |
|   | Data objects with format \"ans\"<br/>Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. [More\...](#gaebdbe25c32f1af5298ac17278c9af80a)<br/> |
| #define  | [TAG_F0_EMV_TEMPLATE](#ga08c17dcb68a90b0a1916a713c3d33219)   0xF0 |
|   | All BER TLV streams are packed in this tag. [More\...](#ga08c17dcb68a90b0a1916a713c3d33219)<br/> |
| #define  | [TAG_DOM_CHIP](#ga4867cbd479109dca0043fac71180f63e)   0xFF01 |
|   | constructed tag for domestic chip applications [More\...](#ga4867cbd479109dca0043fac71180f63e)<br/> |
| #define  | [TAG_FALLBACK_MSR](#ga6d9fe9c9623eb1558647e7c5913e11a5)   0xFF02 |
|   | constructed tag for MSR data [More\...](#ga6d9fe9c9623eb1558647e7c5913e11a5)<br/> |
| #define  | [TAG_CAND_LIST](#ga6ac06f1d6d42a5e163c1be8d5323e7d6)   0xFF03 |
|   | constructed tag for candidate list, used for EMV_CT_CANDIDATE_TYPE, <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___cand_list_type">EMV_CT_CandListType</a> and within EMV_CT_updateTxnTags [More\...](#ga6ac06f1d6d42a5e163c1be8d5323e7d6)<br/> |
| #define  | [TAG_KEY](#ga9808b602dc1ad05f05054f288e80099e)   0xFF04 |
|   | constructed tag for CAP keys [More\...](#ga9808b602dc1ad05f05054f288e80099e)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_CAND_LIST\[1/2\] <a href="#ga6ac06f1d6d42a5e163c1be8d5323e7d6" id="ga6ac06f1d6d42a5e163c1be8d5323e7d6"></a> {#tag_cand_list-12}

<p>#define TAG_CAND_LIST   0xFF03</p>

constructed tag for candidate list, used for EMV_CT_CANDIDATE_TYPE, <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___cand_list_type">EMV_CT_CandListType</a> and within EMV_CT_updateTxnTags

## TAG_CAND_LIST\[2/2\] <a href="#ga6ac06f1d6d42a5e163c1be8d5323e7d6" id="ga6ac06f1d6d42a5e163c1be8d5323e7d6"></a> {#tag_cand_list-22}

<p>#define TAG_CAND_LIST   0xFF03</p>

Contact only: Candidate list.

## TAG_DOM_CHIP\[1/2\] <a href="#ga4867cbd479109dca0043fac71180f63e" id="ga4867cbd479109dca0043fac71180f63e"></a> {#tag_dom_chip-12}

<p>#define TAG_DOM_CHIP   0xFF01</p>

constructed tag for domestic chip applications

## TAG_DOM_CHIP\[2/2\] <a href="#ga4867cbd479109dca0043fac71180f63e" id="ga4867cbd479109dca0043fac71180f63e"></a> {#tag_dom_chip-22}

<p>#define TAG_DOM_CHIP   0xFF01</p>

Contact only: Domestic chip applications.

## TAG_E2_FORMAT_B\[1/2\] <a href="#gafc9636e2e6f07e6711a527883900e61c" id="gafc9636e2e6f07e6711a527883900e61c"></a> {#tag_e2_format_b-12}

<p>#define TAG_E2_FORMAT_B   0xE2</p>

Data objects with format \"b\"
Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.

## TAG_E2_FORMAT_B\[2/2\] <a href="#gafc9636e2e6f07e6711a527883900e61c" id="gafc9636e2e6f07e6711a527883900e61c"></a> {#tag_e2_format_b-22}

<p>#define TAG_E2_FORMAT_B   0xE2</p>

Format: Binary.

## TAG_E3_FORMAT_N\[1/2\] <a href="#ga921898c1164e3bcb44ca2a78bd28bf5a" id="ga921898c1164e3bcb44ca2a78bd28bf5a"></a> {#tag_e3_format_n-12}

<p>#define TAG_E3_FORMAT_N   0xE3</p>

Data objects with format \"n\"
Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.

## TAG_E3_FORMAT_N\[2/2\] <a href="#ga921898c1164e3bcb44ca2a78bd28bf5a" id="ga921898c1164e3bcb44ca2a78bd28bf5a"></a> {#tag_e3_format_n-22}

<p>#define TAG_E3_FORMAT_N   0xE3</p>

Format: Numeric.

## TAG_E4_FORMAT_CN\[1/2\] <a href="#ga6b04aad1b0a3d5fe14fc86f12b6ca2c6" id="ga6b04aad1b0a3d5fe14fc86f12b6ca2c6"></a> {#tag_e4_format_cn-12}

<p>#define TAG_E4_FORMAT_CN   0xE4</p>

Data objects with format \"cn\"
Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.

## TAG_E4_FORMAT_CN\[2/2\] <a href="#ga6b04aad1b0a3d5fe14fc86f12b6ca2c6" id="ga6b04aad1b0a3d5fe14fc86f12b6ca2c6"></a> {#tag_e4_format_cn-22}

<p>#define TAG_E4_FORMAT_CN   0xE4</p>

Format: Compressed Numeric.

## TAG_E5_FORMAT_A\[1/2\] <a href="#gab684ebc7f6bfb422d1af2d1985563014" id="gab684ebc7f6bfb422d1af2d1985563014"></a> {#tag_e5_format_a-12}

<p>#define TAG_E5_FORMAT_A   0xE5</p>

Data objects with format \"a\"
Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.

## TAG_E5_FORMAT_A\[2/2\] <a href="#gab684ebc7f6bfb422d1af2d1985563014" id="gab684ebc7f6bfb422d1af2d1985563014"></a> {#tag_e5_format_a-22}

<p>#define TAG_E5_FORMAT_A   0xE5</p>

Format: Alphabetic.

## TAG_E6_FORMAT_AN\[1/2\] <a href="#ga6beb5c015ec1d897ac240bafe1ed9a53" id="ga6beb5c015ec1d897ac240bafe1ed9a53"></a> {#tag_e6_format_an-12}

<p>#define TAG_E6_FORMAT_AN   0xE6</p>

Data objects with format \"an\"
Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.

## TAG_E6_FORMAT_AN\[2/2\] <a href="#ga6beb5c015ec1d897ac240bafe1ed9a53" id="ga6beb5c015ec1d897ac240bafe1ed9a53"></a> {#tag_e6_format_an-22}

<p>#define TAG_E6_FORMAT_AN   0xE6</p>

Format: Alpha Numeric.

## TAG_E7_FORMAT_ANS\[1/2\] <a href="#gaebdbe25c32f1af5298ac17278c9af80a" id="gaebdbe25c32f1af5298ac17278c9af80a"></a> {#tag_e7_format_ans-12}

<p>#define TAG_E7_FORMAT_ANS   0xE7</p>

Data objects with format \"ans\"
Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.

## TAG_E7_FORMAT_ANS\[2/2\] <a href="#gaebdbe25c32f1af5298ac17278c9af80a" id="gaebdbe25c32f1af5298ac17278c9af80a"></a> {#tag_e7_format_ans-22}

<p>#define TAG_E7_FORMAT_ANS   0xE7</p>

Format: Alphanumeric Special data elements.

Contain a single character per byte. The permitted characters and their coding are shown in the Common Character Set table in \[EMV 4.3 Book 4\], Annex B.
There is one exception: The permitted characters for Application Preferred Name are the non-control characters defined in the ISO/IEC 8859 part designated in the Issuer Code Table Index associated with the Application Preferred Name.

## TAG_EXCLUDE_COMBO <a href="#ga13bc9955418fefffabd468d2608411c5" id="ga13bc9955418fefffabd468d2608411c5"></a>

<p>#define TAG_EXCLUDE_COMBO   0xFF69</p>

used to serialise data from <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ad87415ec2bcc2e988462d432a46f8065">EMV_CTLS_APPS_SELECT_TYPE::ExcludeCombos</a>

## TAG_F0_EMV_TEMPLATE\[1/2\] <a href="#ga08c17dcb68a90b0a1916a713c3d33219" id="ga08c17dcb68a90b0a1916a713c3d33219"></a> {#tag_f0_emv_template-12}

<p>#define TAG_F0_EMV_TEMPLATE   0xF0</p>

All BER TLV streams are packed in this tag.

## TAG_F0_EMV_TEMPLATE\[2/2\] <a href="#ga08c17dcb68a90b0a1916a713c3d33219" id="ga08c17dcb68a90b0a1916a713c3d33219"></a> {#tag_f0_emv_template-22}

<p>#define TAG_F0_EMV_TEMPLATE   0xF0</p>

All BER TLV streams are packed in this tag.

## TAG_FALLBACK_MSR\[1/2\] <a href="#ga6d9fe9c9623eb1558647e7c5913e11a5" id="ga6d9fe9c9623eb1558647e7c5913e11a5"></a> {#tag_fallback_msr-12}

<p>#define TAG_FALLBACK_MSR   0xFF02</p>

constructed tag for MSR data

## TAG_FALLBACK_MSR\[2/2\] <a href="#ga6d9fe9c9623eb1558647e7c5913e11a5" id="ga6d9fe9c9623eb1558647e7c5913e11a5"></a> {#tag_fallback_msr-22}

<p>#define TAG_FALLBACK_MSR   0xFF02</p>

Contact only: MSR data.

## TAG_FF10_DE_DET_DATA <a href="#ga8cba9e04a32675f7ed16d81f3af7ebed" id="ga8cba9e04a32675f7ed16d81f3af7ebed"></a>

<p>#define TAG_FF10_DE_DET_DATA   0xFF10</p>

DataExchange, constructed tag for DET data, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>.

## TAG_FF8013_SIGNAL_MSG <a href="#ga21557a8556930c9e5b4c372ab421b5a4" id="ga21557a8556930c9e5b4c372ab421b5a4"></a>

<p>#define TAG_FF8013_SIGNAL_MSG   [TAG_FF8F13_SIGNAL_MSG](#gafbd7dbf0777c05e3767966068ce6d1a7)</p>

**<a href="deprecated.md#_deprecated000009">Deprecated:</a>** use [TAG_FF8F13_SIGNAL_MSG](#gafbd7dbf0777c05e3767966068ce6d1a7 "PayPass 3, tag for reading list of User Interface Request Signals with EMV_CTLS_fetchTxnTags.") instead

## TAG_FF8014_SIGNAL_OUT <a href="#gac96efced4e96c5919ea42bdddd2252a4" id="gac96efced4e96c5919ea42bdddd2252a4"></a>

<p>#define TAG_FF8014_SIGNAL_OUT   [TAG_FF8F14_SIGNAL_OUT](#ga338143e80bd209946f38173c58585d8f)</p>

**<a href="deprecated.md#_deprecated000010">Deprecated:</a>** use [TAG_FF8F14_SIGNAL_OUT](#ga338143e80bd209946f38173c58585d8f "PayPass 3, tag for reading list of Outcome Signals with EMV_CTLS_fetchTxnTags.") instead

## TAG_FF8F13_SIGNAL_MSG <a href="#gafbd7dbf0777c05e3767966068ce6d1a7" id="gafbd7dbf0777c05e3767966068ce6d1a7"></a>

<p>#define TAG_FF8F13_SIGNAL_MSG   0xFF8F13</p>

PayPass 3, tag for reading list of User Interface Request Signals with <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags</a>.

## TAG_FF8F14_SIGNAL_OUT <a href="#ga338143e80bd209946f38173c58585d8f" id="ga338143e80bd209946f38173c58585d8f"></a>

<p>#define TAG_FF8F14_SIGNAL_OUT   0xFF8F14</p>

PayPass 3, tag for reading list of Outcome Signals with <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags</a>.

## TAG_HOTLIST <a href="#ga0f16662930e6aee415115b531fcefa47" id="ga0f16662930e6aee415115b531fcefa47"></a>

<p>#define TAG_HOTLIST   0xFF05</p>

Hot list, used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ad0009ae39ab506b4158d8002d4b33da5">EMV_CTLS_TERMDATA_STRUCT::Hotlist</a>.

## TAG_KEY\[1/2\] <a href="#ga9808b602dc1ad05f05054f288e80099e" id="ga9808b602dc1ad05f05054f288e80099e"></a> {#tag_key-12}

<p>#define TAG_KEY   0xFF04</p>

constructed tag for CAP keys

## TAG_KEY\[2/2\] <a href="#ga9808b602dc1ad05f05054f288e80099e" id="ga9808b602dc1ad05f05054f288e80099e"></a> {#tag_key-22}

<p>#define TAG_KEY   0xFF04</p>

CAP keys, usd to enclose data of <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t">EMV_CTLS_CAPREAD_STRUCT</a>.

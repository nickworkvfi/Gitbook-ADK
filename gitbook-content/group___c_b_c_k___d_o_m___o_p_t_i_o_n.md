---
hidden: true
title: Domestic callback optionsTransaction execution » Callback functions
---

[Macros](#define-members)

Calling application may set some options for further transaction processing. [More\...](#details)

Collaboration diagram for Domestic callback options:

![](group___c_b_c_k___d_o_m___o_p_t_i_o_n.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [DOM_OPTION_LEN](#gafedbc0e41ccab2706d5e5cf65893f506)   3 |
|   | Length of `pucDomOption` in bytes. [More\...](#gafedbc0e41ccab2706d5e5cf65893f506)<br/> |
| #define  | [DOM_OPTION_AUSTRIAN_NGV](#gae73c669e0402299c4832fdb4210354bc)   0x01 |
|   | B1b1: Continue transaction as Austrian Non Guaranteed Payment. [More\...](#gae73c669e0402299c4832fdb4210354bc)<br/> |
| #define  | [DOM_OPTION_TRX_INTERCEPT](#ga24620bac9d70ac65d32489a717944433)   0x02 |
|   | B1b2: Intercept transaction. Context will remain. Repetition trx must be started with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga82cd8d9a5c42444fa1461d5afc5a311a">EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT</a>. [More\...](#ga24620bac9d70ac65d32489a717944433)<br/> |
| #define  | [DOM_OPTION_ABORT_NO_TEXT](#gae712580240b3496ff0c8d3ea22f4fea9)   0x04 |
|   | B1b3: if <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>) returns <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga7045deba09a19eea4f7df8881a08b807">EMV_ADK_ABORT</a> in <a href="group___t_l_v___c_b_c_k___t_l_v.md#ga188ecff68e5b74f42c28d8faa67778d9">TAG_DF76_CBK_MANIPUL_TRX</a>: Don\'t display texts <a href="group___a_p_p_l_i___t_e_x_t_s.md#gafc7f3b612dd3b550ffe3c68c5cf091cb">EMV_ADK_TXT_PROCESSING_ERROR</a> and <a href="group___a_p_p_l_i___t_e_x_t_s.md#gae9a6dcc7dff865a5dc948c5ff0dd93ae">EMV_ADK_TXT_REMOVE_CARD</a>. [More\...](#gae712580240b3496ff0c8d3ea22f4fea9)<br/> |
| #define  | [DOM_OPTION_TIP_OFF](#gae9fa3993b2c1c6417f5e237a6c138cb9)   0x08 |
|   | B1b4: convert a tip capable transaction back to sale transaction (used for countries where tip with signature is done outside the scope of EMV and returns the txn to a normal sale transaction) [More\...](#gae9fa3993b2c1c6417f5e237a6c138cb9)<br/> |

## DetailedDescription {#detailed-description}

Calling application may set some options for further transaction processing.

Defines for <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf0830fa6ef53350bbe99ac9efcf38055">TAG_DF5D_DOM_OPTION</a> in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>)

## MacroDefinition Documentation {#macro-definition-documentation}

## DOM_OPTION_ABORT_NO_TEXT <a href="#gae712580240b3496ff0c8d3ea22f4fea9" id="gae712580240b3496ff0c8d3ea22f4fea9"></a>

<p>#define DOM_OPTION_ABORT_NO_TEXT   0x04</p>

B1b3: if <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>) returns <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga7045deba09a19eea4f7df8881a08b807">EMV_ADK_ABORT</a> in <a href="group___t_l_v___c_b_c_k___t_l_v.md#ga188ecff68e5b74f42c28d8faa67778d9">TAG_DF76_CBK_MANIPUL_TRX</a>: Don\'t display texts <a href="group___a_p_p_l_i___t_e_x_t_s.md#gafc7f3b612dd3b550ffe3c68c5cf091cb">EMV_ADK_TXT_PROCESSING_ERROR</a> and <a href="group___a_p_p_l_i___t_e_x_t_s.md#gae9a6dcc7dff865a5dc948c5ff0dd93ae">EMV_ADK_TXT_REMOVE_CARD</a>.

## DOM_OPTION_AUSTRIAN_NGV <a href="#gae73c669e0402299c4832fdb4210354bc" id="gae73c669e0402299c4832fdb4210354bc"></a>

<p>#define DOM_OPTION_AUSTRIAN_NGV   0x01</p>

B1b1: Continue transaction as Austrian Non Guaranteed Payment.

## DOM_OPTION_LEN <a href="#gafedbc0e41ccab2706d5e5cf65893f506" id="gafedbc0e41ccab2706d5e5cf65893f506"></a>

<p>#define DOM_OPTION_LEN   3</p>

Length of `pucDomOption` in bytes.

## DOM_OPTION_TIP_OFF <a href="#gae9fa3993b2c1c6417f5e237a6c138cb9" id="gae9fa3993b2c1c6417f5e237a6c138cb9"></a>

<p>#define DOM_OPTION_TIP_OFF   0x08</p>

B1b4: convert a tip capable transaction back to sale transaction (used for countries where tip with signature is done outside the scope of EMV and returns the txn to a normal sale transaction)

## DOM_OPTION_TRX_INTERCEPT <a href="#ga24620bac9d70ac65d32489a717944433" id="ga24620bac9d70ac65d32489a717944433"></a>

<p>#define DOM_OPTION_TRX_INTERCEPT   0x02</p>

B1b2: Intercept transaction. Context will remain. Repetition trx must be started with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga82cd8d9a5c42444fa1461d5afc5a311a">EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT</a>.

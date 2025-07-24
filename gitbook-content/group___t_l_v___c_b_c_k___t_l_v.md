---
hidden: true
title: Tags for callback functionsGeneral topics » Serialization » BER TLV tags used by EMV ADK » Verifone internal tags » Primitive tags
---

[Macros](#define-members)

Used in function <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a>. [More\...](#details)

Collaboration diagram for Tags for callback functions:

![](group___t_l_v___c_b_c_k___t_l_v.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_DF6D_CBK_CARDHOLDER_RET](#ga0658b15204497033996cde25fa51de70)   0xDF6D |
|   | return value of cardholder information [More\...](#ga0658b15204497033996cde25fa51de70)<br/> |
| #define  | [TAG_DF6E_CBK_CARDHOLDERINFO](#gab104c4f8b104fe62519f79eed1c0d865)   0xDF6E |
|   | cardholder information during transaction, e.g. Wrong PIN, see <a href="group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#gac55e7ad56ad5c7a9598bfd06615016c2">eCardholderInfo</a> [More\...](#gab104c4f8b104fe62519f79eed1c0d865)<br/> |
| #define  | [TAG_DF6F_CBK_PIN_ICC_RESP](#ga4ccd96dda551451a84e7c7d21fbd6d11)   0xDF6F |
| #define  | [TAG_DF70_CBK_MERCHINFO](#gadb20bec2ea43ca880918b66a83f9f9c9)   0xDF70 |
|   | MerchantInfo(), see <a href="group___m_e_r_c_h___i_n_f_o.md#ga148ac478aee8b4d199c94f412b67875a">EMV_ADK_MerchantInfo</a>. [More\...](#gadb20bec2ea43ca880918b66a83f9f9c9)<br/> |
| #define  | [TAG_DF71_CBK_AMOUNTCONF](#gaaa1584fd7168b5fc96f50a51b97b15f6)   0xDF71 |
|   | `amount` confirmation result (TRUE/FALSE) [More\...](#gaaa1584fd7168b5fc96f50a51b97b15f6)<br/> |
| #define  | [TAG_DF72_CBK_BLACKLIST](#ga1768b84097a1d50df88863566897c9eb)   0xDF72 |
|   | Indicator if used PAN is in blacklist, TRUE/FALSE. [More\...](#ga1768b84097a1d50df88863566897c9eb)<br/> |
| #define  | [TAG_DF73_CBK_TRANSLOG](#gabdaff06d3ecc07bc38b49eb7a6b3da44)   0xDF73 |
|   | `stored` amount of the selected PAN [More\...](#gabdaff06d3ecc07bc38b49eb7a6b3da44)<br/> |
| #define  | [TAG_DF74_CBK_SELECTOR](#ga40ea6cec9913e25bd353e4adfd440451)   0xDF74 |
|   | see `ucSelector`, allowed values see <a href="group___d_e_f___c_b_k___s_e_l.md">Types of external application selection</a> [More\...](#ga40ea6cec9913e25bd353e4adfd440451)<br/> |
| #define  | [TAG_DF75_CBK_APP_NO](#ga48500ab87c68d9e4042ba3420393e7bc)   0xDF75 |
|   | If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list. [More\...](#ga48500ab87c68d9e4042ba3420393e7bc)<br/> |
| #define  | [TAG_DF6C_CBK_REPEAT](#ga6951c652d92531826b367791f40c35a6)   0xDF6C |
|   | Decide if ADK should repeat the callback call or not<br/>(1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat<br/>see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gababcd780ecf1c9d400ecfde024d910fe">TAG_BF04_CBK_REDUCE_CAND</a>. [More\...](#ga6951c652d92531826b367791f40c35a6)<br/> |
| #define  | [TAG_DF76_CBK_MANIPUL_TRX](#ga188ecff68e5b74f42c28d8faa67778d9)   0xDF76 |
|   | Return value to EMV ADK in callback <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>)<br/>Possible values: [More\...](#ga188ecff68e5b74f42c28d8faa67778d9)<br/> |
| #define  | [TAG_DF77_CBK_LANGUAGE](#ga5bee6d3b1dd2be64fc3ee28eac0ec7de)   0xDF77 |
| #define  | [TAG_DF78_CBK_SEL_OPT](#gac3d88f150879a4853741019de995b0f7)   0xDF78 |
|   | `tucOptions` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a> [More\...](#gac3d88f150879a4853741019de995b0f7)<br/> |
| #define  | [TAG_DF79_CBK_PIN_INFO](#gae1140e3c457d68c0dd795ffad8c84b29)   0xDF79 |
|   | EMV ADK to application: PIN type requested (<a href="group___a_d_k___p_i_n___i_n_p_u_t.md">Input params for PIN entry</a>)<br/>Application to EMV ADK: PIN entry result (see <a href="group___a_d_k___p_i_n___r_e_t_u_r_n.md">Return values</a>) [More\...](#gae1140e3c457d68c0dd795ffad8c84b29)<br/> |
| #define  | [TAG_DF7A_CBK_PIN_KEY_DATA](#ga265096b43775bdbc63d40542ecd1c182)   0xDF7A |
|   | PIN (ICC) key modulus. [More\...](#ga265096b43775bdbc63d40542ecd1c182)<br/> |
| #define  | [TAG_DF7B_CBK_PIN_KEY_EXP](#ga3a0fef9b855fb73018ddf60453df207c)   0xDF7B |
|   | PIN (ICC) key exponent. [More\...](#ga3a0fef9b855fb73018ddf60453df207c)<br/> |
| #define  | [TAG_DF7C_CBK_MERCHINFO_RET](#ga27371b7e2a72e6c133f2c52fda3bb9f7)   0xDF7C |
|   | transfer return value of merchant information callback (EMV_CT_CALLBACK_FnT with TAG_BF01_CBK_MERCHINFO) to EMV ADK [More\...](#ga27371b7e2a72e6c133f2c52fda3bb9f7)<br/> |
| #define  | [TAG_DF7D_CBK_DCC_CHECK](#ga866150b1aa87d89f0783c4dd4eeb3d59)   0xDF7D |
|   | DCC mode, see <a href="group___d_c_c___m_o_d_e.md">DCC mode</a>. [More\...](#ga866150b1aa87d89f0783c4dd4eeb3d59)<br/> |
| #define  | [TAG_DF7E_CBK_DOM_APP_RES](#gaa554c75ed30b7eeb73ff2a981b8878eb)   0xDF7E |
|   | result of domestic app processing: keep in list or remove from list (<a href="group___d_e_f___c_b_k___d_o_m_a_p_p.md">Modes of domestic application handling</a>) [More\...](#gaa554c75ed30b7eeb73ff2a981b8878eb)<br/> |
| #define  | [TAG_DF7F_CBK_COMM_ERR](#ga4f60c8e0ba68025a32ff0c793c13c5f5)   0xDF7F |
|   | During execution of callback function a communication error occured.<br/>Indicator to be set by calling application.<br/>Will result in abort of transaction (<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>) [More\...](#ga4f60c8e0ba68025a32ff0c793c13c5f5)<br/> |
| #define  | [TAG_DFD001_MANI_CANDLIST](#ga6ffd0dbf05f4bc5f92c172be34fcedb5)   0xDFD001 |
|   | Modified candidate list (only valid in reentrance mode using the candidate list manipulation option <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4fe0d7ada26ddf2370e623d67a5f00d4">EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates</a> inside <a href="group___a_d_k___t_r_x___e_x_e_c.md#a8753a5e6226c6aae1dbd68db619d9cc0">EMV_CT_SELECT_STRUCT::SEL_Data</a>) [More\...](#ga6ffd0dbf05f4bc5f92c172be34fcedb5)<br/> |
| #define  | [TAG_DFD002_APPNAME_CHOSEN](#ga6da91676c24b73c6264fa4868ce80114)   0xDFD002 |
|   | chosen application name, either 9F12, 50 or default label according EMVCo rules and application configuration, used in callback functions with application label [More\...](#ga6da91676c24b73c6264fa4868ce80114)<br/> |
| #define  | [TAG_DFD003_STORED_AMOUNT](#gab01e518c4b6844e4e0a4c256993a82c7)   0xDFD003 |
|   | configure transaction log amount via EMV_CT_updateTxnTag for the given card PAN when using re-entrance mode [More\...](#gab01e518c4b6844e4e0a4c256993a82c7)<br/> |
| #define  | [TAG_DFD00B_APPNAME_UFT8](#gafa1df1b64dc7e2046cb76065c3eafcab)   0xDFD00B |
|   | application name [TAG_DFD002_APPNAME_CHOSEN](#ga6da91676c24b73c6264fa4868ce80114 "chosen application name, either 9F12, 50 or default label according EMVCo rules and application confi...") converted to UTF-8, used in callback functions with application label [More\...](#gafa1df1b64dc7e2046cb76065c3eafcab)<br/> |

## DetailedDescription {#detailed-description}

Used in function <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_DF6C_CBK_REPEAT <a href="#ga6951c652d92531826b367791f40c35a6" id="ga6951c652d92531826b367791f40c35a6"></a>

<p>#define TAG_DF6C_CBK_REPEAT   0xDF6C</p>

Decide if ADK should repeat the callback call or not
(1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat
see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gababcd780ecf1c9d400ecfde024d910fe">TAG_BF04_CBK_REDUCE_CAND</a>.

## TAG_DF6D_CBK_CARDHOLDER_RET <a href="#ga0658b15204497033996cde25fa51de70" id="ga0658b15204497033996cde25fa51de70"></a>

<p>#define TAG_DF6D_CBK_CARDHOLDER_RET   0xDF6D</p>

return value of cardholder information

## TAG_DF6E_CBK_CARDHOLDERINFO <a href="#gab104c4f8b104fe62519f79eed1c0d865" id="gab104c4f8b104fe62519f79eed1c0d865"></a>

<p>#define TAG_DF6E_CBK_CARDHOLDERINFO   0xDF6E</p>

cardholder information during transaction, e.g. Wrong PIN, see <a href="group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#gac55e7ad56ad5c7a9598bfd06615016c2">eCardholderInfo</a>

## TAG_DF6F_CBK_PIN_ICC_RESP <a href="#ga4ccd96dda551451a84e7c7d21fbd6d11" id="ga4ccd96dda551451a84e7c7d21fbd6d11"></a>

<p>#define TAG_DF6F_CBK_PIN_ICC_RESP   0xDF6F</p>

**<a href="deprecated.md#_deprecated000141">Deprecated:</a>** ICC answer to VERIFY command (2 byte SW1/2), not needed anymore, EMV ADK stores this info internally during <a href="group___f_u_n_c___f_l_o_w.md#ga895cb054c344d011e9e3c6acc4aadafe">EMV_CT_Send_PIN_Offline()</a>

## TAG_DF70_CBK_MERCHINFO <a href="#gadb20bec2ea43ca880918b66a83f9f9c9" id="gadb20bec2ea43ca880918b66a83f9f9c9"></a>

<p>#define TAG_DF70_CBK_MERCHINFO   0xDF70</p>

MerchantInfo(), see <a href="group___m_e_r_c_h___i_n_f_o.md#ga148ac478aee8b4d199c94f412b67875a">EMV_ADK_MerchantInfo</a>.

## TAG_DF71_CBK_AMOUNTCONF <a href="#gaaa1584fd7168b5fc96f50a51b97b15f6" id="gaaa1584fd7168b5fc96f50a51b97b15f6"></a>

<p>#define TAG_DF71_CBK_AMOUNTCONF   0xDF71</p>

`amount` confirmation result (TRUE/FALSE)

## TAG_DF72_CBK_BLACKLIST <a href="#ga1768b84097a1d50df88863566897c9eb" id="ga1768b84097a1d50df88863566897c9eb"></a>

<p>#define TAG_DF72_CBK_BLACKLIST   0xDF72</p>

Indicator if used PAN is in blacklist, TRUE/FALSE.

## TAG_DF73_CBK_TRANSLOG <a href="#gabdaff06d3ecc07bc38b49eb7a6b3da44" id="gabdaff06d3ecc07bc38b49eb7a6b3da44"></a>

<p>#define TAG_DF73_CBK_TRANSLOG   0xDF73</p>

`stored` amount of the selected PAN

## TAG_DF74_CBK_SELECTOR <a href="#ga40ea6cec9913e25bd353e4adfd440451" id="ga40ea6cec9913e25bd353e4adfd440451"></a>

<p>#define TAG_DF74_CBK_SELECTOR   0xDF74</p>

see `ucSelector`, allowed values see <a href="group___d_e_f___c_b_k___s_e_l.md">Types of external application selection</a>

## TAG_DF75_CBK_APP_NO <a href="#ga48500ab87c68d9e4042ba3420393e7bc" id="ga48500ab87c68d9e4042ba3420393e7bc"></a>

<p>#define TAG_DF75_CBK_APP_NO   0xDF75</p>

If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list.

## TAG_DF76_CBK_MANIPUL_TRX <a href="#ga188ecff68e5b74f42c28d8faa67778d9" id="ga188ecff68e5b74f42c28d8faa67778d9"></a>

<p>#define TAG_DF76_CBK_MANIPUL_TRX   0xDF76</p>

Return value to EMV ADK in callback <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>)
Possible values:

- <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga493578e3e0e9112d42d209b783fe1f60">EMV_ADK_ARQC</a> to let transaction continue but force to go online
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga956701431c0cef09072c040d816e5d7b">EMV_ADK_AAC</a> to let transaction terminate with AAC in GENAC1
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga7045deba09a19eea4f7df8881a08b807">EMV_ADK_ABORT</a> and any other value to let transaction abort

## TAG_DF77_CBK_LANGUAGE <a href="#ga5bee6d3b1dd2be64fc3ee28eac0ec7de" id="ga5bee6d3b1dd2be64fc3ee28eac0ec7de"></a>

<p>#define TAG_DF77_CBK_LANGUAGE   0xDF77</p>

**<a href="deprecated.md#_deprecated000142">Deprecated:</a>** EMV ADK does not send selected customer language and it ignores this parameter if put in

## TAG_DF78_CBK_SEL_OPT <a href="#gac3d88f150879a4853741019de995b0f7" id="gac3d88f150879a4853741019de995b0f7"></a>

<p>#define TAG_DF78_CBK_SEL_OPT   0xDF78</p>

`tucOptions` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>

## TAG_DF79_CBK_PIN_INFO <a href="#gae1140e3c457d68c0dd795ffad8c84b29" id="gae1140e3c457d68c0dd795ffad8c84b29"></a>

<p>#define TAG_DF79_CBK_PIN_INFO   0xDF79</p>

EMV ADK to application: PIN type requested (<a href="group___a_d_k___p_i_n___i_n_p_u_t.md">Input params for PIN entry</a>)
Application to EMV ADK: PIN entry result (see <a href="group___a_d_k___p_i_n___r_e_t_u_r_n.md">Return values</a>)

## TAG_DF7A_CBK_PIN_KEY_DATA <a href="#ga265096b43775bdbc63d40542ecd1c182" id="ga265096b43775bdbc63d40542ecd1c182"></a>

<p>#define TAG_DF7A_CBK_PIN_KEY_DATA   0xDF7A</p>

PIN (ICC) key modulus.

## TAG_DF7B_CBK_PIN_KEY_EXP <a href="#ga3a0fef9b855fb73018ddf60453df207c" id="ga3a0fef9b855fb73018ddf60453df207c"></a>

<p>#define TAG_DF7B_CBK_PIN_KEY_EXP   0xDF7B</p>

PIN (ICC) key exponent.

## TAG_DF7C_CBK_MERCHINFO_RET <a href="#ga27371b7e2a72e6c133f2c52fda3bb9f7" id="ga27371b7e2a72e6c133f2c52fda3bb9f7"></a>

<p>#define TAG_DF7C_CBK_MERCHINFO_RET   0xDF7C</p>

transfer return value of merchant information callback (EMV_CT_CALLBACK_FnT with TAG_BF01_CBK_MERCHINFO) to EMV ADK

## TAG_DF7D_CBK_DCC_CHECK <a href="#ga866150b1aa87d89f0783c4dd4eeb3d59" id="ga866150b1aa87d89f0783c4dd4eeb3d59"></a>

<p>#define TAG_DF7D_CBK_DCC_CHECK   0xDF7D</p>

DCC mode, see <a href="group___d_c_c___m_o_d_e.md">DCC mode</a>.

## TAG_DF7E_CBK_DOM_APP_RES <a href="#gaa554c75ed30b7eeb73ff2a981b8878eb" id="gaa554c75ed30b7eeb73ff2a981b8878eb"></a>

<p>#define TAG_DF7E_CBK_DOM_APP_RES   0xDF7E</p>

result of domestic app processing: keep in list or remove from list (<a href="group___d_e_f___c_b_k___d_o_m_a_p_p.md">Modes of domestic application handling</a>)

## TAG_DF7F_CBK_COMM_ERR <a href="#ga4f60c8e0ba68025a32ff0c793c13c5f5" id="ga4f60c8e0ba68025a32ff0c793c13c5f5"></a>

<p>#define TAG_DF7F_CBK_COMM_ERR   0xDF7F</p>

During execution of callback function a communication error occured.
Indicator to be set by calling application.
Will result in abort of transaction (<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>)

## TAG_DFD001_MANI_CANDLIST <a href="#ga6ffd0dbf05f4bc5f92c172be34fcedb5" id="ga6ffd0dbf05f4bc5f92c172be34fcedb5"></a>

<p>#define TAG_DFD001_MANI_CANDLIST   0xDFD001</p>

Modified candidate list (only valid in reentrance mode using the candidate list manipulation option <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4fe0d7ada26ddf2370e623d67a5f00d4">EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates</a> inside <a href="group___a_d_k___t_r_x___e_x_e_c.md#a8753a5e6226c6aae1dbd68db619d9cc0">EMV_CT_SELECT_STRUCT::SEL_Data</a>)

## TAG_DFD002_APPNAME_CHOSEN <a href="#ga6da91676c24b73c6264fa4868ce80114" id="ga6da91676c24b73c6264fa4868ce80114"></a>

<p>#define TAG_DFD002_APPNAME_CHOSEN   0xDFD002</p>

chosen application name, either 9F12, 50 or default label according EMVCo rules and application configuration, used in callback functions with application label

## TAG_DFD003_STORED_AMOUNT <a href="#gab01e518c4b6844e4e0a4c256993a82c7" id="gab01e518c4b6844e4e0a4c256993a82c7"></a>

<p>#define TAG_DFD003_STORED_AMOUNT   0xDFD003</p>

configure transaction log amount via EMV_CT_updateTxnTag for the given card PAN when using re-entrance mode

## TAG_DFD00B_APPNAME_UFT8 <a href="#gafa1df1b64dc7e2046cb76065c3eafcab" id="gafa1df1b64dc7e2046cb76065c3eafcab"></a>

<p>#define TAG_DFD00B_APPNAME_UFT8   0xDFD00B</p>

application name [TAG_DFD002_APPNAME_CHOSEN](#ga6da91676c24b73c6264fa4868ce80114 "chosen application name, either 9F12, 50 or default label according EMVCo rules and application confi...") converted to UTF-8, used in callback functions with application label

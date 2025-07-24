---
hidden: true
title: Defines for special transaction configurationConfiguration » Application data
---

[Macros](#define-members)

Special transactions, transaction types and flows. [More\...](#details)

Collaboration diagram for Defines for special transaction configuration:

![](group___s_p_e_c_i_a_l___t_r_x_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_EMV_ADK_MANUAL_REVERSAL_BYTE](#ga7202569b2762f206a2285efa29fb2bc2)   0 |
|   | byte for configuration of manual reversal [More\...](#ga7202569b2762f206a2285efa29fb2bc2)<br/> |
| #define  | [EMV_ADK_MANUAL_REVERSAL_NIBBLE](#gafa96196deed546963b891e4e003c4af9)   \>\> 4 & 0x0F |
|   | nibble for configuration of manual reversal [More\...](#gafa96196deed546963b891e4e003c4af9)<br/> |
| #define  | [EMV_ADK_REFUND_BYTE](#gaaeca402b298b32204ccd7ead5099711a)   0 |
|   | byte for configuration of refund [More\...](#gaaeca402b298b32204ccd7ead5099711a)<br/> |
| #define  | [EMV_ADK_REFUND_NIBBLE](#ga7039e7109163f62d9e9b1ae75d2c5b9e)   & 0x0F |
|   | nibble for configuration of refund [More\...](#ga7039e7109163f62d9e9b1ae75d2c5b9e)<br/> |
| #define  | [EMV_ADK_EMV_ADK_RESERVATION_BYTE](#gae346012c0d19fa6f7eb45b91931cdd2a)   1 |
|   | byte for configuration of reservation [More\...](#gae346012c0d19fa6f7eb45b91931cdd2a)<br/> |
| #define  | [EMV_ADK_RESERVATION_NIBBLE](#ga8883a4abbc4c9a4ff1d0d04d293551fe)   \>\> 4 & 0x0F |
|   | nibble for configuration of reservation [More\...](#ga8883a4abbc4c9a4ff1d0d04d293551fe)<br/> |
| #define  | [EMV_ADK_TIP_BYTE](#ga94e977d7738de920e0fb4014df66e4fb)   1 |
|   | byte for configuration of tip (gratuity) [More\...](#ga94e977d7738de920e0fb4014df66e4fb)<br/> |
| #define  | [EMV_ADK_TIP_NIBBLE](#ga7244e0c110d753f37865fa24333fd2ec)   & 0x0F |
|   | nibble for configuration of tip (gratuity) [More\...](#ga7244e0c110d753f37865fa24333fd2ec)<br/> |
| #define  | [EMV_ADK_REFERRAL_BYTE](#gaf93007826337d6c58ca7b846b84fa656)   2 |
|   | byte for configuration of referral<br/>not used for contactless [More\...](#gaf93007826337d6c58ca7b846b84fa656)<br/> |
| #define  | [EMV_ADK_REFERRAL_NIBBLE](#gae1efb0a95d1fc749c9cbf26346ca1719)   \>\> 4 & 0x0F |
|   | nibble for configuration of referral<br/>not used for contactless [More\...](#gae1efb0a95d1fc749c9cbf26346ca1719)<br/> |
| #define  | [EMV_ADK_VOICEAUT_BYTE](#ga38142b9746b0c7f21dbc5fc636384b54)   2 |
|   | byte for configuration of voice authorization<br/>not used for contactless [More\...](#ga38142b9746b0c7f21dbc5fc636384b54)<br/> |
| #define  | [EMV_ADK_VOICEAUT_NIBBLE](#gaae6e9d4466ac1cd32a3ada32c5bbe102)   & 0x0F |
|   | nibble for configuration of voice authorization<br/>not used for contactless [More\...](#gaae6e9d4466ac1cd32a3ada32c5bbe102)<br/> |
| #define  | [EMV_ADK_RFU_MODE_BYTE](#gab455093efe9c7c5404afe5c80c7e1287)   3 |
|   | byte RFU [More\...](#gab455093efe9c7c5404afe5c80c7e1287)<br/> |
| #define  | [EMV_ADK_RFU_MODE_NIBBLE](#ga4f7664a4f1a2bef9a63546146558b649)   \>\> 4 & 0x0F |
|   | nibble RFU [More\...](#ga4f7664a4f1a2bef9a63546146558b649)<br/> |
| #define  | [EMV_ADK_FALLBACK_AFTER_CVM_BYTE](#gabacf717c5dc2ac7384db3e832da09477)   3 |
|   | byte for configuration of \"fallback to magstripe after start of cardholder verification or early PIN entry allowed\"<br/>not used for contactless [More\...](#gabacf717c5dc2ac7384db3e832da09477)<br/> |
| #define  | [EMV_ADK_FALLBACK_AFTER_CVM_NIBBLE](#ga5f66d7a538a6c040c5a82ca9715938cb)   & 0x0F |
|   | nibble for configuration of \"fallback to magstripe after start of cardholder verification or early PIN entry allowed\"<br/>not used for contactless [More\...](#ga5f66d7a538a6c040c5a82ca9715938cb)<br/> |
| #define  | [EMV_ADK_IGNORE_CARD_ERROR_BYTE](#gaad39a4d4fb662a2ea5e08f0701b230e0)   4 |
|   | byte for configuration of \"ignore card error after issuer authorization\" [More\...](#gaad39a4d4fb662a2ea5e08f0701b230e0)<br/> |
| #define  | [EMV_ADK_IGNORE_CARD_ERROR_NIBBLE](#gab1f5eb6ff8bb92e90599b438f237e479)   \>\> 4 & 0x0F |
|   | nibble for configuration of \"ignore card error after issuer authorization\" [More\...](#gab1f5eb6ff8bb92e90599b438f237e479)<br/> |
| #define  | [EMV_ADK_MANUAL_REVERSAL_NO](#ga0b59fb801ea7d0de4aa6ec06be4af62b)   0 |
|   | future use [More\...](#ga0b59fb801ea7d0de4aa6ec06be4af62b)<br/> |
| #define  | [EMV_ADK_MANUAL_REVERSAL_A](#ga251deb35698ee246d759cb28afa0c08b)   1 |
|   | future use [More\...](#ga251deb35698ee246d759cb28afa0c08b)<br/> |
| #define  | [EMV_ADK_MANUAL_REVERSAL_B](#ga997cfbf7b11c32d41485cefcc76a9dde)   2 |
|   | future use [More\...](#ga997cfbf7b11c32d41485cefcc76a9dde)<br/> |
| #define  | [EMV_ADK_REFUND_NO](#ga086e86c03cd9784d34e4bcfae8f7a359)   0 |
|   | refund forbidden [More\...](#ga086e86c03cd9784d34e4bcfae8f7a359)<br/> |
| #define  | [EMV_ADK_REFUND_YES](#gab876922d002680ba54292d9a0d59ab58)   1 |
|   | refund allowed [More\...](#gab876922d002680ba54292d9a0d59ab58)<br/> |
| #define  | [EMV_ADK_RESERVATION_NO](#ga525d5e9bfd74f7bfb40f3423497177d7)   0 |
|   | reservation forbidden [More\...](#ga525d5e9bfd74f7bfb40f3423497177d7)<br/> |
| #define  | [EMV_ADK_RESERVATION_A](#ga8da532b9a94cf32b2c8adb5202c3928c)   1 |
|   | reservation variant a (without partial reversal) allowed, no amount increment (Reservierung-Erhoehung)<br/>according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga627576793b48b221be2b730980fbd249">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A</a><br/>for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a> [More\...](#ga8da532b9a94cf32b2c8adb5202c3928c)<br/> |
| #define  | [EMV_ADK_RESERVATION_A_PLUS](#ga1293a1632952de877c91dbc35ccf1aa8)   2 |
|   | reservation variant a (without partial reversal) allowed, amount increment (Reservierung-Erhoehung) allowed<br/>according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga627576793b48b221be2b730980fbd249">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A</a> and <a href="group___t_r_a_n_s___t_y_p_e_s.md#gae4dfcb64069c00ea212290887d63d39b">EMV_ADK_TRAN_TYPE_INCREMENT_A</a><br/>for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a> [More\...](#ga1293a1632952de877c91dbc35ccf1aa8)<br/> |
| #define  | [EMV_ADK_RESERVATION_B](#ga7bf02e9a784f8cc7eb06f291bb18f27f)   3 |
|   | reservation variant b (with partial reversal) allowed, no amount increment (Reservierung-Erhoehung)<br/>according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9a4143056a3510f541555b4412ebe24b">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B</a><br/>for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a> [More\...](#ga7bf02e9a784f8cc7eb06f291bb18f27f)<br/> |
| #define  | [EMV_ADK_RESERVATION_B_PLUS](#gaefbc5d6d550c056bc098390f3d1c4fa3)   4 |
|   | reservation variant b (with partial reversal) allowed, amount increment (Reservierung-Erhoehung) allowed<br/>according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9a4143056a3510f541555b4412ebe24b">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B</a> and <a href="group___t_r_a_n_s___t_y_p_e_s.md#gaef5a04977330d6ec069bf2564719c018">EMV_ADK_TRAN_TYPE_INCREMENT_B</a><br/>for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a> [More\...](#gaefbc5d6d550c056bc098390f3d1c4fa3)<br/> |
| #define  | [EMV_ADK_RESERVATION_B_OFFLINE](#gadd05b4bb20c8cf6a5adafd82e7835578)   5 |
|   | reservation variant b (with partial reversal) allowed, no amount increment (Reservierung-Erhoehung)<br/>offline allowed (will be without partial reversal)<br/>according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9a4143056a3510f541555b4412ebe24b">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B</a><br/>for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a> [More\...](#gadd05b4bb20c8cf6a5adafd82e7835578)<br/> |
| #define  | [EMV_ADK_TIP_NO](#ga89c93daaa639b2689e0e8b09acb9d20a)   0 |
|   | tip (gratuity) forbidden: Transactions with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga12c06bd005321a960ce0dbc67bfae76a">EMV_ADK_TRAN_TYPE_TIP</a> are handled like ordinary <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9641f6f9edd014d72d3011013c9f2c1c">EMV_ADK_TRAN_TYPE_GOODS_SERVICE</a> [More\...](#ga89c93daaa639b2689e0e8b09acb9d20a)<br/> |
| #define  | [EMV_ADK_TIP_YES](#ga5e02b6d92609cbf2d289012106089195)   1 |
|   | tip (gratuity) allowed: Transactions with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga12c06bd005321a960ce0dbc67bfae76a">EMV_ADK_TRAN_TYPE_TIP</a> are forced online and marked with <a href="group___s_t_a_t_u_s___i_n_f_o.md#ga0dbf5267bd45cb900a9fcbf27337f5a0">EMV_ADK_SI_GICC_TIPPABLE</a> if applicable [More\...](#ga5e02b6d92609cbf2d289012106089195)<br/> |
| #define  | [EMV_ADK_TIP_MODE_TIPPABLE](#gaff3b2a33376323bc4abee4ef8ab8d31f)   1 |
|   | tip (gratuity) same as [EMV_ADK_TIP_YES](#ga5e02b6d92609cbf2d289012106089195 "tip (gratuity) allowed: Transactions with EMV_ADK_TRAN_TYPE_TIP are forced online and marked with EMV...") [More\...](#gaff3b2a33376323bc4abee4ef8ab8d31f)<br/> |
| #define  | [EMV_ADK_TIP_MODE_MIXED](#ga2c1a34c82897d34377bbcdfd85b00f56)   2 |
|   | tip (gratuity) tip mode depends on CVM [More\...](#ga2c1a34c82897d34377bbcdfd85b00f56)<br/> |
| #define  | [EMV_ADK_TIP_MODE_INPUT](#ga95fafffcf4a95f2bbc339b8034f62d8f)   3 |
|   | tip (gratuity) allowed as payment with tip input [More\...](#ga95fafffcf4a95f2bbc339b8034f62d8f)<br/> |
| #define  | [EMV_ADK_TIP_NON_REFUSED](#ga1424282b7ee853b27158d4195bcf484e)   3 |
|   | tip (gratuity) allowed if the card holder did not explicitly disliked it, that is there was a tip amount input dialog and she confirmed zero amount. [More\...](#ga1424282b7ee853b27158d4195bcf484e)<br/> |
| #define  | [EMV_ADK_REFERRAL_NO](#ga0979f67a348b1e176b3de5ea597f494d)   0 |
|   | voice referral forbidden<br/>Will only take effect in case <a href="adk__emv__contactless__programmers__guide_8dox.md#a12aa86ad3046acf00e6471607b47af26">REFERRAL_AFTER_TRX</a> is set <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a><br/>not used for contactless [More\...](#ga0979f67a348b1e176b3de5ea597f494d)<br/> |
| #define  | [EMV_ADK_REFERRAL_YES](#gae9e243d4a817340c4ff493d32af9eeeb)   1 |
|   | voice referral allowed<br/>not used for contactless [More\...](#gae9e243d4a817340c4ff493d32af9eeeb)<br/> |
| #define  | [EMV_ADK_VOICE_NO](#gafa1365ea839eb381398645d7f0b3ac41)   0 |
|   | voice authorization forbidden<br/>not used for contactless [More\...](#gafa1365ea839eb381398645d7f0b3ac41)<br/> |
| #define  | [EMV_ADK_VOICE_YES](#gaf4dbcbf4d83287ffa0838b64b9105809)   1 |
|   | voice authorization (part of TAC-IAC-default handling) allowed<br/>*Preconditions:*<br/>- terminal is attended<br/>- <a href="adk__emv__contactless__programmers__guide_8dox.md#a12aa86ad3046acf00e6471607b47af26">REFERRAL_AFTER_TRX</a> is set (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a>)<br/>not used for contactless [More\...](#gaf4dbcbf4d83287ffa0838b64b9105809)<br/> |
| #define  | [EMV_ADK_FALLBACK_AFTER_CVM_NO](#ga9415cd28524e3d7ddf572591090e92a4)   0 |
|   | No fallback to magstripe after start cardholder verification or early PIN entry.<br/>Take care: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9d0d4cedf99a248f40af087fdfa40b51">EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling</a> must be set to <a href="adk__emv__contactless__programmers__guide_8dox.md#abad71f7d9fd5a4875f7806317632ba87">FB_GERMAN_POS_SPEC</a>.<br/>not used for contactless. [More\...](#ga9415cd28524e3d7ddf572591090e92a4)<br/> |
| #define  | [EMV_ADK_FALLBACK_AFTER_CVM_YES](#gaf275cc990cffcb01ac21d09d97303089)   1 |
|   | Fallback to magstripe after start cardholder verification or early PIN entry.<br/>Take care: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9d0d4cedf99a248f40af087fdfa40b51">EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling</a> must be set to <a href="adk__emv__contactless__programmers__guide_8dox.md#abad71f7d9fd5a4875f7806317632ba87">FB_GERMAN_POS_SPEC</a>.<br/>not used for contactless. [More\...](#gaf275cc990cffcb01ac21d09d97303089)<br/> |
| #define  | [EMV_ADK_IGNORE_CARD_ERROR_NO](#ga70b113f6808165477ba42a659a8a414c)   0 |
|   | Transaction decline on card error after issuer authorization. [More\...](#ga70b113f6808165477ba42a659a8a414c)<br/> |
| #define  | [EMV_ADK_IGNORE_CARD_ERROR_YES](#ga2d671f16ded078a3e1d379bd81316e19)   1 |
|   | Ignore card errors after issuer authorization. Anyhow approve the transaction. [More\...](#ga2d671f16ded078a3e1d379bd81316e19)<br/> |
| #define  | [EMV_ADK_TRX_CONFIG_DEFAULT](#ga6cc01afa0601ada21584df60dd9a5a2a)   \"\\x21\\x20\\x11\\x00\\x00\\x00\\x00\\x00\" |
|   | Default setting, for interpretation see <a href="pg_emv_contactless_users_guide.md#subsec_emv_ctls_config_applidata_specialtrx">Configuration of application data: special transaction</a> . [More\...](#ga6cc01afa0601ada21584df60dd9a5a2a)<br/> |

## DetailedDescription {#detailed-description}

Special transactions, transaction types and flows.

see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af70ff3e0b1158f7b868655b1ef77f377">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::SpecialTRXConfig_DFAB05</a>
For explanation of the transaction types see <a href="group___t_r_a_n_s___t_y_p_e_s.md">Transaction type (Tag 9C)</a>.
For an example see <a href="pg_emv_contactless_users_guide.md#subsec_emv_ctls_config_applidata_specialtrx">Configuration of application data: special transaction</a> .

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_EMV_ADK_MANUAL_REVERSAL_BYTE <a href="#ga7202569b2762f206a2285efa29fb2bc2" id="ga7202569b2762f206a2285efa29fb2bc2"></a>

<p>#define EMV_ADK_EMV_ADK_MANUAL_REVERSAL_BYTE   0</p>

byte for configuration of manual reversal

## EMV_ADK_EMV_ADK_RESERVATION_BYTE <a href="#gae346012c0d19fa6f7eb45b91931cdd2a" id="gae346012c0d19fa6f7eb45b91931cdd2a"></a>

<p>#define EMV_ADK_EMV_ADK_RESERVATION_BYTE   1</p>

byte for configuration of reservation

## EMV_ADK_FALLBACK_AFTER_CVM_BYTE <a href="#gabacf717c5dc2ac7384db3e832da09477" id="gabacf717c5dc2ac7384db3e832da09477"></a>

<p>#define EMV_ADK_FALLBACK_AFTER_CVM_BYTE   3</p>

byte for configuration of \"fallback to magstripe after start of cardholder verification or early PIN entry allowed\"
not used for contactless

## EMV_ADK_FALLBACK_AFTER_CVM_NIBBLE <a href="#ga5f66d7a538a6c040c5a82ca9715938cb" id="ga5f66d7a538a6c040c5a82ca9715938cb"></a>

<p>#define EMV_ADK_FALLBACK_AFTER_CVM_NIBBLE   & 0x0F</p>

nibble for configuration of \"fallback to magstripe after start of cardholder verification or early PIN entry allowed\"
not used for contactless

## EMV_ADK_FALLBACK_AFTER_CVM_NO <a href="#ga9415cd28524e3d7ddf572591090e92a4" id="ga9415cd28524e3d7ddf572591090e92a4"></a>

<p>#define EMV_ADK_FALLBACK_AFTER_CVM_NO   0</p>

No fallback to magstripe after start cardholder verification or early PIN entry.
Take care: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9d0d4cedf99a248f40af087fdfa40b51">EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling</a> must be set to <a href="adk__emv__contactless__programmers__guide_8dox.md#abad71f7d9fd5a4875f7806317632ba87">FB_GERMAN_POS_SPEC</a>.
not used for contactless.

## EMV_ADK_FALLBACK_AFTER_CVM_YES <a href="#gaf275cc990cffcb01ac21d09d97303089" id="gaf275cc990cffcb01ac21d09d97303089"></a>

<p>#define EMV_ADK_FALLBACK_AFTER_CVM_YES   1</p>

Fallback to magstripe after start cardholder verification or early PIN entry.
Take care: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9d0d4cedf99a248f40af087fdfa40b51">EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling</a> must be set to <a href="adk__emv__contactless__programmers__guide_8dox.md#abad71f7d9fd5a4875f7806317632ba87">FB_GERMAN_POS_SPEC</a>.
not used for contactless.

## EMV_ADK_IGNORE_CARD_ERROR_BYTE <a href="#gaad39a4d4fb662a2ea5e08f0701b230e0" id="gaad39a4d4fb662a2ea5e08f0701b230e0"></a>

<p>#define EMV_ADK_IGNORE_CARD_ERROR_BYTE   4</p>

byte for configuration of \"ignore card error after issuer authorization\"

## EMV_ADK_IGNORE_CARD_ERROR_NIBBLE <a href="#gab1f5eb6ff8bb92e90599b438f237e479" id="gab1f5eb6ff8bb92e90599b438f237e479"></a>

<p>#define EMV_ADK_IGNORE_CARD_ERROR_NIBBLE   \>\> 4 & 0x0F</p>

nibble for configuration of \"ignore card error after issuer authorization\"

## EMV_ADK_IGNORE_CARD_ERROR_NO <a href="#ga70b113f6808165477ba42a659a8a414c" id="ga70b113f6808165477ba42a659a8a414c"></a>

<p>#define EMV_ADK_IGNORE_CARD_ERROR_NO   0</p>

Transaction decline on card error after issuer authorization.

## EMV_ADK_IGNORE_CARD_ERROR_YES <a href="#ga2d671f16ded078a3e1d379bd81316e19" id="ga2d671f16ded078a3e1d379bd81316e19"></a>

<p>#define EMV_ADK_IGNORE_CARD_ERROR_YES   1</p>

Ignore card errors after issuer authorization. Anyhow approve the transaction.

## EMV_ADK_MANUAL_REVERSAL_A <a href="#ga251deb35698ee246d759cb28afa0c08b" id="ga251deb35698ee246d759cb28afa0c08b"></a>

<p>#define EMV_ADK_MANUAL_REVERSAL_A   1</p>

future use

## EMV_ADK_MANUAL_REVERSAL_B <a href="#ga997cfbf7b11c32d41485cefcc76a9dde" id="ga997cfbf7b11c32d41485cefcc76a9dde"></a>

<p>#define EMV_ADK_MANUAL_REVERSAL_B   2</p>

future use

## EMV_ADK_MANUAL_REVERSAL_NIBBLE <a href="#gafa96196deed546963b891e4e003c4af9" id="gafa96196deed546963b891e4e003c4af9"></a>

<p>#define EMV_ADK_MANUAL_REVERSAL_NIBBLE   \>\> 4 & 0x0F</p>

nibble for configuration of manual reversal

## EMV_ADK_MANUAL_REVERSAL_NO <a href="#ga0b59fb801ea7d0de4aa6ec06be4af62b" id="ga0b59fb801ea7d0de4aa6ec06be4af62b"></a>

<p>#define EMV_ADK_MANUAL_REVERSAL_NO   0</p>

future use

## EMV_ADK_REFERRAL_BYTE <a href="#gaf93007826337d6c58ca7b846b84fa656" id="gaf93007826337d6c58ca7b846b84fa656"></a>

<p>#define EMV_ADK_REFERRAL_BYTE   2</p>

byte for configuration of referral
not used for contactless

## EMV_ADK_REFERRAL_NIBBLE <a href="#gae1efb0a95d1fc749c9cbf26346ca1719" id="gae1efb0a95d1fc749c9cbf26346ca1719"></a>

<p>#define EMV_ADK_REFERRAL_NIBBLE   \>\> 4 & 0x0F</p>

nibble for configuration of referral
not used for contactless

## EMV_ADK_REFERRAL_NO <a href="#ga0979f67a348b1e176b3de5ea597f494d" id="ga0979f67a348b1e176b3de5ea597f494d"></a>

<p>#define EMV_ADK_REFERRAL_NO   0</p>

voice referral forbidden
Will only take effect in case <a href="adk__emv__contactless__programmers__guide_8dox.md#a12aa86ad3046acf00e6471607b47af26">REFERRAL_AFTER_TRX</a> is set <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a>
not used for contactless

## EMV_ADK_REFERRAL_YES <a href="#gae9e243d4a817340c4ff493d32af9eeeb" id="gae9e243d4a817340c4ff493d32af9eeeb"></a>

<p>#define EMV_ADK_REFERRAL_YES   1</p>

voice referral allowed
not used for contactless

## EMV_ADK_REFUND_BYTE <a href="#gaaeca402b298b32204ccd7ead5099711a" id="gaaeca402b298b32204ccd7ead5099711a"></a>

<p>#define EMV_ADK_REFUND_BYTE   0</p>

byte for configuration of refund

## EMV_ADK_REFUND_NIBBLE <a href="#ga7039e7109163f62d9e9b1ae75d2c5b9e" id="ga7039e7109163f62d9e9b1ae75d2c5b9e"></a>

<p>#define EMV_ADK_REFUND_NIBBLE   & 0x0F</p>

nibble for configuration of refund

## EMV_ADK_REFUND_NO <a href="#ga086e86c03cd9784d34e4bcfae8f7a359" id="ga086e86c03cd9784d34e4bcfae8f7a359"></a>

<p>#define EMV_ADK_REFUND_NO   0</p>

refund forbidden

## EMV_ADK_REFUND_YES <a href="#gab876922d002680ba54292d9a0d59ab58" id="gab876922d002680ba54292d9a0d59ab58"></a>

<p>#define EMV_ADK_REFUND_YES   1</p>

refund allowed

## EMV_ADK_RESERVATION_A <a href="#ga8da532b9a94cf32b2c8adb5202c3928c" id="ga8da532b9a94cf32b2c8adb5202c3928c"></a>

<p>#define EMV_ADK_RESERVATION_A   1</p>

reservation variant a (without partial reversal) allowed, no amount increment (Reservierung-Erhoehung)
according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga627576793b48b221be2b730980fbd249">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A</a>
for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a>

## EMV_ADK_RESERVATION_A_PLUS <a href="#ga1293a1632952de877c91dbc35ccf1aa8" id="ga1293a1632952de877c91dbc35ccf1aa8"></a>

<p>#define EMV_ADK_RESERVATION_A_PLUS   2</p>

reservation variant a (without partial reversal) allowed, amount increment (Reservierung-Erhoehung) allowed
according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga627576793b48b221be2b730980fbd249">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A</a> and <a href="group___t_r_a_n_s___t_y_p_e_s.md#gae4dfcb64069c00ea212290887d63d39b">EMV_ADK_TRAN_TYPE_INCREMENT_A</a>
for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a>

## EMV_ADK_RESERVATION_B <a href="#ga7bf02e9a784f8cc7eb06f291bb18f27f" id="ga7bf02e9a784f8cc7eb06f291bb18f27f"></a>

<p>#define EMV_ADK_RESERVATION_B   3</p>

reservation variant b (with partial reversal) allowed, no amount increment (Reservierung-Erhoehung)
according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9a4143056a3510f541555b4412ebe24b">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B</a>
for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a>

## EMV_ADK_RESERVATION_B_OFFLINE <a href="#gadd05b4bb20c8cf6a5adafd82e7835578" id="gadd05b4bb20c8cf6a5adafd82e7835578"></a>

<p>#define EMV_ADK_RESERVATION_B_OFFLINE   5</p>

reservation variant b (with partial reversal) allowed, no amount increment (Reservierung-Erhoehung)
offline allowed (will be without partial reversal)
according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9a4143056a3510f541555b4412ebe24b">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B</a>
for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a>

## EMV_ADK_RESERVATION_B_PLUS <a href="#gaefbc5d6d550c056bc098390f3d1c4fa3" id="gaefbc5d6d550c056bc098390f3d1c4fa3"></a>

<p>#define EMV_ADK_RESERVATION_B_PLUS   4</p>

reservation variant b (with partial reversal) allowed, amount increment (Reservierung-Erhoehung) allowed
according <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>: <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9a4143056a3510f541555b4412ebe24b">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B</a> and <a href="group___t_r_a_n_s___t_y_p_e_s.md#gaef5a04977330d6ec069bf2564719c018">EMV_ADK_TRAN_TYPE_INCREMENT_B</a>
for exception case see <a href="adk__emv__contactless__programmers__guide_8dox.md#afd6620501e88ce7edf4aa584ee0151b6">EMV_CT_SELOP_RESERV_ALLOW_B_ON_A</a>

## EMV_ADK_RESERVATION_NIBBLE <a href="#ga8883a4abbc4c9a4ff1d0d04d293551fe" id="ga8883a4abbc4c9a4ff1d0d04d293551fe"></a>

<p>#define EMV_ADK_RESERVATION_NIBBLE   \>\> 4 & 0x0F</p>

nibble for configuration of reservation

## EMV_ADK_RESERVATION_NO <a href="#ga525d5e9bfd74f7bfb40f3423497177d7" id="ga525d5e9bfd74f7bfb40f3423497177d7"></a>

<p>#define EMV_ADK_RESERVATION_NO   0</p>

reservation forbidden

## EMV_ADK_RFU_MODE_BYTE <a href="#gab455093efe9c7c5404afe5c80c7e1287" id="gab455093efe9c7c5404afe5c80c7e1287"></a>

<p>#define EMV_ADK_RFU_MODE_BYTE   3</p>

byte RFU

## EMV_ADK_RFU_MODE_NIBBLE <a href="#ga4f7664a4f1a2bef9a63546146558b649" id="ga4f7664a4f1a2bef9a63546146558b649"></a>

<p>#define EMV_ADK_RFU_MODE_NIBBLE   \>\> 4 & 0x0F</p>

nibble RFU

## EMV_ADK_TIP_BYTE <a href="#ga94e977d7738de920e0fb4014df66e4fb" id="ga94e977d7738de920e0fb4014df66e4fb"></a>

<p>#define EMV_ADK_TIP_BYTE   1</p>

byte for configuration of tip (gratuity)

## EMV_ADK_TIP_MODE_INPUT <a href="#ga95fafffcf4a95f2bbc339b8034f62d8f" id="ga95fafffcf4a95f2bbc339b8034f62d8f"></a>

<p>#define EMV_ADK_TIP_MODE_INPUT   3</p>

tip (gratuity) allowed as payment with tip input

**<a href="deprecated.md#_deprecated000154">Deprecated:</a>** Since UI control is outside EMV ADK framework this has been deprecated.

## EMV_ADK_TIP_MODE_MIXED <a href="#ga2c1a34c82897d34377bbcdfd85b00f56" id="ga2c1a34c82897d34377bbcdfd85b00f56"></a>

<p>#define EMV_ADK_TIP_MODE_MIXED   2</p>

tip (gratuity) tip mode depends on CVM

**<a href="deprecated.md#_deprecated000153">Deprecated:</a>** handled the same way as EMV_ADK_TIP_YES

## EMV_ADK_TIP_MODE_TIPPABLE <a href="#gaff3b2a33376323bc4abee4ef8ab8d31f" id="gaff3b2a33376323bc4abee4ef8ab8d31f"></a>

<p>#define EMV_ADK_TIP_MODE_TIPPABLE   1</p>

tip (gratuity) same as [EMV_ADK_TIP_YES](#ga5e02b6d92609cbf2d289012106089195 "tip (gratuity) allowed: Transactions with EMV_ADK_TRAN_TYPE_TIP are forced online and marked with EMV...")

## EMV_ADK_TIP_NIBBLE <a href="#ga7244e0c110d753f37865fa24333fd2ec" id="ga7244e0c110d753f37865fa24333fd2ec"></a>

<p>#define EMV_ADK_TIP_NIBBLE   & 0x0F</p>

nibble for configuration of tip (gratuity)

## EMV_ADK_TIP_NO <a href="#ga89c93daaa639b2689e0e8b09acb9d20a" id="ga89c93daaa639b2689e0e8b09acb9d20a"></a>

<p>#define EMV_ADK_TIP_NO   0</p>

tip (gratuity) forbidden: Transactions with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga12c06bd005321a960ce0dbc67bfae76a">EMV_ADK_TRAN_TYPE_TIP</a> are handled like ordinary <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9641f6f9edd014d72d3011013c9f2c1c">EMV_ADK_TRAN_TYPE_GOODS_SERVICE</a>

## EMV_ADK_TIP_NON_REFUSED <a href="#ga1424282b7ee853b27158d4195bcf484e" id="ga1424282b7ee853b27158d4195bcf484e"></a>

<p>#define EMV_ADK_TIP_NON_REFUSED   3</p>

tip (gratuity) allowed if the card holder did not explicitly disliked it, that is there was a tip amount input dialog and she confirmed zero amount.

## EMV_ADK_TIP_YES <a href="#ga5e02b6d92609cbf2d289012106089195" id="ga5e02b6d92609cbf2d289012106089195"></a>

<p>#define EMV_ADK_TIP_YES   1</p>

tip (gratuity) allowed: Transactions with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga12c06bd005321a960ce0dbc67bfae76a">EMV_ADK_TRAN_TYPE_TIP</a> are forced online and marked with <a href="group___s_t_a_t_u_s___i_n_f_o.md#ga0dbf5267bd45cb900a9fcbf27337f5a0">EMV_ADK_SI_GICC_TIPPABLE</a> if applicable

## EMV_ADK_TRX_CONFIG_DEFAULT <a href="#ga6cc01afa0601ada21584df60dd9a5a2a" id="ga6cc01afa0601ada21584df60dd9a5a2a"></a>

<p>#define EMV_ADK_TRX_CONFIG_DEFAULT   \"\\x21\\x20\\x11\\x00\\x00\\x00\\x00\\x00\"</p>

Default setting, for interpretation see <a href="pg_emv_contactless_users_guide.md#subsec_emv_ctls_config_applidata_specialtrx">Configuration of application data: special transaction</a> .

## EMV_ADK_VOICE_NO <a href="#gafa1365ea839eb381398645d7f0b3ac41" id="gafa1365ea839eb381398645d7f0b3ac41"></a>

<p>#define EMV_ADK_VOICE_NO   0</p>

voice authorization forbidden
not used for contactless

## EMV_ADK_VOICE_YES <a href="#gaf4dbcbf4d83287ffa0838b64b9105809" id="gaf4dbcbf4d83287ffa0838b64b9105809"></a>

<p>#define EMV_ADK_VOICE_YES   1</p>

voice authorization (part of TAC-IAC-default handling) allowed
*Preconditions:*
- terminal is attended
- <a href="adk__emv__contactless__programmers__guide_8dox.md#a12aa86ad3046acf00e6471607b47af26">REFERRAL_AFTER_TRX</a> is set (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a>)
not used for contactless

## EMV_ADK_VOICEAUT_BYTE <a href="#ga38142b9746b0c7f21dbc5fc636384b54" id="ga38142b9746b0c7f21dbc5fc636384b54"></a>

<p>#define EMV_ADK_VOICEAUT_BYTE   2</p>

byte for configuration of voice authorization
not used for contactless

## EMV_ADK_VOICEAUT_NIBBLE <a href="#gaae6e9d4466ac1cd32a3ada32c5bbe102" id="gaae6e9d4466ac1cd32a3ada32c5bbe102"></a>

<p>#define EMV_ADK_VOICEAUT_NIBBLE   & 0x0F</p>

nibble for configuration of voice authorization
not used for contactless

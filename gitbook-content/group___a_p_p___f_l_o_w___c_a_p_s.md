---
hidden: true
title: Defines for Application flow capabilitiesConfiguration » Application data
---

[Macros](#define-members)

Application (transaction flow) capabilities (see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a>) [More\...](#details)

Collaboration diagram for Defines for Application flow capabilities:

![](group___a_p_p___f_l_o_w___c_a_p_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [FORCE_RISK_MANAGEMENT](#gaee08b26f25b7ab243cb6eefff31ae558)   0x01 |
|   | B1b1: Perform Terminal Risk Management regardless of Application Interchange Profile bit \"Terminal risk management is to be performed\". **Important Note** Enable this flag because it is required according EMVCo Book 3, chapter 10.6 Terminal Risk Management. [More\...](#gaee08b26f25b7ab243cb6eefff31ae558)<br/> |
| #define  | [BLACKLIST](#ga1c2ca65e5df29a89ba04a0ae398a7b6a)   0x02 |
|   | B1b2: Enables blacklist/transaction log callback (aka exception list, hot list), <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga7db951ffee1aa377131cd752468145a4">TAG_BF03_CBK_LOG_HOTLIST</a>) will be invoked<br/>Depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gae29197978a50277b7ebbcb8c3890be9d">EMV_CT_TRXOP_HOTLST_LOG_CALLBACK</a> and <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>. [More\...](#ga1c2ca65e5df29a89ba04a0ae398a7b6a)<br/> |
| #define  | [TRANSACTION_LOG](#gad94a1aceb2a0229425243ca4327e2070)   0x04 |
|   | B1b3: Enables blacklist/transaction log callback for avoiding spit payments according EMVCo Book 3, chapter 10.6.1 Floor Limits. <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga7db951ffee1aa377131cd752468145a4">TAG_BF03_CBK_LOG_HOTLIST</a>) will be invoked<br/>Depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gae29197978a50277b7ebbcb8c3890be9d">EMV_CT_TRXOP_HOTLST_LOG_CALLBACK</a> and <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>. [More\...](#gad94a1aceb2a0229425243ca4327e2070)<br/> |
| #define  | [PIN_BYPASS](#ga1b11ddaf81867095dd71695d2c8223c7)   0x08 |
|   | B1b4: PIN bypass supported. [More\...](#ga1b11ddaf81867095dd71695d2c8223c7)<br/> |
| #define  | [FORCE_ONLINE](#ga47602479dfd6ef2e6e8abc888ff9b0b7)   0x10 |
|   | B1b5: Feature \"Force online\" supported (suspicious customer). This relates to Terminal Verification Result B4b4 \"Merchant forced transaction online\". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9379ba99fde04b446f004946e00cb7f">EMV_CT_PAYMENT_STRUCT::Force_Online</a>. [More\...](#ga47602479dfd6ef2e6e8abc888ff9b0b7)<br/> |
| #define  | [FORCE_ACCEPTANCE](#ga4f9335f46418db8ef04c027ce9765c57)   0x20 |
|   | B1b6: Feature \"Force acceptance\" supported (accept on merchant\'s risk). **Use with care**: This overrules the card\'s or terminal or authorisation host decision. Note: Force Acceptance is performed if both flags are set, the support flag here and the transaction flow option <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9d831c8180100292e2f5e0f198eb3197">EMV_CT_PAYMENT_STRUCT::Force_Acceptance</a>. [More\...](#ga4f9335f46418db8ef04c027ce9765c57)<br/> |
| #define  | [CASH_SUPPORT](#ga489ba3e503cc62c324283b817e4ce9d5)   0x01 |
|   | B2b1: Support of cash transactions. [More\...](#ga489ba3e503cc62c324283b817e4ce9d5)<br/> |
| #define  | [CASHBACK_SUPPORT](#ga71389d5558bb1342c2f7ffa8fb3be889)   0x02 |
|   | B2b2: Support of cashback transactions. [More\...](#ga71389d5558bb1342c2f7ffa8fb3be889)<br/> |
| #define  | [EMV_CT_CHECK_INCONS_TRACK2_PAN](#gaee3e506de58eb8bf23ed8b28de286cf7)   0x04 |
|   | B2b3: Check consistency of track2 equivalent data (<a href="group___e_m_v_c_o___t_a_g_s.md#ga2e6e79fb698c2021efe43366f6517b76">TAG_57_TRACK2_EQUIVALENT</a>) provided by ICC.<br/>Mandated for MasterCard and Amex.<br/>Validate format and that contents matches to <a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a> and <a href="group___e_m_v_c_o___t_a_g_s.md#ga5eb2095961ebe9a91e560003f75358bb">TAG_5F24_APP_EXP_DATE</a>.<br/>See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](#ga72dbff18249409a98bfb36ad8dbc120c "B3b5: Valid only in case of activated EMV_CT_CHECK_INCONS_TRACK2_PAN.   If activated: Check will be d..."). [More\...](#gaee3e506de58eb8bf23ed8b28de286cf7)<br/> |
| #define  | [EMV_CT_CONF_AMOUNT_PIN](#ga646066dcb5ff2196f23e81697ece0fa0)   0x08 |
|   | B2b4: Confirm amount and enter PIN in one display.<br/>Invoking callback for amount confirmation depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab7245d9aa5ebca9d6947cfe8af8717d1">EMV_CT_TRXOP_AMOUNT_CONF</a>.<br/>May be deactivated by <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>. [More\...](#ga646066dcb5ff2196f23e81697ece0fa0)<br/> |
| #define  | [EMV_CT_DOMESTIC_CHECK](#ga6bef1f7d609844cde9f398ca3de81925)   0x10 |
|   | B2b5: Callback function <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>) will be called.<br/>Needs to be activated per transaction by <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab25c0778e85a9cc2c72c33cd0616bf89">EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK</a>.<br/>May be deactivated by <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>. [More\...](#ga6bef1f7d609844cde9f398ca3de81925)<br/> |
| #define  | [TRANSACTION_TYPE_17_FOR_CASH](#ga1f725b084f3a2c3bb96f88682d9771b7)   0x20 |
|   | B2b6: Transaction type 17 for MasterCard cash transactions. [More\...](#ga1f725b084f3a2c3bb96f88682d9771b7)<br/> |
| #define  | [EMV_CT_CHECK_INCONS_TRACK2_NO_EXP](#gaa9a21400bb4e6af566b3d70db1562f95)   0x40 |
|   | B2b7: Check consistency of track2 equivalent data (<a href="group___e_m_v_c_o___t_a_g_s.md#ga2e6e79fb698c2021efe43366f6517b76">TAG_57_TRACK2_EQUIVALENT</a>) provided by ICC.<br/>Mandated for MasterCard and Amex.<br/>Validate format and that contents matches to <a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a><br/>Only effective if [EMV_CT_CHECK_INCONS_TRACK2_PAN](#gaee3e506de58eb8bf23ed8b28de286cf7 "B2b3: Check consistency of track2 equivalent data (TAG_57_TRACK2_EQUIVALENT) provided by ICC....") is deactivated. See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](#ga72dbff18249409a98bfb36ad8dbc120c "B3b5: Valid only in case of activated EMV_CT_CHECK_INCONS_TRACK2_PAN.   If activated: Check will be d..."). [More\...](#gaa9a21400bb4e6af566b3d70db1562f95)<br/> |
| #define  | [TRANSACTION_TYPE_30_FOR_PREAUTH](#gae14fcda0b3386fb802c3f17ec5ac9d89)   0x80 |
|   | B2b8: Amex Pre-Authorization with transaction type 30. [More\...](#gae14fcda0b3386fb802c3f17ec5ac9d89)<br/> |
| #define  | [REFERRAL_AFTER_TRX](#ga12aa86ad3046acf00e6471607b47af26)   0x01 |
|   | B3b1: In case voice referral is required: Chip transaction is terminated with AAC. Referral transaction is performed subsequently as \"CardNotPresent\" (German handling). [More\...](#ga12aa86ad3046acf00e6471607b47af26)<br/> |
| #define  | [DCC_CHECK](#gab46cea653620bce1d34685cb1ab851d9)   0x02 |
|   | B3b2: Enable DCC (Dynamic currency conversion).<br/>Invocation depends on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>, <a href="group___t_x_n___o_p_t_i_o_n_s.md#ga37fe06e4949f5a341274dbe45c208b84">EMV_CT_TRXOP_DCC_CALLBACK</a>, and <a href="group___t_x_n___o_p_t_i_o_n_s.md#ga8507bff64333d12639114aa6b18feb07">EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS</a>. [More\...](#gab46cea653620bce1d34685cb1ab851d9)<br/> |
| #define  | [REFUND_CONFIRM_AMOUNT](#ga4edf2c5ac7045ec648b60ad31aee30d5)   0x04 |
|   | B3b3: Confirm amount during refund transaction<br/>Invoking callback for amount confirmation depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab7245d9aa5ebca9d6947cfe8af8717d1">EMV_CT_TRXOP_AMOUNT_CONF</a> and <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>. [More\...](#ga4edf2c5ac7045ec648b60ad31aee30d5)<br/> |
| #define  | [EMV_CT_USE_CFG_APPL_NAME](#ga22763bc1e7f83bf17f8ee093f5d221be)   0x08 |
|   | B3b4: **Use with care**: Do not use card\'s application name (EMVCo rule: 9F12 prior to 50) but always the default label. Effective for cardholder\'s application selection. [More\...](#ga22763bc1e7f83bf17f8ee093f5d221be)<br/> |
| #define  | [EMV_CT_FALLBACK_ON_INCONS_TRACK2](#ga72dbff18249409a98bfb36ad8dbc120c)   0x10 |
|   | B3b5: Valid only in case of activated [EMV_CT_CHECK_INCONS_TRACK2_PAN](#gaee3e506de58eb8bf23ed8b28de286cf7 "B2b3: Check consistency of track2 equivalent data (TAG_57_TRACK2_EQUIVALENT) provided by ICC....").<br/>If activated: Check will be done before Cardholder Verification. In case of fail EMV ADK will process fallback handling (may result in <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga5f6c47c1042b70f3753191850219e745">EMV_ADK_FALLBACK</a>). E.g. required for German dcpos 2.4, may be used for \"M/Chip Functional Architecture\", AMEX ED-031 in test plan ver. 4.2.<br/>If not activated: Check will be done just before processing 1st cryptogram. If fail: GENAC1 will be requested with AAC. E.g. required for MasterCard REQ22, AMEX ED-031 in Swedish AMEX test plan 1.0. [More\...](#ga72dbff18249409a98bfb36ad8dbc120c)<br/> |
| #define  | [EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE](#ga8285318caacc7779fb5856347821f002)   0x20 |
|   | B3b6: Customer amount confirmation in case of CVM signature<br/>Invoking callback for amount confirmation depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab7245d9aa5ebca9d6947cfe8af8717d1">EMV_CT_TRXOP_AMOUNT_CONF</a> and <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>. [More\...](#ga8285318caacc7779fb5856347821f002)<br/> |
| #define  | [EMV_CT_SDA_SELECTED_TVR_ON](#gaa620439dcd310cd5da916263133cf34e)   0x40 |
|   | B3b7: Activate the support of the TVR byte SDA selected, introduced in Nov 2013 for kernels not yet supporting this feature, configurable per AID (for kernels supporting this it\'ll be always activated, config is don\'t care) [More\...](#gaa620439dcd310cd5da916263133cf34e)<br/> |
| #define  | [EMV_CASHBACK_OFFLINE_SUPPORT](#ga44d3a9d86f6ec48aaa1cb8e10c959866)   0x80 |
|   | B3b8: If set cash back transactions are not automatically forced online. **Use with care**: Usual business rules require online processing. [More\...](#ga44d3a9d86f6ec48aaa1cb8e10c959866)<br/> |
| #define  | [REFUND_PROCESSING_RESTRICTIONS](#gaf3c86af213c3448eb97e2e9974675b12)   0x01 |
|   | B4b1: Perform Processing restrictions for Refund transactions (French Refund Requirements). [More\...](#gaf3c86af213c3448eb97e2e9974675b12)<br/> |
| #define  | [REFUND_NO_GENERATE_AC](#gabfeb6fa819ae4435dc04517213f300e9)   0x02 |
|   | B4b2: Do not perform Generate AC when finishing Refund transactions (French Refund Requirements). [More\...](#gabfeb6fa819ae4435dc04517213f300e9)<br/> |
| #define  | [REFUND_FLOW_INTERAC](#ga3ebc4a9d9f3ba1e966a2f6c5e11aaa17)   0x04 |
|   | B4b3: Perform full EMV transaction although transaction type is refund. **Use with care**: Is is recommended by EMVCo to abort the transaction once the account data has been read. Activation of the \"full\" flow requires that all cards and background systems support it. [More\...](#ga3ebc4a9d9f3ba1e966a2f6c5e11aaa17)<br/> |
| #define  | [REFUND_NO_ZERO_AMOUNT](#gae91301339a147a2e8f63939ebc0c5e5b)   0x08 |
|   | B4b4: Do NOT set the amount to zero in CDOL1 for Refund transactions with Generate AC. **Use with care**: Card read transactions are just for getting the account data and it is best practice to \"close\" the card session by requesting an ARQC with zero amount. [More\...](#gae91301339a147a2e8f63939ebc0c5e5b)<br/> |
| #define  | [DPAS_DATA_STORAGE_SUPPORT](#ga925d41cbe427c6b1fd6b70925b9042f7)   0x10 |
|   | B4b5: Support of Data Storage for D-PAS Connect. Useful only for Discover AIDs. [More\...](#ga925d41cbe427c6b1fd6b70925b9042f7)<br/> |
| #define  | [DPAS_EXTENDED_LOGGING_SUPPORT](#ga11aa53fe15a844eee0042676294c5309)   0x20 |
|   | B4b6: Support of Extended Logging for D-PAS Connect. Useful only for Discover AIDs. [More\...](#ga11aa53fe15a844eee0042676294c5309)<br/> |
| #define  | [DPAS_CDCVM_SUPPORT](#ga0ec1bd03b13c6fe605fd8ef7c6b71f86)   0x40 |
|   | B4b7: Support of Consumer Device CVM for D-PAS Connect. Useful only for Discover AIDs. [More\...](#ga0ec1bd03b13c6fe605fd8ef7c6b71f86)<br/> |
| #define  | [APP_FLOW_VISA_QUASI_CASH](#ga24450fe87751bb38723f6a228c75fa5d)   0x80 |
|   | B4b8: Convert transaction type from \'01\' to \'11\' indicating VISA Quasi Cash. Use in conjunction with <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaf06c0171381243a268293449aac83a3">EMV_CT_APPLIDATA_TYPE.TxnTypesCash</a> if AUC checks shall be applied, that is both values \'01\' and \'11\' should be set. [More\...](#ga24450fe87751bb38723f6a228c75fa5d)<br/> |
| #define  | [APP_FLOW_CASHBACK_TRANS_TYPE_00](#gad331c040ae5508bd4074e6a782b7946e)   0x01 |
|   | B5b1: For cashback transaction (amount other != 0) use transaction type \'00\' as required by Visa. [More\...](#gad331c040ae5508bd4074e6a782b7946e)<br/> |
| #define  | [REFUND_FLOW_ARQC](#ga33642d9af66d745a6b1b8b8ec04efaf2)   0x02 |
|   | B5b2: Like standard refund flow but request ARQC at first Generate AC (Discover requirement) [More\...](#ga33642d9af66d745a6b1b8b8ec04efaf2)<br/> |

## DetailedDescription {#detailed-description}

Application (transaction flow) capabilities (see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a>)

## MacroDefinition Documentation {#macro-definition-documentation}

## APP_FLOW_CASHBACK_TRANS_TYPE_00 <a href="#gad331c040ae5508bd4074e6a782b7946e" id="gad331c040ae5508bd4074e6a782b7946e"></a>

<p>#define APP_FLOW_CASHBACK_TRANS_TYPE_00   0x01</p>

B5b1: For cashback transaction (amount other != 0) use transaction type \'00\' as required by Visa.

<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5c423eef2c409c104e37ae13ee5edc91">EMV_CT_APPLIDATA_TYPE.TxnTypesCashback</a> will be adjusted automatically to include \'00\' for CVM processing.
For L2 kernel version \<= 7.0.3 there is a work-around to temporarily set back to given transaction type (usually \'09\', must not indicate sale or cash) during AUC checks.

## APP_FLOW_VISA_QUASI_CASH <a href="#ga24450fe87751bb38723f6a228c75fa5d" id="ga24450fe87751bb38723f6a228c75fa5d"></a>

<p>#define APP_FLOW_VISA_QUASI_CASH   0x80</p>

B4b8: Convert transaction type from \'01\' to \'11\' indicating VISA Quasi Cash. Use in conjunction with <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaf06c0171381243a268293449aac83a3">EMV_CT_APPLIDATA_TYPE.TxnTypesCash</a> if AUC checks shall be applied, that is both values \'01\' and \'11\' should be set.

## BLACKLIST <a href="#ga1c2ca65e5df29a89ba04a0ae398a7b6a" id="ga1c2ca65e5df29a89ba04a0ae398a7b6a"></a>

<p>#define BLACKLIST   0x02</p>

B1b2: Enables blacklist/transaction log callback (aka exception list, hot list), <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga7db951ffee1aa377131cd752468145a4">TAG_BF03_CBK_LOG_HOTLIST</a>) will be invoked
Depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gae29197978a50277b7ebbcb8c3890be9d">EMV_CT_TRXOP_HOTLST_LOG_CALLBACK</a> and <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>.

## CASH_SUPPORT <a href="#ga489ba3e503cc62c324283b817e4ce9d5" id="ga489ba3e503cc62c324283b817e4ce9d5"></a>

<p>#define CASH_SUPPORT   0x01</p>

B2b1: Support of cash transactions.

## CASHBACK_SUPPORT <a href="#ga71389d5558bb1342c2f7ffa8fb3be889" id="ga71389d5558bb1342c2f7ffa8fb3be889"></a>

<p>#define CASHBACK_SUPPORT   0x02</p>

B2b2: Support of cashback transactions.

## DCC_CHECK <a href="#gab46cea653620bce1d34685cb1ab851d9" id="gab46cea653620bce1d34685cb1ab851d9"></a>

<p>#define DCC_CHECK   0x02</p>

B3b2: Enable DCC (Dynamic currency conversion).
Invocation depends on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>, <a href="group___t_x_n___o_p_t_i_o_n_s.md#ga37fe06e4949f5a341274dbe45c208b84">EMV_CT_TRXOP_DCC_CALLBACK</a>, and <a href="group___t_x_n___o_p_t_i_o_n_s.md#ga8507bff64333d12639114aa6b18feb07">EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS</a>.

## DPAS_CDCVM_SUPPORT <a href="#ga0ec1bd03b13c6fe605fd8ef7c6b71f86" id="ga0ec1bd03b13c6fe605fd8ef7c6b71f86"></a>

<p>#define DPAS_CDCVM_SUPPORT   0x40</p>

B4b7: Support of Consumer Device CVM for D-PAS Connect. Useful only for Discover AIDs.

## DPAS_DATA_STORAGE_SUPPORT <a href="#ga925d41cbe427c6b1fd6b70925b9042f7" id="ga925d41cbe427c6b1fd6b70925b9042f7"></a>

<p>#define DPAS_DATA_STORAGE_SUPPORT   0x10</p>

B4b5: Support of Data Storage for D-PAS Connect. Useful only for Discover AIDs.

## DPAS_EXTENDED_LOGGING_SUPPORT <a href="#ga11aa53fe15a844eee0042676294c5309" id="ga11aa53fe15a844eee0042676294c5309"></a>

<p>#define DPAS_EXTENDED_LOGGING_SUPPORT   0x20</p>

B4b6: Support of Extended Logging for D-PAS Connect. Useful only for Discover AIDs.

## EMV_CASHBACK_OFFLINE_SUPPORT <a href="#ga44d3a9d86f6ec48aaa1cb8e10c959866" id="ga44d3a9d86f6ec48aaa1cb8e10c959866"></a>

<p>#define EMV_CASHBACK_OFFLINE_SUPPORT   0x80</p>

B3b8: If set cash back transactions are not automatically forced online. **Use with care**: Usual business rules require online processing.

## EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE <a href="#ga8285318caacc7779fb5856347821f002" id="ga8285318caacc7779fb5856347821f002"></a>

<p>#define EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE   0x20</p>

B3b6: Customer amount confirmation in case of CVM signature
Invoking callback for amount confirmation depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab7245d9aa5ebca9d6947cfe8af8717d1">EMV_CT_TRXOP_AMOUNT_CONF</a> and <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>.

## EMV_CT_CHECK_INCONS_TRACK2_NO_EXP <a href="#gaa9a21400bb4e6af566b3d70db1562f95" id="gaa9a21400bb4e6af566b3d70db1562f95"></a>

<p>#define EMV_CT_CHECK_INCONS_TRACK2_NO_EXP   0x40</p>

B2b7: Check consistency of track2 equivalent data (<a href="group___e_m_v_c_o___t_a_g_s.md#ga2e6e79fb698c2021efe43366f6517b76">TAG_57_TRACK2_EQUIVALENT</a>) provided by ICC.
Mandated for MasterCard and Amex.
Validate format and that contents matches to <a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a>
Only effective if [EMV_CT_CHECK_INCONS_TRACK2_PAN](#gaee3e506de58eb8bf23ed8b28de286cf7 "B2b3: Check consistency of track2 equivalent data (TAG_57_TRACK2_EQUIVALENT) provided by ICC....") is deactivated. See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](#ga72dbff18249409a98bfb36ad8dbc120c "B3b5: Valid only in case of activated EMV_CT_CHECK_INCONS_TRACK2_PAN.   If activated: Check will be d...").

## EMV_CT_CHECK_INCONS_TRACK2_PAN <a href="#gaee3e506de58eb8bf23ed8b28de286cf7" id="gaee3e506de58eb8bf23ed8b28de286cf7"></a>

<p>#define EMV_CT_CHECK_INCONS_TRACK2_PAN   0x04</p>

B2b3: Check consistency of track2 equivalent data (<a href="group___e_m_v_c_o___t_a_g_s.md#ga2e6e79fb698c2021efe43366f6517b76">TAG_57_TRACK2_EQUIVALENT</a>) provided by ICC.
Mandated for MasterCard and Amex.
Validate format and that contents matches to <a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a> and <a href="group___e_m_v_c_o___t_a_g_s.md#ga5eb2095961ebe9a91e560003f75358bb">TAG_5F24_APP_EXP_DATE</a>.
See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](#ga72dbff18249409a98bfb36ad8dbc120c "B3b5: Valid only in case of activated EMV_CT_CHECK_INCONS_TRACK2_PAN.   If activated: Check will be d...").

## EMV_CT_CONF_AMOUNT_PIN <a href="#ga646066dcb5ff2196f23e81697ece0fa0" id="ga646066dcb5ff2196f23e81697ece0fa0"></a>

<p>#define EMV_CT_CONF_AMOUNT_PIN   0x08</p>

B2b4: Confirm amount and enter PIN in one display.
Invoking callback for amount confirmation depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab7245d9aa5ebca9d6947cfe8af8717d1">EMV_CT_TRXOP_AMOUNT_CONF</a>.
May be deactivated by <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>.

## EMV_CT_DOMESTIC_CHECK <a href="#ga6bef1f7d609844cde9f398ca3de81925" id="ga6bef1f7d609844cde9f398ca3de81925"></a>

<p>#define EMV_CT_DOMESTIC_CHECK   0x10</p>

B2b5: Callback function <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>) will be called.
Needs to be activated per transaction by <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab25c0778e85a9cc2c72c33cd0616bf89">EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK</a>.
May be deactivated by <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>.

## EMV_CT_FALLBACK_ON_INCONS_TRACK2 <a href="#ga72dbff18249409a98bfb36ad8dbc120c" id="ga72dbff18249409a98bfb36ad8dbc120c"></a>

<p>#define EMV_CT_FALLBACK_ON_INCONS_TRACK2   0x10</p>

B3b5: Valid only in case of activated [EMV_CT_CHECK_INCONS_TRACK2_PAN](#gaee3e506de58eb8bf23ed8b28de286cf7 "B2b3: Check consistency of track2 equivalent data (TAG_57_TRACK2_EQUIVALENT) provided by ICC....").
If activated: Check will be done before Cardholder Verification. In case of fail EMV ADK will process fallback handling (may result in <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga5f6c47c1042b70f3753191850219e745">EMV_ADK_FALLBACK</a>). E.g. required for German dcpos 2.4, may be used for \"M/Chip Functional Architecture\", AMEX ED-031 in test plan ver. 4.2.
If not activated: Check will be done just before processing 1st cryptogram. If fail: GENAC1 will be requested with AAC. E.g. required for MasterCard REQ22, AMEX ED-031 in Swedish AMEX test plan 1.0.

## EMV_CT_SDA_SELECTED_TVR_ON <a href="#gaa620439dcd310cd5da916263133cf34e" id="gaa620439dcd310cd5da916263133cf34e"></a>

<p>#define EMV_CT_SDA_SELECTED_TVR_ON   0x40</p>

B3b7: Activate the support of the TVR byte SDA selected, introduced in Nov 2013 for kernels not yet supporting this feature, configurable per AID (for kernels supporting this it\'ll be always activated, config is don\'t care)

## EMV_CT_USE_CFG_APPL_NAME <a href="#ga22763bc1e7f83bf17f8ee093f5d221be" id="ga22763bc1e7f83bf17f8ee093f5d221be"></a>

<p>#define EMV_CT_USE_CFG_APPL_NAME   0x08</p>

B3b4: **Use with care**: Do not use card\'s application name (EMVCo rule: 9F12 prior to 50) but always the default label. Effective for cardholder\'s application selection.

## FORCE_ACCEPTANCE <a href="#ga4f9335f46418db8ef04c027ce9765c57" id="ga4f9335f46418db8ef04c027ce9765c57"></a>

<p>#define FORCE_ACCEPTANCE   0x20</p>

B1b6: Feature \"Force acceptance\" supported (accept on merchant\'s risk). **Use with care**: This overrules the card\'s or terminal or authorisation host decision. Note: Force Acceptance is performed if both flags are set, the support flag here and the transaction flow option <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9d831c8180100292e2f5e0f198eb3197">EMV_CT_PAYMENT_STRUCT::Force_Acceptance</a>.

## FORCE_ONLINE <a href="#ga47602479dfd6ef2e6e8abc888ff9b0b7" id="ga47602479dfd6ef2e6e8abc888ff9b0b7"></a>

<p>#define FORCE_ONLINE   0x10</p>

B1b5: Feature \"Force online\" supported (suspicious customer). This relates to Terminal Verification Result B4b4 \"Merchant forced transaction online\". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9379ba99fde04b446f004946e00cb7f">EMV_CT_PAYMENT_STRUCT::Force_Online</a>.

## FORCE_RISK_MANAGEMENT <a href="#gaee08b26f25b7ab243cb6eefff31ae558" id="gaee08b26f25b7ab243cb6eefff31ae558"></a>

<p>#define FORCE_RISK_MANAGEMENT   0x01</p>

B1b1: Perform Terminal Risk Management regardless of Application Interchange Profile bit \"Terminal risk management is to be performed\". **Important Note** Enable this flag because it is required according EMVCo Book 3, chapter 10.6 Terminal Risk Management.

## PIN_BYPASS <a href="#ga1b11ddaf81867095dd71695d2c8223c7" id="ga1b11ddaf81867095dd71695d2c8223c7"></a>

<p>#define PIN_BYPASS   0x08</p>

B1b4: PIN bypass supported.

## REFERRAL_AFTER_TRX <a href="#ga12aa86ad3046acf00e6471607b47af26" id="ga12aa86ad3046acf00e6471607b47af26"></a>

<p>#define REFERRAL_AFTER_TRX   0x01</p>

B3b1: In case voice referral is required: Chip transaction is terminated with AAC. Referral transaction is performed subsequently as \"CardNotPresent\" (German handling).

## REFUND_CONFIRM_AMOUNT <a href="#ga4edf2c5ac7045ec648b60ad31aee30d5" id="ga4edf2c5ac7045ec648b60ad31aee30d5"></a>

<p>#define REFUND_CONFIRM_AMOUNT   0x04</p>

B3b3: Confirm amount during refund transaction
Invoking callback for amount confirmation depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab7245d9aa5ebca9d6947cfe8af8717d1">EMV_CT_TRXOP_AMOUNT_CONF</a> and <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>.

## REFUND_FLOW_ARQC <a href="#ga33642d9af66d745a6b1b8b8ec04efaf2" id="ga33642d9af66d745a6b1b8b8ec04efaf2"></a>

<p>#define REFUND_FLOW_ARQC   0x02</p>

B5b2: Like standard refund flow but request ARQC at first Generate AC (Discover requirement)

## REFUND_FLOW_INTERAC <a href="#ga3ebc4a9d9f3ba1e966a2f6c5e11aaa17" id="ga3ebc4a9d9f3ba1e966a2f6c5e11aaa17"></a>

<p>#define REFUND_FLOW_INTERAC   0x04</p>

B4b3: Perform full EMV transaction although transaction type is refund. **Use with care**: Is is recommended by EMVCo to abort the transaction once the account data has been read. Activation of the \"full\" flow requires that all cards and background systems support it.

## REFUND_NO_GENERATE_AC <a href="#gabfeb6fa819ae4435dc04517213f300e9" id="gabfeb6fa819ae4435dc04517213f300e9"></a>

<p>#define REFUND_NO_GENERATE_AC   0x02</p>

B4b2: Do not perform Generate AC when finishing Refund transactions (French Refund Requirements).

## REFUND_NO_ZERO_AMOUNT <a href="#gae91301339a147a2e8f63939ebc0c5e5b" id="gae91301339a147a2e8f63939ebc0c5e5b"></a>

<p>#define REFUND_NO_ZERO_AMOUNT   0x08</p>

B4b4: Do NOT set the amount to zero in CDOL1 for Refund transactions with Generate AC. **Use with care**: Card read transactions are just for getting the account data and it is best practice to \"close\" the card session by requesting an ARQC with zero amount.

## REFUND_PROCESSING_RESTRICTIONS <a href="#gaf3c86af213c3448eb97e2e9974675b12" id="gaf3c86af213c3448eb97e2e9974675b12"></a>

<p>#define REFUND_PROCESSING_RESTRICTIONS   0x01</p>

B4b1: Perform Processing restrictions for Refund transactions (French Refund Requirements).

## TRANSACTION_LOG <a href="#gad94a1aceb2a0229425243ca4327e2070" id="gad94a1aceb2a0229425243ca4327e2070"></a>

<p>#define TRANSACTION_LOG   0x04</p>

B1b3: Enables blacklist/transaction log callback for avoiding spit payments according EMVCo Book 3, chapter 10.6.1 Floor Limits. <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga7db951ffee1aa377131cd752468145a4">TAG_BF03_CBK_LOG_HOTLIST</a>) will be invoked
Depends on <a href="group___t_x_n___o_p_t_i_o_n_s.md#gae29197978a50277b7ebbcb8c3890be9d">EMV_CT_TRXOP_HOTLST_LOG_CALLBACK</a> and <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>.

## TRANSACTION_TYPE_17_FOR_CASH <a href="#ga1f725b084f3a2c3bb96f88682d9771b7" id="ga1f725b084f3a2c3bb96f88682d9771b7"></a>

<p>#define TRANSACTION_TYPE_17_FOR_CASH   0x20</p>

B2b6: Transaction type 17 for MasterCard cash transactions.

Use <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga3db75cbf58899ee5f717540b65615e53">EMV_ADK_TRAN_TYPE_MASTERCARD_CASH</a> for cash transactions
Note: Cash transaction types are defined in <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaf06c0171381243a268293449aac83a3">EMV_CT_APPLIDATA_STRUCT::TxnTypesCash</a>.
The modified transaction type is used towards card and put out in <a href="group___a_d_k___t_r_x___e_x_e_c.md#a89e1907a3fb369ef96d8ae2de716acad">EMV_CT_TRANSRES_STRUCT::T_9C_TransType</a>.

## TRANSACTION_TYPE_30_FOR_PREAUTH <a href="#gae14fcda0b3386fb802c3f17ec5ac9d89" id="gae14fcda0b3386fb802c3f17ec5ac9d89"></a>

<p>#define TRANSACTION_TYPE_30_FOR_PREAUTH   0x80</p>

B2b8: Amex Pre-Authorization with transaction type 30.

Use <a href="group___t_r_a_n_s___t_y_p_e_s.md#gae7c6629294ae36267bfa128f4b25b434">EMV_ADK_TRAN_TYPE_AMEX_PREAUTH</a> for pre-authorization resp. reservation transactions
The modified transaction type is used towards card and put out in <a href="group___a_d_k___t_r_x___e_x_e_c.md#a89e1907a3fb369ef96d8ae2de716acad">EMV_CT_TRANSRES_STRUCT::T_9C_TransType</a>.

{% hint style="info" %}
Pre-Authorization and reservation transactions are equivalent. They are initiated with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga627576793b48b221be2b730980fbd249">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A</a> or <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9a4143056a3510f541555b4412ebe24b">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B</a>.
{% endhint %}

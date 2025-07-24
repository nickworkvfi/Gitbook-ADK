---
hidden: true
title: Tags defined by EMVCoGeneral topics » Serialization » BER TLV tags used by EMV ADK
---

[Macros](#define-members)

Collaboration diagram for Tags defined by EMVCo:

![](group___e_m_v_c_o___t_a_g_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_42_ISSUER_ID](#ga15500b26a3968d2936b031cca37b93f2)   0x42u |
|   | Issuer Identification Number (IIN) (**42**)<br/>used as <a href="group___f_u_n_c___f_l_o_w.md#a0c9b7f7b7001ce7a98a7a01e1276786b">EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN</a>. [More\...](#ga15500b26a3968d2936b031cca37b93f2)<br/> |
| #define  | [TAG_4F_APP_ID](#gaa1a0900aa13055b0b5199a8542ea2c64)   0x4Fu |
|   | Application Identifier (AID) - Card (**4F**)<br/>used to serialize <a href="_e_m_v___c_t_l_s___interface_8h.md#struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t">EMV_CTLS_APPLI_STRUCT</a>. [More\...](#gaa1a0900aa13055b0b5199a8542ea2c64)<br/> |
| #define  | [TAG_50_APP_LABEL](#ga70b6da94fde0a697b05755cdfc084023)   0x50u |
|   | Application Label (**50**)<br/>used in callbacks <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a> and <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gaf101b44707dcb098e311d65bd7ac817e">TAG_BF0C_CTLS_CBK_APP_SELECTED</a>. [More\...](#ga70b6da94fde0a697b05755cdfc084023)<br/> |
| #define  | [TAG_52_CMD_TO_PERFORM](#ga5c2e2c1e49e22fe51669eaceaa8fad9d)   0x52u |
|   | Command to Perform (**52**) [More\...](#ga5c2e2c1e49e22fe51669eaceaa8fad9d)<br/> |
| #define  | [TAG_56_TRACK1_EQUIVALENT](#gabfbfe2c06ddf1454164340744d5eb61a)   0x56u |
|   | Track 1 Equivalent Data (MChip card) [More\...](#gabfbfe2c06ddf1454164340744d5eb61a)<br/> |
| #define  | [TAG_57_TRACK2_EQUIVALENT](#ga2e6e79fb698c2021efe43366f6517b76)   0x57u |
|   | Track 2 Equivalent Data (**57**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ae570117bb33a013b49ca02baa24d8c23">EMV_CTLS_TRANSRES_STRUCT::T_57_DataTrack2</a>. [More\...](#ga2e6e79fb698c2021efe43366f6517b76)<br/> |
| #define  | [TAG_5A_APP_PAN](#ga4ccedb21a71fcb6ace22bac98ba548a5)   0x5Au |
|   | Application Primary Account Number (**5A**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af0bc634797380c801e22c4d7fbf5255f">EMV_CTLS_TRANSRES_STRUCT::T_5A_PAN</a>. [More\...](#ga4ccedb21a71fcb6ace22bac98ba548a5)<br/> |
| #define  | [TAG_5F20_CARDHOLDER_NAME](#ga28d5c5d3a12cb3cf62e64ccb3e9258bc)   0x5F20u |
|   | Cardholder Name (**5F20**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#adfd7eab71b1fc8059259da6704ae0f6f">EMV_CTLS_TRANSRES_STRUCT::T_5F20_Cardholder</a>. [More\...](#ga28d5c5d3a12cb3cf62e64ccb3e9258bc)<br/> |
| #define  | [TAG_5F24_APP_EXP_DATE](#ga5eb2095961ebe9a91e560003f75358bb)   0x5F24u |
|   | Application Expiration Data (**5F24**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a9976182c24eef231d092afe3a7c8d348">EMV_CTLS_TRANSRES_STRUCT::T_5F24_AppExpDate</a>. [More\...](#ga5eb2095961ebe9a91e560003f75358bb)<br/> |
| #define  | [TAG_5F25_APP_EFF_DATE](#gacd7028f61b8522799f207c7efa8e49d9)   0x5F25u |
|   | Application Effective Data (**5F25**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a3a483d3884951300b21443c7a72003ce">EMV_CTLS_TRANSRES_STRUCT::T_5F25_AppEffDate</a>. [More\...](#gacd7028f61b8522799f207c7efa8e49d9)<br/> |
| #define  | [TAG_5F28_ISS_COUNTRY_CODE](#gaa35ef81cc90fe90126a537cbd611ead6)   0x5F28u |
|   | Issuer Country Code (**5F28**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af6458a2407613872574dccbfb6bef9b9">EMV_CTLS_TRANSRES_STRUCT::T_5F28_IssCountryCode</a>. [More\...](#gaa35ef81cc90fe90126a537cbd611ead6)<br/> |
| #define  | [TAG_5F2A_TRANS_CURRENCY](#ga369ab2cc83e9b220bdfa79753f1f3962)   0x5F2Au |
|   | Transaction Currency Code (**5F2A**)<br/>Configured with <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans</a> (for DCC possibly in <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t">EMV_CTLS_START_STRUCT</a>). Used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a4ff59afe014dcaa2f469e45abd2a2cb7">EMV_CTLS_TRANSRES_STRUCT::T_5F2A_CurrencyTrans</a>. [More\...](#ga369ab2cc83e9b220bdfa79753f1f3962)<br/> |
| #define  | [TAG_5F2D_LANGUAGE](#gaaa613c7ef00b768c88fe5cc3ee16107b)   0x5F2Du |
|   | Language Preference (**5F2D**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ab78d27dc34487f922049e2708780f0b5">EMV_CTLS_TRANSRES_STRUCT::T_5F2D_Lang_Pref</a>. [More\...](#gaaa613c7ef00b768c88fe5cc3ee16107b)<br/> |
| #define  | [TAG_5F30_SERVICE_CODE](#gacc4c4f91bcb9bf9fef0ec1257292b93e)   0x5F30u |
|   | Service Code (**5F30**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aba95bf6078aac2295b51ba4f1b7aaff9">EMV_CTLS_TRANSRES_STRUCT::T_5F30_ServiceCode</a>. [More\...](#gacc4c4f91bcb9bf9fef0ec1257292b93e)<br/> |
| #define  | [TAG_5F34_PAN_SEQUENCE_NB](#ga17f22ccb8130cc68e45609afc6b58f00)   0x5F34u |
|   | PAN Sequence Number (**5F34**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#abc4cec20fd3b19b4eb973817adc30eb7">EMV_CTLS_TRANSRES_STRUCT::T_5F34_PANSequenceNo</a>. [More\...](#ga17f22ccb8130cc68e45609afc6b58f00)<br/> |
| #define  | [TAG_5F36_TRANS_CURRENCY_EXP](#ga134c61ae2787b93c5def5bbf929f7cb4)   0x5F36u |
|   | Transaction Currency Exponent (**5F36**)<br/>Configured with <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CTLS_TERMDATA_STRUCT::ExpTrans</a> (for DCC possibly in <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t">EMV_CTLS_START_STRUCT</a>). Used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af3c15997b72a0912020557a700633e18">EMV_CTLS_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp</a>. [More\...](#ga134c61ae2787b93c5def5bbf929f7cb4)<br/> |
| #define  | [TAG_5F50_ISSUER_URL](#ga15ecfca134c05f49a0ce50d5f0692355)   0x5F50u |
|   | Issuer URL (**5F50**) [More\...](#ga15ecfca134c05f49a0ce50d5f0692355)<br/> |
| #define  | [TAG_5F53_IBAN](#ga4c1beabb09d7dd5929f0947c3451378c)   0x5F53u |
|   | International Bank Account Number (IBAN) (**5F53**) [More\...](#ga4c1beabb09d7dd5929f0947c3451378c)<br/> |
| #define  | [TAG_5F54_BIC](#ga7c69e28da34f98b810cc96009ecdefe9)   0x5F54u |
|   | Bank Identifier Code (BIC) (**5F54**) [More\...](#ga7c69e28da34f98b810cc96009ecdefe9)<br/> |
| #define  | [TAG_5F55_ISSUER_COUNTRY_2](#ga4a6770ebf323f538a78c12c78f3db783)   0x5F55u |
|   | Issuer Country Code (alpha 2 format) (**5F55**)<br/>used as <a href="group___f_u_n_c___f_l_o_w.md#aa6458e13b23e10671e3c12ac21e69aaa">EMV_CTLS_CANDIDATE_DATA_STRUCT::country2</a>. [More\...](#ga4a6770ebf323f538a78c12c78f3db783)<br/> |
| #define  | [TAG_5F56_ISSUER_COUNTRY_3](#gad5bedd694cd7c7658a9bdc865f542a50)   0x5F56u |
|   | Issuer Country Code (alpha 3 format) (**5F56**)<br/>used as <a href="group___f_u_n_c___f_l_o_w.md#aab088343104c0c1631f846fa907bbc19">EMV_CTLS_CANDIDATE_DATA_STRUCT::country3</a>. [More\...](#gad5bedd694cd7c7658a9bdc865f542a50)<br/> |
| #define  | [TAG_5F57_ACCOUNT_TYPE](#ga18a257e1d8288f49eba5100e657039b6)   0x5F57u |
|   | Account Type (**5F57**)<br/>used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a720e112c31478ed6c1a4ed18cb16db2f">EMV_CTLS_PAYMENT_STRUCT::uc_AccountType</a>. [More\...](#ga18a257e1d8288f49eba5100e657039b6)<br/> |
| #define  | [TAG_61_APP_TEMPLATE](#ga031f06652f6b1f5ede0a551c356e71b3)   0x61u |
|   | Application Template (**61**) [More\...](#ga031f06652f6b1f5ede0a551c356e71b3)<br/> |
| #define  | [TAG_6F_FCI_TEMPLATE](#ga9b09496d37327341a4d46ca4edf36182)   0x6Fu |
|   | File Control Information (FCI) Template (**6F**) [More\...](#ga9b09496d37327341a4d46ca4edf36182)<br/> |
| #define  | [TAG_70_AEF_DATA_TEMPLATE](#ga125edde9dae6966577fe85d580e90403)   0x70u |
|   | AEF Data Template (**70**) [More\...](#ga125edde9dae6966577fe85d580e90403)<br/> |
| #define  | [TAG_71_ISS_SCRIPT_TPLT_1](#ga977d84f3059e283c2b48c22024892a53)   0x71u |
|   | Issuer Script Template 1 (**71**)<br/>to be used to fill <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#afd420a16596fd515042c455eaf81dbc5">EMV_CTLS_HOST_STRUCT::ScriptData</a>. [More\...](#ga977d84f3059e283c2b48c22024892a53)<br/> |
| #define  | [TAG_72_ISS_SCRIPT_TPLT_2](#ga8b38f1870f3d6cb7259759bb567315c0)   0x72u |
|   | Issuer Script Template 2 (**72**)<br/>to be used to fill <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#afd420a16596fd515042c455eaf81dbc5">EMV_CTLS_HOST_STRUCT::ScriptData</a>. [More\...](#ga8b38f1870f3d6cb7259759bb567315c0)<br/> |
| #define  | [TAG_73_DIR_DISCR_TEMPLATE](#gaaa187c1d5255e009a402c6d727b4938f)   0x73u |
|   | Dirctory Discretionary Template (**73**) [More\...](#gaaa187c1d5255e009a402c6d727b4938f)<br/> |
| #define  | [TAG_77_RS_MSG_TPLT_FRMT_2](#ga33f61ca090446008781005b3bb12e264)   0x77u |
|   | Response Message Template Format 2 (**77**) [More\...](#ga33f61ca090446008781005b3bb12e264)<br/> |
| #define  | [TAG_80_RS_MSG_TPLT_FRMT_1](#gab8455feb7a5b1369aa97e5986745940f)   0x80u |
|   | Response Message Template Format 1 (**80**) [More\...](#gab8455feb7a5b1369aa97e5986745940f)<br/> |
| #define  | [TAG_81_BIN_AMOUNT_AUTH](#ga4b82c7a87ee02736af6cd4e298c1ae13)   0x81u |
|   | Amount Authorization Binary (**81**) [More\...](#ga4b82c7a87ee02736af6cd4e298c1ae13)<br/> |
| #define  | [TAG_82_AIP](#gaa87267a7ce44cc525b3515a3549898c2)   0x82u |
|   | Application Interchange Profile (**82**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a4fc70aee9c7e870519b10c2471ae44f2">EMV_CTLS_TRANSRES_STRUCT::T_82_AIP</a>. [More\...](#gaa87267a7ce44cc525b3515a3549898c2)<br/> |
| #define  | [TAG_83_CMD_TPLT](#ga6a189bd2f9a0d77f24db3e88d89f5487)   0x83u |
|   | Command Template (**83**) [More\...](#ga6a189bd2f9a0d77f24db3e88d89f5487)<br/> |
| #define  | [TAG_84_DF_NAME](#ga69c4599943205d95394b62eef950e4c5)   0x84u |
|   | Dedicated File Name (**84**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a1d5a242b67594b2901691e00b41c2c69">EMV_CTLS_TRANSRES_STRUCT::T_84_DFName</a>. [More\...](#ga69c4599943205d95394b62eef950e4c5)<br/> |
| #define  | [TAG_86_ISS_SCRIPT_CMD](#ga5fadc36c7f5dee1b8c89cf331ed67a46)   0x86u |
|   | Issuer Script Command (**86**) [More\...](#ga5fadc36c7f5dee1b8c89cf331ed67a46)<br/> |
| #define  | [TAG_87_APP_PRIORITY_ID](#gaa307388012402f6923efc2609e11fd29)   0x87u |
|   | Application Priority Indicator (**87**)<br/>used as <a href="group___f_u_n_c___f_l_o_w.md#ae6e6847f31d7ad74362c2de216df1372">EMV_CTLS_CANDIDATE_DATA_STRUCT::API</a>. [More\...](#gaa307388012402f6923efc2609e11fd29)<br/> |
| #define  | [TAG_88_SHORT_FILE_ID](#ga5aea7b31fe53ca6a11f69329dac5a75c)   0x88u |
|   | Short File Identifier (SFI) (**88**) [More\...](#ga5aea7b31fe53ca6a11f69329dac5a75c)<br/> |
| #define  | [TAG_89_AUTH_CODE](#ga8936aff551a261bc496fee1cc330486a)   0x89u |
|   | Authorization Code (**89**) [More\...](#ga8936aff551a261bc496fee1cc330486a)<br/> |
| #define  | [TAG_8A_AUTH_RESP_CODE](#ga27bef53c14c4970b64ff44e4e78d20ba)   0x8Au |
|   | Authorization Response Code (**8A**)<br/>used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a50f253cd97f2612f2d5abe02959e130f">EMV_CTLS_HOST_STRUCT::AuthResp</a>. [More\...](#ga27bef53c14c4970b64ff44e4e78d20ba)<br/> |
| #define  | [TAG_8B_POI_INFORMATION](#ga54b024713e6b8dd6d99e3c1d18005496)   0x8Bu |
|   | POI information (**8B**)<br/>used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaf88e302e58d70d28ed59a53cdca2f2e">EMV_CTLS_TERMDATA_STRUCT::poiInformation</a>. [More\...](#ga54b024713e6b8dd6d99e3c1d18005496)<br/> |
| #define  | [TAG_8C_CDOL_1](#ga2aac30055f056cf447f27cd31ba71d3c)   0x8Cu |
|   | CDOL 1 (**8C**) [More\...](#ga2aac30055f056cf447f27cd31ba71d3c)<br/> |
| #define  | [TAG_8D_CDOL_2](#gabd3001e707d2a1d10fcb130edc3b3d29)   0x8Du |
|   | CDOL 2 (**8D**) [More\...](#gabd3001e707d2a1d10fcb130edc3b3d29)<br/> |
| #define  | [TAG_8E_CVM_LIST](#ga94548248d5f87864250eb58aa7f09907)   0x8Eu |
|   | Cardholder Verification Method List (**8E**) [More\...](#ga94548248d5f87864250eb58aa7f09907)<br/> |
| #define  | [TAG_8F_CERTIF_AUTH_PK_ID](#ga3187732cabfd0142ed5023862e9f95ed)   0x8Fu |
|   | Certification Autority Public key Index (**8F**) [More\...](#ga3187732cabfd0142ed5023862e9f95ed)<br/> |
| #define  | [TAG_90_ISS_PK_CERTIF](#ga168d90e4e8849e861c161c2a3c49a453)   0x90u |
|   | Issuer Public Key Certificate (**90**) [More\...](#ga168d90e4e8849e861c161c2a3c49a453)<br/> |
| #define  | [TAG_91_ISS_AUTH_DATA](#ga93aecd9e60fdb7fc4ab5a00fffee031b)   0x91u |
|   | Issuer Authentication Data (**91**)<br/>used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a3e5fe321afd3d5b2db35d2d2bcdc800e">EMV_CTLS_HOST_STRUCT::AuthData</a>. [More\...](#ga93aecd9e60fdb7fc4ab5a00fffee031b)<br/> |
| #define  | [TAG_92_ISS_PK_REMAINDER](#ga5a4a55da5763dd2eead482efcb3f9f22)   0x92u |
|   | Issuer Public Key Remainder (**92**) [More\...](#ga5a4a55da5763dd2eead482efcb3f9f22)<br/> |
| #define  | [TAG_93_SGND_STAT_APP_DATA](#ga9035588232752ac8152011dc9b2cf631)   0x93u |
|   | Signed Static Application Data (**93**) [More\...](#ga9035588232752ac8152011dc9b2cf631)<br/> |
| #define  | [TAG_94_AFL](#ga18001e35a684a0041657e827a14ef456)   0x94u |
|   | Application File Locator (**94**) [More\...](#ga18001e35a684a0041657e827a14ef456)<br/> |
| #define  | [TAG_95_TVR](#ga3227240d53824d37d80b5f5a254daf2a)   0x95u |
|   | Terminal Verification Result (**95**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ab7c83532ed5caeb00101916a4d20c862">EMV_CTLS_TRANSRES_STRUCT::T_95_TVR</a>. [More\...](#ga3227240d53824d37d80b5f5a254daf2a)<br/> |
| #define  | [TAG_97_TDOL](#ga83a27d3f0c37cfdfe55bcd0901cb7a58)   0x97u |
|   | TDOL (**97**) [More\...](#ga83a27d3f0c37cfdfe55bcd0901cb7a58)<br/> |
| #define  | [TAG_98_TC_HASH_VALUE](#gaab57f1b001e401de3ec7d24b90f378a7)   0x98u |
|   | Transaction Certificate Hash Value (**98**) [More\...](#gaab57f1b001e401de3ec7d24b90f378a7)<br/> |
| #define  | [TAG_99_TRANS_PIN_DATA](#ga7691cae1ae03d3345deacc2300ba161e)   0x99u |
|   | Transaction PIN Data (**99**) [More\...](#ga7691cae1ae03d3345deacc2300ba161e)<br/> |
| #define  | [TAG_9A_TRANS_DATE](#ga9b8dc8671fc9d3af99aefdf59659cd67)   0x9Au |
|   | Transaction Date (**9A**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a82dfa85492013ef19f23e3446d470a4a">EMV_CTLS_TRANSRES_STRUCT::T_9A_Date</a>, and <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a775d3e156bcce4f815658cbaca54de4f">EMV_CTLS_PAYMENT_STRUCT::Date</a>. [More\...](#ga9b8dc8671fc9d3af99aefdf59659cd67)<br/> |
| #define  | [TAG_9B_TSI](#ga42e197884e26dbe7ef666d8f6881b376)   0x9Bu |
|   | Transaction Status Information (**9B**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a3a483bca9d788db046219dc80b8251e0">EMV_CTLS_TRANSRES_STRUCT::T_9B_TSI</a>. [More\...](#ga42e197884e26dbe7ef666d8f6881b376)<br/> |
| #define  | [TAG_9C_TRANS_TYPE](#ga4064d8681a4f0a40f4a3bf304f2a0902)   0x9Cu |
|   | Transaction Type (**9C**)<br/>used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a89e1907a3fb369ef96d8ae2de716acad">EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType</a>. [More\...](#ga4064d8681a4f0a40f4a3bf304f2a0902)<br/> |
| #define  | [TAG_9D_DDF_NAME](#ga37efa7b9d05b931462f22fa75542845d)   0x9Du |
|   | <a href="class_directory.md">Directory</a> Definition File Name (**9D**) [More\...](#ga37efa7b9d05b931462f22fa75542845d)<br/> |
| #define  | [TAG_9F01_ACQ_ID](#gaab4cf8e32535962270e6219bcbc08194)   0x9F01u |
|   | Acquirer Identifier (**9F01**) [More\...](#gaab4cf8e32535962270e6219bcbc08194)<br/> |
| #define  | [TAG_9F02_NUM_AMOUNT_AUTH](#ga6952b55733eff49c55768a6f7802f9e4)   0x9F02u |
|   | Amount Authorized (Numeric) (**9F02**)<br/>used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a30d37bb81b40a6e53cb3081ee862ddef">EMV_CTLS_PAYMENT_STRUCT::Amount</a>. [More\...](#ga6952b55733eff49c55768a6f7802f9e4)<br/> |
| #define  | [TAG_9F03_NUM_AMOUNT_OTHER](#gaccc339b2226ade4b5ab935624377f800)   0x9F03u |
|   | Amount Other (Numeric) (**9F03**)<br/>used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#aa3226314fccbb9ce083892654db4c0a4">EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount</a>. [More\...](#gaccc339b2226ade4b5ab935624377f800)<br/> |
| #define  | [TAG_9F04_BIN_AMOUNT_OTHER](#ga19e6864aff86c11e64b2ba1685b2aaa0)   0x9F04u |
|   | Amount Other (Binary) (**9F04**)<br/>can be used to fetch <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#aa3226314fccbb9ce083892654db4c0a4">EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount</a> as 4-byte-binary-coded value by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> [More\...](#ga19e6864aff86c11e64b2ba1685b2aaa0)<br/> |
| #define  | [TAG_9F05_APP_DISCR_DATA](#ga4bea514ddd3305a371b36e09a78bb560)   0x9F05u |
|   | Application Discretionary Data (**9F05**) [More\...](#ga4bea514ddd3305a371b36e09a78bb560)<br/> |
| #define  | [TAG_9F06_AID](#ga7670871675627d7e74d29683fbacf01a)   0x9F06u |
|   | Application Identifier (AID)-terminal (**9F06**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a6f049fe2417bdca3916cf4414f79a3e2">EMV_CTLS_TRANSRES_STRUCT::T_9F06_AID</a>. [More\...](#ga7670871675627d7e74d29683fbacf01a)<br/> |
| #define  | [TAG_9F07_APP_USAGE_CONTROL](#gacbc210315b12dab79eb6f8cc1cfe79f2)   0x9F07u |
|   | Application Usage Control (**9F07**) [More\...](#gacbc210315b12dab79eb6f8cc1cfe79f2)<br/> |
| #define  | [TAG_9F08_ICC_APP_VERSION_NB](#ga49ac73f311523b949020821550b7cda8)   0x9F08u |
|   | Application Version Number - ICC (**9F08**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ae24c7f2703201392ba5eaa2e0d2febd7">EMV_CTLS_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No</a>. [More\...](#ga49ac73f311523b949020821550b7cda8)<br/> |
| #define  | [TAG_9F09_TRM_APP_VERSION_NB](#gac0fb6f2c9da5e835754d94e7edf4f7c2)   0x9F09u |
|   | Application Version Number (**9F09**)<br/>used in most schemes of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a85e80490e4f5516c7cb1966011d0c359">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::Scheme</a>. [More\...](#gac0fb6f2c9da5e835754d94e7edf4f7c2)<br/> |
| #define  | [TAG_9F0A_ASRPD](#gac5bdc3a443d2b32f1898d095609ec871)   0x9F0Au |
|   | Application Selection Registered Proprietary Data (**9F0A**)<br/>EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, \...) ID: 2 byte, L: length, 1 byte. [More\...](#gac5bdc3a443d2b32f1898d095609ec871)<br/> |
| #define  | [TAG_9F0B_CARDHOLDER_NAME_XT](#gae1a12d59719645310bdbe8c778460d8b)   0x9F0Bu |
|   | Cardholder Name Extended (**9F0B**) [More\...](#gae1a12d59719645310bdbe8c778460d8b)<br/> |
| #define  | [TAG_9F0C_ISSUER_ID_EXT](#gaa2f5cfcf442860cea8e1021150b9e5c5)   0x9F0Cu |
|   | Issuer Identification Number Extended SB N°231 (**9F0C**)<br/>used for <a href="group___f_u_n_c___f_l_o_w.md#a0c9b7f7b7001ce7a98a7a01e1276786b">EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN</a> when IIN length is 4. [More\...](#gaa2f5cfcf442860cea8e1021150b9e5c5)<br/> |
| #define  | [TAG_9F0D_IAC_DEFAULT](#gaf1f1b225dbba527e67b529d1b9bc0b41)   0x9F0Du |
|   | Issuer Action Code - Default (**9F0D**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a78cc77069e865792d6bfa5d54b7fd3a7">EMV_CTLS_TRANSRES_STRUCT::T_9F0D_IACDefault</a>. [More\...](#gaf1f1b225dbba527e67b529d1b9bc0b41)<br/> |
| #define  | [TAG_9F0E_IAC_DENIAL](#ga56066a347d8d88263ea6340cccbae911)   0x9F0Eu |
|   | Issuer Action Code - Denial (**9F0E**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a21b49faa952c458dcf2743473486817c">EMV_CTLS_TRANSRES_STRUCT::T_9F0E_IACDenial</a>. [More\...](#ga56066a347d8d88263ea6340cccbae911)<br/> |
| #define  | [TAG_9F0F_IAC_ONLINE](#gaff475c053b8dce5ca076bc3613c3888a)   0x9F0Fu |
|   | Issuer Action Code - Online (**9F0F**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a685a012758034411221da9ae0b667277">EMV_CTLS_TRANSRES_STRUCT::T_9F0F_IACOnline</a>. [More\...](#gaff475c053b8dce5ca076bc3613c3888a)<br/> |
| #define  | [TAG_9F10_ISS_APP_DATA](#ga1ff0740aef66ba7bc912c7262abd86d0)   0x9F10u |
|   | Issuer Application Data (**9F10**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ab2e7ecdb8e54b69dfa718f6f7fb7fed7">EMV_CTLS_TRANSRES_STRUCT::T_9F10_DataIssuer</a>. [More\...](#ga1ff0740aef66ba7bc912c7262abd86d0)<br/> |
| #define  | [TAG_9F11_ISS_CODE_TABLE_ID](#gaec3d1fc145f66b87ec5416b7d6cb69aa)   0x9F11u |
|   | Issuer Code Table Index (**9F11**) [More\...](#gaec3d1fc145f66b87ec5416b7d6cb69aa)<br/> |
| #define  | [TAG_9F12_APP_PREFERRED_NAME](#gaf705ddff22734d558b161db19bf24038)   0x9F12u |
|   | Application Preferred Name (**9F12**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a1a933985680b099e926e54086a602c12">EMV_CTLS_TRANSRES_STRUCT::AppName</a>. [More\...](#gaf705ddff22734d558b161db19bf24038)<br/> |
| #define  | [TAG_9F13_LAST_ONLINE_ATC](#ga657ab92f37b6da29874ecc2e40f66654)   0x9F13u |
|   | Last Online ATC Register (**9F13**) [More\...](#ga657ab92f37b6da29874ecc2e40f66654)<br/> |
| #define  | [TAG_9F14_LO_OFFLINE_LIMIT](#ga70f157218d7fdca32a6adea6d96d1815)   0x9F14u |
|   | Lower Consecutive Offline Limit (**9F14**) [More\...](#ga70f157218d7fdca32a6adea6d96d1815)<br/> |
| #define  | [TAG_9F15_MERCH_CATEG_CODE](#ga41481cf04242a0ba441c87f6a1569639)   0x9F15u |
|   | Merchant Category Code (**9F15**) [More\...](#ga41481cf04242a0ba441c87f6a1569639)<br/> |
| #define  | [TAG_9F16_MERCHANT_ID](#ga184ccaaef50ada9988bfd4af37b8c9fb)   0x9F16u |
|   | Merchant Identifier (**9F16**) [More\...](#ga184ccaaef50ada9988bfd4af37b8c9fb)<br/> |
| #define  | [TAG_9F17_PIN_TRIES_LEFT](#ga9fab68d1de5156b91a399f80ae4f0e9d)   0x9F17u |
|   | PIN Try Counter (**9F17**) [More\...](#ga9fab68d1de5156b91a399f80ae4f0e9d)<br/> |
| #define  | [TAG_9F18_ISS_SCRIPT_ID](#ga7a6c8f96bdd8a98f8122825695d6cb9b)   0x9F18u |
|   | Issuer Script Identifier (**9F18**)<br/>to be used to fill <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#afd420a16596fd515042c455eaf81dbc5">EMV_CTLS_HOST_STRUCT::ScriptData</a>. [More\...](#ga7a6c8f96bdd8a98f8122825695d6cb9b)<br/> |
| #define  | [TAG_9F1A_TRM_COUNTRY_CODE](#ga5bc987c3686fd5821f20d21015354787)   0x9F1Au |
|   | Terminal Country Code (**9F1A**)<br/>Configured with <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a0cd015d4fd7fa26a9c13d6687dcc1aea">EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm</a>. [More\...](#ga5bc987c3686fd5821f20d21015354787)<br/> |
| #define  | [TAG_9F1B_TRM_FLOOR_LIMIT](#gab275fa140f8e21bda8e1d0bdafe47602)   0x9F1Bu |
|   | Terminal Floor Limit (**9F1B**)<br/>not used anymore for contactless interface. [More\...](#gab275fa140f8e21bda8e1d0bdafe47602)<br/> |
| #define  | [TAG_9F1C_TRM_ID](#ga64f401e453e74b4ff1f727aa7cc449ac)   0x9F1Cu |
|   | Terminal Identification (**9F1C**) [More\...](#ga64f401e453e74b4ff1f727aa7cc449ac)<br/> |
| #define  | [TAG_9F1D_TRM_RISK_MNGT_DATA](#ga9d809ba2d6c28d0989f1bbffffe35a45)   0x9F1Du |
|   | Terminal Risk Management Data (**9F1D**)<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad71cd39800ac88311b925feaeafef835">EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalRiskManagementData_9F1D</a>. [More\...](#ga9d809ba2d6c28d0989f1bbffffe35a45)<br/> |
| #define  | [TAG_9F1E_IFD_SERIAL_NB](#ga1edb578c8df9ce5a55b3204cda45d198)   0x9F1Eu |
|   | Interface Device (IFD) Serial Number (**9F1E**)<br/>used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a291c422cae05265d91a2b025867c32b4">EMV_CTLS_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber</a>. [More\...](#ga1edb578c8df9ce5a55b3204cda45d198)<br/> |
| #define  | [TAG_9F1F_TRACK_1_DISCR_DATA](#gac8f2609592cabb5c3a24b5133ac80ada)   0x9F1Fu |
|   | Track 1 Discretionary Data (**9F1F**) [More\...](#gac8f2609592cabb5c3a24b5133ac80ada)<br/> |
| #define  | [TAG_9F20_TRACK_2_DISCR_DATA](#gab7edbeb7b44a8c24e58b717d73b2cffb)   0x9F20u |
|   | Track 2 Discretionary Data (**9F20**) [More\...](#gab7edbeb7b44a8c24e58b717d73b2cffb)<br/> |
| #define  | [TAG_9F21_TRANS_TIME](#ga680a68f0ce959ac674f997968145a09c)   0x9F21u |
|   | Transaction Time (**9F21**)<br/>used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ab2e402d904a352a99a517cf77ed2d875">EMV_CTLS_PAYMENT_STRUCT::Time</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a174ff228cb3d664e05bbc093fcdd9a3a">EMV_CTLS_TRANSRES_STRUCT::T_9F21_Time</a>. [More\...](#ga680a68f0ce959ac674f997968145a09c)<br/> |
| #define  | [TAG_9F22_CERTIF_AUTH_PK_ID](#ga14c698c859256684f32e839458068cd5)   0x9F22u |
|   | Certification Authority Public Key Index (**9F22**) [More\...](#ga14c698c859256684f32e839458068cd5)<br/> |
| #define  | [TAG_9F23_HI_OFFLINE_LIMIT](#ga7b7e272aa0bc0787fa134364d0353f7a)   0x9F23u |
|   | Upper Consecutive Offline Limit (**9F23**) [More\...](#ga7b7e272aa0bc0787fa134364d0353f7a)<br/> |
| #define  | [TAG_9F24_PAYM_ACCOUNT_REF](#ga5b15a8b40aafbe917ef7aa6e10614115)   0x9F24u |
|   | Payment Account Reference (**9F24**)<br/>EMV Specification Bulletin No. 178, an29. [More\...](#ga5b15a8b40aafbe917ef7aa6e10614115)<br/> |
| #define  | [TAG_9F26_APP_CRYPTOGRAM](#gac5b1de965da383855ef078f7c001efe1)   0x9F26u |
|   | Application Cryptogram (**9F26**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a10c360689ac25ffda269b58686ccfda9">EMV_CTLS_TRANSRES_STRUCT::T_9F26_Cryptogramm</a>. [More\...](#gac5b1de965da383855ef078f7c001efe1)<br/> |
| #define  | [TAG_9F27_CRYPT_INFO_DATA](#gaa101e01de60c1261ba8324079a299e33)   0x9F27u |
|   | Cryptogram Information Data (**9F27**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a2dbcdd3fc07a3872b2409d8f10cf2120">EMV_CTLS_TRANSRES_STRUCT::T_9F27_CryptInfo</a>. [More\...](#gaa101e01de60c1261ba8324079a299e33)<br/> |
| #define  | [TAG_9F2D_ICC_PIN_PK_CERTIF](#ga391f852dd1cd82d9e3db321d2e469fed)   0x9F2Du |
|   | ICC PIN Encipherment Public Key Certificate (**9F2D**) [More\...](#ga391f852dd1cd82d9e3db321d2e469fed)<br/> |
| #define  | [TAG_9F2E_ICC_PIN_PK_EXP](#gae00bfd84ee0e62edf15020fad073da0d)   0x9F2Eu |
|   | ICC PIN Encipherment Public Key Exponent (**9F2E**) [More\...](#gae00bfd84ee0e62edf15020fad073da0d)<br/> |
| #define  | [TAG_9F2F_ICC_PIN_PK_REMAIN](#ga851b285c89b77afb3cbaf3c2eec213ee)   0x9F2Fu |
|   | ICC PIN Encipherment Public Key Remainder (**9F2F**) [More\...](#ga851b285c89b77afb3cbaf3c2eec213ee)<br/> |
| #define  | [TAG_9F32_ISS_PK_EXP](#ga795617047882a82433810ac8c329f4e7)   0x9F32u |
|   | Issuer Public Key Exponent (**9F32**) [More\...](#ga795617047882a82433810ac8c329f4e7)<br/> |
| #define  | [TAG_9F33_TRM_CAPABILITIES](#gad3ec876483505eb23aad4e1b210653f5)   0x9F33u |
|   | Terminal Capabilities (**9F33**) [More\...](#gad3ec876483505eb23aad4e1b210653f5)<br/> |
| #define  | [TAG_9F34_CVM_RESULTS](#gabdd39eac033e163719eb2f845fffbf62)   0x9F34u |
|   | Cardholder Verification Method (CVM) Results (**9F34**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aff7dce3be9087c81bbf864aa71c7574d">EMV_CTLS_TRANSRES_STRUCT::T_9F34_CVM_Res</a>. [More\...](#gabdd39eac033e163719eb2f845fffbf62)<br/> |
| #define  | [TAG_9F35_TRM_TYPE](#gace5b4ef50a58d29b2f5296c2c17273c9)   0x9F35u |
|   | Terminal Type (**9F35**)<br/>used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CTLS_TERMDATA_STRUCT::TermTyp</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a4ae8c1f40415ecbca8b6664a3bfadcc7">EMV_CTLS_TRANSRES_STRUCT::T_9F35_TermTyp</a>. [More\...](#gace5b4ef50a58d29b2f5296c2c17273c9)<br/> |
| #define  | [TAG_9F36_ATC](#ga776acfe7de52e4ec25163354ead04dcb)   0x9F36u |
|   | Application Transaction Counter (ATC) (**9F36**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aae70ced9d0c58160e46c79790ce36d1c">EMV_CTLS_TRANSRES_STRUCT::T_9F36_ATC</a>. [More\...](#ga776acfe7de52e4ec25163354ead04dcb)<br/> |
| #define  | [TAG_9F37_UNPREDICTABLE_NB](#gad08084306abcf29bb9517b75b0b5b189)   0x9F37u |
|   | Unpredictable Number (**9F37**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aeb4a47c49c6c551d25b2fca5be2da26d">EMV_CTLS_TRANSRES_STRUCT::T_9F37_RandomNumber</a>. [More\...](#gad08084306abcf29bb9517b75b0b5b189)<br/> |
| #define  | [TAG_9F38_PDOL](#ga481f3da31ceffcdc7facf7a40da6a7a8)   0x9F38u |
|   | Processing Options Data Object List (PDOL) (**9F38**) [More\...](#ga481f3da31ceffcdc7facf7a40da6a7a8)<br/> |
| #define  | [TAG_9F39_POS_ENTRY_MODE](#ga52532bf55c516d8055dcba4695fdc159)   0x9F39u |
|   | Point-of-Service (POS) Entry Mode (**9F39**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a81dbb9b0eba94a7659f91f570a48a4d4">EMV_CTLS_TRANSRES_STRUCT::T_9F39_POSEntryMode</a>. [More\...](#ga52532bf55c516d8055dcba4695fdc159)<br/> |
| #define  | [TAG_9F3A_AMNT_REF_CURRENCY](#ga9fb361d5d732411517cf1c33baa1ba42)   0x9F3Au |
|   | Amount, Reference Currency (**9F3A**) [More\...](#ga9fb361d5d732411517cf1c33baa1ba42)<br/> |
| #define  | [TAG_9F3B_APP_REF_CURRENCY](#ga833bd7d1ca1d973bec1b42fc12c39f63)   0x9F3Bu |
|   | Application Reference Currency (**9F3B**) [More\...](#ga833bd7d1ca1d973bec1b42fc12c39f63)<br/> |
| #define  | [TAG_9F3C_TRANS_REF_CURRENCY](#ga5af69c050d6db276c4c9a111bd638003)   0x9F3Cu |
|   | Transaction Reference Currency Code (**9F3C**) [More\...](#ga5af69c050d6db276c4c9a111bd638003)<br/> |
| #define  | [TAG_9F3D_TRANS_CURRENCY_EXP](#gad22456b0beb48767f0f71fc0202dbddc)   0x9F3Du |
|   | Transaction Reference Currency Exponent (**9F3D**) [More\...](#gad22456b0beb48767f0f71fc0202dbddc)<br/> |
| #define  | [TAG_9F40_ADD_TRM_CAP](#ga5670c7d223a0af749d5b8b251e32f870)   0x9F40u |
|   | Additional Terminal Capabilities (**9F40**) [More\...](#ga5670c7d223a0af749d5b8b251e32f870)<br/> |
| #define  | [TAG_9F41_TRANS_SEQUENCE_NB](#gab382a6fa7762c3e7589ad7cf877d77fc)   0x9F41u |
|   | Transaction Sequence Counter (**9F41**)<br/>used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#abe3243bfe7a5470e7218711c199bddc7">EMV_CTLS_PAYMENT_STRUCT::TransCount</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aa2802e6fa5a5b2f01dd1abcda266a614">EMV_CTLS_TRANSRES_STRUCT::T_9F41_TransCount</a>. [More\...](#gab382a6fa7762c3e7589ad7cf877d77fc)<br/> |
| #define  | [TAG_9F42_APP_CURRENCY_CODE](#gac2b5ddfa533fc2ce2612d1f126b2ed5f)   0x9F42u |
|   | Application Currency Code (**9F42**) [More\...](#gac2b5ddfa533fc2ce2612d1f126b2ed5f)<br/> |
| #define  | [TAG_9F43_APP_REF_CURRCY_EXP](#ga4230108db4010ae0ac2b6db706eb8f5a)   0x9F43u |
|   | Application Reference Currency Exponent (**9F43**) [More\...](#ga4230108db4010ae0ac2b6db706eb8f5a)<br/> |
| #define  | [TAG_9F44_APP_CURRENCY_EXP](#ga4120687590bf9c322c44899b30415c3f)   0x9F44u |
|   | Application Currency Exponent (**9F44**) [More\...](#ga4120687590bf9c322c44899b30415c3f)<br/> |
| #define  | [TAG_9F45_DATA_AUTHENT_CODE](#gafb250579afe8802f385c3c654980db4c)   0x9F45u |
|   | Data Authentication Code (**9F45**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a47e963c2b1eeea3a0c3cfa5b96e9a0b9">EMV_CTLS_TRANSRES_STRUCT::T_9F45_DataAuthCode</a>. [More\...](#gafb250579afe8802f385c3c654980db4c)<br/> |
| #define  | [TAG_9F46_ICC_PK_CERTIF](#ga7a894771929116e6d996a626211de03d)   0x9F46u |
|   | ICC Public Key Certificate (**9F46**) [More\...](#ga7a894771929116e6d996a626211de03d)<br/> |
| #define  | [TAG_9F47_ICC_PK_EXP](#ga11034b96c501139accb50579ce3695a5)   0x9F47u |
|   | ICC Public Key Exponent (**9F47**) [More\...](#ga11034b96c501139accb50579ce3695a5)<br/> |
| #define  | [TAG_9F48_ICC_PK_REMAINDER](#ga6d18aea1c51bf6447e8006beff6357bf)   0x9F48u |
|   | ICC Public Key Remainder (**9F48**) [More\...](#ga6d18aea1c51bf6447e8006beff6357bf)<br/> |
| #define  | [TAG_9F49_DDOL](#ga3a1c986ad7ea241d2c32a656fd2efc49)   0x9F49u |
|   | Dynamic Data Authentication Data Object List (**9F49**) [More\...](#ga3a1c986ad7ea241d2c32a656fd2efc49)<br/> |
| #define  | [TAG_9F4A_SDA_TAG_LIST](#ga37dc2d303ed0a83212ac1b0a4751d124)   0x9F4Au |
|   | Static Data Authentication Tag List (**9F4A**) [More\...](#ga37dc2d303ed0a83212ac1b0a4751d124)<br/> |
| #define  | [TAG_9F4B_SDA_DATA](#gaffa11c953890e255d8bab4aa2b0857e2)   0x9F4Bu |
|   | Signed Dynamic Application Data (**9F4B**) [More\...](#gaffa11c953890e255d8bab4aa2b0857e2)<br/> |
| #define  | [TAG_9F4C_ICC_DYNAMIC_NB](#ga6582a8aec892abaaf7328da0a9160a1f)   0x9F4Cu |
|   | ICC Dynamic Number (**9F4C**)<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#abb125f84afc30b4103bf1c25ff052e82">EMV_CTLS_TRANSRES_STRUCT::T_9F4C_ICCDynNumber</a>. [More\...](#ga6582a8aec892abaaf7328da0a9160a1f)<br/> |
| #define  | [TAG_9F4E_TAC_MERCHANTLOC](#gac3a7de1661225ab41a4529b68d1fda71)   0x9F4Eu |
|   | Merchant name and location (VISA VCPS 2.1.1) (**9F4E**) [More\...](#gac3a7de1661225ab41a4529b68d1fda71)<br/> |
| #define  | [TAG_A5_FCI_PROPR_TPLT](#gab03193acf8a5a09e20e9cf2478713bf4)   0xA5u |
|   | FCI Proprietary Template (**A5**) [More\...](#gab03193acf8a5a09e20e9cf2478713bf4)<br/> |
| #define  | [TAG_BF0C_FCI_ISS_DISCR](#ga87cf97daaa2f8375a36dd08318cdb38d)   0xBF0Cu |
|   | FCI Issuer Discretionary Data (**BF0C**) [More\...](#ga87cf97daaa2f8375a36dd08318cdb38d)<br/> |
| #define  | [TAG_42_ISSUER_ID](#ga15500b26a3968d2936b031cca37b93f2)   0x42u |
|   | Issuer Identification Number (IIN) (**42**)<br/>used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0c9b7f7b7001ce7a98a7a01e1276786b">EMV_CT_CANDIDATE_DATA_STRUCT::IIN</a>. [More\...](#ga15500b26a3968d2936b031cca37b93f2)<br/> |
| #define  | [TAG_4F_APP_ID](#gaa1a0900aa13055b0b5199a8542ea2c64)   0x4Fu |
|   | Application Identifier (AID) - Card (**4F**) [More\...](#gaa1a0900aa13055b0b5199a8542ea2c64)<br/> |
| #define  | [TAG_50_APP_LABEL](#ga70b6da94fde0a697b05755cdfc084023)   0x50u |
|   | Application Label (**50**)<br/>used for <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1a933985680b099e926e54086a602c12">EMV_CT_APPLIDATA_STRUCT::AppName</a>, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a84e55124aed375ea1277a675bff7cecf">EMV_CT_DOM_CHIP_STRUCT::ucAppName</a>, <a href="group___a_d_k___t_r_x___e_x_e_c.md#abb6b300f4e32bf0cceb25c0ce697dc93">EMV_CT_CANDIDATE_STRUCT::name</a>. [More\...](#ga70b6da94fde0a697b05755cdfc084023)<br/> |
| #define  | [TAG_52_CMD_TO_PERFORM](#ga5c2e2c1e49e22fe51669eaceaa8fad9d)   0x52u |
|   | Command to Perform (**52**) [More\...](#ga5c2e2c1e49e22fe51669eaceaa8fad9d)<br/> |
| #define  | [TAG_57_TRACK2_EQUIVALENT](#ga2e6e79fb698c2021efe43366f6517b76)   0x57u |
|   | Track 2 Equivalent Data (**57**)<br/>used as `T_57_DataTrack2` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, and `puc57_track2` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> ) [More\...](#ga2e6e79fb698c2021efe43366f6517b76)<br/> |
| #define  | [TAG_5A_APP_PAN](#ga4ccedb21a71fcb6ace22bac98ba548a5)   0x5Au |
|   | Application Primary Account Number (**5A**)<br/>used as `T_5A_PAN` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5A_pan` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> ), `puc5A_pan` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc5A_pan` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>) [More\...](#ga4ccedb21a71fcb6ace22bac98ba548a5)<br/> |
| #define  | [TAG_5F20_CARDHOLDER_NAME](#ga28d5c5d3a12cb3cf62e64ccb3e9258bc)   0x5F20u |
|   | Cardholder Name (**5F20**)<br/>used as `T_5F20_Cardholder` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5F24_expdate` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> ), and `uc5F24_expdate` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#afd0adcc12331559863dd65d8f7558645">TAG_BF05_CBK_DOM_APPS</a>) [More\...](#ga28d5c5d3a12cb3cf62e64ccb3e9258bc)<br/> |
| #define  | [TAG_5F24_APP_EXP_DATE](#ga5eb2095961ebe9a91e560003f75358bb)   0x5F24u |
|   | Application Expiration Data (**5F24**)<br/>used as `T_5F24_AppExpDate` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5F24_expdate` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> ), and `pucExpDate` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#afd0adcc12331559863dd65d8f7558645">TAG_BF05_CBK_DOM_APPS</a>) [More\...](#ga5eb2095961ebe9a91e560003f75358bb)<br/> |
| #define  | [TAG_5F25_APP_EFF_DATE](#gacd7028f61b8522799f207c7efa8e49d9)   0x5F25u |
|   | Application Effective Data (**5F25**)<br/>used as `T_5F25_AppEffDate` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gacd7028f61b8522799f207c7efa8e49d9)<br/> |
| #define  | [TAG_5F28_ISS_COUNTRY_CODE](#gaa35ef81cc90fe90126a537cbd611ead6)   0x5F28u |
|   | Issuer Country Code (**5F28**)<br/>used as `T_5F28_IssCountryCode` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, and `puc5F28_icc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> ) [More\...](#gaa35ef81cc90fe90126a537cbd611ead6)<br/> |
| #define  | [TAG_5F2A_TRANS_CURRENCY](#ga369ab2cc83e9b220bdfa79753f1f3962)   0x5F2Au |
|   | Transaction Currency Code (**5F2A**)<br/>Configured with `CurrencyTrans` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a> (for DCC possibly in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>). Used as `T_5F2A_CurrencyTrans` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5F2A_tcc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc5F2A_tcc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>) [More\...](#ga369ab2cc83e9b220bdfa79753f1f3962)<br/> |
| #define  | [TAG_5F2D_LANGUAGE](#gaaa613c7ef00b768c88fe5cc3ee16107b)   0x5F2Du |
|   | Language Preference (**5F2D**)<br/>used as `T_5F2D_Lang_Pref` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gaaa613c7ef00b768c88fe5cc3ee16107b)<br/> |
| #define  | [TAG_5F30_SERVICE_CODE](#gacc4c4f91bcb9bf9fef0ec1257292b93e)   0x5F30u |
|   | Service Code (**5F30**) [More\...](#gacc4c4f91bcb9bf9fef0ec1257292b93e)<br/> |
| #define  | [TAG_5F34_PAN_SEQUENCE_NB](#ga17f22ccb8130cc68e45609afc6b58f00)   0x5F34u |
|   | PAN Sequence Number (**5F34**)<br/>used as `T_5F34_PANSequenceNo` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga17f22ccb8130cc68e45609afc6b58f00)<br/> |
| #define  | [TAG_5F36_TRANS_CURRENCY_EXP](#ga134c61ae2787b93c5def5bbf929f7cb4)   0x5F36u |
|   | Transaction Currency Exponent (**5F36**)<br/>Configured with `Exp_Trans` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a> (for DCC possibly in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>). Used as `T_5F36_Trx_Currency_Exp` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5F36_tce` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc5F36_tce` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>) [More\...](#ga134c61ae2787b93c5def5bbf929f7cb4)<br/> |
| #define  | [TAG_5F50_ISSUER_URL](#ga15ecfca134c05f49a0ce50d5f0692355)   0x5F50u |
|   | Issuer URL (**5F50**) [More\...](#ga15ecfca134c05f49a0ce50d5f0692355)<br/> |
| #define  | [TAG_5F53_IBAN](#ga4c1beabb09d7dd5929f0947c3451378c)   0x5F53u |
|   | International Bank Account Number (IBAN) (**5F53**)<br/>used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#accc1d005f1b412f6c819f94555dbc25a">EMV_CT_CANDIDATE_DATA_STRUCT::IBAN</a>. [More\...](#ga4c1beabb09d7dd5929f0947c3451378c)<br/> |
| #define  | [TAG_5F54_BIC](#ga7c69e28da34f98b810cc96009ecdefe9)   0x5F54u |
|   | Bank Identifier Code (BIC) (**5F54**)<br/>used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac465a1be252b46a02fce89851b6d60fb">EMV_CT_CANDIDATE_DATA_STRUCT::BIC</a>. [More\...](#ga7c69e28da34f98b810cc96009ecdefe9)<br/> |
| #define  | [TAG_5F55_ISSUER_COUNTRY_2](#ga4a6770ebf323f538a78c12c78f3db783)   0x5F55u |
|   | Issuer Country Code (alpha 2 format) (**5F55**)<br/>used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#aa6458e13b23e10671e3c12ac21e69aaa">EMV_CT_CANDIDATE_DATA_STRUCT::country2</a>. [More\...](#ga4a6770ebf323f538a78c12c78f3db783)<br/> |
| #define  | [TAG_5F56_ISSUER_COUNTRY_3](#gad5bedd694cd7c7658a9bdc865f542a50)   0x5F56u |
|   | Issuer Country Code (alpha 3 format) (**5F56**)<br/>used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#aab088343104c0c1631f846fa907bbc19">EMV_CT_CANDIDATE_DATA_STRUCT::country3</a>. [More\...](#gad5bedd694cd7c7658a9bdc865f542a50)<br/> |
| #define  | [TAG_5F56_ISSUER_COUNTRY_CODE](#gad79ee95f2e225f2c320a93bb3ecca42b)   0x5F56u |
|   | Issuer Country Code (**5F56**) [More\...](#gad79ee95f2e225f2c320a93bb3ecca42b)<br/> |
| #define  | [TAG_5F57_ACCOUNT_TYPE](#ga18a257e1d8288f49eba5100e657039b6)   0x5F57u |
|   | Account Type (**5F57**) [More\...](#ga18a257e1d8288f49eba5100e657039b6)<br/> |
| #define  | [TAG_61_APP_TEMPLATE](#ga031f06652f6b1f5ede0a551c356e71b3)   0x61u |
|   | Application Template (**61**) [More\...](#ga031f06652f6b1f5ede0a551c356e71b3)<br/> |
| #define  | [TAG_6F_FCI_TEMPLATE](#ga9b09496d37327341a4d46ca4edf36182)   0x6Fu |
|   | File Control Information (FCI) Template (**6F**) [More\...](#ga9b09496d37327341a4d46ca4edf36182)<br/> |
| #define  | [TAG_70_AEF_DATA_TEMPLATE](#ga125edde9dae6966577fe85d580e90403)   0x70u |
|   | AEF Data Template (**70**) [More\...](#ga125edde9dae6966577fe85d580e90403)<br/> |
| #define  | [TAG_71_ISS_SCRIPT_TPLT_1](#ga977d84f3059e283c2b48c22024892a53)   0x71u |
|   | Issuer Script Template 1 (**71**) [More\...](#ga977d84f3059e283c2b48c22024892a53)<br/> |
| #define  | [TAG_72_ISS_SCRIPT_TPLT_2](#ga8b38f1870f3d6cb7259759bb567315c0)   0x72u |
|   | Issuer Script Template 2 (**72**) [More\...](#ga8b38f1870f3d6cb7259759bb567315c0)<br/> |
| #define  | [TAG_73_DIR_DISCR_TEMPLATE](#gaaa187c1d5255e009a402c6d727b4938f)   0x73u |
|   | <a href="class_directory.md">Directory</a> Discretionary Template (**73**) [More\...](#gaaa187c1d5255e009a402c6d727b4938f)<br/> |
| #define  | [TAG_77_RS_MSG_TPLT_FRMT_2](#ga33f61ca090446008781005b3bb12e264)   0x77u |
|   | Response Message Template Format 2 (**77**) [More\...](#ga33f61ca090446008781005b3bb12e264)<br/> |
| #define  | [TAG_80_RS_MSG_TPLT_FRMT_1](#gab8455feb7a5b1369aa97e5986745940f)   0x80u |
|   | Response Message Template Format 1 (**80**) [More\...](#gab8455feb7a5b1369aa97e5986745940f)<br/> |
| #define  | [TAG_81_BIN_AMOUNT_AUTH](#ga4b82c7a87ee02736af6cd4e298c1ae13)   0x81u |
|   | Amount Authorization Binary (**81**) [More\...](#ga4b82c7a87ee02736af6cd4e298c1ae13)<br/> |
| #define  | [TAG_82_AIP](#gaa87267a7ce44cc525b3515a3549898c2)   0x82u |
|   | Application Interchange Profile (**82**)<br/>used as `T_82_AIP` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gaa87267a7ce44cc525b3515a3549898c2)<br/> |
| #define  | [TAG_83_CMD_TPLT](#ga6a189bd2f9a0d77f24db3e88d89f5487)   0x83u |
|   | Command Template (**83**) [More\...](#ga6a189bd2f9a0d77f24db3e88d89f5487)<br/> |
| #define  | [TAG_84_DF_NAME](#ga69c4599943205d95394b62eef950e4c5)   0x84u |
|   | Dedicated File Name (**84**)<br/>used as `T_84_DFName` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga69c4599943205d95394b62eef950e4c5)<br/> |
| #define  | [TAG_86_ISS_SCRIPT_CMD](#ga5fadc36c7f5dee1b8c89cf331ed67a46)   0x86u |
|   | Issuer Script Command (**86**) [More\...](#ga5fadc36c7f5dee1b8c89cf331ed67a46)<br/> |
| #define  | [TAG_87_APP_PRIORITY_ID](#gaa307388012402f6923efc2609e11fd29)   0x87u |
|   | Application Priority Indicator (**87**)<br/>used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae6e6847f31d7ad74362c2de216df1372">EMV_CT_CANDIDATE_DATA_STRUCT::API</a>. [More\...](#gaa307388012402f6923efc2609e11fd29)<br/> |
| #define  | [TAG_88_SHORT_FILE_ID](#ga5aea7b31fe53ca6a11f69329dac5a75c)   0x88u |
|   | Short File Identifier (SFI) (**88**) [More\...](#ga5aea7b31fe53ca6a11f69329dac5a75c)<br/> |
| #define  | [TAG_89_AUTH_CODE](#ga8936aff551a261bc496fee1cc330486a)   0x89u |
|   | Authorization Code (**89**)<br/>used as `AuthorizationCode` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t">EMV_CT_HOST_STRUCT</a>. [More\...](#ga8936aff551a261bc496fee1cc330486a)<br/> |
| #define  | [TAG_8A_AUTH_RESP_CODE](#ga27bef53c14c4970b64ff44e4e78d20ba)   0x8Au |
|   | Authorization Response Code (**8A**)<br/>used as `AuthResp` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t">EMV_CT_HOST_STRUCT</a>. [More\...](#ga27bef53c14c4970b64ff44e4e78d20ba)<br/> |
| #define  | [TAG_8C_CDOL_1](#ga2aac30055f056cf447f27cd31ba71d3c)   0x8Cu |
|   | CDOL 1 (**8C**) [More\...](#ga2aac30055f056cf447f27cd31ba71d3c)<br/> |
| #define  | [TAG_8D_CDOL_2](#gabd3001e707d2a1d10fcb130edc3b3d29)   0x8Du |
|   | CDOL 2 (**8D**) [More\...](#gabd3001e707d2a1d10fcb130edc3b3d29)<br/> |
| #define  | [TAG_8E_CVM_LIST](#ga94548248d5f87864250eb58aa7f09907)   0x8Eu |
|   | Cardholder Verification Method List (**8E**) [More\...](#ga94548248d5f87864250eb58aa7f09907)<br/> |
| #define  | [TAG_8F_CERTIF_AUTH_PK_ID](#ga3187732cabfd0142ed5023862e9f95ed)   0x8Fu |
|   | Certification Autority Public key Index (**8F**) [More\...](#ga3187732cabfd0142ed5023862e9f95ed)<br/> |
| #define  | [TAG_90_ISS_PK_CERTIF](#ga168d90e4e8849e861c161c2a3c49a453)   0x90u |
|   | Issuer Public Key Certificate (**90**) [More\...](#ga168d90e4e8849e861c161c2a3c49a453)<br/> |
| #define  | [TAG_91_ISS_AUTH_DATA](#ga93aecd9e60fdb7fc4ab5a00fffee031b)   0x91u |
|   | Issuer Authentication Data (**91**)<br/>used as `AuthData` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t">EMV_CT_HOST_STRUCT</a>. [More\...](#ga93aecd9e60fdb7fc4ab5a00fffee031b)<br/> |
| #define  | [TAG_92_ISS_PK_REMAINDER](#ga5a4a55da5763dd2eead482efcb3f9f22)   0x92u |
|   | Issuer Public Key Remainder (**92**) [More\...](#ga5a4a55da5763dd2eead482efcb3f9f22)<br/> |
| #define  | [TAG_93_SGND_STAT_APP_DATA](#ga9035588232752ac8152011dc9b2cf631)   0x93u |
|   | Signed Static Application Data (**93**) [More\...](#ga9035588232752ac8152011dc9b2cf631)<br/> |
| #define  | [TAG_94_AFL](#ga18001e35a684a0041657e827a14ef456)   0x94u |
|   | Application File Locator (**94**) [More\...](#ga18001e35a684a0041657e827a14ef456)<br/> |
| #define  | [TAG_95_TVR](#ga3227240d53824d37d80b5f5a254daf2a)   0x95u |
|   | Terminal Verification Result (**95**)<br/>used as `T_95_TVR` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga3227240d53824d37d80b5f5a254daf2a)<br/> |
| #define  | [TAG_97_TDOL](#ga83a27d3f0c37cfdfe55bcd0901cb7a58)   0x97u |
|   | TDOL (**97**) [More\...](#ga83a27d3f0c37cfdfe55bcd0901cb7a58)<br/> |
| #define  | [TAG_98_TC_HASH_VALUE](#gaab57f1b001e401de3ec7d24b90f378a7)   0x98u |
|   | Transaction Certificate Hash Value (**98**) [More\...](#gaab57f1b001e401de3ec7d24b90f378a7)<br/> |
| #define  | [TAG_99_TRANS_PIN_DATA](#ga7691cae1ae03d3345deacc2300ba161e)   0x99u |
|   | Transaction PIN Data (**99**) [More\...](#ga7691cae1ae03d3345deacc2300ba161e)<br/> |
| #define  | [TAG_9A_TRANS_DATE](#ga9b8dc8671fc9d3af99aefdf59659cd67)   0x9Au |
|   | Transaction Date (**9A**)<br/>used as `T_9A_Date` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, and `Date` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>. [More\...](#ga9b8dc8671fc9d3af99aefdf59659cd67)<br/> |
| #define  | [TAG_9B_TSI](#ga42e197884e26dbe7ef666d8f6881b376)   0x9Bu |
|   | Transaction Status Information (**9B**)<br/>used as `T_9B_TSI` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga42e197884e26dbe7ef666d8f6881b376)<br/> |
| #define  | [TAG_9C_TRANS_TYPE](#ga4064d8681a4f0a40f4a3bf304f2a0902)   0x9Cu |
|   | Transaction Type (**9C**)<br/>used as `TransType` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>, `T_9C_TransType` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga4064d8681a4f0a40f4a3bf304f2a0902)<br/> |
| #define  | [TAG_9D_DDF_NAME](#ga37efa7b9d05b931462f22fa75542845d)   0x9Du |
|   | <a href="class_directory.md">Directory</a> Definition File Name (**9D**) [More\...](#ga37efa7b9d05b931462f22fa75542845d)<br/> |
| #define  | [TAG_9F01_ACQ_ID](#gaab4cf8e32535962270e6219bcbc08194)   0x9F01u |
|   | Acquirer Identifier (**9F01**) [More\...](#gaab4cf8e32535962270e6219bcbc08194)<br/> |
| #define  | [TAG_9F02_NUM_AMOUNT_AUTH](#ga6952b55733eff49c55768a6f7802f9e4)   0x9F02u |
|   | Amount Authorized (Numeric) (**9F02**)<br/>used as `Betrag_num` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>, `puc9F02_amount` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc9F02_amount` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>) [More\...](#ga6952b55733eff49c55768a6f7802f9e4)<br/> |
| #define  | [TAG_9F03_NUM_AMOUNT_OTHER](#gaccc339b2226ade4b5ab935624377f800)   0x9F03u |
|   | Amount Other (Numeric) (**9F03**) [More\...](#gaccc339b2226ade4b5ab935624377f800)<br/> |
| #define  | [TAG_9F04_BIN_AMOUNT_OTHER](#ga19e6864aff86c11e64b2ba1685b2aaa0)   0x9F04u |
|   | Amount Other (Binary) (**9F04**)<br/>used as `T_9F06_AID` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga19e6864aff86c11e64b2ba1685b2aaa0)<br/> |
| #define  | [TAG_9F05_APP_DISCR_DATA](#ga4bea514ddd3305a371b36e09a78bb560)   0x9F05u |
|   | Application Discretionary Data (**9F05**) [More\...](#ga4bea514ddd3305a371b36e09a78bb560)<br/> |
| #define  | [TAG_9F06_AID](#ga7670871675627d7e74d29683fbacf01a)   0x9F06u |
|   | Application Identifier (AID)-terminal (**9F06**)<br/>used as <a href="group___a_d_k___t_r_x___e_x_e_c.md#a01f5f1efd99e3e3be9139a95d5349941">EMV_CT_TRANSRES_STRUCT::T_9F06_AID</a> and <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9169197c16d59f125de973dad0339531">EMV_CT_CANDIDATE_DATA_STRUCT::len9F06</a>. [More\...](#ga7670871675627d7e74d29683fbacf01a)<br/> |
| #define  | [TAG_9F07_APP_USAGE_CONTROL](#gacbc210315b12dab79eb6f8cc1cfe79f2)   0x9F07u |
|   | Application Usage Control (**9F07**) [More\...](#gacbc210315b12dab79eb6f8cc1cfe79f2)<br/> |
| #define  | [TAG_9F08_ICC_APP_VERSION_NB](#ga49ac73f311523b949020821550b7cda8)   0x9F08u |
|   | Application Version Number - ICC (**9F08**)<br/>used as <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae24c7f2703201392ba5eaa2e0d2febd7">EMV_CT_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No</a>. [More\...](#ga49ac73f311523b949020821550b7cda8)<br/> |
| #define  | [TAG_9F09_TRM_APP_VERSION_NB](#gac0fb6f2c9da5e835754d94e7edf4f7c2)   0x9F09u |
|   | Application Version Number (**9F09**)<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4a13940a43927f00f7c701cb98131588">EMV_CT_APPLIDATA_STRUCT::VerNum</a>, `T_9F09_VerNum` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gac0fb6f2c9da5e835754d94e7edf4f7c2)<br/> |
| #define  | [TAG_9F0A_ASRPD](#gac5bdc3a443d2b32f1898d095609ec871)   0x9F0Au |
|   | Application Selection Registered Proprietary Data (**9F0A**)<br/>EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, \...) ID: 2 byte, L: length, 1 byte<br/>used as <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3e3bb2514827c49deb0057e9235980cc">EMV_CT_CANDIDATE_DATA_STRUCT::selData</a>. [More\...](#gac5bdc3a443d2b32f1898d095609ec871)<br/> |
| #define  | [TAG_9F0B_CARDHOLDER_NAME_XT](#gae1a12d59719645310bdbe8c778460d8b)   0x9F0Bu |
|   | Cardholder Name Extended (**9F0B**) [More\...](#gae1a12d59719645310bdbe8c778460d8b)<br/> |
| #define  | [TAG_9F0C_ISSUER_ID_EXT](#gaa2f5cfcf442860cea8e1021150b9e5c5)   0x9F0Cu |
|   | Issuer Identification Number Extended SB N°231 (**9F0C**)<br/>used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0c9b7f7b7001ce7a98a7a01e1276786b">EMV_CT_CANDIDATE_DATA_STRUCT::IIN</a> when IIN length is 4. [More\...](#gaa2f5cfcf442860cea8e1021150b9e5c5)<br/> |
| #define  | [TAG_9F0D_IAC_DEFAULT](#gaf1f1b225dbba527e67b529d1b9bc0b41)   0x9F0Du |
|   | Issuer Action Code - Default (**9F0D**)<br/>used as `T_9F0D_IACDefault` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gaf1f1b225dbba527e67b529d1b9bc0b41)<br/> |
| #define  | [TAG_9F0E_IAC_DENIAL](#ga56066a347d8d88263ea6340cccbae911)   0x9F0Eu |
|   | Issuer Action Code - Denial (**9F0E**)<br/>used as `T_9F0E_IACDenial` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga56066a347d8d88263ea6340cccbae911)<br/> |
| #define  | [TAG_9F0F_IAC_ONLINE](#gaff475c053b8dce5ca076bc3613c3888a)   0x9F0Fu |
|   | Issuer Action Code - Online (**9F0F**)<br/>used as `T_9F0F_IACOnline` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gaff475c053b8dce5ca076bc3613c3888a)<br/> |
| #define  | [TAG_9F10_ISS_APP_DATA](#ga1ff0740aef66ba7bc912c7262abd86d0)   0x9F10u |
|   | Issuer Application Data (**9F10**)<br/>used as `T_9F10_DataIssuer` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga1ff0740aef66ba7bc912c7262abd86d0)<br/> |
| #define  | [TAG_9F11_ISS_CODE_TABLE_ID](#gaec3d1fc145f66b87ec5416b7d6cb69aa)   0x9F11u |
| #define  | [TAG_9F12_APP_PREFERRED_NAME](#gaf705ddff22734d558b161db19bf24038)   0x9F12u |
|   | Application Preferred Name (**9F12**)<br/>used as `T_9F12_PreferredName` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t">EMV_CT_SELECTRES_STRUCT</a>. [More\...](#gaf705ddff22734d558b161db19bf24038)<br/> |
| #define  | [TAG_9F13_LAST_ONLINE_ATC](#ga657ab92f37b6da29874ecc2e40f66654)   0x9F13u |
|   | Last Online ATC Register (**9F13**) [More\...](#ga657ab92f37b6da29874ecc2e40f66654)<br/> |
| #define  | [TAG_9F14_LO_OFFLINE_LIMIT](#ga70f157218d7fdca32a6adea6d96d1815)   0x9F14u |
|   | Lower Consecutive Offline Limit (**9F14**) [More\...](#ga70f157218d7fdca32a6adea6d96d1815)<br/> |
| #define  | [TAG_9F15_MERCH_CATEG_CODE](#ga41481cf04242a0ba441c87f6a1569639)   0x9F15u |
|   | Merchant Category Code (**9F15**)<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aadaaf73921101bb812f90ec7c4a9d5dd">EMV_CT_APPLIDATA_STRUCT::BrKey</a>. [More\...](#ga41481cf04242a0ba441c87f6a1569639)<br/> |
| #define  | [TAG_9F16_MERCHANT_ID](#ga184ccaaef50ada9988bfd4af37b8c9fb)   0x9F16u |
|   | Merchant Identifier (**9F16**)<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3e3c059a7e2f459a449ab7e746046cf7">EMV_CT_APPLIDATA_STRUCT::MerchIdent</a>, `T_9F16_MerchIdent` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga184ccaaef50ada9988bfd4af37b8c9fb)<br/> |
| #define  | [TAG_9F17_PIN_TRIES_LEFT](#ga9fab68d1de5156b91a399f80ae4f0e9d)   0x9F17u |
|   | PIN Try Counter (**9F17**) [More\...](#ga9fab68d1de5156b91a399f80ae4f0e9d)<br/> |
| #define  | [TAG_9F18_ISS_SCRIPT_ID](#ga7a6c8f96bdd8a98f8122825695d6cb9b)   0x9F18u |
|   | Issuer Script Identifier (**9F18**) [More\...](#ga7a6c8f96bdd8a98f8122825695d6cb9b)<br/> |
| #define  | [TAG_9F1A_TRM_COUNTRY_CODE](#ga5bc987c3686fd5821f20d21015354787)   0x9F1Au |
|   | Terminal Country Code (**9F1A**)<br/>used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#af11a6d7b3bb1f5438dca672b746aeb11">EMV_CT_TERMDATA_STRUCT::TermCountryCode</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3cc1a7ad9805c9caf22a3164e3f1d326">EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm</a>, and <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9301d8a1bf495da0078826f0c1a981c8">EMV_CT_TRANSRES_STRUCT::T_9F1A_TermCountryCode</a>. [More\...](#ga5bc987c3686fd5821f20d21015354787)<br/> |
| #define  | [TAG_9F1B_TRM_FLOOR_LIMIT](#gab275fa140f8e21bda8e1d0bdafe47602)   0x9F1Bu |
|   | Terminal Floor Limit (**9F1B**)<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5fb4232c2d98685b61df7884ccfbaf5">EMV_CT_APPLIDATA_STRUCT::FloorLimit</a>, `puc9F1B_fl` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc9F1B_fl` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>) [More\...](#gab275fa140f8e21bda8e1d0bdafe47602)<br/> |
| #define  | [TAG_9F1C_TRM_ID](#ga64f401e453e74b4ff1f727aa7cc449ac)   0x9F1Cu |
|   | Terminal Identification (**9F1C**)<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_APPLIDATA_STRUCT::TermIdent</a>. [More\...](#ga64f401e453e74b4ff1f727aa7cc449ac)<br/> |
| #define  | [TAG_9F1D_TRM_RISK_MNGT_DATA](#ga9d809ba2d6c28d0989f1bbffffe35a45)   0x9F1Du |
|   | Terminal Risk Management Data (**9F1D**) [More\...](#ga9d809ba2d6c28d0989f1bbffffe35a45)<br/> |
| #define  | [TAG_9F1E_IFD_SERIAL_NB](#ga1edb578c8df9ce5a55b3204cda45d198)   0x9F1Eu |
|   | Interface Device (IFD) Serial Number (**9F1E**)<br/>used as `SerNum` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>, `T_9F1E_SerNum` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga1edb578c8df9ce5a55b3204cda45d198)<br/> |
| #define  | [TAG_9F1F_TRACK_1_DISCR_DATA](#gac8f2609592cabb5c3a24b5133ac80ada)   0x9F1Fu |
|   | Track 1 Discretionary Data (**9F1F**) [More\...](#gac8f2609592cabb5c3a24b5133ac80ada)<br/> |
| #define  | [TAG_9F20_TRACK_2_DISCR_DATA](#gab7edbeb7b44a8c24e58b717d73b2cffb)   0x9F20u |
|   | Track 2 Discretionary Data (**9F20**) [More\...](#gab7edbeb7b44a8c24e58b717d73b2cffb)<br/> |
| #define  | [TAG_9F21_TRANS_TIME](#ga680a68f0ce959ac674f997968145a09c)   0x9F21u |
|   | Transaction Time (**9F21**)<br/>used as `Time` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>, `T_9F21_Time` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga680a68f0ce959ac674f997968145a09c)<br/> |
| #define  | [TAG_9F22_CERTIF_AUTH_PK_ID](#ga14c698c859256684f32e839458068cd5)   0x9F22u |
|   | Certification Authority Public Key Index (**9F22**) [More\...](#ga14c698c859256684f32e839458068cd5)<br/> |
| #define  | [TAG_9F23_HI_OFFLINE_LIMIT](#ga7b7e272aa0bc0787fa134364d0353f7a)   0x9F23u |
|   | Upper Consecutive Offline Limit (**9F23**) [More\...](#ga7b7e272aa0bc0787fa134364d0353f7a)<br/> |
| #define  | [TAG_9F24_PAYM_ACCOUNT_REF](#ga5b15a8b40aafbe917ef7aa6e10614115)   0x9F24u |
|   | Payment Account Reference (**9F24**)<br/>EMV Specification Bulletin No. 178, an29. [More\...](#ga5b15a8b40aafbe917ef7aa6e10614115)<br/> |
| #define  | [TAG_9F26_APP_CRYPTOGRAM](#gac5b1de965da383855ef078f7c001efe1)   0x9F26u |
|   | Application Cryptogram (**9F26**)<br/>used as `T_9F26_Cryptogramm` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gac5b1de965da383855ef078f7c001efe1)<br/> |
| #define  | [TAG_9F27_CRYPT_INFO_DATA](#gaa101e01de60c1261ba8324079a299e33)   0x9F27u |
|   | Cryptogram Information Data (**9F27**)<br/>used as `T_9F27_CryptInfo` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gaa101e01de60c1261ba8324079a299e33)<br/> |
| #define  | [TAG_9F2D_ICC_PIN_PK_CERTIF](#ga391f852dd1cd82d9e3db321d2e469fed)   0x9F2Du |
|   | ICC PIN Encipherment Public Key Certificate (**9F2D**) [More\...](#ga391f852dd1cd82d9e3db321d2e469fed)<br/> |
| #define  | [TAG_9F2E_ICC_PIN_PK_EXP](#gae00bfd84ee0e62edf15020fad073da0d)   0x9F2Eu |
|   | ICC PIN Encipherment Public Key Exponent (**9F2E**) [More\...](#gae00bfd84ee0e62edf15020fad073da0d)<br/> |
| #define  | [TAG_9F2F_ICC_PIN_PK_REMAIN](#ga851b285c89b77afb3cbaf3c2eec213ee)   0x9F2Fu |
|   | ICC PIN Encipherment Public Key Remainder (**9F2F**) [More\...](#ga851b285c89b77afb3cbaf3c2eec213ee)<br/> |
| #define  | [TAG_9F32_ISS_PK_EXP](#ga795617047882a82433810ac8c329f4e7)   0x9F32u |
|   | Issuer Public Key Exponent (**9F32**) [More\...](#ga795617047882a82433810ac8c329f4e7)<br/> |
| #define  | [TAG_9F33_TRM_CAPABILITIES](#gad3ec876483505eb23aad4e1b210653f5)   0x9F33u |
|   | Terminal Capabilities (**9F33**)<br/>used as `TermCap` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7ac173f4a1d9a3845a18af806ee8bb31">EMV_CT_APPLIDATA_STRUCT::App_TermCap</a>, `T_9F33_TermCap` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gad3ec876483505eb23aad4e1b210653f5)<br/> |
| #define  | [TAG_9F34_CVM_RESULTS](#gabdd39eac033e163719eb2f845fffbf62)   0x9F34u |
|   | Cardholder Verification Method (CVM) Results (**9F34**)<br/>used as `T_9F34_CVM_Res` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gabdd39eac033e163719eb2f845fffbf62)<br/> |
| #define  | [TAG_9F35_TRM_TYPE](#gace5b4ef50a58d29b2f5296c2c17273c9)   0x9F35u |
|   | Terminal Type (**9F35**)<br/>used as `TermTyp` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>, `T_9F35_TermTyp` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gace5b4ef50a58d29b2f5296c2c17273c9)<br/> |
| #define  | [TAG_9F36_ATC](#ga776acfe7de52e4ec25163354ead04dcb)   0x9F36u |
|   | Application Transaction Counter (ATC) (**9F36**)<br/>used as `T_9F36_ATC` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga776acfe7de52e4ec25163354ead04dcb)<br/> |
| #define  | [TAG_9F37_UNPREDICTABLE_NB](#gad08084306abcf29bb9517b75b0b5b189)   0x9F37u |
|   | Unpredictable Number (**9F37**)<br/>used as `T_9F37_RandomNumber` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gad08084306abcf29bb9517b75b0b5b189)<br/> |
| #define  | [TAG_9F38_PDOL](#ga481f3da31ceffcdc7facf7a40da6a7a8)   0x9F38u |
|   | Processing Options Data Object List (PDOL) (**9F38**) [More\...](#ga481f3da31ceffcdc7facf7a40da6a7a8)<br/> |
| #define  | [TAG_9F39_POS_ENTRY_MODE](#ga52532bf55c516d8055dcba4695fdc159)   0x9F39u |
|   | Point-of-Service (POS) Entry Mode (**9F39**)<br/>used as EMV_CT_APPLIDATA_STRUCT::POS_Eing, `T_9F39_POSEntryMode` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga52532bf55c516d8055dcba4695fdc159)<br/> |
| #define  | [TAG_9F3A_AMNT_REF_CURRENCY](#ga9fb361d5d732411517cf1c33baa1ba42)   0x9F3Au |
|   | Amount, Reference Currency (**9F3A**)<br/>used as `Betrag_num` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>. [More\...](#ga9fb361d5d732411517cf1c33baa1ba42)<br/> |
| #define  | [TAG_9F3B_APP_REF_CURRENCY](#ga833bd7d1ca1d973bec1b42fc12c39f63)   0x9F3Bu |
|   | Application Reference Currency (**9F3B**) [More\...](#ga833bd7d1ca1d973bec1b42fc12c39f63)<br/> |
| #define  | [TAG_9F3C_TRANS_REF_CURRENCY](#ga5af69c050d6db276c4c9a111bd638003)   0x9F3Cu |
|   | Transaction Reference Currency Code (**9F3C**)<br/>In case CommonServices request this tag EMV ADK will give back same as [TAG_5F2A_TRANS_CURRENCY](#ga369ab2cc83e9b220bdfa79753f1f3962 "Transaction Currency Code (5F2A)   Configured with CurrencyTrans in EMV_CT_TERMDATA_STRUCT (for DCC p..."). [More\...](#ga5af69c050d6db276c4c9a111bd638003)<br/> |
| #define  | [TAG_9F3D_TRANS_CURRENCY_EXP](#gad22456b0beb48767f0f71fc0202dbddc)   0x9F3Du |
|   | Transaction Reference Currency Exponent (**9F3D**)<br/>In case CommonServices request this tag EMV ADK will give back same as [TAG_5F36_TRANS_CURRENCY_EXP](#ga134c61ae2787b93c5def5bbf929f7cb4 "Transaction Currency Exponent (5F36)   Configured with Exp_Trans in EMV_CT_TERMDATA_STRUCT (for DCC p..."). [More\...](#gad22456b0beb48767f0f71fc0202dbddc)<br/> |
| #define  | [TAG_9F40_ADD_TRM_CAP](#ga5670c7d223a0af749d5b8b251e32f870)   0x9F40u |
|   | Additional Terminal Capabilities (**9F40**)<br/>used as `TermAddCap` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa137395f6cc0b7618d9fec892c3c8b00">EMV_CT_APPLIDATA_STRUCT::App_TermAddCap</a>, `T_9F40_AddTermCap` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga5670c7d223a0af749d5b8b251e32f870)<br/> |
| #define  | [TAG_9F41_TRANS_SEQUENCE_NB](#gab382a6fa7762c3e7589ad7cf877d77fc)   0x9F41u |
|   | Transaction Sequence Counter (**9F41**)<br/>used as `TransCount` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t">EMV_CT_TRANSAC_STRUCT</a>, `T_9F41_TransCount` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gab382a6fa7762c3e7589ad7cf877d77fc)<br/> |
| #define  | [TAG_9F42_APP_CURRENCY_CODE](#gac2b5ddfa533fc2ce2612d1f126b2ed5f)   0x9F42u |
|   | Application Currency Code (**9F42**)<br/>used as `puc9F42_acc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), `puc9F42_acc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>) [More\...](#gac2b5ddfa533fc2ce2612d1f126b2ed5f)<br/> |
| #define  | [TAG_9F43_APP_REF_CURRCY_EXP](#ga4230108db4010ae0ac2b6db706eb8f5a)   0x9F43u |
|   | Application Reference Currency Exponent (**9F43**) [More\...](#ga4230108db4010ae0ac2b6db706eb8f5a)<br/> |
| #define  | [TAG_9F44_APP_CURRENCY_EXP](#ga4120687590bf9c322c44899b30415c3f)   0x9F44u |
|   | Application Currency Exponent (**9F44**) [More\...](#ga4120687590bf9c322c44899b30415c3f)<br/> |
| #define  | [TAG_9F45_DATA_AUTHENT_CODE](#gafb250579afe8802f385c3c654980db4c)   0x9F45u |
|   | Data Authentication Code (**9F45**)<br/>used as `T_9F45_DataAuthCode` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#gafb250579afe8802f385c3c654980db4c)<br/> |
| #define  | [TAG_9F46_ICC_PK_CERTIF](#ga7a894771929116e6d996a626211de03d)   0x9F46u |
|   | ICC Public Key Certificate (**9F46**) [More\...](#ga7a894771929116e6d996a626211de03d)<br/> |
| #define  | [TAG_9F47_ICC_PK_EXP](#ga11034b96c501139accb50579ce3695a5)   0x9F47u |
|   | ICC Public Key Exponent (**9F47**) [More\...](#ga11034b96c501139accb50579ce3695a5)<br/> |
| #define  | [TAG_9F48_ICC_PK_REMAINDER](#ga6d18aea1c51bf6447e8006beff6357bf)   0x9F48u |
|   | ICC Public Key Remainder (**9F48**) [More\...](#ga6d18aea1c51bf6447e8006beff6357bf)<br/> |
| #define  | [TAG_9F49_DDOL](#ga3a1c986ad7ea241d2c32a656fd2efc49)   0x9F49u |
|   | Dynamic Data Authentication Data Object List (**9F49**) [More\...](#ga3a1c986ad7ea241d2c32a656fd2efc49)<br/> |
| #define  | [TAG_9F4A_SDA_TAG_LIST](#ga37dc2d303ed0a83212ac1b0a4751d124)   0x9F4Au |
|   | Static Data Authentication Tag List (**9F4A**) [More\...](#ga37dc2d303ed0a83212ac1b0a4751d124)<br/> |
| #define  | [TAG_9F4B_SDA_DATA](#gaffa11c953890e255d8bab4aa2b0857e2)   0x9F4Bu |
|   | Signed Dynamic Application Data (**9F4B**) [More\...](#gaffa11c953890e255d8bab4aa2b0857e2)<br/> |
| #define  | [TAG_9F4C_ICC_DYNAMIC_NB](#ga6582a8aec892abaaf7328da0a9160a1f)   0x9F4Cu |
|   | ICC Dynamic Number (**9F4C**)<br/>used as `T_9F4C_ICCDynNumber` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>. [More\...](#ga6582a8aec892abaaf7328da0a9160a1f)<br/> |
| #define  | [TAG_9F4E_TAC_MERCHANTLOC](#gac3a7de1661225ab41a4529b68d1fda71)   0x9F4Eu |
|   | Merchant name and location (VISA VCPS 2.1.1) (**9F4E**) [More\...](#gac3a7de1661225ab41a4529b68d1fda71)<br/> |
| #define  | [TAG_A5_FCI_PROPR_TPLT](#gab03193acf8a5a09e20e9cf2478713bf4)   0xA5u |
|   | FCI Proprietary Template (**A5**) [More\...](#gab03193acf8a5a09e20e9cf2478713bf4)<br/> |
| #define  | [TAG_BF0C_FCI_ISS_DISCR](#ga87cf97daaa2f8375a36dd08318cdb38d)   0xBF0Cu |
|   | FCI Issuer Discretionary Data (**BF0C**) [More\...](#ga87cf97daaa2f8375a36dd08318cdb38d)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_42_ISSUER_ID\[1/2\] <a href="#ga15500b26a3968d2936b031cca37b93f2" id="ga15500b26a3968d2936b031cca37b93f2"></a> {#tag_42_issuer_id-12}

<p>#define TAG_42_ISSUER_ID   0x42u</p>

Issuer Identification Number (IIN) (**42**)
used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0c9b7f7b7001ce7a98a7a01e1276786b">EMV_CT_CANDIDATE_DATA_STRUCT::IIN</a>.

## TAG_42_ISSUER_ID\[2/2\] <a href="#ga15500b26a3968d2936b031cca37b93f2" id="ga15500b26a3968d2936b031cca37b93f2"></a> {#tag_42_issuer_id-22}

<p>#define TAG_42_ISSUER_ID   0x42u</p>

Issuer Identification Number (IIN) (**42**)
used as <a href="group___f_u_n_c___f_l_o_w.md#a0c9b7f7b7001ce7a98a7a01e1276786b">EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN</a>.

## TAG_4F_APP_ID\[1/2\] <a href="#gaa1a0900aa13055b0b5199a8542ea2c64" id="gaa1a0900aa13055b0b5199a8542ea2c64"></a> {#tag_4f_app_id-12}

<p>#define TAG_4F_APP_ID   0x4Fu</p>

Application Identifier (AID) - Card (**4F**)

## TAG_4F_APP_ID\[2/2\] <a href="#gaa1a0900aa13055b0b5199a8542ea2c64" id="gaa1a0900aa13055b0b5199a8542ea2c64"></a> {#tag_4f_app_id-22}

<p>#define TAG_4F_APP_ID   0x4Fu</p>

Application Identifier (AID) - Card (**4F**)
used to serialize <a href="_e_m_v___c_t_l_s___interface_8h.md#struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t">EMV_CTLS_APPLI_STRUCT</a>.

## TAG_50_APP_LABEL\[1/2\] <a href="#ga70b6da94fde0a697b05755cdfc084023" id="ga70b6da94fde0a697b05755cdfc084023"></a> {#tag_50_app_label-12}

<p>#define TAG_50_APP_LABEL   0x50u</p>

Application Label (**50**)
used for <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1a933985680b099e926e54086a602c12">EMV_CT_APPLIDATA_STRUCT::AppName</a>, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a84e55124aed375ea1277a675bff7cecf">EMV_CT_DOM_CHIP_STRUCT::ucAppName</a>, <a href="group___a_d_k___t_r_x___e_x_e_c.md#abb6b300f4e32bf0cceb25c0ce697dc93">EMV_CT_CANDIDATE_STRUCT::name</a>.

## TAG_50_APP_LABEL\[2/2\] <a href="#ga70b6da94fde0a697b05755cdfc084023" id="ga70b6da94fde0a697b05755cdfc084023"></a> {#tag_50_app_label-22}

<p>#define TAG_50_APP_LABEL   0x50u</p>

Application Label (**50**)
used in callbacks <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a> and <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gaf101b44707dcb098e311d65bd7ac817e">TAG_BF0C_CTLS_CBK_APP_SELECTED</a>.

## TAG_52_CMD_TO_PERFORM\[1/2\] <a href="#ga5c2e2c1e49e22fe51669eaceaa8fad9d" id="ga5c2e2c1e49e22fe51669eaceaa8fad9d"></a> {#tag_52_cmd_to_perform-12}

<p>#define TAG_52_CMD_TO_PERFORM   0x52u</p>

Command to Perform (**52**)

## TAG_52_CMD_TO_PERFORM\[2/2\] <a href="#ga5c2e2c1e49e22fe51669eaceaa8fad9d" id="ga5c2e2c1e49e22fe51669eaceaa8fad9d"></a> {#tag_52_cmd_to_perform-22}

<p>#define TAG_52_CMD_TO_PERFORM   0x52u</p>

Command to Perform (**52**)

## TAG_56_TRACK1_EQUIVALENT <a href="#gabfbfe2c06ddf1454164340744d5eb61a" id="gabfbfe2c06ddf1454164340744d5eb61a"></a>

<p>#define TAG_56_TRACK1_EQUIVALENT   0x56u</p>

Track 1 Equivalent Data (MChip card)

## TAG_57_TRACK2_EQUIVALENT\[1/2\] <a href="#ga2e6e79fb698c2021efe43366f6517b76" id="ga2e6e79fb698c2021efe43366f6517b76"></a> {#tag_57_track2_equivalent-12}

<p>#define TAG_57_TRACK2_EQUIVALENT   0x57u</p>

Track 2 Equivalent Data (**57**)
used as `T_57_DataTrack2` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, and `puc57_track2` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> )

## TAG_57_TRACK2_EQUIVALENT\[2/2\] <a href="#ga2e6e79fb698c2021efe43366f6517b76" id="ga2e6e79fb698c2021efe43366f6517b76"></a> {#tag_57_track2_equivalent-22}

<p>#define TAG_57_TRACK2_EQUIVALENT   0x57u</p>

Track 2 Equivalent Data (**57**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ae570117bb33a013b49ca02baa24d8c23">EMV_CTLS_TRANSRES_STRUCT::T_57_DataTrack2</a>.

## TAG_5A_APP_PAN\[1/2\] <a href="#ga4ccedb21a71fcb6ace22bac98ba548a5" id="ga4ccedb21a71fcb6ace22bac98ba548a5"></a> {#tag_5a_app_pan-12}

<p>#define TAG_5A_APP_PAN   0x5Au</p>

Application Primary Account Number (**5A**)
used as `T_5A_PAN` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5A_pan` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> ), `puc5A_pan` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc5A_pan` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>)

## TAG_5A_APP_PAN\[2/2\] <a href="#ga4ccedb21a71fcb6ace22bac98ba548a5" id="ga4ccedb21a71fcb6ace22bac98ba548a5"></a> {#tag_5a_app_pan-22}

<p>#define TAG_5A_APP_PAN   0x5Au</p>

Application Primary Account Number (**5A**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af0bc634797380c801e22c4d7fbf5255f">EMV_CTLS_TRANSRES_STRUCT::T_5A_PAN</a>.

## TAG_5F20_CARDHOLDER_NAME\[1/2\] <a href="#ga28d5c5d3a12cb3cf62e64ccb3e9258bc" id="ga28d5c5d3a12cb3cf62e64ccb3e9258bc"></a> {#tag_5f20_cardholder_name-12}

<p>#define TAG_5F20_CARDHOLDER_NAME   0x5F20u</p>

Cardholder Name (**5F20**)
used as `T_5F20_Cardholder` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5F24_expdate` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> ), and `uc5F24_expdate` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#afd0adcc12331559863dd65d8f7558645">TAG_BF05_CBK_DOM_APPS</a>)

## TAG_5F20_CARDHOLDER_NAME\[2/2\] <a href="#ga28d5c5d3a12cb3cf62e64ccb3e9258bc" id="ga28d5c5d3a12cb3cf62e64ccb3e9258bc"></a> {#tag_5f20_cardholder_name-22}

<p>#define TAG_5F20_CARDHOLDER_NAME   0x5F20u</p>

Cardholder Name (**5F20**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#adfd7eab71b1fc8059259da6704ae0f6f">EMV_CTLS_TRANSRES_STRUCT::T_5F20_Cardholder</a>.

## TAG_5F24_APP_EXP_DATE\[1/2\] <a href="#ga5eb2095961ebe9a91e560003f75358bb" id="ga5eb2095961ebe9a91e560003f75358bb"></a> {#tag_5f24_app_exp_date-12}

<p>#define TAG_5F24_APP_EXP_DATE   0x5F24u</p>

Application Expiration Data (**5F24**)
used as `T_5F24_AppExpDate` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5F24_expdate` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> ), and `pucExpDate` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#afd0adcc12331559863dd65d8f7558645">TAG_BF05_CBK_DOM_APPS</a>)

## TAG_5F24_APP_EXP_DATE\[2/2\] <a href="#ga5eb2095961ebe9a91e560003f75358bb" id="ga5eb2095961ebe9a91e560003f75358bb"></a> {#tag_5f24_app_exp_date-22}

<p>#define TAG_5F24_APP_EXP_DATE   0x5F24u</p>

Application Expiration Data (**5F24**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a9976182c24eef231d092afe3a7c8d348">EMV_CTLS_TRANSRES_STRUCT::T_5F24_AppExpDate</a>.

## TAG_5F25_APP_EFF_DATE\[1/2\] <a href="#gacd7028f61b8522799f207c7efa8e49d9" id="gacd7028f61b8522799f207c7efa8e49d9"></a> {#tag_5f25_app_eff_date-12}

<p>#define TAG_5F25_APP_EFF_DATE   0x5F25u</p>

Application Effective Data (**5F25**)
used as `T_5F25_AppEffDate` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_5F25_APP_EFF_DATE\[2/2\] <a href="#gacd7028f61b8522799f207c7efa8e49d9" id="gacd7028f61b8522799f207c7efa8e49d9"></a> {#tag_5f25_app_eff_date-22}

<p>#define TAG_5F25_APP_EFF_DATE   0x5F25u</p>

Application Effective Data (**5F25**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a3a483d3884951300b21443c7a72003ce">EMV_CTLS_TRANSRES_STRUCT::T_5F25_AppEffDate</a>.

## TAG_5F28_ISS_COUNTRY_CODE\[1/2\] <a href="#gaa35ef81cc90fe90126a537cbd611ead6" id="gaa35ef81cc90fe90126a537cbd611ead6"></a> {#tag_5f28_iss_country_code-12}

<p>#define TAG_5F28_ISS_COUNTRY_CODE   0x5F28u</p>

Issuer Country Code (**5F28**)
used as `T_5F28_IssCountryCode` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, and `puc5F28_icc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a> )

## TAG_5F28_ISS_COUNTRY_CODE\[2/2\] <a href="#gaa35ef81cc90fe90126a537cbd611ead6" id="gaa35ef81cc90fe90126a537cbd611ead6"></a> {#tag_5f28_iss_country_code-22}

<p>#define TAG_5F28_ISS_COUNTRY_CODE   0x5F28u</p>

Issuer Country Code (**5F28**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af6458a2407613872574dccbfb6bef9b9">EMV_CTLS_TRANSRES_STRUCT::T_5F28_IssCountryCode</a>.

## TAG_5F2A_TRANS_CURRENCY\[1/2\] <a href="#ga369ab2cc83e9b220bdfa79753f1f3962" id="ga369ab2cc83e9b220bdfa79753f1f3962"></a> {#tag_5f2a_trans_currency-12}

<p>#define TAG_5F2A_TRANS_CURRENCY   0x5F2Au</p>

Transaction Currency Code (**5F2A**)
Configured with `CurrencyTrans` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a> (for DCC possibly in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>). Used as `T_5F2A_CurrencyTrans` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5F2A_tcc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc5F2A_tcc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>)

## TAG_5F2A_TRANS_CURRENCY\[2/2\] <a href="#ga369ab2cc83e9b220bdfa79753f1f3962" id="ga369ab2cc83e9b220bdfa79753f1f3962"></a> {#tag_5f2a_trans_currency-22}

<p>#define TAG_5F2A_TRANS_CURRENCY   0x5F2Au</p>

Transaction Currency Code (**5F2A**)
Configured with <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans</a> (for DCC possibly in <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t">EMV_CTLS_START_STRUCT</a>). Used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a4ff59afe014dcaa2f469e45abd2a2cb7">EMV_CTLS_TRANSRES_STRUCT::T_5F2A_CurrencyTrans</a>.

## TAG_5F2D_LANGUAGE\[1/2\] <a href="#gaaa613c7ef00b768c88fe5cc3ee16107b" id="gaaa613c7ef00b768c88fe5cc3ee16107b"></a> {#tag_5f2d_language-12}

<p>#define TAG_5F2D_LANGUAGE   0x5F2Du</p>

Language Preference (**5F2D**)
used as `T_5F2D_Lang_Pref` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_5F2D_LANGUAGE\[2/2\] <a href="#gaaa613c7ef00b768c88fe5cc3ee16107b" id="gaaa613c7ef00b768c88fe5cc3ee16107b"></a> {#tag_5f2d_language-22}

<p>#define TAG_5F2D_LANGUAGE   0x5F2Du</p>

Language Preference (**5F2D**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ab78d27dc34487f922049e2708780f0b5">EMV_CTLS_TRANSRES_STRUCT::T_5F2D_Lang_Pref</a>.

## TAG_5F30_SERVICE_CODE\[1/2\] <a href="#gacc4c4f91bcb9bf9fef0ec1257292b93e" id="gacc4c4f91bcb9bf9fef0ec1257292b93e"></a> {#tag_5f30_service_code-12}

<p>#define TAG_5F30_SERVICE_CODE   0x5F30u</p>

Service Code (**5F30**)

## TAG_5F30_SERVICE_CODE\[2/2\] <a href="#gacc4c4f91bcb9bf9fef0ec1257292b93e" id="gacc4c4f91bcb9bf9fef0ec1257292b93e"></a> {#tag_5f30_service_code-22}

<p>#define TAG_5F30_SERVICE_CODE   0x5F30u</p>

Service Code (**5F30**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aba95bf6078aac2295b51ba4f1b7aaff9">EMV_CTLS_TRANSRES_STRUCT::T_5F30_ServiceCode</a>.

## TAG_5F34_PAN_SEQUENCE_NB\[1/2\] <a href="#ga17f22ccb8130cc68e45609afc6b58f00" id="ga17f22ccb8130cc68e45609afc6b58f00"></a> {#tag_5f34_pan_sequence_nb-12}

<p>#define TAG_5F34_PAN_SEQUENCE_NB   0x5F34u</p>

PAN Sequence Number (**5F34**)
used as `T_5F34_PANSequenceNo` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_5F34_PAN_SEQUENCE_NB\[2/2\] <a href="#ga17f22ccb8130cc68e45609afc6b58f00" id="ga17f22ccb8130cc68e45609afc6b58f00"></a> {#tag_5f34_pan_sequence_nb-22}

<p>#define TAG_5F34_PAN_SEQUENCE_NB   0x5F34u</p>

PAN Sequence Number (**5F34**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#abc4cec20fd3b19b4eb973817adc30eb7">EMV_CTLS_TRANSRES_STRUCT::T_5F34_PANSequenceNo</a>.

## TAG_5F36_TRANS_CURRENCY_EXP\[1/2\] <a href="#ga134c61ae2787b93c5def5bbf929f7cb4" id="ga134c61ae2787b93c5def5bbf929f7cb4"></a> {#tag_5f36_trans_currency_exp-12}

<p>#define TAG_5F36_TRANS_CURRENCY_EXP   0x5F36u</p>

Transaction Currency Exponent (**5F36**)
Configured with `Exp_Trans` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a> (for DCC possibly in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>). Used as `T_5F36_Trx_Currency_Exp` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, `puc5F36_tce` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc5F36_tce` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>)

## TAG_5F36_TRANS_CURRENCY_EXP\[2/2\] <a href="#ga134c61ae2787b93c5def5bbf929f7cb4" id="ga134c61ae2787b93c5def5bbf929f7cb4"></a> {#tag_5f36_trans_currency_exp-22}

<p>#define TAG_5F36_TRANS_CURRENCY_EXP   0x5F36u</p>

Transaction Currency Exponent (**5F36**)
Configured with <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CTLS_TERMDATA_STRUCT::ExpTrans</a> (for DCC possibly in <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t">EMV_CTLS_START_STRUCT</a>). Used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af3c15997b72a0912020557a700633e18">EMV_CTLS_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp</a>.

## TAG_5F50_ISSUER_URL\[1/2\] <a href="#ga15ecfca134c05f49a0ce50d5f0692355" id="ga15ecfca134c05f49a0ce50d5f0692355"></a> {#tag_5f50_issuer_url-12}

<p>#define TAG_5F50_ISSUER_URL   0x5F50u</p>

Issuer URL (**5F50**)

## TAG_5F50_ISSUER_URL\[2/2\] <a href="#ga15ecfca134c05f49a0ce50d5f0692355" id="ga15ecfca134c05f49a0ce50d5f0692355"></a> {#tag_5f50_issuer_url-22}

<p>#define TAG_5F50_ISSUER_URL   0x5F50u</p>

Issuer URL (**5F50**)

## TAG_5F53_IBAN\[1/2\] <a href="#ga4c1beabb09d7dd5929f0947c3451378c" id="ga4c1beabb09d7dd5929f0947c3451378c"></a> {#tag_5f53_iban-12}

<p>#define TAG_5F53_IBAN   0x5F53u</p>

International Bank Account Number (IBAN) (**5F53**)
used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#accc1d005f1b412f6c819f94555dbc25a">EMV_CT_CANDIDATE_DATA_STRUCT::IBAN</a>.

## TAG_5F53_IBAN\[2/2\] <a href="#ga4c1beabb09d7dd5929f0947c3451378c" id="ga4c1beabb09d7dd5929f0947c3451378c"></a> {#tag_5f53_iban-22}

<p>#define TAG_5F53_IBAN   0x5F53u</p>

International Bank Account Number (IBAN) (**5F53**)

## TAG_5F54_BIC\[1/2\] <a href="#ga7c69e28da34f98b810cc96009ecdefe9" id="ga7c69e28da34f98b810cc96009ecdefe9"></a> {#tag_5f54_bic-12}

<p>#define TAG_5F54_BIC   0x5F54u</p>

Bank Identifier Code (BIC) (**5F54**)
used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac465a1be252b46a02fce89851b6d60fb">EMV_CT_CANDIDATE_DATA_STRUCT::BIC</a>.

## TAG_5F54_BIC\[2/2\] <a href="#ga7c69e28da34f98b810cc96009ecdefe9" id="ga7c69e28da34f98b810cc96009ecdefe9"></a> {#tag_5f54_bic-22}

<p>#define TAG_5F54_BIC   0x5F54u</p>

Bank Identifier Code (BIC) (**5F54**)

## TAG_5F55_ISSUER_COUNTRY_2\[1/2\] <a href="#ga4a6770ebf323f538a78c12c78f3db783" id="ga4a6770ebf323f538a78c12c78f3db783"></a> {#tag_5f55_issuer_country_2-12}

<p>#define TAG_5F55_ISSUER_COUNTRY_2   0x5F55u</p>

Issuer Country Code (alpha 2 format) (**5F55**)
used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#aa6458e13b23e10671e3c12ac21e69aaa">EMV_CT_CANDIDATE_DATA_STRUCT::country2</a>.

## TAG_5F55_ISSUER_COUNTRY_2\[2/2\] <a href="#ga4a6770ebf323f538a78c12c78f3db783" id="ga4a6770ebf323f538a78c12c78f3db783"></a> {#tag_5f55_issuer_country_2-22}

<p>#define TAG_5F55_ISSUER_COUNTRY_2   0x5F55u</p>

Issuer Country Code (alpha 2 format) (**5F55**)
used as <a href="group___f_u_n_c___f_l_o_w.md#aa6458e13b23e10671e3c12ac21e69aaa">EMV_CTLS_CANDIDATE_DATA_STRUCT::country2</a>.

## TAG_5F56_ISSUER_COUNTRY_3\[1/2\] <a href="#gad5bedd694cd7c7658a9bdc865f542a50" id="gad5bedd694cd7c7658a9bdc865f542a50"></a> {#tag_5f56_issuer_country_3-12}

<p>#define TAG_5F56_ISSUER_COUNTRY_3   0x5F56u</p>

Issuer Country Code (alpha 3 format) (**5F56**)
used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#aab088343104c0c1631f846fa907bbc19">EMV_CT_CANDIDATE_DATA_STRUCT::country3</a>.

## TAG_5F56_ISSUER_COUNTRY_3\[2/2\] <a href="#gad5bedd694cd7c7658a9bdc865f542a50" id="gad5bedd694cd7c7658a9bdc865f542a50"></a> {#tag_5f56_issuer_country_3-22}

<p>#define TAG_5F56_ISSUER_COUNTRY_3   0x5F56u</p>

Issuer Country Code (alpha 3 format) (**5F56**)
used as <a href="group___f_u_n_c___f_l_o_w.md#aab088343104c0c1631f846fa907bbc19">EMV_CTLS_CANDIDATE_DATA_STRUCT::country3</a>.

## TAG_5F56_ISSUER_COUNTRY_CODE <a href="#gad79ee95f2e225f2c320a93bb3ecca42b" id="gad79ee95f2e225f2c320a93bb3ecca42b"></a>

<p>#define TAG_5F56_ISSUER_COUNTRY_CODE   0x5F56u</p>

Issuer Country Code (**5F56**)

## TAG_5F57_ACCOUNT_TYPE\[1/2\] <a href="#ga18a257e1d8288f49eba5100e657039b6" id="ga18a257e1d8288f49eba5100e657039b6"></a> {#tag_5f57_account_type-12}

<p>#define TAG_5F57_ACCOUNT_TYPE   0x5F57u</p>

Account Type (**5F57**)

## TAG_5F57_ACCOUNT_TYPE\[2/2\] <a href="#ga18a257e1d8288f49eba5100e657039b6" id="ga18a257e1d8288f49eba5100e657039b6"></a> {#tag_5f57_account_type-22}

<p>#define TAG_5F57_ACCOUNT_TYPE   0x5F57u</p>

Account Type (**5F57**)
used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a720e112c31478ed6c1a4ed18cb16db2f">EMV_CTLS_PAYMENT_STRUCT::uc_AccountType</a>.

## TAG_61_APP_TEMPLATE\[1/2\] <a href="#ga031f06652f6b1f5ede0a551c356e71b3" id="ga031f06652f6b1f5ede0a551c356e71b3"></a> {#tag_61_app_template-12}

<p>#define TAG_61_APP_TEMPLATE   0x61u</p>

Application Template (**61**)

## TAG_61_APP_TEMPLATE\[2/2\] <a href="#ga031f06652f6b1f5ede0a551c356e71b3" id="ga031f06652f6b1f5ede0a551c356e71b3"></a> {#tag_61_app_template-22}

<p>#define TAG_61_APP_TEMPLATE   0x61u</p>

Application Template (**61**)

## TAG_6F_FCI_TEMPLATE\[1/2\] <a href="#ga9b09496d37327341a4d46ca4edf36182" id="ga9b09496d37327341a4d46ca4edf36182"></a> {#tag_6f_fci_template-12}

<p>#define TAG_6F_FCI_TEMPLATE   0x6Fu</p>

File Control Information (FCI) Template (**6F**)

## TAG_6F_FCI_TEMPLATE\[2/2\] <a href="#ga9b09496d37327341a4d46ca4edf36182" id="ga9b09496d37327341a4d46ca4edf36182"></a> {#tag_6f_fci_template-22}

<p>#define TAG_6F_FCI_TEMPLATE   0x6Fu</p>

File Control Information (FCI) Template (**6F**)

## TAG_70_AEF_DATA_TEMPLATE\[1/2\] <a href="#ga125edde9dae6966577fe85d580e90403" id="ga125edde9dae6966577fe85d580e90403"></a> {#tag_70_aef_data_template-12}

<p>#define TAG_70_AEF_DATA_TEMPLATE   0x70u</p>

AEF Data Template (**70**)

## TAG_70_AEF_DATA_TEMPLATE\[2/2\] <a href="#ga125edde9dae6966577fe85d580e90403" id="ga125edde9dae6966577fe85d580e90403"></a> {#tag_70_aef_data_template-22}

<p>#define TAG_70_AEF_DATA_TEMPLATE   0x70u</p>

AEF Data Template (**70**)

## TAG_71_ISS_SCRIPT_TPLT_1\[1/2\] <a href="#ga977d84f3059e283c2b48c22024892a53" id="ga977d84f3059e283c2b48c22024892a53"></a> {#tag_71_iss_script_tplt_1-12}

<p>#define TAG_71_ISS_SCRIPT_TPLT_1   0x71u</p>

Issuer Script Template 1 (**71**)

## TAG_71_ISS_SCRIPT_TPLT_1\[2/2\] <a href="#ga977d84f3059e283c2b48c22024892a53" id="ga977d84f3059e283c2b48c22024892a53"></a> {#tag_71_iss_script_tplt_1-22}

<p>#define TAG_71_ISS_SCRIPT_TPLT_1   0x71u</p>

Issuer Script Template 1 (**71**)
to be used to fill <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#afd420a16596fd515042c455eaf81dbc5">EMV_CTLS_HOST_STRUCT::ScriptData</a>.

## TAG_72_ISS_SCRIPT_TPLT_2\[1/2\] <a href="#ga8b38f1870f3d6cb7259759bb567315c0" id="ga8b38f1870f3d6cb7259759bb567315c0"></a> {#tag_72_iss_script_tplt_2-12}

<p>#define TAG_72_ISS_SCRIPT_TPLT_2   0x72u</p>

Issuer Script Template 2 (**72**)

## TAG_72_ISS_SCRIPT_TPLT_2\[2/2\] <a href="#ga8b38f1870f3d6cb7259759bb567315c0" id="ga8b38f1870f3d6cb7259759bb567315c0"></a> {#tag_72_iss_script_tplt_2-22}

<p>#define TAG_72_ISS_SCRIPT_TPLT_2   0x72u</p>

Issuer Script Template 2 (**72**)
to be used to fill <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#afd420a16596fd515042c455eaf81dbc5">EMV_CTLS_HOST_STRUCT::ScriptData</a>.

## TAG_73_DIR_DISCR_TEMPLATE\[1/2\] <a href="#gaaa187c1d5255e009a402c6d727b4938f" id="gaaa187c1d5255e009a402c6d727b4938f"></a> {#tag_73_dir_discr_template-12}

<p>#define TAG_73_DIR_DISCR_TEMPLATE   0x73u</p>

<a href="class_directory.md">Directory</a> Discretionary Template (**73**)

## TAG_73_DIR_DISCR_TEMPLATE\[2/2\] <a href="#gaaa187c1d5255e009a402c6d727b4938f" id="gaaa187c1d5255e009a402c6d727b4938f"></a> {#tag_73_dir_discr_template-22}

<p>#define TAG_73_DIR_DISCR_TEMPLATE   0x73u</p>

Dirctory Discretionary Template (**73**)

## TAG_77_RS_MSG_TPLT_FRMT_2\[1/2\] <a href="#ga33f61ca090446008781005b3bb12e264" id="ga33f61ca090446008781005b3bb12e264"></a> {#tag_77_rs_msg_tplt_frmt_2-12}

<p>#define TAG_77_RS_MSG_TPLT_FRMT_2   0x77u</p>

Response Message Template Format 2 (**77**)

## TAG_77_RS_MSG_TPLT_FRMT_2\[2/2\] <a href="#ga33f61ca090446008781005b3bb12e264" id="ga33f61ca090446008781005b3bb12e264"></a> {#tag_77_rs_msg_tplt_frmt_2-22}

<p>#define TAG_77_RS_MSG_TPLT_FRMT_2   0x77u</p>

Response Message Template Format 2 (**77**)

## TAG_80_RS_MSG_TPLT_FRMT_1\[1/2\] <a href="#gab8455feb7a5b1369aa97e5986745940f" id="gab8455feb7a5b1369aa97e5986745940f"></a> {#tag_80_rs_msg_tplt_frmt_1-12}

<p>#define TAG_80_RS_MSG_TPLT_FRMT_1   0x80u</p>

Response Message Template Format 1 (**80**)

## TAG_80_RS_MSG_TPLT_FRMT_1\[2/2\] <a href="#gab8455feb7a5b1369aa97e5986745940f" id="gab8455feb7a5b1369aa97e5986745940f"></a> {#tag_80_rs_msg_tplt_frmt_1-22}

<p>#define TAG_80_RS_MSG_TPLT_FRMT_1   0x80u</p>

Response Message Template Format 1 (**80**)

## TAG_81_BIN_AMOUNT_AUTH\[1/2\] <a href="#ga4b82c7a87ee02736af6cd4e298c1ae13" id="ga4b82c7a87ee02736af6cd4e298c1ae13"></a> {#tag_81_bin_amount_auth-12}

<p>#define TAG_81_BIN_AMOUNT_AUTH   0x81u</p>

Amount Authorization Binary (**81**)

## TAG_81_BIN_AMOUNT_AUTH\[2/2\] <a href="#ga4b82c7a87ee02736af6cd4e298c1ae13" id="ga4b82c7a87ee02736af6cd4e298c1ae13"></a> {#tag_81_bin_amount_auth-22}

<p>#define TAG_81_BIN_AMOUNT_AUTH   0x81u</p>

Amount Authorization Binary (**81**)

## TAG_82_AIP\[1/2\] <a href="#gaa87267a7ce44cc525b3515a3549898c2" id="gaa87267a7ce44cc525b3515a3549898c2"></a> {#tag_82_aip-12}

<p>#define TAG_82_AIP   0x82u</p>

Application Interchange Profile (**82**)
used as `T_82_AIP` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_82_AIP\[2/2\] <a href="#gaa87267a7ce44cc525b3515a3549898c2" id="gaa87267a7ce44cc525b3515a3549898c2"></a> {#tag_82_aip-22}

<p>#define TAG_82_AIP   0x82u</p>

Application Interchange Profile (**82**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a4fc70aee9c7e870519b10c2471ae44f2">EMV_CTLS_TRANSRES_STRUCT::T_82_AIP</a>.

## TAG_83_CMD_TPLT\[1/2\] <a href="#ga6a189bd2f9a0d77f24db3e88d89f5487" id="ga6a189bd2f9a0d77f24db3e88d89f5487"></a> {#tag_83_cmd_tplt-12}

<p>#define TAG_83_CMD_TPLT   0x83u</p>

Command Template (**83**)

## TAG_83_CMD_TPLT\[2/2\] <a href="#ga6a189bd2f9a0d77f24db3e88d89f5487" id="ga6a189bd2f9a0d77f24db3e88d89f5487"></a> {#tag_83_cmd_tplt-22}

<p>#define TAG_83_CMD_TPLT   0x83u</p>

Command Template (**83**)

## TAG_84_DF_NAME\[1/2\] <a href="#ga69c4599943205d95394b62eef950e4c5" id="ga69c4599943205d95394b62eef950e4c5"></a> {#tag_84_df_name-12}

<p>#define TAG_84_DF_NAME   0x84u</p>

Dedicated File Name (**84**)
used as `T_84_DFName` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_84_DF_NAME\[2/2\] <a href="#ga69c4599943205d95394b62eef950e4c5" id="ga69c4599943205d95394b62eef950e4c5"></a> {#tag_84_df_name-22}

<p>#define TAG_84_DF_NAME   0x84u</p>

Dedicated File Name (**84**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a1d5a242b67594b2901691e00b41c2c69">EMV_CTLS_TRANSRES_STRUCT::T_84_DFName</a>.

## TAG_86_ISS_SCRIPT_CMD\[1/2\] <a href="#ga5fadc36c7f5dee1b8c89cf331ed67a46" id="ga5fadc36c7f5dee1b8c89cf331ed67a46"></a> {#tag_86_iss_script_cmd-12}

<p>#define TAG_86_ISS_SCRIPT_CMD   0x86u</p>

Issuer Script Command (**86**)

## TAG_86_ISS_SCRIPT_CMD\[2/2\] <a href="#ga5fadc36c7f5dee1b8c89cf331ed67a46" id="ga5fadc36c7f5dee1b8c89cf331ed67a46"></a> {#tag_86_iss_script_cmd-22}

<p>#define TAG_86_ISS_SCRIPT_CMD   0x86u</p>

Issuer Script Command (**86**)

## TAG_87_APP_PRIORITY_ID\[1/2\] <a href="#gaa307388012402f6923efc2609e11fd29" id="gaa307388012402f6923efc2609e11fd29"></a> {#tag_87_app_priority_id-12}

<p>#define TAG_87_APP_PRIORITY_ID   0x87u</p>

Application Priority Indicator (**87**)
used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae6e6847f31d7ad74362c2de216df1372">EMV_CT_CANDIDATE_DATA_STRUCT::API</a>.

## TAG_87_APP_PRIORITY_ID\[2/2\] <a href="#gaa307388012402f6923efc2609e11fd29" id="gaa307388012402f6923efc2609e11fd29"></a> {#tag_87_app_priority_id-22}

<p>#define TAG_87_APP_PRIORITY_ID   0x87u</p>

Application Priority Indicator (**87**)
used as <a href="group___f_u_n_c___f_l_o_w.md#ae6e6847f31d7ad74362c2de216df1372">EMV_CTLS_CANDIDATE_DATA_STRUCT::API</a>.

## TAG_88_SHORT_FILE_ID\[1/2\] <a href="#ga5aea7b31fe53ca6a11f69329dac5a75c" id="ga5aea7b31fe53ca6a11f69329dac5a75c"></a> {#tag_88_short_file_id-12}

<p>#define TAG_88_SHORT_FILE_ID   0x88u</p>

Short File Identifier (SFI) (**88**)

## TAG_88_SHORT_FILE_ID\[2/2\] <a href="#ga5aea7b31fe53ca6a11f69329dac5a75c" id="ga5aea7b31fe53ca6a11f69329dac5a75c"></a> {#tag_88_short_file_id-22}

<p>#define TAG_88_SHORT_FILE_ID   0x88u</p>

Short File Identifier (SFI) (**88**)

## TAG_89_AUTH_CODE\[1/2\] <a href="#ga8936aff551a261bc496fee1cc330486a" id="ga8936aff551a261bc496fee1cc330486a"></a> {#tag_89_auth_code-12}

<p>#define TAG_89_AUTH_CODE   0x89u</p>

Authorization Code (**89**)
used as `AuthorizationCode` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t">EMV_CT_HOST_STRUCT</a>.

## TAG_89_AUTH_CODE\[2/2\] <a href="#ga8936aff551a261bc496fee1cc330486a" id="ga8936aff551a261bc496fee1cc330486a"></a> {#tag_89_auth_code-22}

<p>#define TAG_89_AUTH_CODE   0x89u</p>

Authorization Code (**89**)

## TAG_8A_AUTH_RESP_CODE\[1/2\] <a href="#ga27bef53c14c4970b64ff44e4e78d20ba" id="ga27bef53c14c4970b64ff44e4e78d20ba"></a> {#tag_8a_auth_resp_code-12}

<p>#define TAG_8A_AUTH_RESP_CODE   0x8Au</p>

Authorization Response Code (**8A**)
used as `AuthResp` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t">EMV_CT_HOST_STRUCT</a>.

## TAG_8A_AUTH_RESP_CODE\[2/2\] <a href="#ga27bef53c14c4970b64ff44e4e78d20ba" id="ga27bef53c14c4970b64ff44e4e78d20ba"></a> {#tag_8a_auth_resp_code-22}

<p>#define TAG_8A_AUTH_RESP_CODE   0x8Au</p>

Authorization Response Code (**8A**)
used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a50f253cd97f2612f2d5abe02959e130f">EMV_CTLS_HOST_STRUCT::AuthResp</a>.

## TAG_8B_POI_INFORMATION <a href="#ga54b024713e6b8dd6d99e3c1d18005496" id="ga54b024713e6b8dd6d99e3c1d18005496"></a>

<p>#define TAG_8B_POI_INFORMATION   0x8Bu</p>

POI information (**8B**)
used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaf88e302e58d70d28ed59a53cdca2f2e">EMV_CTLS_TERMDATA_STRUCT::poiInformation</a>.

## TAG_8C_CDOL_1\[1/2\] <a href="#ga2aac30055f056cf447f27cd31ba71d3c" id="ga2aac30055f056cf447f27cd31ba71d3c"></a> {#tag_8c_cdol_1-12}

<p>#define TAG_8C_CDOL_1   0x8Cu</p>

CDOL 1 (**8C**)

## TAG_8C_CDOL_1\[2/2\] <a href="#ga2aac30055f056cf447f27cd31ba71d3c" id="ga2aac30055f056cf447f27cd31ba71d3c"></a> {#tag_8c_cdol_1-22}

<p>#define TAG_8C_CDOL_1   0x8Cu</p>

CDOL 1 (**8C**)

## TAG_8D_CDOL_2\[1/2\] <a href="#gabd3001e707d2a1d10fcb130edc3b3d29" id="gabd3001e707d2a1d10fcb130edc3b3d29"></a> {#tag_8d_cdol_2-12}

<p>#define TAG_8D_CDOL_2   0x8Du</p>

CDOL 2 (**8D**)

## TAG_8D_CDOL_2\[2/2\] <a href="#gabd3001e707d2a1d10fcb130edc3b3d29" id="gabd3001e707d2a1d10fcb130edc3b3d29"></a> {#tag_8d_cdol_2-22}

<p>#define TAG_8D_CDOL_2   0x8Du</p>

CDOL 2 (**8D**)

## TAG_8E_CVM_LIST\[1/2\] <a href="#ga94548248d5f87864250eb58aa7f09907" id="ga94548248d5f87864250eb58aa7f09907"></a> {#tag_8e_cvm_list-12}

<p>#define TAG_8E_CVM_LIST   0x8Eu</p>

Cardholder Verification Method List (**8E**)

## TAG_8E_CVM_LIST\[2/2\] <a href="#ga94548248d5f87864250eb58aa7f09907" id="ga94548248d5f87864250eb58aa7f09907"></a> {#tag_8e_cvm_list-22}

<p>#define TAG_8E_CVM_LIST   0x8Eu</p>

Cardholder Verification Method List (**8E**)

## TAG_8F_CERTIF_AUTH_PK_ID\[1/2\] <a href="#ga3187732cabfd0142ed5023862e9f95ed" id="ga3187732cabfd0142ed5023862e9f95ed"></a> {#tag_8f_certif_auth_pk_id-12}

<p>#define TAG_8F_CERTIF_AUTH_PK_ID   0x8Fu</p>

Certification Autority Public key Index (**8F**)

## TAG_8F_CERTIF_AUTH_PK_ID\[2/2\] <a href="#ga3187732cabfd0142ed5023862e9f95ed" id="ga3187732cabfd0142ed5023862e9f95ed"></a> {#tag_8f_certif_auth_pk_id-22}

<p>#define TAG_8F_CERTIF_AUTH_PK_ID   0x8Fu</p>

Certification Autority Public key Index (**8F**)

## TAG_90_ISS_PK_CERTIF\[1/2\] <a href="#ga168d90e4e8849e861c161c2a3c49a453" id="ga168d90e4e8849e861c161c2a3c49a453"></a> {#tag_90_iss_pk_certif-12}

<p>#define TAG_90_ISS_PK_CERTIF   0x90u</p>

Issuer Public Key Certificate (**90**)

## TAG_90_ISS_PK_CERTIF\[2/2\] <a href="#ga168d90e4e8849e861c161c2a3c49a453" id="ga168d90e4e8849e861c161c2a3c49a453"></a> {#tag_90_iss_pk_certif-22}

<p>#define TAG_90_ISS_PK_CERTIF   0x90u</p>

Issuer Public Key Certificate (**90**)

## TAG_91_ISS_AUTH_DATA\[1/2\] <a href="#ga93aecd9e60fdb7fc4ab5a00fffee031b" id="ga93aecd9e60fdb7fc4ab5a00fffee031b"></a> {#tag_91_iss_auth_data-12}

<p>#define TAG_91_ISS_AUTH_DATA   0x91u</p>

Issuer Authentication Data (**91**)
used as `AuthData` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t">EMV_CT_HOST_STRUCT</a>.

## TAG_91_ISS_AUTH_DATA\[2/2\] <a href="#ga93aecd9e60fdb7fc4ab5a00fffee031b" id="ga93aecd9e60fdb7fc4ab5a00fffee031b"></a> {#tag_91_iss_auth_data-22}

<p>#define TAG_91_ISS_AUTH_DATA   0x91u</p>

Issuer Authentication Data (**91**)
used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a3e5fe321afd3d5b2db35d2d2bcdc800e">EMV_CTLS_HOST_STRUCT::AuthData</a>.

## TAG_92_ISS_PK_REMAINDER\[1/2\] <a href="#ga5a4a55da5763dd2eead482efcb3f9f22" id="ga5a4a55da5763dd2eead482efcb3f9f22"></a> {#tag_92_iss_pk_remainder-12}

<p>#define TAG_92_ISS_PK_REMAINDER   0x92u</p>

Issuer Public Key Remainder (**92**)

## TAG_92_ISS_PK_REMAINDER\[2/2\] <a href="#ga5a4a55da5763dd2eead482efcb3f9f22" id="ga5a4a55da5763dd2eead482efcb3f9f22"></a> {#tag_92_iss_pk_remainder-22}

<p>#define TAG_92_ISS_PK_REMAINDER   0x92u</p>

Issuer Public Key Remainder (**92**)

## TAG_93_SGND_STAT_APP_DATA\[1/2\] <a href="#ga9035588232752ac8152011dc9b2cf631" id="ga9035588232752ac8152011dc9b2cf631"></a> {#tag_93_sgnd_stat_app_data-12}

<p>#define TAG_93_SGND_STAT_APP_DATA   0x93u</p>

Signed Static Application Data (**93**)

## TAG_93_SGND_STAT_APP_DATA\[2/2\] <a href="#ga9035588232752ac8152011dc9b2cf631" id="ga9035588232752ac8152011dc9b2cf631"></a> {#tag_93_sgnd_stat_app_data-22}

<p>#define TAG_93_SGND_STAT_APP_DATA   0x93u</p>

Signed Static Application Data (**93**)

## TAG_94_AFL\[1/2\] <a href="#ga18001e35a684a0041657e827a14ef456" id="ga18001e35a684a0041657e827a14ef456"></a> {#tag_94_afl-12}

<p>#define TAG_94_AFL   0x94u</p>

Application File Locator (**94**)

## TAG_94_AFL\[2/2\] <a href="#ga18001e35a684a0041657e827a14ef456" id="ga18001e35a684a0041657e827a14ef456"></a> {#tag_94_afl-22}

<p>#define TAG_94_AFL   0x94u</p>

Application File Locator (**94**)

## TAG_95_TVR\[1/2\] <a href="#ga3227240d53824d37d80b5f5a254daf2a" id="ga3227240d53824d37d80b5f5a254daf2a"></a> {#tag_95_tvr-12}

<p>#define TAG_95_TVR   0x95u</p>

Terminal Verification Result (**95**)
used as `T_95_TVR` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_95_TVR\[2/2\] <a href="#ga3227240d53824d37d80b5f5a254daf2a" id="ga3227240d53824d37d80b5f5a254daf2a"></a> {#tag_95_tvr-22}

<p>#define TAG_95_TVR   0x95u</p>

Terminal Verification Result (**95**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ab7c83532ed5caeb00101916a4d20c862">EMV_CTLS_TRANSRES_STRUCT::T_95_TVR</a>.

## TAG_97_TDOL\[1/2\] <a href="#ga83a27d3f0c37cfdfe55bcd0901cb7a58" id="ga83a27d3f0c37cfdfe55bcd0901cb7a58"></a> {#tag_97_tdol-12}

<p>#define TAG_97_TDOL   0x97u</p>

TDOL (**97**)

## TAG_97_TDOL\[2/2\] <a href="#ga83a27d3f0c37cfdfe55bcd0901cb7a58" id="ga83a27d3f0c37cfdfe55bcd0901cb7a58"></a> {#tag_97_tdol-22}

<p>#define TAG_97_TDOL   0x97u</p>

TDOL (**97**)

## TAG_98_TC_HASH_VALUE\[1/2\] <a href="#gaab57f1b001e401de3ec7d24b90f378a7" id="gaab57f1b001e401de3ec7d24b90f378a7"></a> {#tag_98_tc_hash_value-12}

<p>#define TAG_98_TC_HASH_VALUE   0x98u</p>

Transaction Certificate Hash Value (**98**)

## TAG_98_TC_HASH_VALUE\[2/2\] <a href="#gaab57f1b001e401de3ec7d24b90f378a7" id="gaab57f1b001e401de3ec7d24b90f378a7"></a> {#tag_98_tc_hash_value-22}

<p>#define TAG_98_TC_HASH_VALUE   0x98u</p>

Transaction Certificate Hash Value (**98**)

## TAG_99_TRANS_PIN_DATA\[1/2\] <a href="#ga7691cae1ae03d3345deacc2300ba161e" id="ga7691cae1ae03d3345deacc2300ba161e"></a> {#tag_99_trans_pin_data-12}

<p>#define TAG_99_TRANS_PIN_DATA   0x99u</p>

Transaction PIN Data (**99**)

## TAG_99_TRANS_PIN_DATA\[2/2\] <a href="#ga7691cae1ae03d3345deacc2300ba161e" id="ga7691cae1ae03d3345deacc2300ba161e"></a> {#tag_99_trans_pin_data-22}

<p>#define TAG_99_TRANS_PIN_DATA   0x99u</p>

Transaction PIN Data (**99**)

## TAG_9A_TRANS_DATE\[1/2\] <a href="#ga9b8dc8671fc9d3af99aefdf59659cd67" id="ga9b8dc8671fc9d3af99aefdf59659cd67"></a> {#tag_9a_trans_date-12}

<p>#define TAG_9A_TRANS_DATE   0x9Au</p>

Transaction Date (**9A**)
used as `T_9A_Date` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>, and `Date` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>.

## TAG_9A_TRANS_DATE\[2/2\] <a href="#ga9b8dc8671fc9d3af99aefdf59659cd67" id="ga9b8dc8671fc9d3af99aefdf59659cd67"></a> {#tag_9a_trans_date-22}

<p>#define TAG_9A_TRANS_DATE   0x9Au</p>

Transaction Date (**9A**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a82dfa85492013ef19f23e3446d470a4a">EMV_CTLS_TRANSRES_STRUCT::T_9A_Date</a>, and <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a775d3e156bcce4f815658cbaca54de4f">EMV_CTLS_PAYMENT_STRUCT::Date</a>.

## TAG_9B_TSI\[1/2\] <a href="#ga42e197884e26dbe7ef666d8f6881b376" id="ga42e197884e26dbe7ef666d8f6881b376"></a> {#tag_9b_tsi-12}

<p>#define TAG_9B_TSI   0x9Bu</p>

Transaction Status Information (**9B**)
used as `T_9B_TSI` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9B_TSI\[2/2\] <a href="#ga42e197884e26dbe7ef666d8f6881b376" id="ga42e197884e26dbe7ef666d8f6881b376"></a> {#tag_9b_tsi-22}

<p>#define TAG_9B_TSI   0x9Bu</p>

Transaction Status Information (**9B**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a3a483bca9d788db046219dc80b8251e0">EMV_CTLS_TRANSRES_STRUCT::T_9B_TSI</a>.

## TAG_9C_TRANS_TYPE\[1/2\] <a href="#ga4064d8681a4f0a40f4a3bf304f2a0902" id="ga4064d8681a4f0a40f4a3bf304f2a0902"></a> {#tag_9c_trans_type-12}

<p>#define TAG_9C_TRANS_TYPE   0x9Cu</p>

Transaction Type (**9C**)
used as `TransType` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>, `T_9C_TransType` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9C_TRANS_TYPE\[2/2\] <a href="#ga4064d8681a4f0a40f4a3bf304f2a0902" id="ga4064d8681a4f0a40f4a3bf304f2a0902"></a> {#tag_9c_trans_type-22}

<p>#define TAG_9C_TRANS_TYPE   0x9Cu</p>

Transaction Type (**9C**)
used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae9357fb5fbb42943ac347ea3b2cd4d6a">EMV_CTLS_START_STRUCT::TransType</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a89e1907a3fb369ef96d8ae2de716acad">EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType</a>.

## TAG_9D_DDF_NAME\[1/2\] <a href="#ga37efa7b9d05b931462f22fa75542845d" id="ga37efa7b9d05b931462f22fa75542845d"></a> {#tag_9d_ddf_name-12}

<p>#define TAG_9D_DDF_NAME   0x9Du</p>

<a href="class_directory.md">Directory</a> Definition File Name (**9D**)

## TAG_9D_DDF_NAME\[2/2\] <a href="#ga37efa7b9d05b931462f22fa75542845d" id="ga37efa7b9d05b931462f22fa75542845d"></a> {#tag_9d_ddf_name-22}

<p>#define TAG_9D_DDF_NAME   0x9Du</p>

<a href="class_directory.md">Directory</a> Definition File Name (**9D**)

## TAG_9F01_ACQ_ID\[1/2\] <a href="#gaab4cf8e32535962270e6219bcbc08194" id="gaab4cf8e32535962270e6219bcbc08194"></a> {#tag_9f01_acq_id-12}

<p>#define TAG_9F01_ACQ_ID   0x9F01u</p>

Acquirer Identifier (**9F01**)

## TAG_9F01_ACQ_ID\[2/2\] <a href="#gaab4cf8e32535962270e6219bcbc08194" id="gaab4cf8e32535962270e6219bcbc08194"></a> {#tag_9f01_acq_id-22}

<p>#define TAG_9F01_ACQ_ID   0x9F01u</p>

Acquirer Identifier (**9F01**)

used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_MK_STRUCT::AcquirerIdentifier_9F01</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_AK_STRUCT::AcquirerIdentifier_9F01</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_JK_STRUCT::AcquirerIdentifier_9F01</a>

## TAG_9F02_NUM_AMOUNT_AUTH\[1/2\] <a href="#ga6952b55733eff49c55768a6f7802f9e4" id="ga6952b55733eff49c55768a6f7802f9e4"></a> {#tag_9f02_num_amount_auth-12}

<p>#define TAG_9F02_NUM_AMOUNT_AUTH   0x9F02u</p>

Amount Authorized (Numeric) (**9F02**)
used as `Betrag_num` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>, `puc9F02_amount` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc9F02_amount` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>)

## TAG_9F02_NUM_AMOUNT_AUTH\[2/2\] <a href="#ga6952b55733eff49c55768a6f7802f9e4" id="ga6952b55733eff49c55768a6f7802f9e4"></a> {#tag_9f02_num_amount_auth-22}

<p>#define TAG_9F02_NUM_AMOUNT_AUTH   0x9F02u</p>

Amount Authorized (Numeric) (**9F02**)
used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a30d37bb81b40a6e53cb3081ee862ddef">EMV_CTLS_PAYMENT_STRUCT::Amount</a>.

## TAG_9F03_NUM_AMOUNT_OTHER\[1/2\] <a href="#gaccc339b2226ade4b5ab935624377f800" id="gaccc339b2226ade4b5ab935624377f800"></a> {#tag_9f03_num_amount_other-12}

<p>#define TAG_9F03_NUM_AMOUNT_OTHER   0x9F03u</p>

Amount Other (Numeric) (**9F03**)

## TAG_9F03_NUM_AMOUNT_OTHER\[2/2\] <a href="#gaccc339b2226ade4b5ab935624377f800" id="gaccc339b2226ade4b5ab935624377f800"></a> {#tag_9f03_num_amount_other-22}

<p>#define TAG_9F03_NUM_AMOUNT_OTHER   0x9F03u</p>

Amount Other (Numeric) (**9F03**)
used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#aa3226314fccbb9ce083892654db4c0a4">EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount</a>.

## TAG_9F04_BIN_AMOUNT_OTHER\[1/2\] <a href="#ga19e6864aff86c11e64b2ba1685b2aaa0" id="ga19e6864aff86c11e64b2ba1685b2aaa0"></a> {#tag_9f04_bin_amount_other-12}

<p>#define TAG_9F04_BIN_AMOUNT_OTHER   0x9F04u</p>

Amount Other (Binary) (**9F04**)
used as `T_9F06_AID` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F04_BIN_AMOUNT_OTHER\[2/2\] <a href="#ga19e6864aff86c11e64b2ba1685b2aaa0" id="ga19e6864aff86c11e64b2ba1685b2aaa0"></a> {#tag_9f04_bin_amount_other-22}

<p>#define TAG_9F04_BIN_AMOUNT_OTHER   0x9F04u</p>

Amount Other (Binary) (**9F04**)
can be used to fetch <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#aa3226314fccbb9ce083892654db4c0a4">EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount</a> as 4-byte-binary-coded value by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a>

## TAG_9F05_APP_DISCR_DATA\[1/2\] <a href="#ga4bea514ddd3305a371b36e09a78bb560" id="ga4bea514ddd3305a371b36e09a78bb560"></a> {#tag_9f05_app_discr_data-12}

<p>#define TAG_9F05_APP_DISCR_DATA   0x9F05u</p>

Application Discretionary Data (**9F05**)

## TAG_9F05_APP_DISCR_DATA\[2/2\] <a href="#ga4bea514ddd3305a371b36e09a78bb560" id="ga4bea514ddd3305a371b36e09a78bb560"></a> {#tag_9f05_app_discr_data-22}

<p>#define TAG_9F05_APP_DISCR_DATA   0x9F05u</p>

Application Discretionary Data (**9F05**)

## TAG_9F06_AID\[1/2\] <a href="#ga7670871675627d7e74d29683fbacf01a" id="ga7670871675627d7e74d29683fbacf01a"></a> {#tag_9f06_aid-12}

<p>#define TAG_9F06_AID   0x9F06u</p>

Application Identifier (AID)-terminal (**9F06**)
used as <a href="group___a_d_k___t_r_x___e_x_e_c.md#a01f5f1efd99e3e3be9139a95d5349941">EMV_CT_TRANSRES_STRUCT::T_9F06_AID</a> and <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9169197c16d59f125de973dad0339531">EMV_CT_CANDIDATE_DATA_STRUCT::len9F06</a>.

## TAG_9F06_AID\[2/2\] <a href="#ga7670871675627d7e74d29683fbacf01a" id="ga7670871675627d7e74d29683fbacf01a"></a> {#tag_9f06_aid-22}

<p>#define TAG_9F06_AID   0x9F06u</p>

Application Identifier (AID)-terminal (**9F06**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a6f049fe2417bdca3916cf4414f79a3e2">EMV_CTLS_TRANSRES_STRUCT::T_9F06_AID</a>.

## TAG_9F07_APP_USAGE_CONTROL\[1/2\] <a href="#gacbc210315b12dab79eb6f8cc1cfe79f2" id="gacbc210315b12dab79eb6f8cc1cfe79f2"></a> {#tag_9f07_app_usage_control-12}

<p>#define TAG_9F07_APP_USAGE_CONTROL   0x9F07u</p>

Application Usage Control (**9F07**)

## TAG_9F07_APP_USAGE_CONTROL\[2/2\] <a href="#gacbc210315b12dab79eb6f8cc1cfe79f2" id="gacbc210315b12dab79eb6f8cc1cfe79f2"></a> {#tag_9f07_app_usage_control-22}

<p>#define TAG_9F07_APP_USAGE_CONTROL   0x9F07u</p>

Application Usage Control (**9F07**)

## TAG_9F08_ICC_APP_VERSION_NB\[1/2\] <a href="#ga49ac73f311523b949020821550b7cda8" id="ga49ac73f311523b949020821550b7cda8"></a> {#tag_9f08_icc_app_version_nb-12}

<p>#define TAG_9F08_ICC_APP_VERSION_NB   0x9F08u</p>

Application Version Number - ICC (**9F08**)
used as <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae24c7f2703201392ba5eaa2e0d2febd7">EMV_CT_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No</a>.

## TAG_9F08_ICC_APP_VERSION_NB\[2/2\] <a href="#ga49ac73f311523b949020821550b7cda8" id="ga49ac73f311523b949020821550b7cda8"></a> {#tag_9f08_icc_app_version_nb-22}

<p>#define TAG_9F08_ICC_APP_VERSION_NB   0x9F08u</p>

Application Version Number - ICC (**9F08**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ae24c7f2703201392ba5eaa2e0d2febd7">EMV_CTLS_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No</a>.

## TAG_9F09_TRM_APP_VERSION_NB\[1/2\] <a href="#gac0fb6f2c9da5e835754d94e7edf4f7c2" id="gac0fb6f2c9da5e835754d94e7edf4f7c2"></a> {#tag_9f09_trm_app_version_nb-12}

<p>#define TAG_9F09_TRM_APP_VERSION_NB   0x9F09u</p>

Application Version Number (**9F09**)
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4a13940a43927f00f7c701cb98131588">EMV_CT_APPLIDATA_STRUCT::VerNum</a>, `T_9F09_VerNum` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F09_TRM_APP_VERSION_NB\[2/2\] <a href="#gac0fb6f2c9da5e835754d94e7edf4f7c2" id="gac0fb6f2c9da5e835754d94e7edf4f7c2"></a> {#tag_9f09_trm_app_version_nb-22}

<p>#define TAG_9F09_TRM_APP_VERSION_NB   0x9F09u</p>

Application Version Number (**9F09**)
used in most schemes of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a85e80490e4f5516c7cb1966011d0c359">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::Scheme</a>.

## TAG_9F0A_ASRPD\[1/2\] <a href="#gac5bdc3a443d2b32f1898d095609ec871" id="gac5bdc3a443d2b32f1898d095609ec871"></a> {#tag_9f0a_asrpd-12}

<p>#define TAG_9F0A_ASRPD   0x9F0Au</p>

Application Selection Registered Proprietary Data (**9F0A**)
EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, \...) ID: 2 byte, L: length, 1 byte
used as <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3e3bb2514827c49deb0057e9235980cc">EMV_CT_CANDIDATE_DATA_STRUCT::selData</a>.

## TAG_9F0A_ASRPD\[2/2\] <a href="#gac5bdc3a443d2b32f1898d095609ec871" id="gac5bdc3a443d2b32f1898d095609ec871"></a> {#tag_9f0a_asrpd-22}

<p>#define TAG_9F0A_ASRPD   0x9F0Au</p>

Application Selection Registered Proprietary Data (**9F0A**)
EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, \...) ID: 2 byte, L: length, 1 byte.

## TAG_9F0B_CARDHOLDER_NAME_XT\[1/2\] <a href="#gae1a12d59719645310bdbe8c778460d8b" id="gae1a12d59719645310bdbe8c778460d8b"></a> {#tag_9f0b_cardholder_name_xt-12}

<p>#define TAG_9F0B_CARDHOLDER_NAME_XT   0x9F0Bu</p>

Cardholder Name Extended (**9F0B**)

## TAG_9F0B_CARDHOLDER_NAME_XT\[2/2\] <a href="#gae1a12d59719645310bdbe8c778460d8b" id="gae1a12d59719645310bdbe8c778460d8b"></a> {#tag_9f0b_cardholder_name_xt-22}

<p>#define TAG_9F0B_CARDHOLDER_NAME_XT   0x9F0Bu</p>

Cardholder Name Extended (**9F0B**)

## TAG_9F0C_ISSUER_ID_EXT\[1/2\] <a href="#gaa2f5cfcf442860cea8e1021150b9e5c5" id="gaa2f5cfcf442860cea8e1021150b9e5c5"></a> {#tag_9f0c_issuer_id_ext-12}

<p>#define TAG_9F0C_ISSUER_ID_EXT   0x9F0Cu</p>

Issuer Identification Number Extended SB N°231 (**9F0C**)
used for <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0c9b7f7b7001ce7a98a7a01e1276786b">EMV_CT_CANDIDATE_DATA_STRUCT::IIN</a> when IIN length is 4.

## TAG_9F0C_ISSUER_ID_EXT\[2/2\] <a href="#gaa2f5cfcf442860cea8e1021150b9e5c5" id="gaa2f5cfcf442860cea8e1021150b9e5c5"></a> {#tag_9f0c_issuer_id_ext-22}

<p>#define TAG_9F0C_ISSUER_ID_EXT   0x9F0Cu</p>

Issuer Identification Number Extended SB N°231 (**9F0C**)
used for <a href="group___f_u_n_c___f_l_o_w.md#a0c9b7f7b7001ce7a98a7a01e1276786b">EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN</a> when IIN length is 4.

## TAG_9F0D_IAC_DEFAULT\[1/2\] <a href="#gaf1f1b225dbba527e67b529d1b9bc0b41" id="gaf1f1b225dbba527e67b529d1b9bc0b41"></a> {#tag_9f0d_iac_default-12}

<p>#define TAG_9F0D_IAC_DEFAULT   0x9F0Du</p>

Issuer Action Code - Default (**9F0D**)
used as `T_9F0D_IACDefault` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F0D_IAC_DEFAULT\[2/2\] <a href="#gaf1f1b225dbba527e67b529d1b9bc0b41" id="gaf1f1b225dbba527e67b529d1b9bc0b41"></a> {#tag_9f0d_iac_default-22}

<p>#define TAG_9F0D_IAC_DEFAULT   0x9F0Du</p>

Issuer Action Code - Default (**9F0D**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a78cc77069e865792d6bfa5d54b7fd3a7">EMV_CTLS_TRANSRES_STRUCT::T_9F0D_IACDefault</a>.

## TAG_9F0E_IAC_DENIAL\[1/2\] <a href="#ga56066a347d8d88263ea6340cccbae911" id="ga56066a347d8d88263ea6340cccbae911"></a> {#tag_9f0e_iac_denial-12}

<p>#define TAG_9F0E_IAC_DENIAL   0x9F0Eu</p>

Issuer Action Code - Denial (**9F0E**)
used as `T_9F0E_IACDenial` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F0E_IAC_DENIAL\[2/2\] <a href="#ga56066a347d8d88263ea6340cccbae911" id="ga56066a347d8d88263ea6340cccbae911"></a> {#tag_9f0e_iac_denial-22}

<p>#define TAG_9F0E_IAC_DENIAL   0x9F0Eu</p>

Issuer Action Code - Denial (**9F0E**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a21b49faa952c458dcf2743473486817c">EMV_CTLS_TRANSRES_STRUCT::T_9F0E_IACDenial</a>.

## TAG_9F0F_IAC_ONLINE\[1/2\] <a href="#gaff475c053b8dce5ca076bc3613c3888a" id="gaff475c053b8dce5ca076bc3613c3888a"></a> {#tag_9f0f_iac_online-12}

<p>#define TAG_9F0F_IAC_ONLINE   0x9F0Fu</p>

Issuer Action Code - Online (**9F0F**)
used as `T_9F0F_IACOnline` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F0F_IAC_ONLINE\[2/2\] <a href="#gaff475c053b8dce5ca076bc3613c3888a" id="gaff475c053b8dce5ca076bc3613c3888a"></a> {#tag_9f0f_iac_online-22}

<p>#define TAG_9F0F_IAC_ONLINE   0x9F0Fu</p>

Issuer Action Code - Online (**9F0F**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a685a012758034411221da9ae0b667277">EMV_CTLS_TRANSRES_STRUCT::T_9F0F_IACOnline</a>.

## TAG_9F10_ISS_APP_DATA\[1/2\] <a href="#ga1ff0740aef66ba7bc912c7262abd86d0" id="ga1ff0740aef66ba7bc912c7262abd86d0"></a> {#tag_9f10_iss_app_data-12}

<p>#define TAG_9F10_ISS_APP_DATA   0x9F10u</p>

Issuer Application Data (**9F10**)
used as `T_9F10_DataIssuer` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F10_ISS_APP_DATA\[2/2\] <a href="#ga1ff0740aef66ba7bc912c7262abd86d0" id="ga1ff0740aef66ba7bc912c7262abd86d0"></a> {#tag_9f10_iss_app_data-22}

<p>#define TAG_9F10_ISS_APP_DATA   0x9F10u</p>

Issuer Application Data (**9F10**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#ab2e7ecdb8e54b69dfa718f6f7fb7fed7">EMV_CTLS_TRANSRES_STRUCT::T_9F10_DataIssuer</a>.

## TAG_9F11_ISS_CODE_TABLE_ID\[1/2\] <a href="#gaec3d1fc145f66b87ec5416b7d6cb69aa" id="gaec3d1fc145f66b87ec5416b7d6cb69aa"></a> {#tag_9f11_iss_code_table_id-12}

<p>#define TAG_9F11_ISS_CODE_TABLE_ID   0x9F11u</p>

Issuer Code Table Index (**9F11**)
used as <a href="group___a_d_k___t_r_x___e_x_e_c.md#a77254a708d1c2d25bb365a8599c6789a">EMV_CT_SELECTRES_STRUCT::T_9F11_CodeTable</a> and <a href="group___a_d_k___t_r_x___e_x_e_c.md#a8153872ab7e4b7f549fe59b2c23c0691">EMV_CT_CANDIDATE_DATA_STRUCT::CodeTableIndex</a>, as well as for callback functions that might show a dialog:
PIN entry (<a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> with <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gadc9d6fed84456455586fb621722ae922">TAG_BF08_CBK_PIN</a>)
Amount confirmation (<a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> with <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga626da7fbed5c5a9a5563cf0b9d45a4a4">TAG_BF02_CBK_AMOUNTCONF</a>)
and Application selection ((<a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> with <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gababcd780ecf1c9d400ecfde024d910fe">TAG_BF04_CBK_REDUCE_CAND</a>)

## TAG_9F11_ISS_CODE_TABLE_ID\[2/2\] <a href="#gaec3d1fc145f66b87ec5416b7d6cb69aa" id="gaec3d1fc145f66b87ec5416b7d6cb69aa"></a> {#tag_9f11_iss_code_table_id-22}

<p>#define TAG_9F11_ISS_CODE_TABLE_ID   0x9F11u</p>

Issuer Code Table Index (**9F11**)

## TAG_9F12_APP_PREFERRED_NAME\[1/2\] <a href="#gaf705ddff22734d558b161db19bf24038" id="gaf705ddff22734d558b161db19bf24038"></a> {#tag_9f12_app_preferred_name-12}

<p>#define TAG_9F12_APP_PREFERRED_NAME   0x9F12u</p>

Application Preferred Name (**9F12**)
used as `T_9F12_PreferredName` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t">EMV_CT_SELECTRES_STRUCT</a>.

## TAG_9F12_APP_PREFERRED_NAME\[2/2\] <a href="#gaf705ddff22734d558b161db19bf24038" id="gaf705ddff22734d558b161db19bf24038"></a> {#tag_9f12_app_preferred_name-22}

<p>#define TAG_9F12_APP_PREFERRED_NAME   0x9F12u</p>

Application Preferred Name (**9F12**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a1a933985680b099e926e54086a602c12">EMV_CTLS_TRANSRES_STRUCT::AppName</a>.

## TAG_9F13_LAST_ONLINE_ATC\[1/2\] <a href="#ga657ab92f37b6da29874ecc2e40f66654" id="ga657ab92f37b6da29874ecc2e40f66654"></a> {#tag_9f13_last_online_atc-12}

<p>#define TAG_9F13_LAST_ONLINE_ATC   0x9F13u</p>

Last Online ATC Register (**9F13**)

## TAG_9F13_LAST_ONLINE_ATC\[2/2\] <a href="#ga657ab92f37b6da29874ecc2e40f66654" id="ga657ab92f37b6da29874ecc2e40f66654"></a> {#tag_9f13_last_online_atc-22}

<p>#define TAG_9F13_LAST_ONLINE_ATC   0x9F13u</p>

Last Online ATC Register (**9F13**)

## TAG_9F14_LO_OFFLINE_LIMIT\[1/2\] <a href="#ga70f157218d7fdca32a6adea6d96d1815" id="ga70f157218d7fdca32a6adea6d96d1815"></a> {#tag_9f14_lo_offline_limit-12}

<p>#define TAG_9F14_LO_OFFLINE_LIMIT   0x9F14u</p>

Lower Consecutive Offline Limit (**9F14**)

## TAG_9F14_LO_OFFLINE_LIMIT\[2/2\] <a href="#ga70f157218d7fdca32a6adea6d96d1815" id="ga70f157218d7fdca32a6adea6d96d1815"></a> {#tag_9f14_lo_offline_limit-22}

<p>#define TAG_9F14_LO_OFFLINE_LIMIT   0x9F14u</p>

Lower Consecutive Offline Limit (**9F14**)

## TAG_9F15_MERCH_CATEG_CODE\[1/2\] <a href="#ga41481cf04242a0ba441c87f6a1569639" id="ga41481cf04242a0ba441c87f6a1569639"></a> {#tag_9f15_merch_categ_code-12}

<p>#define TAG_9F15_MERCH_CATEG_CODE   0x9F15u</p>

Merchant Category Code (**9F15**)
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aadaaf73921101bb812f90ec7c4a9d5dd">EMV_CT_APPLIDATA_STRUCT::BrKey</a>.

## TAG_9F15_MERCH_CATEG_CODE\[2/2\] <a href="#ga41481cf04242a0ba441c87f6a1569639" id="ga41481cf04242a0ba441c87f6a1569639"></a> {#tag_9f15_merch_categ_code-22}

<p>#define TAG_9F15_MERCH_CATEG_CODE   0x9F15u</p>

Merchant Category Code (**9F15**)

used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_DK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_RK_STRUCT::MerchantCategoryCode_9F15</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantCategoryCode_9F15</a>

## TAG_9F16_MERCHANT_ID\[1/2\] <a href="#ga184ccaaef50ada9988bfd4af37b8c9fb" id="ga184ccaaef50ada9988bfd4af37b8c9fb"></a> {#tag_9f16_merchant_id-12}

<p>#define TAG_9F16_MERCHANT_ID   0x9F16u</p>

Merchant Identifier (**9F16**)
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3e3c059a7e2f459a449ab7e746046cf7">EMV_CT_APPLIDATA_STRUCT::MerchIdent</a>, `T_9F16_MerchIdent` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F16_MERCHANT_ID\[2/2\] <a href="#ga184ccaaef50ada9988bfd4af37b8c9fb" id="ga184ccaaef50ada9988bfd4af37b8c9fb"></a> {#tag_9f16_merchant_id-22}

<p>#define TAG_9F16_MERCHANT_ID   0x9F16u</p>

Merchant Identifier (**9F16**)

used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantIdentifier_9F16</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantIdentifier_9F16</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantIdentifier_9F16</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantIdentifier_9F16</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantIdentifier_9F16</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantIdentifier_9F16</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantIdentifier_9F16</a>

## TAG_9F17_PIN_TRIES_LEFT\[1/2\] <a href="#ga9fab68d1de5156b91a399f80ae4f0e9d" id="ga9fab68d1de5156b91a399f80ae4f0e9d"></a> {#tag_9f17_pin_tries_left-12}

<p>#define TAG_9F17_PIN_TRIES_LEFT   0x9F17u</p>

PIN Try Counter (**9F17**)

## TAG_9F17_PIN_TRIES_LEFT\[2/2\] <a href="#ga9fab68d1de5156b91a399f80ae4f0e9d" id="ga9fab68d1de5156b91a399f80ae4f0e9d"></a> {#tag_9f17_pin_tries_left-22}

<p>#define TAG_9F17_PIN_TRIES_LEFT   0x9F17u</p>

PIN Try Counter (**9F17**)

## TAG_9F18_ISS_SCRIPT_ID\[1/2\] <a href="#ga7a6c8f96bdd8a98f8122825695d6cb9b" id="ga7a6c8f96bdd8a98f8122825695d6cb9b"></a> {#tag_9f18_iss_script_id-12}

<p>#define TAG_9F18_ISS_SCRIPT_ID   0x9F18u</p>

Issuer Script Identifier (**9F18**)

## TAG_9F18_ISS_SCRIPT_ID\[2/2\] <a href="#ga7a6c8f96bdd8a98f8122825695d6cb9b" id="ga7a6c8f96bdd8a98f8122825695d6cb9b"></a> {#tag_9f18_iss_script_id-22}

<p>#define TAG_9F18_ISS_SCRIPT_ID   0x9F18u</p>

Issuer Script Identifier (**9F18**)
to be used to fill <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#afd420a16596fd515042c455eaf81dbc5">EMV_CTLS_HOST_STRUCT::ScriptData</a>.

## TAG_9F1A_TRM_COUNTRY_CODE\[1/2\] <a href="#ga5bc987c3686fd5821f20d21015354787" id="ga5bc987c3686fd5821f20d21015354787"></a> {#tag_9f1a_trm_country_code-12}

<p>#define TAG_9F1A_TRM_COUNTRY_CODE   0x9F1Au</p>

Terminal Country Code (**9F1A**)
used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#af11a6d7b3bb1f5438dca672b746aeb11">EMV_CT_TERMDATA_STRUCT::TermCountryCode</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3cc1a7ad9805c9caf22a3164e3f1d326">EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm</a>, and <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9301d8a1bf495da0078826f0c1a981c8">EMV_CT_TRANSRES_STRUCT::T_9F1A_TermCountryCode</a>.

## TAG_9F1A_TRM_COUNTRY_CODE\[2/2\] <a href="#ga5bc987c3686fd5821f20d21015354787" id="ga5bc987c3686fd5821f20d21015354787"></a> {#tag_9f1a_trm_country_code-22}

<p>#define TAG_9F1A_TRM_COUNTRY_CODE   0x9F1Au</p>

Terminal Country Code (**9F1A**)
Configured with <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a0cd015d4fd7fa26a9c13d6687dcc1aea">EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm</a>.

## TAG_9F1B_TRM_FLOOR_LIMIT\[1/2\] <a href="#gab275fa140f8e21bda8e1d0bdafe47602" id="gab275fa140f8e21bda8e1d0bdafe47602"></a> {#tag_9f1b_trm_floor_limit-12}

<p>#define TAG_9F1B_TRM_FLOOR_LIMIT   0x9F1Bu</p>

Terminal Floor Limit (**9F1B**)
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5fb4232c2d98685b61df7884ccfbaf5">EMV_CT_APPLIDATA_STRUCT::FloorLimit</a>, `puc9F1B_fl` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), and `puc9F1B_fl` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>)

## TAG_9F1B_TRM_FLOOR_LIMIT\[2/2\] <a href="#gab275fa140f8e21bda8e1d0bdafe47602" id="gab275fa140f8e21bda8e1d0bdafe47602"></a> {#tag_9f1b_trm_floor_limit-22}

<p>#define TAG_9F1B_TRM_FLOOR_LIMIT   0x9F1Bu</p>

Terminal Floor Limit (**9F1B**)
not used anymore for contactless interface.

## TAG_9F1C_TRM_ID\[1/2\] <a href="#ga64f401e453e74b4ff1f727aa7cc449ac" id="ga64f401e453e74b4ff1f727aa7cc449ac"></a> {#tag_9f1c_trm_id-12}

<p>#define TAG_9F1C_TRM_ID   0x9F1Cu</p>

Terminal Identification (**9F1C**)
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_APPLIDATA_STRUCT::TermIdent</a>.

## TAG_9F1C_TRM_ID\[2/2\] <a href="#ga64f401e453e74b4ff1f727aa7cc449ac" id="ga64f401e453e74b4ff1f727aa7cc449ac"></a> {#tag_9f1c_trm_id-22}

<p>#define TAG_9F1C_TRM_ID   0x9F1Cu</p>

Terminal Identification (**9F1C**)

used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_MK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_VK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_AK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_JK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_DK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_IK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_EK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_PK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_CK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_GK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_RK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_SK_STRUCT::TermIdent_9F1C</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_PB_STRUCT::TermIdent_9F1C</a>

## TAG_9F1D_TRM_RISK_MNGT_DATA\[1/2\] <a href="#ga9d809ba2d6c28d0989f1bbffffe35a45" id="ga9d809ba2d6c28d0989f1bbffffe35a45"></a> {#tag_9f1d_trm_risk_mngt_data-12}

<p>#define TAG_9F1D_TRM_RISK_MNGT_DATA   0x9F1Du</p>

Terminal Risk Management Data (**9F1D**)

## TAG_9F1D_TRM_RISK_MNGT_DATA\[2/2\] <a href="#ga9d809ba2d6c28d0989f1bbffffe35a45" id="ga9d809ba2d6c28d0989f1bbffffe35a45"></a> {#tag_9f1d_trm_risk_mngt_data-22}

<p>#define TAG_9F1D_TRM_RISK_MNGT_DATA   0x9F1Du</p>

Terminal Risk Management Data (**9F1D**)
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad71cd39800ac88311b925feaeafef835">EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalRiskManagementData_9F1D</a>.

## TAG_9F1E_IFD_SERIAL_NB\[1/2\] <a href="#ga1edb578c8df9ce5a55b3204cda45d198" id="ga1edb578c8df9ce5a55b3204cda45d198"></a> {#tag_9f1e_ifd_serial_nb-12}

<p>#define TAG_9F1E_IFD_SERIAL_NB   0x9F1Eu</p>

Interface Device (IFD) Serial Number (**9F1E**)
used as `SerNum` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>, `T_9F1E_SerNum` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F1E_IFD_SERIAL_NB\[2/2\] <a href="#ga1edb578c8df9ce5a55b3204cda45d198" id="ga1edb578c8df9ce5a55b3204cda45d198"></a> {#tag_9f1e_ifd_serial_nb-22}

<p>#define TAG_9F1E_IFD_SERIAL_NB   0x9F1Eu</p>

Interface Device (IFD) Serial Number (**9F1E**)
used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a291c422cae05265d91a2b025867c32b4">EMV_CTLS_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber</a>.

## TAG_9F1F_TRACK_1_DISCR_DATA\[1/2\] <a href="#gac8f2609592cabb5c3a24b5133ac80ada" id="gac8f2609592cabb5c3a24b5133ac80ada"></a> {#tag_9f1f_track_1_discr_data-12}

<p>#define TAG_9F1F_TRACK_1_DISCR_DATA   0x9F1Fu</p>

Track 1 Discretionary Data (**9F1F**)

## TAG_9F1F_TRACK_1_DISCR_DATA\[2/2\] <a href="#gac8f2609592cabb5c3a24b5133ac80ada" id="gac8f2609592cabb5c3a24b5133ac80ada"></a> {#tag_9f1f_track_1_discr_data-22}

<p>#define TAG_9F1F_TRACK_1_DISCR_DATA   0x9F1Fu</p>

Track 1 Discretionary Data (**9F1F**)

## TAG_9F20_TRACK_2_DISCR_DATA\[1/2\] <a href="#gab7edbeb7b44a8c24e58b717d73b2cffb" id="gab7edbeb7b44a8c24e58b717d73b2cffb"></a> {#tag_9f20_track_2_discr_data-12}

<p>#define TAG_9F20_TRACK_2_DISCR_DATA   0x9F20u</p>

Track 2 Discretionary Data (**9F20**)

## TAG_9F20_TRACK_2_DISCR_DATA\[2/2\] <a href="#gab7edbeb7b44a8c24e58b717d73b2cffb" id="gab7edbeb7b44a8c24e58b717d73b2cffb"></a> {#tag_9f20_track_2_discr_data-22}

<p>#define TAG_9F20_TRACK_2_DISCR_DATA   0x9F20u</p>

Track 2 Discretionary Data (**9F20**)

## TAG_9F21_TRANS_TIME\[1/2\] <a href="#ga680a68f0ce959ac674f997968145a09c" id="ga680a68f0ce959ac674f997968145a09c"></a> {#tag_9f21_trans_time-12}

<p>#define TAG_9F21_TRANS_TIME   0x9F21u</p>

Transaction Time (**9F21**)
used as `Time` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>, `T_9F21_Time` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F21_TRANS_TIME\[2/2\] <a href="#ga680a68f0ce959ac674f997968145a09c" id="ga680a68f0ce959ac674f997968145a09c"></a> {#tag_9f21_trans_time-22}

<p>#define TAG_9F21_TRANS_TIME   0x9F21u</p>

Transaction Time (**9F21**)
used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ab2e402d904a352a99a517cf77ed2d875">EMV_CTLS_PAYMENT_STRUCT::Time</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a174ff228cb3d664e05bbc093fcdd9a3a">EMV_CTLS_TRANSRES_STRUCT::T_9F21_Time</a>.

## TAG_9F22_CERTIF_AUTH_PK_ID\[1/2\] <a href="#ga14c698c859256684f32e839458068cd5" id="ga14c698c859256684f32e839458068cd5"></a> {#tag_9f22_certif_auth_pk_id-12}

<p>#define TAG_9F22_CERTIF_AUTH_PK_ID   0x9F22u</p>

Certification Authority Public Key Index (**9F22**)

## TAG_9F22_CERTIF_AUTH_PK_ID\[2/2\] <a href="#ga14c698c859256684f32e839458068cd5" id="ga14c698c859256684f32e839458068cd5"></a> {#tag_9f22_certif_auth_pk_id-22}

<p>#define TAG_9F22_CERTIF_AUTH_PK_ID   0x9F22u</p>

Certification Authority Public Key Index (**9F22**)

## TAG_9F23_HI_OFFLINE_LIMIT\[1/2\] <a href="#ga7b7e272aa0bc0787fa134364d0353f7a" id="ga7b7e272aa0bc0787fa134364d0353f7a"></a> {#tag_9f23_hi_offline_limit-12}

<p>#define TAG_9F23_HI_OFFLINE_LIMIT   0x9F23u</p>

Upper Consecutive Offline Limit (**9F23**)

## TAG_9F23_HI_OFFLINE_LIMIT\[2/2\] <a href="#ga7b7e272aa0bc0787fa134364d0353f7a" id="ga7b7e272aa0bc0787fa134364d0353f7a"></a> {#tag_9f23_hi_offline_limit-22}

<p>#define TAG_9F23_HI_OFFLINE_LIMIT   0x9F23u</p>

Upper Consecutive Offline Limit (**9F23**)

## TAG_9F24_PAYM_ACCOUNT_REF\[1/2\] <a href="#ga5b15a8b40aafbe917ef7aa6e10614115" id="ga5b15a8b40aafbe917ef7aa6e10614115"></a> {#tag_9f24_paym_account_ref-12}

<p>#define TAG_9F24_PAYM_ACCOUNT_REF   0x9F24u</p>

Payment Account Reference (**9F24**)
EMV Specification Bulletin No. 178, an29.

## TAG_9F24_PAYM_ACCOUNT_REF\[2/2\] <a href="#ga5b15a8b40aafbe917ef7aa6e10614115" id="ga5b15a8b40aafbe917ef7aa6e10614115"></a> {#tag_9f24_paym_account_ref-22}

<p>#define TAG_9F24_PAYM_ACCOUNT_REF   0x9F24u</p>

Payment Account Reference (**9F24**)
EMV Specification Bulletin No. 178, an29.

## TAG_9F26_APP_CRYPTOGRAM\[1/2\] <a href="#gac5b1de965da383855ef078f7c001efe1" id="gac5b1de965da383855ef078f7c001efe1"></a> {#tag_9f26_app_cryptogram-12}

<p>#define TAG_9F26_APP_CRYPTOGRAM   0x9F26u</p>

Application Cryptogram (**9F26**)
used as `T_9F26_Cryptogramm` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F26_APP_CRYPTOGRAM\[2/2\] <a href="#gac5b1de965da383855ef078f7c001efe1" id="gac5b1de965da383855ef078f7c001efe1"></a> {#tag_9f26_app_cryptogram-22}

<p>#define TAG_9F26_APP_CRYPTOGRAM   0x9F26u</p>

Application Cryptogram (**9F26**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a10c360689ac25ffda269b58686ccfda9">EMV_CTLS_TRANSRES_STRUCT::T_9F26_Cryptogramm</a>.

## TAG_9F27_CRYPT_INFO_DATA\[1/2\] <a href="#gaa101e01de60c1261ba8324079a299e33" id="gaa101e01de60c1261ba8324079a299e33"></a> {#tag_9f27_crypt_info_data-12}

<p>#define TAG_9F27_CRYPT_INFO_DATA   0x9F27u</p>

Cryptogram Information Data (**9F27**)
used as `T_9F27_CryptInfo` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F27_CRYPT_INFO_DATA\[2/2\] <a href="#gaa101e01de60c1261ba8324079a299e33" id="gaa101e01de60c1261ba8324079a299e33"></a> {#tag_9f27_crypt_info_data-22}

<p>#define TAG_9F27_CRYPT_INFO_DATA   0x9F27u</p>

Cryptogram Information Data (**9F27**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a2dbcdd3fc07a3872b2409d8f10cf2120">EMV_CTLS_TRANSRES_STRUCT::T_9F27_CryptInfo</a>.

## TAG_9F2D_ICC_PIN_PK_CERTIF\[1/2\] <a href="#ga391f852dd1cd82d9e3db321d2e469fed" id="ga391f852dd1cd82d9e3db321d2e469fed"></a> {#tag_9f2d_icc_pin_pk_certif-12}

<p>#define TAG_9F2D_ICC_PIN_PK_CERTIF   0x9F2Du</p>

ICC PIN Encipherment Public Key Certificate (**9F2D**)

## TAG_9F2D_ICC_PIN_PK_CERTIF\[2/2\] <a href="#ga391f852dd1cd82d9e3db321d2e469fed" id="ga391f852dd1cd82d9e3db321d2e469fed"></a> {#tag_9f2d_icc_pin_pk_certif-22}

<p>#define TAG_9F2D_ICC_PIN_PK_CERTIF   0x9F2Du</p>

ICC PIN Encipherment Public Key Certificate (**9F2D**)

## TAG_9F2E_ICC_PIN_PK_EXP\[1/2\] <a href="#gae00bfd84ee0e62edf15020fad073da0d" id="gae00bfd84ee0e62edf15020fad073da0d"></a> {#tag_9f2e_icc_pin_pk_exp-12}

<p>#define TAG_9F2E_ICC_PIN_PK_EXP   0x9F2Eu</p>

ICC PIN Encipherment Public Key Exponent (**9F2E**)

## TAG_9F2E_ICC_PIN_PK_EXP\[2/2\] <a href="#gae00bfd84ee0e62edf15020fad073da0d" id="gae00bfd84ee0e62edf15020fad073da0d"></a> {#tag_9f2e_icc_pin_pk_exp-22}

<p>#define TAG_9F2E_ICC_PIN_PK_EXP   0x9F2Eu</p>

ICC PIN Encipherment Public Key Exponent (**9F2E**)

## TAG_9F2F_ICC_PIN_PK_REMAIN\[1/2\] <a href="#ga851b285c89b77afb3cbaf3c2eec213ee" id="ga851b285c89b77afb3cbaf3c2eec213ee"></a> {#tag_9f2f_icc_pin_pk_remain-12}

<p>#define TAG_9F2F_ICC_PIN_PK_REMAIN   0x9F2Fu</p>

ICC PIN Encipherment Public Key Remainder (**9F2F**)

## TAG_9F2F_ICC_PIN_PK_REMAIN\[2/2\] <a href="#ga851b285c89b77afb3cbaf3c2eec213ee" id="ga851b285c89b77afb3cbaf3c2eec213ee"></a> {#tag_9f2f_icc_pin_pk_remain-22}

<p>#define TAG_9F2F_ICC_PIN_PK_REMAIN   0x9F2Fu</p>

ICC PIN Encipherment Public Key Remainder (**9F2F**)

## TAG_9F32_ISS_PK_EXP\[1/2\] <a href="#ga795617047882a82433810ac8c329f4e7" id="ga795617047882a82433810ac8c329f4e7"></a> {#tag_9f32_iss_pk_exp-12}

<p>#define TAG_9F32_ISS_PK_EXP   0x9F32u</p>

Issuer Public Key Exponent (**9F32**)

## TAG_9F32_ISS_PK_EXP\[2/2\] <a href="#ga795617047882a82433810ac8c329f4e7" id="ga795617047882a82433810ac8c329f4e7"></a> {#tag_9f32_iss_pk_exp-22}

<p>#define TAG_9F32_ISS_PK_EXP   0x9F32u</p>

Issuer Public Key Exponent (**9F32**)

## TAG_9F33_TRM_CAPABILITIES\[1/2\] <a href="#gad3ec876483505eb23aad4e1b210653f5" id="gad3ec876483505eb23aad4e1b210653f5"></a> {#tag_9f33_trm_capabilities-12}

<p>#define TAG_9F33_TRM_CAPABILITIES   0x9F33u</p>

Terminal Capabilities (**9F33**)
used as `TermCap` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7ac173f4a1d9a3845a18af806ee8bb31">EMV_CT_APPLIDATA_STRUCT::App_TermCap</a>, `T_9F33_TermCap` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F33_TRM_CAPABILITIES\[2/2\] <a href="#gad3ec876483505eb23aad4e1b210653f5" id="gad3ec876483505eb23aad4e1b210653f5"></a> {#tag_9f33_trm_capabilities-22}

<p>#define TAG_9F33_TRM_CAPABILITIES   0x9F33u</p>

Terminal Capabilities (**9F33**)

used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCapabilities_9F33</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCapabilities_9F33</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCapabilities_9F33</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCapabilities_9F33</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCapabilities_9F33</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCapabilities_9F33</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCapabilities_9F33</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCapabilities_9F33</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCapabilities_9F33</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a9bafc60d1b92fc94619b5f80f664f001">EMV_CTLS_TRANSRES_STRUCT::T_9F33_TermCap</a>

## TAG_9F34_CVM_RESULTS\[1/2\] <a href="#gabdd39eac033e163719eb2f845fffbf62" id="gabdd39eac033e163719eb2f845fffbf62"></a> {#tag_9f34_cvm_results-12}

<p>#define TAG_9F34_CVM_RESULTS   0x9F34u</p>

Cardholder Verification Method (CVM) Results (**9F34**)
used as `T_9F34_CVM_Res` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F34_CVM_RESULTS\[2/2\] <a href="#gabdd39eac033e163719eb2f845fffbf62" id="gabdd39eac033e163719eb2f845fffbf62"></a> {#tag_9f34_cvm_results-22}

<p>#define TAG_9F34_CVM_RESULTS   0x9F34u</p>

Cardholder Verification Method (CVM) Results (**9F34**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aff7dce3be9087c81bbf864aa71c7574d">EMV_CTLS_TRANSRES_STRUCT::T_9F34_CVM_Res</a>.

## TAG_9F35_TRM_TYPE\[1/2\] <a href="#gace5b4ef50a58d29b2f5296c2c17273c9" id="gace5b4ef50a58d29b2f5296c2c17273c9"></a> {#tag_9f35_trm_type-12}

<p>#define TAG_9F35_TRM_TYPE   0x9F35u</p>

Terminal Type (**9F35**)
used as `TermTyp` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>, `T_9F35_TermTyp` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F35_TRM_TYPE\[2/2\] <a href="#gace5b4ef50a58d29b2f5296c2c17273c9" id="gace5b4ef50a58d29b2f5296c2c17273c9"></a> {#tag_9f35_trm_type-22}

<p>#define TAG_9F35_TRM_TYPE   0x9F35u</p>

Terminal Type (**9F35**)
used as <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CTLS_TERMDATA_STRUCT::TermTyp</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a4ae8c1f40415ecbca8b6664a3bfadcc7">EMV_CTLS_TRANSRES_STRUCT::T_9F35_TermTyp</a>.

## TAG_9F36_ATC\[1/2\] <a href="#ga776acfe7de52e4ec25163354ead04dcb" id="ga776acfe7de52e4ec25163354ead04dcb"></a> {#tag_9f36_atc-12}

<p>#define TAG_9F36_ATC   0x9F36u</p>

Application Transaction Counter (ATC) (**9F36**)
used as `T_9F36_ATC` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F36_ATC\[2/2\] <a href="#ga776acfe7de52e4ec25163354ead04dcb" id="ga776acfe7de52e4ec25163354ead04dcb"></a> {#tag_9f36_atc-22}

<p>#define TAG_9F36_ATC   0x9F36u</p>

Application Transaction Counter (ATC) (**9F36**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aae70ced9d0c58160e46c79790ce36d1c">EMV_CTLS_TRANSRES_STRUCT::T_9F36_ATC</a>.

## TAG_9F37_UNPREDICTABLE_NB\[1/2\] <a href="#gad08084306abcf29bb9517b75b0b5b189" id="gad08084306abcf29bb9517b75b0b5b189"></a> {#tag_9f37_unpredictable_nb-12}

<p>#define TAG_9F37_UNPREDICTABLE_NB   0x9F37u</p>

Unpredictable Number (**9F37**)
used as `T_9F37_RandomNumber` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F37_UNPREDICTABLE_NB\[2/2\] <a href="#gad08084306abcf29bb9517b75b0b5b189" id="gad08084306abcf29bb9517b75b0b5b189"></a> {#tag_9f37_unpredictable_nb-22}

<p>#define TAG_9F37_UNPREDICTABLE_NB   0x9F37u</p>

Unpredictable Number (**9F37**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aeb4a47c49c6c551d25b2fca5be2da26d">EMV_CTLS_TRANSRES_STRUCT::T_9F37_RandomNumber</a>.

## TAG_9F38_PDOL\[1/2\] <a href="#ga481f3da31ceffcdc7facf7a40da6a7a8" id="ga481f3da31ceffcdc7facf7a40da6a7a8"></a> {#tag_9f38_pdol-12}

<p>#define TAG_9F38_PDOL   0x9F38u</p>

Processing Options Data Object List (PDOL) (**9F38**)

## TAG_9F38_PDOL\[2/2\] <a href="#ga481f3da31ceffcdc7facf7a40da6a7a8" id="ga481f3da31ceffcdc7facf7a40da6a7a8"></a> {#tag_9f38_pdol-22}

<p>#define TAG_9F38_PDOL   0x9F38u</p>

Processing Options Data Object List (PDOL) (**9F38**)

## TAG_9F39_POS_ENTRY_MODE\[1/2\] <a href="#ga52532bf55c516d8055dcba4695fdc159" id="ga52532bf55c516d8055dcba4695fdc159"></a> {#tag_9f39_pos_entry_mode-12}

<p>#define TAG_9F39_POS_ENTRY_MODE   0x9F39u</p>

Point-of-Service (POS) Entry Mode (**9F39**)
used as EMV_CT_APPLIDATA_STRUCT::POS_Eing, `T_9F39_POSEntryMode` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F39_POS_ENTRY_MODE\[2/2\] <a href="#ga52532bf55c516d8055dcba4695fdc159" id="ga52532bf55c516d8055dcba4695fdc159"></a> {#tag_9f39_pos_entry_mode-22}

<p>#define TAG_9F39_POS_ENTRY_MODE   0x9F39u</p>

Point-of-Service (POS) Entry Mode (**9F39**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a81dbb9b0eba94a7659f91f570a48a4d4">EMV_CTLS_TRANSRES_STRUCT::T_9F39_POSEntryMode</a>.

## TAG_9F3A_AMNT_REF_CURRENCY\[1/2\] <a href="#ga9fb361d5d732411517cf1c33baa1ba42" id="ga9fb361d5d732411517cf1c33baa1ba42"></a> {#tag_9f3a_amnt_ref_currency-12}

<p>#define TAG_9F3A_AMNT_REF_CURRENCY   0x9F3Au</p>

Amount, Reference Currency (**9F3A**)
used as `Betrag_num` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t">EMV_CT_SELECT_STRUCT</a>.

## TAG_9F3A_AMNT_REF_CURRENCY\[2/2\] <a href="#ga9fb361d5d732411517cf1c33baa1ba42" id="ga9fb361d5d732411517cf1c33baa1ba42"></a> {#tag_9f3a_amnt_ref_currency-22}

<p>#define TAG_9F3A_AMNT_REF_CURRENCY   0x9F3Au</p>

Amount, Reference Currency (**9F3A**)

## TAG_9F3B_APP_REF_CURRENCY\[1/2\] <a href="#ga833bd7d1ca1d973bec1b42fc12c39f63" id="ga833bd7d1ca1d973bec1b42fc12c39f63"></a> {#tag_9f3b_app_ref_currency-12}

<p>#define TAG_9F3B_APP_REF_CURRENCY   0x9F3Bu</p>

Application Reference Currency (**9F3B**)

## TAG_9F3B_APP_REF_CURRENCY\[2/2\] <a href="#ga833bd7d1ca1d973bec1b42fc12c39f63" id="ga833bd7d1ca1d973bec1b42fc12c39f63"></a> {#tag_9f3b_app_ref_currency-22}

<p>#define TAG_9F3B_APP_REF_CURRENCY   0x9F3Bu</p>

Application Reference Currency (**9F3B**)

## TAG_9F3C_TRANS_REF_CURRENCY\[1/2\] <a href="#ga5af69c050d6db276c4c9a111bd638003" id="ga5af69c050d6db276c4c9a111bd638003"></a> {#tag_9f3c_trans_ref_currency-12}

<p>#define TAG_9F3C_TRANS_REF_CURRENCY   0x9F3Cu</p>

Transaction Reference Currency Code (**9F3C**)
In case CommonServices request this tag EMV ADK will give back same as [TAG_5F2A_TRANS_CURRENCY](#ga369ab2cc83e9b220bdfa79753f1f3962 "Transaction Currency Code (5F2A)   Configured with CurrencyTrans in EMV_CT_TERMDATA_STRUCT (for DCC p...").

## TAG_9F3C_TRANS_REF_CURRENCY\[2/2\] <a href="#ga5af69c050d6db276c4c9a111bd638003" id="ga5af69c050d6db276c4c9a111bd638003"></a> {#tag_9f3c_trans_ref_currency-22}

<p>#define TAG_9F3C_TRANS_REF_CURRENCY   0x9F3Cu</p>

Transaction Reference Currency Code (**9F3C**)

## TAG_9F3D_TRANS_CURRENCY_EXP\[1/2\] <a href="#gad22456b0beb48767f0f71fc0202dbddc" id="gad22456b0beb48767f0f71fc0202dbddc"></a> {#tag_9f3d_trans_currency_exp-12}

<p>#define TAG_9F3D_TRANS_CURRENCY_EXP   0x9F3Du</p>

Transaction Reference Currency Exponent (**9F3D**)
In case CommonServices request this tag EMV ADK will give back same as [TAG_5F36_TRANS_CURRENCY_EXP](#ga134c61ae2787b93c5def5bbf929f7cb4 "Transaction Currency Exponent (5F36)   Configured with Exp_Trans in EMV_CT_TERMDATA_STRUCT (for DCC p...").

## TAG_9F3D_TRANS_CURRENCY_EXP\[2/2\] <a href="#gad22456b0beb48767f0f71fc0202dbddc" id="gad22456b0beb48767f0f71fc0202dbddc"></a> {#tag_9f3d_trans_currency_exp-22}

<p>#define TAG_9F3D_TRANS_CURRENCY_EXP   0x9F3Du</p>

Transaction Reference Currency Exponent (**9F3D**)

## TAG_9F40_ADD_TRM_CAP\[1/2\] <a href="#ga5670c7d223a0af749d5b8b251e32f870" id="ga5670c7d223a0af749d5b8b251e32f870"></a> {#tag_9f40_add_trm_cap-12}

<p>#define TAG_9F40_ADD_TRM_CAP   0x9F40u</p>

Additional Terminal Capabilities (**9F40**)
used as `TermAddCap` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa137395f6cc0b7618d9fec892c3c8b00">EMV_CT_APPLIDATA_STRUCT::App_TermAddCap</a>, `T_9F40_AddTermCap` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F40_ADD_TRM_CAP\[2/2\] <a href="#ga5670c7d223a0af749d5b8b251e32f870" id="ga5670c7d223a0af749d5b8b251e32f870"></a> {#tag_9f40_add_trm_cap-22}

<p>#define TAG_9F40_ADD_TRM_CAP   0x9F40u</p>

Additional Terminal Capabilities (**9F40**)

used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_MK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_VK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_AK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_DK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_IK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_EK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_CK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_GK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_SK_STRUCT::AdditionalTerminalCapabilities_9F40</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af48770f2326a1db0c70846dc10a621dd">EMV_CTLS_TRANSRES_STRUCT::T_9F40_AddTermCap</a>

## TAG_9F41_TRANS_SEQUENCE_NB\[1/2\] <a href="#gab382a6fa7762c3e7589ad7cf877d77fc" id="gab382a6fa7762c3e7589ad7cf877d77fc"></a> {#tag_9f41_trans_sequence_nb-12}

<p>#define TAG_9F41_TRANS_SEQUENCE_NB   0x9F41u</p>

Transaction Sequence Counter (**9F41**)
used as `TransCount` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t">EMV_CT_TRANSAC_STRUCT</a>, `T_9F41_TransCount` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F41_TRANS_SEQUENCE_NB\[2/2\] <a href="#gab382a6fa7762c3e7589ad7cf877d77fc" id="gab382a6fa7762c3e7589ad7cf877d77fc"></a> {#tag_9f41_trans_sequence_nb-22}

<p>#define TAG_9F41_TRANS_SEQUENCE_NB   0x9F41u</p>

Transaction Sequence Counter (**9F41**)
used as <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#abe3243bfe7a5470e7218711c199bddc7">EMV_CTLS_PAYMENT_STRUCT::TransCount</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aa2802e6fa5a5b2f01dd1abcda266a614">EMV_CTLS_TRANSRES_STRUCT::T_9F41_TransCount</a>.

## TAG_9F42_APP_CURRENCY_CODE\[1/2\] <a href="#gac2b5ddfa533fc2ce2612d1f126b2ed5f" id="gac2b5ddfa533fc2ce2612d1f126b2ed5f"></a> {#tag_9f42_app_currency_code-12}

<p>#define TAG_9F42_APP_CURRENCY_CODE   0x9F42u</p>

Application Currency Code (**9F42**)
used as `puc9F42_acc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>), `puc9F42_acc` in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>)

## TAG_9F42_APP_CURRENCY_CODE\[2/2\] <a href="#gac2b5ddfa533fc2ce2612d1f126b2ed5f" id="gac2b5ddfa533fc2ce2612d1f126b2ed5f"></a> {#tag_9f42_app_currency_code-22}

<p>#define TAG_9F42_APP_CURRENCY_CODE   0x9F42u</p>

Application Currency Code (**9F42**)

## TAG_9F43_APP_REF_CURRCY_EXP\[1/2\] <a href="#ga4230108db4010ae0ac2b6db706eb8f5a" id="ga4230108db4010ae0ac2b6db706eb8f5a"></a> {#tag_9f43_app_ref_currcy_exp-12}

<p>#define TAG_9F43_APP_REF_CURRCY_EXP   0x9F43u</p>

Application Reference Currency Exponent (**9F43**)

## TAG_9F43_APP_REF_CURRCY_EXP\[2/2\] <a href="#ga4230108db4010ae0ac2b6db706eb8f5a" id="ga4230108db4010ae0ac2b6db706eb8f5a"></a> {#tag_9f43_app_ref_currcy_exp-22}

<p>#define TAG_9F43_APP_REF_CURRCY_EXP   0x9F43u</p>

Application Reference Currency Exponent (**9F43**)

## TAG_9F44_APP_CURRENCY_EXP\[1/2\] <a href="#ga4120687590bf9c322c44899b30415c3f" id="ga4120687590bf9c322c44899b30415c3f"></a> {#tag_9f44_app_currency_exp-12}

<p>#define TAG_9F44_APP_CURRENCY_EXP   0x9F44u</p>

Application Currency Exponent (**9F44**)

## TAG_9F44_APP_CURRENCY_EXP\[2/2\] <a href="#ga4120687590bf9c322c44899b30415c3f" id="ga4120687590bf9c322c44899b30415c3f"></a> {#tag_9f44_app_currency_exp-22}

<p>#define TAG_9F44_APP_CURRENCY_EXP   0x9F44u</p>

Application Currency Exponent (**9F44**)

## TAG_9F45_DATA_AUTHENT_CODE\[1/2\] <a href="#gafb250579afe8802f385c3c654980db4c" id="gafb250579afe8802f385c3c654980db4c"></a> {#tag_9f45_data_authent_code-12}

<p>#define TAG_9F45_DATA_AUTHENT_CODE   0x9F45u</p>

Data Authentication Code (**9F45**)
used as `T_9F45_DataAuthCode` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F45_DATA_AUTHENT_CODE\[2/2\] <a href="#gafb250579afe8802f385c3c654980db4c" id="gafb250579afe8802f385c3c654980db4c"></a> {#tag_9f45_data_authent_code-22}

<p>#define TAG_9F45_DATA_AUTHENT_CODE   0x9F45u</p>

Data Authentication Code (**9F45**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a47e963c2b1eeea3a0c3cfa5b96e9a0b9">EMV_CTLS_TRANSRES_STRUCT::T_9F45_DataAuthCode</a>.

## TAG_9F46_ICC_PK_CERTIF\[1/2\] <a href="#ga7a894771929116e6d996a626211de03d" id="ga7a894771929116e6d996a626211de03d"></a> {#tag_9f46_icc_pk_certif-12}

<p>#define TAG_9F46_ICC_PK_CERTIF   0x9F46u</p>

ICC Public Key Certificate (**9F46**)

## TAG_9F46_ICC_PK_CERTIF\[2/2\] <a href="#ga7a894771929116e6d996a626211de03d" id="ga7a894771929116e6d996a626211de03d"></a> {#tag_9f46_icc_pk_certif-22}

<p>#define TAG_9F46_ICC_PK_CERTIF   0x9F46u</p>

ICC Public Key Certificate (**9F46**)

## TAG_9F47_ICC_PK_EXP\[1/2\] <a href="#ga11034b96c501139accb50579ce3695a5" id="ga11034b96c501139accb50579ce3695a5"></a> {#tag_9f47_icc_pk_exp-12}

<p>#define TAG_9F47_ICC_PK_EXP   0x9F47u</p>

ICC Public Key Exponent (**9F47**)

## TAG_9F47_ICC_PK_EXP\[2/2\] <a href="#ga11034b96c501139accb50579ce3695a5" id="ga11034b96c501139accb50579ce3695a5"></a> {#tag_9f47_icc_pk_exp-22}

<p>#define TAG_9F47_ICC_PK_EXP   0x9F47u</p>

ICC Public Key Exponent (**9F47**)

## TAG_9F48_ICC_PK_REMAINDER\[1/2\] <a href="#ga6d18aea1c51bf6447e8006beff6357bf" id="ga6d18aea1c51bf6447e8006beff6357bf"></a> {#tag_9f48_icc_pk_remainder-12}

<p>#define TAG_9F48_ICC_PK_REMAINDER   0x9F48u</p>

ICC Public Key Remainder (**9F48**)

## TAG_9F48_ICC_PK_REMAINDER\[2/2\] <a href="#ga6d18aea1c51bf6447e8006beff6357bf" id="ga6d18aea1c51bf6447e8006beff6357bf"></a> {#tag_9f48_icc_pk_remainder-22}

<p>#define TAG_9F48_ICC_PK_REMAINDER   0x9F48u</p>

ICC Public Key Remainder (**9F48**)

## TAG_9F49_DDOL\[1/2\] <a href="#ga3a1c986ad7ea241d2c32a656fd2efc49" id="ga3a1c986ad7ea241d2c32a656fd2efc49"></a> {#tag_9f49_ddol-12}

<p>#define TAG_9F49_DDOL   0x9F49u</p>

Dynamic Data Authentication Data Object List (**9F49**)

## TAG_9F49_DDOL\[2/2\] <a href="#ga3a1c986ad7ea241d2c32a656fd2efc49" id="ga3a1c986ad7ea241d2c32a656fd2efc49"></a> {#tag_9f49_ddol-22}

<p>#define TAG_9F49_DDOL   0x9F49u</p>

Dynamic Data Authentication Data Object List (**9F49**)

## TAG_9F4A_SDA_TAG_LIST\[1/2\] <a href="#ga37dc2d303ed0a83212ac1b0a4751d124" id="ga37dc2d303ed0a83212ac1b0a4751d124"></a> {#tag_9f4a_sda_tag_list-12}

<p>#define TAG_9F4A_SDA_TAG_LIST   0x9F4Au</p>

Static Data Authentication Tag List (**9F4A**)

## TAG_9F4A_SDA_TAG_LIST\[2/2\] <a href="#ga37dc2d303ed0a83212ac1b0a4751d124" id="ga37dc2d303ed0a83212ac1b0a4751d124"></a> {#tag_9f4a_sda_tag_list-22}

<p>#define TAG_9F4A_SDA_TAG_LIST   0x9F4Au</p>

Static Data Authentication Tag List (**9F4A**)

## TAG_9F4B_SDA_DATA\[1/2\] <a href="#gaffa11c953890e255d8bab4aa2b0857e2" id="gaffa11c953890e255d8bab4aa2b0857e2"></a> {#tag_9f4b_sda_data-12}

<p>#define TAG_9F4B_SDA_DATA   0x9F4Bu</p>

Signed Dynamic Application Data (**9F4B**)

## TAG_9F4B_SDA_DATA\[2/2\] <a href="#gaffa11c953890e255d8bab4aa2b0857e2" id="gaffa11c953890e255d8bab4aa2b0857e2"></a> {#tag_9f4b_sda_data-22}

<p>#define TAG_9F4B_SDA_DATA   0x9F4Bu</p>

Signed Dynamic Application Data (**9F4B**)

## TAG_9F4C_ICC_DYNAMIC_NB\[1/2\] <a href="#ga6582a8aec892abaaf7328da0a9160a1f" id="ga6582a8aec892abaaf7328da0a9160a1f"></a> {#tag_9f4c_icc_dynamic_nb-12}

<p>#define TAG_9F4C_ICC_DYNAMIC_NB   0x9F4Cu</p>

ICC Dynamic Number (**9F4C**)
used as `T_9F4C_ICCDynNumber` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t">EMV_CT_TRANSRES_STRUCT</a>.

## TAG_9F4C_ICC_DYNAMIC_NB\[2/2\] <a href="#ga6582a8aec892abaaf7328da0a9160a1f" id="ga6582a8aec892abaaf7328da0a9160a1f"></a> {#tag_9f4c_icc_dynamic_nb-22}

<p>#define TAG_9F4C_ICC_DYNAMIC_NB   0x9F4Cu</p>

ICC Dynamic Number (**9F4C**)
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#abb125f84afc30b4103bf1c25ff052e82">EMV_CTLS_TRANSRES_STRUCT::T_9F4C_ICCDynNumber</a>.

## TAG_9F4E_TAC_MERCHANTLOC\[1/2\] <a href="#gac3a7de1661225ab41a4529b68d1fda71" id="gac3a7de1661225ab41a4529b68d1fda71"></a> {#tag_9f4e_tac_merchantloc-12}

<p>#define TAG_9F4E_TAC_MERCHANTLOC   0x9F4Eu</p>

Merchant name and location (VISA VCPS 2.1.1) (**9F4E**)

## TAG_9F4E_TAC_MERCHANTLOC\[2/2\] <a href="#gac3a7de1661225ab41a4529b68d1fda71" id="gac3a7de1661225ab41a4529b68d1fda71"></a> {#tag_9f4e_tac_merchantloc-22}

<p>#define TAG_9F4E_TAC_MERCHANTLOC   0x9F4Eu</p>

Merchant name and location (VISA VCPS 2.1.1) (**9F4E**)

used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantNameAndLocation_9F4E</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantNameAndLocation_9F4E</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantNameAndLocation_9F4E</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantNameAndLocation_9F4E</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantNameAndLocation_9F4E</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantNameAndLocation_9F4E</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantNameAndLocation_9F4E</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantNameAndLocation_9F4E</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantNameAndLocation_9F4E</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_PB_STRUCT::MerchantNameAndLocation_9F4E</a>

## TAG_A5_FCI_PROPR_TPLT\[1/2\] <a href="#gab03193acf8a5a09e20e9cf2478713bf4" id="gab03193acf8a5a09e20e9cf2478713bf4"></a> {#tag_a5_fci_propr_tplt-12}

<p>#define TAG_A5_FCI_PROPR_TPLT   0xA5u</p>

FCI Proprietary Template (**A5**)

## TAG_A5_FCI_PROPR_TPLT\[2/2\] <a href="#gab03193acf8a5a09e20e9cf2478713bf4" id="gab03193acf8a5a09e20e9cf2478713bf4"></a> {#tag_a5_fci_propr_tplt-22}

<p>#define TAG_A5_FCI_PROPR_TPLT   0xA5u</p>

FCI Proprietary Template (**A5**)

## TAG_BF0C_FCI_ISS_DISCR\[1/2\] <a href="#ga87cf97daaa2f8375a36dd08318cdb38d" id="ga87cf97daaa2f8375a36dd08318cdb38d"></a> {#tag_bf0c_fci_iss_discr-12}

<p>#define TAG_BF0C_FCI_ISS_DISCR   0xBF0Cu</p>

FCI Issuer Discretionary Data (**BF0C**)

## TAG_BF0C_FCI_ISS_DISCR\[2/2\] <a href="#ga87cf97daaa2f8375a36dd08318cdb38d" id="ga87cf97daaa2f8375a36dd08318cdb38d"></a> {#tag_bf0c_fci_iss_discr-22}

<p>#define TAG_BF0C_FCI_ISS_DISCR   0xBF0Cu</p>

FCI Issuer Discretionary Data (**BF0C**)

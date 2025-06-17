---
title: emv/EMV_CT_Common/export/emv/E2E_EMV_CT_Serialize.h

---

# emv/EMV_CT_Common/export/emv/E2E_EMV_CT_Serialize.h



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[HEADER_SIZE](_e2_e___e_m_v___c_t___serialize_8h.md#define-header-size)**  |
|  | **[MAX_MESSAGE_SIZE](_e2_e___e_m_v___c_t___serialize_8h.md#define-max-message-size)**  |
|  | **[MAX_DATA_SIZE](_e2_e___e_m_v___c_t___serialize_8h.md#define-max-data-size)**  |
|  | **[MIN](_e2_e___e_m_v___c_t___serialize_8h.md#define-min)**(a, b)  |
|  | **[TAG_42_ISSUER_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-42-issuer-id)** <br>Issuer Identification Number (IIN) (**42**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin).  |
|  | **[TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)** <br>Application Identifier (AID) - Card (**4F**)  |
|  | **[TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)** <br>Application Label (**50**)    used for [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname), [EMV_CT_DOM_CHIP_STRUCT::ucAppName](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucappname), [EMV_CT_CANDIDATE_STRUCT::name](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-name).  |
|  | **[TAG_52_CMD_TO_PERFORM](group___e_m_v_c_o___t_a_g_s.md#define-tag-52-cmd-to-perform)** <br>Command to Perform (**52**)  |
|  | **[TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)** <br>Track 2 Equivalent Data (**57**)    used as `T_57_DataTrack2` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `puc57_track2` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) )  |
|  | **[TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan)** <br>Application Primary Account Number (**5A**)    used as `T_5A_PAN` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5A_pan` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) ), `puc5A_pan` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc5A_pan` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc))  |
|  | **[TAG_5F20_CARDHOLDER_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f20-cardholder-name)** <br>Cardholder Name (**5F20**)    used as `T_5F20_Cardholder` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F24_expdate` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) ), and `uc5F24_expdate` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps))  |
|  | **[TAG_5F24_APP_EXP_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f24-app-exp-date)** <br>Application Expiration Data (**5F24**)    used as `T_5F24_AppExpDate` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F24_expdate` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) ), and `pucExpDate` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps))  |
|  | **[TAG_5F25_APP_EFF_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f25-app-eff-date)** <br>Application Effective Data (**5F25**)    used as `T_5F25_AppEffDate` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_5F28_ISS_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f28-iss-country-code)** <br>Issuer Country Code (**5F28**)    used as `T_5F28_IssCountryCode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `puc5F28_icc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) )  |
|  | **[TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency)** <br>Transaction Currency Code (**5F2A**)    Configured with `CurrencyTrans` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) (for DCC possibly in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)). Used as `T_5F2A_CurrencyTrans` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F2A_tcc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc5F2A_tcc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc))  |
|  | **[TAG_5F2D_LANGUAGE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2d-language)** <br>Language Preference (**5F2D**)    used as `T_5F2D_Lang_Pref` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_5F30_SERVICE_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f30-service-code)** <br>Service Code (**5F30**)  |
|  | **[TAG_5F34_PAN_SEQUENCE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f34-pan-sequence-nb)** <br>PAN Sequence Number (**5F34**)    used as `T_5F34_PANSequenceNo` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp)** <br>Transaction Currency Exponent (**5F36**)    Configured with `Exp_Trans` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) (for DCC possibly in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)). Used as `T_5F36_Trx_Currency_Exp` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F36_tce` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc5F36_tce` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc))  |
|  | **[TAG_5F50_ISSUER_URL](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f50-issuer-url)** <br>Issuer URL (**5F50**)  |
|  | **[TAG_5F53_IBAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f53-iban)** <br>International Bank Account Number (IBAN) (**5F53**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IBAN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iban).  |
|  | **[TAG_5F54_BIC](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f54-bic)** <br>Bank Identifier Code (BIC) (**5F54**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::BIC](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-bic).  |
|  | **[TAG_5F55_ISSUER_COUNTRY_2](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f55-issuer-country-2)** <br>Issuer Country Code (alpha 2 format) (**5F55**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::country2](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country2).  |
|  | **[TAG_5F56_ISSUER_COUNTRY_3](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f56-issuer-country-3)** <br>Issuer Country Code (alpha 3 format) (**5F56**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::country3](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country3).  |
|  | **[TAG_5F56_ISSUER_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f56-issuer-country-code)** <br>Issuer Country Code (**5F56**)  |
|  | **[TAG_5F57_ACCOUNT_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f57-account-type)** <br>Account Type (**5F57**)  |
|  | **[TAG_61_APP_TEMPLATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-61-app-template)** <br>Application Template (**61**)  |
|  | **[TAG_6F_FCI_TEMPLATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-6f-fci-template)** <br>File Control Information (FCI) Template (**6F**)  |
|  | **[TAG_70_AEF_DATA_TEMPLATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-70-aef-data-template)** <br>AEF Data Template (**70**)  |
|  | **[TAG_71_ISS_SCRIPT_TPLT_1](group___e_m_v_c_o___t_a_g_s.md#define-tag-71-iss-script-tplt-1)** <br>Issuer Script Template 1 (**71**)  |
|  | **[TAG_72_ISS_SCRIPT_TPLT_2](group___e_m_v_c_o___t_a_g_s.md#define-tag-72-iss-script-tplt-2)** <br>Issuer Script Template 2 (**72**)  |
|  | **[TAG_73_DIR_DISCR_TEMPLATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-73-dir-discr-template)** <br>[Directory](class_directory.md) Discretionary Template (**73**)  |
|  | **[TAG_77_RS_MSG_TPLT_FRMT_2](group___e_m_v_c_o___t_a_g_s.md#define-tag-77-rs-msg-tplt-frmt-2)** <br>Response Message Template Format 2 (**77**)  |
|  | **[TAG_80_RS_MSG_TPLT_FRMT_1](group___e_m_v_c_o___t_a_g_s.md#define-tag-80-rs-msg-tplt-frmt-1)** <br>Response Message Template Format 1 (**80**)  |
|  | **[TAG_81_BIN_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-81-bin-amount-auth)** <br>Amount Authorization Binary (**81**)  |
|  | **[TAG_82_AIP](group___e_m_v_c_o___t_a_g_s.md#define-tag-82-aip)** <br>Application Interchange Profile (**82**)    used as `T_82_AIP` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_83_CMD_TPLT](group___e_m_v_c_o___t_a_g_s.md#define-tag-83-cmd-tplt)** <br>Command Template (**83**)  |
|  | **[TAG_84_DF_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-84-df-name)** <br>Dedicated File Name (**84**)    used as `T_84_DFName` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_86_ISS_SCRIPT_CMD](group___e_m_v_c_o___t_a_g_s.md#define-tag-86-iss-script-cmd)** <br>Issuer Script Command (**86**)  |
|  | **[TAG_87_APP_PRIORITY_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-87-app-priority-id)** <br>Application Priority Indicator (**87**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::API](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-api).  |
|  | **[TAG_88_SHORT_FILE_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-88-short-file-id)** <br>Short File Identifier (SFI) (**88**)  |
|  | **[TAG_89_AUTH_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-89-auth-code)** <br>Authorization Code (**89**)    used as `AuthorizationCode` in [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md).  |
|  | **[TAG_8A_AUTH_RESP_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-8a-auth-resp-code)** <br>Authorization Response Code (**8A**)    used as `AuthResp` in [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md).  |
|  | **[TAG_8C_CDOL_1](group___e_m_v_c_o___t_a_g_s.md#define-tag-8c-cdol-1)** <br>CDOL 1 (**8C**)  |
|  | **[TAG_8D_CDOL_2](group___e_m_v_c_o___t_a_g_s.md#define-tag-8d-cdol-2)** <br>CDOL 2 (**8D**)  |
|  | **[TAG_8E_CVM_LIST](group___e_m_v_c_o___t_a_g_s.md#define-tag-8e-cvm-list)** <br>Cardholder Verification Method List (**8E**)  |
|  | **[TAG_8F_CERTIF_AUTH_PK_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-8f-certif-auth-pk-id)** <br>Certification Autority Public key Index (**8F**)  |
|  | **[TAG_90_ISS_PK_CERTIF](group___e_m_v_c_o___t_a_g_s.md#define-tag-90-iss-pk-certif)** <br>Issuer Public Key Certificate (**90**)  |
|  | **[TAG_91_ISS_AUTH_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-91-iss-auth-data)** <br>Issuer Authentication Data (**91**)    used as `AuthData` in [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md).  |
|  | **[TAG_92_ISS_PK_REMAINDER](group___e_m_v_c_o___t_a_g_s.md#define-tag-92-iss-pk-remainder)** <br>Issuer Public Key Remainder (**92**)  |
|  | **[TAG_93_SGND_STAT_APP_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-93-sgnd-stat-app-data)** <br>Signed Static Application Data (**93**)  |
|  | **[TAG_94_AFL](group___e_m_v_c_o___t_a_g_s.md#define-tag-94-afl)** <br>Application File Locator (**94**)  |
|  | **[TAG_95_TVR](group___e_m_v_c_o___t_a_g_s.md#define-tag-95-tvr)** <br>Terminal Verification Result (**95**)    used as `T_95_TVR` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_97_TDOL](group___e_m_v_c_o___t_a_g_s.md#define-tag-97-tdol)** <br>TDOL (**97**)  |
|  | **[TAG_98_TC_HASH_VALUE](group___e_m_v_c_o___t_a_g_s.md#define-tag-98-tc-hash-value)** <br>Transaction Certificate Hash Value (**98**)  |
|  | **[TAG_99_TRANS_PIN_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-99-trans-pin-data)** <br>Transaction PIN Data (**99**)  |
|  | **[TAG_9A_TRANS_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9a-trans-date)** <br>Transaction Date (**9A**)    used as `T_9A_Date` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `Date` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md).  |
|  | **[TAG_9B_TSI](group___e_m_v_c_o___t_a_g_s.md#define-tag-9b-tsi)** <br>Transaction Status Information (**9B**)    used as `T_9B_TSI` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9C_TRANS_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9c-trans-type)** <br>Transaction Type (**9C**)    used as `TransType` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `T_9C_TransType` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9D_DDF_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-9d-ddf-name)** <br>[Directory](class_directory.md) Definition File Name (**9D**)  |
|  | **[TAG_9F01_ACQ_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f01-acq-id)** <br>Acquirer Identifier (**9F01**)  |
|  | **[TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth)** <br>Amount Authorized (Numeric) (**9F02**)    used as `Betrag_num` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `puc9F02_amount` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc9F02_amount` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc))  |
|  | **[TAG_9F03_NUM_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f03-num-amount-other)** <br>Amount Other (Numeric) (**9F03**)  |
|  | **[TAG_9F04_BIN_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f04-bin-amount-other)** <br>Amount Other (Binary) (**9F04**)    used as `T_9F06_AID` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F05_APP_DISCR_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f05-app-discr-data)** <br>Application Discretionary Data (**9F05**)  |
|  | **[TAG_9F06_AID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f06-aid)** <br>Application Identifier (AID)-terminal (**9F06**)    used as [EMV_CT_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid) and [EMV_CT_CANDIDATE_DATA_STRUCT::len9F06](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-len9f06).  |
|  | **[TAG_9F07_APP_USAGE_CONTROL](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f07-app-usage-control)** <br>Application Usage Control (**9F07**)  |
|  | **[TAG_9F08_ICC_APP_VERSION_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f08-icc-app-version-nb)** <br>Application Version Number - ICC (**9F08**)    used as [EMV_CT_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no).  |
|  | **[TAG_9F09_TRM_APP_VERSION_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f09-trm-app-version-nb)** <br>Application Version Number (**9F09**)    used as [EMV_CT_APPLIDATA_STRUCT::VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum), `T_9F09_VerNum` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F0A_ASRPD](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0a-asrpd)** <br>Application Selection Registered Proprietary Data (**9F0A**)    EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, ...) ID: 2 byte, L: length, 1 byte    used as [EMV_CT_CANDIDATE_DATA_STRUCT::selData](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-seldata).  |
|  | **[TAG_9F0B_CARDHOLDER_NAME_XT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0b-cardholder-name-xt)** <br>Cardholder Name Extended (**9F0B**)  |
|  | **[TAG_9F0C_ISSUER_ID_EXT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0c-issuer-id-ext)** <br>Issuer Identification Number Extended SB N°231 (**9F0C**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin) when IIN length is 4.  |
|  | **[TAG_9F0D_IAC_DEFAULT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0d-iac-default)** <br>Issuer Action Code - Default (**9F0D**)    used as `T_9F0D_IACDefault` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F0E_IAC_DENIAL](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0e-iac-denial)** <br>Issuer Action Code - Denial (**9F0E**)    used as `T_9F0E_IACDenial` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F0F_IAC_ONLINE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0f-iac-online)** <br>Issuer Action Code - Online (**9F0F**)    used as `T_9F0F_IACOnline` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F10_ISS_APP_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f10-iss-app-data)** <br>Issuer Application Data (**9F10**)    used as `T_9F10_DataIssuer` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F11_ISS_CODE_TABLE_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f11-iss-code-table-id)**  |
|  | **[TAG_9F12_APP_PREFERRED_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f12-app-preferred-name)** <br>Application Preferred Name (**9F12**)    used as `T_9F12_PreferredName` in [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F13_LAST_ONLINE_ATC](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f13-last-online-atc)** <br>Last Online ATC Register (**9F13**)  |
|  | **[TAG_9F14_LO_OFFLINE_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f14-lo-offline-limit)** <br>Lower Consecutive Offline Limit (**9F14**)  |
|  | **[TAG_9F15_MERCH_CATEG_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f15-merch-categ-code)** <br>Merchant Category Code (**9F15**)    used as [EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey).  |
|  | **[TAG_9F16_MERCHANT_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f16-merchant-id)** <br>Merchant Identifier (**9F16**)    used as [EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident), `T_9F16_MerchIdent` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F17_PIN_TRIES_LEFT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f17-pin-tries-left)** <br>PIN Try Counter (**9F17**)  |
|  | **[TAG_9F18_ISS_SCRIPT_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f18-iss-script-id)** <br>Issuer Script Identifier (**9F18**)  |
|  | **[TAG_9F1A_TRM_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1a-trm-country-code)** <br>Terminal Country Code (**9F1A**)    used as [EMV_CT_TERMDATA_STRUCT::TermCountryCode](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcountrycode), [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm), and [EMV_CT_TRANSRES_STRUCT::T_9F1A_TermCountryCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1a-termcountrycode).  |
|  | **[TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit)** <br>Terminal Floor Limit (**9F1B**)    used as [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit), `puc9F1B_fl` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc9F1B_fl` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc))  |
|  | **[TAG_9F1C_TRM_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1c-trm-id)** <br>Terminal Identification (**9F1C**)    used as [EMV_CT_APPLIDATA_STRUCT::TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident).  |
|  | **[TAG_9F1D_TRM_RISK_MNGT_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1d-trm-risk-mngt-data)** <br>Terminal Risk Management Data (**9F1D**)  |
|  | **[TAG_9F1E_IFD_SERIAL_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1e-ifd-serial-nb)** <br>Interface Device (IFD) Serial Number (**9F1E**)    used as `SerNum` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), `T_9F1E_SerNum` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F1F_TRACK_1_DISCR_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1f-track-1-discr-data)** <br>Track 1 Discretionary Data (**9F1F**)  |
|  | **[TAG_9F20_TRACK_2_DISCR_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f20-track-2-discr-data)** <br>Track 2 Discretionary Data (**9F20**)  |
|  | **[TAG_9F21_TRANS_TIME](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f21-trans-time)** <br>Transaction Time (**9F21**)    used as `Time` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `T_9F21_Time` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F22_CERTIF_AUTH_PK_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f22-certif-auth-pk-id)** <br>Certification Authority Public Key Index (**9F22**)  |
|  | **[TAG_9F23_HI_OFFLINE_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f23-hi-offline-limit)** <br>Upper Consecutive Offline Limit (**9F23**)  |
|  | **[TAG_9F24_PAYM_ACCOUNT_REF](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f24-paym-account-ref)** <br>Payment Account Reference (**9F24**)    EMV Specification Bulletin No. 178, an29.  |
|  | **[TAG_9F26_APP_CRYPTOGRAM](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f26-app-cryptogram)** <br>Application Cryptogram (**9F26**)    used as `T_9F26_Cryptogramm` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F27_CRYPT_INFO_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f27-crypt-info-data)** <br>Cryptogram Information Data (**9F27**)    used as `T_9F27_CryptInfo` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F2D_ICC_PIN_PK_CERTIF](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f2d-icc-pin-pk-certif)** <br>ICC PIN Encipherment Public Key Certificate (**9F2D**)  |
|  | **[TAG_9F2E_ICC_PIN_PK_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f2e-icc-pin-pk-exp)** <br>ICC PIN Encipherment Public Key Exponent (**9F2E**)  |
|  | **[TAG_9F2F_ICC_PIN_PK_REMAIN](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f2f-icc-pin-pk-remain)** <br>ICC PIN Encipherment Public Key Remainder (**9F2F**)  |
|  | **[TAG_9F32_ISS_PK_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f32-iss-pk-exp)** <br>Issuer Public Key Exponent (**9F32**)  |
|  | **[TAG_9F33_TRM_CAPABILITIES](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f33-trm-capabilities)** <br>Terminal Capabilities (**9F33**)    used as `TermCap` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap), `T_9F33_TermCap` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F34_CVM_RESULTS](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f34-cvm-results)** <br>Cardholder Verification Method (CVM) Results (**9F34**)    used as `T_9F34_CVM_Res` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F35_TRM_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f35-trm-type)** <br>Terminal Type (**9F35**)    used as `TermTyp` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), `T_9F35_TermTyp` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F36_ATC](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f36-atc)** <br>Application Transaction Counter (ATC) (**9F36**)    used as `T_9F36_ATC` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F37_UNPREDICTABLE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f37-unpredictable-nb)** <br>Unpredictable Number (**9F37**)    used as `T_9F37_RandomNumber` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F38_PDOL](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f38-pdol)** <br>Processing Options Data Object List (PDOL) (**9F38**)  |
|  | **[TAG_9F39_POS_ENTRY_MODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f39-pos-entry-mode)** <br>Point-of-Service (POS) Entry Mode (**9F39**)    used as EMV_CT_APPLIDATA_STRUCT::POS_Eing, `T_9F39_POSEntryMode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F3A_AMNT_REF_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f3a-amnt-ref-currency)** <br>Amount, Reference Currency (**9F3A**)    used as `Betrag_num` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md).  |
|  | **[TAG_9F3B_APP_REF_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f3b-app-ref-currency)** <br>Application Reference Currency (**9F3B**)  |
|  | **[TAG_9F3C_TRANS_REF_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f3c-trans-ref-currency)** <br>Transaction Reference Currency Code (**9F3C**)    In case CommonServices request this tag EMV ADK will give back same as [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency).  |
|  | **[TAG_9F3D_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f3d-trans-currency-exp)** <br>Transaction Reference Currency Exponent (**9F3D**)    In case CommonServices request this tag EMV ADK will give back same as [TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp).  |
|  | **[TAG_9F40_ADD_TRM_CAP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f40-add-trm-cap)** <br>Additional Terminal Capabilities (**9F40**)    used as `TermAddCap` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap), `T_9F40_AddTermCap` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F41_TRANS_SEQUENCE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f41-trans-sequence-nb)** <br>Transaction Sequence Counter (**9F41**)    used as `TransCount` in [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md), `T_9F41_TransCount` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F42_APP_CURRENCY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f42-app-currency-code)** <br>Application Currency Code (**9F42**)    used as `puc9F42_acc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), `puc9F42_acc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc))  |
|  | **[TAG_9F43_APP_REF_CURRCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f43-app-ref-currcy-exp)** <br>Application Reference Currency Exponent (**9F43**)  |
|  | **[TAG_9F44_APP_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f44-app-currency-exp)** <br>Application Currency Exponent (**9F44**)  |
|  | **[TAG_9F45_DATA_AUTHENT_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f45-data-authent-code)** <br>Data Authentication Code (**9F45**)    used as `T_9F45_DataAuthCode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F46_ICC_PK_CERTIF](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f46-icc-pk-certif)** <br>ICC Public Key Certificate (**9F46**)  |
|  | **[TAG_9F47_ICC_PK_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f47-icc-pk-exp)** <br>ICC Public Key Exponent (**9F47**)  |
|  | **[TAG_9F48_ICC_PK_REMAINDER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f48-icc-pk-remainder)** <br>ICC Public Key Remainder (**9F48**)  |
|  | **[TAG_9F49_DDOL](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f49-ddol)** <br>Dynamic Data Authentication Data Object List (**9F49**)  |
|  | **[TAG_9F4A_SDA_TAG_LIST](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4a-sda-tag-list)** <br>Static Data Authentication Tag List (**9F4A**)  |
|  | **[TAG_9F4B_SDA_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4b-sda-data)** <br>Signed Dynamic Application Data (**9F4B**)  |
|  | **[TAG_9F4C_ICC_DYNAMIC_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4c-icc-dynamic-nb)** <br>ICC Dynamic Number (**9F4C**)    used as `T_9F4C_ICCDynNumber` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_9F4E_TAC_MERCHANTLOC](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4e-tac-merchantloc)** <br>Merchant name and location (VISA VCPS 2.1.1) (**9F4E**)  |
|  | **[TAG_A5_FCI_PROPR_TPLT](group___e_m_v_c_o___t_a_g_s.md#define-tag-a5-fci-propr-tplt)** <br>FCI Proprietary Template (**A5**)  |
|  | **[TAG_BF0C_FCI_ISS_DISCR](group___e_m_v_c_o___t_a_g_s.md#define-tag-bf0c-fci-iss-discr)** <br>FCI Issuer Discretionary Data (**BF0C**)  |
|  | **[TAG_9F53_TRANS_CATEGORY_CODE](group___m_c___t_a_g_s.md#define-tag-9f53-trans-category-code)** <br>Transaction Category Code, 1 byte binary.  |
|  | **[TAG_E2_FORMAT_B](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e2-format-b)** <br>Data objects with format "b"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E3_FORMAT_N](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e3-format-n)** <br>Data objects with format "n"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E4_FORMAT_CN](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e4-format-cn)** <br>Data objects with format "cn"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E5_FORMAT_A](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e5-format-a)** <br>Data objects with format "a"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E6_FORMAT_AN](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e6-format-an)** <br>Data objects with format "an"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_E7_FORMAT_ANS](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e7-format-ans)** <br>Data objects with format "ans"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags.  |
|  | **[TAG_F0_EMV_TEMPLATE](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-f0-emv-template)** <br>All BER TLV streams are packed in this tag.  |
|  | **[TAG_DOM_CHIP](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-dom-chip)** <br>constructed tag for domestic chip applications  |
|  | **[TAG_FALLBACK_MSR](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-fallback-msr)** <br>constructed tag for MSR data  |
|  | **[TAG_CAND_LIST](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-cand-list)** <br>constructed tag for candidate list, used for EMV_CT_CANDIDATE_TYPE, [EMV_CT_CandListType](struct_e_m_v___c_t___cand_list_type.md) and within EMV_CT_updateTxnTags  |
|  | **[TAG_KEY](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-key)** <br>constructed tag for CAP keys  |
|  | **[TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)** <br>Tag for ISO data.  |
|  | **[TAG_TRACE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-trace)** <br>Tag for trace data.  |
|  | **[TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)** <br>CAP Key Number of Keys, 1 byte 0...255.  |
|  | **[TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)** <br>used for [EMV_CT_CANDIDATE_STRUCT::candidate](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-candidate), AID in [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md), TRM_GetAppliData(), TRM_SelAppli(), TRM_ReduceCandidateList()  |
|  | **[TAG_DF05_BUILD_APPLILIST](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df05-build-applilist)** <br>[EMV_CT_SELECT_STRUCT::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist).  |
|  | **[TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)** <br>L1 reader options  `ucOptions` in [EMV_CT_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso) |
|  | **[TAG_DF07_UNCRIT_SCR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df07-uncrit-scr)** <br>Script results of uncritical scripts in response to [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) `[EMV_CT_SRCRIPTRES_TYPE::ScriptUnCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptuncritresult)`.  |
|  | **[TAG_DF08_CRIT_SCR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df08-crit-scr)** <br>Script results of critical scripts in response to [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) `[EMV_CT_SRCRIPTRES_TYPE::ScriptCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptcritresult)`.  |
|  | **[TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index)** <br>CAP Key Index  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index),    Index in [EMV_CT_CAPKEY_STRUCT::Index](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index),    XML Tag: [XML_TAG_CAP_KEYS_INDEX](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-index).  |
|  | **[TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid)** <br>CAP Key RID  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid),    RID in [EMV_CT_CAPKEY_STRUCT::RID](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid),    XML Tag: [XML_TAG_CAP_KEYS_RID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-rid).  |
|  | **[TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)** <br>CAP Key Modulus  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key),    Key in [EMV_CT_CAPKEY_STRUCT::Key](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key),    XML Tag: [XML_TAG_CAP_KEYS_KEY](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-key).  |
|  | **[TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash)** <br>CAP Key Hash  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash),    Hash in [EMV_CT_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash),    XML Tag: [XML_TAG_CAP_KEYS_HASH](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-hash).  |
|  | **[TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent)** <br>CAP Key Exponent  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent),    Exponent in [EMV_CT_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-exponent).  |
|  | **[TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl)** <br>CAP Key Certification Revocation List  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl),    RevocEntries in [EMV_CT_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-revoc-list).  |
|  | **[TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version)** <br>Library version given back from [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version),    FrameworkVersion in [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-framework-version).  |
|  | **[TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum)** <br>EMVCo checksum given back from [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum),    ChksumASCIIEMVCO in [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chksum-ascii-emvco).  |
|  | **[TAG_DF13_TERM_PARAM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df13-term-param)** <br>used for [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params) |
|  | **[TAG_DF14_ADD_TAGS_RES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df14-add-tags-res)**  |
|  | **[TAG_DF15_OFFL_ONLY_PROCESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df15-offl-only-process)** <br>used for EMV_CT_APPLIDATA_STRUCT::ucAC_before_after  |
|  | **[TAG_KEY_KEYLEN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-keylen)** <br>CAP Key key length  `Struct`, `XML` Reference:    KeyLen in [EMV_CT_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-keylen).  |
|  | **[TAG_DF17_FALLBACK_MIDS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df17-fallback-mids)** <br>used for [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids) |
|  | **[TAG_DF18_FALLABCK](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df18-fallabck)** <br>tag for [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling) |
|  | **[TAG_DF19_PARAMETER_4](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df19-parameter-4)** <br>RFU.  |
|  | **[TAG_DF1C_SPECIAL_TRX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1c-special-trx)** <br>tag for [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx) |
|  | **[TAG_DF1D_PRIO_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1d-prio-appli)** <br>each element of [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio) is packed in this tag  |
|  | **[TAG_DF20_ASI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df20-asi)** <br>used for [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi), [EMV_CT_DOM_CHIP_STRUCT::ucASI](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucasi) |
|  | **[TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial)** <br>see [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps))  |
|  | **[TAG_DF21_TAC_ABLEHNUNG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-ablehnung)**  |
|  | **[TAG_DF22_TAC_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df22-tac-online)** <br>see [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps))  |
|  | **[TAG_DF23_TAC_DEFAULT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df23-tac-default)** <br>see [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps))  |
|  | **[TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)** <br>see [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold)   also used for callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc))  |
|  | **[TAG_DF25_MAXPERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df25-maxpercent-onl)** <br>see [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage) |
|  | **[TAG_DF26_PERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df26-percent-onl)** <br>see [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage) |
|  | **[TAG_DF27_DEFAULT_TDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df27-default-tdol)** <br>see [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol) |
|  | **[TAG_DF28_DEFAULT_DDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df28-default-ddol)** <br>see [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol) |
|  | **[TAG_DF29_ADD_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df29-add-tags)** <br>see [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm) |
|  | **[TAG_DF2A_DUTY_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2a-duty-tags)** <br>see EMV_CT_APPLIDATA_STRUCT::Taglist  |
|  | **[TAG_DF2B_APP_FLOW_CAP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2b-app-flow-cap)** <br>see [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap) |
|  | **[TAG_DF2C_ADD_TAGS_CRD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2c-add-tags-crd)** <br>see [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd) |
|  | **[TAG_DF2D_EMV_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2d-emv-appli)** <br>see [EMV_CT_APPLIDATA_STRUCT::EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application) |
|  | **[TAG_DF2E_CVM_NOT_SUPP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2e-cvm-not-supp)** <br>see [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported) |
|  | **[TAG_DF2F_CVM_CUSTOM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2f-cvm-custom)** <br>see [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm) |
|  | **[TAG_DF30_LANG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df30-lang)** <br>see customer language index ([Known languages](group___t_f___l_a_n_g_u_a_g_e_s.md)), format is like in [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language) |
|  | **[TAG_DF31_TEXT_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df31-text-num)** <br>text index, format is like in [EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext) |
|  | **[TAG_DF33_APPLICATION_TAG_50](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df33-application-tag-50)** <br>[EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-50-applicationname).  |
|  | **[TAG_DF34_AMOUNT_CONF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df34-amount-conf)** <br>EMV_CT_TRANSAC_STRUCT::uc_AmountConfirmation.  |
|  | **[TAG_DF36_TRX_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df36-trx-options)** <br>EMV_CT_TRANSAC_STRUCT::tucTxnOptions.  |
|  | **[TAG_DF37_TRX_STEPS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df37-trx-steps)** <br>[EMV_CT_TRANSAC_STRUCT::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps).  |
|  | **[TAG_DF39_DCC_CBCK_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df39-dcc-cbck-info)** <br>[EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc))  |
|  | **[TAG_DF3A_FB_MSR_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3a-fb-msr-options)** <br>[EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms) (partially, together with [TAG_DF4C_FALLB_MSR_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4c-fallb-msr-appli))  |
|  | **[TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)** <br>RFU.  |
|  | **[TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)** <br>RFU.  |
|  | **[TAG_DF3C_EXT_LOGGING_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-ext-logging-data)** <br>Extended Logging data for DPAS Connect.  |
|  | **[TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)** <br>RFU.  |
|  | **[TAG_DF3E_CDA_PROC](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3e-cda-proc)** <br>EMV_CT_APPLIDATA_STRUCT::uc_CDA_Processing.  |
|  | **[TAG_DF40_FORCE_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df40-force-online)** <br>EMV_CT_SELECT_STRUCT::Force_Online.  |
|  | **[TAG_DF41_PIN_BYPASS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df41-pin-bypass)** <br>If [PIN_BYPASS](group___a_p_p___f_l_o_w___c_a_p_s.md#define-pin-bypass) was configured in [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap): This tag is given by EMV ADK in PIN entry callback ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin)).  |
|  | **[TAG_DF42_STATUS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df42-status)** <br>[EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo).  |
|  | **[TAG_DF43_FORCE_ACCEPT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df43-force-accept)** <br>EMV_CT_SELECT_STRUCT::Force_Acceptance.  |
|  | **[TAG_DF45_NO_DIR_SELECT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df45-no-dir-select)** <br>EMV_CT_SELECT_STRUCT::No_DirectorySelect.  |
|  | **[TAG_DF47_PRIOR_LANG_SEL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df47-prior-lang-sel)** <br>EMV_CT_SELECT_STRUCT::PreSelected_Language and EMV_CT_TRANSAC_STRUCT::PreSelected_Language.  |
|  | **[TAG_DF48_ONLINE_SWITCH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df48-online-switch)** <br>EMV_CT_SELECT_STRUCT::Online_Switch.  |
|  | **[TAG_DF49_APL_SEC_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df49-apl-sec-limit)** <br>[EMV_CT_APPLIDATA_STRUCT::Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit), limit below which other terminal capabilties apply (optional)  |
|  | **[TAG_DF4A_APL_SEC_CAPS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4a-apl-sec-caps)** <br>[EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit), terminal capabilties below the security limit (optio.  |
|  | **[TAG_DF4B_DOM_CHIP_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4b-dom-chip-appli)** <br>EMV_CT_SELECT_STRUCT::countDomesticChip.  |
|  | **[TAG_DF4C_FALLB_MSR_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4c-fallb-msr-appli)** <br>[EMV_CT_APPS_SELECT_STRUCT::countFallbackMS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countfallbackms) and [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms), [EMV_CT_SELECTRES_STRUCT::countFallbackMS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-countfallbackms) and [EMV_CT_SELECTRES_STRUCT::xFallback_MS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-xfallback-ms) (partially, together with [TAG_DF3A_FB_MSR_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3a-fb-msr-options))  |
|  | **[TAG_DF4D_CARD_CONF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4d-card-conf)** <br>EMV_CT_SELECT_STRUCT::ucCardholderConfirmation.  |
|  | **[TAG_DF4E_PDOL_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4e-pdol-info)** <br>EMV_CT_SELECT_STRUCT::PDOL_tags.  |
|  | **[TAG_DF50_ONL_RES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df50-onl-res)** <br>[EMV_CT_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult).  |
|  | **[TAG_DF51_ISS_REF_RES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df51-iss-ref-res)** <br>[EMV_CT_HOST_STRUCT::Result_referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-result-referral).  |
|  | **[TAG_DF52_AUTH_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df52-auth-data)** <br>[EMV_CT_HOST_STRUCT::LenAuth](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenauth) and [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata).  |
|  | **[TAG_DF53_SCRIPT_CRIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df53-script-crit)** <br>[EMV_CT_HOST_STRUCT::LenScriptCrit](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenscriptcrit) and [EMV_CT_HOST_STRUCT::ScriptCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptcritdata).  |
|  | **[TAG_DF54_SCRIPT_UNCRIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df54-script-uncrit)** <br>[EMV_CT_HOST_STRUCT::LenScriptUnCrit](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenscriptuncrit) and [EMV_CT_HOST_STRUCT::ScriptUnCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptuncritdata).  |
|  | **[TAG_DF55_AC_ISS_REF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df55-ac-iss-ref)** <br>[EMV_CT_HOST_STRUCT::AuthResp_Referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-referral).  |
|  | **[TAG_DF56_AC_WRONG_PIN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df56-ac-wrong-pin)** <br>[EMV_CT_HOST_STRUCT::AuthResp_Wrong_PIN](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-wrong-pin).  |
|  | **[TAG_DF57_AC_ADD_OK](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df57-ac-add-ok)** <br>[EMV_CT_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive).  |
|  | **[TAG_DF5A_DS_WRITE_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5a-ds-write-data)** <br>EMV_CT_HOST_STRUCT::DataStorageWriteData.  |
|  | **[TAG_DF59_OFFL_PIN_ERRORS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df59-offl-pin-errors)** <br>Number of wrong PIN entries (only in case of offline PIN!!!) [EMV_CT_TRANSRES_STRUCT::T_DF59_Offl_PIN_errors](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df59-offl-pin-errors).  |
|  | **[TAG_DF5B_DCC_PROHIBIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5b-dcc-prohibit)** <br>[EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks))  |
|  | **[TAG_DF5C_DOM_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5c-dom-info)** <br>[EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks))  |
|  | **[TAG_DF5D_DOM_OPTION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5d-dom-option)** <br>[EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks))  |
|  | **[TAG_DF5F_ADD_APP_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5f-add-app-version)** <br>see [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no) |
|  | **[TAG_DF60_VELOCITY_ORIG_IDX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df60-velocity-orig-idx)** <br>original candidate index in the list of application before it was presented to the Velocity kernel for applications selection (The kernel changes the order of the list according to different "priority" / "partial select" rules, the index keeps the refrence to the original candidate list  |
|  | **[TAG_DF61_INF_REC_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df61-inf-rec-data)** <br>[EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data), [EMV_CT_TRANSRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data).  |
|  | **[TAG_DF62_ERROR_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df62-error-data)** <br>Transaction error information according to "Fehlerkennung" (German ZKA specification)  [EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata) and [EMV_CT_TRANSRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata).  |
|  | **[TAG_DF62_APPLI_SELECT_FLAG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df62-appli-select-flag)** <br>Application Selection Flag ('DF62', Interac, Canada), [EMV_CT_CANDIDATE_DATA_STRUCT::DF62_ASF](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-df62-asf).  |
|  | **[TAG_DF63_DISPLAY_TEXT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df63-display-text)** <br>[EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext) and [EMV_CT_TRANSRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext).  |
|  | **[TAG_DF64_KERNEL_DEBUG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df64-kernel-debug)** <br>[EMV_CT_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata).  |
|  | **[TAG_KERNEL_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-kernel-version)** <br>Kernel version ([EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion))  |
|  | **[TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)** <br>Configuration mode for applications [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md), see `eHandleCAPKeyType` in call of [EMV_CT_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey) |
|  | **[TAG_SUPP_LANG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-supp-lang)** <br>Supported languages ([EMV_CT_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang))  |
|  | **[TAG_ATR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-atr)** <br>Answer to Reset from ICC (`EMV_CT_SmartReset` in call of [EMV_CT_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset)), n byte binary.  |
|  | **[TAG_EXCLUDE_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-exclude-aid)** <br>AIDs to exclude from the configuration list for this transaction ([EMV_CT_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data))  |
|  | **[TAG_EMV_CONFORM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-emv-conform)** <br>EMV compliant app or not (e.g. domestic app)  [EMV_CT_DOM_CHIP_STRUCT::uc_EMVConformSelect](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-uc-emvconformselect).  |
|  | **[TAG_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-l1driver-version)** <br>L1 driver version given back from [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-l1driver-version),    L1DriverVersion in [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-l1driver-version).  |
|  | **[TAG_CONFIG_ID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-config-id)** <br>Unique id generated when terminal configuration has changed and the option [EMV_CT_INIT_OPT_EPP_MASTER](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-epp-master) is set.  |
|  | **[TAG_DF6D_MODEL_NAME](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6d-model-name)** <br>Model included in [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) and [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) derived for use with emv-desired.xml and emv-allowed.xml.  |
|  | **[TAG_DF6E_CONFIG_DESIRED](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6e-config-desired)** <br>Desired L2 kernel list.  |
|  | **[TAG_DF6F_SB308_FLAG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6f-sb308-flag)** <br>1 byte, any value > 0 enables Specification Bulletin in L2 kernel 7.0.4 on Titus.    XML Tag: XML_TAG_TERMDATA_SB308_FLAG    On other platforms the SB308 status can by read with this tag in the response of EMV_CT_SerGetTermData.  |
|  | **[TAG_DF8F01_MANI_CANDLIST](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df8f01-mani-candlist)** <br>Modified candidate list (only valid in reentrance mode using the candidate list manipulation option [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data))  |
|  | **[TAG_DF6D_CBK_CARDHOLDER_RET](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6d-cbk-cardholder-ret)** <br>return value of cardholder information  |
|  | **[TAG_DF6E_CBK_CARDHOLDERINFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6e-cbk-cardholderinfo)** <br>cardholder information during transaction, e.g. Wrong PIN, see [eCardholderInfo](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#typedef-ecardholderinfo) |
|  | **[TAG_DF6F_CBK_PIN_ICC_RESP](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6f-cbk-pin-icc-resp)**  |
|  | **[TAG_DF70_CBK_MERCHINFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df70-cbk-merchinfo)** <br>MerchantInfo(), see [EMV_ADK_MerchantInfo](group___m_e_r_c_h___i_n_f_o.md#typedef-emv-adk-merchantinfo).  |
|  | **[TAG_DF71_CBK_AMOUNTCONF](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df71-cbk-amountconf)** <br>`amount` confirmation result (TRUE/FALSE)  |
|  | **[TAG_DF72_CBK_BLACKLIST](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df72-cbk-blacklist)** <br>Indicator if used PAN is in blacklist, TRUE/FALSE.  |
|  | **[TAG_DF73_CBK_TRANSLOG](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df73-cbk-translog)** <br>`stored` amount of the selected PAN  |
|  | **[TAG_DF74_CBK_SELECTOR](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df74-cbk-selector)** <br>see `ucSelector`, allowed values see [Types of external application selection](group___d_e_f___c_b_k___s_e_l.md) |
|  | **[TAG_DF75_CBK_APP_NO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df75-cbk-app-no)** <br>If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list.  |
|  | **[TAG_DF6C_CBK_REPEAT](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6c-cbk-repeat)** <br>Decide if ADK should repeat the callback call or not    (1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat    see [TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand).  |
|  | **[TAG_DF76_CBK_MANIPUL_TRX](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df76-cbk-manipul-trx)** <br>Return value to EMV ADK in callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks))    Possible values:  |
|  | **[TAG_DF77_CBK_LANGUAGE](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df77-cbk-language)**  |
|  | **[TAG_DF78_CBK_SEL_OPT](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df78-cbk-sel-opt)** <br>`tucOptions` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) |
|  | **[TAG_DF79_CBK_PIN_INFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df79-cbk-pin-info)** <br>EMV ADK to application: PIN type requested ([Input params for PIN entry](group___a_d_k___p_i_n___i_n_p_u_t.md))    Application to EMV ADK: PIN entry result (see [Return values](group___a_d_k___p_i_n___r_e_t_u_r_n.md))  |
|  | **[TAG_DF7A_CBK_PIN_KEY_DATA](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7a-cbk-pin-key-data)** <br>PIN (ICC) key modulus.  |
|  | **[TAG_DF7B_CBK_PIN_KEY_EXP](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7b-cbk-pin-key-exp)** <br>PIN (ICC) key exponent.  |
|  | **[TAG_DF7C_CBK_MERCHINFO_RET](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7c-cbk-merchinfo-ret)** <br>transfer return value of merchant information callback (EMV_CT_CALLBACK_FnT with TAG_BF01_CBK_MERCHINFO) to EMV ADK  |
|  | **[TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check)** <br>DCC mode, see [DCC mode](group___d_c_c___m_o_d_e.md).  |
|  | **[TAG_DF7E_CBK_DOM_APP_RES](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7e-cbk-dom-app-res)** <br>result of domestic app processing: keep in list or remove from list ([Modes of domestic application handling](group___d_e_f___c_b_k___d_o_m_a_p_p.md))  |
|  | **[TAG_DF7F_CBK_COMM_ERR](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7f-cbk-comm-err)** <br>During execution of callback function a communication error occured.    Indicator to be set by calling application.    Will result in abort of transaction ([EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal))  |
|  | **[TAG_DFD001_MANI_CANDLIST](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd001-mani-candlist)** <br>Modified candidate list (only valid in reentrance mode using the candidate list manipulation option [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data))  |
|  | **[TAG_DFD002_APPNAME_CHOSEN](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd002-appname-chosen)** <br>chosen application name, either 9F12, 50 or default label according EMVCo rules and application configuration, used in callback functions with application label  |
|  | **[TAG_DFD003_STORED_AMOUNT](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd003-stored-amount)** <br>configure transaction log amount via EMV_CT_updateTxnTag for the given card PAN when using re-entrance mode  |
|  | **[TAG_DFD00B_APPNAME_UFT8](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd00b-appname-uft8)** <br>application name [TAG_DFD002_APPNAME_CHOSEN](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd002-appname-chosen) converted to UTF-8, used in callback functions with application label  |
|  | **[TAG_DFD004_TXN_TYPES_SALE](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd004-txn-types-sale)** <br>Additional Transaction Types for sale (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale).  |
|  | **[TAG_DFD005_TXN_TYPES_CASH](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd005-txn-types-cash)** <br>Additional Transaction Types for cash (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash).  |
|  | **[TAG_DFD006_TXN_TYPES_CASHBACK](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd006-txn-types-cashback)** <br>Additional Transaction Types for cashback (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback).  |
|  | **[TAG_DFD007_TXN_TYPES_REFUND](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd007-txn-types-refund)** <br>Additional Transaction Types for refund (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund).  |
|  | **[TAG_DFAB58_DCR_LIST_IDS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfab58-dcr-list-ids)** <br>Data Container Read List for DPAS-2 Data Storage: list of container IDs. See description of [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids).  |
|  | **[TAG_DFAB59_DCR_LIST_RANGES](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfab59-dcr-list-ranges)** <br>Data Container Read List for DPAS-2 Data Storage: list of container ID ranges. See description of [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges).  |
|  | **[TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options)** <br>Options send with Exit_Framework, see [Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md).  |
|  | **[TAG_DF8F0F_APPLYCONFIG_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0f-applyconfig-options)** <br>Options send with [EMV_CT_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration), unsigned long in functional interface, please use 4 byte in the serialization.  |
|  | **[TAG_DF8F30_REQUESTED_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f30-requested-tags)** <br>for requestedTags parameter in [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) |
|  | **[TAG_DFDD01_L1_ISSUE](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd01-l1-issue)**  |
|  | **[TAG_DFDD02_L1_ISSUE_REASON](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd02-l1-issue-reason)**  |
|  | **[TAG_DFDD03_L1_ISSUE_COMMAND](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd03-l1-issue-command)**  |
|  | **[TAG_DFDD04_L1_LAST_COMMAND](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd04-l1-last-command)**  |
|  | **[TAG_DFDD05_L1_LAST_SW12](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd05-l1-last-sw12)**  |
|  | **[NO_PSE_RECS](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-no-pse-recs)**  |
|  | **[TAG_DFDF01_PSE_1](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf01-pse-1)**  |
|  | **[TAG_DFDF02_PSE_2](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf02-pse-2)**  |
|  | **[TAG_DFDF03_PSE_3](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf03-pse-3)**  |
|  | **[TAG_DFDF04_PSE_4](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf04-pse-4)**  |
|  | **[TAG_DFDF05_PSE_5](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf05-pse-5)**  |
|  | **[TAG_DFDF06_PSE_6](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf06-pse-6)**  |
|  | **[TAG_DFDF07_PSE_7](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf07-pse-7)**  |
|  | **[TAG_DFDF08_PSE_8](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf08-pse-8)**  |
|  | **[TAG_DFDF09_PSE_9](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf09-pse-9)**  |
|  | **[TAG_DFDF10_PSE_10](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf10-pse-10)**  |
|  | **[NO_LOA_RECS](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-no-loa-recs)**  |
|  | **[TAG_DFDF11_LOA_1](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf11-loa-1)**  |
|  | **[TAG_DFDF12_LOA_2](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf12-loa-2)**  |
|  | **[TAG_DFDF13_LOA_3](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf13-loa-3)**  |
|  | **[TAG_DFDF14_LOA_4](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf14-loa-4)**  |
|  | **[TAG_DFDF15_LOA_5](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf15-loa-5)**  |
|  | **[TAG_DFDF16_LOA_6](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf16-loa-6)**  |
|  | **[TAG_DFDF17_LOA_7](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf17-loa-7)**  |
|  | **[TAG_DFDF18_LOA_8](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf18-loa-8)**  |
|  | **[TAG_DFDF19_LOA_9](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf19-loa-9)**  |
|  | **[TAG_DFDF1A_LOA_10](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf1a-loa-10)**  |
|  | **[TAG_DFDF1B_LOA_11](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf1b-loa-11)**  |
|  | **[TAG_DFDF1C_LOA_12](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf1c-loa-12)**  |
|  | **[TAG_DFDF1D_LOA_13](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf1d-loa-13)**  |
|  | **[TAG_DFDF1E_LOA_14](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf1e-loa-14)**  |
|  | **[TAG_DFDF1F_LOA_15](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf1f-loa-15)**  |
|  | **[NO_FS_RECS](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-no-fs-recs)**  |
|  | **[TAG_DFDF21_FINALS_1](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf21-finals-1)**  |
|  | **[TAG_DFDF22_FINALS_2](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf22-finals-2)**  |
|  | **[TAG_DFDF23_FINALS_3](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf23-finals-3)**  |
|  | **[TAG_DFDF24_FINALS_4](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf24-finals-4)**  |
|  | **[TAG_DFDF25_FINALS_5](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf25-finals-5)**  |
|  | **[NO_GETPROC_RECS](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-no-getproc-recs)**  |
|  | **[TAG_DFDF29_GETPROC_1](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf29-getproc-1)**  |
|  | **[TAG_DFDF2A_GETPROC_2](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf2a-getproc-2)**  |
|  | **[TAG_DFDF2B_GETPROC_3](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf2b-getproc-3)**  |
|  | **[TAG_DFDF2C_GETPROC_4](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf2c-getproc-4)**  |
|  | **[TAG_DFDF2D_GETPROC_5](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf2d-getproc-5)**  |
|  | **[NO_RR_RECS](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-no-rr-recs)**  |
|  | **[TAG_DFDF31_RR_1](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf31-rr-1)**  |
|  | **[TAG_DFDF32_RR_2](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf32-rr-2)**  |
|  | **[TAG_DFDF33_RR_3](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf33-rr-3)**  |
|  | **[TAG_DFDF34_RR_4](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf34-rr-4)**  |
|  | **[TAG_DFDF35_RR_5](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf35-rr-5)**  |
|  | **[TAG_DFDF36_RR_6](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf36-rr-6)**  |
|  | **[TAG_DFDF37_RR_7](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf37-rr-7)**  |
|  | **[TAG_DFDF38_RR_8](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf38-rr-8)**  |
|  | **[TAG_DFDF39_RR_9](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf39-rr-9)**  |
|  | **[TAG_DFDF3A_RR_10](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf3a-rr-10)**  |
|  | **[TAG_DFDF3B_RR_11](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf3b-rr-11)**  |
|  | **[TAG_DFDF3C_RR_12](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf3c-rr-12)**  |
|  | **[TAG_DFDF3D_RR_13](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf3d-rr-13)**  |
|  | **[TAG_DFDF3E_RR_14](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf3e-rr-14)**  |
|  | **[TAG_DFDF3F_RR_15](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf3f-rr-15)**  |
|  | **[NO_GETD_RECS](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-no-getd-recs)**  |
|  | **[TAG_DFDF41_GETD_1](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf41-getd-1)**  |
|  | **[TAG_DFDF42_GETD_2](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf42-getd-2)**  |
|  | **[TAG_DFDF43_GETD_3](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf43-getd-3)**  |
|  | **[TAG_DFDF44_GETD_4](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf44-getd-4)**  |
|  | **[TAG_DFDF45_GETD_5](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf45-getd-5)**  |
|  | **[TAG_DFDF46_GETD_6](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf46-getd-6)**  |
|  | **[TAG_DFDF47_GETD_7](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf47-getd-7)**  |
|  | **[TAG_DFDF48_GETD_8](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf48-getd-8)**  |
|  | **[TAG_DFDF51_INTAUTH](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf51-intauth)**  |
|  | **[TAG_DFDF52_EXTAUTH](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf52-extauth)**  |
|  | **[TAG_DFDF53_GENAC1](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf53-genac1)**  |
|  | **[TAG_DFDF54_GENAC2](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf54-genac2)**  |
|  | **[TAG_DFDF55_CHALL](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf55-chall)**  |
|  | **[TAG_DFDF5F_UNKNOW_TAG_LIST](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf5f-unknow-tag-list)**  |
|  | **[NO_SCRIPT_RECS](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-no-script-recs)**  |
|  | **[TAG_DFDF61_SCRIPT_1](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf61-script-1)**  |
|  | **[TAG_DFDF62_SCRIPT_2](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf62-script-2)**  |
|  | **[TAG_DFDF63_SCRIPT_3](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf63-script-3)**  |
|  | **[TAG_DFDF64_SCRIPT_4](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf64-script-4)**  |
|  | **[TAG_DFDF65_SCRIPT_5](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf65-script-5)**  |
|  | **[TAG_DFDF69_SCRIPT_6](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf69-script-6)**  |
|  | **[TAG_DFDF6A_SCRIPT_7](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf6a-script-7)**  |
|  | **[TAG_DFDF6B_SCRIPT_8](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf6b-script-8)**  |
|  | **[TAG_DFDF6C_SCRIPT_9](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf6c-script-9)**  |
|  | **[TAG_DFDF6D_SCRIPT_10](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf6d-script-10)**  |
|  | **[NO_UNKNOW_RECS](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-no-unknow-recs)**  |
|  | **[TAG_DFDF71_UNKNOW_1](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf71-unknow-1)**  |
|  | **[TAG_DFDF72_UNKNOW_2](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf72-unknow-2)**  |
|  | **[TAG_DFDF73_UNKNOW_3](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf73-unknow-3)**  |
|  | **[TAG_DFDF74_UNKNOW_4](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf74-unknow-4)**  |
|  | **[TAG_DFDF75_UNKNOW_5](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf75-unknow-5)**  |
|  | **[TAG_DFDF76_UNKNOW_6](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf76-unknow-6)**  |
|  | **[TAG_DFDF77_UNKNOW_7](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf77-unknow-7)**  |
|  | **[TAG_DFDF78_UNKNOW_8](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf78-unknow-8)**  |
|  | **[TAG_DFDF79_UNKNOW_9](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf79-unknow-9)**  |
|  | **[TAG_DFDF7A_UNKNOW_10](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf7a-unknow-10)**  |
|  | **[TAG_DFDF7B_UNKNOW_11](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf7b-unknow-11)**  |
|  | **[TAG_DFDF7C_UNKNOW_12](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf7c-unknow-12)**  |
|  | **[TAG_DFDF7D_UNKNOW_13](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf7d-unknow-13)**  |
|  | **[TAG_DFDF7E_UNKNOW_14](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf7e-unknow-14)**  |
|  | **[TAG_DFDF7F_UNKNOW_15](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdf7f-unknow-15)**  |
|  | **[CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)** <br>Class for requests to EMV ADK.  |
|  | **[CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)** <br>Class for ICC functions.  |
|  | **[CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)** <br>Class for LED functions.  |
|  | **[EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req)** <br>Class for callback requests from EMV ADK to calling application (see [Callback functions](group___t_l_v___c_a_l_l_b_c_k.md))  |
|  | **[EMV_CT_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-resp)** <br>Class for callback responses (see [Callback functions](group___t_l_v___c_a_l_l_b_c_k.md))  |
|  | **[P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)** <br>Used for config command, e.g. [EMV_CT_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata).  |
|  | **[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)** <br>Used for config command, e.g. [EMV_CT_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata).  |
|  | **[P2_CLONE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-clone)** <br>Used reading configuration data that shall be transfered to another system (internal use, serialised API only)  |
|  | **[INS_CBCK_FCT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-fct)** <br>Instruction byte used for callback functions, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req).  |
|  | **[INS_CBCK_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-crd)** <br>Instruction byte used for callbacks to cardreader, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req).  |
|  | **[INS_CBCK_TRACE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-trace)** <br>Instruction byte used for trace output, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req). Also used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) in header field passed to EMV_CT_IF_BERTLV for client traces.  |
|  | **[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)** <br>Instruction byte for [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework), respectively EMV_CT_Init_FrameworkClient(), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg)** <br>Instruction byte for [EMV_CT_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata), [EMV_CT_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg)** <br>Instruction byte for [EMV_CT_SetAppliData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata), [EMV_CT_GetAppliData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg)** <br>Instruction byte for [EMV_CT_StoreCAPKey](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_APPLY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-apply-cfg)** <br>Instruction byte for [EMV_CT_ApplyConfiguration](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_GET_VER](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-get-ver)** <br>Instruction byte for [EMV_CT_FRAMEWORK_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ct-framework-getversion), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_VIRT_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-virt-cfg)** <br>Instruction byte for [EMV_CT_MapVirtualTerminal](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_SELECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-select)** <br>Instruction byte for [EMV_CT_StartTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_TRANSAC](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-transac)** <br>Instruction byte for [EMV_CT_ContinueOffline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_ONLINE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-online)** <br>Instruction byte for [EMV_CT_ContinueOnline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_UPDATE_TAG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-update-tag)** <br>Instruction byte for [EMV_CT_updateTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_FETCH_TAG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-tag)** <br>Instruction byte for [EMV_CT_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_END_TRX](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-end-trx)** <br>Instruction byte for [EMV_CT_EndTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ct-endtransaction), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CND_DATA](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cnd-data)** <br>Instruction byte for [EMV_CT_GetCandidateData](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getcandidatedata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CHECK_AID](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-check-aid)** <br>Instruction byte for [EMV_CT_CheckSupportedAID](group___f_u_n_c___f_l_o_w.md#function-emv-ct-checksupportedaid), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_FETCH_DOL](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-dol)** <br>Instruction byte for [EMV_CT_fetchTxnDOL](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxndol), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_ICC_DETECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-detect)** <br>Instruction byte for [EMV_CT_SmartDetect](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_RESET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-reset)** <br>Instruction byte for [EMV_CT_SmartReset](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_ISO](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-iso)** <br>Instruction byte for [EMV_CT_SmartISO](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_OFF](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-off)** <br>Instruction byte for [EMV_CT_SmartPowerOff](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpoweroff), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_PIN](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-pin)** <br>Instruction byte for [EMV_CT_Send_PIN_Offline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_PIN_DIRECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-pin-direct)** <br>Instruction byte for [EMV_CT_SmartPIN](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpin), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_LED_SWITCH](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-led-switch)** <br>Instruction byte for [EMV_CT_LED](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_LED_SWITCH](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-switch)** <br>Instruction byte for [EMV_CT_LED](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led).  |




## Macros Documentation

### define HEADER_SIZE

```cpp
#define HEADER_SIZE (4)
```


### define MAX_MESSAGE_SIZE

```cpp
#define MAX_MESSAGE_SIZE (2048)
```


### define MAX_DATA_SIZE

```cpp
#define MAX_DATA_SIZE (MAX_MESSAGE_SIZE-HEADER_SIZE)
```


### define MIN

```cpp
#define MIN(
    a,
    b
)
((a)<(b)?(a):(b))
```


### define TAG_42_ISSUER_ID

```cpp
#define TAG_42_ISSUER_ID 0x42u
```

Issuer Identification Number (IIN) (**42**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin). 

### define TAG_4F_APP_ID

```cpp
#define TAG_4F_APP_ID 0x4Fu
```

Application Identifier (AID) - Card (**4F**) 

### define TAG_50_APP_LABEL

```cpp
#define TAG_50_APP_LABEL 0x50u
```

Application Label (**50**)    used for [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname), [EMV_CT_DOM_CHIP_STRUCT::ucAppName](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucappname), [EMV_CT_CANDIDATE_STRUCT::name](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-name). 

### define TAG_52_CMD_TO_PERFORM

```cpp
#define TAG_52_CMD_TO_PERFORM 0x52u
```

Command to Perform (**52**) 

### define TAG_57_TRACK2_EQUIVALENT

```cpp
#define TAG_57_TRACK2_EQUIVALENT 0x57u
```

Track 2 Equivalent Data (**57**)    used as `T_57_DataTrack2` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `puc57_track2` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) ) 

### define TAG_5A_APP_PAN

```cpp
#define TAG_5A_APP_PAN 0x5Au
```

Application Primary Account Number (**5A**)    used as `T_5A_PAN` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5A_pan` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) ), `puc5A_pan` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc5A_pan` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) 

### define TAG_5F20_CARDHOLDER_NAME

```cpp
#define TAG_5F20_CARDHOLDER_NAME 0x5F20u
```

Cardholder Name (**5F20**)    used as `T_5F20_Cardholder` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F24_expdate` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) ), and `uc5F24_expdate` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps)) 

### define TAG_5F24_APP_EXP_DATE

```cpp
#define TAG_5F24_APP_EXP_DATE 0x5F24u
```

Application Expiration Data (**5F24**)    used as `T_5F24_AppExpDate` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F24_expdate` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) ), and `pucExpDate` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps)) 

### define TAG_5F25_APP_EFF_DATE

```cpp
#define TAG_5F25_APP_EFF_DATE 0x5F25u
```

Application Effective Data (**5F25**)    used as `T_5F25_AppEffDate` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_5F28_ISS_COUNTRY_CODE

```cpp
#define TAG_5F28_ISS_COUNTRY_CODE 0x5F28u
```

Issuer Country Code (**5F28**)    used as `T_5F28_IssCountryCode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `puc5F28_icc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) ) 

### define TAG_5F2A_TRANS_CURRENCY

```cpp
#define TAG_5F2A_TRANS_CURRENCY 0x5F2Au
```

Transaction Currency Code (**5F2A**)    Configured with `CurrencyTrans` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) (for DCC possibly in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)). Used as `T_5F2A_CurrencyTrans` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F2A_tcc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc5F2A_tcc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) 

### define TAG_5F2D_LANGUAGE

```cpp
#define TAG_5F2D_LANGUAGE 0x5F2Du
```

Language Preference (**5F2D**)    used as `T_5F2D_Lang_Pref` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_5F30_SERVICE_CODE

```cpp
#define TAG_5F30_SERVICE_CODE 0x5F30u
```

Service Code (**5F30**) 

### define TAG_5F34_PAN_SEQUENCE_NB

```cpp
#define TAG_5F34_PAN_SEQUENCE_NB 0x5F34u
```

PAN Sequence Number (**5F34**)    used as `T_5F34_PANSequenceNo` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_5F36_TRANS_CURRENCY_EXP

```cpp
#define TAG_5F36_TRANS_CURRENCY_EXP 0x5F36u
```

Transaction Currency Exponent (**5F36**)    Configured with `Exp_Trans` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) (for DCC possibly in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)). Used as `T_5F36_Trx_Currency_Exp` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F36_tce` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc5F36_tce` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) 

### define TAG_5F50_ISSUER_URL

```cpp
#define TAG_5F50_ISSUER_URL 0x5F50u
```

Issuer URL (**5F50**) 

### define TAG_5F53_IBAN

```cpp
#define TAG_5F53_IBAN 0x5F53u
```

International Bank Account Number (IBAN) (**5F53**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IBAN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iban). 

### define TAG_5F54_BIC

```cpp
#define TAG_5F54_BIC 0x5F54u
```

Bank Identifier Code (BIC) (**5F54**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::BIC](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-bic). 

### define TAG_5F55_ISSUER_COUNTRY_2

```cpp
#define TAG_5F55_ISSUER_COUNTRY_2 0x5F55u
```

Issuer Country Code (alpha 2 format) (**5F55**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::country2](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country2). 

### define TAG_5F56_ISSUER_COUNTRY_3

```cpp
#define TAG_5F56_ISSUER_COUNTRY_3 0x5F56u
```

Issuer Country Code (alpha 3 format) (**5F56**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::country3](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country3). 

### define TAG_5F56_ISSUER_COUNTRY_CODE

```cpp
#define TAG_5F56_ISSUER_COUNTRY_CODE 0x5F56u
```

Issuer Country Code (**5F56**) 

### define TAG_5F57_ACCOUNT_TYPE

```cpp
#define TAG_5F57_ACCOUNT_TYPE 0x5F57u
```

Account Type (**5F57**) 

### define TAG_61_APP_TEMPLATE

```cpp
#define TAG_61_APP_TEMPLATE 0x61u
```

Application Template (**61**) 

### define TAG_6F_FCI_TEMPLATE

```cpp
#define TAG_6F_FCI_TEMPLATE 0x6Fu
```

File Control Information (FCI) Template (**6F**) 

### define TAG_70_AEF_DATA_TEMPLATE

```cpp
#define TAG_70_AEF_DATA_TEMPLATE 0x70u
```

AEF Data Template (**70**) 

### define TAG_71_ISS_SCRIPT_TPLT_1

```cpp
#define TAG_71_ISS_SCRIPT_TPLT_1 0x71u
```

Issuer Script Template 1 (**71**) 

### define TAG_72_ISS_SCRIPT_TPLT_2

```cpp
#define TAG_72_ISS_SCRIPT_TPLT_2 0x72u
```

Issuer Script Template 2 (**72**) 

### define TAG_73_DIR_DISCR_TEMPLATE

```cpp
#define TAG_73_DIR_DISCR_TEMPLATE 0x73u
```

[Directory](class_directory.md) Discretionary Template (**73**) 

### define TAG_77_RS_MSG_TPLT_FRMT_2

```cpp
#define TAG_77_RS_MSG_TPLT_FRMT_2 0x77u
```

Response Message Template Format 2 (**77**) 

### define TAG_80_RS_MSG_TPLT_FRMT_1

```cpp
#define TAG_80_RS_MSG_TPLT_FRMT_1 0x80u
```

Response Message Template Format 1 (**80**) 

### define TAG_81_BIN_AMOUNT_AUTH

```cpp
#define TAG_81_BIN_AMOUNT_AUTH 0x81u
```

Amount Authorization Binary (**81**) 

### define TAG_82_AIP

```cpp
#define TAG_82_AIP 0x82u
```

Application Interchange Profile (**82**)    used as `T_82_AIP` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_83_CMD_TPLT

```cpp
#define TAG_83_CMD_TPLT 0x83u
```

Command Template (**83**) 

### define TAG_84_DF_NAME

```cpp
#define TAG_84_DF_NAME 0x84u
```

Dedicated File Name (**84**)    used as `T_84_DFName` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_86_ISS_SCRIPT_CMD

```cpp
#define TAG_86_ISS_SCRIPT_CMD 0x86u
```

Issuer Script Command (**86**) 

### define TAG_87_APP_PRIORITY_ID

```cpp
#define TAG_87_APP_PRIORITY_ID 0x87u
```

Application Priority Indicator (**87**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::API](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-api). 

### define TAG_88_SHORT_FILE_ID

```cpp
#define TAG_88_SHORT_FILE_ID 0x88u
```

Short File Identifier (SFI) (**88**) 

### define TAG_89_AUTH_CODE

```cpp
#define TAG_89_AUTH_CODE 0x89u
```

Authorization Code (**89**)    used as `AuthorizationCode` in [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md). 

### define TAG_8A_AUTH_RESP_CODE

```cpp
#define TAG_8A_AUTH_RESP_CODE 0x8Au
```

Authorization Response Code (**8A**)    used as `AuthResp` in [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md). 

### define TAG_8C_CDOL_1

```cpp
#define TAG_8C_CDOL_1 0x8Cu
```

CDOL 1 (**8C**) 

### define TAG_8D_CDOL_2

```cpp
#define TAG_8D_CDOL_2 0x8Du
```

CDOL 2 (**8D**) 

### define TAG_8E_CVM_LIST

```cpp
#define TAG_8E_CVM_LIST 0x8Eu
```

Cardholder Verification Method List (**8E**) 

### define TAG_8F_CERTIF_AUTH_PK_ID

```cpp
#define TAG_8F_CERTIF_AUTH_PK_ID 0x8Fu
```

Certification Autority Public key Index (**8F**) 

### define TAG_90_ISS_PK_CERTIF

```cpp
#define TAG_90_ISS_PK_CERTIF 0x90u
```

Issuer Public Key Certificate (**90**) 

### define TAG_91_ISS_AUTH_DATA

```cpp
#define TAG_91_ISS_AUTH_DATA 0x91u
```

Issuer Authentication Data (**91**)    used as `AuthData` in [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md). 

### define TAG_92_ISS_PK_REMAINDER

```cpp
#define TAG_92_ISS_PK_REMAINDER 0x92u
```

Issuer Public Key Remainder (**92**) 

### define TAG_93_SGND_STAT_APP_DATA

```cpp
#define TAG_93_SGND_STAT_APP_DATA 0x93u
```

Signed Static Application Data (**93**) 

### define TAG_94_AFL

```cpp
#define TAG_94_AFL 0x94u
```

Application File Locator (**94**) 

### define TAG_95_TVR

```cpp
#define TAG_95_TVR 0x95u
```

Terminal Verification Result (**95**)    used as `T_95_TVR` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_97_TDOL

```cpp
#define TAG_97_TDOL 0x97u
```

TDOL (**97**) 

### define TAG_98_TC_HASH_VALUE

```cpp
#define TAG_98_TC_HASH_VALUE 0x98u
```

Transaction Certificate Hash Value (**98**) 

### define TAG_99_TRANS_PIN_DATA

```cpp
#define TAG_99_TRANS_PIN_DATA 0x99u
```

Transaction PIN Data (**99**) 

### define TAG_9A_TRANS_DATE

```cpp
#define TAG_9A_TRANS_DATE 0x9Au
```

Transaction Date (**9A**)    used as `T_9A_Date` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `Date` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md). 

### define TAG_9B_TSI

```cpp
#define TAG_9B_TSI 0x9Bu
```

Transaction Status Information (**9B**)    used as `T_9B_TSI` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9C_TRANS_TYPE

```cpp
#define TAG_9C_TRANS_TYPE 0x9Cu
```

Transaction Type (**9C**)    used as `TransType` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `T_9C_TransType` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9D_DDF_NAME

```cpp
#define TAG_9D_DDF_NAME 0x9Du
```

[Directory](class_directory.md) Definition File Name (**9D**) 

### define TAG_9F01_ACQ_ID

```cpp
#define TAG_9F01_ACQ_ID 0x9F01u
```

Acquirer Identifier (**9F01**) 

### define TAG_9F02_NUM_AMOUNT_AUTH

```cpp
#define TAG_9F02_NUM_AMOUNT_AUTH 0x9F02u
```

Amount Authorized (Numeric) (**9F02**)    used as `Betrag_num` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `puc9F02_amount` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc9F02_amount` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) 

### define TAG_9F03_NUM_AMOUNT_OTHER

```cpp
#define TAG_9F03_NUM_AMOUNT_OTHER 0x9F03u
```

Amount Other (Numeric) (**9F03**) 

### define TAG_9F04_BIN_AMOUNT_OTHER

```cpp
#define TAG_9F04_BIN_AMOUNT_OTHER 0x9F04u
```

Amount Other (Binary) (**9F04**)    used as `T_9F06_AID` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F05_APP_DISCR_DATA

```cpp
#define TAG_9F05_APP_DISCR_DATA 0x9F05u
```

Application Discretionary Data (**9F05**) 

### define TAG_9F06_AID

```cpp
#define TAG_9F06_AID 0x9F06u
```

Application Identifier (AID)-terminal (**9F06**)    used as [EMV_CT_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid) and [EMV_CT_CANDIDATE_DATA_STRUCT::len9F06](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-len9f06). 

### define TAG_9F07_APP_USAGE_CONTROL

```cpp
#define TAG_9F07_APP_USAGE_CONTROL 0x9F07u
```

Application Usage Control (**9F07**) 

### define TAG_9F08_ICC_APP_VERSION_NB

```cpp
#define TAG_9F08_ICC_APP_VERSION_NB 0x9F08u
```

Application Version Number - ICC (**9F08**)    used as [EMV_CT_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no). 

### define TAG_9F09_TRM_APP_VERSION_NB

```cpp
#define TAG_9F09_TRM_APP_VERSION_NB 0x9F09u
```

Application Version Number (**9F09**)    used as [EMV_CT_APPLIDATA_STRUCT::VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum), `T_9F09_VerNum` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F0A_ASRPD

```cpp
#define TAG_9F0A_ASRPD 0x9F0Au
```

Application Selection Registered Proprietary Data (**9F0A**)    EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, ...) ID: 2 byte, L: length, 1 byte    used as [EMV_CT_CANDIDATE_DATA_STRUCT::selData](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-seldata). 

### define TAG_9F0B_CARDHOLDER_NAME_XT

```cpp
#define TAG_9F0B_CARDHOLDER_NAME_XT 0x9F0Bu
```

Cardholder Name Extended (**9F0B**) 

### define TAG_9F0C_ISSUER_ID_EXT

```cpp
#define TAG_9F0C_ISSUER_ID_EXT 0x9F0Cu
```

Issuer Identification Number Extended SB N°231 (**9F0C**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin) when IIN length is 4. 

### define TAG_9F0D_IAC_DEFAULT

```cpp
#define TAG_9F0D_IAC_DEFAULT 0x9F0Du
```

Issuer Action Code - Default (**9F0D**)    used as `T_9F0D_IACDefault` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F0E_IAC_DENIAL

```cpp
#define TAG_9F0E_IAC_DENIAL 0x9F0Eu
```

Issuer Action Code - Denial (**9F0E**)    used as `T_9F0E_IACDenial` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F0F_IAC_ONLINE

```cpp
#define TAG_9F0F_IAC_ONLINE 0x9F0Fu
```

Issuer Action Code - Online (**9F0F**)    used as `T_9F0F_IACOnline` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F10_ISS_APP_DATA

```cpp
#define TAG_9F10_ISS_APP_DATA 0x9F10u
```

Issuer Application Data (**9F10**)    used as `T_9F10_DataIssuer` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F11_ISS_CODE_TABLE_ID

```cpp
#define TAG_9F11_ISS_CODE_TABLE_ID 0x9F11u
```


Issuer Code Table Index (**9F11**) 

 used as `[EMV_CT_SELECTRES_STRUCT::T_9F11_CodeTable](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f11-codetable)` and [EMV_CT_CANDIDATE_DATA_STRUCT::CodeTableIndex](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-codetableindex), as well as for callback functions that might show a dialog: 

 PIN entry ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin)) 

 Amount confirmation ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf)) 

 and Application selection (([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand)) 


### define TAG_9F12_APP_PREFERRED_NAME

```cpp
#define TAG_9F12_APP_PREFERRED_NAME 0x9F12u
```

Application Preferred Name (**9F12**)    used as `T_9F12_PreferredName` in [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F13_LAST_ONLINE_ATC

```cpp
#define TAG_9F13_LAST_ONLINE_ATC 0x9F13u
```

Last Online ATC Register (**9F13**) 

### define TAG_9F14_LO_OFFLINE_LIMIT

```cpp
#define TAG_9F14_LO_OFFLINE_LIMIT 0x9F14u
```

Lower Consecutive Offline Limit (**9F14**) 

### define TAG_9F15_MERCH_CATEG_CODE

```cpp
#define TAG_9F15_MERCH_CATEG_CODE 0x9F15u
```

Merchant Category Code (**9F15**)    used as [EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey). 

### define TAG_9F16_MERCHANT_ID

```cpp
#define TAG_9F16_MERCHANT_ID 0x9F16u
```

Merchant Identifier (**9F16**)    used as [EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident), `T_9F16_MerchIdent` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F17_PIN_TRIES_LEFT

```cpp
#define TAG_9F17_PIN_TRIES_LEFT 0x9F17u
```

PIN Try Counter (**9F17**) 

### define TAG_9F18_ISS_SCRIPT_ID

```cpp
#define TAG_9F18_ISS_SCRIPT_ID 0x9F18u
```

Issuer Script Identifier (**9F18**) 

### define TAG_9F1A_TRM_COUNTRY_CODE

```cpp
#define TAG_9F1A_TRM_COUNTRY_CODE 0x9F1Au
```

Terminal Country Code (**9F1A**)    used as [EMV_CT_TERMDATA_STRUCT::TermCountryCode](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcountrycode), [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm), and [EMV_CT_TRANSRES_STRUCT::T_9F1A_TermCountryCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1a-termcountrycode). 

### define TAG_9F1B_TRM_FLOOR_LIMIT

```cpp
#define TAG_9F1B_TRM_FLOOR_LIMIT 0x9F1Bu
```

Terminal Floor Limit (**9F1B**)    used as [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit), `puc9F1B_fl` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), and `puc9F1B_fl` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) 

### define TAG_9F1C_TRM_ID

```cpp
#define TAG_9F1C_TRM_ID 0x9F1Cu
```

Terminal Identification (**9F1C**)    used as [EMV_CT_APPLIDATA_STRUCT::TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident). 

### define TAG_9F1D_TRM_RISK_MNGT_DATA

```cpp
#define TAG_9F1D_TRM_RISK_MNGT_DATA 0x9F1Du
```

Terminal Risk Management Data (**9F1D**) 

### define TAG_9F1E_IFD_SERIAL_NB

```cpp
#define TAG_9F1E_IFD_SERIAL_NB 0x9F1Eu
```

Interface Device (IFD) Serial Number (**9F1E**)    used as `SerNum` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), `T_9F1E_SerNum` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F1F_TRACK_1_DISCR_DATA

```cpp
#define TAG_9F1F_TRACK_1_DISCR_DATA 0x9F1Fu
```

Track 1 Discretionary Data (**9F1F**) 

### define TAG_9F20_TRACK_2_DISCR_DATA

```cpp
#define TAG_9F20_TRACK_2_DISCR_DATA 0x9F20u
```

Track 2 Discretionary Data (**9F20**) 

### define TAG_9F21_TRANS_TIME

```cpp
#define TAG_9F21_TRANS_TIME 0x9F21u
```

Transaction Time (**9F21**)    used as `Time` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `T_9F21_Time` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F22_CERTIF_AUTH_PK_ID

```cpp
#define TAG_9F22_CERTIF_AUTH_PK_ID 0x9F22u
```

Certification Authority Public Key Index (**9F22**) 

### define TAG_9F23_HI_OFFLINE_LIMIT

```cpp
#define TAG_9F23_HI_OFFLINE_LIMIT 0x9F23u
```

Upper Consecutive Offline Limit (**9F23**) 

### define TAG_9F24_PAYM_ACCOUNT_REF

```cpp
#define TAG_9F24_PAYM_ACCOUNT_REF 0x9F24u
```

Payment Account Reference (**9F24**)    EMV Specification Bulletin No. 178, an29. 

### define TAG_9F26_APP_CRYPTOGRAM

```cpp
#define TAG_9F26_APP_CRYPTOGRAM 0x9F26u
```

Application Cryptogram (**9F26**)    used as `T_9F26_Cryptogramm` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F27_CRYPT_INFO_DATA

```cpp
#define TAG_9F27_CRYPT_INFO_DATA 0x9F27u
```

Cryptogram Information Data (**9F27**)    used as `T_9F27_CryptInfo` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F2D_ICC_PIN_PK_CERTIF

```cpp
#define TAG_9F2D_ICC_PIN_PK_CERTIF 0x9F2Du
```

ICC PIN Encipherment Public Key Certificate (**9F2D**) 

### define TAG_9F2E_ICC_PIN_PK_EXP

```cpp
#define TAG_9F2E_ICC_PIN_PK_EXP 0x9F2Eu
```

ICC PIN Encipherment Public Key Exponent (**9F2E**) 

### define TAG_9F2F_ICC_PIN_PK_REMAIN

```cpp
#define TAG_9F2F_ICC_PIN_PK_REMAIN 0x9F2Fu
```

ICC PIN Encipherment Public Key Remainder (**9F2F**) 

### define TAG_9F32_ISS_PK_EXP

```cpp
#define TAG_9F32_ISS_PK_EXP 0x9F32u
```

Issuer Public Key Exponent (**9F32**) 

### define TAG_9F33_TRM_CAPABILITIES

```cpp
#define TAG_9F33_TRM_CAPABILITIES 0x9F33u
```

Terminal Capabilities (**9F33**)    used as `TermCap` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap), `T_9F33_TermCap` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F34_CVM_RESULTS

```cpp
#define TAG_9F34_CVM_RESULTS 0x9F34u
```

Cardholder Verification Method (CVM) Results (**9F34**)    used as `T_9F34_CVM_Res` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F35_TRM_TYPE

```cpp
#define TAG_9F35_TRM_TYPE 0x9F35u
```

Terminal Type (**9F35**)    used as `TermTyp` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), `T_9F35_TermTyp` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F36_ATC

```cpp
#define TAG_9F36_ATC 0x9F36u
```

Application Transaction Counter (ATC) (**9F36**)    used as `T_9F36_ATC` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F37_UNPREDICTABLE_NB

```cpp
#define TAG_9F37_UNPREDICTABLE_NB 0x9F37u
```

Unpredictable Number (**9F37**)    used as `T_9F37_RandomNumber` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F38_PDOL

```cpp
#define TAG_9F38_PDOL 0x9F38u
```

Processing Options Data Object List (PDOL) (**9F38**) 

### define TAG_9F39_POS_ENTRY_MODE

```cpp
#define TAG_9F39_POS_ENTRY_MODE 0x9F39u
```

Point-of-Service (POS) Entry Mode (**9F39**)    used as EMV_CT_APPLIDATA_STRUCT::POS_Eing, `T_9F39_POSEntryMode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F3A_AMNT_REF_CURRENCY

```cpp
#define TAG_9F3A_AMNT_REF_CURRENCY 0x9F3Au
```

Amount, Reference Currency (**9F3A**)    used as `Betrag_num` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md). 

### define TAG_9F3B_APP_REF_CURRENCY

```cpp
#define TAG_9F3B_APP_REF_CURRENCY 0x9F3Bu
```

Application Reference Currency (**9F3B**) 

### define TAG_9F3C_TRANS_REF_CURRENCY

```cpp
#define TAG_9F3C_TRANS_REF_CURRENCY 0x9F3Cu
```

Transaction Reference Currency Code (**9F3C**)    In case CommonServices request this tag EMV ADK will give back same as [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency). 

### define TAG_9F3D_TRANS_CURRENCY_EXP

```cpp
#define TAG_9F3D_TRANS_CURRENCY_EXP 0x9F3Du
```

Transaction Reference Currency Exponent (**9F3D**)    In case CommonServices request this tag EMV ADK will give back same as [TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp). 

### define TAG_9F40_ADD_TRM_CAP

```cpp
#define TAG_9F40_ADD_TRM_CAP 0x9F40u
```

Additional Terminal Capabilities (**9F40**)    used as `TermAddCap` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap), `T_9F40_AddTermCap` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F41_TRANS_SEQUENCE_NB

```cpp
#define TAG_9F41_TRANS_SEQUENCE_NB 0x9F41u
```

Transaction Sequence Counter (**9F41**)    used as `TransCount` in [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md), `T_9F41_TransCount` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F42_APP_CURRENCY_CODE

```cpp
#define TAG_9F42_APP_CURRENCY_CODE 0x9F42u
```

Application Currency Code (**9F42**)    used as `puc9F42_acc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)), `puc9F42_acc` in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) 

### define TAG_9F43_APP_REF_CURRCY_EXP

```cpp
#define TAG_9F43_APP_REF_CURRCY_EXP 0x9F43u
```

Application Reference Currency Exponent (**9F43**) 

### define TAG_9F44_APP_CURRENCY_EXP

```cpp
#define TAG_9F44_APP_CURRENCY_EXP 0x9F44u
```

Application Currency Exponent (**9F44**) 

### define TAG_9F45_DATA_AUTHENT_CODE

```cpp
#define TAG_9F45_DATA_AUTHENT_CODE 0x9F45u
```

Data Authentication Code (**9F45**)    used as `T_9F45_DataAuthCode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F46_ICC_PK_CERTIF

```cpp
#define TAG_9F46_ICC_PK_CERTIF 0x9F46u
```

ICC Public Key Certificate (**9F46**) 

### define TAG_9F47_ICC_PK_EXP

```cpp
#define TAG_9F47_ICC_PK_EXP 0x9F47u
```

ICC Public Key Exponent (**9F47**) 

### define TAG_9F48_ICC_PK_REMAINDER

```cpp
#define TAG_9F48_ICC_PK_REMAINDER 0x9F48u
```

ICC Public Key Remainder (**9F48**) 

### define TAG_9F49_DDOL

```cpp
#define TAG_9F49_DDOL 0x9F49u
```

Dynamic Data Authentication Data Object List (**9F49**) 

### define TAG_9F4A_SDA_TAG_LIST

```cpp
#define TAG_9F4A_SDA_TAG_LIST 0x9F4Au
```

Static Data Authentication Tag List (**9F4A**) 

### define TAG_9F4B_SDA_DATA

```cpp
#define TAG_9F4B_SDA_DATA 0x9F4Bu
```

Signed Dynamic Application Data (**9F4B**) 

### define TAG_9F4C_ICC_DYNAMIC_NB

```cpp
#define TAG_9F4C_ICC_DYNAMIC_NB 0x9F4Cu
```

ICC Dynamic Number (**9F4C**)    used as `T_9F4C_ICCDynNumber` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F4E_TAC_MERCHANTLOC

```cpp
#define TAG_9F4E_TAC_MERCHANTLOC 0x9F4Eu
```

Merchant name and location (VISA VCPS 2.1.1) (**9F4E**) 

### define TAG_A5_FCI_PROPR_TPLT

```cpp
#define TAG_A5_FCI_PROPR_TPLT 0xA5u
```

FCI Proprietary Template (**A5**) 

### define TAG_BF0C_FCI_ISS_DISCR

```cpp
#define TAG_BF0C_FCI_ISS_DISCR 0xBF0Cu
```

FCI Issuer Discretionary Data (**BF0C**) 

### define TAG_9F53_TRANS_CATEGORY_CODE

```cpp
#define TAG_9F53_TRANS_CATEGORY_CODE 0x9F53
```

Transaction Category Code, 1 byte binary. 

### define TAG_E2_FORMAT_B

```cpp
#define TAG_E2_FORMAT_B 0xE2
```

Data objects with format "b"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E3_FORMAT_N

```cpp
#define TAG_E3_FORMAT_N 0xE3
```

Data objects with format "n"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E4_FORMAT_CN

```cpp
#define TAG_E4_FORMAT_CN 0xE4
```

Data objects with format "cn"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E5_FORMAT_A

```cpp
#define TAG_E5_FORMAT_A 0xE5
```

Data objects with format "a"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E6_FORMAT_AN

```cpp
#define TAG_E6_FORMAT_AN 0xE6
```

Data objects with format "an"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_E7_FORMAT_ANS

```cpp
#define TAG_E7_FORMAT_ANS 0xE7
```

Data objects with format "ans"    Used for EMV_CT_APPLIDATA_STRUCT::Additional_Tags. 

### define TAG_F0_EMV_TEMPLATE

```cpp
#define TAG_F0_EMV_TEMPLATE 0xF0
```

All BER TLV streams are packed in this tag. 

### define TAG_DOM_CHIP

```cpp
#define TAG_DOM_CHIP 0xFF01
```

constructed tag for domestic chip applications 

### define TAG_FALLBACK_MSR

```cpp
#define TAG_FALLBACK_MSR 0xFF02
```

constructed tag for MSR data 

### define TAG_CAND_LIST

```cpp
#define TAG_CAND_LIST 0xFF03
```

constructed tag for candidate list, used for EMV_CT_CANDIDATE_TYPE, [EMV_CT_CandListType](struct_e_m_v___c_t___cand_list_type.md) and within EMV_CT_updateTxnTags 

### define TAG_KEY

```cpp
#define TAG_KEY 0xFF04
```

constructed tag for CAP keys 

### define TAG_ISO_DATA

```cpp
#define TAG_ISO_DATA 0xDF01
```

Tag for ISO data. 

### define TAG_TRACE

```cpp
#define TAG_TRACE 0xDF02
```

Tag for trace data. 

### define TAG_KEY_NUMBER

```cpp
#define TAG_KEY_NUMBER 0xDF03
```

CAP Key Number of Keys, 1 byte 0...255. 

### define TAG_DF04_AID

```cpp
#define TAG_DF04_AID 0xDF04
```

used for [EMV_CT_CANDIDATE_STRUCT::candidate](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-candidate), AID in [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md), TRM_GetAppliData(), TRM_SelAppli(), TRM_ReduceCandidateList() 

### define TAG_DF05_BUILD_APPLILIST

```cpp
#define TAG_DF05_BUILD_APPLILIST 0xDF05
```

[EMV_CT_SELECT_STRUCT::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist). 

### define TAG_DF06_CARDREADER_NUM

```cpp
#define TAG_DF06_CARDREADER_NUM 0xDF06
```

L1 reader options  `ucOptions` in [EMV_CT_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso)

### define TAG_DF07_UNCRIT_SCR

```cpp
#define TAG_DF07_UNCRIT_SCR 0xDF07
```

Script results of uncritical scripts in response to [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) `[EMV_CT_SRCRIPTRES_TYPE::ScriptUnCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptuncritresult)`. 

### define TAG_DF08_CRIT_SCR

```cpp
#define TAG_DF08_CRIT_SCR 0xDF08
```

Script results of critical scripts in response to [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) `[EMV_CT_SRCRIPTRES_TYPE::ScriptCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptcritresult)`. 

### define TAG_KEY_INDEX

```cpp
#define TAG_KEY_INDEX 0xDF09
```

CAP Key Index  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index),    Index in [EMV_CT_CAPKEY_STRUCT::Index](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index),    XML Tag: [XML_TAG_CAP_KEYS_INDEX](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-index). 

### define TAG_KEY_RID

```cpp
#define TAG_KEY_RID 0xDF0A
```

CAP Key RID  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid),    RID in [EMV_CT_CAPKEY_STRUCT::RID](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid),    XML Tag: [XML_TAG_CAP_KEYS_RID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-rid). 

### define TAG_KEY_KEY

```cpp
#define TAG_KEY_KEY 0xDF0B
```

CAP Key Modulus  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key),    Key in [EMV_CT_CAPKEY_STRUCT::Key](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key),    XML Tag: [XML_TAG_CAP_KEYS_KEY](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-key). 

### define TAG_KEY_HASH

```cpp
#define TAG_KEY_HASH 0xDF0C
```

CAP Key Hash  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash),    Hash in [EMV_CT_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash),    XML Tag: [XML_TAG_CAP_KEYS_HASH](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-hash). 

### define TAG_KEY_EXPONENT

```cpp
#define TAG_KEY_EXPONENT 0xDF0D
```

CAP Key Exponent  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent),    Exponent in [EMV_CT_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-exponent). 

### define TAG_KEY_CRL

```cpp
#define TAG_KEY_CRL 0xDF0E
```

CAP Key Certification Revocation List  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl),    RevocEntries in [EMV_CT_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-revoc-list). 

### define TAG_DF11_LIB_VERSION

```cpp
#define TAG_DF11_LIB_VERSION 0xDF11
```

Library version given back from [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version),    FrameworkVersion in [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-framework-version). 

### define TAG_DF12_CHECKSUM

```cpp
#define TAG_DF12_CHECKSUM 0xDF12
```

EMVCo checksum given back from [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum),    ChksumASCIIEMVCO in [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chksum-ascii-emvco). 

### define TAG_DF13_TERM_PARAM

```cpp
#define TAG_DF13_TERM_PARAM 0xDF13
```

used for [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params)

### define TAG_DF14_ADD_TAGS_RES

```cpp
#define TAG_DF14_ADD_TAGS_RES 0xDF14
```


**Deprecated**: 

Don't use [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead. 

### define TAG_DF15_OFFL_ONLY_PROCESS

```cpp
#define TAG_DF15_OFFL_ONLY_PROCESS 0xDF15
```

used for EMV_CT_APPLIDATA_STRUCT::ucAC_before_after 

### define TAG_KEY_KEYLEN

```cpp
#define TAG_KEY_KEYLEN 0xDF16
```

CAP Key key length  `Struct`, `XML` Reference:    KeyLen in [EMV_CT_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-keylen). 

### define TAG_DF17_FALLBACK_MIDS

```cpp
#define TAG_DF17_FALLBACK_MIDS 0xDF17
```

used for [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids)

### define TAG_DF18_FALLABCK

```cpp
#define TAG_DF18_FALLABCK 0xDF18
```

tag for [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling)

### define TAG_DF19_PARAMETER_4

```cpp
#define TAG_DF19_PARAMETER_4 0xDF19
```

RFU. 

### define TAG_DF1C_SPECIAL_TRX

```cpp
#define TAG_DF1C_SPECIAL_TRX 0xDF1C
```

tag for [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx)

### define TAG_DF1D_PRIO_APPLI

```cpp
#define TAG_DF1D_PRIO_APPLI 0xDF1D
```

each element of [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio) is packed in this tag 

### define TAG_DF20_ASI

```cpp
#define TAG_DF20_ASI 0xDF20
```

used for [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi), [EMV_CT_DOM_CHIP_STRUCT::ucASI](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucasi)

### define TAG_DF21_TAC_DENIAL

```cpp
#define TAG_DF21_TAC_DENIAL 0xDF21
```

see [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps)) 

### define TAG_DF21_TAC_ABLEHNUNG

```cpp
#define TAG_DF21_TAC_ABLEHNUNG TAG_DF21_TAC_DENIAL
```


**Deprecated**: 

use [TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial) instead 

### define TAG_DF22_TAC_ONLINE

```cpp
#define TAG_DF22_TAC_ONLINE 0xDF22
```

see [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps)) 

### define TAG_DF23_TAC_DEFAULT

```cpp
#define TAG_DF23_TAC_DEFAULT 0xDF23
```

see [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps)) 

### define TAG_DF24_THRESHHOLD

```cpp
#define TAG_DF24_THRESHHOLD 0xDF24
```

see [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold)   also used for callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) 

### define TAG_DF25_MAXPERCENT_ONL

```cpp
#define TAG_DF25_MAXPERCENT_ONL 0xDF25
```

see [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage)

### define TAG_DF26_PERCENT_ONL

```cpp
#define TAG_DF26_PERCENT_ONL 0xDF26
```

see [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage)

### define TAG_DF27_DEFAULT_TDOL

```cpp
#define TAG_DF27_DEFAULT_TDOL 0xDF27
```

see [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol)

### define TAG_DF28_DEFAULT_DDOL

```cpp
#define TAG_DF28_DEFAULT_DDOL 0xDF28
```

see [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol)

### define TAG_DF29_ADD_TAGS

```cpp
#define TAG_DF29_ADD_TAGS 0xDF29
```

see [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm)

### define TAG_DF2A_DUTY_TAGS

```cpp
#define TAG_DF2A_DUTY_TAGS 0xDF2A
```

see EMV_CT_APPLIDATA_STRUCT::Taglist 

### define TAG_DF2B_APP_FLOW_CAP

```cpp
#define TAG_DF2B_APP_FLOW_CAP 0xDF2B
```

see [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap)

### define TAG_DF2C_ADD_TAGS_CRD

```cpp
#define TAG_DF2C_ADD_TAGS_CRD 0xDF2C
```

see [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd)

### define TAG_DF2D_EMV_APPLI

```cpp
#define TAG_DF2D_EMV_APPLI 0xDF2D
```

see [EMV_CT_APPLIDATA_STRUCT::EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application)

### define TAG_DF2E_CVM_NOT_SUPP

```cpp
#define TAG_DF2E_CVM_NOT_SUPP 0xDF2E
```

see [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported)

### define TAG_DF2F_CVM_CUSTOM

```cpp
#define TAG_DF2F_CVM_CUSTOM 0xDF2F
```

see [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm)

### define TAG_DF30_LANG

```cpp
#define TAG_DF30_LANG 0xDF30
```

see customer language index ([Known languages](group___t_f___l_a_n_g_u_a_g_e_s.md)), format is like in [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language)

### define TAG_DF31_TEXT_NUM

```cpp
#define TAG_DF31_TEXT_NUM 0xDF31
```

text index, format is like in [EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext)

### define TAG_DF33_APPLICATION_TAG_50

```cpp
#define TAG_DF33_APPLICATION_TAG_50 0xDF33
```

[EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-50-applicationname). 

### define TAG_DF34_AMOUNT_CONF

```cpp
#define TAG_DF34_AMOUNT_CONF 0xDF34
```

EMV_CT_TRANSAC_STRUCT::uc_AmountConfirmation. 

### define TAG_DF36_TRX_OPTIONS

```cpp
#define TAG_DF36_TRX_OPTIONS 0xDF36
```

EMV_CT_TRANSAC_STRUCT::tucTxnOptions. 

### define TAG_DF37_TRX_STEPS

```cpp
#define TAG_DF37_TRX_STEPS 0xDF37
```

[EMV_CT_TRANSAC_STRUCT::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps). 

### define TAG_DF39_DCC_CBCK_INFO

```cpp
#define TAG_DF39_DCC_CBCK_INFO 0xDF39
```

[EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) 

### define TAG_DF3A_FB_MSR_OPTIONS

```cpp
#define TAG_DF3A_FB_MSR_OPTIONS 0xDF3A
```

[EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms) (partially, together with [TAG_DF4C_FALLB_MSR_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4c-fallb-msr-appli)) 

### define TAG_DF3B_PARAMETER_1

```cpp
#define TAG_DF3B_PARAMETER_1 0xDF3B
```

RFU. 

### define TAG_DF3C_PARAMETER_2

```cpp
#define TAG_DF3C_PARAMETER_2 0xDF3C
```

RFU. 

### define TAG_DF3C_EXT_LOGGING_DATA

```cpp
#define TAG_DF3C_EXT_LOGGING_DATA 0xDF3C
```

Extended Logging data for DPAS Connect. 

### define TAG_DF3D_PARAMETER_3

```cpp
#define TAG_DF3D_PARAMETER_3 0xDF3D
```

RFU. 

### define TAG_DF3E_CDA_PROC

```cpp
#define TAG_DF3E_CDA_PROC 0xDF3E
```

EMV_CT_APPLIDATA_STRUCT::uc_CDA_Processing. 

### define TAG_DF40_FORCE_ONLINE

```cpp
#define TAG_DF40_FORCE_ONLINE 0xDF40
```

EMV_CT_SELECT_STRUCT::Force_Online. 

### define TAG_DF41_PIN_BYPASS

```cpp
#define TAG_DF41_PIN_BYPASS 0xDF41
```

If [PIN_BYPASS](group___a_p_p___f_l_o_w___c_a_p_s.md#define-pin-bypass) was configured in [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap): This tag is given by EMV ADK in PIN entry callback ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin)). 

### define TAG_DF42_STATUS

```cpp
#define TAG_DF42_STATUS 0xDF42
```

[EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo). 

### define TAG_DF43_FORCE_ACCEPT

```cpp
#define TAG_DF43_FORCE_ACCEPT 0xDF43
```

EMV_CT_SELECT_STRUCT::Force_Acceptance. 

### define TAG_DF45_NO_DIR_SELECT

```cpp
#define TAG_DF45_NO_DIR_SELECT 0xDF45
```

EMV_CT_SELECT_STRUCT::No_DirectorySelect. 

### define TAG_DF47_PRIOR_LANG_SEL

```cpp
#define TAG_DF47_PRIOR_LANG_SEL 0xDF47
```

EMV_CT_SELECT_STRUCT::PreSelected_Language and EMV_CT_TRANSAC_STRUCT::PreSelected_Language. 

### define TAG_DF48_ONLINE_SWITCH

```cpp
#define TAG_DF48_ONLINE_SWITCH 0xDF48
```

EMV_CT_SELECT_STRUCT::Online_Switch. 

### define TAG_DF49_APL_SEC_LIMIT

```cpp
#define TAG_DF49_APL_SEC_LIMIT 0xDF49
```

[EMV_CT_APPLIDATA_STRUCT::Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit), limit below which other terminal capabilties apply (optional) 

### define TAG_DF4A_APL_SEC_CAPS

```cpp
#define TAG_DF4A_APL_SEC_CAPS 0xDF4A
```

[EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit), terminal capabilties below the security limit (optio. 

### define TAG_DF4B_DOM_CHIP_APPLI

```cpp
#define TAG_DF4B_DOM_CHIP_APPLI 0xDF4B
```

EMV_CT_SELECT_STRUCT::countDomesticChip. 

### define TAG_DF4C_FALLB_MSR_APPLI

```cpp
#define TAG_DF4C_FALLB_MSR_APPLI 0xDF4C
```

[EMV_CT_APPS_SELECT_STRUCT::countFallbackMS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countfallbackms) and [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms), [EMV_CT_SELECTRES_STRUCT::countFallbackMS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-countfallbackms) and [EMV_CT_SELECTRES_STRUCT::xFallback_MS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-xfallback-ms) (partially, together with [TAG_DF3A_FB_MSR_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3a-fb-msr-options)) 

### define TAG_DF4D_CARD_CONF

```cpp
#define TAG_DF4D_CARD_CONF 0xDF4D
```

EMV_CT_SELECT_STRUCT::ucCardholderConfirmation. 

### define TAG_DF4E_PDOL_INFO

```cpp
#define TAG_DF4E_PDOL_INFO 0xDF4E
```

EMV_CT_SELECT_STRUCT::PDOL_tags. 

### define TAG_DF50_ONL_RES

```cpp
#define TAG_DF50_ONL_RES 0xDF50
```

[EMV_CT_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult). 

### define TAG_DF51_ISS_REF_RES

```cpp
#define TAG_DF51_ISS_REF_RES 0xDF51
```

[EMV_CT_HOST_STRUCT::Result_referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-result-referral). 

### define TAG_DF52_AUTH_DATA

```cpp
#define TAG_DF52_AUTH_DATA 0xDF52
```

[EMV_CT_HOST_STRUCT::LenAuth](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenauth) and [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata). 

### define TAG_DF53_SCRIPT_CRIT

```cpp
#define TAG_DF53_SCRIPT_CRIT 0xDF53
```

[EMV_CT_HOST_STRUCT::LenScriptCrit](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenscriptcrit) and [EMV_CT_HOST_STRUCT::ScriptCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptcritdata). 

### define TAG_DF54_SCRIPT_UNCRIT

```cpp
#define TAG_DF54_SCRIPT_UNCRIT 0xDF54
```

[EMV_CT_HOST_STRUCT::LenScriptUnCrit](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenscriptuncrit) and [EMV_CT_HOST_STRUCT::ScriptUnCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptuncritdata). 

### define TAG_DF55_AC_ISS_REF

```cpp
#define TAG_DF55_AC_ISS_REF 0xDF55
```

[EMV_CT_HOST_STRUCT::AuthResp_Referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-referral). 

### define TAG_DF56_AC_WRONG_PIN

```cpp
#define TAG_DF56_AC_WRONG_PIN 0xDF56
```

[EMV_CT_HOST_STRUCT::AuthResp_Wrong_PIN](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-wrong-pin). 

### define TAG_DF57_AC_ADD_OK

```cpp
#define TAG_DF57_AC_ADD_OK 0xDF57
```

[EMV_CT_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive). 

### define TAG_DF5A_DS_WRITE_DATA

```cpp
#define TAG_DF5A_DS_WRITE_DATA 0xDF5A
```

EMV_CT_HOST_STRUCT::DataStorageWriteData. 

### define TAG_DF59_OFFL_PIN_ERRORS

```cpp
#define TAG_DF59_OFFL_PIN_ERRORS 0xDF59
```

Number of wrong PIN entries (only in case of offline PIN!!!) [EMV_CT_TRANSRES_STRUCT::T_DF59_Offl_PIN_errors](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df59-offl-pin-errors). 

### define TAG_DF5B_DCC_PROHIBIT

```cpp
#define TAG_DF5B_DCC_PROHIBIT 0xDF5B
```

[EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks)) 

### define TAG_DF5C_DOM_INFO

```cpp
#define TAG_DF5C_DOM_INFO 0xDF5C
```

[EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks)) 

### define TAG_DF5D_DOM_OPTION

```cpp
#define TAG_DF5D_DOM_OPTION 0xDF5D
```

[EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks)) 

### define TAG_DF5F_ADD_APP_VERSION

```cpp
#define TAG_DF5F_ADD_APP_VERSION 0xDF5F
```

see [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no)

### define TAG_DF60_VELOCITY_ORIG_IDX

```cpp
#define TAG_DF60_VELOCITY_ORIG_IDX 0xDF60
```

original candidate index in the list of application before it was presented to the Velocity kernel for applications selection (The kernel changes the order of the list according to different "priority" / "partial select" rules, the index keeps the refrence to the original candidate list 

### define TAG_DF61_INF_REC_DATA

```cpp
#define TAG_DF61_INF_REC_DATA 0xDF61
```

[EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data), [EMV_CT_TRANSRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data). 

### define TAG_DF62_ERROR_DATA

```cpp
#define TAG_DF62_ERROR_DATA 0xDF62
```

Transaction error information according to "Fehlerkennung" (German ZKA specification)  [EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata) and [EMV_CT_TRANSRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata). 

### define TAG_DF62_APPLI_SELECT_FLAG

```cpp
#define TAG_DF62_APPLI_SELECT_FLAG 0xDF62u
```

Application Selection Flag ('DF62', Interac, Canada), [EMV_CT_CANDIDATE_DATA_STRUCT::DF62_ASF](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-df62-asf). 

### define TAG_DF63_DISPLAY_TEXT

```cpp
#define TAG_DF63_DISPLAY_TEXT 0xDF63
```

[EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext) and [EMV_CT_TRANSRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext). 

### define TAG_DF64_KERNEL_DEBUG

```cpp
#define TAG_DF64_KERNEL_DEBUG 0xDF64
```

[EMV_CT_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata). 

### define TAG_KERNEL_VERSION

```cpp
#define TAG_KERNEL_VERSION 0xDF65
```

Kernel version ([EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion)) 

### define TAG_HANDLE_APPLI_TYPE

```cpp
#define TAG_HANDLE_APPLI_TYPE 0xDF66
```

Configuration mode for applications [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md), see `eHandleCAPKeyType` in call of [EMV_CT_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey)

### define TAG_SUPP_LANG

```cpp
#define TAG_SUPP_LANG 0xDF67
```

Supported languages ([EMV_CT_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang)) 

### define TAG_ATR

```cpp
#define TAG_ATR 0xDF68
```

Answer to Reset from ICC (`EMV_CT_SmartReset` in call of [EMV_CT_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset)), n byte binary. 

### define TAG_EXCLUDE_AID

```cpp
#define TAG_EXCLUDE_AID 0xDF69
```

AIDs to exclude from the configuration list for this transaction ([EMV_CT_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data)) 

### define TAG_EMV_CONFORM

```cpp
#define TAG_EMV_CONFORM 0xDF6A
```

EMV compliant app or not (e.g. domestic app)  [EMV_CT_DOM_CHIP_STRUCT::uc_EMVConformSelect](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-uc-emvconformselect). 

### define TAG_L1DRIVER_VERSION

```cpp
#define TAG_L1DRIVER_VERSION 0xDF6B
```

L1 driver version given back from [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-l1driver-version),    L1DriverVersion in [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-l1driver-version). 

### define TAG_CONFIG_ID

```cpp
#define TAG_CONFIG_ID 0xDF6C
```

Unique id generated when terminal configuration has changed and the option [EMV_CT_INIT_OPT_EPP_MASTER](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-epp-master) is set. 

### define TAG_DF6D_MODEL_NAME

```cpp
#define TAG_DF6D_MODEL_NAME 0xDF6D
```

Model included in [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) and [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) derived for use with emv-desired.xml and emv-allowed.xml. 

### define TAG_DF6E_CONFIG_DESIRED

```cpp
#define TAG_DF6E_CONFIG_DESIRED 0xDF6E
```

Desired L2 kernel list. 

### define TAG_DF6F_SB308_FLAG

```cpp
#define TAG_DF6F_SB308_FLAG 0xDF6F
```

1 byte, any value > 0 enables Specification Bulletin in L2 kernel 7.0.4 on Titus.    XML Tag: XML_TAG_TERMDATA_SB308_FLAG    On other platforms the SB308 status can by read with this tag in the response of EMV_CT_SerGetTermData. 

### define TAG_DF8F01_MANI_CANDLIST

```cpp
#define TAG_DF8F01_MANI_CANDLIST 0xDF8F01
```

Modified candidate list (only valid in reentrance mode using the candidate list manipulation option [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data)) 

### define TAG_DF6D_CBK_CARDHOLDER_RET

```cpp
#define TAG_DF6D_CBK_CARDHOLDER_RET 0xDF6D
```

return value of cardholder information 

### define TAG_DF6E_CBK_CARDHOLDERINFO

```cpp
#define TAG_DF6E_CBK_CARDHOLDERINFO 0xDF6E
```

cardholder information during transaction, e.g. Wrong PIN, see [eCardholderInfo](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#typedef-ecardholderinfo)

### define TAG_DF6F_CBK_PIN_ICC_RESP

```cpp
#define TAG_DF6F_CBK_PIN_ICC_RESP 0xDF6F
```


**Deprecated**: 

ICC answer to VERIFY command (2 byte SW1/2), not needed anymore, EMV ADK stores this info internally during [EMV_CT_Send_PIN_Offline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline)

### define TAG_DF70_CBK_MERCHINFO

```cpp
#define TAG_DF70_CBK_MERCHINFO 0xDF70
```

MerchantInfo(), see [EMV_ADK_MerchantInfo](group___m_e_r_c_h___i_n_f_o.md#typedef-emv-adk-merchantinfo). 

### define TAG_DF71_CBK_AMOUNTCONF

```cpp
#define TAG_DF71_CBK_AMOUNTCONF 0xDF71
```

`amount` confirmation result (TRUE/FALSE) 

### define TAG_DF72_CBK_BLACKLIST

```cpp
#define TAG_DF72_CBK_BLACKLIST 0xDF72
```

Indicator if used PAN is in blacklist, TRUE/FALSE. 

### define TAG_DF73_CBK_TRANSLOG

```cpp
#define TAG_DF73_CBK_TRANSLOG 0xDF73
```

`stored` amount of the selected PAN 

### define TAG_DF74_CBK_SELECTOR

```cpp
#define TAG_DF74_CBK_SELECTOR 0xDF74
```

see `ucSelector`, allowed values see [Types of external application selection](group___d_e_f___c_b_k___s_e_l.md)

### define TAG_DF75_CBK_APP_NO

```cpp
#define TAG_DF75_CBK_APP_NO 0xDF75
```

If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list. 

### define TAG_DF6C_CBK_REPEAT

```cpp
#define TAG_DF6C_CBK_REPEAT 0xDF6C
```

Decide if ADK should repeat the callback call or not    (1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat    see [TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand). 

### define TAG_DF76_CBK_MANIPUL_TRX

```cpp
#define TAG_DF76_CBK_MANIPUL_TRX 0xDF76
```

Return value to EMV ADK in callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks))    Possible values: 



* [EMV_ADK_ARQC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-arqc) to let transaction continue but force to go online 
* [EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac) to let transaction terminate with AAC in GENAC1 
* [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort) and any other value to let transaction abort 


### define TAG_DF77_CBK_LANGUAGE

```cpp
#define TAG_DF77_CBK_LANGUAGE 0xDF77
```


**Deprecated**: 

EMV ADK does not send selected customer language and it ignores this parameter if put in 

### define TAG_DF78_CBK_SEL_OPT

```cpp
#define TAG_DF78_CBK_SEL_OPT 0xDF78
```

`tucOptions` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)

### define TAG_DF79_CBK_PIN_INFO

```cpp
#define TAG_DF79_CBK_PIN_INFO 0xDF79
```

EMV ADK to application: PIN type requested ([Input params for PIN entry](group___a_d_k___p_i_n___i_n_p_u_t.md))    Application to EMV ADK: PIN entry result (see [Return values](group___a_d_k___p_i_n___r_e_t_u_r_n.md)) 

### define TAG_DF7A_CBK_PIN_KEY_DATA

```cpp
#define TAG_DF7A_CBK_PIN_KEY_DATA 0xDF7A
```

PIN (ICC) key modulus. 

### define TAG_DF7B_CBK_PIN_KEY_EXP

```cpp
#define TAG_DF7B_CBK_PIN_KEY_EXP 0xDF7B
```

PIN (ICC) key exponent. 

### define TAG_DF7C_CBK_MERCHINFO_RET

```cpp
#define TAG_DF7C_CBK_MERCHINFO_RET 0xDF7C
```

transfer return value of merchant information callback (EMV_CT_CALLBACK_FnT with TAG_BF01_CBK_MERCHINFO) to EMV ADK 

### define TAG_DF7D_CBK_DCC_CHECK

```cpp
#define TAG_DF7D_CBK_DCC_CHECK 0xDF7D
```

DCC mode, see [DCC mode](group___d_c_c___m_o_d_e.md). 

### define TAG_DF7E_CBK_DOM_APP_RES

```cpp
#define TAG_DF7E_CBK_DOM_APP_RES 0xDF7E
```

result of domestic app processing: keep in list or remove from list ([Modes of domestic application handling](group___d_e_f___c_b_k___d_o_m_a_p_p.md)) 

### define TAG_DF7F_CBK_COMM_ERR

```cpp
#define TAG_DF7F_CBK_COMM_ERR 0xDF7F
```

During execution of callback function a communication error occured.    Indicator to be set by calling application.    Will result in abort of transaction ([EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal)) 

### define TAG_DFD001_MANI_CANDLIST

```cpp
#define TAG_DFD001_MANI_CANDLIST 0xDFD001
```

Modified candidate list (only valid in reentrance mode using the candidate list manipulation option [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data)) 

### define TAG_DFD002_APPNAME_CHOSEN

```cpp
#define TAG_DFD002_APPNAME_CHOSEN 0xDFD002
```

chosen application name, either 9F12, 50 or default label according EMVCo rules and application configuration, used in callback functions with application label 

### define TAG_DFD003_STORED_AMOUNT

```cpp
#define TAG_DFD003_STORED_AMOUNT 0xDFD003
```

configure transaction log amount via EMV_CT_updateTxnTag for the given card PAN when using re-entrance mode 

### define TAG_DFD00B_APPNAME_UFT8

```cpp
#define TAG_DFD00B_APPNAME_UFT8 0xDFD00B
```

application name [TAG_DFD002_APPNAME_CHOSEN](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd002-appname-chosen) converted to UTF-8, used in callback functions with application label 

### define TAG_DFD004_TXN_TYPES_SALE

```cpp
#define TAG_DFD004_TXN_TYPES_SALE 0xDFD004
```

Additional Transaction Types for sale (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale). 

### define TAG_DFD005_TXN_TYPES_CASH

```cpp
#define TAG_DFD005_TXN_TYPES_CASH 0xDFD005
```

Additional Transaction Types for cash (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash). 

### define TAG_DFD006_TXN_TYPES_CASHBACK

```cpp
#define TAG_DFD006_TXN_TYPES_CASHBACK 0xDFD006
```

Additional Transaction Types for cashback (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback). 

### define TAG_DFD007_TXN_TYPES_REFUND

```cpp
#define TAG_DFD007_TXN_TYPES_REFUND 0xDFD007
```

Additional Transaction Types for refund (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund). 

### define TAG_DFAB58_DCR_LIST_IDS

```cpp
#define TAG_DFAB58_DCR_LIST_IDS 0xDFAB58
```

Data Container Read List for DPAS-2 Data Storage: list of container IDs. See description of [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids). 

### define TAG_DFAB59_DCR_LIST_RANGES

```cpp
#define TAG_DFAB59_DCR_LIST_RANGES 0xDFAB59
```

Data Container Read List for DPAS-2 Data Storage: list of container ID ranges. See description of [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges). 

### define TAG_DF8F0A_EXIT_OPTIONS

```cpp
#define TAG_DF8F0A_EXIT_OPTIONS 0xDF8F0A
```

Options send with Exit_Framework, see [Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md). 

### define TAG_DF8F0F_APPLYCONFIG_OPTIONS

```cpp
#define TAG_DF8F0F_APPLYCONFIG_OPTIONS 0xDF8F0F
```

Options send with [EMV_CT_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration), unsigned long in functional interface, please use 4 byte in the serialization. 

### define TAG_DF8F30_REQUESTED_TAGS

```cpp
#define TAG_DF8F30_REQUESTED_TAGS 0xDF8F30
```

for requestedTags parameter in [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags)

### define TAG_DFDD01_L1_ISSUE

```cpp
#define TAG_DFDD01_L1_ISSUE 0xDFDD01
```


### define TAG_DFDD02_L1_ISSUE_REASON

```cpp
#define TAG_DFDD02_L1_ISSUE_REASON 0xDFDD02
```


### define TAG_DFDD03_L1_ISSUE_COMMAND

```cpp
#define TAG_DFDD03_L1_ISSUE_COMMAND 0xDFDD03
```


### define TAG_DFDD04_L1_LAST_COMMAND

```cpp
#define TAG_DFDD04_L1_LAST_COMMAND 0xDFDD04
```


### define TAG_DFDD05_L1_LAST_SW12

```cpp
#define TAG_DFDD05_L1_LAST_SW12 0xDFDD05
```


### define NO_PSE_RECS

```cpp
#define NO_PSE_RECS 10
```


### define TAG_DFDF01_PSE_1

```cpp
#define TAG_DFDF01_PSE_1 0xDFDF01
```


### define TAG_DFDF02_PSE_2

```cpp
#define TAG_DFDF02_PSE_2 0xDFDF02
```


### define TAG_DFDF03_PSE_3

```cpp
#define TAG_DFDF03_PSE_3 0xDFDF03
```


### define TAG_DFDF04_PSE_4

```cpp
#define TAG_DFDF04_PSE_4 0xDFDF04
```


### define TAG_DFDF05_PSE_5

```cpp
#define TAG_DFDF05_PSE_5 0xDFDF05
```


### define TAG_DFDF06_PSE_6

```cpp
#define TAG_DFDF06_PSE_6 0xDFDF06
```


### define TAG_DFDF07_PSE_7

```cpp
#define TAG_DFDF07_PSE_7 0xDFDF07
```


### define TAG_DFDF08_PSE_8

```cpp
#define TAG_DFDF08_PSE_8 0xDFDF08
```


### define TAG_DFDF09_PSE_9

```cpp
#define TAG_DFDF09_PSE_9 0xDFDF09
```


### define TAG_DFDF10_PSE_10

```cpp
#define TAG_DFDF10_PSE_10 0xDFDF0A
```


### define NO_LOA_RECS

```cpp
#define NO_LOA_RECS 15
```


### define TAG_DFDF11_LOA_1

```cpp
#define TAG_DFDF11_LOA_1 0xDFDF11
```


### define TAG_DFDF12_LOA_2

```cpp
#define TAG_DFDF12_LOA_2 0xDFDF12
```


### define TAG_DFDF13_LOA_3

```cpp
#define TAG_DFDF13_LOA_3 0xDFDF13
```


### define TAG_DFDF14_LOA_4

```cpp
#define TAG_DFDF14_LOA_4 0xDFDF14
```


### define TAG_DFDF15_LOA_5

```cpp
#define TAG_DFDF15_LOA_5 0xDFDF15
```


### define TAG_DFDF16_LOA_6

```cpp
#define TAG_DFDF16_LOA_6 0xDFDF16
```


### define TAG_DFDF17_LOA_7

```cpp
#define TAG_DFDF17_LOA_7 0xDFDF17
```


### define TAG_DFDF18_LOA_8

```cpp
#define TAG_DFDF18_LOA_8 0xDFDF18
```


### define TAG_DFDF19_LOA_9

```cpp
#define TAG_DFDF19_LOA_9 0xDFDF19
```


### define TAG_DFDF1A_LOA_10

```cpp
#define TAG_DFDF1A_LOA_10 0xDFDF1A
```


### define TAG_DFDF1B_LOA_11

```cpp
#define TAG_DFDF1B_LOA_11 0xDFDF1B
```


### define TAG_DFDF1C_LOA_12

```cpp
#define TAG_DFDF1C_LOA_12 0xDFDF1C
```


### define TAG_DFDF1D_LOA_13

```cpp
#define TAG_DFDF1D_LOA_13 0xDFDF1D
```


### define TAG_DFDF1E_LOA_14

```cpp
#define TAG_DFDF1E_LOA_14 0xDFDF1E
```


### define TAG_DFDF1F_LOA_15

```cpp
#define TAG_DFDF1F_LOA_15 0xDFDF1F
```


### define NO_FS_RECS

```cpp
#define NO_FS_RECS 5
```


### define TAG_DFDF21_FINALS_1

```cpp
#define TAG_DFDF21_FINALS_1 0xDFDF21
```


### define TAG_DFDF22_FINALS_2

```cpp
#define TAG_DFDF22_FINALS_2 0xDFDF22
```


### define TAG_DFDF23_FINALS_3

```cpp
#define TAG_DFDF23_FINALS_3 0xDFDF23
```


### define TAG_DFDF24_FINALS_4

```cpp
#define TAG_DFDF24_FINALS_4 0xDFDF24
```


### define TAG_DFDF25_FINALS_5

```cpp
#define TAG_DFDF25_FINALS_5 0xDFDF25
```


### define NO_GETPROC_RECS

```cpp
#define NO_GETPROC_RECS 5
```


### define TAG_DFDF29_GETPROC_1

```cpp
#define TAG_DFDF29_GETPROC_1 0xDFDF29
```


### define TAG_DFDF2A_GETPROC_2

```cpp
#define TAG_DFDF2A_GETPROC_2 0xDFDF2A
```


### define TAG_DFDF2B_GETPROC_3

```cpp
#define TAG_DFDF2B_GETPROC_3 0xDFDF2B
```


### define TAG_DFDF2C_GETPROC_4

```cpp
#define TAG_DFDF2C_GETPROC_4 0xDFDF2C
```


### define TAG_DFDF2D_GETPROC_5

```cpp
#define TAG_DFDF2D_GETPROC_5 0xDFDF2D
```


### define NO_RR_RECS

```cpp
#define NO_RR_RECS 15
```


### define TAG_DFDF31_RR_1

```cpp
#define TAG_DFDF31_RR_1 0xDFDF31
```


### define TAG_DFDF32_RR_2

```cpp
#define TAG_DFDF32_RR_2 0xDFDF32
```


### define TAG_DFDF33_RR_3

```cpp
#define TAG_DFDF33_RR_3 0xDFDF33
```


### define TAG_DFDF34_RR_4

```cpp
#define TAG_DFDF34_RR_4 0xDFDF34
```


### define TAG_DFDF35_RR_5

```cpp
#define TAG_DFDF35_RR_5 0xDFDF35
```


### define TAG_DFDF36_RR_6

```cpp
#define TAG_DFDF36_RR_6 0xDFDF36
```


### define TAG_DFDF37_RR_7

```cpp
#define TAG_DFDF37_RR_7 0xDFDF37
```


### define TAG_DFDF38_RR_8

```cpp
#define TAG_DFDF38_RR_8 0xDFDF38
```


### define TAG_DFDF39_RR_9

```cpp
#define TAG_DFDF39_RR_9 0xDFDF39
```


### define TAG_DFDF3A_RR_10

```cpp
#define TAG_DFDF3A_RR_10 0xDFDF3A
```


### define TAG_DFDF3B_RR_11

```cpp
#define TAG_DFDF3B_RR_11 0xDFDF3B
```


### define TAG_DFDF3C_RR_12

```cpp
#define TAG_DFDF3C_RR_12 0xDFDF3C
```


### define TAG_DFDF3D_RR_13

```cpp
#define TAG_DFDF3D_RR_13 0xDFDF3D
```


### define TAG_DFDF3E_RR_14

```cpp
#define TAG_DFDF3E_RR_14 0xDFDF3E
```


### define TAG_DFDF3F_RR_15

```cpp
#define TAG_DFDF3F_RR_15 0xDFDF3F
```


### define NO_GETD_RECS

```cpp
#define NO_GETD_RECS 8
```


### define TAG_DFDF41_GETD_1

```cpp
#define TAG_DFDF41_GETD_1 0xDFDF41
```


### define TAG_DFDF42_GETD_2

```cpp
#define TAG_DFDF42_GETD_2 0xDFDF42
```


### define TAG_DFDF43_GETD_3

```cpp
#define TAG_DFDF43_GETD_3 0xDFDF43
```


### define TAG_DFDF44_GETD_4

```cpp
#define TAG_DFDF44_GETD_4 0xDFDF44
```


### define TAG_DFDF45_GETD_5

```cpp
#define TAG_DFDF45_GETD_5 0xDFDF45
```


### define TAG_DFDF46_GETD_6

```cpp
#define TAG_DFDF46_GETD_6 0xDFDF46
```


### define TAG_DFDF47_GETD_7

```cpp
#define TAG_DFDF47_GETD_7 0xDFDF47
```


### define TAG_DFDF48_GETD_8

```cpp
#define TAG_DFDF48_GETD_8 0xDFDF48
```


### define TAG_DFDF51_INTAUTH

```cpp
#define TAG_DFDF51_INTAUTH 0xDFDF51
```


### define TAG_DFDF52_EXTAUTH

```cpp
#define TAG_DFDF52_EXTAUTH 0xDFDF52
```


### define TAG_DFDF53_GENAC1

```cpp
#define TAG_DFDF53_GENAC1 0xDFDF53
```


### define TAG_DFDF54_GENAC2

```cpp
#define TAG_DFDF54_GENAC2 0xDFDF54
```


### define TAG_DFDF55_CHALL

```cpp
#define TAG_DFDF55_CHALL 0xDFDF55
```


### define TAG_DFDF5F_UNKNOW_TAG_LIST

```cpp
#define TAG_DFDF5F_UNKNOW_TAG_LIST 0xDFDF5F
```


### define NO_SCRIPT_RECS

```cpp
#define NO_SCRIPT_RECS 10
```


### define TAG_DFDF61_SCRIPT_1

```cpp
#define TAG_DFDF61_SCRIPT_1 0xDFDF61
```


### define TAG_DFDF62_SCRIPT_2

```cpp
#define TAG_DFDF62_SCRIPT_2 0xDFDF62
```


### define TAG_DFDF63_SCRIPT_3

```cpp
#define TAG_DFDF63_SCRIPT_3 0xDFDF63
```


### define TAG_DFDF64_SCRIPT_4

```cpp
#define TAG_DFDF64_SCRIPT_4 0xDFDF64
```


### define TAG_DFDF65_SCRIPT_5

```cpp
#define TAG_DFDF65_SCRIPT_5 0xDFDF65
```


### define TAG_DFDF69_SCRIPT_6

```cpp
#define TAG_DFDF69_SCRIPT_6 0xDFDF69
```


### define TAG_DFDF6A_SCRIPT_7

```cpp
#define TAG_DFDF6A_SCRIPT_7 0xDFDF6A
```


### define TAG_DFDF6B_SCRIPT_8

```cpp
#define TAG_DFDF6B_SCRIPT_8 0xDFDF6B
```


### define TAG_DFDF6C_SCRIPT_9

```cpp
#define TAG_DFDF6C_SCRIPT_9 0xDFDF6C
```


### define TAG_DFDF6D_SCRIPT_10

```cpp
#define TAG_DFDF6D_SCRIPT_10 0xDFDF6D
```


### define NO_UNKNOW_RECS

```cpp
#define NO_UNKNOW_RECS 15
```


### define TAG_DFDF71_UNKNOW_1

```cpp
#define TAG_DFDF71_UNKNOW_1 0xDFDF71
```


### define TAG_DFDF72_UNKNOW_2

```cpp
#define TAG_DFDF72_UNKNOW_2 0xDFDF72
```


### define TAG_DFDF73_UNKNOW_3

```cpp
#define TAG_DFDF73_UNKNOW_3 0xDFDF73
```


### define TAG_DFDF74_UNKNOW_4

```cpp
#define TAG_DFDF74_UNKNOW_4 0xDFDF74
```


### define TAG_DFDF75_UNKNOW_5

```cpp
#define TAG_DFDF75_UNKNOW_5 0xDFDF75
```


### define TAG_DFDF76_UNKNOW_6

```cpp
#define TAG_DFDF76_UNKNOW_6 0xDFDF76
```


### define TAG_DFDF77_UNKNOW_7

```cpp
#define TAG_DFDF77_UNKNOW_7 0xDFDF77
```


### define TAG_DFDF78_UNKNOW_8

```cpp
#define TAG_DFDF78_UNKNOW_8 0xDFDF78
```


### define TAG_DFDF79_UNKNOW_9

```cpp
#define TAG_DFDF79_UNKNOW_9 0xDFDF79
```


### define TAG_DFDF7A_UNKNOW_10

```cpp
#define TAG_DFDF7A_UNKNOW_10 0xDFDF7A
```


### define TAG_DFDF7B_UNKNOW_11

```cpp
#define TAG_DFDF7B_UNKNOW_11 0xDFDF7B
```


### define TAG_DFDF7C_UNKNOW_12

```cpp
#define TAG_DFDF7C_UNKNOW_12 0xDFDF7C
```


### define TAG_DFDF7D_UNKNOW_13

```cpp
#define TAG_DFDF7D_UNKNOW_13 0xDFDF7D
```


### define TAG_DFDF7E_UNKNOW_14

```cpp
#define TAG_DFDF7E_UNKNOW_14 0xDFDF7E
```


### define TAG_DFDF7F_UNKNOW_15

```cpp
#define TAG_DFDF7F_UNKNOW_15 0xDFDF7F
```


### define CLA_EMV

```cpp
#define CLA_EMV 0x39
```

Class for requests to EMV ADK. 

### define CLA_CRD

```cpp
#define CLA_CRD 0x41
```

Class for ICC functions. 

### define CLA_LED

```cpp
#define CLA_LED 0x43
```

Class for LED functions. 

### define EMV_CT_CLA_CBCK_REQ

```cpp
#define EMV_CT_CLA_CBCK_REQ 0x91
```

Class for callback requests from EMV ADK to calling application (see [Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)) 

### define EMV_CT_CLA_CBCK_RESP

```cpp
#define EMV_CT_CLA_CBCK_RESP 0x92
```

Class for callback responses (see [Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)) 

### define P2_SET

```cpp
#define P2_SET 0x00
```

Used for config command, e.g. [EMV_CT_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata). 

### define P2_GET

```cpp
#define P2_GET 0x01
```

Used for config command, e.g. [EMV_CT_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata). 

### define P2_CLONE

```cpp
#define P2_CLONE 0x02
```

Used reading configuration data that shall be transfered to another system (internal use, serialised API only) 

### define INS_CBCK_FCT

```cpp
#define INS_CBCK_FCT 0x01
```

Instruction byte used for callback functions, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req). 

### define INS_CBCK_CRD

```cpp
#define INS_CBCK_CRD 0x02
```

Instruction byte used for callbacks to cardreader, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req). 

### define INS_CBCK_TRACE

```cpp
#define INS_CBCK_TRACE 0xFF
```

Instruction byte used for trace output, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req). Also used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) in header field passed to EMV_CT_IF_BERTLV for client traces. 

### define INS_INIT

```cpp
#define INS_INIT 0x00
```

Instruction byte for [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework), respectively EMV_CT_Init_FrameworkClient(), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_TERM_CFG

```cpp
#define INS_TERM_CFG 0x01
```

Instruction byte for [EMV_CT_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata), [EMV_CT_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_APPLI_CFG

```cpp
#define INS_APPLI_CFG 0x02
```

Instruction byte for [EMV_CT_SetAppliData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata), [EMV_CT_GetAppliData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CAPKEY_CFG

```cpp
#define INS_CAPKEY_CFG 0x03
```

Instruction byte for [EMV_CT_StoreCAPKey](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_APPLY_CFG

```cpp
#define INS_APPLY_CFG 0x04
```

Instruction byte for [EMV_CT_ApplyConfiguration](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_GET_VER

```cpp
#define INS_GET_VER 0x05
```

Instruction byte for [EMV_CT_FRAMEWORK_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ct-framework-getversion), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_VIRT_CFG

```cpp
#define INS_VIRT_CFG 0x06
```

Instruction byte for [EMV_CT_MapVirtualTerminal](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_SELECT

```cpp
#define INS_SELECT 0x10
```

Instruction byte for [EMV_CT_StartTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_TRANSAC

```cpp
#define INS_TRANSAC 0x11
```

Instruction byte for [EMV_CT_ContinueOffline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_ONLINE

```cpp
#define INS_ONLINE 0x12
```

Instruction byte for [EMV_CT_ContinueOnline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_UPDATE_TAG

```cpp
#define INS_UPDATE_TAG 0x13
```

Instruction byte for [EMV_CT_updateTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_FETCH_TAG

```cpp
#define INS_FETCH_TAG 0x14
```

Instruction byte for [EMV_CT_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_END_TRX

```cpp
#define INS_END_TRX 0x15
```

Instruction byte for [EMV_CT_EndTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ct-endtransaction), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CND_DATA

```cpp
#define INS_CND_DATA 0x16
```

Instruction byte for [EMV_CT_GetCandidateData](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getcandidatedata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CHECK_AID

```cpp
#define INS_CHECK_AID 0x17
```

Instruction byte for [EMV_CT_CheckSupportedAID](group___f_u_n_c___f_l_o_w.md#function-emv-ct-checksupportedaid), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_FETCH_DOL

```cpp
#define INS_FETCH_DOL 0x18
```

Instruction byte for [EMV_CT_fetchTxnDOL](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxndol), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_ICC_DETECT

```cpp
#define INS_ICC_DETECT 0x01
```

Instruction byte for [EMV_CT_SmartDetect](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_RESET

```cpp
#define INS_ICC_RESET 0x02
```

Instruction byte for [EMV_CT_SmartReset](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_ISO

```cpp
#define INS_ICC_ISO 0x03
```

Instruction byte for [EMV_CT_SmartISO](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_OFF

```cpp
#define INS_ICC_OFF 0x04
```

Instruction byte for [EMV_CT_SmartPowerOff](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpoweroff), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_PIN

```cpp
#define INS_ICC_PIN 0x05
```

Instruction byte for [EMV_CT_Send_PIN_Offline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_PIN_DIRECT

```cpp
#define INS_ICC_PIN_DIRECT 0x08
```

Instruction byte for [EMV_CT_SmartPIN](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpin), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_LED_SWITCH

```cpp
#define INS_ICC_LED_SWITCH 0x09
```

Instruction byte for [EMV_CT_LED](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_LED_SWITCH

```cpp
#define INS_LED_SWITCH 0x03
```

Instruction byte for [EMV_CT_LED](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led). 

## Source code

```cpp
/****************************************************************************
*  Product:     ADK Cards Service - EMV Contact (CT)
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     Definitions for serial interface
****************************************************************************/

#ifndef EMV_CT_TLV_H   /* avoid double interface-includes */
  #define EMV_CT_TLV_H

#include <stdarg.h>

// *************************
// defines for serialization
// *************************

#define HEADER_SIZE          (4)
#define MAX_MESSAGE_SIZE     (2048)
#define MAX_DATA_SIZE        (MAX_MESSAGE_SIZE-HEADER_SIZE)

#ifndef MIN
#define MIN(a,b) ((a)<(b)?(a):(b))
#endif

// ========================================================================================================
// === EMVCo and card issuer tags ===
// ========================================================================================================


#define TAG_42_ISSUER_ID            0x42u     
#define TAG_4F_APP_ID               0x4Fu     
#define TAG_50_APP_LABEL            0x50u     
#define TAG_52_CMD_TO_PERFORM       0x52u     
#define TAG_57_TRACK2_EQUIVALENT    0x57u     
#define TAG_5A_APP_PAN              0x5Au     
#define TAG_5F20_CARDHOLDER_NAME    0x5F20u   
#define TAG_5F24_APP_EXP_DATE       0x5F24u   
#define TAG_5F25_APP_EFF_DATE       0x5F25u   
#define TAG_5F28_ISS_COUNTRY_CODE   0x5F28u   
#define TAG_5F2A_TRANS_CURRENCY     0x5F2Au   
#define TAG_5F2D_LANGUAGE           0x5F2Du   
#define TAG_5F30_SERVICE_CODE       0x5F30u   
#define TAG_5F34_PAN_SEQUENCE_NB    0x5F34u   
#define TAG_5F36_TRANS_CURRENCY_EXP 0x5F36u   
#define TAG_5F50_ISSUER_URL         0x5F50u   
#define TAG_5F53_IBAN               0x5F53u   
#define TAG_5F54_BIC                0x5F54u   
#define TAG_5F55_ISSUER_COUNTRY_2   0x5F55u   
#define TAG_5F56_ISSUER_COUNTRY_3   0x5F56u   
#define TAG_5F56_ISSUER_COUNTRY_CODE 0x5F56u   
#define TAG_5F57_ACCOUNT_TYPE       0x5F57u   
#define TAG_61_APP_TEMPLATE         0x61u     
#define TAG_6F_FCI_TEMPLATE         0x6Fu     
#define TAG_70_AEF_DATA_TEMPLATE    0x70u     
#define TAG_71_ISS_SCRIPT_TPLT_1    0x71u     
#define TAG_72_ISS_SCRIPT_TPLT_2    0x72u     
#define TAG_73_DIR_DISCR_TEMPLATE   0x73u     
#define TAG_77_RS_MSG_TPLT_FRMT_2   0x77u     
#define TAG_80_RS_MSG_TPLT_FRMT_1   0x80u     
#define TAG_81_BIN_AMOUNT_AUTH      0x81u     
#define TAG_82_AIP                  0x82u     
#define TAG_83_CMD_TPLT             0x83u     
#define TAG_84_DF_NAME              0x84u     
#define TAG_86_ISS_SCRIPT_CMD       0x86u     
#define TAG_87_APP_PRIORITY_ID      0x87u     
#define TAG_88_SHORT_FILE_ID        0x88u     
#define TAG_89_AUTH_CODE            0x89u     
#define TAG_8A_AUTH_RESP_CODE       0x8Au     
#define TAG_8C_CDOL_1               0x8Cu     
#define TAG_8D_CDOL_2               0x8Du     
#define TAG_8E_CVM_LIST             0x8Eu     
#define TAG_8F_CERTIF_AUTH_PK_ID    0x8Fu     
#define TAG_90_ISS_PK_CERTIF        0x90u     
#define TAG_91_ISS_AUTH_DATA        0x91u     
#define TAG_92_ISS_PK_REMAINDER     0x92u     
#define TAG_93_SGND_STAT_APP_DATA   0x93u     
#define TAG_94_AFL                  0x94u     
#define TAG_95_TVR                  0x95u     
#define TAG_97_TDOL                 0x97u     
#define TAG_98_TC_HASH_VALUE        0x98u     
#define TAG_99_TRANS_PIN_DATA       0x99u     
#define TAG_9A_TRANS_DATE           0x9Au     
#define TAG_9B_TSI                  0x9Bu     
#define TAG_9C_TRANS_TYPE           0x9Cu     
#define TAG_9D_DDF_NAME             0x9Du     
#define TAG_9F01_ACQ_ID             0x9F01u   
#define TAG_9F02_NUM_AMOUNT_AUTH    0x9F02u   
#define TAG_9F03_NUM_AMOUNT_OTHER   0x9F03u   
#define TAG_9F04_BIN_AMOUNT_OTHER   0x9F04u   
#define TAG_9F05_APP_DISCR_DATA     0x9F05u   
#define TAG_9F06_AID                0x9F06u   
#define TAG_9F07_APP_USAGE_CONTROL  0x9F07u   
#define TAG_9F08_ICC_APP_VERSION_NB 0x9F08u   
#define TAG_9F09_TRM_APP_VERSION_NB 0x9F09u   
#define TAG_9F0A_ASRPD              0x9F0Au   
#define TAG_9F0B_CARDHOLDER_NAME_XT 0x9F0Bu   
#define TAG_9F0C_ISSUER_ID_EXT      0x9F0Cu   
#define TAG_9F0D_IAC_DEFAULT        0x9F0Du   
#define TAG_9F0E_IAC_DENIAL         0x9F0Eu   
#define TAG_9F0F_IAC_ONLINE         0x9F0Fu   
#define TAG_9F10_ISS_APP_DATA       0x9F10u   
#define TAG_9F11_ISS_CODE_TABLE_ID  0x9F11u   
#define TAG_9F12_APP_PREFERRED_NAME 0x9F12u   
#define TAG_9F13_LAST_ONLINE_ATC    0x9F13u   
#define TAG_9F14_LO_OFFLINE_LIMIT   0x9F14u   
#define TAG_9F15_MERCH_CATEG_CODE   0x9F15u   
#define TAG_9F16_MERCHANT_ID        0x9F16u   
#define TAG_9F17_PIN_TRIES_LEFT     0x9F17u   
#define TAG_9F18_ISS_SCRIPT_ID      0x9F18u   
#define TAG_9F1A_TRM_COUNTRY_CODE   0x9F1Au   
#define TAG_9F1B_TRM_FLOOR_LIMIT    0x9F1Bu   
#define TAG_9F1C_TRM_ID             0x9F1Cu   
#define TAG_9F1D_TRM_RISK_MNGT_DATA 0x9F1Du   
#define TAG_9F1E_IFD_SERIAL_NB      0x9F1Eu   
#define TAG_9F1F_TRACK_1_DISCR_DATA 0x9F1Fu   
#define TAG_9F20_TRACK_2_DISCR_DATA 0x9F20u   
#define TAG_9F21_TRANS_TIME         0x9F21u   
#define TAG_9F22_CERTIF_AUTH_PK_ID  0x9F22u   
#define TAG_9F23_HI_OFFLINE_LIMIT   0x9F23u   
#define TAG_9F24_PAYM_ACCOUNT_REF   0x9F24u   
#define TAG_9F26_APP_CRYPTOGRAM     0x9F26u   
#define TAG_9F27_CRYPT_INFO_DATA    0x9F27u   
#define TAG_9F2D_ICC_PIN_PK_CERTIF  0x9F2Du   
#define TAG_9F2E_ICC_PIN_PK_EXP     0x9F2Eu   
#define TAG_9F2F_ICC_PIN_PK_REMAIN  0x9F2Fu   
#define TAG_9F32_ISS_PK_EXP         0x9F32u   
#define TAG_9F33_TRM_CAPABILITIES   0x9F33u   
#define TAG_9F34_CVM_RESULTS        0x9F34u   
#define TAG_9F35_TRM_TYPE           0x9F35u   
#define TAG_9F36_ATC                0x9F36u   
#define TAG_9F37_UNPREDICTABLE_NB   0x9F37u   
#define TAG_9F38_PDOL               0x9F38u   
#define TAG_9F39_POS_ENTRY_MODE     0x9F39u   
#define TAG_9F3A_AMNT_REF_CURRENCY  0x9F3Au   
#define TAG_9F3B_APP_REF_CURRENCY   0x9F3Bu   
#define TAG_9F3C_TRANS_REF_CURRENCY 0x9F3Cu   
#define TAG_9F3D_TRANS_CURRENCY_EXP 0x9F3Du   
#define TAG_9F40_ADD_TRM_CAP        0x9F40u   
#define TAG_9F41_TRANS_SEQUENCE_NB  0x9F41u   
#define TAG_9F42_APP_CURRENCY_CODE  0x9F42u   
#define TAG_9F43_APP_REF_CURRCY_EXP 0x9F43u   
#define TAG_9F44_APP_CURRENCY_EXP   0x9F44u   
#define TAG_9F45_DATA_AUTHENT_CODE  0x9F45u   
#define TAG_9F46_ICC_PK_CERTIF      0x9F46u   
#define TAG_9F47_ICC_PK_EXP         0x9F47u   
#define TAG_9F48_ICC_PK_REMAINDER   0x9F48u   
#define TAG_9F49_DDOL               0x9F49u   
#define TAG_9F4A_SDA_TAG_LIST       0x9F4Au   
#define TAG_9F4B_SDA_DATA           0x9F4Bu   
#define TAG_9F4C_ICC_DYNAMIC_NB     0x9F4Cu   
#define TAG_9F4E_TAC_MERCHANTLOC    0x9F4Eu   
#define TAG_A5_FCI_PROPR_TPLT       0xA5u     
#define TAG_BF0C_FCI_ISS_DISCR      0xBF0Cu   

//#define TAG_9F51_APP_CURRENCY_CODE           0x9F51 ///< Application Currency Code
//#define TAG_9F52_DEFAULT_ACTION              0x9F52 ///< Application Default Action (ADA)
//#define TAG_9F53_CONSECUTIVE_LIM_TRANS_INT   0x9F53 ///< Consecutive Transaction Limit (International)
//#define TAG_9F54_CUMULATIVE_TRANS_LIMET      0x9F54 ///< Cumulative Total Transaction Amount Limit
//#define TAG_9F56_ISS_AUTH_INCATOR            0x9F56 ///< Issuer Authentication Indicator
//#define TAG_9F5D_VISA_AOSA                   0x9F5D ///< Contactless: Available Offline Spending Amount (AOSA) @n used as @c T_9F5D_CL_VISA_AOSA in ::EMV_CT_TRANSRES_STRUCT
//#define TAG_9F66_VISA_TTQ                    0x9F66 ///< VISA TTQ (Contactless only)
//#define TAG_9F6C_VISA_CTQ                    0x9F6C ///< VISA CTQ (Contactless only)

#define TAG_9F53_TRANS_CATEGORY_CODE         0x9F53 


// ========================================================================================================
// === Verifone internal tags ===
// ========================================================================================================


#define TAG_E2_FORMAT_B             0xE2    
#define TAG_E3_FORMAT_N             0xE3    
#define TAG_E4_FORMAT_CN            0xE4    
#define TAG_E5_FORMAT_A             0xE5    
#define TAG_E6_FORMAT_AN            0xE6    
#define TAG_E7_FORMAT_ANS           0xE7    

#define TAG_F0_EMV_TEMPLATE         0xF0    

#define TAG_DOM_CHIP                0xFF01  
#define TAG_FALLBACK_MSR            0xFF02  
#define TAG_CAND_LIST               0xFF03  
#define TAG_KEY                     0xFF04  

#define TAG_ISO_DATA                0xDF01  
#define TAG_TRACE                   0xDF02  
#define TAG_KEY_NUMBER              0xDF03  
#define TAG_DF04_AID                0xDF04  
#define TAG_DF05_BUILD_APPLILIST    0xDF05  
#define TAG_DF06_CARDREADER_NUM     0xDF06  
#define TAG_DF07_UNCRIT_SCR         0xDF07  
#define TAG_DF08_CRIT_SCR           0xDF08  
#define TAG_KEY_INDEX               0xDF09  
#define TAG_KEY_RID                 0xDF0A  
#define TAG_KEY_KEY                 0xDF0B  
#define TAG_KEY_HASH                0xDF0C  
#define TAG_KEY_EXPONENT            0xDF0D  
#define TAG_KEY_CRL                 0xDF0E  

#define TAG_DF11_LIB_VERSION        0xDF11  
#define TAG_DF12_CHECKSUM           0xDF12  
#define TAG_DF13_TERM_PARAM         0xDF13  
#define TAG_DF14_ADD_TAGS_RES       0xDF14  
#define TAG_DF15_OFFL_ONLY_PROCESS  0xDF15  
#define TAG_KEY_KEYLEN              0xDF16  
#define TAG_DF17_FALLBACK_MIDS      0xDF17  
#define TAG_DF18_FALLABCK           0xDF18  
#define TAG_DF19_PARAMETER_4        0xDF19  
#define TAG_DF1C_SPECIAL_TRX        0xDF1C  
#define TAG_DF1D_PRIO_APPLI         0xDF1D  

#define TAG_DF20_ASI                0xDF20  
#define TAG_DF21_TAC_DENIAL         0xDF21  
#define TAG_DF21_TAC_ABLEHNUNG      TAG_DF21_TAC_DENIAL  
#define TAG_DF22_TAC_ONLINE         0xDF22  
#define TAG_DF23_TAC_DEFAULT        0xDF23  
#define TAG_DF24_THRESHHOLD         0xDF24  
#define TAG_DF25_MAXPERCENT_ONL     0xDF25  
#define TAG_DF26_PERCENT_ONL        0xDF26  
#define TAG_DF27_DEFAULT_TDOL       0xDF27  
#define TAG_DF28_DEFAULT_DDOL       0xDF28  
#define TAG_DF29_ADD_TAGS           0xDF29  
#define TAG_DF2A_DUTY_TAGS          0xDF2A  
#define TAG_DF2B_APP_FLOW_CAP       0xDF2B  
#define TAG_DF2C_ADD_TAGS_CRD       0xDF2C  
#define TAG_DF2D_EMV_APPLI          0xDF2D  
#define TAG_DF2E_CVM_NOT_SUPP       0xDF2E  
#define TAG_DF2F_CVM_CUSTOM         0xDF2F  

#define TAG_DF30_LANG               0xDF30  
#define TAG_DF31_TEXT_NUM           0xDF31  
#define TAG_DF33_APPLICATION_TAG_50 0xDF33  
#define TAG_DF34_AMOUNT_CONF        0xDF34  
#define TAG_DF36_TRX_OPTIONS        0xDF36  
#define TAG_DF37_TRX_STEPS          0xDF37  
#define TAG_DF39_DCC_CBCK_INFO      0xDF39  
#define TAG_DF3A_FB_MSR_OPTIONS     0xDF3A  
#define TAG_DF3B_PARAMETER_1        0xDF3B  
#define TAG_DF3C_PARAMETER_2        0xDF3C  
#define TAG_DF3C_EXT_LOGGING_DATA   0xDF3C  
#define TAG_DF3D_PARAMETER_3        0xDF3D  
#define TAG_DF3E_CDA_PROC           0xDF3E  

#define TAG_DF40_FORCE_ONLINE       0xDF40  
#define TAG_DF41_PIN_BYPASS         0xDF41  
#define TAG_DF42_STATUS             0xDF42  
#define TAG_DF43_FORCE_ACCEPT       0xDF43  
#define TAG_DF45_NO_DIR_SELECT      0xDF45  
#define TAG_DF47_PRIOR_LANG_SEL     0xDF47  
#define TAG_DF48_ONLINE_SWITCH      0xDF48  
#define TAG_DF49_APL_SEC_LIMIT      0xDF49  
#define TAG_DF4A_APL_SEC_CAPS       0xDF4A  
#define TAG_DF4B_DOM_CHIP_APPLI     0xDF4B  
#define TAG_DF4C_FALLB_MSR_APPLI    0xDF4C  
#define TAG_DF4D_CARD_CONF          0xDF4D  
#define TAG_DF4E_PDOL_INFO          0xDF4E  

#define TAG_DF50_ONL_RES            0xDF50  
#define TAG_DF51_ISS_REF_RES        0xDF51  
#define TAG_DF52_AUTH_DATA          0xDF52  
#define TAG_DF53_SCRIPT_CRIT        0xDF53  
#define TAG_DF54_SCRIPT_UNCRIT      0xDF54  
#define TAG_DF55_AC_ISS_REF         0xDF55  
#define TAG_DF56_AC_WRONG_PIN       0xDF56  
#define TAG_DF57_AC_ADD_OK          0xDF57  
#define TAG_DF5A_DS_WRITE_DATA      0xDF5A  
#define TAG_DF59_OFFL_PIN_ERRORS    0xDF59  
#define TAG_DF5B_DCC_PROHIBIT       0xDF5B  
#define TAG_DF5C_DOM_INFO           0xDF5C  
#define TAG_DF5D_DOM_OPTION         0xDF5D  
#define TAG_DF5F_ADD_APP_VERSION    0xDF5F  

#define TAG_DF60_VELOCITY_ORIG_IDX  0xDF60  
#define TAG_DF61_INF_REC_DATA       0xDF61  
#define TAG_DF62_ERROR_DATA         0xDF62  
#define TAG_DF62_APPLI_SELECT_FLAG  0xDF62u 
#define TAG_DF63_DISPLAY_TEXT       0xDF63  
#define TAG_DF64_KERNEL_DEBUG       0xDF64  
#define TAG_KERNEL_VERSION          0xDF65  
#define TAG_HANDLE_APPLI_TYPE       0xDF66  
#define TAG_SUPP_LANG               0xDF67  
#define TAG_ATR                     0xDF68  
#define TAG_EXCLUDE_AID             0xDF69  
#define TAG_EMV_CONFORM             0xDF6A  
#define TAG_L1DRIVER_VERSION        0xDF6B  
#define TAG_CONFIG_ID               0xDF6C  
#define TAG_DF6D_MODEL_NAME         0xDF6D  
#define TAG_DF6E_CONFIG_DESIRED     0xDF6E  
#define TAG_DF6F_SB308_FLAG         0xDF6F  

#define TAG_DF8F01_MANI_CANDLIST    0xDF8F01  

// callback function identifiers
#define TAG_DF6D_CBK_CARDHOLDER_RET 0xDF6D  
#define TAG_DF6E_CBK_CARDHOLDERINFO 0xDF6E  
#define TAG_DF6F_CBK_PIN_ICC_RESP   0xDF6F  
#define TAG_DF70_CBK_MERCHINFO      0xDF70  
#define TAG_DF71_CBK_AMOUNTCONF     0xDF71  
#define TAG_DF72_CBK_BLACKLIST      0xDF72  
#define TAG_DF73_CBK_TRANSLOG       0xDF73  
#define TAG_DF74_CBK_SELECTOR       0xDF74  
#define TAG_DF75_CBK_APP_NO         0xDF75  
#define TAG_DF6C_CBK_REPEAT         0xDF6C  
#define TAG_DF76_CBK_MANIPUL_TRX    0xDF76  
#define TAG_DF77_CBK_LANGUAGE       0xDF77  
#define TAG_DF78_CBK_SEL_OPT        0xDF78  
#define TAG_DF79_CBK_PIN_INFO       0xDF79  
#define TAG_DF7A_CBK_PIN_KEY_DATA   0xDF7A  
#define TAG_DF7B_CBK_PIN_KEY_EXP    0xDF7B  
#define TAG_DF7C_CBK_MERCHINFO_RET  0xDF7C  
#define TAG_DF7D_CBK_DCC_CHECK      0xDF7D  
#define TAG_DF7E_CBK_DOM_APP_RES    0xDF7E  
#define TAG_DF7F_CBK_COMM_ERR       0xDF7F  

#define TAG_DFD001_MANI_CANDLIST    0xDFD001  
#define TAG_DFD002_APPNAME_CHOSEN   0xDFD002  
#define TAG_DFD003_STORED_AMOUNT    0xDFD003  
#define TAG_DFD00B_APPNAME_UFT8     0xDFD00B  


/* 3-Byte-Tags: */
//used in CTLS: #define TAG_DF8F0A_EXIT_OPTIONS     0xDF8F0A



/* 3-Byte-Tags: */
#define TAG_DFD004_TXN_TYPES_SALE         0xDFD004   
#define TAG_DFD005_TXN_TYPES_CASH         0xDFD005   
#define TAG_DFD006_TXN_TYPES_CASHBACK     0xDFD006   
#define TAG_DFD007_TXN_TYPES_REFUND       0xDFD007   
#define TAG_DFAB58_DCR_LIST_IDS           0xDFAB58   
#define TAG_DFAB59_DCR_LIST_RANGES        0xDFAB59   
#define TAG_DF8F0A_EXIT_OPTIONS           0xDF8F0A   
#define TAG_DF8F0F_APPLYCONFIG_OPTIONS    0xDF8F0F   
#define TAG_DF8F30_REQUESTED_TAGS         0xDF8F30   

// range 0xDFD9xx reserved for encryption manager
// range 0xDFDAxx reserved for msr
// range 0xDFDBxx reserved for technology selection


// tags for L1 Status
#define TAG_DFDD01_L1_ISSUE                     0xDFDD01
#define TAG_DFDD02_L1_ISSUE_REASON          0xDFDD02
#define TAG_DFDD03_L1_ISSUE_COMMAND         0xDFDD03
#define TAG_DFDD04_L1_LAST_COMMAND          0xDFDD04
#define TAG_DFDD05_L1_LAST_SW12             0xDFDD05

// tags for PSE dump
#define NO_PSE_RECS                       10
#define TAG_DFDF01_PSE_1                        0xDFDF01
#define TAG_DFDF02_PSE_2                        0xDFDF02
#define TAG_DFDF03_PSE_3                        0xDFDF03
#define TAG_DFDF04_PSE_4                        0xDFDF04
#define TAG_DFDF05_PSE_5                        0xDFDF05
#define TAG_DFDF06_PSE_6                        0xDFDF06
#define TAG_DFDF07_PSE_7                        0xDFDF07
#define TAG_DFDF08_PSE_8                        0xDFDF08
#define TAG_DFDF09_PSE_9                        0xDFDF09
#define TAG_DFDF10_PSE_10                         0xDFDF0A

// tags for LOA processing
#define NO_LOA_RECS                       15
#define TAG_DFDF11_LOA_1                        0xDFDF11
#define TAG_DFDF12_LOA_2                        0xDFDF12
#define TAG_DFDF13_LOA_3                        0xDFDF13
#define TAG_DFDF14_LOA_4                        0xDFDF14
#define TAG_DFDF15_LOA_5                        0xDFDF15
#define TAG_DFDF16_LOA_6                        0xDFDF16
#define TAG_DFDF17_LOA_7                        0xDFDF17
#define TAG_DFDF18_LOA_8                        0xDFDF18
#define TAG_DFDF19_LOA_9                        0xDFDF19
#define TAG_DFDF1A_LOA_10                         0xDFDF1A
#define TAG_DFDF1B_LOA_11                         0xDFDF1B
#define TAG_DFDF1C_LOA_12                         0xDFDF1C
#define TAG_DFDF1D_LOA_13                         0xDFDF1D
#define TAG_DFDF1E_LOA_14                         0xDFDF1E
#define TAG_DFDF1F_LOA_15                         0xDFDF1F

// tags for Final Select
#define NO_FS_RECS                        5
#define TAG_DFDF21_FINALS_1                     0xDFDF21
#define TAG_DFDF22_FINALS_2                       0xDFDF22
#define TAG_DFDF23_FINALS_3                       0xDFDF23
#define TAG_DFDF24_FINALS_4                       0xDFDF24
#define TAG_DFDF25_FINALS_5                       0xDFDF25

// tags for GPO
#define NO_GETPROC_RECS                   5
#define TAG_DFDF29_GETPROC_1                      0xDFDF29
#define TAG_DFDF2A_GETPROC_2                      0xDFDF2A
#define TAG_DFDF2B_GETPROC_3                      0xDFDF2B
#define TAG_DFDF2C_GETPROC_4                      0xDFDF2C
#define TAG_DFDF2D_GETPROC_5                      0xDFDF2D

// tags for ReadRecords
#define NO_RR_RECS                        15
#define TAG_DFDF31_RR_1                         0xDFDF31
#define TAG_DFDF32_RR_2                         0xDFDF32
#define TAG_DFDF33_RR_3                           0xDFDF33
#define TAG_DFDF34_RR_4                       0xDFDF34
#define TAG_DFDF35_RR_5                       0xDFDF35
#define TAG_DFDF36_RR_6                         0xDFDF36
#define TAG_DFDF37_RR_7                         0xDFDF37
#define TAG_DFDF38_RR_8                           0xDFDF38
#define TAG_DFDF39_RR_9                       0xDFDF39
#define TAG_DFDF3A_RR_10                        0xDFDF3A
#define TAG_DFDF3B_RR_11                        0xDFDF3B
#define TAG_DFDF3C_RR_12                        0xDFDF3C
#define TAG_DFDF3D_RR_13                        0xDFDF3D
#define TAG_DFDF3E_RR_14                        0xDFDF3E
#define TAG_DFDF3F_RR_15                        0xDFDF3F

// tags for GetData (PINTry Counter, RiskManagement, ...)
#define NO_GETD_RECS                      8
#define TAG_DFDF41_GETD_1                       0xDFDF41
#define TAG_DFDF42_GETD_2                     0xDFDF42
#define TAG_DFDF43_GETD_3                       0xDFDF43
#define TAG_DFDF44_GETD_4                       0xDFDF44
#define TAG_DFDF45_GETD_5                       0xDFDF45
#define TAG_DFDF46_GETD_6                     0xDFDF46
#define TAG_DFDF47_GETD_7                     0xDFDF47
#define TAG_DFDF48_GETD_8                     0xDFDF48

// tags for other commands (of course no verify)
#define TAG_DFDF51_INTAUTH                      0xDFDF51
#define TAG_DFDF52_EXTAUTH                    0xDFDF52
#define TAG_DFDF53_GENAC1                       0xDFDF53
#define TAG_DFDF54_GENAC2                       0xDFDF54
#define TAG_DFDF55_CHALL                        0xDFDF55
#define TAG_DFDF5F_UNKNOW_TAG_LIST          0xDFDF5F

// tags for Critical Scripts
#define NO_SCRIPT_RECS                    10
#define TAG_DFDF61_SCRIPT_1                     0xDFDF61
#define TAG_DFDF62_SCRIPT_2                       0xDFDF62
#define TAG_DFDF63_SCRIPT_3                       0xDFDF63
#define TAG_DFDF64_SCRIPT_4                       0xDFDF64
#define TAG_DFDF65_SCRIPT_5                       0xDFDF65
#define TAG_DFDF69_SCRIPT_6                     0xDFDF69
#define TAG_DFDF6A_SCRIPT_7                       0xDFDF6A
#define TAG_DFDF6B_SCRIPT_8                       0xDFDF6B
#define TAG_DFDF6C_SCRIPT_9                       0xDFDF6C
#define TAG_DFDF6D_SCRIPT_10                      0xDFDF6D

// tags for unknown commands
#define NO_UNKNOW_RECS                    15
#define TAG_DFDF71_UNKNOW_1                     0xDFDF71
#define TAG_DFDF72_UNKNOW_2                     0xDFDF72
#define TAG_DFDF73_UNKNOW_3                       0xDFDF73
#define TAG_DFDF74_UNKNOW_4                   0xDFDF74
#define TAG_DFDF75_UNKNOW_5                   0xDFDF75
#define TAG_DFDF76_UNKNOW_6                     0xDFDF76
#define TAG_DFDF77_UNKNOW_7                     0xDFDF77
#define TAG_DFDF78_UNKNOW_8                       0xDFDF78
#define TAG_DFDF79_UNKNOW_9                 0xDFDF79
#define TAG_DFDF7A_UNKNOW_10                    0xDFDF7A
#define TAG_DFDF7B_UNKNOW_11                    0xDFDF7B
#define TAG_DFDF7C_UNKNOW_12                    0xDFDF7C
#define TAG_DFDF7D_UNKNOW_13                    0xDFDF7D
#define TAG_DFDF7E_UNKNOW_14                    0xDFDF7E
#define TAG_DFDF7F_UNKNOW_15                    0xDFDF7F


// ========================================================================================================
// === TLV tags for transport layer ===
// ========================================================================================================

#define CLA_EMV        0x39 
#define CLA_CRD        0x41 
#define CLA_LED        0x43 
#define EMV_CT_CLA_CBCK_REQ   0x91 
#define EMV_CT_CLA_CBCK_RESP  0x92 

#define P2_SET         0x00  
#define P2_GET         0x01  
#define P2_CLONE       0x02  

#define INS_CBCK_FCT   0x01 
#define INS_CBCK_CRD   0x02 
#define INS_CBCK_TRACE 0xFF 
#define INS_INIT       0x00 
#define INS_TERM_CFG   0x01 
#define INS_APPLI_CFG  0x02 
#define INS_CAPKEY_CFG 0x03 
#define INS_APPLY_CFG  0x04 
#define INS_GET_VER    0x05 
#define INS_VIRT_CFG   0x06 
#define INS_SELECT     0x10 
#define INS_TRANSAC    0x11 
#define INS_ONLINE     0x12 
#define INS_UPDATE_TAG 0x13 
#define INS_FETCH_TAG  0x14 
#define INS_END_TRX    0x15 
#define INS_CND_DATA   0x16 
#define INS_CHECK_AID  0x17 
#define INS_FETCH_DOL  0x18 
#define INS_ICC_DETECT 0x01 
#define INS_ICC_RESET  0x02 
#define INS_ICC_ISO    0x03 
#define INS_ICC_OFF    0x04 
#define INS_ICC_PIN    0x05 
#define INS_ICC_PIN_DIRECT 0x08 
#define INS_ICC_LED_SWITCH 0x09 
#define INS_LED_SWITCH     0x03 


#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

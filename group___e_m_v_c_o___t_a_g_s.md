---
title: Tags defined by EMVCo

---

# Tags defined by EMVCo

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_42_ISSUER_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-42-issuer-id)** <br>Issuer Identification Number (IIN) (**42**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin).  |
|  | **[TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)** <br>Application Identifier (AID) - Card (**4F**)    used to serialize [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md).  |
|  | **[TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)** <br>Application Label (**50**)    used in callbacks [TAG_BF12_CBK_MODIFY_CAND]() and [TAG_BF0C_CTLS_CBK_APP_SELECTED]().  |
|  | **[TAG_52_CMD_TO_PERFORM](group___e_m_v_c_o___t_a_g_s.md#define-tag-52-cmd-to-perform)** <br>Command to Perform (**52**)  |
|  | **[TAG_56_TRACK1_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-56-track1-equivalent)** <br>Track 1 Equivalent Data (MChip card)  |
|  | **[TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)** <br>Track 2 Equivalent Data (**57**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_57_DataTrack2](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-57-datatrack2).  |
|  | **[TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan)** <br>Application Primary Account Number (**5A**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5A_PAN](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5a-pan).  |
|  | **[TAG_5F20_CARDHOLDER_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f20-cardholder-name)** <br>Cardholder Name (**5F20**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F20_Cardholder](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f20-cardholder).  |
|  | **[TAG_5F24_APP_EXP_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f24-app-exp-date)** <br>Application Expiration Data (**5F24**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F24_AppExpDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f24-appexpdate).  |
|  | **[TAG_5F25_APP_EFF_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f25-app-eff-date)** <br>Application Effective Data (**5F25**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F25_AppEffDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f25-appeffdate).  |
|  | **[TAG_5F28_ISS_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f28-iss-country-code)** <br>Issuer Country Code (**5F28**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F28_IssCountryCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f28-isscountrycode).  |
|  | **[TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency)** <br>Transaction Currency Code (**5F2A**)    Configured with [EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans) (for DCC possibly in [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)). Used as [EMV_CTLS_TRANSRES_STRUCT::T_5F2A_CurrencyTrans](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2a-currencytrans).  |
|  | **[TAG_5F2D_LANGUAGE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2d-language)** <br>Language Preference (**5F2D**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref).  |
|  | **[TAG_5F30_SERVICE_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f30-service-code)** <br>Service Code (**5F30**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F30_ServiceCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f30-servicecode).  |
|  | **[TAG_5F34_PAN_SEQUENCE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f34-pan-sequence-nb)** <br>PAN Sequence Number (**5F34**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F34_PANSequenceNo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f34-pansequenceno).  |
|  | **[TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp)** <br>Transaction Currency Exponent (**5F36**)    Configured with [EMV_CTLS_TERMDATA_STRUCT::ExpTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans) (for DCC possibly in [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)). Used as [EMV_CTLS_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f36-trx-currency-exp).  |
|  | **[TAG_5F50_ISSUER_URL](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f50-issuer-url)** <br>Issuer URL (**5F50**)  |
|  | **[TAG_5F53_IBAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f53-iban)** <br>International Bank Account Number (IBAN) (**5F53**)  |
|  | **[TAG_5F54_BIC](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f54-bic)** <br>Bank Identifier Code (BIC) (**5F54**)  |
|  | **[TAG_5F55_ISSUER_COUNTRY_2](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f55-issuer-country-2)** <br>Issuer Country Code (alpha 2 format) (**5F55**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::country2](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country2).  |
|  | **[TAG_5F56_ISSUER_COUNTRY_3](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f56-issuer-country-3)** <br>Issuer Country Code (alpha 3 format) (**5F56**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::country3](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country3).  |
|  | **[TAG_5F57_ACCOUNT_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f57-account-type)** <br>Account Type (**5F57**)    used as [EMV_CTLS_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype).  |
|  | **[TAG_61_APP_TEMPLATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-61-app-template)** <br>Application Template (**61**)  |
|  | **[TAG_6F_FCI_TEMPLATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-6f-fci-template)** <br>File Control Information (FCI) Template (**6F**)  |
|  | **[TAG_70_AEF_DATA_TEMPLATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-70-aef-data-template)** <br>AEF Data Template (**70**)  |
|  | **[TAG_71_ISS_SCRIPT_TPLT_1](group___e_m_v_c_o___t_a_g_s.md#define-tag-71-iss-script-tplt-1)** <br>Issuer Script Template 1 (**71**)    to be used to fill [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata).  |
|  | **[TAG_72_ISS_SCRIPT_TPLT_2](group___e_m_v_c_o___t_a_g_s.md#define-tag-72-iss-script-tplt-2)** <br>Issuer Script Template 2 (**72**)    to be used to fill [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata).  |
|  | **[TAG_73_DIR_DISCR_TEMPLATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-73-dir-discr-template)** <br>Dirctory Discretionary Template (**73**)  |
|  | **[TAG_77_RS_MSG_TPLT_FRMT_2](group___e_m_v_c_o___t_a_g_s.md#define-tag-77-rs-msg-tplt-frmt-2)** <br>Response Message Template Format 2 (**77**)  |
|  | **[TAG_80_RS_MSG_TPLT_FRMT_1](group___e_m_v_c_o___t_a_g_s.md#define-tag-80-rs-msg-tplt-frmt-1)** <br>Response Message Template Format 1 (**80**)  |
|  | **[TAG_81_BIN_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-81-bin-amount-auth)** <br>Amount Authorization Binary (**81**)  |
|  | **[TAG_82_AIP](group___e_m_v_c_o___t_a_g_s.md#define-tag-82-aip)** <br>Application Interchange Profile (**82**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_82_AIP](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-82-aip).  |
|  | **[TAG_83_CMD_TPLT](group___e_m_v_c_o___t_a_g_s.md#define-tag-83-cmd-tplt)** <br>Command Template (**83**)  |
|  | **[TAG_84_DF_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-84-df-name)** <br>Dedicated File Name (**84**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_84_DFName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname).  |
|  | **[TAG_86_ISS_SCRIPT_CMD](group___e_m_v_c_o___t_a_g_s.md#define-tag-86-iss-script-cmd)** <br>Issuer Script Command (**86**)  |
|  | **[TAG_87_APP_PRIORITY_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-87-app-priority-id)** <br>Application Priority Indicator (**87**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::API](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-api).  |
|  | **[TAG_88_SHORT_FILE_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-88-short-file-id)** <br>Short File Identifier (SFI) (**88**)  |
|  | **[TAG_89_AUTH_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-89-auth-code)** <br>Authorization Code (**89**)  |
|  | **[TAG_8A_AUTH_RESP_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-8a-auth-resp-code)** <br>Authorization Response Code (**8A**)    used as [EMV_CTLS_HOST_STRUCT::AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp).  |
|  | **[TAG_8B_POI_INFORMATION](group___e_m_v_c_o___t_a_g_s.md#define-tag-8b-poi-information)** <br>POI information (**8B**)    used as [EMV_CTLS_TERMDATA_STRUCT::poiInformation](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-poiinformation).  |
|  | **[TAG_8C_CDOL_1](group___e_m_v_c_o___t_a_g_s.md#define-tag-8c-cdol-1)** <br>CDOL 1 (**8C**)  |
|  | **[TAG_8D_CDOL_2](group___e_m_v_c_o___t_a_g_s.md#define-tag-8d-cdol-2)** <br>CDOL 2 (**8D**)  |
|  | **[TAG_8E_CVM_LIST](group___e_m_v_c_o___t_a_g_s.md#define-tag-8e-cvm-list)** <br>Cardholder Verification Method List (**8E**)  |
|  | **[TAG_8F_CERTIF_AUTH_PK_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-8f-certif-auth-pk-id)** <br>Certification Autority Public key Index (**8F**)  |
|  | **[TAG_90_ISS_PK_CERTIF](group___e_m_v_c_o___t_a_g_s.md#define-tag-90-iss-pk-certif)** <br>Issuer Public Key Certificate (**90**)  |
|  | **[TAG_91_ISS_AUTH_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-91-iss-auth-data)** <br>Issuer Authentication Data (**91**)    used as [EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata).  |
|  | **[TAG_92_ISS_PK_REMAINDER](group___e_m_v_c_o___t_a_g_s.md#define-tag-92-iss-pk-remainder)** <br>Issuer Public Key Remainder (**92**)  |
|  | **[TAG_93_SGND_STAT_APP_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-93-sgnd-stat-app-data)** <br>Signed Static Application Data (**93**)  |
|  | **[TAG_94_AFL](group___e_m_v_c_o___t_a_g_s.md#define-tag-94-afl)** <br>Application File Locator (**94**)  |
|  | **[TAG_95_TVR](group___e_m_v_c_o___t_a_g_s.md#define-tag-95-tvr)** <br>Terminal Verification Result (**95**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_95_TVR](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-95-tvr).  |
|  | **[TAG_97_TDOL](group___e_m_v_c_o___t_a_g_s.md#define-tag-97-tdol)** <br>TDOL (**97**)  |
|  | **[TAG_98_TC_HASH_VALUE](group___e_m_v_c_o___t_a_g_s.md#define-tag-98-tc-hash-value)** <br>Transaction Certificate Hash Value (**98**)  |
|  | **[TAG_99_TRANS_PIN_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-99-trans-pin-data)** <br>Transaction PIN Data (**99**)  |
|  | **[TAG_9A_TRANS_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9a-trans-date)** <br>Transaction Date (**9A**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9A_Date](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9a-date), and [EMV_CTLS_PAYMENT_STRUCT::Date](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date).  |
|  | **[TAG_9B_TSI](group___e_m_v_c_o___t_a_g_s.md#define-tag-9b-tsi)** <br>Transaction Status Information (**9B**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9B_TSI](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9b-tsi).  |
|  | **[TAG_9C_TRANS_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9c-trans-type)** <br>Transaction Type (**9C**)    used as [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype), [EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype).  |
|  | **[TAG_9D_DDF_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-9d-ddf-name)** <br>[Directory](class_directory.md) Definition File Name (**9D**)  |
|  | **[TAG_9F01_ACQ_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f01-acq-id)** <br>Acquirer Identifier (**9F01**)  |
|  | **[TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth)** <br>Amount Authorized (Numeric) (**9F02**)    used as [EMV_CTLS_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount).  |
|  | **[TAG_9F03_NUM_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f03-num-amount-other)** <br>Amount Other (Numeric) (**9F03**)    used as [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount).  |
|  | **[TAG_9F04_BIN_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f04-bin-amount-other)** <br>Amount Other (Binary) (**9F04**)    can be used to fetch [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount) as 4-byte-binary-coded value by [EMV_CTLS_fetchTxnTags()]() |
|  | **[TAG_9F05_APP_DISCR_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f05-app-discr-data)** <br>Application Discretionary Data (**9F05**)  |
|  | **[TAG_9F06_AID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f06-aid)** <br>Application Identifier (AID)-terminal (**9F06**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid).  |
|  | **[TAG_9F07_APP_USAGE_CONTROL](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f07-app-usage-control)** <br>Application Usage Control (**9F07**)  |
|  | **[TAG_9F08_ICC_APP_VERSION_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f08-icc-app-version-nb)** <br>Application Version Number - ICC (**9F08**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no).  |
|  | **[TAG_9F09_TRM_APP_VERSION_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f09-trm-app-version-nb)** <br>Application Version Number (**9F09**)    used in most schemes of [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::Scheme](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-scheme).  |
|  | **[TAG_9F0A_ASRPD](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0a-asrpd)** <br>Application Selection Registered Proprietary Data (**9F0A**)    EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, ...) ID: 2 byte, L: length, 1 byte.  |
|  | **[TAG_9F0B_CARDHOLDER_NAME_XT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0b-cardholder-name-xt)** <br>Cardholder Name Extended (**9F0B**)  |
|  | **[TAG_9F0C_ISSUER_ID_EXT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0c-issuer-id-ext)** <br>Issuer Identification Number Extended SB N°231 (**9F0C**)    used for [EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin) when IIN length is 4.  |
|  | **[TAG_9F0D_IAC_DEFAULT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0d-iac-default)** <br>Issuer Action Code - Default (**9F0D**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F0D_IACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0d-iacdefault).  |
|  | **[TAG_9F0E_IAC_DENIAL](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0e-iac-denial)** <br>Issuer Action Code - Denial (**9F0E**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F0E_IACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0e-iacdenial).  |
|  | **[TAG_9F0F_IAC_ONLINE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f0f-iac-online)** <br>Issuer Action Code - Online (**9F0F**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F0F_IACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0f-iaconline).  |
|  | **[TAG_9F10_ISS_APP_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f10-iss-app-data)** <br>Issuer Application Data (**9F10**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F10_DataIssuer](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f10-dataissuer).  |
|  | **[TAG_9F11_ISS_CODE_TABLE_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f11-iss-code-table-id)** <br>Issuer Code Table Index (**9F11**)  |
|  | **[TAG_9F12_APP_PREFERRED_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f12-app-preferred-name)** <br>Application Preferred Name (**9F12**)    used as [EMV_CTLS_TRANSRES_STRUCT::AppName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname).  |
|  | **[TAG_9F13_LAST_ONLINE_ATC](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f13-last-online-atc)** <br>Last Online ATC Register (**9F13**)  |
|  | **[TAG_9F14_LO_OFFLINE_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f14-lo-offline-limit)** <br>Lower Consecutive Offline Limit (**9F14**)  |
|  | **[TAG_9F15_MERCH_CATEG_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f15-merch-categ-code)** <br>Merchant Category Code (**9F15**)  |
|  | **[TAG_9F16_MERCHANT_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f16-merchant-id)** <br>Merchant Identifier (**9F16**)  |
|  | **[TAG_9F17_PIN_TRIES_LEFT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f17-pin-tries-left)** <br>PIN Try Counter (**9F17**)  |
|  | **[TAG_9F18_ISS_SCRIPT_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f18-iss-script-id)** <br>Issuer Script Identifier (**9F18**)    to be used to fill [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata).  |
|  | **[TAG_9F1A_TRM_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1a-trm-country-code)** <br>Terminal Country Code (**9F1A**)    Configured with [EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-countrycodeterm).  |
|  | **[TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit)** <br>Terminal Floor Limit (**9F1B**)    not used anymore for contactless interface.  |
|  | **[TAG_9F1C_TRM_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1c-trm-id)** <br>Terminal Identification (**9F1C**)  |
|  | **[TAG_9F1D_TRM_RISK_MNGT_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1d-trm-risk-mngt-data)** <br>Terminal Risk Management Data (**9F1D**)    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalRiskManagementData_9F1D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminalriskmanagementdata-9f1d).  |
|  | **[TAG_9F1E_IFD_SERIAL_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1e-ifd-serial-nb)** <br>Interface Device (IFD) Serial Number (**9F1E**)    used as [EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber), [EMV_CTLS_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1e-ifdserialnumber).  |
|  | **[TAG_9F1F_TRACK_1_DISCR_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1f-track-1-discr-data)** <br>Track 1 Discretionary Data (**9F1F**)  |
|  | **[TAG_9F20_TRACK_2_DISCR_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f20-track-2-discr-data)** <br>Track 2 Discretionary Data (**9F20**)  |
|  | **[TAG_9F21_TRANS_TIME](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f21-trans-time)** <br>Transaction Time (**9F21**)    used as [EMV_CTLS_PAYMENT_STRUCT::Time](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time), [EMV_CTLS_TRANSRES_STRUCT::T_9F21_Time](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f21-time).  |
|  | **[TAG_9F22_CERTIF_AUTH_PK_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f22-certif-auth-pk-id)** <br>Certification Authority Public Key Index (**9F22**)  |
|  | **[TAG_9F23_HI_OFFLINE_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f23-hi-offline-limit)** <br>Upper Consecutive Offline Limit (**9F23**)  |
|  | **[TAG_9F24_PAYM_ACCOUNT_REF](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f24-paym-account-ref)** <br>Payment Account Reference (**9F24**)    EMV Specification Bulletin No. 178, an29.  |
|  | **[TAG_9F26_APP_CRYPTOGRAM](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f26-app-cryptogram)** <br>Application Cryptogram (**9F26**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F26_Cryptogramm](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f26-cryptogramm).  |
|  | **[TAG_9F27_CRYPT_INFO_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f27-crypt-info-data)** <br>Cryptogram Information Data (**9F27**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo).  |
|  | **[TAG_9F2D_ICC_PIN_PK_CERTIF](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f2d-icc-pin-pk-certif)** <br>ICC PIN Encipherment Public Key Certificate (**9F2D**)  |
|  | **[TAG_9F2E_ICC_PIN_PK_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f2e-icc-pin-pk-exp)** <br>ICC PIN Encipherment Public Key Exponent (**9F2E**)  |
|  | **[TAG_9F2F_ICC_PIN_PK_REMAIN](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f2f-icc-pin-pk-remain)** <br>ICC PIN Encipherment Public Key Remainder (**9F2F**)  |
|  | **[TAG_9F32_ISS_PK_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f32-iss-pk-exp)** <br>Issuer Public Key Exponent (**9F32**)  |
|  | **[TAG_9F33_TRM_CAPABILITIES](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f33-trm-capabilities)** <br>Terminal Capabilities (**9F33**)  |
|  | **[TAG_9F34_CVM_RESULTS](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f34-cvm-results)** <br>Cardholder Verification Method (CVM) Results (**9F34**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F34_CVM_Res](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f34-cvm-res).  |
|  | **[TAG_9F35_TRM_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f35-trm-type)** <br>Terminal Type (**9F35**)    used as [EMV_CTLS_TERMDATA_STRUCT::TermTyp](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp), [EMV_CTLS_TRANSRES_STRUCT::T_9F35_TermTyp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f35-termtyp).  |
|  | **[TAG_9F36_ATC](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f36-atc)** <br>Application Transaction Counter (ATC) (**9F36**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F36_ATC](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f36-atc).  |
|  | **[TAG_9F37_UNPREDICTABLE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f37-unpredictable-nb)** <br>Unpredictable Number (**9F37**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F37_RandomNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f37-randomnumber).  |
|  | **[TAG_9F38_PDOL](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f38-pdol)** <br>Processing Options Data Object List (PDOL) (**9F38**)  |
|  | **[TAG_9F39_POS_ENTRY_MODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f39-pos-entry-mode)** <br>Point-of-Service (POS) Entry Mode (**9F39**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F39_POSEntryMode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f39-posentrymode).  |
|  | **[TAG_9F3A_AMNT_REF_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f3a-amnt-ref-currency)** <br>Amount, Reference Currency (**9F3A**)  |
|  | **[TAG_9F3B_APP_REF_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f3b-app-ref-currency)** <br>Application Reference Currency (**9F3B**)  |
|  | **[TAG_9F3C_TRANS_REF_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f3c-trans-ref-currency)** <br>Transaction Reference Currency Code (**9F3C**)  |
|  | **[TAG_9F3D_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f3d-trans-currency-exp)** <br>Transaction Reference Currency Exponent (**9F3D**)  |
|  | **[TAG_9F40_ADD_TRM_CAP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f40-add-trm-cap)** <br>Additional Terminal Capabilities (**9F40**)  |
|  | **[TAG_9F41_TRANS_SEQUENCE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f41-trans-sequence-nb)** <br>Transaction Sequence Counter (**9F41**)    used as [EMV_CTLS_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount), [EMV_CTLS_TRANSRES_STRUCT::T_9F41_TransCount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f41-transcount).  |
|  | **[TAG_9F42_APP_CURRENCY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f42-app-currency-code)** <br>Application Currency Code (**9F42**)  |
|  | **[TAG_9F43_APP_REF_CURRCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f43-app-ref-currcy-exp)** <br>Application Reference Currency Exponent (**9F43**)  |
|  | **[TAG_9F44_APP_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f44-app-currency-exp)** <br>Application Currency Exponent (**9F44**)  |
|  | **[TAG_9F45_DATA_AUTHENT_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f45-data-authent-code)** <br>Data Authentication Code (**9F45**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F45_DataAuthCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f45-dataauthcode).  |
|  | **[TAG_9F46_ICC_PK_CERTIF](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f46-icc-pk-certif)** <br>ICC Public Key Certificate (**9F46**)  |
|  | **[TAG_9F47_ICC_PK_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f47-icc-pk-exp)** <br>ICC Public Key Exponent (**9F47**)  |
|  | **[TAG_9F48_ICC_PK_REMAINDER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f48-icc-pk-remainder)** <br>ICC Public Key Remainder (**9F48**)  |
|  | **[TAG_9F49_DDOL](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f49-ddol)** <br>Dynamic Data Authentication Data Object List (**9F49**)  |
|  | **[TAG_9F4A_SDA_TAG_LIST](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4a-sda-tag-list)** <br>Static Data Authentication Tag List (**9F4A**)  |
|  | **[TAG_9F4B_SDA_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4b-sda-data)** <br>Signed Dynamic Application Data (**9F4B**)  |
|  | **[TAG_9F4C_ICC_DYNAMIC_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4c-icc-dynamic-nb)** <br>ICC Dynamic Number (**9F4C**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F4C_ICCDynNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f4c-iccdynnumber).  |
|  | **[TAG_9F4E_TAC_MERCHANTLOC](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4e-tac-merchantloc)** <br>Merchant name and location (VISA VCPS 2.1.1) (**9F4E**)  |
|  | **[TAG_A5_FCI_PROPR_TPLT](group___e_m_v_c_o___t_a_g_s.md#define-tag-a5-fci-propr-tplt)** <br>FCI Proprietary Template (**A5**)  |
|  | **[TAG_BF0C_FCI_ISS_DISCR](group___e_m_v_c_o___t_a_g_s.md#define-tag-bf0c-fci-iss-discr)** <br>FCI Issuer Discretionary Data (**BF0C**)  |
|  | **[TAG_42_ISSUER_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-42-issuer-id)** <br>Issuer Identification Number (IIN) (**42**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin).  |
|  | **[TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)** <br>Application Identifier (AID) - Card (**4F**)  |
|  | **[TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)** <br>Application Label (**50**)    used for [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname), [EMV_CT_DOM_CHIP_STRUCT::ucAppName](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucappname), [EMV_CT_CANDIDATE_STRUCT::name](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-name).  |
|  | **[TAG_52_CMD_TO_PERFORM](group___e_m_v_c_o___t_a_g_s.md#define-tag-52-cmd-to-perform)** <br>Command to Perform (**52**)  |
|  | **[TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)** <br>Track 2 Equivalent Data (**57**)    used as `T_57_DataTrack2` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `puc57_track2` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() )  |
|  | **[TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan)** <br>Application Primary Account Number (**5A**)    used as `T_5A_PAN` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5A_pan` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() ), `puc5A_pan` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc5A_pan` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]())  |
|  | **[TAG_5F20_CARDHOLDER_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f20-cardholder-name)** <br>Cardholder Name (**5F20**)    used as `T_5F20_Cardholder` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F24_expdate` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() ), and `uc5F24_expdate` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]())  |
|  | **[TAG_5F24_APP_EXP_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f24-app-exp-date)** <br>Application Expiration Data (**5F24**)    used as `T_5F24_AppExpDate` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F24_expdate` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() ), and `pucExpDate` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]())  |
|  | **[TAG_5F25_APP_EFF_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f25-app-eff-date)** <br>Application Effective Data (**5F25**)    used as `T_5F25_AppEffDate` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_5F28_ISS_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f28-iss-country-code)** <br>Issuer Country Code (**5F28**)    used as `T_5F28_IssCountryCode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `puc5F28_icc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() )  |
|  | **[TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency)** <br>Transaction Currency Code (**5F2A**)    Configured with `CurrencyTrans` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) (for DCC possibly in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)). Used as `T_5F2A_CurrencyTrans` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F2A_tcc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc5F2A_tcc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]())  |
|  | **[TAG_5F2D_LANGUAGE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2d-language)** <br>Language Preference (**5F2D**)    used as `T_5F2D_Lang_Pref` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_5F30_SERVICE_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f30-service-code)** <br>Service Code (**5F30**)  |
|  | **[TAG_5F34_PAN_SEQUENCE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f34-pan-sequence-nb)** <br>PAN Sequence Number (**5F34**)    used as `T_5F34_PANSequenceNo` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md).  |
|  | **[TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp)** <br>Transaction Currency Exponent (**5F36**)    Configured with `Exp_Trans` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) (for DCC possibly in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)). Used as `T_5F36_Trx_Currency_Exp` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F36_tce` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc5F36_tce` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]())  |
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
|  | **[TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth)** <br>Amount Authorized (Numeric) (**9F02**)    used as `Betrag_num` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `puc9F02_amount` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc9F02_amount` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]())  |
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
|  | **[TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit)** <br>Terminal Floor Limit (**9F1B**)    used as [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit), `puc9F1B_fl` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc9F1B_fl` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]())  |
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
|  | **[TAG_9F42_APP_CURRENCY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f42-app-currency-code)** <br>Application Currency Code (**9F42**)    used as `puc9F42_acc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), `puc9F42_acc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]())  |
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




## Macros Documentation

### define TAG_42_ISSUER_ID

```
#define TAG_42_ISSUER_ID 0x42u
```

Issuer Identification Number (IIN) (**42**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin). 

### define TAG_4F_APP_ID

```
#define TAG_4F_APP_ID 0x4Fu
```

Application Identifier (AID) - Card (**4F**)    used to serialize [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md). 

### define TAG_50_APP_LABEL

```
#define TAG_50_APP_LABEL 0x50u
```

Application Label (**50**)    used in callbacks [TAG_BF12_CBK_MODIFY_CAND]() and [TAG_BF0C_CTLS_CBK_APP_SELECTED](). 

### define TAG_52_CMD_TO_PERFORM

```
#define TAG_52_CMD_TO_PERFORM 0x52u
```

Command to Perform (**52**) 

### define TAG_56_TRACK1_EQUIVALENT

```
#define TAG_56_TRACK1_EQUIVALENT 0x56u
```

Track 1 Equivalent Data (MChip card) 

### define TAG_57_TRACK2_EQUIVALENT

```
#define TAG_57_TRACK2_EQUIVALENT 0x57u
```

Track 2 Equivalent Data (**57**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_57_DataTrack2](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-57-datatrack2). 

### define TAG_5A_APP_PAN

```
#define TAG_5A_APP_PAN 0x5Au
```

Application Primary Account Number (**5A**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5A_PAN](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5a-pan). 

### define TAG_5F20_CARDHOLDER_NAME

```
#define TAG_5F20_CARDHOLDER_NAME 0x5F20u
```

Cardholder Name (**5F20**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F20_Cardholder](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f20-cardholder). 

### define TAG_5F24_APP_EXP_DATE

```
#define TAG_5F24_APP_EXP_DATE 0x5F24u
```

Application Expiration Data (**5F24**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F24_AppExpDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f24-appexpdate). 

### define TAG_5F25_APP_EFF_DATE

```
#define TAG_5F25_APP_EFF_DATE 0x5F25u
```

Application Effective Data (**5F25**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F25_AppEffDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f25-appeffdate). 

### define TAG_5F28_ISS_COUNTRY_CODE

```
#define TAG_5F28_ISS_COUNTRY_CODE 0x5F28u
```

Issuer Country Code (**5F28**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F28_IssCountryCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f28-isscountrycode). 

### define TAG_5F2A_TRANS_CURRENCY

```
#define TAG_5F2A_TRANS_CURRENCY 0x5F2Au
```

Transaction Currency Code (**5F2A**)    Configured with [EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans) (for DCC possibly in [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)). Used as [EMV_CTLS_TRANSRES_STRUCT::T_5F2A_CurrencyTrans](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2a-currencytrans). 

### define TAG_5F2D_LANGUAGE

```
#define TAG_5F2D_LANGUAGE 0x5F2Du
```

Language Preference (**5F2D**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref). 

### define TAG_5F30_SERVICE_CODE

```
#define TAG_5F30_SERVICE_CODE 0x5F30u
```

Service Code (**5F30**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F30_ServiceCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f30-servicecode). 

### define TAG_5F34_PAN_SEQUENCE_NB

```
#define TAG_5F34_PAN_SEQUENCE_NB 0x5F34u
```

PAN Sequence Number (**5F34**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F34_PANSequenceNo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f34-pansequenceno). 

### define TAG_5F36_TRANS_CURRENCY_EXP

```
#define TAG_5F36_TRANS_CURRENCY_EXP 0x5F36u
```

Transaction Currency Exponent (**5F36**)    Configured with [EMV_CTLS_TERMDATA_STRUCT::ExpTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans) (for DCC possibly in [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)). Used as [EMV_CTLS_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f36-trx-currency-exp). 

### define TAG_5F50_ISSUER_URL

```
#define TAG_5F50_ISSUER_URL 0x5F50u
```

Issuer URL (**5F50**) 

### define TAG_5F53_IBAN

```
#define TAG_5F53_IBAN 0x5F53u
```

International Bank Account Number (IBAN) (**5F53**) 

### define TAG_5F54_BIC

```
#define TAG_5F54_BIC 0x5F54u
```

Bank Identifier Code (BIC) (**5F54**) 

### define TAG_5F55_ISSUER_COUNTRY_2

```
#define TAG_5F55_ISSUER_COUNTRY_2 0x5F55u
```

Issuer Country Code (alpha 2 format) (**5F55**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::country2](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country2). 

### define TAG_5F56_ISSUER_COUNTRY_3

```
#define TAG_5F56_ISSUER_COUNTRY_3 0x5F56u
```

Issuer Country Code (alpha 3 format) (**5F56**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::country3](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country3). 

### define TAG_5F57_ACCOUNT_TYPE

```
#define TAG_5F57_ACCOUNT_TYPE 0x5F57u
```

Account Type (**5F57**)    used as [EMV_CTLS_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype). 

### define TAG_61_APP_TEMPLATE

```
#define TAG_61_APP_TEMPLATE 0x61u
```

Application Template (**61**) 

### define TAG_6F_FCI_TEMPLATE

```
#define TAG_6F_FCI_TEMPLATE 0x6Fu
```

File Control Information (FCI) Template (**6F**) 

### define TAG_70_AEF_DATA_TEMPLATE

```
#define TAG_70_AEF_DATA_TEMPLATE 0x70u
```

AEF Data Template (**70**) 

### define TAG_71_ISS_SCRIPT_TPLT_1

```
#define TAG_71_ISS_SCRIPT_TPLT_1 0x71u
```

Issuer Script Template 1 (**71**)    to be used to fill [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata). 

### define TAG_72_ISS_SCRIPT_TPLT_2

```
#define TAG_72_ISS_SCRIPT_TPLT_2 0x72u
```

Issuer Script Template 2 (**72**)    to be used to fill [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata). 

### define TAG_73_DIR_DISCR_TEMPLATE

```
#define TAG_73_DIR_DISCR_TEMPLATE 0x73u
```

Dirctory Discretionary Template (**73**) 

### define TAG_77_RS_MSG_TPLT_FRMT_2

```
#define TAG_77_RS_MSG_TPLT_FRMT_2 0x77u
```

Response Message Template Format 2 (**77**) 

### define TAG_80_RS_MSG_TPLT_FRMT_1

```
#define TAG_80_RS_MSG_TPLT_FRMT_1 0x80u
```

Response Message Template Format 1 (**80**) 

### define TAG_81_BIN_AMOUNT_AUTH

```
#define TAG_81_BIN_AMOUNT_AUTH 0x81u
```

Amount Authorization Binary (**81**) 

### define TAG_82_AIP

```
#define TAG_82_AIP 0x82u
```

Application Interchange Profile (**82**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_82_AIP](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-82-aip). 

### define TAG_83_CMD_TPLT

```
#define TAG_83_CMD_TPLT 0x83u
```

Command Template (**83**) 

### define TAG_84_DF_NAME

```
#define TAG_84_DF_NAME 0x84u
```

Dedicated File Name (**84**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_84_DFName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname). 

### define TAG_86_ISS_SCRIPT_CMD

```
#define TAG_86_ISS_SCRIPT_CMD 0x86u
```

Issuer Script Command (**86**) 

### define TAG_87_APP_PRIORITY_ID

```
#define TAG_87_APP_PRIORITY_ID 0x87u
```

Application Priority Indicator (**87**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::API](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-api). 

### define TAG_88_SHORT_FILE_ID

```
#define TAG_88_SHORT_FILE_ID 0x88u
```

Short File Identifier (SFI) (**88**) 

### define TAG_89_AUTH_CODE

```
#define TAG_89_AUTH_CODE 0x89u
```

Authorization Code (**89**) 

### define TAG_8A_AUTH_RESP_CODE

```
#define TAG_8A_AUTH_RESP_CODE 0x8Au
```

Authorization Response Code (**8A**)    used as [EMV_CTLS_HOST_STRUCT::AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp). 

### define TAG_8B_POI_INFORMATION

```
#define TAG_8B_POI_INFORMATION 0x8Bu
```

POI information (**8B**)    used as [EMV_CTLS_TERMDATA_STRUCT::poiInformation](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-poiinformation). 

### define TAG_8C_CDOL_1

```
#define TAG_8C_CDOL_1 0x8Cu
```

CDOL 1 (**8C**) 

### define TAG_8D_CDOL_2

```
#define TAG_8D_CDOL_2 0x8Du
```

CDOL 2 (**8D**) 

### define TAG_8E_CVM_LIST

```
#define TAG_8E_CVM_LIST 0x8Eu
```

Cardholder Verification Method List (**8E**) 

### define TAG_8F_CERTIF_AUTH_PK_ID

```
#define TAG_8F_CERTIF_AUTH_PK_ID 0x8Fu
```

Certification Autority Public key Index (**8F**) 

### define TAG_90_ISS_PK_CERTIF

```
#define TAG_90_ISS_PK_CERTIF 0x90u
```

Issuer Public Key Certificate (**90**) 

### define TAG_91_ISS_AUTH_DATA

```
#define TAG_91_ISS_AUTH_DATA 0x91u
```

Issuer Authentication Data (**91**)    used as [EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata). 

### define TAG_92_ISS_PK_REMAINDER

```
#define TAG_92_ISS_PK_REMAINDER 0x92u
```

Issuer Public Key Remainder (**92**) 

### define TAG_93_SGND_STAT_APP_DATA

```
#define TAG_93_SGND_STAT_APP_DATA 0x93u
```

Signed Static Application Data (**93**) 

### define TAG_94_AFL

```
#define TAG_94_AFL 0x94u
```

Application File Locator (**94**) 

### define TAG_95_TVR

```
#define TAG_95_TVR 0x95u
```

Terminal Verification Result (**95**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_95_TVR](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-95-tvr). 

### define TAG_97_TDOL

```
#define TAG_97_TDOL 0x97u
```

TDOL (**97**) 

### define TAG_98_TC_HASH_VALUE

```
#define TAG_98_TC_HASH_VALUE 0x98u
```

Transaction Certificate Hash Value (**98**) 

### define TAG_99_TRANS_PIN_DATA

```
#define TAG_99_TRANS_PIN_DATA 0x99u
```

Transaction PIN Data (**99**) 

### define TAG_9A_TRANS_DATE

```
#define TAG_9A_TRANS_DATE 0x9Au
```

Transaction Date (**9A**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9A_Date](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9a-date), and [EMV_CTLS_PAYMENT_STRUCT::Date](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date). 

### define TAG_9B_TSI

```
#define TAG_9B_TSI 0x9Bu
```

Transaction Status Information (**9B**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9B_TSI](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9b-tsi). 

### define TAG_9C_TRANS_TYPE

```
#define TAG_9C_TRANS_TYPE 0x9Cu
```

Transaction Type (**9C**)    used as [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype), [EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 

### define TAG_9D_DDF_NAME

```
#define TAG_9D_DDF_NAME 0x9Du
```

[Directory](class_directory.md) Definition File Name (**9D**) 

### define TAG_9F01_ACQ_ID

```
#define TAG_9F01_ACQ_ID 0x9F01u
```

Acquirer Identifier (**9F01**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01), [EMV_CTLS_APPLIDATA_AK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01), [EMV_CTLS_APPLIDATA_JK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)


### define TAG_9F02_NUM_AMOUNT_AUTH

```
#define TAG_9F02_NUM_AMOUNT_AUTH 0x9F02u
```

Amount Authorized (Numeric) (**9F02**)    used as [EMV_CTLS_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount). 

### define TAG_9F03_NUM_AMOUNT_OTHER

```
#define TAG_9F03_NUM_AMOUNT_OTHER 0x9F03u
```

Amount Other (Numeric) (**9F03**)    used as [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount). 

### define TAG_9F04_BIN_AMOUNT_OTHER

```
#define TAG_9F04_BIN_AMOUNT_OTHER 0x9F04u
```

Amount Other (Binary) (**9F04**)    can be used to fetch [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount) as 4-byte-binary-coded value by [EMV_CTLS_fetchTxnTags()]()

### define TAG_9F05_APP_DISCR_DATA

```
#define TAG_9F05_APP_DISCR_DATA 0x9F05u
```

Application Discretionary Data (**9F05**) 

### define TAG_9F06_AID

```
#define TAG_9F06_AID 0x9F06u
```

Application Identifier (AID)-terminal (**9F06**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid). 

### define TAG_9F07_APP_USAGE_CONTROL

```
#define TAG_9F07_APP_USAGE_CONTROL 0x9F07u
```

Application Usage Control (**9F07**) 

### define TAG_9F08_ICC_APP_VERSION_NB

```
#define TAG_9F08_ICC_APP_VERSION_NB 0x9F08u
```

Application Version Number - ICC (**9F08**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no). 

### define TAG_9F09_TRM_APP_VERSION_NB

```
#define TAG_9F09_TRM_APP_VERSION_NB 0x9F09u
```

Application Version Number (**9F09**)    used in most schemes of [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::Scheme](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-scheme). 

### define TAG_9F0A_ASRPD

```
#define TAG_9F0A_ASRPD 0x9F0Au
```

Application Selection Registered Proprietary Data (**9F0A**)    EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, ...) ID: 2 byte, L: length, 1 byte. 

### define TAG_9F0B_CARDHOLDER_NAME_XT

```
#define TAG_9F0B_CARDHOLDER_NAME_XT 0x9F0Bu
```

Cardholder Name Extended (**9F0B**) 

### define TAG_9F0C_ISSUER_ID_EXT

```
#define TAG_9F0C_ISSUER_ID_EXT 0x9F0Cu
```

Issuer Identification Number Extended SB N°231 (**9F0C**)    used for [EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin) when IIN length is 4. 

### define TAG_9F0D_IAC_DEFAULT

```
#define TAG_9F0D_IAC_DEFAULT 0x9F0Du
```

Issuer Action Code - Default (**9F0D**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F0D_IACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0d-iacdefault). 

### define TAG_9F0E_IAC_DENIAL

```
#define TAG_9F0E_IAC_DENIAL 0x9F0Eu
```

Issuer Action Code - Denial (**9F0E**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F0E_IACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0e-iacdenial). 

### define TAG_9F0F_IAC_ONLINE

```
#define TAG_9F0F_IAC_ONLINE 0x9F0Fu
```

Issuer Action Code - Online (**9F0F**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F0F_IACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0f-iaconline). 

### define TAG_9F10_ISS_APP_DATA

```
#define TAG_9F10_ISS_APP_DATA 0x9F10u
```

Issuer Application Data (**9F10**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F10_DataIssuer](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f10-dataissuer). 

### define TAG_9F11_ISS_CODE_TABLE_ID

```
#define TAG_9F11_ISS_CODE_TABLE_ID 0x9F11u
```

Issuer Code Table Index (**9F11**) 

### define TAG_9F12_APP_PREFERRED_NAME

```
#define TAG_9F12_APP_PREFERRED_NAME 0x9F12u
```

Application Preferred Name (**9F12**)    used as [EMV_CTLS_TRANSRES_STRUCT::AppName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname). 

### define TAG_9F13_LAST_ONLINE_ATC

```
#define TAG_9F13_LAST_ONLINE_ATC 0x9F13u
```

Last Online ATC Register (**9F13**) 

### define TAG_9F14_LO_OFFLINE_LIMIT

```
#define TAG_9F14_LO_OFFLINE_LIMIT 0x9F14u
```

Lower Consecutive Offline Limit (**9F14**) 

### define TAG_9F15_MERCH_CATEG_CODE

```
#define TAG_9F15_MERCH_CATEG_CODE 0x9F15u
```

Merchant Category Code (**9F15**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_DK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_RK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)


### define TAG_9F16_MERCHANT_ID

```
#define TAG_9F16_MERCHANT_ID 0x9F16u
```

Merchant Identifier (**9F16**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16)


### define TAG_9F17_PIN_TRIES_LEFT

```
#define TAG_9F17_PIN_TRIES_LEFT 0x9F17u
```

PIN Try Counter (**9F17**) 

### define TAG_9F18_ISS_SCRIPT_ID

```
#define TAG_9F18_ISS_SCRIPT_ID 0x9F18u
```

Issuer Script Identifier (**9F18**)    to be used to fill [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata). 

### define TAG_9F1A_TRM_COUNTRY_CODE

```
#define TAG_9F1A_TRM_COUNTRY_CODE 0x9F1Au
```

Terminal Country Code (**9F1A**)    Configured with [EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-countrycodeterm). 

### define TAG_9F1B_TRM_FLOOR_LIMIT

```
#define TAG_9F1B_TRM_FLOOR_LIMIT 0x9F1Bu
```

Terminal Floor Limit (**9F1B**)    not used anymore for contactless interface. 

### define TAG_9F1C_TRM_ID

```
#define TAG_9F1C_TRM_ID 0x9F1Cu
```

Terminal Identification (**9F1C**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_VK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_AK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_JK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_DK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_IK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_EK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_PK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_CK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_GK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_RK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_SK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_PB_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-termident-9f1c)


### define TAG_9F1D_TRM_RISK_MNGT_DATA

```
#define TAG_9F1D_TRM_RISK_MNGT_DATA 0x9F1Du
```

Terminal Risk Management Data (**9F1D**)    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalRiskManagementData_9F1D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminalriskmanagementdata-9f1d). 

### define TAG_9F1E_IFD_SERIAL_NB

```
#define TAG_9F1E_IFD_SERIAL_NB 0x9F1Eu
```

Interface Device (IFD) Serial Number (**9F1E**)    used as [EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber), [EMV_CTLS_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1e-ifdserialnumber). 

### define TAG_9F1F_TRACK_1_DISCR_DATA

```
#define TAG_9F1F_TRACK_1_DISCR_DATA 0x9F1Fu
```

Track 1 Discretionary Data (**9F1F**) 

### define TAG_9F20_TRACK_2_DISCR_DATA

```
#define TAG_9F20_TRACK_2_DISCR_DATA 0x9F20u
```

Track 2 Discretionary Data (**9F20**) 

### define TAG_9F21_TRANS_TIME

```
#define TAG_9F21_TRANS_TIME 0x9F21u
```

Transaction Time (**9F21**)    used as [EMV_CTLS_PAYMENT_STRUCT::Time](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time), [EMV_CTLS_TRANSRES_STRUCT::T_9F21_Time](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f21-time). 

### define TAG_9F22_CERTIF_AUTH_PK_ID

```
#define TAG_9F22_CERTIF_AUTH_PK_ID 0x9F22u
```

Certification Authority Public Key Index (**9F22**) 

### define TAG_9F23_HI_OFFLINE_LIMIT

```
#define TAG_9F23_HI_OFFLINE_LIMIT 0x9F23u
```

Upper Consecutive Offline Limit (**9F23**) 

### define TAG_9F24_PAYM_ACCOUNT_REF

```
#define TAG_9F24_PAYM_ACCOUNT_REF 0x9F24u
```

Payment Account Reference (**9F24**)    EMV Specification Bulletin No. 178, an29. 

### define TAG_9F26_APP_CRYPTOGRAM

```
#define TAG_9F26_APP_CRYPTOGRAM 0x9F26u
```

Application Cryptogram (**9F26**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F26_Cryptogramm](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f26-cryptogramm). 

### define TAG_9F27_CRYPT_INFO_DATA

```
#define TAG_9F27_CRYPT_INFO_DATA 0x9F27u
```

Cryptogram Information Data (**9F27**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo). 

### define TAG_9F2D_ICC_PIN_PK_CERTIF

```
#define TAG_9F2D_ICC_PIN_PK_CERTIF 0x9F2Du
```

ICC PIN Encipherment Public Key Certificate (**9F2D**) 

### define TAG_9F2E_ICC_PIN_PK_EXP

```
#define TAG_9F2E_ICC_PIN_PK_EXP 0x9F2Eu
```

ICC PIN Encipherment Public Key Exponent (**9F2E**) 

### define TAG_9F2F_ICC_PIN_PK_REMAIN

```
#define TAG_9F2F_ICC_PIN_PK_REMAIN 0x9F2Fu
```

ICC PIN Encipherment Public Key Remainder (**9F2F**) 

### define TAG_9F32_ISS_PK_EXP

```
#define TAG_9F32_ISS_PK_EXP 0x9F32u
```

Issuer Public Key Exponent (**9F32**) 

### define TAG_9F33_TRM_CAPABILITIES

```
#define TAG_9F33_TRM_CAPABILITIES 0x9F33u
```

Terminal Capabilities (**9F33**) 

used as [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_TRANSRES_STRUCT::T_9F33_TermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f33-termcap)


### define TAG_9F34_CVM_RESULTS

```
#define TAG_9F34_CVM_RESULTS 0x9F34u
```

Cardholder Verification Method (CVM) Results (**9F34**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F34_CVM_Res](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f34-cvm-res). 

### define TAG_9F35_TRM_TYPE

```
#define TAG_9F35_TRM_TYPE 0x9F35u
```

Terminal Type (**9F35**)    used as [EMV_CTLS_TERMDATA_STRUCT::TermTyp](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp), [EMV_CTLS_TRANSRES_STRUCT::T_9F35_TermTyp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f35-termtyp). 

### define TAG_9F36_ATC

```
#define TAG_9F36_ATC 0x9F36u
```

Application Transaction Counter (ATC) (**9F36**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F36_ATC](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f36-atc). 

### define TAG_9F37_UNPREDICTABLE_NB

```
#define TAG_9F37_UNPREDICTABLE_NB 0x9F37u
```

Unpredictable Number (**9F37**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F37_RandomNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f37-randomnumber). 

### define TAG_9F38_PDOL

```
#define TAG_9F38_PDOL 0x9F38u
```

Processing Options Data Object List (PDOL) (**9F38**) 

### define TAG_9F39_POS_ENTRY_MODE

```
#define TAG_9F39_POS_ENTRY_MODE 0x9F39u
```

Point-of-Service (POS) Entry Mode (**9F39**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F39_POSEntryMode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f39-posentrymode). 

### define TAG_9F3A_AMNT_REF_CURRENCY

```
#define TAG_9F3A_AMNT_REF_CURRENCY 0x9F3Au
```

Amount, Reference Currency (**9F3A**) 

### define TAG_9F3B_APP_REF_CURRENCY

```
#define TAG_9F3B_APP_REF_CURRENCY 0x9F3Bu
```

Application Reference Currency (**9F3B**) 

### define TAG_9F3C_TRANS_REF_CURRENCY

```
#define TAG_9F3C_TRANS_REF_CURRENCY 0x9F3Cu
```

Transaction Reference Currency Code (**9F3C**) 

### define TAG_9F3D_TRANS_CURRENCY_EXP

```
#define TAG_9F3D_TRANS_CURRENCY_EXP 0x9F3Du
```

Transaction Reference Currency Exponent (**9F3D**) 

### define TAG_9F40_ADD_TRM_CAP

```
#define TAG_9F40_ADD_TRM_CAP 0x9F40u
```

Additional Terminal Capabilities (**9F40**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_VK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_AK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_DK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_IK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_EK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_CK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_GK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_SK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_TRANSRES_STRUCT::T_9F40_AddTermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f40-addtermcap)


### define TAG_9F41_TRANS_SEQUENCE_NB

```
#define TAG_9F41_TRANS_SEQUENCE_NB 0x9F41u
```

Transaction Sequence Counter (**9F41**)    used as [EMV_CTLS_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount), [EMV_CTLS_TRANSRES_STRUCT::T_9F41_TransCount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f41-transcount). 

### define TAG_9F42_APP_CURRENCY_CODE

```
#define TAG_9F42_APP_CURRENCY_CODE 0x9F42u
```

Application Currency Code (**9F42**) 

### define TAG_9F43_APP_REF_CURRCY_EXP

```
#define TAG_9F43_APP_REF_CURRCY_EXP 0x9F43u
```

Application Reference Currency Exponent (**9F43**) 

### define TAG_9F44_APP_CURRENCY_EXP

```
#define TAG_9F44_APP_CURRENCY_EXP 0x9F44u
```

Application Currency Exponent (**9F44**) 

### define TAG_9F45_DATA_AUTHENT_CODE

```
#define TAG_9F45_DATA_AUTHENT_CODE 0x9F45u
```

Data Authentication Code (**9F45**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F45_DataAuthCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f45-dataauthcode). 

### define TAG_9F46_ICC_PK_CERTIF

```
#define TAG_9F46_ICC_PK_CERTIF 0x9F46u
```

ICC Public Key Certificate (**9F46**) 

### define TAG_9F47_ICC_PK_EXP

```
#define TAG_9F47_ICC_PK_EXP 0x9F47u
```

ICC Public Key Exponent (**9F47**) 

### define TAG_9F48_ICC_PK_REMAINDER

```
#define TAG_9F48_ICC_PK_REMAINDER 0x9F48u
```

ICC Public Key Remainder (**9F48**) 

### define TAG_9F49_DDOL

```
#define TAG_9F49_DDOL 0x9F49u
```

Dynamic Data Authentication Data Object List (**9F49**) 

### define TAG_9F4A_SDA_TAG_LIST

```
#define TAG_9F4A_SDA_TAG_LIST 0x9F4Au
```

Static Data Authentication Tag List (**9F4A**) 

### define TAG_9F4B_SDA_DATA

```
#define TAG_9F4B_SDA_DATA 0x9F4Bu
```

Signed Dynamic Application Data (**9F4B**) 

### define TAG_9F4C_ICC_DYNAMIC_NB

```
#define TAG_9F4C_ICC_DYNAMIC_NB 0x9F4Cu
```

ICC Dynamic Number (**9F4C**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F4C_ICCDynNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f4c-iccdynnumber). 

### define TAG_9F4E_TAC_MERCHANTLOC

```
#define TAG_9F4E_TAC_MERCHANTLOC 0x9F4Eu
```

Merchant name and location (VISA VCPS 2.1.1) (**9F4E**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_PB_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)


### define TAG_A5_FCI_PROPR_TPLT

```
#define TAG_A5_FCI_PROPR_TPLT 0xA5u
```

FCI Proprietary Template (**A5**) 

### define TAG_BF0C_FCI_ISS_DISCR

```
#define TAG_BF0C_FCI_ISS_DISCR 0xBF0Cu
```

FCI Issuer Discretionary Data (**BF0C**) 

### define TAG_42_ISSUER_ID

```
#define TAG_42_ISSUER_ID 0x42u
```

Issuer Identification Number (IIN) (**42**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin). 

### define TAG_4F_APP_ID

```
#define TAG_4F_APP_ID 0x4Fu
```

Application Identifier (AID) - Card (**4F**) 

### define TAG_50_APP_LABEL

```
#define TAG_50_APP_LABEL 0x50u
```

Application Label (**50**)    used for [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname), [EMV_CT_DOM_CHIP_STRUCT::ucAppName](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucappname), [EMV_CT_CANDIDATE_STRUCT::name](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-name). 

### define TAG_52_CMD_TO_PERFORM

```
#define TAG_52_CMD_TO_PERFORM 0x52u
```

Command to Perform (**52**) 

### define TAG_57_TRACK2_EQUIVALENT

```
#define TAG_57_TRACK2_EQUIVALENT 0x57u
```

Track 2 Equivalent Data (**57**)    used as `T_57_DataTrack2` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `puc57_track2` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() ) 

### define TAG_5A_APP_PAN

```
#define TAG_5A_APP_PAN 0x5Au
```

Application Primary Account Number (**5A**)    used as `T_5A_PAN` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5A_pan` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() ), `puc5A_pan` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc5A_pan` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()) 

### define TAG_5F20_CARDHOLDER_NAME

```
#define TAG_5F20_CARDHOLDER_NAME 0x5F20u
```

Cardholder Name (**5F20**)    used as `T_5F20_Cardholder` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F24_expdate` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() ), and `uc5F24_expdate` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]()) 

### define TAG_5F24_APP_EXP_DATE

```
#define TAG_5F24_APP_EXP_DATE 0x5F24u
```

Application Expiration Data (**5F24**)    used as `T_5F24_AppExpDate` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F24_expdate` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() ), and `pucExpDate` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]()) 

### define TAG_5F25_APP_EFF_DATE

```
#define TAG_5F25_APP_EFF_DATE 0x5F25u
```

Application Effective Data (**5F25**)    used as `T_5F25_AppEffDate` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_5F28_ISS_COUNTRY_CODE

```
#define TAG_5F28_ISS_COUNTRY_CODE 0x5F28u
```

Issuer Country Code (**5F28**)    used as `T_5F28_IssCountryCode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `puc5F28_icc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]() ) 

### define TAG_5F2A_TRANS_CURRENCY

```
#define TAG_5F2A_TRANS_CURRENCY 0x5F2Au
```

Transaction Currency Code (**5F2A**)    Configured with `CurrencyTrans` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) (for DCC possibly in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)). Used as `T_5F2A_CurrencyTrans` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F2A_tcc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc5F2A_tcc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()) 

### define TAG_5F2D_LANGUAGE

```
#define TAG_5F2D_LANGUAGE 0x5F2Du
```

Language Preference (**5F2D**)    used as `T_5F2D_Lang_Pref` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_5F30_SERVICE_CODE

```
#define TAG_5F30_SERVICE_CODE 0x5F30u
```

Service Code (**5F30**) 

### define TAG_5F34_PAN_SEQUENCE_NB

```
#define TAG_5F34_PAN_SEQUENCE_NB 0x5F34u
```

PAN Sequence Number (**5F34**)    used as `T_5F34_PANSequenceNo` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_5F36_TRANS_CURRENCY_EXP

```
#define TAG_5F36_TRANS_CURRENCY_EXP 0x5F36u
```

Transaction Currency Exponent (**5F36**)    Configured with `Exp_Trans` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) (for DCC possibly in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)). Used as `T_5F36_Trx_Currency_Exp` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), `puc5F36_tce` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc5F36_tce` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()) 

### define TAG_5F50_ISSUER_URL

```
#define TAG_5F50_ISSUER_URL 0x5F50u
```

Issuer URL (**5F50**) 

### define TAG_5F53_IBAN

```
#define TAG_5F53_IBAN 0x5F53u
```

International Bank Account Number (IBAN) (**5F53**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IBAN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iban). 

### define TAG_5F54_BIC

```
#define TAG_5F54_BIC 0x5F54u
```

Bank Identifier Code (BIC) (**5F54**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::BIC](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-bic). 

### define TAG_5F55_ISSUER_COUNTRY_2

```
#define TAG_5F55_ISSUER_COUNTRY_2 0x5F55u
```

Issuer Country Code (alpha 2 format) (**5F55**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::country2](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country2). 

### define TAG_5F56_ISSUER_COUNTRY_3

```
#define TAG_5F56_ISSUER_COUNTRY_3 0x5F56u
```

Issuer Country Code (alpha 3 format) (**5F56**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::country3](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country3). 

### define TAG_5F56_ISSUER_COUNTRY_CODE

```
#define TAG_5F56_ISSUER_COUNTRY_CODE 0x5F56u
```

Issuer Country Code (**5F56**) 

### define TAG_5F57_ACCOUNT_TYPE

```
#define TAG_5F57_ACCOUNT_TYPE 0x5F57u
```

Account Type (**5F57**) 

### define TAG_61_APP_TEMPLATE

```
#define TAG_61_APP_TEMPLATE 0x61u
```

Application Template (**61**) 

### define TAG_6F_FCI_TEMPLATE

```
#define TAG_6F_FCI_TEMPLATE 0x6Fu
```

File Control Information (FCI) Template (**6F**) 

### define TAG_70_AEF_DATA_TEMPLATE

```
#define TAG_70_AEF_DATA_TEMPLATE 0x70u
```

AEF Data Template (**70**) 

### define TAG_71_ISS_SCRIPT_TPLT_1

```
#define TAG_71_ISS_SCRIPT_TPLT_1 0x71u
```

Issuer Script Template 1 (**71**) 

### define TAG_72_ISS_SCRIPT_TPLT_2

```
#define TAG_72_ISS_SCRIPT_TPLT_2 0x72u
```

Issuer Script Template 2 (**72**) 

### define TAG_73_DIR_DISCR_TEMPLATE

```
#define TAG_73_DIR_DISCR_TEMPLATE 0x73u
```

[Directory](class_directory.md) Discretionary Template (**73**) 

### define TAG_77_RS_MSG_TPLT_FRMT_2

```
#define TAG_77_RS_MSG_TPLT_FRMT_2 0x77u
```

Response Message Template Format 2 (**77**) 

### define TAG_80_RS_MSG_TPLT_FRMT_1

```
#define TAG_80_RS_MSG_TPLT_FRMT_1 0x80u
```

Response Message Template Format 1 (**80**) 

### define TAG_81_BIN_AMOUNT_AUTH

```
#define TAG_81_BIN_AMOUNT_AUTH 0x81u
```

Amount Authorization Binary (**81**) 

### define TAG_82_AIP

```
#define TAG_82_AIP 0x82u
```

Application Interchange Profile (**82**)    used as `T_82_AIP` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_83_CMD_TPLT

```
#define TAG_83_CMD_TPLT 0x83u
```

Command Template (**83**) 

### define TAG_84_DF_NAME

```
#define TAG_84_DF_NAME 0x84u
```

Dedicated File Name (**84**)    used as `T_84_DFName` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_86_ISS_SCRIPT_CMD

```
#define TAG_86_ISS_SCRIPT_CMD 0x86u
```

Issuer Script Command (**86**) 

### define TAG_87_APP_PRIORITY_ID

```
#define TAG_87_APP_PRIORITY_ID 0x87u
```

Application Priority Indicator (**87**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::API](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-api). 

### define TAG_88_SHORT_FILE_ID

```
#define TAG_88_SHORT_FILE_ID 0x88u
```

Short File Identifier (SFI) (**88**) 

### define TAG_89_AUTH_CODE

```
#define TAG_89_AUTH_CODE 0x89u
```

Authorization Code (**89**)    used as `AuthorizationCode` in [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md). 

### define TAG_8A_AUTH_RESP_CODE

```
#define TAG_8A_AUTH_RESP_CODE 0x8Au
```

Authorization Response Code (**8A**)    used as `AuthResp` in [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md). 

### define TAG_8C_CDOL_1

```
#define TAG_8C_CDOL_1 0x8Cu
```

CDOL 1 (**8C**) 

### define TAG_8D_CDOL_2

```
#define TAG_8D_CDOL_2 0x8Du
```

CDOL 2 (**8D**) 

### define TAG_8E_CVM_LIST

```
#define TAG_8E_CVM_LIST 0x8Eu
```

Cardholder Verification Method List (**8E**) 

### define TAG_8F_CERTIF_AUTH_PK_ID

```
#define TAG_8F_CERTIF_AUTH_PK_ID 0x8Fu
```

Certification Autority Public key Index (**8F**) 

### define TAG_90_ISS_PK_CERTIF

```
#define TAG_90_ISS_PK_CERTIF 0x90u
```

Issuer Public Key Certificate (**90**) 

### define TAG_91_ISS_AUTH_DATA

```
#define TAG_91_ISS_AUTH_DATA 0x91u
```

Issuer Authentication Data (**91**)    used as `AuthData` in [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md). 

### define TAG_92_ISS_PK_REMAINDER

```
#define TAG_92_ISS_PK_REMAINDER 0x92u
```

Issuer Public Key Remainder (**92**) 

### define TAG_93_SGND_STAT_APP_DATA

```
#define TAG_93_SGND_STAT_APP_DATA 0x93u
```

Signed Static Application Data (**93**) 

### define TAG_94_AFL

```
#define TAG_94_AFL 0x94u
```

Application File Locator (**94**) 

### define TAG_95_TVR

```
#define TAG_95_TVR 0x95u
```

Terminal Verification Result (**95**)    used as `T_95_TVR` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_97_TDOL

```
#define TAG_97_TDOL 0x97u
```

TDOL (**97**) 

### define TAG_98_TC_HASH_VALUE

```
#define TAG_98_TC_HASH_VALUE 0x98u
```

Transaction Certificate Hash Value (**98**) 

### define TAG_99_TRANS_PIN_DATA

```
#define TAG_99_TRANS_PIN_DATA 0x99u
```

Transaction PIN Data (**99**) 

### define TAG_9A_TRANS_DATE

```
#define TAG_9A_TRANS_DATE 0x9Au
```

Transaction Date (**9A**)    used as `T_9A_Date` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md), and `Date` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md). 

### define TAG_9B_TSI

```
#define TAG_9B_TSI 0x9Bu
```

Transaction Status Information (**9B**)    used as `T_9B_TSI` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9C_TRANS_TYPE

```
#define TAG_9C_TRANS_TYPE 0x9Cu
```

Transaction Type (**9C**)    used as `TransType` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `T_9C_TransType` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9D_DDF_NAME

```
#define TAG_9D_DDF_NAME 0x9Du
```

[Directory](class_directory.md) Definition File Name (**9D**) 

### define TAG_9F01_ACQ_ID

```
#define TAG_9F01_ACQ_ID 0x9F01u
```

Acquirer Identifier (**9F01**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01), [EMV_CTLS_APPLIDATA_AK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01), [EMV_CTLS_APPLIDATA_JK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)


### define TAG_9F02_NUM_AMOUNT_AUTH

```
#define TAG_9F02_NUM_AMOUNT_AUTH 0x9F02u
```

Amount Authorized (Numeric) (**9F02**)    used as `Betrag_num` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `puc9F02_amount` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc9F02_amount` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()) 

### define TAG_9F03_NUM_AMOUNT_OTHER

```
#define TAG_9F03_NUM_AMOUNT_OTHER 0x9F03u
```

Amount Other (Numeric) (**9F03**) 

### define TAG_9F04_BIN_AMOUNT_OTHER

```
#define TAG_9F04_BIN_AMOUNT_OTHER 0x9F04u
```

Amount Other (Binary) (**9F04**)    used as `T_9F06_AID` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F05_APP_DISCR_DATA

```
#define TAG_9F05_APP_DISCR_DATA 0x9F05u
```

Application Discretionary Data (**9F05**) 

### define TAG_9F06_AID

```
#define TAG_9F06_AID 0x9F06u
```

Application Identifier (AID)-terminal (**9F06**)    used as [EMV_CT_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid) and [EMV_CT_CANDIDATE_DATA_STRUCT::len9F06](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-len9f06). 

### define TAG_9F07_APP_USAGE_CONTROL

```
#define TAG_9F07_APP_USAGE_CONTROL 0x9F07u
```

Application Usage Control (**9F07**) 

### define TAG_9F08_ICC_APP_VERSION_NB

```
#define TAG_9F08_ICC_APP_VERSION_NB 0x9F08u
```

Application Version Number - ICC (**9F08**)    used as [EMV_CT_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no). 

### define TAG_9F09_TRM_APP_VERSION_NB

```
#define TAG_9F09_TRM_APP_VERSION_NB 0x9F09u
```

Application Version Number (**9F09**)    used as [EMV_CT_APPLIDATA_STRUCT::VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum), `T_9F09_VerNum` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F0A_ASRPD

```
#define TAG_9F0A_ASRPD 0x9F0Au
```

Application Selection Registered Proprietary Data (**9F0A**)    EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, ...) ID: 2 byte, L: length, 1 byte    used as [EMV_CT_CANDIDATE_DATA_STRUCT::selData](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-seldata). 

### define TAG_9F0B_CARDHOLDER_NAME_XT

```
#define TAG_9F0B_CARDHOLDER_NAME_XT 0x9F0Bu
```

Cardholder Name Extended (**9F0B**) 

### define TAG_9F0C_ISSUER_ID_EXT

```
#define TAG_9F0C_ISSUER_ID_EXT 0x9F0Cu
```

Issuer Identification Number Extended SB N°231 (**9F0C**)    used for [EMV_CT_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin) when IIN length is 4. 

### define TAG_9F0D_IAC_DEFAULT

```
#define TAG_9F0D_IAC_DEFAULT 0x9F0Du
```

Issuer Action Code - Default (**9F0D**)    used as `T_9F0D_IACDefault` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F0E_IAC_DENIAL

```
#define TAG_9F0E_IAC_DENIAL 0x9F0Eu
```

Issuer Action Code - Denial (**9F0E**)    used as `T_9F0E_IACDenial` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F0F_IAC_ONLINE

```
#define TAG_9F0F_IAC_ONLINE 0x9F0Fu
```

Issuer Action Code - Online (**9F0F**)    used as `T_9F0F_IACOnline` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F10_ISS_APP_DATA

```
#define TAG_9F10_ISS_APP_DATA 0x9F10u
```

Issuer Application Data (**9F10**)    used as `T_9F10_DataIssuer` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F11_ISS_CODE_TABLE_ID

```
#define TAG_9F11_ISS_CODE_TABLE_ID 0x9F11u
```


### define TAG_9F12_APP_PREFERRED_NAME

```
#define TAG_9F12_APP_PREFERRED_NAME 0x9F12u
```

Application Preferred Name (**9F12**)    used as `T_9F12_PreferredName` in [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F13_LAST_ONLINE_ATC

```
#define TAG_9F13_LAST_ONLINE_ATC 0x9F13u
```

Last Online ATC Register (**9F13**) 

### define TAG_9F14_LO_OFFLINE_LIMIT

```
#define TAG_9F14_LO_OFFLINE_LIMIT 0x9F14u
```

Lower Consecutive Offline Limit (**9F14**) 

### define TAG_9F15_MERCH_CATEG_CODE

```
#define TAG_9F15_MERCH_CATEG_CODE 0x9F15u
```

Merchant Category Code (**9F15**)    used as [EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey). 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_DK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_RK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)


### define TAG_9F16_MERCHANT_ID

```
#define TAG_9F16_MERCHANT_ID 0x9F16u
```

Merchant Identifier (**9F16**)    used as [EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident), `T_9F16_MerchIdent` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16)


### define TAG_9F17_PIN_TRIES_LEFT

```
#define TAG_9F17_PIN_TRIES_LEFT 0x9F17u
```

PIN Try Counter (**9F17**) 

### define TAG_9F18_ISS_SCRIPT_ID

```
#define TAG_9F18_ISS_SCRIPT_ID 0x9F18u
```

Issuer Script Identifier (**9F18**) 

### define TAG_9F1A_TRM_COUNTRY_CODE

```
#define TAG_9F1A_TRM_COUNTRY_CODE 0x9F1Au
```

Terminal Country Code (**9F1A**)    used as [EMV_CT_TERMDATA_STRUCT::TermCountryCode](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcountrycode), [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm), and [EMV_CT_TRANSRES_STRUCT::T_9F1A_TermCountryCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1a-termcountrycode). 

### define TAG_9F1B_TRM_FLOOR_LIMIT

```
#define TAG_9F1B_TRM_FLOOR_LIMIT 0x9F1Bu
```

Terminal Floor Limit (**9F1B**)    used as [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit), `puc9F1B_fl` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), and `puc9F1B_fl` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()) 

### define TAG_9F1C_TRM_ID

```
#define TAG_9F1C_TRM_ID 0x9F1Cu
```

Terminal Identification (**9F1C**)    used as [EMV_CT_APPLIDATA_STRUCT::TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident). 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_VK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_AK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_JK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_DK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_IK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_EK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_PK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_CK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_GK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_RK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_SK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_PB_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-termident-9f1c)


### define TAG_9F1D_TRM_RISK_MNGT_DATA

```
#define TAG_9F1D_TRM_RISK_MNGT_DATA 0x9F1Du
```

Terminal Risk Management Data (**9F1D**) 

### define TAG_9F1E_IFD_SERIAL_NB

```
#define TAG_9F1E_IFD_SERIAL_NB 0x9F1Eu
```

Interface Device (IFD) Serial Number (**9F1E**)    used as `SerNum` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), `T_9F1E_SerNum` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F1F_TRACK_1_DISCR_DATA

```
#define TAG_9F1F_TRACK_1_DISCR_DATA 0x9F1Fu
```

Track 1 Discretionary Data (**9F1F**) 

### define TAG_9F20_TRACK_2_DISCR_DATA

```
#define TAG_9F20_TRACK_2_DISCR_DATA 0x9F20u
```

Track 2 Discretionary Data (**9F20**) 

### define TAG_9F21_TRANS_TIME

```
#define TAG_9F21_TRANS_TIME 0x9F21u
```

Transaction Time (**9F21**)    used as `Time` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), `T_9F21_Time` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F22_CERTIF_AUTH_PK_ID

```
#define TAG_9F22_CERTIF_AUTH_PK_ID 0x9F22u
```

Certification Authority Public Key Index (**9F22**) 

### define TAG_9F23_HI_OFFLINE_LIMIT

```
#define TAG_9F23_HI_OFFLINE_LIMIT 0x9F23u
```

Upper Consecutive Offline Limit (**9F23**) 

### define TAG_9F24_PAYM_ACCOUNT_REF

```
#define TAG_9F24_PAYM_ACCOUNT_REF 0x9F24u
```

Payment Account Reference (**9F24**)    EMV Specification Bulletin No. 178, an29. 

### define TAG_9F26_APP_CRYPTOGRAM

```
#define TAG_9F26_APP_CRYPTOGRAM 0x9F26u
```

Application Cryptogram (**9F26**)    used as `T_9F26_Cryptogramm` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F27_CRYPT_INFO_DATA

```
#define TAG_9F27_CRYPT_INFO_DATA 0x9F27u
```

Cryptogram Information Data (**9F27**)    used as `T_9F27_CryptInfo` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F2D_ICC_PIN_PK_CERTIF

```
#define TAG_9F2D_ICC_PIN_PK_CERTIF 0x9F2Du
```

ICC PIN Encipherment Public Key Certificate (**9F2D**) 

### define TAG_9F2E_ICC_PIN_PK_EXP

```
#define TAG_9F2E_ICC_PIN_PK_EXP 0x9F2Eu
```

ICC PIN Encipherment Public Key Exponent (**9F2E**) 

### define TAG_9F2F_ICC_PIN_PK_REMAIN

```
#define TAG_9F2F_ICC_PIN_PK_REMAIN 0x9F2Fu
```

ICC PIN Encipherment Public Key Remainder (**9F2F**) 

### define TAG_9F32_ISS_PK_EXP

```
#define TAG_9F32_ISS_PK_EXP 0x9F32u
```

Issuer Public Key Exponent (**9F32**) 

### define TAG_9F33_TRM_CAPABILITIES

```
#define TAG_9F33_TRM_CAPABILITIES 0x9F33u
```

Terminal Capabilities (**9F33**)    used as `TermCap` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap), `T_9F33_TermCap` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

used as [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_TRANSRES_STRUCT::T_9F33_TermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f33-termcap)


### define TAG_9F34_CVM_RESULTS

```
#define TAG_9F34_CVM_RESULTS 0x9F34u
```

Cardholder Verification Method (CVM) Results (**9F34**)    used as `T_9F34_CVM_Res` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F35_TRM_TYPE

```
#define TAG_9F35_TRM_TYPE 0x9F35u
```

Terminal Type (**9F35**)    used as `TermTyp` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), `T_9F35_TermTyp` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F36_ATC

```
#define TAG_9F36_ATC 0x9F36u
```

Application Transaction Counter (ATC) (**9F36**)    used as `T_9F36_ATC` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F37_UNPREDICTABLE_NB

```
#define TAG_9F37_UNPREDICTABLE_NB 0x9F37u
```

Unpredictable Number (**9F37**)    used as `T_9F37_RandomNumber` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F38_PDOL

```
#define TAG_9F38_PDOL 0x9F38u
```

Processing Options Data Object List (PDOL) (**9F38**) 

### define TAG_9F39_POS_ENTRY_MODE

```
#define TAG_9F39_POS_ENTRY_MODE 0x9F39u
```

Point-of-Service (POS) Entry Mode (**9F39**)    used as EMV_CT_APPLIDATA_STRUCT::POS_Eing, `T_9F39_POSEntryMode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F3A_AMNT_REF_CURRENCY

```
#define TAG_9F3A_AMNT_REF_CURRENCY 0x9F3Au
```

Amount, Reference Currency (**9F3A**)    used as `Betrag_num` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md). 

### define TAG_9F3B_APP_REF_CURRENCY

```
#define TAG_9F3B_APP_REF_CURRENCY 0x9F3Bu
```

Application Reference Currency (**9F3B**) 

### define TAG_9F3C_TRANS_REF_CURRENCY

```
#define TAG_9F3C_TRANS_REF_CURRENCY 0x9F3Cu
```

Transaction Reference Currency Code (**9F3C**)    In case CommonServices request this tag EMV ADK will give back same as [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency). 

### define TAG_9F3D_TRANS_CURRENCY_EXP

```
#define TAG_9F3D_TRANS_CURRENCY_EXP 0x9F3Du
```

Transaction Reference Currency Exponent (**9F3D**)    In case CommonServices request this tag EMV ADK will give back same as [TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp). 

### define TAG_9F40_ADD_TRM_CAP

```
#define TAG_9F40_ADD_TRM_CAP 0x9F40u
```

Additional Terminal Capabilities (**9F40**)    used as `TermAddCap` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap), `T_9F40_AddTermCap` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_VK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_AK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_DK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_IK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_EK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_CK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_GK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_SK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_TRANSRES_STRUCT::T_9F40_AddTermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f40-addtermcap)


### define TAG_9F41_TRANS_SEQUENCE_NB

```
#define TAG_9F41_TRANS_SEQUENCE_NB 0x9F41u
```

Transaction Sequence Counter (**9F41**)    used as `TransCount` in [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md), `T_9F41_TransCount` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F42_APP_CURRENCY_CODE

```
#define TAG_9F42_APP_CURRENCY_CODE 0x9F42u
```

Application Currency Code (**9F42**)    used as `puc9F42_acc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()), `puc9F42_acc` in [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()) 

### define TAG_9F43_APP_REF_CURRCY_EXP

```
#define TAG_9F43_APP_REF_CURRCY_EXP 0x9F43u
```

Application Reference Currency Exponent (**9F43**) 

### define TAG_9F44_APP_CURRENCY_EXP

```
#define TAG_9F44_APP_CURRENCY_EXP 0x9F44u
```

Application Currency Exponent (**9F44**) 

### define TAG_9F45_DATA_AUTHENT_CODE

```
#define TAG_9F45_DATA_AUTHENT_CODE 0x9F45u
```

Data Authentication Code (**9F45**)    used as `T_9F45_DataAuthCode` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F46_ICC_PK_CERTIF

```
#define TAG_9F46_ICC_PK_CERTIF 0x9F46u
```

ICC Public Key Certificate (**9F46**) 

### define TAG_9F47_ICC_PK_EXP

```
#define TAG_9F47_ICC_PK_EXP 0x9F47u
```

ICC Public Key Exponent (**9F47**) 

### define TAG_9F48_ICC_PK_REMAINDER

```
#define TAG_9F48_ICC_PK_REMAINDER 0x9F48u
```

ICC Public Key Remainder (**9F48**) 

### define TAG_9F49_DDOL

```
#define TAG_9F49_DDOL 0x9F49u
```

Dynamic Data Authentication Data Object List (**9F49**) 

### define TAG_9F4A_SDA_TAG_LIST

```
#define TAG_9F4A_SDA_TAG_LIST 0x9F4Au
```

Static Data Authentication Tag List (**9F4A**) 

### define TAG_9F4B_SDA_DATA

```
#define TAG_9F4B_SDA_DATA 0x9F4Bu
```

Signed Dynamic Application Data (**9F4B**) 

### define TAG_9F4C_ICC_DYNAMIC_NB

```
#define TAG_9F4C_ICC_DYNAMIC_NB 0x9F4Cu
```

ICC Dynamic Number (**9F4C**)    used as `T_9F4C_ICCDynNumber` in [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md). 

### define TAG_9F4E_TAC_MERCHANTLOC

```
#define TAG_9F4E_TAC_MERCHANTLOC 0x9F4Eu
```

Merchant name and location (VISA VCPS 2.1.1) (**9F4E**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_PB_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)


### define TAG_A5_FCI_PROPR_TPLT

```
#define TAG_A5_FCI_PROPR_TPLT 0xA5u
```

FCI Proprietary Template (**A5**) 

### define TAG_BF0C_FCI_ISS_DISCR

```
#define TAG_BF0C_FCI_ISS_DISCR 0xBF0Cu
```

FCI Issuer Discretionary Data (**BF0C**) 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
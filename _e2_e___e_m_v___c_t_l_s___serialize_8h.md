---
title: emv/EMV_CTLS_Common/export/emv/E2E_EMV_CTLS_Serialize.h

---

# emv/EMV_CTLS_Common/export/emv/E2E_EMV_CTLS_Serialize.h



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[HEADER_SIZE](_e2_e___e_m_v___c_t_l_s___serialize_8h.md#define-header-size)**  |
|  | **[MAX_MESSAGE_SIZE](_e2_e___e_m_v___c_t_l_s___serialize_8h.md#define-max-message-size)**  |
|  | **[MAX_DATA_SIZE](_e2_e___e_m_v___c_t_l_s___serialize_8h.md#define-max-data-size)**  |
|  | **[CALLBACK_MESSAGE_SIZE](_e2_e___e_m_v___c_t_l_s___serialize_8h.md#define-callback-message-size)** <br>for unidirectional callback  |
|  | **[CALLBACK_MESSAGE_SIZE_STM32](_e2_e___e_m_v___c_t_l_s___serialize_8h.md#define-callback-message-size-stm32)** <br>Titus does not support trace callback.  |
|  | **[MIN](_e2_e___e_m_v___c_t_l_s___serialize_8h.md#define-min)**(a, b)  |
|  | **[TAG_42_ISSUER_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-42-issuer-id)** <br>Issuer Identification Number (IIN) (**42**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin).  |
|  | **[TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)** <br>Application Identifier (AID) - Card (**4F**)    used to serialize [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md).  |
|  | **[TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)** <br>Application Label (**50**)    used in callbacks [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand) and [TAG_BF0C_CTLS_CBK_APP_SELECTED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0c-ctls-cbk-app-selected).  |
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
|  | **[TAG_9F04_BIN_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f04-bin-amount-other)** <br>Amount Other (Binary) (**9F04**)    can be used to fetch [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount) as 4-byte-binary-coded value by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) |
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
|  | **[TAG_9F51_APP_CURRENCY_CODE](group___v_i_s_a___t_a_g_s.md#define-tag-9f51-app-currency-code)** <br>Application Currency Code.  |
|  | **[TAG_9F52_DEFAULT_ACTION](group___v_i_s_a___t_a_g_s.md#define-tag-9f52-default-action)** <br>Application Default Action (ADA)  |
|  | **[TAG_9F53_CONSECUTIVE_LIM_TRANS_INT](group___v_i_s_a___t_a_g_s.md#define-tag-9f53-consecutive-lim-trans-int)** <br>Consecutive Transaction Limit (International)  |
|  | **[TAG_9F54_CUMULATIVE_TRANS_LIMET](group___v_i_s_a___t_a_g_s.md#define-tag-9f54-cumulative-trans-limet)** <br>Cumulative Total Transaction Amount Limit.  |
|  | **[TAG_9F56_ISS_AUTH_INCATOR](group___v_i_s_a___t_a_g_s.md#define-tag-9f56-iss-auth-incator)** <br>Issuer Authentication Indicator.  |
|  | **[TAG_9F5A_APP_PROGRAM_ID](group___v_i_s_a___t_a_g_s.md#define-tag-9f5a-app-program-id)** <br>Application Program Identifier.  |
|  | **[TAG_9F5D_VISA_AOSA](group___v_i_s_a___t_a_g_s.md#define-tag-9f5d-visa-aosa)** <br>Contactless: Available Offline Spending Amount (AOSA)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F5D_CL_VISA_AOSA](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f5d-cl-visa-aosa).  |
|  | **[TAG_9F66_TTQ](group___v_i_s_a___t_a_g_s.md#define-tag-9f66-ttq)** <br>VISA TTQ (Contactless only)  |
|  | **[TAG_9F6C_VISA_CTQ](group___v_i_s_a___t_a_g_s.md#define-tag-9f6c-visa-ctq)** <br>VISA CTQ (Contactless only)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F6C_CL_VISA_CTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f6c-cl-visa-ctq).  |
|  | **[TAG_9F6D_TRM_APP_VERSION_NB](group___v_i_s_a___t_a_g_s.md#define-tag-9f6d-trm-app-version-nb)** <br>Terminal application version number.  |
|  | **[TAG_DF04_PK_CVM_REQUIREMENTS](group___v_i_s_a___t_a_g_s.md#define-tag-df04-pk-cvm-requirements)** <br>Visa Asia/Pacific: CVM requirements, see [EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-cvmrequirements-df04).  |
|  | **[TAG_DF02_PK_FLOOR_LIMIT](group___v_i_s_a___t_a_g_s.md#define-tag-df02-pk-floor-limit)** <br>Visa Asia/Pacific: Floor limit, see [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-df02).  |
|  | **[TAG_DF01_PK_CVM_REQ_LIMIT](group___v_i_s_a___t_a_g_s.md#define-tag-df01-pk-cvm-req-limit)** <br>Visa Asia/Pacific: CVM required limit, see [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-df01).  |
|  | **[TAG_9F53_TRANS_CATEGORY_CODE](group___m_c___t_a_g_s.md#define-tag-9f53-trans-category-code)** <br>Transaction Category Code  |
|  | **[TAG_9F5E_DS_ID](group___m_c___t_a_g_s.md#define-tag-9f5e-ds-id)** <br>Data Storage ID = Application PAN (without any 'F' padding) & Application PAN Sequence Number.  |
|  | **[TAG_9F6B_TRACK2_DATA](group___m_c___t_a_g_s.md#define-tag-9f6b-track2-data)** <br>Track 2 Data contains the data objects of the track 2 according to [ISO/IEC 7813], excluding start sentinel, end sentinel and LRC.  |
|  | **[TAG_9F6D_TRM_APP_MSR_VERSION_NB](group___m_c___t_a_g_s.md#define-tag-9f6d-trm-app-msr-version-nb)** <br>Terminal application MSR version number    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-msrversionnumber-9f6d).  |
|  | **[TAG_9F6E_DEVICE_TYPE_INDICATOR](group___m_c___t_a_g_s.md#define-tag-9f6e-device-type-indicator)** <br>Amex device type indicator    used as [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexterminaltransactioncapabilities-9f6e).  |
|  | **[TAG_DF8104_BALANCE_BEFORE](group___m_c___t_a_g_s.md#define-tag-df8104-balance-before)** <br>Balance Read Before Gen AC    used as [EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance).  |
|  | **[TAG_DF8105_BALANCE_AFTER](group___m_c___t_a_g_s.md#define-tag-df8105-balance-after)** <br>Balance Read After Gen AC    used as [EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance).  |
|  | **[TAG_DF8106_DE_DATA_NEEDED](group___m_c___t_a_g_s.md#define-tag-df8106-de-data-needed)** <br>DataExchange, data needed, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange).  |
|  | **[TAG_DF810C_KERNEL_ID](group___m_c___t_a_g_s.md#define-tag-df810c-kernel-id)** <br>MasterCard Kernel ID    used in [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelid-df810c).  |
|  | **[TAG_DF8115_ERROR_INDICATION](group___m_c___t_a_g_s.md#define-tag-df8115-error-indication)** <br>MasterCard Error Indication (part of Discretionary Data)  |
|  | **[TAG_DF8116_UI_DATA](group___m_c___t_a_g_s.md#define-tag-df8116-ui-data)** <br>User Interface Request Data.  |
|  | **[TAG_DF8117_CARD_DATA_INPUT_CAPABILITY](group___m_c___t_a_g_s.md#define-tag-df8117-card-data-input-capability)** <br>Card data input capability (same as Terminal capability, byte 1)    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-carddatainputcapability-df8117).  |
|  | **[TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED](group___m_c___t_a_g_s.md#define-tag-df8118-cvm-capability--cvm-required)** <br>CVM Capability - CVM Required    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-abovelimit-df8118).  |
|  | **[TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED](group___m_c___t_a_g_s.md#define-tag-df8119-cvm-capability--no-cvm-required)** <br>CVM Capability - No CVM Required    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-belowlimit-df8119).  |
|  | **[TAG_DF811B_KERNEL_CONFIGURATION](group___m_c___t_a_g_s.md#define-tag-df811b-kernel-configuration)** <br>Kernel Configuration    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b).  |
|  | **[TAG_DF811C_TRN_TXN_LIFETIME](group___m_c___t_a_g_s.md#define-tag-df811c-trn-txn-lifetime)** <br>Torn transaction life time    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionlifetime-df811c).  |
|  | **[TAG_DF811D_TRN_TXN_NUMBER](group___m_c___t_a_g_s.md#define-tag-df811d-trn-txn-number)** <br>Torn transaction max. number    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionnumber-df811d).  |
|  | **[TAG_DF811E_MSR_CVM_ABOVE_LIMIT](group___m_c___t_a_g_s.md#define-tag-df811e-msr-cvm-above-limit)** <br>Mag-stripe CVM Capability - CVM Required.  |
|  | **[TAG_DF811F_SECURITY_CAPABILITY](group___m_c___t_a_g_s.md#define-tag-df811f-security-capability)** <br>Security Capability    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-securitycapability-df811f).  |
|  | **[TAG_DF8120_TAC_DEFAULT](group___m_c___t_a_g_s.md#define-tag-df8120-tac-default)** <br>TAC Default    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdefault-df8120).  |
|  | **[TAG_DF8121_TAC_DENIAL](group___m_c___t_a_g_s.md#define-tag-df8121-tac-denial)** <br>TAC Denial    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdenial-df8121).  |
|  | **[TAG_DF8122_TAC_ONLINE](group___m_c___t_a_g_s.md#define-tag-df8122-tac-online)** <br>TAC Online    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-taconline-df8122).  |
|  | **[TAG_DF8123_FLOOR_LIMIT](group___m_c___t_a_g_s.md#define-tag-df8123-floor-limit)** <br>Reader Contactless Floor Limit    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-floorlimit-df8123).  |
|  | **[TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM](group___m_c___t_a_g_s.md#define-tag-df8124-reader-ctls-trx-limit--no-on-dev-cvm)** <br>Reader Contactless Transaction Limit (No On-device CVM)    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitnoondevice-df8124).  |
|  | **[TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM](group___m_c___t_a_g_s.md#define-tag-df8125-reader-ctls-trx-limit--on-device-cvm)** <br>Reader Contactless Transaction Limit (On-device CVM)    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitondevice-df8125).  |
|  | **[TAG_DF8126_CVM_REQUIRED_LIMIT](group___m_c___t_a_g_s.md#define-tag-df8126-cvm-required-limit)** <br>Reader Contactless CVM Required Limit    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126).  |
|  | **[TAG_DF8129_OUTCOME_P_SET](group___m_c___t_a_g_s.md#define-tag-df8129-outcome-p-set)** <br>Outcome Parameter Set.  |
|  | **[TAG_DF812C_MSR_CVM_BELOW_LIMIT](group___m_c___t_a_g_s.md#define-tag-df812c-msr-cvm-below-limit)** <br>Mag-stripe CVM Capability - No CVM Required.  |
|  | **[TAG_DF812D_MESSAGE_HOLD_TIME](group___m_c___t_a_g_s.md#define-tag-df812d-message-hold-time)** <br>Message Hold Time    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d).  |
|  | **[TAG_DF8130_HOLD_TIME_VALUE](group___m_c___t_a_g_s.md#define-tag-df8130-hold-time-value)** <br>Hold Time Value    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-holdtimevalue-df8130).  |
|  | **[TAG_DF8131_PHONE_MSG_TABLE](group___m_c___t_a_g_s.md#define-tag-df8131-phone-msg-table)** <br>Phone Message Table    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-phonemessagetable-df8131).  |
|  | **[TAG_DF8112_TAGS_TO_READ](group___m_c___t_a_g_s.md#define-tag-df8112-tags-to-read)** <br>Tags To Read    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstoread-df8112).  |
|  | **[TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC](group___m_c___t_a_g_s.md#define-tag-ff8102-tags-to-write-before-gen-ac)** <br>Tags To Write Before Gen AC    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowritebeforegenac-ff8102).  |
|  | **[TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC](group___m_c___t_a_g_s.md#define-tag-ff8103-tags-to-write-after-gen-ac)** <br>Tags To Write After Gen AC    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowriteaftergenac-ff8103).  |
|  | **[TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG](group___m_c___t_a_g_s.md#define-tag-df8110-proceed-to-first-write-flag)** <br>Proceed To First Write Flag    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-proceedtofirstwriteflag-df8110).  |
|  | **[TAG_DF810D_DSVN_TERM](group___m_c___t_a_g_s.md#define-tag-df810d-dsvn-term)** <br>DSVN Term.  |
|  | **[TAG_9F5C_DS_REQUESTED_OPERATOR_ID](group___m_c___t_a_g_s.md#define-tag-9f5c-ds-requested-operator-id)** <br>DS Requested Operator ID    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-dsrequestedoperatorid-9f5c).  |
|  | **[TAG_DF8127_DE_TIMEOUT_VALUE](group___m_c___t_a_g_s.md#define-tag-df8127-de-timeout-value)** <br>Data Exchange Time Out Value    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-detimeoutvalue-df8127).  |
|  | **[TAG_DF8132_RR_MIN_GRACE_PERIOD](group___m_c___t_a_g_s.md#define-tag-df8132-rr-min-grace-period)** <br>Minimum Relay Resistance Grace Period [1/100 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-mingraceperiod-df8132).  |
|  | **[TAG_DF8133_RR_MAX_GRACE_PERIOD](group___m_c___t_a_g_s.md#define-tag-df8133-rr-max-grace-period)** <br>Maximum Relay Resistance Grace Period [1/100 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-maxgraceperiod-df8133).  |
|  | **[TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU](group___m_c___t_a_g_s.md#define-tag-df8134-rr-term-expected-trans-time-capdu)** <br>Terminal Expected Transmission Time For Relay Resistance C-APDU [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-capdu-df8134).  |
|  | **[TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU](group___m_c___t_a_g_s.md#define-tag-df8135-rr-term-expected-trans-time-rapdu)** <br>Terminal Expected Transmission Time For Relay Resistance R-APDU [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-rapdu-df8135).  |
|  | **[TAG_DF8136_RR_ACCURACY_THRESHOLD](group___m_c___t_a_g_s.md#define-tag-df8136-rr-accuracy-threshold)** <br>Relay Resistance Accuracy Threshold [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-accuracythreshold-df8136).  |
|  | **[TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD](group___m_c___t_a_g_s.md#define-tag-df8137-rr-trans-time-mismatch-threshold)** <br>Relay Resistance Transmission Time Mismatch Threshold [%]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchthreshold-df8137).  |
|  | **[TAG_DF8306_RR_MEASURED_TIME](group___m_c___t_a_g_s.md#define-tag-df8306-rr-measured-time)** <br>Measured Relay Resistance Processing Time.  |
|  | **[TAG_9F7C_MERCHANT_CUSTOM_DATA](group___m_c___t_a_g_s.md#define-tag-9f7c-merchant-custom-data)** <br>Merchant Custom Data    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcustomdata-9f7c).  |
|  | **[TAG_FF8104_DE_DATA_TO_SEND](group___m_c___t_a_g_s.md#define-tag-ff8104-de-data-to-send)** <br>DataExchange, data to send, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange).  |
|  | **[TAG_FF8105_DATA_RECORD](group___m_c___t_a_g_s.md#define-tag-ff8105-data-record)** <br>Data Record, The Data Record is a list of TLV encoded data objects returned with the Outcome Parameter Set on the completion of transaction processing.  |
|  | **[TAG_9F53_TRM_INTERCHANGE_PROFILE](group___j_k___t_a_g_s.md#define-tag-9f53-trm-interchange-profile)** <br>Terminal Interchange Profile.  |
|  | **[TAG_9F58_MERCH_TYPE_INDICATOR](group___i_n_t_e_r_a_c___t_a_g_s.md#define-tag-9f58-merch-type-indicator)** <br>Merchant type indicator, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantTypeIndicator_9F58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchanttypeindicator-9f58).  |
|  | **[TAG_9F59_TERM_TRANS_INFO](group___i_n_t_e_r_a_c___t_a_g_s.md#define-tag-9f59-term-trans-info)** <br>Terminal transaction Information, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionInformation_9F59](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactioninformation-9f59).  |
|  | **[TAG_9F5A_TERM_TRANS_TYPE](group___i_n_t_e_r_a_c___t_a_g_s.md#define-tag-9f5a-term-trans-type)** <br>Terminal transaction type, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionType_9F5A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactiontype-9f5a).  |
|  | **[TAG_9F5E_TERM_OPTION_STATUS](group___i_n_t_e_r_a_c___t_a_g_s.md#define-tag-9f5e-term-option-status)** <br>Terminal option status, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalOptionStatus_9F5E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaloptionstatus-9f5e).  |
|  | **[TAG_9F5F_READER_CTLS_FLOOR_LIMIT](group___i_n_t_e_r_a_c___t_a_g_s.md#define-tag-9f5f-reader-ctls-floor-limit)** <br>Contactless floor limit, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessFloorLimit_9F5F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-9f5f).  |
|  | **[TAG_9F5D_TERM_CTLS_RECEIPT_REQUIRED_LIMIT](group___i_n_t_e_r_a_c___t_a_g_s.md#define-tag-9f5d-term-ctls-receipt-required-limit)** <br>Contactless receipt required limit, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::ReceiptRequiredLimit_9F5D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-receiptrequiredlimit-9f5d).  |
|  | **[TAG_9F6D_AMEX_CAPABILITIES](group___e_x_p_r_e_s_s_p_a_y___t_a_g_s.md#define-tag-9f6d-amex-capabilities)** <br>Not used anymore in contactless interface.  |
|  | **[TAG_9F6E_AMEX_ENHANCED_CAPABILITIES](group___e_x_p_r_e_s_s_p_a_y___t_a_g_s.md#define-tag-9f6e-amex-enhanced-capabilities)** <br>Not used anymore in contactless interface.  |
|  | **[TAG_9F71_PURE_GDDOL_RESULTS](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-9f71-pure-gddol-results)** <br>GDDOL Resulting Buffer. Its content is the result of the concatenation of the data elements listed in GDDOL. See [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data).  |
|  | **[TAG_9F74_PURE_DATA_UPDATE_RESULT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-9f74-pure-data-update-result)** <br>Data Elements Update Result. Result of the data element update requested by the reader using Memory Slot Update Template. See [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data).  |
|  | **[TAG_9F76_PURE_TERM_TRX_DATA](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-9f76-pure-term-trx-data)** <br>Terminal transaction data.  |
|  | **[TAG_BF70_PURE_PUT_DATA_MSUT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-bf70-pure-put-data-msut)** <br>Used in [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data).  |
|  | **[TAG_BF71_PURE_GET_DATA_MSRT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-bf71-pure-get-data-msrt)** <br>Memory Slot Read Template. This data element provides to the PURE kernel, the list of data elements to read. Used in [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data).  |
|  | **[TAG_C0_TRM_CL_CVM_LIMIT](group___v_e_r_i___t_a_g_s.md#define-tag-c0-trm-cl-cvm-limit)** <br>CVM limit.  |
|  | **[TAG_C1_TRM_CL_CEIL_LIMIT](group___v_e_r_i___t_a_g_s.md#define-tag-c1-trm-cl-ceil-limit)** <br>Ceiling limit (Contactless transaction limit)  |
|  | **[TAG_C2_TRM_CL_MODES](group___v_e_r_i___t_a_g_s.md#define-tag-c2-trm-cl-modes)**  |
|  | **[TAG_C3_INDEX](group___v_e_r_i___t_a_g_s.md#define-tag-c3-index)**  |
|  | **[TAG_C4_APP_PRG_ID_LEN](group___v_e_r_i___t_a_g_s.md#define-tag-c4-app-prg-id-len)**  |
|  | **[TAG_C5_APP_PRG_ID](group___v_e_r_i___t_a_g_s.md#define-tag-c5-app-prg-id)**  |
|  | **[TAG_C6_TXN_LIMIT](group___v_e_r_i___t_a_g_s.md#define-tag-c6-txn-limit)**  |
|  | **[TAG_C7_LED_ID](group___v_e_r_i___t_a_g_s.md#define-tag-c7-led-id)** <br>[EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led): `ucLedId`.  |
|  | **[TAG_C8_LED_STATE](group___v_e_r_i___t_a_g_s.md#define-tag-c8-led-state)** <br>[EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led): `ucLedState` resp. [TAG_BF10_CTLS_CBK_LEDS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf10-ctls-cbk-leds).  |
|  | **[TAG_C9_POLL_TIMEOUT](group___v_e_r_i___t_a_g_s.md#define-tag-c9-poll-timeout)** <br>[EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout).  |
|  | **[TAG_CA_DRL_ON_OFF](group___v_e_r_i___t_a_g_s.md#define-tag-ca-drl-on-off)** <br>EMV_CTLS_VISA_DRL_STRUCT::OnOffSwitch.  |
|  | **[TAG_CB_BEEP_SCENARIO](group___v_e_r_i___t_a_g_s.md#define-tag-cb-beep-scenario)** <br>Buzzer scenario in callback [TAG_BF19_CTLS_CBK_BEEP](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf19-ctls-cbk-beep).  |
|  | **[TAG_FA_VISA_DRL_RISK](group___v_e_r_i___t_a_g_s.md#define-tag-fa-visa-drl-risk)**  |
|  | **[TAG_FB_PP3_PMSG_TABLE](group___v_e_r_i___t_a_g_s.md#define-tag-fb-pp3-pmsg-table)**  |
|  | **[TAG_FC_EP_BF0C_FINAL_SELECT](group___v_e_r_i___t_a_g_s.md#define-tag-fc-ep-bf0c-final-select)** <br>BF0C from SELECT response, can be used with [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) |
|  | **[TAG_FD_AMEX_DRL_RISK](group___v_e_r_i___t_a_g_s.md#define-tag-fd-amex-drl-risk)**  |
|  | **[TAG_E2_FORMAT_B](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e2-format-b)** <br>Format: Binary.  |
|  | **[TAG_E3_FORMAT_N](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e3-format-n)** <br>Format: Numeric.  |
|  | **[TAG_E4_FORMAT_CN](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e4-format-cn)** <br>Format: Compressed Numeric.  |
|  | **[TAG_E5_FORMAT_A](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e5-format-a)** <br>Format: Alphabetic.  |
|  | **[TAG_E6_FORMAT_AN](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e6-format-an)** <br>Format: Alpha Numeric.  |
|  | **[TAG_E7_FORMAT_ANS](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e7-format-ans)** <br>Format: Alphanumeric Special data elements.  |
|  | **[TAG_F0_EMV_TEMPLATE](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-f0-emv-template)** <br>All BER TLV streams are packed in this tag.  |
|  | **[TAG_DOM_CHIP](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-dom-chip)** <br>Contact only: Domestic chip applications.  |
|  | **[TAG_FALLBACK_MSR](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-fallback-msr)** <br>Contact only: MSR data.  |
|  | **[TAG_CAND_LIST](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-cand-list)** <br>Contact only: Candidate list.  |
|  | **[TAG_KEY](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-key)** <br>CAP keys, usd to enclose data of [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md).  |
|  | **[TAG_HOTLIST](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-hotlist)** <br>Hot list, used as [EMV_CTLS_TERMDATA_STRUCT::Hotlist](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hotlist).  |
|  | **[TAG_FF10_DE_DET_DATA](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff10-de-det-data)** <br>DataExchange, constructed tag for DET data, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange).  |
|  | **[TAG_EXCLUDE_COMBO](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-exclude-combo)** <br>used to serialise data from [EMV_CTLS_APPS_SELECT_TYPE::ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos) |
|  | **[TAG_FF8F13_SIGNAL_MSG](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f13-signal-msg)** <br>PayPass 3, tag for reading list of User Interface Request Signals with [EMV_CTLS_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags).  |
|  | **[TAG_FF8F14_SIGNAL_OUT](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f14-signal-out)** <br>PayPass 3, tag for reading list of Outcome Signals with [EMV_CTLS_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags).  |
|  | **[TAG_FF8013_SIGNAL_MSG](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8013-signal-msg)**  |
|  | **[TAG_FF8014_SIGNAL_OUT](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8014-signal-out)**  |
|  | **[TAG_FFDC01_LOG_ENTRY_1](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc01-log-entry-1)** <br>1st Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC02_LOG_ENTRY_2](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc02-log-entry-2)** <br>2nd Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC03_LOG_ENTRY_3](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc03-log-entry-3)** <br>3rd Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC04_LOG_ENTRY_4](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc04-log-entry-4)** <br>4th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC05_LOG_ENTRY_5](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc05-log-entry-5)** <br>5th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC06_LOG_ENTRY_6](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc06-log-entry-6)** <br>6th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC07_LOG_ENTRY_7](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc07-log-entry-7)** <br>7th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC08_LOG_ENTRY_8](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc08-log-entry-8)** <br>8th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC09_LOG_ENTRY_9](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc09-log-entry-9)** <br>9th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC0A_LOG_ENTRY_A](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0a-log-entry-a)** <br>10th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC0B_LOG_ENTRY_B](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0b-log-entry-b)** <br>11th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC0C_LOG_ENTRY_C](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0c-log-entry-c)** <br>12th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC0D_LOG_ENTRY_D](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0d-log-entry-d)** <br>13th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC0E_LOG_ENTRY_E](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0e-log-entry-e)** <br>14th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_FFDC0F_LOG_ENTRY_F](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0f-log-entry-f)** <br>15th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md).  |
|  | **[TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)** <br>Tag for ISO data.  |
|  | **[TAG_TRACE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-trace)** <br>Tag for trace data.  |
|  | **[TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)** <br>CAP Key Number of Keys, 1 byte 0...255.  |
|  | **[TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)** <br>AID in [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md), TRM_SetAppliData(), TRM_GetAppliData(), TRM_SelAppli(), TRM_ReduceCandidateList()  |
|  | **[TAG_DF05_BUILD_APPLILIST](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df05-build-applilist)** <br>not applicable for CTLS  |
|  | **[TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)** <br>L1 reader options  `ucOptions` in [EMV_CTLS_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartiso) |
|  | **[TAG_DF07_UNCRIT_SCR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df07-uncrit-scr)** <br>Script results of uncritical scripts in response to [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) [EMV_CTLS_TRANSRES_STRUCT::ScriptResults](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults).  |
|  | **[TAG_DF08_CRIT_SCR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df08-crit-scr)** <br>Script results of uncritical scripts  `Future` use.  |
|  | **[TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index)** <br>CAP Key Index  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index),    Index in [EMV_CTLS_CAPKEY_STRUCT::Index](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index),    XML Tag: [XML_TAG_CAP_KEYS_INDEX](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-index).  |
|  | **[TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid)** <br>CAP Key RID  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid),    RID in [EMV_CTLS_CAPKEY_STRUCT::RID](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid),    XML Tag: [XML_TAG_CAP_KEYS_RID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-rid).  |
|  | **[TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)** <br>CAP Key Modulus  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key),    Key in [EMV_CTLS_CAPKEY_STRUCT::Key](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key),    XML Tag: [XML_TAG_CAP_KEYS_KEY](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-key).  |
|  | **[TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash)** <br>CAP Key Hash  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash),    Hash in [EMV_CTLS_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash),    XML Tag: [XML_TAG_CAP_KEYS_HASH](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-hash).  |
|  | **[TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent)** <br>CAP Key Exponent  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent),    Exponent in [EMV_CTLS_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-exponent).  |
|  | **[TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl)** <br>CAP Key Certification Revocation List  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl),    RevocEntries in [EMV_CTLS_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-revoc-list).  |
|  | **[TAG_DF10_MSR_CVM_BELOW](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df10-msr-cvm-below)**  |
|  | **[TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version)** <br>Library version given back from [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version),    FrameworkVersion in [EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-framework-version).  |
|  | **[TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum)** <br>EMVCo checksum given back from [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_KERNEL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chksum-ascii-kernel).  |
|  | **[TAG_DF13_TERM_PARAM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df13-term-param)**  |
|  | **[TAG_DF14_ADD_TAGS_RES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df14-add-tags-res)** <br>additional tag list requested for result data  `[EMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)` |
|  | **[TAG_DF15_OFFL_ONLY_PROCESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df15-offl-only-process)**  |
|  | **[TAG_KEY_KEYLEN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-keylen)** <br>CAP Key key length  `Struct`, `XML` Reference:    KeyLen in [EMV_CTLS_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-keylen).  |
|  | **[TAG_DF17_FALLBACK_MIDS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df17-fallback-mids)**  |
|  | **[TAG_DF18_FALLABCK](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df18-fallabck)**  |
|  | **[TAG_DF19_PARAMETER_4](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df19-parameter-4)** <br>universal tag no. 4  |
|  | **[TAG_DF1C_SPECIAL_TRX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1c-special-trx)**  |
|  | **[TAG_DF1D_PRIO_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1d-prio-appli)**  |
|  | **[TAG_DF20_ASI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df20-asi)**  |
|  | **[TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial)** <br>[EMV_CTLS_TRANSRES_STRUCT::TACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdenial).  |
|  | **[TAG_DF21_TAC_ABLEHNUNG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-ablehnung)**  |
|  | **[TAG_DF22_TAC_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df22-tac-online)** <br>[EMV_CTLS_TRANSRES_STRUCT::TACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-taconline).  |
|  | **[TAG_DF23_TAC_DEFAULT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df23-tac-default)** <br>[EMV_CTLS_TRANSRES_STRUCT::TACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdefault).  |
|  | **[TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)**  |
|  | **[TAG_DF25_MAXPERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df25-maxpercent-onl)**  |
|  | **[TAG_DF26_PERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df26-percent-onl)**  |
|  | **[TAG_DF27_DEFAULT_TDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df27-default-tdol)**  |
|  | **[TAG_DF28_DEFAULT_DDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df28-default-ddol)**  |
|  | **[TAG_DF29_ADD_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df29-add-tags)**  |
|  | **[TAG_DF2B_APP_FLOW_CAP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2b-app-flow-cap)**  |
|  | **[TAG_DF2C_ADD_TAGS_CRD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2c-add-tags-crd)**  |
|  | **[TAG_DF2D_EMV_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2d-emv-appli)**  |
|  | **[TAG_DF2E_CVM_NOT_SUPP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2e-cvm-not-supp)**  |
|  | **[TAG_DF2F_MSR_CVM_ABOVE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2f-msr-cvm-above)**  |
|  | **[TAG_DF30_RETAP_FIELD_OFF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df30-retap-field-off)**  |
|  | **[TAG_DF32_MC_BALANCE_8104](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df32-mc-balance-8104)** <br>see [EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance) |
|  | **[TAG_DF33_APPLICATION_TAG_50](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df33-application-tag-50)** <br>EMV_CTLS_STARTRES_STRUCT::T_50_ApplicationName.  |
|  | **[TAG_DF36_TRX_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df36-trx-options)** <br>EMV_CTLS_TRANSAC_STRUCT::TxnOptions.  |
|  | **[TAG_DF38_MC_BALANCE_8105](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df38-mc-balance-8105)** <br>see [EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance) |
|  | **[TAG_DF3A_FB_MSR_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3a-fb-msr-options)** <br>EMV_CTLS_APPS_SELECT_STRUCT::xFallback_MS (partially, together with [TAG_DF4C_FALLB_MSR_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4c-fallb-msr-appli))  |
|  | **[TAG_DF3A_ADD_TRM_CAP_EXT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3a-add-trm-cap-ext)** <br>[EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilitiesExt_DF3A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilitiesext-df3a): Rupay Additional Terminal Capabilities Extension.  |
|  | **[TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)** <br>universal tag no. 1    used for `numberOfAIDs` in [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework), respectively EMV_CTLS_Init_FrameworkClient()    Also used for `VirtualTermMapType` in [EMV_CTLS_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal) |
|  | **[TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)** <br>universal tag no. 2    used for options in [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework), respectively EMV_CTLS_Init_FrameworkClient()    Also used for `TLVSwitchValue` in [EMV_CTLS_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal) |
|  | **[TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)** <br>universal tag no. 3    Used for `VirtualTerminal` in [EMV_CTLS_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal) |
|  | **[TAG_DF40_FORCE_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df40-force-online)** <br>[EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[TAG_DF42_STATUS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df42-status)** <br>[EMV_CTLS_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo), also used for EMV results in callback [TAG_BF15_CBK_CARD_TAPPED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf15-cbk-card-tapped).  |
|  | **[TAG_DF44_CHIP_CVM_BELOW](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df44-chip-cvm-below)**  |
|  | **[TAG_DF45_CHIP_TXN_LIFETIME](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df45-chip-txn-lifetime)**  |
|  | **[TAG_DF46_CHIP_TXN_NO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df46-chip-txn-no)**  |
|  | **[TAG_DF48_ONLINE_SWITCH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df48-online-switch)** <br>[EMV_CTLS_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch).  |
|  | **[TAG_DF49_CEIL_LIMIT_MOBILE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df49-ceil-limit-mobile)**  |
|  | **[TAG_DF4B_DOM_CHIP_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4b-dom-chip-appli)** <br>not used in CTLS environment  |
|  | **[TAG_DF4C_FALLB_MSR_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4c-fallb-msr-appli)** <br>not used in CTLS environment  |
|  | **[TAG_DF4D_CARD_CONF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4d-card-conf)** <br>not used in CTLS environment  |
|  | **[TAG_DF4E_PASSTROUGH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4e-passtrough)** <br>EMV_CTLS_START_STRUCT::passtroughCardTypes.  |
|  | **[TAG_DF4F_CARDTYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4f-cardtype)** <br>[EMV_CTLS_TRANSRES_STRUCT::ctlsCardType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-ctlscardtype).  |
|  | **[TAG_DF50_ONL_RES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df50-onl-res)** <br>[EMV_CTLS_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult).  |
|  | **[TAG_DF52_AUTH_DATA_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df52-auth-data-cless)** <br>[EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata), duplicated by [TAG_DF52_TRM_NOCVM_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df52-trm-nocvm-limit).  |
|  | **[TAG_DF54_SCRIPT_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df54-script-cless)** <br>EMV_CTLS_HOST_STRUCT::LenScript and [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata)   Duplicated by [TAG_DF54_TRM_CTLS_LIMIT_CDCVM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df54-trm-ctls-limit-cdcvm).  |
|  | **[TAG_DF55_AC_SWITCH_IF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df55-ac-switch-if)** <br>[EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface), duplicated by [TAG_DF55_TRM_TPM_CAPABILITIES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df55-trm-tpm-capabilities).  |
|  | **[TAG_DF56_AC_ONLINE_PIN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df56-ac-online-pin)** <br>[EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-onlinepin), duplicated by [TAG_DF56_TRANSACTION_RECOVERY_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df56-transaction-recovery-limit).  |
|  | **[TAG_DF57_AC_ADD_OK_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df57-ac-add-ok-cless)** <br>[EMV_CTLS_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive).  |
|  | **[TAG_DF5D_CL_MAGSTRIPE_T2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5d-cl-magstripe-t2)** <br>reserved for CTLS magstripe data, duplicated to DF5E  |
|  | **[TAG_DF5E_CL_MAGSTRIPE_T2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5e-cl-magstripe-t2)** <br>contactless magstripe data in [EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md) |
|  | **[TAG_DF5F_ADD_APP_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5f-add-app-version)** <br>see [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no) |
|  | **[TAG_DF41_TRANSACTION_RECOVERY_CNTR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df41-transaction-recovery-cntr)** <br>MIR private kernel tag: Transaction Recovery Counter (TRC), can be used in [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) |
|  | **[TAG_DF51_TRM_FLOOR_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df51-trm-floor-limit)** <br>MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalFloorLimit_DF51](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalfloorlimit-df51).  |
|  | **[TAG_DF52_TRM_NOCVM_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df52-trm-nocvm-limit)** <br>MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalNoCVMLimit_DF52](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalnocvmlimit-df52)   Duplicated by [TAG_DF52_AUTH_DATA_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df52-auth-data-cless).  |
|  | **[TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df53-trm-ctls-limit-non-cdcvm)** <br>MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitNonCDCVM_DF53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitnoncdcvm-df53).  |
|  | **[TAG_DF54_TRM_CTLS_LIMIT_CDCVM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df54-trm-ctls-limit-cdcvm)** <br>MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitCDCVM_DF54](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitcdcvm-df54)   Duplicated by [TAG_DF54_SCRIPT_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df54-script-cless).  |
|  | **[TAG_DF55_TRM_TPM_CAPABILITIES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df55-trm-tpm-capabilities)** <br>MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalTPMCapabilities_DF55](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminaltpmcapabilities-df55)   Duplicated by [TAG_DF55_AC_SWITCH_IF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df55-ac-switch-if).  |
|  | **[TAG_DF56_TRANSACTION_RECOVERY_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df56-transaction-recovery-limit)** <br>MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TransactionRecoveryLimit_DF56](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-transactionrecoverylimit-df56)   Duplicated by [TAG_DF56_AC_ONLINE_PIN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df56-ac-online-pin).  |
|  | **[TAG_DF60_VELOCITY_ORIG_IDX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df60-velocity-orig-idx)** <br>original candidate index in the list of application before it was presented to the Velocity kernel for applications selection (The kernel changes the order of the list according to different "priority" / "partial select" rules, the index keeps the refrence to the original candidate list  |
|  | **[TAG_DF61_INF_REC_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df61-inf-rec-data)** <br>in [EMV_CTLS_STARTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data), in [EMV_CTLS_TRANSRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data) |
|  | **[TAG_DF62_BUZZER_VOLUME](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df62-buzzer-volume)** <br>Buzzer Volume, [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume).  |
|  | **[TAG_DF63_VELOCITY_EP_PRB](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df63-velocity-ep-prb)** <br>processing result bitmap from the Entry point kernel  |
|  | **[TAG_DF64_KERNEL_DEBUG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df64-kernel-debug)** <br>[EMV_CTLS_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata).  |
|  | **[TAG_KERNEL_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-kernel-version)** <br>kernel version, see [EMV_CTLS_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion) |
|  | **[TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)** <br>Configuration mode for applications and CAP keys, see [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)   Used in EMV_CTLS_SetAppliData(), EMV_CTLS_GetAppliData(), [EMV_CTLS_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-storecapkey) |
|  | **[TAG_SUPP_LANG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-supp-lang)** <br>supported languages, see [EMV_CTLS_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang) |
|  | **[TAG_ATR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-atr)** <br>not used in CTLS environment  |
|  | **[TAG_EXCLUDE_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-exclude-aid)** <br>AIDs to exclude from the configuration list for this transaction, [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids).  |
|  | **[TAG_EMV_CONFORM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-emv-conform)** <br>not used in CTLS environment  |
|  | **[TAG_DF6B_TRACK1_EQUIVALENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6b-track1-equivalent)** <br>Track 1 Equivalent Data, ASCII ..79 characters (=76 w/ or w/o start/end sentinal, LRC)  |
|  | **[TAG_DF6C_CONFIG_ID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6c-config-id)** <br>Unique id generated when terminal configuration has changed and the option [EMV_CTLS_INIT_OPT_EPP_MASTER](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-epp-master) is set.  |
|  | **[TAG_DF6D_TRY_AGAIN_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6d-try-again-limit)** <br>[EMV_CTLS_APPLIDATA_IK_STRUCT::TryAgainLimit_DF6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tryagainlimit-df6d).  |
|  | **[TAG_DF6D_MODEL_NAME](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6d-model-name)** <br>Model included in [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) and [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) derived for use with emv-desired.xml and emv-allowed.xml.  |
|  | **[TAG_DF6E_CONFIG_DESIRED](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6e-config-desired)** <br>Desired L2 kernel list to be sent from EPP master with [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata) and [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata) |
|  | **[TAG_DF6E_ADDITIONAL_UI_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6e-additional-ui-info)** <br>Tag for reading Interac additional UI info from Interac kernel via [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) (mapped to TAG_IK0A)  |
|  | **[TAG_DF6F_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6f-l1driver-version)** <br>L1 driver version given back from [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF6F_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6f-l1driver-version),    L1DriverVersion in [EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-l1driver-version).  |
|  | **[TAG_DFD002_APPNAME_CHOSEN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd002-appname-chosen)** <br>chosen application name based on the combination 9F12, 9F11, 50, application default name, up to 16 byte ASCII string  |
|  | **[TAG_DFD003_Kernel_ID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd003-kernel-id)** <br>chosen (Velocity) kernel ID based on the EP processing in combination with probable domestic processing, 3 byte binary according to the EMVCo specified kernel ID  |
|  | **[TAG_DFD004_TANSPARENT_SEND](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd004-tansparent-send)** <br>for [EMV_CTLS_TransparentSend](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend) |
|  | **[TAG_DFD005_TANSPARENT_RECEIVE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd005-tansparent-receive)** <br>for [EMV_CTLS_TransparentReceive](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive) |
|  | **[TAG_DFD006_BEEP_FREQ_SUCCESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd006-beep-freq-success)** <br>[EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencysuccess).  |
|  | **[TAG_DFD007_BEEP_FREQ_ALERT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd007-beep-freq-alert)** <br>[EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencyalert).  |
|  | **[TAG_DFD008_SECOND_TAP_DELAY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd008-second-tap-delay)** <br>[EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-secondtapdelay).  |
|  | **[TAG_DFD009_HOST_COMM_TIMEOUT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd009-host-comm-timeout)** <br>[EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hostcommunicationtimeout).  |
|  | **[TAG_DF75_CBK_APP_NO](group___t_l_v___c_b_c_k.md#define-tag-df75-cbk-app-no)** <br>If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list    index is 1-based (1=first, 2=second, ...)    also see [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand).  |
|  | **[TAG_DF76_CBK_APP_POSTPROC](group___t_l_v___c_b_c_k.md#define-tag-df76-cbk-app-postproc)** <br>Decide if post processing for the candidates applies (longest match, priority application, ...) or not    (1 byte, 1=TRUE/0=FALSE)    not supported for VFI reader    see [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand).  |
|  | **[TAG_DF6C_CBK_REPEAT](group___t_l_v___c_b_c_k.md#define-tag-df6c-cbk-repeat)** <br>Decide if ADK should repeat the callback call or not    (1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat    see [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand).  |
|  | **[TAG_DF7E_KERNEL_TO_USE](group___t_l_v___c_b_c_k.md#define-tag-df7e-kernel-to-use)** <br>Set which Kernel should be used.  |
|  | **[TAG_DF7F_CBK_COMM_ERR](group___t_l_v___c_b_c_k.md#define-tag-df7f-cbk-comm-err)** <br>During execution of callback function a communication error occured.    Indicator to be set by calling application (1 byte TRUE/FALSE value).    Will result in abort of transaction ([EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal))  |
|  | **[TAG_DF8F58_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8f58-de-request)** <br>DataExchange, type of request [Options for DataExchange request](group___c_b_c_k___d_e___r_e_q_u_e_s_t.md), used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange).  |
|  | **[TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state)** <br>DataExchange, kernel state [Options for DataExchange state](group___c_b_c_k___d_e___s_t_a_t_e.md), used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange).  |
|  | **[TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode)** <br>DataExchange, mode [Options for DataExchange mode](group___c_b_c_k___d_e___m_o_d_e.md), used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange).  |
|  | **[TAG_DF8F50_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8f50-rupay-gpo)** <br>RuPay DataExchange service shortlist before GPO, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF16_CBK_SERVICE_SHORTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf16-cbk-service-shortlist).  |
|  | **[TAG_DF8F51_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8f51-rupay-genac)** <br>RuPay DataExchange Rupay additional CDOL Parameters, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF17_CBK_SERVICE_FOR_GENAC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf17-cbk-service-for-genac).  |
|  | **[TAG_DF8F60_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8f60-led-add-info)** <br>LED callback [TAG_BF10_CTLS_CBK_LEDS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf10-ctls-cbk-leds): Additional information, see [LED callback: Additional information](group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md).  |
|  | **[TAG_DF8010_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8010-de-request)**  |
|  | **[TAG_DF8011_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8011-de-state)**  |
|  | **[TAG_DF8012_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8012-de-mode)**  |
|  | **[TAG_DF8020_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8020-rupay-gpo)**  |
|  | **[TAG_DF8021_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8021-rupay-genac)**  |
|  | **[TAG_DF8030_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8030-led-add-info)**  |
|  | **[CBCK_LED_ADD_INFO_DONT_TRACE](group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md#define-cbck-led-add-info-dont-trace)** <br>Don't trace this callback in client interface trace, reason: e.g. LED blinking would fill trace buffer with needless information.  |
|  | **[TAG_1F70_PASS_TROUGH_CARD_TYPES](_e2_e___e_m_v___c_t_l_s___serialize_8h.md#define-tag-1f70-pass-trough-card-types)**  |
|  | **[TAG_1F74_ADDITIONAL_ACTIVATE_OPTIONS_BITMAP](_e2_e___e_m_v___c_t_l_s___serialize_8h.md#define-tag-1f74-additional-activate-options-bitmap)**  |
|  | **[TAG_DF8F0A_EXIT_OPTIONS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options)** <br>Options send with Exit_Framework, see [Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md).  |
|  | **[TAG_DF8F0B_TERM_FLOW_OPTIONS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0b-term-flow-options)** <br>[EMV_CTLS_TERMDATA_STRUCT::FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions).  |
|  | **[TAG_DF8F0C_INIT_RESULT_FLAGS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0c-init-result-flags)** <br>Parameter `ulResult` in function [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework), respectively EMV_CTLS_Init_FrameworkClient()  |
|  | **[TAG_DF8F0D_SETUP_RES_TRXINFO](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0d-setup-res-trxinfo)** <br>[EMV_CTLS_STARTRES_STRUCT::TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation).  |
|  | **[TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0e-term-maxctls-translimit)** <br>[EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-maxctlstranslimit).  |
|  | **[TAG_DF8F0F_APPLYCONFIG_OPTIONS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0f-applyconfig-options)** <br>Options send with [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration), unsigned long in functional interface, please use 4 byte in the serialization.  |
|  | **[TAG_DF8F10_LED_DESIGN_WIDTH](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f10-led-design-width)** <br>LED width, parameter `width` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign) |
|  | **[TAG_DF8F11_LED_DESIGN_HEIGHT](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f11-led-design-height)** <br>LED height, parameter `height` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign) |
|  | **[TAG_DF8F12_LED_DESIGN_OFF_COL](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f12-led-design-off-col)** <br>color off LED when off, parameter `color_off` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign) |
|  | **[TAG_DF8F13_LED_DESIGN_ON_COL](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f13-led-design-on-col)** <br>color off LED when on, parameter `color_on` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign) |
|  | **[TAG_DF8F14_LED_REGION_WIDTH](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f14-led-region-width)** <br>Region width, parameter `wRegion` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign) |
|  | **[TAG_DF8F15_LED_REGION_HEIGHT](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f15-led-region-height)** <br>Region height, parameter `hRegion` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign) |
|  | **[TAG_DF8F16_LED_REGION_XCOORD](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f16-led-region-xcoord)** <br>Region upper left corner x-coordinate, parameter `xRegion` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign) |
|  | **[TAG_DF8F17_LED_REGION_YCOORD](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f17-led-region-ycoord)** <br>Region upper left corner y-coordinate, parameter `yRegion` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign) |
|  | **[TAG_DF8F18_LED_DESIGN_SHAPE](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f18-led-design-shape)** <br>Shape, parameter `shape` in [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended) |
|  | **[TAG_DF8F19_LED_DESIGN_SHAPE_PARAM](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f19-led-design-shape-param)** <br>Shape parameters, parameter `shape_params` in [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended) |
|  | **[TAG_DF8F1A_LED_DESIGN_OPTIONS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f1a-led-design-options)** <br>options, parameter `options` in [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended) |
|  | **[TAG_DF8F1B_LED_DESIGN_BG_COL](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f1b-led-design-bg-col)** <br>background color, parameter `bg_color` in [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended) |
|  | **[TAG_DF8F12_DISPLAY_TEXT](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f12-display-text)** <br>used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF14_CBK_TEXT_DISPLAY](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf14-cbk-text-display) |
|  | **[TAG_DF8F13_UI_MSG_ID](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f13-ui-msg-id)** <br>EMVCo Book A UI request message id, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF14_CBK_TEXT_DISPLAY](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf14-cbk-text-display).  |
|  | **[TAG_DF8F14_UI_MSG_ID_RESTART](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f14-ui-msg-id-restart)** <br>EMVCo Book A UI request message id for restart, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF14_CBK_TEXT_DISPLAY](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf14-cbk-text-display).  |
|  | **[TAG_DF8F20_CTLS_CARD_TPYE](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f20-ctls-card-tpye)** <br>Detailed CTLS card type, available if a CTLS non EMV card is detected,.  |
|  | **[TAG_DF8F21_CTLS_MIFARE_SN](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f21-ctls-mifare-sn)** <br>Mifare Card Serial number, available if a CTLS non EMV card is detected AND the detected card turns our as Mifare AND the card incldues a serial number.  |
|  | **[TAG_DF8F30_REQUESTED_TAGS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f30-requested-tags)** <br>for requestedTags parameter in [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) |
|  | **[TAG_DF8F40_VIRTUAL_TVR](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f40-virtual-tvr)** <br>   Also used for Epal to fetch internal kernel TVR (tag 95 is always forced to zero).  |
|  | **[TAG_DF8F41_VISA_STATUS_BITMAP](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f41-visa-status-bitmap)** <br>Visa Status Bitmap generated by Visa kernel on Transit Transaction, 3 bytes.  |
|  | **[TAG_DF8F42_DISCOVER_STATUS_BITMAP](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f42-discover-status-bitmap)** <br>Discover Status Bitmap generated by Discover Connect kernel, 4 bytes.  |
|  | **[TAG_DFAB01_KERNEL_ID](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab01-kernel-id)**  |
|  | **[TAG_DFAB02_ASI](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab02-asi)**  |
|  | **[TAG_DFAB03_APP_FLOW_CAP](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab03-app-flow-cap)**  |
|  | **[TAG_DFAB04_PRIO_APPS](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab04-prio-apps)**  |
|  | **[TAG_DFAB05_SPECIAL_TRX_CFG](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab05-special-trx-cfg)**  |
|  | **[TAG_DFAB06_CHKSUM_EP](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab06-chksum-ep)**  |
|  | **[TAG_DFAB07_CHKSUM_KERNEL](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab07-chksum-kernel)**  |
|  | **[TAG_DFAB08_RETAP_FIELD_OFF](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab08-retap-field-off)**  |
|  | **[TAG_DFAB20_ADD_TAGS_TRM](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab20-add-tags-trm)**  |
|  | **[TAG_DFAB21_ADD_TAGS_CRD](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab21-add-tags-crd)**  |
|  | **[TAG_DFAB22_DEF_APP_NAME](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab22-def-app-name)**  |
|  | **[TAG_DFAB23_INTERNAL_KERNEL_ID](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab23-internal-kernel-id)**  |
|  | **[TAG_DFAB30_TEC_SUPPORT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab30-tec-support)**  |
|  | **[TAG_DFAB31_APP_FLOW_CAP](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab31-app-flow-cap)**  |
|  | **[TAG_DFAB40_CTLS_FLOOR_LIMIT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab40-ctls-floor-limit)**  |
|  | **[TAG_DFAB41_CTLS_TRX_LIMIT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab41-ctls-trx-limit)**  |
|  | **[TAG_DFAB42_CTLS_CVM_REQ_LIMIT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab42-ctls-cvm-req-limit)**  |
|  | **[TAG_DFAB43_TAC_DEFAULT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab43-tac-default)**  |
|  | **[TAG_DFAB44_TAC_DENIAL](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab44-tac-denial)**  |
|  | **[TAG_DFAB45_TAC_ONLINE](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab45-tac-online)**  |
|  | **[TAG_DFAB46_RISK_MGMT_THRESHOLD](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab46-risk-mgmt-threshold)**  |
|  | **[TAG_DFAB47_RISK_MGMT_TRGT_PRCT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab47-risk-mgmt-trgt-prct)**  |
|  | **[TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab48-risk-mgmt-max-trgt-prct)**  |
|  | **[TAG_DFAB49_DRL_SWITCHES](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab49-drl-switches)**  |
|  | **[TAG_DFAB4A_CTLS_TRX_LIMIT_CASH](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab4a-ctls-trx-limit-cash)**  |
|  | **[TAG_DFAB4B_COMBINATION_OPTIONS](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab4b-combination-options)**  |
|  | **[TAG_DFAB4C_REMOVAL_TIMEOUT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab4c-removal-timeout)**  |
|  | **[TAG_DFAB4D_RUPAY_CALLBACK_TIMEOUT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab4d-rupay-callback-timeout)**  |
|  | **[TAG_DFAB4E_RUPAY_TORN_TRX_INTERVAL](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab4e-rupay-torn-trx-interval)**  |
|  | **[TAG_DFAB4F_PURE_CTLS_APP_KERN_CAP](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab4f-pure-ctls-app-kern-cap)**  |
|  | **[TAG_DFAB50_PURE_MTOL](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab50-pure-mtol)**  |
|  | **[TAG_DFAB51_CTLS_DEFAULT_DDOL](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab51-ctls-default-ddol)**  |
|  | **[TAG_DFAB52_AMEX_UN_RANGE](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab52-amex-un-range)**  |
|  | **[TAG_DFAB53_TERMCAP_ABOVE_CVM_LIMIT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab53-termcap-above-cvm-limit)**  |
|  | **[TAG_DFAB54_TERMCAP_BELOW_CVM_LIMIT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab54-termcap-below-cvm-limit)**  |
|  | **[TAG_DFAB55_TAC_SWITCH_INTERFACE](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab55-tac-switch-interface)**  |
|  | **[TAG_DFAB56_IAC_SWITCH_INTERFACE](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab56-iac-switch-interface)**  |
|  | **[TAG_DFAB57_MIR_DATA_EXCHANGE_TAGS](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab57-mir-data-exchange-tags)**  |
|  | **[TAG_DFAB58_ID_LIST](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab58-id-list)**  |
|  | **[TAG_DFAB59_RANGE_LIST](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab59-range-list)**  |
|  | **[TAG_DFAB5A_PURE_APPLI_AUTH_TRX_TYPE](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab5a-pure-appli-auth-trx-type)**  |
|  | **[TAG_DFAB5B_CTLS_TRX_LIMIT_ODCVM](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab5b-ctls-trx-limit-odcvm)**  |
|  | **[TAG_FFAB01_DRL_PARAMETER](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___c_o_n_s_t_r.md#define-tag-ffab01-drl-parameter)**  |
|  | **[TAG_DFDC01_SFI](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc01-sfi)** <br>SFI from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC02_RECORD_NB](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc02-record-nb)** <br>Record no. from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC03_READ_STATUS](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc03-read-status)** <br>Read status from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC04_SW12](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc04-sw12)** <br>Status word (SW1/2)from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC05_RECORD](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc05-record)** <br>Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC06_LOG_FORMAT](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc06-log-format)** <br>Format of Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDD01_L1_ISSUE](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd01-l1-issue)**  |
|  | **[TAG_DFDD02_L1_ISSUE_REASON](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd02-l1-issue-reason)**  |
|  | **[TAG_DFDD03_L1_ISSUE_COMMAND](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd03-l1-issue-command)**  |
|  | **[TAG_DFDD04_L1_LAST_COMMAND](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd04-l1-last-command)**  |
|  | **[TAG_DFDD05_L1_LAST_SW12](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfdd05-l1-last-sw12)**  |
|  | **[TAG_DFDE01_HYPERCOM_CONSTRUCTED](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfde01-hypercom-constructed)**  |
|  | **[TAG_DFDE01_KERNEL_PRIVATE_NON_BER](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfde01-kernel-private-non-ber)**  |
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
|  | **[CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt)** <br>Alternative class for requests to EMV ADK.  |
|  | **[CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)** <br>Class for ICC functions.  |
|  | **[CLA_CRD_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd-alt)** <br>Alternative class for ICC functions.  |
|  | **[CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)** <br>Class for LED functions.  |
|  | **[EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req)** <br>Class for callback requests from EMV ADK to calling application (see [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md))  |
|  | **[EMV_CTLS_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-resp)** <br>Class for callback responses (see [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md))  |
|  | **[EMV_CTLS_CLA_RET_OK](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-ret-ok)** <br>Class for Return with no error.  |
|  | **[EMV_CTLS_CLA_RET_ERROR](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-ret-error)** <br>Class for Return with error (function not available / parameter error, ...)  |
|  | **[P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)** <br>Uaed for config command, e.g. [EMV_CTLS_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata).  |
|  | **[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)** <br>Uaed for config command, e.g. [EMV_CTLS_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata).  |
|  | **[P2_CLONE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-clone)** <br>Used reading configuration data that shall be transfered to another system (internal use, serialised API only)  |
|  | **[INS_CBCK_FCT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-fct)** <br>Instruction byte used for callback functions, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req).  |
|  | **[INS_CBCK_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-crd)** <br>Instruction byte used for callbacks to cardreader, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req).  |
|  | **[INS_CBCK_TRACE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-trace)** <br>Instruction byte used for trace output, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req). Also used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) in header field passed to EMV_CTLS_IF_BERTLV for client traces.  |
|  | **[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)** <br>Instruction byte for [EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg)** <br>Instruction byte for [EMV_CTLS_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata), [EMV_CTLS_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg)** <br>Instruction byte for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific), [EMV_CTLS_GetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getapplidataschemespecific), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg)** <br>Instruction byte for [EMV_CTLS_StoreCAPKey](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-storecapkey), [EMV_CTLS_ReadCAPKeys](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-readcapkeys), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_APPLY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-apply-cfg)** <br>Instruction byte for [EMV_CTLS_ApplyConfiguration](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_GET_VER](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-get-ver)** <br>Instruction byte for [EMV_CTLS_FRAMEWORK_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-framework-getversion), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_VIRT_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-virt-cfg)** <br>Instruction byte for [EMV_CTLS_MapVirtualTerminal](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_SELECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-select)** <br>Instruction byte for [EMV_CTLS_SetupTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_TRANSAC](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-transac)** <br>Instruction byte for [EMV_CTLS_ContinueOffline](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_ONLINE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-online)** <br>Instruction byte for [EMV_CTLS_ContinueOnline](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_RFU](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-rfu)** <br>Instruction byte used in CT mode only.  |
|  | **[INS_FETCH_TAG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-tag)** <br>Instruction byte for [EMV_CTLS_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_END_TRX](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-end-trx)** <br>Instruction byte for [EMV_CTLS_EndTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-endtransaction), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CND_DATA](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cnd-data)** <br>Instruction byte for [EMV_CTLS_GetCandidateData](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_FETCH_DOL](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-dol)** <br>Instruction byte for [EMV_CTLS_fetchTxnDOL](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxndol), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_BREAK](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-break)** <br>Instruction byte for [EMV_CTLS_Break](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-break), used wih [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_ICC_RESET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-reset)** <br>Instruction byte for [EMV_CTLS_SmartReset](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_ISO](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-iso)** <br>Instruction byte for [EMV_CTLS_SmartISO](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartiso), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_OFF](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-off)** <br>Instruction byte for [EMV_CTLS_SmartPowerOff](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartpoweroff), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_TRANS](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-trans)** <br>Instruction byte for [EMV_CTLS_TransparentCommand](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentcommand), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_SEND](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-send)** <br>Instruction byte for [EMV_CTLS_TransparentSend](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_RECEIVE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-receive)** <br>Instruction byte for [EMV_CTLS_TransparentReceive](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_REMOVAL](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-removal)** <br>Instruction byte for [EMV_CTLS_CardRemoval](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-cardremoval), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_LED_SWITCH](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-switch)** <br>Instruction byte for [EMV_CTLS_LED](group___a_d_k___l_e_d.md#function-emv-ctls-led), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led).  |
|  | **[INS_LED_MODE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-mode)** <br>Instruction byte for [EMV_CTLS_LED_SetMode](group___a_d_k___l_e_d.md#function-emv-ctls-led-setmode), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led).  |
|  | **[INS_LED_CONF_DESIGN](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-conf-design)** <br>Instruction byte for [EMV_CTLS_LED_ConfigDesign](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led).  |




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


### define CALLBACK_MESSAGE_SIZE

```cpp
#define CALLBACK_MESSAGE_SIZE (2048)
```

for unidirectional callback 

### define CALLBACK_MESSAGE_SIZE_STM32

```cpp
#define CALLBACK_MESSAGE_SIZE_STM32 100
```

Titus does not support trace callback. 

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

Issuer Identification Number (IIN) (**42**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin). 

### define TAG_4F_APP_ID

```cpp
#define TAG_4F_APP_ID 0x4Fu
```

Application Identifier (AID) - Card (**4F**)    used to serialize [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md). 

### define TAG_50_APP_LABEL

```cpp
#define TAG_50_APP_LABEL 0x50u
```

Application Label (**50**)    used in callbacks [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand) and [TAG_BF0C_CTLS_CBK_APP_SELECTED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0c-ctls-cbk-app-selected). 

### define TAG_52_CMD_TO_PERFORM

```cpp
#define TAG_52_CMD_TO_PERFORM 0x52u
```

Command to Perform (**52**) 

### define TAG_56_TRACK1_EQUIVALENT

```cpp
#define TAG_56_TRACK1_EQUIVALENT 0x56u
```

Track 1 Equivalent Data (MChip card) 

### define TAG_57_TRACK2_EQUIVALENT

```cpp
#define TAG_57_TRACK2_EQUIVALENT 0x57u
```

Track 2 Equivalent Data (**57**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_57_DataTrack2](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-57-datatrack2). 

### define TAG_5A_APP_PAN

```cpp
#define TAG_5A_APP_PAN 0x5Au
```

Application Primary Account Number (**5A**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5A_PAN](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5a-pan). 

### define TAG_5F20_CARDHOLDER_NAME

```cpp
#define TAG_5F20_CARDHOLDER_NAME 0x5F20u
```

Cardholder Name (**5F20**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F20_Cardholder](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f20-cardholder). 

### define TAG_5F24_APP_EXP_DATE

```cpp
#define TAG_5F24_APP_EXP_DATE 0x5F24u
```

Application Expiration Data (**5F24**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F24_AppExpDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f24-appexpdate). 

### define TAG_5F25_APP_EFF_DATE

```cpp
#define TAG_5F25_APP_EFF_DATE 0x5F25u
```

Application Effective Data (**5F25**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F25_AppEffDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f25-appeffdate). 

### define TAG_5F28_ISS_COUNTRY_CODE

```cpp
#define TAG_5F28_ISS_COUNTRY_CODE 0x5F28u
```

Issuer Country Code (**5F28**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F28_IssCountryCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f28-isscountrycode). 

### define TAG_5F2A_TRANS_CURRENCY

```cpp
#define TAG_5F2A_TRANS_CURRENCY 0x5F2Au
```

Transaction Currency Code (**5F2A**)    Configured with [EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans) (for DCC possibly in [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)). Used as [EMV_CTLS_TRANSRES_STRUCT::T_5F2A_CurrencyTrans](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2a-currencytrans). 

### define TAG_5F2D_LANGUAGE

```cpp
#define TAG_5F2D_LANGUAGE 0x5F2Du
```

Language Preference (**5F2D**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref). 

### define TAG_5F30_SERVICE_CODE

```cpp
#define TAG_5F30_SERVICE_CODE 0x5F30u
```

Service Code (**5F30**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F30_ServiceCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f30-servicecode). 

### define TAG_5F34_PAN_SEQUENCE_NB

```cpp
#define TAG_5F34_PAN_SEQUENCE_NB 0x5F34u
```

PAN Sequence Number (**5F34**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_5F34_PANSequenceNo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f34-pansequenceno). 

### define TAG_5F36_TRANS_CURRENCY_EXP

```cpp
#define TAG_5F36_TRANS_CURRENCY_EXP 0x5F36u
```

Transaction Currency Exponent (**5F36**)    Configured with [EMV_CTLS_TERMDATA_STRUCT::ExpTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans) (for DCC possibly in [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)). Used as [EMV_CTLS_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f36-trx-currency-exp). 

### define TAG_5F50_ISSUER_URL

```cpp
#define TAG_5F50_ISSUER_URL 0x5F50u
```

Issuer URL (**5F50**) 

### define TAG_5F53_IBAN

```cpp
#define TAG_5F53_IBAN 0x5F53u
```

International Bank Account Number (IBAN) (**5F53**) 

### define TAG_5F54_BIC

```cpp
#define TAG_5F54_BIC 0x5F54u
```

Bank Identifier Code (BIC) (**5F54**) 

### define TAG_5F55_ISSUER_COUNTRY_2

```cpp
#define TAG_5F55_ISSUER_COUNTRY_2 0x5F55u
```

Issuer Country Code (alpha 2 format) (**5F55**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::country2](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country2). 

### define TAG_5F56_ISSUER_COUNTRY_3

```cpp
#define TAG_5F56_ISSUER_COUNTRY_3 0x5F56u
```

Issuer Country Code (alpha 3 format) (**5F56**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::country3](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country3). 

### define TAG_5F57_ACCOUNT_TYPE

```cpp
#define TAG_5F57_ACCOUNT_TYPE 0x5F57u
```

Account Type (**5F57**)    used as [EMV_CTLS_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype). 

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

Issuer Script Template 1 (**71**)    to be used to fill [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata). 

### define TAG_72_ISS_SCRIPT_TPLT_2

```cpp
#define TAG_72_ISS_SCRIPT_TPLT_2 0x72u
```

Issuer Script Template 2 (**72**)    to be used to fill [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata). 

### define TAG_73_DIR_DISCR_TEMPLATE

```cpp
#define TAG_73_DIR_DISCR_TEMPLATE 0x73u
```

Dirctory Discretionary Template (**73**) 

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

Application Interchange Profile (**82**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_82_AIP](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-82-aip). 

### define TAG_83_CMD_TPLT

```cpp
#define TAG_83_CMD_TPLT 0x83u
```

Command Template (**83**) 

### define TAG_84_DF_NAME

```cpp
#define TAG_84_DF_NAME 0x84u
```

Dedicated File Name (**84**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_84_DFName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname). 

### define TAG_86_ISS_SCRIPT_CMD

```cpp
#define TAG_86_ISS_SCRIPT_CMD 0x86u
```

Issuer Script Command (**86**) 

### define TAG_87_APP_PRIORITY_ID

```cpp
#define TAG_87_APP_PRIORITY_ID 0x87u
```

Application Priority Indicator (**87**)    used as [EMV_CTLS_CANDIDATE_DATA_STRUCT::API](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-api). 

### define TAG_88_SHORT_FILE_ID

```cpp
#define TAG_88_SHORT_FILE_ID 0x88u
```

Short File Identifier (SFI) (**88**) 

### define TAG_89_AUTH_CODE

```cpp
#define TAG_89_AUTH_CODE 0x89u
```

Authorization Code (**89**) 

### define TAG_8A_AUTH_RESP_CODE

```cpp
#define TAG_8A_AUTH_RESP_CODE 0x8Au
```

Authorization Response Code (**8A**)    used as [EMV_CTLS_HOST_STRUCT::AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp). 

### define TAG_8B_POI_INFORMATION

```cpp
#define TAG_8B_POI_INFORMATION 0x8Bu
```

POI information (**8B**)    used as [EMV_CTLS_TERMDATA_STRUCT::poiInformation](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-poiinformation). 

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

Issuer Authentication Data (**91**)    used as [EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata). 

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

Terminal Verification Result (**95**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_95_TVR](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-95-tvr). 

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

Transaction Date (**9A**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9A_Date](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9a-date), and [EMV_CTLS_PAYMENT_STRUCT::Date](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date). 

### define TAG_9B_TSI

```cpp
#define TAG_9B_TSI 0x9Bu
```

Transaction Status Information (**9B**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9B_TSI](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9b-tsi). 

### define TAG_9C_TRANS_TYPE

```cpp
#define TAG_9C_TRANS_TYPE 0x9Cu
```

Transaction Type (**9C**)    used as [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype), [EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 

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

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01), [EMV_CTLS_APPLIDATA_AK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01), [EMV_CTLS_APPLIDATA_JK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)


### define TAG_9F02_NUM_AMOUNT_AUTH

```cpp
#define TAG_9F02_NUM_AMOUNT_AUTH 0x9F02u
```

Amount Authorized (Numeric) (**9F02**)    used as [EMV_CTLS_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount). 

### define TAG_9F03_NUM_AMOUNT_OTHER

```cpp
#define TAG_9F03_NUM_AMOUNT_OTHER 0x9F03u
```

Amount Other (Numeric) (**9F03**)    used as [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount). 

### define TAG_9F04_BIN_AMOUNT_OTHER

```cpp
#define TAG_9F04_BIN_AMOUNT_OTHER 0x9F04u
```

Amount Other (Binary) (**9F04**)    can be used to fetch [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount) as 4-byte-binary-coded value by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags)

### define TAG_9F05_APP_DISCR_DATA

```cpp
#define TAG_9F05_APP_DISCR_DATA 0x9F05u
```

Application Discretionary Data (**9F05**) 

### define TAG_9F06_AID

```cpp
#define TAG_9F06_AID 0x9F06u
```

Application Identifier (AID)-terminal (**9F06**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid). 

### define TAG_9F07_APP_USAGE_CONTROL

```cpp
#define TAG_9F07_APP_USAGE_CONTROL 0x9F07u
```

Application Usage Control (**9F07**) 

### define TAG_9F08_ICC_APP_VERSION_NB

```cpp
#define TAG_9F08_ICC_APP_VERSION_NB 0x9F08u
```

Application Version Number - ICC (**9F08**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no). 

### define TAG_9F09_TRM_APP_VERSION_NB

```cpp
#define TAG_9F09_TRM_APP_VERSION_NB 0x9F09u
```

Application Version Number (**9F09**)    used in most schemes of [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::Scheme](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-scheme). 

### define TAG_9F0A_ASRPD

```cpp
#define TAG_9F0A_ASRPD 0x9F0Au
```

Application Selection Registered Proprietary Data (**9F0A**)    EMV Specification Bulletin No. 175 (ID1, L1, V1, ID2, L2, V2, ...) ID: 2 byte, L: length, 1 byte. 

### define TAG_9F0B_CARDHOLDER_NAME_XT

```cpp
#define TAG_9F0B_CARDHOLDER_NAME_XT 0x9F0Bu
```

Cardholder Name Extended (**9F0B**) 

### define TAG_9F0C_ISSUER_ID_EXT

```cpp
#define TAG_9F0C_ISSUER_ID_EXT 0x9F0Cu
```

Issuer Identification Number Extended SB N°231 (**9F0C**)    used for [EMV_CTLS_CANDIDATE_DATA_STRUCT::IIN](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin) when IIN length is 4. 

### define TAG_9F0D_IAC_DEFAULT

```cpp
#define TAG_9F0D_IAC_DEFAULT 0x9F0Du
```

Issuer Action Code - Default (**9F0D**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F0D_IACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0d-iacdefault). 

### define TAG_9F0E_IAC_DENIAL

```cpp
#define TAG_9F0E_IAC_DENIAL 0x9F0Eu
```

Issuer Action Code - Denial (**9F0E**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F0E_IACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0e-iacdenial). 

### define TAG_9F0F_IAC_ONLINE

```cpp
#define TAG_9F0F_IAC_ONLINE 0x9F0Fu
```

Issuer Action Code - Online (**9F0F**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F0F_IACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0f-iaconline). 

### define TAG_9F10_ISS_APP_DATA

```cpp
#define TAG_9F10_ISS_APP_DATA 0x9F10u
```

Issuer Application Data (**9F10**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F10_DataIssuer](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f10-dataissuer). 

### define TAG_9F11_ISS_CODE_TABLE_ID

```cpp
#define TAG_9F11_ISS_CODE_TABLE_ID 0x9F11u
```

Issuer Code Table Index (**9F11**) 

### define TAG_9F12_APP_PREFERRED_NAME

```cpp
#define TAG_9F12_APP_PREFERRED_NAME 0x9F12u
```

Application Preferred Name (**9F12**)    used as [EMV_CTLS_TRANSRES_STRUCT::AppName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname). 

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

Merchant Category Code (**9F15**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_DK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_RK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15), [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)


### define TAG_9F16_MERCHANT_ID

```cpp
#define TAG_9F16_MERCHANT_ID 0x9F16u
```

Merchant Identifier (**9F16**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16), [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16)


### define TAG_9F17_PIN_TRIES_LEFT

```cpp
#define TAG_9F17_PIN_TRIES_LEFT 0x9F17u
```

PIN Try Counter (**9F17**) 

### define TAG_9F18_ISS_SCRIPT_ID

```cpp
#define TAG_9F18_ISS_SCRIPT_ID 0x9F18u
```

Issuer Script Identifier (**9F18**)    to be used to fill [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata). 

### define TAG_9F1A_TRM_COUNTRY_CODE

```cpp
#define TAG_9F1A_TRM_COUNTRY_CODE 0x9F1Au
```

Terminal Country Code (**9F1A**)    Configured with [EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-countrycodeterm). 

### define TAG_9F1B_TRM_FLOOR_LIMIT

```cpp
#define TAG_9F1B_TRM_FLOOR_LIMIT 0x9F1Bu
```

Terminal Floor Limit (**9F1B**)    not used anymore for contactless interface. 

### define TAG_9F1C_TRM_ID

```cpp
#define TAG_9F1C_TRM_ID 0x9F1Cu
```

Terminal Identification (**9F1C**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_VK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_AK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_JK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_DK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_IK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_EK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_PK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_CK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_GK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_RK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_SK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-termident-9f1c), [EMV_CTLS_APPLIDATA_PB_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-termident-9f1c)


### define TAG_9F1D_TRM_RISK_MNGT_DATA

```cpp
#define TAG_9F1D_TRM_RISK_MNGT_DATA 0x9F1Du
```

Terminal Risk Management Data (**9F1D**)    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalRiskManagementData_9F1D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminalriskmanagementdata-9f1d). 

### define TAG_9F1E_IFD_SERIAL_NB

```cpp
#define TAG_9F1E_IFD_SERIAL_NB 0x9F1Eu
```

Interface Device (IFD) Serial Number (**9F1E**)    used as [EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber), [EMV_CTLS_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1e-ifdserialnumber). 

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

Transaction Time (**9F21**)    used as [EMV_CTLS_PAYMENT_STRUCT::Time](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time), [EMV_CTLS_TRANSRES_STRUCT::T_9F21_Time](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f21-time). 

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

Application Cryptogram (**9F26**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F26_Cryptogramm](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f26-cryptogramm). 

### define TAG_9F27_CRYPT_INFO_DATA

```cpp
#define TAG_9F27_CRYPT_INFO_DATA 0x9F27u
```

Cryptogram Information Data (**9F27**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo). 

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

Terminal Capabilities (**9F33**) 

used as [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33), [EMV_CTLS_TRANSRES_STRUCT::T_9F33_TermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f33-termcap)


### define TAG_9F34_CVM_RESULTS

```cpp
#define TAG_9F34_CVM_RESULTS 0x9F34u
```

Cardholder Verification Method (CVM) Results (**9F34**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F34_CVM_Res](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f34-cvm-res). 

### define TAG_9F35_TRM_TYPE

```cpp
#define TAG_9F35_TRM_TYPE 0x9F35u
```

Terminal Type (**9F35**)    used as [EMV_CTLS_TERMDATA_STRUCT::TermTyp](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp), [EMV_CTLS_TRANSRES_STRUCT::T_9F35_TermTyp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f35-termtyp). 

### define TAG_9F36_ATC

```cpp
#define TAG_9F36_ATC 0x9F36u
```

Application Transaction Counter (ATC) (**9F36**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F36_ATC](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f36-atc). 

### define TAG_9F37_UNPREDICTABLE_NB

```cpp
#define TAG_9F37_UNPREDICTABLE_NB 0x9F37u
```

Unpredictable Number (**9F37**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F37_RandomNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f37-randomnumber). 

### define TAG_9F38_PDOL

```cpp
#define TAG_9F38_PDOL 0x9F38u
```

Processing Options Data Object List (PDOL) (**9F38**) 

### define TAG_9F39_POS_ENTRY_MODE

```cpp
#define TAG_9F39_POS_ENTRY_MODE 0x9F39u
```

Point-of-Service (POS) Entry Mode (**9F39**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F39_POSEntryMode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f39-posentrymode). 

### define TAG_9F3A_AMNT_REF_CURRENCY

```cpp
#define TAG_9F3A_AMNT_REF_CURRENCY 0x9F3Au
```

Amount, Reference Currency (**9F3A**) 

### define TAG_9F3B_APP_REF_CURRENCY

```cpp
#define TAG_9F3B_APP_REF_CURRENCY 0x9F3Bu
```

Application Reference Currency (**9F3B**) 

### define TAG_9F3C_TRANS_REF_CURRENCY

```cpp
#define TAG_9F3C_TRANS_REF_CURRENCY 0x9F3Cu
```

Transaction Reference Currency Code (**9F3C**) 

### define TAG_9F3D_TRANS_CURRENCY_EXP

```cpp
#define TAG_9F3D_TRANS_CURRENCY_EXP 0x9F3Du
```

Transaction Reference Currency Exponent (**9F3D**) 

### define TAG_9F40_ADD_TRM_CAP

```cpp
#define TAG_9F40_ADD_TRM_CAP 0x9F40u
```

Additional Terminal Capabilities (**9F40**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_VK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_AK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_DK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_IK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_EK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_CK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_GK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_APPLIDATA_SK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40), [EMV_CTLS_TRANSRES_STRUCT::T_9F40_AddTermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f40-addtermcap)


### define TAG_9F41_TRANS_SEQUENCE_NB

```cpp
#define TAG_9F41_TRANS_SEQUENCE_NB 0x9F41u
```

Transaction Sequence Counter (**9F41**)    used as [EMV_CTLS_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount), [EMV_CTLS_TRANSRES_STRUCT::T_9F41_TransCount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f41-transcount). 

### define TAG_9F42_APP_CURRENCY_CODE

```cpp
#define TAG_9F42_APP_CURRENCY_CODE 0x9F42u
```

Application Currency Code (**9F42**) 

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

Data Authentication Code (**9F45**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F45_DataAuthCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f45-dataauthcode). 

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

ICC Dynamic Number (**9F4C**)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F4C_ICCDynNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f4c-iccdynnumber). 

### define TAG_9F4E_TAC_MERCHANTLOC

```cpp
#define TAG_9F4E_TAC_MERCHANTLOC 0x9F4Eu
```

Merchant name and location (VISA VCPS 2.1.1) (**9F4E**) 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e), [EMV_CTLS_APPLIDATA_PB_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)


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

### define TAG_9F51_APP_CURRENCY_CODE

```cpp
#define TAG_9F51_APP_CURRENCY_CODE 0x9F51
```

Application Currency Code. 

### define TAG_9F52_DEFAULT_ACTION

```cpp
#define TAG_9F52_DEFAULT_ACTION 0x9F52
```

Application Default Action (ADA) 

### define TAG_9F53_CONSECUTIVE_LIM_TRANS_INT

```cpp
#define TAG_9F53_CONSECUTIVE_LIM_TRANS_INT 0x9F53
```

Consecutive Transaction Limit (International) 

### define TAG_9F54_CUMULATIVE_TRANS_LIMET

```cpp
#define TAG_9F54_CUMULATIVE_TRANS_LIMET 0x9F54
```

Cumulative Total Transaction Amount Limit. 

### define TAG_9F56_ISS_AUTH_INCATOR

```cpp
#define TAG_9F56_ISS_AUTH_INCATOR 0x9F56
```

Issuer Authentication Indicator. 

### define TAG_9F5A_APP_PROGRAM_ID

```cpp
#define TAG_9F5A_APP_PROGRAM_ID 0x9F5A
```

Application Program Identifier. 

### define TAG_9F5D_VISA_AOSA

```cpp
#define TAG_9F5D_VISA_AOSA 0x9F5D
```

Contactless: Available Offline Spending Amount (AOSA)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F5D_CL_VISA_AOSA](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f5d-cl-visa-aosa). 

### define TAG_9F66_TTQ

```cpp
#define TAG_9F66_TTQ 0x9F66
```

VISA TTQ (Contactless only) 

used as [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66), [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66), [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66), [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66), [EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)


### define TAG_9F6C_VISA_CTQ

```cpp
#define TAG_9F6C_VISA_CTQ 0x9F6C
```

VISA CTQ (Contactless only)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F6C_CL_VISA_CTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f6c-cl-visa-ctq). 

### define TAG_9F6D_TRM_APP_VERSION_NB

```cpp
#define TAG_9F6D_TRM_APP_VERSION_NB 0x9F6D
```

Terminal application version number. 

### define TAG_DF04_PK_CVM_REQUIREMENTS

```cpp
#define TAG_DF04_PK_CVM_REQUIREMENTS 0xDF04
```

Visa Asia/Pacific: CVM requirements, see [EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-cvmrequirements-df04). 

### define TAG_DF02_PK_FLOOR_LIMIT

```cpp
#define TAG_DF02_PK_FLOOR_LIMIT 0xDF02
```

Visa Asia/Pacific: Floor limit, see [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-df02). 

### define TAG_DF01_PK_CVM_REQ_LIMIT

```cpp
#define TAG_DF01_PK_CVM_REQ_LIMIT 0xDF01
```

Visa Asia/Pacific: CVM required limit, see [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-df01). 

### define TAG_9F53_TRANS_CATEGORY_CODE

```cpp
#define TAG_9F53_TRANS_CATEGORY_CODE 0x9F53
```

Transaction Category Code 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionCategoryCode_9F53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactioncategorycode-9f53), [EMV_CTLS_TRANSRES_STRUCT::T_9F53_MC_CatCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f53-mc-catcode)


### define TAG_9F5E_DS_ID

```cpp
#define TAG_9F5E_DS_ID 0x9F5E
```

Data Storage ID = Application PAN (without any 'F' padding) & Application PAN Sequence Number. 

### define TAG_9F6B_TRACK2_DATA

```cpp
#define TAG_9F6B_TRACK2_DATA 0x9F6B
```

Track 2 Data contains the data objects of the track 2 according to [ISO/IEC 7813], excluding start sentinel, end sentinel and LRC. 

### define TAG_9F6D_TRM_APP_MSR_VERSION_NB

```cpp
#define TAG_9F6D_TRM_APP_MSR_VERSION_NB 0x9F6D
```

Terminal application MSR version number    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-msrversionnumber-9f6d). 

### define TAG_9F6E_DEVICE_TYPE_INDICATOR

```cpp
#define TAG_9F6E_DEVICE_TYPE_INDICATOR 0x9F6E
```

Amex device type indicator    used as [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexterminaltransactioncapabilities-9f6e). 

### define TAG_DF8104_BALANCE_BEFORE

```cpp
#define TAG_DF8104_BALANCE_BEFORE 0xDF8104
```

Balance Read Before Gen AC    used as [EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance). 

### define TAG_DF8105_BALANCE_AFTER

```cpp
#define TAG_DF8105_BALANCE_AFTER 0xDF8105
```

Balance Read After Gen AC    used as [EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance). 

### define TAG_DF8106_DE_DATA_NEEDED

```cpp
#define TAG_DF8106_DE_DATA_NEEDED 0xDF8106
```

DataExchange, data needed, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange). 

### define TAG_DF810C_KERNEL_ID

```cpp
#define TAG_DF810C_KERNEL_ID 0xDF810C
```

MasterCard Kernel ID    used in [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelid-df810c). 

### define TAG_DF8115_ERROR_INDICATION

```cpp
#define TAG_DF8115_ERROR_INDICATION 0xDF8115
```

MasterCard Error Indication (part of Discretionary Data) 

### define TAG_DF8116_UI_DATA

```cpp
#define TAG_DF8116_UI_DATA 0xDF8116
```

User Interface Request Data. 

### define TAG_DF8117_CARD_DATA_INPUT_CAPABILITY

```cpp
#define TAG_DF8117_CARD_DATA_INPUT_CAPABILITY 0xDF8117
```

Card data input capability (same as Terminal capability, byte 1)    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-carddatainputcapability-df8117). 

### define TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED

```cpp
#define TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED 0xDF8118
```

CVM Capability - CVM Required    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-abovelimit-df8118). 

### define TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED

```cpp
#define TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED 0xDF8119
```

CVM Capability - No CVM Required    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-belowlimit-df8119). 

### define TAG_DF811B_KERNEL_CONFIGURATION

```cpp
#define TAG_DF811B_KERNEL_CONFIGURATION 0xDF811B
```

Kernel Configuration    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b). 

### define TAG_DF811C_TRN_TXN_LIFETIME

```cpp
#define TAG_DF811C_TRN_TXN_LIFETIME 0xDF811C
```

Torn transaction life time    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionlifetime-df811c). 

### define TAG_DF811D_TRN_TXN_NUMBER

```cpp
#define TAG_DF811D_TRN_TXN_NUMBER 0xDF811D
```

Torn transaction max. number    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionnumber-df811d). 

### define TAG_DF811E_MSR_CVM_ABOVE_LIMIT

```cpp
#define TAG_DF811E_MSR_CVM_ABOVE_LIMIT 0xDF811E
```

Mag-stripe CVM Capability - CVM Required. 

Indicates the CVM capability of the Terminal/Reader in the case of a mag-stripe mode transaction when the Amount, Authorized (Numeric) is greater than the Reader CVM Required Limit. 

 Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_aboveLimit_DF811E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-abovelimit-df811e)


### define TAG_DF811F_SECURITY_CAPABILITY

```cpp
#define TAG_DF811F_SECURITY_CAPABILITY 0xDF811F
```

Security Capability    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-securitycapability-df811f). 

### define TAG_DF8120_TAC_DEFAULT

```cpp
#define TAG_DF8120_TAC_DEFAULT 0xDF8120
```

TAC Default    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdefault-df8120). 

### define TAG_DF8121_TAC_DENIAL

```cpp
#define TAG_DF8121_TAC_DENIAL 0xDF8121
```

TAC Denial    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdenial-df8121). 

### define TAG_DF8122_TAC_ONLINE

```cpp
#define TAG_DF8122_TAC_ONLINE 0xDF8122
```

TAC Online    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-taconline-df8122). 

### define TAG_DF8123_FLOOR_LIMIT

```cpp
#define TAG_DF8123_FLOOR_LIMIT 0xDF8123
```

Reader Contactless Floor Limit    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-floorlimit-df8123). 

### define TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM

```cpp
#define TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM 0xDF8124
```

Reader Contactless Transaction Limit (No On-device CVM)    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitnoondevice-df8124). 

### define TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM

```cpp
#define TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM 0xDF8125
```

Reader Contactless Transaction Limit (On-device CVM)    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitondevice-df8125). 

### define TAG_DF8126_CVM_REQUIRED_LIMIT

```cpp
#define TAG_DF8126_CVM_REQUIRED_LIMIT 0xDF8126
```

Reader Contactless CVM Required Limit    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126). 

### define TAG_DF8129_OUTCOME_P_SET

```cpp
#define TAG_DF8129_OUTCOME_P_SET 0xDF8129
```

Outcome Parameter Set. 

### define TAG_DF812C_MSR_CVM_BELOW_LIMIT

```cpp
#define TAG_DF812C_MSR_CVM_BELOW_LIMIT 0xDF812C
```

Mag-stripe CVM Capability - No CVM Required. 

Indicates the CVM capability of the Terminal/Reader in the case of a mag-stripe mode transaction when the amount is less than or equal to the Reader CVM Required Limit. 

 Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_belowLimit_DF812C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-belowlimit-df812c)


### define TAG_DF812D_MESSAGE_HOLD_TIME

```cpp
#define TAG_DF812D_MESSAGE_HOLD_TIME 0xDF812D
```

Message Hold Time    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d). 

### define TAG_DF8130_HOLD_TIME_VALUE

```cpp
#define TAG_DF8130_HOLD_TIME_VALUE 0xDF8130
```

Hold Time Value    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-holdtimevalue-df8130). 

### define TAG_DF8131_PHONE_MSG_TABLE

```cpp
#define TAG_DF8131_PHONE_MSG_TABLE 0xDF8131
```

Phone Message Table    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-phonemessagetable-df8131). 

### define TAG_DF8112_TAGS_TO_READ

```cpp
#define TAG_DF8112_TAGS_TO_READ 0xDF8112
```

Tags To Read    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstoread-df8112). 

### define TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC

```cpp
#define TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC 0xFF8102
```

Tags To Write Before Gen AC    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowritebeforegenac-ff8102). 

### define TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC

```cpp
#define TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC 0xFF8103
```

Tags To Write After Gen AC    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowriteaftergenac-ff8103). 

### define TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG

```cpp
#define TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG 0xDF8110
```

Proceed To First Write Flag    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-proceedtofirstwriteflag-df8110). 

### define TAG_DF810D_DSVN_TERM

```cpp
#define TAG_DF810D_DSVN_TERM 0xDF810D
```

DSVN Term. 

### define TAG_9F5C_DS_REQUESTED_OPERATOR_ID

```cpp
#define TAG_9F5C_DS_REQUESTED_OPERATOR_ID 0x9F5C
```

DS Requested Operator ID    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-dsrequestedoperatorid-9f5c). 

### define TAG_DF8127_DE_TIMEOUT_VALUE

```cpp
#define TAG_DF8127_DE_TIMEOUT_VALUE 0xDF8127
```

Data Exchange Time Out Value    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-detimeoutvalue-df8127). 

### define TAG_DF8132_RR_MIN_GRACE_PERIOD

```cpp
#define TAG_DF8132_RR_MIN_GRACE_PERIOD 0xDF8132
```

Minimum Relay Resistance Grace Period [1/100 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-mingraceperiod-df8132). 

### define TAG_DF8133_RR_MAX_GRACE_PERIOD

```cpp
#define TAG_DF8133_RR_MAX_GRACE_PERIOD 0xDF8133
```

Maximum Relay Resistance Grace Period [1/100 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-maxgraceperiod-df8133). 

### define TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU

```cpp
#define TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU 0xDF8134
```

Terminal Expected Transmission Time For Relay Resistance C-APDU [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-capdu-df8134). 

### define TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU

```cpp
#define TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU 0xDF8135
```

Terminal Expected Transmission Time For Relay Resistance R-APDU [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-rapdu-df8135). 

### define TAG_DF8136_RR_ACCURACY_THRESHOLD

```cpp
#define TAG_DF8136_RR_ACCURACY_THRESHOLD 0xDF8136
```

Relay Resistance Accuracy Threshold [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-accuracythreshold-df8136). 

### define TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD

```cpp
#define TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD 0xDF8137
```

Relay Resistance Transmission Time Mismatch Threshold [%]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchthreshold-df8137). 

### define TAG_DF8306_RR_MEASURED_TIME

```cpp
#define TAG_DF8306_RR_MEASURED_TIME 0xDF8306
```

Measured Relay Resistance Processing Time. 

### define TAG_9F7C_MERCHANT_CUSTOM_DATA

```cpp
#define TAG_9F7C_MERCHANT_CUSTOM_DATA 0x9F7C
```

Merchant Custom Data    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcustomdata-9f7c). 

### define TAG_FF8104_DE_DATA_TO_SEND

```cpp
#define TAG_FF8104_DE_DATA_TO_SEND 0xFF8104
```

DataExchange, data to send, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange). 

### define TAG_FF8105_DATA_RECORD

```cpp
#define TAG_FF8105_DATA_RECORD 0xFF8105
```

Data Record, The Data Record is a list of TLV encoded data objects returned with the Outcome Parameter Set on the completion of transaction processing. 

### define TAG_9F53_TRM_INTERCHANGE_PROFILE

```cpp
#define TAG_9F53_TRM_INTERCHANGE_PROFILE 0x9F53
```

Terminal Interchange Profile. 

### define TAG_9F58_MERCH_TYPE_INDICATOR

```cpp
#define TAG_9F58_MERCH_TYPE_INDICATOR 0x9F58
```

Merchant type indicator, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantTypeIndicator_9F58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchanttypeindicator-9f58). 

### define TAG_9F59_TERM_TRANS_INFO

```cpp
#define TAG_9F59_TERM_TRANS_INFO 0x9F59
```

Terminal transaction Information, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionInformation_9F59](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactioninformation-9f59). 

### define TAG_9F5A_TERM_TRANS_TYPE

```cpp
#define TAG_9F5A_TERM_TRANS_TYPE 0x9F5A
```

Terminal transaction type, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionType_9F5A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactiontype-9f5a). 

### define TAG_9F5E_TERM_OPTION_STATUS

```cpp
#define TAG_9F5E_TERM_OPTION_STATUS 0x9F5E
```

Terminal option status, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalOptionStatus_9F5E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaloptionstatus-9f5e). 

### define TAG_9F5F_READER_CTLS_FLOOR_LIMIT

```cpp
#define TAG_9F5F_READER_CTLS_FLOOR_LIMIT 0x9F5F
```

Contactless floor limit, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessFloorLimit_9F5F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-9f5f). 

### define TAG_9F5D_TERM_CTLS_RECEIPT_REQUIRED_LIMIT

```cpp
#define TAG_9F5D_TERM_CTLS_RECEIPT_REQUIRED_LIMIT 0x9F5D
```

Contactless receipt required limit, used as [EMV_CTLS_APPLIDATA_IK_STRUCT::ReceiptRequiredLimit_9F5D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-receiptrequiredlimit-9f5d). 

### define TAG_9F6D_AMEX_CAPABILITIES

```cpp
#define TAG_9F6D_AMEX_CAPABILITIES 0xDF9F6D
```

Not used anymore in contactless interface. 

### define TAG_9F6E_AMEX_ENHANCED_CAPABILITIES

```cpp
#define TAG_9F6E_AMEX_ENHANCED_CAPABILITIES 0xDF9F6E
```

Not used anymore in contactless interface. 

### define TAG_9F71_PURE_GDDOL_RESULTS

```cpp
#define TAG_9F71_PURE_GDDOL_RESULTS 0x9F71
```

GDDOL Resulting Buffer. Its content is the result of the concatenation of the data elements listed in GDDOL. See [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data). 

### define TAG_9F74_PURE_DATA_UPDATE_RESULT

```cpp
#define TAG_9F74_PURE_DATA_UPDATE_RESULT 0x9F74
```

Data Elements Update Result. Result of the data element update requested by the reader using Memory Slot Update Template. See [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data). 

### define TAG_9F76_PURE_TERM_TRX_DATA

```cpp
#define TAG_9F76_PURE_TERM_TRX_DATA 0x9F76
```

Terminal transaction data. 

Allows the Terminal Application to communicate transaction-related information to the Card Payment application. Depending on card payment application setting, this information may participate in the card payment application risk management or may be inserted inside the card payment application transaction log. 

 Used as [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalTransactionData_9F76](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminaltransactiondata-9f76)


### define TAG_BF70_PURE_PUT_DATA_MSUT

```cpp
#define TAG_BF70_PURE_PUT_DATA_MSUT 0xBF70
```

Used in [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data). 

Memory Slot Update Template. This data element provides to the PURE kernel, the list of data elements to update using the PUT DATA. 


### define TAG_BF71_PURE_GET_DATA_MSRT

```cpp
#define TAG_BF71_PURE_GET_DATA_MSRT 0xBF71
```

Memory Slot Read Template. This data element provides to the PURE kernel, the list of data elements to read. Used in [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data). 

### define TAG_C0_TRM_CL_CVM_LIMIT

```cpp
#define TAG_C0_TRM_CL_CVM_LIMIT 0xC0
```

CVM limit. 

### define TAG_C1_TRM_CL_CEIL_LIMIT

```cpp
#define TAG_C1_TRM_CL_CEIL_LIMIT 0xC1
```

Ceiling limit (Contactless transaction limit) 

### define TAG_C2_TRM_CL_MODES

```cpp
#define TAG_C2_TRM_CL_MODES 0xC2
```


**Deprecated**: 

[EMV_CTLS_TRANSRES_TYPE::CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode)

### define TAG_C3_INDEX

```cpp
#define TAG_C3_INDEX 0xC3
```


### define TAG_C4_APP_PRG_ID_LEN

```cpp
#define TAG_C4_APP_PRG_ID_LEN 0xC4
```


### define TAG_C5_APP_PRG_ID

```cpp
#define TAG_C5_APP_PRG_ID 0xC5
```


### define TAG_C6_TXN_LIMIT

```cpp
#define TAG_C6_TXN_LIMIT 0xC6
```


### define TAG_C7_LED_ID

```cpp
#define TAG_C7_LED_ID 0xC7
```

[EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led): `ucLedId`. 

### define TAG_C8_LED_STATE

```cpp
#define TAG_C8_LED_STATE 0xC8
```

[EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led): `ucLedState` resp. [TAG_BF10_CTLS_CBK_LEDS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf10-ctls-cbk-leds). 

### define TAG_C9_POLL_TIMEOUT

```cpp
#define TAG_C9_POLL_TIMEOUT 0xC9
```

[EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout). 

### define TAG_CA_DRL_ON_OFF

```cpp
#define TAG_CA_DRL_ON_OFF 0xCA
```

EMV_CTLS_VISA_DRL_STRUCT::OnOffSwitch. 

### define TAG_CB_BEEP_SCENARIO

```cpp
#define TAG_CB_BEEP_SCENARIO 0xCB
```

Buzzer scenario in callback [TAG_BF19_CTLS_CBK_BEEP](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf19-ctls-cbk-beep). 

### define TAG_FA_VISA_DRL_RISK

```cpp
#define TAG_FA_VISA_DRL_RISK 0xFA
```


### define TAG_FB_PP3_PMSG_TABLE

```cpp
#define TAG_FB_PP3_PMSG_TABLE 0xFB
```


### define TAG_FC_EP_BF0C_FINAL_SELECT

```cpp
#define TAG_FC_EP_BF0C_FINAL_SELECT 0xFC
```

BF0C from SELECT response, can be used with [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags)

### define TAG_FD_AMEX_DRL_RISK

```cpp
#define TAG_FD_AMEX_DRL_RISK 0xFD
```


### define TAG_E2_FORMAT_B

```cpp
#define TAG_E2_FORMAT_B 0xE2
```

Format: Binary. 

### define TAG_E3_FORMAT_N

```cpp
#define TAG_E3_FORMAT_N 0xE3
```

Format: Numeric. 

### define TAG_E4_FORMAT_CN

```cpp
#define TAG_E4_FORMAT_CN 0xE4
```

Format: Compressed Numeric. 

### define TAG_E5_FORMAT_A

```cpp
#define TAG_E5_FORMAT_A 0xE5
```

Format: Alphabetic. 

### define TAG_E6_FORMAT_AN

```cpp
#define TAG_E6_FORMAT_AN 0xE6
```

Format: Alpha Numeric. 

### define TAG_E7_FORMAT_ANS

```cpp
#define TAG_E7_FORMAT_ANS 0xE7
```

Format: Alphanumeric Special data elements. 

Contain a single character per byte. The permitted characters and their coding are shown in the Common Character Set table in [EMV 4.3 Book 4], Annex B. 

 There is one exception: The permitted characters for Application Preferred Name are the non-control characters defined in the ISO/IEC 8859 part designated in the Issuer Code Table Index associated with the Application Preferred Name. 


### define TAG_F0_EMV_TEMPLATE

```cpp
#define TAG_F0_EMV_TEMPLATE 0xF0
```

All BER TLV streams are packed in this tag. 

### define TAG_DOM_CHIP

```cpp
#define TAG_DOM_CHIP 0xFF01
```

Contact only: Domestic chip applications. 

### define TAG_FALLBACK_MSR

```cpp
#define TAG_FALLBACK_MSR 0xFF02
```

Contact only: MSR data. 

### define TAG_CAND_LIST

```cpp
#define TAG_CAND_LIST 0xFF03
```

Contact only: Candidate list. 

### define TAG_KEY

```cpp
#define TAG_KEY 0xFF04
```

CAP keys, usd to enclose data of [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md). 

### define TAG_HOTLIST

```cpp
#define TAG_HOTLIST 0xFF05
```

Hot list, used as [EMV_CTLS_TERMDATA_STRUCT::Hotlist](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hotlist). 

### define TAG_FF10_DE_DET_DATA

```cpp
#define TAG_FF10_DE_DET_DATA 0xFF10
```

DataExchange, constructed tag for DET data, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange). 

### define TAG_EXCLUDE_COMBO

```cpp
#define TAG_EXCLUDE_COMBO 0xFF69
```

used to serialise data from [EMV_CTLS_APPS_SELECT_TYPE::ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos)

### define TAG_FF8F13_SIGNAL_MSG

```cpp
#define TAG_FF8F13_SIGNAL_MSG 0xFF8F13
```

PayPass 3, tag for reading list of User Interface Request Signals with [EMV_CTLS_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags). 

### define TAG_FF8F14_SIGNAL_OUT

```cpp
#define TAG_FF8F14_SIGNAL_OUT 0xFF8F14
```

PayPass 3, tag for reading list of Outcome Signals with [EMV_CTLS_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags). 

### define TAG_FF8013_SIGNAL_MSG

```cpp
#define TAG_FF8013_SIGNAL_MSG TAG_FF8F13_SIGNAL_MSG
```


**Deprecated**: 

use [TAG_FF8F13_SIGNAL_MSG](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f13-signal-msg) instead 

### define TAG_FF8014_SIGNAL_OUT

```cpp
#define TAG_FF8014_SIGNAL_OUT TAG_FF8F14_SIGNAL_OUT
```


**Deprecated**: 

use [TAG_FF8F14_SIGNAL_OUT](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f14-signal-out) instead 

### define TAG_FFDC01_LOG_ENTRY_1

```cpp
#define TAG_FFDC01_LOG_ENTRY_1 0xFFDC01
```

1st Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC02_LOG_ENTRY_2

```cpp
#define TAG_FFDC02_LOG_ENTRY_2 0xFFDC02
```

2nd Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC03_LOG_ENTRY_3

```cpp
#define TAG_FFDC03_LOG_ENTRY_3 0xFFDC03
```

3rd Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC04_LOG_ENTRY_4

```cpp
#define TAG_FFDC04_LOG_ENTRY_4 0xFFDC04
```

4th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC05_LOG_ENTRY_5

```cpp
#define TAG_FFDC05_LOG_ENTRY_5 0xFFDC05
```

5th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC06_LOG_ENTRY_6

```cpp
#define TAG_FFDC06_LOG_ENTRY_6 0xFFDC06
```

6th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC07_LOG_ENTRY_7

```cpp
#define TAG_FFDC07_LOG_ENTRY_7 0xFFDC07
```

7th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC08_LOG_ENTRY_8

```cpp
#define TAG_FFDC08_LOG_ENTRY_8 0xFFDC08
```

8th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC09_LOG_ENTRY_9

```cpp
#define TAG_FFDC09_LOG_ENTRY_9 0xFFDC09
```

9th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC0A_LOG_ENTRY_A

```cpp
#define TAG_FFDC0A_LOG_ENTRY_A 0xFFDC0A
```

10th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC0B_LOG_ENTRY_B

```cpp
#define TAG_FFDC0B_LOG_ENTRY_B 0xFFDC0B
```

11th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC0C_LOG_ENTRY_C

```cpp
#define TAG_FFDC0C_LOG_ENTRY_C 0xFFDC0C
```

12th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC0D_LOG_ENTRY_D

```cpp
#define TAG_FFDC0D_LOG_ENTRY_D 0xFFDC0D
```

13th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC0E_LOG_ENTRY_E

```cpp
#define TAG_FFDC0E_LOG_ENTRY_E 0xFFDC0E
```

14th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

### define TAG_FFDC0F_LOG_ENTRY_F

```cpp
#define TAG_FFDC0F_LOG_ENTRY_F 0xFFDC0F
```

15th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log).    See also [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md). 

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

AID in [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md), TRM_SetAppliData(), TRM_GetAppliData(), TRM_SelAppli(), TRM_ReduceCandidateList() 

### define TAG_DF05_BUILD_APPLILIST

```cpp
#define TAG_DF05_BUILD_APPLILIST 0xDF05
```

not applicable for CTLS 

### define TAG_DF06_CARDREADER_NUM

```cpp
#define TAG_DF06_CARDREADER_NUM 0xDF06
```

L1 reader options  `ucOptions` in [EMV_CTLS_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartiso)

### define TAG_DF07_UNCRIT_SCR

```cpp
#define TAG_DF07_UNCRIT_SCR 0xDF07
```

Script results of uncritical scripts in response to [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) [EMV_CTLS_TRANSRES_STRUCT::ScriptResults](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults). 

### define TAG_DF08_CRIT_SCR

```cpp
#define TAG_DF08_CRIT_SCR 0xDF08
```

Script results of uncritical scripts  `Future` use. 

### define TAG_KEY_INDEX

```cpp
#define TAG_KEY_INDEX 0xDF09
```

CAP Key Index  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index),    Index in [EMV_CTLS_CAPKEY_STRUCT::Index](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index),    XML Tag: [XML_TAG_CAP_KEYS_INDEX](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-index). 

### define TAG_KEY_RID

```cpp
#define TAG_KEY_RID 0xDF0A
```

CAP Key RID  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid),    RID in [EMV_CTLS_CAPKEY_STRUCT::RID](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid),    XML Tag: [XML_TAG_CAP_KEYS_RID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-rid). 

### define TAG_KEY_KEY

```cpp
#define TAG_KEY_KEY 0xDF0B
```

CAP Key Modulus  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key),    Key in [EMV_CTLS_CAPKEY_STRUCT::Key](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key),    XML Tag: [XML_TAG_CAP_KEYS_KEY](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-key). 

### define TAG_KEY_HASH

```cpp
#define TAG_KEY_HASH 0xDF0C
```

CAP Key Hash  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash),    Hash in [EMV_CTLS_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash),    XML Tag: [XML_TAG_CAP_KEYS_HASH](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-hash). 

### define TAG_KEY_EXPONENT

```cpp
#define TAG_KEY_EXPONENT 0xDF0D
```

CAP Key Exponent  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent),    Exponent in [EMV_CTLS_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-exponent). 

### define TAG_KEY_CRL

```cpp
#define TAG_KEY_CRL 0xDF0E
```

CAP Key Certification Revocation List  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl),    RevocEntries in [EMV_CTLS_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-revoc-list). 

### define TAG_DF10_MSR_CVM_BELOW

```cpp
#define TAG_DF10_MSR_CVM_BELOW 0xDF10
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF11_LIB_VERSION

```cpp
#define TAG_DF11_LIB_VERSION 0xDF11
```

Library version given back from [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version),    FrameworkVersion in [EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-framework-version). 

### define TAG_DF12_CHECKSUM

```cpp
#define TAG_DF12_CHECKSUM 0xDF12
```

EMVCo checksum given back from [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_KERNEL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chksum-ascii-kernel). 

### define TAG_DF13_TERM_PARAM

```cpp
#define TAG_DF13_TERM_PARAM 0xDF13
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF14_ADD_TAGS_RES

```cpp
#define TAG_DF14_ADD_TAGS_RES 0xDF14
```

additional tag list requested for result data  `[EMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)`

### define TAG_DF15_OFFL_ONLY_PROCESS

```cpp
#define TAG_DF15_OFFL_ONLY_PROCESS 0xDF15
```


**Deprecated**: 

Was used in old config interface 

### define TAG_KEY_KEYLEN

```cpp
#define TAG_KEY_KEYLEN 0xDF16
```

CAP Key key length  `Struct`, `XML` Reference:    KeyLen in [EMV_CTLS_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-keylen). 

### define TAG_DF17_FALLBACK_MIDS

```cpp
#define TAG_DF17_FALLBACK_MIDS 0xDF17
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF18_FALLABCK

```cpp
#define TAG_DF18_FALLABCK 0xDF18
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF19_PARAMETER_4

```cpp
#define TAG_DF19_PARAMETER_4 0xDF19
```

universal tag no. 4 

### define TAG_DF1C_SPECIAL_TRX

```cpp
#define TAG_DF1C_SPECIAL_TRX 0xDF1C
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF1D_PRIO_APPLI

```cpp
#define TAG_DF1D_PRIO_APPLI 0xDF1D
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF20_ASI

```cpp
#define TAG_DF20_ASI 0xDF20
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF21_TAC_DENIAL

```cpp
#define TAG_DF21_TAC_DENIAL 0xDF21
```

[EMV_CTLS_TRANSRES_STRUCT::TACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdenial). 

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

[EMV_CTLS_TRANSRES_STRUCT::TACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-taconline). 

### define TAG_DF23_TAC_DEFAULT

```cpp
#define TAG_DF23_TAC_DEFAULT 0xDF23
```

[EMV_CTLS_TRANSRES_STRUCT::TACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdefault). 

### define TAG_DF24_THRESHHOLD

```cpp
#define TAG_DF24_THRESHHOLD 0xDF24
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF25_MAXPERCENT_ONL

```cpp
#define TAG_DF25_MAXPERCENT_ONL 0xDF25
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF26_PERCENT_ONL

```cpp
#define TAG_DF26_PERCENT_ONL 0xDF26
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF27_DEFAULT_TDOL

```cpp
#define TAG_DF27_DEFAULT_TDOL 0xDF27
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF28_DEFAULT_DDOL

```cpp
#define TAG_DF28_DEFAULT_DDOL 0xDF28
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF29_ADD_TAGS

```cpp
#define TAG_DF29_ADD_TAGS 0xDF29
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2B_APP_FLOW_CAP

```cpp
#define TAG_DF2B_APP_FLOW_CAP 0xDF2B
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2C_ADD_TAGS_CRD

```cpp
#define TAG_DF2C_ADD_TAGS_CRD 0xDF2C
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2D_EMV_APPLI

```cpp
#define TAG_DF2D_EMV_APPLI 0xDF2D
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2E_CVM_NOT_SUPP

```cpp
#define TAG_DF2E_CVM_NOT_SUPP 0xDF2E
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2F_MSR_CVM_ABOVE

```cpp
#define TAG_DF2F_MSR_CVM_ABOVE 0xDF2F
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF30_RETAP_FIELD_OFF

```cpp
#define TAG_DF30_RETAP_FIELD_OFF 0xDF30
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF32_MC_BALANCE_8104

```cpp
#define TAG_DF32_MC_BALANCE_8104 0xDF32
```

see [EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance)

### define TAG_DF33_APPLICATION_TAG_50

```cpp
#define TAG_DF33_APPLICATION_TAG_50 0xDF33
```

EMV_CTLS_STARTRES_STRUCT::T_50_ApplicationName. 

### define TAG_DF36_TRX_OPTIONS

```cpp
#define TAG_DF36_TRX_OPTIONS 0xDF36
```

EMV_CTLS_TRANSAC_STRUCT::TxnOptions. 

### define TAG_DF38_MC_BALANCE_8105

```cpp
#define TAG_DF38_MC_BALANCE_8105 0xDF38
```

see [EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance)

### define TAG_DF3A_FB_MSR_OPTIONS

```cpp
#define TAG_DF3A_FB_MSR_OPTIONS 0xDF3A
```

EMV_CTLS_APPS_SELECT_STRUCT::xFallback_MS (partially, together with [TAG_DF4C_FALLB_MSR_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4c-fallb-msr-appli)) 

### define TAG_DF3A_ADD_TRM_CAP_EXT

```cpp
#define TAG_DF3A_ADD_TRM_CAP_EXT 0xDF3A
```

[EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilitiesExt_DF3A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilitiesext-df3a): Rupay Additional Terminal Capabilities Extension. 

### define TAG_DF3B_PARAMETER_1

```cpp
#define TAG_DF3B_PARAMETER_1 0xDF3B
```

universal tag no. 1    used for `numberOfAIDs` in [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework), respectively EMV_CTLS_Init_FrameworkClient()    Also used for `VirtualTermMapType` in [EMV_CTLS_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal)

### define TAG_DF3C_PARAMETER_2

```cpp
#define TAG_DF3C_PARAMETER_2 0xDF3C
```

universal tag no. 2    used for options in [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework), respectively EMV_CTLS_Init_FrameworkClient()    Also used for `TLVSwitchValue` in [EMV_CTLS_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal)

### define TAG_DF3D_PARAMETER_3

```cpp
#define TAG_DF3D_PARAMETER_3 0xDF3D
```

universal tag no. 3    Used for `VirtualTerminal` in [EMV_CTLS_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal)

### define TAG_DF40_FORCE_ONLINE

```cpp
#define TAG_DF40_FORCE_ONLINE 0xDF40
```

[EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define TAG_DF42_STATUS

```cpp
#define TAG_DF42_STATUS 0xDF42
```

[EMV_CTLS_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo), also used for EMV results in callback [TAG_BF15_CBK_CARD_TAPPED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf15-cbk-card-tapped). 

### define TAG_DF44_CHIP_CVM_BELOW

```cpp
#define TAG_DF44_CHIP_CVM_BELOW 0xDF44
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF45_CHIP_TXN_LIFETIME

```cpp
#define TAG_DF45_CHIP_TXN_LIFETIME 0xDF45
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF46_CHIP_TXN_NO

```cpp
#define TAG_DF46_CHIP_TXN_NO 0xDF46
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF48_ONLINE_SWITCH

```cpp
#define TAG_DF48_ONLINE_SWITCH 0xDF48
```

[EMV_CTLS_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 

### define TAG_DF49_CEIL_LIMIT_MOBILE

```cpp
#define TAG_DF49_CEIL_LIMIT_MOBILE 0xDF49
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF4B_DOM_CHIP_APPLI

```cpp
#define TAG_DF4B_DOM_CHIP_APPLI 0xDF4B
```

not used in CTLS environment 

### define TAG_DF4C_FALLB_MSR_APPLI

```cpp
#define TAG_DF4C_FALLB_MSR_APPLI 0xDF4C
```

not used in CTLS environment 

### define TAG_DF4D_CARD_CONF

```cpp
#define TAG_DF4D_CARD_CONF 0xDF4D
```

not used in CTLS environment 

### define TAG_DF4E_PASSTROUGH

```cpp
#define TAG_DF4E_PASSTROUGH 0xDF4E
```

EMV_CTLS_START_STRUCT::passtroughCardTypes. 

### define TAG_DF4F_CARDTYPE

```cpp
#define TAG_DF4F_CARDTYPE 0xDF4F
```

[EMV_CTLS_TRANSRES_STRUCT::ctlsCardType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-ctlscardtype). 

### define TAG_DF50_ONL_RES

```cpp
#define TAG_DF50_ONL_RES 0xDF50
```

[EMV_CTLS_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult). 

### define TAG_DF52_AUTH_DATA_CLESS

```cpp
#define TAG_DF52_AUTH_DATA_CLESS 0xDF52
```

[EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata), duplicated by [TAG_DF52_TRM_NOCVM_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df52-trm-nocvm-limit). 

### define TAG_DF54_SCRIPT_CLESS

```cpp
#define TAG_DF54_SCRIPT_CLESS 0xDF54
```

EMV_CTLS_HOST_STRUCT::LenScript and [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata)   Duplicated by [TAG_DF54_TRM_CTLS_LIMIT_CDCVM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df54-trm-ctls-limit-cdcvm). 

### define TAG_DF55_AC_SWITCH_IF

```cpp
#define TAG_DF55_AC_SWITCH_IF 0xDF55
```

[EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface), duplicated by [TAG_DF55_TRM_TPM_CAPABILITIES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df55-trm-tpm-capabilities). 

### define TAG_DF56_AC_ONLINE_PIN

```cpp
#define TAG_DF56_AC_ONLINE_PIN 0xDF56
```

[EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-onlinepin), duplicated by [TAG_DF56_TRANSACTION_RECOVERY_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df56-transaction-recovery-limit). 

### define TAG_DF57_AC_ADD_OK_CLESS

```cpp
#define TAG_DF57_AC_ADD_OK_CLESS 0xDF57
```

[EMV_CTLS_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive). 

### define TAG_DF5D_CL_MAGSTRIPE_T2

```cpp
#define TAG_DF5D_CL_MAGSTRIPE_T2 0xDF5D
```

reserved for CTLS magstripe data, duplicated to DF5E 

### define TAG_DF5E_CL_MAGSTRIPE_T2

```cpp
#define TAG_DF5E_CL_MAGSTRIPE_T2 0xDF5E
```

contactless magstripe data in [EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)

### define TAG_DF5F_ADD_APP_VERSION

```cpp
#define TAG_DF5F_ADD_APP_VERSION 0xDF5F
```

see [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no)

### define TAG_DF41_TRANSACTION_RECOVERY_CNTR

```cpp
#define TAG_DF41_TRANSACTION_RECOVERY_CNTR 0xDF41
```

MIR private kernel tag: Transaction Recovery Counter (TRC), can be used in [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags)

### define TAG_DF51_TRM_FLOOR_LIMIT

```cpp
#define TAG_DF51_TRM_FLOOR_LIMIT 0xDF51
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalFloorLimit_DF51](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalfloorlimit-df51). 

### define TAG_DF52_TRM_NOCVM_LIMIT

```cpp
#define TAG_DF52_TRM_NOCVM_LIMIT 0xDF52
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalNoCVMLimit_DF52](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalnocvmlimit-df52)   Duplicated by [TAG_DF52_AUTH_DATA_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df52-auth-data-cless). 

### define TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM

```cpp
#define TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM 0xDF53
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitNonCDCVM_DF53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitnoncdcvm-df53). 

### define TAG_DF54_TRM_CTLS_LIMIT_CDCVM

```cpp
#define TAG_DF54_TRM_CTLS_LIMIT_CDCVM 0xDF54
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitCDCVM_DF54](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitcdcvm-df54)   Duplicated by [TAG_DF54_SCRIPT_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df54-script-cless). 

### define TAG_DF55_TRM_TPM_CAPABILITIES

```cpp
#define TAG_DF55_TRM_TPM_CAPABILITIES 0xDF55
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalTPMCapabilities_DF55](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminaltpmcapabilities-df55)   Duplicated by [TAG_DF55_AC_SWITCH_IF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df55-ac-switch-if). 

### define TAG_DF56_TRANSACTION_RECOVERY_LIMIT

```cpp
#define TAG_DF56_TRANSACTION_RECOVERY_LIMIT 0xDF56
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TransactionRecoveryLimit_DF56](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-transactionrecoverylimit-df56)   Duplicated by [TAG_DF56_AC_ONLINE_PIN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df56-ac-online-pin). 

### define TAG_DF60_VELOCITY_ORIG_IDX

```cpp
#define TAG_DF60_VELOCITY_ORIG_IDX 0xDF60
```

original candidate index in the list of application before it was presented to the Velocity kernel for applications selection (The kernel changes the order of the list according to different "priority" / "partial select" rules, the index keeps the refrence to the original candidate list 

### define TAG_DF61_INF_REC_DATA

```cpp
#define TAG_DF61_INF_REC_DATA 0xDF61
```

in [EMV_CTLS_STARTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data), in [EMV_CTLS_TRANSRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data)

### define TAG_DF62_BUZZER_VOLUME

```cpp
#define TAG_DF62_BUZZER_VOLUME 0xDF62
```

Buzzer Volume, [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume). 

### define TAG_DF63_VELOCITY_EP_PRB

```cpp
#define TAG_DF63_VELOCITY_EP_PRB 0xDF63
```

processing result bitmap from the Entry point kernel 

### define TAG_DF64_KERNEL_DEBUG

```cpp
#define TAG_DF64_KERNEL_DEBUG 0xDF64
```

[EMV_CTLS_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata). 

### define TAG_KERNEL_VERSION

```cpp
#define TAG_KERNEL_VERSION 0xDF65
```

kernel version, see [EMV_CTLS_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion)

### define TAG_HANDLE_APPLI_TYPE

```cpp
#define TAG_HANDLE_APPLI_TYPE 0xDF66
```

Configuration mode for applications and CAP keys, see [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)   Used in EMV_CTLS_SetAppliData(), EMV_CTLS_GetAppliData(), [EMV_CTLS_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-storecapkey)

### define TAG_SUPP_LANG

```cpp
#define TAG_SUPP_LANG 0xDF67
```

supported languages, see [EMV_CTLS_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang)

### define TAG_ATR

```cpp
#define TAG_ATR 0xDF68
```

not used in CTLS environment 

### define TAG_EXCLUDE_AID

```cpp
#define TAG_EXCLUDE_AID 0xDF69
```

AIDs to exclude from the configuration list for this transaction, [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids). 

### define TAG_EMV_CONFORM

```cpp
#define TAG_EMV_CONFORM 0xDF6A
```

not used in CTLS environment 

### define TAG_DF6B_TRACK1_EQUIVALENT

```cpp
#define TAG_DF6B_TRACK1_EQUIVALENT 0xDF6B
```

Track 1 Equivalent Data, ASCII ..79 characters (=76 w/ or w/o start/end sentinal, LRC) 

### define TAG_DF6C_CONFIG_ID

```cpp
#define TAG_DF6C_CONFIG_ID 0xDF6C
```

Unique id generated when terminal configuration has changed and the option [EMV_CTLS_INIT_OPT_EPP_MASTER](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-epp-master) is set. 

### define TAG_DF6D_TRY_AGAIN_LIMIT

```cpp
#define TAG_DF6D_TRY_AGAIN_LIMIT 0xDF6D
```

[EMV_CTLS_APPLIDATA_IK_STRUCT::TryAgainLimit_DF6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tryagainlimit-df6d). 

### define TAG_DF6D_MODEL_NAME

```cpp
#define TAG_DF6D_MODEL_NAME 0xDF6D
```

Model included in [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) and [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) derived for use with emv-desired.xml and emv-allowed.xml. 

### define TAG_DF6E_CONFIG_DESIRED

```cpp
#define TAG_DF6E_CONFIG_DESIRED 0xDF6E
```

Desired L2 kernel list to be sent from EPP master with [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata) and [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata)

### define TAG_DF6E_ADDITIONAL_UI_INFO

```cpp
#define TAG_DF6E_ADDITIONAL_UI_INFO 0xDF6E
```

Tag for reading Interac additional UI info from Interac kernel via [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) (mapped to TAG_IK0A) 

### define TAG_DF6F_L1DRIVER_VERSION

```cpp
#define TAG_DF6F_L1DRIVER_VERSION 0xDF6F
```

L1 driver version given back from [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF6F_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6f-l1driver-version),    L1DriverVersion in [EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-l1driver-version). 

### define TAG_DFD002_APPNAME_CHOSEN

```cpp
#define TAG_DFD002_APPNAME_CHOSEN 0xDFD002
```

chosen application name based on the combination 9F12, 9F11, 50, application default name, up to 16 byte ASCII string 

### define TAG_DFD003_Kernel_ID

```cpp
#define TAG_DFD003_Kernel_ID 0xDFD003
```

chosen (Velocity) kernel ID based on the EP processing in combination with probable domestic processing, 3 byte binary according to the EMVCo specified kernel ID 

### define TAG_DFD004_TANSPARENT_SEND

```cpp
#define TAG_DFD004_TANSPARENT_SEND 0xDFD004
```

for [EMV_CTLS_TransparentSend](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend)

### define TAG_DFD005_TANSPARENT_RECEIVE

```cpp
#define TAG_DFD005_TANSPARENT_RECEIVE 0xDFD005
```

for [EMV_CTLS_TransparentReceive](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive)

### define TAG_DFD006_BEEP_FREQ_SUCCESS

```cpp
#define TAG_DFD006_BEEP_FREQ_SUCCESS 0xDFD006
```

[EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencysuccess). 

### define TAG_DFD007_BEEP_FREQ_ALERT

```cpp
#define TAG_DFD007_BEEP_FREQ_ALERT 0xDFD007
```

[EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencyalert). 

### define TAG_DFD008_SECOND_TAP_DELAY

```cpp
#define TAG_DFD008_SECOND_TAP_DELAY 0xDFD008
```

[EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-secondtapdelay). 

### define TAG_DFD009_HOST_COMM_TIMEOUT

```cpp
#define TAG_DFD009_HOST_COMM_TIMEOUT 0xDFD009
```

[EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hostcommunicationtimeout). 

### define TAG_DF75_CBK_APP_NO

```cpp
#define TAG_DF75_CBK_APP_NO 0xDF75
```

If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list    index is 1-based (1=first, 2=second, ...)    also see [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand). 

### define TAG_DF76_CBK_APP_POSTPROC

```cpp
#define TAG_DF76_CBK_APP_POSTPROC 0xDF76
```

Decide if post processing for the candidates applies (longest match, priority application, ...) or not    (1 byte, 1=TRUE/0=FALSE)    not supported for VFI reader    see [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand). 

### define TAG_DF6C_CBK_REPEAT

```cpp
#define TAG_DF6C_CBK_REPEAT 0xDF6C
```

Decide if ADK should repeat the callback call or not    (1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat    see [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand). 

### define TAG_DF7E_KERNEL_TO_USE

```cpp
#define TAG_DF7E_KERNEL_TO_USE 0xDF7E
```

Set which Kernel should be used. 

### define TAG_DF7F_CBK_COMM_ERR

```cpp
#define TAG_DF7F_CBK_COMM_ERR 0xDF7F
```

During execution of callback function a communication error occured.    Indicator to be set by calling application (1 byte TRUE/FALSE value).    Will result in abort of transaction ([EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal)) 

### define TAG_DF8F58_DE_REQUEST

```cpp
#define TAG_DF8F58_DE_REQUEST 0xDF8F58
```

DataExchange, type of request [Options for DataExchange request](group___c_b_c_k___d_e___r_e_q_u_e_s_t.md), used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange). 

### define TAG_DF8F59_DE_STATE

```cpp
#define TAG_DF8F59_DE_STATE 0xDF8F59
```

DataExchange, kernel state [Options for DataExchange state](group___c_b_c_k___d_e___s_t_a_t_e.md), used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange). 

### define TAG_DF8F5A_DE_MODE

```cpp
#define TAG_DF8F5A_DE_MODE 0xDF8F5A
```

DataExchange, mode [Options for DataExchange mode](group___c_b_c_k___d_e___m_o_d_e.md), used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange). 

### define TAG_DF8F50_RUPAY_GPO

```cpp
#define TAG_DF8F50_RUPAY_GPO 0xDF8F50
```

RuPay DataExchange service shortlist before GPO, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF16_CBK_SERVICE_SHORTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf16-cbk-service-shortlist). 

### define TAG_DF8F51_RUPAY_GENAC

```cpp
#define TAG_DF8F51_RUPAY_GENAC 0xDF8F51
```

RuPay DataExchange Rupay additional CDOL Parameters, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF17_CBK_SERVICE_FOR_GENAC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf17-cbk-service-for-genac). 

### define TAG_DF8F60_LED_ADD_INFO

```cpp
#define TAG_DF8F60_LED_ADD_INFO 0xDF8F60
```

LED callback [TAG_BF10_CTLS_CBK_LEDS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf10-ctls-cbk-leds): Additional information, see [LED callback: Additional information](group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md). 

### define TAG_DF8010_DE_REQUEST

```cpp
#define TAG_DF8010_DE_REQUEST TAG_DF8F58_DE_REQUEST
```


**Deprecated**: 

use [TAG_DF8F58_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8f58-de-request) instead 

### define TAG_DF8011_DE_STATE

```cpp
#define TAG_DF8011_DE_STATE TAG_DF8F59_DE_STATE
```


**Deprecated**: 

use [TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state) instead 

### define TAG_DF8012_DE_MODE

```cpp
#define TAG_DF8012_DE_MODE TAG_DF8F5A_DE_MODE
```


**Deprecated**: 

use [TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode) instead 

### define TAG_DF8020_RUPAY_GPO

```cpp
#define TAG_DF8020_RUPAY_GPO TAG_DF8F50_RUPAY_GPO
```


**Deprecated**: 

use [TAG_DF8F50_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8f50-rupay-gpo) instead 

### define TAG_DF8021_RUPAY_GENAC

```cpp
#define TAG_DF8021_RUPAY_GENAC TAG_DF8F51_RUPAY_GENAC
```


**Deprecated**: 

use [TAG_DF8F51_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8f51-rupay-genac) instead 

### define TAG_DF8030_LED_ADD_INFO

```cpp
#define TAG_DF8030_LED_ADD_INFO TAG_DF8F60_LED_ADD_INFO
```


**Deprecated**: 

use [TAG_DF8F60_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8f60-led-add-info) instead 

### define CBCK_LED_ADD_INFO_DONT_TRACE

```cpp
#define CBCK_LED_ADD_INFO_DONT_TRACE 0x01
```

Don't trace this callback in client interface trace, reason: e.g. LED blinking would fill trace buffer with needless information. 

### define TAG_1F70_PASS_TROUGH_CARD_TYPES

```cpp
#define TAG_1F70_PASS_TROUGH_CARD_TYPES 0x1F70
```


### define TAG_1F74_ADDITIONAL_ACTIVATE_OPTIONS_BITMAP

```cpp
#define TAG_1F74_ADDITIONAL_ACTIVATE_OPTIONS_BITMAP 0x1F74
```


### define TAG_DF8F0A_EXIT_OPTIONS

```cpp
#define TAG_DF8F0A_EXIT_OPTIONS 0xDF8F0A
```

Options send with Exit_Framework, see [Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md). 

### define TAG_DF8F0B_TERM_FLOW_OPTIONS

```cpp
#define TAG_DF8F0B_TERM_FLOW_OPTIONS 0xDF8F0B
```

[EMV_CTLS_TERMDATA_STRUCT::FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions). 

### define TAG_DF8F0C_INIT_RESULT_FLAGS

```cpp
#define TAG_DF8F0C_INIT_RESULT_FLAGS 0xDF8F0C
```

Parameter `ulResult` in function [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework), respectively EMV_CTLS_Init_FrameworkClient() 

### define TAG_DF8F0D_SETUP_RES_TRXINFO

```cpp
#define TAG_DF8F0D_SETUP_RES_TRXINFO 0xDF8F0D
```

[EMV_CTLS_STARTRES_STRUCT::TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation). 

### define TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT

```cpp
#define TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT 0xDF8F0E
```

[EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-maxctlstranslimit). 

### define TAG_DF8F0F_APPLYCONFIG_OPTIONS

```cpp
#define TAG_DF8F0F_APPLYCONFIG_OPTIONS 0xDF8F0F
```

Options send with [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration), unsigned long in functional interface, please use 4 byte in the serialization. 

### define TAG_DF8F10_LED_DESIGN_WIDTH

```cpp
#define TAG_DF8F10_LED_DESIGN_WIDTH 0xDF8F10
```

LED width, parameter `width` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)

### define TAG_DF8F11_LED_DESIGN_HEIGHT

```cpp
#define TAG_DF8F11_LED_DESIGN_HEIGHT 0xDF8F11
```

LED height, parameter `height` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)

### define TAG_DF8F12_LED_DESIGN_OFF_COL

```cpp
#define TAG_DF8F12_LED_DESIGN_OFF_COL 0xDF8F12
```

color off LED when off, parameter `color_off` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)

### define TAG_DF8F13_LED_DESIGN_ON_COL

```cpp
#define TAG_DF8F13_LED_DESIGN_ON_COL 0xDF8F13
```

color off LED when on, parameter `color_on` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)

### define TAG_DF8F14_LED_REGION_WIDTH

```cpp
#define TAG_DF8F14_LED_REGION_WIDTH 0xDF8F14
```

Region width, parameter `wRegion` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)

### define TAG_DF8F15_LED_REGION_HEIGHT

```cpp
#define TAG_DF8F15_LED_REGION_HEIGHT 0xDF8F15
```

Region height, parameter `hRegion` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)

### define TAG_DF8F16_LED_REGION_XCOORD

```cpp
#define TAG_DF8F16_LED_REGION_XCOORD 0xDF8F16
```

Region upper left corner x-coordinate, parameter `xRegion` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)

### define TAG_DF8F17_LED_REGION_YCOORD

```cpp
#define TAG_DF8F17_LED_REGION_YCOORD 0xDF8F17
```

Region upper left corner y-coordinate, parameter `yRegion` in [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)

### define TAG_DF8F18_LED_DESIGN_SHAPE

```cpp
#define TAG_DF8F18_LED_DESIGN_SHAPE 0xDF8F18
```

Shape, parameter `shape` in [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended)

### define TAG_DF8F19_LED_DESIGN_SHAPE_PARAM

```cpp
#define TAG_DF8F19_LED_DESIGN_SHAPE_PARAM 0xDF8F19
```

Shape parameters, parameter `shape_params` in [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended)

### define TAG_DF8F1A_LED_DESIGN_OPTIONS

```cpp
#define TAG_DF8F1A_LED_DESIGN_OPTIONS 0xDF8F1A
```

options, parameter `options` in [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended)

### define TAG_DF8F1B_LED_DESIGN_BG_COL

```cpp
#define TAG_DF8F1B_LED_DESIGN_BG_COL 0xDF8F1B
```

background color, parameter `bg_color` in [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended)

### define TAG_DF8F12_DISPLAY_TEXT

```cpp
#define TAG_DF8F12_DISPLAY_TEXT 0xDF8F12
```

used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF14_CBK_TEXT_DISPLAY](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf14-cbk-text-display)

### define TAG_DF8F13_UI_MSG_ID

```cpp
#define TAG_DF8F13_UI_MSG_ID 0xDF8F13
```

EMVCo Book A UI request message id, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF14_CBK_TEXT_DISPLAY](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf14-cbk-text-display). 

### define TAG_DF8F14_UI_MSG_ID_RESTART

```cpp
#define TAG_DF8F14_UI_MSG_ID_RESTART 0xDF8F14
```

EMVCo Book A UI request message id for restart, used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF14_CBK_TEXT_DISPLAY](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf14-cbk-text-display). 

### define TAG_DF8F20_CTLS_CARD_TPYE

```cpp
#define TAG_DF8F20_CTLS_CARD_TPYE 0xDF8F20
```

Detailed CTLS card type, available if a CTLS non EMV card is detected,. 



 VERTEX: always available, VFI reader: only available if [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) was started with [EMV_CTLS_START_TYPE::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes)

 Value follows the definitions of Verifone's "CTLS Interface Developers Guide": 

* 0 = None (Card Not Detected or Could Not Activate) 
* 1 = ISO 14443 Type A (Supports ISO 14443-4 Protocol) 
* 2 = ISO 14443 Type B (Supports ISO 14443-4 Protocol) 
* 3 = Mifare Type A (Standard) 
* 4 = Mifare Type A (Ultralight) 
* 5 = ISO 14443 Type A (Does not support ISO 14443-4 Protocol) 
* 6 = ISO 14443 Type B (Does not support ISO 14443-4 Protocol) 
* 7 = ISO 14443 Type A and Mifare (NFC phone) 
* 8 = ISO 14443 Type B and Mifare (NFC phone) 


### define TAG_DF8F21_CTLS_MIFARE_SN

```cpp
#define TAG_DF8F21_CTLS_MIFARE_SN 0xDF8F21
```

Mifare Card Serial number, available if a CTLS non EMV card is detected AND the detected card turns our as Mifare AND the card incldues a serial number. 

### define TAG_DF8F30_REQUESTED_TAGS

```cpp
#define TAG_DF8F30_REQUESTED_TAGS 0xDF8F30
```

for requestedTags parameter in [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags)

### define TAG_DF8F40_VIRTUAL_TVR

```cpp
#define TAG_DF8F40_VIRTUAL_TVR 0xDF8F40
```

   Also used for Epal to fetch internal kernel TVR (tag 95 is always forced to zero). 

TVR-like kernel info for schemes, which does not define TVR (e.g. Visa, China UnionPay). 


### define TAG_DF8F41_VISA_STATUS_BITMAP

```cpp
#define TAG_DF8F41_VISA_STATUS_BITMAP 0xDF8F41
```

Visa Status Bitmap generated by Visa kernel on Transit Transaction, 3 bytes. 

### define TAG_DF8F42_DISCOVER_STATUS_BITMAP

```cpp
#define TAG_DF8F42_DISCOVER_STATUS_BITMAP 0xDF8F42
```

Discover Status Bitmap generated by Discover Connect kernel, 4 bytes. 

### define TAG_DFAB01_KERNEL_ID

```cpp
#define TAG_DFAB01_KERNEL_ID 0xDFAB01
```


### define TAG_DFAB02_ASI

```cpp
#define TAG_DFAB02_ASI 0xDFAB02
```


### define TAG_DFAB03_APP_FLOW_CAP

```cpp
#define TAG_DFAB03_APP_FLOW_CAP 0xDFAB03
```


### define TAG_DFAB04_PRIO_APPS

```cpp
#define TAG_DFAB04_PRIO_APPS 0xDFAB04
```


### define TAG_DFAB05_SPECIAL_TRX_CFG

```cpp
#define TAG_DFAB05_SPECIAL_TRX_CFG 0xDFAB05
```


### define TAG_DFAB06_CHKSUM_EP

```cpp
#define TAG_DFAB06_CHKSUM_EP 0xDFAB06
```


### define TAG_DFAB07_CHKSUM_KERNEL

```cpp
#define TAG_DFAB07_CHKSUM_KERNEL 0xDFAB07
```


### define TAG_DFAB08_RETAP_FIELD_OFF

```cpp
#define TAG_DFAB08_RETAP_FIELD_OFF 0xDFAB08
```


### define TAG_DFAB20_ADD_TAGS_TRM

```cpp
#define TAG_DFAB20_ADD_TAGS_TRM 0xDFAB20
```


### define TAG_DFAB21_ADD_TAGS_CRD

```cpp
#define TAG_DFAB21_ADD_TAGS_CRD 0xDFAB21
```


### define TAG_DFAB22_DEF_APP_NAME

```cpp
#define TAG_DFAB22_DEF_APP_NAME 0xDFAB22
```


### define TAG_DFAB23_INTERNAL_KERNEL_ID

```cpp
#define TAG_DFAB23_INTERNAL_KERNEL_ID 0xDFAB23
```


### define TAG_DFAB30_TEC_SUPPORT

```cpp
#define TAG_DFAB30_TEC_SUPPORT 0xDFAB30
```


### define TAG_DFAB31_APP_FLOW_CAP

```cpp
#define TAG_DFAB31_APP_FLOW_CAP 0xDFAB31
```


### define TAG_DFAB40_CTLS_FLOOR_LIMIT

```cpp
#define TAG_DFAB40_CTLS_FLOOR_LIMIT 0xDFAB40
```


### define TAG_DFAB41_CTLS_TRX_LIMIT

```cpp
#define TAG_DFAB41_CTLS_TRX_LIMIT 0xDFAB41
```


### define TAG_DFAB42_CTLS_CVM_REQ_LIMIT

```cpp
#define TAG_DFAB42_CTLS_CVM_REQ_LIMIT 0xDFAB42
```


### define TAG_DFAB43_TAC_DEFAULT

```cpp
#define TAG_DFAB43_TAC_DEFAULT 0xDFAB43
```


### define TAG_DFAB44_TAC_DENIAL

```cpp
#define TAG_DFAB44_TAC_DENIAL 0xDFAB44
```


### define TAG_DFAB45_TAC_ONLINE

```cpp
#define TAG_DFAB45_TAC_ONLINE 0xDFAB45
```


### define TAG_DFAB46_RISK_MGMT_THRESHOLD

```cpp
#define TAG_DFAB46_RISK_MGMT_THRESHOLD 0xDFAB46
```


### define TAG_DFAB47_RISK_MGMT_TRGT_PRCT

```cpp
#define TAG_DFAB47_RISK_MGMT_TRGT_PRCT 0xDFAB47
```


### define TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT

```cpp
#define TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT 0xDFAB48
```


### define TAG_DFAB49_DRL_SWITCHES

```cpp
#define TAG_DFAB49_DRL_SWITCHES 0xDFAB49
```


### define TAG_DFAB4A_CTLS_TRX_LIMIT_CASH

```cpp
#define TAG_DFAB4A_CTLS_TRX_LIMIT_CASH 0xDFAB4A
```


### define TAG_DFAB4B_COMBINATION_OPTIONS

```cpp
#define TAG_DFAB4B_COMBINATION_OPTIONS 0xDFAB4B
```


### define TAG_DFAB4C_REMOVAL_TIMEOUT

```cpp
#define TAG_DFAB4C_REMOVAL_TIMEOUT 0xDFAB4C
```


### define TAG_DFAB4D_RUPAY_CALLBACK_TIMEOUT

```cpp
#define TAG_DFAB4D_RUPAY_CALLBACK_TIMEOUT 0xDFAB4D
```


### define TAG_DFAB4E_RUPAY_TORN_TRX_INTERVAL

```cpp
#define TAG_DFAB4E_RUPAY_TORN_TRX_INTERVAL 0xDFAB4E
```


### define TAG_DFAB4F_PURE_CTLS_APP_KERN_CAP

```cpp
#define TAG_DFAB4F_PURE_CTLS_APP_KERN_CAP 0xDFAB4F
```


### define TAG_DFAB50_PURE_MTOL

```cpp
#define TAG_DFAB50_PURE_MTOL 0xDFAB50
```


### define TAG_DFAB51_CTLS_DEFAULT_DDOL

```cpp
#define TAG_DFAB51_CTLS_DEFAULT_DDOL 0xDFAB51
```


### define TAG_DFAB52_AMEX_UN_RANGE

```cpp
#define TAG_DFAB52_AMEX_UN_RANGE 0xDFAB52
```


### define TAG_DFAB53_TERMCAP_ABOVE_CVM_LIMIT

```cpp
#define TAG_DFAB53_TERMCAP_ABOVE_CVM_LIMIT 0xDFAB53
```


### define TAG_DFAB54_TERMCAP_BELOW_CVM_LIMIT

```cpp
#define TAG_DFAB54_TERMCAP_BELOW_CVM_LIMIT 0xDFAB54
```


### define TAG_DFAB55_TAC_SWITCH_INTERFACE

```cpp
#define TAG_DFAB55_TAC_SWITCH_INTERFACE 0xDFAB55
```


### define TAG_DFAB56_IAC_SWITCH_INTERFACE

```cpp
#define TAG_DFAB56_IAC_SWITCH_INTERFACE 0xDFAB56
```


### define TAG_DFAB57_MIR_DATA_EXCHANGE_TAGS

```cpp
#define TAG_DFAB57_MIR_DATA_EXCHANGE_TAGS 0xDFAB57
```


### define TAG_DFAB58_ID_LIST

```cpp
#define TAG_DFAB58_ID_LIST 0xDFAB58
```


### define TAG_DFAB59_RANGE_LIST

```cpp
#define TAG_DFAB59_RANGE_LIST 0xDFAB59
```


### define TAG_DFAB5A_PURE_APPLI_AUTH_TRX_TYPE

```cpp
#define TAG_DFAB5A_PURE_APPLI_AUTH_TRX_TYPE 0xDFAB5A
```


### define TAG_DFAB5B_CTLS_TRX_LIMIT_ODCVM

```cpp
#define TAG_DFAB5B_CTLS_TRX_LIMIT_ODCVM 0xDFAB5B
```


### define TAG_FFAB01_DRL_PARAMETER

```cpp
#define TAG_FFAB01_DRL_PARAMETER 0xFFAB01
```


### define TAG_DFDC01_SFI

```cpp
#define TAG_DFDC01_SFI 0xDFDC01
```

SFI from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC02_RECORD_NB

```cpp
#define TAG_DFDC02_RECORD_NB 0xDFDC02
```

Record no. from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC03_READ_STATUS

```cpp
#define TAG_DFDC03_READ_STATUS 0xDFDC03
```

Read status from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC04_SW12

```cpp
#define TAG_DFDC04_SW12 0xDFDC04
```

Status word (SW1/2)from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC05_RECORD

```cpp
#define TAG_DFDC05_RECORD 0xDFDC05
```

Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC06_LOG_FORMAT

```cpp
#define TAG_DFDC06_LOG_FORMAT 0xDFDC06
```

Format of Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

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


### define TAG_DFDE01_HYPERCOM_CONSTRUCTED

```cpp
#define TAG_DFDE01_HYPERCOM_CONSTRUCTED 0xDFDE01
```


### define TAG_DFDE01_KERNEL_PRIVATE_NON_BER

```cpp
#define TAG_DFDE01_KERNEL_PRIVATE_NON_BER 0xDFDE01
```


For enclosing private kernel data with tags that are non-BER-TLV-compliant returned by [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags). In case of multiple of these tags, multiple 'DFDE01' are returned. The pay-load data is preceded by two byte tag number and two byte pay-load data length. 


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

### define CLA_EMV_ALT

```cpp
#define CLA_EMV_ALT 0x40
```

Alternative class for requests to EMV ADK. 

### define CLA_CRD

```cpp
#define CLA_CRD 0x41
```

Class for ICC functions. 

### define CLA_CRD_ALT

```cpp
#define CLA_CRD_ALT 0x42
```

Alternative class for ICC functions. 

### define CLA_LED

```cpp
#define CLA_LED 0x43
```

Class for LED functions. 

### define EMV_CTLS_CLA_CBCK_REQ

```cpp
#define EMV_CTLS_CLA_CBCK_REQ 0x91
```

Class for callback requests from EMV ADK to calling application (see [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md)) 

### define EMV_CTLS_CLA_CBCK_RESP

```cpp
#define EMV_CTLS_CLA_CBCK_RESP 0x92
```

Class for callback responses (see [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md)) 

### define EMV_CTLS_CLA_RET_OK

```cpp
#define EMV_CTLS_CLA_RET_OK 0x90
```

Class for Return with no error. 

### define EMV_CTLS_CLA_RET_ERROR

```cpp
#define EMV_CTLS_CLA_RET_ERROR 0x94
```

Class for Return with error (function not available / parameter error, ...) 

### define P2_SET

```cpp
#define P2_SET 0x00
```

Uaed for config command, e.g. [EMV_CTLS_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata). 

### define P2_GET

```cpp
#define P2_GET 0x01
```

Uaed for config command, e.g. [EMV_CTLS_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata). 

### define P2_CLONE

```cpp
#define P2_CLONE 0x02
```

Used reading configuration data that shall be transfered to another system (internal use, serialised API only) 

### define INS_CBCK_FCT

```cpp
#define INS_CBCK_FCT 0x01
```

Instruction byte used for callback functions, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req). 

### define INS_CBCK_CRD

```cpp
#define INS_CBCK_CRD 0x02
```

Instruction byte used for callbacks to cardreader, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req). 

### define INS_CBCK_TRACE

```cpp
#define INS_CBCK_TRACE 0xFF
```

Instruction byte used for trace output, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req). Also used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) in header field passed to EMV_CTLS_IF_BERTLV for client traces. 

### define INS_INIT

```cpp
#define INS_INIT 0x00
```

Instruction byte for [EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_TERM_CFG

```cpp
#define INS_TERM_CFG 0x01
```

Instruction byte for [EMV_CTLS_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata), [EMV_CTLS_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_APPLI_CFG

```cpp
#define INS_APPLI_CFG 0x02
```

Instruction byte for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific), [EMV_CTLS_GetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getapplidataschemespecific), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CAPKEY_CFG

```cpp
#define INS_CAPKEY_CFG 0x03
```

Instruction byte for [EMV_CTLS_StoreCAPKey](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-storecapkey), [EMV_CTLS_ReadCAPKeys](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-readcapkeys), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_APPLY_CFG

```cpp
#define INS_APPLY_CFG 0x04
```

Instruction byte for [EMV_CTLS_ApplyConfiguration](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_GET_VER

```cpp
#define INS_GET_VER 0x05
```

Instruction byte for [EMV_CTLS_FRAMEWORK_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-framework-getversion), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_VIRT_CFG

```cpp
#define INS_VIRT_CFG 0x06
```

Instruction byte for [EMV_CTLS_MapVirtualTerminal](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_SELECT

```cpp
#define INS_SELECT 0x10
```

Instruction byte for [EMV_CTLS_SetupTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_TRANSAC

```cpp
#define INS_TRANSAC 0x11
```

Instruction byte for [EMV_CTLS_ContinueOffline](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_ONLINE

```cpp
#define INS_ONLINE 0x12
```

Instruction byte for [EMV_CTLS_ContinueOnline](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_RFU

```cpp
#define INS_RFU 0x13
```

Instruction byte used in CT mode only. 

### define INS_FETCH_TAG

```cpp
#define INS_FETCH_TAG 0x14
```

Instruction byte for [EMV_CTLS_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_END_TRX

```cpp
#define INS_END_TRX 0x15
```

Instruction byte for [EMV_CTLS_EndTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-endtransaction), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CND_DATA

```cpp
#define INS_CND_DATA 0x16
```

Instruction byte for [EMV_CTLS_GetCandidateData](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_FETCH_DOL

```cpp
#define INS_FETCH_DOL 0x18
```

Instruction byte for [EMV_CTLS_fetchTxnDOL](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxndol), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_BREAK

```cpp
#define INS_BREAK 0x20
```

Instruction byte for [EMV_CTLS_Break](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-break), used wih [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_ICC_RESET

```cpp
#define INS_ICC_RESET 0x02
```

Instruction byte for [EMV_CTLS_SmartReset](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_ISO

```cpp
#define INS_ICC_ISO 0x03
```

Instruction byte for [EMV_CTLS_SmartISO](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartiso), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_OFF

```cpp
#define INS_ICC_OFF 0x04
```

Instruction byte for [EMV_CTLS_SmartPowerOff](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartpoweroff), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_TRANS

```cpp
#define INS_ICC_TRANS 0x07
```

Instruction byte for [EMV_CTLS_TransparentCommand](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentcommand), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_SEND

```cpp
#define INS_ICC_SEND 0x08
```

Instruction byte for [EMV_CTLS_TransparentSend](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_RECEIVE

```cpp
#define INS_ICC_RECEIVE 0x09
```

Instruction byte for [EMV_CTLS_TransparentReceive](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_REMOVAL

```cpp
#define INS_ICC_REMOVAL 0x0A
```

Instruction byte for [EMV_CTLS_CardRemoval](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-cardremoval), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_LED_SWITCH

```cpp
#define INS_LED_SWITCH 0x03
```

Instruction byte for [EMV_CTLS_LED](group___a_d_k___l_e_d.md#function-emv-ctls-led), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led). 

### define INS_LED_MODE

```cpp
#define INS_LED_MODE 0x04
```

Instruction byte for [EMV_CTLS_LED_SetMode](group___a_d_k___l_e_d.md#function-emv-ctls-led-setmode), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led). 

### define INS_LED_CONF_DESIGN

```cpp
#define INS_LED_CONF_DESIGN 0x05
```

Instruction byte for [EMV_CTLS_LED_ConfigDesign](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led). 

## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     VeriFone
*  Author:      GSS R&D Germany
*  Content:     Definitions and functions for serial interface
****************************************************************************/


#ifndef EMV_CTLS_TLV_H   /* avoid double interface-includes */
  #define EMV_CTLS_TLV_H

#ifdef __cplusplus
extern "C" {
#endif

#include <stdarg.h>

// *************************
// defines for serialization
// *************************

#define HEADER_SIZE          (4)
#define MAX_MESSAGE_SIZE     (2048)
#define MAX_DATA_SIZE        (MAX_MESSAGE_SIZE-HEADER_SIZE)
#define CALLBACK_MESSAGE_SIZE     (2048)  
#define CALLBACK_MESSAGE_SIZE_STM32 100 

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
#define TAG_56_TRACK1_EQUIVALENT    0x56u     
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
#define TAG_8B_POI_INFORMATION      0x8Bu     
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

#define TAG_9F51_APP_CURRENCY_CODE           0x9F51 
#define TAG_9F52_DEFAULT_ACTION              0x9F52 
#define TAG_9F53_CONSECUTIVE_LIM_TRANS_INT   0x9F53 
#define TAG_9F54_CUMULATIVE_TRANS_LIMET      0x9F54 
#define TAG_9F56_ISS_AUTH_INCATOR            0x9F56 
#define TAG_9F5A_APP_PROGRAM_ID              0x9F5A 
#define TAG_9F5D_VISA_AOSA                   0x9F5D 
#define TAG_9F66_TTQ                         0x9F66 
#define TAG_9F6C_VISA_CTQ                    0x9F6C 
#define TAG_9F6D_TRM_APP_VERSION_NB          0x9F6D 
#define TAG_DF04_PK_CVM_REQUIREMENTS         0xDF04 
#define TAG_DF02_PK_FLOOR_LIMIT              0xDF02 
#define TAG_DF01_PK_CVM_REQ_LIMIT            0xDF01 

#define TAG_9F53_TRANS_CATEGORY_CODE                     0x9F53    
#define TAG_9F5E_DS_ID                                   0x9F5E    
#define TAG_9F6B_TRACK2_DATA                             0x9F6B    
#define TAG_9F6D_TRM_APP_MSR_VERSION_NB                  0x9F6D    
#define TAG_9F6E_DEVICE_TYPE_INDICATOR                   0x9F6E    
#define TAG_DF8104_BALANCE_BEFORE                        0xDF8104  
#define TAG_DF8105_BALANCE_AFTER                         0xDF8105  
#define TAG_DF8106_DE_DATA_NEEDED                        0xDF8106  
#define TAG_DF810C_KERNEL_ID                             0xDF810C  
#define TAG_DF8115_ERROR_INDICATION                      0xDF8115  
#define TAG_DF8116_UI_DATA                               0xDF8116  
#define TAG_DF8117_CARD_DATA_INPUT_CAPABILITY            0xDF8117  
#define TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED          0xDF8118  
#define TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED       0xDF8119  
#define TAG_DF811B_KERNEL_CONFIGURATION                  0xDF811B  
#define TAG_DF811C_TRN_TXN_LIFETIME                      0xDF811C  
#define TAG_DF811D_TRN_TXN_NUMBER                        0xDF811D  
#define TAG_DF811E_MSR_CVM_ABOVE_LIMIT                   0xDF811E  
#define TAG_DF811F_SECURITY_CAPABILITY                   0xDF811F  
#define TAG_DF8120_TAC_DEFAULT                           0xDF8120  
#define TAG_DF8121_TAC_DENIAL                            0xDF8121  
#define TAG_DF8122_TAC_ONLINE                            0xDF8122  
#define TAG_DF8123_FLOOR_LIMIT                           0xDF8123  
#define TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM  0xDF8124  
#define TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM  0xDF8125  
#define TAG_DF8126_CVM_REQUIRED_LIMIT                    0xDF8126  
#define TAG_DF8129_OUTCOME_P_SET                         0xDF8129  
#define TAG_DF812C_MSR_CVM_BELOW_LIMIT                   0xDF812C  
#define TAG_DF812D_MESSAGE_HOLD_TIME                     0xDF812D  
#define TAG_DF8130_HOLD_TIME_VALUE                       0xDF8130  
#define TAG_DF8131_PHONE_MSG_TABLE                       0xDF8131  
#define TAG_DF8112_TAGS_TO_READ                          0xDF8112  
#define TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC           0xFF8102  
#define TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC            0xFF8103  
#define TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG           0xDF8110  
#define TAG_DF810D_DSVN_TERM                             0xDF810D  
#define TAG_9F5C_DS_REQUESTED_OPERATOR_ID                0x9F5C    
#define TAG_DF8127_DE_TIMEOUT_VALUE                      0xDF8127  
#define TAG_DF8132_RR_MIN_GRACE_PERIOD                   0xDF8132  
#define TAG_DF8133_RR_MAX_GRACE_PERIOD                   0xDF8133  
#define TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU     0xDF8134  
#define TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU     0xDF8135  
#define TAG_DF8136_RR_ACCURACY_THRESHOLD                 0xDF8136  
#define TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD      0xDF8137  
#define TAG_DF8306_RR_MEASURED_TIME                      0xDF8306  
#define TAG_9F7C_MERCHANT_CUSTOM_DATA                    0x9F7C    

#define TAG_FF8104_DE_DATA_TO_SEND                       0xFF8104  
#define TAG_FF8105_DATA_RECORD                           0xFF8105  

#define TAG_9F53_TRM_INTERCHANGE_PROFILE                 0x9F53    

#define TAG_9F58_MERCH_TYPE_INDICATOR              0x9F58  
#define TAG_9F59_TERM_TRANS_INFO                   0x9F59  
#define TAG_9F5A_TERM_TRANS_TYPE                   0x9F5A  
#define TAG_9F5E_TERM_OPTION_STATUS                0x9F5E  
#define TAG_9F5F_READER_CTLS_FLOOR_LIMIT           0x9F5F  
#define TAG_9F5D_TERM_CTLS_RECEIPT_REQUIRED_LIMIT  0x9F5D  

#define TAG_9F6D_AMEX_CAPABILITIES           0xDF9F6D  
#define TAG_9F6E_AMEX_ENHANCED_CAPABILITIES  0xDF9F6E  

#define TAG_9F71_PURE_GDDOL_RESULTS         0x9F71  
#define TAG_9F74_PURE_DATA_UPDATE_RESULT    0x9F74  
#define TAG_9F76_PURE_TERM_TRX_DATA         0x9F76  
#define TAG_BF70_PURE_PUT_DATA_MSUT         0xBF70  
#define TAG_BF71_PURE_GET_DATA_MSRT         0xBF71  

// ========================================================================================================
// === Verifone internal tags ===
// ========================================================================================================

#define TAG_C0_TRM_CL_CVM_LIMIT     0xC0  
#define TAG_C1_TRM_CL_CEIL_LIMIT    0xC1  
#define TAG_C2_TRM_CL_MODES         0xC2  
#define TAG_C3_INDEX                0xC3  
#define TAG_C4_APP_PRG_ID_LEN       0xC4  
#define TAG_C5_APP_PRG_ID           0xC5  
#define TAG_C6_TXN_LIMIT            0xC6  
#define TAG_C7_LED_ID               0xC7  
#define TAG_C8_LED_STATE            0xC8  
#define TAG_C9_POLL_TIMEOUT         0xC9  
#define TAG_CA_DRL_ON_OFF           0xCA  
#define TAG_CB_BEEP_SCENARIO        0xCB  
#define TAG_FA_VISA_DRL_RISK        0xFA  
#define TAG_FB_PP3_PMSG_TABLE       0xFB  
#define TAG_FC_EP_BF0C_FINAL_SELECT 0xFC  
#define TAG_FD_AMEX_DRL_RISK        0xFD  

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
#define TAG_HOTLIST                 0xFF05  

#define TAG_FF10_DE_DET_DATA        0xFF10  
#define TAG_EXCLUDE_COMBO           0xFF69  

#define TAG_FF8F13_SIGNAL_MSG       0xFF8F13  
#define TAG_FF8F14_SIGNAL_OUT       0xFF8F14  
#define TAG_FF8013_SIGNAL_MSG       TAG_FF8F13_SIGNAL_MSG  
#define TAG_FF8014_SIGNAL_OUT       TAG_FF8F14_SIGNAL_OUT  

#define TAG_FFDC01_LOG_ENTRY_1     0xFFDC01  
#define TAG_FFDC02_LOG_ENTRY_2     0xFFDC02  
#define TAG_FFDC03_LOG_ENTRY_3     0xFFDC03  
#define TAG_FFDC04_LOG_ENTRY_4     0xFFDC04  
#define TAG_FFDC05_LOG_ENTRY_5     0xFFDC05  
#define TAG_FFDC06_LOG_ENTRY_6     0xFFDC06  
#define TAG_FFDC07_LOG_ENTRY_7     0xFFDC07  
#define TAG_FFDC08_LOG_ENTRY_8     0xFFDC08  
#define TAG_FFDC09_LOG_ENTRY_9     0xFFDC09  
#define TAG_FFDC0A_LOG_ENTRY_A     0xFFDC0A  
#define TAG_FFDC0B_LOG_ENTRY_B     0xFFDC0B  
#define TAG_FFDC0C_LOG_ENTRY_C     0xFFDC0C  
#define TAG_FFDC0D_LOG_ENTRY_D     0xFFDC0D  
#define TAG_FFDC0E_LOG_ENTRY_E     0xFFDC0E  
#define TAG_FFDC0F_LOG_ENTRY_F     0xFFDC0F  


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

#define TAG_DF10_MSR_CVM_BELOW      0xDF10  
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
#define TAG_DF2B_APP_FLOW_CAP       0xDF2B  
#define TAG_DF2C_ADD_TAGS_CRD       0xDF2C  
#define TAG_DF2D_EMV_APPLI          0xDF2D  
#define TAG_DF2E_CVM_NOT_SUPP       0xDF2E  
#define TAG_DF2F_MSR_CVM_ABOVE      0xDF2F  

#define TAG_DF30_RETAP_FIELD_OFF    0xDF30  
#define TAG_DF32_MC_BALANCE_8104    0xDF32  
#define TAG_DF33_APPLICATION_TAG_50 0xDF33  
#define TAG_DF36_TRX_OPTIONS        0xDF36  
#define TAG_DF38_MC_BALANCE_8105    0xDF38  
#define TAG_DF3A_FB_MSR_OPTIONS     0xDF3A  
#define TAG_DF3A_ADD_TRM_CAP_EXT    0xDF3A  
#define TAG_DF3B_PARAMETER_1        0xDF3B  
#define TAG_DF3C_PARAMETER_2        0xDF3C  
#define TAG_DF3D_PARAMETER_3        0xDF3D  

#define TAG_DF40_FORCE_ONLINE       0xDF40  
// see TAG_DF41_TRANSACTION_RECOVERY_CNTR
#define TAG_DF42_STATUS             0xDF42  
#define TAG_DF44_CHIP_CVM_BELOW     0xDF44  
#define TAG_DF45_CHIP_TXN_LIFETIME  0xDF45  
#define TAG_DF46_CHIP_TXN_NO        0xDF46  
#define TAG_DF48_ONLINE_SWITCH      0xDF48  
#define TAG_DF49_CEIL_LIMIT_MOBILE  0xDF49  
#define TAG_DF4B_DOM_CHIP_APPLI     0xDF4B  
#define TAG_DF4C_FALLB_MSR_APPLI    0xDF4C  
#define TAG_DF4D_CARD_CONF          0xDF4D  
#define TAG_DF4E_PASSTROUGH         0xDF4E  
#define TAG_DF4F_CARDTYPE           0xDF4F  

#define TAG_DF50_ONL_RES            0xDF50  
// see TAG_DF51_TRM_FLOOR_LIMIT
#define TAG_DF52_AUTH_DATA_CLESS    0xDF52  
// see TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM
#define TAG_DF54_SCRIPT_CLESS       0xDF54  
#define TAG_DF55_AC_SWITCH_IF       0xDF55  
#define TAG_DF56_AC_ONLINE_PIN      0xDF56  
#define TAG_DF57_AC_ADD_OK_CLESS    0xDF57  
#define TAG_DF5D_CL_MAGSTRIPE_T2    0xDF5D  
#define TAG_DF5E_CL_MAGSTRIPE_T2    0xDF5E  
#define TAG_DF5F_ADD_APP_VERSION    0xDF5F  

// MIR Tags
#define TAG_DF41_TRANSACTION_RECOVERY_CNTR   0xDF41  
#define TAG_DF51_TRM_FLOOR_LIMIT             0xDF51  
#define TAG_DF52_TRM_NOCVM_LIMIT             0xDF52  
#define TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM    0xDF53  
#define TAG_DF54_TRM_CTLS_LIMIT_CDCVM        0xDF54  
#define TAG_DF55_TRM_TPM_CAPABILITIES        0xDF55  
#define TAG_DF56_TRANSACTION_RECOVERY_LIMIT  0xDF56  

#define TAG_DF60_VELOCITY_ORIG_IDX  0xDF60  
#define TAG_DF61_INF_REC_DATA       0xDF61  
#define TAG_DF62_BUZZER_VOLUME      0xDF62  
#define TAG_DF63_VELOCITY_EP_PRB    0xDF63  
#define TAG_DF64_KERNEL_DEBUG       0xDF64  
#define TAG_KERNEL_VERSION          0xDF65  
#define TAG_HANDLE_APPLI_TYPE       0xDF66  
#define TAG_SUPP_LANG               0xDF67  
#define TAG_ATR                     0xDF68  
#define TAG_EXCLUDE_AID             0xDF69  
#define TAG_EMV_CONFORM             0xDF6A  
#define TAG_DF6B_TRACK1_EQUIVALENT  0xDF6B  
#define TAG_DF6C_CONFIG_ID          0xDF6C  
#define TAG_DF6D_TRY_AGAIN_LIMIT    0xDF6D  
#define TAG_DF6D_MODEL_NAME         0xDF6D  
#define TAG_DF6E_CONFIG_DESIRED     0xDF6E  
#define TAG_DF6E_ADDITIONAL_UI_INFO 0xDF6E  
#define TAG_DF6F_L1DRIVER_VERSION   0xDF6F  

#define TAG_DFD002_APPNAME_CHOSEN   0xDFD002  
#define TAG_DFD003_Kernel_ID        0xDFD003  

#define TAG_DFD004_TANSPARENT_SEND        0xDFD004 
#define TAG_DFD005_TANSPARENT_RECEIVE     0xDFD005 
#define TAG_DFD006_BEEP_FREQ_SUCCESS      0xDFD006 
#define TAG_DFD007_BEEP_FREQ_ALERT        0xDFD007 
#define TAG_DFD008_SECOND_TAP_DELAY       0xDFD008 
#define TAG_DFD009_HOST_COMM_TIMEOUT      0xDFD009 


#define TAG_DF75_CBK_APP_NO         0xDF75  
#define TAG_DF76_CBK_APP_POSTPROC   0xDF76  
#define TAG_DF6C_CBK_REPEAT         0xDF6C  
#define TAG_DF7E_KERNEL_TO_USE      0xDF7E  
#define TAG_DF7F_CBK_COMM_ERR       0xDF7F  

#define TAG_DF8F58_DE_REQUEST       0xDF8F58  
#define TAG_DF8F59_DE_STATE         0xDF8F59  
#define TAG_DF8F5A_DE_MODE          0xDF8F5A  

#define TAG_DF8F50_RUPAY_GPO        0xDF8F50  
#define TAG_DF8F51_RUPAY_GENAC      0xDF8F51  

#define TAG_DF8F60_LED_ADD_INFO     0xDF8F60  

#define TAG_DF8010_DE_REQUEST       TAG_DF8F58_DE_REQUEST    
#define TAG_DF8011_DE_STATE         TAG_DF8F59_DE_STATE      
#define TAG_DF8012_DE_MODE          TAG_DF8F5A_DE_MODE       
#define TAG_DF8020_RUPAY_GPO        TAG_DF8F50_RUPAY_GPO     
#define TAG_DF8021_RUPAY_GENAC      TAG_DF8F51_RUPAY_GENAC   
#define TAG_DF8030_LED_ADD_INFO     TAG_DF8F60_LED_ADD_INFO  

#define CBCK_LED_ADD_INFO_DONT_TRACE  0x01 

#define TAG_1F70_PASS_TROUGH_CARD_TYPES 0x1F70
#define TAG_1F74_ADDITIONAL_ACTIVATE_OPTIONS_BITMAP 0x1F74

#define TAG_DF8F0A_EXIT_OPTIONS             0xDF8F0A  
#define TAG_DF8F0B_TERM_FLOW_OPTIONS        0xDF8F0B  
#define TAG_DF8F0C_INIT_RESULT_FLAGS        0xDF8F0C  
#define TAG_DF8F0D_SETUP_RES_TRXINFO        0xDF8F0D  
#define TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT  0xDF8F0E  
#define TAG_DF8F0F_APPLYCONFIG_OPTIONS        0xDF8F0F  

#define TAG_DF8F10_LED_DESIGN_WIDTH       0xDF8F10 
#define TAG_DF8F11_LED_DESIGN_HEIGHT      0xDF8F11 
#define TAG_DF8F12_LED_DESIGN_OFF_COL     0xDF8F12 
#define TAG_DF8F13_LED_DESIGN_ON_COL      0xDF8F13 
#define TAG_DF8F14_LED_REGION_WIDTH       0xDF8F14 
#define TAG_DF8F15_LED_REGION_HEIGHT      0xDF8F15 
#define TAG_DF8F16_LED_REGION_XCOORD      0xDF8F16 
#define TAG_DF8F17_LED_REGION_YCOORD      0xDF8F17 
#define TAG_DF8F18_LED_DESIGN_SHAPE       0xDF8F18 
#define TAG_DF8F19_LED_DESIGN_SHAPE_PARAM 0xDF8F19 
#define TAG_DF8F1A_LED_DESIGN_OPTIONS     0xDF8F1A 
#define TAG_DF8F1B_LED_DESIGN_BG_COL      0xDF8F1B 

#define TAG_DF8F12_DISPLAY_TEXT          0xDF8F12  
#define TAG_DF8F13_UI_MSG_ID             0xDF8F13  
#define TAG_DF8F14_UI_MSG_ID_RESTART     0xDF8F14  

#define TAG_DF8F20_CTLS_CARD_TPYE        0xDF8F20  
#define TAG_DF8F21_CTLS_MIFARE_SN        0xDF8F21  

#define TAG_DF8F30_REQUESTED_TAGS        0xDF8F30  

#define TAG_DF8F40_VIRTUAL_TVR           0xDF8F40  
#define TAG_DF8F41_VISA_STATUS_BITMAP    0xDF8F41  
#define TAG_DF8F42_DISCOVER_STATUS_BITMAP 0xDF8F42 



#define TAG_DFAB01_KERNEL_ID                0xDFAB01
#define TAG_DFAB02_ASI                      0xDFAB02
#define TAG_DFAB03_APP_FLOW_CAP             0xDFAB03
#define TAG_DFAB04_PRIO_APPS                0xDFAB04
#define TAG_DFAB05_SPECIAL_TRX_CFG          0xDFAB05
#define TAG_DFAB06_CHKSUM_EP                0xDFAB06
#define TAG_DFAB07_CHKSUM_KERNEL            0xDFAB07
#define TAG_DFAB08_RETAP_FIELD_OFF          0xDFAB08
#define TAG_DFAB20_ADD_TAGS_TRM             0xDFAB20
#define TAG_DFAB21_ADD_TAGS_CRD             0xDFAB21
#define TAG_DFAB22_DEF_APP_NAME             0xDFAB22
#define TAG_DFAB23_INTERNAL_KERNEL_ID       0xDFAB23

#define TAG_DFAB30_TEC_SUPPORT              0xDFAB30
#define TAG_DFAB31_APP_FLOW_CAP             0xDFAB31

#define TAG_DFAB40_CTLS_FLOOR_LIMIT         0xDFAB40
#define TAG_DFAB41_CTLS_TRX_LIMIT           0xDFAB41
#define TAG_DFAB42_CTLS_CVM_REQ_LIMIT       0xDFAB42
#define TAG_DFAB43_TAC_DEFAULT              0xDFAB43
#define TAG_DFAB44_TAC_DENIAL               0xDFAB44
#define TAG_DFAB45_TAC_ONLINE               0xDFAB45
#define TAG_DFAB46_RISK_MGMT_THRESHOLD      0xDFAB46
#define TAG_DFAB47_RISK_MGMT_TRGT_PRCT      0xDFAB47
#define TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT  0xDFAB48
#define TAG_DFAB49_DRL_SWITCHES             0xDFAB49
#define TAG_DFAB4A_CTLS_TRX_LIMIT_CASH      0xDFAB4A
#define TAG_DFAB4B_COMBINATION_OPTIONS      0xDFAB4B
#define TAG_DFAB4C_REMOVAL_TIMEOUT          0xDFAB4C
#define TAG_DFAB4D_RUPAY_CALLBACK_TIMEOUT   0xDFAB4D
#define TAG_DFAB4E_RUPAY_TORN_TRX_INTERVAL  0xDFAB4E
#define TAG_DFAB4F_PURE_CTLS_APP_KERN_CAP   0xDFAB4F
#define TAG_DFAB50_PURE_MTOL                0xDFAB50
#define TAG_DFAB51_CTLS_DEFAULT_DDOL        0xDFAB51
#define TAG_DFAB52_AMEX_UN_RANGE            0xDFAB52
#define TAG_DFAB53_TERMCAP_ABOVE_CVM_LIMIT  0xDFAB53
#define TAG_DFAB54_TERMCAP_BELOW_CVM_LIMIT  0xDFAB54
#define TAG_DFAB55_TAC_SWITCH_INTERFACE     0xDFAB55
#define TAG_DFAB56_IAC_SWITCH_INTERFACE     0xDFAB56
#define TAG_DFAB57_MIR_DATA_EXCHANGE_TAGS   0xDFAB57
#define TAG_DFAB58_ID_LIST                  0xDFAB58
#define TAG_DFAB59_RANGE_LIST               0xDFAB59
#define TAG_DFAB5A_PURE_APPLI_AUTH_TRX_TYPE 0xDFAB5A
#define TAG_DFAB5B_CTLS_TRX_LIMIT_ODCVM     0xDFAB5B



#define TAG_FFAB01_DRL_PARAMETER            0xFFAB01


// range 0xDFD9xx reserved for encryption manager
// range 0xDFDAxx reserved for msr
// range 0xDFDBxx reserved for technology selection

#define TAG_DFDC01_SFI          0xDFDC01    
#define TAG_DFDC02_RECORD_NB    0xDFDC02    
#define TAG_DFDC03_READ_STATUS  0xDFDC03    
#define TAG_DFDC04_SW12         0xDFDC04    
#define TAG_DFDC05_RECORD       0xDFDC05    
#define TAG_DFDC06_LOG_FORMAT   0xDFDC06    



// tags for L1 Status
#define TAG_DFDD01_L1_ISSUE                     0xDFDD01
#define TAG_DFDD02_L1_ISSUE_REASON          0xDFDD02
#define TAG_DFDD03_L1_ISSUE_COMMAND         0xDFDD03
#define TAG_DFDD04_L1_LAST_COMMAND          0xDFDD04
#define TAG_DFDD05_L1_LAST_SW12             0xDFDD05

#define TAG_DFDE01_HYPERCOM_CONSTRUCTED   0xDFDE01 // for backward compatibility only - instead use TAG_DFDE01_KERNEL_PRIVATE_NON_BER
#define TAG_DFDE01_KERNEL_PRIVATE_NON_BER 0xDFDE01 

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
#define CLA_EMV_ALT    0x40 
#define CLA_CRD        0x41 
#define CLA_CRD_ALT    0x42 
#define CLA_LED        0x43 
#define EMV_CTLS_CLA_CBCK_REQ   0x91 
#define EMV_CTLS_CLA_CBCK_RESP  0x92 

#define EMV_CTLS_CLA_RET_OK     0x90 
#define EMV_CTLS_CLA_RET_ERROR  0x94 

#define P2_SET         0x00  
#define P2_GET         0x01  
#define P2_CLONE       0x02  

#define INS_CBCK_FCT        0x01 
#define INS_CBCK_CRD        0x02 
#define INS_CBCK_TRACE      0xFF 
#define INS_INIT            0x00 
#define INS_TERM_CFG        0x01 
#define INS_APPLI_CFG       0x02 
#define INS_CAPKEY_CFG      0x03 
#define INS_APPLY_CFG       0x04 
#define INS_GET_VER         0x05 
#define INS_VIRT_CFG        0x06 
#define INS_SELECT          0x10 
#define INS_TRANSAC         0x11 
#define INS_ONLINE          0x12 
#define INS_RFU             0x13 
#define INS_FETCH_TAG       0x14 
#define INS_END_TRX         0x15 
#define INS_CND_DATA        0x16 

#define INS_FETCH_DOL       0x18 
#define INS_BREAK           0x20 
#define INS_ICC_RESET       0x02 
#define INS_ICC_ISO         0x03 
#define INS_ICC_OFF         0x04 
#define INS_ICC_TRANS       0x07 
#define INS_ICC_SEND        0x08 
#define INS_ICC_RECEIVE     0x09 
#define INS_ICC_REMOVAL     0x0A 
#define INS_LED_SWITCH      0x03 
#define INS_LED_MODE        0x04 
#define INS_LED_CONF_DESIGN 0x05 

#ifdef __cplusplus
}    // extern "C"
  #endif

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

---
title: emv/EMV_CT_Common/export/emv/EMV_CT_XML.h

---

# emv/EMV_CT_Common/export/emv/EMV_CT_XML.h



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[XML_TAG_TERMDATA](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata)** <br>constructed xml tag for terminal data, used in file "EMV_Terminal.xml"  |
|  | **[XML_TAG_TERMDATA_TERM_TYP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-term-typ)** <br>TLV tag [TAG_9F35_TRM_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f35-trm-type)   Struct element [EMV_CT_TERMDATA_STRUCT::TermTyp](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp).  |
|  | **[XML_TAG_TERMDATA_COUNTRY_CODE_TERM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-country-code-term)** <br>TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1a-trm-country-code)   Struct element [EMV_CT_TERMDATA_STRUCT::TermCountryCode](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcountrycode).  |
|  | **[XML_TAG_TERMDATA_TERM_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-term-cap)** <br>TLV tag [TAG_9F33_TRM_CAPABILITIES](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f33-trm-capabilities)   Struct element [EMV_CT_TERMDATA_STRUCT::TermCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcap).  |
|  | **[XML_TAG_TERMDATA_TERM_ADD_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-term-add-cap)** <br>TLV tag [TAG_9F40_ADD_TRM_CAP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f40-add-trm-cap)   Struct element [EMV_CT_TERMDATA_STRUCT::TermAddCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termaddcap).  |
|  | **[XML_TAG_TERMDATA_TERM_IDENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-term-ident)** <br>TLV tag [TAG_9F1C_TRM_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1c-trm-id)   Struct element [EMV_CT_TERMDATA_STRUCT::TermIdent](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termident).  |
|  | **[XML_TAG_TERMDATA_CURRENCY_TRANS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-currency-trans)** <br>TLV tag [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency)   Struct element [EMV_CT_TERMDATA_STRUCT::CurrencyTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans).  |
|  | **[XML_TAG_TERMDATA_EXP_TRANS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-exp-trans)** <br>TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp)   Struct element [EMV_CT_TERMDATA_STRUCT::ExpTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans).  |
|  | **[XML_TAG_TERMDATA_SUPP_LANG](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-supp-lang)** <br>TLV tag [TAG_SUPP_LANG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-supp-lang)   Struct element [EMV_CT_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang).  |
|  | **[XML_TAG_TERMDATA_IFD_SERIAL_NUMBER](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-ifd-serial-number)** <br>TLV tag [TAG_9F1E_IFD_SERIAL_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1e-ifd-serial-nb)   Struct element [EMV_CT_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber).  |
|  | **[XML_TAG_TERMDATA_KERNEL_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-kernel-version)** <br>TLV tag [TAG_KERNEL_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-kernel-version)   Struct element [EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion).  |
|  | **[XML_TAG_TERMDATA_FRAMEWORK_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-framework-version)** <br>TLV tag [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version)   Struct element [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion).  |
|  | **[XML_TAG_TERMDATA_L1DRIVER_VERSION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-l1driver-version)** <br>TLV tag [TAG_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-l1driver-version)   Struct element [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion).  |
|  | **[XML_TAG_TERMDATA_SB308_FLAG](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-termdata-sb308-flag)** <br>Format: 1 character [0,1] TLV tag [TAG_DF6F_SB308_FLAG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6f-sb308-flag), used exclusive for Titus.  |
|  | **[XML_TAG_CAP_KEYS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys)** <br>constructed xml tag for CAP key data, used in file "EMV_Keys.xml"  |
|  | **[XML_TAG_CAP_KEYS_CAPKEY](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-capkey)** <br>constructed xml tag for A SINGLE CAP key [EMV_CT_CAPKEY_STRUCT](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md), embedded in [XML_TAG_CAP_KEYS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys) |
|  | **[XML_TAG_CAP_KEYS_INDEX](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-index)** <br>TLV tag [TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index)   Struct element [EMV_CT_CAPKEY_STRUCT::Index](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index).  |
|  | **[XML_TAG_CAP_KEYS_RID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-rid)** <br>TLV tag [TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid)   Struct element [EMV_CT_CAPKEY_STRUCT::RID](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid).  |
|  | **[XML_TAG_CAP_KEYS_KEY](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-key)** <br>TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)   Struct element [EMV_CT_CAPKEY_STRUCT::Key](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key).  |
|  | **[XML_TAG_CAP_KEYS_KEYLEN](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-keylen)** <br>Length of data in TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)   Struct element [EMV_CT_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen).  |
|  | **[XML_TAG_CAP_KEYS_EXPONENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-exponent)** <br>TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent)   Struct element [EMV_CT_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent).  |
|  | **[XML_TAG_CAP_KEYS_HASH](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-hash)** <br>TLV tag [TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash)   Struct element [EMV_CT_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash).  |
|  | **[XML_TAG_CAP_KEYS_REVOC_LIST](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys-revoc-list)** <br>TLV tag [TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl)   Struct element [EMV_CT_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries).  |
|  | **[XML_TAG_APPLIDATA](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata)** <br>constructed xml tag for application data, used in file "EMV_Applications.xml"  |
|  | **[XML_TAG_APPLIDATA_APP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app)** <br>Constructed tag for one AID, embedded in [XML_TAG_APPLIDATA](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata).  |
|  | **[XML_TAG_APPLIDATA_AID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-aid)** <br>TLV tag [TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)   Struct element [EMV_CT_APPLI_STRUCT::AID](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md#variable-aid).  |
|  | **[XML_TAG_APPLIDATA_VER_NUM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-ver-num)** <br>TLV tag [TAG_9F09_TRM_APP_VERSION_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f09-trm-app-version-nb)   Struct element [EMV_CT_APPLIDATA_STRUCT::VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum).  |
|  | **[XML_TAG_APPLIDATA_APP_NAME](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-name)** <br>TLV tag [TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)   Struct element [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname).  |
|  | **[XML_TAG_APPLIDATA_ASI](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-asi)** <br>TLV tag [TAG_DF20_ASI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df20-asi)   Struct element [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi).  |
|  | **[XML_TAG_APPLIDATA_BR_KEY](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-br-key)** <br>TLV tag [TAG_9F15_MERCH_CATEG_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f15-merch-categ-code)   Struct element [EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey).  |
|  | **[XML_TAG_APPLIDATA_TERM_IDENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-term-ident)** <br>TLV tag [TAG_9F1C_TRM_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1c-trm-id)   Struct element [EMV_CT_APPLIDATA_STRUCT::TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident).  |
|  | **[XML_TAG_APPLIDATA_FLOOR_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-floor-limit)** <br>TLV tag [TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit)   Struct element [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit).  |
|  | **[XML_TAG_APPLIDATA_SECURE_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-secure-limit)** <br>TLV tag [TAG_DF49_APL_SEC_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df49-apl-sec-limit)   Struct element [EMV_CT_APPLIDATA_STRUCT::Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit).  |
|  | **[XML_TAG_APPLIDATA_NON_SECURE_CAPS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-non-secure-caps)** <br>TLV tag [TAG_DF4A_APL_SEC_CAPS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4a-apl-sec-caps)   Struct element [EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit).  |
|  | **[XML_TAG_APPLIDATA_THRESHOLD](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-threshold)** <br>TLV tag [TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)   Struct element [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold).  |
|  | **[XML_TAG_APPLIDATA_TARGET_PERCENTAGE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-target-percentage)** <br>TLV tag [TAG_DF26_PERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df26-percent-onl)   Struct element [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage).  |
|  | **[XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-max-target-percentage)** <br>TLV tag [TAG_DF25_MAXPERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df25-maxpercent-onl)   Struct element [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage).  |
|  | **[XML_TAG_APPLIDATA_TAC_DENIAL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-tac-denial)** <br>TLV tag [TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial)   Struct element [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial).  |
|  | **[XML_TAG_APPLIDATA_TAC_ONLINE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-tac-online)** <br>TLV tag [TAG_DF22_TAC_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df22-tac-online)   Struct element [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline).  |
|  | **[XML_TAG_APPLIDATA_TAC_DEFAULT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-tac-default)** <br>TLV tag [TAG_DF23_TAC_DEFAULT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df23-tac-default)   Struct element [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault).  |
|  | **[XML_TAG_APPLIDATA_EMV_APPLICATION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-emv-application)** <br>TLV tag [TAG_DF2D_EMV_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2d-emv-appli)   Struct element [EMV_CT_APPLIDATA_STRUCT::EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application).  |
|  | **[XML_TAG_APPLIDATA_DEFAULT_TDOL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-default-tdol)** <br>TLV tag [TAG_DF27_DEFAULT_TDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df27-default-tdol)   Struct element [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol).  |
|  | **[XML_TAG_APPLIDATA_DEFAULT_DDOL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-default-ddol)** <br>TLV tag [TAG_DF28_DEFAULT_DDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df28-default-ddol)   Struct element [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol).  |
|  | **[XML_TAG_APPLIDATA_MERCH_IDENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-merch-ident)** <br>TLV tag [TAG_9F16_MERCHANT_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f16-merchant-id)   Struct element [EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident).  |
|  | **[XML_TAG_APPLIDATA_CDA_PROCESSING](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-cda-processing)** <br>TLV tag [TAG_DF3E_CDA_PROC](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3e-cda-proc)   Struct element [EMV_CT_APPLIDATA_STRUCT::CDAProcessing](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-cdaprocessing).  |
|  | **[XML_TAG_APPLIDATA_AC_BEFORE_AFTER](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-ac-before-after)** <br>TLV tag [TAG_DF15_OFFL_ONLY_PROCESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df15-offl-only-process)   Struct element [EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-acbeforeafter).  |
|  | **[XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-aip-cvm-not-supported)** <br>TLV tag [TAG_DF2E_CVM_NOT_SUPP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2e-cvm-not-supp)   Struct element [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported).  |
|  | **[XML_TAG_APPLIDATA_POS_ENTRY_MODE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-pos-entry-mode)** <br>TLV tag [TAG_9F39_POS_ENTRY_MODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f39-pos-entry-mode)   Struct element [EMV_CT_APPLIDATA_STRUCT::POS_EntryMode](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-pos-entrymode).  |
|  | **[XML_TAG_APPLIDATA_ADD_VER_NUM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-add-ver-num)** <br>TLV tag [TAG_DF5F_ADD_APP_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5f-add-app-version)   Struct element [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no).  |
|  | **[XML_TAG_APPLIDATA_APP_FLOW_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-flow-cap)** <br>TLV tag [TAG_DF2B_APP_FLOW_CAP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2b-app-flow-cap)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap).  |
|  | **[XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-additional-tags-trm)** <br>TLV tag [TAG_DF29_ADD_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df29-add-tags)   Struct element [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm).  |
|  | **[XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-additional-tags-crd)** <br>TLV tag [TAG_DF2C_ADD_TAGS_CRD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2c-add-tags-crd)   Struct element [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd).  |
|  | **[XML_TAG_APPLIDATA_TAGLIST](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-taglist)** <br>TLV tag [TAG_DF2A_DUTY_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2a-duty-tags)   Struct element [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd).  |
|  | **[XML_TAG_APPLIDATA_APP_TERM_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-term-cap)** <br>TLV tag [TAG_9F33_TRM_CAPABILITIES](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f33-trm-capabilities)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap).  |
|  | **[XML_TAG_APPLIDATA_COUNTRY_CODE_TERM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-country-code-term)** <br>TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1a-trm-country-code)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm).  |
|  | **[XML_TAG_APPLIDATA_APP_TERM_ADD_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-term-add-cap)** <br>TLV tag [TAG_9F40_ADD_TRM_CAP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f40-add-trm-cap)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap).  |
|  | **[XML_TAG_APPLIDATA_APP_TERM_TYP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-term-typ)** <br>TLV tag [TAG_9F35_TRM_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f35-trm-type)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_TermTyp](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termtyp).  |
|  | **[XML_TAG_APPLIDATA_AID_PRIO](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-aid-prio)** <br>TLV tag [TAG_DF1D_PRIO_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1d-prio-appli)   Struct element [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio).  |
|  | **[XML_TAG_APPLIDATA_FALLBACK_MIDS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-fallback-mids)** <br>TLV tag [TAG_DF1D_PRIO_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1d-prio-appli)   Struct element [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids).  |
|  | **[XML_TAG_APPLIDATA_SPECIAL_TRX](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-special-trx)** <br>TLV tag [TAG_DF1C_SPECIAL_TRX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1c-special-trx)   Struct element [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx).  |
|  | **[XML_TAG_APPLIDATA_FALLBACK_HANDLING](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-fallback-handling)** <br>TLV tag [TAG_DF18_FALLABCK](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df18-fallabck)   Struct element [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling).  |
|  | **[XML_TAG_APPLIDATA_CUSTOMER_CVM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-customer-cvm)** <br>TLV tag [TAG_DF2F_CVM_CUSTOM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2f-cvm-custom)   Struct element [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm).  |
|  | **[XML_TAG_APPLIDATA_CHKSUM_PARAMS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chksum-params)** <br>TLV tag [TAG_DF13_TERM_PARAM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df13-term-param)   Struct element [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params).  |
|  | **[XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chksum-ascii-emvco)** <br>TLV tag [TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum)   Struct element [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco).  |
|  | **[XML_TAG_APPLIDATA_MASTER_AID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-master-aid)** <br>TLV tag [TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)   Struct element [EMV_CT_APPLIDATA_STRUCT::MasterAID](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-masteraid).  |
|  | **[XML_TAG_APPLIDATA_TXN_TYPES_SALE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-txn-types-sale)** <br>TLV tag: [TAG_DFD004_TXN_TYPES_SALE](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd004-txn-types-sale)   Struct element: [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale).  |
|  | **[XML_TAG_APPLIDATA_TXN_TYPES_CASH](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-txn-types-cash)** <br>TLV tag: [TAG_DFD005_TXN_TYPES_CASH](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd005-txn-types-cash)   Struct element: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash).  |
|  | **[XML_TAG_APPLIDATA_TXN_TYPES_CASHBACK](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-txn-types-cashback)** <br>TLV tag: [TAG_DFD006_TXN_TYPES_CASHBACK](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd006-txn-types-cashback)   Struct element: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback).  |
|  | **[XML_TAG_APPLIDATA_TXN_TYPES_REFUND](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-txn-types-refund)** <br>TLV tag: [TAG_DFD007_TXN_TYPES_REFUND](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd007-txn-types-refund)   Struct element: [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund).  |
|  | **[XML_TAG_APPLIDATA_DCR_LIST_IDS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-dcr-list-ids)** <br>TLV tag: [TAG_DFAB58_DCR_LIST_IDS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfab58-dcr-list-ids)   Struct element: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids).  |
|  | **[XML_TAG_APPLIDATA_DCR_LIST_RANGES](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-dcr-list-ranges)** <br>TLV tag: [TAG_DFAB59_DCR_LIST_RANGES](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfab59-dcr-list-ranges)   Struct element: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges).  |
|  | **[XML_TAG_VTM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-vtm)** <br>Enclosing tag used in "EMV_VirtualTermConfig.xml".  |
|  | **[XML_TAG_VTM_ENTRY](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-vtm-entry)** <br>One entry in "EMV_VirtualTermConfig.xml".  |
|  | **[XML_TAG_VTM_TERMINAL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-vtm-terminal)** <br>Virtual terminal index used in "EMV_VirtualTermConfig.xml".  |
|  | **[XML_TAG_VTM_TRANSTYPE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-vtm-transtype)** <br>Transaction type used in "EMV_VirtualTermConfig.xml".  |
|  | **[XML_TAG_VTM_CURRENCYCODE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-vtm-currencycode)** <br>Currency code used in "EMV_VirtualTermConfig.xml".  |




## Macros Documentation

### define XML_TAG_TERMDATA

```cpp
#define XML_TAG_TERMDATA "TerminalData"
```

constructed xml tag for terminal data, used in file "EMV_Terminal.xml" 

### define XML_TAG_TERMDATA_TERM_TYP

```cpp
#define XML_TAG_TERMDATA_TERM_TYP "TermTyp"
```

TLV tag [TAG_9F35_TRM_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f35-trm-type)   Struct element [EMV_CT_TERMDATA_STRUCT::TermTyp](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp). 

### define XML_TAG_TERMDATA_COUNTRY_CODE_TERM

```cpp
#define XML_TAG_TERMDATA_COUNTRY_CODE_TERM "CountryCodeTerm"
```

TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1a-trm-country-code)   Struct element [EMV_CT_TERMDATA_STRUCT::TermCountryCode](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcountrycode). 

### define XML_TAG_TERMDATA_TERM_CAP

```cpp
#define XML_TAG_TERMDATA_TERM_CAP "TermCap"
```

TLV tag [TAG_9F33_TRM_CAPABILITIES](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f33-trm-capabilities)   Struct element [EMV_CT_TERMDATA_STRUCT::TermCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcap). 

### define XML_TAG_TERMDATA_TERM_ADD_CAP

```cpp
#define XML_TAG_TERMDATA_TERM_ADD_CAP "TermAddCap"
```

TLV tag [TAG_9F40_ADD_TRM_CAP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f40-add-trm-cap)   Struct element [EMV_CT_TERMDATA_STRUCT::TermAddCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termaddcap). 

### define XML_TAG_TERMDATA_TERM_IDENT

```cpp
#define XML_TAG_TERMDATA_TERM_IDENT "TermIdent"
```

TLV tag [TAG_9F1C_TRM_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1c-trm-id)   Struct element [EMV_CT_TERMDATA_STRUCT::TermIdent](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termident). 

### define XML_TAG_TERMDATA_CURRENCY_TRANS

```cpp
#define XML_TAG_TERMDATA_CURRENCY_TRANS "CurrencyTrans"
```

TLV tag [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency)   Struct element [EMV_CT_TERMDATA_STRUCT::CurrencyTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans). 

### define XML_TAG_TERMDATA_EXP_TRANS

```cpp
#define XML_TAG_TERMDATA_EXP_TRANS "ExpTrans"
```

TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp)   Struct element [EMV_CT_TERMDATA_STRUCT::ExpTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans). 

### define XML_TAG_TERMDATA_SUPP_LANG

```cpp
#define XML_TAG_TERMDATA_SUPP_LANG "SuppLang"
```

TLV tag [TAG_SUPP_LANG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-supp-lang)   Struct element [EMV_CT_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang). 

### define XML_TAG_TERMDATA_IFD_SERIAL_NUMBER

```cpp
#define XML_TAG_TERMDATA_IFD_SERIAL_NUMBER "IFD_SerialNumber"
```

TLV tag [TAG_9F1E_IFD_SERIAL_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1e-ifd-serial-nb)   Struct element [EMV_CT_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber). 

### define XML_TAG_TERMDATA_KERNEL_VERSION

```cpp
#define XML_TAG_TERMDATA_KERNEL_VERSION "KernelVersion"
```

TLV tag [TAG_KERNEL_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-kernel-version)   Struct element [EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion). 

### define XML_TAG_TERMDATA_FRAMEWORK_VERSION

```cpp
#define XML_TAG_TERMDATA_FRAMEWORK_VERSION "FrameworkVersion"
```

TLV tag [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version)   Struct element [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion). 

### define XML_TAG_TERMDATA_L1DRIVER_VERSION

```cpp
#define XML_TAG_TERMDATA_L1DRIVER_VERSION "L1DriverVersion"
```

TLV tag [TAG_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-l1driver-version)   Struct element [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion). 

### define XML_TAG_TERMDATA_SB308_FLAG

```cpp
#define XML_TAG_TERMDATA_SB308_FLAG "EMVCoSB308"
```

Format: 1 character [0,1] TLV tag [TAG_DF6F_SB308_FLAG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6f-sb308-flag), used exclusive for Titus. 

### define XML_TAG_CAP_KEYS

```cpp
#define XML_TAG_CAP_KEYS "CapKeys"
```

constructed xml tag for CAP key data, used in file "EMV_Keys.xml" 

### define XML_TAG_CAP_KEYS_CAPKEY

```cpp
#define XML_TAG_CAP_KEYS_CAPKEY "CapKey"
```

constructed xml tag for A SINGLE CAP key [EMV_CT_CAPKEY_STRUCT](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md), embedded in [XML_TAG_CAP_KEYS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-cap-keys)

### define XML_TAG_CAP_KEYS_INDEX

```cpp
#define XML_TAG_CAP_KEYS_INDEX "Index"
```

TLV tag [TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index)   Struct element [EMV_CT_CAPKEY_STRUCT::Index](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index). 

### define XML_TAG_CAP_KEYS_RID

```cpp
#define XML_TAG_CAP_KEYS_RID "RID"
```

TLV tag [TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid)   Struct element [EMV_CT_CAPKEY_STRUCT::RID](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid). 

### define XML_TAG_CAP_KEYS_KEY

```cpp
#define XML_TAG_CAP_KEYS_KEY "Key"
```

TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)   Struct element [EMV_CT_CAPKEY_STRUCT::Key](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key). 

### define XML_TAG_CAP_KEYS_KEYLEN

```cpp
#define XML_TAG_CAP_KEYS_KEYLEN "KeyLen"
```

Length of data in TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)   Struct element [EMV_CT_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen). 

### define XML_TAG_CAP_KEYS_EXPONENT

```cpp
#define XML_TAG_CAP_KEYS_EXPONENT "Exponent"
```

TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent)   Struct element [EMV_CT_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent). 

### define XML_TAG_CAP_KEYS_HASH

```cpp
#define XML_TAG_CAP_KEYS_HASH "Hash"
```

TLV tag [TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash)   Struct element [EMV_CT_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash). 

### define XML_TAG_CAP_KEYS_REVOC_LIST

```cpp
#define XML_TAG_CAP_KEYS_REVOC_LIST "RevocationList"
```

TLV tag [TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl)   Struct element [EMV_CT_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries). 

### define XML_TAG_APPLIDATA

```cpp
#define XML_TAG_APPLIDATA "ApplicationData"
```

constructed xml tag for application data, used in file "EMV_Applications.xml" 

### define XML_TAG_APPLIDATA_APP

```cpp
#define XML_TAG_APPLIDATA_APP "Application"
```

Constructed tag for one AID, embedded in [XML_TAG_APPLIDATA](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata). 

### define XML_TAG_APPLIDATA_AID

```cpp
#define XML_TAG_APPLIDATA_AID "AID"
```

TLV tag [TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)   Struct element [EMV_CT_APPLI_STRUCT::AID](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md#variable-aid). 

### define XML_TAG_APPLIDATA_VER_NUM

```cpp
#define XML_TAG_APPLIDATA_VER_NUM "VerNum"
```

TLV tag [TAG_9F09_TRM_APP_VERSION_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f09-trm-app-version-nb)   Struct element [EMV_CT_APPLIDATA_STRUCT::VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum). 

### define XML_TAG_APPLIDATA_APP_NAME

```cpp
#define XML_TAG_APPLIDATA_APP_NAME "AppName"
```

TLV tag [TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)   Struct element [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname). 

### define XML_TAG_APPLIDATA_ASI

```cpp
#define XML_TAG_APPLIDATA_ASI "ASI"
```

TLV tag [TAG_DF20_ASI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df20-asi)   Struct element [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi). 

### define XML_TAG_APPLIDATA_BR_KEY

```cpp
#define XML_TAG_APPLIDATA_BR_KEY "BrKey"
```

TLV tag [TAG_9F15_MERCH_CATEG_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f15-merch-categ-code)   Struct element [EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey). 

### define XML_TAG_APPLIDATA_TERM_IDENT

```cpp
#define XML_TAG_APPLIDATA_TERM_IDENT "TermIdent"
```

TLV tag [TAG_9F1C_TRM_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1c-trm-id)   Struct element [EMV_CT_APPLIDATA_STRUCT::TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident). 

### define XML_TAG_APPLIDATA_FLOOR_LIMIT

```cpp
#define XML_TAG_APPLIDATA_FLOOR_LIMIT "FloorLimit"
```

TLV tag [TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit)   Struct element [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit). 

### define XML_TAG_APPLIDATA_SECURE_LIMIT

```cpp
#define XML_TAG_APPLIDATA_SECURE_LIMIT "SecurityLimit"
```

TLV tag [TAG_DF49_APL_SEC_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df49-apl-sec-limit)   Struct element [EMV_CT_APPLIDATA_STRUCT::Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit). 

### define XML_TAG_APPLIDATA_NON_SECURE_CAPS

```cpp
#define XML_TAG_APPLIDATA_NON_SECURE_CAPS "BelowLimitTerminalCapabilities"
```

TLV tag [TAG_DF4A_APL_SEC_CAPS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4a-apl-sec-caps)   Struct element [EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit). 

### define XML_TAG_APPLIDATA_THRESHOLD

```cpp
#define XML_TAG_APPLIDATA_THRESHOLD "Threshold"
```

TLV tag [TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)   Struct element [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold). 

### define XML_TAG_APPLIDATA_TARGET_PERCENTAGE

```cpp
#define XML_TAG_APPLIDATA_TARGET_PERCENTAGE "TargetPercentage"
```

TLV tag [TAG_DF26_PERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df26-percent-onl)   Struct element [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage). 

### define XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE

```cpp
#define XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE "MaxTargetPercentage"
```

TLV tag [TAG_DF25_MAXPERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df25-maxpercent-onl)   Struct element [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage). 

### define XML_TAG_APPLIDATA_TAC_DENIAL

```cpp
#define XML_TAG_APPLIDATA_TAC_DENIAL "TAC_Denial"
```

TLV tag [TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial)   Struct element [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial). 

### define XML_TAG_APPLIDATA_TAC_ONLINE

```cpp
#define XML_TAG_APPLIDATA_TAC_ONLINE "TAC_Online"
```

TLV tag [TAG_DF22_TAC_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df22-tac-online)   Struct element [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline). 

### define XML_TAG_APPLIDATA_TAC_DEFAULT

```cpp
#define XML_TAG_APPLIDATA_TAC_DEFAULT "TAC_Default"
```

TLV tag [TAG_DF23_TAC_DEFAULT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df23-tac-default)   Struct element [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault). 

### define XML_TAG_APPLIDATA_EMV_APPLICATION

```cpp
#define XML_TAG_APPLIDATA_EMV_APPLICATION "EMV_Application"
```

TLV tag [TAG_DF2D_EMV_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2d-emv-appli)   Struct element [EMV_CT_APPLIDATA_STRUCT::EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application). 

### define XML_TAG_APPLIDATA_DEFAULT_TDOL

```cpp
#define XML_TAG_APPLIDATA_DEFAULT_TDOL "DefaultTDOL"
```

TLV tag [TAG_DF27_DEFAULT_TDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df27-default-tdol)   Struct element [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol). 

### define XML_TAG_APPLIDATA_DEFAULT_DDOL

```cpp
#define XML_TAG_APPLIDATA_DEFAULT_DDOL "DefaultDDOL"
```

TLV tag [TAG_DF28_DEFAULT_DDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df28-default-ddol)   Struct element [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol). 

### define XML_TAG_APPLIDATA_MERCH_IDENT

```cpp
#define XML_TAG_APPLIDATA_MERCH_IDENT "MerchIdent"
```

TLV tag [TAG_9F16_MERCHANT_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f16-merchant-id)   Struct element [EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident). 

### define XML_TAG_APPLIDATA_CDA_PROCESSING

```cpp
#define XML_TAG_APPLIDATA_CDA_PROCESSING "CDA_Processing"
```

TLV tag [TAG_DF3E_CDA_PROC](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3e-cda-proc)   Struct element [EMV_CT_APPLIDATA_STRUCT::CDAProcessing](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-cdaprocessing). 

### define XML_TAG_APPLIDATA_AC_BEFORE_AFTER

```cpp
#define XML_TAG_APPLIDATA_AC_BEFORE_AFTER "AC_BeforeAfter"
```

TLV tag [TAG_DF15_OFFL_ONLY_PROCESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df15-offl-only-process)   Struct element [EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-acbeforeafter). 

### define XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED

```cpp
#define XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED "AIP_CVM_NotSupported"
```

TLV tag [TAG_DF2E_CVM_NOT_SUPP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2e-cvm-not-supp)   Struct element [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported). 

### define XML_TAG_APPLIDATA_POS_ENTRY_MODE

```cpp
#define XML_TAG_APPLIDATA_POS_ENTRY_MODE "POS_EntryMode"
```

TLV tag [TAG_9F39_POS_ENTRY_MODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f39-pos-entry-mode)   Struct element [EMV_CT_APPLIDATA_STRUCT::POS_EntryMode](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-pos-entrymode). 

### define XML_TAG_APPLIDATA_ADD_VER_NUM

```cpp
#define XML_TAG_APPLIDATA_ADD_VER_NUM "AdditionalVersionNumbers"
```

TLV tag [TAG_DF5F_ADD_APP_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5f-add-app-version)   Struct element [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no). 

### define XML_TAG_APPLIDATA_APP_FLOW_CAP

```cpp
#define XML_TAG_APPLIDATA_APP_FLOW_CAP "AppFlowCap"
```

TLV tag [TAG_DF2B_APP_FLOW_CAP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2b-app-flow-cap)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap). 

### define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM

```cpp
#define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM "AdditionalTagsTRM"
```

TLV tag [TAG_DF29_ADD_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df29-add-tags)   Struct element [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm). 

### define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD

```cpp
#define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD "AdditionalTagsCRD"
```

TLV tag [TAG_DF2C_ADD_TAGS_CRD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2c-add-tags-crd)   Struct element [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd). 

### define XML_TAG_APPLIDATA_TAGLIST

```cpp
#define XML_TAG_APPLIDATA_TAGLIST "MandatoryTaglistCRD"
```

TLV tag [TAG_DF2A_DUTY_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2a-duty-tags)   Struct element [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd). 

### define XML_TAG_APPLIDATA_APP_TERM_CAP

```cpp
#define XML_TAG_APPLIDATA_APP_TERM_CAP "AppTermCap"
```

TLV tag [TAG_9F33_TRM_CAPABILITIES](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f33-trm-capabilities)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap). 

### define XML_TAG_APPLIDATA_COUNTRY_CODE_TERM

```cpp
#define XML_TAG_APPLIDATA_COUNTRY_CODE_TERM "CountryCodeTerm"
```

TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1a-trm-country-code)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm). 

### define XML_TAG_APPLIDATA_APP_TERM_ADD_CAP

```cpp
#define XML_TAG_APPLIDATA_APP_TERM_ADD_CAP "AppTermAddCap"
```

TLV tag [TAG_9F40_ADD_TRM_CAP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f40-add-trm-cap)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap). 

### define XML_TAG_APPLIDATA_APP_TERM_TYP

```cpp
#define XML_TAG_APPLIDATA_APP_TERM_TYP "AppTerminalType"
```

TLV tag [TAG_9F35_TRM_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f35-trm-type)   Struct element [EMV_CT_APPLIDATA_STRUCT::App_TermTyp](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termtyp). 

### define XML_TAG_APPLIDATA_AID_PRIO

```cpp
#define XML_TAG_APPLIDATA_AID_PRIO "AID_Prio"
```

TLV tag [TAG_DF1D_PRIO_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1d-prio-appli)   Struct element [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio). 

### define XML_TAG_APPLIDATA_FALLBACK_MIDS

```cpp
#define XML_TAG_APPLIDATA_FALLBACK_MIDS "FallbackMIDs"
```

TLV tag [TAG_DF1D_PRIO_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1d-prio-appli)   Struct element [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids). 

### define XML_TAG_APPLIDATA_SPECIAL_TRX

```cpp
#define XML_TAG_APPLIDATA_SPECIAL_TRX "SpecialTRX"
```

TLV tag [TAG_DF1C_SPECIAL_TRX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1c-special-trx)   Struct element [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx). 

### define XML_TAG_APPLIDATA_FALLBACK_HANDLING

```cpp
#define XML_TAG_APPLIDATA_FALLBACK_HANDLING "FallbackHandling"
```

TLV tag [TAG_DF18_FALLABCK](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df18-fallabck)   Struct element [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling). 

### define XML_TAG_APPLIDATA_CUSTOMER_CVM

```cpp
#define XML_TAG_APPLIDATA_CUSTOMER_CVM "CustomerCVM"
```

TLV tag [TAG_DF2F_CVM_CUSTOM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2f-cvm-custom)   Struct element [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm). 

### define XML_TAG_APPLIDATA_CHKSUM_PARAMS

```cpp
#define XML_TAG_APPLIDATA_CHKSUM_PARAMS "ChksumParams"
```

TLV tag [TAG_DF13_TERM_PARAM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df13-term-param)   Struct element [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params). 

### define XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO

```cpp
#define XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO "ChksumASCII_EMVCO"
```

TLV tag [TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum)   Struct element [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco). 

### define XML_TAG_APPLIDATA_MASTER_AID

```cpp
#define XML_TAG_APPLIDATA_MASTER_AID "MasterAID"
```

TLV tag [TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)   Struct element [EMV_CT_APPLIDATA_STRUCT::MasterAID](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-masteraid). 

### define XML_TAG_APPLIDATA_TXN_TYPES_SALE

```cpp
#define XML_TAG_APPLIDATA_TXN_TYPES_SALE "TxnTypesSale"
```

TLV tag: [TAG_DFD004_TXN_TYPES_SALE](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd004-txn-types-sale)   Struct element: [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale). 

### define XML_TAG_APPLIDATA_TXN_TYPES_CASH

```cpp
#define XML_TAG_APPLIDATA_TXN_TYPES_CASH "TxnTypesCash"
```

TLV tag: [TAG_DFD005_TXN_TYPES_CASH](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd005-txn-types-cash)   Struct element: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash). 

### define XML_TAG_APPLIDATA_TXN_TYPES_CASHBACK

```cpp
#define XML_TAG_APPLIDATA_TXN_TYPES_CASHBACK "TxnTypesCashback"
```

TLV tag: [TAG_DFD006_TXN_TYPES_CASHBACK](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd006-txn-types-cashback)   Struct element: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback). 

### define XML_TAG_APPLIDATA_TXN_TYPES_REFUND

```cpp
#define XML_TAG_APPLIDATA_TXN_TYPES_REFUND "TxnTypesRefund"
```

TLV tag: [TAG_DFD007_TXN_TYPES_REFUND](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd007-txn-types-refund)   Struct element: [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund). 

### define XML_TAG_APPLIDATA_DCR_LIST_IDS

```cpp
#define XML_TAG_APPLIDATA_DCR_LIST_IDS "DataContainerReadIds"
```

TLV tag: [TAG_DFAB58_DCR_LIST_IDS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfab58-dcr-list-ids)   Struct element: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids). 

### define XML_TAG_APPLIDATA_DCR_LIST_RANGES

```cpp
#define XML_TAG_APPLIDATA_DCR_LIST_RANGES "DataContainerReadRanges"
```

TLV tag: [TAG_DFAB59_DCR_LIST_RANGES](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfab59-dcr-list-ranges)   Struct element: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges). 

### define XML_TAG_VTM

```cpp
#define XML_TAG_VTM "VirtualTerminalMap"
```

Enclosing tag used in "EMV_VirtualTermConfig.xml". 

### define XML_TAG_VTM_ENTRY

```cpp
#define XML_TAG_VTM_ENTRY "VTMEntry"
```

One entry in "EMV_VirtualTermConfig.xml". 

### define XML_TAG_VTM_TERMINAL

```cpp
#define XML_TAG_VTM_TERMINAL "Terminal"
```

Virtual terminal index used in "EMV_VirtualTermConfig.xml". 

### define XML_TAG_VTM_TRANSTYPE

```cpp
#define XML_TAG_VTM_TRANSTYPE "TransType_9C"
```

Transaction type used in "EMV_VirtualTermConfig.xml". 

### define XML_TAG_VTM_CURRENCYCODE

```cpp
#define XML_TAG_VTM_CURRENCYCODE "CurrencyCode_5F2A"
```

Currency code used in "EMV_VirtualTermConfig.xml". 

## Source code

```cpp
/****************************************************************************
*  Product:     ADK Cards Service - EMV Contact (CT)
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     Definitions for XML config data files
****************************************************************************/

#ifndef EMV_CT_XML_H   /* avoid double interface-includes */
  #define EMV_CT_XML_H


// ========================================================================================================
// === XML tags ===
// ========================================================================================================

#define XML_TAG_TERMDATA                        "TerminalData"            
#define XML_TAG_TERMDATA_TERM_TYP               "TermTyp"                 
#define XML_TAG_TERMDATA_COUNTRY_CODE_TERM      "CountryCodeTerm"         
#define XML_TAG_TERMDATA_TERM_CAP               "TermCap"                 
#define XML_TAG_TERMDATA_TERM_ADD_CAP           "TermAddCap"              
#define XML_TAG_TERMDATA_TERM_IDENT             "TermIdent"               
#define XML_TAG_TERMDATA_CURRENCY_TRANS         "CurrencyTrans"           
#define XML_TAG_TERMDATA_EXP_TRANS              "ExpTrans"                
#define XML_TAG_TERMDATA_SUPP_LANG              "SuppLang"                
#define XML_TAG_TERMDATA_IFD_SERIAL_NUMBER      "IFD_SerialNumber"        
#define XML_TAG_TERMDATA_KERNEL_VERSION         "KernelVersion"           
#define XML_TAG_TERMDATA_FRAMEWORK_VERSION      "FrameworkVersion"        
#define XML_TAG_TERMDATA_L1DRIVER_VERSION       "L1DriverVersion"         
#define XML_TAG_TERMDATA_SB308_FLAG             "EMVCoSB308"              

#define XML_TAG_CAP_KEYS                        "CapKeys"                 
#define XML_TAG_CAP_KEYS_CAPKEY                 "CapKey"                  
#define XML_TAG_CAP_KEYS_INDEX                  "Index"                   
#define XML_TAG_CAP_KEYS_RID                    "RID"                     
#define XML_TAG_CAP_KEYS_KEY                    "Key"                     
#define XML_TAG_CAP_KEYS_KEYLEN                 "KeyLen"                  
#define XML_TAG_CAP_KEYS_EXPONENT               "Exponent"                
#define XML_TAG_CAP_KEYS_HASH                   "Hash"                    
#define XML_TAG_CAP_KEYS_REVOC_LIST             "RevocationList"          

#define XML_TAG_APPLIDATA                       "ApplicationData"                        
#define XML_TAG_APPLIDATA_APP                   "Application"                            
#define XML_TAG_APPLIDATA_AID                   "AID"                                    
#define XML_TAG_APPLIDATA_VER_NUM               "VerNum"                                 
#define XML_TAG_APPLIDATA_APP_NAME              "AppName"                                
#define XML_TAG_APPLIDATA_ASI                   "ASI"                                    
#define XML_TAG_APPLIDATA_BR_KEY                "BrKey"                                  
#define XML_TAG_APPLIDATA_TERM_IDENT            "TermIdent"                              
#define XML_TAG_APPLIDATA_FLOOR_LIMIT           "FloorLimit"                             
#define XML_TAG_APPLIDATA_SECURE_LIMIT          "SecurityLimit"                          
#define XML_TAG_APPLIDATA_NON_SECURE_CAPS       "BelowLimitTerminalCapabilities"         
#define XML_TAG_APPLIDATA_THRESHOLD             "Threshold"                              
#define XML_TAG_APPLIDATA_TARGET_PERCENTAGE     "TargetPercentage"                       
#define XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE "MaxTargetPercentage"                    
#define XML_TAG_APPLIDATA_TAC_DENIAL            "TAC_Denial"                             
#define XML_TAG_APPLIDATA_TAC_ONLINE            "TAC_Online"                             
#define XML_TAG_APPLIDATA_TAC_DEFAULT           "TAC_Default"                            
#define XML_TAG_APPLIDATA_EMV_APPLICATION       "EMV_Application"                        
#define XML_TAG_APPLIDATA_DEFAULT_TDOL          "DefaultTDOL"                            
#define XML_TAG_APPLIDATA_DEFAULT_DDOL          "DefaultDDOL"                            
#define XML_TAG_APPLIDATA_MERCH_IDENT           "MerchIdent"                             
#define XML_TAG_APPLIDATA_CDA_PROCESSING        "CDA_Processing"                         
#define XML_TAG_APPLIDATA_AC_BEFORE_AFTER       "AC_BeforeAfter"                         
#define XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED "AIP_CVM_NotSupported"                   
#define XML_TAG_APPLIDATA_POS_ENTRY_MODE        "POS_EntryMode"                          
#define XML_TAG_APPLIDATA_ADD_VER_NUM           "AdditionalVersionNumbers"               
#define XML_TAG_APPLIDATA_APP_FLOW_CAP          "AppFlowCap"                             
#define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM   "AdditionalTagsTRM"                      
#define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD   "AdditionalTagsCRD"                      
#define XML_TAG_APPLIDATA_TAGLIST               "MandatoryTaglistCRD"                    
#define XML_TAG_APPLIDATA_APP_TERM_CAP          "AppTermCap"                             
#define XML_TAG_APPLIDATA_COUNTRY_CODE_TERM     "CountryCodeTerm"                        
#define XML_TAG_APPLIDATA_APP_TERM_ADD_CAP      "AppTermAddCap"                          
#define XML_TAG_APPLIDATA_APP_TERM_TYP          "AppTerminalType"                        
#define XML_TAG_APPLIDATA_AID_PRIO              "AID_Prio"                               
#define XML_TAG_APPLIDATA_FALLBACK_MIDS         "FallbackMIDs"                           
#define XML_TAG_APPLIDATA_SPECIAL_TRX           "SpecialTRX"                             
#define XML_TAG_APPLIDATA_FALLBACK_HANDLING     "FallbackHandling"                       
#define XML_TAG_APPLIDATA_CUSTOMER_CVM          "CustomerCVM"                            
#define XML_TAG_APPLIDATA_CHKSUM_PARAMS         "ChksumParams"                           
#define XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO    "ChksumASCII_EMVCO"                      
#define XML_TAG_APPLIDATA_MASTER_AID            "MasterAID"                              
#define XML_TAG_APPLIDATA_TXN_TYPES_SALE        "TxnTypesSale"                           
#define XML_TAG_APPLIDATA_TXN_TYPES_CASH        "TxnTypesCash"                           
#define XML_TAG_APPLIDATA_TXN_TYPES_CASHBACK    "TxnTypesCashback"                       
#define XML_TAG_APPLIDATA_TXN_TYPES_REFUND      "TxnTypesRefund"                         
#define XML_TAG_APPLIDATA_DCR_LIST_IDS          "DataContainerReadIds"                   
#define XML_TAG_APPLIDATA_DCR_LIST_RANGES       "DataContainerReadRanges"                


#define XML_TAG_VTM                             "VirtualTerminalMap"                     
#define XML_TAG_VTM_ENTRY                       "VTMEntry"                               
#define XML_TAG_VTM_TERMINAL                    "Terminal"                               
#define XML_TAG_VTM_TRANSTYPE                   "TransType_9C"                           
#define XML_TAG_VTM_CURRENCYCODE                "CurrencyCode_5F2A"                      


#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

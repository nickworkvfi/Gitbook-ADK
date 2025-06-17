---
title: Primitive tags

---

# Primitive tags

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** **/** **[Verifone internal tags](group___v_e_r_i___t_a_g_s.md)**



## Modules

| Name           |
| -------------- |
| **[TLV tags for callback functions](group___t_l_v___c_b_c_k.md)** <br>Used in function EMV_CallbackFunction()  |
| **[Primitive tags for new scheme specific config interface](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md)** <br>Used in functions [EMV_CTLS_SetAppliDataSchemeSpecific()]()/EMV_CTLS_GetAppliDataSchemeSpecific.  |
| **[Tags for callback functions](group___t_l_v___c_b_c_k___t_l_v.md)** <br>Used in function [EMV_CT_CALLBACK_FnT]().  |
| **[3-byte primitive tags](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md)** <br>For all unsigned long variables in functional interface, please use 4 byte in the serialization.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)** <br>Tag for ISO data.  |
|  | **[TAG_TRACE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-trace)** <br>Tag for trace data.  |
|  | **[TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)** <br>CAP Key Number of Keys, 1 byte 0...255.  |
|  | **[TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)** <br>AID in [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md), TRM_SetAppliData(), TRM_GetAppliData(), TRM_SelAppli(), TRM_ReduceCandidateList()  |
|  | **[TAG_DF05_BUILD_APPLILIST](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df05-build-applilist)** <br>not applicable for CTLS  |
|  | **[TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)** <br>L1 reader options  `ucOptions` in [EMV_CTLS_SmartISO()]() |
|  | **[TAG_DF07_UNCRIT_SCR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df07-uncrit-scr)** <br>Script results of uncritical scripts in response to [EMV_CTLS_ContinueOnline()]() [EMV_CTLS_TRANSRES_STRUCT::ScriptResults](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults).  |
|  | **[TAG_DF08_CRIT_SCR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df08-crit-scr)** <br>Script results of uncritical scripts  `Future` use.  |
|  | **[TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index)** <br>CAP Key Index  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_INDEX](),    Index in [EMV_CTLS_CAPKEY_STRUCT::Index](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index),    XML Tag: [XML_TAG_CAP_KEYS_INDEX]().  |
|  | **[TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid)** <br>CAP Key RID  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_RID](),    RID in [EMV_CTLS_CAPKEY_STRUCT::RID](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid),    XML Tag: [XML_TAG_CAP_KEYS_RID]().  |
|  | **[TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)** <br>CAP Key Modulus  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_KEY](),    Key in [EMV_CTLS_CAPKEY_STRUCT::Key](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key),    XML Tag: [XML_TAG_CAP_KEYS_KEY]().  |
|  | **[TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash)** <br>CAP Key Hash  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_HASH](),    Hash in [EMV_CTLS_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash),    XML Tag: [XML_TAG_CAP_KEYS_HASH]().  |
|  | **[TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent)** <br>CAP Key Exponent  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_EXPONENT](),    Exponent in [EMV_CTLS_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT]().  |
|  | **[TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl)** <br>CAP Key Certification Revocation List  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_CRL](),    RevocEntries in [EMV_CTLS_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST]().  |
|  | **[TAG_DF10_MSR_CVM_BELOW](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df10-msr-cvm-below)**  |
|  | **[TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version)** <br>Library version given back from [EMV_CTLS_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](),    FrameworkVersion in [EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION]().  |
|  | **[TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum)** <br>EMVCo checksum given back from [EMV_CTLS_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_KERNEL]().  |
|  | **[TAG_DF13_TERM_PARAM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df13-term-param)**  |
|  | **[TAG_DF14_ADD_TAGS_RES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df14-add-tags-res)** <br>additional tag list requested for result data  `[EMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)` |
|  | **[TAG_DF15_OFFL_ONLY_PROCESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df15-offl-only-process)**  |
|  | **[TAG_KEY_KEYLEN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-keylen)** <br>CAP Key key length  `Struct`, `XML` Reference:    KeyLen in [EMV_CTLS_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN]().  |
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
|  | **[TAG_DF3A_FB_MSR_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3a-fb-msr-options)** <br>EMV_CTLS_APPS_SELECT_STRUCT::xFallback_MS (partially, together with [TAG_DF4C_FALLB_MSR_APPLI]())  |
|  | **[TAG_DF3A_ADD_TRM_CAP_EXT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3a-add-trm-cap-ext)** <br>[EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilitiesExt_DF3A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilitiesext-df3a): Rupay Additional Terminal Capabilities Extension.  |
|  | **[TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)** <br>universal tag no. 1    used for `numberOfAIDs` in [EMV_CTLS_Init_Framework()](), respectively EMV_CTLS_Init_FrameworkClient()    Also used for `VirtualTermMapType` in [EMV_CTLS_MapVirtualTerminal()]() |
|  | **[TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)** <br>universal tag no. 2    used for options in [EMV_CTLS_Init_Framework()](), respectively EMV_CTLS_Init_FrameworkClient()    Also used for `TLVSwitchValue` in [EMV_CTLS_MapVirtualTerminal()]() |
|  | **[TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)** <br>universal tag no. 3    Used for `VirtualTerminal` in [EMV_CTLS_MapVirtualTerminal()]() |
|  | **[TAG_DF40_FORCE_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df40-force-online)** <br>[EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[TAG_DF42_STATUS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df42-status)** <br>[EMV_CTLS_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo), also used for EMV results in callback [TAG_BF15_CBK_CARD_TAPPED]().  |
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
|  | **[TAG_DF52_AUTH_DATA_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df52-auth-data-cless)** <br>[EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata), duplicated by [TAG_DF52_TRM_NOCVM_LIMIT]().  |
|  | **[TAG_DF54_SCRIPT_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df54-script-cless)** <br>EMV_CTLS_HOST_STRUCT::LenScript and [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata)   Duplicated by [TAG_DF54_TRM_CTLS_LIMIT_CDCVM]().  |
|  | **[TAG_DF55_AC_SWITCH_IF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df55-ac-switch-if)** <br>[EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface), duplicated by [TAG_DF55_TRM_TPM_CAPABILITIES]().  |
|  | **[TAG_DF56_AC_ONLINE_PIN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df56-ac-online-pin)** <br>[EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-onlinepin), duplicated by [TAG_DF56_TRANSACTION_RECOVERY_LIMIT]().  |
|  | **[TAG_DF57_AC_ADD_OK_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df57-ac-add-ok-cless)** <br>[EMV_CTLS_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive).  |
|  | **[TAG_DF5D_CL_MAGSTRIPE_T2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5d-cl-magstripe-t2)** <br>reserved for CTLS magstripe data, duplicated to DF5E  |
|  | **[TAG_DF5E_CL_MAGSTRIPE_T2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5e-cl-magstripe-t2)** <br>contactless magstripe data in [EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md) |
|  | **[TAG_DF5F_ADD_APP_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5f-add-app-version)** <br>see [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no) |
|  | **[TAG_DF41_TRANSACTION_RECOVERY_CNTR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df41-transaction-recovery-cntr)** <br>MIR private kernel tag: Transaction Recovery Counter (TRC), can be used in [EMV_CTLS_fetchTxnTags()]() |
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
|  | **[TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)** <br>Configuration mode for applications and CAP keys, see [Modes of application data and CAP key setting]()   Used in EMV_CTLS_SetAppliData(), EMV_CTLS_GetAppliData(), [EMV_CTLS_StoreCAPKey()]() |
|  | **[TAG_SUPP_LANG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-supp-lang)** <br>supported languages, see [EMV_CTLS_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang) |
|  | **[TAG_ATR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-atr)** <br>not used in CTLS environment  |
|  | **[TAG_EXCLUDE_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-exclude-aid)** <br>AIDs to exclude from the configuration list for this transaction, [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids).  |
|  | **[TAG_EMV_CONFORM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-emv-conform)** <br>not used in CTLS environment  |
|  | **[TAG_DF6B_TRACK1_EQUIVALENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6b-track1-equivalent)** <br>Track 1 Equivalent Data, ASCII ..79 characters (=76 w/ or w/o start/end sentinal, LRC)  |
|  | **[TAG_DF6C_CONFIG_ID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6c-config-id)** <br>Unique id generated when terminal configuration has changed and the option [EMV_CTLS_INIT_OPT_EPP_MASTER]() is set.  |
|  | **[TAG_DF6D_TRY_AGAIN_LIMIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6d-try-again-limit)** <br>[EMV_CTLS_APPLIDATA_IK_STRUCT::TryAgainLimit_DF6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tryagainlimit-df6d).  |
|  | **[TAG_DF6D_MODEL_NAME](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6d-model-name)** <br>Model included in [EMV_CT_GetTermData()]() and [EMV_CTLS_GetTermData()]() derived for use with emv-desired.xml and emv-allowed.xml.  |
|  | **[TAG_DF6E_CONFIG_DESIRED](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6e-config-desired)** <br>Desired L2 kernel list to be sent from EPP master with [EMV_CT_SetTermData()]() and [EMV_CTLS_SetTermData()]() |
|  | **[TAG_DF6E_ADDITIONAL_UI_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6e-additional-ui-info)** <br>Tag for reading Interac additional UI info from Interac kernel via [EMV_CTLS_fetchTxnTags()]() (mapped to TAG_IK0A)  |
|  | **[TAG_DF6F_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6f-l1driver-version)** <br>L1 driver version given back from [EMV_CTLS_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF6F_L1DRIVER_VERSION](),    L1DriverVersion in [EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION]().  |
|  | **[TAG_DFD002_APPNAME_CHOSEN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd002-appname-chosen)** <br>chosen application name based on the combination 9F12, 9F11, 50, application default name, up to 16 byte ASCII string  |
|  | **[TAG_DFD003_Kernel_ID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd003-kernel-id)** <br>chosen (Velocity) kernel ID based on the EP processing in combination with probable domestic processing, 3 byte binary according to the EMVCo specified kernel ID  |
|  | **[TAG_DFD004_TANSPARENT_SEND](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd004-tansparent-send)** <br>for [EMV_CTLS_TransparentSend]() |
|  | **[TAG_DFD005_TANSPARENT_RECEIVE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd005-tansparent-receive)** <br>for [EMV_CTLS_TransparentReceive]() |
|  | **[TAG_DFD006_BEEP_FREQ_SUCCESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd006-beep-freq-success)** <br>[EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencysuccess).  |
|  | **[TAG_DFD007_BEEP_FREQ_ALERT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd007-beep-freq-alert)** <br>[EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencyalert).  |
|  | **[TAG_DFD008_SECOND_TAP_DELAY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd008-second-tap-delay)** <br>[EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-secondtapdelay).  |
|  | **[TAG_DFD009_HOST_COMM_TIMEOUT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd009-host-comm-timeout)** <br>[EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hostcommunicationtimeout).  |
|  | **[TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)** <br>Tag for ISO data.  |
|  | **[TAG_TRACE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-trace)** <br>Tag for trace data.  |
|  | **[TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)** <br>CAP Key Number of Keys, 1 byte 0...255.  |
|  | **[TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)** <br>used for [EMV_CT_CANDIDATE_STRUCT::candidate](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-candidate), AID in [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md), TRM_GetAppliData(), TRM_SelAppli(), TRM_ReduceCandidateList()  |
|  | **[TAG_DF05_BUILD_APPLILIST](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df05-build-applilist)** <br>[EMV_CT_SELECT_STRUCT::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist).  |
|  | **[TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)** <br>L1 reader options  `ucOptions` in [EMV_CT_SmartISO()]() |
|  | **[TAG_DF07_UNCRIT_SCR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df07-uncrit-scr)** <br>Script results of uncritical scripts in response to [EMV_CT_ContinueOnline()]() `[EMV_CT_SRCRIPTRES_TYPE::ScriptUnCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptuncritresult)`.  |
|  | **[TAG_DF08_CRIT_SCR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df08-crit-scr)** <br>Script results of critical scripts in response to [EMV_CT_ContinueOnline()]() `[EMV_CT_SRCRIPTRES_TYPE::ScriptCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptcritresult)`.  |
|  | **[TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index)** <br>CAP Key Index  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index),    Index in [EMV_CT_CAPKEY_STRUCT::Index](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index),    XML Tag: [XML_TAG_CAP_KEYS_INDEX]().  |
|  | **[TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid)** <br>CAP Key RID  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid),    RID in [EMV_CT_CAPKEY_STRUCT::RID](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid),    XML Tag: [XML_TAG_CAP_KEYS_RID]().  |
|  | **[TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)** <br>CAP Key Modulus  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key),    Key in [EMV_CT_CAPKEY_STRUCT::Key](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key),    XML Tag: [XML_TAG_CAP_KEYS_KEY]().  |
|  | **[TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash)** <br>CAP Key Hash  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash),    Hash in [EMV_CT_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash),    XML Tag: [XML_TAG_CAP_KEYS_HASH]().  |
|  | **[TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent)** <br>CAP Key Exponent  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent),    Exponent in [EMV_CT_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT]().  |
|  | **[TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl)** <br>CAP Key Certification Revocation List  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl),    RevocEntries in [EMV_CT_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST]().  |
|  | **[TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version)** <br>Library version given back from [EMV_CT_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version),    FrameworkVersion in [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION]().  |
|  | **[TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum)** <br>EMVCo checksum given back from [EMV_CT_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum),    ChksumASCIIEMVCO in [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO]().  |
|  | **[TAG_DF13_TERM_PARAM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df13-term-param)** <br>used for [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params) |
|  | **[TAG_DF14_ADD_TAGS_RES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df14-add-tags-res)**  |
|  | **[TAG_DF15_OFFL_ONLY_PROCESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df15-offl-only-process)** <br>used for EMV_CT_APPLIDATA_STRUCT::ucAC_before_after  |
|  | **[TAG_KEY_KEYLEN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-keylen)** <br>CAP Key key length  `Struct`, `XML` Reference:    KeyLen in [EMV_CT_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN]().  |
|  | **[TAG_DF17_FALLBACK_MIDS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df17-fallback-mids)** <br>used for [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids) |
|  | **[TAG_DF18_FALLABCK](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df18-fallabck)** <br>tag for [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling) |
|  | **[TAG_DF19_PARAMETER_4](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df19-parameter-4)** <br>RFU.  |
|  | **[TAG_DF1C_SPECIAL_TRX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1c-special-trx)** <br>tag for [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx) |
|  | **[TAG_DF1D_PRIO_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1d-prio-appli)** <br>each element of [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio) is packed in this tag  |
|  | **[TAG_DF20_ASI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df20-asi)** <br>used for [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi), [EMV_CT_DOM_CHIP_STRUCT::ucASI](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucasi) |
|  | **[TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial)** <br>see [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]())  |
|  | **[TAG_DF21_TAC_ABLEHNUNG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-ablehnung)**  |
|  | **[TAG_DF22_TAC_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df22-tac-online)** <br>see [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]())  |
|  | **[TAG_DF23_TAC_DEFAULT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df23-tac-default)** <br>see [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]())  |
|  | **[TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)** <br>see [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold)   also used for callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]())  |
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
|  | **[TAG_DF30_LANG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df30-lang)** <br>see customer language index ([Known languages]()), format is like in [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language) |
|  | **[TAG_DF31_TEXT_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df31-text-num)** <br>text index, format is like in [EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext) |
|  | **[TAG_DF33_APPLICATION_TAG_50](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df33-application-tag-50)** <br>[EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-50-applicationname).  |
|  | **[TAG_DF34_AMOUNT_CONF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df34-amount-conf)** <br>EMV_CT_TRANSAC_STRUCT::uc_AmountConfirmation.  |
|  | **[TAG_DF36_TRX_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df36-trx-options)** <br>EMV_CT_TRANSAC_STRUCT::tucTxnOptions.  |
|  | **[TAG_DF37_TRX_STEPS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df37-trx-steps)** <br>[EMV_CT_TRANSAC_STRUCT::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps).  |
|  | **[TAG_DF39_DCC_CBCK_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df39-dcc-cbck-info)** <br>[EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]())  |
|  | **[TAG_DF3A_FB_MSR_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3a-fb-msr-options)** <br>[EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms) (partially, together with [TAG_DF4C_FALLB_MSR_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4c-fallb-msr-appli))  |
|  | **[TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)** <br>RFU.  |
|  | **[TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)** <br>RFU.  |
|  | **[TAG_DF3C_EXT_LOGGING_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-ext-logging-data)** <br>Extended Logging data for DPAS Connect.  |
|  | **[TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)** <br>RFU.  |
|  | **[TAG_DF3E_CDA_PROC](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3e-cda-proc)** <br>EMV_CT_APPLIDATA_STRUCT::uc_CDA_Processing.  |
|  | **[TAG_DF40_FORCE_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df40-force-online)** <br>EMV_CT_SELECT_STRUCT::Force_Online.  |
|  | **[TAG_DF41_PIN_BYPASS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df41-pin-bypass)** <br>If [PIN_BYPASS]() was configured in [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap): This tag is given by EMV ADK in PIN entry callback ([EMV_CT_CALLBACK_FnT]() with [TAG_BF08_CBK_PIN]()).  |
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
|  | **[TAG_DF5B_DCC_PROHIBIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5b-dcc-prohibit)** <br>[EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]())  |
|  | **[TAG_DF5C_DOM_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5c-dom-info)** <br>[EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]())  |
|  | **[TAG_DF5D_DOM_OPTION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5d-dom-option)** <br>[EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]())  |
|  | **[TAG_DF5F_ADD_APP_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5f-add-app-version)** <br>see [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no) |
|  | **[TAG_DF60_VELOCITY_ORIG_IDX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df60-velocity-orig-idx)** <br>original candidate index in the list of application before it was presented to the Velocity kernel for applications selection (The kernel changes the order of the list according to different "priority" / "partial select" rules, the index keeps the refrence to the original candidate list  |
|  | **[TAG_DF61_INF_REC_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df61-inf-rec-data)** <br>[EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data), [EMV_CT_TRANSRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data).  |
|  | **[TAG_DF62_ERROR_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df62-error-data)** <br>Transaction error information according to "Fehlerkennung" (German ZKA specification)  [EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata) and [EMV_CT_TRANSRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata).  |
|  | **[TAG_DF62_APPLI_SELECT_FLAG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df62-appli-select-flag)** <br>Application Selection Flag ('DF62', Interac, Canada), [EMV_CT_CANDIDATE_DATA_STRUCT::DF62_ASF](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-df62-asf).  |
|  | **[TAG_DF63_DISPLAY_TEXT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df63-display-text)** <br>[EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext) and [EMV_CT_TRANSRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext).  |
|  | **[TAG_DF64_KERNEL_DEBUG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df64-kernel-debug)** <br>[EMV_CT_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata).  |
|  | **[TAG_KERNEL_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-kernel-version)** <br>Kernel version ([EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion))  |
|  | **[TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)** <br>Configuration mode for applications [Modes of application data and CAP key setting](), see `eHandleCAPKeyType` in call of [EMV_CT_StoreCAPKey()]() |
|  | **[TAG_SUPP_LANG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-supp-lang)** <br>Supported languages ([EMV_CT_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang))  |
|  | **[TAG_ATR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-atr)** <br>Answer to Reset from ICC (`EMV_CT_SmartReset` in call of [EMV_CT_SmartReset()]()), n byte binary.  |
|  | **[TAG_EXCLUDE_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-exclude-aid)** <br>AIDs to exclude from the configuration list for this transaction ([EMV_CT_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data))  |
|  | **[TAG_EMV_CONFORM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-emv-conform)** <br>EMV compliant app or not (e.g. domestic app)  [EMV_CT_DOM_CHIP_STRUCT::uc_EMVConformSelect](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-uc-emvconformselect).  |
|  | **[TAG_L1DRIVER_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-l1driver-version)** <br>L1 driver version given back from [EMV_CT_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_L1DRIVER_VERSION](),    L1DriverVersion in [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION]().  |
|  | **[TAG_CONFIG_ID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-config-id)** <br>Unique id generated when terminal configuration has changed and the option [EMV_CT_INIT_OPT_EPP_MASTER]() is set.  |
|  | **[TAG_DF6D_MODEL_NAME](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6d-model-name)** <br>Model included in [EMV_CT_GetTermData()]() and [EMV_CTLS_GetTermData()]() derived for use with emv-desired.xml and emv-allowed.xml.  |
|  | **[TAG_DF6E_CONFIG_DESIRED](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6e-config-desired)** <br>Desired L2 kernel list.  |
|  | **[TAG_DF6F_SB308_FLAG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df6f-sb308-flag)** <br>1 byte, any value > 0 enables Specification Bulletin in L2 kernel 7.0.4 on Titus.    XML Tag: XML_TAG_TERMDATA_SB308_FLAG    On other platforms the SB308 status can by read with this tag in the response of EMV_CT_SerGetTermData.  |
|  | **[TAG_DF8F01_MANI_CANDLIST](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df8f01-mani-candlist)** <br>Modified candidate list (only valid in reentrance mode using the candidate list manipulation option [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data))  |




## Macros Documentation

### define TAG_ISO_DATA

```
#define TAG_ISO_DATA 0xDF01
```

Tag for ISO data. 

### define TAG_TRACE

```
#define TAG_TRACE 0xDF02
```

Tag for trace data. 

### define TAG_KEY_NUMBER

```
#define TAG_KEY_NUMBER 0xDF03
```

CAP Key Number of Keys, 1 byte 0...255. 

### define TAG_DF04_AID

```
#define TAG_DF04_AID 0xDF04
```

AID in [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md), TRM_SetAppliData(), TRM_GetAppliData(), TRM_SelAppli(), TRM_ReduceCandidateList() 

### define TAG_DF05_BUILD_APPLILIST

```
#define TAG_DF05_BUILD_APPLILIST 0xDF05
```

not applicable for CTLS 

### define TAG_DF06_CARDREADER_NUM

```
#define TAG_DF06_CARDREADER_NUM 0xDF06
```

L1 reader options  `ucOptions` in [EMV_CTLS_SmartISO()]()

### define TAG_DF07_UNCRIT_SCR

```
#define TAG_DF07_UNCRIT_SCR 0xDF07
```

Script results of uncritical scripts in response to [EMV_CTLS_ContinueOnline()]() [EMV_CTLS_TRANSRES_STRUCT::ScriptResults](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults). 

### define TAG_DF08_CRIT_SCR

```
#define TAG_DF08_CRIT_SCR 0xDF08
```

Script results of uncritical scripts  `Future` use. 

### define TAG_KEY_INDEX

```
#define TAG_KEY_INDEX 0xDF09
```

CAP Key Index  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_INDEX](),    Index in [EMV_CTLS_CAPKEY_STRUCT::Index](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index),    XML Tag: [XML_TAG_CAP_KEYS_INDEX](). 

### define TAG_KEY_RID

```
#define TAG_KEY_RID 0xDF0A
```

CAP Key RID  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_RID](),    RID in [EMV_CTLS_CAPKEY_STRUCT::RID](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid),    XML Tag: [XML_TAG_CAP_KEYS_RID](). 

### define TAG_KEY_KEY

```
#define TAG_KEY_KEY 0xDF0B
```

CAP Key Modulus  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_KEY](),    Key in [EMV_CTLS_CAPKEY_STRUCT::Key](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key),    XML Tag: [XML_TAG_CAP_KEYS_KEY](). 

### define TAG_KEY_HASH

```
#define TAG_KEY_HASH 0xDF0C
```

CAP Key Hash  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_HASH](),    Hash in [EMV_CTLS_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash),    XML Tag: [XML_TAG_CAP_KEYS_HASH](). 

### define TAG_KEY_EXPONENT

```
#define TAG_KEY_EXPONENT 0xDF0D
```

CAP Key Exponent  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_EXPONENT](),    Exponent in [EMV_CTLS_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT](). 

### define TAG_KEY_CRL

```
#define TAG_KEY_CRL 0xDF0E
```

CAP Key Certification Revocation List  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_CRL](),    RevocEntries in [EMV_CTLS_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST](). 

### define TAG_DF10_MSR_CVM_BELOW

```
#define TAG_DF10_MSR_CVM_BELOW 0xDF10
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF11_LIB_VERSION

```
#define TAG_DF11_LIB_VERSION 0xDF11
```

Library version given back from [EMV_CTLS_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](),    FrameworkVersion in [EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION](). 

### define TAG_DF12_CHECKSUM

```
#define TAG_DF12_CHECKSUM 0xDF12
```

EMVCo checksum given back from [EMV_CTLS_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_KERNEL](). 

### define TAG_DF13_TERM_PARAM

```
#define TAG_DF13_TERM_PARAM 0xDF13
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF14_ADD_TAGS_RES

```
#define TAG_DF14_ADD_TAGS_RES 0xDF14
```

additional tag list requested for result data  `[EMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)`

### define TAG_DF15_OFFL_ONLY_PROCESS

```
#define TAG_DF15_OFFL_ONLY_PROCESS 0xDF15
```


**Deprecated**: 

Was used in old config interface 

### define TAG_KEY_KEYLEN

```
#define TAG_KEY_KEYLEN 0xDF16
```

CAP Key key length  `Struct`, `XML` Reference:    KeyLen in [EMV_CTLS_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN](). 

### define TAG_DF17_FALLBACK_MIDS

```
#define TAG_DF17_FALLBACK_MIDS 0xDF17
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF18_FALLABCK

```
#define TAG_DF18_FALLABCK 0xDF18
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF19_PARAMETER_4

```
#define TAG_DF19_PARAMETER_4 0xDF19
```

universal tag no. 4 

### define TAG_DF1C_SPECIAL_TRX

```
#define TAG_DF1C_SPECIAL_TRX 0xDF1C
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF1D_PRIO_APPLI

```
#define TAG_DF1D_PRIO_APPLI 0xDF1D
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF20_ASI

```
#define TAG_DF20_ASI 0xDF20
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF21_TAC_DENIAL

```
#define TAG_DF21_TAC_DENIAL 0xDF21
```

[EMV_CTLS_TRANSRES_STRUCT::TACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdenial). 

### define TAG_DF21_TAC_ABLEHNUNG

```
#define TAG_DF21_TAC_ABLEHNUNG TAG_DF21_TAC_DENIAL
```


**Deprecated**: 

use [TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial) instead 

### define TAG_DF22_TAC_ONLINE

```
#define TAG_DF22_TAC_ONLINE 0xDF22
```

[EMV_CTLS_TRANSRES_STRUCT::TACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-taconline). 

### define TAG_DF23_TAC_DEFAULT

```
#define TAG_DF23_TAC_DEFAULT 0xDF23
```

[EMV_CTLS_TRANSRES_STRUCT::TACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdefault). 

### define TAG_DF24_THRESHHOLD

```
#define TAG_DF24_THRESHHOLD 0xDF24
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF25_MAXPERCENT_ONL

```
#define TAG_DF25_MAXPERCENT_ONL 0xDF25
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF26_PERCENT_ONL

```
#define TAG_DF26_PERCENT_ONL 0xDF26
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF27_DEFAULT_TDOL

```
#define TAG_DF27_DEFAULT_TDOL 0xDF27
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF28_DEFAULT_DDOL

```
#define TAG_DF28_DEFAULT_DDOL 0xDF28
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF29_ADD_TAGS

```
#define TAG_DF29_ADD_TAGS 0xDF29
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2B_APP_FLOW_CAP

```
#define TAG_DF2B_APP_FLOW_CAP 0xDF2B
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2C_ADD_TAGS_CRD

```
#define TAG_DF2C_ADD_TAGS_CRD 0xDF2C
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2D_EMV_APPLI

```
#define TAG_DF2D_EMV_APPLI 0xDF2D
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2E_CVM_NOT_SUPP

```
#define TAG_DF2E_CVM_NOT_SUPP 0xDF2E
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF2F_MSR_CVM_ABOVE

```
#define TAG_DF2F_MSR_CVM_ABOVE 0xDF2F
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF30_RETAP_FIELD_OFF

```
#define TAG_DF30_RETAP_FIELD_OFF 0xDF30
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF32_MC_BALANCE_8104

```
#define TAG_DF32_MC_BALANCE_8104 0xDF32
```

see [EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance)

### define TAG_DF33_APPLICATION_TAG_50

```
#define TAG_DF33_APPLICATION_TAG_50 0xDF33
```

EMV_CTLS_STARTRES_STRUCT::T_50_ApplicationName. 

### define TAG_DF36_TRX_OPTIONS

```
#define TAG_DF36_TRX_OPTIONS 0xDF36
```

EMV_CTLS_TRANSAC_STRUCT::TxnOptions. 

### define TAG_DF38_MC_BALANCE_8105

```
#define TAG_DF38_MC_BALANCE_8105 0xDF38
```

see [EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance)

### define TAG_DF3A_FB_MSR_OPTIONS

```
#define TAG_DF3A_FB_MSR_OPTIONS 0xDF3A
```

EMV_CTLS_APPS_SELECT_STRUCT::xFallback_MS (partially, together with [TAG_DF4C_FALLB_MSR_APPLI]()) 

### define TAG_DF3A_ADD_TRM_CAP_EXT

```
#define TAG_DF3A_ADD_TRM_CAP_EXT 0xDF3A
```

[EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilitiesExt_DF3A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilitiesext-df3a): Rupay Additional Terminal Capabilities Extension. 

### define TAG_DF3B_PARAMETER_1

```
#define TAG_DF3B_PARAMETER_1 0xDF3B
```

universal tag no. 1    used for `numberOfAIDs` in [EMV_CTLS_Init_Framework()](), respectively EMV_CTLS_Init_FrameworkClient()    Also used for `VirtualTermMapType` in [EMV_CTLS_MapVirtualTerminal()]()

### define TAG_DF3C_PARAMETER_2

```
#define TAG_DF3C_PARAMETER_2 0xDF3C
```

universal tag no. 2    used for options in [EMV_CTLS_Init_Framework()](), respectively EMV_CTLS_Init_FrameworkClient()    Also used for `TLVSwitchValue` in [EMV_CTLS_MapVirtualTerminal()]()

### define TAG_DF3D_PARAMETER_3

```
#define TAG_DF3D_PARAMETER_3 0xDF3D
```

universal tag no. 3    Used for `VirtualTerminal` in [EMV_CTLS_MapVirtualTerminal()]()

### define TAG_DF40_FORCE_ONLINE

```
#define TAG_DF40_FORCE_ONLINE 0xDF40
```

[EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define TAG_DF42_STATUS

```
#define TAG_DF42_STATUS 0xDF42
```

[EMV_CTLS_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo), also used for EMV results in callback [TAG_BF15_CBK_CARD_TAPPED](). 

### define TAG_DF44_CHIP_CVM_BELOW

```
#define TAG_DF44_CHIP_CVM_BELOW 0xDF44
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF45_CHIP_TXN_LIFETIME

```
#define TAG_DF45_CHIP_TXN_LIFETIME 0xDF45
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF46_CHIP_TXN_NO

```
#define TAG_DF46_CHIP_TXN_NO 0xDF46
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF48_ONLINE_SWITCH

```
#define TAG_DF48_ONLINE_SWITCH 0xDF48
```

[EMV_CTLS_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 

### define TAG_DF49_CEIL_LIMIT_MOBILE

```
#define TAG_DF49_CEIL_LIMIT_MOBILE 0xDF49
```


**Deprecated**: 

Was used in old config interface 

### define TAG_DF4B_DOM_CHIP_APPLI

```
#define TAG_DF4B_DOM_CHIP_APPLI 0xDF4B
```

not used in CTLS environment 

### define TAG_DF4C_FALLB_MSR_APPLI

```
#define TAG_DF4C_FALLB_MSR_APPLI 0xDF4C
```

not used in CTLS environment 

### define TAG_DF4D_CARD_CONF

```
#define TAG_DF4D_CARD_CONF 0xDF4D
```

not used in CTLS environment 

### define TAG_DF4E_PASSTROUGH

```
#define TAG_DF4E_PASSTROUGH 0xDF4E
```

EMV_CTLS_START_STRUCT::passtroughCardTypes. 

### define TAG_DF4F_CARDTYPE

```
#define TAG_DF4F_CARDTYPE 0xDF4F
```

[EMV_CTLS_TRANSRES_STRUCT::ctlsCardType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-ctlscardtype). 

### define TAG_DF50_ONL_RES

```
#define TAG_DF50_ONL_RES 0xDF50
```

[EMV_CTLS_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult). 

### define TAG_DF52_AUTH_DATA_CLESS

```
#define TAG_DF52_AUTH_DATA_CLESS 0xDF52
```

[EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata), duplicated by [TAG_DF52_TRM_NOCVM_LIMIT](). 

### define TAG_DF54_SCRIPT_CLESS

```
#define TAG_DF54_SCRIPT_CLESS 0xDF54
```

EMV_CTLS_HOST_STRUCT::LenScript and [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata)   Duplicated by [TAG_DF54_TRM_CTLS_LIMIT_CDCVM](). 

### define TAG_DF55_AC_SWITCH_IF

```
#define TAG_DF55_AC_SWITCH_IF 0xDF55
```

[EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface), duplicated by [TAG_DF55_TRM_TPM_CAPABILITIES](). 

### define TAG_DF56_AC_ONLINE_PIN

```
#define TAG_DF56_AC_ONLINE_PIN 0xDF56
```

[EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-onlinepin), duplicated by [TAG_DF56_TRANSACTION_RECOVERY_LIMIT](). 

### define TAG_DF57_AC_ADD_OK_CLESS

```
#define TAG_DF57_AC_ADD_OK_CLESS 0xDF57
```

[EMV_CTLS_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive). 

### define TAG_DF5D_CL_MAGSTRIPE_T2

```
#define TAG_DF5D_CL_MAGSTRIPE_T2 0xDF5D
```

reserved for CTLS magstripe data, duplicated to DF5E 

### define TAG_DF5E_CL_MAGSTRIPE_T2

```
#define TAG_DF5E_CL_MAGSTRIPE_T2 0xDF5E
```

contactless magstripe data in [EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)

### define TAG_DF5F_ADD_APP_VERSION

```
#define TAG_DF5F_ADD_APP_VERSION 0xDF5F
```

see [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no)

### define TAG_DF41_TRANSACTION_RECOVERY_CNTR

```
#define TAG_DF41_TRANSACTION_RECOVERY_CNTR 0xDF41
```

MIR private kernel tag: Transaction Recovery Counter (TRC), can be used in [EMV_CTLS_fetchTxnTags()]()

### define TAG_DF51_TRM_FLOOR_LIMIT

```
#define TAG_DF51_TRM_FLOOR_LIMIT 0xDF51
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalFloorLimit_DF51](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalfloorlimit-df51). 

### define TAG_DF52_TRM_NOCVM_LIMIT

```
#define TAG_DF52_TRM_NOCVM_LIMIT 0xDF52
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalNoCVMLimit_DF52](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalnocvmlimit-df52)   Duplicated by [TAG_DF52_AUTH_DATA_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df52-auth-data-cless). 

### define TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM

```
#define TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM 0xDF53
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitNonCDCVM_DF53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitnoncdcvm-df53). 

### define TAG_DF54_TRM_CTLS_LIMIT_CDCVM

```
#define TAG_DF54_TRM_CTLS_LIMIT_CDCVM 0xDF54
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitCDCVM_DF54](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitcdcvm-df54)   Duplicated by [TAG_DF54_SCRIPT_CLESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df54-script-cless). 

### define TAG_DF55_TRM_TPM_CAPABILITIES

```
#define TAG_DF55_TRM_TPM_CAPABILITIES 0xDF55
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalTPMCapabilities_DF55](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminaltpmcapabilities-df55)   Duplicated by [TAG_DF55_AC_SWITCH_IF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df55-ac-switch-if). 

### define TAG_DF56_TRANSACTION_RECOVERY_LIMIT

```
#define TAG_DF56_TRANSACTION_RECOVERY_LIMIT 0xDF56
```

MIR configuration: Terminal Floor Limit, [EMV_CTLS_APPLIDATA_MR_STRUCT::TransactionRecoveryLimit_DF56](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-transactionrecoverylimit-df56)   Duplicated by [TAG_DF56_AC_ONLINE_PIN](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df56-ac-online-pin). 

### define TAG_DF60_VELOCITY_ORIG_IDX

```
#define TAG_DF60_VELOCITY_ORIG_IDX 0xDF60
```

original candidate index in the list of application before it was presented to the Velocity kernel for applications selection (The kernel changes the order of the list according to different "priority" / "partial select" rules, the index keeps the refrence to the original candidate list 

### define TAG_DF61_INF_REC_DATA

```
#define TAG_DF61_INF_REC_DATA 0xDF61
```

in [EMV_CTLS_STARTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data), in [EMV_CTLS_TRANSRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data)

### define TAG_DF62_BUZZER_VOLUME

```
#define TAG_DF62_BUZZER_VOLUME 0xDF62
```

Buzzer Volume, [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume). 

### define TAG_DF63_VELOCITY_EP_PRB

```
#define TAG_DF63_VELOCITY_EP_PRB 0xDF63
```

processing result bitmap from the Entry point kernel 

### define TAG_DF64_KERNEL_DEBUG

```
#define TAG_DF64_KERNEL_DEBUG 0xDF64
```

[EMV_CTLS_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata). 

### define TAG_KERNEL_VERSION

```
#define TAG_KERNEL_VERSION 0xDF65
```

kernel version, see [EMV_CTLS_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion)

### define TAG_HANDLE_APPLI_TYPE

```
#define TAG_HANDLE_APPLI_TYPE 0xDF66
```

Configuration mode for applications and CAP keys, see [Modes of application data and CAP key setting]()   Used in EMV_CTLS_SetAppliData(), EMV_CTLS_GetAppliData(), [EMV_CTLS_StoreCAPKey()]()

### define TAG_SUPP_LANG

```
#define TAG_SUPP_LANG 0xDF67
```

supported languages, see [EMV_CTLS_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang)

### define TAG_ATR

```
#define TAG_ATR 0xDF68
```

not used in CTLS environment 

### define TAG_EXCLUDE_AID

```
#define TAG_EXCLUDE_AID 0xDF69
```

AIDs to exclude from the configuration list for this transaction, [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids). 

### define TAG_EMV_CONFORM

```
#define TAG_EMV_CONFORM 0xDF6A
```

not used in CTLS environment 

### define TAG_DF6B_TRACK1_EQUIVALENT

```
#define TAG_DF6B_TRACK1_EQUIVALENT 0xDF6B
```

Track 1 Equivalent Data, ASCII ..79 characters (=76 w/ or w/o start/end sentinal, LRC) 

### define TAG_DF6C_CONFIG_ID

```
#define TAG_DF6C_CONFIG_ID 0xDF6C
```

Unique id generated when terminal configuration has changed and the option [EMV_CTLS_INIT_OPT_EPP_MASTER]() is set. 

### define TAG_DF6D_TRY_AGAIN_LIMIT

```
#define TAG_DF6D_TRY_AGAIN_LIMIT 0xDF6D
```

[EMV_CTLS_APPLIDATA_IK_STRUCT::TryAgainLimit_DF6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tryagainlimit-df6d). 

### define TAG_DF6D_MODEL_NAME

```
#define TAG_DF6D_MODEL_NAME 0xDF6D
```

Model included in [EMV_CT_GetTermData()]() and [EMV_CTLS_GetTermData()]() derived for use with emv-desired.xml and emv-allowed.xml. 

### define TAG_DF6E_CONFIG_DESIRED

```
#define TAG_DF6E_CONFIG_DESIRED 0xDF6E
```

Desired L2 kernel list to be sent from EPP master with [EMV_CT_SetTermData()]() and [EMV_CTLS_SetTermData()]()

### define TAG_DF6E_ADDITIONAL_UI_INFO

```
#define TAG_DF6E_ADDITIONAL_UI_INFO 0xDF6E
```

Tag for reading Interac additional UI info from Interac kernel via [EMV_CTLS_fetchTxnTags()]() (mapped to TAG_IK0A) 

### define TAG_DF6F_L1DRIVER_VERSION

```
#define TAG_DF6F_L1DRIVER_VERSION 0xDF6F
```

L1 driver version given back from [EMV_CTLS_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF6F_L1DRIVER_VERSION](),    L1DriverVersion in [EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION](). 

### define TAG_DFD002_APPNAME_CHOSEN

```
#define TAG_DFD002_APPNAME_CHOSEN 0xDFD002
```

chosen application name based on the combination 9F12, 9F11, 50, application default name, up to 16 byte ASCII string 

### define TAG_DFD003_Kernel_ID

```
#define TAG_DFD003_Kernel_ID 0xDFD003
```

chosen (Velocity) kernel ID based on the EP processing in combination with probable domestic processing, 3 byte binary according to the EMVCo specified kernel ID 

### define TAG_DFD004_TANSPARENT_SEND

```
#define TAG_DFD004_TANSPARENT_SEND 0xDFD004
```

for [EMV_CTLS_TransparentSend]()

### define TAG_DFD005_TANSPARENT_RECEIVE

```
#define TAG_DFD005_TANSPARENT_RECEIVE 0xDFD005
```

for [EMV_CTLS_TransparentReceive]()

### define TAG_DFD006_BEEP_FREQ_SUCCESS

```
#define TAG_DFD006_BEEP_FREQ_SUCCESS 0xDFD006
```

[EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencysuccess). 

### define TAG_DFD007_BEEP_FREQ_ALERT

```
#define TAG_DFD007_BEEP_FREQ_ALERT 0xDFD007
```

[EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencyalert). 

### define TAG_DFD008_SECOND_TAP_DELAY

```
#define TAG_DFD008_SECOND_TAP_DELAY 0xDFD008
```

[EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-secondtapdelay). 

### define TAG_DFD009_HOST_COMM_TIMEOUT

```
#define TAG_DFD009_HOST_COMM_TIMEOUT 0xDFD009
```

[EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hostcommunicationtimeout). 

### define TAG_ISO_DATA

```
#define TAG_ISO_DATA 0xDF01
```

Tag for ISO data. 

### define TAG_TRACE

```
#define TAG_TRACE 0xDF02
```

Tag for trace data. 

### define TAG_KEY_NUMBER

```
#define TAG_KEY_NUMBER 0xDF03
```

CAP Key Number of Keys, 1 byte 0...255. 

### define TAG_DF04_AID

```
#define TAG_DF04_AID 0xDF04
```

used for [EMV_CT_CANDIDATE_STRUCT::candidate](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-candidate), AID in [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md), TRM_GetAppliData(), TRM_SelAppli(), TRM_ReduceCandidateList() 

### define TAG_DF05_BUILD_APPLILIST

```
#define TAG_DF05_BUILD_APPLILIST 0xDF05
```

[EMV_CT_SELECT_STRUCT::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist). 

### define TAG_DF06_CARDREADER_NUM

```
#define TAG_DF06_CARDREADER_NUM 0xDF06
```

L1 reader options  `ucOptions` in [EMV_CT_SmartISO()]()

### define TAG_DF07_UNCRIT_SCR

```
#define TAG_DF07_UNCRIT_SCR 0xDF07
```

Script results of uncritical scripts in response to [EMV_CT_ContinueOnline()]() `[EMV_CT_SRCRIPTRES_TYPE::ScriptUnCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptuncritresult)`. 

### define TAG_DF08_CRIT_SCR

```
#define TAG_DF08_CRIT_SCR 0xDF08
```

Script results of critical scripts in response to [EMV_CT_ContinueOnline()]() `[EMV_CT_SRCRIPTRES_TYPE::ScriptCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptcritresult)`. 

### define TAG_KEY_INDEX

```
#define TAG_KEY_INDEX 0xDF09
```

CAP Key Index  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_INDEX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-index),    Index in [EMV_CT_CAPKEY_STRUCT::Index](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index),    XML Tag: [XML_TAG_CAP_KEYS_INDEX](). 

### define TAG_KEY_RID

```
#define TAG_KEY_RID 0xDF0A
```

CAP Key RID  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_RID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-rid),    RID in [EMV_CT_CAPKEY_STRUCT::RID](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid),    XML Tag: [XML_TAG_CAP_KEYS_RID](). 

### define TAG_KEY_KEY

```
#define TAG_KEY_KEY 0xDF0B
```

CAP Key Modulus  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key),    Key in [EMV_CT_CAPKEY_STRUCT::Key](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key),    XML Tag: [XML_TAG_CAP_KEYS_KEY](). 

### define TAG_KEY_HASH

```
#define TAG_KEY_HASH 0xDF0C
```

CAP Key Hash  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_HASH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-hash),    Hash in [EMV_CT_CAPKEY_STRUCT::Hash](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash),    XML Tag: [XML_TAG_CAP_KEYS_HASH](). 

### define TAG_KEY_EXPONENT

```
#define TAG_KEY_EXPONENT 0xDF0D
```

CAP Key Exponent  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent),    Exponent in [EMV_CT_CAPKEY_STRUCT::Exponent](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT](). 

### define TAG_KEY_CRL

```
#define TAG_KEY_CRL 0xDF0E
```

CAP Key Certification Revocation List  `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KEY_CRL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-crl),    RevocEntries in [EMV_CT_CAPKEY_STRUCT::RevocEntries](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST](). 

### define TAG_DF11_LIB_VERSION

```
#define TAG_DF11_LIB_VERSION 0xDF11
```

Library version given back from [EMV_CT_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version),    FrameworkVersion in [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION](). 

### define TAG_DF12_CHECKSUM

```
#define TAG_DF12_CHECKSUM 0xDF12
```

EMVCo checksum given back from [EMV_CT_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df12-checksum),    ChksumASCIIEMVCO in [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO](). 

### define TAG_DF13_TERM_PARAM

```
#define TAG_DF13_TERM_PARAM 0xDF13
```

used for [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF14_ADD_TAGS_RES

```
#define TAG_DF14_ADD_TAGS_RES 0xDF14
```


### define TAG_DF15_OFFL_ONLY_PROCESS

```
#define TAG_DF15_OFFL_ONLY_PROCESS 0xDF15
```

used for EMV_CT_APPLIDATA_STRUCT::ucAC_before_after 

**Deprecated**: 

Was used in old config interface 

### define TAG_KEY_KEYLEN

```
#define TAG_KEY_KEYLEN 0xDF16
```

CAP Key key length  `Struct`, `XML` Reference:    KeyLen in [EMV_CT_CAPKEY_STRUCT::KeyLen](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN](). 

### define TAG_DF17_FALLBACK_MIDS

```
#define TAG_DF17_FALLBACK_MIDS 0xDF17
```

used for [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF18_FALLABCK

```
#define TAG_DF18_FALLABCK 0xDF18
```

tag for [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF19_PARAMETER_4

```
#define TAG_DF19_PARAMETER_4 0xDF19
```

RFU. 

### define TAG_DF1C_SPECIAL_TRX

```
#define TAG_DF1C_SPECIAL_TRX 0xDF1C
```

tag for [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF1D_PRIO_APPLI

```
#define TAG_DF1D_PRIO_APPLI 0xDF1D
```

each element of [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio) is packed in this tag 

**Deprecated**: 

Was used in old config interface 

### define TAG_DF20_ASI

```
#define TAG_DF20_ASI 0xDF20
```

used for [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi), [EMV_CT_DOM_CHIP_STRUCT::ucASI](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucasi)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF21_TAC_DENIAL

```
#define TAG_DF21_TAC_DENIAL 0xDF21
```

see [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]()) 

### define TAG_DF21_TAC_ABLEHNUNG

```
#define TAG_DF21_TAC_ABLEHNUNG TAG_DF21_TAC_DENIAL
```


**Deprecated**: 

use [TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial) instead 

### define TAG_DF22_TAC_ONLINE

```
#define TAG_DF22_TAC_ONLINE 0xDF22
```

see [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]()) 

### define TAG_DF23_TAC_DEFAULT

```
#define TAG_DF23_TAC_DEFAULT 0xDF23
```

see [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault) and [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)   also used for callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS]()) 

### define TAG_DF24_THRESHHOLD

```
#define TAG_DF24_THRESHHOLD 0xDF24
```

see [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold)   also used for callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()) 

**Deprecated**: 

Was used in old config interface 

### define TAG_DF25_MAXPERCENT_ONL

```
#define TAG_DF25_MAXPERCENT_ONL 0xDF25
```

see [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF26_PERCENT_ONL

```
#define TAG_DF26_PERCENT_ONL 0xDF26
```

see [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF27_DEFAULT_TDOL

```
#define TAG_DF27_DEFAULT_TDOL 0xDF27
```

see [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF28_DEFAULT_DDOL

```
#define TAG_DF28_DEFAULT_DDOL 0xDF28
```

see [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF29_ADD_TAGS

```
#define TAG_DF29_ADD_TAGS 0xDF29
```

see [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF2A_DUTY_TAGS

```
#define TAG_DF2A_DUTY_TAGS 0xDF2A
```

see EMV_CT_APPLIDATA_STRUCT::Taglist 

### define TAG_DF2B_APP_FLOW_CAP

```
#define TAG_DF2B_APP_FLOW_CAP 0xDF2B
```

see [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF2C_ADD_TAGS_CRD

```
#define TAG_DF2C_ADD_TAGS_CRD 0xDF2C
```

see [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF2D_EMV_APPLI

```
#define TAG_DF2D_EMV_APPLI 0xDF2D
```

see [EMV_CT_APPLIDATA_STRUCT::EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF2E_CVM_NOT_SUPP

```
#define TAG_DF2E_CVM_NOT_SUPP 0xDF2E
```

see [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported)

**Deprecated**: 

Was used in old config interface 

### define TAG_DF2F_CVM_CUSTOM

```
#define TAG_DF2F_CVM_CUSTOM 0xDF2F
```

see [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm)

### define TAG_DF30_LANG

```
#define TAG_DF30_LANG 0xDF30
```

see customer language index ([Known languages]()), format is like in [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language)

### define TAG_DF31_TEXT_NUM

```
#define TAG_DF31_TEXT_NUM 0xDF31
```

text index, format is like in [EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext)

### define TAG_DF33_APPLICATION_TAG_50

```
#define TAG_DF33_APPLICATION_TAG_50 0xDF33
```

[EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-50-applicationname). 

### define TAG_DF34_AMOUNT_CONF

```
#define TAG_DF34_AMOUNT_CONF 0xDF34
```

EMV_CT_TRANSAC_STRUCT::uc_AmountConfirmation. 

### define TAG_DF36_TRX_OPTIONS

```
#define TAG_DF36_TRX_OPTIONS 0xDF36
```

EMV_CT_TRANSAC_STRUCT::tucTxnOptions. 

### define TAG_DF37_TRX_STEPS

```
#define TAG_DF37_TRX_STEPS 0xDF37
```

[EMV_CT_TRANSAC_STRUCT::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps). 

### define TAG_DF39_DCC_CBCK_INFO

```
#define TAG_DF39_DCC_CBCK_INFO 0xDF39
```

[EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC]()) 

### define TAG_DF3A_FB_MSR_OPTIONS

```
#define TAG_DF3A_FB_MSR_OPTIONS 0xDF3A
```

[EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms) (partially, together with [TAG_DF4C_FALLB_MSR_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4c-fallb-msr-appli)) 

### define TAG_DF3B_PARAMETER_1

```
#define TAG_DF3B_PARAMETER_1 0xDF3B
```

RFU. 

### define TAG_DF3C_PARAMETER_2

```
#define TAG_DF3C_PARAMETER_2 0xDF3C
```

RFU. 

### define TAG_DF3C_EXT_LOGGING_DATA

```
#define TAG_DF3C_EXT_LOGGING_DATA 0xDF3C
```

Extended Logging data for DPAS Connect. 

### define TAG_DF3D_PARAMETER_3

```
#define TAG_DF3D_PARAMETER_3 0xDF3D
```

RFU. 

### define TAG_DF3E_CDA_PROC

```
#define TAG_DF3E_CDA_PROC 0xDF3E
```

EMV_CT_APPLIDATA_STRUCT::uc_CDA_Processing. 

### define TAG_DF40_FORCE_ONLINE

```
#define TAG_DF40_FORCE_ONLINE 0xDF40
```

EMV_CT_SELECT_STRUCT::Force_Online. 

### define TAG_DF41_PIN_BYPASS

```
#define TAG_DF41_PIN_BYPASS 0xDF41
```

If [PIN_BYPASS]() was configured in [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap): This tag is given by EMV ADK in PIN entry callback ([EMV_CT_CALLBACK_FnT]() with [TAG_BF08_CBK_PIN]()). 

### define TAG_DF42_STATUS

```
#define TAG_DF42_STATUS 0xDF42
```

[EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo). 

### define TAG_DF43_FORCE_ACCEPT

```
#define TAG_DF43_FORCE_ACCEPT 0xDF43
```

EMV_CT_SELECT_STRUCT::Force_Acceptance. 

### define TAG_DF45_NO_DIR_SELECT

```
#define TAG_DF45_NO_DIR_SELECT 0xDF45
```

EMV_CT_SELECT_STRUCT::No_DirectorySelect. 

### define TAG_DF47_PRIOR_LANG_SEL

```
#define TAG_DF47_PRIOR_LANG_SEL 0xDF47
```

EMV_CT_SELECT_STRUCT::PreSelected_Language and EMV_CT_TRANSAC_STRUCT::PreSelected_Language. 

### define TAG_DF48_ONLINE_SWITCH

```
#define TAG_DF48_ONLINE_SWITCH 0xDF48
```

EMV_CT_SELECT_STRUCT::Online_Switch. 

### define TAG_DF49_APL_SEC_LIMIT

```
#define TAG_DF49_APL_SEC_LIMIT 0xDF49
```

[EMV_CT_APPLIDATA_STRUCT::Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit), limit below which other terminal capabilties apply (optional) 

### define TAG_DF4A_APL_SEC_CAPS

```
#define TAG_DF4A_APL_SEC_CAPS 0xDF4A
```

[EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit), terminal capabilties below the security limit (optio. 

### define TAG_DF4B_DOM_CHIP_APPLI

```
#define TAG_DF4B_DOM_CHIP_APPLI 0xDF4B
```

EMV_CT_SELECT_STRUCT::countDomesticChip. 

### define TAG_DF4C_FALLB_MSR_APPLI

```
#define TAG_DF4C_FALLB_MSR_APPLI 0xDF4C
```

[EMV_CT_APPS_SELECT_STRUCT::countFallbackMS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countfallbackms) and [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms), [EMV_CT_SELECTRES_STRUCT::countFallbackMS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-countfallbackms) and [EMV_CT_SELECTRES_STRUCT::xFallback_MS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-xfallback-ms) (partially, together with [TAG_DF3A_FB_MSR_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3a-fb-msr-options)) 

### define TAG_DF4D_CARD_CONF

```
#define TAG_DF4D_CARD_CONF 0xDF4D
```

EMV_CT_SELECT_STRUCT::ucCardholderConfirmation. 

### define TAG_DF4E_PDOL_INFO

```
#define TAG_DF4E_PDOL_INFO 0xDF4E
```

EMV_CT_SELECT_STRUCT::PDOL_tags. 

### define TAG_DF50_ONL_RES

```
#define TAG_DF50_ONL_RES 0xDF50
```

[EMV_CT_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult). 

### define TAG_DF51_ISS_REF_RES

```
#define TAG_DF51_ISS_REF_RES 0xDF51
```

[EMV_CT_HOST_STRUCT::Result_referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-result-referral). 

### define TAG_DF52_AUTH_DATA

```
#define TAG_DF52_AUTH_DATA 0xDF52
```

[EMV_CT_HOST_STRUCT::LenAuth](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenauth) and [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata). 

### define TAG_DF53_SCRIPT_CRIT

```
#define TAG_DF53_SCRIPT_CRIT 0xDF53
```

[EMV_CT_HOST_STRUCT::LenScriptCrit](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenscriptcrit) and [EMV_CT_HOST_STRUCT::ScriptCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptcritdata). 

### define TAG_DF54_SCRIPT_UNCRIT

```
#define TAG_DF54_SCRIPT_UNCRIT 0xDF54
```

[EMV_CT_HOST_STRUCT::LenScriptUnCrit](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenscriptuncrit) and [EMV_CT_HOST_STRUCT::ScriptUnCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptuncritdata). 

### define TAG_DF55_AC_ISS_REF

```
#define TAG_DF55_AC_ISS_REF 0xDF55
```

[EMV_CT_HOST_STRUCT::AuthResp_Referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-referral). 

### define TAG_DF56_AC_WRONG_PIN

```
#define TAG_DF56_AC_WRONG_PIN 0xDF56
```

[EMV_CT_HOST_STRUCT::AuthResp_Wrong_PIN](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-wrong-pin). 

### define TAG_DF57_AC_ADD_OK

```
#define TAG_DF57_AC_ADD_OK 0xDF57
```

[EMV_CT_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive). 

### define TAG_DF5A_DS_WRITE_DATA

```
#define TAG_DF5A_DS_WRITE_DATA 0xDF5A
```

EMV_CT_HOST_STRUCT::DataStorageWriteData. 

### define TAG_DF59_OFFL_PIN_ERRORS

```
#define TAG_DF59_OFFL_PIN_ERRORS 0xDF59
```

Number of wrong PIN entries (only in case of offline PIN!!!) [EMV_CT_TRANSRES_STRUCT::T_DF59_Offl_PIN_errors](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df59-offl-pin-errors). 

### define TAG_DF5B_DCC_PROHIBIT

```
#define TAG_DF5B_DCC_PROHIBIT 0xDF5B
```

[EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]()) 

### define TAG_DF5C_DOM_INFO

```
#define TAG_DF5C_DOM_INFO 0xDF5C
```

[EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]()) 

### define TAG_DF5D_DOM_OPTION

```
#define TAG_DF5D_DOM_OPTION 0xDF5D
```

[EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]()) 

### define TAG_DF5F_ADD_APP_VERSION

```
#define TAG_DF5F_ADD_APP_VERSION 0xDF5F
```

see [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no)

### define TAG_DF60_VELOCITY_ORIG_IDX

```
#define TAG_DF60_VELOCITY_ORIG_IDX 0xDF60
```

original candidate index in the list of application before it was presented to the Velocity kernel for applications selection (The kernel changes the order of the list according to different "priority" / "partial select" rules, the index keeps the refrence to the original candidate list 

### define TAG_DF61_INF_REC_DATA

```
#define TAG_DF61_INF_REC_DATA 0xDF61
```

[EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data), [EMV_CT_TRANSRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data). 

### define TAG_DF62_ERROR_DATA

```
#define TAG_DF62_ERROR_DATA 0xDF62
```

Transaction error information according to "Fehlerkennung" (German ZKA specification)  [EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata) and [EMV_CT_TRANSRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata). 

### define TAG_DF62_APPLI_SELECT_FLAG

```
#define TAG_DF62_APPLI_SELECT_FLAG 0xDF62u
```

Application Selection Flag ('DF62', Interac, Canada), [EMV_CT_CANDIDATE_DATA_STRUCT::DF62_ASF](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-df62-asf). 

### define TAG_DF63_DISPLAY_TEXT

```
#define TAG_DF63_DISPLAY_TEXT 0xDF63
```

[EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext) and [EMV_CT_TRANSRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext). 

### define TAG_DF64_KERNEL_DEBUG

```
#define TAG_DF64_KERNEL_DEBUG 0xDF64
```

[EMV_CT_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata). 

### define TAG_KERNEL_VERSION

```
#define TAG_KERNEL_VERSION 0xDF65
```

Kernel version ([EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion)) 

### define TAG_HANDLE_APPLI_TYPE

```
#define TAG_HANDLE_APPLI_TYPE 0xDF66
```

Configuration mode for applications [Modes of application data and CAP key setting](), see `eHandleCAPKeyType` in call of [EMV_CT_StoreCAPKey()]()

### define TAG_SUPP_LANG

```
#define TAG_SUPP_LANG 0xDF67
```

Supported languages ([EMV_CT_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang)) 

### define TAG_ATR

```
#define TAG_ATR 0xDF68
```

Answer to Reset from ICC (`EMV_CT_SmartReset` in call of [EMV_CT_SmartReset()]()), n byte binary. 

### define TAG_EXCLUDE_AID

```
#define TAG_EXCLUDE_AID 0xDF69
```

AIDs to exclude from the configuration list for this transaction ([EMV_CT_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data)) 

### define TAG_EMV_CONFORM

```
#define TAG_EMV_CONFORM 0xDF6A
```

EMV compliant app or not (e.g. domestic app)  [EMV_CT_DOM_CHIP_STRUCT::uc_EMVConformSelect](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-uc-emvconformselect). 

### define TAG_L1DRIVER_VERSION

```
#define TAG_L1DRIVER_VERSION 0xDF6B
```

L1 driver version given back from [EMV_CT_GetTermData()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_L1DRIVER_VERSION](),    L1DriverVersion in [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION](). 

### define TAG_CONFIG_ID

```
#define TAG_CONFIG_ID 0xDF6C
```

Unique id generated when terminal configuration has changed and the option [EMV_CT_INIT_OPT_EPP_MASTER]() is set. 

### define TAG_DF6D_MODEL_NAME

```
#define TAG_DF6D_MODEL_NAME 0xDF6D
```

Model included in [EMV_CT_GetTermData()]() and [EMV_CTLS_GetTermData()]() derived for use with emv-desired.xml and emv-allowed.xml. 

### define TAG_DF6E_CONFIG_DESIRED

```
#define TAG_DF6E_CONFIG_DESIRED 0xDF6E
```

Desired L2 kernel list. 

### define TAG_DF6F_SB308_FLAG

```
#define TAG_DF6F_SB308_FLAG 0xDF6F
```

1 byte, any value > 0 enables Specification Bulletin in L2 kernel 7.0.4 on Titus.    XML Tag: XML_TAG_TERMDATA_SB308_FLAG    On other platforms the SB308 status can by read with this tag in the response of EMV_CT_SerGetTermData. 

### define TAG_DF8F01_MANI_CANDLIST

```
#define TAG_DF8F01_MANI_CANDLIST 0xDF8F01
```

Modified candidate list (only valid in reentrance mode using the candidate list manipulation option [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data)) 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
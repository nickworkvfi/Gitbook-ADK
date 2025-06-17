---
title: EMV_CT_APPLIDATA_STRUCT
summary: Structure for configuration of one single application 
 see EMV_CT_SetAppliData()

---

# EMV_CT_APPLIDATA_STRUCT



Structure for configuration of one single application    see [EMV_CT_SetAppliData()]()


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[2] | **[VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum)** <br>Application version number    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_VERSION]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F09_TRM_APP_VERSION_NB](),    VerNum in [EMV_CT_APPLIDATA_STRUCT::VerNum](),    XML Tag: [XML_TAG_APPLIDATA_VER_NUM]().  |
| unsigned char[16+1] | **[AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname)** <br>Default application name to be used in case application label (tag 50) and application preferred name (tag 9F12) are not read from chip, temporary update possible, validity bit [EMV_CT_INPUT_APL_NAME]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_50_APP_LABEL](),    AppName in [EMV_CT_APPLIDATA_STRUCT::AppName](),    XML Tag: [XML_TAG_APPLIDATA_APP_NAME]().  |
| unsigned char | **[ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi)** <br>Application selection indicator    Must the card's AID match the configured AID exactly?  `0` ... yes  `1` ... no    recommended mandatory for [EMV_CT_SetAppliData](), no temporary update, validity bit [EMV_CT_INPUT_APL_ASI]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF20_ASI](),    ASI in [EMV_CT_APPLIDATA_STRUCT::ASI](),    XML Tag: [XML_TAG_APPLIDATA_ASI]().  |
| unsigned char[2] | **[BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey)** <br>Merchant category code    recommended mandatory for [EMV_CT_SetAppliData()](), temporary update possible, validity bit [EMV_CT_INPUT_APL_MERCHANT_CATCODE]()   Can also be changed by [EMV_CT_updateTxnTags()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F15_MERCH_CATEG_CODE](),    BrKey in [EMV_CT_APPLIDATA_STRUCT::BrKey](),    XML Tag: [XML_TAG_APPLIDATA_BR_KEY]().  |
| unsigned char[8] | **[TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident)** <br>Overwrite global Terminal Identification, temporary update possible, validity bit [EMV_CT_INPUT_APL_TID]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1C_TRM_ID](),    TermIdent in [EMV_CT_APPLIDATA_STRUCT::TermIdent](),    XML Tag: [XML_TAG_APPLIDATA_TERM_IDENT]().  |
| unsigned char[4] | **[FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit)** <br>Terminal floor limit (binary coded)    recommended mandatory for [EMV_CT_SetAppliData()]()   Can also be changed by [EMV_CT_updateTxnTags()]()   temporary update possible, validity bit [EMV_CT_INPUT_APL_FLOOR_LIMIT]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1B_TRM_FLOOR_LIMIT](),    FloorLimit in [EMV_CT_APPLIDATA_STRUCT::FloorLimit](),    XML Tag: [XML_TAG_APPLIDATA_FLOOR_LIMIT]().  |
| unsigned char[4] | **[Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold)** <br>Threshold Value for Biased Random Online Selection during risk management (binary coded)    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_THRESH]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF24_THRESHHOLD](),    Threshhold in [EMV_CT_APPLIDATA_STRUCT::Threshhold](),    XML Tag: [XML_TAG_APPLIDATA_THRESHOLD]().  |
| unsigned char | **[TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage)** <br>Target percentage (BCD coded) for random online selection during risk management    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TARGET]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF26_PERCENT_ONL](),    TargetPercentage in [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](),    XML Tag: [XML_TAG_APPLIDATA_TARGET_PERCENTAGE]().  |
| unsigned char | **[MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage)** <br>Maximum target percentage (BCD coded) for random online selection during risk management    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_MAXTARGET]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF25_MAXPERCENT_ONL](),    MaxTargetPercentage in [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](),    XML Tag: [XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE]().  |
| unsigned char[5] | **[TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial)** <br>Terminal Action Code - Denial    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TAC_DENIAL]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF21_TAC_DENIAL](),    TACDenial in [EMV_CT_APPLIDATA_STRUCT::TACDenial](),    XML Tag: [XML_TAG_APPLIDATA_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline)** <br>Terminal Action Code - Online    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TAC_ONLINE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF22_TAC_ONLINE](),    TACOnline in [EMV_CT_APPLIDATA_STRUCT::TACOnline](),    XML Tag: [XML_TAG_APPLIDATA_TAC_ONLINE]().  |
| unsigned char[5] | **[TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault)** <br>Terminal Action Code - Default    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TAC_DEFAULT]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF23_TAC_DEFAULT](),    TACDefault in [EMV_CT_APPLIDATA_STRUCT::TACDefault](),    XML Tag: [XML_TAG_APPLIDATA_TAC_DEFAULT]().  |
| unsigned char | **[EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application)** <br>`xx` = EMV-Application (or similar), `0xFF` = non-EMV-Application (not handled by standard L2 kernel), no temporary update, validity bit [EMV_CT_INPUT_APL_EMV_APPKIND]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF2D_EMV_APPLI](),    EMV_Application in [EMV_CT_APPLIDATA_STRUCT::EMV_Application](),    XML Tag: [XML_TAG_APPLIDATA_EMV_APPLICATION]() |
| [EMV_CT_DOL_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-dol-type) | **[Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol)** <br>Default TDOL (1st byte: length), maximum length see [EMV_ADK_MAX_LG_TDOL]()   see [EMV_CT_DOL_STRUCT](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TDOL]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF27_DEFAULT_TDOL](),    Default_TDOL in [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](),    XML Tag: [XML_TAG_APPLIDATA_DEFAULT_TDOL]().  |
| [EMV_CT_DOL_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-dol-type) | **[Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol)** <br>Default DDOL (1st byte: length), maximum length see [EMV_ADK_MAX_LG_DDOL]()   see [EMV_CT_DOL_STRUCT](), temporary update possible, validity bit [EMV_CT_INPUT_APL_DDOL]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF28_DEFAULT_DDOL](),    Default_DDOL in [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](),    XML Tag: [XML_TAG_APPLIDATA_DEFAULT_DDOL]().  |
| unsigned char[15] | **[MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident)** <br>Merchant Identifier    recommended mandatory for [EMV_CT_SetAppliData()]()   temporary update possible, can also be changed by [EMV_CT_updateTxnTags()]()   validity bit [EMV_CT_INPUT_APL_MERCHANT_IDENT]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F16_MERCHANT_ID](),    MerchIdent in [EMV_CT_APPLIDATA_STRUCT::MerchIdent](),    XML Tag: [XML_TAG_APPLIDATA_MERCH_IDENT]().  |
| unsigned char | **[CDAProcessing](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-cdaprocessing)** <br>CDA processing, maximum security or maximum speed, for values see [CDA_EMV_MODE_1](), [CDA_EMV_MODE_2](), [CDA_EMV_MODE_3](), [CDA_EMV_MODE_4](), temporary update possible, validity bit [EMV_CT_INPUT_APL_CDA]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF3E_CDA_PROC](),    CDAProcessing in [EMV_CT_APPLIDATA_STRUCT::CDAProcessing](),    XML Tag: [XML_TAG_APPLIDATA_CDA_PROCESSING]().  |
| unsigned char | **[ACBeforeAfter](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-acbeforeafter)** <br>TACIAC_Default handled before or after 1st GAC, only for offline only terminals, otherwise not needed    Possible values see [TAC/IAC DENIAL processing in case of Offline Only terminals](), temporary update possible, validity bit [EMV_CT_INPUT_APL_AC_BEFOREAFTER]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF15_OFFL_ONLY_PROCESS](),    ACBeforeAfter in [EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter](),    XML Tag: [XML_TAG_APPLIDATA_AC_BEFORE_AFTER]().  |
| unsigned char | **[AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported)** <br>Behaviour for AIP 'CVM not supported', see [Byte defines for CVM not supported / CVM not required](), temporary update possible, validity bit [EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF2E_CVM_NOT_SUPP](),    AIP_CVM_not_supported in [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](),    XML Tag: [XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED]().  |
| unsigned char | **[POS_EntryMode](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-pos-entrymode)** <br>POS entry mode according ISO 8583:1987    Can also be changed by [EMV_CT_updateTxnTags()]()   temporary update possible, validity bit [EMV_CT_INPUT_APL_POS_ENTRY]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F39_POS_ENTRY_MODE](),    POS_EntryMode in [EMV_CT_APPLIDATA_STRUCT::POS_EntryMode](),    XML Tag: [XML_TAG_APPLIDATA_POS_ENTRY_MODE]().  |
| unsigned char[2 *EMV_CT_MAX_APP_VERS] | **[Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no)** <br>up to 10 additional version numbers, optional if needed for compliance (Velocity up to 2), temporary update possible, validity bit [EMV_CT_INPUT_APL_ADD_VERSIONS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF5F_ADD_APP_VERSION](),    Additional_Versions_No in [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](),    XML Tag: [XML_TAG_APPLIDATA_ADD_VER_NUM]() |
| unsigned char[4] | **[Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit)** <br>General: Binary coded    Below this limit simplified termcaps may take place, e.g. CVM processing is skipped/handled as per parameter, temporary update possible, validity bit: [EMV_CT_INPUT_APL_SEC_LIMIT]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF49_APL_SEC_LIMIT](),    Security_Limit in [EMV_CT_APPLIDATA_STRUCT::Security_Limit](),    XML Tag: [XML_TAG_APPLIDATA_SECURE_LIMIT]().  |
| unsigned char[5] | **[App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap)** <br>Configure special application characteristics, see [Defines for Application flow capabilities](), temporary update possible, validity bit [EMV_CT_INPUT_APL_FLOW_CAPS]()   TLV tag [TAG_DF2B_APP_FLOW_CAP](),    XML Tag: [XML_TAG_APPLIDATA_APP_FLOW_CAP]().  |
| unsigned char[EMV_ADK_ADD_TAG_SIZE] | **[Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm)** <br>Tag + Length + Value: Additional terminal data for special applications    Example: MasterCard 9F53, temporary update possible, validity bit [EMV_CT_INPUT_APL_ADD_TAGS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF29_ADD_TAGS](),    Additional_Tags_TRM in [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](),    XML Tag: [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM]().  |
| [EMV_CT_DOL_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-dol-type) | **[Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd)**  |
| [EMV_CT_TAGLIST_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-taglist-type) | **[Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd)** <br>Tags only: These tags must be provided by the card, otherwise the transaction is terminated. The default implemetation should be an empty list (standard EMVCo settings will automatically apply). This is for fulfilling requirements of domestic specifications.    see [EMV_CT_TAGLIST_STRUCT](), temporary update possible, validity bit [EMV_CT_INPUT_APL_MAND_TAGS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF2A_DUTY_TAGS](),    Mandatory_Tags_CRD in [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](),    XML Tag: [XML_TAG_APPLIDATA_TAGLIST]().  |
| unsigned char[3] | **[App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap)** <br>Overwrite global "terminal capabilities" (`TermCap` in [EMV_CT_TERMDATA_STRUCT]()) for this application    Can also be changed by [EMV_CT_updateTxnTags()]()   temporary update possible, validity bit [EMV_CT_INPUT_APL_TERM_CAPS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F33_TRM_CAPABILITIES](),    App_TermCap in [EMV_CT_APPLIDATA_STRUCT::App_TermCap](),    XML Tag: [XML_TAG_APPLIDATA_APP_TERM_CAP]().  |
| unsigned char[3] | **[Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit)** <br>Below security limit terminal capabilities (e.g. cardholder verification methods) for CT chip transactions below the CVM / Security limit, temporary update possible, validity bit: [EMV_CT_INPUT_APL_SEC_CAPS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF4A_APL_SEC_CAPS](),    Capabilities_belowLimit in [EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](),    XML Tag: [XML_TAG_APPLIDATA_NON_SECURE_CAPS]().  |
| unsigned char[2] | **[App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm)** <br>Change "Terminal country code" ([EMV_CT_TERMDATA_STRUCT::TermCountryCode]()) (e.g. VISA Germany 0276), temporary update possible, validity bit [EMV_CT_INPUT_APL_COUNTRY_CODE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](),    App_CountryCodeTerm in [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](),    XML Tag: [XML_TAG_APPLIDATA_COUNTRY_CODE_TERM]().  |
| unsigned char[5] | **[App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap)** <br>Overwrite global "additional terminal capabilities" (`TermAddCap` in [EMV_CT_TERMDATA_STRUCT]()) for this application, only 1st byte is effective, temporary update possible, validity bit [EMV_CT_INPUT_APL_ADD_TERM_CAPS]()   Can also be changed by [EMV_CT_updateTxnTags()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F40_ADD_TRM_CAP](),    App_TermAddCap in [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](),    XML Tag: [XML_TAG_APPLIDATA_APP_TERM_ADD_CAP]().  |
| unsigned char | **[App_TermTyp](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termtyp)** <br>Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CT_SetTermData()]()   Can also be changed by [EMV_CT_updateTxnTags()]()   temporary update possible, validity bit [EMV_CT_INPUT_APL_TRM_TYPE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F35_TRM_TYPE](),    App_TermTyp in [EMV_CT_APPLIDATA_STRUCT::App_TermTyp](),    XML Tag: [XML_TAG_APPLIDATA_APP_TERM_TYP]().  |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type)[EMV_ADK_MAX_PRIO_APP] | **[xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio)** <br>Priority applications for this application ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    max. number see [EMV_ADK_MAX_PRIO_APP](), no temporary update, validity bit [EMV_CT_INPUT_APL_PRIO_APPS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF1D_PRIO_APPLI](),    xAIDPrio in [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](),    XML Tag: [XML_TAG_APPLIDATA_AID_PRIO]().  |
| unsigned char[EMV_ADK_MAX_CHP_TO_MSR] | **[tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids)** <br>MIDs related to this AID    max. number see [EMV_ADK_MAX_CHP_TO_MSR]()   TLV tag [TAG_DF1D_PRIO_APPLI](), no temporary update, validity bit [EMV_CT_INPUT_APL_MID]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF1D_PRIO_APPLI](),    tucFallbackMIDs in [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](),    XML Tag: [XML_TAG_APPLIDATA_FALLBACK_MIDS]().  |
| unsigned char[8] | **[xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx)** <br>List of special allowed transactions (manual reversal, refund, reservation, tip, Referral), see [Defines for special transaction configuration](), validity bit [EMV_CT_INPUT_APL_SPECIAL_TXN]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF1C_SPECIAL_TRX](),    xuc_Special_TRX in [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](),    XML Tag: [XML_TAG_APPLIDATA_SPECIAL_TRX]().  |
| unsigned char | **[uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling)** <br>How to handle Fallback after Final select for the selected application, see [Fallback handling after Final Select](), temporary update possible, validity bit [EMV_CT_INPUT_APL_FALLBACK]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF18_FALLABCK](),    uc_FallBack_Handling in [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](),    XML Tag: [XML_TAG_APPLIDATA_FALLBACK_HANDLING]().  |
| unsigned char | **[Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm)** <br>non-EMVCo CVM code (byte 1, b6-b1 of CV rule) supported by this AID (ranges 100000-101111 and 110000-111110 are allowed), temporary update possible, validity bit [EMV_CT_INPUT_APL_CUSTOMER_CVM]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF2F_CVM_CUSTOM](),    Customer_CVM in [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](),    XML Tag: [XML_TAG_APPLIDATA_CUSTOMER_CVM]() |
| unsigned char[5] | **[Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params)** <br>Terminal parameters defined as major, see [Defines for EMVCo checksum calculation]() ** only for checksum calculation **   not all of those parameters are configurable yet but may be in future, no temporary update, validity bit [EMV_CT_INPUT_APL_CHECKSUM_PARAMS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF13_TERM_PARAM](),    Chksum_Params in [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_PARAMS]().  |
| char[EMV_ADK_CHECKSUM_ASCII_SIZE] | **[ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco)** <br>EMVCo checksum dynamically calculated by the configuration    only valid for [EMV_CT_GetAppliData](), validity bit [EMV_CT_INPUT_APL_CHECKSUM]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](),    ChksumASCIIEMVCO in [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO]().  |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) | **[MasterAID](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-masteraid)** <br>Master AID with the same parameters (stored for grouping reasons)    Struct definition: [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)   Request to configure more than one AID at once, no temporary update, validity bit [EMV_CT_INPUT_APL_MASTER_AID]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF04_AID](),    MasterAID in [EMV_CT_APPLIDATA_STRUCT::MasterAID](),    XML Tag: [XML_TAG_APPLIDATA_MASTER_AID]().  |
| unsigned char[3] | **[TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale)**  |
| unsigned char[3] | **[TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash)**  |
| unsigned char[3] | **[TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback)**  |
| unsigned char[3] | **[TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund)**  |
| unsigned char[89] | **[DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids)** <br>Data Container Read List for DPAS-2 Data Storage feature. This is a list of container IDs each 4 byte. First byte is the number of container IDs Can be used in combination with [DataContainerReadRanges]().    Temporary update possible, validity bit: [EMV_CT_INPUT_APL_DCR_LIST_IDS]()   TLV tag: [TAG_DFAB58_DCR_LIST_IDS](),    XML Tag: [XML_TAG_APPLIDATA_DCR_LIST_IDS]().  |
| unsigned char[89] | **[DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges)** <br>Data Container Read List for DPAS-2 Data Storage feature. This is a list of container ID ranges consisting of each 8 byte, 4 byte start container ID and 4 byte stop container ID. First byte is the number of Container ranges. Can be used in combination with [DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids).    Temporary update possible, validity bit: [EMV_CT_INPUT_APL_DCR_LIST_RANGES]()   TLV tag: [TAG_DFAB59_DCR_LIST_RANGES](),    XML Tag: [XML_TAG_APPLIDATA_DCR_LIST_RANGES]().  |
| unsigned char[8] | **[Info_Included_Data](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-info-included-data)** <br>Which data is included in the message, see [Application data: Which data is included]().  |

## Public Attributes Documentation

### variable VerNum

```cpp
unsigned char[2] VerNum;
```

Application version number    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_VERSION]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F09_TRM_APP_VERSION_NB](),    VerNum in [EMV_CT_APPLIDATA_STRUCT::VerNum](),    XML Tag: [XML_TAG_APPLIDATA_VER_NUM](). 

### variable AppName

```cpp
unsigned char[16+1] AppName;
```

Default application name to be used in case application label (tag 50) and application preferred name (tag 9F12) are not read from chip, temporary update possible, validity bit [EMV_CT_INPUT_APL_NAME]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_50_APP_LABEL](),    AppName in [EMV_CT_APPLIDATA_STRUCT::AppName](),    XML Tag: [XML_TAG_APPLIDATA_APP_NAME](). 

### variable ASI

```cpp
unsigned char ASI;
```

Application selection indicator    Must the card's AID match the configured AID exactly?  `0` ... yes  `1` ... no    recommended mandatory for [EMV_CT_SetAppliData](), no temporary update, validity bit [EMV_CT_INPUT_APL_ASI]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF20_ASI](),    ASI in [EMV_CT_APPLIDATA_STRUCT::ASI](),    XML Tag: [XML_TAG_APPLIDATA_ASI](). 

### variable BrKey

```cpp
unsigned char[2] BrKey;
```

Merchant category code    recommended mandatory for [EMV_CT_SetAppliData()](), temporary update possible, validity bit [EMV_CT_INPUT_APL_MERCHANT_CATCODE]()   Can also be changed by [EMV_CT_updateTxnTags()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F15_MERCH_CATEG_CODE](),    BrKey in [EMV_CT_APPLIDATA_STRUCT::BrKey](),    XML Tag: [XML_TAG_APPLIDATA_BR_KEY](). 

### variable TermIdent

```cpp
unsigned char[8] TermIdent;
```

Overwrite global Terminal Identification, temporary update possible, validity bit [EMV_CT_INPUT_APL_TID]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1C_TRM_ID](),    TermIdent in [EMV_CT_APPLIDATA_STRUCT::TermIdent](),    XML Tag: [XML_TAG_APPLIDATA_TERM_IDENT](). 

### variable FloorLimit

```cpp
unsigned char[4] FloorLimit;
```

Terminal floor limit (binary coded)    recommended mandatory for [EMV_CT_SetAppliData()]()   Can also be changed by [EMV_CT_updateTxnTags()]()   temporary update possible, validity bit [EMV_CT_INPUT_APL_FLOOR_LIMIT]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1B_TRM_FLOOR_LIMIT](),    FloorLimit in [EMV_CT_APPLIDATA_STRUCT::FloorLimit](),    XML Tag: [XML_TAG_APPLIDATA_FLOOR_LIMIT](). 

### variable Threshhold

```cpp
unsigned char[4] Threshhold;
```

Threshold Value for Biased Random Online Selection during risk management (binary coded)    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_THRESH]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF24_THRESHHOLD](),    Threshhold in [EMV_CT_APPLIDATA_STRUCT::Threshhold](),    XML Tag: [XML_TAG_APPLIDATA_THRESHOLD](). 

### variable TargetPercentage

```cpp
unsigned char TargetPercentage;
```

Target percentage (BCD coded) for random online selection during risk management    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TARGET]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF26_PERCENT_ONL](),    TargetPercentage in [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](),    XML Tag: [XML_TAG_APPLIDATA_TARGET_PERCENTAGE](). 

### variable MaxTargetPercentage

```cpp
unsigned char MaxTargetPercentage;
```

Maximum target percentage (BCD coded) for random online selection during risk management    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_MAXTARGET]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF25_MAXPERCENT_ONL](),    MaxTargetPercentage in [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](),    XML Tag: [XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE](). 

### variable TACDenial

```cpp
unsigned char[5] TACDenial;
```

Terminal Action Code - Denial    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TAC_DENIAL]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF21_TAC_DENIAL](),    TACDenial in [EMV_CT_APPLIDATA_STRUCT::TACDenial](),    XML Tag: [XML_TAG_APPLIDATA_TAC_DENIAL](). 

### variable TACOnline

```cpp
unsigned char[5] TACOnline;
```

Terminal Action Code - Online    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TAC_ONLINE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF22_TAC_ONLINE](),    TACOnline in [EMV_CT_APPLIDATA_STRUCT::TACOnline](),    XML Tag: [XML_TAG_APPLIDATA_TAC_ONLINE](). 

### variable TACDefault

```cpp
unsigned char[5] TACDefault;
```

Terminal Action Code - Default    recommended mandatory for [EMV_CT_SetAppliData](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TAC_DEFAULT]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF23_TAC_DEFAULT](),    TACDefault in [EMV_CT_APPLIDATA_STRUCT::TACDefault](),    XML Tag: [XML_TAG_APPLIDATA_TAC_DEFAULT](). 

### variable EMV_Application

```cpp
unsigned char EMV_Application;
```

`xx` = EMV-Application (or similar), `0xFF` = non-EMV-Application (not handled by standard L2 kernel), no temporary update, validity bit [EMV_CT_INPUT_APL_EMV_APPKIND]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF2D_EMV_APPLI](),    EMV_Application in [EMV_CT_APPLIDATA_STRUCT::EMV_Application](),    XML Tag: [XML_TAG_APPLIDATA_EMV_APPLICATION]()

### variable Default_TDOL

```cpp
EMV_CT_DOL_TYPE Default_TDOL;
```

Default TDOL (1st byte: length), maximum length see [EMV_ADK_MAX_LG_TDOL]()   see [EMV_CT_DOL_STRUCT](), temporary update possible, validity bit [EMV_CT_INPUT_APL_TDOL]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF27_DEFAULT_TDOL](),    Default_TDOL in [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](),    XML Tag: [XML_TAG_APPLIDATA_DEFAULT_TDOL](). 

### variable Default_DDOL

```cpp
EMV_CT_DOL_TYPE Default_DDOL;
```

Default DDOL (1st byte: length), maximum length see [EMV_ADK_MAX_LG_DDOL]()   see [EMV_CT_DOL_STRUCT](), temporary update possible, validity bit [EMV_CT_INPUT_APL_DDOL]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF28_DEFAULT_DDOL](),    Default_DDOL in [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](),    XML Tag: [XML_TAG_APPLIDATA_DEFAULT_DDOL](). 

### variable MerchIdent

```cpp
unsigned char[15] MerchIdent;
```

Merchant Identifier    recommended mandatory for [EMV_CT_SetAppliData()]()   temporary update possible, can also be changed by [EMV_CT_updateTxnTags()]()   validity bit [EMV_CT_INPUT_APL_MERCHANT_IDENT]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F16_MERCHANT_ID](),    MerchIdent in [EMV_CT_APPLIDATA_STRUCT::MerchIdent](),    XML Tag: [XML_TAG_APPLIDATA_MERCH_IDENT](). 

### variable CDAProcessing

```cpp
unsigned char CDAProcessing;
```

CDA processing, maximum security or maximum speed, for values see [CDA_EMV_MODE_1](), [CDA_EMV_MODE_2](), [CDA_EMV_MODE_3](), [CDA_EMV_MODE_4](), temporary update possible, validity bit [EMV_CT_INPUT_APL_CDA]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF3E_CDA_PROC](),    CDAProcessing in [EMV_CT_APPLIDATA_STRUCT::CDAProcessing](),    XML Tag: [XML_TAG_APPLIDATA_CDA_PROCESSING](). 

### variable ACBeforeAfter

```cpp
unsigned char ACBeforeAfter;
```

TACIAC_Default handled before or after 1st GAC, only for offline only terminals, otherwise not needed    Possible values see [TAC/IAC DENIAL processing in case of Offline Only terminals](), temporary update possible, validity bit [EMV_CT_INPUT_APL_AC_BEFOREAFTER]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF15_OFFL_ONLY_PROCESS](),    ACBeforeAfter in [EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter](),    XML Tag: [XML_TAG_APPLIDATA_AC_BEFORE_AFTER](). 

### variable AIP_CVM_not_supported

```cpp
unsigned char AIP_CVM_not_supported;
```

Behaviour for AIP 'CVM not supported', see [Byte defines for CVM not supported / CVM not required](), temporary update possible, validity bit [EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF2E_CVM_NOT_SUPP](),    AIP_CVM_not_supported in [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](),    XML Tag: [XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED](). 

### variable POS_EntryMode

```cpp
unsigned char POS_EntryMode;
```

POS entry mode according ISO 8583:1987    Can also be changed by [EMV_CT_updateTxnTags()]()   temporary update possible, validity bit [EMV_CT_INPUT_APL_POS_ENTRY]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F39_POS_ENTRY_MODE](),    POS_EntryMode in [EMV_CT_APPLIDATA_STRUCT::POS_EntryMode](),    XML Tag: [XML_TAG_APPLIDATA_POS_ENTRY_MODE](). 

### variable Additional_Versions_No

```cpp
unsigned char[2 *EMV_CT_MAX_APP_VERS] Additional_Versions_No;
```

up to 10 additional version numbers, optional if needed for compliance (Velocity up to 2), temporary update possible, validity bit [EMV_CT_INPUT_APL_ADD_VERSIONS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF5F_ADD_APP_VERSION](),    Additional_Versions_No in [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](),    XML Tag: [XML_TAG_APPLIDATA_ADD_VER_NUM]()

### variable Security_Limit

```cpp
unsigned char[4] Security_Limit;
```

General: Binary coded    Below this limit simplified termcaps may take place, e.g. CVM processing is skipped/handled as per parameter, temporary update possible, validity bit: [EMV_CT_INPUT_APL_SEC_LIMIT]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF49_APL_SEC_LIMIT](),    Security_Limit in [EMV_CT_APPLIDATA_STRUCT::Security_Limit](),    XML Tag: [XML_TAG_APPLIDATA_SECURE_LIMIT](). 

### variable App_FlowCap

```cpp
unsigned char[5] App_FlowCap;
```

Configure special application characteristics, see [Defines for Application flow capabilities](), temporary update possible, validity bit [EMV_CT_INPUT_APL_FLOW_CAPS]()   TLV tag [TAG_DF2B_APP_FLOW_CAP](),    XML Tag: [XML_TAG_APPLIDATA_APP_FLOW_CAP](). 

### variable Additional_Tags_TRM

```cpp
unsigned char[EMV_ADK_ADD_TAG_SIZE] Additional_Tags_TRM;
```

Tag + Length + Value: Additional terminal data for special applications    Example: MasterCard 9F53, temporary update possible, validity bit [EMV_CT_INPUT_APL_ADD_TAGS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF29_ADD_TAGS](),    Additional_Tags_TRM in [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](),    XML Tag: [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM](). 

### variable Additional_Tags_CRD

```cpp
EMV_CT_DOL_TYPE Additional_Tags_CRD;
```


**Deprecated**: 

. ADK stores additional ICC tags automatically. No need to configure this anymore. Tag + maximum Length: Additional ICC tags for special applications 

 e.g. domestic cards with additional tags in ReadRecords, fleetcards with additional customer specific tags and others 

 see [EMV_CT_DOL_STRUCT](struct_e_m_v___c_t___d_o_l___s_t_r_u_c_t.md), temporary update possible, validity bit [EMV_CT_INPUT_APL_ADD_CRD_TAGS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-crd-tags)
`Tag`, `Struct`, `XML` Reference: 

 TLV tag [TAG_DF2C_ADD_TAGS_CRD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2c-add-tags-crd), 

 Additional_Tags_CRD in [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd), 

 XML Tag: [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-additional-tags-crd)

### variable Mandatory_Tags_CRD

```cpp
EMV_CT_TAGLIST_TYPE Mandatory_Tags_CRD;
```

Tags only: These tags must be provided by the card, otherwise the transaction is terminated. The default implemetation should be an empty list (standard EMVCo settings will automatically apply). This is for fulfilling requirements of domestic specifications.    see [EMV_CT_TAGLIST_STRUCT](), temporary update possible, validity bit [EMV_CT_INPUT_APL_MAND_TAGS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF2A_DUTY_TAGS](),    Mandatory_Tags_CRD in [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](),    XML Tag: [XML_TAG_APPLIDATA_TAGLIST](). 

### variable App_TermCap

```cpp
unsigned char[3] App_TermCap;
```

Overwrite global "terminal capabilities" (`TermCap` in [EMV_CT_TERMDATA_STRUCT]()) for this application    Can also be changed by [EMV_CT_updateTxnTags()]()   temporary update possible, validity bit [EMV_CT_INPUT_APL_TERM_CAPS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F33_TRM_CAPABILITIES](),    App_TermCap in [EMV_CT_APPLIDATA_STRUCT::App_TermCap](),    XML Tag: [XML_TAG_APPLIDATA_APP_TERM_CAP](). 

### variable Capabilities_belowLimit

```cpp
unsigned char[3] Capabilities_belowLimit;
```

Below security limit terminal capabilities (e.g. cardholder verification methods) for CT chip transactions below the CVM / Security limit, temporary update possible, validity bit: [EMV_CT_INPUT_APL_SEC_CAPS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF4A_APL_SEC_CAPS](),    Capabilities_belowLimit in [EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](),    XML Tag: [XML_TAG_APPLIDATA_NON_SECURE_CAPS](). 

### variable App_CountryCodeTerm

```cpp
unsigned char[2] App_CountryCodeTerm;
```

Change "Terminal country code" ([EMV_CT_TERMDATA_STRUCT::TermCountryCode]()) (e.g. VISA Germany 0276), temporary update possible, validity bit [EMV_CT_INPUT_APL_COUNTRY_CODE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](),    App_CountryCodeTerm in [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](),    XML Tag: [XML_TAG_APPLIDATA_COUNTRY_CODE_TERM](). 

### variable App_TermAddCap

```cpp
unsigned char[5] App_TermAddCap;
```

Overwrite global "additional terminal capabilities" (`TermAddCap` in [EMV_CT_TERMDATA_STRUCT]()) for this application, only 1st byte is effective, temporary update possible, validity bit [EMV_CT_INPUT_APL_ADD_TERM_CAPS]()   Can also be changed by [EMV_CT_updateTxnTags()]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F40_ADD_TRM_CAP](),    App_TermAddCap in [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](),    XML Tag: [XML_TAG_APPLIDATA_APP_TERM_ADD_CAP](). 

### variable App_TermTyp

```cpp
unsigned char App_TermTyp;
```

Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CT_SetTermData()]()   Can also be changed by [EMV_CT_updateTxnTags()]()   temporary update possible, validity bit [EMV_CT_INPUT_APL_TRM_TYPE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F35_TRM_TYPE](),    App_TermTyp in [EMV_CT_APPLIDATA_STRUCT::App_TermTyp](),    XML Tag: [XML_TAG_APPLIDATA_APP_TERM_TYP](). 

### variable xAIDPrio

```cpp
EMV_CT_APPLI_TYPE[EMV_ADK_MAX_PRIO_APP] xAIDPrio;
```

Priority applications for this application ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    max. number see [EMV_ADK_MAX_PRIO_APP](), no temporary update, validity bit [EMV_CT_INPUT_APL_PRIO_APPS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF1D_PRIO_APPLI](),    xAIDPrio in [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](),    XML Tag: [XML_TAG_APPLIDATA_AID_PRIO](). 

### variable tucFallbackMIDs

```cpp
unsigned char[EMV_ADK_MAX_CHP_TO_MSR] tucFallbackMIDs;
```

MIDs related to this AID    max. number see [EMV_ADK_MAX_CHP_TO_MSR]()   TLV tag [TAG_DF1D_PRIO_APPLI](), no temporary update, validity bit [EMV_CT_INPUT_APL_MID]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF1D_PRIO_APPLI](),    tucFallbackMIDs in [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](),    XML Tag: [XML_TAG_APPLIDATA_FALLBACK_MIDS](). 

### variable xuc_Special_TRX

```cpp
unsigned char[8] xuc_Special_TRX;
```

List of special allowed transactions (manual reversal, refund, reservation, tip, Referral), see [Defines for special transaction configuration](), validity bit [EMV_CT_INPUT_APL_SPECIAL_TXN]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF1C_SPECIAL_TRX](),    xuc_Special_TRX in [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](),    XML Tag: [XML_TAG_APPLIDATA_SPECIAL_TRX](). 

### variable uc_FallBack_Handling

```cpp
unsigned char uc_FallBack_Handling;
```

How to handle Fallback after Final select for the selected application, see [Fallback handling after Final Select](), temporary update possible, validity bit [EMV_CT_INPUT_APL_FALLBACK]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF18_FALLABCK](),    uc_FallBack_Handling in [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](),    XML Tag: [XML_TAG_APPLIDATA_FALLBACK_HANDLING](). 

### variable Customer_CVM

```cpp
unsigned char Customer_CVM;
```

non-EMVCo CVM code (byte 1, b6-b1 of CV rule) supported by this AID (ranges 100000-101111 and 110000-111110 are allowed), temporary update possible, validity bit [EMV_CT_INPUT_APL_CUSTOMER_CVM]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF2F_CVM_CUSTOM](),    Customer_CVM in [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](),    XML Tag: [XML_TAG_APPLIDATA_CUSTOMER_CVM]()

### variable Chksum_Params

```cpp
unsigned char[5] Chksum_Params;
```

Terminal parameters defined as major, see [Defines for EMVCo checksum calculation]() ** only for checksum calculation **   not all of those parameters are configurable yet but may be in future, no temporary update, validity bit [EMV_CT_INPUT_APL_CHECKSUM_PARAMS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF13_TERM_PARAM](),    Chksum_Params in [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_PARAMS](). 

### variable ChksumASCIIEMVCO

```cpp
char[EMV_ADK_CHECKSUM_ASCII_SIZE] ChksumASCIIEMVCO;
```

EMVCo checksum dynamically calculated by the configuration    only valid for [EMV_CT_GetAppliData](), validity bit [EMV_CT_INPUT_APL_CHECKSUM]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF12_CHECKSUM](),    ChksumASCIIEMVCO in [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](),    XML Tag: [XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO](). 

### variable MasterAID

```cpp
EMV_CT_APPLI_TYPE MasterAID;
```

Master AID with the same parameters (stored for grouping reasons)    Struct definition: [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)   Request to configure more than one AID at once, no temporary update, validity bit [EMV_CT_INPUT_APL_MASTER_AID]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF04_AID](),    MasterAID in [EMV_CT_APPLIDATA_STRUCT::MasterAID](),    XML Tag: [XML_TAG_APPLIDATA_MASTER_AID](). 

### variable TxnTypesSale

```cpp
unsigned char[3] TxnTypesSale;
```


Since kernel 7.0.3 the risk management can treat other transaction types as sale. Note: This is optional. If just [EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service) is required, it should be omitted. If an additional transaction types shall be set, fill the all other elements with [EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service). If you set all three values different from [EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service), [EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service) will not be treated as sale anymore. 


 Temporary update possible, validity bit: [EMV_CT_INPUT_APL_TXN_TYPES_SALE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-sale)

 TLV tag: [TAG_DFD004_TXN_TYPES_SALE](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd004-txn-types-sale)

 XML Tag: [XML_TAG_APPLIDATA_TXN_TYPES_SALE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-txn-types-sale)


### variable TxnTypesCash

```cpp
unsigned char[3] TxnTypesCash;
```


Same description as [TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale) but with [EMV_ADK_TRAN_TYPE_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cash) as default and fill element. 


 Temporary update possible, validity bit: [EMV_CT_INPUT_APL_TXN_TYPES_CASH](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-cash)

 TLV tag: [TAG_DFD005_TXN_TYPES_CASH](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd005-txn-types-cash)

 XML Tag: [XML_TAG_APPLIDATA_TXN_TYPES_CASH](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-txn-types-cash)


### variable TxnTypesCashback

```cpp
unsigned char[3] TxnTypesCashback;
```


Same description as [TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale) but with [EMV_ADK_TRAN_TYPE_CASHBACK](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cashback) as default and fill element. 


 Temporary update possible, validity bit: [EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-cashback)

 TLV tag: [TAG_DFD006_TXN_TYPES_CASHBACK](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd006-txn-types-cashback)

 XML Tag: [XML_TAG_APPLIDATA_TXN_TYPES_CASHBACK](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-txn-types-cashback)


### variable TxnTypesRefund

```cpp
unsigned char[3] TxnTypesRefund;
```


Same description as [TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale) but with [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund) as default and fill element. 


 Temporary update possible, validity bit: [EMV_CT_INPUT_APL_TXN_TYPES_REFUND](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-refund)

 TLV tag: [TAG_DFD007_TXN_TYPES_REFUND](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd007-txn-types-refund)

 XML Tag: [XML_TAG_APPLIDATA_TXN_TYPES_REFUND](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-txn-types-refund)


### variable DataContainerReadIds

```cpp
unsigned char[89] DataContainerReadIds;
```

Data Container Read List for DPAS-2 Data Storage feature. This is a list of container IDs each 4 byte. First byte is the number of container IDs Can be used in combination with [DataContainerReadRanges]().    Temporary update possible, validity bit: [EMV_CT_INPUT_APL_DCR_LIST_IDS]()   TLV tag: [TAG_DFAB58_DCR_LIST_IDS](),    XML Tag: [XML_TAG_APPLIDATA_DCR_LIST_IDS](). 

### variable DataContainerReadRanges

```cpp
unsigned char[89] DataContainerReadRanges;
```

Data Container Read List for DPAS-2 Data Storage feature. This is a list of container ID ranges consisting of each 8 byte, 4 byte start container ID and 4 byte stop container ID. First byte is the number of Container ranges. Can be used in combination with [DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids).    Temporary update possible, validity bit: [EMV_CT_INPUT_APL_DCR_LIST_RANGES]()   TLV tag: [TAG_DFAB59_DCR_LIST_RANGES](),    XML Tag: [XML_TAG_APPLIDATA_DCR_LIST_RANGES](). 

### variable Info_Included_Data

```cpp
unsigned char[8] Info_Included_Data;
```

Which data is included in the message, see [Application data: Which data is included](). 

-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
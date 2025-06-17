---
title: EMV_CTLS_APPLIDATA_MK_STRUCT
summary: Structure for configuration of one single application, MK specific part. See see Book C-2, Kernel 2 Specification at [EMVCo Homepage]. See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_MK_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, MK specific part. See see Book C-2, Kernel 2 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - MasterCard - Availability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F1C_0]()   TLV tag [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_MK_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_MK_9F1A_0]()   TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_MK_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_MK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_MK_9F35_TERM_TYPE]().  |
| unsigned char[5] | **[AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40)** <br>TempUpdate allowed: YES    Description: "Additional Terminal Capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_MK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_MK_9F40_ADD_TERM_CAPS]().  |
| unsigned char | **[MagstripeCVM_aboveLimit_DF811E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-abovelimit-df811e)** <br>TempUpdate allowed: YES    Description: Separate cardholder verification methods for CTLS magstripe transactions for PayPass3 above the CVM limit (former Byte 2 of 9F33)    PayPass3 tag: `DF811E`   For values see PayPass spec, examples: 0x10=Signature, 0x20=OnlinePIN    Availability bit: [INPUT_CTLS_APL_MK_DF811E_0]()   TLV tag: [TAG_DF811E_MSR_CVM_ABOVE_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF811E_MSR_CVM_ABOVE_LIMIT]().  |
| unsigned char | **[MagstripeCVM_belowLimit_DF812C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-belowlimit-df812c)** <br>TempUpdate allowed: YES    Description: Separate cardholder verification methods for CTLS magstripe transactions for PayPass3 below the CVM limit (former Byte 2 of 9F33)    PayPass3 tag: `DF812C`   For values see PayPass spec, examples: 0x10=Signature, 0x20=OnlinePIN    Availability bit: [INPUT_CTLS_APL_MK_DF812C_0]()   TLV tag: [TAG_DF812C_MSR_CVM_BELOW_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF812C_MSR_CVM_BELOW_LIMIT]().  |
| unsigned char | **[ChipCVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-abovelimit-df8118)** <br>TempUpdate allowed: YES    Description: Separate cardholder verification methods for CTLS chip transactions for PayPass3 above the CVM limit (former Byte 2 of 9F33)    Availability bit: [INPUT_CTLS_APL_MK_DF8118_0]()   TLV tag: [TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED](),    XML Tag: [XML_TAG_AD_MK_DF8118_CHP_CVM_ABOVE_LIMIT]().  |
| unsigned char | **[ChipCVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-belowlimit-df8119)** <br>TempUpdate allowed: YES    Description: Separate cardholder verification methods for CTLS chip transactions for PayPass3 below the CVM limit (former Byte 2 of 9F33)    Availability bit: [INPUT_CTLS_APL_MK_DF8119_0]()   TLV tag: [TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED](),    XML Tag: [XML_TAG_APPLIDATA_CHIP_CVM_BELOW]().  |
| unsigned char | **[SecurityCapability_DF811F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-securitycapability-df811f)** <br>TempUpdate allowed: YES    Description: Indicates the security capability of the Kernel (former Byte 3 of 9F33)    Availability bit: [INPUT_CTLS_APL_MK_DF811F_1]()   TLV tag: [TAG_DF811F_SECURITY_CAPABILITY]()   XML Tag: [XML_TAG_AD_MK_DF811F_SECURITY_CAP]().  |
| unsigned char | **[CardDataInputCapability_DF8117](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-carddatainputcapability-df8117)** <br>TempUpdate allowed: NO    Description: Indicates the card data input capability of the Terminal and Reader (former Byte 1 of 9F33)    Availability bit: [INPUT_CTLS_APL_MK_DF8117_1]()   TLV tag: [TAG_DF8117_CARD_DATA_INPUT_CAPABILITY]()   XML Tag: [XML_TAG_AD_MK_DF8117_CARD_DATA_INPUT_CAP]().  |
| unsigned char[6] | **[FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-floorlimit-df8123)** <br>TempUpdate allowed: YES    Description: Reader Contactless Floor Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_MK_DF8123_1]()   TLV tag: [TAG_DF8123_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF8123_FLOOR_LIMIT]().  |
| unsigned char[6] | **[TransactionLimitNoOnDevice_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitnoondevice-df8124)** <br>TempUpdate allowed: YES    Description: Reader Contactless Transaction Limit (No On-device CVM) (n12)    Availability bit: [INPUT_CTLS_APL_MK_DF8124_1]()   TLV tag [TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM](),    XML Tag: [XML_TAG_AD_MK_DF8124_TRX_LIMIT_NO_ON_DEVICE]().  |
| unsigned char[6] | **[TransactionLimitOnDevice_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitondevice-df8125)** <br>TempUpdate allowed: YES    Description: Reader Contactless Transaction Limit (On-device CVM) (n12)    Availability bit: [INPUT_CTLS_APL_MK_DF8125_1]()   TLV tag [TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM](),    XML Tag: [XML_TAG_AD_MK_DF8125_TRX_LIMIT_ON_DEVICE]().  |
| unsigned char[6] | **[CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126)** <br>TempUpdate allowed: YES    Description: Reader CVM Required Limit (n12)    Availability bit: [INPUT_CTLS_APL_MK_DF8126_1]()   TLV tag: [INPUT_CTLS_APL_MK_DF8126_1](),    XML Tag: [XML_TAG_AD_MK_DF8126_CVM_REQUIRED_LIMIT]().  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[ChipVersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipversionnumber-9f09)** <br>TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F09_1]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_MK_9F09_CHP_VERSION_NUMBER]().  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[MSRVersionNumber_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-msrversionnumber-9f6d)** <br>TempUpdate allowed: NO    Description: Application msr version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F6D_1]()   TLV tag: [TAG_9F6D_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_MK_9F6D_MSR_VERSION_NUMBER]().  |
| unsigned char | **[KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b)** <br>TempUpdate allowed: NO    Description: Indicates the Kernel configuration options.    Availability bit: [INPUT_CTLS_APL_MK_DF811B_2]()   TLV tag: [TAG_DF811B_KERNEL_CONFIGURATION]()   XML Tag: [XML_TAG_AD_MK_DF811B_KERNEL_CONFIG]().  |
| unsigned char | **[TransactionCategoryCode_9F53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactioncategorycode-9f53)** <br>TempUpdate allowed: YES    Description: Transaction category code:    Availability bit: [INPUT_CTLS_APL_MK_9F53_2]()   TLV tag [TAG_9F53_TRANS_CATEGORY_CODE](),    XML Tag: [XML_TAG_AD_MK_9F53_TRX_CATEGORY_CODE]().  |
| unsigned char[5] | **[TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdefault-df8120)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_DF8120_2]()   TLV tag: [TAG_DF8120_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_MK_DF8120_TAC_DEFAULT]().  |
| unsigned char[5] | **[TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdenial-df8121)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_DF8121_2]()   TLV tag: [TAG_DF8121_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_MK_DF8121_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-taconline-df8122)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_DF8122_2]()   TLV tag: [TAG_DF8122_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_MK_DF8122_TAC_ONLINE]().  |
| unsigned char | **[KernelID_DF810C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelid-df810c)** <br>TempUpdate allowed: NO    Description: Contains a value that uniquely identifies each Kernel. There is one occurrence of this data object for each Kernel in the Reader.    Availability bit: [INPUT_CTLS_APL_MK_DF810C_2]()   TLV tag: [TAG_DF810C_KERNEL_ID]()   XML Tag: [XML_TAG_AD_MK_DF810C_KERNEL_ID]().  |
| unsigned char[8] | **[TerminalRiskManagementData_9F1D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminalriskmanagementdata-9f1d)** <br>TempUpdate allowed: YES    Description: Application-specific value used by the cardholder device for risk management purposes. If not set explicitly, then derived internally as good as possible.    Availability bit: [INPUT_CTLS_APL_MK_9F1D_2]()   TLV tag: [TAG_9F1D_TRM_RISK_MNGT_DATA]()   XML Tag: [XML_TAG_AD_MK_9F1D_TRM_RISK_MGMT_DATA]().  |
| unsigned char[2] | **[MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)** <br>TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F15_2]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_MK_9F15_MERCHANT_CATEGORY_CODE]().  |
| char[15+1] | **[MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16)** <br>TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F16_3]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_MK_9F16_MERCHANT_ID]().  |
| char[40+1] | **[MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)** <br>TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_MK_9F4E_3]()   TLV tag [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_MK_9F4E_MERCHANT_NAME_LOCATION]().  |
| unsigned char[6] | **[AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)** <br>TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_MK_9F01_3]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_MK_9F01_ACQUIRER_ID]().  |
| unsigned char | **[HoldTimeValue_DF8130](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-holdtimevalue-df8130)** <br>TempUpdate allowed: NO    Description: Indicates the time that the field is to be turned off after the transaction is completed if requested to do so by the cardholder device.    Availability bit: [INPUT_CTLS_APL_MK_DF8130_3]()   TLV tag: [TAG_DF8130_HOLD_TIME_VALUE]()   XML Tag: [XML_TAG_AD_MK_DF8130_HOLD_TIME_VALUE]().  |
| unsigned char[3] | **[MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d)** <br>TempUpdate allowed: NO    Description: Indicates the default delay for the processing of the next MSG Signal. The Message Hold Time is an integer in units of 100ms.    Availability bit: [INPUT_CTLS_APL_MK_DF812D_3]()   TLV tag: [TAG_DF812D_MESSAGE_HOLD_TIME]()   XML Tag: [XML_TAG_AD_MK_DF812D_MESSAGE_HOLD_TIME]().  |
| unsigned char[2] | **[TornTransactionLifetime_DF811C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionlifetime-df811c)** <br>TempUpdate allowed: NO    Description: Lifetime for torn transaction, 0 means no torn txns are stored    Availability bit: [INPUT_CTLS_APL_MK_DF811C_3]()   TLV tag: [TAG_DF811C_TRN_TXN_LIFETIME](),    XML Tag: [XML_TAG_AD_MK_DF811C_TORN_TRX_LIFETIME]().  |
| unsigned char | **[TornTransactionNumber_DF811D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionnumber-df811d)** <br>TempUpdate allowed: NO    Description: Number of torn transaction to stored. Please be aware that this value should be consistent over the AIDs because otherwise the size of the torn txn store will be changed accordingly each time this AID is used for a transaction    Availability bit: [INPUT_CTLS_APL_MK_DF811D_3]()   TLV tag [TAG_DF811D_TRN_TXN_NUMBER](),    XML Tag: [XML_TAG_AD_MK_DF811D_TORN_TRX_NUMBER]().  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[PhoneMessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-phonemessagetable-df8131)** <br>TempUpdate allowed: NO    Description: Phone message table, up to 10 entries    Availability bit: [INPUT_CTLS_APL_MK_DF8131_3]()   TLV tag [TAG_DF8131_PHONE_MSG_TABLE](),    XML Tag: [XML_TAG_AD_MK_DF8131_PHONE_MSG_TABLE]().  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[TagsToRead_DF8112](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstoread-df8112)** <br>TempUpdate allowed: NO    Description: PayPass Data Exchange : Tags To Read. List of tags indicating the data the Terminal has requested to be read    Availability bit: [INPUT_CTLS_APL_MK_DF8112_4]()   TLV tag [TAG_DF8112_TAGS_TO_READ](),    XML Tag: [XML_TAG_AD_MK_DF8112_TAGS_TO_READ]().  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[TagsToWriteBeforeGenAC_FF8102](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowritebeforegenac-ff8102)** <br>TempUpdate allowed: NO    Description: PayPass Data Exchange : Tags To Write Before Gen AC    Availability bit: [INPUT_CTLS_APL_MK_FF8102_4]()   TLV tag [TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC](),    XML Tag: [XML_TAG_AD_MK_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC]().  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[TagsToWriteAfterGenAC_FF8103](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowriteaftergenac-ff8103)** <br>TempUpdate allowed: NO    Description: PayPass Data Exchange : Tags To Write After Gen AC    Availability bit: [INPUT_CTLS_APL_MK_FF8103_4]()   TLV tag [TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC](),    XML Tag: [XML_TAG_AD_MK_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC]().  |
| unsigned char | **[ProceedToFirstWriteFlag_DF8110](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-proceedtofirstwriteflag-df8110)** <br>TempUpdate allowed: NO    Description: PayPass Data Exchange : Proceed To First Write Flag    Availability bit: [INPUT_CTLS_APL_MK_DF8110_4]()   TLV tag [TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG](),    XML Tag: [XML_TAG_AD_MK_DF8110_PROCEED_TO_FIRST_WRITE_FLAG]().  |
| unsigned char[8] | **[DSRequestedOperatorID_9F5C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-dsrequestedoperatorid-9f5c)** <br>TempUpdate allowed: NO    Description: PayPass Data Exchange : Contains the Terminal determined operator identifier for data storage    Availability bit: [INPUT_CTLS_APL_MK_9F5C_4]()   TLV tag [TAG_9F5C_DS_REQUESTED_OPERATOR_ID](),    XML Tag: [XML_TAG_AD_MK_9F5C_DS_REQUESTED_OPERATOR_ID]().  |
| unsigned char[2] | **[DETimeoutValue_DF8127](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-detimeoutvalue-df8127)** <br>TempUpdate allowed: NO    Description: PayPass Data Exchange : Defines the time in ms before the timer generates a TIMEOUT Signal    Availability bit: [INPUT_CTLS_APL_MK_DF8127_4]()   TLV tag [TAG_DF8127_DE_TIMEOUT_VALUE](),    XML Tag: [XML_TAG_AD_MK_DF8127_DE_TIMEOUT_VALUE]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for PayPass (MasterCard)]()   Availability bit: [INPUT_CTLS_APL_MK_DFAB31_4]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_MK_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[2] | **[RR_MinGracePeriod_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-mingraceperiod-df8132)** <br>TempUpdate allowed: YES    Description: Minimum Relay Resistance Grace Period [1/10 ms]    TLV tag [TAG_DF8132_RR_MIN_GRACE_PERIOD]()   Availability bit: [INPUT_CTLS_APL_MK_DF8132_5](),    XML Tag: [XML_TAG_AD_MK_DF8132_RR_MIN_GRACE_PERIOD]().  |
| unsigned char[2] | **[RR_MaxGracePeriod_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-maxgraceperiod-df8133)** <br>TempUpdate allowed: YES    Description: Maximum Relay Resistance Grace Period [1/10 ms]    TLV tag [TAG_DF8133_RR_MAX_GRACE_PERIOD]()   Availability bit: [INPUT_CTLS_APL_MK_DF8133_5](),    XML Tag: [XML_TAG_AD_MK_DF8133_RR_MAX_GRACE_PREIOD]().  |
| unsigned char[2] | **[RR_ExpectedTransTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-capdu-df8134)** <br>TempUpdate allowed: YES    Description: Terminal Expected Transmission Time For Relay Resistance C-APDU [1/10 ms]    TLV tag [TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU]()   Availability bit: [INPUT_CTLS_APL_MK_DF8134_5](),    XML Tag: [XML_TAG_AD_MK_DF8134_RR_EXP_TRANS_TIME_CAPDU]().  |
| unsigned char[2] | **[RR_ExpectedTransTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-rapdu-df8135)** <br>TempUpdate allowed: YES    Description: Terminal Expected Transmission Time For Relay Resistance R-APDU [1/10 ms]    TLV tag [TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU]()   Availability bit: [INPUT_CTLS_APL_MK_DF8135_5](),    XML Tag: [XML_TAG_AD_MK_DF8135_RR_EXP_TRANS_TIME_RAPDU]().  |
| unsigned char[2] | **[RR_AccuracyThreshold_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-accuracythreshold-df8136)** <br>TempUpdate allowed: YES    Description: Relay Resistance Accuracy Threshold [1/10 ms]    TLV tag [TAG_DF8136_RR_ACCURACY_THRESHOLD]()   Availability bit: [INPUT_CTLS_APL_MK_DF8136_5](),    XML Tag: [XML_TAG_AD_MK_DF8136_RR_ACCURACY_THRESHOLD]().  |
| unsigned char | **[RR_TransTimeMismatchThreshold_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchthreshold-df8137)** <br>TempUpdate allowed: YES    Description: Relay Resistance Transmission Time Mismatch Threshold [%]    TLV tag [TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD]()   Availability bit: [INPUT_CTLS_APL_MK_DF8137_5](),    XML Tag: [XML_TAG_AD_MK_DF8137_RR_TT_MISMATCH_THRESHOLD]().  |
| unsigned char[20] | **[MerchantCustomData_9F7C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcustomdata-9f7c)** <br>TempUpdate allowed: YES    Description: Proprietary merchant data that may be requested by the Card    TLV tag [TAG_9F7C_MERCHANT_CUSTOM_DATA]()   Availability bit: [INPUT_CTLS_APL_MK_9F7C_5](),    XML Tag: [XML_TAG_AD_MK_9F7C_MERCHANT_CUSTOM_DATA]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - MasterCard - Availability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F1C_0]()   TLV tag [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_MK_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_MK_9F1A_0]()   TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_MK_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_MK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_MK_9F35_TERM_TYPE](). 

### variable AdditionalTerminalCapabilities_9F40

```cpp
unsigned char[5] AdditionalTerminalCapabilities_9F40;
```

TempUpdate allowed: YES    Description: "Additional Terminal Capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_MK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_MK_9F40_ADD_TERM_CAPS](). 

### variable MagstripeCVM_aboveLimit_DF811E

```cpp
unsigned char MagstripeCVM_aboveLimit_DF811E;
```

TempUpdate allowed: YES    Description: Separate cardholder verification methods for CTLS magstripe transactions for PayPass3 above the CVM limit (former Byte 2 of 9F33)    PayPass3 tag: `DF811E`   For values see PayPass spec, examples: 0x10=Signature, 0x20=OnlinePIN    Availability bit: [INPUT_CTLS_APL_MK_DF811E_0]()   TLV tag: [TAG_DF811E_MSR_CVM_ABOVE_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF811E_MSR_CVM_ABOVE_LIMIT](). 

### variable MagstripeCVM_belowLimit_DF812C

```cpp
unsigned char MagstripeCVM_belowLimit_DF812C;
```

TempUpdate allowed: YES    Description: Separate cardholder verification methods for CTLS magstripe transactions for PayPass3 below the CVM limit (former Byte 2 of 9F33)    PayPass3 tag: `DF812C`   For values see PayPass spec, examples: 0x10=Signature, 0x20=OnlinePIN    Availability bit: [INPUT_CTLS_APL_MK_DF812C_0]()   TLV tag: [TAG_DF812C_MSR_CVM_BELOW_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF812C_MSR_CVM_BELOW_LIMIT](). 

### variable ChipCVM_aboveLimit_DF8118

```cpp
unsigned char ChipCVM_aboveLimit_DF8118;
```

TempUpdate allowed: YES    Description: Separate cardholder verification methods for CTLS chip transactions for PayPass3 above the CVM limit (former Byte 2 of 9F33)    Availability bit: [INPUT_CTLS_APL_MK_DF8118_0]()   TLV tag: [TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED](),    XML Tag: [XML_TAG_AD_MK_DF8118_CHP_CVM_ABOVE_LIMIT](). 

### variable ChipCVM_belowLimit_DF8119

```cpp
unsigned char ChipCVM_belowLimit_DF8119;
```

TempUpdate allowed: YES    Description: Separate cardholder verification methods for CTLS chip transactions for PayPass3 below the CVM limit (former Byte 2 of 9F33)    Availability bit: [INPUT_CTLS_APL_MK_DF8119_0]()   TLV tag: [TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED](),    XML Tag: [XML_TAG_APPLIDATA_CHIP_CVM_BELOW](). 

### variable SecurityCapability_DF811F

```cpp
unsigned char SecurityCapability_DF811F;
```

TempUpdate allowed: YES    Description: Indicates the security capability of the Kernel (former Byte 3 of 9F33)    Availability bit: [INPUT_CTLS_APL_MK_DF811F_1]()   TLV tag: [TAG_DF811F_SECURITY_CAPABILITY]()   XML Tag: [XML_TAG_AD_MK_DF811F_SECURITY_CAP](). 

### variable CardDataInputCapability_DF8117

```cpp
unsigned char CardDataInputCapability_DF8117;
```

TempUpdate allowed: NO    Description: Indicates the card data input capability of the Terminal and Reader (former Byte 1 of 9F33)    Availability bit: [INPUT_CTLS_APL_MK_DF8117_1]()   TLV tag: [TAG_DF8117_CARD_DATA_INPUT_CAPABILITY]()   XML Tag: [XML_TAG_AD_MK_DF8117_CARD_DATA_INPUT_CAP](). 

### variable FloorLimit_DF8123

```cpp
unsigned char[6] FloorLimit_DF8123;
```

TempUpdate allowed: YES    Description: Reader Contactless Floor Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_MK_DF8123_1]()   TLV tag: [TAG_DF8123_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF8123_FLOOR_LIMIT](). 

### variable TransactionLimitNoOnDevice_DF8124

```cpp
unsigned char[6] TransactionLimitNoOnDevice_DF8124;
```

TempUpdate allowed: YES    Description: Reader Contactless Transaction Limit (No On-device CVM) (n12)    Availability bit: [INPUT_CTLS_APL_MK_DF8124_1]()   TLV tag [TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM](),    XML Tag: [XML_TAG_AD_MK_DF8124_TRX_LIMIT_NO_ON_DEVICE](). 

### variable TransactionLimitOnDevice_DF8125

```cpp
unsigned char[6] TransactionLimitOnDevice_DF8125;
```

TempUpdate allowed: YES    Description: Reader Contactless Transaction Limit (On-device CVM) (n12)    Availability bit: [INPUT_CTLS_APL_MK_DF8125_1]()   TLV tag [TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM](),    XML Tag: [XML_TAG_AD_MK_DF8125_TRX_LIMIT_ON_DEVICE](). 

### variable CVMRequiredLimit_DF8126

```cpp
unsigned char[6] CVMRequiredLimit_DF8126;
```

TempUpdate allowed: YES    Description: Reader CVM Required Limit (n12)    Availability bit: [INPUT_CTLS_APL_MK_DF8126_1]()   TLV tag: [INPUT_CTLS_APL_MK_DF8126_1](),    XML Tag: [XML_TAG_AD_MK_DF8126_CVM_REQUIRED_LIMIT](). 

### variable ChipVersionNumber_9F09

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] ChipVersionNumber_9F09;
```

TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F09_1]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_MK_9F09_CHP_VERSION_NUMBER](). 

### variable MSRVersionNumber_9F6D

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] MSRVersionNumber_9F6D;
```

TempUpdate allowed: NO    Description: Application msr version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F6D_1]()   TLV tag: [TAG_9F6D_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_MK_9F6D_MSR_VERSION_NUMBER](). 

### variable KernelConfiguration_DF811B

```cpp
unsigned char KernelConfiguration_DF811B;
```

TempUpdate allowed: NO    Description: Indicates the Kernel configuration options.    Availability bit: [INPUT_CTLS_APL_MK_DF811B_2]()   TLV tag: [TAG_DF811B_KERNEL_CONFIGURATION]()   XML Tag: [XML_TAG_AD_MK_DF811B_KERNEL_CONFIG](). 

### variable TransactionCategoryCode_9F53

```cpp
unsigned char TransactionCategoryCode_9F53;
```

TempUpdate allowed: YES    Description: Transaction category code:    Availability bit: [INPUT_CTLS_APL_MK_9F53_2]()   TLV tag [TAG_9F53_TRANS_CATEGORY_CODE](),    XML Tag: [XML_TAG_AD_MK_9F53_TRX_CATEGORY_CODE](). 

### variable TACDefault_DF8120

```cpp
unsigned char[5] TACDefault_DF8120;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_DF8120_2]()   TLV tag: [TAG_DF8120_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_MK_DF8120_TAC_DEFAULT](). 

### variable TACDenial_DF8121

```cpp
unsigned char[5] TACDenial_DF8121;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_DF8121_2]()   TLV tag: [TAG_DF8121_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_MK_DF8121_TAC_DENIAL](). 

### variable TACOnline_DF8122

```cpp
unsigned char[5] TACOnline_DF8122;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_DF8122_2]()   TLV tag: [TAG_DF8122_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_MK_DF8122_TAC_ONLINE](). 

### variable KernelID_DF810C

```cpp
unsigned char KernelID_DF810C;
```

TempUpdate allowed: NO    Description: Contains a value that uniquely identifies each Kernel. There is one occurrence of this data object for each Kernel in the Reader.    Availability bit: [INPUT_CTLS_APL_MK_DF810C_2]()   TLV tag: [TAG_DF810C_KERNEL_ID]()   XML Tag: [XML_TAG_AD_MK_DF810C_KERNEL_ID](). 

### variable TerminalRiskManagementData_9F1D

```cpp
unsigned char[8] TerminalRiskManagementData_9F1D;
```

TempUpdate allowed: YES    Description: Application-specific value used by the cardholder device for risk management purposes. If not set explicitly, then derived internally as good as possible.    Availability bit: [INPUT_CTLS_APL_MK_9F1D_2]()   TLV tag: [TAG_9F1D_TRM_RISK_MNGT_DATA]()   XML Tag: [XML_TAG_AD_MK_9F1D_TRM_RISK_MGMT_DATA](). 

### variable MerchantCategoryCode_9F15

```cpp
unsigned char[2] MerchantCategoryCode_9F15;
```

TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F15_2]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_MK_9F15_MERCHANT_CATEGORY_CODE](). 

### variable MerchantIdentifier_9F16

```cpp
char[15+1] MerchantIdentifier_9F16;
```

TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MK_9F16_3]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_MK_9F16_MERCHANT_ID](). 

### variable MerchantNameAndLocation_9F4E

```cpp
char[40+1] MerchantNameAndLocation_9F4E;
```

TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_MK_9F4E_3]()   TLV tag [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_MK_9F4E_MERCHANT_NAME_LOCATION](). 

### variable AcquirerIdentifier_9F01

```cpp
unsigned char[6] AcquirerIdentifier_9F01;
```

TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_MK_9F01_3]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_MK_9F01_ACQUIRER_ID](). 

### variable HoldTimeValue_DF8130

```cpp
unsigned char HoldTimeValue_DF8130;
```

TempUpdate allowed: NO    Description: Indicates the time that the field is to be turned off after the transaction is completed if requested to do so by the cardholder device.    Availability bit: [INPUT_CTLS_APL_MK_DF8130_3]()   TLV tag: [TAG_DF8130_HOLD_TIME_VALUE]()   XML Tag: [XML_TAG_AD_MK_DF8130_HOLD_TIME_VALUE](). 

### variable MessageHoldTime_DF812D

```cpp
unsigned char[3] MessageHoldTime_DF812D;
```

TempUpdate allowed: NO    Description: Indicates the default delay for the processing of the next MSG Signal. The Message Hold Time is an integer in units of 100ms.    Availability bit: [INPUT_CTLS_APL_MK_DF812D_3]()   TLV tag: [TAG_DF812D_MESSAGE_HOLD_TIME]()   XML Tag: [XML_TAG_AD_MK_DF812D_MESSAGE_HOLD_TIME](). 

### variable TornTransactionLifetime_DF811C

```cpp
unsigned char[2] TornTransactionLifetime_DF811C;
```

TempUpdate allowed: NO    Description: Lifetime for torn transaction, 0 means no torn txns are stored    Availability bit: [INPUT_CTLS_APL_MK_DF811C_3]()   TLV tag: [TAG_DF811C_TRN_TXN_LIFETIME](),    XML Tag: [XML_TAG_AD_MK_DF811C_TORN_TRX_LIFETIME](). 

### variable TornTransactionNumber_DF811D

```cpp
unsigned char TornTransactionNumber_DF811D;
```

TempUpdate allowed: NO    Description: Number of torn transaction to stored. Please be aware that this value should be consistent over the AIDs because otherwise the size of the torn txn store will be changed accordingly each time this AID is used for a transaction    Availability bit: [INPUT_CTLS_APL_MK_DF811D_3]()   TLV tag [TAG_DF811D_TRN_TXN_NUMBER](),    XML Tag: [XML_TAG_AD_MK_DF811D_TORN_TRX_NUMBER](). 

### variable PhoneMessageTable_DF8131

```cpp
EMV_CTLS_DATA_TYPE PhoneMessageTable_DF8131;
```

TempUpdate allowed: NO    Description: Phone message table, up to 10 entries    Availability bit: [INPUT_CTLS_APL_MK_DF8131_3]()   TLV tag [TAG_DF8131_PHONE_MSG_TABLE](),    XML Tag: [XML_TAG_AD_MK_DF8131_PHONE_MSG_TABLE](). 

### variable TagsToRead_DF8112

```cpp
EMV_CTLS_DATA_TYPE TagsToRead_DF8112;
```

TempUpdate allowed: NO    Description: PayPass Data Exchange : Tags To Read. List of tags indicating the data the Terminal has requested to be read    Availability bit: [INPUT_CTLS_APL_MK_DF8112_4]()   TLV tag [TAG_DF8112_TAGS_TO_READ](),    XML Tag: [XML_TAG_AD_MK_DF8112_TAGS_TO_READ](). 

### variable TagsToWriteBeforeGenAC_FF8102

```cpp
EMV_CTLS_DATA_TYPE TagsToWriteBeforeGenAC_FF8102;
```

TempUpdate allowed: NO    Description: PayPass Data Exchange : Tags To Write Before Gen AC    Availability bit: [INPUT_CTLS_APL_MK_FF8102_4]()   TLV tag [TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC](),    XML Tag: [XML_TAG_AD_MK_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC](). 

### variable TagsToWriteAfterGenAC_FF8103

```cpp
EMV_CTLS_DATA_TYPE TagsToWriteAfterGenAC_FF8103;
```

TempUpdate allowed: NO    Description: PayPass Data Exchange : Tags To Write After Gen AC    Availability bit: [INPUT_CTLS_APL_MK_FF8103_4]()   TLV tag [TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC](),    XML Tag: [XML_TAG_AD_MK_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC](). 

### variable ProceedToFirstWriteFlag_DF8110

```cpp
unsigned char ProceedToFirstWriteFlag_DF8110;
```

TempUpdate allowed: NO    Description: PayPass Data Exchange : Proceed To First Write Flag    Availability bit: [INPUT_CTLS_APL_MK_DF8110_4]()   TLV tag [TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG](),    XML Tag: [XML_TAG_AD_MK_DF8110_PROCEED_TO_FIRST_WRITE_FLAG](). 

### variable DSRequestedOperatorID_9F5C

```cpp
unsigned char[8] DSRequestedOperatorID_9F5C;
```

TempUpdate allowed: NO    Description: PayPass Data Exchange : Contains the Terminal determined operator identifier for data storage    Availability bit: [INPUT_CTLS_APL_MK_9F5C_4]()   TLV tag [TAG_9F5C_DS_REQUESTED_OPERATOR_ID](),    XML Tag: [XML_TAG_AD_MK_9F5C_DS_REQUESTED_OPERATOR_ID](). 

### variable DETimeoutValue_DF8127

```cpp
unsigned char[2] DETimeoutValue_DF8127;
```

TempUpdate allowed: NO    Description: PayPass Data Exchange : Defines the time in ms before the timer generates a TIMEOUT Signal    Availability bit: [INPUT_CTLS_APL_MK_DF8127_4]()   TLV tag [TAG_DF8127_DE_TIMEOUT_VALUE](),    XML Tag: [XML_TAG_AD_MK_DF8127_DE_TIMEOUT_VALUE](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for PayPass (MasterCard)]()   Availability bit: [INPUT_CTLS_APL_MK_DFAB31_4]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_MK_DFAB31_APP_FLOW_CAP](). 

### variable RR_MinGracePeriod_DF8132

```cpp
unsigned char[2] RR_MinGracePeriod_DF8132;
```

TempUpdate allowed: YES    Description: Minimum Relay Resistance Grace Period [1/10 ms]    TLV tag [TAG_DF8132_RR_MIN_GRACE_PERIOD]()   Availability bit: [INPUT_CTLS_APL_MK_DF8132_5](),    XML Tag: [XML_TAG_AD_MK_DF8132_RR_MIN_GRACE_PERIOD](). 

### variable RR_MaxGracePeriod_DF8133

```cpp
unsigned char[2] RR_MaxGracePeriod_DF8133;
```

TempUpdate allowed: YES    Description: Maximum Relay Resistance Grace Period [1/10 ms]    TLV tag [TAG_DF8133_RR_MAX_GRACE_PERIOD]()   Availability bit: [INPUT_CTLS_APL_MK_DF8133_5](),    XML Tag: [XML_TAG_AD_MK_DF8133_RR_MAX_GRACE_PREIOD](). 

### variable RR_ExpectedTransTime_CAPDU_DF8134

```cpp
unsigned char[2] RR_ExpectedTransTime_CAPDU_DF8134;
```

TempUpdate allowed: YES    Description: Terminal Expected Transmission Time For Relay Resistance C-APDU [1/10 ms]    TLV tag [TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU]()   Availability bit: [INPUT_CTLS_APL_MK_DF8134_5](),    XML Tag: [XML_TAG_AD_MK_DF8134_RR_EXP_TRANS_TIME_CAPDU](). 

### variable RR_ExpectedTransTime_RAPDU_DF8135

```cpp
unsigned char[2] RR_ExpectedTransTime_RAPDU_DF8135;
```

TempUpdate allowed: YES    Description: Terminal Expected Transmission Time For Relay Resistance R-APDU [1/10 ms]    TLV tag [TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU]()   Availability bit: [INPUT_CTLS_APL_MK_DF8135_5](),    XML Tag: [XML_TAG_AD_MK_DF8135_RR_EXP_TRANS_TIME_RAPDU](). 

### variable RR_AccuracyThreshold_DF8136

```cpp
unsigned char[2] RR_AccuracyThreshold_DF8136;
```

TempUpdate allowed: YES    Description: Relay Resistance Accuracy Threshold [1/10 ms]    TLV tag [TAG_DF8136_RR_ACCURACY_THRESHOLD]()   Availability bit: [INPUT_CTLS_APL_MK_DF8136_5](),    XML Tag: [XML_TAG_AD_MK_DF8136_RR_ACCURACY_THRESHOLD](). 

### variable RR_TransTimeMismatchThreshold_DF8137

```cpp
unsigned char RR_TransTimeMismatchThreshold_DF8137;
```

TempUpdate allowed: YES    Description: Relay Resistance Transmission Time Mismatch Threshold [%]    TLV tag [TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD]()   Availability bit: [INPUT_CTLS_APL_MK_DF8137_5](),    XML Tag: [XML_TAG_AD_MK_DF8137_RR_TT_MISMATCH_THRESHOLD](). 

### variable MerchantCustomData_9F7C

```cpp
unsigned char[20] MerchantCustomData_9F7C;
```

TempUpdate allowed: YES    Description: Proprietary merchant data that may be requested by the Card    TLV tag [TAG_9F7C_MERCHANT_CUSTOM_DATA]()   Availability bit: [INPUT_CTLS_APL_MK_9F7C_5](),    XML Tag: [XML_TAG_AD_MK_9F7C_MERCHANT_CUSTOM_DATA](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
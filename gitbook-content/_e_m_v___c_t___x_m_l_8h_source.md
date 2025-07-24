---
hidden: true
title: EMV_CT_XML.h
---

<a href="_e_m_v___c_t___x_m_l_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: ADK Cards Service - EMV Contact (CT)
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: Definitions for XML config data files
 6 ****************************************************************************/
 7 
 8 #ifndef EMV_CT_XML_H /* avoid double interface-includes */
 9  #define EMV_CT_XML_H
 10 
 11 
 12 // ========================================================================================================
 13 // === XML tags ===
 14 // ========================================================================================================
 19 
 20 #define XML_TAG_TERMDATA "TerminalData" 
 21 #define XML_TAG_TERMDATA_TERM_TYP "TermTyp" 
 22 #define XML_TAG_TERMDATA_COUNTRY_CODE_TERM "CountryCodeTerm" 
 23 #define XML_TAG_TERMDATA_TERM_CAP "TermCap" 
 24 #define XML_TAG_TERMDATA_TERM_ADD_CAP "TermAddCap" 
 25 #define XML_TAG_TERMDATA_TERM_IDENT "TermIdent" 
 26 #define XML_TAG_TERMDATA_CURRENCY_TRANS "CurrencyTrans" 
 27 #define XML_TAG_TERMDATA_EXP_TRANS "ExpTrans" 
 28 #define XML_TAG_TERMDATA_SUPP_LANG "SuppLang" 
 29 #define XML_TAG_TERMDATA_IFD_SERIAL_NUMBER "IFD_SerialNumber" 
 30 #define XML_TAG_TERMDATA_KERNEL_VERSION "KernelVersion" 
 31 #define XML_TAG_TERMDATA_FRAMEWORK_VERSION "FrameworkVersion" 
 32 #define XML_TAG_TERMDATA_L1DRIVER_VERSION "L1DriverVersion" 
 33 #define XML_TAG_TERMDATA_SB308_FLAG "EMVCoSB308" 
 34 
 35 #define XML_TAG_CAP_KEYS "CapKeys" 
 36 #define XML_TAG_CAP_KEYS_CAPKEY "CapKey" 
 37 #define XML_TAG_CAP_KEYS_INDEX "Index" 
 38 #define XML_TAG_CAP_KEYS_RID "RID" 
 39 #define XML_TAG_CAP_KEYS_KEY "Key" 
 40 #define XML_TAG_CAP_KEYS_KEYLEN "KeyLen" 
 41 #define XML_TAG_CAP_KEYS_EXPONENT "Exponent" 
 42 #define XML_TAG_CAP_KEYS_HASH "Hash" 
 43 #define XML_TAG_CAP_KEYS_REVOC_LIST "RevocationList" 
 44 
 45 #define XML_TAG_APPLIDATA "ApplicationData" 
 46 #define XML_TAG_APPLIDATA_APP "Application" 
 47 #define XML_TAG_APPLIDATA_AID "AID" 
 48 #define XML_TAG_APPLIDATA_VER_NUM "VerNum" 
 49 #define XML_TAG_APPLIDATA_APP_NAME "AppName" 
 50 #define XML_TAG_APPLIDATA_ASI "ASI" 
 51 #define XML_TAG_APPLIDATA_BR_KEY "BrKey" 
 52 #define XML_TAG_APPLIDATA_TERM_IDENT "TermIdent" 
 53 #define XML_TAG_APPLIDATA_FLOOR_LIMIT "FloorLimit" 
 54 #define XML_TAG_APPLIDATA_SECURE_LIMIT "SecurityLimit" 
 55 #define XML_TAG_APPLIDATA_NON_SECURE_CAPS "BelowLimitTerminalCapabilities" 
 56 #define XML_TAG_APPLIDATA_THRESHOLD "Threshold" 
 57 #define XML_TAG_APPLIDATA_TARGET_PERCENTAGE "TargetPercentage" 
 58 #define XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE "MaxTargetPercentage" 
 59 #define XML_TAG_APPLIDATA_TAC_DENIAL "TAC_Denial" 
 60 #define XML_TAG_APPLIDATA_TAC_ONLINE "TAC_Online" 
 61 #define XML_TAG_APPLIDATA_TAC_DEFAULT "TAC_Default" 
 62 #define XML_TAG_APPLIDATA_EMV_APPLICATION "EMV_Application" 
 63 #define XML_TAG_APPLIDATA_DEFAULT_TDOL "DefaultTDOL" 
 64 #define XML_TAG_APPLIDATA_DEFAULT_DDOL "DefaultDDOL" 
 65 #define XML_TAG_APPLIDATA_MERCH_IDENT "MerchIdent" 
 66 #define XML_TAG_APPLIDATA_CDA_PROCESSING "CDA_Processing" 
 67 #define XML_TAG_APPLIDATA_AC_BEFORE_AFTER "AC_BeforeAfter" 
 68 #define XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED "AIP_CVM_NotSupported" 
 69 #define XML_TAG_APPLIDATA_POS_ENTRY_MODE "POS_EntryMode" 
 70 #define XML_TAG_APPLIDATA_ADD_VER_NUM "AdditionalVersionNumbers" 
 71 #define XML_TAG_APPLIDATA_APP_FLOW_CAP "AppFlowCap" 
 72 #define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM "AdditionalTagsTRM" 
 73 #define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD "AdditionalTagsCRD" 
 74 #define XML_TAG_APPLIDATA_TAGLIST "MandatoryTaglistCRD" 
 75 #define XML_TAG_APPLIDATA_APP_TERM_CAP "AppTermCap" 
 76 #define XML_TAG_APPLIDATA_COUNTRY_CODE_TERM "CountryCodeTerm" 
 77 #define XML_TAG_APPLIDATA_APP_TERM_ADD_CAP "AppTermAddCap" 
 78 #define XML_TAG_APPLIDATA_APP_TERM_TYP "AppTerminalType" 
 79 #define XML_TAG_APPLIDATA_AID_PRIO "AID_Prio" 
 80 #define XML_TAG_APPLIDATA_FALLBACK_MIDS "FallbackMIDs" 
 81 #define XML_TAG_APPLIDATA_SPECIAL_TRX "SpecialTRX" 
 82 #define XML_TAG_APPLIDATA_FALLBACK_HANDLING "FallbackHandling" 
 83 #define XML_TAG_APPLIDATA_CUSTOMER_CVM "CustomerCVM" 
 84 #define XML_TAG_APPLIDATA_CHKSUM_PARAMS "ChksumParams" 
 85 #define XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO "ChksumASCII_EMVCO" 
 86 #define XML_TAG_APPLIDATA_MASTER_AID "MasterAID" 
 87 #define XML_TAG_APPLIDATA_TXN_TYPES_SALE "TxnTypesSale" 
 88 #define XML_TAG_APPLIDATA_TXN_TYPES_CASH "TxnTypesCash" 
 89 #define XML_TAG_APPLIDATA_TXN_TYPES_CASHBACK "TxnTypesCashback" 
 90 #define XML_TAG_APPLIDATA_TXN_TYPES_REFUND "TxnTypesRefund" 
 91 #define XML_TAG_APPLIDATA_DCR_LIST_IDS "DataContainerReadIds" 
 92 #define XML_TAG_APPLIDATA_DCR_LIST_RANGES "DataContainerReadRanges" 
 93 
 94 
 95 #define XML_TAG_VTM "VirtualTerminalMap" 
 96 #define XML_TAG_VTM_ENTRY "VTMEntry" 
 97 #define XML_TAG_VTM_TERMINAL "Terminal" 
 98 #define XML_TAG_VTM_TRANSTYPE "TransType_9C" 
 99 #define XML_TAG_VTM_CURRENCYCODE "CurrencyCode_5F2A" 
 100 
 101 
 103 #endif
```

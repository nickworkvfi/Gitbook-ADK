---
title: EMV_CT_TRANSRES_STRUCT
summary: Data structure for output data of EMV_CT_ContinueOffline() and EMV_CT_ContinueOnline()

---

# EMV_CT_TRANSRES_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Data structure for output data of [EMV_CT_ContinueOffline()]() and [EMV_CT_ContinueOnline()]()


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned long | **[StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo)** <br>Common status info (see [Status information]())    TLV tag [TAG_DF42_STATUS]()   Availability bit [TRX_STATUSINFO]().  |
| unsigned char | **[T_9F27_CryptInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo)** <br>Cryptogram information data (CID)    For details also see [Additional information in cryptogram information (9F27)]()   TLV tag [TAG_9F27_CRYPT_INFO_DATA]()   Availability bit [TRX_9F27_CRYPTINFO]().  |
| unsigned char[2] | **[T_9F36_ATC](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f36-atc)** <br>Application transaction counter (ATC), source: ICC    TLV tag [TAG_9F36_ATC]()   Availability bit [TRX_9F36_ATC]().  |
| unsigned char[8] | **[T_9F26_Cryptogramm](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f26-cryptogramm)** <br>Application cryptogram    TLV tag [TAG_9F26_APP_CRYPTOGRAM]()   Availability bit [TRX_9F26_CRYPTOGRAMM]().  |
| unsigned char[10] | **[T_5A_PAN](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5a-pan)** <br>Application Primary Account Number (PAN)    TLV tag [TAG_5A_APP_PAN]()   Availability bit [TRX_5A_PAN]().  |
| unsigned char | **[T_9F39_POSEntryMode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f39-posentrymode)** <br>POS entry mode, see ISO 8583    TLV tag [TAG_9F39_POS_ENTRY_MODE]()   Availability bit [TRX_9F39_POS_ENTRY_MODE]().  |
| unsigned char[3] | **[T_5F24_AppExpDate](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f24-appexpdate)** <br>Application Expiration Date    TLV tag [TAG_5F24_APP_EXP_DATE]()   Availability bit [TRX_5F24_APPEXPDATE]().  |
| unsigned char[4] | **[T_9F41_TransCount](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f41-transcount)**  |
| unsigned char[1] | **[T_5F34_PANSequenceNo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f34-pansequenceno)** <br>PAN sequence number    TLV tag [TAG_5F34_PAN_SEQUENCE_NB]()   Availability bit [TRX_5F34_PAN_SEQ_NUMBER]().  |
| [EMV_CT_TRACK2_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-track2-type) | **[T_57_DataTrack2](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-57-datatrack2)** <br>Track 2 Equivalent Data    TLV tag [TAG_57_TRACK2_EQUIVALENT]()   Availability bit [TRX_57_DATA_TRACK2]().  |
| [EMV_CT_ISSDATA_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-issdata-type) | **[T_9F10_DataIssuer](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f10-dataissuer)** <br>Issuer Application Data    TLV tag [TAG_9F10_ISS_APP_DATA]()   Availability bit [TRX_9F10_DATAISSUER]().  |
| unsigned char[4] | **[T_9F37_RandomNumber](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f37-randomnumber)** <br>Unpredictable Number    TLV tag [TAG_9F37_UNPREDICTABLE_NB]()   Availability bit [TRX_9F37_RANDOM_NUMBER]().  |
| unsigned char[5] | **[T_95_TVR](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-95-tvr)** <br>Terminal Verification Results    TLV tag [TAG_95_TVR]()   Availability bit [TRX_95_TVR]().  |
| unsigned char[3] | **[T_9A_Date](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9a-date)** <br>Transaction Date    TLV tag [TAG_9A_TRANS_DATE]()   Availability bit [TRX_9A_DATE]().  |
| unsigned char[3] | **[T_9F21_Time](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f21-time)** <br>Transaction Time    TLV tag [TAG_9F21_TRANS_TIME]()   Availability bit [TRX_9F21_TIME]().  |
| unsigned char | **[T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype)** <br>Transaction Type    see [Transaction type (Tag 9C)]()   EMVCo value range, used on ICC interface, for cryptogram calculation, and as it has to be sent to the host    May be different to input from [EMV_CT_SELECT_STRUCT::TransType](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-transtype) as values greater [EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT]() are mapped to [EMV_ADK_TRAN_TYPE_GOODS_SERVICE]()   TLV tag [TAG_9C_TRANS_TYPE]()   Availability bit [TRX_9C_TRANSTYPE]().  |
| unsigned char[2] | **[T_5F2A_CurrencyTrans](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2a-currencytrans)** <br>Transaction Currency Code (ISO 4217)    TLV tag [TAG_5F2A_TRANS_CURRENCY]()   Availability bit [TRX_5F2A_TRX_CURRENCY]().  |
| unsigned char[2] | **[T_82_AIP](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-82-aip)** <br>Application Interchange Profile    TLV tag [TAG_82_AIP]()   Availability bit [TRX_82_AIP]().  |
| unsigned char[2] | **[T_9F1A_TermCountryCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1a-termcountrycode)** <br>Terminal Country Code    TLV tag [TAG_9F1A_TRM_COUNTRY_CODE]()   Availability bit [TRX_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char[3] | **[T_9F34_CVM_Res](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f34-cvm-res)** <br>CVM Results    TLV tag [TAG_9F34_CVM_RESULTS]()   Availability bit [TRX_9F34_CVM_RES]().  |
| unsigned char[3] | **[T_9F33_TermCap](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f33-termcap)**  |
| unsigned char | **[T_9F35_TermTyp](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f35-termtyp)** <br>Terminal Type, see [Terminaltypes (Tag 9F35)]()   TLV tag [TAG_9F35_TRM_TYPE]()   Availability bit [TRX_9F35_TERMTYP]().  |
| unsigned char[8] | **[T_9F1E_IFDSerialNumber](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1e-ifdserialnumber)** <br>Interface Device (IFD) serial number    TLV tag [T_9F1E_IFDSerialNumber]()   Availability bit [TRX_9F1E_IFDSERIALNUMBER]().  |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) | **[T_84_DFName](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname)** <br>Dedicated File (DF) Name ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    TLV tag [TAG_84_DF_NAME]()   Availability bit [TRX_84_DFNAME]().  |
| unsigned char[2] | **[T_9F09_VerNum](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f09-vernum)** <br>Application Version Number    TLV tag [TAG_9F09_TRM_APP_VERSION_NB]()   Availability bit [TRX_9F09_VERNUM]().  |
| [EMV_CT_SRCRIPTRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-srcriptres-type) | **[scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults)** <br>Issuer Script Results ([EMV_CT_SRCRIPTRES_STRUCT](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md))    Availability bit [TRX_SCRIPTRESULTS]().  |
| unsigned char[2] | **[T_9B_TSI](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9b-tsi)** <br>Transaction Status Information    TLV tag [TAG_9B_TSI]()   Availability bit [TRX_9B_TSI]().  |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) | **[T_9F06_AID](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid)** <br>Application Identifier (AID) - terminal ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    TLV tag [TAG_9F06_AID]()   Availability bit [TRX_9F06_AID]().  |
| unsigned char[EMV_ADK_ADD_TAG_SIZE] | **[Add_TXN_Tags](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-add-txn-tags)**  |
| unsigned char[6] | **[T_9F02_TXNAmount](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f02-txnamount)** <br>Transaction Amount    TLV tag [TAG_9F02_NUM_AMOUNT_AUTH]()   Availability bit [TRX_9F02_AMOUNT]().  |
| unsigned char[6] | **[T_9F03_TXNAdditionalAmount](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f03-txnadditionalamount)** <br>Transaction Additional (Cashback) Amount    TLV tag [TAG_9F03_NUM_AMOUNT_OTHER]()   Availability bit [TRX_9F03_CB_AMOUNT]().  |
| unsigned char[1] | **[T_9F53_MC_CatCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f53-mc-catcode)** <br>Mastercard Transaction Category Code    TLV tag [TAG_9F53_TRANS_CATEGORY_CODE]()   Availability bit [TRX_9F53_MC_CATCODE]().  |
| unsigned char[16+1] | **[AppName](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname)**  |
| unsigned char[3] | **[T_5F25_AppEffDate](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f25-appeffdate)** <br>Application Effective Date    TLV tag [TAG_5F25_APP_EFF_DATE]()   Availability bit [TRX_5F25_APPEFFDATE]().  |
| unsigned char[2] | **[T_5F28_IssCountryCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f28-isscountrycode)** <br>Issuer Country Code    TLV tag [TAG_5F28_ISS_COUNTRY_CODE]()   Availability bit [TRX_5F28_ISSCOUNTRYCODE]().  |
| unsigned char[2] | **[T_9F45_DataAuthCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f45-dataauthcode)** <br>Data Authentication Code, optional: present if SDA card    TLV tag [TAG_9F45_DATA_AUTHENT_CODE]()   Availability bit [TRX_9F45_DATAAUTHCODE]().  |
| [EMV_CT_ICCRND_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-iccrnd-type) | **[T_9F4C_ICCDynNumber](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f4c-iccdynnumber)** <br>optional: present if DDA/CDA card    TLV tag [TAG_9F4C_ICC_DYNAMIC_NB]()   Availability bit [TRX_9F4C_ICCDYNNUMBER]() |
| unsigned char[5] | **[TACDenial](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdenial)** <br>Terminal Action Code - Denial    TLV tag [TAG_DF21_TAC_DENIAL]()   Availability bit [TRX_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-taconline)** <br>Terminal Action Code - Online    TLV tag [TAG_DF22_TAC_ONLINE]()   Availability bit [TRX_TAC_ONLINE]().  |
| unsigned char[5] | **[TACDefault](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdefault)** <br>Terminal Action Code - Default    TLV tag [TAG_DF23_TAC_DEFAULT]()   Availability bit [TRX_TAC_DEFAULT]().  |
| unsigned char[5] | **[T_9F0E_IACDenial](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0e-iacdenial)** <br>Issuer Action Code - Denial    TLV tag [TAG_9F0E_IAC_DENIAL]()   Availability bit [TRX_9F0E_IAC_DENIAL]().  |
| unsigned char[5] | **[T_9F0F_IACOnline](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0f-iaconline)** <br>Issuer Action Code - Online    TLV tag [TAG_9F0F_IAC_ONLINE]()   Availability bit [TRX_9F0F_IAC_ONLINE]().  |
| unsigned char[5] | **[T_9F0D_IACDefault](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0d-iacdefault)** <br>Issuer Action Code - Default    TLV tag [TAG_9F0D_IAC_DEFAULT]()   Availability bit [TRX_9F0D_IAC_DEFAULT]().  |
| unsigned char[5] | **[T_9F40_AddTermCap](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f40-addtermcap)**  |
| unsigned char[15] | **[T_DF62_ErrorData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata)** <br>Additional error data (German requirement), optional: filled if transaction is not sucessful, see [Additional error data]()   TLV tag [TAG_DF62_ERROR_DATA]()   Availability bit [TRX_DF62_ERRORDATA_TRANS]().  |
| unsigned char[15] | **[T_9F16_MerchIdent](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f16-merchident)** <br>Merchant Identifier    TLV tag [TAG_9F16_MERCHANT_ID]()   Availability bit [TRX_9F16_MERCHANT_ID]().  |
| unsigned char | **[T_DF63_DisplayText](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext)** <br>filled with index of display text id if anything should be displayed    TLV tag [TAG_DF63_DISPLAY_TEXT]()   Availability bit [TRX_DF63_DISPLAY_ID]() |
| [EMV_CT_CRDNAME_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-crdname-type) | **[T_5F20_Cardholder](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f20-cardholder)** <br>Cardholder Name    TLV tag [TAG_5F20_CARDHOLDER_NAME]()   Availability bit [TRX_5F20_CARDHOLDER]().  |
| unsigned char[8+1] | **[T_5F2D_Lang_Pref](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref)** <br>Language Preference (zero terminated)    TLV tag [TAG_5F2D_LANGUAGE]()   Availability bit [TRX_5F2D_LANG_PREFERENCE]().  |
| unsigned char[2] | **[T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no)** <br>ICC Application Version Number    TLV tag [TAG_9F08_ICC_APP_VERSION_NB]()   Availability bit [TRX_9F08_ICC_APPLI_VERS_NO]().  |
| unsigned char | **[T_5F36_Trx_Currency_Exp](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f36-trx-currency-exp)** <br>Transaction Currency Exponent    TLV tag [TAG_5F36_TRANS_CURRENCY_EXP]()   Availability bit [TRX_5F36_TRX_CURRENCY_EXPO]().  |
| unsigned char | **[T_DF59_Offl_PIN_errors](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df59-offl-pin-errors)** <br>Number of wrong PIN entries (only in case of offline PIN!!!)    TLV tag [TAG_DF59_OFFL_PIN_ERRORS]()   Availability bit [TRX_DF59_OFFLINE_PIN_ERRORS]().  |
| unsigned char[2] | **[T_5F30_ServiceCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f30-servicecode)** <br>Service code as defined in ISO/IEC 7813 for track 1 and track 2, format: n3    TLV tag [TAG_5F30_SERVICE_CODE]()   Availability bit [TRX_5F30_SERVICE_CODE]().  |
| unsigned char | **[T_DF17_FallbackMID](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df17-fallbackmid)**  |
| unsigned char[EMV_ADK_MAX_CVM_LIST_LEN] | **[T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list)**  |
| unsigned char[EMV_ADK_DEBUG_DATA_SIZE] | **[T_DF64_KernelDebugData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata)** <br>Debug Data of the Contact Optimum L2 kernel and if available of the CTLS Optimum kernels    TLV tag [TAG_DF64_KERNEL_DEBUG]()   Availability bit [TRX_DF64_KERNEL_DEBUG]().  |
| unsigned char[8] | **[T_DF61_Info_Received_Data](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data)** <br>Information which of these data was provided by the ICC, see [ContinueOffline/ContinueOnline: Information which data was provided by the ICC]().  |

## Public Attributes Documentation

### variable StatusInfo

```cpp
unsigned long StatusInfo;
```

Common status info (see [Status information]())    TLV tag [TAG_DF42_STATUS]()   Availability bit [TRX_STATUSINFO](). 

### variable T_9F27_CryptInfo

```cpp
unsigned char T_9F27_CryptInfo;
```

Cryptogram information data (CID)    For details also see [Additional information in cryptogram information (9F27)]()   TLV tag [TAG_9F27_CRYPT_INFO_DATA]()   Availability bit [TRX_9F27_CRYPTINFO](). 

### variable T_9F36_ATC

```cpp
unsigned char[2] T_9F36_ATC;
```

Application transaction counter (ATC), source: ICC    TLV tag [TAG_9F36_ATC]()   Availability bit [TRX_9F36_ATC](). 

### variable T_9F26_Cryptogramm

```cpp
unsigned char[8] T_9F26_Cryptogramm;
```

Application cryptogram    TLV tag [TAG_9F26_APP_CRYPTOGRAM]()   Availability bit [TRX_9F26_CRYPTOGRAMM](). 

### variable T_5A_PAN

```cpp
unsigned char[10] T_5A_PAN;
```

Application Primary Account Number (PAN)    TLV tag [TAG_5A_APP_PAN]()   Availability bit [TRX_5A_PAN](). 

### variable T_9F39_POSEntryMode

```cpp
unsigned char T_9F39_POSEntryMode;
```

POS entry mode, see ISO 8583    TLV tag [TAG_9F39_POS_ENTRY_MODE]()   Availability bit [TRX_9F39_POS_ENTRY_MODE](). 

### variable T_5F24_AppExpDate

```cpp
unsigned char[3] T_5F24_AppExpDate;
```

Application Expiration Date    TLV tag [TAG_5F24_APP_EXP_DATE]()   Availability bit [TRX_5F24_APPEXPDATE](). 

### variable T_9F41_TransCount

```cpp
unsigned char[4] T_9F41_TransCount;
```


Transaction Sequence Counter 

 EMV framework just gives back what was configured by `TransCount` in [EMV_CT_TRANSAC_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transac-type)

 TLV tag [TAG_9F41_TRANS_SEQUENCE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f41-trans-sequence-nb)

 Availability bit [TRX_9F41_TRANSCOUNT](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f41-transcount)


### variable T_5F34_PANSequenceNo

```cpp
unsigned char[1] T_5F34_PANSequenceNo;
```

PAN sequence number    TLV tag [TAG_5F34_PAN_SEQUENCE_NB]()   Availability bit [TRX_5F34_PAN_SEQ_NUMBER](). 

### variable T_57_DataTrack2

```cpp
EMV_CT_TRACK2_TYPE T_57_DataTrack2;
```

Track 2 Equivalent Data    TLV tag [TAG_57_TRACK2_EQUIVALENT]()   Availability bit [TRX_57_DATA_TRACK2](). 

### variable T_9F10_DataIssuer

```cpp
EMV_CT_ISSDATA_TYPE T_9F10_DataIssuer;
```

Issuer Application Data    TLV tag [TAG_9F10_ISS_APP_DATA]()   Availability bit [TRX_9F10_DATAISSUER](). 

### variable T_9F37_RandomNumber

```cpp
unsigned char[4] T_9F37_RandomNumber;
```

Unpredictable Number    TLV tag [TAG_9F37_UNPREDICTABLE_NB]()   Availability bit [TRX_9F37_RANDOM_NUMBER](). 

### variable T_95_TVR

```cpp
unsigned char[5] T_95_TVR;
```

Terminal Verification Results    TLV tag [TAG_95_TVR]()   Availability bit [TRX_95_TVR](). 

### variable T_9A_Date

```cpp
unsigned char[3] T_9A_Date;
```

Transaction Date    TLV tag [TAG_9A_TRANS_DATE]()   Availability bit [TRX_9A_DATE](). 

### variable T_9F21_Time

```cpp
unsigned char[3] T_9F21_Time;
```

Transaction Time    TLV tag [TAG_9F21_TRANS_TIME]()   Availability bit [TRX_9F21_TIME](). 

### variable T_9C_TransType

```cpp
unsigned char T_9C_TransType;
```

Transaction Type    see [Transaction type (Tag 9C)]()   EMVCo value range, used on ICC interface, for cryptogram calculation, and as it has to be sent to the host    May be different to input from [EMV_CT_SELECT_STRUCT::TransType](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-transtype) as values greater [EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT]() are mapped to [EMV_ADK_TRAN_TYPE_GOODS_SERVICE]()   TLV tag [TAG_9C_TRANS_TYPE]()   Availability bit [TRX_9C_TRANSTYPE](). 

### variable T_5F2A_CurrencyTrans

```cpp
unsigned char[2] T_5F2A_CurrencyTrans;
```

Transaction Currency Code (ISO 4217)    TLV tag [TAG_5F2A_TRANS_CURRENCY]()   Availability bit [TRX_5F2A_TRX_CURRENCY](). 

### variable T_82_AIP

```cpp
unsigned char[2] T_82_AIP;
```

Application Interchange Profile    TLV tag [TAG_82_AIP]()   Availability bit [TRX_82_AIP](). 

### variable T_9F1A_TermCountryCode

```cpp
unsigned char[2] T_9F1A_TermCountryCode;
```

Terminal Country Code    TLV tag [TAG_9F1A_TRM_COUNTRY_CODE]()   Availability bit [TRX_9F1A_TERM_COUNTRY_CODE](). 

### variable T_9F34_CVM_Res

```cpp
unsigned char[3] T_9F34_CVM_Res;
```

CVM Results    TLV tag [TAG_9F34_CVM_RESULTS]()   Availability bit [TRX_9F34_CVM_RES](). 

### variable T_9F33_TermCap

```cpp
unsigned char[3] T_9F33_TermCap;
```


Terminal Capabilities (as configured by `TermCap` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), but some bits may be deactivated due to configuration of [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap)) 

 TLV tag [TAG_9F33_TRM_CAPABILITIES](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f33-trm-capabilities)

 Availability bit [TRX_9F33_TERMCAP](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f33-termcap)


### variable T_9F35_TermTyp

```cpp
unsigned char T_9F35_TermTyp;
```

Terminal Type, see [Terminaltypes (Tag 9F35)]()   TLV tag [TAG_9F35_TRM_TYPE]()   Availability bit [TRX_9F35_TERMTYP](). 

### variable T_9F1E_IFDSerialNumber

```cpp
unsigned char[8] T_9F1E_IFDSerialNumber;
```

Interface Device (IFD) serial number    TLV tag [T_9F1E_IFDSerialNumber]()   Availability bit [TRX_9F1E_IFDSERIALNUMBER](). 

### variable T_84_DFName

```cpp
EMV_CT_APPLI_TYPE T_84_DFName;
```

Dedicated File (DF) Name ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    TLV tag [TAG_84_DF_NAME]()   Availability bit [TRX_84_DFNAME](). 

### variable T_9F09_VerNum

```cpp
unsigned char[2] T_9F09_VerNum;
```

Application Version Number    TLV tag [TAG_9F09_TRM_APP_VERSION_NB]()   Availability bit [TRX_9F09_VERNUM](). 

### variable scriptresults

```cpp
EMV_CT_SRCRIPTRES_TYPE scriptresults;
```

Issuer Script Results ([EMV_CT_SRCRIPTRES_STRUCT](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md))    Availability bit [TRX_SCRIPTRESULTS](). 

### variable T_9B_TSI

```cpp
unsigned char[2] T_9B_TSI;
```

Transaction Status Information    TLV tag [TAG_9B_TSI]()   Availability bit [TRX_9B_TSI](). 

### variable T_9F06_AID

```cpp
EMV_CT_APPLI_TYPE T_9F06_AID;
```

Application Identifier (AID) - terminal ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    TLV tag [TAG_9F06_AID]()   Availability bit [TRX_9F06_AID](). 

### variable Add_TXN_Tags

```cpp
unsigned char[EMV_ADK_ADD_TAG_SIZE] Add_TXN_Tags;
```


**Deprecated**: 

Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead. 

### variable T_9F02_TXNAmount

```cpp
unsigned char[6] T_9F02_TXNAmount;
```

Transaction Amount    TLV tag [TAG_9F02_NUM_AMOUNT_AUTH]()   Availability bit [TRX_9F02_AMOUNT](). 

### variable T_9F03_TXNAdditionalAmount

```cpp
unsigned char[6] T_9F03_TXNAdditionalAmount;
```

Transaction Additional (Cashback) Amount    TLV tag [TAG_9F03_NUM_AMOUNT_OTHER]()   Availability bit [TRX_9F03_CB_AMOUNT](). 

### variable T_9F53_MC_CatCode

```cpp
unsigned char[1] T_9F53_MC_CatCode;
```

Mastercard Transaction Category Code    TLV tag [TAG_9F53_TRANS_CATEGORY_CODE]()   Availability bit [TRX_9F53_MC_CATCODE](). 

### variable AppName

```cpp
unsigned char[16+1] AppName;
```


application name, zero terminated (tag 9F12, tag 50, or configured default [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname)) 

 TLV tag [TAG_9F12_APP_PREFERRED_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f12-app-preferred-name)

 Availability bit [TRX_APPNAME](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-appname)


### variable T_5F25_AppEffDate

```cpp
unsigned char[3] T_5F25_AppEffDate;
```

Application Effective Date    TLV tag [TAG_5F25_APP_EFF_DATE]()   Availability bit [TRX_5F25_APPEFFDATE](). 

### variable T_5F28_IssCountryCode

```cpp
unsigned char[2] T_5F28_IssCountryCode;
```

Issuer Country Code    TLV tag [TAG_5F28_ISS_COUNTRY_CODE]()   Availability bit [TRX_5F28_ISSCOUNTRYCODE](). 

### variable T_9F45_DataAuthCode

```cpp
unsigned char[2] T_9F45_DataAuthCode;
```

Data Authentication Code, optional: present if SDA card    TLV tag [TAG_9F45_DATA_AUTHENT_CODE]()   Availability bit [TRX_9F45_DATAAUTHCODE](). 

### variable T_9F4C_ICCDynNumber

```cpp
EMV_CT_ICCRND_TYPE T_9F4C_ICCDynNumber;
```

optional: present if DDA/CDA card    TLV tag [TAG_9F4C_ICC_DYNAMIC_NB]()   Availability bit [TRX_9F4C_ICCDYNNUMBER]()

### variable TACDenial

```cpp
unsigned char[5] TACDenial;
```

Terminal Action Code - Denial    TLV tag [TAG_DF21_TAC_DENIAL]()   Availability bit [TRX_TAC_DENIAL](). 

### variable TACOnline

```cpp
unsigned char[5] TACOnline;
```

Terminal Action Code - Online    TLV tag [TAG_DF22_TAC_ONLINE]()   Availability bit [TRX_TAC_ONLINE](). 

### variable TACDefault

```cpp
unsigned char[5] TACDefault;
```

Terminal Action Code - Default    TLV tag [TAG_DF23_TAC_DEFAULT]()   Availability bit [TRX_TAC_DEFAULT](). 

### variable T_9F0E_IACDenial

```cpp
unsigned char[5] T_9F0E_IACDenial;
```

Issuer Action Code - Denial    TLV tag [TAG_9F0E_IAC_DENIAL]()   Availability bit [TRX_9F0E_IAC_DENIAL](). 

### variable T_9F0F_IACOnline

```cpp
unsigned char[5] T_9F0F_IACOnline;
```

Issuer Action Code - Online    TLV tag [TAG_9F0F_IAC_ONLINE]()   Availability bit [TRX_9F0F_IAC_ONLINE](). 

### variable T_9F0D_IACDefault

```cpp
unsigned char[5] T_9F0D_IACDefault;
```

Issuer Action Code - Default    TLV tag [TAG_9F0D_IAC_DEFAULT]()   Availability bit [TRX_9F0D_IAC_DEFAULT](). 

### variable T_9F40_AddTermCap

```cpp
unsigned char[5] T_9F40_AddTermCap;
```


Additional Terminal Capabilities (as configured by `TermAddCap` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md), but some bits may be deactivated due to configuration of [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap)) 

 TLV tag [TAG_9F40_ADD_TRM_CAP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f40-add-trm-cap)

 Availability bit [TRX_9F40_TERMCAP](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f40-termcap)


### variable T_DF62_ErrorData

```cpp
unsigned char[15] T_DF62_ErrorData;
```

Additional error data (German requirement), optional: filled if transaction is not sucessful, see [Additional error data]()   TLV tag [TAG_DF62_ERROR_DATA]()   Availability bit [TRX_DF62_ERRORDATA_TRANS](). 

### variable T_9F16_MerchIdent

```cpp
unsigned char[15] T_9F16_MerchIdent;
```

Merchant Identifier    TLV tag [TAG_9F16_MERCHANT_ID]()   Availability bit [TRX_9F16_MERCHANT_ID](). 

### variable T_DF63_DisplayText

```cpp
unsigned char T_DF63_DisplayText;
```

filled with index of display text id if anything should be displayed    TLV tag [TAG_DF63_DISPLAY_TEXT]()   Availability bit [TRX_DF63_DISPLAY_ID]()

### variable T_5F20_Cardholder

```cpp
EMV_CT_CRDNAME_TYPE T_5F20_Cardholder;
```

Cardholder Name    TLV tag [TAG_5F20_CARDHOLDER_NAME]()   Availability bit [TRX_5F20_CARDHOLDER](). 

### variable T_5F2D_Lang_Pref

```cpp
unsigned char[8+1] T_5F2D_Lang_Pref;
```

Language Preference (zero terminated)    TLV tag [TAG_5F2D_LANGUAGE]()   Availability bit [TRX_5F2D_LANG_PREFERENCE](). 

### variable T_9F08_ICC_Appli_Vers_No

```cpp
unsigned char[2] T_9F08_ICC_Appli_Vers_No;
```

ICC Application Version Number    TLV tag [TAG_9F08_ICC_APP_VERSION_NB]()   Availability bit [TRX_9F08_ICC_APPLI_VERS_NO](). 

### variable T_5F36_Trx_Currency_Exp

```cpp
unsigned char T_5F36_Trx_Currency_Exp;
```

Transaction Currency Exponent    TLV tag [TAG_5F36_TRANS_CURRENCY_EXP]()   Availability bit [TRX_5F36_TRX_CURRENCY_EXPO](). 

### variable T_DF59_Offl_PIN_errors

```cpp
unsigned char T_DF59_Offl_PIN_errors;
```

Number of wrong PIN entries (only in case of offline PIN!!!)    TLV tag [TAG_DF59_OFFL_PIN_ERRORS]()   Availability bit [TRX_DF59_OFFLINE_PIN_ERRORS](). 

### variable T_5F30_ServiceCode

```cpp
unsigned char[2] T_5F30_ServiceCode;
```

Service code as defined in ISO/IEC 7813 for track 1 and track 2, format: n3    TLV tag [TAG_5F30_SERVICE_CODE]()   Availability bit [TRX_5F30_SERVICE_CODE](). 

### variable T_DF17_FallbackMID

```cpp
unsigned char T_DF17_FallbackMID;
```


If return code [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback): Fallback MID to be used. Will be filled in case application label was shown to cardholder. First assigned MID of the used AID is filled in. 

 TLV tag [TAG_DF17_FALLBACK_MIDS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df17-fallback-mids)

 Availability bit [EMV_CT_TRX_DF17_FALLBACK_MID](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-emv-ct-trx-df17-fallback-mid)


### variable T_8E_CVM_List

```cpp
unsigned char[EMV_ADK_MAX_CVM_LIST_LEN] T_8E_CVM_List;
```


CVM list retrieved from ICC 

 Length in bytes: [EMV_ADK_MAX_CVM_LIST_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm-list-len). Max. included CVMs: [EMV_ADK_MAX_CVM](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm). 

 TLV tag [TAG_8E_CVM_LIST](group___e_m_v_c_o___t_a_g_s.md#define-tag-8e-cvm-list). 

 Availability bit [EMV_CT_TRX_8E_CVM_List](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-emv-ct-trx-8e-cvm-list)


### variable T_DF64_KernelDebugData

```cpp
unsigned char[EMV_ADK_DEBUG_DATA_SIZE] T_DF64_KernelDebugData;
```

Debug Data of the Contact Optimum L2 kernel and if available of the CTLS Optimum kernels    TLV tag [TAG_DF64_KERNEL_DEBUG]()   Availability bit [TRX_DF64_KERNEL_DEBUG](). 

### variable T_DF61_Info_Received_Data

```cpp
unsigned char[8] T_DF61_Info_Received_Data;
```

Information which of these data was provided by the ICC, see [ContinueOffline/ContinueOnline: Information which data was provided by the ICC](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
---
title: EMV_CTLS_TRANSRES_STRUCT
summary: Data structure for output data of EMV_CTLS_ContinueOffline() and EMV_CTLS_ContinueOnline()

---

# EMV_CTLS_TRANSRES_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)**



Data structure for output data of [EMV_CTLS_ContinueOffline()]() and [EMV_CTLS_ContinueOnline()]() [More...](#detailed-description)


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned long | **[StatusInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo)** <br>Common status info (see [Status information]())    TLV tag [TAG_DF42_STATUS](), validity bit [TRX_CTLS_STATUSINFO]().  |
| unsigned char | **[T_9F27_CryptInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo)** <br>Cryptogram information data (CID)    TLV tag [TAG_9F27_CRYPT_INFO_DATA](), validity bit [TRX_CTLS_9F27_CRYPTINFO]().  |
| unsigned char[2] | **[T_9F36_ATC](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f36-atc)** <br>Application transaction counter (ATC), source: ICC    TLV tag [TAG_9F36_ATC](), validity bit [TRX_CTLS_9F36_ATC]().  |
| unsigned char[8] | **[T_9F26_Cryptogramm](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f26-cryptogramm)** <br>Application cryptogram    TLV tag [TAG_9F26_APP_CRYPTOGRAM](), validity bit [TRX_CTLS_9F26_CRYPTOGRAMM]().  |
| unsigned char[10] | **[T_5A_PAN](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5a-pan)** <br>Application Primary Account Number (PAN)    TLV tag [TAG_5A_APP_PAN](), validity bit [TRX_CTLS_5A_PAN]().  |
| unsigned char | **[T_9F39_POSEntryMode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f39-posentrymode)** <br>POS entry mode, see ISO 8583    TLV tag [TAG_9F39_POS_ENTRY_MODE](), validity bit [TRX_CTLS_9F39_POS_ENTRY_MODE]().  |
| unsigned char[3] | **[T_5F24_AppExpDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f24-appexpdate)** <br>Application Expiration Date    TLV tag [TAG_5F24_APP_EXP_DATE](), validity bit [TRX_CTLS_5F24_APPEXPDATE]().  |
| unsigned char[4] | **[T_9F41_TransCount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f41-transcount)**  |
| unsigned char[1] | **[T_5F34_PANSequenceNo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f34-pansequenceno)** <br>PAN sequence number    TLV tag [TAG_5F34_PAN_SEQUENCE_NB](), validity bit [TRX_CTLS_5F34_PAN_SEQ_NUMBER]().  |
| [EMV_CTLS_TRACK2_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-track2-type) | **[T_57_DataTrack2](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-57-datatrack2)** <br>Track 2 Equivalent Data (this is chip equivalent data not CTLS magstripe data!)    TLV tag [TAG_57_TRACK2_EQUIVALENT](), validity bit [TRX_CTLS_57_DATA_TRACK2]().  |
| [EMV_CTLS_ISSDATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-issdata-type) | **[T_9F10_DataIssuer](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f10-dataissuer)** <br>Issuer Application Data    TLV tag [TAG_9F10_ISS_APP_DATA](), validity bit [TRX_CTLS_9F10_DATAISSUER]().  |
| unsigned char[4] | **[T_9F37_RandomNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f37-randomnumber)** <br>Unpredictable Number    TLV tag [TAG_9F37_UNPREDICTABLE_NB](), validity bit [TRX_CTLS_9F37_RANDOM_NUMBER]().  |
| unsigned char[5] | **[T_95_TVR](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-95-tvr)** <br>Terminal Verification Results    TLV tag [TAG_95_TVR](), validity bit [TRX_CTLS_95_TVR]().  |
| unsigned char[3] | **[T_9A_Date](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9a-date)** <br>Transaction Date    TLV tag [TAG_9A_TRANS_DATE](), validity bit [TRX_CTLS_9A_DATE]().  |
| unsigned char[3] | **[T_9F21_Time](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f21-time)** <br>Transaction Time    TLV tag [TAG_9F21_TRANS_TIME](), validity bit [TRX_CTLS_9F21_TIME]().  |
| unsigned char | **[T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype)** <br>Transaction Type    see [Transaction type (Tag 9C)]()   EMVCo value range, used on ICC interface, for cryptogram calculation, and as it has to be sent to the host    May be different to input from [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype) as values greater [EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT]() are mapped to [EMV_ADK_TRAN_TYPE_GOODS_SERVICE]()   TLV tag [TAG_9C_TRANS_TYPE]()   Availability bit [TRX_CTLS_9C_TRANSTYPE]().  |
| unsigned char[2] | **[T_5F2A_CurrencyTrans](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2a-currencytrans)** <br>Transaction Currency Code (ISO 4217)    TLV tag [TAG_5F2A_TRANS_CURRENCY](), validity bit [TRX_CTLS_5F2A_TRANS_CURRENCY]().  |
| unsigned char[2] | **[T_82_AIP](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-82-aip)** <br>Application Interchange Profile    TLV tag [TAG_82_AIP](), validity bit [TRX_CTLS_82_AIP]().  |
| unsigned char[2] | **[T_9F1A_TermCountryCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1a-termcountrycode)** <br>Terminal Country Code    TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](), validity bit [TRX_CTLS_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char[3] | **[T_9F34_CVM_Res](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f34-cvm-res)** <br>CVM Results    TLV tag [TAG_9F34_CVM_RESULTS](), validity bit [TRX_CTLS_9F34_CVM_RES]().  |
| unsigned char[3] | **[T_9F33_TermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f33-termcap)** <br>Terminal Capabilities (if configured by [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md))    TLV tag [TAG_9F33_TRM_CAPABILITIES](), validity bit [TRX_CTLS_9F33_TERMCAP]().  |
| unsigned char | **[T_9F35_TermTyp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f35-termtyp)** <br>Terminal Type, see [Terminaltypes (Tag 9F35)]()   TLV tag [TAG_9F35_TRM_TYPE](), validity bit [TRX_CTLS_9F35_TERMTYP]().  |
| unsigned char[8] | **[T_9F1E_IFDSerialNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1e-ifdserialnumber)** <br>Interface Device (IFD) serial number    TLV tag [TAG_9F1E_IFD_SERIAL_NB](), validity bit [TRX_CTLS_9F1E_IFDSERIALNUMBER]().  |
| [EMV_CTLS_APPLI_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-type) | **[T_84_DFName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname)** <br>Dedicated File (DF) Name    TLV tag [TAG_84_DF_NAME](), validity bit [TRX_CTLS_84_DFNAME]().  |
| unsigned char[2] | **[T_9F09_VerNum](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f09-vernum)** <br>Application Version Number    TLV tag [TAG_9F09_TRM_APP_VERSION_NB](), validity bit [TRX_CTLS_9F09_VERNUM]().  |
| unsigned char[2] | **[T_9B_TSI](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9b-tsi)** <br>Transaction Status Information    TLV tag [TAG_9B_TSI](), validity bit [TRX_CTLS_9B_TSI]().  |
| [EMV_CTLS_APPLI_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-type) | **[T_9F06_AID](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid)** <br>Application Identifier (AID) - terminal    TLV tag [TAG_9F06_AID](), validity bit [TRX_CTLS_9F06_AID]().  |
| unsigned char[EMV_ADK_ADD_TAG_SIZE] | **[Add_TXN_Tags](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-add-txn-tags)**  |
| unsigned char[6] | **[T_9F02_TXNAmount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f02-txnamount)** <br>Transaction Amount    TLV tag [TAG_9F02_NUM_AMOUNT_AUTH](), validity bit [TRX_CTLS_9F02_AMOUNT]().  |
| unsigned char[6] | **[T_9F03_TXNAdditionalAmount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f03-txnadditionalamount)** <br>Transaction Additional (Cashback) Amount    TLV tag [TAG_9F03_NUM_AMOUNT_OTHER](), validity bit [TRX_CTLS_9F03_CB_AMOUNT]().  |
| unsigned char[1] | **[T_9F53_MC_CatCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f53-mc-catcode)** <br>Mastercard Transaction Category Code    TLV tag [TAG_9F53_TRANS_CATEGORY_CODE](), validity bit [TRX_CTLS_9F53_MC_CATCODE]().  |
| unsigned char[16+1] | **[AppName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname)**  |
| unsigned char[3] | **[T_5F25_AppEffDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f25-appeffdate)** <br>Application Effective Date    TLV tag [TAG_5F25_APP_EFF_DATE](), validity bit [TRX_CTLS_5F25_APPEFFDATE]().  |
| unsigned char[2] | **[T_5F28_IssCountryCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f28-isscountrycode)** <br>Issuer Country Code    TLV tag [TAG_5F28_ISS_COUNTRY_CODE](), validity bit [TRX_CTLS_5F28_ISSCOUNTRYCODE]().  |
| unsigned char[2] | **[T_9F45_DataAuthCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f45-dataauthcode)** <br>Data Authentication Code, optional: present if SDA card    TLV tag [TAG_9F45_DATA_AUTHENT_CODE](), validity bit [TRX_CTLS_9F45_DATAAUTHCODE]().  |
| [EMV_CTLS_ICCRND_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-iccrnd-type) | **[T_9F4C_ICCDynNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f4c-iccdynnumber)** <br>optional: present if DDA/CDA card    TLV tag [TAG_9F4C_ICC_DYNAMIC_NB](), validity bit [TRX_CTLS_9F4C_ICCDYNNUMBER]() |
| unsigned char[5] | **[TACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdenial)** <br>Terminal Action Code - Denial    TLV tag [TAG_DF21_TAC_DENIAL](), validity bit [TRX_CTLS_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-taconline)** <br>Terminal Action Code - Online    TLV tag [TAG_DF22_TAC_ONLINE](), validity bit [TRX_CTLS_TAC_ONLINE]().  |
| unsigned char[5] | **[TACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdefault)** <br>Terminal Action Code - Default    TLV tag [TAG_DF23_TAC_DEFAULT](), validity bit [TRX_CTLS_TAC_DEFAULT]().  |
| unsigned char[5] | **[T_9F0E_IACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0e-iacdenial)** <br>Issuer Action Code - Denial    TLV tag [TAG_9F0E_IAC_DENIAL](), validity bit [TRX_CTLS_9F0E_IAC_DENIAL]().  |
| unsigned char[5] | **[T_9F0F_IACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0f-iaconline)** <br>Issuer Action Code - Online    TLV tag [TAG_9F0F_IAC_ONLINE](), validity bit [TRX_CTLS_9F0F_IAC_ONLINE]().  |
| unsigned char[5] | **[T_9F0D_IACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0d-iacdefault)** <br>Issuer Action Code - Default    TLV tag [TAG_9F0D_IAC_DEFAULT](), validity bit [TRX_CTLS_9F0D_IAC_DEFAULT]().  |
| unsigned char[5] | **[T_9F40_AddTermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f40-addtermcap)** <br>Additional Terminal Capabilities (if configured by EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::TermAddCap)    TLV tag [TAG_9F40_ADD_TRM_CAP](), validity bit [TRX_CTLS_9F40_TERMCAP]().  |
| unsigned char[15] | **[T_9F16_MerchIdent](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f16-merchident)** <br>Merchant Identifier    TLV tag [TAG_9F16_MERCHANT_ID](), validity bit [TRX_CTLS_9F16_MERCHANT_ID]().  |
| [EMV_CTLS_CRDNAME_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-crdname-type) | **[T_5F20_Cardholder](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f20-cardholder)** <br>Cardholder Name    TLV tag [TAG_5F20_CARDHOLDER_NAME](), validity bit [TRX_CTLS_5F20_CARDHOLDER]().  |
| unsigned char[8+1] | **[T_5F2D_Lang_Pref](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref)** <br>Language Preference (zero terminated)    TLV tag [TAG_5F2D_LANGUAGE](), validity bit [TRX_CTLS_5F2D_LANG_PREFERENCE]().  |
| unsigned char[2] | **[T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no)** <br>ICC Application Version Number    TLV tag [TAG_9F08_ICC_APP_VERSION_NB](), validity bit [TRX_CTLS_9F08_ICC_APPLI_VERS_NO]().  |
| unsigned char | **[T_5F36_Trx_Currency_Exp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f36-trx-currency-exp)** <br>Transaction Currency Exponent    TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](), validity bit [TRX_CTLS_5F36_TRX_CURRENCY_EXPO]().  |
| unsigned char[2] | **[T_5F30_ServiceCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f30-servicecode)** <br>Service code as defined in ISO/IEC 7813 for track 1 and track 2, format: n3    TLV tag [TAG_5F30_SERVICE_CODE](), validity bit [TRX_CTLS_5F30_SERVICE_CODE]().  |
| unsigned long | **[CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode)** <br>used Contactless mode (kernel) for this transaction    Possible values: see [Supported Contactless modes]() |
| unsigned char[4] | **[T_9F66_CL_TTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f66-cl-ttq)** <br>Visa TTQ (Contactless only)    TLV tag [TAG_9F66_TTQ](), validity bit [TRX_CTLS_9F66_TTQ]().  |
| [EMV_CTLS_TRACK2_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-track2-type) | **[T_DF5D_CL_MAGSTRIPE_T2](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df5d-cl-magstripe-t2)**  |
| unsigned char[2] | **[T_9F6C_CL_VISA_CTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f6c-cl-visa-ctq)** <br>Visa CTQ (Contactless only)    TLV tag [TAG_9F6C_VISA_CTQ](), validity bit [TRX_CTLS_9F6C_VISA_CTQ]().  |
| unsigned char[EMV_ADK_BCD_AMOUNT_LEN] | **[T_9F5D_CL_VISA_AOSA](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f5d-cl-visa-aosa)** <br>Offline Spending Amount/Offline Balance, for example Visa, CUP: '9F5D', Mastercard: '9F50', JCB: '9F5F'    TLV tag [TAG_9F5D_VISA_AOSA](), validity bit [TRX_CTLS_9F5D_VISA_AOSA]().  |
| unsigned char[EMV_ADK_BCD_AMOUNT_LEN] | **[T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance)** <br>PayPass: Balance before GenAC    TLV tag [TAG_DF32_MC_BALANCE_8104](), validity bit [TRX_CTLS_DF8104_MC_BALANCE]().  |
| unsigned char[EMV_ADK_BCD_AMOUNT_LEN] | **[T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance)** <br>PayPass: Balance after GenAC    TLV tag [TAG_DF38_MC_BALANCE_8105](), validity bit [TRX_CTLS_DF8105_MC_BALANCE]().  |
| unsigned char[32] | **[T_DF64_KernelDebugData](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata)** <br>Status data of the used CTLS Vertex kernel. See [Kernel Debug Data].    TLV tag [TAG_DF64_KERNEL_DEBUG](), validity bit [TRX_CTLS_DF64_KERNEL_DEBUG]().  |
| unsigned char | **[ctlsCardType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-ctlscardtype)**  |
| unsigned char[EMV_ADK_CL_SCRIPTRES_LEN] | **[ScriptResults](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults)** <br>Issuer script results    TLV tag [TAG_DF07_UNCRIT_SCR](), validity bit [TRX_CTLS_SCRIPTRESULTS]().  |
| unsigned short | **[ScriptResultsLen](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresultslen)** <br>Issuer script results    TLV tag [TAG_DF07_UNCRIT_SCR](), validity bit [TRX_CTLS_SCRIPTRESULTS]().  |
| unsigned char[8] | **[T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data)** <br>Information which of these data was provided by the ICC, see [Information which data was provided by the ICC]().  |

## Detailed Description

```cpp
struct EMV_CTLS_TRANSRES_STRUCT;
```

Data structure for output data of [EMV_CTLS_ContinueOffline()]() and [EMV_CTLS_ContinueOnline()]()

Valid data is indicated by [Information which data was provided by the ICC](group___d_e_f___d_f61.md)

## Public Attributes Documentation

### variable StatusInfo

```cpp
unsigned long StatusInfo;
```

Common status info (see [Status information]())    TLV tag [TAG_DF42_STATUS](), validity bit [TRX_CTLS_STATUSINFO](). 

### variable T_9F27_CryptInfo

```cpp
unsigned char T_9F27_CryptInfo;
```

Cryptogram information data (CID)    TLV tag [TAG_9F27_CRYPT_INFO_DATA](), validity bit [TRX_CTLS_9F27_CRYPTINFO](). 

### variable T_9F36_ATC

```cpp
unsigned char[2] T_9F36_ATC;
```

Application transaction counter (ATC), source: ICC    TLV tag [TAG_9F36_ATC](), validity bit [TRX_CTLS_9F36_ATC](). 

### variable T_9F26_Cryptogramm

```cpp
unsigned char[8] T_9F26_Cryptogramm;
```

Application cryptogram    TLV tag [TAG_9F26_APP_CRYPTOGRAM](), validity bit [TRX_CTLS_9F26_CRYPTOGRAMM](). 

### variable T_5A_PAN

```cpp
unsigned char[10] T_5A_PAN;
```

Application Primary Account Number (PAN)    TLV tag [TAG_5A_APP_PAN](), validity bit [TRX_CTLS_5A_PAN](). 

### variable T_9F39_POSEntryMode

```cpp
unsigned char T_9F39_POSEntryMode;
```

POS entry mode, see ISO 8583    TLV tag [TAG_9F39_POS_ENTRY_MODE](), validity bit [TRX_CTLS_9F39_POS_ENTRY_MODE](). 

### variable T_5F24_AppExpDate

```cpp
unsigned char[3] T_5F24_AppExpDate;
```

Application Expiration Date    TLV tag [TAG_5F24_APP_EXP_DATE](), validity bit [TRX_CTLS_5F24_APPEXPDATE](). 

### variable T_9F41_TransCount

```cpp
unsigned char[4] T_9F41_TransCount;
```


Transaction Sequence Counter 

 Transaction Flow just gives back what was configured by [EMV_CTLS_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount)

 TLV tag [TAG_9F41_TRANS_SEQUENCE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f41-trans-sequence-nb), validity bit [TRX_CTLS_9F41_TRANSCOUNT](group___d_e_f___d_f61.md#define-trx-ctls-9f41-transcount)


### variable T_5F34_PANSequenceNo

```cpp
unsigned char[1] T_5F34_PANSequenceNo;
```

PAN sequence number    TLV tag [TAG_5F34_PAN_SEQUENCE_NB](), validity bit [TRX_CTLS_5F34_PAN_SEQ_NUMBER](). 

### variable T_57_DataTrack2

```cpp
EMV_CTLS_TRACK2_TYPE T_57_DataTrack2;
```

Track 2 Equivalent Data (this is chip equivalent data not CTLS magstripe data!)    TLV tag [TAG_57_TRACK2_EQUIVALENT](), validity bit [TRX_CTLS_57_DATA_TRACK2](). 

### variable T_9F10_DataIssuer

```cpp
EMV_CTLS_ISSDATA_TYPE T_9F10_DataIssuer;
```

Issuer Application Data    TLV tag [TAG_9F10_ISS_APP_DATA](), validity bit [TRX_CTLS_9F10_DATAISSUER](). 

### variable T_9F37_RandomNumber

```cpp
unsigned char[4] T_9F37_RandomNumber;
```

Unpredictable Number    TLV tag [TAG_9F37_UNPREDICTABLE_NB](), validity bit [TRX_CTLS_9F37_RANDOM_NUMBER](). 

### variable T_95_TVR

```cpp
unsigned char[5] T_95_TVR;
```

Terminal Verification Results    TLV tag [TAG_95_TVR](), validity bit [TRX_CTLS_95_TVR](). 

### variable T_9A_Date

```cpp
unsigned char[3] T_9A_Date;
```

Transaction Date    TLV tag [TAG_9A_TRANS_DATE](), validity bit [TRX_CTLS_9A_DATE](). 

### variable T_9F21_Time

```cpp
unsigned char[3] T_9F21_Time;
```

Transaction Time    TLV tag [TAG_9F21_TRANS_TIME](), validity bit [TRX_CTLS_9F21_TIME](). 

### variable T_9C_TransType

```cpp
unsigned char T_9C_TransType;
```

Transaction Type    see [Transaction type (Tag 9C)]()   EMVCo value range, used on ICC interface, for cryptogram calculation, and as it has to be sent to the host    May be different to input from [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype) as values greater [EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT]() are mapped to [EMV_ADK_TRAN_TYPE_GOODS_SERVICE]()   TLV tag [TAG_9C_TRANS_TYPE]()   Availability bit [TRX_CTLS_9C_TRANSTYPE](). 

### variable T_5F2A_CurrencyTrans

```cpp
unsigned char[2] T_5F2A_CurrencyTrans;
```

Transaction Currency Code (ISO 4217)    TLV tag [TAG_5F2A_TRANS_CURRENCY](), validity bit [TRX_CTLS_5F2A_TRANS_CURRENCY](). 

### variable T_82_AIP

```cpp
unsigned char[2] T_82_AIP;
```

Application Interchange Profile    TLV tag [TAG_82_AIP](), validity bit [TRX_CTLS_82_AIP](). 

### variable T_9F1A_TermCountryCode

```cpp
unsigned char[2] T_9F1A_TermCountryCode;
```

Terminal Country Code    TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](), validity bit [TRX_CTLS_9F1A_TERM_COUNTRY_CODE](). 

### variable T_9F34_CVM_Res

```cpp
unsigned char[3] T_9F34_CVM_Res;
```

CVM Results    TLV tag [TAG_9F34_CVM_RESULTS](), validity bit [TRX_CTLS_9F34_CVM_RES](). 

### variable T_9F33_TermCap

```cpp
unsigned char[3] T_9F33_TermCap;
```

Terminal Capabilities (if configured by [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md))    TLV tag [TAG_9F33_TRM_CAPABILITIES](), validity bit [TRX_CTLS_9F33_TERMCAP](). 

### variable T_9F35_TermTyp

```cpp
unsigned char T_9F35_TermTyp;
```

Terminal Type, see [Terminaltypes (Tag 9F35)]()   TLV tag [TAG_9F35_TRM_TYPE](), validity bit [TRX_CTLS_9F35_TERMTYP](). 

### variable T_9F1E_IFDSerialNumber

```cpp
unsigned char[8] T_9F1E_IFDSerialNumber;
```

Interface Device (IFD) serial number    TLV tag [TAG_9F1E_IFD_SERIAL_NB](), validity bit [TRX_CTLS_9F1E_IFDSERIALNUMBER](). 

### variable T_84_DFName

```cpp
EMV_CTLS_APPLI_TYPE T_84_DFName;
```

Dedicated File (DF) Name    TLV tag [TAG_84_DF_NAME](), validity bit [TRX_CTLS_84_DFNAME](). 

### variable T_9F09_VerNum

```cpp
unsigned char[2] T_9F09_VerNum;
```

Application Version Number    TLV tag [TAG_9F09_TRM_APP_VERSION_NB](), validity bit [TRX_CTLS_9F09_VERNUM](). 

### variable T_9B_TSI

```cpp
unsigned char[2] T_9B_TSI;
```

Transaction Status Information    TLV tag [TAG_9B_TSI](), validity bit [TRX_CTLS_9B_TSI](). 

### variable T_9F06_AID

```cpp
EMV_CTLS_APPLI_TYPE T_9F06_AID;
```

Application Identifier (AID) - terminal    TLV tag [TAG_9F06_AID](), validity bit [TRX_CTLS_9F06_AID](). 

### variable Add_TXN_Tags

```cpp
unsigned char[EMV_ADK_ADD_TAG_SIZE] Add_TXN_Tags;
```


**Deprecated**: 

Use [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) instead. 

### variable T_9F02_TXNAmount

```cpp
unsigned char[6] T_9F02_TXNAmount;
```

Transaction Amount    TLV tag [TAG_9F02_NUM_AMOUNT_AUTH](), validity bit [TRX_CTLS_9F02_AMOUNT](). 

### variable T_9F03_TXNAdditionalAmount

```cpp
unsigned char[6] T_9F03_TXNAdditionalAmount;
```

Transaction Additional (Cashback) Amount    TLV tag [TAG_9F03_NUM_AMOUNT_OTHER](), validity bit [TRX_CTLS_9F03_CB_AMOUNT](). 

### variable T_9F53_MC_CatCode

```cpp
unsigned char[1] T_9F53_MC_CatCode;
```

Mastercard Transaction Category Code    TLV tag [TAG_9F53_TRANS_CATEGORY_CODE](), validity bit [TRX_CTLS_9F53_MC_CATCODE](). 

### variable AppName

```cpp
unsigned char[16+1] AppName;
```


application name, zero terminated (tag 9F12, tag 50, or configured default [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::DefaultApplicationName_DFAB22](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-defaultapplicationname-dfab22)) 

 TLV tag [TAG_9F12_APP_PREFERRED_NAME](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f12-app-preferred-name), validity bit [TRX_CTLS_APPNAME](group___d_e_f___d_f61.md#define-trx-ctls-appname)


### variable T_5F25_AppEffDate

```cpp
unsigned char[3] T_5F25_AppEffDate;
```

Application Effective Date    TLV tag [TAG_5F25_APP_EFF_DATE](), validity bit [TRX_CTLS_5F25_APPEFFDATE](). 

### variable T_5F28_IssCountryCode

```cpp
unsigned char[2] T_5F28_IssCountryCode;
```

Issuer Country Code    TLV tag [TAG_5F28_ISS_COUNTRY_CODE](), validity bit [TRX_CTLS_5F28_ISSCOUNTRYCODE](). 

### variable T_9F45_DataAuthCode

```cpp
unsigned char[2] T_9F45_DataAuthCode;
```

Data Authentication Code, optional: present if SDA card    TLV tag [TAG_9F45_DATA_AUTHENT_CODE](), validity bit [TRX_CTLS_9F45_DATAAUTHCODE](). 

### variable T_9F4C_ICCDynNumber

```cpp
EMV_CTLS_ICCRND_TYPE T_9F4C_ICCDynNumber;
```

optional: present if DDA/CDA card    TLV tag [TAG_9F4C_ICC_DYNAMIC_NB](), validity bit [TRX_CTLS_9F4C_ICCDYNNUMBER]()

### variable TACDenial

```cpp
unsigned char[5] TACDenial;
```

Terminal Action Code - Denial    TLV tag [TAG_DF21_TAC_DENIAL](), validity bit [TRX_CTLS_TAC_DENIAL](). 

### variable TACOnline

```cpp
unsigned char[5] TACOnline;
```

Terminal Action Code - Online    TLV tag [TAG_DF22_TAC_ONLINE](), validity bit [TRX_CTLS_TAC_ONLINE](). 

### variable TACDefault

```cpp
unsigned char[5] TACDefault;
```

Terminal Action Code - Default    TLV tag [TAG_DF23_TAC_DEFAULT](), validity bit [TRX_CTLS_TAC_DEFAULT](). 

### variable T_9F0E_IACDenial

```cpp
unsigned char[5] T_9F0E_IACDenial;
```

Issuer Action Code - Denial    TLV tag [TAG_9F0E_IAC_DENIAL](), validity bit [TRX_CTLS_9F0E_IAC_DENIAL](). 

### variable T_9F0F_IACOnline

```cpp
unsigned char[5] T_9F0F_IACOnline;
```

Issuer Action Code - Online    TLV tag [TAG_9F0F_IAC_ONLINE](), validity bit [TRX_CTLS_9F0F_IAC_ONLINE](). 

### variable T_9F0D_IACDefault

```cpp
unsigned char[5] T_9F0D_IACDefault;
```

Issuer Action Code - Default    TLV tag [TAG_9F0D_IAC_DEFAULT](), validity bit [TRX_CTLS_9F0D_IAC_DEFAULT](). 

### variable T_9F40_AddTermCap

```cpp
unsigned char[5] T_9F40_AddTermCap;
```

Additional Terminal Capabilities (if configured by EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::TermAddCap)    TLV tag [TAG_9F40_ADD_TRM_CAP](), validity bit [TRX_CTLS_9F40_TERMCAP](). 

### variable T_9F16_MerchIdent

```cpp
unsigned char[15] T_9F16_MerchIdent;
```

Merchant Identifier    TLV tag [TAG_9F16_MERCHANT_ID](), validity bit [TRX_CTLS_9F16_MERCHANT_ID](). 

### variable T_5F20_Cardholder

```cpp
EMV_CTLS_CRDNAME_TYPE T_5F20_Cardholder;
```

Cardholder Name    TLV tag [TAG_5F20_CARDHOLDER_NAME](), validity bit [TRX_CTLS_5F20_CARDHOLDER](). 

### variable T_5F2D_Lang_Pref

```cpp
unsigned char[8+1] T_5F2D_Lang_Pref;
```

Language Preference (zero terminated)    TLV tag [TAG_5F2D_LANGUAGE](), validity bit [TRX_CTLS_5F2D_LANG_PREFERENCE](). 

### variable T_9F08_ICC_Appli_Vers_No

```cpp
unsigned char[2] T_9F08_ICC_Appli_Vers_No;
```

ICC Application Version Number    TLV tag [TAG_9F08_ICC_APP_VERSION_NB](), validity bit [TRX_CTLS_9F08_ICC_APPLI_VERS_NO](). 

### variable T_5F36_Trx_Currency_Exp

```cpp
unsigned char T_5F36_Trx_Currency_Exp;
```

Transaction Currency Exponent    TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](), validity bit [TRX_CTLS_5F36_TRX_CURRENCY_EXPO](). 

### variable T_5F30_ServiceCode

```cpp
unsigned char[2] T_5F30_ServiceCode;
```

Service code as defined in ISO/IEC 7813 for track 1 and track 2, format: n3    TLV tag [TAG_5F30_SERVICE_CODE](), validity bit [TRX_CTLS_5F30_SERVICE_CODE](). 

### variable CL_Mode

```cpp
unsigned long CL_Mode;
```

used Contactless mode (kernel) for this transaction    Possible values: see [Supported Contactless modes]()

**Deprecated**: 

Maintained only for backwards compatibility. Kernel is given by [EMV_CTLS_TRANSRES_TYPE::T_DF64_KernelDebugData](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata)[18] and MSR transactions are indicated by [EMV_CTLS_TRANSRES_TYPE::StatusInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo) bit [EMV_ADK_SI_CONTACTLESS_MSR](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-msr)

 TLV tag [TAG_C2_TRM_CL_MODES](group___v_e_r_i___t_a_g_s.md#define-tag-c2-trm-cl-modes), availability bit [TRX_CTLS_CTLS_MODES](group___d_e_f___d_f61.md#define-trx-ctls-ctls-modes)

### variable T_9F66_CL_TTQ

```cpp
unsigned char[4] T_9F66_CL_TTQ;
```

Visa TTQ (Contactless only)    TLV tag [TAG_9F66_TTQ](), validity bit [TRX_CTLS_9F66_TTQ](). 

### variable T_DF5D_CL_MAGSTRIPE_T2

```cpp
EMV_CTLS_TRACK2_TYPE T_DF5D_CL_MAGSTRIPE_T2;
```


Contactless magstripe data (different tags are used for the schemes (payWave,PayPass,Amex, ...) therefore an own tag is used to identify magstripe data) 

 TLV tag [TAG_DF5E_CL_MAGSTRIPE_T2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5e-cl-magstripe-t2), validity bit [TRX_CTLS_DF5D_CL_MAGSTRIPE](group___d_e_f___d_f61.md#define-trx-ctls-df5d-cl-magstripe)


### variable T_9F6C_CL_VISA_CTQ

```cpp
unsigned char[2] T_9F6C_CL_VISA_CTQ;
```

Visa CTQ (Contactless only)    TLV tag [TAG_9F6C_VISA_CTQ](), validity bit [TRX_CTLS_9F6C_VISA_CTQ](). 

### variable T_9F5D_CL_VISA_AOSA

```cpp
unsigned char[EMV_ADK_BCD_AMOUNT_LEN] T_9F5D_CL_VISA_AOSA;
```

Offline Spending Amount/Offline Balance, for example Visa, CUP: '9F5D', Mastercard: '9F50', JCB: '9F5F'    TLV tag [TAG_9F5D_VISA_AOSA](), validity bit [TRX_CTLS_9F5D_VISA_AOSA](). 

### variable T_DF8104_CL_MC_BALANCE

```cpp
unsigned char[EMV_ADK_BCD_AMOUNT_LEN] T_DF8104_CL_MC_BALANCE;
```

PayPass: Balance before GenAC    TLV tag [TAG_DF32_MC_BALANCE_8104](), validity bit [TRX_CTLS_DF8104_MC_BALANCE](). 

### variable T_DF8105_CL_MC_BALANCE

```cpp
unsigned char[EMV_ADK_BCD_AMOUNT_LEN] T_DF8105_CL_MC_BALANCE;
```

PayPass: Balance after GenAC    TLV tag [TAG_DF38_MC_BALANCE_8105](), validity bit [TRX_CTLS_DF8105_MC_BALANCE](). 

### variable T_DF64_KernelDebugData

```cpp
unsigned char[32] T_DF64_KernelDebugData;
```

Status data of the used CTLS Vertex kernel. See [Kernel Debug Data].    TLV tag [TAG_DF64_KERNEL_DEBUG](), validity bit [TRX_CTLS_DF64_KERNEL_DEBUG](). 

### variable ctlsCardType

```cpp
unsigned char ctlsCardType;
```


L1 type of contactless card, see [CTLS card types](group___c_l_t_r_x___c_a_r_d_t_y_p_e.md)

 VFI reader framework does only fill this parameter in case [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) was called with [EMV_CTLS_START_STRUCT::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes)

 More detailed card type info can be obtained by usage of [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) with [TAG_DF8F20_CTLS_CARD_TPYE](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f20-ctls-card-tpye)

 TLV tag [TAG_DF4F_CARDTYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4f-cardtype), validity bit [TRX_CTLS_CARDTYPE](group___d_e_f___d_f61.md#define-trx-ctls-cardtype)


### variable ScriptResults

```cpp
unsigned char[EMV_ADK_CL_SCRIPTRES_LEN] ScriptResults;
```

Issuer script results    TLV tag [TAG_DF07_UNCRIT_SCR](), validity bit [TRX_CTLS_SCRIPTRESULTS](). 

### variable ScriptResultsLen

```cpp
unsigned short ScriptResultsLen;
```

Issuer script results    TLV tag [TAG_DF07_UNCRIT_SCR](), validity bit [TRX_CTLS_SCRIPTRESULTS](). 

### variable T_DF61_Info_Received_Data

```cpp
unsigned char[8] T_DF61_Info_Received_Data;
```

Information which of these data was provided by the ICC, see [Information which data was provided by the ICC](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
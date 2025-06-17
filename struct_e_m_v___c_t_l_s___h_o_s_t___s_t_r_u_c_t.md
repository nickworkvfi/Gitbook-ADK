---
title: EMV_CTLS_HOST_STRUCT
summary: Data structure for host response data. Input for EMV_CTLS_ContinueOnline()

---

# EMV_CTLS_HOST_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**



Data structure for host response data. Input for [EMV_CTLS_ContinueOnline()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| char | **[OnlineResult](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult)** <br>Shows whether or not an online dialogue was successful. If there is no connection or the message MAC is wrong or the response contains a format error, then `FALSE` must be entered. The kernel then performs a TAC-IAC-Default check and the second GenerateAC. Other data is only then relevant, when the online dialogue was successful (value `TRUE`).    default: `FALSE`   TLV tag [TAG_DF50_ONL_RES](), availability bit [INPUT_CTLS_ONL_ONLINE_RESP]().  |
| unsigned char[2] | **[AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp)** <br>Authorisation Response Code. The response code from the host. Note: The format must be converted from numeric to alphanumeric    default: 0000    TLV tag [TAG_8A_AUTH_RESP_CODE](), availability bit [INPUT_CTLS_ONL_AUTH_RESP]().  |
| unsigned char[5] | **[TxnOptions](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions)** <br>Bitstring for options.    See [Options for contactless transaction processing]()   TLV tag [TAG_DF36_TRX_OPTIONS](), availability bit [INPUT_CTLS_ONL_TXN_OPTIONS]().  |
| unsigned short | **[LenScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-lenscriptdata)** <br>Length of `ScriptData`.  |
| const unsigned char * | **[ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata)** <br>Issuer Script Template 1 or 2 (scripts to be performed after online authorisation)    EMVCo tag 71/72    TLV tag [TAG_DF54_SCRIPT_CLESS](), availability bit [INPUT_CTLS_ONL_SCRIPT]().  |
| unsigned char | **[LenAuth](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-lenauth)** <br>Length of `AuthData`.  |
| const unsigned char * | **[AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata)** <br>Issuer Authentication Data (EMVCo tag 91)    "91xx" must be included    Availability bit: [INPUT_CTLS_ONL_AUTHDATA]()   TLV length for [TAG_DF52_AUTH_DATA_CLESS]().  |
| unsigned char[2] | **[AuthResp_Positive](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive)** <br>Additional host AC which is considered positive (a TC is returned or is requested on 2nd GAC according to the scheme), the parameter may vary per transaction (if different schemes use different alternative positive response codes)    TLV tag [TAG_DF57_AC_ADD_OK_CLESS]()   Availability bit: [INPUT_CTLS_ONL_ARC_POSITIVE]().  |
| unsigned char[2] | **[AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface)** <br>PSD2 - Strong Consumer Authentication - Response Code for switch interface.    If [AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp) has this value, it is checked if contact interface is supported by card and terminal (return code [EMV_ADK_FALLBACK_CHIP_ONLY]()). Otherwise the transaction will be declined (return code [EMV_ADK_AAC]()). For consumer devices supporting CD CVM and if desired by the acquirer (e.g. Visa), the transaction shall be restarted with forced CD CVM (return code [EMV_ADK_CTLS_RETAP_SAME]()). In this case please restart [EMV_CTLS_SetupTransaction()]() and transaction flow option [CLTRXOP_CVM_REQUIRED]().    TLV tag [TAG_DF55_AC_SWITCH_IF]()   Availability bit: [INPUT_CTLS_ONL_ARC_SWITCH_IF]().  |
| unsigned char[2] | **[AuthResp_OnlinePIN](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-onlinepin)** <br>PSD2 - Strong Consumer Authentication - Response Code for Online PIN    If [AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp) has this value, the framework performs applicable checks for Online PIN support (return code [EMV_ADK_ARQC]() with flag [EMV_ADK_SI_ONLINE_PIN_REQUIRED]() set in [EMV_CTLS_TRANSRES_STRUCT::StatusInfo]()). Note: No checks for Mastercard and just the terminal support for Visa because the issuer will do the preliminary checks. If Online PIN is not supported the switch interface processing is performed like [AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface) would have matched.    TLV tag [TAG_DF56_AC_ONLINE_PIN]()   Availability bit: [INPUT_CTLS_ONL_ARC_ONLINE_PIN]().  |
| unsigned char[EMV_ADK_BCD_AMOUNT_LEN] | **[amountUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountupd)** <br>   TLV tag [TAG_9F02_NUM_AMOUNT_AUTH]()   included data bit [INPUT_CTLS_ONL_AMOUNT]() |
| unsigned char[EMV_ADK_BCD_AMOUNT_LEN] | **[amountOthUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd)** <br>optional cashback amount update for the case that the authorised cashback amount differs and shall be used for 2. Gen AC (Partial Approval).    TLV tag [TAG_9F03_NUM_AMOUNT_OTHER]()   included data bit [INPUT_CTLS_ONL_AMOUNT_OTH]() |
| unsigned char[8] | **[Info_Included_Data](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-info-included-data)** <br>Which data is included in the message [EMV_CTLS_ContinueOnline: Which data is included]().  |

## Public Attributes Documentation

### variable OnlineResult

```cpp
char OnlineResult;
```

Shows whether or not an online dialogue was successful. If there is no connection or the message MAC is wrong or the response contains a format error, then `FALSE` must be entered. The kernel then performs a TAC-IAC-Default check and the second GenerateAC. Other data is only then relevant, when the online dialogue was successful (value `TRUE`).    default: `FALSE`   TLV tag [TAG_DF50_ONL_RES](), availability bit [INPUT_CTLS_ONL_ONLINE_RESP](). 

### variable AuthResp

```cpp
unsigned char[2] AuthResp;
```

Authorisation Response Code. The response code from the host. Note: The format must be converted from numeric to alphanumeric    default: 0000    TLV tag [TAG_8A_AUTH_RESP_CODE](), availability bit [INPUT_CTLS_ONL_AUTH_RESP](). 

### variable TxnOptions

```cpp
unsigned char[5] TxnOptions;
```

Bitstring for options.    See [Options for contactless transaction processing]()   TLV tag [TAG_DF36_TRX_OPTIONS](), availability bit [INPUT_CTLS_ONL_TXN_OPTIONS](). 

### variable LenScriptData

```cpp
unsigned short LenScriptData;
```

Length of `ScriptData`. 

### variable ScriptData

```cpp
const unsigned char * ScriptData;
```

Issuer Script Template 1 or 2 (scripts to be performed after online authorisation)    EMVCo tag 71/72    TLV tag [TAG_DF54_SCRIPT_CLESS](), availability bit [INPUT_CTLS_ONL_SCRIPT](). 

### variable LenAuth

```cpp
unsigned char LenAuth;
```

Length of `AuthData`. 

### variable AuthData

```cpp
const unsigned char * AuthData;
```

Issuer Authentication Data (EMVCo tag 91)    "91xx" must be included    Availability bit: [INPUT_CTLS_ONL_AUTHDATA]()   TLV length for [TAG_DF52_AUTH_DATA_CLESS](). 

### variable AuthResp_Positive

```cpp
unsigned char[2] AuthResp_Positive;
```

Additional host AC which is considered positive (a TC is returned or is requested on 2nd GAC according to the scheme), the parameter may vary per transaction (if different schemes use different alternative positive response codes)    TLV tag [TAG_DF57_AC_ADD_OK_CLESS]()   Availability bit: [INPUT_CTLS_ONL_ARC_POSITIVE](). 

### variable AuthResp_SwitchInterface

```cpp
unsigned char[2] AuthResp_SwitchInterface;
```

PSD2 - Strong Consumer Authentication - Response Code for switch interface.    If [AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp) has this value, it is checked if contact interface is supported by card and terminal (return code [EMV_ADK_FALLBACK_CHIP_ONLY]()). Otherwise the transaction will be declined (return code [EMV_ADK_AAC]()). For consumer devices supporting CD CVM and if desired by the acquirer (e.g. Visa), the transaction shall be restarted with forced CD CVM (return code [EMV_ADK_CTLS_RETAP_SAME]()). In this case please restart [EMV_CTLS_SetupTransaction()]() and transaction flow option [CLTRXOP_CVM_REQUIRED]().    TLV tag [TAG_DF55_AC_SWITCH_IF]()   Availability bit: [INPUT_CTLS_ONL_ARC_SWITCH_IF](). 

### variable AuthResp_OnlinePIN

```cpp
unsigned char[2] AuthResp_OnlinePIN;
```

PSD2 - Strong Consumer Authentication - Response Code for Online PIN    If [AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp) has this value, the framework performs applicable checks for Online PIN support (return code [EMV_ADK_ARQC]() with flag [EMV_ADK_SI_ONLINE_PIN_REQUIRED]() set in [EMV_CTLS_TRANSRES_STRUCT::StatusInfo]()). Note: No checks for Mastercard and just the terminal support for Visa because the issuer will do the preliminary checks. If Online PIN is not supported the switch interface processing is performed like [AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface) would have matched.    TLV tag [TAG_DF56_AC_ONLINE_PIN]()   Availability bit: [INPUT_CTLS_ONL_ARC_ONLINE_PIN](). 

### variable amountUpd

```cpp
unsigned char[EMV_ADK_BCD_AMOUNT_LEN] amountUpd;
```

   TLV tag [TAG_9F02_NUM_AMOUNT_AUTH]()   included data bit [INPUT_CTLS_ONL_AMOUNT]()

optional amount update for the case that the authorised amount differs and shall be used for 2. Gen AC. This is known as Partial Approval. 


### variable amountOthUpd

```cpp
unsigned char[EMV_ADK_BCD_AMOUNT_LEN] amountOthUpd;
```

optional cashback amount update for the case that the authorised cashback amount differs and shall be used for 2. Gen AC (Partial Approval).    TLV tag [TAG_9F03_NUM_AMOUNT_OTHER]()   included data bit [INPUT_CTLS_ONL_AMOUNT_OTH]()

### variable Info_Included_Data

```cpp
unsigned char[8] Info_Included_Data;
```

Which data is included in the message [EMV_CTLS_ContinueOnline: Which data is included](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
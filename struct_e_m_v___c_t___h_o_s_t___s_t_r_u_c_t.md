---
title: EMV_CT_HOST_STRUCT
summary: Data structure for host response data. Input for EMV_CT_ContinueOnline()

---

# EMV_CT_HOST_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Data structure for host response data. Input for [EMV_CT_ContinueOnline()]()


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| char | **[OnlineResult](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult)** <br>Shows whether or not an online dialogue was successful. If there is no connection or the message MAC is wrong or the response contains a format error, then `FALSE` must be entered. The kernel then performs a TAC-IAC-Default check and the second GenerateAC. Other data is only then relevant, when the online dialogue was successful (value `TRUE`).    mandatory    Validity bit: [INPUT_ONL_ONLINE_RESP]()   TLV tag [TAG_DF50_ONL_RES]().  |
| unsigned char[2] | **[AuthResp](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp)** <br>Authorisation Response Code. The response code from the host. Note: The format must be converted from numeric to alphanumeric    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   Validity bit: [INPUT_ONL_ONLINE_AC]()   TLV tag [TAG_8A_AUTH_RESP_CODE]().  |
| unsigned char | **[LenAuth](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenauth)** <br>Length of `AuthData`   Validity bit: [INPUT_ONL_AUTHDATA]()   TLV length for [TAG_DF52_AUTH_DATA]().  |
| unsigned char * | **[AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata)** <br>Issuer Authentication Data (EMVCo tag 91)    "91xx" must be included    Can also be changed by [EMV_CT_updateTxnTags()]()   Validity bit: [INPUT_ONL_AUTHDATA]()   TLV length for [TAG_DF52_AUTH_DATA]().  |
| unsigned short | **[LenScriptCrit](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenscriptcrit)** <br>Length of `ScriptCritData`   Validity bit: [INPUT_ONL_SCRIPTCRIT]()   TLV length for [TAG_DF53_SCRIPT_CRIT]().  |
| unsigned char * | **[ScriptCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptcritdata)** <br>Issuer Script Template 1 (critical scripts to be performed prior to 2nd Generate AC)    Data must consist of one or several scripts encapsulated in EMVCo tag `71`   Validity bit: [INPUT_ONL_SCRIPTCRIT]()   TLV length for [TAG_DF53_SCRIPT_CRIT]().  |
| unsigned short | **[LenScriptUnCrit](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-lenscriptuncrit)** <br>Length of `ScriptUnCritData`   Validity bit: [INPUT_ONL_SCRIPTUNCRIT]()   TLV length for [TAG_DF54_SCRIPT_UNCRIT]().  |
| unsigned char * | **[ScriptUnCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptuncritdata)** <br>Issuer Script Template 2 (non critical scripts to be performed after 2nd Generate AC)    Data must consist of one or several scripts encapsulated in EMVCo tag `72`   Validity bit: [INPUT_ONL_SCRIPTUNCRIT]()   TLV length for [TAG_DF54_SCRIPT_UNCRIT]().  |
| unsigned char[6] | **[AuthorizationCode](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authorizationcode)** <br>Value given by the card issuer for an accepted transaction.    mandatory    Validity bit: [INPUT_ONL_AUTHCODE]()   TLV tag [TAG_89_AUTH_CODE]().  |
| char | **[Result_referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-result-referral)** <br>Merchant response in case of voice referral.  `True` ... bank approved  `False` ... bank declined    Validity bit: [INPUT_ONL_RESULT_REFERRAL]()   TLV tag [TAG_DF51_ISS_REF_RES]().  |
| char[2] | **[AuthResp_Referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-referral)** <br>host AC for an issuer referral.    Validity bit: [INPUT_ONL_ARC_REFERRAL]()   TLV tag [TAG_DF55_AC_ISS_REF]() |
| char[2] | **[AuthResp_Wrong_PIN](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-wrong-pin)** <br>host AC for a wrong online PIN.    Validity bit: [INPUT_ONL_ARC_WRONGPIN]()   TLV tag [TAG_DF56_AC_WRONG_PIN]() |
| char[2] | **[AuthResp_Positive](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive)** <br>additional host AC which is considered positive (a TC is requested on 2nd GAC), the parameter may vary per transaction (if different schemes use different alternative positive response codes)    Validity bit: [INPUT_ONL_ARC_POSITIVE]()   TLV tag [TAG_DF57_AC_ADD_OK]() |
| unsigned char[6] | **[PreAuth_Amount](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-preauth-amount)**  |
| unsigned char[6] | **[amountOthUpd](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd)**  |
| unsigned char[5] | **[TxnOptions](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions)** <br>Bitstring for options.    See [Options for transaction processing]()   Validity bit: [INPUT_ONL_TXN_OPTIONS]()   TLV tag [TAG_DF36_TRX_OPTIONS]().  |
| unsigned char[3] | **[TxnSteps](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnsteps)** <br>This parameter allows to interrupt the transaction at given steps for intermediate application processing, allowed values see [Re-entrance options]()   Validity bit: [INPUT_ONL_TXN_STEPS]()   TLV tag [TAG_DF37_TRX_STEPS]().  |
| unsigned short | **[WriteDataStorageLen](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-writedatastoragelen)** <br>Length of `WriteDataStorageData`   Validity bit: [INPUT_ONL_WRITE_DS_DATA]()   TLV length for [TAG_DF5A_DS_WRITE_DATA]().  |
| unsigned char * | **[WriteDataStorageData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-writedatastoragedata)** <br>Data Storage data to be written. TLV Format with a tag DF3F for each container to be written.    Validity bit: [INPUT_ONL_WRITE_DS_DATA]()   TLV length for [TAG_DF5A_DS_WRITE_DATA]().  |
| unsigned char[8] | **[Info_Included_Data](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-info-included-data)** <br>Which data is included in the message, see [EMV_CTLS_ContinueOnline: Which data is included]().  |

## Public Attributes Documentation

### variable OnlineResult

```cpp
char OnlineResult;
```

Shows whether or not an online dialogue was successful. If there is no connection or the message MAC is wrong or the response contains a format error, then `FALSE` must be entered. The kernel then performs a TAC-IAC-Default check and the second GenerateAC. Other data is only then relevant, when the online dialogue was successful (value `TRUE`).    mandatory    Validity bit: [INPUT_ONL_ONLINE_RESP]()   TLV tag [TAG_DF50_ONL_RES](). 

### variable AuthResp

```cpp
unsigned char[2] AuthResp;
```

Authorisation Response Code. The response code from the host. Note: The format must be converted from numeric to alphanumeric    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   Validity bit: [INPUT_ONL_ONLINE_AC]()   TLV tag [TAG_8A_AUTH_RESP_CODE](). 

### variable LenAuth

```cpp
unsigned char LenAuth;
```

Length of `AuthData`   Validity bit: [INPUT_ONL_AUTHDATA]()   TLV length for [TAG_DF52_AUTH_DATA](). 

### variable AuthData

```cpp
unsigned char * AuthData;
```

Issuer Authentication Data (EMVCo tag 91)    "91xx" must be included    Can also be changed by [EMV_CT_updateTxnTags()]()   Validity bit: [INPUT_ONL_AUTHDATA]()   TLV length for [TAG_DF52_AUTH_DATA](). 

### variable LenScriptCrit

```cpp
unsigned short LenScriptCrit;
```

Length of `ScriptCritData`   Validity bit: [INPUT_ONL_SCRIPTCRIT]()   TLV length for [TAG_DF53_SCRIPT_CRIT](). 

### variable ScriptCritData

```cpp
unsigned char * ScriptCritData;
```

Issuer Script Template 1 (critical scripts to be performed prior to 2nd Generate AC)    Data must consist of one or several scripts encapsulated in EMVCo tag `71`   Validity bit: [INPUT_ONL_SCRIPTCRIT]()   TLV length for [TAG_DF53_SCRIPT_CRIT](). 

### variable LenScriptUnCrit

```cpp
unsigned short LenScriptUnCrit;
```

Length of `ScriptUnCritData`   Validity bit: [INPUT_ONL_SCRIPTUNCRIT]()   TLV length for [TAG_DF54_SCRIPT_UNCRIT](). 

### variable ScriptUnCritData

```cpp
unsigned char * ScriptUnCritData;
```

Issuer Script Template 2 (non critical scripts to be performed after 2nd Generate AC)    Data must consist of one or several scripts encapsulated in EMVCo tag `72`   Validity bit: [INPUT_ONL_SCRIPTUNCRIT]()   TLV length for [TAG_DF54_SCRIPT_UNCRIT](). 

### variable AuthorizationCode

```cpp
unsigned char[6] AuthorizationCode;
```

Value given by the card issuer for an accepted transaction.    mandatory    Validity bit: [INPUT_ONL_AUTHCODE]()   TLV tag [TAG_89_AUTH_CODE](). 

### variable Result_referral

```cpp
char Result_referral;
```

Merchant response in case of voice referral.  `True` ... bank approved  `False` ... bank declined    Validity bit: [INPUT_ONL_RESULT_REFERRAL]()   TLV tag [TAG_DF51_ISS_REF_RES](). 

### variable AuthResp_Referral

```cpp
char[2] AuthResp_Referral;
```

host AC for an issuer referral.    Validity bit: [INPUT_ONL_ARC_REFERRAL]()   TLV tag [TAG_DF55_AC_ISS_REF]()

### variable AuthResp_Wrong_PIN

```cpp
char[2] AuthResp_Wrong_PIN;
```

host AC for a wrong online PIN.    Validity bit: [INPUT_ONL_ARC_WRONGPIN]()   TLV tag [TAG_DF56_AC_WRONG_PIN]()

### variable AuthResp_Positive

```cpp
char[2] AuthResp_Positive;
```

additional host AC which is considered positive (a TC is requested on 2nd GAC), the parameter may vary per transaction (if different schemes use different alternative positive response codes)    Validity bit: [INPUT_ONL_ARC_POSITIVE]()   TLV tag [TAG_DF57_AC_ADD_OK]()

### variable PreAuth_Amount

```cpp
unsigned char[6] PreAuth_Amount;
```


**Note**: Since the EMV-ADK results shall match the amount that the card used for cryptogram generation, the amount update is applied only if CDOL-2 contains amount tags. Take care not to use the EMV-ADK transaction results as authorised amount. 

optional amount update for the case that the authorised amount differs and shall be used for 2. Gen AC. This is known as Partial Approval. 

 Validity bit: [INPUT_ONL_AMOUNT_GAC2](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-amount-gac2)

 TLV tag [TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth)


### variable amountOthUpd

```cpp
unsigned char[6] amountOthUpd;
```


optional cashback amount update for the case that the authorised cashback amount differs and shall be used for 2. Gen AC (Partial Approval) 

 Validity bit: [INPUT_ONL_AMOUNT_OTH](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-amount-oth)

 TLV tag [TAG_9F03_NUM_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f03-num-amount-other)


### variable TxnOptions

```cpp
unsigned char[5] TxnOptions;
```

Bitstring for options.    See [Options for transaction processing]()   Validity bit: [INPUT_ONL_TXN_OPTIONS]()   TLV tag [TAG_DF36_TRX_OPTIONS](). 

### variable TxnSteps

```cpp
unsigned char[3] TxnSteps;
```

This parameter allows to interrupt the transaction at given steps for intermediate application processing, allowed values see [Re-entrance options]()   Validity bit: [INPUT_ONL_TXN_STEPS]()   TLV tag [TAG_DF37_TRX_STEPS](). 

### variable WriteDataStorageLen

```cpp
unsigned short WriteDataStorageLen;
```

Length of `WriteDataStorageData`   Validity bit: [INPUT_ONL_WRITE_DS_DATA]()   TLV length for [TAG_DF5A_DS_WRITE_DATA](). 

### variable WriteDataStorageData

```cpp
unsigned char * WriteDataStorageData;
```

Data Storage data to be written. TLV Format with a tag DF3F for each container to be written.    Validity bit: [INPUT_ONL_WRITE_DS_DATA]()   TLV length for [TAG_DF5A_DS_WRITE_DATA](). 

### variable Info_Included_Data

```cpp
unsigned char[8] Info_Included_Data;
```

Which data is included in the message, see [EMV_CTLS_ContinueOnline: Which data is included](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
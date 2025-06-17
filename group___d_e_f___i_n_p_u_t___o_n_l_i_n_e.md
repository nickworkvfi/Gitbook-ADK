---
title: EMV_CTLS_ContinueOnline: Which data is included
summary: Contents of the input in EMV_CTLS_HOST_STRUCT::Info_Included_Data, EMV_CTLS_ContinueOnline()

---

# EMV_CTLS_ContinueOnline: Which data is included

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Contents of the input in [EMV_CTLS_HOST_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-info-included-data), [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INPUT_CTLS_ONL_ONLINE_RESP](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-online-resp)** <br>B1b1: [EMV_CTLS_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult).  |
|  | **[INPUT_CTLS_ONL_AUTH_RESP](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-auth-resp)** <br>B1b2: [EMV_CTLS_HOST_STRUCT::AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp).  |
|  | **[INPUT_CTLS_ONL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-txn-options)** <br>B1b3: [EMV_CTLS_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_CTLS_ONL_SCRIPT](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-script)** <br>B1b4: [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata).  |
|  | **[INPUT_CTLS_ONL_AUTHDATA](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-authdata)** <br>B1b5: [EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata).  |
|  | **[INPUT_CTLS_ONL_ARC_POSITIVE](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-arc-positive)** <br>B1b6: [EMV_CTLS_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive).  |
|  | **[INPUT_CTLS_ONL_ARC_SWITCH_IF](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-arc-switch-if)** <br>B1b7: [EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface).  |
|  | **[INPUT_CTLS_ONL_ARC_ONLINE_PIN](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-arc-online-pin)** <br>B1b8: [EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-onlinepin).  |
|  | **[INPUT_CTLS_ONL_AMOUNT](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-amount)** <br>B2b1: [EMV_CTLS_HOST_STRUCT::amountUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountupd).  |
|  | **[INPUT_CTLS_ONL_AMOUNT_OTH](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-amount-oth)** <br>B2b2: [EMV_CTLS_HOST_STRUCT::amountOthUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd).  |
|  | **[INPUT_ONL_ONLINE_RESP](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-online-resp)** <br>B1b1: [EMV_CT_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult).  |
|  | **[INPUT_ONL_ONLINE_AC](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-online-ac)** <br>B1b2: [EMV_CT_HOST_STRUCT::AuthResp](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp).  |
|  | **[INPUT_ONL_AUTHDATA](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-authdata)** <br>B1b3: [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata).  |
|  | **[INPUT_ONL_SCRIPTCRIT](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-scriptcrit)** <br>B1b4: [EMV_CT_HOST_STRUCT::ScriptCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptcritdata).  |
|  | **[INPUT_ONL_SCRIPTUNCRIT](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-scriptuncrit)** <br>B1b5: [EMV_CT_HOST_STRUCT::ScriptUnCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptuncritdata).  |
|  | **[INPUT_ONL_AUTHCODE](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-authcode)** <br>B1b6: [EMV_CT_HOST_STRUCT::AuthorizationCode](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authorizationcode).  |
|  | **[INPUT_ONL_RESULT_REFERRAL](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-result-referral)** <br>B1b7: [EMV_CT_HOST_STRUCT::Result_referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-result-referral).  |
|  | **[INPUT_ONL_ARC_REFERRAL](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-arc-referral)** <br>B1b8: [EMV_CT_HOST_STRUCT::AuthResp_Referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-referral).  |
|  | **[INPUT_ONL_ARC_WRONGPIN](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-arc-wrongpin)** <br>B2b1: [EMV_CT_HOST_STRUCT::AuthResp_Wrong_PIN](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-wrong-pin).  |
|  | **[INPUT_ONL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-txn-options)** <br>B2b2: [EMV_CT_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_ONL_AMOUNT_GAC2](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-amount-gac2)** <br>B2b3: [EMV_CT_HOST_STRUCT::PreAuth_Amount](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-preauth-amount).  |
|  | **[INPUT_ONL_TXN_STEPS](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-txn-steps)** <br>B2b4: [EMV_CT_HOST_STRUCT::TxnSteps](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnsteps).  |
|  | **[INPUT_ONL_ARC_POSITIVE](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-arc-positive)** <br>B2b5: [EMV_CT_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive).  |
|  | **[INPUT_ONL_WRITE_DS_DATA](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-write-ds-data)** <br>B2b6: [EMV_CT_HOST_STRUCT::WriteDataStorageData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-writedatastoragedata).  |
|  | **[INPUT_ONL_AMOUNT_OTH](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-amount-oth)** <br>B2b7: [EMV_CT_HOST_STRUCT::amountOthUpd](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd).  |

## Detailed Description

Contents of the input in [EMV_CTLS_HOST_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-info-included-data), [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline)

Contents of [EMV_CT_HOST_TYPE::Info_Included_Data](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-info-included-data).




## Macros Documentation

### define INPUT_CTLS_ONL_ONLINE_RESP

```
#define INPUT_CTLS_ONL_ONLINE_RESP 0x01
```

B1b1: [EMV_CTLS_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult). 

### define INPUT_CTLS_ONL_AUTH_RESP

```
#define INPUT_CTLS_ONL_AUTH_RESP 0x02
```

B1b2: [EMV_CTLS_HOST_STRUCT::AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp). 

### define INPUT_CTLS_ONL_TXN_OPTIONS

```
#define INPUT_CTLS_ONL_TXN_OPTIONS 0x04
```

B1b3: [EMV_CTLS_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_CTLS_ONL_SCRIPT

```
#define INPUT_CTLS_ONL_SCRIPT 0x08
```

B1b4: [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata). 

### define INPUT_CTLS_ONL_AUTHDATA

```
#define INPUT_CTLS_ONL_AUTHDATA 0x10
```

B1b5: [EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata). 

### define INPUT_CTLS_ONL_ARC_POSITIVE

```
#define INPUT_CTLS_ONL_ARC_POSITIVE 0x20
```

B1b6: [EMV_CTLS_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive). 

### define INPUT_CTLS_ONL_ARC_SWITCH_IF

```
#define INPUT_CTLS_ONL_ARC_SWITCH_IF 0x40
```

B1b7: [EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface). 

### define INPUT_CTLS_ONL_ARC_ONLINE_PIN

```
#define INPUT_CTLS_ONL_ARC_ONLINE_PIN 0x80
```

B1b8: [EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-onlinepin). 

### define INPUT_CTLS_ONL_AMOUNT

```
#define INPUT_CTLS_ONL_AMOUNT 0x01
```

B2b1: [EMV_CTLS_HOST_STRUCT::amountUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountupd). 

### define INPUT_CTLS_ONL_AMOUNT_OTH

```
#define INPUT_CTLS_ONL_AMOUNT_OTH 0x02
```

B2b2: [EMV_CTLS_HOST_STRUCT::amountOthUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd). 

### define INPUT_ONL_ONLINE_RESP

```
#define INPUT_ONL_ONLINE_RESP 0x01
```

B1b1: [EMV_CT_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult). 

### define INPUT_ONL_ONLINE_AC

```
#define INPUT_ONL_ONLINE_AC 0x02
```

B1b2: [EMV_CT_HOST_STRUCT::AuthResp](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp). 

### define INPUT_ONL_AUTHDATA

```
#define INPUT_ONL_AUTHDATA 0x04
```

B1b3: [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata). 

### define INPUT_ONL_SCRIPTCRIT

```
#define INPUT_ONL_SCRIPTCRIT 0x08
```

B1b4: [EMV_CT_HOST_STRUCT::ScriptCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptcritdata). 

### define INPUT_ONL_SCRIPTUNCRIT

```
#define INPUT_ONL_SCRIPTUNCRIT 0x10
```

B1b5: [EMV_CT_HOST_STRUCT::ScriptUnCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptuncritdata). 

### define INPUT_ONL_AUTHCODE

```
#define INPUT_ONL_AUTHCODE 0x20
```

B1b6: [EMV_CT_HOST_STRUCT::AuthorizationCode](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authorizationcode). 

### define INPUT_ONL_RESULT_REFERRAL

```
#define INPUT_ONL_RESULT_REFERRAL 0x40
```

B1b7: [EMV_CT_HOST_STRUCT::Result_referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-result-referral). 

### define INPUT_ONL_ARC_REFERRAL

```
#define INPUT_ONL_ARC_REFERRAL 0x80
```

B1b8: [EMV_CT_HOST_STRUCT::AuthResp_Referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-referral). 

### define INPUT_ONL_ARC_WRONGPIN

```
#define INPUT_ONL_ARC_WRONGPIN 0x01
```

B2b1: [EMV_CT_HOST_STRUCT::AuthResp_Wrong_PIN](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-wrong-pin). 

### define INPUT_ONL_TXN_OPTIONS

```
#define INPUT_ONL_TXN_OPTIONS 0x02
```

B2b2: [EMV_CT_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_ONL_AMOUNT_GAC2

```
#define INPUT_ONL_AMOUNT_GAC2 0x04
```

B2b3: [EMV_CT_HOST_STRUCT::PreAuth_Amount](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-preauth-amount). 

### define INPUT_ONL_TXN_STEPS

```
#define INPUT_ONL_TXN_STEPS 0x08
```

B2b4: [EMV_CT_HOST_STRUCT::TxnSteps](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnsteps). 

### define INPUT_ONL_ARC_POSITIVE

```
#define INPUT_ONL_ARC_POSITIVE 0x10
```

B2b5: [EMV_CT_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive). 

### define INPUT_ONL_WRITE_DS_DATA

```
#define INPUT_ONL_WRITE_DS_DATA 0x20
```

B2b6: [EMV_CT_HOST_STRUCT::WriteDataStorageData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-writedatastoragedata). 

### define INPUT_ONL_AMOUNT_OTH

```
#define INPUT_ONL_AMOUNT_OTH 0x40
```

B2b7: [EMV_CT_HOST_STRUCT::amountOthUpd](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd). 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
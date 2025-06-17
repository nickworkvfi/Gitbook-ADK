---
title: Callback functions
summary: Callback function to be implemented in the same entity as EMV ADK. 

---

# Callback functions

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**

Callback function to be implemented in the same entity as EMV ADK. 

## Modules

| Name           |
| -------------- |
| **[Options for DataExchange request](group___c_b_c_k___d_e___r_e_q_u_e_s_t.md)** <br>Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](), [TAG_DF8F58_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8f58-de-request).  |
| **[Options for DataExchange state](group___c_b_c_k___d_e___s_t_a_t_e.md)** <br>Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](), [TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state).  |
| **[Options for DataExchange mode](group___c_b_c_k___d_e___m_o_d_e.md)** <br>Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](), [TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode).  |
| **[Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md)** <br>Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt).  |
| **[Buzzer handling](group___a_d_k___b_u_z_z_e_r.md)** <br>Defines given in callback [TAG_BF19_CTLS_CBK_BEEP](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf19-ctls-cbk-beep).  |
| **[Definitions for PIN Input callback function](group___a_d_k___p_i_n___p_a_r_a_m.md)** <br>See [EMV_CT_CALLBACK_FnT]() ([TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin))  |
| **[DCC mode](group___d_c_c___m_o_d_e.md)** <br>Used to carry decision given back by [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc))    TLV tag [TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check).  |
| **[Defines for callback function "put merchant information"](group___m_e_r_c_h___i_n_f_o.md)** <br>In order to show the merchant additional information on a system with two displays, 'information flashes' can be sent to the terminal during payment processing. This allows the merchant to alert the customer to confirming the amount or entering the PIN as required.    see [EMV_CT_CALLBACK_FnT]() ([TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo))  |
| **[Defines for callback function "cardholder information"](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md)** <br>In order to show the cardholder additional information, e.g. wrong PIN, last PIN try, another app is selected, ...    see [EMV_CT_CALLBACK_FnT]() ([TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo))  |
| **[Types of external application selection](group___d_e_f___c_b_k___s_e_l.md)** <br>Used as input for callback function "Application Selection" --> ReduceCandidateList() (`ucSelector`).  |
| **[Modes of domestic application handling](group___d_e_f___c_b_k___d_o_m_a_p_p.md)** <br>Used as return [TAG_DF7E_CBK_DOM_APP_RES](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7e-cbk-dom-app-res) for [EMV_CT_CALLBACK_FnT]()[TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps).  |
| **[Domestic callback options](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md)** <br>Calling application may set some options for further transaction processing.  |
| **[Domestic callback information](group___c_b_c_k___d_o_m___i_n_f_o.md)** <br>Information flags for [TAG_DF5C_DOM_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5c-dom-info) in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks))  |
| **[DCC callback information](group___c_b_c_k___d_c_c___i_n_f_o.md)** <br>Information flags for calling application.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void()(unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData) | **[EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func)** <br>Common callback function: send/receive TLV stream to/from calling application.  |
| typedef [EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func) * | **[EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt)** <br>pointer to [EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func) |
| typedef void(*)(unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData) | **[EMV_CT_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ct-callback-fnt)** <br>Common callback function: send/receive TLV stream to/from calling application.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_CALLBACK_STACK_SIZE](group___t_l_v___c_a_l_l_b_c_k.md#define-emv-ctls-callback-stack-size)**  |

## Types Documentation

### typedef EMV_CTLS_CALLBACK_Func

```
typedef void() EMV_CTLS_CALLBACK_Func(unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData);
```

Common callback function: send/receive TLV stream to/from calling application. 

**Parameters**: 

  * **pucSend** TLV stream to send to calling application 
  * **sSendSize** Length of TLV stream to send to calling application 
  * **pucReceive** TLV stream received from calling application 
  * **psReceiveSize** Input: size of buffer pucReceive points to; output: size of TLV stream received from calling application 
  * **externalData** Application data pointer, which was put in [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework)


Tags found in `pucSend` determine which callback function is meant: [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md)

Explanation in programmers guide: [Transaction Callbacks]

Tags for transport layer: 

* Callback function request: ` 91 01 ` ([EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req), [INS_CBCK_FCT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-fct)) 
* Trace output: ` 91 FF ` ([EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req), [INS_CBCK_TRACE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-trace)) 
* Response: ` 92 ` ([EMV_CTLS_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-resp))


### typedef EMV_CTLS_CALLBACK_FnT

```
typedef EMV_CTLS_CALLBACK_Func* EMV_CTLS_CALLBACK_FnT;
```

pointer to [EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func)

### typedef EMV_CT_CALLBACK_FnT

```
typedef void(* EMV_CT_CALLBACK_FnT) (unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData);
```

Common callback function: send/receive TLV stream to/from calling application. 

**Parameters**: 

  * **pucSend** ... TLV stream to send to calling application 
  * **sSendSize** ... length of TLV stream to send to calling application 
  * **pucReceive** ... TLV stream received from calling application 
  * **psReceiveSize** ... input: size of buffer pucReceive points to; output: size of TLV stream received from calling application 
  * **externalData** application data pointer, which was put in [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework)


**Author**: GSS R&D Germany

Explanation in programmers guide: [Transaction Callbacks]



 Tags for transport layer: 

* Callback function request: ` 91 01 ` ([EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req), [INS_CBCK_FCT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-fct)) 
* Data for card reader: ` 91 02 ` ([EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req), [INS_CBCK_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-crd)) 
* Trace output: ` 91 FF ` ([EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req), [INS_CBCK_TRACE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-trace)) 
* Response: ` 92 ` ([EMV_CT_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-resp))



 Tags found in `pucSend` determine which callback function is meant, see [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md)





## Macros Documentation

### define EMV_CTLS_CALLBACK_STACK_SIZE

```
#define EMV_CTLS_CALLBACK_STACK_SIZE 0xC000
```


**Deprecated**: 

avaiable stack-size in [EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func) (verix-only) 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
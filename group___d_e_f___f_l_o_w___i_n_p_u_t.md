---
title: Input data

---

# Input data

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



## Modules

| Name           |
| -------------- |
| **[Options for contactless transaction processing](group___c_l_t_r_x___o_p_t_i_o_n_s.md)** <br>Defines for [EMV_CTLS_START_TYPE::TxnOptions](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-txnoptions).  |
| **[Scheme specific transaction types](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md)** <br>Defines for [EMV_CTLS_START_TYPE::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype).  |
| **[CTLS card types for which passtrough mode is set](group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.md)** <br>Defines for [EMV_CTLS_START_TYPE::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes).  |
| **[EMV_CTLS_SetupTransaction: Which data is included in input struct](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md)** <br>Contents of the input in [EMV_CTLS_START_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-info-included-data), [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
| **[EMV_CTLS_ContinueOnline: Which data is included](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md)** <br>Contents of the input in [EMV_CTLS_HOST_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-info-included-data), [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) |
| **[EMV_CTLS_ContinueOfflineExt(): Which data is included](group___d_e_f___f_l_o_w___c_o_n_t_i_n_u_e___o_f_f_l_i_n_e___i_n_p_u_t.md)**  |
| **[Options for contactless transaction processing at EMV_CTLS_ContinueOfflineExt()](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md)** <br>Defines for [EMV_CTLS_CONT_OFFL_STRUCT::options](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md#variable-options).  |
| **[Fallback options for magstripe applications](group___f_b___o_p_t_i_o_n_s.md)** <br>for use in `ucFallback` of [EMV_CT_FALLBCK_MSR_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-fallbck-msr-type) |
| **[Bit field for additional fallback options for magstripe applications (not originating from DC POS tag DF18)](group___f_b___m_s_r___o_p_t_i_o_n_s.md)** <br>for use in `fallbackMsrOptions` of [EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type) |
| **[Support of cardholder confirmation](group___d_e_f___c_a_r_d___c_o_n_f.md)** <br>DF4D, see `ucCardholderConfirmation` in [EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type).  |
| **[Buildlist options for EMV_CT_StartTransaction()](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md)** <br>see [EMV_CT_SELECT_TYPE::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist) |
| **[Options for transaction processing](group___t_x_n___o_p_t_i_o_n_s.md)** <br>Defines for [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions), [EMV_CT_TRANSAC_STRUCT::TxnOptions](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnoptions), [EMV_CT_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions).  |
| **[Re-entrance options](group___t_x_n___s_t_e_p_s.md)** <br>Defines for [EMV_CT_SELECT_TYPE::TxnSteps](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnsteps) resp. [EMV_CT_TRANSAC_TYPE::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps).  |
| **[Amount confirmation before or after CVM processing](group___c_o_n_f_i_r_m___a_m_o_u_n_t___w_h_e_n.md)** <br>Byte defines for [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation)   only valid in case no combined amount confirmation configured (see [EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin) in [Defines for Application flow capabilities](group___a_p_p___f_l_o_w___c_a_p_s.md))  |
| **[Transaction input: Which data is included](group___d_e_f___i_n_p_u_t___t_r_x.md)** <br>Contents of [EMV_CT_TRANSAC_TYPE::Info_Included_Data](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-info-included-data).  |
| **[Transaction type (Tag 9C)](group___t_r_a_n_s___t_y_p_e_s.md)** <br>According to ISO 8583 - Annex A: Processing Code, Position 1 + 2.  |
| **[Options for updating TLV data](group___u_p_d_a_t_e___t_a_g_s___o_p_t_i_o_n_s.md)** <br>`options` for [EMV_CT_updateTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags) |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CTLS_PAYMENT_STRUCT](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md)** <br>Transaction parameters of an EMV transaction.  |
| struct | **[EMV_CTLS_APPS_SELECT_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md)** <br>Application selection parameters of an EMV transaction.  |
| struct | **[EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)** <br>struct for interface to [EMV_CTLS_SetupTransaction()]() |
| struct | **[EMV_CTLS_HOST_STRUCT](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md)** <br>Data structure for host response data. Input for [EMV_CTLS_ContinueOnline()]() |
| struct | **[EMV_CTLS_CONT_OFFL_STRUCT](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md)** <br>Transaction parameters of an EMV transaction at [EMV_CTLS_ContinueOfflineExt()]() |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CTLS_PAYMENT_STRUCT](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md) | **[EMV_CTLS_PAYMENT_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-payment-type)** <br>Transaction parameters of an EMV transaction.  |
| typedef struct [EMV_CTLS_APPS_SELECT_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md) | **[EMV_CTLS_APPS_SELECT_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-apps-select-type)** <br>Application selection parameters of an EMV transaction.  |
| typedef struct [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md) | **[EMV_CTLS_START_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-start-type)** <br>struct for interface to [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
| typedef struct [EMV_CTLS_HOST_STRUCT](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md) | **[EMV_CTLS_HOST_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-host-type)** <br>Data structure for host response data. Input for [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) |
| typedef struct [EMV_CTLS_CONT_OFFL_STRUCT](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md) | **[EMV_CTLS_CONT_OFFL_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-cont-offl-type)** <br>Transaction parameters of an EMV transaction at [EMV_CTLS_ContinueOfflineExt()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueofflineext) |

## Types Documentation

### typedef EMV_CTLS_PAYMENT_TYPE

```
typedef struct EMV_CTLS_PAYMENT_STRUCT EMV_CTLS_PAYMENT_TYPE;
```

Transaction parameters of an EMV transaction. 

Part of [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md) typedef for [EMV_CTLS_PAYMENT_STRUCT](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md)


### typedef EMV_CTLS_APPS_SELECT_TYPE

```
typedef struct EMV_CTLS_APPS_SELECT_STRUCT EMV_CTLS_APPS_SELECT_TYPE;
```

Application selection parameters of an EMV transaction. 

Part of [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md) typedef for [EMV_CTLS_APPS_SELECT_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md)


### typedef EMV_CTLS_START_TYPE

```
typedef struct EMV_CTLS_START_STRUCT EMV_CTLS_START_TYPE;
```

struct for interface to [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

### typedef EMV_CTLS_HOST_TYPE

```
typedef struct EMV_CTLS_HOST_STRUCT EMV_CTLS_HOST_TYPE;
```

Data structure for host response data. Input for [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline)

### typedef EMV_CTLS_CONT_OFFL_TYPE

```
typedef struct EMV_CTLS_CONT_OFFL_STRUCT EMV_CTLS_CONT_OFFL_TYPE;
```

Transaction parameters of an EMV transaction at [EMV_CTLS_ContinueOfflineExt()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueofflineext)






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
---
title: Output data

---

# Output data

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



## Modules

| Name           |
| -------------- |
| **[CTLS card types](group___c_l_t_r_x___c_a_r_d_t_y_p_e.md)** <br>Defines for [EMV_CTLS_TRANSRES_TYPE::ctlsCardType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-ctlscardtype).  |
| **[Bitstring with information about the outcome of EMV_CTLS_SetupTransaction()](group___d_e_f___s_e_l_e_c_t_r_e_s___t_r_x_i_n_f_o.md)** <br>Contents of [EMV_CTLS_STARTRES_STRUCT::TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation), [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
| **[EMV_CTLS_SetupTransaction: Which data is included in result struct](group___d_e_f___o_u_t_p_u_t___s_e_l_e_c_t.md)** <br>Contents of the output in [EMV_CTLS_STARTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data), [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
| **[Information which data was provided by the ICC](group___d_e_f___d_f61.md)** <br>Contents of [EMV_CTLS_TRANSRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data).  |
| **[Additional error data](group___d_e_f___d_f62.md)** <br>DF62, 15 bytes, error reference.  |
| **[StartTransaction: Which data was received from the chip](group___d_e_f___d_f61___s_e_l_e_c_t.md)** <br>Contents of [EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data).  |
| **[ContinueOffline/ContinueOnline: Information which data was provided by the ICC](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md)** <br>Contents of [EMV_CT_TRANSRES_TYPE::T_DF61_Info_Received_Data](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data).  |
| **[Additional information in cryptogram information (9F27)](group___c_r_y_p___e_m_v___a_d_k___i_n_f___a_d_d.md)** <br>9F27 (cryptogram information) can carry more information than just AAC, TC, and ARQC. The ICC has the possibility to give back these additional information. Calling application may use these defines to analyse [EMV_CT_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo).  |
| **[Status information](group___s_t_a_t_u_s___i_n_f_o.md)** <br>defines for [EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo) |
| **[Options for fetching TLV data](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md)** <br>`options` for [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CTLS_STARTRES_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md)** <br>Result data of [EMV_CTLS_SetupTransaction()]() |
| struct | **[EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)** <br>Data structure for output data of [EMV_CTLS_ContinueOffline()]() and [EMV_CTLS_ContinueOnline()]() |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CTLS_STARTRES_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md) | **[EMV_CTLS_STARTRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-startres-type)** <br>Result data of [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
| typedef struct [EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md) | **[EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type)** <br>Data structure for output data of [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) and [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) |

## Types Documentation

### typedef EMV_CTLS_STARTRES_TYPE

```
typedef struct EMV_CTLS_STARTRES_STRUCT EMV_CTLS_STARTRES_TYPE;
```

Result data of [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

### typedef EMV_CTLS_TRANSRES_TYPE

```
typedef struct EMV_CTLS_TRANSRES_STRUCT EMV_CTLS_TRANSRES_TYPE;
```

Data structure for output data of [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) and [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline)

Valid data is indicated by [Information which data was provided by the ICC](group___d_e_f___d_f61.md)







-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
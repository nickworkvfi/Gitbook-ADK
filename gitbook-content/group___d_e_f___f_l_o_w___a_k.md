---
hidden: true
title: Application flow capabilities for ExpressPay (Amex)Configuration » Application data
---

[Macros](#define-members)

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31</a>. [More\...](#details)

Collaboration diagram for Application flow capabilities for ExpressPay (Amex):

![](group___d_e_f___f_l_o_w___a_k.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0](#gae8e9e9e0662145e30d3496e425b010b5)   0x01 |
|   | B1b1: (Vel: y VFI: n) Card read transaction (e.g. refund): request ARQC in GENAC1, usually AAC is requested. [More\...](#gae8e9e9e0662145e30d3496e425b010b5)<br/> |
| #define  | [EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0](#ga8332705ff23ab0e61a0f443e90dc7f91)   0x02 |
|   | B1b2: (Vel: y VFI: n) Amex Pre-Authorization with transaction type 30. [More\...](#ga8332705ff23ab0e61a0f443e90dc7f91)<br/> |
| #define  | [EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0](#ga6dcee63318164b41f8faa56677924555)   0x04 |
|   | B1b3: (Vel: y VFI: y) Enable status check for one single unit of currency (1\$ txn is going online for status check) [More\...](#ga6dcee63318164b41f8faa56677924555)<br/> |
| #define  | [EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0](#ga243c60222970749ec9bede5d26acc334)   0x08 |
|   | B1b4: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns. [More\...](#ga243c60222970749ec9bede5d26acc334)<br/> |
| #define  | [EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0](#ga9497aee1e89df6b2c6ac443460173ffa)   0x10 |

## DetailedDescription {#detailed-description}

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0 <a href="#gae8e9e9e0662145e30d3496e425b010b5" id="gae8e9e9e0662145e30d3496e425b010b5"></a>

<p>#define EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0   0x01</p>

B1b1: (Vel: y VFI: n) Card read transaction (e.g. refund): request ARQC in GENAC1, usually AAC is requested.

## EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0 <a href="#ga9497aee1e89df6b2c6ac443460173ffa" id="ga9497aee1e89df6b2c6ac443460173ffa"></a>

<p>#define EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0   0x10</p>

## EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0 <a href="#ga6dcee63318164b41f8faa56677924555" id="ga6dcee63318164b41f8faa56677924555"></a>

<p>#define EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0   0x04</p>

B1b3: (Vel: y VFI: y) Enable status check for one single unit of currency (1\$ txn is going online for status check)

## EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0 <a href="#ga8332705ff23ab0e61a0f443e90dc7f91" id="ga8332705ff23ab0e61a0f443e90dc7f91"></a>

<p>#define EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0   0x02</p>

B1b2: (Vel: y VFI: n) Amex Pre-Authorization with transaction type 30.

Use <a href="group___t_r_a_n_s___t_y_p_e_s.md#gae7c6629294ae36267bfa128f4b25b434">EMV_ADK_TRAN_TYPE_AMEX_PREAUTH</a> for pre-authorization resp. reservation transactions
The modified transaction type is used towards card and put out in <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a89e1907a3fb369ef96d8ae2de716acad">EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType</a>.

{% hint style="info" %}
Pre-Authorization and reservation transactions are equivalent. They are initiated with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga627576793b48b221be2b730980fbd249">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A</a> or <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga9a4143056a3510f541555b4412ebe24b">EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B</a>.
{% endhint %}

## EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0 <a href="#ga243c60222970749ec9bede5d26acc334" id="ga243c60222970749ec9bede5d26acc334"></a>

<p>#define EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0   0x08</p>

B1b4: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns.

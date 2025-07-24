---
hidden: true
title: Application flow capabilities for PayPass (MasterCard)Configuration » Application data
---

[Macros](#define-members)

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31</a>. [More\...](#details)

Collaboration diagram for Application flow capabilities for PayPass (MasterCard):

![](group___d_e_f___f_l_o_w___m_k.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0](#gaded317dee8088fe2d87dd2009d8b6340)   0x01 |
|   | B1b1: (Vel: y VFI: y) Feature Read Balance before GenAC. [More\...](#gaded317dee8088fe2d87dd2009d8b6340)<br/> |
| #define  | [EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0](#ga0f4f5ca0e203affb770f73a2d57cdf22)   0x02 |
|   | B1b2: (Vel: y VFI: y) Feature Read Balance after GenAC. [More\...](#ga0f4f5ca0e203affb770f73a2d57cdf22)<br/> |
| #define  | [EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0](#gaa43ef9549ae63dd49b6d18549f1b6c8b)   0x04 |
|   | B1b3: (Vel: y VFI: n) Enable DataExchange (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>) [More\...](#gaa43ef9549ae63dd49b6d18549f1b6c8b)<br/> |
| #define  | [EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0](#ga55f37593bf09818eebce6cae9686a4a9)   0x08 |
|   | B1b4: (Vel: y VFI: n) Transaction type 17 for MasterCard cash transactions. [More\...](#ga55f37593bf09818eebce6cae9686a4a9)<br/> |
| #define  | [EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0](#ga92950ae6a3cffa6afd857b9c5641fb44)   0x10 |
|   | B1b5: (Vel: y VFI: n) On card read transaction do not force decline but let the kernel do TAC/IAC Action Analysis. [More\...](#ga92950ae6a3cffa6afd857b9c5641fb44)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0 <a href="#ga92950ae6a3cffa6afd857b9c5641fb44" id="ga92950ae6a3cffa6afd857b9c5641fb44"></a>

<p>#define EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0   0x10</p>

B1b5: (Vel: y VFI: n) On card read transaction do not force decline but let the kernel do TAC/IAC Action Analysis.

## EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0 <a href="#gaa43ef9549ae63dd49b6d18549f1b6c8b" id="gaa43ef9549ae63dd49b6d18549f1b6c8b"></a>

<p>#define EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0   0x04</p>

B1b3: (Vel: y VFI: n) Enable DataExchange (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>)

## EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0 <a href="#ga0f4f5ca0e203affb770f73a2d57cdf22" id="ga0f4f5ca0e203affb770f73a2d57cdf22"></a>

<p>#define EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0   0x02</p>

B1b2: (Vel: y VFI: y) Feature Read Balance after GenAC.

## EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0 <a href="#gaded317dee8088fe2d87dd2009d8b6340" id="gaded317dee8088fe2d87dd2009d8b6340"></a>

<p>#define EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0   0x01</p>

B1b1: (Vel: y VFI: y) Feature Read Balance before GenAC.

## EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0 <a href="#ga55f37593bf09818eebce6cae9686a4a9" id="ga55f37593bf09818eebce6cae9686a4a9"></a>

<p>#define EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0   0x08</p>

B1b4: (Vel: y VFI: n) Transaction type 17 for MasterCard cash transactions.

Use <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga3db75cbf58899ee5f717540b65615e53">EMV_ADK_TRAN_TYPE_MASTERCARD_CASH</a> for cash transactions (initiated with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga07981ed86c15f8a4f97bf1ceddece20a">EMV_ADK_TRAN_TYPE_CASH</a>)
The modified transaction type is used towards card and put out in <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a89e1907a3fb369ef96d8ae2de716acad">EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType</a>.

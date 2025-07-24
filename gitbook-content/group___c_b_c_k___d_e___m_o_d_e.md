---
hidden: true
title: Options for DataExchange modeTransaction execution » Callback functions
---

[Macros](#define-members)

Used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>, <a href="group___t_l_v___c_b_c_k.md#gaa5adbd002c7e040e248be3fb7fe7f5ad">TAG_DF8F5A_DE_MODE</a>. [More\...](#details)

Collaboration diagram for Options for DataExchange mode:

![](group___c_b_c_k___d_e___m_o_d_e.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_DE_MODE_STOP](#ga03c59df32e5c52b3e6f5583885d80f3a)   0x00 |
|   | User wishes transaction to terminate. [More\...](#ga03c59df32e5c52b3e6f5583885d80f3a)<br/> |
| #define  | [EMV_CTLS_DE_MODE_CONT](#ga15e5e2816176c45bc87af5294ec20a47)   0x01 |
|   | User wishes transaction processing to continue from point of interruption. [More\...](#ga15e5e2816176c45bc87af5294ec20a47)<br/> |
| #define  | [EMV_CTLS_DE_MODE_MORE](#gaf3c6c87e81a8e8f0bea3375db37a26ae)   0x02 |
|   | User wishes to supply more data. [More\...](#gaf3c6c87e81a8e8f0bea3375db37a26ae)<br/> |

## DetailedDescription {#detailed-description}

Used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>, <a href="group___t_l_v___c_b_c_k.md#gaa5adbd002c7e040e248be3fb7fe7f5ad">TAG_DF8F5A_DE_MODE</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_DE_MODE_CONT <a href="#ga15e5e2816176c45bc87af5294ec20a47" id="ga15e5e2816176c45bc87af5294ec20a47"></a>

<p>#define EMV_CTLS_DE_MODE_CONT   0x01</p>

User wishes transaction processing to continue from point of interruption.

## EMV_CTLS_DE_MODE_MORE <a href="#gaf3c6c87e81a8e8f0bea3375db37a26ae" id="gaf3c6c87e81a8e8f0bea3375db37a26ae"></a>

<p>#define EMV_CTLS_DE_MODE_MORE   0x02</p>

User wishes to supply more data.

## EMV_CTLS_DE_MODE_STOP <a href="#ga03c59df32e5c52b3e6f5583885d80f3a" id="ga03c59df32e5c52b3e6f5583885d80f3a"></a>

<p>#define EMV_CTLS_DE_MODE_STOP   0x00</p>

User wishes transaction to terminate.

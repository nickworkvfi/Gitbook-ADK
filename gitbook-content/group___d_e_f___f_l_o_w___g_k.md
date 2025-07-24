---
hidden: true
title: "Gemalto/Pure: Application flow capabilitiesConfiguration » Application data"
---

[Macros](#define-members)

Defines for <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31</a>. [More\...](#details)

Collaboration diagram for Gemalto/Pure: Application flow capabilities:

![](group___d_e_f___f_l_o_w___g_k.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0](#ga796429ceafb2a3b7d3f36068236e1d7d)   0x01 |
|   | B1b1: (Vel: y VFI: y) Support for special transaction type \"Application Authentication Transaction\", see also <a href="group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#ga6d08c321aeb6c47f6a671cebd429dc60">EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE</a>. [More\...](#ga796429ceafb2a3b7d3f36068236e1d7d)<br/> |
| #define  | [EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0](#ga8a1ccff65b5848f71423b936748cc368)   0x02 |
|   | B1b2: (Vel: y VFI: y) Support for special transaction type \"Retrieve application data elements using GET DATA command\", see also <a href="group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#ga6930bb03d82f6791da8103559c05d2f9">EMV_CTLS_TRAN_TYPE_PURE_GETDATA</a>, leads to invocation of <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>. [More\...](#ga8a1ccff65b5848f71423b936748cc368)<br/> |
| #define  | [EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0](#ga0080e3ed4b67038be346185c35c3af30)   0x04 |
|   | B1b3: (Vel: y VFI: y) Support for special transaction type \"Update application data elements using PUT DATA command\", see also <a href="group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#gaabdbe05a2180b0f425d63013b45d68e4">EMV_CTLS_TRAN_TYPE_PURE_PUTDATA</a>, leads to invocation of <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>. [More\...](#ga0080e3ed4b67038be346185c35c3af30)<br/> |
| #define  | [EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0](#gad9d9812c9da870136a822c5ef0ad6083)   0x08 |
|   | B1b4: (Vel: y VFI: n) Vietnam VCCS special feature: Multiply amount by 100 before using it in GENAC1. [More\...](#gad9d9812c9da870136a822c5ef0ad6083)<br/> |

## DetailedDescription {#detailed-description}

Defines for <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0 <a href="#gad9d9812c9da870136a822c5ef0ad6083" id="gad9d9812c9da870136a822c5ef0ad6083"></a>

<p>#define EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0   0x08</p>

B1b4: (Vel: y VFI: n) Vietnam VCCS special feature: Multiply amount by 100 before using it in GENAC1.

## EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0 <a href="#ga796429ceafb2a3b7d3f36068236e1d7d" id="ga796429ceafb2a3b7d3f36068236e1d7d"></a>

<p>#define EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0   0x01</p>

B1b1: (Vel: y VFI: y) Support for special transaction type \"Application Authentication Transaction\", see also <a href="group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#ga6d08c321aeb6c47f6a671cebd429dc60">EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE</a>.

## EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0 <a href="#ga8a1ccff65b5848f71423b936748cc368" id="ga8a1ccff65b5848f71423b936748cc368"></a>

<p>#define EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0   0x02</p>

B1b2: (Vel: y VFI: y) Support for special transaction type \"Retrieve application data elements using GET DATA command\", see also <a href="group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#ga6930bb03d82f6791da8103559c05d2f9">EMV_CTLS_TRAN_TYPE_PURE_GETDATA</a>, leads to invocation of <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>.

## EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0 <a href="#ga0080e3ed4b67038be346185c35c3af30" id="ga0080e3ed4b67038be346185c35c3af30"></a>

<p>#define EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0   0x04</p>

B1b3: (Vel: y VFI: y) Support for special transaction type \"Update application data elements using PUT DATA command\", see also <a href="group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#gaabdbe05a2180b0f425d63013b45d68e4">EMV_CTLS_TRAN_TYPE_PURE_PUTDATA</a>, leads to invocation of <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>.

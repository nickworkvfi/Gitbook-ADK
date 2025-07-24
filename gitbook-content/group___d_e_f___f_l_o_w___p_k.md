---
hidden: true
title: Application flow capabilities for Visa Asia/PacificConfiguration » Application data
---

[Macros](#define-members)

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31</a>. [More\...](#details)

Collaboration diagram for Application flow capabilities for Visa Asia/Pacific:

![](group___d_e_f___f_l_o_w___p_k.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0](#ga8ed160abfb84cdb673fc9df5a9f2fcbd)   0x01 |
|   | B1b1: (Vel: y VFI: n) Check consistency of track2 equivalent data (<a href="group___e_m_v_c_o___t_a_g_s.md#ga2e6e79fb698c2021efe43366f6517b76">TAG_57_TRACK2_EQUIVALENT</a>) provided by ICC. Validate format and that contents matches to <a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a>. Visa Europe stuff VppT. [More\...](#ga8ed160abfb84cdb673fc9df5a9f2fcbd)<br/> |
| #define  | [EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0](#gae4afb564084f77f676762e5d7c4ab708)   0x02 |
|   | B1b2: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. [More\...](#gae4afb564084f77f676762e5d7c4ab708)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0 <a href="#gae4afb564084f77f676762e5d7c4ab708" id="gae4afb564084f77f676762e5d7c4ab708"></a>

<p>#define EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0   0x02</p>

B1b2: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.

## EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0 <a href="#ga8ed160abfb84cdb673fc9df5a9f2fcbd" id="ga8ed160abfb84cdb673fc9df5a9f2fcbd"></a>

<p>#define EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0   0x01</p>

B1b1: (Vel: y VFI: n) Check consistency of track2 equivalent data (<a href="group___e_m_v_c_o___t_a_g_s.md#ga2e6e79fb698c2021efe43366f6517b76">TAG_57_TRACK2_EQUIVALENT</a>) provided by ICC. Validate format and that contents matches to <a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a>. Visa Europe stuff VppT.

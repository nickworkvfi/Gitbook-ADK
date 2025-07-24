---
hidden: true
title: Application flow capabilities for China Union PayConfiguration » Application data
---

[Macros](#define-members)

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31</a>. [More\...](#details)

Collaboration diagram for Application flow capabilities for China Union Pay:

![](group___d_e_f___f_l_o_w___c_k.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0](#gad274a21065d347a9023a31458db330ff)   0x01 |
|   | B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1\$ txn is going online for status check) [More\...](#gad274a21065d347a9023a31458db330ff)<br/> |
| #define  | [EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0](#ga80ff1a33c4be7c7b4a8201e761ceff87)   0x02 |
|   | B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount. [More\...](#ga80ff1a33c4be7c7b4a8201e761ceff87)<br/> |
| #define  | [EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0](#gac3183c01380da65c97a1b9de5006a445)   0x04 |
|   | B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns. [More\...](#gac3183c01380da65c97a1b9de5006a445)<br/> |
| #define  | [EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0](#gaec283c839f46ed8e424c3c2d45960ff2)   0x08 |
|   | B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data (<a href="group___e_m_v_c_o___t_a_g_s.md#ga2e6e79fb698c2021efe43366f6517b76">TAG_57_TRACK2_EQUIVALENT</a>) provided by ICC. Validate format and that contents matches to <a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a>. Visa Europe stuff VppT. [More\...](#gaec283c839f46ed8e424c3c2d45960ff2)<br/> |
| #define  | [EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0](#ga435a00a783da416db3c802519b9b8c4d)   0x10 |
|   | B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. [More\...](#ga435a00a783da416db3c802519b9b8c4d)<br/> |
| #define  | [EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0](#gaec6910d2373066b07fc29eb8ccf7810c)   0x20 |
|   | B1b6: (Vel: y VFI: n) Per default the legacy fDDA version 0 is switched off. If you want to support it on top of the up date fDDA version 1. you can enable it by setting this bit. [More\...](#gaec6910d2373066b07fc29eb8ccf7810c)<br/> |
| #define  | [EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0](#gaf2b418afb788de9fd5160fe2f77879dd)   0x40 |
|   | B1b7: (Vel: y VFI: y) Do not ask for online PIN and Signature for transactions below CVM Limit when this was requested by card. This bit should be set for Credit / Quasi Credit AIDs according to Ref. \"UPI QuickPass Implementation Guide for Acquirers v1.3.9\": Terminals shall not ask for online PIN when all of below situations are met -QuickPass credit/Quasi credit cards are accepted, -Contactless transaction amount is below CVM limit of the terminal. [More\...](#gaf2b418afb788de9fd5160fe2f77879dd)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0 <a href="#ga435a00a783da416db3c802519b9b8c4d" id="ga435a00a783da416db3c802519b9b8c4d"></a>

<p>#define EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0   0x10</p>

B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.

## EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0 <a href="#gaec283c839f46ed8e424c3c2d45960ff2" id="gaec283c839f46ed8e424c3c2d45960ff2"></a>

<p>#define EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0   0x08</p>

B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data (<a href="group___e_m_v_c_o___t_a_g_s.md#ga2e6e79fb698c2021efe43366f6517b76">TAG_57_TRACK2_EQUIVALENT</a>) provided by ICC. Validate format and that contents matches to <a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a>. Visa Europe stuff VppT.

## EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0 <a href="#gaf2b418afb788de9fd5160fe2f77879dd" id="gaf2b418afb788de9fd5160fe2f77879dd"></a>

<p>#define EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0   0x40</p>

B1b7: (Vel: y VFI: y) Do not ask for online PIN and Signature for transactions below CVM Limit when this was requested by card. This bit should be set for Credit / Quasi Credit AIDs according to Ref. \"UPI QuickPass Implementation Guide for Acquirers v1.3.9\": Terminals shall not ask for online PIN when all of below situations are met -QuickPass credit/Quasi credit cards are accepted, -Contactless transaction amount is below CVM limit of the terminal.

## EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0 <a href="#gaec6910d2373066b07fc29eb8ccf7810c" id="gaec6910d2373066b07fc29eb8ccf7810c"></a>

<p>#define EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0   0x20</p>

B1b6: (Vel: y VFI: n) Per default the legacy fDDA version 0 is switched off. If you want to support it on top of the up date fDDA version 1. you can enable it by setting this bit.

## EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0 <a href="#gad274a21065d347a9023a31458db330ff" id="gad274a21065d347a9023a31458db330ff"></a>

<p>#define EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0   0x01</p>

B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1\$ txn is going online for status check)

## EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0 <a href="#gac3183c01380da65c97a1b9de5006a445" id="gac3183c01380da65c97a1b9de5006a445"></a>

<p>#define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0   0x04</p>

B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns.

## EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0 <a href="#ga80ff1a33c4be7c7b4a8201e761ceff87" id="ga80ff1a33c4be7c7b4a8201e761ceff87"></a>

<p>#define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0   0x02</p>

B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount.

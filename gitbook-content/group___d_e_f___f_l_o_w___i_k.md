---
hidden: true
title: Application flow capabilities for InteracConfiguration » Application data
---

[Macros](#define-members)

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31</a>. [More\...](#details)

Collaboration diagram for Application flow capabilities for Interac:

![](group___d_e_f___f_l_o_w___i_k.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0](#gadb106fadd7e2b4501de5b470d2ff39d6)   0x01 |
|   | B1b1: (Vel: y VFI: n) On first GAC do request CDA despite cryptogram type is ARQC (P1 = \'90\'). [More\...](#gadb106fadd7e2b4501de5b470d2ff39d6)<br/> |
| #define  | [EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0](#ga948f6468b159e95a5d38148cbfe4a4ba)   0x02 |
|   | B1b2: (Vel: y VFI: n) Do not force AppAction to decline and do not modify and TAC or limit. Note: Unless otherwise specified by regional needs, Interac flow should be enabled for Interac AIDs. [More\...](#ga948f6468b159e95a5d38148cbfe4a4ba)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0 <a href="#ga948f6468b159e95a5d38148cbfe4a4ba" id="ga948f6468b159e95a5d38148cbfe4a4ba"></a>

<p>#define EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0   0x02</p>

B1b2: (Vel: y VFI: n) Do not force AppAction to decline and do not modify and TAC or limit. Note: Unless otherwise specified by regional needs, Interac flow should be enabled for Interac AIDs.

## EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0 <a href="#gadb106fadd7e2b4501de5b470d2ff39d6" id="gadb106fadd7e2b4501de5b470d2ff39d6"></a>

<p>#define EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0   0x01</p>

B1b1: (Vel: y VFI: n) On first GAC do request CDA despite cryptogram type is ARQC (P1 = \'90\').

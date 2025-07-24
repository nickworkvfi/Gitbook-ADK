---
hidden: true
title: Application flow capabilities for RuPayConfiguration » Application data
---

[Macros](#define-members)

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31</a>. [More\...](#details)

Collaboration diagram for Application flow capabilities for RuPay:

![](group___d_e_f___f_l_o_w___r_k.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0](#ga33282fc4b7fd1dad49860f706162f428)   0x01 |
|   | B1b1: (Vel: y VFI: y) Rupay Service Feature Enable/Disable. [More\...](#ga33282fc4b7fd1dad49860f706162f428)<br/> |
| #define  | [EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0](#ga0884bb99d89739151fe5c798c4d4b38d)   0x02 |
|   | B1b2: (Vel: y VFI: y) Rupay Torn Transaction Indicator. [More\...](#ga0884bb99d89739151fe5c798c4d4b38d)<br/> |
| #define  | [EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0](#ga73077e22849c31bc1f4da58cf85c2a20)   0x04 |
|   | B1b3: (Vel: n VFI: y) Perform READ RECORD of SFI 1 only when qDDA is disabled. [More\...](#ga73077e22849c31bc1f4da58cf85c2a20)<br/> |
| #define  | [EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0](#gad8d0cfd112058cb710197b8553ba3e6d)   0x08 |
|   | B1b4: (Vel: y VFI: n) Generate new random number (\'9F37\') with each kernel activation, that is 2nd GAC. [More\...](#gad8d0cfd112058cb710197b8553ba3e6d)<br/> |
| #define  | [EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0](#gae3fee247f392ef08bc6fd36d668d21ab)   0x10 |
|   | B1b5: (Vel: y VFI: n) Online PIN supported. [More\...](#gae3fee247f392ef08bc6fd36d668d21ab)<br/> |
| #define  | [EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0](#ga04d1d48aa25dd29cbc70183b0ded3f9a)   0x20 |
|   | B1b6: (Vel: y VFI: n) Signature supported. [More\...](#ga04d1d48aa25dd29cbc70183b0ded3f9a)<br/> |
| #define  | [EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0](#ga950e51466cfc41cb550ffe30dd4afc68)   0x40 |
|   | B1b7: (Vel: y VFI: n) On-Device CVM (mobile CVM) supported. [More\...](#ga950e51466cfc41cb550ffe30dd4afc68)<br/> |
| #define  | [EMV_CTLS_FLOW_RK_CVM_REQUIRED_0](#gacc3495c7520930f881519bfdb5c418eb)   0x80 |
|   | B1b8: (Vel: y VFI: n) CVM required, transaction will fail in case card decision is \"no CVM) [More\...](#gacc3495c7520930f881519bfdb5c418eb)<br/> |
| #define  | [EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1](#gad5011bbb80264100d12859ca1f3cb0da)   0x01 |
|   | B2b1: (Vel: y VFI: n) Issuer script processing supported. [More\...](#gad5011bbb80264100d12859ca1f3cb0da)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_FLOW_RK_CVM_REQUIRED_0 <a href="#gacc3495c7520930f881519bfdb5c418eb" id="gacc3495c7520930f881519bfdb5c418eb"></a>

<p>#define EMV_CTLS_FLOW_RK_CVM_REQUIRED_0   0x80</p>

B1b8: (Vel: y VFI: n) CVM required, transaction will fail in case card decision is \"no CVM)

## EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1 <a href="#gad5011bbb80264100d12859ca1f3cb0da" id="gad5011bbb80264100d12859ca1f3cb0da"></a>

<p>#define EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1   0x01</p>

B2b1: (Vel: y VFI: n) Issuer script processing supported.

## EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0 <a href="#gad8d0cfd112058cb710197b8553ba3e6d" id="gad8d0cfd112058cb710197b8553ba3e6d"></a>

<p>#define EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0   0x08</p>

B1b4: (Vel: y VFI: n) Generate new random number (\'9F37\') with each kernel activation, that is 2nd GAC.

## EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0 <a href="#ga950e51466cfc41cb550ffe30dd4afc68" id="ga950e51466cfc41cb550ffe30dd4afc68"></a>

<p>#define EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0   0x40</p>

B1b7: (Vel: y VFI: n) On-Device CVM (mobile CVM) supported.

## EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0 <a href="#gae3fee247f392ef08bc6fd36d668d21ab" id="gae3fee247f392ef08bc6fd36d668d21ab"></a>

<p>#define EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0   0x10</p>

B1b5: (Vel: y VFI: n) Online PIN supported.

## EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0 <a href="#ga73077e22849c31bc1f4da58cf85c2a20" id="ga73077e22849c31bc1f4da58cf85c2a20"></a>

<p>#define EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0   0x04</p>

B1b3: (Vel: n VFI: y) Perform READ RECORD of SFI 1 only when qDDA is disabled.

## EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0 <a href="#ga33282fc4b7fd1dad49860f706162f428" id="ga33282fc4b7fd1dad49860f706162f428"></a>

<p>#define EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0   0x01</p>

B1b1: (Vel: y VFI: y) Rupay Service Feature Enable/Disable.

## EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0 <a href="#ga04d1d48aa25dd29cbc70183b0ded3f9a" id="ga04d1d48aa25dd29cbc70183b0ded3f9a"></a>

<p>#define EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0   0x20</p>

B1b6: (Vel: y VFI: n) Signature supported.

## EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0 <a href="#ga0884bb99d89739151fe5c798c4d4b38d" id="ga0884bb99d89739151fe5c798c4d4b38d"></a>

<p>#define EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0   0x02</p>

B1b2: (Vel: y VFI: y) Rupay Torn Transaction Indicator.

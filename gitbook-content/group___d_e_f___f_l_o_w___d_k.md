---
hidden: true
title: Application flow capabilities for Discover/DinersConfiguration » Application data
---

[Macros](#define-members)

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31</a>. [More\...](#details)

Collaboration diagram for Application flow capabilities for Discover/Diners:

![](group___d_e_f___f_l_o_w___d_k.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0](#ga65769e0f149655db7aa96fb0d538ebeb)   0x01 |
|   | B1b1: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. [More\...](#ga65769e0f149655db7aa96fb0d538ebeb)<br/> |
| #define  | [EMV_CTLS_FLOW_DK_DATA_STORAGE_0](#ga89cea067a12893a7b8d6a1b6c16e56cb)   0x02 |
|   | B1b2: (Vel: y VFI: n) DPAS-2: Activate kernel feature Data Storage. [More\...](#ga89cea067a12893a7b8d6a1b6c16e56cb)<br/> |
| #define  | [EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0](#gabe22ef68a0ff600e98137b7f991de73e)   0x04 |
|   | B1b3: (Vel: y VFI: n) DPAS-2: Activate kernel feature Extended Logging. [More\...](#gabe22ef68a0ff600e98137b7f991de73e)<br/> |
| #define  | [EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0](#gab1fb9acc549e5d4ddb8d655c2ee16256)   0x08 |
|   | B1b4: (Vel: y VFI: n) DPAS-2: Activate kernel feature Torn Transaction Recovery. [More\...](#gab1fb9acc549e5d4ddb8d655c2ee16256)<br/> |
| #define  | [EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0](#ga8190973658aa76f6d2a178316dc136cb)   0x10 |
|   | B1b5: (Vel: y VFI: n) DPAS-2: Activate kernel feature Deferred Authorisation. [More\...](#ga8190973658aa76f6d2a178316dc136cb)<br/> |
| #define  | [EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0](#gaa3830f4c8980209a5fad6cdafe035523)   0x20 |
|   | B1b6: (Vel: y VFI: y) Enable status check for one single unit of currency (1\$ txn is going online for status check) [More\...](#gaa3830f4c8980209a5fad6cdafe035523)<br/> |
| #define  | [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0](#ga3a7b12de3cd0af9ed7c2fee514c880b2)   0x40 |
|   | B1b7: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0](#ga0b341f033ad1139d78163ba236f6b0cf "B1b8: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txn..."). [More\...](#ga3a7b12de3cd0af9ed7c2fee514c880b2)<br/> |
| #define  | [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0](#ga0b341f033ad1139d78163ba236f6b0cf)   0x80 |
|   | B1b8: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0](#ga3a7b12de3cd0af9ed7c2fee514c880b2 "B1b7: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount - not t..."). [More\...](#ga0b341f033ad1139d78163ba236f6b0cf)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0 <a href="#ga65769e0f149655db7aa96fb0d538ebeb" id="ga65769e0f149655db7aa96fb0d538ebeb"></a>

<p>#define EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0   0x01</p>

B1b1: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.

## EMV_CTLS_FLOW_DK_DATA_STORAGE_0 <a href="#ga89cea067a12893a7b8d6a1b6c16e56cb" id="ga89cea067a12893a7b8d6a1b6c16e56cb"></a>

<p>#define EMV_CTLS_FLOW_DK_DATA_STORAGE_0   0x02</p>

B1b2: (Vel: y VFI: n) DPAS-2: Activate kernel feature Data Storage.

## EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0 <a href="#ga8190973658aa76f6d2a178316dc136cb" id="ga8190973658aa76f6d2a178316dc136cb"></a>

<p>#define EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0   0x10</p>

B1b5: (Vel: y VFI: n) DPAS-2: Activate kernel feature Deferred Authorisation.

## EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0 <a href="#gabe22ef68a0ff600e98137b7f991de73e" id="gabe22ef68a0ff600e98137b7f991de73e"></a>

<p>#define EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0   0x04</p>

B1b3: (Vel: y VFI: n) DPAS-2: Activate kernel feature Extended Logging.

## EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0 <a href="#gaa3830f4c8980209a5fad6cdafe035523" id="gaa3830f4c8980209a5fad6cdafe035523"></a>

<p>#define EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0   0x20</p>

B1b6: (Vel: y VFI: y) Enable status check for one single unit of currency (1\$ txn is going online for status check)

## EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0 <a href="#gab1fb9acc549e5d4ddb8d655c2ee16256" id="gab1fb9acc549e5d4ddb8d655c2ee16256"></a>

<p>#define EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0   0x08</p>

B1b4: (Vel: y VFI: n) DPAS-2: Activate kernel feature Torn Transaction Recovery.

## EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0 <a href="#ga0b341f033ad1139d78163ba236f6b0cf" id="ga0b341f033ad1139d78163ba236f6b0cf"></a>

<p>#define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0   0x80</p>

B1b8: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0](#ga3a7b12de3cd0af9ed7c2fee514c880b2 "B1b7: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount - not t...").

## EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0 <a href="#ga3a7b12de3cd0af9ed7c2fee514c880b2" id="ga3a7b12de3cd0af9ed7c2fee514c880b2"></a>

<p>#define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0   0x40</p>

B1b7: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0](#ga0b341f033ad1139d78163ba236f6b0cf "B1b8: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txn...").

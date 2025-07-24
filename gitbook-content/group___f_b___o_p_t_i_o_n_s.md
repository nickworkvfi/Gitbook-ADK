---
hidden: true
title: Fallback options for magstripe applicationsTransaction execution » Input data
---

[Macros](#define-members)

for use in `ucFallback` of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ga0c65aff49d9df61c17f0b6b85b52e9a9">EMV_CT_FALLBCK_MSR_TYPE</a> [More\...](#details)

Collaboration diagram for Fallback options for magstripe applications:

![](group___f_b___o_p_t_i_o_n_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [FB_NEVER](#gaf411b8d08cfd9258bfc1b8eb2464e6f4)   0x00 |
|   | fallback to magstripe forbidden [More\...](#gaf411b8d08cfd9258bfc1b8eb2464e6f4)<br/> |
| #define  | [FB_CHIP_APP](#gaf3221678e060b661672ae4ba67503528)   0x01 |
|   | fallback allowed, but not in case of [More\...](#gaf3221678e060b661672ae4ba67503528)<br/> |
| #define  | [FB_APP](#ga2a96d63475c69a7696c1178100c4b036)   0x02 |
|   | fallback allowed, but not in case a chip application assigned to this magstripe application is blocked [More\...](#ga2a96d63475c69a7696c1178100c4b036)<br/> |
| #define  | [FB_CHIP](#ga0cd181faf46ced33324004003baee1c4)   0x03 |
|   | fallback allowed but not in case of blocked chip [More\...](#ga0cd181faf46ced33324004003baee1c4)<br/> |
| #define  | [FB_ALWAYS](#gabe684801add6449fabd08f948214543a)   0x04 |
|   | fallback allowed in every case [More\...](#gabe684801add6449fabd08f948214543a)<br/> |

## DetailedDescription {#detailed-description}

for use in `ucFallback` of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ga0c65aff49d9df61c17f0b6b85b52e9a9">EMV_CT_FALLBCK_MSR_TYPE</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## FB_ALWAYS <a href="#gabe684801add6449fabd08f948214543a" id="gabe684801add6449fabd08f948214543a"></a>

<p>#define FB_ALWAYS   0x04</p>

fallback allowed in every case

## FB_APP <a href="#ga2a96d63475c69a7696c1178100c4b036" id="ga2a96d63475c69a7696c1178100c4b036"></a>

<p>#define FB_APP   0x02</p>

fallback allowed, but not in case a chip application assigned to this magstripe application is blocked

## FB_CHIP <a href="#ga0cd181faf46ced33324004003baee1c4" id="ga0cd181faf46ced33324004003baee1c4"></a>

<p>#define FB_CHIP   0x03</p>

fallback allowed but not in case of blocked chip

## FB_CHIP_APP <a href="#gaf3221678e060b661672ae4ba67503528" id="gaf3221678e060b661672ae4ba67503528"></a>

<p>#define FB_CHIP_APP   0x01</p>

fallback allowed, but not in case of

1.  blocked chip -# a chip application assigned to this magstripe application is blocked

## FB_NEVER <a href="#gaf411b8d08cfd9258bfc1b8eb2464e6f4" id="gaf411b8d08cfd9258bfc1b8eb2464e6f4"></a>

<p>#define FB_NEVER   0x00</p>

fallback to magstripe forbidden

---
hidden: true
title: technologies used in TecSupport_DFAB30Configuration » Application data
---

[Macros](#define-members)

Collaboration diagram for technologies used in TecSupport_DFAB30:

![](group___d_e_f___t_e_c.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_TEC_CHIP](#gab459c64a86e4a8b83c94e5cc7db0909b)   0x01 |
|   | Chip Support. [More\...](#gab459c64a86e4a8b83c94e5cc7db0909b)<br/> |
| #define  | [EMV_CTLS_TEC_MSR](#ga20e71bf0a9eaf98eaf4ae60e8fd87e96)   0x02 |
|   | MSR Support. [More\...](#ga20e71bf0a9eaf98eaf4ae60e8fd87e96)<br/> |

## DetailedDescription {#detailed-description}

It\'s a bitlist, so values can be combined.
Used in <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_VK_STRUCT::TecSupport_DFAB30</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_DK_STRUCT::TecSupport_DFAB30</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_CK_STRUCT::TecSupport_DFAB30</a>, <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_AK_STRUCT::TecSupport_DFAB30</a>
For Discover this parameter (DFAB30) has a specific meaning in terms of the legacy DISCOVER ZIP: 0x01 = DPAS Chip, 0x02 = DPAS MSR, 0x00 = LEGACY DISCOVER ZIP

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_TEC_CHIP <a href="#gab459c64a86e4a8b83c94e5cc7db0909b" id="gab459c64a86e4a8b83c94e5cc7db0909b"></a>

<p>#define EMV_CTLS_TEC_CHIP   0x01</p>

Chip Support.

## EMV_CTLS_TEC_MSR <a href="#ga20e71bf0a9eaf98eaf4ae60e8fd87e96" id="ga20e71bf0a9eaf98eaf4ae60e8fd87e96"></a>

<p>#define EMV_CTLS_TEC_MSR   0x02</p>

MSR Support.

---
hidden: true
title: Handling of tags not defined by EMVCoGeneral topics » Special tag handling
---

[Macros](#define-members)

Collaboration diagram for Handling of tags not defined by EMVCo:

![](group___t_a_g_s___n_o_n___e_m_v_c_o.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS](#ga8ef29971a38240cf487e6bbbc683836f)   25 |
|   | Max. number of non-EMVCo-tags included in additional tags (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb1d4cd4bf1913ad2a42cb0764fcc619">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20</a> and <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a04b972642e943c8509ed2d1802f2edc1">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21</a>) [More\...](#ga8ef29971a38240cf487e6bbbc683836f)<br/> |
| #define  | [EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS](#ga21e810f71a8b5c69843e782fe4b5c75e)   1230 |
|   | Calculation rule: max. tag value size + 10 bytes/tag. [More\...](#ga21e810f71a8b5c69843e782fe4b5c75e)<br/> |
| #define  | [EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS](#gac7db871f8a9da3da95c13bc1dbd052ca)   20 |
|   | Max. number of non-EMVCo-tags included in additional tags (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad7a6039ab1aa91113c012eab4293d664">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM</a> and <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acd89bdbc00f19a23befec2eed0ff7b00">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD</a>) [More\...](#gac7db871f8a9da3da95c13bc1dbd052ca)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS <a href="#gac7db871f8a9da3da95c13bc1dbd052ca" id="gac7db871f8a9da3da95c13bc1dbd052ca"></a>

<p>#define EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS   20</p>

Max. number of non-EMVCo-tags included in additional tags (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad7a6039ab1aa91113c012eab4293d664">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM</a> and <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acd89bdbc00f19a23befec2eed0ff7b00">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD</a>)

## EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS <a href="#ga21e810f71a8b5c69843e782fe4b5c75e" id="ga21e810f71a8b5c69843e782fe4b5c75e"></a>

<p>#define EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS   1230</p>

Calculation rule: max. tag value size + 10 bytes/tag.

## EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS <a href="#ga8ef29971a38240cf487e6bbbc683836f" id="ga8ef29971a38240cf487e6bbbc683836f"></a>

<p>#define EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS   25</p>

Max. number of non-EMVCo-tags included in additional tags (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb1d4cd4bf1913ad2a42cb0764fcc619">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20</a> and <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a04b972642e943c8509ed2d1802f2edc1">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21</a>)

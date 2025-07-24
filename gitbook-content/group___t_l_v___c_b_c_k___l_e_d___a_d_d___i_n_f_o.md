---
hidden: true
title: "LED callback: Additional informationGeneral topics » Serialization » BER TLV tags used by EMV ADK » Verifone internal tags » Primitive tags » TLV tags for callback functions"
---

[Macros](#define-members)

Additional information for LED switching, used for <a href="group___t_l_v___c_b_c_k.md#ga49b42df1c0b4c78b9e954b1c24aa8e3d">TAG_DF8F60_LED_ADD_INFO</a>. [More\...](#details)

Collaboration diagram for LED callback: Additional information:

![](group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [CBCK_LED_ADD_INFO_DONT_TRACE](#gacdd5936384668992cd4a8e21cd835495)   0x01 |
|   | Don\'t trace this callback in client interface trace, reason: e.g. LED blinking would fill trace buffer with needless information. [More\...](#gacdd5936384668992cd4a8e21cd835495)<br/> |

## DetailedDescription {#detailed-description}

Additional information for LED switching, used for <a href="group___t_l_v___c_b_c_k.md#ga49b42df1c0b4c78b9e954b1c24aa8e3d">TAG_DF8F60_LED_ADD_INFO</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## CBCK_LED_ADD_INFO_DONT_TRACE <a href="#gacdd5936384668992cd4a8e21cd835495" id="gacdd5936384668992cd4a8e21cd835495"></a>

<p>#define CBCK_LED_ADD_INFO_DONT_TRACE   0x01</p>

Don\'t trace this callback in client interface trace, reason: e.g. LED blinking would fill trace buffer with needless information.

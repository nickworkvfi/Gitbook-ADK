---
hidden: true
title: Proprietary tags used by Gemalto/PureGeneral topics » Serialization » BER TLV tags used by EMV ADK
---

[Macros](#define-members)

Collaboration diagram for Proprietary tags used by Gemalto/Pure:

![](group___g_e_m_a_l_t_o___t_a_g_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_9F71_PURE_GDDOL_RESULTS](#gad32151033eea1b96361b934efb607732)   0x9F71 |
|   | GDDOL Resulting Buffer. Its content is the result of the concatenation of the data elements listed in GDDOL. See <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>. [More\...](#gad32151033eea1b96361b934efb607732)<br/> |
| #define  | [TAG_9F74_PURE_DATA_UPDATE_RESULT](#gaeedc5961a9f7c8350b38f8578bbf8d17)   0x9F74 |
|   | Data Elements Update Result. Result of the data element update requested by the reader using Memory Slot Update Template. See <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>. [More\...](#gaeedc5961a9f7c8350b38f8578bbf8d17)<br/> |
| #define  | [TAG_9F76_PURE_TERM_TRX_DATA](#ga2481f5687b7d5ecaef77e9b9bdca2155)   0x9F76 |
|   | Terminal transaction data. [More\...](#ga2481f5687b7d5ecaef77e9b9bdca2155)<br/> |
| #define  | [TAG_BF70_PURE_PUT_DATA_MSUT](#gaca9e3bd5d28bc64cc520763e71144630)   0xBF70 |
|   | Used in <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>. [More\...](#gaca9e3bd5d28bc64cc520763e71144630)<br/> |
| #define  | [TAG_BF71_PURE_GET_DATA_MSRT](#ga7a020ead3ac5f45c250ea24b2e86e0f0)   0xBF71 |
|   | Memory Slot Read Template. This data element provides to the PURE kernel, the list of data elements to read. Used in <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>. [More\...](#ga7a020ead3ac5f45c250ea24b2e86e0f0)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_9F71_PURE_GDDOL_RESULTS <a href="#gad32151033eea1b96361b934efb607732" id="gad32151033eea1b96361b934efb607732"></a>

<p>#define TAG_9F71_PURE_GDDOL_RESULTS   0x9F71</p>

GDDOL Resulting Buffer. Its content is the result of the concatenation of the data elements listed in GDDOL. See <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>.

## TAG_9F74_PURE_DATA_UPDATE_RESULT <a href="#gaeedc5961a9f7c8350b38f8578bbf8d17" id="gaeedc5961a9f7c8350b38f8578bbf8d17"></a>

<p>#define TAG_9F74_PURE_DATA_UPDATE_RESULT   0x9F74</p>

Data Elements Update Result. Result of the data element update requested by the reader using Memory Slot Update Template. See <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>.

## TAG_9F76_PURE_TERM_TRX_DATA <a href="#ga2481f5687b7d5ecaef77e9b9bdca2155" id="ga2481f5687b7d5ecaef77e9b9bdca2155"></a>

<p>#define TAG_9F76_PURE_TERM_TRX_DATA   0x9F76</p>

Terminal transaction data.

Allows the Terminal Application to communicate transaction-related information to the Card Payment application. Depending on card payment application setting, this information may participate in the card payment application risk management or may be inserted inside the card payment application transaction log.
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaecc0e86802f7f72a49f6d0541c47ce8">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalTransactionData_9F76</a>

## TAG_BF70_PURE_PUT_DATA_MSUT <a href="#gaca9e3bd5d28bc64cc520763e71144630" id="gaca9e3bd5d28bc64cc520763e71144630"></a>

<p>#define TAG_BF70_PURE_PUT_DATA_MSUT   0xBF70</p>

Used in <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>.

Memory Slot Update Template. This data element provides to the PURE kernel, the list of data elements to update using the PUT DATA.

## TAG_BF71_PURE_GET_DATA_MSRT <a href="#ga7a020ead3ac5f45c250ea24b2e86e0f0" id="ga7a020ead3ac5f45c250ea24b2e86e0f0"></a>

<p>#define TAG_BF71_PURE_GET_DATA_MSRT   0xBF71</p>

Memory Slot Read Template. This data element provides to the PURE kernel, the list of data elements to read. Used in <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gab3c66f8374aaddaef98194d8135acd79">TAG_BF18_CBK_PURE_GET_PUT_DATA</a>.

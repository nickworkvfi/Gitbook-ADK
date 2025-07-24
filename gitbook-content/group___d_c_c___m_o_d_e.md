---
hidden: true
title: DCC modeTransaction execution » Callback functions
---

[Macros](#define-members)

Used to carry decision given back by <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gaf335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>)
TLV tag <a href="group___t_l_v___c_b_c_k___t_l_v.md#ga866150b1aa87d89f0783c4dd4eeb3d59">TAG_DF7D_CBK_DCC_CHECK</a>. [More\...](#details)

Collaboration diagram for DCC mode:

![](group___d_c_c___m_o_d_e.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [MODE_DCC_NO_TRX_CONTINUE](#gab16895363cf9883dd307f4636575467d)   0 |
|   | No DCC: Continue transaction with original amount, floor limit, \... [More\...](#gab16895363cf9883dd307f4636575467d)<br/> |
| #define  | [MODE_DCC_YES_TRX_CONTINUE](#ga3013f7c194336abee82578c1f8472bd8)   1 |
|   | DCC requested: Continue transaction with returned amount, floor limit, \... [More\...](#ga3013f7c194336abee82578c1f8472bd8)<br/> |
| #define  | [MODE_DCC_NO_TRX_ABORT](#gab553f1d2e907b985fd0b3ba9b600b830)   2 |
|   | Cashier requested abort: Transaction abort, display <a href="group___a_p_p_l_i___t_e_x_t_s.md#gafc7f3b612dd3b550ffe3c68c5cf091cb">EMV_ADK_TXT_PROCESSING_ERROR</a> and <a href="group___a_p_p_l_i___t_e_x_t_s.md#gae9a6dcc7dff865a5dc948c5ff0dd93ae">EMV_ADK_TXT_REMOVE_CARD</a>. [More\...](#gab553f1d2e907b985fd0b3ba9b600b830)<br/> |
| #define  | [MODE_DCC_YES_TRX_ABORT](#ga39f2bb07ab592bed46fc75aeb756da19)   3 |
|   | DCC requested, but transaction must be restarted: Transaction abort, no text display. [More\...](#ga39f2bb07ab592bed46fc75aeb756da19)<br/> |

## DetailedDescription {#detailed-description}

Used to carry decision given back by <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gaf335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>)
TLV tag <a href="group___t_l_v___c_b_c_k___t_l_v.md#ga866150b1aa87d89f0783c4dd4eeb3d59">TAG_DF7D_CBK_DCC_CHECK</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## MODE_DCC_NO_TRX_ABORT <a href="#gab553f1d2e907b985fd0b3ba9b600b830" id="gab553f1d2e907b985fd0b3ba9b600b830"></a>

<p>#define MODE_DCC_NO_TRX_ABORT   2</p>

Cashier requested abort: Transaction abort, display <a href="group___a_p_p_l_i___t_e_x_t_s.md#gafc7f3b612dd3b550ffe3c68c5cf091cb">EMV_ADK_TXT_PROCESSING_ERROR</a> and <a href="group___a_p_p_l_i___t_e_x_t_s.md#gae9a6dcc7dff865a5dc948c5ff0dd93ae">EMV_ADK_TXT_REMOVE_CARD</a>.

## MODE_DCC_NO_TRX_CONTINUE <a href="#gab16895363cf9883dd307f4636575467d" id="gab16895363cf9883dd307f4636575467d"></a>

<p>#define MODE_DCC_NO_TRX_CONTINUE   0</p>

No DCC: Continue transaction with original amount, floor limit, \...

## MODE_DCC_YES_TRX_ABORT <a href="#ga39f2bb07ab592bed46fc75aeb756da19" id="ga39f2bb07ab592bed46fc75aeb756da19"></a>

<p>#define MODE_DCC_YES_TRX_ABORT   3</p>

DCC requested, but transaction must be restarted: Transaction abort, no text display.

## MODE_DCC_YES_TRX_CONTINUE <a href="#ga3013f7c194336abee82578c1f8472bd8" id="ga3013f7c194336abee82578c1f8472bd8"></a>

<p>#define MODE_DCC_YES_TRX_CONTINUE   1</p>

DCC requested: Continue transaction with returned amount, floor limit, \...

---
hidden: true
title: Domestic callback informationTransaction execution » Callback functions
---

[Macros](#define-members)

Information flags for <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8f31676739de9253f1192a44eadaa19a">TAG_DF5C_DOM_INFO</a> in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>) [More\...](#details)

Collaboration diagram for Domestic callback information:

![](group___c_b_c_k___d_o_m___i_n_f_o.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [DOM_INFO_LEN](#ga80a09039edb34fb64145aa9235cf0b79)   3 |
|   | Length of `pucDomInfo` in bytes. [More\...](#ga80a09039edb34fb64145aa9235cf0b79)<br/> |
| #define  | [DOM_INFO_ICC_REQ_AMOUNT](#gaeb3b36a8f69dd8add72da9aba3ec3c71)   0x01 |
|   | ICC already requested transaction amount (e.g. in PDOL). Amount change for running transaction is forbidden. [More\...](#gaeb3b36a8f69dd8add72da9aba3ec3c71)<br/> |
| #define  | [DOM_INFO_ICC_REQ_TRANSTYPE](#ga6e2647169399c0dde5bf1b4ed78d8c62)   0x02 |
|   | ICC already requested transaction type (e.g. in PDOL). Transaction type change for running transaction is forbidden. [More\...](#ga6e2647169399c0dde5bf1b4ed78d8c62)<br/> |

## DetailedDescription {#detailed-description}

Information flags for <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8f31676739de9253f1192a44eadaa19a">TAG_DF5C_DOM_INFO</a> in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>)

## MacroDefinition Documentation {#macro-definition-documentation}

## DOM_INFO_ICC_REQ_AMOUNT <a href="#gaeb3b36a8f69dd8add72da9aba3ec3c71" id="gaeb3b36a8f69dd8add72da9aba3ec3c71"></a>

<p>#define DOM_INFO_ICC_REQ_AMOUNT   0x01</p>

ICC already requested transaction amount (e.g. in PDOL). Amount change for running transaction is forbidden.

## DOM_INFO_ICC_REQ_TRANSTYPE <a href="#ga6e2647169399c0dde5bf1b4ed78d8c62" id="ga6e2647169399c0dde5bf1b4ed78d8c62"></a>

<p>#define DOM_INFO_ICC_REQ_TRANSTYPE   0x02</p>

ICC already requested transaction type (e.g. in PDOL). Transaction type change for running transaction is forbidden.

## DOM_INFO_LEN <a href="#ga80a09039edb34fb64145aa9235cf0b79" id="ga80a09039edb34fb64145aa9235cf0b79"></a>

<p>#define DOM_INFO_LEN   3</p>

Length of `pucDomInfo` in bytes.

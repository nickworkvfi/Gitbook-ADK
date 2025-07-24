---
hidden: true
title: Return valuesTransaction execution » Callback functions » Definitions for PIN Input callback function
---

[Macros](#define-members)

Return values used by calling application for PIN input callback function. [More\...](#details)

Collaboration diagram for Return values:

![](group___a_d_k___p_i_n___r_e_t_u_r_n.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CT_PIN_INPUT_OKAY](#ga6d46e6b2aa75de94de0855301068a093)   0 |
|   | PIN input was successful. [More\...](#ga6d46e6b2aa75de94de0855301068a093)<br/> |
| #define  | [EMV_CT_PIN_INPUT_COMM_ERR](#ga6e1606e2c165d4f4af132d23f6585e37)   1 |
|   | Communication error. [More\...](#ga6e1606e2c165d4f4af132d23f6585e37)<br/> |
| #define  | [EMV_CT_PIN_INPUT_ABORT](#gaed61dc1a7482b607ebad612b3f2d7508)   2 |
|   | Customer canceled. [More\...](#gaed61dc1a7482b607ebad612b3f2d7508)<br/> |
| #define  | [EMV_CT_PIN_INPUT_BYPASS](#ga5364807f6ce1265fa8f8e0228db9717c)   3 |
|   | Customer chose \"bypass PIN entry\". [More\...](#ga5364807f6ce1265fa8f8e0228db9717c)<br/> |
| #define  | [EMV_CT_PIN_INPUT_TIMEOUT](#ga71e47e61824568f46a9c9ed547ef206b)   4 |
|   | Timeout. [More\...](#ga71e47e61824568f46a9c9ed547ef206b)<br/> |
| #define  | [EMV_CT_PIN_INPUT_OTHER_ERR](#ga783dde28172a0a5cbe376bd56ece1a90)   5 |
|   | Other error. [More\...](#ga783dde28172a0a5cbe376bd56ece1a90)<br/> |
| #define  | [EMV_CT_PIN_UNCRIT_TIMEOUT](#ga032c595c93f6ef2e1a3661fe9de0f197)   6 |
|   | uncritical timeout (no immediate abort on timeout) [More\...](#ga032c595c93f6ef2e1a3661fe9de0f197)<br/> |

## DetailedDescription {#detailed-description}

Return values used by calling application for PIN input callback function.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_PIN_INPUT_ABORT <a href="#gaed61dc1a7482b607ebad612b3f2d7508" id="gaed61dc1a7482b607ebad612b3f2d7508"></a>

<p>#define EMV_CT_PIN_INPUT_ABORT   2</p>

Customer canceled.

## EMV_CT_PIN_INPUT_BYPASS <a href="#ga5364807f6ce1265fa8f8e0228db9717c" id="ga5364807f6ce1265fa8f8e0228db9717c"></a>

<p>#define EMV_CT_PIN_INPUT_BYPASS   3</p>

Customer chose \"bypass PIN entry\".

## EMV_CT_PIN_INPUT_COMM_ERR <a href="#ga6e1606e2c165d4f4af132d23f6585e37" id="ga6e1606e2c165d4f4af132d23f6585e37"></a>

<p>#define EMV_CT_PIN_INPUT_COMM_ERR   1</p>

Communication error.

## EMV_CT_PIN_INPUT_OKAY <a href="#ga6d46e6b2aa75de94de0855301068a093" id="ga6d46e6b2aa75de94de0855301068a093"></a>

<p>#define EMV_CT_PIN_INPUT_OKAY   0</p>

PIN input was successful.

## EMV_CT_PIN_INPUT_OTHER_ERR <a href="#ga783dde28172a0a5cbe376bd56ece1a90" id="ga783dde28172a0a5cbe376bd56ece1a90"></a>

<p>#define EMV_CT_PIN_INPUT_OTHER_ERR   5</p>

Other error.

## EMV_CT_PIN_INPUT_TIMEOUT <a href="#ga71e47e61824568f46a9c9ed547ef206b" id="ga71e47e61824568f46a9c9ed547ef206b"></a>

<p>#define EMV_CT_PIN_INPUT_TIMEOUT   4</p>

Timeout.

## EMV_CT_PIN_UNCRIT_TIMEOUT <a href="#ga032c595c93f6ef2e1a3661fe9de0f197" id="ga032c595c93f6ef2e1a3661fe9de0f197"></a>

<p>#define EMV_CT_PIN_UNCRIT_TIMEOUT   6</p>

uncritical timeout (no immediate abort on timeout)

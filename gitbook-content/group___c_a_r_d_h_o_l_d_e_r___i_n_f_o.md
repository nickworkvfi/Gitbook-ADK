---
hidden: true
title: Defines for callback function \"cardholder information\"Transaction execution » Callback functions
---

[Macros](#define-members) \| [Typedefs](#typedef-members)

In order to show the cardholder additional information, e.g. wrong PIN, last PIN try, another app is selected, \...
see <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga03bf78609c19ba9c07772fcd74d8c1f1">TAG_BF09_CBK_CARDHOLDERINFO</a>) [More\...](#details)

Collaboration diagram for Defines for callback function \"cardholder information\":

![](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [eEMVCrdWrongPIN](#gaa309a81a78e72f63e55e2ec617343643)   0 |
|   | Customer info: wrong PIN. [More\...](#gaa309a81a78e72f63e55e2ec617343643)<br/> |
| #define  | [eEMVCrdCorrectPIN](#gad4bbd00d0dbc50510fec71bd0ec9b702)   1 |
|   | Customer info: correct PIN. [More\...](#gad4bbd00d0dbc50510fec71bd0ec9b702)<br/> |
| #define  | [eEMVCrdAppChange](#ga9e2021d00efc18caa1ac904c73410964)   2 |
|   | Customer info: explicit selected application is changed. [More\...](#ga9e2021d00efc18caa1ac904c73410964)<br/> |
| #define  | [eEMVCrdLastTryPIN](#ga0d0b71673b210ace78250dc578163862)   3 |
|   | Customer info: last PIN try. [More\...](#ga0d0b71673b210ace78250dc578163862)<br/> |

|  |  |
|----|----|
| Typedefs |  |
| typedef unsigned char  | [eCardholderInfo](#gac55e7ad56ad5c7a9598bfd06615016c2) |

## DetailedDescription {#detailed-description}

In order to show the cardholder additional information, e.g. wrong PIN, last PIN try, another app is selected, \...
see <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a> (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga03bf78609c19ba9c07772fcd74d8c1f1">TAG_BF09_CBK_CARDHOLDERINFO</a>)

## MacroDefinition Documentation {#macro-definition-documentation}

## eEMVCrdAppChange <a href="#ga9e2021d00efc18caa1ac904c73410964" id="ga9e2021d00efc18caa1ac904c73410964"></a>

<p>#define eEMVCrdAppChange   2</p>

Customer info: explicit selected application is changed.

## eEMVCrdCorrectPIN <a href="#gad4bbd00d0dbc50510fec71bd0ec9b702" id="gad4bbd00d0dbc50510fec71bd0ec9b702"></a>

<p>#define eEMVCrdCorrectPIN   1</p>

Customer info: correct PIN.

## eEMVCrdLastTryPIN <a href="#ga0d0b71673b210ace78250dc578163862" id="ga0d0b71673b210ace78250dc578163862"></a>

<p>#define eEMVCrdLastTryPIN   3</p>

Customer info: last PIN try.

## eEMVCrdWrongPIN <a href="#gaa309a81a78e72f63e55e2ec617343643" id="gaa309a81a78e72f63e55e2ec617343643"></a>

<p>#define eEMVCrdWrongPIN   0</p>

Customer info: wrong PIN.

## TypedefDocumentation {#typedef-documentation}

## eCardholderInfo <a href="#gac55e7ad56ad5c7a9598bfd06615016c2" id="gac55e7ad56ad5c7a9598bfd06615016c2"></a>

<p>typedef unsigned char [eCardholderInfo](#gac55e7ad56ad5c7a9598bfd06615016c2)</p>

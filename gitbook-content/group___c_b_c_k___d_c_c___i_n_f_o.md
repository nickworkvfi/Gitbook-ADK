---
hidden: true
title: DCC callback informationTransaction execution » Callback functions
---

[Macros](#define-members)

Information flags for calling application. [More\...](#details)

Collaboration diagram for DCC callback information:

![](group___c_b_c_k___d_c_c___i_n_f_o.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [DCC_CBCK_INFO_LEN](#gab73c5753d6f75eff121f419375029d4a)   3 |
|   | Length of `pucDomOption` in bytes. [More\...](#gab73c5753d6f75eff121f419375029d4a)<br/> |
| #define  | [DCC_CBCK_INFO_PDOL_FORBIT](#ga75a19c7a2fa1f0cc270623760bfc89c7)   0x01 |
|   | B1b1: Currency change not allowed for this transaction. Reason is PDOL containing amount or currency. [More\...](#ga75a19c7a2fa1f0cc270623760bfc89c7)<br/> |

## DetailedDescription {#detailed-description}

Information flags for calling application.

Defines for `pucDccInfo` in Dynamic Currency Change handling

## MacroDefinition Documentation {#macro-definition-documentation}

## DCC_CBCK_INFO_LEN <a href="#gab73c5753d6f75eff121f419375029d4a" id="gab73c5753d6f75eff121f419375029d4a"></a>

<p>#define DCC_CBCK_INFO_LEN   3</p>

Length of `pucDomOption` in bytes.

## DCC_CBCK_INFO_PDOL_FORBIT <a href="#ga75a19c7a2fa1f0cc270623760bfc89c7" id="ga75a19c7a2fa1f0cc270623760bfc89c7"></a>

<p>#define DCC_CBCK_INFO_PDOL_FORBIT   0x01</p>

B1b1: Currency change not allowed for this transaction. Reason is PDOL containing amount or currency.

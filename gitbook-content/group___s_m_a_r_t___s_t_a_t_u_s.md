---
hidden: true
title: Smart statusICC Interface
---

[Macros](#define-members)

Return values for functions of group <a href="group___f_u_n_c___i_c_c.md">Functions for transparent ICC access</a>. [More\...](#details)

Collaboration diagram for Smart status:

![](group___s_m_a_r_t___s_t_a_t_u_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_SMART_STATUS_OK](#ga7096828cd20d1b879bf0c781ba8405be)   0 |
|   | okay (== comms ok == card in == card activated \... ) [More\...](#ga7096828cd20d1b879bf0c781ba8405be)<br/> |
| #define  | [EMV_ADK_SMART_STATUS_REMOVED](#gab2981c023e8f5e8e7bfce9ea2b9ce4a4)   1 |
|   | card removed = error caused by cardholder [More\...](#gab2981c023e8f5e8e7bfce9ea2b9ce4a4)<br/> |
| #define  | [EMV_ADK_SMART_STATUS_OVERFLOW](#ga9c85e2c1c3fe0190874f7aa21ec780b4)   2 |
|   | error caused by terminal - response buffer too small [More\...](#ga9c85e2c1c3fe0190874f7aa21ec780b4)<br/> |
| #define  | [EMV_ADK_SMART_STATUS_EXCHG_ERR](#ga1ab637fe61cf0bd785bb273e6bf044ad)   3 |
|   | error caused by ICC [More\...](#ga1ab637fe61cf0bd785bb273e6bf044ad)<br/> |
| #define  | [EMV_ADK_SMART_TWO_CARDS](#ga61f32e1e9ac93ecce91e791a84688a15)   4 |
|   | Contactless: Two cards in the field. [More\...](#ga61f32e1e9ac93ecce91e791a84688a15)<br/> |
| #define  | [EMV_ADK_SMART_ERR_INIT](#gac25c7b9cfd4e5733434ec856f263407a)   5 |
|   | error caused for initialization [More\...](#gac25c7b9cfd4e5733434ec856f263407a)<br/> |
| #define  | [EMV_ADK_SMART_INV_PARAM](#ga9ca3d3b4a71217a4c952b036a33fdf16)   6 |
|   | error caused passing invalid parameters [More\...](#ga9ca3d3b4a71217a4c952b036a33fdf16)<br/> |
| #define  | [EMV_ADK_SMART_WRONG_ATR](#ga4d45db2a077d687a6a5ae419dcef90d7)   7 |
|   | customer slot only: ATR is not EMV conform, in contrast to missing ATR, detection to be enabled by EMV_CT_DETECT_WRONG_ATR [More\...](#ga4d45db2a077d687a6a5ae419dcef90d7)<br/> |

## DetailedDescription {#detailed-description}

Return values for functions of group <a href="group___f_u_n_c___i_c_c.md">Functions for transparent ICC access</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_SMART_ERR_INIT <a href="#gac25c7b9cfd4e5733434ec856f263407a" id="gac25c7b9cfd4e5733434ec856f263407a"></a>

<p>#define EMV_ADK_SMART_ERR_INIT   5</p>

error caused for initialization

## EMV_ADK_SMART_INV_PARAM <a href="#ga9ca3d3b4a71217a4c952b036a33fdf16" id="ga9ca3d3b4a71217a4c952b036a33fdf16"></a>

<p>#define EMV_ADK_SMART_INV_PARAM   6</p>

error caused passing invalid parameters

## EMV_ADK_SMART_STATUS_EXCHG_ERR <a href="#ga1ab637fe61cf0bd785bb273e6bf044ad" id="ga1ab637fe61cf0bd785bb273e6bf044ad"></a>

<p>#define EMV_ADK_SMART_STATUS_EXCHG_ERR   3</p>

error caused by ICC

## EMV_ADK_SMART_STATUS_OK <a href="#ga7096828cd20d1b879bf0c781ba8405be" id="ga7096828cd20d1b879bf0c781ba8405be"></a>

<p>#define EMV_ADK_SMART_STATUS_OK   0</p>

okay (== comms ok == card in == card activated \... )

## EMV_ADK_SMART_STATUS_OVERFLOW <a href="#ga9c85e2c1c3fe0190874f7aa21ec780b4" id="ga9c85e2c1c3fe0190874f7aa21ec780b4"></a>

<p>#define EMV_ADK_SMART_STATUS_OVERFLOW   2</p>

error caused by terminal - response buffer too small

## EMV_ADK_SMART_STATUS_REMOVED <a href="#gab2981c023e8f5e8e7bfce9ea2b9ce4a4" id="gab2981c023e8f5e8e7bfce9ea2b9ce4a4"></a>

<p>#define EMV_ADK_SMART_STATUS_REMOVED   1</p>

card removed = error caused by cardholder

## EMV_ADK_SMART_TWO_CARDS <a href="#ga61f32e1e9ac93ecce91e791a84688a15" id="ga61f32e1e9ac93ecce91e791a84688a15"></a>

<p>#define EMV_ADK_SMART_TWO_CARDS   4</p>

Contactless: Two cards in the field.

## EMV_ADK_SMART_WRONG_ATR <a href="#ga4d45db2a077d687a6a5ae419dcef90d7" id="ga4d45db2a077d687a6a5ae419dcef90d7"></a>

<p>#define EMV_ADK_SMART_WRONG_ATR   7</p>

customer slot only: ATR is not EMV conform, in contrast to missing ATR, detection to be enabled by EMV_CT_DETECT_WRONG_ATR

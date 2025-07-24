---
hidden: true
title: Defines for type of read application data modeConfiguration » Application data
---

[Macros](#define-members) \| [Typedefs](#typedef-members)

Collaboration diagram for Defines for type of read application data mode:

![](group___r_e_a_d___a_p_p_l_i___t_y_p_e.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_READ_AID](#ga40a890ba6edd28fab817806283a8ca92)   0 |
|   | read data of a given AID. Remark: If the same AID is configured with multiple param sets (Velocity CTLS only, see <a href="group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#ga03b37fb330503ac5075d026a14dea68b">EMV_ADK_FORCE_NEW_PARAMSET</a>) only the first AID is presented here. To read all of the AIDs in this case please use first, next mechanism. [More\...](#ga40a890ba6edd28fab817806283a8ca92)<br/> |
| #define  | [EMV_ADK_READ_FIRST](#ga2c6c3134ae0c799d1137ab8ca7a7ad39)   1 |
|   | read first AID [More\...](#ga2c6c3134ae0c799d1137ab8ca7a7ad39)<br/> |
| #define  | [EMV_ADK_READ_NEXT](#gadc2d6261a8f38bd106479075960539c8)   2 |
|   | read next AID [More\...](#gadc2d6261a8f38bd106479075960539c8)<br/> |
| #define  | [EMV_ADK_READ_MAX_APPLI](#gaadf16f68e844bb5ab52e088e6ba1c1e9)   3 |
|   | future use [More\...](#gaadf16f68e844bb5ab52e088e6ba1c1e9)<br/> |

|  |  |
|----|----|
| Typedefs |  |
| typedef unsigned char  | [EMV_ADK_READAPPLI_TYPE](#ga10b4ef6968ff77acaf7f70ff9d95ad03) |
|   | typedef for \"read appli type\" (<a href="group___f_u_n_c___c_o_n_f.md#ga363163e375895b7d3ad03ace5df5d0d3">EMV_CT_GetAppliData()</a>) [More\...](#ga10b4ef6968ff77acaf7f70ff9d95ad03)<br/> |

## DetailedDescription {#detailed-description}

Used in <a href="group___f_u_n_c___c_o_n_f.md#ga363163e375895b7d3ad03ace5df5d0d3">EMV_CT_GetAppliData()</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_READ_AID <a href="#ga40a890ba6edd28fab817806283a8ca92" id="ga40a890ba6edd28fab817806283a8ca92"></a>

<p>#define EMV_ADK_READ_AID   0</p>

read data of a given AID. Remark: If the same AID is configured with multiple param sets (Velocity CTLS only, see <a href="group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#ga03b37fb330503ac5075d026a14dea68b">EMV_ADK_FORCE_NEW_PARAMSET</a>) only the first AID is presented here. To read all of the AIDs in this case please use first, next mechanism.

## EMV_ADK_READ_FIRST <a href="#ga2c6c3134ae0c799d1137ab8ca7a7ad39" id="ga2c6c3134ae0c799d1137ab8ca7a7ad39"></a>

<p>#define EMV_ADK_READ_FIRST   1</p>

read first AID

## EMV_ADK_READ_MAX_APPLI <a href="#gaadf16f68e844bb5ab52e088e6ba1c1e9" id="gaadf16f68e844bb5ab52e088e6ba1c1e9"></a>

<p>#define EMV_ADK_READ_MAX_APPLI   3</p>

future use

## EMV_ADK_READ_NEXT <a href="#gadc2d6261a8f38bd106479075960539c8" id="gadc2d6261a8f38bd106479075960539c8"></a>

<p>#define EMV_ADK_READ_NEXT   2</p>

read next AID

## TypedefDocumentation {#typedef-documentation}

## EMV_ADK_READAPPLI_TYPE <a href="#ga10b4ef6968ff77acaf7f70ff9d95ad03" id="ga10b4ef6968ff77acaf7f70ff9d95ad03"></a>

<p>typedef unsigned char [EMV_ADK_READAPPLI_TYPE](#ga10b4ef6968ff77acaf7f70ff9d95ad03)</p>

typedef for \"read appli type\" (<a href="group___f_u_n_c___c_o_n_f.md#ga363163e375895b7d3ad03ace5df5d0d3">EMV_CT_GetAppliData()</a>)

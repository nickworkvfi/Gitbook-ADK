---
hidden: true
title: "Position 2: status of chipcard communication (2 byte)Transaction execution » Output data » Additional error data"
---

[Macros](#define-members)

Collaboration diagram for Position 2: status of chipcard communication (2 byte):

![](group___d_e_f___d_f62___p_o_s2.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER](#ga0a7522e908ddb8dfb41618af3aceb480)   0x0000u |
|   | error in transport layer (T=0, T=1) [More\...](#ga0a7522e908ddb8dfb41618af3aceb480)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS2_BASE_ERROR](#gab3b1f3c48eab201e16fb66c241e8c851)   0x0001u |
|   | base error (wrong length of R-APDU) [More\...](#gab3b1f3c48eab201e16fb66c241e8c851)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS2_RAPDU](#gaf8ee8f301a95f2901203c1bbe4ada40e)   0xFFFFu |
|   | R-APDU data with wrong content. [More\...](#gaf8ee8f301a95f2901203c1bbe4ada40e)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_DF62_ERR_POS2_BASE_ERROR <a href="#gab3b1f3c48eab201e16fb66c241e8c851" id="gab3b1f3c48eab201e16fb66c241e8c851"></a>

<p>#define EMV_ADK_DF62_ERR_POS2_BASE_ERROR   0x0001u</p>

base error (wrong length of R-APDU)

## EMV_ADK_DF62_ERR_POS2_RAPDU <a href="#gaf8ee8f301a95f2901203c1bbe4ada40e" id="gaf8ee8f301a95f2901203c1bbe4ada40e"></a>

<p>#define EMV_ADK_DF62_ERR_POS2_RAPDU   0xFFFFu</p>

R-APDU data with wrong content.

## EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER <a href="#ga0a7522e908ddb8dfb41618af3aceb480" id="ga0a7522e908ddb8dfb41618af3aceb480"></a>

<p>#define EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER   0x0000u</p>

error in transport layer (T=0, T=1)

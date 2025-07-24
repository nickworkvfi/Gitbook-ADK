---
hidden: true
title: EMV_CT_SerInterface.h File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

Interface of CT-Framework. [More\...](#details)

`#include "`<a href="_e_m_v___common___interface_8h_source.md">emv/EMV_Common_Interface.h</a>`"`

Include dependency graph for EMV_CT_SerInterface.h:

![](_e_m_v___c_t___ser_interface_8h__incl.png)

This graph shows which files directly or indirectly include this file:

![](_e_m_v___c_t___ser_interface_8h__dep__incl.png)

<a href="_e_m_v___c_t___ser_interface_8h_source.md">Go to the source code of this file.</a>

|          |                                               |
|----------|-----------------------------------------------|
| Macros   |                                               |
| #define  | [DLL_CTF](#a463974457facec16efba585e2cb1c066) |

|  |  |
|----|----|
| Functions |  |
| [DLL_CTF](#a463974457facec16efba585e2cb1c066) <a href="group___a_d_k___r_e_t___c_o_d_e.md#gaa5ed8ecc7a31f36a8927e6e258187810">EMV_ADK_INFO</a>  | [EMV_CT_SerInterface](#aa97edfd89af13c80259d4dbd3907f9e4) (const unsigned char \*dataIn, unsigned short dataInLen, unsigned char \*dataOut, unsigned short \*dataOutLen) |
|   | Serial interface to EMV functions. [More\...](#aa97edfd89af13c80259d4dbd3907f9e4)<br/> |

## DetailedDescription {#detailed-description}

Interface of CT-Framework.

## MacroDefinition Documentation {#macro-definition-documentation}

## DLL_CTF <a href="#a463974457facec16efba585e2cb1c066" id="a463974457facec16efba585e2cb1c066"></a>

<p>#define DLL_CTF</p>

## FunctionDocumentation {#function-documentation}

## EMV_CT_SerInterface() <a href="#aa97edfd89af13c80259d4dbd3907f9e4" id="aa97edfd89af13c80259d4dbd3907f9e4"></a>

<p>[DLL_CTF](#a463974457facec16efba585e2cb1c066) <a href="group___a_d_k___r_e_t___c_o_d_e.md#gaa5ed8ecc7a31f36a8927e6e258187810">EMV_ADK_INFO</a> EMV_CT_SerInterface</p>

Serial interface to EMV functions.

### Author

GSS R&D Germany

**Parameters**

\[in\] **dataIn** input TLV buffer \[in\] **dataInLen** length of dataIn \[out\] **dataOut** output TLV buffer \[in,out\] **dataOutLen** length of dataOut

### Returns

EMV_ADK_OK, EMV_ADK_INTERNAL, EMV_ADK_PARAM

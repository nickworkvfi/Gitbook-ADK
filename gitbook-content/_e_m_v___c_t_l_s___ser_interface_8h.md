---
hidden: true
title: EMV_CTLS_SerInterface.h File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

Interface of CTLS-Framework. [More\...](#details)

`#include "`<a href="_e_m_v___common___interface_8h_source.md">emv/EMV_Common_Interface.h</a>`"`

Include dependency graph for EMV_CTLS_SerInterface.h:

![](_e_m_v___c_t_l_s___ser_interface_8h__incl.png)

This graph shows which files directly or indirectly include this file:

![](_e_m_v___c_t_l_s___ser_interface_8h__dep__incl.png)

<a href="_e_m_v___c_t_l_s___ser_interface_8h_source.md">Go to the source code of this file.</a>

|          |                                               |
|----------|-----------------------------------------------|
| Macros   |                                               |
| #define  | [DLL_CLF](#a2f0bd8ac24ba34e8586df5a784e92539) |

|  |  |
|----|----|
| Functions |  |
| [DLL_CLF](#a2f0bd8ac24ba34e8586df5a784e92539) <a href="group___a_d_k___r_e_t___c_o_d_e.md#gaa5ed8ecc7a31f36a8927e6e258187810">EMV_ADK_INFO</a>  | [EMV_CTLS_HandleCallback](#a27717a16ba1426c41655362ca975b475) (unsigned char \*data, unsigned short \*dataLen) |
| [DLL_CLF](#a2f0bd8ac24ba34e8586df5a784e92539) <a href="group___a_d_k___r_e_t___c_o_d_e.md#gaa5ed8ecc7a31f36a8927e6e258187810">EMV_ADK_INFO</a>  | [EMV_CTLS_SerInterface](#a540b4e23317a9808730510cf39224588) (const unsigned char \*dataIn, unsigned short dataInLen, unsigned char \*dataOut, unsigned short \*dataOutLen) |
|   | Serial interface to EMV functions. [More\...](#a540b4e23317a9808730510cf39224588)<br/> |

## DetailedDescription {#detailed-description}

Interface of CTLS-Framework.

## MacroDefinition Documentation {#macro-definition-documentation}

## DLL_CLF <a href="#a2f0bd8ac24ba34e8586df5a784e92539" id="a2f0bd8ac24ba34e8586df5a784e92539"></a>

<p>#define DLL_CLF</p>

## FunctionDocumentation {#function-documentation}

## EMV_CTLS_HandleCallback() <a href="#a27717a16ba1426c41655362ca975b475" id="a27717a16ba1426c41655362ca975b475"></a>

<p>[DLL_CLF](#a2f0bd8ac24ba34e8586df5a784e92539) <a href="group___a_d_k___r_e_t___c_o_d_e.md#gaa5ed8ecc7a31f36a8927e6e258187810">EMV_ADK_INFO</a> EMV_CTLS_HandleCallback</p>

## EMV_CTLS_SerInterface() <a href="#a540b4e23317a9808730510cf39224588" id="a540b4e23317a9808730510cf39224588"></a>

<p>[DLL_CLF](#a2f0bd8ac24ba34e8586df5a784e92539) <a href="group___a_d_k___r_e_t___c_o_d_e.md#gaa5ed8ecc7a31f36a8927e6e258187810">EMV_ADK_INFO</a> EMV_CTLS_SerInterface</p>

Serial interface to EMV functions.

### Author

GSS R&D Germany

**Parameters**

\[in\] **dataIn** input TLV buffer \[in\] **dataInLen** length of dataIn \[out\] **dataOut** output TLV buffer \[in,out\] **dataOutLen** length of dataOut

### Returns

EMV_ADK_OK, EMV_ADK_INTERNAL, EMV_ADK_PARAM

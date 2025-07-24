---
hidden: true
title: PED status codes
---

[Macros](#define-members)

These codes are set by <a href="tec_2export_2tec_2ped_8h.md#a124ea72634b37bdf5d09ce5e0869ca55">ped_Pairing()</a>. [More\...](#details)

|          |                                                         |
|----------|---------------------------------------------------------|
| Macros   |                                                         |
| #define  | [PED_LINK_OK](#ga17d00e6cf6e771b1e428c332fe87a23f)   0  |
| #define  | [PED_NS_DONE](#ga8fc33540b096a9d3fe25a78f13b3968c)   1  |
| #define  | [PED_CERT_ERR](#gadc787271097273d39c4fb060749b1fab)   2 |
| #define  | [PED_NS_ERR](#gad80ab1587eb3f1a4dc204cd277098cd9)   3   |

## DetailedDescription {#detailed-description}

These codes are set by <a href="tec_2export_2tec_2ped_8h.md#a124ea72634b37bdf5d09ce5e0869ca55">ped_Pairing()</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## PED_CERT_ERR <a href="#gadc787271097273d39c4fb060749b1fab" id="gadc787271097273d39c4fb060749b1fab"></a>

<p>#define PED_CERT_ERR   2</p>

Set by <a href="tec_2export_2tec_2ped_8h.md#a124ea72634b37bdf5d09ce5e0869ca55">ped_Pairing()</a>: Error during certificate exchange.

## PED_LINK_OK <a href="#ga17d00e6cf6e771b1e428c332fe87a23f" id="ga17d00e6cf6e771b1e428c332fe87a23f"></a>

<p>#define PED_LINK_OK   0</p>

Set by <a href="tec_2export_2tec_2ped_8h.md#a124ea72634b37bdf5d09ce5e0869ca55">ped_Pairing()</a>: Link verification successful, no pairing needed.

## PED_NS_DONE <a href="#ga8fc33540b096a9d3fe25a78f13b3968c" id="ga8fc33540b096a9d3fe25a78f13b3968c"></a>

<p>#define PED_NS_DONE   1</p>

Set by <a href="tec_2export_2tec_2ped_8h.md#a124ea72634b37bdf5d09ce5e0869ca55">ped_Pairing()</a>: Link verification failed, pairing (Needham-Schroeder) successful.

## PED_NS_ERR <a href="#gad80ab1587eb3f1a4dc204cd277098cd9" id="gad80ab1587eb3f1a4dc204cd277098cd9"></a>

<p>#define PED_NS_ERR   3</p>

Set by <a href="tec_2export_2tec_2ped_8h.md#a124ea72634b37bdf5d09ce5e0869ca55">ped_Pairing()</a>: Error during pairing (Needham-Schroeder).

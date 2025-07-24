---
hidden: true
title: VISA terminal transaction qualifierConfiguration » Application data
---

[Macros](#define-members)

Possible values for <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66</a>. [More\...](#details)

Collaboration diagram for VISA terminal transaction qualifier:

![](group___c_l___t_t_q.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [VISA_TTQ_MAGSTRIPE_SUPPORTED](#gab2d06189bcbe614376de851ea511b1a9)   0x80 |
|   | B1b8: Contactless magnetic stripe (MSD) supported. [More\...](#gab2d06189bcbe614376de851ea511b1a9)<br/> |
| #define  | [VISA_TTQ_VSDC_SUPPORTED](#ga766a5db2d013e8b536f9fe1e485784ef)   0x40 |
|   | B1b7: Contactless VSDC supported. [More\...](#ga766a5db2d013e8b536f9fe1e485784ef)<br/> |
| #define  | [VISA_TTQ_qVSDC_SUPPORTED](#gaed286384ae0f977b312ee2f7e64bef34)   0x20 |
|   | B1b6: Contactless qVSDC supported. [More\...](#gaed286384ae0f977b312ee2f7e64bef34)<br/> |
| #define  | [VISA_TTQ_CONTACT_VSDC_SUPPORTED](#ga5175796b380221c9eea4af373fd6687d)   0x10 |
|   | B1b5: Contact VSDC supported. [More\...](#ga5175796b380221c9eea4af373fd6687d)<br/> |
| #define  | [VISA_TTQ_OFFLINE_ONLY](#ga566ac388b21e3029af17cf0c418444be)   0x08 |
|   | B1b4: Reader is Offline Only. [More\...](#ga566ac388b21e3029af17cf0c418444be)<br/> |
| #define  | [VISA_TTQ_ONLINE_PIN_SUPPORTED](#ga8cf1bd5bd5c1b1bb0172699e2d017829)   0x04 |
|   | B1b3: Online PIN supported. [More\...](#ga8cf1bd5bd5c1b1bb0172699e2d017829)<br/> |
| #define  | [VISA_TTQ_SIGNATURE_SUPPORTED](#ga535f54e24028f7eb44498fbf4d3b77ad)   0x02 |
|   | B1b2: Signature supported. [More\...](#ga535f54e24028f7eb44498fbf4d3b77ad)<br/> |
| #define  | [VISA_TTQ_ODA_ONLINE_SUPPORTED](#gadeee233d09c7041798bd1687df390853)   0x01 |
|   | B1b1: ODA for Online Authorizations supported. [More\...](#gadeee233d09c7041798bd1687df390853)<br/> |
| #define  | [VISA_TTQ_ONLINE_FORCED](#ga80df5172f0a12a0791509b3546d77fb6)   0x80 |
|   | B2b8: Online cryptogram required. [More\...](#ga80df5172f0a12a0791509b3546d77fb6)<br/> |
| #define  | [VISA_TTQ_CVM_FORCED](#ga1f3bc27a0554046cc1148f4e07f1b735)   0x40 |
|   | B2b7: CVM required. [More\...](#ga1f3bc27a0554046cc1148f4e07f1b735)<br/> |
| #define  | [VISA_TTQ_CONTACT_PINOFFL](#ga2d382a2fca116b8dbd54e9b157e6fa79)   0x20 |
|   | B2b6: (Contact Chip) Offline PIN supported. [More\...](#ga2d382a2fca116b8dbd54e9b157e6fa79)<br/> |

## DetailedDescription {#detailed-description}

Possible values for <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## VISA_TTQ_CONTACT_PINOFFL <a href="#ga2d382a2fca116b8dbd54e9b157e6fa79" id="ga2d382a2fca116b8dbd54e9b157e6fa79"></a>

<p>#define VISA_TTQ_CONTACT_PINOFFL   0x20</p>

B2b6: (Contact Chip) Offline PIN supported.

## VISA_TTQ_CONTACT_VSDC_SUPPORTED <a href="#ga5175796b380221c9eea4af373fd6687d" id="ga5175796b380221c9eea4af373fd6687d"></a>

<p>#define VISA_TTQ_CONTACT_VSDC_SUPPORTED   0x10</p>

B1b5: Contact VSDC supported.

## VISA_TTQ_CVM_FORCED <a href="#ga1f3bc27a0554046cc1148f4e07f1b735" id="ga1f3bc27a0554046cc1148f4e07f1b735"></a>

<p>#define VISA_TTQ_CVM_FORCED   0x40</p>

B2b7: CVM required.

## VISA_TTQ_MAGSTRIPE_SUPPORTED <a href="#gab2d06189bcbe614376de851ea511b1a9" id="gab2d06189bcbe614376de851ea511b1a9"></a>

<p>#define VISA_TTQ_MAGSTRIPE_SUPPORTED   0x80</p>

B1b8: Contactless magnetic stripe (MSD) supported.

## VISA_TTQ_ODA_ONLINE_SUPPORTED <a href="#gadeee233d09c7041798bd1687df390853" id="gadeee233d09c7041798bd1687df390853"></a>

<p>#define VISA_TTQ_ODA_ONLINE_SUPPORTED   0x01</p>

B1b1: ODA for Online Authorizations supported.

## VISA_TTQ_OFFLINE_ONLY <a href="#ga566ac388b21e3029af17cf0c418444be" id="ga566ac388b21e3029af17cf0c418444be"></a>

<p>#define VISA_TTQ_OFFLINE_ONLY   0x08</p>

B1b4: Reader is Offline Only.

## VISA_TTQ_ONLINE_FORCED <a href="#ga80df5172f0a12a0791509b3546d77fb6" id="ga80df5172f0a12a0791509b3546d77fb6"></a>

<p>#define VISA_TTQ_ONLINE_FORCED   0x80</p>

B2b8: Online cryptogram required.

## VISA_TTQ_ONLINE_PIN_SUPPORTED <a href="#ga8cf1bd5bd5c1b1bb0172699e2d017829" id="ga8cf1bd5bd5c1b1bb0172699e2d017829"></a>

<p>#define VISA_TTQ_ONLINE_PIN_SUPPORTED   0x04</p>

B1b3: Online PIN supported.

## VISA_TTQ_qVSDC_SUPPORTED <a href="#gaed286384ae0f977b312ee2f7e64bef34" id="gaed286384ae0f977b312ee2f7e64bef34"></a>

<p>#define VISA_TTQ_qVSDC_SUPPORTED   0x20</p>

B1b6: Contactless qVSDC supported.

## VISA_TTQ_SIGNATURE_SUPPORTED <a href="#ga535f54e24028f7eb44498fbf4d3b77ad" id="ga535f54e24028f7eb44498fbf4d3b77ad"></a>

<p>#define VISA_TTQ_SIGNATURE_SUPPORTED   0x02</p>

B1b2: Signature supported.

## VISA_TTQ_VSDC_SUPPORTED <a href="#ga766a5db2d013e8b536f9fe1e485784ef" id="ga766a5db2d013e8b536f9fe1e485784ef"></a>

<p>#define VISA_TTQ_VSDC_SUPPORTED   0x40</p>

B1b7: Contactless VSDC supported.

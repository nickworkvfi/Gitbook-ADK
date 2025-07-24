---
hidden: true
title: Common Terminal Transaction QualifierConfiguration » Application data
---

[Macros](#define-members)

TTQ bits as defined \[EMV-A\] section 5.7. [More\...](#details)

Collaboration diagram for Common Terminal Transaction Qualifier:

![](group___t_t_q.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TTQ_MAGSTRIPE_MODE_SUPPORTED](#ga931471ff815c44731bafe158317dba35)   0x80 |
|   | B1b8: Mag-stripe mode supported. [More\...](#ga931471ff815c44731bafe158317dba35)<br/> |
| #define  | [TTQ_EMV_MODE_SUPPORTED](#ga84745aad051b2dcd52a1b52cfcfec24d)   0x20 |
|   | B1b6: EMV mode supported. [More\...](#ga84745aad051b2dcd52a1b52cfcfec24d)<br/> |
| #define  | [TTQ_CONTACT_CHIP_SUPPORTED](#ga55b25fd5d3128cb5b0824807915efe54)   0x10 |
|   | B1b5: EMV contact chip supported. [More\...](#ga55b25fd5d3128cb5b0824807915efe54)<br/> |
| #define  | [TTQ_OFFLINE_ONLY](#gacecf765763bbaa2b92d2c00ad2a2d688)   0x08 |
|   | B1b4: Offline-only reader. [More\...](#gacecf765763bbaa2b92d2c00ad2a2d688)<br/> |
| #define  | [TTQ_ONLINE_PIN_SUPPORTED](#ga87a68635a0a8c8f92d9e182e37f04b64)   0x04 |
|   | B1b3: Online PIN supported. [More\...](#ga87a68635a0a8c8f92d9e182e37f04b64)<br/> |
| #define  | [TTQ_SIGNATURE_SUPPORTED](#gad7dbf7a8d2339853a1ea5a5cc7fb5874)   0x02 |
|   | B1b2: Signature supported. [More\...](#gad7dbf7a8d2339853a1ea5a5cc7fb5874)<br/> |
| #define  | [TTQ_ODA_SUPPORTED](#ga9acc92645d47d361f46fe3f034a883cd)   0x01 |
|   | B1b1: Offline Data Authentication for Online Authorisations supported (WISE: without \"for online\") [More\...](#ga9acc92645d47d361f46fe3f034a883cd)<br/> |
| #define  | [TTQ_ONLINE_CRYPTOGRAM_REQUIRED](#ga86fdb2de945bb479db913772c95301c8)   0x80 |
|   | B2b8: Online cryptogram required. [More\...](#ga86fdb2de945bb479db913772c95301c8)<br/> |
| #define  | [TTQ_CVM_REQUIRED](#ga0d0ab4047e5b8b4a510930f693ffc5a8)   0x40 |
|   | B2b7: CVM required. [More\...](#ga0d0ab4047e5b8b4a510930f693ffc5a8)<br/> |
| #define  | [TTQ_CONTACT_OFFLINE_PIN](#ga5d9c55aba29632815b95982f6e051dd0)   0x20 |
|   | B2b6: (Contact Chip) Offline PIN supported. [More\...](#ga5d9c55aba29632815b95982f6e051dd0)<br/> |
| #define  | [TTQ_ISSUER_UPDATE_SUPPORTED](#gace25d3f0710d089edc30094c0f8eaa01)   0x80 |
|   | B3b8: Issuer Update Processing supported. [More\...](#gace25d3f0710d089edc30094c0f8eaa01)<br/> |
| #define  | [TTQ_CD_CVM_SUPPORTED](#ga2c2c05e902e673619569ab0b35935950)   0x40 |
|   | B3b7: Consumer Device CVM supported. [More\...](#ga2c2c05e902e673619569ab0b35935950)<br/> |

## DetailedDescription {#detailed-description}

TTQ bits as defined \[EMV-A\] section 5.7.

Can be used for

- <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66</a>
- <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalTransactionQualifier_9F66</a>
- <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalTransactionQualifier_9F66</a>
- <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalTransactionQualifier_9F66</a>
- <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalTransactionQualifier_9F66</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## TTQ_CD_CVM_SUPPORTED <a href="#ga2c2c05e902e673619569ab0b35935950" id="ga2c2c05e902e673619569ab0b35935950"></a>

<p>#define TTQ_CD_CVM_SUPPORTED   0x40</p>

B3b7: Consumer Device CVM supported.

## TTQ_CONTACT_CHIP_SUPPORTED <a href="#ga55b25fd5d3128cb5b0824807915efe54" id="ga55b25fd5d3128cb5b0824807915efe54"></a>

<p>#define TTQ_CONTACT_CHIP_SUPPORTED   0x10</p>

B1b5: EMV contact chip supported.

## TTQ_CONTACT_OFFLINE_PIN <a href="#ga5d9c55aba29632815b95982f6e051dd0" id="ga5d9c55aba29632815b95982f6e051dd0"></a>

<p>#define TTQ_CONTACT_OFFLINE_PIN   0x20</p>

B2b6: (Contact Chip) Offline PIN supported.

## TTQ_CVM_REQUIRED <a href="#ga0d0ab4047e5b8b4a510930f693ffc5a8" id="ga0d0ab4047e5b8b4a510930f693ffc5a8"></a>

<p>#define TTQ_CVM_REQUIRED   0x40</p>

B2b7: CVM required.

## TTQ_EMV_MODE_SUPPORTED <a href="#ga84745aad051b2dcd52a1b52cfcfec24d" id="ga84745aad051b2dcd52a1b52cfcfec24d"></a>

<p>#define TTQ_EMV_MODE_SUPPORTED   0x20</p>

B1b6: EMV mode supported.

## TTQ_ISSUER_UPDATE_SUPPORTED <a href="#gace25d3f0710d089edc30094c0f8eaa01" id="gace25d3f0710d089edc30094c0f8eaa01"></a>

<p>#define TTQ_ISSUER_UPDATE_SUPPORTED   0x80</p>

B3b8: Issuer Update Processing supported.

## TTQ_MAGSTRIPE_MODE_SUPPORTED <a href="#ga931471ff815c44731bafe158317dba35" id="ga931471ff815c44731bafe158317dba35"></a>

<p>#define TTQ_MAGSTRIPE_MODE_SUPPORTED   0x80</p>

B1b8: Mag-stripe mode supported.

## TTQ_ODA_SUPPORTED <a href="#ga9acc92645d47d361f46fe3f034a883cd" id="ga9acc92645d47d361f46fe3f034a883cd"></a>

<p>#define TTQ_ODA_SUPPORTED   0x01</p>

B1b1: Offline Data Authentication for Online Authorisations supported (WISE: without \"for online\")

## TTQ_OFFLINE_ONLY <a href="#gacecf765763bbaa2b92d2c00ad2a2d688" id="gacecf765763bbaa2b92d2c00ad2a2d688"></a>

<p>#define TTQ_OFFLINE_ONLY   0x08</p>

B1b4: Offline-only reader.

## TTQ_ONLINE_CRYPTOGRAM_REQUIRED <a href="#ga86fdb2de945bb479db913772c95301c8" id="ga86fdb2de945bb479db913772c95301c8"></a>

<p>#define TTQ_ONLINE_CRYPTOGRAM_REQUIRED   0x80</p>

B2b8: Online cryptogram required.

## TTQ_ONLINE_PIN_SUPPORTED <a href="#ga87a68635a0a8c8f92d9e182e37f04b64" id="ga87a68635a0a8c8f92d9e182e37f04b64"></a>

<p>#define TTQ_ONLINE_PIN_SUPPORTED   0x04</p>

B1b3: Online PIN supported.

## TTQ_SIGNATURE_SUPPORTED <a href="#gad7dbf7a8d2339853a1ea5a5cc7fb5874" id="gad7dbf7a8d2339853a1ea5a5cc7fb5874"></a>

<p>#define TTQ_SIGNATURE_SUPPORTED   0x02</p>

B1b2: Signature supported.

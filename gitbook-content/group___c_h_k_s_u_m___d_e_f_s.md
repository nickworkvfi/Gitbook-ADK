---
hidden: true
title: Defines for EMVCo checksum calculationConfiguration » Application data
---

[Macros](#define-members)

other major terminal parameters actually there are only some of them defined
most of them are hard coded in the lib as actually needed
all of them are Yes / No decisions
\--\> whenever there is a need to make this configurable for the checksum there will be another parameter added
In brackets there is the default value or the currently hard coded value
**only for checksum \--\> no control on the flow,**
e.g. Blacklist is controlled per application not per terminal parameters
**!!! take respect on the default !!!** [More\...](#details)

Collaboration diagram for Defines for EMVCo checksum calculation:

![](group___c_h_k_s_u_m___d_e_f_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CT_CHECKSUM_DEFAULT](#ga20cbdc14e89aff9075b318fda4f017a4)   \"\\x00\\x00\\x00\\x00\\x00\" |
|   | 0x00 means: default<br/>\--\> when initialized with 0x00 0x00 0x00 then all params set as default mentioned in comment.<br/>For changing the default the corresponding Bit must be set:<br/>e.g. for Transaction Log disabling, the corresponding Bit must be activated = 1 [More\...](#ga20cbdc14e89aff9075b318fda4f017a4)<br/> |
| #define  | [EMV_CT_CHECKSUM_INCLUDE_VERSION](#gab0f66aabe5ca57ac9803cc7843ba8099)   0x01 |
|   | B1b1, default: NO \--\> For checksum only. [More\...](#gab0f66aabe5ca57ac9803cc7843ba8099)<br/> |
| #define  | [EMV_CT_CHECKSUM_TRANSACTION_LOG](#ga2ed44f63eb470372105fb66907bb15bf)   0x02 |
|   | B1b2, default: YES \--\> De/activated per application. [More\...](#ga2ed44f63eb470372105fb66907bb15bf)<br/> |
| #define  | [EMV_CT_CHECKSUM_EXCEPTION_FILE](#ga924ff7802b8658820ee293a0e3c38d64)   0x04 |
|   | B1b3, default: YES \--\> De/activated per application. [More\...](#ga924ff7802b8658820ee293a0e3c38d64)<br/> |
| #define  | [EMV_CT_CHECKSUM_FORCE_ONLINE](#gaa427d9773f4391c39abca358dabef5ea)   0x08 |
|   | B1b4, default: YES \--\> De/activated per application and by merchant. [More\...](#gaa427d9773f4391c39abca358dabef5ea)<br/> |
| #define  | [EMV_CT_CHECKSUM_FORCE_ACCEPTANCE](#gaedadae44ad15775bd93c589dcfffa460)   0x10 |
|   | B1b5, default: YES \--\> De/activated per application and by merchant. [More\...](#gaedadae44ad15775bd93c589dcfffa460)<br/> |
| #define  | [EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE](#ga28a24b448756bfd1554c0419f5ea4b8d)   0x20 |
|   | B1b6, default: NO \--\> For checksum only \--\> application related decision. [More\...](#ga28a24b448756bfd1554c0419f5ea4b8d)<br/> |
| #define  | [EMV_CT_CHECKSUM_SUPPORT_PSE](#ga45425a687faa00648eaaf48d4b35a4a5)   0x40 |
|   | B1b7, default: YES \--\> De/activated per transaction (EMV_Select) [More\...](#ga45425a687faa00648eaaf48d4b35a4a5)<br/> |
| #define  | [EMV_CT_CHECKSUM_ACCOUNT_TYPE](#ga7807a9611c8d73665d1d8927da1a65a0)   0x80 |
|   | B1b8, default: YES \--\> De/activated per application. [More\...](#ga7807a9611c8d73665d1d8927da1a65a0)<br/> |
| #define  | [EMV_CT_CHECKSUM_SUPPORT_ADVICES](#ga30522e8e212e24a0ad2df937192d3950)   0x01 |
|   | B2b1, default: NO \--\> Support of advices on host prot. [More\...](#ga30522e8e212e24a0ad2df937192d3950)<br/> |
| #define  | [EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF](#ga6589ddc798be9f8005f4dc1f7a2a6c4c)   0x02 |
|   | B2b2, default: YES \--\> Cardholder Confirmation. [More\...](#ga6589ddc798be9f8005f4dc1f7a2a6c4c)<br/> |
| #define  | [EMV_CT_CHECKSUM_PIN_BYPASS](#ga9ef094089eae952238bc36f961c10117)   0x04 |
|   | B2b3, default: NO \--\> PIN bypass. [More\...](#ga9ef094089eae952238bc36f961c10117)<br/> |
| #define  | [EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL](#ga54b2067bcf84a9d704ffd4779b866dcc)   0x08 |
|   | B2b4, default: YES \--\> Default TDOL. [More\...](#ga54b2067bcf84a9d704ffd4779b866dcc)<br/> |
| #define  | [EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE](#gad5a962fbebbc8d7082bd51c29bfaaf63)   0x10 |
|   | B2b5, default: YES \--\> Batch data capture. [More\...](#gad5a962fbebbc8d7082bd51c29bfaaf63)<br/> |
| #define  | [EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS](#ga0d61a27e5822ac246e19ca4cb4d0b20b)   0x20 |
|   | B2b6, default: YES \--\> Issuer initiated referrals. [More\...](#ga0d61a27e5822ac246e19ca4cb4d0b20b)<br/> |
| #define  | [EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD](#ga745eee1820113c5b33456f6f88167272)   0x40 |
|   | B2b7, default: NO \--\> Card initiated referrals. [More\...](#ga745eee1820113c5b33456f6f88167272)<br/> |
| #define  | [EMV_CT_CHECKSUM_MULTILANG_SUPPORT](#gaad2a208a6e39d8442e2478d14f814e59)   0x80 |
|   | B2b7, default: YES since L2 7.0.2. [More\...](#gaad2a208a6e39d8442e2478d14f814e59)<br/> |
| #define  | [EMV_CT_CHECKSUM_PIN_BYPASS_ONCE](#ga1869068463843812df2bb29b57a21b19)   0x01 |
|   | B3b1, default: NO \--\> No subsequent PIN bypass when PIN bypass is active. [More\...](#ga1869068463843812df2bb29b57a21b19)<br/> |

## DetailedDescription {#detailed-description}

other major terminal parameters actually there are only some of them defined
most of them are hard coded in the lib as actually needed
all of them are Yes / No decisions
\--\> whenever there is a need to make this configurable for the checksum there will be another parameter added
In brackets there is the default value or the currently hard coded value
**only for checksum \--\> no control on the flow,**
e.g. Blacklist is controlled per application not per terminal parameters
**!!! take respect on the default !!!**

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_CHECKSUM_ACCOUNT_TYPE <a href="#ga7807a9611c8d73665d1d8927da1a65a0" id="ga7807a9611c8d73665d1d8927da1a65a0"></a>

<p>#define EMV_CT_CHECKSUM_ACCOUNT_TYPE   0x80</p>

B1b8, default: YES \--\> De/activated per application.

## EMV_CT_CHECKSUM_DEFAULT <a href="#ga20cbdc14e89aff9075b318fda4f017a4" id="ga20cbdc14e89aff9075b318fda4f017a4"></a>

<p>#define EMV_CT_CHECKSUM_DEFAULT   \"\\x00\\x00\\x00\\x00\\x00\"</p>

0x00 means: default
\--\> when initialized with 0x00 0x00 0x00 then all params set as default mentioned in comment.
For changing the default the corresponding Bit must be set:
e.g. for Transaction Log disabling, the corresponding Bit must be activated = 1

## EMV_CT_CHECKSUM_EXCEPTION_FILE <a href="#ga924ff7802b8658820ee293a0e3c38d64" id="ga924ff7802b8658820ee293a0e3c38d64"></a>

<p>#define EMV_CT_CHECKSUM_EXCEPTION_FILE   0x04</p>

B1b3, default: YES \--\> De/activated per application.

## EMV_CT_CHECKSUM_FORCE_ACCEPTANCE <a href="#gaedadae44ad15775bd93c589dcfffa460" id="gaedadae44ad15775bd93c589dcfffa460"></a>

<p>#define EMV_CT_CHECKSUM_FORCE_ACCEPTANCE   0x10</p>

B1b5, default: YES \--\> De/activated per application and by merchant.

## EMV_CT_CHECKSUM_FORCE_ONLINE <a href="#gaa427d9773f4391c39abca358dabef5ea" id="gaa427d9773f4391c39abca358dabef5ea"></a>

<p>#define EMV_CT_CHECKSUM_FORCE_ONLINE   0x08</p>

B1b4, default: YES \--\> De/activated per application and by merchant.

## EMV_CT_CHECKSUM_INCLUDE_VERSION <a href="#gab0f66aabe5ca57ac9803cc7843ba8099" id="gab0f66aabe5ca57ac9803cc7843ba8099"></a>

<p>#define EMV_CT_CHECKSUM_INCLUDE_VERSION   0x01</p>

B1b1, default: NO \--\> For checksum only.

## EMV_CT_CHECKSUM_MULTILANG_SUPPORT <a href="#gaad2a208a6e39d8442e2478d14f814e59" id="gaad2a208a6e39d8442e2478d14f814e59"></a>

<p>#define EMV_CT_CHECKSUM_MULTILANG_SUPPORT   0x80</p>

B2b7, default: YES since L2 7.0.2.

## EMV_CT_CHECKSUM_PIN_BYPASS <a href="#ga9ef094089eae952238bc36f961c10117" id="ga9ef094089eae952238bc36f961c10117"></a>

<p>#define EMV_CT_CHECKSUM_PIN_BYPASS   0x04</p>

B2b3, default: NO \--\> PIN bypass.

## EMV_CT_CHECKSUM_PIN_BYPASS_ONCE <a href="#ga1869068463843812df2bb29b57a21b19" id="ga1869068463843812df2bb29b57a21b19"></a>

<p>#define EMV_CT_CHECKSUM_PIN_BYPASS_ONCE   0x01</p>

B3b1, default: NO \--\> No subsequent PIN bypass when PIN bypass is active.

## EMV_CT_CHECKSUM_SUPPORT_ADVICES <a href="#ga30522e8e212e24a0ad2df937192d3950" id="ga30522e8e212e24a0ad2df937192d3950"></a>

<p>#define EMV_CT_CHECKSUM_SUPPORT_ADVICES   0x01</p>

B2b1, default: NO \--\> Support of advices on host prot.

## EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE <a href="#gad5a962fbebbc8d7082bd51c29bfaaf63" id="gad5a962fbebbc8d7082bd51c29bfaaf63"></a>

<p>#define EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE   0x10</p>

B2b5, default: YES \--\> Batch data capture.

## EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF <a href="#ga6589ddc798be9f8005f4dc1f7a2a6c4c" id="ga6589ddc798be9f8005f4dc1f7a2a6c4c"></a>

<p>#define EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF   0x02</p>

B2b2, default: YES \--\> Cardholder Confirmation.

## EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL <a href="#ga54b2067bcf84a9d704ffd4779b866dcc" id="ga54b2067bcf84a9d704ffd4779b866dcc"></a>

<p>#define EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL   0x08</p>

B2b4, default: YES \--\> Default TDOL.

## EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE <a href="#ga28a24b448756bfd1554c0419f5ea4b8d" id="ga28a24b448756bfd1554c0419f5ea4b8d"></a>

<p>#define EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE   0x20</p>

B1b6, default: NO \--\> For checksum only \--\> application related decision.

## EMV_CT_CHECKSUM_SUPPORT_PSE <a href="#ga45425a687faa00648eaaf48d4b35a4a5" id="ga45425a687faa00648eaaf48d4b35a4a5"></a>

<p>#define EMV_CT_CHECKSUM_SUPPORT_PSE   0x40</p>

B1b7, default: YES \--\> De/activated per transaction (EMV_Select)

## EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD <a href="#ga745eee1820113c5b33456f6f88167272" id="ga745eee1820113c5b33456f6f88167272"></a>

<p>#define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD   0x40</p>

B2b7, default: NO \--\> Card initiated referrals.

## EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS <a href="#ga0d61a27e5822ac246e19ca4cb4d0b20b" id="ga0d61a27e5822ac246e19ca4cb4d0b20b"></a>

<p>#define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS   0x20</p>

B2b6, default: YES \--\> Issuer initiated referrals.

## EMV_CT_CHECKSUM_TRANSACTION_LOG <a href="#ga2ed44f63eb470372105fb66907bb15bf" id="ga2ed44f63eb470372105fb66907bb15bf"></a>

<p>#define EMV_CT_CHECKSUM_TRANSACTION_LOG   0x02</p>

B1b2, default: YES \--\> De/activated per application.

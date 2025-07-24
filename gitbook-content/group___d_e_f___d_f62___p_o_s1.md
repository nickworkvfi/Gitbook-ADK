---
hidden: true
title: "Position 1: chipcard command where error occurs (2 byte)Transaction execution » Output data » Additional error data"
---

[Macros](#define-members)

Collaboration diagram for Position 1: chipcard command where error occurs (2 byte):

![](group___d_e_f___d_f62___p_o_s1.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_DF62_ERR_POS1_CHIP_RESET](#ga491f031248d8ef4fe63ad43847a7b9ee)   0x1000u |
|   | reset (ATR) during technology selection [More\...](#ga491f031248d8ef4fe63ad43847a7b9ee)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID](#ga08ca19f0cdbfb6efb2409d04ab45898c)   0x2000u |
|   | SELECT during build of candidate list using explicit mode. [More\...](#ga08ca19f0cdbfb6efb2409d04ab45898c)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE](#ga6b65bfca2a3d3d4c87f0739801c3c3eb)   0x2100u |
|   | SELECT during build of candidate list using PSE. [More\...](#ga6b65bfca2a3d3d4c87f0739801c3c3eb)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE](#gaf0b551570ee1171e7c7356b91e61e4ad)   0x2200u |
|   | READ RECORD during build of candidate list using PSE. [More\...](#gaf0b551570ee1171e7c7356b91e61e4ad)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_SEL_FINAL](#gac687265b650f549102ecc0547fdf2bb2)   0x3000u |
|   | SELECT during final selection. [More\...](#gac687265b650f549102ecc0547fdf2bb2)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_GPO](#gaa19e8a460b225ea33af9fefca4dfbeff)   0x4000u |
|   | GET PROCESSING OPTIONS. [More\...](#gaa19e8a460b225ea33af9fefca4dfbeff)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_READ](#ga56f0e715826c9b9ce612d67c34c951f4)   0x5000u |
|   | READ RECORD. [More\...](#ga56f0e715826c9b9ce612d67c34c951f4)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_INT_AUTH](#gaf0e18681abf89502cb3f154e6478b38a)   0x6000u |
|   | INTERNAL AUTHENTICATE. [More\...](#gaf0e18681abf89502cb3f154e6478b38a)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_GETDATA_PTC](#ga9f96b90edd7e4eda9db8495e8f8fc484)   0x7001u |
|   | GET DATA for PIN try counter. [More\...](#ga9f96b90edd7e4eda9db8495e8f8fc484)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_GETCHALLENGE](#ga07418af7510d16e5084853446b8af411)   0x7100u |
|   | GET CHALLENGE. [More\...](#ga07418af7510d16e5084853446b8af411)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN](#ga430923f72823938e61ef907a0b246424)   0x7210u |
|   | VERIFY for enciphered PIN. [More\...](#ga430923f72823938e61ef907a0b246424)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN](#ga8b2868d8080ec89377c8b755457b2e47)   0x7220u |
|   | VERIFY for plaintext PIN. [More\...](#ga8b2868d8080ec89377c8b755457b2e47)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_GETDATA_ATC](#gae03fae9a8bbf070ad1390a56ee31816d)   0x8001u |
|   | GET DATA for ATC. [More\...](#gae03fae9a8bbf070ad1390a56ee31816d)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC](#ga2fa3ca79964ff5a4576e79f27f223e64)   0x8002u |
|   | GET DATA for LOATC. [More\...](#ga2fa3ca79964ff5a4576e79f27f223e64)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_GENAC_1](#ga8c1e73eb021b3850d47b75c0e7f0e793)   0x9001u |
|   | 1st GENERATE AC without CDA [More\...](#ga8c1e73eb021b3850d47b75c0e7f0e793)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA](#ga3c06e0de2995d2a9b147e8534593d2b6)   0x9011u |
|   | 1st GENERATE AC with CDA [More\...](#ga3c06e0de2995d2a9b147e8534593d2b6)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_EXTAUTH](#ga5d81317c5ec89fb4ce1150cca53f06b0)   0xA000u |
|   | EXTERNAL AUTHENTICATE. [More\...](#ga5d81317c5ec89fb4ce1150cca53f06b0)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT](#ga1addcfbfdfa866e533df9cf7b9614849)   0xB100u |
|   | critical script command [More\...](#ga1addcfbfdfa866e533df9cf7b9614849)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_GENAC_2](#ga9f85ceca2cae32d3f3f403db5909aa98)   0x9002u |
|   | 2nd GENERATE AC without CDA [More\...](#ga9f85ceca2cae32d3f3f403db5909aa98)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA](#gaad6efa8e60e69a4f62f9dac23019a928)   0x9012u |
|   | 2nd GENERATE AC with CDA [More\...](#gaad6efa8e60e69a4f62f9dac23019a928)<br/> |
| #define  | [EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT](#ga70d0ed5281e57c2dd5bb04c0e7263a6e)   0xB200u |
|   | non critical script command [More\...](#ga70d0ed5281e57c2dd5bb04c0e7263a6e)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_DF62_ERR_POS1_CHIP_RESET <a href="#ga491f031248d8ef4fe63ad43847a7b9ee" id="ga491f031248d8ef4fe63ad43847a7b9ee"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_CHIP_RESET   0x1000u</p>

reset (ATR) during technology selection

## EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT <a href="#ga1addcfbfdfa866e533df9cf7b9614849" id="ga1addcfbfdfa866e533df9cf7b9614849"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT   0xB100u</p>

critical script command

## EMV_ADK_DF62_ERR_POS1_EXTAUTH <a href="#ga5d81317c5ec89fb4ce1150cca53f06b0" id="ga5d81317c5ec89fb4ce1150cca53f06b0"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_EXTAUTH   0xA000u</p>

EXTERNAL AUTHENTICATE.

## EMV_ADK_DF62_ERR_POS1_GENAC_1 <a href="#ga8c1e73eb021b3850d47b75c0e7f0e793" id="ga8c1e73eb021b3850d47b75c0e7f0e793"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_GENAC_1   0x9001u</p>

1st GENERATE AC without CDA

## EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA <a href="#ga3c06e0de2995d2a9b147e8534593d2b6" id="ga3c06e0de2995d2a9b147e8534593d2b6"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA   0x9011u</p>

1st GENERATE AC with CDA

## EMV_ADK_DF62_ERR_POS1_GENAC_2 <a href="#ga9f85ceca2cae32d3f3f403db5909aa98" id="ga9f85ceca2cae32d3f3f403db5909aa98"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_GENAC_2   0x9002u</p>

2nd GENERATE AC without CDA

## EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA <a href="#gaad6efa8e60e69a4f62f9dac23019a928" id="gaad6efa8e60e69a4f62f9dac23019a928"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA   0x9012u</p>

2nd GENERATE AC with CDA

## EMV_ADK_DF62_ERR_POS1_GETCHALLENGE <a href="#ga07418af7510d16e5084853446b8af411" id="ga07418af7510d16e5084853446b8af411"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_GETCHALLENGE   0x7100u</p>

GET CHALLENGE.

## EMV_ADK_DF62_ERR_POS1_GETDATA_ATC <a href="#gae03fae9a8bbf070ad1390a56ee31816d" id="gae03fae9a8bbf070ad1390a56ee31816d"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_GETDATA_ATC   0x8001u</p>

GET DATA for ATC.

## EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC <a href="#ga2fa3ca79964ff5a4576e79f27f223e64" id="ga2fa3ca79964ff5a4576e79f27f223e64"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC   0x8002u</p>

GET DATA for LOATC.

## EMV_ADK_DF62_ERR_POS1_GETDATA_PTC <a href="#ga9f96b90edd7e4eda9db8495e8f8fc484" id="ga9f96b90edd7e4eda9db8495e8f8fc484"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_GETDATA_PTC   0x7001u</p>

GET DATA for PIN try counter.

## EMV_ADK_DF62_ERR_POS1_GPO <a href="#gaa19e8a460b225ea33af9fefca4dfbeff" id="gaa19e8a460b225ea33af9fefca4dfbeff"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_GPO   0x4000u</p>

GET PROCESSING OPTIONS.

## EMV_ADK_DF62_ERR_POS1_INT_AUTH <a href="#gaf0e18681abf89502cb3f154e6478b38a" id="gaf0e18681abf89502cb3f154e6478b38a"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_INT_AUTH   0x6000u</p>

INTERNAL AUTHENTICATE.

## EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT <a href="#ga70d0ed5281e57c2dd5bb04c0e7263a6e" id="ga70d0ed5281e57c2dd5bb04c0e7263a6e"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT   0xB200u</p>

non critical script command

## EMV_ADK_DF62_ERR_POS1_READ <a href="#ga56f0e715826c9b9ce612d67c34c951f4" id="ga56f0e715826c9b9ce612d67c34c951f4"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_READ   0x5000u</p>

READ RECORD.

## EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE <a href="#gaf0b551570ee1171e7c7356b91e61e4ad" id="gaf0b551570ee1171e7c7356b91e61e4ad"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE   0x2200u</p>

READ RECORD during build of candidate list using PSE.

## EMV_ADK_DF62_ERR_POS1_SEL_FINAL <a href="#gac687265b650f549102ecc0547fdf2bb2" id="gac687265b650f549102ecc0547fdf2bb2"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_SEL_FINAL   0x3000u</p>

SELECT during final selection.

## EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID <a href="#ga08ca19f0cdbfb6efb2409d04ab45898c" id="ga08ca19f0cdbfb6efb2409d04ab45898c"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID   0x2000u</p>

SELECT during build of candidate list using explicit mode.

## EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE <a href="#ga6b65bfca2a3d3d4c87f0739801c3c3eb" id="ga6b65bfca2a3d3d4c87f0739801c3c3eb"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE   0x2100u</p>

SELECT during build of candidate list using PSE.

## EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN <a href="#ga430923f72823938e61ef907a0b246424" id="ga430923f72823938e61ef907a0b246424"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN   0x7210u</p>

VERIFY for enciphered PIN.

## EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN <a href="#ga8b2868d8080ec89377c8b755457b2e47" id="ga8b2868d8080ec89377c8b755457b2e47"></a>

<p>#define EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN   0x7220u</p>

VERIFY for plaintext PIN.

---
hidden: true
title: Track Type Code
---

[Macros](#define-members)

These values indicate the type of track data. [More\...](#details)

|          |                                                                |
|----------|----------------------------------------------------------------|
| Macros   |                                                                |
| #define  | [MSR_CARD_UNKNOWN](#ga723f8beb3336381c5ecb8f1ec9bba0f4)   0x00 |
| #define  | [MSR_CARD_ISO](#gacd72026476677415eaf482b2fb2e0032)   0x01     |
| #define  | [MSR_CARD_JIS_II](#gaf1dad30c2494f4da59022687eb8e9dc1)   0x02  |
| #define  | [MSR_CARD_AAMVA](#ga6cc72de09ffb5837fe5c292afaccba2e)   0x04   |
| #define  | [MSR_CARD_CADLID](#ga73c4fdf1b21740a38b2d3a3bf00d3f00)   0x08  |

## DetailedDescription {#detailed-description}

These values indicate the type of track data.

## MacroDefinition Documentation {#macro-definition-documentation}

## MSR_CARD_AAMVA <a href="#ga6cc72de09ffb5837fe5c292afaccba2e" id="ga6cc72de09ffb5837fe5c292afaccba2e"></a>

<p>#define MSR_CARD_AAMVA   0x04</p>

AAMVA driver license magnetic card encoding (returned since VOS 3), see also option MSR_ENABLE_LICENSE_DECODE

## MSR_CARD_CADLID <a href="#ga73c4fdf1b21740a38b2d3a3bf00d3f00" id="ga73c4fdf1b21740a38b2d3a3bf00d3f00"></a>

<p>#define MSR_CARD_CADLID   0x08</p>

CADLID driver license magnetic card encoding (returned since VOS 3) see also option MSR_ENABLE_LICENSE_DECODE

## MSR_CARD_ISO <a href="#gacd72026476677415eaf482b2fb2e0032" id="gacd72026476677415eaf482b2fb2e0032"></a>

<p>#define MSR_CARD_ISO   0x01</p>

ISO track data.

## MSR_CARD_JIS_II <a href="#gaf1dad30c2494f4da59022687eb8e9dc1" id="gaf1dad30c2494f4da59022687eb8e9dc1"></a>

<p>#define MSR_CARD_JIS_II   0x02</p>

JIS-II track data.

## MSR_CARD_UNKNOWN <a href="#ga723f8beb3336381c5ecb8f1ec9bba0f4" id="ga723f8beb3336381c5ecb8f1ec9bba0f4"></a>

<p>#define MSR_CARD_UNKNOWN   0x00</p>

Unknown track data.

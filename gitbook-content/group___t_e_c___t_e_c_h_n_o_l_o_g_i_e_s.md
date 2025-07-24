---
hidden: true
title: TEC technology code
---

[Macros](#define-members)

These codes are used to specify supported technologies. A combination is possible using \| operator. [More\...](#details)

|          |                                                     |
|----------|-----------------------------------------------------|
| Macros   |                                                     |
| #define  | [CTS_CHIP](#gadbc63cc59da76fff7974cd5631f56662)   1 |
| #define  | [CTS_MSR](#gaece6355aecbe1744ed15e5b41e0e6c15)   2  |
| #define  | [CTS_CTLS](#ga56e64c2a97c61e8cb043de2852986a3a)   4 |
| #define  | [CTS_SYNC](#ga04faa97d1f562e3d9911be8b2e3d250f)   8 |

## DetailedDescription {#detailed-description}

These codes are used to specify supported technologies. A combination is possible using \| operator.

## MacroDefinition Documentation {#macro-definition-documentation}

## CTS_CHIP <a href="#gadbc63cc59da76fff7974cd5631f56662" id="gadbc63cc59da76fff7974cd5631f56662"></a>

<p>#define CTS_CHIP   1</p>

Contact Chip (asynchronous card).

## CTS_CTLS <a href="#ga56e64c2a97c61e8cb043de2852986a3a" id="ga56e64c2a97c61e8cb043de2852986a3a"></a>

<p>#define CTS_CTLS   4</p>

Contactless (EMV, NFC, and/or VAS).

## CTS_MSR <a href="#gaece6355aecbe1744ed15e5b41e0e6c15" id="gaece6355aecbe1744ed15e5b41e0e6c15"></a>

<p>#define CTS_MSR   2</p>

Magstripe.

## CTS_SYNC <a href="#ga04faa97d1f562e3d9911be8b2e3d250f" id="ga04faa97d1f562e3d9911be8b2e3d250f"></a>

<p>#define CTS_SYNC   8</p>

Contact Chip, synchronous card. Output only, synchronous card detection is activated by [CTS_CHIP](#gadbc63cc59da76fff7974cd5631f56662) plus <a href="group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#ga10f9930ac821ef5f612690b2201f94e3">CTS_OPTION_TAG_SYNC_CARD_TYPE</a>

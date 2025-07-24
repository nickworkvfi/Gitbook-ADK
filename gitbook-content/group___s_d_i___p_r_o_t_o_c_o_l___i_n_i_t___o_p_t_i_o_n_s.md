---
hidden: true
title: SDI Protocol Initialization Options
---

[Macros](#define-members)

SDI protocol configuration flags. [More\...](#details)

|  |  |
|----|----|
| Macros |  |
| #define  | [SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK](#ga39f86a1acf5041aeb65747c144a78ae1)   0x01 |
|   | trace using the EMV callback [More\...](#ga39f86a1acf5041aeb65747c144a78ae1)<br/> |
| #define  | [SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG](#gae8bb92331299549acb6d1feed717490c)   0x02 |
|   | use syslog instead of EMV callback for trace [More\...](#gae8bb92331299549acb6d1feed717490c)<br/> |
| #define  | [SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG](#ga388c8eea73c5da8e6453f347ff9bbcac)   0x04 |

## DetailedDescription {#detailed-description}

SDI protocol configuration flags.

## MacroDefinition Documentation {#macro-definition-documentation}

## SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG <a href="#ga388c8eea73c5da8e6453f347ff9bbcac" id="ga388c8eea73c5da8e6453f347ff9bbcac"></a>

<p>#define SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG   0x04</p>

**<a href="deprecated.md#_deprecated000177">Deprecated:</a>** Trace via ADK-LOG is controlled by LOG control panel component always uses ADK LOG channel with label SDIPROT

## SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK <a href="#ga39f86a1acf5041aeb65747c144a78ae1" id="ga39f86a1acf5041aeb65747c144a78ae1"></a>

<p>#define SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK   0x01</p>

trace using the EMV callback

**<a href="deprecated.md#_deprecated000175">Deprecated:</a>** component always uses ADK LOG channel with label SDIPROT

## SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG <a href="#gae8bb92331299549acb6d1feed717490c" id="gae8bb92331299549acb6d1feed717490c"></a>

<p>#define SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG   0x02</p>

use syslog instead of EMV callback for trace

**<a href="deprecated.md#_deprecated000176">Deprecated:</a>** component always uses ADK LOG channel with label SDIPROT

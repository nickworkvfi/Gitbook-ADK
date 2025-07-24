---
hidden: true
title: \_logf.h File Reference
---

[Macros](#define-members) \| [Variables](#var-members)

`#include "log/liblog2.h"`
`#include "log/syslogcmd.h"`

Include dependency graph for \_logf.h:

![](__logf_8h__incl.png)

This graph shows which files directly or indirectly include this file:

![](__logf_8h__dep__incl.png)

<a href="__logf_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Macros |  |
| #define  | [SDI_LOG_CHANNEL](#a6d6f114e838fa3d69b35af94dd5d62ea)   \"SDI\" |
| #define  | [\_LOGF_TRACE](#ad81571c96cd42e7ac5d871b020e0b340)(format, \...)   LOGF_TRACE(<a href="main_8cpp.md#ab8518ee19337dc0debb1f831ada96dd6">logHandle</a>, format, \## \_\_VA_ARGS\_\_) |
| #define  | [\_LOGF_INFO](#abae321ba8d826ebb9d4e971a088f825c)(format, \...)   LOGF_INFO(<a href="main_8cpp.md#ab8518ee19337dc0debb1f831ada96dd6">logHandle</a>, format, \## \_\_VA_ARGS\_\_) |
| #define  | [\_LOGF_WARN](#a7ae8f39cedcfcc98a664c230188fdd40)(format, \...)   LOGF_WARN(<a href="main_8cpp.md#ab8518ee19337dc0debb1f831ada96dd6">logHandle</a>, format, \## \_\_VA_ARGS\_\_) |
| #define  | [\_LOGF_ERROR](#a701d2cf9d0913b973967b1e2eab7909d)(format, \...)   LOGF_ERROR(<a href="main_8cpp.md#ab8518ee19337dc0debb1f831ada96dd6">logHandle</a>, format, \## \_\_VA_ARGS\_\_) |
| #define  | [\_LOGAPI_HEXDUMP_TRACE](#aa1a704b853204e067c588f64cd14af5f)(title, data, size)   LOGAPI_HEXDUMP2(<a href="main_8cpp.md#ab8518ee19337dc0debb1f831ada96dd6">logHandle</a>, LOGAPI_TRACE, title, data, size) |
| #define  | [\_LOGAPI_HEXDUMP_INFO](#a49f5382c07d5a046e0521dd4878d0539)(title, data, size)   LOGAPI_HEXDUMP2(<a href="main_8cpp.md#ab8518ee19337dc0debb1f831ada96dd6">logHandle</a>, LOGAPI_INFO, title, data, size) |
| #define  | [\_LOGAPI_HEXDUMP_RAW_INFO](#a8a796221455d95533768ed0d8e60ad6e)(data, size)   LOGAPI_HEXDUMP_RAW2(<a href="main_8cpp.md#ab8518ee19337dc0debb1f831ada96dd6">logHandle</a>, LOGAPI_INFO, data, size) |
| #define  | [\_LOG_LEVEL_ENABLED](#a416d0b686725b50882323e4a8dd8fa9e)(level)   LogAPI_LevelEnough2(<a href="main_8cpp.md#ab8518ee19337dc0debb1f831ada96dd6">logHandle</a>,level) |

|               |                                                 |
|---------------|-------------------------------------------------|
| Variables     |                                                 |
| LibLogHandle  | [logHandle](#ab8518ee19337dc0debb1f831ada96dd6) |

## MacroDefinition Documentation {#macro-definition-documentation}

## \_LOG_LEVEL_ENABLED <a href="#a416d0b686725b50882323e4a8dd8fa9e" id="a416d0b686725b50882323e4a8dd8fa9e"></a>

<p>#define \_LOG_LEVEL_ENABLED</p>

## \_LOGAPI_HEXDUMP_INFO <a href="#a49f5382c07d5a046e0521dd4878d0539" id="a49f5382c07d5a046e0521dd4878d0539"></a>

<p>#define \_LOGAPI_HEXDUMP_INFO</p>

## \_LOGAPI_HEXDUMP_RAW_INFO <a href="#a8a796221455d95533768ed0d8e60ad6e" id="a8a796221455d95533768ed0d8e60ad6e"></a>

<p>#define \_LOGAPI_HEXDUMP_RAW_INFO</p>

## \_LOGAPI_HEXDUMP_TRACE <a href="#aa1a704b853204e067c588f64cd14af5f" id="aa1a704b853204e067c588f64cd14af5f"></a>

<p>#define \_LOGAPI_HEXDUMP_TRACE</p>

## \_LOGF_ERROR <a href="#a701d2cf9d0913b973967b1e2eab7909d" id="a701d2cf9d0913b973967b1e2eab7909d"></a>

<p>#define \_LOGF_ERROR</p>

## \_LOGF_INFO <a href="#abae321ba8d826ebb9d4e971a088f825c" id="abae321ba8d826ebb9d4e971a088f825c"></a>

<p>#define \_LOGF_INFO</p>

## \_LOGF_TRACE <a href="#ad81571c96cd42e7ac5d871b020e0b340" id="ad81571c96cd42e7ac5d871b020e0b340"></a>

<p>#define \_LOGF_TRACE</p>

## \_LOGF_WARN <a href="#a7ae8f39cedcfcc98a664c230188fdd40" id="a7ae8f39cedcfcc98a664c230188fdd40"></a>

<p>#define \_LOGF_WARN</p>

## SDI_LOG_CHANNEL <a href="#a6d6f114e838fa3d69b35af94dd5d62ea" id="a6d6f114e838fa3d69b35af94dd5d62ea"></a>

<p>#define SDI_LOG_CHANNEL   \"SDI\"</p>

## VariableDocumentation {#variable-documentation}

## logHandle <a href="#ab8518ee19337dc0debb1f831ada96dd6" id="ab8518ee19337dc0debb1f831ada96dd6"></a>

<p>LibLogHandle logHandle</p>

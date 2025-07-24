---
hidden: true
title: IOinit.c File Reference
---

[Macros](#define-members) \| [Functions](#func-members) \| [Variables](#var-members)

`#include "../inc/VHQTypes.h"`
`#include "VHQIoInternals.h"`
`#include "VHQDebug.h"`
`#include "../inc/VHQIo.h"`
`#include "../inc/VHQConfig.h"`
`#include <string.h>`
`#include "ComIntf.h"`
`#include "VHQDownloader.h"`

Include dependency graph for IOinit.c:

![](_i_oinit_8c__incl.png)

|          |                                                              |
|----------|--------------------------------------------------------------|
| Macros   |                                                              |
| #define  | [\_MAIN_LOOP_EXTERNS\_](#a0c0b5276fb82904fa5f9885c7f8e58ba)  |
| #define  | [stricmp](#a4e0be90a3757e352f42612d09a7d1aa5)   strcasecmp   |
| #define  | [strnicmp](#a16a19b1831112e876b010468ec15916f)   strncasecmp |

|  |  |
|----|----|
| Functions |  |
| bool  | [SerOpen](#a23b2bd37bcdaf463461bd318c0bd0f52) (char \*pszPort) |
| void  | [SerClose](#a645e58ddb6b583511d180b7299309454) () |
| void \*  | [EventSchedulerInitCallbackTable](#a7101b4a88f78442eda98f6365281a281) (char \*pszOperatingMode) |
| bool  | [VHQioInitialize](#ac38679fae359d1639612f04bc0d751eb) (void) |
| void  | [VHQioDeinitialize](#a3bef93bf6b09257a1517b262d02b0345) () |
| char \*  | [GetServerURL](#aadfc901514c1a797fd3ba88d32f9b18d) (void) |
| void  | [VHQOpenComms](#a51a0f28c1f99e0f208d65c0480200d0e) (void) |
| void  | [VHQCloseComms](#affe7c3f0c12e69f85332e6834792902b) (void) |

|                |                                                           |
|----------------|-----------------------------------------------------------|
| Variables      |                                                           |
| int            | [g_ui32CommError](#a4095508fc0881b9e1b167a95eb8a6576) = 0 |
| IO_Properties  | [g_sIoProperties](#ae59f61de0086c11d79a1783b9c1d9043)     |

## DetailedDescription {#detailed-description}

Implements the wrappers for web services exported by VHQ server

## MacroDefinition Documentation {#macro-definition-documentation}

## \_MAIN_LOOP_EXTERNS\_ <a href="#a0c0b5276fb82904fa5f9885c7f8e58ba" id="a0c0b5276fb82904fa5f9885c7f8e58ba"></a>

<p>#define \_MAIN_LOOP_EXTERNS\_</p>

## stricmp <a href="#a4e0be90a3757e352f42612d09a7d1aa5" id="a4e0be90a3757e352f42612d09a7d1aa5"></a>

<p>#define stricmp   strcasecmp</p>

## strnicmp <a href="#a16a19b1831112e876b010468ec15916f" id="a16a19b1831112e876b010468ec15916f"></a>

<p>#define strnicmp   strncasecmp</p>

## FunctionDocumentation {#function-documentation}

## EventSchedulerInitCallbackTable() <a href="#a7101b4a88f78442eda98f6365281a281" id="a7101b4a88f78442eda98f6365281a281"></a>

<p>void\* EventSchedulerInitCallbackTable</p>

This function initializes the event scheduler callback table to launch an event.

**Parameters**

\[in\] **pszOperatingMode** = operating mode

### Returns

pointer to callback table.

## GetServerURL() <a href="#aadfc901514c1a797fd3ba88d32f9b18d" id="aadfc901514c1a797fd3ba88d32f9b18d"></a>

<p>char\* GetServerURL</p>

This function gets the active server

### Returns

void

## SerClose() <a href="#a645e58ddb6b583511d180b7299309454" id="a645e58ddb6b583511d180b7299309454"></a>

<p>void SerClose</p>

## SerOpen() <a href="#a23b2bd37bcdaf463461bd318c0bd0f52" id="a23b2bd37bcdaf463461bd318c0bd0f52"></a>

<p>bool SerOpen</p>

## VHQCloseComms() <a href="#affe7c3f0c12e69f85332e6834792902b" id="affe7c3f0c12e69f85332e6834792902b"></a>

<p>void VHQCloseComms</p>

## VHQioDeinitialize() <a href="#a3bef93bf6b09257a1517b262d02b0345" id="a3bef93bf6b09257a1517b262d02b0345"></a>

<p>void VHQioDeinitialize</p>

This function de-initializes the IO properties with data from config file.

### Returns

void

## VHQioInitialize() <a href="#ac38679fae359d1639612f04bc0d751eb" id="ac38679fae359d1639612f04bc0d751eb"></a>

<p>bool VHQioInitialize</p>

This function initializes the IO properties with data from config file.

### Returns

void

## VHQOpenComms() <a href="#a51a0f28c1f99e0f208d65c0480200d0e" id="a51a0f28c1f99e0f208d65c0480200d0e"></a>

<p>void VHQOpenComms</p>

## VariableDocumentation {#variable-documentation}

## g_sIoProperties <a href="#ae59f61de0086c11d79a1783b9c1d9043" id="ae59f61de0086c11d79a1783b9c1d9043"></a>

<p>IO_Properties g_sIoProperties</p>

## g_ui32CommError <a href="#a4095508fc0881b9e1b167a95eb8a6576" id="a4095508fc0881b9e1b167a95eb8a6576"></a>

<p>int g_ui32CommError = 0</p>

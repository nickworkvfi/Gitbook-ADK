---
hidden: true
title: sec.h File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

`#include "csdcontainer.h"`
`#include "`<a href="libsec_8h_source.md">sec/libsec.h</a>`"`

Include dependency graph for sec.h:

![](sec_8h__incl.png)

This graph shows which files directly or indirectly include this file:

![](sec_8h__dep__incl.png)

<a href="sec_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Macros |  |
| #define  | [CLA_SEC](#a72e3f69af3894a5cceb704998c518665)   0x70 |
|   | Class for SEC commands. [More\...](#a72e3f69af3894a5cceb704998c518665)<br/> |
| #define  | [INS_SEC_OPEN](#ac74bc220be6eeeefbb63b996260afc24)   0x00 |
|   | Open SecADK crypto interface. [More\...](#ac74bc220be6eeeefbb63b996260afc24)<br/> |
| #define  | [INS_SEC_CLOSE](#a5af03568952420504b69869b655b6665)   0x01 |
|   | Close SecADK crypto interface. [More\...](#a5af03568952420504b69869b655b6665)<br/> |
| #define  | [INS_SEC_ENCRYPT](#a2c15ab1edb92fe335f8c2362f3ceddf6)   0x02 |
|   | SecADK Encrypt. [More\...](#a2c15ab1edb92fe335f8c2362f3ceddf6)<br/> |
| #define  | [INS_SEC_DECRYPT](#ae68f53f2d6dd3058d7a4c74a1f37e5c6)   0x03 |
|   | SecADK Decrypt. [More\...](#ae68f53f2d6dd3058d7a4c74a1f37e5c6)<br/> |
| #define  | [INS_SEC_SIGN](#a6b65f189b9f518902cfc6d38b5972c0e)   0x04 |
|   | SecADK Singing. [More\...](#a6b65f189b9f518902cfc6d38b5972c0e)<br/> |
| #define  | [INS_SEC_VERIFY](#afb9a2cc81a942bfd3f0ed9d6745c4878)   0x05 |
|   | SecADK Verify. [More\...](#afb9a2cc81a942bfd3f0ed9d6745c4878)<br/> |
| #define  | [INS_SEC_UPDATE_KEY](#a7be370ee4477eaa72f63f283a99a8e1b)   0x06 |
|   | SecADK Update Key. [More\...](#a7be370ee4477eaa72f63f283a99a8e1b)<br/> |
| #define  | [INS_SEC_SET_KEY_SET](#a796f0cb0783a46f24c3dedc304c31eb8)   0x07 |
|   | SecADK Set Key Set. [More\...](#a796f0cb0783a46f24c3dedc304c31eb8)<br/> |
| #define  | [INS_SEC_GET_ENCRYPTED_PIN](#a79fa2cfe6114399ad96f41977bcb7fe1)   0x08 |
|   | SecADK Get encrypted Pin. [More\...](#a79fa2cfe6114399ad96f41977bcb7fe1)<br/> |
| #define  | [INS_SEC_GET_KEY_INVENTORY](#a645ac958fd2392b18f23cba23eaf19b4)   0x09 |
|   | SecADK Get Key Inventory. [More\...](#a645ac958fd2392b18f23cba23eaf19b4)<br/> |
| #define  | [INS_SEC_GET_KEY_DATA](#ada44cc11d4f02b072bc4a36831914b12)   0x0A |
|   | SecADK Get Key Data. [More\...](#ada44cc11d4f02b072bc4a36831914b12)<br/> |
| #define  | [INS_SEC_GET_STATUS](#aa9fe8114148d7219b3467243e20a6d69)   0x0B |
|   | SecADK Get Status. [More\...](#aa9fe8114148d7219b3467243e20a6d69)<br/> |
| #define  | [INS_SEC_GET_VERSION](#a72d95895724387f428c8b04913fa9e2d)   0x0C |
|   | SecADK Get Version. [More\...](#a72d95895724387f428c8b04913fa9e2d)<br/> |

|  |  |
|----|----|
| Functions |  |
| bool  | [isAdeEnabled](#acfedfb1b909acd490a61944fb6d79def) (void) |
| void  | [handleSec](#ac8c59ad55811826c6d394f6ae3dfcc04) (unsigned short msgBufSize, unsigned char \*msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char \*rsp, unsigned short \*rspSize) |
| int  | [findCryptoHandle](#a1152b5b6ef4eeeb34352d2707f6ab872) (struct <a href="struct_b_t_l_v_node.md">BTLVNode</a> \*xBtlv, struct <a href="struct_b_t_l_v_node.md">BTLVNode</a> \*\*node, <a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">com_adksec_cmd::secHandle_t</a> \*handle) |
| int  | [SEC_getEncryptedPin](#a74d8a4aae80136676662f5c370352591) (struct <a href="struct_b_t_l_v_node.md">BTLVNode</a> \*xBtlv, <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">com_adksec_cmd::secError</a> &errorCode) |
| bool  | [getSecHandle](#ad7f13c5a06cf61a03f3d0a6f993a2cc4) (void \*sdihandle, <a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">com_adksec_cmd::secHandle_t</a> &h, unsigned idx) |
| void  | [cleanUpSecHandles](#a8ab35d4f50f1f1a915b30797fa283c03) (void \*sdihandle) |

## MacroDefinition Documentation {#macro-definition-documentation}

## CLA_SEC <a href="#a72e3f69af3894a5cceb704998c518665" id="a72e3f69af3894a5cceb704998c518665"></a>

<p>#define CLA_SEC   0x70</p>

Class for SEC commands.

## INS_SEC_CLOSE <a href="#a5af03568952420504b69869b655b6665" id="a5af03568952420504b69869b655b6665"></a>

<p>#define INS_SEC_CLOSE   0x01</p>

Close SecADK crypto interface.

## INS_SEC_DECRYPT <a href="#ae68f53f2d6dd3058d7a4c74a1f37e5c6" id="ae68f53f2d6dd3058d7a4c74a1f37e5c6"></a>

<p>#define INS_SEC_DECRYPT   0x03</p>

SecADK Decrypt.

## INS_SEC_ENCRYPT <a href="#a2c15ab1edb92fe335f8c2362f3ceddf6" id="a2c15ab1edb92fe335f8c2362f3ceddf6"></a>

<p>#define INS_SEC_ENCRYPT   0x02</p>

SecADK Encrypt.

## INS_SEC_GET_ENCRYPTED_PIN <a href="#a79fa2cfe6114399ad96f41977bcb7fe1" id="a79fa2cfe6114399ad96f41977bcb7fe1"></a>

<p>#define INS_SEC_GET_ENCRYPTED_PIN   0x08</p>

SecADK Get encrypted Pin.

## INS_SEC_GET_KEY_DATA <a href="#ada44cc11d4f02b072bc4a36831914b12" id="ada44cc11d4f02b072bc4a36831914b12"></a>

<p>#define INS_SEC_GET_KEY_DATA   0x0A</p>

SecADK Get Key Data.

## INS_SEC_GET_KEY_INVENTORY <a href="#a645ac958fd2392b18f23cba23eaf19b4" id="a645ac958fd2392b18f23cba23eaf19b4"></a>

<p>#define INS_SEC_GET_KEY_INVENTORY   0x09</p>

SecADK Get Key Inventory.

## INS_SEC_GET_STATUS <a href="#aa9fe8114148d7219b3467243e20a6d69" id="aa9fe8114148d7219b3467243e20a6d69"></a>

<p>#define INS_SEC_GET_STATUS   0x0B</p>

SecADK Get Status.

## INS_SEC_GET_VERSION <a href="#a72d95895724387f428c8b04913fa9e2d" id="a72d95895724387f428c8b04913fa9e2d"></a>

<p>#define INS_SEC_GET_VERSION   0x0C</p>

SecADK Get Version.

## INS_SEC_OPEN <a href="#ac74bc220be6eeeefbb63b996260afc24" id="ac74bc220be6eeeefbb63b996260afc24"></a>

<p>#define INS_SEC_OPEN   0x00</p>

Open SecADK crypto interface.

## INS_SEC_SET_KEY_SET <a href="#a796f0cb0783a46f24c3dedc304c31eb8" id="a796f0cb0783a46f24c3dedc304c31eb8"></a>

<p>#define INS_SEC_SET_KEY_SET   0x07</p>

SecADK Set Key Set.

## INS_SEC_SIGN <a href="#a6b65f189b9f518902cfc6d38b5972c0e" id="a6b65f189b9f518902cfc6d38b5972c0e"></a>

<p>#define INS_SEC_SIGN   0x04</p>

SecADK Singing.

## INS_SEC_UPDATE_KEY <a href="#a7be370ee4477eaa72f63f283a99a8e1b" id="a7be370ee4477eaa72f63f283a99a8e1b"></a>

<p>#define INS_SEC_UPDATE_KEY   0x06</p>

SecADK Update Key.

## INS_SEC_VERIFY <a href="#afb9a2cc81a942bfd3f0ed9d6745c4878" id="afb9a2cc81a942bfd3f0ed9d6745c4878"></a>

<p>#define INS_SEC_VERIFY   0x05</p>

SecADK Verify.

## FunctionDocumentation {#function-documentation}

## cleanUpSecHandles() <a href="#a8ab35d4f50f1f1a915b30797fa283c03" id="a8ab35d4f50f1f1a915b30797fa283c03"></a>

<p>void cleanUpSecHandles</p>

## findCryptoHandle() <a href="#a1152b5b6ef4eeeb34352d2707f6ab872" id="a1152b5b6ef4eeeb34352d2707f6ab872"></a>

<p>int findCryptoHandle</p>

## getSecHandle() <a href="#ad7f13c5a06cf61a03f3d0a6f993a2cc4" id="ad7f13c5a06cf61a03f3d0a6f993a2cc4"></a>

<p>bool getSecHandle</p>

## handleSec() <a href="#ac8c59ad55811826c6d394f6ae3dfcc04" id="ac8c59ad55811826c6d394f6ae3dfcc04"></a>

<p>void handleSec</p>

Dispatch function to handle different crypto interface commands

**Parameters**

\[in\] **msgBufSize** size of the input message buffer \[in\] **msg** pointer to the input message buffer \[in\] **msgSize** size of the input message \[in\] **rspBufSize** maximum size of the response buffer \[in,out\] **rsp** pointer to the response buffer \[in,out\] **rspSize** pointer to the response message size


{% hint style="info" %}
[handleSec()](#ac8c59ad55811826c6d394f6ae3dfcc04) is always executed, even if invoked by a side command. Therefore, this function has no return value, see also <a href="main_8cpp.md#a4892e1b795462119ef4d6fa87c860b90">process_side_command()</a>.
{% endhint %}

## isAdeEnabled() <a href="#acfedfb1b909acd490a61944fb6d79def" id="acfedfb1b909acd490a61944fb6d79def"></a>

<p>bool isAdeEnabled</p>

## SEC_getEncryptedPin() <a href="#a74d8a4aae80136676662f5c370352591" id="a74d8a4aae80136676662f5c370352591"></a>

<p>int SEC_getEncryptedPin</p>

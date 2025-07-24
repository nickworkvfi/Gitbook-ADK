---
hidden: true
title: vfizontalk Namespace Referencezontalk protocal APIs
---

[Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Typedefs |  |
| typedef void(\*  | [recieve_callback](#acd26f94f8d6f0a69f2a7a19bbd0f7ae2)) (char \*) |
| typedef void(\*  | [end_callback](#a5f8e498595d421ca054e012b792ade7a)) (int) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [download_type](#a56f38ce1d91b5263d2ca5af8d537d696) { [PARTIAL](#a56f38ce1d91b5263d2ca5af8d537d696a34d1361202d8c9652ed81b53cda15159) = 0, [FULL](#a56f38ce1d91b5263d2ca5af8d537d696ad08f8ac0aa8dfb59589824359772459e) = 1 } |

|  |  |
|----|----|
| Functions |  |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysZontalkReceive](#a84e98dff4544318d162a761adcf925c1) (short com_port, [recieve_callback](#acd26f94f8d6f0a69f2a7a19bbd0f7ae2) rc_cb, [end_callback](#a5f8e498595d421ca054e012b792ade7a) end_cb, [download_type](#a56f38ce1d91b5263d2ca5af8d537d696) type) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysZontalkCancel](#a0a40c2dc428c53679621bea9a5ad6e44) () |

## DetailedDescription {#detailed-description}

Verifone vfizontalk namespace

## TypedefDocumentation {#typedef-documentation}

## end_callback <a href="#a5f8e498595d421ca054e012b792ade7a" id="a5f8e498595d421ca054e012b792ade7a"></a>

<p>typedef void(\* end_callback) (int)</p>

## recieve_callback <a href="#acd26f94f8d6f0a69f2a7a19bbd0f7ae2" id="acd26f94f8d6f0a69f2a7a19bbd0f7ae2"></a>

<p>typedef void(\* recieve_callback) (char \*)</p>

## EnumerationType Documentation {#enumeration-type-documentation}

## download_type <a href="#a56f38ce1d91b5263d2ca5af8d537d696" id="a56f38ce1d91b5263d2ca5af8d537d696"></a>

<p>enum [download_type](#a56f38ce1d91b5263d2ca5af8d537d696)</p>

| Enumerator |     |
|------------|-----|
| PARTIAL    |     |
| FULL       |     |

## FunctionDocumentation {#function-documentation}

## sysZontalkCancel() <a href="#a0a40c2dc428c53679621bea9a5ad6e44" id="a0a40c2dc428c53679621bea9a5ad6e44"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfizontalk::sysZontalkCancel</p>

Cancel a Zontalk/DL download (initiated by sysZontalkRecieve)

### Returns

\[unsupported block\]

## sysZontalkReceive() <a href="#a84e98dff4544318d162a761adcf925c1" id="a84e98dff4544318d162a761adcf925c1"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfizontalk::sysZontalkReceive</p>

Allows an application to perform a local DL/Zontalk/VeriTalk download. The application must open and configure the port before calling this function.

**Parameters**

\[in\] **com_port** Communication port where the download is received. \[in\] **\*rc_cb** Callback function called when an information/status message is received from the Zontalk/DL server. \[in\] **type** download type \[in\] **\*end_cb** Callback function called when the download completes successfully or failed

### Returns

\[unsupported block\]

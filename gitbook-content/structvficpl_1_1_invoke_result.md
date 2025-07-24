---
hidden: true
title: InvokeResult Struct Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

Trigger invocation result. [More\...](#details)

`#include <`<a href="_commerce_8h_source.md">Commerce.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [InvokeResult](#a041cd984b7a8359b0f5728e5ad19091e) (<a href="namespacevficpl.md#a59e56af19e754a6aa26a612ebf91d05f">ErrorCode</a> [mec](#a494889caa45d0a7170733fe0c5eca6e7)) |
|   | [InvokeResult](#a69996c3653b00e02ecfdfc6b43ca9c9a) (<a href="namespacevficpl.md#a59e56af19e754a6aa26a612ebf91d05f">ErrorCode</a> [mec](#a494889caa45d0a7170733fe0c5eca6e7), int [arc](#a30b5726116ac85ea64777e5d6e333894)) |
|   | [CPL_EXPLICIT_OPERATOR_BOOL](#af1c66f4589feadd578412229be9404b9) () const |

|  |  |
|----|----|
| Data Fields |  |
| <a href="namespacevficpl.md#a59e56af19e754a6aa26a612ebf91d05f">ErrorCode</a>  | [mec](#a494889caa45d0a7170733fe0c5eca6e7) |
|   | CP library main error code. [More\...](#a494889caa45d0a7170733fe0c5eca6e7)<br/> |
| int  | [arc](#a30b5726116ac85ea64777e5d6e333894) |
|   | CP application return code. [More\...](#a30b5726116ac85ea64777e5d6e333894)<br/> |

## DetailedDescription {#detailed-description}

Trigger invocation result.

## Constructor& Destructor Documentation

## InvokeResult()\[1/2\] <a href="#a041cd984b7a8359b0f5728e5ad19091e" id="a041cd984b7a8359b0f5728e5ad19091e"></a> {#invokeresult-12}

<p><a href="structvficpl_1_1_invoke_result.md">InvokeResult</a></p>

explicit

Construct from main error code and set application return code to -1

**Parameters**

\[in\] **mec** - main error code

## InvokeResult()\[2/2\] <a href="#a69996c3653b00e02ecfdfc6b43ca9c9a" id="a69996c3653b00e02ecfdfc6b43ca9c9a"></a> {#invokeresult-22}

<p><a href="structvficpl_1_1_invoke_result.md">InvokeResult</a></p>

Construct from both main error code and application return code

**Parameters**

\[in\] **mec** - main error code \[in\] **arc** - application return code

## MemberFunction Documentation {#member-function-documentation}

## CPL_EXPLICIT_OPERATOR_BOOL() <a href="#af1c66f4589feadd578412229be9404b9" id="af1c66f4589feadd578412229be9404b9"></a>

<p>CPL_EXPLICIT_OPERATOR_BOOL</p>

Implicit conversion to boolean

### Returns

true if both main error code is CP_INVOKE_SUCCESS and application return code is 0, false otherwise

## FieldDocumentation {#field-documentation}

## arc <a href="#a30b5726116ac85ea64777e5d6e333894" id="a30b5726116ac85ea64777e5d6e333894"></a>

<p>int arc</p>

CP application return code.

## mec <a href="#a494889caa45d0a7170733fe0c5eca6e7" id="a494889caa45d0a7170733fe0c5eca6e7"></a>

<p><a href="namespacevficpl.md#a59e56af19e754a6aa26a612ebf91d05f">ErrorCode</a> mec</p>

CP library main error code.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- cpl/include/commerce/<a href="_commerce_8h_source.md">Commerce.h</a>

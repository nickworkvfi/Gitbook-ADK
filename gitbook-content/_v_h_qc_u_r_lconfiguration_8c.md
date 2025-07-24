---
hidden: true
title: VHQcURLconfiguration.c File Reference
---

[Functions](#func-members)

`#include "VHQcURLconfiguration.h"`
`#include "VHQConfig.h"`
`#include "VHQTypes.h"`
`#include "VHQDebug.h"`
`#include <errno.h>`

Include dependency graph for VHQcURLconfiguration.c:

![](_v_h_qc_u_r_lconfiguration_8c__incl.png)

|  |  |
|----|----|
| Functions |  |
| int  | [cURLsetMandatoryConfig](#a7e1cf6889ac428c9c18f62549f52498d) (CURL \*curl) |

## DetailedDescription {#detailed-description}

Main cURL configuration settings operations

## FunctionDocumentation {#function-documentation}

## cURLsetMandatoryConfig() <a href="#a7e1cf6889ac428c9c18f62549f52498d" id="a7e1cf6889ac428c9c18f62549f52498d"></a>

<p>int cURLsetMandatoryConfig</p>

This function sets the different configurations for curl handle.

**Parameters**

\[in\] **curl** =a CURL easy handle returned by curl initialization.

### Returns

int 0, if success; -1, if error

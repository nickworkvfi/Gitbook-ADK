---
title: vficpl::InvokeResult
summary: Trigger invocation result. 

---

# vficpl::InvokeResult



Trigger invocation result. 


`#include <Commerce.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[InvokeResult](structvficpl_1_1_invoke_result.md#function-invokeresult)**([ErrorCode](namespacevficpl.md#enum-errorcode) mec) |
| | **[InvokeResult](structvficpl_1_1_invoke_result.md#function-invokeresult)**([ErrorCode](namespacevficpl.md#enum-errorcode) mec, int arc) |
| | **[CPL_EXPLICIT_OPERATOR_BOOL](structvficpl_1_1_invoke_result.md#function-cpl-explicit-operator-bool)**() const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [ErrorCode](namespacevficpl.md#enum-errorcode) | **[mec](structvficpl_1_1_invoke_result.md#variable-mec)** <br>CP library main error code.  |
| int | **[arc](structvficpl_1_1_invoke_result.md#variable-arc)** <br>CP application return code.  |

## Public Functions Documentation

### function InvokeResult

```cpp
explicit InvokeResult(
    ErrorCode mec
)
```


**Parameters**: 

  * **mec** - main error code 


Construct from main error code and set application return code to -1 


### function InvokeResult

```cpp
InvokeResult(
    ErrorCode mec,
    int arc
)
```


**Parameters**: 

  * **mec** - main error code 
  * **arc** - application return code 


Construct from both main error code and application return code 


### function CPL_EXPLICIT_OPERATOR_BOOL

```cpp
CPL_EXPLICIT_OPERATOR_BOOL() const
```


**Return**: true if both main error code is CP_INVOKE_SUCCESS and application return code is 0, false otherwise 

Implicit conversion to boolean 


## Public Attributes Documentation

### variable mec

```cpp
ErrorCode mec;
```

CP library main error code. 

### variable arc

```cpp
int arc;
```

CP application return code. 

-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
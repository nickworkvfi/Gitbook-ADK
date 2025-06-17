---
title: ImExPar
summary: Structure to tune up import /export operations. 

---

# ImExPar

**Module:** **[Import/Export Utility](group__inf__util.md)** **/** **[Public API](group__inf__util__public.md)**



Structure to tune up import /export operations. 


`#include <inf_util.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| Operation | **[op](struct_im_ex_par.md#variable-op)** <br>Top-level operation codes.  |
| [OperationSubType](group__inf__util__public.md#enum-operationsubtype) | **[subop](struct_im_ex_par.md#variable-subop)** <br>Operation sub type.  |
| int | **[is_conditional](struct_im_ex_par.md#variable-is-conditional)** <br>Condition has been specified.  |
| std::string | **[condition](struct_im_ex_par.md#variable-condition)** <br>Condition to match.  |

## Public Attributes Documentation

### variable op

```cpp
Operation op;
```

Top-level operation codes. 

### variable subop

```cpp
OperationSubType subop;
```

Operation sub type. 

### variable is_conditional

```cpp
int is_conditional;
```

Condition has been specified. 

### variable condition

```cpp
std::string condition;
```

Condition to match. 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
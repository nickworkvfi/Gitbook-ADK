---
title: ErrorInfo
summary: Structure to capture error information. 

---

# ErrorInfo

**Module:** **[Import/Export Utility](group__inf__util.md)** **/** **[Public API](group__inf__util__public.md)**



Structure to capture error information.  [More...](#detailed-description)


`#include <inf_util.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [ErrorCode](group__inf__util__public.md#enum-errorcode) | **[errorCode](struct_error_info.md#variable-errorcode)** <br>final error code  |
| char * | **[shortMessage](struct_error_info.md#variable-shortmessage)** <br>short message that can be shown to the end user  |
| char * | **[location](struct_error_info.md#variable-location)** <br>location of the faulty object. Can be file name, file/line, or database table.  |
| char * | **[extendedMessage](struct_error_info.md#variable-extendedmessage)** <br>message that provides details of the failure  |

## Detailed Description

```cpp
struct ErrorInfo;
```

Structure to capture error information. 

This structure can be used by the caller of Info Svc to receive extended error information in the case of error 

## Public Attributes Documentation

### variable errorCode

```cpp
ErrorCode errorCode;
```

final error code 

### variable shortMessage

```cpp
char * shortMessage;
```

short message that can be shown to the end user 

### variable location

```cpp
char * location;
```

location of the faulty object. Can be file name, file/line, or database table. 

### variable extendedMessage

```cpp
char * extendedMessage;
```

message that provides details of the failure 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
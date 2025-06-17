---
title: vficom::Exception
summary: Exception type thrown by constructors in classes in this file. 

---

# vficom::Exception



[Exception]() type thrown by constructors in classes in this file. 


`#include <libcom3.h>`

Inherits from exception

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Exception](classvficom_1_1_exception.md#function-exception)**(enum [status::PipeStatus](namespacevficom_1_1status.md#enum-pipestatus) error, const char * description) |
| virtual const char * | **[what](classvficom_1_1_exception.md#function-what)**() const<br>retrieve an error description  |
| [status::PipeStatus](namespacevficom_1_1status.md#enum-pipestatus) | **[getError](classvficom_1_1_exception.md#function-geterror)**() const<br>retrieve status code  |

## Public Functions Documentation

### function Exception

```cpp
Exception(
    enum status::PipeStatus error,
    const char * description
)
```


### function what

```cpp
virtual const char * what() const
```

retrieve an error description 

### function getError

```cpp
status::PipeStatus getError() const
```

retrieve status code 

-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
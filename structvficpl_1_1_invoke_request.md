---
title: vficpl::InvokeRequest

---

# vficpl::InvokeRequest






`#include <Commerce.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[InvokeRequest](structvficpl_1_1_invoke_request.md#function-invokerequest)**() |
| [ErrorCode](namespacevficpl.md#enum-errorcode) | **[wait](structvficpl_1_1_invoke_request.md#function-wait)**() |
| [ErrorCode](namespacevficpl.md#enum-errorcode) | **[cancel](structvficpl_1_1_invoke_request.md#function-cancel)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [CpTrigger](namespacevficpl.md#enum-cptrigger) | **[trigger](structvficpl_1_1_invoke_request.md#variable-trigger)**  |
| std::string | **[program](structvficpl_1_1_invoke_request.md#variable-program)**  |
| std::string | **[label](structvficpl_1_1_invoke_request.md#variable-label)**  |
| int | **[display](structvficpl_1_1_invoke_request.md#variable-display)**  |
| int | **[timeout](structvficpl_1_1_invoke_request.md#variable-timeout)**  |
| bool | **[toforeground](structvficpl_1_1_invoke_request.md#variable-toforeground)**  |
| [CpFunction](classvficpl_1_1_cp_function.md)< void, [InvokeResult](structvficpl_1_1_invoke_result.md) > | **[onComplete](structvficpl_1_1_invoke_request.md#variable-oncomplete)**  |
| [CpFunction](classvficpl_1_1_cp_function.md)< void, [InvokeResult](structvficpl_1_1_invoke_result.md) > | **[onError](structvficpl_1_1_invoke_request.md#variable-onerror)**  |

## Public Functions Documentation

### function InvokeRequest

```cpp
InvokeRequest()
```


### function wait

```cpp
ErrorCode wait()
```


### function cancel

```cpp
ErrorCode cancel()
```


## Public Attributes Documentation

### variable trigger

```cpp
CpTrigger trigger;
```


### variable program

```cpp
std::string program;
```


### variable label

```cpp
std::string label;
```


### variable display

```cpp
int display;
```


### variable timeout

```cpp
int timeout;
```


### variable toforeground

```cpp
bool toforeground;
```


### variable onComplete

```cpp
CpFunction< void, InvokeResult > onComplete;
```


### variable onError

```cpp
CpFunction< void, InvokeResult > onError;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
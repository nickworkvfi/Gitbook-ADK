---
title: libsdi::SdiBase

---

# libsdi::SdiBase



 [More...](#detailed-description)


`#include <sdi_if.h>`

Inherited by [SDI](classlibsdi_1_1_s_d_i.md), [SdiCmd](classlibsdi_1_1_sdi_cmd.md), [SdiCrypt](classlibsdi_1_1_sdi_crypt.md)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[PluginResult](structlibsdi_1_1_sdi_base_1_1_plugin_result.md)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SdiBase](classlibsdi_1_1_sdi_base.md#function-sdibase)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12)**() |
| int | **[getAdditionalResultValue](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue)**()<br>Access Additional Result Value if returned in SDI response.  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[getClientError](classlibsdi_1_1_sdi_base.md#function-getclienterror)**()<br>Access client side error codes.  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receiveSW12](classlibsdi_1_1_sdi_base.md#function-receivesw12)**()<br>Receive SDI server response with no data.  |
| void | **[clear](classlibsdi_1_1_sdi_base.md#function-clear)**()<br>clear result data obtained from SDI communication  |
| void | **[importResults](classlibsdi_1_1_sdi_base.md#function-importresults)**(const [SdiBase](classlibsdi_1_1_sdi_base.md) & intermediate)<br>set result data obtained from intermediate SDI communication  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setSdiSw12](classlibsdi_1_1_sdi_base.md#function-setsdisw12)**(enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) s) |
| void | **[setClientError](classlibsdi_1_1_sdi_base.md#function-setclienterror)**(int libsdiprotocol_result) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned short | **[sw12](classlibsdi_1_1_sdi_base.md#variable-sw12)**  |
| int | **[additionalResultValue](classlibsdi_1_1_sdi_base.md#variable-additionalresultvalue)**  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[clientErr](classlibsdi_1_1_sdi_base.md#variable-clienterr)**  |

## Detailed Description

```cpp
class libsdi::SdiBase;
```


common base holding SDI messages, the result Status Word and the Additional result value if applicable 

## Public Functions Documentation

### function SdiBase

```cpp
inline SdiBase()
```


### function getSdiSw12

```cpp
enum SDI_SW12 getSdiSw12()
```


### function getAdditionalResultValue

```cpp
inline int getAdditionalResultValue()
```

Access Additional Result Value if returned in SDI response. 

**Return**: additionalResultValue error code of the invoked component 

### function getClientError

```cpp
inline SDICLIENT_ERROR getClientError()
```

Access client side error codes. 

**Return**: clientErr error code of this component, valid when SDI command was not executed 

### function receiveSW12

```cpp
enum SDI_SW12 receiveSW12()
```

Receive SDI server response with no data. 

**Return**: return SW12 

To be called when data available callback was invoked and the command was

* sendWaitCardRemoval()
* startPinInput()
* ...


### function clear

```cpp
inline void clear()
```

clear result data obtained from SDI communication 

### function importResults

```cpp
inline void importResults(
    const SdiBase & intermediate
)
```

set result data obtained from intermediate SDI communication 

## Protected Functions Documentation

### function setSdiSw12

```cpp
inline void setSdiSw12(
    enum SDI_SW12 s
)
```


### function setClientError

```cpp
void setClientError(
    int libsdiprotocol_result
)
```


**Parameters**: 

  * **libsdiprotocol_result** return value from libsdiprotocol function 


Setter for client error originating from libsdiprotocol function. Any negative value is an error code and goes to attribute clientErr. Any positive value will reset attribute clientErr. 


## Protected Attributes Documentation

### variable sw12

```cpp
unsigned short sw12;
```


### variable additionalResultValue

```cpp
int additionalResultValue;
```


### variable clientErr

```cpp
SDICLIENT_ERROR clientErr;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
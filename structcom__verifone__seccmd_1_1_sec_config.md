---
title: com_verifone_seccmd::SecConfig

---

# com_verifone_seccmd::SecConfig



 [More...](#detailed-description)


`#include <libseccmd-comp.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| u_char | **[PinEntryType](structcom__verifone__seccmd_1_1_sec_config.md#variable-pinentrytype)**  |
| u_char | **[PinBlockFormat](structcom__verifone__seccmd_1_1_sec_config.md#variable-pinblockformat)**  |
| u_char | **[KeyManagement](structcom__verifone__seccmd_1_1_sec_config.md#variable-keymanagement)**  |
| u_char | **[PINAlgo](structcom__verifone__seccmd_1_1_sec_config.md#variable-pinalgo)**  |
| u_char | **[DataAlgo](structcom__verifone__seccmd_1_1_sec_config.md#variable-dataalgo)**  |
| u_char[SCRIPT_NAME_LENGTH] | **[ScriptIdent](structcom__verifone__seccmd_1_1_sec_config.md#variable-scriptident)**  |

## Detailed Description

```cpp
struct com_verifone_seccmd::SecConfig;
```


structure of security configuration 

## Public Attributes Documentation

### variable PinEntryType

```cpp
u_char PinEntryType;
```


PIN entry type, 0 = PIN Mandatory; 1 = PIN Optional; 2 = PIN Optional - 0-Length PIN Encryption; 3 = 0-Length PIN 


### variable PinBlockFormat

```cpp
u_char PinBlockFormat;
```


PIN block format, 0 = ISO-0; 1 = ISO-1; 2 = ISO-2; 3 = ISO-3 


### variable KeyManagement

```cpp
u_char KeyManagement;
```


key management, 1 = MSK; 2 = DUKPT 


### variable PINAlgo

```cpp
u_char PINAlgo;
```


PIN algorithm, 1 = Single DES; 2 = 3 DES; 3 = AES 


### variable DataAlgo

```cpp
u_char DataAlgo;
```


data algorithm, 1 = Single DES; 2 = 3 DES; 3 = AES 


### variable ScriptIdent

```cpp
u_char[SCRIPT_NAME_LENGTH] ScriptIdent;
```


script identifier 


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
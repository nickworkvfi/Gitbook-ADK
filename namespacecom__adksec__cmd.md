---
title: com_adksec_cmd

---

# com_adksec_cmd



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com_adksec_cmd::CTransactionData](classcom__adksec__cmd_1_1_c_transaction_data.md)**  |
| class | **[com_adksec_cmd::CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[secErrorGroup](namespacecom__adksec__cmd.md#enum-secerrorgroup)** { EsecGroupCommon = 0x00000000, EsecGroupApi = 0x00010000, EsecGroupEncGov = 0x00020000, EsecGroupIPC = 0x00030000, EsecGroupEncConfig = 0x00040000, EsecGroupEncTA = 0x00050000, EsecGroupEncVSS = 0x00110000, EsecGroupEncIPP = 0x00120000, EsecGroupEncSRED = 0x00130000, EsecGroupEncADE = 0x00140000, EsecGroupEncBendigo = 0x00150000, EsecGroupEncVOL = 0x00160000, EsecGroupEncVDSP = 0x00170000, EsecGroupEncRSA = 0x00180000, EsecGroupEncAES = 0x00190000, EsecGroupEncCryptRW = 0x001A0000, EsecGroupEncMSK = 0x001B0000, EsecGroupEncCustRKL = 0x001C0000, EsecGroupDUKPT = 0x001D0000, EsecGroupMASK = 0x00FF0000} |
| enum| **[secError](namespacecom__adksec__cmd.md#enum-secerror)** { } |
| typedef uint32_t | **[secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t)**  |
| typedef uint8_t | **[bitMask_t](namespacecom__adksec__cmd.md#typedef-bitmask-t)**  |
| typedef std::string | **[secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t)**  |
| typedef unsigned char | **[eSecCommandtype](namespacecom__adksec__cmd.md#typedef-eseccommandtype)**  |
| typedef [CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md) | **[SecTransactionValue](namespacecom__adksec__cmd.md#typedef-sectransactionvalue)**  |
| typedef [CTransactionData](classcom__adksec__cmd_1_1_c_transaction_data.md) | **[SecTransactionData_t](namespacecom__adksec__cmd.md#typedef-sectransactiondata-t)**  |
| typedef uint32_t | **[secError_t](namespacecom__adksec__cmd.md#typedef-secerror-t)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| std::string | **[getErrorString](namespacecom__adksec__cmd.md#function-geterrorstring)**([secError_t](namespacecom__adksec__cmd.md#typedef-secerror-t) error) |
| std::string | **[getErrorDescription](namespacecom__adksec__cmd.md#function-geterrordescription)**([secError_t](namespacecom__adksec__cmd.md#typedef-secerror-t) error) |

## Types Documentation

### enum secErrorGroup

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| EsecGroupCommon | 0x00000000| Common, compatible with errno.h.   |
| EsecGroupApi | 0x00010000| Api-lib.   |
| EsecGroupEncGov | 0x00020000| EncryptionGovernor main.   |
| EsecGroupIPC | 0x00030000| IPC related.   |
| EsecGroupEncConfig | 0x00040000| Configuration related.   |
| EsecGroupEncTA | 0x00050000| TransactionData related.   |
| EsecGroupEncVSS | 0x00110000| VSS specific.   |
| EsecGroupEncIPP | 0x00120000| IPP specific.   |
| EsecGroupEncSRED | 0x00130000| SRED specific.   |
| EsecGroupEncADE | 0x00140000| ADE specific.   |
| EsecGroupEncBendigo | 0x00150000| Bendigo specific.   |
| EsecGroupEncVOL | 0x00160000| Voltage specific.   |
| EsecGroupEncVDSP | 0x00170000| Visa DSP specific.   |
| EsecGroupEncRSA | 0x00180000| RSA specific.   |
| EsecGroupEncAES | 0x00190000| AES specific.   |
| EsecGroupEncCryptRW | 0x001A0000| Crypto Read/Write module specific.   |
| EsecGroupEncMSK | 0x001B0000| MSK module specific.   |
| EsecGroupEncCustRKL | 0x001C0000| Custom RKL module specific.   |
| EsecGroupDUKPT | 0x001D0000| DUKPT modules group.   |
| EsecGroupMASK | 0x00FF0000|   |




This is for Grouping the Error-Codes of secError in Groups using an offset 


### enum secError

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |




Error-codes 


### typedef secHandle_t

```cpp
typedef uint32_t secHandle_t;
```


### typedef bitMask_t

```cpp
typedef uint8_t bitMask_t;
```


### typedef secIndex_t

```cpp
typedef std::string secIndex_t;
```


### typedef eSecCommandtype

```cpp
typedef unsigned char eSecCommandtype;
```


### typedef SecTransactionValue

```cpp
typedef CTransactionValue SecTransactionValue;
```


### typedef SecTransactionData_t

```cpp
typedef CTransactionData SecTransactionData_t;
```


### typedef secError_t

```cpp
typedef uint32_t secError_t;
```


type which is used to transport secError in TLV-Packets, etc 



## Functions Documentation

### function getErrorString

```cpp
std::string getErrorString(
    secError_t error
)
```


**Parameters**: 

  * **error** value of secError e.g. EsecINVAL 


**Return**: descriptive text, e.g "EsecINVAL" 

Get name of error-code 


### function getErrorDescription

```cpp
std::string getErrorDescription(
    secError_t error
)
```


**Parameters**: 

  * **error** value of secError e.g. EsecINVAL 


**Return**: descriptive text, e.g "Invalid argument" 

Get description of error-code 






-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
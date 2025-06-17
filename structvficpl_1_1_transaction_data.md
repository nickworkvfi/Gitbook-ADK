---
title: vficpl::TransactionData

---

# vficpl::TransactionData



 [More...](#detailed-description)


`#include <Api.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[transactionType](structvficpl_1_1_transaction_data.md#variable-transactiontype)**  |
| std::string | **[transactionAmount](structvficpl_1_1_transaction_data.md#variable-transactionamount)**  |
| std::string | **[currency](structvficpl_1_1_transaction_data.md#variable-currency)**  |
| std::string | **[gratuityAmount](structvficpl_1_1_transaction_data.md#variable-gratuityamount)**  |
| bool | **[manualEntry](structvficpl_1_1_transaction_data.md#variable-manualentry)**  |
| std::vector< std::string > | **[manualPromptOption](structvficpl_1_1_transaction_data.md#variable-manualpromptoption)**  |
| std::string | **[panHandle](structvficpl_1_1_transaction_data.md#variable-panhandle)**  |
| std::string | **[result](structvficpl_1_1_transaction_data.md#variable-result)**  |
| std::string | **[errorDescription](structvficpl_1_1_transaction_data.md#variable-errordescription)**  |
| std::string | **[transactionId](structvficpl_1_1_transaction_data.md#variable-transactionid)**  |
| std::string | **[invoice](structvficpl_1_1_transaction_data.md#variable-invoice)**  |

## Detailed Description

```cpp
struct vficpl::TransactionData;
```


[TransactionData](structvficpl_1_1_transaction_data.md) container struct for defined return values of [Api](classvficpl_1_1_api.md)

## Public Attributes Documentation

### variable transactionType

```cpp
std::string transactionType;
```


type of transaction executed by the payment application 


### variable transactionAmount

```cpp
std::string transactionAmount;
```


amount of transaction 


### variable currency

```cpp
std::string currency;
```


alphabetic currency code (ISO 4217) 


### variable gratuityAmount

```cpp
std::string gratuityAmount;
```


tip value 


### variable manualEntry

```cpp
bool manualEntry;
```


true permits the payment application to obtain card data via manual card entry. false indicates that the manual card entry is not an option. 


### variable manualPromptOption

```cpp
std::vector< std::string > manualPromptOption;
```


Only filled if manualEntry is true.

Possible values are

* ZIP prompts to enter zipcode
* NOCVV disables prompt for CVV

If ZIP is specified, the result of the AVS is returned in AVS_Code 


### variable panHandle

```cpp
std::string panHandle;
```


reference of payment application ehich refers to the PAN in question. 


### variable result

```cpp
std::string result;
```


result of transaction 


### variable errorDescription

```cpp
std::string errorDescription;
```


description of error 


### variable transactionId

```cpp
std::string transactionId;
```


transaction id provided by the payment gateway, which is a client specific transaction identifier. 


### variable invoice

```cpp
std::string invoice;
```


invoice or bill number this transaction relates to 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
---
title: vficpl::AltPaymentData
summary: Represents Alt Payment Data object on CP-Payment communication. 

---

# vficpl::AltPaymentData



Represents Alt Payment Data object on CP-Payment communication. 


`#include <Commerce.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[approvedAmount](structvficpl_1_1_alt_payment_data.md#variable-approvedamount)**  |
| std::string | **[redeemedUnits](structvficpl_1_1_alt_payment_data.md#variable-redeemedunits)**  |
| std::string | **[authCode](structvficpl_1_1_alt_payment_data.md#variable-authcode)**  |
| std::string | **[methodsOfPayment](structvficpl_1_1_alt_payment_data.md#variable-methodsofpayment)**  |

## Public Attributes Documentation

### variable approvedAmount

```cpp
std::string approvedAmount;
```


Amount approved by the Alternate Payment Commerce Application. This amount is returned as a negative number. String amount formatting applies. 


### variable redeemedUnits

```cpp
std::string redeemedUnits;
```


Number of units of alternate currency consumed. 


### variable authCode

```cpp
std::string authCode;
```


The transaction Authorization Code usally provided by the Alternate Payment Service Provider. 


### variable methodsOfPayment

```cpp
std::string methodsOfPayment;
```


Description of Alternate Payment service. 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
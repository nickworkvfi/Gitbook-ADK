---
title: vficpl::LoyaltyIdentifier
summary: Represents LoyaltyIdentifier object on CP-Payment communication. 

---

# vficpl::LoyaltyIdentifier



Represents [LoyaltyIdentifier]() object on CP-Payment communication. 


`#include <Commerce.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md#function-loyaltyidentifier)**() |
| | **[LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md#function-loyaltyidentifier)**(const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & jsObj) |
| virtual | **[~LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md#function-~loyaltyidentifier)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[programId](classvficpl_1_1_loyalty_identifier.md#variable-programid)**  |
| std::string | **[customerPhoneNumber](classvficpl_1_1_loyalty_identifier.md#variable-customerphonenumber)**  |
| std::string | **[customerName](classvficpl_1_1_loyalty_identifier.md#variable-customername)**  |
| std::string | **[customerEmail](classvficpl_1_1_loyalty_identifier.md#variable-customeremail)**  |
| std::string | **[loyaltyPointsBalance](classvficpl_1_1_loyalty_identifier.md#variable-loyaltypointsbalance)**  |
| std::string | **[loyaltyPayload](classvficpl_1_1_loyalty_identifier.md#variable-loyaltypayload)**  |
| std::string | **[customerId](classvficpl_1_1_loyalty_identifier.md#variable-customerid)**  |
| std::list< std::string > | **[customerLoyaltyIds](classvficpl_1_1_loyalty_identifier.md#variable-customerloyaltyids)**  |

## Public Functions Documentation

### function LoyaltyIdentifier

```cpp
LoyaltyIdentifier()
```


constructor of [LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md) object 


### function LoyaltyIdentifier

```cpp
explicit LoyaltyIdentifier(
    const vfiipc::JSObject & jsObj
)
```


**Parameters**: 

  * **jsObj** - JSObject with [LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md) parameters 


Specific constructor of [LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md) object 


### function ~LoyaltyIdentifier

```cpp
virtual ~LoyaltyIdentifier()
```


destructor of [LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md) object 


## Public Attributes Documentation

### variable programId

```cpp
std::string programId;
```


programId - Unique reference to identify the Loyality Program 


### variable customerPhoneNumber

```cpp
std::string customerPhoneNumber;
```


customerPhoneNumber - Available in NFC phone tap. an alternate to Loyalty Id 


### variable customerName

```cpp
std::string customerName;
```


customerName - Name of the customer 


### variable customerEmail

```cpp
std::string customerEmail;
```


customerEmail - Email of the customerId 


### variable loyaltyPointsBalance

```cpp
std::string loyaltyPointsBalance;
```


loyaltyPointsBalance - balance of loyalty points 


### variable loyaltyPayload

```cpp
std::string loyaltyPayload;
```


loyaltyPayload - Some loyalty providers may only pass through to the POS their encrypted data set. This allows a loyalty provider to include their own proprietary fields to parse on the POS side 


### variable customerId

```cpp
std::string customerId;
```


customerId - Unique to the phone for customer tracking purposes 


### variable customerLoyaltyIds

```cpp
std::list< std::string > customerLoyaltyIds;
```


customerLoyaltyId - List of Customer Loyalty Ids 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
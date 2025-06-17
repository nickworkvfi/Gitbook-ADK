---
title: vficpl::Donation
summary: Represents the Donation object on CP-Payment communication. 

---

# vficpl::Donation



Represents the [Donation]() object on CP-Payment communication. 


`#include <Commerce.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Donation](classvficpl_1_1_donation.md#function-donation)**() |
| virtual | **[~Donation](classvficpl_1_1_donation.md#function-~donation)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[amount](classvficpl_1_1_donation.md#variable-amount)**  |
| std::string | **[description](classvficpl_1_1_donation.md#variable-description)**  |

## Public Functions Documentation

### function Donation

```cpp
Donation()
```


constructor of [Donation](classvficpl_1_1_donation.md)


### function ~Donation

```cpp
virtual ~Donation()
```


destructor of [Donation](classvficpl_1_1_donation.md)


## Public Attributes Documentation

### variable amount

```cpp
std::string amount;
```


amount - Amount of [Donation](classvficpl_1_1_donation.md) in currency specified in the trigger Payload. String amount formatting applies. 


### variable description

```cpp
std::string description;
```


description - Short one line string that describes the donation. Usally used on receipts in front of quantity and price, typical length is 35 characters max. Usally the recipient of the donation, eg. American Red Cross 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
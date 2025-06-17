---
title: vficpl::Offer
summary: Represents the Offer object on CP-Payment communication. 

---

# vficpl::Offer



Represents the [Offer]() object on CP-Payment communication. 


`#include <Commerce.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Offer](classvficpl_1_1_offer.md#function-offer)**() |
| virtual | **[~Offer](classvficpl_1_1_offer.md#function-~offer)**() |
| std::string | **[getTypeStr](classvficpl_1_1_offer.md#function-gettypestr)**() |
| [OFFER_TYPE](namespacevficpl.md#enum-offer-type) | **[getTypeEnum](classvficpl_1_1_offer.md#function-gettypeenum)**(const std::string & strType) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[id](classvficpl_1_1_offer.md#variable-id)**  |
| std::string | **[programId](classvficpl_1_1_offer.md#variable-programid)**  |
| [OFFER_TYPE](namespacevficpl.md#enum-offer-type) | **[type](classvficpl_1_1_offer.md#variable-type)**  |
| std::string | **[description](classvficpl_1_1_offer.md#variable-description)**  |
| bool | **[isRefundable](classvficpl_1_1_offer.md#variable-isrefundable)**  |
| bool | **[isCombinable](classvficpl_1_1_offer.md#variable-iscombinable)**  |
| float | **[percentDiscount](classvficpl_1_1_offer.md#variable-percentdiscount)**  |
| std::string | **[amountDiscount](classvficpl_1_1_offer.md#variable-amountdiscount)**  |
| std::string | **[merchantOfferCode](classvficpl_1_1_offer.md#variable-merchantoffercode)**  |
| std::string | **[productCode](classvficpl_1_1_offer.md#variable-productcode)**  |
| std::string | **[associatedProductCode](classvficpl_1_1_offer.md#variable-associatedproductcode)**  |
| std::string | **[specialProductCode](classvficpl_1_1_offer.md#variable-specialproductcode)**  |
| [Barcode](classvficpl_1_1_barcode.md) | **[barcode](classvficpl_1_1_offer.md#variable-barcode)**  |

## Public Functions Documentation

### function Offer

```cpp
Offer()
```


constructor of [Offer](classvficpl_1_1_offer.md) object 


### function ~Offer

```cpp
virtual ~Offer()
```


destructor of [Offer](classvficpl_1_1_offer.md) object 


### function getTypeStr

```cpp
std::string getTypeStr()
```


getTypeStr - get type of OFFER_TYPE as string 


### function getTypeEnum

```cpp
static OFFER_TYPE getTypeEnum(
    const std::string & strType
)
```


**Parameters**: 

  * **strType** - string which shall be converted to enumeration value 


**Return**: OFFER_TYPE - corresponding enum entry to strType 

getTypeEnum - get enum from given offer type String. 


## Public Attributes Documentation

### variable id

```cpp
std::string id;
```


id - Offer_Id - Alphanumeric offer reference. May be multiple offers in the same transaction. Could be a back end loaded offer that the POS will redeem or a manufacturer coupon code. 


### variable programId

```cpp
std::string programId;
```


programId - Unique reference to identify the Program. 


### variable type

```cpp
OFFER_TYPE type;
```


type - Type of offer, must be one of: MERCHANT_COUPON, MANUFACTURER_COUPON, OTHER_COUPON, PRODUCT_DISCOUNT, LOYALTY_CARD, TRANSACTION_DISCOUNT 


### variable description

```cpp
std::string description;
```


description - Eg: 20% off one pair of shoes. 


### variable isRefundable

```cpp
bool isRefundable;
```


isRefundable - Indicates if the purchase is returnable 


### variable isCombinable

```cpp
bool isCombinable;
```


isCombinable - Indicates if the offer may combined with other combinable offers. 


### variable percentDiscount

```cpp
float percentDiscount;
```


percentDiscount - Percentage discount associated with the offer. For example a 20% discount is represented as -0.20 and affects the price by "Adjusted_Amount = Adjusted_Amount + Trans_Amount * Offer_PercentDiscount" 


### variable amountDiscount

```cpp
std::string amountDiscount;
```


amountDiscount - Discount in currency specified in the trigger Payload. This is represented as negative amount. String amount formatting applies. This affects the price by Adjusted_Amount = Adjusted_Amount + Offer_Discount 


### variable merchantOfferCode

```cpp
std::string merchantOfferCode;
```


merchantOfferCode - Field for merchant specific offers. 


### variable productCode

```cpp
std::string productCode;
```


productCode - Represented as SKU (Stock Keeping Unit) or PLU (Price Look Up) or UPC (Unified Product Code) 


### variable associatedProductCode

```cpp
std::string associatedProductCode;
```


associatedProductCode - Only applies to special product offers 


### variable specialProductCode

```cpp
std::string specialProductCode;
```


specialProductCode - Eg: BOGO (Buy One Get One) using product and associated product code. BOGOH ( Buy One Get One Half Off) using Product_Code, Percentage_Discount and Associated_Product_Code. 


### variable barcode

```cpp
Barcode barcode;
```


barcode - [Barcode](classvficpl_1_1_barcode.md) information related to this object 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
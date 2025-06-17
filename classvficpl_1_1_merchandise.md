---
title: vficpl::Merchandise
summary: Represents the Merchandise object on CP-Payment communication. 

---

# vficpl::Merchandise



Represents the [Merchandise]() object on CP-Payment communication. 


`#include <Commerce.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Merchandise](classvficpl_1_1_merchandise.md#function-merchandise)**() |
| virtual | **[~Merchandise](classvficpl_1_1_merchandise.md#function-~merchandise)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[lineItemId](classvficpl_1_1_merchandise.md#variable-lineitemid)**  |
| std::string | **[unitPrice](classvficpl_1_1_merchandise.md#variable-unitprice)**  |
| std::string | **[extendedPrice](classvficpl_1_1_merchandise.md#variable-extendedprice)**  |
| unsigned long | **[quantity](classvficpl_1_1_merchandise.md#variable-quantity)**  |
| std::string | **[sku](classvficpl_1_1_merchandise.md#variable-sku)**  |
| std::string | **[upc](classvficpl_1_1_merchandise.md#variable-upc)**  |
| std::string | **[description](classvficpl_1_1_merchandise.md#variable-description)**  |

## Public Functions Documentation

### function Merchandise

```cpp
Merchandise()
```


constructor of merchandise 


### function ~Merchandise

```cpp
virtual ~Merchandise()
```


destructor of merchandise 


## Public Attributes Documentation

### variable lineItemId

```cpp
std::string lineItemId;
```


lineItemId - Basket Line Item 


### variable unitPrice

```cpp
std::string unitPrice;
```


Price of [Merchandise](classvficpl_1_1_merchandise.md). String amount formatting applies 


### variable extendedPrice

```cpp
std::string extendedPrice;
```


extendedPrice - The product of Unit_Price and Quantity. String amount formatting applies. 


### variable quantity

```cpp
unsigned long quantity;
```


qunatity - Number of [Merchandise](classvficpl_1_1_merchandise.md) items 


### variable sku

```cpp
std::string sku;
```


sku - SKU of the [Merchandise](classvficpl_1_1_merchandise.md) item 


### variable upc

```cpp
std::string upc;
```


upc - UPC code 


### variable description

```cpp
std::string description;
```


description - Short one line string that describes the merchandise. Usally used on receipts in front of qunatity and price, typical length is 35 characters max. 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
---
hidden: true
title: Merchandise Class Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

Represents the <a href="classvficpl_1_1_merchandise.md">Merchandise</a> object on CP-Payment communication. [More\...](#details)

`#include <`<a href="_commerce_8h_source.md">Commerce.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [Merchandise](#a4a18adffad536a9019e5f0c3859ddd38) () |
| virtual  | [\~Merchandise](#a9a4f3019ee8eeb636102b39801a96487) () |

|                |                                                     |
|----------------|-----------------------------------------------------|
| Data Fields    |                                                     |
| std::string    | [lineItemId](#a57f94d55757ee3185d99f95a2c34744b)    |
| std::string    | [unitPrice](#a4659d83dd925bb2e861dddaa85736de0)     |
| std::string    | [extendedPrice](#a14b3e5ecfc706155619b29e769d3cf62) |
| unsigned long  | [quantity](#ae71d0341d5fbb7022af6942366d70d2c)      |
| std::string    | [sku](#a702f11015d20cc7e0af6788111e396d4)           |
| std::string    | [upc](#a1640d9d5ef84ca7e480341a2d1ebe5d9)           |
| std::string    | [description](#a2e1454f6988673f814408646edaeb320)   |

## DetailedDescription {#detailed-description}

Represents the <a href="classvficpl_1_1_merchandise.md">Merchandise</a> object on CP-Payment communication.

## Constructor& Destructor Documentation

## Merchandise() <a href="#a4a18adffad536a9019e5f0c3859ddd38" id="a4a18adffad536a9019e5f0c3859ddd38"></a>

<p><a href="classvficpl_1_1_merchandise.md">Merchandise</a></p>

constructor of merchandise

## \~Merchandise() <a href="#a9a4f3019ee8eeb636102b39801a96487" id="a9a4f3019ee8eeb636102b39801a96487"></a>

<p>virtual \~<a href="classvficpl_1_1_merchandise.md">Merchandise</a></p>

virtual

destructor of merchandise

## FieldDocumentation {#field-documentation}

## description <a href="#a2e1454f6988673f814408646edaeb320" id="a2e1454f6988673f814408646edaeb320"></a>

<p>std::string description</p>

description - Short one line string that describes the merchandise. Usally used on receipts in front of qunatity and price, typical length is 35 characters max.

## extendedPrice <a href="#a14b3e5ecfc706155619b29e769d3cf62" id="a14b3e5ecfc706155619b29e769d3cf62"></a>

<p>std::string extendedPrice</p>

extendedPrice - The product of Unit_Price and Quantity. String amount formatting applies.

## lineItemId <a href="#a57f94d55757ee3185d99f95a2c34744b" id="a57f94d55757ee3185d99f95a2c34744b"></a>

<p>std::string lineItemId</p>

lineItemId - Basket Line Item

## quantity <a href="#ae71d0341d5fbb7022af6942366d70d2c" id="ae71d0341d5fbb7022af6942366d70d2c"></a>

<p>unsigned long quantity</p>

qunatity - Number of <a href="classvficpl_1_1_merchandise.md">Merchandise</a> items

## sku <a href="#a702f11015d20cc7e0af6788111e396d4" id="a702f11015d20cc7e0af6788111e396d4"></a>

<p>std::string sku</p>

sku - SKU of the <a href="classvficpl_1_1_merchandise.md">Merchandise</a> item

## unitPrice <a href="#a4659d83dd925bb2e861dddaa85736de0" id="a4659d83dd925bb2e861dddaa85736de0"></a>

<p>std::string unitPrice</p>

Price of <a href="classvficpl_1_1_merchandise.md">Merchandise</a>. String amount formatting applies

## upc <a href="#a1640d9d5ef84ca7e480341a2d1ebe5d9" id="a1640d9d5ef84ca7e480341a2d1ebe5d9"></a>

<p>std::string upc</p>

upc - UPC code

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- cpl/include/commerce/<a href="_commerce_8h_source.md">Commerce.h</a>

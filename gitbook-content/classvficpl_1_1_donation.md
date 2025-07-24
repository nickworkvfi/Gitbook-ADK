---
hidden: true
title: Donation Class Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

Represents the <a href="classvficpl_1_1_donation.md">Donation</a> object on CP-Payment communication. [More\...](#details)

`#include <`<a href="_commerce_8h_source.md">Commerce.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [Donation](#a87d748bbd4608d22d6478a69480f76aa) () |
| virtual  | [\~Donation](#a39a4770a64561558cb5783c6286e3404) () |

|              |                                                   |
|--------------|---------------------------------------------------|
| Data Fields  |                                                   |
| std::string  | [amount](#a91bb1eca6a37952af42a8a0001f4dc9f)      |
| std::string  | [description](#a2e1454f6988673f814408646edaeb320) |

## DetailedDescription {#detailed-description}

Represents the <a href="classvficpl_1_1_donation.md">Donation</a> object on CP-Payment communication.

## Constructor& Destructor Documentation

## Donation() <a href="#a87d748bbd4608d22d6478a69480f76aa" id="a87d748bbd4608d22d6478a69480f76aa"></a>

<p><a href="classvficpl_1_1_donation.md">Donation</a></p>

constructor of <a href="classvficpl_1_1_donation.md">Donation</a>

## \~Donation() <a href="#a39a4770a64561558cb5783c6286e3404" id="a39a4770a64561558cb5783c6286e3404"></a>

<p>virtual \~<a href="classvficpl_1_1_donation.md">Donation</a></p>

virtual

destructor of <a href="classvficpl_1_1_donation.md">Donation</a>

## FieldDocumentation {#field-documentation}

## amount <a href="#a91bb1eca6a37952af42a8a0001f4dc9f" id="a91bb1eca6a37952af42a8a0001f4dc9f"></a>

<p>std::string amount</p>

amount - Amount of <a href="classvficpl_1_1_donation.md">Donation</a> in currency specified in the trigger Payload. String amount formatting applies.

## description <a href="#a2e1454f6988673f814408646edaeb320" id="a2e1454f6988673f814408646edaeb320"></a>

<p>std::string description</p>

description - Short one line string that describes the donation. Usally used on receipts in front of quantity and price, typical length is 35 characters max. Usally the recipient of the donation, eg. American Red Cross

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- cpl/include/commerce/<a href="_commerce_8h_source.md">Commerce.h</a>

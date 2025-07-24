---
hidden: true
title: LoyaltyIdentifier Class Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

Represents <a href="classvficpl_1_1_loyalty_identifier.md">LoyaltyIdentifier</a> object on CP-Payment communication. [More\...](#details)

`#include <`<a href="_commerce_8h_source.md">Commerce.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [LoyaltyIdentifier](#a43844153573ffde9e0c5f656c6122294) () |
|   | [LoyaltyIdentifier](#a31fb8e2f34e74860f85b3699703c2114) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &jsObj) |
| virtual  | [\~LoyaltyIdentifier](#a0d0557c0ebdae6b2c4fcabb2bd02dc6c) () |

|  |  |
|----|----|
| Data Fields |  |
| std::string  | [programId](#aa42859632a896c98d08cbaedec1d49c2) |
| std::string  | [customerPhoneNumber](#aef12565663366fffb9932dc6028db540) |
| std::string  | [customerName](#af207ffa55c87b8f7bcc19d264aaa6d45) |
| std::string  | [customerEmail](#a2ca9c9610665f5f0ef3a1250a01421b3) |
| std::string  | [loyaltyPointsBalance](#ac3fe73ee85f39c0062830da8882309de) |
| std::string  | [loyaltyPayload](#ac7df68099f8dcd3234bc67286826214f) |
| std::string  | [customerId](#a71691fe6423f53f8799693ee2e0e6af9) |
| std::list\< std::string \>  | [customerLoyaltyIds](#aeb627dce89c5423747fcc469b22b781e) |

## DetailedDescription {#detailed-description}

Represents <a href="classvficpl_1_1_loyalty_identifier.md">LoyaltyIdentifier</a> object on CP-Payment communication.

## Constructor& Destructor Documentation

## LoyaltyIdentifier()\[1/2\] <a href="#a43844153573ffde9e0c5f656c6122294" id="a43844153573ffde9e0c5f656c6122294"></a> {#loyaltyidentifier-12}

<p><a href="classvficpl_1_1_loyalty_identifier.md">LoyaltyIdentifier</a></p>

constructor of <a href="classvficpl_1_1_loyalty_identifier.md">LoyaltyIdentifier</a> object

## LoyaltyIdentifier()\[2/2\] <a href="#a31fb8e2f34e74860f85b3699703c2114" id="a31fb8e2f34e74860f85b3699703c2114"></a> {#loyaltyidentifier-22}

<p><a href="classvficpl_1_1_loyalty_identifier.md">LoyaltyIdentifier</a></p>

explicit

Specific constructor of <a href="classvficpl_1_1_loyalty_identifier.md">LoyaltyIdentifier</a> object

**Parameters**

**jsObj** - JSObject with LoyaltyIdentifier parameters

## \~LoyaltyIdentifier() <a href="#a0d0557c0ebdae6b2c4fcabb2bd02dc6c" id="a0d0557c0ebdae6b2c4fcabb2bd02dc6c"></a>

<p>virtual \~<a href="classvficpl_1_1_loyalty_identifier.md">LoyaltyIdentifier</a></p>

virtual

destructor of <a href="classvficpl_1_1_loyalty_identifier.md">LoyaltyIdentifier</a> object

## FieldDocumentation {#field-documentation}

## customerEmail <a href="#a2ca9c9610665f5f0ef3a1250a01421b3" id="a2ca9c9610665f5f0ef3a1250a01421b3"></a>

<p>std::string customerEmail</p>

customerEmail - Email of the customerId

## customerId <a href="#a71691fe6423f53f8799693ee2e0e6af9" id="a71691fe6423f53f8799693ee2e0e6af9"></a>

<p>std::string customerId</p>

customerId - Unique to the phone for customer tracking purposes

## customerLoyaltyIds <a href="#aeb627dce89c5423747fcc469b22b781e" id="aeb627dce89c5423747fcc469b22b781e"></a>

<p>std::list\<std::string\> customerLoyaltyIds</p>

customerLoyaltyId - List of Customer Loyalty Ids

## customerName <a href="#af207ffa55c87b8f7bcc19d264aaa6d45" id="af207ffa55c87b8f7bcc19d264aaa6d45"></a>

<p>std::string customerName</p>

customerName - Name of the customer

## customerPhoneNumber <a href="#aef12565663366fffb9932dc6028db540" id="aef12565663366fffb9932dc6028db540"></a>

<p>std::string customerPhoneNumber</p>

customerPhoneNumber - Available in NFC phone tap. an alternate to Loyalty Id

## loyaltyPayload <a href="#ac7df68099f8dcd3234bc67286826214f" id="ac7df68099f8dcd3234bc67286826214f"></a>

<p>std::string loyaltyPayload</p>

loyaltyPayload - Some loyalty providers may only pass through to the POS their encrypted data set. This allows a loyalty provider to include their own proprietary fields to parse on the POS side

## loyaltyPointsBalance <a href="#ac3fe73ee85f39c0062830da8882309de" id="ac3fe73ee85f39c0062830da8882309de"></a>

<p>std::string loyaltyPointsBalance</p>

loyaltyPointsBalance - balance of loyalty points

## programId <a href="#aa42859632a896c98d08cbaedec1d49c2" id="aa42859632a896c98d08cbaedec1d49c2"></a>

<p>std::string programId</p>

programId - Unique reference to identify the Loyality Program

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- cpl/include/commerce/<a href="_commerce_8h_source.md">Commerce.h</a>

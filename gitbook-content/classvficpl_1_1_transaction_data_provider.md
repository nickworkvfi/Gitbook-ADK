---
hidden: true
title: TransactionDataProvider Interface Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="_transaction_data_provider_8h_source.md">TransactionDataProvider.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [TransactionDataProvider](#a1b43fbf8ee9b107ff7ba0f33c00f5a56) () |
| virtual  | [\~TransactionDataProvider](#a43fb7334dafa6d19aacf78d8c2dea1fb) () |
| virtual <a href="namespacevficpl.md#a6c410aee3c873fc45fe7bccf53c6b8d5">TransactionOriginator</a>  | [getTransactionOriginator](#a2d3700487eb38ba681a96f19d884b45e) () |
| virtual std::string  | [getInvoice](#abca3a3b7c89d7685938e8ee362fd0105) () |
| virtual std::string  | [getStoreNumber](#a4de757414ae4396d0ce95785244e110f) () |
| virtual std::string  | [getLane](#ac76499495cd6a3c68d45aa42b87a3c0c) () |
| virtual std::string  | [getCashierId](#a04fe7a1a9e867b13dd4a31343344ebc4) () |
| virtual std::string  | [getTransId](#a250cf227e24a591c3e73ecb1b286167a) () |
| virtual <a href="namespacevficpl.md#aa7a2e64697569804f14626bbb2649a58">TransactionType</a>  | [getTransactionType](#ae506631815deb04090a80990b5aedb7a) () |
| virtual std::string  | [getTransAmount](#aebdaef7ee32fdc53cd3f5248769883cd) () |
| virtual std::string  | [getTransCurrency](#ae330f12e04b2fd30b810b8047f69d06d) () |
| virtual std::string  | [getPanHandle](#ac26b2202e2ccd355d3e2c8d7cc901450) () |
| virtual std::string  | [getPanFirst6](#a15fa1d98e5074ce2b25837259655909b) () |
| virtual std::string  | [getPanLast4](#ae095b81cf00bd66426492fdc6f6d95b1) () |
| virtual <a href="namespacevficpl.md#a76b9e96d86b331202dcc0fba38b758cd">CardType</a>  | [getCardType](#a62efaca5c6e0f1c0ead7afa60ea99a10) () |
| virtual std::string  | [getAuthCode](#a4189ce6a86f0314f4392f97d5044224b) () |
| virtual <a href="namespacevficpl.md#abf880d7292973573c80d9fd18ea77453">AuthEntity</a>  | [getAuthEntity](#ab4650cc48568749b69dd847477d424e3) () |
| virtual <a href="namespacevficpl.md#a87ba9bd5edfd749f4729620dbadd5fce">AuthResult</a>  | [getAuthResult](#a78814b700dfd60ee5363cb0975d6941a) () |
| virtual std::string  | [getAuthRespTxt](#a09539bf0542dcdbaf69eda380c0b6ce7) () |
| virtual <a href="namespacevficpl.md#abc1dfb7e5d03f66392b0b4e8be15af50">HolderAuth</a>  | [getHolderAuth](#a8f26df9072d14d36de751cb3548858e5) () |
| virtual std::string  | [getAcquirerMerchantId](#ab5cced8a60a09230906e016e05bdaeaf) () |
| virtual std::string  | [getAcquirerTerminalId](#ac30d55c3693a93d2b49530e7c3e7f8e6) () |
| virtual std::string  | [getAcquirerId](#a2758bb227e3ef123dec1d4d0256b2dd4) () |
| virtual std::string  | [getGatewayMerchantId](#aa669aee0b3f7e85fbdede20cf8913f11) () |
| virtual std::string  | [getGatewayTerminalId](#a5624ddda46388d3f5b3f00a5b6c41db8) () |
| virtual std::string  | [getLoyaltyId](#a47ef82ba9718f55b31c60e5076dfd6da) () |
| virtual <a href="namespacevficpl.md#affde3f05c6a4a5092ccd40ec3e830d43">TransactionResult</a>  | [getTransactionResult](#a06e4adfff4e4955a3707be0d97fdcb81) () |
| virtual std::string  | [getInitialAmount](#a3b4c6c969b0bfe6ffe4382e057486056) () |
| virtual std::string  | [getAdjustedAmount](#a862d336a1fb28173350bda0b286398a5) () |
| virtual double  | [getAdjustmentPercentage](#aa16514d1e66c938e1527da0fe41eac1a) () |
| virtual std::string  | [getAdjustmentDescription](#a88557d404b1bd42be501f2539d608084) () |
| virtual std::string  | [getCashBackAmount](#adbaed1af63ddbabc112e77be6ad5d4c4) () |
| virtual std::string  | [getGratuityAmount](#a82a9db668cc1e8fbe56a1bf662df0bbb) () |
| virtual std::string  | [getTaxAmount](#a445ae80092524519ec95206ce1c62701) () |
| virtual std::string  | [getSurchargeAmount](#a1d7cd27ce253cf29eb101791382dd5e4) () |
| virtual std::string  | [getApprovedAmount](#adb3c398a40cb9fc5662780c747a166ad) () |
| virtual std::string  | [getCardCurrency](#a0314d7e4c5e8d89ae2497be9e60c6280) () |
| virtual std::string  | [getCardCountry](#a6a05698c0e52eee47a56f900a85537e4) () |
| virtual std::vector\< std::string \>  | [getPrefLanguages](#a5c98fd681c4db4c47a64ae11cb255a33) () |
| virtual bool  | [getCashPayment](#abb35866c54f3f490998a5916f2788a38) () |
| virtual std::vector\< std::string \>  | [getPaymentMethods](#aa95aa9f5cbdc24fa4b82316f856c5a69) () |
| virtual void  | [setTransAmount](#a04649094a5850b458f7bf6ab8368f8b1) (const std::string &amount) |
| virtual void  | [setAdjustedAmount](#a34a10f2571303eae13c7639ac9814a69) (const std::string &amount) |
| virtual void  | [setAdjustmentPercentage](#a5c49a51bb496d6a59f01917f9887ddfa) (double pct) |
| virtual void  | [setAdjustmentDescription](#a5b5222ad80ecf9e0980cd9c8f2d489c0) (const std::string &text) |
| virtual std::string  | [getReceiptType](#acdcfbad986e2abbea08e0e44d8565c0a) () |
| virtual std::string  | [getReceipt](#a2d5b13ed40cbc0670d3c145f52a44358) () |
| virtual bool  | [requiresSignature](#a6449781b0f196e38ac3dcdb1d2d25e03) () |
| virtual bool  | [hasSignatureImage](#a9fd86152e3a7f7211ce14cdcec0240b8) () |
| virtual <a href="namespacevficpl.md#structvficpl_1_1_technology_data">TechnologyData</a>  | [getTechnologyData](#ace2e8e72f035b6245ab7e1ad3092e32b) () |
| virtual void  | [initTrigger](#aa2d78ce2a636e98467c816650357cf28) (const <a href="namespacevficpl.md#aba55b083790f62440bcff1c23bbe2f12">CpTrigger</a> &trigger) |

## Constructor& Destructor Documentation

## TransactionDataProvider() <a href="#a1b43fbf8ee9b107ff7ba0f33c00f5a56" id="a1b43fbf8ee9b107ff7ba0f33c00f5a56"></a>

<p><a href="classvficpl_1_1_transaction_data_provider.md">TransactionDataProvider</a></p>

default constructor

## \~TransactionDataProvider() <a href="#a43fb7334dafa6d19aacf78d8c2dea1fb" id="a43fb7334dafa6d19aacf78d8c2dea1fb"></a>

<p>virtual \~<a href="classvficpl_1_1_transaction_data_provider.md">TransactionDataProvider</a></p>

virtual

default destructor

## MemberFunction Documentation {#member-function-documentation}

## getAcquirerId() <a href="#a2758bb227e3ef123dec1d4d0256b2dd4" id="a2758bb227e3ef123dec1d4d0256b2dd4"></a>

<p>virtual std::string getAcquirerId</p>

virtual

### Returns

std::string acquirer id

## getAcquirerMerchantId() <a href="#ab5cced8a60a09230906e016e05bdaeaf" id="ab5cced8a60a09230906e016e05bdaeaf"></a>

<p>virtual std::string getAcquirerMerchantId</p>

virtual

### Returns

std::string acquirer merchant id

## getAcquirerTerminalId() <a href="#ac30d55c3693a93d2b49530e7c3e7f8e6" id="ac30d55c3693a93d2b49530e7c3e7f8e6"></a>

<p>virtual std::string getAcquirerTerminalId</p>

virtual

### Returns

std::string acquirer terminal id

## getAdjustedAmount() <a href="#a862d336a1fb28173350bda0b286398a5" id="a862d336a1fb28173350bda0b286398a5"></a>

<p>virtual std::string getAdjustedAmount</p>

virtual

### Returns

std::string the sum of adjustments that have to be applied to the initial amount excluding the gratuity.

## getAdjustmentDescription() <a href="#a88557d404b1bd42be501f2539d608084" id="a88557d404b1bd42be501f2539d608084"></a>

<p>virtual std::string getAdjustmentDescription</p>

virtual

### Returns

std::string description field for amount adjustment

## getAdjustmentPercentage() <a href="#aa16514d1e66c938e1527da0fe41eac1a" id="aa16514d1e66c938e1527da0fe41eac1a"></a>

<p>virtual double getAdjustmentPercentage</p>

virtual

### Returns

double percentage amount to adjust, e.g 0.1 if 10%

## getApprovedAmount() <a href="#adb3c398a40cb9fc5662780c747a166ad" id="adb3c398a40cb9fc5662780c747a166ad"></a>

<p>virtual std::string getApprovedAmount</p>

virtual

### Returns

std::string amount the transaction was approved for.

## getAuthCode() <a href="#a4189ce6a86f0314f4392f97d5044224b" id="a4189ce6a86f0314f4392f97d5044224b"></a>

<p>virtual std::string getAuthCode</p>

virtual

### Returns

std::string transaction authorization code provided by the payment processing service or acquirer

## getAuthEntity() <a href="#ab4650cc48568749b69dd847477d424e3" id="ab4650cc48568749b69dd847477d424e3"></a>

<p>virtual <a href="namespacevficpl.md#abf880d7292973573c80d9fd18ea77453">AuthEntity</a> getAuthEntity</p>

virtual

### Returns

AuthEntity entity that has authorized the transaction

## getAuthRespTxt() <a href="#a09539bf0542dcdbaf69eda380c0b6ce7" id="a09539bf0542dcdbaf69eda380c0b6ce7"></a>

<p>virtual std::string getAuthRespTxt</p>

virtual

### Returns

std::string descriptive text accompanying the Auth_Code from payment processor.

## getAuthResult() <a href="#a78814b700dfd60ee5363cb0975d6941a" id="a78814b700dfd60ee5363cb0975d6941a"></a>

<p>virtual <a href="namespacevficpl.md#a87ba9bd5edfd749f4729620dbadd5fce">AuthResult</a> getAuthResult</p>

virtual

### Returns

AuthResult result of transaction authorization.

## getCardCountry() <a href="#a6a05698c0e52eee47a56f900a85537e4" id="a6a05698c0e52eee47a56f900a85537e4"></a>

<p>virtual std::string getCardCountry</p>

virtual

### Returns

std::string card country (only EMV cards Tag 5F28)

## getCardCurrency() <a href="#a0314d7e4c5e8d89ae2497be9e60c6280" id="a0314d7e4c5e8d89ae2497be9e60c6280"></a>

<p>virtual std::string getCardCurrency</p>

virtual

### Returns

std::string card currency (only EMV cards Tag 9F42)

## getCardType() <a href="#a62efaca5c6e0f1c0ead7afa60ea99a10" id="a62efaca5c6e0f1c0ead7afa60ea99a10"></a>

<p>virtual <a href="namespacevficpl.md#a76b9e96d86b331202dcc0fba38b758cd">CardType</a> getCardType</p>

virtual

### Returns

std::string card type used to obtain card data

## getCashBackAmount() <a href="#adbaed1af63ddbabc112e77be6ad5d4c4" id="adbaed1af63ddbabc112e77be6ad5d4c4"></a>

<p>virtual std::string getCashBackAmount</p>

virtual

### Returns

std::string cash back amount

## getCashierId() <a href="#a04fe7a1a9e867b13dd4a31343344ebc4" id="a04fe7a1a9e867b13dd4a31343344ebc4"></a>

<p>virtual std::string getCashierId</p>

virtual

### Returns

std::string identifies the cashier

## getCashPayment() <a href="#abb35866c54f3f490998a5916f2788a38" id="abb35866c54f3f490998a5916f2788a38"></a>

<p>virtual bool getCashPayment</p>

virtual

### Returns

true when paid by cash, card_type will be disregarded, if false or not present, Card_Type must be specified.

## getGatewayMerchantId() <a href="#aa669aee0b3f7e85fbdede20cf8913f11" id="aa669aee0b3f7e85fbdede20cf8913f11"></a>

<p>virtual std::string getGatewayMerchantId</p>

virtual

### Returns

std::string gateway merchant id

## getGatewayTerminalId() <a href="#a5624ddda46388d3f5b3f00a5b6c41db8" id="a5624ddda46388d3f5b3f00a5b6c41db8"></a>

<p>virtual std::string getGatewayTerminalId</p>

virtual

### Returns

std::string gateway terminal id

## getGratuityAmount() <a href="#a82a9db668cc1e8fbe56a1bf662df0bbb" id="a82a9db668cc1e8fbe56a1bf662df0bbb"></a>

<p>virtual std::string getGratuityAmount</p>

virtual

### Returns

std::string gratuity amount

## getHolderAuth() <a href="#a8f26df9072d14d36de751cb3548858e5" id="a8f26df9072d14d36de751cb3548858e5"></a>

<p>virtual <a href="namespacevficpl.md#abc1dfb7e5d03f66392b0b4e8be15af50">HolderAuth</a> getHolderAuth</p>

virtual

### Returns

HolderAuth means by which the transaction is authorized.

## getInitialAmount() <a href="#a3b4c6c969b0bfe6ffe4382e057486056" id="a3b4c6c969b0bfe6ffe4382e057486056"></a>

<p>virtual std::string getInitialAmount</p>

virtual

### Returns

std::string the amount that payment is attempted.

## getInvoice() <a href="#abca3a3b7c89d7685938e8ee362fd0105" id="abca3a3b7c89d7685938e8ee362fd0105"></a>

<p>virtual std::string getInvoice</p>

virtual

### Returns

std::string with unique reference to transaction

## getLane() <a href="#ac76499495cd6a3c68d45aa42b87a3c0c" id="ac76499495cd6a3c68d45aa42b87a3c0c"></a>

<p>virtual std::string getLane</p>

virtual

### Returns

std::string identifies the payment terminal location in the store

## getLoyaltyId() <a href="#a47ef82ba9718f55b31c60e5076dfd6da" id="a47ef82ba9718f55b31c60e5076dfd6da"></a>

<p>virtual std::string getLoyaltyId</p>

virtual

### Returns

std::string loyalty identifier

## getPanFirst6() <a href="#a15fa1d98e5074ce2b25837259655909b" id="a15fa1d98e5074ce2b25837259655909b"></a>

<p>virtual std::string getPanFirst6</p>

virtual

### Returns

the first 6 digits of the card holder PAN

## getPanHandle() <a href="#ac26b2202e2ccd355d3e2c8d7cc901450" id="ac26b2202e2ccd355d3e2c8d7cc901450"></a>

<p>virtual std::string getPanHandle</p>

virtual

### Returns

std::string reference of payment application which refers to the PAN in question.

## getPanLast4() <a href="#ae095b81cf00bd66426492fdc6f6d95b1" id="ae095b81cf00bd66426492fdc6f6d95b1"></a>

<p>virtual std::string getPanLast4</p>

virtual

### Returns

std::string the last four digits of the card holder PAN

## getPaymentMethods() <a href="#aa95aa9f5cbdc24fa4b82316f856c5a69" id="aa95aa9f5cbdc24fa4b82316f856c5a69"></a>

<p>virtual std::vector\<std::string\> getPaymentMethods</p>

virtual

### Returns

std::vector\<std::string\> list of payment mechanisms used

## getPrefLanguages() <a href="#a5c98fd681c4db4c47a64ae11cb255a33" id="a5c98fd681c4db4c47a64ae11cb255a33"></a>

<p>virtual std::vector\<std::string\> getPrefLanguages</p>

virtual

### Returns

std::vector\<std::string\> card preferred language (only EMV cards Tag 5F2D)

## getReceipt() <a href="#a2d5b13ed40cbc0670d3c145f52a44358" id="a2d5b13ed40cbc0670d3c145f52a44358"></a>

<p>virtual std::string getReceipt</p>

virtual

### Returns

The receipt in HTML format. Any images (including signature) are to be embedded in the HTML

## getReceiptType() <a href="#acdcfbad986e2abbea08e0e44d8565c0a" id="acdcfbad986e2abbea08e0e44d8565c0a"></a>

<p>virtual std::string getReceiptType</p>

virtual

### Returns

The type of receipt to be printed

## getStoreNumber() <a href="#a4de757414ae4396d0ce95785244e110f" id="a4de757414ae4396d0ce95785244e110f"></a>

<p>virtual std::string getStoreNumber</p>

virtual

### Returns

std::string with store number assigned by the merchant

## getSurchargeAmount() <a href="#a1d7cd27ce253cf29eb101791382dd5e4" id="a1d7cd27ce253cf29eb101791382dd5e4"></a>

<p>virtual std::string getSurchargeAmount</p>

virtual

### Returns

std::string surcharge amount

## getTaxAmount() <a href="#a445ae80092524519ec95206ce1c62701" id="a445ae80092524519ec95206ce1c62701"></a>

<p>virtual std::string getTaxAmount</p>

virtual

### Returns

std::string tax amount

## getTechnologyData() <a href="#ace2e8e72f035b6245ab7e1ad3092e32b" id="ace2e8e72f035b6245ab7e1ad3092e32b"></a>

<p>virtual <a href="namespacevficpl.md#structvficpl_1_1_technology_data">TechnologyData</a> getTechnologyData</p>

virtual

### Returns

NFC technology used for a transaction

## getTransactionOriginator() <a href="#a2d3700487eb38ba681a96f19d884b45e" id="a2d3700487eb38ba681a96f19d884b45e"></a>

<p>virtual <a href="namespacevficpl.md#a6c410aee3c873fc45fe7bccf53c6b8d5">TransactionOriginator</a> getTransactionOriginator</p>

virtual

### Returns

TransactionOriginator which is responsible for transaction start

## getTransactionResult() <a href="#a06e4adfff4e4955a3707be0d97fdcb81" id="a06e4adfff4e4955a3707be0d97fdcb81"></a>

<p>virtual <a href="namespacevficpl.md#affde3f05c6a4a5092ccd40ec3e830d43">TransactionResult</a> getTransactionResult</p>

virtual

### Returns

TransactionResult result of transaction

## getTransactionType() <a href="#ae506631815deb04090a80990b5aedb7a" id="ae506631815deb04090a80990b5aedb7a"></a>

<p>virtual <a href="namespacevficpl.md#aa7a2e64697569804f14626bbb2649a58">TransactionType</a> getTransactionType</p>

virtual

### Returns

std::string transaction executed by the payment application

## getTransAmount() <a href="#aebdaef7ee32fdc53cd3f5248769883cd" id="aebdaef7ee32fdc53cd3f5248769883cd"></a>

<p>virtual std::string getTransAmount</p>

virtual

### Returns

std::string transaction amount

## getTransCurrency() <a href="#ae330f12e04b2fd30b810b8047f69d06d" id="ae330f12e04b2fd30b810b8047f69d06d"></a>

<p>virtual std::string getTransCurrency</p>

virtual

### Returns

std::string alphabetic currency code (ISO 4217). Ex: USD,EUR

## getTransId() <a href="#a250cf227e24a591c3e73ecb1b286167a" id="a250cf227e24a591c3e73ecb1b286167a"></a>

<p>virtual std::string getTransId</p>

virtual

### Returns

std::string transaction id provided by the payment gateway, which is a client specific transaction identifier

## hasSignatureImage() <a href="#a9fd86152e3a7f7211ce14cdcec0240b8" id="a9fd86152e3a7f7211ce14cdcec0240b8"></a>

<p>virtual bool hasSignatureImage</p>

virtual

### Returns

Indicates if the Receipt contains an embedded signature image

## initTrigger() <a href="#aa2d78ce2a636e98467c816650357cf28" id="aa2d78ce2a636e98467c816650357cf28"></a>

<p>virtual void initTrigger</p>

virtual

method initTrigger is used by the commerce library to manipulate the transaction data right before call of invoke

**Parameters**

**trigger** to manipulate

## requiresSignature() <a href="#a6449781b0f196e38ac3dcdb1d2d25e03" id="a6449781b0f196e38ac3dcdb1d2d25e03"></a>

<p>virtual bool requiresSignature</p>

virtual

### Returns

Indicates if the Receipt contains an area where the customer is still required to sign

## setAdjustedAmount() <a href="#a34a10f2571303eae13c7639ac9814a69" id="a34a10f2571303eae13c7639ac9814a69"></a>

<p>virtual void setAdjustedAmount</p>

virtual

method sets adjusted amount

**Parameters**

**amount** replaces adjusted amount

## setAdjustmentDescription() <a href="#a5b5222ad80ecf9e0980cd9c8f2d489c0" id="a5b5222ad80ecf9e0980cd9c8f2d489c0"></a>

<p>virtual void setAdjustmentDescription</p>

virtual

method sets description of adjusted amount

**Parameters**

**text** replaces description

## setAdjustmentPercentage() <a href="#a5c49a51bb496d6a59f01917f9887ddfa" id="a5c49a51bb496d6a59f01917f9887ddfa"></a>

<p>virtual void setAdjustmentPercentage</p>

virtual

methods sets percentage of amount adjusted for convenience, e.g. 0.1 if 10%

**Parameters**

**pct** replaces existing value

## setTransAmount() <a href="#a04649094a5850b458f7bf6ab8368f8b1" id="a04649094a5850b458f7bf6ab8368f8b1"></a>

<p>virtual void setTransAmount</p>

virtual

method sets transaction amount

**Parameters**

**amount** replaces current transaction amount

------------------------------------------------------------------------

The documentation for this interface was generated from the following file:

- cpl/include/commerce/<a href="_transaction_data_provider_8h_source.md">TransactionDataProvider.h</a>

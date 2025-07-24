---
hidden: true
title: ITransactionDataProvider Interface Referenceabstract
---

[Public Member Functions](#pub-methods)

`#include <`<a href="_i_transaction_data_provider_8h_source.md">ITransactionDataProvider.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
| virtual  | [\~ITransactionDataProvider](#a62bcc0382a23b2752db7b94b59361249) () |
| virtual <a href="namespacevficpl.md#a6c410aee3c873fc45fe7bccf53c6b8d5">TransactionOriginator</a>  | [getTransactionOriginator](#a30724a94114af3c00bf5b6ac0e4b3d4e) ()=0 |
| virtual std::string  | [getInvoice](#a75e5476bb58d2b4cc60581154acdbe27) ()=0 |
| virtual std::string  | [getStoreNumber](#a933b4b0e7bf6ca5fea5497ac42b6a12d) ()=0 |
| virtual std::string  | [getLane](#a20d3df942fedb67126800d23ddde8a50) ()=0 |
| virtual std::string  | [getCashierId](#af3a74a8e1b4a95d5483d86e4d3f1d21d) ()=0 |
| virtual std::string  | [getTransId](#a6289b490a6584e561f43ad1af9d11f2e) ()=0 |
| virtual <a href="namespacevficpl.md#aa7a2e64697569804f14626bbb2649a58">TransactionType</a>  | [getTransactionType](#a3352a8ee352bd81404aa7fc7494ca9bf) ()=0 |
| virtual std::string  | [getTransAmount](#afc1a8b25ce3b7c5badc66a51cf0e19c4) ()=0 |
| virtual std::string  | [getTransCurrency](#a5f1556e4af51933f00314802a96b4e6f) ()=0 |
| virtual std::string  | [getPanHandle](#a7da6d1abeb38762de2416d2292827d50) ()=0 |
| virtual std::string  | [getPanFirst6](#aeec51bf774ddd8e41416530cd7ab3163) ()=0 |
| virtual std::string  | [getPanLast4](#a4b5c8bea94627e8704d9ffc49bfe8616) ()=0 |
| virtual <a href="namespacevficpl.md#a76b9e96d86b331202dcc0fba38b758cd">CardType</a>  | [getCardType](#a883efd507bb23e4242bf13d91767c7b7) ()=0 |
| virtual std::string  | [getAuthCode](#a4e3037a0d1c3afb5ed1c7deae0632f14) ()=0 |
| virtual <a href="namespacevficpl.md#abf880d7292973573c80d9fd18ea77453">AuthEntity</a>  | [getAuthEntity](#af8113c145d72f819224b2a13d5882998) ()=0 |
| virtual <a href="namespacevficpl.md#a87ba9bd5edfd749f4729620dbadd5fce">AuthResult</a>  | [getAuthResult](#a0b5ac9a02d3f31455d641729544cf1fb) ()=0 |
| virtual std::string  | [getAuthRespTxt](#a62edb47209c4af6afd888d3f633a2130) ()=0 |
| virtual <a href="namespacevficpl.md#abc1dfb7e5d03f66392b0b4e8be15af50">HolderAuth</a>  | [getHolderAuth](#a4f23ddb16f2fa235629d5301676c387d) ()=0 |
| virtual std::string  | [getAcquirerMerchantId](#a236aa2189974ed0802bb8d8a1f91fd6e) ()=0 |
| virtual std::string  | [getAcquirerTerminalId](#ab0c3917b10195f0c1a08733f5390a5d4) ()=0 |
| virtual std::string  | [getAcquirerId](#a38778e30c35fc0021958fc219c6319ce) ()=0 |
| virtual std::string  | [getGatewayMerchantId](#a28f7916bb832260978fe43a12999114c) ()=0 |
| virtual std::string  | [getGatewayTerminalId](#a590a5b654aa974d40d863180b3a026c7) ()=0 |
| virtual std::string  | [getLoyaltyId](#aaa73658d7e0be58f1a0c28974d740205) ()=0 |
| virtual <a href="namespacevficpl.md#affde3f05c6a4a5092ccd40ec3e830d43">TransactionResult</a>  | [getTransactionResult](#a9c4fd34a48d2592a2c0254c5262e4cd6) ()=0 |
| virtual std::string  | [getInitialAmount](#acc001411f3affccae176809bed7fd84e) ()=0 |
| virtual std::string  | [getAdjustedAmount](#a6014f6caf9eeb38098cf4c98d779ad95) ()=0 |
| virtual std::string  | [getGratuityAmount](#a8fdc9666ff565a1f86316a5fef82ecb4) ()=0 |
| virtual std::string  | [getApprovedAmount](#ab7561de3c6df6cf01c0fe09b39face8a) ()=0 |
| virtual std::string  | [getCardCurrency](#ad6670db23758bfef61cb0e8fa6efd672) ()=0 |
| virtual std::string  | [getCardCountry](#ab91e475434e075380c254c91c14199dc) ()=0 |
| virtual std::vector\< std::string \>  | [getPrefLanguages](#aa81aaa8762a2953e1e61d11fcf406cfa) ()=0 |
| virtual bool  | [getCashPayment](#a185468b7a3ee0f88465e65e561c3b878) ()=0 |
| virtual std::vector\< std::string \>  | [getPaymentMethods](#a684e14d7a4954f641b870a50e48a92d2) ()=0 |
| virtual void  | [setTransAmount](#aa2faf97b914ba3f7db3a0eafb41aada6) (const std::string &amount)=0 |
| virtual void  | [setAdjustedAmount](#abdcd06e65e93a83fd6ddadb3e15c5e07) (const std::string &amount)=0 |
| virtual std::string  | [getReceiptType](#ad4345f6abdf0e44d4606183f3c66f548) ()=0 |
| virtual std::string  | [getReceipt](#a23d18b2dbaf3d7636c764a7c177149d7) ()=0 |
| virtual bool  | [requiresSignature](#aea8d6c9f406360f33543b1fc944aa2f0) ()=0 |
| virtual bool  | [hasSignatureImage](#ad13d8c268ed6643cff24ff3044e1a161) ()=0 |
| virtual void  | [initTrigger](#a4804404b7a2e0628a5330ade572be106) (const <a href="namespacevficpl.md#aba55b083790f62440bcff1c23bbe2f12">CpTrigger</a> &trigger)=0 |

## Constructor& Destructor Documentation

## \~ITransactionDataProvider() <a href="#a62bcc0382a23b2752db7b94b59361249" id="a62bcc0382a23b2752db7b94b59361249"></a>

<p>virtual \~<a href="classvficpl_1_1_i_transaction_data_provider.md">ITransactionDataProvider</a></p>

inlinevirtual

default destructor

## MemberFunction Documentation {#member-function-documentation}

## getAcquirerId() <a href="#a38778e30c35fc0021958fc219c6319ce" id="a38778e30c35fc0021958fc219c6319ce"></a>

<p>virtual std::string getAcquirerId</p>

pure virtual

### Returns

std::string acquirer id

## getAcquirerMerchantId() <a href="#a236aa2189974ed0802bb8d8a1f91fd6e" id="a236aa2189974ed0802bb8d8a1f91fd6e"></a>

<p>virtual std::string getAcquirerMerchantId</p>

pure virtual

### Returns

std::string acquirer merchant id

## getAcquirerTerminalId() <a href="#ab0c3917b10195f0c1a08733f5390a5d4" id="ab0c3917b10195f0c1a08733f5390a5d4"></a>

<p>virtual std::string getAcquirerTerminalId</p>

pure virtual

### Returns

std::string acquirer terminal id

## getAdjustedAmount() <a href="#a6014f6caf9eeb38098cf4c98d779ad95" id="a6014f6caf9eeb38098cf4c98d779ad95"></a>

<p>virtual std::string getAdjustedAmount</p>

pure virtual

### Returns

std::string the sum of adjustments that have to be applied to the initial amount excluding the gratuity.

## getApprovedAmount() <a href="#ab7561de3c6df6cf01c0fe09b39face8a" id="ab7561de3c6df6cf01c0fe09b39face8a"></a>

<p>virtual std::string getApprovedAmount</p>

pure virtual

### Returns

std::string amount the transaction was approved for.

## getAuthCode() <a href="#a4e3037a0d1c3afb5ed1c7deae0632f14" id="a4e3037a0d1c3afb5ed1c7deae0632f14"></a>

<p>virtual std::string getAuthCode</p>

pure virtual

### Returns

std::string transaction authorization code provided by the payment processing service or acquirer

## getAuthEntity() <a href="#af8113c145d72f819224b2a13d5882998" id="af8113c145d72f819224b2a13d5882998"></a>

<p>virtual <a href="namespacevficpl.md#abf880d7292973573c80d9fd18ea77453">AuthEntity</a> getAuthEntity</p>

pure virtual

### Returns

AuthEntity entity that has authorized the transaction

## getAuthRespTxt() <a href="#a62edb47209c4af6afd888d3f633a2130" id="a62edb47209c4af6afd888d3f633a2130"></a>

<p>virtual std::string getAuthRespTxt</p>

pure virtual

### Returns

std::string descriptive text accompanying the Auth_Code from payment processor.

## getAuthResult() <a href="#a0b5ac9a02d3f31455d641729544cf1fb" id="a0b5ac9a02d3f31455d641729544cf1fb"></a>

<p>virtual <a href="namespacevficpl.md#a87ba9bd5edfd749f4729620dbadd5fce">AuthResult</a> getAuthResult</p>

pure virtual

### Returns

AuthResult result of transaction authorization.

## getCardCountry() <a href="#ab91e475434e075380c254c91c14199dc" id="ab91e475434e075380c254c91c14199dc"></a>

<p>virtual std::string getCardCountry</p>

pure virtual

### Returns

std::string card country (only EMV cards Tag 5F28)

## getCardCurrency() <a href="#ad6670db23758bfef61cb0e8fa6efd672" id="ad6670db23758bfef61cb0e8fa6efd672"></a>

<p>virtual std::string getCardCurrency</p>

pure virtual

### Returns

std::string card currency (only EMV cards Tag 9F42)

## getCardType() <a href="#a883efd507bb23e4242bf13d91767c7b7" id="a883efd507bb23e4242bf13d91767c7b7"></a>

<p>virtual <a href="namespacevficpl.md#a76b9e96d86b331202dcc0fba38b758cd">CardType</a> getCardType</p>

pure virtual

### Returns

std::string card type used to obtain card data

## getCashierId() <a href="#af3a74a8e1b4a95d5483d86e4d3f1d21d" id="af3a74a8e1b4a95d5483d86e4d3f1d21d"></a>

<p>virtual std::string getCashierId</p>

pure virtual

### Returns

std::string identifies the cashier

## getCashPayment() <a href="#a185468b7a3ee0f88465e65e561c3b878" id="a185468b7a3ee0f88465e65e561c3b878"></a>

<p>virtual bool getCashPayment</p>

pure virtual

### Returns

true when paid by cash, card_type will be disregarded, if false or not present, Card_Type must be specified.

## getGatewayMerchantId() <a href="#a28f7916bb832260978fe43a12999114c" id="a28f7916bb832260978fe43a12999114c"></a>

<p>virtual std::string getGatewayMerchantId</p>

pure virtual

### Returns

std::string gateway merchant id

## getGatewayTerminalId() <a href="#a590a5b654aa974d40d863180b3a026c7" id="a590a5b654aa974d40d863180b3a026c7"></a>

<p>virtual std::string getGatewayTerminalId</p>

pure virtual

### Returns

std::string gateway terminal id

## getGratuityAmount() <a href="#a8fdc9666ff565a1f86316a5fef82ecb4" id="a8fdc9666ff565a1f86316a5fef82ecb4"></a>

<p>virtual std::string getGratuityAmount</p>

pure virtual

### Returns

double percentage amount to adjust, e.g 0.1 if 10%

std::string description field for amount adjustment

std::string tip and its value

## getHolderAuth() <a href="#a4f23ddb16f2fa235629d5301676c387d" id="a4f23ddb16f2fa235629d5301676c387d"></a>

<p>virtual <a href="namespacevficpl.md#abc1dfb7e5d03f66392b0b4e8be15af50">HolderAuth</a> getHolderAuth</p>

pure virtual

### Returns

HolderAuth means by which the transaction is authorized.

## getInitialAmount() <a href="#acc001411f3affccae176809bed7fd84e" id="acc001411f3affccae176809bed7fd84e"></a>

<p>virtual std::string getInitialAmount</p>

pure virtual

### Returns

std::string the amount that payment is attempted.

## getInvoice() <a href="#a75e5476bb58d2b4cc60581154acdbe27" id="a75e5476bb58d2b4cc60581154acdbe27"></a>

<p>virtual std::string getInvoice</p>

pure virtual

### Returns

std::string with unique reference to transaction

## getLane() <a href="#a20d3df942fedb67126800d23ddde8a50" id="a20d3df942fedb67126800d23ddde8a50"></a>

<p>virtual std::string getLane</p>

pure virtual

### Returns

std::string identifies the payment terminal location in the store

## getLoyaltyId() <a href="#aaa73658d7e0be58f1a0c28974d740205" id="aaa73658d7e0be58f1a0c28974d740205"></a>

<p>virtual std::string getLoyaltyId</p>

pure virtual

### Returns

std::string loyalty identifier

## getPanFirst6() <a href="#aeec51bf774ddd8e41416530cd7ab3163" id="aeec51bf774ddd8e41416530cd7ab3163"></a>

<p>virtual std::string getPanFirst6</p>

pure virtual

### Returns

the first 6 digits of the card holder PAN

## getPanHandle() <a href="#a7da6d1abeb38762de2416d2292827d50" id="a7da6d1abeb38762de2416d2292827d50"></a>

<p>virtual std::string getPanHandle</p>

pure virtual

### Returns

std::string reference of payment application which refers to the PAN in question.

## getPanLast4() <a href="#a4b5c8bea94627e8704d9ffc49bfe8616" id="a4b5c8bea94627e8704d9ffc49bfe8616"></a>

<p>virtual std::string getPanLast4</p>

pure virtual

### Returns

std::string the last four digits of the card holder PAN

## getPaymentMethods() <a href="#a684e14d7a4954f641b870a50e48a92d2" id="a684e14d7a4954f641b870a50e48a92d2"></a>

<p>virtual std::vector\<std::string\> getPaymentMethods</p>

pure virtual

### Returns

std::vector\<std::string\> list of payment mechanisms used

## getPrefLanguages() <a href="#aa81aaa8762a2953e1e61d11fcf406cfa" id="aa81aaa8762a2953e1e61d11fcf406cfa"></a>

<p>virtual std::vector\<std::string\> getPrefLanguages</p>

pure virtual

### Returns

std::vector\<std::string\> card preferred language (only EMV cards Tag 5F2D)

## getReceipt() <a href="#a23d18b2dbaf3d7636c764a7c177149d7" id="a23d18b2dbaf3d7636c764a7c177149d7"></a>

<p>virtual std::string getReceipt</p>

pure virtual

### Returns

The receipt in HTML format. Any images (including signature) are to be embedded in the HTML

## getReceiptType() <a href="#ad4345f6abdf0e44d4606183f3c66f548" id="ad4345f6abdf0e44d4606183f3c66f548"></a>

<p>virtual std::string getReceiptType</p>

pure virtual

methods sets percentage of amount adjusted for convenience, e.g. 0.1 if 10%

**Parameters**

**pct** replaces existing value method sets description of adjusted amount **text** replaces description

### Returns

The type of receipt to be printed

## getStoreNumber() <a href="#a933b4b0e7bf6ca5fea5497ac42b6a12d" id="a933b4b0e7bf6ca5fea5497ac42b6a12d"></a>

<p>virtual std::string getStoreNumber</p>

pure virtual

### Returns

std::string with store number assigned by the merchant

## getTransactionOriginator() <a href="#a30724a94114af3c00bf5b6ac0e4b3d4e" id="a30724a94114af3c00bf5b6ac0e4b3d4e"></a>

<p>virtual <a href="namespacevficpl.md#a6c410aee3c873fc45fe7bccf53c6b8d5">TransactionOriginator</a> getTransactionOriginator</p>

pure virtual

### Returns

TransactionOriginator which is responsible for transaction start

## getTransactionResult() <a href="#a9c4fd34a48d2592a2c0254c5262e4cd6" id="a9c4fd34a48d2592a2c0254c5262e4cd6"></a>

<p>virtual <a href="namespacevficpl.md#affde3f05c6a4a5092ccd40ec3e830d43">TransactionResult</a> getTransactionResult</p>

pure virtual

### Returns

TransactionResult result of transaction

## getTransactionType() <a href="#a3352a8ee352bd81404aa7fc7494ca9bf" id="a3352a8ee352bd81404aa7fc7494ca9bf"></a>

<p>virtual <a href="namespacevficpl.md#aa7a2e64697569804f14626bbb2649a58">TransactionType</a> getTransactionType</p>

pure virtual

### Returns

std::string transaction executed by the payment application

## getTransAmount() <a href="#afc1a8b25ce3b7c5badc66a51cf0e19c4" id="afc1a8b25ce3b7c5badc66a51cf0e19c4"></a>

<p>virtual std::string getTransAmount</p>

pure virtual

### Returns

std::string transaction amount

## getTransCurrency() <a href="#a5f1556e4af51933f00314802a96b4e6f" id="a5f1556e4af51933f00314802a96b4e6f"></a>

<p>virtual std::string getTransCurrency</p>

pure virtual

### Returns

std::string alphabetic currency code (ISO 4217). Ex: USD,EUR

## getTransId() <a href="#a6289b490a6584e561f43ad1af9d11f2e" id="a6289b490a6584e561f43ad1af9d11f2e"></a>

<p>virtual std::string getTransId</p>

pure virtual

### Returns

std::string transaction id provided by the payment gateway, which is a client specific transaction identifier

## hasSignatureImage() <a href="#ad13d8c268ed6643cff24ff3044e1a161" id="ad13d8c268ed6643cff24ff3044e1a161"></a>

<p>virtual bool hasSignatureImage</p>

pure virtual

### Returns

Indicates if the Receipt contains an embedded signature image

## initTrigger() <a href="#a4804404b7a2e0628a5330ade572be106" id="a4804404b7a2e0628a5330ade572be106"></a>

<p>virtual void initTrigger</p>

pure virtual

method initTrigger is used by the commerce library to manipulate the transaction data right before call of invoke

**Parameters**

**trigger** to manipulate

## requiresSignature() <a href="#aea8d6c9f406360f33543b1fc944aa2f0" id="aea8d6c9f406360f33543b1fc944aa2f0"></a>

<p>virtual bool requiresSignature</p>

pure virtual

### Returns

Indicates if the Receipt contains an area where the customer is still required to sign

## setAdjustedAmount() <a href="#abdcd06e65e93a83fd6ddadb3e15c5e07" id="abdcd06e65e93a83fd6ddadb3e15c5e07"></a>

<p>virtual void setAdjustedAmount</p>

pure virtual

method sets adjusted amount

**Parameters**

**amount** replaces adjusted amount

## setTransAmount() <a href="#aa2faf97b914ba3f7db3a0eafb41aada6" id="aa2faf97b914ba3f7db3a0eafb41aada6"></a>

<p>virtual void setTransAmount</p>

pure virtual

method sets transaction amount

**Parameters**

**amount** replaces current transaction amount

------------------------------------------------------------------------

The documentation for this interface was generated from the following file:

- cpl/include/commerce/<a href="_i_transaction_data_provider_8h_source.md">ITransactionDataProvider.h</a>

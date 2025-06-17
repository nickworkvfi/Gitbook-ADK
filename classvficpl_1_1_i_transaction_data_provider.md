---
title: vficpl::ITransactionDataProvider

---

# vficpl::ITransactionDataProvider






`#include <ITransactionDataProvider.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~ITransactionDataProvider](classvficpl_1_1_i_transaction_data_provider.md#function-~itransactiondataprovider)**() |
| virtual [TransactionOriginator](namespacevficpl.md#enum-transactionoriginator) | **[getTransactionOriginator](classvficpl_1_1_i_transaction_data_provider.md#function-gettransactionoriginator)**() =0 |
| virtual std::string | **[getInvoice](classvficpl_1_1_i_transaction_data_provider.md#function-getinvoice)**() =0 |
| virtual std::string | **[getStoreNumber](classvficpl_1_1_i_transaction_data_provider.md#function-getstorenumber)**() =0 |
| virtual std::string | **[getLane](classvficpl_1_1_i_transaction_data_provider.md#function-getlane)**() =0 |
| virtual std::string | **[getCashierId](classvficpl_1_1_i_transaction_data_provider.md#function-getcashierid)**() =0 |
| virtual std::string | **[getTransId](classvficpl_1_1_i_transaction_data_provider.md#function-gettransid)**() =0 |
| virtual [TransactionType](namespacevficpl.md#enum-transactiontype) | **[getTransactionType](classvficpl_1_1_i_transaction_data_provider.md#function-gettransactiontype)**() =0 |
| virtual std::string | **[getTransAmount](classvficpl_1_1_i_transaction_data_provider.md#function-gettransamount)**() =0 |
| virtual std::string | **[getTransCurrency](classvficpl_1_1_i_transaction_data_provider.md#function-gettranscurrency)**() =0 |
| virtual std::string | **[getPanHandle](classvficpl_1_1_i_transaction_data_provider.md#function-getpanhandle)**() =0 |
| virtual std::string | **[getPanFirst6](classvficpl_1_1_i_transaction_data_provider.md#function-getpanfirst6)**() =0 |
| virtual std::string | **[getPanLast4](classvficpl_1_1_i_transaction_data_provider.md#function-getpanlast4)**() =0 |
| virtual [CardType](namespacevficpl.md#enum-cardtype) | **[getCardType](classvficpl_1_1_i_transaction_data_provider.md#function-getcardtype)**() =0 |
| virtual std::string | **[getAuthCode](classvficpl_1_1_i_transaction_data_provider.md#function-getauthcode)**() =0 |
| virtual [AuthEntity](namespacevficpl.md#enum-authentity) | **[getAuthEntity](classvficpl_1_1_i_transaction_data_provider.md#function-getauthentity)**() =0 |
| virtual [AuthResult](namespacevficpl.md#enum-authresult) | **[getAuthResult](classvficpl_1_1_i_transaction_data_provider.md#function-getauthresult)**() =0 |
| virtual std::string | **[getAuthRespTxt](classvficpl_1_1_i_transaction_data_provider.md#function-getauthresptxt)**() =0 |
| virtual [HolderAuth](namespacevficpl.md#enum-holderauth) | **[getHolderAuth](classvficpl_1_1_i_transaction_data_provider.md#function-getholderauth)**() =0 |
| virtual std::string | **[getAcquirerMerchantId](classvficpl_1_1_i_transaction_data_provider.md#function-getacquirermerchantid)**() =0 |
| virtual std::string | **[getAcquirerTerminalId](classvficpl_1_1_i_transaction_data_provider.md#function-getacquirerterminalid)**() =0 |
| virtual std::string | **[getAcquirerId](classvficpl_1_1_i_transaction_data_provider.md#function-getacquirerid)**() =0 |
| virtual std::string | **[getGatewayMerchantId](classvficpl_1_1_i_transaction_data_provider.md#function-getgatewaymerchantid)**() =0 |
| virtual std::string | **[getGatewayTerminalId](classvficpl_1_1_i_transaction_data_provider.md#function-getgatewayterminalid)**() =0 |
| virtual std::string | **[getLoyaltyId](classvficpl_1_1_i_transaction_data_provider.md#function-getloyaltyid)**() =0 |
| virtual [TransactionResult](namespacevficpl.md#enum-transactionresult) | **[getTransactionResult](classvficpl_1_1_i_transaction_data_provider.md#function-gettransactionresult)**() =0 |
| virtual std::string | **[getInitialAmount](classvficpl_1_1_i_transaction_data_provider.md#function-getinitialamount)**() =0 |
| virtual std::string | **[getAdjustedAmount](classvficpl_1_1_i_transaction_data_provider.md#function-getadjustedamount)**() =0 |
| virtual std::string | **[getGratuityAmount](classvficpl_1_1_i_transaction_data_provider.md#function-getgratuityamount)**() =0 |
| virtual std::string | **[getApprovedAmount](classvficpl_1_1_i_transaction_data_provider.md#function-getapprovedamount)**() =0 |
| virtual std::string | **[getCardCurrency](classvficpl_1_1_i_transaction_data_provider.md#function-getcardcurrency)**() =0 |
| virtual std::string | **[getCardCountry](classvficpl_1_1_i_transaction_data_provider.md#function-getcardcountry)**() =0 |
| virtual std::vector< std::string > | **[getPrefLanguages](classvficpl_1_1_i_transaction_data_provider.md#function-getpreflanguages)**() =0 |
| virtual bool | **[getCashPayment](classvficpl_1_1_i_transaction_data_provider.md#function-getcashpayment)**() =0 |
| virtual std::vector< std::string > | **[getPaymentMethods](classvficpl_1_1_i_transaction_data_provider.md#function-getpaymentmethods)**() =0 |
| virtual void | **[setTransAmount](classvficpl_1_1_i_transaction_data_provider.md#function-settransamount)**(const std::string & amount) =0 |
| virtual void | **[setAdjustedAmount](classvficpl_1_1_i_transaction_data_provider.md#function-setadjustedamount)**(const std::string & amount) =0 |
| virtual std::string | **[getReceiptType](classvficpl_1_1_i_transaction_data_provider.md#function-getreceipttype)**() =0 |
| virtual std::string | **[getReceipt](classvficpl_1_1_i_transaction_data_provider.md#function-getreceipt)**() =0 |
| virtual bool | **[requiresSignature](classvficpl_1_1_i_transaction_data_provider.md#function-requiressignature)**() =0 |
| virtual bool | **[hasSignatureImage](classvficpl_1_1_i_transaction_data_provider.md#function-hassignatureimage)**() =0 |
| virtual void | **[initTrigger](classvficpl_1_1_i_transaction_data_provider.md#function-inittrigger)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) & trigger) =0 |

## Public Functions Documentation

### function ~ITransactionDataProvider

```cpp
inline virtual ~ITransactionDataProvider()
```


default destructor 


### function getTransactionOriginator

```cpp
virtual TransactionOriginator getTransactionOriginator() =0
```


**Return**: TransactionOriginator which is responsible for transaction start 

### function getInvoice

```cpp
virtual std::string getInvoice() =0
```


**Return**: std::string with unique reference to transaction 

### function getStoreNumber

```cpp
virtual std::string getStoreNumber() =0
```


**Return**: std::string with store number assigned by the merchant 

### function getLane

```cpp
virtual std::string getLane() =0
```


**Return**: std::string identifies the payment terminal location in the store 

### function getCashierId

```cpp
virtual std::string getCashierId() =0
```


**Return**: std::string identifies the cashier 

### function getTransId

```cpp
virtual std::string getTransId() =0
```


**Return**: std::string transaction id provided by the payment gateway, which is a client specific transaction identifier 

### function getTransactionType

```cpp
virtual TransactionType getTransactionType() =0
```


**Return**: std::string transaction executed by the payment application 

### function getTransAmount

```cpp
virtual std::string getTransAmount() =0
```


**Return**: std::string transaction amount 

### function getTransCurrency

```cpp
virtual std::string getTransCurrency() =0
```


**Return**: std::string alphabetic currency code (ISO 4217). Ex: USD,EUR 

### function getPanHandle

```cpp
virtual std::string getPanHandle() =0
```


**Return**: std::string reference of payment application which refers to the PAN in question. 

### function getPanFirst6

```cpp
virtual std::string getPanFirst6() =0
```


**Return**: the first 6 digits of the card holder PAN 

### function getPanLast4

```cpp
virtual std::string getPanLast4() =0
```


**Return**: std::string the last four digits of the card holder PAN 

### function getCardType

```cpp
virtual CardType getCardType() =0
```


**Return**: std::string card type used to obtain card data 

### function getAuthCode

```cpp
virtual std::string getAuthCode() =0
```


**Return**: std::string transaction authorization code provided by the payment processing service or acquirer 

### function getAuthEntity

```cpp
virtual AuthEntity getAuthEntity() =0
```


**Return**: AuthEntity entity that has authorized the transaction 

### function getAuthResult

```cpp
virtual AuthResult getAuthResult() =0
```


**Return**: AuthResult result of transaction authorization. 

### function getAuthRespTxt

```cpp
virtual std::string getAuthRespTxt() =0
```


**Return**: std::string descriptive text accompanying the Auth_Code from payment processor. 

### function getHolderAuth

```cpp
virtual HolderAuth getHolderAuth() =0
```


**Return**: HolderAuth means by which the transaction is authorized. 

### function getAcquirerMerchantId

```cpp
virtual std::string getAcquirerMerchantId() =0
```


**Return**: std::string acquirer merchant id 

### function getAcquirerTerminalId

```cpp
virtual std::string getAcquirerTerminalId() =0
```


**Return**: std::string acquirer terminal id 

### function getAcquirerId

```cpp
virtual std::string getAcquirerId() =0
```


**Return**: std::string acquirer id 

### function getGatewayMerchantId

```cpp
virtual std::string getGatewayMerchantId() =0
```


**Return**: std::string gateway merchant id 

### function getGatewayTerminalId

```cpp
virtual std::string getGatewayTerminalId() =0
```


**Return**: std::string gateway terminal id 

### function getLoyaltyId

```cpp
virtual std::string getLoyaltyId() =0
```


**Return**: std::string loyalty identifier 

### function getTransactionResult

```cpp
virtual TransactionResult getTransactionResult() =0
```


**Return**: TransactionResult result of transaction 

### function getInitialAmount

```cpp
virtual std::string getInitialAmount() =0
```


**Return**: std::string the amount that payment is attempted. 

### function getAdjustedAmount

```cpp
virtual std::string getAdjustedAmount() =0
```


**Return**: std::string the sum of adjustments that have to be applied to the initial amount excluding the gratuity. 

### function getGratuityAmount

```cpp
virtual std::string getGratuityAmount() =0
```


**Return**: 

  * double percentage amount to adjust, e.g 0.1 if 10% 
  * std::string description field for amount adjustment 
  * std::string tip and its value 


### function getApprovedAmount

```cpp
virtual std::string getApprovedAmount() =0
```


**Return**: std::string amount the transaction was approved for. 

### function getCardCurrency

```cpp
virtual std::string getCardCurrency() =0
```


**Return**: std::string card currency (only EMV cards Tag 9F42) 

### function getCardCountry

```cpp
virtual std::string getCardCountry() =0
```


**Return**: std::string card country (only EMV cards Tag 5F28) 

### function getPrefLanguages

```cpp
virtual std::vector< std::string > getPrefLanguages() =0
```


**Return**: std::vector<std::string> card preferred language (only EMV cards Tag 5F2D) 

### function getCashPayment

```cpp
virtual bool getCashPayment() =0
```


**Return**: true when paid by cash, card_type will be disregarded, if false or not present, Card_Type must be specified. 

### function getPaymentMethods

```cpp
virtual std::vector< std::string > getPaymentMethods() =0
```


**Return**: std::vector<std::string> list of payment mechanisms used 

### function setTransAmount

```cpp
virtual void setTransAmount(
    const std::string & amount
) =0
```


**Parameters**: 

  * **amount** replaces current transaction amount 


method sets transaction amount 


### function setAdjustedAmount

```cpp
virtual void setAdjustedAmount(
    const std::string & amount
) =0
```


**Parameters**: 

  * **amount** replaces adjusted amount 


method sets adjusted amount 


### function getReceiptType

```cpp
virtual std::string getReceiptType() =0
```


**Parameters**: 

  * **pct** replaces existing value method sets description of adjusted amount 
  * **text** replaces description 


**Return**: The type of receipt to be printed 

methods sets percentage of amount adjusted for convenience, e.g. 0.1 if 10% 


### function getReceipt

```cpp
virtual std::string getReceipt() =0
```


**Return**: The receipt in HTML format. Any images (including signature) are to be embedded in the HTML 

### function requiresSignature

```cpp
virtual bool requiresSignature() =0
```


**Return**: Indicates if the Receipt contains an area where the customer is still required to sign 

### function hasSignatureImage

```cpp
virtual bool hasSignatureImage() =0
```


**Return**: Indicates if the Receipt contains an embedded signature image 

### function initTrigger

```cpp
virtual void initTrigger(
    const CpTrigger & trigger
) =0
```


**Parameters**: 

  * **trigger** to manipulate 


method initTrigger is used by the commerce library to manipulate the transaction data right before call of invoke 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
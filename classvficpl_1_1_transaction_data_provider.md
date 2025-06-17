---
title: vficpl::TransactionDataProvider

---

# vficpl::TransactionDataProvider






`#include <TransactionDataProvider.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[TransactionDataProvider](classvficpl_1_1_transaction_data_provider.md#function-transactiondataprovider)**() |
| virtual | **[~TransactionDataProvider](classvficpl_1_1_transaction_data_provider.md#function-~transactiondataprovider)**() |
| virtual [TransactionOriginator](namespacevficpl.md#enum-transactionoriginator) | **[getTransactionOriginator](classvficpl_1_1_transaction_data_provider.md#function-gettransactionoriginator)**() |
| virtual std::string | **[getInvoice](classvficpl_1_1_transaction_data_provider.md#function-getinvoice)**() |
| virtual std::string | **[getStoreNumber](classvficpl_1_1_transaction_data_provider.md#function-getstorenumber)**() |
| virtual std::string | **[getLane](classvficpl_1_1_transaction_data_provider.md#function-getlane)**() |
| virtual std::string | **[getCashierId](classvficpl_1_1_transaction_data_provider.md#function-getcashierid)**() |
| virtual std::string | **[getTransId](classvficpl_1_1_transaction_data_provider.md#function-gettransid)**() |
| virtual [TransactionType](namespacevficpl.md#enum-transactiontype) | **[getTransactionType](classvficpl_1_1_transaction_data_provider.md#function-gettransactiontype)**() |
| virtual std::string | **[getTransAmount](classvficpl_1_1_transaction_data_provider.md#function-gettransamount)**() |
| virtual std::string | **[getTransCurrency](classvficpl_1_1_transaction_data_provider.md#function-gettranscurrency)**() |
| virtual std::string | **[getPanHandle](classvficpl_1_1_transaction_data_provider.md#function-getpanhandle)**() |
| virtual std::string | **[getPanFirst6](classvficpl_1_1_transaction_data_provider.md#function-getpanfirst6)**() |
| virtual std::string | **[getPanLast4](classvficpl_1_1_transaction_data_provider.md#function-getpanlast4)**() |
| virtual [CardType](namespacevficpl.md#enum-cardtype) | **[getCardType](classvficpl_1_1_transaction_data_provider.md#function-getcardtype)**() |
| virtual std::string | **[getAuthCode](classvficpl_1_1_transaction_data_provider.md#function-getauthcode)**() |
| virtual [AuthEntity](namespacevficpl.md#enum-authentity) | **[getAuthEntity](classvficpl_1_1_transaction_data_provider.md#function-getauthentity)**() |
| virtual [AuthResult](namespacevficpl.md#enum-authresult) | **[getAuthResult](classvficpl_1_1_transaction_data_provider.md#function-getauthresult)**() |
| virtual std::string | **[getAuthRespTxt](classvficpl_1_1_transaction_data_provider.md#function-getauthresptxt)**() |
| virtual [HolderAuth](namespacevficpl.md#enum-holderauth) | **[getHolderAuth](classvficpl_1_1_transaction_data_provider.md#function-getholderauth)**() |
| virtual std::string | **[getAcquirerMerchantId](classvficpl_1_1_transaction_data_provider.md#function-getacquirermerchantid)**() |
| virtual std::string | **[getAcquirerTerminalId](classvficpl_1_1_transaction_data_provider.md#function-getacquirerterminalid)**() |
| virtual std::string | **[getAcquirerId](classvficpl_1_1_transaction_data_provider.md#function-getacquirerid)**() |
| virtual std::string | **[getGatewayMerchantId](classvficpl_1_1_transaction_data_provider.md#function-getgatewaymerchantid)**() |
| virtual std::string | **[getGatewayTerminalId](classvficpl_1_1_transaction_data_provider.md#function-getgatewayterminalid)**() |
| virtual std::string | **[getLoyaltyId](classvficpl_1_1_transaction_data_provider.md#function-getloyaltyid)**() |
| virtual [TransactionResult](namespacevficpl.md#enum-transactionresult) | **[getTransactionResult](classvficpl_1_1_transaction_data_provider.md#function-gettransactionresult)**() |
| virtual std::string | **[getInitialAmount](classvficpl_1_1_transaction_data_provider.md#function-getinitialamount)**() |
| virtual std::string | **[getAdjustedAmount](classvficpl_1_1_transaction_data_provider.md#function-getadjustedamount)**() |
| virtual double | **[getAdjustmentPercentage](classvficpl_1_1_transaction_data_provider.md#function-getadjustmentpercentage)**() |
| virtual std::string | **[getAdjustmentDescription](classvficpl_1_1_transaction_data_provider.md#function-getadjustmentdescription)**() |
| virtual std::string | **[getCashBackAmount](classvficpl_1_1_transaction_data_provider.md#function-getcashbackamount)**() |
| virtual std::string | **[getGratuityAmount](classvficpl_1_1_transaction_data_provider.md#function-getgratuityamount)**() |
| virtual std::string | **[getTaxAmount](classvficpl_1_1_transaction_data_provider.md#function-gettaxamount)**() |
| virtual std::string | **[getSurchargeAmount](classvficpl_1_1_transaction_data_provider.md#function-getsurchargeamount)**() |
| virtual std::string | **[getApprovedAmount](classvficpl_1_1_transaction_data_provider.md#function-getapprovedamount)**() |
| virtual std::string | **[getCardCurrency](classvficpl_1_1_transaction_data_provider.md#function-getcardcurrency)**() |
| virtual std::string | **[getCardCountry](classvficpl_1_1_transaction_data_provider.md#function-getcardcountry)**() |
| virtual std::vector< std::string > | **[getPrefLanguages](classvficpl_1_1_transaction_data_provider.md#function-getpreflanguages)**() |
| virtual bool | **[getCashPayment](classvficpl_1_1_transaction_data_provider.md#function-getcashpayment)**() |
| virtual std::vector< std::string > | **[getPaymentMethods](classvficpl_1_1_transaction_data_provider.md#function-getpaymentmethods)**() |
| virtual void | **[setTransAmount](classvficpl_1_1_transaction_data_provider.md#function-settransamount)**(const std::string & amount) |
| virtual void | **[setAdjustedAmount](classvficpl_1_1_transaction_data_provider.md#function-setadjustedamount)**(const std::string & amount) |
| virtual void | **[setAdjustmentPercentage](classvficpl_1_1_transaction_data_provider.md#function-setadjustmentpercentage)**(double pct) |
| virtual void | **[setAdjustmentDescription](classvficpl_1_1_transaction_data_provider.md#function-setadjustmentdescription)**(const std::string & text) |
| virtual std::string | **[getReceiptType](classvficpl_1_1_transaction_data_provider.md#function-getreceipttype)**() |
| virtual std::string | **[getReceipt](classvficpl_1_1_transaction_data_provider.md#function-getreceipt)**() |
| virtual bool | **[requiresSignature](classvficpl_1_1_transaction_data_provider.md#function-requiressignature)**() |
| virtual bool | **[hasSignatureImage](classvficpl_1_1_transaction_data_provider.md#function-hassignatureimage)**() |
| virtual [TechnologyData](structvficpl_1_1_technology_data.md) | **[getTechnologyData](classvficpl_1_1_transaction_data_provider.md#function-gettechnologydata)**() |
| virtual void | **[initTrigger](classvficpl_1_1_transaction_data_provider.md#function-inittrigger)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) & trigger) |

## Public Functions Documentation

### function TransactionDataProvider

```cpp
TransactionDataProvider()
```


default constructor 


### function ~TransactionDataProvider

```cpp
virtual ~TransactionDataProvider()
```


default destructor 


### function getTransactionOriginator

```cpp
virtual TransactionOriginator getTransactionOriginator()
```


**Return**: TransactionOriginator which is responsible for transaction start 

### function getInvoice

```cpp
virtual std::string getInvoice()
```


**Return**: std::string with unique reference to transaction 

### function getStoreNumber

```cpp
virtual std::string getStoreNumber()
```


**Return**: std::string with store number assigned by the merchant 

### function getLane

```cpp
virtual std::string getLane()
```


**Return**: std::string identifies the payment terminal location in the store 

### function getCashierId

```cpp
virtual std::string getCashierId()
```


**Return**: std::string identifies the cashier 

### function getTransId

```cpp
virtual std::string getTransId()
```


**Return**: std::string transaction id provided by the payment gateway, which is a client specific transaction identifier 

### function getTransactionType

```cpp
virtual TransactionType getTransactionType()
```


**Return**: std::string transaction executed by the payment application 

### function getTransAmount

```cpp
virtual std::string getTransAmount()
```


**Return**: std::string transaction amount 

### function getTransCurrency

```cpp
virtual std::string getTransCurrency()
```


**Return**: std::string alphabetic currency code (ISO 4217). Ex: USD,EUR 

### function getPanHandle

```cpp
virtual std::string getPanHandle()
```


**Return**: std::string reference of payment application which refers to the PAN in question. 

### function getPanFirst6

```cpp
virtual std::string getPanFirst6()
```


**Return**: the first 6 digits of the card holder PAN 

### function getPanLast4

```cpp
virtual std::string getPanLast4()
```


**Return**: std::string the last four digits of the card holder PAN 

### function getCardType

```cpp
virtual CardType getCardType()
```


**Return**: std::string card type used to obtain card data 

### function getAuthCode

```cpp
virtual std::string getAuthCode()
```


**Return**: std::string transaction authorization code provided by the payment processing service or acquirer 

### function getAuthEntity

```cpp
virtual AuthEntity getAuthEntity()
```


**Return**: AuthEntity entity that has authorized the transaction 

### function getAuthResult

```cpp
virtual AuthResult getAuthResult()
```


**Return**: AuthResult result of transaction authorization. 

### function getAuthRespTxt

```cpp
virtual std::string getAuthRespTxt()
```


**Return**: std::string descriptive text accompanying the Auth_Code from payment processor. 

### function getHolderAuth

```cpp
virtual HolderAuth getHolderAuth()
```


**Return**: HolderAuth means by which the transaction is authorized. 

### function getAcquirerMerchantId

```cpp
virtual std::string getAcquirerMerchantId()
```


**Return**: std::string acquirer merchant id 

### function getAcquirerTerminalId

```cpp
virtual std::string getAcquirerTerminalId()
```


**Return**: std::string acquirer terminal id 

### function getAcquirerId

```cpp
virtual std::string getAcquirerId()
```


**Return**: std::string acquirer id 

### function getGatewayMerchantId

```cpp
virtual std::string getGatewayMerchantId()
```


**Return**: std::string gateway merchant id 

### function getGatewayTerminalId

```cpp
virtual std::string getGatewayTerminalId()
```


**Return**: std::string gateway terminal id 

### function getLoyaltyId

```cpp
virtual std::string getLoyaltyId()
```


**Return**: std::string loyalty identifier 

### function getTransactionResult

```cpp
virtual TransactionResult getTransactionResult()
```


**Return**: TransactionResult result of transaction 

### function getInitialAmount

```cpp
virtual std::string getInitialAmount()
```


**Return**: std::string the amount that payment is attempted. 

### function getAdjustedAmount

```cpp
virtual std::string getAdjustedAmount()
```


**Return**: std::string the sum of adjustments that have to be applied to the initial amount excluding the gratuity. 

### function getAdjustmentPercentage

```cpp
virtual double getAdjustmentPercentage()
```


**Return**: double percentage amount to adjust, e.g 0.1 if 10% 

### function getAdjustmentDescription

```cpp
virtual std::string getAdjustmentDescription()
```


**Return**: std::string description field for amount adjustment 

### function getCashBackAmount

```cpp
virtual std::string getCashBackAmount()
```


**Return**: std::string cash back amount 

### function getGratuityAmount

```cpp
virtual std::string getGratuityAmount()
```


**Return**: std::string gratuity amount 

### function getTaxAmount

```cpp
virtual std::string getTaxAmount()
```


**Return**: std::string tax amount 

### function getSurchargeAmount

```cpp
virtual std::string getSurchargeAmount()
```


**Return**: std::string surcharge amount 

### function getApprovedAmount

```cpp
virtual std::string getApprovedAmount()
```


**Return**: std::string amount the transaction was approved for. 

### function getCardCurrency

```cpp
virtual std::string getCardCurrency()
```


**Return**: std::string card currency (only EMV cards Tag 9F42) 

### function getCardCountry

```cpp
virtual std::string getCardCountry()
```


**Return**: std::string card country (only EMV cards Tag 5F28) 

### function getPrefLanguages

```cpp
virtual std::vector< std::string > getPrefLanguages()
```


**Return**: std::vector<std::string> card preferred language (only EMV cards Tag 5F2D) 

### function getCashPayment

```cpp
virtual bool getCashPayment()
```


**Return**: true when paid by cash, card_type will be disregarded, if false or not present, Card_Type must be specified. 

### function getPaymentMethods

```cpp
virtual std::vector< std::string > getPaymentMethods()
```


**Return**: std::vector<std::string> list of payment mechanisms used 

### function setTransAmount

```cpp
virtual void setTransAmount(
    const std::string & amount
)
```


**Parameters**: 

  * **amount** replaces current transaction amount 


method sets transaction amount 


### function setAdjustedAmount

```cpp
virtual void setAdjustedAmount(
    const std::string & amount
)
```


**Parameters**: 

  * **amount** replaces adjusted amount 


method sets adjusted amount 


### function setAdjustmentPercentage

```cpp
virtual void setAdjustmentPercentage(
    double pct
)
```


**Parameters**: 

  * **pct** replaces existing value 


methods sets percentage of amount adjusted for convenience, e.g. 0.1 if 10% 


### function setAdjustmentDescription

```cpp
virtual void setAdjustmentDescription(
    const std::string & text
)
```


**Parameters**: 

  * **text** replaces description 


method sets description of adjusted amount 


### function getReceiptType

```cpp
virtual std::string getReceiptType()
```


**Return**: The type of receipt to be printed 

### function getReceipt

```cpp
virtual std::string getReceipt()
```


**Return**: The receipt in HTML format. Any images (including signature) are to be embedded in the HTML 

### function requiresSignature

```cpp
virtual bool requiresSignature()
```


**Return**: Indicates if the Receipt contains an area where the customer is still required to sign 

### function hasSignatureImage

```cpp
virtual bool hasSignatureImage()
```


**Return**: Indicates if the Receipt contains an embedded signature image 

### function getTechnologyData

```cpp
virtual TechnologyData getTechnologyData()
```


**Return**: NFC technology used for a transaction 

### function initTrigger

```cpp
virtual void initTrigger(
    const CpTrigger & trigger
)
```


**Parameters**: 

  * **trigger** to manipulate 


method initTrigger is used by the commerce library to manipulate the transaction data right before call of invoke 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
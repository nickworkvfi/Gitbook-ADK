---
title: vficpl::Api

---

# vficpl::Api






`#include <Api.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Api](classvficpl_1_1_api.md#function-api)**() |
| virtual | **[~Api](classvficpl_1_1_api.md#function-~api)**() |
| virtual bool | **[appendReceipt](classvficpl_1_1_api.md#function-appendreceipt)**(std::string receiptType, std::string receiptContent) |
| virtual bool | **[printReceipt](classvficpl_1_1_api.md#function-printreceipt)**(std::string str) |
| virtual bool | **[isPrintingAllowed](classvficpl_1_1_api.md#function-isprintingallowed)**() |
| virtual bool | **[sendDataToPos](classvficpl_1_1_api.md#function-senddatatopos)**(const std::string & data) const |
| virtual std::map< std::string, std::string > | **[encryptCardData](classvficpl_1_1_api.md#function-encryptcarddata)**(std::string panHandle) |
| virtual std::map< std::string, std::string > | **[requestCardData](classvficpl_1_1_api.md#function-requestcarddata)**(std::vector< std::string > cardType) |
| virtual bool | **[requestStartTransaction](classvficpl_1_1_api.md#function-requeststarttransaction)**(std::string & txnType, std::string & amount, std::string & currency, bool manualEntry, std::string & gratuity) |
| bool | **[hasNextCustomerReceiptFooter](classvficpl_1_1_api.md#function-hasnextcustomerreceiptfooter)**() const |
| std::string | **[getNextCustomerReceiptFooter](classvficpl_1_1_api.md#function-getnextcustomerreceiptfooter)**() |
| bool | **[hasNextMerchantReceiptFooter](classvficpl_1_1_api.md#function-hasnextmerchantreceiptfooter)**() const |
| std::string | **[getNextMerchantReceiptFooter](classvficpl_1_1_api.md#function-getnextmerchantreceiptfooter)**() |
| bool | **[hasRequestedTransactionStart](classvficpl_1_1_api.md#function-hasrequestedtransactionstart)**() const |
| [TransactionData](structvficpl_1_1_transaction_data.md) | **[getRequestedTransactionData](classvficpl_1_1_api.md#function-getrequestedtransactiondata)**() |
| virtual [ApiError](namespacevficpl.md#enum-apierror) | **[posGetConfirmation](classvficpl_1_1_api.md#function-posgetconfirmation)**(const std::string & html, int maxseconds, bool & result) |
| virtual [ApiError](namespacevficpl.md#enum-apierror) | **[posGetTextInput](classvficpl_1_1_api.md#function-posgettextinput)**(const std::string & html, int maxseconds, std::string & result) |
| virtual [ApiError](namespacevficpl.md#enum-apierror) | **[posGetDecimalInput](classvficpl_1_1_api.md#function-posgetdecimalinput)**(const std::string & html, int maxseconds, std::string & result) |
| virtual void | **[posDisplay](classvficpl_1_1_api.md#function-posdisplay)**(const std::string & html, int minseconds) |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[CommerceData](classvficpl_1_1_api.md#friend-commercedata)**  |

## Public Functions Documentation

### function Api

```cpp
Api()
```


constructor 


### function ~Api

```cpp
virtual ~Api()
```


destructor 


### function appendReceipt

```cpp
virtual bool appendReceipt(
    std::string receiptType,
    std::string receiptContent
)
```


**Parameters**: 

  * **receiptType** cardholer or merchant type 
  * **receiptContent** content of cardholder or merchant receipt 


**Return**: success indicator true or false; 

append receipt is used to establish communication between cp and payment app. 


### function printReceipt

```cpp
virtual bool printReceipt(
    std::string str
)
```


**Parameters**: 

  * **str** String to be printed. 


**Return**: true if printing was ok, otherwise false 

API CP_APP_REQUESTS_PRINT Method is called when CP App wants to print a receipt. By default this function calls [vfiprt::prtHTML](namespacevfiprt.md#function-prthtml). Can be overwritten by payment application to perform other actions. 


### function isPrintingAllowed

```cpp
virtual bool isPrintingAllowed()
```


**Return**: success indiactor true allowed, false forbidden 

is printing allowed 


### function sendDataToPos

```cpp
virtual bool sendDataToPos(
    const std::string & data
) const
```


**Parameters**: 

  * **data** Data to be send 


**Return**: true to inform CP App, that POS received the data; false otherwise 

API CPP_APP_REQUESTS_SEND_DATA_TO_POS Method is called, when CP App wants to send data to Point Of Sale (e.g. ECR). 


### function encryptCardData

```cpp
virtual std::map< std::string, std::string > encryptCardData(
    std::string panHandle
)
```


**Parameters**: 

  * **panHandle** Handle of PAN to be used for encryption. 


**Return**: Map filled with encrypted card data ("Encrypted_PAN" and "Encrypted_PAN_KSN") if ok, otherwise empty map 

API CP_APP_REQUESTS_ENCRYPTED_CARD Method is called when CP App requests encrypted card data. By default this function does not encrypt data and returns false. Must be overwritten by payment application for encrypting card data. 


### function requestCardData

```cpp
virtual std::map< std::string, std::string > requestCardData(
    std::vector< std::string > cardType
)
```


**Parameters**: 

  * **cardType** Source for card data. Can be one or more of following values: "MAG_STRIPE", "CHIP", "CTLS_CARD", "CTLS_PHONE", "MANUAL" 


**Return**: map filled with card data if ok, otherwise empty map 

API CP_APP_REQUESTS_CARD_DATA Method is called when CP App wants to get card data. By default this function return an empty map. Can be overwritten by payment application to perform other actions. 


### function requestStartTransaction

```cpp
virtual bool requestStartTransaction(
    std::string & txnType,
    std::string & amount,
    std::string & currency,
    bool manualEntry,
    std::string & gratuity
)
```


**Parameters**: 

  * **txnType** transaction type 
  * **amount** transaction amount 
  * **currency** transaction currency 
  * **manualEntry** manual options 
  * **gratuity** gratuity amount 


**Return**: success indicator true request approved, false declined 

API CP_APP_REQUESTS_PAYMENT_TRANSACTION_START 


### function hasNextCustomerReceiptFooter

```cpp
bool hasNextCustomerReceiptFooter() const
```


**Return**: true if footer exists, otherwise false 

API CP_APP_REQUESTS_APPEND_RECEIPT Check if footer string exists, which has to appended to customer receipt. Can be called multiple times, until it returns false. 


### function getNextCustomerReceiptFooter

```cpp
std::string getNextCustomerReceiptFooter()
```


**Return**: footer string to be appended to customer receipt 

API CP_APP_REQUESTS_APPEND_RECEIPT Get footer string for customer receipt. 


### function hasNextMerchantReceiptFooter

```cpp
bool hasNextMerchantReceiptFooter() const
```


**Return**: true if footer exists, otherwise false 

API CP_APP_REQUESTS_APPEND_RECEIPT Check if footer string exists, which has to appended to merchant receipt. Can be called multiple times, until it returns false. 


### function getNextMerchantReceiptFooter

```cpp
std::string getNextMerchantReceiptFooter()
```


**Return**: footer string to be appended to merchant receipt 

API CP_APP_REQUESTS_APPEND_RECEIPT Get footer string for merchant receipt. 


### function hasRequestedTransactionStart

```cpp
bool hasRequestedTransactionStart() const
```


**Return**: true if CP App has called CP_APP_REQUESTS_PAYMENT_TRANSACTION_START. 

API CP_APP_REQUESTS_PAYMENT_TRANSACTION_START Check if CP App requested start of transaction. If true [getRequestedTransactionData()](classvficpl_1_1_api.md#function-getrequestedtransactiondata) will return data. 


### function getRequestedTransactionData

```cpp
TransactionData getRequestedTransactionData()
```


**Return**: [TransactionData](structvficpl_1_1_transaction_data.md) if CP App hasn't requested starting transaction or empty [TransactionData](structvficpl_1_1_transaction_data.md)

API CP_APP_REQUESTS_PAYMENT_TRANSACTION_START Get transaction data previously given by CP App when calling CP_APP_REQUESTS_PAYMENT_TRANSACTION_START. Transaction data can only be read once. After reading transaction data is cleared. 


### function posGetConfirmation

```cpp
virtual ApiError posGetConfirmation(
    const std::string & html,
    int maxseconds,
    bool & result
)
```


API CP_APP_REQUESTS_POS_INPUT Get POS confirmation flag 


### function posGetTextInput

```cpp
virtual ApiError posGetTextInput(
    const std::string & html,
    int maxseconds,
    std::string & result
)
```


API CP_APP_REQUESTS_POS_INPUT Get POS text input 


### function posGetDecimalInput

```cpp
virtual ApiError posGetDecimalInput(
    const std::string & html,
    int maxseconds,
    std::string & result
)
```


API CP_APP_REQUESTS_POS_INPUT Get POS decimal input 


### function posDisplay

```cpp
virtual void posDisplay(
    const std::string & html,
    int minseconds
)
```


API CP_APP_NOTIFIES_POS_DISPLAY Show message on POS display 


## Friends

### friend CommerceData

```cpp
friend class CommerceData;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
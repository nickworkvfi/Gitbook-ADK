---
hidden: true
title: Api Class Reference
---

[Public Member Functions](#pub-methods) \| [Friends](#friends)

`#include <`<a href="_api_8h_source.md">Api.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [Api](#ad36d217704b3dce3e6280054664b1edf) () |
| virtual  | [\~Api](#a099f92a882bc1f755e4752271abf88a0) () |
| virtual bool  | [appendReceipt](#ae25ae36bd209a46d9252e9540b94bb5d) (std::string receiptType, std::string receiptContent) |
| virtual bool  | [printReceipt](#af6b59bdaf755f0a3ad3e024d68698e75) (std::string str) |
| virtual bool  | [isPrintingAllowed](#a2fd68f6d834f0281f47cac60330b7cc5) () |
| virtual bool  | [sendDataToPos](#a37b6abc29b4187a8a128cab9be6ec68d) (const std::string &data) const |
| virtual std::map\< std::string, std::string \>  | [encryptCardData](#a984a04798db293477652887ef5e8e4c5) (std::string panHandle) |
| virtual std::map\< std::string, std::string \>  | [requestCardData](#a17fb4a4f2eed2f88e1c6bb6a0b9d2c20) (std::vector\< std::string \> cardType) |
| virtual bool  | [requestStartTransaction](#ab4ec00a9c48eaedce0d7ad84e78150ca) (std::string &txnType, std::string &amount, std::string &currency, bool manualEntry, std::string &gratuity) |
| bool  | [hasNextCustomerReceiptFooter](#af29014e1f7dee64e9875f61016e91293) () const |
| std::string  | [getNextCustomerReceiptFooter](#ac38e564949fc288b62ff20193c6eb060) () |
| bool  | [hasNextMerchantReceiptFooter](#a34fdf4c89d87c0e6ea78ef1c6d74c521) () const |
| std::string  | [getNextMerchantReceiptFooter](#a05bbd373880db0b11395d96641b90727) () |
| bool  | [hasRequestedTransactionStart](#a26c604cf2603929e802caa2435a1228d) () const |
| <a href="namespacevficpl.md#structvficpl_1_1_transaction_data">TransactionData</a>  | [getRequestedTransactionData](#aebfb58516141a3fd1a4d2833eeed3b1c) () |
| virtual <a href="namespacevficpl.md#a6aec14d1e03f2a2bf43eeae11b6a0ca4">ApiError</a>  | [posGetConfirmation](#a5a7a91d6f260024e15e08157dda471f8) (const std::string &html, int maxseconds, bool &result) |
| virtual <a href="namespacevficpl.md#a6aec14d1e03f2a2bf43eeae11b6a0ca4">ApiError</a>  | [posGetTextInput](#a39c1a25fe81d3a84cba5ae1e1eb648de) (const std::string &html, int maxseconds, std::string &result) |
| virtual <a href="namespacevficpl.md#a6aec14d1e03f2a2bf43eeae11b6a0ca4">ApiError</a>  | [posGetDecimalInput](#a3578c86a627f3f1f5b473ce3aec6aa64) (const std::string &html, int maxseconds, std::string &result) |
| virtual void  | [posDisplay](#af96c2751edbbff2d3c699a9804fa72a2) (const std::string &html, int minseconds) |

|         |                                                    |
|---------|----------------------------------------------------|
| Friends |                                                    |
| class   | [CommerceData](#a290273f58559a22f0c3176e8d4d9d6b8) |

## Constructor& Destructor Documentation

## Api() <a href="#ad36d217704b3dce3e6280054664b1edf" id="ad36d217704b3dce3e6280054664b1edf"></a>

<p><a href="classvficpl_1_1_api.md">Api</a></p>

constructor

## \~Api() <a href="#a099f92a882bc1f755e4752271abf88a0" id="a099f92a882bc1f755e4752271abf88a0"></a>

<p>virtual \~<a href="classvficpl_1_1_api.md">Api</a></p>

virtual

destructor

## MemberFunction Documentation {#member-function-documentation}

## appendReceipt() <a href="#ae25ae36bd209a46d9252e9540b94bb5d" id="ae25ae36bd209a46d9252e9540b94bb5d"></a>

<p>virtual bool appendReceipt</p>

virtual

append receipt is used to establish communication between cp and payment app.

**Parameters**

**receiptType** cardholer or merchant type **receiptContent** content of cardholder or merchant receipt

### Returns

success indicator true or false;

## encryptCardData() <a href="#a984a04798db293477652887ef5e8e4c5" id="a984a04798db293477652887ef5e8e4c5"></a>

<p>virtual std::map\<std::string,std::string\> encryptCardData</p>

virtual

API CP_APP_REQUESTS_ENCRYPTED_CARD Method is called when CP App requests encrypted card data. By default this function does not encrypt data and returns false. Must be overwritten by payment application for encrypting card data.

**Parameters**

\[in\] **panHandle** Handle of PAN to be used for encryption.

### Returns

Map filled with encrypted card data (\"Encrypted_PAN\" and \"Encrypted_PAN_KSN\") if ok, otherwise empty map

## getNextCustomerReceiptFooter() <a href="#ac38e564949fc288b62ff20193c6eb060" id="ac38e564949fc288b62ff20193c6eb060"></a>

<p>std::string getNextCustomerReceiptFooter</p>

API CP_APP_REQUESTS_APPEND_RECEIPT Get footer string for customer receipt.

### Returns

footer string to be appended to customer receipt

## getNextMerchantReceiptFooter() <a href="#a05bbd373880db0b11395d96641b90727" id="a05bbd373880db0b11395d96641b90727"></a>

<p>std::string getNextMerchantReceiptFooter</p>

API CP_APP_REQUESTS_APPEND_RECEIPT Get footer string for merchant receipt.

### Returns

footer string to be appended to merchant receipt

## getRequestedTransactionData() <a href="#aebfb58516141a3fd1a4d2833eeed3b1c" id="aebfb58516141a3fd1a4d2833eeed3b1c"></a>

<p><a href="namespacevficpl.md#structvficpl_1_1_transaction_data">TransactionData</a> getRequestedTransactionData</p>

API CP_APP_REQUESTS_PAYMENT_TRANSACTION_START Get transaction data previously given by CP App when calling CP_APP_REQUESTS_PAYMENT_TRANSACTION_START. Transaction data can only be read once. After reading transaction data is cleared.

### Returns

<a href="namespacevficpl.md#structvficpl_1_1_transaction_data">TransactionData</a> if CP App hasn\'t requested starting transaction or empty <a href="namespacevficpl.md#structvficpl_1_1_transaction_data">TransactionData</a>

## hasNextCustomerReceiptFooter() <a href="#af29014e1f7dee64e9875f61016e91293" id="af29014e1f7dee64e9875f61016e91293"></a>

<p>bool hasNextCustomerReceiptFooter</p>

API CP_APP_REQUESTS_APPEND_RECEIPT Check if footer string exists, which has to appended to customer receipt. Can be called multiple times, until it returns false.

### Returns

true if footer exists, otherwise false

## hasNextMerchantReceiptFooter() <a href="#a34fdf4c89d87c0e6ea78ef1c6d74c521" id="a34fdf4c89d87c0e6ea78ef1c6d74c521"></a>

<p>bool hasNextMerchantReceiptFooter</p>

API CP_APP_REQUESTS_APPEND_RECEIPT Check if footer string exists, which has to appended to merchant receipt. Can be called multiple times, until it returns false.

### Returns

true if footer exists, otherwise false

## hasRequestedTransactionStart() <a href="#a26c604cf2603929e802caa2435a1228d" id="a26c604cf2603929e802caa2435a1228d"></a>

<p>bool hasRequestedTransactionStart</p>

API CP_APP_REQUESTS_PAYMENT_TRANSACTION_START Check if CP App requested start of transaction. If true [getRequestedTransactionData()](#aebfb58516141a3fd1a4d2833eeed3b1c) will return data.

### Returns

true if CP App has called CP_APP_REQUESTS_PAYMENT_TRANSACTION_START.

## isPrintingAllowed() <a href="#a2fd68f6d834f0281f47cac60330b7cc5" id="a2fd68f6d834f0281f47cac60330b7cc5"></a>

<p>virtual bool isPrintingAllowed</p>

virtual

is printing allowed

### Returns

success indiactor true allowed, false forbidden

## posDisplay() <a href="#af96c2751edbbff2d3c699a9804fa72a2" id="af96c2751edbbff2d3c699a9804fa72a2"></a>

<p>virtual void posDisplay</p>

virtual

API CP_APP_NOTIFIES_POS_DISPLAY Show message on POS display

## posGetConfirmation() <a href="#a5a7a91d6f260024e15e08157dda471f8" id="a5a7a91d6f260024e15e08157dda471f8"></a>

<p>virtual <a href="namespacevficpl.md#a6aec14d1e03f2a2bf43eeae11b6a0ca4">ApiError</a> posGetConfirmation</p>

virtual

API CP_APP_REQUESTS_POS_INPUT Get POS confirmation flag

## posGetDecimalInput() <a href="#a3578c86a627f3f1f5b473ce3aec6aa64" id="a3578c86a627f3f1f5b473ce3aec6aa64"></a>

<p>virtual <a href="namespacevficpl.md#a6aec14d1e03f2a2bf43eeae11b6a0ca4">ApiError</a> posGetDecimalInput</p>

virtual

API CP_APP_REQUESTS_POS_INPUT Get POS decimal input

## posGetTextInput() <a href="#a39c1a25fe81d3a84cba5ae1e1eb648de" id="a39c1a25fe81d3a84cba5ae1e1eb648de"></a>

<p>virtual <a href="namespacevficpl.md#a6aec14d1e03f2a2bf43eeae11b6a0ca4">ApiError</a> posGetTextInput</p>

virtual

API CP_APP_REQUESTS_POS_INPUT Get POS text input

## printReceipt() <a href="#af6b59bdaf755f0a3ad3e024d68698e75" id="af6b59bdaf755f0a3ad3e024d68698e75"></a>

<p>virtual bool printReceipt</p>

virtual

API CP_APP_REQUESTS_PRINT Method is called when CP App wants to print a receipt. By default this function calls <a href="namespacevfiprt.md#afe19510258113242e1b45a44a81fd27c">vfiprt::prtHTML</a>. Can be overwritten by payment application to perform other actions.

**Parameters**

\[in\] **str** String to be printed.

### Returns

true if printing was ok, otherwise false

## requestCardData() <a href="#a17fb4a4f2eed2f88e1c6bb6a0b9d2c20" id="a17fb4a4f2eed2f88e1c6bb6a0b9d2c20"></a>

<p>virtual std::map\<std::string,std::string\> requestCardData</p>

virtual

API CP_APP_REQUESTS_CARD_DATA Method is called when CP App wants to get card data. By default this function return an empty map. Can be overwritten by payment application to perform other actions.

**Parameters**

\[in\] **cardType** Source for card data. Can be one or more of following values: \"MAG_STRIPE\", \"CHIP\", \"CTLS_CARD\", \"CTLS_PHONE\", \"MANUAL\"

### Returns

map filled with card data if ok, otherwise empty map

## requestStartTransaction() <a href="#ab4ec00a9c48eaedce0d7ad84e78150ca" id="ab4ec00a9c48eaedce0d7ad84e78150ca"></a>

<p>virtual bool requestStartTransaction</p>

virtual

API CP_APP_REQUESTS_PAYMENT_TRANSACTION_START

**Parameters**

**txnType** transaction type **amount** transaction amount **currency** transaction currency **manualEntry** manual options **gratuity** gratuity amount

### Returns

success indicator true request approved, false declined

## sendDataToPos() <a href="#a37b6abc29b4187a8a128cab9be6ec68d" id="a37b6abc29b4187a8a128cab9be6ec68d"></a>

<p>virtual bool sendDataToPos</p>

virtual

API CPP_APP_REQUESTS_SEND_DATA_TO_POS Method is called, when CP App wants to send data to Point Of Sale (e.g. ECR).

**Parameters**

\[in\] **data** Data to be send

### Returns

true to inform CP App, that POS received the data; false otherwise

## FriendsAnd Related Function Documentation {#friends-and-related-function-documentation}

## CommerceData <a href="#a290273f58559a22f0c3176e8d4d9d6b8" id="a290273f58559a22f0c3176e8d4d9d6b8"></a>

<p>friend class CommerceData</p>

friend

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- cpl/include/commerce/<a href="_api_8h_source.md">Api.h</a>

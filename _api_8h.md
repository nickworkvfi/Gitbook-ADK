---
title: cpl/include/commerce/Api.h

---

# cpl/include/commerce/Api.h



## Namespaces

| Name           |
| -------------- |
| **[vficpl](namespacevficpl.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vficpl::TransactionData](structvficpl_1_1_transaction_data.md)**  |
| class | **[vficpl::Api](classvficpl_1_1_api.md)**  |




## Source code

```cpp
#pragma once

#include <string>
#include <vector>
#include <map>
#include "cpdllspec.h"

namespace vficpl
{
  struct TransactionData
  {
    std::string transactionType;

    std::string transactionAmount;

    std::string currency;

    std::string gratuityAmount;

    bool manualEntry;

    std::vector<std::string> manualPromptOption;

    std::string panHandle;

    std::string result;

    std::string errorDescription;

    std::string transactionId;

    std::string invoice;
  };

  enum ApiError
  {
    API_OK,
    API_FAIL,
    API_SERVICE_TIMEOUT,
    API_INVALID_PARAMETERS,
    API_UNSUPPORTED_REQUEST,
    API_ENCRYPTION_UNAVAILABLE,
    API_NO_PAPER
  };

  class CPDllSpec Api
  {
    friend class CommerceData;
    // forward declaration for hidden implementation details
    class ApiPrivate;
    ApiPrivate *apiImpl_;
    // prevent calling copy constructor or assignment operator
    Api(const Api &o);
    void operator=(const Api &o);
  public:
    Api();


    virtual ~Api();

    virtual bool appendReceipt(std::string receiptType, std::string receiptContent);

    virtual bool printReceipt(std::string str);

    virtual bool isPrintingAllowed();

    virtual bool sendDataToPos(const std::string &data) const;

    virtual std::map<std::string,std::string> encryptCardData(std::string panHandle);

    virtual std::map<std::string,std::string> requestCardData(std::vector<std::string> cardType);

    virtual bool requestStartTransaction(
      std::string &txnType,
      std::string &amount,
      std::string &currency,
      bool manualEntry,
      std::string &gratuity);

    bool hasNextCustomerReceiptFooter() const;

    std::string getNextCustomerReceiptFooter();

    bool hasNextMerchantReceiptFooter() const;

    std::string getNextMerchantReceiptFooter();

    bool hasRequestedTransactionStart() const;

    TransactionData getRequestedTransactionData();

    virtual ApiError posGetConfirmation(const std::string& html, int maxseconds, bool& result);

    virtual ApiError posGetTextInput(const std::string& html, int maxseconds, std::string& result);

    virtual ApiError posGetDecimalInput(const std::string& html, int maxseconds, std::string& result);

    virtual void posDisplay(const std::string& html, int minseconds);
  };
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

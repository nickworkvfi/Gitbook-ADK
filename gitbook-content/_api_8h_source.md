---
hidden: true
title: Api.h
---

<a href="_api_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 #include <string>
 4 #include <vector>
 5 #include <map>
 6 #include "cpdllspec.h"
 7 
 8 namespace vficpl
 9 {
 12  struct TransactionData
 13  {
 15  std::string transactionType;
 16 
 18  std::string transactionAmount;
 19 
 21  std::string currency;
 22 
 24  std::string gratuityAmount;
 25 
 29  bool manualEntry;
 30 
 39  std::vector<std::string> manualPromptOption;
 40 
 42  std::string panHandle;
 43 
 45  std::string result;
 46 
 48  std::string errorDescription;
 49 
 53  std::string transactionId;
 54 
 56  std::string invoice;
 57  };
 58 
 59  enum ApiError
 60  {
 61  API_OK,
 62  API_FAIL,
 63  API_SERVICE_TIMEOUT,
 64  API_INVALID_PARAMETERS,
 65  API_UNSUPPORTED_REQUEST,
 66  API_ENCRYPTION_UNAVAILABLE,
 67  API_NO_PAPER
 68  };
 69 
 70  class CPDllSpec Api
 71  {
 72  friend class CommerceData;
 73  // forward declaration for hidden implementation details
 74  class ApiPrivate;
 75  ApiPrivate *apiImpl_;
 76  // prevent calling copy constructor or assignment operator
 77  Api(const Api &o);
 78  void operator=(const Api &o);
 79  public:
 81  Api();
 82 
 83 
 85  virtual ~Api();
 86 
 94  virtual bool appendReceipt(std::string receiptType, std::string receiptContent);
 95 
 104  virtual bool printReceipt(std::string str);
 105 
 110  virtual bool isPrintingAllowed();
 111 
 119  virtual bool sendDataToPos(const std::string &data) const;
 120 
 130  virtual std::map<std::string,std::string> encryptCardData(std::string panHandle);
 131 
 141  virtual std::map<std::string,std::string> requestCardData(std::vector<std::string> cardType);
 142 
 152  virtual bool requestStartTransaction(
 153  std::string &txnType,
 154  std::string &amount,
 155  std::string &currency,
 156  bool manualEntry,
 157  std::string &gratuity);
 158 
 165  bool hasNextCustomerReceiptFooter() const;
 166 
 172  std::string getNextCustomerReceiptFooter();
 173 
 180  bool hasNextMerchantReceiptFooter() const;
 181 
 187  std::string getNextMerchantReceiptFooter();
 188 
 195  bool hasRequestedTransactionStart() const;
 196 
 203  TransactionData getRequestedTransactionData();
 204 
 209  virtual ApiError posGetConfirmation(const std::string& html, int maxseconds, bool& result);
 210 
 215  virtual ApiError posGetTextInput(const std::string& html, int maxseconds, std::string& result);
 216 
 221  virtual ApiError posGetDecimalInput(const std::string& html, int maxseconds, std::string& result);
 222 
 227  virtual void posDisplay(const std::string& html, int minseconds);
 228  };
 229 }
```

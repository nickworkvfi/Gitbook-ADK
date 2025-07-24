---
hidden: true
title: TransactionDataProvider.h
---

<a href="_transaction_data_provider_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 #include "ITransactionDataProvider.h"
 4 
 5 /* specific includes */
 6 #include "CpTrigger.h"
 7 #include "cpdllspec.h"
 8 /* common includes */
 9 #include <string>
 10 #include <vector>
 11 
 12 namespace vficpl
 13 {
 14  typedef enum
 15  {
 16  TECH_TYPE_MIN_VALUE = -1,
 17  TECH_TYPE_UNDEFINED = 0,
 18  TECH_TYPE_MIFARE_CLASSIC,
 19  TECH_TYPE_MIFARE_ULTRALIGHT,
 20  TECH_TYPE_ISO7816
 21  } TechnologyType;
 22 
 23  struct CPDllSpec TechnologyData
 24  {
 25  std::string handle;
 26  TechnologyType type;
 27  std::string histbytes;
 28  std::string appdata;
 29  std::string aid;
 30  std::string ats;
 31  };
 32 
 36  class CPDllSpec TransactionDataProvider
 37  {
 38  public:
 40  TransactionDataProvider();
 41 
 43  virtual ~TransactionDataProvider();
 44 
 46  virtual TransactionOriginator getTransactionOriginator();
 47 
 49  virtual std::string getInvoice();
 50 
 52  virtual std::string getStoreNumber();
 53 
 57  virtual std::string getLane();
 58 
 60  virtual std::string getCashierId();
 61 
 65  virtual std::string getTransId();
 66 
 68  virtual TransactionType getTransactionType();
 69 
 71  virtual std::string getTransAmount();
 72 
 75  virtual std::string getTransCurrency();
 76 
 80  virtual std::string getPanHandle();
 81 
 83  virtual std::string getPanFirst6();
 84 
 86  virtual std::string getPanLast4();
 87 
 89  virtual CardType getCardType();
 90 
 94  virtual std::string getAuthCode();
 95 
 97  virtual AuthEntity getAuthEntity();
 98 
 100  virtual AuthResult getAuthResult();
 101 
 105  virtual std::string getAuthRespTxt();
 106 
 108  virtual HolderAuth getHolderAuth();
 109 
 111  virtual std::string getAcquirerMerchantId();
 112 
 114  virtual std::string getAcquirerTerminalId();
 115 
 117  virtual std::string getAcquirerId();
 118 
 120  virtual std::string getGatewayMerchantId();
 121 
 123  virtual std::string getGatewayTerminalId();
 124 
 126  virtual std::string getLoyaltyId();
 127 
 129  virtual TransactionResult getTransactionResult();
 130 
 131  // Final_Amount = Initial_Amount + Adjusted_Amount + Gratuity_Amount - Already_Approved_Amount
 133  virtual std::string getInitialAmount();
 134 
 138  virtual std::string getAdjustedAmount();
 139 
 141  virtual double getAdjustmentPercentage();
 142 
 144  virtual std::string getAdjustmentDescription();
 145 
 147  virtual std::string getCashBackAmount();
 148 
 150  virtual std::string getGratuityAmount();
 151 
 153  virtual std::string getTaxAmount();
 154 
 156  virtual std::string getSurchargeAmount();
 157 
 159  virtual std::string getApprovedAmount();
 160 
 162  virtual std::string getCardCurrency();
 163 
 165  virtual std::string getCardCountry();
 166 
 169  virtual std::vector<std::string> getPrefLanguages();
 170 
 174  virtual bool getCashPayment();
 175 
 177  virtual std::vector<std::string> getPaymentMethods();
 178 
 179  /* setters */
 180 
 184  virtual void setTransAmount(const std::string& amount);
 185 
 189  virtual void setAdjustedAmount(const std::string& amount);
 190 
 194  virtual void setAdjustmentPercentage(double pct);
 195 
 199  virtual void setAdjustmentDescription(const std::string& text);
 200 
 202  virtual std::string getReceiptType();
 203 
 205  virtual std::string getReceipt();
 206 
 208  virtual bool requiresSignature();
 209 
 211  virtual bool hasSignatureImage();
 212 
 214  virtual TechnologyData getTechnologyData();
 215 
 221  virtual void initTrigger(const CpTrigger& trigger);
 222  };
 223 } // namespace vficpl
```

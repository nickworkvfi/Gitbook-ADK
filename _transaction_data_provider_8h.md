---
title: cpl/include/commerce/TransactionDataProvider.h

---

# cpl/include/commerce/TransactionDataProvider.h



## Namespaces

| Name           |
| -------------- |
| **[vficpl](namespacevficpl.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vficpl::TechnologyData](structvficpl_1_1_technology_data.md)**  |
| interface | **[vficpl::TransactionDataProvider](classvficpl_1_1_transaction_data_provider.md)**  |




## Source code

```cpp
#pragma once

#include "ITransactionDataProvider.h"

/* specific includes */
#include "CpTrigger.h"
#include "cpdllspec.h"
/* common includes */
#include <string>
#include <vector>

namespace vficpl
{
  typedef enum
  {
    TECH_TYPE_MIN_VALUE = -1, 
    TECH_TYPE_UNDEFINED = 0,  
    TECH_TYPE_MIFARE_CLASSIC,
    TECH_TYPE_MIFARE_ULTRALIGHT,
    TECH_TYPE_ISO7816
  } TechnologyType;

  struct CPDllSpec TechnologyData
  {
    std::string handle;    
    TechnologyType type;   
    std::string histbytes; 
    std::string appdata;   
    std::string aid;       
    std::string ats;       
  };

  class CPDllSpec TransactionDataProvider
  {
    public:
      TransactionDataProvider();

      virtual ~TransactionDataProvider();

      virtual TransactionOriginator getTransactionOriginator();

      virtual std::string getInvoice();

      virtual std::string getStoreNumber();

      virtual std::string getLane();

      virtual std::string getCashierId();

      virtual std::string getTransId();

      virtual TransactionType getTransactionType();

      virtual std::string getTransAmount();

      virtual std::string getTransCurrency();

      virtual std::string getPanHandle();

      virtual std::string getPanFirst6();

      virtual std::string getPanLast4();

      virtual CardType getCardType();

      virtual std::string getAuthCode();

      virtual AuthEntity getAuthEntity();

      virtual AuthResult getAuthResult();

      virtual std::string getAuthRespTxt();

      virtual HolderAuth getHolderAuth();

      virtual std::string getAcquirerMerchantId();

      virtual std::string getAcquirerTerminalId();

      virtual std::string getAcquirerId();

      virtual std::string getGatewayMerchantId();

      virtual std::string getGatewayTerminalId();

      virtual std::string getLoyaltyId();

      virtual TransactionResult getTransactionResult();

      // Final_Amount = Initial_Amount + Adjusted_Amount + Gratuity_Amount - Already_Approved_Amount
      virtual std::string getInitialAmount();

      virtual std::string getAdjustedAmount();

      virtual double getAdjustmentPercentage();

      virtual std::string getAdjustmentDescription();

      virtual std::string getCashBackAmount();

      virtual std::string getGratuityAmount();

      virtual std::string getTaxAmount();

      virtual std::string getSurchargeAmount();

      virtual std::string getApprovedAmount();

      virtual std::string getCardCurrency();

      virtual std::string getCardCountry();

      virtual std::vector<std::string> getPrefLanguages();

      virtual bool getCashPayment();

      virtual std::vector<std::string> getPaymentMethods();

      /* setters */

      virtual void setTransAmount(const std::string& amount);

      virtual void setAdjustedAmount(const std::string& amount);

      virtual void setAdjustmentPercentage(double pct);

      virtual void setAdjustmentDescription(const std::string& text);

      virtual std::string getReceiptType();

      virtual std::string getReceipt();

      virtual bool requiresSignature();

      virtual bool hasSignatureImage();

      virtual TechnologyData getTechnologyData();

      virtual void initTrigger(const CpTrigger& trigger);
  };
} // namespace vficpl
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

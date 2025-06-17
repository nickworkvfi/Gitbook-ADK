---
title: cpl/include/commerce/ITransactionDataProvider.h

---

# cpl/include/commerce/ITransactionDataProvider.h



## Namespaces

| Name           |
| -------------- |
| **[vficpl](namespacevficpl.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[vficpl::ITransactionDataProvider](classvficpl_1_1_i_transaction_data_provider.md)**  |




## Source code

```cpp
#ifndef ITRANSACTIONDATAPROVIDER_H_
#define ITRANSACTIONDATAPROVIDER_H_

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
    ORIGINATOR_MIN_VALUE = -1,      
    ORIGINATOR_UNDEFINED = 0,       
    ORIGINATOR_PAYMENT_APPLICATION, 
    ORIGINATOR_CP_APPLICATION       
  } TransactionOriginator;

  typedef enum
  {
    TRX_TYPE_MIN_VALUE = -1,              
    TRX_TYPE_UNDEFINED = 0,               
    TRX_TYPE_PAYMENT,                     
    TRX_TYPE_DEFERRED_PAYMENT,            
    TRX_TYPE_DEFERRED_PAYMENT_COMPLETION, 
    TRX_TYPE_REFUND,                      
    TRX_TYPE_VOID,                        
    TRX_TYPE_PRE_AUTHORISATION,           
    TRX_TYPE_PRE_AUTHORISATION_COMPLETION,
    TRX_TYPE_CASH_ADVANCE,                
    TRX_TYPE_CASHBACK,                    
    TRX_TYPE_CASH_PAYMENT,                
    TRX_TYPE_REVERSAL                     
  } TransactionType;

  typedef enum
  {
    CARD_TYPE_MIN_VALUE = -1, 
    CARD_TYPE_UNDEFINED = 0,  
    CARD_TYPE_MAG_STRIPE,     
    CARD_TYPE_CHIP,           
    CARD_TYPE_CTLS_CARD,      
    CARD_TYPE_CTLS_PHONE,     
    CARD_TYPE_MANUAL,         
  } CardType;

  typedef enum
  {
    AUTH_ENTITY_MIN_VALUE = -1, 
    AUTH_ENTITY_UNDEFINED = 0,  
    AUTH_ENTITY_MERCHANT,       
    AUTH_ENTITY_ACQUIRER,       
    AUTH_ENTITY_CARD_SCHEME,    
    AUTH_ENTITY_ISSUER          
  } AuthEntity;

  typedef enum
  {
    AUTH_RESULT_MIN_VALUE = -1,     
    AUTH_RESULT_UNDEFINED = 0,      
    AUTH_RESULT_AUTHORIZED_ONLINE,  
    AUTH_RESULT_AUTHORIZED_OFFLINE, 
    AUTH_RESULT_REJECTED_ONLINE,    
    AUTH_RESULT_CASH_VERIFIED,      
    AUTH_RESULT_ABORTED             
  } AuthResult;

  typedef enum
  {
    HOLDER_AUTH_MIN_VALUE = -1, 
    HOLDER_AUTH_UNDEFINED = 0,  
    HOLDER_AUTH_PIN,            
    HOLDER_AUTH_SIGNATURE,      
    HOLDER_AUTH_ID,             
    HOLDER_AUTH_OTHER,          
    HOLDER_AUTH_NONE            
  } HolderAuth;

  typedef enum
  {
    TRX_RESULT_MIN_VALUE = -1, 
    TRX_RESULT_UNDEFINED = 0,  
    TRX_RESULT_SUCCESS,        
    TRX_RESULT_CANCELLED,      
  } TransactionResult;

  class CPDllSpec ITransactionDataProvider
  {
    public:
      virtual ~ITransactionDataProvider() {};

      virtual TransactionOriginator getTransactionOriginator() = 0;

      virtual std::string getInvoice() = 0;

      virtual std::string getStoreNumber() = 0;

      virtual std::string getLane() = 0;

      virtual std::string getCashierId() = 0;

      virtual std::string getTransId() = 0;

      virtual TransactionType getTransactionType() = 0;

      virtual std::string getTransAmount() = 0;

      virtual std::string getTransCurrency() = 0;

      virtual std::string getPanHandle() = 0;

      virtual std::string getPanFirst6() = 0;

      virtual std::string getPanLast4() = 0;

      virtual CardType getCardType() = 0;

      virtual std::string getAuthCode() = 0;

      virtual AuthEntity getAuthEntity() = 0;

      virtual AuthResult getAuthResult() = 0;

      virtual std::string getAuthRespTxt() = 0;

      virtual HolderAuth getHolderAuth() = 0;

      virtual std::string getAcquirerMerchantId() = 0;

      virtual std::string getAcquirerTerminalId() = 0;

      virtual std::string getAcquirerId() = 0;

      virtual std::string getGatewayMerchantId() = 0;

      virtual std::string getGatewayTerminalId() = 0;

      virtual std::string getLoyaltyId() = 0;

      virtual TransactionResult getTransactionResult() = 0;

      // Final_Amount = Initial_Amount + Adjusted_Amount + Gratuity_Amount - Already_Approved_Amount
      virtual std::string getInitialAmount() = 0;

      virtual std::string getAdjustedAmount() = 0;

      //virtual double getAdjustmentPercentage() = 0;

      //virtual std::string getAdjustmentDescription() = 0;

      virtual std::string getGratuityAmount() = 0;

      virtual std::string getApprovedAmount() = 0;

      virtual std::string getCardCurrency() = 0;

      virtual std::string getCardCountry() = 0;

      virtual std::vector<std::string> getPrefLanguages() = 0;

      virtual bool getCashPayment() = 0;

      virtual std::vector<std::string> getPaymentMethods() = 0;

      /* setters */

      virtual void setTransAmount(const std::string& amount) = 0;

      virtual void setAdjustedAmount(const std::string& amount) = 0;

      //virtual void setAdjustmentPercentage(double pct) = 0;

      //virtual void setAdjustmentDescription(const std::string& text) = 0;

      virtual std::string getReceiptType() = 0;

      virtual std::string getReceipt() = 0;

      virtual bool requiresSignature() = 0;

      virtual bool hasSignatureImage() = 0;

      virtual void initTrigger(const CpTrigger& trigger) = 0;
  };
} // namespace vficpl

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

---
title: cpl/include/commerce/Commerce.h

---

# cpl/include/commerce/Commerce.h



## Namespaces

| Name           |
| -------------- |
| **[vficpl](namespacevficpl.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vficpl::InvokeResult](structvficpl_1_1_invoke_result.md)** <br>Trigger invocation result.  |
| struct | **[vficpl::InvokeRequest](structvficpl_1_1_invoke_request.md)**  |
| class | **[vficpl::Barcode](classvficpl_1_1_barcode.md)** <br>Represents [Barcode]() object on CP-Payment communication.  |
| class | **[vficpl::LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md)** <br>Represents [LoyaltyIdentifier]() object on CP-Payment communication.  |
| class | **[vficpl::Offer](classvficpl_1_1_offer.md)** <br>Represents the [Offer]() object on CP-Payment communication.  |
| class | **[vficpl::Merchandise](classvficpl_1_1_merchandise.md)** <br>Represents the [Merchandise]() object on CP-Payment communication.  |
| class | **[vficpl::Donation](classvficpl_1_1_donation.md)** <br>Represents the [Donation]() object on CP-Payment communication.  |
| struct | **[vficpl::AltPaymentData](structvficpl_1_1_alt_payment_data.md)** <br>Represents Alt Payment Data object on CP-Payment communication.  |
| struct | **[vficpl::TechAltPaymentData](structvficpl_1_1_tech_alt_payment_data.md)** <br>Represents Alt Payment trigger response.  |
| struct | **[vficpl::CustomerIdentification](structvficpl_1_1_customer_identification.md)** <br>Customer identification to be used equivalent to a card pre-dip / pre-swipe.  |
| struct | **[vficpl::PaymentAmountAdjustment](structvficpl_1_1_payment_amount_adjustment.md)** <br>Payment amount adjustment Fx data.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CPL_EXPLICIT_OPERATOR_BOOL](_commerce_8h.md#define-cpl-explicit-operator-bool)**()  |




## Macros Documentation

### define CPL_EXPLICIT_OPERATOR_BOOL

```cpp
#define CPL_EXPLICIT_OPERATOR_BOOL(
    
)
operator bool()
```


## Source code

```cpp
#ifndef COMMERCE_H_
#define COMMERCE_H_

/* specific includes */
#include "Api.h"
#include "CpTrigger.h"
#include "CpFunctional.h"
#include "EnvironmentDataProvider.h"
#include "TransactionDataProvider.h"
#include "cpdllspec.h"

/* adk includes */
#include "ipc/jsobject.h"

/* common includes */
#include <string>
#include <list>
#include <stdint.h>

#if __cplusplus <= 199711L
#define CPL_EXPLICIT_OPERATOR_BOOL() operator bool()
#else
#define CPL_EXPLICIT_OPERATOR_BOOL() explicit operator bool()
#endif

namespace vficpl
{
  typedef enum
  {
    CP_INVOKE_SUCCESS,                  
    CP_INVOKE_FAILED,                   
    CP_INVOKE_TIMEOUT,                  
    CP_INVOKE_MANDATORY_PARAMS_MISSING, 
    CP_INVOKE_SERVICE_SUCCESS,          
    CP_INVOKE_NATIVE_SUCCESS,           
    CP_INVOKE_CANCELED,                 
    CP_INVOKE_BUSY,                     
    CP_INVOKE_IDLE,                     
    CP_INVOKE_NOT_IMPLEMENTED           
  } ErrorCode;

  struct CPDllSpec InvokeResult
  {
    explicit InvokeResult(ErrorCode mec);

    InvokeResult(ErrorCode mec, int arc);

    CPL_EXPLICIT_OPERATOR_BOOL() const;

    ErrorCode mec; 
    int arc;       
  };

  struct CPDllSpec InvokeRequest
  {
    InvokeRequest();

    CpTrigger trigger;
    std::string program;
    std::string label;
    int display;
    int timeout;
    bool toforeground;

    CpFunction<void, InvokeResult> onComplete;
    CpFunction<void, InvokeResult> onError;

    ErrorCode wait();
    ErrorCode cancel();
  };

  class CPDllSpec Barcode
  {
  public:
    Barcode();

    explicit Barcode(const vfiipc::JSObject &jsObj);

    virtual ~Barcode();

    std::string content;

    float xDimension;

    std::string errorCorrectionLevel;

    uint16_t columns;

    uint16_t rows;

    std::string type;
  };

  class CPDllSpec LoyaltyIdentifier
  {
  public:
    LoyaltyIdentifier();

    explicit LoyaltyIdentifier(const vfiipc::JSObject &jsObj);

    virtual ~LoyaltyIdentifier();

    std::string programId;

    std::string customerPhoneNumber;

    std::string customerName;

    std::string customerEmail;

    std::string loyaltyPointsBalance;

    std::string loyaltyPayload;

    std::string customerId;

    std::list<std::string> customerLoyaltyIds;
  };

  typedef enum
  {
    OFFER_UNDEFINED,            
    OFFER_MERCHANT_COUPON,      
    OFFER_MANUFACTURER_COUPON,  
    OFFER_OTHER_COUPON,         
    OFFER_PRODUCT_DISCOUNT,     
    OFFER_LOYALTY_CARD,         
    OFFER_TRANSACTION_DISCOUNT, 
  } OFFER_TYPE;

  // Class to be used with the following events:
  // CP_SYSTEM_RECEIVES_LOYALTY
  // CP_SYSTEM_REQUESTS_BASKET_ADJUSTMENT
  // CP_SYSTEM_RECEIVES_BASKET_ADJUSTMENT
  // CP_SYSTEM_NOTIFIES_BASKET_FINALIZED

  class CPDllSpec Offer
  {
  public:
    Offer();

    virtual ~Offer();

    std::string id;

    std::string programId;

    OFFER_TYPE type;

    std::string description;

    bool isRefundable;

    bool isCombinable;

    float percentDiscount;

    std::string amountDiscount;

    std::string merchantOfferCode;

    std::string productCode;

    std::string associatedProductCode;

    std::string specialProductCode;

    Barcode barcode;

    std::string getTypeStr();

    static OFFER_TYPE getTypeEnum(const std::string &strType);
  };

  class CPDllSpec Merchandise
  {
  public:
    Merchandise();

    virtual ~Merchandise();

    std::string lineItemId;

    // for now its string with decimal dot as per API
    std::string unitPrice;

    std::string extendedPrice;

    unsigned long quantity;

    std::string sku;

    std::string upc;

    std::string description;
  };


  class CPDllSpec Donation
  {
  public:
    Donation();

    virtual ~Donation();

    std::string amount;

    std::string description;
  };

  struct CPDllSpec AltPaymentData
  {
    std::string approvedAmount;

    std::string redeemedUnits;

    std::string authCode;

    std::string methodsOfPayment; //TODO: fix typo (task is for next major release to avoid compatibility issues)
  };

  struct TechAltPaymentData
  {
    bool result;                 //"Result": "OK",
    std::string techType;        //"Technology": "ISO_7816",
    std::string techHandle;      //"Tech_Handle": "AE675421",
    std::string approvedAmount;  //"Alt_Approved_Amount": "-8.19",
    std::string authCode;        //"Auth_Code": "694273",
    std::string methodOfPayment; //"Method_Of_Payment": "CABCHARGE",
    std::string redeemedUnits;   //"Redeemed_Units": "8.19"
  };

  struct CPDllSpec CustomerIdentification
  {
    std::list<std::string> ids;

    std::string par;

    std::list<std::string> tokens;
  };

  struct PaymentAmountAdjustment
  {
    std::string fxAmount;
    std::string fxCurrency;
    double      fxRate;
    double      fxInvertedRate;
    double      fxPercentageCommision;
    double      fxPercentageMargin;
    bool        fxAccepted;
    std::string fxMerchantId;
    std::string fxTerminalId;
  };

  CPDllSpec Api& getApi();

  CPDllSpec bool setEnvironmentDataProvider(EnvironmentDataProvider &envData);

  CPDllSpec void setBasket(const std::list<Merchandise>& merchandises,
               const std::list<Offer>& offers,
               const std::list<Donation>& donations);

  CPDllSpec bool getBasket(std::list<Merchandise>& merchandises,
               std::list<Offer>& offers,
               std::list<Donation>& donations);

  CPDllSpec bool setApi(Api &api);


  /********************** Getters for response data begin********************************/

  CPDllSpec std::string getProvision();

  CPDllSpec std::string getPublisher();

  CPDllSpec std::string getPublisherId();

  CPDllSpec std::string getQrCodeString();

  CPDllSpec std::list<Offer> getLoyaltyOffers();

  CPDllSpec std::list<LoyaltyIdentifier> getLoyaltyIdentifiers();

  CPDllSpec std::string getFxAmount();

  CPDllSpec std::string getFxCurrency();

  CPDllSpec AltPaymentData getAltPaymentData();

  CPDllSpec TechAltPaymentData getTechAltPaymentData();

  CPDllSpec CustomerIdentification getCustomerIdentification();

  CPDllSpec PaymentAmountAdjustment getPaymentAmountAdjustment();

  CPDllSpec bool init(const std::string &applicationId, TransactionDataProvider &trxData, Api &api, EnvironmentDataProvider &envData);

  CPDllSpec bool init(const std::string &applicationId, TransactionDataProvider &trxData, Api &api);

  CPDllSpec bool init(const std::string &applicationId, TransactionDataProvider &trxData, EnvironmentDataProvider &envData);

  CPDllSpec bool init(const std::string &applicationId, TransactionDataProvider &trxData);

  CPDllSpec bool init(const std::string &appid, ITransactionDataProvider &trxData, Api &api, EnvironmentDataProvider &envData);

  CPDllSpec bool init(const std::string &appid, ITransactionDataProvider &trxData, Api &api);

  CPDllSpec bool init(const std::string &appid, ITransactionDataProvider &trxData, EnvironmentDataProvider &envData);

  CPDllSpec bool init(const std::string &appid, ITransactionDataProvider &trxData);

  CPDllSpec void deinit();

  CPDllSpec ErrorCode invoke(InvokeRequest& request);

  CPDllSpec InvokeResult invoke(const CpTrigger trigger);

  CPDllSpec InvokeResult invoke(const CpTrigger trigger, bool sysToForground);

  CPDllSpec InvokeResult invokeByName(const CpTrigger trigger, const std::string &programName);

  CPDllSpec InvokeResult invokeByName(const CpTrigger trigger, const std::string &programName, bool sysToForground);

  CPDllSpec InvokeResult invokeFromDesktop(const CpTrigger trigger);

  CPDllSpec InvokeResult invokeFromDesktop(const CpTrigger trigger, bool sysToForground);

  CPDllSpec std::vector<std::string> getCpAppList(const CpTrigger trigger);

  CPDllSpec vfiipc::JSObject getCpPropList(const CpTrigger trigger);

  CPDllSpec vfiipc::JSObject getCpExtraProps(const std::string& appid);

} // namespace vficpl
#endif /* COMMERCE_H_ */
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

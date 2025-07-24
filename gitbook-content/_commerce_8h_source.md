---
hidden: true
title: Commerce.h
---

<a href="_commerce_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef COMMERCE_H_
 2 #define COMMERCE_H_
 3 
 4 /* specific includes */
 5 #include "Api.h"
 6 #include "CpTrigger.h"
 7 #include "CpFunctional.h"
 8 #include "EnvironmentDataProvider.h"
 9 #include "TransactionDataProvider.h"
 10 #include "cpdllspec.h"
 11 
 12 /* adk includes */
 13 #include "ipc/jsobject.h"
 14 
 15 /* common includes */
 16 #include <string>
 17 #include <list>
 18 #include <stdint.h>
 19 
 20 #if __cplusplus <= 199711L
 21 #define CPL_EXPLICIT_OPERATOR_BOOL() operator bool()
 22 #else
 23 #define CPL_EXPLICIT_OPERATOR_BOOL() explicit operator bool()
 24 #endif
 25 
 26 namespace vficpl
 27 {
 32  typedef enum
 33  {
 34  CP_INVOKE_SUCCESS,
 35  CP_INVOKE_FAILED,
 36  CP_INVOKE_TIMEOUT,
 37  CP_INVOKE_MANDATORY_PARAMS_MISSING,
 38  CP_INVOKE_SERVICE_SUCCESS,
 39  CP_INVOKE_NATIVE_SUCCESS,
 40  CP_INVOKE_CANCELED,
 41  CP_INVOKE_BUSY,
 42  CP_INVOKE_IDLE,
 43  CP_INVOKE_NOT_IMPLEMENTED
 44  } ErrorCode;
 45 
 50  struct CPDllSpec InvokeResult
 51  {
 56  explicit InvokeResult(ErrorCode mec);
 57 
 63  InvokeResult(ErrorCode mec, int arc);
 64 
 70  CPL_EXPLICIT_OPERATOR_BOOL() const;
 71 
 72  ErrorCode mec;
 73  int arc;
 74  };
 75 
 76  struct CPDllSpec InvokeRequest
 77  {
 78  InvokeRequest();
 79 
 80  CpTrigger trigger;
 81  std::string program;
 82  std::string label;
 83  int display;
 84  int timeout;
 85  bool toforeground;
 86 
 87  CpFunction<void, InvokeResult> onComplete;
 88  CpFunction<void, InvokeResult> onError;
 89 
 90  ErrorCode wait();
 91  ErrorCode cancel();
 92  };
 93 
 97  class CPDllSpec Barcode
 98  {
 99  public:
 101  Barcode();
 102 
 106  explicit Barcode(const vfiipc::JSObject &jsObj);
 107 
 109  virtual ~Barcode();
 110 
 112  std::string content;
 113 
 117  float xDimension;
 118 
 122  std::string errorCorrectionLevel;
 123 
 127  uint16_t columns;
 128 
 130  uint16_t rows;
 131 
 149  std::string type;
 150  };
 151 
 155  class CPDllSpec LoyaltyIdentifier
 156  {
 157  public:
 159  LoyaltyIdentifier();
 160 
 164  explicit LoyaltyIdentifier(const vfiipc::JSObject &jsObj);
 165 
 167  virtual ~LoyaltyIdentifier();
 168 
 170  std::string programId;
 171 
 173  std::string customerPhoneNumber;
 174 
 176  std::string customerName;
 177 
 179  std::string customerEmail;
 180 
 182  std::string loyaltyPointsBalance;
 183 
 189  std::string loyaltyPayload;
 190 
 192  std::string customerId;
 193 
 195  std::list<std::string> customerLoyaltyIds;
 196  };
 197 
 202  typedef enum
 203  {
 204  OFFER_UNDEFINED,
 205  OFFER_MERCHANT_COUPON,
 206  OFFER_MANUFACTURER_COUPON,
 207  OFFER_OTHER_COUPON,
 208  OFFER_PRODUCT_DISCOUNT,
 209  OFFER_LOYALTY_CARD,
 210  OFFER_TRANSACTION_DISCOUNT,
 211  } OFFER_TYPE;
 212 
 213  // Class to be used with the following events:
 214  // CP_SYSTEM_RECEIVES_LOYALTY
 215  // CP_SYSTEM_REQUESTS_BASKET_ADJUSTMENT
 216  // CP_SYSTEM_RECEIVES_BASKET_ADJUSTMENT
 217  // CP_SYSTEM_NOTIFIES_BASKET_FINALIZED
 218 
 222  class CPDllSpec Offer
 223  {
 224  public:
 226  Offer();
 227 
 229  virtual ~Offer();
 230 
 235  std::string id;
 236 
 238  std::string programId;
 239 
 244  OFFER_TYPE type;
 245 
 247  std::string description;
 248 
 250  bool isRefundable;
 251 
 255  bool isCombinable;
 256 
 261  float percentDiscount;
 262 
 268  std::string amountDiscount;
 269 
 271  std::string merchantOfferCode;
 272 
 278  std::string productCode;
 279 
 281  std::string associatedProductCode;
 282 
 287  std::string specialProductCode;
 288 
 290  Barcode barcode;
 291 
 293  std::string getTypeStr();
 294 
 299  static OFFER_TYPE getTypeEnum(const std::string &strType);
 300  };
 301 
 305  class CPDllSpec Merchandise
 306  {
 307  public:
 309  Merchandise();
 310 
 312  virtual ~Merchandise();
 313 
 315  std::string lineItemId;
 316 
 317  // for now its string with decimal dot as per API
 319  std::string unitPrice;
 320 
 324  std::string extendedPrice;
 325 
 327  unsigned long quantity;
 328 
 330  std::string sku;
 331 
 333  std::string upc;
 334 
 339  std::string description;
 340  };
 341 
 342 
 346  class CPDllSpec Donation
 347  {
 348  public:
 350  Donation();
 351 
 353  virtual ~Donation();
 354 
 358  std::string amount;
 359 
 365  std::string description;
 366  };
 367 
 371  struct CPDllSpec AltPaymentData
 372  {
 377  std::string approvedAmount;
 378 
 380  std::string redeemedUnits;
 381 
 385  std::string authCode;
 386 
 388  std::string methodsOfPayment; //TODO: fix typo (task is for next major release to avoid compatibility issues)
 389  };
 390 
 394  struct TechAltPaymentData
 395  {
 396  bool result; //"Result": "OK",
 397  std::string techType; //"Technology": "ISO_7816",
 398  std::string techHandle; //"Tech_Handle": "AE675421",
 399  std::string approvedAmount; //"Alt_Approved_Amount": "-8.19",
 400  std::string authCode; //"Auth_Code": "694273",
 401  std::string methodOfPayment; //"Method_Of_Payment": "CABCHARGE",
 402  std::string redeemedUnits; //"Redeemed_Units": "8.19"
 403  };
 404 
 408  struct CPDllSpec CustomerIdentification
 409  {
 412  std::list<std::string> ids;
 413 
 417  std::string par;
 418 
 421  std::list<std::string> tokens;
 422  };
 423 
 427  struct PaymentAmountAdjustment
 428  {
 429  std::string fxAmount;
 430  std::string fxCurrency;
 431  double fxRate;
 432  double fxInvertedRate;
 433  double fxPercentageCommision;
 434  double fxPercentageMargin;
 435  bool fxAccepted;
 436  std::string fxMerchantId;
 437  std::string fxTerminalId;
 438  };
 439 
 444  CPDllSpec Api& getApi();
 445 
 451  CPDllSpec bool setEnvironmentDataProvider(EnvironmentDataProvider &envData);
 452 
 460  CPDllSpec void setBasket(const std::list<Merchandise>& merchandises,
 461  const std::list<Offer>& offers,
 462  const std::list<Donation>& donations);
 463 
 472  CPDllSpec bool getBasket(std::list<Merchandise>& merchandises,
 473  std::list<Offer>& offers,
 474  std::list<Donation>& donations);
 475 
 481  CPDllSpec bool setApi(Api &api);
 482 
 483 
 484  /********************** Getters for response data begin********************************/
 485 
 490  CPDllSpec std::string getProvision();
 491 
 497  CPDllSpec std::string getPublisher();
 498 
 504  CPDllSpec std::string getPublisherId();
 505 
 510  CPDllSpec std::string getQrCodeString();
 511 
 516  CPDllSpec std::list<Offer> getLoyaltyOffers();
 517 
 522  CPDllSpec std::list<LoyaltyIdentifier> getLoyaltyIdentifiers();
 523 
 527  CPDllSpec std::string getFxAmount();
 528 
 532  CPDllSpec std::string getFxCurrency();
 533 
 538  CPDllSpec AltPaymentData getAltPaymentData();
 539 
 544  CPDllSpec TechAltPaymentData getTechAltPaymentData();
 545 
 550  CPDllSpec CustomerIdentification getCustomerIdentification();
 551 
 556  CPDllSpec PaymentAmountAdjustment getPaymentAmountAdjustment();
 557 
 567  CPDllSpec bool init(const std::string &applicationId, TransactionDataProvider &trxData, Api &api, EnvironmentDataProvider &envData);
 568 
 577  CPDllSpec bool init(const std::string &applicationId, TransactionDataProvider &trxData, Api &api);
 578 
 587  CPDllSpec bool init(const std::string &applicationId, TransactionDataProvider &trxData, EnvironmentDataProvider &envData);
 588 
 596  CPDllSpec bool init(const std::string &applicationId, TransactionDataProvider &trxData);
 597 
 607  CPDllSpec bool init(const std::string &appid, ITransactionDataProvider &trxData, Api &api, EnvironmentDataProvider &envData);
 608 
 617  CPDllSpec bool init(const std::string &appid, ITransactionDataProvider &trxData, Api &api);
 618 
 627  CPDllSpec bool init(const std::string &appid, ITransactionDataProvider &trxData, EnvironmentDataProvider &envData);
 628 
 636  CPDllSpec bool init(const std::string &appid, ITransactionDataProvider &trxData);
 637 
 642  CPDllSpec void deinit();
 643 
 644  CPDllSpec ErrorCode invoke(InvokeRequest& request);
 645 
 652  CPDllSpec InvokeResult invoke(const CpTrigger trigger);
 653 
 661  CPDllSpec InvokeResult invoke(const CpTrigger trigger, bool sysToForground);
 662 
 670  CPDllSpec InvokeResult invokeByName(const CpTrigger trigger, const std::string &programName);
 671 
 680  CPDllSpec InvokeResult invokeByName(const CpTrigger trigger, const std::string &programName, bool sysToForground);
 681 
 689  CPDllSpec InvokeResult invokeFromDesktop(const CpTrigger trigger);
 690 
 699  CPDllSpec InvokeResult invokeFromDesktop(const CpTrigger trigger, bool sysToForground);
 700 
 704  CPDllSpec std::vector<std::string> getCpAppList(const CpTrigger trigger);
 705 
 709  CPDllSpec vfiipc::JSObject getCpPropList(const CpTrigger trigger);
 710 
 715  CPDllSpec vfiipc::JSObject getCpExtraProps(const std::string& appid);
 716 
 717 } // namespace vficpl
 718 #endif /* COMMERCE_H_ */
```

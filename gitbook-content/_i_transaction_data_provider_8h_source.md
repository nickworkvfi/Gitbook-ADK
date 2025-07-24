---
hidden: true
title: ITransactionDataProvider.h
---

<a href="_i_transaction_data_provider_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef ITRANSACTIONDATAPROVIDER_H_
 2 #define ITRANSACTIONDATAPROVIDER_H_
 3 
 4 /* specific includes */
 5 #include "CpTrigger.h"
 6 #include "cpdllspec.h"
 7 /* common includes */
 8 #include <string>
 9 #include <vector>
 10 
 11 namespace vficpl
 12 {
 16  typedef enum
 17  {
 18  ORIGINATOR_MIN_VALUE = -1,
 19  ORIGINATOR_UNDEFINED = 0,
 20  ORIGINATOR_PAYMENT_APPLICATION,
 21  ORIGINATOR_CP_APPLICATION
 22  } TransactionOriginator;
 23 
 27  typedef enum
 28  {
 29  TRX_TYPE_MIN_VALUE = -1,
 30  TRX_TYPE_UNDEFINED = 0,
 31  TRX_TYPE_PAYMENT,
 32  TRX_TYPE_DEFERRED_PAYMENT,
 33  TRX_TYPE_DEFERRED_PAYMENT_COMPLETION,
 34  TRX_TYPE_REFUND,
 35  TRX_TYPE_VOID,
 36  TRX_TYPE_PRE_AUTHORISATION,
 37  TRX_TYPE_PRE_AUTHORISATION_COMPLETION,
 38  TRX_TYPE_CASH_ADVANCE,
 39  TRX_TYPE_CASHBACK,
 40  TRX_TYPE_CASH_PAYMENT,
 41  TRX_TYPE_REVERSAL
 42  } TransactionType;
 43 
 47  typedef enum
 48  {
 49  CARD_TYPE_MIN_VALUE = -1,
 50  CARD_TYPE_UNDEFINED = 0,
 51  CARD_TYPE_MAG_STRIPE,
 52  CARD_TYPE_CHIP,
 53  CARD_TYPE_CTLS_CARD,
 54  CARD_TYPE_CTLS_PHONE,
 55  CARD_TYPE_MANUAL,
 56  } CardType;
 57 
 61  typedef enum
 62  {
 63  AUTH_ENTITY_MIN_VALUE = -1,
 64  AUTH_ENTITY_UNDEFINED = 0,
 65  AUTH_ENTITY_MERCHANT,
 66  AUTH_ENTITY_ACQUIRER,
 67  AUTH_ENTITY_CARD_SCHEME,
 68  AUTH_ENTITY_ISSUER
 69  } AuthEntity;
 70 
 74  typedef enum
 75  {
 76  AUTH_RESULT_MIN_VALUE = -1,
 77  AUTH_RESULT_UNDEFINED = 0,
 78  AUTH_RESULT_AUTHORIZED_ONLINE,
 79  AUTH_RESULT_AUTHORIZED_OFFLINE,
 80  AUTH_RESULT_REJECTED_ONLINE,
 81  AUTH_RESULT_CASH_VERIFIED,
 82  AUTH_RESULT_ABORTED
 83  } AuthResult;
 84 
 88  typedef enum
 89  {
 90  HOLDER_AUTH_MIN_VALUE = -1,
 91  HOLDER_AUTH_UNDEFINED = 0,
 92  HOLDER_AUTH_PIN,
 93  HOLDER_AUTH_SIGNATURE,
 94  HOLDER_AUTH_ID,
 95  HOLDER_AUTH_OTHER,
 96  HOLDER_AUTH_NONE
 97  } HolderAuth;
 98 
 102  typedef enum
 103  {
 104  TRX_RESULT_MIN_VALUE = -1,
 105  TRX_RESULT_UNDEFINED = 0,
 106  TRX_RESULT_SUCCESS,
 107  TRX_RESULT_CANCELLED,
 108  } TransactionResult;
 109 
 113  class CPDllSpec ITransactionDataProvider
 114  {
 115  public:
 117  virtual ~ITransactionDataProvider() {};
 118 
 120  virtual TransactionOriginator getTransactionOriginator() = 0;
 121 
 123  virtual std::string getInvoice() = 0;
 124 
 126  virtual std::string getStoreNumber() = 0;
 127 
 131  virtual std::string getLane() = 0;
 132 
 134  virtual std::string getCashierId() = 0;
 135 
 139  virtual std::string getTransId() = 0;
 140 
 142  virtual TransactionType getTransactionType() = 0;
 143 
 145  virtual std::string getTransAmount() = 0;
 146 
 149  virtual std::string getTransCurrency() = 0;
 150 
 154  virtual std::string getPanHandle() = 0;
 155 
 157  virtual std::string getPanFirst6() = 0;
 158 
 160  virtual std::string getPanLast4() = 0;
 161 
 163  virtual CardType getCardType() = 0;
 164 
 168  virtual std::string getAuthCode() = 0;
 169 
 171  virtual AuthEntity getAuthEntity() = 0;
 172 
 174  virtual AuthResult getAuthResult() = 0;
 175 
 179  virtual std::string getAuthRespTxt() = 0;
 180 
 182  virtual HolderAuth getHolderAuth() = 0;
 183 
 185  virtual std::string getAcquirerMerchantId() = 0;
 186 
 188  virtual std::string getAcquirerTerminalId() = 0;
 189 
 191  virtual std::string getAcquirerId() = 0;
 192 
 194  virtual std::string getGatewayMerchantId() = 0;
 195 
 197  virtual std::string getGatewayTerminalId() = 0;
 198 
 200  virtual std::string getLoyaltyId() = 0;
 201 
 203  virtual TransactionResult getTransactionResult() = 0;
 204 
 205  // Final_Amount = Initial_Amount + Adjusted_Amount + Gratuity_Amount - Already_Approved_Amount
 207  virtual std::string getInitialAmount() = 0;
 208 
 212  virtual std::string getAdjustedAmount() = 0;
 213 
 215  //virtual double getAdjustmentPercentage() = 0;
 216 
 218  //virtual std::string getAdjustmentDescription() = 0;
 219 
 221  virtual std::string getGratuityAmount() = 0;
 222 
 224  virtual std::string getApprovedAmount() = 0;
 225 
 227  virtual std::string getCardCurrency() = 0;
 228 
 230  virtual std::string getCardCountry() = 0;
 231 
 234  virtual std::vector<std::string> getPrefLanguages() = 0;
 235 
 239  virtual bool getCashPayment() = 0;
 240 
 242  virtual std::vector<std::string> getPaymentMethods() = 0;
 243 
 244  /* setters */
 245 
 249  virtual void setTransAmount(const std::string& amount) = 0;
 250 
 254  virtual void setAdjustedAmount(const std::string& amount) = 0;
 255 
 259  //virtual void setAdjustmentPercentage(double pct) = 0;
 260 
 264  //virtual void setAdjustmentDescription(const std::string& text) = 0;
 265 
 267  virtual std::string getReceiptType() = 0;
 268 
 270  virtual std::string getReceipt() = 0;
 271 
 273  virtual bool requiresSignature() = 0;
 274 
 276  virtual bool hasSignatureImage() = 0;
 277 
 283  virtual void initTrigger(const CpTrigger& trigger) = 0;
 284  };
 285 } // namespace vficpl
 286 
 287 #endif
```

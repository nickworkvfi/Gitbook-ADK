---
title: vficpl

---

# vficpl



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vficpl::AltPaymentData](structvficpl_1_1_alt_payment_data.md)** <br>Represents Alt Payment Data object on CP-Payment communication.  |
| class | **[vficpl::Api](classvficpl_1_1_api.md)**  |
| class | **[vficpl::Barcode](classvficpl_1_1_barcode.md)** <br>Represents [Barcode]() object on CP-Payment communication.  |
| struct | **[vficpl::CpBaseFnImp](structvficpl_1_1_cp_base_fn_imp.md)**  |
| struct | **[vficpl::CpBaseFnImp< R >](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md)**  |
| struct | **[vficpl::CpBaseFnImp< R, A1 >](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_01_4.md)**  |
| struct | **[vficpl::CpBaseFnImp< R, A1, A2 >](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_00_01_a2_01_4.md)**  |
| struct | **[vficpl::CpFreeFnImp](structvficpl_1_1_cp_free_fn_imp.md)**  |
| struct | **[vficpl::CpFreeFnImp< F, R >](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_01_4.md)**  |
| struct | **[vficpl::CpFreeFnImp< F, R, A1 >](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_00_01_a1_01_4.md)**  |
| struct | **[vficpl::CpFreeFnImp< F, R, A1, A2 >](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_00_01_a1_00_01_a2_01_4.md)**  |
| class | **[vficpl::CpFunction](classvficpl_1_1_cp_function.md)**  |
| class | **[vficpl::CpFunction< R >](classvficpl_1_1_cp_function_3_01_r_01_4.md)**  |
| class | **[vficpl::CpFunction< R, A1 >](classvficpl_1_1_cp_function_3_01_r_00_01_a1_01_4.md)**  |
| class | **[vficpl::CpFunction< R, A1, A2 >](classvficpl_1_1_cp_function_3_01_r_00_01_a1_00_01_a2_01_4.md)**  |
| struct | **[vficpl::CpMemberFnImp](structvficpl_1_1_cp_member_fn_imp.md)**  |
| struct | **[vficpl::CpMemberFnImp< M, T, R >](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_01_4.md)**  |
| struct | **[vficpl::CpMemberFnImp< M, T, R, A1 >](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_00_01_a1_01_4.md)**  |
| struct | **[vficpl::CpMemberFnImp< M, T, R, A1, A2 >](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_00_01_a1_00_01_a2_01_4.md)**  |
| struct | **[vficpl::CustomerIdentification](structvficpl_1_1_customer_identification.md)** <br>Customer identification to be used equivalent to a card pre-dip / pre-swipe.  |
| class | **[vficpl::Donation](classvficpl_1_1_donation.md)** <br>Represents the [Donation]() object on CP-Payment communication.  |
| class | **[vficpl::EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md)**  |
| struct | **[vficpl::InvokeRequest](structvficpl_1_1_invoke_request.md)**  |
| struct | **[vficpl::InvokeResult](structvficpl_1_1_invoke_result.md)** <br>Trigger invocation result.  |
| interface | **[vficpl::ITransactionDataProvider](classvficpl_1_1_i_transaction_data_provider.md)**  |
| class | **[vficpl::LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md)** <br>Represents [LoyaltyIdentifier]() object on CP-Payment communication.  |
| class | **[vficpl::Merchandise](classvficpl_1_1_merchandise.md)** <br>Represents the [Merchandise]() object on CP-Payment communication.  |
| class | **[vficpl::Offer](classvficpl_1_1_offer.md)** <br>Represents the [Offer]() object on CP-Payment communication.  |
| struct | **[vficpl::PaymentAmountAdjustment](structvficpl_1_1_payment_amount_adjustment.md)** <br>Payment amount adjustment Fx data.  |
| struct | **[vficpl::TechAltPaymentData](structvficpl_1_1_tech_alt_payment_data.md)** <br>Represents Alt Payment trigger response.  |
| struct | **[vficpl::TechnologyData](structvficpl_1_1_technology_data.md)**  |
| struct | **[vficpl::TransactionData](structvficpl_1_1_transaction_data.md)**  |
| interface | **[vficpl::TransactionDataProvider](classvficpl_1_1_transaction_data_provider.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ApiError](namespacevficpl.md#enum-apierror)** { API_OK, API_FAIL, API_SERVICE_TIMEOUT, API_INVALID_PARAMETERS, API_UNSUPPORTED_REQUEST, API_ENCRYPTION_UNAVAILABLE, API_NO_PAPER} |
| enum| **[ErrorCode](namespacevficpl.md#enum-errorcode)** { CP_INVOKE_SUCCESS, CP_INVOKE_FAILED, CP_INVOKE_TIMEOUT, CP_INVOKE_MANDATORY_PARAMS_MISSING, CP_INVOKE_SERVICE_SUCCESS, CP_INVOKE_NATIVE_SUCCESS, CP_INVOKE_CANCELED, CP_INVOKE_BUSY, CP_INVOKE_IDLE, CP_INVOKE_NOT_IMPLEMENTED}<br>Represents possible error codes of invoke call.  |
| enum| **[OFFER_TYPE](namespacevficpl.md#enum-offer-type)** { OFFER_UNDEFINED, OFFER_MERCHANT_COUPON, OFFER_MANUFACTURER_COUPON, OFFER_OTHER_COUPON, OFFER_PRODUCT_DISCOUNT, OFFER_LOYALTY_CARD, OFFER_TRANSACTION_DISCOUNT}<br>Represents the [Offer]() object on CP-Payment communication.  |
| enum| **[CpTrigger](namespacevficpl.md#enum-cptrigger)** { NOTIF_IDLE = 0, NOTIF_MANUAL_LAUNCH = 1, REQUEST_CUSTOMER_IDENTIFICATION = 16, NOTIF_TRX_STARTED = 2, REQUEST_BASKET_ADJUSTMENT = 3, NOTIF_BASKET_FINALIZED = 4, REQUEST_LOYALTY = 5, REQUEST_AMOUNT_ADJUSTMENT = 6, NOTIF_AMOUNT_FINALIZED = 7, REQUEST_ALT_PAYMENT = 8, REQUEST_TECH_ALT_PAYMENT = 17, NOTIF_CARD_PRESENTED = 9, NOTIF_CARD_BIN_RECEIVED = 10, REQUEST_PAYMENT_AMOUNT_ADJUSTMENT = 11, NOTIF_AUTHORIZATION_COMPLETED = 12, NOTIF_PAYMENT_COMPLETED = 13, REQUEST_RECEIPT_MANAGEMENT = 14, NOTIF_TRX_ENDED = 15}<br>CpTrigger - contains all triggers used by commerce platform.  |
| enum| **[TransactionOriginator](namespacevficpl.md#enum-transactionoriginator)** { ORIGINATOR_MIN_VALUE = -1, ORIGINATOR_UNDEFINED = 0, ORIGINATOR_PAYMENT_APPLICATION, ORIGINATOR_CP_APPLICATION} |
| enum| **[TransactionType](namespacevficpl.md#enum-transactiontype)** { TRX_TYPE_MIN_VALUE = -1, TRX_TYPE_UNDEFINED = 0, TRX_TYPE_PAYMENT, TRX_TYPE_DEFERRED_PAYMENT, TRX_TYPE_DEFERRED_PAYMENT_COMPLETION, TRX_TYPE_REFUND, TRX_TYPE_VOID, TRX_TYPE_PRE_AUTHORISATION, TRX_TYPE_PRE_AUTHORISATION_COMPLETION, TRX_TYPE_CASH_ADVANCE, TRX_TYPE_CASHBACK, TRX_TYPE_CASH_PAYMENT, TRX_TYPE_REVERSAL} |
| enum| **[CardType](namespacevficpl.md#enum-cardtype)** { CARD_TYPE_MIN_VALUE = -1, CARD_TYPE_UNDEFINED = 0, CARD_TYPE_MAG_STRIPE, CARD_TYPE_CHIP, CARD_TYPE_CTLS_CARD, CARD_TYPE_CTLS_PHONE, CARD_TYPE_MANUAL} |
| enum| **[AuthEntity](namespacevficpl.md#enum-authentity)** { AUTH_ENTITY_MIN_VALUE = -1, AUTH_ENTITY_UNDEFINED = 0, AUTH_ENTITY_MERCHANT, AUTH_ENTITY_ACQUIRER, AUTH_ENTITY_CARD_SCHEME, AUTH_ENTITY_ISSUER} |
| enum| **[AuthResult](namespacevficpl.md#enum-authresult)** { AUTH_RESULT_MIN_VALUE = -1, AUTH_RESULT_UNDEFINED = 0, AUTH_RESULT_AUTHORIZED_ONLINE, AUTH_RESULT_AUTHORIZED_OFFLINE, AUTH_RESULT_REJECTED_ONLINE, AUTH_RESULT_CASH_VERIFIED, AUTH_RESULT_ABORTED} |
| enum| **[HolderAuth](namespacevficpl.md#enum-holderauth)** { HOLDER_AUTH_MIN_VALUE = -1, HOLDER_AUTH_UNDEFINED = 0, HOLDER_AUTH_PIN, HOLDER_AUTH_SIGNATURE, HOLDER_AUTH_ID, HOLDER_AUTH_OTHER, HOLDER_AUTH_NONE} |
| enum| **[TransactionResult](namespacevficpl.md#enum-transactionresult)** { TRX_RESULT_MIN_VALUE = -1, TRX_RESULT_UNDEFINED = 0, TRX_RESULT_SUCCESS, TRX_RESULT_CANCELLED} |
| enum| **[TechnologyType](namespacevficpl.md#enum-technologytype)** { TECH_TYPE_MIN_VALUE = -1, TECH_TYPE_UNDEFINED = 0, TECH_TYPE_MIFARE_CLASSIC, TECH_TYPE_MIFARE_ULTRALIGHT, TECH_TYPE_ISO7816} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[Api](classvficpl_1_1_api.md) & | **[getApi](namespacevficpl.md#function-getapi)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[setEnvironmentDataProvider](namespacevficpl.md#function-setenvironmentdataprovider)**([EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md) & envData) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) void | **[setBasket](namespacevficpl.md#function-setbasket)**(const std::list< [Merchandise](classvficpl_1_1_merchandise.md) > & merchandises, const std::list< [Offer](classvficpl_1_1_offer.md) > & offers, const std::list< [Donation](classvficpl_1_1_donation.md) > & donations) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[getBasket](namespacevficpl.md#function-getbasket)**(std::list< [Merchandise](classvficpl_1_1_merchandise.md) > & merchandises, std::list< [Offer](classvficpl_1_1_offer.md) > & offers, std::list< [Donation](classvficpl_1_1_donation.md) > & donations) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[setApi](namespacevficpl.md#function-setapi)**([Api](classvficpl_1_1_api.md) & api) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) std::string | **[getProvision](namespacevficpl.md#function-getprovision)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) std::string | **[getPublisher](namespacevficpl.md#function-getpublisher)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) std::string | **[getPublisherId](namespacevficpl.md#function-getpublisherid)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) std::string | **[getQrCodeString](namespacevficpl.md#function-getqrcodestring)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) std::list< [Offer](classvficpl_1_1_offer.md) > | **[getLoyaltyOffers](namespacevficpl.md#function-getloyaltyoffers)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) std::list< [LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md) > | **[getLoyaltyIdentifiers](namespacevficpl.md#function-getloyaltyidentifiers)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) std::string | **[getFxAmount](namespacevficpl.md#function-getfxamount)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) std::string | **[getFxCurrency](namespacevficpl.md#function-getfxcurrency)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[AltPaymentData](structvficpl_1_1_alt_payment_data.md) | **[getAltPaymentData](namespacevficpl.md#function-getaltpaymentdata)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[TechAltPaymentData](structvficpl_1_1_tech_alt_payment_data.md) | **[getTechAltPaymentData](namespacevficpl.md#function-gettechaltpaymentdata)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[CustomerIdentification](structvficpl_1_1_customer_identification.md) | **[getCustomerIdentification](namespacevficpl.md#function-getcustomeridentification)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[PaymentAmountAdjustment](structvficpl_1_1_payment_amount_adjustment.md) | **[getPaymentAmountAdjustment](namespacevficpl.md#function-getpaymentamountadjustment)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[init](namespacevficpl.md#function-init)**(const std::string & applicationId, [TransactionDataProvider](classvficpl_1_1_transaction_data_provider.md) & trxData, [Api](classvficpl_1_1_api.md) & api, [EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md) & envData) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[init](namespacevficpl.md#function-init)**(const std::string & applicationId, [TransactionDataProvider](classvficpl_1_1_transaction_data_provider.md) & trxData, [Api](classvficpl_1_1_api.md) & api) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[init](namespacevficpl.md#function-init)**(const std::string & applicationId, [TransactionDataProvider](classvficpl_1_1_transaction_data_provider.md) & trxData, [EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md) & envData) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[init](namespacevficpl.md#function-init)**(const std::string & applicationId, [TransactionDataProvider](classvficpl_1_1_transaction_data_provider.md) & trxData) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[init](namespacevficpl.md#function-init)**(const std::string & appid, [ITransactionDataProvider](classvficpl_1_1_i_transaction_data_provider.md) & trxData, [Api](classvficpl_1_1_api.md) & api, [EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md) & envData) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[init](namespacevficpl.md#function-init)**(const std::string & appid, [ITransactionDataProvider](classvficpl_1_1_i_transaction_data_provider.md) & trxData, [Api](classvficpl_1_1_api.md) & api) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[init](namespacevficpl.md#function-init)**(const std::string & appid, [ITransactionDataProvider](classvficpl_1_1_i_transaction_data_provider.md) & trxData, [EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md) & envData) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) bool | **[init](namespacevficpl.md#function-init)**(const std::string & appid, [ITransactionDataProvider](classvficpl_1_1_i_transaction_data_provider.md) & trxData) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) void | **[deinit](namespacevficpl.md#function-deinit)**() |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[ErrorCode](namespacevficpl.md#enum-errorcode) | **[invoke](namespacevficpl.md#function-invoke)**([InvokeRequest](structvficpl_1_1_invoke_request.md) & request) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[InvokeResult](structvficpl_1_1_invoke_result.md) | **[invoke](namespacevficpl.md#function-invoke)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) trigger) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[InvokeResult](structvficpl_1_1_invoke_result.md) | **[invoke](namespacevficpl.md#function-invoke)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) trigger, bool sysToForground) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[InvokeResult](structvficpl_1_1_invoke_result.md) | **[invokeByName](namespacevficpl.md#function-invokebyname)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) trigger, const std::string & programName) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[InvokeResult](structvficpl_1_1_invoke_result.md) | **[invokeByName](namespacevficpl.md#function-invokebyname)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) trigger, const std::string & programName, bool sysToForground) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[InvokeResult](structvficpl_1_1_invoke_result.md) | **[invokeFromDesktop](namespacevficpl.md#function-invokefromdesktop)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) trigger) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[InvokeResult](structvficpl_1_1_invoke_result.md) | **[invokeFromDesktop](namespacevficpl.md#function-invokefromdesktop)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) trigger, bool sysToForground) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec) std::vector< std::string > | **[getCpAppList](namespacevficpl.md#function-getcpapplist)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) trigger) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) | **[getCpPropList](namespacevficpl.md#function-getcpproplist)**(const [CpTrigger](namespacevficpl.md#enum-cptrigger) trigger) |
| [CPDllSpec](cpdllspec_8h.md#define-cpdllspec)[vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) | **[getCpExtraProps](namespacevficpl.md#function-getcpextraprops)**(const std::string & appid) |

## Types Documentation

### enum ApiError

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| API_OK | |   |
| API_FAIL | |   |
| API_SERVICE_TIMEOUT | |   |
| API_INVALID_PARAMETERS | |   |
| API_UNSUPPORTED_REQUEST | |   |
| API_ENCRYPTION_UNAVAILABLE | |   |
| API_NO_PAPER | |   |




### enum ErrorCode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CP_INVOKE_SUCCESS | | invoke was successful   |
| CP_INVOKE_FAILED | | result of invoke is failed   |
| CP_INVOKE_TIMEOUT | | invoke is timed out   |
| CP_INVOKE_MANDATORY_PARAMS_MISSING | | invoke rejected because mandatory parameters are missing   |
| CP_INVOKE_SERVICE_SUCCESS | | invoke of app type service successful   |
| CP_INVOKE_NATIVE_SUCCESS | | invoke of app type native successful   |
| CP_INVOKE_CANCELED | | invoke of app canceled by user   |
| CP_INVOKE_BUSY | | trying to invoke a trigger when a previous request is in progress   |
| CP_INVOKE_IDLE | | threre is no any trigger invocation in progress when trying to cancel   |
| CP_INVOKE_NOT_IMPLEMENTED | | functionality not implemented   |



Represents possible error codes of invoke call. 

### enum OFFER_TYPE

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OFFER_UNDEFINED | | offer is undefined   |
| OFFER_MERCHANT_COUPON | | offer consists of merchant coupon   |
| OFFER_MANUFACTURER_COUPON | | offer consists of manufacturer coupon   |
| OFFER_OTHER_COUPON | | offer consists of special coupon   |
| OFFER_PRODUCT_DISCOUNT | | offer consists of product discount coupon   |
| OFFER_LOYALTY_CARD | | offer consists of loyalty card   |
| OFFER_TRANSACTION_DISCOUNT | | offer consists of transaction discount   |



Represents the [Offer]() object on CP-Payment communication. 

### enum CpTrigger

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NOTIF_IDLE | 0|  CP_SYSTEM_NOTIFIES_IDLE_ENTERED - Fired by Payment Application when entering idle state. This happens once when application first starts up and each time after a transaction completes.

This allows the Commerce Applications to control the screen and devices in-between transactions.  |
| NOTIF_MANUAL_LAUNCH | 1|  CP_SYSTEM_NOTIFIES_MANUAL_LAUNCH_SELECTED - Fired by Payment application when one of the service label has been selected.  |
| REQUEST_CUSTOMER_IDENTIFICATION | 16|  CP_SYSTEM_REQUESTS_CUSTOMER_IDENTIFICATION - Customer identification to be used equivalent to a card "pre-dip / pre-swipe". This is used to enable loyalty programs at the ECR. Some alternative payment methods support loyalty programs, which are usually linked to using the same provider for alternative payment.  |
| NOTIF_TRX_STARTED | 2|  CP_SYSTEM_NOTIFIES_TRANSACTION_STARTED - Fired by System when exiting the idle screen and ready to initiate a transaction. Exiting idle from a menu like in other services will not fire this event.  |
| REQUEST_BASKET_ADJUSTMENT | 3|  CP_SYSTEM_REQUESTS_BASKET_ADJUSTMENT - The pre-adjusted basket may be responded to by the commerce application by explicit offer format against the basket line details. This would be the case when the commerce application is basket aware and can quickly adjudicate the basket.  |
| NOTIF_BASKET_FINALIZED | 4|  CP_SYSTEM_NOTIFIES_BASKET_FINALIZED - No response is needed to final basket, as attempts to adjudicate the basket are now be closed.

_Note:_ For Payment applications allowing alterations to the basket post tender, it should be noted that a pre-adjusted basket may be received after final to repeat the process if new information is obtained during tendering. For example, basket may be adjusted as a result of trigger CP_SYSTEM_REQUESTS_LOYALTY.  |
| REQUEST_LOYALTY | 5|  CP_SYSTEM_REQUESTS_LOYALTY - Loyalty data returned from the launched commerce application. Loyalty response may or may not include offers data.  |
| REQUEST_AMOUNT_ADJUSTMENT | 6|  CP_SYSTEM_REQUESTS_AMOUNT_ADJUSTMENT - Fired by Payment Application when amount is received from POS or entered directly. This amount may have been altered by a discount. Permits the commerce application to adjust the final either by a amount or by an percentage.

Example usage: Pennies application which rounds up the final amount. For example an amount of $8.19 is rounded up to $9.00  |
| NOTIF_AMOUNT_FINALIZED | 7|  CP_SYSTEM_NOTIFIES_AMOUNT_FINALIZED - Fired by Payment Application when amount was received from POS or entered directly. This informs the commerce applications on the final amount and intermediate amounts, if any.  |
| REQUEST_ALT_PAYMENT | 8|  CP_SYSTEM_REQUESTS_ALT_PAYMENT - Fired by Payment Application when one of the alternate payment label has been selected by cardholder.  |
| REQUEST_TECH_ALT_PAYMENT | 17|  CP_SYSTEM_REQUESTS_TECH_ALT_PAYMENT - Fired by Payment application when:

* An NFC Tag is presented, and is identified as a supported Technology (e.g. MifareClassic, MifareUltralight, FeliCa)
* An Iso7816 card has been presented and successfully responds to application selection using a registered AID  |
| NOTIF_CARD_PRESENTED | 9|  CP_SYSTEM_NOTIFIES_CARD_PRESENTED - Fired by Payment application when:

* Magstripe is swiped
* Chip card has been inserted and read for PAN
* Contacless card/phone has been presented

Access to the card data is on-demand.  |
| NOTIF_CARD_BIN_RECEIVED | 10|  CP_SYSTEM_NOTIFIES_CARD_BIN_RECEIVED - Fired by Payment application when

* Magstripe is swiped
* Chip card has been inserted and read for PAN
* Contacless card/phone has been presented

Access to the card data is on-demand.

This event has card BIN information in the payload  |
| REQUEST_PAYMENT_AMOUNT_ADJUSTMENT | 11|  CP_SYSTEM_REQUESTS_PAYMENT_AMOUNT_ADJUSTMENT - Fired by Payment application with the same conditions as CP_SYSTEM_REQUESTS_AMOUNT_ADJUSTMENT.

This gives the opportunity for Commerce Applications to adjust the amount _only_ for only certain card types or provide Dynamic Currency Conversion (DCC) capability.  |
| NOTIF_AUTHORIZATION_COMPLETED | 12|  CP_SYSTEM_NOTIFIES_AUTHORIZATION_COMPLETED - Fired by Payment Application when payment authorization is complete.  |
| NOTIF_PAYMENT_COMPLETED | 13|  CP_SYSTEM_NOTIFIES_PAYMENT_COMPLETED - Fired by Payment Application when payment transaction is completed. This is important because we may be in the payment section for several cycles with split tenders.  |
| REQUEST_RECEIPT_MANAGEMENT | 14|  CP_SYSTEM_REQUESTS_RECEIPT_MANAGEMENT - Fired by Payment Application when a receipt is available to be processed. This allows a CP application to provide electronic receipt management services. This may be triggered multiple times during a transaction, but only once per receipt type. If signature is required for customer verification during a transaction, then this will be triggered by the payment application when verification is required, with signature indicators set. If the request does not contain a signature image, but requires a signature - and the response Provision is NONE or OFFER_DECLINED then the payment application will have to print the receipt (internal printer or POS printer) to allow verification to be performed as usual. A CP Application may choose to use the CP_APP_REQUESTS_PRINT API call during this trigger to have the payment application produce a physical receipt.  |
| NOTIF_TRX_ENDED | 15|  CP_SYSTEM_NOTIFIES_TRANSACTION_ENDED - Fired by Payment Application when transaction is complete.  |



CpTrigger - contains all triggers used by commerce platform. 

### enum TransactionOriginator

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ORIGINATOR_MIN_VALUE | -1|  min value of enumeration  |
| ORIGINATOR_UNDEFINED | 0|  originator is undefined  |
| ORIGINATOR_PAYMENT_APPLICATION | |  transaction started by payment application.  |
| ORIGINATOR_CP_APPLICATION | |  transaction started by cp application  |




Indicates which entity was responsible for starting the transaction. 


### enum TransactionType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TRX_TYPE_MIN_VALUE | -1|  min value of enumeration  |
| TRX_TYPE_UNDEFINED | 0|  type is undefined  |
| TRX_TYPE_PAYMENT | |  type of transaction is payment  |
| TRX_TYPE_DEFERRED_PAYMENT | |  type of transaction is deferred payment  |
| TRX_TYPE_DEFERRED_PAYMENT_COMPLETION | |  type of transaction is deferred payment completion  |
| TRX_TYPE_REFUND | |  type of transaction is refund  |
| TRX_TYPE_VOID | |  type of transaction is void  |
| TRX_TYPE_PRE_AUTHORISATION | |  type of transaction is pre authorisation  |
| TRX_TYPE_PRE_AUTHORISATION_COMPLETION | |  type of transaction is pre authorisation completion  |
| TRX_TYPE_CASH_ADVANCE | |  type of transaction is cash advance  |
| TRX_TYPE_CASHBACK | |  type of transaction is cashback  |
| TRX_TYPE_CASH_PAYMENT | |  type of transaction is cash payment  |
| TRX_TYPE_REVERSAL | |  type of transaction is reversal  |




Type of transaction executed by the Payment Application 


### enum CardType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CARD_TYPE_MIN_VALUE | -1|  min value of enumeration  |
| CARD_TYPE_UNDEFINED | 0|  card type is undefined  |
| CARD_TYPE_MAG_STRIPE | |  used card type is mag-stripe  |
| CARD_TYPE_CHIP | |  used card type is chip  |
| CARD_TYPE_CTLS_CARD | |  used card type is ctls card  |
| CARD_TYPE_CTLS_PHONE | |  used card type is ctls phone  |
| CARD_TYPE_MANUAL | |  used card type is manual  |




Specifies card type used to obtain card data. 


### enum AuthEntity

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| AUTH_ENTITY_MIN_VALUE | -1|  min value of enumeration  |
| AUTH_ENTITY_UNDEFINED | 0|  entity is undefined  |
| AUTH_ENTITY_MERCHANT | |  merchant has authorized the transaction  |
| AUTH_ENTITY_ACQUIRER | |  acquirer has authorized the transaction  |
| AUTH_ENTITY_CARD_SCHEME | |  card scheme used for authorization of transaction  |
| AUTH_ENTITY_ISSUER | |  issuer has authorized the transaction  |




Entity that has authorized the transaction. 


### enum AuthResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| AUTH_RESULT_MIN_VALUE | -1|  min value of enumeration  |
| AUTH_RESULT_UNDEFINED | 0|  result is undefined  |
| AUTH_RESULT_AUTHORIZED_ONLINE | |  online authorized  |
| AUTH_RESULT_AUTHORIZED_OFFLINE | |  offline authorized  |
| AUTH_RESULT_REJECTED_ONLINE | |  online rejected  |
| AUTH_RESULT_CASH_VERIFIED | |  transaction verified and cash payed  |
| AUTH_RESULT_ABORTED | |  authorization aborted  |




Result of transaction authorization. 


### enum HolderAuth

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| HOLDER_AUTH_MIN_VALUE | -1|  min value of enumeration  |
| HOLDER_AUTH_UNDEFINED | 0|  holder auth is undefined  |
| HOLDER_AUTH_PIN | |  holder authorized by pin  |
| HOLDER_AUTH_SIGNATURE | |  authorized by signature  |
| HOLDER_AUTH_ID | |  authorized by id  |
| HOLDER_AUTH_OTHER | |  authorized by other method  |
| HOLDER_AUTH_NONE | |  holder not authorized  |




Means by which the transaction is authorized. 


### enum TransactionResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TRX_RESULT_MIN_VALUE | -1|  min value of enumeration  |
| TRX_RESULT_UNDEFINED | 0|  transaction result is undefined  |
| TRX_RESULT_SUCCESS | |  transaction result is success  |
| TRX_RESULT_CANCELLED | |  transaction result is cancelled  |




The result of the transaction 


### enum TechnologyType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TECH_TYPE_MIN_VALUE | -1|  min value of enumeration  |
| TECH_TYPE_UNDEFINED | 0|  tech type is undefined  |
| TECH_TYPE_MIFARE_CLASSIC | |   |
| TECH_TYPE_MIFARE_ULTRALIGHT | |   |
| TECH_TYPE_ISO7816 | |   |





## Functions Documentation

### function getApi

```cpp
CPDllSpecApi & getApi()
```


**Return**: reference to API object 

get API instance 


### function setEnvironmentDataProvider

```cpp
CPDllSpec bool setEnvironmentDataProvider(
    EnvironmentDataProvider & envData
)
```


**Parameters**: 

  * **envData** - reference to [EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md)


**Return**: true on success 

Sets new Environment Data Provider 


### function setBasket

```cpp
CPDllSpec void setBasket(
    const std::list< Merchandise > & merchandises,
    const std::list< Offer > & offers,
    const std::list< Donation > & donations
)
```


**Parameters**: 

  * **merchandises** - merchandises send to CP App 
  * **offers** - offers send to CP App 
  * **donations** - donations send to CP App 


set basket data used for CP_SYSTEM_NOTIFIES_BASKET_FINALIZED and CP_SYSTEM_REQUESTS_BASKET_ADJUSTMENT 


### function getBasket

```cpp
CPDllSpec bool getBasket(
    std::list< Merchandise > & merchandises,
    std::list< Offer > & offers,
    std::list< Donation > & donations
)
```


**Parameters**: 

  * **merchandises** - merchandises used by CP App 
  * **offers** - offers used by CP App 
  * **donations** - donations used by CP App 


**Return**: true if basket is adjusted by CP App 

get basket data used for CP_SYSTEM_NOTIFIES_BASKET_FINALIZED and CP_SYSTEM_REQUESTS_BASKET_ADJUSTMENT 


### function setApi

```cpp
CPDllSpec bool setApi(
    Api & api
)
```


**Parameters**: 

  * **api** - the api reference to ApiCallbacks implementation 


**Return**: true on success 

set instance of API object 


### function getProvision

```cpp
CPDllSpec std::string getProvision()
```


**Return**: the provision 

get provision - Receipt Management response 


### function getPublisher

```cpp
CPDllSpec std::string getPublisher()
```


**Return**: publisher name. Identify which offers or loyalty platform is being leveraged. 

get publisher name 


### function getPublisherId

```cpp
CPDllSpec std::string getPublisherId()
```


**Return**: publisher identifier. Provider may elect to pass a numeric identifer for their platform 

get publisher id 


### function getQrCodeString

```cpp
CPDllSpec std::string getQrCodeString()
```


**Return**: qr code string (RFU) 

get qr code string 


### function getLoyaltyOffers

```cpp
CPDllSpec std::list< Offer > getLoyaltyOffers()
```


**Return**: array of LoyaltyOffer object 

Get loyalty offers returned from CP App while executing CP_SYSTEM_REQUESTS_LOYALTY. 


### function getLoyaltyIdentifiers

```cpp
CPDllSpec std::list< LoyaltyIdentifier > getLoyaltyIdentifiers()
```


**Return**: array of [LoyaltyIdentifier](classvficpl_1_1_loyalty_identifier.md) objects 

getLoyaltyIdentifiers returned from CP App while executing CP_SYSTEM_REQUESTS_LOYALTY. 


### function getFxAmount

```cpp
CPDllSpec std::string getFxAmount()
```


Get data returned from CP App while executing CP_SYSTEM_REQUESTS_PAYMENT_AMOUNT_ADJUSTMENT. 


### function getFxCurrency

```cpp
CPDllSpec std::string getFxCurrency()
```


Get data returned from Cp App while executing CP_SYSTEM_REQUESTS_PAYMENT_AMOUNT_ADJUSTMENT. 


### function getAltPaymentData

```cpp
CPDllSpecAltPaymentData getAltPaymentData()
```


**See**: [AltPaymentData](structvficpl_1_1_alt_payment_data.md)

Get data returned from CP App while executing CP_SYSTEM_REQUESTS_ALT_PAYMENT. 


### function getTechAltPaymentData

```cpp
CPDllSpecTechAltPaymentData getTechAltPaymentData()
```


**See**: [TechAltPaymentData](structvficpl_1_1_tech_alt_payment_data.md)

Get data returned from CP App while executing CP_SYSTEM_REQUESTS_TECH_ALT_PAYMENT. 


### function getCustomerIdentification

```cpp
CPDllSpecCustomerIdentification getCustomerIdentification()
```


**See**: [CustomerIdentification](structvficpl_1_1_customer_identification.md)

Get data returned from CP App while executing CP_SYSTEM_REQUESTS_CUSTOMER_IDENTIFICATION. 


### function getPaymentAmountAdjustment

```cpp
CPDllSpecPaymentAmountAdjustment getPaymentAmountAdjustment()
```


**See**: Paymentamountadjustment 

Get payment amount adjustment Fx fields 


### function init

```cpp
CPDllSpec bool init(
    const std::string & applicationId,
    TransactionDataProvider & trxData,
    Api & api,
    EnvironmentDataProvider & envData
)
```


**Parameters**: 

  * **applicationId** - the application id specifies application using commerce 
  * **trxData** - Transaction Data Provider taken from current transaction. 
  * **api** - api reference to ApiCallbacks implementation. 
  * **envData** - Environment Data Provider. 


**Return**: true on successful initialization 

initialization of Commerce


### function init

```cpp
CPDllSpec bool init(
    const std::string & applicationId,
    TransactionDataProvider & trxData,
    Api & api
)
```


**Parameters**: 

  * **applicationId** - the application id specifies application using commerce 
  * **trxData** - Transaction Data Provider taken from current transaction. 
  * **api** - api reference to ApiCallbacks implementation. 


**Return**: true on successful initialization 

initialization of Commerce


### function init

```cpp
CPDllSpec bool init(
    const std::string & applicationId,
    TransactionDataProvider & trxData,
    EnvironmentDataProvider & envData
)
```


**Parameters**: 

  * **applicationId** - the application id specifies application using commerce 
  * **trxData** - Transaction Data Provider taken from current transaction. 
  * **envData** - Environment Data Provider. 


**Return**: true on successful initialization 

initialization of Commerce


### function init

```cpp
CPDllSpec bool init(
    const std::string & applicationId,
    TransactionDataProvider & trxData
)
```


**Parameters**: 

  * **applicationId** - the application id specifies application using commerce 
  * **trxData** - Transaction Data Provider taken from current transaction. 


**Return**: true on successful initialization 

initialization of Commerce


### function init

```cpp
CPDllSpec bool init(
    const std::string & appid,
    ITransactionDataProvider & trxData,
    Api & api,
    EnvironmentDataProvider & envData
)
```


**Parameters**: 

  * **appid** - the application id specifies application using commerce 
  * **trxData** - Transaction Data Provider taken from current transaction. 
  * **api** - api reference to ApiCallbacks implementation. 
  * **envData** - Environment Data Provider. 


**Return**: true on successful initialization 

Deprecated initialization of Commerce


### function init

```cpp
CPDllSpec bool init(
    const std::string & appid,
    ITransactionDataProvider & trxData,
    Api & api
)
```


**Parameters**: 

  * **appid** - the application id specifies application using commerce 
  * **trxData** - Transaction Data Provider taken from current transaction. 
  * **api** - api reference to ApiCallbacks implementation. 


**Return**: true on successful initialization 

Deprecated initialization of Commerce


### function init

```cpp
CPDllSpec bool init(
    const std::string & appid,
    ITransactionDataProvider & trxData,
    EnvironmentDataProvider & envData
)
```


**Parameters**: 

  * **appid** - the application id specifies application using commerce 
  * **trxData** - Transaction Data Provider taken from current transaction. 
  * **envData** - Environment Data Provider. 


**Return**: true on successful initialization 

Deprecated initialization of Commerce


### function init

```cpp
CPDllSpec bool init(
    const std::string & appid,
    ITransactionDataProvider & trxData
)
```


**Parameters**: 

  * **appid** - the application id specifies application using commerce 
  * **trxData** - Transaction Data Provider taken from current transaction. 


**Return**: true on successful initialization 

Deprecated initialization of Commerce


### function deinit

```cpp
CPDllSpec void deinit()
```


deinitialization of Commerce 


### function invoke

```cpp
CPDllSpecErrorCode invoke(
    InvokeRequest & request
)
```


### function invoke

```cpp
CPDllSpecInvokeResult invoke(
    const CpTrigger trigger
)
```


**Parameters**: 

  * **trigger** - the trigger message that will be sent to CPR 


**Return**: returns whether the notification was delivered 

sends the notification to CP. The call will be blocking the thread until CP app is closed. decision for request/response or request only is done internally depending on trigger. 


### function invoke

```cpp
CPDllSpecInvokeResult invoke(
    const CpTrigger trigger,
    bool sysToForground
)
```


**Parameters**: 

  * **trigger** - the trigger message that will be sent to CPR 
  * **sysToForground** - default parameter executing sysToForground at end of invoke 


**Return**: returns whether the notification was delivered 

sends the notification to CP. The call will be blocking the thread until CP app is closed. decision for request/response or request only is done internally depending on trigger. 


### function invokeByName

```cpp
CPDllSpecInvokeResult invokeByName(
    const CpTrigger trigger,
    const std::string & programName
)
```


**Parameters**: 

  * **trigger** - the trigger message that will be sent to CPR 
  * **programName** - name of the program that will be started in mac 


**Return**: returns whether the notification was delivered 

sends the notification to CP. The call will be blocking the thread until CP app is closed. decision for request/response or request only is done internally depending on trigger. 


### function invokeByName

```cpp
CPDllSpecInvokeResult invokeByName(
    const CpTrigger trigger,
    const std::string & programName,
    bool sysToForground
)
```


**Parameters**: 

  * **trigger** - the trigger message that will be sent to CPR 
  * **programName** - name of the program that will be started in mac 
  * **sysToForground** - default parameter executing sysToForground at end of invoke 


**Return**: returns whether the notification was delivered 

sends the notification to CP. The call will be blocking the thread until CP app is closed. decision for request/response or request only is done internally depending on trigger. 


### function invokeFromDesktop

```cpp
CPDllSpecInvokeResult invokeFromDesktop(
    const CpTrigger trigger
)
```


**Parameters**: 

  * **trigger** which is used for application selection 


**Return**: returns whether the application has been executed 

invoke from desktop shows application selection desktop with all apps from a given trigger. After selection the program is directly invoked in mac. This method waits until the application ends. 


### function invokeFromDesktop

```cpp
CPDllSpecInvokeResult invokeFromDesktop(
    const CpTrigger trigger,
    bool sysToForground
)
```


**Parameters**: 

  * **trigger** which is used for application selection 
  * **sysToForground** - default parameter executing sysToForground at end of invoke 


**Return**: returns whether the application has been executed 

invoke from desktop shows application selection desktop with all apps from a given trigger. After selection the program is directly invoked in mac. This method waits until the application ends. 


### function getCpAppList

```cpp
CPDllSpec std::vector< std::string > getCpAppList(
    const CpTrigger trigger
)
```


**Return**: vector of strings with application names to the given trigger 

Get CP application list of given trigger 


### function getCpPropList

```cpp
CPDllSpecvfiipc::JSObject getCpPropList(
    const CpTrigger trigger
)
```


**Return**: js object to the given trigger 

Get CP application property js object of given trigger 


### function getCpExtraProps

```cpp
CPDllSpecvfiipc::JSObject getCpExtraProps(
    const std::string & appid
)
```


**Parameters**: 

  * **appid** - the application id 


**Return**: js object with extra config or empty object if no such 

Get additional configuration entries for given CP application 






-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
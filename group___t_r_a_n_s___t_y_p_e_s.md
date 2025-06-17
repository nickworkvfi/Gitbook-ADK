---
title: Transaction type (Tag 9C)
summary: According to ISO 8583 - Annex A: Processing Code, Position 1 + 2. 

---

# Transaction type (Tag 9C)

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

According to ISO 8583 - Annex A: Processing Code, Position 1 + 2.  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service)** <br>Goods and services.  |
|  | **[EMV_ADK_TRAN_TYPE_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cash)** <br>Cash advance.  |
|  | **[EMV_ADK_TRAN_TYPE_CASHBACK](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cashback)** <br>Cashback (payment with cash hand out)  |
|  | **[EMV_ADK_TRAN_TYPE_VISA_QUASI_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-visa-quasi-cash)** <br>Quasi Cash as defined by Visa, VCPS 2.2 (only output, transaction to be started as cash)  |
|  | **[EMV_ADK_TRAN_TYPE_MANUAL_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-cash)** <br>manual cash (PP3 testcase)  |
|  | **[EMV_ADK_TRAN_TYPE_MASTERCARD_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-mastercard-cash)** <br>Cash for MasterCard (only output, transaction to be started as cash)  |
|  | **[EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund)** <br>Refund.  |
|  | **[EMV_ADK_TRAN_TYPE_AMEX_PREAUTH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-amex-preauth)** <br>Pre-Authorization for Amex (only output)  |
|  | **[EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-internal-limit)**  |
|  | **[EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a)** <br>Reservation variant a (without partial reversal)  |
|  | **[EMV_ADK_TRAN_TYPE_INCREMENT_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-a)** <br>Reservation increment variant a.  |
|  | **[EMV_ADK_TRAN_TYPE_ERHOEHUNG_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-erhoehung-a)**  |
|  | **[EMV_ADK_TRAN_TYPE_BOOKING_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-a)** <br>Booking (reservation)  |
|  | **[EMV_ADK_TRAN_TYPE_BUCHUNG_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-a)**  |
|  | **[EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b)** <br>Reservation variant b (with partial reversal)  |
|  | **[EMV_ADK_TRAN_TYPE_INCREMENT_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-b)** <br>Reservation increment variant a.  |
|  | **[EMV_ADK_TRAN_TYPE_ERHOEHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-erhoehung-b)**  |
|  | **[EMV_ADK_TRAN_TYPE_BOOKING_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-b)** <br>Booking (reservation)  |
|  | **[EMV_ADK_TRAN_TYPE_BUCHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-b)**  |
|  | **[EMV_ADK_TRAN_TYPE_TIP](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-tip)** <br>Tip (gratuity) - Transaction forced online and marked as initial transaction for tip follow-up.  |
|  | **[EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-reversal)** <br>Manual reversal.  |
|  | **[EMV_ADK_TRAN_TYPE_APPROVAL_PHONE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-approval-phone)** <br>Approval by phone.  |
|  | **[EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log)** <br>Try to read the card log (CUP CTLS feature)  |
|  | **[EMV_ADK_TRAN_TYPE_READ_CARD_DATA](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-data)** <br>Read card transaction for retrieval of special tags defined by applications flow capabilities.  |
|  | **[EMV_ADK_TRAN_TYPE_TRANSIT](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-transit)** <br>Card Validation, e.g. Visa VCKTS mode.  |
|  | **[EMV_ADK_TRAN_TYPE_REPEAT_ONLINE_PIN](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-online-pin)** <br>Transaction repetition after wrong online PIN entry.  |
|  | **[EMV_ADK_TRAN_TYPE_REPEAT_AMOUNT_CHANGE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-amount-change)** <br>Contact only: Transaction repetition after amount change (requirement detected in [TAG_BF06_CBK_LOCAL_CHECKS]()).    Examples: domestic TIP (Austria) or cashback (Sweden).  |
|  | **[EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-trx-intercept)** <br>Contact only: Transaction repetition after CR request (requirement detected in [TAG_BF06_CBK_LOCAL_CHECKS](), [DOM_OPTION_TRX_INTERCEPT]()).    Examples: CR was asked after reading the PAN (Austria EPA).    not used for contactless.  |
|  | **[EMV_ADK_TRAN_TYPE_REPEAT_TRX_DCC](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-trx-dcc)** <br>Contact only: Transaction repetition after DCC handling. Shall be used after break at [TAG_BF07_CBK_DCC]().  |

## Detailed Description

According to ISO 8583 - Annex A: Processing Code, Position 1 + 2. 

Used as input for `TransType` in EMV_CT_SELECT_TYPE / EMV_CTLS_START_TYPE And output [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype) As the transaction type is defined as BCD, we will use the range A0-FF for special transactions. E.g. a reservation is 0xF0 (limitations of application selection are considered) and will be resetted to 0x00 as soon as internally needed. 

 Allowed transaction types are configured with [Defines for special transaction configuration](group___s_p_e_c_i_a_l___t_r_x_s.md)




## Macros Documentation

### define EMV_ADK_TRAN_TYPE_GOODS_SERVICE

```
#define EMV_ADK_TRAN_TYPE_GOODS_SERVICE 0x00
```

Goods and services. 

### define EMV_ADK_TRAN_TYPE_CASH

```
#define EMV_ADK_TRAN_TYPE_CASH 0x01
```

Cash advance. 

### define EMV_ADK_TRAN_TYPE_CASHBACK

```
#define EMV_ADK_TRAN_TYPE_CASHBACK 0x09
```

Cashback (payment with cash hand out) 

### define EMV_ADK_TRAN_TYPE_VISA_QUASI_CASH

```
#define EMV_ADK_TRAN_TYPE_VISA_QUASI_CASH 0x11
```

Quasi Cash as defined by Visa, VCPS 2.2 (only output, transaction to be started as cash) 

### define EMV_ADK_TRAN_TYPE_MANUAL_CASH

```
#define EMV_ADK_TRAN_TYPE_MANUAL_CASH 0x12
```

manual cash (PP3 testcase) 

### define EMV_ADK_TRAN_TYPE_MASTERCARD_CASH

```
#define EMV_ADK_TRAN_TYPE_MASTERCARD_CASH 0x17
```

Cash for MasterCard (only output, transaction to be started as cash) 

Used towards card and in [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype)

 in case [TRANSACTION_TYPE_17_FOR_CASH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-type-17-for-cash)

 is set and cash transaction (as given in [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash)) 


### define EMV_ADK_TRAN_TYPE_REFUND

```
#define EMV_ADK_TRAN_TYPE_REFUND 0x20
```

Refund. 

### define EMV_ADK_TRAN_TYPE_AMEX_PREAUTH

```
#define EMV_ADK_TRAN_TYPE_AMEX_PREAUTH 0x30
```

Pre-Authorization for Amex (only output) 

Used towards card and in [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype)

 in case [TRANSACTION_TYPE_30_FOR_PREAUTH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-type-30-for-preauth)

 is set and [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a) or [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b) is used 


### define EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT

```
#define EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT 0x99
```


### define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A

```
#define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A 0xF0
```

Reservation variant a (without partial reversal) 

### define EMV_ADK_TRAN_TYPE_INCREMENT_A

```
#define EMV_ADK_TRAN_TYPE_INCREMENT_A 0xF1
```

Reservation increment variant a. 

### define EMV_ADK_TRAN_TYPE_ERHOEHUNG_A

```
#define EMV_ADK_TRAN_TYPE_ERHOEHUNG_A EMV_ADK_TRAN_TYPE_INCREMENT_A
```


**Deprecated**: 

use [EMV_ADK_TRAN_TYPE_INCREMENT_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-a)

### define EMV_ADK_TRAN_TYPE_BOOKING_A

```
#define EMV_ADK_TRAN_TYPE_BOOKING_A 0xF2
```

Booking (reservation) 

### define EMV_ADK_TRAN_TYPE_BUCHUNG_A

```
#define EMV_ADK_TRAN_TYPE_BUCHUNG_A EMV_ADK_TRAN_TYPE_BOOKING_A
```


**Deprecated**: 

use [EMV_ADK_TRAN_TYPE_BOOKING_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-a)

### define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B

```
#define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B 0xF3
```

Reservation variant b (with partial reversal) 

### define EMV_ADK_TRAN_TYPE_INCREMENT_B

```
#define EMV_ADK_TRAN_TYPE_INCREMENT_B 0xF4
```

Reservation increment variant a. 

### define EMV_ADK_TRAN_TYPE_ERHOEHUNG_B

```
#define EMV_ADK_TRAN_TYPE_ERHOEHUNG_B EMV_ADK_TRAN_TYPE_INCREMENT_B
```


**Deprecated**: 

use [EMV_ADK_TRAN_TYPE_INCREMENT_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-b)

### define EMV_ADK_TRAN_TYPE_BOOKING_B

```
#define EMV_ADK_TRAN_TYPE_BOOKING_B 0xF5
```

Booking (reservation) 

### define EMV_ADK_TRAN_TYPE_BUCHUNG_B

```
#define EMV_ADK_TRAN_TYPE_BUCHUNG_B EMV_ADK_TRAN_TYPE_BOOKING_B
```


**Deprecated**: 

use [EMV_ADK_TRAN_TYPE_BOOKING_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-b)

### define EMV_ADK_TRAN_TYPE_TIP

```
#define EMV_ADK_TRAN_TYPE_TIP 0xE0
```

Tip (gratuity) - Transaction forced online and marked as initial transaction for tip follow-up. 

### define EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL

```
#define EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL 0xD0
```

Manual reversal. 

### define EMV_ADK_TRAN_TYPE_APPROVAL_PHONE

```
#define EMV_ADK_TRAN_TYPE_APPROVAL_PHONE 0xD1
```

Approval by phone. 

### define EMV_ADK_TRAN_TYPE_READ_CARD_LOG

```
#define EMV_ADK_TRAN_TYPE_READ_CARD_LOG 0xD2
```

Try to read the card log (CUP CTLS feature) 

### define EMV_ADK_TRAN_TYPE_READ_CARD_DATA

```
#define EMV_ADK_TRAN_TYPE_READ_CARD_DATA 0xD3
```

Read card transaction for retrieval of special tags defined by applications flow capabilities. 

### define EMV_ADK_TRAN_TYPE_TRANSIT

```
#define EMV_ADK_TRAN_TYPE_TRANSIT 0xD4
```

Card Validation, e.g. Visa VCKTS mode. 

### define EMV_ADK_TRAN_TYPE_REPEAT_ONLINE_PIN

```
#define EMV_ADK_TRAN_TYPE_REPEAT_ONLINE_PIN 0xC0
```

Transaction repetition after wrong online PIN entry. 

### define EMV_ADK_TRAN_TYPE_REPEAT_AMOUNT_CHANGE

```
#define EMV_ADK_TRAN_TYPE_REPEAT_AMOUNT_CHANGE 0xB0
```

Contact only: Transaction repetition after amount change (requirement detected in [TAG_BF06_CBK_LOCAL_CHECKS]()).    Examples: domestic TIP (Austria) or cashback (Sweden). 

### define EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT

```
#define EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT 0xA0
```

Contact only: Transaction repetition after CR request (requirement detected in [TAG_BF06_CBK_LOCAL_CHECKS](), [DOM_OPTION_TRX_INTERCEPT]()).    Examples: CR was asked after reading the PAN (Austria EPA).    not used for contactless. 

### define EMV_ADK_TRAN_TYPE_REPEAT_TRX_DCC

```
#define EMV_ADK_TRAN_TYPE_REPEAT_TRX_DCC 0xA1
```

Contact only: Transaction repetition after DCC handling. Shall be used after break at [TAG_BF07_CBK_DCC](). 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
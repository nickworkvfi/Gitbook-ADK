---
title: Status information
summary: defines for EMV_CT_TRANSRES_STRUCT::StatusInfo

---

# Status information

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)**

defines for [EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_SI_ONLINE_PIN_REQUIRED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-online-pin-required)** <br>this means Online PIN CVM was performed during the transaction (CT: already done in a callback by the app, CTLS: to be performed by the app once the card is out of the field) --> Online PIN processing (host encryption) is required if the transaction is not declined or if there is no fallback.  |
|  | **[EMV_ADK_SI_SIGNATURE_REQUIRED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-signature-required)** <br>this means signature CVM was performed and the signature line must be printed on the receipt if the transaction is not declined or if there is no fallback.  |
|  | **[EMV_ADK_SI_FORCED_ACCEPTANCE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-forced-acceptance)** <br>Forced acceptance transaction.  |
|  | **[EMV_ADK_SI_USER_DEFINED_CVM](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-user-defined-cvm)** <br>user defined CVM, this means that a custom CVM was performed and according to custom/domestic rules additional steps may apply  |
|  | **[EMV_ADK_SI_ON_DEVICE_CVM](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-on-device-cvm)** <br>An On-Device CVM was performed (Amex: "Mobile CVM", Visa: "Consumer device CVM"). Caution, obsolete: For VFI-Reader it indicates if CVM has been performed on the consumer device even if transaction flow CVM was no CVM (e.g. because below CVM-Limit). But for VERTEX this bit is set if CD-CVM is indicated in the kernel outcome with exception for Amex. Replaced by [EMV_ADK_SI_CONSUMER_DEVICE]() and [EMV_ADK_SI_OUTCOME_CD_CVM]() with a consistent behaviour.  |
|  | **[EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-customer-cardwithdrawl)** <br>Result is EMV_ADK_ABORT because customer has pulled out the card.  |
|  | **[EMV_ADK_SI_GICC_TIPPABLE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-gicc-tippable)** <br>A tip transaction may follow this payment.  |
|  | **[EMV_ADK_SI_PTC_EXCEEDED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-ptc-exceeded)** <br>PIN try counter exceeded.  |
|  | **[EMV_ADK_SI_PIN_FAILURE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-pin-failure)** <br>Last entered offline PIN was wrong.  |
|  | **[EMV_ADK_SI_CONTACTLESS_CHIP](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-chip)** <br>A contactless chip transaction.  |
|  | **[EMV_ADK_SI_CONTACTLESS_MSR](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-msr)** <br>A contactless magstripe txn.  |
|  | **[EMV_ADK_SI_TORN_CREATED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-torn-created)** <br>A torn transaction was created (PP3)    not used for contact.  |
|  | **[EMV_ADK_SI_TORN_TRY_RECOVER](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-torn-try-recover)** <br>A torn transaction was tried to recover    not used for contact.  |
|  | **[EMV_ADK_SI_CONTACTLESS_WAITING](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-waiting)** <br>The contactless transaction is still in the card waiting phase.  |
|  | **[EMV_ADK_SI_CONTACT_ONGOING](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contact-ongoing)** <br>The contact transaction is still ongoing.  |
|  | **[EMV_ADK_SI_CTLS_LONG_TAP](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-ctls-long-tap)** <br>Contactless "Long Tap" / Present And Hold , only appears if transaction goes online, card has to remain in field until [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) returned, see [Present And Hold Transaction ("Long Tap")].  |
|  | **[EMV_ADK_SI_ARQC_RESTART_ANY](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-arqc-restart-any)** <br>Contactless kernel asks for second activation after online request in any case even in case of online problem (e.g. girocard OUT.ORD=ANY)  |
|  | **[EMV_ADK_SI_ARQC_RESTART_UTGO](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-arqc-restart-utgo)** <br>Contactless kernel set OUT.ORD to EMV&OTGO and conditions for offline approval are valid. Retap required if unable to go online or script/auth data available.  |
|  | **[EMV_ADK_SI_CONSUMER_DEVICE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-consumer-device)** <br>Contactless transaction performed by a consumer device (smart phone, tablet, watch) supporting CD-CVM (Consumer Device Cardholder Verification Method).  |
|  | **[EMV_ADK_SI_CONTACTLESS_ONLY](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-only)** <br>Contactless device, key fob or mini card without alternate interfaces. Note: This bit is derived from various card properties like "switch interface" or form factor indicators and is not reliable for all schemes. Don't use this information for control flow. It is intended as additional information or for statistics.  |
|  | **[EMV_ADK_SI_OUTCOME_CD_CVM](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-outcome-cd-cvm)** <br>Contactless set if kernel Outcome Parameter CVM = Confirmation Code Verified (Consumer Device CVM successfully performed, see Book A)  |
|  | **[EMV_ADK_SI_OUTCOME_RECEIPT](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-outcome-receipt)** <br>Contactless set if kernel Outcome Parameter Receipt = Yes (provide a receipt, see Book A). Note: For instance only supported for MasterCard, girocard, JCB and RuPay.  |
|  | **[EMV_ADK_SI_WRITE_DS_FAILED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-write-ds-failed)** <br>Contact Write data storage has failed.  |
|  | **[EMV_ADK_SI_ARQC_RESTART_FORBIDDEN](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-arqc-restart-forbidden)** <br>Do not prompt for re-tap, no matter if there are issuer authentication data or scripts. This is a requirement for JCB online outcome neither 2 presentments nor present and hold and other kernels (e.g. Gemalto-PURE). It is also set for kernels that do not process issuer update at all (e.g. MasterCard, Visa, Amex, CUP, ...) and contactless mag. stripe transactions.  |
|  | **[EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-arqc-restart-no-iauthd)** <br>Only prompt for re-tap in case issuer scripts are present, that is discard Issuer Authentication Data (IAuD, tag '91'). This flag is set for Discover and WISE transactions.  |
|  | **[EMV_ADK_SI_TRANSIT_APPROVED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-transit-approved)** <br>Indicates that transit transaction has been approved ((TC or ARQC) and successful ODA). Additional checks could be needed at application level (exception file, etc.).  |




## Macros Documentation

### define EMV_ADK_SI_ONLINE_PIN_REQUIRED

```
#define EMV_ADK_SI_ONLINE_PIN_REQUIRED 0x00000001u
```

this means Online PIN CVM was performed during the transaction (CT: already done in a callback by the app, CTLS: to be performed by the app once the card is out of the field) --> Online PIN processing (host encryption) is required if the transaction is not declined or if there is no fallback. 

### define EMV_ADK_SI_SIGNATURE_REQUIRED

```
#define EMV_ADK_SI_SIGNATURE_REQUIRED 0x00000002u
```

this means signature CVM was performed and the signature line must be printed on the receipt if the transaction is not declined or if there is no fallback. 

### define EMV_ADK_SI_FORCED_ACCEPTANCE

```
#define EMV_ADK_SI_FORCED_ACCEPTANCE 0x00000004u
```

Forced acceptance transaction. 

### define EMV_ADK_SI_USER_DEFINED_CVM

```
#define EMV_ADK_SI_USER_DEFINED_CVM 0x00000008u
```

user defined CVM, this means that a custom CVM was performed and according to custom/domestic rules additional steps may apply 

### define EMV_ADK_SI_ON_DEVICE_CVM

```
#define EMV_ADK_SI_ON_DEVICE_CVM 0x00000010u
```

An On-Device CVM was performed (Amex: "Mobile CVM", Visa: "Consumer device CVM"). Caution, obsolete: For VFI-Reader it indicates if CVM has been performed on the consumer device even if transaction flow CVM was no CVM (e.g. because below CVM-Limit). But for VERTEX this bit is set if CD-CVM is indicated in the kernel outcome with exception for Amex. Replaced by [EMV_ADK_SI_CONSUMER_DEVICE]() and [EMV_ADK_SI_OUTCOME_CD_CVM]() with a consistent behaviour. 

### define EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL

```
#define EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL 0x00000080u
```

Result is EMV_ADK_ABORT because customer has pulled out the card. 

### define EMV_ADK_SI_GICC_TIPPABLE

```
#define EMV_ADK_SI_GICC_TIPPABLE 0x00000100u
```

A tip transaction may follow this payment. 

### define EMV_ADK_SI_PTC_EXCEEDED

```
#define EMV_ADK_SI_PTC_EXCEEDED 0x00000200u
```

PIN try counter exceeded. 

### define EMV_ADK_SI_PIN_FAILURE

```
#define EMV_ADK_SI_PIN_FAILURE 0x00000400u
```

Last entered offline PIN was wrong. 

### define EMV_ADK_SI_CONTACTLESS_CHIP

```
#define EMV_ADK_SI_CONTACTLESS_CHIP 0x00000800u
```

A contactless chip transaction. 

### define EMV_ADK_SI_CONTACTLESS_MSR

```
#define EMV_ADK_SI_CONTACTLESS_MSR 0x00001000u
```

A contactless magstripe txn. 

### define EMV_ADK_SI_TORN_CREATED

```
#define EMV_ADK_SI_TORN_CREATED 0x00002000u
```

A torn transaction was created (PP3)    not used for contact. 

### define EMV_ADK_SI_TORN_TRY_RECOVER

```
#define EMV_ADK_SI_TORN_TRY_RECOVER 0x00004000u
```

A torn transaction was tried to recover    not used for contact. 

### define EMV_ADK_SI_CONTACTLESS_WAITING

```
#define EMV_ADK_SI_CONTACTLESS_WAITING 0x00008000u
```

The contactless transaction is still in the card waiting phase. 

### define EMV_ADK_SI_CONTACT_ONGOING

```
#define EMV_ADK_SI_CONTACT_ONGOING 0x00008000u
```

The contact transaction is still ongoing. 

### define EMV_ADK_SI_CTLS_LONG_TAP

```
#define EMV_ADK_SI_CTLS_LONG_TAP 0x00010000u
```

Contactless "Long Tap" / Present And Hold , only appears if transaction goes online, card has to remain in field until [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) returned, see [Present And Hold Transaction ("Long Tap")]. 

### define EMV_ADK_SI_ARQC_RESTART_ANY

```
#define EMV_ADK_SI_ARQC_RESTART_ANY 0x00020000u
```

Contactless kernel asks for second activation after online request in any case even in case of online problem (e.g. girocard OUT.ORD=ANY) 

### define EMV_ADK_SI_ARQC_RESTART_UTGO

```
#define EMV_ADK_SI_ARQC_RESTART_UTGO 0x00040000u
```

Contactless kernel set OUT.ORD to EMV&OTGO and conditions for offline approval are valid. Retap required if unable to go online or script/auth data available. 

### define EMV_ADK_SI_CONSUMER_DEVICE

```
#define EMV_ADK_SI_CONSUMER_DEVICE 0x00080000u
```

Contactless transaction performed by a consumer device (smart phone, tablet, watch) supporting CD-CVM (Consumer Device Cardholder Verification Method). 

### define EMV_ADK_SI_CONTACTLESS_ONLY

```
#define EMV_ADK_SI_CONTACTLESS_ONLY 0x00100000u
```

Contactless device, key fob or mini card without alternate interfaces. Note: This bit is derived from various card properties like "switch interface" or form factor indicators and is not reliable for all schemes. Don't use this information for control flow. It is intended as additional information or for statistics. 

### define EMV_ADK_SI_OUTCOME_CD_CVM

```
#define EMV_ADK_SI_OUTCOME_CD_CVM 0x00200000u
```

Contactless set if kernel Outcome Parameter CVM = Confirmation Code Verified (Consumer Device CVM successfully performed, see Book A) 

### define EMV_ADK_SI_OUTCOME_RECEIPT

```
#define EMV_ADK_SI_OUTCOME_RECEIPT 0x00400000u
```

Contactless set if kernel Outcome Parameter Receipt = Yes (provide a receipt, see Book A). Note: For instance only supported for MasterCard, girocard, JCB and RuPay. 

### define EMV_ADK_SI_WRITE_DS_FAILED

```
#define EMV_ADK_SI_WRITE_DS_FAILED 0x00800000u
```

Contact Write data storage has failed. 

### define EMV_ADK_SI_ARQC_RESTART_FORBIDDEN

```
#define EMV_ADK_SI_ARQC_RESTART_FORBIDDEN 0x01000000u
```

Do not prompt for re-tap, no matter if there are issuer authentication data or scripts. This is a requirement for JCB online outcome neither 2 presentments nor present and hold and other kernels (e.g. Gemalto-PURE). It is also set for kernels that do not process issuer update at all (e.g. MasterCard, Visa, Amex, CUP, ...) and contactless mag. stripe transactions. 

### define EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD

```
#define EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD 0x02000000u
```

Only prompt for re-tap in case issuer scripts are present, that is discard Issuer Authentication Data (IAuD, tag '91'). This flag is set for Discover and WISE transactions. 

### define EMV_ADK_SI_TRANSIT_APPROVED

```
#define EMV_ADK_SI_TRANSIT_APPROVED 0x04000000u
```

Indicates that transit transaction has been approved ((TC or ARQC) and successful ODA). Additional checks could be needed at application level (exception file, etc.). 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
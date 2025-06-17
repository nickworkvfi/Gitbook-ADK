---
title: VISA terminal transaction qualifier
summary: Possible values for EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66. 

---

# VISA terminal transaction qualifier

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Possible values for [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[VISA_TTQ_MAGSTRIPE_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-magstripe-supported)** <br>B1b8: Contactless magnetic stripe (MSD) supported.  |
|  | **[VISA_TTQ_VSDC_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-vsdc-supported)** <br>B1b7: Contactless VSDC supported.  |
|  | **[VISA_TTQ_qVSDC_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-qvsdc-supported)** <br>B1b6: Contactless qVSDC supported.  |
|  | **[VISA_TTQ_CONTACT_VSDC_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-contact-vsdc-supported)** <br>B1b5: Contact VSDC supported.  |
|  | **[VISA_TTQ_OFFLINE_ONLY](group___c_l___t_t_q.md#define-visa-ttq-offline-only)** <br>B1b4: Reader is Offline Only.  |
|  | **[VISA_TTQ_ONLINE_PIN_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-online-pin-supported)** <br>B1b3: Online PIN supported.  |
|  | **[VISA_TTQ_SIGNATURE_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-signature-supported)** <br>B1b2: Signature supported.  |
|  | **[VISA_TTQ_ODA_ONLINE_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-oda-online-supported)** <br>B1b1: ODA for Online Authorizations supported.  |
|  | **[VISA_TTQ_ONLINE_FORCED](group___c_l___t_t_q.md#define-visa-ttq-online-forced)** <br>B2b8: Online cryptogram required.  |
|  | **[VISA_TTQ_CVM_FORCED](group___c_l___t_t_q.md#define-visa-ttq-cvm-forced)** <br>B2b7: CVM required.  |
|  | **[VISA_TTQ_CONTACT_PINOFFL](group___c_l___t_t_q.md#define-visa-ttq-contact-pinoffl)** <br>B2b6: (Contact Chip) Offline PIN supported.  |




## Macros Documentation

### define VISA_TTQ_MAGSTRIPE_SUPPORTED

```
#define VISA_TTQ_MAGSTRIPE_SUPPORTED 0x80
```

B1b8: Contactless magnetic stripe (MSD) supported. 

### define VISA_TTQ_VSDC_SUPPORTED

```
#define VISA_TTQ_VSDC_SUPPORTED 0x40
```

B1b7: Contactless VSDC supported. 

### define VISA_TTQ_qVSDC_SUPPORTED

```
#define VISA_TTQ_qVSDC_SUPPORTED 0x20
```

B1b6: Contactless qVSDC supported. 

### define VISA_TTQ_CONTACT_VSDC_SUPPORTED

```
#define VISA_TTQ_CONTACT_VSDC_SUPPORTED 0x10
```

B1b5: Contact VSDC supported. 

### define VISA_TTQ_OFFLINE_ONLY

```
#define VISA_TTQ_OFFLINE_ONLY 0x08
```

B1b4: Reader is Offline Only. 

### define VISA_TTQ_ONLINE_PIN_SUPPORTED

```
#define VISA_TTQ_ONLINE_PIN_SUPPORTED 0x04
```

B1b3: Online PIN supported. 

### define VISA_TTQ_SIGNATURE_SUPPORTED

```
#define VISA_TTQ_SIGNATURE_SUPPORTED 0x02
```

B1b2: Signature supported. 

### define VISA_TTQ_ODA_ONLINE_SUPPORTED

```
#define VISA_TTQ_ODA_ONLINE_SUPPORTED 0x01
```

B1b1: ODA for Online Authorizations supported. 

### define VISA_TTQ_ONLINE_FORCED

```
#define VISA_TTQ_ONLINE_FORCED 0x80
```

B2b8: Online cryptogram required. 

### define VISA_TTQ_CVM_FORCED

```
#define VISA_TTQ_CVM_FORCED 0x40
```

B2b7: CVM required. 

### define VISA_TTQ_CONTACT_PINOFFL

```
#define VISA_TTQ_CONTACT_PINOFFL 0x20
```

B2b6: (Contact Chip) Offline PIN supported. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
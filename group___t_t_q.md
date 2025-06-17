---
title: Common Terminal Transaction Qualifier
summary: TTQ bits as defined [EMV-A] section 5.7. 

---

# Common Terminal Transaction Qualifier

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

TTQ bits as defined [EMV-A] section 5.7.  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TTQ_MAGSTRIPE_MODE_SUPPORTED](group___t_t_q.md#define-ttq-magstripe-mode-supported)** <br>B1b8: Mag-stripe mode supported.  |
|  | **[TTQ_EMV_MODE_SUPPORTED](group___t_t_q.md#define-ttq-emv-mode-supported)** <br>B1b6: EMV mode supported.  |
|  | **[TTQ_CONTACT_CHIP_SUPPORTED](group___t_t_q.md#define-ttq-contact-chip-supported)** <br>B1b5: EMV contact chip supported.  |
|  | **[TTQ_OFFLINE_ONLY](group___t_t_q.md#define-ttq-offline-only)** <br>B1b4: Offline-only reader.  |
|  | **[TTQ_ONLINE_PIN_SUPPORTED](group___t_t_q.md#define-ttq-online-pin-supported)** <br>B1b3: Online PIN supported.  |
|  | **[TTQ_SIGNATURE_SUPPORTED](group___t_t_q.md#define-ttq-signature-supported)** <br>B1b2: Signature supported.  |
|  | **[TTQ_ODA_SUPPORTED](group___t_t_q.md#define-ttq-oda-supported)** <br>B1b1: Offline Data Authentication for Online Authorisations supported (WISE: without "for online")  |
|  | **[TTQ_ONLINE_CRYPTOGRAM_REQUIRED](group___t_t_q.md#define-ttq-online-cryptogram-required)** <br>B2b8: Online cryptogram required.  |
|  | **[TTQ_CVM_REQUIRED](group___t_t_q.md#define-ttq-cvm-required)** <br>B2b7: CVM required.  |
|  | **[TTQ_CONTACT_OFFLINE_PIN](group___t_t_q.md#define-ttq-contact-offline-pin)** <br>B2b6: (Contact Chip) Offline PIN supported.  |
|  | **[TTQ_ISSUER_UPDATE_SUPPORTED](group___t_t_q.md#define-ttq-issuer-update-supported)** <br>B3b8: Issuer Update Processing supported.  |
|  | **[TTQ_CD_CVM_SUPPORTED](group___t_t_q.md#define-ttq-cd-cvm-supported)** <br>B3b7: Consumer Device CVM supported.  |

## Detailed Description

TTQ bits as defined [EMV-A] section 5.7. 

Can be used for

* [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)
* [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)
* [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)
* [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)
* [EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)




## Macros Documentation

### define TTQ_MAGSTRIPE_MODE_SUPPORTED

```
#define TTQ_MAGSTRIPE_MODE_SUPPORTED 0x80
```

B1b8: Mag-stripe mode supported. 

### define TTQ_EMV_MODE_SUPPORTED

```
#define TTQ_EMV_MODE_SUPPORTED 0x20
```

B1b6: EMV mode supported. 

### define TTQ_CONTACT_CHIP_SUPPORTED

```
#define TTQ_CONTACT_CHIP_SUPPORTED 0x10
```

B1b5: EMV contact chip supported. 

### define TTQ_OFFLINE_ONLY

```
#define TTQ_OFFLINE_ONLY 0x08
```

B1b4: Offline-only reader. 

### define TTQ_ONLINE_PIN_SUPPORTED

```
#define TTQ_ONLINE_PIN_SUPPORTED 0x04
```

B1b3: Online PIN supported. 

### define TTQ_SIGNATURE_SUPPORTED

```
#define TTQ_SIGNATURE_SUPPORTED 0x02
```

B1b2: Signature supported. 

### define TTQ_ODA_SUPPORTED

```
#define TTQ_ODA_SUPPORTED 0x01
```

B1b1: Offline Data Authentication for Online Authorisations supported (WISE: without "for online") 

### define TTQ_ONLINE_CRYPTOGRAM_REQUIRED

```
#define TTQ_ONLINE_CRYPTOGRAM_REQUIRED 0x80
```

B2b8: Online cryptogram required. 

### define TTQ_CVM_REQUIRED

```
#define TTQ_CVM_REQUIRED 0x40
```

B2b7: CVM required. 

### define TTQ_CONTACT_OFFLINE_PIN

```
#define TTQ_CONTACT_OFFLINE_PIN 0x20
```

B2b6: (Contact Chip) Offline PIN supported. 

### define TTQ_ISSUER_UPDATE_SUPPORTED

```
#define TTQ_ISSUER_UPDATE_SUPPORTED 0x80
```

B3b8: Issuer Update Processing supported. 

### define TTQ_CD_CVM_SUPPORTED

```
#define TTQ_CD_CVM_SUPPORTED 0x40
```

B3b7: Consumer Device CVM supported. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
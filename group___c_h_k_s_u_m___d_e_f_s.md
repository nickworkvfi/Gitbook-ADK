---
title: Defines for EMVCo checksum calculation
summary: >
other major terminal parameters actually there are only some of them defined 
most of them are hard coded in the lib as actually needed 
all of them are Yes / No decisions 
whenever there is a need to make this configurable for the checksum there will be another parameter added 
In brackets there is the default value or the currently hard coded value  only for checksum no control on the flow,
e.g. Blacklist is controlled per application not per terminal parameters !!! take respect on the default !!! 
---

# Defines for EMVCo checksum calculation

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

other major terminal parameters actually there are only some of them defined   most of them are hard coded in the lib as actually needed   all of them are Yes / No decisions   --> whenever there is a need to make this configurable for the checksum there will be another parameter added   In brackets there is the default value or the currently hard coded value  ** only for checksum --> no control on the flow,**  e.g. Blacklist is controlled per application not per terminal parameters  **!!! take respect on the default !!! **

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CT_CHECKSUM_DEFAULT](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-default)** <br>0x00 means: default    --> when initialized with 0x00 0x00 0x00 then all params set as default mentioned in comment.    For changing the default the corresponding Bit must be set:    e.g. for Transaction Log disabling, the corresponding Bit must be activated = 1  |
|  | **[EMV_CT_CHECKSUM_INCLUDE_VERSION](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-include-version)** <br>B1b1, default: NO --> For checksum only.  |
|  | **[EMV_CT_CHECKSUM_TRANSACTION_LOG](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-transaction-log)** <br>B1b2, default: YES --> De/activated per application.  |
|  | **[EMV_CT_CHECKSUM_EXCEPTION_FILE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-exception-file)** <br>B1b3, default: YES --> De/activated per application.  |
|  | **[EMV_CT_CHECKSUM_FORCE_ONLINE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-force-online)** <br>B1b4, default: YES --> De/activated per application and by merchant.  |
|  | **[EMV_CT_CHECKSUM_FORCE_ACCEPTANCE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-force-acceptance)** <br>B1b5, default: YES --> De/activated per application and by merchant.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-onl-data-capture)** <br>B1b6, default: NO --> For checksum only --> application related decision.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_PSE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-pse)** <br>B1b7, default: YES --> De/activated per transaction (EMV_Select)  |
|  | **[EMV_CT_CHECKSUM_ACCOUNT_TYPE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-account-type)** <br>B1b8, default: YES --> De/activated per application.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_ADVICES](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-advices)** <br>B2b1, default: NO --> Support of advices on host prot.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-cardholder-conf)** <br>B2b2, default: YES --> Cardholder Confirmation.  |
|  | **[EMV_CT_CHECKSUM_PIN_BYPASS](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-pin-bypass)** <br>B2b3, default: NO --> PIN bypass.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-default-tdol)** <br>B2b4, default: YES --> Default TDOL.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-batch-data-capture)** <br>B2b5, default: YES --> Batch data capture.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-voice-ref-iss)** <br>B2b6, default: YES --> Issuer initiated referrals.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-voice-ref-card)** <br>B2b7, default: NO --> Card initiated referrals.  |
|  | **[EMV_CT_CHECKSUM_MULTILANG_SUPPORT](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-multilang-support)** <br>B2b7, default: YES since L2 7.0.2.  |
|  | **[EMV_CT_CHECKSUM_PIN_BYPASS_ONCE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-pin-bypass-once)** <br>B3b1, default: NO --> No subsequent PIN bypass when PIN bypass is active.  |




## Macros Documentation

### define EMV_CT_CHECKSUM_DEFAULT

```
#define EMV_CT_CHECKSUM_DEFAULT "\x00\x00\x00\x00\x00"
```

0x00 means: default    --> when initialized with 0x00 0x00 0x00 then all params set as default mentioned in comment.    For changing the default the corresponding Bit must be set:    e.g. for Transaction Log disabling, the corresponding Bit must be activated = 1 

### define EMV_CT_CHECKSUM_INCLUDE_VERSION

```
#define EMV_CT_CHECKSUM_INCLUDE_VERSION 0x01
```

B1b1, default: NO --> For checksum only. 

### define EMV_CT_CHECKSUM_TRANSACTION_LOG

```
#define EMV_CT_CHECKSUM_TRANSACTION_LOG 0x02
```

B1b2, default: YES --> De/activated per application. 

### define EMV_CT_CHECKSUM_EXCEPTION_FILE

```
#define EMV_CT_CHECKSUM_EXCEPTION_FILE 0x04
```

B1b3, default: YES --> De/activated per application. 

### define EMV_CT_CHECKSUM_FORCE_ONLINE

```
#define EMV_CT_CHECKSUM_FORCE_ONLINE 0x08
```

B1b4, default: YES --> De/activated per application and by merchant. 

### define EMV_CT_CHECKSUM_FORCE_ACCEPTANCE

```
#define EMV_CT_CHECKSUM_FORCE_ACCEPTANCE 0x10
```

B1b5, default: YES --> De/activated per application and by merchant. 

### define EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE

```
#define EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE 0x20
```

B1b6, default: NO --> For checksum only --> application related decision. 

### define EMV_CT_CHECKSUM_SUPPORT_PSE

```
#define EMV_CT_CHECKSUM_SUPPORT_PSE 0x40
```

B1b7, default: YES --> De/activated per transaction (EMV_Select) 

### define EMV_CT_CHECKSUM_ACCOUNT_TYPE

```
#define EMV_CT_CHECKSUM_ACCOUNT_TYPE 0x80
```

B1b8, default: YES --> De/activated per application. 

### define EMV_CT_CHECKSUM_SUPPORT_ADVICES

```
#define EMV_CT_CHECKSUM_SUPPORT_ADVICES 0x01
```

B2b1, default: NO --> Support of advices on host prot. 

### define EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF

```
#define EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF 0x02
```

B2b2, default: YES --> Cardholder Confirmation. 

### define EMV_CT_CHECKSUM_PIN_BYPASS

```
#define EMV_CT_CHECKSUM_PIN_BYPASS 0x04
```

B2b3, default: NO --> PIN bypass. 

### define EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL

```
#define EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL 0x08
```

B2b4, default: YES --> Default TDOL. 

### define EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE

```
#define EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE 0x10
```

B2b5, default: YES --> Batch data capture. 

### define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS

```
#define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS 0x20
```

B2b6, default: YES --> Issuer initiated referrals. 

### define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD

```
#define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD 0x40
```

B2b7, default: NO --> Card initiated referrals. 

### define EMV_CT_CHECKSUM_MULTILANG_SUPPORT

```
#define EMV_CT_CHECKSUM_MULTILANG_SUPPORT 0x80
```

B2b7, default: YES since L2 7.0.2. 

### define EMV_CT_CHECKSUM_PIN_BYPASS_ONCE

```
#define EMV_CT_CHECKSUM_PIN_BYPASS_ONCE 0x01
```

B3b1, default: NO --> No subsequent PIN bypass when PIN bypass is active. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
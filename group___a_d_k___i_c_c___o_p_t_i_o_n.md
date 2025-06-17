---
title: Options for ICC access
summary: Options for ICC access, e.g. for EMV_CTLS_SmartISO(), EMV_CTLS_SmartReset(), EMV_CTLS_SmartPowerOff()

---

# Options for ICC access

**Module:** **[ICC Interface](group___a_d_k___i_c_c___i_f.md)**

Options for ICC access, e.g. for [EMV_CTLS_SmartISO()](), [EMV_CTLS_SmartReset()](), [EMV_CTLS_SmartPowerOff()]() [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_RFU_1](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-rfu-1)** <br>reserved for probable reader number  |
|  | **[EMV_CTLS_RESET_KEEP_FIELD_ON](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-reset-keep-field-on)** <br>(Vel: y VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Do not switch off RF field when no card was detected. CAUTION: This results in higher power consumption and might cause overheating problems.  |
|  | **[EMV_CTLS_SPURIOUS_DETECT](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-spurious-detect)** <br>(Vel: y VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Avoid faulty collision detection on ADK level. This bit was marked deprecated since August 2020 but reactivated for Trinity.  |
|  | **[EMV_CTLS_EMV_COMPLIANT](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-emv-compliant)** <br>(Vel: y VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Only card type is returned in card info. This feature is mutually exclusive with EMV_CTLS_RESET_NO_EMV.  |
|  | **[EMV_CTLS_RESET_NO_EMV](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-reset-no-emv)** <br>(Vel: y VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Provide card type plus UID if available as card info. This feature is mutually exclusive with EMV_CTLS_EMV_COMPLIANT.  |
|  | **[EMV_CTLS_RESET_PICC_OPEN_ONLY](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-reset-picc-open-only)** <br>(Vel: n VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Only initialise CTLS reader, do not detect cards.  |
|  | **[EMV_CTLS_SKIP_FIELD_ON](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-skip-field-on)** <br>(Vel: n VFI: y) [EMV_CTLS_SmartReset()]()`ucOptions:` Tell VFI Reader to consider RF Field is already turned on by NFC ADK.  |
|  | **[EMV_CTLS_OPEN_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-open-reader)** <br>(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination [EMV_CTLS_OPEN_READER]() for re-open.  |
|  | **[EMV_CTLS_CLOSE_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-close-reader)** <br>(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, close CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-open-reader) for re-open.  |
|  | **[EMV_CTLS_DETECT_REMOVAL](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-detect-removal)** <br>(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, start removal detection background task  |
|  | **[EMV_CT_CUSTOMER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-customer)** <br>bit 1,2 used for reader selection: Customer Card Slot  |
|  | **[EMV_CT_SAM_1](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-sam-1)** <br>bit 1,2 used for reader selection: SAM1  |
|  | **[EMV_CT_SAM_2](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-sam-2)** <br>bit 1,2 used for reader selection: SAM2  |
|  | **[EMV_CT_SAM_3](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-sam-3)** <br>bit 1,2 used for reader selection: SAM3  |
|  | **[EMV_CT_TRY_PPS](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-try-pps)** <br>Try to increase the baudrate by using PPS.  |
|  | **[EMV_CT_SKIP_ATR](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-skip-atr)** <br>Skip ATR reading, not included in response.  |
|  | **[EMV_CT_TRY_PPS_EPA](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-try-pps-epa)** <br>PPS handling for Austrian Maestro Cards.  |
|  | **[EMV_CT_WARMRESET](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-warmreset)** <br>Warm Reset to ICC (Cold reset must have been applied before)  |
|  | **[EMV_CT_DETECT_WRONG_ATR](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-detect-wrong-atr)** <br>Distinguish between wrong ATR and card wrong side/no chip and return applicable return value (for customer slot only)  |
|  | **[EMV_CT_ID0_ISO_MODE](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-id0-iso-mode)** <br>The customer card (ID 0) is reset in mode EMV per default, use this bit to switch to ISO 7816 (for ID0 only)  |
|  | **[EMV_CT_SAM_EMV_MODE](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-sam-emv-mode)** <br>SAMs are reset in mode ISO 7816 per default, use this bit to switch to EMV 311 (for SAMs only)  |
|  | **[EMV_CT_CARD_CLASS_B_3V](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-card-class-b-3v)** <br>For class B (3V) cards.  |

## Detailed Description

Options for ICC access, e.g. for [EMV_CTLS_SmartISO()](), [EMV_CTLS_SmartReset()](), [EMV_CTLS_SmartPowerOff()]()

Parameter `ucOptions` in [EMV_CT_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso), [EMV_CT_SmartDetect()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect), [EMV_CT_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset)




## Macros Documentation

### define EMV_CTLS_RFU_1

```
#define EMV_CTLS_RFU_1 0x01
```

reserved for probable reader number 

### define EMV_CTLS_RESET_KEEP_FIELD_ON

```
#define EMV_CTLS_RESET_KEEP_FIELD_ON 0x02
```

(Vel: y VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Do not switch off RF field when no card was detected. CAUTION: This results in higher power consumption and might cause overheating problems. 

### define EMV_CTLS_SPURIOUS_DETECT

```
#define EMV_CTLS_SPURIOUS_DETECT 0x04
```

(Vel: y VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Avoid faulty collision detection on ADK level. This bit was marked deprecated since August 2020 but reactivated for Trinity. 

### define EMV_CTLS_EMV_COMPLIANT

```
#define EMV_CTLS_EMV_COMPLIANT 0x08
```

(Vel: y VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Only card type is returned in card info. This feature is mutually exclusive with EMV_CTLS_RESET_NO_EMV. 

### define EMV_CTLS_RESET_NO_EMV

```
#define EMV_CTLS_RESET_NO_EMV 0x10
```

(Vel: y VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Provide card type plus UID if available as card info. This feature is mutually exclusive with EMV_CTLS_EMV_COMPLIANT. 

### define EMV_CTLS_RESET_PICC_OPEN_ONLY

```
#define EMV_CTLS_RESET_PICC_OPEN_ONLY 0x20
```

(Vel: n VFI: n) [EMV_CTLS_SmartReset()]()`ucOptions:` Only initialise CTLS reader, do not detect cards. 

### define EMV_CTLS_SKIP_FIELD_ON

```
#define EMV_CTLS_SKIP_FIELD_ON 0x40
```

(Vel: n VFI: y) [EMV_CTLS_SmartReset()]()`ucOptions:` Tell VFI Reader to consider RF Field is already turned on by NFC ADK. 

### define EMV_CTLS_OPEN_READER

```
#define EMV_CTLS_OPEN_READER EMV_CTLS_RESET_PICC_OPEN_ONLY
```

(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination [EMV_CTLS_OPEN_READER]() for re-open. 

### define EMV_CTLS_CLOSE_READER

```
#define EMV_CTLS_CLOSE_READER 0x40
```

(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, close CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-open-reader) for re-open. 

### define EMV_CTLS_DETECT_REMOVAL

```
#define EMV_CTLS_DETECT_REMOVAL 0x80
```

(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, start removal detection background task 

### define EMV_CT_CUSTOMER

```
#define EMV_CT_CUSTOMER 0x00
```

bit 1,2 used for reader selection: Customer Card Slot 

### define EMV_CT_SAM_1

```
#define EMV_CT_SAM_1 0x01
```

bit 1,2 used for reader selection: SAM1 

### define EMV_CT_SAM_2

```
#define EMV_CT_SAM_2 0x02
```

bit 1,2 used for reader selection: SAM2 

### define EMV_CT_SAM_3

```
#define EMV_CT_SAM_3 (EMV_CT_SAM_1|EMV_CT_SAM_2)
```

bit 1,2 used for reader selection: SAM3 

### define EMV_CT_TRY_PPS

```
#define EMV_CT_TRY_PPS 0x04
```

Try to increase the baudrate by using PPS. 

### define EMV_CT_SKIP_ATR

```
#define EMV_CT_SKIP_ATR 0x08
```

Skip ATR reading, not included in response. 

### define EMV_CT_TRY_PPS_EPA

```
#define EMV_CT_TRY_PPS_EPA 0x10
```

PPS handling for Austrian Maestro Cards. 

### define EMV_CT_WARMRESET

```
#define EMV_CT_WARMRESET 0x20
```

Warm Reset to ICC (Cold reset must have been applied before) 

### define EMV_CT_DETECT_WRONG_ATR

```
#define EMV_CT_DETECT_WRONG_ATR 0x40
```

Distinguish between wrong ATR and card wrong side/no chip and return applicable return value (for customer slot only) 

### define EMV_CT_ID0_ISO_MODE

```
#define EMV_CT_ID0_ISO_MODE 0x80
```

The customer card (ID 0) is reset in mode EMV per default, use this bit to switch to ISO 7816 (for ID0 only) 

### define EMV_CT_SAM_EMV_MODE

```
#define EMV_CT_SAM_EMV_MODE 0x40
```

SAMs are reset in mode ISO 7816 per default, use this bit to switch to EMV 311 (for SAMs only) 

### define EMV_CT_CARD_CLASS_B_3V

```
#define EMV_CT_CARD_CLASS_B_3V 0x80
```

For class B (3V) cards. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
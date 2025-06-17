---
title: Position 1- chipcard command where error occurs (2 byte)

---

# Position 1: chipcard command where error occurs (2 byte)

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)** **/** **[Additional error data](group___d_e_f___d_f62.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_DF62_ERR_POS1_CHIP_RESET](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-chip-reset)** <br>reset (ATR) during technology selection  |
|  | **[EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-sel-list-aid)** <br>SELECT during build of candidate list using explicit mode.  |
|  | **[EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-sel-list-pse)** <br>SELECT during build of candidate list using PSE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-read-list-pse)** <br>READ RECORD during build of candidate list using PSE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_SEL_FINAL](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-sel-final)** <br>SELECT during final selection.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GPO](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-gpo)** <br>GET PROCESSING OPTIONS.  |
|  | **[EMV_ADK_DF62_ERR_POS1_READ](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-read)** <br>READ RECORD.  |
|  | **[EMV_ADK_DF62_ERR_POS1_INT_AUTH](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-int-auth)** <br>INTERNAL AUTHENTICATE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GETDATA_PTC](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-getdata-ptc)** <br>GET DATA for PIN try counter.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GETCHALLENGE](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-getchallenge)** <br>GET CHALLENGE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-verify-enc-pin)** <br>VERIFY for enciphered PIN.  |
|  | **[EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-verify-plain-pin)** <br>VERIFY for plaintext PIN.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GETDATA_ATC](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-getdata-atc)** <br>GET DATA for ATC.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-getdata-loatc)** <br>GET DATA for LOATC.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GENAC_1](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-genac-1)** <br>1st GENERATE AC without CDA  |
|  | **[EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-genac-1-cda)** <br>1st GENERATE AC with CDA  |
|  | **[EMV_ADK_DF62_ERR_POS1_EXTAUTH](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-extauth)** <br>EXTERNAL AUTHENTICATE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-crit-script)** <br>critical script command  |
|  | **[EMV_ADK_DF62_ERR_POS1_GENAC_2](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-genac-2)** <br>2nd GENERATE AC without CDA  |
|  | **[EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-genac-2-cda)** <br>2nd GENERATE AC with CDA  |
|  | **[EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-non-crit-script)** <br>non critical script command  |




## Macros Documentation

### define EMV_ADK_DF62_ERR_POS1_CHIP_RESET

```
#define EMV_ADK_DF62_ERR_POS1_CHIP_RESET 0x1000u
```

reset (ATR) during technology selection 

### define EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID

```
#define EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID 0x2000u
```

SELECT during build of candidate list using explicit mode. 

### define EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE

```
#define EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE 0x2100u
```

SELECT during build of candidate list using PSE. 

### define EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE

```
#define EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE 0x2200u
```

READ RECORD during build of candidate list using PSE. 

### define EMV_ADK_DF62_ERR_POS1_SEL_FINAL

```
#define EMV_ADK_DF62_ERR_POS1_SEL_FINAL 0x3000u
```

SELECT during final selection. 

### define EMV_ADK_DF62_ERR_POS1_GPO

```
#define EMV_ADK_DF62_ERR_POS1_GPO 0x4000u
```

GET PROCESSING OPTIONS. 

### define EMV_ADK_DF62_ERR_POS1_READ

```
#define EMV_ADK_DF62_ERR_POS1_READ 0x5000u
```

READ RECORD. 

### define EMV_ADK_DF62_ERR_POS1_INT_AUTH

```
#define EMV_ADK_DF62_ERR_POS1_INT_AUTH 0x6000u
```

INTERNAL AUTHENTICATE. 

### define EMV_ADK_DF62_ERR_POS1_GETDATA_PTC

```
#define EMV_ADK_DF62_ERR_POS1_GETDATA_PTC 0x7001u
```

GET DATA for PIN try counter. 

### define EMV_ADK_DF62_ERR_POS1_GETCHALLENGE

```
#define EMV_ADK_DF62_ERR_POS1_GETCHALLENGE 0x7100u
```

GET CHALLENGE. 

### define EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN

```
#define EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN 0x7210u
```

VERIFY for enciphered PIN. 

### define EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN

```
#define EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN 0x7220u
```

VERIFY for plaintext PIN. 

### define EMV_ADK_DF62_ERR_POS1_GETDATA_ATC

```
#define EMV_ADK_DF62_ERR_POS1_GETDATA_ATC 0x8001u
```

GET DATA for ATC. 

### define EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC

```
#define EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC 0x8002u
```

GET DATA for LOATC. 

### define EMV_ADK_DF62_ERR_POS1_GENAC_1

```
#define EMV_ADK_DF62_ERR_POS1_GENAC_1 0x9001u
```

1st GENERATE AC without CDA 

### define EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA

```
#define EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA 0x9011u
```

1st GENERATE AC with CDA 

### define EMV_ADK_DF62_ERR_POS1_EXTAUTH

```
#define EMV_ADK_DF62_ERR_POS1_EXTAUTH 0xA000u
```

EXTERNAL AUTHENTICATE. 

### define EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT

```
#define EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT 0xB100u
```

critical script command 

### define EMV_ADK_DF62_ERR_POS1_GENAC_2

```
#define EMV_ADK_DF62_ERR_POS1_GENAC_2 0x9002u
```

2nd GENERATE AC without CDA 

### define EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA

```
#define EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA 0x9012u
```

2nd GENERATE AC with CDA 

### define EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT

```
#define EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT 0xB200u
```

non critical script command 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
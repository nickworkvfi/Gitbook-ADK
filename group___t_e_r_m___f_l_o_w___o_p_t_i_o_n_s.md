---
title: Terminal configuration- Collection of flow options
summary: Contents of the EMV_CTLS_TERMDATA_STRUCT::FlowOptions. 

---

# Terminal configuration: Collection of flow options

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Terminal Data](group___d_e_f___c_o_n_f___t_e_r_m.md)**

Contents of the [EMV_CTLS_TERMDATA_STRUCT::FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-visa-wave)** <br>B1b1: Support for Visa wave    for VFI reader or enabling Raptor VISA AP kernel (PDOL decision)    Info: VFI reader tag DF64, 1FF0 and others - This feature is not configurable per AID only global.  |
|  | **[INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-cko-amexemv-or-nonemv-market)** <br>B1b2: Support for Amex EMV or NON EMV market    Map to Byte2 BIT1 of Contactless Kernel Options(1FF0)    Info: VFI reader tag 1FF0 - This feature is not configurable per AID only global.  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-ui-scheme-default)** <br>B1b3: VFI reader only: Use reader's UI scheme "default", as standard "EMEA" is used.    Visa Europe tests will fail if this is activated. But it's needed for display callback "L1 error" ([EMV_ADK_TXT_RETAP_SAME_L1]())  |
|  | **[INPUT_CTLS_TRM_IFD_SERIAL_USE_TID](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-ifd-serial-use-tid)** <br>B1b4: Use the TID as IFD Serial number. Background: If application can not provide IFD_Serial this can be used as replacement to have a unique value available (not for VFI-Reader).  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-led-non-visa-europe)** <br>B1b5: Switch off Visa Europe work around for LED2. This option is like INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT but for VERTEX.  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-led-ep-option-2)** <br>B1b6: Use LED scheme option 2 as defined in Entry Point spec [EMV BB]. Coloured LEDs similar to Visa Wave 2 (Visa Asia Pacific). For LED configuration see [EMV_CTLS_LED_ConfigDesign_Extended()]().  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-led-interac)** <br>B1b7: Use LED blinking scheme for Interac (Canada)  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-forward-vfi-fail)** <br>B1b8: VFI Reader final scenario "Fail" is forwarded to the application by returning EMV_ADK_VFI_FAIL instead of per default EMV_ADK_AAC. Additionnally the ADK provides the SW12 in T_DF64_KernelDebugData[0]&[1], VFI Reader Error Code in T_DF64_KernelDebugData[3], and VFI Reader RF State Code in T_DF64_KernelDebugData[30].  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-disable-discover-zip-check)** <br>B2b1: VFI Reader only: Disable the check according to D-PAS 1.0 Bulletin TAS-002 v1.0 which requires to consider the legacy Discover ZIP application as mandatory on any card/phone with the Discover/Diners D-PAS AID, and to reject the card if ZIP is not present.  |




## Macros Documentation

### define INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE

```
#define INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE 0x01
```

B1b1: Support for Visa wave    for VFI reader or enabling Raptor VISA AP kernel (PDOL decision)    Info: VFI reader tag DF64, 1FF0 and others - This feature is not configurable per AID only global. 

### define INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET

```
#define INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET 0x02
```

B1b2: Support for Amex EMV or NON EMV market    Map to Byte2 BIT1 of Contactless Kernel Options(1FF0)    Info: VFI reader tag 1FF0 - This feature is not configurable per AID only global. 

### define INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT

```
#define INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT 0x04
```

B1b3: VFI reader only: Use reader's UI scheme "default", as standard "EMEA" is used.    Visa Europe tests will fail if this is activated. But it's needed for display callback "L1 error" ([EMV_ADK_TXT_RETAP_SAME_L1]()) 

### define INPUT_CTLS_TRM_IFD_SERIAL_USE_TID

```
#define INPUT_CTLS_TRM_IFD_SERIAL_USE_TID 0x08
```

B1b4: Use the TID as IFD Serial number. Background: If application can not provide IFD_Serial this can be used as replacement to have a unique value available (not for VFI-Reader). 

### define INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE

```
#define INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE 0x10
```

B1b5: Switch off Visa Europe work around for LED2. This option is like INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT but for VERTEX. 

### define INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2

```
#define INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2 0x20
```

B1b6: Use LED scheme option 2 as defined in Entry Point spec [EMV BB]. Coloured LEDs similar to Visa Wave 2 (Visa Asia Pacific). For LED configuration see [EMV_CTLS_LED_ConfigDesign_Extended()](). 

### define INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC

```
#define INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC 0x40
```

B1b7: Use LED blinking scheme for Interac (Canada) 

### define INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL

```
#define INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL 0x80
```

B1b8: VFI Reader final scenario "Fail" is forwarded to the application by returning EMV_ADK_VFI_FAIL instead of per default EMV_ADK_AAC. Additionnally the ADK provides the SW12 in T_DF64_KernelDebugData[0]&[1], VFI Reader Error Code in T_DF64_KernelDebugData[3], and VFI Reader RF State Code in T_DF64_KernelDebugData[30]. 

### define INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK

```
#define INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK 0x01
```

B2b1: VFI Reader only: Disable the check according to D-PAS 1.0 Bulletin TAS-002 v1.0 which requires to consider the legacy Discover ZIP application as mandatory on any card/phone with the Discover/Diners D-PAS AID, and to reject the card if ZIP is not present. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
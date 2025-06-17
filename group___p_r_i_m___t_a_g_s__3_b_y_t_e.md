---
title: Three-byte-tags

---

# Three-byte-tags

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** **/** **[Verifone internal tags](group___v_e_r_i___t_a_g_s.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_DF8F0A_EXIT_OPTIONS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options)** <br>Options send with Exit_Framework, see [Options for Exit Framework]().  |
|  | **[TAG_DF8F0B_TERM_FLOW_OPTIONS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0b-term-flow-options)** <br>[EMV_CTLS_TERMDATA_STRUCT::FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions).  |
|  | **[TAG_DF8F0C_INIT_RESULT_FLAGS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0c-init-result-flags)** <br>Parameter `ulResult` in function [EMV_CTLS_Init_Framework()](), respectively EMV_CTLS_Init_FrameworkClient()  |
|  | **[TAG_DF8F0D_SETUP_RES_TRXINFO](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0d-setup-res-trxinfo)** <br>[EMV_CTLS_STARTRES_STRUCT::TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation).  |
|  | **[TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0e-term-maxctls-translimit)** <br>[EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-maxctlstranslimit).  |
|  | **[TAG_DF8F0F_APPLYCONFIG_OPTIONS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0f-applyconfig-options)** <br>Options send with [EMV_CTLS_ApplyConfiguration()](), unsigned long in functional interface, please use 4 byte in the serialization.  |
|  | **[TAG_DF8F10_LED_DESIGN_WIDTH](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f10-led-design-width)** <br>LED width, parameter `width` in [EMV_CTLS_LED_ConfigDesign()]() |
|  | **[TAG_DF8F11_LED_DESIGN_HEIGHT](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f11-led-design-height)** <br>LED height, parameter `height` in [EMV_CTLS_LED_ConfigDesign()]() |
|  | **[TAG_DF8F12_LED_DESIGN_OFF_COL](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f12-led-design-off-col)** <br>color off LED when off, parameter `color_off` in [EMV_CTLS_LED_ConfigDesign()]() |
|  | **[TAG_DF8F13_LED_DESIGN_ON_COL](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f13-led-design-on-col)** <br>color off LED when on, parameter `color_on` in [EMV_CTLS_LED_ConfigDesign()]() |
|  | **[TAG_DF8F14_LED_REGION_WIDTH](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f14-led-region-width)** <br>Region width, parameter `wRegion` in [EMV_CTLS_LED_ConfigDesign()]() |
|  | **[TAG_DF8F15_LED_REGION_HEIGHT](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f15-led-region-height)** <br>Region height, parameter `hRegion` in [EMV_CTLS_LED_ConfigDesign()]() |
|  | **[TAG_DF8F16_LED_REGION_XCOORD](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f16-led-region-xcoord)** <br>Region upper left corner x-coordinate, parameter `xRegion` in [EMV_CTLS_LED_ConfigDesign()]() |
|  | **[TAG_DF8F17_LED_REGION_YCOORD](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f17-led-region-ycoord)** <br>Region upper left corner y-coordinate, parameter `yRegion` in [EMV_CTLS_LED_ConfigDesign()]() |
|  | **[TAG_DF8F18_LED_DESIGN_SHAPE](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f18-led-design-shape)** <br>Shape, parameter `shape` in [EMV_CTLS_LED_ConfigDesign_Extended()]() |
|  | **[TAG_DF8F19_LED_DESIGN_SHAPE_PARAM](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f19-led-design-shape-param)** <br>Shape parameters, parameter `shape_params` in [EMV_CTLS_LED_ConfigDesign_Extended()]() |
|  | **[TAG_DF8F1A_LED_DESIGN_OPTIONS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f1a-led-design-options)** <br>options, parameter `options` in [EMV_CTLS_LED_ConfigDesign_Extended()]() |
|  | **[TAG_DF8F1B_LED_DESIGN_BG_COL](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f1b-led-design-bg-col)** <br>background color, parameter `bg_color` in [EMV_CTLS_LED_ConfigDesign_Extended()]() |
|  | **[TAG_DF8F12_DISPLAY_TEXT](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f12-display-text)** <br>used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF14_CBK_TEXT_DISPLAY]() |
|  | **[TAG_DF8F13_UI_MSG_ID](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f13-ui-msg-id)** <br>EMVCo Book A UI request message id, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF14_CBK_TEXT_DISPLAY]().  |
|  | **[TAG_DF8F14_UI_MSG_ID_RESTART](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f14-ui-msg-id-restart)** <br>EMVCo Book A UI request message id for restart, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF14_CBK_TEXT_DISPLAY]().  |
|  | **[TAG_DF8F20_CTLS_CARD_TPYE](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f20-ctls-card-tpye)** <br>Detailed CTLS card type, available if a CTLS non EMV card is detected,.  |
|  | **[TAG_DF8F21_CTLS_MIFARE_SN](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f21-ctls-mifare-sn)** <br>Mifare Card Serial number, available if a CTLS non EMV card is detected AND the detected card turns our as Mifare AND the card incldues a serial number.  |
|  | **[TAG_DF8F30_REQUESTED_TAGS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f30-requested-tags)** <br>for requestedTags parameter in [EMV_CTLS_fetchTxnTags()]() |
|  | **[TAG_DF8F40_VIRTUAL_TVR](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f40-virtual-tvr)** <br>   Also used for Epal to fetch internal kernel TVR (tag 95 is always forced to zero).  |
|  | **[TAG_DF8F41_VISA_STATUS_BITMAP](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f41-visa-status-bitmap)** <br>Visa Status Bitmap generated by Visa kernel on Transit Transaction, 3 bytes.  |
|  | **[TAG_DF8F42_DISCOVER_STATUS_BITMAP](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f42-discover-status-bitmap)** <br>Discover Status Bitmap generated by Discover Connect kernel, 4 bytes.  |




## Macros Documentation

### define TAG_DF8F0A_EXIT_OPTIONS

```
#define TAG_DF8F0A_EXIT_OPTIONS 0xDF8F0A
```

Options send with Exit_Framework, see [Options for Exit Framework](). 

### define TAG_DF8F0B_TERM_FLOW_OPTIONS

```
#define TAG_DF8F0B_TERM_FLOW_OPTIONS 0xDF8F0B
```

[EMV_CTLS_TERMDATA_STRUCT::FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions). 

### define TAG_DF8F0C_INIT_RESULT_FLAGS

```
#define TAG_DF8F0C_INIT_RESULT_FLAGS 0xDF8F0C
```

Parameter `ulResult` in function [EMV_CTLS_Init_Framework()](), respectively EMV_CTLS_Init_FrameworkClient() 

### define TAG_DF8F0D_SETUP_RES_TRXINFO

```
#define TAG_DF8F0D_SETUP_RES_TRXINFO 0xDF8F0D
```

[EMV_CTLS_STARTRES_STRUCT::TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation). 

### define TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT

```
#define TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT 0xDF8F0E
```

[EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-maxctlstranslimit). 

### define TAG_DF8F0F_APPLYCONFIG_OPTIONS

```
#define TAG_DF8F0F_APPLYCONFIG_OPTIONS 0xDF8F0F
```

Options send with [EMV_CTLS_ApplyConfiguration()](), unsigned long in functional interface, please use 4 byte in the serialization. 

### define TAG_DF8F10_LED_DESIGN_WIDTH

```
#define TAG_DF8F10_LED_DESIGN_WIDTH 0xDF8F10
```

LED width, parameter `width` in [EMV_CTLS_LED_ConfigDesign()]()

### define TAG_DF8F11_LED_DESIGN_HEIGHT

```
#define TAG_DF8F11_LED_DESIGN_HEIGHT 0xDF8F11
```

LED height, parameter `height` in [EMV_CTLS_LED_ConfigDesign()]()

### define TAG_DF8F12_LED_DESIGN_OFF_COL

```
#define TAG_DF8F12_LED_DESIGN_OFF_COL 0xDF8F12
```

color off LED when off, parameter `color_off` in [EMV_CTLS_LED_ConfigDesign()]()

### define TAG_DF8F13_LED_DESIGN_ON_COL

```
#define TAG_DF8F13_LED_DESIGN_ON_COL 0xDF8F13
```

color off LED when on, parameter `color_on` in [EMV_CTLS_LED_ConfigDesign()]()

### define TAG_DF8F14_LED_REGION_WIDTH

```
#define TAG_DF8F14_LED_REGION_WIDTH 0xDF8F14
```

Region width, parameter `wRegion` in [EMV_CTLS_LED_ConfigDesign()]()

### define TAG_DF8F15_LED_REGION_HEIGHT

```
#define TAG_DF8F15_LED_REGION_HEIGHT 0xDF8F15
```

Region height, parameter `hRegion` in [EMV_CTLS_LED_ConfigDesign()]()

### define TAG_DF8F16_LED_REGION_XCOORD

```
#define TAG_DF8F16_LED_REGION_XCOORD 0xDF8F16
```

Region upper left corner x-coordinate, parameter `xRegion` in [EMV_CTLS_LED_ConfigDesign()]()

### define TAG_DF8F17_LED_REGION_YCOORD

```
#define TAG_DF8F17_LED_REGION_YCOORD 0xDF8F17
```

Region upper left corner y-coordinate, parameter `yRegion` in [EMV_CTLS_LED_ConfigDesign()]()

### define TAG_DF8F18_LED_DESIGN_SHAPE

```
#define TAG_DF8F18_LED_DESIGN_SHAPE 0xDF8F18
```

Shape, parameter `shape` in [EMV_CTLS_LED_ConfigDesign_Extended()]()

### define TAG_DF8F19_LED_DESIGN_SHAPE_PARAM

```
#define TAG_DF8F19_LED_DESIGN_SHAPE_PARAM 0xDF8F19
```

Shape parameters, parameter `shape_params` in [EMV_CTLS_LED_ConfigDesign_Extended()]()

### define TAG_DF8F1A_LED_DESIGN_OPTIONS

```
#define TAG_DF8F1A_LED_DESIGN_OPTIONS 0xDF8F1A
```

options, parameter `options` in [EMV_CTLS_LED_ConfigDesign_Extended()]()

### define TAG_DF8F1B_LED_DESIGN_BG_COL

```
#define TAG_DF8F1B_LED_DESIGN_BG_COL 0xDF8F1B
```

background color, parameter `bg_color` in [EMV_CTLS_LED_ConfigDesign_Extended()]()

### define TAG_DF8F12_DISPLAY_TEXT

```
#define TAG_DF8F12_DISPLAY_TEXT 0xDF8F12
```

used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF14_CBK_TEXT_DISPLAY]()

### define TAG_DF8F13_UI_MSG_ID

```
#define TAG_DF8F13_UI_MSG_ID 0xDF8F13
```

EMVCo Book A UI request message id, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF14_CBK_TEXT_DISPLAY](). 

### define TAG_DF8F14_UI_MSG_ID_RESTART

```
#define TAG_DF8F14_UI_MSG_ID_RESTART 0xDF8F14
```

EMVCo Book A UI request message id for restart, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF14_CBK_TEXT_DISPLAY](). 

### define TAG_DF8F20_CTLS_CARD_TPYE

```
#define TAG_DF8F20_CTLS_CARD_TPYE 0xDF8F20
```

Detailed CTLS card type, available if a CTLS non EMV card is detected,. 



 VERTEX: always available, VFI reader: only available if [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) was started with [EMV_CTLS_START_TYPE::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes)

 Value follows the definitions of Verifone's "CTLS Interface Developers Guide": 

* 0 = None (Card Not Detected or Could Not Activate) 
* 1 = ISO 14443 Type A (Supports ISO 14443-4 Protocol) 
* 2 = ISO 14443 Type B (Supports ISO 14443-4 Protocol) 
* 3 = Mifare Type A (Standard) 
* 4 = Mifare Type A (Ultralight) 
* 5 = ISO 14443 Type A (Does not support ISO 14443-4 Protocol) 
* 6 = ISO 14443 Type B (Does not support ISO 14443-4 Protocol) 
* 7 = ISO 14443 Type A and Mifare (NFC phone) 
* 8 = ISO 14443 Type B and Mifare (NFC phone) 


### define TAG_DF8F21_CTLS_MIFARE_SN

```
#define TAG_DF8F21_CTLS_MIFARE_SN 0xDF8F21
```

Mifare Card Serial number, available if a CTLS non EMV card is detected AND the detected card turns our as Mifare AND the card incldues a serial number. 

### define TAG_DF8F30_REQUESTED_TAGS

```
#define TAG_DF8F30_REQUESTED_TAGS 0xDF8F30
```

for requestedTags parameter in [EMV_CTLS_fetchTxnTags()]()

### define TAG_DF8F40_VIRTUAL_TVR

```
#define TAG_DF8F40_VIRTUAL_TVR 0xDF8F40
```

   Also used for Epal to fetch internal kernel TVR (tag 95 is always forced to zero). 

TVR-like kernel info for schemes, which does not define TVR (e.g. Visa, China UnionPay). 


### define TAG_DF8F41_VISA_STATUS_BITMAP

```
#define TAG_DF8F41_VISA_STATUS_BITMAP 0xDF8F41
```

Visa Status Bitmap generated by Visa kernel on Transit Transaction, 3 bytes. 

### define TAG_DF8F42_DISCOVER_STATUS_BITMAP

```
#define TAG_DF8F42_DISCOVER_STATUS_BITMAP 0xDF8F42
```

Discover Status Bitmap generated by Discover Connect kernel, 4 bytes. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
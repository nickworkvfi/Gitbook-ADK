---
hidden: true
title: Three-byte-tagsGeneral topics » Serialization » BER TLV tags used by EMV ADK » Verifone internal tags
---

[Macros](#define-members)

Collaboration diagram for Three-byte-tags:

![](group___p_r_i_m___t_a_g_s__3_b_y_t_e.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_DF8F0A_EXIT_OPTIONS](#ga7809d602c4a9b6f1d35eac38754011fc)   0xDF8F0A |
|   | Options send with Exit_Framework, see <a href="group___e_x_i_t___f_w___o_p_t_i_o_n_s.md">Options for Exit Framework</a>. [More\...](#ga7809d602c4a9b6f1d35eac38754011fc)<br/> |
| #define  | [TAG_DF8F0B_TERM_FLOW_OPTIONS](#gad0e9f205f2fcb246b6c958150d8a6338)   0xDF8F0B |
|   | <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a347abf8f0129f37f17279ef981765674">EMV_CTLS_TERMDATA_STRUCT::FlowOptions</a>. [More\...](#gad0e9f205f2fcb246b6c958150d8a6338)<br/> |
| #define  | [TAG_DF8F0C_INIT_RESULT_FLAGS](#gaf3d1fb007cf86ad6f77f98b47c92a28d)   0xDF8F0C |
|   | Parameter `ulResult` in function <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework()</a>, respectively EMV_CTLS_Init_FrameworkClient() [More\...](#gaf3d1fb007cf86ad6f77f98b47c92a28d)<br/> |
| #define  | [TAG_DF8F0D_SETUP_RES_TRXINFO](#ga09cc2c6f9177f39a058659a665ef3ca6)   0xDF8F0D |
|   | <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a4c3b4d68baeb7717fc9788908b491929">EMV_CTLS_STARTRES_STRUCT::TxnInformation</a>. [More\...](#ga09cc2c6f9177f39a058659a665ef3ca6)<br/> |
| #define  | [TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT](#ga6a3a4411ca48ce2fe52c516dbeed0ebc)   0xDF8F0E |
|   | <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a3a9583914dda18129d8a82c8a1ebd679">EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit</a>. [More\...](#ga6a3a4411ca48ce2fe52c516dbeed0ebc)<br/> |
| #define  | [TAG_DF8F0F_APPLYCONFIG_OPTIONS](#ga47ee9ec331037ee05887cfa8889c76b2)   0xDF8F0F |
|   | Options send with <a href="group___f_u_n_c___c_o_n_f.md#gaa5352e4331b8fd16eaa02b1bbb7027c2">EMV_CTLS_ApplyConfiguration()</a>, unsigned long in functional interface, please use 4 byte in the serialization. [More\...](#ga47ee9ec331037ee05887cfa8889c76b2)<br/> |
| #define  | [TAG_DF8F10_LED_DESIGN_WIDTH](#gabddb29b906900dd6f383ae14e45158b5)   0xDF8F10 |
|   | LED width, parameter `width` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a> [More\...](#gabddb29b906900dd6f383ae14e45158b5)<br/> |
| #define  | [TAG_DF8F11_LED_DESIGN_HEIGHT](#gaacbe78ed95540d999b7824dc3986a2f0)   0xDF8F11 |
|   | LED height, parameter `height` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a> [More\...](#gaacbe78ed95540d999b7824dc3986a2f0)<br/> |
| #define  | [TAG_DF8F12_LED_DESIGN_OFF_COL](#ga37bfbd1b7197048b8d6a5a250899d225)   0xDF8F12 |
|   | color off LED when off, parameter `color_off` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a> [More\...](#ga37bfbd1b7197048b8d6a5a250899d225)<br/> |
| #define  | [TAG_DF8F13_LED_DESIGN_ON_COL](#ga407ccb23a0ce3a575fb2fdf5af749546)   0xDF8F13 |
|   | color off LED when on, parameter `color_on` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a> [More\...](#ga407ccb23a0ce3a575fb2fdf5af749546)<br/> |
| #define  | [TAG_DF8F14_LED_REGION_WIDTH](#ga6da3a481e01b60fe6261fcc8e4bd924a)   0xDF8F14 |
|   | Region width, parameter `wRegion` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a> [More\...](#ga6da3a481e01b60fe6261fcc8e4bd924a)<br/> |
| #define  | [TAG_DF8F15_LED_REGION_HEIGHT](#ga49f2a26e2885aaf85fa3e21eb151ffe3)   0xDF8F15 |
|   | Region height, parameter `hRegion` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a> [More\...](#ga49f2a26e2885aaf85fa3e21eb151ffe3)<br/> |
| #define  | [TAG_DF8F16_LED_REGION_XCOORD](#ga6833fe74f7fe5c38bfc532d1016936de)   0xDF8F16 |
|   | Region upper left corner x-coordinate, parameter `xRegion` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a> [More\...](#ga6833fe74f7fe5c38bfc532d1016936de)<br/> |
| #define  | [TAG_DF8F17_LED_REGION_YCOORD](#gaa542cecea81a37af42ac4dc2feca346e)   0xDF8F17 |
|   | Region upper left corner y-coordinate, parameter `yRegion` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a> [More\...](#gaa542cecea81a37af42ac4dc2feca346e)<br/> |
| #define  | [TAG_DF8F18_LED_DESIGN_SHAPE](#ga8f2738ad39431b3f7845f60ce91609e7)   0xDF8F18 |
|   | Shape, parameter `shape` in <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a> [More\...](#ga8f2738ad39431b3f7845f60ce91609e7)<br/> |
| #define  | [TAG_DF8F19_LED_DESIGN_SHAPE_PARAM](#gaf57957b82a976cc5eaa91946a9c8b609)   0xDF8F19 |
|   | Shape parameters, parameter `shape_params` in <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a> [More\...](#gaf57957b82a976cc5eaa91946a9c8b609)<br/> |
| #define  | [TAG_DF8F1A_LED_DESIGN_OPTIONS](#gaafba839ce0ca99fce079fa6b8a276215)   0xDF8F1A |
|   | options, parameter `options` in <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a> [More\...](#gaafba839ce0ca99fce079fa6b8a276215)<br/> |
| #define  | [TAG_DF8F1B_LED_DESIGN_BG_COL](#ga23f9dc5045772fb04fcbd0971bb343b3)   0xDF8F1B |
|   | background color, parameter `bg_color` in <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a> [More\...](#ga23f9dc5045772fb04fcbd0971bb343b3)<br/> |
| #define  | [TAG_DF8F12_DISPLAY_TEXT](#gaf08138de4ca9161fd3e04c927857275c)   0xDF8F12 |
|   | used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga694e27a1370530d36c245cc0cb2288bd">TAG_BF14_CBK_TEXT_DISPLAY</a> [More\...](#gaf08138de4ca9161fd3e04c927857275c)<br/> |
| #define  | [TAG_DF8F13_UI_MSG_ID](#ga16f8318678468a0229965cb44c6855e1)   0xDF8F13 |
|   | EMVCo Book A UI request message id, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga694e27a1370530d36c245cc0cb2288bd">TAG_BF14_CBK_TEXT_DISPLAY</a>. [More\...](#ga16f8318678468a0229965cb44c6855e1)<br/> |
| #define  | [TAG_DF8F14_UI_MSG_ID_RESTART](#ga3eaeac5f0914159a807f4838d20fae0b)   0xDF8F14 |
|   | EMVCo Book A UI request message id for restart, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga694e27a1370530d36c245cc0cb2288bd">TAG_BF14_CBK_TEXT_DISPLAY</a>. [More\...](#ga3eaeac5f0914159a807f4838d20fae0b)<br/> |
| #define  | [TAG_DF8F20_CTLS_CARD_TPYE](#gadfb6528a081a54ee72ab86165bf1dbfa)   0xDF8F20 |
|   | Detailed CTLS card type, available if a CTLS non EMV card is detected,. [More\...](#gadfb6528a081a54ee72ab86165bf1dbfa)<br/> |
| #define  | [TAG_DF8F21_CTLS_MIFARE_SN](#ga963df2db97422cae015c3149815b7a20)   0xDF8F21 |
|   | Mifare Card Serial number, available if a CTLS non EMV card is detected AND the detected card turns our as Mifare AND the card incldues a serial number. [More\...](#ga963df2db97422cae015c3149815b7a20)<br/> |
| #define  | [TAG_DF8F30_REQUESTED_TAGS](#ga8de6a518ec47d3e50b97922c8a528be4)   0xDF8F30 |
|   | for requestedTags parameter in <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> [More\...](#ga8de6a518ec47d3e50b97922c8a528be4)<br/> |
| #define  | [TAG_DF8F40_VIRTUAL_TVR](#ga3b0e2d661287e04cdfa1f280145ef333)   0xDF8F40 |
|   | <br/>Also used for Epal to fetch internal kernel TVR (tag 95 is always forced to zero). [More\...](#ga3b0e2d661287e04cdfa1f280145ef333)<br/> |
| #define  | [TAG_DF8F41_VISA_STATUS_BITMAP](#ga0b7acd76b69c2cb2eaecda27cc477589)   0xDF8F41 |
|   | Visa Status Bitmap generated by Visa kernel on Transit Transaction, 3 bytes. [More\...](#ga0b7acd76b69c2cb2eaecda27cc477589)<br/> |
| #define  | [TAG_DF8F42_DISCOVER_STATUS_BITMAP](#ga99601e9f7320ad48de08f1f6c6de2f4c)   0xDF8F42 |
|   | Discover Status Bitmap generated by Discover Connect kernel, 4 bytes. [More\...](#ga99601e9f7320ad48de08f1f6c6de2f4c)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_DF8F0A_EXIT_OPTIONS <a href="#ga7809d602c4a9b6f1d35eac38754011fc" id="ga7809d602c4a9b6f1d35eac38754011fc"></a>

<p>#define TAG_DF8F0A_EXIT_OPTIONS   0xDF8F0A</p>

Options send with Exit_Framework, see <a href="group___e_x_i_t___f_w___o_p_t_i_o_n_s.md">Options for Exit Framework</a>.

## TAG_DF8F0B_TERM_FLOW_OPTIONS <a href="#gad0e9f205f2fcb246b6c958150d8a6338" id="gad0e9f205f2fcb246b6c958150d8a6338"></a>

<p>#define TAG_DF8F0B_TERM_FLOW_OPTIONS   0xDF8F0B</p>

<a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a347abf8f0129f37f17279ef981765674">EMV_CTLS_TERMDATA_STRUCT::FlowOptions</a>.

## TAG_DF8F0C_INIT_RESULT_FLAGS <a href="#gaf3d1fb007cf86ad6f77f98b47c92a28d" id="gaf3d1fb007cf86ad6f77f98b47c92a28d"></a>

<p>#define TAG_DF8F0C_INIT_RESULT_FLAGS   0xDF8F0C</p>

Parameter `ulResult` in function <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework()</a>, respectively EMV_CTLS_Init_FrameworkClient()

## TAG_DF8F0D_SETUP_RES_TRXINFO <a href="#ga09cc2c6f9177f39a058659a665ef3ca6" id="ga09cc2c6f9177f39a058659a665ef3ca6"></a>

<p>#define TAG_DF8F0D_SETUP_RES_TRXINFO   0xDF8F0D</p>

<a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a4c3b4d68baeb7717fc9788908b491929">EMV_CTLS_STARTRES_STRUCT::TxnInformation</a>.

## TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT <a href="#ga6a3a4411ca48ce2fe52c516dbeed0ebc" id="ga6a3a4411ca48ce2fe52c516dbeed0ebc"></a>

<p>#define TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT   0xDF8F0E</p>

<a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a3a9583914dda18129d8a82c8a1ebd679">EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit</a>.

## TAG_DF8F0F_APPLYCONFIG_OPTIONS <a href="#ga47ee9ec331037ee05887cfa8889c76b2" id="ga47ee9ec331037ee05887cfa8889c76b2"></a>

<p>#define TAG_DF8F0F_APPLYCONFIG_OPTIONS   0xDF8F0F</p>

Options send with <a href="group___f_u_n_c___c_o_n_f.md#gaa5352e4331b8fd16eaa02b1bbb7027c2">EMV_CTLS_ApplyConfiguration()</a>, unsigned long in functional interface, please use 4 byte in the serialization.

## TAG_DF8F10_LED_DESIGN_WIDTH <a href="#gabddb29b906900dd6f383ae14e45158b5" id="gabddb29b906900dd6f383ae14e45158b5"></a>

<p>#define TAG_DF8F10_LED_DESIGN_WIDTH   0xDF8F10</p>

LED width, parameter `width` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a>

## TAG_DF8F11_LED_DESIGN_HEIGHT <a href="#gaacbe78ed95540d999b7824dc3986a2f0" id="gaacbe78ed95540d999b7824dc3986a2f0"></a>

<p>#define TAG_DF8F11_LED_DESIGN_HEIGHT   0xDF8F11</p>

LED height, parameter `height` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a>

## TAG_DF8F12_DISPLAY_TEXT <a href="#gaf08138de4ca9161fd3e04c927857275c" id="gaf08138de4ca9161fd3e04c927857275c"></a>

<p>#define TAG_DF8F12_DISPLAY_TEXT   0xDF8F12</p>

used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga694e27a1370530d36c245cc0cb2288bd">TAG_BF14_CBK_TEXT_DISPLAY</a>

## TAG_DF8F12_LED_DESIGN_OFF_COL <a href="#ga37bfbd1b7197048b8d6a5a250899d225" id="ga37bfbd1b7197048b8d6a5a250899d225"></a>

<p>#define TAG_DF8F12_LED_DESIGN_OFF_COL   0xDF8F12</p>

color off LED when off, parameter `color_off` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a>

## TAG_DF8F13_LED_DESIGN_ON_COL <a href="#ga407ccb23a0ce3a575fb2fdf5af749546" id="ga407ccb23a0ce3a575fb2fdf5af749546"></a>

<p>#define TAG_DF8F13_LED_DESIGN_ON_COL   0xDF8F13</p>

color off LED when on, parameter `color_on` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a>

## TAG_DF8F13_UI_MSG_ID <a href="#ga16f8318678468a0229965cb44c6855e1" id="ga16f8318678468a0229965cb44c6855e1"></a>

<p>#define TAG_DF8F13_UI_MSG_ID   0xDF8F13</p>

EMVCo Book A UI request message id, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga694e27a1370530d36c245cc0cb2288bd">TAG_BF14_CBK_TEXT_DISPLAY</a>.

## TAG_DF8F14_LED_REGION_WIDTH <a href="#ga6da3a481e01b60fe6261fcc8e4bd924a" id="ga6da3a481e01b60fe6261fcc8e4bd924a"></a>

<p>#define TAG_DF8F14_LED_REGION_WIDTH   0xDF8F14</p>

Region width, parameter `wRegion` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a>

## TAG_DF8F14_UI_MSG_ID_RESTART <a href="#ga3eaeac5f0914159a807f4838d20fae0b" id="ga3eaeac5f0914159a807f4838d20fae0b"></a>

<p>#define TAG_DF8F14_UI_MSG_ID_RESTART   0xDF8F14</p>

EMVCo Book A UI request message id for restart, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga694e27a1370530d36c245cc0cb2288bd">TAG_BF14_CBK_TEXT_DISPLAY</a>.

## TAG_DF8F15_LED_REGION_HEIGHT <a href="#ga49f2a26e2885aaf85fa3e21eb151ffe3" id="ga49f2a26e2885aaf85fa3e21eb151ffe3"></a>

<p>#define TAG_DF8F15_LED_REGION_HEIGHT   0xDF8F15</p>

Region height, parameter `hRegion` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a>

## TAG_DF8F16_LED_REGION_XCOORD <a href="#ga6833fe74f7fe5c38bfc532d1016936de" id="ga6833fe74f7fe5c38bfc532d1016936de"></a>

<p>#define TAG_DF8F16_LED_REGION_XCOORD   0xDF8F16</p>

Region upper left corner x-coordinate, parameter `xRegion` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a>

## TAG_DF8F17_LED_REGION_YCOORD <a href="#gaa542cecea81a37af42ac4dc2feca346e" id="gaa542cecea81a37af42ac4dc2feca346e"></a>

<p>#define TAG_DF8F17_LED_REGION_YCOORD   0xDF8F17</p>

Region upper left corner y-coordinate, parameter `yRegion` in <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign()</a>

## TAG_DF8F18_LED_DESIGN_SHAPE <a href="#ga8f2738ad39431b3f7845f60ce91609e7" id="ga8f2738ad39431b3f7845f60ce91609e7"></a>

<p>#define TAG_DF8F18_LED_DESIGN_SHAPE   0xDF8F18</p>

Shape, parameter `shape` in <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a>

## TAG_DF8F19_LED_DESIGN_SHAPE_PARAM <a href="#gaf57957b82a976cc5eaa91946a9c8b609" id="gaf57957b82a976cc5eaa91946a9c8b609"></a>

<p>#define TAG_DF8F19_LED_DESIGN_SHAPE_PARAM   0xDF8F19</p>

Shape parameters, parameter `shape_params` in <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a>

## TAG_DF8F1A_LED_DESIGN_OPTIONS <a href="#gaafba839ce0ca99fce079fa6b8a276215" id="gaafba839ce0ca99fce079fa6b8a276215"></a>

<p>#define TAG_DF8F1A_LED_DESIGN_OPTIONS   0xDF8F1A</p>

options, parameter `options` in <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a>

## TAG_DF8F1B_LED_DESIGN_BG_COL <a href="#ga23f9dc5045772fb04fcbd0971bb343b3" id="ga23f9dc5045772fb04fcbd0971bb343b3"></a>

<p>#define TAG_DF8F1B_LED_DESIGN_BG_COL   0xDF8F1B</p>

background color, parameter `bg_color` in <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a>

## TAG_DF8F20_CTLS_CARD_TPYE <a href="#gadfb6528a081a54ee72ab86165bf1dbfa" id="gadfb6528a081a54ee72ab86165bf1dbfa"></a>

<p>#define TAG_DF8F20_CTLS_CARD_TPYE   0xDF8F20</p>

Detailed CTLS card type, available if a CTLS non EMV card is detected,.

VERTEX: always available, VFI reader: only available if <a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline()</a> was started with <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a6e4c160c32a77b556aa14495cc0961c5">EMV_CTLS_START_TYPE::passthroughCardTypes</a>
Value follows the definitions of Verifone\'s \"CTLS Interface Developers Guide\":

- 0 = None (Card Not Detected or Could Not Activate)
- 1 = ISO 14443 Type A (Supports ISO 14443-4 Protocol)
- 2 = ISO 14443 Type B (Supports ISO 14443-4 Protocol)
- 3 = Mifare Type A (Standard)
- 4 = Mifare Type A (Ultralight)
- 5 = ISO 14443 Type A (Does not support ISO 14443-4 Protocol)
- 6 = ISO 14443 Type B (Does not support ISO 14443-4 Protocol)
- 7 = ISO 14443 Type A and Mifare (NFC phone)
- 8 = ISO 14443 Type B and Mifare (NFC phone)

## TAG_DF8F21_CTLS_MIFARE_SN <a href="#ga963df2db97422cae015c3149815b7a20" id="ga963df2db97422cae015c3149815b7a20"></a>

<p>#define TAG_DF8F21_CTLS_MIFARE_SN   0xDF8F21</p>

Mifare Card Serial number, available if a CTLS non EMV card is detected AND the detected card turns our as Mifare AND the card incldues a serial number.

## TAG_DF8F30_REQUESTED_TAGS <a href="#ga8de6a518ec47d3e50b97922c8a528be4" id="ga8de6a518ec47d3e50b97922c8a528be4"></a>

<p>#define TAG_DF8F30_REQUESTED_TAGS   0xDF8F30</p>

for requestedTags parameter in <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a>

## TAG_DF8F40_VIRTUAL_TVR <a href="#ga3b0e2d661287e04cdfa1f280145ef333" id="ga3b0e2d661287e04cdfa1f280145ef333"></a>

<p>#define TAG_DF8F40_VIRTUAL_TVR   0xDF8F40</p>

Also used for Epal to fetch internal kernel TVR (tag 95 is always forced to zero).

TVR-like kernel info for schemes, which does not define TVR (e.g. Visa, China UnionPay).

## TAG_DF8F41_VISA_STATUS_BITMAP <a href="#ga0b7acd76b69c2cb2eaecda27cc477589" id="ga0b7acd76b69c2cb2eaecda27cc477589"></a>

<p>#define TAG_DF8F41_VISA_STATUS_BITMAP   0xDF8F41</p>

Visa Status Bitmap generated by Visa kernel on Transit Transaction, 3 bytes.

## TAG_DF8F42_DISCOVER_STATUS_BITMAP <a href="#ga99601e9f7320ad48de08f1f6c6de2f4c" id="ga99601e9f7320ad48de08f1f6c6de2f4c"></a>

<p>#define TAG_DF8F42_DISCOVER_STATUS_BITMAP   0xDF8F42</p>

Discover Status Bitmap generated by Discover Connect kernel, 4 bytes.

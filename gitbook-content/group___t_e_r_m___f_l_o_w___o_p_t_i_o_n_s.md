---
hidden: true
title: "Terminal configuration: Collection of flow optionsConfiguration » Terminal Data"
---

[Macros](#define-members)

Contents of the <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a347abf8f0129f37f17279ef981765674">EMV_CTLS_TERMDATA_STRUCT::FlowOptions</a>. [More\...](#details)

Collaboration diagram for Terminal configuration: Collection of flow options:

![](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE](#gabf31745f2f19c5f982a10f8a313832ea)   0x01 |
|   | B1b1: Support for Visa wave<br/>for VFI reader or enabling Raptor VISA AP kernel (PDOL decision)<br/>Info: VFI reader tag DF64, 1FF0 and others - This feature is not configurable per AID only global. [More\...](#gabf31745f2f19c5f982a10f8a313832ea)<br/> |
| #define  | [INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET](#gab37f0552224ab596bf5a58fa529baf45)   0x02 |
|   | B1b2: Support for Amex EMV or NON EMV market<br/>Map to Byte2 BIT1 of Contactless Kernel Options(1FF0)<br/>Info: VFI reader tag 1FF0 - This feature is not configurable per AID only global. [More\...](#gab37f0552224ab596bf5a58fa529baf45)<br/> |
| #define  | [INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT](#gab76a9e8e1c16629067e6c5ec8296636a)   0x04 |
|   | B1b3: VFI reader only: Use reader\'s UI scheme \"default\", as standard \"EMEA\" is used.<br/>Visa Europe tests will fail if this is activated. But it\'s needed for display callback \"L1 error\" (<a href="group___a_p_p_l_i___t_e_x_t_s.md#ga8bb77717dbe26d78fb082d5a91d9bb3c">EMV_ADK_TXT_RETAP_SAME_L1</a>) [More\...](#gab76a9e8e1c16629067e6c5ec8296636a)<br/> |
| #define  | [INPUT_CTLS_TRM_IFD_SERIAL_USE_TID](#gae87e8c7742de78f74973babf687a0ecb)   0x08 |
|   | B1b4: Use the TID as IFD Serial number. Background: If application can not provide IFD_Serial this can be used as replacement to have a unique value available (not for VFI-Reader). [More\...](#gae87e8c7742de78f74973babf687a0ecb)<br/> |
| #define  | [INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE](#ga0c2b5ce8b4271a0c59fa530474f5ed4b)   0x10 |
|   | B1b5: Switch off Visa Europe work around for LED2. This option is like INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT but for VERTEX. [More\...](#ga0c2b5ce8b4271a0c59fa530474f5ed4b)<br/> |
| #define  | [INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2](#ga2c5f919832e3ec1d5c5054291b27191c)   0x20 |
|   | B1b6: Use LED scheme option 2 as defined in Entry Point spec \[EMV BB\]. Coloured LEDs similar to Visa Wave 2 (Visa Asia Pacific). For LED configuration see <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a>. [More\...](#ga2c5f919832e3ec1d5c5054291b27191c)<br/> |
| #define  | [INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC](#ga51476014d19340841fdf92369dd538ff)   0x40 |
|   | B1b7: Use LED blinking scheme for Interac (Canada) [More\...](#ga51476014d19340841fdf92369dd538ff)<br/> |
| #define  | [INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL](#ga0a42b49696f769bb600ab13e08d4a09b)   0x80 |
|   | B1b8: VFI Reader final scenario \"Fail\" is forwarded to the application by returning EMV_ADK_VFI_FAIL instead of per default EMV_ADK_AAC. Additionnally the ADK provides the SW12 in T_DF64_KernelDebugData\[0\]&\[1\], VFI Reader Error Code in T_DF64_KernelDebugData\[3\], and VFI Reader RF State Code in T_DF64_KernelDebugData\[30\]. [More\...](#ga0a42b49696f769bb600ab13e08d4a09b)<br/> |
| #define  | [INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK](#ga7f2064836610d8c8a4acb54b4912c021)   0x01 |
|   | B2b1: VFI Reader only: Disable the check according to D-PAS 1.0 Bulletin TAS-002 v1.0 which requires to consider the legacy Discover ZIP application as mandatory on any card/phone with the Discover/Diners D-PAS AID, and to reject the card if ZIP is not present. [More\...](#ga7f2064836610d8c8a4acb54b4912c021)<br/> |

## DetailedDescription {#detailed-description}

Contents of the <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a347abf8f0129f37f17279ef981765674">EMV_CTLS_TERMDATA_STRUCT::FlowOptions</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET <a href="#gab37f0552224ab596bf5a58fa529baf45" id="gab37f0552224ab596bf5a58fa529baf45"></a>

<p>#define INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET   0x02</p>

B1b2: Support for Amex EMV or NON EMV market
Map to Byte2 BIT1 of Contactless Kernel Options(1FF0)
Info: VFI reader tag 1FF0 - This feature is not configurable per AID only global.

## INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK <a href="#ga7f2064836610d8c8a4acb54b4912c021" id="ga7f2064836610d8c8a4acb54b4912c021"></a>

<p>#define INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK   0x01</p>

B2b1: VFI Reader only: Disable the check according to D-PAS 1.0 Bulletin TAS-002 v1.0 which requires to consider the legacy Discover ZIP application as mandatory on any card/phone with the Discover/Diners D-PAS AID, and to reject the card if ZIP is not present.

## INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL <a href="#ga0a42b49696f769bb600ab13e08d4a09b" id="ga0a42b49696f769bb600ab13e08d4a09b"></a>

<p>#define INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL   0x80</p>

B1b8: VFI Reader final scenario \"Fail\" is forwarded to the application by returning EMV_ADK_VFI_FAIL instead of per default EMV_ADK_AAC. Additionnally the ADK provides the SW12 in T_DF64_KernelDebugData\[0\]&\[1\], VFI Reader Error Code in T_DF64_KernelDebugData\[3\], and VFI Reader RF State Code in T_DF64_KernelDebugData\[30\].

## INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2 <a href="#ga2c5f919832e3ec1d5c5054291b27191c" id="ga2c5f919832e3ec1d5c5054291b27191c"></a>

<p>#define INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2   0x20</p>

B1b6: Use LED scheme option 2 as defined in Entry Point spec \[EMV BB\]. Coloured LEDs similar to Visa Wave 2 (Visa Asia Pacific). For LED configuration see <a href="group___a_d_k___l_e_d.md#ga8b647b4c8f995795b250bd2df10c2796">EMV_CTLS_LED_ConfigDesign_Extended()</a>.

## INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC <a href="#ga51476014d19340841fdf92369dd538ff" id="ga51476014d19340841fdf92369dd538ff"></a>

<p>#define INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC   0x40</p>

B1b7: Use LED blinking scheme for Interac (Canada)

## INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE <a href="#ga0c2b5ce8b4271a0c59fa530474f5ed4b" id="ga0c2b5ce8b4271a0c59fa530474f5ed4b"></a>

<p>#define INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE   0x10</p>

B1b5: Switch off Visa Europe work around for LED2. This option is like INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT but for VERTEX.

## INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT <a href="#gab76a9e8e1c16629067e6c5ec8296636a" id="gab76a9e8e1c16629067e6c5ec8296636a"></a>

<p>#define INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT   0x04</p>

B1b3: VFI reader only: Use reader\'s UI scheme \"default\", as standard \"EMEA\" is used.
Visa Europe tests will fail if this is activated. But it\'s needed for display callback \"L1 error\" (<a href="group___a_p_p_l_i___t_e_x_t_s.md#ga8bb77717dbe26d78fb082d5a91d9bb3c">EMV_ADK_TXT_RETAP_SAME_L1</a>)

## INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE <a href="#gabf31745f2f19c5f982a10f8a313832ea" id="gabf31745f2f19c5f982a10f8a313832ea"></a>

<p>#define INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE   0x01</p>

B1b1: Support for Visa wave
for VFI reader or enabling Raptor VISA AP kernel (PDOL decision)
Info: VFI reader tag DF64, 1FF0 and others - This feature is not configurable per AID only global.

## INPUT_CTLS_TRM_IFD_SERIAL_USE_TID <a href="#gae87e8c7742de78f74973babf687a0ecb" id="gae87e8c7742de78f74973babf687a0ecb"></a>

<p>#define INPUT_CTLS_TRM_IFD_SERIAL_USE_TID   0x08</p>

B1b4: Use the TID as IFD Serial number. Background: If application can not provide IFD_Serial this can be used as replacement to have a unique value available (not for VFI-Reader).

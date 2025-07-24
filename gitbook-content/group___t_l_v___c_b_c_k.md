---
hidden: true
title: TLV tags for callback functionsGeneral topics » Serialization » BER TLV tags used by EMV ADK » Verifone internal tags » Primitive tags
---

[Modules](#groups) \| [Macros](#define-members)

Used in function EMV_CallbackFunction() [More\...](#details)

Collaboration diagram for TLV tags for callback functions:

![](group___t_l_v___c_b_c_k.png)

|  |  |
|----|----|
| Modules |  |
|   | <a href="group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md">LED callback: Additional information</a> |
|   | Additional information for LED switching, used for [TAG_DF8F60_LED_ADD_INFO](#ga49b42df1c0b4c78b9e954b1c24aa8e3d "LED callback TAG_BF10_CTLS_CBK_LEDS: Additional information, see LED callback: Additional information...").<br/> |

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_DF75_CBK_APP_NO](#ga48500ab87c68d9e4042ba3420393e7bc)   0xDF75 |
|   | If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list<br/>index is 1-based (1=first, 2=second, \...)<br/>also see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a>. [More\...](#ga48500ab87c68d9e4042ba3420393e7bc)<br/> |
| #define  | [TAG_DF76_CBK_APP_POSTPROC](#ga0660b592558683068d51d05ee1673f15)   0xDF76 |
|   | Decide if post processing for the candidates applies (longest match, priority application, \...) or not<br/>(1 byte, 1=TRUE/0=FALSE)<br/>not supported for VFI reader<br/>see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a>. [More\...](#ga0660b592558683068d51d05ee1673f15)<br/> |
| #define  | [TAG_DF6C_CBK_REPEAT](#ga6951c652d92531826b367791f40c35a6)   0xDF6C |
|   | Decide if ADK should repeat the callback call or not<br/>(1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat<br/>see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a>. [More\...](#ga6951c652d92531826b367791f40c35a6)<br/> |
| #define  | [TAG_DF7E_KERNEL_TO_USE](#gab8411e36258d5c7d3291e9ea22e17863)   0xDF7E |
|   | Set which Kernel should be used. [More\...](#gab8411e36258d5c7d3291e9ea22e17863)<br/> |
| #define  | [TAG_DF7F_CBK_COMM_ERR](#ga4f60c8e0ba68025a32ff0c793c13c5f5)   0xDF7F |
|   | During execution of callback function a communication error occured.<br/>Indicator to be set by calling application (1 byte TRUE/FALSE value).<br/>Will result in abort of transaction (<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>) [More\...](#ga4f60c8e0ba68025a32ff0c793c13c5f5)<br/> |
| #define  | [TAG_DF8F58_DE_REQUEST](#ga39a89f82a43d278d55f4a30ef988428d)   0xDF8F58 |
|   | DataExchange, type of request <a href="group___c_b_c_k___d_e___r_e_q_u_e_s_t.md">Options for DataExchange request</a>, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>. [More\...](#ga39a89f82a43d278d55f4a30ef988428d)<br/> |
| #define  | [TAG_DF8F59_DE_STATE](#ga350252d0754af29e65491c61efafd681)   0xDF8F59 |
|   | DataExchange, kernel state <a href="group___c_b_c_k___d_e___s_t_a_t_e.md">Options for DataExchange state</a>, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>. [More\...](#ga350252d0754af29e65491c61efafd681)<br/> |
| #define  | [TAG_DF8F5A_DE_MODE](#gaa5adbd002c7e040e248be3fb7fe7f5ad)   0xDF8F5A |
|   | DataExchange, mode <a href="group___c_b_c_k___d_e___m_o_d_e.md">Options for DataExchange mode</a>, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>. [More\...](#gaa5adbd002c7e040e248be3fb7fe7f5ad)<br/> |
| #define  | [TAG_DF8F50_RUPAY_GPO](#gad48383e6581198120c73814045b1a61a)   0xDF8F50 |
|   | RuPay DataExchange service shortlist before GPO, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gac2ac8ae81521b54bfa5abf043b323916">TAG_BF16_CBK_SERVICE_SHORTLIST</a>. [More\...](#gad48383e6581198120c73814045b1a61a)<br/> |
| #define  | [TAG_DF8F51_RUPAY_GENAC](#gad69547ab3e017ea8fbf40aecc8bfec7a)   0xDF8F51 |
|   | RuPay DataExchange Rupay additional CDOL Parameters, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gae0841093e4002162f3eebdd567efdbdf">TAG_BF17_CBK_SERVICE_FOR_GENAC</a>. [More\...](#gad69547ab3e017ea8fbf40aecc8bfec7a)<br/> |
| #define  | [TAG_DF8F60_LED_ADD_INFO](#ga49b42df1c0b4c78b9e954b1c24aa8e3d)   0xDF8F60 |
|   | LED callback <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga1ed48d32ca46560f8dacd954fc485bcf">TAG_BF10_CTLS_CBK_LEDS</a>: Additional information, see <a href="group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md">LED callback: Additional information</a>. [More\...](#ga49b42df1c0b4c78b9e954b1c24aa8e3d)<br/> |
| #define  | [TAG_DF8010_DE_REQUEST](#gacc4ea38b9f0e534b6e7f0557b940a8e7)   [TAG_DF8F58_DE_REQUEST](#ga39a89f82a43d278d55f4a30ef988428d) |
| #define  | [TAG_DF8011_DE_STATE](#gaef6750de64554639092bcec2fa989d46)   [TAG_DF8F59_DE_STATE](#ga350252d0754af29e65491c61efafd681) |
| #define  | [TAG_DF8012_DE_MODE](#ga4c885ee5ec157ba6e748070e562e50df)   [TAG_DF8F5A_DE_MODE](#gaa5adbd002c7e040e248be3fb7fe7f5ad) |
| #define  | [TAG_DF8020_RUPAY_GPO](#ga7017b26b4fe864c69d626ac33612f20d)   [TAG_DF8F50_RUPAY_GPO](#gad48383e6581198120c73814045b1a61a) |
| #define  | [TAG_DF8021_RUPAY_GENAC](#ga160216f35fb57d780609b3684057aa7b)   [TAG_DF8F51_RUPAY_GENAC](#gad69547ab3e017ea8fbf40aecc8bfec7a) |
| #define  | [TAG_DF8030_LED_ADD_INFO](#ga63e4679e18027c50563fa8856a2dd04a)   [TAG_DF8F60_LED_ADD_INFO](#ga49b42df1c0b4c78b9e954b1c24aa8e3d) |

## DetailedDescription {#detailed-description}

Used in function EMV_CallbackFunction()

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_DF6C_CBK_REPEAT <a href="#ga6951c652d92531826b367791f40c35a6" id="ga6951c652d92531826b367791f40c35a6"></a>

<p>#define TAG_DF6C_CBK_REPEAT   0xDF6C</p>

Decide if ADK should repeat the callback call or not
(1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat
see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a>.

## TAG_DF75_CBK_APP_NO <a href="#ga48500ab87c68d9e4042ba3420393e7bc" id="ga48500ab87c68d9e4042ba3420393e7bc"></a>

<p>#define TAG_DF75_CBK_APP_NO   0xDF75</p>

If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list
index is 1-based (1=first, 2=second, \...)
also see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a>.

## TAG_DF76_CBK_APP_POSTPROC <a href="#ga0660b592558683068d51d05ee1673f15" id="ga0660b592558683068d51d05ee1673f15"></a>

<p>#define TAG_DF76_CBK_APP_POSTPROC   0xDF76</p>

Decide if post processing for the candidates applies (longest match, priority application, \...) or not
(1 byte, 1=TRUE/0=FALSE)
not supported for VFI reader
see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a>.

## TAG_DF7E_KERNEL_TO_USE <a href="#gab8411e36258d5c7d3291e9ea22e17863" id="gab8411e36258d5c7d3291e9ea22e17863"></a>

<p>#define TAG_DF7E_KERNEL_TO_USE   0xDF7E</p>

Set which Kernel should be used.

## TAG_DF7F_CBK_COMM_ERR <a href="#ga4f60c8e0ba68025a32ff0c793c13c5f5" id="ga4f60c8e0ba68025a32ff0c793c13c5f5"></a>

<p>#define TAG_DF7F_CBK_COMM_ERR   0xDF7F</p>

During execution of callback function a communication error occured.
Indicator to be set by calling application (1 byte TRUE/FALSE value).
Will result in abort of transaction (<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>)

## TAG_DF8010_DE_REQUEST <a href="#gacc4ea38b9f0e534b6e7f0557b940a8e7" id="gacc4ea38b9f0e534b6e7f0557b940a8e7"></a>

<p>#define TAG_DF8010_DE_REQUEST   [TAG_DF8F58_DE_REQUEST](#ga39a89f82a43d278d55f4a30ef988428d)</p>

**<a href="deprecated.md#_deprecated000036">Deprecated:</a>** use [TAG_DF8F58_DE_REQUEST](#ga39a89f82a43d278d55f4a30ef988428d "DataExchange, type of request Options for DataExchange request, used in EMV_CTLS_CALLBACK_FnT,...") instead

## TAG_DF8011_DE_STATE <a href="#gaef6750de64554639092bcec2fa989d46" id="gaef6750de64554639092bcec2fa989d46"></a>

<p>#define TAG_DF8011_DE_STATE   [TAG_DF8F59_DE_STATE](#ga350252d0754af29e65491c61efafd681)</p>

**<a href="deprecated.md#_deprecated000037">Deprecated:</a>** use [TAG_DF8F59_DE_STATE](#ga350252d0754af29e65491c61efafd681 "DataExchange, kernel state Options for DataExchange state, used in EMV_CTLS_CALLBACK_FnT,...") instead

## TAG_DF8012_DE_MODE <a href="#ga4c885ee5ec157ba6e748070e562e50df" id="ga4c885ee5ec157ba6e748070e562e50df"></a>

<p>#define TAG_DF8012_DE_MODE   [TAG_DF8F5A_DE_MODE](#gaa5adbd002c7e040e248be3fb7fe7f5ad)</p>

**<a href="deprecated.md#_deprecated000038">Deprecated:</a>** use [TAG_DF8F5A_DE_MODE](#gaa5adbd002c7e040e248be3fb7fe7f5ad "DataExchange, mode Options for DataExchange mode, used in EMV_CTLS_CALLBACK_FnT, TAG_BF0E_CBK_DATA_EX...") instead

## TAG_DF8020_RUPAY_GPO <a href="#ga7017b26b4fe864c69d626ac33612f20d" id="ga7017b26b4fe864c69d626ac33612f20d"></a>

<p>#define TAG_DF8020_RUPAY_GPO   [TAG_DF8F50_RUPAY_GPO](#gad48383e6581198120c73814045b1a61a)</p>

**<a href="deprecated.md#_deprecated000039">Deprecated:</a>** use [TAG_DF8F50_RUPAY_GPO](#gad48383e6581198120c73814045b1a61a "RuPay DataExchange service shortlist before GPO, used in EMV_CTLS_CALLBACK_FnT, TAG_BF16_CBK_SERVICE_...") instead

## TAG_DF8021_RUPAY_GENAC <a href="#ga160216f35fb57d780609b3684057aa7b" id="ga160216f35fb57d780609b3684057aa7b"></a>

<p>#define TAG_DF8021_RUPAY_GENAC   [TAG_DF8F51_RUPAY_GENAC](#gad69547ab3e017ea8fbf40aecc8bfec7a)</p>

**<a href="deprecated.md#_deprecated000040">Deprecated:</a>** use [TAG_DF8F51_RUPAY_GENAC](#gad69547ab3e017ea8fbf40aecc8bfec7a "RuPay DataExchange Rupay additional CDOL Parameters, used in EMV_CTLS_CALLBACK_FnT,...") instead

## TAG_DF8030_LED_ADD_INFO <a href="#ga63e4679e18027c50563fa8856a2dd04a" id="ga63e4679e18027c50563fa8856a2dd04a"></a>

<p>#define TAG_DF8030_LED_ADD_INFO   [TAG_DF8F60_LED_ADD_INFO](#ga49b42df1c0b4c78b9e954b1c24aa8e3d)</p>

**<a href="deprecated.md#_deprecated000041">Deprecated:</a>** use [TAG_DF8F60_LED_ADD_INFO](#ga49b42df1c0b4c78b9e954b1c24aa8e3d "LED callback TAG_BF10_CTLS_CBK_LEDS: Additional information, see LED callback: Additional information...") instead

## TAG_DF8F50_RUPAY_GPO <a href="#gad48383e6581198120c73814045b1a61a" id="gad48383e6581198120c73814045b1a61a"></a>

<p>#define TAG_DF8F50_RUPAY_GPO   0xDF8F50</p>

RuPay DataExchange service shortlist before GPO, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gac2ac8ae81521b54bfa5abf043b323916">TAG_BF16_CBK_SERVICE_SHORTLIST</a>.

## TAG_DF8F51_RUPAY_GENAC <a href="#gad69547ab3e017ea8fbf40aecc8bfec7a" id="gad69547ab3e017ea8fbf40aecc8bfec7a"></a>

<p>#define TAG_DF8F51_RUPAY_GENAC   0xDF8F51</p>

RuPay DataExchange Rupay additional CDOL Parameters, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gae0841093e4002162f3eebdd567efdbdf">TAG_BF17_CBK_SERVICE_FOR_GENAC</a>.

## TAG_DF8F58_DE_REQUEST <a href="#ga39a89f82a43d278d55f4a30ef988428d" id="ga39a89f82a43d278d55f4a30ef988428d"></a>

<p>#define TAG_DF8F58_DE_REQUEST   0xDF8F58</p>

DataExchange, type of request <a href="group___c_b_c_k___d_e___r_e_q_u_e_s_t.md">Options for DataExchange request</a>, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>.

## TAG_DF8F59_DE_STATE <a href="#ga350252d0754af29e65491c61efafd681" id="ga350252d0754af29e65491c61efafd681"></a>

<p>#define TAG_DF8F59_DE_STATE   0xDF8F59</p>

DataExchange, kernel state <a href="group___c_b_c_k___d_e___s_t_a_t_e.md">Options for DataExchange state</a>, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>.

## TAG_DF8F5A_DE_MODE <a href="#gaa5adbd002c7e040e248be3fb7fe7f5ad" id="gaa5adbd002c7e040e248be3fb7fe7f5ad"></a>

<p>#define TAG_DF8F5A_DE_MODE   0xDF8F5A</p>

DataExchange, mode <a href="group___c_b_c_k___d_e___m_o_d_e.md">Options for DataExchange mode</a>, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>.

## TAG_DF8F60_LED_ADD_INFO <a href="#ga49b42df1c0b4c78b9e954b1c24aa8e3d" id="ga49b42df1c0b4c78b9e954b1c24aa8e3d"></a>

<p>#define TAG_DF8F60_LED_ADD_INFO   0xDF8F60</p>

LED callback <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga1ed48d32ca46560f8dacd954fc485bcf">TAG_BF10_CTLS_CBK_LEDS</a>: Additional information, see <a href="group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md">LED callback: Additional information</a>.

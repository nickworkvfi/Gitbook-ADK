---
hidden: true
title: Options for contactless transaction processingTransaction execution » Input data
---

[Macros](#define-members)

Defines for <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CTLS_START_TYPE::TxnOptions</a>. [More\...](#details)

Collaboration diagram for Options for contactless transaction processing:

![](group___c_l_t_r_x___o_p_t_i_o_n_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [CLTRXOP_SUPPRESS_ERRMSGBEEP](#ga7563387a153ace585d0b9c0ed69e8b7a)   0x01 |
|   | B1b1: Suppress beep on error message display. [More\...](#ga7563387a153ace585d0b9c0ed69e8b7a)<br/> |
| #define  | [CLTRXOP_REPEAT_L1](#ga7d7db81a9ebcf9bba42d9dbc4bf0e33f)   0x02 |
|   | B1b2: TRX repeated because of L1 error (same txn is started a 2nd time) [More\...](#ga7d7db81a9ebcf9bba42d9dbc4bf0e33f)<br/> |
| #define  | [CLTRXOP_NO_DOMESTIC_KERNEL](#ga8cc0336035984d52f4b8882bb0e5445b)   0x04 |
|   | B1b3: skip local kernel processing for this transaction even if configured. [More\...](#ga8cc0336035984d52f4b8882bb0e5445b)<br/> |
| #define  | [CLTRXOP_NO_GLOBAL](#gaceec05bbf1ade229fafbd80d839d316b)   0x08 |
|   | B1b4: skip global EMV processing for this transaction even if configured. [More\...](#gaceec05bbf1ade229fafbd80d839d316b)<br/> |
| #define  | [CLTRXOP_PP_TORNTXN_RESET](#gac5cab1959213db471c6a8bd80a4914b1)   0x10 |
|   | B1b5: reset the torn transaction store if a PayPass card is presented. [More\...](#gac5cab1959213db471c6a8bd80a4914b1)<br/> |
| #define  | [CLTRXOP_AK_DELAYED_AUTH](#ga9b789560f8d32e3b30ea8d89d85cfd80)   0x20 |
|   | B1b6: Amex delayed autorization (Amex 3.1) for environments where no real-time online transaction is possible. Note: For Amex 4 kernel this is controlled by Enhanced Contactless Reader Capabilities B4b7. [More\...](#ga9b789560f8d32e3b30ea8d89d85cfd80)<br/> |
| #define  | [CLTRXOP_REMOVEALL_BUT_EXCLUDED](#gaeeabd0f54d66bc816f00644dac4c9814)   0x80 |
|   | B1b8: Remove all candidates from terminal list except those which are contained in <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a8c1843ea36091b75459472cb4077e61e">ExcludeAIDs</a> or <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ad87415ec2bcc2e988462d432a46f8065">ExcludeCombos</a> list. This allows transactions restricted to certain AIDs, Kernel IDs or Combinations without terminal reconfiguration. [More\...](#gaeeabd0f54d66bc816f00644dac4c9814)<br/> |
| #define  | [CLTRXOP_CANDLIST_CALLBACK](#ga00c2871b0d89e9b08f2c93db8cab6e8d)   0x01 |
|   | B2b1: Mutual combo candidate list of terminal and card reported for selection and reordering, see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a>. [More\...](#ga00c2871b0d89e9b08f2c93db8cab6e8d)<br/> |
| #define  | [CLTRXOP_APPSELECTED_CALLBACK](#ga0f5eaa999c8e098ac3c834987c9735db)   0x02 |
|   | B2b2: callback after the final select for choosing the kernel to be used, only available for velocity kernel, see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gaf101b44707dcb098e311d65bd7ac817e">TAG_BF0C_CTLS_CBK_APP_SELECTED</a>. [More\...](#ga0f5eaa999c8e098ac3c834987c9735db)<br/> |
| #define  | [CLTRXOP_NO_BUL12](#ga770d18ce1ad7a69d37c7c1ae900f7d8a)   0x04 |
|   | B2b3: SU Bulletin 12 NOT supported (Velocity Entrypoint *NOT* EMVEP_CFG_BUL12). Obsolete since EP2.0.1. [More\...](#ga770d18ce1ad7a69d37c7c1ae900f7d8a)<br/> |
| #define  | [CLTRXOP_NO_LONGEST_AID_MATCH](#gabbf8a7e12ecd70d26191f613b3b8d18e)   0x10 |
|   | B2b5: Do not perform the longest AID match (technical nonsense but needed for a few domestic certifications) [More\...](#gabbf8a7e12ecd70d26191f613b3b8d18e)<br/> |
| #define  | [CLTRXOP_SPURIOUS_CARD_DETECT](#ga9d93e178c7dbac4426ce5c876bc811bd)   0x20 |
|   | B2b6: Use option <a href="group___a_d_k___i_c_c___o_p_t_i_o_n.md#ga9f8cf47711ca9eeddcf280d04a1d0482">EMV_CTLS_SPURIOUS_DETECT</a> for card detection. [More\...](#ga9d93e178c7dbac4426ce5c876bc811bd)<br/> |
| #define  | [CLTRXOP_NO_PAN_RETRIEVE_DEF](#ga12ec4142b524b0868726fe8a312b7768)   0x40 |
|   | <br/>For all other schemes EMV ADK does anyhow use configured values for PAN retrieval transactions.<br/>Not yet supported for VFI reader. [More\...](#ga12ec4142b524b0868726fe8a312b7768)<br/> |
| #define  | [CLTRXOP_RND_CALLBACK](#gad7421921c4390a1255aef0635297a0e5)   0x80 |
|   | B2b8: Use own random number generator instead of OS one (not recommended but for debug purposes useful), only supported for velocity kernel, see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8da23b41b13c8e47e14f5976422cf4a1">TAG_BF13_CBK_RND</a>. [More\...](#gad7421921c4390a1255aef0635297a0e5)<br/> |
| #define  | [CLTRXOP_OMIT_CHECKSUM_CHECK](#ga90cf6fdf386899e6210c9a7bad81c76a)   0x01 |
|   | B3b1: VFI-Reader: Dont calculate checksums of configuration files<br/>Only effective on <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a> [More\...](#ga90cf6fdf386899e6210c9a7bad81c76a)<br/> |
| #define  | [CLTRXOP_STOP_ON_CHKSUM_DIFF](#ga0f4b8b29b5987c02e603166c3a11fc86)   0x02 |
|   | B3b2: VFI-Reader: abort transaction when checksums of configuration files changed<br/>Only effective on <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a> [More\...](#ga0f4b8b29b5987c02e603166c3a11fc86)<br/> |
| #define  | [CLTRXOP_NO_AMOUNT_PRECHECK](#ga2c2c10129dd6ffd3942b970a21e672f6)   0x08 |
|   | \--\> This results in terminate or fallabck later on [More\...](#ga2c2c10129dd6ffd3942b970a21e672f6)<br/> |
| #define  | [CLTRXOP_L1_ERROR_CALLBACK](#ga9b11cdf8f106efd6a9e36f849e450cbe)   0x10 |
|   | \"Use 1 card only\" (<a href="group___a_p_p_l_i___t_e_x_t_s.md#gaca116091371024d852c383cf9c9ff674">EMV_ADK_TXT_2_CARDS_IN_FIELD</a>) in case 2 cards are detected<br/>Precondition: UI scheme \"default\" is set, use <a href="group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#gab76a9e8e1c16629067e6c5ec8296636a">INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT</a> [More\...](#ga9b11cdf8f106efd6a9e36f849e450cbe)<br/> |
| #define  | [CLTRXOP_SETUP_WAIT_FOR_ERROR](#ga10c0f72c0a403cbc5d7daef99270b3b1)   0x20 |
|   | this is already detected in <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a> rather than in <a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline()</a>. [More\...](#ga10c0f72c0a403cbc5d7daef99270b3b1)<br/> |
| #define  | [CLTRXOP_WEEK_PRIORITY_APPS](#gadc219c85b19800339edebb390998af0e)   0x40 |
|   | B3b7: Ignore priority applications that are not part of the terminal candidate list. [More\...](#gadc219c85b19800339edebb390998af0e)<br/> |
| #define  | [CLTRXOP_PRELOAD_TRANSACTION](#ga1cb10cf632c90bc11bf7feb72b964089)   0x80 |
|   | B3b8: Preload feature: perform preliminary process and prepare database for payment without starting the transaction. Required for VAS processing using NFC ADK on VFI reader. [More\...](#ga1cb10cf632c90bc11bf7feb72b964089)<br/> |
| #define  | [CLTRXOP_KEEP_MULTIPLE_KERNEL](#gaa4ebad770cd271c27455a21df3736d24)   0x01 |
|   | B4b1: After Final Select keep all AID-kernel combinations for the selected AID. [More\...](#gaa4ebad770cd271c27455a21df3736d24)<br/> |
| #define  | [CLTRXOP_TIP_AMOUNT_ZERO](#ga8406430dc89265948ff526512f8e269b)   0x02 |
|   | B4b2: Card holder confirmed zero amount within tip amount input dialog. In case of TIP setting DF22 position 4 = 3 the the transaction shall not be made suitable for a tip follow-up. [More\...](#ga8406430dc89265948ff526512f8e269b)<br/> |
| #define  | [CLTRXOP_SILENT_ON_EMPTY_LIST](#gaf2d8aa5ec98248a678aaf79948941223)   0x04 |
|   | B4b3: In case of empty candidate list (return code <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4f8a5311a9bbc3494c299411622c78be">EMV_ADK_TXN_CTLS_EMPTY_LIST</a>) suppress error tone and LED processing (LEDs off after 750ms). [More\...](#gaf2d8aa5ec98248a678aaf79948941223)<br/> |
| #define  | [CLTRXOP_CVM_REQUIRED](#ga7d505d4191e047a300cb5fa014b4dc6c)   0x08 |
|   | B4b4: Force CVM for this transaction due to a special business use case. Basically implemented by internally setting the CVM required limits to zero. [More\...](#ga7d505d4191e047a300cb5fa014b4dc6c)<br/> |
| #define  | [CLTRXOP_LONG_TAP_TIMER](#ga867d4928ea618ec5533b91c724e5bf29)   0x10 |
| #define  | [CLTRXOP_SEND_POI_INFORMATION](#ga29c16b32d2beaec17b698639f172058d)   0x20 |
|   | B4b6: Activate Entry Point\'s Send POI Information feature. [More\...](#ga29c16b32d2beaec17b698639f172058d)<br/> |
| #define  | [CLTRXOP_BEEP_BY_BUZZER](#ga6134b01aeb9778998cccdb1ac6295401)   0x40 |
|   | B4b7: Use buzzer instead of sound library on some platforms (e.g. Android and VOS-3). This is for lower latency with the drawback that the volume is fixed. [More\...](#ga6134b01aeb9778998cccdb1ac6295401)<br/> |
| #define  | [CLTRXOP_BEEP_OS_VOLUME](#ga9ac22a8f0ebfb857130cfb2692a691a6)   0x80 |
|   | B4b7: On Android system the OS setting controls the volume. The OS volume is respected down to certain still hearable minimal value to avoid missing beep. For switching off (e.g. automated test run) set <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a93d1982261d2afed6ce0b169b9f89541">EMV_CTLS_TERMDATA_STRUCT::BeepVolume</a> to zero. [More\...](#ga9ac22a8f0ebfb857130cfb2692a691a6)<br/> |

## DetailedDescription {#detailed-description}

Defines for <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CTLS_START_TYPE::TxnOptions</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## CLTRXOP_AK_DELAYED_AUTH <a href="#ga9b789560f8d32e3b30ea8d89d85cfd80" id="ga9b789560f8d32e3b30ea8d89d85cfd80"></a>

<p>#define CLTRXOP_AK_DELAYED_AUTH   0x20</p>

B1b6: Amex delayed autorization (Amex 3.1) for environments where no real-time online transaction is possible. Note: For Amex 4 kernel this is controlled by Enhanced Contactless Reader Capabilities B4b7.

## CLTRXOP_APPSELECTED_CALLBACK <a href="#ga0f5eaa999c8e098ac3c834987c9735db" id="ga0f5eaa999c8e098ac3c834987c9735db"></a>

<p>#define CLTRXOP_APPSELECTED_CALLBACK   0x02</p>

B2b2: callback after the final select for choosing the kernel to be used, only available for velocity kernel, see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#gaf101b44707dcb098e311d65bd7ac817e">TAG_BF0C_CTLS_CBK_APP_SELECTED</a>.

## CLTRXOP_BEEP_BY_BUZZER <a href="#ga6134b01aeb9778998cccdb1ac6295401" id="ga6134b01aeb9778998cccdb1ac6295401"></a>

<p>#define CLTRXOP_BEEP_BY_BUZZER   0x40</p>

B4b7: Use buzzer instead of sound library on some platforms (e.g. Android and VOS-3). This is for lower latency with the drawback that the volume is fixed.

## CLTRXOP_BEEP_OS_VOLUME <a href="#ga9ac22a8f0ebfb857130cfb2692a691a6" id="ga9ac22a8f0ebfb857130cfb2692a691a6"></a>

<p>#define CLTRXOP_BEEP_OS_VOLUME   0x80</p>

B4b7: On Android system the OS setting controls the volume. The OS volume is respected down to certain still hearable minimal value to avoid missing beep. For switching off (e.g. automated test run) set <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a93d1982261d2afed6ce0b169b9f89541">EMV_CTLS_TERMDATA_STRUCT::BeepVolume</a> to zero.

## CLTRXOP_CANDLIST_CALLBACK <a href="#ga00c2871b0d89e9b08f2c93db8cab6e8d" id="ga00c2871b0d89e9b08f2c93db8cab6e8d"></a>

<p>#define CLTRXOP_CANDLIST_CALLBACK   0x01</p>

B2b1: Mutual combo candidate list of terminal and card reported for selection and reordering, see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2ef5c305dbfcabbea00a6d9e3c544547">TAG_BF12_CBK_MODIFY_CAND</a>.

## CLTRXOP_CVM_REQUIRED <a href="#ga7d505d4191e047a300cb5fa014b4dc6c" id="ga7d505d4191e047a300cb5fa014b4dc6c"></a>

<p>#define CLTRXOP_CVM_REQUIRED   0x08</p>

B4b4: Force CVM for this transaction due to a special business use case. Basically implemented by internally setting the CVM required limits to zero.

## CLTRXOP_KEEP_MULTIPLE_KERNEL <a href="#gaa4ebad770cd271c27455a21df3736d24" id="gaa4ebad770cd271c27455a21df3736d24"></a>

<p>#define CLTRXOP_KEEP_MULTIPLE_KERNEL   0x01</p>

B4b1: After Final Select keep all AID-kernel combinations for the selected AID.

## CLTRXOP_L1_ERROR_CALLBACK <a href="#ga9b11cdf8f106efd6a9e36f849e450cbe" id="ga9b11cdf8f106efd6a9e36f849e450cbe"></a>

<p>#define CLTRXOP_L1_ERROR_CALLBACK   0x10</p>

\"Use 1 card only\" (<a href="group___a_p_p_l_i___t_e_x_t_s.md#gaca116091371024d852c383cf9c9ff674">EMV_ADK_TXT_2_CARDS_IN_FIELD</a>) in case 2 cards are detected
Precondition: UI scheme \"default\" is set, use <a href="group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#gab76a9e8e1c16629067e6c5ec8296636a">INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT</a>

B3b5: Enable notification callback for display \"Error, try again\" (<a href="group___a_p_p_l_i___t_e_x_t_s.md#ga8bb77717dbe26d78fb082d5a91d9bb3c">EMV_ADK_TXT_RETAP_SAME_L1</a>) in case of L1 error and

## CLTRXOP_LONG_TAP_TIMER <a href="#ga867d4928ea618ec5533b91c724e5bf29" id="ga867d4928ea618ec5533b91c724e5bf29"></a>

<p>#define CLTRXOP_LONG_TAP_TIMER   0x10</p>

B4b5: Set timer for Present And Hold timeout function according JCB Contactless IC Terminal Specification with value of Removal Timeout unless 0. In case of timeout contactless field is powered-off, \"Card Read OK\" display request is sent and light and sound indicators are triggered. For details please see <a href="pg_emv_contactless_users_guide.md#subsec_emv_ctls_scenarios_and_use_cases_present_and_hold">Present And Hold Transaction ("Long Tap")</a>

## CLTRXOP_NO_AMOUNT_PRECHECK <a href="#ga2c2c10129dd6ffd3942b970a21e672f6" id="ga2c2c10129dd6ffd3942b970a21e672f6"></a>

<p>#define CLTRXOP_NO_AMOUNT_PRECHECK   0x08</p>

\--\> This results in terminate or fallabck later on

B3b4: Disable the amount precheck \--\> even tap card is requested (Setup successful) if the txn amount is higher than the highest transaction limit of any AID / kernel.

## CLTRXOP_NO_BUL12 <a href="#ga770d18ce1ad7a69d37c7c1ae900f7d8a" id="ga770d18ce1ad7a69d37c7c1ae900f7d8a"></a>

<p>#define CLTRXOP_NO_BUL12   0x04</p>

B2b3: SU Bulletin 12 NOT supported (Velocity Entrypoint *NOT* EMVEP_CFG_BUL12). Obsolete since EP2.0.1.

## CLTRXOP_NO_DOMESTIC_KERNEL <a href="#ga8cc0336035984d52f4b8882bb0e5445b" id="ga8cc0336035984d52f4b8882bb0e5445b"></a>

<p>#define CLTRXOP_NO_DOMESTIC_KERNEL   0x04</p>

B1b3: skip local kernel processing for this transaction even if configured.

## CLTRXOP_NO_GLOBAL <a href="#gaceec05bbf1ade229fafbd80d839d316b" id="gaceec05bbf1ade229fafbd80d839d316b"></a>

<p>#define CLTRXOP_NO_GLOBAL   0x08</p>

B1b4: skip global EMV processing for this transaction even if configured.

## CLTRXOP_NO_LONGEST_AID_MATCH <a href="#gabbf8a7e12ecd70d26191f613b3b8d18e" id="gabbf8a7e12ecd70d26191f613b3b8d18e"></a>

<p>#define CLTRXOP_NO_LONGEST_AID_MATCH   0x10</p>

B2b5: Do not perform the longest AID match (technical nonsense but needed for a few domestic certifications)

## CLTRXOP_NO_PAN_RETRIEVE_DEF <a href="#ga12ec4142b524b0868726fe8a312b7768" id="ga12ec4142b524b0868726fe8a312b7768"></a>

<p>#define CLTRXOP_NO_PAN_RETRIEVE_DEF   0x40</p>

For all other schemes EMV ADK does anyhow use configured values for PAN retrieval transactions.
Not yet supported for VFI reader.

B2b7: PayPass: Do NOT Use default configuration for PAN Retrieval Transactions but configured values.

## CLTRXOP_OMIT_CHECKSUM_CHECK <a href="#ga90cf6fdf386899e6210c9a7bad81c76a" id="ga90cf6fdf386899e6210c9a7bad81c76a"></a>

<p>#define CLTRXOP_OMIT_CHECKSUM_CHECK   0x01</p>

B3b1: VFI-Reader: Dont calculate checksums of configuration files
Only effective on <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a>

## CLTRXOP_PP_TORNTXN_RESET <a href="#gac5cab1959213db471c6a8bd80a4914b1" id="gac5cab1959213db471c6a8bd80a4914b1"></a>

<p>#define CLTRXOP_PP_TORNTXN_RESET   0x10</p>

B1b5: reset the torn transaction store if a PayPass card is presented.

## CLTRXOP_PRELOAD_TRANSACTION <a href="#ga1cb10cf632c90bc11bf7feb72b964089" id="ga1cb10cf632c90bc11bf7feb72b964089"></a>

<p>#define CLTRXOP_PRELOAD_TRANSACTION   0x80</p>

B3b8: Preload feature: perform preliminary process and prepare database for payment without starting the transaction. Required for VAS processing using NFC ADK on VFI reader.

## CLTRXOP_REMOVEALL_BUT_EXCLUDED <a href="#gaeeabd0f54d66bc816f00644dac4c9814" id="gaeeabd0f54d66bc816f00644dac4c9814"></a>

<p>#define CLTRXOP_REMOVEALL_BUT_EXCLUDED   0x80</p>

B1b8: Remove all candidates from terminal list except those which are contained in <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a8c1843ea36091b75459472cb4077e61e">ExcludeAIDs</a> or <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ad87415ec2bcc2e988462d432a46f8065">ExcludeCombos</a> list. This allows transactions restricted to certain AIDs, Kernel IDs or Combinations without terminal reconfiguration.

## CLTRXOP_REPEAT_L1 <a href="#ga7d7db81a9ebcf9bba42d9dbc4bf0e33f" id="ga7d7db81a9ebcf9bba42d9dbc4bf0e33f"></a>

<p>#define CLTRXOP_REPEAT_L1   0x02</p>

B1b2: TRX repeated because of L1 error (same txn is started a 2nd time)

## CLTRXOP_RND_CALLBACK <a href="#gad7421921c4390a1255aef0635297a0e5" id="gad7421921c4390a1255aef0635297a0e5"></a>

<p>#define CLTRXOP_RND_CALLBACK   0x80</p>

B2b8: Use own random number generator instead of OS one (not recommended but for debug purposes useful), only supported for velocity kernel, see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8da23b41b13c8e47e14f5976422cf4a1">TAG_BF13_CBK_RND</a>.

**<a href="deprecated.md#_deprecated000046">Deprecated:</a>** not supported anymore

## CLTRXOP_SEND_POI_INFORMATION <a href="#ga29c16b32d2beaec17b698639f172058d" id="ga29c16b32d2beaec17b698639f172058d"></a>

<p>#define CLTRXOP_SEND_POI_INFORMATION   0x20</p>

B4b6: Activate Entry Point\'s Send POI Information feature.

## CLTRXOP_SETUP_WAIT_FOR_ERROR <a href="#ga10c0f72c0a403cbc5d7daef99270b3b1" id="ga10c0f72c0a403cbc5d7daef99270b3b1"></a>

<p>#define CLTRXOP_SETUP_WAIT_FOR_ERROR   0x20</p>

this is already detected in <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a> rather than in <a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline()</a>.

B3b6: VFI-Reader: <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a> waits 10 ms for a negative answer from VFI-Reader so in case of VFI-Reader having problems,

## CLTRXOP_SILENT_ON_EMPTY_LIST <a href="#gaf2d8aa5ec98248a678aaf79948941223" id="gaf2d8aa5ec98248a678aaf79948941223"></a>

<p>#define CLTRXOP_SILENT_ON_EMPTY_LIST   0x04</p>

B4b3: In case of empty candidate list (return code <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4f8a5311a9bbc3494c299411622c78be">EMV_ADK_TXN_CTLS_EMPTY_LIST</a>) suppress error tone and LED processing (LEDs off after 750ms).

## CLTRXOP_SPURIOUS_CARD_DETECT <a href="#ga9d93e178c7dbac4426ce5c876bc811bd" id="ga9d93e178c7dbac4426ce5c876bc811bd"></a>

<p>#define CLTRXOP_SPURIOUS_CARD_DETECT   0x20</p>

B2b6: Use option <a href="group___a_d_k___i_c_c___o_p_t_i_o_n.md#ga9f8cf47711ca9eeddcf280d04a1d0482">EMV_CTLS_SPURIOUS_DETECT</a> for card detection.

## CLTRXOP_STOP_ON_CHKSUM_DIFF <a href="#ga0f4b8b29b5987c02e603166c3a11fc86" id="ga0f4b8b29b5987c02e603166c3a11fc86"></a>

<p>#define CLTRXOP_STOP_ON_CHKSUM_DIFF   0x02</p>

B3b2: VFI-Reader: abort transaction when checksums of configuration files changed
Only effective on <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a>

## CLTRXOP_SUPPRESS_ERRMSGBEEP <a href="#ga7563387a153ace585d0b9c0ed69e8b7a" id="ga7563387a153ace585d0b9c0ed69e8b7a"></a>

<p>#define CLTRXOP_SUPPRESS_ERRMSGBEEP   0x01</p>

B1b1: Suppress beep on error message display.

## CLTRXOP_TIP_AMOUNT_ZERO <a href="#ga8406430dc89265948ff526512f8e269b" id="ga8406430dc89265948ff526512f8e269b"></a>

<p>#define CLTRXOP_TIP_AMOUNT_ZERO   0x02</p>

B4b2: Card holder confirmed zero amount within tip amount input dialog. In case of TIP setting DF22 position 4 = 3 the the transaction shall not be made suitable for a tip follow-up.

## CLTRXOP_WEEK_PRIORITY_APPS <a href="#gadc219c85b19800339edebb390998af0e" id="gadc219c85b19800339edebb390998af0e"></a>

<p>#define CLTRXOP_WEEK_PRIORITY_APPS   0x40</p>

B3b7: Ignore priority applications that are not part of the terminal candidate list.

---
hidden: true
title: Options for ICC accessICC Interface
---

[Macros](#define-members)

Options for ICC access, e.g. for <a href="group___f_u_n_c___i_c_c.md#gafbcdb0278723b9629eb7c12532119e2d">EMV_CTLS_SmartISO()</a>, <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a>, <a href="group___f_u_n_c___i_c_c.md#gadd0716253a50b2791ac4e2a1627d1e8d">EMV_CTLS_SmartPowerOff()</a> [More\...](#details)

Collaboration diagram for Options for ICC access:

![](group___a_d_k___i_c_c___o_p_t_i_o_n.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_RFU_1](#ga4536a48117c734a445ce2f98f49caa31)   0x01 |
|   | reserved for probable reader number [More\...](#ga4536a48117c734a445ce2f98f49caa31)<br/> |
| #define  | [EMV_CTLS_RESET_KEEP_FIELD_ON](#gaf16d1b4deb9fa416cfefa05a11b326f6)   0x02 |
|   | (Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Do not switch off RF field when no card was detected. CAUTION: This results in higher power consumption and might cause overheating problems. [More\...](#gaf16d1b4deb9fa416cfefa05a11b326f6)<br/> |
| #define  | [EMV_CTLS_SPURIOUS_DETECT](#ga9f8cf47711ca9eeddcf280d04a1d0482)   0x04 |
|   | (Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Avoid faulty collision detection on ADK level. This bit was marked deprecated since August 2020 but reactivated for Trinity. [More\...](#ga9f8cf47711ca9eeddcf280d04a1d0482)<br/> |
| #define  | [EMV_CTLS_EMV_COMPLIANT](#gaf670bf4d9472c16856dde67ac49817b6)   0x08 |
|   | (Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Only card type is returned in card info. This feature is mutually exclusive with EMV_CTLS_RESET_NO_EMV. [More\...](#gaf670bf4d9472c16856dde67ac49817b6)<br/> |
| #define  | [EMV_CTLS_RESET_NO_EMV](#gaf76e7512eb2306d14e6ffead7564b399)   0x10 |
|   | (Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Provide card type plus UID if available as card info. This feature is mutually exclusive with EMV_CTLS_EMV_COMPLIANT. [More\...](#gaf76e7512eb2306d14e6ffead7564b399)<br/> |
| #define  | [EMV_CTLS_RESET_PICC_OPEN_ONLY](#gaa8aa513f2a7e9974709142aee8787f7e)   0x20 |
|   | (Vel: n VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Only initialise CTLS reader, do not detect cards. [More\...](#gaa8aa513f2a7e9974709142aee8787f7e)<br/> |
| #define  | [EMV_CTLS_SKIP_FIELD_ON](#gaa8590623462ce7bdc2ee946a4fc4fd1b)   0x40 |
|   | (Vel: n VFI: y) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` [More\...](#gaa8590623462ce7bdc2ee946a4fc4fd1b)<br/> |
| #define  | [EMV_CTLS_RESET_PLUS_PPSE](#ga830a38f57ce31a7e4450b815aa35298b)   0x40 |
| #define  | [EMV_CTLS_OPEN_READER](#gae8ff325019d7753b35d4eeb37801dd93)   [EMV_CTLS_RESET_PICC_OPEN_ONLY](#gaa8aa513f2a7e9974709142aee8787f7e) |
|   | (Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](#gae8ff325019d7753b35d4eeb37801dd93 "(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination EMV_CTL...") for re-open. [More\...](#gae8ff325019d7753b35d4eeb37801dd93)<br/> |
| #define  | [EMV_CTLS_CLOSE_READER](#ga7b7ec1717ddc79e98b74d49b599eaab9)   0x40 |
|   | (Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, close CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](#gae8ff325019d7753b35d4eeb37801dd93 "(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination EMV_CTL...") for re-open. [More\...](#ga7b7ec1717ddc79e98b74d49b599eaab9)<br/> |
| #define  | [EMV_CTLS_DETECT_REMOVAL](#ga70426bf6406f63e706db4dddfdd7c868)   0x80 |
|   | (Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, start removal detection background task [More\...](#ga70426bf6406f63e706db4dddfdd7c868)<br/> |
| #define  | [EMV_CT_CUSTOMER](#ga0fb1e8f354f6daa1a1e27a6f3f4e5791)   0x00 |
|   | bit 1,2 used for reader selection: Customer Card Slot [More\...](#ga0fb1e8f354f6daa1a1e27a6f3f4e5791)<br/> |
| #define  | [EMV_CT_SAM_1](#ga4553f713afcd52219ad6976a668da074)   0x01 |
|   | bit 1,2 used for reader selection: SAM1 [More\...](#ga4553f713afcd52219ad6976a668da074)<br/> |
| #define  | [EMV_CT_SAM_2](#gacce6d2500ac47825e0a346e406dae7d7)   0x02 |
|   | bit 1,2 used for reader selection: SAM2 [More\...](#gacce6d2500ac47825e0a346e406dae7d7)<br/> |
| #define  | [EMV_CT_SAM_3](#gac3f05a0e8f6cb8c9d6e4265ad40d3937)   ([EMV_CT_SAM_1](#ga4553f713afcd52219ad6976a668da074)\|[EMV_CT_SAM_2](#gacce6d2500ac47825e0a346e406dae7d7)) |
|   | bit 1,2 used for reader selection: SAM3 [More\...](#gac3f05a0e8f6cb8c9d6e4265ad40d3937)<br/> |
| #define  | [EMV_CT_TRY_PPS](#ga18848d859bedd2555f2cebcb29df60e6)   0x04 |
|   | Try to increase the baudrate by using PPS. [More\...](#ga18848d859bedd2555f2cebcb29df60e6)<br/> |
| #define  | [EMV_CT_SKIP_ATR](#ga0687104bd6093e0c9868594cc3010310)   0x08 |
|   | Skip ATR reading, not included in response. [More\...](#ga0687104bd6093e0c9868594cc3010310)<br/> |
| #define  | [EMV_CT_TRY_PPS_EPA](#ga9a1dc8c5c0566cea2d166eb73a4c6f6c)   0x10 |
|   | PPS handling for Austrian Maestro Cards. [More\...](#ga9a1dc8c5c0566cea2d166eb73a4c6f6c)<br/> |
| #define  | [EMV_CT_WARMRESET](#ga914a7e0c888d6275a663b0bca56b66a5)   0x20 |
|   | Warm Reset to ICC (Cold reset must have been applied before) [More\...](#ga914a7e0c888d6275a663b0bca56b66a5)<br/> |
| #define  | [EMV_CT_DETECT_WRONG_ATR](#ga590b842ca30d9ca04457ced54f42734b)   0x40 |
|   | Distinguish between wrong ATR and card wrong side/no chip and return applicable return value (for customer slot only) [More\...](#ga590b842ca30d9ca04457ced54f42734b)<br/> |
| #define  | [EMV_CT_ID0_ISO_MODE](#ga7bb140c63ae7545a48d906acef705430)   0x80 |
|   | The customer card (ID 0) is reset in mode EMV per default, use this bit to switch to ISO 7816 (for ID0 only) [More\...](#ga7bb140c63ae7545a48d906acef705430)<br/> |
| #define  | [EMV_CT_SAM_EMV_MODE](#gae8e0cc1cdccb94f550be5eac2a91fdbd)   0x40 |
|   | SAMs are reset in mode ISO 7816 per default, use this bit to switch to EMV 311 (for SAMs only) [More\...](#gae8e0cc1cdccb94f550be5eac2a91fdbd)<br/> |
| #define  | [EMV_CT_CARD_CLASS_B_3V](#gaf456e23115416fced94c465a2b217905)   0x80 |
|   | For class B (3V) cards. [More\...](#gaf456e23115416fced94c465a2b217905)<br/> |

## DetailedDescription {#detailed-description}

Options for ICC access, e.g. for <a href="group___f_u_n_c___i_c_c.md#gafbcdb0278723b9629eb7c12532119e2d">EMV_CTLS_SmartISO()</a>, <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a>, <a href="group___f_u_n_c___i_c_c.md#gadd0716253a50b2791ac4e2a1627d1e8d">EMV_CTLS_SmartPowerOff()</a>

Parameter `ucOptions` in <a href="group___f_u_n_c___i_c_c.md#ga728923e6e6be8867cf954b7c8d4414d5">EMV_CT_SmartISO()</a>, <a href="group___f_u_n_c___i_c_c.md#ga62577d8d938685a65dd2b326cb03522d">EMV_CT_SmartDetect()</a>, <a href="group___f_u_n_c___i_c_c.md#gaa63515431ea6f33b113fa7af5562db11">EMV_CT_SmartReset()</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_CARD_CLASS_B_3V <a href="#gaf456e23115416fced94c465a2b217905" id="gaf456e23115416fced94c465a2b217905"></a>

<p>#define EMV_CT_CARD_CLASS_B_3V   0x80</p>

For class B (3V) cards.

## EMV_CT_CUSTOMER <a href="#ga0fb1e8f354f6daa1a1e27a6f3f4e5791" id="ga0fb1e8f354f6daa1a1e27a6f3f4e5791"></a>

<p>#define EMV_CT_CUSTOMER   0x00</p>

bit 1,2 used for reader selection: Customer Card Slot

## EMV_CT_DETECT_WRONG_ATR <a href="#ga590b842ca30d9ca04457ced54f42734b" id="ga590b842ca30d9ca04457ced54f42734b"></a>

<p>#define EMV_CT_DETECT_WRONG_ATR   0x40</p>

Distinguish between wrong ATR and card wrong side/no chip and return applicable return value (for customer slot only)

## EMV_CT_ID0_ISO_MODE <a href="#ga7bb140c63ae7545a48d906acef705430" id="ga7bb140c63ae7545a48d906acef705430"></a>

<p>#define EMV_CT_ID0_ISO_MODE   0x80</p>

The customer card (ID 0) is reset in mode EMV per default, use this bit to switch to ISO 7816 (for ID0 only)

## EMV_CT_SAM_1 <a href="#ga4553f713afcd52219ad6976a668da074" id="ga4553f713afcd52219ad6976a668da074"></a>

<p>#define EMV_CT_SAM_1   0x01</p>

bit 1,2 used for reader selection: SAM1

## EMV_CT_SAM_2 <a href="#gacce6d2500ac47825e0a346e406dae7d7" id="gacce6d2500ac47825e0a346e406dae7d7"></a>

<p>#define EMV_CT_SAM_2   0x02</p>

bit 1,2 used for reader selection: SAM2

## EMV_CT_SAM_3 <a href="#gac3f05a0e8f6cb8c9d6e4265ad40d3937" id="gac3f05a0e8f6cb8c9d6e4265ad40d3937"></a>

<p>#define EMV_CT_SAM_3   ([EMV_CT_SAM_1](#ga4553f713afcd52219ad6976a668da074)\|[EMV_CT_SAM_2](#gacce6d2500ac47825e0a346e406dae7d7))</p>

bit 1,2 used for reader selection: SAM3

## EMV_CT_SAM_EMV_MODE <a href="#gae8e0cc1cdccb94f550be5eac2a91fdbd" id="gae8e0cc1cdccb94f550be5eac2a91fdbd"></a>

<p>#define EMV_CT_SAM_EMV_MODE   0x40</p>

SAMs are reset in mode ISO 7816 per default, use this bit to switch to EMV 311 (for SAMs only)

## EMV_CT_SKIP_ATR <a href="#ga0687104bd6093e0c9868594cc3010310" id="ga0687104bd6093e0c9868594cc3010310"></a>

<p>#define EMV_CT_SKIP_ATR   0x08</p>

Skip ATR reading, not included in response.

## EMV_CT_TRY_PPS <a href="#ga18848d859bedd2555f2cebcb29df60e6" id="ga18848d859bedd2555f2cebcb29df60e6"></a>

<p>#define EMV_CT_TRY_PPS   0x04</p>

Try to increase the baudrate by using PPS.

## EMV_CT_TRY_PPS_EPA <a href="#ga9a1dc8c5c0566cea2d166eb73a4c6f6c" id="ga9a1dc8c5c0566cea2d166eb73a4c6f6c"></a>

<p>#define EMV_CT_TRY_PPS_EPA   0x10</p>

PPS handling for Austrian Maestro Cards.

## EMV_CT_WARMRESET <a href="#ga914a7e0c888d6275a663b0bca56b66a5" id="ga914a7e0c888d6275a663b0bca56b66a5"></a>

<p>#define EMV_CT_WARMRESET   0x20</p>

Warm Reset to ICC (Cold reset must have been applied before)

## EMV_CTLS_CLOSE_READER <a href="#ga7b7ec1717ddc79e98b74d49b599eaab9" id="ga7b7ec1717ddc79e98b74d49b599eaab9"></a>

<p>#define EMV_CTLS_CLOSE_READER   0x40</p>

(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, close CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](#gae8ff325019d7753b35d4eeb37801dd93 "(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination EMV_CTL...") for re-open.

## EMV_CTLS_DETECT_REMOVAL <a href="#ga70426bf6406f63e706db4dddfdd7c868" id="ga70426bf6406f63e706db4dddfdd7c868"></a>

<p>#define EMV_CTLS_DETECT_REMOVAL   0x80</p>

(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, start removal detection background task

## EMV_CTLS_EMV_COMPLIANT <a href="#gaf670bf4d9472c16856dde67ac49817b6" id="gaf670bf4d9472c16856dde67ac49817b6"></a>

<p>#define EMV_CTLS_EMV_COMPLIANT   0x08</p>

(Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Only card type is returned in card info. This feature is mutually exclusive with EMV_CTLS_RESET_NO_EMV.

## EMV_CTLS_OPEN_READER <a href="#gae8ff325019d7753b35d4eeb37801dd93" id="gae8ff325019d7753b35d4eeb37801dd93"></a>

<p>#define EMV_CTLS_OPEN_READER   [EMV_CTLS_RESET_PICC_OPEN_ONLY](#gaa8aa513f2a7e9974709142aee8787f7e)</p>

(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](#gae8ff325019d7753b35d4eeb37801dd93 "(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination EMV_CTL...") for re-open.

## EMV_CTLS_RESET_KEEP_FIELD_ON <a href="#gaf16d1b4deb9fa416cfefa05a11b326f6" id="gaf16d1b4deb9fa416cfefa05a11b326f6"></a>

<p>#define EMV_CTLS_RESET_KEEP_FIELD_ON   0x02</p>

(Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Do not switch off RF field when no card was detected. CAUTION: This results in higher power consumption and might cause overheating problems.

## EMV_CTLS_RESET_NO_EMV <a href="#gaf76e7512eb2306d14e6ffead7564b399" id="gaf76e7512eb2306d14e6ffead7564b399"></a>

<p>#define EMV_CTLS_RESET_NO_EMV   0x10</p>

(Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Provide card type plus UID if available as card info. This feature is mutually exclusive with EMV_CTLS_EMV_COMPLIANT.

## EMV_CTLS_RESET_PICC_OPEN_ONLY <a href="#gaa8aa513f2a7e9974709142aee8787f7e" id="gaa8aa513f2a7e9974709142aee8787f7e"></a>

<p>#define EMV_CTLS_RESET_PICC_OPEN_ONLY   0x20</p>

(Vel: n VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Only initialise CTLS reader, do not detect cards.

## EMV_CTLS_RESET_PLUS_PPSE <a href="#ga830a38f57ce31a7e4450b815aa35298b" id="ga830a38f57ce31a7e4450b815aa35298b"></a>

<p>#define EMV_CTLS_RESET_PLUS_PPSE   0x40</p>

(Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` After successful EMV card activation by EMV_CTLS_SmartReset do pre-fetch SELECT PPSE response and deliver it at next EMV_CTLS_SmartISO. Intermediate commands will clear the cache. Do not use with EMV ADK transaction flow (EMV_CTLS_ContinueOffline).

## EMV_CTLS_RFU_1 <a href="#ga4536a48117c734a445ce2f98f49caa31" id="ga4536a48117c734a445ce2f98f49caa31"></a>

<p>#define EMV_CTLS_RFU_1   0x01</p>

reserved for probable reader number

## EMV_CTLS_SKIP_FIELD_ON <a href="#gaa8590623462ce7bdc2ee946a4fc4fd1b" id="gaa8590623462ce7bdc2ee946a4fc4fd1b"></a>

<p>#define EMV_CTLS_SKIP_FIELD_ON   0x40</p>

(Vel: n VFI: y) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:`

**<a href="deprecated.md#_deprecated000061">Deprecated:</a>** Tell VFI Reader to consider RF Field is already turned on by NFC ADK.

## EMV_CTLS_SPURIOUS_DETECT <a href="#ga9f8cf47711ca9eeddcf280d04a1d0482" id="ga9f8cf47711ca9eeddcf280d04a1d0482"></a>

<p>#define EMV_CTLS_SPURIOUS_DETECT   0x04</p>

(Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> `ucOptions:` Avoid faulty collision detection on ADK level. This bit was marked deprecated since August 2020 but reactivated for Trinity.

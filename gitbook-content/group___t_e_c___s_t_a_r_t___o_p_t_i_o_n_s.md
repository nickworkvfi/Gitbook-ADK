---
hidden: true
title: TEC start options
---

[Macros](#define-members)

These options configure the behavior of technology selection, set by <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a>. A combination is possible using \| operator. [More\...](#details)

|  |  |
|----|----|
| Macros |  |
| #define  | [CTS_PURE_CARD_DETECTION](#gaeff0a0e1b335597ea1ec0781f15edb08)   0x01 |
| #define  | [CTS_NO_POWERON](#ga1073825ee49c63471bef39392d6df7e6)   0x02 |
| #define  | [CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION](#ga43a0e13c6472e524f11a71d9385b117e)   0x04 |
| #define  | [CTS_NFC_ENABLE](#gaafe9099680a56edd52a1258a797efa07)   0x01 |
| #define  | [CTS_VAS_ENABLE](#ga4678a7752f0337b236971dcd370edf93)   0x02 |
| #define  | [CTS_EMV_AFTER_NFC_ISO](#ga16d617787fe23f80aae81a4c3bc944bf)   0x04 |
| #define  | [CTS_VAS_HANDLE_LED_BUZZ](#ga5edf88e1021b06efbedfd488d47ec829)   0x08 |
| #define  | [CTS_EMV_CTLS_TIMEOUT_AFTER_VAS](#gaa9ca286b38f42e300648c3d445c90eb3)   0x10 |
| #define  | [CTS_VAS_DONT_DECRYPT](#ga58a66c0d181fb53ca29ace7158f9d9fb)   0x20 |
| #define  | [CTS_MSR_AFTER_CTLS_FAIL](#ga16b2beeb43cad695a24390db9bee5c15)   0x40 |
| #define  | [CTS_NFC_DUTY_CYCLE_OFF](#gadd4d792acfce9f801d2511938028e68e)   0x80 |

## DetailedDescription {#detailed-description}

These options configure the behavior of technology selection, set by <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a>. A combination is possible using \| operator.

## MacroDefinition Documentation {#macro-definition-documentation}

## CTS_EMV_AFTER_NFC_ISO <a href="#ga16d617787fe23f80aae81a4c3bc944bf" id="ga16d617787fe23f80aae81a4c3bc944bf"></a>

<p>#define CTS_EMV_AFTER_NFC_ISO   0x04</p>

options\[1\], Relevant only if [CTS_NFC_ENABLE](#gaafe9099680a56edd52a1258a797efa07) is set.
Perform an EMV transaction if NFC has detected one of the following cards: I_ISO14443A, I_ISO14443B

## CTS_EMV_CTLS_TIMEOUT_AFTER_VAS <a href="#gaa9ca286b38f42e300648c3d445c90eb3" id="gaa9ca286b38f42e300648c3d445c90eb3"></a>

<p>#define CTS_EMV_CTLS_TIMEOUT_AFTER_VAS   0x10</p>

options\[1\], Relevant only if [CTS_VAS_ENABLE](#ga4678a7752f0337b236971dcd370edf93) is set:
Use of a permissible time window to perform a contactless payment after either VAS_DO_PAY or VAS_DO_PAY_DECRYPT_REQ has been detected.
The dimension of this time window is configured with the input parameter options\[10..11\] of the function <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a>.

## CTS_MSR_AFTER_CTLS_FAIL <a href="#ga16b2beeb43cad695a24390db9bee5c15" id="ga16b2beeb43cad695a24390db9bee5c15"></a>

<p>#define CTS_MSR_AFTER_CTLS_FAIL   0x40</p>

options\[1\], Relevant only if options\[6..7\] is set:
Wait for MSR read after CTLS transaction only if that failed.

## CTS_NFC_DUTY_CYCLE_OFF <a href="#gadd4d792acfce9f801d2511938028e68e" id="gadd4d792acfce9f801d2511938028e68e"></a>

<p>#define CTS_NFC_DUTY_CYCLE_OFF   0x80</p>

options\[1\], Relevant only if [CTS_NFC_ENABLE](#gaafe9099680a56edd52a1258a797efa07) is set.
Ux700 overheat protection (duty cycle) is turned on by default. Can be switched off by this bit.

## CTS_NFC_ENABLE <a href="#gaafe9099680a56edd52a1258a797efa07" id="gaafe9099680a56edd52a1258a797efa07"></a>

<p>#define CTS_NFC_ENABLE   0x01</p>

options\[1\], CTLS, only allowed if [CTS_VAS_ENABLE](#ga4678a7752f0337b236971dcd370edf93) is NOT set:
ADK-NFC is used for detection of contactless cards, options\[12..15\] determine which NFC technology is enabled.

## CTS_NO_POWERON <a href="#ga1073825ee49c63471bef39392d6df7e6" id="ga1073825ee49c63471bef39392d6df7e6"></a>

<p>#define CTS_NO_POWERON   0x02</p>

options\[0\], Relevant for CT only
(must not be set in conjunction with [CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION](#ga43a0e13c6472e524f11a71d9385b117e)):
do not power on inserted card.

## CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION <a href="#ga43a0e13c6472e524f11a71d9385b117e" id="ga43a0e13c6472e524f11a71d9385b117e"></a>

<p>#define CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION   0x04</p>

options\[0\], Relevant for CT only (must not be set in conjunction with [CTS_NO_POWERON](#ga1073825ee49c63471bef39392d6df7e6)):
deactivate CTLS and MSR once chip-card is detected and then power on the chip-card.

## CTS_PURE_CARD_DETECTION <a href="#gaeff0a0e1b335597ea1ec0781f15edb08" id="gaeff0a0e1b335597ea1ec0781f15edb08"></a>

<p>#define CTS_PURE_CARD_DETECTION   0x01</p>

options\[0\], Relevant for CTLS only:
only detect card, do not perform transaction,
see also <a href="pg_tec_programmers_guide.md#subsubsec_tec_technology_notes">Some notes regarding the different technologies</a>

## CTS_VAS_DONT_DECRYPT <a href="#ga58a66c0d181fb53ca29ace7158f9d9fb" id="ga58a66c0d181fb53ca29ace7158f9d9fb"></a>

<p>#define CTS_VAS_DONT_DECRYPT   0x20</p>

options\[1\], Relevant only if [CTS_VAS_ENABLE](#ga4678a7752f0337b236971dcd370edf93) is set:
TEC will NOT decrypt the resulting VAS data.

## CTS_VAS_ENABLE <a href="#ga4678a7752f0337b236971dcd370edf93" id="ga4678a7752f0337b236971dcd370edf93"></a>

<p>#define CTS_VAS_ENABLE   0x02</p>

options\[1\], CTLS, only allowed if [CTS_NFC_ENABLE](#gaafe9099680a56edd52a1258a797efa07) is NOT set:
ADK-NFC is used for Wallet processing.

## CTS_VAS_HANDLE_LED_BUZZ <a href="#ga5edf88e1021b06efbedfd488d47ec829" id="ga5edf88e1021b06efbedfd488d47ec829"></a>

<p>#define CTS_VAS_HANDLE_LED_BUZZ   0x08</p>

options\[1\], Relevant only if [CTS_VAS_ENABLE](#ga4678a7752f0337b236971dcd370edf93) is set:
Handle LEDs and buzzer if VAS processing failed or VAS only (no subsequent EMV transaction).

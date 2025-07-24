---
hidden: true
title: Options bitmask
---

[Macros](#define-members)

These options configure the behavior of magnetic card reader library, set by <a href="msr_8h.md#ac3c6f568aa57690a8b369936fc362c2a">MSR_SetOptions()</a>. A combination is possible using \| operator. [More\...](#details)

|  |  |
|----|----|
| Macros |  |
| #define  | [MSR_UX_ENHANCEMENTS](#ga2a413b4af9749ddf671d95422930aa38)   0x01 |
|   | options\[0\] Hybrid reader: ignore card insertion [More\...](#ga2a413b4af9749ddf671d95422930aa38)<br/> |
| #define  | [MSR_SAMSUNG_TRACK1](#ga438dcfd6297f14140bc73db42ea4c54e)   0x02 |
|   | options\[0\] not used anymore [More\...](#ga438dcfd6297f14140bc73db42ea4c54e)<br/> |
| #define  | [MSR_ONE_SWIPE](#gaa4d91d314d57eb36a8816606cd4ccc18)   0x04 |
|   | options\[0\] Only read on first swipe [More\...](#gaa4d91d314d57eb36a8816606cd4ccc18)<br/> |
| #define  | [MSR_LEDS](#ga34c87a41aa36b56652314f471121b53a)   0x08 |
|   | options\[0\] Light MSR LEDs while card swipe is possible. [More\...](#ga34c87a41aa36b56652314f471121b53a)<br/> |
| #define  | [MSR_ENABLE_LICENSE_DECODE](#ga57908026ec7d34ab1eab699f5a01bfdc)   0x10 |
|   | options\[0\] Enable detection of US driving license [More\...](#ga57908026ec7d34ab1eab699f5a01bfdc)<br/> |
| #define  | [MSR_DETECT_ISO](#ga552908ea327761a80fc0557a4f617f97)   0x01 |
|   | options\[1\] Detect ISO cards [More\...](#ga552908ea327761a80fc0557a4f617f97)<br/> |
| #define  | [MSR_DETECT_JIS_II](#ga9f84cf93e845a72a46da5530a2f0fda6)   0x02 |
|   | options\[1\] Detect JIS-II cards [More\...](#ga9f84cf93e845a72a46da5530a2f0fda6)<br/> |
| #define  | [MSR_DETECT_ALL](#gaa52493f56c3780ac75f5ca4043c3c5fa)   0x03 |
|   | options\[1\] Detect both ISO and JIS-II cards. [More\...](#gaa52493f56c3780ac75f5ca4043c3c5fa)<br/> |

## DetailedDescription {#detailed-description}

These options configure the behavior of magnetic card reader library, set by <a href="msr_8h.md#ac3c6f568aa57690a8b369936fc362c2a">MSR_SetOptions()</a>. A combination is possible using \| operator.

## MacroDefinition Documentation {#macro-definition-documentation}

## MSR_DETECT_ALL <a href="#gaa52493f56c3780ac75f5ca4043c3c5fa" id="gaa52493f56c3780ac75f5ca4043c3c5fa"></a>

<p>#define MSR_DETECT_ALL   0x03</p>

options\[1\] Detect both ISO and JIS-II cards.

JIS-II cards currently only supported on V/OS2.

## MSR_DETECT_ISO <a href="#ga552908ea327761a80fc0557a4f617f97" id="ga552908ea327761a80fc0557a4f617f97"></a>

<p>#define MSR_DETECT_ISO   0x01</p>

options\[1\] Detect ISO cards

this is the default and presumed if options\[1\] == 0.

## MSR_DETECT_JIS_II <a href="#ga9f84cf93e845a72a46da5530a2f0fda6" id="ga9f84cf93e845a72a46da5530a2f0fda6"></a>

<p>#define MSR_DETECT_JIS_II   0x02</p>

options\[1\] Detect JIS-II cards

Currently only supported on V/OS2.

## MSR_ENABLE_LICENSE_DECODE <a href="#ga57908026ec7d34ab1eab699f5a01bfdc" id="ga57908026ec7d34ab1eab699f5a01bfdc"></a>

<p>#define MSR_ENABLE_LICENSE_DECODE   0x10</p>

options\[0\] Enable detection of US driving license

Enable the decoding of California Drivers License and American Association of Motor Vehicle Administrators (AAMVA) Drivers License. By default, this option is disabled.

## MSR_LEDS <a href="#ga34c87a41aa36b56652314f471121b53a" id="ga34c87a41aa36b56652314f471121b53a"></a>

<p>#define MSR_LEDS   0x08</p>

options\[0\] Light MSR LEDs while card swipe is possible.

## MSR_ONE_SWIPE <a href="#gaa4d91d314d57eb36a8816606cd4ccc18" id="gaa4d91d314d57eb36a8816606cd4ccc18"></a>

<p>#define MSR_ONE_SWIPE   0x04</p>

options\[0\] Only read on first swipe

In opposite to default behavior only read first swiped card after each call of <a href="msr_8h.md#a1e92fd29720fecbf50da24a30c7b512f">MSR_Activate()</a>. Subsequently swiped cards will not be read and will not overwrite the stored data. The stored data is deleted as usually upon call of <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a> or <a href="msr_8h.md#aac28b2c3771f8221fc26a35f0fd6d0f8">MSR_Deactivate()</a>. To read the next card application has to call <a href="msr_8h.md#aac28b2c3771f8221fc26a35f0fd6d0f8">MSR_Deactivate()</a> and <a href="msr_8h.md#a1e92fd29720fecbf50da24a30c7b512f">MSR_Activate()</a>.

## MSR_SAMSUNG_TRACK1 <a href="#ga438dcfd6297f14140bc73db42ea4c54e" id="ga438dcfd6297f14140bc73db42ea4c54e"></a>

<p>#define MSR_SAMSUNG_TRACK1   0x02</p>

options\[0\] not used anymore

**<a href="deprecated.md#_deprecated000164">Deprecated:</a>** Samsung LoopPay Detection is activated by default.

## MSR_UX_ENHANCEMENTS <a href="#ga2a413b4af9749ddf671d95422930aa38" id="ga2a413b4af9749ddf671d95422930aa38"></a>

<p>#define MSR_UX_ENHANCEMENTS   0x01</p>

options\[0\] Hybrid reader: ignore card insertion

Relevant for UX, V/OS only: use improved noise filter and ignore card insertion, only read on card removal.

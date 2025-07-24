---
hidden: true
title: MSR interface
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| int  | [msrRead](#gabdbafaf4249f4fb374be7d7f01e98b3b) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &pan, std::string &name, std::string &service, std::string &track2, int timeout_sec) |
| int  | [msrRead](#ga11a801de57b1d8aca486f9080bf12687) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &pan, std::string &name, std::string &service, std::string &track2, <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &track_status, int timeout_sec) |
| int  | [msrRead](#gad11aef1f67eef218f267d2698e72c9c4) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &pan, std::string &name, std::string &service, std::string &track2, <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &track_status, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &card_token, int timeout_sec, int removal_timeout_ms=-1) |
| int  | [msrRead](#ga496e30db16843ea2d904676816530c9d) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &pan, std::string &name, std::string &service, std::string &track2, <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &track_status, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &card_token, std::vector\< <a href="group__sdicrd.md#structvfisdi_1_1_s_d_i_client_1_1_plugin_result">PluginResult</a> \> &plugin_result, int timeout_sec, int removal_timeout_ms=-1) |
| int  | [msrRead](#ga6410a972989772d341f0ce0c6be51349) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &pan, std::string &name, std::string &service, std::string &track1, std::string &track2, <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &track_status, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &card_token, std::vector\< <a href="group__sdicrd.md#structvfisdi_1_1_s_d_i_client_1_1_plugin_result">PluginResult</a> \> &plugin_result, int timeout_sec, int removal_timeout_ms=-1) |
| int  | [msrCardDataEntry](#ga536aaf0bbc6c7b4640891698305828e0) (std::string &out, const std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \> &btn=std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \>()) |
| int  | [msrCardDataEntry](#ga629bbde0dafeb1ae091f4e803ec26060) (std::string &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &card_token, unsigned flags, const std::string &format=std::string(), const std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \> &btn=std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \>()) |
| int  | [msrCardDataEntry](#gafcb2779afee393b54acf2bf026f6ae06) (std::string &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &card_token, std::vector\< <a href="group__sdicrd.md#structvfisdi_1_1_s_d_i_client_1_1_plugin_result">PluginResult</a> \> &plugin_result, unsigned flags, const std::string &format=std::string(), const std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \> &btn=std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \>()) |
| int  | [msrCardDataEntry](#gaff624dc3d51ebf509d640ccb61ae6f26) (std::string &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &card_token, std::vector\< <a href="group__sdicrd.md#structvfisdi_1_1_s_d_i_client_1_1_plugin_result">PluginResult</a> \> &plugin_result, unsigned flags, int timeout, const std::string &format=std::string(), const std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \> &btn=std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \>()) |
| int  | [msrSetOptions](#ga390211192723333a89d150e364df5c5b) (unsigned options) |
| int  | [msrLED](#gae45526e394f86bca38f676c11af31ea7) (unsigned led1, unsigned led2, unsigned led3, unsigned timeout=0) |
| int  | [msrSetSensitivity](#ga182c41bec04e552a5ced7d070295700f) (unsigned char sensitivity, int dest=1) |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## msrCardDataEntry()\[1/4\] <a href="#gafcb2779afee393b54acf2bf026f6ae06" id="gafcb2779afee393b54acf2bf026f6ae06"></a> {#msrcarddataentry-14}

<p>int msrCardDataEntry</p>

manual card data entry (21-02)

**Parameters**

\[out\] **out** obfuscated PAN \[out\] **card_token** unique card token \[out\] **plugin_result** array containing plugin results (DFA101/FFA107) \[in\] **flags** card entry flags (MSRDataEntryFlags) \[in\] **format** optional alternate input format string \[in\] **btn** position and size of touch buttons

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrCardDataEntry()\[2/4\] <a href="#gaff624dc3d51ebf509d640ccb61ae6f26" id="gaff624dc3d51ebf509d640ccb61ae6f26"></a> {#msrcarddataentry-24}

<p>int msrCardDataEntry</p>

manual card data entry (21-02)

**Parameters**

\[out\] **out** obfuscated PAN \[out\] **card_token** unique card token \[out\] **plugin_result** array containing plugin results (DFA101/FFA107) \[in\] **flags** card entry flags (MSRDataEntryFlags) \[in\] **timeout** timeout in seconds (\<0 to use default) \[in\] **format** optional alternate input format string \[in\] **btn** position and size of touch buttons

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrCardDataEntry()\[3/4\] <a href="#ga629bbde0dafeb1ae091f4e803ec26060" id="ga629bbde0dafeb1ae091f4e803ec26060"></a> {#msrcarddataentry-34}

<p>int msrCardDataEntry</p>

manual card data entry (21-02)

**Parameters**

\[out\] **out** obfuscated PAN \[out\] **card_token** unique card token \[in\] **flags** card entry flags (MSRDataEntryFlags) \[in\] **format** optional alternate input format string \[in\] **btn** position and size of touch buttons

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrCardDataEntry()\[4/4\] <a href="#ga536aaf0bbc6c7b4640891698305828e0" id="ga536aaf0bbc6c7b4640891698305828e0"></a> {#msrcarddataentry-44}

<p>int msrCardDataEntry</p>

manual card data entry (21-02)

**Parameters**

\[out\] **out** obfuscated PAN \[in\] **btn** position and size of touch buttons

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrLED() <a href="#gae45526e394f86bca38f676c11af31ea7" id="gae45526e394f86bca38f676c11af31ea7"></a>

<p>int msrLED</p>

switch the MSR LEDs (21-04)

**Parameters**

\[in\] **led1** bit mask for state of led 1 (MSRLEDState) \[in\] **led2** bit mask for state of led 2 (MSRLEDState) \[in\] **led3** bit mask for state of led 3 (MSRLEDState) \[in\] **timeout** if \>0 all LEDs are switched off after this time in seconds)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrRead()\[1/5\] <a href="#ga6410a972989772d341f0ce0c6be51349" id="ga6410a972989772d341f0ce0c6be51349"></a> {#msrread-15}

<p>int msrRead</p>

read msr (21-01)

**Parameters**

\[out\] **pan** obfuscated PAN \[out\] **name** card holder name \[out\] **service** service code \[out\] **track1** obfuscated track 1 data (DFA040) \[out\] **track2** obfuscated track 2 data \[out\] **track_status** track status (MSRTrackStatus, one byte per track, in the order track3, track2, track1!) \[out\] **card_token** unique card token \[out\] **plugin_result** array containing plugin results (DFA101/FFA107) \[in\] **timeout_sec** timeout in seconds (0..128) \[in\] **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrRead()\[2/5\] <a href="#gad11aef1f67eef218f267d2698e72c9c4" id="gad11aef1f67eef218f267d2698e72c9c4"></a> {#msrread-25}

<p>int msrRead</p>

read msr (21-01)

**Parameters**

\[out\] **pan** obfuscated PAN \[out\] **name** card holder name \[out\] **service** service code \[out\] **track2** obfuscated track 2 data \[out\] **track_status** track status (MSRTrackStatus, one byte per track, in the order track3, track2, track1!) \[out\] **card_token** unique card token \[in\] **timeout_sec** timeout in seconds (0..128) \[in\] **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrRead()\[3/5\] <a href="#ga496e30db16843ea2d904676816530c9d" id="ga496e30db16843ea2d904676816530c9d"></a> {#msrread-35}

<p>int msrRead</p>

read msr (21-01)

**Parameters**

\[out\] **pan** PAN \[out\] **name** card holder name \[out\] **service** service code \[out\] **track2** track 2 data \[out\] **track_status** track status (MSRTrackStatus, one byte per track, in the order track3, track2, track1!) \[out\] **card_token** unique card token \[out\] **plugin_result** array containing plugin results (DFA101/FFA107) \[in\] **timeout_sec** timeout in seconds (0..128) \[in\] **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrRead()\[4/5\] <a href="#ga11a801de57b1d8aca486f9080bf12687" id="ga11a801de57b1d8aca486f9080bf12687"></a> {#msrread-45}

<p>int msrRead</p>

read msr (21-01)

**Parameters**

\[out\] **pan** obfuscated PAN \[out\] **name** card holder name \[out\] **service** service code \[out\] **track2** obfuscated track 2 data \[out\] **track_status** track status (MSRTrackStatus, one byte per track, in the order track3, track2, track1!) \[in\] **timeout_sec** timeout in seconds (0..128)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrRead()\[5/5\] <a href="#gabdbafaf4249f4fb374be7d7f01e98b3b" id="gabdbafaf4249f4fb374be7d7f01e98b3b"></a> {#msrread-55}

<p>int msrRead</p>

read msr (21-01)

**Parameters**

\[out\] **pan** obfuscated PAN \[out\] **name** card holder name \[out\] **service** service code \[out\] **track2** obfuscated track 2 data \[in\] **timeout_sec** timeout in seconds (0..128)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrSetOptions() <a href="#ga390211192723333a89d150e364df5c5b" id="ga390211192723333a89d150e364df5c5b"></a>

<p>int msrSetOptions</p>

set MSR options. For details see <a href="msr_8h.md#ac3c6f568aa57690a8b369936fc362c2a">MSR_SetOptions()</a> in ADK-MSR (21-03)

**Parameters**

\[in\] **options** (MSROptions)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## msrSetSensitivity() <a href="#ga182c41bec04e552a5ced7d070295700f" id="ga182c41bec04e552a5ced7d070295700f"></a>

<p>int msrSetSensitivity</p>

set the MSR sensitivity level for the magnetic head for subsequent read operations. Basically, it is recommended to use default MSR sensitivity to get best MSR reading results. Once MSR Set Sensitivity is used with another value than the default, it is recommended to recover default sensitivity as soon as possible. (21-05)

**Parameters**

\[in\] **sensitivity** sensitivity level in the range 20..200 or 0 to reset to default setting.Values \>100 will increase MSR sensitivity and amplify signals.Values \<100 will decrease MSR sensitivity and damp signals.Value 100 means no amplification/damping. \[in\] **dest** destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

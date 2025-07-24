---
hidden: true
title: Card reader interface
---

[Data Structures](#nested-classes) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [SDIClient::TECOptions](#structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options) |
| struct   | [SDIClient::PluginResult](#structvfisdi_1_1_s_d_i_client_1_1_plugin_result) |

|  |  |
|----|----|
| Functions |  |
| int  | [crdDetect](#ga8bec880c02a24ab758781862e535f6e6) (unsigned char tec, const [TECOptions](#structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options) &options, bool allow_cancel, unsigned timeout_ms, unsigned char &tec_out, <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &emv_out, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &appid=<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a>(), unsigned char syncCard=0, unsigned char manual_mode=0, const std::string &format=\"\", <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*plugin_result=0) |
| int  | [crdDetect](#gac199163d2bc95feb16f8728301d5f067) (unsigned char tec, const [TECOptions](#structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options) &options, bool allow_cancel, unsigned timeout_ms, unsigned char &tec_out, <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &emv_out, std::vector\< [PluginResult](#structvfisdi_1_1_s_d_i_client_1_1_plugin_result) \> &plugin_result, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &appid=<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a>(), unsigned char syncCard=0, unsigned char manual_mode=0, const std::string &format=\"\", int removal_timeout_ms=-1) |
| int  | [crdWaitForRemoval](#gaaa397799fb53215c5b5febbf78d4be54) (unsigned short timeout=0) |
| int  | [crdStartDetect](#ga8bc5cd034d411e399f34a04030df30d5) (unsigned char tec, const [TECOptions](#structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options) &options, unsigned timeout, bool use_cb=false, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &appid=<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a>(), unsigned char syncCard=0) |
| int  | [crdStartDetect](#ga20b2d4e611c8174a7c1caf9495236694) (unsigned char tec, const [TECOptions](#structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options) &options, unsigned timeout, bool use_cb, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &appid, unsigned char syncCard, int removal_timeout_ms=-1) |
| int  | [crdPollDetect](#ga832f6042c3fff724257309aa8f5b4cf2) (unsigned char &tec_out, <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &emv_out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*plugin_result=0) |
| int  | [crdStopDetect](#ga0fde18f23d79784cd57999cebd88a47e) () |
| int  | [crdAddTechnology](#gadd5984f4ff1e0ed900d076c9cf2f3583) (unsigned char tec, const [TECOptions](#structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options) &options, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &appid=<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a>(), unsigned char syncCard=0) |
| int  | [crdRemoveTechnology](#ga3b6f80ede08e6b3496d31e17a661f714) (unsigned char tec) |
| int  | [crdProvideCallbackResponse](#ga3cc73177ae72e9d3e4b05b2195ab7325) (<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &in) |

## DetailedDescription {#detailed-description}

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfisdi::SDIClient::TECOptions <a href="#structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options" id="structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options"></a>

<p>struct vfisdi::SDIClient::TECOptions</p>

technology selection options

| Data Fields |  |  |
|----|----|----|
| unsigned char | ctlsOptions | <p>see <a href="namespacevfisdi.md#a6e2bd35a8ed2d0a3cd6f3867d65407c0">EMVCtlsReaderOptions</a> for emvCtlsSmartReset</p> |
| unsigned char | ctOptions | <p>see <a href="namespacevfisdi.md#a7511f712094c1bc6defd81a587c42421">EMVCtReaderOptions</a> for emvCtSmartDetect</p> |
| unsigned short | msrAfterCTLSTimeout |  |
| unsigned short | msrAfterInsertTimeout |  |
| unsigned | nfcTechnology | <p>NFC technology bit mask, see <a href="namespacevfisdi.md#a7517b629597bd1d709d208633e0c15b1">TECNFC</a></p> |
| unsigned short | paymentTimeout |  |
| unsigned short | tec_start | <p>see <a href="namespacevfisdi.md#af8fdc1631dd205cd2006934477f761be">TECStartOptions</a></p> |

## vfisdi::SDIClient::PluginResult <a href="#structvfisdi_1_1_s_d_i_client_1_1_plugin_result" id="structvfisdi_1_1_s_d_i_client_1_1_plugin_result"></a>

<p>struct vfisdi::SDIClient::PluginResult</p>

Plugin result entry

| Data Fields |  |  |
|----|----|----|
| short | id | <p>plugin ID or -1 if unknown</p> |
| unsigned short | responseCode | <p>response code or 0x9100 if unknown</p> |
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | responseData | <p>plugin response data</p> |

## FunctionDocumentation {#function-documentation}

## crdAddTechnology() <a href="#gadd5984f4ff1e0ed900d076c9cf2f3583" id="gadd5984f4ff1e0ed900d076c9cf2f3583"></a>

<p>int crdAddTechnology</p>

add technology to a running card detection started by crdStartDetect (23-06)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry \[in\] **options** card technology selection options (DFA12A) \[in\] **appid** optional application ID (DFA133) \[in\] **syncCard** synchronous card type, 0 for undefined (DFA133)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## crdDetect()\[1/2\] <a href="#ga8bec880c02a24ab758781862e535f6e6" id="ga8bec880c02a24ab758781862e535f6e6"></a> {#crddetect-12}

<p>int crdDetect</p>

Detect magstripe read, smart card insertion, contactless card or manual card data entry (23-01)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry \[in\] **options** card technology selection options (DFA12A) \[in\] **allow_cancel** if true enable cancel button (DFA109) \[in\] **timeout_ms** timeout in milliseconds, range 0..1275000ms, granularity varies from 500ms to 5s. \[out\] **tec_out** selected card technology (DFA108) \[out\] **emv_out** emv data \[in\] **appid** optional application ID (DFA133-\>DFDB40) \[in\] **syncCard** synchronous card type, 0 for undefined (DFA133-\>DFDB41) \[in\] **manual_mode** manual card entry mode (only considered if enabled in tec) (DFA017):0: enter PAN, expiration date and CVV1: enter PAN and expiration date2: enter only PAN \[in\] **format** optional input format string for CVV \[out\] **plugin_result** plugin result of the card detect trigger, if not NULL (DFA101)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## crdDetect()\[2/2\] <a href="#gac199163d2bc95feb16f8728301d5f067" id="gac199163d2bc95feb16f8728301d5f067"></a> {#crddetect-22}

<p>int crdDetect</p>

Detect magstripe read, smart card insertion, contactless card or manual card data entry (23-01)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry \[in\] **options** card technology selection options (DFA12A) \[in\] **allow_cancel** if true enable cancel button (DFA109) \[in\] **timeout_ms** timeout in milliseconds, range 0..1275000ms, granularity varies from 500ms to 5s. \[out\] **tec_out** selected card technology (DFA108) \[out\] **emv_out** emv data \[out\] **plugin_result** array containing plugin results (DFA101/FFA107) \[in\] **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) \[in\] **appid** optional application ID (DFA133-\>DFDB40) \[in\] **syncCard** synchronous card type, 0 for undefined (DFA133-\>DFDB41) \[in\] **manual_mode** manual card entry mode (only considered if enabled in tec) (DFA017):0: enter PAN, expiration date and CVV1: enter PAN and expiration date2: enter only PAN \[in\] **format** optional input format string for CVV

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## crdPollDetect() <a href="#ga832f6042c3fff724257309aa8f5b4cf2" id="ga832f6042c3fff724257309aa8f5b4cf2"></a>

<p>int crdPollDetect</p>

poll for detected card (23-04)

**Parameters**

\[out\] **tec_out** selected card technology, or 0 in case no card has been found, yet (DFA108) \[out\] **emv_out** emv data \[out\] **plugin_result** plugin result of the card detect trigger, if not NULL (DFA101)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## crdProvideCallbackResponse() <a href="#ga3cc73177ae72e9d3e4b05b2195ab7325" id="ga3cc73177ae72e9d3e4b05b2195ab7325"></a>

<p>int crdProvideCallbackResponse</p>

provide callback response (23-08)

**Parameters**

\[in\] **in** callback response data as EMVTxn object

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## crdRemoveTechnology() <a href="#ga3b6f80ede08e6b3496d31e17a661f714" id="ga3b6f80ede08e6b3496d31e17a661f714"></a>

<p>int crdRemoveTechnology</p>

remove technology to a running card detection started by crdStartDetect (23-07)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## crdStartDetect()\[1/2\] <a href="#ga20b2d4e611c8174a7c1caf9495236694" id="ga20b2d4e611c8174a7c1caf9495236694"></a> {#crdstartdetect-12}

<p>int crdStartDetect</p>

start card detection (23-03)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry \[in\] **options** card technology selection options (DFA12A) \[in\] **timeout** timeout in seconds \[in\] **appid** optional application ID (DFA133) \[in\] **syncCard** synchronous card type, 0 for undefined (DFA133) \[in\] **use_cb** if true trigger card callback \[in\] **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## crdStartDetect()\[2/2\] <a href="#ga8bc5cd034d411e399f34a04030df30d5" id="ga8bc5cd034d411e399f34a04030df30d5"></a> {#crdstartdetect-22}

<p>int crdStartDetect</p>

start card detection (23-03)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry \[in\] **options** card technology selection options (DFA12A) \[in\] **timeout** timeout in seconds \[in\] **appid** optional application ID (DFA133) \[in\] **syncCard** synchronous card type, 0 for undefined (DFA133) \[in\] **use_cb** if true trigger card callback

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## crdStopDetect() <a href="#ga0fde18f23d79784cd57999cebd88a47e" id="ga0fde18f23d79784cd57999cebd88a47e"></a>

<p>int crdStopDetect</p>

stop card detection (23-05) It may be required to call crdPollDetect to get the result in case a card was inserted between the last crdPollDetect and crdStopDetect

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## crdWaitForRemoval() <a href="#gaaa397799fb53215c5b5febbf78d4be54" id="gaaa397799fb53215c5b5febbf78d4be54"></a>

<p>int crdWaitForRemoval</p>

wait until the card is removed (only for contact) (23-02)

**Parameters**

\[in\] **timeout** timeout in seconds

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

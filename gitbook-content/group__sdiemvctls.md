---
hidden: true
title: EMV contactless interface
---

[Data Structures](#nested-classes) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [SDIClient::CTLSCandidateData](#structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data) |

|  |  |
|----|----|
| Functions |  |
| int  | [emvCtlsInit](#ga5d0d1ee0476110319706f7476480d31c) (int aidCount=0, unsigned options=0) |
| int  | [emvCtlsExit](#ga85aeca6437d27dca9eb0b6b6a1172d30) (unsigned options=0) |
| int  | [emvCtlsSetTermData](#gab27565ffa61750c9ac8b8cca545c2a9b) (const <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtlsGetTermData](#gaf98a186dddd05201e43fb0367a502970) (<a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtlsSetAppData](#gaa238762d5bd0c85c0a50b95678b8fb72) (unsigned kernel_id, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &aid, const <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtlsClearAppData](#ga9b0b06aff8b4da1a78862aebf314bb19) (unsigned kernel_id, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &aid) |
| int  | [emvCtlsClearAllAppData](#gac5b5a74d96f17842be87224b05e44848) () |
| int  | [emvCtlsSetTempAppData](#gacb9c40d93e7d5b69dfca505bfcfe5977) (unsigned kernel_id, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &aid, const <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtlsGetAppData](#ga7d2ce83ac34e16de199bb35aad617aad) (unsigned kernel_id, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &aid, <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtlsGetAppData](#ga42bb5335d41a03e5a0ab10ce578dacee) (bool first, <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtlsSetCAPKey](#gaf12ec57b22c2213232f119406a195858) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &rid, unsigned char index, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &key, unsigned char exp, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &hash=<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a>(), const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &revocationlist=<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a>()) |
| int  | [emvCtlsClearCAPKey](#ga40d2eb0dc5204e9cc36e1d3d01d9e60b) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &rid, unsigned char index) |
| int  | [emvCtlsClearAllCAPKey](#ga502ed08108d6332d81363fc91751c058) () |
| int  | [emvCtlsGetCAPKeys](#ga8abad069d0a36ab402c44fa40a95e070) (std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_c_a_p_key_info">CAPKeyInfo</a> \> &keys) |
| int  | [emvCtlsApplyConfig](#gabe7c2da50e7c99edd0be362edc318f1f) (unsigned options=7) |
| int  | [emvCtlsAddVirtualMapEntry](#ga9c9f0007a51a4e293e8f9111ad770eee) (int transaction, int currency, unsigned char vterminal) |
| int  | [emvCtlsClearVirtualMap](#ga272423d3c7d96317935bf6776ede13cc) () |
| int  | [emvCtlsSetupTransaction](#ga4f0949a8e60a80d1fe89ebfdd0e6229c) (<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &out, <a href="namespacevfisdi.md#a36a1ebacbf82d10a5db76377f8e225fd">EMVTransaction</a> type, const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> amount, const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &date, const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &time, const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 4 \> &counter, const <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &optional=<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a>()) |
| int  | [emvCtlsContinueOffline](#ga3d7af5b1abb9e82528090ea0b97af2a8) (<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &out, unsigned options=0) |
| int  | [emvCtlsContinueOnline](#gae66d22e73cdca107e0ee26f75001909d) (<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &out, bool onlineResult, const <a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &authResp=<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \>(), const <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &optional=<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a>()) |
| int  | [emvCtlsEndTransaction](#ga89c6ff048d7205fd370105d28c7aa281) (unsigned options=0) |
| int  | [emvCtlsGetCandidateData](#ga7aefe56baf8b79b66daa8ca540c18be1) (std::vector\< [CTLSCandidateData](#structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data) \> &out) |
| int  | [emvCtlsBreak](#ga78bc595e2e18a724bcd058293f20f42a) () |
| int  | [emvCtlsSmartReset](#gab1319402726475d6fd9dfe3985d9f61b) (unsigned char readeropt=0, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*atr=0) |
| int  | [emvCtlsSmartPowerOff](#gaa7ec430ad86d4cf17bfcd83d65223e58) (unsigned char options) |
| int  | [emvCtlsCardRemoval](#ga2f3d0a09fde2adb4976b4de20b4960eb) (unsigned timeout_ms) |
| int  | [emvCtlsTransparentCommand](#ga9d60e92ebb64869001ae8775d3bba79f) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |
| int  | [emvCtlsTransparentSend](#gad766e0414731ba8f65bb1893791ad088) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in) |
| int  | [emvCtlsTransparentReceive](#ga1624472f128b5045a8d9d5f8483b4c50) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |
| int  | [emvCtlsLEDMode](#ga63fc14bc59b3426b8a6e4dcd7a100c96) (unsigned char mode) |
| int  | [emvCtlsLED](#gad24435024b28327d135c061151db741a) (int led, unsigned char state) |
| int  | [emvCtlsSendReceive](#gac36d7c68fabaf8225c6acade1f4bfb1f) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |

## DetailedDescription {#detailed-description}

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfisdi::SDIClient::CTLSCandidateData <a href="#structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data" id="structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data"></a>

<p>struct vfisdi::SDIClient::CTLSCandidateData</p>

EMV CTLS candidate data

| Data Fields |  |  |
|----|----|----|
| unsigned char | aidLen | <p>(9F06)</p> |
| unsigned char | api | <p>(87)<br/></p> |
| string | bic | <p>(5F54)</p> |
| unsigned char | country2\[2\] | <p>(5F55)</p> |
| unsigned char | country3\[3\] | <p>(5F56)</p> |
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | discData | <p>(73)</p> |
| string | iban | <p>(5F53)</p> |
| unsigned char | iin\[4\] | <p>(42)<br/></p> |
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | selData | <p>(9F0A)</p> |

## FunctionDocumentation {#function-documentation}

## emvCtlsAddVirtualMapEntry() <a href="#ga9c9f0007a51a4e293e8f9111ad770eee" id="ga9c9f0007a51a4e293e8f9111ad770eee"></a>

<p>int emvCtlsAddVirtualMapEntry</p>

Add an entry to the CT virtual map. If an entry in the virtual map matches the transaction and currency, switch to the virtual terminal *vterminal*. Use -1 as wildcard for *transaction* or *currency* to match all. (40-06)

**Parameters**

\[in\] **transaction** transaction type (EMVTransaction) or -1 \[in\] **currency** currency (Currency) or -1 \[in\] **vterminal** virtual terminal number to switch to in case of a match

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsApplyConfig() <a href="#gabe7c2da50e7c99edd0be362edc318f1f" id="gabe7c2da50e7c99edd0be362edc318f1f"></a>

<p>int emvCtlsApplyConfig</p>

Store configuration (40-04)

**Parameters**

\[in\] **options** options bit mask:1: Apply application data if something changed since last configuration2: Apply terminal data if something changed since last configuration4: Apply CAP key data if something changed since last configuration8: Apply all configuration data even in case nothing changed

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsBreak() <a href="#ga78bc595e2e18a724bcd058293f20f42a" id="ga78bc595e2e18a724bcd058293f20f42a"></a>

<p>int emvCtlsBreak</p>

Universal CTLS break command (40-20)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsCardRemoval() <a href="#ga2f3d0a09fde2adb4976b4de20b4960eb" id="ga2f3d0a09fde2adb4976b4de20b4960eb"></a>

<p>int emvCtlsCardRemoval</p>

wait until contactless card removed or timeout (42-0A)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsClearAllAppData() <a href="#gac5b5a74d96f17842be87224b05e44848" id="gac5b5a74d96f17842be87224b05e44848"></a>

<p>int emvCtlsClearAllAppData</p>

clear all EMV CTLS application data (40-02)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsClearAllCAPKey() <a href="#ga502ed08108d6332d81363fc91751c058" id="ga502ed08108d6332d81363fc91751c058"></a>

<p>int emvCtlsClearAllCAPKey</p>

clear all EMV CTLS CAP keys (40-03)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsClearAppData() <a href="#ga9b0b06aff8b4da1a78862aebf314bb19" id="ga9b0b06aff8b4da1a78862aebf314bb19"></a>

<p>int emvCtlsClearAppData</p>

clear EMV CTLS application data (40-02)

**Parameters**

\[in\] **kernel_id** ID of contactless kernel \[in\] **aid** AID that is to be configured

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsClearCAPKey() <a href="#ga40d2eb0dc5204e9cc36e1d3d01d9e60b" id="ga40d2eb0dc5204e9cc36e1d3d01d9e60b"></a>

<p>int emvCtlsClearCAPKey</p>

clear EMV CTLS CAP key (40-03)

**Parameters**

\[in\] **rid** key register identifier \[in\] **index** key index

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsClearVirtualMap() <a href="#ga272423d3c7d96317935bf6776ede13cc" id="ga272423d3c7d96317935bf6776ede13cc"></a>

<p>int emvCtlsClearVirtualMap</p>

remove all entries from virtual map (40-06)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsContinueOffline() <a href="#ga3d7af5b1abb9e82528090ea0b97af2a8" id="ga3d7af5b1abb9e82528090ea0b97af2a8"></a>

<p>int emvCtlsContinueOffline</p>

CTLS EMV transaction (offline part \... including 1st cryptogram, depends on CTLS scheme) (40-11)

**Parameters**

\[out\] **out** transaction result data \[in\] **options** input parameter for special use case (see EMVContinueOfflineOptions)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsContinueOnline() <a href="#gae66d22e73cdca107e0ee26f75001909d" id="gae66d22e73cdca107e0ee26f75001909d"></a>

<p>int emvCtlsContinueOnline</p>

continue online EMV CTLS transaction (40-12)

**Parameters**

\[out\] **out** transaction result data \[in\] **onlineResult** online result (DF50) \[in\] **authResp** authorization response code from the host, ignored if onlineResult==false (8A) \[in\] **optional** optional transaction parameters

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsEndTransaction() <a href="#ga89c6ff048d7205fd370105d28c7aa281" id="ga89c6ff048d7205fd370105d28c7aa281"></a>

<p>int emvCtlsEndTransaction</p>

End transaction (40-15)

**Parameters**

\[in\] **options** options (see EMVEndOptions)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsExit() <a href="#ga85aeca6437d27dca9eb0b6b6a1172d30" id="ga85aeca6437d27dca9eb0b6b6a1172d30"></a>

<p>int emvCtlsExit</p>

exit EMV CTLS framework (40-00)

**Parameters**

\[in\] **options** EMV options

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsGetAppData()\[1/2\] <a href="#ga42bb5335d41a03e5a0ab10ce578dacee" id="ga42bb5335d41a03e5a0ab10ce578dacee"></a> {#emvctlsgetappdata-12}

<p>int emvCtlsGetAppData</p>

get EMV CTLS application data of first / next AID (40-02)

**Parameters**

\[in\] **first** if true get data of first AID, if false get data of next AID \[out\] **emv** EMV application data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsGetAppData()\[2/2\] <a href="#ga7d2ce83ac34e16de199bb35aad617aad" id="ga7d2ce83ac34e16de199bb35aad617aad"></a> {#emvctlsgetappdata-22}

<p>int emvCtlsGetAppData</p>

get EMV CTLS application data (40-02)

**Parameters**

\[in\] **kernel_id** ID of contactless kernel \[in\] **aid** AID \[out\] **emv** EMV application data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsGetCandidateData() <a href="#ga7aefe56baf8b79b66daa8ca540c18be1" id="ga7aefe56baf8b79b66daa8ca540c18be1"></a>

<p>int emvCtlsGetCandidateData</p>

get additional candidate information for reducing, resorting or displaying the mutual candidate list. (40-16)

**Parameters**

\[out\] **out** transaction result data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsGetCAPKeys() <a href="#ga8abad069d0a36ab402c44fa40a95e070" id="ga8abad069d0a36ab402c44fa40a95e070"></a>

<p>int emvCtlsGetCAPKeys</p>

read EMV CTLS CAP key information (40-03)

**Parameters**

\[out\] **keys** key information

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsGetTermData() <a href="#gaf98a186dddd05201e43fb0367a502970" id="gaf98a186dddd05201e43fb0367a502970"></a>

<p>int emvCtlsGetTermData</p>

get EMV CTLS terminal data (40-01)

**Parameters**

\[out\] **emv** EMV settings

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsInit() <a href="#ga5d0d1ee0476110319706f7476480d31c" id="ga5d0d1ee0476110319706f7476480d31c"></a>

<p>int emvCtlsInit</p>

initialize EMV CTLS framework (40-00)

**Parameters**

\[in\] **aidCount** number of AIDs \[in\] **options** EMV options (see EMVOptions)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)


{% hint style="info" %}
The EMV callback function must have been set before invoking this function
{% endhint %}

## emvCtlsLED() <a href="#gad24435024b28327d135c061151db741a" id="gad24435024b28327d135c061151db741a"></a>

<p>int emvCtlsLED</p>

switch LEDs (43-03)

**Parameters**

\[in\] **led** bit mask of LEDs to be switched, bit 0 represents LED 0, bit 1 represents LED 1, and so on. \[in\] **state** 0: off, 1: on, 2: blinking (only LED 0)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## emvCtlsLEDMode() <a href="#ga63fc14bc59b3426b8a6e4dcd7a100c96" id="ga63fc14bc59b3426b8a6e4dcd7a100c96"></a>

<p>int emvCtlsLEDMode</p>

Set mode of LED control (43-04)

**Parameters**

\[in\] **mode** LED mode control (see EMVLEDMode)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsSendReceive() <a href="#gac36d7c68fabaf8225c6acade1f4bfb1f" id="gac36d7c68fabaf8225c6acade1f4bfb1f"></a>

<p>int emvCtlsSendReceive</p>

send EMV command and receive result

**Parameters**

\[in\] **in** EMV command (DF01) \[out\] **out** EMV result (DF01)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsSetAppData() <a href="#gaa238762d5bd0c85c0a50b95678b8fb72" id="gaa238762d5bd0c85c0a50b95678b8fb72"></a>

<p>int emvCtlsSetAppData</p>

set EMV CTLS application data (40-02)

**Parameters**

\[in\] **kernel_id** ID of contactless kernel \[in\] **aid** AID that is to be configured \[in\] **emv** EMV application data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsSetCAPKey() <a href="#gaf12ec57b22c2213232f119406a195858" id="gaf12ec57b22c2213232f119406a195858"></a>

<p>int emvCtlsSetCAPKey</p>

set EMV CTLS CAP key

**Parameters**

\[in\] **rid** key register identifier \[in\] **index** key index \[in\] **key** key data \[in\] **exp** key exponent, use 1 for 63357 \[in\] **hash** if not empty 20 bytes hash \[in\] **revocationlist** if not empty key revocation list, each entry has 3 bytes serial number

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsSetTempAppData() <a href="#gacb9c40d93e7d5b69dfca505bfcfe5977" id="gacb9c40d93e7d5b69dfca505bfcfe5977"></a>

<p>int emvCtlsSetTempAppData</p>

set EMV CTLS application data for current transaction (40-02)

**Parameters**

\[in\] **kernel_id** ID of contactless kernel \[in\] **aid** AID that is to be configured \[in\] **emv** EMV application data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsSetTermData() <a href="#gab27565ffa61750c9ac8b8cca545c2a9b" id="gab27565ffa61750c9ac8b8cca545c2a9b"></a>

<p>int emvCtlsSetTermData</p>

set EMV CTLS terminal data (40-01)

**Parameters**

\[in\] **emv** EMV settings

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsSetupTransaction() <a href="#ga4f0949a8e60a80d1fe89ebfdd0e6229c" id="ga4f0949a8e60a80d1fe89ebfdd0e6229c"></a>

<p>int emvCtlsSetupTransaction</p>

setup EMV CTLS transaction (40-10)

**Parameters**

\[in\] **type** transaction type (9C) \[in\] **amount** transaction amount (9F02) \[in\] **date** transaction date (YYMMDD) (9A) \[in\] **time** transaction time (HHMMSS) (9F21) \[in\] **counter** transaction sequence counter (9F41) \[in\] **optional** optional transaction parameters \[out\] **out** transaction result data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsSmartPowerOff() <a href="#gaa7ec430ad86d4cf17bfcd83d65223e58" id="gaa7ec430ad86d4cf17bfcd83d65223e58"></a>

<p>int emvCtlsSmartPowerOff</p>

deactivate chip card. (42-04)

**Parameters**

\[in\] **options** reader options (see EMVCtReaderOptions)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsSmartReset() <a href="#gab1319402726475d6fd9dfe3985d9f61b" id="gab1319402726475d6fd9dfe3985d9f61b"></a>

<p>int emvCtlsSmartReset</p>

Detect if card is present in the RF field (read ATR) (42-02)

**Parameters**

\[in\] **readeropt** reader options (see EMVCtlsReaderOptions) \[out\] **atr** if not NULL, the ATR is returned here

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsTransparentCommand() <a href="#ga9d60e92ebb64869001ae8775d3bba79f" id="ga9d60e92ebb64869001ae8775d3bba79f"></a>

<p>int emvCtlsTransparentCommand</p>

Transparently send a command to the reader and receive it\'s response (42-07) only supported for VFI reader.

**Parameters**

\[in\] **in** reader command \[out\] **out** reader response

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsTransparentReceive() <a href="#ga1624472f128b5045a8d9d5f8483b4c50" id="ga1624472f128b5045a8d9d5f8483b4c50"></a>

<p>int emvCtlsTransparentReceive</p>

Transparent VFI reader access: Receive a response (42-09) only supported for VFI reader.

**Parameters**

\[out\] **out** reader response

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtlsTransparentSend() <a href="#gad766e0414731ba8f65bb1893791ad088" id="gad766e0414731ba8f65bb1893791ad088"></a>

<p>int emvCtlsTransparentSend</p>

Transparently send a command to the reader (42-08) only supported for VFI reader.

**Parameters**

\[in\] **in** reader command

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

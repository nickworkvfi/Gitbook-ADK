---
hidden: true
title: EMV contact interface
---

[Data Structures](#nested-classes) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [SDIClient::CTCandidateData](#structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data) |
| struct   | [SDIClient::CTCandidate](#structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate) |
| struct   | [SDIClient::AdditionalCardTag](#structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag) |

|  |  |
|----|----|
| Functions |  |
| int  | [emvCtInit](#gad6711aee99833a043d48f3e8fee06bfe) (int aidCount=0, unsigned options=0) |
| int  | [emvCtExit](#gae22aec496c1680b13a01aa24479ef01a) (unsigned options=0) |
| int  | [emvCtSetTermData](#gaff02863da38410b9eee8353969430986) (const <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtGetTermData](#gaf1c30d9a23a3e9efa1be3a980b9dbaf9) (<a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtSetAppData](#gad482a37b1082d447a9e161ade0227866) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &aid, const <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtClearAppData](#gabeb9eb402b2eb472d9669cb539d70c21) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &aid) |
| int  | [emvCtClearAllAppData](#ga15d5acbf680a16bb9fa58146232bd53d) () |
| int  | [emvCtSetTempAppData](#ga008b2dddcc79d3243e8e78d508c51831) (const <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtGetAppData](#ga3dfc457cefe50113a11c938966acc7ca) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &aid, <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtGetAppData](#ga0cdd403f2839699d757edbd1079f2996) (bool first, <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |
| int  | [emvCtSetCAPKey](#ga25113df529675bc6620bd099ed4a0316) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &rid, unsigned char index, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &key, unsigned char exp, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &hash=<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a>(), const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &revocationlist=<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a>()) |
| int  | [emvCtClearCAPKey](#ga3237b8c051cba8a9de6bb7b1deb2d9b4) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &rid, unsigned char index) |
| int  | [emvCtClearAllCAPKey](#ga6acbc3afd9b3684c2408f33dc7adb511) () |
| int  | [emvCtGetCAPKeys](#ga6893b0ae2ebb1d3acdfd73f34257dedb) (std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_c_a_p_key_info">CAPKeyInfo</a> \> &keys) |
| int  | [emvCtApplyConfig](#ga9fa6b39a32dac9e3dace2da24b13ef28) (unsigned options=0) |
| int  | [emvCtAddVirtualMapEntry](#gaed1f434e83f7bad87bd10297db1f46e1) (int transaction, int currency, unsigned char vterminal) |
| int  | [emvCtClearVirtualMap](#ga941c47f8f9d3650dadcc9da8eac4790f) () |
| int  | [emvCtSmartDetect](#ga76e3cfe87f8b9f377bb3f513fe8b85a8) (int timeout_ms) |
| int  | [emvCtActivate](#ga1b64520292eb100379a66506410e1498) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*atr=0) |
| int  | [emvCtActivate](#gaac201fa1058ad58716d5d71459689f26) (unsigned options, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*atr=0) |
| int  | [emvCtDeactivate](#gad4b483aedd67eed8acba2de9401a4e5e) () |
| int  | [emvCtDeactivate](#gac72e99d5553cb089389f210f79a92148) (unsigned options) |
| int  | [emvCtStartTransaction](#ga7d82aeffa340e1da5b83f494b7814567) (<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &out, <a href="namespacevfisdi.md#a36a1ebacbf82d10a5db76377f8e225fd">EMVTransaction</a> type, const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> amount, const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &date, const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &time, const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 4 \> &counter, const <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &optional=<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a>()) |
| int  | [emvCtContinueOffline](#ga86ab37913621b426168287bd056b65e0) (<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &out, const <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &optional=<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a>()) |
| int  | [emvCtContinueOnline](#gaee89fc9dd333bb118002d81a31dd3dc0) (<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &out, bool onlineResult, const <a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &authResp=<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \>(), const <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &optional=<a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a>()) |
| int  | [emvCtUpdateTxnTags](#ga6c8b8d13261c96bd437fe3d0d2276730) (unsigned options, const <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &config) |
| int  | [emvCtEndTransaction](#gab395504ca5ba10279b3d2558d8f2f445) (unsigned options=0) |
| int  | [emvCtGetCandidateData](#ga6c08e41791ce0350c0d60cc3bff270c3) (std::vector\< [CTCandidateData](#structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data) \> &out) |
| int  | [emvCtSendOfflinePIN](#ga747fff73942aeb4dd3044e21b92fe2f6) (unsigned short &chipresult) |
| int  | [emvCtCheckSupportedAID](#gaefc0a540fb8dca7dc8963b38d12483dd) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &aid, unsigned char asi, const std::string &defaultLabel, std::vector\< [CTCandidate](#structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate) \> &candlist, unsigned short \*sw12=0, const std::vector\< [AdditionalCardTag](#structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag) \> \*adtCrdTags=0) |
| int  | [emvCtLED](#gaec12efc7ee796e4568cacad0563a8e4c) (bool ledState) |
| int  | [emvCtSendReceive](#gae7159a6fea1148a5b5cd55d5b92ada80) (unsigned options, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |

## DetailedDescription {#detailed-description}

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfisdi::SDIClient::CTCandidateData <a href="#structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data" id="structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data"></a>

<p>struct vfisdi::SDIClient::CTCandidateData</p>

EMV CT candidate data

| Data Fields |  |  |
|----|----|----|
| unsigned char | aidLen | <p>(9F06)</p> |
| unsigned char | api | <p>(87)<br/></p> |
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | asf | <p>(DF62)</p> |
| string | bic | <p>(5F54)</p> |
| unsigned char | codeTableIndex | <p>(9F11)</p> |
| unsigned char | country2\[2\] | <p>(5F55)</p> |
| unsigned char | country3\[3\] | <p>(5F56)</p> |
| string | iban | <p>(5F33)</p> |
| unsigned char | iin\[4\] | <p>(42)<br/></p> |
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | selData | <p>(9F0A)</p> |

## vfisdi::SDIClient::CTCandidate <a href="#structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate" id="structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate"></a>

<p>struct vfisdi::SDIClient::CTCandidate</p>

| Data Fields |  |  |
|----|----|----|
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | aid | <p>AID returned by the card (4F)</p> |
| unsigned char | api | <p>Application priority indicator (87)</p> |
| unsigned char | codeTableIndex | <p>character code table index (Value \'1\' - \'A\') or 0 = not specified (ISO 8859) (9F11)<br/>indicator which label went to text: EMVL2_DFLTXT=0x80 for default label EMVL2_APPLBL=0x40 for application preferred name (\'9F12\') EMVL2_APPLBL=0x20 for application label (\'50\')</p> |
| unsigned char | languagePref | <p>language preference, converted to small letters (5F2D)</p> |
| string | text | <p>text supplied by app (50)</p> |
| string | text2 | <p>secondary text field (DF3B)</p> |

## vfisdi::SDIClient::AdditionalCardTag <a href="#structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag" id="structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag"></a>

<p>struct vfisdi::SDIClient::AdditionalCardTag</p>

additional card tag entry for additional tag store configuration

| Data Fields |  |  |
|----|----|----|
| unsigned char | maxLen | <p>maximun data length</p> |
| unsigned char | minLen | <p>minimum data length</p> |
| unsigned | tag | <p>tag number</p> |
| <a href="namespacevfisdi.md#a20ad31c9a6f36fcc40996394873fa695">EMVType</a> | type | <p>type of data</p> |

## FunctionDocumentation {#function-documentation}

## emvCtActivate()\[1/2\] <a href="#ga1b64520292eb100379a66506410e1498" id="ga1b64520292eb100379a66506410e1498"></a> {#emvctactivate-12}

<p>int emvCtActivate</p>

Activate smart card (41-02)

**Parameters**

\[out\] **atr** if not NULL, the ATR is returned here

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## emvCtActivate()\[2/2\] <a href="#gaac201fa1058ad58716d5d71459689f26" id="gaac201fa1058ad58716d5d71459689f26"></a> {#emvctactivate-22}

<p>int emvCtActivate</p>

Activate smart card (41-02)

**Parameters**

\[in\] **options** bit mask with options from EMVCtReaderOptions (DF06) \[out\] **atr** if not NULL, the ATR is returned here

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## emvCtAddVirtualMapEntry() <a href="#gaed1f434e83f7bad87bd10297db1f46e1" id="gaed1f434e83f7bad87bd10297db1f46e1"></a>

<p>int emvCtAddVirtualMapEntry</p>

Add an entry to the CT virtual map. If an entry in the virtual map matches the transaction and currency, switch to the virtual terminal *vterminal*. Use -1 as wildcard for *transaction* or *currency* to match all. (39-06)

**Parameters**

\[in\] **transaction** transaction type (EMVTransaction) or -1 \[in\] **currency** currency (Currency) or -1 \[in\] **vterminal** virtual terminal number to switch to in case of a match

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)


{% hint style="info" %}
The wildcard -1 cannot be used for both *transaction* and *currency* at the same time.
{% endhint %}

## emvCtApplyConfig() <a href="#ga9fa6b39a32dac9e3dace2da24b13ef28" id="ga9fa6b39a32dac9e3dace2da24b13ef28"></a>

<p>int emvCtApplyConfig</p>

Store configuration (39-04)

**Parameters**

\[in\] **options** options

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtCheckSupportedAID() <a href="#gaefc0a540fb8dca7dc8963b38d12483dd" id="gaefc0a540fb8dca7dc8963b38d12483dd"></a>

<p>int emvCtCheckSupportedAID</p>

Do List Of Application processing for a single terminal AID. (39-17)

**Parameters**

\[in\] **aid** terminal AID \[in\] **asi** application selection indicator 0=exact, 1=partial \[in\] **defaultLabel** optional default application label \[out\] **candlist** candidates found \[out\] **sw12** if not NULL status word returned by card \'0000\' for communication problem \[in\] **adtCrdTags** optional list of additional tags to be stored in tag store

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtClearAllAppData() <a href="#ga15d5acbf680a16bb9fa58146232bd53d" id="ga15d5acbf680a16bb9fa58146232bd53d"></a>

<p>int emvCtClearAllAppData</p>

clear all EMV CT application data (39-02)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtClearAllCAPKey() <a href="#ga6acbc3afd9b3684c2408f33dc7adb511" id="ga6acbc3afd9b3684c2408f33dc7adb511"></a>

<p>int emvCtClearAllCAPKey</p>

clear all EMV CT CAP keys (39-03)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtClearAppData() <a href="#gabeb9eb402b2eb472d9669cb539d70c21" id="gabeb9eb402b2eb472d9669cb539d70c21"></a>

<p>int emvCtClearAppData</p>

clear EMV CT application data (39-02)

**Parameters**

\[in\] **aid** AID that is to be cleared

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtClearCAPKey() <a href="#ga3237b8c051cba8a9de6bb7b1deb2d9b4" id="ga3237b8c051cba8a9de6bb7b1deb2d9b4"></a>

<p>int emvCtClearCAPKey</p>

clear EMV CT CAP key (39-03)

**Parameters**

\[in\] **rid** key register identifier \[in\] **index** key index

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtClearVirtualMap() <a href="#ga941c47f8f9d3650dadcc9da8eac4790f" id="ga941c47f8f9d3650dadcc9da8eac4790f"></a>

<p>int emvCtClearVirtualMap</p>

remove all entries from virtual map (39-06)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtContinueOffline() <a href="#ga86ab37913621b426168287bd056b65e0" id="ga86ab37913621b426168287bd056b65e0"></a>

<p>int emvCtContinueOffline</p>

continue offline EMV CT transaction (39-11)

**Parameters**

\[out\] **out** transaction result data \[in\] **optional** optional transaction parameters, these may be used to change

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtContinueOnline() <a href="#gaee89fc9dd333bb118002d81a31dd3dc0" id="gaee89fc9dd333bb118002d81a31dd3dc0"></a>

<p>int emvCtContinueOnline</p>

continue online EMV CT transaction (39-12)

**Parameters**

\[out\] **out** transaction result data \[in\] **onlineResult** online result, true if transaction was successful, false if not (DF50) \[in\] **authResp** authorization response code from the host, ignored if onlineResult==false (8A) \[in\] **optional** optional transaction parameters

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtDeactivate()\[1/2\] <a href="#gad4b483aedd67eed8acba2de9401a4e5e" id="gad4b483aedd67eed8acba2de9401a4e5e"></a> {#emvctdeactivate-12}

<p>int emvCtDeactivate</p>

Deactivate smart card (41-04)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## emvCtDeactivate()\[2/2\] <a href="#gac72e99d5553cb089389f210f79a92148" id="gac72e99d5553cb089389f210f79a92148"></a> {#emvctdeactivate-22}

<p>int emvCtDeactivate</p>

Deactivate smart card (41-04)

**Parameters**

\[in\] **options** bit mask with options from EMVCtReaderOptions (DF06)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## emvCtEndTransaction() <a href="#gab395504ca5ba10279b3d2558d8f2f445" id="gab395504ca5ba10279b3d2558d8f2f445"></a>

<p>int emvCtEndTransaction</p>

End transaction (39-15)

**Parameters**

\[in\] **options** reserved for future use

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtExit() <a href="#gae22aec496c1680b13a01aa24479ef01a" id="gae22aec496c1680b13a01aa24479ef01a"></a>

<p>int emvCtExit</p>

exit EMV CTLS framework (39-00)

**Parameters**

\[in\] **options** EMV options

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtGetAppData()\[1/2\] <a href="#ga0cdd403f2839699d757edbd1079f2996" id="ga0cdd403f2839699d757edbd1079f2996"></a> {#emvctgetappdata-12}

<p>int emvCtGetAppData</p>

get EMV CT application data of first / next AID (39-02)

**Parameters**

\[in\] **first** if true get data of first AID, if false get data of next AID \[out\] **emv** EMV application data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtGetAppData()\[2/2\] <a href="#ga3dfc457cefe50113a11c938966acc7ca" id="ga3dfc457cefe50113a11c938966acc7ca"></a> {#emvctgetappdata-22}

<p>int emvCtGetAppData</p>

get EMV CT application data (39-02)

**Parameters**

\[in\] **aid** AID \[out\] **emv** EMV application data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtGetCandidateData() <a href="#ga6c08e41791ce0350c0d60cc3bff270c3" id="ga6c08e41791ce0350c0d60cc3bff270c3"></a>

<p>int emvCtGetCandidateData</p>

get additional candidate information for reducing, resorting or displaying the mutual candidate list. (39-16)

**Parameters**

\[out\] **out** transaction result data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtGetCAPKeys() <a href="#ga6893b0ae2ebb1d3acdfd73f34257dedb" id="ga6893b0ae2ebb1d3acdfd73f34257dedb"></a>

<p>int emvCtGetCAPKeys</p>

read EMV CT CAP key information (39-03)

**Parameters**

\[out\] **keys** key information

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtGetTermData() <a href="#gaf1c30d9a23a3e9efa1be3a980b9dbaf9" id="gaf1c30d9a23a3e9efa1be3a980b9dbaf9"></a>

<p>int emvCtGetTermData</p>

get EMV CT terminal data (39-01)

**Parameters**

\[out\] **emv** EMV settings

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtInit() <a href="#gad6711aee99833a043d48f3e8fee06bfe" id="gad6711aee99833a043d48f3e8fee06bfe"></a>

<p>int emvCtInit</p>

initialize EMV CT framework (39-00)

**Parameters**

\[in\] **aidCount** number of AIDs \[in\] **options** EMV options (see EMVOptions)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)


{% hint style="info" %}
The EMV callback function must have been set before invoking this function
{% endhint %}

## emvCtLED() <a href="#gaec12efc7ee796e4568cacad0563a8e4c" id="gaec12efc7ee796e4568cacad0563a8e4c"></a>

<p>int emvCtLED</p>

Control the Smart Card Reader LEDs. (41-09)

**Parameters**

\[in\] **ledState** led state, on if true, off if false.

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtSendOfflinePIN() <a href="#ga747fff73942aeb4dd3044e21b92fe2f6" id="ga747fff73942aeb4dd3044e21b92fe2f6"></a>

<p>int emvCtSendOfflinePIN</p>

send entered (ofline) PIN to chip card for verification. (41-05)

**Parameters**

\[out\] **chipresult** result code from the chip card

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtSendReceive() <a href="#gae7159a6fea1148a5b5cd55d5b92ada80" id="gae7159a6fea1148a5b5cd55d5b92ada80"></a>

<p>int emvCtSendReceive</p>

send EMV command and receive result

**Parameters**

\[in\] **options** bit mask with options from EMVCtReaderOptions (DF06) \[in\] **in** EMV command (DF01) \[out\] **out** EMV result (DF01)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtSetAppData() <a href="#gad482a37b1082d447a9e161ade0227866" id="gad482a37b1082d447a9e161ade0227866"></a>

<p>int emvCtSetAppData</p>

set EMV CT application data (39-02)

**Parameters**

\[in\] **aid** AID that is to be configured \[in\] **emv** EMV application data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtSetCAPKey() <a href="#ga25113df529675bc6620bd099ed4a0316" id="ga25113df529675bc6620bd099ed4a0316"></a>

<p>int emvCtSetCAPKey</p>

set EMV CT CAP key (39-03)

**Parameters**

\[in\] **rid** key register identifier \[in\] **index** key index \[in\] **key** key data \[in\] **exp** key exponent, use 1 for 63357 \[in\] **hash** if not empty 20 bytes hash \[in\] **revocationlist** if not empty key revocation list, each entry has 3 bytes serial number

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtSetTempAppData() <a href="#ga008b2dddcc79d3243e8e78d508c51831" id="ga008b2dddcc79d3243e8e78d508c51831"></a>

<p>int emvCtSetTempAppData</p>

set EMV CT application data for current transaction (39-02)

{% hint style="info" %}
Transaction data (such as time stamp or transaction type) can be updated with [emvCtUpdateTxnTags()](#ga6c8b8d13261c96bd437fe3d0d2276730)
{% endhint %} **Parameters**

\[in\] **emv** EMV application data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtSetTermData() <a href="#gaff02863da38410b9eee8353969430986" id="gaff02863da38410b9eee8353969430986"></a>

<p>int emvCtSetTermData</p>

set EMV CT terminal data (39-01)

**Parameters**

\[in\] **emv** EMV settings

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtSmartDetect() <a href="#ga76e3cfe87f8b9f377bb3f513fe8b85a8" id="ga76e3cfe87f8b9f377bb3f513fe8b85a8"></a>

<p>int emvCtSmartDetect</p>

Handle the Smart Card Detection. It can be used for both a card request and a card removal. (41-01) For detecting card removal it has to be invoked with *timeout_ms==0* in a loop and the return code has to be checked.

**Parameters**

\[in\] **timeout_ms** timeout in milliseconds, range 0..1275000ms, granularity varies from 500ms to 5s.

### Returns

0 if card inserted, 1 if card removed, else SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## emvCtStartTransaction() <a href="#ga7d82aeffa340e1da5b83f494b7814567" id="ga7d82aeffa340e1da5b83f494b7814567"></a>

<p>int emvCtStartTransaction</p>

start EMV CT transaction (39-10)

**Parameters**

\[in\] **type** transaction type, (see EMVTransaction) (9C) \[in\] **amount** transaction amount (9F02) \[in\] **date** transaction date (9A) \[in\] **time** transaction time (9F21) \[in\] **counter** transaction sequence counter (9F41) \[in\] **optional** optional transaction parameters \[out\] **out** transaction result data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

## emvCtUpdateTxnTags() <a href="#ga6c8b8d13261c96bd437fe3d0d2276730" id="ga6c8b8d13261c96bd437fe3d0d2276730"></a>

<p>int emvCtUpdateTxnTags</p>

Update one or several kernel tags during transaction.
This update is restricted to certain (not protected) EMV L2 kernel tags, if there is a need to change these tags during the transaction temporarily and for this transaction only but not for the general configuration. Use carefully. (39-13)

{% hint style="info" %}
Application configuration data has to be updated with [emvCtSetTempAppData()](#ga008b2dddcc79d3243e8e78d508c51831).
{% endhint %} **Parameters**

\[in\] **options** update options (see EMVUpdateOptions) \[in\] **config** configuration containing the settings to be updated

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0) or SDI EMV status code (<a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMVStatus</a>) (\>0)

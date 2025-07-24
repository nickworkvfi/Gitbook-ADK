---
hidden: true
title: Data interface
---

[Data Structures](#nested-classes) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [SDIClient::PlaceHolder](#structvfisdi_1_1_s_d_i_client_1_1_place_holder) |
| struct   | [SDIClient::Matching](#structvfisdi_1_1_s_d_i_client_1_1_matching) |

|  |  |
|----|----|
| Functions |  |
| int  | [dataGetEncData](#ga813d7fedf922c7951b19a9a6fdb2fd88) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &taglist, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &appdata, unsigned options, bool useStoredTX, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv=0, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn=0) |
| int  | [dataGetEncData](#ga74cc79cb0a1b2ea695b3a0586871aa2d) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &taglist, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &appdata, unsigned options, bool useStoredTX, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn, bool incrementKSN, unsigned keysetID=0, unsigned masterKeysetID=0) |
| int  | [dataGetEncMsgData](#ga324bf519eb120e81b5077c1c0172766b) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &msgtemplate, const std::vector\< [PlaceHolder](#structvfisdi_1_1_s_d_i_client_1_1_place_holder) \> &placeholder, bool useStoredTX, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv=0, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn=0) |
| int  | [dataGetEncMsgData](#gac30545f8a9195769f65fd4ec25cc333c) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &msgtemplate, const std::vector\< [PlaceHolder](#structvfisdi_1_1_s_d_i_client_1_1_place_holder) \> &placeholder, bool useStoredTX, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn, bool incrementKSN, unsigned keysetID=0, unsigned masterKeysetID=0) |
| int  | [dataFetchTxnTags](#gaf256c50646cbcf1b70a58200d4b1b9ca) (const std::vector\< unsigned \> &taglist, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, unsigned char mode=0, bool cleartext_date=false) |
| int  | [dataFetchTxnTags](#ga9acbbd4302cbf4267f71e086f0a56128) (const std::vector\< unsigned \> &taglist, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, unsigned char mode, bool cleartext_date, unsigned options) |
| int  | [dataClearDataStore](#ga1b5cc34ed0f55220536c998e0c62ecbb) () |
| int  | [dataGetMsgSignature](#ga8291925fbde8e8f922860f33853dbeee) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &msgtemplate, const std::vector\< [PlaceHolder](#structvfisdi_1_1_s_d_i_client_1_1_place_holder) \> &placeholder, bool useStoredTX, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv=0, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn=0) |
| int  | [dataGetMsgSignature](#gadf11aa6f505b091c986e050e6ee066bd) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &msgtemplate, const std::vector\< [PlaceHolder](#structvfisdi_1_1_s_d_i_client_1_1_place_holder) \> &placeholder, bool useStoredTX, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn, bool incrementKSN, unsigned keysetID=0, unsigned masterKeysetID=0) |
| int  | [dataPerformValidationChecks](#gaead51427c138526d80b25c6fd02752c6) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &date, [Matching](#structvfisdi_1_1_s_d_i_client_1_1_matching) &match, std::vector\< [Matching](#structvfisdi_1_1_s_d_i_client_1_1_matching) \> \*additional=0) |
| int  | [dataPerformValidationChecks](#ga12fc3569f275c9430156069c0b08677e) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &date, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &iin, [Matching](#structvfisdi_1_1_s_d_i_client_1_1_matching) &match, std::vector\< [Matching](#structvfisdi_1_1_s_d_i_client_1_1_matching) \> \*additional=0) |
| int  | [dataGetValidationInfo](#gae50b2968049b499ce55b7227c0602857) (std::string &out) |
| int  | [dataGetEncTxnData](#ga45075f087fd2f85908653f8226074c91) (const std::vector\< unsigned \> &taglist, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &encrypted) |
| int  | [dataSetEncTxnData](#ga01f90cbfe9791b31756c26a3025b6d9d) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &encrypted) |
| int  | [dataEndEncTxnData](#gaf159af0b9e2c4bf00124ff3d56cfe126) () |
| int  | [dataGetEmvInfo](#gab10031b5d21dc71c8661d0c5796e1225) (<a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> &emv) |

## DetailedDescription {#detailed-description}

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfisdi::SDIClient::PlaceHolder <a href="#structvfisdi_1_1_s_d_i_client_1_1_place_holder" id="structvfisdi_1_1_s_d_i_client_1_1_place_holder"></a>

<p>struct vfisdi::SDIClient::PlaceHolder</p>

Placeholder data

| Data Fields |  |  |
|----|----|----|
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | appdata | <p>application data</p> |
| unsigned | options | <p>data options (<a href="namespacevfisdi.md#a7fee88318f15e2a1c4a8d13aa0de5e7f">DataOption</a>)</p> |
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | taglist | <p>tag list (DOL)</p> |

## vfisdi::SDIClient::Matching <a href="#structvfisdi_1_1_s_d_i_client_1_1_matching" id="structvfisdi_1_1_s_d_i_client_1_1_matching"></a>

<p>struct vfisdi::SDIClient::Matching</p>

matching record

| Data Fields |  |  |
|----|----|----|
| unsigned char | activationCheck | <p>result of activation check (DFA132)</p> |
| unsigned char | expirationCheck | <p>result of expiration check (DFA12D)</p> |
| unsigned char | luhnCheck | <p>result of luhn check (DFA12E)</p> |
| string | record | <p>matching record data (DFA12C)</p> |

## FunctionDocumentation {#function-documentation}

## dataClearDataStore() <a href="#ga1b5cc34ed0f55220536c998e0c62ecbb" id="ga1b5cc34ed0f55220536c998e0c62ecbb"></a>

<p>int dataClearDataStore</p>

clear data store (29-03)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataEndEncTxnData() <a href="#gaf159af0b9e2c4bf00124ff3d56cfe126" id="gaf159af0b9e2c4bf00124ff3d56cfe126"></a>

<p>int dataEndEncTxnData</p>

Finish encrypted transaction data procedure inside the SDI-Server. (29-09)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataFetchTxnTags()\[1/2\] <a href="#ga9acbbd4302cbf4267f71e086f0a56128" id="ga9acbbd4302cbf4267f71e086f0a56128"></a> {#datafetchtxntags-12}

<p>int dataFetchTxnTags</p>

fetch non-sensitive transaction data from SDI server (29-02)

**Parameters**

\[in\] **taglist** list of tags to extract \[out\] **out** fetched tags with information \[in\] **mode** fetch mode: 0: sensitive tags are not returned (default) 1: sensitive tags are returned with zero length, 2: sensitive tags are returned with correct length but overwritten with 0xff \[in\] **cleartext_date** request expiration date (5F24) encrypted if false (default) or in clear if true \[in\] **options** data options (DFA13A) 0: default 1: Use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataFetchTxnTags()\[2/2\] <a href="#gaf256c50646cbcf1b70a58200d4b1b9ca" id="gaf256c50646cbcf1b70a58200d4b1b9ca"></a> {#datafetchtxntags-22}

<p>int dataFetchTxnTags</p>

fetch non-sensitive transaction data from SDI server (29-02)

**Parameters**

\[in\] **taglist** list of tags to extract \[out\] **out** fetched tags with information \[in\] **mode** fetch mode: 0 sensitive tags are not returned, 1: sensitive tags are returned with zero length, 2: sensitive tags are returned with correct length but overwritten with 0xff \[in\] **cleartext_date** request expiration date (5F24) encrypted if false or in clear if true

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataGetEmvInfo() <a href="#gab10031b5d21dc71c8661d0c5796e1225" id="gab10031b5d21dc71c8661d0c5796e1225"></a>

<p>int dataGetEmvInfo</p>

Get EMV data from SDI EMV information cache (29-0A)

**Parameters**

\[out\] **emv** EMV information

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataGetEncData()\[1/2\] <a href="#ga74cc79cb0a1b2ea695b3a0586871aa2d" id="ga74cc79cb0a1b2ea695b3a0586871aa2d"></a> {#datagetencdata-12}

<p>int dataGetEncData</p>

Encrypt card holder sensitive data. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the result as encrypted BERTLV buffer. (29-01)

**Parameters**

\[in\] **handle** crypto handle \[in\] **taglist** tag list consisting of tag-length pairs \[in\] **appdata** application data \[in\] **options** data options (DataOption) \[in\] **useStoredTX** \[out\] **out** encrypted block containing the result of tags with card holder sensitive data \[in,out\] **iv** if not NULL optional initialization vector \[out\] **ksn** if not NULL key serial number \[in\] **incrementKSN** increment KSN with encryption (default: false) \[in\] **keysetID** keyset ID (1,2,3,\...), 0: use default \[in\] **masterKeysetID** master keyset ID (1,2,3,\...), 0: use default

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)


{% hint style="info" %}
incrementKSN may be ignored by ADKSEC depending on host configuration
{% endhint %}
{% hint style="info" %}
masterKeysetID is only relevant for Android. When used keysetID must be provided, too.
{% endhint %}

## dataGetEncData()\[2/2\] <a href="#ga813d7fedf922c7951b19a9a6fdb2fd88" id="ga813d7fedf922c7951b19a9a6fdb2fd88"></a> {#datagetencdata-22}

<p>int dataGetEncData</p>

Encrypt card holder sensitive data. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the result as encrypted BERTLV buffer. (29-01)

**Parameters**

\[in\] **handle** crypto handle \[in\] **taglist** tag list consisting of tag-length pairs \[in\] **appdata** application data \[in\] **options** data options (DataOption) \[in\] **useStoredTX** \[out\] **out** encrypted block containing the result of tags with card holder sensitive data \[in,out\] **iv** if not NULL optional initialization vector \[out\] **ksn** if not NULL key serial number

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataGetEncMsgData()\[1/2\] <a href="#gac30545f8a9195769f65fd4ec25cc333c" id="gac30545f8a9195769f65fd4ec25cc333c"></a> {#datagetencmsgdata-12}

<p>int dataGetEncMsgData</p>

Encrypt complete host messages that fills sensitive data elements into placeholders. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the encrypted message. (29-01)

**Parameters**

\[in\] **handle** crypto handle \[in\] **msgtemplate** message template including placeholders for sensitive data elements \[in\] **placeholder** placeholder data \[in\] **useStoredTX** \[out\] **out** encrypted block containing the result of tags with card holder sensitive data \[in,out\] **iv** if not NULL optional initialization vector \[out\] **ksn** if not NULL key serial number \[in\] **incrementKSN** increment KSN with encryption (default: false) \[in\] **keysetID** keyset ID (1,2,3,\...), 0: use default \[in\] **masterKeysetID** master keyset ID (1,2,3,\...), 0: use default

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)


{% hint style="info" %}
incrementKSN may be ignored by ADKSEC depending on host configuration
{% endhint %}
{% hint style="info" %}
masterKeysetID is only relevant for Android. When used keysetID must be provided, too.
{% endhint %}

## dataGetEncMsgData()\[2/2\] <a href="#ga324bf519eb120e81b5077c1c0172766b" id="ga324bf519eb120e81b5077c1c0172766b"></a> {#datagetencmsgdata-22}

<p>int dataGetEncMsgData</p>

Encrypt complete host messages that fills sensitive data elements into placeholders. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the encrypted message. (29-01)

**Parameters**

\[in\] **handle** crypto handle \[in\] **msgtemplate** message template including placeholders for sensitive data elements \[in\] **placeholder** placeholder data \[in\] **useStoredTX** \[out\] **out** encrypted block containing the result of tags with card holder sensitive data \[in,out\] **iv** if not NULL optional initialization vector \[out\] **ksn** if not NULL key serial number

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataGetEncTxnData() <a href="#ga45075f087fd2f85908653f8226074c91" id="ga45075f087fd2f85908653f8226074c91"></a>

<p>int dataGetEncTxnData</p>

Get encrypted transaction data for later use (e.g. offline transaction handling). Data needs to be sent back to SDI-Server with command dataSetEncTxnData (29-07)

**Parameters**

\[in\] **taglist** tag list containing all requested data elements. \[out\] **encrypted** encrypted data block containing the requested tags with transaction data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataGetMsgSignature()\[1/2\] <a href="#gadf11aa6f505b091c986e050e6ee066bd" id="gadf11aa6f505b091c986e050e6ee066bd"></a> {#datagetmsgsignature-12}

<p>int dataGetMsgSignature</p>

Fill sensitive data elements into the placeholders and calculates a signature for the complete host messages. (29-04)

**Parameters**

\[in\] **handle** crypto handle \[in\] **msgtemplate** message template including placeholders for sensitive data elements (DFA126) \[in\] **placeholder** placeholder data \[in\] **useStoredTX** \[out\] **out** signature \[in,out\] **iv** if not NULL optional initialization vector \[out\] **ksn** if not NULL key serial number \[in\] **incrementKSN** increment KSN with encryption (default: false) \[in\] **keysetID** keyset ID (1,2,3,\...), 0: use default \[in\] **masterKeysetID** master keyset ID (1,2,3,\...), 0: use default

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)


{% hint style="info" %}
incrementKSN may be ignored by ADKSEC depending on host configuration
{% endhint %}
{% hint style="info" %}
masterKeysetID is only relevant for Android. When used keysetID must be provided, too.
{% endhint %}

## dataGetMsgSignature()\[2/2\] <a href="#ga8291925fbde8e8f922860f33853dbeee" id="ga8291925fbde8e8f922860f33853dbeee"></a> {#datagetmsgsignature-22}

<p>int dataGetMsgSignature</p>

Fill sensitive data elements into the placeholders and calculates a signature for the complete host messages. (29-04)

**Parameters**

\[in\] **handle** crypto handle \[in\] **msgtemplate** message template including placeholders for sensitive data elements (DFA126) \[in\] **placeholder** placeholder data \[in\] **useStoredTX** \[out\] **out** signature \[in,out\] **iv** if not NULL optional initialization vector \[out\] **ksn** if not NULL key serial number

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataGetValidationInfo() <a href="#gae50b2968049b499ce55b7227c0602857" id="gae50b2968049b499ce55b7227c0602857"></a>

<p>int dataGetValidationInfo</p>

Get the header information of the validation table file. (29-06)

**Parameters**

\[out\] **out** validation table information

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataPerformValidationChecks()\[1/2\] <a href="#ga12fc3569f275c9430156069c0b08677e" id="ga12fc3569f275c9430156069c0b08677e"></a> {#dataperformvalidationchecks-12}

<p>int dataPerformValidationChecks</p>

Perform validation checks for the current card regarding the validation table (cardranges.json) stored on the device (29-05)

**Parameters**

\[in\] **date** date (DDMMYY) \[in\] **iin** if not empty Issuer Identification Number (IIN) to be used as alternative for the PAN to find the best match \[out\] **match** \[out\] **additional** if not NULL additional matches are returned here

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataPerformValidationChecks()\[2/2\] <a href="#gaead51427c138526d80b25c6fd02752c6" id="gaead51427c138526d80b25c6fd02752c6"></a> {#dataperformvalidationchecks-22}

<p>int dataPerformValidationChecks</p>

Perform validation checks for the current card regarding the validation table (cardranges.json) stored on the device (29-05)

**Parameters**

\[in\] **date** date (DDMMYY) \[out\] **match** \[out\] **additional** if not NULL additional matches are returned here

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## dataSetEncTxnData() <a href="#ga01f90cbfe9791b31756c26a3025b6d9d" id="ga01f90cbfe9791b31756c26a3025b6d9d"></a>

<p>int dataSetEncTxnData</p>

Set encrypted transaction data (29-08)

**Parameters**

\[in\] **encrypted** encrypted data block containing the requested tags with transaction data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

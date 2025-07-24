---
hidden: true
title: System interface
---

[Data Structures](#nested-classes) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [SDIClient::ComponentVersion](#structvfisdi_1_1_s_d_i_client_1_1_component_version) |

|  |  |
|----|----|
| Functions |  |
| int  | [sysAbort](#gaaa584883946486751113f98b317623df) () |
| int  | [sysGetConfig](#ga7f25a798b839c063cbd06d44e0313613) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &req, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |
| int  | [sysGetCPUID](#gaf233502e71652c8d51917e15bc22a7e8) (std::string &id) |
| int  | [sysGetSerialNumber](#ga86c99be3edd67ee31ae80ebcd610aab0) (std::string &sn) |
| int  | [sysGetBootSoftwareID](#gae02f6e7a29647f0c172d4321370cecf0) (std::string &id) |
| int  | [sysGetApplicationSoftwareID](#gac2ec2c92bfb5beba8b26b7063798f292) (std::string &id) |
| int  | [sysGetHardwareID](#ga49b22bbb731a1d9d16c0ca99802e1254) (std::string &id) |
| int  | [sysGetIFMID](#gaf95a9d826bd2aeb89d1fb943e2ea3fce) (std::string &id) |
| int  | [sysGetEMVL2ID](#gafa12882d0135fa7897f2f64982c33320) (std::string &id) |
| int  | [sysGetStatus](#ga8b4f5e6d6d12cf5760153114bc3d371f) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &req, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |
| int  | [sysGetDateTime](#ga41e7b1518505a9f0a34253a57c3e597f) (unsigned short &year, unsigned char &month, unsigned char &day, unsigned char &hour, unsigned char &minute, unsigned char &second) |
| int  | [sysGetTamperStatus](#gaab4470413c2c1cbdf6a25cca76795cfa) (<a href="structvfisdi_1_1_array.md">Array</a>\< 9 \> &tamper) |
| int  | [sysGetBatteryStatus](#gacd3edebd1174d3398320769e6208a50c) (unsigned char &charge_level, unsigned char &charge_status) |
| int  | [sysGetBatteryVoltage](#ga21ec43a34504219da1656b945530b231) (unsigned short &voltage) |
| int  | [sysGetLanguage](#ga5bfe0a8a267e7e674283b92e05de3cce) (enum <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> &language) |
| int  | [sysGetCVVDeactivation](#ga4f956cba60843a3b06d425f49fcd09d1) (unsigned char &cfg) |
| int  | [sysGetCardEntryMode](#ga3fb40f1c66989d42fa78b046caa0b342) (unsigned char &mode) |
| int  | [sysSetDateTime](#ga2e7b93e265700b9d778b01c11b95fe5f) (unsigned short year, unsigned char month, unsigned char day, unsigned char hour, unsigned char minute, unsigned char second) |
| int  | [sysSetLanguage](#gad78e48f51cb1c87de771a7ddd67b394e) (enum <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> language) |
| int  | [sysSetCVVDeactivation](#ga0ee790d0fb18e5083f51b13595cf497c) (unsigned char deactivate) |
| int  | [sysSetCardEntryMode](#gab36d0bea0c486f3c6011bcb39e1f708c) (unsigned char mode) |
| int  | [sysSetDisplayBacklight](#gaf0686bd5790182aa13c9bf357dcc7d7d) (unsigned char backlight) |
| int  | [sysSetDisplayConstrast](#ga967e25786eab08f36a0c0898b596f897) (unsigned char contrast) |
| int  | [sysGetKSN](#ga39444f5aad6fae3dcbc7ca49bb7f169a) (<a href="namespacevfisdi.md#add4280440188ede2e1f6ea4397df6cfa">KSNSelection</a> which, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |
| int  | [sysAuthStep1](#ga5168e5e231b33ac39248376c92c84d83) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 16 \> &hostRandom, <a href="structvfisdi_1_1_array.md">Array</a>\< 32 \> &serverData, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &ksn) |
| int  | [sysAuthStep2](#ga43f8cfaccb41c4b3e73ecacac524cc14) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 32 \> &hostData, <a href="structvfisdi_1_1_array.md">Array</a>\< 32 \> &serverData) |
| int  | [sysSetIdleText](#gaaaf5929f91bcc56ce5e0c4e930b3eed6) (const std::string &text) |
| int  | [sysClearIdleText](#gabb0e1911d5072f1a3d14b313501d0a11) () |
| int  | [sysUploadBegin](#ga9f6703b20083d77a2bc09ae3e8741771) (const std::string &filename, <a href="namespacevfisdi.md#af55973ce01a27acae146f17b4a0366fa">SYSUploadType</a> type=<a href="namespacevfisdi.md#af55973ce01a27acae146f17b4a0366faa45f06815e16da88212b9ee5ed2f3ddc8">SYS_UPLOAD_SOFTWARE_UPDATE</a>, int dest=1) |
| int  | [sysUploadData](#gacba3dc1703d99fc2d4b7a5b763f2da10) (const void \*packet, unsigned size, int packet_no, int dest=1) |
| int  | [sysUploadEnd](#ga8ab36922e973801b2b45803208c0c4f9) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*md5=0, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*mac=0, int dest=1) |
| int  | [sysUpload](#ga358df855cbad214ec3340bb976dff4d9) (const std::string &filename, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &data, <a href="namespacevfisdi.md#af55973ce01a27acae146f17b4a0366fa">SYSUploadType</a> type=<a href="namespacevfisdi.md#af55973ce01a27acae146f17b4a0366faa45f06815e16da88212b9ee5ed2f3ddc8">SYS_UPLOAD_SOFTWARE_UPDATE</a>, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*md5=0, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*mac=0, int dest=1) |
| int  | [sysShutdown](#ga014fa2a5e800e62c61ce747292407e59) () |
| int  | [sysReboot](#ga87aee721c6d116ee2f974db6efe85fe7) () |
| int  | [sysSleep](#ga52a26c8a62e227a00ec702bb9b3b2082) () |
| int  | [sysHibernate](#ga0660fa6f7eecf4b5925d312333e358a4) () |
| int  | [sysShowMACDesktop](#ga4f3eacc3478548919e6a19cd20c5bf5d) () |
| int  | [sysSetPropertyString](#gaa90a2a61e90239e655f5798fe8138929) (int property, const std::string &in, int dest=1) |
| int  | [sysSetPropertyInt](#ga7c674016f7f7360cad04c180a9a2f687) (int property, int in, int dest=1) |
| int  | [sysGetPropertyString](#gacc125e4c576a0e8d19bf03df8c198904) (int property, std::string &out, int dest=1) |
| int  | [sysGetPropertyInt](#ga37e6626374e1fcd0e155ce8479c2ae68) (int property, int &out, int dest=1) |
| int  | [sysInstallSponsorCert](#ga7f438fca0104c137edee4cdd3d5e22ae) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &cert) |
| int  | [sysGetSDIVersion](#ga5bb253079c8feedc3ae93c855f721a15) (std::vector\< [ComponentVersion](#structvfisdi_1_1_s_d_i_client_1_1_component_version) \> &info, unsigned char device=1) |
| int  | [sysInstallUpdate](#ga1782bace2e44b08df3f5bf98fa7e8e5f) (<a href="namespacevfisdi.md#ae85b937298c01c4202810ff9a3133b11">SYSUpdateType</a> type) |
| int  | [sysInstallResult](#ga38ac875ac5b4276dd3e6d3ba229c58b9) (std::string &result, unsigned char device=1) |
| int  | [sysEnableEPP](#gadb6da218490ec0f55e357550362a7eb9) (bool enable) |
| int  | [sysFactoryReset](#gaf6cffadf0636bda10038b2569e76719a) () |
| int  | [sysReadCert](#ga2d26df79f3db64673a382881b653fcf5) (const std::string &name, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &cert) |
| int  | [sysSetCurrencyDisplay](#gaca65ca02efc350a8ac4537dbdf32ca50) (enum <a href="namespacevfisdi.md#a59f74bf9ae55ffd390b8806b2559021c">Currency</a> currency, enum <a href="namespacevfisdi.md#ac8c9a7e6b9069dbf93c0520716472812">CurrencyDisplay</a> display) |

## DetailedDescription {#detailed-description}

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfisdi::SDIClient::ComponentVersion <a href="#structvfisdi_1_1_s_d_i_client_1_1_component_version" id="structvfisdi_1_1_s_d_i_client_1_1_component_version"></a>

<p>struct vfisdi::SDIClient::ComponentVersion</p>

component version information

| Data Fields |         |                                                |
|-------------|---------|------------------------------------------------|
| string      | name    | <p>name of the component</p> |
| string      | version | <p>version information</p>   |

## FunctionDocumentation {#function-documentation}

## sysAbort() <a href="#gaaa584883946486751113f98b317623df" id="gaaa584883946486751113f98b317623df"></a>

<p>int sysAbort</p>

abort the current command in progress (20-02)

{% hint style="info" %}
Not all commands can be aborted.
{% endhint %}

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysAuthStep1() <a href="#ga5168e5e231b33ac39248376c92c84d83" id="ga5168e5e231b33ac39248376c92c84d83"></a>

<p>int sysAuthStep1</p>

mutual auth and session key setup step 1 (20-11)

**Parameters**

\[in\] **hostRandom** host random number \[out\] **serverData** encrypted SDI server data. After decryption contains 16 bytes SDI server token and 16 bytes SDI server random number \[out\] **ksn** key serial number

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysAuthStep2() <a href="#ga43f8cfaccb41c4b3e73ecacac524cc14" id="ga43f8cfaccb41c4b3e73ecacac524cc14"></a>

<p>int sysAuthStep2</p>

mutual auth and session key setup step 2 (20-11)

**Parameters**

\[in\] **hostData** encrypted host data \[out\] **serverData** encrypted SDI server data. After decryption contains 16 bytes host token and 16 bytes SDI server serial number

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysClearIdleText() <a href="#gabb0e1911d5072f1a3d14b313501d0a11" id="gabb0e1911d5072f1a3d14b313501d0a11"></a>

<p>int sysClearIdleText</p>

clear the idle text (20-13)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysEnableEPP() <a href="#gadb6da218490ec0f55e357550362a7eb9" id="gadb6da218490ec0f55e357550362a7eb9"></a>

<p>int sysEnableEPP</p>

Enable EPP (20-21)

**Parameters**

\[in\] **enable** if true enable EPP, else disable

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysFactoryReset() <a href="#gaf6cffadf0636bda10038b2569e76719a" id="gaf6cffadf0636bda10038b2569e76719a"></a>

<p>int sysFactoryReset</p>

Trigger factory reset (20-22)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetApplicationSoftwareID() <a href="#gac2ec2c92bfb5beba8b26b7063798f292" id="gac2ec2c92bfb5beba8b26b7063798f292"></a>

<p>int sysGetApplicationSoftwareID</p>

Read application software ID (20-03)

**Parameters**

\[out\] **id** ID

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetBatteryStatus() <a href="#gacd3edebd1174d3398320769e6208a50c" id="gacd3edebd1174d3398320769e6208a50c"></a>

<p>int sysGetBatteryStatus</p>

Get battery status

**Parameters**

\[out\] **charge_level** charge level in percent \[out\] **charge_status** charge_status: 0: in progress, 1: finished, 2: suspended, 3: error

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetBatteryVoltage() <a href="#ga21ec43a34504219da1656b945530b231" id="ga21ec43a34504219da1656b945530b231"></a>

<p>int sysGetBatteryVoltage</p>

Get battery voltage (coin cell) (20-04)

**Parameters**

\[out\] **voltage** battery voltage

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetBootSoftwareID() <a href="#gae02f6e7a29647f0c172d4321370cecf0" id="gae02f6e7a29647f0c172d4321370cecf0"></a>

<p>int sysGetBootSoftwareID</p>

Read boot software ID (20-03)

**Parameters**

\[out\] **id** ID

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetCardEntryMode() <a href="#ga3fb40f1c66989d42fa78b046caa0b342" id="ga3fb40f1c66989d42fa78b046caa0b342"></a>

<p>int sysGetCardEntryMode</p>

Get card entry mode (20-04)

**Parameters**

\[out\] **mode** card entry mode

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetConfig() <a href="#ga7f25a798b839c063cbd06d44e0313613" id="ga7f25a798b839c063cbd06d44e0313613"></a>

<p>int sysGetConfig</p>

Read configuration parameters. Check the SDI server documentation for details about the DOL and COL format. (20-03)

**Parameters**

\[in\] **req** read request in DOL or COL format \[out\] **out** requested configuration parameters

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetCPUID() <a href="#gaf233502e71652c8d51917e15bc22a7e8" id="gaf233502e71652c8d51917e15bc22a7e8"></a>

<p>int sysGetCPUID</p>

Read CPU unique ID (20-03)

**Parameters**

\[out\] **id** ID

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetCVVDeactivation() <a href="#ga4f956cba60843a3b06d425f49fcd09d1" id="ga4f956cba60843a3b06d425f49fcd09d1"></a>

<p>int sysGetCVVDeactivation</p>

Get CVV deactivation (20-04)

**Parameters**

\[out\] **cfg** Card Entry Value Deactivation

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetDateTime() <a href="#ga41e7b1518505a9f0a34253a57c3e597f" id="ga41e7b1518505a9f0a34253a57c3e597f"></a>

<p>int sysGetDateTime</p>

Get date and time (20-04)

**Parameters**

\[out\] **year** year including century (e.g. 2020) \[out\] **month** month (1..12) \[out\] **day** day (1..31) \[out\] **hour** hour (0..23) \[out\] **minute** minute (0..59) \[out\] **second** second (0..59)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetEMVL2ID() <a href="#gafa12882d0135fa7897f2f64982c33320" id="gafa12882d0135fa7897f2f64982c33320"></a>

<p>int sysGetEMVL2ID</p>

Read EMV L2 ID (20-03)

**Parameters**

\[out\] **id** ID

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetHardwareID() <a href="#ga49b22bbb731a1d9d16c0ca99802e1254" id="ga49b22bbb731a1d9d16c0ca99802e1254"></a>

<p>int sysGetHardwareID</p>

Read hardware ID (20-03)

**Parameters**

\[out\] **id** ID

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetIFMID() <a href="#gaf95a9d826bd2aeb89d1fb943e2ea3fce" id="gaf95a9d826bd2aeb89d1fb943e2ea3fce"></a>

<p>int sysGetIFMID</p>

Read IFM ID (20-03)

**Parameters**

\[out\] **id** ID

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetKSN() <a href="#ga39444f5aad6fae3dcbc7ca49bb7f169a" id="ga39444f5aad6fae3dcbc7ca49bb7f169a"></a>

<p>int sysGetKSN</p>

read the key serial number (20-10)

**Parameters**

\[in\] **which** selects which KSN to read \[out\] **out** read KSN

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetLanguage() <a href="#ga5bfe0a8a267e7e674283b92e05de3cce" id="ga5bfe0a8a267e7e674283b92e05de3cce"></a>

<p>int sysGetLanguage</p>

Get language (20-04)

**Parameters**

\[out\] **language** language

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetPropertyInt() <a href="#ga37e6626374e1fcd0e155ce8479c2ae68" id="ga37e6626374e1fcd0e155ce8479c2ae68"></a>

<p>int sysGetPropertyInt</p>

read int property (20-1A)

**Parameters**

\[in\] **property** property ID (SYSPropertyInt) \[out\] **out** read property \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetPropertyString() <a href="#gacc125e4c576a0e8d19bf03df8c198904" id="gacc125e4c576a0e8d19bf03df8c198904"></a>

<p>int sysGetPropertyString</p>

read string property (20-1A)

**Parameters**

\[in\] **property** property ID (SYSPropertyString) \[out\] **out** read property \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetSDIVersion() <a href="#ga5bb253079c8feedc3ae93c855f721a15" id="ga5bb253079c8feedc3ae93c855f721a15"></a>

<p>int sysGetSDIVersion</p>

Get version information of basic SDI components and installed SDI plugins (20-1C)

**Parameters**

\[out\] **info** array with component version information \[in\] **device** device: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetSerialNumber() <a href="#ga86c99be3edd67ee31ae80ebcd610aab0" id="ga86c99be3edd67ee31ae80ebcd610aab0"></a>

<p>int sysGetSerialNumber</p>

Read serial number (20-03)

**Parameters**

\[out\] **sn** serial number

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetStatus() <a href="#ga8b4f5e6d6d12cf5760153114bc3d371f" id="ga8b4f5e6d6d12cf5760153114bc3d371f"></a>

<p>int sysGetStatus</p>

Read device status information from PINPad (20-04)

**Parameters**

\[in\] **req** read request in DOL or COL format \[out\] **out** device status information

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysGetTamperStatus() <a href="#gaab4470413c2c1cbdf6a25cca76795cfa" id="gaab4470413c2c1cbdf6a25cca76795cfa"></a>

<p>int sysGetTamperStatus</p>

Get tamper status (20-04)

**Parameters**

\[out\] **tamper** tamper status

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysHibernate() <a href="#ga0660fa6f7eecf4b5925d312333e358a4" id="ga0660fa6f7eecf4b5925d312333e358a4"></a>

<p>int sysHibernate</p>

set system to hibernate state (20-17)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysInstallResult() <a href="#ga38ac875ac5b4276dd3e6d3ba229c58b9" id="ga38ac875ac5b4276dd3e6d3ba229c58b9"></a>

<p>int sysInstallResult</p>

Get installation result (20-1E)

**Parameters**

\[out\] **result** JSON string containing installation errors (DFA148) \[in\] **device** device: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysInstallSponsorCert() <a href="#ga7f438fca0104c137edee4cdd3d5e22ae" id="ga7f438fca0104c137edee4cdd3d5e22ae"></a>

<p>int sysInstallSponsorCert</p>

install DER encoded X.509 certficate (20-1B)

**Parameters**

\[in\] **cert** certificate

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysInstallUpdate() <a href="#ga1782bace2e44b08df3f5bf98fa7e8e5f" id="ga1782bace2e44b08df3f5bf98fa7e8e5f"></a>

<p>int sysInstallUpdate</p>

Install update, that has been uploaded before. (20-1D)

**Parameters**

\[in\] **type** update type

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysReadCert() <a href="#ga2d26df79f3db64673a382881b653fcf5" id="ga2d26df79f3db64673a382881b653fcf5"></a>

<p>int sysReadCert</p>

read X509 certificate from keystore (20-23)

**Parameters**

\[in\] **name** certificate name \[out\] **cert** certificate in DER format

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysReboot() <a href="#ga87aee721c6d116ee2f974db6efe85fe7" id="ga87aee721c6d116ee2f974db6efe85fe7"></a>

<p>int sysReboot</p>

perform system reboot (20-17)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetCardEntryMode() <a href="#gab36d0bea0c486f3c6011bcb39e1f708c" id="gab36d0bea0c486f3c6011bcb39e1f708c"></a>

<p>int sysSetCardEntryMode</p>

Set card entry mode (20-09)

**Parameters**

\[in\] **mode** card entry mode

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetCurrencyDisplay() <a href="#gaca65ca02efc350a8ac4537dbdf32ca50" id="gaca65ca02efc350a8ac4537dbdf32ca50"></a>

<p>int sysSetCurrencyDisplay</p>

switch whether the currency is displayed using a symbol or an abbreviation for currencies that support it. This setting is persistent. (20-24)

**Parameters**

\[in\] **currency** currency for which to change the setting \[in\] **display** display configuration

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetCVVDeactivation() <a href="#ga0ee790d0fb18e5083f51b13595cf497c" id="ga0ee790d0fb18e5083f51b13595cf497c"></a>

<p>int sysSetCVVDeactivation</p>

Set CVV deactivation (20-09)

**Parameters**

\[in\] **deactivate** deactivation value

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetDateTime() <a href="#ga2e7b93e265700b9d778b01c11b95fe5f" id="ga2e7b93e265700b9d778b01c11b95fe5f"></a>

<p>int sysSetDateTime</p>

Set date and time (20-09)

**Parameters**

\[in\] **year** year including century (e.g. 2020) \[in\] **month** month (1..12) \[in\] **day** day (1..31) \[in\] **hour** hour (0..23) \[in\] **minute** minute (0..59) \[in\] **second** second (0..59)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetDisplayBacklight() <a href="#gaf0686bd5790182aa13c9bf357dcc7d7d" id="gaf0686bd5790182aa13c9bf357dcc7d7d"></a>

<p>int sysSetDisplayBacklight</p>

Set display backlight (20-09)

**Parameters**

\[in\] **backlight** backlight

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetDisplayConstrast() <a href="#ga967e25786eab08f36a0c0898b596f897" id="ga967e25786eab08f36a0c0898b596f897"></a>

<p>int sysSetDisplayConstrast</p>

Set display contrast (20-09)

**Parameters**

\[in\] **contrast** contrast

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetIdleText() <a href="#gaaaf5929f91bcc56ce5e0c4e930b3eed6" id="gaaaf5929f91bcc56ce5e0c4e930b3eed6"></a>

<p>int sysSetIdleText</p>

set the idle text (20-13)

**Parameters**

\[in\] **text** idle text

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetLanguage() <a href="#gad78e48f51cb1c87de771a7ddd67b394e" id="gad78e48f51cb1c87de771a7ddd67b394e"></a>

<p>int sysSetLanguage</p>

Set language (20-09)

**Parameters**

\[in\] **language** language

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetPropertyInt() <a href="#ga7c674016f7f7360cad04c180a9a2f687" id="ga7c674016f7f7360cad04c180a9a2f687"></a>

<p>int sysSetPropertyInt</p>

set int property (20-19)

**Parameters**

\[in\] **property** property ID (SYSPropertyInt) \[in\] **in** new property value \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSetPropertyString() <a href="#gaa90a2a61e90239e655f5798fe8138929" id="gaa90a2a61e90239e655f5798fe8138929"></a>

<p>int sysSetPropertyString</p>

set string property (20-19)

**Parameters**

\[in\] **property** property ID (SYSPropertyString) \[in\] **in** new property value \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysShowMACDesktop() <a href="#ga4f3eacc3478548919e6a19cd20c5bf5d" id="ga4f3eacc3478548919e6a19cd20c5bf5d"></a>

<p>int sysShowMACDesktop</p>

show MAC desktop (20-18)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysShutdown() <a href="#ga014fa2a5e800e62c61ce747292407e59" id="ga014fa2a5e800e62c61ce747292407e59"></a>

<p>int sysShutdown</p>

perform system shutdown (20-17)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysSleep() <a href="#ga52a26c8a62e227a00ec702bb9b3b2082" id="ga52a26c8a62e227a00ec702bb9b3b2082"></a>

<p>int sysSleep</p>

set system to sleep state (20-17)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysUpload() <a href="#ga358df855cbad214ec3340bb976dff4d9" id="ga358df855cbad214ec3340bb976dff4d9"></a>

<p>int sysUpload</p>

upload software or configuration, shortcut for sysUploadBegin/Data/End (20-14/20-15/20-16)

**Parameters**

\[in\] **filename** filename including extension or empty string if not required \[in\] **data** data to be uploaded, splitting into data chunks is performed internally \[in\] **type** configuration file type \[in\] **md5** optional MD5 checksum or NULL \[in\] **mac** optional MAC or NULL \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysUploadBegin() <a href="#ga9f6703b20083d77a2bc09ae3e8741771" id="ga9f6703b20083d77a2bc09ae3e8741771"></a>

<p>int sysUploadBegin</p>

begin software or configuration package upload. (20-14)

**Parameters**

\[in\] **filename** filename including extension (mandatory in case of software update) \[in\] **type** configuration type \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)


{% hint style="info" %}
After a successfull call to [sysUploadBegin()](#ga9f6703b20083d77a2bc09ae3e8741771), [sysUploadData()](#gacba3dc1703d99fc2d4b7a5b763f2da10) is used to transmit the data in chunks. [sysUploadEnd()](#ga8ab36922e973801b2b45803208c0c4f9) completes the upload. It must be invoked also if [sysUploadData()](#gacba3dc1703d99fc2d4b7a5b763f2da10) reports an error to clean up resources.
{% endhint %}

## sysUploadData() <a href="#gacba3dc1703d99fc2d4b7a5b763f2da10" id="gacba3dc1703d99fc2d4b7a5b763f2da10"></a>

<p>int sysUploadData</p>

upload data chunk (20-15)

**Parameters**

\[in\] **packet** data chunk \[in\] **size** chunk size, the maximum size depends on the protocol type \[in\] **packet_no** packet number. The first packet should be number 1 \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sysUploadEnd() <a href="#ga8ab36922e973801b2b45803208c0c4f9" id="ga8ab36922e973801b2b45803208c0c4f9"></a>

<p>int sysUploadEnd</p>

finalize software upload (20-16)

**Parameters**

\[in\] **md5** optional MD5 checksum or NULL \[in\] **mac** optional MAC or NULL \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

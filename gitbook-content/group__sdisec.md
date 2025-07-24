---
hidden: true
title: Crypto interface
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| int  | [secOpen](#ga26d5ebd1bb44ed4eb1c544138554a502) (unsigned &handle, const std::string &hostname) |
| int  | [secClose](#ga3107d7a75dcdb6e0afefd34f8899e069) (unsigned handle) |
| int  | [secEncrypt](#gaf3470782c87005ccde96353d1d35aea1) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv=0, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn=0) |
| int  | [secDecrypt](#ga01037817b5b7c32ebbe6e457afc9bab5) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv=0, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn=0) |
| int  | [secSign](#gae05e831512fd20882f1511af5fc239f1) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv=0, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn=0) |
| int  | [secVerify](#ga0a78a2ddef5285d52fddab789f413997) (unsigned handle, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &sig, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv=0, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*ksn=0) |
| int  | [secUpdateKey](#ga8102b0dcd4ce6016fe741537838372d6) (unsigned handle, unsigned char keyType, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &key, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*prop=0, const unsigned char \*as2805=0, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*key_kcv=0) |
| int  | [secUpdateKey](#ga0b01d1a2365155b46cee88c6311dbbd2) (unsigned handle, unsigned char keyType, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &key, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*prop, const unsigned char \*as2805, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*key_kcv, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> \*iv) |
| int  | [secSetKeySetID](#gacdf3389163b8110d856ab917e1e7f371) (unsigned handle, unsigned id, unsigned master_id=0) |
| int  | [secGetEncryptedPIN](#ga5ad9f7f5cdcf0be2a96ce65fa86e3cde) (unsigned handle, unsigned char fmt, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &pinblock, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &ksn, bool zero_pin=false) |
| int  | [secGetKeyInventory](#ga62092608242068d13529fe03a3798b51) (unsigned handle, std::string &json) |
| int  | [secGetKeyData](#ga727a0f15ca598fd9301e5bcc57bb032d) (unsigned handle, unsigned char keyType, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, bool kek_flag=false) |
| int  | [secGetStatus](#ga7d1710a7cfdfe6d76a8325a8d04024f8) (unsigned handle, std::string &json) |
| int  | [secGetStatus](#gafa4b86bd1d87b20b687f392f4461d7d2) (const std::string &hostname, std::string &json) |
| int  | [secGetStatus](#ga755cac8deb17e98f7b8ae18e0e1dad23) (std::string &json) |
| int  | [secGetVersions](#ga49e04000a7b02afe6658905ff24529e3) (std::string &version) |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## secClose() <a href="#ga3107d7a75dcdb6e0afefd34f8899e069" id="ga3107d7a75dcdb6e0afefd34f8899e069"></a>

<p>int secClose</p>

Close the crypto device (70-01)

**Parameters**

\[in\] **handle** crypto handle

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secDecrypt() <a href="#ga01037817b5b7c32ebbe6e457afc9bab5" id="ga01037817b5b7c32ebbe6e457afc9bab5"></a>

<p>int secDecrypt</p>

Decrypt data (70-03)

**Parameters**

\[in\] **handle** crypto handle \[in\] **in** plain text data \[out\] **out** encrypted data \[in\] **iv** optional initialization vector (IV), may be NULL \[out\] **ksn** optional DUKPT key serial number, may be NULL

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secEncrypt() <a href="#gaf3470782c87005ccde96353d1d35aea1" id="gaf3470782c87005ccde96353d1d35aea1"></a>

<p>int secEncrypt</p>

Encrypt data (70-02)

**Parameters**

\[in\] **handle** crypto handle \[in\] **in** plain text data (DFA402) \[out\] **out** encrypted data \[in,out\] **iv** optional initialization vector (IV), may be NULL \[out\] **ksn** optional DUKPT key serial number, may be NULL

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secGetEncryptedPIN() <a href="#ga5ad9f7f5cdcf0be2a96ce65fa86e3cde" id="ga5ad9f7f5cdcf0be2a96ce65fa86e3cde"></a>

<p>int secGetEncryptedPIN</p>

Retrieve encrypted PIN block (70-08)

**Parameters**

\[in\] **handle** crypto handle \[in\] **fmt** ISO PIN block format (0..3) \[out\] **pinblock** encrypted PIN block \[out\] **ksn** DUKPT key serial number \[in\] **zero_pin** if true request zero PIN block

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secGetKeyData() <a href="#ga727a0f15ca598fd9301e5bcc57bb032d" id="ga727a0f15ca598fd9301e5bcc57bb032d"></a>

<p>int secGetKeyData</p>

Get key data (70-0A)

**Parameters**

\[in\] **handle** crypto handle \[in\] **keyType** key type \[out\] **out** JSON formatted information about keys \[in\] **kek_flag** optional KEK flag

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secGetKeyInventory() <a href="#ga62092608242068d13529fe03a3798b51" id="ga62092608242068d13529fe03a3798b51"></a>

<p>int secGetKeyInventory</p>

Get key inventory (70-09)

**Parameters**

\[in\] **handle** crypto handle \[out\] **json** JSON formatted information about keys

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secGetStatus()\[1/3\] <a href="#gafa4b86bd1d87b20b687f392f4461d7d2" id="gafa4b86bd1d87b20b687f392f4461d7d2"></a> {#secgetstatus-13}

<p>int secGetStatus</p>

Get crypto status of host (70-0B)

**Parameters**

\[in\] **hostname** host name, if empty the status of all hosts is returned \[out\] **json** status information

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secGetStatus()\[2/3\] <a href="#ga755cac8deb17e98f7b8ae18e0e1dad23" id="ga755cac8deb17e98f7b8ae18e0e1dad23"></a> {#secgetstatus-23}

<p>int secGetStatus</p>

inline

Get crypto status of all hosts (70-0B)

**Parameters**

\[out\] **json** status information

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secGetStatus()\[3/3\] <a href="#ga7d1710a7cfdfe6d76a8325a8d04024f8" id="ga7d1710a7cfdfe6d76a8325a8d04024f8"></a> {#secgetstatus-33}

<p>int secGetStatus</p>

Get crypto status (70-0B)

**Parameters**

\[in\] **handle** crypto handle \[out\] **json** status information

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secGetVersions() <a href="#ga49e04000a7b02afe6658905ff24529e3" id="ga49e04000a7b02afe6658905ff24529e3"></a>

<p>int secGetVersions</p>

Get crypto version information (70-0C)

**Parameters**

\[out\] **version** version information

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secOpen() <a href="#ga26d5ebd1bb44ed4eb1c544138554a502" id="ga26d5ebd1bb44ed4eb1c544138554a502"></a>

<p>int secOpen</p>

Open the crypto device (70-00)

**Parameters**

\[out\] **handle** crypto handle \[in\] **hostname** host name

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secSetKeySetID() <a href="#gacdf3389163b8110d856ab917e1e7f371" id="gacdf3389163b8110d856ab917e1e7f371"></a>

<p>int secSetKeySetID</p>

Set key set ID (70-07)

**Parameters**

\[in\] **handle** crypto handle \[in\] **id** key set ID, it must be always \> 0 \[in\] **master_id** master key set ID, optional parameter, relevant for MKSK Session Key injection and for Trinity only

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secSign() <a href="#gae05e831512fd20882f1511af5fc239f1" id="gae05e831512fd20882f1511af5fc239f1"></a>

<p>int secSign</p>

Sign data (70-04)

**Parameters**

\[in\] **handle** crypto handle \[in\] **in** plain text data \[out\] **out** MAC or signature \[in,out\] **iv** optional initialization vector (IV), may be NULL \[out\] **ksn** optional DUKPT key serial number, may be NULL

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secUpdateKey()\[1/2\] <a href="#ga0b01d1a2365155b46cee88c6311dbbd2" id="ga0b01d1a2365155b46cee88c6311dbbd2"></a> {#secupdatekey-12}

<p>int secUpdateKey</p>

Update key (70-06)

**Parameters**

\[in\] **handle** crypto handle \[in\] **keyType** key type (SECKeyType) (DFA40C) \[in\] **key** key data, binary data (e.g. 8Byte for 1DES, 16Byte for 3DES and 2TDEA-ADE-DUKPT key, 120Byte for GISKE) TLV if keyType is a Bendigo-type \'KSN incrementation\' with keyType=KEY_TYPE_DUKPT effects KSN incrementation (DFA40D) \[in,out\] **prop** if not NULL proprietary datain: in case of DUKPT (modules VSS, IPP DUKPT part, ADE): KSN binary data (maybe padded with 0xFF, 0xFF))out: in case of VSS-MSK and VSS-DUKPT (module VSS): received data from an assigned Update Finalize macro \[in\] **as2805** if not NULL optional AS2805 tag data (1 byte). \[in,out\] **key_kcv** Key Check Value, relevant for MKSK/CustomRKL Key injection and for Trinity/Neo onlyin: kcv of injecting key to verify, it is optional. No verification if emptyout: kcv of injected key \[in\] **iv** if not NULL optional initial vector, relevant for Trinity/Neo only.

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secUpdateKey()\[2/2\] <a href="#ga8102b0dcd4ce6016fe741537838372d6" id="ga8102b0dcd4ce6016fe741537838372d6"></a> {#secupdatekey-22}

<p>int secUpdateKey</p>

Update key (70-06)

**Parameters**

\[in\] **handle** crypto handle \[in\] **keyType** key type (SECKeyType) (DFA40C) \[in\] **key** key data, binary data (e.g. 8Byte for 1DES, 16Byte for 3DES and 2TDEA-ADE-DUKPT key, 120Byte for GISKE) TLV if keyType is a Bendigo-type \'KSN incrementation\' with keyType=KEY_TYPE_DUKPT effects KSN incrementation (DFA40D) \[in,out\] **prop** if not NULL proprietary datain: in case of DUKPT (modules VSS, IPP DUKPT part, ADE): KSN binary data (maybe padded with 0xFF, 0xFF))out: in case of VSS-MSK and VSS-DUKPT (module VSS): received data from an assigned Update Finalize macro \[in\] **as2805** if not NULL optional AS2805 tag data (1 byte). \[in,out\] **key_kcv** Key Check Value, relevant for MKSK/CustomRKL Key injection and for Trinity/Neo onlyin: kcv of injecting key to verify, it is optional. No verification if emptyout: kcv of injected key

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## secVerify() <a href="#ga0a78a2ddef5285d52fddab789f413997" id="ga0a78a2ddef5285d52fddab789f413997"></a>

<p>int secVerify</p>

Verify signature (70-05)

**Parameters**

\[in\] **handle** crypto handle \[in\] **in** plain text data \[in\] **sig** MAC or signature \[in\] **iv** optional initialization vector (IV), may be NULL \[out\] **ksn** optional DUKPT key serial number, may be NULL

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

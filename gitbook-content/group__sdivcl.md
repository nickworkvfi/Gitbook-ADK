---
hidden: true
title: VCL interface
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| int  | [vclRegistartSRED](#ga0d731f9c0502d15cedeb1046c786b9f6) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &track1, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &track2, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &track3) |
| int  | [vclStatusRequest](#ga4c92d4827ccd8f9578afbda845178f41) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &status) |
| int  | [vclAdvanceDDK](#gaff50c98f2540bf72ca092a0083c0daec) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &track1, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &track2, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &track3) |
| int  | [vclRequestEParms](#gafceace21d5f29bc3aad1b18d02699bed) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &eparms) |
| int  | [vclGetDiagnostic](#ga79e57d0c092f5a18c36d852ecf7c158c) (unsigned format, unsigned page, std::string &diag) |
| int  | [vclGetKeyStatus](#ga82c50ed2830bb5117e1fd87001159567) (unsigned char &status) |
| int  | [vclOverrideMessageQuery](#ga68094cdd24984184c90eb0a573fdceb3) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &track1, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &track2, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &track3) |
| int  | [vclKSNRequest](#ga32d0357a802b9dd30b3cd5e7a3748315) (std::string &ksn) |
| int  | [vclKmailinRequest](#ga1fbb4172e4c09faf39c3fdfdee9daef8) () |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## vclAdvanceDDK() <a href="#gaff50c98f2540bf72ca092a0083c0daec" id="gaff50c98f2540bf72ca092a0083c0daec"></a>

<p>int vclAdvanceDDK</p>

Instruct VCL to use the next derived key for future encryption operations. (28-02)

**Parameters**

\[out\] **track1** VCL track 1 \[out\] **track2** VCL track 2 \[out\] **track3** VCL track 3

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vclGetDiagnostic() <a href="#ga79e57d0c092f5a18c36d852ecf7c158c" id="ga79e57d0c092f5a18c36d852ecf7c158c"></a>

<p>int vclGetDiagnostic</p>

Get the diagnostic data from VCL.(28-06) The diag query will be forwarded from the SDI-Server as obtained from VCL. Further processing is up to the payment application. Additional parameters can be the output format as well as the requested page number.

**Parameters**

\[in\] **format** 1=verbose, 2=concise, 4=xml \[in\] **page** page number (0-127) \[out\] **diag** diagnostic data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vclGetKeyStatus() <a href="#ga82c50ed2830bb5117e1fd87001159567" id="ga82c50ed2830bb5117e1fd87001159567"></a>

<p>int vclGetKeyStatus</p>

Get the key status from VCL. (28-07)

**Parameters**

\[out\] **status** key status: 0=shared key, 1=unique key

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vclKmailinRequest() <a href="#ga1fbb4172e4c09faf39c3fdfdee9daef8" id="ga1fbb4172e4c09faf39c3fdfdee9daef8"></a>

<p>int vclKmailinRequest</p>

The sdi server performs a kmailin request to the vcl daemon/kernel modul and delivers the result (success or failed) (28-0A)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>);

## vclKSNRequest() <a href="#ga32d0357a802b9dd30b3cd5e7a3748315" id="ga32d0357a802b9dd30b3cd5e7a3748315"></a>

<p>int vclKSNRequest</p>

performs a KSN request to the vcl daemon/kernel modul (28-09)

**Parameters**

\[out\] **ksn** KSN

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vclOverrideMessageQuery() <a href="#ga68094cdd24984184c90eb0a573fdceb3" id="ga68094cdd24984184c90eb0a573fdceb3"></a>

<p>int vclOverrideMessageQuery</p>

Performs a override message query to the vcl daemon/kernel modul and delivers the response as track data. (28-08)

**Parameters**

\[out\] **track1** VCL track 1 \[out\] **track2** VCL track 2 \[out\] **track3** VCL track 3

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vclRegistartSRED() <a href="#ga0d731f9c0502d15cedeb1046c786b9f6" id="ga0d731f9c0502d15cedeb1046c786b9f6"></a>

<p>int vclRegistartSRED</p>

Request VCL to turn on the encryption in SRED mode. (28-00)

**Parameters**

\[out\] **track1** VCL track 1 \[out\] **track2** VCL track 2 \[out\] **track3** VCL track 3

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vclRequestEParms() <a href="#gafceace21d5f29bc3aad1b18d02699bed" id="gafceace21d5f29bc3aad1b18d02699bed"></a>

<p>int vclRequestEParms</p>

Get the eParms of the last encryption from VCL. This command should be used by the payment application if eParms is activated only. The eParms will be forwarded from the SDI-Server as obtained from VCL. Further processing is up to the payment application. (28-03)

**Parameters**

\[out\] **eparms** eParms of the last encryption from VCL

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vclStatusRequest() <a href="#ga4c92d4827ccd8f9578afbda845178f41" id="ga4c92d4827ccd8f9578afbda845178f41"></a>

<p>int vclStatusRequest</p>

Get the current status of VCL. (28-01)

**Parameters**

\[out\] **status** VLC status

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

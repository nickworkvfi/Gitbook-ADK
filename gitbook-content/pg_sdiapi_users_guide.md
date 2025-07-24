---
hidden: true
title: ADK-SDI-API Programmers Guide
---

ADK-SDI-CLIENT provides a C++ client for the SDI server with an easy to use interface:

- use function parameters instead of TLV buffers
- provide dedicated data types for simple use instead of using byte buffers
- provide a single error code instead of error codes distributed over several places

# Usage <a href="#sdiapi_usage" id="sdiapi_usage"></a>

## SDI Client <a href="#sdiapi_client" id="sdiapi_client"></a>

<a href="classvfisdi_1_1_s_d_i_client.md">SDIClient</a> is the main class for accessing SDI server. Before commands can be invoked the connection needs to be connected using <a href="group__sdisetup.md#gaadabac17c905f50d1379d3ba5fbdd0e6">SDIClient::connect</a>, either using a host name and port or by providing an already connected IPC link.

The connection state can be checked using <a href="group__sdisetup.md#gaa0fd96bc25e3d509fb54028c2e4b91f6">SDIClient::connected</a>.

SDIClient supports several protocol variants, which can be switched using <a href="group__sdisetup.md#gab5e31e9de33ab7fcc6694fed46316476">SDIClient::setProtocol</a>. <a href="classvfisdi_1_1_s_d_i_client.md#a2b99fb4e4914a533566284f2ed3b0186a1047589f56e6de0f5cd3dada0723fdab">SDIClient::PROTOCOL_B</a> is for the main SDI server access, which only one instance may used and <a href="classvfisdi_1_1_s_d_i_client.md#a2b99fb4e4914a533566284f2ed3b0186a6aa928c13ed99c74ac4969146cf1a92f">SDIClient::PROTOCOL_C</a> is for concurrent but only limited access (e.g. printing or PIN entry).

Most functions return an error code, some return an error code or status code. All <a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">error codes</a> are \<0, <a href="namespacevfisdi.md#a904e5abfa09e53cda6dd4c6ba5fa5b02">EMV status codes</a> are \>0. No error is indicated by return of <a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066a2bc49ec37d6a5715dd23e85f1ff5bb59">OK</a> (0).

## Parameter data <a href="#sdiapi_tlv" id="sdiapi_tlv"></a>

On the low level, parameters are sent to SDI server using TLV data. Normally SDIClient already handles those details, so that parameters can be just passed as function parameters. In case direct access is required the class <a href="classvfisdi_1_1_t_l_v.md">TLV</a> is provided to ease handling of TLV data.

In case of EMV configuration data and EMV transaction data, two classes are provided to simplify access to EMV parameter data: <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> and <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a>.

For accessing BCD values, fixed sized arrays and bit masks, the helper classes <a href="classvfisdi_1_1_b_c_d.md">BCD</a>, <a href="structvfisdi_1_1_array.md">Array</a> and <a href="structvfisdi_1_1_bit_mask.md">BitMask</a> are provided.

For EMV bit masks the following classes (based on BitMask) are provided:

- <a href="namespacevfisdi.md#a44617adc8f4a66d0aed5cc243140d735">EMVAppFlowCapabilities</a>
- <a href="namespacevfisdi.md#afbf44378c420013894c6d1ec2396557a">EMVKernelAppFlowCapabilities</a>
- <a href="namespacevfisdi.md#a7aa35087a65d5c2673093eaeecd7a30f">EMVFlowOptions</a>
- <a href="namespacevfisdi.md#af00bb692a2a174186fe3cb16326581bd">EMVChecksumOptions</a>
- <a href="namespacevfisdi.md#aa3b8e383f2f4b4a88300bbeb10f423bb">EMVTransactionOptions</a>
- <a href="namespacevfisdi.md#ab48783102ea080d5f86d54616950c195">EMVTransactionSteps</a>
- <a href="namespacevfisdi.md#a7fcca20a9f7822f498e8019bb6418bd9">EMVDomesticOptions</a>

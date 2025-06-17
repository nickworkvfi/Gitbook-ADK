---
title: ADK-SDI-API Programmers Guide

---

# ADK-SDI-API Programmers Guide



ADK-SDI-CLIENT provides a C++ client for the SDI server with an easy to use interface:

* use function parameters instead of TLV buffers
* provide dedicated data types for simple use instead of using byte buffers
* provide a single error code instead of error codes distributed over several places


# Usage


## SDI Client

[SDIClient](classvfisdi_1_1_s_d_i_client.md) is the main class for accessing SDI server. Before commands can be invoked the connection needs to be connected using [SDIClient::connect](group__sdisetup.md#function-connect), either using a host name and port or by providing an already connected IPC link.

The connection state can be checked using [SDIClient::connected](group__sdisetup.md#function-connected).

SDIClient supports several protocol variants, which can be switched using [SDIClient::setProtocol](group__sdisetup.md#function-setprotocol). [SDIClient::PROTOCOL_B](classvfisdi_1_1_s_d_i_client.md#enumvalue-protocol-b) is for the main SDI server access, which only one instance may used and [SDIClient::PROTOCOL_C](classvfisdi_1_1_s_d_i_client.md#enumvalue-protocol-c) is for concurrent but only limited access (e.g. printing or PIN entry).

Most functions return an error code, some return an error code or status code. All [error codes](namespacevfisdi.md#enum-result) are <0, [EMV status codes](namespacevfisdi.md#enum-emvstatus) are >0. No error is indicated by return of [OK](namespacevfisdi.md#enumvalue-ok) (0).


## Parameter data

On the low level, parameters are sent to SDI server using TLV data. Normally SDIClient already handles those details, so that parameters can be just passed as function parameters. In case direct access is required the class [TLV](classvfisdi_1_1_t_l_v.md) is provided to ease handling of TLV data.

In case of EMV configuration data and EMV transaction data, two classes are provided to simplify access to EMV parameter data: [EMVConf](structvfisdi_1_1_e_m_v_conf.md) and [EMVTxn](structvfisdi_1_1_e_m_v_txn.md).

For accessing BCD values, fixed sized arrays and bit masks, the helper classes [BCD](classvfisdi_1_1_b_c_d.md), [Array](structvfisdi_1_1_array.md) and [BitMask](structvfisdi_1_1_bit_mask.md) are provided.

For EMV bit masks the following classes (based on BitMask) are provided:

* [EMVAppFlowCapabilities](namespacevfisdi.md#typedef-emvappflowcapabilities)
* [EMVKernelAppFlowCapabilities](namespacevfisdi.md#typedef-emvkernelappflowcapabilities)
* [EMVFlowOptions](namespacevfisdi.md#typedef-emvflowoptions)
* [EMVChecksumOptions](namespacevfisdi.md#typedef-emvchecksumoptions)
* [EMVTransactionOptions](namespacevfisdi.md#typedef-emvtransactionoptions)
* [EMVTransactionSteps](namespacevfisdi.md#typedef-emvtransactionsteps)
* [EMVDomesticOptions](namespacevfisdi.md#typedef-emvdomesticoptions)

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

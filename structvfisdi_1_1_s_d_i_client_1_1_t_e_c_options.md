---
title: vfisdi::SDIClient::TECOptions

---

# vfisdi::SDIClient::TECOptions

**Module:** **[Card reader interface](group__sdicrd.md)**



 [More...](#detailed-description)


`#include <sdi.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned short | **[tec_start](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md#variable-tec-start)**  |
| unsigned char | **[ctOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md#variable-ctoptions)**  |
| unsigned char | **[ctlsOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md#variable-ctlsoptions)**  |
| unsigned short | **[msrAfterCTLSTimeout](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md#variable-msrafterctlstimeout)**  |
| unsigned short | **[msrAfterInsertTimeout](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md#variable-msrafterinserttimeout)**  |
| unsigned short | **[paymentTimeout](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md#variable-paymenttimeout)**  |
| unsigned | **[nfcTechnology](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md#variable-nfctechnology)**  |

## Detailed Description

```cpp
struct vfisdi::SDIClient::TECOptions;
```


technology selection options 

## Public Attributes Documentation

### variable tec_start

```cpp
unsigned short tec_start;
```


see [TECStartOptions](namespacevfisdi.md#enum-tecstartoptions)


### variable ctOptions

```cpp
unsigned char ctOptions;
```


see [EMVCtReaderOptions](namespacevfisdi.md#enum-emvctreaderoptions) for emvCtSmartDetect 


### variable ctlsOptions

```cpp
unsigned char ctlsOptions;
```


see [EMVCtlsReaderOptions](namespacevfisdi.md#enum-emvctlsreaderoptions) for emvCtlsSmartReset 


### variable msrAfterCTLSTimeout

```cpp
unsigned short msrAfterCTLSTimeout;
```


### variable msrAfterInsertTimeout

```cpp
unsigned short msrAfterInsertTimeout;
```


### variable paymentTimeout

```cpp
unsigned short paymentTimeout;
```


### variable nfcTechnology

```cpp
unsigned nfcTechnology;
```


NFC technology bit mask, see [TECNFC](namespacevfisdi.md#enum-tecnfc)


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
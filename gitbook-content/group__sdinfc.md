---
hidden: true
title: SDI client NFC interface
---

[Data Structures](#nested-classes) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [SDIClient::NFCCardCount](#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count) |
| struct   | [SDIClient::NFCCard](#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card) |
| struct   | [SDIClient::NFCCardExt](#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext) |

|  |  |
|----|----|
| Functions |  |
| int  | [nfcInit](#ga90c57226b537a74b5c9357df70bfc1a2) (unsigned char conn_type) |
| int  | [nfcPing](#ga3fc70eebef2f49bd93d0ab7bb08f6378) (<a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &raw) |
| int  | [nfcGetVersion](#ga50992a2eed938a4b17e1643d115d2beb) (std::string &version) |
| int  | [nfcConfigInit](#gab52bb0d6ab152dbf267370bf2fe6bf84) () |
| int  | [nfcOpen](#gae1a17e48bafbed18e7ddf35594ddb7b3) () |
| int  | [nfcClose](#gacc97d09c5adc4930391f51fd3d5e1958) () |
| int  | [nfcFieldOn](#ga6c023513763ed591ab3d0cd6891b54ae) () |
| int  | [nfcFieldOff](#ga4e07c4d5452cffc8896ec366538a7113) () |
| int  | [nfcFieldPolling](#ga481592aaac8fdb0cf2cf7e92906eaee9) (unsigned tech_bm, unsigned timeout, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, unsigned char &return_code, [NFCCardCount](#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count) &card_count, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, std::vector\< [NFCCard](#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card) \> &cards) |
| int  | [nfcFieldPollingExt](#ga0f773a1596af025b096deb3f5367303b) (unsigned tech_bm, unsigned timeout, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, unsigned char &return_code, [NFCCardCount](#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count) &card_count, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, std::vector\< [NFCCardExt](#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext) \> &cards) |
| int  | [nfcFieldCancelPolling](#ga6a60efabb56ef2499dc99c3543e5bf16) () |
| int  | [nfcFieldActivation](#ga2c7c386897d84e93c119bec795c7c31b) (unsigned modulation, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &info) |
| int  | [nfcFtechBaud](#ga6db25cbe2c6ab6c94b4d48b5993186a4) (unsigned char baud) |
| int  | [nfcMifareAuthenticate](#ga5f11c79e6891f87fe57a141a1f12dfff) (unsigned char blocknum, unsigned char keytype, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &key) |
| int  | [nfcMifareRead](#gafbd29075a9072ebb220b906c651f0491) (unsigned char type, unsigned char startblock, unsigned char blockcount, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |
| int  | [nfcMifareWrite](#ga20d7cccce43865ff57d3bab82019c6cc) (unsigned char type, unsigned char startblock, unsigned char blockcount, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in) |
| int  | [nfcMifareIncrement](#gaa2dfd7a1663696da6e08d83e36720c4d) (unsigned char block, unsigned char <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| int  | [nfcMifareDecrement](#ga808a470b1bdfd6ecba40a74ab01c3271) (unsigned char block, unsigned char <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| int  | [nfcMifareIncrementOnly](#ga5d1a0b3c3c8c1657a4010c90e792515d) (unsigned char block, unsigned char <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| int  | [nfcMifareDecrementOnly](#gadf248f668829a0e45410d8da4df35a3a) (unsigned char block, unsigned char <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| int  | [nfcMifareRestore](#ga79b9623744e2f7e68caf915ef64b881e) (unsigned char block) |
| int  | [nfcMifareTransfer](#ga2a7c1fff0de7a01610c4ac3b27d58f13) (unsigned char block) |
| int  | [nfcFelicaSendReceive](#gae6f8ba4e80589e748b7f4c5da1d2849b) (unsigned timeout, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |
| int  | [nfcFelicaPolling](#gaaaff9ec57c95708d789871f7b5eb6690) (unsigned poll_timeout, unsigned recv_timeout, unsigned short system_code, unsigned char req_code, unsigned char time_slot, <a href="structvfisdi_1_1_array.md">Array</a>\< 8 \> &uid, <a href="structvfisdi_1_1_array.md">Array</a>\< 8 \> &pad, unsigned short &system_code_out) |
| int  | [nfcApduSendReceive](#gae418dc534ceeabbb6117dea269f6fc99) (const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out, unsigned short &cardsw1sw2) |
| int  | [nfcTxRx](#gacd1f1f0cfd1cc09b87adcc25db707d0b) (unsigned card_type, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |

## DetailedDescription {#detailed-description}

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfisdi::SDIClient::NFCCardCount <a href="#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count" id="structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count"></a>

<p>struct vfisdi::SDIClient::NFCCardCount</p>

NFC card counts

| Data Fields |  |  |
|----|----|----|
| unsigned char | cardACount | <p>total number of cards found (DFDB28)</p> |
| unsigned char | cardBCount | <p>total number of cards of type A found (DFDB29)</p> |
| unsigned char | cardFCount | <p>total number of cards of type B found (DFDB2A)</p> |
| unsigned char | totalCount |  |

## vfisdi::SDIClient::NFCCard <a href="#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card" id="structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card"></a>

<p>struct vfisdi::SDIClient::NFCCard</p>

NFC card type

| Data Fields |  |  |
|----|----|----|
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | info | <p>card info (DFDB22)</p> |
| unsigned char | type | <p>card type (DFDB21)</p> |

## vfisdi::SDIClient::NFCCardExt <a href="#structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext" id="structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext"></a>

<p>struct vfisdi::SDIClient::NFCCardExt</p>

extended NFC card type

| Data Fields |  |  |
|----|----|----|
| unsigned short | ATQ |  |
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | info | <p>card info (DFDB22)</p> |
| <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | RFU | <p>RFU of the card (DFDB2F)</p> |
| unsigned char | SAK | <p>SAK of the card (DFDB2D)</p> |
| unsigned char | type | <p>card type (DFDB21)</p> |
| unsigned | typeFull | <p>ATQ of the card (DFDB2E) full card type (DFDB27)</p> |

## FunctionDocumentation {#function-documentation}

## nfcApduSendReceive() <a href="#gae418dc534ceeabbb6117dea269f6fc99" id="gae418dc534ceeabbb6117dea269f6fc99"></a>

<p>int nfcApduSendReceive</p>

NFC: Send and receive data using APDU protocol (31-1C)

**Parameters**

\[in\] **in** input data (DFA204) \[out\] **out** output data (DFA205) \[out\] **cardsw1sw2** SW1/SW2 from card (DFA219)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcClose() <a href="#gacc97d09c5adc4930391f51fd3d5e1958" id="gacc97d09c5adc4930391f51fd3d5e1958"></a>

<p>int nfcClose</p>

NFC pass-through: Release L1 driver (31-02)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcConfigInit() <a href="#gab52bb0d6ab152dbf267370bf2fe6bf84" id="gab52bb0d6ab152dbf267370bf2fe6bf84"></a>

<p>int nfcConfigInit</p>

Initialize NFC configuration (31-12)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcFelicaPolling() <a href="#gaaaff9ec57c95708d789871f7b5eb6690" id="gaaaff9ec57c95708d789871f7b5eb6690"></a>

<p>int nfcFelicaPolling</p>

Felica: Polling request (31-14)

**Parameters**

\[in\] **poll_timeout** poll timeout (DFA211) \[in\] **recv_timeout** receive timeout (DFA212) \[in\] **system_code** system code (DFA213) \[in\] **req_code** request code (DFA214) \[in\] **time_slot** time slot (DFA215) \[out\] **uid** UID (DFA216) \[out\] **pad** PAD (DFA217) \[out\] **system_code_out** system code (DFA213)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcFelicaSendReceive() <a href="#gae6f8ba4e80589e748b7f4c5da1d2849b" id="gae6f8ba4e80589e748b7f4c5da1d2849b"></a>

<p>int nfcFelicaSendReceive</p>

Felica: Send and receive raw data (31-0F)

**Parameters**

\[in\] **timeout** timeout (DFA218) \[in\] **in** input data (DFA206) \[out\] **out** output data (DFA206)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcFieldActivation() <a href="#ga2c7c386897d84e93c119bec795c7c31b" id="ga2c7c386897d84e93c119bec795c7c31b"></a>

<p>int nfcFieldActivation</p>

NFC pass-through: Activate (select) the card found during polling

**Parameters**

\[in\] **modulation** NFC card type / modulation (DFDB21) \[in\] **info** NFC card info (DFDB22)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcFieldCancelPolling() <a href="#ga6a60efabb56ef2499dc99c3543e5bf16" id="ga6a60efabb56ef2499dc99c3543e5bf16"></a>

<p>int nfcFieldCancelPolling</p>

NFC pass-throuhg: Cancel polling process (31-06)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcFieldOff() <a href="#ga4e07c4d5452cffc8896ec366538a7113" id="ga4e07c4d5452cffc8896ec366538a7113"></a>

<p>int nfcFieldOff</p>

NFC pass-through: Turn RF field off (31-04)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcFieldOn() <a href="#ga6c023513763ed591ab3d0cd6891b54ae" id="ga6c023513763ed591ab3d0cd6891b54ae"></a>

<p>int nfcFieldOn</p>

NFC pass-through: Turn RF field on (31-03)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcFieldPolling() <a href="#ga481592aaac8fdb0cf2cf7e92906eaee9" id="ga481592aaac8fdb0cf2cf7e92906eaee9"></a>

<p>int nfcFieldPolling</p>

NFC pass-through: Open the field and execute polling loop (31-05)

**Parameters**

\[in\] **tech_bm** technology bitmap (NFCPollingBitmap) (DFA202) \[in\] **timeout** poll timeout (DFA203) \[in\] **in** custom data (DFA207) \[out\] **return_code** NFC return code (DFAB20) \[out\] **card_count** number of cards found \[out\] **out** custom poll result (DFDB2C) \[out\] **cards** detected cards (FFDB20)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcFieldPollingExt() <a href="#ga0f773a1596af025b096deb3f5367303b" id="ga0f773a1596af025b096deb3f5367303b"></a>

<p>int nfcFieldPollingExt</p>

NFC pass-through: Open the field and execute polling loop (31-13)

**Parameters**

\[in\] **tech_bm** technology bitmap (NFCPollingBitmap) (DFA202) \[in\] **timeout** poll timeout (DFA203) \[in\] **in** custom data (DFA207) \[out\] **return_code** NFC return code (DFAB20) \[out\] **card_count** number of cards found \[out\] **out** custom poll result (DFDB2C) \[out\] **cards** detected cards (FFDB20)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>) (\<=0)

## nfcFtechBaud() <a href="#ga6db25cbe2c6ab6c94b4d48b5993186a4" id="ga6db25cbe2c6ab6c94b4d48b5993186a4"></a>

<p>int nfcFtechBaud</p>

NFC pass-through: Change NFC-F baud rate

**Parameters**

\[in\] **baud** baud rate: 0=INF_BAUD212, 1=INF_BAUD424

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcGetVersion() <a href="#ga50992a2eed938a4b17e1643d115d2beb" id="ga50992a2eed938a4b17e1643d115d2beb"></a>

<p>int nfcGetVersion</p>

Return NFC version information (31-11)

**Parameters**

\[out\] **version** build and kernel versions in JSON format

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcInit() <a href="#ga90c57226b537a74b5c9357df70bfc1a2" id="ga90c57226b537a74b5c9357df70bfc1a2"></a>

<p>int nfcInit</p>

Initialize NFC client (31-10)

**Parameters**

\[in\] **conn_type** connection type: 0=CL_TYPE_CLIENT_SERVER, 1=CL_TYPE_FUNCTION

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcMifareAuthenticate() <a href="#ga5f11c79e6891f87fe57a141a1f12dfff" id="ga5f11c79e6891f87fe57a141a1f12dfff"></a>

<p>int nfcMifareAuthenticate</p>

Mifare: Authenticate block number with key (31-0A)

**Parameters**

\[in\] **blocknum** block number (DFA208) \[in\] **keytype** key type (DFA209) \[in\] **key** key (DFA20A)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcMifareDecrement() <a href="#ga808a470b1bdfd6ecba40a74ab01c3271" id="ga808a470b1bdfd6ecba40a74ab01c3271"></a>

<p>int nfcMifareDecrement</p>

Mifare: Decrement value of block (31-0E)

**Parameters**

\[in\] **block** block number (DFA208) \[in\] **value** decrement value (DFA210)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcMifareDecrementOnly() <a href="#gadf248f668829a0e45410d8da4df35a3a" id="gadf248f668829a0e45410d8da4df35a3a"></a>

<p>int nfcMifareDecrementOnly</p>

Mifare: Decrement value of block (31-16)

**Parameters**

\[in\] **block** block number (DFA208) \[in\] **value** decrement value (DFA210)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcMifareIncrement() <a href="#gaa2dfd7a1663696da6e08d83e36720c4d" id="gaa2dfd7a1663696da6e08d83e36720c4d"></a>

<p>int nfcMifareIncrement</p>

Mifare: Increment value of block (31-0D)

**Parameters**

\[in\] **block** block number (DFA208) \[in\] **value** increment value (DFA210)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcMifareIncrementOnly() <a href="#ga5d1a0b3c3c8c1657a4010c90e792515d" id="ga5d1a0b3c3c8c1657a4010c90e792515d"></a>

<p>int nfcMifareIncrementOnly</p>

Mifare: Increment value of block (31-15)

**Parameters**

\[in\] **block** block number (DFA208) \[in\] **value** increment value (DFA210)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcMifareRead() <a href="#gafbd29075a9072ebb220b906c651f0491" id="gafbd29075a9072ebb220b906c651f0491"></a>

<p>int nfcMifareRead</p>

Mifare: Read *blockcount* blocks of data starting from block *startblock* (31-0B)

**Parameters**

\[in\] **type** Mifare card type (DFA20B) \[in\] **startblock** start block (DFA20C) \[in\] **blockcount** number of blocks to read (up to 15) (DFA20D) \[out\] **out** output data (DFA20E)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcMifareRestore() <a href="#ga79b9623744e2f7e68caf915ef64b881e" id="ga79b9623744e2f7e68caf915ef64b881e"></a>

<p>int nfcMifareRestore</p>

Mifare: Restore a value block to transfer buffer (31-18)

**Parameters**

\[in\] **block** block number (DFA208)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcMifareTransfer() <a href="#ga2a7c1fff0de7a01610c4ac3b27d58f13" id="ga2a7c1fff0de7a01610c4ac3b27d58f13"></a>

<p>int nfcMifareTransfer</p>

Mifare: Store a value block from transfer buffer (31-17)

**Parameters**

\[in\] **block** block number (DFA208)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcMifareWrite() <a href="#ga20d7cccce43865ff57d3bab82019c6cc" id="ga20d7cccce43865ff57d3bab82019c6cc"></a>

<p>int nfcMifareWrite</p>

Mifare: Write *blockcount* blocks of data starting from block *startblock* (31-0C)

**Parameters**

\[in\] **type** Mifare card type (DFA20B) \[in\] **startblock** start block (DFA20C) \[in\] **blockcount** number of blocks to read (up to 15) (DFA20D) \[in\] **in** input data (DFA20F)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcOpen() <a href="#gae1a17e48bafbed18e7ddf35594ddb7b3" id="gae1a17e48bafbed18e7ddf35594ddb7b3"></a>

<p>int nfcOpen</p>

NFC pass-through: Initialize L1 driver (31-01)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcPing() <a href="#ga3fc70eebef2f49bd93d0ab7bb08f6378" id="ga3fc70eebef2f49bd93d0ab7bb08f6378"></a>

<p>int nfcPing</p>

Return NFC framework state of the NFC framework (31-00)

**Parameters**

\[out\] **raw** NFC framework state: 1=IDLE, 2=BUSY

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## nfcTxRx() <a href="#gacd1f1f0cfd1cc09b87adcc25db707d0b" id="gacd1f1f0cfd1cc09b87adcc25db707d0b"></a>

<p>int nfcTxRx</p>

NFC: Send and receive raw data usingISO 14443-3 protocol (31-08)

**Parameters**

\[in\] **card_type** NFC card type (DFDB21) \[in\] **in** input data (DFA206) \[out\] **out** output data (DFA206)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

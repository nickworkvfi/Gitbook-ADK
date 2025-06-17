---
title: SDI client NFC interface

---

# SDI client NFC interface



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfisdi::SDIClient::NFCCardCount](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count.md)**  |
| struct | **[vfisdi::SDIClient::NFCCard](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card.md)**  |
| struct | **[vfisdi::SDIClient::NFCCardExt](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[nfcInit](group__sdinfc.md#function-nfcinit)**(unsigned char conn_type) |
| int | **[nfcPing](group__sdinfc.md#function-nfcping)**(bytevector & raw) |
| int | **[nfcGetVersion](group__sdinfc.md#function-nfcgetversion)**(std::string & version) |
| int | **[nfcConfigInit](group__sdinfc.md#function-nfcconfiginit)**() |
| int | **[nfcOpen](group__sdinfc.md#function-nfcopen)**() |
| int | **[nfcClose](group__sdinfc.md#function-nfcclose)**() |
| int | **[nfcFieldOn](group__sdinfc.md#function-nfcfieldon)**() |
| int | **[nfcFieldOff](group__sdinfc.md#function-nfcfieldoff)**() |
| int | **[nfcFieldPolling](group__sdinfc.md#function-nfcfieldpolling)**(unsigned tech_bm, unsigned timeout, const bytevector & in, unsigned char & return_code, NFCCardCount & card_count, bytevector & out, std::vector< NFCCard > & cards) |
| int | **[nfcFieldPollingExt](group__sdinfc.md#function-nfcfieldpollingext)**(unsigned tech_bm, unsigned timeout, const bytevector & in, unsigned char & return_code, NFCCardCount & card_count, bytevector & out, std::vector< NFCCardExt > & cards) |
| int | **[nfcFieldCancelPolling](group__sdinfc.md#function-nfcfieldcancelpolling)**() |
| int | **[nfcFieldActivation](group__sdinfc.md#function-nfcfieldactivation)**(unsigned modulation, const bytevector & info) |
| int | **[nfcFtechBaud](group__sdinfc.md#function-nfcftechbaud)**(unsigned char baud) |
| int | **[nfcMifareAuthenticate](group__sdinfc.md#function-nfcmifareauthenticate)**(unsigned char blocknum, unsigned char keytype, const bytevector & key) |
| int | **[nfcMifareRead](group__sdinfc.md#function-nfcmifareread)**(unsigned char type, unsigned char startblock, unsigned char blockcount, bytevector & out) |
| int | **[nfcMifareWrite](group__sdinfc.md#function-nfcmifarewrite)**(unsigned char type, unsigned char startblock, unsigned char blockcount, const bytevector & in) |
| int | **[nfcMifareIncrement](group__sdinfc.md#function-nfcmifareincrement)**(unsigned char block, unsigned char value) |
| int | **[nfcMifareDecrement](group__sdinfc.md#function-nfcmifaredecrement)**(unsigned char block, unsigned char value) |
| int | **[nfcMifareIncrementOnly](group__sdinfc.md#function-nfcmifareincrementonly)**(unsigned char block, unsigned char value) |
| int | **[nfcMifareDecrementOnly](group__sdinfc.md#function-nfcmifaredecrementonly)**(unsigned char block, unsigned char value) |
| int | **[nfcMifareRestore](group__sdinfc.md#function-nfcmifarerestore)**(unsigned char block) |
| int | **[nfcMifareTransfer](group__sdinfc.md#function-nfcmifaretransfer)**(unsigned char block) |
| int | **[nfcFelicaSendReceive](group__sdinfc.md#function-nfcfelicasendreceive)**(unsigned timeout, const bytevector & in, bytevector & out) |
| int | **[nfcFelicaPolling](group__sdinfc.md#function-nfcfelicapolling)**(unsigned poll_timeout, unsigned recv_timeout, unsigned short system_code, unsigned char req_code, unsigned char time_slot, Array< 8 > & uid, Array< 8 > & pad, unsigned short & system_code_out) |
| int | **[nfcApduSendReceive](group__sdinfc.md#function-nfcapdusendreceive)**(const bytevector & in, bytevector & out, unsigned short & cardsw1sw2) |
| int | **[nfcTxRx](group__sdinfc.md#function-nfctxrx)**(unsigned card_type, const bytevector & in, bytevector & out) |


## Functions Documentation

### function nfcInit

```
int nfcInit(
    unsigned char conn_type
)
```


**Parameters**: 

  * **conn_type** connection type: 0=CL_TYPE_CLIENT_SERVER, 1=CL_TYPE_FUNCTION 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Initialize NFC client (31-10) 


### function nfcPing

```
int nfcPing(
    bytevector & raw
)
```


**Parameters**: 

  * **raw** NFC framework state: 1=IDLE, 2=BUSY 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Return NFC framework state of the NFC framework (31-00) 


### function nfcGetVersion

```
int nfcGetVersion(
    std::string & version
)
```


**Parameters**: 

  * **version** build and kernel versions in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Return NFC version information (31-11) 


### function nfcConfigInit

```
int nfcConfigInit()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Initialize NFC configuration (31-12) 


### function nfcOpen

```
int nfcOpen()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Initialize L1 driver (31-01) 


### function nfcClose

```
int nfcClose()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Release L1 driver (31-02) 


### function nfcFieldOn

```
int nfcFieldOn()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Turn RF field on (31-03) 


### function nfcFieldOff

```
int nfcFieldOff()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Turn RF field off (31-04) 


### function nfcFieldPolling

```
int nfcFieldPolling(
    unsigned tech_bm,
    unsigned timeout,
    const bytevector & in,
    unsigned char & return_code,
    NFCCardCount & card_count,
    bytevector & out,
    std::vector< NFCCard > & cards
)
```


**Parameters**: 

  * **tech_bm** technology bitmap ([NFCPollingBitmap](namespacevfisdi.md#enum-nfcpollingbitmap)) (DFA202) 
  * **timeout** poll timeout (DFA203) 
  * **in** custom data (DFA207) 
  * **return_code** NFC return code (DFAB20) 
  * **card_count** number of cards found 
  * **out** custom poll result (DFDB2C) 
  * **cards** detected cards (FFDB20) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Open the field and execute polling loop (31-05) 


### function nfcFieldPollingExt

```
int nfcFieldPollingExt(
    unsigned tech_bm,
    unsigned timeout,
    const bytevector & in,
    unsigned char & return_code,
    NFCCardCount & card_count,
    bytevector & out,
    std::vector< NFCCardExt > & cards
)
```


**Parameters**: 

  * **tech_bm** technology bitmap ([NFCPollingBitmap](namespacevfisdi.md#enum-nfcpollingbitmap)) (DFA202) 
  * **timeout** poll timeout (DFA203) 
  * **in** custom data (DFA207) 
  * **return_code** NFC return code (DFAB20) 
  * **card_count** number of cards found 
  * **out** custom poll result (DFDB2C) 
  * **cards** detected cards (FFDB20) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) 

NFC pass-through: Open the field and execute polling loop (31-13) 


### function nfcFieldCancelPolling

```
int nfcFieldCancelPolling()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-throuhg: Cancel polling process (31-06) 


### function nfcFieldActivation

```
int nfcFieldActivation(
    unsigned modulation,
    const bytevector & info
)
```


**Parameters**: 

  * **modulation** NFC card type / modulation (DFDB21) 
  * **info** NFC card info (DFDB22) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Activate (select) the card found during polling 


### function nfcFtechBaud

```
int nfcFtechBaud(
    unsigned char baud
)
```


**Parameters**: 

  * **baud** baud rate: 0=INF_BAUD212, 1=INF_BAUD424 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Change NFC-F baud rate 


### function nfcMifareAuthenticate

```
int nfcMifareAuthenticate(
    unsigned char blocknum,
    unsigned char keytype,
    const bytevector & key
)
```


**Parameters**: 

  * **blocknum** block number (DFA208) 
  * **keytype** key type (DFA209) 
  * **key** key (DFA20A) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Authenticate block number with key (31-0A) 


### function nfcMifareRead

```
int nfcMifareRead(
    unsigned char type,
    unsigned char startblock,
    unsigned char blockcount,
    bytevector & out
)
```


**Parameters**: 

  * **type** Mifare card type (DFA20B) 
  * **startblock** start block (DFA20C) 
  * **blockcount** number of blocks to read (up to 15) (DFA20D) 
  * **out** output data (DFA20E) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Read _blockcount_ blocks of data starting from block _startblock_ (31-0B) 


### function nfcMifareWrite

```
int nfcMifareWrite(
    unsigned char type,
    unsigned char startblock,
    unsigned char blockcount,
    const bytevector & in
)
```


**Parameters**: 

  * **type** Mifare card type (DFA20B) 
  * **startblock** start block (DFA20C) 
  * **blockcount** number of blocks to read (up to 15) (DFA20D) 
  * **in** input data (DFA20F) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Write _blockcount_ blocks of data starting from block _startblock_ (31-0C) 


### function nfcMifareIncrement

```
int nfcMifareIncrement(
    unsigned char block,
    unsigned char value
)
```


**Parameters**: 

  * **block** block number (DFA208) 
  * **value** increment value (DFA210) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Increment value of block (31-0D) 


### function nfcMifareDecrement

```
int nfcMifareDecrement(
    unsigned char block,
    unsigned char value
)
```


**Parameters**: 

  * **block** block number (DFA208) 
  * **value** decrement value (DFA210) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Decrement value of block (31-0E) 


### function nfcMifareIncrementOnly

```
int nfcMifareIncrementOnly(
    unsigned char block,
    unsigned char value
)
```


**Parameters**: 

  * **block** block number (DFA208) 
  * **value** increment value (DFA210) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Increment value of block (31-15) 


### function nfcMifareDecrementOnly

```
int nfcMifareDecrementOnly(
    unsigned char block,
    unsigned char value
)
```


**Parameters**: 

  * **block** block number (DFA208) 
  * **value** decrement value (DFA210) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Decrement value of block (31-16) 


### function nfcMifareRestore

```
int nfcMifareRestore(
    unsigned char block
)
```


**Parameters**: 

  * **block** block number (DFA208) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Restore a value block to transfer buffer (31-18) 


### function nfcMifareTransfer

```
int nfcMifareTransfer(
    unsigned char block
)
```


**Parameters**: 

  * **block** block number (DFA208) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Store a value block from transfer buffer (31-17) 


### function nfcFelicaSendReceive

```
int nfcFelicaSendReceive(
    unsigned timeout,
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **timeout** timeout (DFA218) 
  * **in** input data (DFA206) 
  * **out** output data (DFA206) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Felica: Send and receive raw data (31-0F) 


### function nfcFelicaPolling

```
int nfcFelicaPolling(
    unsigned poll_timeout,
    unsigned recv_timeout,
    unsigned short system_code,
    unsigned char req_code,
    unsigned char time_slot,
    Array< 8 > & uid,
    Array< 8 > & pad,
    unsigned short & system_code_out
)
```


**Parameters**: 

  * **poll_timeout** poll timeout (DFA211) 
  * **recv_timeout** receive timeout (DFA212) 
  * **system_code** system code (DFA213) 
  * **req_code** request code (DFA214) 
  * **time_slot** time slot (DFA215) 
  * **uid** UID (DFA216) 
  * **pad** PAD (DFA217) 
  * **system_code_out** system code (DFA213) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Felica: Polling request (31-14) 


### function nfcApduSendReceive

```
int nfcApduSendReceive(
    const bytevector & in,
    bytevector & out,
    unsigned short & cardsw1sw2
)
```


**Parameters**: 

  * **in** input data (DFA204) 
  * **out** output data (DFA205) 
  * **cardsw1sw2** SW1/SW2 from card (DFA219) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC: Send and receive data using APDU protocol (31-1C) 


### function nfcTxRx

```
int nfcTxRx(
    unsigned card_type,
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **card_type** NFC card type (DFDB21) 
  * **in** input data (DFA206) 
  * **out** output data (DFA206) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC: Send and receive raw data usingISO 14443-3 protocol (31-08) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
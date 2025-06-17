---
title: crdsync/export/crdsync_client.h

---

# crdsync/export/crdsync_client.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[CRDSYNC_ServerConfig](struct_c_r_d_s_y_n_c___server_config.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef int | **[CRDSYNC_RET](crdsync__client_8h.md#typedef-crdsync-ret)** <br>Response code type definition.  |
| typedef void(*)(const char *str, void *data) | **[CRDSYNC_TraceCallback](crdsync__client_8h.md#typedef-crdsync-tracecallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[crdSync_ConfigureServer](crdsync__client_8h.md#function-crdsync-configureserver)**(unsigned char server_cnt, const [CRDSYNC_ServerConfig](struct_c_r_d_s_y_n_c___server_config.md) * server_cfg) |
| void | **[crdSync_Version](crdsync__client_8h.md#function-crdsync-version)**(char * version, unsigned char len) |
| void | **[crdSync_SetTraceCallback](crdsync__client_8h.md#function-crdsync-settracecallback)**([CRDSYNC_TraceCallback](crdsync__client_8h.md#typedef-crdsync-tracecallback) cbf, void * cb_data) |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_Open](crdsync__client_8h.md#function-crdsync-open)**(unsigned char server_idx, unsigned Options)<br>Open the synchronous card driver   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_Close](crdsync__client_8h.md#function-crdsync-close)**(unsigned char server_idx, unsigned Options)<br>Close the synchronous card driver   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_IsCardPresent](crdsync__client_8h.md#function-crdsync-iscardpresent)**(unsigned char server_idx)<br>Check if a card is inserted in the full-sized card reader.   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_PowerUp](crdsync__client_8h.md#function-crdsync-powerup)**(unsigned char server_idx, int CardType, unsigned char AtrBuf[], unsigned char * AtrLen)<br>Power up the synchronous card   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_PowerDown](crdsync__client_8h.md#function-crdsync-powerdown)**(unsigned char server_idx)<br>Power down the synchronous card   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_ReadData](crdsync__client_8h.md#function-crdsync-readdata)**(unsigned char server_idx, int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)<br>Read data from the synchronous card   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_WriteData](crdsync__client_8h.md#function-crdsync-writedata)**(unsigned char server_idx, int MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)<br>Write data to the synchronous card   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_PresentSecretCode](crdsync__client_8h.md#function-crdsync-presentsecretcode)**(unsigned char server_idx, const unsigned char PinCode[], unsigned short nSize)<br>Present Secret code to the synchronous card   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_ReadSecurityMem](crdsync__client_8h.md#function-crdsync-readsecuritymem)**(unsigned char server_idx, unsigned char RxBuff[], unsigned char * BufLen)<br>Read Security Memory from synchronous card   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_WriteSecurityMem](crdsync__client_8h.md#function-crdsync-writesecuritymem)**(unsigned char server_idx, const unsigned char TxBuf[], unsigned short TxLen)<br>Update PIN Code (PSC) in synchronous card   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_ReadProtectionMem](crdsync__client_8h.md#function-crdsync-readprotectionmem)**(unsigned char server_idx, unsigned char RxBuf[])<br>SLE4442: Read Protection Memory   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_WriteProtectionMem](crdsync__client_8h.md#function-crdsync-writeprotectionmem)**(unsigned char server_idx, unsigned short MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)<br>SLE4442: Write Protection Memory   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_ReadWithProtectionBit](crdsync__client_8h.md#function-crdsync-readwithprotectionbit)**(unsigned char server_idx, int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)<br>SLE4428: Read data with protection bit   .  |
| [CRDSYNC_RET](crdsync_8h.md#typedef-crdsync-ret) | **[crdSync_WriteWithProtectionBit](crdsync__client_8h.md#function-crdsync-writewithprotectionbit)**(unsigned char server_idx, int MemoryAddress, unsigned char TxBuf[], unsigned short TxLen)<br>SLE4428: Write data with protection bit   .  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success)** <br>Operation was successful.  |
|  | **[CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure)** <br>Operation failed.  |
|  | **[CRDSYNC_Error_Power_Action](crdsync__client_8h.md#define-crdsync-error-power-action)** <br>Power-Up operation failed.  |
|  | **[CRDSYNC_Error_Not_Supported](crdsync__client_8h.md#define-crdsync-error-not-supported)** <br>Synchronous card type not supported.  |
|  | **[CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam)** <br>A function parameter is invalid.  |
|  | **[CRDSYNC_Error_Protocol](crdsync__client_8h.md#define-crdsync-error-protocol)** <br>Communication error with synchronous card.  |
|  | **[CRDSYNC_Error_Mem_Protected](crdsync__client_8h.md#define-crdsync-error-mem-protected)** <br>SLE Memory protected.  |
|  | **[CRDSYNC_Error_PSC_Required](crdsync__client_8h.md#define-crdsync-error-psc-required)** <br>PSC Validation Required.  |
|  | **[CRDSYNC_Error_PSC](crdsync__client_8h.md#define-crdsync-error-psc)** <br>PSC Validation Failed.  |
|  | **[CRDSYNC_Error_FORMAT](crdsync__client_8h.md#define-crdsync-error-format)** <br>Malformed message.  |
|  | **[CRDSYNC_Error_TLV](crdsync__client_8h.md#define-crdsync-error-tlv)** <br>Error parsing TLV input buffer.  |
|  | **[CRDSYNC_Error_PARAMETER](crdsync__client_8h.md#define-crdsync-error-parameter)** <br>Missing parameter.  |
|  | **[CRDSYNC_Error_UNKNOWN_CLA](crdsync__client_8h.md#define-crdsync-error-unknown-cla)** <br>Unknown class.  |
|  | **[CRDSYNC_Error_UNKNOWN_INS](crdsync__client_8h.md#define-crdsync-error-unknown-ins)** <br>Unknown instruction.  |
|  | **[CRDSYNC_Error_BLOCKED](crdsync__client_8h.md#define-crdsync-error-blocked)** <br>CRDSYNC service is blocked by another client/function call.  |
|  | **[CRDSYNC_Error_NO_SERVER](crdsync__client_8h.md#define-crdsync-error-no-server)** <br>No server configured.  |
|  | **[CRDSYNC_Error_IPC](crdsync__client_8h.md#define-crdsync-error-ipc)** <br>IPC error (e.g. connection to server lost)  |
|  | **[CRDSYNC_CARDTYPE_AT24C01SC](crdsync__client_8h.md#define-crdsync-cardtype-at24c01sc)** <br>Atmel AT24C01SC.  |
|  | **[CRDSYNC_CARDTYPE_AT24C02SC](crdsync__client_8h.md#define-crdsync-cardtype-at24c02sc)** <br>Atmel AT24C02SC.  |
|  | **[CRDSYNC_CARDTYPE_AT24C04SC](crdsync__client_8h.md#define-crdsync-cardtype-at24c04sc)** <br>Atmel AT24C04SC.  |
|  | **[CRDSYNC_CARDTYPE_AT24C08SC](crdsync__client_8h.md#define-crdsync-cardtype-at24c08sc)** <br>Atmel AT24C08SC.  |
|  | **[CRDSYNC_CARDTYPE_AT24C16SC](crdsync__client_8h.md#define-crdsync-cardtype-at24c16sc)** <br>Atmel AT24C16SC.  |
|  | **[CRDSYNC_CARDTYPE_ST14C02SC](crdsync__client_8h.md#define-crdsync-cardtype-st14c02sc)** <br>STMicro ST14C02SC.  |
|  | **[CRDSYNC_CARDTYPE_AT24C32SC](crdsync__client_8h.md#define-crdsync-cardtype-at24c32sc)** <br>Atmel AT24C16SC.  |
|  | **[CRDSYNC_CARDTYPE_AT24C64SC](crdsync__client_8h.md#define-crdsync-cardtype-at24c64sc)** <br>Atmel AT24C16SC.  |
|  | **[CRDSYNC_CARDTYPE_SLE4418](crdsync__client_8h.md#define-crdsync-cardtype-sle4418)** <br>Siemens SLE4418.  |
|  | **[CRDSYNC_CARDTYPE_SLE4428](crdsync__client_8h.md#define-crdsync-cardtype-sle4428)** <br>Siemens SLE4428.  |
|  | **[CRDSYNC_CARDTYPE_SLE4432](crdsync__client_8h.md#define-crdsync-cardtype-sle4432)** <br>Siemens SLE4432.  |
|  | **[CRDSYNC_CARDTYPE_SLE4442](crdsync__client_8h.md#define-crdsync-cardtype-sle4442)** <br>Siemens SLE4442.  |
|  | **[CRDSYNC_CARDTYPE_AT24C128SC](crdsync__client_8h.md#define-crdsync-cardtype-at24c128sc)** <br>Atmel AT24C128SC.  |
|  | **[CRDSYNC_CARDTYPE_AT24C256SC](crdsync__client_8h.md#define-crdsync-cardtype-at24c256sc)** <br>Atmel AT24C256SC.  |

## Types Documentation

### typedef CRDSYNC_RET

```cpp
typedef int CRDSYNC_RET;
```

Response code type definition. 

### typedef CRDSYNC_TraceCallback

```cpp
typedef void(* CRDSYNC_TraceCallback) (const char *str, void *data);
```


**Parameters**: 

  * **str** : Trace message. 
  * **data** : Data pointer provided by the application. 


Type of function that is called for traces, see [crdSync_SetTraceCallback()](crdsync__client_8h.md#function-crdsync-settracecallback)



## Functions Documentation

### function crdSync_ConfigureServer

```cpp
int crdSync_ConfigureServer(
    unsigned char server_cnt,
    const CRDSYNC_ServerConfig * server_cfg
)
```


**Parameters**: 

  * **server_cnt** : number of servers. Set to 0 to disconnect from all servers. 
  * **server_cfg** : list of server configurations 


**Return**: 

* [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) : Successfully connected to all servers
* [CRDSYNC_Error_IPC](crdsync__client_8h.md#define-crdsync-error-ipc) : Could not connect to one or more servers
* [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) : Internal error 

Configure servers. Set servers and connect to them. 


### function crdSync_Version

```cpp
void crdSync_Version(
    char * version,
    unsigned char len
)
```


**Parameters**: 

  * **version** in: Buffer for version info, out: C-String with library name and version 
  * **len** Allocated size of version 


Get Version of library 


### function crdSync_SetTraceCallback

```cpp
void crdSync_SetTraceCallback(
    CRDSYNC_TraceCallback cbf,
    void * cb_data
)
```


**Parameters**: 

  * **cbf** : Callback function for trace messages, may be NULL. 
  * **cb_data** : Data pointer that is passed on to the callback function cbf, may be NULL. 


Set callback function for trace output. 


### function crdSync_Open

```cpp
CRDSYNC_RET crdSync_Open(
    unsigned char server_idx,
    unsigned Options
)
```

Open the synchronous card driver   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **Options** - Reserved for future use


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Synchronous card driver opened. 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error, synchronous card driver is already opened. 


### function crdSync_Close

```cpp
CRDSYNC_RET crdSync_Close(
    unsigned char server_idx,
    unsigned Options
)
```

Close the synchronous card driver   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **Options** - Reserved for future use


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Synchronous card driver closed. 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error, synchronous card driver is not opened. 


### function crdSync_IsCardPresent

```cpp
CRDSYNC_RET crdSync_IsCardPresent(
    unsigned char server_idx
)
```

Check if a card is inserted in the full-sized card reader.   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)).


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - A card is inserted. 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - No card inserted. 


### function crdSync_PowerUp

```cpp
CRDSYNC_RET crdSync_PowerUp(
    unsigned char server_idx,
    int CardType,
    unsigned char AtrBuf[],
    unsigned char * AtrLen
)
```

Power up the synchronous card   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **CardType** - Synchronous card type, see [Synchronous Card Types](group___c_r_d_s_y_n_c___card___types.md)
  * **AtrBuf** - Pointer to buffer to hold any response from the card (optional) 
  * **AtrLen** - Pointer to 8-bit variable to hold length of card response (optional)


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - No card 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error, driver not opened or card not inserted 
  * [CRDSYNC_Error_Power_Action](crdsync__client_8h.md#define-crdsync-error-power-action) - Error, unable to power up card 
  * [CRDSYNC_Error_Not_Supported](crdsync__client_8h.md#define-crdsync-error-not-supported) - Invalid CardType 


### function crdSync_PowerDown

```cpp
CRDSYNC_RET crdSync_PowerDown(
    unsigned char server_idx
)
```

Power down the synchronous card   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)).


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Card powered down successfully. 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error powering down card - not powered up. 


### function crdSync_ReadData

```cpp
CRDSYNC_RET crdSync_ReadData(
    unsigned char server_idx,
    int MemoryAddress,
    unsigned char RxBuf[],
    unsigned short RxLen
)
```

Read data from the synchronous card   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **MemoryAddress** - memory address where to start reading from if -1, start at current location 
  * **RxBuf** - Pointer to buffer where read data is stored Must be large enough to hold 'RxLen' bytes 
  * **RxLen** - Number of bytes to read from card


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Operation successful 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error - driver not opened, card not inserted or powered up 
  * [CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam) - Invalid parameter, RxLen is zero, or RxBuf is NULL 
  * [CRDSYNC_Error_Protocol](crdsync__client_8h.md#define-crdsync-error-protocol) - Error communicating with the card - wrong CardType 


### function crdSync_WriteData

```cpp
CRDSYNC_RET crdSync_WriteData(
    unsigned char server_idx,
    int MemoryAddress,
    const unsigned char TxBuf[],
    unsigned short TxLen
)
```

Write data to the synchronous card   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **MemoryAddress** - memory address where to start reading from 
  * **TxBuf** - Pointer to buffer where data to write is stored 
  * **TxLen** - Number of bytes to write to the card


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Operation successful 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error - driver not opened, card not inserted or powered up 
  * [CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam) - Invalid parameter, TxLen is zero, or TxBuf is NULL 
  * [CRDSYNC_Error_Protocol](crdsync__client_8h.md#define-crdsync-error-protocol) - Error communicating with the card - wrong CardType 


**Note**: For SLE4428 and SLE4442 a preceding successful [crdSync_PresentSecretCode()](crdsync__client_8h.md#function-crdsync-presentsecretcode) is needed.

### function crdSync_PresentSecretCode

```cpp
CRDSYNC_RET crdSync_PresentSecretCode(
    unsigned char server_idx,
    const unsigned char PinCode[],
    unsigned short nSize
)
```

Present Secret code to the synchronous card   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **PinCode** - Pointer to buffer where Pin Code is stored 
  * **nSize** - PinCode size (e.g. 2 for SLE4428, 3 for SLE4442)


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Operation successful 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error - driver not opened, card not inserted or powered up 
  * [CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam) - Invalid parameter, nSize is wrong, or PinCode is NULL 
  * [CRDSYNC_Error_Protocol](crdsync__client_8h.md#define-crdsync-error-protocol) - Error communicating with the card 


### function crdSync_ReadSecurityMem

```cpp
CRDSYNC_RET crdSync_ReadSecurityMem(
    unsigned char server_idx,
    unsigned char RxBuff[],
    unsigned char * BufLen
)
```

Read Security Memory from synchronous card   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **RxBuff** - Pointer to buffer where security memory has to be stored 
  * **BufLen** - security memory length returned


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Operation successful 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error - driver not opened, card not inserted or powered up 
  * [CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam) - Invalid parameter, TxLen is zero, or TxBuf is NULL 
  * [CRDSYNC_Error_Protocol](crdsync__client_8h.md#define-crdsync-error-protocol) - Error communicating with the card 


Without a preceding successful [crdSync_PresentSecretCode()](crdsync__client_8h.md#function-crdsync-presentsecretcode) only the first byte is read. 

 This represents the Error Counter (EC). Each set bit shows a remaining PSC entry try. 

 Max. PSC entry tries: 8 for SLE4428, 3 for SLE 4442. 

 With a preceding successful [crdSync_PresentSecretCode()](crdsync__client_8h.md#function-crdsync-presentsecretcode) additionally the PSC is read.


### function crdSync_WriteSecurityMem

```cpp
CRDSYNC_RET crdSync_WriteSecurityMem(
    unsigned char server_idx,
    const unsigned char TxBuf[],
    unsigned short TxLen
)
```

Update PIN Code (PSC) in synchronous card   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **TxBuf** - Pointer to buffer where PSC data is stored 
  * **TxLen** - Number of bytes to write to the card (e.g. 2 for SLE4428, 3 for SLE4442)


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Operation successful 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error - driver not opened, card not inserted or powered up 
  * [CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam) - Invalid parameter, TxLen is zero, or TxBuf is NULL 
  * [CRDSYNC_Error_Protocol](crdsync__client_8h.md#define-crdsync-error-protocol) - Error communicating with the card 


**Note**: A preceding successful [crdSync_PresentSecretCode()](crdsync__client_8h.md#function-crdsync-presentsecretcode) is needed.

### function crdSync_ReadProtectionMem

```cpp
CRDSYNC_RET crdSync_ReadProtectionMem(
    unsigned char server_idx,
    unsigned char RxBuf[]
)
```

SLE4442: Read Protection Memory   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **RxBuf** - Pointer to 4-byte-buffer where protection memory shall be stored


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Operation successful 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error - driver not opened, card not inserted or powered up 
  * [CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam) - Invalid parameter, RxBuf is NULL 


### function crdSync_WriteProtectionMem

```cpp
CRDSYNC_RET crdSync_WriteProtectionMem(
    unsigned char server_idx,
    unsigned short MemoryAddress,
    const unsigned char TxBuf[],
    unsigned short TxLen
)
```

SLE4442: Write Protection Memory   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **MemoryAddress** - memory address where to start writing if -1, start at current location 
  * **TxBuf** - Pointer to buffer where the source data is stored 
  * **TxLen** - Number of bytes of source data


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Operation successful 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error - driver not opened, card not inserted or powered up 
  * [CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam) - Invalid parameter, TxLen is zero, or TxBuf is NULL 
  * [CRDSYNC_Error_Protocol](crdsync__client_8h.md#define-crdsync-error-protocol) - Error communicating with the card 


**Note**: The data must have been already stored on the card by means of [crdSync_WriteData()](crdsync__client_8h.md#function-crdsync-writedata). 

 The contents of `TxBuf` is compared with the data on the card. 

 Only in case of match the protection bits are set.

### function crdSync_ReadWithProtectionBit

```cpp
CRDSYNC_RET crdSync_ReadWithProtectionBit(
    unsigned char server_idx,
    int MemoryAddress,
    unsigned char RxBuf[],
    unsigned short RxLen
)
```

SLE4428: Read data with protection bit   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **MemoryAddress** - memory address where to start reading from if -1, start at current location 
  * **RxBuf** - Pointer to buffer where the read data (incl. protection bits) has to be stored ** Must be large enough to hold 2*RxLen bytes **
  * **RxLen** - Number of data bytes to read if 0, operation effectively sets the current address


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Operation successful 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error - driver not opened, card not inserted or powered up 
  * [CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam) - Invalid parameter, RxLen is zero, or RxBuf is NULL 
  * [CRDSYNC_Error_Protocol](crdsync__client_8h.md#define-crdsync-error-protocol) - Error communicating with the card 


Read `RxLen` data bytes + 1 byte protection bit per data byte


### function crdSync_WriteWithProtectionBit

```cpp
CRDSYNC_RET crdSync_WriteWithProtectionBit(
    unsigned char server_idx,
    int MemoryAddress,
    unsigned char TxBuf[],
    unsigned short TxLen
)
```

SLE4428: Write data with protection bit   . 

**Parameters**: 

  * **server_idx** - index of server in server configuration (see [crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)). 
  * **MemoryAddress** - memory address where to start writing if -1, start at current location 
  * **TxBuf** - Pointer to buffer where the source data is stored 
  * **TxLen** - Number of bytes of source data


**Return**: 

  * [CRDSYNC_Success](crdsync__client_8h.md#define-crdsync-success) - Operation successful 
  * [CRDSYNC_Failure](crdsync__client_8h.md#define-crdsync-failure) - Error - driver not opened, card not inserted or powered up 
  * [CRDSYNC_Error_BadParam](crdsync__client_8h.md#define-crdsync-error-badparam) - Invalid parameter, RxLen is zero, or RxBuf is NULL 
  * [CRDSYNC_Error_Protocol](crdsync__client_8h.md#define-crdsync-error-protocol) - Error communicating with the card 
  * [CRDSYNC_Error_Not_Supported](crdsync__client_8h.md#define-crdsync-error-not-supported) - Bad Card Type 


**Note**: The data must have been already stored on the card by means of [crdSync_WriteData()](crdsync__client_8h.md#function-crdsync-writedata). 

 The contents of `TxBuf` is compared with the data on the card. 

 Only in case of match the protection bits are set.



## Macros Documentation

### define CRDSYNC_Success

```cpp
#define CRDSYNC_Success 0
```

Operation was successful. 

### define CRDSYNC_Failure

```cpp
#define CRDSYNC_Failure 1
```

Operation failed. 

### define CRDSYNC_Error_Power_Action

```cpp
#define CRDSYNC_Error_Power_Action 2
```

Power-Up operation failed. 

### define CRDSYNC_Error_Not_Supported

```cpp
#define CRDSYNC_Error_Not_Supported 3
```

Synchronous card type not supported. 

### define CRDSYNC_Error_BadParam

```cpp
#define CRDSYNC_Error_BadParam 4
```

A function parameter is invalid. 

### define CRDSYNC_Error_Protocol

```cpp
#define CRDSYNC_Error_Protocol 5
```

Communication error with synchronous card. 

### define CRDSYNC_Error_Mem_Protected

```cpp
#define CRDSYNC_Error_Mem_Protected 6
```

SLE Memory protected. 

### define CRDSYNC_Error_PSC_Required

```cpp
#define CRDSYNC_Error_PSC_Required 7
```

PSC Validation Required. 

### define CRDSYNC_Error_PSC

```cpp
#define CRDSYNC_Error_PSC 8
```

PSC Validation Failed. 

### define CRDSYNC_Error_FORMAT

```cpp
#define CRDSYNC_Error_FORMAT -101
```

Malformed message. 

### define CRDSYNC_Error_TLV

```cpp
#define CRDSYNC_Error_TLV -102
```

Error parsing TLV input buffer. 

### define CRDSYNC_Error_PARAMETER

```cpp
#define CRDSYNC_Error_PARAMETER -103
```

Missing parameter. 

### define CRDSYNC_Error_UNKNOWN_CLA

```cpp
#define CRDSYNC_Error_UNKNOWN_CLA -104
```

Unknown class. 

### define CRDSYNC_Error_UNKNOWN_INS

```cpp
#define CRDSYNC_Error_UNKNOWN_INS -105
```

Unknown instruction. 

### define CRDSYNC_Error_BLOCKED

```cpp
#define CRDSYNC_Error_BLOCKED -106
```

CRDSYNC service is blocked by another client/function call. 

### define CRDSYNC_Error_NO_SERVER

```cpp
#define CRDSYNC_Error_NO_SERVER -201
```

No server configured. 

### define CRDSYNC_Error_IPC

```cpp
#define CRDSYNC_Error_IPC -202
```

IPC error (e.g. connection to server lost) 

### define CRDSYNC_CARDTYPE_AT24C01SC

```cpp
#define CRDSYNC_CARDTYPE_AT24C01SC 1
```

Atmel AT24C01SC. 

### define CRDSYNC_CARDTYPE_AT24C02SC

```cpp
#define CRDSYNC_CARDTYPE_AT24C02SC 2
```

Atmel AT24C02SC. 

### define CRDSYNC_CARDTYPE_AT24C04SC

```cpp
#define CRDSYNC_CARDTYPE_AT24C04SC 3
```

Atmel AT24C04SC. 

### define CRDSYNC_CARDTYPE_AT24C08SC

```cpp
#define CRDSYNC_CARDTYPE_AT24C08SC 4
```

Atmel AT24C08SC. 

### define CRDSYNC_CARDTYPE_AT24C16SC

```cpp
#define CRDSYNC_CARDTYPE_AT24C16SC 5
```

Atmel AT24C16SC. 

### define CRDSYNC_CARDTYPE_ST14C02SC

```cpp
#define CRDSYNC_CARDTYPE_ST14C02SC 6
```

STMicro ST14C02SC. 

### define CRDSYNC_CARDTYPE_AT24C32SC

```cpp
#define CRDSYNC_CARDTYPE_AT24C32SC 7
```

Atmel AT24C16SC. 

### define CRDSYNC_CARDTYPE_AT24C64SC

```cpp
#define CRDSYNC_CARDTYPE_AT24C64SC 8
```

Atmel AT24C16SC. 

### define CRDSYNC_CARDTYPE_SLE4418

```cpp
#define CRDSYNC_CARDTYPE_SLE4418 9
```

Siemens SLE4418. 

### define CRDSYNC_CARDTYPE_SLE4428

```cpp
#define CRDSYNC_CARDTYPE_SLE4428 10
```

Siemens SLE4428. 

### define CRDSYNC_CARDTYPE_SLE4432

```cpp
#define CRDSYNC_CARDTYPE_SLE4432 11
```

Siemens SLE4432. 

### define CRDSYNC_CARDTYPE_SLE4442

```cpp
#define CRDSYNC_CARDTYPE_SLE4442 12
```

Siemens SLE4442. 

### define CRDSYNC_CARDTYPE_AT24C128SC

```cpp
#define CRDSYNC_CARDTYPE_AT24C128SC 13
```

Atmel AT24C128SC. 

### define CRDSYNC_CARDTYPE_AT24C256SC

```cpp
#define CRDSYNC_CARDTYPE_AT24C256SC 14
```

Atmel AT24C256SC. 

## Source code

```cpp

#ifndef __ADK_CRD_SYNC_CLIENT_INTERFACE__
#define __ADK_CRD_SYNC_CLIENT_INTERFACE__

#ifdef __cplusplus
extern "C" {
#endif

// ================================================================================================



typedef int CRDSYNC_RET;               

#define CRDSYNC_Success               0  
#define CRDSYNC_Failure               1  
#define CRDSYNC_Error_Power_Action    2  
#define CRDSYNC_Error_Not_Supported   3  
#define CRDSYNC_Error_BadParam        4  
#define CRDSYNC_Error_Protocol        5  
#define CRDSYNC_Error_Mem_Protected   6  
#define CRDSYNC_Error_PSC_Required    7  
#define CRDSYNC_Error_PSC             8  

#define CRDSYNC_Error_FORMAT       -101  
#define CRDSYNC_Error_TLV          -102  
#define CRDSYNC_Error_PARAMETER    -103  
#define CRDSYNC_Error_UNKNOWN_CLA  -104  
#define CRDSYNC_Error_UNKNOWN_INS  -105  
#define CRDSYNC_Error_BLOCKED      -106  

#define CRDSYNC_Error_NO_SERVER    -201  
#define CRDSYNC_Error_IPC          -202  




#define CRDSYNC_CARDTYPE_AT24C01SC             1  
#define CRDSYNC_CARDTYPE_AT24C02SC             2  
#define CRDSYNC_CARDTYPE_AT24C04SC             3  
#define CRDSYNC_CARDTYPE_AT24C08SC             4  
#define CRDSYNC_CARDTYPE_AT24C16SC             5  
#define CRDSYNC_CARDTYPE_ST14C02SC             6  
#define CRDSYNC_CARDTYPE_AT24C32SC             7  
#define CRDSYNC_CARDTYPE_AT24C64SC             8  
#define CRDSYNC_CARDTYPE_SLE4418               9  
#define CRDSYNC_CARDTYPE_SLE4428               10 
#define CRDSYNC_CARDTYPE_SLE4432               11 
#define CRDSYNC_CARDTYPE_SLE4442               12 
#define CRDSYNC_CARDTYPE_AT24C128SC            13 
#define CRDSYNC_CARDTYPE_AT24C256SC            14 



typedef struct {
  const char *hostname;     
  unsigned short port;      
} CRDSYNC_ServerConfig;


typedef void (* CRDSYNC_TraceCallback) (const char *str, void *data);


int crdSync_ConfigureServer(unsigned char server_cnt, const CRDSYNC_ServerConfig *server_cfg);


void crdSync_Version(char *version, unsigned char len);


void crdSync_SetTraceCallback(CRDSYNC_TraceCallback cbf, void *cb_data);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_Open(unsigned char server_idx, unsigned Options);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_Close(unsigned char server_idx, unsigned Options);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_IsCardPresent(unsigned char server_idx);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_PowerUp(unsigned char  server_idx,
                            int            CardType,
                            unsigned char  AtrBuf[],
                            unsigned char *AtrLen);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_PowerDown(unsigned char server_idx);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_ReadData(unsigned char  server_idx,
                             int            MemoryAddress,
                             unsigned char  RxBuf[],
                             unsigned short RxLen);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_WriteData(unsigned char       server_idx,
                              int                 MemoryAddress,
                              const unsigned char TxBuf[],
                              unsigned short      TxLen);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_PresentSecretCode(unsigned char       server_idx,
                                      const unsigned char PinCode[],
                                      unsigned short      nSize);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_ReadSecurityMem(unsigned char   server_idx,
                                    unsigned char   RxBuff[],
                                    unsigned char * BufLen);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_WriteSecurityMem(unsigned char       server_idx,
                                     const unsigned char TxBuf[],
                                     unsigned short      TxLen);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_ReadProtectionMem(unsigned char server_idx,
                                      unsigned char RxBuf[]);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_WriteProtectionMem(unsigned char       server_idx,
                                       unsigned short      MemoryAddress,
                                       const unsigned char TxBuf[],
                                       unsigned short      TxLen);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_ReadWithProtectionBit(unsigned char  server_idx,
                                          int            MemoryAddress,
                                          unsigned char  RxBuf[],
                                          unsigned short RxLen);


//****************************************************************************
//****************************************************************************
CRDSYNC_RET crdSync_WriteWithProtectionBit(unsigned char  server_idx,
                                           int            MemoryAddress,
                                           unsigned char  TxBuf[],
                                           unsigned short TxLen);


// ================================================================================================

#ifdef __cplusplus
}
#endif

#endif  // avoid double include
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

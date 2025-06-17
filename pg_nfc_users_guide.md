---
title: ADK-NFC Programmers Guide

---

# ADK-NFC Programmers Guide




# PREFACE

This guide provides detailed descriptions of the ADK NFC features, as well as information for configuring ADK NFC framework.


## Audience

This document is intended for programmers who want to understand and use the ADK NFC framework.


## Organization

This guide is organized as follows:

[INTRODUCTION]. Provides an overview of the ADK NFC framework.

[ARCHITECTURE]. Architecture Block Diagram

[GET STARTED]. How to work with ADK NFC Firmware.

[GENERAL INTERFACE]. General functions to initialize and work with NFC Framework.

[PASS THROUGH]. Handles Pass Through functionality such as RF field control, Mifare, FeliCa and APDU based transactons.

[VAS WALLETS]. Handles Wallets interface by communicating with VAS Wallet applications based on VWI and other wallet protocols.

[USER INTERFACE]. Handles User Interface by providing text message, buzzer and LED's information.

[TYPES]. Provides information about hardware supported as well as about software requirements. - change the explanation.

[MEMORY ALLOCATION]. notes and rules on memory allocation.

[KNOWN ISSUES]. List of know issues and limitations.

[HISTORY]. Information for versions tracking.


# INTRODUCTION

NFC framework handles a non-payment transactions over different communication and data protocols. Initialy was disigned to implement kernels to transfer Value Added Services to and from Mobile Wallets. Later, has been extended to include other communication standards such as different types of Mifare, Felica exchange, APDU exchange. Also handles simple Pass Through functionalities such as Field control, Polling,target activation and transive.


# ARCHITECTURE

![ADK-NFC_Vertex_Architecture.jpg](.//ADK-NFC_Vertex_Architecture.jpg)


## User Application

User application, implemented according to the standards and specifications required by the customer/region. Once linked with the client it will have full interface with NFC functionality via either server-client or functional flows depending on platform and architecture. To simplify application development and to standardized the solution Client shares functional interface and handles the communication flow with lower layers.


## NFC Client

Shares a functional interface to user application to configure and control lower layers. Converts function calls to byte stream packet according to VFI1 protocol. 


### Communication Client (IPC)

Shares an interface to setup a communication channel (i.e. PIPE, Socket, Mailbox, etc) between application and NFC framework. 

### Functional Client

Direct calls to NFC Framework.


## NFC Server

Receives the command via communication channel and calls to NFC Framework In/Out function.


## NFC Framework

Responsible on parsing, verification and routing of the command to appropriate functional module. When the functional module completes its flow NFC Framework composes the response package and send it back to the client.


## Pass Through

Provides the functionality to control RF interface, to poll and activate NFC capable devices. Also shares interface to send/receive data packages to/from NFC capable device over APDU, Mifare, Felica and other protocols.


## Mifare

Provides the functionality to control following Mifare protocols:

* Mifare Ultralight
* Mifare Classic
* Mifare DesFire


## APDU

Provides the functionality to exchange APDU (ISO-7816) commands.


## Felica

Provides the functionality to exchange Type-F Felica commands.


## Technology Discovery

Responsible for technology discovery of the handset for VAS transactions.


## Wallet Manager

Responsible for Configuration, Selection and Processing of VAS Wallet kernels.


# GET STARTED



* Link to "libNFC_Client.so", "libUtils.so" (libNfcUtils.so for Vx), "libNFC_Framework.so" and "libvfiipc.so".
* Include "NFC_Interface.h", "NFC_Client.h" 
* Make sure you have a linker path set to location with NFC FW libraries to avoid "symbols not found" issue.
* For Verix only: Define _VRXEVO macro
* For Verix only: Define heap size: vrxhdr -h 1000000. Note: you can change heap size value based on your system setup.
* Refer to [EXAMPLES]


# GENERAL INTERFACE



| Return Value   | Name   | Parameters   | Description    |
|  -------- | -------- | -------- | -------- |
| [CL_STATUS] | NFC_Client_Init   | [CONNECTION_TYPE] | Initializes NFC Client.    |
| [CL_STATUS] | NFC_SerialOpen   | void   | Open serial connection to NFC Framework.    |
| [CL_STATUS] | NFC_SerialClose   | void   | Close serial connection to NFC Framework.    |
| [ResponseCodes] | NFC_Ping   | [rawData] *dataOut   | Return [NFC Framework State] of the NFC framework.    |
| [ResponseCodes] | NFC_Get_Version   | [rawData] *jsonStreamOut   | Returns ADK-NFC build and kernels versions.    |




```
By calling NFC_Client_Init() the application will define whether the client going to communicate with NFC Framework directly or serial.
Once the connection is established there is no way to change it unless reboot.
```



```
NFC_Get_Version() output format will be: 
{
"Component" : "NFC : x.y.z-ab",
"ctls-l1" : "Vertex CTLS x.y.z-ab",
"nfc-l1" : "x.y.z-ab",
"Kernels" : {"wallet1": "x1.y1.z1-a1b1", "wallet2": "x2.y2.z2-a2b2", "wallet3": "x3.y3.z3-a3b3"}
}
NOTE: ctls-l1 version will be returned only after NFC_PT_Open() call.
```



# PASS THROUGH



## Pass Through

** General Pass Through Interface: **
| Return Value   | Name   | Parameters   | Description    |
|  -------- | -------- | -------- | -------- |
|  |
| [ResponseCodes] | NFC_PT_Open   | void   | Initializes L1 driver.    |
| [ResponseCodes] | NFC_PT_Close   | void   | Releases L1 driver.    |
| [ResponseCodes] | NFC_PT_FieldOn   | void   | Turns RF field on.    |
| [ResponseCodes] | NFC_PT_FieldOff   | void   | Turns RF field off.    |
| [ResponseCodes] | NFC_PT_Polling   | [pollReq] *inPollReq   | Open the field and executes polling loop to poll time (in mSec). The driver will be configured according to technology, card type, collision and activation parameters.    |
| [pollRes] *outPollRes    |
| [ResponseCodes] | NFC_PT_PollingFull   | [pollReq] *inPollReq   | Open the field and executes polling loop to poll time (in mSec). The driver will be configured according to technology, card type, collision and activation parameters.    |
| [pollResFull] *outPollRes    |
| [ResponseCodes] | NFC_PT_PollingABF   | [pollReq] *inPollParams   | Open the field and executes polling loop to poll time (in mSec). The driver will be configured according to technology, card type, collision and activation parameters.    |
| [pollResFull] *outPollRes    |
| [ResponseCodes] | NFC_PT_Cancel_Polling   | void   | Cancels polling process    |
| [ResponseCodes] | NFC_PT_Activation   | [NFC_CARD_TYPE] cardtype   | Activates (selects) the card found during polling.    |
| [rawData] *rd_activationData    |
| [ResponseCodes] | NFC_PT_TxRx   | [NFC_CARD_TYPE] cardtype   | Sends and receives raw data using ISO 14443-3 protocol.    |
| [rawData] *inBuff    |
| [rawData] *outBuff    |
| [ResponseCodes] | NFC_PT_FtechBaud   | [NFC_F_BAUD] baud   | Changes NFC-F baud rate.    |
| [ResponseCodes] | NFC_PT_SetBaudRate   | [NFC_BAUD_RATE] baud   | Changes NFC baud rate for type A/B technology.    |
| void   | NFC_Free_Poll_Data   | [pollRes] *outPollRes   | Releases memory allocated in the [pollRes] *outPollRes when [NFC_PT_Polling()](titusstubs_8cpp.md#function-nfc-pt-polling) was called.    |
| void   | NFC_Free_Poll_Data_Full   | [pollResFull] *outPollRes   | Releases memory allocated in the [pollResFull] *outPollRes when [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull) was called.    |




### Pass Through TxRx Flow

![PassThrough_Flow.jpg](.//PassThrough_Flow.jpg)

```
NOTES: 
1.  In some cases polling cycle can fail when both A and F technologies is used in the same cycle.
    Better approach would be to separate polling for A from polling for F in two different calls.
```




## NFC Mifare

** Mifare Interface: **
| Return Value   | Name   | Parameters   | Description    |
|  -------- | -------- | -------- | -------- |
|  |
| [ResponseCodes] | NFC_Mifare_Authenticate   | unsigned char blockNumber   | Authenticates blockNumber with key.    |
| [MIFARE_KEY_TYPE] keyType    |
| [rawData] *key    |
| [ResponseCodes] | NFC_Mifare_Read   | [I_MIFARE_CARD_TYPE] m_cardType   | Reads the blockAmount (up to 15 blocks at one time) of data from StartBlockNum.    |
| usint StartBlockNum    |
| usint blockAmount    |
| [rawData] *out_buff    |
| [ResponseCodes] | NFC_Mifare_Write   | [I_MIFARE_CARD_TYPE] m_cardType   | Writes blockAmount (up to 15 blocks at one time) of data to StartBlockNum.    |
| usint StartBlockNum    |
| usint blockAmount    |
| [rawData] *in_buff    |
| [ResponseCodes] | NFC_Mifare_Increment   | unsigned int blockNum   | Increments value of 'blockNum' by 'amount' and stores it in the same block    |
| int amount    |
| [ResponseCodes] | NFC_Mifare_Decrement   | unsigned int blockNum   | Decrements value of 'blockNum' by 'amount' and stores it in the same block    |
| int amount    |
| [ResponseCodes] | NFC_Mifare_Increment_Only   | unsigned int blockNum   | Increments value of 'blockNum' by 'amount' and stores it in the temporary block    |
| int amount    |
| [ResponseCodes] | NFC_Mifare_Decrement_Only   | unsigned int blockNum   | Decrements value of 'blockNum' by 'amount' and stores it in the temporary block    |
| int amount    |
| [ResponseCodes] | NFC_Mifare_Transfer   | unsigned int blockNum   | Transfers block value from blockNum tp temporary block    |
| [ResponseCodes] | NFC_Mifare_Restore   | unsigned int blockNum   | Restores block value from temporary to blockNum    |




### Mifare Flow

![Mifare_Flow.jpg](.//Mifare_Flow.jpg)



### NFC Mifare Ultralight C



```
Unlike to regular Mifare Ultralight, Mifare Ultralight C has authentication process to get an access to protected pages.
The authentication key is stored in the last four pages on the card. Same key should be used from the application side to process authentication properly.

Following flow represents standard Mifare Ultralight C transaction:

1. Call NFC_PT_Open()
2. Call NFC_PT_FieldOn()
3. Call NFC_PT_PollingFull(Technology "A") and ensure that returned card type is "I_MIFARE_TYPE_ULTRALIGHT_C"
4. Call NFC_PT_Activation(Technology "A")
5. Call NFC_PT_TxRx() with data "0xA1, 0x00" to initiate authentication process and ensure that 8 bytes of encrypted random (R-card) number received.
6. Generate terminal random number (R-terminal) and decrypt random received from card D(R-card)
7. Call NFC_PT_TxRx() with combined encrypted E(R-card and R-terminal) and verify the response (should be ACK 0x0A)
8. Call NFC_Mifare_Read() to read data from the card
9. Call NFC_Mifare_Write() to read data to the card
10. NFC_PT_FieldOff()
11. NFC_PT_Close()
```






```
NOTES: 
1.  On VOS2 based platform, per L1 design, calling mifare authentication will automatically call polling and activation of the first mifare card found. 
2.  Due to L1 driver interface limitations, 15 block is a maximum amount of data to read/write from/to MiFare card. 
3.  According to MiFare specification, there is no card type validation before any operation. Moreover some commands are shared between MiFare Classic and UL. 
    It is user's responsibility to ensure the card type is correct.
4.  NFC_PT_Activation() is required to get the card into 'Activate" state and be ready to perform Read/Write operations.
5.  MiFare Contactless Cards and Tags have much slower CPU than Contactless readers, hence in some cases short delay (~10-15 microseconds) should added between 
    MiFare operations. This will allow the card to finish its flow and return back to Ready state.
```



## NFC APDU Exchange

** APDU Exchange Interface: **
| Return Value   | Name   | Parameters   | Description    |
|  -------- | -------- | -------- | -------- |
|  |
| [ResponseCodes] | NFC_APDU_Exchange   | [apduTxData] *txData   | Data transive over APDU protocol.    |
| [apduRxData] *rxData    |




### APDU Exchange Flow

![APDU_Flow.jpg](.//APDU_Flow.jpg)




## NFC Felica Polling

** Felica Exchange Interface: **
| Return Value   | Name   | Parameters   | Description    |
|  -------- | -------- | -------- | -------- |
| [ResponseCodes] | NFC_Felica_Polling   | unsigned int pollTimeout   | FeliCa Polling request.    |
| [FeliCa Polling Parameters] *inData    |
| [FeliCa Polling Result] *outData    |





## NFC Felica Exchange

** Felica Exchange Interface: **
| Return Value   | Name   | Parameters   | Description    |
|  -------- | -------- | -------- | -------- |
| [ResponseCodes] | NFC_Felica_Exchange   | [FeliCa TxData] *txData   | Data transive over Felica protocol.    |
| [FeliCa RxData] *rxData    |




### Felica Exchange Flow

![Felica_Flow.jpg](.//Felica_Flow.jpg)




## Target Mode

** Target Mode Interface: **
| Return Value   | Name   | Parameters   | Description    |
|  -------- | -------- | -------- | -------- |
| [ResponseCodes] | NFC_Target_Action   | [NFC_TARGET_ACTION] action   | Processing actions in NFC target mode.    |
| usint timeout    |
| [rawData] *rd_inData    |
| [rawData] *rd_outData    |
| [ResponseCodes] | NFC_Create_Ndef   | [NFC_NDEF_TYPES] type   | Generate NDEF message based on type and inData.    |
| [rawData] *rd_inData    |
| [rawData] *rd_outData    |





## VFI1 PROTOCOL INTERFACE




### VFI1 Request Packet Format


| Byte 0-3   | Byte 4   | Byte 5   | Byte 6   | Byte 7   | Byte 8-15   | Byte 16   | Byte 17   | Byte 18+n-1   | Byte 18+n   | Byte 18+n+1    |
|  -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
|  |
| Header   | Command ID   | Command ID   | Packet Length (MSB)   | Packet Length (LSB)   | Application Name   | Data Length (MSB)   | Data Length (LSB)   | Data   | CRC (MSB)   | CRC (LSB    |
| 'VFI1'   | [VFI1 Command Types] | [VFI1 Command Types] | var.   | var.   | Name of embedded application to execute   | var.   | var.   | var.   | CRC Calculation    |




### VFI1 Response Packet Format


| Byte 0-3   | Byte 4   | Byte 5   | Byte 6   | Byte 7   | Byte 8-15   | Byte 16   | Byte 17   | Byte 18+n-1   | Byte 18+n   | Byte 18+n+1    |
|  -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
|  |
| Header   | Command ID   | Response Code   | Packet Length (MSB)   | Packet Length (LSB)   | Application Name   | Data Length (MSB)   | Data Length (LSB)   | Data   | CRC (MSB)   | CRC (LSB)    |
| 'VFI1'   | [VFI1 Command Types] | [ResponseCodes] | var.   | var.   | Name of embedded application to execute   | var.   | var.   | var.   | CRC Calculation    |




### VFI1 CRC


| Width   | 16-bits    |
|  -------- | -------- |
| Polynomial   | X16+X12+X5+1    |
| Initial Value   | 0xFFFF    |




### VFI1 Command Types


| Command Name   | Cmd   | Sub-Cmd   | Description    |
|  -------- | -------- | -------- | -------- |
| PING   | 0x01   | 0x00   | This command sent from Host application to verify that the ADK-NFC layers are available and 'alive'.    |
| PT OPEN   | 0x31   | 0x01   | Initializes L1 driver.    |
| PT CLOSE   | 0x31   | 0x02   | Releases L1 driver.    |
| PT FIELD ON   | 0x31   | 0x03   | Turns RF field on.    |
| PT FIELD OFF   | 0x31   | 0x04   | Turns RF field off.    |
| PT POLL   | 0x31   | 0x05   | Open the field and executes polling loop to poll time (in mSec). The driver will be configured according to technology, card type, collision and activation parameters.    |
| PT CANCEL POLL   | 0x31   | 0x06   | Cancels polling process.    |
| PT ACTIVATION   | 0x31   | 0x07   | Activates (selects) the card found during polling.    |
| PT TX-RX   | 0x31   | 0x08   | Data transive.    |
| PT SET F BAUD RATE   | 0x31   | 0x09   | Changing baud rate for 'F' technology.    |
| MIFARE AUTHENTICATION   | 0x31   | 0x0A   | Authenticates block ‘x’ with key ‘y’.    |
| MIFARE READ   | 0x31   | 0x0B   | Reads the ‘y’ bytes of data from block ‘x’.    |
| MIFARE WRITE   | 0x31   | 0x0C   | Writes ‘y’ bytes of data to block ‘x’.    |
| APDU EXCHANGE   | 0x31   | 0x0E   | Data transive over APDU protocol.    |
| FELICA EXCHANGE   | 0x31   | 0x0F   | Data transive over Felica protocol.    |





## TAGS

Provides information on tags using over VFI1 PROTOCOL INTERFACE



### Polling Request TAGS


| Tag Name   | Tag   | Value Lenght   | Description    |
|  -------- | -------- | -------- | -------- |
| TECH_BITMAP_TAG   | 0xC0   | 0x02   | Bitmap of [Polling Technologies Bitmap] to poll    |
| TECH_TIMEOUT_TAG   | 0xC1   | 0x04   | Polling time in milliseconds. 0 mean infinite time.    |




### Polling Response TAGS


| Tag Name   | Tag   | Value Lenght   | Description    |
|  -------- | -------- | -------- | -------- |
| EMB_APP_TOTAL_NUM_OF_CARDS_TAG   | 0xC3   | 0x01   | Number of cards discovered in the field    |
| EMB_APP_TOTAL_NUM_OF_CARDS_A_TAG   | 0xC4   | 0x01   | Number of technology 'A' cards discovered in the field    |
| EMB_APP_TOTAL_NUM_OF_CARDS_B_TAG   | 0xC5   | 0x01   | Number of technology 'B' cards discovered in the field    |
| EMB_APP_TOTAL_NUM_OF_CARDS_F_TAG   | 0xC6   | 0x01   | Number of technology 'F' cards discovered in the field    |
| EMB_APP_CARD_TYPE_TAG   | 0xC7   | 0x01   | [NFC_CARD_TYPE] |
| EMB_APP_CARD_UID_TAG   | 0xC8   | Variable   | Card Identifier    |




### Activation Request TAGS


| Tag Name   | Tag   | Value Lenght   | Description    |
|  -------- | -------- | -------- | -------- |
| EMB_APP_CARD_TYPE_TAG   | 0xC7   | 0x01   | [NFC_CARD_TYPE] |




### Tx-Rx (send-Recieve) TAGS


| Tag Name   | Tag   | Value Lenght   | Description    |
|  -------- | -------- | -------- | -------- |
| EMB_APP_PT_TXRX_DATA_TAG   | 0xD2   | Variable   | Tag that handles both data to send and received data    |




### Mifare TAGS


| Tag Name   | Tag   | Value Lenght   | Description    |
|  -------- | -------- | -------- | -------- |
| EMB_APP_PT_MIFARE_BLOCK_NUM_TAG   | 0xE1   | 0x01   | Block number to authenticate, read from or write to    |
| EMB_APP_PT_MIFARE_KEY_TYPE_TAG   | 0xE2   | 0x01   | Mifare classic authentication key type    |
| EMB_APP_PT_MIFARE_KEY_TAG   | 0xE3   | 0x06   | Mifare classic authentication key    |
| EMB_APP_PT_MIFARE_START_BLOCK_TAG   | 0xE4   | 0x01   | Block number to start read from/ write to    |
| EMB_APP_PT_MIFARE_BLOCK_AMOUNT_TAG   | 0xE5   | 0x01   | Anount of blocks to read/write    |
| EMB_APP_PT_MIFARE_WRITE_DATA_TAG   | 0xE6   | Variable   | Data to write to the card    |
| EMB_APP_PT_MIFARE_READ_DATA_TAG   | 0xE7   | Variable   | Data that was read from the card    |




### APDU TAGS


| Tag Name   | Tag   | Value Lenght   | Description    |
|  -------- | -------- | -------- | -------- |
| EMB_APP_PT_APDU_CLASS_TAG   | 0xE8   | 0x01   | APDU Class    |
| EMB_APP_PT_APDU_INSTRA_TAG   | 0xE9   | 0x01   | APDU Instruction    |
| EMB_APP_PT_APDU_PARAM1_TAG   | 0xEA   | 0x01   | APDU Parameter 1    |
| EMB_APP_PT_APDU_PARAM2_TAG   | 0xEB   | 0x01   | APDU Parameter 1    |
| EMB_APP_PT_APDU_EXPECT_LEN_RES_TAG   | 0xEC   | 0x01   | APDU response expected size    |
| EMB_APP_PT_APDU_DATA_TAG   | 0xED   | Variable   | APDU Data    |
| EMB_APP_PT_APDU_SW1_TAG   | 0xEE   | 0x01   | APDU Status Word 1    |
| EMB_APP_PT_APDU_SW2_TAG   | 0xEF   | 0x01   | APDU Status Word 2    |




### Felica TAGS


| Tag Name   | Tag   | Value Lenght   | Description    |
|  -------- | -------- | -------- | -------- |
| EMB_APP_PT_FELICA_DATA_TAG   | 0xF0   | Variable   | Felica data    |




### Set F Baud Rate TAGS


| Tag Name   | Tag   | Value Lenght   | Description    |
|  -------- | -------- | -------- | -------- |
| EMB_APP_BAUD_TAG   | 0xC9   | 1   | [NFC_F_BAUD] |





# VAS WALLETS



## VAS Wallet Functional Interface



| Return Value   | Name   | Parameters   | Description    |
|  -------- | -------- | -------- | -------- |
| [VasStatus] | NFC_VAS_UpdateConfig   | [rawData] *appID - Application unique identifier.   | Configures the terminal with wallet specific parameters.    |
| [rawData] *jsonStreamIn - Set of parameters to configure ome or multiple wallets.    |
| [rawData] *jsonStreamOut - Not returns any data. RFU.    |
| [VasStatus] | NFC_Terminal_Config   | [rawData] *jsonStreamIn - [Terminal Configuration Parameters] | Configures the terminal with terminal parameters.    |
| [rawData] *jsonStreamOut - Not returns any data. RFU.    |
| [VasStatus] | NFC_VAS_ReadConfig   | [rawData] *appID - Application unique identifier.   | Reads the most updated wallets configuration.    |
| [rawData] *jsonStreamOut - most updated configuration for terminal and all wallets in json format.    |
| [VasStatus] | NFC_TERMINAL_ReadConfig   | [rawData] *appID - Application unique identifier.   | Reads the most updated terminal configuration.Static parameter will be returned in case appID is unknown or [NFC_VAS_PreLoad()](titusstubs_8cpp.md#function-nfc-vas-preload) issued without changing Termianl configuration.    |
| [rawData] *jsonStreamOut - most updated [Read Terminal Configuration Parameters] |
| [VasStatus] | NFC_VAS_Activate   | [rawData] *appID - Application unique identifier.   | Activates NFC interface, runs through wallet kernel flow and retrieves VAS data.    |
| [rawData] *jsonStreamIn - Set of dynamic parameters to be merged with configuration from data base.    |
| [rawData] *jsonStreamOut - VAS data received from the handset formatted as json.    |
| [VasStatus] | NFC_VAS_Cancel   | void   | Cancels technology discovery process.    |
| [VasStatus] | NFC_VAS_CancelConfig   | [rawData] *appID - Application unique identifier.   | Clears all the VAS configuration by application ID.    |
| [VasStatus] | NFC_VAS_PreLoad   | [rawData] *appID - Application unique identifier.   | Configures the terminal with wallet specific parameters. [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate) has to be called to get VAS data. Only single PreLoaded configuration is available.    |
| [rawData] *jsonStreamIn - Set of PreLoad parameters to be merged with configuration from data base.    |
| [rawData] *jsonStreamOut - Not returns any data. RFU.    |
| [VasStatus] | NFC_VAS_CancelPreLoad   | [rawData] *appID - Application unique identifier.   | Clear preloaded configuration by application ID and pulls latest static configuration from data base.    |
| [VasStatus] | NFC_VAS_Decrypt   | [rawData] *appID - Application unique identifier.   | Decrypts an encrypted VAS response.    |
| [rawData] *jsonStreamIn - The json in the same format of the Vas Data Response with the included encrypted message.    |
| [rawData] *jsonStreamOut - The json in the same format of the Vas Data Response with the included decrypted message.    |



## NFC VAS General Flow

![NFC_VAS_General_Flow.jpg](.//NFC_VAS_General_Flow.jpg)


```
1. VAS Initialization - as part of Application initialization process upon start up , VAS wallet framework should be initialized and configured.

    Following calls should be made:
    -   NFC_PT_Open() - opens CTLS/NFC RF interface.
    -   NFC_TERMINAL _Config() - configures terminal specific parameters (terminal capabilities) general for all wallets. 
        Some of the parameters may be used by one wallet and not used by other but they are general across all wallets.
    -   NFC_TERMINAL_ReadConfig() - reads Terminal configuration parameters. Mostly used to ensure that  NFC_TERMINAL _Config() worked fine.
    -   NFC_VAS_UpdateConfig() - configures wallet specific parameters based on the Wallet specification.
    -   NFC_VAS_ReadConfig() - reads Wallet configuration parameters. Mostly used to ensure that  NFC_VAS_UpdateConfig() worked fine.

2. VAS Transaction -  consists of 4 major steps:
    -   Technology Selection (RF Polling).
    -   Wallet selection and Authentication.
    -   Data exchange.
    -   Data Decryption (if needed).
    
3. Please note, there is a possibility to replace configuration parameters with dynamic values using the following:
    -   NFC_VAS_Preload() used to change Terminal and Wallet parameters and use them until NFC_VAS_PreLoad() or another NFC_VAS_Preload() called.
    -   jsonStreamIn parameeter in NFC_VAS_Activate() used to change Termianl and Wallet parameters for one (current) transaction only. 
        By the end of transaction all configuration parameters will be returned to what was configured by calling  NFC_TERMINAL _Config() and NFC_VAS_UpdateConfig().

4. In case ADK-NFC component used by ADK-TEC please refer to ADK-TEC documentation. 

5. NFC_VAS_UpdateConfig() can possibly handle configuration parameters for more than one wallet.
   Based on the implementation there is a possibility that one wallet was successfully configured while other failed, the return status will still be VAS_ERR_CONFIG or  VAS_FAIL.
   In order to avoid such situation it is recomended: 
   -    To configure each Wallet separetelly and verify the status code.
   -    To call NFC_VAS_ReadConfig() and validate that all wallets confugured successfully.
```



## Terminal Configuration Parameters




```
NOTE: Terminal configuration has a default set of parameter in case it will not configured by the user.
```




```
NOTE: As per today all supported wallets has 'A' or 'B' technology/modulation. Please note, Android based mobile phone supports 'F' modulation along with 'A' or 'B'. 
      Including of 'F' modulation along with 'A' or 'B' may cause ADK-NFC to respond with 'Collision' status. 
```




```
NOTE: Wallet/Dynamic/PreLoad configuration sets may vary based on the wallet specifications.
To get more information please refer to appropriate wallet design document.
```



| JSON Key   | M/O   | Ancestor   | Type  | Value   | Description    |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| "Terminal_Configuration"   | M   | N/A   | Object   | "Configuration_version"   | Keeps json objects used to configure the terminal.    |
| "Terminal"    |
| "Log"    |
| "Configuration_version"   | O   | "Terminal_Configuration"  | String   | "1.0"   | Current vesrion of configuration structure and format. Default: "1.0".    |
| "Terminal"   | O   | "Terminal_Configuration"  | Object   | "Terminal_Capabilities"   | Configuration parameters common accros all the wallets.    |
| "PollTech"    |
| "PollTime"    |
| "Terminal_Capabilities"   | O   | "Terminal"   | Object   | "Capabilities"   | Terminal capabilities parameters.    |
| "system"    |
| "UI"    |
| "CVM"    |
| "Check_Out"    |
| "Presigned_Auth"    |
| "Capabilities"   | O   | "Terminal_Capabilities"   | String   | "Payment&VAS"   | Terminal capable to perform both VAS and Payment transactions. Used as default.    |
| "Payment|VAS"   | Terminal capable to perform both Payment transactions if no VAS data received.    |
| "Payment"   | Terminal capable to perform Payment transactions only.    |
| "VAS"   | Terminal capable to perform both VAS transactions only.    |
| "system"   | O   | "Terminal_Capabilities"   | Boolean   | "Standalone"   | List of bit values configuring system capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "Semi_integrated"    |
| "Unattended"    |
| "Online"    |
| "Offline"    |
| "MMP"    |
| "Compression"    |
| "UI"   | O   | "Terminal_Capabilities"   | Boolean   | "Printer"   | List of bit values configuring UI capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "Printer_Graphics"    |
| "Display"    |
| "Images"    |
| "Audio"    |
| "Animation"    |
| "Video"    |
| "CVM"   | O   | "Terminal_Capabilities"   | Boolean   | "Online_PIN"   | List of bit values configuring CVM capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "CD_PIN"    |
| "Signature"    |
| "No_CVM"    |
| "Device_Generated_Code"    |
| "SP_Generated_Code"    |
| "ID_Capture"    |
| "Biometric"    |
| "Check_Out"   | O   | "Terminal_Capabilities"   | Boolean   | "Digital_Receipt"   | List of bit values configuring check out capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "Service_Issuance"    |
| "OTA_POS_Data"    |
| "Presigned_Auth"   | O   | "Terminal_Capabilities"   | Boolean   | Variable   | Activates pre-signed authentication option for slow/low power/low CPU devices. 0-Disabled, 1-Enabled. Default is 0.    |
| "PollTech"   | O   | "Terminal"   | String   | Variable   | Configuring terminal to poll for "ABF"/"AB"/"AF"/"BF"/"A"/"B"/"F" technologies. Default:"AB".    |
| "PollTime"   | O   | "Terminal"   | Integer   | Variable   | Polling time in miliseconds. Default: 10000.    |
| "Log"   | O   | "Terminal_Configuration"  | Object   | "Log_Level_Bit_Map"   | Prints debug messages to standard I/O.    |
| "Log_Level_Bit_Map"   | M   | "Log"   | Integer   | 1   | [LOG BIT MASK]. Default: 7.    |




## Read Terminal Configuration Parameters


| JSON Key   | M/O   | Ancestor   | Type   | Value   | Description    |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| "Format_Version"   | M   | N/A   | String   | Variable   | Format Version of the json response.    |
| "Terminal_Configuration"   | M   | N/A   | Object   | "Pre_Load"   | Returns json objects of the terminal configuration.    |
| "App_Id"    |
| "Terminal"    |
| "Source_List"    |
| "Log"    |
| "Pre_Load"   | C   | "Terminal_Configuration"   | String   | "true"   | Must be exist only if Read Terminal called with a pre configured Applocation ID.    |
| "App_Id"   | C   | "Terminal_Configuration"   | String   | Variable   | Must be exist only if Read Terminal called with a pre configured Applocation ID. Application Identifier used on pre load configuration command that issued before.    |
| "Source_List"   | C   | "Terminal_Configuration"   | Json Array   | multiple entries of "Source" Json Key   | Must be exist only if Source List was pre configured with preload command. Multiple sources are valid.    |
| "Source"   | M   | Entry in "Source_List" Array   | String   | Variable string   | At least one source must be exist. Value is a wallet name.    |
| "Terminal"   | M   | "Terminal_Configuration"   | Object   | "Terminal_Capabilities"   | Returns json objects of the terminal configuration.    |
| "PollTech"    |
| "PollTime"    |
| "Terminal_Capabilities"   | M   | "Terminal"   | Object   | "Capabilities"   | Terminal capabilities parameters.    |
| "system"    |
| "UI"    |
| "CVM"    |
| "Check_Out"    |
| "Presigned_Auth"    |
| "Capabilities"   | M   | "Terminal_Capabilities"   | String   | "Payment&VAS"   | Terminal capable to perform both VAS and Payment transactions. Used as default.    |
| "Payment|VAS"   | Terminal capable to perform both Payment transactions if no VAS data received.    |
| "Payment"   | Terminal capable to perform Payment transactions only.    |
| "VAS"   | Terminal capable to perform both VAS transactions only.    |
| "system"   | M   | "Terminal_Capabilities"   | Boolean   | "Standalone"   | List of bit values configuring system capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "Semi_integrated"    |
| "Unattended"    |
| "Online"    |
| "Offline"    |
| "MMP"    |
| "Compression"    |
| "UI"   | M   | "Terminal_Capabilities"   | Boolean   | "Printer"   | List of bit values configuring UI capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "Printer_Graphics"    |
| "Display"    |
| "Images"    |
| "Audio"    |
| "Animation"    |
| "Video"    |
| "CVM"   | M   | "Terminal_Capabilities"   | Boolean   | "Online_PIN"   | List of bit values configuring CVM capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "CD_PIN"    |
| "Signature"    |
| "No_CVM"    |
| "Device_Generated_Code"    |
| "SP_Generated_Code"    |
| "ID_Capture"    |
| "Biometric"    |
| "Check_Out"   | M   | "Terminal_Capabilities"   | Boolean   | "Digital_Receipt"   | List of bit values configuring check out capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "Service_Issuance"    |
| "OTA_POS_Data"    |
| "Presigned_Auth"   | M   | "Terminal_Capabilities"   | Boolean   | Variable   | Activates pre-signed authentication option for slow/low power/low CPU devices. 0-Disabled, 1-Enabled. Default is 0.    |
| "PollTech"   | M   | "Terminal"   | String   | Variable   | "ABF"/"AB"/"AF"/"BF"/"A"/"B"/"F" polling technologies.    |
| "PollTime"   | M   | "Terminal"   | Integer   | Variable   | Polling time in miliseconds.    |
| "Log"   | O   | "Terminal_Configuration"   | Object   | "Source"   | Log Level setting.    |
| "Log_Level_Bit_Map"   | O   | "Log"   | Integer   | Variable   | [LOG BIT MASK]. Default: 7.    |




## Read Wallet Configuration Parameters


| JSON Key   | M/O   | Ancestor   | Type   | Value   | Description    |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| "Format_Version"   | M   | N/A   | String   | "1.0"   | Format Version of the json response.    |
| "App_Id"   | M   | N/A   | String   | Variable   | The Application Id .    |
| "VAS_Configuration"   | M   | N/A   | Json Array   | Variable   |  |
| Wallet Configuration json object   | O   | Entry of "VAS_Configuration" Array   | Json Object   | Please refer to Wallet Secific Documentation   | Specific Wallet Configuration.    |
| error json object   | O   | Entry of "VAS_Configuration" Array   | Json Object   | "Error_Msg"   | Information about an error, if accoured. Optional, will not be sent for each error.    |
| "Error_Code"     |
| "Error_Msg"   | O   | error json object   | String   | Variable error message   |  |
| "Error_Code"   | O   | error json object   | Integer   | Variable error code   |  |




## VAS Wallet PreLoad/Dynamic Configuration Parameters


| JSON Key   | M/O   | Ancestor   | Type   | Value   | Description    |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| [PreLoad/Dynamic jSON objects] | M   | N/A   | Object   | "Configuration_version"   | Keeps an optional json objects used by the terminal on the next transaction only.    |
| "Terminal"    |
| "Wallet"    |
| "Configuration_version"   | O   | [PreLoad/Dynamic jSON objects] | String   | "1.0"   | Current vesrion of configuration structure and format. Default value is "1.0"    |
| "Terminal"   | O   | [PreLoad/Dynamic jSON objects] | Object   | "PollTech"   | Keeps an optional json objects configuring Terminal parameters.    |
| "PollTime"    |
| "Terminal_Capabilities"    |
| "Source_List"    |
| "PollTech"   | O   | "Terminal"   | String   | Variable   | Polling technology.    |
| "PollTime"   | O   | "Terminal"   | Integer   | Variable   | Polling time.    |
| "Source_List"   | O   | "Terminal"   | Json Array   | multiple entries of "Source" Json Key   | List of sources(wallets)    |
| "Source"   | O   | Entry in "Source_List" Array   | String   | Variable   | Name of the source(wallet).    |
| "Terminal_Capabilities"   | O   | "Terminal"   | Object   | "Capabilities"   | Terminal capabilities parameters.    |
| "system"    |
| "UI"    |
| "CVM"    |
| "Check_Out"    |
| "Presigned_Auth"    |
| "Capabilities"   | O   | "Terminal_Capabilities"   | String   | "Payment&VAS"   | Terminal capable to perform both VAS and Payment transactions. Used as default.    |
| "Payment|VAS"   | Terminal capable to perform both Payment transactions if no VAS data received.    |
| "Payment"   | Terminal capable to perform Payment transactions only.    |
| "VAS"   | Terminal capable to perform both VAS transactions only.    |
| "system"   | O   | "Terminal_Capabilities"   | Boolean   | "Standalone"   | List of bit values configuring system capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "Semi_integrated"    |
| "Unattended"    |
| "Online"    |
| "Offline"    |
| "MMP"    |
| "Compression"    |
| "UI"   | O   | "Terminal_Capabilities"   | Boolean   | "Printer"   | List of bit values configuring UI capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "Printer_Graphics"    |
| "Display"    |
| "Images"    |
| "Audio"    |
| "Animation"    |
| "Video"    |
| "CVM"   | O   | "Terminal_Capabilities"   | Boolean   | "Online_PIN"   | List of bit values configuring CVM capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "CD_PIN"    |
| "Signature"    |
| "No_CVM"    |
| "Device_Generated_Code"    |
| "SP_Generated_Code"    |
| "ID_Capture"    |
| "Biometric"    |
| "Check_Out"   | O   | "Terminal_Capabilities"   | Boolean   | "Digital_Receipt"   | List of bit values configuring check out capabilities, 0-Disabled, 1-Enabled. Default for all parameters: "0".    |
| "Service_Issuance"    |
| "OTA_POS_Data"    |
| "Presigned_Auth"   | O   | "Terminal_Capabilities"   | Boolean   | Variable   | Activates pre-signed authentication option for slow/low power/low CPU devices. 0-Disabled, 1-Enabled. Default is 0.    |
| "Wallet"   | O   | [PreLoad/Dynamic jSON objects] | Object   | N/A   | Wallet specific data, please refer to Wallet kernel specification.    |




### PreLoad/Dynamic jSON objects



```
"Preload_Configuration" - for Pre-Load configuration parameters.
"Dynamic_Configuration" - for Dynamic configuration parameters.
```



## Select OSE response




* When the terminal in "Payment" only mode "Select OSE" command will be sent to get the information from the handset.
* If successful response recived, the data will be returned in the format below.


| JSON Key   | M/O   | Ancestor   | Value   | Description    |
|  -------- | -------- | -------- | -------- | -------- |
| "Ose_Response"   | M   | N/A   | "Mobile_App_Version"   | Returns "Select OSE" response parameters.    |
| "Source"    |
| "Mobile_App_Version"   | O   | "Ose_Response"   | Variable   | Protocol version supported by mobile.    |
| "Source"   | O   | "Ose_Response"   | Variable   | Wallet name.    |




## List Of Known JSON Objects


| JSON Key   | Description    |
|  -------- | -------- |
| "Terminal_Configuration"   | Object collecting Terminal configuration parameters.    |
| "Configuration_Version"   | Version of configuration structure.    |
| "Terminal"   | Object collecting Terminal specific configuration parameters.    |
| "Log"   | Open/Close debug messages.    |
| "Log_Level_Bit_Map"   | Filter for debug messages.    |
| "Terminal_Capabilities"   | Terminal capabilities.    |
| "PollTech"   | "ABF"/"AB"/"AF"/"BF"/"A"/"B"/"F" polling technologies. Default: "AB"    |
| "PollTime"   | Polling time in miliseconds. Default: 10000    |
| "Capabilities"   | VAS and/or Payment capabilities.    |
| "System"   | System terminal capabilities.    |
| "UI"   | UI terminal capabilities.    |
| "CheckOut"   | CheckOut terminal capabilities.    |
| "CVM"   | Consumer Verification Methods.    |
| "Error_Msg"   | Used for debug purposes    |
| "Error_Code"   | Used for debug purposes   
 |



## VAS Wallet Flowcharts


### NFC_Acitvate flowchart

![NFC_Activate_Flow.jpg](.//NFC_Activate_Flow.jpg)

![NFC_Activate_Flow_Ends.jpg](.//NFC_Activate_Flow_Ends.jpg)



### NFC_TERMINAL_Config flowchart

![NFC_TERMINAL_Config.jpg](.//NFC_TERMINAL_Config.jpg)



### NFC_VAS_UpdateConfig flowchart

![NFC_VAS_UpdateConfig.jpg](.//NFC_VAS_UpdateConfig.jpg)



### Preload configuration flowchart

![Preload_configuration.jpg](.//Preload_configuration.jpg)



### NFC_VAS_Activate  with Dynamic Configuration flowchart

![DoVAS_with_Dynamic_Configuration.jpg](.//DoVAS_with_Dynamic_Configuration.jpg)



### Update and PreLoad configuration flow.



```
Call NFC_Terminal_Config(TerminalConfigParameters)          ---> Working Configuration1 =   TerminalConfigParameters
Call NFC_VAS_UpdateConfig(appID=1, VASConfigParameters-1)   ---> Working Configuration2 =   Working Configuration1 + VASConfigParameters-1
Call NFC_VAS_PreLoad(appID=1, PreLoadConfigParameters)      ---> Working Configuration3 =   Working Configuration2 merged with PreLoadConfigParameters
Call NFC_VAS_UpdateConfig(appID=1, VASConfigParameters-2)   ---> Working Configuration4 =   Working Configuration3 (since PreLoad configuration command locks the config parameters)
Call NFC_VAS_CancelPreLoad(appID=1)                         ---> Working Configuration5 =   TerminalConfigParameters + VASConfigParameters-2 (since CancelPreLoad command releases config parameters to latest configuration)

- NOTE: Working Configuration - is a configuration that used for NFC_VAS_Activate().
- NOTE: PreLoad configuration will merge its parameters with Termian land Static VAS parameters. It will be locked for certain Application ID until NFC_VAS_CancelPreLoad() is called.
        Any changes in Terminal or VAS configuration in between of NFC_VAS_PreLoad() and NFC_VAS_CancelPreLoad() will not affect Preloaded configuration image.```




# USER INTERFACE



## UI Callback prototypes




```
/*
*  NFC callback prototype
*
* (in ) id                  - Application ID
* (in ) callbackFunction    - Application callback function
*
*/
ResponseCodes       NFC_Set_Callback_Function(rawData* id, NfcCallbackFunction *callbackFunction );
```




```
/*
*  This function is responsible to parse the callback data and populate the callbackInfo structure
*
* (in ) data            - Data associated with callback BUZZER reason.
* (in ) dataSizeBytes   - Size of data buffer.
* (out) pCallbackBuzzer - Pointer to callbackBuzzer structure to be populated by this function
*
*/
ResponseCodes       CallbackParseData(unsigned char *data, size_t dataSizeBytes, callbackInfo *pCallbackInfo );
```




```
/*
*  NFC callback prototype
*
* (in ) data            - Data associated with callback reason. It should be fed into a
*                         CallbackParseData function to have the callbackInfo structure populated.
* (in ) dataSizeBytes   - Size of data buffer.
*
*/
typedef void (NfcCallbackFunction) (unsigned char *data, size_t dataSizeBytes);
```




## UI types definition



### UI Callback flags

[callbackFlags](structcallback_flags.md), this bit field tells what info is present in this callback Multiple info might be present in one callback 

```
typedef struct
{
    unsigned int     init           : 1;
    unsigned int     textPresent    : 1;
    unsigned int     ledsPresent    : 1;
    unsigned int     buzzerPresent  : 1;
} callbackFlags;
```



### Text

Text message to be displayed on the terminal screen. 

```
#define CALLBACK_MAX_TEXT_SIZE         (64)
typedef struct
{
    // Null terminated string
    char            text[CALLBACK_MAX_TEXT_SIZE];
}callbackText;
```



### LED

LED info, this bit field tells the state each LED should take: 1-> turn LED on, 0->Turn LED off, 2-> flash LED 

```
typedef struct
{
    unsigned int     led1           : 1;
    unsigned int     led2           : 1;
    unsigned int     led3           : 1;
    unsigned int     led4           : 1;
}callbackLeds;
```



### Buzzer

Buzzer info 

```
/*
* Buzzer frequencies used by callbackBuzzer
*/
typedef enum
{
    CALLBACK_BUZZER_FREQUENCY_LOW   = 0,
    CALLBACK_BUZZER_FREQUENCY_HIGH  = 1
} callbackBuzzerFrequency;


typedef struct
{
    // Frequency
    callbackBuzzerFrequency         frequency;

    // Time in milliseconds the buzzer should be ON
    unsigned int                    on_ms;

    // Time in milliseconds the buzzer should be OFF
    unsigned int                    of_ms;

    // Number of times the buzzer cycle(ON-OFF) should repeat
    unsigned int                    nTimes;
}callbackBuzzer;
```



### General Callback Info



```
typedef struct
{
    // Flags tells what info is present
    callbackFlags                   flags;

    // Text info
    callbackText                    text;

    // Leds info
    callbackLeds                    leds;

    // Buzzer info
    callbackBuzzer                  buzzer;
}callbackInfo;
```



### SDI Wallets Key Transfer



```
Wallet Key Transfare APIs have been introduced in order to support external Pinpad solution.
EPP - External Pinpad
CTP - Countertop
Step 1 - EPP has to be authenticated by CTP. This is done by validation of Random Number and other data fields encrypted with shared secret.
Step 2 - If the authentication process is completed successfully, CTP can pass the wallet key using SDI secure channel.

API:
NFC_VAS_Action(rawData* id, int action,rawData* inData, rawData* outBuff) is a function to be used to authenticate the sides and to transfer the keys.

Possible actions:
#define ACTION_STORE_WALLET_KEYS    3
#define ACTION_GET_WALLET_KEYS      4
#define ACTION_GET_TOKEN            5
#define ACTION_ENCRYPT_TOKEN        6

Flow:

CTP to EPP
    SDI CTP calls NFC_VAS_Action(ACTION_GET_TOKEN)
    NFC CTP generates random number (RN) and returns it to SDI CTP
    SDI CTP sends RN to SDI EPP
    SDI EPP calls NFC_VAS_Action(ACTION_ENCRYPT_TOKEN)
    NFC EPP add additional data to RN and encrypt it all

EPP to CTP
    SDI EPP received the encrypted token from NFC EPP
    SDI EPP passes the token to SDI CTP
    SDI CTP calls NFC_VAS_Action(ACTION_GET_WALLET_KEYS) and passes encrypted token to NFC CTP
    NFC CTP decrypts the token and validates RN and other data fields
    NFC CTP returns serialized key array to SDI CTP after successful validation

CTP to EPP
    SDI CTP transfers key array to SDI EPP
    SDI EPP calls NFC_VAS_Action(ACTION_STORE_WALLET_KEYS)
    NFC EPP stores wallet keys
FINISH```




# TYPES



## VasStatus



```
typedef enum
{
    VAS_OK =0,
    VAS_DO_PAY,                 // 0x01
    VAS_FAIL,                   // 0x02
    VAS_ERR_CTLS_DRIVER_CLOSE,  // 0x03
    VAS_CANCEL,                 // 0x04
    VAS_TIME_OUT,               // 0x05
    VAS_ERR_CONFIG,             // 0x06
    VAS_DUMMY_CALL,             // 0x07
    VAS_CANCEL_NOT_ALLOWED,     // 0x08
    VAS_CANCEL_IRRELEVANT,      // 0x09
    VAS_COMM_ERR,               // 0x0A
    VAS_INIT_ERROR,             // 0x0B
    VAS_DO_PAY_DECRYPT_REQ,     // 0x0C
    VAS_OK_DECRYPT_REQ          // 0x0D
}VasStatus;
```



## ResponseCodes



```
typedef enum
{
    EMB_APP_OK=0,
    EMB_APP_INCORRECT_HEADER,               // 0x01
    EMB_APP_UNKNOWN_COMMAND,                // 0x02
    EMB_APP_UNKNOWN_SUBCOMMAND,             // 0x03
    EMB_APP_COMMAND_NOT_SUPPORTED,          // 0x04
    EMB_APP_SUBCOMMAND_NOT_SUPPORTED,       // 0x05
    EMB_APP_CRC_ERROR,                      // 0x06
    EMB_APP_FAILED,                         // 0x07
    EMB_APP_TIMEOUT,                        // 0x08
    EMB_APP_UNKNOWN_APP_NAME,               // 0x09
    EMB_APP_PARAMETER_NOT_SUPPORTED,        // 0x0A
    EMB_APP_MULTI_CARDS,                    // 0x0D
    EMB_APP_START_PAYMENT,                  // 0x0E
    EMB_APP_COMM_ERROR,                     // 0x0F
    EMB_APP_INCORRECT_DATA,                 // 0x11
    EMB_APP_CANCEL_DONE,                    // 0x12
    EMB_APP_CANCEL_IRRELEVANT,              // 0x13
    EMB_APP_CANCEL_NOT_ALLOWED,             // 0x14
    EMB_APP_DISCOVERY_CANCELED,             // 0x15
    EMB_APP_UNSUPPORTED_CARD,               // 0x16
    EMB_APP_2ND_AUTHENTICATION_FAILED,      // 0x19
    EMB_APP_INCORRECT_LEN,                  // 0x1B
    EMB_APP_COMMAND_NOT_ALLOWED,            // 0x1D
    EMB_APP_MISSING_MANDATORY_DATA,         // 0x1E
    EMB_APP_APPLICATION_NOT_FOUND,          // 0X22
    EMB_APP_WALLET_NOT_EXIST,               // 0x24
    EMB_APP_NFCUTIL_ERROR,                  // 0x25
    EMB_APP_USER_ACTION_REQUIRED_UI,        // 0x26
    EMB_APP_VAS_DATA_NOT_ACTIVATED,         // 0x27
    EMB_APP_BAD_SYNTAX,                     // 0x28
    EMB_APP_INTERNAL_ERROR,                 // 0x29
    EMB_APP_CARD_NOT_FOUND,                 // 0x2A
    EMB_APP_CARD_ERROR,                     // 0x2B
    EMB_APP_L1_CARD_PROTOCOL_ERROR,         // 0x2C
    EMB_APP_L1_CARD_NOT_ACTIVE,             // 0x2D
    EMB_APP_DUMMY_FUNC_CALL                 // 0x2E
    EMB_APP_CALLBACK_SET_ERROR,             // 0x2F
    EMB_APP_INIT_ERROR,                     // 0x30
    EMB_APP_L1_DRIVER_CLOSED                // 0x31
}ResponseCodes;                                    
```



## CL_STATUS



```
typedef enum
{
    CL_STATUS_SUCCESS = 0x00,           //0
    CL_STATUS_CARD_ERROR,               //0x01
    CL_STATUS_NOT_SUPPORTED,            //0x02
    CL_STATUS_TIMEOUT,                  //0x03
    CL_STATUS_DATA_ERROR,               //0x04
    CL_STATUS_SIZE_ERROR,               //0x05
    CL_STATUS_INIT_ERROR,               //0x06
    CL_STATUS_IPC_ERROR,                //0x07
    CL_STATUS_GENERAL_ERROR,            //0x08
    CL_STATUS_PROT_ERROR,               //0x09
    CL_STATUS_INTERNAL_ERROR,           //0x0A
    CL_STATUS_NFC_INCOMPATABLE,         //0x0B
    CL_STATUS_NFC_INITILIZED_ALREADY    //0x0C
}CL_STATUS;
```



## Polling Technologies Bitmap



```
typedef enum                                   
{                                              
    NFC_COMM_POLL_PARAM_TECH_A      =   0x01,  
    NFC_COMM_POLL_PARAM_TECH_B      =   0x02,  
    NFC_COMM_POLL_PARAM_TECH_AB     =   0x03,  
    NFC_COMM_POLL_PARAM_TECH_F_DEP  =   0x04,  
    NFC_COMM_POLL_PARAM_TECH_FELICA =   0x08,  
}NFC_POLL_PARAM_TECH; 

NOTE: NFC_COMM_POLL_PARAM_TECH_F_DEP is not supported yet since it requires "NFC-Forum Digital Exchange Protocol" being implemented.```



## NFC Framework State



```
typedef enum
{
    IDLE = 1,
    BUSY = 2,
}FrameworkState;
```



## rawData

Note: The user will allocate and free the memory. 

```
typedef struct             
{                          
    byte*   buffer;        
    usint   bufferLen;     
    usint   bufferMaxSize; 
}rawData;                  
```



## Polling time definition



```
Minimum Polling time - 0 (one polling cycle)
Maximum Polling time - 0xFFFFFFFF (infinite)
Polling time units - milliseconds                 
```



## pollReq



```
typedef struct                     
{                                  
    usint           tech_bitmap;   
    ulint           poll_timeout;  
    buffData        customData;  
    bool            turnDutyCycleOn;    
}pollReq;                          
```



## pollRes

The use will free the memory by calling [NFC_Free_Poll_Data()](titusstubs_8cpp.md#function-nfc-free-poll-data). 

```
typedef struct                                 
{                                              
    int             m_foundTargetsTotalCount;  
    int             m_foundTargetsA;           
    int             m_foundTargetsB;           
    int             m_foundTargetsF;           
    cardInfo*       cards_info_arr;                
    buffData        custom_poll_result;        
}pollRes;                                      
```



## pollResFull

The use will free the memory by calling [NFC_Free_Poll_Data()](titusstubs_8cpp.md#function-nfc-free-poll-data). 

```
typedef struct _pollResFull
{
    unsigned int    m_foundTargetsTotalCount;
    unsigned int    m_foundTargetsA;
    unsigned int    m_foundTargetsB;
    unsigned int    m_foundTargetsF;
    cardInfoFull    *cards_info_arr;
    rawData         custom_poll_result;
}pollResFull;                                      
```



## pollReq



```
typedef struct _pollABFParams
{
    unsigned int        tech_bitmap;
    unsigned int        poll_timeout;
    rawData             customData;
    bool                turnDutyCycleOn;
    unsigned char       systemCode[2];
    unsigned char       requestCode;
    unsigned char       TimeSlot;
    unsigned int        reciveTimeOUt;
}pollABFParams;                        
```



## pollResFull

The use will free the memory by calling [NFC_Free_Poll_Data()](titusstubs_8cpp.md#function-nfc-free-poll-data). 

```
typedef struct _pollABFRes
{
    pollResFull         abresponse;
    felicaPollingOutput felicaResponse;
}pollABFRes;                                     
```



## Card Information


| Card Type   | Information   | Length (bytes)    |
|  -------- | -------- | -------- |
| A   | Unique Identifier   | 4 or 7    |
| B   | Pseudo-Unique Identifier   | 4    |
| Application Data   | 4    |
| Protocol Info   | 3 or 4    |
| F/Felica   | Communication Status   | 1    |
| Info data lenght(HEX)   | 1    |
| Response Code   | 1    |
| NFCID2 or IDm   | 8    |
| PMm   | 8    |




## cardInfo



```
typedef struct _cardInfo
{
    rawData             card_info;
    NFC_CARD_TYPE       cardType;

}cardInfo;
```



## cardInfoFull



```
typedef struct _cardInfoFull
{
    byte                m_modulation;       // Modulation 'A', 'B' or 'F'
    int                 m_cardTypesFull;    // Bitmap representing subtype of Modulation
    byte                m_SAK;              // Value of SAK
    byte                ATQ[2];             // Value of ATQ
    rawData             mrd_UID;            // Unique ID of the card
    rawData             mrd_RFU;
}cardInfoFull;
```

 Reference: [m_modulation][m_cardTypesFull]



## NFC_CARD_TYPE



```
typedef enum                                                           
{                                                                      
    I_ISO14443A                 = 1,                                                   
    I_JEWEL                     = 2,                                                       
    I_ISO14443B                 = 3,                                                   
    I_ISO14443BI                = 4, // pre-ISO14443B aka ISO/IEC 14443 B' or Type B' 
    I_ISO14443B2SR              = 5, // ISO14443-2B ST SRx                          
    I_ISO14443B2CT              = 6, // ISO14443-2B ASK CTx                         
    I_DEP                       = 7,                                                         
    I_FELICA                    = 8,                                                      
    I_ISO14443A_MIFARE_MINI     = 9,                                       
    I_ISO14443A_MIFARE_1K       = 10,                                        
    I_ISO14443A_MIFARE_4K       = 11,                                        
    I_ISO14443A_MIFARE_DES      = 12,                                       
    I_ISO14443A_MIFARE_PLUS     = 13,                                      
    I_ISO14443A_MIFARE_UL       = 14,                                        
    I_ISO14443A_MIFARE_UL_C     = 15,                                      
    I_UNKNOWN_CARD_TYPE         = 16,
    I_ISO14443A_APDU_MIFARE_1K  = 17,
    I_NFC_TYPE_3_TAG            = 18
}NFC_CARD_TYPE;                                                         
```



## m_modulation



```
    I_ISO14443A                 = 1,                                                   
    I_JEWEL                     = 2,                                                       
    I_ISO14443B                 = 3,                                                   
    I_ISO14443BI                = 4,
    I_ISO14443B2SR              = 5,                        
    I_ISO14443B2CT              = 6,                       
    I_DEP                       = 7,                                                         
    I_FELICA                    = 8                                                        
```




## m_cardTypesFull



```
#define UNKNOWN                         0x00000000
#define MIFARE_NO_DESFIRE               0x00000001
#define ULTRALIGHT                      0x00000002
#define MINI                            0x00000004
#define CLASSIC_1K                      0x00000008
#define CLASSIC_4K                      0x00000010
#define DESFIRE_CL1                     0x00000020
#define DESFIRE_CL2                     0x00000040
#define PLUS_2K_SL_1                    0x00000080
#define PLUS_4K_SL_1                    0x00000100
#define PLUS_2K_SL_2                    0x00000200
#define PLUS_4K_SL_2                    0x00000400
#define PLUS_2K_SL_3                    0x00000800
#define PLUS_4K_SL_3                    0x00001000
#define TNP3xxx                         0x00002000
#define SMART_MX_1K_EMULATION           0x00004000
#define SMART_MX_4K_EMULATION           0x00008000
#define SMART_MX                        0x00010000
#define APDU_COMPLIANT                  0x00020000
#define NFC_COMPLIANT                   0x00040000
#define ULTRALIGHT_C                    0x00080000                                                        
```




## I_MIFARE_CARD_TYPE



```
typedef enum                   
{                              
    I_MIFARE_TYPE_CLASSIC,      //0     
    I_MIFARE_TYPE_ULTRALIGHT,   //0x01
    I_MIFARE_TYPE_ULTRALIGHT_C  //0x02
}I_MIFARE_CARD_TYPE;           
```



## MIFARE_KEY_TYPE



```
typedef enum           
{                      
    MIFARE_KEY_TYPE_A, 
    MIFARE_KEY_TYPE_B, 
}MIFARE_KEY_TYPE;      
```



## apduTxData



```
typedef struct                         
{                                      
    unsigned int clas;                 
    unsigned int instruction;          
    unsigned int param1;               
    unsigned int param2;               
    unsigned int expectedResponseLen;  
    rawData txData;                    
}apduTxData;                           
```



## apduRxData



```
typedef struct                 
{                              
    unsigned int        sw1;   
    unsigned int        sw2;   
    rawData             rxData;
}apduRxData;                   
```



## FeliCa TxData



```
typedef struct
{
     usint     timeOut; 
     rawData txData;
}felicaTxData;

timeOut - in milliseconds, response waiting time (how long to wait for response after sending data).
NOTE: 'timeout' field is maximum 5 seconds value
```



## FeliCa Polling Parameters



```
typedef struct
{
    unsigned int    reciveTimeOUt;
    unsigned char   systemCode[2];
    unsigned char       requestCode;
    unsigned char       TimeSlot;
}felicaPolling;
```



```
NOTE: The values for VOS2 and VOS are different since it calculated in different units, please use the values below.
```



```
reciveTimeOUt values for VOS2 (in clock cycles):
48912
65296
81680
98064
114448
130832
147216
163600
179984
196368
212752
229136
245520
261904
278288
294672
```



```
reciveTimeOUt values for VOS (in milliseconds):
305
607
1211
2419
4836
9669
19335
38667
77331
154660
309317 
618631   
1237260  
2474518  
4949034
```



## FeliCa Polling Result



```
typedef struct{
    unsigned char UID[8];
    unsigned char pad[8];
    unsigned char sysCode[2];
}felicaPollingOutput;
```



## FeliCa RxData



```
typedef struct
{
     rawData rxData;
}felicaRxData;
```



## CONNECTION_TYPE



```
typedef enum
{
    CL_TYPE_CLIENT_SERVER =0,
    CL_TYPE_FUNCTION
}CONNECTION_TYPE;

NOTE:  CL_TYPE_CLIENT_SERVER is not supported on Verix based platforms.
```



## NFC_F_BAUD



```
typedef enum
{
    INF_BAUD212,    //0
    INF_BAUD424     //0x01
}NFC_F_BAUD;
```



## NFC_BAUD_RATE



```
typedef enum
{
    BAUD_RATE_106,
    BAUD_RATE_212,
    BAUD_RATE_424,
    BAUD_RATE_848
}NFC_BAUD_RATE;
```



## NFC_TARGET_ACTION



```
typedef enum {
  TARGET_MODE_START,
  TARGET_MODE_STOP,
  TARGET_NFC_SEND,
  TARGET_NFC_RECEIVE,
  TARGET_MODE_SUPPORTED
} NFC_TARGET_ACTION;
```



## NFC_NDEF_TYPES



```
typedef enum {
    NDEF_URI
}NFC_NDEF_TYPES;
```



## LOG BIT MASK



```
LOG_ERROR_MASK          1
LOG_WARNING_MASK        2
LOG_INFO_MASK           4
LOG_DEBUG_MASK          8
LOG_PERFORMANCE_MASK    16 

Examples: 
 - 24 should be used for LOG_DEBUG_MASK and LOG_PERFORMANCE_MASK in the same time.
 - 31 should be used for all logs options.
```



# MEMORY ALLOCATION



```
- 'rawData' type requires memory allocation and free by the user.
- 'pollRes' type requires memory free by the user by calling NFC_Free_Poll_Data().
- Maximum data size handled by ADK-NFC framework is 10K bytes.
```



# EXAMPLES

Provides different examples on how ADK-NFC solution interfaces with User Application



## How to initiate polling - functional interface



```
- Call NFC_Client_Init(CL_TYPE_FUNCTION) to initialize direct/functional interface.
- Call NFC_PT_Open() to open L1 driver.
- Call NFC_PT_FieldOn() to open RF field.
- Call NFC_PT_Polling() to initiate polling.
- Tap Card on the terminal surface.
```



## How to initiate polling - serial interface



```
- Call NFC_Client_Init(CL_TYPE_CLIENT_SERVER) to initialize serial interface.
- Call NFC_PT_Open() to open L1 driver.
- Call NFC_PT_FieldOn() to open RF field.
- Call NFC_PT_Polling() to initiate polling.
- Tap Card on the terminal surface.
```



# KNOWN ISSUES



```
- NFC_PT_Activation() parameter: rawData *rd_activationData is ignored in VOS since L1 driver doesn't support it and VOS2 implementation alligned to it. Jira ticket:VERTEX-1087
- NFC_VAS_Continue() not supported, use NFC_VAS_Activate() instead.
```



# HISTORY


| Version   | Date   | Author   | Description of changes    |
|  -------- | -------- | -------- | -------- |
| 1.0.1   | 04/21/2016   | Evgeny S.   | Initial version    |
| 1.0.4   | 04/15/2016   | Evgeny S.   | Added Flow charts, Minor fixes    |
| 1.0.5   | 04/27/2016   | Evgeny S.   | Added "Documentation and Links" section.    |
| Removed PreLoadConfig() since it is not supported.    |
| Removed NFC_Continue() since it is not supported.    |
| Removed [NFC_TERMINAL_ReadConfig()](titusstubs_8cpp.md#function-nfc-terminal-readconfig) since it is not supported.    |
| List of return codes in VasStatus type was changed.    |
| Added explanation to [NFC_VAS_UpdateConfig()](titusstubs_8cpp.md#function-nfc-vas-updateconfig) and NFC_TERMINAL_Config().    |
| Added notes to '[rawData](structraw_data.md)' and 'pollRes' types.    |
| Added 'Memory allocation' section.    |
| 1.0.7   | 05/06/2016   | Evgeny S.   | Added [NFC_VAS_PreLoad()](titusstubs_8cpp.md#function-nfc-vas-preload).    |
| Added NFC_VAS_Continue().    |
| 1.0.8   | 05/11/2016   | Evgeny S.   | Moved [NFC_Get_Version()](titusstubs_8cpp.md#function-nfc-get-version) to "General Interface" section.    |
| Added [NFC_Ping()](titusstubs_8cpp.md#function-nfc-ping) function.    |
| Added VAS_CANCEL_NOT_ALLOWED and VAS_CANCEL_IRRELEVANT to VasStatus.    |
| 1.0.9   | 05/20/2016   | Evgeny S.   | Changed [NFC_Felica_Exchange()](titusstubs_8cpp.md#function-nfc-felica-exchange) interface.    |
| 1.0.10   | 05/26/2016   | Evgeny S.   | Added VAS configuration flowcharts.    |
| Added [NFC_Felica_Polling()](titusstubs_8cpp.md#function-nfc-felica-polling) function.    |
| 1.0.12   | 06/03/2016   | Evgeny S.   | In NFC_TERMINAL_Config(), jsonStreamOut changed to RFU.    |
| Polling time calculation section added.    |
| CustomPollData changed to be Optional.    |
| PreLoad Configuration Parameters table added.    |
| Read Terminal Configuration Parameters table added.    |
| "Protocol_Version" changed to "Mobile_App_Version" in VAS Wallet Response.    |
| 1.0.13   | 06/08/2016   | Evgeny S.   | NFC_COMM_POLL_PARAM_TECH_F_DEP is not supported.    |
| [NFC_VAS_CancelPreLoad()](titusstubs_8cpp.md#function-nfc-vas-cancelpreload) added.    |
| "Update and PreLoad configuration flow" section added.    |
| Added description for [NFC_TERMINAL_ReadConfig()](titusstubs_8cpp.md#function-nfc-terminal-readconfig) |
| "Polling time definition" section added.    |
| "Polling time calculation" section removed    |
| 1.1.0   | 06/10/2016   | Evgeny S.   | "Source_List" and "Source" removed from "Read Terminal Configuration Parameters".    |
| "Status_Word" moved to be under "Services" object in "VAS Wallet Response Format".    |
| "Mobile_Token" removed from "VAS Wallet Response Format".    |
| "Mobile_Data" renamed to "VAS_Data" and put to be an optional.    |
| "Merchant_Name" added to "VAS Wallet Response Format".    |
| jsonStreamOut parameter not return data for [NFC_VAS_PreLoad()](titusstubs_8cpp.md#function-nfc-vas-preload) |
| [NFC_Ping()](titusstubs_8cpp.md#function-nfc-ping) interface is updated.    |
| 1.1.1   | 06/10/2016   | Evgeny S.   | pollTimeout parameters is functional in [NFC_Felica_Polling()](titusstubs_8cpp.md#function-nfc-felica-polling).    |
| List of values for reciveTimeOUt shown in [FeliCa Polling Parameters].    |
| 1.1.2   | 06/29/2016   | Evgeny S.   | Terminal Configuration Parameters table updated.    |
| Updated VAS configuration examples.    |
| Added "Log" configuration and LOG BIT MASK options.    |
| [Update and PreLoad configuration flow.] updated.    |
| [List Of Known JSON Objects] added.    |
| In [GENERAL INTERFACE] added clarification for [NFC_Get_Version()](titusstubs_8cpp.md#function-nfc-get-version) output.    |
| 1.1.3   | 07/08/2016   | Evgeny S.   | Document updated based on SQA feedback. Default values added.    |
| [Select OSE response] table added.    |
| 1.1.4   | 07/27/2016   | Evgeny S.   | "Configuration Version" and "Capabilities" objects changed to be mandatory.    |
| "AutoPay" object added to Termianl configuration.    |
| "APDU_Max_Len" object added to Termianl configuration.    |
| "Compression" option added to "system" object in Terminal Configuration.    |
| "Presigned_Auth" option added to "Terminal_Capabilities" object.    |
| In [NFC_VAS_UpdateConfig()](titusstubs_8cpp.md#function-nfc-vas-updateconfig) jsonStreamOut does not return any data. VERTEX-1086.    |
| 1.2.0   | 08/04/2016   | Evgeny S.   | Terminal Configuration (Set/Read) updated based on latest VWI changes.    |
| 1.2.1   | 08/16/2016   | Evgeny S.   | VERTEX-1140 fixed.    |
| VERTEX-1137 fixed.    |
| VERTEX-1059 fixed.    |
| VERTEX-1087 fixed.    |
| VAS_COMM_ERR added to [VasStatus].    |
| 1.2.2   | 09/06/2016   | Evgeny S.   | "Compression" type fixed.    |
| VERTEX-1206 fixed.    |
| VERTEX-1195 fixed.    |
| [VAS Wallet PreLoad/Dynamic Configuration Parameters] added.    |
| 1.2.3   | 09/12/2016   | Evgeny S.   | VERTEX-1277 fixed.    |
| 1.2.4   | 09/22/2016   | Evgeny S.   | VERTEX-1325 fixed.    |
| 1.3.0   | 10/14/2016   | Evgeny S.   | Added support for Verix.    |
| 1.3.1   | 10/26/2016   | Evgeny S.   | ADK4.3 RC3 readiness.    |
| 1.3.2   | 11/10/2016   | Evgeny S.   | ADK4.3 RC3.1 readiness.    |
| VERTEX-1339 fixed.    |
| 1.3.3   | 12/02/2016   | Evgeny S.   | Section "Examples" was removed.    |
| VERTEX-1552 fixed.    |
| VERTEX-1371 fixed. Added note to [NFC Mifare] |
| VERTEX-1376 fixed. Added note to [NFC Mifare] |
| VERTEX-1126 fixed. Added note to [FeliCa TxData] |
| 1.3.6   | 01/09/2017   | Evgeny S.   | VERTEX-1371 fixed. Default value of Autopay changed to '1'    |
| 1.3.7   | 01/26/2017   | Evgeny S.   | VERTEX-708 fixed. Response codes updated to add Init Error case.    |
| VERTEX-1681 fixed.    |
| x.x.x   | 03/08/2017   | Evgeny S.   | Note added to @subsec_adk_nfc_felica_TxData VERTEX-1684.    |
| x.x.x   | 03/10/2017   | Evgeny S.   | [NFC_VAS_Decrypt()](titusstubs_8cpp.md#function-nfc-vas-decrypt) API and corresponding Response codes introduced to cover CR012.    |
| x.x.x   | 06/01/2017   | Evgeny S.   | [Card Information] updated to explain polling Type B results.    |
| x.x.x   | 06/06/2017   | Evgeny S.   | [ResponseCodes] updated to include EMB_APP_L1_DRIVER_CLOSED.    |
| x.x.x   | 06/13/2017   | Evgeny S.   | [CONNECTION_TYPE] updated. Note added to fix VERTEX-1502.    |
| x.x.x   | 07/25/2017   | Evgeny S.   | Added [NFC VAS General Flow] |
| x.x.x   | 09/13/2017   | Evgeny S.   | Added I_ISO14443A_APDU_MIFARE_1K to [NFC_CARD_TYPE] |
| x.x.x   | 09/27/2017   | Evgeny S.   | Added note to [Terminal Configuration Parameters] |
| x.x.x   | 01/14/2018   | Evgeny S.   | Added [NFC_Mifare_Increment()](titusstubs_8cpp.md#function-nfc-mifare-increment), [NFC_Mifare_Decrement()](titusstubs_8cpp.md#function-nfc-mifare-decrement) and [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull).    |
| x.x.x   | 01/14/2018   | Evgeny S.   | Added CL_STATUS_NFC_INITILIZED_ALREADY CL Status.    |

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

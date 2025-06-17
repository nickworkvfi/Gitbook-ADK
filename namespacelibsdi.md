---
title: libsdi

---

# libsdi



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[libsdi::CardDetection](classlibsdi_1_1_card_detection.md)** <br>Interface for SDI Card Detection Interface, command class 23.  |
| class | **[libsdi::Dialog](classlibsdi_1_1_dialog.md)**  |
| class | **[libsdi::ManualEntry](classlibsdi_1_1_manual_entry.md)** <br>Interface for SDI command [MSR Card Data Entry] (21-02)  |
| struct | **[libsdi::MatchingRecord](structlibsdi_1_1_matching_record.md)**  |
| class | **[libsdi::PED](classlibsdi_1_1_p_e_d.md)**  |
| class | **[libsdi::SDI](classlibsdi_1_1_s_d_i.md)**  |
| class | **[libsdi::SdiBase](classlibsdi_1_1_sdi_base.md)**  |
| class | **[libsdi::SdiCmd](classlibsdi_1_1_sdi_cmd.md)** <br>Composition for TLV based SDI commands.  |
| class | **[libsdi::SdiCrypt](classlibsdi_1_1_sdi_crypt.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[SDI_SW12](namespacelibsdi.md#enum-sdi-sw12)** { SDI_SW12_NONE = 0, SDI_SW12_SUCCESS = 0x9000, SDI_SW12_TAG_ERROR = 0x6200, SDI_SW12_TAG_LENGTH_ERROR = 0x6300, SDI_SW12_EXEC_ERROR = 0x6400, SDI_SW12_CANCELED_BY_USER = 0x6405, SDI_SW12_BUSY = 0x640A, SDI_SW12_TIMEOUT_PIN_ENTRY = 0x640C, SDI_SW12_TIMEOUT_NO_MSR_DATA = 0x64F6, SDI_SW12_TIMEOUT_CARD_REMOVAL = 0x64F7, SDI_SW12_INTERCHAR_PIN_ENTRY = 0x64F8, SDI_SW12_COMMAND_NOT_ALLOWED = 0x64F9, SDI_SW12_MAIN_CONNECTION_USED = 0x64FA, SDI_SW12_INVALID_FILE_CONTENT = 0x64FB, SDI_SW12_FILE_ACCESS_ERROR = 0x64FC, SDI_SW12_LOGIC_ERROR = 0x64FD, SDI_SW12_SDI_PARAMETER_ERROR = 0x64FE, SDI_SW12_LUHN_CHECK_FAILED = 0x64FF, SDI_SW12_EXECUTION_ABORTED = 0x6500, SDI_SW12_EXECUTION_TIMEOUT = 0x6600, SDI_SW12_MESSAGE_LENGTH_ERROR = 0x6700, SDI_SW12_NO_SDI_PLUGIN_AVAILABLE = 0x6800, SDI_SW12_UNKNOWN_PLUGIN_ID = 0x6801, SDI_SW12_UNKNOWN_PLUGING_ID = 0x6801, SDI_SW12_INVALID_PLUGIN_RESPONSE = 0x6802, SDI_SW12_EPP_CONNECTION_ERROR = 0x6900, SDI_SW12_UNKNOWN_INS_BYTE = 0x6D00, SDI_SW12_UNKNOWN_CLA_BYTE = 0x6E00, SDI_SW12_CMAC_ERROR = 0x6FB0, SDI_SW12_CMAC_LENGTH_ERROR = 0x6FB1, SDI_SW12_CMAC_MISSING_ERROR = 0x6FB2, SDI_SW12_ENCRYPTION_ERROR = 0x6FB4, SDI_SW12_ENCRYPTION_LENGTH_ERROR = 0x6FB5, SDI_SW12_ENCRYPTION_MISSING_ERROR = 0x6FB6, SDI_SW12_DECRYPTION_ERROR = 0x6FB8, SDI_SW12_DECRYPTION_LENGTH_ERROR = 0x6FB9, SDI_SW12_DECRYPTION_MISSING_ERROR = 0x6FBA, SDI_SW12_EXCESSIVE_PIN_REQUESTS = 0x6FC0, SDI_SW12_LOW_BATTERY = 0x6FD0, SDI_SW12_NO_DUKPT_KEYS_LOADED = 0x6FE0, SDI_SW12_UNIT_TAMPERED = 0x6FF0, SDI_SW12_RECOVERY_MODE = 0x6FF1, SDI_SW12_PIN_BYPASSED = 0x9070, SDI_SW12_NO_MACTCH_FOR_CARD_VALIDATION = 0x9071, SDI_SW12_SMART_CARD_REMOVED = 0x9401, SDI_SW12_SMART_CARD_ERROR_TRM = 0x9402, SDI_SW12_SMART_CARD_ERROR = 0x9403, SDI_SW12_TWO_CARDS = 0x9404, SDI_SW12_SMART_CARD_ERR_INIT = 0x9405, SDI_SW12_SMART_CARD_ERR_PARAM = 0x9406, SDI_SW12_EMV_TLV_ERROR = 0x94F3, SDI_SW12_ERROR = 0x6400, SDI_SW12_TIMEOUT = 0x6600, SDI_SW12_NOT_ALLOWED = 0x64FD, SDI_SW12_PARAMETER_ERROR = 0x90E6} |
| enum| **[SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error)** { SDICLIENT_ERROR_NONE = 0, SDICLIENT_ERROR_COMMUNICATION = -1, SDICLIENT_ERROR_CONCURRENT_USE = -2, SDICLIENT_ERROR_CONNECT = -3, SDICLIENT_ERROR_OVERFLOW = -4, SDICLIENT_ERROR_PARAM = -5, SDICLIENT_ERROR_OTHER = -6, SDICLIENT_ERROR_NO_RECEIVE = -7, SDICLIENT_ERROR_NOT_SUPPORTED = -10, SDICLIENT_ERROR_NOT_ALLOWED = -11} |
| enum| **[SYSUploadType](namespacelibsdi.md#enum-sysuploadtype)** { SYS_UPLOAD_SOFTWARE_UPDATE, SYS_UPLOAD_CONFIG_WHITELIST, SYS_UPLOAD_CONFIG_SENSITIVE_TAGS, SYS_UPLOAD_CONFIG_CARD_RANGES, SYS_UPLOAD_INSTALL_CP_PACKAGE = 11, SYS_UPLOAD_EMV_CONFIGURATION} |

## Functions

|                | Name           |
| -------------- | -------------- |
| enum [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[getNfcClientError](namespacelibsdi.md#function-getnfcclienterror)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[getNfcSW12](namespacelibsdi.md#function-getnfcsw12)**() |
| CL_STATUS | **[NFC_Client_Init](namespacelibsdi.md#function-nfc-client-init)**(CONNECTION_TYPE type) |
| CL_STATUS | **[NFC_Client_Init_CheckVer](namespacelibsdi.md#function-nfc-client-init-checkver)**(CONNECTION_TYPE type, int maj, int min, int bld) |
| CL_STATUS | **[NFC_SerialOpen](namespacelibsdi.md#function-nfc-serialopen)**(void ) |
| CL_STATUS | **[NFC_SerialClose](namespacelibsdi.md#function-nfc-serialclose)**(void ) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Ping](namespacelibsdi.md#function-nfc-ping)**([rawData](structraw_data.md) * output) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Get_Version](namespacelibsdi.md#function-nfc-get-version)**([rawData](structraw_data.md) * output) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Config_Init](namespacelibsdi.md#function-nfc-config-init)**(void ) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Set_Callback_Function](namespacelibsdi.md#function-nfc-set-callback-function)**([rawData](structraw_data.md) * id, [NfcCallbackFunction](titusstubs_8cpp.md#typedef-nfccallbackfunction) * callbackFunction) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Callback_Test](namespacelibsdi.md#function-nfc-callback-test)**(void ) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Open](namespacelibsdi.md#function-nfc-pt-open)**() |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Close](namespacelibsdi.md#function-nfc-pt-close)**() |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_FieldOn](namespacelibsdi.md#function-nfc-pt-fieldon)**() |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_FieldOff](namespacelibsdi.md#function-nfc-pt-fieldoff)**() |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Polling](namespacelibsdi.md#function-nfc-pt-polling)**([pollReq](titusstubs_8cpp.md#typedef-pollreq) * inPollReq, [pollRes](titusstubs_8cpp.md#typedef-pollres) * outPollRes) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_PollingFull](namespacelibsdi.md#function-nfc-pt-pollingfull)**([pollReq](titusstubs_8cpp.md#typedef-pollreq) * inPollReq, [pollResFull](titusstubs_8cpp.md#typedef-pollresfull) * outPollRes) |
| void | **[NFC_Free_Poll_Data](namespacelibsdi.md#function-nfc-free-poll-data)**([pollRes](titusstubs_8cpp.md#typedef-pollres) * outPollRes) |
| void | **[NFC_Free_Poll_Data_Full](namespacelibsdi.md#function-nfc-free-poll-data-full)**([pollResFull](titusstubs_8cpp.md#typedef-pollresfull) * outPollRes) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Cancel_Polling](namespacelibsdi.md#function-nfc-pt-cancel-polling)**(void ) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Activation](namespacelibsdi.md#function-nfc-pt-activation)**([NFC_CARD_TYPE](titusstubs_8cpp.md#enum-nfc-card-type) cardtype, [rawData](structraw_data.md) * rd_activationData) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_FtechBaud](namespacelibsdi.md#function-nfc-pt-ftechbaud)**([NFC_F_BAUD](titusstubs_8cpp.md#enum-nfc-f-baud) baud) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_TxRx](namespacelibsdi.md#function-nfc-pt-txrx)**([NFC_CARD_TYPE](titusstubs_8cpp.md#enum-nfc-card-type) cardtype, [rawData](structraw_data.md) * inBuff, [rawData](structraw_data.md) * outBuff) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Authenticate](namespacelibsdi.md#function-nfc-mifare-authenticate)**(unsigned char blockNumber, [MIFARE_KEY_TYPE](titusstubs_8cpp.md#enum-mifare-key-type) keyType, [rawData](structraw_data.md) * Key) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Read](namespacelibsdi.md#function-nfc-mifare-read)**([I_MIFARE_CARD_TYPE](titusstubs_8cpp.md#enum-i-mifare-card-type) m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, [rawData](structraw_data.md) * out_buff) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Write](namespacelibsdi.md#function-nfc-mifare-write)**([I_MIFARE_CARD_TYPE](titusstubs_8cpp.md#enum-i-mifare-card-type) m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, [rawData](structraw_data.md) * in_buff) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Increment](namespacelibsdi.md#function-nfc-mifare-increment)**(unsigned int blockNum, int amount) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Decrement](namespacelibsdi.md#function-nfc-mifare-decrement)**(unsigned int blockNum, int amount) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Increment_Only](namespacelibsdi.md#function-nfc-mifare-increment-only)**(unsigned int blockNum, int amount) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Decrement_Only](namespacelibsdi.md#function-nfc-mifare-decrement-only)**(unsigned int blockNum, int amount) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Transfer](namespacelibsdi.md#function-nfc-mifare-transfer)**(unsigned int blockNum) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Restore](namespacelibsdi.md#function-nfc-mifare-restore)**(unsigned int blockNum) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Felica_Exchange](namespacelibsdi.md#function-nfc-felica-exchange)**([felicaTxData](structfelica_tx_data.md) * in_buff, [felicaRxData](structfelica_rx_data.md) * out_buff) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Felica_Polling](namespacelibsdi.md#function-nfc-felica-polling)**(unsigned int pollTimeout, [felicaPolling](structfelica_polling.md) * inData, [felicaPollingOutput](structfelica_polling_output.md) * outData) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_APDU_Exchange](namespacelibsdi.md#function-nfc-apdu-exchange)**([apduTxData](structapdu_tx_data.md) * txData, [apduRxData](structapdu_rx_data.md) * rxData) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_Terminal_Config](namespacelibsdi.md#function-nfc-terminal-config)**([rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_TERMINAL_ReadConfig](namespacelibsdi.md#function-nfc-terminal-readconfig)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_ReadConfig](namespacelibsdi.md#function-nfc-vas-readconfig)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_Activate](namespacelibsdi.md#function-nfc-vas-activate)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_Cancel](namespacelibsdi.md#function-nfc-vas-cancel)**(void ) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_UpdateConfig](namespacelibsdi.md#function-nfc-vas-updateconfig)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_CancelConfig](namespacelibsdi.md#function-nfc-vas-cancelconfig)**([rawData](structraw_data.md) * id) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_PreLoad](namespacelibsdi.md#function-nfc-vas-preload)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_CancelPreLoad](namespacelibsdi.md#function-nfc-vas-cancelpreload)**([rawData](structraw_data.md) * id) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_Decrypt](namespacelibsdi.md#function-nfc-vas-decrypt)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_Action](namespacelibsdi.md#function-nfc-vas-action)**([rawData](structraw_data.md) * id, int action, [rawData](structraw_data.md) * inData, [rawData](structraw_data.md) * outBuff) |

## Types Documentation

### enum SDI_SW12

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SDI_SW12_NONE | 0| no status word received, e.g. no connection   |
| SDI_SW12_SUCCESS | 0x9000| all okay   |
| SDI_SW12_TAG_ERROR | 0x6200| tag error   |
| SDI_SW12_TAG_LENGTH_ERROR | 0x6300| tag length error   |
| SDI_SW12_EXEC_ERROR | 0x6400| execution error   |
| SDI_SW12_CANCELED_BY_USER | 0x6405| canceled by user   |
| SDI_SW12_BUSY | 0x640A| SDI server is busy   |
| SDI_SW12_TIMEOUT_PIN_ENTRY | 0x640C| timeout during PIN entry   |
| SDI_SW12_TIMEOUT_NO_MSR_DATA | 0x64F6| MSR data not available Timeout reached (for UX devices only)   |
| SDI_SW12_TIMEOUT_CARD_REMOVAL | 0x64F7| mag. stripe reading on hybrid readers   |
| SDI_SW12_INTERCHAR_PIN_ENTRY | 0x64F8| inter-character timeout during PIN entry   |
| SDI_SW12_COMMAND_NOT_ALLOWED | 0x64F9| command not allowed   |
| SDI_SW12_MAIN_CONNECTION_USED | 0x64FA| main connection (protocol type B) already in use   |
| SDI_SW12_INVALID_FILE_CONTENT | 0x64FB| invalid file content   |
| SDI_SW12_FILE_ACCESS_ERROR | 0x64FC| file access error   |
| SDI_SW12_LOGIC_ERROR | 0x64FD| logic error, e.g. wrong command order   |
| SDI_SW12_SDI_PARAMETER_ERROR | 0x64FE| parameter error   |
| SDI_SW12_LUHN_CHECK_FAILED | 0x64FF| LUHN check of PAN failed.   |
| SDI_SW12_EXECUTION_ABORTED | 0x6500| execution aborted   |
| SDI_SW12_EXECUTION_TIMEOUT | 0x6600| execution timeout   |
| SDI_SW12_MESSAGE_LENGTH_ERROR | 0x6700| message length erro   |
| SDI_SW12_NO_SDI_PLUGIN_AVAILABLE | 0x6800| no SDI plugin available   |
| SDI_SW12_UNKNOWN_PLUGIN_ID | 0x6801| unknown plugin ID in the Instruction byte (INS)   |
| SDI_SW12_UNKNOWN_PLUGING_ID | 0x6801| typo, obsolete use SDI_SW12_UNKNOWN_PLUGIN_ID   |
| SDI_SW12_INVALID_PLUGIN_RESPONSE | 0x6802| invalid or no result data returned by the plugin   |
| SDI_SW12_EPP_CONNECTION_ERROR | 0x6900| EPP connection error.   |
| SDI_SW12_UNKNOWN_INS_BYTE | 0x6D00| unknown Instruction (INS)   |
| SDI_SW12_UNKNOWN_CLA_BYTE | 0x6E00| unknown Class (CLA)   |
| SDI_SW12_CMAC_ERROR | 0x6FB0| CMAC error.   |
| SDI_SW12_CMAC_LENGTH_ERROR | 0x6FB1| CMAC length error.   |
| SDI_SW12_CMAC_MISSING_ERROR | 0x6FB2| CMAC missing.   |
| SDI_SW12_ENCRYPTION_ERROR | 0x6FB4| encryption error   |
| SDI_SW12_ENCRYPTION_LENGTH_ERROR | 0x6FB5| encryption length error   |
| SDI_SW12_ENCRYPTION_MISSING_ERROR | 0x6FB6| encryption missing error   |
| SDI_SW12_DECRYPTION_ERROR | 0x6FB8| decryption error   |
| SDI_SW12_DECRYPTION_LENGTH_ERROR | 0x6FB9| decryption length error   |
| SDI_SW12_DECRYPTION_MISSING_ERROR | 0x6FBA| decryption mssing error   |
| SDI_SW12_EXCESSIVE_PIN_REQUESTS | 0x6FC0| excessive PIN requests   |
| SDI_SW12_LOW_BATTERY | 0x6FD0| low battery   |
| SDI_SW12_NO_DUKPT_KEYS_LOADED | 0x6FE0| no DUKPT keys loaded   |
| SDI_SW12_UNIT_TAMPERED | 0x6FF0| unit tampered   |
| SDI_SW12_RECOVERY_MODE | 0x6FF1| [SDI]() only allows Check For Update (20-1D) command. (Android only)   |
| SDI_SW12_PIN_BYPASSED | 0x9070| PIN bypassed.   |
| SDI_SW12_NO_MACTCH_FOR_CARD_VALIDATION | 0x9071| no match for card validation   |
| SDI_SW12_SMART_CARD_REMOVED | 0x9401| smart card removed = error caused by card holder   |
| SDI_SW12_SMART_CARD_ERROR_TRM | 0x9402| smart card error caused by terminal   |
| SDI_SW12_SMART_CARD_ERROR | 0x9403| smart card error caused by ICC   |
| SDI_SW12_TWO_CARDS | 0x9404| CTLS collision, multiple cards in NFC field.   |
| SDI_SW12_SMART_CARD_ERR_INIT | 0x9405| smart card error caused for initialization   |
| SDI_SW12_SMART_CARD_ERR_PARAM | 0x9406| smart card error caused passing invalid parameters   |
| SDI_SW12_EMV_TLV_ERROR | 0x94F3|   |
| SDI_SW12_ERROR | 0x6400|   |
| SDI_SW12_TIMEOUT | 0x6600|   |
| SDI_SW12_NOT_ALLOWED | 0x64FD|   |
| SDI_SW12_PARAMETER_ERROR | 0x90E6|   |




SDI Server Status Words 

 see [ADK-SDI Programmers Guide - Status Word Coding]


### enum SDICLIENT_ERROR

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SDICLIENT_ERROR_NONE | 0| no error on client side, error originates from server   |
| SDICLIENT_ERROR_COMMUNICATION | -1| read/write or protocol error   |
| SDICLIENT_ERROR_CONCURRENT_USE | -2| SDI connection used by other thread   |
| SDICLIENT_ERROR_CONNECT | -3| no connection to SDI server   |
| SDICLIENT_ERROR_OVERFLOW | -4| output buffer too small   |
| SDICLIENT_ERROR_PARAM | -5| function parameter wrong or NULL pointer not allowed   |
| SDICLIENT_ERROR_OTHER | -6| any other problem like thread creation, memory allocation, etc.   |
| SDICLIENT_ERROR_NO_RECEIVE | -7|  returned by [SDI_Send()](sdiprotocol_8h.md#function-sdi-send): command successfully sent, but response for this command is suppressed, therefore, no [SDI_Receive()](sdiprotocol_8h.md#function-sdi-receive) must be called afterwards  |
| SDICLIENT_ERROR_NOT_SUPPORTED | -10| command not supported by this library   |
| SDICLIENT_ERROR_NOT_ALLOWED | -11| command not allowed to be sent   |




Additional Error Code complementing the different component interfaces by client side errors such as inter-process communication problems, concurrent use, parameter error detected on client side, etc. This enumeration is based on libsdiprotocol'S [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md) and can be read with [SdiBase::getClientError()](classlibsdi_1_1_sdi_base.md#function-getclienterror) and [getNfcClientError()](namespacelibsdi.md#function-getnfcclienterror). 


### enum SYSUploadType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYS_UPLOAD_SOFTWARE_UPDATE | |  Software update  |
| SYS_UPLOAD_CONFIG_WHITELIST | |  Whitelist configuration: whitelist.json  |
| SYS_UPLOAD_CONFIG_SENSITIVE_TAGS | |  Sensitive tags configuration: sensitivetags.json  |
| SYS_UPLOAD_CONFIG_CARD_RANGES | |  Card ranges configuration: cardranges.json  |
| SYS_UPLOAD_INSTALL_CP_PACKAGE | 11|  Install commerce platform package  |
| SYS_UPLOAD_EMV_CONFIGURATION | |  EMV configuration package (uncompressed TAR file)  |




Types for sw/file upload command 



## Functions Documentation

### function getNfcClientError

```cpp
enum SDICLIENT_ERROR getNfcClientError()
```


Read client side error after NFC/VAS command invocation 


### function getNfcSW12

```cpp
enum SDI_SW12 getNfcSW12()
```


Read SDI Server status after NFC/VAS command invocation 


### function NFC_Client_Init

```cpp
CL_STATUS NFC_Client_Init(
    CONNECTION_TYPE type
)
```


**Parameters**: 

  * **type** CL_TYPE_FUNCTION 


**Return**: CL_STATUS CL_STATUS_NFC_INITILIZED_ALREADY for subsequent calls 

This is required to called once before any NFC/VAS is possible. Should be called with CL_TYPE_FUNCTION as client-server is not supported anymore When the [SDI](classlibsdi_1_1_s_d_i.md) server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication.


### function NFC_Client_Init_CheckVer

```cpp
CL_STATUS NFC_Client_Init_CheckVer(
    CONNECTION_TYPE type,
    int maj,
    int min,
    int bld
)
```


**Return**: CL_STATUS_NOT_SUPPORTED 

Not supported 


### function NFC_SerialOpen

```cpp
CL_STATUS NFC_SerialOpen(
    void 
)
```


**Return**: CL_STATUS_NOT_SUPPORTED 

Not supported 


### function NFC_SerialClose

```cpp
CL_STATUS NFC_SerialClose(
    void 
)
```


**Return**: CL_STATUS_NOT_SUPPORTED 

Not supported 


### function NFC_Ping

```cpp
ResponseCodes NFC_Ping(
    rawData * output
)
```


Return NFC Framework State of the NFC framework. 


### function NFC_Get_Version

```cpp
ResponseCodes NFC_Get_Version(
    rawData * output
)
```


**Parameters**: 

  * **output** data buffer for the version information 


**Return**: NFC result, EMB_APP_FAILED for other SW12, EMB_APP_COMM_ERROR for client side error 

Returns ADK-NFC build and kernels versions as JSON string Depending on return code [getNfcSW12()](namespacelibsdi.md#function-getnfcsw12) or [getNfcClientError()](namespacelibsdi.md#function-getnfcclienterror) might provide the error reason. 


### function NFC_Config_Init

```cpp
ResponseCodes NFC_Config_Init(
    void 
)
```


**Return**: EMB_APP_FAILED 

According NFC documentation: Initializes NFC Configuration. But this function does nothing and always returns error. 


### function NFC_Set_Callback_Function

```cpp
ResponseCodes NFC_Set_Callback_Function(
    rawData * id,
    NfcCallbackFunction * callbackFunction
)
```


**Return**: EMB_APP_COMMAND_NOT_SUPPORTED 

Set UI callback function handling text, status indicators (LEDs) and buzzer. So far, there is no client side implementation. 


### function NFC_Callback_Test

```cpp
ResponseCodes NFC_Callback_Test(
    void 
)
```


**Return**: EMB_APP_COMMAND_NOT_SUPPORTED 

Undocumented function, just included because part of NFC_Interface.h. 


### function NFC_PT_Open

```cpp
ResponseCodes NFC_PT_Open()
```


Initialise NFC L1 driver. When the [SDI](classlibsdi_1_1_s_d_i.md) server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_Close

```cpp
ResponseCodes NFC_PT_Close()
```


Release NFC L1 driver. When the [SDI](classlibsdi_1_1_s_d_i.md) server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_FieldOn

```cpp
ResponseCodes NFC_PT_FieldOn()
```


Turns RF field on. When the [SDI](classlibsdi_1_1_s_d_i.md) server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_FieldOff

```cpp
ResponseCodes NFC_PT_FieldOff()
```


Turns RF field off. When the [SDI](classlibsdi_1_1_s_d_i.md) server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_Polling

```cpp
ResponseCodes NFC_PT_Polling(
    pollReq * inPollReq,
    pollRes * outPollRes
)
```


Activates polling. See NFC documentation. When the [SDI](classlibsdi_1_1_s_d_i.md) server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_PollingFull

```cpp
ResponseCodes NFC_PT_PollingFull(
    pollReq * inPollReq,
    pollResFull * outPollRes
)
```


Activates polling. See NFC documentation. When the [SDI](classlibsdi_1_1_s_d_i.md) server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_Free_Poll_Data

```cpp
void NFC_Free_Poll_Data(
    pollRes * outPollRes
)
```


Releases memory allocated in the pollRes *outPollRes when [NFC_PT_Polling()](namespacelibsdi.md#function-nfc-pt-polling) was called. 


### function NFC_Free_Poll_Data_Full

```cpp
void NFC_Free_Poll_Data_Full(
    pollResFull * outPollRes
)
```


Releases memory allocated in the pollResFull *outPollRes when [NFC_PT_PollingFull()](namespacelibsdi.md#function-nfc-pt-pollingfull) was called. 


### function NFC_PT_Cancel_Polling

```cpp
ResponseCodes NFC_PT_Cancel_Polling(
    void 
)
```


**Return**: EMB_APP_COMMAND_NOT_SUPPORTED 

Stop polling before timeout. Note: This command has to be send asynchronously while waiting for polling response. Since is not yet supported on [SDI](classlibsdi_1_1_s_d_i.md) Server side there is also no implementation on client side. 


### function NFC_PT_Activation

```cpp
ResponseCodes NFC_PT_Activation(
    NFC_CARD_TYPE cardtype,
    rawData * rd_activationData
)
```


**Parameters**: 

  * **cardtype** value from pollRes::cardInfo]n].cardType or [pollResFull::cards_info_arr](struct__poll_res_full.md#variable-cards-info-arr)[n].m_modulation 
  * **rd_activationData** value from [pollRes::cards_info_arr](struct__poll_res.md#variable-cards-info-arr)[n].card_info or pollResFull::card_info_arr[n].mrd_UID 


Activates (selects) the card found during polling. When the [SDI](classlibsdi_1_1_s_d_i.md) server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_FtechBaud

```cpp
ResponseCodes NFC_PT_FtechBaud(
    NFC_F_BAUD baud
)
```


**Parameters**: 

  * **baud** value of NFC_F_BAUD 


**Return**: value of ResponseCodes 

Changes NFC-F baud rate 


### function NFC_PT_TxRx

```cpp
ResponseCodes NFC_PT_TxRx(
    NFC_CARD_TYPE cardtype,
    rawData * inBuff,
    rawData * outBuff
)
```


**Return**: EMB_APP_COMMAND_NOT_SUPPORTED 

Sends and receives raw data using ISO 14443-3 protocol (31-08) This function is no more available at [SDI](classlibsdi_1_1_s_d_i.md) server external interface 


### function NFC_Mifare_Authenticate

```cpp
ResponseCodes NFC_Mifare_Authenticate(
    unsigned char blockNumber,
    MIFARE_KEY_TYPE keyType,
    rawData * Key
)
```


**Parameters**: 

  * **blockNumber** MIFARE block address within the section to authenticate '00' .. 'FF' 
  * **keyType** MIFARE_KEY_TYPE_A or MIFARE_KEY_TYPE_B 
  * **Key** MIFARE key (e.g. MIFARE classic crypto-1 key with 48 bit) 


**Return**: ResponseCodes 

Authenticates the section with given block address with either key A or B. 


### function NFC_Mifare_Read

```cpp
ResponseCodes NFC_Mifare_Read(
    I_MIFARE_CARD_TYPE m_cardType,
    unsigned int StartBlockNum,
    unsigned int blockAmount,
    rawData * out_buff
)
```


**Parameters**: 

  * **m_cardType** I_MIFARE_CARD_TYPE 
  * **StartBlockNum** address of first block 
  * **blockAmount** number of blocks to read 
  * **out_buff** output buffer, required size is 16*blockAmount 


**Return**: ResponseCodes 

Read block data of up to 15 blocks 


### function NFC_Mifare_Write

```cpp
ResponseCodes NFC_Mifare_Write(
    I_MIFARE_CARD_TYPE m_cardType,
    unsigned int StartBlockNum,
    unsigned int blockAmount,
    rawData * in_buff
)
```


**Parameters**: 

  * **m_cardType** I_MIFARE_CARD_TYPE 
  * **StartBlockNum** address of first block 
  * **blockAmount** number of blocks to read 
  * **in_buff** data to write of size 16*blockAmount 


**Return**: ResponseCodes 

Write block data of up to 15 blocks 


### function NFC_Mifare_Increment

```cpp
ResponseCodes NFC_Mifare_Increment(
    unsigned int blockNum,
    int amount
)
```


**Parameters**: 

  * **blockNum** source and destination block address 
  * **amount** 4 byte signed integer 


**Return**: ResponseCodes 

Increment MIFARE value block by amount and transfer to original location 


### function NFC_Mifare_Decrement

```cpp
ResponseCodes NFC_Mifare_Decrement(
    unsigned int blockNum,
    int amount
)
```


**Parameters**: 

  * **blockNum** source and destination block address 
  * **amount** 4 byte signed integer 


**Return**: ResponseCodes 

Decrement MIFARE value block by amount and transfer to original location 


### function NFC_Mifare_Increment_Only

```cpp
ResponseCodes NFC_Mifare_Increment_Only(
    unsigned int blockNum,
    int amount
)
```


**Parameters**: 

  * **blockNum** source block address 
  * **amount** 4 byte signed integer 


**Return**: ResponseCodes 

Increment MIFARE value block by amount and store at transfer buffer 


### function NFC_Mifare_Decrement_Only

```cpp
ResponseCodes NFC_Mifare_Decrement_Only(
    unsigned int blockNum,
    int amount
)
```


**Parameters**: 

  * **blockNum** source block address 
  * **amount** 4 byte signed integer 


**Return**: ResponseCodes 

Decrement MIFARE value block by amount and store at transfer buffer 


### function NFC_Mifare_Transfer

```cpp
ResponseCodes NFC_Mifare_Transfer(
    unsigned int blockNum
)
```


**Parameters**: 

  * **blockNum** destination block address 


**Return**: ResponseCodes 

Write value from transfer buffer to destination block 


### function NFC_Mifare_Restore

```cpp
ResponseCodes NFC_Mifare_Restore(
    unsigned int blockNum
)
```


**Parameters**: 

  * **blockNum** source block address 


**Return**: ResponseCodes 

Write value from source block to transfer buffer 


### function NFC_Felica_Exchange

```cpp
ResponseCodes NFC_Felica_Exchange(
    felicaTxData * in_buff,
    felicaRxData * out_buff
)
```


**Parameters**: 

  * **in_buff** binary input 
  * **out_buff** binary output 


**Return**: ResponseCodes 

Data transive over Felica protocol 


### function NFC_Felica_Polling

```cpp
ResponseCodes NFC_Felica_Polling(
    unsigned int pollTimeout,
    felicaPolling * inData,
    felicaPollingOutput * outData
)
```


**Parameters**: 

  * **pollTimeout** timeout in Milli Seconds 
  * **inData** [felicaPolling](structfelica_polling.md) input data 
  * **outData** [felicaPollingOutput](structfelica_polling_output.md) result data 


**Return**: ResponseCodes 

FeliCa Polling request 


### function NFC_APDU_Exchange

```cpp
ResponseCodes NFC_APDU_Exchange(
    apduTxData * txData,
    apduRxData * rxData
)
```


**Parameters**: 

  * **txData** [apduTxData](structapdu_tx_data.md) data to send 
  * **rxData** [apduRxData](structapdu_rx_data.md) data received 


**Return**: EMB_APP_COMMAND_NOT_SUPPORTED 

**Note**: This command is not allowed on [SDI](classlibsdi_1_1_s_d_i.md) Server external interface 

Data transive of APDU protocol. 


### function NFC_Terminal_Config

```cpp
VasStatus NFC_Terminal_Config(
    rawData * input,
    rawData * output
)
```


**Parameters**: 

  * **input** JSON string see [Terminal Configuration Parameters]
  * **output** nothing - RFU 


**Return**: VasStatus 

Terminal wide VAS configuration 


### function NFC_TERMINAL_ReadConfig

```cpp
VasStatus NFC_TERMINAL_ReadConfig(
    rawData * id,
    rawData * output
)
```


**Parameters**: 

  * **id** application unique identifier 
  * **output** JSON string most updated [Read Terminal Configuration Parameters]


**Return**: VasStatus 

Reads the most updated terminal configuration.Static parameter will be returned in case appID is unknown or [NFC_VAS_PreLoad()](namespacelibsdi.md#function-nfc-vas-preload) issued without changing Terminal configuration. 


### function NFC_VAS_ReadConfig

```cpp
VasStatus NFC_VAS_ReadConfig(
    rawData * id,
    rawData * output
)
```


**Parameters**: 

  * **id** application unique identifier 
  * **output** JSON string most updated configuration for terminal and all wallets 


**Return**: VasStatus 

Reads the most updated wallets configuration. 


### function NFC_VAS_Activate

```cpp
VasStatus NFC_VAS_Activate(
    rawData * id,
    rawData * input,
    rawData * output
)
```


**Parameters**: 

  * **id** application unique identifier 
  * **input** JSON string set of dynamic parameters to be merged with configuration from data base. 
  * **output** JSON string VAS data received from the mobile. 


**Return**: VasStatus 

Activates NFC interface, runs through wallet kernel flow and retrieves VAS data. 


### function NFC_VAS_Cancel

```cpp
VasStatus NFC_VAS_Cancel(
    void 
)
```


**Return**: EMB_APP_COMMAND_NOT_SUPPORTED 

Stop VAS activate polling before timeout. Note: This command has to be send asynchronously while waiting for polling response. Since is not yet supported on [SDI](classlibsdi_1_1_s_d_i.md) Server side there is also no implementation on client side. 


### function NFC_VAS_UpdateConfig

```cpp
VasStatus NFC_VAS_UpdateConfig(
    rawData * id,
    rawData * input,
    rawData * output
)
```


**Parameters**: 

  * **id** application unique identifier 
  * **input** JSON string set of parameters to configure ome or multiple wallets 
  * **output** none - RFU 


**Return**: VasStatus 

Configures the terminal with wallet specific parameters. 


### function NFC_VAS_CancelConfig

```cpp
VasStatus NFC_VAS_CancelConfig(
    rawData * id
)
```


**Parameters**: 

  * **id** application unique identifier 


**Return**: VasStatus 

Clears all the VAS configuration by application ID 


### function NFC_VAS_PreLoad

```cpp
VasStatus NFC_VAS_PreLoad(
    rawData * id,
    rawData * input,
    rawData * output
)
```


**Parameters**: 

  * **id** application unique identifier 
  * **input** input Set of PreLoad parameters to be merged with configuration from data base. 
  * **output** none - RFU 


**Return**: VasStatus 

Configures the terminal with wallet specific parameters. [NFC_VAS_Activate()](namespacelibsdi.md#function-nfc-vas-activate) has to be called to get VAS data. Only single PreLoaded configuration is available. 


### function NFC_VAS_CancelPreLoad

```cpp
VasStatus NFC_VAS_CancelPreLoad(
    rawData * id
)
```


**Parameters**: 

  * **id** application unique identifier 


**Return**: VasStatus 

Clear preloaded configuration by application ID and pulls latest static configuration from data base. 


### function NFC_VAS_Decrypt

```cpp
VasStatus NFC_VAS_Decrypt(
    rawData * id,
    rawData * input,
    rawData * output
)
```


**Parameters**: 

  * **id** application unique identifier 
  * **input** The json in the same format of the Vas Data Response with the included encrypted message 
  * **output** The json in the same format of the Vas Data Response with the included decrypted message 


**Return**: VasStatus 

Decrypts an encrypted VAS response. 


### function NFC_VAS_Action

```cpp
VasStatus NFC_VAS_Action(
    rawData * id,
    int action,
    rawData * inData,
    rawData * outBuff
)
```


**Return**: VasStatus 

**Note**: Not to be used at external [SDI](classlibsdi_1_1_s_d_i.md) Server interface 

Key transfer between Counter Top and External PIN pad. 






-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
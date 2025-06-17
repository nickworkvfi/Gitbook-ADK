---
title: sdi/src/nfc.h

---

# sdi/src/nfc.h



## Functions

|                | Name           |
| -------------- | -------------- |
| std::vector< std::string > & | **[NFC_get_appID_Static](nfc_8h.md#function-nfc-get-appid-static)**() |
| std::string & | **[NFC_get_appID_Preload](nfc_8h.md#function-nfc-get-appid-preload)**() |
| bool | **[NFC_getPreloadFileName](nfc_8h.md#function-nfc-getpreloadfilename)**(char * filename, unsigned buffersize, std::string appID) |
| void | **[NFC_deletePreloadFile](nfc_8h.md#function-nfc-deletepreloadfile)**() |
| void | **[handleNFC](nfc_8h.md#function-handlenfc)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handleVAS](nfc_8h.md#function-handlevas)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_NFC](nfc_8h.md#define-cla-nfc)** <br>Class for NFC commands.  |
|  | **[CLA_VAS](nfc_8h.md#define-cla-vas)** <br>Class for VAS commands.  |
|  | **[INS_NFC_CLIENT_INIT](nfc_8h.md#define-ins-nfc-client-init)** <br>[NFC_Client_Init(...)]() |
|  | **[INS_NFC_PING](nfc_8h.md#define-ins-nfc-ping)** <br>[NFC_Ping(...)]() |
|  | **[INS_NFC_GET_VERSION](nfc_8h.md#define-ins-nfc-get-version)** <br>[NFC_Get_Version(...)]() |
|  | **[INS_NFC_CONFIG_INIT](nfc_8h.md#define-ins-nfc-config-init)** <br>[NFC_Config_Init()]() |
|  | **[INS_NFC_PT_OPEN](nfc_8h.md#define-ins-nfc-pt-open)** <br>[NFC_PT_Open()]() |
|  | **[INS_NFC_PT_CLOSE](nfc_8h.md#define-ins-nfc-pt-close)** <br>[NFC_PT_Close()]() |
|  | **[INS_NFC_PT_FIELDON](nfc_8h.md#define-ins-nfc-pt-fieldon)** <br>[NFC_PT_FieldOn()]() |
|  | **[INS_NFC_PT_FIELDOFF](nfc_8h.md#define-ins-nfc-pt-fieldoff)** <br>[NFC_PT_FieldOff()]() |
|  | **[INS_NFC_PT_POLLING](nfc_8h.md#define-ins-nfc-pt-polling)** <br>[NFC_PT_Polling(...)]() |
|  | **[INS_NFC_PT_CANCEL_POLLING](nfc_8h.md#define-ins-nfc-pt-cancel-polling)** <br>[NFC_PT_Cancel_Polling(...)]() |
|  | **[INS_NFC_PT_ACTIVATION](nfc_8h.md#define-ins-nfc-pt-activation)** <br>[NFC_PT_Activation(...)]() |
|  | **[INS_NFC_PT_TXRX](nfc_8h.md#define-ins-nfc-pt-txrx)** <br>[NFC_PT_TxRx(...)]() |
|  | **[INS_NFC_PT_FETCHBAUD](nfc_8h.md#define-ins-nfc-pt-fetchbaud)** <br>NFC_PT_FetchBaud(...)  |
|  | **[INS_NFC_PT_POLLINGFULL](nfc_8h.md#define-ins-nfc-pt-pollingfull)** <br>[NFC_PT_PollingFull(...)]() |
|  | **[INS_NFC_PT_POLLINGABF](nfc_8h.md#define-ins-nfc-pt-pollingabf)** <br>NFC_PT_PollingABF(...)  |
|  | **[INS_NFC_MIFARE_AUTH](nfc_8h.md#define-ins-nfc-mifare-auth)** <br>[NFC_Mifare_Authenticate(...)]() |
|  | **[INS_NFC_MIFARE_READ](nfc_8h.md#define-ins-nfc-mifare-read)** <br>[NFC_Mifare_Read(...)]() |
|  | **[INS_NFC_MIFARE_WRITE](nfc_8h.md#define-ins-nfc-mifare-write)** <br>[NFC_Mifare_Write(...)]() |
|  | **[INS_NFC_MIFARE_INCREMENT](nfc_8h.md#define-ins-nfc-mifare-increment)** <br>[NFC_Mifare_Increment(...)]() |
|  | **[INS_NFC_MIFARE_DECREMENT](nfc_8h.md#define-ins-nfc-mifare-decrement)** <br>[NFC_Mifare_Decrement(...)]() |
|  | **[INS_NFC_MIFARE_INCR_ONLY](nfc_8h.md#define-ins-nfc-mifare-incr-only)** <br>NFC_Mifare_Incrment_Only(...)  |
|  | **[INS_NFC_MIFARE_DECR_ONLY](nfc_8h.md#define-ins-nfc-mifare-decr-only)** <br>NFC_Mifare_Decrment_Only(...)  |
|  | **[INS_NFC_MIFARE_TRANSFER](nfc_8h.md#define-ins-nfc-mifare-transfer)** <br>[NFC_Mifare_Transfer(...)]() |
|  | **[INS_NFC_MIFARE_RESTORE](nfc_8h.md#define-ins-nfc-mifare-restore)** <br>[NFC_Mifare_Restore(...)]() |
|  | **[INS_NFC_FELICA_EXCHANGE](nfc_8h.md#define-ins-nfc-felica-exchange)** <br>[NFC_Felica_Exchange(...)]() |
|  | **[INS_NFC_FELICA_POLLING](nfc_8h.md#define-ins-nfc-felica-polling)** <br>[NFC_Felica_Polling(...)]() |
|  | **[INS_NFC_APDU_EXCH](nfc_8h.md#define-ins-nfc-apdu-exch)** <br>[NFC_APDU_Exchange(...)]() |
|  | **[INS_NFC_TARGET_ACTION](nfc_8h.md#define-ins-nfc-target-action)** <br>NFC_Target_Action(...)  |
|  | **[INS_NFC_CREATE_NDEF](nfc_8h.md#define-ins-nfc-create-ndef)** <br>NFC_Create_Ndef(...)  |
|  | **[INS_VAS_NFC_TERM_CONFIG](nfc_8h.md#define-ins-vas-nfc-term-config)** <br>[NFC_Terminal_Config(...)]() |
|  | **[INS_VAS_NFC_TERM_READ_CONFIG](nfc_8h.md#define-ins-vas-nfc-term-read-config)** <br>[NFC_TERMINAL_ReadConfig(...)]() |
|  | **[INS_VAS_READ_CONFIG](nfc_8h.md#define-ins-vas-read-config)** <br>[NFC_VAS_ReadConfig(...)]() |
|  | **[INS_VAS_ACTIVATE](nfc_8h.md#define-ins-vas-activate)** <br>[NFC_VAS_Activate(...)]() |
|  | **[INS_VAS_CANCEL](nfc_8h.md#define-ins-vas-cancel)** <br>[NFC_VAS_Cancel(...)]() |
|  | **[INS_VAS_UPDATE_CONFIG](nfc_8h.md#define-ins-vas-update-config)** <br>[NFC_VAS_UpdateConfig(...)]() |
|  | **[INS_VAS_CANCEL_CONFIG](nfc_8h.md#define-ins-vas-cancel-config)** <br>[NFC_VAS_CancelConfig(...)]() |
|  | **[INS_VAS_PRELOAD](nfc_8h.md#define-ins-vas-preload)** <br>[NFC_VAS_PreLoad(...)]() |
|  | **[INS_VAS_CANCEL_PRELOAD](nfc_8h.md#define-ins-vas-cancel-preload)** <br>[NFC_VAS_CancelPreLoad(...)]() |
|  | **[INS_VAS_DECRYPT](nfc_8h.md#define-ins-vas-decrypt)** <br>[NFC_VAS_Decrypt(...)]() |
|  | **[INS_VAS_ACTION](nfc_8h.md#define-ins-vas-action)** <br>[NFC_VAS_Action(...)]() |
|  | **[EMB_APP_F0_TEMPLATE_TAG](nfc_8h.md#define-emb-app-f0-template-tag)** <br>All BER TLV streams are packed in this tag.  |
|  | **[EMB_APP_PING_TAG](nfc_8h.md#define-emb-app-ping-tag)**  |
|  | **[EMB_APP_VERSION_TAG](nfc_8h.md#define-emb-app-version-tag)**  |
|  | **[EMB_APP_TECH_BITMAP_TAG](nfc_8h.md#define-emb-app-tech-bitmap-tag)**  |
|  | **[EMB_APP_POLL_TIMEOUT_TAG](nfc_8h.md#define-emb-app-poll-timeout-tag)**  |
|  | **[TAG_DFA204_NFC_APDU_CMD](nfc_8h.md#define-tag-dfa204-nfc-apdu-cmd)**  |
|  | **[TAG_DFA205_NFC_APDU_RSP](nfc_8h.md#define-tag-dfa205-nfc-apdu-rsp)**  |
|  | **[EMB_APP_TXRX_DATA_TAG](nfc_8h.md#define-emb-app-txrx-data-tag)**  |
|  | **[EMB_APP_CUSTOM_POLL_DATA_TAG](nfc_8h.md#define-emb-app-custom-poll-data-tag)**  |
|  | **[EMB_APP_MIFARE_BLOCK_NUM_TAG](nfc_8h.md#define-emb-app-mifare-block-num-tag)**  |
|  | **[EMB_APP_MIFARE_KEY_TYPE_TAG](nfc_8h.md#define-emb-app-mifare-key-type-tag)**  |
|  | **[EMB_APP_MIFARE_KEY_TAG](nfc_8h.md#define-emb-app-mifare-key-tag)**  |
|  | **[EMB_APP_MIFARE_CARD_TYPE_TAG](nfc_8h.md#define-emb-app-mifare-card-type-tag)**  |
|  | **[EMB_APP_MIFARE_START_BLOCK_TAG](nfc_8h.md#define-emb-app-mifare-start-block-tag)**  |
|  | **[EMB_APP_MIFARE_BLOCK_AMOUNT_TAG](nfc_8h.md#define-emb-app-mifare-block-amount-tag)**  |
|  | **[EMB_APP_MIFARE_READ_DATA_TAG](nfc_8h.md#define-emb-app-mifare-read-data-tag)**  |
|  | **[EMB_APP_MIFARE_WRITE_DATA_TAG](nfc_8h.md#define-emb-app-mifare-write-data-tag)**  |
|  | **[EMB_APP_MIFARE_AMOUNT_TAG](nfc_8h.md#define-emb-app-mifare-amount-tag)**  |
|  | **[EMB_APP_FELICA_POLL_TIMEOUT_TAG](nfc_8h.md#define-emb-app-felica-poll-timeout-tag)**  |
|  | **[EMB_APP_FELICA_RECIVE_TIMEOUT_TAG](nfc_8h.md#define-emb-app-felica-recive-timeout-tag)**  |
|  | **[EMB_APP_FELICA_SYS_CODE_TAG](nfc_8h.md#define-emb-app-felica-sys-code-tag)**  |
|  | **[EMB_APP_FELICA_REQ_CODE_TAG](nfc_8h.md#define-emb-app-felica-req-code-tag)**  |
|  | **[EMB_APP_FELICA_TIME_SLOT_TAG](nfc_8h.md#define-emb-app-felica-time-slot-tag)**  |
|  | **[EMB_APP_FELICA_UID_TAG](nfc_8h.md#define-emb-app-felica-uid-tag)**  |
|  | **[EMB_APP_FELICA_PAD_TAG](nfc_8h.md#define-emb-app-felica-pad-tag)**  |
|  | **[EMB_APP_FELICA_TIMEOUT_TAG](nfc_8h.md#define-emb-app-felica-timeout-tag)**  |
|  | **[TAG_DFA219_NFC_APDU_SW12](nfc_8h.md#define-tag-dfa219-nfc-apdu-sw12)**  |
|  | **[TAG_DFA21A_NFC_DUTY_CYCLE_TAG](nfc_8h.md#define-tag-dfa21a-nfc-duty-cycle-tag)**  |
|  | **[TAG_DFA21B_NFC_TARGET_ACTION](nfc_8h.md#define-tag-dfa21b-nfc-target-action)**  |
|  | **[TAG_DFA21C_NFC_TIMEOUT](nfc_8h.md#define-tag-dfa21c-nfc-timeout)**  |
|  | **[TAG_DFA21D_NFC_IN_DATA](nfc_8h.md#define-tag-dfa21d-nfc-in-data)**  |
|  | **[TAG_DFA21E_NFC_OUT_DATA](nfc_8h.md#define-tag-dfa21e-nfc-out-data)**  |
|  | **[TAG_DFA21F_NFC_NDEF_TYPES](nfc_8h.md#define-tag-dfa21f-nfc-ndef-types)**  |
|  | **[TAG_DFA300_NFC_VAS_IN_OUT_DATA](nfc_8h.md#define-tag-dfa300-nfc-vas-in-out-data)**  |
|  | **[TAG_DFA301_NFC_VAS_APP_ID](nfc_8h.md#define-tag-dfa301-nfc-vas-app-id)**  |
|  | **[TAG_DFA302_NFC_VAS_ACTION](nfc_8h.md#define-tag-dfa302-nfc-vas-action)**  |


## Functions Documentation

### function NFC_get_appID_Static

```cpp
std::vector< std::string > & NFC_get_appID_Static()
```


### function NFC_get_appID_Preload

```cpp
std::string & NFC_get_appID_Preload()
```


### function NFC_getPreloadFileName

```cpp
bool NFC_getPreloadFileName(
    char * filename,
    unsigned buffersize,
    std::string appID
)
```


### function NFC_deletePreloadFile

```cpp
void NFC_deletePreloadFile()
```


### function handleNFC

```cpp
void handleNFC(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function handleVAS

```cpp
void handleVAS(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```




## Macros Documentation

### define CLA_NFC

```cpp
#define CLA_NFC 0x31
```

Class for NFC commands. 

### define CLA_VAS

```cpp
#define CLA_VAS 0x32
```

Class for VAS commands. 

### define INS_NFC_CLIENT_INIT

```cpp
#define INS_NFC_CLIENT_INIT 0x10
```

[NFC_Client_Init(...)]()

### define INS_NFC_PING

```cpp
#define INS_NFC_PING 0x00
```

[NFC_Ping(...)]()

### define INS_NFC_GET_VERSION

```cpp
#define INS_NFC_GET_VERSION 0x11
```

[NFC_Get_Version(...)]()

### define INS_NFC_CONFIG_INIT

```cpp
#define INS_NFC_CONFIG_INIT 0x12
```

[NFC_Config_Init()]()

### define INS_NFC_PT_OPEN

```cpp
#define INS_NFC_PT_OPEN 0x01
```

[NFC_PT_Open()]()

### define INS_NFC_PT_CLOSE

```cpp
#define INS_NFC_PT_CLOSE 0x02
```

[NFC_PT_Close()]()

### define INS_NFC_PT_FIELDON

```cpp
#define INS_NFC_PT_FIELDON 0x03
```

[NFC_PT_FieldOn()]()

### define INS_NFC_PT_FIELDOFF

```cpp
#define INS_NFC_PT_FIELDOFF 0x04
```

[NFC_PT_FieldOff()]()

### define INS_NFC_PT_POLLING

```cpp
#define INS_NFC_PT_POLLING 0x05
```

[NFC_PT_Polling(...)]()

### define INS_NFC_PT_CANCEL_POLLING

```cpp
#define INS_NFC_PT_CANCEL_POLLING 0x06
```

[NFC_PT_Cancel_Polling(...)]()

### define INS_NFC_PT_ACTIVATION

```cpp
#define INS_NFC_PT_ACTIVATION 0x07
```

[NFC_PT_Activation(...)]()

### define INS_NFC_PT_TXRX

```cpp
#define INS_NFC_PT_TXRX 0x08
```

[NFC_PT_TxRx(...)]()

### define INS_NFC_PT_FETCHBAUD

```cpp
#define INS_NFC_PT_FETCHBAUD 0x09
```

NFC_PT_FetchBaud(...) 

### define INS_NFC_PT_POLLINGFULL

```cpp
#define INS_NFC_PT_POLLINGFULL 0x13
```

[NFC_PT_PollingFull(...)]()

### define INS_NFC_PT_POLLINGABF

```cpp
#define INS_NFC_PT_POLLINGABF 0x1D
```

NFC_PT_PollingABF(...) 

### define INS_NFC_MIFARE_AUTH

```cpp
#define INS_NFC_MIFARE_AUTH 0x0A
```

[NFC_Mifare_Authenticate(...)]()

### define INS_NFC_MIFARE_READ

```cpp
#define INS_NFC_MIFARE_READ 0x0B
```

[NFC_Mifare_Read(...)]()

### define INS_NFC_MIFARE_WRITE

```cpp
#define INS_NFC_MIFARE_WRITE 0x0C
```

[NFC_Mifare_Write(...)]()

### define INS_NFC_MIFARE_INCREMENT

```cpp
#define INS_NFC_MIFARE_INCREMENT 0x0D
```

[NFC_Mifare_Increment(...)]()

### define INS_NFC_MIFARE_DECREMENT

```cpp
#define INS_NFC_MIFARE_DECREMENT 0x0E
```

[NFC_Mifare_Decrement(...)]()

### define INS_NFC_MIFARE_INCR_ONLY

```cpp
#define INS_NFC_MIFARE_INCR_ONLY 0x15
```

NFC_Mifare_Incrment_Only(...) 

### define INS_NFC_MIFARE_DECR_ONLY

```cpp
#define INS_NFC_MIFARE_DECR_ONLY 0x16
```

NFC_Mifare_Decrment_Only(...) 

### define INS_NFC_MIFARE_TRANSFER

```cpp
#define INS_NFC_MIFARE_TRANSFER 0x17
```

[NFC_Mifare_Transfer(...)]()

### define INS_NFC_MIFARE_RESTORE

```cpp
#define INS_NFC_MIFARE_RESTORE 0x18
```

[NFC_Mifare_Restore(...)]()

### define INS_NFC_FELICA_EXCHANGE

```cpp
#define INS_NFC_FELICA_EXCHANGE 0x0F
```

[NFC_Felica_Exchange(...)]()

### define INS_NFC_FELICA_POLLING

```cpp
#define INS_NFC_FELICA_POLLING 0x14
```

[NFC_Felica_Polling(...)]()

### define INS_NFC_APDU_EXCH

```cpp
#define INS_NFC_APDU_EXCH 0x1C
```

[NFC_APDU_Exchange(...)]()

### define INS_NFC_TARGET_ACTION

```cpp
#define INS_NFC_TARGET_ACTION 0x20
```

NFC_Target_Action(...) 

### define INS_NFC_CREATE_NDEF

```cpp
#define INS_NFC_CREATE_NDEF 0x21
```

NFC_Create_Ndef(...) 

### define INS_VAS_NFC_TERM_CONFIG

```cpp
#define INS_VAS_NFC_TERM_CONFIG 0x00
```

[NFC_Terminal_Config(...)]()

### define INS_VAS_NFC_TERM_READ_CONFIG

```cpp
#define INS_VAS_NFC_TERM_READ_CONFIG 0x01
```

[NFC_TERMINAL_ReadConfig(...)]()

### define INS_VAS_READ_CONFIG

```cpp
#define INS_VAS_READ_CONFIG 0x02
```

[NFC_VAS_ReadConfig(...)]()

### define INS_VAS_ACTIVATE

```cpp
#define INS_VAS_ACTIVATE 0x03
```

[NFC_VAS_Activate(...)]()

### define INS_VAS_CANCEL

```cpp
#define INS_VAS_CANCEL 0x04
```

[NFC_VAS_Cancel(...)]()

### define INS_VAS_UPDATE_CONFIG

```cpp
#define INS_VAS_UPDATE_CONFIG 0x05
```

[NFC_VAS_UpdateConfig(...)]()

### define INS_VAS_CANCEL_CONFIG

```cpp
#define INS_VAS_CANCEL_CONFIG 0x06
```

[NFC_VAS_CancelConfig(...)]()

### define INS_VAS_PRELOAD

```cpp
#define INS_VAS_PRELOAD 0x07
```

[NFC_VAS_PreLoad(...)]()

### define INS_VAS_CANCEL_PRELOAD

```cpp
#define INS_VAS_CANCEL_PRELOAD 0x08
```

[NFC_VAS_CancelPreLoad(...)]()

### define INS_VAS_DECRYPT

```cpp
#define INS_VAS_DECRYPT 0x09
```

[NFC_VAS_Decrypt(...)]()

### define INS_VAS_ACTION

```cpp
#define INS_VAS_ACTION 0x0A
```

[NFC_VAS_Action(...)]()

### define EMB_APP_F0_TEMPLATE_TAG

```cpp
#define EMB_APP_F0_TEMPLATE_TAG 0xF0
```

All BER TLV streams are packed in this tag. 

### define EMB_APP_PING_TAG

```cpp
#define EMB_APP_PING_TAG 0xDFA200
```


### define EMB_APP_VERSION_TAG

```cpp
#define EMB_APP_VERSION_TAG 0xDFA201
```


### define EMB_APP_TECH_BITMAP_TAG

```cpp
#define EMB_APP_TECH_BITMAP_TAG 0xDFA202
```


### define EMB_APP_POLL_TIMEOUT_TAG

```cpp
#define EMB_APP_POLL_TIMEOUT_TAG 0xDFA203
```


### define TAG_DFA204_NFC_APDU_CMD

```cpp
#define TAG_DFA204_NFC_APDU_CMD 0xDFA204
```


### define TAG_DFA205_NFC_APDU_RSP

```cpp
#define TAG_DFA205_NFC_APDU_RSP 0xDFA205
```


### define EMB_APP_TXRX_DATA_TAG

```cpp
#define EMB_APP_TXRX_DATA_TAG 0xDFA206
```


### define EMB_APP_CUSTOM_POLL_DATA_TAG

```cpp
#define EMB_APP_CUSTOM_POLL_DATA_TAG 0xDFA207
```


### define EMB_APP_MIFARE_BLOCK_NUM_TAG

```cpp
#define EMB_APP_MIFARE_BLOCK_NUM_TAG 0xDFA208
```


### define EMB_APP_MIFARE_KEY_TYPE_TAG

```cpp
#define EMB_APP_MIFARE_KEY_TYPE_TAG 0xDFA209
```


### define EMB_APP_MIFARE_KEY_TAG

```cpp
#define EMB_APP_MIFARE_KEY_TAG 0xDFA20A
```


### define EMB_APP_MIFARE_CARD_TYPE_TAG

```cpp
#define EMB_APP_MIFARE_CARD_TYPE_TAG 0xDFA20B
```


### define EMB_APP_MIFARE_START_BLOCK_TAG

```cpp
#define EMB_APP_MIFARE_START_BLOCK_TAG 0xDFA20C
```


### define EMB_APP_MIFARE_BLOCK_AMOUNT_TAG

```cpp
#define EMB_APP_MIFARE_BLOCK_AMOUNT_TAG 0xDFA20D
```


### define EMB_APP_MIFARE_READ_DATA_TAG

```cpp
#define EMB_APP_MIFARE_READ_DATA_TAG 0xDFA20E
```


### define EMB_APP_MIFARE_WRITE_DATA_TAG

```cpp
#define EMB_APP_MIFARE_WRITE_DATA_TAG 0xDFA20F
```


### define EMB_APP_MIFARE_AMOUNT_TAG

```cpp
#define EMB_APP_MIFARE_AMOUNT_TAG 0xDFA210
```


### define EMB_APP_FELICA_POLL_TIMEOUT_TAG

```cpp
#define EMB_APP_FELICA_POLL_TIMEOUT_TAG 0xDFA211
```


### define EMB_APP_FELICA_RECIVE_TIMEOUT_TAG

```cpp
#define EMB_APP_FELICA_RECIVE_TIMEOUT_TAG 0xDFA212
```


### define EMB_APP_FELICA_SYS_CODE_TAG

```cpp
#define EMB_APP_FELICA_SYS_CODE_TAG 0xDFA213
```


### define EMB_APP_FELICA_REQ_CODE_TAG

```cpp
#define EMB_APP_FELICA_REQ_CODE_TAG 0xDFA214
```


### define EMB_APP_FELICA_TIME_SLOT_TAG

```cpp
#define EMB_APP_FELICA_TIME_SLOT_TAG 0xDFA215
```


### define EMB_APP_FELICA_UID_TAG

```cpp
#define EMB_APP_FELICA_UID_TAG 0xDFA216
```


### define EMB_APP_FELICA_PAD_TAG

```cpp
#define EMB_APP_FELICA_PAD_TAG 0xDFA217
```


### define EMB_APP_FELICA_TIMEOUT_TAG

```cpp
#define EMB_APP_FELICA_TIMEOUT_TAG 0xDFA218
```


### define TAG_DFA219_NFC_APDU_SW12

```cpp
#define TAG_DFA219_NFC_APDU_SW12 0xDFA219
```


### define TAG_DFA21A_NFC_DUTY_CYCLE_TAG

```cpp
#define TAG_DFA21A_NFC_DUTY_CYCLE_TAG 0xDFA21A
```


### define TAG_DFA21B_NFC_TARGET_ACTION

```cpp
#define TAG_DFA21B_NFC_TARGET_ACTION 0xDFA21B
```


### define TAG_DFA21C_NFC_TIMEOUT

```cpp
#define TAG_DFA21C_NFC_TIMEOUT 0xDFA21C
```


### define TAG_DFA21D_NFC_IN_DATA

```cpp
#define TAG_DFA21D_NFC_IN_DATA 0xDFA21D
```


### define TAG_DFA21E_NFC_OUT_DATA

```cpp
#define TAG_DFA21E_NFC_OUT_DATA 0xDFA21E
```


### define TAG_DFA21F_NFC_NDEF_TYPES

```cpp
#define TAG_DFA21F_NFC_NDEF_TYPES 0xDFA21F
```


### define TAG_DFA300_NFC_VAS_IN_OUT_DATA

```cpp
#define TAG_DFA300_NFC_VAS_IN_OUT_DATA 0xDFA300
```


### define TAG_DFA301_NFC_VAS_APP_ID

```cpp
#define TAG_DFA301_NFC_VAS_APP_ID 0xDFA301
```


### define TAG_DFA302_NFC_VAS_ACTION

```cpp
#define TAG_DFA302_NFC_VAS_ACTION 0xDFA302
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _NFC_H_
#define _NFC_H_

#include <string>
#include <vector>


// appID storage for configuration cloning
std::vector<std::string> &NFC_get_appID_Static();
std::string              &NFC_get_appID_Preload();

bool NFC_getPreloadFileName(char* filename, unsigned buffersize, std::string appID);

void NFC_deletePreloadFile();

#define CLA_NFC                  0x31 
#define CLA_VAS                  0x32 

// General Commands
#define INS_NFC_CLIENT_INIT       0x10 
#define INS_NFC_PING              0x00 
#define INS_NFC_GET_VERSION       0x11 
#define INS_NFC_CONFIG_INIT       0x12 

// Pass Through Commands
#define INS_NFC_PT_OPEN           0x01 
#define INS_NFC_PT_CLOSE          0x02 
#define INS_NFC_PT_FIELDON        0x03 
#define INS_NFC_PT_FIELDOFF       0x04 
#define INS_NFC_PT_POLLING        0x05 
#define INS_NFC_PT_CANCEL_POLLING 0x06 
#define INS_NFC_PT_ACTIVATION     0x07 
#define INS_NFC_PT_TXRX           0x08 
#define INS_NFC_PT_FETCHBAUD      0x09 
#define INS_NFC_PT_POLLINGFULL    0x13 
#define INS_NFC_PT_POLLINGABF     0x1D 

// Mifare Commands
#define INS_NFC_MIFARE_AUTH       0x0A 
#define INS_NFC_MIFARE_READ       0x0B 
#define INS_NFC_MIFARE_WRITE      0x0C 
#define INS_NFC_MIFARE_INCREMENT  0x0D 
#define INS_NFC_MIFARE_DECREMENT  0x0E 
#define INS_NFC_MIFARE_INCR_ONLY  0x15 
#define INS_NFC_MIFARE_DECR_ONLY  0x16 
#define INS_NFC_MIFARE_TRANSFER   0x17 
#define INS_NFC_MIFARE_RESTORE    0x18 

// Felica Commands
#define INS_NFC_FELICA_EXCHANGE   0x0F 
#define INS_NFC_FELICA_POLLING    0x14 

// APDU Commands
#define INS_NFC_APDU_EXCH         0x1C 

// Target Mode
#define INS_NFC_TARGET_ACTION     0x20 
#define INS_NFC_CREATE_NDEF       0x21 

// VAS Commands
#define INS_VAS_NFC_TERM_CONFIG         0x00 
#define INS_VAS_NFC_TERM_READ_CONFIG    0x01 
#define INS_VAS_READ_CONFIG             0x02 
#define INS_VAS_ACTIVATE                0x03 
#define INS_VAS_CANCEL                  0x04 
#define INS_VAS_UPDATE_CONFIG           0x05 
#define INS_VAS_CANCEL_CONFIG           0x06 
#define INS_VAS_PRELOAD                 0x07 
#define INS_VAS_CANCEL_PRELOAD          0x08 
#define INS_VAS_DECRYPT                 0x09 
#define INS_VAS_ACTION                  0x0A 

// Tags
#define EMB_APP_F0_TEMPLATE_TAG           0xF0      
#define EMB_APP_PING_TAG                  0xDFA200
#define EMB_APP_VERSION_TAG               0xDFA201
#define EMB_APP_TECH_BITMAP_TAG           0xDFA202
#define EMB_APP_POLL_TIMEOUT_TAG          0xDFA203
#define TAG_DFA204_NFC_APDU_CMD           0xDFA204
#define TAG_DFA205_NFC_APDU_RSP           0xDFA205
#define EMB_APP_TXRX_DATA_TAG             0xDFA206
#define EMB_APP_CUSTOM_POLL_DATA_TAG      0xDFA207
#define EMB_APP_MIFARE_BLOCK_NUM_TAG      0xDFA208
#define EMB_APP_MIFARE_KEY_TYPE_TAG       0xDFA209
#define EMB_APP_MIFARE_KEY_TAG            0xDFA20A
#define EMB_APP_MIFARE_CARD_TYPE_TAG      0xDFA20B
#define EMB_APP_MIFARE_START_BLOCK_TAG    0xDFA20C
#define EMB_APP_MIFARE_BLOCK_AMOUNT_TAG   0xDFA20D
#define EMB_APP_MIFARE_READ_DATA_TAG      0xDFA20E
#define EMB_APP_MIFARE_WRITE_DATA_TAG     0xDFA20F
#define EMB_APP_MIFARE_AMOUNT_TAG         0xDFA210
#define EMB_APP_FELICA_POLL_TIMEOUT_TAG   0xDFA211
#define EMB_APP_FELICA_RECIVE_TIMEOUT_TAG 0xDFA212
#define EMB_APP_FELICA_SYS_CODE_TAG       0xDFA213
#define EMB_APP_FELICA_REQ_CODE_TAG       0xDFA214
#define EMB_APP_FELICA_TIME_SLOT_TAG      0xDFA215
#define EMB_APP_FELICA_UID_TAG            0xDFA216
#define EMB_APP_FELICA_PAD_TAG            0xDFA217
#define EMB_APP_FELICA_TIMEOUT_TAG        0xDFA218
#define TAG_DFA219_NFC_APDU_SW12          0xDFA219
#define TAG_DFA21A_NFC_DUTY_CYCLE_TAG     0xDFA21A
#define TAG_DFA21B_NFC_TARGET_ACTION      0xDFA21B
#define TAG_DFA21C_NFC_TIMEOUT            0xDFA21C
#define TAG_DFA21D_NFC_IN_DATA            0xDFA21D
#define TAG_DFA21E_NFC_OUT_DATA           0xDFA21E
#define TAG_DFA21F_NFC_NDEF_TYPES         0xDFA21F




#define TAG_DFA300_NFC_VAS_IN_OUT_DATA  0xDFA300
#define TAG_DFA301_NFC_VAS_APP_ID       0xDFA301
#define TAG_DFA302_NFC_VAS_ACTION       0xDFA302


#ifdef __cplusplus
extern "C"
{
#endif


void handleNFC(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
void handleVAS(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

#ifdef __cplusplus
}
#endif

#endif // _NFC_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

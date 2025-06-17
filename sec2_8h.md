---
title: sec/src/api/export/sec/sec2.h
summary: ADK Security Definitions. 

---

# sec/src/api/export/sec/sec2.h

ADK Security Definitions.  [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[com_verifone_host](namespacecom__verifone__host.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[sec_cmd_code](sec2_8h.md#enum-sec-cmd-code)** { UPDATE_KEY_COM =43, RETRIEVE_ENCRYPTED_PIN_COM = 26, GENERATE_MAC_COM = 44, VERIFY_MAC_COM = 45, ENCRYPT_DATA_COM =46, DECRYPT_DATA_COM =47, GET_KEY_DATA_COM = 54, GET_SVC_VERSION_COM = 60, OPEN_SCHEMA_COM = 62, CLOSE_SCHEMA_COM = 63, PUT_TRANSACTIONDATA_COM = 64, GET_KEY_INVENTORY_COM = 65, GET_TRANSACTION_VALUE = 66, GET_PERMISSION = 67, CLEAR_TRANSACTIONDATA_COM = 68, GET_STATUS_COM = 69, CRT_CHECK_CONN_COM = 70, CRT_GET_CERT_CHAIN_COM = 71, CRT_GET_KEY_COM = 72, CRT_UPDATE_CERT_COM = 73, CRT_UPDATE_KEY_COM = 74, CRT_GET_SVC_VERSION_COM = 75} |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CODE_UNLOCK](sec2_8h.md#define-code-unlock)**  |
|  | **[CODE_LOCK](sec2_8h.md#define-code-lock)**  |
|  | **[CODE_ACTION](sec2_8h.md#define-code-action)**  |
|  | **[RESP_CODE_SIZE](sec2_8h.md#define-resp-code-size)**  |
|  | **[RESP_CODE_SUCCESS](sec2_8h.md#define-resp-code-success)**  |
|  | **[RESP_CODE_FAILED](sec2_8h.md#define-resp-code-failed)**  |
|  | **[RESP_CODE_TIMEOUT](sec2_8h.md#define-resp-code-timeout)**  |
|  | **[RESP_CODE_PIN_EQUAL](sec2_8h.md#define-resp-code-pin-equal)**  |
|  | **[RESP_CODE_HOST_NOT_FOUND](sec2_8h.md#define-resp-code-host-not-found)**  |
|  | **[RESP_CODE_PIN_CANCEL](sec2_8h.md#define-resp-code-pin-cancel)**  |
|  | **[RESP_CODE_PIN_BYPASS](sec2_8h.md#define-resp-code-pin-bypass)**  |
|  | **[RESP_CODE_PIN_CANCELED_BY_CLEAR_KEY](sec2_8h.md#define-resp-code-pin-canceled-by-clear-key)**  |
|  | **[RESP_CODE_SIZE_ERROR](sec2_8h.md#define-resp-code-size-error)**  |
|  | **[RESP_CODE_MAC_VER_FAILED](sec2_8h.md#define-resp-code-mac-ver-failed)**  |
|  | **[RESP_CODE_MSG_SIZE_TO_LONG](sec2_8h.md#define-resp-code-msg-size-to-long)**  |
|  | **[RESP_CODE_CMD_SEQ_ERROR](sec2_8h.md#define-resp-code-cmd-seq-error)**  |
|  | **[RESP_CODE_RETRY_LIMIT](sec2_8h.md#define-resp-code-retry-limit)**  |
|  | **[RESP_CODE_INVALID_REQ](sec2_8h.md#define-resp-code-invalid-req)**  |
|  | **[RESP_CODE_API_REQ](sec2_8h.md#define-resp-code-api-req)**  |
|  | **[RESP_CODE_INVALID_CMD](sec2_8h.md#define-resp-code-invalid-cmd)**  |
|  | **[RESP_CODE_INVALID_LOCAL_KEY_IDX](sec2_8h.md#define-resp-code-invalid-local-key-idx)**  |
|  | **[RESP_CODE_UPDATE_KEY_FAILED](sec2_8h.md#define-resp-code-update-key-failed)**  |
|  | **[RESP_CODE_TRANSPORT_KEYS_CHANGED](sec2_8h.md#define-resp-code-transport-keys-changed)**  |
|  | **[RESP_CODE_KEY_UPDATE_LIMIT](sec2_8h.md#define-resp-code-key-update-limit)**  |
|  | **[RESP_CODE_INVALID_KEY](sec2_8h.md#define-resp-code-invalid-key)**  |
|  | **[RESP_CODE_PIN_BLOCKED](sec2_8h.md#define-resp-code-pin-blocked)**  |
|  | **[RESP_CODE_PIN_GET_CHALLENGE_ERROR](sec2_8h.md#define-resp-code-pin-get-challenge-error)**  |
|  | **[RESP_CODE_PIN_ENCIPHER_ERROR](sec2_8h.md#define-resp-code-pin-encipher-error)**  |
|  | **[RESP_CODE_PIN_VERIFY_FAILED](sec2_8h.md#define-resp-code-pin-verify-failed)**  |
|  | **[RESP_CODE_PIN_MISSING_PIN_BLOCK_DATA](sec2_8h.md#define-resp-code-pin-missing-pin-block-data)**  |
|  | **[RESP_CODE_INVALID_KEY_LENGTH](sec2_8h.md#define-resp-code-invalid-key-length)**  |
|  | **[RESP_CODE_MISSING_TMK_OR_DUKPT_KEY](sec2_8h.md#define-resp-code-missing-tmk-or-dukpt-key)**  |
|  | **[RESP_CODE_MISSING_TPK_OR_TAK](sec2_8h.md#define-resp-code-missing-tpk-or-tak)**  |
|  | **[RESP_CODE_MISSING_STAN_OR_PAN](sec2_8h.md#define-resp-code-missing-stan-or-pan)**  |
|  | **[RESP_CODE_ADE_NOT_ACTIVE](sec2_8h.md#define-resp-code-ade-not-active)**  |
|  | **[RESP_CODE_CARD_REMOVED](sec2_8h.md#define-resp-code-card-removed)**  |
|  | **[RESP_CODE_TAMPERED](sec2_8h.md#define-resp-code-tampered)**  |
|  | **[RESP_CODE_NOT_SUPPORTED_KSID](sec2_8h.md#define-resp-code-not-supported-ksid)**  |
|  | **[RESP_CODE_NOT_SUPPORTED_KEY_TYPE](sec2_8h.md#define-resp-code-not-supported-key-type)**  |
|  | **[RESP_CODE_ASYNC_PIN_NOT_READY](sec2_8h.md#define-resp-code-async-pin-not-ready)**  |
|  | **[RESP_CODE_CRYPTO_DEVICE_BLOCKED](sec2_8h.md#define-resp-code-crypto-device-blocked)**  |
|  | **[RESP_CODE_KSN_INCREMENTATION_ERROR](sec2_8h.md#define-resp-code-ksn-incrementation-error)**  |
|  | **[RESP_CODE_CMD_BUSY](sec2_8h.md#define-resp-code-cmd-busy)**  |
|  | **[RESP_CODE_INVALID_APP_ID](sec2_8h.md#define-resp-code-invalid-app-id)**  |
|  | **[RESP_CODE_POS_INVALID_FIELD_LEN](sec2_8h.md#define-resp-code-pos-invalid-field-len)**  |
|  | **[RESP_CODE_POS_MSG_LEN](sec2_8h.md#define-resp-code-pos-msg-len)**  |
|  | **[RESP_CODE_UNKNOWN_CMD](sec2_8h.md#define-resp-code-unknown-cmd)**  |
|  | **[RESP_CODE_INVAL](sec2_8h.md#define-resp-code-inval)**  |
|  | **[RESP_ADE_NOT_ACTIVE](sec2_8h.md#define-resp-ade-not-active)**  |
|  | **[ADD_SCREEN_TEXT](sec2_8h.md#define-add-screen-text)**  |
|  | **[ACTION_CODE_SIZE](sec2_8h.md#define-action-code-size)**  |
|  | **[COMMAND_SIZE](sec2_8h.md#define-command-size)**  |
|  | **[DATA_ALGORITHM_SIZE](sec2_8h.md#define-data-algorithm-size)**  |
|  | **[PAN_SIZE](sec2_8h.md#define-pan-size)**  |
|  | **[STAN_SIZE](sec2_8h.md#define-stan-size)**  |
|  | **[TRANS_AMOUNT_SIZE](sec2_8h.md#define-trans-amount-size)**  |
|  | **[TRANS_CURR_CODE_SIZE](sec2_8h.md#define-trans-curr-code-size)**  |
|  | **[ONLINE_PIN_CIPHER_BLOCK_SIZE](sec2_8h.md#define-online-pin-cipher-block-size)**  |
|  | **[KSN_SIZE](sec2_8h.md#define-ksn-size)**  |
|  | **[AES_KSN_SIZE](sec2_8h.md#define-aes-ksn-size)**  |
|  | **[POS_TIMEOUT_SIZE](sec2_8h.md#define-pos-timeout-size)**  |
|  | **[HOST_ID_SIZE](sec2_8h.md#define-host-id-size)**  |
|  | **[KEY_TYPE_SIZE](sec2_8h.md#define-key-type-size)**  |
|  | **[LOCK_SIZE](sec2_8h.md#define-lock-size)**  |
|  | **[PIN_ENTRY_TYPE_SIZE](sec2_8h.md#define-pin-entry-type-size)**  |
|  | **[PIN_BLOCK_FORMAT_SIZE](sec2_8h.md#define-pin-block-format-size)**  |
|  | **[KEY_MANAGEMENT_SIZE](sec2_8h.md#define-key-management-size)**  |
|  | **[PIN_ALGORITHM_SIZE](sec2_8h.md#define-pin-algorithm-size)**  |
|  | **[PIN_TRY_FLAG_SIZE](sec2_8h.md#define-pin-try-flag-size)**  |
|  | **[TRANS_CURR_EXPONENT_SIZE](sec2_8h.md#define-trans-curr-exponent-size)**  |
|  | **[MAX_PIN_LENGTH_SIZE](sec2_8h.md#define-max-pin-length-size)**  |
|  | **[MIN_PIN_LENGTH_SIZE](sec2_8h.md#define-min-pin-length-size)**  |
|  | **[PIN_ENTRY_TIMEOUT_SIZE](sec2_8h.md#define-pin-entry-timeout-size)**  |
|  | **[PIN_CANCEL_SIZE](sec2_8h.md#define-pin-cancel-size)**  |
|  | **[USE_DEFAULT_CV_FLAG_SIZE](sec2_8h.md#define-use-default-cv-flag-size)**  |
|  | **[MAC_MODE_SIZE](sec2_8h.md#define-mac-mode-size)**  |
|  | **[HTML_FILE_PATH_SIZE](sec2_8h.md#define-html-file-path-size)**  |
|  | **[MACRO_PAN_SIZE](sec2_8h.md#define-macro-pan-size)**  |
|  | **[KEK_FLAG_SIZE](sec2_8h.md#define-kek-flag-size)**  |
|  | **[AS2805_FUNC_SIZE](sec2_8h.md#define-as2805-func-size)**  |
|  | **[DES_IV_SIZE](sec2_8h.md#define-des-iv-size)**  |
|  | **[POS_TIMEOUT_TS](sec2_8h.md#define-pos-timeout-ts)**  |
|  | **[ACTION_CODE_TS](sec2_8h.md#define-action-code-ts)**  |
|  | **[HOST_KEY_FILE_TS](sec2_8h.md#define-host-key-file-ts)**  |
|  | **[CODE_TS](sec2_8h.md#define-code-ts)**  |
|  | **[HOST_ID_TS](sec2_8h.md#define-host-id-ts)**  |
|  | **[KEY_TYPE_TS](sec2_8h.md#define-key-type-ts)**  |
|  | **[KEY_DATA_TS](sec2_8h.md#define-key-data-ts)**  |
|  | **[LOCK_TS](sec2_8h.md#define-lock-ts)**  |
|  | **[PAN_TS](sec2_8h.md#define-pan-ts)**  |
|  | **[STAN_TS](sec2_8h.md#define-stan-ts)**  |
|  | **[TRANS_AMOUNT_TS](sec2_8h.md#define-trans-amount-ts)**  |
|  | **[TRANS_CURR_CODE_TS](sec2_8h.md#define-trans-curr-code-ts)**  |
|  | **[TRANS_CURR_EXP_TS](sec2_8h.md#define-trans-curr-exp-ts)**  |
|  | **[PIN_BLOCK_FORMAT_TS](sec2_8h.md#define-pin-block-format-ts)**  |
|  | **[PIN_TRY_FLAG_TS](sec2_8h.md#define-pin-try-flag-ts)**  |
|  | **[ADD_SCREEN_TEXT_TS](sec2_8h.md#define-add-screen-text-ts)**  |
|  | **[ADD_SCREEN_TEXT_2_TS](sec2_8h.md#define-add-screen-text-2-ts)**  |
|  | **[MIN_PIN_LENGTH_TS](sec2_8h.md#define-min-pin-length-ts)**  |
|  | **[MAX_PIN_LENGTH_TS](sec2_8h.md#define-max-pin-length-ts)**  |
|  | **[PIN_ENTRY_TIMEOUT_TS](sec2_8h.md#define-pin-entry-timeout-ts)**  |
|  | **[MESS_FOR_MAC_TS](sec2_8h.md#define-mess-for-mac-ts)**  |
|  | **[MAC_TS](sec2_8h.md#define-mac-ts)**  |
|  | **[MESS_FOR_ENC_TS](sec2_8h.md#define-mess-for-enc-ts)**  |
|  | **[PIN_ENTRY_TYPE_TS](sec2_8h.md#define-pin-entry-type-ts)**  |
|  | **[KEY_MANAGEMENT_TS](sec2_8h.md#define-key-management-ts)**  |
|  | **[PIN_ALGORITHM_TS](sec2_8h.md#define-pin-algorithm-ts)**  |
|  | **[DATA_ALGORITHM_TS](sec2_8h.md#define-data-algorithm-ts)**  |
|  | **[KSN_TS](sec2_8h.md#define-ksn-ts)**  |
|  | **[TRANS_CAT_EXP_TS](sec2_8h.md#define-trans-cat-exp-ts)**  |
|  | **[PLAIN_TXT_PIN_BLOCK_TS](sec2_8h.md#define-plain-txt-pin-block-ts)**  |
|  | **[SCRIPT_NAME_TS](sec2_8h.md#define-script-name-ts)**  |
|  | **[PIN_CANCEL_TS](sec2_8h.md#define-pin-cancel-ts)**  |
|  | **[ONLINE_PIN_CIPHER_TS](sec2_8h.md#define-online-pin-cipher-ts)**  |
|  | **[MESS_FOR_DEC_TS](sec2_8h.md#define-mess-for-dec-ts)**  |
|  | **[FLAGS_TS](sec2_8h.md#define-flags-ts)**  |
|  | **[MSG_ENTER_PIN_TS](sec2_8h.md#define-msg-enter-pin-ts)**  |
|  | **[MSG_AMOUNT_TS](sec2_8h.md#define-msg-amount-ts)**  |
|  | **[MSG_FONT_FILE_TS](sec2_8h.md#define-msg-font-file-ts)**  |
|  | **[MONITOR_PERIOD_TS](sec2_8h.md#define-monitor-period-ts)**  |
|  | **[SCREEN_LINES_TS](sec2_8h.md#define-screen-lines-ts)**  |
|  | **[PROMPT_FILL_TS](sec2_8h.md#define-prompt-fill-ts)**  |
|  | **[DUKPT_MASK_TS](sec2_8h.md#define-dukpt-mask-ts)**  |
|  | **[AMOUNT_EMV_TS](sec2_8h.md#define-amount-emv-ts)**  |
|  | **[CURR_CODE_EMV_TS](sec2_8h.md#define-curr-code-emv-ts)**  |
|  | **[CURR_EXP_EMV_TS](sec2_8h.md#define-curr-exp-emv-ts)**  |
|  | **[DOUBLE_KEY_SIZE](sec2_8h.md#define-double-key-size)**  |
|  | **[MAPP_UNLOCK_DISPLAY](sec2_8h.md#define-mapp-unlock-display)**  |
|  | **[MAPP_LOCK_DISPLAY](sec2_8h.md#define-mapp-lock-display)**  |
|  | **[INSTALL_VSS_COM](sec2_8h.md#define-install-vss-com)**  |
|  | **[EXECUTE_VSS_MACRO_COM](sec2_8h.md#define-execute-vss-macro-com)**  |
|  | **[SC_PIPE_NAME](sec2_8h.md#define-sc-pipe-name)**  |
|  | **[CERTSTORE_PIPE_NAME](sec2_8h.md#define-certstore-pipe-name)**  |
|  | **[IPP_SET_SPEED](sec2_8h.md#define-ipp-set-speed)**  |
|  | **[CFG_FILE_NAME](sec2_8h.md#define-cfg-file-name)**  |
|  | **[CFG_FILE_NAME_DEF](sec2_8h.md#define-cfg-file-name-def)**  |
|  | **[SEC_DIG_LRC](sec2_8h.md#define-sec-dig-lrc)**  |
|  | **[SEC_DIG_CRC_CRC16LSB](sec2_8h.md#define-sec-dig-crc-crc16lsb)**  |
|  | **[SEC_DIG_CRC_CRC16MSB](sec2_8h.md#define-sec-dig-crc-crc16msb)**  |
|  | **[SEC_DIG_CRC_CCITTLSB](sec2_8h.md#define-sec-dig-crc-ccittlsb)**  |
|  | **[SEC_DIG_CRC_CCITTMSB](sec2_8h.md#define-sec-dig-crc-ccittmsb)**  |
|  | **[SEC_DIG_CRC_CRC32LSB_0](sec2_8h.md#define-sec-dig-crc-crc32lsb-0)**  |
|  | **[SEC_DIG_CRC_CRC32LSB](sec2_8h.md#define-sec-dig-crc-crc32lsb)**  |
|  | **[SEC_DIG_CRC_CRC16MSB_1](sec2_8h.md#define-sec-dig-crc-crc16msb-1)**  |
|  | **[SEC_DIG_CRC_CCITTMSB_1](sec2_8h.md#define-sec-dig-crc-ccittmsb-1)**  |
|  | **[SEC_DIG_SHA1](sec2_8h.md#define-sec-dig-sha1)**  |
|  | **[SEC_DIG_SHA256](sec2_8h.md#define-sec-dig-sha256)**  |
|  | **[KEY_TYPE_TPK_FOR_PIN](sec2_8h.md#define-key-type-tpk-for-pin)**  |
|  | **[KEY_TYPE_TAK_FOR_GEN_MAC](sec2_8h.md#define-key-type-tak-for-gen-mac)**  |
|  | **[KEY_TYPE_TPK_FOR_ENC_DATA](sec2_8h.md#define-key-type-tpk-for-enc-data)**  |
|  | **[KEY_TYPE_TAK_FOR_VER_MAC](sec2_8h.md#define-key-type-tak-for-ver-mac)**  |
|  | **[KEY_TYPE_TPK_FOR_DEC_DATA](sec2_8h.md#define-key-type-tpk-for-dec-data)**  |
|  | **[KEY_TYPE_TPK_FOR_KEK](sec2_8h.md#define-key-type-tpk-for-kek)**  |
|  | **[PIN_BLOCK_FORMAT_MIN](sec2_8h.md#define-pin-block-format-min)**  |
|  | **[PIN_BLOCK_FORMAT_MAX](sec2_8h.md#define-pin-block-format-max)**  |
|  | **[NEXT_KSN](sec2_8h.md#define-next-ksn)**  |
|  | **[SAME_KSN](sec2_8h.md#define-same-ksn)**  |
|  | **[VISADSP_NEXT_KSN](sec2_8h.md#define-visadsp-next-ksn)**  |
|  | **[VISADSP_SAME_KSN](sec2_8h.md#define-visadsp-same-ksn)**  |
|  | **[DO_KSN_INCREMENTATION](sec2_8h.md#define-do-ksn-incrementation)**  |

## Detailed Description

ADK Security Definitions. 

This header file contains preprocessor and data definitions of the ADK security service. 

## Types Documentation

### enum sec_cmd_code

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UPDATE_KEY_COM | =43|   |
| RETRIEVE_ENCRYPTED_PIN_COM | 26|   |
| GENERATE_MAC_COM | 44|   |
| VERIFY_MAC_COM | 45|   |
| ENCRYPT_DATA_COM | =46|   |
| DECRYPT_DATA_COM | =47|   |
| GET_KEY_DATA_COM | 54|   |
| GET_SVC_VERSION_COM | 60|   |
| OPEN_SCHEMA_COM | 62|   |
| CLOSE_SCHEMA_COM | 63|   |
| PUT_TRANSACTIONDATA_COM | 64|   |
| GET_KEY_INVENTORY_COM | 65|   |
| GET_TRANSACTION_VALUE | 66|   |
| GET_PERMISSION | 67|   |
| CLEAR_TRANSACTIONDATA_COM | 68|   |
| GET_STATUS_COM | 69|   |
| CRT_CHECK_CONN_COM | 70|   |
| CRT_GET_CERT_CHAIN_COM | 71|   |
| CRT_GET_KEY_COM | 72|   |
| CRT_UPDATE_CERT_COM | 73|   |
| CRT_UPDATE_KEY_COM | 74|   |
| CRT_GET_SVC_VERSION_COM | 75|   |







## Macros Documentation

### define CODE_UNLOCK

```cpp
#define CODE_UNLOCK (0)
```


### define CODE_LOCK

```cpp
#define CODE_LOCK (1)
```


### define CODE_ACTION

```cpp
#define CODE_ACTION (0x80)
```


### define RESP_CODE_SIZE

```cpp
#define RESP_CODE_SIZE ( 1)
```


### define RESP_CODE_SUCCESS

```cpp
#define RESP_CODE_SUCCESS (  0)
```


### define RESP_CODE_FAILED

```cpp
#define RESP_CODE_FAILED (  1)
```


### define RESP_CODE_TIMEOUT

```cpp
#define RESP_CODE_TIMEOUT (  2)
```


### define RESP_CODE_PIN_EQUAL

```cpp
#define RESP_CODE_PIN_EQUAL (  3)
```


### define RESP_CODE_HOST_NOT_FOUND

```cpp
#define RESP_CODE_HOST_NOT_FOUND (  4)
```


### define RESP_CODE_PIN_CANCEL

```cpp
#define RESP_CODE_PIN_CANCEL ( 20)
```


### define RESP_CODE_PIN_BYPASS

```cpp
#define RESP_CODE_PIN_BYPASS ( 21)
```


### define RESP_CODE_PIN_CANCELED_BY_CLEAR_KEY

```cpp
#define RESP_CODE_PIN_CANCELED_BY_CLEAR_KEY ( 22)
```


### define RESP_CODE_SIZE_ERROR

```cpp
#define RESP_CODE_SIZE_ERROR ( 23)
```


### define RESP_CODE_MAC_VER_FAILED

```cpp
#define RESP_CODE_MAC_VER_FAILED ( 24)
```


### define RESP_CODE_MSG_SIZE_TO_LONG

```cpp
#define RESP_CODE_MSG_SIZE_TO_LONG ( 25)
```


### define RESP_CODE_CMD_SEQ_ERROR

```cpp
#define RESP_CODE_CMD_SEQ_ERROR ( 26)
```


### define RESP_CODE_RETRY_LIMIT

```cpp
#define RESP_CODE_RETRY_LIMIT ( 31)
```


### define RESP_CODE_INVALID_REQ

```cpp
#define RESP_CODE_INVALID_REQ ( 35)
```


### define RESP_CODE_API_REQ

```cpp
#define RESP_CODE_API_REQ ( 36)
```


### define RESP_CODE_INVALID_CMD

```cpp
#define RESP_CODE_INVALID_CMD ( 37)
```


### define RESP_CODE_INVALID_LOCAL_KEY_IDX

```cpp
#define RESP_CODE_INVALID_LOCAL_KEY_IDX ( 40)
```


### define RESP_CODE_UPDATE_KEY_FAILED

```cpp
#define RESP_CODE_UPDATE_KEY_FAILED ( 41)
```


### define RESP_CODE_TRANSPORT_KEYS_CHANGED

```cpp
#define RESP_CODE_TRANSPORT_KEYS_CHANGED ( 42)
```


### define RESP_CODE_KEY_UPDATE_LIMIT

```cpp
#define RESP_CODE_KEY_UPDATE_LIMIT ( 43)
```


### define RESP_CODE_INVALID_KEY

```cpp
#define RESP_CODE_INVALID_KEY ( 45)
```


### define RESP_CODE_PIN_BLOCKED

```cpp
#define RESP_CODE_PIN_BLOCKED ( 90)
```


### define RESP_CODE_PIN_GET_CHALLENGE_ERROR

```cpp
#define RESP_CODE_PIN_GET_CHALLENGE_ERROR ( 91)
```


### define RESP_CODE_PIN_ENCIPHER_ERROR

```cpp
#define RESP_CODE_PIN_ENCIPHER_ERROR ( 92)
```


### define RESP_CODE_PIN_VERIFY_FAILED

```cpp
#define RESP_CODE_PIN_VERIFY_FAILED ( 93)
```


### define RESP_CODE_PIN_MISSING_PIN_BLOCK_DATA

```cpp
#define RESP_CODE_PIN_MISSING_PIN_BLOCK_DATA ( 94)
```


### define RESP_CODE_INVALID_KEY_LENGTH

```cpp
#define RESP_CODE_INVALID_KEY_LENGTH ( 95)
```


### define RESP_CODE_MISSING_TMK_OR_DUKPT_KEY

```cpp
#define RESP_CODE_MISSING_TMK_OR_DUKPT_KEY ( 96)
```


### define RESP_CODE_MISSING_TPK_OR_TAK

```cpp
#define RESP_CODE_MISSING_TPK_OR_TAK ( 97)
```


### define RESP_CODE_MISSING_STAN_OR_PAN

```cpp
#define RESP_CODE_MISSING_STAN_OR_PAN ( 98)
```


### define RESP_CODE_ADE_NOT_ACTIVE

```cpp
#define RESP_CODE_ADE_NOT_ACTIVE ( 99)
```


### define RESP_CODE_CARD_REMOVED

```cpp
#define RESP_CODE_CARD_REMOVED (100)
```


### define RESP_CODE_TAMPERED

```cpp
#define RESP_CODE_TAMPERED (101)
```


### define RESP_CODE_NOT_SUPPORTED_KSID

```cpp
#define RESP_CODE_NOT_SUPPORTED_KSID (102)
```


### define RESP_CODE_NOT_SUPPORTED_KEY_TYPE

```cpp
#define RESP_CODE_NOT_SUPPORTED_KEY_TYPE (103)
```


### define RESP_CODE_ASYNC_PIN_NOT_READY

```cpp
#define RESP_CODE_ASYNC_PIN_NOT_READY (104)
```


### define RESP_CODE_CRYPTO_DEVICE_BLOCKED

```cpp
#define RESP_CODE_CRYPTO_DEVICE_BLOCKED (105)
```


### define RESP_CODE_KSN_INCREMENTATION_ERROR

```cpp
#define RESP_CODE_KSN_INCREMENTATION_ERROR (106)
```


### define RESP_CODE_CMD_BUSY

```cpp
#define RESP_CODE_CMD_BUSY (249)
```


### define RESP_CODE_INVALID_APP_ID

```cpp
#define RESP_CODE_INVALID_APP_ID (250)
```


### define RESP_CODE_POS_INVALID_FIELD_LEN

```cpp
#define RESP_CODE_POS_INVALID_FIELD_LEN (251)
```


### define RESP_CODE_POS_MSG_LEN

```cpp
#define RESP_CODE_POS_MSG_LEN (252)
```


### define RESP_CODE_UNKNOWN_CMD

```cpp
#define RESP_CODE_UNKNOWN_CMD (253)
```


### define RESP_CODE_INVAL

```cpp
#define RESP_CODE_INVAL (254)
```


### define RESP_ADE_NOT_ACTIVE

```cpp
#define RESP_ADE_NOT_ACTIVE RESP_CODE_ADE_NOT_ACTIVE
```


### define ADD_SCREEN_TEXT

```cpp
#define ADD_SCREEN_TEXT (16)
```


### define ACTION_CODE_SIZE

```cpp
#define ACTION_CODE_SIZE ( 1)
```


### define COMMAND_SIZE

```cpp
#define COMMAND_SIZE ( 1)
```


### define DATA_ALGORITHM_SIZE

```cpp
#define DATA_ALGORITHM_SIZE ( 1)
```


### define PAN_SIZE

```cpp
#define PAN_SIZE (10)
```


### define STAN_SIZE

```cpp
#define STAN_SIZE ( 6)
```


### define TRANS_AMOUNT_SIZE

```cpp
#define TRANS_AMOUNT_SIZE ( 6)
```


### define TRANS_CURR_CODE_SIZE

```cpp
#define TRANS_CURR_CODE_SIZE ( 2)
```


### define ONLINE_PIN_CIPHER_BLOCK_SIZE

```cpp
#define ONLINE_PIN_CIPHER_BLOCK_SIZE ( 8)
```


### define KSN_SIZE

```cpp
#define KSN_SIZE (10)
```


### define AES_KSN_SIZE

```cpp
#define AES_KSN_SIZE (12)
```


### define POS_TIMEOUT_SIZE

```cpp
#define POS_TIMEOUT_SIZE ( 1)
```


### define HOST_ID_SIZE

```cpp
#define HOST_ID_SIZE ( 1)
```


### define KEY_TYPE_SIZE

```cpp
#define KEY_TYPE_SIZE ( 1)
```


### define LOCK_SIZE

```cpp
#define LOCK_SIZE ( 1)
```


### define PIN_ENTRY_TYPE_SIZE

```cpp
#define PIN_ENTRY_TYPE_SIZE ( 1)
```


### define PIN_BLOCK_FORMAT_SIZE

```cpp
#define PIN_BLOCK_FORMAT_SIZE ( 1)
```


### define KEY_MANAGEMENT_SIZE

```cpp
#define KEY_MANAGEMENT_SIZE ( 1)
```


### define PIN_ALGORITHM_SIZE

```cpp
#define PIN_ALGORITHM_SIZE ( 1)
```


### define PIN_TRY_FLAG_SIZE

```cpp
#define PIN_TRY_FLAG_SIZE ( 1)
```


### define TRANS_CURR_EXPONENT_SIZE

```cpp
#define TRANS_CURR_EXPONENT_SIZE ( 1)
```


### define MAX_PIN_LENGTH_SIZE

```cpp
#define MAX_PIN_LENGTH_SIZE ( 1)
```


### define MIN_PIN_LENGTH_SIZE

```cpp
#define MIN_PIN_LENGTH_SIZE ( 1)
```


### define PIN_ENTRY_TIMEOUT_SIZE

```cpp
#define PIN_ENTRY_TIMEOUT_SIZE ( 2)
```


### define PIN_CANCEL_SIZE

```cpp
#define PIN_CANCEL_SIZE ( 1)
```


### define USE_DEFAULT_CV_FLAG_SIZE

```cpp
#define USE_DEFAULT_CV_FLAG_SIZE ( 1)
```


### define MAC_MODE_SIZE

```cpp
#define MAC_MODE_SIZE ( 1)
```


### define HTML_FILE_PATH_SIZE

```cpp
#define HTML_FILE_PATH_SIZE (128)
```


### define MACRO_PAN_SIZE

```cpp
#define MACRO_PAN_SIZE ( 6)
```


### define KEK_FLAG_SIZE

```cpp
#define KEK_FLAG_SIZE ( 1)
```


### define AS2805_FUNC_SIZE

```cpp
#define AS2805_FUNC_SIZE ( 1)
```


### define DES_IV_SIZE

```cpp
#define DES_IV_SIZE ( 8)
```


### define POS_TIMEOUT_TS

```cpp
#define POS_TIMEOUT_TS (2)
```


### define ACTION_CODE_TS

```cpp
#define ACTION_CODE_TS (2)
```


### define HOST_KEY_FILE_TS

```cpp
#define HOST_KEY_FILE_TS (3)
```


### define CODE_TS

```cpp
#define CODE_TS (2)
```


### define HOST_ID_TS

```cpp
#define HOST_ID_TS (2)
```


### define KEY_TYPE_TS

```cpp
#define KEY_TYPE_TS (2)
```


### define KEY_DATA_TS

```cpp
#define KEY_DATA_TS (2)
```


### define LOCK_TS

```cpp
#define LOCK_TS (3)
```


### define PAN_TS

```cpp
#define PAN_TS (2)
```


### define STAN_TS

```cpp
#define STAN_TS (2)
```


### define TRANS_AMOUNT_TS

```cpp
#define TRANS_AMOUNT_TS (2)
```


### define TRANS_CURR_CODE_TS

```cpp
#define TRANS_CURR_CODE_TS (2)
```


### define TRANS_CURR_EXP_TS

```cpp
#define TRANS_CURR_EXP_TS (2)
```


### define PIN_BLOCK_FORMAT_TS

```cpp
#define PIN_BLOCK_FORMAT_TS (3)
```


### define PIN_TRY_FLAG_TS

```cpp
#define PIN_TRY_FLAG_TS (2)
```


### define ADD_SCREEN_TEXT_TS

```cpp
#define ADD_SCREEN_TEXT_TS (3)
```


### define ADD_SCREEN_TEXT_2_TS

```cpp
#define ADD_SCREEN_TEXT_2_TS (3)
```


### define MIN_PIN_LENGTH_TS

```cpp
#define MIN_PIN_LENGTH_TS (3)
```


### define MAX_PIN_LENGTH_TS

```cpp
#define MAX_PIN_LENGTH_TS (3)
```


### define PIN_ENTRY_TIMEOUT_TS

```cpp
#define PIN_ENTRY_TIMEOUT_TS (3)
```


### define MESS_FOR_MAC_TS

```cpp
#define MESS_FOR_MAC_TS (2)
```


### define MAC_TS

```cpp
#define MAC_TS (2)
```


### define MESS_FOR_ENC_TS

```cpp
#define MESS_FOR_ENC_TS (2)
```


### define PIN_ENTRY_TYPE_TS

```cpp
#define PIN_ENTRY_TYPE_TS (2)
```


### define KEY_MANAGEMENT_TS

```cpp
#define KEY_MANAGEMENT_TS (3)
```


### define PIN_ALGORITHM_TS

```cpp
#define PIN_ALGORITHM_TS (3)
```


### define DATA_ALGORITHM_TS

```cpp
#define DATA_ALGORITHM_TS (3)
```


### define KSN_TS

```cpp
#define KSN_TS (3)
```


### define TRANS_CAT_EXP_TS

```cpp
#define TRANS_CAT_EXP_TS (2)
```


### define PLAIN_TXT_PIN_BLOCK_TS

```cpp
#define PLAIN_TXT_PIN_BLOCK_TS (3)
```


### define SCRIPT_NAME_TS

```cpp
#define SCRIPT_NAME_TS (3)
```


### define PIN_CANCEL_TS

```cpp
#define PIN_CANCEL_TS (3)
```


### define ONLINE_PIN_CIPHER_TS

```cpp
#define ONLINE_PIN_CIPHER_TS (2)
```


### define MESS_FOR_DEC_TS

```cpp
#define MESS_FOR_DEC_TS (3)
```


### define FLAGS_TS

```cpp
#define FLAGS_TS (3)
```


### define MSG_ENTER_PIN_TS

```cpp
#define MSG_ENTER_PIN_TS (3)
```


### define MSG_AMOUNT_TS

```cpp
#define MSG_AMOUNT_TS (3)
```


### define MSG_FONT_FILE_TS

```cpp
#define MSG_FONT_FILE_TS (3)
```


### define MONITOR_PERIOD_TS

```cpp
#define MONITOR_PERIOD_TS (3)
```


### define SCREEN_LINES_TS

```cpp
#define SCREEN_LINES_TS (3)
```


### define PROMPT_FILL_TS

```cpp
#define PROMPT_FILL_TS (3)
```


### define DUKPT_MASK_TS

```cpp
#define DUKPT_MASK_TS (3)
```


### define AMOUNT_EMV_TS

```cpp
#define AMOUNT_EMV_TS (2)
```


### define CURR_CODE_EMV_TS

```cpp
#define CURR_CODE_EMV_TS (2)
```


### define CURR_EXP_EMV_TS

```cpp
#define CURR_EXP_EMV_TS (2)
```


### define DOUBLE_KEY_SIZE

```cpp
#define DOUBLE_KEY_SIZE (32)
```


### define MAPP_UNLOCK_DISPLAY

```cpp
#define MAPP_UNLOCK_DISPLAY (57)
```


### define MAPP_LOCK_DISPLAY

```cpp
#define MAPP_LOCK_DISPLAY (58)
```


### define INSTALL_VSS_COM

```cpp
#define INSTALL_VSS_COM (160)
```


### define EXECUTE_VSS_MACRO_COM

```cpp
#define EXECUTE_VSS_MACRO_COM (161)
```


### define SC_PIPE_NAME

```cpp
#define SC_PIPE_NAME "/tmp/scdata";
```


### define CERTSTORE_PIPE_NAME

```cpp
#define CERTSTORE_PIPE_NAME "/tmp/csdata";
```


### define IPP_SET_SPEED

```cpp
#define IPP_SET_SPEED "IPP19K"
```


### define CFG_FILE_NAME

```cpp
#define CFG_FILE_NAME "SCAPPCFG"
```


### define CFG_FILE_NAME_DEF

```cpp
#define CFG_FILE_NAME_DEF "sccfg.json"
```


### define SEC_DIG_LRC

```cpp
#define SEC_DIG_LRC 0x00
```


### define SEC_DIG_CRC_CRC16LSB

```cpp
#define SEC_DIG_CRC_CRC16LSB 0x01
```


### define SEC_DIG_CRC_CRC16MSB

```cpp
#define SEC_DIG_CRC_CRC16MSB 0x02
```


### define SEC_DIG_CRC_CCITTLSB

```cpp
#define SEC_DIG_CRC_CCITTLSB 0x03
```


### define SEC_DIG_CRC_CCITTMSB

```cpp
#define SEC_DIG_CRC_CCITTMSB 0x04
```


### define SEC_DIG_CRC_CRC32LSB_0

```cpp
#define SEC_DIG_CRC_CRC32LSB_0 0x05
```


### define SEC_DIG_CRC_CRC32LSB

```cpp
#define SEC_DIG_CRC_CRC32LSB 0x06
```


### define SEC_DIG_CRC_CRC16MSB_1

```cpp
#define SEC_DIG_CRC_CRC16MSB_1 0x07
```


### define SEC_DIG_CRC_CCITTMSB_1

```cpp
#define SEC_DIG_CRC_CCITTMSB_1 0x08
```


### define SEC_DIG_SHA1

```cpp
#define SEC_DIG_SHA1 0x10
```


### define SEC_DIG_SHA256

```cpp
#define SEC_DIG_SHA256 0x11
```


### define KEY_TYPE_TPK_FOR_PIN

```cpp
#define KEY_TYPE_TPK_FOR_PIN KEY_TYPE_PPK
```


Data type definitions 


### define KEY_TYPE_TAK_FOR_GEN_MAC

```cpp
#define KEY_TYPE_TAK_FOR_GEN_MAC KEY_TYPE_MGK
```


### define KEY_TYPE_TPK_FOR_ENC_DATA

```cpp
#define KEY_TYPE_TPK_FOR_ENC_DATA KEY_TYPE_DEK
```


### define KEY_TYPE_TAK_FOR_VER_MAC

```cpp
#define KEY_TYPE_TAK_FOR_VER_MAC KEY_TYPE_MVK
```


### define KEY_TYPE_TPK_FOR_DEC_DATA

```cpp
#define KEY_TYPE_TPK_FOR_DEC_DATA KEY_TYPE_DDK
```


### define KEY_TYPE_TPK_FOR_KEK

```cpp
#define KEY_TYPE_TPK_FOR_KEK KEY_TYPE_KEK
```


### define PIN_BLOCK_FORMAT_MIN

```cpp
#define PIN_BLOCK_FORMAT_MIN (PIN_BLOCK_FORMAT_ISO0_E)
```


### define PIN_BLOCK_FORMAT_MAX

```cpp
#define PIN_BLOCK_FORMAT_MAX (PIN_BLOCK_FORMAT_INC_KSN)
```


### define NEXT_KSN

```cpp
#define NEXT_KSN 1
```


KSN key state definition KSN key state: get next KSN/key 


### define SAME_KSN

```cpp
#define SAME_KSN 2
```


KSN key state: use same KSN/key 


### define VISADSP_NEXT_KSN

```cpp
#define VISADSP_NEXT_KSN NEXT_KSN
```


### define VISADSP_SAME_KSN

```cpp
#define VISADSP_SAME_KSN SAME_KSN
```


### define DO_KSN_INCREMENTATION

```cpp
#define DO_KSN_INCREMENTATION "KSN incrementation"
```


## Source code

```cpp
#ifndef SEC_H
#define SEC_H

#include <stdint.h>

/***************************************************************************
 * Includes
 **************************************************************************/

/***************************************************************************
 * Using
 **************************************************************************/

/***************************************************************************
 * Module namspace: begin
 **************************************************************************/

/***************************************************************************
* Preprocessor constant definitions
**************************************************************************/

#define CODE_UNLOCK  (0)
#define CODE_LOCK    (1)

#define CODE_ACTION  (0x80)

#define RESP_CODE_SIZE   ( 1)

#define RESP_CODE_SUCCESS                    (  0)
#define RESP_CODE_FAILED                     (  1)
#define RESP_CODE_TIMEOUT                    (  2)
#define RESP_CODE_PIN_EQUAL                  (  3)
#define RESP_CODE_HOST_NOT_FOUND             (  4)

#define RESP_CODE_PIN_CANCEL                 ( 20)
#define RESP_CODE_PIN_BYPASS                 ( 21)
#define RESP_CODE_PIN_CANCELED_BY_CLEAR_KEY  ( 22)
#define RESP_CODE_SIZE_ERROR                 ( 23)
#define RESP_CODE_MAC_VER_FAILED             ( 24)
#define RESP_CODE_MSG_SIZE_TO_LONG           ( 25)
#define RESP_CODE_CMD_SEQ_ERROR              ( 26)
#define RESP_CODE_RETRY_LIMIT                ( 31)
#define RESP_CODE_INVALID_REQ                ( 35)
#define RESP_CODE_API_REQ                    ( 36)
#define RESP_CODE_INVALID_CMD                ( 37)
#define RESP_CODE_INVALID_LOCAL_KEY_IDX      ( 40)
#define RESP_CODE_UPDATE_KEY_FAILED          ( 41)
#define RESP_CODE_TRANSPORT_KEYS_CHANGED     ( 42)
#define RESP_CODE_KEY_UPDATE_LIMIT           ( 43)
#define RESP_CODE_INVALID_KEY                ( 45)
#define RESP_CODE_PIN_BLOCKED                ( 90)
#define RESP_CODE_PIN_GET_CHALLENGE_ERROR    ( 91)
#define RESP_CODE_PIN_ENCIPHER_ERROR         ( 92)
#define RESP_CODE_PIN_VERIFY_FAILED          ( 93)
#define RESP_CODE_PIN_MISSING_PIN_BLOCK_DATA ( 94)
#define RESP_CODE_INVALID_KEY_LENGTH         ( 95)
#define RESP_CODE_MISSING_TMK_OR_DUKPT_KEY   ( 96)
#define RESP_CODE_MISSING_TPK_OR_TAK         ( 97)
#define RESP_CODE_MISSING_STAN_OR_PAN        ( 98)
#define RESP_CODE_ADE_NOT_ACTIVE             ( 99)
#define RESP_CODE_CARD_REMOVED               (100)
#define RESP_CODE_TAMPERED                   (101)
#define RESP_CODE_NOT_SUPPORTED_KSID         (102)
#define RESP_CODE_NOT_SUPPORTED_KEY_TYPE     (103)
#define RESP_CODE_ASYNC_PIN_NOT_READY        (104)
#define RESP_CODE_CRYPTO_DEVICE_BLOCKED      (105)
#define RESP_CODE_KSN_INCREMENTATION_ERROR   (106)

#define RESP_CODE_CMD_BUSY                   (249)
#define RESP_CODE_INVALID_APP_ID             (250)
#define RESP_CODE_POS_INVALID_FIELD_LEN      (251)
#define RESP_CODE_POS_MSG_LEN                (252)
#define RESP_CODE_UNKNOWN_CMD                (253)
#define RESP_CODE_INVAL                      (254)

#define RESP_ADE_NOT_ACTIVE                  RESP_CODE_ADE_NOT_ACTIVE



#define ADD_SCREEN_TEXT          (16)
#define ACTION_CODE_SIZE         ( 1)
#define COMMAND_SIZE             ( 1)
#define DATA_ALGORITHM_SIZE      ( 1)
#define PAN_SIZE                 (10)
#define STAN_SIZE                ( 6)
#define TRANS_AMOUNT_SIZE        ( 6)
#define TRANS_CURR_CODE_SIZE     ( 2)
#define ONLINE_PIN_CIPHER_BLOCK_SIZE    ( 8)
#define KSN_SIZE                 (10)
#define AES_KSN_SIZE             (12)
#define POS_TIMEOUT_SIZE         ( 1)
#define HOST_ID_SIZE             ( 1)
#define KEY_TYPE_SIZE            ( 1)
#define LOCK_SIZE                ( 1)
#define PIN_ENTRY_TYPE_SIZE      ( 1)
#define PIN_BLOCK_FORMAT_SIZE    ( 1)
#define KEY_MANAGEMENT_SIZE      ( 1)
#define PIN_ALGORITHM_SIZE       ( 1)
#define PIN_TRY_FLAG_SIZE        ( 1)
#define TRANS_CURR_EXPONENT_SIZE ( 1)
#define MAX_PIN_LENGTH_SIZE      ( 1)
#define MIN_PIN_LENGTH_SIZE      ( 1)
#define PIN_ENTRY_TIMEOUT_SIZE   ( 2)
#define PIN_CANCEL_SIZE          ( 1)
#define USE_DEFAULT_CV_FLAG_SIZE ( 1)
#define MAC_MODE_SIZE            ( 1)
#define HTML_FILE_PATH_SIZE      (128)

#define MACRO_PAN_SIZE           ( 6)

#define KEK_FLAG_SIZE            ( 1)
#define AS2805_FUNC_SIZE         ( 1)
#define DES_IV_SIZE              ( 8)

#define POS_TIMEOUT_TS         (2)
#define ACTION_CODE_TS         (2)
#define HOST_KEY_FILE_TS       (3)
#define CODE_TS                (2)
#define HOST_ID_TS             (2)
#define KEY_TYPE_TS            (2)
#define KEY_DATA_TS            (2)
#define LOCK_TS                (3)
#define PAN_TS                 (2)
#define STAN_TS                (2)
#define TRANS_AMOUNT_TS        (2)
#define TRANS_CURR_CODE_TS     (2)
#define TRANS_CURR_EXP_TS      (2)
#define PIN_BLOCK_FORMAT_TS    (3)
#define PIN_TRY_FLAG_TS        (2)
#define ADD_SCREEN_TEXT_TS     (3)
#define ADD_SCREEN_TEXT_2_TS   (3)
#define MIN_PIN_LENGTH_TS      (3)
#define MAX_PIN_LENGTH_TS      (3)
#define PIN_ENTRY_TIMEOUT_TS   (3)
#define MESS_FOR_MAC_TS        (2)
#define MAC_TS                 (2)
#define MESS_FOR_ENC_TS        (2)
#define PIN_ENTRY_TYPE_TS      (2)
#define KEY_MANAGEMENT_TS      (3)
#define PIN_ALGORITHM_TS       (3)
#define DATA_ALGORITHM_TS      (3)
#define KSN_TS                 (3)
#define TRANS_CAT_EXP_TS       (2)
#define PLAIN_TXT_PIN_BLOCK_TS (3)
#define SCRIPT_NAME_TS         (3)
#define PIN_CANCEL_TS          (3)
#define ONLINE_PIN_CIPHER_TS   (2)
#define MESS_FOR_DEC_TS        (3)
#define FLAGS_TS               (3)
#define MSG_ENTER_PIN_TS       (3)
#define MSG_AMOUNT_TS          (3)
#define MSG_FONT_FILE_TS       (3)
#define MONITOR_PERIOD_TS      (3)
#define SCREEN_LINES_TS        (3)
#define PROMPT_FILL_TS         (3)
#define DUKPT_MASK_TS          (3)


/*
#define ENTER_AND_ENCRYPT_PIN_COM  (24)
#define ENTER_AND_HOLD_PIN_COM     (25)

#define CANCEL_PIN_COM             (27)
//#define CANCEL_PROCESS_COM         (36)
//#define LOCK_CANCEL_PROCESS_COM    (37)
#define LOAD_DUKPT_COM             (41)
#define SELECT_HOST_CONF_COM       (42)

#define SET_SECURITY_CONF_COM      (48)
#define GET_SECURITY_CONF_COM      (49)
#define INCREMENT_KSN_COM          (50)
//#define DECRYPT_STREAM_COM         (51)
//#define ENCRYPT_STREAM_COM         (52)
//#define WAIT_FOR_CARD              (53)
//#define RESET_EXTERNAL_READER      (54)
#define AS2805_KEY_MGMENT_COM      (55)
#define SET_DUKPT_MASK_COM         (59)
#define GET_VSS_FILE_NAMES_COM     (61)
*/

enum sec_cmd_code
{
    UPDATE_KEY_COM =43,
    RETRIEVE_ENCRYPTED_PIN_COM = 26,
    GENERATE_MAC_COM = 44,
    VERIFY_MAC_COM = 45,
    ENCRYPT_DATA_COM=46,
    DECRYPT_DATA_COM=47,
    GET_KEY_DATA_COM = 54,
    GET_SVC_VERSION_COM = 60,
    OPEN_SCHEMA_COM = 62,
    CLOSE_SCHEMA_COM = 63,
    PUT_TRANSACTIONDATA_COM = 64,
    GET_KEY_INVENTORY_COM = 65,
    GET_TRANSACTION_VALUE = 66,
    GET_PERMISSION = 67,
    CLEAR_TRANSACTIONDATA_COM = 68,
    GET_STATUS_COM = 69,

    CRT_CHECK_CONN_COM = 70,
    CRT_GET_CERT_CHAIN_COM = 71,
    CRT_GET_KEY_COM = 72,
    CRT_UPDATE_CERT_COM = 73,
    CRT_UPDATE_KEY_COM = 74,
    CRT_GET_SVC_VERSION_COM = 75,
};


#define AMOUNT_EMV_TS         (2)
#define CURR_CODE_EMV_TS      (2)
#define CURR_EXP_EMV_TS       (2)

#define DOUBLE_KEY_SIZE (32)


#define MAPP_UNLOCK_DISPLAY   (57)
#define MAPP_LOCK_DISPLAY     (58)

#define INSTALL_VSS_COM       (160)
#define EXECUTE_VSS_MACRO_COM   (161)

#ifndef _VRXEVO
  #define SC_PIPE_NAME          "/tmp/scdata";
  #define CERTSTORE_PIPE_NAME   "/tmp/csdata";
#else
  #define SC_PIPE_NAME          "scdata";
  #define CERTSTORE_PIPE_NAME   "csdata";
  #define DRIVE_RAM         "I:"
  #define DRIVE_FLASH       "F:"
#endif

// environment variables
//#define LOGMASK_VALUE       "SEC_LOGMASK"
#define IPP_SET_SPEED       "IPP19K"
#define CFG_FILE_NAME       "SCAPPCFG"
#define CFG_FILE_NAME_DEF   "sccfg.json"


// Calculation basic parameters used by secDigits() for LRC/CRC:
//    Width of crc in bits (8, 16 or 32)
//    Generator polynomial (poly)
//    Initialization value (init=0 or -1 here)
//    Whether input bytes are reflected (refin=1) or not (refin=0) before being used
//    Whether the output crc is reflected (refot=1) or not (refot=0) at end of calculation
//    A value to exclusive-or to the final crc (xorot=0 or -1 here)
//
// Finally a check value (chk) is supplied to show the result of applying the alogorithm
// to the 9 byte ascii test message "123456789"

#define SEC_DIG_LRC            0x00 // width=8, poly=0x01,      init=0, refin=0,refot=0,xorot=0, chk=0x31
#define SEC_DIG_CRC_CRC16LSB   0x01 // width=16,poly=0xa001,    init=0, refin=0,refot=0,xorot=0, chk=0xa47b
#define SEC_DIG_CRC_CRC16MSB   0x02 // width=16,poly=0x8005,    init=0, refin=0,refot=0,xorot=0, chk=0xfee8;      CRC-16/BUYPASS
#define SEC_DIG_CRC_CCITTLSB   0x03 // width=16,poly=0x8408,    init=-1,refin=0,refot=0,xorot=0, chk=0x0520
#define SEC_DIG_CRC_CCITTMSB   0x04 // width=16,poly=0x1021,    init=-1,refin=0,refot=0,xorot=0, chk=0x29b1;      CRC-16/CCITT-FALSE
#define SEC_DIG_CRC_CRC32LSB_0 0x05 // width=32,poly=0x04c11db7,init=0, refin=1,refot=1,xorot=0, chk=0x2dfd2d88
#define SEC_DIG_CRC_CRC32LSB   0x06 // width=32,poly=0x04c11db7,init=-1,refin=1,refot=1,xorot=-1,chk=0xcbf43926;  CRC-32
#define SEC_DIG_CRC_CRC16MSB_1 0x07 // width=16,poly=0x8005,    init=0, refin=1,refot=1,xorot=0, chk=0xbb3d;      CRC-16/ARC
#define SEC_DIG_CRC_CCITTMSB_1 0x08 // width=16,poly=0x1021,    init=-1,refin=1,refot=1,xorot=0, chk=0x6f91;      CRC-16/MCRF4XX

#define SEC_DIG_SHA1           0x10
#define SEC_DIG_SHA256         0x11
//#define SEC_DIG_SHA512         0x12

namespace com_verifone_host
{

/***************************************************************************
 * Macro definitions
 **************************************************************************/

/***************************************************************************
 * Data type definitions
 **************************************************************************/
  // for backward compatibility
  #define KEY_TYPE_TPK_FOR_PIN       KEY_TYPE_PPK
  #define KEY_TYPE_TAK_FOR_GEN_MAC   KEY_TYPE_MGK
  #define KEY_TYPE_TPK_FOR_ENC_DATA  KEY_TYPE_DEK
  #define KEY_TYPE_TAK_FOR_VER_MAC   KEY_TYPE_MVK
  #define KEY_TYPE_TPK_FOR_DEC_DATA  KEY_TYPE_DDK
  #define KEY_TYPE_TPK_FOR_KEK       KEY_TYPE_KEK

  enum key_type_e
  {
    KEY_TYPE__INVALID_E        = -1,  
    KEY_TYPE_TMK               = 0,  
    KEY_TYPE_PPK               = 1,  
    KEY_TYPE_MGK               = 2,  
    KEY_TYPE_DEK               = 3,  
    KEY_TYPE_TCU_PK            = 4,  
    KEY_TYPE_SPONSOR_PK        = 5,  
    KEY_TYPE_SPONSOR_MK        = 6,  
    KEY_TYPE_SPONSOR_KI        = 7,  
    KEY_TYPE_SEC_ACQ_KI        = 8,  
    KEY_TYPE_ACQUIRER_MK       = 9,  
    KEY_TYPE_SEC_ACQ_MK        = 10, 
    KEY_TYPE_ACQ_SESSION_KEYS  = 11, 
    KEY_TYPE_ENC_KI_FMT_0      = 12, 
    KEY_TYPE_ENC_KI_FMT_1      = 13, 
    KEY_TYPE_ENC_KI_FMT_2      = 14, 
    KEY_TYPE_ENC_PPID          = 15, 
    KEY_TYPE_ENC_PPASN         = 16, 
    KEY_TYPE_KVC_KIA           = 17, 
    KEY_TYPE_KVC_KEK1          = 18, 
    KEY_TYPE_MVK               = 19, 
    KEY_TYPE_DDK               = 20, 
    KEY_TYPE_KEK               = 21, 
    KEY_TYPE_DUKPT             = 22, 
    KEY_TYPE_CERT              = 23, 
    KEY_TYPE_DIRECT_MK_PLAIN   = 24, 
    KEY_TYPE_DIRECT_MK_ENC     = 25, 
    KEY_TYPE_DIRECT_SYSK_PLAIN = 26, 
    KEY_TYPE_DIRECT_SYSK_ENC   = 27, 
    KEY_TYPE_DELETE_ALL_KEYS   = 28, 
    KEY_TYPE_DELETE_SYS_KEY    = 29, 
    KEY_TYPE_DIRECT_AUTHEX_ENC = 30, 
    KEY_TYPE_DIRECT_AUTHEX_SYSK= 31, 
    KEY_TYPE_DELETE_ALL_CUST_KEYS = 32, 
    KEY_TYPE_DIRECT_CUSTOM_ASYM      = 33, 
    KEY_TYPE_DIRECT_CUSTOM_ASYM_SYSK = 34, 
};
  typedef uint8_t  key_type_t;



  typedef enum pin_entry_type_e
  {
    PIN_ENTRY_TYPE__INVALID_E             = -1, 
    PIN_ENTRY_TYPE_MANDATORY_E            = 0,  
    PIN_ENTRY_TYPE_OPTIONAL_E             = 1,  
    PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_ENC_E = 2,  
    PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_E     = 3   
  } pin_entry_type_t;


  typedef enum pin_block_format_e
  {
    PIN_BLOCK_FORMAT__INVALID_E = -1,   
    PIN_BLOCK_FORMAT_ISO0_E     = 0,    
    PIN_BLOCK_FORMAT_ISO1_E     = 1,    
    PIN_BLOCK_FORMAT_ISO2_E     = 2,    
    PIN_BLOCK_FORMAT_ISO3_E     = 3,    
    PIN_BLOCK_FORMAT_ISO4_E     = 4,    
    PIN_BLOCK_FORMAT_INC_KSN    = 4,    
  } pin_block_format_t;

#define PIN_BLOCK_FORMAT_MIN (PIN_BLOCK_FORMAT_ISO0_E)
#define PIN_BLOCK_FORMAT_MAX (PIN_BLOCK_FORMAT_INC_KSN)


#define NEXT_KSN      1  
#define SAME_KSN      2  
#define VISADSP_NEXT_KSN      NEXT_KSN
#define VISADSP_SAME_KSN      SAME_KSN

#define DO_KSN_INCREMENTATION   "KSN incrementation"


/***************************************************************************
 * Exported variable declarations
 **************************************************************************/

/***************************************************************************
 * Exported class declarations
 **************************************************************************/

/***************************************************************************
 * Module namspace: end
 **************************************************************************/
}

#endif // SEC_H
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

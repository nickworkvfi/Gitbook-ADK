---
title: sdi/src/titusstubs.cpp

---

# sdi/src/titusstubs.cpp



## Namespaces

| Name           |
| -------------- |
| **[vfigui](namespacevfigui.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[rawData](structraw_data.md)**  |
| struct | **[discoveryParams](structdiscovery_params.md)**  |
| struct | **[activateParams](structactivate_params.md)**  |
| struct | **[discoveryResult](structdiscovery_result.md)**  |
| struct | **[_cardInfo](struct__card_info.md)**  |
| struct | **[_pollRes](struct__poll_res.md)**  |
| struct | **[_cardInfoFull](struct__card_info_full.md)**  |
| struct | **[_pollResFull](struct__poll_res_full.md)**  |
| struct | **[_pollReq](struct__poll_req.md)**  |
| struct | **[authenticationResult](structauthentication_result.md)**  |
| struct | **[getServicesResult](structget_services_result.md)**  |
| struct | **[authenticationParams](structauthentication_params.md)**  |
| struct | **[getServicesParams](structget_services_params.md)**  |
| struct | **[doVASInput](structdo_v_a_s_input.md)**  |
| struct | **[doVASOutput](structdo_v_a_s_output.md)**  |
| struct | **[apduTxData](structapdu_tx_data.md)**  |
| struct | **[apduRxData](structapdu_rx_data.md)**  |
| struct | **[apduCommand](structapdu_command.md)**  |
| struct | **[felicaTxData](structfelica_tx_data.md)**  |
| struct | **[felicaRxData](structfelica_rx_data.md)**  |
| struct | **[felicaPolling](structfelica_polling.md)**  |
| struct | **[felicaPollingOutput](structfelica_polling_output.md)**  |
| struct | **[TX_RX_PARAM](struct_t_x___r_x___p_a_r_a_m.md)**  |
| struct | **[callbackFlags](structcallback_flags.md)**  |
| struct | **[callbackText](structcallback_text.md)**  |
| struct | **[callbackLeds](structcallback_leds.md)**  |
| struct | **[callbackBuzzer](structcallback_buzzer.md)**  |
| struct | **[callbackInfo](structcallback_info.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ResponseCodes](titusstubs_8cpp.md#enum-responsecodes)** { EMB_APP_OK = 0, EMB_APP_INCORRECT_HEADER, EMB_APP_UNKNOWN_COMMAND, EMB_APP_UNKNOWN_SUBCOMMAND, EMB_APP_COMMAND_NOT_SUPPORTED, EMB_APP_SUBCOMMAND_NOT_SUPPORTED, EMB_APP_CRC_ERROR, EMB_APP_FAILED, EMB_APP_TIMEOUT, EMB_APP_UNKNOWN_APP_NAME, EMB_APP_PARAMETER_NOT_SUPPORTED, EMB_APP_OTHER_APP_RUNNING, EMB_APP_AUTO_RUN, EMB_APP_MULTI_CARDS, EMB_APP_START_PAYMENT, EMB_APP_COMM_ERROR, EMB_APP_DATA_CRC_ERROR, EMB_APP_INCORRECT_DATA, EMB_APP_CANCEL_DONE, EMB_APP_CANCEL_IRRELEVANT, EMB_APP_CANCEL_NOT_ALLOWED, EMB_APP_DISCOVERY_CANCELED, EMB_APP_UNSUPPORTED_CARD, EMB_APP_SECOND_TAP_FAILED, EMB_APP_OUT_OF_ORDER_COMMAND, EMB_APP_2ND_AUTHENTICATION_FAILED, EMB_APP_NFC_GROUP_RET_FAIL, EMB_APP_INCORRECT_LEN, EMB_APP_TO_MANY_WALLETS, EMB_APP_COMMAND_NOT_ALLOWED, EMB_APP_MISSING_MANDATORY_DATA, EMB_APP_TWO_SNEP_DEFAULT_WALLET, EMB_APP_INCORRECT_APP_NAME, EMB_APP_APPLICATION_DATA_NOT_ALLOWED, EMB_APP_APPLICATION_NOT_FOUND, EMB_APP_MISMATHCED_UID, EMB_APP_WALLET_NOT_EXIST, EMB_APP_NFCUTIL_ERROR, EMB_APP_USER_ACTION_REQUIRED_UI, EMB_APP_VAS_DATA_NOT_ACTIVATED, EMB_APP_BAD_SYNTAX, EMB_APP_INTERNAL_ERROR, EMB_APP_CARD_NOT_FOUND, EMB_APP_CARD_ERROR, EMB_APP_L1_CARD_PROTOCOL_ERROR, EMB_APP_L1_CARD_NOT_ACTIVE, EMB_APP_DUMMY_FUNC_CALL, EMB_APP_CALLBACK_SET_ERROR, EMB_APP_INIT_ERROR, EMB_APP_L1_DRIVER_CLOSED} |
| enum| **[VasStatus](titusstubs_8cpp.md#enum-vasstatus)** { VAS_OK = 0, VAS_DO_PAY, VAS_FAIL, VAS_ERR_CTLS_DRIVER_CLOSE, VAS_CANCEL, VAS_TIME_OUT, VAS_ERR_CONFIG, VAS_DUMMY_CALL, VAS_CANCEL_NOT_ALLOWED, VAS_CANCEL_IRRELEVANT, VAS_COMM_ERR, VAS_INIT_ERROR, VAS_DO_PAY_DECRYPT_REQ, VAS_OK_DECRYPT_REQ} |
| enum| **[NFC_CARD_TYPE](titusstubs_8cpp.md#enum-nfc-card-type)** { I_ISO14443A = 1, I_JEWEL = 2, I_ISO14443B = 3, I_ISO14443BI = 4, I_ISO14443B2SR = 5, I_ISO14443B2CT = 6, I_DEP = 7, I_FELICA = 8, I_ISO14443A_MIFARE_MINI = 9, I_ISO14443A_MIFARE_1K = 10, I_ISO14443A_MIFARE_4K = 11, I_ISO14443A_MIFARE_DES = 12, I_ISO14443A_MIFARE_PLUS = 13, I_ISO14443A_MIFARE_UL = 14, I_ISO14443A_MIFARE_UL_C = 15, I_UNKNOWN_CARD_TYPE = 16, I_ISO14443A_APDU_MIFARE_1K = 17} |
| enum| **[I_MIFARE_CARD_TYPE](titusstubs_8cpp.md#enum-i-mifare-card-type)** { I_MIFARE_TYPE_CLASSIC, I_MIFARE_TYPE_ULTRALIGHT, I_MIFARE_TYPE_ULTRALIGHT_C, I_MIFARE_TYPE_CLASSIC_4K} |
| enum| **[NFC_POLL_PARAM_TECH](titusstubs_8cpp.md#enum-nfc-poll-param-tech)** { NFC_POLL_PARAM_TECH_A = 0x01, NFC_POLL_PARAM_TECH_B = 0x02, NFC_POLL_PARAM_TECH_AB = 0x03, NFC_POLL_PARAM_TECH_F_DEP = 0x04, NFC_POLL_PARAM_TECH_FELICA = 0x08, NFC_POLL_PARAM_TECH_F =   0x0C, NFC_POLL_PARAM_TECH_AF = 0x05, NFC_POLL_PARAM_TECH_BF = 0x06, NFC_POLL_PARAM_TECH_ABF = 0x07, NFC_POLL_PARAM_CUSTOM = 0x10} |
| enum| **[NFC_F_BAUD](titusstubs_8cpp.md#enum-nfc-f-baud)** { INF_BAUD212, INF_BAUD424} |
| enum| **[MIFARE_KEY_TYPE](titusstubs_8cpp.md#enum-mifare-key-type)** { MIFARE_KEY_TYPE_A = 1, MIFARE_KEY_TYPE_B} |
| enum| **[FrameworkState](titusstubs_8cpp.md#enum-frameworkstate)** { IDLE = 1, BUSY = 2} |
| enum| **[callbackBuzzerFrequency](titusstubs_8cpp.md#enum-callbackbuzzerfrequency)** { CALLBACK_BUZZER_FREQUENCY_LOW = 0xFFFF, CALLBACK_BUZZER_FREQUENCY_HIGH = 0xFFFE} |
| typedef struct [_cardInfo](struct__card_info.md) | **[cardInfo](titusstubs_8cpp.md#typedef-cardinfo)**  |
| typedef struct [_pollRes](struct__poll_res.md) | **[pollRes](titusstubs_8cpp.md#typedef-pollres)**  |
| typedef struct [_cardInfoFull](struct__card_info_full.md) | **[cardInfoFull](titusstubs_8cpp.md#typedef-cardinfofull)**  |
| typedef struct [_pollResFull](struct__poll_res_full.md) | **[pollResFull](titusstubs_8cpp.md#typedef-pollresfull)**  |
| typedef struct [_pollReq](struct__poll_req.md) | **[pollReq](titusstubs_8cpp.md#typedef-pollreq)**  |
| typedef void()(unsigned char *data, size_t dataSizeBytes) | **[NfcCallbackFunction](titusstubs_8cpp.md#typedef-nfccallbackfunction)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[isVclEnabled](titusstubs_8cpp.md#function-isvclenabled)**(bool checkVCLStatus) |
| bool | **[isVclTag](titusstubs_8cpp.md#function-isvcltag)**(unsigned long ulTag) |
| bool | **[VCL_DecryptMSR](titusstubs_8cpp.md#function-vcl-decryptmsr)**() |
| bool | **[VCL_EncryptEMV](titusstubs_8cpp.md#function-vcl-encryptemv)**() |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Config_Init](titusstubs_8cpp.md#function-nfc-config-init)**(void ) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Get_Version](titusstubs_8cpp.md#function-nfc-get-version)**([rawData](structraw_data.md) * output) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Ping](titusstubs_8cpp.md#function-nfc-ping)**([rawData](structraw_data.md) * output) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Set_Callback_Function](titusstubs_8cpp.md#function-nfc-set-callback-function)**([rawData](structraw_data.md) * id, [NfcCallbackFunction](titusstubs_8cpp.md#typedef-nfccallbackfunction) * callbackFunction) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Callback_Test](titusstubs_8cpp.md#function-nfc-callback-test)**(void ) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Open](titusstubs_8cpp.md#function-nfc-pt-open)**() |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Close](titusstubs_8cpp.md#function-nfc-pt-close)**() |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_FieldOn](titusstubs_8cpp.md#function-nfc-pt-fieldon)**() |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_FieldOff](titusstubs_8cpp.md#function-nfc-pt-fieldoff)**() |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Polling](titusstubs_8cpp.md#function-nfc-pt-polling)**([pollReq](titusstubs_8cpp.md#typedef-pollreq) * inPollReq, [pollRes](titusstubs_8cpp.md#typedef-pollres) * outPollRes) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_PollingFull](titusstubs_8cpp.md#function-nfc-pt-pollingfull)**([pollReq](titusstubs_8cpp.md#typedef-pollreq) * inPollReq, [pollResFull](titusstubs_8cpp.md#typedef-pollresfull) * outPollRes) |
| void | **[NFC_Free_Poll_Data](titusstubs_8cpp.md#function-nfc-free-poll-data)**([pollRes](titusstubs_8cpp.md#typedef-pollres) * outPollRes) |
| void | **[NFC_Free_Poll_DataFull](titusstubs_8cpp.md#function-nfc-free-poll-datafull)**([pollResFull](titusstubs_8cpp.md#typedef-pollresfull) * out_pull_res) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Cancel_Polling](titusstubs_8cpp.md#function-nfc-pt-cancel-polling)**(void ) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Activation](titusstubs_8cpp.md#function-nfc-pt-activation)**([NFC_CARD_TYPE](titusstubs_8cpp.md#enum-nfc-card-type) cardtype, [rawData](structraw_data.md) * rd_activationData) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_TxRx](titusstubs_8cpp.md#function-nfc-pt-txrx)**([NFC_CARD_TYPE](titusstubs_8cpp.md#enum-nfc-card-type) cardtype, [rawData](structraw_data.md) * inBuff, [rawData](structraw_data.md) * outBuff) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_FtechBaud](titusstubs_8cpp.md#function-nfc-pt-ftechbaud)**([NFC_F_BAUD](titusstubs_8cpp.md#enum-nfc-f-baud) baud) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_PT_Adv_TxRx](titusstubs_8cpp.md#function-nfc-pt-adv-txrx)**([TX_RX_PARAM](struct_t_x___r_x___p_a_r_a_m.md) * comParams, [rawData](structraw_data.md) * in_buff, [rawData](structraw_data.md) * out_buff) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Authenticate](titusstubs_8cpp.md#function-nfc-mifare-authenticate)**(unsigned char blockNumber, [MIFARE_KEY_TYPE](titusstubs_8cpp.md#enum-mifare-key-type) keyType, [rawData](structraw_data.md) * Key) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Read](titusstubs_8cpp.md#function-nfc-mifare-read)**([I_MIFARE_CARD_TYPE](titusstubs_8cpp.md#enum-i-mifare-card-type) m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, [rawData](structraw_data.md) * out_buff) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Write](titusstubs_8cpp.md#function-nfc-mifare-write)**([I_MIFARE_CARD_TYPE](titusstubs_8cpp.md#enum-i-mifare-card-type) m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, [rawData](structraw_data.md) * in_buff) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Increment](titusstubs_8cpp.md#function-nfc-mifare-increment)**(unsigned int blockNum, int amount) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Decrement](titusstubs_8cpp.md#function-nfc-mifare-decrement)**(unsigned int blockNum, int amount) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Increment_Only](titusstubs_8cpp.md#function-nfc-mifare-increment-only)**(unsigned int blockNum, int amount) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Decrement_Only](titusstubs_8cpp.md#function-nfc-mifare-decrement-only)**(unsigned int blockNum, int amount) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Transfer](titusstubs_8cpp.md#function-nfc-mifare-transfer)**(unsigned int blockNum) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Mifare_Restore](titusstubs_8cpp.md#function-nfc-mifare-restore)**(unsigned int blockNum) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Felica_Exchange](titusstubs_8cpp.md#function-nfc-felica-exchange)**([felicaTxData](structfelica_tx_data.md) * in_buff, [felicaRxData](structfelica_rx_data.md) * out_buff) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Felica_Polling](titusstubs_8cpp.md#function-nfc-felica-polling)**(unsigned int pollTimeout, [felicaPolling](structfelica_polling.md) * inData, [felicaPollingOutput](structfelica_polling_output.md) * outData) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_APDU_Exchange](titusstubs_8cpp.md#function-nfc-apdu-exchange)**([apduTxData](structapdu_tx_data.md) * txData, [apduRxData](structapdu_rx_data.md) * rxData) |
| [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) | **[NFC_Card_Removal](titusstubs_8cpp.md#function-nfc-card-removal)**(void ) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_Terminal_Config](titusstubs_8cpp.md#function-nfc-terminal-config)**([rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_TERMINAL_ReadConfig](titusstubs_8cpp.md#function-nfc-terminal-readconfig)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_ReadConfig](titusstubs_8cpp.md#function-nfc-vas-readconfig)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_Activate](titusstubs_8cpp.md#function-nfc-vas-activate)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_Cancel](titusstubs_8cpp.md#function-nfc-vas-cancel)**(void ) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_UpdateConfig](titusstubs_8cpp.md#function-nfc-vas-updateconfig)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_CancelConfig](titusstubs_8cpp.md#function-nfc-vas-cancelconfig)**([rawData](structraw_data.md) * id) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_PreLoad](titusstubs_8cpp.md#function-nfc-vas-preload)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_CancelPreLoad](titusstubs_8cpp.md#function-nfc-vas-cancelpreload)**([rawData](structraw_data.md) * id) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_Decrypt](titusstubs_8cpp.md#function-nfc-vas-decrypt)**([rawData](structraw_data.md) * id, [rawData](structraw_data.md) * input, [rawData](structraw_data.md) * output) |
| [VasStatus](titusstubs_8cpp.md#enum-vasstatus) | **[NFC_VAS_Action](titusstubs_8cpp.md#function-nfc-vas-action)**([rawData](structraw_data.md) * id, int action, [rawData](structraw_data.md) * inData, [rawData](structraw_data.md) * outBuff) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[UNKNOWN](titusstubs_8cpp.md#define-unknown)**  |
|  | **[MIFARE_NO_DESFIRE](titusstubs_8cpp.md#define-mifare-no-desfire)**  |
|  | **[ULTRALIGHT](titusstubs_8cpp.md#define-ultralight)**  |
|  | **[MINI](titusstubs_8cpp.md#define-mini)**  |
|  | **[CLASSIC_1K](titusstubs_8cpp.md#define-classic-1k)**  |
|  | **[CLASSIC_4K](titusstubs_8cpp.md#define-classic-4k)**  |
|  | **[DESFIRE_CL1](titusstubs_8cpp.md#define-desfire-cl1)**  |
|  | **[DESFIRE_CL2](titusstubs_8cpp.md#define-desfire-cl2)**  |
|  | **[PLUS_2K_SL_1](titusstubs_8cpp.md#define-plus-2k-sl-1)**  |
|  | **[PLUS_4K_SL_1](titusstubs_8cpp.md#define-plus-4k-sl-1)**  |
|  | **[PLUS_2K_SL_2](titusstubs_8cpp.md#define-plus-2k-sl-2)**  |
|  | **[PLUS_4K_SL_2](titusstubs_8cpp.md#define-plus-4k-sl-2)**  |
|  | **[PLUS_2K_SL_3](titusstubs_8cpp.md#define-plus-2k-sl-3)**  |
|  | **[PLUS_4K_SL_3](titusstubs_8cpp.md#define-plus-4k-sl-3)**  |
|  | **[TNP3xxx](titusstubs_8cpp.md#define-tnp3xxx)**  |
|  | **[SMART_MX_1K_EMULATION](titusstubs_8cpp.md#define-smart-mx-1k-emulation)**  |
|  | **[SMART_MX_4K_EMULATION](titusstubs_8cpp.md#define-smart-mx-4k-emulation)**  |
|  | **[SMART_MX](titusstubs_8cpp.md#define-smart-mx)**  |
|  | **[APDU_COMPLIANT](titusstubs_8cpp.md#define-apdu-compliant)**  |
|  | **[NFC_COMPLIANT](titusstubs_8cpp.md#define-nfc-compliant)**  |
|  | **[ULTRALIGHT_C](titusstubs_8cpp.md#define-ultralight-c)**  |
|  | **[ACTION_DECRYPT](titusstubs_8cpp.md#define-action-decrypt)**  |
|  | **[ACTION_STORE_WALLET_KEYS](titusstubs_8cpp.md#define-action-store-wallet-keys)**  |
|  | **[ACTION_GET_WALLET_KEYS](titusstubs_8cpp.md#define-action-get-wallet-keys)**  |
|  | **[ACTION_GET_TOKEN](titusstubs_8cpp.md#define-action-get-token)**  |
|  | **[ACTION_ENCRYPT_TOKEN](titusstubs_8cpp.md#define-action-encrypt-token)**  |
|  | **[CALLBACK_MAX_TEXT_SIZE](titusstubs_8cpp.md#define-callback-max-text-size)**  |

## Types Documentation

### enum ResponseCodes

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| EMB_APP_OK | 0| EMB_APP_OK.   |
| EMB_APP_INCORRECT_HEADER | |   |
| EMB_APP_UNKNOWN_COMMAND | |   |
| EMB_APP_UNKNOWN_SUBCOMMAND | |   |
| EMB_APP_COMMAND_NOT_SUPPORTED | |   |
| EMB_APP_SUBCOMMAND_NOT_SUPPORTED | |   |
| EMB_APP_CRC_ERROR | |   |
| EMB_APP_FAILED | |   |
| EMB_APP_TIMEOUT | |   |
| EMB_APP_UNKNOWN_APP_NAME | |   |
| EMB_APP_PARAMETER_NOT_SUPPORTED | |   |
| EMB_APP_OTHER_APP_RUNNING | |   |
| EMB_APP_AUTO_RUN | |   |
| EMB_APP_MULTI_CARDS | |   |
| EMB_APP_START_PAYMENT | |   |
| EMB_APP_COMM_ERROR | |   |
| EMB_APP_DATA_CRC_ERROR | |   |
| EMB_APP_INCORRECT_DATA | |   |
| EMB_APP_CANCEL_DONE | |   |
| EMB_APP_CANCEL_IRRELEVANT | |   |
| EMB_APP_CANCEL_NOT_ALLOWED | |   |
| EMB_APP_DISCOVERY_CANCELED | |   |
| EMB_APP_UNSUPPORTED_CARD | |   |
| EMB_APP_SECOND_TAP_FAILED | |   |
| EMB_APP_OUT_OF_ORDER_COMMAND | |   |
| EMB_APP_2ND_AUTHENTICATION_FAILED | |   |
| EMB_APP_NFC_GROUP_RET_FAIL | |   |
| EMB_APP_INCORRECT_LEN | |   |
| EMB_APP_TO_MANY_WALLETS | |   |
| EMB_APP_COMMAND_NOT_ALLOWED | |   |
| EMB_APP_MISSING_MANDATORY_DATA | |   |
| EMB_APP_TWO_SNEP_DEFAULT_WALLET | |   |
| EMB_APP_INCORRECT_APP_NAME | |   |
| EMB_APP_APPLICATION_DATA_NOT_ALLOWED | |   |
| EMB_APP_APPLICATION_NOT_FOUND | |   |
| EMB_APP_MISMATHCED_UID | |   |
| EMB_APP_WALLET_NOT_EXIST | |   |
| EMB_APP_NFCUTIL_ERROR | |   |
| EMB_APP_USER_ACTION_REQUIRED_UI | |   |
| EMB_APP_VAS_DATA_NOT_ACTIVATED | |   |
| EMB_APP_BAD_SYNTAX | |   |
| EMB_APP_INTERNAL_ERROR | |   |
| EMB_APP_CARD_NOT_FOUND | |   |
| EMB_APP_CARD_ERROR | |   |
| EMB_APP_L1_CARD_PROTOCOL_ERROR | |   |
| EMB_APP_L1_CARD_NOT_ACTIVE | |   |
| EMB_APP_DUMMY_FUNC_CALL | |   |
| EMB_APP_CALLBACK_SET_ERROR | |   |
| EMB_APP_INIT_ERROR | |   |
| EMB_APP_L1_DRIVER_CLOSED | |   |




### enum VasStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| VAS_OK | 0|   |
| VAS_DO_PAY | |   |
| VAS_FAIL | |   |
| VAS_ERR_CTLS_DRIVER_CLOSE | |   |
| VAS_CANCEL | |   |
| VAS_TIME_OUT | |   |
| VAS_ERR_CONFIG | |   |
| VAS_DUMMY_CALL | |   |
| VAS_CANCEL_NOT_ALLOWED | |   |
| VAS_CANCEL_IRRELEVANT | |   |
| VAS_COMM_ERR | |   |
| VAS_INIT_ERROR | |   |
| VAS_DO_PAY_DECRYPT_REQ | |   |
| VAS_OK_DECRYPT_REQ | |   |




### enum NFC_CARD_TYPE

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| I_ISO14443A | 1|   |
| I_JEWEL | 2|   |
| I_ISO14443B | 3|   |
| I_ISO14443BI | 4|   |
| I_ISO14443B2SR | 5|   |
| I_ISO14443B2CT | 6|   |
| I_DEP | 7|   |
| I_FELICA | 8|   |
| I_ISO14443A_MIFARE_MINI | 9|   |
| I_ISO14443A_MIFARE_1K | 10|   |
| I_ISO14443A_MIFARE_4K | 11|   |
| I_ISO14443A_MIFARE_DES | 12|   |
| I_ISO14443A_MIFARE_PLUS | 13|   |
| I_ISO14443A_MIFARE_UL | 14|   |
| I_ISO14443A_MIFARE_UL_C | 15|   |
| I_UNKNOWN_CARD_TYPE | 16|   |
| I_ISO14443A_APDU_MIFARE_1K | 17|   |




### enum I_MIFARE_CARD_TYPE

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| I_MIFARE_TYPE_CLASSIC | |   |
| I_MIFARE_TYPE_ULTRALIGHT | |   |
| I_MIFARE_TYPE_ULTRALIGHT_C | |   |
| I_MIFARE_TYPE_CLASSIC_4K | |   |




### enum NFC_POLL_PARAM_TECH

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NFC_POLL_PARAM_TECH_A | 0x01|   |
| NFC_POLL_PARAM_TECH_B | 0x02|   |
| NFC_POLL_PARAM_TECH_AB | 0x03|   |
| NFC_POLL_PARAM_TECH_F_DEP | 0x04|   |
| NFC_POLL_PARAM_TECH_FELICA | 0x08|   |
| NFC_POLL_PARAM_TECH_F |   0x0C|   |
| NFC_POLL_PARAM_TECH_AF | 0x05|   |
| NFC_POLL_PARAM_TECH_BF | 0x06|   |
| NFC_POLL_PARAM_TECH_ABF | 0x07|   |
| NFC_POLL_PARAM_CUSTOM | 0x10|   |




### enum NFC_F_BAUD

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| INF_BAUD212 | |   |
| INF_BAUD424 | |   |




### enum MIFARE_KEY_TYPE

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MIFARE_KEY_TYPE_A | 1|   |
| MIFARE_KEY_TYPE_B | |   |




### enum FrameworkState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| IDLE | 1|   |
| BUSY | 2|   |




### enum callbackBuzzerFrequency

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CALLBACK_BUZZER_FREQUENCY_LOW | 0xFFFF|   |
| CALLBACK_BUZZER_FREQUENCY_HIGH | 0xFFFE|   |




### typedef cardInfo

```cpp
typedef struct _cardInfo cardInfo;
```


### typedef pollRes

```cpp
typedef struct _pollRes pollRes;
```


### typedef cardInfoFull

```cpp
typedef struct _cardInfoFull cardInfoFull;
```


### typedef pollResFull

```cpp
typedef struct _pollResFull pollResFull;
```


### typedef pollReq

```cpp
typedef struct _pollReq pollReq;
```


### typedef NfcCallbackFunction

```cpp
typedef void() NfcCallbackFunction(unsigned char *data, size_t dataSizeBytes);
```



## Functions Documentation

### function isVclEnabled

```cpp
bool isVclEnabled(
    bool checkVCLStatus
)
```


### function isVclTag

```cpp
bool isVclTag(
    unsigned long ulTag
)
```


### function VCL_DecryptMSR

```cpp
bool VCL_DecryptMSR()
```


### function VCL_EncryptEMV

```cpp
bool VCL_EncryptEMV()
```


### function NFC_Config_Init

```cpp
ResponseCodes NFC_Config_Init(
    void 
)
```


**Return**: EMB_APP_FAILED 

According NFC documentation: Initializes NFC Configuration. But this function does nothing and always returns error. 


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


### function NFC_Ping

```cpp
ResponseCodes NFC_Ping(
    rawData * output
)
```


Return NFC Framework State of the NFC framework. 


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


Initialise NFC L1 driver. When the SDI server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_Close

```cpp
ResponseCodes NFC_PT_Close()
```


Release NFC L1 driver. When the SDI server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_FieldOn

```cpp
ResponseCodes NFC_PT_FieldOn()
```


Turns RF field on. When the SDI server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_FieldOff

```cpp
ResponseCodes NFC_PT_FieldOff()
```


Turns RF field off. When the SDI server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_Polling

```cpp
ResponseCodes NFC_PT_Polling(
    pollReq * inPollReq,
    pollRes * outPollRes
)
```


Activates polling. See NFC documentation. When the SDI server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_PollingFull

```cpp
ResponseCodes NFC_PT_PollingFull(
    pollReq * inPollReq,
    pollResFull * outPollRes
)
```


Activates polling. See NFC documentation. When the SDI server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_Free_Poll_Data

```cpp
void NFC_Free_Poll_Data(
    pollRes * outPollRes
)
```


Releases memory allocated in the pollRes *outPollRes when [NFC_PT_Polling()](sdi__nfc_8h.md#define-nfc-pt-polling) was called. 


### function NFC_Free_Poll_DataFull

```cpp
void NFC_Free_Poll_DataFull(
    pollResFull * out_pull_res
)
```


### function NFC_PT_Cancel_Polling

```cpp
ResponseCodes NFC_PT_Cancel_Polling(
    void 
)
```


**Return**: EMB_APP_COMMAND_NOT_SUPPORTED 

Stop polling before timeout. Note: This command has to be send asynchronously while waiting for polling response. Since is not yet supported on SDI Server side there is also no implementation on client side. 


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


Activates (selects) the card found during polling. When the SDI server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication. 


### function NFC_PT_TxRx

```cpp
ResponseCodes NFC_PT_TxRx(
    NFC_CARD_TYPE cardtype,
    rawData * inBuff,
    rawData * outBuff
)
```


**Return**: EMB_APP_COMMAND_NOT_SUPPORTED 

Sends and receives raw data using ISO 14443-3 protocol (31-08) This function is no more available at SDI server external interface 


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


### function NFC_PT_Adv_TxRx

```cpp
ResponseCodes NFC_PT_Adv_TxRx(
    TX_RX_PARAM * comParams,
    rawData * in_buff,
    rawData * out_buff
)
```


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

**Note**: This command is not allowed on SDI Server external interface 

Data transive of APDU protocol. 


### function NFC_Card_Removal

```cpp
ResponseCodes NFC_Card_Removal(
    void 
)
```


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

Reads the most updated terminal configuration.Static parameter will be returned in case appID is unknown or [NFC_VAS_PreLoad()](sdi__nfc_8h.md#define-nfc-vas-preload) issued without changing Terminal configuration. 


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

Stop VAS activate polling before timeout. Note: This command has to be send asynchronously while waiting for polling response. Since is not yet supported on SDI Server side there is also no implementation on client side. 


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

Configures the terminal with wallet specific parameters. [NFC_VAS_Activate()](sdi__nfc_8h.md#define-nfc-vas-activate) has to be called to get VAS data. Only single PreLoaded configuration is available. 


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

**Note**: Not to be used at external SDI Server interface 

Key transfer between Counter Top and External PIN pad. 




## Macros Documentation

### define UNKNOWN

```cpp
#define UNKNOWN 0x00000000
```


### define MIFARE_NO_DESFIRE

```cpp
#define MIFARE_NO_DESFIRE 0x00000001
```


### define ULTRALIGHT

```cpp
#define ULTRALIGHT 0x00000002
```


### define MINI

```cpp
#define MINI 0x00000004
```


### define CLASSIC_1K

```cpp
#define CLASSIC_1K 0x00000008
```


### define CLASSIC_4K

```cpp
#define CLASSIC_4K 0x00000010
```


### define DESFIRE_CL1

```cpp
#define DESFIRE_CL1 0x00000020
```


### define DESFIRE_CL2

```cpp
#define DESFIRE_CL2 0x00000040
```


### define PLUS_2K_SL_1

```cpp
#define PLUS_2K_SL_1 0x00000080
```


### define PLUS_4K_SL_1

```cpp
#define PLUS_4K_SL_1 0x00000100
```


### define PLUS_2K_SL_2

```cpp
#define PLUS_2K_SL_2 0x00000200
```


### define PLUS_4K_SL_2

```cpp
#define PLUS_4K_SL_2 0x00000400
```


### define PLUS_2K_SL_3

```cpp
#define PLUS_2K_SL_3 0x00000800
```


### define PLUS_4K_SL_3

```cpp
#define PLUS_4K_SL_3 0x00001000
```


### define TNP3xxx

```cpp
#define TNP3xxx 0x00002000
```


### define SMART_MX_1K_EMULATION

```cpp
#define SMART_MX_1K_EMULATION 0x00004000
```


### define SMART_MX_4K_EMULATION

```cpp
#define SMART_MX_4K_EMULATION 0x00008000
```


### define SMART_MX

```cpp
#define SMART_MX 0x00010000
```


### define APDU_COMPLIANT

```cpp
#define APDU_COMPLIANT 0x00020000
```


### define NFC_COMPLIANT

```cpp
#define NFC_COMPLIANT 0x00040000
```


### define ULTRALIGHT_C

```cpp
#define ULTRALIGHT_C 0x00080000
```


### define ACTION_DECRYPT

```cpp
#define ACTION_DECRYPT 1
```


### define ACTION_STORE_WALLET_KEYS

```cpp
#define ACTION_STORE_WALLET_KEYS 3
```


### define ACTION_GET_WALLET_KEYS

```cpp
#define ACTION_GET_WALLET_KEYS 4
```


### define ACTION_GET_TOKEN

```cpp
#define ACTION_GET_TOKEN 5
```


### define ACTION_ENCRYPT_TOKEN

```cpp
#define ACTION_ENCRYPT_TOKEN 6
```


### define CALLBACK_MAX_TEXT_SIZE

```cpp
#define CALLBACK_MAX_TEXT_SIZE (64)
```


## Source code

```cpp
#include <sysinfo/sysinfo.h>
//#include <html/gui.h>

#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#pragma GCC diagnostic ignored "-Wunused-parameter"

// VCL
bool isVclEnabled(bool checkVCLStatus)
{
  (void)checkVCLStatus;
  return false;
}
bool isVclTag(unsigned long ulTag)
{
  (void)ulTag;
  return false;
}
bool VCL_DecryptMSR()
{
  return true;
}
bool VCL_EncryptEMV()
{
  return true;
}

extern "C" {

  // void CRD_Activate() {}
  // void CRD_AvailableIfms() {}
  // void CRD_CloseReader() {}
  // void CRD_CtPpsRequest() {}
  // void CRD_Detect() {}
  // void CRD_Exchange() {}
  // void CRD_GetCardInfo() {}
  // void CRD_GetVersion() {}
  // void CRD_Ident() {}
  // void CRD_Initialize() {}
  // void CRD_NumberConfigs() {}
  // void CRD_PcdInfo() {}
  // void CRD_PcdName() {}
  // void CRD_Power() {}
  // void CRD_PowerStatus() {}
  // void CRD_PresentClearTextPin() {}
  // void CRD_PresentEncryptEmvPin() {}

  // NFC

  typedef enum
  {
    EMB_APP_OK = 0, 
    EMB_APP_INCORRECT_HEADER,       // 0x01
    EMB_APP_UNKNOWN_COMMAND,        // 0x02
    EMB_APP_UNKNOWN_SUBCOMMAND,           // 0x03
    EMB_APP_COMMAND_NOT_SUPPORTED,        // 0x04
    EMB_APP_SUBCOMMAND_NOT_SUPPORTED,     // 0x05
    EMB_APP_CRC_ERROR,                    // 0x06
    EMB_APP_FAILED,                       // 0x07
    EMB_APP_TIMEOUT,                      // 0x08
    EMB_APP_UNKNOWN_APP_NAME,             // 0x09
    EMB_APP_PARAMETER_NOT_SUPPORTED,      // 0x0A
    EMB_APP_OTHER_APP_RUNNING,            // 0x0B
    EMB_APP_AUTO_RUN,           // 0x0C
    EMB_APP_MULTI_CARDS,          // 0x0D
    EMB_APP_START_PAYMENT,          // 0x0E
    EMB_APP_COMM_ERROR,           // 0x0F
    EMB_APP_DATA_CRC_ERROR,         // 0x10
    EMB_APP_INCORRECT_DATA,         // 0x11
    EMB_APP_CANCEL_DONE,          // 0x12
    EMB_APP_CANCEL_IRRELEVANT,        // 0x13
    EMB_APP_CANCEL_NOT_ALLOWED,       // 0x14
    EMB_APP_DISCOVERY_CANCELED,       // 0x15
    EMB_APP_UNSUPPORTED_CARD,       // 0x16
    EMB_APP_SECOND_TAP_FAILED,        // 0x17
    EMB_APP_OUT_OF_ORDER_COMMAND,     // 0x18
    EMB_APP_2ND_AUTHENTICATION_FAILED,    // 0x19
    EMB_APP_NFC_GROUP_RET_FAIL,       // 0x1A
    EMB_APP_INCORRECT_LEN,            // 0x1B
    EMB_APP_TO_MANY_WALLETS,        // 0x1C
    EMB_APP_COMMAND_NOT_ALLOWED,      // 0x1D
    EMB_APP_MISSING_MANDATORY_DATA,     // 0x1E
    EMB_APP_TWO_SNEP_DEFAULT_WALLET,    // 0x1F
    EMB_APP_INCORRECT_APP_NAME,       // 0x20
    EMB_APP_APPLICATION_DATA_NOT_ALLOWED, // 0x21
    EMB_APP_APPLICATION_NOT_FOUND,      // 0X22
    EMB_APP_MISMATHCED_UID,         // 0x23
    EMB_APP_WALLET_NOT_EXIST,       // 0x24
    EMB_APP_NFCUTIL_ERROR,          // 0x25
    EMB_APP_USER_ACTION_REQUIRED_UI,    // 0x26
    EMB_APP_VAS_DATA_NOT_ACTIVATED,     // 0x27
    EMB_APP_BAD_SYNTAX,           // 0x28
    EMB_APP_INTERNAL_ERROR,         // 0x29
    EMB_APP_CARD_NOT_FOUND,         // 0x2A
    EMB_APP_CARD_ERROR,           // 0x2B
    EMB_APP_L1_CARD_PROTOCOL_ERROR,     // 0x2C
    EMB_APP_L1_CARD_NOT_ACTIVE,       // 0x2D
    EMB_APP_DUMMY_FUNC_CALL,                // 0x2E
    EMB_APP_CALLBACK_SET_ERROR,             // 0x2F
    EMB_APP_INIT_ERROR,                     // 0x30
    EMB_APP_L1_DRIVER_CLOSED          // 0x31
  } ResponseCodes;

  typedef enum
  {

    VAS_OK = 0,
    VAS_DO_PAY,
    VAS_FAIL,
    VAS_ERR_CTLS_DRIVER_CLOSE,
    VAS_CANCEL,
    VAS_TIME_OUT,
    VAS_ERR_CONFIG,
    VAS_DUMMY_CALL,
    VAS_CANCEL_NOT_ALLOWED,
    VAS_CANCEL_IRRELEVANT,
    VAS_COMM_ERR,
    VAS_INIT_ERROR,
    VAS_DO_PAY_DECRYPT_REQ,
    VAS_OK_DECRYPT_REQ

  } VasStatus;


  typedef struct
  {
    unsigned char*    buffer;
    unsigned int    bufferLen;
    unsigned int    bufferMaxSize;
  } rawData;

  typedef struct
  {
    unsigned int  pollTime;
    unsigned char technology;
    unsigned char cardType;
    unsigned char collision;
    unsigned char activation;
    unsigned char customPollParams[1];
    unsigned char customPollParamsSize;
  } discoveryParams;

  typedef struct
  {
    unsigned char technology;
  } activateParams;


  typedef struct
  {
    unsigned char numOfCards;
    unsigned char numOfCardsA;
    unsigned char cardTypeA;
    unsigned char sak;
    unsigned char uidA_Size;
    unsigned char uidA[1];
    unsigned char numOfCardsB;
    unsigned char cardTypeB;
    unsigned char uidB_Size;
    unsigned char uidB[1];
    unsigned char numOfCardsF;
    unsigned char cardTypeF;
    unsigned char uidF_Size;
    unsigned char uidF[1];
    unsigned char pollData[1];
    unsigned char pollDataSize;
    unsigned char status;
  } discoveryResult;

  typedef enum
  {
    I_ISO14443A               = 1,
    I_JEWEL                   = 2,
    I_ISO14443B               = 3,
    I_ISO14443BI              = 4, // pre-ISO14443B aka ISO/IEC 14443 B' or Type B'
    I_ISO14443B2SR            = 5, // ISO14443-2B ST SRx
    I_ISO14443B2CT            = 6, // ISO14443-2B ASK CTx
    I_DEP                     = 7,
    I_FELICA                  = 8,
    I_ISO14443A_MIFARE_MINI   = 9,
    I_ISO14443A_MIFARE_1K     = 10,
    I_ISO14443A_MIFARE_4K     = 11,
    I_ISO14443A_MIFARE_DES    = 12,
    I_ISO14443A_MIFARE_PLUS   = 13,
    I_ISO14443A_MIFARE_UL     = 14,
    I_ISO14443A_MIFARE_UL_C   = 15,
    I_UNKNOWN_CARD_TYPE       = 16,
    I_ISO14443A_APDU_MIFARE_1K  = 17
  } NFC_CARD_TYPE;

  typedef enum
  {
    I_MIFARE_TYPE_CLASSIC,      //1K
    I_MIFARE_TYPE_ULTRALIGHT,
    I_MIFARE_TYPE_ULTRALIGHT_C,
    I_MIFARE_TYPE_CLASSIC_4K
  } I_MIFARE_CARD_TYPE;

  typedef enum
  {
    NFC_POLL_PARAM_TECH_A   = 0x01,
    NFC_POLL_PARAM_TECH_B   = 0x02,
    NFC_POLL_PARAM_TECH_AB    = 0x03,
    NFC_POLL_PARAM_TECH_F_DEP = 0x04,
    NFC_POLL_PARAM_TECH_FELICA  = 0x08,
    NFC_POLL_PARAM_TECH_F   =   0x0C,
    NFC_POLL_PARAM_TECH_AF    = 0x05,
    NFC_POLL_PARAM_TECH_BF    = 0x06,
    NFC_POLL_PARAM_TECH_ABF   = 0x07,
    NFC_POLL_PARAM_CUSTOM   = 0x10,
  } NFC_POLL_PARAM_TECH;

  typedef struct _cardInfo
  {
    rawData       card_info;
    NFC_CARD_TYPE   cardType;
  } cardInfo;

  typedef struct _pollRes
  {
    unsigned int    m_foundTargetsTotalCount;
    unsigned int    m_foundTargetsA;
    unsigned int    m_foundTargetsB;
    unsigned int    m_foundTargetsF;
    cardInfo        *cards_info_arr;
    rawData         custom_poll_result;
  } pollRes;

#define UNKNOWN             0x00000000
#define MIFARE_NO_DESFIRE       0x00000001
#define ULTRALIGHT            0x00000002
#define MINI              0x00000004
#define CLASSIC_1K            0x00000008
#define CLASSIC_4K            0x00000010
#define DESFIRE_CL1           0x00000020
#define DESFIRE_CL2           0x00000040
#define PLUS_2K_SL_1          0x00000080
#define PLUS_4K_SL_1          0x00000100
#define PLUS_2K_SL_2          0x00000200
#define PLUS_4K_SL_2          0x00000400
#define PLUS_2K_SL_3          0x00000800
#define PLUS_4K_SL_3          0x00001000
#define TNP3xxx             0x00002000
#define SMART_MX_1K_EMULATION     0x00004000
#define SMART_MX_4K_EMULATION     0x00008000
#define SMART_MX            0x00010000
#define APDU_COMPLIANT          0x00020000
#define NFC_COMPLIANT         0x00040000
#define ULTRALIGHT_C          0x00080000

  /*
  supoprted actions (2nd input) for NFC_VAS_Action function
  */
#define ACTION_DECRYPT  1
#define ACTION_STORE_WALLET_KEYS 3
#define ACTION_GET_WALLET_KEYS 4
#define ACTION_GET_TOKEN 5
#define ACTION_ENCRYPT_TOKEN 6

  typedef struct _cardInfoFull
  {
    unsigned char   m_modulation;
    long        m_cardTypes;
    unsigned char   m_SAK;
    unsigned char   ATQ[2];
    rawData       mrd_UID;
    rawData       mrd_RFU;
  } cardInfoFull;

  typedef struct _pollResFull
  {
    unsigned int    m_foundTargetsTotalCount;
    unsigned int    m_foundTargetsA;
    unsigned int    m_foundTargetsB;
    unsigned int    m_foundTargetsF;
    cardInfoFull  *cards_info_arr;
    rawData         custom_poll_result;
  } pollResFull;

  typedef struct _pollReq
  {
    unsigned int    tech_bitmap;
    unsigned int    poll_timeout;
    rawData       customData;
    bool        turnDutyCycleOn;
  } pollReq;

  typedef struct
  {
    unsigned char status;
    rawData         rdWalletName;
    rawData         rdWalletAuthResult;
  } authenticationResult;

  typedef struct
  {
    unsigned char status;
    rawData         rdWalletName;
    rawData         rdWalletServices;
  } getServicesResult;

  typedef struct
  {
    unsigned char cardType;
    unsigned char tech;
    rawData         rdWalletName;
    rawData         rdWalletAuthParams;
    unsigned int  expectedResultMaxSize;
  } authenticationParams;

  typedef struct
  {
    rawData         rdWalletName;
    rawData         rdWalletGetServicesParams;
    unsigned int  expectedResultMaxSize;
  } getServicesParams;

  typedef struct
  {
    authenticationParams  *pAuthenticationParams;
    getServicesParams   *pGetServicesParams;
  } doVASInput;

  typedef struct
  {
    authenticationResult  *pAuthenticationResult;
    getServicesResult   *pGetServicesResult;
  } doVASOutput;

  typedef struct
  {
    unsigned int clas;
    unsigned int instruction;
    unsigned int param1;
    unsigned int param2;
    unsigned int expectedResponseLen;
    rawData txData;
  } apduTxData;

  typedef struct
  {
    unsigned int    sw1;
    unsigned int    sw2;
    rawData     rxData;
  } apduRxData;

  typedef enum
  {
    INF_BAUD212,
    INF_BAUD424
  } NFC_F_BAUD;


  // In some SDK version MIFARE_KEY_TYPE_A and MIFARE_KEY_TYPE_B defined in picc.h/priv_picc.h as an integer
#ifdef MIFARE_KEY_TYPE_A
#undef MIFARE_KEY_TYPE_A
#endif

#ifdef MIFARE_KEY_TYPE_B
#undef MIFARE_KEY_TYPE_B
#endif

  typedef enum
  {
    MIFARE_KEY_TYPE_A = 1,
    MIFARE_KEY_TYPE_B
  } MIFARE_KEY_TYPE;

  typedef struct
  {
    unsigned char clas;
    unsigned char instraction;
    unsigned char param1;
    unsigned char param2;
    unsigned char expectResLen;
  } apduCommand;

  typedef enum
  {
    IDLE = 1,
    BUSY = 2,
  } FrameworkState;

  typedef struct
  {
    unsigned int   timeOut;
    rawData txData;
  } felicaTxData;

  typedef struct
  {
    rawData rxData;
  } felicaRxData;

  typedef struct
  {
    unsigned int  reciveTimeOUt;
    unsigned char   systemCode[2];
    unsigned char       requestCode;
    unsigned char       TimeSlot;
  } felicaPolling;

  typedef struct
  {
    unsigned char UID[8];
    unsigned char pad[8];
    unsigned char sysCode[2];
  } felicaPollingOutput;



  typedef struct
  {
    unsigned char tech;         //0 - A, 1 - B
    unsigned int  responseTimeout;    //timeout to process command
    unsigned char CRC;          //add & validate CRC. 0 no CRC, 1 CRC only TX, 2 CRC TX & RX
    unsigned char parity;       //add & vaidate parity - not supported
    unsigned int  timeOutCom;     //timeout to communication - not supported
    unsigned char invalidFrames;    //allow recieving less than 4 bits frames - not supported
  } TX_RX_PARAM;


  /*
   * callbackFlags, this bit field tells what info is present in this callback
   * Multiple info might be present in one callback
   */
  typedef struct
  {
    unsigned int     init           : 1;
    unsigned int     textPresent    : 1;
    unsigned int     ledsPresent    : 1;
    unsigned int     buzzerPresent  : 1;
  } callbackFlags;

  /*
   * Text info
   */
#define CALLBACK_MAX_TEXT_SIZE         (64)
  typedef struct
  {
    // Null terminated string
    char            text[CALLBACK_MAX_TEXT_SIZE];
  } callbackText;

  /*
   * LED info, this bit field tells the state each LED should take:
   *  0-> Turn LED off
   *  1-> Turn LED on
   *  2-> Blink LED
   */
  typedef struct
  {
    unsigned int     led1           : 2;
    unsigned int     led2           : 2;
    unsigned int     led3           : 2;
    unsigned int     led4           : 2;
  } callbackLeds;

  /*
   * Buzzer frequencies used by callbackBuzzer
   */
  typedef enum
  {
    CALLBACK_BUZZER_FREQUENCY_LOW   = 0xFFFF,
    CALLBACK_BUZZER_FREQUENCY_HIGH  = 0xFFFE
  } callbackBuzzerFrequency;

  /*
   * Buzzer info
   */
  typedef struct
  {
    // Frequency
    callbackBuzzerFrequency         frequency;

    // Time in milliseconds the buzzer should be ON
    unsigned int                    on_ms;

    // Time in milliseconds the buzzer should be OFF
    unsigned int                    off_ms;

    // Number of times the buzzer cycle(ON-OFF) should repeat
    unsigned int                    nTimes;
  } callbackBuzzer;

  /*
   * Callback info structure
   */
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
  } callbackInfo;


  /*
   *  NFC callback prototype
   *
   * (in ) data - Data associated with callback reason. It should be fed into a
   *              CallbackParseData function to have the callbackInfo structure populated.
   * (in ) dataSizeBytes - Size of data buffer.
   *
   */
  typedef void (NfcCallbackFunction)(unsigned char *data, size_t dataSizeBytes);

  ResponseCodes NFC_Config_Init(void)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Get_Version(rawData *output)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Ping(rawData *output)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Set_Callback_Function(rawData* id, NfcCallbackFunction *callbackFunction)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Callback_Test(void)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_Open(void)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_Close(void)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_FieldOn(void)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_FieldOff(void)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_Polling(pollReq *in_pull_req, pollRes *out_pull_res)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_PollingFull(pollReq *in_pull_req, pollResFull *out_pull_res)
  {
    return EMB_APP_OK;
  }
  void          NFC_Free_Poll_Data(pollRes *out_pull_res) {}
  void          NFC_Free_Poll_DataFull(pollResFull *out_pull_res) {}
  ResponseCodes NFC_PT_Cancel_Polling(void)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_Activation(NFC_CARD_TYPE cardType, rawData* rd_activationData)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_TxRx(NFC_CARD_TYPE cardType, rawData* in_buff, rawData* out_buff)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_FtechBaud(NFC_F_BAUD baud)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_PT_Adv_TxRx(TX_RX_PARAM* comParams, rawData* in_buff, rawData* out_buff)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Mifare_Authenticate(unsigned char blockNumber, MIFARE_KEY_TYPE keyType, rawData*  Key)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Mifare_Read(I_MIFARE_CARD_TYPE m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, rawData* out_buff)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Mifare_Write(I_MIFARE_CARD_TYPE m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, rawData* in_buff)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Mifare_Increment(unsigned int blockNum, int amount)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Mifare_Decrement(unsigned int blockNum, int amount)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Mifare_Increment_Only(unsigned int blockNum, int amount)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Mifare_Decrement_Only(unsigned int blockNum, int amount)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Mifare_Transfer(unsigned int blockNum)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Mifare_Restore(unsigned int blockNum)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Felica_Exchange(felicaTxData* in_buff, felicaRxData* out_buff)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Felica_Polling(unsigned int pollTimeout, felicaPolling* inData, felicaPollingOutput* outData)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_APDU_Exchange(apduTxData* txData, apduRxData* rxData)
  {
    return EMB_APP_OK;
  }
  ResponseCodes NFC_Card_Removal(void)
  {
    return EMB_APP_OK;
  }
  VasStatus     NFC_Terminal_Config(rawData *input, rawData *output)
  {
    return VAS_OK;
  }
  VasStatus     NFC_TERMINAL_ReadConfig(rawData* id, rawData *output)
  {
    return VAS_OK;
  }
  VasStatus     NFC_VAS_ReadConfig(rawData* id, rawData *output)
  {
    return VAS_OK;
  }
  VasStatus     NFC_VAS_Activate(rawData* id, rawData *input, rawData *output)
  {
    return VAS_OK;
  }
  VasStatus     NFC_VAS_Cancel(void)
  {
    return VAS_OK;
  }
  VasStatus     NFC_VAS_UpdateConfig(rawData* id, rawData *input, rawData *output)
  {
    return VAS_OK;
  }
  VasStatus     NFC_VAS_CancelConfig(rawData*  id)
  {
    return VAS_OK;
  }
  VasStatus     NFC_VAS_PreLoad(rawData* id, rawData *input, rawData *output)
  {
    return VAS_OK;
  }
  VasStatus     NFC_VAS_CancelPreLoad(rawData*  id)
  {
    return VAS_OK;
  }
  VasStatus     NFC_VAS_Decrypt(rawData* id, rawData *input, rawData *output)
  {
    return VAS_OK;
  }
  VasStatus     NFC_VAS_Action(rawData* id, int action, rawData* inData, rawData* outBuff)
  {
    return VAS_OK;
  }

} // extern "C"

namespace vfigui
{
  int uiSetLED(int display, unsigned led, bool state)
  {
    (void) display;
    (void) led;
    (void) state;
    return -1;
  }

  int uiSetLED(unsigned led, bool state)
  {
    (void) led;
    (void) state;
    return -1;
  }
}

// namespace vfisysinfo
// {
// int ctlsLedsChangeState( int ledMap )
// {
//     (void) ledMap;
//     return -1;
// }
// int scrLedChangeState(int ledMap)
// {
//     (void) ledMap;
//     return -1;
// }
// int sysGetPropertyString(enum vfisysinfo::SYSPropertyString property, std::string & value)
// {
//     (void) property;
//     (void) value;
//     return -1;
// }
// int sysGetPropertyInt(enum vfisysinfo::SYSPropertyInt property, int& value)
// {
//     (void) property;
//     (void) value;
//     return -1;
// }
// }
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

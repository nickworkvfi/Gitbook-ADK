---
hidden: true
title: nfc.h
---

<a href="nfc_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _NFC_H_
 9 #define _NFC_H_
 10 
 11 #include <string>
 12 #include <vector>
 13 
 14 
 15 // appID storage for configuration cloning
 16 std::vector<std::string> &NFC_get_appID_Static();
 17 std::string &NFC_get_appID_Preload();
 18 
 19 bool NFC_getPreloadFileName(char* filename, unsigned buffersize, std::string appID);
 20 
 21 void NFC_deletePreloadFile();
 22 
 23 #define CLA_NFC 0x31 
 24 #define CLA_VAS 0x32 
 25 
 26 // General Commands
 27 #define INS_NFC_CLIENT_INIT 0x10 
 28 #define INS_NFC_PING 0x00 
 29 #define INS_NFC_GET_VERSION 0x11 
 30 #define INS_NFC_CONFIG_INIT 0x12 
 31 
 32 // Pass Through Commands
 33 #define INS_NFC_PT_OPEN 0x01 
 34 #define INS_NFC_PT_CLOSE 0x02 
 35 #define INS_NFC_PT_FIELDON 0x03 
 36 #define INS_NFC_PT_FIELDOFF 0x04 
 37 #define INS_NFC_PT_POLLING 0x05 
 38 #define INS_NFC_PT_CANCEL_POLLING 0x06 
 39 #define INS_NFC_PT_ACTIVATION 0x07 
 40 #define INS_NFC_PT_TXRX 0x08 
 41 #define INS_NFC_PT_FETCHBAUD 0x09 
 42 #define INS_NFC_PT_POLLINGFULL 0x13 
 43 #define INS_NFC_PT_POLLINGABF 0x1D 
 44 
 45 // Mifare Commands
 46 #define INS_NFC_MIFARE_AUTH 0x0A 
 47 #define INS_NFC_MIFARE_READ 0x0B 
 48 #define INS_NFC_MIFARE_WRITE 0x0C 
 49 #define INS_NFC_MIFARE_INCREMENT 0x0D 
 50 #define INS_NFC_MIFARE_DECREMENT 0x0E 
 51 #define INS_NFC_MIFARE_INCR_ONLY 0x15 
 52 #define INS_NFC_MIFARE_DECR_ONLY 0x16 
 53 #define INS_NFC_MIFARE_TRANSFER 0x17 
 54 #define INS_NFC_MIFARE_RESTORE 0x18 
 55 
 56 // Felica Commands
 57 #define INS_NFC_FELICA_EXCHANGE 0x0F 
 58 #define INS_NFC_FELICA_POLLING 0x14 
 59 
 60 // APDU Commands
 61 #define INS_NFC_APDU_EXCH 0x1C 
 62 
 63 // Target Mode
 64 #define INS_NFC_TARGET_ACTION 0x20 
 65 #define INS_NFC_CREATE_NDEF 0x21 
 66 
 67 // VAS Commands
 68 #define INS_VAS_NFC_TERM_CONFIG 0x00 
 69 #define INS_VAS_NFC_TERM_READ_CONFIG 0x01 
 70 #define INS_VAS_READ_CONFIG 0x02 
 71 #define INS_VAS_ACTIVATE 0x03 
 72 #define INS_VAS_CANCEL 0x04 
 73 #define INS_VAS_UPDATE_CONFIG 0x05 
 74 #define INS_VAS_CANCEL_CONFIG 0x06 
 75 #define INS_VAS_PRELOAD 0x07 
 76 #define INS_VAS_CANCEL_PRELOAD 0x08 
 77 #define INS_VAS_DECRYPT 0x09 
 78 #define INS_VAS_ACTION 0x0A 
 79 
 80 // Tags
 81 #define EMB_APP_F0_TEMPLATE_TAG 0xF0 
 82 #define EMB_APP_PING_TAG 0xDFA200
 83 #define EMB_APP_VERSION_TAG 0xDFA201
 84 #define EMB_APP_TECH_BITMAP_TAG 0xDFA202
 85 #define EMB_APP_POLL_TIMEOUT_TAG 0xDFA203
 86 #define TAG_DFA204_NFC_APDU_CMD 0xDFA204
 87 #define TAG_DFA205_NFC_APDU_RSP 0xDFA205
 88 #define EMB_APP_TXRX_DATA_TAG 0xDFA206
 89 #define EMB_APP_CUSTOM_POLL_DATA_TAG 0xDFA207
 90 #define EMB_APP_MIFARE_BLOCK_NUM_TAG 0xDFA208
 91 #define EMB_APP_MIFARE_KEY_TYPE_TAG 0xDFA209
 92 #define EMB_APP_MIFARE_KEY_TAG 0xDFA20A
 93 #define EMB_APP_MIFARE_CARD_TYPE_TAG 0xDFA20B
 94 #define EMB_APP_MIFARE_START_BLOCK_TAG 0xDFA20C
 95 #define EMB_APP_MIFARE_BLOCK_AMOUNT_TAG 0xDFA20D
 96 #define EMB_APP_MIFARE_READ_DATA_TAG 0xDFA20E
 97 #define EMB_APP_MIFARE_WRITE_DATA_TAG 0xDFA20F
 98 #define EMB_APP_MIFARE_AMOUNT_TAG 0xDFA210
 99 #define EMB_APP_FELICA_POLL_TIMEOUT_TAG 0xDFA211
 100 #define EMB_APP_FELICA_RECIVE_TIMEOUT_TAG 0xDFA212
 101 #define EMB_APP_FELICA_SYS_CODE_TAG 0xDFA213
 102 #define EMB_APP_FELICA_REQ_CODE_TAG 0xDFA214
 103 #define EMB_APP_FELICA_TIME_SLOT_TAG 0xDFA215
 104 #define EMB_APP_FELICA_UID_TAG 0xDFA216
 105 #define EMB_APP_FELICA_PAD_TAG 0xDFA217
 106 #define EMB_APP_FELICA_TIMEOUT_TAG 0xDFA218
 107 #define TAG_DFA219_NFC_APDU_SW12 0xDFA219
 108 #define TAG_DFA21A_NFC_DUTY_CYCLE_TAG 0xDFA21A
 109 #define TAG_DFA21B_NFC_TARGET_ACTION 0xDFA21B
 110 #define TAG_DFA21C_NFC_TIMEOUT 0xDFA21C
 111 #define TAG_DFA21D_NFC_IN_DATA 0xDFA21D
 112 #define TAG_DFA21E_NFC_OUT_DATA 0xDFA21E
 113 #define TAG_DFA21F_NFC_NDEF_TYPES 0xDFA21F
 114 
 115 
 116 
 117 
 118 #define TAG_DFA300_NFC_VAS_IN_OUT_DATA 0xDFA300
 119 #define TAG_DFA301_NFC_VAS_APP_ID 0xDFA301
 120 #define TAG_DFA302_NFC_VAS_ACTION 0xDFA302
 121 
 122 
 123 #ifdef __cplusplus
 124 extern "C"
 125 {
 126 #endif
 127 
 128 
 129 void handleNFC(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
 130 void handleVAS(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
 131 
 132 #ifdef __cplusplus
 133 }
 134 #endif
 135 
 136 #endif // _NFC_H_
```

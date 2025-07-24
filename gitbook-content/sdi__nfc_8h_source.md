---
hidden: true
title: sdi_nfc.h
---

<a href="sdi__nfc_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef CLIENT_SDI_NFC_H_
 2 #define CLIENT_SDI_NFC_H_
 3 
 4 #include <stddef.h>
 5 #include <stdlib.h>
 6 #include <nfc/NFC_Interface.h>
 7 #include <nfc/NFC_Client.h>
 8 
 9 // TODO doxygen
 10 namespace libsdi
 11 {
 12 
 25 CL_STATUS NFC_Client_Init(CONNECTION_TYPE type);
 26 
 31 CL_STATUS NFC_Client_Init_CheckVer(CONNECTION_TYPE type, int maj, int min, int bld);
 32 
 37 CL_STATUS NFC_SerialOpen(void);
 38 
 43 CL_STATUS NFC_SerialClose(void);
 44 
 48 ResponseCodes NFC_Ping(rawData *output);
 49 
 57 ResponseCodes NFC_Get_Version(rawData *output);
 58 
 64 ResponseCodes NFC_Config_Init(void);
 65 
 71 ResponseCodes NFC_Set_Callback_Function(rawData* id, NfcCallbackFunction *callbackFunction );
 72 
 77 ResponseCodes NFC_Callback_Test(void); // unsupported
 78 
 86 ResponseCodes NFC_PT_Open();
 87 
 95 ResponseCodes NFC_PT_Close();
 96 
 104 ResponseCodes NFC_PT_FieldOn();
 105 
 113 ResponseCodes NFC_PT_FieldOff();
 114 
 122 ResponseCodes NFC_PT_Polling(pollReq* inPollReq, pollRes* outPollRes);
 123 
 131 ResponseCodes NFC_PT_PollingFull(pollReq* inPollReq, pollResFull* outPollRes);
 132 
 137 void NFC_Free_Poll_Data(pollRes *outPollRes);
 138 
 143 void NFC_Free_Poll_Data_Full(pollResFull *outPollRes);
 144 
 152 ResponseCodes NFC_PT_Cancel_Polling(void); // unsupported for instance
 153 
 163 ResponseCodes NFC_PT_Activation(NFC_CARD_TYPE cardtype, rawData* rd_activationData);
 164 
 170 ResponseCodes NFC_PT_FtechBaud(NFC_F_BAUD baud);
 171 
 177 ResponseCodes NFC_PT_TxRx(NFC_CARD_TYPE cardtype, rawData* inBuff, rawData* outBuff); // unsupported
 178 
 186 ResponseCodes NFC_Mifare_Authenticate(unsigned char blockNumber, MIFARE_KEY_TYPE keyType, rawData* Key);
 187 
 196 ResponseCodes NFC_Mifare_Read (I_MIFARE_CARD_TYPE m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, rawData* out_buff);
 197 
 206 ResponseCodes NFC_Mifare_Write(I_MIFARE_CARD_TYPE m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, rawData* in_buff);
 207 
 214 ResponseCodes NFC_Mifare_Increment(unsigned int blockNum, int amount);
 215 
 222 ResponseCodes NFC_Mifare_Decrement(unsigned int blockNum, int amount);
 223 
 230 ResponseCodes NFC_Mifare_Increment_Only(unsigned int blockNum, int amount);
 231 
 238 ResponseCodes NFC_Mifare_Decrement_Only(unsigned int blockNum, int amount);
 239 
 245 ResponseCodes NFC_Mifare_Transfer(unsigned int blockNum);
 246 
 252 ResponseCodes NFC_Mifare_Restore(unsigned int blockNum);
 253 
 260 ResponseCodes NFC_Felica_Exchange(felicaTxData* in_buff, felicaRxData* out_buff);
 261 
 269 ResponseCodes NFC_Felica_Polling(unsigned int pollTimeout ,felicaPolling* inData , felicaPollingOutput* outData);
 270 
 278 ResponseCodes NFC_APDU_Exchange(apduTxData* txData, apduRxData* rxData); // unsupported
 279 
 286 VasStatus NFC_Terminal_Config(rawData *input, rawData *output);
 287 
 296 VasStatus NFC_TERMINAL_ReadConfig(rawData* id, rawData *output);
 297 
 304 VasStatus NFC_VAS_ReadConfig(rawData* id, rawData *output);
 305 
 313 VasStatus NFC_VAS_Activate(rawData* id,rawData *input, rawData *output);
 314 
 322 VasStatus NFC_VAS_Cancel(void);
 323 
 331 VasStatus NFC_VAS_UpdateConfig(rawData* id, rawData *input, rawData *output);
 332 
 338 VasStatus NFC_VAS_CancelConfig(rawData* id);
 339 
 349 VasStatus NFC_VAS_PreLoad(rawData* id, rawData *input, rawData *output);
 350 
 357 VasStatus NFC_VAS_CancelPreLoad(rawData* id);
 358 
 366 VasStatus NFC_VAS_Decrypt(rawData* id, rawData *input, rawData *output);
 367 
 373 VasStatus NFC_VAS_Action(rawData* id, int action,rawData* inData, rawData* outBuff);
 374 
 375 } // namespace libsdi
 376 
 377 
 378 // By default extern "C" NFC API is supported for migration. If this is
 379 // not required or if there are conflicts set SDI_NFC_NAMEPACE_ONLY to
 380 // have only the C++ variant in name space libsdi.
 381 #ifndef SDI_NFC_NAMESPACE_ONLY // enable if applicable
 382 
 383 #define NFC_Client_Init libsdi::NFC_Client_Init
 384 #define NFC_Client_Init_CheckVer libsdi::NFC_Client_Init_CheckVer
 385 #define NFC_SerialOpen libsdi::NFC_SerialOpen
 386 #define NFC_SerialClose libsdi::NFC_SerialClose
 387 
 388 #define NFC_Ping libsdi::NFC_Ping
 389 #define NFC_Get_Version libsdi::NFC_Get_Version
 390 #define NFC_Config_Init libsdi::NFC_Config_Init
 391 #define NFC_Set_Callback_Function libsdi::NFC_Set_Callback_Function
 392 #define NFC_Callback_Test libsdi::NFC_Callback_Test
 393 
 394 #define NFC_PT_Open libsdi::NFC_PT_Open
 395 #define NFC_PT_Close libsdi::NFC_PT_Close
 396 #define NFC_PT_FieldOn libsdi::NFC_PT_FieldOn
 397 #define NFC_PT_FieldOff libsdi::NFC_PT_FieldOff
 398 #define NFC_PT_Polling libsdi::NFC_PT_Polling
 399 #define NFC_PT_PollingFull libsdi::NFC_PT_PollingFull
 400 #define NFC_Free_Poll_Data libsdi::NFC_Free_Poll_Data
 401 #define NFC_Free_Poll_Data_Full libsdi::NFC_Free_Poll_Data_Full
 402 #define NFC_PT_Cancel_Polling libsdi::NFC_PT_Cancel_Polling
 403 #define NFC_PT_Activation libsdi::NFC_PT_Activation
 404 #define NFC_PT_FtechBaud libsdi::NFC_PT_FtechBaud
 405 #define NFC_PT_TxRx libsdi::NFC_PT_TxRx
 406 
 407 #define NFC_Mifare_Authenticate libsdi::NFC_Mifare_Authenticate
 408 #define NFC_Mifare_Read libsdi::NFC_Mifare_Read
 409 #define NFC_Mifare_Write libsdi::NFC_Mifare_Write
 410 #define NFC_Mifare_Increment libsdi::NFC_Mifare_Increment
 411 #define NFC_Mifare_Decrement libsdi::NFC_Mifare_Decrement
 412 #define NFC_Mifare_Increment_Only libsdi::NFC_Mifare_Increment_Only
 413 #define NFC_Mifare_Decrement_Only libsdi::NFC_Mifare_Decrement_Only
 414 #define NFC_Mifare_Transfer libsdi::NFC_Mifare_Transfer
 415 #define NFC_Mifare_Restore libsdi::NFC_Mifare_Restore
 416 
 417 #define NFC_Felica_Exchange libsdi::NFC_Felica_Exchange
 418 #define NFC_Felica_Polling libsdi::NFC_Felica_Polling
 419 #define NFC_APDU_Exchange libsdi::NFC_APDU_Exchange
 420 
 421 #define NFC_Terminal_Config libsdi::NFC_Terminal_Config
 422 #define NFC_TERMINAL_ReadConfig libsdi::NFC_TERMINAL_ReadConfig
 423 #define NFC_VAS_ReadConfig libsdi::NFC_VAS_ReadConfig
 424 #define NFC_VAS_Activate libsdi::NFC_VAS_Activate
 425 #define NFC_VAS_Cancel libsdi::NFC_VAS_Cancel
 426 #define NFC_VAS_UpdateConfig libsdi::NFC_VAS_UpdateConfig
 427 #define NFC_VAS_CancelConfig libsdi::NFC_VAS_CancelConfig
 428 #define NFC_VAS_PreLoad libsdi::NFC_VAS_PreLoad
 429 #define NFC_VAS_CancelPreLoad libsdi::NFC_VAS_CancelPreLoad
 430 #define NFC_VAS_Decrypt libsdi::NFC_VAS_Decrypt
 431 #define NFC_VAS_Action libsdi::NFC_VAS_Action
 432 
 433 #endif // SDI_NFC_NAMESPACE_ONLY
 434 #endif // CLIENT_SDI_NFC_H_
```

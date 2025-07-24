---
hidden: true
title: sdiprotocol.h
---

<a href="sdiprotocol_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 6 #ifndef _SDIPROTOCOL_H_
 7 #define _SDIPROTOCOL_H_
 8 
 9 #ifdef __cplusplus
 10 extern "C" {
 11 #endif
 12 
 16 #define SDI_PROTOCOL_ERR_IO -1 
 17 #define SDI_PROTOCOL_ERR_CONCURRENT_USE -2 
 18 #define SDI_PROTOCOL_ERR_CONNECT -3 
 19 #define SDI_PROTOCOL_ERR_OVERFLOW -4 
 20 #define SDI_PROTOCOL_ERR_PARAM -5 
 21 #define SDI_PROTOCOL_ERR_OTHER -6 
 22 #define SDI_PROTOCOL_ERR_NO_RECEIVE -7 
 23 
 26 
 30 #define SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK 0x01 
 31 #define SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG 0x02 
 32 #define SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG 0x04 
 33 
 35 
 36  /*****************************************************************************
 37  * SDI_ProtocolInit
 38  *****************************************************************************/
 60  int SDI_ProtocolInit(unsigned options, const char *settings);
 61 
 62  /*****************************************************************************
 63  * SDI_Send
 64  *****************************************************************************/
 74  int SDI_Send(const unsigned char *data, int dataLength);
 75 
 76  /*****************************************************************************
 77  * SDI_Receive
 78  *****************************************************************************/
 88  int SDI_Receive(unsigned char *responseBuffer, int responseBufferSize);
 89 
 90  /*****************************************************************************
 91  * SDI_SendReceive
 92  *****************************************************************************/
 104  int SDI_SendReceive(const unsigned char *data, int dataLength, unsigned char *responseBuffer, int responseBufferSize);
 105 
 106  /*****************************************************************************
 107  * SDI_Disconnect
 108  *****************************************************************************/
 116  int SDI_Disconnect(void);
 117 
 119  typedef void (*SDI_DATA_AVAILABLE_CALLBACK_TYPE)(void *context);
 120 
 121  /*****************************************************************************
 122  * SDI_SetDataAvailableCallback
 123  *****************************************************************************/
 131  int SDI_SetDataAvailableCallback(SDI_DATA_AVAILABLE_CALLBACK_TYPE cb, void *context);
 132 
 140  typedef void (*SDI_CALLBACK_TYPE)(unsigned char *dataIn, unsigned short sizeIn, unsigned char *dataOut, unsigned short *sizeOut, void *context);
 141 
 142  /***************************************************************************************
 143  * SDI_SetSdiCallback
 144  ****************************************************************************************/
 150  int SDI_SetSdiCallback(SDI_CALLBACK_TYPE cb, void *context);
 151 
 157  typedef void (*CARD_DETECTED_CALLBACK_TYPE)(unsigned char *dataIn, unsigned short sizeIn, void *context);
 158 
 159  /***************************************************************************************
 160  * SDI_SetCardDetectedCallback
 161  ****************************************************************************************/
 167  int SDI_SetCardDetectedCallback(CARD_DETECTED_CALLBACK_TYPE cb, void *context);
 168 
 169  /***************************************************************************************
 170  * SDI_SendSysAbort
 171  ****************************************************************************************/
 177  void SDI_SendSysAbort(void);
 178 
 179  /***************************************************************************************
 180  * SDI_SendExternalButton
 181  ****************************************************************************************/
 186  void SDI_SendExternalButton(void);
 187 
 191  typedef void (*EOF_DETECTED_CALLBACK_TYPE)(void *context);
 192 
 193  /***************************************************************************************
 194  * SDI_SetEOFDetectedCallback
 195  ****************************************************************************************/
 202  int SDI_SetEOFDetectedCallback(EOF_DETECTED_CALLBACK_TYPE cb, void *context);
 203 
 204 
 205 #ifdef __cplusplus
 206 }
 207 #endif
 208 
 209 #endif // _SDIPROTOCOL_H_
```

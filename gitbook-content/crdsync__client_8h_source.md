---
hidden: true
title: crdsync_client.h
---

<a href="crdsync__client_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 2 #ifndef __ADK_CRD_SYNC_CLIENT_INTERFACE__
 3 #define __ADK_CRD_SYNC_CLIENT_INTERFACE__
 4 
 5 #ifdef __cplusplus
 6 extern "C" {
 7 #endif
 8 
 9 // ================================================================================================
 10 
 11 
 13 
 14 typedef int CRDSYNC_RET;
 15 
 16 #define CRDSYNC_Success 0 
 17 #define CRDSYNC_Failure 1 
 18 #define CRDSYNC_Error_Power_Action 2 
 19 #define CRDSYNC_Error_Not_Supported 3 
 20 #define CRDSYNC_Error_BadParam 4 
 21 #define CRDSYNC_Error_Protocol 5 
 22 #define CRDSYNC_Error_Mem_Protected 6 
 23 #define CRDSYNC_Error_PSC_Required 7 
 24 #define CRDSYNC_Error_PSC 8 
 25 
 26 #define CRDSYNC_Error_FORMAT -101 
 27 #define CRDSYNC_Error_TLV -102 
 28 #define CRDSYNC_Error_PARAMETER -103 
 29 #define CRDSYNC_Error_UNKNOWN_CLA -104 
 30 #define CRDSYNC_Error_UNKNOWN_INS -105 
 31 #define CRDSYNC_Error_BLOCKED -106 
 32 
 33 #define CRDSYNC_Error_NO_SERVER -201 
 34 #define CRDSYNC_Error_IPC -202 
 35 
 36 
 37 
 40 
 41 #define CRDSYNC_CARDTYPE_AT24C01SC 1 
 42 #define CRDSYNC_CARDTYPE_AT24C02SC 2 
 43 #define CRDSYNC_CARDTYPE_AT24C04SC 3 
 44 #define CRDSYNC_CARDTYPE_AT24C08SC 4 
 45 #define CRDSYNC_CARDTYPE_AT24C16SC 5 
 46 #define CRDSYNC_CARDTYPE_ST14C02SC 6 
 47 #define CRDSYNC_CARDTYPE_AT24C32SC 7 
 48 #define CRDSYNC_CARDTYPE_AT24C64SC 8 
 49 #define CRDSYNC_CARDTYPE_SLE4418 9 
 50 #define CRDSYNC_CARDTYPE_SLE4428 10 
 51 #define CRDSYNC_CARDTYPE_SLE4432 11 
 52 #define CRDSYNC_CARDTYPE_SLE4442 12 
 53 #define CRDSYNC_CARDTYPE_AT24C128SC 13 
 54 #define CRDSYNC_CARDTYPE_AT24C256SC 14 
 55 
 56 
 57 
 59 typedef struct {
 60  const char *hostname;
 61  unsigned short port;
 62 } CRDSYNC_ServerConfig;
 63 
 64 
 70 typedef void (* CRDSYNC_TraceCallback) (const char *str, void *data);
 71 
 72 
 83 int crdSync_ConfigureServer(unsigned char server_cnt, const CRDSYNC_ServerConfig *server_cfg);
 84 
 85 
 91 void crdSync_Version(char *version, unsigned char len);
 92 
 93 
 99 void crdSync_SetTraceCallback(CRDSYNC_TraceCallback cbf, void *cb_data);
 100 
 101 
 102 //****************************************************************************
 110 //****************************************************************************
 111 CRDSYNC_RET crdSync_Open(unsigned char server_idx, unsigned Options);
 112 
 113 
 114 //****************************************************************************
 122 //****************************************************************************
 123 CRDSYNC_RET crdSync_Close(unsigned char server_idx, unsigned Options);
 124 
 125 
 126 //****************************************************************************
 133 //****************************************************************************
 134 CRDSYNC_RET crdSync_IsCardPresent(unsigned char server_idx);
 135 
 136 
 137 //****************************************************************************
 149 //****************************************************************************
 150 CRDSYNC_RET crdSync_PowerUp(unsigned char server_idx,
 151  int CardType,
 152  unsigned char AtrBuf[],
 153  unsigned char *AtrLen);
 154 
 155 
 156 //****************************************************************************
 163 //****************************************************************************
 164 CRDSYNC_RET crdSync_PowerDown(unsigned char server_idx);
 165 
 166 
 167 //****************************************************************************
 181 //****************************************************************************
 182 CRDSYNC_RET crdSync_ReadData(unsigned char server_idx,
 183  int MemoryAddress,
 184  unsigned char RxBuf[],
 185  unsigned short RxLen);
 186 
 187 
 188 //****************************************************************************
 202 //****************************************************************************
 203 CRDSYNC_RET crdSync_WriteData(unsigned char server_idx,
 204  int MemoryAddress,
 205  const unsigned char TxBuf[],
 206  unsigned short TxLen);
 207 
 208 
 209 //****************************************************************************
 220 //****************************************************************************
 221 CRDSYNC_RET crdSync_PresentSecretCode(unsigned char server_idx,
 222  const unsigned char PinCode[],
 223  unsigned short nSize);
 224 
 225 
 226 //****************************************************************************
 242 //****************************************************************************
 243 CRDSYNC_RET crdSync_ReadSecurityMem(unsigned char server_idx,
 244  unsigned char RxBuff[],
 245  unsigned char * BufLen);
 246 
 247 
 248 //****************************************************************************
 261 //****************************************************************************
 262 CRDSYNC_RET crdSync_WriteSecurityMem(unsigned char server_idx,
 263  const unsigned char TxBuf[],
 264  unsigned short TxLen);
 265 
 266 
 267 //****************************************************************************
 276 //****************************************************************************
 277 CRDSYNC_RET crdSync_ReadProtectionMem(unsigned char server_idx,
 278  unsigned char RxBuf[]);
 279 
 280 
 281 //****************************************************************************
 298 //****************************************************************************
 299 CRDSYNC_RET crdSync_WriteProtectionMem(unsigned char server_idx,
 300  unsigned short MemoryAddress,
 301  const unsigned char TxBuf[],
 302  unsigned short TxLen);
 303 
 304 
 305 //****************************************************************************
 322 //****************************************************************************
 323 CRDSYNC_RET crdSync_ReadWithProtectionBit(unsigned char server_idx,
 324  int MemoryAddress,
 325  unsigned char RxBuf[],
 326  unsigned short RxLen);
 327 
 328 
 329 //****************************************************************************
 347 //****************************************************************************
 348 CRDSYNC_RET crdSync_WriteWithProtectionBit(unsigned char server_idx,
 349  int MemoryAddress,
 350  unsigned char TxBuf[],
 351  unsigned short TxLen);
 352 
 353 
 354 // ================================================================================================
 355 
 356 #ifdef __cplusplus
 357 }
 358 #endif
 359 
 360 #endif // avoid double include
```

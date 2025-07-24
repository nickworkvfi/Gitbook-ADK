---
hidden: true
title: crdsync.h
---

<a href="crdsync_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 2 #ifndef __ADK_CRD_SYNC_INTERFACE__
 3 #define __ADK_CRD_SYNC_INTERFACE__
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
 26 
 27 
 30 
 31 #define CRDSYNC_CARDTYPE_AT24C01SC 1 
 32 #define CRDSYNC_CARDTYPE_AT24C02SC 2 
 33 #define CRDSYNC_CARDTYPE_AT24C04SC 3 
 34 #define CRDSYNC_CARDTYPE_AT24C08SC 4 
 35 #define CRDSYNC_CARDTYPE_AT24C16SC 5 
 36 #define CRDSYNC_CARDTYPE_ST14C02SC 6 
 37 #define CRDSYNC_CARDTYPE_AT24C32SC 7 
 38 #define CRDSYNC_CARDTYPE_AT24C64SC 8 
 39 #define CRDSYNC_CARDTYPE_SLE4418 9 
 40 #define CRDSYNC_CARDTYPE_SLE4428 10 
 41 #define CRDSYNC_CARDTYPE_SLE4432 11 
 42 #define CRDSYNC_CARDTYPE_SLE4442 12 
 43 #define CRDSYNC_CARDTYPE_AT24C128SC 13 
 44 #define CRDSYNC_CARDTYPE_AT24C256SC 14 
 45 
 46 
 47 
 53 void crdSync_Version(char *version, unsigned char len);
 54 
 60 typedef void (* CRDSYNC_TraceCallback) (const char *str, void *data);
 61 
 67 void crdSync_SetTraceCallback(CRDSYNC_TraceCallback cbf, void *cb_data);
 68 
 69 
 70 //****************************************************************************
 77 //****************************************************************************
 78 CRDSYNC_RET crdSync_Open(unsigned Options);
 79 
 80 
 81 //****************************************************************************
 88 //****************************************************************************
 89 CRDSYNC_RET crdSync_Close(unsigned Options);
 90 
 91 
 92 //****************************************************************************
 97 //****************************************************************************
 98 CRDSYNC_RET crdSync_IsCardPresent();
 99 
 100 
 101 //****************************************************************************
 112 //****************************************************************************
 113 CRDSYNC_RET crdSync_PowerUp(int CardType,
 114  unsigned char AtrBuf[],
 115  unsigned char *AtrLen);
 116 
 117 
 118 //****************************************************************************
 123 //****************************************************************************
 124 CRDSYNC_RET crdSync_PowerDown();
 125 
 126 
 127 //****************************************************************************
 140 //****************************************************************************
 141 CRDSYNC_RET crdSync_ReadData(int MemoryAddress,
 142  unsigned char RxBuf[],
 143  unsigned short RxLen);
 144 
 145 
 146 //****************************************************************************
 159 //****************************************************************************
 160 CRDSYNC_RET crdSync_WriteData(int MemoryAddress,
 161  const unsigned char TxBuf[],
 162  unsigned short TxLen);
 163 
 164 
 165 //****************************************************************************
 175 //****************************************************************************
 176 CRDSYNC_RET crdSync_PresentSecretCode(const unsigned char PinCode[],
 177  unsigned short nSize);
 178 
 179 
 180 //****************************************************************************
 195 //****************************************************************************
 196 CRDSYNC_RET crdSync_ReadSecurityMem(unsigned char RxBuff[],
 197  unsigned char * BufLen);
 198 
 199 
 200 //****************************************************************************
 212 //****************************************************************************
 213 CRDSYNC_RET crdSync_WriteSecurityMem(const unsigned char TxBuf[],
 214  unsigned short TxLen);
 215 
 216 
 217 //****************************************************************************
 225 //****************************************************************************
 226 CRDSYNC_RET crdSync_ReadProtectionMem(unsigned char RxBuf[]);
 227 
 228 
 229 //****************************************************************************
 245 //****************************************************************************
 246 CRDSYNC_RET crdSync_WriteProtectionMem(unsigned short MemoryAddress,
 247  const unsigned char TxBuf[],
 248  unsigned short TxLen);
 249 
 250 
 251 //****************************************************************************
 267 //****************************************************************************
 268 CRDSYNC_RET crdSync_ReadWithProtectionBit(int MemoryAddress,
 269  unsigned char RxBuf[],
 270  unsigned short RxLen);
 271 
 272 
 273 //****************************************************************************
 290 //****************************************************************************
 291 CRDSYNC_RET crdSync_WriteWithProtectionBit(int MemoryAddress,
 292  unsigned char TxBuf[],
 293  unsigned short TxLen);
 294 
 295 
 296 // ================================================================================================
 297 
 298 #ifdef __cplusplus
 299 }
 300 #endif
 301 
 302 #endif // avoid double include
```

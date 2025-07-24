---
hidden: true
title: sdi_emv.h
---

<a href="sdiclient_2client_2sdi__emv_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: ADK Secure Data Interface (SDI)
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: Client (structure) interface - EMV functions
 6 ****************************************************************************/
 7 
 8 #ifndef _SDI_CLIENT_EMV_INTERFACE_H_ /* avoid double interface-includes */
 9 #define _SDI_CLIENT_EMV_INTERFACE_H_
 10 
 11 #ifdef __cplusplus
 12 extern "C" {
 13 #endif
 14 
 15 #include "emv/EMV_SDI.h"
 16 #include "emv/EMV_CT_Interface.h"
 17 #include "emv/EMV_CT_Link.h"
 18 #include "emv/EMV_CTLS_Interface.h"
 19 #include "emv/EMV_CTLS_Link.h"
 20 
 21 
 22 // ==================================================================================================================================================
 35 int SDI_Client_Init(const char* options);
 36 
 37 // ==================================================================================================================================================
 38 EMV_ADK_INFO SDI_CT_Init_Framework_Client(const char *version, unsigned char numberOfAIDs, EMV_CT_CALLBACK_FnT EMV_Callback, void* externalData, unsigned long options);
 39 #define SDI_CT_Init_Framework(numberOfAIDs, EMV_Callback, externalData, options) SDI_CT_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options))
 40 void SDI_CT_Exit_Framework(void);
 41 void SDI_CT_Exit_Framework_extended(unsigned char options);
 42 
 43 const char* SDI_CT_CLIENT_GetVersion(void);
 44 const char* SDI_CT_FRAMEWORK_GetVersion(void);
 45 
 46 EMV_ADK_INFO SDI_CT_MapVirtualTerminal(EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType, unsigned char *TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal);
 47 
 48 EMV_ADK_INFO SDI_CT_StoreCAPKey(EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType, const EMV_CT_CAPKEY_TYPE *pxKeyData);
 49 EMV_ADK_INFO SDI_CT_ReadCAPKeys(EMV_CT_CAPREAD_TYPE *pxKeyData, unsigned char *pucMaxnum);
 50 EMV_ADK_INFO SDI_CT_GetCAPKeyInfo(EMV_CT_CAPREAD_TYPE *pxKeyInfo, unsigned capacity, unsigned offset, unsigned *received, unsigned *configured);
 51 EMV_ADK_INFO SDI_CT_SetTermData(EMV_CT_TERMDATA_TYPE* pxTermData);
 52 EMV_ADK_INFO SDI_CT_GetTermData(EMV_CT_TERMDATA_TYPE* pxTermData);
 53 EMV_ADK_INFO SDI_CT_SetAppliData(EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CT_APPLI_TYPE* pxAID, EMV_CT_APPLIDATA_TYPE* pxAppliData);
 54 EMV_ADK_INFO SDI_CT_GetAppliData(EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CT_APPLI_TYPE* pxAID, EMV_CT_APPLIDATA_TYPE* pxAppliData);
 55 EMV_ADK_INFO SDI_CT_ApplyConfiguration(unsigned long options);
 56 
 57 EMV_ADK_INFO SDI_CT_StartTransaction(EMV_CT_SELECT_TYPE *pxSelectInput, EMV_CT_SELECTRES_TYPE* pxSelectRes);
 58 EMV_ADK_INFO SDI_CT_GetCandidateData(EMV_CT_CANDIDATE_DATA_TYPE *candidateData);
 59 EMV_ADK_INFO SDI_CT_ContinueOffline(EMV_CT_TRANSAC_TYPE *pxTransactionInput, EMV_CT_TRANSRES_TYPE *pxTransRes, EMV_SDI_CT_TRANSRES_TYPE *pxSdiTransRes);
 60 EMV_ADK_INFO SDI_CT_ContinueOnline(EMV_CT_HOST_TYPE *pxOnlineInput, EMV_CT_TRANSRES_TYPE *pxTransRes, EMV_SDI_CT_TRANSRES_TYPE *pxSdiTransRes);
 61 EMV_ADK_INFO SDI_CT_updateTxnTags(unsigned long options, unsigned char *tlvBuffer, unsigned short bufferLength);
 62 EMV_ADK_INFO SDI_CT_CheckSupportedAID(const EMV_CT_APPLI_TYPE* aid, unsigned char ASI, const unsigned char* defaultLabel, EMV_CT_CandListType* pCandList,
 63  unsigned char MaxCand, unsigned char* pCandidateCount, unsigned short* sw12, const unsigned char* adtCardTagList);
 64 EMV_ADK_INFO SDI_CT_EndTransaction(unsigned long options);
 65 
 66 unsigned char SDI_CT_SmartISO (unsigned char ucOptions, unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut, unsigned short usOutBufferLength);
 67 unsigned char SDI_CT_SmartDetect(unsigned char ucOptions);
 68 unsigned char SDI_CT_SmartReset(unsigned char ucOptions, unsigned char* pucATR, unsigned long* pnATRLength);
 69 unsigned char SDI_CT_SmartPowerOff(unsigned char ucOptions);
 70 
 71 unsigned char SDI_CT_Send_PIN_Offline(unsigned char *pucPINResultData);
 72 
 73 unsigned char SDI_CT_LED(unsigned char ucLedId, unsigned char ucLedState, unsigned char ucLedColor, unsigned long ulTimeoutMs);
 74 
 75 
 76 // ==================================================================================================================================================
 77 EMV_ADK_INFO SDI_CT_SER_Init_Framework (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 78 void SDI_CT_SER_Exit_Framework (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 79 EMV_ADK_INFO SDI_CT_SER_MapVirtualTerminal(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 80 EMV_ADK_INFO SDI_CT_SER_StoreCAPKey (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 81 EMV_ADK_INFO SDI_CT_SER_ReadCAPKeys (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 82 EMV_ADK_INFO SDI_CT_SER_SetTermData (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 83 EMV_ADK_INFO SDI_CT_SER_GetTermData (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 84 EMV_ADK_INFO SDI_CT_SER_SetAppliData (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 85 EMV_ADK_INFO SDI_CT_SER_GetAppliData (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 86 EMV_ADK_INFO SDI_CT_SER_StartTransaction (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 87 EMV_ADK_INFO SDI_CT_SER_GetCandidateData (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 88 EMV_ADK_INFO SDI_CT_SER_ContinueOffline (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 89 EMV_ADK_INFO SDI_CT_SER_ContinueOnline (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 90 EMV_ADK_INFO SDI_CT_SER_updateTxnTags (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 91 EMV_ADK_INFO SDI_CT_SER_CheckSupportedAID (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 92 EMV_ADK_INFO SDI_CT_SER_EndTransaction (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 93 unsigned char SDI_CT_SER_SmartISO (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 94 unsigned char SDI_CT_SER_SmartDetect (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 95 unsigned char SDI_CT_SER_SmartReset (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 96 unsigned char SDI_CT_SER_SmartPowerOff (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 97 unsigned char SDI_CT_SER_SmartPIN (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 98 unsigned char SDI_CT_SER_Send_PIN_Offline (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 99 
 100 
 101 EMV_ADK_INFO SDI_CTLS_Init_Framework_Client(const char *version, unsigned char numberOfAIDs, EMV_CTLS_CALLBACK_FnT EMV_Callback, void* externalData, unsigned long options, unsigned long *ulResult);
 102 #define SDI_CTLS_Init_Framework(numberOfAIDs, EMV_Callback, externalData, options,ulResult) SDI_CTLS_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options),(ulResult))
 103 void SDI_CTLS_Exit_Framework(void);
 104 void SDI_CTLS_Exit_Framework_extended(unsigned char options);
 105 const char* SDI_CTLS_CLIENT_GetVersion(void);
 106 const char* SDI_CTLS_FRAMEWORK_GetVersion(void);
 107 EMV_ADK_INFO SDI_CTLS_MapVirtualTerminal(EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType, unsigned char *TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal);
 108 EMV_ADK_INFO SDI_CTLS_StoreCAPKey(EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType, const EMV_CTLS_CAPKEY_TYPE *pxKeyData);
 109 EMV_ADK_INFO SDI_CTLS_ReadCAPKeys(EMV_CTLS_CAPREAD_TYPE *pxKeyData, unsigned char *pucMaxnum);
 110 EMV_ADK_INFO SDI_CTLS_GetCAPKeyInfo(EMV_CTLS_CAPREAD_TYPE *pxKeyInfo, unsigned capacity, unsigned offset, unsigned *received, unsigned *configured);
 111 EMV_ADK_INFO SDI_CTLS_SetTermData(EMV_CTLS_TERMDATA_TYPE* pxTermData);
 112 EMV_ADK_INFO SDI_CTLS_GetTermData(EMV_CTLS_TERMDATA_TYPE* pxTermData);
 113 EMV_ADK_INFO SDI_CTLS_SetAppliDataSchemeSpecific(EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CTLS_APPLI_KERNEL_TYPE* pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE* pxAppliData);
 114 EMV_ADK_INFO SDI_CTLS_GetAppliDataSchemeSpecific(EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CTLS_APPLI_KERNEL_TYPE* pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE* pxAppliData);
 115 EMV_ADK_INFO SDI_CTLS_ApplyConfiguration(unsigned long options);
 116 EMV_ADK_INFO SDI_CTLS_SetupTransaction(EMV_CTLS_START_TYPE *pxStartInput, EMV_CTLS_STARTRES_TYPE* pxStartRes);
 117 EMV_ADK_INFO SDI_CTLS_ContinueOffline(EMV_CTLS_TRANSRES_TYPE *pxTransRes, EMV_SDI_CTLS_TRANSRES_TYPE *pxSdiTransRes);
 118 EMV_ADK_INFO SDI_CTLS_ContinueOfflineExt(EMV_CTLS_CONT_OFFL_TYPE *pxContOfflInput, EMV_CTLS_TRANSRES_TYPE *pxTransRes, EMV_SDI_CTLS_TRANSRES_TYPE *pxSdiTransRes);
 119 EMV_ADK_INFO SDI_CTLS_ContinueOnline(EMV_CTLS_HOST_TYPE *pxOnlineInput, EMV_CTLS_TRANSRES_TYPE *pxTransRes, EMV_SDI_CTLS_TRANSRES_TYPE *pxSdiTransRes);
 120 EMV_ADK_INFO SDI_CTLS_EndTransaction(unsigned long options);
 121 unsigned char SDI_CTLS_SmartISO(unsigned char ucOptions, unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut, unsigned short usOutBufferLength);
 122 unsigned char SDI_CTLS_SmartReset(unsigned char ucOptions, unsigned char* pucCardInfo, unsigned long* pnInfoLength);
 123 unsigned char SDI_CTLS_SmartPowerOff(unsigned char ucOptions);
 124 unsigned char SDI_CTLS_CardRemoval(long timeoutMillis);
 125 unsigned char SDI_CTLS_LED(unsigned char ucLedId, unsigned char ucLedState);
 126 unsigned char SDI_CTLS_LED_SetMode(unsigned char ucLedMode);
 127 unsigned char SDI_CTLS_Break(void);
 128 EMV_ADK_INFO SDI_CTLS_GetCandidateData(EMV_CTLS_CANDIDATE_DATA_TYPE *candidateData);
 129 
 130 // ==================================================================================================================================================
 131 
 132 EMV_ADK_INFO SDI_CTLS_SER_Init_Framework(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 133 void SDI_CTLS_SER_Exit_Framework(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 134 EMV_ADK_INFO SDI_CTLS_SER_MapVirtualTerminal(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 135 EMV_ADK_INFO SDI_CTLS_SER_StoreCAPKey(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 136 EMV_ADK_INFO SDI_CTLS_SER_ReadCAPKeys(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 137 EMV_ADK_INFO SDI_CTLS_SER_SetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 138 EMV_ADK_INFO SDI_CTLS_SER_GetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 139 EMV_ADK_INFO SDI_CTLS_SER_SetAppliDataSchemeSpecific(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 140 EMV_ADK_INFO SDI_CTLS_SER_GetAppliDataSchemeSpecific(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 141 EMV_ADK_INFO SDI_CTLS_SER_SetupTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 142 EMV_ADK_INFO SDI_CTLS_SER_ContinueOffline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 143 EMV_ADK_INFO SDI_CTLS_SER_ContinueOnline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 144 EMV_ADK_INFO SDI_CTLS_SER_EndTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 145 unsigned char SDI_CTLS_SER_SmartISO(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 146 unsigned char SDI_CTLS_SER_SmartReset(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 147 unsigned char SDI_CTLS_SER_SmartPowerOff(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 148 unsigned char SDI_CTLS_SER_CardRemoval(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 149 unsigned char SDI_CTLS_SER_LED_SetMode(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 150 unsigned char SDI_CTLS_SER_LED(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 151 unsigned char SDI_CTLS_SER_Break(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 152 EMV_ADK_INFO SDI_CTLS_SER_GetCandidateData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 153 
 154 
 155 #ifdef __cplusplus
 156 } // extern "C"
 157 #endif
 158 
 159 #endif // #ifndef _SDI_CLIENT_EMV_INTERFACE_H_
```

---
hidden: true
title: EMV_CTLS_Link.h
---

<a href="_e_m_v___c_t_l_s___link_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef _EMV_CTLS_LINK_H_
 2 #define _EMV_CTLS_LINK_H_
 3 
 4 #include "emv/btlv.h"
 5 #include "emv/EMV_Common_Interface.h"
 6 
 7 #define DLL_CLL // NOTE: Do not set visibility("default") because export.map is used
 8 
 9 #ifdef __cplusplus
 10 extern "C" {
 11 #endif
 12 
 13 /*****************************************************************************
 14 * EMV_CTLS_CallbackFunction
 15 *****************************************************************************/
 35 typedef void (EMV_CTLS_CALLBACK_Func) (unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData);
 36 
 41 typedef EMV_CTLS_CALLBACK_Func* EMV_CTLS_CALLBACK_FnT;
 42 
 47 #define EMV_CTLS_CALLBACK_STACK_SIZE 0xC000
 48 
 49 #define FS_CALLBACK_CTLS_DATA_RECORD 0xFF // currently max. 201 bytes (5 candidates in cbk_reduceCandidateList())
 50 
 51 
 52 /*****************************************************************************
 53 * EMV_CTLS_Interface
 54 *****************************************************************************/
 65 EMV_ADK_INFO EMV_CTLS_Interface(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 66 
 67 /*****************************************************************************
 68 * EMV_CTLS_IF_Header
 69 *****************************************************************************/
 81 EMV_ADK_INFO EMV_CTLS_IF_Header(const unsigned char* header, const unsigned char *dataIn, unsigned short dataInLen, unsigned char *response, unsigned short *responseLen);
 82 
 83 /*****************************************************************************
 84 * EMV_CTLS_IF_BERTLV
 85 *****************************************************************************/
 95 EMV_ADK_INFO EMV_CTLS_IF_BERTLV(const unsigned char* header, const struct BTLVNode* dataIn, struct BTLVNode* dataOut);
 96 
 97 /*****************************************************************************
 98 * EMV_CTLS_Disconnect
 99 *****************************************************************************/
 111 void EMV_CTLS_Disconnect(unsigned char options);
 112 
 113 /*****************************************************************************
 114 * EMV_CTLS_SetClientMode
 115 *****************************************************************************/
 128 void EMV_CTLS_SetClientMode(enum EMV_CLIENT_MODE mode);
 129 
 130 /*****************************************************************************
 131 * EMV_CTLS_GetClientMode
 132 *****************************************************************************/
 143 enum EMV_CLIENT_MODE EMV_CTLS_GetClientMode();
 144 
 145 /*****************************************************************************
 146 * EMV_CTLS_SetCallback
 147 *****************************************************************************/
 156 void EMV_CTLS_SetCallback(EMV_CTLS_CALLBACK_FnT EMV_Callback, void* context);
 157 
 158 /*****************************************************************************
 159 * EMV_CTLS_SetCallback
 160 *****************************************************************************/
 168 unsigned long EMV_CTLS_GetInitOptions(void);
 169 
 170 /*****************************************************************************
 171 * EMV_CTLS_getSdiSW12
 172 *****************************************************************************/
 181 unsigned EMV_CTLS_GetSdiSW12();
 182 
 183 #ifdef __cplusplus
 184 } // extern "C"
 185 #endif
 186 
 187 #endif // _EMV_CTLS_LINK_H_
```

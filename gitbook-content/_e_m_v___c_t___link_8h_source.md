---
hidden: true
title: EMV_CT_Link.h
---

<a href="_e_m_v___c_t___link_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: ADK Cards Service - EMV Contact (CT)
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: Client interface - transport layer
 6 ****************************************************************************/
 7 
 8 #ifndef _EMV_CT_LINK_H_
 9 #define _EMV_CT_LINK_H_
 10 
 11 #include "emv/btlv.h"
 12 #include "emv/EMV_Common_Interface.h"
 13 
 14 #define DLL_CTL // NOTE: Do not set visibility("default") because export.map is used
 15 
 16 #ifdef __cplusplus
 17 extern "C" {
 18 #endif
 19 
 20 /*****************************************************************************
 21 * EMV_CT_CALLBACK_FnT
 22 *****************************************************************************/
 45 typedef void (* EMV_CT_CALLBACK_FnT) (unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void* externalData);
 46 
 47 /*****************************************************************************
 48 * EMV_CT_Interface
 49 *****************************************************************************/
 60 EMV_ADK_INFO EMV_CT_Interface(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 61 
 62 /*****************************************************************************
 63 * EMV_CT_IF_Header
 64 *****************************************************************************/
 76 EMV_ADK_INFO EMV_CT_IF_Header(const unsigned char* header, const unsigned char *dataIn, unsigned short dataInLen, unsigned char *response, unsigned short *responseLen);
 77 
 78 /*****************************************************************************
 79 * EMV_CT_IF_BERTLV
 80 *****************************************************************************/
 90 EMV_ADK_INFO EMV_CT_IF_BERTLV(const unsigned char* header, const struct BTLVNode* dataIn, struct BTLVNode* dataOut);
 91 
 92 /*****************************************************************************
 93 * EMV_CT_Disconnect
 94 *****************************************************************************/
 105 void EMV_CT_Disconnect(void);
 106 
 107 /*****************************************************************************
 108 * EMV_CT_SetClientMode
 109 *****************************************************************************/
 120 void EMV_CT_SetClientMode(enum EMV_CLIENT_MODE mode);
 121 
 122 /*****************************************************************************
 123 * EMV_CT_GetClientMode
 124 *****************************************************************************/
 135 enum EMV_CLIENT_MODE EMV_CT_GetClientMode();
 136 
 137 /*****************************************************************************
 138 * EMV_CT_SetCallback
 139 *****************************************************************************/
 148 void EMV_CT_SetCallback(EMV_CT_CALLBACK_FnT EMV_Callback, void* context);
 149 
 150 /*****************************************************************************
 151 * EMV_CT_GetInitOptions
 152 *****************************************************************************/
 160 unsigned long EMV_CT_GetInitOptions(void);
 161 
 162 /*****************************************************************************
 163 * EMV_CT_getSdiSW12
 164 *****************************************************************************/
 173 unsigned EMV_CT_GetSdiSW12();
 174 
 175 #ifdef __cplusplus
 176 } // extern "C"
 177 #endif
 178 
 179 #endif // _EMV_CT_LINK_H_
```

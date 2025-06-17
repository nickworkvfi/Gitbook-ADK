---
title: sdiclient/client/sdi_emv.h

---

# sdiclient/client/sdi_emv.h



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[SDI_Client_Init](sdiclient_2client_2sdi__emv_8h.md#function-sdi-client-init)**(const char * options)<br>Initialize SDI client.  |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_Init_Framework_Client](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-init-framework-client)**(const char * version, unsigned char numberOfAIDs, [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) EMV_Callback, void * externalData, unsigned long options) |
| void | **[SDI_CT_Exit_Framework](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-exit-framework)**(void ) |
| void | **[SDI_CT_Exit_Framework_extended](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-exit-framework-extended)**(unsigned char options) |
| const char * | **[SDI_CT_CLIENT_GetVersion](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-client-getversion)**(void ) |
| const char * | **[SDI_CT_FRAMEWORK_GetVersion](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-framework-getversion)**(void ) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_MapVirtualTerminal](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-mapvirtualterminal)**([EMV_ADK_VIRTUALTERMMAP_TYPE](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md#typedef-emv-adk-virtualtermmap-type) VirtualTermMapType, unsigned char * TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_StoreCAPKey](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-storecapkey)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleCAPKeyType, const [EMV_CT_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capkey-type) * pxKeyData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_ReadCAPKeys](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-readcapkeys)**([EMV_CT_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capread-type) * pxKeyData, unsigned char * pucMaxnum) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_GetCAPKeyInfo](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-getcapkeyinfo)**([EMV_CT_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capread-type) * pxKeyInfo, unsigned capacity, unsigned offset, unsigned * received, unsigned * configured) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SetTermData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-settermdata)**([EMV_CT_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ct-termdata-type) * pxTermData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_GetTermData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-gettermdata)**([EMV_CT_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ct-termdata-type) * pxTermData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SetAppliData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-setapplidata)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleAppliType, [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) * pxAID, [EMV_CT_APPLIDATA_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ct-applidata-type) * pxAppliData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_GetAppliData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-getapplidata)**([EMV_ADK_READAPPLI_TYPE](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#typedef-emv-adk-readappli-type) eReadAppliType, [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) * pxAID, [EMV_CT_APPLIDATA_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ct-applidata-type) * pxAppliData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_ApplyConfiguration](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-applyconfiguration)**(unsigned long options) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_StartTransaction](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-starttransaction)**([EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type) * pxSelectInput, [EMV_CT_SELECTRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-selectres-type) * pxSelectRes) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_GetCandidateData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-getcandidatedata)**([EMV_CT_CANDIDATE_DATA_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-candidate-data-type) * candidateData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_ContinueOffline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-continueoffline)**([EMV_CT_TRANSAC_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transac-type) * pxTransactionInput, [EMV_CT_TRANSRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transres-type) * pxTransRes, EMV_SDI_CT_TRANSRES_TYPE * pxSdiTransRes) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_ContinueOnline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-continueonline)**([EMV_CT_HOST_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-host-type) * pxOnlineInput, [EMV_CT_TRANSRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transres-type) * pxTransRes, EMV_SDI_CT_TRANSRES_TYPE * pxSdiTransRes) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_updateTxnTags](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-updatetxntags)**(unsigned long options, unsigned char * tlvBuffer, unsigned short bufferLength) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_CheckSupportedAID](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-checksupportedaid)**(const [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) * aid, unsigned char ASI, const unsigned char * defaultLabel, [EMV_CT_CandListType](struct_e_m_v___c_t___cand_list_type.md) * pCandList, unsigned char MaxCand, unsigned char * pCandidateCount, unsigned short * sw12, const unsigned char * adtCardTagList) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_EndTransaction](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-endtransaction)**(unsigned long options) |
| unsigned char | **[SDI_CT_SmartISO](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-smartiso)**(unsigned char ucOptions, unsigned short usInDataLen, unsigned char * pucDataIn, unsigned short * pusOutDataLen, unsigned char * pucDataOut, unsigned short usOutBufferLength) |
| unsigned char | **[SDI_CT_SmartDetect](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-smartdetect)**(unsigned char ucOptions) |
| unsigned char | **[SDI_CT_SmartReset](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-smartreset)**(unsigned char ucOptions, unsigned char * pucATR, unsigned long * pnATRLength) |
| unsigned char | **[SDI_CT_SmartPowerOff](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-smartpoweroff)**(unsigned char ucOptions) |
| unsigned char | **[SDI_CT_Send_PIN_Offline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-send-pin-offline)**(unsigned char * pucPINResultData) |
| unsigned char | **[SDI_CT_LED](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-led)**(unsigned char ucLedId, unsigned char ucLedState, unsigned char ucLedColor, unsigned long ulTimeoutMs) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_Init_Framework](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-init-framework)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| void | **[SDI_CT_SER_Exit_Framework](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-exit-framework)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_MapVirtualTerminal](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-mapvirtualterminal)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_StoreCAPKey](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-storecapkey)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_ReadCAPKeys](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-readcapkeys)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_SetTermData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-settermdata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_GetTermData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-gettermdata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_SetAppliData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-setapplidata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_GetAppliData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-getapplidata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_StartTransaction](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-starttransaction)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_GetCandidateData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-getcandidatedata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_ContinueOffline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-continueoffline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_ContinueOnline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-continueonline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_updateTxnTags](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-updatetxntags)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_CheckSupportedAID](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-checksupportedaid)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CT_SER_EndTransaction](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-endtransaction)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CT_SER_SmartISO](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-smartiso)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CT_SER_SmartDetect](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-smartdetect)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CT_SER_SmartReset](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-smartreset)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CT_SER_SmartPowerOff](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-smartpoweroff)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CT_SER_SmartPIN](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-smartpin)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CT_SER_Send_PIN_Offline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-send-pin-offline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_Init_Framework_Client](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-init-framework-client)**(const char * version, unsigned char numberOfAIDs, [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt) EMV_Callback, void * externalData, unsigned long options, unsigned long * ulResult) |
| void | **[SDI_CTLS_Exit_Framework](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-exit-framework)**(void ) |
| void | **[SDI_CTLS_Exit_Framework_extended](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-exit-framework-extended)**(unsigned char options) |
| const char * | **[SDI_CTLS_CLIENT_GetVersion](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-client-getversion)**(void ) |
| const char * | **[SDI_CTLS_FRAMEWORK_GetVersion](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-framework-getversion)**(void ) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_MapVirtualTerminal](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-mapvirtualterminal)**([EMV_ADK_VIRTUALTERMMAP_TYPE](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md#typedef-emv-adk-virtualtermmap-type) VirtualTermMapType, unsigned char * TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_StoreCAPKey](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-storecapkey)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleCAPKeyType, const [EMV_CTLS_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capkey-type) * pxKeyData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_ReadCAPKeys](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-readcapkeys)**([EMV_CTLS_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capread-type) * pxKeyData, unsigned char * pucMaxnum) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_GetCAPKeyInfo](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-getcapkeyinfo)**([EMV_CTLS_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capread-type) * pxKeyInfo, unsigned capacity, unsigned offset, unsigned * received, unsigned * configured) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SetTermData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-settermdata)**([EMV_CTLS_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ctls-termdata-type) * pxTermData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_GetTermData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-gettermdata)**([EMV_CTLS_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ctls-termdata-type) * pxTermData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SetAppliDataSchemeSpecific](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-setapplidataschemespecific)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleAppliType, [EMV_CTLS_APPLI_KERNEL_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-kernel-type) * pxAID, [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-scheme-specific-type) * pxAppliData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_GetAppliDataSchemeSpecific](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-getapplidataschemespecific)**([EMV_ADK_READAPPLI_TYPE](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#typedef-emv-adk-readappli-type) eReadAppliType, [EMV_CTLS_APPLI_KERNEL_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-kernel-type) * pxAID, [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-scheme-specific-type) * pxAppliData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_ApplyConfiguration](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-applyconfiguration)**(unsigned long options) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SetupTransaction](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-setuptransaction)**([EMV_CTLS_START_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-start-type) * pxStartInput, [EMV_CTLS_STARTRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-startres-type) * pxStartRes) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_ContinueOffline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-continueoffline)**([EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type) * pxTransRes, EMV_SDI_CTLS_TRANSRES_TYPE * pxSdiTransRes) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_ContinueOfflineExt](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-continueofflineext)**([EMV_CTLS_CONT_OFFL_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-cont-offl-type) * pxContOfflInput, [EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type) * pxTransRes, EMV_SDI_CTLS_TRANSRES_TYPE * pxSdiTransRes) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_ContinueOnline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-continueonline)**([EMV_CTLS_HOST_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-host-type) * pxOnlineInput, [EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type) * pxTransRes, EMV_SDI_CTLS_TRANSRES_TYPE * pxSdiTransRes) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_EndTransaction](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-endtransaction)**(unsigned long options) |
| unsigned char | **[SDI_CTLS_SmartISO](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-smartiso)**(unsigned char ucOptions, unsigned short usInDataLen, unsigned char * pucDataIn, unsigned short * pusOutDataLen, unsigned char * pucDataOut, unsigned short usOutBufferLength) |
| unsigned char | **[SDI_CTLS_SmartReset](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-smartreset)**(unsigned char ucOptions, unsigned char * pucCardInfo, unsigned long * pnInfoLength) |
| unsigned char | **[SDI_CTLS_SmartPowerOff](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-smartpoweroff)**(unsigned char ucOptions) |
| unsigned char | **[SDI_CTLS_CardRemoval](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-cardremoval)**(long timeoutMillis) |
| unsigned char | **[SDI_CTLS_LED](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-led)**(unsigned char ucLedId, unsigned char ucLedState) |
| unsigned char | **[SDI_CTLS_LED_SetMode](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-led-setmode)**(unsigned char ucLedMode) |
| unsigned char | **[SDI_CTLS_Break](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-break)**(void ) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_GetCandidateData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-getcandidatedata)**([EMV_CTLS_CANDIDATE_DATA_TYPE](group___f_u_n_c___f_l_o_w.md#typedef-emv-ctls-candidate-data-type) * candidateData) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_Init_Framework](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-init-framework)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| void | **[SDI_CTLS_SER_Exit_Framework](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-exit-framework)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_MapVirtualTerminal](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-mapvirtualterminal)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_StoreCAPKey](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-storecapkey)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_ReadCAPKeys](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-readcapkeys)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_SetTermData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-settermdata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_GetTermData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-gettermdata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_SetAppliDataSchemeSpecific](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-setapplidataschemespecific)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_GetAppliDataSchemeSpecific](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-getapplidataschemespecific)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_SetupTransaction](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-setuptransaction)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_ContinueOffline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-continueoffline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_ContinueOnline](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-continueonline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_EndTransaction](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-endtransaction)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CTLS_SER_SmartISO](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-smartiso)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CTLS_SER_SmartReset](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-smartreset)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CTLS_SER_SmartPowerOff](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-smartpoweroff)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CTLS_SER_CardRemoval](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-cardremoval)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CTLS_SER_LED_SetMode](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-led-setmode)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CTLS_SER_LED](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-led)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| unsigned char | **[SDI_CTLS_SER_Break](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-break)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_CTLS_SER_GetCandidateData](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-getcandidatedata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SDI_CT_Init_Framework](sdiclient_2client_2sdi__emv_8h.md#define-sdi-ct-init-framework)**(numberOfAIDs, EMV_Callback, externalData, options)  |
|  | **[SDI_CTLS_Init_Framework](sdiclient_2client_2sdi__emv_8h.md#define-sdi-ctls-init-framework)**(numberOfAIDs, EMV_Callback, externalData, options, ulResult)  |


## Functions Documentation

### function SDI_Client_Init

```cpp
int SDI_Client_Init(
    const char * options
)
```

Initialize SDI client. 

**Parameters**: 

  * **options** future use


**Return**: 0=okay, else error 

**Author**: GSS R&D Germany

Initializes EMV-ADK link libraries to use SDI server. It should be called at application start-up if SDI server use is wanted (although some functionality might be available without).


### function SDI_CT_Init_Framework_Client

```cpp
EMV_ADK_INFO SDI_CT_Init_Framework_Client(
    const char * version,
    unsigned char numberOfAIDs,
    EMV_CT_CALLBACK_FnT EMV_Callback,
    void * externalData,
    unsigned long options
)
```


### function SDI_CT_Exit_Framework

```cpp
void SDI_CT_Exit_Framework(
    void 
)
```


### function SDI_CT_Exit_Framework_extended

```cpp
void SDI_CT_Exit_Framework_extended(
    unsigned char options
)
```


### function SDI_CT_CLIENT_GetVersion

```cpp
const char * SDI_CT_CLIENT_GetVersion(
    void 
)
```


### function SDI_CT_FRAMEWORK_GetVersion

```cpp
const char * SDI_CT_FRAMEWORK_GetVersion(
    void 
)
```


### function SDI_CT_MapVirtualTerminal

```cpp
EMV_ADK_INFO SDI_CT_MapVirtualTerminal(
    EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType,
    unsigned char * TLVSwitchValue,
    unsigned int TLVBufLen,
    unsigned char VirtualTerminal
)
```


### function SDI_CT_StoreCAPKey

```cpp
EMV_ADK_INFO SDI_CT_StoreCAPKey(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType,
    const EMV_CT_CAPKEY_TYPE * pxKeyData
)
```


### function SDI_CT_ReadCAPKeys

```cpp
EMV_ADK_INFO SDI_CT_ReadCAPKeys(
    EMV_CT_CAPREAD_TYPE * pxKeyData,
    unsigned char * pucMaxnum
)
```


### function SDI_CT_GetCAPKeyInfo

```cpp
EMV_ADK_INFO SDI_CT_GetCAPKeyInfo(
    EMV_CT_CAPREAD_TYPE * pxKeyInfo,
    unsigned capacity,
    unsigned offset,
    unsigned * received,
    unsigned * configured
)
```


### function SDI_CT_SetTermData

```cpp
EMV_ADK_INFO SDI_CT_SetTermData(
    EMV_CT_TERMDATA_TYPE * pxTermData
)
```


### function SDI_CT_GetTermData

```cpp
EMV_ADK_INFO SDI_CT_GetTermData(
    EMV_CT_TERMDATA_TYPE * pxTermData
)
```


### function SDI_CT_SetAppliData

```cpp
EMV_ADK_INFO SDI_CT_SetAppliData(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType,
    EMV_CT_APPLI_TYPE * pxAID,
    EMV_CT_APPLIDATA_TYPE * pxAppliData
)
```


### function SDI_CT_GetAppliData

```cpp
EMV_ADK_INFO SDI_CT_GetAppliData(
    EMV_ADK_READAPPLI_TYPE eReadAppliType,
    EMV_CT_APPLI_TYPE * pxAID,
    EMV_CT_APPLIDATA_TYPE * pxAppliData
)
```


### function SDI_CT_ApplyConfiguration

```cpp
EMV_ADK_INFO SDI_CT_ApplyConfiguration(
    unsigned long options
)
```


### function SDI_CT_StartTransaction

```cpp
EMV_ADK_INFO SDI_CT_StartTransaction(
    EMV_CT_SELECT_TYPE * pxSelectInput,
    EMV_CT_SELECTRES_TYPE * pxSelectRes
)
```


### function SDI_CT_GetCandidateData

```cpp
EMV_ADK_INFO SDI_CT_GetCandidateData(
    EMV_CT_CANDIDATE_DATA_TYPE * candidateData
)
```


### function SDI_CT_ContinueOffline

```cpp
EMV_ADK_INFO SDI_CT_ContinueOffline(
    EMV_CT_TRANSAC_TYPE * pxTransactionInput,
    EMV_CT_TRANSRES_TYPE * pxTransRes,
    EMV_SDI_CT_TRANSRES_TYPE * pxSdiTransRes
)
```


### function SDI_CT_ContinueOnline

```cpp
EMV_ADK_INFO SDI_CT_ContinueOnline(
    EMV_CT_HOST_TYPE * pxOnlineInput,
    EMV_CT_TRANSRES_TYPE * pxTransRes,
    EMV_SDI_CT_TRANSRES_TYPE * pxSdiTransRes
)
```


### function SDI_CT_updateTxnTags

```cpp
EMV_ADK_INFO SDI_CT_updateTxnTags(
    unsigned long options,
    unsigned char * tlvBuffer,
    unsigned short bufferLength
)
```


### function SDI_CT_CheckSupportedAID

```cpp
EMV_ADK_INFO SDI_CT_CheckSupportedAID(
    const EMV_CT_APPLI_TYPE * aid,
    unsigned char ASI,
    const unsigned char * defaultLabel,
    EMV_CT_CandListType * pCandList,
    unsigned char MaxCand,
    unsigned char * pCandidateCount,
    unsigned short * sw12,
    const unsigned char * adtCardTagList
)
```


### function SDI_CT_EndTransaction

```cpp
EMV_ADK_INFO SDI_CT_EndTransaction(
    unsigned long options
)
```


### function SDI_CT_SmartISO

```cpp
unsigned char SDI_CT_SmartISO(
    unsigned char ucOptions,
    unsigned short usInDataLen,
    unsigned char * pucDataIn,
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut,
    unsigned short usOutBufferLength
)
```


### function SDI_CT_SmartDetect

```cpp
unsigned char SDI_CT_SmartDetect(
    unsigned char ucOptions
)
```


### function SDI_CT_SmartReset

```cpp
unsigned char SDI_CT_SmartReset(
    unsigned char ucOptions,
    unsigned char * pucATR,
    unsigned long * pnATRLength
)
```


### function SDI_CT_SmartPowerOff

```cpp
unsigned char SDI_CT_SmartPowerOff(
    unsigned char ucOptions
)
```


### function SDI_CT_Send_PIN_Offline

```cpp
unsigned char SDI_CT_Send_PIN_Offline(
    unsigned char * pucPINResultData
)
```


### function SDI_CT_LED

```cpp
unsigned char SDI_CT_LED(
    unsigned char ucLedId,
    unsigned char ucLedState,
    unsigned char ucLedColor,
    unsigned long ulTimeoutMs
)
```


### function SDI_CT_SER_Init_Framework

```cpp
EMV_ADK_INFO SDI_CT_SER_Init_Framework(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_Exit_Framework

```cpp
void SDI_CT_SER_Exit_Framework(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_MapVirtualTerminal

```cpp
EMV_ADK_INFO SDI_CT_SER_MapVirtualTerminal(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_StoreCAPKey

```cpp
EMV_ADK_INFO SDI_CT_SER_StoreCAPKey(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_ReadCAPKeys

```cpp
EMV_ADK_INFO SDI_CT_SER_ReadCAPKeys(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_SetTermData

```cpp
EMV_ADK_INFO SDI_CT_SER_SetTermData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_GetTermData

```cpp
EMV_ADK_INFO SDI_CT_SER_GetTermData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_SetAppliData

```cpp
EMV_ADK_INFO SDI_CT_SER_SetAppliData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_GetAppliData

```cpp
EMV_ADK_INFO SDI_CT_SER_GetAppliData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_StartTransaction

```cpp
EMV_ADK_INFO SDI_CT_SER_StartTransaction(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_GetCandidateData

```cpp
EMV_ADK_INFO SDI_CT_SER_GetCandidateData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_ContinueOffline

```cpp
EMV_ADK_INFO SDI_CT_SER_ContinueOffline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_ContinueOnline

```cpp
EMV_ADK_INFO SDI_CT_SER_ContinueOnline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_updateTxnTags

```cpp
EMV_ADK_INFO SDI_CT_SER_updateTxnTags(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_CheckSupportedAID

```cpp
EMV_ADK_INFO SDI_CT_SER_CheckSupportedAID(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_EndTransaction

```cpp
EMV_ADK_INFO SDI_CT_SER_EndTransaction(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_SmartISO

```cpp
unsigned char SDI_CT_SER_SmartISO(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_SmartDetect

```cpp
unsigned char SDI_CT_SER_SmartDetect(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_SmartReset

```cpp
unsigned char SDI_CT_SER_SmartReset(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_SmartPowerOff

```cpp
unsigned char SDI_CT_SER_SmartPowerOff(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_SmartPIN

```cpp
unsigned char SDI_CT_SER_SmartPIN(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CT_SER_Send_PIN_Offline

```cpp
unsigned char SDI_CT_SER_Send_PIN_Offline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_Init_Framework_Client

```cpp
EMV_ADK_INFO SDI_CTLS_Init_Framework_Client(
    const char * version,
    unsigned char numberOfAIDs,
    EMV_CTLS_CALLBACK_FnT EMV_Callback,
    void * externalData,
    unsigned long options,
    unsigned long * ulResult
)
```


### function SDI_CTLS_Exit_Framework

```cpp
void SDI_CTLS_Exit_Framework(
    void 
)
```


### function SDI_CTLS_Exit_Framework_extended

```cpp
void SDI_CTLS_Exit_Framework_extended(
    unsigned char options
)
```


### function SDI_CTLS_CLIENT_GetVersion

```cpp
const char * SDI_CTLS_CLIENT_GetVersion(
    void 
)
```


### function SDI_CTLS_FRAMEWORK_GetVersion

```cpp
const char * SDI_CTLS_FRAMEWORK_GetVersion(
    void 
)
```


### function SDI_CTLS_MapVirtualTerminal

```cpp
EMV_ADK_INFO SDI_CTLS_MapVirtualTerminal(
    EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType,
    unsigned char * TLVSwitchValue,
    unsigned int TLVBufLen,
    unsigned char VirtualTerminal
)
```


### function SDI_CTLS_StoreCAPKey

```cpp
EMV_ADK_INFO SDI_CTLS_StoreCAPKey(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType,
    const EMV_CTLS_CAPKEY_TYPE * pxKeyData
)
```


### function SDI_CTLS_ReadCAPKeys

```cpp
EMV_ADK_INFO SDI_CTLS_ReadCAPKeys(
    EMV_CTLS_CAPREAD_TYPE * pxKeyData,
    unsigned char * pucMaxnum
)
```


### function SDI_CTLS_GetCAPKeyInfo

```cpp
EMV_ADK_INFO SDI_CTLS_GetCAPKeyInfo(
    EMV_CTLS_CAPREAD_TYPE * pxKeyInfo,
    unsigned capacity,
    unsigned offset,
    unsigned * received,
    unsigned * configured
)
```


### function SDI_CTLS_SetTermData

```cpp
EMV_ADK_INFO SDI_CTLS_SetTermData(
    EMV_CTLS_TERMDATA_TYPE * pxTermData
)
```


### function SDI_CTLS_GetTermData

```cpp
EMV_ADK_INFO SDI_CTLS_GetTermData(
    EMV_CTLS_TERMDATA_TYPE * pxTermData
)
```


### function SDI_CTLS_SetAppliDataSchemeSpecific

```cpp
EMV_ADK_INFO SDI_CTLS_SetAppliDataSchemeSpecific(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType,
    EMV_CTLS_APPLI_KERNEL_TYPE * pxAID,
    EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE * pxAppliData
)
```


### function SDI_CTLS_GetAppliDataSchemeSpecific

```cpp
EMV_ADK_INFO SDI_CTLS_GetAppliDataSchemeSpecific(
    EMV_ADK_READAPPLI_TYPE eReadAppliType,
    EMV_CTLS_APPLI_KERNEL_TYPE * pxAID,
    EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE * pxAppliData
)
```


### function SDI_CTLS_ApplyConfiguration

```cpp
EMV_ADK_INFO SDI_CTLS_ApplyConfiguration(
    unsigned long options
)
```


### function SDI_CTLS_SetupTransaction

```cpp
EMV_ADK_INFO SDI_CTLS_SetupTransaction(
    EMV_CTLS_START_TYPE * pxStartInput,
    EMV_CTLS_STARTRES_TYPE * pxStartRes
)
```


### function SDI_CTLS_ContinueOffline

```cpp
EMV_ADK_INFO SDI_CTLS_ContinueOffline(
    EMV_CTLS_TRANSRES_TYPE * pxTransRes,
    EMV_SDI_CTLS_TRANSRES_TYPE * pxSdiTransRes
)
```


### function SDI_CTLS_ContinueOfflineExt

```cpp
EMV_ADK_INFO SDI_CTLS_ContinueOfflineExt(
    EMV_CTLS_CONT_OFFL_TYPE * pxContOfflInput,
    EMV_CTLS_TRANSRES_TYPE * pxTransRes,
    EMV_SDI_CTLS_TRANSRES_TYPE * pxSdiTransRes
)
```


### function SDI_CTLS_ContinueOnline

```cpp
EMV_ADK_INFO SDI_CTLS_ContinueOnline(
    EMV_CTLS_HOST_TYPE * pxOnlineInput,
    EMV_CTLS_TRANSRES_TYPE * pxTransRes,
    EMV_SDI_CTLS_TRANSRES_TYPE * pxSdiTransRes
)
```


### function SDI_CTLS_EndTransaction

```cpp
EMV_ADK_INFO SDI_CTLS_EndTransaction(
    unsigned long options
)
```


### function SDI_CTLS_SmartISO

```cpp
unsigned char SDI_CTLS_SmartISO(
    unsigned char ucOptions,
    unsigned short usInDataLen,
    unsigned char * pucDataIn,
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut,
    unsigned short usOutBufferLength
)
```


### function SDI_CTLS_SmartReset

```cpp
unsigned char SDI_CTLS_SmartReset(
    unsigned char ucOptions,
    unsigned char * pucCardInfo,
    unsigned long * pnInfoLength
)
```


### function SDI_CTLS_SmartPowerOff

```cpp
unsigned char SDI_CTLS_SmartPowerOff(
    unsigned char ucOptions
)
```


### function SDI_CTLS_CardRemoval

```cpp
unsigned char SDI_CTLS_CardRemoval(
    long timeoutMillis
)
```


### function SDI_CTLS_LED

```cpp
unsigned char SDI_CTLS_LED(
    unsigned char ucLedId,
    unsigned char ucLedState
)
```


### function SDI_CTLS_LED_SetMode

```cpp
unsigned char SDI_CTLS_LED_SetMode(
    unsigned char ucLedMode
)
```


### function SDI_CTLS_Break

```cpp
unsigned char SDI_CTLS_Break(
    void 
)
```


### function SDI_CTLS_GetCandidateData

```cpp
EMV_ADK_INFO SDI_CTLS_GetCandidateData(
    EMV_CTLS_CANDIDATE_DATA_TYPE * candidateData
)
```


### function SDI_CTLS_SER_Init_Framework

```cpp
EMV_ADK_INFO SDI_CTLS_SER_Init_Framework(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_Exit_Framework

```cpp
void SDI_CTLS_SER_Exit_Framework(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_MapVirtualTerminal

```cpp
EMV_ADK_INFO SDI_CTLS_SER_MapVirtualTerminal(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_StoreCAPKey

```cpp
EMV_ADK_INFO SDI_CTLS_SER_StoreCAPKey(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_ReadCAPKeys

```cpp
EMV_ADK_INFO SDI_CTLS_SER_ReadCAPKeys(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_SetTermData

```cpp
EMV_ADK_INFO SDI_CTLS_SER_SetTermData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_GetTermData

```cpp
EMV_ADK_INFO SDI_CTLS_SER_GetTermData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_SetAppliDataSchemeSpecific

```cpp
EMV_ADK_INFO SDI_CTLS_SER_SetAppliDataSchemeSpecific(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_GetAppliDataSchemeSpecific

```cpp
EMV_ADK_INFO SDI_CTLS_SER_GetAppliDataSchemeSpecific(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_SetupTransaction

```cpp
EMV_ADK_INFO SDI_CTLS_SER_SetupTransaction(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_ContinueOffline

```cpp
EMV_ADK_INFO SDI_CTLS_SER_ContinueOffline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_ContinueOnline

```cpp
EMV_ADK_INFO SDI_CTLS_SER_ContinueOnline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_EndTransaction

```cpp
EMV_ADK_INFO SDI_CTLS_SER_EndTransaction(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_SmartISO

```cpp
unsigned char SDI_CTLS_SER_SmartISO(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_SmartReset

```cpp
unsigned char SDI_CTLS_SER_SmartReset(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_SmartPowerOff

```cpp
unsigned char SDI_CTLS_SER_SmartPowerOff(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_CardRemoval

```cpp
unsigned char SDI_CTLS_SER_CardRemoval(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_LED_SetMode

```cpp
unsigned char SDI_CTLS_SER_LED_SetMode(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_LED

```cpp
unsigned char SDI_CTLS_SER_LED(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_Break

```cpp
unsigned char SDI_CTLS_SER_Break(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function SDI_CTLS_SER_GetCandidateData

```cpp
EMV_ADK_INFO SDI_CTLS_SER_GetCandidateData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```




## Macros Documentation

### define SDI_CT_Init_Framework

```cpp
#define SDI_CT_Init_Framework(
    numberOfAIDs,
    EMV_Callback,
    externalData,
    options
)
SDI_CT_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options))
```


### define SDI_CTLS_Init_Framework

```cpp
#define SDI_CTLS_Init_Framework(
    numberOfAIDs,
    EMV_Callback,
    externalData,
    options,
    ulResult
)
SDI_CTLS_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options),(ulResult))
```


## Source code

```cpp
/****************************************************************************
*  Product:     ADK Secure Data Interface (SDI)
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     Client (structure) interface - EMV functions
****************************************************************************/

#ifndef _SDI_CLIENT_EMV_INTERFACE_H_   /* avoid double interface-includes */
#define _SDI_CLIENT_EMV_INTERFACE_H_

#ifdef __cplusplus
extern "C" {
#endif

#include "emv/EMV_SDI.h"
#include "emv/EMV_CT_Interface.h"
#include "emv/EMV_CT_Link.h"
#include "emv/EMV_CTLS_Interface.h"
#include "emv/EMV_CTLS_Link.h"


// ==================================================================================================================================================
int SDI_Client_Init(const char* options);

// ==================================================================================================================================================
EMV_ADK_INFO SDI_CT_Init_Framework_Client(const char *version, unsigned char numberOfAIDs, EMV_CT_CALLBACK_FnT EMV_Callback, void* externalData, unsigned long options);
#define SDI_CT_Init_Framework(numberOfAIDs, EMV_Callback, externalData, options) SDI_CT_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options))
void SDI_CT_Exit_Framework(void);
void SDI_CT_Exit_Framework_extended(unsigned char options);

const char* SDI_CT_CLIENT_GetVersion(void);
const char* SDI_CT_FRAMEWORK_GetVersion(void);

EMV_ADK_INFO SDI_CT_MapVirtualTerminal(EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType, unsigned char *TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal);

EMV_ADK_INFO SDI_CT_StoreCAPKey(EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType, const EMV_CT_CAPKEY_TYPE *pxKeyData);
EMV_ADK_INFO SDI_CT_ReadCAPKeys(EMV_CT_CAPREAD_TYPE *pxKeyData, unsigned char *pucMaxnum);
EMV_ADK_INFO SDI_CT_GetCAPKeyInfo(EMV_CT_CAPREAD_TYPE *pxKeyInfo, unsigned capacity, unsigned offset, unsigned *received, unsigned *configured);
EMV_ADK_INFO SDI_CT_SetTermData(EMV_CT_TERMDATA_TYPE* pxTermData);
EMV_ADK_INFO SDI_CT_GetTermData(EMV_CT_TERMDATA_TYPE* pxTermData);
EMV_ADK_INFO SDI_CT_SetAppliData(EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CT_APPLI_TYPE* pxAID, EMV_CT_APPLIDATA_TYPE* pxAppliData);
EMV_ADK_INFO SDI_CT_GetAppliData(EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CT_APPLI_TYPE* pxAID, EMV_CT_APPLIDATA_TYPE* pxAppliData);
EMV_ADK_INFO SDI_CT_ApplyConfiguration(unsigned long options);

EMV_ADK_INFO SDI_CT_StartTransaction(EMV_CT_SELECT_TYPE *pxSelectInput, EMV_CT_SELECTRES_TYPE* pxSelectRes);
EMV_ADK_INFO SDI_CT_GetCandidateData(EMV_CT_CANDIDATE_DATA_TYPE *candidateData);
EMV_ADK_INFO SDI_CT_ContinueOffline(EMV_CT_TRANSAC_TYPE *pxTransactionInput, EMV_CT_TRANSRES_TYPE *pxTransRes, EMV_SDI_CT_TRANSRES_TYPE *pxSdiTransRes);
EMV_ADK_INFO SDI_CT_ContinueOnline(EMV_CT_HOST_TYPE *pxOnlineInput, EMV_CT_TRANSRES_TYPE *pxTransRes, EMV_SDI_CT_TRANSRES_TYPE *pxSdiTransRes);
EMV_ADK_INFO SDI_CT_updateTxnTags(unsigned long options, unsigned char *tlvBuffer, unsigned short bufferLength);
EMV_ADK_INFO SDI_CT_CheckSupportedAID(const EMV_CT_APPLI_TYPE* aid, unsigned char ASI, const unsigned char* defaultLabel, EMV_CT_CandListType* pCandList,
                                      unsigned char MaxCand, unsigned char* pCandidateCount, unsigned short* sw12, const unsigned char* adtCardTagList);
EMV_ADK_INFO SDI_CT_EndTransaction(unsigned long options);

unsigned char SDI_CT_SmartISO (unsigned char ucOptions, unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut, unsigned short usOutBufferLength);
unsigned char SDI_CT_SmartDetect(unsigned char ucOptions);
unsigned char SDI_CT_SmartReset(unsigned char ucOptions, unsigned char* pucATR, unsigned long* pnATRLength);
unsigned char SDI_CT_SmartPowerOff(unsigned char ucOptions);

unsigned char SDI_CT_Send_PIN_Offline(unsigned char *pucPINResultData);

unsigned char SDI_CT_LED(unsigned char ucLedId, unsigned char ucLedState, unsigned char ucLedColor, unsigned long ulTimeoutMs);


// ==================================================================================================================================================
EMV_ADK_INFO  SDI_CT_SER_Init_Framework    (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
void          SDI_CT_SER_Exit_Framework    (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_MapVirtualTerminal(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_StoreCAPKey       (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_ReadCAPKeys       (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_SetTermData       (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_GetTermData       (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_SetAppliData      (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_GetAppliData      (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_StartTransaction  (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_GetCandidateData  (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_ContinueOffline   (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_ContinueOnline    (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_updateTxnTags     (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_CheckSupportedAID (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO  SDI_CT_SER_EndTransaction    (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CT_SER_SmartISO          (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CT_SER_SmartDetect       (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CT_SER_SmartReset        (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CT_SER_SmartPowerOff     (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CT_SER_SmartPIN          (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CT_SER_Send_PIN_Offline  (const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);


EMV_ADK_INFO SDI_CTLS_Init_Framework_Client(const char *version, unsigned char numberOfAIDs, EMV_CTLS_CALLBACK_FnT EMV_Callback, void* externalData, unsigned long options, unsigned long *ulResult);
#define SDI_CTLS_Init_Framework(numberOfAIDs, EMV_Callback, externalData, options,ulResult) SDI_CTLS_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options),(ulResult))
void SDI_CTLS_Exit_Framework(void);
void SDI_CTLS_Exit_Framework_extended(unsigned char options);
const char* SDI_CTLS_CLIENT_GetVersion(void);
const char* SDI_CTLS_FRAMEWORK_GetVersion(void);
EMV_ADK_INFO SDI_CTLS_MapVirtualTerminal(EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType, unsigned char *TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal);
EMV_ADK_INFO SDI_CTLS_StoreCAPKey(EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType, const EMV_CTLS_CAPKEY_TYPE *pxKeyData);
EMV_ADK_INFO SDI_CTLS_ReadCAPKeys(EMV_CTLS_CAPREAD_TYPE *pxKeyData, unsigned char *pucMaxnum);
EMV_ADK_INFO SDI_CTLS_GetCAPKeyInfo(EMV_CTLS_CAPREAD_TYPE *pxKeyInfo, unsigned capacity, unsigned offset, unsigned *received, unsigned *configured);
EMV_ADK_INFO SDI_CTLS_SetTermData(EMV_CTLS_TERMDATA_TYPE* pxTermData);
EMV_ADK_INFO SDI_CTLS_GetTermData(EMV_CTLS_TERMDATA_TYPE* pxTermData);
EMV_ADK_INFO SDI_CTLS_SetAppliDataSchemeSpecific(EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CTLS_APPLI_KERNEL_TYPE* pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE* pxAppliData);
EMV_ADK_INFO SDI_CTLS_GetAppliDataSchemeSpecific(EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CTLS_APPLI_KERNEL_TYPE* pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE* pxAppliData);
EMV_ADK_INFO SDI_CTLS_ApplyConfiguration(unsigned long options);
EMV_ADK_INFO SDI_CTLS_SetupTransaction(EMV_CTLS_START_TYPE *pxStartInput, EMV_CTLS_STARTRES_TYPE* pxStartRes);
EMV_ADK_INFO SDI_CTLS_ContinueOffline(EMV_CTLS_TRANSRES_TYPE *pxTransRes, EMV_SDI_CTLS_TRANSRES_TYPE *pxSdiTransRes);
EMV_ADK_INFO SDI_CTLS_ContinueOfflineExt(EMV_CTLS_CONT_OFFL_TYPE *pxContOfflInput, EMV_CTLS_TRANSRES_TYPE *pxTransRes, EMV_SDI_CTLS_TRANSRES_TYPE *pxSdiTransRes);
EMV_ADK_INFO SDI_CTLS_ContinueOnline(EMV_CTLS_HOST_TYPE *pxOnlineInput, EMV_CTLS_TRANSRES_TYPE *pxTransRes, EMV_SDI_CTLS_TRANSRES_TYPE *pxSdiTransRes);
EMV_ADK_INFO SDI_CTLS_EndTransaction(unsigned long options);
unsigned char SDI_CTLS_SmartISO(unsigned char ucOptions, unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut, unsigned short usOutBufferLength);
unsigned char SDI_CTLS_SmartReset(unsigned char ucOptions, unsigned char* pucCardInfo, unsigned long* pnInfoLength);
unsigned char SDI_CTLS_SmartPowerOff(unsigned char ucOptions);
unsigned char SDI_CTLS_CardRemoval(long timeoutMillis);
unsigned char SDI_CTLS_LED(unsigned char ucLedId, unsigned char ucLedState);
unsigned char SDI_CTLS_LED_SetMode(unsigned char ucLedMode);
unsigned char SDI_CTLS_Break(void);
EMV_ADK_INFO SDI_CTLS_GetCandidateData(EMV_CTLS_CANDIDATE_DATA_TYPE *candidateData);

// ==================================================================================================================================================

EMV_ADK_INFO SDI_CTLS_SER_Init_Framework(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
void SDI_CTLS_SER_Exit_Framework(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_MapVirtualTerminal(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_StoreCAPKey(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_ReadCAPKeys(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_SetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_GetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_SetAppliDataSchemeSpecific(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_GetAppliDataSchemeSpecific(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_SetupTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_ContinueOffline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_ContinueOnline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_EndTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CTLS_SER_SmartISO(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CTLS_SER_SmartReset(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CTLS_SER_SmartPowerOff(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CTLS_SER_CardRemoval(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CTLS_SER_LED_SetMode(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CTLS_SER_LED(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
unsigned char SDI_CTLS_SER_Break(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
EMV_ADK_INFO SDI_CTLS_SER_GetCandidateData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);


#ifdef __cplusplus
}     // extern "C"
#endif

#endif  // #ifndef _SDI_CLIENT_EMV_INTERFACE_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

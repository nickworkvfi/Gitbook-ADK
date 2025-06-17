---
title: Functions for performing transactions

---

# Functions for performing transactions

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CTLS_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md)** <br>Candidate list additional data.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CTLS_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CTLS_CANDIDATE_DATA_TYPE](group___f_u_n_c___f_l_o_w.md#typedef-emv-ctls-candidate-data-type)** <br>Candidate list additional data.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SetupTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)**([EMV_CTLS_START_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-start-type) * pxStartInput, [EMV_CTLS_STARTRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-startres-type) * pxStartRes)<br>Set up a CTLS EMV transaction.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ContinueOffline](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline)**([EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type) * pxTransRes)<br>CTLS EMV transaction (offline part ... including 1st cryptogram, depends on CTLS scheme)  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ContinueOfflineExt](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueofflineext)**([EMV_CTLS_CONT_OFFL_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-cont-offl-type) * pxContOfflInput, [EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type) * pxTransRes)<br>Like EMV_CTLS_ContinueOffline but with input parameter.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ContinueOnline](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline)**([EMV_CTLS_HOST_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-host-type) * pxOnlineInput, [EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type) * pxTransRes)<br>EMV transaction (handling of host response including 2nd cryptogram)  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags)**(unsigned long options, unsigned long * requestedTags, unsigned short noOfRequestedTags, unsigned char * tlvBuffer, unsigned short bufferLength, unsigned short * tlvDataLength)<br>Fetch one or several tags at the end of the transaction.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_fetchTxnDOL](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxndol)**(unsigned long options, const unsigned char * DOL, unsigned dolLen, unsigned char * buffer, unsigned bufferSize, unsigned * dataLength)<br>Retrieve formatted transaction data at the end of the transaction.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_EndTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-endtransaction)**(unsigned long options)<br>End transaction.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_CardRemoval](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-cardremoval)**(long timeoutMillis)<br>Wait until contactless card removed or timeout.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_Break](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-break)**(void )<br>Universal break command  ** Velocity: Only required when using [EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout) != 0. ** ** VFI-Reader: Always required ** |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetCandidateData](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata)**([EMV_CTLS_CANDIDATE_DATA_TYPE](group___f_u_n_c___f_l_o_w.md#typedef-emv-ctls-candidate-data-type) * candidateData)<br>Get additional candidate information for reducing and resorting the mutual candidate list.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetCandidateDataMax](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedatamax)**([EMV_CTLS_CANDIDATE_DATA_TYPE](group___f_u_n_c___f_l_o_w.md#typedef-emv-ctls-candidate-data-type) * candidateData, unsigned maxCandidates)<br>Get additional candidate information for reducing and resorting the mutual candidate list.  |
| void | **[EMV_CTLS_Disconnect](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-disconnect)**(unsigned char options)<br>Disconnect from EMV server.  |
| void | **[EMV_CTLS_SetClientMode](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setclientmode)**(enum [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode) mode)<br>Switch to client mode.  |
| enum [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode) | **[EMV_CTLS_GetClientMode](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getclientmode)**()<br>Query the client mode.  |
| void | **[EMV_CTLS_SetCallback](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setcallback)**([EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt) EMV_Callback, void * context)<br>Set Callback Function and activate Callback [Thread](class_thread.md).  |
| unsigned long | **[EMV_CTLS_GetInitOptions](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getinitoptions)**(void )<br>Getter to Init Options from EMV_CTLS_Init_Framework.  |
| unsigned | **[EMV_CTLS_GetSdiSW12](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getsdisw12)**()<br>Access SDI status word.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_StartTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction)**([EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type) * pxSelectInput, [EMV_CT_SELECTRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-selectres-type) * pxSelectRes)<br>EMV Application Selection.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_GetCandidateData](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getcandidatedata)**([EMV_CT_CANDIDATE_DATA_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-candidate-data-type) * candidateData)<br>Get additional candidate information for reducing, resorting or displaying the mutual candidate list.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_ContinueOffline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline)**([EMV_CT_TRANSAC_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transac-type) * pxTransactionInput, [EMV_CT_TRANSRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transres-type) * pxTransRes)<br>EMV transaction (offline part including 1st cryptogram)  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_ContinueOnline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)**([EMV_CT_HOST_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-host-type) * pxOnlineInput, [EMV_CT_TRANSRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transres-type) * pxTransRes)<br>EMV transaction (handling of host response including 2nd cryptogram)  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags)**(unsigned long options, unsigned long * requestedTags, unsigned short noOfRequestedTags, unsigned char * tlvBuffer, unsigned short bufferLength, unsigned short * tlvDataLength)<br>Fetch one or several tags at the end of the transaction.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_fetchTxnDOL](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxndol)**(unsigned long options, const unsigned char * DOL, unsigned dolLen, unsigned char * buffer, unsigned bufferSize, unsigned * dataLength)<br>Retrieve formatted transaction data at the end of the transaction.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_updateTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags)**(unsigned long options, unsigned char * tlvBuffer, unsigned short bufferLength)<br>Update one or several kernel tags during transaction.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_CheckSupportedAID](group___f_u_n_c___f_l_o_w.md#function-emv-ct-checksupportedaid)**(const [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) * aid, unsigned char ASI, const unsigned char * defaultLabel, [EMV_CT_CandListType](struct_e_m_v___c_t___cand_list_type.md) * pCandList, unsigned char MaxCand, unsigned char * pCandidateCount, unsigned short * sw12, const unsigned char * adtCardTagList)<br>Do List Of Application processing for a single terminal AID.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_EndTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ct-endtransaction)**(unsigned long options)<br>End transaction.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_Send_PIN_Offline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline)**(unsigned char * pucPINResultData)<br>Send entered (offline) PIN to chip card for verification.  |
| void | **[EMV_CT_Disconnect](group___f_u_n_c___f_l_o_w.md#function-emv-ct-disconnect)**(void )<br>Disconnect from EMV server.  |
| void | **[EMV_CT_SetClientMode](group___f_u_n_c___f_l_o_w.md#function-emv-ct-setclientmode)**(enum [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode) mode)<br>Switch to Client-Server mode.  |
| enum [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode) | **[EMV_CT_GetClientMode](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getclientmode)**()<br>Query the client mode.  |
| void | **[EMV_CT_SetCallback](group___f_u_n_c___f_l_o_w.md#function-emv-ct-setcallback)**([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) EMV_Callback, void * context)<br>Set Callback Function and activate Callback [Thread](class_thread.md).  |
| unsigned long | **[EMV_CT_GetInitOptions](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getinitoptions)**(void )<br>Getter to Init Options from EMV_CT_Init_Framework.  |
| unsigned | **[EMV_CT_GetSdiSW12](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getsdisw12)**()<br>Access SDI status word.  |

## Types Documentation

### typedef EMV_CTLS_CANDIDATE_DATA_TYPE

```
typedef struct EMV_CTLS_CANDIDATE_DATA_STRUCT EMV_CTLS_CANDIDATE_DATA_TYPE;
```

Candidate list additional data. 

To be used in conjunction with AID list in combo candidates callback [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand)

 See also [EMV_CTLS_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata)



## Functions Documentation

### function EMV_CTLS_SetupTransaction

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_SetupTransaction(
    EMV_CTLS_START_TYPE * pxStartInput,
    EMV_CTLS_STARTRES_TYPE * pxStartRes
)
```

Set up a CTLS EMV transaction. 

**Parameters**: 

  * **pxStartInput** ... transaction specific data (see [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)) 
  * **pxStartRes** ... additional (error) info (see [EMV_CTLS_STARTRES_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md))


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation, main ADK contactless context not init
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): 
`````````````````````````````1`) contactless transaction params init failed 
`````````````````````````````2`) bad currency or bad exponent given [EMV_ADK_CEILING_LIMIT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ceiling-limit): transaction amount above a contactless ceiling limit
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_CTLS_NOT_AVAILABLE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-not-available): CTLS Hardware not detected
[EMV_ADK_VIRTTERMMAP_WRONG_INIT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-virttermmap-wrong-init): virtual terminal map init has failed
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap file corruption
[EMV_ADK_NOAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-noapp): no matching apps, Terminal Ceiling Limit Exceeded (EPAL Australia) or Transaction Ceiling Limit Exceeded

**Author**: GSS R&D Germany

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_SELECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-select)

[Explanation in programmers guide]



 VFI reader only: [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort): configuration files were changed after CTLS init and corresponding CLTRXOP_STOP_ON_CHKSUM_DIFF txn option is enabled
[EMV_ADK_READER_CMD_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-reader-cmd-not-allowed)[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec)


### function EMV_CTLS_ContinueOffline

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_ContinueOffline(
    EMV_CTLS_TRANSRES_TYPE * pxTransRes
)
```

CTLS EMV transaction (offline part ... including 1st cryptogram, depends on CTLS scheme) 

**Parameters**: 

  * **pxTransRes** ... transaction result data (see [EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md))


**Return**: [EMV_ADK_ARQC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-arqc): Transaction must go online 
[EMV_ADK_TC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tc): Transaction is offline approved 
[EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): Card data read successfully (only possible for transaction types [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund), [EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-reversal), [EMV_ADK_TRAN_TYPE_BUCHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-b), [EMV_ADK_TRAN_TYPE_BUCHUNG_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-a)) 
[EMV_ADK_CANCELLED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-cancelled): Transaction cancelled - CLTI_Break has been called 
[EMV_ADK_CARD_LOG_LOG_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-card-log-log-ok): Card Log has been read succesfully (only PBOC at the moment) 
[EMV_ADK_CTLS_LOW_BATTERY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-low-battery): Battery low on V240, V210, V400m, V200t, e285, e280, e265 or e355 
[EMV_ADK_TOO_MANY_TAPS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-too-many-taps): Too many taps have been done (only Interac at the moment) 
[EMV_ADK_CAN_NOT_PROCESS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-can-not-process): Try another card or use chip (only Interac at the moment) 
[EMV_ADK_USE_ANOTHER_CTLS_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-use-another-ctls-card): Try another card (only Discover at the moment) 
[EMV_ADK_USE_OTHER_TERMINAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-use-other-terminal): Use another terminal to perform transaction (only Interac at the moment) 
[EMV_ADK_FALLBACK_CHIP_ONLY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback-chip-only): Switch interface to contact 
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): Function not allowed in case of concurrent call or not allowed within callback 
[EMV_ADK_CTLS_NOT_AVAILABLE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-not-available): CTLS Hardware not detected 
[EMV_ADK_CEILING_LIMIT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ceiling-limit): Transaction amount above a contactless ceiling limit 
[EMV_ADK_CTLS_RETAP_SAME](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-retap-same): Try to retap the same card 
[EMV_ADK_CTLS_DOMESTIC_APP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-domestic-app): Domestic application selected successfully 
[EMV_ADK_NO_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-card): Card not present 
[EMV_ADK_NOAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-noapp): No matching apps, Terminal Ceiling Limit Exceeded (EPAL Australia) or Transaction Ceiling Limit Exceeded 
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): EMV processing flow control error 
[EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac): Transaction is declined 
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): Error while fetching txn tags 
[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort): 
`````````````````````````````1`) Comm error during application selection callback 
`````````````````````````````2`) Calling application returned error code FE 
`````````````````````````````3`) No Contactless TXN performed on CL reader 
`````````````````````````````4`) GET DATA/PUT DATA transaction finished FAIL (only Gemalto at the moment) 
`````````````````````````````5`) Unknown kernel during kernel activation 
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Error reading terminal data, internal communication problem, illegal file content, memory allocation fail 
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem 
[EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback): Try another interface 
[EMV_ADK_2_CTLS_CARDS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-2-ctls-cards): 2 cards detected in field 
[EMV_ADK_TXN_CTLS_L1_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-l1-err): Any L1 error identified 
[EMV_ADK_TXN_CTLS_MOBILE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-mobile): Explicit mobile retapping 
[EMV_ADK_TXN_CTLS_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-empty-list): Nothing configured for CTLS 
[EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-emv-use-other-card): Try another card, only in case CT is not configured 
[EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-domestic-only-not-readable): Fail to select domestic application 
[EMV_ADK_CONTINUE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-continue): Passthrough mode activated (due to gxContactlessTxnPara.passthroughCardTypes) 
[EMV_ADK_NOT_ACCEPTED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-accepted): Bad FFI - Payment Type Not Accepted (only Interac at the moment) 
[EMV_ADK_CTLS_OFFLINE_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-offline-pin): CTLS offline PIN required (only Girocard at the moment)

**Author**: GSS R&D Germany

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_TRANSAC](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-transac)

[Explanation in programmers guide]



 VFI reader only: [EMV_ADK_READER_CMD_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-reader-cmd-not-allowed)


### function EMV_CTLS_ContinueOfflineExt

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_ContinueOfflineExt(
    EMV_CTLS_CONT_OFFL_TYPE * pxContOfflInput,
    EMV_CTLS_TRANSRES_TYPE * pxTransRes
)
```

Like EMV_CTLS_ContinueOffline but with input parameter. 

**Parameters**: 

  * **pxContOfflInput** ... Input parameter for special use cases (see [EMV_CTLS_CONT_OFFL_STRUCT](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md)) 
  * **pxTransRes** ... transaction result data (see [EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md))


**Return**: [EMV_ADK_ARQC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-arqc): Transaction must go online 
[EMV_ADK_TC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tc): Transaction is offline approved 
[EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): Card data read successfully (only possible for transaction types [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund), [EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-reversal), [EMV_ADK_TRAN_TYPE_BUCHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-b), [EMV_ADK_TRAN_TYPE_BUCHUNG_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-a)) 
[EMV_ADK_CANCELLED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-cancelled): Transaction cancelled - CLTI_Break has been called 
[EMV_ADK_CARD_LOG_LOG_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-card-log-log-ok): Card Log has been read succesfully (only PBOC at the moment) 
[EMV_ADK_CTLS_LOW_BATTERY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-low-battery): Battery low on V240, V210, V400m, V200t, e285, e280, e265 or e355 
[EMV_ADK_TOO_MANY_TAPS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-too-many-taps): Too many taps have been done (only Interac at the moment) 
[EMV_ADK_CAN_NOT_PROCESS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-can-not-process): Try another card or use chip (only Interac at the moment) 
[EMV_ADK_USE_ANOTHER_CTLS_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-use-another-ctls-card): Try another card (only Discover at the moment) 
[EMV_ADK_USE_OTHER_TERMINAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-use-other-terminal): Use another terminal to perform transaction (only Interac at the moment) 
[EMV_ADK_FALLBACK_CHIP_ONLY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback-chip-only): Switch interface to contact 
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): Function not allowed in case of concurrent call or not allowed within callback 
[EMV_ADK_CTLS_NOT_AVAILABLE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-not-available): CTLS Hardware not detected 
[EMV_ADK_CEILING_LIMIT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ceiling-limit): Transaction amount above a contactless ceiling limit 
[EMV_ADK_CTLS_RETAP_SAME](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-retap-same): Try to retap the same card 
[EMV_ADK_CTLS_DOMESTIC_APP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-domestic-app): Domestic application selected successfully 
[EMV_ADK_NO_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-card): Card not present 
[EMV_ADK_NOAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-noapp): No matching apps, Terminal Ceiling Limit Exceeded (EPAL Australia) or Transaction Ceiling Limit Exceeded 
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): EMV processing flow control error 
[EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac): Transaction is declined 
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): Error while fetching txn tags 
[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort): 
`````````````````````````````1`) Comm error during application selection callback 
`````````````````````````````2`) Calling application returned error code FE in CandidateListCallback 
`````````````````````````````3`) No Contactless TXN performed on CL reader 
`````````````````````````````4`) GET DATA/PUT DATA transaction finished FAIL (only Gemalto at the moment) 
`````````````````````````````5`) Unknown kernel during kernel activation 
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Error reading terminal data, internal communication problem, illegal file content, memory allocation fail 
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem 
[EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback): Try another interface 
[EMV_ADK_2_CTLS_CARDS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-2-ctls-cards): 2 cards detected in field 
[EMV_ADK_TXN_CTLS_L1_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-l1-err): Any L1 error identified 
[EMV_ADK_TXN_CTLS_MOBILE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-mobile): Explicit mobile retapping 
[EMV_ADK_TXN_CTLS_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-empty-list): Nothing configured for CTLS 
[EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-emv-use-other-card): Try another card, only in case CT is not configured 
[EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-domestic-only-not-readable): Fail to select domestic application 
[EMV_ADK_CONTINUE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-continue): Passthrough mode activated (due to gxContactlessTxnPara.passthroughCardTypes) 
[EMV_ADK_NOT_ACCEPTED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-accepted): Bad FFI - Payment Type Not Accepted (only Interac at the moment) 
[EMV_ADK_CTLS_OFFLINE_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-offline-pin): CTLS offline PIN required (only Girocard at the moment)

**Author**: GSS R&D Germany



 VFI reader only: [EMV_ADK_READER_CMD_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-reader-cmd-not-allowed)


### function EMV_CTLS_ContinueOnline

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_ContinueOnline(
    EMV_CTLS_HOST_TYPE * pxOnlineInput,
    EMV_CTLS_TRANSRES_TYPE * pxTransRes
)
```

EMV transaction (handling of host response including 2nd cryptogram) 

**Parameters**: 

  * **pxOnlineInput** ... data of host response (see [EMV_CTLS_HOST_STRUCT](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md))
  * **pxTransRes** ... result data (see [EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md))


**Return**: [EMV_ADK_TC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tc): transaction is online approved 
[EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac): transaction is online declined 
[EMV_ADK_NO_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-card): Card not present 
[EMV_ADK_2_CTLS_CARDS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-2-ctls-cards):2 cards detected in field 
[EMV_ADK_TXN_CTLS_L1_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-l1-err): L1 error despite several internal silent retries 
[EMV_ADK_CTLS_RETAP_SAME](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-retap-same): L1 error after long tap 
[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort): 
`````````````````````````````1`) Comm error during application selection callback 
`````````````````````````````2`) Calling application returned error code FE in CandidateListCallback 
`````````````````````````````3`) No Contactless TXN performed on CL reader 
`````````````````````````````4`) Memory allocation fail while fetching DOLs 
`````````````````````````````5`) When switching to other interface is not allowed after UnableToGoOnline (only AMEX at the moment) 
`````````````````````````````6`) GET DATA/PUT DATA transaction finished FAIL (only Gemalto at the moment) 
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): error while fetching txn tags 
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation, main ADK contactless context not init 
[EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback): Strong Customer Authentication requirement

**Author**: GSS R&D Germany

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_ONLINE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-online)

[Explanation in programmers guide]



 VFI reader only: [EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec), Vertex only: [EMV_ADK_2_CTLS_CARDS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-2-ctls-cards)


### function EMV_CTLS_fetchTxnTags

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_fetchTxnTags(
    unsigned long options,
    unsigned long * requestedTags,
    unsigned short noOfRequestedTags,
    unsigned char * tlvBuffer,
    unsigned short bufferLength,
    unsigned short * tlvDataLength
)
```

Fetch one or several tags at the end of the transaction. 

**Parameters**: 

  * **options** ... Options, see [Options for fetching TLV data](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md)
  * **requestedTags** ... requested tags 
  * **noOfRequestedTags** ... number of requested tags 
  * **tlvBuffer** ... buffer for TLV output, allocated by calling application 
  * **bufferLength** ... number of bytes allocated for tlvBuffer 
  * **tlvDataLength** ... number of bytes written to tlvBuffer


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): error while fetching txn tags
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): main ADK contactless context not init

**Author**: GSS R&D Germany

**Note**: There are special cases when kernel provides tags non-complient with BER-TLV standard. It is still possible to request such tags (like when requesting tag 0x76 as non-constructed tag). These tags will be returned wrapped in another constructed tag. For more details please refer here: [TAG_DFDE01_KERNEL_PRIVATE_NON_BER](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md#define-tag-dfde01-kernel-private-non-ber)

While ContinueOffline and ContinueOnline provide the most common / generic tags, which are necessary for application handling in a readable way (structure), this may not fulfill all local requirements. This function offers to read any proprietary, extended or application specific tag, which is additionally (next to the generic ones) required by the application. Calling this function is optional, however it may provide benefit for single tags as well as for tag combinations, which will be provided in a TLV stream (e.g. needed for BMP 55) instead of structure data, which is preferable for receipt printing or offline storage.


Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_FETCH_TAG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-tag)

[Explanation in programmers guide]


### function EMV_CTLS_fetchTxnDOL

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_fetchTxnDOL(
    unsigned long options,
    const unsigned char * DOL,
    unsigned dolLen,
    unsigned char * buffer,
    unsigned bufferSize,
    unsigned * dataLength
)
```

Retrieve formatted transaction data at the end of the transaction. 

**Parameters**: 

  * **options** ... Options: None, reserved for future use 
  * **DOL** ... Data Object List = sequence of BER-TLV Tag+Length pairs 
  * **dolLen** ... length of DOL [bytes] 
  * **buffer** ... result data buffer 
  * **bufferSize** ... size of result data buffer [bytes] 
  * **dataLength** ... result data length = sum of all lengths in the DOL (in case of success)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): 
`````````````````````````````1`) bufferSize param size not big enough to contain requested data 
`````````````````````````````2`) DOL not found [EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): main ADK contactless context not init

**Author**: GSS R&D Germany

Like [EMV_CTLS_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) but take a DOL and return pure data. The return buffer is filled with requested data, each with exact requested data length. The tag's data type is analysed and type specific truncation and padding is applied. If a tag's type is unknown, binary is assumed. If the tag is unknown or no data available, '00' bytes are padded. If the requested data length is greater than the available data length, then numeric data is padded with leading '00' and compressed numeric is padded with trailing 'FF'. Other types are padded right with trailing '00'. If the requested data length is smaller than the available data length, then numeric values are cut at front and others at the end.

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_FETCH_DOL](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-dol)


### function EMV_CTLS_EndTransaction

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_EndTransaction(
    unsigned long options
)
```

End transaction. 

**Parameters**: 

  * **options** ... Options, bit set of [Options for End Transaction](group___e_n_d___t_x_n___o_p_t_i_o_n_s.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): main ADK contactless context not init
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback 

**Author**: GSS R&D Germany

This function has to be called at the end of each transactions. It takes care that everything is cleaned up properly, wiped and subcomponents are deinitialized as needed.


Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_END_TRX](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-end-trx)


### function EMV_CTLS_CardRemoval

```
DLL_CLC unsigned char EMV_CTLS_CardRemoval(
    long timeoutMillis
)
```

Wait until contactless card removed or timeout. 

**Parameters**: 

  * **timeoutMillis** maximal blocking time in milli seconds (maximum is 60 seconds) 


**Return**: `1` ... card still present
`0` ... card removed or removal detection not activated

 additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_REMOVAL](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-removal)

Note: The detection is only possible if there was a preceeding call of [EMV_CTLS_SmartPowerOff()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartpoweroff) with [EMV_CTLS_DETECT_REMOVAL](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-detect-removal) or [EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-start-removal-detection-1) is enabled by the application flow capabilities.


### function EMV_CTLS_Break

```
DLL_CLC unsigned char EMV_CTLS_Break(
    void 
)
```

Universal break command  ** Velocity: Only required when using [EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout) != 0. ** ** VFI-Reader: Always required **

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback 

**Author**: GSS R&D Germany

Transport tags used for serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_BREAK](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-break)

[Explanation in programmers guide]


### function EMV_CTLS_GetCandidateData

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_GetCandidateData(
    EMV_CTLS_CANDIDATE_DATA_TYPE * candidateData
)
```

Get additional candidate information for reducing and resorting the mutual candidate list. 

**Parameters**: 

  * **candidateData** Extended candidate data, see [EMV_CTLS_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md)

 Number of elements must be [EMV_CTLS_ADDTAG_COMBOS](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-addtag-combos)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): candidateData bad param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): 
`````````````````````````````1`) Combo count is 0 
`````````````````````````````2`) Failed to parse PPSE response

**Author**: GSS R&D Germany

This function can be called within the reduces candidates callback ([TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand)). See also [EMV_CTLS_GetCandidateDataMax()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedatamax) which allows to receive more than [EMV_CTLS_ADDTAG_COMBOS](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-addtag-combos) sets of candidate data.

**Serialization:** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_CND_DATA](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cnd-data)


### function EMV_CTLS_GetCandidateDataMax

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_GetCandidateDataMax(
    EMV_CTLS_CANDIDATE_DATA_TYPE * candidateData,
    unsigned maxCandidates
)
```

Get additional candidate information for reducing and resorting the mutual candidate list. 

**Parameters**: 

  * **candidateData** Extended candidate data, see [EMV_CTLS_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md)

 Number of elements must be [EMV_CTLS_ADDTAG_COMBOS](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-addtag-combos)
  * **maxCandidates** Number of candidates that fit to the buffer ..255


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok), [EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param), [EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err), [EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal), [EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec)

**Author**: GSS R&D Germany

This function can be called within the reduces candidates callback ([TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand)). Same functionality as [EMV_CTLS_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata) but allows to receive more than [EMV_CTLS_ADDTAG_COMBOS](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-addtag-combos) sets of candidate data.

**Serialization:** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_CND_DATA](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cnd-data)


### function EMV_CTLS_Disconnect

```
void EMV_CTLS_Disconnect(
    unsigned char options
)
```

Disconnect from EMV server. 

**Parameters**: 

  * **options** RFU


**Author**: GSS R&D Germany 

Since the EMV server handles only one client this function needs to be called if the EMV control shall be handed over to different client process. Note: This function has no effect, if not yet connected or not using the client/server library. 


### function EMV_CTLS_SetClientMode

```
void EMV_CTLS_SetClientMode(
    enum EMV_CLIENT_MODE mode
)
```

Switch to client mode. 

**Parameters**: 

  * **mode** see [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode)


**Author**: GSS R&D Germany 

There is only one static client library that uses the EMV framework library by default. Alternatively it can connect via IPC to an EMV server. A third mode - the gateway mode - can be used if there shall be only one channel for both, contact and contactless.


### function EMV_CTLS_GetClientMode

```
enum EMV_CLIENT_MODE EMV_CTLS_GetClientMode()
```

Query the client mode. 

**Return**: EMV_CLIENT_MODE_SDI or other enum value

**Author**: GSS R&D Germany 

The static client library needs to know if SDI client processing is to be done


### function EMV_CTLS_SetCallback

```
void EMV_CTLS_SetCallback(
    EMV_CTLS_CALLBACK_FnT EMV_Callback,
    void * context
)
```

Set Callback Function and activate Callback [Thread](class_thread.md). 

**Parameters**: 

  * **EMV_Callback** callback function pointer, may be NULL 
  * **context** context data pointer which will be passed back with the callback


**Author**: GSS R&D Germany 

### function EMV_CTLS_GetInitOptions

```
unsigned long EMV_CTLS_GetInitOptions(
    void 
)
```

Getter to Init Options from EMV_CTLS_Init_Framework. 

**Return**: Options which were set by [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework)

**Author**: GSS R&D Germany

### function EMV_CTLS_GetSdiSW12

```
unsigned EMV_CTLS_GetSdiSW12()
```

Access SDI status word. 

**Return**: last SDI status word, 0 if not applicable 

This getter is intended for the case that an SDI error code is mapped to an EMV ADK return value but SDI status word is of interest.


### function EMV_CT_StartTransaction

```
DLL_CTCEMV_ADK_INFO EMV_CT_StartTransaction(
    EMV_CT_SELECT_TYPE * pxSelectInput,
    EMV_CT_SELECTRES_TYPE * pxSelectRes
)
```

EMV Application Selection. 

**Parameters**: 

  * **pxSelectInput** Transaction specific data, see [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)
  * **pxSelectRes** Additional (error) info, see [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxSelectInput or pxSelectRes input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-noapp): no supported apps (mag stripe to be performed)
[EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback):
```````````````````````````````1`) Internal error during application selection (both PSE or non-PSE)
```````````````````````````````2`) Empty candidate list with not empty MID list
```````````````````````````````3`) Transport error while building candidate list
```````````````````````````````4`) Final select failed
[EMV_ADK_BADAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-badapp):
```````````````````````````````1`) Application is blocked at final select stage, but further candidates are available
```````````````````````````````2`) Final select failed, but further candidates are available
[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort):
```````````````````````````````1`) Transaction abort is forced at application level in Reentrance mode
```````````````````````````````2`) Empty candidate list, maximum number of configurable AIDs exceeded or problem while building candidate list in Reentrance mode
[EMV_ADK_APP_BLOCKED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-blocked): no MID list and the only application is blocked
**Serialization:**![TLV_StartTransaction.jpg](.//TLV_StartTransaction.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_SELECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-select)

 Callbacks: [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req), [EMV_CT_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-resp)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Starting a Transaction]


### function EMV_CT_GetCandidateData

```
DLL_CTCEMV_ADK_INFO EMV_CT_GetCandidateData(
    EMV_CT_CANDIDATE_DATA_TYPE * candidateData
)
```

Get additional candidate information for reducing, resorting or displaying the mutual candidate list. 

**Parameters**: 

  * **candidateData** Extended candidate data, see [EMV_CT_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success

**Author**: GSS R&D Germany

This function is optionally called after EMV_CT_StartTransaction (reentrance mode) or within the reduce candidates callback. It retrieves additional information for all mutual candidates. The output list array length must be at least the number of mutual candidates which is less or equal [EMV_CT_COMMON_CANDS](_e_m_v___c_t___interface_8h.md#define-emv-ct-common-cands).

**Serialization:** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_CND_DATA](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cnd-data)


### function EMV_CT_ContinueOffline

```
DLL_CTCEMV_ADK_INFO EMV_CT_ContinueOffline(
    EMV_CT_TRANSAC_TYPE * pxTransactionInput,
    EMV_CT_TRANSRES_TYPE * pxTransRes
)
```

EMV transaction (offline part including 1st cryptogram) 

**Parameters**: 

  * **pxTransactionInput** Transaction data, see [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md)
  * **pxTransRes** Transaction result data, see [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_ARQC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-arqc): transaction must go online 
[EMV_ADK_TC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tc): transaction is offline approved 
[EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback): depending on domestic specification a fallback to magstripe may be allowed 
[EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): card data read successfully (only possible for transaction types [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund), [EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-reversal), [EMV_ADK_TRAN_TYPE_BUCHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-b), [EMV_ADK_TRAN_TYPE_BUCHUNG_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-a)) 
[EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac): transaction is offline declined 
[EMV_ADK_AAR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aar): referral is to be performed 
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation 
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTransactionInput or pxTransRes input params 
[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort): 
```````````````````````````````1`) Transaction aborted by customer at different stages 
```````````````````````````````2`) DCC requested but transaction must be restarted 
```````````````````````````````3`) CDCVM Card not yet enrolled (DPAS) 
```````````````````````````````4`) Card removed at final select stage, during a referral or during GET DATA PTC (70) command 
```````````````````````````````5`) Fallback not allowed 
```````````````````````````````6`) Any error at final select stage in a transaction repetition 
```````````````````````````````7`) No more available technologies to perform a transaction in case of fallback 
```````````````````````````````8`) ICC did not answer with valid AAC 
```````````````````````````````9`) 1st Cryptogram returns "Service not allowed" 
```````````````````````````````10`) CDA failure at GENAC1 (NO GENAC2 needed) 
```````````````````````````````11`) Unkown cryptogram result and AAC has been requested 
```````````````````````````````12`) Inconsistent Track2 data against PAN and Exp Date when checks enabled 
```````````````````````````````13`) Aborted or timed-out enforced online-pin 
```````````````````````````````14`) Domestic local checks requested abort 
```````````````````````````````15`) Calling application tried to change amount or currency 
```````````````````````````````16`) Failing writing DCC callbacks changed tag values 
```````````````````````````````17`) Bad application during repetition transaction at GPO stage 
```````````````````````````````18`) AIP does not support Cardholder Verification at GPO stage 
```````````````````````````````19`) Terminal or Application does not support Cash 
```````````````````````````````20`) Terminal or Application does not support Cashback 
```````````````````````````````21`) Customer application requested transaction abort in reentrance mode after GPO 
[EMV_ADK_CVM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-cvm): user abort during PIN input 
**Serialization:**![TLV_ContinueOffline.jpg](.//TLV_ContinueOffline.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_TRANSAC](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-transac)

 Callbacks: [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req), [EMV_CT_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-resp)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Continue a Transaction Offline Part]


### function EMV_CT_ContinueOnline

```
DLL_CTCEMV_ADK_INFO EMV_CT_ContinueOnline(
    EMV_CT_HOST_TYPE * pxOnlineInput,
    EMV_CT_TRANSRES_TYPE * pxTransRes
)
```

EMV transaction (handling of host response including 2nd cryptogram) 

**Parameters**: 

  * **pxOnlineInput** Data of host response, see [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md)
  * **pxTransRes** Result data, see [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_TC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tc): transaction is online approved
[EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac): transaction is online declined
[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort): transaction is aborted by customer
[EMV_ADK_ONLINE_PIN_RETRY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-online-pin-retry): online PIN reentered (PIN check)
[EMV_ADK_CVM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-cvm): user abort during PIN input
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxOnlineInput or pxTransRes input param
[EMV_ADK_CARDERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-carderr): error while writing Data Storage Containers (DPAS)
**Serialization:**![TLV_ContinueOnline.jpg](.//TLV_ContinueOnline.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_ONLINE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-online)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Continue a Transaction Online Part]


### function EMV_CT_fetchTxnTags

```
DLL_CTCEMV_ADK_INFO EMV_CT_fetchTxnTags(
    unsigned long options,
    unsigned long * requestedTags,
    unsigned short noOfRequestedTags,
    unsigned char * tlvBuffer,
    unsigned short bufferLength,
    unsigned short * tlvDataLength
)
```

Fetch one or several tags at the end of the transaction. 

**Parameters**: 

  * **options** Options, see [Options for fetching TLV data](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md)

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **requestedTags** Requested tags 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **noOfRequestedTags** Number of requested tags 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **tlvBuffer** Buffer for TLV output, allocated by calling application 

 not serialized on TLV interface 
  * **bufferLength** Number of bytes allocated for tlvBuffer 

 not serialized on TLV interface 
  * **tlvDataLength** Number of bytes written to tlvBuffer 

 not serialized on TLV interface


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad requestedTags, tlvBuffer or tlvDataLength input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

While ContinueOffline and ContinueOnline provide the most common / generic tags, which are necessary for application handling in a readable way (structure), this may not fulfill all local requirements. This function offers to read any proprietary, extended or application specific tag, which is additionally (next to the generic ones) required by the application. Calling this function is optional, however it may provide benefit for single tags as well as for tag combinations, which will be provided in a TLV stream (e.g. needed for BMP 55) instead of structure data, which is preferable for receipt printing or offline storage.

Explanation in programmers guide: [Fetching Additional Tags]


### function EMV_CT_fetchTxnDOL

```
DLL_CTCEMV_ADK_INFO EMV_CT_fetchTxnDOL(
    unsigned long options,
    const unsigned char * DOL,
    unsigned dolLen,
    unsigned char * buffer,
    unsigned bufferSize,
    unsigned * dataLength
)
```

Retrieve formatted transaction data at the end of the transaction. 

**Parameters**: 

  * **options** Options: None, reserved for future use 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **DOL** Data Object List = sequence of BER-TLV Tag+Length pairs 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **dolLen** Length of DOL [bytes] 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **buffer** Result data buffer 

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)
  * **bufferSize** Size of result data buffer [bytes] 

 TLV tag [TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)
  * **dataLength** Result data length = sum of all lengths in the DOL (in case of success) 

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad DOL, buffer or bufferSize input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Like [EMV_CT_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) but take a DOL and return pure data. The return buffer is filled with requested data, each with exact requested data length. The tag's data type is analysed and type specific truncation and padding is applied. If a tag's type is unknown, binary is assumed. If the tag is unknown or no data available, '00' bytes are padded. If the requested data length is greater than the available data length, then numeric data is padded with leading '00' and compressed numeric is padded with trailing 'FF'. Other types are padded right with trailing '00'. If the requested data length is smaller than the available data length, then numeric values are cut at front and others at the end.

Transport tags used in serialisation: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_FETCH_DOL](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-dol)


### function EMV_CT_updateTxnTags

```
DLL_CTCEMV_ADK_INFO EMV_CT_updateTxnTags(
    unsigned long options,
    unsigned char * tlvBuffer,
    unsigned short bufferLength
)
```

Update one or several kernel tags during transaction. 

**Parameters**: 

  * **options** Options, see [Options for updating TLV data](group___u_p_d_a_t_e___t_a_g_s___o_p_t_i_o_n_s.md)

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **tlvBuffer** Pointer to TLV data 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **bufferLength** Size of `tlvBuffer`

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad tlvBuffer input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

**Note**: Application configuration update for the running transaction can also be done by calling [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata) with option [EMV_ADK_TEMP_UPDATE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-temp-update).

This update is restricted to certain (not protected) EMV L2 kernel tags, if there is a need to change these tags during the transaction temporarily and for this transaction only but not for the general configuration. Use carefully. 
These tags are allowed to change: 

* [TAG_42_ISSUER_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-42-issuer-id)
* [TAG_5F50_ISSUER_URL](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f50-issuer-url)
* [TAG_5F53_IBAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f53-iban)
* TAG_5F54_BIC 
* [TAG_5F55_ISSUER_COUNTRY_2](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f55-issuer-country-2)
* [TAG_5F56_ISSUER_COUNTRY_3](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f56-issuer-country-3)
* 0x9F4D 
* [TAG_91_ISS_AUTH_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-91-iss-auth-data) ([EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata)) 
* [TAG_9F01_ACQ_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f01-acq-id)
* [TAG_9F1D_TRM_RISK_MNGT_DATA](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1d-trm-risk-mngt-data)
* [TAG_9F4E_TAC_MERCHANTLOC](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4e-tac-merchantloc)
* [TAG_9F1E_IFD_SERIAL_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1e-ifd-serial-nb) ([EMV_CT_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber)) 
* [TAG_9F15_MERCH_CATEG_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f15-merch-categ-code) ([EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey)) 
* [TAG_9F16_MERCHANT_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f16-merchant-id) ([EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident)) 
* [TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit) ([EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit)) 
* [TAG_9F39_POS_ENTRY_MODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f39-pos-entry-mode) ([EMV_CT_APPLIDATA_STRUCT::POS_EntryMode](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-pos-entrymode)) 
* [TAG_9F1C_TRM_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1c-trm-id) ([EMV_CT_TERMDATA_STRUCT::TermIdent](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termident)) 
* [TAG_9F33_TRM_CAPABILITIES](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f33-trm-capabilities) ([EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap)) 
* [TAG_9F35_TRM_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f35-trm-type) ([EMV_CT_APPLIDATA_STRUCT::App_TermTyp](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termtyp)) 
* [TAG_9F40_ADD_TRM_CAP](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f40-add-trm-cap) ([EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap)) 
* [TAG_9A_TRANS_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9a-trans-date) ([EMV_CT_PAYMENT_STRUCT::Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date)) 
* [TAG_9C_TRANS_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9c-trans-type) ([EMV_CT_SELECT_STRUCT::TransType](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-transtype)) 
* [TAG_9F21_TRANS_TIME](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f21-trans-time) ([EMV_CT_PAYMENT_STRUCT::Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time)) 
* [TAG_9F41_TRANS_SEQUENCE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f41-trans-sequence-nb) ([EMV_CT_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount)) 
* [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency) ([EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans)) 
* [TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp) ([EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans)) 
* [TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth) ([EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount)) 
* [TAG_9F03_NUM_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f03-num-amount-other) ([EMV_CT_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount)) 
* [TAG_8A_AUTH_RESP_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-8a-auth-resp-code) ([EMV_CT_HOST_STRUCT::AuthResp](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp)) 
* [TAG_95_TVR](group___e_m_v_c_o___t_a_g_s.md#define-tag-95-tvr) (just setting of bits allowed) 
* [TAG_DFD003_STORED_AMOUNT](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd003-stored-amount)
* [TAG_CAND_LIST](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-cand-list) ([EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates)) 
* All proprietary tags configured by [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm)


### function EMV_CT_CheckSupportedAID

```
DLL_CTCEMV_ADK_INFO EMV_CT_CheckSupportedAID(
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

Do List Of Application processing for a single terminal AID. 

**Parameters**: 

  * **aid** Terminal AID('9F 06') 

 TLV tag [TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)
  * **ASI** Application selection indicator 0=exact, 1=partial 

 TLV tag [TAG_DF20_ASI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df20-asi)
  * **defaultLabel** Optional: default application label 

 TLV tag [TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)
  * **pCandList** Buffer for candidates found 

 TLV tag [TAG_CAND_LIST](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-cand-list)
  * **MaxCand** Number items that can be stored to pCandList buffer, [1 .. EMV_CT_COMMON_CANDS] 

 not serialized on TLV interface 
  * **pCandidateCount** Number of candidates found 

 TLV interface: number of iterations of [TAG_CAND_LIST](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-cand-list)
  * **sw12** Optional: status word return by card, '0000' for communication problem 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **adtCardTagList** Additional card tags list for Additional Tag Store configuration: 

 1 byte overall list length + n * (tag (1-4 bytes) + type (1 byte) + minimal length (1 byte) + maximal length (1 byte)). 

 If null pointer the framework's standard ADT card tag list will be used, if list length is 0 no additional card tags are put to the Addtional Tag Store configuration. 

 Types are according L2 kernel interface: 1 binary, 2 numeric, 3 np, 4 date, 5 an, 6 ans. 

 TLV tag [TAG_DF2C_ADD_TAGS_CRD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2c-add-tags-crd)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok) (EMVL2_AUTO_SELECT, EMVL2_NOT_SELECTED) 
[EMV_ADK_BADAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-badapp) (EMVL2_NON_EMV) 
[EMV_ADK_NOAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-noapp) (EMVL2_MAG_STRIPE) 
[EMV_ADK_CARD_BLOCKED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-card-blocked) (EMVL2_ICC_BLOCKED) 
[EMV_ADK_APP_BLOCKED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-blocked) (EMVL2_DF_BLOCKED, '62 83') 
[EMV_ADK_CARDERR_FORMAT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-carderr-format) (EMVL2_MNDTY_DATA) 
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param) (EMVL2_BAD_PARAM) 
[EMV_ADK_NO_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-card) (EMVL2_FAIL + missing card) 
[EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback) (EMVL2_FAIL + card in) 

**Author**: GSS R&D Germany

Only recommended for experienced users.


### function EMV_CT_EndTransaction

```
DLL_CTCEMV_ADK_INFO EMV_CT_EndTransaction(
    unsigned long options
)
```

End transaction. 

**Parameters**: 

  * **options** Options, reserved for future use 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
**Serialization:** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_END_TRX](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-end-trx)

**Author**: GSS R&D Germany

### function EMV_CT_Send_PIN_Offline

```
DLL_CTC unsigned char EMV_CT_Send_PIN_Offline(
    unsigned char * pucPINResultData
)
```

Send entered (offline) PIN to chip card for verification. 

**Parameters**: 

  * **pucPINResultData** PIN result data (2 bytes with status word SW12) 

 9000 = PIN correct; 63Cn = PIN wrong (n = number of tries left) 

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Calling application displays "Please enter PIN" dialog. It also manages the PIN entry with help of the vault. 

 But sending the PIN to the card for verification must be done by EMV ADK, because

* EMV ADK will store the PIN result internally for further processing.
* It must be assured that the same process sends the PIN to the ICC, which might be a problem otherwise, e.g. when running in a client-server environment or different tasks or event handlers ...

Explanation in programmers guide: [Send EMV PIN to Smart Card]


### function EMV_CT_Disconnect

```
void EMV_CT_Disconnect(
    void 
)
```

Disconnect from EMV server. 

**Author**: GSS R&D Germany 

Since the EMV server handles only one client this function needs to be called if the EMV control shall be handed over to different client process. Note: This function has no effect, if not yet connected or not using the client/server libaray.


### function EMV_CT_SetClientMode

```
void EMV_CT_SetClientMode(
    enum EMV_CLIENT_MODE mode
)
```

Switch to Client-Server mode. 

**Author**: GSS R&D Germany 

There is only one static client library that uses the EMV framework library by default. Alternatively it can connect via IPC to an EMV server. A thrird mode - the gateway mode - can be used if there shall be only one channel for both, contact and contactless.


### function EMV_CT_GetClientMode

```
enum EMV_CLIENT_MODE EMV_CT_GetClientMode()
```

Query the client mode. 

**Return**: EMV_CLIENT_MODE_SDI or other enum value

**Author**: GSS R&D Germany 

The static client library needs to know if SDI client processing is to be done


### function EMV_CT_SetCallback

```
void EMV_CT_SetCallback(
    EMV_CT_CALLBACK_FnT EMV_Callback,
    void * context
)
```

Set Callback Function and activate Callback [Thread](class_thread.md). 

**Parameters**: 

  * **EMV_Callback** call back function pointer, may by NULL 
  * **context** context data pointer which will be passed back with the call back


**Author**: GSS R&D Germany 

### function EMV_CT_GetInitOptions

```
unsigned long EMV_CT_GetInitOptions(
    void 
)
```

Getter to Init Options from EMV_CT_Init_Framework. 

**Return**: [in] options, in case of IPC with Two Piece Solution this is device specific

**Author**: GSS R&D Germany 

### function EMV_CT_GetSdiSW12

```
unsigned EMV_CT_GetSdiSW12()
```

Access SDI status word. 

**Return**: last SDI status word, 0 if not applicable 

This getter is intended for the case that an SDI error code is mapped to an EMV ADK return value but SDI status word is of interest.






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
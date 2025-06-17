---
title: emv/EMV_CT_Common/export/emv/EMV_CT_Interface.h
summary: Interface of CT-Client. 

---

# emv/EMV_CT_Common/export/emv/EMV_CT_Interface.h

Interface of CT-Client. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)** <br>9F06, AID (5 bytes RID + n bytes PIX)  |
| struct | **[EMV_CT_CANDIDATE_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md)** <br>Candidate list structure.  |
| struct | **[EMV_CT_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md)** <br>Candidate list additional data Output of [EMV_CT_GetCandidateData()]()   To be used in conjunction with [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates]().  |
| struct | **[EMV_CT_DOL_STRUCT](struct_e_m_v___c_t___d_o_l___s_t_r_u_c_t.md)** <br>data object list  |
| struct | **[EMV_CT_TRACK2_STRUCT](struct_e_m_v___c_t___t_r_a_c_k2___s_t_r_u_c_t.md)** <br>track 2 data  |
| struct | **[EMV_CT_CRDNAME_STRUCT](struct_e_m_v___c_t___c_r_d_n_a_m_e___s_t_r_u_c_t.md)** <br>cardholder name  |
| struct | **[EMV_CT_ICCRND_STRUCT](struct_e_m_v___c_t___i_c_c_r_n_d___s_t_r_u_c_t.md)** <br>icc dynamic number  |
| struct | **[EMV_CT_ISSDATA_STRUCT](struct_e_m_v___c_t___i_s_s_d_a_t_a___s_t_r_u_c_t.md)** <br>issuer application data  |
| struct | **[EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)** <br>struct for interface to [EMV_CT_SetTermData()]() and [EMV_CT_GetTermData()]() |
| struct | **[EMV_CT_TAGLIST_STRUCT](struct_e_m_v___c_t___t_a_g_l_i_s_t___s_t_r_u_c_t.md)** <br>structure for [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd) and [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) |
| struct | **[EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application    see [EMV_CT_SetAppliData()]() |
| struct | **[EMV_CT_DOM_CHIP_STRUCT](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md)** <br>Domestic non-EMV chip applications supporting AID selection    see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)   TLV tag [TAG_EMV_CONFORM]().  |
| struct | **[EMV_CT_FALLBCK_MSR_STRUCT](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md)** <br>list of MID applications supported by terminal    DF4C, see `xFallback_MS` in [EMV_CT_SELECT_STRUCT]() and [EMV_CT_SELECTRES_STRUCT]() |
| struct | **[EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md)** <br>Transaction parameters of an EMV transaction.  |
| struct | **[EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md)** <br>Application selection parameters of an EMV transaction used for [EMV_CT_SELECT_STRUCT::SEL_Data]().  |
| struct | **[EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)** <br>struct for interface to [EMV_CT_StartTransaction()]() |
| struct | **[EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md)** <br>result data of [EMV_CT_StartTransaction()]() |
| struct | **[EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md)** <br>Structure for call of [EMV_CT_ContinueOffline()]() |
| struct | **[EMV_CT_SRCRIPTRES_STRUCT](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md)** <br>Data structure for issuer script results. Used in [EMV_CT_TRANSRES_STRUCT::scriptresults]().  |
| struct | **[EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md)** <br>Data structure for host response data. Input for [EMV_CT_ContinueOnline()]() |
| struct | **[EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)** <br>Data structure for output data of [EMV_CT_ContinueOffline()]() and [EMV_CT_ContinueOnline()]() |
| struct | **[EMV_CT_CAPKEY_STRUCT](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md)** <br>Data structure CAP keys.  |
| struct | **[EMV_CT_CAPREAD_STRUCT](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md)** <br>Data structure CAP keys.  |
| struct | **[EMV_CT_CandListType](struct_e_m_v___c_t___cand_list_type.md)** <br>Data structure for output of EMV_CT_CheckSupportedAID.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md) | **[EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type)** <br>9F06, AID (5 bytes RID + n bytes PIX)  |
| typedef struct [EMV_CT_CANDIDATE_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md) | **[EMV_CT_CANDIDATE_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-candidate-type)** <br>Candidate list structure.  |
| typedef struct [EMV_CT_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CT_CANDIDATE_DATA_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-candidate-data-type)** <br>Candidate list additional data Output of [EMV_CT_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getcandidatedata)   To be used in conjunction with [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates).  |
| typedef struct [EMV_CT_DOL_STRUCT](struct_e_m_v___c_t___d_o_l___s_t_r_u_c_t.md) | **[EMV_CT_DOL_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-dol-type)** <br>data object list  |
| typedef struct [EMV_CT_TRACK2_STRUCT](struct_e_m_v___c_t___t_r_a_c_k2___s_t_r_u_c_t.md) | **[EMV_CT_TRACK2_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-track2-type)** <br>track 2 data  |
| typedef struct [EMV_CT_CRDNAME_STRUCT](struct_e_m_v___c_t___c_r_d_n_a_m_e___s_t_r_u_c_t.md) | **[EMV_CT_CRDNAME_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-crdname-type)** <br>cardholder name  |
| typedef struct [EMV_CT_ICCRND_STRUCT](struct_e_m_v___c_t___i_c_c_r_n_d___s_t_r_u_c_t.md) | **[EMV_CT_ICCRND_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-iccrnd-type)** <br>icc dynamic number  |
| typedef struct [EMV_CT_ISSDATA_STRUCT](struct_e_m_v___c_t___i_s_s_d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CT_ISSDATA_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-issdata-type)** <br>issuer application data  |
| typedef struct [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CT_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ct-termdata-type)** <br>struct for interface to [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata) and [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) |
| typedef struct [EMV_CT_TAGLIST_STRUCT](struct_e_m_v___c_t___t_a_g_l_i_s_t___s_t_r_u_c_t.md) | **[EMV_CT_TAGLIST_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-taglist-type)** <br>structure for [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd) and [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) |
| typedef struct [EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CT_APPLIDATA_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ct-applidata-type)** <br>Structure for configuration of one single application    see [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata) |
| typedef struct [EMV_CT_DOM_CHIP_STRUCT](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md) | **[EMV_CT_DOM_CHIP_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-dom-chip-type)** <br>Domestic non-EMV chip applications supporting AID selection    see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)   TLV tag [TAG_EMV_CONFORM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-emv-conform).  |
| typedef struct [EMV_CT_FALLBCK_MSR_STRUCT](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md) | **[EMV_CT_FALLBCK_MSR_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-fallbck-msr-type)** <br>list of MID applications supported by terminal    DF4C, see `xFallback_MS` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) and [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md) |
| typedef struct [EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md) | **[EMV_CT_PAYMENT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-payment-type)** <br>Transaction parameters of an EMV transaction.  |
| typedef struct [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md) | **[EMV_CT_APPS_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-apps-select-type)** <br>Application selection parameters of an EMV transaction used for [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data).  |
| typedef struct [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) | **[EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type)** <br>struct for interface to [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction) |
| typedef struct [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md) | **[EMV_CT_SELECTRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-selectres-type)** <br>result data of [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction) |
| typedef struct [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md) | **[EMV_CT_TRANSAC_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transac-type)** <br>Structure for call of [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline) |
| typedef struct [EMV_CT_SRCRIPTRES_STRUCT](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md) | **[EMV_CT_SRCRIPTRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-srcriptres-type)** <br>Data structure for issuer script results. Used in [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults).  |
| typedef struct [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md) | **[EMV_CT_HOST_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-host-type)** <br>Data structure for host response data. Input for [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) |
| typedef struct [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md) | **[EMV_CT_TRANSRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transres-type)** <br>Data structure for output data of [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline) and [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) |
| typedef unsigned char | **[EMV_ADK_MerchantInfo](group___m_e_r_c_h___i_n_f_o.md#typedef-emv-adk-merchantinfo)**  |
| typedef unsigned char | **[eCardholderInfo](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#typedef-ecardholderinfo)**  |
| typedef struct [EMV_CT_CAPKEY_STRUCT](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md) | **[EMV_CT_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capkey-type)** <br>Data structure CAP keys.  |
| typedef struct [EMV_CT_CAPREAD_STRUCT](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md) | **[EMV_CT_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capread-type)** <br>Data structure CAP keys.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_Init_Framework_Client](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-init-framework-client)**(const char * version, const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) void | **[EMV_CT_SER_Exit_Framework](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-exit-framework)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_MapVirtualTerminal](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-mapvirtualterminal)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_StoreCAPKey](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-storecapkey)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_ReadCAPKeys](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-readcapkeys)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_SetTermData](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-settermdata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_GetTermData](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-gettermdata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_SetAppliData](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-setapplidata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_GetAppliData](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-getapplidata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_StartTransaction](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-starttransaction)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_GetCandidateData](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-getcandidatedata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_ContinueOffline](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-continueoffline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_ContinueOnline](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-continueonline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_fetchTxnTags](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-fetchtxntags)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_fetchTxnDOL](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-fetchtxndol)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_updateTxnTags](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-updatetxntags)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_CheckSupportedAID](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-checksupportedaid)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SER_EndTransaction](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-endtransaction)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SER_SmartISO](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-smartiso)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SER_SmartDetect](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-smartdetect)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SER_SmartReset](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-smartreset)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SER_SmartPowerOff](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-smartpoweroff)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SER_SmartPIN](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-smartpin)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SER_Send_PIN_Offline](_e_m_v___c_t___interface_8h.md#function-emv-ct-ser-send-pin-offline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_Init_Framework_Client](_e_m_v___c_t___interface_8h.md#function-emv-ct-init-framework-client)**(const char * version, unsigned char numberOfAIDs, [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) EMV_Callback, void * externalData, unsigned long options)<br>Internal function for initialization    Don't call direct!    Instead use [EMV_CT_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework).  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) void | **[EMV_CT_Exit_Framework](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework)**(void )<br>Kernel deactivation.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) void | **[EMV_CT_Exit_Framework_extended](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework-extended)**(unsigned char options)<br>Kernel deactivation.  |
| const [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) char * | **[EMV_CT_CLIENT_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ct-client-getversion)**(void )<br>Get contact client version.  |
| const [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) char * | **[EMV_CT_FRAMEWORK_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ct-framework-getversion)**(void )<br>Get contact framework version.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_MapVirtualTerminal](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal)**([EMV_ADK_VIRTUALTERMMAP_TYPE](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md#typedef-emv-adk-virtualtermmap-type) VirtualTermMapType, unsigned char * TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal)<br>Changes the Virtual Terminal Map.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_StoreCAPKey](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleCAPKeyType, const [EMV_CT_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capkey-type) * pxKeyData)<br>Stores the specified CAP key.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_ReadCAPKeys](group___f_u_n_c___c_o_n_f.md#function-emv-ct-readcapkeys)**([EMV_CT_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capread-type) * pxKeyData, unsigned char * pucMaxnum)<br>Reads CAP keys.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_GetCAPKeyInfo](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getcapkeyinfo)**([EMV_CT_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capread-type) * pxKeyInfo, unsigned capacity, unsigned offset, unsigned * received, unsigned * configured)<br>Reads CAP key information.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata)**([EMV_CT_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ct-termdata-type) * pxTermData)<br>Set terminal specific data and perform verification and saving of data.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata)**([EMV_CT_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ct-termdata-type) * pxTermData)<br>Get configured terminal data.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SetAppliData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleAppliType, [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) * pxAID, [EMV_CT_APPLIDATA_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ct-applidata-type) * pxAppliData)<br>Set application specific data and perform verification and saving of data.    Has to be called once per application (Visa, MasterCard, ...).  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_GetAppliData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata)**([EMV_ADK_READAPPLI_TYPE](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#typedef-emv-adk-readappli-type) eReadAppliType, [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) * pxAID, [EMV_CT_APPLIDATA_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ct-applidata-type) * pxAppliData)<br>Get configured application data    Has to be called once per application (Visa, MasterCard, ...).  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_ApplyConfiguration](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration)**(unsigned long options)<br>Write configuration to files.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_StartTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction)**([EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type) * pxSelectInput, [EMV_CT_SELECTRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-selectres-type) * pxSelectRes)<br>EMV Application Selection.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_GetCandidateData](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getcandidatedata)**([EMV_CT_CANDIDATE_DATA_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-candidate-data-type) * candidateData)<br>Get additional candidate information for reducing, resorting or displaying the mutual candidate list.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_ContinueOffline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline)**([EMV_CT_TRANSAC_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transac-type) * pxTransactionInput, [EMV_CT_TRANSRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transres-type) * pxTransRes)<br>EMV transaction (offline part including 1st cryptogram)  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_ContinueOnline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)**([EMV_CT_HOST_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-host-type) * pxOnlineInput, [EMV_CT_TRANSRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transres-type) * pxTransRes)<br>EMV transaction (handling of host response including 2nd cryptogram)  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags)**(unsigned long options, unsigned long * requestedTags, unsigned short noOfRequestedTags, unsigned char * tlvBuffer, unsigned short bufferLength, unsigned short * tlvDataLength)<br>Fetch one or several tags at the end of the transaction.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_fetchTxnDOL](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxndol)**(unsigned long options, const unsigned char * DOL, unsigned dolLen, unsigned char * buffer, unsigned bufferSize, unsigned * dataLength)<br>Retrieve formatted transaction data at the end of the transaction.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_updateTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags)**(unsigned long options, unsigned char * tlvBuffer, unsigned short bufferLength)<br>Update one or several kernel tags during transaction.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_CheckSupportedAID](group___f_u_n_c___f_l_o_w.md#function-emv-ct-checksupportedaid)**(const [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) * aid, unsigned char ASI, const unsigned char * defaultLabel, [EMV_CT_CandListType](struct_e_m_v___c_t___cand_list_type.md) * pCandList, unsigned char MaxCand, unsigned char * pCandidateCount, unsigned short * sw12, const unsigned char * adtCardTagList)<br>Do List Of Application processing for a single terminal AID.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_EndTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ct-endtransaction)**(unsigned long options)<br>End transaction.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartISO](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso)**(unsigned char ucOptions, unsigned short usInDataLen, unsigned char * pucDataIn, unsigned short * pusOutDataLen, unsigned char * pucDataOut, unsigned short usOutBufferLength)<br>send chip card command and receive response  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartDetect](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect)**(unsigned char ucOptions)<br>Detect if chip card is inserted in card reader (in readable position)  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartReset](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset)**(unsigned char ucOptions, unsigned char * pucATR, unsigned long * pnATRLength)<br>Detect if chip card is inserted in card reader (read ATR)  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartPowerOff](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpoweroff)**(unsigned char ucOptions)<br>Deactivate chip card.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartPIN](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpin)**(const unsigned char * INICCRandom, const unsigned char * PubKeyData, int PubKeyLen, int Exponent, unsigned char * pucPINResultData)<br>Encipher PIN and send VERIFY command.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_Send_PIN_Offline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline)**(unsigned char * pucPINResultData)<br>Send entered (offline) PIN to chip card for verification.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_LED](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led)**(unsigned char ucLedId, unsigned char ucLedState, unsigned char ucLedColor, unsigned long ulTimeoutMs)<br>Control the Smart Card Reader LEDs.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)**  |
|  | **[EMV_CT_SUPPORTED_SIZE_9F0A](_e_m_v___c_t___interface_8h.md#define-emv-ct-supported-size-9f0a)** <br>limit for Application Section Registered Proprietary Data size (has been 20 before)  |
|  | **[EMV_CT_COMMON_CANDS](_e_m_v___c_t___interface_8h.md#define-emv-ct-common-cands)** <br>Maximum number of mutual candidates in application selection process, see [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) and [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates).  |
|  | **[EMV_CT_PIN_INPUT_ONLINE](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-online)** <br>Online enciphered PIN.  |
|  | **[EMV_CT_PIN_INPUT_PLAIN](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-plain)** <br>Offline plaintext PIN.  |
|  | **[EMV_CT_PIN_INPUT_ENCIPHERED](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-enciphered)** <br>Offline enciphered PIN.  |
|  | **[EMV_CT_PIN_INPUT_PLAIN_EXT](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-plain-ext)** <br>Offline plaintext PIN at external device (old Verix devices only)  |
|  | **[EMV_CT_PIN_INPUT_ENCIPHERED_EXT](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-enciphered-ext)** <br>Offline enciphered PIN at external device (old Verix devices only)  |
|  | **[EMV_CT_CVM_CUSTOM](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-cvm-custom)** <br>Custom CVM, the highest bit indicates the custom CVM, byte 0...3 indicates the custom CVM method.  |
|  | **[EMV_CT_PIN_INPUT_OKAY](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-okay)** <br>PIN input was successful.  |
|  | **[EMV_CT_PIN_INPUT_COMM_ERR](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-comm-err)** <br>Communication error.  |
|  | **[EMV_CT_PIN_INPUT_ABORT](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-abort)** <br>Customer canceled.  |
|  | **[EMV_CT_PIN_INPUT_BYPASS](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-bypass)** <br>Customer chose "bypass PIN entry".  |
|  | **[EMV_CT_PIN_INPUT_TIMEOUT](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-timeout)** <br>Timeout.  |
|  | **[EMV_CT_PIN_INPUT_OTHER_ERR](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-other-err)** <br>Other error.  |
|  | **[EMV_CT_PIN_UNCRIT_TIMEOUT](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-uncrit-timeout)** <br>uncritical timeout (no immediate abort on timeout)  |
|  | **[EMV_CT_EMV_0](group___e_m_v___m_o_d_e_s.md#define-emv-ct-emv-0)** <br>EMV Application.  |
|  | **[EMV_CT_EMV_1](group___e_m_v___m_o_d_e_s.md#define-emv-ct-emv-1)** <br>EMV Application.  |
|  | **[EMV_CT_NON_EMV](group___e_m_v___m_o_d_e_s.md#define-emv-ct-non-emv)** <br>NON EMV Application.  |
|  | **[EMV_ADK_INF_INIT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-init)** <br>Initialization.  |
|  | **[EMV_ADK_INF_SEL_TERMDATA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-termdata)** <br>Application selection: terminal data.  |
|  | **[EMV_ADK_INF_SEL_TEXTE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-texte)** <br>Application selection: texts.  |
|  | **[EMV_ADK_INF_SEL_PAYINIT_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-payinit-ok)** <br>Application selection: Init Payment OK.  |
|  | **[EMV_ADK_INF_SEL_CHECK_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-check-ok)** <br>Application selection: Check OK.  |
|  | **[EMV_ADK_INF_SEL_BUILD_APPLI_LIST](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-build-appli-list)** <br>Application selection: Build Application List.  |
|  | **[EMV_ADK_INF_SEL_ANOTHER](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-another)** <br>Application selection: Other.  |
|  | **[EMV_ADK_INF_SEL_FINAL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-final)** <br>Application selection: Final.  |
|  | **[EMV_ADK_INF_SEL_NO](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-no)** <br>Application selection: NO.  |
|  | **[EMV_ADK_INF_SEL_FINISH_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-finish-ok)** <br>Application selection: Finished OK.  |
|  | **[EMV_ADK_INF_SEL_BLOCK_APPLI](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-block-appli)** <br>Application selection: Blocked Application.  |
|  | **[EMV_ADK_INF_SEL_BLOCK_CARD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-block-card)** <br>Application selection: Blocked Card.  |
|  | **[EMV_ADK_INF_SEL_LOA_PROC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-loa-proc)** <br>Application selection: LOA Processing.  |
|  | **[EMV_ADK_INF_SEL_UI_LOA_PROC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-ui-loa-proc)** <br>Application selection: LOA Processing (uninterrupted)  |
|  | **[EMV_ADK_INF_TRANS_CHECK_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-check-ok)** <br>Offline transaction processing: Check OK.  |
|  | **[EMV_ADK_INF_TRANS_READ_TERM](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-read-term)** <br>offline transaction processing: Read Terminal Data  |
|  | **[EMV_ADK_INF_TRANS_READ_APPLI](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-read-appli)** <br>offline transaction processing: Read Application  |
|  | **[EMV_ADK_INF_TRANS_SEL_LANG](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-sel-lang)** <br>offline transaction processing: Select Language  |
|  | **[EMV_ADK_INF_TRANS_CONF_AMOUNT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-conf-amount)** <br>offline transaction processing: Confirm Amount  |
|  | **[EMV_ADK_INF_TRANS_INITIATE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-initiate)** <br>offline transaction processing: Initiation  |
|  | **[EMV_ADK_INF_TRANS_READ_CARD_DATA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-read-card-data)** <br>offline transaction processing: Read Card Data  |
|  | **[EMV_ADK_INF_TRANS_CHECK_APPLI_DATA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-check-appli-data)** <br>offline transaction processing: Check Application Data  |
|  | **[EMV_ADK_INF_TRANS_PROC_RESTRICTION](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-proc-restriction)** <br>offline transaction processing: Process Restriction  |
|  | **[EMV_ADK_INF_TRANS_CARD_AUTH](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-card-auth)** <br>offline transaction processing: Card Authentication  |
|  | **[EMV_ADK_INF_TRANS_VERIFY](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify)** <br>offline transaction processing: Verification  |
|  | **[EMV_ADK_INF_TRANS_RISK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-risk)** <br>offline transaction processing: Risk  |
|  | **[EMV_ADK_INF_TRANS_AAT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-aat)** <br>offline transaction processing: AAT (action analysis terminal)  |
|  | **[EMV_ADK_INF_TRANS_1GENAC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1genac)** <br>offline transaction processing: 1st Genac  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_CARD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-card)** <br>offline transaction processing: Verify Cardholder  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_ABANDON](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-abandon)** <br>offline transaction processing: Verify Abandon  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_OTHER](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-other)** <br>offline transaction processing: Verify Other  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_ONLINE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-online)** <br>offline transaction processing: Verify Online  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_NOK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-nok)** <br>offline transaction processing: Verify NOT OK  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-ok)** <br>offline transaction processing: Verify OK  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_SIGNATURE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-signature)** <br>offline transaction processing: Verify Signature  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_TC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-tc)** <br>offline transaction processing: 1st Cryptography TC  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-arqc-cda)** <br>offline transaction processing: 1st Cryptography ARQC CDA  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-arqc-other)** <br>offline transaction processing: 1st Cryptography ARQC Other  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_AAC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-aac)** <br>offline transaction processing: 1st Cryptography AAC  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_AAR](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-aar)** <br>offline transaction processing: 1st Cryptography AAC  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-unknown)** <br>offline transaction processing: 1st Cryptography Unknown  |
|  | **[EMV_ADK_INF_ONL_CHECK_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-check-ok)** <br>Processing the host response: Check OK.  |
|  | **[EMV_ADK_INF_ONL_FALSE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-false)** <br>Processing the host response: False.  |
|  | **[EMV_ADK_INF_ONL_TRUE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-true)** <br>Processing the host response: True.  |
|  | **[EMV_ADK_INF_ONL_PIN](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-pin)** <br>Processing the host response: PIN.  |
|  | **[EMV_ADK_INF_ONL_HOST_AUTH](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-host-auth)** <br>Processing the host response: Host Authorization.  |
|  | **[EMV_ADK_INF_ONL_CRIT_SC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-crit-sc)** <br>Processing the host response: Cirtical Script.  |
|  | **[EMV_ADK_INF_ONL_AC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-ac)** <br>Processing the host response: AC.  |
|  | **[EMV_ADK_INF_ONL_2GENAC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-2genac)** <br>Processing the host response: 2nd Generate AC.  |
|  | **[EMV_ADK_INF_ONL_UNCRIT_SC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-uncrit-sc)** <br>Processing the host response: Uncritical Script.  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_PARAM](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-param)** <br>Processing the host response: Verify Parameter.  |
|  | **[EMV_ADK_INF_FETCH_TXN_TAG_DATA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-fetch-txn-tag-data)** <br>Function `EMV_CT_fetchTxnTags`.  |
|  | **[EMV_ADK_STEP_01](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-01)** <br>sub step 1  |
|  | **[EMV_ADK_STEP_02](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-02)** <br>sub step 2  |
|  | **[EMV_ADK_STEP_03](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-03)** <br>sub step 3  |
|  | **[EMV_ADK_STEP_04](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-04)** <br>sub step 4  |
|  | **[EMV_ADK_STEP_05](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-05)** <br>sub step 5  |
|  | **[EMV_ADK_STEP_06](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-06)** <br>sub step 6  |
|  | **[EMV_ADK_STEP_07](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-07)** <br>sub step 7  |
|  | **[EMV_ADK_STEP_08](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-08)** <br>sub step 8  |
|  | **[EMV_ADK_STEP_09](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-09)** <br>sub step 9  |
|  | **[EMV_ADK_STEP_10](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-10)** <br>sub step 10  |
|  | **[EMV_ADK_STEP_11](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-11)** <br>sub step 11  |
|  | **[EMV_ADK_STEP_12](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-12)** <br>sub step 12  |
|  | **[EMV_ADK_STEP_13](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-13)** <br>sub step 13  |
|  | **[EMV_ADK_STEP_14](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-14)** <br>sub step 14  |
|  | **[EMV_ADK_STEP_15](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-15)** <br>sub step 15  |
|  | **[EMV_ADK_STEP_16](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-16)** <br>sub step 16  |
|  | **[EMV_ADK_STEP_17](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-17)** <br>sub step 17  |
|  | **[EMV_ADK_STEP_18](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-18)** <br>sub step 18  |
|  | **[EMV_ADK_STEP_19](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-19)** <br>sub step 19  |
|  | **[EMV_ADK_STEP_20](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-20)** <br>sub step 20  |
|  | **[EMV_ADK_STEP_21](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-21)** <br>sub step 21  |
|  | **[EMV_ADK_STEP_22](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-22)** <br>sub step 22  |
|  | **[EMV_ADK_STEP_23](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-23)** <br>sub step 23  |
|  | **[EMV_ADK_STEP_24](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-24)** <br>sub step 24  |
|  | **[EMV_ADK_STEP_25](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-25)** <br>sub step 25  |
|  | **[EMV_ADK_STEP_26](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-26)** <br>sub step 26  |
|  | **[EMV_ADK_STEP_27](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-27)** <br>sub step 27  |
|  | **[EMV_ADK_STEP_28](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-28)** <br>sub step 28  |
|  | **[EMV_ADK_STEP_29](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-29)** <br>sub step 29  |
|  | **[EMV_ADK_STEP_30](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-adk-step-30)** <br>sub step 30  |
|  | **[EMV_ADK_DF62_ERR_POS1_CHIP_RESET](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-chip-reset)** <br>reset (ATR) during technology selection  |
|  | **[EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-sel-list-aid)** <br>SELECT during build of candidate list using explicit mode.  |
|  | **[EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-sel-list-pse)** <br>SELECT during build of candidate list using PSE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-read-list-pse)** <br>READ RECORD during build of candidate list using PSE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_SEL_FINAL](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-sel-final)** <br>SELECT during final selection.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GPO](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-gpo)** <br>GET PROCESSING OPTIONS.  |
|  | **[EMV_ADK_DF62_ERR_POS1_READ](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-read)** <br>READ RECORD.  |
|  | **[EMV_ADK_DF62_ERR_POS1_INT_AUTH](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-int-auth)** <br>INTERNAL AUTHENTICATE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GETDATA_PTC](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-getdata-ptc)** <br>GET DATA for PIN try counter.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GETCHALLENGE](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-getchallenge)** <br>GET CHALLENGE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-verify-enc-pin)** <br>VERIFY for enciphered PIN.  |
|  | **[EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-verify-plain-pin)** <br>VERIFY for plaintext PIN.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GETDATA_ATC](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-getdata-atc)** <br>GET DATA for ATC.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-getdata-loatc)** <br>GET DATA for LOATC.  |
|  | **[EMV_ADK_DF62_ERR_POS1_GENAC_1](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-genac-1)** <br>1st GENERATE AC without CDA  |
|  | **[EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-genac-1-cda)** <br>1st GENERATE AC with CDA  |
|  | **[EMV_ADK_DF62_ERR_POS1_EXTAUTH](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-extauth)** <br>EXTERNAL AUTHENTICATE.  |
|  | **[EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-crit-script)** <br>critical script command  |
|  | **[EMV_ADK_DF62_ERR_POS1_GENAC_2](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-genac-2)** <br>2nd GENERATE AC without CDA  |
|  | **[EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-genac-2-cda)** <br>2nd GENERATE AC with CDA  |
|  | **[EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT](group___d_e_f___d_f62___p_o_s1.md#define-emv-adk-df62-err-pos1-non-crit-script)** <br>non critical script command  |
|  | **[EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER](group___d_e_f___d_f62___p_o_s2.md#define-emv-adk-df62-err-pos2-transport-layer)** <br>error in transport layer (T=0, T=1)  |
|  | **[EMV_ADK_DF62_ERR_POS2_BASE_ERROR](group___d_e_f___d_f62___p_o_s2.md#define-emv-adk-df62-err-pos2-base-error)** <br>base error (wrong length of R-APDU)  |
|  | **[EMV_ADK_DF62_ERR_POS2_RAPDU](group___d_e_f___d_f62___p_o_s2.md#define-emv-adk-df62-err-pos2-rapdu)** <br>R-APDU data with wrong content.  |
|  | **[EMV_ADK_DF62_ERR_POS3_CHIPCARD](group___d_e_f___d_f62___p_o_s3.md#define-emv-adk-df62-err-pos3-chipcard)** <br>chipcard :-)  |
|  | **[EMV_ADK_DF62_ERR_POS3_TERMINAL](group___d_e_f___d_f62___p_o_s3.md#define-emv-adk-df62-err-pos3-terminal)** <br>terminal  |
|  | **[EMV_ADK_DF62_ERR_POS3_ACQUIRER](group___d_e_f___d_f62___p_o_s3.md#define-emv-adk-df62-err-pos3-acquirer)** <br>Authorization system.  |
|  | **[EMV_ADK_DF62_ERR_POS3_CARDHOLDER](group___d_e_f___d_f62___p_o_s3.md#define-emv-adk-df62-err-pos3-cardholder)** <br>cardholder  |
|  | **[EMV_ADK_DF62_ERR_POS7_ABORT](group___d_e_f___d_f62___p_o_s7.md#define-emv-adk-df62-err-pos7-abort)** <br>abort of transaction or end of transaction without TC  |
|  | **[EMV_ADK_DF62_ERR_POS7_MAG_FALLBACK](group___d_e_f___d_f62___p_o_s7.md#define-emv-adk-df62-err-pos7-mag-fallback)** <br>magstripe fallback transaction  |
|  | **[EMV_CT_INPUT_TRM_TYPE](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-type)** <br>B1b1: [EMV_CT_TERMDATA_STRUCT::TermTyp](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp).  |
|  | **[EMV_CT_INPUT_TRM_CURRENCY](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-currency)** <br>B1b2: [EMV_CT_TERMDATA_STRUCT::CurrencyTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans).  |
|  | **[EMV_CT_INPUT_TRM_EXP_CURRENCY](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-exp-currency)** <br>B1b3: [EMV_CT_TERMDATA_STRUCT::ExpTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans).  |
|  | **[EMV_CT_INPUT_TRM_COUNTRY_CODE](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-country-code)** <br>B1b4: [EMV_CT_TERMDATA_STRUCT::TermCountryCode](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcountrycode).  |
|  | **[EMV_CT_INPUT_TRM_CAPABILITIES](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-capabilities)** <br>B1b5: [EMV_CT_TERMDATA_STRUCT::TermCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcap).  |
|  | **[EMV_CT_INPUT_TRM_ADD_CAPS](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-add-caps)** <br>B1b6: [EMV_CT_TERMDATA_STRUCT::TermAddCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termaddcap).  |
|  | **[EMV_CT_INPUT_TRM_ID](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-id)** <br>B1b7: [EMV_CT_TERMDATA_STRUCT::TermIdent](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termident).  |
|  | **[EMV_CT_INPUT_TRM_LANGUAGES](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-languages)** <br>B2b1: [EMV_CT_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang).  |
|  | **[EMV_CT_INPUT_TRM_IFD_SERIAL](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-ifd-serial)** <br>B2b2: [EMV_CT_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber).  |
|  | **[EMV_CT_INPUT_TRM_KERNEL_VERSION](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-kernel-version)** <br>B2b3: [EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion).  |
|  | **[EMV_CT_INPUT_TRM_FRAMEWORK_VERSION](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-framework-version)** <br>B2b4: [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion).  |
|  | **[EMV_CT_INPUT_TRM_L1DRIVER_VERSION](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-emv-ct-input-trm-l1driver-version)** <br>B2b5: [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion).  |
|  | **[EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE](group___t_a_c___i_a_c___d_e_n_i_a_l.md#define-emv-ct-process-taciac-default-before)** <br>process default action codes prior to 1st GENERATE AC  |
|  | **[EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER](group___t_a_c___i_a_c___d_e_n_i_a_l.md#define-emv-ct-process-taciac-default-after)** <br>process default action codes after 1st GENERATE AC  |
|  | **[EMV_CT_CHECKSUM_DEFAULT](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-default)** <br>0x00 means: default    --> when initialized with 0x00 0x00 0x00 then all params set as default mentioned in comment.    For changing the default the corresponding Bit must be set:    e.g. for Transaction Log disabling, the corresponding Bit must be activated = 1  |
|  | **[EMV_CT_CHECKSUM_INCLUDE_VERSION](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-include-version)** <br>B1b1, default: NO --> For checksum only.  |
|  | **[EMV_CT_CHECKSUM_TRANSACTION_LOG](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-transaction-log)** <br>B1b2, default: YES --> De/activated per application.  |
|  | **[EMV_CT_CHECKSUM_EXCEPTION_FILE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-exception-file)** <br>B1b3, default: YES --> De/activated per application.  |
|  | **[EMV_CT_CHECKSUM_FORCE_ONLINE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-force-online)** <br>B1b4, default: YES --> De/activated per application and by merchant.  |
|  | **[EMV_CT_CHECKSUM_FORCE_ACCEPTANCE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-force-acceptance)** <br>B1b5, default: YES --> De/activated per application and by merchant.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-onl-data-capture)** <br>B1b6, default: NO --> For checksum only --> application related decision.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_PSE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-pse)** <br>B1b7, default: YES --> De/activated per transaction (EMV_Select)  |
|  | **[EMV_CT_CHECKSUM_ACCOUNT_TYPE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-account-type)** <br>B1b8, default: YES --> De/activated per application.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_ADVICES](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-advices)** <br>B2b1, default: NO --> Support of advices on host prot.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-cardholder-conf)** <br>B2b2, default: YES --> Cardholder Confirmation.  |
|  | **[EMV_CT_CHECKSUM_PIN_BYPASS](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-pin-bypass)** <br>B2b3, default: NO --> PIN bypass.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-default-tdol)** <br>B2b4, default: YES --> Default TDOL.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-batch-data-capture)** <br>B2b5, default: YES --> Batch data capture.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-voice-ref-iss)** <br>B2b6, default: YES --> Issuer initiated referrals.  |
|  | **[EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-support-voice-ref-card)** <br>B2b7, default: NO --> Card initiated referrals.  |
|  | **[EMV_CT_CHECKSUM_MULTILANG_SUPPORT](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-multilang-support)** <br>B2b7, default: YES since L2 7.0.2.  |
|  | **[EMV_CT_CHECKSUM_PIN_BYPASS_ONCE](group___c_h_k_s_u_m___d_e_f_s.md#define-emv-ct-checksum-pin-bypass-once)** <br>B3b1, default: NO --> No subsequent PIN bypass when PIN bypass is active.  |
|  | **[EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS](group___t_a_g_s___n_o_n___e_m_v_c_o.md#define-emv-ct-max-no-of-non-emvco-tags)** <br>Max. number of non-EMVCo-tags included in additional tags ([EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm) and [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd))  |
|  | **[EMV_CT_MAX_TAGLIST_SIZE](_e_m_v___c_t___interface_8h.md#define-emv-ct-max-taglist-size)** <br>Maximum number of tags used in [EMV_CT_TAGLIST_STRUCT](struct_e_m_v___c_t___t_a_g_l_i_s_t___s_t_r_u_c_t.md).  |
|  | **[EMV_CT_MAX_APP_VERS](_e_m_v___c_t___interface_8h.md#define-emv-ct-max-app-vers)**  |
|  | **[EMV_CT_INPUT_APL_VERSION](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-version)** <br>B1b1: [EMV_CT_APPLIDATA_STRUCT::VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum), application version number.  |
|  | **[EMV_CT_INPUT_APL_NAME](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-name)** <br>B1b2: [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname), application name.  |
|  | **[EMV_CT_INPUT_APL_ASI](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-asi)** <br>B1b3: [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi), ASI.  |
|  | **[EMV_CT_INPUT_APL_MERCHANT_CATCODE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-merchant-catcode)** <br>B1b4: [EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey), merchant category code.  |
|  | **[EMV_CT_INPUT_APL_TID](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tid)** <br>B1b5: [EMV_CT_APPLIDATA_STRUCT::TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident), terminal ID.  |
|  | **[EMV_CT_INPUT_APL_FLOOR_LIMIT](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-floor-limit)** <br>B1b6: [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit), floor limt.  |
|  | **[EMV_CT_INPUT_APL_THRESH](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-thresh)** <br>B1b7: [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold), threshhold value.  |
|  | **[EMV_CT_INPUT_APL_TARGET](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-target)** <br>B1b8: [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage), target percentage.  |
|  | **[EMV_CT_INPUT_APL_MAXTARGET](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-maxtarget)** <br>B2b1: [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage), maximum target percentage.  |
|  | **[EMV_CT_INPUT_APL_TAC_DENIAL](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tac-denial)** <br>B2b2: [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial), TAC Denial.  |
|  | **[EMV_CT_INPUT_APL_TAC_ONLINE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tac-online)** <br>B2b3: [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline), TAC Online.  |
|  | **[EMV_CT_INPUT_APL_TAC_DEFAULT](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tac-default)** <br>B2b4: [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault), TAC Default.  |
|  | **[EMV_CT_INPUT_APL_TDOL](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tdol)** <br>B2b5: [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol), Default TDOL.  |
|  | **[EMV_CT_INPUT_APL_DDOL](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-ddol)** <br>B2b6: [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol), Default DDOL.  |
|  | **[EMV_CT_INPUT_APL_MERCHANT_IDENT](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-merchant-ident)** <br>B2b7: [EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident), merchant identification.  |
|  | **[EMV_CT_INPUT_APL_ADD_TAGS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-tags)** <br>B2b8: [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm), additional terminal tags.  |
|  | **[EMV_CT_INPUT_APL_MAND_TAGS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-mand-tags)** <br>B3b1: [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd), mandatory tags.  |
|  | **[EMV_CT_INPUT_APL_TERM_CAPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-term-caps)** <br>B3b2: [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap), terminal capabilities for app.  |
|  | **[EMV_CT_INPUT_APL_FLOW_CAPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-flow-caps)** <br>B3b3: [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap), flow capabilities.  |
|  | **[EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-aip-cvm-notsupp)** <br>B3b4: [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported), CVM in AIP disabled.  |
|  | **[EMV_CT_INPUT_APL_COUNTRY_CODE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-country-code)** <br>B3b5: [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm), country code.  |
|  | **[EMV_CT_INPUT_APL_ADD_TERM_CAPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-term-caps)** <br>B3b6: [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap), addtional terminal capabilties for tapp.  |
|  | **[EMV_CT_INPUT_APL_PRIO_APPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-prio-apps)** <br>B3b7: [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio), priority application.  |
|  | **[EMV_CT_INPUT_APL_MID](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-mid)** <br>B3b8: [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids), MID relation.  |
|  | **[EMV_CT_INPUT_APL_EMV_APPKIND](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-emv-appkind)** <br>B4b1: [EMV_CT_APPLIDATA_STRUCT::EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application), EMV Application Type.  |
|  | **[EMV_CT_INPUT_APL_SPECIAL_TXN](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-special-txn)** <br>B4b2: [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx), configuration of special transactions.  |
|  | **[EMV_CT_INPUT_APL_FALLBACK](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-fallback)** <br>B4b3: [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling), fallback handling for this app.  |
|  | **[EMV_CT_INPUT_APL_CDA](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-cda)** <br>B4b4: [EMV_CT_APPLIDATA_STRUCT::CDAProcessing](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-cdaprocessing), CDA mode.  |
|  | **[EMV_CT_INPUT_APL_AC_BEFOREAFTER](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-ac-beforeafter)** <br>B4b5: [EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-acbeforeafter), TAC processing for offline only.  |
|  | **[EMV_CT_INPUT_APL_POS_ENTRY](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-pos-entry)** <br>B4b6: [EMV_CT_APPLIDATA_STRUCT::POS_EntryMode](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-pos-entrymode), POS entry mode.  |
|  | **[EMV_CT_INPUT_APL_TRM_TYPE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-trm-type)** <br>B4b7: [EMV_CT_APPLIDATA_STRUCT::App_TermTyp](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termtyp), terminal type.  |
|  | **[EMV_CT_INPUT_APL_CUSTOMER_CVM](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-customer-cvm)** <br>B4b8: [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm), customer CVM.  |
|  | **[EMV_CT_INPUT_APL_CHECKSUM_PARAMS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-checksum-params)** <br>B5b1: [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params), checksum parmeters.  |
|  | **[EMV_CT_INPUT_APL_CHECKSUM](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-checksum)** <br>B5b2: [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco), EMVCo checksum for this app.  |
|  | **[EMV_CT_INPUT_APL_MASTER_AID](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-master-aid)** <br>B5b3: [EMV_CT_APPLIDATA_STRUCT::MasterAID](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-masteraid), Master AID for groups.  |
|  | **[EMV_CT_INPUT_APL_ADD_CRD_TAGS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-crd-tags)** <br>B5b4: [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd), additional tags available on the ICC.  |
|  | **[EMV_CT_INPUT_APL_ADD_VERSIONS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-versions)** <br>B5b5: [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no), additional version number of AID (optional)  |
|  | **[EMV_CT_INPUT_APL_SEC_LIMIT](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-sec-limit)** <br>B5b6: [EMV_CT_APPLIDATA_STRUCT::Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit), limit below which other terminal capabilties apply (optional)  |
|  | **[EMV_CT_INPUT_APL_SEC_CAPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-sec-caps)** <br>B5b7: [EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit), terminal capabilties below the security limit (optional)  |
|  | **[EMV_CT_INPUT_APL_TXN_TYPES_SALE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-sale)** <br>B6b1: [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale) additional transaction types handled as sale (optional)  |
|  | **[EMV_CT_INPUT_APL_TXN_TYPES_CASH](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-cash)** <br>B6b2: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash) additional transaction types handled as cash (optional)  |
|  | **[EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-cashback)** <br>B6b3: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback) additional transaction types handled as cashack (optional)  |
|  | **[EMV_CT_INPUT_APL_TXN_TYPES_REFUND](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-refund)** <br>B6b4: [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund) additional transaction types handled as refund (optional)  |
|  | **[EMV_CT_INPUT_APL_DCR_LIST_IDS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-dcr-list-ids)** <br>B6b5: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids) Data Container Read List for DPAS-2 Data Storage: list of container IDs.  |
|  | **[EMV_CT_INPUT_APL_DCR_LIST_RANGES](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-dcr-list-ranges)** <br>B6b6: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges) Data Container Read List for DPAS-2 Data Storage: list of container ID ranges.  |
|  | **[CVM_CONTINUE](group___c_v_m___n_o_t___s_u_p_p.md#define-cvm-continue)** <br>continue transaction  |
|  | **[CVM_DEFAULT_SIGN](group___c_v_m___n_o_t___s_u_p_p.md#define-cvm-default-sign)** <br>execute CVM signature  |
|  | **[CVM_DEFAULT_ONLINE_PIN](group___c_v_m___n_o_t___s_u_p_p.md#define-cvm-default-online-pin)** <br>execute CVM online PIN  |
|  | **[CVM_ABORT](group___c_v_m___n_o_t___s_u_p_p.md#define-cvm-abort)** <br>abort transaction (only for `AIP_CVM_not_supported`)  |
|  | **[FORCE_RISK_MANAGEMENT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-force-risk-management)** <br>B1b1: Perform Terminal Risk Management regardless of Application Interchange Profile bit "Terminal risk management is to be performed". **Important Note** Enable this flag because it is required according EMVCo Book 3, chapter 10.6 Terminal Risk Management.  |
|  | **[BLACKLIST](group___a_p_p___f_l_o_w___c_a_p_s.md#define-blacklist)** <br>B1b2: Enables blacklist/transaction log callback (aka exception list, hot list), [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist)) will be invoked    Depends on [EMV_CT_TRXOP_HOTLST_LOG_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-hotlst-log-callback) and [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[TRANSACTION_LOG](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-log)** <br>B1b3: Enables blacklist/transaction log callback for avoiding spit payments according EMVCo Book 3, chapter 10.6.1 Floor Limits. [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist)) will be invoked    Depends on [EMV_CT_TRXOP_HOTLST_LOG_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-hotlst-log-callback) and [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[PIN_BYPASS](group___a_p_p___f_l_o_w___c_a_p_s.md#define-pin-bypass)** <br>B1b4: PIN bypass supported.  |
|  | **[FORCE_ONLINE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-force-online)** <br>B1b5: Feature "Force online" supported (suspicious customer). This relates to Terminal Verification Result B4b4 "Merchant forced transaction online". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[FORCE_ACCEPTANCE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-force-acceptance)** <br>B1b6: Feature "Force acceptance" supported (accept on merchant's risk). **Use with care**: This overrules the card's or terminal or authorisation host decision. Note: Force Acceptance is performed if both flags are set, the support flag here and the transaction flow option [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance).  |
|  | **[CASH_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-cash-support)** <br>B2b1: Support of cash transactions.  |
|  | **[CASHBACK_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-cashback-support)** <br>B2b2: Support of cashback transactions.  |
|  | **[EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan)** <br>B2b3: Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC.    Mandated for MasterCard and Amex.    Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan) and [TAG_5F24_APP_EXP_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f24-app-exp-date).    See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-fallback-on-incons-track2).  |
|  | **[EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin)** <br>B2b4: Confirm amount and enter PIN in one display.    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-amount-conf).    May be deactivated by [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[EMV_CT_DOMESTIC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-domestic-check)** <br>B2b5: Callback function [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)) will be called.    Needs to be activated per transaction by [EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-local-chck-callback).    May be deactivated by [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[TRANSACTION_TYPE_17_FOR_CASH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-type-17-for-cash)** <br>B2b6: Transaction type 17 for MasterCard cash transactions.  |
|  | **[EMV_CT_CHECK_INCONS_TRACK2_NO_EXP](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-no-exp)** <br>B2b7: Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC.    Mandated for MasterCard and Amex.    Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan)   Only effective if [EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan) is deactivated. See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-fallback-on-incons-track2).  |
|  | **[TRANSACTION_TYPE_30_FOR_PREAUTH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-type-30-for-preauth)** <br>B2b8: Amex Pre-Authorization with transaction type 30.  |
|  | **[REFERRAL_AFTER_TRX](group___a_p_p___f_l_o_w___c_a_p_s.md#define-referral-after-trx)** <br>B3b1: In case voice referral is required: Chip transaction is terminated with AAC. Referral transaction is performed subsequently as "CardNotPresent" (German handling).  |
|  | **[DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check)** <br>B3b2: Enable DCC (Dynamic currency conversion).    Invocation depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks), [EMV_CT_TRXOP_DCC_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-dcc-callback), and [EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-dcc-callback-always).  |
|  | **[REFUND_CONFIRM_AMOUNT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-confirm-amount)** <br>B3b3: Confirm amount during refund transaction    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-amount-conf) and [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[EMV_CT_USE_CFG_APPL_NAME](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-use-cfg-appl-name)** <br>B3b4: **Use with care**: Do not use card's application name (EMVCo rule: 9F12 prior to 50) but always the default label. Effective for cardholder's application selection.  |
|  | **[EMV_CT_FALLBACK_ON_INCONS_TRACK2](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-fallback-on-incons-track2)** <br>B3b5: Valid only in case of activated [EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan).    If activated: Check will be done before Cardholder Verification. In case of fail EMV ADK will process fallback handling (may result in [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback)). E.g. required for German dcpos 2.4, may be used for "M/Chip Functional Architecture", AMEX ED-031 in test plan ver. 4.2.    If not activated: Check will be done just before processing 1st cryptogram. If fail: GENAC1 will be requested with AAC. E.g. required for MasterCard REQ22, AMEX ED-031 in Swedish AMEX test plan 1.0.  |
|  | **[EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-amount-confirm-on-signature)** <br>B3b6: Customer amount confirmation in case of CVM signature    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-amount-conf) and [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[EMV_CT_SDA_SELECTED_TVR_ON](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-sda-selected-tvr-on)** <br>B3b7: Activate the support of the TVR byte SDA selected, introduced in Nov 2013 for kernels not yet supporting this feature, configurable per AID (for kernels supporting this it'll be always activated, config is don't care)  |
|  | **[EMV_CASHBACK_OFFLINE_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-cashback-offline-support)** <br>B3b8: If set cash back transactions are not automatically forced online. **Use with care**: Usual business rules require online processing.  |
|  | **[REFUND_PROCESSING_RESTRICTIONS](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-processing-restrictions)** <br>B4b1: Perform Processing restrictions for Refund transactions (French Refund Requirements).  |
|  | **[REFUND_NO_GENERATE_AC](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-no-generate-ac)** <br>B4b2: Do not perform Generate AC when finishing Refund transactions (French Refund Requirements).  |
|  | **[REFUND_FLOW_INTERAC](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-flow-interac)** <br>B4b3: Perform full EMV transaction although transaction type is refund. **Use with care**: Is is recommended by EMVCo to abort the transaction once the account data has been read. Activation of the "full" flow requires that all cards and background systems support it.  |
|  | **[REFUND_NO_ZERO_AMOUNT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-no-zero-amount)** <br>B4b4: Do NOT set the amount to zero in CDOL1 for Refund transactions with Generate AC. **Use with care**: Card read transactions are just for getting the account data and it is best practice to "close" the card session by requesting an ARQC with zero amount.  |
|  | **[DPAS_DATA_STORAGE_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dpas-data-storage-support)** <br>B4b5: Support of Data Storage for D-PAS Connect. Useful only for Discover AIDs.  |
|  | **[DPAS_EXTENDED_LOGGING_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dpas-extended-logging-support)** <br>B4b6: Support of Extended Logging for D-PAS Connect. Useful only for Discover AIDs.  |
|  | **[DPAS_CDCVM_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dpas-cdcvm-support)** <br>B4b7: Support of Consumer Device CVM for D-PAS Connect. Useful only for Discover AIDs.  |
|  | **[APP_FLOW_VISA_QUASI_CASH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-app-flow-visa-quasi-cash)** <br>B4b8: Convert transaction type from '01' to '11' indicating VISA Quasi Cash. Use in conjunction with [EMV_CT_APPLIDATA_TYPE.TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash) if AUC checks shall be applied, that is both values '01' and '11' should be set.  |
|  | **[APP_FLOW_CASHBACK_TRANS_TYPE_00](group___a_p_p___f_l_o_w___c_a_p_s.md#define-app-flow-cashback-trans-type-00)** <br>B5b1: For cashback transaction (amount other != 0) use transaction type '00' as required by Visa.  |
|  | **[REFUND_FLOW_ARQC](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-flow-arqc)** <br>B5b2: Like standard refund flow but request ARQC at first Generate AC (Discover requirement)  |
|  | **[CDA_EMV_MODE_1](group___c_d_a___m_o_d_e_s.md#define-cda-emv-mode-1)** <br>EMVCo CDA mode 1: do CDA for ARQC: yes, for TC after successful online communication: yes.  |
|  | **[CDA_EMV_MODE_2](group___c_d_a___m_o_d_e_s.md#define-cda-emv-mode-2)** <br>EMVCo CDA mode 2: do CDA for ARQC: yes, for TC after successful online communication: no.  |
|  | **[CDA_EMV_MODE_3](group___c_d_a___m_o_d_e_s.md#define-cda-emv-mode-3)** <br>EMVCo CDA mode 3: do CDA for ARQC: no, for TC after successful online communication: no.  |
|  | **[CDA_EMV_MODE_4](group___c_d_a___m_o_d_e_s.md#define-cda-emv-mode-4)** <br>EMVCo CDA mode 4: do CDA for ARQC: no, for TC after successful online communication: yes.  |
|  | **[FB_DEFAULT_EMVCO](group___f_b___f_i_n_a_l___s_e_l.md#define-fb-default-emvco)** <br>Fallback handling like described by EMVCo.  |
|  | **[FB_GERMAN_POS_SPEC](group___f_b___f_i_n_a_l___s_e_l.md#define-fb-german-pos-spec)** <br>Fallback handling according to German spec. Additional specification is done by [EMV_ADK_FALLBACK_AFTER_CVM_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-fallback-after-cvm-no) and [EMV_ADK_FALLBACK_AFTER_CVM_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-fallback-after-cvm-yes).  |
|  | **[FB_NO_UNATTENDED_FALLB](group___f_b___f_i_n_a_l___s_e_l.md#define-fb-no-unattended-fallb)** <br>Unattended terminal: Fallback forbidden.  |
|  | **[FB_NEVER](group___f_b___o_p_t_i_o_n_s.md#define-fb-never)** <br>fallback to magstripe forbidden  |
|  | **[FB_CHIP_APP](group___f_b___o_p_t_i_o_n_s.md#define-fb-chip-app)** <br>fallback allowed, but not in case of  |
|  | **[FB_APP](group___f_b___o_p_t_i_o_n_s.md#define-fb-app)** <br>fallback allowed, but not in case a chip application assigned to this magstripe application is blocked  |
|  | **[FB_CHIP](group___f_b___o_p_t_i_o_n_s.md#define-fb-chip)** <br>fallback allowed but not in case of blocked chip  |
|  | **[FB_ALWAYS](group___f_b___o_p_t_i_o_n_s.md#define-fb-always)** <br>fallback allowed in every case  |
|  | **[FB_OPT_CASHBACK](group___f_b___m_s_r___o_p_t_i_o_n_s.md#define-fb-opt-cashback)** <br>fallback magstripe application supports payment with cash back  |
|  | **[INPUT_SEL_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-amount)** <br>B1b1: `txn` amount, [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount).  |
|  | **[INPUT_SEL_AMOUNT_CURRENCY](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-amount-currency)** <br>B1b2: `currency` of txn, [EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans).  |
|  | **[INPUT_SEL_CUREXPONENT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-curexponent)** <br>B1b3: `currency` exponent of txn, [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans).  |
|  | **[INPUT_SEL_DATE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-date)** <br>B1b4: `date` of txn, [EMV_CT_PAYMENT_STRUCT::Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date).  |
|  | **[INPUT_SEL_TIME](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-time)** <br>B1b5: `time` of txn, [EMV_CT_PAYMENT_STRUCT::Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time).  |
|  | **[INPUT_SEL_TTYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-ttype)** <br>B1b6: `transaction` type of txn, [EMV_CT_SELECT_STRUCT::TransType](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-transtype).  |
|  | **[INPUT_SEL_EXCLUDE_AID](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-exclude-aid)** <br>B1b7: `AIDs` to exclude for this transaction, [EMV_CT_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids).  |
|  | **[INPUT_SEL_BUILDLIST](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-buildlist)** <br>B1b8: `build` the candidate list or not, [EMV_CT_SELECT_STRUCT::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist).  |
|  | **[INPUT_SEL_FORCE_ONLINE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-force-online)** <br>B2b1: `force` it online (suspicious, EMVCo), [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[INPUT_SEL_FORCE_ACCEPT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-force-accept)** <br>B2b2: `force` acceptance, [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance).  |
|  | **[INPUT_SEL_NO_PSE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-no-pse)** <br>B2b3: `no` PSE, [EMV_CT_APPS_SELECT_STRUCT::No_DirectorySelect](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-no-directoryselect).  |
|  | **[INPUT_SEL_CARDCONF](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-cardconf)** <br>B2b4: `cardholder` confirmation, [EMV_CT_APPS_SELECT_STRUCT::ucCardholderConfirmation](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-uccardholderconfirmation).  |
|  | **[INPUT_SEL_ONLINE_SWITCH](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-online-switch)** <br>B2b5: `force` it online (domestic need), [EMV_CT_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch).  |
|  | **[INPUT_SEL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-txn-options)** <br>B2b6: `transaction` options, [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_SEL_DOMCHIP](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-domchip)** <br>B2b7: `domestic` chip apps included, [EMV_CT_APPS_SELECT_STRUCT::countDomesticChip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countdomesticchip) and [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md):: xDomestic_Chip.  |
|  | **[INPUT_SEL_FALLBACK_MSR](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-fallback-msr)** <br>B2b8: `fallback` msr apps included, [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md):: countFallbackMS and [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms).  |
|  | **[INPUT_SEL_TXN_COUNTER](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-txn-counter)** <br>B3b1: `transaction` counter, [EMV_CT_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount).  |
|  | **[INPUT_SEL_TXN_STEPS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-txn-steps)** <br>B3b2: `transaction` steps if interrupt needed instead of 1 step processing, [EMV_CT_SELECT_STRUCT::TxnSteps](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnsteps).  |
|  | **[INPUT_SEL_CB_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-cb-amount)** <br>B3b3: `cashback` amount, [EMV_CT_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount).  |
|  | **[INPUT_SEL_ACCOUNT_TYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-account-type)** <br>B3b4: `account` type, [EMV_CT_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype).  |
|  | **[INPUT_SEL_LANGUAGE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-language)** <br>B3b5: `language` preselected, [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language).  |
|  | **[INPUT_SEL_AMOUNT_CONF](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-amount-conf)** <br>B3b6: `amount` confirmation, [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation).  |
|  | **[INPUT_SEL_ADD_TAGS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-add-tags)** <br>B3b7:  |
|  | **[INPUT_SEL_MOD_CANDLIST](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-mod-candlist)** <br>B3b8: `modified` candidate list (only valid in reentrance mode using the candidate list manipulation option [RETURN_CAND_LIST_PREPROC](group___t_x_n___s_t_e_p_s.md#define-return-cand-list-preproc))  |
|  | **[CARD_CONF_YES](group___d_e_f___c_a_r_d___c_o_n_f.md#define-card-conf-yes)** <br>**default**   support of cardholder confirmation  |
|  | **[CARD_CONF_NO](group___d_e_f___c_a_r_d___c_o_n_f.md#define-card-conf-no)** <br>no cardholder confirmation, e.g. no cardholder display  |
|  | **[REUSE_LIST_REMOVE_AID](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-list-remove-aid)** <br>Reuse the existing list and remove the used AID, e.g. after card answered with Status Word 6985 at GPO.  |
|  | **[BUILD_NEW](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-build-new)** <br>Build a new candidate list (needs to be set on start of transaction)  |
|  | **[REUSE_EXISTING_LIST_SEL_0](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-0)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 1 of the candidate list.  |
|  | **[REUSE_EXISTING_LIST_SEL_1](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-1)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 2 of the candidate list.  |
|  | **[REUSE_EXISTING_LIST_SEL_2](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-2)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 3 of the candidate list.  |
|  | **[REUSE_EXISTING_LIST_SEL_3](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-3)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 4 of the candidate list.  |
|  | **[REUSE_EXISTING_LIST_SEL_4](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-4)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 5 of the candidate list.  |
|  | **[EMV_SELECTRES_PDOL_TAG_TRANSTYPE](_e_m_v___c_t___interface_8h.md#define-emv-selectres-pdol-tag-transtype)** <br>B1b6: Transaction Type is requested in PDOL.  |
|  | **[EMV_SELECTRES_PDOL_TAG_ACCOUNTTYPE](_e_m_v___c_t___interface_8h.md#define-emv-selectres-pdol-tag-accounttype)** <br>B1b7: Account Type is requested in PDOL.  |
|  | **[EMV_SELECTRES_PDOL_TAG_AMOUNT](_e_m_v___c_t___interface_8h.md#define-emv-selectres-pdol-tag-amount)** <br>B1b8: Amount is requested in PDOL.  |
|  | **[DF61_SEL_DF62_ERRORDATA](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-df62-errordata)** <br>B1b1: [EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata).  |
|  | **[DF61_SEL_AGREED_APPNAME](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-agreed-appname)** <br>B1b2: [EMV_CT_SELECTRES_STRUCT::AppName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-appname).  |
|  | **[DF61_SEL_50_APPLICATION_NAME](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-50-application-name)** <br>B1b3: [EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-50-applicationname).  |
|  | **[DF61_SEL_9F11_CODE_TABLE](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-9f11-code-table)** <br>B1b4: [EMV_CT_SELECTRES_STRUCT::T_9F11_CodeTable](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f11-codetable).  |
|  | **[DF61_SEL_5F2D_LANG_PREF](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-5f2d-lang-pref)** <br>B1b5: [EMV_CT_SELECTRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref).  |
|  | **[DF61_SEL_84_DF_NAME](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-84-df-name)** <br>B1b6: [EMV_CT_SELECTRES_STRUCT::T_84_DFName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname).  |
|  | **[DF61_SEL_9F12_PREF_NAME](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-9f12-pref-name)** <br>B1b7: [EMV_CT_SELECTRES_STRUCT::T_9F12_PreferredName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f12-preferredname).  |
|  | **[DF61_SEL_9F63_DISPTXT](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-9f63-disptxt)** <br>B1b8: [EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext).  |
|  | **[DF61_SEL_MID_DATA](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-mid-data)** <br>B2b1: MID data, [EMV_CT_SELECTRES_STRUCT::countFallbackMS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-countfallbackms), [EMV_CT_SELECTRES_STRUCT::xFallback_MS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-xfallback-ms).  |
|  | **[DF61_SEL_PDOL](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-pdol)** <br>B2b2: PDOL info, [EMV_CT_SELECTRES_STRUCT::PDOL_tags](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-pdol-tags).  |
|  | **[DF61_SEL_AID](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-aid)** <br>B2b3: selected AID, [EMV_CT_SELECTRES_STRUCT::T_DF04_Aidselected](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df04-aidselected).  |
|  | **[DF61_SEL_CANDIDATES](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-candidates)** <br>B2b4: candidate list, [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates).  |
|  | **[EMV_CT_SELOP_CBCK_APPLI_SEL](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-cbck-appli-sel)** <br>B1b1: Callback function for customer application selection [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand)) will be generated, if there are several application possible.    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks), [EMV_CT_APPS_SELECT_STRUCT::ucCardholderConfirmation](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-uccardholderconfirmation).  |
|  | **[EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-reserv-allow-b-on-a)** <br>B1b2: allow reservation type B even in case only type A is activated via configuration (see [Defines for special transaction configuration](group___s_p_e_c_i_a_l___t_r_x_s.md))  |
|  | **[EMV_CT_SELOP_CBCK_DOMESTIC_APPS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-cbck-domestic-apps)** <br>B1b3: Activate callback function for cross check if a domestic app remains in the candidate list or not ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps)))    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[EMV_CT_SELOP_ADDALL](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-addall)** <br>B1b4: Add all PSE applications to the candidate list (Cartes Bancaires - France)  |
|  | **[EMV_CT_SELOP_ADDBLO](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-addblo)** <br>B1b5: Add blocked LOA applications to the candidate list (Interac - Canada)  |
|  | **[EMV_CT_NO_LONGEST_AID_MATCH](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-no-longest-aid-match)** <br>B1b6: Do not perform the longest AID match (technical nonsense but needed for a few domestic certifications)  |
|  | **[EMV_CT_ALLOW_BLOCKED](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-allow-blocked)** <br>B1b7: Allow blocked application to be processed (in Bank controlled terminals to enable script processing to unblock blocked cards)  |
|  | **[EMV_CT_SELOP_REMOVEALL_BUT_EXCLUDED](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-removeall-but-excluded)** <br>B1b8: Remove all candidates from terminal list except those which are contained in excluded AID list. This allows transactions restricted to one, two or three AIDs without terminal reconfiguration.  |
|  | **[EMV_CT_TRXOP_PIN_BYPASS_NO_SUBSEQUENT](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-pin-bypass-no-subsequent)** <br>B2b1: If PIN bypass is supported it usually is for subsequent PIN entries, too. However some ICS (even if minor change) may announce no subsequent PIN Bypass, so you can configure here.  |
|  | **[EMV_CT_TRXOP_MULTIPLE_RANDOM_NUMBERS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-multiple-random-numbers)** <br>B2b2: Create a new value for 9F37, each time a random number is requested by the ICC. Per default one random number per transaction is generated. It is recommended to use multiple random numbers for security reasons.  |
|  | **[EMV_CT_TRXOP_DCC_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-dcc-callback)**  |
|  | **[EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-dcc-callback-always)** <br>B2b4: DCC callback function [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc)) will be called always.    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check).  |
|  | **[EMV_CT_TRXOP_NO_FALLBACK_AFTER_CVM](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-no-fallback-after-cvm)** <br>B2b5: Despite fallback after CVM allowed by application configuration stop transaction with card error. This is required in case of separate readers if mag. stripe has not been read prior to chip.  |
|  | **[EMV_CT_TRXOP_AMOUNT_CONF](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-amount-conf)** <br>B2b6: The callback for the amount confirmation [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf)) will be generated, e.g. to be deactivated if terminal is unattended.    Invoking this callback depends on [EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin), [REFUND_CONFIRM_AMOUNT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-confirm-amount), [EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-amount-confirm-on-signature), [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[EMV_CT_TRXOP_ENFORCE_PIN](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-enforce-pin)** <br>B2b7: Austrian (EPA) domestic feature: force PIN usage    In case no PIN entry was done during Cardholder Verification: EMV ADK will force online PIN entry, that is flag bit [EMV_ADK_SI_ONLINE_PIN_REQUIRED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-online-pin-required) in [EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo).  |
|  | **[EMV_CT_TRXOP_FALLBACK_GOODSERVICE](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-fallback-goodservice)** <br>B2b8: German domestic feature: Execute cash transaction with transaction type "Goods & Services" (in case application's background system does not support cash)  |
|  | **[EMV_CT_TRXOP_MERCHINFO_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-merchinfo-callback)** <br>B3b1: The callback for the intermediate merchant information will be generated ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt)[TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo))    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[EMV_CT_TRXOP_RND_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-rnd-callback)** <br>B3b2: Use own random number generator instead of OS one (not recommended but for debug purposes useful), only for velocity kernel, see [TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd).  |
|  | **[EMV_CT_TRXOP_HOTLST_LOG_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-hotlst-log-callback)** <br>B3b3: The callback for the transaction log / hotlist will be generated [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist))    Depends on the AID parameters [TRANSACTION_LOG](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-log) and [BLACKLIST](group___a_p_p___f_l_o_w___c_a_p_s.md#define-blacklist), and on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-local-chck-callback)** <br>B3b4: The callback for the domestic and local checks will be generated [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps))    Depends on the AID parameter [EMV_CT_DOMESTIC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-domestic-check) and on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[EMV_CT_TRXOP_CARDHINFO_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-cardhinfo-callback)** <br>B3b5: The callback for the intermediate cardholder information will be generated [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo))    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks).  |
|  | **[EMV_CT_TRXOP_EARLY_PIN_ENTRY](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-early-pin-entry)** <br>B3b6: Early PIN entry.    PIN entry is done (by application) in parallel to steps "Read application data" and "Offline data authentication".    Depends on [EMV_CT_TRXOP_DELAYED_EARLY_PIN](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-delayed-early-pin).    If set: Application starts PIN entry after GPO, in callback "merchant info - start read record" ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt)[TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo) with [eEMVMerReadAppData](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerreadappdata))  |
|  | **[EMV_CT_TRXOP_DELAYED_EARLY_PIN](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-delayed-early-pin)** <br>B3b7: Delayed early PIN entry.    PIN entry is done (by application) after callback "local checks" ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)).    Precondition: [EMV_CT_TRXOP_EARLY_PIN_ENTRY](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-early-pin-entry) is active.  |
|  | **[EMV_CT_TRXOP_KERNEL_PARSE_UNKNOWN_TLV](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-kernel-parse-unknown-tlv)** <br>B3b8: Let the kernel parse and store unknown TLV templates so that unknown tags can be retrieved by EMV_CT_fetchTxnTags. Precondition is that those tags are configured in the additional tag store (Additional_Tags_CRD)  |
|  | **[EMV_CT_SELOP_NO_UTF8](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-no-utf8)** <br>B4b1: Omit UTF-8 converted application labels in application selection callback [TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand).  |
|  | **[EMV_CT_TRXOP_NO_UTF8](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-no-utf8)** <br>B4b1: Omit UTF-8 converted application labels in amount confirmation and PIN input callback functions ([TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf), [TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin))  |
|  | **[EMV_CT_TRXOP_TIP_AMOUNT_ZERO](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-tip-amount-zero)** <br>B4b2: Card holder confirmed zero amount within tip amount input dialog. In case of TIP setting DF22 position 4 = 3 the transaction shall not be made suitable for a tip follow-up.  |
|  | **[EMV_CT_TRXOP_NO_CHECK_BB_PADDING](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-no-check-bb-padding)** <br>B4b3: Omit check for BB padding in card data authentication certificates - This check is obliged in some regions but not generally by EMVCo.  |
|  | **[EMV_CT_TRXOP_NO_CHECK_DDLEN](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-no-check-ddlen)** <br>B4b4: Omit check if dynamic data length in card data authentication certificates is too big.  |
|  | **[ONL_OPTS_LAST_PIN_TRY](group___t_x_n___o_p_t_i_o_n_s.md#define-onl-opts-last-pin-try)** <br>B5b1 : Host detected "last PIN try" for online PIN.  |
|  | **[EMV_CT_TRXOP_PERFORM_ISS_ACQ_CVM](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-perform-iss-acq-cvm)** <br>B5b2 : For Custom CVM processing. This flag is not used so far, but might be needed one day. For instance on Custom CVM a PIN input callback with PIN mode [EMV_CT_CVM_CUSTOM](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-cvm-custom) is sent under the same condition as a PIN input callback.  |
|  | **[EMV_CT_TRXOP_WRITE_DS_OFFLINE_TXN](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-write-ds-offline-txn)** <br>B5b4 : Write data storage data for offline transactions. Relevant only by Continue Online. When this option is set, EMV_CTLS_ContinueOnline will only write the DS data and will not perform the kernel online processing.  |
|  | **[EMV_CT_TRXOP_FORCE_TACIAC_DEFAULT](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-force-taciac-default)** <br>B5b5 : After Host Connection: Force TAC IAC Default processing even the host was reached, e.g. service provider host is available and returns valid AC but the issuer host was not reached for cryptogram verification.  |
|  | **[EMV_CT_SELOP_WEEK_PRIORITY_APPS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-week-priority-apps)** <br>B5b6 : Ignore priority applications that are not part of the terminal candidate list.  |
|  | **[EMV_CT_CUST_APPLI_SELECTION_PERFORMED](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-cust-appli-selection-performed)** <br>B5b7 : This is a possibility that allows the app to indicate that a customer application selection has been performed. If this is set, the callback / Reentrance for candidate selection will be even called if only one candidate is left. This is to inform the customer that the prior selected application was withdrawn from the candidate list after customer confirmation. In this special case a single candidate must not be selected automatically.  |
|  | **[EMV_CT_SELOP_DETECT_EMPTY_LIST](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-detect-empty-list)** <br>B5b8 : Without this bit in case of card error and in case of no common candidate [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback) is returned for backwards compatibility. If enabled, the second case results in return code [EMV_ADK_TXN_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-empty-list).  |
|  | **[RETURN_CANDIDATE_LIST](group___t_x_n___s_t_e_p_s.md#define-return-candidate-list)** <br>B1b1: return for selecting the candidate on application level.  |
|  | **[RETURN_AFTER_GPO](group___t_x_n___s_t_e_p_s.md#define-return-after-gpo)** <br>B1b2: return after finishing GPO.  |
|  | **[RETURN_AFTER_READ_RECORD](group___t_x_n___s_t_e_p_s.md#define-return-after-read-record)** <br>B1b3: return after finishing ReadRecords.  |
|  | **[RETURN_AFTER_DATA_AUTH](group___t_x_n___s_t_e_p_s.md#define-return-after-data-auth)** <br>B1b4: return after finishing Data Authentication.  |
|  | **[RETURN_FOR_CVM_PROCESS](group___t_x_n___s_t_e_p_s.md#define-return-for-cvm-process)** <br>B1b5: for each selected CV PIN method the control is given to the application to handle it.  |
|  | **[RETURN_FOR_CVM_FINISH](group___t_x_n___s_t_e_p_s.md#define-return-for-cvm-finish)** <br>B1b6: CV finished.  |
|  | **[RETURN_AFTER_RISK_MANGEMENT](group___t_x_n___s_t_e_p_s.md#define-return-after-risk-mangement)** <br>B1b8: return after finishing the terminal risk management (before 1st GAC)  |
|  | **[RETURN_CAND_LIST_PREPROC](group___t_x_n___s_t_e_p_s.md#define-return-cand-list-preproc)** <br>B2b1: return once the candidate list is known to manipulate the list.  |
|  | **[RETURN_CAND_LIST_SKIP](group___t_x_n___s_t_e_p_s.md#define-return-cand-list-skip)** <br>B2b2: Candidate list building by calling application.  |
|  | **[MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks)** <br>B3b8: If Set: All callbacks are disabled completely, otherwise they are used as configured in the parameter set.  |
|  | **[MS_ADD_TO_HOTLIST](group___t_x_n___s_t_e_p_s.md#define-ms-add-to-hotlist)** <br>B3b1: If Set: The card of this txn will be added to the hotlist (processed after ReadRecords)  |
|  | **[MS_DECLINE_AAC](group___t_x_n___s_t_e_p_s.md#define-ms-decline-aac)** <br>B3b2: If Set: The transaction will be declined with requesting an AAC.  |
|  | **[MS_ABORT_TXN](group___t_x_n___s_t_e_p_s.md#define-ms-abort-txn)** <br>B3b3: If Set: The transaction will be terminated immediately.  |
|  | **[MS_PIN_BYPASS](group___t_x_n___s_t_e_p_s.md#define-ms-pin-bypass)** <br>B3b4: If Set: Customer or Merchant bypassed PIN entry.  |
|  | **[MS_CUST_CVM_OK](group___t_x_n___s_t_e_p_s.md#define-ms-cust-cvm-ok)** <br>B3b5: If Set: Customer CVM method success.  |
|  | **[MS_PINPAD_NOTPRESENT](group___t_x_n___s_t_e_p_s.md#define-ms-pinpad-notpresent)** <br>B3b6: If Set: external PINPad was not detected for PIN processing.  |
|  | **[MS_PINICC_STOP](group___t_x_n___s_t_e_p_s.md#define-ms-pinicc-stop)** <br>B3b7: If Set: ICC stopped working during PIN processing.  |
|  | **[CONFIRM_AMOUNT_BEFORE_CVM](group___c_o_n_f_i_r_m___a_m_o_u_n_t___w_h_e_n.md#define-confirm-amount-before-cvm)** <br>**default**   immediately after language selection before CVM  |
|  | **[CONFIRM_AMOUNT_AFTER_CVM](group___c_o_n_f_i_r_m___a_m_o_u_n_t___w_h_e_n.md#define-confirm-amount-after-cvm)** <br>after cardholder verification  |
|  | **[MODE_DCC_NO_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-no-trx-continue)** <br>No DCC: Continue transaction with original amount, floor limit, ...  |
|  | **[MODE_DCC_YES_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-yes-trx-continue)** <br>DCC requested: Continue transaction with returned amount, floor limit, ...  |
|  | **[MODE_DCC_NO_TRX_ABORT](group___d_c_c___m_o_d_e.md#define-mode-dcc-no-trx-abort)** <br>Cashier requested abort: Transaction abort, display [EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error) and [EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card).  |
|  | **[MODE_DCC_YES_TRX_ABORT](group___d_c_c___m_o_d_e.md#define-mode-dcc-yes-trx-abort)** <br>DCC requested, but transaction must be restarted: Transaction abort, no text display.  |
|  | **[INPUT_OFL_TXN_COUNTER](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-txn-counter)** <br>B1b1: transaction counter, [EMV_CT_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount).  |
|  | **[INPUT_OFL_ADD_TAGS](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-add-tags)** <br>B1b2:  |
|  | **[INPUT_OFL_CB_AMOUNT](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-cb-amount)** <br>B1b3: cashback amount, [EMV_CT_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount).  |
|  | **[INPUT_OFL_ACCOUNT_TYPE](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-account-type)** <br>B1b4: account type, [EMV_CT_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype).  |
|  | **[INPUT_OFL_LANGUAGE](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-language)** <br>B1b5: language preselected, [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language).  |
|  | **[INPUT_OFL_AMOUNT_CONF](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-amount-conf)** <br>B1b6: amount confirmation, [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation).  |
|  | **[INPUT_OFL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-txn-options)** <br>B1b7: transaction options, [EMV_CT_TRANSAC_STRUCT::TxnOptions](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_OFL_TXN_STEPS](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-txn-steps)** <br>B1b8: transaction steps if interrupt needed instead of 1 step processing, [EMV_CT_TRANSAC_STRUCT::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps).  |
|  | **[INPUT_OFL_AMOUNT](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-amount)** <br>B2b1: txn amount, [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount).  |
|  | **[INPUT_OFL_AMOUNT_CURRENCY](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-amount-currency)** <br>B2b2: currency of txn, [EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans).  |
|  | **[INPUT_OFL_CUREXPONENT](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-curexponent)** <br>B2b3: currency exponent of txn, [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans).  |
|  | **[INPUT_OFL_DATE](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-date)** <br>B2b4: date of txn, [EMV_CT_PAYMENT_STRUCT::Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date).  |
|  | **[INPUT_OFL_TIME](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-time)** <br>B2b5: time of txn, [EMV_CT_PAYMENT_STRUCT::Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time).  |
|  | **[INPUT_OFL_FORCE_ONLINE](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-force-online)** <br>B2b6: force it online (suspicious, EMVCo), [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[INPUT_OFL_FORCE_ACCEPT](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-force-accept)** <br>B2b7: force acceptance, [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance).  |
|  | **[INPUT_OFL_ONLINE_SWITCH](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-online-switch)** <br>B2b8: force it online (domestic need), [EMV_CT_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch).  |
|  | **[INPUT_ONL_ONLINE_RESP](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-online-resp)** <br>B1b1: [EMV_CT_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult).  |
|  | **[INPUT_ONL_ONLINE_AC](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-online-ac)** <br>B1b2: [EMV_CT_HOST_STRUCT::AuthResp](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp).  |
|  | **[INPUT_ONL_AUTHDATA](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-authdata)** <br>B1b3: [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata).  |
|  | **[INPUT_ONL_SCRIPTCRIT](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-scriptcrit)** <br>B1b4: [EMV_CT_HOST_STRUCT::ScriptCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptcritdata).  |
|  | **[INPUT_ONL_SCRIPTUNCRIT](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-scriptuncrit)** <br>B1b5: [EMV_CT_HOST_STRUCT::ScriptUnCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptuncritdata).  |
|  | **[INPUT_ONL_AUTHCODE](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-authcode)** <br>B1b6: [EMV_CT_HOST_STRUCT::AuthorizationCode](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authorizationcode).  |
|  | **[INPUT_ONL_RESULT_REFERRAL](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-result-referral)** <br>B1b7: [EMV_CT_HOST_STRUCT::Result_referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-result-referral).  |
|  | **[INPUT_ONL_ARC_REFERRAL](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-arc-referral)** <br>B1b8: [EMV_CT_HOST_STRUCT::AuthResp_Referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-referral).  |
|  | **[INPUT_ONL_ARC_WRONGPIN](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-arc-wrongpin)** <br>B2b1: [EMV_CT_HOST_STRUCT::AuthResp_Wrong_PIN](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-wrong-pin).  |
|  | **[INPUT_ONL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-txn-options)** <br>B2b2: [EMV_CT_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_ONL_AMOUNT_GAC2](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-amount-gac2)** <br>B2b3: [EMV_CT_HOST_STRUCT::PreAuth_Amount](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-preauth-amount).  |
|  | **[INPUT_ONL_TXN_STEPS](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-txn-steps)** <br>B2b4: [EMV_CT_HOST_STRUCT::TxnSteps](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnsteps).  |
|  | **[INPUT_ONL_ARC_POSITIVE](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-arc-positive)** <br>B2b5: [EMV_CT_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive).  |
|  | **[INPUT_ONL_WRITE_DS_DATA](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-write-ds-data)** <br>B2b6: [EMV_CT_HOST_STRUCT::WriteDataStorageData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-writedatastoragedata).  |
|  | **[INPUT_ONL_AMOUNT_OTH](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-onl-amount-oth)** <br>B2b7: [EMV_CT_HOST_STRUCT::amountOthUpd](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd).  |
|  | **[TRX_STATUSINFO](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-statusinfo)** <br>B1b1: [EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo).  |
|  | **[TRX_9F27_CRYPTINFO](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f27-cryptinfo)** <br>B1b2: [EMV_CT_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo).  |
|  | **[TRX_9F36_ATC](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f36-atc)** <br>B1b3: [EMV_CT_TRANSRES_STRUCT::T_9F36_ATC](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f36-atc).  |
|  | **[TRX_9F26_CRYPTOGRAMM](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f26-cryptogramm)** <br>B1b4: [EMV_CT_TRANSRES_STRUCT::T_9F26_Cryptogramm](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f26-cryptogramm).  |
|  | **[TRX_5A_PAN](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5a-pan)** <br>B1b5: [EMV_CT_TRANSRES_STRUCT::T_5A_PAN](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5a-pan).  |
|  | **[TRX_9F39_POS_ENTRY_MODE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f39-pos-entry-mode)** <br>B1b6: [EMV_CT_TRANSRES_STRUCT::T_9F39_POSEntryMode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f39-posentrymode).  |
|  | **[TRX_5F24_APPEXPDATE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5f24-appexpdate)** <br>B1b7: [EMV_CT_TRANSRES_STRUCT::T_5F24_AppExpDate](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f24-appexpdate).  |
|  | **[TRX_9F41_TRANSCOUNT](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f41-transcount)** <br>B1b8: [EMV_CT_TRANSRES_STRUCT::T_9F41_TransCount](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f41-transcount).  |
|  | **[TRX_5F34_PAN_SEQ_NUMBER](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5f34-pan-seq-number)** <br>B2b1: [EMV_CT_TRANSRES_STRUCT::T_5F34_PANSequenceNo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f34-pansequenceno).  |
|  | **[TRX_57_DATA_TRACK2](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-57-data-track2)** <br>B2b2: [EMV_CT_TRANSRES_STRUCT::T_57_DataTrack2](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-57-datatrack2).  |
|  | **[TRX_9F10_DATAISSUER](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f10-dataissuer)** <br>B2b3: [EMV_CT_TRANSRES_STRUCT::T_9F10_DataIssuer](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f10-dataissuer).  |
|  | **[TRX_9F37_RANDOM_NUMBER](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f37-random-number)** <br>B2b4: [EMV_CT_TRANSRES_STRUCT::T_9F37_RandomNumber](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f37-randomnumber).  |
|  | **[TRX_95_TVR](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-95-tvr)** <br>B2b5: [EMV_CT_TRANSRES_STRUCT::T_95_TVR](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-95-tvr).  |
|  | **[TRX_9A_DATE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9a-date)** <br>B2b6: [EMV_CT_TRANSRES_STRUCT::T_9A_Date](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9a-date).  |
|  | **[TRX_9F21_TIME](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f21-time)** <br>B2b7: [EMV_CT_TRANSRES_STRUCT::T_9F21_Time](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f21-time).  |
|  | **[TRX_9C_TRANSTYPE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9c-transtype)** <br>B2b8: [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype).  |
|  | **[TRX_5F2A_TRX_CURRENCY](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5f2a-trx-currency)** <br>B3b1: [EMV_CT_TRANSRES_STRUCT::T_5F2A_CurrencyTrans](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2a-currencytrans).  |
|  | **[TRX_82_AIP](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-82-aip)** <br>B3b2: [EMV_CT_TRANSRES_STRUCT::T_82_AIP](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-82-aip).  |
|  | **[TRX_9F1A_TERM_COUNTRY_CODE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f1a-term-country-code)** <br>B3b3: [EMV_CT_TRANSRES_STRUCT::T_9F1A_TermCountryCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1a-termcountrycode).  |
|  | **[TRX_9F34_CVM_RES](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f34-cvm-res)** <br>B3b4: [EMV_CT_TRANSRES_STRUCT::T_9F34_CVM_Res](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f34-cvm-res).  |
|  | **[TRX_9F33_TERMCAP](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f33-termcap)** <br>B3b5: [EMV_CT_TRANSRES_STRUCT::T_9F33_TermCap](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f33-termcap).  |
|  | **[TRX_9F35_TERMTYP](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f35-termtyp)** <br>B3b6: [EMV_CT_TRANSRES_STRUCT::T_9F35_TermTyp](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f35-termtyp).  |
|  | **[TRX_9F1E_IFDSERIALNUMBER](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f1e-ifdserialnumber)** <br>B3b7: [EMV_CT_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1e-ifdserialnumber).  |
|  | **[TRX_84_DFNAME](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-84-dfname)** <br>B3b8: [EMV_CT_TRANSRES_STRUCT::T_84_DFName](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname).  |
|  | **[TRX_9F09_VERNUM](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f09-vernum)** <br>B4b1: [EMV_CT_TRANSRES_STRUCT::T_9F09_VerNum](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f09-vernum).  |
|  | **[TRX_SCRIPTRESULTS](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-scriptresults)** <br>B4b2: [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults).  |
|  | **[TRX_9B_TSI](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9b-tsi)** <br>B4b3: [EMV_CT_TRANSRES_STRUCT::T_9B_TSI](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9b-tsi).  |
|  | **[TRX_9F06_AID](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f06-aid)** <br>B4b4: [EMV_CT_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid).  |
|  | **[TRX_ADDITIONAL_TAGS](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-additional-tags)** <br>B4b5: EMV_CT_TRANSRES_STRUCT::Additional_Tags.  |
|  | **[TRX_APPNAME](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-appname)** <br>B4b6: [EMV_CT_TRANSRES_STRUCT::AppName](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname).  |
|  | **[TRX_5F25_APPEFFDATE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5f25-appeffdate)** <br>B4b7: [EMV_CT_TRANSRES_STRUCT::T_5F25_AppEffDate](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f25-appeffdate).  |
|  | **[TRX_5F28_ISSCOUNTRYCODE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5f28-isscountrycode)** <br>B4b8: [EMV_CT_TRANSRES_STRUCT::T_5F28_IssCountryCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f28-isscountrycode).  |
|  | **[TRX_9F45_DATAAUTHCODE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f45-dataauthcode)** <br>B5b1: [EMV_CT_TRANSRES_STRUCT::T_9F45_DataAuthCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f45-dataauthcode).  |
|  | **[TRX_9F4C_ICCDYNNUMBER](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f4c-iccdynnumber)** <br>B5b2: [EMV_CT_TRANSRES_STRUCT::T_9F4C_ICCDynNumber](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f4c-iccdynnumber).  |
|  | **[TRX_TAC_DENIAL](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-tac-denial)** <br>B5b3: [EMV_CT_TRANSRES_STRUCT::TACDenial](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdenial).  |
|  | **[TRX_TAC_ONLINE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-tac-online)** <br>B5b4: [EMV_CT_TRANSRES_STRUCT::TACOnline](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-taconline).  |
|  | **[TRX_TAC_DEFAULT](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-tac-default)** <br>B5b5: [EMV_CT_TRANSRES_STRUCT::TACDefault](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdefault).  |
|  | **[TRX_9F0E_IAC_DENIAL](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f0e-iac-denial)** <br>B5b6: [EMV_CT_TRANSRES_STRUCT::T_9F0E_IACDenial](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0e-iacdenial).  |
|  | **[TRX_9F0F_IAC_ONLINE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f0f-iac-online)** <br>B5b7: [EMV_CT_TRANSRES_STRUCT::T_9F0F_IACOnline](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0f-iaconline).  |
|  | **[TRX_9F0D_IAC_DEFAULT](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f0d-iac-default)** <br>B5b8: [EMV_CT_TRANSRES_STRUCT::T_9F0D_IACDefault](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0d-iacdefault).  |
|  | **[TRX_9F40_TERMCAP](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f40-termcap)** <br>B6b2: [EMV_CT_TRANSRES_STRUCT::T_9F40_AddTermCap](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f40-addtermcap).  |
|  | **[TRX_DF62_ERRORDATA_TRANS](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-df62-errordata-trans)** <br>B6b3: [EMV_CT_TRANSRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata).  |
|  | **[TRX_9F16_MERCHANT_ID](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f16-merchant-id)** <br>B6b4: [EMV_CT_TRANSRES_STRUCT::T_9F16_MerchIdent](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f16-merchident).  |
|  | **[TRX_5F20_CARDHOLDER](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5f20-cardholder)** <br>B6b5: [EMV_CT_TRANSRES_STRUCT::T_5F20_Cardholder](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f20-cardholder).  |
|  | **[TRX_5F2D_LANG_PREFERENCE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5f2d-lang-preference)** <br>B6b6: [EMV_CT_TRANSRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref).  |
|  | **[TRX_9F08_ICC_APPLI_VERS_NO](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f08-icc-appli-vers-no)** <br>B6b7: [EMV_CT_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no).  |
|  | **[TRX_5F36_TRX_CURRENCY_EXPO](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5f36-trx-currency-expo)** <br>B6b8: [EMV_CT_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f36-trx-currency-exp).  |
|  | **[TRX_5F30_SERVICE_CODE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-5f30-service-code)** <br>B7b1: [EMV_CT_TRANSRES_STRUCT::T_5F30_ServiceCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f30-servicecode).  |
|  | **[EMV_CT_TRX_DF17_FALLBACK_MID](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-emv-ct-trx-df17-fallback-mid)** <br>B7b2: [EMV_CT_TRANSRES_STRUCT::T_DF17_FallbackMID](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df17-fallbackmid).  |
|  | **[EMV_CT_TRX_8E_CVM_List](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-emv-ct-trx-8e-cvm-list)** <br>B7b3: [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list).  |
|  | **[TRX_DF63_DISPLAY_ID](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-df63-display-id)** <br>B7b4: [EMV_CT_TRANSRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext).  |
|  | **[TRX_DF64_KERNEL_DEBUG](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-df64-kernel-debug)** <br>B7b5: [EMV_CT_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata).  |
|  | **[TRX_9F02_AMOUNT](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f02-amount)** <br>B7b6: [EMV_CT_TRANSRES_STRUCT::T_9F02_TXNAmount](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f02-txnamount).  |
|  | **[TRX_9F03_CB_AMOUNT](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f03-cb-amount)** <br>B7b7: [EMV_CT_TRANSRES_STRUCT::T_9F03_TXNAdditionalAmount](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f03-txnadditionalamount).  |
|  | **[TRX_9F53_MC_CATCODE](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-9f53-mc-catcode)** <br>B7b8: [EMV_CT_TRANSRES_STRUCT::T_9F53_MC_CatCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f53-mc-catcode).  |
|  | **[TRX_DF59_OFFLINE_PIN_ERRORS](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md#define-trx-df59-offline-pin-errors)** <br>B8b1: [EMV_CT_TRANSRES_STRUCT::T_DF59_Offl_PIN_errors](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df59-offl-pin-errors).  |
|  | **[eEMVMerCustSelApp](group___m_e_r_c_h___i_n_f_o.md#define-eemvmercustselapp)** <br>Customer has to select Application, not used anymore.  |
|  | **[eEMVMerConfAmount](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerconfamount)** <br>Customer has to confirm amount.  |
|  | **[eEMVMerCrdhldVerif](group___m_e_r_c_h___i_n_f_o.md#define-eemvmercrdhldverif)** <br>EMV step "Cardholder Verification" will be started.  |
|  | **[eEMVMerReadAppData](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerreadappdata)** <br>EMV step "Read Application Data" will be started.  |
|  | **[eEMVMerOffAuth](group___m_e_r_c_h___i_n_f_o.md#define-eemvmeroffauth)** <br>EMV step "Offline Data Authentication" will be started.  |
|  | **[eEMVMer1stGAC](group___m_e_r_c_h___i_n_f_o.md#define-eemvmer1stgac)** <br>1st GENERATE AC will be done  |
|  | **[eEMVMer2ndGAC](group___m_e_r_c_h___i_n_f_o.md#define-eemvmer2ndgac)** <br>2nd GENERATE AC will be done  |
|  | **[eEMVMerSelect](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerselect)** <br>"Application Selection" is finished  |
|  | **[eEMVMerPINProgress](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerpinprogress)** <br>Input of PIN in progress, not used anymore.  |
|  | **[eEMVMerCustConf](group___m_e_r_c_h___i_n_f_o.md#define-eemvmercustconf)** <br>Wait for customer confirmation, not used anymore.  |
|  | **[eEMVMerPINInput](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerpininput)** <br>Customer is asked for PIN entry.  |
|  | **[eEMVMerLangSelect](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerlangselect)** <br>Customer has to select language.  |
|  | **[eEMVMerCustLang](group___m_e_r_c_h___i_n_f_o.md#define-eemvmercustlang)** <br>customer language selected = 0x80 + language ID (e.g. EMV_LANG_ITALIAN)  |
|  | **[eEMVCrdWrongPIN](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#define-eemvcrdwrongpin)** <br>Customer info: wrong PIN.  |
|  | **[eEMVCrdCorrectPIN](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#define-eemvcrdcorrectpin)** <br>Customer info: correct PIN.  |
|  | **[eEMVCrdAppChange](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#define-eemvcrdappchange)** <br>Customer info: explicit selected application is changed.  |
|  | **[eEMVCrdLastTryPIN](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#define-eemvcrdlasttrypin)** <br>Customer info: last PIN try.  |
|  | **[CBK_SEL_MERCHANT](group___d_e_f___c_b_k___s_e_l.md#define-cbk-sel-merchant)** <br>Merchant has to select.  |
|  | **[CBK_SEL_CUSTOMER](group___d_e_f___c_b_k___s_e_l.md#define-cbk-sel-customer)** <br>Customer has to select.  |
|  | **[CBK_DOMAPP_REMAIN](group___d_e_f___c_b_k___d_o_m_a_p_p.md#define-cbk-domapp-remain)** <br>Don't remove from candidate list.  |
|  | **[CBK_DOMAPP_REMOVE](group___d_e_f___c_b_k___d_o_m_a_p_p.md#define-cbk-domapp-remove)** <br>Remove from candidate list.  |
|  | **[CBK_DOMAPP_REMAIN2](group___d_e_f___c_b_k___d_o_m_a_p_p.md#define-cbk-domapp-remain2)** <br>Don't remove from candidate list. Additionally suppress final SELECT. Needed e.g. for German ec card. Transaction processing is done outside EMV kernel.  |
|  | **[CBK_DOMAPP_REMAIN3](group___d_e_f___c_b_k___d_o_m_a_p_p.md#define-cbk-domapp-remain3)** <br>Don't remove from candidate list. Additionally suppress all following SELECTs. Used for enhancing performance in case it's clear that transaction will be done outside EMV kernel.  |
|  | **[DOM_OPTION_LEN](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-len)** <br>Length of `pucDomOption` in bytes.  |
|  | **[DOM_OPTION_AUSTRIAN_NGV](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-austrian-ngv)** <br>B1b1: Continue transaction as Austrian Non Guaranteed Payment.  |
|  | **[DOM_OPTION_TRX_INTERCEPT](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-trx-intercept)** <br>B1b2: Intercept transaction. Context will remain. Repetition trx must be started with [EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-trx-intercept).  |
|  | **[DOM_OPTION_ABORT_NO_TEXT](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-abort-no-text)** <br>B1b3: if [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)) returns [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort) in [TAG_DF76_CBK_MANIPUL_TRX](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df76-cbk-manipul-trx): Don't display texts [EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error) and [EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card).  |
|  | **[DOM_OPTION_TIP_OFF](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-tip-off)** <br>B1b4: convert a tip capable transaction back to sale transaction (used for countries where tip with signature is done outside the scope of EMV and returns the txn to a normal sale transaction)  |
|  | **[DOM_INFO_LEN](group___c_b_c_k___d_o_m___i_n_f_o.md#define-dom-info-len)** <br>Length of `pucDomInfo` in bytes.  |
|  | **[DOM_INFO_ICC_REQ_AMOUNT](group___c_b_c_k___d_o_m___i_n_f_o.md#define-dom-info-icc-req-amount)** <br>ICC already requested transaction amount (e.g. in PDOL). Amount change for running transaction is forbidden.  |
|  | **[DOM_INFO_ICC_REQ_TRANSTYPE](group___c_b_c_k___d_o_m___i_n_f_o.md#define-dom-info-icc-req-transtype)** <br>ICC already requested transaction type (e.g. in PDOL). Transaction type change for running transaction is forbidden.  |
|  | **[DCC_CBCK_INFO_LEN](group___c_b_c_k___d_c_c___i_n_f_o.md#define-dcc-cbck-info-len)** <br>Length of `pucDomOption` in bytes.  |
|  | **[DCC_CBCK_INFO_PDOL_FORBIT](group___c_b_c_k___d_c_c___i_n_f_o.md#define-dcc-cbck-info-pdol-forbit)** <br>B1b1: Currency change not allowed for this transaction. Reason is PDOL containing amount or currency.  |
|  | **[MAX_CONF_KEYS](_e_m_v___c_t___interface_8h.md#define-max-conf-keys)**  |
|  | **[TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo)** <br>Transaction progress information for the merchant.  |
|  | **[TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf)** <br>The cardholder has to confirm the amount.  |
|  | **[TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist)** <br>EMVCo features "transaction log" and "hotlist".  |
|  | **[TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand)** <br>Application Candidate List Reduction/Modification.  |
|  | **[TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps)** <br>Domestic app detected during application selection.  |
|  | **[TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)** <br>Callback for local checks after reading the PAN.  |
|  | **[TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc)** <br>Dynamic currency conversion (DCC)  |
|  | **[TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin)** <br>PIN Input request.  |
|  | **[TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo)** <br>A text information has to be displayed to the cardholder.  |
|  | **[TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace)** <br>Callback for Traces.  |
|  | **[TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd)** <br>Random number provided by the calling application.  |
|  | **[FS_CALLBACK_DATA_RECORD](_e_m_v___c_t___interface_8h.md#define-fs-callback-data-record)**  |
|  | **[EMV_CT_SER_Init_Framework](_e_m_v___c_t___interface_8h.md#define-emv-ct-ser-init-framework)**(dataIn, dataInLen, dataOut, dataOutLen)  |
|  | **[EMV_CT_INIT_OPT_BASE_INIT](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-base-init)** <br>base init: set options and register callback, but do not allocate memory. Useful on devices without contact EMV like UX410.  |
|  | **[EMV_CT_INIT_OPT_L1_DUMP](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-l1-dump)**  |
|  | **[EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode)**  |
|  | **[EMV_CT_INIT_OPT_USE_DEF_VT_CAPK](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-use-def-vt-capk)** <br>Use "EMV_Keys.xml" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals.  |
|  | **[EMV_CT_INIT_OPT_DELETE_ALL](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-delete-all)** <br>delete all existing configuration files using the same virtual terminal  |
|  | **[EMV_CT_INIT_OPT_TRACE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace)** <br>Callback trace ([TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace)), switch on EMV trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-adk-log) or log configuration file missing or read error.  |
|  | **[EMV_CT_INIT_OPT_TRACE_CLT](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-clt)** <br>Callback trace ([TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace)), switch on client trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-adk-log) or log configuration file missing or read error.  |
|  | **[EMV_CT_INIT_OPT_TRACE_SYSLOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-syslog)** <br>Callback trace ([TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace)), additionally write to syslog. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-adk-log) or log configuration file missing or read error.  |
|  | **[EMV_CT_INIT_OPT_TRACE_ADK_LOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-adk-log)** <br>Solely use ADK-LOG for tracing. Deactivates trace callback ([TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace)). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file "EMVCT".  |
|  | **[EMV_CT_INIT_OPT_TIMINGS](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-timings)** <br>measure card and terminal performance. Note: For this feature other trace output is switched off  |
|  | **[EMV_CT_INIT_OPT_SHARED_CONFIG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-shared-config)**  |
|  | **[EMV_CT_INIT_OPT_EPP_MASTER](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-epp-master)**  |
|  | **[EMV_CT_INIT_VIRT_1](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-1)** <br>virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_2](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-2)** <br>virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_3](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-3)** <br>virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_4](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-4)** <br>virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_5](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-5)** <br>virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_6](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-6)** <br>virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_7](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-7)** <br>virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_8](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-8)** <br>virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_9](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-9)** <br>virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_10](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-10)** <br>virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_11](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-11)** <br>virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_12](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-12)** <br>virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_13](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-13)** <br>virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_14](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-14)** <br>virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_15](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-15)** <br>virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_16](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-16)** <br>virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_17](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-17)** <br>virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_18](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-18)** <br>virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_19](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-19)** <br>virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_20](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-20)** <br>virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework)**(numberOfAIDs, EMV_Callback, externalData, options) <br>Initialize EMV ADK.  |
|  | **[EXIT_CT_BASE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ct-base)**  |
|  | **[EXIT_CT_COMPLETE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ct-complete)** <br>dlclose all modules  |
|  | **[EMV_CT_CUSTOMER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-customer)** <br>bit 1,2 used for reader selection: Customer Card Slot  |
|  | **[EMV_CT_SAM_1](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-sam-1)** <br>bit 1,2 used for reader selection: SAM1  |
|  | **[EMV_CT_SAM_2](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-sam-2)** <br>bit 1,2 used for reader selection: SAM2  |
|  | **[EMV_CT_SAM_3](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-sam-3)** <br>bit 1,2 used for reader selection: SAM3  |
|  | **[EMV_CT_TRY_PPS](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-try-pps)** <br>Try to increase the baudrate by using PPS.  |
|  | **[EMV_CT_SKIP_ATR](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-skip-atr)** <br>Skip ATR reading, not included in response.  |
|  | **[EMV_CT_TRY_PPS_EPA](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-try-pps-epa)** <br>PPS handling for Austrian Maestro Cards.  |
|  | **[EMV_CT_WARMRESET](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-warmreset)** <br>Warm Reset to ICC (Cold reset must have been applied before)  |
|  | **[EMV_CT_DETECT_WRONG_ATR](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-detect-wrong-atr)** <br>Distinguish between wrong ATR and card wrong side/no chip and return applicable return value (for customer slot only)  |
|  | **[EMV_CT_ID0_ISO_MODE](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-id0-iso-mode)** <br>The customer card (ID 0) is reset in mode EMV per default, use this bit to switch to ISO 7816 (for ID0 only)  |
|  | **[EMV_CT_SAM_EMV_MODE](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-sam-emv-mode)** <br>SAMs are reset in mode ISO 7816 per default, use this bit to switch to EMV 311 (for SAMs only)  |
|  | **[EMV_CT_CARD_CLASS_B_3V](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ct-card-class-b-3v)** <br>For class B (3V) cards.  |
|  | **[CONTACT_LED_ID_0](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-id-0)** <br>There is currently maximum one CT Slot.  |
|  | **[CONTACT_LED_OFF](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-off)** <br>Switch LED Off.  |
|  | **[CONTACT_LED_ON](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-on)** <br>Switch LED On.  |
|  | **[CONTACT_LED_BLINK](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-blink)** <br>Enable blinking, fixed timing.  |
|  | **[CONTACT_LED_COLOR_WHITE](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-white)** <br>white led  |
|  | **[CONTACT_LED_COLOR_RED](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-red)** <br>red led  |
|  | **[CONTACT_LED_COLOR_GREEN](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-green)** <br>green led  |
|  | **[CONTACT_LED_COLOR_BLUE](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-blue)** <br>blue led  |
|  | **[CONTACT_LED_COLOR_YELLOW](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-yellow)** <br>yellow led  |

## Types Documentation

### typedef EMV_CT_APPLI_TYPE

```cpp
typedef struct EMV_CT_APPLI_STRUCT EMV_CT_APPLI_TYPE;
```

9F06, AID (5 bytes RID + n bytes PIX) 

### typedef EMV_CT_CANDIDATE_TYPE

```cpp
typedef struct EMV_CT_CANDIDATE_STRUCT EMV_CT_CANDIDATE_TYPE;
```

Candidate list structure. 

used as [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates)


### typedef EMV_CT_CANDIDATE_DATA_TYPE

```cpp
typedef struct EMV_CT_CANDIDATE_DATA_STRUCT EMV_CT_CANDIDATE_DATA_TYPE;
```

Candidate list additional data Output of [EMV_CT_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getcandidatedata)   To be used in conjunction with [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates). 

### typedef EMV_CT_DOL_TYPE

```cpp
typedef struct EMV_CT_DOL_STRUCT EMV_CT_DOL_TYPE;
```

data object list 

### typedef EMV_CT_TRACK2_TYPE

```cpp
typedef struct EMV_CT_TRACK2_STRUCT EMV_CT_TRACK2_TYPE;
```

track 2 data 

### typedef EMV_CT_CRDNAME_TYPE

```cpp
typedef struct EMV_CT_CRDNAME_STRUCT EMV_CT_CRDNAME_TYPE;
```

cardholder name 

### typedef EMV_CT_ICCRND_TYPE

```cpp
typedef struct EMV_CT_ICCRND_STRUCT EMV_CT_ICCRND_TYPE;
```

icc dynamic number 

### typedef EMV_CT_ISSDATA_TYPE

```cpp
typedef struct EMV_CT_ISSDATA_STRUCT EMV_CT_ISSDATA_TYPE;
```

issuer application data 

### typedef EMV_CT_TERMDATA_TYPE

```cpp
typedef struct EMV_CT_TERMDATA_STRUCT EMV_CT_TERMDATA_TYPE;
```

struct for interface to [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata) and [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata)

typedef for [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)


### typedef EMV_CT_TAGLIST_TYPE

```cpp
typedef struct EMV_CT_TAGLIST_STRUCT EMV_CT_TAGLIST_TYPE;
```

structure for [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd) and [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)

### typedef EMV_CT_APPLIDATA_TYPE

```cpp
typedef struct EMV_CT_APPLIDATA_STRUCT EMV_CT_APPLIDATA_TYPE;
```

Structure for configuration of one single application    see [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata)

typedef for [EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md)


### typedef EMV_CT_DOM_CHIP_TYPE

```cpp
typedef struct EMV_CT_DOM_CHIP_STRUCT EMV_CT_DOM_CHIP_TYPE;
```

Domestic non-EMV chip applications supporting AID selection    see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)   TLV tag [TAG_EMV_CONFORM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-emv-conform). 

typedef for [EMV_CT_DOM_CHIP_STRUCT](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md)


### typedef EMV_CT_FALLBCK_MSR_TYPE

```cpp
typedef struct EMV_CT_FALLBCK_MSR_STRUCT EMV_CT_FALLBCK_MSR_TYPE;
```

list of MID applications supported by terminal    DF4C, see `xFallback_MS` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) and [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md)

typedef for [EMV_CT_FALLBCK_MSR_STRUCT](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md)


### typedef EMV_CT_PAYMENT_TYPE

```cpp
typedef struct EMV_CT_PAYMENT_STRUCT EMV_CT_PAYMENT_TYPE;
```

Transaction parameters of an EMV transaction. 

Used in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) and [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md) . 

 typedef for [EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md)


### typedef EMV_CT_APPS_SELECT_TYPE

```cpp
typedef struct EMV_CT_APPS_SELECT_STRUCT EMV_CT_APPS_SELECT_TYPE;
```

Application selection parameters of an EMV transaction used for [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data). 

typedef for [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md)


### typedef EMV_CT_SELECT_TYPE

```cpp
typedef struct EMV_CT_SELECT_STRUCT EMV_CT_SELECT_TYPE;
```

struct for interface to [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction)

typedef for [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)


### typedef EMV_CT_SELECTRES_TYPE

```cpp
typedef struct EMV_CT_SELECTRES_STRUCT EMV_CT_SELECTRES_TYPE;
```

result data of [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction)

typedef for [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md)


### typedef EMV_CT_TRANSAC_TYPE

```cpp
typedef struct EMV_CT_TRANSAC_STRUCT EMV_CT_TRANSAC_TYPE;
```

Structure for call of [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline)

typedef for [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md)


### typedef EMV_CT_SRCRIPTRES_TYPE

```cpp
typedef struct EMV_CT_SRCRIPTRES_STRUCT EMV_CT_SRCRIPTRES_TYPE;
```

Data structure for issuer script results. Used in [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults). 

### typedef EMV_CT_HOST_TYPE

```cpp
typedef struct EMV_CT_HOST_STRUCT EMV_CT_HOST_TYPE;
```

Data structure for host response data. Input for [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)

### typedef EMV_CT_TRANSRES_TYPE

```cpp
typedef struct EMV_CT_TRANSRES_STRUCT EMV_CT_TRANSRES_TYPE;
```

Data structure for output data of [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline) and [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)

### typedef EMV_ADK_MerchantInfo

```cpp
typedef unsigned char EMV_ADK_MerchantInfo;
```


### typedef eCardholderInfo

```cpp
typedef unsigned char eCardholderInfo;
```


### typedef EMV_CT_CAPKEY_TYPE

```cpp
typedef struct EMV_CT_CAPKEY_STRUCT EMV_CT_CAPKEY_TYPE;
```

Data structure CAP keys. 

### typedef EMV_CT_CAPREAD_TYPE

```cpp
typedef struct EMV_CT_CAPREAD_STRUCT EMV_CT_CAPREAD_TYPE;
```

Data structure CAP keys. 


## Functions Documentation

### function EMV_CT_SER_Init_Framework_Client

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_Init_Framework_Client(
    const char * version,
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_Exit_Framework

```cpp
DLL_CTC void EMV_CT_SER_Exit_Framework(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_MapVirtualTerminal

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_MapVirtualTerminal(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_StoreCAPKey

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_StoreCAPKey(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_ReadCAPKeys

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_ReadCAPKeys(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_SetTermData

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_SetTermData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_GetTermData

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_GetTermData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_SetAppliData

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_SetAppliData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_GetAppliData

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_GetAppliData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_StartTransaction

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_StartTransaction(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_GetCandidateData

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_GetCandidateData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_ContinueOffline

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_ContinueOffline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_ContinueOnline

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_ContinueOnline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_fetchTxnTags

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_fetchTxnTags(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_fetchTxnDOL

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_fetchTxnDOL(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_updateTxnTags

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_updateTxnTags(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_CheckSupportedAID

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_CheckSupportedAID(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_EndTransaction

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SER_EndTransaction(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_SmartISO

```cpp
DLL_CTC unsigned char EMV_CT_SER_SmartISO(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_SmartDetect

```cpp
DLL_CTC unsigned char EMV_CT_SER_SmartDetect(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_SmartReset

```cpp
DLL_CTC unsigned char EMV_CT_SER_SmartReset(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_SmartPowerOff

```cpp
DLL_CTC unsigned char EMV_CT_SER_SmartPowerOff(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_SmartPIN

```cpp
DLL_CTC unsigned char EMV_CT_SER_SmartPIN(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_SER_Send_PIN_Offline

```cpp
DLL_CTC unsigned char EMV_CT_SER_Send_PIN_Offline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CT_Init_Framework_Client

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_Init_Framework_Client(
    const char * version,
    unsigned char numberOfAIDs,
    EMV_CT_CALLBACK_FnT EMV_Callback,
    void * externalData,
    unsigned long options
)
```

Internal function for initialization    Don't call direct!    Instead use [EMV_CT_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework). 

### function EMV_CT_Exit_Framework

```cpp
DLL_CTC void EMV_CT_Exit_Framework(
    void 
)
```

Kernel deactivation. 

**Author**: GSS R&D Germany

Explanation in programmers guide: [Initialize EMV Framework]

**Serialization:**![TLV_ExitFramework.jpg](.//TLV_ExitFramework.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CT_Exit_Framework_extended

```cpp
DLL_CTC void EMV_CT_Exit_Framework_extended(
    unsigned char options
)
```

Kernel deactivation. 

**Parameters**: 

  * **options** Bitset of [Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md)

 TLV tag [TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options)


**Author**: GSS R&D Germany

Explanation in programmers guide: [Initialize EMV Framework]

**Serialization:**![TLV_ExitFramework.jpg](.//TLV_ExitFramework.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CT_CLIENT_GetVersion

```cpp
const DLL_CTC char * EMV_CT_CLIENT_GetVersion(
    void 
)
```

Get contact client version. 

**Return**: Client version as zero-terminated C-String 

**Author**: GSS R&D Germany

### function EMV_CT_FRAMEWORK_GetVersion

```cpp
const DLL_CTC char * EMV_CT_FRAMEWORK_GetVersion(
    void 
)
```

Get contact framework version. 

**Return**: Framework version as zero-terminated C-String 

 TLV tag: [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version)

**Author**: GSS R&D Germany

**Serialization:**![TLV_GetFrameworkVersion.jpg](.//TLV_GetFrameworkVersion.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_GET_VER](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-get-ver), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CT_MapVirtualTerminal

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_MapVirtualTerminal(
    EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType,
    unsigned char * TLVSwitchValue,
    unsigned int TLVBufLen,
    unsigned char VirtualTerminal
)
```

Changes the Virtual Terminal Map. 

**Parameters**: 

  * **VirtualTermMapType** Mode, see [Defines for type of virtual terminal map](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md)

 TLV tag: [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **TLVSwitchValue** TLV buffer containing switch criteria. Must contain tag [TAG_9C_TRANS_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9c-trans-type) and/or tag [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency), all other tags are currently ignored. 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **TLVBufLen** Length of TLV buffer 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **VirtualTerminal** Virtual Terminal (non-zero) that is selected if switch criteria match. 

 TLV tag [TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
**Serialization:** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_VIRT_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-virt-cfg)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Virtual terminal mapping table]


### function EMV_CT_StoreCAPKey

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_StoreCAPKey(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType,
    const EMV_CT_CAPKEY_TYPE * pxKeyData
)
```

Stores the specified CAP key. 

**Parameters**: 

  * **eHandleCAPKeyType** Mode of CAP key setting, see [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md) (Note: Multiple records are not supported) 

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)
  * **pxKeyData** All the data of the key that needs storing, see [EMV_CT_CAPKEY_STRUCT](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): invalid input param pxKeyData
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): CapKeys file persistence problem
**Serialization:**![TLV_StoreCAPKey.jpg](.//TLV_StoreCAPKey.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure CAP Keys]


### function EMV_CT_ReadCAPKeys

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_ReadCAPKeys(
    EMV_CT_CAPREAD_TYPE * pxKeyData,
    unsigned char * pucMaxnum
)
```

Reads CAP keys. 

**Parameters**: 

  * **pxKeyData** CAP key data, [min(*pucMaxnum, number of stored CAP keys, 100)](http__get__curl_8c.md#define-min) are written to output buffer 

 see [EMV_CT_CAPREAD_STRUCT](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md)
  * **pucMaxnum** Input: maximum number of CAP keys to write to pxKeyData; output: number of CAP keys stored in file 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxKeyData or pucMaxnum input params
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption

**Author**: GSS R&D Germany

**Note**: Currently maximum number of CAP keys to be stored is 512. 
**Serialization:**![TLV_ReadCAPKey.jpg](.//TLV_ReadCAPKey.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


Explanation in programmers guide: [Configure CAP Keys] Due to serialisation buffer limitation the maximum number of read keys is 100, [EMV_CT_GetCAPKeyInfo()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getcapkeyinfo) is without this restriction.


### function EMV_CT_GetCAPKeyInfo

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_GetCAPKeyInfo(
    EMV_CT_CAPREAD_TYPE * pxKeyInfo,
    unsigned capacity,
    unsigned offset,
    unsigned * received,
    unsigned * configured
)
```

Reads CAP key information. 

**Parameters**: 

  * **pxKeyInfo** CAP key info data (buffer length at least 7 times capacity) 

 see [EMV_CT_CAPREAD_STRUCT](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md)

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)
  * **capacity** number of keys that can be stored in pxKeyInfo 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)
  * **offset** for reading the key list in several chunks 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **received** number of data sets stored to pxKeyInfo 
  * **configured** number of configured keys 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxKeyData or pucMaxnum input params
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption

**Author**: GSS R&D Germany

**Note**: Currently maximum number of CAP keys to be stored is 512.


Explanation in programmers guide: [Configure CAP Keys]

**Serialization:** As this command uses the same class and instruction as [EMV_CT_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-readcapkeys) the presence of parameter offset marks the support of compressed response format. Legacy frameworks will ignore this parameter and return key info in TLV format. 
**Request**

 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

 capacity [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number), up to 255, for more a loop is required 

 offset [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1), length 2 
**Response**

 configured [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number), length 2 indicates compressed format, legacy framework will send length 1 

 key info [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data) sequence of RID, index and key length up to given capacity, data length is 7 times number of keys info blocks while the number of blocks is min(capacity, number of stored keys - offset) 


### function EMV_CT_SetTermData

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SetTermData(
    EMV_CT_TERMDATA_TYPE * pxTermData
)
```

Set terminal specific data and perform verification and saving of data. 

**Parameters**: 

  * **pxTermData** Terminal data ([EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)) 


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData file persistence problem
**Serialization:**![TLV_SetTerminalData.jpg](.//TLV_SetTerminalData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure Terminal Data]


### function EMV_CT_GetTermData

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_GetTermData(
    EMV_CT_TERMDATA_TYPE * pxTermData
)
```

Get configured terminal data. 

**Parameters**: 

  * **pxTermData** Terminal data ([EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)) 


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData file corruption
**Serialization:**![TLV_GetTerminalData.jpg](.//TLV_GetTerminalData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure Terminal Data]


### function EMV_CT_SetAppliData

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_SetAppliData(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType,
    EMV_CT_APPLI_TYPE * pxAID,
    EMV_CT_APPLIDATA_TYPE * pxAppliData
)
```

Set application specific data and perform verification and saving of data.    Has to be called once per application (Visa, MasterCard, ...). 

**Parameters**: 

  * **eHandleAppliType** See [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)
  * **pxAID** AID (up to n-times for AIDs with same configuration), see [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)

 TLV tag [TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)
  * **pxAppliData** Application data, see [EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): illegal handle type or pointer
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): file corruption 
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): persistence problem 
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): if number of configurable AIDs is a limit

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure Application Data]

**Serialization:**![TLV_SetAppliData.jpg](.//TLV_SetAppliData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)


### function EMV_CT_GetAppliData

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_GetAppliData(
    EMV_ADK_READAPPLI_TYPE eReadAppliType,
    EMV_CT_APPLI_TYPE * pxAID,
    EMV_CT_APPLIDATA_TYPE * pxAppliData
)
```

Get configured application data    Has to be called once per application (Visa, MasterCard, ...). 

**Parameters**: 

  * **eReadAppliType** See [Defines for type of read application data mode](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md)

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)
  * **pxAID** AID, see [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)

 TLV tag [TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)
  * **pxAppliData** Application data, see [EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): AppliData file corruption
**Serialization:**![TLV_GetAppliData.jpg](.//TLV_GetAppliData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure Application Data]


### function EMV_CT_ApplyConfiguration

```cpp
DLL_CTCEMV_ADK_INFO EMV_CT_ApplyConfiguration(
    unsigned long options
)
```

Write configuration to files. 

**Parameters**: 

  * **options** RFU 

 TLV tag [TAG_DF8F0F_APPLYCONFIG_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0f-applyconfig-options)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap file persistence problem
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): maximum number of configurable AIDs exceeded
**Serialization:**![TLV_ApplyConfiguration.jpg](.//TLV_ApplyConfiguration.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_APPLY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-apply-cfg)

**Author**: GSS R&D Germany

This function writes the configuration to file system if [EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode) was set. If [EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode) was not set, this function returns EMV_ADK_NO_EXEC and does nothing.

Explanation in programmers guide: [Virtual terminal mapping table]


### function EMV_CT_StartTransaction

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
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

### function EMV_CT_SmartISO

```cpp
DLL_CTC unsigned char EMV_CT_SmartISO(
    unsigned char ucOptions,
    unsigned short usInDataLen,
    unsigned char * pucDataIn,
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut,
    unsigned short usOutBufferLength
)
```

send chip card command and receive response 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)

 TLV tag [TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)
  * **usInDataLenpucDataIn** Chip card command 

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)
  * **usOutBufferLength** Length of output buffer 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1), optional, length 2, default 512 
  * **pusOutDataLenpucDataOut** Chip card response (with leading status word SW1/2) 

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucDataIn, pucDataOut or pusOutDataLen input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Explanation in programmers guide: [ISO Command to a Smart Card]


### function EMV_CT_SmartDetect

```cpp
DLL_CTC unsigned char EMV_CT_SmartDetect(
    unsigned char ucOptions
)
```

Detect if chip card is inserted in card reader (in readable position) 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)

 TLV tag [TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Explanation in programmers guide: [Detecting a Smart Card]


### function EMV_CT_SmartReset

```cpp
DLL_CTC unsigned char EMV_CT_SmartReset(
    unsigned char ucOptions,
    unsigned char * pucATR,
    unsigned long * pnATRLength
)
```

Detect if chip card is inserted in card reader (read ATR) 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)

 TLV tag [TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)
  * **pucATR** ATR (min. 40 bytes must be allocated) 

 TLV tag [TAG_ATR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-atr)
  * **pnATRLength** ATR length 

 TLV tag [TAG_ATR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-atr)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucATR or pnATRLength input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Explanation in programmers guide: [Activating a Smart Card]


### function EMV_CT_SmartPowerOff

```cpp
DLL_CTC unsigned char EMV_CT_SmartPowerOff(
    unsigned char ucOptions
)
```

Deactivate chip card. 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)

 TLV tag [TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Explanation in programmers guide: [Deactivate a Smart Card]


### function EMV_CT_SmartPIN

```cpp
DLL_CTC unsigned char EMV_CT_SmartPIN(
    const unsigned char * INICCRandom,
    const unsigned char * PubKeyData,
    int PubKeyLen,
    int Exponent,
    unsigned char * pucPINResultData
)
```

Encipher PIN and send VERIFY command. 

**Parameters**: 

  * **INICCRandom** ICC random number extracted from Get Challenge response (8 bytes) 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **PubKeyData** PIN verification public key modulus 

 TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)
  * **PubKeyLen** length of PubKeyData in bytes 

 TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)
  * **Exponent** PIN verification public key exponent (0 for 2, 1 for 3, 16 for 65537) 

 TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent)
  * **pucPINResultData** PIN result data (usually 2 bytes length + status word SW12, buffer size 4 bytes) 

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

This function extends the transparent card access function group. It is only required if the control flow is outside the framework. Otherwise you should call EMV_CT_Send_PIN_Offline, no matter if PIN is enciphered or plain because this function will not be allowed.


### function EMV_CT_Send_PIN_Offline

```cpp
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


### function EMV_CT_LED

```cpp
DLL_CTC unsigned char EMV_CT_LED(
    unsigned char ucLedId,
    unsigned char ucLedState,
    unsigned char ucLedColor,
    unsigned long ulTimeoutMs
)
```

Control the Smart Card Reader LEDs. 

**Parameters**: 

  * **ucLedId** Id of the LED 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **ucLedState** State of the LED (e.g. [CONTACT_LED_ON](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-on)) 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **ucLedColor** Color (e.g. [CONTACT_LED_COLOR_RED](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-red)) 

 TLV tag [TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)
  * **ulTimeoutMs** Timeout in milliseconds 

 TLV tag [TAG_DF19_PARAMETER_4](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df19-parameter-4)


**Return**: `0` ... okay 
`!=0` ... error 

**Author**: GSS R&D Germany



## Macros Documentation

### define DLL_CTC

```cpp
#define DLL_CTC 
```


### define EMV_CT_SUPPORTED_SIZE_9F0A

```cpp
#define EMV_CT_SUPPORTED_SIZE_9F0A 50
```

limit for Application Section Registered Proprietary Data size (has been 20 before) 

### define EMV_CT_COMMON_CANDS

```cpp
#define EMV_CT_COMMON_CANDS 10
```

Maximum number of mutual candidates in application selection process, see [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) and [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates). 

### define EMV_CT_PIN_INPUT_ONLINE

```cpp
#define EMV_CT_PIN_INPUT_ONLINE 0
```

Online enciphered PIN. 

### define EMV_CT_PIN_INPUT_PLAIN

```cpp
#define EMV_CT_PIN_INPUT_PLAIN 1
```

Offline plaintext PIN. 

### define EMV_CT_PIN_INPUT_ENCIPHERED

```cpp
#define EMV_CT_PIN_INPUT_ENCIPHERED 2
```

Offline enciphered PIN. 

### define EMV_CT_PIN_INPUT_PLAIN_EXT

```cpp
#define EMV_CT_PIN_INPUT_PLAIN_EXT 3
```

Offline plaintext PIN at external device (old Verix devices only) 

### define EMV_CT_PIN_INPUT_ENCIPHERED_EXT

```cpp
#define EMV_CT_PIN_INPUT_ENCIPHERED_EXT 4
```

Offline enciphered PIN at external device (old Verix devices only) 

### define EMV_CT_CVM_CUSTOM

```cpp
#define EMV_CT_CVM_CUSTOM 5
```

Custom CVM, the highest bit indicates the custom CVM, byte 0...3 indicates the custom CVM method. 

### define EMV_CT_PIN_INPUT_OKAY

```cpp
#define EMV_CT_PIN_INPUT_OKAY 0
```

PIN input was successful. 

### define EMV_CT_PIN_INPUT_COMM_ERR

```cpp
#define EMV_CT_PIN_INPUT_COMM_ERR 1
```

Communication error. 

### define EMV_CT_PIN_INPUT_ABORT

```cpp
#define EMV_CT_PIN_INPUT_ABORT 2
```

Customer canceled. 

### define EMV_CT_PIN_INPUT_BYPASS

```cpp
#define EMV_CT_PIN_INPUT_BYPASS 3
```

Customer chose "bypass PIN entry". 

### define EMV_CT_PIN_INPUT_TIMEOUT

```cpp
#define EMV_CT_PIN_INPUT_TIMEOUT 4
```

Timeout. 

### define EMV_CT_PIN_INPUT_OTHER_ERR

```cpp
#define EMV_CT_PIN_INPUT_OTHER_ERR 5
```

Other error. 

### define EMV_CT_PIN_UNCRIT_TIMEOUT

```cpp
#define EMV_CT_PIN_UNCRIT_TIMEOUT 6
```

uncritical timeout (no immediate abort on timeout) 

### define EMV_CT_EMV_0

```cpp
#define EMV_CT_EMV_0 0x00
```

EMV Application. 

### define EMV_CT_EMV_1

```cpp
#define EMV_CT_EMV_1 0x01
```

EMV Application. 

### define EMV_CT_NON_EMV

```cpp
#define EMV_CT_NON_EMV 0xFF
```

NON EMV Application. 

### define EMV_ADK_INF_INIT

```cpp
#define EMV_ADK_INF_INIT 0x80
```

Initialization. 

### define EMV_ADK_INF_SEL_TERMDATA

```cpp
#define EMV_ADK_INF_SEL_TERMDATA 0x81
```

Application selection: terminal data. 

### define EMV_ADK_INF_SEL_TEXTE

```cpp
#define EMV_ADK_INF_SEL_TEXTE 0x82
```

Application selection: texts. 

### define EMV_ADK_INF_SEL_PAYINIT_OK

```cpp
#define EMV_ADK_INF_SEL_PAYINIT_OK 0x83
```

Application selection: Init Payment OK. 

### define EMV_ADK_INF_SEL_CHECK_OK

```cpp
#define EMV_ADK_INF_SEL_CHECK_OK 0x85
```

Application selection: Check OK. 

### define EMV_ADK_INF_SEL_BUILD_APPLI_LIST

```cpp
#define EMV_ADK_INF_SEL_BUILD_APPLI_LIST 0x86
```

Application selection: Build Application List. 

### define EMV_ADK_INF_SEL_ANOTHER

```cpp
#define EMV_ADK_INF_SEL_ANOTHER 0x87
```

Application selection: Other. 

### define EMV_ADK_INF_SEL_FINAL

```cpp
#define EMV_ADK_INF_SEL_FINAL 0x88
```

Application selection: Final. 

### define EMV_ADK_INF_SEL_NO

```cpp
#define EMV_ADK_INF_SEL_NO 0x89
```

Application selection: NO. 

### define EMV_ADK_INF_SEL_FINISH_OK

```cpp
#define EMV_ADK_INF_SEL_FINISH_OK 0x8A
```

Application selection: Finished OK. 

### define EMV_ADK_INF_SEL_BLOCK_APPLI

```cpp
#define EMV_ADK_INF_SEL_BLOCK_APPLI 0x8B
```

Application selection: Blocked Application. 

### define EMV_ADK_INF_SEL_BLOCK_CARD

```cpp
#define EMV_ADK_INF_SEL_BLOCK_CARD 0x8C
```

Application selection: Blocked Card. 

### define EMV_ADK_INF_SEL_LOA_PROC

```cpp
#define EMV_ADK_INF_SEL_LOA_PROC 0x8D
```

Application selection: LOA Processing. 

### define EMV_ADK_INF_SEL_UI_LOA_PROC

```cpp
#define EMV_ADK_INF_SEL_UI_LOA_PROC 0x8E
```

Application selection: LOA Processing (uninterrupted) 

### define EMV_ADK_INF_TRANS_CHECK_OK

```cpp
#define EMV_ADK_INF_TRANS_CHECK_OK 0x91
```

Offline transaction processing: Check OK. 

### define EMV_ADK_INF_TRANS_READ_TERM

```cpp
#define EMV_ADK_INF_TRANS_READ_TERM 0x92
```

offline transaction processing: Read Terminal Data 

### define EMV_ADK_INF_TRANS_READ_APPLI

```cpp
#define EMV_ADK_INF_TRANS_READ_APPLI 0x93
```

offline transaction processing: Read Application 

### define EMV_ADK_INF_TRANS_SEL_LANG

```cpp
#define EMV_ADK_INF_TRANS_SEL_LANG 0x95
```

offline transaction processing: Select Language 

### define EMV_ADK_INF_TRANS_CONF_AMOUNT

```cpp
#define EMV_ADK_INF_TRANS_CONF_AMOUNT 0x96
```

offline transaction processing: Confirm Amount 

### define EMV_ADK_INF_TRANS_INITIATE

```cpp
#define EMV_ADK_INF_TRANS_INITIATE 0x97
```

offline transaction processing: Initiation 

### define EMV_ADK_INF_TRANS_READ_CARD_DATA

```cpp
#define EMV_ADK_INF_TRANS_READ_CARD_DATA 0x98
```

offline transaction processing: Read Card Data 

### define EMV_ADK_INF_TRANS_CHECK_APPLI_DATA

```cpp
#define EMV_ADK_INF_TRANS_CHECK_APPLI_DATA 0x99
```

offline transaction processing: Check Application Data 

### define EMV_ADK_INF_TRANS_PROC_RESTRICTION

```cpp
#define EMV_ADK_INF_TRANS_PROC_RESTRICTION 0x9A
```

offline transaction processing: Process Restriction 

### define EMV_ADK_INF_TRANS_CARD_AUTH

```cpp
#define EMV_ADK_INF_TRANS_CARD_AUTH 0x9B
```

offline transaction processing: Card Authentication 

### define EMV_ADK_INF_TRANS_VERIFY

```cpp
#define EMV_ADK_INF_TRANS_VERIFY 0x9C
```

offline transaction processing: Verification 

### define EMV_ADK_INF_TRANS_RISK

```cpp
#define EMV_ADK_INF_TRANS_RISK 0x9D
```

offline transaction processing: Risk 

### define EMV_ADK_INF_TRANS_AAT

```cpp
#define EMV_ADK_INF_TRANS_AAT 0x9E
```

offline transaction processing: AAT (action analysis terminal) 

### define EMV_ADK_INF_TRANS_1GENAC

```cpp
#define EMV_ADK_INF_TRANS_1GENAC 0x9F
```

offline transaction processing: 1st Genac 

### define EMV_ADK_INF_TRANS_VERIFY_CARD

```cpp
#define EMV_ADK_INF_TRANS_VERIFY_CARD 0xA0
```

offline transaction processing: Verify Cardholder 

### define EMV_ADK_INF_TRANS_VERIFY_ABANDON

```cpp
#define EMV_ADK_INF_TRANS_VERIFY_ABANDON 0xA1
```

offline transaction processing: Verify Abandon 

### define EMV_ADK_INF_TRANS_VERIFY_OTHER

```cpp
#define EMV_ADK_INF_TRANS_VERIFY_OTHER 0xA2
```

offline transaction processing: Verify Other 

### define EMV_ADK_INF_TRANS_VERIFY_ONLINE

```cpp
#define EMV_ADK_INF_TRANS_VERIFY_ONLINE 0xA3
```

offline transaction processing: Verify Online 

### define EMV_ADK_INF_TRANS_VERIFY_NOK

```cpp
#define EMV_ADK_INF_TRANS_VERIFY_NOK 0xA4
```

offline transaction processing: Verify NOT OK 

### define EMV_ADK_INF_TRANS_VERIFY_OK

```cpp
#define EMV_ADK_INF_TRANS_VERIFY_OK 0xA5
```

offline transaction processing: Verify OK 

### define EMV_ADK_INF_TRANS_VERIFY_SIGNATURE

```cpp
#define EMV_ADK_INF_TRANS_VERIFY_SIGNATURE 0xA6
```

offline transaction processing: Verify Signature 

### define EMV_ADK_INF_TRANS_1CRYPT_TC

```cpp
#define EMV_ADK_INF_TRANS_1CRYPT_TC 0xA7
```

offline transaction processing: 1st Cryptography TC 

### define EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA

```cpp
#define EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA 0xA8
```

offline transaction processing: 1st Cryptography ARQC CDA 

### define EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER

```cpp
#define EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER 0xA9
```

offline transaction processing: 1st Cryptography ARQC Other 

### define EMV_ADK_INF_TRANS_1CRYPT_AAC

```cpp
#define EMV_ADK_INF_TRANS_1CRYPT_AAC 0xAA
```

offline transaction processing: 1st Cryptography AAC 

### define EMV_ADK_INF_TRANS_1CRYPT_AAR

```cpp
#define EMV_ADK_INF_TRANS_1CRYPT_AAR 0xAB
```

offline transaction processing: 1st Cryptography AAC 

### define EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN

```cpp
#define EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN 0xAC
```

offline transaction processing: 1st Cryptography Unknown 

### define EMV_ADK_INF_ONL_CHECK_OK

```cpp
#define EMV_ADK_INF_ONL_CHECK_OK 0xB1
```

Processing the host response: Check OK. 

### define EMV_ADK_INF_ONL_FALSE

```cpp
#define EMV_ADK_INF_ONL_FALSE 0xB3
```

Processing the host response: False. 

### define EMV_ADK_INF_ONL_TRUE

```cpp
#define EMV_ADK_INF_ONL_TRUE 0xB4
```

Processing the host response: True. 

### define EMV_ADK_INF_ONL_PIN

```cpp
#define EMV_ADK_INF_ONL_PIN 0xB5
```

Processing the host response: PIN. 

### define EMV_ADK_INF_ONL_HOST_AUTH

```cpp
#define EMV_ADK_INF_ONL_HOST_AUTH 0xB6
```

Processing the host response: Host Authorization. 

### define EMV_ADK_INF_ONL_CRIT_SC

```cpp
#define EMV_ADK_INF_ONL_CRIT_SC 0xB7
```

Processing the host response: Cirtical Script. 

### define EMV_ADK_INF_ONL_AC

```cpp
#define EMV_ADK_INF_ONL_AC 0xB8
```

Processing the host response: AC. 

### define EMV_ADK_INF_ONL_2GENAC

```cpp
#define EMV_ADK_INF_ONL_2GENAC 0xB9
```

Processing the host response: 2nd Generate AC. 

### define EMV_ADK_INF_ONL_UNCRIT_SC

```cpp
#define EMV_ADK_INF_ONL_UNCRIT_SC 0xBA
```

Processing the host response: Uncritical Script. 

### define EMV_ADK_INF_TRANS_VERIFY_PARAM

```cpp
#define EMV_ADK_INF_TRANS_VERIFY_PARAM 0xBB
```

Processing the host response: Verify Parameter. 

### define EMV_ADK_INF_FETCH_TXN_TAG_DATA

```cpp
#define EMV_ADK_INF_FETCH_TXN_TAG_DATA 0xBC
```

Function `EMV_CT_fetchTxnTags`. 

### define EMV_ADK_STEP_01

```cpp
#define EMV_ADK_STEP_01 1
```

sub step 1 

### define EMV_ADK_STEP_02

```cpp
#define EMV_ADK_STEP_02 2
```

sub step 2 

### define EMV_ADK_STEP_03

```cpp
#define EMV_ADK_STEP_03 3
```

sub step 3 

### define EMV_ADK_STEP_04

```cpp
#define EMV_ADK_STEP_04 4
```

sub step 4 

### define EMV_ADK_STEP_05

```cpp
#define EMV_ADK_STEP_05 5
```

sub step 5 

### define EMV_ADK_STEP_06

```cpp
#define EMV_ADK_STEP_06 6
```

sub step 6 

### define EMV_ADK_STEP_07

```cpp
#define EMV_ADK_STEP_07 7
```

sub step 7 

### define EMV_ADK_STEP_08

```cpp
#define EMV_ADK_STEP_08 8
```

sub step 8 

### define EMV_ADK_STEP_09

```cpp
#define EMV_ADK_STEP_09 9
```

sub step 9 

### define EMV_ADK_STEP_10

```cpp
#define EMV_ADK_STEP_10 10
```

sub step 10 

### define EMV_ADK_STEP_11

```cpp
#define EMV_ADK_STEP_11 11
```

sub step 11 

### define EMV_ADK_STEP_12

```cpp
#define EMV_ADK_STEP_12 12
```

sub step 12 

### define EMV_ADK_STEP_13

```cpp
#define EMV_ADK_STEP_13 13
```

sub step 13 

### define EMV_ADK_STEP_14

```cpp
#define EMV_ADK_STEP_14 14
```

sub step 14 

### define EMV_ADK_STEP_15

```cpp
#define EMV_ADK_STEP_15 15
```

sub step 15 

### define EMV_ADK_STEP_16

```cpp
#define EMV_ADK_STEP_16 16
```

sub step 16 

### define EMV_ADK_STEP_17

```cpp
#define EMV_ADK_STEP_17 17
```

sub step 17 

### define EMV_ADK_STEP_18

```cpp
#define EMV_ADK_STEP_18 18
```

sub step 18 

### define EMV_ADK_STEP_19

```cpp
#define EMV_ADK_STEP_19 19
```

sub step 19 

### define EMV_ADK_STEP_20

```cpp
#define EMV_ADK_STEP_20 20
```

sub step 20 

### define EMV_ADK_STEP_21

```cpp
#define EMV_ADK_STEP_21 21
```

sub step 21 

### define EMV_ADK_STEP_22

```cpp
#define EMV_ADK_STEP_22 22
```

sub step 22 

### define EMV_ADK_STEP_23

```cpp
#define EMV_ADK_STEP_23 23
```

sub step 23 

### define EMV_ADK_STEP_24

```cpp
#define EMV_ADK_STEP_24 24
```

sub step 24 

### define EMV_ADK_STEP_25

```cpp
#define EMV_ADK_STEP_25 25
```

sub step 25 

### define EMV_ADK_STEP_26

```cpp
#define EMV_ADK_STEP_26 26
```

sub step 26 

### define EMV_ADK_STEP_27

```cpp
#define EMV_ADK_STEP_27 27
```

sub step 27 

### define EMV_ADK_STEP_28

```cpp
#define EMV_ADK_STEP_28 28
```

sub step 28 

### define EMV_ADK_STEP_29

```cpp
#define EMV_ADK_STEP_29 29
```

sub step 29 

### define EMV_ADK_STEP_30

```cpp
#define EMV_ADK_STEP_30 30
```

sub step 30 

### define EMV_ADK_DF62_ERR_POS1_CHIP_RESET

```cpp
#define EMV_ADK_DF62_ERR_POS1_CHIP_RESET 0x1000u
```

reset (ATR) during technology selection 

### define EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID

```cpp
#define EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID 0x2000u
```

SELECT during build of candidate list using explicit mode. 

### define EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE

```cpp
#define EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE 0x2100u
```

SELECT during build of candidate list using PSE. 

### define EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE

```cpp
#define EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE 0x2200u
```

READ RECORD during build of candidate list using PSE. 

### define EMV_ADK_DF62_ERR_POS1_SEL_FINAL

```cpp
#define EMV_ADK_DF62_ERR_POS1_SEL_FINAL 0x3000u
```

SELECT during final selection. 

### define EMV_ADK_DF62_ERR_POS1_GPO

```cpp
#define EMV_ADK_DF62_ERR_POS1_GPO 0x4000u
```

GET PROCESSING OPTIONS. 

### define EMV_ADK_DF62_ERR_POS1_READ

```cpp
#define EMV_ADK_DF62_ERR_POS1_READ 0x5000u
```

READ RECORD. 

### define EMV_ADK_DF62_ERR_POS1_INT_AUTH

```cpp
#define EMV_ADK_DF62_ERR_POS1_INT_AUTH 0x6000u
```

INTERNAL AUTHENTICATE. 

### define EMV_ADK_DF62_ERR_POS1_GETDATA_PTC

```cpp
#define EMV_ADK_DF62_ERR_POS1_GETDATA_PTC 0x7001u
```

GET DATA for PIN try counter. 

### define EMV_ADK_DF62_ERR_POS1_GETCHALLENGE

```cpp
#define EMV_ADK_DF62_ERR_POS1_GETCHALLENGE 0x7100u
```

GET CHALLENGE. 

### define EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN

```cpp
#define EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN 0x7210u
```

VERIFY for enciphered PIN. 

### define EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN

```cpp
#define EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN 0x7220u
```

VERIFY for plaintext PIN. 

### define EMV_ADK_DF62_ERR_POS1_GETDATA_ATC

```cpp
#define EMV_ADK_DF62_ERR_POS1_GETDATA_ATC 0x8001u
```

GET DATA for ATC. 

### define EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC

```cpp
#define EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC 0x8002u
```

GET DATA for LOATC. 

### define EMV_ADK_DF62_ERR_POS1_GENAC_1

```cpp
#define EMV_ADK_DF62_ERR_POS1_GENAC_1 0x9001u
```

1st GENERATE AC without CDA 

### define EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA

```cpp
#define EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA 0x9011u
```

1st GENERATE AC with CDA 

### define EMV_ADK_DF62_ERR_POS1_EXTAUTH

```cpp
#define EMV_ADK_DF62_ERR_POS1_EXTAUTH 0xA000u
```

EXTERNAL AUTHENTICATE. 

### define EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT

```cpp
#define EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT 0xB100u
```

critical script command 

### define EMV_ADK_DF62_ERR_POS1_GENAC_2

```cpp
#define EMV_ADK_DF62_ERR_POS1_GENAC_2 0x9002u
```

2nd GENERATE AC without CDA 

### define EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA

```cpp
#define EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA 0x9012u
```

2nd GENERATE AC with CDA 

### define EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT

```cpp
#define EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT 0xB200u
```

non critical script command 

### define EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER

```cpp
#define EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER 0x0000u
```

error in transport layer (T=0, T=1) 

### define EMV_ADK_DF62_ERR_POS2_BASE_ERROR

```cpp
#define EMV_ADK_DF62_ERR_POS2_BASE_ERROR 0x0001u
```

base error (wrong length of R-APDU) 

### define EMV_ADK_DF62_ERR_POS2_RAPDU

```cpp
#define EMV_ADK_DF62_ERR_POS2_RAPDU 0xFFFFu
```

R-APDU data with wrong content. 

### define EMV_ADK_DF62_ERR_POS3_CHIPCARD

```cpp
#define EMV_ADK_DF62_ERR_POS3_CHIPCARD 0x01
```

chipcard :-) 

### define EMV_ADK_DF62_ERR_POS3_TERMINAL

```cpp
#define EMV_ADK_DF62_ERR_POS3_TERMINAL 0x02
```

terminal 

### define EMV_ADK_DF62_ERR_POS3_ACQUIRER

```cpp
#define EMV_ADK_DF62_ERR_POS3_ACQUIRER 0x03
```

Authorization system. 

### define EMV_ADK_DF62_ERR_POS3_CARDHOLDER

```cpp
#define EMV_ADK_DF62_ERR_POS3_CARDHOLDER 0x04
```

cardholder 

### define EMV_ADK_DF62_ERR_POS7_ABORT

```cpp
#define EMV_ADK_DF62_ERR_POS7_ABORT 0x01
```

abort of transaction or end of transaction without TC 

### define EMV_ADK_DF62_ERR_POS7_MAG_FALLBACK

```cpp
#define EMV_ADK_DF62_ERR_POS7_MAG_FALLBACK 0x02
```

magstripe fallback transaction 

### define EMV_CT_INPUT_TRM_TYPE

```cpp
#define EMV_CT_INPUT_TRM_TYPE 0x01
```

B1b1: [EMV_CT_TERMDATA_STRUCT::TermTyp](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp). 

### define EMV_CT_INPUT_TRM_CURRENCY

```cpp
#define EMV_CT_INPUT_TRM_CURRENCY 0x02
```

B1b2: [EMV_CT_TERMDATA_STRUCT::CurrencyTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans). 

### define EMV_CT_INPUT_TRM_EXP_CURRENCY

```cpp
#define EMV_CT_INPUT_TRM_EXP_CURRENCY 0x04
```

B1b3: [EMV_CT_TERMDATA_STRUCT::ExpTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans). 

### define EMV_CT_INPUT_TRM_COUNTRY_CODE

```cpp
#define EMV_CT_INPUT_TRM_COUNTRY_CODE 0x08
```

B1b4: [EMV_CT_TERMDATA_STRUCT::TermCountryCode](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcountrycode). 

### define EMV_CT_INPUT_TRM_CAPABILITIES

```cpp
#define EMV_CT_INPUT_TRM_CAPABILITIES 0x10
```

B1b5: [EMV_CT_TERMDATA_STRUCT::TermCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcap). 

### define EMV_CT_INPUT_TRM_ADD_CAPS

```cpp
#define EMV_CT_INPUT_TRM_ADD_CAPS 0x20
```

B1b6: [EMV_CT_TERMDATA_STRUCT::TermAddCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termaddcap). 

### define EMV_CT_INPUT_TRM_ID

```cpp
#define EMV_CT_INPUT_TRM_ID 0x40
```

B1b7: [EMV_CT_TERMDATA_STRUCT::TermIdent](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termident). 

### define EMV_CT_INPUT_TRM_LANGUAGES

```cpp
#define EMV_CT_INPUT_TRM_LANGUAGES 0x01
```

B2b1: [EMV_CT_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang). 

### define EMV_CT_INPUT_TRM_IFD_SERIAL

```cpp
#define EMV_CT_INPUT_TRM_IFD_SERIAL 0x02
```

B2b2: [EMV_CT_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber). 

### define EMV_CT_INPUT_TRM_KERNEL_VERSION

```cpp
#define EMV_CT_INPUT_TRM_KERNEL_VERSION 0x04
```

B2b3: [EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion). 

### define EMV_CT_INPUT_TRM_FRAMEWORK_VERSION

```cpp
#define EMV_CT_INPUT_TRM_FRAMEWORK_VERSION 0x08
```

B2b4: [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion). 

### define EMV_CT_INPUT_TRM_L1DRIVER_VERSION

```cpp
#define EMV_CT_INPUT_TRM_L1DRIVER_VERSION 0x10
```

B2b5: [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion). 

### define EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE

```cpp
#define EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE 0x00
```

process default action codes prior to 1st GENERATE AC 

### define EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER

```cpp
#define EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER 0x01
```

process default action codes after 1st GENERATE AC 

### define EMV_CT_CHECKSUM_DEFAULT

```cpp
#define EMV_CT_CHECKSUM_DEFAULT "\x00\x00\x00\x00\x00"
```

0x00 means: default    --> when initialized with 0x00 0x00 0x00 then all params set as default mentioned in comment.    For changing the default the corresponding Bit must be set:    e.g. for Transaction Log disabling, the corresponding Bit must be activated = 1 

### define EMV_CT_CHECKSUM_INCLUDE_VERSION

```cpp
#define EMV_CT_CHECKSUM_INCLUDE_VERSION 0x01
```

B1b1, default: NO --> For checksum only. 

### define EMV_CT_CHECKSUM_TRANSACTION_LOG

```cpp
#define EMV_CT_CHECKSUM_TRANSACTION_LOG 0x02
```

B1b2, default: YES --> De/activated per application. 

### define EMV_CT_CHECKSUM_EXCEPTION_FILE

```cpp
#define EMV_CT_CHECKSUM_EXCEPTION_FILE 0x04
```

B1b3, default: YES --> De/activated per application. 

### define EMV_CT_CHECKSUM_FORCE_ONLINE

```cpp
#define EMV_CT_CHECKSUM_FORCE_ONLINE 0x08
```

B1b4, default: YES --> De/activated per application and by merchant. 

### define EMV_CT_CHECKSUM_FORCE_ACCEPTANCE

```cpp
#define EMV_CT_CHECKSUM_FORCE_ACCEPTANCE 0x10
```

B1b5, default: YES --> De/activated per application and by merchant. 

### define EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE

```cpp
#define EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE 0x20
```

B1b6, default: NO --> For checksum only --> application related decision. 

### define EMV_CT_CHECKSUM_SUPPORT_PSE

```cpp
#define EMV_CT_CHECKSUM_SUPPORT_PSE 0x40
```

B1b7, default: YES --> De/activated per transaction (EMV_Select) 

### define EMV_CT_CHECKSUM_ACCOUNT_TYPE

```cpp
#define EMV_CT_CHECKSUM_ACCOUNT_TYPE 0x80
```

B1b8, default: YES --> De/activated per application. 

### define EMV_CT_CHECKSUM_SUPPORT_ADVICES

```cpp
#define EMV_CT_CHECKSUM_SUPPORT_ADVICES 0x01
```

B2b1, default: NO --> Support of advices on host prot. 

### define EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF

```cpp
#define EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF 0x02
```

B2b2, default: YES --> Cardholder Confirmation. 

### define EMV_CT_CHECKSUM_PIN_BYPASS

```cpp
#define EMV_CT_CHECKSUM_PIN_BYPASS 0x04
```

B2b3, default: NO --> PIN bypass. 

### define EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL

```cpp
#define EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL 0x08
```

B2b4, default: YES --> Default TDOL. 

### define EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE

```cpp
#define EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE 0x10
```

B2b5, default: YES --> Batch data capture. 

### define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS

```cpp
#define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS 0x20
```

B2b6, default: YES --> Issuer initiated referrals. 

### define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD

```cpp
#define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD 0x40
```

B2b7, default: NO --> Card initiated referrals. 

### define EMV_CT_CHECKSUM_MULTILANG_SUPPORT

```cpp
#define EMV_CT_CHECKSUM_MULTILANG_SUPPORT 0x80
```

B2b7, default: YES since L2 7.0.2. 

### define EMV_CT_CHECKSUM_PIN_BYPASS_ONCE

```cpp
#define EMV_CT_CHECKSUM_PIN_BYPASS_ONCE 0x01
```

B3b1, default: NO --> No subsequent PIN bypass when PIN bypass is active. 

### define EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS

```cpp
#define EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS 20
```

Max. number of non-EMVCo-tags included in additional tags ([EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm) and [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd)) 

### define EMV_CT_MAX_TAGLIST_SIZE

```cpp
#define EMV_CT_MAX_TAGLIST_SIZE 20
```

Maximum number of tags used in [EMV_CT_TAGLIST_STRUCT](struct_e_m_v___c_t___t_a_g_l_i_s_t___s_t_r_u_c_t.md). 

### define EMV_CT_MAX_APP_VERS

```cpp
#define EMV_CT_MAX_APP_VERS 10
```


### define EMV_CT_INPUT_APL_VERSION

```cpp
#define EMV_CT_INPUT_APL_VERSION 0x01
```

B1b1: [EMV_CT_APPLIDATA_STRUCT::VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum), application version number. 

### define EMV_CT_INPUT_APL_NAME

```cpp
#define EMV_CT_INPUT_APL_NAME 0x02
```

B1b2: [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname), application name. 

### define EMV_CT_INPUT_APL_ASI

```cpp
#define EMV_CT_INPUT_APL_ASI 0x04
```

B1b3: [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi), ASI. 

### define EMV_CT_INPUT_APL_MERCHANT_CATCODE

```cpp
#define EMV_CT_INPUT_APL_MERCHANT_CATCODE 0x08
```

B1b4: [EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey), merchant category code. 

### define EMV_CT_INPUT_APL_TID

```cpp
#define EMV_CT_INPUT_APL_TID 0x10
```

B1b5: [EMV_CT_APPLIDATA_STRUCT::TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident), terminal ID. 

### define EMV_CT_INPUT_APL_FLOOR_LIMIT

```cpp
#define EMV_CT_INPUT_APL_FLOOR_LIMIT 0x20
```

B1b6: [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit), floor limt. 

### define EMV_CT_INPUT_APL_THRESH

```cpp
#define EMV_CT_INPUT_APL_THRESH 0x40
```

B1b7: [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold), threshhold value. 

### define EMV_CT_INPUT_APL_TARGET

```cpp
#define EMV_CT_INPUT_APL_TARGET 0x80
```

B1b8: [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage), target percentage. 

### define EMV_CT_INPUT_APL_MAXTARGET

```cpp
#define EMV_CT_INPUT_APL_MAXTARGET 0x01
```

B2b1: [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage), maximum target percentage. 

### define EMV_CT_INPUT_APL_TAC_DENIAL

```cpp
#define EMV_CT_INPUT_APL_TAC_DENIAL 0x02
```

B2b2: [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial), TAC Denial. 

### define EMV_CT_INPUT_APL_TAC_ONLINE

```cpp
#define EMV_CT_INPUT_APL_TAC_ONLINE 0x04
```

B2b3: [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline), TAC Online. 

### define EMV_CT_INPUT_APL_TAC_DEFAULT

```cpp
#define EMV_CT_INPUT_APL_TAC_DEFAULT 0x08
```

B2b4: [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault), TAC Default. 

### define EMV_CT_INPUT_APL_TDOL

```cpp
#define EMV_CT_INPUT_APL_TDOL 0x10
```

B2b5: [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol), Default TDOL. 

### define EMV_CT_INPUT_APL_DDOL

```cpp
#define EMV_CT_INPUT_APL_DDOL 0x20
```

B2b6: [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol), Default DDOL. 

### define EMV_CT_INPUT_APL_MERCHANT_IDENT

```cpp
#define EMV_CT_INPUT_APL_MERCHANT_IDENT 0x40
```

B2b7: [EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident), merchant identification. 

### define EMV_CT_INPUT_APL_ADD_TAGS

```cpp
#define EMV_CT_INPUT_APL_ADD_TAGS 0x80
```

B2b8: [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm), additional terminal tags. 

### define EMV_CT_INPUT_APL_MAND_TAGS

```cpp
#define EMV_CT_INPUT_APL_MAND_TAGS 0x01
```

B3b1: [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd), mandatory tags. 

### define EMV_CT_INPUT_APL_TERM_CAPS

```cpp
#define EMV_CT_INPUT_APL_TERM_CAPS 0x02
```

B3b2: [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap), terminal capabilities for app. 

### define EMV_CT_INPUT_APL_FLOW_CAPS

```cpp
#define EMV_CT_INPUT_APL_FLOW_CAPS 0x04
```

B3b3: [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap), flow capabilities. 

### define EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP

```cpp
#define EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP 0x08
```

B3b4: [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported), CVM in AIP disabled. 

### define EMV_CT_INPUT_APL_COUNTRY_CODE

```cpp
#define EMV_CT_INPUT_APL_COUNTRY_CODE 0x10
```

B3b5: [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm), country code. 

### define EMV_CT_INPUT_APL_ADD_TERM_CAPS

```cpp
#define EMV_CT_INPUT_APL_ADD_TERM_CAPS 0x20
```

B3b6: [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap), addtional terminal capabilties for tapp. 

### define EMV_CT_INPUT_APL_PRIO_APPS

```cpp
#define EMV_CT_INPUT_APL_PRIO_APPS 0x40
```

B3b7: [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio), priority application. 

### define EMV_CT_INPUT_APL_MID

```cpp
#define EMV_CT_INPUT_APL_MID 0x80
```

B3b8: [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids), MID relation. 

### define EMV_CT_INPUT_APL_EMV_APPKIND

```cpp
#define EMV_CT_INPUT_APL_EMV_APPKIND 0x01
```

B4b1: [EMV_CT_APPLIDATA_STRUCT::EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application), EMV Application Type. 

### define EMV_CT_INPUT_APL_SPECIAL_TXN

```cpp
#define EMV_CT_INPUT_APL_SPECIAL_TXN 0x02
```

B4b2: [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx), configuration of special transactions. 

### define EMV_CT_INPUT_APL_FALLBACK

```cpp
#define EMV_CT_INPUT_APL_FALLBACK 0x04
```

B4b3: [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling), fallback handling for this app. 

### define EMV_CT_INPUT_APL_CDA

```cpp
#define EMV_CT_INPUT_APL_CDA 0x08
```

B4b4: [EMV_CT_APPLIDATA_STRUCT::CDAProcessing](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-cdaprocessing), CDA mode. 

### define EMV_CT_INPUT_APL_AC_BEFOREAFTER

```cpp
#define EMV_CT_INPUT_APL_AC_BEFOREAFTER 0x10
```

B4b5: [EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-acbeforeafter), TAC processing for offline only. 

### define EMV_CT_INPUT_APL_POS_ENTRY

```cpp
#define EMV_CT_INPUT_APL_POS_ENTRY 0x20
```

B4b6: [EMV_CT_APPLIDATA_STRUCT::POS_EntryMode](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-pos-entrymode), POS entry mode. 

### define EMV_CT_INPUT_APL_TRM_TYPE

```cpp
#define EMV_CT_INPUT_APL_TRM_TYPE 0x40
```

B4b7: [EMV_CT_APPLIDATA_STRUCT::App_TermTyp](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termtyp), terminal type. 

### define EMV_CT_INPUT_APL_CUSTOMER_CVM

```cpp
#define EMV_CT_INPUT_APL_CUSTOMER_CVM 0x80
```

B4b8: [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm), customer CVM. 

### define EMV_CT_INPUT_APL_CHECKSUM_PARAMS

```cpp
#define EMV_CT_INPUT_APL_CHECKSUM_PARAMS 0x01
```

B5b1: [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params), checksum parmeters. 

### define EMV_CT_INPUT_APL_CHECKSUM

```cpp
#define EMV_CT_INPUT_APL_CHECKSUM 0x02
```

B5b2: [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco), EMVCo checksum for this app. 

### define EMV_CT_INPUT_APL_MASTER_AID

```cpp
#define EMV_CT_INPUT_APL_MASTER_AID 0x04
```

B5b3: [EMV_CT_APPLIDATA_STRUCT::MasterAID](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-masteraid), Master AID for groups. 

### define EMV_CT_INPUT_APL_ADD_CRD_TAGS

```cpp
#define EMV_CT_INPUT_APL_ADD_CRD_TAGS 0x08
```

B5b4: [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd), additional tags available on the ICC. 

### define EMV_CT_INPUT_APL_ADD_VERSIONS

```cpp
#define EMV_CT_INPUT_APL_ADD_VERSIONS 0x10
```

B5b5: [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no), additional version number of AID (optional) 

### define EMV_CT_INPUT_APL_SEC_LIMIT

```cpp
#define EMV_CT_INPUT_APL_SEC_LIMIT 0x20
```

B5b6: [EMV_CT_APPLIDATA_STRUCT::Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit), limit below which other terminal capabilties apply (optional) 

### define EMV_CT_INPUT_APL_SEC_CAPS

```cpp
#define EMV_CT_INPUT_APL_SEC_CAPS 0x40
```

B5b7: [EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit), terminal capabilties below the security limit (optional) 

### define EMV_CT_INPUT_APL_TXN_TYPES_SALE

```cpp
#define EMV_CT_INPUT_APL_TXN_TYPES_SALE 0x01
```

B6b1: [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale) additional transaction types handled as sale (optional) 

### define EMV_CT_INPUT_APL_TXN_TYPES_CASH

```cpp
#define EMV_CT_INPUT_APL_TXN_TYPES_CASH 0x02
```

B6b2: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash) additional transaction types handled as cash (optional) 

### define EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK

```cpp
#define EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK 0x04
```

B6b3: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback) additional transaction types handled as cashack (optional) 

### define EMV_CT_INPUT_APL_TXN_TYPES_REFUND

```cpp
#define EMV_CT_INPUT_APL_TXN_TYPES_REFUND 0x08
```

B6b4: [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund) additional transaction types handled as refund (optional) 

### define EMV_CT_INPUT_APL_DCR_LIST_IDS

```cpp
#define EMV_CT_INPUT_APL_DCR_LIST_IDS 0x10
```

B6b5: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids) Data Container Read List for DPAS-2 Data Storage: list of container IDs. 

### define EMV_CT_INPUT_APL_DCR_LIST_RANGES

```cpp
#define EMV_CT_INPUT_APL_DCR_LIST_RANGES 0x20
```

B6b6: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges) Data Container Read List for DPAS-2 Data Storage: list of container ID ranges. 

### define CVM_CONTINUE

```cpp
#define CVM_CONTINUE 0x00
```

continue transaction 

### define CVM_DEFAULT_SIGN

```cpp
#define CVM_DEFAULT_SIGN 0x01
```

execute CVM signature 

### define CVM_DEFAULT_ONLINE_PIN

```cpp
#define CVM_DEFAULT_ONLINE_PIN 0x02
```

execute CVM online PIN 

### define CVM_ABORT

```cpp
#define CVM_ABORT 0x03
```

abort transaction (only for `AIP_CVM_not_supported`) 

### define FORCE_RISK_MANAGEMENT

```cpp
#define FORCE_RISK_MANAGEMENT 0x01
```

B1b1: Perform Terminal Risk Management regardless of Application Interchange Profile bit "Terminal risk management is to be performed". **Important Note** Enable this flag because it is required according EMVCo Book 3, chapter 10.6 Terminal Risk Management. 

### define BLACKLIST

```cpp
#define BLACKLIST 0x02
```

B1b2: Enables blacklist/transaction log callback (aka exception list, hot list), [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist)) will be invoked    Depends on [EMV_CT_TRXOP_HOTLST_LOG_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-hotlst-log-callback) and [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define TRANSACTION_LOG

```cpp
#define TRANSACTION_LOG 0x04
```

B1b3: Enables blacklist/transaction log callback for avoiding spit payments according EMVCo Book 3, chapter 10.6.1 Floor Limits. [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist)) will be invoked    Depends on [EMV_CT_TRXOP_HOTLST_LOG_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-hotlst-log-callback) and [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define PIN_BYPASS

```cpp
#define PIN_BYPASS 0x08
```

B1b4: PIN bypass supported. 

### define FORCE_ONLINE

```cpp
#define FORCE_ONLINE 0x10
```

B1b5: Feature "Force online" supported (suspicious customer). This relates to Terminal Verification Result B4b4 "Merchant forced transaction online". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define FORCE_ACCEPTANCE

```cpp
#define FORCE_ACCEPTANCE 0x20
```

B1b6: Feature "Force acceptance" supported (accept on merchant's risk). **Use with care**: This overrules the card's or terminal or authorisation host decision. Note: Force Acceptance is performed if both flags are set, the support flag here and the transaction flow option [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance). 

### define CASH_SUPPORT

```cpp
#define CASH_SUPPORT 0x01
```

B2b1: Support of cash transactions. 

### define CASHBACK_SUPPORT

```cpp
#define CASHBACK_SUPPORT 0x02
```

B2b2: Support of cashback transactions. 

### define EMV_CT_CHECK_INCONS_TRACK2_PAN

```cpp
#define EMV_CT_CHECK_INCONS_TRACK2_PAN 0x04
```

B2b3: Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC.    Mandated for MasterCard and Amex.    Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan) and [TAG_5F24_APP_EXP_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f24-app-exp-date).    See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-fallback-on-incons-track2). 

### define EMV_CT_CONF_AMOUNT_PIN

```cpp
#define EMV_CT_CONF_AMOUNT_PIN 0x08
```

B2b4: Confirm amount and enter PIN in one display.    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-amount-conf).    May be deactivated by [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define EMV_CT_DOMESTIC_CHECK

```cpp
#define EMV_CT_DOMESTIC_CHECK 0x10
```

B2b5: Callback function [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)) will be called.    Needs to be activated per transaction by [EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-local-chck-callback).    May be deactivated by [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define TRANSACTION_TYPE_17_FOR_CASH

```cpp
#define TRANSACTION_TYPE_17_FOR_CASH 0x20
```

B2b6: Transaction type 17 for MasterCard cash transactions. 

Use [EMV_ADK_TRAN_TYPE_MASTERCARD_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-mastercard-cash) for cash transactions 

 Note: Cash transaction types are defined in [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash). 

 The modified transaction type is used towards card and put out in [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 


### define EMV_CT_CHECK_INCONS_TRACK2_NO_EXP

```cpp
#define EMV_CT_CHECK_INCONS_TRACK2_NO_EXP 0x40
```

B2b7: Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC.    Mandated for MasterCard and Amex.    Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan)   Only effective if [EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan) is deactivated. See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-fallback-on-incons-track2). 

### define TRANSACTION_TYPE_30_FOR_PREAUTH

```cpp
#define TRANSACTION_TYPE_30_FOR_PREAUTH 0x80
```

B2b8: Amex Pre-Authorization with transaction type 30. 

**Note**: Pre-Authorization and reservation transactions are equivalent. They are initiated with [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a) or [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b). 



 Use [EMV_ADK_TRAN_TYPE_AMEX_PREAUTH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-amex-preauth) for pre-authorization resp. reservation transactions 

 The modified transaction type is used towards card and put out in [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 


### define REFERRAL_AFTER_TRX

```cpp
#define REFERRAL_AFTER_TRX 0x01
```

B3b1: In case voice referral is required: Chip transaction is terminated with AAC. Referral transaction is performed subsequently as "CardNotPresent" (German handling). 

### define DCC_CHECK

```cpp
#define DCC_CHECK 0x02
```

B3b2: Enable DCC (Dynamic currency conversion).    Invocation depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks), [EMV_CT_TRXOP_DCC_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-dcc-callback), and [EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-dcc-callback-always). 

### define REFUND_CONFIRM_AMOUNT

```cpp
#define REFUND_CONFIRM_AMOUNT 0x04
```

B3b3: Confirm amount during refund transaction    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-amount-conf) and [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define EMV_CT_USE_CFG_APPL_NAME

```cpp
#define EMV_CT_USE_CFG_APPL_NAME 0x08
```

B3b4: **Use with care**: Do not use card's application name (EMVCo rule: 9F12 prior to 50) but always the default label. Effective for cardholder's application selection. 

### define EMV_CT_FALLBACK_ON_INCONS_TRACK2

```cpp
#define EMV_CT_FALLBACK_ON_INCONS_TRACK2 0x10
```

B3b5: Valid only in case of activated [EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan).    If activated: Check will be done before Cardholder Verification. In case of fail EMV ADK will process fallback handling (may result in [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback)). E.g. required for German dcpos 2.4, may be used for "M/Chip Functional Architecture", AMEX ED-031 in test plan ver. 4.2.    If not activated: Check will be done just before processing 1st cryptogram. If fail: GENAC1 will be requested with AAC. E.g. required for MasterCard REQ22, AMEX ED-031 in Swedish AMEX test plan 1.0. 

### define EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE

```cpp
#define EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE 0x20
```

B3b6: Customer amount confirmation in case of CVM signature    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-amount-conf) and [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define EMV_CT_SDA_SELECTED_TVR_ON

```cpp
#define EMV_CT_SDA_SELECTED_TVR_ON 0x40
```

B3b7: Activate the support of the TVR byte SDA selected, introduced in Nov 2013 for kernels not yet supporting this feature, configurable per AID (for kernels supporting this it'll be always activated, config is don't care) 

### define EMV_CASHBACK_OFFLINE_SUPPORT

```cpp
#define EMV_CASHBACK_OFFLINE_SUPPORT 0x80
```

B3b8: If set cash back transactions are not automatically forced online. **Use with care**: Usual business rules require online processing. 

### define REFUND_PROCESSING_RESTRICTIONS

```cpp
#define REFUND_PROCESSING_RESTRICTIONS 0x01
```

B4b1: Perform Processing restrictions for Refund transactions (French Refund Requirements). 

### define REFUND_NO_GENERATE_AC

```cpp
#define REFUND_NO_GENERATE_AC 0x02
```

B4b2: Do not perform Generate AC when finishing Refund transactions (French Refund Requirements). 

### define REFUND_FLOW_INTERAC

```cpp
#define REFUND_FLOW_INTERAC 0x04
```

B4b3: Perform full EMV transaction although transaction type is refund. **Use with care**: Is is recommended by EMVCo to abort the transaction once the account data has been read. Activation of the "full" flow requires that all cards and background systems support it. 

### define REFUND_NO_ZERO_AMOUNT

```cpp
#define REFUND_NO_ZERO_AMOUNT 0x08
```

B4b4: Do NOT set the amount to zero in CDOL1 for Refund transactions with Generate AC. **Use with care**: Card read transactions are just for getting the account data and it is best practice to "close" the card session by requesting an ARQC with zero amount. 

### define DPAS_DATA_STORAGE_SUPPORT

```cpp
#define DPAS_DATA_STORAGE_SUPPORT 0x10
```

B4b5: Support of Data Storage for D-PAS Connect. Useful only for Discover AIDs. 

### define DPAS_EXTENDED_LOGGING_SUPPORT

```cpp
#define DPAS_EXTENDED_LOGGING_SUPPORT 0x20
```

B4b6: Support of Extended Logging for D-PAS Connect. Useful only for Discover AIDs. 

### define DPAS_CDCVM_SUPPORT

```cpp
#define DPAS_CDCVM_SUPPORT 0x40
```

B4b7: Support of Consumer Device CVM for D-PAS Connect. Useful only for Discover AIDs. 

### define APP_FLOW_VISA_QUASI_CASH

```cpp
#define APP_FLOW_VISA_QUASI_CASH 0x80
```

B4b8: Convert transaction type from '01' to '11' indicating VISA Quasi Cash. Use in conjunction with [EMV_CT_APPLIDATA_TYPE.TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash) if AUC checks shall be applied, that is both values '01' and '11' should be set. 

### define APP_FLOW_CASHBACK_TRANS_TYPE_00

```cpp
#define APP_FLOW_CASHBACK_TRANS_TYPE_00 0x01
```

B5b1: For cashback transaction (amount other != 0) use transaction type '00' as required by Visa. 

[EMV_CT_APPLIDATA_TYPE.TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback) will be adjusted automatically to include '00' for CVM processing. 

 For L2 kernel version <= 7.0.3 there is a work-around to temporarily set back to given transaction type (usually '09', must not indicate sale or cash) during AUC checks. 


### define REFUND_FLOW_ARQC

```cpp
#define REFUND_FLOW_ARQC 0x02
```

B5b2: Like standard refund flow but request ARQC at first Generate AC (Discover requirement) 

### define CDA_EMV_MODE_1

```cpp
#define CDA_EMV_MODE_1 0
```

EMVCo CDA mode 1: do CDA for ARQC: yes, for TC after successful online communication: yes. 

### define CDA_EMV_MODE_2

```cpp
#define CDA_EMV_MODE_2 1
```

EMVCo CDA mode 2: do CDA for ARQC: yes, for TC after successful online communication: no. 

### define CDA_EMV_MODE_3

```cpp
#define CDA_EMV_MODE_3 2
```

EMVCo CDA mode 3: do CDA for ARQC: no, for TC after successful online communication: no. 

### define CDA_EMV_MODE_4

```cpp
#define CDA_EMV_MODE_4 3
```

EMVCo CDA mode 4: do CDA for ARQC: no, for TC after successful online communication: yes. 

### define FB_DEFAULT_EMVCO

```cpp
#define FB_DEFAULT_EMVCO 0x00
```

Fallback handling like described by EMVCo. 

### define FB_GERMAN_POS_SPEC

```cpp
#define FB_GERMAN_POS_SPEC 0x01
```

Fallback handling according to German spec. Additional specification is done by [EMV_ADK_FALLBACK_AFTER_CVM_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-fallback-after-cvm-no) and [EMV_ADK_FALLBACK_AFTER_CVM_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-fallback-after-cvm-yes). 

### define FB_NO_UNATTENDED_FALLB

```cpp
#define FB_NO_UNATTENDED_FALLB 0x80
```

Unattended terminal: Fallback forbidden. 

### define FB_NEVER

```cpp
#define FB_NEVER 0x00
```

fallback to magstripe forbidden 

### define FB_CHIP_APP

```cpp
#define FB_CHIP_APP 0x01
```

fallback allowed, but not in case of 



1. blocked chip -# a chip application assigned to this magstripe application is blocked 


### define FB_APP

```cpp
#define FB_APP 0x02
```

fallback allowed, but not in case a chip application assigned to this magstripe application is blocked 

### define FB_CHIP

```cpp
#define FB_CHIP 0x03
```

fallback allowed but not in case of blocked chip 

### define FB_ALWAYS

```cpp
#define FB_ALWAYS 0x04
```

fallback allowed in every case 

### define FB_OPT_CASHBACK

```cpp
#define FB_OPT_CASHBACK 0x01
```

fallback magstripe application supports payment with cash back 

### define INPUT_SEL_AMOUNT

```cpp
#define INPUT_SEL_AMOUNT 0x01
```

B1b1: `txn` amount, [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount). 

### define INPUT_SEL_AMOUNT_CURRENCY

```cpp
#define INPUT_SEL_AMOUNT_CURRENCY 0x02
```

B1b2: `currency` of txn, [EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans). 

### define INPUT_SEL_CUREXPONENT

```cpp
#define INPUT_SEL_CUREXPONENT 0x04
```

B1b3: `currency` exponent of txn, [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans). 

### define INPUT_SEL_DATE

```cpp
#define INPUT_SEL_DATE 0x08
```

B1b4: `date` of txn, [EMV_CT_PAYMENT_STRUCT::Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date). 

### define INPUT_SEL_TIME

```cpp
#define INPUT_SEL_TIME 0x10
```

B1b5: `time` of txn, [EMV_CT_PAYMENT_STRUCT::Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time). 

### define INPUT_SEL_TTYPE

```cpp
#define INPUT_SEL_TTYPE 0x20
```

B1b6: `transaction` type of txn, [EMV_CT_SELECT_STRUCT::TransType](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-transtype). 

### define INPUT_SEL_EXCLUDE_AID

```cpp
#define INPUT_SEL_EXCLUDE_AID 0x40
```

B1b7: `AIDs` to exclude for this transaction, [EMV_CT_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids). 

### define INPUT_SEL_BUILDLIST

```cpp
#define INPUT_SEL_BUILDLIST 0x80
```

B1b8: `build` the candidate list or not, [EMV_CT_SELECT_STRUCT::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist). 

### define INPUT_SEL_FORCE_ONLINE

```cpp
#define INPUT_SEL_FORCE_ONLINE 0x01
```

B2b1: `force` it online (suspicious, EMVCo), [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define INPUT_SEL_FORCE_ACCEPT

```cpp
#define INPUT_SEL_FORCE_ACCEPT 0x02
```

B2b2: `force` acceptance, [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance). 

### define INPUT_SEL_NO_PSE

```cpp
#define INPUT_SEL_NO_PSE 0x04
```

B2b3: `no` PSE, [EMV_CT_APPS_SELECT_STRUCT::No_DirectorySelect](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-no-directoryselect). 

### define INPUT_SEL_CARDCONF

```cpp
#define INPUT_SEL_CARDCONF 0x08
```

B2b4: `cardholder` confirmation, [EMV_CT_APPS_SELECT_STRUCT::ucCardholderConfirmation](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-uccardholderconfirmation). 

### define INPUT_SEL_ONLINE_SWITCH

```cpp
#define INPUT_SEL_ONLINE_SWITCH 0x10
```

B2b5: `force` it online (domestic need), [EMV_CT_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 

### define INPUT_SEL_TXN_OPTIONS

```cpp
#define INPUT_SEL_TXN_OPTIONS 0x20
```

B2b6: `transaction` options, [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_SEL_DOMCHIP

```cpp
#define INPUT_SEL_DOMCHIP 0x40
```

B2b7: `domestic` chip apps included, [EMV_CT_APPS_SELECT_STRUCT::countDomesticChip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countdomesticchip) and [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md):: xDomestic_Chip. 

### define INPUT_SEL_FALLBACK_MSR

```cpp
#define INPUT_SEL_FALLBACK_MSR 0x80
```

B2b8: `fallback` msr apps included, [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md):: countFallbackMS and [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms). 

### define INPUT_SEL_TXN_COUNTER

```cpp
#define INPUT_SEL_TXN_COUNTER 0x01
```

B3b1: `transaction` counter, [EMV_CT_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount). 

### define INPUT_SEL_TXN_STEPS

```cpp
#define INPUT_SEL_TXN_STEPS 0x02
```

B3b2: `transaction` steps if interrupt needed instead of 1 step processing, [EMV_CT_SELECT_STRUCT::TxnSteps](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnsteps). 

### define INPUT_SEL_CB_AMOUNT

```cpp
#define INPUT_SEL_CB_AMOUNT 0x04
```

B3b3: `cashback` amount, [EMV_CT_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount). 

### define INPUT_SEL_ACCOUNT_TYPE

```cpp
#define INPUT_SEL_ACCOUNT_TYPE 0x08
```

B3b4: `account` type, [EMV_CT_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype). 

### define INPUT_SEL_LANGUAGE

```cpp
#define INPUT_SEL_LANGUAGE 0x10
```

B3b5: `language` preselected, [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language). 

### define INPUT_SEL_AMOUNT_CONF

```cpp
#define INPUT_SEL_AMOUNT_CONF 0x20
```

B3b6: `amount` confirmation, [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation). 

### define INPUT_SEL_ADD_TAGS

```cpp
#define INPUT_SEL_ADD_TAGS 0x40
```

B3b7: 

**Deprecated**: 

Don't use [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead. 

### define INPUT_SEL_MOD_CANDLIST

```cpp
#define INPUT_SEL_MOD_CANDLIST 0x80
```

B3b8: `modified` candidate list (only valid in reentrance mode using the candidate list manipulation option [RETURN_CAND_LIST_PREPROC](group___t_x_n___s_t_e_p_s.md#define-return-cand-list-preproc)) 

### define CARD_CONF_YES

```cpp
#define CARD_CONF_YES 0x00
```

**default**   support of cardholder confirmation 

### define CARD_CONF_NO

```cpp
#define CARD_CONF_NO 0x01
```

no cardholder confirmation, e.g. no cardholder display 

### define REUSE_LIST_REMOVE_AID

```cpp
#define REUSE_LIST_REMOVE_AID 0x00
```

Reuse the existing list and remove the used AID, e.g. after card answered with Status Word 6985 at GPO. 

### define BUILD_NEW

```cpp
#define BUILD_NEW 0x01
```

Build a new candidate list (needs to be set on start of transaction) 

### define REUSE_EXISTING_LIST_SEL_0

```cpp
#define REUSE_EXISTING_LIST_SEL_0 0xF0
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 1 of the candidate list. 

### define REUSE_EXISTING_LIST_SEL_1

```cpp
#define REUSE_EXISTING_LIST_SEL_1 0xF1
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 2 of the candidate list. 

### define REUSE_EXISTING_LIST_SEL_2

```cpp
#define REUSE_EXISTING_LIST_SEL_2 0xF2
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 3 of the candidate list. 

### define REUSE_EXISTING_LIST_SEL_3

```cpp
#define REUSE_EXISTING_LIST_SEL_3 0xF3
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 4 of the candidate list. 

### define REUSE_EXISTING_LIST_SEL_4

```cpp
#define REUSE_EXISTING_LIST_SEL_4 0xF4
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 5 of the candidate list. 

### define EMV_SELECTRES_PDOL_TAG_TRANSTYPE

```cpp
#define EMV_SELECTRES_PDOL_TAG_TRANSTYPE 0x20
```

B1b6: Transaction Type is requested in PDOL. 

### define EMV_SELECTRES_PDOL_TAG_ACCOUNTTYPE

```cpp
#define EMV_SELECTRES_PDOL_TAG_ACCOUNTTYPE 0x40
```

B1b7: Account Type is requested in PDOL. 

### define EMV_SELECTRES_PDOL_TAG_AMOUNT

```cpp
#define EMV_SELECTRES_PDOL_TAG_AMOUNT 0x80
```

B1b8: Amount is requested in PDOL. 

### define DF61_SEL_DF62_ERRORDATA

```cpp
#define DF61_SEL_DF62_ERRORDATA 0x01
```

B1b1: [EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata). 

### define DF61_SEL_AGREED_APPNAME

```cpp
#define DF61_SEL_AGREED_APPNAME 0x02
```

B1b2: [EMV_CT_SELECTRES_STRUCT::AppName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-appname). 

### define DF61_SEL_50_APPLICATION_NAME

```cpp
#define DF61_SEL_50_APPLICATION_NAME 0x04
```

B1b3: [EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-50-applicationname). 

### define DF61_SEL_9F11_CODE_TABLE

```cpp
#define DF61_SEL_9F11_CODE_TABLE 0x08
```

B1b4: [EMV_CT_SELECTRES_STRUCT::T_9F11_CodeTable](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f11-codetable). 

### define DF61_SEL_5F2D_LANG_PREF

```cpp
#define DF61_SEL_5F2D_LANG_PREF 0x10
```

B1b5: [EMV_CT_SELECTRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref). 

### define DF61_SEL_84_DF_NAME

```cpp
#define DF61_SEL_84_DF_NAME 0x20
```

B1b6: [EMV_CT_SELECTRES_STRUCT::T_84_DFName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname). 

### define DF61_SEL_9F12_PREF_NAME

```cpp
#define DF61_SEL_9F12_PREF_NAME 0x40
```

B1b7: [EMV_CT_SELECTRES_STRUCT::T_9F12_PreferredName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f12-preferredname). 

### define DF61_SEL_9F63_DISPTXT

```cpp
#define DF61_SEL_9F63_DISPTXT 0x80
```

B1b8: [EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext). 

### define DF61_SEL_MID_DATA

```cpp
#define DF61_SEL_MID_DATA 0x01
```

B2b1: MID data, [EMV_CT_SELECTRES_STRUCT::countFallbackMS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-countfallbackms), [EMV_CT_SELECTRES_STRUCT::xFallback_MS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-xfallback-ms). 

### define DF61_SEL_PDOL

```cpp
#define DF61_SEL_PDOL 0x02
```

B2b2: PDOL info, [EMV_CT_SELECTRES_STRUCT::PDOL_tags](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-pdol-tags). 

### define DF61_SEL_AID

```cpp
#define DF61_SEL_AID 0x04
```

B2b3: selected AID, [EMV_CT_SELECTRES_STRUCT::T_DF04_Aidselected](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df04-aidselected). 

### define DF61_SEL_CANDIDATES

```cpp
#define DF61_SEL_CANDIDATES 0x08
```

B2b4: candidate list, [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates). 

### define EMV_CT_SELOP_CBCK_APPLI_SEL

```cpp
#define EMV_CT_SELOP_CBCK_APPLI_SEL 0x01
```

B1b1: Callback function for customer application selection [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand)) will be generated, if there are several application possible.    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks), [EMV_CT_APPS_SELECT_STRUCT::ucCardholderConfirmation](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-uccardholderconfirmation). 

### define EMV_CT_SELOP_RESERV_ALLOW_B_ON_A

```cpp
#define EMV_CT_SELOP_RESERV_ALLOW_B_ON_A 0x02
```

B1b2: allow reservation type B even in case only type A is activated via configuration (see [Defines for special transaction configuration](group___s_p_e_c_i_a_l___t_r_x_s.md)) 

### define EMV_CT_SELOP_CBCK_DOMESTIC_APPS

```cpp
#define EMV_CT_SELOP_CBCK_DOMESTIC_APPS 0x04
```

B1b3: Activate callback function for cross check if a domestic app remains in the candidate list or not ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps)))    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define EMV_CT_SELOP_ADDALL

```cpp
#define EMV_CT_SELOP_ADDALL 0x08
```

B1b4: Add all PSE applications to the candidate list (Cartes Bancaires - France) 

### define EMV_CT_SELOP_ADDBLO

```cpp
#define EMV_CT_SELOP_ADDBLO 0x10
```

B1b5: Add blocked LOA applications to the candidate list (Interac - Canada) 

### define EMV_CT_NO_LONGEST_AID_MATCH

```cpp
#define EMV_CT_NO_LONGEST_AID_MATCH 0x20
```

B1b6: Do not perform the longest AID match (technical nonsense but needed for a few domestic certifications) 

### define EMV_CT_ALLOW_BLOCKED

```cpp
#define EMV_CT_ALLOW_BLOCKED 0x40
```

B1b7: Allow blocked application to be processed (in Bank controlled terminals to enable script processing to unblock blocked cards) 

### define EMV_CT_SELOP_REMOVEALL_BUT_EXCLUDED

```cpp
#define EMV_CT_SELOP_REMOVEALL_BUT_EXCLUDED 0x80
```

B1b8: Remove all candidates from terminal list except those which are contained in excluded AID list. This allows transactions restricted to one, two or three AIDs without terminal reconfiguration. 

### define EMV_CT_TRXOP_PIN_BYPASS_NO_SUBSEQUENT

```cpp
#define EMV_CT_TRXOP_PIN_BYPASS_NO_SUBSEQUENT 0x01
```

B2b1: If PIN bypass is supported it usually is for subsequent PIN entries, too. However some ICS (even if minor change) may announce no subsequent PIN Bypass, so you can configure here. 

### define EMV_CT_TRXOP_MULTIPLE_RANDOM_NUMBERS

```cpp
#define EMV_CT_TRXOP_MULTIPLE_RANDOM_NUMBERS 0x02
```

B2b2: Create a new value for 9F37, each time a random number is requested by the ICC. Per default one random number per transaction is generated. It is recommended to use multiple random numbers for security reasons. 

### define EMV_CT_TRXOP_DCC_CALLBACK

```cpp
#define EMV_CT_TRXOP_DCC_CALLBACK 0x04
```


B2b3: DCC callback function [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc)) will be invoked. 

 Callback is only invoked if DCC is allowed (transaction amount was not yet used in PDOL or amount confirmation) resp. limit conversion is needed (transaction and configuration currency difference). 

 Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check). 


### define EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS

```cpp
#define EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS 0x08
```

B2b4: DCC callback function [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc)) will be called always.    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check). 

### define EMV_CT_TRXOP_NO_FALLBACK_AFTER_CVM

```cpp
#define EMV_CT_TRXOP_NO_FALLBACK_AFTER_CVM 0x10
```

B2b5: Despite fallback after CVM allowed by application configuration stop transaction with card error. This is required in case of separate readers if mag. stripe has not been read prior to chip. 

### define EMV_CT_TRXOP_AMOUNT_CONF

```cpp
#define EMV_CT_TRXOP_AMOUNT_CONF 0x20
```

B2b6: The callback for the amount confirmation [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf)) will be generated, e.g. to be deactivated if terminal is unattended.    Invoking this callback depends on [EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin), [REFUND_CONFIRM_AMOUNT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-confirm-amount), [EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-amount-confirm-on-signature), [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define EMV_CT_TRXOP_ENFORCE_PIN

```cpp
#define EMV_CT_TRXOP_ENFORCE_PIN 0x40
```

B2b7: Austrian (EPA) domestic feature: force PIN usage    In case no PIN entry was done during Cardholder Verification: EMV ADK will force online PIN entry, that is flag bit [EMV_ADK_SI_ONLINE_PIN_REQUIRED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-online-pin-required) in [EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo). 

### define EMV_CT_TRXOP_FALLBACK_GOODSERVICE

```cpp
#define EMV_CT_TRXOP_FALLBACK_GOODSERVICE 0x80
```

B2b8: German domestic feature: Execute cash transaction with transaction type "Goods & Services" (in case application's background system does not support cash) 

### define EMV_CT_TRXOP_MERCHINFO_CALLBACK

```cpp
#define EMV_CT_TRXOP_MERCHINFO_CALLBACK 0x01
```

B3b1: The callback for the intermediate merchant information will be generated ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt)[TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo))    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define EMV_CT_TRXOP_RND_CALLBACK

```cpp
#define EMV_CT_TRXOP_RND_CALLBACK 0x02
```

B3b2: Use own random number generator instead of OS one (not recommended but for debug purposes useful), only for velocity kernel, see [TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd). 

**Deprecated**: 

not supported anymore 

### define EMV_CT_TRXOP_HOTLST_LOG_CALLBACK

```cpp
#define EMV_CT_TRXOP_HOTLST_LOG_CALLBACK 0x04
```

B3b3: The callback for the transaction log / hotlist will be generated [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist))    Depends on the AID parameters [TRANSACTION_LOG](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-log) and [BLACKLIST](group___a_p_p___f_l_o_w___c_a_p_s.md#define-blacklist), and on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK

```cpp
#define EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK 0x08
```

B3b4: The callback for the domestic and local checks will be generated [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps))    Depends on the AID parameter [EMV_CT_DOMESTIC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-domestic-check) and on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define EMV_CT_TRXOP_CARDHINFO_CALLBACK

```cpp
#define EMV_CT_TRXOP_CARDHINFO_CALLBACK 0x10
```

B3b5: The callback for the intermediate cardholder information will be generated [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo))    Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks). 

### define EMV_CT_TRXOP_EARLY_PIN_ENTRY

```cpp
#define EMV_CT_TRXOP_EARLY_PIN_ENTRY 0x20
```

B3b6: Early PIN entry.    PIN entry is done (by application) in parallel to steps "Read application data" and "Offline data authentication".    Depends on [EMV_CT_TRXOP_DELAYED_EARLY_PIN](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-delayed-early-pin).    If set: Application starts PIN entry after GPO, in callback "merchant info - start read record" ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt)[TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo) with [eEMVMerReadAppData](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerreadappdata)) 

### define EMV_CT_TRXOP_DELAYED_EARLY_PIN

```cpp
#define EMV_CT_TRXOP_DELAYED_EARLY_PIN 0x40
```

B3b7: Delayed early PIN entry.    PIN entry is done (by application) after callback "local checks" ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)).    Precondition: [EMV_CT_TRXOP_EARLY_PIN_ENTRY](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-early-pin-entry) is active. 

### define EMV_CT_TRXOP_KERNEL_PARSE_UNKNOWN_TLV

```cpp
#define EMV_CT_TRXOP_KERNEL_PARSE_UNKNOWN_TLV 0x80
```

B3b8: Let the kernel parse and store unknown TLV templates so that unknown tags can be retrieved by EMV_CT_fetchTxnTags. Precondition is that those tags are configured in the additional tag store (Additional_Tags_CRD) 

### define EMV_CT_SELOP_NO_UTF8

```cpp
#define EMV_CT_SELOP_NO_UTF8 0x01
```

B4b1: Omit UTF-8 converted application labels in application selection callback [TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand). 

### define EMV_CT_TRXOP_NO_UTF8

```cpp
#define EMV_CT_TRXOP_NO_UTF8 0x01
```

B4b1: Omit UTF-8 converted application labels in amount confirmation and PIN input callback functions ([TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf), [TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin)) 

### define EMV_CT_TRXOP_TIP_AMOUNT_ZERO

```cpp
#define EMV_CT_TRXOP_TIP_AMOUNT_ZERO 0x02
```

B4b2: Card holder confirmed zero amount within tip amount input dialog. In case of TIP setting DF22 position 4 = 3 the transaction shall not be made suitable for a tip follow-up. 

### define EMV_CT_TRXOP_NO_CHECK_BB_PADDING

```cpp
#define EMV_CT_TRXOP_NO_CHECK_BB_PADDING 0x04
```

B4b3: Omit check for BB padding in card data authentication certificates - This check is obliged in some regions but not generally by EMVCo. 

### define EMV_CT_TRXOP_NO_CHECK_DDLEN

```cpp
#define EMV_CT_TRXOP_NO_CHECK_DDLEN 0x08
```

B4b4: Omit check if dynamic data length in card data authentication certificates is too big. 

### define ONL_OPTS_LAST_PIN_TRY

```cpp
#define ONL_OPTS_LAST_PIN_TRY 0x01
```

B5b1 : Host detected "last PIN try" for online PIN. 

### define EMV_CT_TRXOP_PERFORM_ISS_ACQ_CVM

```cpp
#define EMV_CT_TRXOP_PERFORM_ISS_ACQ_CVM 0x02
```

B5b2 : For Custom CVM processing. This flag is not used so far, but might be needed one day. For instance on Custom CVM a PIN input callback with PIN mode [EMV_CT_CVM_CUSTOM](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-cvm-custom) is sent under the same condition as a PIN input callback. 

### define EMV_CT_TRXOP_WRITE_DS_OFFLINE_TXN

```cpp
#define EMV_CT_TRXOP_WRITE_DS_OFFLINE_TXN 0x08
```

B5b4 : Write data storage data for offline transactions. Relevant only by Continue Online. When this option is set, EMV_CTLS_ContinueOnline will only write the DS data and will not perform the kernel online processing. 

### define EMV_CT_TRXOP_FORCE_TACIAC_DEFAULT

```cpp
#define EMV_CT_TRXOP_FORCE_TACIAC_DEFAULT 0x10
```

B5b5 : After Host Connection: Force TAC IAC Default processing even the host was reached, e.g. service provider host is available and returns valid AC but the issuer host was not reached for cryptogram verification. 

### define EMV_CT_SELOP_WEEK_PRIORITY_APPS

```cpp
#define EMV_CT_SELOP_WEEK_PRIORITY_APPS 0x20
```

B5b6 : Ignore priority applications that are not part of the terminal candidate list. 

### define EMV_CT_CUST_APPLI_SELECTION_PERFORMED

```cpp
#define EMV_CT_CUST_APPLI_SELECTION_PERFORMED 0x40
```

B5b7 : This is a possibility that allows the app to indicate that a customer application selection has been performed. If this is set, the callback / Reentrance for candidate selection will be even called if only one candidate is left. This is to inform the customer that the prior selected application was withdrawn from the candidate list after customer confirmation. In this special case a single candidate must not be selected automatically. 

### define EMV_CT_SELOP_DETECT_EMPTY_LIST

```cpp
#define EMV_CT_SELOP_DETECT_EMPTY_LIST 0x80
```

B5b8 : Without this bit in case of card error and in case of no common candidate [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback) is returned for backwards compatibility. If enabled, the second case results in return code [EMV_ADK_TXN_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-empty-list). 

### define RETURN_CANDIDATE_LIST

```cpp
#define RETURN_CANDIDATE_LIST 0x01
```

B1b1: return for selecting the candidate on application level. 

### define RETURN_AFTER_GPO

```cpp
#define RETURN_AFTER_GPO 0x02
```

B1b2: return after finishing GPO. 

### define RETURN_AFTER_READ_RECORD

```cpp
#define RETURN_AFTER_READ_RECORD 0x04
```

B1b3: return after finishing ReadRecords. 

### define RETURN_AFTER_DATA_AUTH

```cpp
#define RETURN_AFTER_DATA_AUTH 0x08
```

B1b4: return after finishing Data Authentication. 

### define RETURN_FOR_CVM_PROCESS

```cpp
#define RETURN_FOR_CVM_PROCESS 0x10
```

B1b5: for each selected CV PIN method the control is given to the application to handle it. 

### define RETURN_FOR_CVM_FINISH

```cpp
#define RETURN_FOR_CVM_FINISH 0x20
```

B1b6: CV finished. 

### define RETURN_AFTER_RISK_MANGEMENT

```cpp
#define RETURN_AFTER_RISK_MANGEMENT 0x80
```

B1b8: return after finishing the terminal risk management (before 1st GAC) 

### define RETURN_CAND_LIST_PREPROC

```cpp
#define RETURN_CAND_LIST_PREPROC 0x01
```

B2b1: return once the candidate list is known to manipulate the list. 

### define RETURN_CAND_LIST_SKIP

```cpp
#define RETURN_CAND_LIST_SKIP 0x02
```

B2b2: Candidate list building by calling application. 

### define MS_RETURN_CALLBACKS

```cpp
#define MS_RETURN_CALLBACKS 0x80
```

B3b8: If Set: All callbacks are disabled completely, otherwise they are used as configured in the parameter set. 

### define MS_ADD_TO_HOTLIST

```cpp
#define MS_ADD_TO_HOTLIST 0x01
```

B3b1: If Set: The card of this txn will be added to the hotlist (processed after ReadRecords) 

### define MS_DECLINE_AAC

```cpp
#define MS_DECLINE_AAC 0x02
```

B3b2: If Set: The transaction will be declined with requesting an AAC. 

### define MS_ABORT_TXN

```cpp
#define MS_ABORT_TXN 0x04
```

B3b3: If Set: The transaction will be terminated immediately. 

### define MS_PIN_BYPASS

```cpp
#define MS_PIN_BYPASS 0x08
```

B3b4: If Set: Customer or Merchant bypassed PIN entry. 

### define MS_CUST_CVM_OK

```cpp
#define MS_CUST_CVM_OK 0x10
```

B3b5: If Set: Customer CVM method success. 

### define MS_PINPAD_NOTPRESENT

```cpp
#define MS_PINPAD_NOTPRESENT 0x20
```

B3b6: If Set: external PINPad was not detected for PIN processing. 

### define MS_PINICC_STOP

```cpp
#define MS_PINICC_STOP 0x40
```

B3b7: If Set: ICC stopped working during PIN processing. 

### define CONFIRM_AMOUNT_BEFORE_CVM

```cpp
#define CONFIRM_AMOUNT_BEFORE_CVM 0x00
```

**default**   immediately after language selection before CVM 

### define CONFIRM_AMOUNT_AFTER_CVM

```cpp
#define CONFIRM_AMOUNT_AFTER_CVM 0x01
```

after cardholder verification 

### define MODE_DCC_NO_TRX_CONTINUE

```cpp
#define MODE_DCC_NO_TRX_CONTINUE 0
```

No DCC: Continue transaction with original amount, floor limit, ... 

### define MODE_DCC_YES_TRX_CONTINUE

```cpp
#define MODE_DCC_YES_TRX_CONTINUE 1
```

DCC requested: Continue transaction with returned amount, floor limit, ... 

### define MODE_DCC_NO_TRX_ABORT

```cpp
#define MODE_DCC_NO_TRX_ABORT 2
```

Cashier requested abort: Transaction abort, display [EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error) and [EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card). 

### define MODE_DCC_YES_TRX_ABORT

```cpp
#define MODE_DCC_YES_TRX_ABORT 3
```

DCC requested, but transaction must be restarted: Transaction abort, no text display. 

### define INPUT_OFL_TXN_COUNTER

```cpp
#define INPUT_OFL_TXN_COUNTER 0x01
```

B1b1: transaction counter, [EMV_CT_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount). 

### define INPUT_OFL_ADD_TAGS

```cpp
#define INPUT_OFL_ADD_TAGS 0x02
```

B1b2: 

**Deprecated**: 

Don't use [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead. 

### define INPUT_OFL_CB_AMOUNT

```cpp
#define INPUT_OFL_CB_AMOUNT 0x04
```

B1b3: cashback amount, [EMV_CT_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount). 

### define INPUT_OFL_ACCOUNT_TYPE

```cpp
#define INPUT_OFL_ACCOUNT_TYPE 0x08
```

B1b4: account type, [EMV_CT_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype). 

### define INPUT_OFL_LANGUAGE

```cpp
#define INPUT_OFL_LANGUAGE 0x10
```

B1b5: language preselected, [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language). 

### define INPUT_OFL_AMOUNT_CONF

```cpp
#define INPUT_OFL_AMOUNT_CONF 0x20
```

B1b6: amount confirmation, [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation). 

### define INPUT_OFL_TXN_OPTIONS

```cpp
#define INPUT_OFL_TXN_OPTIONS 0x40
```

B1b7: transaction options, [EMV_CT_TRANSAC_STRUCT::TxnOptions](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_OFL_TXN_STEPS

```cpp
#define INPUT_OFL_TXN_STEPS 0x80
```

B1b8: transaction steps if interrupt needed instead of 1 step processing, [EMV_CT_TRANSAC_STRUCT::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps). 

### define INPUT_OFL_AMOUNT

```cpp
#define INPUT_OFL_AMOUNT 0x01
```

B2b1: txn amount, [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount). 

### define INPUT_OFL_AMOUNT_CURRENCY

```cpp
#define INPUT_OFL_AMOUNT_CURRENCY 0x02
```

B2b2: currency of txn, [EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans). 

### define INPUT_OFL_CUREXPONENT

```cpp
#define INPUT_OFL_CUREXPONENT 0x04
```

B2b3: currency exponent of txn, [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans). 

### define INPUT_OFL_DATE

```cpp
#define INPUT_OFL_DATE 0x08
```

B2b4: date of txn, [EMV_CT_PAYMENT_STRUCT::Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date). 

### define INPUT_OFL_TIME

```cpp
#define INPUT_OFL_TIME 0x10
```

B2b5: time of txn, [EMV_CT_PAYMENT_STRUCT::Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time). 

### define INPUT_OFL_FORCE_ONLINE

```cpp
#define INPUT_OFL_FORCE_ONLINE 0x20
```

B2b6: force it online (suspicious, EMVCo), [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define INPUT_OFL_FORCE_ACCEPT

```cpp
#define INPUT_OFL_FORCE_ACCEPT 0x40
```

B2b7: force acceptance, [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance). 

### define INPUT_OFL_ONLINE_SWITCH

```cpp
#define INPUT_OFL_ONLINE_SWITCH 0x80
```

B2b8: force it online (domestic need), [EMV_CT_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 

### define INPUT_ONL_ONLINE_RESP

```cpp
#define INPUT_ONL_ONLINE_RESP 0x01
```

B1b1: [EMV_CT_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult). 

### define INPUT_ONL_ONLINE_AC

```cpp
#define INPUT_ONL_ONLINE_AC 0x02
```

B1b2: [EMV_CT_HOST_STRUCT::AuthResp](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp). 

### define INPUT_ONL_AUTHDATA

```cpp
#define INPUT_ONL_AUTHDATA 0x04
```

B1b3: [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata). 

### define INPUT_ONL_SCRIPTCRIT

```cpp
#define INPUT_ONL_SCRIPTCRIT 0x08
```

B1b4: [EMV_CT_HOST_STRUCT::ScriptCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptcritdata). 

### define INPUT_ONL_SCRIPTUNCRIT

```cpp
#define INPUT_ONL_SCRIPTUNCRIT 0x10
```

B1b5: [EMV_CT_HOST_STRUCT::ScriptUnCritData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-scriptuncritdata). 

### define INPUT_ONL_AUTHCODE

```cpp
#define INPUT_ONL_AUTHCODE 0x20
```

B1b6: [EMV_CT_HOST_STRUCT::AuthorizationCode](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authorizationcode). 

### define INPUT_ONL_RESULT_REFERRAL

```cpp
#define INPUT_ONL_RESULT_REFERRAL 0x40
```

B1b7: [EMV_CT_HOST_STRUCT::Result_referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-result-referral). 

### define INPUT_ONL_ARC_REFERRAL

```cpp
#define INPUT_ONL_ARC_REFERRAL 0x80
```

B1b8: [EMV_CT_HOST_STRUCT::AuthResp_Referral](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-referral). 

### define INPUT_ONL_ARC_WRONGPIN

```cpp
#define INPUT_ONL_ARC_WRONGPIN 0x01
```

B2b1: [EMV_CT_HOST_STRUCT::AuthResp_Wrong_PIN](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-wrong-pin). 

### define INPUT_ONL_TXN_OPTIONS

```cpp
#define INPUT_ONL_TXN_OPTIONS 0x02
```

B2b2: [EMV_CT_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_ONL_AMOUNT_GAC2

```cpp
#define INPUT_ONL_AMOUNT_GAC2 0x04
```

B2b3: [EMV_CT_HOST_STRUCT::PreAuth_Amount](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-preauth-amount). 

### define INPUT_ONL_TXN_STEPS

```cpp
#define INPUT_ONL_TXN_STEPS 0x08
```

B2b4: [EMV_CT_HOST_STRUCT::TxnSteps](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnsteps). 

### define INPUT_ONL_ARC_POSITIVE

```cpp
#define INPUT_ONL_ARC_POSITIVE 0x10
```

B2b5: [EMV_CT_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive). 

### define INPUT_ONL_WRITE_DS_DATA

```cpp
#define INPUT_ONL_WRITE_DS_DATA 0x20
```

B2b6: [EMV_CT_HOST_STRUCT::WriteDataStorageData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-writedatastoragedata). 

### define INPUT_ONL_AMOUNT_OTH

```cpp
#define INPUT_ONL_AMOUNT_OTH 0x40
```

B2b7: [EMV_CT_HOST_STRUCT::amountOthUpd](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd). 

### define TRX_STATUSINFO

```cpp
#define TRX_STATUSINFO 0x01
```

B1b1: [EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo). 

### define TRX_9F27_CRYPTINFO

```cpp
#define TRX_9F27_CRYPTINFO 0x02
```

B1b2: [EMV_CT_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo). 

### define TRX_9F36_ATC

```cpp
#define TRX_9F36_ATC 0x04
```

B1b3: [EMV_CT_TRANSRES_STRUCT::T_9F36_ATC](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f36-atc). 

### define TRX_9F26_CRYPTOGRAMM

```cpp
#define TRX_9F26_CRYPTOGRAMM 0x08
```

B1b4: [EMV_CT_TRANSRES_STRUCT::T_9F26_Cryptogramm](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f26-cryptogramm). 

### define TRX_5A_PAN

```cpp
#define TRX_5A_PAN 0x10
```

B1b5: [EMV_CT_TRANSRES_STRUCT::T_5A_PAN](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5a-pan). 

### define TRX_9F39_POS_ENTRY_MODE

```cpp
#define TRX_9F39_POS_ENTRY_MODE 0x20
```

B1b6: [EMV_CT_TRANSRES_STRUCT::T_9F39_POSEntryMode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f39-posentrymode). 

### define TRX_5F24_APPEXPDATE

```cpp
#define TRX_5F24_APPEXPDATE 0x40
```

B1b7: [EMV_CT_TRANSRES_STRUCT::T_5F24_AppExpDate](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f24-appexpdate). 

### define TRX_9F41_TRANSCOUNT

```cpp
#define TRX_9F41_TRANSCOUNT 0x80
```

B1b8: [EMV_CT_TRANSRES_STRUCT::T_9F41_TransCount](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f41-transcount). 

### define TRX_5F34_PAN_SEQ_NUMBER

```cpp
#define TRX_5F34_PAN_SEQ_NUMBER 0x01
```

B2b1: [EMV_CT_TRANSRES_STRUCT::T_5F34_PANSequenceNo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f34-pansequenceno). 

### define TRX_57_DATA_TRACK2

```cpp
#define TRX_57_DATA_TRACK2 0x02
```

B2b2: [EMV_CT_TRANSRES_STRUCT::T_57_DataTrack2](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-57-datatrack2). 

### define TRX_9F10_DATAISSUER

```cpp
#define TRX_9F10_DATAISSUER 0x04
```

B2b3: [EMV_CT_TRANSRES_STRUCT::T_9F10_DataIssuer](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f10-dataissuer). 

### define TRX_9F37_RANDOM_NUMBER

```cpp
#define TRX_9F37_RANDOM_NUMBER 0x08
```

B2b4: [EMV_CT_TRANSRES_STRUCT::T_9F37_RandomNumber](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f37-randomnumber). 

### define TRX_95_TVR

```cpp
#define TRX_95_TVR 0x10
```

B2b5: [EMV_CT_TRANSRES_STRUCT::T_95_TVR](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-95-tvr). 

### define TRX_9A_DATE

```cpp
#define TRX_9A_DATE 0x20
```

B2b6: [EMV_CT_TRANSRES_STRUCT::T_9A_Date](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9a-date). 

### define TRX_9F21_TIME

```cpp
#define TRX_9F21_TIME 0x40
```

B2b7: [EMV_CT_TRANSRES_STRUCT::T_9F21_Time](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f21-time). 

### define TRX_9C_TRANSTYPE

```cpp
#define TRX_9C_TRANSTYPE 0x80
```

B2b8: [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 

### define TRX_5F2A_TRX_CURRENCY

```cpp
#define TRX_5F2A_TRX_CURRENCY 0x01
```

B3b1: [EMV_CT_TRANSRES_STRUCT::T_5F2A_CurrencyTrans](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2a-currencytrans). 

### define TRX_82_AIP

```cpp
#define TRX_82_AIP 0x02
```

B3b2: [EMV_CT_TRANSRES_STRUCT::T_82_AIP](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-82-aip). 

### define TRX_9F1A_TERM_COUNTRY_CODE

```cpp
#define TRX_9F1A_TERM_COUNTRY_CODE 0x04
```

B3b3: [EMV_CT_TRANSRES_STRUCT::T_9F1A_TermCountryCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1a-termcountrycode). 

### define TRX_9F34_CVM_RES

```cpp
#define TRX_9F34_CVM_RES 0x08
```

B3b4: [EMV_CT_TRANSRES_STRUCT::T_9F34_CVM_Res](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f34-cvm-res). 

### define TRX_9F33_TERMCAP

```cpp
#define TRX_9F33_TERMCAP 0x10
```

B3b5: [EMV_CT_TRANSRES_STRUCT::T_9F33_TermCap](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f33-termcap). 

### define TRX_9F35_TERMTYP

```cpp
#define TRX_9F35_TERMTYP 0x20
```

B3b6: [EMV_CT_TRANSRES_STRUCT::T_9F35_TermTyp](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f35-termtyp). 

### define TRX_9F1E_IFDSERIALNUMBER

```cpp
#define TRX_9F1E_IFDSERIALNUMBER 0x40
```

B3b7: [EMV_CT_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1e-ifdserialnumber). 

### define TRX_84_DFNAME

```cpp
#define TRX_84_DFNAME 0x80
```

B3b8: [EMV_CT_TRANSRES_STRUCT::T_84_DFName](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname). 

### define TRX_9F09_VERNUM

```cpp
#define TRX_9F09_VERNUM 0x01
```

B4b1: [EMV_CT_TRANSRES_STRUCT::T_9F09_VerNum](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f09-vernum). 

### define TRX_SCRIPTRESULTS

```cpp
#define TRX_SCRIPTRESULTS 0x02
```

B4b2: [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults). 

### define TRX_9B_TSI

```cpp
#define TRX_9B_TSI 0x04
```

B4b3: [EMV_CT_TRANSRES_STRUCT::T_9B_TSI](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9b-tsi). 

### define TRX_9F06_AID

```cpp
#define TRX_9F06_AID 0x08
```

B4b4: [EMV_CT_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid). 

### define TRX_ADDITIONAL_TAGS

```cpp
#define TRX_ADDITIONAL_TAGS 0x10
```

B4b5: EMV_CT_TRANSRES_STRUCT::Additional_Tags. 

### define TRX_APPNAME

```cpp
#define TRX_APPNAME 0x20
```

B4b6: [EMV_CT_TRANSRES_STRUCT::AppName](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname). 

### define TRX_5F25_APPEFFDATE

```cpp
#define TRX_5F25_APPEFFDATE 0x40
```

B4b7: [EMV_CT_TRANSRES_STRUCT::T_5F25_AppEffDate](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f25-appeffdate). 

### define TRX_5F28_ISSCOUNTRYCODE

```cpp
#define TRX_5F28_ISSCOUNTRYCODE 0x80
```

B4b8: [EMV_CT_TRANSRES_STRUCT::T_5F28_IssCountryCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f28-isscountrycode). 

### define TRX_9F45_DATAAUTHCODE

```cpp
#define TRX_9F45_DATAAUTHCODE 0x01
```

B5b1: [EMV_CT_TRANSRES_STRUCT::T_9F45_DataAuthCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f45-dataauthcode). 

### define TRX_9F4C_ICCDYNNUMBER

```cpp
#define TRX_9F4C_ICCDYNNUMBER 0x02
```

B5b2: [EMV_CT_TRANSRES_STRUCT::T_9F4C_ICCDynNumber](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f4c-iccdynnumber). 

### define TRX_TAC_DENIAL

```cpp
#define TRX_TAC_DENIAL 0x04
```

B5b3: [EMV_CT_TRANSRES_STRUCT::TACDenial](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdenial). 

### define TRX_TAC_ONLINE

```cpp
#define TRX_TAC_ONLINE 0x08
```

B5b4: [EMV_CT_TRANSRES_STRUCT::TACOnline](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-taconline). 

### define TRX_TAC_DEFAULT

```cpp
#define TRX_TAC_DEFAULT 0x10
```

B5b5: [EMV_CT_TRANSRES_STRUCT::TACDefault](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdefault). 

### define TRX_9F0E_IAC_DENIAL

```cpp
#define TRX_9F0E_IAC_DENIAL 0x20
```

B5b6: [EMV_CT_TRANSRES_STRUCT::T_9F0E_IACDenial](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0e-iacdenial). 

### define TRX_9F0F_IAC_ONLINE

```cpp
#define TRX_9F0F_IAC_ONLINE 0x40
```

B5b7: [EMV_CT_TRANSRES_STRUCT::T_9F0F_IACOnline](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0f-iaconline). 

### define TRX_9F0D_IAC_DEFAULT

```cpp
#define TRX_9F0D_IAC_DEFAULT 0x80
```

B5b8: [EMV_CT_TRANSRES_STRUCT::T_9F0D_IACDefault](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0d-iacdefault). 

### define TRX_9F40_TERMCAP

```cpp
#define TRX_9F40_TERMCAP 0x02
```

B6b2: [EMV_CT_TRANSRES_STRUCT::T_9F40_AddTermCap](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f40-addtermcap). 

### define TRX_DF62_ERRORDATA_TRANS

```cpp
#define TRX_DF62_ERRORDATA_TRANS 0x04
```

B6b3: [EMV_CT_TRANSRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata). 

### define TRX_9F16_MERCHANT_ID

```cpp
#define TRX_9F16_MERCHANT_ID 0x08
```

B6b4: [EMV_CT_TRANSRES_STRUCT::T_9F16_MerchIdent](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f16-merchident). 

### define TRX_5F20_CARDHOLDER

```cpp
#define TRX_5F20_CARDHOLDER 0x10
```

B6b5: [EMV_CT_TRANSRES_STRUCT::T_5F20_Cardholder](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f20-cardholder). 

### define TRX_5F2D_LANG_PREFERENCE

```cpp
#define TRX_5F2D_LANG_PREFERENCE 0x20
```

B6b6: [EMV_CT_TRANSRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref). 

### define TRX_9F08_ICC_APPLI_VERS_NO

```cpp
#define TRX_9F08_ICC_APPLI_VERS_NO 0x40
```

B6b7: [EMV_CT_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no). 

### define TRX_5F36_TRX_CURRENCY_EXPO

```cpp
#define TRX_5F36_TRX_CURRENCY_EXPO 0x80
```

B6b8: [EMV_CT_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f36-trx-currency-exp). 

### define TRX_5F30_SERVICE_CODE

```cpp
#define TRX_5F30_SERVICE_CODE 0x01
```

B7b1: [EMV_CT_TRANSRES_STRUCT::T_5F30_ServiceCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f30-servicecode). 

### define EMV_CT_TRX_DF17_FALLBACK_MID

```cpp
#define EMV_CT_TRX_DF17_FALLBACK_MID 0x02
```

B7b2: [EMV_CT_TRANSRES_STRUCT::T_DF17_FallbackMID](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df17-fallbackmid). 

### define EMV_CT_TRX_8E_CVM_List

```cpp
#define EMV_CT_TRX_8E_CVM_List 0x04
```

B7b3: [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list). 

### define TRX_DF63_DISPLAY_ID

```cpp
#define TRX_DF63_DISPLAY_ID 0x08
```

B7b4: [EMV_CT_TRANSRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext). 

### define TRX_DF64_KERNEL_DEBUG

```cpp
#define TRX_DF64_KERNEL_DEBUG 0x10
```

B7b5: [EMV_CT_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata). 

### define TRX_9F02_AMOUNT

```cpp
#define TRX_9F02_AMOUNT 0x20
```

B7b6: [EMV_CT_TRANSRES_STRUCT::T_9F02_TXNAmount](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f02-txnamount). 

### define TRX_9F03_CB_AMOUNT

```cpp
#define TRX_9F03_CB_AMOUNT 0x40
```

B7b7: [EMV_CT_TRANSRES_STRUCT::T_9F03_TXNAdditionalAmount](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f03-txnadditionalamount). 

### define TRX_9F53_MC_CATCODE

```cpp
#define TRX_9F53_MC_CATCODE 0x80
```

B7b8: [EMV_CT_TRANSRES_STRUCT::T_9F53_MC_CatCode](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f53-mc-catcode). 

### define TRX_DF59_OFFLINE_PIN_ERRORS

```cpp
#define TRX_DF59_OFFLINE_PIN_ERRORS 0x01
```

B8b1: [EMV_CT_TRANSRES_STRUCT::T_DF59_Offl_PIN_errors](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df59-offl-pin-errors). 

### define eEMVMerCustSelApp

```cpp
#define eEMVMerCustSelApp 0
```

Customer has to select Application, not used anymore. 

### define eEMVMerConfAmount

```cpp
#define eEMVMerConfAmount 1
```

Customer has to confirm amount. 

### define eEMVMerCrdhldVerif

```cpp
#define eEMVMerCrdhldVerif 2
```

EMV step "Cardholder Verification" will be started. 

### define eEMVMerReadAppData

```cpp
#define eEMVMerReadAppData 3
```

EMV step "Read Application Data" will be started. 

### define eEMVMerOffAuth

```cpp
#define eEMVMerOffAuth 4
```

EMV step "Offline Data Authentication" will be started. 

### define eEMVMer1stGAC

```cpp
#define eEMVMer1stGAC 5
```

1st GENERATE AC will be done 

### define eEMVMer2ndGAC

```cpp
#define eEMVMer2ndGAC 6
```

2nd GENERATE AC will be done 

### define eEMVMerSelect

```cpp
#define eEMVMerSelect 7
```

"Application Selection" is finished 

### define eEMVMerPINProgress

```cpp
#define eEMVMerPINProgress 8
```

Input of PIN in progress, not used anymore. 

### define eEMVMerCustConf

```cpp
#define eEMVMerCustConf 9
```

Wait for customer confirmation, not used anymore. 

### define eEMVMerPINInput

```cpp
#define eEMVMerPINInput 10
```

Customer is asked for PIN entry. 

### define eEMVMerLangSelect

```cpp
#define eEMVMerLangSelect 11
```

Customer has to select language. 

### define eEMVMerCustLang

```cpp
#define eEMVMerCustLang 0x80
```

customer language selected = 0x80 + language ID (e.g. EMV_LANG_ITALIAN) 

### define eEMVCrdWrongPIN

```cpp
#define eEMVCrdWrongPIN 0
```

Customer info: wrong PIN. 

### define eEMVCrdCorrectPIN

```cpp
#define eEMVCrdCorrectPIN 1
```

Customer info: correct PIN. 

### define eEMVCrdAppChange

```cpp
#define eEMVCrdAppChange 2
```

Customer info: explicit selected application is changed. 

### define eEMVCrdLastTryPIN

```cpp
#define eEMVCrdLastTryPIN 3
```

Customer info: last PIN try. 

### define CBK_SEL_MERCHANT

```cpp
#define CBK_SEL_MERCHANT 0x00
```

Merchant has to select. 

### define CBK_SEL_CUSTOMER

```cpp
#define CBK_SEL_CUSTOMER 0x01
```

Customer has to select. 

### define CBK_DOMAPP_REMAIN

```cpp
#define CBK_DOMAPP_REMAIN 0
```

Don't remove from candidate list. 

### define CBK_DOMAPP_REMOVE

```cpp
#define CBK_DOMAPP_REMOVE 1
```

Remove from candidate list. 

### define CBK_DOMAPP_REMAIN2

```cpp
#define CBK_DOMAPP_REMAIN2 2
```

Don't remove from candidate list. Additionally suppress final SELECT. Needed e.g. for German ec card. Transaction processing is done outside EMV kernel. 

### define CBK_DOMAPP_REMAIN3

```cpp
#define CBK_DOMAPP_REMAIN3 3
```

Don't remove from candidate list. Additionally suppress all following SELECTs. Used for enhancing performance in case it's clear that transaction will be done outside EMV kernel. 

### define DOM_OPTION_LEN

```cpp
#define DOM_OPTION_LEN 3
```

Length of `pucDomOption` in bytes. 

### define DOM_OPTION_AUSTRIAN_NGV

```cpp
#define DOM_OPTION_AUSTRIAN_NGV 0x01
```

B1b1: Continue transaction as Austrian Non Guaranteed Payment. 

### define DOM_OPTION_TRX_INTERCEPT

```cpp
#define DOM_OPTION_TRX_INTERCEPT 0x02
```

B1b2: Intercept transaction. Context will remain. Repetition trx must be started with [EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-trx-intercept). 

### define DOM_OPTION_ABORT_NO_TEXT

```cpp
#define DOM_OPTION_ABORT_NO_TEXT 0x04
```

B1b3: if [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)) returns [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort) in [TAG_DF76_CBK_MANIPUL_TRX](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df76-cbk-manipul-trx): Don't display texts [EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error) and [EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card). 

### define DOM_OPTION_TIP_OFF

```cpp
#define DOM_OPTION_TIP_OFF 0x08
```

B1b4: convert a tip capable transaction back to sale transaction (used for countries where tip with signature is done outside the scope of EMV and returns the txn to a normal sale transaction) 

### define DOM_INFO_LEN

```cpp
#define DOM_INFO_LEN 3
```

Length of `pucDomInfo` in bytes. 

### define DOM_INFO_ICC_REQ_AMOUNT

```cpp
#define DOM_INFO_ICC_REQ_AMOUNT 0x01
```

ICC already requested transaction amount (e.g. in PDOL). Amount change for running transaction is forbidden. 

### define DOM_INFO_ICC_REQ_TRANSTYPE

```cpp
#define DOM_INFO_ICC_REQ_TRANSTYPE 0x02
```

ICC already requested transaction type (e.g. in PDOL). Transaction type change for running transaction is forbidden. 

### define DCC_CBCK_INFO_LEN

```cpp
#define DCC_CBCK_INFO_LEN 3
```

Length of `pucDomOption` in bytes. 

### define DCC_CBCK_INFO_PDOL_FORBIT

```cpp
#define DCC_CBCK_INFO_PDOL_FORBIT 0x01
```

B1b1: Currency change not allowed for this transaction. Reason is PDOL containing amount or currency. 

### define MAX_CONF_KEYS

```cpp
#define MAX_CONF_KEYS 60
```


### define TAG_BF01_CBK_MERCHINFO

```cpp
#define TAG_BF01_CBK_MERCHINFO 0xBF01
```

Transaction progress information for the merchant. 

For valid values see [Defines for callback function "put merchant information"](group___m_e_r_c_h___i_n_f_o.md)

 Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [EMV_CT_TRXOP_MERCHINFO_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-merchinfo-callback). 
** INPUT: **
[TAG_DF70_CBK_MERCHINFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df70-cbk-merchinfo): Transaction Info for merchant 
** OUTPUT: **&ndash;


### define TAG_BF02_CBK_AMOUNTCONF

```cpp
#define TAG_BF02_CBK_AMOUNTCONF 0xBF02
```

The cardholder has to confirm the amount. 

Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [EMV_CT_TRXOP_AMOUNT_CONF](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-amount-conf)

 This explicit amount confirmation is an alternative to combined confirmation with PIN entry or signature on receipt. 
** INPUT: **
[TAG_DF30_LANG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df30-lang): Language, see [Different Languages]
[TAG_DF31_TEXT_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df31-text-num): Text ID, see [Display Messages]
[TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth): Amount 
[TAG_9F03_NUM_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f03-num-amount-other): Cashback Amount 
[TAG_9C_TRANS_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9c-trans-type): Transaction Type 
[TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency): Transaction currency 
** OUTPUT: **
[TAG_DF71_CBK_AMOUNTCONF](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df71-cbk-amountconf): confirmed 1=yes, 0=no 


### define TAG_BF03_CBK_LOG_HOTLIST

```cpp
#define TAG_BF03_CBK_LOG_HOTLIST 0xBF03
```

EMVCo features "transaction log" and "hotlist". 

Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [EMV_CT_TRXOP_HOTLST_LOG_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-hotlst-log-callback)

 The application shall return information if the given card is black-listed and which amounts were already payed with that card. 
** INPUT: **
[TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan): PAN 
[TAG_5F34_PAN_SEQUENCE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f34-pan-sequence-nb): PAN Sequence Number 
[TAG_5F24_APP_EXP_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f24-app-exp-date): Expiry Date 
** OUTPUT: **
[TAG_DF72_CBK_BLACKLIST](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df72-cbk-blacklist): In hotlist yes/no, optional 
[TAG_DF73_CBK_TRANSLOG](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df73-cbk-translog): Stored amount, optional, format n12 


### define TAG_BF04_CBK_REDUCE_CAND

```cpp
#define TAG_BF04_CBK_REDUCE_CAND 0xBF04
```

Application Candidate List Reduction/Modification. 

**Note**: Due to backward compatibility the candidate-wise input data (all but selector) are put the order listed here each as sequence of all candidates, e.g. DF74, 50, 50, 50, DF04, DF04, DF04 and so on. 

Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [EMV_CT_SELOP_CBCK_APPLI_SEL](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-cbck-appli-sel)

 The application gets the candidate list and has the option to modify it. 

 It may select which candidate to choose, or reduce the candidate list, or re-order it. 

 So a selection by the cardholder can be implemented. Or a selection by local rules. 
** INPUT: **
[TAG_DF74_CBK_SELECTOR](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df74-cbk-selector): Who has to select the application (0=merchant or 1=customer) 
 Following parameters are repeated for each candidate: 
[TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label): Application label, the chosen application label according EMVCo rules and application configuration, 
[TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid): AID 
[TAG_DF60_VELOCITY_ORIG_IDX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df60-velocity-orig-idx): Original candidate index 
[TAG_5F2D_LANGUAGE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2d-language): Language preference 
[TAG_DFD00B_APPNAME_UFT8](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd00b-appname-uft8): Application label converted to UTF-8 unless switched off by transaction flow option [EMV_CT_SELOP_NO_UTF8](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-no-utf8)
[TAG_9F11_ISS_CODE_TABLE_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f11-iss-code-table-id): Code page index part of ISO-8859, length 0 if not present or discarded, absent if no candidate requires 
** OUTPUT: **
[TAG_DF75_CBK_APP_NO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df75-cbk-app-no): Index of the selected application (1-based, 0=cancel, >0xE0: 0xED=fallback, else abort). 

 A (resorted) list of candidates can be given back by including several indices in DF75. 


### define TAG_BF05_CBK_DOM_APPS

```cpp
#define TAG_BF05_CBK_DOM_APPS 0xBF05
```

Domestic app detected during application selection. 

Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [EMV_CT_SELOP_CBCK_DOMESTIC_APPS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-cbck-domestic-apps)

 An application configured as "domestic" by means of [EMV_CT_DOM_CHIP_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-dom-chip-type) has been found on the card. 
** INPUT: **
[TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid): AID 
** OUTPUT: **
[TAG_DF7E_CBK_DOM_APP_RES](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7e-cbk-dom-app-res): Domestic app in/out, see [Modes of domestic application handling](group___d_e_f___c_b_k___d_o_m_a_p_p.md)


### define TAG_BF06_CBK_LOCAL_CHECKS

```cpp
#define TAG_BF06_CBK_LOCAL_CHECKS 0xBF06
```

Callback for local checks after reading the PAN. 

Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-local-chck-callback)

 After step "READ RECORD" the available card data is given to the application. 

 Upon this information the application can modify certain transaction parameters. 
** INPUT: **
[TAG_9F42_APP_CURRENCY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f42-app-currency-code): Transaction currency 
[TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan): Primary Account Number 
[TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth): Transaction amount 
[TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit): Floor limit 
[TAG_5F28_ISS_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f28-iss-country-code): Issuer country code 
[TAG_5F24_APP_EXP_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f24-app-exp-date): Expiry Date of the card 
[TAG_DF5B_DCC_PROHIBIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5b-dcc-prohibit): Info if Dynamic Currency Conversion is forbidden (1=forbidden, 0=allowed), that's the case if currency or amount was already sent to ICC in PDOL 
[TAG_DF5C_DOM_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5c-dom-info): Special information, [Domestic callback information](group___c_b_c_k___d_o_m___i_n_f_o.md)
[TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial), [TAG_DF22_TAC_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df22-tac-online), [TAG_DF23_TAC_DEFAULT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df23-tac-default): Terminal action codes 
[TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent): Track2 equivalent data 
[TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label): Application label 
[TAG_8E_CVM_LIST](group___e_m_v_c_o___t_a_g_s.md#define-tag-8e-cvm-list): List of Cardholder Verification Methods 
** OUTPUT ** (all optional): 
[TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth): Modified transaction amount 
[TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit): Modified floor limit 
[TAG_DF76_CBK_MANIPUL_TRX](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df76-cbk-manipul-trx): Modify action analysis, possible values are [EMV_ADK_ARQC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-arqc), [EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac), [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort)
[TAG_DF5D_DOM_OPTION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5d-dom-option): Option for transaction proceeding, [Domestic callback options](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md)
[TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial), [TAG_DF22_TAC_ONLINE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df22-tac-online), [TAG_DF23_TAC_DEFAULT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df23-tac-default): Modified terminal action codes 
[TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label): Modified application label 


### define TAG_BF07_CBK_DCC

```cpp
#define TAG_BF07_CBK_DCC 0xBF07
```

Dynamic currency conversion (DCC) 

Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks), [DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check) and [EMV_CT_TRXOP_DCC_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-dcc-callback)

 The application may change the currency of the transaction (including changed amount, floor limit, and others, see [Dynamic Currency Change]). 
** INPUT: **
[TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check): see [DCC mode](group___d_c_c___m_o_d_e.md)
[TAG_9F42_APP_CURRENCY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f42-app-currency-code): Application currency (from the card) 
[TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan): Primary Account Number 
[TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth): Transaction amount 
[TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency): Transaction currency 
[TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp): Transaction currency exponent 
[TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit): Floor limit 
[TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold): Threshold value 
[TAG_8E_CVM_LIST](group___e_m_v_c_o___t_a_g_s.md#define-tag-8e-cvm-list): List of Cardholder Verification Methods 
[TAG_DF39_DCC_CBCK_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df39-dcc-cbck-info): see [DCC callback information](group___c_b_c_k___d_c_c___i_n_f_o.md)
** OUTPUT: **
[TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check): Decision if to change the currency ([DCC mode](group___d_c_c___m_o_d_e.md)) 
[TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth): Modified Transaction amount 
[TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency): Changed transaction currency 
[TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp): Changed transaction currency exponent 
[TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit): Modified floor limit 
[TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold): Changed threshold 


### define TAG_BF08_CBK_PIN

```cpp
#define TAG_BF08_CBK_PIN 0xBF08
```

PIN Input request. 

Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks)

 The application shall prompt the cardholder to enter his PIN and then give back the result. 
** INPUT: **
[TAG_DF79_CBK_PIN_INFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df79-cbk-pin-info): PIN Type, see [Definitions for PIN Input callback function](group___a_d_k___p_i_n___p_a_r_a_m.md)
[TAG_DF41_PIN_BYPASS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df41-pin-bypass): Bypass supported (1=yes, 0=no) 
[TAG_9F37_UNPREDICTABLE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f37-unpredictable-nb): Random number 
[TAG_DF7A_CBK_PIN_KEY_DATA](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7a-cbk-pin-key-data): Public Key Modulus 
[TAG_DF7B_CBK_PIN_KEY_EXP](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7b-cbk-pin-key-exp): Public key Exponent 
[TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth), [TAG_9F03_NUM_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f03-num-amount-other), and [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency): only if [EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin)
** OUTPUT: **
[TAG_DF79_CBK_PIN_INFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df79-cbk-pin-info): PIN input result, see [Return values](group___a_d_k___p_i_n___r_e_t_u_r_n.md)


### define TAG_BF09_CBK_CARDHOLDERINFO

```cpp
#define TAG_BF09_CBK_CARDHOLDERINFO 0xBF09
```

A text information has to be displayed to the cardholder. 

Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [EMV_CT_TRXOP_CARDHINFO_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-cardhinfo-callback)

 Possible values: see [Defines for callback function "cardholder information"](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md)
** INPUT: **
[TAG_DF6E_CBK_CARDHOLDERINFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6e-cbk-cardholderinfo): Transaction Info for cardholder 
** OUTPUT: **&ndash;


### define TAG_BF7F_CBK_TRACE

```cpp
#define TAG_BF7F_CBK_TRACE 0xBF7F
```

Callback for Traces. 

Called depending on [EMV_CT_INIT_OPT_TRACE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace) Recommended way to fetch traces is via ADK-LOG. 

 Use this callback functionality only if you have special needs. 

 See also [Traces]. 
** INPUT: **

 ASCII Trace ([TAG_TRACE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-trace)) 
** OUTPUT: **&ndash;


### define TAG_BF13_CBK_RND

```cpp
#define TAG_BF13_CBK_RND 0xBF13
```

Random number provided by the calling application. 

**Deprecated**: 

not supported anymore 



 Usually the EMV ADK resp. L2 kernel uses the OS functionality for getting a random number. 

 Only for velocity kernel, invoked depending on [EMV_CT_TRXOP_RND_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-rnd-callback)
** INPUT: **

 none 
** OUTPUT: **

 random number from app ([TAG_9F37_UNPREDICTABLE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f37-unpredictable-nb)) 


### define FS_CALLBACK_DATA_RECORD

```cpp
#define FS_CALLBACK_DATA_RECORD 0xFF
```


### define EMV_CT_SER_Init_Framework

```cpp
#define EMV_CT_SER_Init_Framework(
    dataIn,
    dataInLen,
    dataOut,
    dataOutLen
)
EMV_CT_SER_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (dataIn), (dataInLen), (dataOut), (dataOutLen))
```


### define EMV_CT_INIT_OPT_BASE_INIT

```cpp
#define EMV_CT_INIT_OPT_BASE_INIT 0x00000001
```

base init: set options and register callback, but do not allocate memory. Useful on devices without contact EMV like UX410. 

### define EMV_CT_INIT_OPT_L1_DUMP

```cpp
#define EMV_CT_INIT_OPT_L1_DUMP 0x00000002
```


**Deprecated**: 

not supported anymore as non-kernel tags are collected by default 

### define EMV_CT_INIT_OPT_CONFIG_MODE

```cpp
#define EMV_CT_INIT_OPT_CONFIG_MODE 0x00000008
```


**Note**: Do not directly update configuration files if this option is active. 

Configuration is only written to files upon ExitFramework and ApplyConfiguration instead of written upon each configuration function or framework initialisation, which results in performance improvement. 


### define EMV_CT_INIT_OPT_USE_DEF_VT_CAPK

```cpp
#define EMV_CT_INIT_OPT_USE_DEF_VT_CAPK 0x00000010
```

Use "EMV_Keys.xml" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals. 

### define EMV_CT_INIT_OPT_DELETE_ALL

```cpp
#define EMV_CT_INIT_OPT_DELETE_ALL 0x00000020
```

delete all existing configuration files using the same virtual terminal 

### define EMV_CT_INIT_OPT_TRACE

```cpp
#define EMV_CT_INIT_OPT_TRACE 0x00000100
```

Callback trace ([TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace)), switch on EMV trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-adk-log) or log configuration file missing or read error. 

### define EMV_CT_INIT_OPT_TRACE_CLT

```cpp
#define EMV_CT_INIT_OPT_TRACE_CLT 0x00000200
```

Callback trace ([TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace)), switch on client trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-adk-log) or log configuration file missing or read error. 

### define EMV_CT_INIT_OPT_TRACE_SYSLOG

```cpp
#define EMV_CT_INIT_OPT_TRACE_SYSLOG 0x00000800
```

Callback trace ([TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace)), additionally write to syslog. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-adk-log) or log configuration file missing or read error. 

### define EMV_CT_INIT_OPT_TRACE_ADK_LOG

```cpp
#define EMV_CT_INIT_OPT_TRACE_ADK_LOG 0x00080000
```

Solely use ADK-LOG for tracing. Deactivates trace callback ([TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace)). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file "EMVCT". 

### define EMV_CT_INIT_OPT_TIMINGS

```cpp
#define EMV_CT_INIT_OPT_TIMINGS 0x00100000
```

measure card and terminal performance. Note: For this feature other trace output is switched off 

### define EMV_CT_INIT_OPT_SHARED_CONFIG

```cpp
#define EMV_CT_INIT_OPT_SHARED_CONFIG 0x00200000
```


**Note**: Only the processes very first [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) decides the shared config mode. 

On VOS/VOS2 use `/mnt/flash/etc/config/adkemv` for persistence instead of ` $(HOME)/flash `. VOS3: `/mnt/appdata/versioned/globalshare/sdi/emv/`. 


### define EMV_CT_INIT_OPT_EPP_MASTER

```cpp
#define EMV_CT_INIT_OPT_EPP_MASTER 0x00400000
```


Generate a Configuration Id for every configuration change at time of persisting. Generate a checksum for every persistence file to be aware of changes via file system. The configuration id is specific to a Virtual Terminal and returned on Init Framework and when the configuration is stored to the file system. It is seen on serial interface only. 


### define EMV_CT_INIT_VIRT_1

```cpp
#define EMV_CT_INIT_VIRT_1 0x01000000
```

virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_2

```cpp
#define EMV_CT_INIT_VIRT_2 0x02000000
```

virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_3

```cpp
#define EMV_CT_INIT_VIRT_3 0x03000000
```

virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_4

```cpp
#define EMV_CT_INIT_VIRT_4 0x04000000
```

virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_5

```cpp
#define EMV_CT_INIT_VIRT_5 0x05000000
```

virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_6

```cpp
#define EMV_CT_INIT_VIRT_6 0x06000000
```

virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_7

```cpp
#define EMV_CT_INIT_VIRT_7 0x07000000
```

virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_8

```cpp
#define EMV_CT_INIT_VIRT_8 0x08000000
```

virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_9

```cpp
#define EMV_CT_INIT_VIRT_9 0x09000000
```

virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_10

```cpp
#define EMV_CT_INIT_VIRT_10 0x0A000000
```

virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_11

```cpp
#define EMV_CT_INIT_VIRT_11 0x0B000000
```

virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_12

```cpp
#define EMV_CT_INIT_VIRT_12 0x0C000000
```

virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_13

```cpp
#define EMV_CT_INIT_VIRT_13 0x0D000000
```

virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_14

```cpp
#define EMV_CT_INIT_VIRT_14 0x0E000000
```

virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_15

```cpp
#define EMV_CT_INIT_VIRT_15 0x0F000000
```

virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_16

```cpp
#define EMV_CT_INIT_VIRT_16 0x10000000
```

virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_17

```cpp
#define EMV_CT_INIT_VIRT_17 0x11000000
```

virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_18

```cpp
#define EMV_CT_INIT_VIRT_18 0x12000000
```

virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_19

```cpp
#define EMV_CT_INIT_VIRT_19 0x13000000
```

virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_20

```cpp
#define EMV_CT_INIT_VIRT_20 0x14000000
```

virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_Init_Framework

```cpp
#define EMV_CT_Init_Framework(
    numberOfAIDs,
    EMV_Callback,
    externalData,
    options
)
EMV_CT_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options))
```

Initialize EMV ADK. 

**Parameters**: 

  * **numberOfAIDs** Number of AIDs 

 Default: [EMV_ADK_DEFAULT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-default-aidsupp), max.: [EMV_ADK_LIMIT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-limit-aidsupp)

 TLV tag: [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **EMV_Callback** Function pointer for callback (see [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt)) 

 Not serialized to TLV interface. 
  * **externalData** Application data pointer, is transmitted unchanged to callback function [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt)

 Not serialized to TLV interface. 
  * **options** Flags for framework initialisation, allowed values see [Options at framework initialisation](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md)

 TLV tag: [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)


**Return**: `[EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok):` success
`[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal):` internal communication problem, illegal file content, memory allocation
`[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param):` interface version mismatch or buffer overflow
`[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err):` TLV processing problem
`[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed):` concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Explanation in programmers guide: [Initialize EMV Framework]

Transport tags used for serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)[P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)


### define EXIT_CT_BASE

```cpp
#define EXIT_CT_BASE 0x00
```


set Framework to base-initialised state. Free memory Transactions not possible 


### define EXIT_CT_COMPLETE

```cpp
#define EXIT_CT_COMPLETE 0x01
```

dlclose all modules 

set Framework to uninitialised state. 


### define EMV_CT_CUSTOMER

```cpp
#define EMV_CT_CUSTOMER 0x00
```

bit 1,2 used for reader selection: Customer Card Slot 

### define EMV_CT_SAM_1

```cpp
#define EMV_CT_SAM_1 0x01
```

bit 1,2 used for reader selection: SAM1 

### define EMV_CT_SAM_2

```cpp
#define EMV_CT_SAM_2 0x02
```

bit 1,2 used for reader selection: SAM2 

### define EMV_CT_SAM_3

```cpp
#define EMV_CT_SAM_3 (EMV_CT_SAM_1|EMV_CT_SAM_2)
```

bit 1,2 used for reader selection: SAM3 

### define EMV_CT_TRY_PPS

```cpp
#define EMV_CT_TRY_PPS 0x04
```

Try to increase the baudrate by using PPS. 

### define EMV_CT_SKIP_ATR

```cpp
#define EMV_CT_SKIP_ATR 0x08
```

Skip ATR reading, not included in response. 

### define EMV_CT_TRY_PPS_EPA

```cpp
#define EMV_CT_TRY_PPS_EPA 0x10
```

PPS handling for Austrian Maestro Cards. 

### define EMV_CT_WARMRESET

```cpp
#define EMV_CT_WARMRESET 0x20
```

Warm Reset to ICC (Cold reset must have been applied before) 

### define EMV_CT_DETECT_WRONG_ATR

```cpp
#define EMV_CT_DETECT_WRONG_ATR 0x40
```

Distinguish between wrong ATR and card wrong side/no chip and return applicable return value (for customer slot only) 

### define EMV_CT_ID0_ISO_MODE

```cpp
#define EMV_CT_ID0_ISO_MODE 0x80
```

The customer card (ID 0) is reset in mode EMV per default, use this bit to switch to ISO 7816 (for ID0 only) 

### define EMV_CT_SAM_EMV_MODE

```cpp
#define EMV_CT_SAM_EMV_MODE 0x40
```

SAMs are reset in mode ISO 7816 per default, use this bit to switch to EMV 311 (for SAMs only) 

### define EMV_CT_CARD_CLASS_B_3V

```cpp
#define EMV_CT_CARD_CLASS_B_3V 0x80
```

For class B (3V) cards. 

### define CONTACT_LED_ID_0

```cpp
#define CONTACT_LED_ID_0 0x00
```

There is currently maximum one CT Slot. 

### define CONTACT_LED_OFF

```cpp
#define CONTACT_LED_OFF 0x00
```

Switch LED Off. 

### define CONTACT_LED_ON

```cpp
#define CONTACT_LED_ON 0x01
```

Switch LED On. 

### define CONTACT_LED_BLINK

```cpp
#define CONTACT_LED_BLINK 0x02
```

Enable blinking, fixed timing. 

**Deprecated**: 

: No more supported, for instance, because it relies on SVRMGR functionality that is going to be removed 

### define CONTACT_LED_COLOR_WHITE

```cpp
#define CONTACT_LED_COLOR_WHITE 0x01
```

white led 

### define CONTACT_LED_COLOR_RED

```cpp
#define CONTACT_LED_COLOR_RED 0x02
```

red led 

### define CONTACT_LED_COLOR_GREEN

```cpp
#define CONTACT_LED_COLOR_GREEN 0x03
```

green led 

### define CONTACT_LED_COLOR_BLUE

```cpp
#define CONTACT_LED_COLOR_BLUE 0x04
```

blue led 

### define CONTACT_LED_COLOR_YELLOW

```cpp
#define CONTACT_LED_COLOR_YELLOW 0x05
```

yellow led 

## Source code

```cpp
/****************************************************************************
*  Product:     ADK Cards Service - EMV Contact (CT)
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     Client (structure) interface - functions and definitions
****************************************************************************/

#ifndef _EMV_CT_INTERFACE_H_   /* avoid double interface-includes */
#define _EMV_CT_INTERFACE_H_

#ifdef __cplusplus
extern "C" {
#endif

#include "emv/EMV_Common_Interface.h"
#include "EMV_CT_Link.h"
#include "EMV_CT_Version.h"

#define DLL_CTC // no client shared libraries anymore


// ========================================================================================================
// === COMMON PART ===
// ========================================================================================================


typedef struct EMV_CT_APPLI_STRUCT
{
  unsigned char    aidlen;  
  unsigned char    AID[16]; 
} EMV_CT_APPLI_TYPE;

typedef struct EMV_CT_CANDIDATE_STRUCT
{
  EMV_CT_APPLI_TYPE    candidate;  
  unsigned char  name[17];         
} EMV_CT_CANDIDATE_TYPE;

#define EMV_CT_SUPPORTED_SIZE_9F0A 50 

typedef struct EMV_CT_CANDIDATE_DATA_STRUCT
{
  unsigned char API;             
  unsigned char CodeTableIndex;  
  unsigned char IIN[4];          
  unsigned char IBAN[35];        
  unsigned char BIC[12];         
  unsigned char country2[2];     
  unsigned char country3[3];     
  unsigned char len9F06;         
  unsigned char DF62_ASF[33];    
  unsigned char selData[1+EMV_CT_SUPPORTED_SIZE_9F0A];   
} EMV_CT_CANDIDATE_DATA_TYPE;

#define  EMV_CT_COMMON_CANDS    10  

typedef struct EMV_CT_DOL_STRUCT
{
  unsigned char    dollen;           
  unsigned char    DOL[EMV_ADK_MAX_LG_DDOL]; 
} EMV_CT_DOL_TYPE;

typedef struct EMV_CT_TRACK2_STRUCT
{
  unsigned char    tr2len;      
  unsigned char    tr2data[19]; 
} EMV_CT_TRACK2_TYPE;

typedef struct EMV_CT_CRDNAME_STRUCT
{
  unsigned char    crdNameLen;    
  unsigned char    crdName[26];   
} EMV_CT_CRDNAME_TYPE;

typedef struct EMV_CT_ICCRND_STRUCT
{
  unsigned char    iccRNDLen;    
  unsigned char    iccRND[8];    
} EMV_CT_ICCRND_TYPE;

typedef struct EMV_CT_ISSDATA_STRUCT
{
  unsigned char    issDataLen;    
  unsigned char    issData[32];   
} EMV_CT_ISSDATA_TYPE;



#define  EMV_CT_PIN_INPUT_ONLINE          0     
#define  EMV_CT_PIN_INPUT_PLAIN           1     
#define  EMV_CT_PIN_INPUT_ENCIPHERED      2     
#define  EMV_CT_PIN_INPUT_PLAIN_EXT       3     
#define  EMV_CT_PIN_INPUT_ENCIPHERED_EXT  4     
#define  EMV_CT_CVM_CUSTOM                5     


#define  EMV_CT_PIN_INPUT_OKAY       0  
#define  EMV_CT_PIN_INPUT_COMM_ERR   1  
#define  EMV_CT_PIN_INPUT_ABORT      2  
#define  EMV_CT_PIN_INPUT_BYPASS     3  
#define  EMV_CT_PIN_INPUT_TIMEOUT    4  
#define  EMV_CT_PIN_INPUT_OTHER_ERR  5  
#define  EMV_CT_PIN_UNCRIT_TIMEOUT   6  


#define  EMV_CT_EMV_0                        0x00  
#define  EMV_CT_EMV_1                        0x01  
#define  EMV_CT_NON_EMV                      0xFF  


// ========================================================================================================
// === Transaction Information ===
// ========================================================================================================


  #define EMV_ADK_INF_INIT                    0x80  
  #define EMV_ADK_INF_SEL_TERMDATA            0x81  
  #define EMV_ADK_INF_SEL_TEXTE               0x82  
  #define EMV_ADK_INF_SEL_PAYINIT_OK          0x83  
  #define EMV_ADK_INF_SEL_CHECK_OK            0x85  
  #define EMV_ADK_INF_SEL_BUILD_APPLI_LIST    0x86  
  #define EMV_ADK_INF_SEL_ANOTHER             0x87  
  #define EMV_ADK_INF_SEL_FINAL               0x88  
  #define EMV_ADK_INF_SEL_NO                  0x89  
  #define EMV_ADK_INF_SEL_FINISH_OK           0x8A  
  #define EMV_ADK_INF_SEL_BLOCK_APPLI         0x8B  
  #define EMV_ADK_INF_SEL_BLOCK_CARD          0x8C  
  #define EMV_ADK_INF_SEL_LOA_PROC            0x8D  
  #define EMV_ADK_INF_SEL_UI_LOA_PROC         0x8E  
  #define EMV_ADK_INF_TRANS_CHECK_OK          0x91  
  #define EMV_ADK_INF_TRANS_READ_TERM         0x92  
  #define EMV_ADK_INF_TRANS_READ_APPLI        0x93  
  #define EMV_ADK_INF_TRANS_SEL_LANG          0x95  
  #define EMV_ADK_INF_TRANS_CONF_AMOUNT       0x96  
  #define EMV_ADK_INF_TRANS_INITIATE          0x97  
  #define EMV_ADK_INF_TRANS_READ_CARD_DATA    0x98  
  #define EMV_ADK_INF_TRANS_CHECK_APPLI_DATA  0x99  
  #define EMV_ADK_INF_TRANS_PROC_RESTRICTION  0x9A  
  #define EMV_ADK_INF_TRANS_CARD_AUTH         0x9B  
  #define EMV_ADK_INF_TRANS_VERIFY            0x9C  
  #define EMV_ADK_INF_TRANS_RISK              0x9D  
  #define EMV_ADK_INF_TRANS_AAT               0x9E  
  #define EMV_ADK_INF_TRANS_1GENAC            0x9F  
  #define EMV_ADK_INF_TRANS_VERIFY_CARD       0xA0  
  #define EMV_ADK_INF_TRANS_VERIFY_ABANDON    0xA1  
  #define EMV_ADK_INF_TRANS_VERIFY_OTHER      0xA2  
  #define EMV_ADK_INF_TRANS_VERIFY_ONLINE     0xA3  
  #define EMV_ADK_INF_TRANS_VERIFY_NOK        0xA4  
  #define EMV_ADK_INF_TRANS_VERIFY_OK         0xA5  
  #define EMV_ADK_INF_TRANS_VERIFY_SIGNATURE  0xA6  
  #define EMV_ADK_INF_TRANS_1CRYPT_TC         0xA7  
  #define EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA   0xA8  
  #define EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER 0xA9  
  #define EMV_ADK_INF_TRANS_1CRYPT_AAC        0xAA  
  #define EMV_ADK_INF_TRANS_1CRYPT_AAR        0xAB  
  #define EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN    0xAC  
  #define EMV_ADK_INF_ONL_CHECK_OK            0xB1  
  #define EMV_ADK_INF_ONL_FALSE               0xB3  
  #define EMV_ADK_INF_ONL_TRUE                0xB4  
  #define EMV_ADK_INF_ONL_PIN                 0xB5  
  #define EMV_ADK_INF_ONL_HOST_AUTH           0xB6  
  #define EMV_ADK_INF_ONL_CRIT_SC             0xB7  
  #define EMV_ADK_INF_ONL_AC                  0xB8  
  #define EMV_ADK_INF_ONL_2GENAC              0xB9  
  #define EMV_ADK_INF_ONL_UNCRIT_SC           0xBA  
  #define EMV_ADK_INF_TRANS_VERIFY_PARAM      0xBB  
  #define EMV_ADK_INF_FETCH_TXN_TAG_DATA      0xBC  


  #define EMV_ADK_STEP_01                      1  
  #define EMV_ADK_STEP_02                      2  
  #define EMV_ADK_STEP_03                      3  
  #define EMV_ADK_STEP_04                      4  
  #define EMV_ADK_STEP_05                      5  
  #define EMV_ADK_STEP_06                      6  
  #define EMV_ADK_STEP_07                      7  
  #define EMV_ADK_STEP_08                      8  
  #define EMV_ADK_STEP_09                      9  
  #define EMV_ADK_STEP_10                     10  
  #define EMV_ADK_STEP_11                     11  
  #define EMV_ADK_STEP_12                     12  
  #define EMV_ADK_STEP_13                     13  
  #define EMV_ADK_STEP_14                     14  
  #define EMV_ADK_STEP_15                     15  
  #define EMV_ADK_STEP_16                     16  
  #define EMV_ADK_STEP_17                     17  
  #define EMV_ADK_STEP_18                     18  
  #define EMV_ADK_STEP_19                     19  
  #define EMV_ADK_STEP_20                     20  
  #define EMV_ADK_STEP_21                     21  
  #define EMV_ADK_STEP_22                     22  
  #define EMV_ADK_STEP_23                     23  
  #define EMV_ADK_STEP_24                     24  
  #define EMV_ADK_STEP_25                     25  
  #define EMV_ADK_STEP_26                     26  
  #define EMV_ADK_STEP_27                     27  
  #define EMV_ADK_STEP_28                     28  
  #define EMV_ADK_STEP_29                     29  
  #define EMV_ADK_STEP_30                     30  


  #define EMV_ADK_DF62_ERR_POS1_CHIP_RESET              0x1000u    
  #define EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID            0x2000u    
  #define EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE            0x2100u    
  #define EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE           0x2200u    
  #define EMV_ADK_DF62_ERR_POS1_SEL_FINAL               0x3000u    
  #define EMV_ADK_DF62_ERR_POS1_GPO                     0x4000u    
  #define EMV_ADK_DF62_ERR_POS1_READ                    0x5000u    
  #define EMV_ADK_DF62_ERR_POS1_INT_AUTH                0x6000u    
  #define EMV_ADK_DF62_ERR_POS1_GETDATA_PTC             0x7001u    
  #define EMV_ADK_DF62_ERR_POS1_GETCHALLENGE            0x7100u    
  #define EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN          0x7210u    
  #define EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN        0x7220u    
  #define EMV_ADK_DF62_ERR_POS1_GETDATA_ATC             0x8001u    
  #define EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC           0x8002u    
  #define EMV_ADK_DF62_ERR_POS1_GENAC_1                 0x9001u    
  #define EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA             0x9011u    
  #define EMV_ADK_DF62_ERR_POS1_EXTAUTH                 0xA000u    
  #define EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT             0xB100u    
  #define EMV_ADK_DF62_ERR_POS1_GENAC_2                 0x9002u    
  #define EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA             0x9012u    
  #define EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT         0xB200u    


  #define EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER         0x0000u    
  #define EMV_ADK_DF62_ERR_POS2_BASE_ERROR              0x0001u    
  #define EMV_ADK_DF62_ERR_POS2_RAPDU                   0xFFFFu    
//      EMV_ADK_DF62_ERR_POS2_XXXX                      XXXX     // SW1 SW2 of R-APDU


  #define EMV_ADK_DF62_ERR_POS3_CHIPCARD                0x01      
  #define EMV_ADK_DF62_ERR_POS3_TERMINAL                0x02      
  #define EMV_ADK_DF62_ERR_POS3_ACQUIRER                0x03      
  #define EMV_ADK_DF62_ERR_POS3_CARDHOLDER              0x04      


  #define EMV_ADK_DF62_ERR_POS7_ABORT                   0x01      
  #define EMV_ADK_DF62_ERR_POS7_MAG_FALLBACK            0x02      



// ========================================================================================================
// === TERMINAL CONFIGURATION ===
// ========================================================================================================

typedef struct EMV_CT_TERMDATA_STRUCT /* === EMV_CT_TERMDATA_TYPE === */
{
  unsigned char   TermTyp;                     
  unsigned char   TermCountryCode[2];          
  unsigned char   TermCap[3];                  
  unsigned char   TermAddCap[5];               
  unsigned char   TermIdent[8];                
  unsigned char   CurrencyTrans[2];            
  unsigned char   ExpTrans;                    
  unsigned char   SuppLang[EMV_ADK_MAX_LANG];  
  unsigned char   IFDSerialNumber[8];          

  char   KernelVersion[EMV_ADK_VERSION_ASCII_SIZE];       
  char   FrameworkVersion[EMV_ADK_VERSION_ASCII_SIZE];    
  char   L1DriverVersion[EMV_ADK_VERSION_ASCII_SIZE];     

  unsigned char   Info_Included_Data[8];     
} EMV_CT_TERMDATA_TYPE; 


/* Byte 1 */
#define  EMV_CT_INPUT_TRM_TYPE               0x01  
#define  EMV_CT_INPUT_TRM_CURRENCY           0x02  
#define  EMV_CT_INPUT_TRM_EXP_CURRENCY       0x04  
#define  EMV_CT_INPUT_TRM_COUNTRY_CODE       0x08  
#define  EMV_CT_INPUT_TRM_CAPABILITIES       0x10  
#define  EMV_CT_INPUT_TRM_ADD_CAPS           0x20  
#define  EMV_CT_INPUT_TRM_ID                 0x40  
/* Byte 2 */
#define  EMV_CT_INPUT_TRM_LANGUAGES          0x01  
#define  EMV_CT_INPUT_TRM_IFD_SERIAL         0x02  
#define  EMV_CT_INPUT_TRM_KERNEL_VERSION     0x04  
#define  EMV_CT_INPUT_TRM_FRAMEWORK_VERSION  0x08  
#define  EMV_CT_INPUT_TRM_L1DRIVER_VERSION   0x10  


// ========================================================================================================
// === APPLICATION CONFIGURATION ===
// ========================================================================================================


#define  EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE   0x00 
#define  EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER    0x01 


#define  EMV_CT_CHECKSUM_DEFAULT                      "\x00\x00\x00\x00\x00" 

/* Byte 1 */
#define  EMV_CT_CHECKSUM_INCLUDE_VERSION              0x01 
#define  EMV_CT_CHECKSUM_TRANSACTION_LOG              0x02 
#define  EMV_CT_CHECKSUM_EXCEPTION_FILE               0x04 
#define  EMV_CT_CHECKSUM_FORCE_ONLINE                 0x08 
#define  EMV_CT_CHECKSUM_FORCE_ACCEPTANCE             0x10 
#define  EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE     0x20 
#define  EMV_CT_CHECKSUM_SUPPORT_PSE                  0x40 
#define  EMV_CT_CHECKSUM_ACCOUNT_TYPE                 0x80 

/* Byte 2 */
#define  EMV_CT_CHECKSUM_SUPPORT_ADVICES              0x01 
#define  EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF      0x02 
#define  EMV_CT_CHECKSUM_PIN_BYPASS                   0x04 
#define  EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL         0x08 
#define  EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE   0x10 
#define  EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS        0x20 
#define  EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD       0x40 
#define  EMV_CT_CHECKSUM_MULTILANG_SUPPORT            0x80 

// Byte 3
#define  EMV_CT_CHECKSUM_PIN_BYPASS_ONCE              0x01 

#define EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS      20  

#define EMV_CT_MAX_TAGLIST_SIZE              20  
#define EMV_CT_MAX_APP_VERS                  10

typedef struct EMV_CT_TAGLIST_STRUCT
{
  unsigned char   anztag;                        
  unsigned short  tags[EMV_CT_MAX_TAGLIST_SIZE]; 
} EMV_CT_TAGLIST_TYPE;

typedef struct EMV_CT_APPLIDATA_STRUCT // EMV_CT_APPLIDATA_TYPE
{
  // *** EMVCo mandatory data ***
  unsigned char     VerNum[2];                  
  unsigned char     AppName[16+1];              
  unsigned char     ASI;                        
  unsigned char     BrKey[2];                   
  unsigned char     TermIdent[8];               
  unsigned char     FloorLimit[4];              
  unsigned char     Threshhold[4];              
  unsigned char     TargetPercentage;           
  unsigned char     MaxTargetPercentage;        
  unsigned char     TACDenial[5];               
  unsigned char     TACOnline[5];               
  unsigned char     TACDefault[5];              
  unsigned char     EMV_Application;            
  EMV_CT_DOL_TYPE   Default_TDOL;               
  EMV_CT_DOL_TYPE   Default_DDOL;               
  unsigned char     MerchIdent[15];             
  unsigned char     CDAProcessing;              
  unsigned char     ACBeforeAfter;              
  unsigned char     AIP_CVM_not_supported;      
  unsigned char     POS_EntryMode;              
  unsigned char     Additional_Versions_No[2*EMV_CT_MAX_APP_VERS]; 
  unsigned char     Security_Limit[4];          

  unsigned char     App_FlowCap[5];             

  // Options for further development:
  // * define limits for AIDs, e.g. use this AID from 0$ to 100$ and another AID from 50$ to 1000$, ... to enable optimizing interchange fees for the customers

  // *** optional data (range 9F50 - 9F7F) ***
  unsigned char        Additional_Tags_TRM[EMV_ADK_ADD_TAG_SIZE]; 
  EMV_CT_DOL_TYPE      Additional_Tags_CRD;                       
  EMV_CT_TAGLIST_TYPE  Mandatory_Tags_CRD;                        

  // Terminal data per AID, enables virtual terminals per AID, duplicated from terminal wide parameters, the terminal wide is used if not available
  unsigned char     App_TermCap[3];             
  unsigned char     Capabilities_belowLimit[3]; 
  unsigned char     App_CountryCodeTerm[2];     
  unsigned char     App_TermAddCap[5];          
  unsigned char     App_TermTyp;                

  // parameters for domestic / local application selection and processing handling
  EMV_CT_APPLI_TYPE xAIDPrio[EMV_ADK_MAX_PRIO_APP];          
  unsigned char     tucFallbackMIDs[EMV_ADK_MAX_CHP_TO_MSR]; 
  unsigned char     xuc_Special_TRX[8];         
  unsigned char     uc_FallBack_Handling;       
  unsigned char     Customer_CVM;               

  unsigned char     Chksum_Params[5];           
  char              ChksumASCIIEMVCO[EMV_ADK_CHECKSUM_ASCII_SIZE];   

  EMV_CT_APPLI_TYPE MasterAID;                  
  unsigned char     TxnTypesSale[3];            
  unsigned char     TxnTypesCash[3];            
  unsigned char     TxnTypesCashback[3];        
  unsigned char     TxnTypesRefund[3];          
  unsigned char     DataContainerReadIds[89];   
  unsigned char     DataContainerReadRanges[89];

  unsigned char     Info_Included_Data[8];      
} EMV_CT_APPLIDATA_TYPE;  


/* Byte 1 */
#define  EMV_CT_INPUT_APL_VERSION            0x01  
#define  EMV_CT_INPUT_APL_NAME               0x02  
#define  EMV_CT_INPUT_APL_ASI                0x04  
#define  EMV_CT_INPUT_APL_MERCHANT_CATCODE   0x08  
#define  EMV_CT_INPUT_APL_TID                0x10  
#define  EMV_CT_INPUT_APL_FLOOR_LIMIT        0x20  
#define  EMV_CT_INPUT_APL_THRESH             0x40  
#define  EMV_CT_INPUT_APL_TARGET             0x80  
/* Byte 2 */
#define  EMV_CT_INPUT_APL_MAXTARGET          0x01  
#define  EMV_CT_INPUT_APL_TAC_DENIAL         0x02  
#define  EMV_CT_INPUT_APL_TAC_ONLINE         0x04  
#define  EMV_CT_INPUT_APL_TAC_DEFAULT        0x08  
#define  EMV_CT_INPUT_APL_TDOL               0x10  
#define  EMV_CT_INPUT_APL_DDOL               0x20  
#define  EMV_CT_INPUT_APL_MERCHANT_IDENT     0x40  
#define  EMV_CT_INPUT_APL_ADD_TAGS           0x80  
/* Byte 3 */
#define  EMV_CT_INPUT_APL_MAND_TAGS          0x01  
#define  EMV_CT_INPUT_APL_TERM_CAPS          0x02  
#define  EMV_CT_INPUT_APL_FLOW_CAPS          0x04  
#define  EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP    0x08  
#define  EMV_CT_INPUT_APL_COUNTRY_CODE       0x10  
#define  EMV_CT_INPUT_APL_ADD_TERM_CAPS      0x20  
#define  EMV_CT_INPUT_APL_PRIO_APPS          0x40  
#define  EMV_CT_INPUT_APL_MID                0x80  
/* Byte 4 */
#define  EMV_CT_INPUT_APL_EMV_APPKIND        0x01  
#define  EMV_CT_INPUT_APL_SPECIAL_TXN        0x02  
#define  EMV_CT_INPUT_APL_FALLBACK           0x04  
#define  EMV_CT_INPUT_APL_CDA                0x08  
#define  EMV_CT_INPUT_APL_AC_BEFOREAFTER     0x10  
#define  EMV_CT_INPUT_APL_POS_ENTRY          0x20  
#define  EMV_CT_INPUT_APL_TRM_TYPE           0x40  
#define  EMV_CT_INPUT_APL_CUSTOMER_CVM       0x80  
/* Byte 5 */
#define  EMV_CT_INPUT_APL_CHECKSUM_PARAMS    0x01  
#define  EMV_CT_INPUT_APL_CHECKSUM           0x02  
#define  EMV_CT_INPUT_APL_MASTER_AID         0x04  
#define  EMV_CT_INPUT_APL_ADD_CRD_TAGS       0x08  
#define  EMV_CT_INPUT_APL_ADD_VERSIONS       0x10  
#define  EMV_CT_INPUT_APL_SEC_LIMIT          0x20  
#define  EMV_CT_INPUT_APL_SEC_CAPS           0x40  
// free bit 0x80

// byte 6, EMV_CT_APPLIDATA_STRUCT::Info_Included_Data[5]
#define  EMV_CT_INPUT_APL_TXN_TYPES_SALE     0x01  
#define  EMV_CT_INPUT_APL_TXN_TYPES_CASH     0x02  
#define  EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK 0x04  
#define  EMV_CT_INPUT_APL_TXN_TYPES_REFUND   0x08  
#define  EMV_CT_INPUT_APL_DCR_LIST_IDS       0x10  
#define  EMV_CT_INPUT_APL_DCR_LIST_RANGES    0x20  


#define  CVM_CONTINUE                 0x00 
#define  CVM_DEFAULT_SIGN             0x01 
#define  CVM_DEFAULT_ONLINE_PIN       0x02 
#define  CVM_ABORT                    0x03 


/* Byte 1 */
#define  FORCE_RISK_MANAGEMENT                 0x01  
#define  BLACKLIST                             0x02  
#define  TRANSACTION_LOG                       0x04  
#define  PIN_BYPASS                            0x08  
#define  FORCE_ONLINE                          0x10  
#define  FORCE_ACCEPTANCE                      0x20  
/* Byte 2 */
#define  CASH_SUPPORT                          0x01  
#define  CASHBACK_SUPPORT                      0x02  
#define  EMV_CT_CHECK_INCONS_TRACK2_PAN        0x04  
#define  EMV_CT_CONF_AMOUNT_PIN                0x08  
#define  EMV_CT_DOMESTIC_CHECK                 0x10  
#define  TRANSACTION_TYPE_17_FOR_CASH          0x20  
#define  EMV_CT_CHECK_INCONS_TRACK2_NO_EXP     0x40  
#define  TRANSACTION_TYPE_30_FOR_PREAUTH       0x80  
/* Byte 3 */
#define  REFERRAL_AFTER_TRX                    0x01  
#define  DCC_CHECK                             0x02  
#define  REFUND_CONFIRM_AMOUNT                 0x04  
#define  EMV_CT_USE_CFG_APPL_NAME              0x08  
#define  EMV_CT_FALLBACK_ON_INCONS_TRACK2      0x10  
#define  EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE    0x20  
#define  EMV_CT_SDA_SELECTED_TVR_ON            0x40  
#define  EMV_CASHBACK_OFFLINE_SUPPORT          0x80  
/* Byte 4 */
#define  REFUND_PROCESSING_RESTRICTIONS        0x01  
#define  REFUND_NO_GENERATE_AC                 0x02  
#define  REFUND_FLOW_INTERAC                   0x04  
#define  REFUND_NO_ZERO_AMOUNT                 0x08  
#define  DPAS_DATA_STORAGE_SUPPORT             0x10  
#define  DPAS_EXTENDED_LOGGING_SUPPORT         0x20  
#define  DPAS_CDCVM_SUPPORT                    0x40  
#define  APP_FLOW_VISA_QUASI_CASH              0x80  
/* Byte 5 */
#define  APP_FLOW_CASHBACK_TRANS_TYPE_00       0x01  
#define REFUND_FLOW_ARQC                       0x02  


#define  CDA_EMV_MODE_1               0 
#define  CDA_EMV_MODE_2               1 
#define  CDA_EMV_MODE_3               2 
#define  CDA_EMV_MODE_4               3 

#define  FB_DEFAULT_EMVCO             0x00 
#define  FB_GERMAN_POS_SPEC           0x01 
#define  FB_NO_UNATTENDED_FALLB       0x80 




// ========================================================================================================
// === EMV TRANSACTION DATA ===
// ========================================================================================================

typedef struct EMV_CT_DOM_CHIP_STRUCT
{
  EMV_CT_APPLI_TYPE xAIDChip;             
  unsigned char     ucAppName[16+1];      
  unsigned char     ucASI;                
  unsigned char     xuc_Special_TRX[8];   
  unsigned char     uc_EMVConformSelect;  
} EMV_CT_DOM_CHIP_TYPE;  


typedef struct EMV_CT_FALLBCK_MSR_STRUCT
{
  unsigned char  xMID;                
  unsigned char  xuc_Special_TRX[8];  
  unsigned char  ucFallback;          
  unsigned char  ucOptions;           
} EMV_CT_FALLBCK_MSR_TYPE;  


typedef struct EMV_CT_PAYMENT_STRUCT
{
  unsigned char           Amount[6];                 
  unsigned char           CurrencyTrans[2];          
  unsigned char           ExpTrans;                  
  unsigned char           Date[3];                   
  unsigned char           Time[3];                   
  unsigned char           TransCount[4];             
  unsigned char           Cashback_Amount[6];        
  unsigned char           Force_Online;              
  unsigned char           Force_Acceptance;          
  unsigned char           Online_Switch;             
  unsigned char           uc_AccountType;            
  char                    PreSelected_Language;      
  unsigned char           uc_AmountConfirmation;     
  EMV_CT_TAGLIST_TYPE     Additional_Result_Tags;    
} EMV_CT_PAYMENT_TYPE;   


typedef struct EMV_CT_APPS_SELECT_STRUCT
{
  unsigned char            No_DirectorySelect;                       
  char                     ucCardholderConfirmation;                 
  EMV_CT_APPLI_TYPE        ExcludeEmvAIDs[3];                        
  unsigned char            countDomesticChip;                        
  EMV_CT_DOM_CHIP_TYPE     xDomestic_Chip[EMV_ADK_MAX_DOM_CHP];      
  unsigned char            countFallbackMS;                          
  EMV_CT_FALLBCK_MSR_TYPE  xFallback_MS[EMV_ADK_MAX_FB_MSR];         
  unsigned char            countCommonCands;                         
  unsigned char            ModifiedCandidates[EMV_CT_COMMON_CANDS];  
} EMV_CT_APPS_SELECT_TYPE;   



// ========================================================================================================
// === APPLICATION SELECTION ===
// ========================================================================================================

#define FB_NEVER        0x00 
#define FB_CHIP_APP     0x01 
#define FB_APP          0x02 
#define FB_CHIP         0x03 
#define FB_ALWAYS       0x04 

#define FB_OPT_CASHBACK 0x01 


typedef struct EMV_CT_SELECT_STRUCT // EMV_CT_SELECT_TYPE
{
  unsigned char            InitTXN_Buildlist;      
  unsigned char            TransType;              
  EMV_CT_PAYMENT_TYPE      TXN_Data;               
  EMV_CT_APPS_SELECT_TYPE  SEL_Data;               
  unsigned char            TxnOptions[5];          
  unsigned char            TxnSteps[3];            
  unsigned char            Info_Included_Data[8];  
} EMV_CT_SELECT_TYPE;  


/* Byte 1 */
#define  INPUT_SEL_AMOUNT              0x01  
#define  INPUT_SEL_AMOUNT_CURRENCY     0x02  
#define  INPUT_SEL_CUREXPONENT         0x04  
#define  INPUT_SEL_DATE                0x08  
#define  INPUT_SEL_TIME                0x10  
#define  INPUT_SEL_TTYPE               0x20  
#define  INPUT_SEL_EXCLUDE_AID         0x40  
#define  INPUT_SEL_BUILDLIST           0x80  
/* Byte 2 */
#define  INPUT_SEL_FORCE_ONLINE        0x01  
#define  INPUT_SEL_FORCE_ACCEPT        0x02  
#define  INPUT_SEL_NO_PSE              0x04  
#define  INPUT_SEL_CARDCONF            0x08  
#define  INPUT_SEL_ONLINE_SWITCH       0x10  
#define  INPUT_SEL_TXN_OPTIONS         0x20  
#define  INPUT_SEL_DOMCHIP             0x40  
#define  INPUT_SEL_FALLBACK_MSR        0x80  
/* Byte 3 */
#define  INPUT_SEL_TXN_COUNTER         0x01  
#define  INPUT_SEL_TXN_STEPS           0x02  
#define  INPUT_SEL_CB_AMOUNT           0x04  
#define  INPUT_SEL_ACCOUNT_TYPE        0x08  
#define  INPUT_SEL_LANGUAGE            0x10  
#define  INPUT_SEL_AMOUNT_CONF         0x20  
#define  INPUT_SEL_ADD_TAGS            0x40  
#define  INPUT_SEL_MOD_CANDLIST        0x80  



#define  CARD_CONF_YES          0x00  
#define  CARD_CONF_NO           0x01  


#define  REUSE_LIST_REMOVE_AID      0x00  
#define  BUILD_NEW                  0x01  

#define  REUSE_EXISTING_LIST_SEL_0  0xF0  
#define  REUSE_EXISTING_LIST_SEL_1  0xF1  
#define  REUSE_EXISTING_LIST_SEL_2  0xF2  
#define  REUSE_EXISTING_LIST_SEL_3  0xF3  
#define  REUSE_EXISTING_LIST_SEL_4  0xF4  
  // continues up to 0xFF for up to 15 candidates


typedef struct EMV_CT_SELECTRES_STRUCT
{
  EMV_CT_APPLI_TYPE        T_84_DFName;                       
  unsigned char            AppName[16+1];                     
  unsigned char            T_50_ApplicationName[16+1];        
  unsigned char            T_9F11_CodeTable;                  
  unsigned char            T_9F12_PreferredName[16+1];        
  unsigned char            T_5F2D_Lang_Pref[8+1];             
  unsigned char            T_DF62_ErrorData[15];              
  unsigned char            T_DF63_DisplayText;                
  unsigned char            countFallbackMS;                   
  EMV_CT_FALLBCK_MSR_TYPE  xFallback_MS[EMV_ADK_MAX_FB_MSR];  
  unsigned char            PDOL_tags;                         

  EMV_CT_CANDIDATE_TYPE    T_BF04_Candidates[EMV_CT_COMMON_CANDS];    
  EMV_CT_APPLI_TYPE        T_DF04_Aidselected;                        

  unsigned char            T_DF61_Info_Received_Data[8];  
} EMV_CT_SELECTRES_TYPE;  

#define EMV_SELECTRES_PDOL_TAG_TRANSTYPE   0x20 
#define EMV_SELECTRES_PDOL_TAG_ACCOUNTTYPE 0x40 
#define EMV_SELECTRES_PDOL_TAG_AMOUNT      0x80 

// byte 1 (T_DF61_Info_Received_Data[0])
#define  DF61_SEL_DF62_ERRORDATA       0x01  
#define  DF61_SEL_AGREED_APPNAME       0x02  
#define  DF61_SEL_50_APPLICATION_NAME  0x04  
#define  DF61_SEL_9F11_CODE_TABLE      0x08  
#define  DF61_SEL_5F2D_LANG_PREF       0x10  
#define  DF61_SEL_84_DF_NAME           0x20  
#define  DF61_SEL_9F12_PREF_NAME       0x40  
#define  DF61_SEL_9F63_DISPTXT         0x80  
// byte 2 (T_DF61_Info_Received_Data[1])
#define  DF61_SEL_MID_DATA             0x01  
#define  DF61_SEL_PDOL                 0x02  
#define  DF61_SEL_AID                  0x04  
#define  DF61_SEL_CANDIDATES           0x08  



// ========================================================================================================
// === TRANSACTION EXECUTION ===
// ========================================================================================================

  // byte 1 (TxnOptions[0])
  #define  EMV_CT_SELOP_CBCK_APPLI_SEL           0x01  
  #define  EMV_CT_SELOP_RESERV_ALLOW_B_ON_A      0x02  
  #define  EMV_CT_SELOP_CBCK_DOMESTIC_APPS       0x04  
  #define  EMV_CT_SELOP_ADDALL                   0x08  
  #define  EMV_CT_SELOP_ADDBLO                   0x10  
  #define  EMV_CT_NO_LONGEST_AID_MATCH           0x20  
  #define  EMV_CT_ALLOW_BLOCKED                  0x40  
  #define  EMV_CT_SELOP_REMOVEALL_BUT_EXCLUDED   0x80  
  // byte 2 (TxnOptions[1])
  #define EMV_CT_TRXOP_PIN_BYPASS_NO_SUBSEQUENT  0x01  
  #define EMV_CT_TRXOP_MULTIPLE_RANDOM_NUMBERS   0x02  
  #define EMV_CT_TRXOP_DCC_CALLBACK              0x04  
  #define EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS       0x08  
  #define EMV_CT_TRXOP_NO_FALLBACK_AFTER_CVM     0x10  
  #define EMV_CT_TRXOP_AMOUNT_CONF               0x20  
  #define EMV_CT_TRXOP_ENFORCE_PIN               0x40  
  #define EMV_CT_TRXOP_FALLBACK_GOODSERVICE      0x80  
  // byte 3 (TxnOptions[2])
  #define EMV_CT_TRXOP_MERCHINFO_CALLBACK        0x01  
  #define EMV_CT_TRXOP_RND_CALLBACK              0x02  
  #define EMV_CT_TRXOP_HOTLST_LOG_CALLBACK       0x04  
  #define EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK       0x08  
  #define EMV_CT_TRXOP_CARDHINFO_CALLBACK        0x10  
  #define EMV_CT_TRXOP_EARLY_PIN_ENTRY           0x20  
  #define EMV_CT_TRXOP_DELAYED_EARLY_PIN         0x40  
  #define EMV_CT_TRXOP_KERNEL_PARSE_UNKNOWN_TLV  0x80  
  // byte 4 (TxnOptions[3])
  #define EMV_CT_SELOP_NO_UTF8                   0x01  
  #define EMV_CT_TRXOP_NO_UTF8                   0x01  
  #define EMV_CT_TRXOP_TIP_AMOUNT_ZERO           0x02  
#  define EMV_CT_TRXOP_NO_CHECK_BB_PADDING       0x04  
#  define EMV_CT_TRXOP_NO_CHECK_DDLEN            0x08  
  // byte 5 (TxnOptions[4])
  #define ONL_OPTS_LAST_PIN_TRY                  0x01  
  #define EMV_CT_TRXOP_PERFORM_ISS_ACQ_CVM       0x02  
  #define EMV_CT_TRXOP_WRITE_DS_OFFLINE_TXN      0x08  
  #define EMV_CT_TRXOP_FORCE_TACIAC_DEFAULT      0x10  
  #define EMV_CT_SELOP_WEEK_PRIORITY_APPS        0x20  
  #define EMV_CT_CUST_APPLI_SELECTION_PERFORMED  0x40  
  #define EMV_CT_SELOP_DETECT_EMPTY_LIST         0x80  


// byte 1
#define  RETURN_CANDIDATE_LIST       0x01  
#define  RETURN_AFTER_GPO            0x02  
#define  RETURN_AFTER_READ_RECORD    0x04  
#define  RETURN_AFTER_DATA_AUTH      0x08  
#define  RETURN_FOR_CVM_PROCESS      0x10  
#define  RETURN_FOR_CVM_FINISH       0x20  
  // 0x40 leave gap for a return after CVM processing but before risk management
#define  RETURN_AFTER_RISK_MANGEMENT 0x80  
// byte 2
#define  RETURN_CAND_LIST_PREPROC    0x01   
#define  RETURN_CAND_LIST_SKIP       0x02   
// byte 3
#define  MS_RETURN_CALLBACKS            0x80  
#define  MS_ADD_TO_HOTLIST              0x01  
#define  MS_DECLINE_AAC                 0x02  
#define  MS_ABORT_TXN                   0x04  
#define  MS_PIN_BYPASS                  0x08  
#define  MS_CUST_CVM_OK                 0x10  
#define  MS_PINPAD_NOTPRESENT           0x20  
#define  MS_PINICC_STOP                 0x40  


#define  CONFIRM_AMOUNT_BEFORE_CVM   0x00 
#define  CONFIRM_AMOUNT_AFTER_CVM    0x01 


#define MODE_DCC_NO_TRX_CONTINUE   0  
#define MODE_DCC_YES_TRX_CONTINUE  1  
#define MODE_DCC_NO_TRX_ABORT      2  
#define MODE_DCC_YES_TRX_ABORT     3  


typedef struct EMV_CT_TRANSAC_STRUCT // EMV_CT_TRANSAC_TYPE
{
  EMV_CT_PAYMENT_TYPE TXN_Data;                  

  unsigned char       TxnOptions[5];             
  unsigned char       TxnSteps[3];               

  unsigned char       Info_Included_Data[8];     
} EMV_CT_TRANSAC_TYPE;   


  /* Byte 1 */
#define  INPUT_OFL_TXN_COUNTER         0x01  
#define  INPUT_OFL_ADD_TAGS            0x02  
#define  INPUT_OFL_CB_AMOUNT           0x04  
#define  INPUT_OFL_ACCOUNT_TYPE        0x08  
#define  INPUT_OFL_LANGUAGE            0x10  
#define  INPUT_OFL_AMOUNT_CONF         0x20  
#define  INPUT_OFL_TXN_OPTIONS         0x40  
#define  INPUT_OFL_TXN_STEPS           0x80  
  /* Byte 2 */
#define  INPUT_OFL_AMOUNT              0x01  
#define  INPUT_OFL_AMOUNT_CURRENCY     0x02  
#define  INPUT_OFL_CUREXPONENT         0x04  
#define  INPUT_OFL_DATE                0x08  
#define  INPUT_OFL_TIME                0x10  
#define  INPUT_OFL_FORCE_ONLINE        0x20  
#define  INPUT_OFL_FORCE_ACCEPT        0x40  
#define  INPUT_OFL_ONLINE_SWITCH       0x80  


typedef struct EMV_CT_SRCRIPTRES_STRUCT
{
  unsigned char   countScriptCrit;                                             
  unsigned char   ScriptCritResult[EMV_ADK_SCRIPT_RESULT_MAX][EMV_ADK_SCRIPT_RESULT_LEN];    
  unsigned char   countScriptUnCrit;                                           
  unsigned char   ScriptUnCritResult[EMV_ADK_SCRIPT_RESULT_MAX][EMV_ADK_SCRIPT_RESULT_LEN];  
} EMV_CT_SRCRIPTRES_TYPE;


typedef struct EMV_CT_HOST_STRUCT
{
  char             OnlineResult;           
  unsigned char    AuthResp[2];            
  unsigned char    LenAuth;                
  unsigned char*   AuthData;               
  unsigned short   LenScriptCrit;          
  unsigned char*   ScriptCritData;         
  unsigned short   LenScriptUnCrit;        
  unsigned char*   ScriptUnCritData;       
  unsigned char    AuthorizationCode[6];   
  char             Result_referral;        
  char             AuthResp_Referral[2];   
  char             AuthResp_Wrong_PIN[2];  
  char             AuthResp_Positive[2];   
  unsigned char    PreAuth_Amount[6];      
  unsigned char    amountOthUpd[6];        
  unsigned char    TxnOptions[5];          
  unsigned char    TxnSteps[3];            

  unsigned short   WriteDataStorageLen;    
  unsigned char*   WriteDataStorageData;   

  unsigned char    Info_Included_Data[8];  
} EMV_CT_HOST_TYPE;


  /* Byte 1, Index 0 */
#define  INPUT_ONL_ONLINE_RESP         0x01  
#define  INPUT_ONL_ONLINE_AC           0x02  
#define  INPUT_ONL_AUTHDATA            0x04  
#define  INPUT_ONL_SCRIPTCRIT          0x08  
#define  INPUT_ONL_SCRIPTUNCRIT        0x10  
#define  INPUT_ONL_AUTHCODE            0x20  
#define  INPUT_ONL_RESULT_REFERRAL     0x40  
#define  INPUT_ONL_ARC_REFERRAL        0x80  
  /* Byte 2, Index 1 */
#define  INPUT_ONL_ARC_WRONGPIN        0x01  
#define  INPUT_ONL_TXN_OPTIONS         0x02  
#define  INPUT_ONL_AMOUNT_GAC2         0x04  
#define  INPUT_ONL_TXN_STEPS           0x08  
#define  INPUT_ONL_ARC_POSITIVE        0x10  
#define  INPUT_ONL_WRITE_DS_DATA       0x20  
#define  INPUT_ONL_AMOUNT_OTH          0x40  


typedef struct EMV_CT_TRANSRES_STRUCT // EMV_CT_TRANSRES_TYPE
{
  unsigned long           StatusInfo;                       
  unsigned char           T_9F27_CryptInfo;                 
  unsigned char           T_9F36_ATC[2];                    
  unsigned char           T_9F26_Cryptogramm[8];            
  unsigned char           T_5A_PAN[10];                     
  unsigned char           T_9F39_POSEntryMode;              
  unsigned char           T_5F24_AppExpDate[3];             
  unsigned char           T_9F41_TransCount[4];             
  unsigned char           T_5F34_PANSequenceNo[1];          
  EMV_CT_TRACK2_TYPE      T_57_DataTrack2;                  
  EMV_CT_ISSDATA_TYPE     T_9F10_DataIssuer;                
  unsigned char           T_9F37_RandomNumber[4];           
  unsigned char           T_95_TVR[5];                      
  unsigned char           T_9A_Date[3];                     
  unsigned char           T_9F21_Time[3];                   
  unsigned char           T_9C_TransType;                   
  unsigned char           T_5F2A_CurrencyTrans[2];          
  unsigned char           T_82_AIP[2];                      
  unsigned char           T_9F1A_TermCountryCode[2];        
  unsigned char           T_9F34_CVM_Res[3];                
  unsigned char           T_9F33_TermCap[3];                
  unsigned char           T_9F35_TermTyp;                   
  unsigned char           T_9F1E_IFDSerialNumber[8];        
  EMV_CT_APPLI_TYPE       T_84_DFName;                      
  unsigned char           T_9F09_VerNum[2];                 
  EMV_CT_SRCRIPTRES_TYPE  scriptresults;                    
  unsigned char           T_9B_TSI[2];                      
  EMV_CT_APPLI_TYPE       T_9F06_AID;                       
  unsigned char           Add_TXN_Tags[EMV_ADK_ADD_TAG_SIZE]; 
  unsigned char           T_9F02_TXNAmount[6];              
  unsigned char           T_9F03_TXNAdditionalAmount[6];    
  unsigned char           T_9F53_MC_CatCode[1];             
  unsigned char           AppName[16+1];                    
  unsigned char           T_5F25_AppEffDate[3];             
  unsigned char           T_5F28_IssCountryCode[2];         
  unsigned char           T_9F45_DataAuthCode[2];           
  EMV_CT_ICCRND_TYPE      T_9F4C_ICCDynNumber;              
  unsigned char           TACDenial[5];                     
  unsigned char           TACOnline[5];                     
  unsigned char           TACDefault[5];                    
  unsigned char           T_9F0E_IACDenial[5];              
  unsigned char           T_9F0F_IACOnline[5];              
  unsigned char           T_9F0D_IACDefault[5];             
  unsigned char           T_9F40_AddTermCap[5];             
  unsigned char           T_DF62_ErrorData[15];             
  unsigned char           T_9F16_MerchIdent[15];            
  unsigned char           T_DF63_DisplayText;               
  EMV_CT_CRDNAME_TYPE     T_5F20_Cardholder;                
  unsigned char           T_5F2D_Lang_Pref[8+1];            
  unsigned char           T_9F08_ICC_Appli_Vers_No[2];      
  unsigned char           T_5F36_Trx_Currency_Exp;          
  unsigned char           T_DF59_Offl_PIN_errors;           
  unsigned char           T_5F30_ServiceCode[2];            
  unsigned char           T_DF17_FallbackMID;               
  unsigned char           T_8E_CVM_List[EMV_ADK_MAX_CVM_LIST_LEN];  
  unsigned char           T_DF64_KernelDebugData[EMV_ADK_DEBUG_DATA_SIZE];  
  unsigned char           T_DF61_Info_Received_Data[8];     
} EMV_CT_TRANSRES_TYPE;


/* Byte 1 */
#define  TRX_STATUSINFO               0x01 
#define  TRX_9F27_CRYPTINFO           0x02 
#define  TRX_9F36_ATC                 0x04 
#define  TRX_9F26_CRYPTOGRAMM         0x08 
#define  TRX_5A_PAN                   0x10 
#define  TRX_9F39_POS_ENTRY_MODE      0x20 
#define  TRX_5F24_APPEXPDATE          0x40 
#define  TRX_9F41_TRANSCOUNT          0x80 

/* Byte 2 */
#define  TRX_5F34_PAN_SEQ_NUMBER      0x01 
#define  TRX_57_DATA_TRACK2           0x02 
#define  TRX_9F10_DATAISSUER          0x04 
#define  TRX_9F37_RANDOM_NUMBER       0x08 
#define  TRX_95_TVR                   0x10 
#define  TRX_9A_DATE                  0x20 
#define  TRX_9F21_TIME                0x40 
#define  TRX_9C_TRANSTYPE             0x80 

/* Byte 3 */
#define  TRX_5F2A_TRX_CURRENCY        0x01 
#define  TRX_82_AIP                   0x02 
#define  TRX_9F1A_TERM_COUNTRY_CODE   0x04 
#define  TRX_9F34_CVM_RES             0x08 
#define  TRX_9F33_TERMCAP             0x10 
#define  TRX_9F35_TERMTYP             0x20 
#define  TRX_9F1E_IFDSERIALNUMBER     0x40 
#define  TRX_84_DFNAME                0x80 

/* Byte 4 */
#define  TRX_9F09_VERNUM              0x01 
#define  TRX_SCRIPTRESULTS            0x02 
#define  TRX_9B_TSI                   0x04 
#define  TRX_9F06_AID                 0x08 
#define  TRX_ADDITIONAL_TAGS          0x10 
#define  TRX_APPNAME                  0x20 
#define  TRX_5F25_APPEFFDATE          0x40 
#define  TRX_5F28_ISSCOUNTRYCODE      0x80 

/* Byte 5 */
#define  TRX_9F45_DATAAUTHCODE        0x01 
#define  TRX_9F4C_ICCDYNNUMBER        0x02 
#define  TRX_TAC_DENIAL               0x04 
#define  TRX_TAC_ONLINE               0x08 
#define  TRX_TAC_DEFAULT              0x10 
#define  TRX_9F0E_IAC_DENIAL          0x20 
#define  TRX_9F0F_IAC_ONLINE          0x40 
#define  TRX_9F0D_IAC_DEFAULT         0x80 

/* Byte 6 */
//#define  TRX_9F42_APPCURRENCYCODE     0x01 ///< B6b1: 2013-11-20 removed former T_9F42_AppCurrencyCode (only ::EMV_CT_CARDDATA_TYPE)
#define  TRX_9F40_TERMCAP             0x02 
#define  TRX_DF62_ERRORDATA_TRANS     0x04 
#define  TRX_9F16_MERCHANT_ID         0x08 
#define  TRX_5F20_CARDHOLDER          0x10 
#define  TRX_5F2D_LANG_PREFERENCE     0x20 
#define  TRX_9F08_ICC_APPLI_VERS_NO   0x40 
#define  TRX_5F36_TRX_CURRENCY_EXPO   0x80 

/* Byte 7 */
#define  TRX_5F30_SERVICE_CODE        0x01 
#define  EMV_CT_TRX_DF17_FALLBACK_MID 0x02 
#define  EMV_CT_TRX_8E_CVM_List       0x04 
#define  TRX_DF63_DISPLAY_ID          0x08 
#define  TRX_DF64_KERNEL_DEBUG        0x10 
#define  TRX_9F02_AMOUNT              0x20 
#define  TRX_9F03_CB_AMOUNT           0x40 
#define  TRX_9F53_MC_CATCODE          0x80 

/* Byte 8 */
#define  TRX_DF59_OFFLINE_PIN_ERRORS  0x01 




// ========================================================================================================
// === MISCELLANEOUS ===
// ========================================================================================================


// ========================================================================================================
// === CALLBACK defines ===
// ========================================================================================================

typedef unsigned char EMV_ADK_MerchantInfo;
#define  eEMVMerCustSelApp     0                   
#define  eEMVMerConfAmount     1                   
#define  eEMVMerCrdhldVerif    2                   
#define  eEMVMerReadAppData    3                   
#define  eEMVMerOffAuth        4                   
#define  eEMVMer1stGAC         5                   
#define  eEMVMer2ndGAC         6                   
#define  eEMVMerSelect         7                   
#define  eEMVMerPINProgress    8                   
#define  eEMVMerCustConf       9                   
#define  eEMVMerPINInput      10                   
#define  eEMVMerLangSelect    11                   

#define  eEMVMerCustLang       0x80 

typedef unsigned char eCardholderInfo;
#define  eEMVCrdWrongPIN       0                   
#define  eEMVCrdCorrectPIN     1                   
#define  eEMVCrdAppChange      2                   
#define  eEMVCrdLastTryPIN     3                   


#define CBK_SEL_MERCHANT 0x00 
#define CBK_SEL_CUSTOMER 0x01 


#define CBK_DOMAPP_REMAIN   0  
#define CBK_DOMAPP_REMOVE   1  
#define CBK_DOMAPP_REMAIN2  2  
#define CBK_DOMAPP_REMAIN3  3  


#define DOM_OPTION_LEN             3     
#define DOM_OPTION_AUSTRIAN_NGV    0x01  
#define DOM_OPTION_TRX_INTERCEPT   0x02  
#define DOM_OPTION_ABORT_NO_TEXT   0x04  
#define DOM_OPTION_TIP_OFF         0x08  


#define DOM_INFO_LEN               3    
#define DOM_INFO_ICC_REQ_AMOUNT    0x01 
#define DOM_INFO_ICC_REQ_TRANSTYPE 0x02 

#define DCC_CBCK_INFO_LEN             3  
#define DCC_CBCK_INFO_PDOL_FORBIT  0x01  


#define MAX_CONF_KEYS  60 // deprecated: This limit is not used anywhere

typedef struct EMV_CT_CAPKEY_STRUCT
{
  unsigned char *RID;          
  unsigned char Index;         
  unsigned char *Key;          
  unsigned char KeyLen;        
  unsigned char Exponent;      
  unsigned char *Hash;         
  unsigned char noOfRevocEntries; 
  unsigned char* RevocEntries;    
} EMV_CT_CAPKEY_TYPE;


typedef struct EMV_CT_CAPREAD_STRUCT
{
  unsigned char RID[5];        
  unsigned char Index;         
  unsigned char KeyLen;        
} EMV_CT_CAPREAD_TYPE;


// ========================================================================================================
// === CALLBACK FUNCTION for additional features and apps interaction during the transaction            ===
// === (PIN, Application Selection, DCC, ...)                                                           ===
// ========================================================================================================

#define TAG_BF01_CBK_MERCHINFO      0xBF01  
#define TAG_BF02_CBK_AMOUNTCONF     0xBF02  
#define TAG_BF03_CBK_LOG_HOTLIST    0xBF03  
#define TAG_BF04_CBK_REDUCE_CAND    0xBF04  
#define TAG_BF05_CBK_DOM_APPS       0xBF05  
#define TAG_BF06_CBK_LOCAL_CHECKS   0xBF06  
#define TAG_BF07_CBK_DCC            0xBF07  
#define TAG_BF08_CBK_PIN            0xBF08  
#define TAG_BF09_CBK_CARDHOLDERINFO 0xBF09  
#define TAG_BF7F_CBK_TRACE          0xBF7F  
#define TAG_BF13_CBK_RND            0xBF13  



#define FS_CALLBACK_DATA_RECORD 0xFF  // currently max. 201 bytes (5 candidates in cbk_reduceCandidateList())

// ========================================================================================================
// === SERIALIZED FUNCTIONAL CONTACT INTERFACE                                                          ===
// ========================================================================================================


#define EMV_CT_SER_Init_Framework(dataIn, dataInLen, dataOut, dataOutLen) EMV_CT_SER_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (dataIn), (dataInLen), (dataOut), (dataOutLen))

DLL_CTC EMV_ADK_INFO EMV_CT_SER_Init_Framework_Client(const char *version, const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC void EMV_CT_SER_Exit_Framework(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_MapVirtualTerminal(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_StoreCAPKey(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_ReadCAPKeys(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_SetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_GetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_SetAppliData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_GetAppliData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_StartTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_GetCandidateData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_ContinueOffline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_ContinueOnline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_fetchTxnTags(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_fetchTxnDOL(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_updateTxnTags(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_CheckSupportedAID(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC EMV_ADK_INFO EMV_CT_SER_EndTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC unsigned char EMV_CT_SER_SmartISO(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC unsigned char EMV_CT_SER_SmartDetect(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC unsigned char EMV_CT_SER_SmartReset(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC unsigned char EMV_CT_SER_SmartPowerOff(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC unsigned char EMV_CT_SER_SmartPIN(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CTC unsigned char EMV_CT_SER_Send_PIN_Offline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);


// ========================================================================================================
// === FUNCTIONAL CONTACT INTERFACE                                                                     ===
// ========================================================================================================


#define EMV_CT_INIT_OPT_BASE_INIT       0x00000001   
#define EMV_CT_INIT_OPT_L1_DUMP         0x00000002   
#define EMV_CT_INIT_OPT_CONFIG_MODE     0x00000008   
#define EMV_CT_INIT_OPT_USE_DEF_VT_CAPK 0x00000010   
#define EMV_CT_INIT_OPT_DELETE_ALL      0x00000020   
#define EMV_CT_INIT_OPT_TRACE           0x00000100   
#define EMV_CT_INIT_OPT_TRACE_CLT       0x00000200   
#define EMV_CT_INIT_OPT_TRACE_SYSLOG    0x00000800   
#define EMV_CT_INIT_OPT_TRACE_ADK_LOG   0x00080000   
#define EMV_CT_INIT_OPT_TIMINGS         0x00100000   
#define EMV_CT_INIT_OPT_SHARED_CONFIG   0x00200000   
#define EMV_CT_INIT_OPT_EPP_MASTER      0x00400000   

#define EMV_CT_INIT_VIRT_1              0x01000000   
#define EMV_CT_INIT_VIRT_2              0x02000000   
#define EMV_CT_INIT_VIRT_3              0x03000000   
#define EMV_CT_INIT_VIRT_4              0x04000000   
#define EMV_CT_INIT_VIRT_5              0x05000000   
#define EMV_CT_INIT_VIRT_6              0x06000000   
#define EMV_CT_INIT_VIRT_7              0x07000000   
#define EMV_CT_INIT_VIRT_8              0x08000000   
#define EMV_CT_INIT_VIRT_9              0x09000000   
#define EMV_CT_INIT_VIRT_10             0x0A000000   
#define EMV_CT_INIT_VIRT_11             0x0B000000   
#define EMV_CT_INIT_VIRT_12             0x0C000000   
#define EMV_CT_INIT_VIRT_13             0x0D000000   
#define EMV_CT_INIT_VIRT_14             0x0E000000   
#define EMV_CT_INIT_VIRT_15             0x0F000000   
#define EMV_CT_INIT_VIRT_16             0x10000000   
#define EMV_CT_INIT_VIRT_17             0x11000000   
#define EMV_CT_INIT_VIRT_18             0x12000000   
#define EMV_CT_INIT_VIRT_19             0x13000000   
#define EMV_CT_INIT_VIRT_20             0x14000000   


#define EMV_CT_Init_Framework(numberOfAIDs, EMV_Callback, externalData, options) EMV_CT_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options))

/*****************************************************************************
*  EMV_CT_Init_Framework_Client
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_Init_Framework_Client(const char *version, unsigned char numberOfAIDs, EMV_CT_CALLBACK_FnT EMV_Callback, void* externalData, unsigned long options);


/*****************************************************************************
*  EMV_CT_Exit_Framework
*****************************************************************************/
DLL_CTC void EMV_CT_Exit_Framework(void);

/*****************************************************************************
*  EMV_CT_Exit_Framework_extended
*****************************************************************************/
DLL_CTC void EMV_CT_Exit_Framework_extended(unsigned char options);

#define  EXIT_CT_BASE             0x00  
#define  EXIT_CT_COMPLETE         0x01  


/*****************************************************************************
*  EMV_CT_CLIENT_GetVersion
*****************************************************************************/
DLL_CTC const char* EMV_CT_CLIENT_GetVersion(void);


/*****************************************************************************
*  EMV_CT_FRAMEWORK_GetVersion
*****************************************************************************/
DLL_CTC const char* EMV_CT_FRAMEWORK_GetVersion(void);


/*****************************************************************************
*  EMV_CT_MapVirtualTerminal
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_MapVirtualTerminal(EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType, unsigned char *TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal);


/*****************************************************************************
*  EMV_CT_StoreCAPKey
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_StoreCAPKey(EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType, const EMV_CT_CAPKEY_TYPE *pxKeyData);


/*****************************************************************************
*  EMV_CT_ReadCAPKeys
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_ReadCAPKeys(EMV_CT_CAPREAD_TYPE *pxKeyData, unsigned char *pucMaxnum);

/*****************************************************************************
*  EMV_CT_GetCAPKeyInfo
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_GetCAPKeyInfo(EMV_CT_CAPREAD_TYPE *pxKeyInfo, unsigned capacity, unsigned offset, unsigned *received, unsigned *configured);


/*****************************************************************************
*  EMV_CT_SetTermData
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_SetTermData(EMV_CT_TERMDATA_TYPE* pxTermData);

/*****************************************************************************
*  EMV_CT_GetTermData
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_GetTermData(EMV_CT_TERMDATA_TYPE* pxTermData);

/*****************************************************************************
*  EMV_CT_SetAppliData
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_SetAppliData(EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CT_APPLI_TYPE* pxAID, EMV_CT_APPLIDATA_TYPE* pxAppliData);

/*****************************************************************************
*  EMV_CT_GetAppliData
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_GetAppliData(EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CT_APPLI_TYPE* pxAID, EMV_CT_APPLIDATA_TYPE* pxAppliData);


/*****************************************************************************
*  EMV_CT_ApplyConfiguration
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_ApplyConfiguration(unsigned long options);


/*****************************************************************************
* EMV_CT_StartTransaction
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_StartTransaction(EMV_CT_SELECT_TYPE *pxSelectInput, EMV_CT_SELECTRES_TYPE* pxSelectRes);

/*****************************************************************************
* EMV_CT_GetCandidateData
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_GetCandidateData(EMV_CT_CANDIDATE_DATA_TYPE *candidateData);

/*****************************************************************************
*  EMV_CT_ContinueOffline
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_ContinueOffline(EMV_CT_TRANSAC_TYPE *pxTransactionInput, EMV_CT_TRANSRES_TYPE *pxTransRes);

/*****************************************************************************
*  EMV_CT_ContinueOnline
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_ContinueOnline(EMV_CT_HOST_TYPE *pxOnlineInput, EMV_CT_TRANSRES_TYPE *pxTransRes);

/*****************************************************************************
*  EMV_CT_fetchTxnTags
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_fetchTxnTags(unsigned long options, unsigned long* requestedTags, unsigned short noOfRequestedTags,
                                         unsigned char* tlvBuffer, unsigned short bufferLength, unsigned short* tlvDataLength );


/*****************************************************************************
*  EMV_CT_fetchTxnDOL
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_fetchTxnDOL(unsigned long options, const unsigned char* DOL, unsigned dolLen, unsigned char* buffer, unsigned bufferSize, unsigned* dataLength);

/*****************************************************************************
*  EMV_CT_updateTxnTags
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_updateTxnTags(unsigned long options, unsigned char *tlvBuffer, unsigned short bufferLength);

typedef struct
{
   EMV_CT_APPLI_TYPE aid;       
   unsigned char  API;          
   unsigned char  text[17];     
   unsigned char  aux_text[17]; 
   unsigned char  code_table;   
   unsigned char  lang_pref[9]; 
} EMV_CT_CandListType;

/*****************************************************************************
 *  EMV_CT_CheckSupportedAID
 *****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_CheckSupportedAID(
    const EMV_CT_APPLI_TYPE* aid, unsigned char ASI,
    const unsigned char* defaultLabel,
    EMV_CT_CandListType* pCandList, unsigned char MaxCand,
    unsigned char* pCandidateCount, unsigned short* sw12,
    const unsigned char* adtCardTagList);

/*****************************************************************************
*  EMV_CT_EndTransaction
*****************************************************************************/
DLL_CTC EMV_ADK_INFO EMV_CT_EndTransaction(unsigned long options);

// ========================================================================================================
// === CONTACT FUNCTIONS for transparent ICC access of the customer card ===
// ========================================================================================================

#define  EMV_CT_CUSTOMER               0x00  
#define  EMV_CT_SAM_1                  0x01  
#define  EMV_CT_SAM_2                  0x02  
#define  EMV_CT_SAM_3                  (EMV_CT_SAM_1|EMV_CT_SAM_2) 
#define  EMV_CT_TRY_PPS                0x04  
#define  EMV_CT_SKIP_ATR               0x08  
#define  EMV_CT_TRY_PPS_EPA            0x10  
#define  EMV_CT_WARMRESET              0x20  
// bit 7,8 ID 0 Slot only
#define  EMV_CT_DETECT_WRONG_ATR       0x40  
#define  EMV_CT_ID0_ISO_MODE           0x80  
// bit 7,8 SAM slots only
#define  EMV_CT_SAM_EMV_MODE           0x40  
#define  EMV_CT_CARD_CLASS_B_3V        0x80  


/*****************************************************************************
* EMV_CT_SmartISO
*****************************************************************************/
DLL_CTC unsigned char EMV_CT_SmartISO (unsigned char ucOptions, unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut, unsigned short usOutBufferLength);

/*****************************************************************************
* EMV_CT_SmartDetect
*****************************************************************************/
DLL_CTC unsigned char EMV_CT_SmartDetect(unsigned char ucOptions);

/*****************************************************************************
* EMV_CT_SmartReset
*****************************************************************************/
DLL_CTC unsigned char EMV_CT_SmartReset(unsigned char ucOptions, unsigned char* pucATR, unsigned long* pnATRLength);

/*****************************************************************************
* EMV_CT_SmartPowerOff
*****************************************************************************/
DLL_CTC unsigned char EMV_CT_SmartPowerOff(unsigned char ucOptions);

/*****************************************************************************
* EMV_CT_SmartPIN
*****************************************************************************/
DLL_CTC unsigned char EMV_CT_SmartPIN(const unsigned char * INICCRandom,
                                      const unsigned char * PubKeyData,
                                      int PubKeyLen,
                                      int Exponent,
                                      unsigned char* pucPINResultData);


/*****************************************************************************
* EMV_CT_Send_PIN_Offline
*****************************************************************************/
DLL_CTC unsigned char EMV_CT_Send_PIN_Offline(unsigned char *pucPINResultData);


  #define CONTACT_LED_ID_0                  0x00 

  #define CONTACT_LED_OFF                   0x00 
  #define CONTACT_LED_ON                    0x01 
  #define CONTACT_LED_BLINK                 0x02 

  #define CONTACT_LED_COLOR_WHITE           0x01  
  #define CONTACT_LED_COLOR_RED             0x02  
  #define CONTACT_LED_COLOR_GREEN           0x03  
  #define CONTACT_LED_COLOR_BLUE            0x04  
  #define CONTACT_LED_COLOR_YELLOW          0x05  

/*****************************************************************************
* EMV_CT_LED
*****************************************************************************/
DLL_CTC unsigned char EMV_CT_LED(unsigned char ucLedId, unsigned char ucLedState, unsigned char ucLedColor, unsigned long ulTimeoutMs);


#ifdef __cplusplus
}     // extern "C"
#endif

#endif  // #ifndef _EMV_CT_INTERFACE_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

---
title: Application data
summary: Definitions used for functions EMV_CT_SetAppliData(), EMV_CT_GetAppliData()

---

# Application data

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)**

Definitions used for functions [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata), [EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata) [More...](#detailed-description)

## Modules

| Name           |
| -------------- |
| **[VISA terminal transaction qualifier](group___c_l___t_t_q.md)** <br>Possible values for [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66).  |
| **[Common Terminal Transaction Qualifier](group___t_t_q.md)** <br>TTQ bits as defined [EMV-A] section 5.7.  |
| **[Dynamic reader limits](group___d_y_n_a_m_i_c___r_e_a_d_e_r___l_i_m_i_t_s.md)**  |
| **[Number of entries in Phone message table](group___p_p3___p_m_t___n_o___o_f___e_n_t_r_i_e_s.md)** <br>Number of entries in Phone message table.  |
| **[Options how to apply configuration (VFI reader only)](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md)** <br>Options for [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration) |
| **[Contactless Kernel Ids](group___d_e_f___k_e_r_n_e_l___i_d.md)** <br>Short or Extended Kernel Id as integer.  |
| **[technologies used in TecSupport_DFAB30](group___d_e_f___t_e_c.md)**  |
| **[used in EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B](group___d_e_f___m_k___k_e_r_n_c_f_g.md)**  |
| **[used in EMV_CTLS_APPLIDATA_RK_STRUCT::KernelConfiguration_DF811B](group___d_e_f___r_k___k_e_r_n_c_f_g.md)**  |
| **[Application flow capabilities for all schemes](group___d_e_f___f_l_o_w___g_l_o_b.md)** <br>Contents of [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-appflowcap-dfab03).  |
| **[Application flow capabilities for PayPass (MasterCard)](group___d_e_f___f_l_o_w___m_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for payWave (Visa)](group___d_e_f___f_l_o_w___v_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for ExpressPay (Amex)](group___d_e_f___f_l_o_w___a_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for JCB](group___d_e_f___f_l_o_w___j_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_JK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for Discover/Diners](group___d_e_f___f_l_o_w___d_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for Interac](group___d_e_f___f_l_o_w___i_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for EPAL](group___d_e_f___f_l_o_w___e_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_EK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for Visa Asia/Pacific](group___d_e_f___f_l_o_w___p_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for China Union Pay](group___d_e_f___f_l_o_w___c_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Gemalto/Pure: Application flow capabilities](group___d_e_f___f_l_o_w___g_k.md)** <br>Defines for [EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for RuPay](group___d_e_f___f_l_o_w___r_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for SIBS](group___d_e_f___f_l_o_w___s_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_SK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for PagoBancomat](group___d_e_f___f_l_o_w___p_b.md)** <br>Contents of [EMV_CTLS_APPLIDATA_PB_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for WISE](group___d_e_f___f_l_o_w___w_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_WK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for CPACE](group___d_e_f___f_l_o_w___b_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_BK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Application flow capabilities for MIR](group___d_e_f___f_l_o_w___m_r.md)** <br>Contents of [EMV_CTLS_APPLIDATA_MR_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Appli data scheme specific - MasterCard - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_MK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[PayPass ProceedToFirstWriteFlag_DF8110 values](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md)** <br>Well-known values for PayPass flag ProceedToFirstWriteFlag('DF1810') in EMV_CTLS_APPLIDATA_MK_STRUCT::Scheme.MK.ProceedToFirstWriteFlag_DF8110.  |
| **[Appli data scheme specific - Visa - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_VK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - Amex - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_AK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - JCB - Avaiability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_JK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - Discover - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_DK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - Interac - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_IK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - Epal - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_EK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - Visa Asia/Pacific - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_PK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - China Union Pay - Avaialability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_CK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - Gemalto Pure - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_GK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - RuPay - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_RK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - SIBS - Avaiability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_SK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - PagoBancomat - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_PB_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - Wise - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_WK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - CPACE - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_BK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Appli data scheme specific - MIR - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md)** <br>Contents of the input in EMV_CTLS_APPLIDATA_MIR_STRUCT::IncludedData.  |
| **[Appli data scheme specific - domestic kernel - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_o_m.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_DOM_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-includeddata).  |
| **[application flow capabilities for domestic applications](group___d_e_f___f_l_o_w___d_o_m.md)** <br>Contents of [EMV_CTLS_APPLIDATA_DOM_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
| **[Appli data scheme specific - global part - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-includeddata).  |
| **[Supported](group___e_m_v___m_o_d_e_s.md)** <br>Defines for supported EMV Modes.  |
| **[TAC/IAC DENIAL processing in case of Offline Only terminals](group___t_a_c___i_a_c___d_e_n_i_a_l.md)** <br>DF15, ICS feature, for `ucAC_before_after` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md).  |
| **[Defines for EMVCo checksum calculation](group___c_h_k_s_u_m___d_e_f_s.md)** <br>other major terminal parameters actually there are only some of them defined   most of them are hard coded in the lib as actually needed   all of them are Yes / No decisions   --> whenever there is a need to make this configurable for the checksum there will be another parameter added   In brackets there is the default value or the currently hard coded value  ** only for checksum --> no control on the flow,**  e.g. Blacklist is controlled per application not per terminal parameters  **!!! take respect on the default !!! ** |
| **[Application data: Which data is included](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md)** <br>Contents of [EMV_CT_APPLIDATA_STRUCT::Info_Included_Data](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-info-included-data).  |
| **[Byte defines for CVM not supported / CVM not required](group___c_v_m___n_o_t___s_u_p_p.md)** <br>see `AIP_CVM_not_supported` and EMV_CT_APPLIDATA_STRUCT::CVM_not_required  |
| **[Defines for Application flow capabilities](group___a_p_p___f_l_o_w___c_a_p_s.md)** <br>Application (transaction flow) capabilities (see [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap))  |
| **[CDA modes](group___c_d_a___m_o_d_e_s.md)** <br>DF3E, CDA mode to be executed for the named AID.  |
| **[Fallback handling after Final Select](group___f_b___f_i_n_a_l___s_e_l.md)** <br>DF18, see [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling).  |
| **[Defines for type of read application data mode](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md)**  |
| **[Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)**  |
| **[Defines for special transaction configuration](group___s_p_e_c_i_a_l___t_r_x_s.md)** <br>Special transactions, transaction types and flows.  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CTLS_TAGLIST_STRUCT](struct_e_m_v___c_t_l_s___t_a_g_l_i_s_t___s_t_r_u_c_t.md)** <br>structure for [EMV_CTLS_PAYMENT_TYPE::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) |
| struct | **[EMV_CTLS_APPLIDATA_MK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, MK specific part. See see Book C-2, Kernel 2 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_VK_DRL_ENTRY_STRUCT](struct_e_m_v___c_t_l_s___v_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md)** <br>Visa Dynamic Reader Limits, single entry Element of [EMV_CTLS_VK_DRL_STRUCT]().  |
| struct | **[EMV_CTLS_VK_DRL_STRUCT](struct_e_m_v___c_t_l_s___v_k___d_r_l___s_t_r_u_c_t.md)** <br>Visa Dynamic Reader Limits Used in [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01).  |
| struct | **[EMV_CTLS_APPLIDATA_VK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, VK specific part. See see Book C-3, Kernel 3 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_AK_DRL_ENTRY_STRUCT](struct_e_m_v___c_t_l_s___a_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md)** <br>Amex Dynamic Reader Limits, single entry Element of [EMV_CTLS_AK_DRL_STRUCT]().  |
| struct | **[EMV_CTLS_AK_DRL_STRUCT](struct_e_m_v___c_t_l_s___a_k___d_r_l___s_t_r_u_c_t.md)** <br>Amex Dynamic Reader Limits Used in [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01]().  |
| struct | **[EMV_CTLS_APPLIDATA_AK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, AK specific part. See see Book C-4, Kernel 4 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_JK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, JK specific part. See see Book C-5, Kernel 5 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_DK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, DK specific part. See see Book C-6, Kernel 6 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_IK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, IK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_EK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, EK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_PK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, PK specific part (VisaAP resp. Visa Asia/Pacific resp. Visa Wave 2). See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_CK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, CK specific part. See see Book C-7, Kernel 7 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_GK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, GK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_RK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, RK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_SK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, SK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_PB_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, PagoBancomat specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_WK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, WISE specific part.  |
| struct | **[EMV_CTLS_APPLIDATA_BK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, CPACE specific part.  |
| struct | **[EMV_CTLS_APPLIDATA_MR_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application, MIR specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_DOM_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md)** <br>Structure for configuration of one single domestic application See [EMV_CTLS_SetAppliDataSchemeSpecific()]() |
| struct | **[EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md)** <br>Structure for configuration of one single application. See [EMV_CTLS_SetAppliDataSchemeSpecific()]()   XML tag [XML_TAG_AD_APP]()   no TLV tag is used.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CTLS_TAGLIST_STRUCT](struct_e_m_v___c_t_l_s___t_a_g_l_i_s_t___s_t_r_u_c_t.md) | **[EMV_CTLS_TAGLIST_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-taglist-type)** <br>structure for [EMV_CTLS_PAYMENT_TYPE::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) |
| typedef struct [EMV_CTLS_APPLIDATA_MK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_MK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-mk-type)** <br>Structure for configuration of one single application, MK specific part. See see Book C-2, Kernel 2 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_VK_DRL_ENTRY_STRUCT](struct_e_m_v___c_t_l_s___v_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md) | **[EMV_CTLS_VK_DRL_ENTRY_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-vk-drl-entry-type)** <br>Visa Dynamic Reader Limits, single entry Element of [EMV_CTLS_VK_DRL_STRUCT](struct_e_m_v___c_t_l_s___v_k___d_r_l___s_t_r_u_c_t.md).  |
| typedef struct [EMV_CTLS_VK_DRL_STRUCT](struct_e_m_v___c_t_l_s___v_k___d_r_l___s_t_r_u_c_t.md) | **[EMV_CTLS_VK_DRL_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-vk-drl-type)** <br>Visa Dynamic Reader Limits Used in [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01).  |
| typedef struct [EMV_CTLS_APPLIDATA_VK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_VK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-vk-type)** <br>Structure for configuration of one single application, VK specific part. See see Book C-3, Kernel 3 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_AK_DRL_ENTRY_STRUCT](struct_e_m_v___c_t_l_s___a_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md) | **[EMV_CTLS_AK_DRL_ENTRY_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-ak-drl-entry-type)** <br>Amex Dynamic Reader Limits, single entry Element of [EMV_CTLS_AK_DRL_STRUCT](struct_e_m_v___c_t_l_s___a_k___d_r_l___s_t_r_u_c_t.md).  |
| typedef struct [EMV_CTLS_AK_DRL_STRUCT](struct_e_m_v___c_t_l_s___a_k___d_r_l___s_t_r_u_c_t.md) | **[EMV_CTLS_AK_DRL_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-ak-drl-type)** <br>Amex Dynamic Reader Limits Used in [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01).  |
| typedef struct [EMV_CTLS_APPLIDATA_AK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_AK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-ak-type)** <br>Structure for configuration of one single application, AK specific part. See see Book C-4, Kernel 4 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_JK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_JK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-jk-type)** <br>Structure for configuration of one single application, JK specific part. See see Book C-5, Kernel 5 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_DK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_DK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-dk-type)** <br>Structure for configuration of one single application, DK specific part. See see Book C-6, Kernel 6 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_IK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_IK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-ik-type)** <br>Structure for configuration of one single application, IK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_EK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_EK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-ek-type)** <br>Structure for configuration of one single application, EK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_PK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_PK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-pk-type)** <br>Structure for configuration of one single application, PK specific part (VisaAP resp. Visa Asia/Pacific resp. Visa Wave 2). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_CK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_CK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-ck-type)** <br>Structure for configuration of one single application, CK specific part. See see Book C-7, Kernel 7 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_GK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_GK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-gk-type)** <br>Structure for configuration of one single application, GK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_RK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_RK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-rk-type)** <br>Structure for configuration of one single application, RK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_SK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_SK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-sk-type)** <br>Structure for configuration of one single application, SK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_PB_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_PB_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-pb-type)** <br>Structure for configuration of one single application, PagoBancomat specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_WK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_WK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-wk-type)** <br>Structure for configuration of one single application, WISE specific part.  |
| typedef struct [EMV_CTLS_APPLIDATA_BK_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_BK_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-bk-type)** <br>Structure for configuration of one single application, CPACE specific part.  |
| typedef struct [EMV_CTLS_APPLIDATA_MR_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_MR_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-mr-type)** <br>Structure for configuration of one single application, MIR specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_DOM_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_DOM_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-dom-type)** <br>Structure for configuration of one single domestic application See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| typedef struct [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-scheme-specific-type)** <br>Structure for configuration of one single application. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)   XML tag [XML_TAG_AD_APP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-app)   no TLV tag is used.  |
| typedef struct [EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CT_APPLIDATA_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ct-applidata-type)** <br>Structure for configuration of one single application    see [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata) |

## Detailed Description

Definitions used for functions [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata), [EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata)

Definitions used for functions EMV_CTLS_SetAppliData(), EMV_CTLS_GetAppliData()

## Types Documentation

### typedef EMV_CTLS_TAGLIST_TYPE

```
typedef struct EMV_CTLS_TAGLIST_STRUCT EMV_CTLS_TAGLIST_TYPE;
```

structure for [EMV_CTLS_PAYMENT_TYPE::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)

### typedef EMV_CTLS_APPLIDATA_MK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_MK_STRUCT EMV_CTLS_APPLIDATA_MK_TYPE;
```

Structure for configuration of one single application, MK specific part. See see Book C-2, Kernel 2 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_VK_DRL_ENTRY_TYPE

```
typedef struct EMV_CTLS_VK_DRL_ENTRY_STRUCT EMV_CTLS_VK_DRL_ENTRY_TYPE;
```

Visa Dynamic Reader Limits, single entry Element of [EMV_CTLS_VK_DRL_STRUCT](struct_e_m_v___c_t_l_s___v_k___d_r_l___s_t_r_u_c_t.md). 

### typedef EMV_CTLS_VK_DRL_TYPE

```
typedef struct EMV_CTLS_VK_DRL_STRUCT EMV_CTLS_VK_DRL_TYPE;
```

Visa Dynamic Reader Limits Used in [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01). 

### typedef EMV_CTLS_APPLIDATA_VK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_VK_STRUCT EMV_CTLS_APPLIDATA_VK_TYPE;
```

Structure for configuration of one single application, VK specific part. See see Book C-3, Kernel 3 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_AK_DRL_ENTRY_TYPE

```
typedef struct EMV_CTLS_AK_DRL_ENTRY_STRUCT EMV_CTLS_AK_DRL_ENTRY_TYPE;
```

Amex Dynamic Reader Limits, single entry Element of [EMV_CTLS_AK_DRL_STRUCT](struct_e_m_v___c_t_l_s___a_k___d_r_l___s_t_r_u_c_t.md). 

### typedef EMV_CTLS_AK_DRL_TYPE

```
typedef struct EMV_CTLS_AK_DRL_STRUCT EMV_CTLS_AK_DRL_TYPE;
```

Amex Dynamic Reader Limits Used in [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01). 

### typedef EMV_CTLS_APPLIDATA_AK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_AK_STRUCT EMV_CTLS_APPLIDATA_AK_TYPE;
```

Structure for configuration of one single application, AK specific part. See see Book C-4, Kernel 4 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_JK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_JK_STRUCT EMV_CTLS_APPLIDATA_JK_TYPE;
```

Structure for configuration of one single application, JK specific part. See see Book C-5, Kernel 5 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_DK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_DK_STRUCT EMV_CTLS_APPLIDATA_DK_TYPE;
```

Structure for configuration of one single application, DK specific part. See see Book C-6, Kernel 6 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_IK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_IK_STRUCT EMV_CTLS_APPLIDATA_IK_TYPE;
```

Structure for configuration of one single application, IK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_EK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_EK_STRUCT EMV_CTLS_APPLIDATA_EK_TYPE;
```

Structure for configuration of one single application, EK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_PK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_PK_STRUCT EMV_CTLS_APPLIDATA_PK_TYPE;
```

Structure for configuration of one single application, PK specific part (VisaAP resp. Visa Asia/Pacific resp. Visa Wave 2). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_CK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_CK_STRUCT EMV_CTLS_APPLIDATA_CK_TYPE;
```

Structure for configuration of one single application, CK specific part. See see Book C-7, Kernel 7 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_GK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_GK_STRUCT EMV_CTLS_APPLIDATA_GK_TYPE;
```

Structure for configuration of one single application, GK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_RK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_RK_STRUCT EMV_CTLS_APPLIDATA_RK_TYPE;
```

Structure for configuration of one single application, RK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_SK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_SK_STRUCT EMV_CTLS_APPLIDATA_SK_TYPE;
```

Structure for configuration of one single application, SK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_PB_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_PB_STRUCT EMV_CTLS_APPLIDATA_PB_TYPE;
```

Structure for configuration of one single application, PagoBancomat specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_WK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_WK_STRUCT EMV_CTLS_APPLIDATA_WK_TYPE;
```

Structure for configuration of one single application, WISE specific part. 

**Note**: : There is no TTQ as per Wise specification it is derived from the Terminal Capabilities 

 TTQ b1b8 Mag CTLS mode given by [EMV_CTLS_APPLIDATA_WK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30)

 TTQ b1b6 EMV CTLS mode given by [EMV_CTLS_APPLIDATA_WK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30)

 TTQ B1b5 EMV contact derived from 9F33 B1b6 

 TTQ B1b4 Offline-Only reader given by Terminal Type 9F35 

 TTQ B1b3 Online PIN derived from 9F33 B2b7 

 TTQ B1b2 Signature derived from 9F33 B2b6 

 TTQ B1b1 ODA derived from 9F33 B3b4 

 TTQ B2b8 ARQC required controlled by Online Switch, Transaction Type, Entry Point decision according [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)

 TTQ B2b7 CVM required, controlled by [CLTRXOP_CVM_REQUIRED](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-cvm-required), Entry Point decision according [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42) as well as zero check and status check 

 TTQ B3b7 CD-CVM supported true unless suppressed by [EMV_CTLS_APPLIDATA_WK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31), [EMV_CTLS_FLOW_WK_NO_CDCVM](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-no-cdcvm)

### typedef EMV_CTLS_APPLIDATA_BK_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_BK_STRUCT EMV_CTLS_APPLIDATA_BK_TYPE;
```

Structure for configuration of one single application, CPACE specific part. 

### typedef EMV_CTLS_APPLIDATA_MR_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_MR_STRUCT EMV_CTLS_APPLIDATA_MR_TYPE;
```

Structure for configuration of one single application, MIR specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_DOM_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_DOM_STRUCT EMV_CTLS_APPLIDATA_DOM_TYPE;
```

Structure for configuration of one single domestic application See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE

```
typedef struct EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE;
```

Structure for configuration of one single application. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)   XML tag [XML_TAG_AD_APP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-app)   no TLV tag is used. 

### typedef EMV_CT_APPLIDATA_TYPE

```
typedef struct EMV_CT_APPLIDATA_STRUCT EMV_CT_APPLIDATA_TYPE;
```

Structure for configuration of one single application    see [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata)

typedef for [EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md)







-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
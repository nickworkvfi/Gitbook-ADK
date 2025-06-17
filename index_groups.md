---
title: Modules

---

# Modules




* **group [Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** 
    * **group [Tags for configuration storage](group___a_d_k___x_m_l___t_a_g_s.md)** <br>Used for storing the configuration in XML files. 
    * **group [Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)** <br>Definitions used for functions [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata), [EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata)
        * **group [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)** 
        * **group [Options how to apply configuration (VFI reader only)](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md)** <br>Options for [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration)
        * **group [Defines for Application flow capabilities](group___a_p_p___f_l_o_w___c_a_p_s.md)** <br>Application (transaction flow) capabilities (see [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap)) 
        * **group [CDA modes](group___c_d_a___m_o_d_e_s.md)** <br>DF3E, CDA mode to be executed for the named AID. 
        * **group [Defines for EMVCo checksum calculation](group___c_h_k_s_u_m___d_e_f_s.md)** <br>other major terminal parameters actually there are only some of them defined   most of them are hard coded in the lib as actually needed   all of them are Yes / No decisions   --> whenever there is a need to make this configurable for the checksum there will be another parameter added   In brackets there is the default value or the currently hard coded value  ** only for checksum --> no control on the flow,**  e.g. Blacklist is controlled per application not per terminal parameters  **!!! take respect on the default !!! **
        * **group [VISA terminal transaction qualifier](group___c_l___t_t_q.md)** <br>Possible values for [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66). 
        * **group [Byte defines for CVM not supported / CVM not required](group___c_v_m___n_o_t___s_u_p_p.md)** <br>see `AIP_CVM_not_supported` and EMV_CT_APPLIDATA_STRUCT::CVM_not_required 
        * **group [Application flow capabilities for ExpressPay (Amex)](group___d_e_f___f_l_o_w___a_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for CPACE](group___d_e_f___f_l_o_w___b_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_BK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for China Union Pay](group___d_e_f___f_l_o_w___c_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for Discover/Diners](group___d_e_f___f_l_o_w___d_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [application flow capabilities for domestic applications](group___d_e_f___f_l_o_w___d_o_m.md)** <br>Contents of [EMV_CTLS_APPLIDATA_DOM_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for EPAL](group___d_e_f___f_l_o_w___e_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_EK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [ Application flow capabilities](group___d_e_f___f_l_o_w___g_k.md)** <br>Defines for [EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for all schemes](group___d_e_f___f_l_o_w___g_l_o_b.md)** <br>Contents of [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-appflowcap-dfab03). 
        * **group [Application flow capabilities for Interac](group___d_e_f___f_l_o_w___i_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for JCB](group___d_e_f___f_l_o_w___j_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_JK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for PayPass (MasterCard)](group___d_e_f___f_l_o_w___m_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for MIR](group___d_e_f___f_l_o_w___m_r.md)** <br>Contents of [EMV_CTLS_APPLIDATA_MR_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for PagoBancomat](group___d_e_f___f_l_o_w___p_b.md)** <br>Contents of [EMV_CTLS_APPLIDATA_PB_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for Visa Asia/Pacific](group___d_e_f___f_l_o_w___p_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for RuPay](group___d_e_f___f_l_o_w___r_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for SIBS](group___d_e_f___f_l_o_w___s_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_SK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for payWave (Visa)](group___d_e_f___f_l_o_w___v_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [Application flow capabilities for WISE](group___d_e_f___f_l_o_w___w_k.md)** <br>Contents of [EMV_CTLS_APPLIDATA_WK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 
        * **group [ Which data is included](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md)** <br>Contents of [EMV_CT_APPLIDATA_STRUCT::Info_Included_Data](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-info-included-data). 
        * **group [Appli data scheme specific - Amex - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_AK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - CPACE - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_BK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - China Union Pay - Avaialability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_CK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - Discover - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_DK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - domestic kernel - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_o_m.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_DOM_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - Epal - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_EK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - Gemalto Pure - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_GK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - global part - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - Interac - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_IK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - JCB - Avaiability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_JK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - MasterCard - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_MK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [PayPass ProceedToFirstWriteFlag_DF8110 values](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md)** <br>Well-known values for PayPass flag ProceedToFirstWriteFlag('DF1810') in EMV_CTLS_APPLIDATA_MK_STRUCT::Scheme.MK.ProceedToFirstWriteFlag_DF8110. 
        * **group [Appli data scheme specific - MIR - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md)** <br>Contents of the input in EMV_CTLS_APPLIDATA_MIR_STRUCT::IncludedData. 
        * **group [Appli data scheme specific - PagoBancomat - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_PB_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - Visa Asia/Pacific - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_PK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - RuPay - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_RK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - SIBS - Avaiability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_SK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - Visa - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_VK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Appli data scheme specific - Wise - Availability bits](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md)** <br>Contents of the input in [EMV_CTLS_APPLIDATA_WK_STRUCT::IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-includeddata). 
        * **group [Contactless Kernel Ids](group___d_e_f___k_e_r_n_e_l___i_d.md)** <br>Short or Extended Kernel Id as integer. 
        * **group [KernelConfiguration_DF811B](group___d_e_f___m_k___k_e_r_n_c_f_g.md)** 
        * **group [KernelConfiguration_DF811B](group___d_e_f___r_k___k_e_r_n_c_f_g.md)** 
        * **group [technologies used in TecSupport_DFAB30](group___d_e_f___t_e_c.md)** 
        * **group [Dynamic reader limits](group___d_y_n_a_m_i_c___r_e_a_d_e_r___l_i_m_i_t_s.md)** 
            * **group [DRL feature switching](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md)** <br>Values for VISA and Amex DRL features which can be switched on and off. 
            * **group [Number of DRL entries for Visa and Amex](group___d_r_l___m_a_x___e_n_t_r_i_e_s.md)** <br>For VISA and Amex: How many DRL entries are possible. 
        * **group [Supported](group___e_m_v___m_o_d_e_s.md)** <br>Defines for supported EMV Modes. 
        * **group [Fallback handling after Final Select](group___f_b___f_i_n_a_l___s_e_l.md)** <br>DF18, see [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling). 
        * **group [Number of entries in Phone message table](group___p_p3___p_m_t___n_o___o_f___e_n_t_r_i_e_s.md)** <br>Number of entries in Phone message table. 
        * **group [Defines for type of read application data mode](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md)** 
        * **group [Defines for special transaction configuration](group___s_p_e_c_i_a_l___t_r_x_s.md)** <br>Special transactions, transaction types and flows. 
        * **group [TAC/IAC DENIAL processing in case of Offline Only terminals](group___t_a_c___i_a_c___d_e_n_i_a_l.md)** <br>DF15, ICS feature, for `ucAC_before_after` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md). 
        * **group [Common Terminal Transaction Qualifier](group___t_t_q.md)** <br>TTQ bits as defined [EMV-A] section 5.7. 
    * **group [Terminal Data](group___d_e_f___c_o_n_f___t_e_r_m.md)** <br>Definitions used for functions [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata), [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata)
        * **group [Supported Contactless modes](group___c_l___m_o_d_e_s.md)** <br>Defines for [EMV_CTLS_TRANSRES_STRUCT::CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode). 
        * **group [ Which data is valid](group___d_e_f___i_n_p_u_t___t_e_r_m.md)** <br>Contents of the [EMV_CTLS_TERMDATA_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-info-included-data). 
        * **group [ Collection of flow options](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md)** <br>Contents of the [EMV_CTLS_TERMDATA_STRUCT::FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions). 
        * **group [Terminaltypes (Tag 9F35)](group___t_e_r_m___t_y_p_e_s.md)** <br>see also [EMV B4], page 113 
    * **group [Text data](group___d_e_f___c_o_n_f___t_e_x_t.md)** 
        * **group [Application text IDs](group___a_p_p_l_i___t_e_x_t_s.md)** <br>Also see [EMV_ADK_TXT_TYPE](struct_e_m_v___a_d_k___t_x_t___t_y_p_e.md). 
        * **group [Known languages](group___t_f___l_a_n_g_u_a_g_e_s.md)** <br>see [EMV_ADK_TXT_TYPE](struct_e_m_v___a_d_k___t_x_t___t_y_p_e.md)
    * **group [EMV ADK functions for configuration](group___f_u_n_c___c_o_n_f.md)** 
    * **group [Defines for type of virtual terminal map](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md)** 
* **group [General topics](group___a_d_k___g_e_n_e_r_a_l.md)** 
    * **group [Limitations and sizes](group___a_d_k___l_i_m_i_t_s.md)** 
    * **group [ADK return codes](group___a_d_k___r_e_t___c_o_d_e.md)** 
    * **group [Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** 
        * **group [Tags for transport layer](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md)** <br>Used for enclosing TLV container at transport. That's necessary in case EMV ADK and calling application are placed in separated entities. Transport layer (e.g. PINPad ISO2) must have indicators to determine whether data is meant for EMV ADK or not. 
        * **group [BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** 
            * **group [Tags defined by EMVCo](group___e_m_v_c_o___t_a_g_s.md)** 
            * **group [Proprietary tags used by Amex](group___e_x_p_r_e_s_s_p_a_y___t_a_g_s.md)** 
            * **group [Proprietary tags used by Gemalto/Pure](group___g_e_m_a_l_t_o___t_a_g_s.md)** 
            * **group [Proprietary tags used by Interac (Canada)](group___i_n_t_e_r_a_c___t_a_g_s.md)** 
            * **group [Proprietary tags used by JCB](group___j_k___t_a_g_s.md)** 
            * **group [Proprietary tags used by MasterCard](group___m_c___t_a_g_s.md)** <br>see [MC_FA], page 7-78 
            * **group [Verifone internal tags](group___v_e_r_i___t_a_g_s.md)** <br>There are many data objects, which do not have an EMVCo defined tags. For usage of TLV interface it's necessary to define internal tags. 
                * **group [Three-byte-tags](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md)** 
                * **group [Constructed tags](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md)** 
                    * **group [Constructed tags for new scheme specific config interface](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___c_o_n_s_t_r.md)** 
                    * **group [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md)** 
                * **group [Primitive tags for L1 dump](group___v_e_r_i___l1___d_u_m_p___t_a_g_s.md)** 
                * **group [Primitive tags](group___v_e_r_i___p_r_i_m___t_a_g_s.md)** 
                    * **group [Primitive tags for new scheme specific config interface](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md)** <br>Used in functions [EMV_CTLS_SetAppliDataSchemeSpecific()]()/EMV_CTLS_GetAppliDataSchemeSpecific. 
                    * **group [TLV tags for callback functions](group___t_l_v___c_b_c_k.md)** <br>Used in function EMV_CallbackFunction() 
                        * **group [ Additional information](group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md)** <br>Additional information for LED switching, used for [TAG_DF8F60_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8f60-led-add-info). 
                    * **group [Tags for callback functions](group___t_l_v___c_b_c_k___t_l_v.md)** <br>Used in function [EMV_CT_CALLBACK_FnT](). 
                    * **group [3-byte primitive tags](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md)** <br>For all unsigned long variables in functional interface, please use 4 byte in the serialization. 
                * **group [Tags for Transaction Log subfields](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md)** 
            * **group [Propriertary tags used by Visa](group___v_i_s_a___t_a_g_s.md)** <br>see [Visa_Card], page A-63 
    * **group [Additional error information](group___d_e_f___a_d_k___d_e_b_u_g.md)** <br>Filled in case of error, value to describe which error occured. 
        * **group [Additional error info exit code](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md)** <br>Last step performed by EMV ADK 0 ? 10-27 VK-related 30-4B Amex 50-6x Discover 7 Gemalto 80-8A setup 9 ? A0-B5 common TXN C0-DB MK-related E ? F0-F4 online. 
        * **group [Additional error info, status](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md)** <br>Internal error index. 
    * **group [Special tag handling](group___s_p_e_c_i_a_l___t_a_g___h_a_n_d_l_i_n_g.md)** 
        * **group [Handling of tags not defined by EMVCo](group___t_a_g_s___n_o_n___e_m_v_c_o.md)** 
* **group [ICC Interface](group___a_d_k___i_c_c___i_f.md)** <br>Definitions used for functions [EMV_CT_SmartISO()](), [EMV_CT_SmartReset()](), [EMV_CT_SmartPowerOff()](), [EMV_CT_Send_PIN_Offline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline), [EMV_CT_SmartDetect()]()
    * **group [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)** <br>Options for ICC access, e.g. for [EMV_CTLS_SmartISO()](), [EMV_CTLS_SmartReset()](), [EMV_CTLS_SmartPowerOff()]()
    * **group [Functions for transparent ICC access](group___f_u_n_c___i_c_c.md)** 
    * **group [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md)** <br>Return values for functions of group [Functions for transparent ICC access](). 
* **group [Initialization](group___a_d_k___i_n_i_t_i_a_l_i_z_a_t_i_o_n.md)** 
    * **group [EMV ADK functions for initialization](group___f_u_n_c___i_n_i_t.md)** 
        * **group [Options at framework initialisation](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md)** <br>Flags used in [EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework). 
        * **group [Result flags for outcome of framework initialization](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md)** <br>Flags used in [EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework). 
        * **group [Options at framework initialisation](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md)** <br>Flags used in parameter `options` in [EMV_CT_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework). 
        * **group [Options for End Transaction](group___e_n_d___t_x_n___o_p_t_i_o_n_s.md)** <br>Meaning of [TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options), see also [EMV_CTLS_EndTransaction()]()
        * **group [Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md)** <br>Meaning of [TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options), see also [EMV_CTLS_Exit_Framework_extended()](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework-extended)
* **group [LED control](group___a_d_k___l_e_d.md)** 
    * **group [Defines for LED handling](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md)** <br>LED numbers and modes to be used in [EMV_CT_LED()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led)
    * **group [Defines for LED IDs](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md)** <br>LED numbers in [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led)
    * **group [Defines for LED modes](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md)** <br>LED modes to be used in [EMV_CTLS_LED_SetMode()](group___a_d_k___l_e_d.md#function-emv-ctls-led-setmode)
    * **group [Defines for LED states](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md)** <br>LED states to be used in [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led)
* **group [Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** <br>Definitions used for functions [EMV_CT_StartTransaction()](), [EMV_CT_ContinueOffline()](), [EMV_CT_ContinueOnline()]()
    * **group [Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)** 
        * **group [Buildlist options for EMV_CT_StartTransaction()](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md)** <br>see [EMV_CT_SELECT_TYPE::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist)
        * **group [Options for contactless transaction processing](group___c_l_t_r_x___o_p_t_i_o_n_s.md)** <br>Defines for [EMV_CTLS_START_TYPE::TxnOptions](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-txnoptions). 
        * **group [CTLS card types for which passtrough mode is set](group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.md)** <br>Defines for [EMV_CTLS_START_TYPE::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes). 
        * **group [Scheme specific transaction types](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md)** <br>Defines for [EMV_CTLS_START_TYPE::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype). 
        * **group [Options for contactless transaction processing at EMV_CTLS_ContinueOfflineExt()](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md)** <br>Defines for [EMV_CTLS_CONT_OFFL_STRUCT::options](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md#variable-options). 
        * **group [Amount confirmation before or after CVM processing](group___c_o_n_f_i_r_m___a_m_o_u_n_t___w_h_e_n.md)** <br>Byte defines for [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation)   only valid in case no combined amount confirmation configured (see [EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin) in [Defines for Application flow capabilities](group___a_p_p___f_l_o_w___c_a_p_s.md)) 
        * **group [Support of cardholder confirmation](group___d_e_f___c_a_r_d___c_o_n_f.md)** <br>DF4D, see `ucCardholderConfirmation` in [EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type). 
        * **group [ Which data is included](group___d_e_f___f_l_o_w___c_o_n_t_i_n_u_e___o_f_f_l_i_n_e___i_n_p_u_t.md)** 
        * **group [ Which data is included](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md)** <br>Contents of the input in [EMV_CTLS_HOST_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-info-included-data), [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline)
        * **group [ Which data is included in input struct](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md)** <br>Contents of the input in [EMV_CTLS_START_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-info-included-data), [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)
        * **group [ Which data is included](group___d_e_f___i_n_p_u_t___t_r_x.md)** <br>Contents of [EMV_CT_TRANSAC_TYPE::Info_Included_Data](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-info-included-data). 
        * **group [Bit field for additional fallback options for magstripe applications (not originating from DC POS tag DF18)](group___f_b___m_s_r___o_p_t_i_o_n_s.md)** <br>for use in `fallbackMsrOptions` of [EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type)
        * **group [Fallback options for magstripe applications](group___f_b___o_p_t_i_o_n_s.md)** <br>for use in `ucFallback` of [EMV_CT_FALLBCK_MSR_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-fallbck-msr-type)
        * **group [Transaction type (Tag 9C)](group___t_r_a_n_s___t_y_p_e_s.md)** <br>According to ISO 8583 - Annex A: Processing Code, Position 1 + 2. 
        * **group [Options for transaction processing](group___t_x_n___o_p_t_i_o_n_s.md)** <br>Defines for [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions), [EMV_CT_TRANSAC_STRUCT::TxnOptions](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnoptions), [EMV_CT_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions). 
        * **group [Re-entrance options](group___t_x_n___s_t_e_p_s.md)** <br>Defines for [EMV_CT_SELECT_TYPE::TxnSteps](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnsteps) resp. [EMV_CT_TRANSAC_TYPE::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps). 
        * **group [Options for updating TLV data](group___u_p_d_a_t_e___t_a_g_s___o_p_t_i_o_n_s.md)** <br>`options` for [EMV_CT_updateTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags)
    * **group [Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)** 
        * **group [CTLS card types](group___c_l_t_r_x___c_a_r_d_t_y_p_e.md)** <br>Defines for [EMV_CTLS_TRANSRES_TYPE::ctlsCardType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-ctlscardtype). 
        * **group [Additional information in cryptogram information (9F27)](group___c_r_y_p___e_m_v___a_d_k___i_n_f___a_d_d.md)** <br>9F27 (cryptogram information) can carry more information than just AAC, TC, and ARQC. The ICC has the possibility to give back these additional information. Calling application may use these defines to analyse [EMV_CT_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo). 
        * **group [Information which data was provided by the ICC](group___d_e_f___d_f61.md)** <br>Contents of [EMV_CTLS_TRANSRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data). 
        * **group [ Which data was received from the chip](group___d_e_f___d_f61___s_e_l_e_c_t.md)** <br>Contents of [EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data). 
        * **group [ Information which data was provided by the ICC](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.md)** <br>Contents of [EMV_CT_TRANSRES_TYPE::T_DF61_Info_Received_Data](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data). 
        * **group [Additional error data](group___d_e_f___d_f62.md)** <br>DF62, 15 bytes, error reference. 
            * **group [ chipcard command where error occurs (2 byte)](group___d_e_f___d_f62___p_o_s1.md)** 
            * **group [ status of chipcard communication (2 byte)](group___d_e_f___d_f62___p_o_s2.md)** 
            * **group [ activator (1 byte)](group___d_e_f___d_f62___p_o_s3.md)** 
            * **group [ error class (1 byte)](group___d_e_f___d_f62___p_o_s7.md)** 
        * **group [ Which data is included in result struct](group___d_e_f___o_u_t_p_u_t___s_e_l_e_c_t.md)** <br>Contents of the output in [EMV_CTLS_STARTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data), [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)
        * **group [Bitstring with information about the outcome of EMV_CTLS_SetupTransaction()](group___d_e_f___s_e_l_e_c_t_r_e_s___t_r_x_i_n_f_o.md)** <br>Contents of [EMV_CTLS_STARTRES_STRUCT::TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation), [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)
        * **group [Options for fetching TLV data](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md)** <br>`options` for [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags)
        * **group [Status information](group___s_t_a_t_u_s___i_n_f_o.md)** <br>defines for [EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo)
    * **group [Functions for performing transactions](group___f_u_n_c___f_l_o_w.md)** 
    * **group [Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)** <br>Callback function to be implemented in the same entity as EMV ADK. 
        * **group [Buzzer handling](group___a_d_k___b_u_z_z_e_r.md)** <br>Defines given in callback [TAG_BF19_CTLS_CBK_BEEP](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf19-ctls-cbk-beep). 
        * **group [Definitions for PIN Input callback function](group___a_d_k___p_i_n___p_a_r_a_m.md)** <br>See [EMV_CT_CALLBACK_FnT]() ([TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin)) 
            * **group [Input params for PIN entry](group___a_d_k___p_i_n___i_n_p_u_t.md)** 
            * **group [Return values](group___a_d_k___p_i_n___r_e_t_u_r_n.md)** <br>Return values used by calling application for PIN input callback function. 
        * **group [Defines for callback function "cardholder information"](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md)** <br>In order to show the cardholder additional information, e.g. wrong PIN, last PIN try, another app is selected, ...    see [EMV_CT_CALLBACK_FnT]() ([TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo)) 
        * **group [DCC callback information](group___c_b_c_k___d_c_c___i_n_f_o.md)** <br>Information flags for calling application. 
        * **group [Options for DataExchange mode](group___c_b_c_k___d_e___m_o_d_e.md)** <br>Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](), [TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode). 
        * **group [Options for DataExchange request](group___c_b_c_k___d_e___r_e_q_u_e_s_t.md)** <br>Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](), [TAG_DF8F58_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8f58-de-request). 
        * **group [Options for DataExchange state](group___c_b_c_k___d_e___s_t_a_t_e.md)** <br>Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](), [TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state). 
        * **group [Domestic callback information](group___c_b_c_k___d_o_m___i_n_f_o.md)** <br>Information flags for [TAG_DF5C_DOM_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5c-dom-info) in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)) 
        * **group [Domestic callback options](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md)** <br>Calling application may set some options for further transaction processing. 
        * **group [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md)** <br>Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt). 
        * **group [DCC mode](group___d_c_c___m_o_d_e.md)** <br>Used to carry decision given back by [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc))    TLV tag [TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check). 
        * **group [Modes of domestic application handling](group___d_e_f___c_b_k___d_o_m_a_p_p.md)** <br>Used as return [TAG_DF7E_CBK_DOM_APP_RES](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7e-cbk-dom-app-res) for [EMV_CT_CALLBACK_FnT]()[TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps). 
        * **group [Types of external application selection](group___d_e_f___c_b_k___s_e_l.md)** <br>Used as input for callback function "Application Selection" --> ReduceCandidateList() (`ucSelector`). 
        * **group [Defines for callback function "put merchant information"](group___m_e_r_c_h___i_n_f_o.md)** <br>In order to show the merchant additional information on a system with two displays, 'information flashes' can be sent to the terminal during payment processing. This allows the merchant to alert the customer to confirming the amount or entering the PIN as required.    see [EMV_CT_CALLBACK_FnT]() ([TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo)) 
* **group [Synchronous Card Types](group___c_r_d_s_y_n_c___card___types.md)** <br>Used by [crdSync_PowerUp()]()
* **group [Return Codes](group___c_r_d_s_y_n_c___return___codes.md)** 
* **group [Com_verifone_seccmd](group__com__verifone__seccmd.md)** 
* **group [Config](group___config.md)** 
* **group [Dialog options](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md)** <br>Bit mask values for dialog options set with [setOptions()](classlibsdi_1_1_dialog.md#function-setoptions) (DFA13D) 
* **group [Dialog invocation return values](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md)** <br>Return values from [display()](classlibsdi_1_1_dialog.md#function-display), [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput), [htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog), [menu()](classlibsdi_1_1_dialog.md#function-menu), [requestCard()](classlibsdi_1_1_dialog.md#function-requestcard) and [captureSignature()](classlibsdi_1_1_dialog.md#function-capturesignature) are defined as integer values according to [html/gui_error.h]() to be able to return a positive value for the selected menu item. 
* **group [Menu options](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___m_e_n_u___o_p_t_i_o_n_s.md)** <br>Bit mask values for menu options set with [setOptions()](classlibsdi_1_1_dialog.md#function-setoptions) (DFA13D) 
* **group [LED states](group___l_e_d___s_t_a_t_e_s.md)** <br>These are the states of the three MSR LEDs which can be set by [MSR_SwitchLeds()](). On devices that don't have multicolored LEDs, all "color defines" are equivalent and imply "LED on". As there is currently no device with multicolored LEDs, multicolor feature is not implemented yet. 
* **group [Card Type Code](group___m_s_r___c_a_r_d___c_o_d_e_s.md)** <br>These values indicate the type of msr read. 
* **group [Error codes](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md)** <br>These error codes are returned by the various libmsr functions. 
* **group [Options bitmask](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md)** <br>These options configure the behavior of magnetic card reader library, set by [MSR_SetOptions()](). A combination is possible using | operator. 
* **group [Status code](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md)** <br>These values indicate the status of each read track. 
* **group [Track Type Code](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md)** <br>These values indicate the type of track data. 
* **group [PED return codes](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md)** <br>These return codes are returned by the ped functions. 
* **group [PED status codes](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md)** <br>These codes are set by [ped_Pairing()](). 
* **group [management functions](group___power.md)** 
* **group [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)** <br>SDI protocol error codes. 
* **group [SDI Protocol Initialization Options](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md)** <br>SDI protocol configuration flags. 
* **group [TEC result data tags](group___t_e_c___d_a_t_a___t_a_g_s.md)** <br>These tags are used in dataBuffer of [cts_WaitSelection()]() if [CTS_DATA_TLV]() is set in usedTechnology. 
* **group [Notification callback types](group___t_e_c___n_o_t_i_f_i_c_a_t_i_o_n___c_b_k___t_y_p_e.md)** <br>These callbacks can be set by [cts_SetNotificationCallback()](). 
* **group [TEC option tags](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md)** <br>These options can be set by [cts_SetOptions()](). 
* **group [TEC return codes](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md)** <br>These return codes are returned by the various libtec functions. 
* **group [TEC start options](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md)** <br>These options configure the behavior of technology selection, set by [cts_StartSelection()](). A combination is possible using | operator. 
* **group [TEC technology code](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md)** <br>These codes are used to specify supported technologies. A combination is possible using | operator. 
* **group [TLVLite](group___t_l_v_lite.md)** 
* **group [Import/Export Utility](group__inf__util.md)** <br>Allows configurable data translation from a file into a database and vice versa. 
    * **group [Public API](group__inf__util__public.md)** <br>API for the users of the library. 
* **group [System LED functions](group__led.md)** 
* **group [Multi Application Controller functions](group__mac.md)** 
* **group [Netloader](group__netloader.md)** 
* **group [Property Database API](group__propdb.md)** <br>Allows for easy to use hierarchical key/value storage. 
* **group [SDI and EMV callbacks](group__sdicallback.md)** 
* **group [Card reader interface](group__sdicrd.md)** 
* **group [Data interface](group__sdidata.md)** 
* **group [Display interface](group__sdidisplay.md)** 
* **group [EMV contact interface](group__sdiemvct.md)** 
* **group [EMV contactless interface](group__sdiemvctls.md)** 
* **group [Low level message interface](group__sdilowlevel.md)** 
* **group [MSR interface](group__sdimsr.md)** 
* **group [SDI client NFC interface](group__sdinfc.md)** 
* **group [PIN entry interface](group__sdiped.md)** 
* **group [SDI plugin commands](group__sdiplugin.md)** 
* **group [Printer interface](group__sdiprinter.md)** 
* **group [Crypto interface](group__sdisec.md)** 
* **group [SDI client setup](group__sdisetup.md)** 
* **group [System interface](group__sdisystem.md)** 
* **group [SDI client VAS interface](group__sdivas.md)** 
* **group [VCL interface](group__sdivcl.md)** 
* **group [System statusbar functions](group__sysbar.md)** 
* **group [System beep functions](group__sysbeep.md)** 
* **group [System property functions](group__syserro.md)** 
* **group [System property functions](group__sysinfo.md)** 
* **group [Low level system power management functions. Please use vfisyspm.h instead.](group__syspm.md)** 
* **group [Utility functions](group__util.md)** 
* **group [Graphical User Interface](group__vfigui.md)** 
* **group [inter process communication](group__vfiipc.md)** 
* **group [Printing functions](group__vfiprt.md)** 
* **group [installation functions](group__vfisysinstall.md)** 
* **group [Vss](group__vss.md)** 
* **group [zontalk protocal APIs](group__zontalk.md)** 



-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

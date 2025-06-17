---
title: emv/EMV_CTLS_Common/export/emv/EMV_CTLS_Interface.h
summary: Interface of CTLS-Client. 

---

# emv/EMV_CTLS_Common/export/emv/EMV_CTLS_Interface.h

Interface of CTLS-Client. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md)** <br>9F06, AID (5 bytes RID + n bytes PIX)  |
| struct | **[EMV_CTLS_APPLI_KERNEL_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md)** <br>AID (9F06) and kernel ID.  |
| struct | **[EMV_CTLS_DATA_STRUCT](struct_e_m_v___c_t_l_s___d_a_t_a___s_t_r_u_c_t.md)**  |
| struct | **[EMV_CTLS_DOL_STRUCT](struct_e_m_v___c_t_l_s___d_o_l___s_t_r_u_c_t.md)** <br>data object list  |
| struct | **[EMV_CTLS_TRACK2_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_c_k2___s_t_r_u_c_t.md)** <br>track 2 data  |
| struct | **[EMV_CTLS_CRDNAME_STRUCT](struct_e_m_v___c_t_l_s___c_r_d_n_a_m_e___s_t_r_u_c_t.md)** <br>cardholder name  |
| struct | **[EMV_CTLS_ICCRND_STRUCT](struct_e_m_v___c_t_l_s___i_c_c_r_n_d___s_t_r_u_c_t.md)** <br>icc dynamic number  |
| struct | **[EMV_CTLS_ISSDATA_STRUCT](struct_e_m_v___c_t_l_s___i_s_s_d_a_t_a___s_t_r_u_c_t.md)** <br>issuer application data  |
| struct | **[EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)** <br>struct for interface to [EMV_CTLS_SetTermData()]() and [EMV_CTLS_GetTermData()]() |
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
| struct | **[EMV_CTLS_PAYMENT_STRUCT](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md)** <br>Transaction parameters of an EMV transaction.  |
| struct | **[EMV_CTLS_APPS_SELECT_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md)** <br>Application selection parameters of an EMV transaction.  |
| struct | **[EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)** <br>struct for interface to [EMV_CTLS_SetupTransaction()]() |
| struct | **[EMV_CTLS_STARTRES_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md)** <br>Result data of [EMV_CTLS_SetupTransaction()]() |
| struct | **[EMV_CTLS_HOST_STRUCT](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md)** <br>Data structure for host response data. Input for [EMV_CTLS_ContinueOnline()]() |
| struct | **[EMV_CTLS_CONT_OFFL_STRUCT](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md)** <br>Transaction parameters of an EMV transaction at [EMV_CTLS_ContinueOfflineExt()]() |
| struct | **[EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)** <br>Data structure for output data of [EMV_CTLS_ContinueOffline()]() and [EMV_CTLS_ContinueOnline()]() |
| struct | **[EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md)** <br>Data structure CAP keys.  |
| struct | **[EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md)** <br>Data structure CAP keys.  |
| struct | **[EMV_CTLS_LED_COLORS_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_l_o_r_s___s_t_r_u_c_t.md)** <br>Data structure for LED colors. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]() |
| struct | **[EMV_CTLS_LED_CONFIG_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md)** <br>Data structure for LED configuration. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]() |
| struct | **[EMV_CTLS_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md)** <br>Candidate list additional data.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLI_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-type)** <br>9F06, AID (5 bytes RID + n bytes PIX)  |
| typedef struct [EMV_CTLS_APPLI_KERNEL_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md) | **[EMV_CTLS_APPLI_KERNEL_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-kernel-type)** <br>AID (9F06) and kernel ID.  |
| typedef struct [EMV_CTLS_DATA_STRUCT](struct_e_m_v___c_t_l_s___d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type)**  |
| typedef struct [EMV_CTLS_DOL_STRUCT](struct_e_m_v___c_t_l_s___d_o_l___s_t_r_u_c_t.md) | **[EMV_CTLS_DOL_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-dol-type)** <br>data object list  |
| typedef struct [EMV_CTLS_TRACK2_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_c_k2___s_t_r_u_c_t.md) | **[EMV_CTLS_TRACK2_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-track2-type)** <br>track 2 data  |
| typedef struct [EMV_CTLS_CRDNAME_STRUCT](struct_e_m_v___c_t_l_s___c_r_d_n_a_m_e___s_t_r_u_c_t.md) | **[EMV_CTLS_CRDNAME_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-crdname-type)** <br>cardholder name  |
| typedef struct [EMV_CTLS_ICCRND_STRUCT](struct_e_m_v___c_t_l_s___i_c_c_r_n_d___s_t_r_u_c_t.md) | **[EMV_CTLS_ICCRND_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-iccrnd-type)** <br>icc dynamic number  |
| typedef struct [EMV_CTLS_ISSDATA_STRUCT](struct_e_m_v___c_t_l_s___i_s_s_d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CTLS_ISSDATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-issdata-type)** <br>issuer application data  |
| typedef struct [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CTLS_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ctls-termdata-type)** <br>struct for interface to [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata) and [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) |
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
| typedef struct [EMV_CTLS_PAYMENT_STRUCT](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md) | **[EMV_CTLS_PAYMENT_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-payment-type)** <br>Transaction parameters of an EMV transaction.  |
| typedef struct [EMV_CTLS_APPS_SELECT_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md) | **[EMV_CTLS_APPS_SELECT_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-apps-select-type)** <br>Application selection parameters of an EMV transaction.  |
| typedef struct [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md) | **[EMV_CTLS_START_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-start-type)** <br>struct for interface to [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
| typedef struct [EMV_CTLS_STARTRES_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md) | **[EMV_CTLS_STARTRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-startres-type)** <br>Result data of [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
| typedef struct [EMV_CTLS_HOST_STRUCT](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md) | **[EMV_CTLS_HOST_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-host-type)** <br>Data structure for host response data. Input for [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) |
| typedef struct [EMV_CTLS_CONT_OFFL_STRUCT](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md) | **[EMV_CTLS_CONT_OFFL_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-cont-offl-type)** <br>Transaction parameters of an EMV transaction at [EMV_CTLS_ContinueOfflineExt()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueofflineext) |
| typedef struct [EMV_CTLS_TRANSRES_STRUCT](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md) | **[EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type)** <br>Data structure for output data of [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) and [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) |
| typedef struct [EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md) | **[EMV_CTLS_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capkey-type)** <br>Data structure CAP keys.  |
| typedef struct [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md) | **[EMV_CTLS_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capread-type)** <br>Data structure CAP keys.  |
| typedef struct [EMV_CTLS_LED_COLORS_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_l_o_r_s___s_t_r_u_c_t.md) | **[EMV_CTLS_LED_COLORS](group___a_d_k___l_e_d.md#typedef-emv-ctls-led-colors)** <br>Data structure for LED colors. Input for [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended) |
| typedef struct [EMV_CTLS_LED_CONFIG_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md) | **[EMV_CTLS_LED_CONFIG](group___a_d_k___l_e_d.md#typedef-emv-ctls-led-config)** <br>Data structure for LED configuration. Input for [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended) |
| typedef struct [EMV_CTLS_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CTLS_CANDIDATE_DATA_TYPE](group___f_u_n_c___f_l_o_w.md#typedef-emv-ctls-candidate-data-type)** <br>Candidate list additional data.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_Init_Framework_Client](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-init-framework-client)**(const char * version, const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) void | **[EMV_CTLS_SER_Exit_Framework](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-exit-framework)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_MapVirtualTerminal](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-mapvirtualterminal)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_StoreCAPKey](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-storecapkey)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_ReadCAPKeys](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-readcapkeys)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_SetTermData](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-settermdata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_GetTermData](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-gettermdata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_SetAppliDataSchemeSpecific](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-setapplidataschemespecific)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_GetAppliDataSchemeSpecific](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-getapplidataschemespecific)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_SetupTransaction](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-setuptransaction)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_ContinueOffline](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-continueoffline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_ContinueOnline](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-continueonline)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_fetchTxnTags](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-fetchtxntags)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_EndTransaction](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-endtransaction)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SER_TransparentCommand](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-transparentcommand)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SER_SmartISO](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-smartiso)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SER_SmartReset](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-smartreset)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SER_SmartPowerOff](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-smartpoweroff)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SER_CardRemoval](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-cardremoval)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SER_LED_SetMode](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-led-setmode)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SER_LED](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-led)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SER_LED_ConfigDesign](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-led-configdesign)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SER_Break](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-break)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SER_GetCandidateData](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-ser-getcandidatedata)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen) |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_Init_Framework_Client](_e_m_v___c_t_l_s___interface_8h.md#function-emv-ctls-init-framework-client)**(const char * version, unsigned char numberOfAIDs, [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt) EMV_Callback, void * externalData, unsigned long options, unsigned long * ulResult)<br>Internal function for initialization    Don't call direct!    Instead use [EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework).  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) void | **[EMV_CTLS_Exit_Framework](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework)**(void )<br>Kernel deactivation.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) void | **[EMV_CTLS_Exit_Framework_extended](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework-extended)**(unsigned char options)<br>Kernel deactivation with options.  |
| const [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) char * | **[EMV_CTLS_CLIENT_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-client-getversion)**(void )<br>Get contactless client version.  |
| const [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) char * | **[EMV_CTLS_FRAMEWORK_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-framework-getversion)**(void )<br>Get contactless framework version.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_MapVirtualTerminal](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal)**([EMV_ADK_VIRTUALTERMMAP_TYPE](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md#typedef-emv-adk-virtualtermmap-type) VirtualTermMapType, unsigned char * TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal)<br>Changes the Virtual Terminal Map.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_StoreCAPKey](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-storecapkey)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleCAPKeyType, const [EMV_CTLS_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capkey-type) * pxKeyData)<br>Stores the specified CAP key.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ReadCAPKeys](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-readcapkeys)**([EMV_CTLS_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capread-type) * pxKeyData, unsigned char * pucMaxnum)<br>Reads CAP keys.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetCAPKeyInfo](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getcapkeyinfo)**([EMV_CTLS_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capread-type) * pxKeyData, unsigned capacity, unsigned offset, unsigned * numberRead, unsigned * numberConfigured)<br>Reads CAP keys.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata)**([EMV_CTLS_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ctls-termdata-type) * pxTermData)<br>set terminal specific data and perform verification and saving of data  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata)**([EMV_CTLS_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ctls-termdata-type) * pxTermData)<br>get configured terminal data  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleAppliType, [EMV_CTLS_APPLI_KERNEL_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-kernel-type) * pxAID, [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-scheme-specific-type) * pxAppliData)<br>Set application specific data and perform verification and saving of data.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getapplidataschemespecific)**([EMV_ADK_READAPPLI_TYPE](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#typedef-emv-adk-readappli-type) eReadAppliType, [EMV_CTLS_APPLI_KERNEL_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-kernel-type) * pxAID, [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-scheme-specific-type) * pxAppliData)<br>Get configured application data.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ApplyConfiguration](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration)**(unsigned long options)<br>Transfer the stored configuration to reader.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SetupTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)**([EMV_CTLS_START_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-start-type) * pxStartInput, [EMV_CTLS_STARTRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-startres-type) * pxStartRes)<br>Set up a CTLS EMV transaction.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ContinueOffline](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline)**([EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type) * pxTransRes)<br>CTLS EMV transaction (offline part ... including 1st cryptogram, depends on CTLS scheme)  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ContinueOfflineExt](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueofflineext)**([EMV_CTLS_CONT_OFFL_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-cont-offl-type) * pxContOfflInput, [EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type) * pxTransRes)<br>Like EMV_CTLS_ContinueOffline but with input parameter.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ContinueOnline](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline)**([EMV_CTLS_HOST_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-host-type) * pxOnlineInput, [EMV_CTLS_TRANSRES_TYPE](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#typedef-emv-ctls-transres-type) * pxTransRes)<br>EMV transaction (handling of host response including 2nd cryptogram)  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_fetchTxnTags](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags)**(unsigned long options, unsigned long * requestedTags, unsigned short noOfRequestedTags, unsigned char * tlvBuffer, unsigned short bufferLength, unsigned short * tlvDataLength)<br>Fetch one or several tags at the end of the transaction.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_fetchTxnDOL](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxndol)**(unsigned long options, const unsigned char * DOL, unsigned dolLen, unsigned char * buffer, unsigned bufferSize, unsigned * dataLength)<br>Retrieve formatted transaction data at the end of the transaction.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_EndTransaction](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-endtransaction)**(unsigned long options)<br>End transaction.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_TransparentCommand](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentcommand)**(unsigned short usInDataLen, unsigned char * pucDataIn, unsigned short * pusOutDataLen, unsigned char * pucDataOut)<br>Transparently send a command to the reader and receive it's response.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_TransparentSend](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend)**(unsigned short usInDataLen, unsigned char * pucDataIn)<br>Transparently send a command to the reader.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_TransparentReceive](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive)**(unsigned short * pusOutDataLen, unsigned char * pucDataOut)<br>Transparent VFI reader access: Receive a response.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SmartISO](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartiso)**(unsigned char ucOptions, unsigned short usInDataLen, unsigned char * pucDataIn, unsigned short * pusOutDataLen, unsigned char * pucDataOut, unsigned short usOutBufferLength)<br>Send chip card command and receive response.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SmartReset](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)**(unsigned char ucOptions, unsigned char * pucCardInfo, unsigned long * pnInfoLength)<br>Detect if card is present in the RF field (read ATR)  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SmartPowerOff](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartpoweroff)**(unsigned char ucOptions)<br>Deactivate chip card.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_CardRemoval](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-cardremoval)**(long timeoutMillis)<br>Wait until contactless card removed or timeout.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_LED_SetMode](group___a_d_k___l_e_d.md#function-emv-ctls-led-setmode)**(unsigned char ucLedMode)<br>Set mode of LED control.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_LED](group___a_d_k___l_e_d.md#function-emv-ctls-led)**(unsigned char ucLedId, unsigned char ucLedState)<br>Switch on LED.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_LED_ConfigDesign](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)**(unsigned short width, unsigned short height, unsigned char * color_off, unsigned char * color_on, unsigned short xRegion, unsigned short yRegion, unsigned short wRegion, unsigned short hRegion)<br>Configure the desing for the framebuffer LEDs used for virtual CTLS LEDs  ** Only required when using virtual LEDs. **  .  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_LED_ConfigDesign_Extended](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended)**(const [EMV_CTLS_LED_CONFIG](group___a_d_k___l_e_d.md#typedef-emv-ctls-led-config) * led_config)<br>Configure the design for the framebuffer LEDs used for virtual CTLS LEDs  ** Only required when using virtual LEDs. **  .  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_Break](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-break)**(void )<br>Universal break command  ** Velocity: Only required when using [EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout) != 0. ** ** VFI-Reader: Always required ** |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetCandidateData](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata)**([EMV_CTLS_CANDIDATE_DATA_TYPE](group___f_u_n_c___f_l_o_w.md#typedef-emv-ctls-candidate-data-type) * candidateData)<br>Get additional candidate information for reducing and resorting the mutual candidate list.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetCandidateDataMax](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedatamax)**([EMV_CTLS_CANDIDATE_DATA_TYPE](group___f_u_n_c___f_l_o_w.md#typedef-emv-ctls-candidate-data-type) * candidateData, unsigned maxCandidates)<br>Get additional candidate information for reducing and resorting the mutual candidate list.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_KERNEL_VERSION_SIZE](group___d_e_f___c_o_n_f___t_e_r_m.md#define-emv-ctls-kernel-version-size)** <br>Length of Contactless kernel version information.  |
|  | **[DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)**  |
|  | **[EMV_CTLS_ADK_SETUP_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-start)** <br>Initialization Setup.  |
|  | **[EMV_CTLS_ADK_SETUP_NO_CONTEXT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-no-context)** <br>Setup: context missing.  |
|  | **[EMV_CTLS_ADK_SETUP_NO_INIT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-no-init)** <br>Setup: not initialized.  |
|  | **[EMV_CTLS_ADK_SETUP_TERMDATA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-termdata)** <br>Setup: terminal data not available.  |
|  | **[EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-above-ceiling-emv-only)** <br>Setup: above ceiling limit EMV.  |
|  | **[EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-above-ceiling-no-dom)** <br>Setup: above ceiling limit no domestic app.  |
|  | **[EMV_CTLS_ADK_SETUP_RND_FAIL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-rnd-fail)** <br>Setup: RND failed.  |
|  | **[EMV_CTLS_ADK_SETUP_DETECT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-detect)** <br>Setup: detect failed.  |
|  | **[EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-set-param-fail)** <br>Setup: txn setup failure.  |
|  | **[EMV_CTLS_ADK_SETUP_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-setup-ok)** <br>Setup: OK.  |
|  | **[EMV_CTLS_ADK_TXN_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-start)** <br>TXN: Start.  |
|  | **[EMV_CTLS_ADK_TXN_NO_ATR](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-no-atr)** <br>TXN: no ATR.  |
|  | **[EMV_CTLS_ADK_TXN_2_CARDS](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-2-cards)** <br>TXN: 2 cards in field.  |
|  | **[EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-cand-list-empty)** <br>TXN: empty candidate list of terminal.  |
|  | **[EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-dom-one-app-selected)** <br>TXN: a single domestic app is selected.  |
|  | **[EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-dom-one-app-fail)** <br>TXN: single domestic app failed.  |
|  | **[EMV_CTLS_ADK_TXN_L1_DIR_READING](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-l1-dir-reading)** <br>TXN: L1 error at directory reading.  |
|  | **[EMV_CTLS_ADK_TXN_L1_CAND_LIST](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-l1-cand-list)** <br>TXN: L1 error candidate list building.  |
|  | **[EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-dom-app-not-selected)** <br>TXN: domestic application selection failed.  |
|  | **[EMV_CTLS_ADK_TXN_DOM_APP_SELECTED](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-dom-app-selected)** <br>TXN: domestic application selected.  |
|  | **[EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-no-combo-empty-list)** <br>TXN: empty combo list.  |
|  | **[EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-no-dom-app-select-no-final)** <br>TXN: domestic app select failed no final select issued.  |
|  | **[EMV_CTLS_ADK_TXN_L1_FINAL_SELECT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-l1-final-select)** <br>TXN: L1 error final select.  |
|  | **[EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-aid-not-read-empty)** <br>TXN: AID parameter reading failed, list empty.  |
|  | **[EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-aid-skip-dom-empty)** <br>TXN: domestic app skipped, list empty.  |
|  | **[EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-aid-skip-emv-empty)** <br>TXN: emv app skipped, list empty.  |
|  | **[EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-dom-final-sel-ok)** <br>TXN: domestic application with final select ok.  |
|  | **[EMV_CTLS_ADK_TXN_UNKNOW_KERNEL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-unknow-kernel)** <br>TXN: unknown kernel.  |
|  | **[EMV_CTLS_ADK_TXN_EP_INIT_FAILED](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-ep-init-failed)** <br>TXN: Entry Point Init failed.  |
|  | **[EMV_CTLS_ADK_TXN_LIST_ITERATION_KO](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-list-iteration-ko)** <br>TXN: error list iteration.  |
|  | **[EMV_CTLS_ADK_TXN_CANDIDATE_EVAL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-candidate-eval)** <br>TXN: candidate list evaluation.  |
|  | **[EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-candidate-final-select)** <br>TXN: final select.  |
|  | **[EMV_CTLS_ADK_TXN_MK_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-start)** <br>TXN: Start of PayPass.  |
|  | **[EMV_CTLS_ADK_TXN_MK_NEW_SEL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-new-sel)** <br>TXN: new select.  |
|  | **[EMV_CTLS_ADK_TXN_MK_RETAP_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-retap-start)** <br>TXN: retap required.  |
|  | **[EMV_CTLS_ADK_TXN_MK_MOBILE_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-mobile-start)** <br>TXN: mobile requested.  |
|  | **[EMV_CTLS_ADK_TXN_MK_L1_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-l1-start)** <br>TXN: L1 error.  |
|  | **[EMV_CTLS_ADK_TXN_MK_RETAP_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-retap-msd)** <br>TXN: retap reuired MSD.  |
|  | **[EMV_CTLS_ADK_TXN_MK_MOBILE_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-mobile-msd)** <br>TXN: mobile requested MSD.  |
|  | **[EMV_CTLS_ADK_TXN_MK_L1_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-l1-msd)** <br>TXN: L1 error MSD.  |
|  | **[EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-no-data-msd)** <br>TXN: no data MSD.  |
|  | **[EMV_CTLS_ADK_TXN_MK_DECLINE_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-decline-msd)** <br>TXN: decline MSD.  |
|  | **[EMV_CTLS_ADK_TXN_MK_OK_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-ok-msd)** <br>TXN: ok MSD.  |
|  | **[EMV_CTLS_ADK_TXN_MK_ONLINE_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-online-msd)** <br>TXN: online MSD.  |
|  | **[EMV_CTLS_ADK_TXN_MK_OTHER_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-other-msd)** <br>TXN: other MSD.  |
|  | **[EMV_CTLS_ADK_TXN_MK_RETAP_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-retap-chp)** <br>TXN: retap reuired CHP.  |
|  | **[EMV_CTLS_ADK_TXN_MK_MOBILE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-mobile-chp)** <br>TXN: mobile requested CHP.  |
|  | **[EMV_CTLS_ADK_TXN_MK_L1_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-l1-chp)** <br>TXN: L1 error CHP.  |
|  | **[EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-cardread-chp)** <br>TXN: card data read CHP.  |
|  | **[EMV_CTLS_ADK_TXN_MK_DECLINE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-decline-chp)** <br>TXN: decline CHP.  |
|  | **[EMV_CTLS_ADK_TXN_MK_ONLINE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-online-chp)** <br>TXN: online CHP.  |
|  | **[EMV_CTLS_ADK_TXN_MK_OK_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-ok-chp)** <br>TXN: ok CHP.  |
|  | **[EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-interface-chp)** <br>TXN: use other interface.  |
|  | **[EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-new-sel-chp)** <br>TXN: new select CHP.  |
|  | **[EMV_CTLS_ADK_TXN_MK_OTHER_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-other-chp)** <br>TXN: other error CHP.  |
|  | **[EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-decline-before-gac)** <br>TXN: decline start.  |
|  | **[EMV_CTLS_ADK_TXN_MK_FALLBACK_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-fallback-start)** <br>TXN: fallback start.  |
|  | **[EMV_CTLS_ADK_TXN_MK_INIT_FAIL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-init-fail)** <br>TXN: Init failed.  |
|  | **[EMV_CTLS_ADK_TXN_MK_GPO_RR](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-gpo-rr)** <br>TXN: Step ReadRecords and GPO.  |
|  | **[EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-mk-fallback-othercard)** <br>TXN: use other interface or other card.  |
|  | **[EMV_CTLS_ADK_TXN_VK_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-start)** <br>TXN: Start of payWave.  |
|  | **[EMV_CTLS_ADK_TXN_VK_NEW_SEL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-new-sel)** <br>TXN: new select.  |
|  | **[EMV_CTLS_ADK_TXN_VK_MOBILE_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-mobile-start)** <br>TXN: mobile requested.  |
|  | **[EMV_CTLS_ADK_TXN_VK_L1_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-l1-start)** <br>TXN: L1 error.  |
|  | **[EMV_CTLS_ADK_TXN_VK_L1_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-l1-msd)** <br>TXN: L1 error MSD.  |
|  | **[EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-fallback-msd)** <br>TXN: Start of PayPass.  |
|  | **[EMV_CTLS_ADK_TXN_VK_DECLINE_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-decline-msd)** <br>TXN: decline MSD.  |
|  | **[EMV_CTLS_ADK_TXN_VK_OK_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-ok-msd)** <br>TXN: ok MSD.  |
|  | **[EMV_CTLS_ADK_TXN_VK_ONLINE_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-online-msd)** <br>TXN: online MSD.  |
|  | **[EMV_CTLS_ADK_TXN_VK_OTHER_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-other-msd)** <br>TXN: other error MSD.  |
|  | **[EMV_CTLS_ADK_TXN_VK_L1_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-l1-chp)** <br>TXN: L1 error CHP.  |
|  | **[EMV_CTLS_ADK_TXN_VK_READCARD_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-readcard-chp)** <br>TXN: read card CHP.  |
|  | **[EMV_CTLS_ADK_TXN_VK_DECLINE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-decline-chp)** <br>TXN: decline CHP.  |
|  | **[EMV_CTLS_ADK_TXN_VK_ONLINE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-online-chp)** <br>TXN: online CHP.  |
|  | **[EMV_CTLS_ADK_TXN_VK_OK_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-ok-chp)** <br>TXN: ok CHP.  |
|  | **[EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-fallback-chp)** <br>TXN: fallback CHP.  |
|  | **[EMV_CTLS_ADK_TXN_VK_OTHER_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-other-chp)** <br>TXN: other error CHP.  |
|  | **[EMV_CTLS_ADK_TXN_VK_DECLINE_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-decline-start)** <br>TXN: decline start.  |
|  | **[EMV_CTLS_ADK_TXN_VK_FALLBACK_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-fallback-start)** <br>TXN: fallback start.  |
|  | **[EMV_CTLS_ADK_TXN_VK_OTHER_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-other-start)** <br>TXN: other error start.  |
|  | **[EMV_CTLS_ADK_TXN_VK_INIT_FAIL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-init-fail)** <br>TXN: Init failed.  |
|  | **[EMV_CTLS_ADK_TXN_VK_GPO_RR](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-gpo-rr)** <br>TXN: Step ReadRecords and GPO.  |
|  | **[EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-incons-track2)** <br>TXN: inconsisten track 2 and PAN.  |
|  | **[EMV_CTLS_ADK_TXN_VK_READCARD_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-readcard-msd)** <br>TXN: card read MSD.  |
|  | **[EMV_CTLS_ADK_TXN_VK_RETAP_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-retap-start)** <br>TXN: retap required.  |
|  | **[EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-vk-fallback-card-log)** <br>TXN: fallback because of failed card log reading.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-start)** <br>TXN: Start of Kernel Processing.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-new-sel)** <br>TXN: new select.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_RETAP_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-retap-start)** <br>TXN: retap required.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-mobile-start)** <br>TXN: mobile requested.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_L1_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-l1-start)** <br>TXN: L1 error.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-retap-msd)** <br>TXN: retap reuired MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-mobile-msd)** <br>TXN: mobile requested MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_L1_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-l1-msd)** <br>TXN: L1 error MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-no-data-msd)** <br>TXN: no data MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-decline-msd)** <br>TXN: decline MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_OK_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-ok-msd)** <br>TXN: ok MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-online-msd)** <br>TXN: online MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-other-msd)** <br>TXN: other MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-retap-chp)** <br>TXN: retap reuired CHP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-mobile-chp)** <br>TXN: mobile requested CHP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_L1_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-l1-chp)** <br>TXN: L1 error CHP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-cardread-chp)** <br>TXN: card data read CHP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-decline-chp)** <br>TXN: decline CHP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-online-chp)** <br>TXN: online CHP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_OK_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-ok-chp)** <br>TXN: ok CHP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-interface-chp)** <br>TXN: use other interface.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-new-sel-chp)** <br>TXN: new select CHP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-other-chp)** <br>TXN: other error CHP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-decline-before-gac)** <br>TXN: decline start.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-fallback-start)** <br>TXN: fallback start.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-init-fail)** <br>TXN: Init failed.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_GPO_RR](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-gpo-rr)** <br>TXN: Step ReadRecords and GPO.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-fallback-othercard)** <br>TXN: use other card.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-try-zip)** <br>TXN: try Discover ZIP.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-fallback-msd)** <br>TXN: fallback MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-decline-start)** <br>TXN: decline before EOT.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-readcard-msd)** <br>TXN: read card MSD.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-fallback-chp)** <br>TXN: use other interface or other card.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-start-fallback-othercard)** <br>TXN: use other interface or other card.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-other-term-chp)** <br>TXN: advice merchant to use other terminal.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-too-many-taps)** <br>TXN: card holder exceeded number of taps allowed for one transaction.  |
|  | **[EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-kernel-bad-ffi)** <br>TXN: Interac bad FFI.  |
|  | **[EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-gk-get-data-okay)** <br>TXN: Gemalto, special transaction GET DATA finished okay.  |
|  | **[EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-gk-get-data-fail)** <br>TXN: Gemalto, special transaction GET DATA finished fail.  |
|  | **[EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-gk-put-data-okay)** <br>TXN: Gemalto, special transaction PUT DATA finished okay.  |
|  | **[EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-txn-gk-put-data-fail)** <br>TXN: Gemalto, special transaction PUT DATA finished fail.  |
|  | **[EMV_CTLS_ADK_ONL_START](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-onl-start)** <br>Online: Start.  |
|  | **[EMV_CTLS_ADK_ONL_NO_CTLS_TXN](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-onl-no-ctls-txn)** <br>Online: No Ctls transaction happened before call.  |
|  | **[EMV_CTLS_ADK_ONL_NO_HOST](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-onl-no-host)** <br>Online: no answer from host.  |
|  | **[EMV_CTLS_ADK_ONL_HOST_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-onl-host-ok)** <br>Online: host approved.  |
|  | **[EMV_CTLS_ADK_ONL_HOST_DECLINE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-onl-host-decline)** <br>Online: host declined.  |
|  | **[EMV_CTLS_ADK_ONL_HOST_SWITCH_IF](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-onl-host-switch-if)** <br>Online: Strong Consumer Authentication - switch interface.  |
|  | **[EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-onl-host-online-pin)** <br>Online: Strong Consumer Authentication - Online PIN.  |
|  | **[EMV_CTLS_ADK_END_TXN](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-ctls-adk-end-txn)** <br>TXN: End Transaction called.  |
|  | **[EMV_CTLS_ADK_STEP_01](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-01)** <br>sub step 1  |
|  | **[EMV_CTLS_ADK_STEP_02](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-02)** <br>sub step 2  |
|  | **[EMV_CTLS_ADK_STEP_03](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-03)** <br>sub step 3  |
|  | **[EMV_CTLS_ADK_STEP_04](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-04)** <br>sub step 4  |
|  | **[EMV_CTLS_ADK_STEP_05](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-05)** <br>sub step 5  |
|  | **[EMV_CTLS_ADK_STEP_06](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-06)** <br>sub step 6  |
|  | **[EMV_CTLS_ADK_STEP_07](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-07)** <br>sub step 7  |
|  | **[EMV_CTLS_ADK_STEP_08](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-08)** <br>sub step 8  |
|  | **[EMV_CTLS_ADK_STEP_09](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-09)** <br>sub step 9  |
|  | **[EMV_CTLS_ADK_STEP_10](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-10)** <br>sub step 10  |
|  | **[EMV_CTLS_ADK_STEP_11](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-11)** <br>sub step 11  |
|  | **[EMV_CTLS_ADK_STEP_12](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-12)** <br>sub step 12  |
|  | **[EMV_CTLS_ADK_STEP_13](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-13)** <br>sub step 13  |
|  | **[EMV_CTLS_ADK_STEP_14](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-14)** <br>sub step 14  |
|  | **[EMV_CTLS_ADK_STEP_15](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-15)** <br>sub step 15  |
|  | **[EMV_CTLS_ADK_STEP_16](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-16)** <br>sub step 16  |
|  | **[EMV_CTLS_ADK_STEP_17](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-17)** <br>sub step 17  |
|  | **[EMV_CTLS_ADK_STEP_18](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-18)** <br>sub step 18  |
|  | **[EMV_CTLS_ADK_STEP_19](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-19)** <br>sub step 19  |
|  | **[EMV_CTLS_ADK_STEP_20](group___d_e_f___a_d_k___d_e_b_u_g___s_t_a_t_u_s.md#define-emv-ctls-adk-step-20)** <br>sub step 20  |
|  | **[INPUT_CTLS_TRM_SUPPORTED_CTLS](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-supported-ctls)** <br>B1b1: [EMV_CTLS_TERMDATA_STRUCT::CL_Modes_Supported](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-cl-modes-supported).  |
|  | **[INPUT_CTLS_TRM_TYPE](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-type)** <br>B1b2: [EMV_CTLS_TERMDATA_STRUCT::TermTyp](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp).  |
|  | **[INPUT_CTLS_TRM_CURRENCY](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-currency)** <br>B1b3: [EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans).  |
|  | **[INPUT_CTLS_TRM_EXP_CURRENCY](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-exp-currency)** <br>B1b4: [EMV_CTLS_TERMDATA_STRUCT::ExpTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans).  |
|  | **[INPUT_CTLS_TRM_COUNTRY_CODE](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-country-code)** <br>B1b5: [EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-countrycodeterm).  |
|  | **[INPUT_CTLS_TRM_FLOW_OPTIONS](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-flow-options)** <br>B1b6: [EMV_CTLS_TERMDATA_STRUCT::FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions).  |
|  | **[INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-maxctls-translimit)** <br>B1b7: [EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-maxctlstranslimit).  |
|  | **[INPUT_CTLS_TRM_BEEP_VOLUME](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-beep-volume)** <br>B1b8: [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume).  |
|  | **[INPUT_CTLS_TRM_LANGUAGES](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-languages)** <br>B2b1: [EMV_CTLS_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang).  |
|  | **[INPUT_CTLS_TRM_IFD_SERIAL](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-ifd-serial)** <br>B2b2: [EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber).  |
|  | **[INPUT_CTLS_TRM_KERNEL_VERSION](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-kernel-version)** <br>B2b3: [EMV_CTLS_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion).  |
|  | **[INPUT_CTLS_TRM_FRAMEWORK_VERSION](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-framework-version)** <br>B2b4: [EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion).  |
|  | **[INPUT_CTLS_TRM_HOTLIST](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-hotlist)** <br>B2b5: [EMV_CTLS_TERMDATA_STRUCT::Hotlist](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hotlist).  |
|  | **[INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-beep-freq-success)** <br>B2b6: [EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencysuccess).  |
|  | **[INPUT_CTLS_TRM_BEEP_FREQ_ALERT](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-beep-freq-alert)** <br>B2b7: [EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencyalert).  |
|  | **[INPUT_CTLS_TRM_L1DRIVER_VERSION](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-l1driver-version)** <br>B2b8: [EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion).  |
|  | **[INPUT_CTLS_TRM_SECOND_TAP_DELAY](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-second-tap-delay)** <br>B3b1: [EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-secondtapdelay).  |
|  | **[INPUT_CTLS_TRM_HOST_COMM_TIMEOUT](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-host-comm-timeout)** <br>B3b2: [EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hostcommunicationtimeout).  |
|  | **[INPUT_CTLS_TRM_POI_INFORMATION](group___d_e_f___i_n_p_u_t___t_e_r_m.md#define-input-ctls-trm-poi-information)** <br>B3b3: [EMV_CTLS_TERMDATA_STRUCT::poiInformation](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-poiinformation).  |
|  | **[CL_DISABLED](group___c_l___m_o_d_e_s.md#define-cl-disabled)** <br>Contactless TXNs are disabled, all other contactless parameters are ignored.  |
|  | **[CL_MC_PAYPASS_CHIP](group___c_l___m_o_d_e_s.md#define-cl-mc-paypass-chip)** <br>Maestro Paypass enabled (chip only, e.g. Maestro definiton)  |
|  | **[CL_MC_PAYPASS_MSR](group___c_l___m_o_d_e_s.md#define-cl-mc-paypass-msr)** <br>Mastercard Paypass enabled, msr only.  |
|  | **[CL_MC_PAYPASS_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-mc-paypass-combined)** <br>Mastercard Paypass enabled (MC mandates to support chip and msr per standard)  |
|  | **[CL_VISA_CHIP](group___c_l___m_o_d_e_s.md#define-cl-visa-chip)** <br>VISA qVSDC enabled (no magstripe, VISA mandates using chip only in Europe)  |
|  | **[CL_VISA_MSR](group___c_l___m_o_d_e_s.md#define-cl-visa-msr)** <br>VISA magstripe enabled, msr only.  |
|  | **[CL_VISA_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-visa-combined)** <br>VISA chip and magstripe enabled.  |
|  | **[CL_AMEX_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-amex-combined)** <br>Amex enabled, chip and msr (this is the Amex default)  |
|  | **[CL_DISCOVER_ZIP](group___c_l___m_o_d_e_s.md#define-cl-discover-zip)** <br>Discover Zip enabled (msr only system)  |
|  | **[CL_INTERAC](group___c_l___m_o_d_e_s.md#define-cl-interac)** <br>Interac (Canada) enabled (always chip and msr)  |
|  | **[CL_QPBOC_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-qpboc-combined)** <br>China PBOC/UnionPay enabled (msr and chip)  |
|  | **[CL_JCB](group___c_l___m_o_d_e_s.md#define-cl-jcb)** <br>JCB enabled.  |
|  | **[CL_EPAL](group___c_l___m_o_d_e_s.md#define-cl-epal)** <br>EPAL (Australia) enabled.  |
|  | **[CL_AMEX_MSR](group___c_l___m_o_d_e_s.md#define-cl-amex-msr)** <br>Amex enable, msr only enabled (either use Amex combined or Amex msr)  |
|  | **[CL_DISCOVER_DPAS_CHIP](group___c_l___m_o_d_e_s.md#define-cl-discover-dpas-chip)** <br>D-PAS (Discover) chip enabled, chip only.  |
|  | **[CL_DISCOVER_DPAS_MSR](group___c_l___m_o_d_e_s.md#define-cl-discover-dpas-msr)** <br>D-PAS (Discover) magstripe enabled, msr only.  |
|  | **[CL_DISCOVER_DPAS_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-discover-dpas-combined)** <br>D-PAS (Discover) chip and magstripe enabled.  |
|  | **[CL_RUPAY](group___c_l___m_o_d_e_s.md#define-cl-rupay)** <br>RuPay (India) enabled.  |
|  | **[CL_JCB_EMV](group___c_l___m_o_d_e_s.md#define-cl-jcb-emv)** <br>JCB with EMV mode.  |
|  | **[CL_JCB_LEGACY](group___c_l___m_o_d_e_s.md#define-cl-jcb-legacy)** <br>JCB with Legacy mode.  |
|  | **[CL_GEMALTO](group___c_l___m_o_d_e_s.md#define-cl-gemalto)** <br>Gemalto kernel.  |
|  | **[CL_GIROCARD](group___c_l___m_o_d_e_s.md#define-cl-girocard)** <br>girocard (German debit brand) kernel based on PayPass  |
|  | **[CL_SIBS](group___c_l___m_o_d_e_s.md#define-cl-sibs)** <br>SIBS (chip only)  |
|  | **[CL_PAGOBANCOMAT](group___c_l___m_o_d_e_s.md#define-cl-pagobancomat)** <br>PagoBancomat.  |
|  | **[CL_MIR](group___c_l___m_o_d_e_s.md#define-cl-mir)** <br>MIR.  |
|  | **[CL_SUPPORTED_VELOCITY](group___c_l___m_o_d_e_s.md#define-cl-supported-velocity)** <br>(used internally)  |
|  | **[CL_SUPPORTED_VFI](group___c_l___m_o_d_e_s.md#define-cl-supported-vfi)** <br>(used internally)  |
|  | **[CL_ALL](group___c_l___m_o_d_e_s.md#define-cl-all)** <br>This can be used to configure Terminal to support all modes.  |
|  | **[CL_UNKNOWN](group___c_l___m_o_d_e_s.md#define-cl-unknown)** <br>unknown kernel  |
|  | **[CL_APPS_KERNEL](group___c_l___m_o_d_e_s.md#define-cl-apps-kernel)** <br>kernel is handled by the application, entry point returns to app if this AID is selected  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-visa-wave)** <br>B1b1: Support for Visa wave    for VFI reader or enabling Raptor VISA AP kernel (PDOL decision)    Info: VFI reader tag DF64, 1FF0 and others - This feature is not configurable per AID only global.  |
|  | **[INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-cko-amexemv-or-nonemv-market)** <br>B1b2: Support for Amex EMV or NON EMV market    Map to Byte2 BIT1 of Contactless Kernel Options(1FF0)    Info: VFI reader tag 1FF0 - This feature is not configurable per AID only global.  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-ui-scheme-default)** <br>B1b3: VFI reader only: Use reader's UI scheme "default", as standard "EMEA" is used.    Visa Europe tests will fail if this is activated. But it's needed for display callback "L1 error" ([EMV_ADK_TXT_RETAP_SAME_L1](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-retap-same-l1))  |
|  | **[INPUT_CTLS_TRM_IFD_SERIAL_USE_TID](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-ifd-serial-use-tid)** <br>B1b4: Use the TID as IFD Serial number. Background: If application can not provide IFD_Serial this can be used as replacement to have a unique value available (not for VFI-Reader).  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-led-non-visa-europe)** <br>B1b5: Switch off Visa Europe work around for LED2. This option is like INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT but for VERTEX.  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-led-ep-option-2)** <br>B1b6: Use LED scheme option 2 as defined in Entry Point spec [EMV BB]. Coloured LEDs similar to Visa Wave 2 (Visa Asia Pacific). For LED configuration see [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended).  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-led-interac)** <br>B1b7: Use LED blinking scheme for Interac (Canada)  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-forward-vfi-fail)** <br>B1b8: VFI Reader final scenario "Fail" is forwarded to the application by returning EMV_ADK_VFI_FAIL instead of per default EMV_ADK_AAC. Additionnally the ADK provides the SW12 in T_DF64_KernelDebugData[0]&[1], VFI Reader Error Code in T_DF64_KernelDebugData[3], and VFI Reader RF State Code in T_DF64_KernelDebugData[30].  |
|  | **[INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-disable-discover-zip-check)** <br>B2b1: VFI Reader only: Disable the check according to D-PAS 1.0 Bulletin TAS-002 v1.0 which requires to consider the legacy Discover ZIP application as mandatory on any card/phone with the Discover/Diners D-PAS AID, and to reject the card if ZIP is not present.  |
|  | **[VISA_TTQ_MAGSTRIPE_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-magstripe-supported)** <br>B1b8: Contactless magnetic stripe (MSD) supported.  |
|  | **[VISA_TTQ_VSDC_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-vsdc-supported)** <br>B1b7: Contactless VSDC supported.  |
|  | **[VISA_TTQ_qVSDC_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-qvsdc-supported)** <br>B1b6: Contactless qVSDC supported.  |
|  | **[VISA_TTQ_CONTACT_VSDC_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-contact-vsdc-supported)** <br>B1b5: Contact VSDC supported.  |
|  | **[VISA_TTQ_OFFLINE_ONLY](group___c_l___t_t_q.md#define-visa-ttq-offline-only)** <br>B1b4: Reader is Offline Only.  |
|  | **[VISA_TTQ_ONLINE_PIN_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-online-pin-supported)** <br>B1b3: Online PIN supported.  |
|  | **[VISA_TTQ_SIGNATURE_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-signature-supported)** <br>B1b2: Signature supported.  |
|  | **[VISA_TTQ_ODA_ONLINE_SUPPORTED](group___c_l___t_t_q.md#define-visa-ttq-oda-online-supported)** <br>B1b1: ODA for Online Authorizations supported.  |
|  | **[VISA_TTQ_ONLINE_FORCED](group___c_l___t_t_q.md#define-visa-ttq-online-forced)** <br>B2b8: Online cryptogram required.  |
|  | **[VISA_TTQ_CVM_FORCED](group___c_l___t_t_q.md#define-visa-ttq-cvm-forced)** <br>B2b7: CVM required.  |
|  | **[VISA_TTQ_CONTACT_PINOFFL](group___c_l___t_t_q.md#define-visa-ttq-contact-pinoffl)** <br>B2b6: (Contact Chip) Offline PIN supported.  |
|  | **[TTQ_MAGSTRIPE_MODE_SUPPORTED](group___t_t_q.md#define-ttq-magstripe-mode-supported)** <br>B1b8: Mag-stripe mode supported.  |
|  | **[TTQ_EMV_MODE_SUPPORTED](group___t_t_q.md#define-ttq-emv-mode-supported)** <br>B1b6: EMV mode supported.  |
|  | **[TTQ_CONTACT_CHIP_SUPPORTED](group___t_t_q.md#define-ttq-contact-chip-supported)** <br>B1b5: EMV contact chip supported.  |
|  | **[TTQ_OFFLINE_ONLY](group___t_t_q.md#define-ttq-offline-only)** <br>B1b4: Offline-only reader.  |
|  | **[TTQ_ONLINE_PIN_SUPPORTED](group___t_t_q.md#define-ttq-online-pin-supported)** <br>B1b3: Online PIN supported.  |
|  | **[TTQ_SIGNATURE_SUPPORTED](group___t_t_q.md#define-ttq-signature-supported)** <br>B1b2: Signature supported.  |
|  | **[TTQ_ODA_SUPPORTED](group___t_t_q.md#define-ttq-oda-supported)** <br>B1b1: Offline Data Authentication for Online Authorisations supported (WISE: without "for online")  |
|  | **[TTQ_ONLINE_CRYPTOGRAM_REQUIRED](group___t_t_q.md#define-ttq-online-cryptogram-required)** <br>B2b8: Online cryptogram required.  |
|  | **[TTQ_CVM_REQUIRED](group___t_t_q.md#define-ttq-cvm-required)** <br>B2b7: CVM required.  |
|  | **[TTQ_CONTACT_OFFLINE_PIN](group___t_t_q.md#define-ttq-contact-offline-pin)** <br>B2b6: (Contact Chip) Offline PIN supported.  |
|  | **[TTQ_ISSUER_UPDATE_SUPPORTED](group___t_t_q.md#define-ttq-issuer-update-supported)** <br>B3b8: Issuer Update Processing supported.  |
|  | **[TTQ_CD_CVM_SUPPORTED](group___t_t_q.md#define-ttq-cd-cvm-supported)** <br>B3b7: Consumer Device CVM supported.  |
|  | **[VISA_DRL_DISABLE_ZERO_AMOUNT_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-drl-disable-zero-amount-check)** <br>b1: bit set: VISA: Disable the Zero Amount Check for this DRL entry (Visa default is on)  |
|  | **[VISA_DRL_ENABLE_STATUS_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-drl-enable-status-check)** <br>b2: bit set: VISA: Enable the Status Check for this DRL entry (Visa default is off)  |
|  | **[VISA_AMEX_DRL_DISABLE_FLOOR_LIMIT_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-amex-drl-disable-floor-limit-check)** <br>b6: bit set: AMEX and VISA: Disable the floor limit Check for this DRL entry (Default is on)  |
|  | **[VISA_AMEX_DRL_DISABLE_TRANS_LIMIT_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-amex-drl-disable-trans-limit-check)** <br>b7: bit set: AMEX and VISA: Disable the transaction limit Check for this DRL entry (Default is on)  |
|  | **[VISA_AMEX_DRL_DISABLE_CV_LIMIT_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-amex-drl-disable-cv-limit-check)** <br>b8: bit set: AMEX and VISA: Disable the cardholder verification limit Check for this DRL entry (Default is on)  |
|  | **[EMV_ADK_DRL_ENTRIES_VISA](group___d_r_l___m_a_x___e_n_t_r_i_e_s.md#define-emv-adk-drl-entries-visa)** <br>Maximal number of entries in [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01) supported for VFI-Reader configuration.  |
|  | **[EMV_ADK_DRL_ENTRIES_AMEX](group___d_r_l___m_a_x___e_n_t_r_i_e_s.md#define-emv-adk-drl-entries-amex)** <br>Maximal number of entries in [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01).  |
|  | **[EMV_ADK_PMSG_ENTRIES](group___p_p3___p_m_t___n_o___o_f___e_n_t_r_i_e_s.md#define-emv-adk-pmsg-entries)**  |
|  | **[EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS](group___t_a_g_s___n_o_n___e_m_v_c_o.md#define-emv-ctls-max-no-of-non-emvco-tags)** <br>Max. number of non-EMVCo-tags included in additional tags ([EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagstrm-dfab20) and [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagscrd-dfab21))  |
|  | **[EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS](group___t_a_g_s___n_o_n___e_m_v_c_o.md#define-emv-ctls-buffer-for-non-emvco-tags)** <br>Calculation rule: max. tag value size + 10 bytes/tag.  |
|  | **[EMV_CTLS_MAX_TAGLIST_SIZE](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-max-taglist-size)** <br>Maximum number of tags in mandatory tag list, used for [EMV_CTLS_TAGLIST_STRUCT::tags](struct_e_m_v___c_t_l_s___t_a_g_l_i_s_t___s_t_r_u_c_t.md#variable-tags).  |
|  | **[EMV_CTLS_MAX_APP_VERS](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-max-app-vers)** <br>Maximum number of application versions.  |
|  | **[CTLS_APPLY_CFG_APPS](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-apps)** <br>Apply data from [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md) if something changed since last configuration to the reader.  |
|  | **[CTLS_APPLY_CFG_TERM](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-term)** <br>Apply data from [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) if something changed since last configuration to the reader.  |
|  | **[CTLS_APPLY_CFG_CAPK](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-capk)** <br>Apply data from [EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md) if something changed since last configuration to the reader.  |
|  | **[CTLS_APPLY_CFG_ALL](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-all)** <br>Apply all configuration data if something changed since last configuration to the reader.  |
|  | **[CTLS_APPLY_CFG_FORCE](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-force)** <br>Apply all configuration data even in case nothing changed since last reader configuration.  |
|  | **[EMV_CTLS_KERN_EP](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ep)** <br>Entry Point, not applicable for application configuration.  |
|  | **[EMV_CTLS_KERN_PK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-pk)** <br>Visa Asia/Pacific.  |
|  | **[EMV_CTLS_KERN_MK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-mk)** <br>PayPass (MasterCard, maestro, ...)  |
|  | **[EMV_CTLS_KERN_VK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-vk)** <br>payWave (Visa, Visa electron, V-PAY, ...)  |
|  | **[EMV_CTLS_KERN_AK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ak)** <br>Expresspay (American Express)  |
|  | **[EMV_CTLS_KERN_JK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-jk)** <br>JCB.  |
|  | **[EMV_CTLS_KERN_DK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-dk)** <br>Discover.  |
|  | **[EMV_CTLS_KERN_CK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ck)** <br>China Union Pay (CUP, UnionPay International)  |
|  | **[EMV_CTLS_KERN_IK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ik)** <br>Interac (Canada)  |
|  | **[EMV_CTLS_KERN_EK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ek)** <br>EPAL (Australia)  |
|  | **[EMV_CTLS_KERN_RK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-rk)** <br>RuPay (India)  |
|  | **[EMV_CTLS_KERN_GK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-gk)** <br>gemalto PURE  |
|  | **[EMV_CTLS_KERN_PB](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-pb)** <br>PagoBANCOMAT (Italy)  |
|  | **[EMV_CTLS_KERN_WK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-wk)** <br>reserved for WISE  |
|  | **[EMV_CTLS_KERN_BK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-bk)** <br>reserved for CPACE  |
|  | **[EMV_CTLS_KERN_GC](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-gc)** <br>girocard (Germany)  |
|  | **[EMV_CTLS_KERN_SAMA](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sama)** <br>Saudi Arabian Monetary Authority, automatically mapped to internal kernel Id [EMV_CTLS_KERN_GK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-gk).  |
|  | **[EMV_CTLS_KERN_CPACE](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-cpace)** <br>European Card Payment Cooperation AV, automatically mapped to internal kernel Id [EMV_CTLS_KERN_BK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-bk).  |
|  | **[EMV_CTLS_KERN_WLA](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-wla)** <br>WLA kernel by IDEMIA, automatically mapped to internal kernel id [EMV_CTLS_KERN_WK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-wk).  |
|  | **[EMV_CTLS_KERN_DOM](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-dom)** <br>Domestic kernel.  |
|  | **[EMV_CTLS_KERN_MR](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-mr)** <br>MIR (Russia)  |
|  | **[EMV_CTLS_KERN_SK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sk)** <br>SIBS (Portugal)  |
|  | **[EMV_CTLS_KERN_SB](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sb)** <br>SIBS MB (MULTIBANCO, Portugal)  |
|  | **[KERNEL_ID_TO_BYTE_ARRAY](_e_m_v___c_t_l_s___interface_8h.md#define-kernel-id-to-byte-array)**(kernelId, byteArray)  |
|  | **[KERNEL_ID_TO_INT](_e_m_v___c_t_l_s___interface_8h.md#define-kernel-id-to-int)**(byteArray)  |
|  | **[EMV_CTLS_TEC_CHIP](group___d_e_f___t_e_c.md#define-emv-ctls-tec-chip)** <br>Chip Support.  |
|  | **[EMV_CTLS_TEC_MSR](group___d_e_f___t_e_c.md#define-emv-ctls-tec-msr)** <br>MSR Support.  |
|  | **[EMV_CTLS_MK_CFG_NOMSR](group___d_e_f___m_k___k_e_r_n_c_f_g.md#define-emv-ctls-mk-cfg-nomsr)** <br>No MSR Support.  |
|  | **[EMV_CTLS_MK_CFG_NOCHIP](group___d_e_f___m_k___k_e_r_n_c_f_g.md#define-emv-ctls-mk-cfg-nochip)** <br>No Chip Support.  |
|  | **[EMV_CTLS_MK_CFG_ONDEVCVM](group___d_e_f___m_k___k_e_r_n_c_f_g.md#define-emv-ctls-mk-cfg-ondevcvm)** <br>On Device Cardholder Verification Support.  |
|  | **[EMV_CTLS_MK_CFG_RRP](group___d_e_f___m_k___k_e_r_n_c_f_g.md#define-emv-ctls-mk-cfg-rrp)** <br>Relay Resistance Protocal supported.  |
|  | **[EMV_CTLS_RK_CFG_ONDEVCVM](group___d_e_f___r_k___k_e_r_n_c_f_g.md#define-emv-ctls-rk-cfg-ondevcvm)** <br>On Device Cardholder Verification Support.  |
|  | **[EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-dom-no-final-select-0)** <br>B1b1: (Vel: y VFI: n) Do not perform the final select if the AID belongs to a nonEMV/Domestic kernel.  |
|  | **[EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0)** <br>B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommended for CTLS txns because directory file is available)  |
|  | **[EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-cash-support-0)** <br>B1b3: (Vel: y VFI: y) Support of cash transactions.  |
|  | **[EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-cashback-support-0)** <br>B1b4: (Vel: y VFI: y) Support of cashback transactions.  |
|  | **[EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-omit-not-allowed-selection-0)** <br>B1b5: (Vel: y VFI: n) Omit not allowed candidates already during Entry Point selection process, e.g. above CTLS transaction limit. However: Warning: The EP defines Contactless transaction Limit >=, while MasterCard PP3 defines it as >. So do not set it for MasterCard AIDs.  |
|  | **[EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-force-entry-point-0)** <br>B1b6: (Vel: y VFI: n) Force Entry Point processing of the former EMVCo Entry Point specification. It has the effect like [EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-omit-not-allowed-selection-0) plus continue with START_B after L1 error at Combination Selection.  |
|  | **[EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-force-kernel-usage-0)** <br>B1b7: (Vel: y VFI: n) Force Kernel ID to be used, even if EP tag 9F2A is available.  |
|  | **[EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-list-of-aids-if-ppse-missing-only-0)** <br>B1b8: (Vel: y VFI: y) List of AIDs method only if PPSE directory does not exist in a card with the corresponding AID. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0) is set.  |
|  | **[EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-list-of-aids-if-ppse-failed-only-1)** <br>B2b1: (Vel: n VFI: y) List of AIDs method only if PPSE directory exists in the card but a response for PPSE request was badly formatted and PPSE stage failed. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0) is set.  |
|  | **[EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-card-read-txn-zero-amount-1)** <br>B2b2: (Vel: y VFI: y) If this bit is set then the reader will send an amount of zero to the card for card read transactions, otherwise the reader will send the normal amount.  |
|  | **[EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-skip-cardselection-apps-1)** <br>B2b3: (Vel: y VFI: n) If this bit is set this AID will be skipped if requiring explicit cardholder selection.  |
|  | **[EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-skip-txn-limit-check-1)** <br>B2b4: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped and the AID remains in the candidate list.  |
|  | **[EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-force-online-1)** <br>B2b5: (Vel: y VFI: n) Feature "Force online" supported (suspicious customer). This relates to Terminal Verification Result B4b4 "Merchant forced transaction online". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option [EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-wait-card-removal-end-1)** <br>B2b6: (Vel: y VFI: y) Wait for card removal at the end of an EMV transaction before returning to application (on TC, AAC and ARQC --> Card Read Complete)  |
|  | **[EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-start-removal-detection-1)** <br>B2b7: (Vel: y VFI: n) Start card removal procedure after kernel processing. This enables the service [EMV_CTLS_CardRemoval](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-cardremoval).    Only effective on deactivated [EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-wait-card-removal-end-1).  |
|  | **[EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-ep-extended-selection-1)** <br>B2b8: (Vel: y VFI: n) Enable the Entry Point extended selection (9F29 is used if present on ICC)  |
|  | **[EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-multiple-aid-kernel-id-2)** <br>B3b1: (Vel: y VFI: n) byte 3 of kernel id is used to store multiple configurations of same kernel Id-AID pair. If this flag is set the 3rd byte of the kernel id is set to zero in the Terminal Candidate List which is presented to the EntryPoint while the original value is used towards application interface.  |
|  | **[EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-enable-offline-cashback-2)**  |
|  | **[EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-reset-txn-type-2)**  |
|  | **[EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-cfg-appl-name-2)**  |
|  | **[EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-card-read-skip-txn-limit-check-2)** <br>B3b5: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped for card read transactions and the AID remains in the candidate list.  |
|  | **[EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-read-balance-before-gac-0)** <br>B1b1: (Vel: y VFI: y) Feature Read Balance before GenAC.  |
|  | **[EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-read-balance-after-gac-0)** <br>B1b2: (Vel: y VFI: y) Feature Read Balance after GenAC.  |
|  | **[EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-enable-data-exchange-0)** <br>B1b3: (Vel: y VFI: n) Enable DataExchange ([TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange))  |
|  | **[EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-transaction-type-17-for-cash-0)** <br>B1b4: (Vel: y VFI: n) Transaction type 17 for MasterCard cash transactions.  |
|  | **[EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-card-read-action-analysis-0)** <br>B1b5: (Vel: y VFI: n) On card read transaction do not force decline but let the kernel do TAC/IAC Action Analysis.  |
|  | **[EMV_CTLS_FLOW_VK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-status-check-enable-0)** <br>B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check)  |
|  | **[EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-zero-check-enable-skip-0)** <br>B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, Option 2: skip AID for zero amount txns. Can't be combined with Option 2 in B1b3.  |
|  | **[EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-zero-check-enable-online-0)** <br>B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, Option 1: going online for zero amount txns. Can't be combined with Option 1 in B1b2. This is the default option. This is the prioritary option if both options are set.  |
|  | **[EMV_CTLS_FLOW_VK_CHECK_INCONS_TRACK2_PAN_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-check-incons-track2-pan-0)** <br>B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT.  |
|  | **[EMV_CTLS_FLOW_VK_CASHBACK_NOT_FORCED_CVM_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-cashback-not-forced-cvm-0)** <br>B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.  |
|  | **[EMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-success-tone-on-decline)** <br>B1b6:  |
|  | **[EMV_CTLS_FLOW_VK_ALERT_TONE_ON_DECLINE](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-alert-tone-on-decline)**  |
|  | **[EMV_CTLS_FLOW_VK_GET_DATA_9F68_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-get-data-9f68-0)** <br>B1b8: (Vel: y VFI: n) Card Read Flow initiated with [EMV_ADK_TRAN_TYPE_READ_CARD_DATA](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-data) for retrieval of tag 9F68 (Card Additional Processes)  |
|  | **[EMV_CTLS_FLOW_VK_ENABLE_TAGS_AT_GPO](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-enable-tags-at-gpo)** <br>B2b1: (Vel: y VFI: n) Apply workaround that Visa kernel up to version 2.1.5 accepts certain tags at GPO step. These are 9F07 & 5F28 for instance.  |
|  | **[EMV_CTLS_FLOW_VK_ZERO_CHECK_DISABLE_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-zero-check-disable-1)** <br>B2b2: (Vel: y VFI: n) Disable Visa zero check.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_SUPPORT_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-support-1)** <br>B2b4: (Vel: y VFI n) VK2.2.3 only: Enable Offline Data Authentication for online transactions (ODO) according "Visa ODA for qVSDC Online Specification". Note: To enable this feature, additionally TTQ B1b1 (9F66, Offline Data Authentication for Online Authorizations supported) must be set.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_SDA_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-sda-1)** <br>B2b5: (Vel: y VFI n) VK2.2.3 only: Enable SDA for ODO.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_DDA_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-dda-1)** <br>B2b6: (Vel: y VFI n) VK2.2.3 only: Enable fDDA for ODO.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_SDA_ERR_ONLINE_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-sda-err-online-1)** <br>B2b7: (Vel: y VFI n) VK2.2.3 only: Outcome for ODO SDA error: 0 = Decline, 1 = Go online.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_DDA_ERR_ONLINE_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-dda-err-online-1)** <br>B2b8: (Vel: y VFI n) VK2.2.3 only: Outcome for ODO fDDA error: 0 = Decline, 1 = Go online.  |
|  | **[EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASH_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-omit-auc-int-cash-2)** <br>B3b1: (Vel: y VFI n) Omit AUC "International Cash" check.  |
|  | **[EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASHBACK_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-omit-auc-int-cashback-2)** <br>B3b2: (Vel: y VFI n) Omit AUC "International Cashback" check.  |
|  | **[EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASH_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-omit-auc-dom-cash-2)** <br>B3b3: (Vel: y VFI n) Omit AUC "Domestic Cash" check.  |
|  | **[EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASHBACK_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-omit-auc-dom-cashback-2)** <br>B3b4: (Vel: y VFI n) Omit AUC "Domestic Cashback" check.  |
|  | **[EMV_CTLS_FLOW_VK_ZERO_CASHBACK_AMOUNT_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-zero-cashback-amount-2)** <br>B3b5: (Vel: y VFI n) Set Cashback amount to zero for Cashback transactions. Workaround to allow Cashback transactions with Russian cards not supporting domestic Cashback.  |
|  | **[EMV_CTLS_FLOW_VK_CASHBACK_TRANS_TYPE_09_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-cashback-trans-type-09-2)** <br>B3b6: (Vel: y VFI n) Use Transaction Type 09 for cashback transactions. VCSP 2.2 mandates Transaction Type 00.  |
|  | **[EMV_CTLS_FLOW_VK_QUASI_CASH_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-quasi-cash-2)** <br>B3b7: (Vel: y VFI n) Convert transaction type from '01' to '11' indicating VISA Quasi Cash. If supported by L2 kernel AUC checks for cash will be applied.  |
|  | **[EMV_CTLS_FLOW_VK_DO_NOT_CFG_9F21_TIME_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-do-not-cfg-9f21-time-2)** <br>B3b8: (Vel: y VFI n) Set Transaction Time tag 9F21 to "000000".  |
|  | **[EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-cardread-genac1-arqc-0)** <br>B1b1: (Vel: y VFI: n) Card read transaction (e.g. refund): request ARQC in GENAC1, usually AAC is requested.  |
|  | **[EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-transaction-type-30-for-preauth-0)** <br>B1b2: (Vel: y VFI: n) Amex Pre-Authorization with transaction type 30.  |
|  | **[EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-status-check-enable-0)** <br>B1b3: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check)  |
|  | **[EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-zero-check-enable-online-0)** <br>B1b4: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns.  |
|  | **[EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-disable-9f6e-kernel-version-0)**  |
|  | **[EMV_CTLS_FLOW_JK_MULTIPLE_RANDOM_NUMBERS_0](group___d_e_f___f_l_o_w___j_k.md#define-emv-ctls-flow-jk-multiple-random-numbers-0)** <br>B1b1: (Vel: y VFI: ?) Generate new random number ('9F37') with each kernel activation, that is 2nd GAC.  |
|  | **[EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-cashback-not-forced-cvm-0)** <br>B1b1: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.  |
|  | **[EMV_CTLS_FLOW_DK_DATA_STORAGE_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-data-storage-0)** <br>B1b2: (Vel: y VFI: n) DPAS-2: Activate kernel feature Data Storage.  |
|  | **[EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-extended-loggging-0)** <br>B1b3: (Vel: y VFI: n) DPAS-2: Activate kernel feature Extended Logging.  |
|  | **[EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-torn-txn-recovery-0)** <br>B1b4: (Vel: y VFI: n) DPAS-2: Activate kernel feature Torn Transaction Recovery.  |
|  | **[EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-deferred-authorisation-0)** <br>B1b5: (Vel: y VFI: n) DPAS-2: Activate kernel feature Deferred Authorisation.  |
|  | **[EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-status-check-enable-0)** <br>B1b6: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check)  |
|  | **[EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-skip-0)** <br>B1b7: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-online-0).  |
|  | **[EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-online-0)** <br>B1b8: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-skip-0).  |
|  | **[EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0](group___d_e_f___f_l_o_w___i_k.md#define-emv-ctls-flow-ik-request-cda-with-arqc-0)** <br>B1b1: (Vel: y VFI: n) On first GAC do request CDA despite cryptogram type is ARQC (P1 = '90').  |
|  | **[EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0](group___d_e_f___f_l_o_w___i_k.md#define-emv-ctls-flow-ik-refund-flow-interac-0)** <br>B1b2: (Vel: y VFI: n) Do not force AppAction to decline and do not modify and TAC or limit. Note: Unless otherwise specified by regional needs, Interac flow should be enabled for Interac AIDs.  |
|  | **[EMV_CTLS_FLOW_EK_READ_CARD_REFUND_0](group___d_e_f___f_l_o_w___e_k.md#define-emv-ctls-flow-ek-read-card-refund-0)** <br>B1b1: (Vel: y VFI: n) Work-around: Use transaction type refund for card read transactions as the terminal ignores AppAction parameter.  |
|  | **[EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0](group___d_e_f___f_l_o_w___p_k.md#define-emv-ctls-flow-pk-check-incons-track2-pan-0)** <br>B1b1: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT.  |
|  | **[EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0](group___d_e_f___f_l_o_w___p_k.md#define-emv-ctls-flow-pk-cashback-not-forced-cvm-0)** <br>B1b2: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.  |
|  | **[EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-status-check-enable-0)** <br>B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check)  |
|  | **[EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-zero-check-enable-skip-0)** <br>B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount.  |
|  | **[EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-zero-check-enable-online-0)** <br>B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns.  |
|  | **[EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-check-incons-track2-pan-0)** <br>B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT.  |
|  | **[EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-cashback-not-forced-cvm-0)** <br>B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.  |
|  | **[EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-enable-fdda-version-0)** <br>B1b6: (Vel: y VFI: n) Per default the legacy fDDA version 0 is switched off. If you want to support it on top of the up date fDDA version 1. you can enable it by setting this bit.  |
|  | **[EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-disable-pin-below-cvm-0)** <br>B1b7: (Vel: y VFI: y) Do not ask for online PIN and Signature for transactions below CVM Limit when this was requested by card. This bit should be set for Credit / Quasi Credit AIDs according to Ref. "UPI QuickPass Implementation Guide for Acquirers v1.3.9": Terminals shall not ask for online PIN when all of below situations are met -QuickPass credit/Quasi credit cards are accepted, -Contactless transaction amount is below CVM limit of the terminal.  |
|  | **[EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-appli-authenticate-0)** <br>B1b1: (Vel: y VFI: y) Support for special transaction type "Application Authentication Transaction", see also [EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-authenticate).  |
|  | **[EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-getdata-0)** <br>B1b2: (Vel: y VFI: y) Support for special transaction type "Retrieve application data elements using GET DATA command", see also [EMV_CTLS_TRAN_TYPE_PURE_GETDATA](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-getdata), leads to invocation of [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data).  |
|  | **[EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-putdata-0)** <br>B1b3: (Vel: y VFI: y) Support for special transaction type "Update application data elements using PUT DATA command", see also [EMV_CTLS_TRAN_TYPE_PURE_PUTDATA](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-putdata), leads to invocation of [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data).  |
|  | **[EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-amount-multiply-100-0)** <br>B1b4: (Vel: y VFI: n) Vietnam VCCS special feature: Multiply amount by 100 before using it in GENAC1.  |
|  | **[EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-service-feature-enable-0)** <br>B1b1: (Vel: y VFI: y) Rupay Service Feature Enable/Disable.  |
|  | **[EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-torn-transaction-indicator-0)** <br>B1b2: (Vel: y VFI: y) Rupay Torn Transaction Indicator.  |
|  | **[EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-read-record-sfi1-qdda-0)** <br>B1b3: (Vel: n VFI: y) Perform READ RECORD of SFI 1 only when qDDA is disabled.  |
|  | **[EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-multiple-random-numbers-0)** <br>B1b4: (Vel: y VFI: n) Generate new random number ('9F37') with each kernel activation, that is 2nd GAC.  |
|  | **[EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-online-pin-supported-0)** <br>B1b5: (Vel: y VFI: n) Online PIN supported.  |
|  | **[EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-signature-supported-0)** <br>B1b6: (Vel: y VFI: n) Signature supported.  |
|  | **[EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-on-device-cvm-supported-0)** <br>B1b7: (Vel: y VFI: n) On-Device CVM (mobile CVM) supported.  |
|  | **[EMV_CTLS_FLOW_RK_CVM_REQUIRED_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-cvm-required-0)** <br>B1b8: (Vel: y VFI: n) CVM required, transaction will fail in case card decision is "no CVM)  |
|  | **[EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-issuer-update-supported-1)** <br>B2b1: (Vel: y VFI: n) Issuer script processing supported.  |
|  | **[EMV_CTLS_FLOW_WK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-status-check-enable-0)** <br>B1b1: Enable status check for one single unit of currency (one major currency unit, e.g. 1€ is going online for status check). If TTQ 'online capable reader' is not set, 'Contactless Application Not Allowed' indicator will be set.  |
|  | **[EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-zero-check-enable-skip-0)** <br>B1b2: Enable zero check for zero amount transaction, Option 2: Set 'Contactless Application Not Allowed' indicator.  |
|  | **[EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-zero-check-enable-online-0)** <br>B1b3: Enable zero check for zero amount transaction, Option 1: Set TTQ 'Online cryptogram required', only possible if TTQ 'online capable reader' is set, otherwise 'Contactless Application Not Allowed' indicator is set.  |
|  | **[EMV_CTLS_FLOW_WK_NO_CDCVM](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-no-cdcvm)** <br>B1b4: Do not set TTQ B3b7.  |
|  | **[EMV_CTLS_APPLIDATA_GC_TYPE](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-applidata-gc-type)**  |
|  | **[INPUT_CTLS_APL_MK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_MK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_MK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_MK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f40-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_MK_DF811E_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df811e-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_aboveLimit_DF811E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-abovelimit-df811e).  |
|  | **[INPUT_CTLS_APL_MK_DF812C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df812c-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_belowLimit_DF812C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-belowlimit-df812c).  |
|  | **[INPUT_CTLS_APL_MK_DF8118_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8118-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-abovelimit-df8118).  |
|  | **[INPUT_CTLS_APL_MK_DF8119_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8119-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-belowlimit-df8119).  |
|  | **[INPUT_CTLS_APL_MK_DF811F_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df811f-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-securitycapability-df811f).  |
|  | **[INPUT_CTLS_APL_MK_DF8117_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8117-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-carddatainputcapability-df8117).  |
|  | **[INPUT_CTLS_APL_MK_DF8123_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8123-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-floorlimit-df8123).  |
|  | **[INPUT_CTLS_APL_MK_DF8124_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8124-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitnoondevice-df8124).  |
|  | **[INPUT_CTLS_APL_MK_DF8125_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8125-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitondevice-df8125).  |
|  | **[INPUT_CTLS_APL_MK_DF8126_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8126-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126).  |
|  | **[INPUT_CTLS_APL_MK_9F09_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f09-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipVersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipversionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_MK_9F6D_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f6d-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-msrversionnumber-9f6d).  |
|  | **[INPUT_CTLS_APL_MK_DF811B_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df811b-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b).  |
|  | **[INPUT_CTLS_APL_MK_9F53_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f53-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionCategoryCode_9F53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactioncategorycode-9f53).  |
|  | **[INPUT_CTLS_APL_MK_DF8120_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8120-2)** <br>B3b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdefault-df8120).  |
|  | **[INPUT_CTLS_APL_MK_DF8121_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8121-2)** <br>B3b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdenial-df8121).  |
|  | **[INPUT_CTLS_APL_MK_DF8122_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8122-2)** <br>B3b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-taconline-df8122).  |
|  | **[INPUT_CTLS_APL_MK_DF810C_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df810c-2)** <br>B3b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelid-df810c).  |
|  | **[INPUT_CTLS_APL_MK_9F1D_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f1d-2)** <br>B3b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalRiskManagementData_9F1D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminalriskmanagementdata-9f1d).  |
|  | **[INPUT_CTLS_APL_MK_9F15_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f15-2)** <br>B3b8: [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_MK_9F16_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f16-3)** <br>B4b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16).  |
|  | **[INPUT_CTLS_APL_MK_9F4E_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f4e-3)** <br>B4b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_MK_9F01_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f01-3)** <br>B4b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01).  |
|  | **[INPUT_CTLS_APL_MK_DF8130_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8130-3)** <br>B4b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-holdtimevalue-df8130).  |
|  | **[INPUT_CTLS_APL_MK_DF812D_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df812d-3)** <br>B4b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d).  |
|  | **[INPUT_CTLS_APL_MK_DF811C_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df811c-3)** <br>B4b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionlifetime-df811c).  |
|  | **[INPUT_CTLS_APL_MK_DF811D_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df811d-3)** <br>B4b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionnumber-df811d).  |
|  | **[INPUT_CTLS_APL_MK_DF8131_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8131-3)** <br>B4b8: [EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-phonemessagetable-df8131).  |
|  | **[INPUT_CTLS_APL_MK_DFAB31_4](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-dfab31-4)** <br>B5b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_MK_DF8112_4](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8112-4)** <br>B5b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstoread-df8112).  |
|  | **[INPUT_CTLS_APL_MK_FF8102_4](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-ff8102-4)** <br>B5b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowritebeforegenac-ff8102).  |
|  | **[INPUT_CTLS_APL_MK_FF8103_4](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-ff8103-4)** <br>B5b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowriteaftergenac-ff8103).  |
|  | **[INPUT_CTLS_APL_MK_DF8110_4](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8110-4)** <br>B5b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-proceedtofirstwriteflag-df8110).  |
|  | **[INPUT_CTLS_APL_MK_9F5C_4](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f5c-4)** <br>B5b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-dsrequestedoperatorid-9f5c).  |
|  | **[INPUT_CTLS_APL_MK_DF8127_4](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8127-4)** <br>B5b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-detimeoutvalue-df8127).  |
|  | **[INPUT_CTLS_APL_MK_DF8132_5](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8132-5)** <br>B5b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-mingraceperiod-df8132).  |
|  | **[INPUT_CTLS_APL_MK_DF8133_5](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8133-5)** <br>B5b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-maxgraceperiod-df8133).  |
|  | **[INPUT_CTLS_APL_MK_DF8134_5](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8134-5)** <br>B5b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-capdu-df8134).  |
|  | **[INPUT_CTLS_APL_MK_DF8135_5](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8135-5)** <br>B5b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-rapdu-df8135).  |
|  | **[INPUT_CTLS_APL_MK_DF8136_5](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8136-5)** <br>B5b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-accuracythreshold-df8136).  |
|  | **[INPUT_CTLS_APL_MK_DF8137_5](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-df8137-5)** <br>B5b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchthreshold-df8137).  |
|  | **[INPUT_CTLS_APL_MK_9F7C_5](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.md#define-input-ctls-apl-mk-9f7c-5)** <br>B5b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcustomdata-9f7c).  |
|  | **[INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-no)** <br>Kernel shall wait for DET signal, specification says that no DEK shall be sent.  |
|  | **[INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-yes)** <br>Kernel shall proceed without sending DEK signal.  |
|  | **[INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-empty)** <br>Kernel shall send DEK signal before first write.  |
|  | **[INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-absent)** <br>Any other value makes the flag absent. Kernel shall act like [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-yes).  |
|  | **[INPUT_CTLS_APL_VK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_VK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_VK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_VK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_VK_9F66_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f66-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66).  |
|  | **[INPUT_CTLS_APL_VK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f33-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_VK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f40-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_VK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_VK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f09-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_VK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_VK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f15-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_VK_9F16_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f16-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16).  |
|  | **[INPUT_CTLS_APL_VK_9F4E_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-9f4e-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_VK_DFAB30_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-dfab30-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_VK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30).  |
|  | **[INPUT_CTLS_APL_VK_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-dfab31-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_VK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-dfab40-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_VK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-dfab41-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_VK_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-dfab42-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_VK_FFAB01_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___v_k.md#define-input-ctls-apl-vk-ffab01-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01).  |
|  | **[INPUT_CTLS_APL_AK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_AK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_AK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_AK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_AK_9F6D_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f6d-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexContactlessReaderCapabilities_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexcontactlessreadercapabilities-9f6d).  |
|  | **[INPUT_CTLS_APL_AK_9F6E_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f6e-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexterminaltransactioncapabilities-9f6e).  |
|  | **[INPUT_CTLS_APL_AK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f33-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_AK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f40-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_AK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_AK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f09-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_AK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_AK_9F15_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f15-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_AK_9F16_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f16-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16).  |
|  | **[INPUT_CTLS_APL_AK_9F4E_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f4e-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_AK_9F01_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-9f01-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_AK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01).  |
|  | **[INPUT_CTLS_APL_AK_DFAB30_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-dfab30-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_AK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30).  |
|  | **[INPUT_CTLS_APL_AK_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-dfab31-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_AK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-dfab40-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_AK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-dfab41-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_AK_DFAB42_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-dfab42-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_AK_DFAB43_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-dfab43-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_AK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43).  |
|  | **[INPUT_CTLS_APL_AK_DFAB44_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-dfab44-2)** <br>B3b3: [EMV_CTLS_APPLIDATA_AK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44).  |
|  | **[INPUT_CTLS_APL_AK_DFAB45_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-dfab45-2)** <br>B3b4: [EMV_CTLS_APPLIDATA_AK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-taconline-dfab45).  |
|  | **[INPUT_CTLS_APL_AK_FFAB01_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-ffab01-2)** <br>B3b5: [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01).  |
|  | **[INPUT_CTLS_APL_AK_DFAB52_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___a_k.md#define-input-ctls-apl-ak-dfab52-2)** <br>B3b6: [EMV_CTLS_APPLIDATA_AK_STRUCT::UnpredictableNumberRange_DFAB52](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-unpredictablenumberrange-dfab52).  |
|  | **[INPUT_CTLS_APL_JK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_JK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_JK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_JK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_JK_9F53_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-9f53-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalInterchangeProfile_9F53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-terminalinterchangeprofile-9f53).  |
|  | **[INPUT_CTLS_APL_JK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-9f15-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_JK_9F4E_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-9f4e-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_JK_9F01_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-9f01-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_JK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01).  |
|  | **[INPUT_CTLS_APL_JK_DFAB31_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab31-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_JK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_JK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab40-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_JK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab41-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_JK_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab42-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_JK_DFAB43_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab43-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_JK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43).  |
|  | **[INPUT_CTLS_APL_JK_DFAB44_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab44-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_JK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44).  |
|  | **[INPUT_CTLS_APL_JK_DFAB45_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab45-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_JK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-taconline-dfab45).  |
|  | **[INPUT_CTLS_APL_JK_DFAB46_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab46-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46).  |
|  | **[INPUT_CTLS_APL_JK_DFAB47_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab47-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47).  |
|  | **[INPUT_CTLS_APL_JK_DFAB48_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab48-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48).  |
|  | **[INPUT_CTLS_APL_JK_DFAB4B_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab4b-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_JK_STRUCT::CombinationOptions_DFAB4B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-combinationoptions-dfab4b).  |
|  | **[INPUT_CTLS_APL_JK_DFAB4C_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab4c-2)** <br>B3b3: [EMV_CTLS_APPLIDATA_JK_STRUCT::RemovalTimeout_DFAB4C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-removaltimeout-dfab4c).  |
|  | **[INPUT_CTLS_APL_JK_DFAB5B_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___j_k.md#define-input-ctls-apl-jk-dfab5b-2)** <br>B3b4: [EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessTransactionLimit_ODCVM_DFAB5B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-odcvm-dfab5b).  |
|  | **[INPUT_CTLS_APL_DK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_DK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_DK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_DK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_DK_9F66_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-9f66-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66).  |
|  | **[INPUT_CTLS_APL_DK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-9f33-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_DK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-9f40-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_DK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_DK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-9f09-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_DK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_DK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-9f15-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_DK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_DK_DFAB30_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-dfab30-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_DK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30).  |
|  | **[INPUT_CTLS_APL_DK_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-dfab31-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_DK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-dfab40-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_DK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-dfab41-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_DK_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-dfab42-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_DK_DFAB58_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-dfab58-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_DK_STRUCT::DataContainerReadIds_DFAB58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-datacontainerreadids-dfab58).  |
|  | **[INPUT_CTLS_APL_DK_DFAB59_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_k.md#define-input-ctls-apl-dk-dfab59-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_DK_STRUCT::DataContainerReadRanges_DFAB59](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-datacontainerreadranges-dfab59).  |
|  | **[INPUT_CTLS_APL_IK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_IK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_IK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_IK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_IK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f33-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_IK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f40-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_IK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_IK_9F5F_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f5f-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessFloorLimit_9F5F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-9f5f).  |
|  | **[INPUT_CTLS_APL_IK_9F58_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f58-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantTypeIndicator_9F58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchanttypeindicator-9f58).  |
|  | **[INPUT_CTLS_APL_IK_9F59_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f59-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionInformation_9F59](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactioninformation-9f59).  |
|  | **[INPUT_CTLS_APL_IK_9F5A_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f5a-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionType_9F5A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactiontype-9f5a).  |
|  | **[INPUT_CTLS_APL_IK_9F5E_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f5e-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalOptionStatus_9F5E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaloptionstatus-9f5e).  |
|  | **[INPUT_CTLS_APL_IK_9F5D_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f5d-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_IK_STRUCT::ReceiptRequiredLimit_9F5D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-receiptrequiredlimit-9f5d).  |
|  | **[INPUT_CTLS_APL_IK_DF6D_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-df6d-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_IK_STRUCT::TryAgainLimit_DF6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tryagainlimit-df6d).  |
|  | **[INPUT_CTLS_APL_IK_9F09_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f09-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_IK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_IK_9F15_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f15-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_IK_9F16_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f16-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16).  |
|  | **[INPUT_CTLS_APL_IK_9F4E_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f4e-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_IK_9F01_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-9f01-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_IK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01).  |
|  | **[INPUT_CTLS_APL_IK_DFAB31_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-dfab31-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_IK_DFAB41_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-dfab41-2)** <br>B3b3: [EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_IK_DFAB42_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-dfab42-2)** <br>B3b4: [EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_IK_DFAB43_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-dfab43-2)** <br>B3b5: [EMV_CTLS_APPLIDATA_IK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43).  |
|  | **[INPUT_CTLS_APL_IK_DFAB44_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-dfab44-2)** <br>B3b6: [EMV_CTLS_APPLIDATA_IK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44).  |
|  | **[INPUT_CTLS_APL_IK_DFAB45_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-dfab45-2)** <br>B3b7: [EMV_CTLS_APPLIDATA_IK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-taconline-dfab45).  |
|  | **[INPUT_CTLS_APL_IK_DFAB46_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-dfab46-2)** <br>B3b8: [EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46).  |
|  | **[INPUT_CTLS_APL_IK_DFAB47_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-dfab47-3)** <br>B4b1: [EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47).  |
|  | **[INPUT_CTLS_APL_IK_DFAB48_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___i_k.md#define-input-ctls-apl-ik-dfab48-3)** <br>B4b2: [EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48).  |
|  | **[INPUT_CTLS_APL_EK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_EK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_EK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_EK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_EK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f33-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_EK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f40-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_EK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_EK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f09-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_EK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_EK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f15-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_EK_9F16_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f16-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16).  |
|  | **[INPUT_CTLS_APL_EK_9F4E_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f4e-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_EK_9F01_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f01-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_EK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01).  |
|  | **[INPUT_CTLS_APL_EK_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-dfab31-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_EK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_EK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-dfab40-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_EK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_EK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-dfab41-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_EK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_EK_DFAB43_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-dfab43-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_EK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43).  |
|  | **[INPUT_CTLS_APL_EK_DFAB44_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-dfab44-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_EK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44).  |
|  | **[INPUT_CTLS_APL_EK_DFAB45_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-dfab45-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_EK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-taconline-dfab45).  |
|  | **[INPUT_CTLS_APL_EK_DFAB4A_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-dfab4a-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_EK_STRUCT::CtlsTransactionLimitCash_DFAB4A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-ctlstransactionlimitcash-dfab4a).  |
|  | **[INPUT_CTLS_APL_EK_9F66_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.md#define-input-ctls-apl-ek-9f66-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66).  |
|  | **[INPUT_CTLS_APL_PK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md#define-input-ctls-apl-pk-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_PK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_PK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md#define-input-ctls-apl-pk-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_PK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_PK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md#define-input-ctls-apl-pk-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_PK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_PK_DF04_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md#define-input-ctls-apl-pk-df04-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-cvmrequirements-df04).  |
|  | **[INPUT_CTLS_APL_PK_DFAB31_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md#define-input-ctls-apl-pk-dfab31-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_PK_DF02_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md#define-input-ctls-apl-pk-df02-0)** <br>B2b6: [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-df02).  |
|  | **[INPUT_CTLS_APL_PK_DFAB41_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md#define-input-ctls-apl-pk-dfab41-0)** <br>B2b7: [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_PK_DF01_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_k.md#define-input-ctls-apl-pk-df01-0)** <br>B2b8: [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-df01).  |
|  | **[INPUT_CTLS_APL_CK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_CK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_CK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_CK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_CK_9F66_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f66-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66).  |
|  | **[INPUT_CTLS_APL_CK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f33-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_CK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f40-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_CK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_CK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f09-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_CK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_CK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f15-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_CK_9F16_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f16-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16).  |
|  | **[INPUT_CTLS_APL_CK_9F4E_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-9f4e-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_CK_DFAB30_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-dfab30-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_CK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30).  |
|  | **[INPUT_CTLS_APL_CK_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-dfab31-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_CK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-dfab40-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_CK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-dfab41-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_CK_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___c_k.md#define-input-ctls-apl-ck-dfab42-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_GK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_GK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_GK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_GK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_GK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f33-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_GK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f40-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_GK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_GK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f09-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_GK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_GK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f15-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_GK_9F16_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f16-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16).  |
|  | **[INPUT_CTLS_APL_GK_9F4E_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f4e-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_GK_9F01_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f01-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_GK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01).  |
|  | **[INPUT_CTLS_APL_GK_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab31-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_GK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab40-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_GK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab41-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_GK_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab42-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_GK_DFAB43_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab43-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_GK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43).  |
|  | **[INPUT_CTLS_APL_GK_DFAB44_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab44-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_GK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44).  |
|  | **[INPUT_CTLS_APL_GK_DFAB45_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab45-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_GK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-taconline-dfab45).  |
|  | **[INPUT_CTLS_APL_GK_DFAB4F_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab4f-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_GK_STRUCT::CtlsAppKernelCap_DFAB4F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-ctlsappkernelcap-dfab4f).  |
|  | **[INPUT_CTLS_APL_GK_DFAB50_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab50-2)** <br>B3b3: [EMV_CTLS_APPLIDATA_GK_STRUCT::MTOL_DFAB50](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-mtol-dfab50).  |
|  | **[INPUT_CTLS_APL_GK_DFAB51_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab51-2)** <br>B3b4: [EMV_CTLS_APPLIDATA_GK_STRUCT::DefaultDDOL_DFAB51](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-defaultddol-dfab51).  |
|  | **[INPUT_CTLS_APL_GK_9F76_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-9f76-2)** <br>B3b5: [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalTransactionData_9F76](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminaltransactiondata-9f76).  |
|  | **[INPUT_CTLS_APL_GK_DFAB5A_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_k.md#define-input-ctls-apl-gk-dfab5a-2)** <br>B3b6: [EMV_CTLS_APPLIDATA_GK_STRUCT::AppliAuthTransType_DFAB5A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-appliauthtranstype-dfab5a).  |
|  | **[INPUT_CTLS_APL_RK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_RK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_RK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_RK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_RK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-9f33-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_RK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-9f40-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_RK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-9f09-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_RK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_RK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-9f15-0)** <br>B127: [EMV_CTLS_APPLIDATA_RK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_RK_DFAB31_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab31-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_RK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab40-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_RK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab41-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_RK_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab42-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_RK_DFAB43_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab43-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_RK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43).  |
|  | **[INPUT_CTLS_APL_RK_DFAB44_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab44-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_RK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44).  |
|  | **[INPUT_CTLS_APL_RK_DFAB45_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab45-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_RK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-taconline-dfab45).  |
|  | **[INPUT_CTLS_APL_RK_DFAB46_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab46-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46).  |
|  | **[INPUT_CTLS_APL_RK_DFAB47_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab47-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47).  |
|  | **[INPUT_CTLS_APL_RK_DFAB48_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab48-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48).  |
|  | **[INPUT_CTLS_APL_RK_DFAB4D_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab4d-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_RK_STRUCT::CallbackTimeout_DFAB4D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-callbacktimeout-dfab4d).  |
|  | **[INPUT_CTLS_APL_RK_DFAB4E_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-dfab4e-2)** <br>B3b3: [EMV_CTLS_APPLIDATA_RK_STRUCT::TornTransactionInterval_DFAB4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-torntransactioninterval-dfab4e).  |
|  | **[INPUT_CTLS_APL_RK_DF3A_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___r_k.md#define-input-ctls-apl-rk-df3a-2)** <br>B3b4: [EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilitiesExt_DF3A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilitiesext-df3a).  |
|  | **[INPUT_CTLS_APL_SK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_SK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_SK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_SK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_SK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-9f33-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_SK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-9f40-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_SK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_SK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-9f09-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_SK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_SK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-9f15-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_SK_9F4E_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-9f4e-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_SK_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-dfab31-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_SK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_SK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-dfab40-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_SK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-dfab41-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_SK_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-dfab42-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_SK_DFAB43_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-dfab43-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_SK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43).  |
|  | **[INPUT_CTLS_APL_SK_DFAB44_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-dfab44-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_SK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44).  |
|  | **[INPUT_CTLS_APL_SK_DFAB45_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-dfab45-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_SK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-taconline-dfab45).  |
|  | **[INPUT_CTLS_APL_SK_DFAB53_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-dfab53-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_SK_STRUCT::TermCap_aboveCVMLimit_DFAB53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-termcap-abovecvmlimit-dfab53).  |
|  | **[INPUT_CTLS_APL_SK_DFAB54_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___s_k.md#define-input-ctls-apl-sk-dfab54-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_SK_STRUCT::TermCap_belowCVMLimit_DFAB54](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-termcap-belowcvmlimit-dfab54).  |
|  | **[INPUT_CTLS_APL_PB_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_PB_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_PB_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_PB_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_PB_9F66_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f66-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66).  |
|  | **[INPUT_CTLS_APL_PB_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f09-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_PB_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_PB_9F4E_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f4e-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_PB_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_PB_DFAB31_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab31-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_PB_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_PB_DFAB40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab40-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_PB_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab41-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_PB_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab42-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_PB_DFAB43_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab43-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_PB_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-tacdefault-dfab43).  |
|  | **[INPUT_CTLS_APL_PB_DFAB44_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab44-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_PB_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-tacdenial-dfab44).  |
|  | **[INPUT_CTLS_APL_PB_DFAB45_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab45-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_PB_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-taconline-dfab45).  |
|  | **[INPUT_CTLS_APL_PB_DFAB46_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab46-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46).  |
|  | **[INPUT_CTLS_APL_PB_DFAB47_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab47-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47).  |
|  | **[INPUT_CTLS_APL_PB_DFAB48_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab48-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48).  |
|  | **[INPUT_CTLS_APL_PB_DFAB55_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab55-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_PB_STRUCT::TACSwitchInterface_DFAB55](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-tacswitchinterface-dfab55).  |
|  | **[INPUT_CTLS_APL_PB_DFAB56_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab56-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_PB_STRUCT::IACSwitchInterface_DFAB56](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-iacswitchinterface-dfab56).  |
|  | **[INPUT_CTLS_APL_WK_9F01_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f01-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_WK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01).  |
|  | **[INPUT_CTLS_APL_WK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f1c-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_WK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_WK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f1a-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_WK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_WK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f35-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_WK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_WK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f33-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_WK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_WK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f40-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_WK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_WK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f09-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_WK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_WK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f15-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_WK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_WK_9F16_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f16-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_WK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16).  |
|  | **[INPUT_CTLS_APL_WK_9F4E_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-9f4e-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_WK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_WK_DFAB30_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-dfab30-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_WK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30).  |
|  | **[INPUT_CTLS_APL_WK_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-dfab31-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_WK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_WK_DFAB40_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-dfab40-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40).  |
|  | **[INPUT_CTLS_APL_WK_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-dfab41-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[INPUT_CTLS_APL_WK_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.md#define-input-ctls-apl-wk-dfab42-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42).  |
|  | **[INPUT_CTLS_APL_BK_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f1c-0)** <br>B1b1: EMV_CTLS_APPLIDATA_BR_STRUCT::TermIdent_9F1C.  |
|  | **[INPUT_CTLS_APL_BK_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_BK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_BK_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_BK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_BK_9F33_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f33-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_BK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33).  |
|  | **[INPUT_CTLS_APL_BK_9F40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f40-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_BK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40).  |
|  | **[INPUT_CTLS_APL_BK_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f09-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_BK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_BK_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f15-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_BK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_BK_9F16_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f16-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_BK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16).  |
|  | **[INPUT_CTLS_APL_BK_9F4E_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f4e-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_BK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_BK_9F01_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-9f01-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_BK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01).  |
|  | **[INPUT_CTLS_APL_BK_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-dfab31-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_BK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_BK_DF8118_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8118-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_BK_STRUCT::CVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-cvm-abovelimit-df8118).  |
|  | **[INPUT_CTLS_APL_BK_DF8119_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8119-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_BK_STRUCT::CVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-cvm-belowlimit-df8119).  |
|  | **[INPUT_CTLS_APL_BK_DF811B_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df811b-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_BK_STRUCT::KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b).  |
|  | **[INPUT_CTLS_APL_BK_DF8120_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8120-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_BK_STRUCT::TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-tacdefault-df8120).  |
|  | **[INPUT_CTLS_APL_BK_DF8121_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8121-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_BK_STRUCT::TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-tacdenial-df8121).  |
|  | **[INPUT_CTLS_APL_BK_DF8122_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8122-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_BK_STRUCT::TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-taconline-df8122).  |
|  | **[INPUT_CTLS_APL_BK_DF8123_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8123-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_BK_STRUCT::FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-floorlimit-df8123).  |
|  | **[INPUT_CTLS_APL_BK_DF8124_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8124-2)** <br>B3b3: [EMV_CTLS_APPLIDATA_BK_STRUCT::TransactionLimitNoCDCVM_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-transactionlimitnocdcvm-df8124).  |
|  | **[INPUT_CTLS_APL_BK_DF8125_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8125-2)** <br>B3b4: [EMV_CTLS_APPLIDATA_BK_STRUCT::TransactionLimitCDCVM_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-transactionlimitcdcvm-df8125).  |
|  | **[INPUT_CTLS_APL_BK_DF8126_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8126-2)** <br>B3b5: [EMV_CTLS_APPLIDATA_BK_STRUCT::CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126).  |
|  | **[INPUT_CTLS_APL_BK_DF812D_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df812d-2)** <br>B3b6: [EMV_CTLS_APPLIDATA_BK_STRUCT::MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d).  |
|  | **[INPUT_CTLS_APL_BK_DF8131_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8131-2)** <br>B3b7: [EMV_CTLS_APPLIDATA_BK_STRUCT::CHV_CS_MessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-chv-cs-messagetable-df8131).  |
|  | **[INPUT_CTLS_APL_BK_DF8132_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8132-2)** <br>B3b8: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TimeToleranceMin_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-timetolerancemin-df8132).  |
|  | **[INPUT_CTLS_APL_BK_DF8133_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8133-3)** <br>B4b1: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TimeToleranceMax_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-timetolerancemax-df8133).  |
|  | **[INPUT_CTLS_APL_BK_DF8134_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8134-3)** <br>B4b2: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TransmissionTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-transmissiontime-capdu-df8134).  |
|  | **[INPUT_CTLS_APL_BK_DF8135_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8135-3)** <br>B4b3: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TransmissionTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-transmissiontime-rapdu-df8135).  |
|  | **[INPUT_CTLS_APL_BK_DF8136_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8136-3)** <br>B4b4: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_MinTimeDifferenceLimit_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-mintimedifferencelimit-df8136).  |
|  | **[INPUT_CTLS_APL_BK_DF8137_3](group___d_e_f___i_n_p_u_t___a_p_p_l_i___b_k.md#define-input-ctls-apl-bk-df8137-3)** <br>B4b5: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TransTimeMismatchLimit_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchlimit-df8137).  |
|  | **[INPUT_CTLS_APL_MR_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-9f1c-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_MR_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-termident-9f1c).  |
|  | **[INPUT_CTLS_APL_MR_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-9f1a-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a).  |
|  | **[INPUT_CTLS_APL_MR_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-9f35-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminaltype-9f35).  |
|  | **[INPUT_CTLS_APL_MR_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-9f09-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_MR_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-versionnumber-9f09).  |
|  | **[INPUT_CTLS_APL_MR_9F15_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-9f15-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15).  |
|  | **[INPUT_CTLS_APL_MR_9F4E_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-9f4e-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e).  |
|  | **[INPUT_CTLS_APL_MR_9F01_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-9f01-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_MR_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-acquireridentifier-9f01).  |
|  | **[INPUT_CTLS_APL_MR_DF51_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-df51-0)** <br>B1b8: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalFloorLimit_DF51](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalfloorlimit-df51).  |
|  | **[INPUT_CTLS_APL_MR_DF52_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-df52-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalNoCVMLimit_DF52](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalnocvmlimit-df52).  |
|  | **[INPUT_CTLS_APL_MR_DF53_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-df53-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitNonCDCVM_DF53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitnoncdcvm-df53).  |
|  | **[INPUT_CTLS_APL_MR_DF54_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-df54-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitCDCVM_DF54](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitcdcvm-df54).  |
|  | **[INPUT_CTLS_APL_MR_DF55_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-df55-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalTPMCapabilities_DF55](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminaltpmcapabilities-df55).  |
|  | **[INPUT_CTLS_APL_MR_DF56_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-df56-1)** <br>B2b5: [EMV_CTLS_APPLIDATA_MR_STRUCT::TransactionRecoveryLimit_DF56](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-transactionrecoverylimit-df56).  |
|  | **[INPUT_CTLS_APL_MR_DFAB31_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-dfab31-1)** <br>B2b6: [EMV_CTLS_APPLIDATA_MR_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_MR_DFAB43_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-dfab43-1)** <br>B2b7: [EMV_CTLS_APPLIDATA_MR_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-tacdefault-dfab43).  |
|  | **[INPUT_CTLS_APL_MR_DFAB44_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-dfab44-1)** <br>B2b8: [EMV_CTLS_APPLIDATA_MR_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-tacdenial-dfab44).  |
|  | **[INPUT_CTLS_APL_MR_DFAB45_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-dfab45-2)** <br>B3b1: [EMV_CTLS_APPLIDATA_MR_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-taconline-dfab45).  |
|  | **[INPUT_CTLS_APL_MR_DFAB57_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.md#define-input-ctls-apl-mr-dfab57-2)** <br>B3b2: [EMV_CTLS_APPLIDATA_MR_STRUCT::DataExchangeTagList_DFAB57](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-dataexchangetaglist-dfab57).  |
|  | **[INPUT_CTLS_APL_DOM_DFAB31_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_o_m.md#define-input-ctls-apl-dom-dfab31-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_DOM_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-appflowcap-dfab31).  |
|  | **[INPUT_CTLS_APL_DOM_DFAB41_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___d_o_m.md#define-input-ctls-apl-dom-dfab41-0)** <br>B2b7: [EMV_CTLS_APPLIDATA_DOM_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41).  |
|  | **[EMV_CTLS_FLOW_DOM_EXPLICIT_SELECT](group___d_e_f___f_l_o_w___d_o_m.md#define-emv-ctls-flow-dom-explicit-select)** <br>B1b1: Try explicit select in case of non-EMV mode or PSE failed.  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB02_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab02-0)** <br>B1b1: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ASI_DFAB02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-asi-dfab02).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB03_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab03-0)** <br>B1b2: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-appflowcap-dfab03).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB04_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab04-0)** <br>B1b3: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::PriorityApplications_DFAB04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-priorityapplications-dfab04).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB05_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab05-0)** <br>B1b4: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::SpecialTRXConfig_DFAB05](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-specialtrxconfig-dfab05).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB06_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab06-0)** <br>B1b5: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ChksumEntryPoint_DFAB06](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-chksumentrypoint-dfab06).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB07_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab07-0)** <br>B1b6: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ChksumKernel_DFAB07](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-chksumkernel-dfab07).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB08_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab08-0)** <br>B1b7: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::RetapFieldOff_DFAB08](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-retapfieldoff-dfab08).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB20_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab20-1)** <br>B2b1: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagstrm-dfab20).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB21_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab21-1)** <br>B2b2: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagscrd-dfab21).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB22_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab22-1)** <br>B2b3: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::DefaultApplicationName_DFAB22](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-defaultapplicationname-dfab22).  |
|  | **[INPUT_CTLS_APL_GLOB_DFAB23_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab23-1)** <br>B2b4: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::InternalKernelId_DFAB23](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-internalkernelid-dfab23).  |
|  | **[CLTRXOP_SUPPRESS_ERRMSGBEEP](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-suppress-errmsgbeep)** <br>B1b1: Suppress beep on error message display.  |
|  | **[CLTRXOP_REPEAT_L1](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-repeat-l1)** <br>B1b2: TRX repeated because of L1 error (same txn is started a 2nd time)  |
|  | **[CLTRXOP_NO_DOMESTIC_KERNEL](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-no-domestic-kernel)** <br>B1b3: skip local kernel processing for this transaction even if configured.  |
|  | **[CLTRXOP_NO_GLOBAL](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-no-global)** <br>B1b4: skip global EMV processing for this transaction even if configured.  |
|  | **[CLTRXOP_PP_TORNTXN_RESET](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-pp-torntxn-reset)** <br>B1b5: reset the torn transaction store if a PayPass card is presented.  |
|  | **[CLTRXOP_AK_DELAYED_AUTH](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-ak-delayed-auth)** <br>B1b6: Amex delayed autorization (Amex 3.1) for environments where no real-time online transaction is possible. Note: For Amex 4 kernel this is controlled by Enhanced Contactless Reader Capabilities B4b7.  |
|  | **[CLTRXOP_REMOVEALL_BUT_EXCLUDED](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-removeall-but-excluded)** <br>B1b8: Remove all candidates from terminal list except those which are contained in [ExcludeAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids) or [ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos) list. This allows transactions restricted to certain AIDs, Kernel IDs or Combinations without terminal reconfiguration.  |
|  | **[CLTRXOP_CANDLIST_CALLBACK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-candlist-callback)** <br>B2b1: Mutual combo candidate list of terminal and card reported for selection and reordering, see [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand).  |
|  | **[CLTRXOP_APPSELECTED_CALLBACK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-appselected-callback)** <br>B2b2: callback after the final select for choosing the kernel to be used, only available for velocity kernel, see [TAG_BF0C_CTLS_CBK_APP_SELECTED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0c-ctls-cbk-app-selected).  |
|  | **[CLTRXOP_NO_BUL12](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-no-bul12)** <br>B2b3: SU Bulletin 12 NOT supported (Velocity Entrypoint _NOT_ EMVEP_CFG_BUL12). Obsolete since EP2.0.1.  |
|  | **[CLTRXOP_NO_LONGEST_AID_MATCH](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-no-longest-aid-match)** <br>B2b5: Do not perform the longest AID match (technical nonsense but needed for a few domestic certifications)  |
|  | **[CLTRXOP_SPURIOUS_CARD_DETECT](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-spurious-card-detect)** <br>B2b6: Use option [EMV_CTLS_SPURIOUS_DETECT](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-spurious-detect) for card detection.  |
|  | **[CLTRXOP_NO_PAN_RETRIEVE_DEF](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-no-pan-retrieve-def)** <br>   For all other schemes EMV ADK does anyhow use configured values for PAN retrieval transactions.    Not yet supported for VFI reader.  |
|  | **[CLTRXOP_RND_CALLBACK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-rnd-callback)** <br>B2b8: Use own random number generator instead of OS one (not recommended but for debug purposes useful), only supported for velocity kernel, see [TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd).  |
|  | **[CLTRXOP_OMIT_CHECKSUM_CHECK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-omit-checksum-check)** <br>B3b1: VFI-Reader: Dont calculate checksums of configuration files    Only effective on [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
|  | **[CLTRXOP_STOP_ON_CHKSUM_DIFF](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-stop-on-chksum-diff)** <br>B3b2: VFI-Reader: abort transaction when checksums of configuration files changed    Only effective on [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
|  | **[CLTRXOP_NO_AMOUNT_PRECHECK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-no-amount-precheck)** <br>--> This results in terminate or fallabck later on  |
|  | **[CLTRXOP_L1_ERROR_CALLBACK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-l1-error-callback)** <br>"Use 1 card only" ([EMV_ADK_TXT_2_CARDS_IN_FIELD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-2-cards-in-field)) in case 2 cards are detected    Precondition: UI scheme "default" is set, use [INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-ui-scheme-default) |
|  | **[CLTRXOP_SETUP_WAIT_FOR_ERROR](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-setup-wait-for-error)** <br>this is already detected in [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) rather than in [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline).  |
|  | **[CLTRXOP_WEEK_PRIORITY_APPS](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-week-priority-apps)** <br>B3b7: Ignore priority applications that are not part of the terminal candidate list.  |
|  | **[CLTRXOP_PRELOAD_TRANSACTION](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-preload-transaction)** <br>B3b8: Preload feature: perform preliminary process and prepare database for payment without starting the transaction. Required for VAS processing using NFC ADK on VFI reader.  |
|  | **[CLTRXOP_KEEP_MULTIPLE_KERNEL](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-keep-multiple-kernel)** <br>B4b1: After Final Select keep all AID-kernel combinations for the selected AID.  |
|  | **[CLTRXOP_TIP_AMOUNT_ZERO](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-tip-amount-zero)** <br>B4b2: Card holder confirmed zero amount within tip amount input dialog. In case of TIP setting DF22 position 4 = 3 the the transaction shall not be made suitable for a tip follow-up.  |
|  | **[CLTRXOP_SILENT_ON_EMPTY_LIST](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-silent-on-empty-list)** <br>B4b3: In case of empty candidate list (return code [EMV_ADK_TXN_CTLS_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-empty-list)) suppress error tone and LED processing (LEDs off after 750ms).  |
|  | **[CLTRXOP_CVM_REQUIRED](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-cvm-required)** <br>B4b4: Force CVM for this transaction due to a special business use case. Basically implemented by internally setting the CVM required limits to zero.  |
|  | **[CLTRXOP_LONG_TAP_TIMER](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-long-tap-timer)**  |
|  | **[CLTRXOP_SEND_POI_INFORMATION](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-send-poi-information)** <br>B4b6: Activate Entry Point's Send POI Information feature.  |
|  | **[CLTRXOP_BEEP_BY_BUZZER](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-beep-by-buzzer)** <br>B4b7: Use buzzer instead of sound library on some platforms (e.g. Android and VOS-3). This is for lower latency with the drawback that the volume is fixed.  |
|  | **[CLTRXOP_BEEP_OS_VOLUME](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-beep-os-volume)** <br>B4b7: On Android system the OS setting controls the volume. The OS volume is respected down to certain still hearable minimal value to avoid missing beep. For switching off (e.g. automated test run) set [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume) to zero.  |
|  | **[EMV_CTLS_TRAN_TYPE_PURE_GETDATA](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-getdata)** <br>Gemalto/Pure: Retrieval of application proprietary data elements using GET DATA command, needs to be activated by means of [EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-getdata-0).  |
|  | **[EMV_CTLS_TRAN_TYPE_PURE_PUTDATA](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-putdata)** <br>Gemalto/Pure: Update of application data proprietary elements using PUT DATA command, needs to be activated by means of [EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-putdata-0).  |
|  | **[EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-authenticate)**  |
|  | **[CLTRX_PASSTHROUGH_OFF](group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.md#define-cltrx-passthrough-off)** <br>no passthrough mode (default)  |
|  | **[CLTRX_PASSTHROUGH_NONISO](group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.md#define-cltrx-passthrough-noniso)** <br>goto passtrough mode for non ISO 14443 cards (e.g. Mifare)  |
|  | **[CLTRX_PASSTHROUGH_ALL](group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.md#define-cltrx-passthrough-all)** <br>goto passtrough mode for all cards  |
|  | **[CLTRX_CARDTYPE_ISO](group___c_l_t_r_x___c_a_r_d_t_y_p_e.md#define-cltrx-cardtype-iso)** <br>ISO 14443A,B.  |
|  | **[CLTRX_CARDTYPE_MIFARE](group___c_l_t_r_x___c_a_r_d_t_y_p_e.md#define-cltrx-cardtype-mifare)** <br>Mifare.  |
|  | **[CLTRX_CARDTYPE_OTHER](group___c_l_t_r_x___c_a_r_d_t_y_p_e.md#define-cltrx-cardtype-other)** <br>other contactless card  |
|  | **[INPUT_CTLS_SEL_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-amount)** <br>B1b1: [EMV_CTLS_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount).  |
|  | **[INPUT_CTLS_SEL_AMOUNT_CURRENCY](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-amount-currency)** <br>B1b2: [EMV_CTLS_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans).  |
|  | **[INPUT_CTLS_SEL_CUREXPONENT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-curexponent)** <br>B1b3: [EMV_CTLS_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans).  |
|  | **[INPUT_CTLS_SEL_DATE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-date)** <br>B1b4: [EMV_CTLS_PAYMENT_STRUCT::Date](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date).  |
|  | **[INPUT_CTLS_SEL_TIME](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-time)** <br>B1b5: [EMV_CTLS_PAYMENT_STRUCT::Time](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time).  |
|  | **[INPUT_CTLS_SEL_TTYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-ttype)** <br>B1b6: [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype).  |
|  | **[INPUT_CTLS_SEL_EXCLUDE_AID](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-exclude-aid)** <br>B1b7: [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids).  |
|  | **[INPUT_CTLS_SEL_FORCE_ONLINE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-force-online)** <br>B1b8: [EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[INPUT_CTLS_SEL_ONLINE_SWITCH](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-online-switch)** <br>B2b1: [EMV_CTLS_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch).  |
|  | **[INPUT_CTLS_SEL_TXN_COUNTER](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-txn-counter)** <br>B2b2: [EMV_CTLS_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount).  |
|  | **[INPUT_CTLS_SEL_CB_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-cb-amount)** <br>B2b3: [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount).  |
|  | **[INPUT_CTLS_SEL_ACCOUNT_TYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-account-type)** <br>B2b4: [EMV_CTLS_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype).  |
|  | **[INPUT_CTLS_SEL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-txn-options)** <br>B2b5: [EMV_CTLS_START_STRUCT::TxnOptions](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_CTLS_SEL_POLL_TIMEOUT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-poll-timeout)** <br>B2b6: [EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout).  |
|  | **[INPUT_CTLS_SEL_PASSTHROUGH](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-passthrough)** <br>B2b7: [EMV_CTLS_START_STRUCT::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes).  |
|  | **[INPUT_CTLS_SEL_ADD_TAGS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-add-tags)** <br>B2b8:  |
|  | **[INPUT_CTLS_SEL_EXCLUDE_COMBO](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-exclude-combo)** <br>B3b1: [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos).  |
|  | **[EMV_CTLS_SETUPTRX_RES_CHKSUM_DIFF](group___d_e_f___s_e_l_e_c_t_r_e_s___t_r_x_i_n_f_o.md#define-emv-ctls-setuptrx-res-chksum-diff)** <br>B1b1: Checksum of configuration files changed, call of [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration) may be needed.  |
|  | **[OUTPUT_CTLS_SEL_TXN_INFO](group___d_e_f___o_u_t_p_u_t___s_e_l_e_c_t.md#define-output-ctls-sel-txn-info)** <br>B1b1: [EMV_CTLS_STARTRES_STRUCT::TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation).  |
|  | **[INPUT_CTLS_ONL_ONLINE_RESP](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-online-resp)** <br>B1b1: [EMV_CTLS_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult).  |
|  | **[INPUT_CTLS_ONL_AUTH_RESP](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-auth-resp)** <br>B1b2: [EMV_CTLS_HOST_STRUCT::AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp).  |
|  | **[INPUT_CTLS_ONL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-txn-options)** <br>B1b3: [EMV_CTLS_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_CTLS_ONL_SCRIPT](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-script)** <br>B1b4: [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata).  |
|  | **[INPUT_CTLS_ONL_AUTHDATA](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-authdata)** <br>B1b5: [EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata).  |
|  | **[INPUT_CTLS_ONL_ARC_POSITIVE](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-arc-positive)** <br>B1b6: [EMV_CTLS_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive).  |
|  | **[INPUT_CTLS_ONL_ARC_SWITCH_IF](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-arc-switch-if)** <br>B1b7: [EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface).  |
|  | **[INPUT_CTLS_ONL_ARC_ONLINE_PIN](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-arc-online-pin)** <br>B1b8: [EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-onlinepin).  |
|  | **[INPUT_CTLS_ONL_AMOUNT](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-amount)** <br>B2b1: [EMV_CTLS_HOST_STRUCT::amountUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountupd).  |
|  | **[INPUT_CTLS_ONL_AMOUNT_OTH](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.md#define-input-ctls-onl-amount-oth)** <br>B2b2: [EMV_CTLS_HOST_STRUCT::amountOthUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd).  |
|  | **[EMV_ADK_CL_SCRIPTRES_LEN](_e_m_v___c_t_l_s___interface_8h.md#define-emv-adk-cl-scriptres-len)** <br>Max. length of data in [EMV_CTLS_TRANSRES_STRUCT::ScriptResults](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults) (+6 for TLV format, not yet supported)  |
|  | **[INPUT_CTLS_CONT_OFFL_OPTIONS](_e_m_v___c_t_l_s___interface_8h.md#define-input-ctls-cont-offl-options)** <br>enables [EMV_CTLS_CONT_OFFL_STRUCT::options](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md#variable-options) |
|  | **[INPUT_CTLS_CONT_OFFL_OPT_PIN](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md#define-input-ctls-cont-offl-opt-pin)** <br>B1b1: Restart for Offline PIN verification (for girocard)  |
|  | **[INPUT_CTLS_CONT_OFFL_OPT_PIN_CANCELLED](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md#define-input-ctls-cont-offl-opt-pin-cancelled)** <br>B1b2-3 = 1: PIN input cancelled (for Epal Post TAA after Online PIN)  |
|  | **[INPUT_CTLS_CONT_OFFL_OPT_PIN_BYPASSED](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md#define-input-ctls-cont-offl-opt-pin-bypassed)** <br>B1b2-3 = 2: PIN bypassed (for Epal Post TAA after Online PIN)  |
|  | **[INPUT_CTLS_CONT_OFFL_OPT_PIN_ERROR](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md#define-input-ctls-cont-offl-opt-pin-error)** <br>B1b2-3 = 3: PIN pad not present or not working (for Epal Post TAA after Online PIN)  |
|  | **[TRX_CTLS_STATUSINFO](group___d_e_f___d_f61.md#define-trx-ctls-statusinfo)** <br>B1b1: [EMV_CTLS_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo).  |
|  | **[TRX_CTLS_9F27_CRYPTINFO](group___d_e_f___d_f61.md#define-trx-ctls-9f27-cryptinfo)** <br>B1b2: [EMV_CTLS_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo).  |
|  | **[TRX_CTLS_9F36_ATC](group___d_e_f___d_f61.md#define-trx-ctls-9f36-atc)** <br>B1b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F36_ATC](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f36-atc).  |
|  | **[TRX_CTLS_9F26_CRYPTOGRAMM](group___d_e_f___d_f61.md#define-trx-ctls-9f26-cryptogramm)** <br>B1b4: [EMV_CTLS_TRANSRES_STRUCT::T_9F26_Cryptogramm](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f26-cryptogramm).  |
|  | **[TRX_CTLS_5A_PAN](group___d_e_f___d_f61.md#define-trx-ctls-5a-pan)** <br>B1b5: [EMV_CTLS_TRANSRES_STRUCT::T_5A_PAN](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5a-pan).  |
|  | **[TRX_CTLS_9F39_POS_ENTRY_MODE](group___d_e_f___d_f61.md#define-trx-ctls-9f39-pos-entry-mode)** <br>B1b6: [EMV_CTLS_TRANSRES_STRUCT::T_9F39_POSEntryMode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f39-posentrymode).  |
|  | **[TRX_CTLS_5F24_APPEXPDATE](group___d_e_f___d_f61.md#define-trx-ctls-5f24-appexpdate)** <br>B1b7: [EMV_CTLS_TRANSRES_STRUCT::T_5F24_AppExpDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f24-appexpdate).  |
|  | **[TRX_CTLS_9F41_TRANSCOUNT](group___d_e_f___d_f61.md#define-trx-ctls-9f41-transcount)** <br>B1b8: [EMV_CTLS_TRANSRES_STRUCT::T_9F41_TransCount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f41-transcount).  |
|  | **[TRX_CTLS_5F34_PAN_SEQ_NUMBER](group___d_e_f___d_f61.md#define-trx-ctls-5f34-pan-seq-number)** <br>B2b1: [EMV_CTLS_TRANSRES_STRUCT::T_5F34_PANSequenceNo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f34-pansequenceno).  |
|  | **[TRX_CTLS_57_DATA_TRACK2](group___d_e_f___d_f61.md#define-trx-ctls-57-data-track2)** <br>B2b2: [EMV_CTLS_TRANSRES_STRUCT::T_57_DataTrack2](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-57-datatrack2).  |
|  | **[TRX_CTLS_9F10_DATAISSUER](group___d_e_f___d_f61.md#define-trx-ctls-9f10-dataissuer)** <br>B2b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F10_DataIssuer](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f10-dataissuer).  |
|  | **[TRX_CTLS_9F37_RANDOM_NUMBER](group___d_e_f___d_f61.md#define-trx-ctls-9f37-random-number)** <br>B2b4: [EMV_CTLS_TRANSRES_STRUCT::T_9F37_RandomNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f37-randomnumber).  |
|  | **[TRX_CTLS_95_TVR](group___d_e_f___d_f61.md#define-trx-ctls-95-tvr)** <br>B2b5: [EMV_CTLS_TRANSRES_STRUCT::T_95_TVR](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-95-tvr).  |
|  | **[TRX_CTLS_9A_DATE](group___d_e_f___d_f61.md#define-trx-ctls-9a-date)** <br>B2b6: [EMV_CTLS_TRANSRES_STRUCT::T_9A_Date](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9a-date).  |
|  | **[TRX_CTLS_9F21_TIME](group___d_e_f___d_f61.md#define-trx-ctls-9f21-time)** <br>B2b7: [EMV_CTLS_TRANSRES_STRUCT::T_9F21_Time](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f21-time).  |
|  | **[TRX_CTLS_9C_TRANSTYPE](group___d_e_f___d_f61.md#define-trx-ctls-9c-transtype)** <br>B2b8: [EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype).  |
|  | **[TRX_CTLS_5F2A_TRANS_CURRENCY](group___d_e_f___d_f61.md#define-trx-ctls-5f2a-trans-currency)** <br>B3b1: [EMV_CTLS_TRANSRES_STRUCT::T_5F2A_CurrencyTrans](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2a-currencytrans).  |
|  | **[TRX_CTLS_82_AIP](group___d_e_f___d_f61.md#define-trx-ctls-82-aip)** <br>B3b2: [EMV_CTLS_TRANSRES_STRUCT::T_82_AIP](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-82-aip).  |
|  | **[TRX_CTLS_9F1A_TERM_COUNTRY_CODE](group___d_e_f___d_f61.md#define-trx-ctls-9f1a-term-country-code)** <br>B3b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F1A_TermCountryCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1a-termcountrycode).  |
|  | **[TRX_CTLS_9F34_CVM_RES](group___d_e_f___d_f61.md#define-trx-ctls-9f34-cvm-res)** <br>B3b4: [EMV_CTLS_TRANSRES_STRUCT::T_9F34_CVM_Res](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f34-cvm-res).  |
|  | **[TRX_CTLS_9F33_TERMCAP](group___d_e_f___d_f61.md#define-trx-ctls-9f33-termcap)** <br>B3b5: [EMV_CTLS_TRANSRES_STRUCT::T_9F33_TermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f33-termcap).  |
|  | **[TRX_CTLS_9F35_TERMTYP](group___d_e_f___d_f61.md#define-trx-ctls-9f35-termtyp)** <br>B3b6: [EMV_CTLS_TRANSRES_STRUCT::T_9F35_TermTyp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f35-termtyp).  |
|  | **[TRX_CTLS_9F1E_IFDSERIALNUMBER](group___d_e_f___d_f61.md#define-trx-ctls-9f1e-ifdserialnumber)** <br>B3b7: [EMV_CTLS_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1e-ifdserialnumber).  |
|  | **[TRX_CTLS_84_DFNAME](group___d_e_f___d_f61.md#define-trx-ctls-84-dfname)** <br>B3b8: [EMV_CTLS_TRANSRES_STRUCT::T_84_DFName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname).  |
|  | **[TRX_CTLS_9F09_VERNUM](group___d_e_f___d_f61.md#define-trx-ctls-9f09-vernum)** <br>B4b1: [EMV_CTLS_TRANSRES_STRUCT::T_9F09_VerNum](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f09-vernum).  |
|  | **[TRX_CTLS_9B_TSI](group___d_e_f___d_f61.md#define-trx-ctls-9b-tsi)** <br>B4b2: [EMV_CTLS_TRANSRES_STRUCT::T_9B_TSI](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9b-tsi).  |
|  | **[TRX_CTLS_9F06_AID](group___d_e_f___d_f61.md#define-trx-ctls-9f06-aid)** <br>B4b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid).  |
|  | **[TRX_CTLS_ADDITIONAL_TAGS](group___d_e_f___d_f61.md#define-trx-ctls-additional-tags)** <br>B4b4:  |
|  | **[TRX_CTLS_APPNAME](group___d_e_f___d_f61.md#define-trx-ctls-appname)** <br>B4b5: [EMV_CTLS_TRANSRES_STRUCT::AppName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname).  |
|  | **[TRX_CTLS_5F25_APPEFFDATE](group___d_e_f___d_f61.md#define-trx-ctls-5f25-appeffdate)** <br>B4b6: [EMV_CTLS_TRANSRES_STRUCT::T_5F25_AppEffDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f25-appeffdate).  |
|  | **[TRX_CTLS_5F28_ISSCOUNTRYCODE](group___d_e_f___d_f61.md#define-trx-ctls-5f28-isscountrycode)** <br>B4b7: [EMV_CTLS_TRANSRES_STRUCT::T_5F28_IssCountryCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f28-isscountrycode).  |
|  | **[TRX_CTLS_9F45_DATAAUTHCODE](group___d_e_f___d_f61.md#define-trx-ctls-9f45-dataauthcode)** <br>B4b8: [EMV_CTLS_TRANSRES_STRUCT::T_9F45_DataAuthCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f45-dataauthcode).  |
|  | **[TRX_CTLS_9F4C_ICCDYNNUMBER](group___d_e_f___d_f61.md#define-trx-ctls-9f4c-iccdynnumber)** <br>B5b1: [EMV_CTLS_TRANSRES_STRUCT::T_9F4C_ICCDynNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f4c-iccdynnumber).  |
|  | **[TRX_CTLS_TAC_DENIAL](group___d_e_f___d_f61.md#define-trx-ctls-tac-denial)** <br>B5b2: [EMV_CTLS_TRANSRES_STRUCT::TACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdenial).  |
|  | **[TRX_CTLS_TAC_ONLINE](group___d_e_f___d_f61.md#define-trx-ctls-tac-online)** <br>B5b3: [EMV_CTLS_TRANSRES_STRUCT::TACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-taconline).  |
|  | **[TRX_CTLS_TAC_DEFAULT](group___d_e_f___d_f61.md#define-trx-ctls-tac-default)** <br>B5b4: [EMV_CTLS_TRANSRES_STRUCT::TACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdefault).  |
|  | **[TRX_CTLS_9F0E_IAC_DENIAL](group___d_e_f___d_f61.md#define-trx-ctls-9f0e-iac-denial)** <br>B5b5: [EMV_CTLS_TRANSRES_STRUCT::T_9F0E_IACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0e-iacdenial).  |
|  | **[TRX_CTLS_9F0F_IAC_ONLINE](group___d_e_f___d_f61.md#define-trx-ctls-9f0f-iac-online)** <br>B5b6: [EMV_CTLS_TRANSRES_STRUCT::T_9F0F_IACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0f-iaconline).  |
|  | **[TRX_CTLS_9F0D_IAC_DEFAULT](group___d_e_f___d_f61.md#define-trx-ctls-9f0d-iac-default)** <br>B5b7: [EMV_CTLS_TRANSRES_STRUCT::T_9F0D_IACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0d-iacdefault).  |
|  | **[TRX_CTLS_9F40_TERMCAP](group___d_e_f___d_f61.md#define-trx-ctls-9f40-termcap)** <br>B5b8: [EMV_CTLS_TRANSRES_STRUCT::T_9F40_AddTermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f40-addtermcap).  |
|  | **[TRX_CTLS_RFU_B6B1](group___d_e_f___d_f61.md#define-trx-ctls-rfu-b6b1)** <br>B6b1: RFU.  |
|  | **[TRX_CTLS_9F16_MERCHANT_ID](group___d_e_f___d_f61.md#define-trx-ctls-9f16-merchant-id)** <br>B6b2: [EMV_CTLS_TRANSRES_STRUCT::T_9F16_MerchIdent](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f16-merchident).  |
|  | **[TRX_CTLS_RFU_B6B3](group___d_e_f___d_f61.md#define-trx-ctls-rfu-b6b3)** <br>B6b3: RFU.  |
|  | **[TRX_CTLS_5F20_CARDHOLDER](group___d_e_f___d_f61.md#define-trx-ctls-5f20-cardholder)** <br>B6b4: [EMV_CTLS_TRANSRES_STRUCT::T_5F20_Cardholder](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f20-cardholder).  |
|  | **[TRX_CTLS_5F2D_LANG_PREFERENCE](group___d_e_f___d_f61.md#define-trx-ctls-5f2d-lang-preference)** <br>B6b5: [EMV_CTLS_TRANSRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref).  |
|  | **[TRX_CTLS_9F08_ICC_APPLI_VERS_NO](group___d_e_f___d_f61.md#define-trx-ctls-9f08-icc-appli-vers-no)** <br>B6b6: [EMV_CTLS_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no).  |
|  | **[TRX_CTLS_5F36_TRX_CURRENCY_EXPO](group___d_e_f___d_f61.md#define-trx-ctls-5f36-trx-currency-expo)** <br>B6b7: [EMV_CTLS_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f36-trx-currency-exp).  |
|  | **[TRX_CTLS_5F30_SERVICE_CODE](group___d_e_f___d_f61.md#define-trx-ctls-5f30-service-code)** <br>B6b8: [EMV_CTLS_TRANSRES_STRUCT::T_5F30_ServiceCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f30-servicecode).  |
|  | **[TRX_CTLS_CTLS_MODES](group___d_e_f___d_f61.md#define-trx-ctls-ctls-modes)** <br>B7b1: [EMV_CTLS_TRANSRES_STRUCT::CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode).  |
|  | **[TRX_CTLS_9F66_TTQ](group___d_e_f___d_f61.md#define-trx-ctls-9f66-ttq)** <br>B7b2: [EMV_CTLS_TRANSRES_STRUCT::T_9F66_CL_TTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f66-cl-ttq).  |
|  | **[TRX_CTLS_DF5D_CL_MAGSTRIPE](group___d_e_f___d_f61.md#define-trx-ctls-df5d-cl-magstripe)** <br>B7b3: [EMV_CTLS_TRANSRES_STRUCT::T_DF5D_CL_MAGSTRIPE_T2](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df5d-cl-magstripe-t2).  |
|  | **[TRX_CTLS_9F6C_VISA_CTQ](group___d_e_f___d_f61.md#define-trx-ctls-9f6c-visa-ctq)** <br>B7b4: [EMV_CTLS_TRANSRES_STRUCT::T_9F6C_CL_VISA_CTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f6c-cl-visa-ctq).  |
|  | **[TRX_CTLS_9F5D_VISA_AOSA](group___d_e_f___d_f61.md#define-trx-ctls-9f5d-visa-aosa)** <br>B7b5: [EMV_CTLS_TRANSRES_STRUCT::T_9F5D_CL_VISA_AOSA](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f5d-cl-visa-aosa).  |
|  | **[TRX_CTLS_DF8104_MC_BALANCE](group___d_e_f___d_f61.md#define-trx-ctls-df8104-mc-balance)** <br>B7b6: [EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance).  |
|  | **[TRX_CTLS_DF8105_MC_BALANCE](group___d_e_f___d_f61.md#define-trx-ctls-df8105-mc-balance)** <br>B7b7: [EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance).  |
|  | **[TRX_CTLS_DF64_KERNEL_DEBUG](group___d_e_f___d_f61.md#define-trx-ctls-df64-kernel-debug)** <br>B7b8: [EMV_CTLS_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata).  |
|  | **[TRX_CTLS_9F02_AMOUNT](group___d_e_f___d_f61.md#define-trx-ctls-9f02-amount)** <br>B8b1: [EMV_CTLS_TRANSRES_STRUCT::T_9F02_TXNAmount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f02-txnamount).  |
|  | **[TRX_CTLS_9F03_CB_AMOUNT](group___d_e_f___d_f61.md#define-trx-ctls-9f03-cb-amount)** <br>B8b2: [EMV_CTLS_TRANSRES_STRUCT::T_9F03_TXNAdditionalAmount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f03-txnadditionalamount).  |
|  | **[TRX_CTLS_9F53_MC_CATCODE](group___d_e_f___d_f61.md#define-trx-ctls-9f53-mc-catcode)** <br>B8b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F53_MC_CatCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f53-mc-catcode).  |
|  | **[TRX_CTLS_CARDTYPE](group___d_e_f___d_f61.md#define-trx-ctls-cardtype)** <br>B8b4: [EMV_CTLS_TRANSRES_STRUCT::ctlsCardType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-ctlscardtype).  |
|  | **[TRX_CTLS_SCRIPTRESULTS](group___d_e_f___d_f61.md#define-trx-ctls-scriptresults)** <br>B8B5: [EMV_CTLS_TRANSRES_STRUCT::ScriptResults](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults).  |
|  | **[EXIT_CTLS_BASE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-base)**  |
|  | **[EXIT_CTLS_STOP_LEDS](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-stop-leds)** <br>additionally stop LED-Blinking-thread when exit  |
|  | **[EXIT_CTLS_COMPLETE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-complete)**  |
|  | **[EXIT_CTLS_SEND_CALLBACK](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-send-callback)**  |
|  | **[END_TXN_CTLS_NO_LEDS_OFF](group___e_n_d___t_x_n___o_p_t_i_o_n_s.md#define-end-txn-ctls-no-leds-off)** <br>No LEDs off.  |
|  | **[MAX_CTLS_CONF_KEYS](_e_m_v___c_t_l_s___interface_8h.md#define-max-ctls-conf-keys)** <br>max. number of allowed CAP keys, limitation for VFI-Reader  |
|  | **[EMV_CTLS_DE_REQ_DEK](group___c_b_c_k___d_e___r_e_q_u_e_s_t.md#define-emv-ctls-de-req-dek)** <br>DEK request.  |
|  | **[EMV_CTLS_DE_REQ_DET](group___c_b_c_k___d_e___r_e_q_u_e_s_t.md#define-emv-ctls-de-req-det)** <br>DET request.  |
|  | **[EMV_CTLS_DE_STATE_0](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-0)** <br>DataExchange Inactive.  |
|  | **[EMV_CTLS_DE_STATE_1](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-1)** <br>MSD/Chip - Waiting for PDOL Data.  |
|  | **[EMV_CTLS_DE_STATE_2](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-2)** <br>MSD - Data update prior to RR.  |
|  | **[EMV_CTLS_DE_STATE_3](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-3)** <br>MSD - Waiting for proceed to first write flag.  |
|  | **[EMV_CTLS_DE_STATE_4](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-4)** <br>MSD - Final data to send.  |
|  | **[EMV_CTLS_DE_STATE_5](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-5)** <br>Chip - Update befre/during RR/GD.  |
|  | **[EMV_CTLS_DE_STATE_6](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-6)** <br>Chip - Data update after RR.  |
|  | **[EMV_CTLS_DE_STATE_7](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-7)** <br>Chip - Waiting for proceed to first write flag.  |
|  | **[EMV_CTLS_DE_STATE_8](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-8)** <br>Chip - Final data to send.  |
|  | **[EMV_CTLS_DE_MODE_STOP](group___c_b_c_k___d_e___m_o_d_e.md#define-emv-ctls-de-mode-stop)** <br>User wishes transaction to terminate.  |
|  | **[EMV_CTLS_DE_MODE_CONT](group___c_b_c_k___d_e___m_o_d_e.md#define-emv-ctls-de-mode-cont)** <br>User wishes transaction processing to continue from point of interruption.  |
|  | **[EMV_CTLS_DE_MODE_MORE](group___c_b_c_k___d_e___m_o_d_e.md#define-emv-ctls-de-mode-more)** <br>User wishes to supply more data.  |
|  | **[TAG_BF0B_INIT_CALLBACK_THREAD](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0b-init-callback-thread)** <br>Signals the creation of the "notification callback thread" (inside `libEMV_CTLS_Link.so`)  |
|  | **[TAG_BF0C_CTLS_CBK_APP_SELECTED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0c-ctls-cbk-app-selected)** <br>Signals that application is selected.  |
|  | **[TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange)** <br>PayPass3 DataExchange.  |
|  | **[TAG_BF0F_EXIT_CALLBACK_THREAD](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0f-exit-callback-thread)** <br>Signals the stop of the "notification callback thread" (inside `libEMV_CTLS_Link.so`)  |
|  | **[TAG_BF10_CTLS_CBK_LEDS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf10-ctls-cbk-leds)** <br>Switch soft LEDs.  |
|  | **[TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand)** <br>Modify candidate list.  |
|  | **[TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd)** <br>Random number provided by the calling application -.  |
|  | **[TAG_BF14_CBK_TEXT_DISPLAY](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf14-cbk-text-display)** <br>Text display.  |
|  | **[TAG_BF15_CBK_CARD_TAPPED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf15-cbk-card-tapped)** <br>Notification that a card was detected.  |
|  | **[TAG_BF16_CBK_SERVICE_SHORTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf16-cbk-service-shortlist)** <br>RuPay callback before GPO.  |
|  | **[TAG_BF17_CBK_SERVICE_FOR_GENAC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf17-cbk-service-for-genac)** <br>RuPay callback before Generate AC.  |
|  | **[TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data)** <br>Gemalto/Pure: provide GET DATA and/or PUT DATA input.  |
|  | **[TAG_BF19_CTLS_CBK_BEEP](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf19-ctls-cbk-beep)** <br>Application shall sound the buzzer.  |
|  | **[TAG_BF7F_CTLS_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-ctls-cbk-trace)** <br>Traces.  |
|  | **[EMV_CTLS_SER_Init_Framework](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-ser-init-framework)**(dataIn, dataInLen, dataOut, dataOutLen)  |
|  | **[EMV_CTLS_INIT_OPT_BASE_INIT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-base-init)** <br>base init: set options and register callback, but do not allocate memory  |
|  | **[EMV_CTLS_INIT_OPT_L1_DUMP](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-l1-dump)**  |
|  | **[EMV_CTLS_INIT_OPT_AUTO_RETAP](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-auto-retap)** <br>do NOT handle retaps as two separate transactions but handle retaps internally and fire message events only to the app ([TAG_BF14_CBK_TEXT_DISPLAY](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf14-cbk-text-display)), the retap returncodes (like  |
|  | **[EMV_CTLS_INIT_OPT_CONFIG_MODE](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-config-mode)**  |
|  | **[EMV_CTLS_INIT_OPT_USE_DEF_VT_CAPK](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-def-vt-capk)** <br>Use "EMV_CTLS_Keys.xml" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals.  |
|  | **[EMV_CTLS_INIT_OPT_DELETE_ALL](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-delete-all)** <br>delete all existing configuration files using the same virtual terminal  |
|  | **[EMV_CTLS_INIT_OPT_USE_VFI](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vfi)** <br>option that ensures VFI Reader will be used  |
|  | **[EMV_CTLS_INIT_OPT_USE_VERTEX](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vertex)** <br>option that ensures VERTEX Kernels will be used  |
|  | **[EMV_CTLS_INIT_OPT_TRACE](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace)** <br>Callback trace ([TAG_BF7F_CTLS_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-ctls-cbk-trace)), for special use. For standard use ADK-LOG. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace-adk-log) or log configuration file missing or read error.  |
|  | **[EMV_CTLS_INIT_OPT_TRACE_CLT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace-clt)** <br>Callback trace ([TAG_BF7F_CTLS_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-ctls-cbk-trace)), for special use. For standard use ADK-LOG. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace-adk-log) or log configuration file missing or read error.  |
|  | **[EMV_CTLS_INIT_OPT_LED_CBK_EXT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-led-cbk-ext)**  |
|  | **[EMV_CTLS_INIT_OPT_TRACE_SYSLOG](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace-syslog)** <br>Callback trace ([TAG_BF7F_CTLS_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-ctls-cbk-trace)), additionally write to syslog. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace-adk-log) or log configuration file missing or read error.  |
|  | **[EMV_CTLS_INIT_OPT_LED_VFI_INT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-led-vfi-int)** <br>VFI Reader only: request internal LED display. If set, LED handling is done internally by the VFI Reader. If not set, LED display depends on [EMV_CTLS_INIT_OPT_LED_CBK_EXT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-led-cbk-ext).  |
|  | **[EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-vfi-buzzer-adk)** <br>VFI Reader only: Buzzer is not done by VFI reader, ADK takes over the beeps.    see also [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume).  |
|  | **[EMV_CTLS_INIT_OPT_CALC_CHKSUM](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-calc-chksum)** <br>VFI Reader only: Calculate checksums of configuration files, may lead to setting of result bit [EMV_CTLS_INIT_RES_CHKSUM_DIFF](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#define-emv-ctls-init-res-chksum-diff).  |
|  | **[EMV_CTLS_INIT_OPT_NEW_CFG_INTF](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-new-cfg-intf)**  |
|  | **[EMV_CTLS_INIT_OPT_BEEP_CBK_EXT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-beep-cbk-ext)** <br>Activate beeper callback ([TAG_BF19_CTLS_CBK_BEEP](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf19-ctls-cbk-beep)). Per default beeper is controlled by EMV ADK.  |
|  | **[EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace-adk-log)** <br>Solely use ADK-LOG for tracing. Deactivates trace callback ([TAG_BF7F_CTLS_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-ctls-cbk-trace)). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file "EMVCTLS".  |
|  | **[EMV_CTLS_INIT_OPT_TIMINGS](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-timings)** <br>measure card and terminal performance. Note: For this feature other trace output is switched off  |
|  | **[EMV_CTLS_INIT_OPT_SHARED_CONFIG](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-shared-config)**  |
|  | **[EMV_CTLS_INIT_OPT_EPP_MASTER](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-epp-master)**  |
|  | **[EMV_CTLS_INIT_VIRT_1](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-1)** <br>virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_2](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-2)** <br>virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_3](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-3)** <br>virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_4](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-4)** <br>virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_5](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-5)** <br>virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_6](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-6)** <br>virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_7](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-7)** <br>virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_8](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-8)** <br>virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_9](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-9)** <br>virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_10](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-10)** <br>virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_11](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-11)** <br>virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_12](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-12)** <br>virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_13](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-13)** <br>virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_14](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-14)** <br>virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_15](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-15)** <br>virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_16](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-16)** <br>virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_17](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-17)** <br>virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_18](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-18)** <br>virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_19](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-19)** <br>virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_VIRT_20](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-virt-20)** <br>virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CTLS_INIT_RES_CHKSUM_DIFF](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#define-emv-ctls-init-res-chksum-diff)** <br>Checksums of configuration files changed, call of [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration) may be needed    EMV framework does this check only if [EMV_CTLS_INIT_OPT_CALC_CHKSUM](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-calc-chksum) is set. Is only possible on VFI reader.  |
|  | **[EMV_CTLS_INIT_RES_VFI_READER_MISS](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#define-emv-ctls-init-res-vfi-reader-miss)** <br>VFI reader usage desired (via [EMV_CTLS_INIT_OPT_USE_VFI](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vfi)), but VFI reader is not installed.  |
|  | **[EMV_CTLS_INIT_RES_ENTRY_POINT_MISS](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#define-emv-ctls-init-res-entry-point-miss)** <br>Vertex usage desired (via [EMV_CTLS_INIT_OPT_USE_VERTEX](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vertex)), but Entry Point is not installed.  |
|  | **[EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework)**(numberOfAIDs, EMV_Callback, externalData, options, ulResult) <br>Initialize EMV ADK.  |
|  | **[CONTACTLESS_LED_FIRST](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-first)** <br>first contacless LED  |
|  | **[CONTACTLESS_LED_SECOND](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-second)** <br>second contacless LED  |
|  | **[CONTACTLESS_LED_THIRD](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-third)** <br>third contacless LED  |
|  | **[CONTACTLESS_LED_FOURTH](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-fourth)** <br>fourth contacless LED  |
|  | **[CONTACTLESS_LED_BLUE](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-blue)** <br>first LED for signalling field on  |
|  | **[CONTACTLESS_LED_YELLOW](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-yellow)** <br>second LED indicating chip card communication  |
|  | **[CONTACTLESS_LED_GREEN](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-green)** <br>third LED "Card read successfully"  |
|  | **[CONTACTLESS_LED_RED](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-red)** <br>fourth LED indicating error  |
|  | **[CONTACTLESS_LED_0](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-0)** <br>Contactless LED 1,.  |
|  | **[CONTACTLESS_LED_1](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-1)** <br>Contactless LED 2,.  |
|  | **[CONTACTLESS_LED_2](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-2)** <br>Contactless LED 3,.  |
|  | **[CONTACTLESS_LED_3](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-3)** <br>Contactless LED 4,.  |
|  | **[CONTACTLESS_LED_ALL](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-all)** <br>All Contactless LEDs.  |
|  | **[CONTACTLESS_LED_LOGO](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-logo)** <br>CTLS Logo LED (only UX family), not combinable with other LEDs.  |
|  | **[CONTACTLESS_LED_OFF](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-off)** <br>Switch LED Off.  |
|  | **[CONTACTLESS_LED_ON](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-on)** <br>Switch LED On.  |
|  | **[CONTACTLESS_LED_IDLE_BLINK](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-idle-blink)** <br>enable blinking: ALWAYS LED 1 is used for blinking, fixed timing according to specs  |
|  | **[CONTACTLESS_LED_ONLINE_BLINK](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-online-blink)** <br>enable blinking: ALWAYS LED 3 is used for blinking, fixed timing according to specs.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api) |
|  | **[CONTACTLESS_LED_HANDLE_EOT_SILENT](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-silent)** <br>End of Transaction, disable LED in the background after required 750msecs.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api).  |
|  | **[CONTACTLESS_LED_HANDLE_EOT_SUCCESS](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-success)** <br>End of Transaction, disable LED in the background after required 750msecs + Beep Success.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api).  |
|  | **[CONTACTLESS_LED_HANDLE_EOT_FAIL](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-fail)** <br>End of Transaction, disable LED in the background after required 750msecs + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api).  |
|  | **[CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-fail-blink)** <br>End of Transaction, LED 4 is blinking 4 times + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api).  |
|  | **[CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-fail-blink-3)** <br>End of Transaction, LED 1-3 are blinking 4 times + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api).  |
|  | **[CONTACTLESS_LED_MODE_OFF](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-off)** <br>switching LEDs must be done by the application  |
|  | **[CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api)** <br>switching LEDs must be done by the API function [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led) |
|  | **[CONTACTLESS_LED_MODE_EMV](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-emv)** <br>switching LEDs is done by EMV framework on its own (this is the initial mode)  |
|  | **[EMV_CTLS_BEEP_SUCCESS](group___a_d_k___b_u_z_z_e_r.md#define-emv-ctls-beep-success)** <br>Success tone is required.  |
|  | **[EMV_CTLS_BEEP_ALERT](group___a_d_k___b_u_z_z_e_r.md#define-emv-ctls-beep-alert)** <br>Alert tone needed.  |
|  | **[EMV_CTLS_RFU_1](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-rfu-1)** <br>reserved for probable reader number  |
|  | **[EMV_CTLS_RESET_KEEP_FIELD_ON](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-reset-keep-field-on)** <br>(Vel: y VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Do not switch off RF field when no card was detected. CAUTION: This results in higher power consumption and might cause overheating problems.  |
|  | **[EMV_CTLS_SPURIOUS_DETECT](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-spurious-detect)** <br>(Vel: y VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Avoid faulty collision detection on ADK level. This bit was marked deprecated since August 2020 but reactivated for Trinity.  |
|  | **[EMV_CTLS_EMV_COMPLIANT](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-emv-compliant)** <br>(Vel: y VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Only card type is returned in card info. This feature is mutually exclusive with EMV_CTLS_RESET_NO_EMV.  |
|  | **[EMV_CTLS_RESET_NO_EMV](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-reset-no-emv)** <br>(Vel: y VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Provide card type plus UID if available as card info. This feature is mutually exclusive with EMV_CTLS_EMV_COMPLIANT.  |
|  | **[EMV_CTLS_RESET_PICC_OPEN_ONLY](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-reset-picc-open-only)** <br>(Vel: n VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Only initialise CTLS reader, do not detect cards.  |
|  | **[EMV_CTLS_SKIP_FIELD_ON](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-skip-field-on)** <br>(Vel: n VFI: y) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Tell VFI Reader to consider RF Field is already turned on by NFC ADK.  |
|  | **[EMV_CTLS_OPEN_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-open-reader)** <br>(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-open-reader) for re-open.  |
|  | **[EMV_CTLS_CLOSE_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-close-reader)** <br>(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, close CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-open-reader) for re-open.  |
|  | **[EMV_CTLS_DETECT_REMOVAL](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-detect-removal)** <br>(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, start removal detection background task  |
|  | **[EMV_CTLS_LED_SHAPE_RECTANGLE](group___a_d_k___l_e_d.md#define-emv-ctls-led-shape-rectangle)** <br>Data structure for LED colors. Used in [EMV_CTLS_LED_CONFIG_STRUCT::shape](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-shape).  |
|  | **[EMV_CTLS_LED_SHAPE_CIRCLE](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-led-shape-circle)** <br>circular LEDs  |
|  | **[EMV_CTLS_SUPPORTED_SIZE_9F0A](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-supported-size-9f0a)** <br>limit for Application Section Registered Proprietary Data size (has been 20 before)  |
|  | **[EMV_CTLS_SUPPORTED_SIZE_DISC](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-supported-size-disc)** <br>limit for discretionary data size (template '73')  |
|  | **[EMV_CTLS_ADDTAG_COMBOS](_e_m_v___c_t_l_s___interface_8h.md#define-emv-ctls-addtag-combos)** <br>Max. number of candidates in [EMV_CTLS_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata) |

## Types Documentation

### typedef EMV_CTLS_APPLI_TYPE

```cpp
typedef struct EMV_CTLS_APPLI_STRUCT EMV_CTLS_APPLI_TYPE;
```

9F06, AID (5 bytes RID + n bytes PIX) 

### typedef EMV_CTLS_APPLI_KERNEL_TYPE

```cpp
typedef struct EMV_CTLS_APPLI_KERNEL_STRUCT EMV_CTLS_APPLI_KERNEL_TYPE;
```

AID (9F06) and kernel ID. 

### typedef EMV_CTLS_DATA_TYPE

```cpp
typedef struct EMV_CTLS_DATA_STRUCT EMV_CTLS_DATA_TYPE;
```


### typedef EMV_CTLS_DOL_TYPE

```cpp
typedef struct EMV_CTLS_DOL_STRUCT EMV_CTLS_DOL_TYPE;
```

data object list 

### typedef EMV_CTLS_TRACK2_TYPE

```cpp
typedef struct EMV_CTLS_TRACK2_STRUCT EMV_CTLS_TRACK2_TYPE;
```

track 2 data 

### typedef EMV_CTLS_CRDNAME_TYPE

```cpp
typedef struct EMV_CTLS_CRDNAME_STRUCT EMV_CTLS_CRDNAME_TYPE;
```

cardholder name 

### typedef EMV_CTLS_ICCRND_TYPE

```cpp
typedef struct EMV_CTLS_ICCRND_STRUCT EMV_CTLS_ICCRND_TYPE;
```

icc dynamic number 

### typedef EMV_CTLS_ISSDATA_TYPE

```cpp
typedef struct EMV_CTLS_ISSDATA_STRUCT EMV_CTLS_ISSDATA_TYPE;
```

issuer application data 

### typedef EMV_CTLS_TERMDATA_TYPE

```cpp
typedef struct EMV_CTLS_TERMDATA_STRUCT EMV_CTLS_TERMDATA_TYPE;
```

struct for interface to [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata) and [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata)

typedef for [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)


### typedef EMV_CTLS_TAGLIST_TYPE

```cpp
typedef struct EMV_CTLS_TAGLIST_STRUCT EMV_CTLS_TAGLIST_TYPE;
```

structure for [EMV_CTLS_PAYMENT_TYPE::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)

### typedef EMV_CTLS_APPLIDATA_MK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_MK_STRUCT EMV_CTLS_APPLIDATA_MK_TYPE;
```

Structure for configuration of one single application, MK specific part. See see Book C-2, Kernel 2 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_VK_DRL_ENTRY_TYPE

```cpp
typedef struct EMV_CTLS_VK_DRL_ENTRY_STRUCT EMV_CTLS_VK_DRL_ENTRY_TYPE;
```

Visa Dynamic Reader Limits, single entry Element of [EMV_CTLS_VK_DRL_STRUCT](struct_e_m_v___c_t_l_s___v_k___d_r_l___s_t_r_u_c_t.md). 

### typedef EMV_CTLS_VK_DRL_TYPE

```cpp
typedef struct EMV_CTLS_VK_DRL_STRUCT EMV_CTLS_VK_DRL_TYPE;
```

Visa Dynamic Reader Limits Used in [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01). 

### typedef EMV_CTLS_APPLIDATA_VK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_VK_STRUCT EMV_CTLS_APPLIDATA_VK_TYPE;
```

Structure for configuration of one single application, VK specific part. See see Book C-3, Kernel 3 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_AK_DRL_ENTRY_TYPE

```cpp
typedef struct EMV_CTLS_AK_DRL_ENTRY_STRUCT EMV_CTLS_AK_DRL_ENTRY_TYPE;
```

Amex Dynamic Reader Limits, single entry Element of [EMV_CTLS_AK_DRL_STRUCT](struct_e_m_v___c_t_l_s___a_k___d_r_l___s_t_r_u_c_t.md). 

### typedef EMV_CTLS_AK_DRL_TYPE

```cpp
typedef struct EMV_CTLS_AK_DRL_STRUCT EMV_CTLS_AK_DRL_TYPE;
```

Amex Dynamic Reader Limits Used in [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01). 

### typedef EMV_CTLS_APPLIDATA_AK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_AK_STRUCT EMV_CTLS_APPLIDATA_AK_TYPE;
```

Structure for configuration of one single application, AK specific part. See see Book C-4, Kernel 4 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_JK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_JK_STRUCT EMV_CTLS_APPLIDATA_JK_TYPE;
```

Structure for configuration of one single application, JK specific part. See see Book C-5, Kernel 5 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_DK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_DK_STRUCT EMV_CTLS_APPLIDATA_DK_TYPE;
```

Structure for configuration of one single application, DK specific part. See see Book C-6, Kernel 6 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_IK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_IK_STRUCT EMV_CTLS_APPLIDATA_IK_TYPE;
```

Structure for configuration of one single application, IK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_EK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_EK_STRUCT EMV_CTLS_APPLIDATA_EK_TYPE;
```

Structure for configuration of one single application, EK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_PK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_PK_STRUCT EMV_CTLS_APPLIDATA_PK_TYPE;
```

Structure for configuration of one single application, PK specific part (VisaAP resp. Visa Asia/Pacific resp. Visa Wave 2). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_CK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_CK_STRUCT EMV_CTLS_APPLIDATA_CK_TYPE;
```

Structure for configuration of one single application, CK specific part. See see Book C-7, Kernel 7 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_GK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_GK_STRUCT EMV_CTLS_APPLIDATA_GK_TYPE;
```

Structure for configuration of one single application, GK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_RK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_RK_STRUCT EMV_CTLS_APPLIDATA_RK_TYPE;
```

Structure for configuration of one single application, RK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_SK_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_SK_STRUCT EMV_CTLS_APPLIDATA_SK_TYPE;
```

Structure for configuration of one single application, SK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_PB_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_PB_STRUCT EMV_CTLS_APPLIDATA_PB_TYPE;
```

Structure for configuration of one single application, PagoBancomat specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_WK_TYPE

```cpp
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

```cpp
typedef struct EMV_CTLS_APPLIDATA_BK_STRUCT EMV_CTLS_APPLIDATA_BK_TYPE;
```

Structure for configuration of one single application, CPACE specific part. 

### typedef EMV_CTLS_APPLIDATA_MR_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_MR_STRUCT EMV_CTLS_APPLIDATA_MR_TYPE;
```

Structure for configuration of one single application, MIR specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_DOM_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_DOM_STRUCT EMV_CTLS_APPLIDATA_DOM_TYPE;
```

Structure for configuration of one single domestic application See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

### typedef EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE

```cpp
typedef struct EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE;
```

Structure for configuration of one single application. See [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)   XML tag [XML_TAG_AD_APP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-app)   no TLV tag is used. 

### typedef EMV_CTLS_PAYMENT_TYPE

```cpp
typedef struct EMV_CTLS_PAYMENT_STRUCT EMV_CTLS_PAYMENT_TYPE;
```

Transaction parameters of an EMV transaction. 

Part of [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md) typedef for [EMV_CTLS_PAYMENT_STRUCT](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md)


### typedef EMV_CTLS_APPS_SELECT_TYPE

```cpp
typedef struct EMV_CTLS_APPS_SELECT_STRUCT EMV_CTLS_APPS_SELECT_TYPE;
```

Application selection parameters of an EMV transaction. 

Part of [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md) typedef for [EMV_CTLS_APPS_SELECT_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md)


### typedef EMV_CTLS_START_TYPE

```cpp
typedef struct EMV_CTLS_START_STRUCT EMV_CTLS_START_TYPE;
```

struct for interface to [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

### typedef EMV_CTLS_STARTRES_TYPE

```cpp
typedef struct EMV_CTLS_STARTRES_STRUCT EMV_CTLS_STARTRES_TYPE;
```

Result data of [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

### typedef EMV_CTLS_HOST_TYPE

```cpp
typedef struct EMV_CTLS_HOST_STRUCT EMV_CTLS_HOST_TYPE;
```

Data structure for host response data. Input for [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline)

### typedef EMV_CTLS_CONT_OFFL_TYPE

```cpp
typedef struct EMV_CTLS_CONT_OFFL_STRUCT EMV_CTLS_CONT_OFFL_TYPE;
```

Transaction parameters of an EMV transaction at [EMV_CTLS_ContinueOfflineExt()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueofflineext)

### typedef EMV_CTLS_TRANSRES_TYPE

```cpp
typedef struct EMV_CTLS_TRANSRES_STRUCT EMV_CTLS_TRANSRES_TYPE;
```

Data structure for output data of [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) and [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline)

Valid data is indicated by [Information which data was provided by the ICC](group___d_e_f___d_f61.md)


### typedef EMV_CTLS_CAPKEY_TYPE

```cpp
typedef struct EMV_CTLS_CAPKEY_STRUCT EMV_CTLS_CAPKEY_TYPE;
```

Data structure CAP keys. 

Max. no.: [MAX_CTLS_CONF_KEYS](_e_m_v___c_t_l_s___interface_8h.md#define-max-ctls-conf-keys)


### typedef EMV_CTLS_CAPREAD_TYPE

```cpp
typedef struct EMV_CTLS_CAPREAD_STRUCT EMV_CTLS_CAPREAD_TYPE;
```

Data structure CAP keys. 

### typedef EMV_CTLS_LED_COLORS

```cpp
typedef struct EMV_CTLS_LED_COLORS_STRUCT EMV_CTLS_LED_COLORS;
```

Data structure for LED colors. Input for [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended)

### typedef EMV_CTLS_LED_CONFIG

```cpp
typedef struct EMV_CTLS_LED_CONFIG_STRUCT EMV_CTLS_LED_CONFIG;
```

Data structure for LED configuration. Input for [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended)

### typedef EMV_CTLS_CANDIDATE_DATA_TYPE

```cpp
typedef struct EMV_CTLS_CANDIDATE_DATA_STRUCT EMV_CTLS_CANDIDATE_DATA_TYPE;
```

Candidate list additional data. 

To be used in conjunction with AID list in combo candidates callback [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand)

 See also [EMV_CTLS_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata)



## Functions Documentation

### function EMV_CTLS_SER_Init_Framework_Client

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_Init_Framework_Client(
    const char * version,
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_Exit_Framework

```cpp
DLL_CLC void EMV_CTLS_SER_Exit_Framework(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_MapVirtualTerminal

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_MapVirtualTerminal(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_StoreCAPKey

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_StoreCAPKey(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_ReadCAPKeys

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_ReadCAPKeys(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_SetTermData

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_SetTermData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_GetTermData

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_GetTermData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_SetAppliDataSchemeSpecific

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_SetAppliDataSchemeSpecific(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_GetAppliDataSchemeSpecific

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_GetAppliDataSchemeSpecific(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_SetupTransaction

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_SetupTransaction(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_ContinueOffline

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_ContinueOffline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_ContinueOnline

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_ContinueOnline(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_fetchTxnTags

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_fetchTxnTags(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_EndTransaction

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_EndTransaction(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_TransparentCommand

```cpp
DLL_CLC unsigned char EMV_CTLS_SER_TransparentCommand(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_SmartISO

```cpp
DLL_CLC unsigned char EMV_CTLS_SER_SmartISO(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_SmartReset

```cpp
DLL_CLC unsigned char EMV_CTLS_SER_SmartReset(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_SmartPowerOff

```cpp
DLL_CLC unsigned char EMV_CTLS_SER_SmartPowerOff(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_CardRemoval

```cpp
DLL_CLC unsigned char EMV_CTLS_SER_CardRemoval(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_LED_SetMode

```cpp
DLL_CLC unsigned char EMV_CTLS_SER_LED_SetMode(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_LED

```cpp
DLL_CLC unsigned char EMV_CTLS_SER_LED(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_LED_ConfigDesign

```cpp
DLL_CLC unsigned char EMV_CTLS_SER_LED_ConfigDesign(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_Break

```cpp
DLL_CLC unsigned char EMV_CTLS_SER_Break(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_SER_GetCandidateData

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SER_GetCandidateData(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```


### function EMV_CTLS_Init_Framework_Client

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_Init_Framework_Client(
    const char * version,
    unsigned char numberOfAIDs,
    EMV_CTLS_CALLBACK_FnT EMV_Callback,
    void * externalData,
    unsigned long options,
    unsigned long * ulResult
)
```

Internal function for initialization    Don't call direct!    Instead use [EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework). 

### function EMV_CTLS_Exit_Framework

```cpp
DLL_CLC void EMV_CTLS_Exit_Framework(
    void 
)
```

Kernel deactivation. 

**Author**: GSS R&D Germany

**Note**: this function calls [EMV_CTLS_Exit_Framework_extended](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework-extended) (0) 

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

[Explanation in programmers guide]


### function EMV_CTLS_Exit_Framework_extended

```cpp
DLL_CLC void EMV_CTLS_Exit_Framework_extended(
    unsigned char options
)
```

Kernel deactivation with options. 

**Parameters**: 

  * **options** Bitset of [Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md)


**Author**: GSS R&D Germany

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CTLS_CLIENT_GetVersion

```cpp
const DLL_CLC char * EMV_CTLS_CLIENT_GetVersion(
    void 
)
```

Get contactless client version. 

**Return**: Client version as C-string 

**Author**: GSS R&D Germany

### function EMV_CTLS_FRAMEWORK_GetVersion

```cpp
const DLL_CLC char * EMV_CTLS_FRAMEWORK_GetVersion(
    void 
)
```

Get contactless framework version. 

**Return**: Framework version as C-string 

**Author**: GSS R&D Germany

**Serialization:**![TLV_GetFrameworkVersion.jpg](.//TLV_GetFrameworkVersion.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_GET_VER](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-get-ver), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CTLS_MapVirtualTerminal

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_MapVirtualTerminal(
    EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType,
    unsigned char * TLVSwitchValue,
    unsigned int TLVBufLen,
    unsigned char VirtualTerminal
)
```

Changes the Virtual Terminal Map. 

**Parameters**: 

  * **VirtualTermMapType** mode, see [Defines for type of virtual terminal map](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md)

 TLV tag: [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **TLVSwitchValue** TLV buffer containing switch criteria. Must contain tag [TAG_9C_TRANS_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9c-trans-type) and/or tag [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency), all other tags are currently ignored. 

 Restriction for VFI reader: Only EMVCo transaction types are supported ([EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service), [EMV_ADK_TRAN_TYPE_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cash), [EMV_ADK_TRAN_TYPE_CASHBACK](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cashback), [EMV_ADK_TRAN_TYPE_MANUAL_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-cash), [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund)) 

 TLV tag: [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **TLVBufLen** Length of TLV buffer 

 TLV tag: [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **VirtualTerminal** Virtual Terminal that is selected if switch criteria match. 

 TLV tag: [TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad VirtualTermMapType, TLVSwitchValue or TLVBufLen input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): VirtTermMap file corruption@ [EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): VirtTermMap file persistence problem
**Serialization:** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_VIRT_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-virt-cfg)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Virtual terminal mapping table]


### function EMV_CTLS_StoreCAPKey

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_StoreCAPKey(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType,
    const EMV_CTLS_CAPKEY_TYPE * pxKeyData
)
```

Stores the specified CAP key. 

**Parameters**: 

  * **eHandleCAPKeyType** Mode of CAP key setting, see [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type) (Note: Multiple records are not supported) 
  * **pxKeyData** All the data of the key that needs storing, see [EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad eHandleCAPKeyType or pxKeyData input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): maximum number of capkeys exceeded
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): CapKeys file persistence problem

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure CTLS CAP Keys]

**Serialization:**![TLV_StoreCAPKey.jpg](.//TLV_StoreCAPKey.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)


### function EMV_CTLS_ReadCAPKeys

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_ReadCAPKeys(
    EMV_CTLS_CAPREAD_TYPE * pxKeyData,
    unsigned char * pucMaxnum
)
```

Reads CAP keys. 

**Parameters**: 

  * **pxKeyData** CAP key data, [min(*pucMaxnum, number of stored CAP key, 100)](http__get__curl_8c.md#define-min) are written are written to output buffer 

 see [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md)
  * **pucMaxnum** input: maximum number of CAP keys to write to pxKeyData; output: number of CAP keys stored in file 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxKeyData or pucMaxnum input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption

**Author**: GSS R&D Germany

**Note**: Currently maximum number of CAP keys to be stored is 512. **Serialization:**![TLV_ReadCAPKey.jpg](.//TLV_ReadCAPKey.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

Explanation in programmers guide: [Configure CTLS CAP Keys] Due to serialisation buffer limitation the maximum number of read keys is 100. [EMV_CTLS_GetCAPKeyInfo()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getcapkeyinfo) is without this restriction.


### function EMV_CTLS_GetCAPKeyInfo

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_GetCAPKeyInfo(
    EMV_CTLS_CAPREAD_TYPE * pxKeyData,
    unsigned capacity,
    unsigned offset,
    unsigned * numberRead,
    unsigned * numberConfigured
)
```

Reads CAP keys. 

**Parameters**: 

  * **pxKeyData** CAP key info data (buffer length at least 7 times capacity) 

 see [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md)

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)
  * **capacity** number of keys that can be stored in pxKeyInfo 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)
  * **offset** for reading the key list in several chunks 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **numberRead** number of data sets stored to pxKeyInfo 
  * **numberConfigured** number of configured keys 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxKeyData input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption

**Author**: GSS R&D Germany

**Note**: Currently maximum number of CAP keys to be stored is 512.

Explanation in programmers guide: [Configure CTLS CAP Keys]

**Serialization:** As this command uses the same class and instruction as [EMV_CTLS_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-readcapkeys) the presence of parameter offset marks the support of compressed response format. Legacy frameworks will ignore this parameter and return key info in TLV format. 
**Request** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

 capacity [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number), up to 255, for more a loop is required 

 offset [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1), length 2 
**Response**

 configured [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number), length 2 indicates compressed format, legacy framework will send length 1 

 key info [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data) sequence of RID, index and key length up to given capacity, data length is 7 times number of keys info blocks while the number of blocks is min(capacity, number of stored keys - offset) 


### function EMV_CTLS_SetTermData

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SetTermData(
    EMV_CTLS_TERMDATA_TYPE * pxTermData
)
```

set terminal specific data and perform verification and saving of data 

**Parameters**: 

  * **pxTermData** ... terminal data, see [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData file corruption
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData file persistence problem
**Serialization:**![TLV_SetTerminalData.jpg](.//TLV_SetTerminalData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure CTLS Terminal data]


### function EMV_CTLS_GetTermData

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_GetTermData(
    EMV_CTLS_TERMDATA_TYPE * pxTermData
)
```

get configured terminal data 

**Parameters**: 

  * **pxTermData** ... terminal data, see [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData file corruption
**Serialization:**![TLV_GetTerminalData.jpg](.//TLV_GetTerminalData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure CTLS Terminal data]


### function EMV_CTLS_SetAppliDataSchemeSpecific

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_SetAppliDataSchemeSpecific(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType,
    EMV_CTLS_APPLI_KERNEL_TYPE * pxAID,
    EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE * pxAppliData
)
```

Set application specific data and perform verification and saving of data. 

**Parameters**: 

  * **eHandleAppliType** ... see [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)
  * **pxAID** ... AID/kernel combination, key for this configuration set, see [EMV_CTLS_APPLI_KERNEL_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md)
  * **pxAppliData** ... application data, see [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md)


**Deprecated**: 

[EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed-wrong-cfg-intf): wrong configuration function

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): illegal handle type or pointer
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): file corruption 
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): persistence problem 
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): if number of configurable AIDs is a limit

**Author**: GSS R&D Germany

This function can only be used if init option [EMV_CTLS_INIT_OPT_NEW_CFG_INTF](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-new-cfg-intf) was set. 

 Has to be called once per application/kernel combination (Visa, MasterCard, ...). 

 Restriction for VFI reader: 

 Max. number allowed is 10 system AIDs + 10 user AIDs 

 System AIDs are: MasterCard, Maestro, Visa, Discover, Amex, Visa electron, VPAY, PBOC, Visa Interlink, Interac

**Serialization:**![TLV_SetApplicationData.jpg](.//TLV_SetApplicationData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)


### function EMV_CTLS_GetAppliDataSchemeSpecific

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_GetAppliDataSchemeSpecific(
    EMV_ADK_READAPPLI_TYPE eReadAppliType,
    EMV_CTLS_APPLI_KERNEL_TYPE * pxAID,
    EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE * pxAppliData
)
```

Get configured application data. 

**Parameters**: 

  * **eReadAppliType** ... see [Defines for type of read application data mode](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md)
  * **pxAID** ... AID, see [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md)
  * **pxAppliData** ... application data, see [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md)


**Deprecated**: 

[EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed-wrong-cfg-intf): wrong configuration function

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad eReadAppliType input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): AppliData file corruption 

**Author**: GSS R&D Germany

**Warning**: struct members of type [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) are allocated within libEMV_CTLS_Client. The next call to this function as well as a call to Exit Framework will invalidate the data pointers of the first result. For the same reason, this function is not thread-safe

This function can only be used if init option [EMV_CTLS_INIT_OPT_NEW_CFG_INTF](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-new-cfg-intf) was set. 

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg)[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

**Serialization:**![TLV_GetApplicationData.jpg](.//TLV_GetApplicationData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CTLS_ApplyConfiguration

```cpp
DLL_CLCEMV_ADK_INFO EMV_CTLS_ApplyConfiguration(
    unsigned long options
)
```

Transfer the stored configuration to reader. 

**Parameters**: 

  * **options** Configuration options, see [Options how to apply configuration (VFI reader only)](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md)

 TLV tag [TAG_DF8F0F_APPLYCONFIG_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0f-applyconfig-options)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap file corruption@ [EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap file persistence problem
[EMV_ADK_VIRTTERMMAP_WRONG_INIT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-virttermmap-wrong-init): virtual terminal map init has failed
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
**Serialization:**![TLV_ApplyConfiguration.jpg](.//TLV_ApplyConfiguration.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_APPLY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-apply-cfg)

**Author**: GSS R&D Germany

Only functional in context of VFI reader. 

 On velocity solution this function writes the configuration to file system if [EMV_CTLS_INIT_OPT_CONFIG_MODE](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-config-mode) was set.

Explanation in programmers guide: [Configure CTLS Application data]


### function EMV_CTLS_SetupTransaction

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
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


### function EMV_CTLS_TransparentCommand

```cpp
DLL_CLC unsigned char EMV_CTLS_TransparentCommand(
    unsigned short usInDataLen,
    unsigned char * pucDataIn,
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut
)
```

Transparently send a command to the reader and receive it's response. 

**Parameters**: 

  * **usInDataLenpucDataIn** ... reader command 
  * **pusOutDataLenpucDataOut** ... reader response


**Deprecated**: 

except for VFI reader on VOS-1

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucDataIn, pusOutDataLen or pucDataOut input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): not VFI reader

**Author**: GSS R&D Germany



This function has limited functionality. 

 In case the restrictions are not acceptable for your need: 

 Use [EMV_CTLS_TransparentSend()](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend) and [EMV_CTLS_TransparentReceive()](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive) instead. 

 Restrictions: 

* Internal timeout to wait for a response is 3 seconds. 
* Protocol 1 commands not supported. As these commands have (sometimes) double responses.


Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_TRANS](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-trans)


### function EMV_CTLS_TransparentSend

```cpp
DLL_CLC unsigned char EMV_CTLS_TransparentSend(
    unsigned short usInDataLen,
    unsigned char * pucDataIn
)
```

Transparently send a command to the reader. 

**Parameters**: 

  * **usInDataLenpucDataIn** ... reader command


**Deprecated**: 

except for VFI reader on VOS-1

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucDataIn input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): not VFI reader

**Author**: GSS R&D Germany



Use [EMV_CTLS_TransparentReceive()](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive) to fetch the response.

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_SEND](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-send)


### function EMV_CTLS_TransparentReceive

```cpp
DLL_CLC unsigned char EMV_CTLS_TransparentReceive(
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut
)
```

Transparent VFI reader access: Receive a response. 

**Parameters**: 

  * **pusOutDataLenpucDataOut** ... reader response


**Deprecated**: 

except for VFI reader on VOS-1

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pusOutDataLen or pucDataOut input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): not VFI reader

**Author**: GSS R&D Germany



A command can be sent with help of [EMV_CTLS_TransparentSend()](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend)

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_RECEIVE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-receive)


### function EMV_CTLS_SmartISO

```cpp
DLL_CLC unsigned char EMV_CTLS_SmartISO(
    unsigned char ucOptions,
    unsigned short usInDataLen,
    unsigned char * pucDataIn,
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut,
    unsigned short usOutBufferLength
)
```

Send chip card command and receive response. 

**Parameters**: 

  * **ucOptions** ... [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)
  * **usInDataLenpucDataIn** ... chip card command 
  * **usOutBufferLength** ... max length of output buffer 
  * **pusOutDataLenpucDataOut** ... chip card response


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md)

 additionally possible:
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucDataIn, pusOutDataLen or pucDataOut input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_ISO](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-iso)

[Explanation in programmers guide]


### function EMV_CTLS_SmartReset

```cpp
DLL_CLC unsigned char EMV_CTLS_SmartReset(
    unsigned char ucOptions,
    unsigned char * pucCardInfo,
    unsigned long * pnInfoLength
)
```

Detect if card is present in the RF field (read ATR) 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)
  * **pucCardInfo** Card type, 0: No card, 1: ISO14443A, 2: ISO14443B, for non-EMV values see OS header picc.h 

 appended if available and option [EMV_CTLS_RESET_NO_EMV](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-reset-no-emv): UID (1 byte data length, n byte data) 
  * **pnInfoLength** in: allocated size of pucCardInfo, out: Number of bytes written to pucCardInfo


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md)

 additionally possible:
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucCardInfo or pnInfoLength input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_RESET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-reset)

[Explanation in programmers guide]


### function EMV_CTLS_SmartPowerOff

```cpp
DLL_CLC unsigned char EMV_CTLS_SmartPowerOff(
    unsigned char ucOptions
)
```

Deactivate chip card. 

**Parameters**: 

  * **ucOptions** ... [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md)

 additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_OFF](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-off)

[Explanation in programmers guide]


### function EMV_CTLS_CardRemoval

```cpp
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


### function EMV_CTLS_LED_SetMode

```cpp
DLL_CLC unsigned char EMV_CTLS_LED_SetMode(
    unsigned char ucLedMode
)
```

Set mode of LED control. 

**Parameters**: 

  * **ucLedMode** LED mode, see [Defines for LED modes](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

**Note**: For special needs only. Usage of [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led) is possible without using this function.


Before starting a contactless transaction, it must be set to `CONTACTLESS_LED_MODE_EMV`. In case the application wants to switch LEDs independent of EMV, it may set the mode to `CONTACTLESS_LED_MODE_API`. The status is saved when switching to EMV mode at the beginning of a transaction and restored once switching back to API mode. This use case is optional. By default, the application may simply use the EMV mode. In EMV mode, the application has even the ability to change the LEDs after the end of the transaction (e.g. switch on idle blinking).

Transport tags used for serialization: [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)[INS_LED_MODE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-mode)


### function EMV_CTLS_LED

```cpp
DLL_CLC unsigned char EMV_CTLS_LED(
    unsigned char ucLedId,
    unsigned char ucLedState
)
```

Switch on LED. 

**Parameters**: 

  * **ucLedId** LED number, see [Defines for LED IDs](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md)

 This is a combination of LEDs. (use binary bitwise inclusive OR of LED-Bit-masks defined in [Defines for LED IDs](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md)) 

 Bits which are not defined in [Defines for LED IDs](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md) should be 0. They are reserved for future use and will be ignored. 
  * **ucLedState** LED state, see [Defines for LED states](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Using this function instead of ADK-GUI API ([ADK-GUI Programmers Guide]) may be useful as

* ADK-GUI does not control physical (hardware) LEDs
* in standard mode the SDI has control of the UI
* blinking functionality for 1st LED can be used
* application can use common code for terminals with and without physical LEDs
* "end of transaction" handling (e.g. [CONTACTLESS_LED_HANDLE_EOT_SUCCESS](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-success)) can be used for domestic cards

Transport tags used for serialization: [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)[INS_LED_SWITCH](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-switch)

[Explanation in programmers guide]


### function EMV_CTLS_LED_ConfigDesign

```cpp
DLL_CLC unsigned char EMV_CTLS_LED_ConfigDesign(
    unsigned short width,
    unsigned short height,
    unsigned char * color_off,
    unsigned char * color_on,
    unsigned short xRegion,
    unsigned short yRegion,
    unsigned short wRegion,
    unsigned short hRegion
)
```

Configure the desing for the framebuffer LEDs used for virtual CTLS LEDs  ** Only required when using virtual LEDs. **  . 

**Parameters**: 

  * **width** width of the rectangular LED 
  * **height** height of the rectangular LED 
  * **color_off** off color (24bit) (usually black == 0) 
  * **color_on** color of the LED (24bit) 
  * **xRegion** x coordinate of the LED Region (upper left corner) 
  * **yRegion** y coordinate of the LED Region (upper left corner) 
  * **wRegion** width of the LED Region 
  * **hRegion** height of the LED Region


**Deprecated**: 

The direct framebuffer approach is deprecated - use LED callbacks and LED-API from ADK-GUIPRT instead

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad color_off or color_on input params
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): terminal is not VOS or VOS2

**Author**: GSS R&D Germany



Transport tags used for serialization: [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)[INS_LED_CONF_DESIGN](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-conf-design)


### function EMV_CTLS_LED_ConfigDesign_Extended

```cpp
DLL_CLC unsigned char EMV_CTLS_LED_ConfigDesign_Extended(
    const EMV_CTLS_LED_CONFIG * led_config
)
```

Configure the design for the framebuffer LEDs used for virtual CTLS LEDs  ** Only required when using virtual LEDs. **  . 

**Parameters**: 

  * **led_config** LED configuration, see [EMV_CTLS_LED_CONFIG_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md)


**Deprecated**: 

The direct framebuffer approach is deprecated - use LED callbacks and LED-API from ADK-GUIPRT instead

**Return**: `0` ... okay 
`!=0` ... error 

**Author**: GSS R&D Germany



Coloured LEDs should be used together with [INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-led-ep-option-2).

Transport tags used for serialization: [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)[INS_LED_CONF_DESIGN](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-conf-design)


### function EMV_CTLS_Break

```cpp
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

```cpp
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

```cpp
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




## Macros Documentation

### define EMV_CTLS_KERNEL_VERSION_SIZE

```cpp
#define EMV_CTLS_KERNEL_VERSION_SIZE 255
```

Length of Contactless kernel version information. 

Max. length of [EMV_CTLS_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion)


### define DLL_CLC

```cpp
#define DLL_CLC 
```


### define EMV_CTLS_ADK_SETUP_START

```cpp
#define EMV_CTLS_ADK_SETUP_START 0x80
```

Initialization Setup. 

### define EMV_CTLS_ADK_SETUP_NO_CONTEXT

```cpp
#define EMV_CTLS_ADK_SETUP_NO_CONTEXT 0x81
```

Setup: context missing. 

### define EMV_CTLS_ADK_SETUP_NO_INIT

```cpp
#define EMV_CTLS_ADK_SETUP_NO_INIT 0x82
```

Setup: not initialized. 

### define EMV_CTLS_ADK_SETUP_TERMDATA

```cpp
#define EMV_CTLS_ADK_SETUP_TERMDATA 0x83
```

Setup: terminal data not available. 

### define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY

```cpp
#define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY 0x85
```

Setup: above ceiling limit EMV. 

### define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM

```cpp
#define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM 0x86
```

Setup: above ceiling limit no domestic app. 

### define EMV_CTLS_ADK_SETUP_RND_FAIL

```cpp
#define EMV_CTLS_ADK_SETUP_RND_FAIL 0x87
```

Setup: RND failed. 

### define EMV_CTLS_ADK_SETUP_DETECT

```cpp
#define EMV_CTLS_ADK_SETUP_DETECT 0x88
```

Setup: detect failed. 

### define EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL

```cpp
#define EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL 0x89
```

Setup: txn setup failure. 

### define EMV_CTLS_ADK_SETUP_OK

```cpp
#define EMV_CTLS_ADK_SETUP_OK 0x8A
```

Setup: OK. 

### define EMV_CTLS_ADK_TXN_START

```cpp
#define EMV_CTLS_ADK_TXN_START 0xA0
```

TXN: Start. 

### define EMV_CTLS_ADK_TXN_NO_ATR

```cpp
#define EMV_CTLS_ADK_TXN_NO_ATR 0xA1
```

TXN: no ATR. 

### define EMV_CTLS_ADK_TXN_2_CARDS

```cpp
#define EMV_CTLS_ADK_TXN_2_CARDS 0xA2
```

TXN: 2 cards in field. 

### define EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY

```cpp
#define EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY 0xA3
```

TXN: empty candidate list of terminal. 

### define EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED

```cpp
#define EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED 0xA4
```

TXN: a single domestic app is selected. 

### define EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL

```cpp
#define EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL 0xA5
```

TXN: single domestic app failed. 

### define EMV_CTLS_ADK_TXN_L1_DIR_READING

```cpp
#define EMV_CTLS_ADK_TXN_L1_DIR_READING 0xA6
```

TXN: L1 error at directory reading. 

### define EMV_CTLS_ADK_TXN_L1_CAND_LIST

```cpp
#define EMV_CTLS_ADK_TXN_L1_CAND_LIST 0xA7
```

TXN: L1 error candidate list building. 

### define EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED

```cpp
#define EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED 0xA8
```

TXN: domestic application selection failed. 

### define EMV_CTLS_ADK_TXN_DOM_APP_SELECTED

```cpp
#define EMV_CTLS_ADK_TXN_DOM_APP_SELECTED 0xA9
```

TXN: domestic application selected. 

### define EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST

```cpp
#define EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST 0xAA
```

TXN: empty combo list. 

### define EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL

```cpp
#define EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL 0xAB
```

TXN: domestic app select failed no final select issued. 

### define EMV_CTLS_ADK_TXN_L1_FINAL_SELECT

```cpp
#define EMV_CTLS_ADK_TXN_L1_FINAL_SELECT 0xAC
```

TXN: L1 error final select. 

### define EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY

```cpp
#define EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY 0xAD
```

TXN: AID parameter reading failed, list empty. 

### define EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY

```cpp
#define EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY 0xAE
```

TXN: domestic app skipped, list empty. 

### define EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY

```cpp
#define EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY 0xAF
```

TXN: emv app skipped, list empty. 

### define EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK

```cpp
#define EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK 0xB0
```

TXN: domestic application with final select ok. 

### define EMV_CTLS_ADK_TXN_UNKNOW_KERNEL

```cpp
#define EMV_CTLS_ADK_TXN_UNKNOW_KERNEL 0xB1
```

TXN: unknown kernel. 

### define EMV_CTLS_ADK_TXN_EP_INIT_FAILED

```cpp
#define EMV_CTLS_ADK_TXN_EP_INIT_FAILED 0xB2
```

TXN: Entry Point Init failed. 

### define EMV_CTLS_ADK_TXN_LIST_ITERATION_KO

```cpp
#define EMV_CTLS_ADK_TXN_LIST_ITERATION_KO 0xB3
```

TXN: error list iteration. 

### define EMV_CTLS_ADK_TXN_CANDIDATE_EVAL

```cpp
#define EMV_CTLS_ADK_TXN_CANDIDATE_EVAL 0xB4
```

TXN: candidate list evaluation. 

### define EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT

```cpp
#define EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT 0xB5
```

TXN: final select. 

### define EMV_CTLS_ADK_TXN_MK_START

```cpp
#define EMV_CTLS_ADK_TXN_MK_START 0xC0
```

TXN: Start of PayPass. 

### define EMV_CTLS_ADK_TXN_MK_NEW_SEL

```cpp
#define EMV_CTLS_ADK_TXN_MK_NEW_SEL 0xC1
```

TXN: new select. 

### define EMV_CTLS_ADK_TXN_MK_RETAP_START

```cpp
#define EMV_CTLS_ADK_TXN_MK_RETAP_START 0xC2
```

TXN: retap required. 

### define EMV_CTLS_ADK_TXN_MK_MOBILE_START

```cpp
#define EMV_CTLS_ADK_TXN_MK_MOBILE_START 0xC3
```

TXN: mobile requested. 

### define EMV_CTLS_ADK_TXN_MK_L1_START

```cpp
#define EMV_CTLS_ADK_TXN_MK_L1_START 0xC4
```

TXN: L1 error. 

### define EMV_CTLS_ADK_TXN_MK_RETAP_MSD

```cpp
#define EMV_CTLS_ADK_TXN_MK_RETAP_MSD 0xC5
```

TXN: retap reuired MSD. 

### define EMV_CTLS_ADK_TXN_MK_MOBILE_MSD

```cpp
#define EMV_CTLS_ADK_TXN_MK_MOBILE_MSD 0xC6
```

TXN: mobile requested MSD. 

### define EMV_CTLS_ADK_TXN_MK_L1_MSD

```cpp
#define EMV_CTLS_ADK_TXN_MK_L1_MSD 0xC7
```

TXN: L1 error MSD. 

### define EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD

```cpp
#define EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD 0xC8
```

TXN: no data MSD. 

### define EMV_CTLS_ADK_TXN_MK_DECLINE_MSD

```cpp
#define EMV_CTLS_ADK_TXN_MK_DECLINE_MSD 0xC9
```

TXN: decline MSD. 

### define EMV_CTLS_ADK_TXN_MK_OK_MSD

```cpp
#define EMV_CTLS_ADK_TXN_MK_OK_MSD 0xCA
```

TXN: ok MSD. 

### define EMV_CTLS_ADK_TXN_MK_ONLINE_MSD

```cpp
#define EMV_CTLS_ADK_TXN_MK_ONLINE_MSD 0xCB
```

TXN: online MSD. 

### define EMV_CTLS_ADK_TXN_MK_OTHER_MSD

```cpp
#define EMV_CTLS_ADK_TXN_MK_OTHER_MSD 0xCC
```

TXN: other MSD. 

### define EMV_CTLS_ADK_TXN_MK_RETAP_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_RETAP_CHP 0xCD
```

TXN: retap reuired CHP. 

### define EMV_CTLS_ADK_TXN_MK_MOBILE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_MOBILE_CHP 0xCE
```

TXN: mobile requested CHP. 

### define EMV_CTLS_ADK_TXN_MK_L1_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_L1_CHP 0xCF
```

TXN: L1 error CHP. 

### define EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP 0xD0
```

TXN: card data read CHP. 

### define EMV_CTLS_ADK_TXN_MK_DECLINE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_DECLINE_CHP 0xD1
```

TXN: decline CHP. 

### define EMV_CTLS_ADK_TXN_MK_ONLINE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_ONLINE_CHP 0xD2
```

TXN: online CHP. 

### define EMV_CTLS_ADK_TXN_MK_OK_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_OK_CHP 0xD3
```

TXN: ok CHP. 

### define EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP 0xD4
```

TXN: use other interface. 

### define EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP 0xD5
```

TXN: new select CHP. 

### define EMV_CTLS_ADK_TXN_MK_OTHER_CHP

```cpp
#define EMV_CTLS_ADK_TXN_MK_OTHER_CHP 0xD6
```

TXN: other error CHP. 

### define EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC

```cpp
#define EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC 0xD7
```

TXN: decline start. 

### define EMV_CTLS_ADK_TXN_MK_FALLBACK_START

```cpp
#define EMV_CTLS_ADK_TXN_MK_FALLBACK_START 0xD8
```

TXN: fallback start. 

### define EMV_CTLS_ADK_TXN_MK_INIT_FAIL

```cpp
#define EMV_CTLS_ADK_TXN_MK_INIT_FAIL 0xD9
```

TXN: Init failed. 

### define EMV_CTLS_ADK_TXN_MK_GPO_RR

```cpp
#define EMV_CTLS_ADK_TXN_MK_GPO_RR 0xDA
```

TXN: Step ReadRecords and GPO. 

### define EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD

```cpp
#define EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD 0xDB
```

TXN: use other interface or other card. 

### define EMV_CTLS_ADK_TXN_VK_START

```cpp
#define EMV_CTLS_ADK_TXN_VK_START 0x10
```

TXN: Start of payWave. 

### define EMV_CTLS_ADK_TXN_VK_NEW_SEL

```cpp
#define EMV_CTLS_ADK_TXN_VK_NEW_SEL 0x11
```

TXN: new select. 

### define EMV_CTLS_ADK_TXN_VK_MOBILE_START

```cpp
#define EMV_CTLS_ADK_TXN_VK_MOBILE_START 0x12
```

TXN: mobile requested. 

### define EMV_CTLS_ADK_TXN_VK_L1_START

```cpp
#define EMV_CTLS_ADK_TXN_VK_L1_START 0x13
```

TXN: L1 error. 

### define EMV_CTLS_ADK_TXN_VK_L1_MSD

```cpp
#define EMV_CTLS_ADK_TXN_VK_L1_MSD 0x14
```

TXN: L1 error MSD. 

### define EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD

```cpp
#define EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD 0x15
```

TXN: Start of PayPass. 

### define EMV_CTLS_ADK_TXN_VK_DECLINE_MSD

```cpp
#define EMV_CTLS_ADK_TXN_VK_DECLINE_MSD 0x16
```

TXN: decline MSD. 

### define EMV_CTLS_ADK_TXN_VK_OK_MSD

```cpp
#define EMV_CTLS_ADK_TXN_VK_OK_MSD 0x17
```

TXN: ok MSD. 

### define EMV_CTLS_ADK_TXN_VK_ONLINE_MSD

```cpp
#define EMV_CTLS_ADK_TXN_VK_ONLINE_MSD 0x18
```

TXN: online MSD. 

### define EMV_CTLS_ADK_TXN_VK_OTHER_MSD

```cpp
#define EMV_CTLS_ADK_TXN_VK_OTHER_MSD 0x19
```

TXN: other error MSD. 

### define EMV_CTLS_ADK_TXN_VK_L1_CHP

```cpp
#define EMV_CTLS_ADK_TXN_VK_L1_CHP 0x1A
```

TXN: L1 error CHP. 

### define EMV_CTLS_ADK_TXN_VK_READCARD_CHP

```cpp
#define EMV_CTLS_ADK_TXN_VK_READCARD_CHP 0x1B
```

TXN: read card CHP. 

### define EMV_CTLS_ADK_TXN_VK_DECLINE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_VK_DECLINE_CHP 0x1C
```

TXN: decline CHP. 

### define EMV_CTLS_ADK_TXN_VK_ONLINE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_VK_ONLINE_CHP 0x1D
```

TXN: online CHP. 

### define EMV_CTLS_ADK_TXN_VK_OK_CHP

```cpp
#define EMV_CTLS_ADK_TXN_VK_OK_CHP 0x1E
```

TXN: ok CHP. 

### define EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP

```cpp
#define EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP 0x1F
```

TXN: fallback CHP. 

### define EMV_CTLS_ADK_TXN_VK_OTHER_CHP

```cpp
#define EMV_CTLS_ADK_TXN_VK_OTHER_CHP 0x20
```

TXN: other error CHP. 

### define EMV_CTLS_ADK_TXN_VK_DECLINE_START

```cpp
#define EMV_CTLS_ADK_TXN_VK_DECLINE_START 0x21
```

TXN: decline start. 

### define EMV_CTLS_ADK_TXN_VK_FALLBACK_START

```cpp
#define EMV_CTLS_ADK_TXN_VK_FALLBACK_START 0x22
```

TXN: fallback start. 

### define EMV_CTLS_ADK_TXN_VK_OTHER_START

```cpp
#define EMV_CTLS_ADK_TXN_VK_OTHER_START 0x23
```

TXN: other error start. 

### define EMV_CTLS_ADK_TXN_VK_INIT_FAIL

```cpp
#define EMV_CTLS_ADK_TXN_VK_INIT_FAIL 0x24
```

TXN: Init failed. 

### define EMV_CTLS_ADK_TXN_VK_GPO_RR

```cpp
#define EMV_CTLS_ADK_TXN_VK_GPO_RR 0x25
```

TXN: Step ReadRecords and GPO. 

### define EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2

```cpp
#define EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2 0x26
```

TXN: inconsisten track 2 and PAN. 

### define EMV_CTLS_ADK_TXN_VK_READCARD_MSD

```cpp
#define EMV_CTLS_ADK_TXN_VK_READCARD_MSD 0x27
```

TXN: card read MSD. 

### define EMV_CTLS_ADK_TXN_VK_RETAP_START

```cpp
#define EMV_CTLS_ADK_TXN_VK_RETAP_START 0x28
```

TXN: retap required. 

### define EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG

```cpp
#define EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG 0x29
```

TXN: fallback because of failed card log reading. 

### define EMV_CTLS_ADK_TXN_KERNEL_START

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_START 0x30
```

TXN: Start of Kernel Processing. 

### define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL 0x31
```

TXN: new select. 

### define EMV_CTLS_ADK_TXN_KERNEL_RETAP_START

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_RETAP_START 0x32
```

TXN: retap required. 

### define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START 0x33
```

TXN: mobile requested. 

### define EMV_CTLS_ADK_TXN_KERNEL_L1_START

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_L1_START 0x34
```

TXN: L1 error. 

### define EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD 0x35
```

TXN: retap reuired MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD 0x36
```

TXN: mobile requested MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_L1_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_L1_MSD 0x37
```

TXN: L1 error MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD 0x38
```

TXN: no data MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD 0x39
```

TXN: decline MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_OK_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_OK_MSD 0x3A
```

TXN: ok MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD 0x3B
```

TXN: online MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD 0x3C
```

TXN: other MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP 0x3D
```

TXN: retap reuired CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP 0x3E
```

TXN: mobile requested CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_L1_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_L1_CHP 0x3F
```

TXN: L1 error CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP 0x40
```

TXN: card data read CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP 0x41
```

TXN: decline CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP 0x42
```

TXN: online CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_OK_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_OK_CHP 0x43
```

TXN: ok CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP 0x44
```

TXN: use other interface. 

### define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP 0x45
```

TXN: new select CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP 0x46
```

TXN: other error CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC 0x47
```

TXN: decline start. 

### define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START 0x48
```

TXN: fallback start. 

### define EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL 0x49
```

TXN: Init failed. 

### define EMV_CTLS_ADK_TXN_KERNEL_GPO_RR

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_GPO_RR 0x4A
```

TXN: Step ReadRecords and GPO. 

### define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD 0x4B
```

TXN: use other card. 

### define EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP 0x4C
```

TXN: try Discover ZIP. 

### define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD 0x4D
```

TXN: fallback MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START 0x4E
```

TXN: decline before EOT. 

### define EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD 0x4F
```

TXN: read card MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP 0x50
```

TXN: use other interface or other card. 

### define EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD 0x51
```

TXN: use other interface or other card. 

### define EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP 0x52
```

TXN: advice merchant to use other terminal. 

### define EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS 0x53
```

TXN: card holder exceeded number of taps allowed for one transaction. 

### define EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI

```cpp
#define EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI 0x54
```

TXN: Interac bad FFI. 

### define EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY

```cpp
#define EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY 0x70
```

TXN: Gemalto, special transaction GET DATA finished okay. 

### define EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL

```cpp
#define EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL 0x71
```

TXN: Gemalto, special transaction GET DATA finished fail. 

### define EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY

```cpp
#define EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY 0x72
```

TXN: Gemalto, special transaction PUT DATA finished okay. 

### define EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL

```cpp
#define EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL 0x73
```

TXN: Gemalto, special transaction PUT DATA finished fail. 

### define EMV_CTLS_ADK_ONL_START

```cpp
#define EMV_CTLS_ADK_ONL_START 0xF0
```

Online: Start. 

### define EMV_CTLS_ADK_ONL_NO_CTLS_TXN

```cpp
#define EMV_CTLS_ADK_ONL_NO_CTLS_TXN 0xF1
```

Online: No Ctls transaction happened before call. 

### define EMV_CTLS_ADK_ONL_NO_HOST

```cpp
#define EMV_CTLS_ADK_ONL_NO_HOST 0xF2
```

Online: no answer from host. 

### define EMV_CTLS_ADK_ONL_HOST_OK

```cpp
#define EMV_CTLS_ADK_ONL_HOST_OK 0xF3
```

Online: host approved. 

### define EMV_CTLS_ADK_ONL_HOST_DECLINE

```cpp
#define EMV_CTLS_ADK_ONL_HOST_DECLINE 0xF4
```

Online: host declined. 

### define EMV_CTLS_ADK_ONL_HOST_SWITCH_IF

```cpp
#define EMV_CTLS_ADK_ONL_HOST_SWITCH_IF 0xF5
```

Online: Strong Consumer Authentication - switch interface. 

### define EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN

```cpp
#define EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN 0xF6
```

Online: Strong Consumer Authentication - Online PIN. 

### define EMV_CTLS_ADK_END_TXN

```cpp
#define EMV_CTLS_ADK_END_TXN 0xFE
```

TXN: End Transaction called. 

### define EMV_CTLS_ADK_STEP_01

```cpp
#define EMV_CTLS_ADK_STEP_01 1
```

sub step 1 

### define EMV_CTLS_ADK_STEP_02

```cpp
#define EMV_CTLS_ADK_STEP_02 2
```

sub step 2 

### define EMV_CTLS_ADK_STEP_03

```cpp
#define EMV_CTLS_ADK_STEP_03 3
```

sub step 3 

### define EMV_CTLS_ADK_STEP_04

```cpp
#define EMV_CTLS_ADK_STEP_04 4
```

sub step 4 

### define EMV_CTLS_ADK_STEP_05

```cpp
#define EMV_CTLS_ADK_STEP_05 5
```

sub step 5 

### define EMV_CTLS_ADK_STEP_06

```cpp
#define EMV_CTLS_ADK_STEP_06 6
```

sub step 6 

### define EMV_CTLS_ADK_STEP_07

```cpp
#define EMV_CTLS_ADK_STEP_07 7
```

sub step 7 

### define EMV_CTLS_ADK_STEP_08

```cpp
#define EMV_CTLS_ADK_STEP_08 8
```

sub step 8 

### define EMV_CTLS_ADK_STEP_09

```cpp
#define EMV_CTLS_ADK_STEP_09 9
```

sub step 9 

### define EMV_CTLS_ADK_STEP_10

```cpp
#define EMV_CTLS_ADK_STEP_10 10
```

sub step 10 

### define EMV_CTLS_ADK_STEP_11

```cpp
#define EMV_CTLS_ADK_STEP_11 11
```

sub step 11 

### define EMV_CTLS_ADK_STEP_12

```cpp
#define EMV_CTLS_ADK_STEP_12 12
```

sub step 12 

### define EMV_CTLS_ADK_STEP_13

```cpp
#define EMV_CTLS_ADK_STEP_13 13
```

sub step 13 

### define EMV_CTLS_ADK_STEP_14

```cpp
#define EMV_CTLS_ADK_STEP_14 14
```

sub step 14 

### define EMV_CTLS_ADK_STEP_15

```cpp
#define EMV_CTLS_ADK_STEP_15 15
```

sub step 15 

### define EMV_CTLS_ADK_STEP_16

```cpp
#define EMV_CTLS_ADK_STEP_16 16
```

sub step 16 

### define EMV_CTLS_ADK_STEP_17

```cpp
#define EMV_CTLS_ADK_STEP_17 17
```

sub step 17 

### define EMV_CTLS_ADK_STEP_18

```cpp
#define EMV_CTLS_ADK_STEP_18 18
```

sub step 18 

### define EMV_CTLS_ADK_STEP_19

```cpp
#define EMV_CTLS_ADK_STEP_19 19
```

sub step 19 

### define EMV_CTLS_ADK_STEP_20

```cpp
#define EMV_CTLS_ADK_STEP_20 20
```

sub step 20 

### define INPUT_CTLS_TRM_SUPPORTED_CTLS

```cpp
#define INPUT_CTLS_TRM_SUPPORTED_CTLS 0x01
```

B1b1: [EMV_CTLS_TERMDATA_STRUCT::CL_Modes_Supported](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-cl-modes-supported). 

### define INPUT_CTLS_TRM_TYPE

```cpp
#define INPUT_CTLS_TRM_TYPE 0x02
```

B1b2: [EMV_CTLS_TERMDATA_STRUCT::TermTyp](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp). 

### define INPUT_CTLS_TRM_CURRENCY

```cpp
#define INPUT_CTLS_TRM_CURRENCY 0x04
```

B1b3: [EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans). 

### define INPUT_CTLS_TRM_EXP_CURRENCY

```cpp
#define INPUT_CTLS_TRM_EXP_CURRENCY 0x08
```

B1b4: [EMV_CTLS_TERMDATA_STRUCT::ExpTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans). 

### define INPUT_CTLS_TRM_COUNTRY_CODE

```cpp
#define INPUT_CTLS_TRM_COUNTRY_CODE 0x10
```

B1b5: [EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-countrycodeterm). 

### define INPUT_CTLS_TRM_FLOW_OPTIONS

```cpp
#define INPUT_CTLS_TRM_FLOW_OPTIONS 0x20
```

B1b6: [EMV_CTLS_TERMDATA_STRUCT::FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions). 

### define INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT

```cpp
#define INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT 0x40
```

B1b7: [EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-maxctlstranslimit). 

### define INPUT_CTLS_TRM_BEEP_VOLUME

```cpp
#define INPUT_CTLS_TRM_BEEP_VOLUME 0x80
```

B1b8: [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume). 

### define INPUT_CTLS_TRM_LANGUAGES

```cpp
#define INPUT_CTLS_TRM_LANGUAGES 0x01
```

B2b1: [EMV_CTLS_TERMDATA_STRUCT::SuppLang](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang). 

### define INPUT_CTLS_TRM_IFD_SERIAL

```cpp
#define INPUT_CTLS_TRM_IFD_SERIAL 0x02
```

B2b2: [EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber). 

### define INPUT_CTLS_TRM_KERNEL_VERSION

```cpp
#define INPUT_CTLS_TRM_KERNEL_VERSION 0x04
```

B2b3: [EMV_CTLS_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion). 

### define INPUT_CTLS_TRM_FRAMEWORK_VERSION

```cpp
#define INPUT_CTLS_TRM_FRAMEWORK_VERSION 0x08
```

B2b4: [EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion). 

### define INPUT_CTLS_TRM_HOTLIST

```cpp
#define INPUT_CTLS_TRM_HOTLIST 0x10
```

B2b5: [EMV_CTLS_TERMDATA_STRUCT::Hotlist](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hotlist). 

### define INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS

```cpp
#define INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS 0x20
```

B2b6: [EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencysuccess). 

### define INPUT_CTLS_TRM_BEEP_FREQ_ALERT

```cpp
#define INPUT_CTLS_TRM_BEEP_FREQ_ALERT 0x40
```

B2b7: [EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencyalert). 

### define INPUT_CTLS_TRM_L1DRIVER_VERSION

```cpp
#define INPUT_CTLS_TRM_L1DRIVER_VERSION 0x80
```

B2b8: [EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion). 

### define INPUT_CTLS_TRM_SECOND_TAP_DELAY

```cpp
#define INPUT_CTLS_TRM_SECOND_TAP_DELAY 0x01
```

B3b1: [EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-secondtapdelay). 

### define INPUT_CTLS_TRM_HOST_COMM_TIMEOUT

```cpp
#define INPUT_CTLS_TRM_HOST_COMM_TIMEOUT 0x02
```

B3b2: [EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hostcommunicationtimeout). 

### define INPUT_CTLS_TRM_POI_INFORMATION

```cpp
#define INPUT_CTLS_TRM_POI_INFORMATION 0x04
```

B3b3: [EMV_CTLS_TERMDATA_STRUCT::poiInformation](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-poiinformation). 

### define CL_DISABLED

```cpp
#define CL_DISABLED 0x00
```

Contactless TXNs are disabled, all other contactless parameters are ignored. 

### define CL_MC_PAYPASS_CHIP

```cpp
#define CL_MC_PAYPASS_CHIP 0x01
```

Maestro Paypass enabled (chip only, e.g. Maestro definiton) 

### define CL_MC_PAYPASS_MSR

```cpp
#define CL_MC_PAYPASS_MSR 0x02
```

Mastercard Paypass enabled, msr only. 

### define CL_MC_PAYPASS_COMBINED

```cpp
#define CL_MC_PAYPASS_COMBINED 0x03
```

Mastercard Paypass enabled (MC mandates to support chip and msr per standard) 

### define CL_VISA_CHIP

```cpp
#define CL_VISA_CHIP 0x04
```

VISA qVSDC enabled (no magstripe, VISA mandates using chip only in Europe) 

### define CL_VISA_MSR

```cpp
#define CL_VISA_MSR 0x08
```

VISA magstripe enabled, msr only. 

### define CL_VISA_COMBINED

```cpp
#define CL_VISA_COMBINED 0x0C
```

VISA chip and magstripe enabled. 

### define CL_AMEX_COMBINED

```cpp
#define CL_AMEX_COMBINED 0x10
```

Amex enabled, chip and msr (this is the Amex default) 

### define CL_DISCOVER_ZIP

```cpp
#define CL_DISCOVER_ZIP 0x20
```

Discover Zip enabled (msr only system) 

### define CL_INTERAC

```cpp
#define CL_INTERAC 0x40
```

Interac (Canada) enabled (always chip and msr) 

### define CL_QPBOC_COMBINED

```cpp
#define CL_QPBOC_COMBINED 0x80
```

China PBOC/UnionPay enabled (msr and chip) 

### define CL_JCB

```cpp
#define CL_JCB 0x100
```

JCB enabled. 

### define CL_EPAL

```cpp
#define CL_EPAL 0x200
```

EPAL (Australia) enabled. 

### define CL_AMEX_MSR

```cpp
#define CL_AMEX_MSR 0x400
```

Amex enable, msr only enabled (either use Amex combined or Amex msr) 

### define CL_DISCOVER_DPAS_CHIP

```cpp
#define CL_DISCOVER_DPAS_CHIP 0x800
```

D-PAS (Discover) chip enabled, chip only. 

### define CL_DISCOVER_DPAS_MSR

```cpp
#define CL_DISCOVER_DPAS_MSR 0x1000
```

D-PAS (Discover) magstripe enabled, msr only. 

### define CL_DISCOVER_DPAS_COMBINED

```cpp
#define CL_DISCOVER_DPAS_COMBINED 0x1800
```

D-PAS (Discover) chip and magstripe enabled. 

### define CL_RUPAY

```cpp
#define CL_RUPAY 0x2000
```

RuPay (India) enabled. 

### define CL_JCB_EMV

```cpp
#define CL_JCB_EMV 0x4000
```

JCB with EMV mode. 

### define CL_JCB_LEGACY

```cpp
#define CL_JCB_LEGACY 0x8000
```

JCB with Legacy mode. 

### define CL_GEMALTO

```cpp
#define CL_GEMALTO 0x010000
```

Gemalto kernel. 

### define CL_GIROCARD

```cpp
#define CL_GIROCARD 0x020000
```

girocard (German debit brand) kernel based on PayPass 

### define CL_SIBS

```cpp
#define CL_SIBS 0x040000
```

SIBS (chip only) 

### define CL_PAGOBANCOMAT

```cpp
#define CL_PAGOBANCOMAT 0x080000
```

PagoBancomat. 

### define CL_MIR

```cpp
#define CL_MIR 0x100000
```

MIR. 

### define CL_SUPPORTED_VELOCITY

```cpp
#define CL_SUPPORTED_VELOCITY 0xFFFFFF
```

(used internally) 

### define CL_SUPPORTED_VFI

```cpp
#define CL_SUPPORTED_VFI 0xFFFFFF
```

(used internally) 

### define CL_ALL

```cpp
#define CL_ALL 0xFFFFFF
```

This can be used to configure Terminal to support all modes. 

### define CL_UNKNOWN

```cpp
#define CL_UNKNOWN 0x40000000
```

unknown kernel 

### define CL_APPS_KERNEL

```cpp
#define CL_APPS_KERNEL 0x80000000
```

kernel is handled by the application, entry point returns to app if this AID is selected 

### define INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE

```cpp
#define INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE 0x01
```

B1b1: Support for Visa wave    for VFI reader or enabling Raptor VISA AP kernel (PDOL decision)    Info: VFI reader tag DF64, 1FF0 and others - This feature is not configurable per AID only global. 

### define INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET

```cpp
#define INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET 0x02
```

B1b2: Support for Amex EMV or NON EMV market    Map to Byte2 BIT1 of Contactless Kernel Options(1FF0)    Info: VFI reader tag 1FF0 - This feature is not configurable per AID only global. 

### define INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT

```cpp
#define INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT 0x04
```

B1b3: VFI reader only: Use reader's UI scheme "default", as standard "EMEA" is used.    Visa Europe tests will fail if this is activated. But it's needed for display callback "L1 error" ([EMV_ADK_TXT_RETAP_SAME_L1](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-retap-same-l1)) 

### define INPUT_CTLS_TRM_IFD_SERIAL_USE_TID

```cpp
#define INPUT_CTLS_TRM_IFD_SERIAL_USE_TID 0x08
```

B1b4: Use the TID as IFD Serial number. Background: If application can not provide IFD_Serial this can be used as replacement to have a unique value available (not for VFI-Reader). 

### define INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE

```cpp
#define INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE 0x10
```

B1b5: Switch off Visa Europe work around for LED2. This option is like INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT but for VERTEX. 

### define INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2

```cpp
#define INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2 0x20
```

B1b6: Use LED scheme option 2 as defined in Entry Point spec [EMV BB]. Coloured LEDs similar to Visa Wave 2 (Visa Asia Pacific). For LED configuration see [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended). 

### define INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC

```cpp
#define INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC 0x40
```

B1b7: Use LED blinking scheme for Interac (Canada) 

### define INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL

```cpp
#define INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL 0x80
```

B1b8: VFI Reader final scenario "Fail" is forwarded to the application by returning EMV_ADK_VFI_FAIL instead of per default EMV_ADK_AAC. Additionnally the ADK provides the SW12 in T_DF64_KernelDebugData[0]&[1], VFI Reader Error Code in T_DF64_KernelDebugData[3], and VFI Reader RF State Code in T_DF64_KernelDebugData[30]. 

### define INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK

```cpp
#define INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK 0x01
```

B2b1: VFI Reader only: Disable the check according to D-PAS 1.0 Bulletin TAS-002 v1.0 which requires to consider the legacy Discover ZIP application as mandatory on any card/phone with the Discover/Diners D-PAS AID, and to reject the card if ZIP is not present. 

### define VISA_TTQ_MAGSTRIPE_SUPPORTED

```cpp
#define VISA_TTQ_MAGSTRIPE_SUPPORTED 0x80
```

B1b8: Contactless magnetic stripe (MSD) supported. 

### define VISA_TTQ_VSDC_SUPPORTED

```cpp
#define VISA_TTQ_VSDC_SUPPORTED 0x40
```

B1b7: Contactless VSDC supported. 

### define VISA_TTQ_qVSDC_SUPPORTED

```cpp
#define VISA_TTQ_qVSDC_SUPPORTED 0x20
```

B1b6: Contactless qVSDC supported. 

### define VISA_TTQ_CONTACT_VSDC_SUPPORTED

```cpp
#define VISA_TTQ_CONTACT_VSDC_SUPPORTED 0x10
```

B1b5: Contact VSDC supported. 

### define VISA_TTQ_OFFLINE_ONLY

```cpp
#define VISA_TTQ_OFFLINE_ONLY 0x08
```

B1b4: Reader is Offline Only. 

### define VISA_TTQ_ONLINE_PIN_SUPPORTED

```cpp
#define VISA_TTQ_ONLINE_PIN_SUPPORTED 0x04
```

B1b3: Online PIN supported. 

### define VISA_TTQ_SIGNATURE_SUPPORTED

```cpp
#define VISA_TTQ_SIGNATURE_SUPPORTED 0x02
```

B1b2: Signature supported. 

### define VISA_TTQ_ODA_ONLINE_SUPPORTED

```cpp
#define VISA_TTQ_ODA_ONLINE_SUPPORTED 0x01
```

B1b1: ODA for Online Authorizations supported. 

### define VISA_TTQ_ONLINE_FORCED

```cpp
#define VISA_TTQ_ONLINE_FORCED 0x80
```

B2b8: Online cryptogram required. 

### define VISA_TTQ_CVM_FORCED

```cpp
#define VISA_TTQ_CVM_FORCED 0x40
```

B2b7: CVM required. 

### define VISA_TTQ_CONTACT_PINOFFL

```cpp
#define VISA_TTQ_CONTACT_PINOFFL 0x20
```

B2b6: (Contact Chip) Offline PIN supported. 

### define TTQ_MAGSTRIPE_MODE_SUPPORTED

```cpp
#define TTQ_MAGSTRIPE_MODE_SUPPORTED 0x80
```

B1b8: Mag-stripe mode supported. 

### define TTQ_EMV_MODE_SUPPORTED

```cpp
#define TTQ_EMV_MODE_SUPPORTED 0x20
```

B1b6: EMV mode supported. 

### define TTQ_CONTACT_CHIP_SUPPORTED

```cpp
#define TTQ_CONTACT_CHIP_SUPPORTED 0x10
```

B1b5: EMV contact chip supported. 

### define TTQ_OFFLINE_ONLY

```cpp
#define TTQ_OFFLINE_ONLY 0x08
```

B1b4: Offline-only reader. 

### define TTQ_ONLINE_PIN_SUPPORTED

```cpp
#define TTQ_ONLINE_PIN_SUPPORTED 0x04
```

B1b3: Online PIN supported. 

### define TTQ_SIGNATURE_SUPPORTED

```cpp
#define TTQ_SIGNATURE_SUPPORTED 0x02
```

B1b2: Signature supported. 

### define TTQ_ODA_SUPPORTED

```cpp
#define TTQ_ODA_SUPPORTED 0x01
```

B1b1: Offline Data Authentication for Online Authorisations supported (WISE: without "for online") 

### define TTQ_ONLINE_CRYPTOGRAM_REQUIRED

```cpp
#define TTQ_ONLINE_CRYPTOGRAM_REQUIRED 0x80
```

B2b8: Online cryptogram required. 

### define TTQ_CVM_REQUIRED

```cpp
#define TTQ_CVM_REQUIRED 0x40
```

B2b7: CVM required. 

### define TTQ_CONTACT_OFFLINE_PIN

```cpp
#define TTQ_CONTACT_OFFLINE_PIN 0x20
```

B2b6: (Contact Chip) Offline PIN supported. 

### define TTQ_ISSUER_UPDATE_SUPPORTED

```cpp
#define TTQ_ISSUER_UPDATE_SUPPORTED 0x80
```

B3b8: Issuer Update Processing supported. 

### define TTQ_CD_CVM_SUPPORTED

```cpp
#define TTQ_CD_CVM_SUPPORTED 0x40
```

B3b7: Consumer Device CVM supported. 

### define VISA_DRL_DISABLE_ZERO_AMOUNT_CHECK

```cpp
#define VISA_DRL_DISABLE_ZERO_AMOUNT_CHECK 0x01
```

b1: bit set: VISA: Disable the Zero Amount Check for this DRL entry (Visa default is on) 

### define VISA_DRL_ENABLE_STATUS_CHECK

```cpp
#define VISA_DRL_ENABLE_STATUS_CHECK 0x02
```

b2: bit set: VISA: Enable the Status Check for this DRL entry (Visa default is off) 

### define VISA_AMEX_DRL_DISABLE_FLOOR_LIMIT_CHECK

```cpp
#define VISA_AMEX_DRL_DISABLE_FLOOR_LIMIT_CHECK 0x20
```

b6: bit set: AMEX and VISA: Disable the floor limit Check for this DRL entry (Default is on) 

### define VISA_AMEX_DRL_DISABLE_TRANS_LIMIT_CHECK

```cpp
#define VISA_AMEX_DRL_DISABLE_TRANS_LIMIT_CHECK 0x40
```

b7: bit set: AMEX and VISA: Disable the transaction limit Check for this DRL entry (Default is on) 

### define VISA_AMEX_DRL_DISABLE_CV_LIMIT_CHECK

```cpp
#define VISA_AMEX_DRL_DISABLE_CV_LIMIT_CHECK 0x80
```

b8: bit set: AMEX and VISA: Disable the cardholder verification limit Check for this DRL entry (Default is on) 

### define EMV_ADK_DRL_ENTRIES_VISA

```cpp
#define EMV_ADK_DRL_ENTRIES_VISA 4
```

Maximal number of entries in [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01) supported for VFI-Reader configuration. 

### define EMV_ADK_DRL_ENTRIES_AMEX

```cpp
#define EMV_ADK_DRL_ENTRIES_AMEX 16
```

Maximal number of entries in [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01). 

### define EMV_ADK_PMSG_ENTRIES

```cpp
#define EMV_ADK_PMSG_ENTRIES 10
```


### define EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS

```cpp
#define EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS 25
```

Max. number of non-EMVCo-tags included in additional tags ([EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagstrm-dfab20) and [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagscrd-dfab21)) 

### define EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS

```cpp
#define EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS 1230
```

Calculation rule: max. tag value size + 10 bytes/tag. 

### define EMV_CTLS_MAX_TAGLIST_SIZE

```cpp
#define EMV_CTLS_MAX_TAGLIST_SIZE 20
```

Maximum number of tags in mandatory tag list, used for [EMV_CTLS_TAGLIST_STRUCT::tags](struct_e_m_v___c_t_l_s___t_a_g_l_i_s_t___s_t_r_u_c_t.md#variable-tags). 

### define EMV_CTLS_MAX_APP_VERS

```cpp
#define EMV_CTLS_MAX_APP_VERS 10
```

Maximum number of application versions. 

### define CTLS_APPLY_CFG_APPS

```cpp
#define CTLS_APPLY_CFG_APPS 0x00000001
```

Apply data from [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md) if something changed since last configuration to the reader. 

### define CTLS_APPLY_CFG_TERM

```cpp
#define CTLS_APPLY_CFG_TERM 0x00000002
```

Apply data from [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) if something changed since last configuration to the reader. 

### define CTLS_APPLY_CFG_CAPK

```cpp
#define CTLS_APPLY_CFG_CAPK 0x00000004
```

Apply data from [EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md) if something changed since last configuration to the reader. 

### define CTLS_APPLY_CFG_ALL

```cpp
#define CTLS_APPLY_CFG_ALL 0x00000007
```

Apply all configuration data if something changed since last configuration to the reader. 

### define CTLS_APPLY_CFG_FORCE

```cpp
#define CTLS_APPLY_CFG_FORCE 0x00000008
```

Apply all configuration data even in case nothing changed since last reader configuration. 

### define EMV_CTLS_KERN_EP

```cpp
#define EMV_CTLS_KERN_EP 0x00
```

Entry Point, not applicable for application configuration. 

### define EMV_CTLS_KERN_PK

```cpp
#define EMV_CTLS_KERN_PK 0x01
```

Visa Asia/Pacific. 

### define EMV_CTLS_KERN_MK

```cpp
#define EMV_CTLS_KERN_MK 0x02
```

PayPass (MasterCard, maestro, ...) 

### define EMV_CTLS_KERN_VK

```cpp
#define EMV_CTLS_KERN_VK 0x03
```

payWave (Visa, Visa electron, V-PAY, ...) 

### define EMV_CTLS_KERN_AK

```cpp
#define EMV_CTLS_KERN_AK 0x04
```

Expresspay (American Express) 

### define EMV_CTLS_KERN_JK

```cpp
#define EMV_CTLS_KERN_JK 0x05
```

JCB. 

### define EMV_CTLS_KERN_DK

```cpp
#define EMV_CTLS_KERN_DK 0x06
```

Discover. 

### define EMV_CTLS_KERN_CK

```cpp
#define EMV_CTLS_KERN_CK 0x07
```

China Union Pay (CUP, UnionPay International) 

### define EMV_CTLS_KERN_IK

```cpp
#define EMV_CTLS_KERN_IK 0x10
```

Interac (Canada) 

### define EMV_CTLS_KERN_EK

```cpp
#define EMV_CTLS_KERN_EK 0x11
```

EPAL (Australia) 

### define EMV_CTLS_KERN_RK

```cpp
#define EMV_CTLS_KERN_RK 0x12
```

RuPay (India) 

### define EMV_CTLS_KERN_GK

```cpp
#define EMV_CTLS_KERN_GK 0x13
```

gemalto PURE 

### define EMV_CTLS_KERN_PB

```cpp
#define EMV_CTLS_KERN_PB 0x14
```

PagoBANCOMAT (Italy) 

### define EMV_CTLS_KERN_WK

```cpp
#define EMV_CTLS_KERN_WK 0x16
```

reserved for WISE 

### define EMV_CTLS_KERN_BK

```cpp
#define EMV_CTLS_KERN_BK 0x17
```

reserved for CPACE 

### define EMV_CTLS_KERN_GC

```cpp
#define EMV_CTLS_KERN_GC 0x2A
```

girocard (Germany) 

### define EMV_CTLS_KERN_SAMA

```cpp
#define EMV_CTLS_KERN_SAMA 0x2D
```

Saudi Arabian Monetary Authority, automatically mapped to internal kernel Id [EMV_CTLS_KERN_GK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-gk). 

### define EMV_CTLS_KERN_CPACE

```cpp
#define EMV_CTLS_KERN_CPACE 0x2E
```

European Card Payment Cooperation AV, automatically mapped to internal kernel Id [EMV_CTLS_KERN_BK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-bk). 

### define EMV_CTLS_KERN_WLA

```cpp
#define EMV_CTLS_KERN_WLA 0x31
```

WLA kernel by IDEMIA, automatically mapped to internal kernel id [EMV_CTLS_KERN_WK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-wk). 

### define EMV_CTLS_KERN_DOM

```cpp
#define EMV_CTLS_KERN_DOM 0xF0
```

Domestic kernel. 

EMV ADK only handles application selection. Payment processing has to be done by calling application. 


### define EMV_CTLS_KERN_MR

```cpp
#define EMV_CTLS_KERN_MR 0x810643
```

MIR (Russia) 

### define EMV_CTLS_KERN_SK

```cpp
#define EMV_CTLS_KERN_SK 0xC1
```

SIBS (Portugal) 

**Deprecated**: 

use [EMV_CTLS_KERN_SB](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sb) instead 

### define EMV_CTLS_KERN_SB

```cpp
#define EMV_CTLS_KERN_SB 0xC14D42
```

SIBS MB (MULTIBANCO, Portugal) 

### define KERNEL_ID_TO_BYTE_ARRAY

```cpp
#define KERNEL_ID_TO_BYTE_ARRAY(
    kernelId,
    byteArray
)
if ((kernelId)<0xff)\
    {\
        byteArray[0] = (unsigned char) (kernelId);\
        byteArray[1] = 0;\
        byteArray[2] = 0;\
    }\
    else\
    {\
        byteArray[0] = (unsigned char) ((kernelId) >> 16);\
        byteArray[1] = (unsigned char) ((kernelId) >> 8);\
        byteArray[2] = (unsigned char) ((kernelId));\
    }
```


### define KERNEL_ID_TO_INT

```cpp
#define KERNEL_ID_TO_INT(
    byteArray
)
    ((byteArray[0] >= EMV_CTLS_KERN_DOM && byteArray[1] == 0 && byteArray[2] == 0)\
     ? EMV_CTLS_KERN_DOM :\
    ((byteArray[0] & 0x80) ? ((unsigned) byteArray[0] << 16) | ((unsigned) byteArray[1] << 8) | byteArray[2] : byteArray[0]))
```


### define EMV_CTLS_TEC_CHIP

```cpp
#define EMV_CTLS_TEC_CHIP 0x01
```

Chip Support. 

### define EMV_CTLS_TEC_MSR

```cpp
#define EMV_CTLS_TEC_MSR 0x02
```

MSR Support. 

### define EMV_CTLS_MK_CFG_NOMSR

```cpp
#define EMV_CTLS_MK_CFG_NOMSR 0x80
```

No MSR Support. 

### define EMV_CTLS_MK_CFG_NOCHIP

```cpp
#define EMV_CTLS_MK_CFG_NOCHIP 0x40
```

No Chip Support. 

### define EMV_CTLS_MK_CFG_ONDEVCVM

```cpp
#define EMV_CTLS_MK_CFG_ONDEVCVM 0x20
```

On Device Cardholder Verification Support. 

### define EMV_CTLS_MK_CFG_RRP

```cpp
#define EMV_CTLS_MK_CFG_RRP 0x10
```

Relay Resistance Protocal supported. 

### define EMV_CTLS_RK_CFG_ONDEVCVM

```cpp
#define EMV_CTLS_RK_CFG_ONDEVCVM 0x20
```

On Device Cardholder Verification Support. 

### define EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0

```cpp
#define EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0 0x01
```

B1b1: (Vel: y VFI: n) Do not perform the final select if the AID belongs to a nonEMV/Domestic kernel. 

### define EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0

```cpp
#define EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0 0x02
```

B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommended for CTLS txns because directory file is available) 

### define EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0

```cpp
#define EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0 0x04
```

B1b3: (Vel: y VFI: y) Support of cash transactions. 

### define EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0

```cpp
#define EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0 0x08
```

B1b4: (Vel: y VFI: y) Support of cashback transactions. 

### define EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0

```cpp
#define EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0 0x10
```

B1b5: (Vel: y VFI: n) Omit not allowed candidates already during Entry Point selection process, e.g. above CTLS transaction limit. However: Warning: The EP defines Contactless transaction Limit >=, while MasterCard PP3 defines it as >. So do not set it for MasterCard AIDs. 

### define EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0

```cpp
#define EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0 0x20
```

B1b6: (Vel: y VFI: n) Force Entry Point processing of the former EMVCo Entry Point specification. It has the effect like [EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-omit-not-allowed-selection-0) plus continue with START_B after L1 error at Combination Selection. 

### define EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0

```cpp
#define EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0 0x40
```

B1b7: (Vel: y VFI: n) Force Kernel ID to be used, even if EP tag 9F2A is available. 

### define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0

```cpp
#define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0 0x80
```

B1b8: (Vel: y VFI: y) List of AIDs method only if PPSE directory does not exist in a card with the corresponding AID. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0) is set. 

### define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1

```cpp
#define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1 0x01
```

B2b1: (Vel: n VFI: y) List of AIDs method only if PPSE directory exists in the card but a response for PPSE request was badly formatted and PPSE stage failed. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0) is set. 

### define EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1

```cpp
#define EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1 0x02
```

B2b2: (Vel: y VFI: y) If this bit is set then the reader will send an amount of zero to the card for card read transactions, otherwise the reader will send the normal amount. 

### define EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1

```cpp
#define EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1 0x04
```

B2b3: (Vel: y VFI: n) If this bit is set this AID will be skipped if requiring explicit cardholder selection. 

### define EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1

```cpp
#define EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1 0x08
```

B2b4: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped and the AID remains in the candidate list. 

### define EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1

```cpp
#define EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1 0x10
```

B2b5: (Vel: y VFI: n) Feature "Force online" supported (suspicious customer). This relates to Terminal Verification Result B4b4 "Merchant forced transaction online". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option [EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1

```cpp
#define EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1 0x20
```

B2b6: (Vel: y VFI: y) Wait for card removal at the end of an EMV transaction before returning to application (on TC, AAC and ARQC --> Card Read Complete) 

### define EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1

```cpp
#define EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1 0x40
```

B2b7: (Vel: y VFI: n) Start card removal procedure after kernel processing. This enables the service [EMV_CTLS_CardRemoval](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-cardremoval).    Only effective on deactivated [EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-wait-card-removal-end-1). 

### define EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1

```cpp
#define EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1 0x80
```

B2b8: (Vel: y VFI: n) Enable the Entry Point extended selection (9F29 is used if present on ICC) 

### define EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2

```cpp
#define EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2 0x01
```

B3b1: (Vel: y VFI: n) byte 3 of kernel id is used to store multiple configurations of same kernel Id-AID pair. If this flag is set the 3rd byte of the kernel id is set to zero in the Terminal Candidate List which is presented to the EntryPoint while the original value is used towards application interface. 

### define EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2

```cpp
#define EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2 0x02
```


B3b2: (Vel: y VFI: n) Do not apply business rule: "Cash back is online only". Instead rely on terminal and card risk management. Anyhow the application might force the transaction online by transaction flow option [EMV_CTLS_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 
**Caution**: For Visa like schemes (Visa, Visa-AP, Discover and UPI) this flag has a different effect: It suppresses the mandory reduction of the floor limit to zero. 


### define EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2

```cpp
#define EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2 0x04
```


B3b3: (Vel: y VFI: n) A custom transaction type ('9C') might be used during kernel processing in a virtual terminal for card read transactions. Therefore tag '9C' has to be configured to [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagstrm-dfab20). If this flag is raised the transaction type in the kernel database will be reset after completion (e.g. to '20' for refund) in order to hide this modification from the outside world (vouchers, host messages) 


### define EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2

```cpp
#define EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2 0x08
```


B3b4: (Vel: y VFI: n) **Use with care**: Do not use card's application name (EMVCo rule: 9F12 prior to 50) but always use the default application label [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::DefaultApplicationName_DFAB22](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-defaultapplicationname-dfab22) in result data [EMV_CTLS_TRANSRES_STRUCT::AppName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname)


### define EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2

```cpp
#define EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2 0x10
```

B3b5: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped for card read transactions and the AID remains in the candidate list. 

### define EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0

```cpp
#define EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0 0x01
```

B1b1: (Vel: y VFI: y) Feature Read Balance before GenAC. 

### define EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0

```cpp
#define EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0 0x02
```

B1b2: (Vel: y VFI: y) Feature Read Balance after GenAC. 

### define EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0

```cpp
#define EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0 0x04
```

B1b3: (Vel: y VFI: n) Enable DataExchange ([TAG_BF0E_CBK_DATA_EXCHANGE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0e-cbk-data-exchange)) 

### define EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0

```cpp
#define EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0 0x08
```

B1b4: (Vel: y VFI: n) Transaction type 17 for MasterCard cash transactions. 



 Use [EMV_ADK_TRAN_TYPE_MASTERCARD_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-mastercard-cash) for cash transactions (initiated with [EMV_ADK_TRAN_TYPE_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cash)) 

 The modified transaction type is used towards card and put out in [EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 


### define EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0

```cpp
#define EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0 0x10
```

B1b5: (Vel: y VFI: n) On card read transaction do not force decline but let the kernel do TAC/IAC Action Analysis. 

### define EMV_CTLS_FLOW_VK_STATUS_CHECK_ENABLE_0

```cpp
#define EMV_CTLS_FLOW_VK_STATUS_CHECK_ENABLE_0 0x01
```

B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check) 

### define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_SKIP_0

```cpp
#define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_SKIP_0 0x02
```

B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, Option 2: skip AID for zero amount txns. Can't be combined with Option 2 in B1b3. 

### define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_ONLINE_0

```cpp
#define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_ONLINE_0 0x04
```

B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, Option 1: going online for zero amount txns. Can't be combined with Option 1 in B1b2. This is the default option. This is the prioritary option if both options are set. 

### define EMV_CTLS_FLOW_VK_CHECK_INCONS_TRACK2_PAN_0

```cpp
#define EMV_CTLS_FLOW_VK_CHECK_INCONS_TRACK2_PAN_0 0x08
```

B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT. 

### define EMV_CTLS_FLOW_VK_CASHBACK_NOT_FORCED_CVM_0

```cpp
#define EMV_CTLS_FLOW_VK_CASHBACK_NOT_FORCED_CVM_0 0x10
```

B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. 

### define EMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE

```cpp
#define EMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE 0x20
```

B1b6: 

**Deprecated**: 

: If GPO results in AAC: default was changed to sound solely success tone 

### define EMV_CTLS_FLOW_VK_ALERT_TONE_ON_DECLINE

```cpp
#define EMV_CTLS_FLOW_VK_ALERT_TONE_ON_DECLINE 0x40
```


B1b7: (Vel: y VFI: n) Per default the tone indicates if card read successful or not. Outcome of the transaction is not indicated. With this option an additional alert tone is sounded in case transaction is declined. 


### define EMV_CTLS_FLOW_VK_GET_DATA_9F68_0

```cpp
#define EMV_CTLS_FLOW_VK_GET_DATA_9F68_0 0x80
```

B1b8: (Vel: y VFI: n) Card Read Flow initiated with [EMV_ADK_TRAN_TYPE_READ_CARD_DATA](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-data) for retrieval of tag 9F68 (Card Additional Processes) 

### define EMV_CTLS_FLOW_VK_ENABLE_TAGS_AT_GPO

```cpp
#define EMV_CTLS_FLOW_VK_ENABLE_TAGS_AT_GPO 0x01
```

B2b1: (Vel: y VFI: n) Apply workaround that Visa kernel up to version 2.1.5 accepts certain tags at GPO step. These are 9F07 & 5F28 for instance. 

### define EMV_CTLS_FLOW_VK_ZERO_CHECK_DISABLE_1

```cpp
#define EMV_CTLS_FLOW_VK_ZERO_CHECK_DISABLE_1 0x02
```

B2b2: (Vel: y VFI: n) Disable Visa zero check. 

### define EMV_CTLS_FLOW_VK_ODO_SUPPORT_1

```cpp
#define EMV_CTLS_FLOW_VK_ODO_SUPPORT_1 0x08
```

B2b4: (Vel: y VFI n) VK2.2.3 only: Enable Offline Data Authentication for online transactions (ODO) according "Visa ODA for qVSDC Online Specification". Note: To enable this feature, additionally TTQ B1b1 (9F66, Offline Data Authentication for Online Authorizations supported) must be set. 

### define EMV_CTLS_FLOW_VK_ODO_SDA_1

```cpp
#define EMV_CTLS_FLOW_VK_ODO_SDA_1 0x10
```

B2b5: (Vel: y VFI n) VK2.2.3 only: Enable SDA for ODO. 

### define EMV_CTLS_FLOW_VK_ODO_DDA_1

```cpp
#define EMV_CTLS_FLOW_VK_ODO_DDA_1 0x20
```

B2b6: (Vel: y VFI n) VK2.2.3 only: Enable fDDA for ODO. 

### define EMV_CTLS_FLOW_VK_ODO_SDA_ERR_ONLINE_1

```cpp
#define EMV_CTLS_FLOW_VK_ODO_SDA_ERR_ONLINE_1 0x40
```

B2b7: (Vel: y VFI n) VK2.2.3 only: Outcome for ODO SDA error: 0 = Decline, 1 = Go online. 

### define EMV_CTLS_FLOW_VK_ODO_DDA_ERR_ONLINE_1

```cpp
#define EMV_CTLS_FLOW_VK_ODO_DDA_ERR_ONLINE_1 0x80
```

B2b8: (Vel: y VFI n) VK2.2.3 only: Outcome for ODO fDDA error: 0 = Decline, 1 = Go online. 

### define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASH_2

```cpp
#define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASH_2 0x01
```

B3b1: (Vel: y VFI n) Omit AUC "International Cash" check. 

### define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASHBACK_2

```cpp
#define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASHBACK_2 0x02
```

B3b2: (Vel: y VFI n) Omit AUC "International Cashback" check. 

### define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASH_2

```cpp
#define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASH_2 0x04
```

B3b3: (Vel: y VFI n) Omit AUC "Domestic Cash" check. 

### define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASHBACK_2

```cpp
#define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASHBACK_2 0x08
```

B3b4: (Vel: y VFI n) Omit AUC "Domestic Cashback" check. 

### define EMV_CTLS_FLOW_VK_ZERO_CASHBACK_AMOUNT_2

```cpp
#define EMV_CTLS_FLOW_VK_ZERO_CASHBACK_AMOUNT_2 0x10
```

B3b5: (Vel: y VFI n) Set Cashback amount to zero for Cashback transactions. Workaround to allow Cashback transactions with Russian cards not supporting domestic Cashback. 

### define EMV_CTLS_FLOW_VK_CASHBACK_TRANS_TYPE_09_2

```cpp
#define EMV_CTLS_FLOW_VK_CASHBACK_TRANS_TYPE_09_2 0x20
```

B3b6: (Vel: y VFI n) Use Transaction Type 09 for cashback transactions. VCSP 2.2 mandates Transaction Type 00. 

### define EMV_CTLS_FLOW_VK_QUASI_CASH_2

```cpp
#define EMV_CTLS_FLOW_VK_QUASI_CASH_2 0x40
```

B3b7: (Vel: y VFI n) Convert transaction type from '01' to '11' indicating VISA Quasi Cash. If supported by L2 kernel AUC checks for cash will be applied. 

### define EMV_CTLS_FLOW_VK_DO_NOT_CFG_9F21_TIME_2

```cpp
#define EMV_CTLS_FLOW_VK_DO_NOT_CFG_9F21_TIME_2 0x80
```

B3b8: (Vel: y VFI n) Set Transaction Time tag 9F21 to "000000". 

### define EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0

```cpp
#define EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0 0x01
```

B1b1: (Vel: y VFI: n) Card read transaction (e.g. refund): request ARQC in GENAC1, usually AAC is requested. 

### define EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0

```cpp
#define EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0 0x02
```

B1b2: (Vel: y VFI: n) Amex Pre-Authorization with transaction type 30. 

**Note**: Pre-Authorization and reservation transactions are equivalent. They are initiated with [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a) or [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b). 



 Use [EMV_ADK_TRAN_TYPE_AMEX_PREAUTH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-amex-preauth) for pre-authorization resp. reservation transactions 

 The modified transaction type is used towards card and put out in [EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 


### define EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0

```cpp
#define EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0 0x04
```

B1b3: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check) 

### define EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0

```cpp
#define EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0 0x08
```

B1b4: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns. 

### define EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0

```cpp
#define EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0 0x10
```


### define EMV_CTLS_FLOW_JK_MULTIPLE_RANDOM_NUMBERS_0

```cpp
#define EMV_CTLS_FLOW_JK_MULTIPLE_RANDOM_NUMBERS_0 0x01
```

B1b1: (Vel: y VFI: ?) Generate new random number ('9F37') with each kernel activation, that is 2nd GAC. 

### define EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0

```cpp
#define EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0 0x01
```

B1b1: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. 

### define EMV_CTLS_FLOW_DK_DATA_STORAGE_0

```cpp
#define EMV_CTLS_FLOW_DK_DATA_STORAGE_0 0x02
```

B1b2: (Vel: y VFI: n) DPAS-2: Activate kernel feature Data Storage. 

### define EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0

```cpp
#define EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0 0x04
```

B1b3: (Vel: y VFI: n) DPAS-2: Activate kernel feature Extended Logging. 

### define EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0

```cpp
#define EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0 0x08
```

B1b4: (Vel: y VFI: n) DPAS-2: Activate kernel feature Torn Transaction Recovery. 

### define EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0

```cpp
#define EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0 0x10
```

B1b5: (Vel: y VFI: n) DPAS-2: Activate kernel feature Deferred Authorisation. 

### define EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0

```cpp
#define EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0 0x20
```

B1b6: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check) 

### define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0

```cpp
#define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0 0x40
```

B1b7: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-online-0). 

### define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0

```cpp
#define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0 0x80
```

B1b8: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-skip-0). 

### define EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0

```cpp
#define EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0 0x01
```

B1b1: (Vel: y VFI: n) On first GAC do request CDA despite cryptogram type is ARQC (P1 = '90'). 

### define EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0

```cpp
#define EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0 0x02
```

B1b2: (Vel: y VFI: n) Do not force AppAction to decline and do not modify and TAC or limit. Note: Unless otherwise specified by regional needs, Interac flow should be enabled for Interac AIDs. 

### define EMV_CTLS_FLOW_EK_READ_CARD_REFUND_0

```cpp
#define EMV_CTLS_FLOW_EK_READ_CARD_REFUND_0 0x01
```

B1b1: (Vel: y VFI: n) Work-around: Use transaction type refund for card read transactions as the terminal ignores AppAction parameter. 

### define EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0

```cpp
#define EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0 0x01
```

B1b1: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT. 

### define EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0

```cpp
#define EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0 0x02
```

B1b2: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. 

### define EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0

```cpp
#define EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0 0x01
```

B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check) 

### define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0

```cpp
#define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0 0x02
```

B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount. 

### define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0

```cpp
#define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0 0x04
```

B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns. 

### define EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0

```cpp
#define EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0 0x08
```

B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT. 

### define EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0

```cpp
#define EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0 0x10
```

B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. 

### define EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0

```cpp
#define EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0 0x20
```

B1b6: (Vel: y VFI: n) Per default the legacy fDDA version 0 is switched off. If you want to support it on top of the up date fDDA version 1. you can enable it by setting this bit. 

### define EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0

```cpp
#define EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0 0x40
```

B1b7: (Vel: y VFI: y) Do not ask for online PIN and Signature for transactions below CVM Limit when this was requested by card. This bit should be set for Credit / Quasi Credit AIDs according to Ref. "UPI QuickPass Implementation Guide for Acquirers v1.3.9": Terminals shall not ask for online PIN when all of below situations are met -QuickPass credit/Quasi credit cards are accepted, -Contactless transaction amount is below CVM limit of the terminal. 

### define EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0

```cpp
#define EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0 0x01
```

B1b1: (Vel: y VFI: y) Support for special transaction type "Application Authentication Transaction", see also [EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-authenticate). 

### define EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0

```cpp
#define EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0 0x02
```

B1b2: (Vel: y VFI: y) Support for special transaction type "Retrieve application data elements using GET DATA command", see also [EMV_CTLS_TRAN_TYPE_PURE_GETDATA](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-getdata), leads to invocation of [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data). 

### define EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0

```cpp
#define EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0 0x04
```

B1b3: (Vel: y VFI: y) Support for special transaction type "Update application data elements using PUT DATA command", see also [EMV_CTLS_TRAN_TYPE_PURE_PUTDATA](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-putdata), leads to invocation of [TAG_BF18_CBK_PURE_GET_PUT_DATA](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf18-cbk-pure-get-put-data). 

### define EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0

```cpp
#define EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0 0x08
```

B1b4: (Vel: y VFI: n) Vietnam VCCS special feature: Multiply amount by 100 before using it in GENAC1. 

### define EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0

```cpp
#define EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0 0x01
```

B1b1: (Vel: y VFI: y) Rupay Service Feature Enable/Disable. 

### define EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0

```cpp
#define EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0 0x02
```

B1b2: (Vel: y VFI: y) Rupay Torn Transaction Indicator. 

### define EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0

```cpp
#define EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0 0x04
```

B1b3: (Vel: n VFI: y) Perform READ RECORD of SFI 1 only when qDDA is disabled. 

### define EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0

```cpp
#define EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0 0x08
```

B1b4: (Vel: y VFI: n) Generate new random number ('9F37') with each kernel activation, that is 2nd GAC. 

### define EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0

```cpp
#define EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0 0x10
```

B1b5: (Vel: y VFI: n) Online PIN supported. 

### define EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0

```cpp
#define EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0 0x20
```

B1b6: (Vel: y VFI: n) Signature supported. 

### define EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0

```cpp
#define EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0 0x40
```

B1b7: (Vel: y VFI: n) On-Device CVM (mobile CVM) supported. 

### define EMV_CTLS_FLOW_RK_CVM_REQUIRED_0

```cpp
#define EMV_CTLS_FLOW_RK_CVM_REQUIRED_0 0x80
```

B1b8: (Vel: y VFI: n) CVM required, transaction will fail in case card decision is "no CVM) 

### define EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1

```cpp
#define EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1 0x01
```

B2b1: (Vel: y VFI: n) Issuer script processing supported. 

### define EMV_CTLS_FLOW_WK_STATUS_CHECK_ENABLE_0

```cpp
#define EMV_CTLS_FLOW_WK_STATUS_CHECK_ENABLE_0 0x01
```

B1b1: Enable status check for one single unit of currency (one major currency unit, e.g. 1€ is going online for status check). If TTQ 'online capable reader' is not set, 'Contactless Application Not Allowed' indicator will be set. 

### define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_SKIP_0

```cpp
#define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_SKIP_0 0x02
```

B1b2: Enable zero check for zero amount transaction, Option 2: Set 'Contactless Application Not Allowed' indicator. 

### define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_ONLINE_0

```cpp
#define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_ONLINE_0 0x04
```

B1b3: Enable zero check for zero amount transaction, Option 1: Set TTQ 'Online cryptogram required', only possible if TTQ 'online capable reader' is set, otherwise 'Contactless Application Not Allowed' indicator is set. 

### define EMV_CTLS_FLOW_WK_NO_CDCVM

```cpp
#define EMV_CTLS_FLOW_WK_NO_CDCVM 0x08
```

B1b4: Do not set TTQ B3b7. 

### define EMV_CTLS_APPLIDATA_GC_TYPE

```cpp
#define EMV_CTLS_APPLIDATA_GC_TYPE EMV_CTLS_APPLIDATA_MK_TYPE
```


### define INPUT_CTLS_APL_MK_9F1C_0

```cpp
#define INPUT_CTLS_APL_MK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_MK_9F1A_0

```cpp
#define INPUT_CTLS_APL_MK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_MK_9F35_0

```cpp
#define INPUT_CTLS_APL_MK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_MK_9F40_0

```cpp
#define INPUT_CTLS_APL_MK_9F40_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_MK_DF811E_0

```cpp
#define INPUT_CTLS_APL_MK_DF811E_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_aboveLimit_DF811E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-abovelimit-df811e). 

### define INPUT_CTLS_APL_MK_DF812C_0

```cpp
#define INPUT_CTLS_APL_MK_DF812C_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_belowLimit_DF812C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-belowlimit-df812c). 

### define INPUT_CTLS_APL_MK_DF8118_0

```cpp
#define INPUT_CTLS_APL_MK_DF8118_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-abovelimit-df8118). 

### define INPUT_CTLS_APL_MK_DF8119_0

```cpp
#define INPUT_CTLS_APL_MK_DF8119_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-belowlimit-df8119). 

### define INPUT_CTLS_APL_MK_DF811F_1

```cpp
#define INPUT_CTLS_APL_MK_DF811F_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-securitycapability-df811f). 

### define INPUT_CTLS_APL_MK_DF8117_1

```cpp
#define INPUT_CTLS_APL_MK_DF8117_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-carddatainputcapability-df8117). 

### define INPUT_CTLS_APL_MK_DF8123_1

```cpp
#define INPUT_CTLS_APL_MK_DF8123_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-floorlimit-df8123). 

### define INPUT_CTLS_APL_MK_DF8124_1

```cpp
#define INPUT_CTLS_APL_MK_DF8124_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitnoondevice-df8124). 

### define INPUT_CTLS_APL_MK_DF8125_1

```cpp
#define INPUT_CTLS_APL_MK_DF8125_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitondevice-df8125). 

### define INPUT_CTLS_APL_MK_DF8126_1

```cpp
#define INPUT_CTLS_APL_MK_DF8126_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126). 

### define INPUT_CTLS_APL_MK_9F09_1

```cpp
#define INPUT_CTLS_APL_MK_9F09_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipVersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipversionnumber-9f09). 

### define INPUT_CTLS_APL_MK_9F6D_1

```cpp
#define INPUT_CTLS_APL_MK_9F6D_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-msrversionnumber-9f6d). 

### define INPUT_CTLS_APL_MK_DF811B_2

```cpp
#define INPUT_CTLS_APL_MK_DF811B_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b). 

### define INPUT_CTLS_APL_MK_9F53_2

```cpp
#define INPUT_CTLS_APL_MK_9F53_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionCategoryCode_9F53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactioncategorycode-9f53). 

### define INPUT_CTLS_APL_MK_DF8120_2

```cpp
#define INPUT_CTLS_APL_MK_DF8120_2 0x04
```

B3b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdefault-df8120). 

### define INPUT_CTLS_APL_MK_DF8121_2

```cpp
#define INPUT_CTLS_APL_MK_DF8121_2 0x08
```

B3b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdenial-df8121). 

### define INPUT_CTLS_APL_MK_DF8122_2

```cpp
#define INPUT_CTLS_APL_MK_DF8122_2 0x10
```

B3b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-taconline-df8122). 

### define INPUT_CTLS_APL_MK_DF810C_2

```cpp
#define INPUT_CTLS_APL_MK_DF810C_2 0x20
```

B3b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelid-df810c). 

### define INPUT_CTLS_APL_MK_9F1D_2

```cpp
#define INPUT_CTLS_APL_MK_9F1D_2 0x40
```

B3b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalRiskManagementData_9F1D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-terminalriskmanagementdata-9f1d). 

### define INPUT_CTLS_APL_MK_9F15_2

```cpp
#define INPUT_CTLS_APL_MK_9F15_2 0x80
```

B3b8: [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_MK_9F16_3

```cpp
#define INPUT_CTLS_APL_MK_9F16_3 0x01
```

B4b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16). 

### define INPUT_CTLS_APL_MK_9F4E_3

```cpp
#define INPUT_CTLS_APL_MK_9F4E_3 0x02
```

B4b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_MK_9F01_3

```cpp
#define INPUT_CTLS_APL_MK_9F01_3 0x04
```

B4b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01). 

### define INPUT_CTLS_APL_MK_DF8130_3

```cpp
#define INPUT_CTLS_APL_MK_DF8130_3 0x08
```

B4b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-holdtimevalue-df8130). 

### define INPUT_CTLS_APL_MK_DF812D_3

```cpp
#define INPUT_CTLS_APL_MK_DF812D_3 0x10
```

B4b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d). 

### define INPUT_CTLS_APL_MK_DF811C_3

```cpp
#define INPUT_CTLS_APL_MK_DF811C_3 0x20
```

B4b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionlifetime-df811c). 

### define INPUT_CTLS_APL_MK_DF811D_3

```cpp
#define INPUT_CTLS_APL_MK_DF811D_3 0x40
```

B4b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionnumber-df811d). 

### define INPUT_CTLS_APL_MK_DF8131_3

```cpp
#define INPUT_CTLS_APL_MK_DF8131_3 0x80
```

B4b8: [EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-phonemessagetable-df8131). 

### define INPUT_CTLS_APL_MK_DFAB31_4

```cpp
#define INPUT_CTLS_APL_MK_DFAB31_4 0x01
```

B5b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_MK_DF8112_4

```cpp
#define INPUT_CTLS_APL_MK_DF8112_4 0x02
```

B5b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstoread-df8112). 

### define INPUT_CTLS_APL_MK_FF8102_4

```cpp
#define INPUT_CTLS_APL_MK_FF8102_4 0x04
```

B5b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowritebeforegenac-ff8102). 

### define INPUT_CTLS_APL_MK_FF8103_4

```cpp
#define INPUT_CTLS_APL_MK_FF8103_4 0x08
```

B5b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowriteaftergenac-ff8103). 

### define INPUT_CTLS_APL_MK_DF8110_4

```cpp
#define INPUT_CTLS_APL_MK_DF8110_4 0x10
```

B5b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-proceedtofirstwriteflag-df8110). 

### define INPUT_CTLS_APL_MK_9F5C_4

```cpp
#define INPUT_CTLS_APL_MK_9F5C_4 0x20
```

B5b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-dsrequestedoperatorid-9f5c). 

### define INPUT_CTLS_APL_MK_DF8127_4

```cpp
#define INPUT_CTLS_APL_MK_DF8127_4 0x40
```

B5b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-detimeoutvalue-df8127). 

### define INPUT_CTLS_APL_MK_DF8132_5

```cpp
#define INPUT_CTLS_APL_MK_DF8132_5 0x01
```

B5b1: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-mingraceperiod-df8132). 

### define INPUT_CTLS_APL_MK_DF8133_5

```cpp
#define INPUT_CTLS_APL_MK_DF8133_5 0x02
```

B5b2: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-maxgraceperiod-df8133). 

### define INPUT_CTLS_APL_MK_DF8134_5

```cpp
#define INPUT_CTLS_APL_MK_DF8134_5 0x04
```

B5b3: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-capdu-df8134). 

### define INPUT_CTLS_APL_MK_DF8135_5

```cpp
#define INPUT_CTLS_APL_MK_DF8135_5 0x08
```

B5b4: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-rapdu-df8135). 

### define INPUT_CTLS_APL_MK_DF8136_5

```cpp
#define INPUT_CTLS_APL_MK_DF8136_5 0x10
```

B5b5: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-accuracythreshold-df8136). 

### define INPUT_CTLS_APL_MK_DF8137_5

```cpp
#define INPUT_CTLS_APL_MK_DF8137_5 0x20
```

B5b6: [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchthreshold-df8137). 

### define INPUT_CTLS_APL_MK_9F7C_5

```cpp
#define INPUT_CTLS_APL_MK_9F7C_5 0x40
```

B5b7: [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcustomdata-9f7c). 

### define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO

```cpp
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO 0x00
```

Kernel shall wait for DET signal, specification says that no DEK shall be sent. 

### define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES

```cpp
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES 0x01
```

Kernel shall proceed without sending DEK signal. 

### define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY

```cpp
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY 0xFF
```

Kernel shall send DEK signal before first write. 

### define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT

```cpp
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT 0xFE
```

Any other value makes the flag absent. Kernel shall act like [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-yes). 

### define INPUT_CTLS_APL_VK_9F1C_0

```cpp
#define INPUT_CTLS_APL_VK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_VK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_VK_9F1A_0

```cpp
#define INPUT_CTLS_APL_VK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_VK_9F35_0

```cpp
#define INPUT_CTLS_APL_VK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_VK_9F66_0

```cpp
#define INPUT_CTLS_APL_VK_9F66_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66). 

### define INPUT_CTLS_APL_VK_9F33_0

```cpp
#define INPUT_CTLS_APL_VK_9F33_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_VK_9F40_0

```cpp
#define INPUT_CTLS_APL_VK_9F40_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_VK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_VK_9F09_0

```cpp
#define INPUT_CTLS_APL_VK_9F09_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_VK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_VK_9F15_0

```cpp
#define INPUT_CTLS_APL_VK_9F15_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_VK_9F16_1

```cpp
#define INPUT_CTLS_APL_VK_9F16_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16). 

### define INPUT_CTLS_APL_VK_9F4E_1

```cpp
#define INPUT_CTLS_APL_VK_9F4E_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_VK_DFAB30_1

```cpp
#define INPUT_CTLS_APL_VK_DFAB30_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_VK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30). 

### define INPUT_CTLS_APL_VK_DFAB31_1

```cpp
#define INPUT_CTLS_APL_VK_DFAB31_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_VK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_VK_DFAB40_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_VK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_VK_DFAB41_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_VK_DFAB42_1

```cpp
#define INPUT_CTLS_APL_VK_DFAB42_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_VK_FFAB01_1

```cpp
#define INPUT_CTLS_APL_VK_FFAB01_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01). 

### define INPUT_CTLS_APL_AK_9F1C_0

```cpp
#define INPUT_CTLS_APL_AK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_AK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_AK_9F1A_0

```cpp
#define INPUT_CTLS_APL_AK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_AK_9F35_0

```cpp
#define INPUT_CTLS_APL_AK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_AK_9F6D_0

```cpp
#define INPUT_CTLS_APL_AK_9F6D_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexContactlessReaderCapabilities_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexcontactlessreadercapabilities-9f6d). 

### define INPUT_CTLS_APL_AK_9F6E_0

```cpp
#define INPUT_CTLS_APL_AK_9F6E_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexterminaltransactioncapabilities-9f6e). 

### define INPUT_CTLS_APL_AK_9F33_0

```cpp
#define INPUT_CTLS_APL_AK_9F33_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_AK_9F40_0

```cpp
#define INPUT_CTLS_APL_AK_9F40_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_AK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_AK_9F09_0

```cpp
#define INPUT_CTLS_APL_AK_9F09_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_AK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_AK_9F15_1

```cpp
#define INPUT_CTLS_APL_AK_9F15_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_AK_9F16_1

```cpp
#define INPUT_CTLS_APL_AK_9F16_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16). 

### define INPUT_CTLS_APL_AK_9F4E_1

```cpp
#define INPUT_CTLS_APL_AK_9F4E_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_AK_9F01_1

```cpp
#define INPUT_CTLS_APL_AK_9F01_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_AK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01). 

### define INPUT_CTLS_APL_AK_DFAB30_1

```cpp
#define INPUT_CTLS_APL_AK_DFAB30_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_AK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30). 

### define INPUT_CTLS_APL_AK_DFAB31_1

```cpp
#define INPUT_CTLS_APL_AK_DFAB31_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_AK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_AK_DFAB40_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_AK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_AK_DFAB41_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_AK_DFAB42_2

```cpp
#define INPUT_CTLS_APL_AK_DFAB42_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_AK_DFAB43_2

```cpp
#define INPUT_CTLS_APL_AK_DFAB43_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_AK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43). 

### define INPUT_CTLS_APL_AK_DFAB44_2

```cpp
#define INPUT_CTLS_APL_AK_DFAB44_2 0x04
```

B3b3: [EMV_CTLS_APPLIDATA_AK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44). 

### define INPUT_CTLS_APL_AK_DFAB45_2

```cpp
#define INPUT_CTLS_APL_AK_DFAB45_2 0x08
```

B3b4: [EMV_CTLS_APPLIDATA_AK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-taconline-dfab45). 

### define INPUT_CTLS_APL_AK_FFAB01_2

```cpp
#define INPUT_CTLS_APL_AK_FFAB01_2 0x10
```

B3b5: [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01). 

### define INPUT_CTLS_APL_AK_DFAB52_2

```cpp
#define INPUT_CTLS_APL_AK_DFAB52_2 0x20
```

B3b6: [EMV_CTLS_APPLIDATA_AK_STRUCT::UnpredictableNumberRange_DFAB52](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-unpredictablenumberrange-dfab52). 

### define INPUT_CTLS_APL_JK_9F1C_0

```cpp
#define INPUT_CTLS_APL_JK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_JK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_JK_9F1A_0

```cpp
#define INPUT_CTLS_APL_JK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_JK_9F35_0

```cpp
#define INPUT_CTLS_APL_JK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_JK_9F53_0

```cpp
#define INPUT_CTLS_APL_JK_9F53_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalInterchangeProfile_9F53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-terminalinterchangeprofile-9f53). 

### define INPUT_CTLS_APL_JK_9F15_0

```cpp
#define INPUT_CTLS_APL_JK_9F15_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_JK_9F4E_0

```cpp
#define INPUT_CTLS_APL_JK_9F4E_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_JK_9F01_0

```cpp
#define INPUT_CTLS_APL_JK_9F01_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_JK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01). 

### define INPUT_CTLS_APL_JK_DFAB31_0

```cpp
#define INPUT_CTLS_APL_JK_DFAB31_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_JK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_JK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_JK_DFAB40_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_JK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_JK_DFAB41_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_JK_DFAB42_1

```cpp
#define INPUT_CTLS_APL_JK_DFAB42_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_JK_DFAB43_1

```cpp
#define INPUT_CTLS_APL_JK_DFAB43_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_JK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43). 

### define INPUT_CTLS_APL_JK_DFAB44_1

```cpp
#define INPUT_CTLS_APL_JK_DFAB44_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_JK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44). 

### define INPUT_CTLS_APL_JK_DFAB45_1

```cpp
#define INPUT_CTLS_APL_JK_DFAB45_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_JK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-taconline-dfab45). 

### define INPUT_CTLS_APL_JK_DFAB46_1

```cpp
#define INPUT_CTLS_APL_JK_DFAB46_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46). 

### define INPUT_CTLS_APL_JK_DFAB47_1

```cpp
#define INPUT_CTLS_APL_JK_DFAB47_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47). 

### define INPUT_CTLS_APL_JK_DFAB48_2

```cpp
#define INPUT_CTLS_APL_JK_DFAB48_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48). 

### define INPUT_CTLS_APL_JK_DFAB4B_2

```cpp
#define INPUT_CTLS_APL_JK_DFAB4B_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_JK_STRUCT::CombinationOptions_DFAB4B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-combinationoptions-dfab4b). 

### define INPUT_CTLS_APL_JK_DFAB4C_2

```cpp
#define INPUT_CTLS_APL_JK_DFAB4C_2 0x04
```

B3b3: [EMV_CTLS_APPLIDATA_JK_STRUCT::RemovalTimeout_DFAB4C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-removaltimeout-dfab4c). 

### define INPUT_CTLS_APL_JK_DFAB5B_2

```cpp
#define INPUT_CTLS_APL_JK_DFAB5B_2 0x08
```

B3b4: [EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessTransactionLimit_ODCVM_DFAB5B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-odcvm-dfab5b). 

### define INPUT_CTLS_APL_DK_9F1C_0

```cpp
#define INPUT_CTLS_APL_DK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_DK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_DK_9F1A_0

```cpp
#define INPUT_CTLS_APL_DK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_DK_9F35_0

```cpp
#define INPUT_CTLS_APL_DK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_DK_9F66_0

```cpp
#define INPUT_CTLS_APL_DK_9F66_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66). 

### define INPUT_CTLS_APL_DK_9F33_0

```cpp
#define INPUT_CTLS_APL_DK_9F33_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_DK_9F40_0

```cpp
#define INPUT_CTLS_APL_DK_9F40_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_DK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_DK_9F09_0

```cpp
#define INPUT_CTLS_APL_DK_9F09_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_DK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_DK_9F15_0

```cpp
#define INPUT_CTLS_APL_DK_9F15_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_DK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_DK_DFAB30_1

```cpp
#define INPUT_CTLS_APL_DK_DFAB30_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_DK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30). 

### define INPUT_CTLS_APL_DK_DFAB31_1

```cpp
#define INPUT_CTLS_APL_DK_DFAB31_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_DK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_DK_DFAB40_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_DK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_DK_DFAB41_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_DK_DFAB42_1

```cpp
#define INPUT_CTLS_APL_DK_DFAB42_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_DK_DFAB58_1

```cpp
#define INPUT_CTLS_APL_DK_DFAB58_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_DK_STRUCT::DataContainerReadIds_DFAB58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-datacontainerreadids-dfab58). 

### define INPUT_CTLS_APL_DK_DFAB59_1

```cpp
#define INPUT_CTLS_APL_DK_DFAB59_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_DK_STRUCT::DataContainerReadRanges_DFAB59](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-datacontainerreadranges-dfab59). 

### define INPUT_CTLS_APL_IK_9F1C_0

```cpp
#define INPUT_CTLS_APL_IK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_IK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_IK_9F1A_0

```cpp
#define INPUT_CTLS_APL_IK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_IK_9F35_0

```cpp
#define INPUT_CTLS_APL_IK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_IK_9F33_0

```cpp
#define INPUT_CTLS_APL_IK_9F33_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_IK_9F40_0

```cpp
#define INPUT_CTLS_APL_IK_9F40_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_IK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_IK_9F5F_0

```cpp
#define INPUT_CTLS_APL_IK_9F5F_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessFloorLimit_9F5F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-9f5f). 

### define INPUT_CTLS_APL_IK_9F58_0

```cpp
#define INPUT_CTLS_APL_IK_9F58_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantTypeIndicator_9F58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchanttypeindicator-9f58). 

### define INPUT_CTLS_APL_IK_9F59_0

```cpp
#define INPUT_CTLS_APL_IK_9F59_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionInformation_9F59](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactioninformation-9f59). 

### define INPUT_CTLS_APL_IK_9F5A_1

```cpp
#define INPUT_CTLS_APL_IK_9F5A_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionType_9F5A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactiontype-9f5a). 

### define INPUT_CTLS_APL_IK_9F5E_1

```cpp
#define INPUT_CTLS_APL_IK_9F5E_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalOptionStatus_9F5E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaloptionstatus-9f5e). 

### define INPUT_CTLS_APL_IK_9F5D_1

```cpp
#define INPUT_CTLS_APL_IK_9F5D_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_IK_STRUCT::ReceiptRequiredLimit_9F5D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-receiptrequiredlimit-9f5d). 

### define INPUT_CTLS_APL_IK_DF6D_1

```cpp
#define INPUT_CTLS_APL_IK_DF6D_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_IK_STRUCT::TryAgainLimit_DF6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tryagainlimit-df6d). 

### define INPUT_CTLS_APL_IK_9F09_1

```cpp
#define INPUT_CTLS_APL_IK_9F09_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_IK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_IK_9F15_1

```cpp
#define INPUT_CTLS_APL_IK_9F15_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_IK_9F16_1

```cpp
#define INPUT_CTLS_APL_IK_9F16_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16). 

### define INPUT_CTLS_APL_IK_9F4E_1

```cpp
#define INPUT_CTLS_APL_IK_9F4E_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_IK_9F01_2

```cpp
#define INPUT_CTLS_APL_IK_9F01_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_IK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01). 

### define INPUT_CTLS_APL_IK_DFAB31_2

```cpp
#define INPUT_CTLS_APL_IK_DFAB31_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_IK_DFAB41_2

```cpp
#define INPUT_CTLS_APL_IK_DFAB41_2 0x04
```

B3b3: [EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_IK_DFAB42_2

```cpp
#define INPUT_CTLS_APL_IK_DFAB42_2 0x08
```

B3b4: [EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_IK_DFAB43_2

```cpp
#define INPUT_CTLS_APL_IK_DFAB43_2 0x10
```

B3b5: [EMV_CTLS_APPLIDATA_IK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43). 

### define INPUT_CTLS_APL_IK_DFAB44_2

```cpp
#define INPUT_CTLS_APL_IK_DFAB44_2 0x20
```

B3b6: [EMV_CTLS_APPLIDATA_IK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44). 

### define INPUT_CTLS_APL_IK_DFAB45_2

```cpp
#define INPUT_CTLS_APL_IK_DFAB45_2 0x40
```

B3b7: [EMV_CTLS_APPLIDATA_IK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-taconline-dfab45). 

### define INPUT_CTLS_APL_IK_DFAB46_2

```cpp
#define INPUT_CTLS_APL_IK_DFAB46_2 0x80
```

B3b8: [EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46). 

### define INPUT_CTLS_APL_IK_DFAB47_3

```cpp
#define INPUT_CTLS_APL_IK_DFAB47_3 0x01
```

B4b1: [EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47). 

### define INPUT_CTLS_APL_IK_DFAB48_3

```cpp
#define INPUT_CTLS_APL_IK_DFAB48_3 0x02
```

B4b2: [EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48). 

### define INPUT_CTLS_APL_EK_9F1C_0

```cpp
#define INPUT_CTLS_APL_EK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_EK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_EK_9F1A_0

```cpp
#define INPUT_CTLS_APL_EK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_EK_9F35_0

```cpp
#define INPUT_CTLS_APL_EK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_EK_9F33_0

```cpp
#define INPUT_CTLS_APL_EK_9F33_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_EK_9F40_0

```cpp
#define INPUT_CTLS_APL_EK_9F40_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_EK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_EK_9F09_0

```cpp
#define INPUT_CTLS_APL_EK_9F09_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_EK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_EK_9F15_0

```cpp
#define INPUT_CTLS_APL_EK_9F15_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_EK_9F16_0

```cpp
#define INPUT_CTLS_APL_EK_9F16_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16). 

### define INPUT_CTLS_APL_EK_9F4E_1

```cpp
#define INPUT_CTLS_APL_EK_9F4E_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_EK_9F01_1

```cpp
#define INPUT_CTLS_APL_EK_9F01_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_EK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01). 

### define INPUT_CTLS_APL_EK_DFAB31_1

```cpp
#define INPUT_CTLS_APL_EK_DFAB31_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_EK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_EK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_EK_DFAB40_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_EK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_EK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_EK_DFAB41_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_EK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_EK_DFAB43_1

```cpp
#define INPUT_CTLS_APL_EK_DFAB43_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_EK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43). 

### define INPUT_CTLS_APL_EK_DFAB44_1

```cpp
#define INPUT_CTLS_APL_EK_DFAB44_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_EK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44). 

### define INPUT_CTLS_APL_EK_DFAB45_1

```cpp
#define INPUT_CTLS_APL_EK_DFAB45_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_EK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-taconline-dfab45). 

### define INPUT_CTLS_APL_EK_DFAB4A_2

```cpp
#define INPUT_CTLS_APL_EK_DFAB4A_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_EK_STRUCT::CtlsTransactionLimitCash_DFAB4A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-ctlstransactionlimitcash-dfab4a). 

### define INPUT_CTLS_APL_EK_9F66_2

```cpp
#define INPUT_CTLS_APL_EK_9F66_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66). 

### define INPUT_CTLS_APL_PK_9F1C_0

```cpp
#define INPUT_CTLS_APL_PK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_PK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_PK_9F1A_0

```cpp
#define INPUT_CTLS_APL_PK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_PK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_PK_9F35_0

```cpp
#define INPUT_CTLS_APL_PK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_PK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_PK_DF04_0

```cpp
#define INPUT_CTLS_APL_PK_DF04_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-cvmrequirements-df04). 

### define INPUT_CTLS_APL_PK_DFAB31_0

```cpp
#define INPUT_CTLS_APL_PK_DFAB31_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_PK_DF02_0

```cpp
#define INPUT_CTLS_APL_PK_DF02_0 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-df02). 

### define INPUT_CTLS_APL_PK_DFAB41_0

```cpp
#define INPUT_CTLS_APL_PK_DFAB41_0 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_PK_DF01_0

```cpp
#define INPUT_CTLS_APL_PK_DF01_0 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-df01). 

### define INPUT_CTLS_APL_CK_9F1C_0

```cpp
#define INPUT_CTLS_APL_CK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_CK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_CK_9F1A_0

```cpp
#define INPUT_CTLS_APL_CK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_CK_9F35_0

```cpp
#define INPUT_CTLS_APL_CK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_CK_9F66_0

```cpp
#define INPUT_CTLS_APL_CK_9F66_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66). 

### define INPUT_CTLS_APL_CK_9F33_0

```cpp
#define INPUT_CTLS_APL_CK_9F33_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_CK_9F40_0

```cpp
#define INPUT_CTLS_APL_CK_9F40_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_CK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_CK_9F09_0

```cpp
#define INPUT_CTLS_APL_CK_9F09_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_CK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_CK_9F15_0

```cpp
#define INPUT_CTLS_APL_CK_9F15_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_CK_9F16_1

```cpp
#define INPUT_CTLS_APL_CK_9F16_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16). 

### define INPUT_CTLS_APL_CK_9F4E_1

```cpp
#define INPUT_CTLS_APL_CK_9F4E_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_CK_DFAB30_1

```cpp
#define INPUT_CTLS_APL_CK_DFAB30_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_CK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30). 

### define INPUT_CTLS_APL_CK_DFAB31_1

```cpp
#define INPUT_CTLS_APL_CK_DFAB31_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_CK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_CK_DFAB40_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_CK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_CK_DFAB41_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_CK_DFAB42_1

```cpp
#define INPUT_CTLS_APL_CK_DFAB42_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_GK_9F1C_0

```cpp
#define INPUT_CTLS_APL_GK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_GK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_GK_9F1A_0

```cpp
#define INPUT_CTLS_APL_GK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_GK_9F35_0

```cpp
#define INPUT_CTLS_APL_GK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_GK_9F33_0

```cpp
#define INPUT_CTLS_APL_GK_9F33_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_GK_9F40_0

```cpp
#define INPUT_CTLS_APL_GK_9F40_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_GK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_GK_9F09_0

```cpp
#define INPUT_CTLS_APL_GK_9F09_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_GK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_GK_9F15_0

```cpp
#define INPUT_CTLS_APL_GK_9F15_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_GK_9F16_0

```cpp
#define INPUT_CTLS_APL_GK_9F16_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16). 

### define INPUT_CTLS_APL_GK_9F4E_1

```cpp
#define INPUT_CTLS_APL_GK_9F4E_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_GK_9F01_1

```cpp
#define INPUT_CTLS_APL_GK_9F01_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_GK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01). 

### define INPUT_CTLS_APL_GK_DFAB31_1

```cpp
#define INPUT_CTLS_APL_GK_DFAB31_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_GK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_GK_DFAB40_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_GK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_GK_DFAB41_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_GK_DFAB42_1

```cpp
#define INPUT_CTLS_APL_GK_DFAB42_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_GK_DFAB43_1

```cpp
#define INPUT_CTLS_APL_GK_DFAB43_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_GK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43). 

### define INPUT_CTLS_APL_GK_DFAB44_1

```cpp
#define INPUT_CTLS_APL_GK_DFAB44_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_GK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44). 

### define INPUT_CTLS_APL_GK_DFAB45_2

```cpp
#define INPUT_CTLS_APL_GK_DFAB45_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_GK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-taconline-dfab45). 

### define INPUT_CTLS_APL_GK_DFAB4F_2

```cpp
#define INPUT_CTLS_APL_GK_DFAB4F_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_GK_STRUCT::CtlsAppKernelCap_DFAB4F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-ctlsappkernelcap-dfab4f). 

### define INPUT_CTLS_APL_GK_DFAB50_2

```cpp
#define INPUT_CTLS_APL_GK_DFAB50_2 0x04
```

B3b3: [EMV_CTLS_APPLIDATA_GK_STRUCT::MTOL_DFAB50](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-mtol-dfab50). 

### define INPUT_CTLS_APL_GK_DFAB51_2

```cpp
#define INPUT_CTLS_APL_GK_DFAB51_2 0x08
```

B3b4: [EMV_CTLS_APPLIDATA_GK_STRUCT::DefaultDDOL_DFAB51](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-defaultddol-dfab51). 

### define INPUT_CTLS_APL_GK_9F76_2

```cpp
#define INPUT_CTLS_APL_GK_9F76_2 0x10
```

B3b5: [EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalTransactionData_9F76](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-terminaltransactiondata-9f76). 

### define INPUT_CTLS_APL_GK_DFAB5A_2

```cpp
#define INPUT_CTLS_APL_GK_DFAB5A_2 0x20
```

B3b6: [EMV_CTLS_APPLIDATA_GK_STRUCT::AppliAuthTransType_DFAB5A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-appliauthtranstype-dfab5a). 

### define INPUT_CTLS_APL_RK_9F1C_0

```cpp
#define INPUT_CTLS_APL_RK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_RK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_RK_9F1A_0

```cpp
#define INPUT_CTLS_APL_RK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_RK_9F35_0

```cpp
#define INPUT_CTLS_APL_RK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_RK_9F33_0

```cpp
#define INPUT_CTLS_APL_RK_9F33_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_RK_9F40_0

```cpp
#define INPUT_CTLS_APL_RK_9F40_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_RK_9F09_0

```cpp
#define INPUT_CTLS_APL_RK_9F09_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_RK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_RK_9F15_0

```cpp
#define INPUT_CTLS_APL_RK_9F15_0 0x40
```

B127: [EMV_CTLS_APPLIDATA_RK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_RK_DFAB31_0

```cpp
#define INPUT_CTLS_APL_RK_DFAB31_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_RK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_RK_DFAB40_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_RK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_RK_DFAB41_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_RK_DFAB42_1

```cpp
#define INPUT_CTLS_APL_RK_DFAB42_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_RK_DFAB43_1

```cpp
#define INPUT_CTLS_APL_RK_DFAB43_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_RK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43). 

### define INPUT_CTLS_APL_RK_DFAB44_1

```cpp
#define INPUT_CTLS_APL_RK_DFAB44_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_RK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44). 

### define INPUT_CTLS_APL_RK_DFAB45_1

```cpp
#define INPUT_CTLS_APL_RK_DFAB45_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_RK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-taconline-dfab45). 

### define INPUT_CTLS_APL_RK_DFAB46_1

```cpp
#define INPUT_CTLS_APL_RK_DFAB46_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46). 

### define INPUT_CTLS_APL_RK_DFAB47_1

```cpp
#define INPUT_CTLS_APL_RK_DFAB47_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47). 

### define INPUT_CTLS_APL_RK_DFAB48_2

```cpp
#define INPUT_CTLS_APL_RK_DFAB48_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48). 

### define INPUT_CTLS_APL_RK_DFAB4D_2

```cpp
#define INPUT_CTLS_APL_RK_DFAB4D_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_RK_STRUCT::CallbackTimeout_DFAB4D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-callbacktimeout-dfab4d). 

### define INPUT_CTLS_APL_RK_DFAB4E_2

```cpp
#define INPUT_CTLS_APL_RK_DFAB4E_2 0x04
```

B3b3: [EMV_CTLS_APPLIDATA_RK_STRUCT::TornTransactionInterval_DFAB4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-torntransactioninterval-dfab4e). 

### define INPUT_CTLS_APL_RK_DF3A_2

```cpp
#define INPUT_CTLS_APL_RK_DF3A_2 0x08
```

B3b4: [EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilitiesExt_DF3A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilitiesext-df3a). 

### define INPUT_CTLS_APL_SK_9F1C_0

```cpp
#define INPUT_CTLS_APL_SK_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_SK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_SK_9F1A_0

```cpp
#define INPUT_CTLS_APL_SK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_SK_9F35_0

```cpp
#define INPUT_CTLS_APL_SK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_SK_9F33_0

```cpp
#define INPUT_CTLS_APL_SK_9F33_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_SK_9F40_0

```cpp
#define INPUT_CTLS_APL_SK_9F40_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_SK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_SK_9F09_0

```cpp
#define INPUT_CTLS_APL_SK_9F09_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_SK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_SK_9F15_0

```cpp
#define INPUT_CTLS_APL_SK_9F15_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_SK_9F4E_0

```cpp
#define INPUT_CTLS_APL_SK_9F4E_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_SK_DFAB31_1

```cpp
#define INPUT_CTLS_APL_SK_DFAB31_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_SK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_SK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_SK_DFAB40_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_SK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_SK_DFAB41_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_SK_DFAB42_1

```cpp
#define INPUT_CTLS_APL_SK_DFAB42_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_SK_DFAB43_1

```cpp
#define INPUT_CTLS_APL_SK_DFAB43_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_SK_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43). 

### define INPUT_CTLS_APL_SK_DFAB44_1

```cpp
#define INPUT_CTLS_APL_SK_DFAB44_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_SK_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44). 

### define INPUT_CTLS_APL_SK_DFAB45_1

```cpp
#define INPUT_CTLS_APL_SK_DFAB45_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_SK_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-taconline-dfab45). 

### define INPUT_CTLS_APL_SK_DFAB53_1

```cpp
#define INPUT_CTLS_APL_SK_DFAB53_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_SK_STRUCT::TermCap_aboveCVMLimit_DFAB53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-termcap-abovecvmlimit-dfab53). 

### define INPUT_CTLS_APL_SK_DFAB54_2

```cpp
#define INPUT_CTLS_APL_SK_DFAB54_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_SK_STRUCT::TermCap_belowCVMLimit_DFAB54](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t.md#variable-termcap-belowcvmlimit-dfab54). 

### define INPUT_CTLS_APL_PB_9F1C_0

```cpp
#define INPUT_CTLS_APL_PB_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_PB_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_PB_9F1A_0

```cpp
#define INPUT_CTLS_APL_PB_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_PB_9F35_0

```cpp
#define INPUT_CTLS_APL_PB_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_PB_9F66_0

```cpp
#define INPUT_CTLS_APL_PB_9F66_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66). 

### define INPUT_CTLS_APL_PB_9F09_0

```cpp
#define INPUT_CTLS_APL_PB_9F09_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_PB_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_PB_9F4E_0

```cpp
#define INPUT_CTLS_APL_PB_9F4E_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_PB_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_PB_DFAB31_0

```cpp
#define INPUT_CTLS_APL_PB_DFAB31_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_PB_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_PB_DFAB40_0

```cpp
#define INPUT_CTLS_APL_PB_DFAB40_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_PB_DFAB41_1

```cpp
#define INPUT_CTLS_APL_PB_DFAB41_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_PB_DFAB42_1

```cpp
#define INPUT_CTLS_APL_PB_DFAB42_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_PB_DFAB43_1

```cpp
#define INPUT_CTLS_APL_PB_DFAB43_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_PB_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-tacdefault-dfab43). 

### define INPUT_CTLS_APL_PB_DFAB44_1

```cpp
#define INPUT_CTLS_APL_PB_DFAB44_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_PB_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-tacdenial-dfab44). 

### define INPUT_CTLS_APL_PB_DFAB45_1

```cpp
#define INPUT_CTLS_APL_PB_DFAB45_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_PB_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-taconline-dfab45). 

### define INPUT_CTLS_APL_PB_DFAB46_1

```cpp
#define INPUT_CTLS_APL_PB_DFAB46_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46). 

### define INPUT_CTLS_APL_PB_DFAB47_1

```cpp
#define INPUT_CTLS_APL_PB_DFAB47_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47). 

### define INPUT_CTLS_APL_PB_DFAB48_1

```cpp
#define INPUT_CTLS_APL_PB_DFAB48_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48). 

### define INPUT_CTLS_APL_PB_DFAB55_2

```cpp
#define INPUT_CTLS_APL_PB_DFAB55_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_PB_STRUCT::TACSwitchInterface_DFAB55](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-tacswitchinterface-dfab55). 

### define INPUT_CTLS_APL_PB_DFAB56_2

```cpp
#define INPUT_CTLS_APL_PB_DFAB56_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_PB_STRUCT::IACSwitchInterface_DFAB56](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-iacswitchinterface-dfab56). 

### define INPUT_CTLS_APL_WK_9F01_0

```cpp
#define INPUT_CTLS_APL_WK_9F01_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_WK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01). 

### define INPUT_CTLS_APL_WK_9F1C_0

```cpp
#define INPUT_CTLS_APL_WK_9F1C_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_WK_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_WK_9F1A_0

```cpp
#define INPUT_CTLS_APL_WK_9F1A_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_WK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_WK_9F35_0

```cpp
#define INPUT_CTLS_APL_WK_9F35_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_WK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_WK_9F33_0

```cpp
#define INPUT_CTLS_APL_WK_9F33_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_WK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_WK_9F40_0

```cpp
#define INPUT_CTLS_APL_WK_9F40_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_WK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_WK_9F09_0

```cpp
#define INPUT_CTLS_APL_WK_9F09_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_WK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_WK_9F15_0

```cpp
#define INPUT_CTLS_APL_WK_9F15_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_WK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_WK_9F16_1

```cpp
#define INPUT_CTLS_APL_WK_9F16_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_WK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16). 

### define INPUT_CTLS_APL_WK_9F4E_1

```cpp
#define INPUT_CTLS_APL_WK_9F4E_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_WK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_WK_DFAB30_1

```cpp
#define INPUT_CTLS_APL_WK_DFAB30_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_WK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30). 

### define INPUT_CTLS_APL_WK_DFAB31_1

```cpp
#define INPUT_CTLS_APL_WK_DFAB31_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_WK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_WK_DFAB40_1

```cpp
#define INPUT_CTLS_APL_WK_DFAB40_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40). 

### define INPUT_CTLS_APL_WK_DFAB41_1

```cpp
#define INPUT_CTLS_APL_WK_DFAB41_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define INPUT_CTLS_APL_WK_DFAB42_1

```cpp
#define INPUT_CTLS_APL_WK_DFAB42_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42). 

### define INPUT_CTLS_APL_BK_9F1C_0

```cpp
#define INPUT_CTLS_APL_BK_9F1C_0 0x01
```

B1b1: EMV_CTLS_APPLIDATA_BR_STRUCT::TermIdent_9F1C. 

### define INPUT_CTLS_APL_BK_9F1A_0

```cpp
#define INPUT_CTLS_APL_BK_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_BK_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_BK_9F35_0

```cpp
#define INPUT_CTLS_APL_BK_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_BK_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_BK_9F33_0

```cpp
#define INPUT_CTLS_APL_BK_9F33_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_BK_STRUCT::TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33). 

### define INPUT_CTLS_APL_BK_9F40_0

```cpp
#define INPUT_CTLS_APL_BK_9F40_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_BK_STRUCT::AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40). 

### define INPUT_CTLS_APL_BK_9F09_0

```cpp
#define INPUT_CTLS_APL_BK_9F09_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_BK_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_BK_9F15_0

```cpp
#define INPUT_CTLS_APL_BK_9F15_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_BK_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_BK_9F16_0

```cpp
#define INPUT_CTLS_APL_BK_9F16_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_BK_STRUCT::MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16). 

### define INPUT_CTLS_APL_BK_9F4E_1

```cpp
#define INPUT_CTLS_APL_BK_9F4E_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_BK_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_BK_9F01_1

```cpp
#define INPUT_CTLS_APL_BK_9F01_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_BK_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01). 

### define INPUT_CTLS_APL_BK_DFAB31_1

```cpp
#define INPUT_CTLS_APL_BK_DFAB31_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_BK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_BK_DF8118_1

```cpp
#define INPUT_CTLS_APL_BK_DF8118_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_BK_STRUCT::CVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-cvm-abovelimit-df8118). 

### define INPUT_CTLS_APL_BK_DF8119_1

```cpp
#define INPUT_CTLS_APL_BK_DF8119_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_BK_STRUCT::CVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-cvm-belowlimit-df8119). 

### define INPUT_CTLS_APL_BK_DF811B_1

```cpp
#define INPUT_CTLS_APL_BK_DF811B_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_BK_STRUCT::KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b). 

### define INPUT_CTLS_APL_BK_DF8120_1

```cpp
#define INPUT_CTLS_APL_BK_DF8120_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_BK_STRUCT::TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-tacdefault-df8120). 

### define INPUT_CTLS_APL_BK_DF8121_1

```cpp
#define INPUT_CTLS_APL_BK_DF8121_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_BK_STRUCT::TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-tacdenial-df8121). 

### define INPUT_CTLS_APL_BK_DF8122_2

```cpp
#define INPUT_CTLS_APL_BK_DF8122_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_BK_STRUCT::TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-taconline-df8122). 

### define INPUT_CTLS_APL_BK_DF8123_2

```cpp
#define INPUT_CTLS_APL_BK_DF8123_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_BK_STRUCT::FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-floorlimit-df8123). 

### define INPUT_CTLS_APL_BK_DF8124_2

```cpp
#define INPUT_CTLS_APL_BK_DF8124_2 0x04
```

B3b3: [EMV_CTLS_APPLIDATA_BK_STRUCT::TransactionLimitNoCDCVM_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-transactionlimitnocdcvm-df8124). 

### define INPUT_CTLS_APL_BK_DF8125_2

```cpp
#define INPUT_CTLS_APL_BK_DF8125_2 0x08
```

B3b4: [EMV_CTLS_APPLIDATA_BK_STRUCT::TransactionLimitCDCVM_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-transactionlimitcdcvm-df8125). 

### define INPUT_CTLS_APL_BK_DF8126_2

```cpp
#define INPUT_CTLS_APL_BK_DF8126_2 0x10
```

B3b5: [EMV_CTLS_APPLIDATA_BK_STRUCT::CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126). 

### define INPUT_CTLS_APL_BK_DF812D_2

```cpp
#define INPUT_CTLS_APL_BK_DF812D_2 0x20
```

B3b6: [EMV_CTLS_APPLIDATA_BK_STRUCT::MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d). 

### define INPUT_CTLS_APL_BK_DF8131_2

```cpp
#define INPUT_CTLS_APL_BK_DF8131_2 0x40
```

B3b7: [EMV_CTLS_APPLIDATA_BK_STRUCT::CHV_CS_MessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-chv-cs-messagetable-df8131). 

### define INPUT_CTLS_APL_BK_DF8132_2

```cpp
#define INPUT_CTLS_APL_BK_DF8132_2 0x80
```

B3b8: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TimeToleranceMin_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-timetolerancemin-df8132). 

### define INPUT_CTLS_APL_BK_DF8133_3

```cpp
#define INPUT_CTLS_APL_BK_DF8133_3 0x01
```

B4b1: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TimeToleranceMax_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-timetolerancemax-df8133). 

### define INPUT_CTLS_APL_BK_DF8134_3

```cpp
#define INPUT_CTLS_APL_BK_DF8134_3 0x02
```

B4b2: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TransmissionTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-transmissiontime-capdu-df8134). 

### define INPUT_CTLS_APL_BK_DF8135_3

```cpp
#define INPUT_CTLS_APL_BK_DF8135_3 0x04
```

B4b3: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TransmissionTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-transmissiontime-rapdu-df8135). 

### define INPUT_CTLS_APL_BK_DF8136_3

```cpp
#define INPUT_CTLS_APL_BK_DF8136_3 0x08
```

B4b4: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_MinTimeDifferenceLimit_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-mintimedifferencelimit-df8136). 

### define INPUT_CTLS_APL_BK_DF8137_3

```cpp
#define INPUT_CTLS_APL_BK_DF8137_3 0x10
```

B4b5: [EMV_CTLS_APPLIDATA_BK_STRUCT::RR_TransTimeMismatchLimit_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchlimit-df8137). 

### define INPUT_CTLS_APL_MR_9F1C_0

```cpp
#define INPUT_CTLS_APL_MR_9F1C_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_MR_STRUCT::TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-termident-9f1c). 

### define INPUT_CTLS_APL_MR_9F1A_0

```cpp
#define INPUT_CTLS_APL_MR_9F1A_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a). 

### define INPUT_CTLS_APL_MR_9F35_0

```cpp
#define INPUT_CTLS_APL_MR_9F35_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminaltype-9f35). 

### define INPUT_CTLS_APL_MR_9F09_0

```cpp
#define INPUT_CTLS_APL_MR_9F09_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_MR_STRUCT::VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-versionnumber-9f09). 

### define INPUT_CTLS_APL_MR_9F15_0

```cpp
#define INPUT_CTLS_APL_MR_9F15_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15). 

### define INPUT_CTLS_APL_MR_9F4E_0

```cpp
#define INPUT_CTLS_APL_MR_9F4E_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e). 

### define INPUT_CTLS_APL_MR_9F01_0

```cpp
#define INPUT_CTLS_APL_MR_9F01_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_MR_STRUCT::AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-acquireridentifier-9f01). 

### define INPUT_CTLS_APL_MR_DF51_0

```cpp
#define INPUT_CTLS_APL_MR_DF51_0 0x80
```

B1b8: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalFloorLimit_DF51](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalfloorlimit-df51). 

### define INPUT_CTLS_APL_MR_DF52_1

```cpp
#define INPUT_CTLS_APL_MR_DF52_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalNoCVMLimit_DF52](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalnocvmlimit-df52). 

### define INPUT_CTLS_APL_MR_DF53_1

```cpp
#define INPUT_CTLS_APL_MR_DF53_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitNonCDCVM_DF53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitnoncdcvm-df53). 

### define INPUT_CTLS_APL_MR_DF54_1

```cpp
#define INPUT_CTLS_APL_MR_DF54_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitCDCVM_DF54](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitcdcvm-df54). 

### define INPUT_CTLS_APL_MR_DF55_1

```cpp
#define INPUT_CTLS_APL_MR_DF55_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalTPMCapabilities_DF55](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminaltpmcapabilities-df55). 

### define INPUT_CTLS_APL_MR_DF56_1

```cpp
#define INPUT_CTLS_APL_MR_DF56_1 0x10
```

B2b5: [EMV_CTLS_APPLIDATA_MR_STRUCT::TransactionRecoveryLimit_DF56](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-transactionrecoverylimit-df56). 

### define INPUT_CTLS_APL_MR_DFAB31_1

```cpp
#define INPUT_CTLS_APL_MR_DFAB31_1 0x20
```

B2b6: [EMV_CTLS_APPLIDATA_MR_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_MR_DFAB43_1

```cpp
#define INPUT_CTLS_APL_MR_DFAB43_1 0x40
```

B2b7: [EMV_CTLS_APPLIDATA_MR_STRUCT::TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-tacdefault-dfab43). 

### define INPUT_CTLS_APL_MR_DFAB44_1

```cpp
#define INPUT_CTLS_APL_MR_DFAB44_1 0x80
```

B2b8: [EMV_CTLS_APPLIDATA_MR_STRUCT::TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-tacdenial-dfab44). 

### define INPUT_CTLS_APL_MR_DFAB45_2

```cpp
#define INPUT_CTLS_APL_MR_DFAB45_2 0x01
```

B3b1: [EMV_CTLS_APPLIDATA_MR_STRUCT::TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-taconline-dfab45). 

### define INPUT_CTLS_APL_MR_DFAB57_2

```cpp
#define INPUT_CTLS_APL_MR_DFAB57_2 0x02
```

B3b2: [EMV_CTLS_APPLIDATA_MR_STRUCT::DataExchangeTagList_DFAB57](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-dataexchangetaglist-dfab57). 

### define INPUT_CTLS_APL_DOM_DFAB31_0

```cpp
#define INPUT_CTLS_APL_DOM_DFAB31_0 0x01
```

B1b5: [EMV_CTLS_APPLIDATA_DOM_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

### define INPUT_CTLS_APL_DOM_DFAB41_0

```cpp
#define INPUT_CTLS_APL_DOM_DFAB41_0 0x02
```

B2b7: [EMV_CTLS_APPLIDATA_DOM_STRUCT::ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41). 

### define EMV_CTLS_FLOW_DOM_EXPLICIT_SELECT

```cpp
#define EMV_CTLS_FLOW_DOM_EXPLICIT_SELECT 0x01
```

B1b1: Try explicit select in case of non-EMV mode or PSE failed. 

### define INPUT_CTLS_APL_GLOB_DFAB02_0

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB02_0 0x01
```

B1b1: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ASI_DFAB02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-asi-dfab02). 

### define INPUT_CTLS_APL_GLOB_DFAB03_0

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB03_0 0x02
```

B1b2: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-appflowcap-dfab03). 

### define INPUT_CTLS_APL_GLOB_DFAB04_0

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB04_0 0x04
```

B1b3: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::PriorityApplications_DFAB04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-priorityapplications-dfab04). 

### define INPUT_CTLS_APL_GLOB_DFAB05_0

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB05_0 0x08
```

B1b4: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::SpecialTRXConfig_DFAB05](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-specialtrxconfig-dfab05). 

### define INPUT_CTLS_APL_GLOB_DFAB06_0

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB06_0 0x10
```

B1b5: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ChksumEntryPoint_DFAB06](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-chksumentrypoint-dfab06). 

### define INPUT_CTLS_APL_GLOB_DFAB07_0

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB07_0 0x20
```

B1b6: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ChksumKernel_DFAB07](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-chksumkernel-dfab07). 

### define INPUT_CTLS_APL_GLOB_DFAB08_0

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB08_0 0x40
```

B1b7: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::RetapFieldOff_DFAB08](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-retapfieldoff-dfab08). 

### define INPUT_CTLS_APL_GLOB_DFAB20_1

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB20_1 0x01
```

B2b1: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagstrm-dfab20). 

### define INPUT_CTLS_APL_GLOB_DFAB21_1

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB21_1 0x02
```

B2b2: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagscrd-dfab21). 

### define INPUT_CTLS_APL_GLOB_DFAB22_1

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB22_1 0x04
```

B2b3: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::DefaultApplicationName_DFAB22](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-defaultapplicationname-dfab22). 

### define INPUT_CTLS_APL_GLOB_DFAB23_1

```cpp
#define INPUT_CTLS_APL_GLOB_DFAB23_1 0x08
```

B2b4: [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::InternalKernelId_DFAB23](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-internalkernelid-dfab23). 

### define CLTRXOP_SUPPRESS_ERRMSGBEEP

```cpp
#define CLTRXOP_SUPPRESS_ERRMSGBEEP 0x01
```

B1b1: Suppress beep on error message display. 

### define CLTRXOP_REPEAT_L1

```cpp
#define CLTRXOP_REPEAT_L1 0x02
```

B1b2: TRX repeated because of L1 error (same txn is started a 2nd time) 

### define CLTRXOP_NO_DOMESTIC_KERNEL

```cpp
#define CLTRXOP_NO_DOMESTIC_KERNEL 0x04
```

B1b3: skip local kernel processing for this transaction even if configured. 

### define CLTRXOP_NO_GLOBAL

```cpp
#define CLTRXOP_NO_GLOBAL 0x08
```

B1b4: skip global EMV processing for this transaction even if configured. 

### define CLTRXOP_PP_TORNTXN_RESET

```cpp
#define CLTRXOP_PP_TORNTXN_RESET 0x10
```

B1b5: reset the torn transaction store if a PayPass card is presented. 

### define CLTRXOP_AK_DELAYED_AUTH

```cpp
#define CLTRXOP_AK_DELAYED_AUTH 0x20
```

B1b6: Amex delayed autorization (Amex 3.1) for environments where no real-time online transaction is possible. Note: For Amex 4 kernel this is controlled by Enhanced Contactless Reader Capabilities B4b7. 

### define CLTRXOP_REMOVEALL_BUT_EXCLUDED

```cpp
#define CLTRXOP_REMOVEALL_BUT_EXCLUDED 0x80
```

B1b8: Remove all candidates from terminal list except those which are contained in [ExcludeAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids) or [ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos) list. This allows transactions restricted to certain AIDs, Kernel IDs or Combinations without terminal reconfiguration. 

### define CLTRXOP_CANDLIST_CALLBACK

```cpp
#define CLTRXOP_CANDLIST_CALLBACK 0x01
```

B2b1: Mutual combo candidate list of terminal and card reported for selection and reordering, see [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand). 

### define CLTRXOP_APPSELECTED_CALLBACK

```cpp
#define CLTRXOP_APPSELECTED_CALLBACK 0x02
```

B2b2: callback after the final select for choosing the kernel to be used, only available for velocity kernel, see [TAG_BF0C_CTLS_CBK_APP_SELECTED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0c-ctls-cbk-app-selected). 

### define CLTRXOP_NO_BUL12

```cpp
#define CLTRXOP_NO_BUL12 0x04
```

B2b3: SU Bulletin 12 NOT supported (Velocity Entrypoint _NOT_ EMVEP_CFG_BUL12). Obsolete since EP2.0.1. 

### define CLTRXOP_NO_LONGEST_AID_MATCH

```cpp
#define CLTRXOP_NO_LONGEST_AID_MATCH 0x10
```

B2b5: Do not perform the longest AID match (technical nonsense but needed for a few domestic certifications) 

### define CLTRXOP_SPURIOUS_CARD_DETECT

```cpp
#define CLTRXOP_SPURIOUS_CARD_DETECT 0x20
```

B2b6: Use option [EMV_CTLS_SPURIOUS_DETECT](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-spurious-detect) for card detection. 

### define CLTRXOP_NO_PAN_RETRIEVE_DEF

```cpp
#define CLTRXOP_NO_PAN_RETRIEVE_DEF 0x40
```

   For all other schemes EMV ADK does anyhow use configured values for PAN retrieval transactions.    Not yet supported for VFI reader. 

B2b7: PayPass: Do NOT Use default configuration for PAN Retrieval Transactions but configured values. 


### define CLTRXOP_RND_CALLBACK

```cpp
#define CLTRXOP_RND_CALLBACK 0x80
```

B2b8: Use own random number generator instead of OS one (not recommended but for debug purposes useful), only supported for velocity kernel, see [TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd). 

**Deprecated**: 

not supported anymore 

### define CLTRXOP_OMIT_CHECKSUM_CHECK

```cpp
#define CLTRXOP_OMIT_CHECKSUM_CHECK 0x01
```

B3b1: VFI-Reader: Dont calculate checksums of configuration files    Only effective on [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

### define CLTRXOP_STOP_ON_CHKSUM_DIFF

```cpp
#define CLTRXOP_STOP_ON_CHKSUM_DIFF 0x02
```

B3b2: VFI-Reader: abort transaction when checksums of configuration files changed    Only effective on [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

### define CLTRXOP_NO_AMOUNT_PRECHECK

```cpp
#define CLTRXOP_NO_AMOUNT_PRECHECK 0x08
```

--> This results in terminate or fallabck later on 

B3b4: Disable the amount precheck --> even tap card is requested (Setup successful) if the txn amount is higher than the highest transaction limit of any AID / kernel. 


### define CLTRXOP_L1_ERROR_CALLBACK

```cpp
#define CLTRXOP_L1_ERROR_CALLBACK 0x10
```

"Use 1 card only" ([EMV_ADK_TXT_2_CARDS_IN_FIELD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-2-cards-in-field)) in case 2 cards are detected    Precondition: UI scheme "default" is set, use [INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-ui-scheme-default)

B3b5: Enable notification callback for display "Error, try again" ([EMV_ADK_TXT_RETAP_SAME_L1](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-retap-same-l1)) in case of L1 error and 


### define CLTRXOP_SETUP_WAIT_FOR_ERROR

```cpp
#define CLTRXOP_SETUP_WAIT_FOR_ERROR 0x20
```

this is already detected in [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) rather than in [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline). 

B3b6: VFI-Reader: [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) waits 10 ms for a negative answer from VFI-Reader so in case of VFI-Reader having problems, 


### define CLTRXOP_WEEK_PRIORITY_APPS

```cpp
#define CLTRXOP_WEEK_PRIORITY_APPS 0x40
```

B3b7: Ignore priority applications that are not part of the terminal candidate list. 

### define CLTRXOP_PRELOAD_TRANSACTION

```cpp
#define CLTRXOP_PRELOAD_TRANSACTION 0x80
```

B3b8: Preload feature: perform preliminary process and prepare database for payment without starting the transaction. Required for VAS processing using NFC ADK on VFI reader. 

### define CLTRXOP_KEEP_MULTIPLE_KERNEL

```cpp
#define CLTRXOP_KEEP_MULTIPLE_KERNEL 0x01
```

B4b1: After Final Select keep all AID-kernel combinations for the selected AID. 

### define CLTRXOP_TIP_AMOUNT_ZERO

```cpp
#define CLTRXOP_TIP_AMOUNT_ZERO 0x02
```

B4b2: Card holder confirmed zero amount within tip amount input dialog. In case of TIP setting DF22 position 4 = 3 the the transaction shall not be made suitable for a tip follow-up. 

### define CLTRXOP_SILENT_ON_EMPTY_LIST

```cpp
#define CLTRXOP_SILENT_ON_EMPTY_LIST 0x04
```

B4b3: In case of empty candidate list (return code [EMV_ADK_TXN_CTLS_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-empty-list)) suppress error tone and LED processing (LEDs off after 750ms). 

### define CLTRXOP_CVM_REQUIRED

```cpp
#define CLTRXOP_CVM_REQUIRED 0x08
```

B4b4: Force CVM for this transaction due to a special business use case. Basically implemented by internally setting the CVM required limits to zero. 

### define CLTRXOP_LONG_TAP_TIMER

```cpp
#define CLTRXOP_LONG_TAP_TIMER 0x10
```


B4b5: Set timer for Present And Hold timeout function according JCB Contactless IC Terminal Specification with value of Removal Timeout unless 0. In case of timeout contactless field is powered-off, "Card Read OK" display request is sent and light and sound indicators are triggered. For details please see [Present And Hold Transaction ("Long Tap")]


### define CLTRXOP_SEND_POI_INFORMATION

```cpp
#define CLTRXOP_SEND_POI_INFORMATION 0x20
```

B4b6: Activate Entry Point's Send POI Information feature. 

### define CLTRXOP_BEEP_BY_BUZZER

```cpp
#define CLTRXOP_BEEP_BY_BUZZER 0x40
```

B4b7: Use buzzer instead of sound library on some platforms (e.g. Android and VOS-3). This is for lower latency with the drawback that the volume is fixed. 

### define CLTRXOP_BEEP_OS_VOLUME

```cpp
#define CLTRXOP_BEEP_OS_VOLUME 0x80
```

B4b7: On Android system the OS setting controls the volume. The OS volume is respected down to certain still hearable minimal value to avoid missing beep. For switching off (e.g. automated test run) set [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume) to zero. 

### define EMV_CTLS_TRAN_TYPE_PURE_GETDATA

```cpp
#define EMV_CTLS_TRAN_TYPE_PURE_GETDATA 0x78
```

Gemalto/Pure: Retrieval of application proprietary data elements using GET DATA command, needs to be activated by means of [EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-getdata-0). 

### define EMV_CTLS_TRAN_TYPE_PURE_PUTDATA

```cpp
#define EMV_CTLS_TRAN_TYPE_PURE_PUTDATA 0x79
```

Gemalto/Pure: Update of application data proprietary elements using PUT DATA command, needs to be activated by means of [EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-putdata-0). 

### define EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE

```cpp
#define EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE 0x90
```


Gemalto/Pure: Default value for transaction type of "Application Authentication Transaction" 

 Special type of transaction allowing the terminal to only authenticate the contactless device, needs to be activated by [Gemalto/Pure: Application flow capabilities](group___d_e_f___f_l_o_w___g_k.md)

 Value can be changed by means of [EMV_CTLS_APPLIDATA_GK_TYPE::AppliAuthTransType_DFAB5A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-appliauthtranstype-dfab5a)


### define CLTRX_PASSTHROUGH_OFF

```cpp
#define CLTRX_PASSTHROUGH_OFF 0x00
```

no passthrough mode (default) 

### define CLTRX_PASSTHROUGH_NONISO

```cpp
#define CLTRX_PASSTHROUGH_NONISO 0x01
```

goto passtrough mode for non ISO 14443 cards (e.g. Mifare) 

### define CLTRX_PASSTHROUGH_ALL

```cpp
#define CLTRX_PASSTHROUGH_ALL 0x02
```

goto passtrough mode for all cards 

### define CLTRX_CARDTYPE_ISO

```cpp
#define CLTRX_CARDTYPE_ISO 0x01
```

ISO 14443A,B. 

### define CLTRX_CARDTYPE_MIFARE

```cpp
#define CLTRX_CARDTYPE_MIFARE 0x02
```

Mifare. 

### define CLTRX_CARDTYPE_OTHER

```cpp
#define CLTRX_CARDTYPE_OTHER 0x03
```

other contactless card 

### define INPUT_CTLS_SEL_AMOUNT

```cpp
#define INPUT_CTLS_SEL_AMOUNT 0x01
```

B1b1: [EMV_CTLS_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount). 

### define INPUT_CTLS_SEL_AMOUNT_CURRENCY

```cpp
#define INPUT_CTLS_SEL_AMOUNT_CURRENCY 0x02
```

B1b2: [EMV_CTLS_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans). 

### define INPUT_CTLS_SEL_CUREXPONENT

```cpp
#define INPUT_CTLS_SEL_CUREXPONENT 0x04
```

B1b3: [EMV_CTLS_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans). 

### define INPUT_CTLS_SEL_DATE

```cpp
#define INPUT_CTLS_SEL_DATE 0x08
```

B1b4: [EMV_CTLS_PAYMENT_STRUCT::Date](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date). 

### define INPUT_CTLS_SEL_TIME

```cpp
#define INPUT_CTLS_SEL_TIME 0x10
```

B1b5: [EMV_CTLS_PAYMENT_STRUCT::Time](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time). 

### define INPUT_CTLS_SEL_TTYPE

```cpp
#define INPUT_CTLS_SEL_TTYPE 0x20
```

B1b6: [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype). 

### define INPUT_CTLS_SEL_EXCLUDE_AID

```cpp
#define INPUT_CTLS_SEL_EXCLUDE_AID 0x40
```

B1b7: [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids). 

### define INPUT_CTLS_SEL_FORCE_ONLINE

```cpp
#define INPUT_CTLS_SEL_FORCE_ONLINE 0x80
```

B1b8: [EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define INPUT_CTLS_SEL_ONLINE_SWITCH

```cpp
#define INPUT_CTLS_SEL_ONLINE_SWITCH 0x01
```

B2b1: [EMV_CTLS_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 

### define INPUT_CTLS_SEL_TXN_COUNTER

```cpp
#define INPUT_CTLS_SEL_TXN_COUNTER 0x02
```

B2b2: [EMV_CTLS_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount). 

### define INPUT_CTLS_SEL_CB_AMOUNT

```cpp
#define INPUT_CTLS_SEL_CB_AMOUNT 0x04
```

B2b3: [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount). 

### define INPUT_CTLS_SEL_ACCOUNT_TYPE

```cpp
#define INPUT_CTLS_SEL_ACCOUNT_TYPE 0x08
```

B2b4: [EMV_CTLS_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype). 

### define INPUT_CTLS_SEL_TXN_OPTIONS

```cpp
#define INPUT_CTLS_SEL_TXN_OPTIONS 0x10
```

B2b5: [EMV_CTLS_START_STRUCT::TxnOptions](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_CTLS_SEL_POLL_TIMEOUT

```cpp
#define INPUT_CTLS_SEL_POLL_TIMEOUT 0x20
```

B2b6: [EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout). 

### define INPUT_CTLS_SEL_PASSTHROUGH

```cpp
#define INPUT_CTLS_SEL_PASSTHROUGH 0x40
```

B2b7: [EMV_CTLS_START_STRUCT::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes). 

### define INPUT_CTLS_SEL_ADD_TAGS

```cpp
#define INPUT_CTLS_SEL_ADD_TAGS 0x80
```

B2b8: 

**Deprecated**: 

Don't use [EMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) instead. 

### define INPUT_CTLS_SEL_EXCLUDE_COMBO

```cpp
#define INPUT_CTLS_SEL_EXCLUDE_COMBO 0x01
```

B3b1: [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos). 

### define EMV_CTLS_SETUPTRX_RES_CHKSUM_DIFF

```cpp
#define EMV_CTLS_SETUPTRX_RES_CHKSUM_DIFF 0x01
```

B1b1: Checksum of configuration files changed, call of [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration) may be needed. 

### define OUTPUT_CTLS_SEL_TXN_INFO

```cpp
#define OUTPUT_CTLS_SEL_TXN_INFO 0x01
```

B1b1: [EMV_CTLS_STARTRES_STRUCT::TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation). 

### define INPUT_CTLS_ONL_ONLINE_RESP

```cpp
#define INPUT_CTLS_ONL_ONLINE_RESP 0x01
```

B1b1: [EMV_CTLS_HOST_STRUCT::OnlineResult](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-onlineresult). 

### define INPUT_CTLS_ONL_AUTH_RESP

```cpp
#define INPUT_CTLS_ONL_AUTH_RESP 0x02
```

B1b2: [EMV_CTLS_HOST_STRUCT::AuthResp](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp). 

### define INPUT_CTLS_ONL_TXN_OPTIONS

```cpp
#define INPUT_CTLS_ONL_TXN_OPTIONS 0x04
```

B1b3: [EMV_CTLS_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_CTLS_ONL_SCRIPT

```cpp
#define INPUT_CTLS_ONL_SCRIPT 0x08
```

B1b4: [EMV_CTLS_HOST_STRUCT::ScriptData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-scriptdata). 

### define INPUT_CTLS_ONL_AUTHDATA

```cpp
#define INPUT_CTLS_ONL_AUTHDATA 0x10
```

B1b5: [EMV_CTLS_HOST_STRUCT::AuthData](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authdata). 

### define INPUT_CTLS_ONL_ARC_POSITIVE

```cpp
#define INPUT_CTLS_ONL_ARC_POSITIVE 0x20
```

B1b6: [EMV_CTLS_HOST_STRUCT::AuthResp_Positive](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-positive). 

### define INPUT_CTLS_ONL_ARC_SWITCH_IF

```cpp
#define INPUT_CTLS_ONL_ARC_SWITCH_IF 0x40
```

B1b7: [EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-switchinterface). 

### define INPUT_CTLS_ONL_ARC_ONLINE_PIN

```cpp
#define INPUT_CTLS_ONL_ARC_ONLINE_PIN 0x80
```

B1b8: [EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-authresp-onlinepin). 

### define INPUT_CTLS_ONL_AMOUNT

```cpp
#define INPUT_CTLS_ONL_AMOUNT 0x01
```

B2b1: [EMV_CTLS_HOST_STRUCT::amountUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountupd). 

### define INPUT_CTLS_ONL_AMOUNT_OTH

```cpp
#define INPUT_CTLS_ONL_AMOUNT_OTH 0x02
```

B2b2: [EMV_CTLS_HOST_STRUCT::amountOthUpd](struct_e_m_v___c_t_l_s___h_o_s_t___s_t_r_u_c_t.md#variable-amountothupd). 

### define EMV_ADK_CL_SCRIPTRES_LEN

```cpp
#define EMV_ADK_CL_SCRIPTRES_LEN (EMV_ADK_SCRIPT_RESULT_MAX * EMV_ADK_SCRIPT_RESULT_LEN + 6)
```

Max. length of data in [EMV_CTLS_TRANSRES_STRUCT::ScriptResults](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults) (+6 for TLV format, not yet supported) 

### define INPUT_CTLS_CONT_OFFL_OPTIONS

```cpp
#define INPUT_CTLS_CONT_OFFL_OPTIONS 0x01
```

enables [EMV_CTLS_CONT_OFFL_STRUCT::options](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md#variable-options)

### define INPUT_CTLS_CONT_OFFL_OPT_PIN

```cpp
#define INPUT_CTLS_CONT_OFFL_OPT_PIN 0x01
```

B1b1: Restart for Offline PIN verification (for girocard) 

### define INPUT_CTLS_CONT_OFFL_OPT_PIN_CANCELLED

```cpp
#define INPUT_CTLS_CONT_OFFL_OPT_PIN_CANCELLED 0x02
```

B1b2-3 = 1: PIN input cancelled (for Epal Post TAA after Online PIN) 

### define INPUT_CTLS_CONT_OFFL_OPT_PIN_BYPASSED

```cpp
#define INPUT_CTLS_CONT_OFFL_OPT_PIN_BYPASSED 0x04
```

B1b2-3 = 2: PIN bypassed (for Epal Post TAA after Online PIN) 

### define INPUT_CTLS_CONT_OFFL_OPT_PIN_ERROR

```cpp
#define INPUT_CTLS_CONT_OFFL_OPT_PIN_ERROR 0x06
```

B1b2-3 = 3: PIN pad not present or not working (for Epal Post TAA after Online PIN) 

### define TRX_CTLS_STATUSINFO

```cpp
#define TRX_CTLS_STATUSINFO 0x01
```

B1b1: [EMV_CTLS_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo). 

### define TRX_CTLS_9F27_CRYPTINFO

```cpp
#define TRX_CTLS_9F27_CRYPTINFO 0x02
```

B1b2: [EMV_CTLS_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo). 

### define TRX_CTLS_9F36_ATC

```cpp
#define TRX_CTLS_9F36_ATC 0x04
```

B1b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F36_ATC](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f36-atc). 

### define TRX_CTLS_9F26_CRYPTOGRAMM

```cpp
#define TRX_CTLS_9F26_CRYPTOGRAMM 0x08
```

B1b4: [EMV_CTLS_TRANSRES_STRUCT::T_9F26_Cryptogramm](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f26-cryptogramm). 

### define TRX_CTLS_5A_PAN

```cpp
#define TRX_CTLS_5A_PAN 0x10
```

B1b5: [EMV_CTLS_TRANSRES_STRUCT::T_5A_PAN](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5a-pan). 

### define TRX_CTLS_9F39_POS_ENTRY_MODE

```cpp
#define TRX_CTLS_9F39_POS_ENTRY_MODE 0x20
```

B1b6: [EMV_CTLS_TRANSRES_STRUCT::T_9F39_POSEntryMode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f39-posentrymode). 

### define TRX_CTLS_5F24_APPEXPDATE

```cpp
#define TRX_CTLS_5F24_APPEXPDATE 0x40
```

B1b7: [EMV_CTLS_TRANSRES_STRUCT::T_5F24_AppExpDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f24-appexpdate). 

### define TRX_CTLS_9F41_TRANSCOUNT

```cpp
#define TRX_CTLS_9F41_TRANSCOUNT 0x80
```

B1b8: [EMV_CTLS_TRANSRES_STRUCT::T_9F41_TransCount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f41-transcount). 

### define TRX_CTLS_5F34_PAN_SEQ_NUMBER

```cpp
#define TRX_CTLS_5F34_PAN_SEQ_NUMBER 0x01
```

B2b1: [EMV_CTLS_TRANSRES_STRUCT::T_5F34_PANSequenceNo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f34-pansequenceno). 

### define TRX_CTLS_57_DATA_TRACK2

```cpp
#define TRX_CTLS_57_DATA_TRACK2 0x02
```

B2b2: [EMV_CTLS_TRANSRES_STRUCT::T_57_DataTrack2](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-57-datatrack2). 

### define TRX_CTLS_9F10_DATAISSUER

```cpp
#define TRX_CTLS_9F10_DATAISSUER 0x04
```

B2b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F10_DataIssuer](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f10-dataissuer). 

### define TRX_CTLS_9F37_RANDOM_NUMBER

```cpp
#define TRX_CTLS_9F37_RANDOM_NUMBER 0x08
```

B2b4: [EMV_CTLS_TRANSRES_STRUCT::T_9F37_RandomNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f37-randomnumber). 

### define TRX_CTLS_95_TVR

```cpp
#define TRX_CTLS_95_TVR 0x10
```

B2b5: [EMV_CTLS_TRANSRES_STRUCT::T_95_TVR](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-95-tvr). 

### define TRX_CTLS_9A_DATE

```cpp
#define TRX_CTLS_9A_DATE 0x20
```

B2b6: [EMV_CTLS_TRANSRES_STRUCT::T_9A_Date](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9a-date). 

### define TRX_CTLS_9F21_TIME

```cpp
#define TRX_CTLS_9F21_TIME 0x40
```

B2b7: [EMV_CTLS_TRANSRES_STRUCT::T_9F21_Time](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f21-time). 

### define TRX_CTLS_9C_TRANSTYPE

```cpp
#define TRX_CTLS_9C_TRANSTYPE 0x80
```

B2b8: [EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 

### define TRX_CTLS_5F2A_TRANS_CURRENCY

```cpp
#define TRX_CTLS_5F2A_TRANS_CURRENCY 0x01
```

B3b1: [EMV_CTLS_TRANSRES_STRUCT::T_5F2A_CurrencyTrans](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2a-currencytrans). 

### define TRX_CTLS_82_AIP

```cpp
#define TRX_CTLS_82_AIP 0x02
```

B3b2: [EMV_CTLS_TRANSRES_STRUCT::T_82_AIP](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-82-aip). 

### define TRX_CTLS_9F1A_TERM_COUNTRY_CODE

```cpp
#define TRX_CTLS_9F1A_TERM_COUNTRY_CODE 0x04
```

B3b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F1A_TermCountryCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1a-termcountrycode). 

### define TRX_CTLS_9F34_CVM_RES

```cpp
#define TRX_CTLS_9F34_CVM_RES 0x08
```

B3b4: [EMV_CTLS_TRANSRES_STRUCT::T_9F34_CVM_Res](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f34-cvm-res). 

### define TRX_CTLS_9F33_TERMCAP

```cpp
#define TRX_CTLS_9F33_TERMCAP 0x10
```

B3b5: [EMV_CTLS_TRANSRES_STRUCT::T_9F33_TermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f33-termcap). 

### define TRX_CTLS_9F35_TERMTYP

```cpp
#define TRX_CTLS_9F35_TERMTYP 0x20
```

B3b6: [EMV_CTLS_TRANSRES_STRUCT::T_9F35_TermTyp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f35-termtyp). 

### define TRX_CTLS_9F1E_IFDSERIALNUMBER

```cpp
#define TRX_CTLS_9F1E_IFDSERIALNUMBER 0x40
```

B3b7: [EMV_CTLS_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f1e-ifdserialnumber). 

### define TRX_CTLS_84_DFNAME

```cpp
#define TRX_CTLS_84_DFNAME 0x80
```

B3b8: [EMV_CTLS_TRANSRES_STRUCT::T_84_DFName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname). 

### define TRX_CTLS_9F09_VERNUM

```cpp
#define TRX_CTLS_9F09_VERNUM 0x01
```

B4b1: [EMV_CTLS_TRANSRES_STRUCT::T_9F09_VerNum](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f09-vernum). 

### define TRX_CTLS_9B_TSI

```cpp
#define TRX_CTLS_9B_TSI 0x02
```

B4b2: [EMV_CTLS_TRANSRES_STRUCT::T_9B_TSI](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9b-tsi). 

### define TRX_CTLS_9F06_AID

```cpp
#define TRX_CTLS_9F06_AID 0x04
```

B4b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F06_AID](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f06-aid). 

### define TRX_CTLS_ADDITIONAL_TAGS

```cpp
#define TRX_CTLS_ADDITIONAL_TAGS 0x08
```

B4b4: 

**Deprecated**: 

Use [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) instead. 

### define TRX_CTLS_APPNAME

```cpp
#define TRX_CTLS_APPNAME 0x10
```

B4b5: [EMV_CTLS_TRANSRES_STRUCT::AppName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname). 

### define TRX_CTLS_5F25_APPEFFDATE

```cpp
#define TRX_CTLS_5F25_APPEFFDATE 0x20
```

B4b6: [EMV_CTLS_TRANSRES_STRUCT::T_5F25_AppEffDate](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f25-appeffdate). 

### define TRX_CTLS_5F28_ISSCOUNTRYCODE

```cpp
#define TRX_CTLS_5F28_ISSCOUNTRYCODE 0x40
```

B4b7: [EMV_CTLS_TRANSRES_STRUCT::T_5F28_IssCountryCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f28-isscountrycode). 

### define TRX_CTLS_9F45_DATAAUTHCODE

```cpp
#define TRX_CTLS_9F45_DATAAUTHCODE 0x80
```

B4b8: [EMV_CTLS_TRANSRES_STRUCT::T_9F45_DataAuthCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f45-dataauthcode). 

### define TRX_CTLS_9F4C_ICCDYNNUMBER

```cpp
#define TRX_CTLS_9F4C_ICCDYNNUMBER 0x01
```

B5b1: [EMV_CTLS_TRANSRES_STRUCT::T_9F4C_ICCDynNumber](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f4c-iccdynnumber). 

### define TRX_CTLS_TAC_DENIAL

```cpp
#define TRX_CTLS_TAC_DENIAL 0x02
```

B5b2: [EMV_CTLS_TRANSRES_STRUCT::TACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdenial). 

### define TRX_CTLS_TAC_ONLINE

```cpp
#define TRX_CTLS_TAC_ONLINE 0x04
```

B5b3: [EMV_CTLS_TRANSRES_STRUCT::TACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-taconline). 

### define TRX_CTLS_TAC_DEFAULT

```cpp
#define TRX_CTLS_TAC_DEFAULT 0x08
```

B5b4: [EMV_CTLS_TRANSRES_STRUCT::TACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-tacdefault). 

### define TRX_CTLS_9F0E_IAC_DENIAL

```cpp
#define TRX_CTLS_9F0E_IAC_DENIAL 0x10
```

B5b5: [EMV_CTLS_TRANSRES_STRUCT::T_9F0E_IACDenial](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0e-iacdenial). 

### define TRX_CTLS_9F0F_IAC_ONLINE

```cpp
#define TRX_CTLS_9F0F_IAC_ONLINE 0x20
```

B5b6: [EMV_CTLS_TRANSRES_STRUCT::T_9F0F_IACOnline](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0f-iaconline). 

### define TRX_CTLS_9F0D_IAC_DEFAULT

```cpp
#define TRX_CTLS_9F0D_IAC_DEFAULT 0x40
```

B5b7: [EMV_CTLS_TRANSRES_STRUCT::T_9F0D_IACDefault](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f0d-iacdefault). 

### define TRX_CTLS_9F40_TERMCAP

```cpp
#define TRX_CTLS_9F40_TERMCAP 0x80
```

B5b8: [EMV_CTLS_TRANSRES_STRUCT::T_9F40_AddTermCap](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f40-addtermcap). 

### define TRX_CTLS_RFU_B6B1

```cpp
#define TRX_CTLS_RFU_B6B1 0x01
```

B6b1: RFU. 

### define TRX_CTLS_9F16_MERCHANT_ID

```cpp
#define TRX_CTLS_9F16_MERCHANT_ID 0x02
```

B6b2: [EMV_CTLS_TRANSRES_STRUCT::T_9F16_MerchIdent](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f16-merchident). 

### define TRX_CTLS_RFU_B6B3

```cpp
#define TRX_CTLS_RFU_B6B3 0x04
```

B6b3: RFU. 

### define TRX_CTLS_5F20_CARDHOLDER

```cpp
#define TRX_CTLS_5F20_CARDHOLDER 0x08
```

B6b4: [EMV_CTLS_TRANSRES_STRUCT::T_5F20_Cardholder](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f20-cardholder). 

### define TRX_CTLS_5F2D_LANG_PREFERENCE

```cpp
#define TRX_CTLS_5F2D_LANG_PREFERENCE 0x10
```

B6b5: [EMV_CTLS_TRANSRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref). 

### define TRX_CTLS_9F08_ICC_APPLI_VERS_NO

```cpp
#define TRX_CTLS_9F08_ICC_APPLI_VERS_NO 0x20
```

B6b6: [EMV_CTLS_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f08-icc-appli-vers-no). 

### define TRX_CTLS_5F36_TRX_CURRENCY_EXPO

```cpp
#define TRX_CTLS_5F36_TRX_CURRENCY_EXPO 0x40
```

B6b7: [EMV_CTLS_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f36-trx-currency-exp). 

### define TRX_CTLS_5F30_SERVICE_CODE

```cpp
#define TRX_CTLS_5F30_SERVICE_CODE 0x80
```

B6b8: [EMV_CTLS_TRANSRES_STRUCT::T_5F30_ServiceCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-5f30-servicecode). 

### define TRX_CTLS_CTLS_MODES

```cpp
#define TRX_CTLS_CTLS_MODES 0x01
```

B7b1: [EMV_CTLS_TRANSRES_STRUCT::CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode). 

### define TRX_CTLS_9F66_TTQ

```cpp
#define TRX_CTLS_9F66_TTQ 0x02
```

B7b2: [EMV_CTLS_TRANSRES_STRUCT::T_9F66_CL_TTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f66-cl-ttq). 

### define TRX_CTLS_DF5D_CL_MAGSTRIPE

```cpp
#define TRX_CTLS_DF5D_CL_MAGSTRIPE 0x04
```

B7b3: [EMV_CTLS_TRANSRES_STRUCT::T_DF5D_CL_MAGSTRIPE_T2](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df5d-cl-magstripe-t2). 

### define TRX_CTLS_9F6C_VISA_CTQ

```cpp
#define TRX_CTLS_9F6C_VISA_CTQ 0x08
```

B7b4: [EMV_CTLS_TRANSRES_STRUCT::T_9F6C_CL_VISA_CTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f6c-cl-visa-ctq). 

### define TRX_CTLS_9F5D_VISA_AOSA

```cpp
#define TRX_CTLS_9F5D_VISA_AOSA 0x10
```

B7b5: [EMV_CTLS_TRANSRES_STRUCT::T_9F5D_CL_VISA_AOSA](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f5d-cl-visa-aosa). 

### define TRX_CTLS_DF8104_MC_BALANCE

```cpp
#define TRX_CTLS_DF8104_MC_BALANCE 0x20
```

B7b6: [EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance). 

### define TRX_CTLS_DF8105_MC_BALANCE

```cpp
#define TRX_CTLS_DF8105_MC_BALANCE 0x40
```

B7b7: [EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance). 

### define TRX_CTLS_DF64_KERNEL_DEBUG

```cpp
#define TRX_CTLS_DF64_KERNEL_DEBUG 0x80
```

B7b8: [EMV_CTLS_TRANSRES_STRUCT::T_DF64_KernelDebugData](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata). 

### define TRX_CTLS_9F02_AMOUNT

```cpp
#define TRX_CTLS_9F02_AMOUNT 0x01
```

B8b1: [EMV_CTLS_TRANSRES_STRUCT::T_9F02_TXNAmount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f02-txnamount). 

### define TRX_CTLS_9F03_CB_AMOUNT

```cpp
#define TRX_CTLS_9F03_CB_AMOUNT 0x02
```

B8b2: [EMV_CTLS_TRANSRES_STRUCT::T_9F03_TXNAdditionalAmount](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f03-txnadditionalamount). 

### define TRX_CTLS_9F53_MC_CATCODE

```cpp
#define TRX_CTLS_9F53_MC_CATCODE 0x04
```

B8b3: [EMV_CTLS_TRANSRES_STRUCT::T_9F53_MC_CatCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f53-mc-catcode). 

### define TRX_CTLS_CARDTYPE

```cpp
#define TRX_CTLS_CARDTYPE 0x08
```

B8b4: [EMV_CTLS_TRANSRES_STRUCT::ctlsCardType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-ctlscardtype). 

### define TRX_CTLS_SCRIPTRESULTS

```cpp
#define TRX_CTLS_SCRIPTRESULTS 0x10
```

B8B5: [EMV_CTLS_TRANSRES_STRUCT::ScriptResults](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults). 

### define EXIT_CTLS_BASE

```cpp
#define EXIT_CTLS_BASE 0x00
```


set Framework to base-initialised state. Free memory Transactions not possible 


### define EXIT_CTLS_STOP_LEDS

```cpp
#define EXIT_CTLS_STOP_LEDS 0x01
```

additionally stop LED-Blinking-thread when exit 

set Framework to base-initialised state. 


### define EXIT_CTLS_COMPLETE

```cpp
#define EXIT_CTLS_COMPLETE 0x02
```


set Framework to uninitialised state. Led-Blinking No callbacks will be send after this. Send last Callback with TAG_BF0F_EXIT_CALLBACK_THREAD 


### define EXIT_CTLS_SEND_CALLBACK

```cpp
#define EXIT_CTLS_SEND_CALLBACK EXIT_CTLS_COMPLETE
```


**Deprecated**: 

use [EXIT_CTLS_COMPLETE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-complete)

### define END_TXN_CTLS_NO_LEDS_OFF

```cpp
#define END_TXN_CTLS_NO_LEDS_OFF 0x01
```

No LEDs off. 

### define MAX_CTLS_CONF_KEYS

```cpp
#define MAX_CTLS_CONF_KEYS 99
```

max. number of allowed CAP keys, limitation for VFI-Reader 

### define EMV_CTLS_DE_REQ_DEK

```cpp
#define EMV_CTLS_DE_REQ_DEK 0x00
```

DEK request. 

### define EMV_CTLS_DE_REQ_DET

```cpp
#define EMV_CTLS_DE_REQ_DET 0x01
```

DET request. 

### define EMV_CTLS_DE_STATE_0

```cpp
#define EMV_CTLS_DE_STATE_0 0x00
```

DataExchange Inactive. 

### define EMV_CTLS_DE_STATE_1

```cpp
#define EMV_CTLS_DE_STATE_1 0x01
```

MSD/Chip - Waiting for PDOL Data. 

### define EMV_CTLS_DE_STATE_2

```cpp
#define EMV_CTLS_DE_STATE_2 0x02
```

MSD - Data update prior to RR. 

### define EMV_CTLS_DE_STATE_3

```cpp
#define EMV_CTLS_DE_STATE_3 0x03
```

MSD - Waiting for proceed to first write flag. 

### define EMV_CTLS_DE_STATE_4

```cpp
#define EMV_CTLS_DE_STATE_4 0x04
```

MSD - Final data to send. 

### define EMV_CTLS_DE_STATE_5

```cpp
#define EMV_CTLS_DE_STATE_5 0x05
```

Chip - Update befre/during RR/GD. 

### define EMV_CTLS_DE_STATE_6

```cpp
#define EMV_CTLS_DE_STATE_6 0x06
```

Chip - Data update after RR. 

### define EMV_CTLS_DE_STATE_7

```cpp
#define EMV_CTLS_DE_STATE_7 0x07
```

Chip - Waiting for proceed to first write flag. 

### define EMV_CTLS_DE_STATE_8

```cpp
#define EMV_CTLS_DE_STATE_8 0x08
```

Chip - Final data to send. 

### define EMV_CTLS_DE_MODE_STOP

```cpp
#define EMV_CTLS_DE_MODE_STOP 0x00
```

User wishes transaction to terminate. 

### define EMV_CTLS_DE_MODE_CONT

```cpp
#define EMV_CTLS_DE_MODE_CONT 0x01
```

User wishes transaction processing to continue from point of interruption. 

### define EMV_CTLS_DE_MODE_MORE

```cpp
#define EMV_CTLS_DE_MODE_MORE 0x02
```

User wishes to supply more data. 

### define TAG_BF0B_INIT_CALLBACK_THREAD

```cpp
#define TAG_BF0B_INIT_CALLBACK_THREAD 0xBF0B
```

Signals the creation of the "notification callback thread" (inside `libEMV_CTLS_Link.so`) 

Data provided by Framework via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback) is relayed. 

 When thread is stopped [TAG_BF0F_EXIT_CALLBACK_THREAD](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0f-exit-callback-thread) is sent. 

** INPUT: **&mdash;
** OUTPUT: **&mdash; (notify, not generated in FW, but in client) 


### define TAG_BF0C_CTLS_CBK_APP_SELECTED

```cpp
#define TAG_BF0C_CTLS_CBK_APP_SELECTED 0xBF0C
```

Signals that application is selected. 

**Note**: For restart without LED flickering activate transaction flow option [CLTRXOP_REPEAT_L1](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-repeat-l1)

Used Kernel can be changed, invoked depending on [CLTRXOP_APPSELECTED_CALLBACK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-appselected-callback). 

** INPUT: ** AID (tag [TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)) 
** INPUT: ** application label (tag [TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)) 
** INPUT: ** application origin index of candidate list (tag [TAG_DF60_VELOCITY_ORIG_IDX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df60-velocity-orig-idx)) 
** INPUT: ** application language preferences of candidate list (tag [TAG_5F2D_LANGUAGE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2d-language)) 
** INPUT: ** application kernel ID (tag [TAG_DFD003_Kernel_ID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd003-kernel-id)) 
** INPUT: ** Processing Result Bitmap of Entry Point (tag [TAG_DF63_VELOCITY_EP_PRB](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df63-velocity-ep-prb)), contains flag for 9F2A presence (see emv_cl.h from Velocity Entry Point) 
** INPUT: ** FCI Issuer Discretionary Data from Final Select response (tag [TAG_BF0C_FCI_ISS_DISCR](group___e_m_v_c_o___t_a_g_s.md#define-tag-bf0c-fci-iss-discr)) 
** OUTPUT: ** 3-byte kernel ID to be used for the transaction (tag [TAG_DF7E_KERNEL_TO_USE](group___t_l_v___c_b_c_k.md#define-tag-df7e-kernel-to-use)), e.g. 0x020000 for PayPass, use 0xFF0000 to abort the transaction, use 0xFE0000 to silently abort, use 0x000000 to force fallback to contact interface 


### define TAG_BF0E_CBK_DATA_EXCHANGE

```cpp
#define TAG_BF0E_CBK_DATA_EXCHANGE 0xBF0E
```

PayPass3 DataExchange. 

DataExchange can be enabled by [EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-enable-data-exchange-0)

** INPUT: **[TAG_DF8F58_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8f58-de-request), [TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id), [TAG_DFAB01_KERNEL_ID](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab01-kernel-id), [TAG_FF8104_DE_DATA_TO_SEND](group___m_c___t_a_g_s.md#define-tag-ff8104-de-data-to-send), [TAG_DF8106_DE_DATA_NEEDED](group___m_c___t_a_g_s.md#define-tag-df8106-de-data-needed), [TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state)
** OUTPUT: **[TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode), [TAG_FF10_DE_DET_DATA](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff10-de-det-data)


### define TAG_BF0F_EXIT_CALLBACK_THREAD

```cpp
#define TAG_BF0F_EXIT_CALLBACK_THREAD 0xBF0F
```

Signals the stop of the "notification callback thread" (inside `libEMV_CTLS_Link.so`) 

This thread was created at [TAG_BF0B_INIT_CALLBACK_THREAD](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0b-init-callback-thread). 

** INPUT: **&mdash;
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define TAG_BF10_CTLS_CBK_LEDS

```cpp
#define TAG_BF10_CTLS_CBK_LEDS 0xBF10
```

Switch soft LEDs. 

Invoked depending on [EMV_CTLS_INIT_OPT_LED_CBK_EXT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-led-cbk-ext)

 Not sent in case the terminal has physical (hardware) LEDs. 

 Not sent in SDI standard mode. 

 See also [LED Handling]. 

** INPUT: ** State of CTLS LEDs (1-byte-bitstring, e.g. [CONTACTLESS_LED_FIRST](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-first)), in tag [TAG_C8_LED_STATE](group___v_e_r_i___t_a_g_s.md#define-tag-c8-led-state)
** INPUT: ** Additional info (1-byte-bitstring, e.g. [CBCK_LED_ADD_INFO_DONT_TRACE](group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md#define-cbck-led-add-info-dont-trace)), in tag [TAG_DF8F60_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8f60-led-add-info)
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define TAG_BF12_CBK_MODIFY_CAND

```cpp
#define TAG_BF12_CBK_MODIFY_CAND 0xBF12
```

Modify candidate list. 

Invoked depending on [CLTRXOP_CANDLIST_CALLBACK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-candlist-callback). 
[EMV_CTLS_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata) may be called inside this callback to fetch additional candidate data. 

** INPUT: ** All AIDs of candidate list (each in a single tag [TAG_DF04_AID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df04-aid)) 
** INPUT: ** All application labels of candidate list (each in a single tag [TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)) 
** INPUT: ** All application origin indices of candidate list (each in a single tag [TAG_DF60_VELOCITY_ORIG_IDX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df60-velocity-orig-idx)) 
** INPUT: ** All application language preferences of candidate list (each in a single tag [TAG_5F2D_LANGUAGE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2d-language)) 
** INPUT: ** All application kernel IDs of candidate list (each in a single tag [TAG_DFD003_Kernel_ID](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-dfd003-kernel-id)) 
** INPUT: ** All combination Processing Result Bitmap of Entry Point (tag [TAG_DF63_VELOCITY_EP_PRB](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df63-velocity-ep-prb)), contains flag for 9F2A presence (see emv_cl.h from Velocity Entry Point) 
** OUTPUT: **

* [TAG_DF7F_CBK_COMM_ERR](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7f-cbk-comm-err)
* Reduced list as a list of App Index ([TAG_DF75_CBK_APP_NO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df75-cbk-app-no)), resorting only supported for velocity kernel 

 A single index > 'E0' causes abort: 'FE' results in silent [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort), others result in [EMV_ADK_TXN_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-empty-list) with silence depending on [CLTRXOP_SILENT_ON_EMPTY_LIST](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-silent-on-empty-list)For restart without LED flickering activate transaction flow option [CLTRXOP_REPEAT_L1](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-repeat-l1)

* PostProcessingOption, skip Post Processing if TRUE ([TAG_DF76_CBK_APP_POSTPROC](group___t_l_v___c_b_c_k.md#define-tag-df76-cbk-app-postproc))
* Transaction amount update ([TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth)). An amount update will restart the Entry Point pre-processing and combination selection. The Select PPSE APDU exchange is replayed (no command is sent to card). A second Candidate List Callback will be issued because the Entry Point might have other processing results. Amount updates in this second callback are not foreseen and ignored.
* [TAG_DF6C_CBK_REPEAT](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6c-cbk-repeat): Decide if ADK should repeat the callback call or not. 


### define TAG_BF13_CBK_RND

```cpp
#define TAG_BF13_CBK_RND 0xBF13
```

Random number provided by the calling application -. 

**Deprecated**: 

not supported anymore 

Usually the EMV ADK resp. L2 kernel uses the OS functionality for getting a random number. 

 Only for velocity kernel, invoked depending on [CLTRXOP_RND_CALLBACK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-rnd-callback). 

** INPUT: ** none 
** OUTPUT: ** Random number from app ([TAG_9F37_UNPREDICTABLE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f37-unpredictable-nb)) 


### define TAG_BF14_CBK_TEXT_DISPLAY

```cpp
#define TAG_BF14_CBK_TEXT_DISPLAY 0xBF14
```

Text display. 

Example: "See phone for instructions", [EMV_ADK_TXT_SEE_PHONE](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-see-phone)

 Sent by the "notification callback thread". 

** INPUT: ** text ID to be displayed by calling application, see [Application text IDs](group___a_p_p_l_i___t_e_x_t_s.md) ([TAG_DF8F12_DISPLAY_TEXT](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f12-display-text)) 
** INPUT: ** AID of processed terminal candidate ([TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)) 
** INPUT: ** Kernel Id of processed terminal candidate ([TAG_DFAB01_KERNEL_ID](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab01-kernel-id), 3 bytes) 
** INPUT: ** card's language preference ([TAG_5F2D_LANGUAGE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2d-language), 2-8 bytes) 
** INPUT: ** EMVCo Book A UI request message ID ([TAG_DF8F13_UI_MSG_ID](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f13-ui-msg-id)) 
** INPUT: ** EMVCo Book A UI request message hold time ([TAG_DF812D_MESSAGE_HOLD_TIME](group___m_c___t_a_g_s.md#define-tag-df812d-message-hold-time), 3 bytes, n 6, integer in 100ms) 
** INPUT: ** EMVCo Book A UI request message ID restart ([TAG_DF8F14_UI_MSG_ID_RESTART](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f14-ui-msg-id-restart)) 
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define TAG_BF15_CBK_CARD_TAPPED

```cpp
#define TAG_BF15_CBK_CARD_TAPPED 0xBF15
```

Notification that a card was detected. 

Calling application shall invoke [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) to fetch transaction results. 

 Is only called in polling mode ([EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout) != 0). 

** INPUT: ** result of internally called [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) (see [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info), used tag: [TAG_DF42_STATUS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df42-status)) 
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define TAG_BF16_CBK_SERVICE_SHORTLIST

```cpp
#define TAG_BF16_CBK_SERVICE_SHORTLIST 0xBF16
```

RuPay callback before GPO. 

This allows the application to forward RuPay parameters during the transaction to the card. 

 "Service Directory" and perform "Service Shortlisting". Service supported both by Card & terminal is selected. 

** INPUT: ** Card Data - Service Info from Card in [TAG_DF8F50_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8f50-rupay-gpo)
** OUTPUT: ** Application Data - Selected Service ID in [TAG_DF8F50_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8f50-rupay-gpo)


### define TAG_BF17_CBK_SERVICE_FOR_GENAC

```cpp
#define TAG_BF17_CBK_SERVICE_FOR_GENAC 0xBF17
```

RuPay callback before Generate AC. 

This allows the application to forward RuPay parameters during the transaction to the card. 

** INPUT: ** Card Data - Signature Info from Card in [TAG_DF8F51_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8f51-rupay-genac)
** OUTPUT: ** Application Data - Additional CDOL1 Tags in [TAG_DF8F51_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8f51-rupay-genac)


### define TAG_BF18_CBK_PURE_GET_PUT_DATA

```cpp
#define TAG_BF18_CBK_PURE_GET_PUT_DATA 0xBF18
```

Gemalto/Pure: provide GET DATA and/or PUT DATA input. 

Is invoked after selection of Gemalto application. 

 Depends on [EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-getdata-0) and [EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-putdata-0)

** INPUT: **&mdash;
** OUTPUT: ** GET DATA input (MSRT, [TAG_BF71_PURE_GET_DATA_MSRT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-bf71-pure-get-data-msrt)) and/or PUT DATA input (MSUT, [TAG_BF70_PURE_PUT_DATA_MSUT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-bf70-pure-put-data-msut)) 


### define TAG_BF19_CTLS_CBK_BEEP

```cpp
#define TAG_BF19_CTLS_CBK_BEEP 0xBF19
```

Application shall sound the buzzer. 

Depends on [EMV_CTLS_INIT_OPT_BEEP_CBK_EXT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-beep-cbk-ext)

** INPUT: **[TAG_CB_BEEP_SCENARIO](group___v_e_r_i___t_a_g_s.md#define-tag-cb-beep-scenario) (e.g. [EMV_CTLS_BEEP_SUCCESS](group___a_d_k___b_u_z_z_e_r.md#define-emv-ctls-beep-success)) 
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define TAG_BF7F_CTLS_CBK_TRACE

```cpp
#define TAG_BF7F_CTLS_CBK_TRACE 0xBF7F
```

Traces. 

For special use. For standard use ADK-LOG. See also [Traces]

 Invoked depending on [EMV_CTLS_INIT_OPT_TRACE](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace)

 Sent by the "notification callback thread". 

** INPUT: ** ASCII Trace ([TAG_TRACE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-trace)) 
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define EMV_CTLS_SER_Init_Framework

```cpp
#define EMV_CTLS_SER_Init_Framework(
    dataIn,
    dataInLen,
    dataOut,
    dataOutLen
)
EMV_CTLS_SER_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (dataIn), (dataInLen), (dataOut), (dataOutLen))
```


### define EMV_CTLS_INIT_OPT_BASE_INIT

```cpp
#define EMV_CTLS_INIT_OPT_BASE_INIT 0x00000001
```

base init: set options and register callback, but do not allocate memory 

### define EMV_CTLS_INIT_OPT_L1_DUMP

```cpp
#define EMV_CTLS_INIT_OPT_L1_DUMP 0x00000002
```


**Deprecated**: 

not supported anymore as non-kernel tags are collected by default 

### define EMV_CTLS_INIT_OPT_AUTO_RETAP

```cpp
#define EMV_CTLS_INIT_OPT_AUTO_RETAP 0x00000004
```

do NOT handle retaps as two separate transactions but handle retaps internally and fire message events only to the app ([TAG_BF14_CBK_TEXT_DISPLAY](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf14-cbk-text-display)), the retap returncodes (like 



* [EMV_ADK_TXN_CTLS_MOBILE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-mobile)) will not appear in this case but processing is handled on ADK level. &ndash; Detailed explanation: &ndash; VFI-Reader: The VFI-reader in general manges the retap for a mobile internally, ALWAYS. There is no chance for the ADK hand over the retap for a moblie transaction to the application. Therefore the EMV_ADK_TXN_CTLS_MOBILE does NEVER appear with VRFI-Reader. &ndash; Velocity: On velovcity the kernel is NEVER handling the retap itnernally. So the ADK can hand it over to the application. Then you would receive EMV_ADK_TXN_CTLS_MOBILE. For compatibility reasons with the VFI-Reader we have introduced that the ADK is handling the mobile retap optionally. This is configurable with this parameter. If you configure this, then also the EMV_ADK_TXN_CTLS_MOBILE is NEVER returned to the application. If you do not confgure it this returncode will appear. &ndash; Only if internal handling of the Velocity or the VFI-Reader takes place, the BF14 callback is issued to allow the application to display something. If the configuration is in that way that the app wants to handle the mobile retap according to its needs, then the BF14 is NEVER invoked. This is mutually exclusive. 


### define EMV_CTLS_INIT_OPT_CONFIG_MODE

```cpp
#define EMV_CTLS_INIT_OPT_CONFIG_MODE 0x00000008
```


**Note**: : Do not directly update configuration files if this option is active. 

Configuration is only written to files upon ExitFramework and ApplyConfiguration instead of written upon each configuration function or framework initialisation, which results in performance improvement. 


### define EMV_CTLS_INIT_OPT_USE_DEF_VT_CAPK

```cpp
#define EMV_CTLS_INIT_OPT_USE_DEF_VT_CAPK 0x00000010
```

Use "EMV_CTLS_Keys.xml" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals. 

### define EMV_CTLS_INIT_OPT_DELETE_ALL

```cpp
#define EMV_CTLS_INIT_OPT_DELETE_ALL 0x00000020
```

delete all existing configuration files using the same virtual terminal 

### define EMV_CTLS_INIT_OPT_USE_VFI

```cpp
#define EMV_CTLS_INIT_OPT_USE_VFI 0x00000040
```

option that ensures VFI Reader will be used 

**Deprecated**: 

Ignored because combined CTLS framework not continued anymore 

### define EMV_CTLS_INIT_OPT_USE_VERTEX

```cpp
#define EMV_CTLS_INIT_OPT_USE_VERTEX 0x00000080
```

option that ensures VERTEX Kernels will be used 

**Deprecated**: 

Ignored because combined CTLS framework not continued anymore 

### define EMV_CTLS_INIT_OPT_TRACE

```cpp
#define EMV_CTLS_INIT_OPT_TRACE 0x00000100
```

Callback trace ([TAG_BF7F_CTLS_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-ctls-cbk-trace)), for special use. For standard use ADK-LOG. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace-adk-log) or log configuration file missing or read error. 

### define EMV_CTLS_INIT_OPT_TRACE_CLT

```cpp
#define EMV_CTLS_INIT_OPT_TRACE_CLT 0x00000200
```

Callback trace ([TAG_BF7F_CTLS_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-ctls-cbk-trace)), for special use. For standard use ADK-LOG. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace-adk-log) or log configuration file missing or read error. 

### define EMV_CTLS_INIT_OPT_LED_CBK_EXT

```cpp
#define EMV_CTLS_INIT_OPT_LED_CBK_EXT 0x00000400
```


Activate callback for LED display. Only effective in case terminal does not have hardware LEDs and SDI standard mode is not used. 

 EMV ADK will invoke a callback ([TAG_BF10_CTLS_CBK_LEDS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf10-ctls-cbk-leds)) for each needed LED switch on/off. 

 Calling application has to implement it and call ADK-GUI to realize LED switch (see also [LED Handling]). 


### define EMV_CTLS_INIT_OPT_TRACE_SYSLOG

```cpp
#define EMV_CTLS_INIT_OPT_TRACE_SYSLOG 0x00000800
```

Callback trace ([TAG_BF7F_CTLS_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-ctls-cbk-trace)), additionally write to syslog. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace-adk-log) or log configuration file missing or read error. 

### define EMV_CTLS_INIT_OPT_LED_VFI_INT

```cpp
#define EMV_CTLS_INIT_OPT_LED_VFI_INT 0x00001000
```

VFI Reader only: request internal LED display. If set, LED handling is done internally by the VFI Reader. If not set, LED display depends on [EMV_CTLS_INIT_OPT_LED_CBK_EXT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-led-cbk-ext). 

### define EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK

```cpp
#define EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK 0x00004000
```

VFI Reader only: Buzzer is not done by VFI reader, ADK takes over the beeps.    see also [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume). 

### define EMV_CTLS_INIT_OPT_CALC_CHKSUM

```cpp
#define EMV_CTLS_INIT_OPT_CALC_CHKSUM 0x00010000
```

VFI Reader only: Calculate checksums of configuration files, may lead to setting of result bit [EMV_CTLS_INIT_RES_CHKSUM_DIFF](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#define-emv-ctls-init-res-chksum-diff). 

### define EMV_CTLS_INIT_OPT_NEW_CFG_INTF

```cpp
#define EMV_CTLS_INIT_OPT_NEW_CFG_INTF 0x00020000
```


**Deprecated**: 

new application configuration interface is the only processing and this flag is ignored 

### define EMV_CTLS_INIT_OPT_BEEP_CBK_EXT

```cpp
#define EMV_CTLS_INIT_OPT_BEEP_CBK_EXT 0x00040000
```

Activate beeper callback ([TAG_BF19_CTLS_CBK_BEEP](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf19-ctls-cbk-beep)). Per default beeper is controlled by EMV ADK. 

### define EMV_CTLS_INIT_OPT_TRACE_ADK_LOG

```cpp
#define EMV_CTLS_INIT_OPT_TRACE_ADK_LOG 0x00080000
```

Solely use ADK-LOG for tracing. Deactivates trace callback ([TAG_BF7F_CTLS_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-ctls-cbk-trace)). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file "EMVCTLS". 

### define EMV_CTLS_INIT_OPT_TIMINGS

```cpp
#define EMV_CTLS_INIT_OPT_TIMINGS 0x00100000
```

measure card and terminal performance. Note: For this feature other trace output is switched off 

### define EMV_CTLS_INIT_OPT_SHARED_CONFIG

```cpp
#define EMV_CTLS_INIT_OPT_SHARED_CONFIG 0x00200000
```


**Note**: Only the processes very first [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework) decides the shared config mode. 

On VOS/VOS2 use `/mnt/flash/etc/config/adkemv` for persistence instead of ` $(HOME)/flash `. VOS3: `/mnt/appdata/versioned/globalshare/sdi/emv/`. 


### define EMV_CTLS_INIT_OPT_EPP_MASTER

```cpp
#define EMV_CTLS_INIT_OPT_EPP_MASTER 0x00400000
```


Generate a Configuration Id for every configuration change at time of persisting. Generate a checksum for every persistence file to be aware of changes via file system. The configuration id is specific to a Virtual Terminal and returned on Init Framework and when the configuration is stored to the file system. It is seen on serial interface only. 


### define EMV_CTLS_INIT_VIRT_1

```cpp
#define EMV_CTLS_INIT_VIRT_1 0x01000000
```

virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_2

```cpp
#define EMV_CTLS_INIT_VIRT_2 0x02000000
```

virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_3

```cpp
#define EMV_CTLS_INIT_VIRT_3 0x03000000
```

virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_4

```cpp
#define EMV_CTLS_INIT_VIRT_4 0x04000000
```

virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_5

```cpp
#define EMV_CTLS_INIT_VIRT_5 0x05000000
```

virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_6

```cpp
#define EMV_CTLS_INIT_VIRT_6 0x06000000
```

virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_7

```cpp
#define EMV_CTLS_INIT_VIRT_7 0x07000000
```

virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_8

```cpp
#define EMV_CTLS_INIT_VIRT_8 0x08000000
```

virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_9

```cpp
#define EMV_CTLS_INIT_VIRT_9 0x09000000
```

virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_10

```cpp
#define EMV_CTLS_INIT_VIRT_10 0x0A000000
```

virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_11

```cpp
#define EMV_CTLS_INIT_VIRT_11 0x0B000000
```

virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_12

```cpp
#define EMV_CTLS_INIT_VIRT_12 0x0C000000
```

virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_13

```cpp
#define EMV_CTLS_INIT_VIRT_13 0x0D000000
```

virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_14

```cpp
#define EMV_CTLS_INIT_VIRT_14 0x0E000000
```

virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_15

```cpp
#define EMV_CTLS_INIT_VIRT_15 0x0F000000
```

virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_16

```cpp
#define EMV_CTLS_INIT_VIRT_16 0x10000000
```

virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_17

```cpp
#define EMV_CTLS_INIT_VIRT_17 0x11000000
```

virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_18

```cpp
#define EMV_CTLS_INIT_VIRT_18 0x12000000
```

virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_19

```cpp
#define EMV_CTLS_INIT_VIRT_19 0x13000000
```

virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_VIRT_20

```cpp
#define EMV_CTLS_INIT_VIRT_20 0x14000000
```

virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CTLS_INIT_RES_CHKSUM_DIFF

```cpp
#define EMV_CTLS_INIT_RES_CHKSUM_DIFF 0x00000001
```

Checksums of configuration files changed, call of [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration) may be needed    EMV framework does this check only if [EMV_CTLS_INIT_OPT_CALC_CHKSUM](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-calc-chksum) is set. Is only possible on VFI reader. 

### define EMV_CTLS_INIT_RES_VFI_READER_MISS

```cpp
#define EMV_CTLS_INIT_RES_VFI_READER_MISS 0x00000002
```

VFI reader usage desired (via [EMV_CTLS_INIT_OPT_USE_VFI](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vfi)), but VFI reader is not installed. 

### define EMV_CTLS_INIT_RES_ENTRY_POINT_MISS

```cpp
#define EMV_CTLS_INIT_RES_ENTRY_POINT_MISS 0x00000004
```

Vertex usage desired (via [EMV_CTLS_INIT_OPT_USE_VERTEX](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vertex)), but Entry Point is not installed. 

### define EMV_CTLS_Init_Framework

```cpp
#define EMV_CTLS_Init_Framework(
    numberOfAIDs,
    EMV_Callback,
    externalData,
    options,
    ulResult
)
EMV_CTLS_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options),(ulResult))
```

Initialize EMV ADK. 

**Parameters**: 

  * **numberOfAIDs** ... number of AIDs 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **EMV_Callback** ... function pointer for callback (see [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt)) 

 no TLV tag, because it's not serialized 
  * **externalData** ... Application data pointer, is transmitted unchanged to callback function [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt)

 no TLV tag, because it's not serialized 
  * **options** ... flags for framework initialisation, allowed values see [Options at framework initialisation](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md)

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **ulResult** ... bitstring with information flags about the outcome, see [Result flags for outcome of framework initialization](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md)

 TLV tag [TAG_DF8F0C_INIT_RESULT_FLAGS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0c-init-result-flags). Can be NULL. 


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): interface version mismatch
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err) TLV: processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_CTLS_NOT_AVAILABLE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-not-available): CTLS not present on terminal
[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort): insufficient memory to allocate main ADK context
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): insufficient memory to allocate other internal structs or empty desired/allowed kernel list
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap file persistence problem
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap or emv desired/allowed file corruption

**Author**: GSS R&D Germany

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)[P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)

[Explanation in programmers guide]


### define CONTACTLESS_LED_FIRST

```cpp
#define CONTACTLESS_LED_FIRST 0x01
```

first contacless LED 

### define CONTACTLESS_LED_SECOND

```cpp
#define CONTACTLESS_LED_SECOND 0x02
```

second contacless LED 

### define CONTACTLESS_LED_THIRD

```cpp
#define CONTACTLESS_LED_THIRD 0x04
```

third contacless LED 

### define CONTACTLESS_LED_FOURTH

```cpp
#define CONTACTLESS_LED_FOURTH 0x08
```

fourth contacless LED 

### define CONTACTLESS_LED_BLUE

```cpp
#define CONTACTLESS_LED_BLUE CONTACTLESS_LED_FIRST
```

first LED for signalling field on 

### define CONTACTLESS_LED_YELLOW

```cpp
#define CONTACTLESS_LED_YELLOW CONTACTLESS_LED_SECOND
```

second LED indicating chip card communication 

### define CONTACTLESS_LED_GREEN

```cpp
#define CONTACTLESS_LED_GREEN CONTACTLESS_LED_THIRD
```

third LED "Card read successfully" 

### define CONTACTLESS_LED_RED

```cpp
#define CONTACTLESS_LED_RED CONTACTLESS_LED_FOURTH
```

fourth LED indicating error 

### define CONTACTLESS_LED_0

```cpp
#define CONTACTLESS_LED_0 CONTACTLESS_LED_FIRST
```

Contactless LED 1,. 

**Deprecated**: 

because confusing, use [CONTACTLESS_LED_FIRST](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-first) instead 

### define CONTACTLESS_LED_1

```cpp
#define CONTACTLESS_LED_1 CONTACTLESS_LED_SECOND
```

Contactless LED 2,. 

**Deprecated**: 

because confusing, use [CONTACTLESS_LED_SECOND](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-second) instead 

### define CONTACTLESS_LED_2

```cpp
#define CONTACTLESS_LED_2 CONTACTLESS_LED_THIRD
```

Contactless LED 3,. 

**Deprecated**: 

because confusing, use [CONTACTLESS_LED_THIRD](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-third) instead 

### define CONTACTLESS_LED_3

```cpp
#define CONTACTLESS_LED_3 CONTACTLESS_LED_FOURTH
```

Contactless LED 4,. 

**Deprecated**: 

because confusing, use [CONTACTLESS_LED_FOURTH](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-fourth) instead 

### define CONTACTLESS_LED_ALL

```cpp
#define CONTACTLESS_LED_ALL 0x0F
```

All Contactless LEDs. 

### define CONTACTLESS_LED_LOGO

```cpp
#define CONTACTLESS_LED_LOGO 0x80
```

CTLS Logo LED (only UX family), not combinable with other LEDs. 

### define CONTACTLESS_LED_OFF

```cpp
#define CONTACTLESS_LED_OFF 0x00
```

Switch LED Off. 

### define CONTACTLESS_LED_ON

```cpp
#define CONTACTLESS_LED_ON 0x01
```

Switch LED On. 

### define CONTACTLESS_LED_IDLE_BLINK

```cpp
#define CONTACTLESS_LED_IDLE_BLINK 0x02
```

enable blinking: ALWAYS LED 1 is used for blinking, fixed timing according to specs 

### define CONTACTLESS_LED_ONLINE_BLINK

```cpp
#define CONTACTLESS_LED_ONLINE_BLINK 0x03
```

enable blinking: ALWAYS LED 3 is used for blinking, fixed timing according to specs.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api)

### define CONTACTLESS_LED_HANDLE_EOT_SILENT

```cpp
#define CONTACTLESS_LED_HANDLE_EOT_SILENT 0x04
```

End of Transaction, disable LED in the background after required 750msecs.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api). 

### define CONTACTLESS_LED_HANDLE_EOT_SUCCESS

```cpp
#define CONTACTLESS_LED_HANDLE_EOT_SUCCESS 0x05
```

End of Transaction, disable LED in the background after required 750msecs + Beep Success.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api). 

### define CONTACTLESS_LED_HANDLE_EOT_FAIL

```cpp
#define CONTACTLESS_LED_HANDLE_EOT_FAIL 0x06
```

End of Transaction, disable LED in the background after required 750msecs + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api). 

### define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK

```cpp
#define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK 0x07
```

End of Transaction, LED 4 is blinking 4 times + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api). 

### define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3

```cpp
#define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3 0x08
```

End of Transaction, LED 1-3 are blinking 4 times + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api). 

### define CONTACTLESS_LED_MODE_OFF

```cpp
#define CONTACTLESS_LED_MODE_OFF 0x00
```

switching LEDs must be done by the application 

### define CONTACTLESS_LED_MODE_API

```cpp
#define CONTACTLESS_LED_MODE_API 0x01
```

switching LEDs must be done by the API function [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led)

### define CONTACTLESS_LED_MODE_EMV

```cpp
#define CONTACTLESS_LED_MODE_EMV 0x02
```

switching LEDs is done by EMV framework on its own (this is the initial mode) 

### define EMV_CTLS_BEEP_SUCCESS

```cpp
#define EMV_CTLS_BEEP_SUCCESS 1
```

Success tone is required. 

### define EMV_CTLS_BEEP_ALERT

```cpp
#define EMV_CTLS_BEEP_ALERT 2
```

Alert tone needed. 

### define EMV_CTLS_RFU_1

```cpp
#define EMV_CTLS_RFU_1 0x01
```

reserved for probable reader number 

### define EMV_CTLS_RESET_KEEP_FIELD_ON

```cpp
#define EMV_CTLS_RESET_KEEP_FIELD_ON 0x02
```

(Vel: y VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Do not switch off RF field when no card was detected. CAUTION: This results in higher power consumption and might cause overheating problems. 

### define EMV_CTLS_SPURIOUS_DETECT

```cpp
#define EMV_CTLS_SPURIOUS_DETECT 0x04
```

(Vel: y VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Avoid faulty collision detection on ADK level. This bit was marked deprecated since August 2020 but reactivated for Trinity. 

### define EMV_CTLS_EMV_COMPLIANT

```cpp
#define EMV_CTLS_EMV_COMPLIANT 0x08
```

(Vel: y VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Only card type is returned in card info. This feature is mutually exclusive with EMV_CTLS_RESET_NO_EMV. 

### define EMV_CTLS_RESET_NO_EMV

```cpp
#define EMV_CTLS_RESET_NO_EMV 0x10
```

(Vel: y VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Provide card type plus UID if available as card info. This feature is mutually exclusive with EMV_CTLS_EMV_COMPLIANT. 

### define EMV_CTLS_RESET_PICC_OPEN_ONLY

```cpp
#define EMV_CTLS_RESET_PICC_OPEN_ONLY 0x20
```

(Vel: n VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Only initialise CTLS reader, do not detect cards. 

### define EMV_CTLS_SKIP_FIELD_ON

```cpp
#define EMV_CTLS_SKIP_FIELD_ON 0x40
```

(Vel: n VFI: y) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)`ucOptions:` Tell VFI Reader to consider RF Field is already turned on by NFC ADK. 

### define EMV_CTLS_OPEN_READER

```cpp
#define EMV_CTLS_OPEN_READER EMV_CTLS_RESET_PICC_OPEN_ONLY
```

(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, initialise CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-open-reader) for re-open. 

### define EMV_CTLS_CLOSE_READER

```cpp
#define EMV_CTLS_CLOSE_READER 0x40
```

(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, close CTLS reader. Use in combination [EMV_CTLS_OPEN_READER](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-open-reader) for re-open. 

### define EMV_CTLS_DETECT_REMOVAL

```cpp
#define EMV_CTLS_DETECT_REMOVAL 0x80
```

(Vel: y VFI: n) option for EMV_CTLS_SmartPowerOff, start removal detection background task 

### define EMV_CTLS_LED_SHAPE_RECTANGLE

```cpp
#define EMV_CTLS_LED_SHAPE_RECTANGLE 0
```

Data structure for LED colors. Used in [EMV_CTLS_LED_CONFIG_STRUCT::shape](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-shape). 

rectangular LEDs 


### define EMV_CTLS_LED_SHAPE_CIRCLE

```cpp
#define EMV_CTLS_LED_SHAPE_CIRCLE 1
```

circular LEDs 

### define EMV_CTLS_SUPPORTED_SIZE_9F0A

```cpp
#define EMV_CTLS_SUPPORTED_SIZE_9F0A 50
```

limit for Application Section Registered Proprietary Data size (has been 20 before) 

### define EMV_CTLS_SUPPORTED_SIZE_DISC

```cpp
#define EMV_CTLS_SUPPORTED_SIZE_DISC 50
```

limit for discretionary data size (template '73') 

### define EMV_CTLS_ADDTAG_COMBOS

```cpp
#define EMV_CTLS_ADDTAG_COMBOS 6
```

Max. number of candidates in [EMV_CTLS_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata)

## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     VeriFone
*  Author:      GSS R&D Germany
*  Content:     Interface definitions and functions
****************************************************************************/

#ifndef _EMV_CTLS_INTERFACE_H_   /* avoid double interface-includes */
#define _EMV_CTLS_INTERFACE_H_

#ifdef __cplusplus
extern "C" {
#endif

#include "emv/EMV_Common_Interface.h"
#include "EMV_CTLS_Link.h"
#include "EMV_CTLS_Version.h"

#define DLL_CLC // no client shared libraries anymore


// ========================================================================================================
// === COMMON PART ===
// ========================================================================================================


typedef struct EMV_CTLS_APPLI_STRUCT
{
  unsigned char    aidlen;  
  unsigned char    AID[16]; 
} EMV_CTLS_APPLI_TYPE;

typedef struct EMV_CTLS_APPLI_KERNEL_STRUCT
{
  unsigned char    KernelID[3]; 
  unsigned char    aidlen;      
  unsigned char    AID[16];     
} EMV_CTLS_APPLI_KERNEL_TYPE;

typedef struct EMV_CTLS_DATA_STRUCT {
  unsigned short  len;  
  unsigned char  *data; 
} EMV_CTLS_DATA_TYPE;

typedef struct EMV_CTLS_DOL_STRUCT
{
  unsigned char    dollen;           
  unsigned char    DOL[EMV_ADK_MAX_LG_DDOL]; 
} EMV_CTLS_DOL_TYPE;

typedef struct EMV_CTLS_TRACK2_STRUCT
{
  unsigned char    tr2len;      
  unsigned char    tr2data[19]; 
} EMV_CTLS_TRACK2_TYPE;

typedef struct EMV_CTLS_CRDNAME_STRUCT
{
  unsigned char    crdNameLen;    
  unsigned char    crdName[26];   
} EMV_CTLS_CRDNAME_TYPE;

typedef struct EMV_CTLS_ICCRND_STRUCT
{
  unsigned char    iccRNDLen;    
  unsigned char    iccRND[8];    
} EMV_CTLS_ICCRND_TYPE;

typedef struct EMV_CTLS_ISSDATA_STRUCT
{
  unsigned char    issDataLen;    
  unsigned char    issData[32];   
} EMV_CTLS_ISSDATA_TYPE;


// ========================================================================================================
// === Transaction Information ===
// ========================================================================================================


  #define EMV_CTLS_ADK_SETUP_START                             0x80  
  #define EMV_CTLS_ADK_SETUP_NO_CONTEXT                        0x81  
  #define EMV_CTLS_ADK_SETUP_NO_INIT                           0x82  
  #define EMV_CTLS_ADK_SETUP_TERMDATA                          0x83  
  //#define EMV_CTLS_ADK_SETUP_CL_DISABLED                       0x84  
  #define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY            0x85  
  #define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM              0x86  
  #define EMV_CTLS_ADK_SETUP_RND_FAIL                          0x87  
  #define EMV_CTLS_ADK_SETUP_DETECT                            0x88  
  #define EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL                    0x89  
  #define EMV_CTLS_ADK_SETUP_OK                                0x8A  

  #define EMV_CTLS_ADK_TXN_START                               0xA0  
  #define EMV_CTLS_ADK_TXN_NO_ATR                              0xA1  
  #define EMV_CTLS_ADK_TXN_2_CARDS                             0xA2  
  #define EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY                     0xA3  
  #define EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED                0xA4  
  #define EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL                    0xA5  
  #define EMV_CTLS_ADK_TXN_L1_DIR_READING                      0xA6  
  #define EMV_CTLS_ADK_TXN_L1_CAND_LIST                        0xA7  
  #define EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED                0xA8  
  #define EMV_CTLS_ADK_TXN_DOM_APP_SELECTED                    0xA9  
  #define EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST                 0xAA  
  #define EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL          0xAB  
  #define EMV_CTLS_ADK_TXN_L1_FINAL_SELECT                     0xAC  
  #define EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY                  0xAD  
  #define EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY                  0xAE  
  #define EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY                  0xAF  
  #define EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK                    0xB0  
  #define EMV_CTLS_ADK_TXN_UNKNOW_KERNEL                       0xB1  
  #define EMV_CTLS_ADK_TXN_EP_INIT_FAILED                      0xB2  
  #define EMV_CTLS_ADK_TXN_LIST_ITERATION_KO                   0xB3  
  #define EMV_CTLS_ADK_TXN_CANDIDATE_EVAL                      0xB4  
  #define EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT              0xB5  

  #define EMV_CTLS_ADK_TXN_MK_START                            0xC0  
  #define EMV_CTLS_ADK_TXN_MK_NEW_SEL                          0xC1  
  #define EMV_CTLS_ADK_TXN_MK_RETAP_START                      0xC2  
  #define EMV_CTLS_ADK_TXN_MK_MOBILE_START                     0xC3  
  #define EMV_CTLS_ADK_TXN_MK_L1_START                         0xC4  
  #define EMV_CTLS_ADK_TXN_MK_RETAP_MSD                        0xC5  
  #define EMV_CTLS_ADK_TXN_MK_MOBILE_MSD                       0xC6  
  #define EMV_CTLS_ADK_TXN_MK_L1_MSD                           0xC7  
  #define EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD                      0xC8  
  #define EMV_CTLS_ADK_TXN_MK_DECLINE_MSD                      0xC9  
  #define EMV_CTLS_ADK_TXN_MK_OK_MSD                           0xCA  
  #define EMV_CTLS_ADK_TXN_MK_ONLINE_MSD                       0xCB  
  #define EMV_CTLS_ADK_TXN_MK_OTHER_MSD                        0xCC  
  #define EMV_CTLS_ADK_TXN_MK_RETAP_CHP                        0xCD  
  #define EMV_CTLS_ADK_TXN_MK_MOBILE_CHP                       0xCE  
  #define EMV_CTLS_ADK_TXN_MK_L1_CHP                           0xCF  
  #define EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP                     0xD0  
  #define EMV_CTLS_ADK_TXN_MK_DECLINE_CHP                      0xD1  
  #define EMV_CTLS_ADK_TXN_MK_ONLINE_CHP                       0xD2  
  #define EMV_CTLS_ADK_TXN_MK_OK_CHP                           0xD3  
  #define EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP                    0xD4  
  #define EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP                      0xD5  
  #define EMV_CTLS_ADK_TXN_MK_OTHER_CHP                        0xD6  
  #define EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC               0xD7  
  #define EMV_CTLS_ADK_TXN_MK_FALLBACK_START                   0xD8  
  #define EMV_CTLS_ADK_TXN_MK_INIT_FAIL                        0xD9  
  #define EMV_CTLS_ADK_TXN_MK_GPO_RR                           0xDA  
  #define EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD               0xDB  

  #define EMV_CTLS_ADK_TXN_VK_START                            0x10  
  #define EMV_CTLS_ADK_TXN_VK_NEW_SEL                          0x11  
  #define EMV_CTLS_ADK_TXN_VK_MOBILE_START                     0x12  
  #define EMV_CTLS_ADK_TXN_VK_L1_START                         0x13  
  #define EMV_CTLS_ADK_TXN_VK_L1_MSD                           0x14  
  #define EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD                     0x15  
  #define EMV_CTLS_ADK_TXN_VK_DECLINE_MSD                      0x16  
  #define EMV_CTLS_ADK_TXN_VK_OK_MSD                           0x17  
  #define EMV_CTLS_ADK_TXN_VK_ONLINE_MSD                       0x18  
  #define EMV_CTLS_ADK_TXN_VK_OTHER_MSD                        0x19  
  #define EMV_CTLS_ADK_TXN_VK_L1_CHP                           0x1A  
  #define EMV_CTLS_ADK_TXN_VK_READCARD_CHP                     0x1B  
  #define EMV_CTLS_ADK_TXN_VK_DECLINE_CHP                      0x1C  
  #define EMV_CTLS_ADK_TXN_VK_ONLINE_CHP                       0x1D  
  #define EMV_CTLS_ADK_TXN_VK_OK_CHP                           0x1E  
  #define EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP                     0x1F  
  #define EMV_CTLS_ADK_TXN_VK_OTHER_CHP                        0x20  
  #define EMV_CTLS_ADK_TXN_VK_DECLINE_START                    0x21  
  #define EMV_CTLS_ADK_TXN_VK_FALLBACK_START                   0x22  
  #define EMV_CTLS_ADK_TXN_VK_OTHER_START                      0x23  
  #define EMV_CTLS_ADK_TXN_VK_INIT_FAIL                        0x24  
  #define EMV_CTLS_ADK_TXN_VK_GPO_RR                           0x25  
  #define EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2                    0x26  
  #define EMV_CTLS_ADK_TXN_VK_READCARD_MSD                     0x27  
  #define EMV_CTLS_ADK_TXN_VK_RETAP_START                      0x28  
  #define EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG                0x29  

  #define EMV_CTLS_ADK_TXN_KERNEL_START                        0x30  
  #define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL                      0x31  
  #define EMV_CTLS_ADK_TXN_KERNEL_RETAP_START                  0x32  
  #define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START                 0x33  
  #define EMV_CTLS_ADK_TXN_KERNEL_L1_START                     0x34  
  #define EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD                    0x35  
  #define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD                   0x36  
  #define EMV_CTLS_ADK_TXN_KERNEL_L1_MSD                       0x37  
  #define EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD                  0x38  
  #define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD                  0x39  
  #define EMV_CTLS_ADK_TXN_KERNEL_OK_MSD                       0x3A  
  #define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD                   0x3B  
  #define EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD                    0x3C  
  #define EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP                    0x3D  
  #define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP                   0x3E  
  #define EMV_CTLS_ADK_TXN_KERNEL_L1_CHP                       0x3F  
  #define EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP                 0x40  
  #define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP                  0x41  
  #define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP                   0x42  
  #define EMV_CTLS_ADK_TXN_KERNEL_OK_CHP                       0x43  
  #define EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP                0x44  
  #define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP                  0x45  
  #define EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP                    0x46  
  #define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC           0x47  
  #define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START               0x48  
  #define EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL                    0x49  
  #define EMV_CTLS_ADK_TXN_KERNEL_GPO_RR                       0x4A  
  #define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD           0x4B  
  #define EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP                      0x4C  
  #define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD                 0x4D  
  #define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START                0x4E  
  #define EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD                 0x4F  
  #define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP                 0x50  
  #define EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD     0x51  
  #define EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP               0x52  
  #define EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS                0x53  
  #define EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI                      0x54  

  #define EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY                    0x70  
  #define EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL                    0x71  
  #define EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY                    0x72  
  #define EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL                    0x73  

  #define EMV_CTLS_ADK_ONL_START                               0xF0  
  #define EMV_CTLS_ADK_ONL_NO_CTLS_TXN                         0xF1  
  #define EMV_CTLS_ADK_ONL_NO_HOST                             0xF2  
  #define EMV_CTLS_ADK_ONL_HOST_OK                             0xF3  
  #define EMV_CTLS_ADK_ONL_HOST_DECLINE                        0xF4  
#define EMV_CTLS_ADK_ONL_HOST_SWITCH_IF                        0xF5  
#define EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN                       0xF6  
#define EMV_CTLS_ADK_END_TXN                                   0xFE  


  #define EMV_CTLS_ADK_STEP_01  1  
  #define EMV_CTLS_ADK_STEP_02  2  
  #define EMV_CTLS_ADK_STEP_03  3  
  #define EMV_CTLS_ADK_STEP_04  4  
  #define EMV_CTLS_ADK_STEP_05  5  
  #define EMV_CTLS_ADK_STEP_06  6  
  #define EMV_CTLS_ADK_STEP_07  7  
  #define EMV_CTLS_ADK_STEP_08  8  
  #define EMV_CTLS_ADK_STEP_09  9  
  #define EMV_CTLS_ADK_STEP_10  10 
  #define EMV_CTLS_ADK_STEP_11  11 
  #define EMV_CTLS_ADK_STEP_12  12 
  #define EMV_CTLS_ADK_STEP_13  13 
  #define EMV_CTLS_ADK_STEP_14  14 
  #define EMV_CTLS_ADK_STEP_15  15 
  #define EMV_CTLS_ADK_STEP_16  16 
  #define EMV_CTLS_ADK_STEP_17  17 
  #define EMV_CTLS_ADK_STEP_18  18 
  #define EMV_CTLS_ADK_STEP_19  19 
  #define EMV_CTLS_ADK_STEP_20  20 


// ========================================================================================================
// === TERMINAL CONFIGURATION ===
// ========================================================================================================

#define  EMV_CTLS_KERNEL_VERSION_SIZE  255  

typedef struct EMV_CTLS_TERMDATA_STRUCT /* === EMV_CTLS_TERMDATA_TYPE === */
{
  unsigned long   CL_Modes_Supported;          
  unsigned char   TermTyp;                     
  unsigned char   CountryCodeTerm[2];          
  unsigned char   CurrencyTrans[2];            
  unsigned char   ExpTrans;                    
  unsigned char   SuppLang[EMV_ADK_MAX_LANG];  
  unsigned char   IFDSerialNumber[8];          
  unsigned char   FlowOptions[10];             
  unsigned char   MaxCTLSTranslimit[4];        
  unsigned short  BeepVolume;                  
  unsigned short  BeepFrequencySuccess;        
  unsigned short  BeepFrequencyAlert;          
  unsigned char   HostCommunicationTimeout;    
  unsigned char   SecondTapDelay;              
  const unsigned char* Hotlist;                
  EMV_CTLS_DATA_TYPE poiInformation;           

  char  KernelVersion[EMV_CTLS_KERNEL_VERSION_SIZE];   
  char  FrameworkVersion[EMV_ADK_VERSION_ASCII_SIZE];  
  char  L1DriverVersion[EMV_ADK_VERSION_ASCII_SIZE];   

  unsigned char   Info_Included_Data[8];     
} EMV_CTLS_TERMDATA_TYPE; 

/* Byte 1 */
#define  INPUT_CTLS_TRM_SUPPORTED_CTLS     0x01  
#define  INPUT_CTLS_TRM_TYPE               0x02  
#define  INPUT_CTLS_TRM_CURRENCY           0x04  
#define  INPUT_CTLS_TRM_EXP_CURRENCY       0x08  
#define  INPUT_CTLS_TRM_COUNTRY_CODE       0x10  
#define  INPUT_CTLS_TRM_FLOW_OPTIONS       0x20  
#define  INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT 0x40  
#define  INPUT_CTLS_TRM_BEEP_VOLUME        0x80  

/* Byte 2 */
#define  INPUT_CTLS_TRM_LANGUAGES          0x01  
#define  INPUT_CTLS_TRM_IFD_SERIAL         0x02  
#define  INPUT_CTLS_TRM_KERNEL_VERSION     0x04  
#define  INPUT_CTLS_TRM_FRAMEWORK_VERSION  0x08  
#define  INPUT_CTLS_TRM_HOTLIST            0x10  
#define  INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS  0x20  
#define  INPUT_CTLS_TRM_BEEP_FREQ_ALERT    0x40  
#define  INPUT_CTLS_TRM_L1DRIVER_VERSION   0x80  

/* Byte 3 */
#define  INPUT_CTLS_TRM_SECOND_TAP_DELAY   0x01  
#define  INPUT_CTLS_TRM_HOST_COMM_TIMEOUT  0x02  
#define  INPUT_CTLS_TRM_POI_INFORMATION    0x04  

#define  CL_DISABLED                      0x00 
#define  CL_MC_PAYPASS_CHIP               0x01 
#define  CL_MC_PAYPASS_MSR                0x02 
#define  CL_MC_PAYPASS_COMBINED           0x03 
#define  CL_VISA_CHIP                     0x04 
#define  CL_VISA_MSR                      0x08 
#define  CL_VISA_COMBINED                 0x0C 
#define  CL_AMEX_COMBINED                 0x10 
#define  CL_DISCOVER_ZIP                  0x20 
#define  CL_INTERAC                       0x40 
#define  CL_QPBOC_COMBINED                0x80 
#define  CL_JCB                          0x100 
#define  CL_EPAL                         0x200 
#define  CL_AMEX_MSR                     0x400 
#define  CL_DISCOVER_DPAS_CHIP           0x800 
#define  CL_DISCOVER_DPAS_MSR           0x1000 
#define  CL_DISCOVER_DPAS_COMBINED      0x1800 
#define  CL_RUPAY                       0x2000 
#define  CL_JCB_EMV                     0x4000 
#define  CL_JCB_LEGACY                  0x8000 
#define  CL_GEMALTO                   0x010000 
#define  CL_GIROCARD                  0x020000 
#define  CL_SIBS                      0x040000 
#define  CL_PAGOBANCOMAT              0x080000 
#define  CL_MIR                       0x100000 

#define  CL_SUPPORTED_VELOCITY        0xFFFFFF 
#define  CL_SUPPORTED_VFI             0xFFFFFF 
#define  CL_ALL                       0xFFFFFF 

#define  CL_UNKNOWN                 0x40000000 
#define  CL_APPS_KERNEL             0x80000000 

/* Byte 1 */
#define  INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE            0x01  
#define  INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET     0x02  
#define  INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT    0x04  
#define  INPUT_CTLS_TRM_IFD_SERIAL_USE_TID           0x08  
#define  INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE  0x10  
#define  INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2      0x20  
#define  INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC          0x40  
#define  INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL     0x80  

/* Byte 2 */
#define  INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK   0x01  

// ========================================================================================================
// === APPLICATION CONFIGURATION ===
// ========================================================================================================

#define VISA_TTQ_MAGSTRIPE_SUPPORTED      0x80  
#define VISA_TTQ_VSDC_SUPPORTED           0x40  
#define VISA_TTQ_qVSDC_SUPPORTED          0x20  
#define VISA_TTQ_CONTACT_VSDC_SUPPORTED   0x10  
#define VISA_TTQ_OFFLINE_ONLY             0x08  
#define VISA_TTQ_ONLINE_PIN_SUPPORTED     0x04  
#define VISA_TTQ_SIGNATURE_SUPPORTED      0x02  
#define VISA_TTQ_ODA_ONLINE_SUPPORTED     0x01  
#define VISA_TTQ_ONLINE_FORCED            0x80  
#define VISA_TTQ_CVM_FORCED               0x40  
#define VISA_TTQ_CONTACT_PINOFFL          0x20  

// Byte 1
#define TTQ_MAGSTRIPE_MODE_SUPPORTED      0x80  
#define TTQ_EMV_MODE_SUPPORTED            0x20  
#define TTQ_CONTACT_CHIP_SUPPORTED        0x10  
#define TTQ_OFFLINE_ONLY                  0x08  
#define TTQ_ONLINE_PIN_SUPPORTED          0x04  
#define TTQ_SIGNATURE_SUPPORTED           0x02  
#define TTQ_ODA_SUPPORTED                 0x01  
// Byte 2
#define TTQ_ONLINE_CRYPTOGRAM_REQUIRED    0x80  
#define TTQ_CVM_REQUIRED                  0x40  
#define TTQ_CONTACT_OFFLINE_PIN           0x20  
// Byte 3
#define TTQ_ISSUER_UPDATE_SUPPORTED       0x80  
#define TTQ_CD_CVM_SUPPORTED              0x40  



#define VISA_DRL_DISABLE_ZERO_AMOUNT_CHECK         0x01  
#define VISA_DRL_ENABLE_STATUS_CHECK               0x02  

#define VISA_AMEX_DRL_DISABLE_FLOOR_LIMIT_CHECK    0x20  
#define VISA_AMEX_DRL_DISABLE_TRANS_LIMIT_CHECK    0x40  
#define VISA_AMEX_DRL_DISABLE_CV_LIMIT_CHECK       0x80  

#define   EMV_ADK_DRL_ENTRIES_VISA             4  
#define   EMV_ADK_DRL_ENTRIES_AMEX             16  

#define   EMV_ADK_PMSG_ENTRIES           10

#define EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS      25  
#define EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS   1230  

#define EMV_CTLS_MAX_TAGLIST_SIZE      20  
#define EMV_CTLS_MAX_APP_VERS          10  

typedef struct EMV_CTLS_TAGLIST_STRUCT
{
  unsigned char   anztag;                           
  unsigned short  tags[EMV_CTLS_MAX_TAGLIST_SIZE];  
} EMV_CTLS_TAGLIST_TYPE;

#define  CTLS_APPLY_CFG_APPS   0x00000001  
#define  CTLS_APPLY_CFG_TERM   0x00000002  
#define  CTLS_APPLY_CFG_CAPK   0x00000004  
#define  CTLS_APPLY_CFG_ALL    0x00000007  
#define  CTLS_APPLY_CFG_FORCE  0x00000008  

// ========================================================================
// === APPLICATION CONFIGURATION (new scheme specific config interface) ===
// ========================================================================


// EMVCo standard
#define EMV_CTLS_KERN_EP   0x00  
#define EMV_CTLS_KERN_PK   0x01  
#define EMV_CTLS_KERN_MK   0x02  
#define EMV_CTLS_KERN_VK   0x03  
#define EMV_CTLS_KERN_AK   0x04  
#define EMV_CTLS_KERN_JK   0x05  
#define EMV_CTLS_KERN_DK   0x06  
#define EMV_CTLS_KERN_CK   0x07  

// Verifone Internal
#define EMV_CTLS_KERN_IK   0x10  
#define EMV_CTLS_KERN_EK   0x11  
#define EMV_CTLS_KERN_RK   0x12  
#define EMV_CTLS_KERN_GK   0x13  
#define EMV_CTLS_KERN_PB   0x14  
//                         0x15 VERTEX value for MIR, not used on ADK interface
#define EMV_CTLS_KERN_WK   0x16  
#define EMV_CTLS_KERN_BK   0x17  

// EMVCo registered
#define EMV_CTLS_KERN_GC   0x2A  
#define EMV_CTLS_KERN_SAMA 0x2D  
#define EMV_CTLS_KERN_CPACE 0x2E 
#define EMV_CTLS_KERN_WLA  0x31  

#define EMV_CTLS_KERN_DOM  0xF0  

// Extended Kernel Ids
#define EMV_CTLS_KERN_MR   0x810643 
#define EMV_CTLS_KERN_SK   0xC1     
#define EMV_CTLS_KERN_SB   0xC14D42 


#define KERNEL_ID_TO_BYTE_ARRAY(kernelId, byteArray)\
    if ((kernelId)<0xff)\
    {\
        byteArray[0] = (unsigned char) (kernelId);\
        byteArray[1] = 0;\
        byteArray[2] = 0;\
    }\
    else\
    {\
        byteArray[0] = (unsigned char) ((kernelId) >> 16);\
        byteArray[1] = (unsigned char) ((kernelId) >> 8);\
        byteArray[2] = (unsigned char) ((kernelId));\
    }

#define KERNEL_ID_TO_INT(byteArray)\
    ((byteArray[0] >= EMV_CTLS_KERN_DOM && byteArray[1] == 0 && byteArray[2] == 0)\
     ? EMV_CTLS_KERN_DOM :\
    ((byteArray[0] & 0x80) ? ((unsigned) byteArray[0] << 16) | ((unsigned) byteArray[1] << 8) | byteArray[2] : byteArray[0]))

#define EMV_CTLS_TEC_CHIP  0x01  
#define EMV_CTLS_TEC_MSR   0x02  

#define EMV_CTLS_MK_CFG_NOMSR     0x80  
#define EMV_CTLS_MK_CFG_NOCHIP    0x40  
#define EMV_CTLS_MK_CFG_ONDEVCVM  0x20  
#define EMV_CTLS_MK_CFG_RRP       0x10  

#define EMV_CTLS_RK_CFG_ONDEVCVM  0x20  

  /* Byte 1 */
#define EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0               0x01  
#define EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0                        0x02  
#define EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0                      0x04  
#define EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0                  0x08  
#define EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0        0x10  
#define EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0                 0x20  
#define EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0                0x40  
#define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0 0x80  
  /* Byte 2 */
#define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1  0x01  
#define EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1         0x02  
#define EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1           0x04  
#define EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1              0x08  
#define EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1                      0x10  
#define EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1             0x20  
#define EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1           0x40  
#define EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1             0x80  
// byte3
#define EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2            0x01  
#define EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2           0x02  
#define EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2                    0x04  
#define EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2                     0x08  
#define EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2    0x10  

  /* Byte 1 */
#define EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0             0x01  
#define EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0              0x02  
#define EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0                0x04  
#define EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0        0x08  
#define EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0           0x10  

  /* Byte 1 */
#define EMV_CTLS_FLOW_VK_STATUS_CHECK_ENABLE_0                 0x01  
#define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_SKIP_0              0x02  
#define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_ONLINE_0            0x04  
#define EMV_CTLS_FLOW_VK_CHECK_INCONS_TRACK2_PAN_0             0x08  
#define EMV_CTLS_FLOW_VK_CASHBACK_NOT_FORCED_CVM_0             0x10  
#define EMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE               0x20  
#define EMV_CTLS_FLOW_VK_ALERT_TONE_ON_DECLINE                 0x40  
#define EMV_CTLS_FLOW_VK_GET_DATA_9F68_0                       0x80  

// Byte 2, EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31[1]
#define EMV_CTLS_FLOW_VK_ENABLE_TAGS_AT_GPO                    0x01  
#define EMV_CTLS_FLOW_VK_ZERO_CHECK_DISABLE_1                  0x02  
// B2b3 RFU
#define EMV_CTLS_FLOW_VK_ODO_SUPPORT_1                         0x08  
#define EMV_CTLS_FLOW_VK_ODO_SDA_1                             0x10  
#define EMV_CTLS_FLOW_VK_ODO_DDA_1                             0x20  
#define EMV_CTLS_FLOW_VK_ODO_SDA_ERR_ONLINE_1                  0x40  
#define EMV_CTLS_FLOW_VK_ODO_DDA_ERR_ONLINE_1                  0x80  

// Byte 3, EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31[2]
#define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASH_2                   0x01  
#define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASHBACK_2               0x02  
#define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASH_2                   0x04  
#define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASHBACK_2               0x08  
#define EMV_CTLS_FLOW_VK_ZERO_CASHBACK_AMOUNT_2                0x10  
#define EMV_CTLS_FLOW_VK_CASHBACK_TRANS_TYPE_09_2              0x20  
#define EMV_CTLS_FLOW_VK_QUASI_CASH_2                          0x40  
#define EMV_CTLS_FLOW_VK_DO_NOT_CFG_9F21_TIME_2                0x80  

  /* Byte 1 */
#define EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0               0x01  
#define EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0    0x02  
#define EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0                0x04  
#define EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0           0x08  
#define EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0        0x10  


  /* Byte 1 */
#define EMV_CTLS_FLOW_JK_MULTIPLE_RANDOM_NUMBERS_0             0x01  

  /* Byte 1 */
#define EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0             0x01  
#define EMV_CTLS_FLOW_DK_DATA_STORAGE_0           0x02  
#define EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0      0x04  
#define EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0      0x08  
#define EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0 0x10  
#define EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0      0x20  
#define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0   0x40  
#define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0 0x80  


  /* Byte 1 */
#define EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0               0x01  
#define EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0                 0x02  

  /* Byte 1 */
#define EMV_CTLS_FLOW_EK_READ_CARD_REFUND_0    0x01  

  /* Byte 1 */
#define EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0             0x01  
#define EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0             0x02  

  /* Byte 1 */
#define EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0                 0x01  
#define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0              0x02  
#define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0            0x04  
#define EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0             0x08  
#define EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0             0x10  
#define EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0                 0x20  
#define EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0               0x40  

/* Byte 1 (index 0) */
#define EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0   0x01  
#define EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0              0x02  
#define EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0              0x04  
#define EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0          0x08  

  /* Byte 1 */
#define EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0              0x01  
#define EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0          0x02  
#define EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0               0x04  
#define EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0             0x08  
#define EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0                0x10  
#define EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0                 0x20  
#define EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0             0x40  
#define EMV_CTLS_FLOW_RK_CVM_REQUIRED_0                        0x80  

  /* Byte 2 */
#define EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1             0x01  

  /* Byte 1 */

  /* Byte 1 */

#define EMV_CTLS_FLOW_WK_STATUS_CHECK_ENABLE_0                 0x01  
#define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_SKIP_0              0x02  
#define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_ONLINE_0            0x04  
#define EMV_CTLS_FLOW_WK_NO_CDCVM                              0x08  

  /* Byte 1 */

  /* Byte 1 */


// MasterCard //

typedef struct EMV_CTLS_APPLIDATA_MK_STRUCT {
  unsigned char                         IncludedData[8];                              
  unsigned char                            TermIdent_9F1C[8];                         
  unsigned char                  TerminalCountryCode_9F1A[2];                         
  unsigned char                         TerminalType_9F35;                            
  unsigned char       AdditionalTerminalCapabilities_9F40[5];                         
  unsigned char              MagstripeCVM_aboveLimit_DF811E;                          
  unsigned char              MagstripeCVM_belowLimit_DF812C;                          
  unsigned char                   ChipCVM_aboveLimit_DF8118;                          
  unsigned char                   ChipCVM_belowLimit_DF8119;                          
  unsigned char                   SecurityCapability_DF811F;                          
  unsigned char              CardDataInputCapability_DF8117;                          
  unsigned char                           FloorLimit_DF8123[6];                       
  unsigned char           TransactionLimitNoOnDevice_DF8124[6];                       
  unsigned char             TransactionLimitOnDevice_DF8125[6];                       
  unsigned char                     CVMRequiredLimit_DF8126[6];                       
  unsigned char                    ChipVersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];   
  unsigned char                     MSRVersionNumber_9F6D[2*EMV_CTLS_MAX_APP_VERS];   
  unsigned char                  KernelConfiguration_DF811B;                          
  unsigned char              TransactionCategoryCode_9F53;                            
  unsigned char                           TACDefault_DF8120[5];                       
  unsigned char                            TACDenial_DF8121[5];                       
  unsigned char                            TACOnline_DF8122[5];                       
  unsigned char                             KernelID_DF810C;                          
  unsigned char           TerminalRiskManagementData_9F1D[8];                         
  unsigned char                 MerchantCategoryCode_9F15[2];                         
           char                   MerchantIdentifier_9F16[15+1];                      
           char              MerchantNameAndLocation_9F4E[40+1];                      
  unsigned char                   AcquirerIdentifier_9F01[6];                         
  unsigned char                        HoldTimeValue_DF8130;                          
  unsigned char                      MessageHoldTime_DF812D[3];                       
  unsigned char              TornTransactionLifetime_DF811C[2];                       
  unsigned char                TornTransactionNumber_DF811D;                          
  EMV_CTLS_DATA_TYPE               PhoneMessageTable_DF8131;                          
  EMV_CTLS_DATA_TYPE                      TagsToRead_DF8112;                          
  EMV_CTLS_DATA_TYPE          TagsToWriteBeforeGenAC_FF8102;                          
  EMV_CTLS_DATA_TYPE           TagsToWriteAfterGenAC_FF8103;                          
  unsigned char              ProceedToFirstWriteFlag_DF8110;                          
  unsigned char                DSRequestedOperatorID_9F5C[8];                         
  unsigned char                       DETimeoutValue_DF8127[2];                       
  unsigned char                           AppFlowCap_DFAB31[5];                       
  unsigned char                    RR_MinGracePeriod_DF8132[2];                       
  unsigned char                    RR_MaxGracePeriod_DF8133[2];                       
  unsigned char           RR_ExpectedTransTime_CAPDU_DF8134[2];                       
  unsigned char           RR_ExpectedTransTime_RAPDU_DF8135[2];                       
  unsigned char                 RR_AccuracyThreshold_DF8136[2];                       
  unsigned char        RR_TransTimeMismatchThreshold_DF8137;                          
  unsigned char                   MerchantCustomData_9F7C[20];                        
} EMV_CTLS_APPLIDATA_MK_TYPE;

#define EMV_CTLS_APPLIDATA_GC_TYPE EMV_CTLS_APPLIDATA_MK_TYPE // Kernel 2a configuration is same as PayPass for instance

  /* Byte 1 */
#define  INPUT_CTLS_APL_MK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_MK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_MK_9F35_0     0x04  
#define  INPUT_CTLS_APL_MK_9F40_0     0x08  
#define  INPUT_CTLS_APL_MK_DF811E_0   0x10  
#define  INPUT_CTLS_APL_MK_DF812C_0   0x20  
#define  INPUT_CTLS_APL_MK_DF8118_0   0x40  
#define  INPUT_CTLS_APL_MK_DF8119_0   0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_MK_DF811F_1   0x01  
#define  INPUT_CTLS_APL_MK_DF8117_1   0x02  
#define  INPUT_CTLS_APL_MK_DF8123_1   0x04  
#define  INPUT_CTLS_APL_MK_DF8124_1   0x08  
#define  INPUT_CTLS_APL_MK_DF8125_1   0x10  
#define  INPUT_CTLS_APL_MK_DF8126_1   0x20  
#define  INPUT_CTLS_APL_MK_9F09_1     0x40  
#define  INPUT_CTLS_APL_MK_9F6D_1     0x80  
  /* Byte 3 */
#define  INPUT_CTLS_APL_MK_DF811B_2   0x01  
#define  INPUT_CTLS_APL_MK_9F53_2     0x02  
#define  INPUT_CTLS_APL_MK_DF8120_2   0x04  
#define  INPUT_CTLS_APL_MK_DF8121_2   0x08  
#define  INPUT_CTLS_APL_MK_DF8122_2   0x10  
#define  INPUT_CTLS_APL_MK_DF810C_2   0x20  
#define  INPUT_CTLS_APL_MK_9F1D_2     0x40  
#define  INPUT_CTLS_APL_MK_9F15_2     0x80  
  /* Byte 4 */
#define  INPUT_CTLS_APL_MK_9F16_3     0x01  
#define  INPUT_CTLS_APL_MK_9F4E_3     0x02  
#define  INPUT_CTLS_APL_MK_9F01_3     0x04  
#define  INPUT_CTLS_APL_MK_DF8130_3   0x08  
#define  INPUT_CTLS_APL_MK_DF812D_3   0x10  
#define  INPUT_CTLS_APL_MK_DF811C_3   0x20  
#define  INPUT_CTLS_APL_MK_DF811D_3   0x40  
#define  INPUT_CTLS_APL_MK_DF8131_3   0x80  
  /* Byte 5 */
#define  INPUT_CTLS_APL_MK_DFAB31_4   0x01  
#define  INPUT_CTLS_APL_MK_DF8112_4   0x02  
#define  INPUT_CTLS_APL_MK_FF8102_4   0x04  
#define  INPUT_CTLS_APL_MK_FF8103_4   0x08  
#define  INPUT_CTLS_APL_MK_DF8110_4   0x10  
#define  INPUT_CTLS_APL_MK_9F5C_4     0x20  
#define  INPUT_CTLS_APL_MK_DF8127_4   0x40  

// Byte 6
#define INPUT_CTLS_APL_MK_DF8132_5    0x01  
#define INPUT_CTLS_APL_MK_DF8133_5    0x02  
#define INPUT_CTLS_APL_MK_DF8134_5    0x04  
#define INPUT_CTLS_APL_MK_DF8135_5    0x08  
#define INPUT_CTLS_APL_MK_DF8136_5    0x10  
#define INPUT_CTLS_APL_MK_DF8137_5    0x20  
#define INPUT_CTLS_APL_MK_9F7C_5      0x40  


#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO     0x00 
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES    0x01 
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY  0xFF 
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT 0xFE 

// Visa //

typedef struct EMV_CTLS_VK_DRL_ENTRY_STRUCT {
  unsigned char  AppProgramId_9F5A[16];                    
  unsigned char  AppProgramIdLen;                          
  unsigned char  ContactlessFloorLimit_DFAB40[6];          
  unsigned char  ContactlessTransactionLimit_DFAB41[6];    
  unsigned char  ContactlessCVMRequiredLimit_DFAB42[6];    
  unsigned char  OnOffSwitch_DFAB49;                       
} EMV_CTLS_VK_DRL_ENTRY_TYPE;

typedef struct EMV_CTLS_VK_DRL_STRUCT {
  unsigned short  cnt;              
  EMV_CTLS_VK_DRL_ENTRY_TYPE *data; 
} EMV_CTLS_VK_DRL_TYPE;

typedef struct EMV_CTLS_APPLIDATA_VK_STRUCT {
  unsigned char                             IncludedData[8];                             
  unsigned char                                TermIdent_9F1C[8];                        
  unsigned char                      TerminalCountryCode_9F1A[2];                        
  unsigned char                             TerminalType_9F35;                           
  unsigned char             TerminalTransactionQualifier_9F66[4];                        
  unsigned char                     TerminalCapabilities_9F33[3];                        
  unsigned char           AdditionalTerminalCapabilities_9F40[5];                        
  unsigned char                            VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                     MerchantCategoryCode_9F15[2];                        
           char                       MerchantIdentifier_9F16[15+1];                     
           char                  MerchantNameAndLocation_9F4E[40+1];                     
  unsigned char                               TecSupport_DFAB30;                         
  unsigned char                               AppFlowCap_DFAB31[5];                      
  unsigned char                    ContactlessFloorLimit_DFAB40[6];                      
  unsigned char              ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char              ContactlessCVMRequiredLimit_DFAB42[6];                      
  EMV_CTLS_VK_DRL_TYPE                     VisaDRLParams_FFAB01;                         
} EMV_CTLS_APPLIDATA_VK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_VK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_VK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_VK_9F35_0     0x04  
#define  INPUT_CTLS_APL_VK_9F66_0     0x08  
#define  INPUT_CTLS_APL_VK_9F33_0     0x10  
#define  INPUT_CTLS_APL_VK_9F40_0     0x20  
#define  INPUT_CTLS_APL_VK_9F09_0     0x40  
#define  INPUT_CTLS_APL_VK_9F15_0     0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_VK_9F16_1     0x01  
#define  INPUT_CTLS_APL_VK_9F4E_1     0x02  
#define  INPUT_CTLS_APL_VK_DFAB30_1   0x04  
#define  INPUT_CTLS_APL_VK_DFAB31_1   0x08  
#define  INPUT_CTLS_APL_VK_DFAB40_1   0x10  
#define  INPUT_CTLS_APL_VK_DFAB41_1   0x20  
#define  INPUT_CTLS_APL_VK_DFAB42_1   0x40  
#define  INPUT_CTLS_APL_VK_FFAB01_1   0x80  


// American Express //

typedef struct EMV_CTLS_AK_DRL_ENTRY_STRUCT {
  unsigned char  ContactlessFloorLimit_DFAB40[6];          
  unsigned char  ContactlessTransactionLimit_DFAB41[6];    
  unsigned char  ContactlessCVMRequiredLimit_DFAB42[6];    
  unsigned char  OnOffSwitch_DFAB49;                       
} EMV_CTLS_AK_DRL_ENTRY_TYPE;

typedef struct EMV_CTLS_AK_DRL_STRUCT {
  unsigned short  cnt;              
  EMV_CTLS_AK_DRL_ENTRY_TYPE *data; 
} EMV_CTLS_AK_DRL_TYPE;

typedef struct EMV_CTLS_APPLIDATA_AK_STRUCT {
  unsigned char                                  IncludedData[8];                             
  unsigned char                                     TermIdent_9F1C[8];                        
  unsigned char                           TerminalCountryCode_9F1A[2];                        
  unsigned char                                  TerminalType_9F35;                           
  unsigned char             AmexContactlessReaderCapabilities_9F6D;                           
  unsigned char           AmexTerminalTransactionCapabilities_9F6E[4];                        
  unsigned char                          TerminalCapabilities_9F33[3];                        
  unsigned char                AdditionalTerminalCapabilities_9F40[5];                        
  unsigned char                                 VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                          MerchantCategoryCode_9F15[2];                        
           char                            MerchantIdentifier_9F16[15+1];                     
           char                       MerchantNameAndLocation_9F4E[40+1];                     
  unsigned char                            AcquirerIdentifier_9F01[6];                        
  unsigned char                                    TecSupport_DFAB30;                         
  unsigned char                                    AppFlowCap_DFAB31[5];                      
  unsigned char                         ContactlessFloorLimit_DFAB40[6];                      
  unsigned char                   ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char                   ContactlessCVMRequiredLimit_DFAB42[6];                      
  unsigned char                                    TACDefault_DFAB43[5];                      
  unsigned char                                     TACDenial_DFAB44[5];                      
  unsigned char                                     TACOnline_DFAB45[5];                      
  EMV_CTLS_AK_DRL_TYPE                          AmexDRLParams_FFAB01;                         
  unsigned char                      UnpredictableNumberRange_DFAB52;                         
} EMV_CTLS_APPLIDATA_AK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_AK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_AK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_AK_9F35_0     0x04  
#define  INPUT_CTLS_APL_AK_9F6D_0     0x08  
#define  INPUT_CTLS_APL_AK_9F6E_0     0x10  
#define  INPUT_CTLS_APL_AK_9F33_0     0x20  
#define  INPUT_CTLS_APL_AK_9F40_0     0x40  
#define  INPUT_CTLS_APL_AK_9F09_0     0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_AK_9F15_1     0x01  
#define  INPUT_CTLS_APL_AK_9F16_1     0x02  
#define  INPUT_CTLS_APL_AK_9F4E_1     0x04  
#define  INPUT_CTLS_APL_AK_9F01_1     0x08  
#define  INPUT_CTLS_APL_AK_DFAB30_1   0x10  
#define  INPUT_CTLS_APL_AK_DFAB31_1   0x20  
#define  INPUT_CTLS_APL_AK_DFAB40_1   0x40  
#define  INPUT_CTLS_APL_AK_DFAB41_1   0x80  
  /* Byte 3 */
#define  INPUT_CTLS_APL_AK_DFAB42_2   0x01  
#define  INPUT_CTLS_APL_AK_DFAB43_2   0x02  
#define  INPUT_CTLS_APL_AK_DFAB44_2   0x04  
#define  INPUT_CTLS_APL_AK_DFAB45_2   0x08  
#define  INPUT_CTLS_APL_AK_FFAB01_2   0x10  
#define  INPUT_CTLS_APL_AK_DFAB52_2   0x20  



typedef struct EMV_CTLS_APPLIDATA_JK_STRUCT {
  unsigned char                          IncludedData[8];          
  unsigned char                             TermIdent_9F1C[8];     
  unsigned char                   TerminalCountryCode_9F1A[2];     
  unsigned char                          TerminalType_9F35;        
  unsigned char            TerminalInterchangeProfile_9F53[3];     
  unsigned char                  MerchantCategoryCode_9F15[2];     
           char               MerchantNameAndLocation_9F4E[40+1];  
  unsigned char                    AcquirerIdentifier_9F01[6];     
  unsigned char                            AppFlowCap_DFAB31[5];   
  unsigned char                 ContactlessFloorLimit_DFAB40[6];   
  unsigned char           ContactlessTransactionLimit_DFAB41[6];   
  unsigned char           ContactlessCVMRequiredLimit_DFAB42[6];   
  unsigned char                            TACDefault_DFAB43[5];   
  unsigned char                             TACDenial_DFAB44[5];   
  unsigned char                             TACOnline_DFAB45[5];   
  unsigned char               RiskManagementThreshold_DFAB46[6];   
  unsigned char        RiskManagementTargetPercentage_DFAB47;      
  unsigned char RiskManagementMaximumTargetPercentage_DFAB48;      
  unsigned char                    CombinationOptions_DFAB4B[2];   
  unsigned char                        RemovalTimeout_DFAB4C[2];   
  unsigned char     ContactlessTransactionLimit_ODCVM_DFAB5B[6];   
} EMV_CTLS_APPLIDATA_JK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_JK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_JK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_JK_9F35_0     0x04  
#define  INPUT_CTLS_APL_JK_9F53_0     0x08  
#define  INPUT_CTLS_APL_JK_9F15_0     0x10  
#define  INPUT_CTLS_APL_JK_9F4E_0     0x20  
#define  INPUT_CTLS_APL_JK_9F01_0     0x40  
#define  INPUT_CTLS_APL_JK_DFAB31_0   0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_JK_DFAB40_1   0x01  
#define  INPUT_CTLS_APL_JK_DFAB41_1   0x02  
#define  INPUT_CTLS_APL_JK_DFAB42_1   0x04  
#define  INPUT_CTLS_APL_JK_DFAB43_1   0x08  
#define  INPUT_CTLS_APL_JK_DFAB44_1   0x10  
#define  INPUT_CTLS_APL_JK_DFAB45_1   0x20  
#define  INPUT_CTLS_APL_JK_DFAB46_1   0x40  
#define  INPUT_CTLS_APL_JK_DFAB47_1   0x80  
  /* Byte 3 */
#define  INPUT_CTLS_APL_JK_DFAB48_2   0x01  
#define  INPUT_CTLS_APL_JK_DFAB4B_2   0x02  
#define  INPUT_CTLS_APL_JK_DFAB4C_2   0x04  
#define  INPUT_CTLS_APL_JK_DFAB5B_2   0x08  


// Discover //

typedef struct EMV_CTLS_APPLIDATA_DK_STRUCT {
  unsigned char                             IncludedData[8];                             
  unsigned char                                TermIdent_9F1C[8];                        
  unsigned char                      TerminalCountryCode_9F1A[2];                        
  unsigned char                             TerminalType_9F35;                           
  unsigned char             TerminalTransactionQualifier_9F66[4];                        
  unsigned char                     TerminalCapabilities_9F33[3];                        
  unsigned char           AdditionalTerminalCapabilities_9F40[5];                        
  unsigned char                            VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                     MerchantCategoryCode_9F15[2];                        
  unsigned char                               TecSupport_DFAB30;                         
  unsigned char                               AppFlowCap_DFAB31[5];                      
  unsigned char                    ContactlessFloorLimit_DFAB40[6];                      
  unsigned char              ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char              ContactlessCVMRequiredLimit_DFAB42[6];                      
  EMV_CTLS_DATA_TYPE                DataContainerReadIds_DFAB58;                         
  EMV_CTLS_DATA_TYPE             DataContainerReadRanges_DFAB59;                         
} EMV_CTLS_APPLIDATA_DK_TYPE;
  /* Byte 1 */
#define  INPUT_CTLS_APL_DK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_DK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_DK_9F35_0     0x04  
#define  INPUT_CTLS_APL_DK_9F66_0     0x08  
#define  INPUT_CTLS_APL_DK_9F33_0     0x10  
#define  INPUT_CTLS_APL_DK_9F40_0     0x20  
#define  INPUT_CTLS_APL_DK_9F09_0     0x40  
#define  INPUT_CTLS_APL_DK_9F15_0     0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_DK_DFAB30_1   0x01  
#define  INPUT_CTLS_APL_DK_DFAB31_1   0x02  
#define  INPUT_CTLS_APL_DK_DFAB40_1   0x04  
#define  INPUT_CTLS_APL_DK_DFAB41_1   0x08  
#define  INPUT_CTLS_APL_DK_DFAB42_1   0x10  
#define  INPUT_CTLS_APL_DK_DFAB58_1   0x20  
#define  INPUT_CTLS_APL_DK_DFAB59_1   0x40  


// Interac //

typedef struct EMV_CTLS_APPLIDATA_IK_STRUCT {
  unsigned char                             IncludedData[8];                             
  unsigned char                                TermIdent_9F1C[8];                        
  unsigned char                      TerminalCountryCode_9F1A[2];                        
  unsigned char                             TerminalType_9F35;                           
  unsigned char                     TerminalCapabilities_9F33[3];                        
  unsigned char           AdditionalTerminalCapabilities_9F40[5];                        
  unsigned char                    ContactlessFloorLimit_9F5F[6];                        
  unsigned char                    MerchantTypeIndicator_9F58;                           
  unsigned char           TerminalTransactionInformation_9F59[3];                        
  unsigned char                  TerminalTransactionType_9F5A;                           
  unsigned char                     TerminalOptionStatus_9F5E[2];                        
  unsigned char                     ReceiptRequiredLimit_9F5D[6];                        
  unsigned char                            TryAgainLimit_DF6D;                           
  unsigned char                            VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                     MerchantCategoryCode_9F15[2];                        
           char                       MerchantIdentifier_9F16[15+1];                     
           char                  MerchantNameAndLocation_9F4E[40+1];                     
  unsigned char                       AcquirerIdentifier_9F01[6];                        
  unsigned char                               AppFlowCap_DFAB31[5];                      
  unsigned char              ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char              ContactlessCVMRequiredLimit_DFAB42[6];                      
  unsigned char                               TACDefault_DFAB43[5];                      
  unsigned char                                TACDenial_DFAB44[5];                      
  unsigned char                                TACOnline_DFAB45[5];                      
  unsigned char                  RiskManagementThreshold_DFAB46[6];                      
  unsigned char           RiskManagementTargetPercentage_DFAB47;                         
  unsigned char    RiskManagementMaximumTargetPercentage_DFAB48;                         
} EMV_CTLS_APPLIDATA_IK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_IK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_IK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_IK_9F35_0     0x04  
#define  INPUT_CTLS_APL_IK_9F33_0     0x08  
#define  INPUT_CTLS_APL_IK_9F40_0     0x10  
#define  INPUT_CTLS_APL_IK_9F5F_0     0x20  
#define  INPUT_CTLS_APL_IK_9F58_0     0x40  
#define  INPUT_CTLS_APL_IK_9F59_0     0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_IK_9F5A_1     0x01  
#define  INPUT_CTLS_APL_IK_9F5E_1     0x02  
#define  INPUT_CTLS_APL_IK_9F5D_1     0x04  
#define  INPUT_CTLS_APL_IK_DF6D_1     0x08  
#define  INPUT_CTLS_APL_IK_9F09_1     0x10  
#define  INPUT_CTLS_APL_IK_9F15_1     0x20  
#define  INPUT_CTLS_APL_IK_9F16_1     0x40  
#define  INPUT_CTLS_APL_IK_9F4E_1     0x80  
  /* Byte 3 */
#define  INPUT_CTLS_APL_IK_9F01_2     0x01  
#define  INPUT_CTLS_APL_IK_DFAB31_2   0x02  
#define  INPUT_CTLS_APL_IK_DFAB41_2   0x04  
#define  INPUT_CTLS_APL_IK_DFAB42_2   0x08  
#define  INPUT_CTLS_APL_IK_DFAB43_2   0x10  
#define  INPUT_CTLS_APL_IK_DFAB44_2   0x20  
#define  INPUT_CTLS_APL_IK_DFAB45_2   0x40  
#define  INPUT_CTLS_APL_IK_DFAB46_2   0x80  
  /* Byte 4 */
#define  INPUT_CTLS_APL_IK_DFAB47_3   0x01  
#define  INPUT_CTLS_APL_IK_DFAB48_3   0x02  


// EPAL //

typedef struct EMV_CTLS_APPLIDATA_EK_STRUCT {
  unsigned char                             IncludedData[8];                             
  unsigned char                                TermIdent_9F1C[8];                        
  unsigned char                      TerminalCountryCode_9F1A[2];                        
  unsigned char                             TerminalType_9F35;                           
  unsigned char                     TerminalCapabilities_9F33[3];                        
  unsigned char           AdditionalTerminalCapabilities_9F40[5];                        
  unsigned char                            VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                     MerchantCategoryCode_9F15[2];                        
           char                       MerchantIdentifier_9F16[15+1];                     
           char                  MerchantNameAndLocation_9F4E[40+1];                     
  unsigned char                       AcquirerIdentifier_9F01[6];                        
  unsigned char             TerminalTransactionQualifier_9F66[4];                        
  unsigned char                               AppFlowCap_DFAB31[5];                      
  unsigned char                    ContactlessFloorLimit_DFAB40[6];                      
  unsigned char              ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char                               TACDefault_DFAB43[5];                      
  unsigned char                                TACDenial_DFAB44[5];                      
  unsigned char                                TACOnline_DFAB45[5];                      
  unsigned char                 CtlsTransactionLimitCash_DFAB4A[6];                      
} EMV_CTLS_APPLIDATA_EK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_EK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_EK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_EK_9F35_0     0x04  
#define  INPUT_CTLS_APL_EK_9F33_0     0x08  
#define  INPUT_CTLS_APL_EK_9F40_0     0x10  
#define  INPUT_CTLS_APL_EK_9F09_0     0x20  
#define  INPUT_CTLS_APL_EK_9F15_0     0x40  
#define  INPUT_CTLS_APL_EK_9F16_0     0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_EK_9F4E_1     0x01  
#define  INPUT_CTLS_APL_EK_9F01_1     0x02  
#define  INPUT_CTLS_APL_EK_DFAB31_1   0x04  
#define  INPUT_CTLS_APL_EK_DFAB40_1   0x08  
#define  INPUT_CTLS_APL_EK_DFAB41_1   0x10  
#define  INPUT_CTLS_APL_EK_DFAB43_1   0x20  
#define  INPUT_CTLS_APL_EK_DFAB44_1   0x40  
#define  INPUT_CTLS_APL_EK_DFAB45_1   0x80  
  /* Byte 3 */
#define  INPUT_CTLS_APL_EK_DFAB4A_2   0x01  
#define  INPUT_CTLS_APL_EK_9F66_2     0x02  


// Visa Asia/Pacific //

typedef struct EMV_CTLS_APPLIDATA_PK_STRUCT {
  unsigned char                             IncludedData[8];                             
  unsigned char                                TermIdent_9F1C[8];                        
  unsigned char                      TerminalCountryCode_9F1A[2];                        
  unsigned char                             TerminalType_9F35;                           
  unsigned char                          CvmRequirements_DF04;                           
  unsigned char                               AppFlowCap_DFAB31[5];                      
  unsigned char                    ContactlessFloorLimit_DF02[6];                        
  unsigned char              ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char              ContactlessCVMRequiredLimit_DF01[6];                        
} EMV_CTLS_APPLIDATA_PK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_PK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_PK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_PK_9F35_0     0x04  
#define  INPUT_CTLS_APL_PK_DF04_0     0x08  
#define  INPUT_CTLS_APL_PK_DFAB31_0   0x10  
#define  INPUT_CTLS_APL_PK_DF02_0     0x20  
#define  INPUT_CTLS_APL_PK_DFAB41_0   0x40  
#define  INPUT_CTLS_APL_PK_DF01_0     0x80  
  /* Byte 2 */


// China Union PAY - qPBOC //

typedef struct EMV_CTLS_APPLIDATA_CK_STRUCT {
  unsigned char                             IncludedData[8];                             
  unsigned char                                TermIdent_9F1C[8];                        
  unsigned char                      TerminalCountryCode_9F1A[2];                        
  unsigned char                             TerminalType_9F35;                           
  unsigned char             TerminalTransactionQualifier_9F66[4];                        
  unsigned char                     TerminalCapabilities_9F33[3];                        
  unsigned char           AdditionalTerminalCapabilities_9F40[5];                        
  unsigned char                            VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                     MerchantCategoryCode_9F15[2];                        
           char                       MerchantIdentifier_9F16[15+1];                     
           char                  MerchantNameAndLocation_9F4E[40+1];                     
  unsigned char                               TecSupport_DFAB30;                         
  unsigned char                               AppFlowCap_DFAB31[5];                      
  unsigned char                    ContactlessFloorLimit_DFAB40[6];                      
  unsigned char              ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char              ContactlessCVMRequiredLimit_DFAB42[6];                      
} EMV_CTLS_APPLIDATA_CK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_CK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_CK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_CK_9F35_0     0x04  
#define  INPUT_CTLS_APL_CK_9F66_0     0x08  
#define  INPUT_CTLS_APL_CK_9F33_0     0x10  
#define  INPUT_CTLS_APL_CK_9F40_0     0x20  
#define  INPUT_CTLS_APL_CK_9F09_0     0x40  
#define  INPUT_CTLS_APL_CK_9F15_0     0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_CK_9F16_1     0x01  
#define  INPUT_CTLS_APL_CK_9F4E_1     0x02  
#define  INPUT_CTLS_APL_CK_DFAB30_1   0x04  
#define  INPUT_CTLS_APL_CK_DFAB31_1   0x08  
#define  INPUT_CTLS_APL_CK_DFAB40_1   0x10  
#define  INPUT_CTLS_APL_CK_DFAB41_1   0x20  
#define  INPUT_CTLS_APL_CK_DFAB42_1   0x40  


// Gemalto Pure //

typedef struct EMV_CTLS_APPLIDATA_GK_STRUCT {
  unsigned char                             IncludedData[8];                             
  unsigned char                                TermIdent_9F1C[8];                        
  unsigned char                      TerminalCountryCode_9F1A[2];                        
  unsigned char                             TerminalType_9F35;                           
  unsigned char                     TerminalCapabilities_9F33[3];                        
  unsigned char           AdditionalTerminalCapabilities_9F40[5];                        
  unsigned char                            VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                     MerchantCategoryCode_9F15[2];                        
           char                       MerchantIdentifier_9F16[15+1];                     
           char                  MerchantNameAndLocation_9F4E[40+1];                     
  unsigned char                       AcquirerIdentifier_9F01[6];                        
  unsigned char                               AppFlowCap_DFAB31[5];                      
  unsigned char                    ContactlessFloorLimit_DFAB40[6];                      
  unsigned char              ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char              ContactlessCVMRequiredLimit_DFAB42[6];                      
  unsigned char                               TACDefault_DFAB43[5];                      
  unsigned char                                TACDenial_DFAB44[5];                      
  unsigned char                                TACOnline_DFAB45[5];                      
  unsigned char                         CtlsAppKernelCap_DFAB4F[5];                      
  EMV_CTLS_DATA_TYPE                                MTOL_DFAB50;                         
  EMV_CTLS_DATA_TYPE                         DefaultDDOL_DFAB51;                         
  EMV_CTLS_DATA_TYPE             TerminalTransactionData_9F76;                           
  unsigned char                       AppliAuthTransType_DFAB5A;                         
} EMV_CTLS_APPLIDATA_GK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_GK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_GK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_GK_9F35_0     0x04  
#define  INPUT_CTLS_APL_GK_9F33_0     0x08  
#define  INPUT_CTLS_APL_GK_9F40_0     0x10  
#define  INPUT_CTLS_APL_GK_9F09_0     0x20  
#define  INPUT_CTLS_APL_GK_9F15_0     0x40  
#define  INPUT_CTLS_APL_GK_9F16_0     0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_GK_9F4E_1     0x01  
#define  INPUT_CTLS_APL_GK_9F01_1     0x02  
#define  INPUT_CTLS_APL_GK_DFAB31_1   0x04  
#define  INPUT_CTLS_APL_GK_DFAB40_1   0x08  
#define  INPUT_CTLS_APL_GK_DFAB41_1   0x10  
#define  INPUT_CTLS_APL_GK_DFAB42_1   0x20  
#define  INPUT_CTLS_APL_GK_DFAB43_1   0x40  
#define  INPUT_CTLS_APL_GK_DFAB44_1   0x80  
  /* Byte 3 */
#define  INPUT_CTLS_APL_GK_DFAB45_2   0x01  
#define  INPUT_CTLS_APL_GK_DFAB4F_2   0x02  
#define  INPUT_CTLS_APL_GK_DFAB50_2   0x04  
#define  INPUT_CTLS_APL_GK_DFAB51_2   0x08  
#define  INPUT_CTLS_APL_GK_9F76_2     0x10  
#define  INPUT_CTLS_APL_GK_DFAB5A_2   0x20  


// RuPay //

typedef struct EMV_CTLS_APPLIDATA_RK_STRUCT {
  unsigned char                          IncludedData[8];                             
  unsigned char                             TermIdent_9F1C[8];                        
  unsigned char                   TerminalCountryCode_9F1A[2];                        
  unsigned char                          TerminalType_9F35;                           
  unsigned char                  TerminalCapabilities_9F33[3];                        
  unsigned char        AdditionalTerminalCapabilities_9F40[5];                        
  unsigned char                         VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                  MerchantCategoryCode_9F15[2];                        
  unsigned char                            AppFlowCap_DFAB31[5];                      
  unsigned char                 ContactlessFloorLimit_DFAB40[6];                      
  unsigned char           ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char           ContactlessCVMRequiredLimit_DFAB42[6];                      
  unsigned char                            TACDefault_DFAB43[5];                      
  unsigned char                             TACDenial_DFAB44[5];                      
  unsigned char                             TACOnline_DFAB45[5];                      
  unsigned char               RiskManagementThreshold_DFAB46[6];                      
  unsigned char        RiskManagementTargetPercentage_DFAB47;                         
  unsigned char RiskManagementMaximumTargetPercentage_DFAB48;                         
  unsigned char                       CallbackTimeout_DFAB4D[2];                      
  unsigned char               TornTransactionInterval_DFAB4E[2];                      
  unsigned char     AdditionalTerminalCapabilitiesExt_DF3A[5];                        
} EMV_CTLS_APPLIDATA_RK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_RK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_RK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_RK_9F35_0     0x04  
#define  INPUT_CTLS_APL_RK_9F33_0     0x08  
#define  INPUT_CTLS_APL_RK_9F40_0     0x10  
#define  INPUT_CTLS_APL_RK_9F09_0     0x20  
#define  INPUT_CTLS_APL_RK_9F15_0     0x40  
#define  INPUT_CTLS_APL_RK_DFAB31_0   0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_RK_DFAB40_1   0x01  
#define  INPUT_CTLS_APL_RK_DFAB41_1   0x02  
#define  INPUT_CTLS_APL_RK_DFAB42_1   0x04  
#define  INPUT_CTLS_APL_RK_DFAB43_1   0x08  
#define  INPUT_CTLS_APL_RK_DFAB44_1   0x10  
#define  INPUT_CTLS_APL_RK_DFAB45_1   0x20  
#define  INPUT_CTLS_APL_RK_DFAB46_1   0x40  
#define  INPUT_CTLS_APL_RK_DFAB47_1   0x80  
/* Byte 3 */
#define  INPUT_CTLS_APL_RK_DFAB48_2   0x01  
#define  INPUT_CTLS_APL_RK_DFAB4D_2   0x02  
#define  INPUT_CTLS_APL_RK_DFAB4E_2   0x04  
#define  INPUT_CTLS_APL_RK_DF3A_2     0x08  



typedef struct EMV_CTLS_APPLIDATA_SK_STRUCT {
  unsigned char                          IncludedData[8];                             
  unsigned char                             TermIdent_9F1C[8];                        
  unsigned char                   TerminalCountryCode_9F1A[2];                        
  unsigned char                          TerminalType_9F35;                           
  unsigned char                  TerminalCapabilities_9F33[3];                        
  unsigned char        AdditionalTerminalCapabilities_9F40[5];                        
  unsigned char                         VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                  MerchantCategoryCode_9F15[2];                        
  char                        MerchantNameAndLocation_9F4E[40+1];                     
  unsigned char                            AppFlowCap_DFAB31[5];                      
  unsigned char                 ContactlessFloorLimit_DFAB40[6];                      
  unsigned char           ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char           ContactlessCVMRequiredLimit_DFAB42[6];                      
  unsigned char                            TACDefault_DFAB43[5];                      
  unsigned char                             TACDenial_DFAB44[5];                      
  unsigned char                             TACOnline_DFAB45[5];                      
  unsigned char                 TermCap_aboveCVMLimit_DFAB53[3];                      
  unsigned char                 TermCap_belowCVMLimit_DFAB54[3];                      
} EMV_CTLS_APPLIDATA_SK_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_SK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_SK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_SK_9F35_0     0x04  
#define  INPUT_CTLS_APL_SK_9F33_0     0x08  
#define  INPUT_CTLS_APL_SK_9F40_0     0x10  
#define  INPUT_CTLS_APL_SK_9F09_0     0x20  
#define  INPUT_CTLS_APL_SK_9F15_0     0x40  
#define  INPUT_CTLS_APL_SK_9F4E_0     0x80  
  /* Byte 2 */
#define  INPUT_CTLS_APL_SK_DFAB31_1   0x01  
#define  INPUT_CTLS_APL_SK_DFAB40_1   0x02  
#define  INPUT_CTLS_APL_SK_DFAB41_1   0x04  
#define  INPUT_CTLS_APL_SK_DFAB42_1   0x08  
#define  INPUT_CTLS_APL_SK_DFAB43_1   0x10  
#define  INPUT_CTLS_APL_SK_DFAB44_1   0x20  
#define  INPUT_CTLS_APL_SK_DFAB45_1   0x40  
#define  INPUT_CTLS_APL_SK_DFAB53_1   0x80  
  /* Byte 3 */
#define  INPUT_CTLS_APL_SK_DFAB54_2   0x01  


// PagoBancomat //

typedef struct EMV_CTLS_APPLIDATA_PB_STRUCT {
  unsigned char                             IncludedData[8];                             
  unsigned char                                TermIdent_9F1C[8];                        
  unsigned char                      TerminalCountryCode_9F1A[2];                        
  unsigned char                             TerminalType_9F35;                           
  unsigned char             TerminalTransactionQualifier_9F66[4];                        
  unsigned char                            VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  char                           MerchantNameAndLocation_9F4E[40+1];                     
  unsigned char                               AppFlowCap_DFAB31[5];                      
  unsigned char                    ContactlessFloorLimit_DFAB40[6];                      
  unsigned char              ContactlessTransactionLimit_DFAB41[6];                      
  unsigned char              ContactlessCVMRequiredLimit_DFAB42[6];                      
  unsigned char                               TACDefault_DFAB43[5];                      
  unsigned char                                TACDenial_DFAB44[5];                      
  unsigned char                                TACOnline_DFAB45[5];                      
  unsigned char                  RiskManagementThreshold_DFAB46[6];                      
  unsigned char           RiskManagementTargetPercentage_DFAB47;                         
  unsigned char    RiskManagementMaximumTargetPercentage_DFAB48;                         
  unsigned char                       TACSwitchInterface_DFAB55[5];                      
  unsigned char                       IACSwitchInterface_DFAB56[5];                      
} EMV_CTLS_APPLIDATA_PB_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_PB_9F1C_0     0x01  
#define  INPUT_CTLS_APL_PB_9F1A_0     0x02  
#define  INPUT_CTLS_APL_PB_9F35_0     0x04  
#define  INPUT_CTLS_APL_PB_9F66_0     0x08  
#define  INPUT_CTLS_APL_PB_9F09_0     0x10  
#define  INPUT_CTLS_APL_PB_9F4E_0     0x20  
#define  INPUT_CTLS_APL_PB_DFAB31_0   0x40  
#define  INPUT_CTLS_APL_PB_DFAB40_0   0x80  
/* Byte 2 */
#define  INPUT_CTLS_APL_PB_DFAB41_1   0x01  
#define  INPUT_CTLS_APL_PB_DFAB42_1   0x02  
#define  INPUT_CTLS_APL_PB_DFAB43_1   0x04  
#define  INPUT_CTLS_APL_PB_DFAB44_1   0x08  
#define  INPUT_CTLS_APL_PB_DFAB45_1   0x10  
#define  INPUT_CTLS_APL_PB_DFAB46_1   0x20  
#define  INPUT_CTLS_APL_PB_DFAB47_1   0x40  
#define  INPUT_CTLS_APL_PB_DFAB48_1   0x80  
/* Byte 3 */
#define  INPUT_CTLS_APL_PB_DFAB55_2   0x01  
#define  INPUT_CTLS_APL_PB_DFAB56_2   0x02  

// WISE //

typedef struct EMV_CTLS_APPLIDATA_WK_STRUCT {
  unsigned char                          IncludedData[8];    
  unsigned char               AcquirerIdentifier_9F01[6];    
  unsigned char                        TermIdent_9F1C[8];    
  unsigned char              TerminalCountryCode_9F1A[2];    
  unsigned char                     TerminalType_9F35;       
  unsigned char             TerminalCapabilities_9F33[3];    
  unsigned char   AdditionalTerminalCapabilities_9F40[5];    
  unsigned char                    VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char             MerchantCategoryCode_9F15[2];    
           char               MerchantIdentifier_9F16[15+1]; 
           char          MerchantNameAndLocation_9F4E[40+1]; 
  unsigned char                     TecSupport_DFAB30;       
  unsigned char                     AppFlowCap_DFAB31[5];    
  unsigned char          ContactlessFloorLimit_DFAB40[6];    
  unsigned char    ContactlessTransactionLimit_DFAB41[6];    
  unsigned char    ContactlessCVMRequiredLimit_DFAB42[6];    
} EMV_CTLS_APPLIDATA_WK_TYPE;

#define  INPUT_CTLS_APL_WK_9F01_0     0x01  
#define  INPUT_CTLS_APL_WK_9F1C_0     0x02  
#define  INPUT_CTLS_APL_WK_9F1A_0     0x04  
#define  INPUT_CTLS_APL_WK_9F35_0     0x08  
#define  INPUT_CTLS_APL_WK_9F33_0     0x10  
#define  INPUT_CTLS_APL_WK_9F40_0     0x20  
#define  INPUT_CTLS_APL_WK_9F09_0     0x40  
#define  INPUT_CTLS_APL_WK_9F15_0     0x80  

#define  INPUT_CTLS_APL_WK_9F16_1     0x01  
#define  INPUT_CTLS_APL_WK_9F4E_1     0x02  
#define  INPUT_CTLS_APL_WK_DFAB30_1   0x04  
#define  INPUT_CTLS_APL_WK_DFAB31_1   0x08  
#define  INPUT_CTLS_APL_WK_DFAB40_1   0x10  
#define  INPUT_CTLS_APL_WK_DFAB41_1   0x20  
#define  INPUT_CTLS_APL_WK_DFAB42_1   0x40  


// CPACE //

typedef struct EMV_CTLS_APPLIDATA_BK_STRUCT {
  unsigned char                          IncludedData[8];    
  unsigned char                        TermIdent_9F1C[8];    
  unsigned char              TerminalCountryCode_9F1A[2];    
  unsigned char                     TerminalType_9F35;       
  unsigned char             TerminalCapabilities_9F33[3];    
  unsigned char   AdditionalTerminalCapabilities_9F40[5];    
  unsigned char                    VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char             MerchantCategoryCode_9F15[2];    
           char               MerchantIdentifier_9F16[15+1]; 
           char          MerchantNameAndLocation_9F4E[40+1]; 
  unsigned char               AcquirerIdentifier_9F01[6];    
  unsigned char                     AppFlowCap_DFAB31[5];    
  unsigned char                 CVM_aboveLimit_DF8118;       
  unsigned char                 CVM_belowLimit_DF8119;       
  unsigned char            KernelConfiguration_DF811B;       
  unsigned char                     TACDefault_DF8120[5];    
  unsigned char                      TACDenial_DF8121[5];    
  unsigned char                      TACOnline_DF8122[5];    
  unsigned char                     FloorLimit_DF8123[6];    
  unsigned char        TransactionLimitNoCDCVM_DF8124[6];    
  unsigned char          TransactionLimitCDCVM_DF8125[6];    
  unsigned char               CVMRequiredLimit_DF8126[6];    
  unsigned char                MessageHoldTime_DF812D[3];    
  EMV_CTLS_DATA_TYPE       CHV_CS_MessageTable_DF8131;       
  unsigned char            RR_TimeToleranceMin_DF8132[2];    
  unsigned char            RR_TimeToleranceMax_DF8133[2];    
  unsigned char      RR_TransmissionTime_CAPDU_DF8134[2];    
  unsigned char      RR_TransmissionTime_RAPDU_DF8135[2];    
  unsigned char      RR_MinTimeDifferenceLimit_DF8136[2];    
  unsigned char      RR_TransTimeMismatchLimit_DF8137;       
} EMV_CTLS_APPLIDATA_BK_TYPE;

#define  INPUT_CTLS_APL_BK_9F1C_0     0x01  
#define  INPUT_CTLS_APL_BK_9F1A_0     0x02  
#define  INPUT_CTLS_APL_BK_9F35_0     0x04  
#define  INPUT_CTLS_APL_BK_9F33_0     0x08  
#define  INPUT_CTLS_APL_BK_9F40_0     0x10  
#define  INPUT_CTLS_APL_BK_9F09_0     0x20  
#define  INPUT_CTLS_APL_BK_9F15_0     0x40  
#define  INPUT_CTLS_APL_BK_9F16_0     0x80  

#define  INPUT_CTLS_APL_BK_9F4E_1     0x01  
#define  INPUT_CTLS_APL_BK_9F01_1     0x02  
#define  INPUT_CTLS_APL_BK_DFAB31_1   0x04  
#define  INPUT_CTLS_APL_BK_DF8118_1   0x08  
#define  INPUT_CTLS_APL_BK_DF8119_1   0x10  
#define  INPUT_CTLS_APL_BK_DF811B_1   0x20  
#define  INPUT_CTLS_APL_BK_DF8120_1   0x40  
#define  INPUT_CTLS_APL_BK_DF8121_1   0x80  

#define  INPUT_CTLS_APL_BK_DF8122_2   0x01  
#define  INPUT_CTLS_APL_BK_DF8123_2   0x02  
#define  INPUT_CTLS_APL_BK_DF8124_2   0x04  
#define  INPUT_CTLS_APL_BK_DF8125_2   0x08  
#define  INPUT_CTLS_APL_BK_DF8126_2   0x10  
#define  INPUT_CTLS_APL_BK_DF812D_2   0x20  
#define  INPUT_CTLS_APL_BK_DF8131_2   0x40  
#define  INPUT_CTLS_APL_BK_DF8132_2   0x80  

#define  INPUT_CTLS_APL_BK_DF8133_3   0x01  
#define  INPUT_CTLS_APL_BK_DF8134_3   0x02  
#define  INPUT_CTLS_APL_BK_DF8135_3   0x04  
#define  INPUT_CTLS_APL_BK_DF8136_3   0x08  
#define  INPUT_CTLS_APL_BK_DF8137_3   0x10  


// MIR //

typedef struct EMV_CTLS_APPLIDATA_MR_STRUCT {
  unsigned char                             IncludedData[8];                             
  unsigned char                                TermIdent_9F1C[8];                        
  unsigned char                      TerminalCountryCode_9F1A[2];                        
  unsigned char                             TerminalType_9F35;                           
  unsigned char                            VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];  
  unsigned char                     MerchantCategoryCode_9F15[2];                        
  char                           MerchantNameAndLocation_9F4E[40+1];                     
  unsigned char                       AcquirerIdentifier_9F01[6];                        
  unsigned char                       TerminalFloorLimit_DF51[6];                        
  unsigned char                       TerminalNoCVMLimit_DF52[6];                        
  unsigned char         TerminalContactlessLimitNonCDCVM_DF53[6];                        
  unsigned char            TerminalContactlessLimitCDCVM_DF54[6];                        
  unsigned char                  TerminalTPMCapabilities_DF55[2];                        
  unsigned char                 TransactionRecoveryLimit_DF56;                           
  unsigned char                               AppFlowCap_DFAB31[5];                      
  unsigned char                               TACDefault_DFAB43[5];                      
  unsigned char                                TACDenial_DFAB44[5];                      
  unsigned char                                TACOnline_DFAB45[5];                      
  EMV_CTLS_DATA_TYPE                 DataExchangeTagList_DFAB57;                         
} EMV_CTLS_APPLIDATA_MR_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_MR_9F1C_0     0x01  
#define  INPUT_CTLS_APL_MR_9F1A_0     0x02  
#define  INPUT_CTLS_APL_MR_9F35_0     0x04  
#define  INPUT_CTLS_APL_MR_9F09_0     0x08  
#define  INPUT_CTLS_APL_MR_9F15_0     0x10  
#define  INPUT_CTLS_APL_MR_9F4E_0     0x20  
#define  INPUT_CTLS_APL_MR_9F01_0     0x40  
#define  INPUT_CTLS_APL_MR_DF51_0     0x80  
/* Byte 2 */
#define  INPUT_CTLS_APL_MR_DF52_1     0x01  
#define  INPUT_CTLS_APL_MR_DF53_1     0x02  
#define  INPUT_CTLS_APL_MR_DF54_1     0x04  
#define  INPUT_CTLS_APL_MR_DF55_1     0x08  
#define  INPUT_CTLS_APL_MR_DF56_1     0x10  
#define  INPUT_CTLS_APL_MR_DFAB31_1   0x20  
#define  INPUT_CTLS_APL_MR_DFAB43_1   0x40  
#define  INPUT_CTLS_APL_MR_DFAB44_1   0x80  
/* Byte 3 */
#define  INPUT_CTLS_APL_MR_DFAB45_2   0x01  
#define  INPUT_CTLS_APL_MR_DFAB57_2   0x02  


//     Domestic      //

typedef struct EMV_CTLS_APPLIDATA_DOM_STRUCT {
  unsigned char                       IncludedData[8]; 
  unsigned char                  AppFlowCap_DFAB31[5]; 
  unsigned char ContactlessTransactionLimit_DFAB41[6]; 
  } EMV_CTLS_APPLIDATA_DOM_TYPE;

/* Byte 1 */
#define  INPUT_CTLS_APL_DOM_DFAB31_0   0x01  
#define  INPUT_CTLS_APL_DOM_DFAB41_0   0x02  


/* Byte 1 */
#define EMV_CTLS_FLOW_DOM_EXPLICIT_SELECT 0x01  

// global //

typedef struct EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT {

  unsigned char                    IncludedData[8];                                   

  // Global ADK related parameters
  unsigned char                        ASI_DFAB02;                               
  unsigned char                 AppFlowCap_DFAB03[5];                            
  EMV_CTLS_APPLI_TYPE PriorityApplications_DFAB04[EMV_ADK_MAX_PRIO_APP];         
  unsigned char           SpecialTRXConfig_DFAB05[8];                            
           char           ChksumEntryPoint_DFAB06[EMV_ADK_CHECKSUM_ASCII_SIZE];  
           char               ChksumKernel_DFAB07[EMV_ADK_CHECKSUM_ASCII_SIZE];  
  unsigned char              RetapFieldOff_DFAB08;                               

  // Global kernel related parameters. These are relevant for ADK AND kernel configuration and therefore are handled for each of the kernels (if applicable only)
  EMV_CTLS_DATA_TYPE          AdditionalTagsTRM_DFAB20;                               
  EMV_CTLS_DATA_TYPE          AdditionalTagsCRD_DFAB21;                               
  char          DefaultApplicationName_DFAB22[16+1];                                  
  unsigned InternalKernelId_DFAB23;                                                   

  union {
    EMV_CTLS_APPLIDATA_MK_TYPE MK;  
    EMV_CTLS_APPLIDATA_GC_TYPE GC;  
    EMV_CTLS_APPLIDATA_VK_TYPE VK;  
    EMV_CTLS_APPLIDATA_AK_TYPE AK;  
    EMV_CTLS_APPLIDATA_JK_TYPE JK;  
    EMV_CTLS_APPLIDATA_DK_TYPE DK;  
    EMV_CTLS_APPLIDATA_IK_TYPE IK;  
    EMV_CTLS_APPLIDATA_EK_TYPE EK;  
    EMV_CTLS_APPLIDATA_PK_TYPE PK;  
    EMV_CTLS_APPLIDATA_CK_TYPE CK;  
    EMV_CTLS_APPLIDATA_GK_TYPE GK;  
    EMV_CTLS_APPLIDATA_RK_TYPE RK;  
    EMV_CTLS_APPLIDATA_WK_TYPE WK;  
    EMV_CTLS_APPLIDATA_BK_TYPE BK;  
    EMV_CTLS_APPLIDATA_SK_TYPE SK;  
    EMV_CTLS_APPLIDATA_PB_TYPE PB;  
    EMV_CTLS_APPLIDATA_MR_TYPE MR;  
    EMV_CTLS_APPLIDATA_DOM_TYPE DOM; 
  } Scheme;

} EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE;

  /* Byte 1 */
#define  INPUT_CTLS_APL_GLOB_DFAB02_0   0x01  
#define  INPUT_CTLS_APL_GLOB_DFAB03_0   0x02  
#define  INPUT_CTLS_APL_GLOB_DFAB04_0   0x04  
#define  INPUT_CTLS_APL_GLOB_DFAB05_0   0x08  
#define  INPUT_CTLS_APL_GLOB_DFAB06_0   0x10  
#define  INPUT_CTLS_APL_GLOB_DFAB07_0   0x20  
#define  INPUT_CTLS_APL_GLOB_DFAB08_0   0x40  
  /* Byte 2 */
#define  INPUT_CTLS_APL_GLOB_DFAB20_1   0x01  
#define  INPUT_CTLS_APL_GLOB_DFAB21_1   0x02  
#define  INPUT_CTLS_APL_GLOB_DFAB22_1   0x04  
#define  INPUT_CTLS_APL_GLOB_DFAB23_1   0x08  

// ========================================================================================================
// === EMV TRANSACTION DATA ===
// ========================================================================================================

typedef struct EMV_CTLS_PAYMENT_STRUCT // EMV_CTLS_PAYMENT_TYPE
{
  unsigned char           Amount[6];                 
  unsigned char           CurrencyTrans[2];          
  unsigned char           ExpTrans;                  
  unsigned char           Date[3];                   
  unsigned char           Time[3];                   
  unsigned char           TransCount[4];             
  unsigned char           Cashback_Amount[6];        
  unsigned char           Force_Online;              
  unsigned char           Online_Switch;             
  unsigned char           uc_AccountType;            
  EMV_CTLS_TAGLIST_TYPE   Additional_Result_Tags;    
} EMV_CTLS_PAYMENT_TYPE;   


typedef struct EMV_CTLS_APPS_SELECT_STRUCT // EMV_CTLS_APPS_SELECT_TYPE
{
  EMV_CTLS_APPLI_TYPE     ExcludeEmvAIDs[3];         
  EMV_CTLS_APPLI_KERNEL_TYPE ExcludeCombos[3];       
} EMV_CTLS_APPS_SELECT_TYPE;            


// ========================================================================================================
// === APPLICATION SETUP ===
// ========================================================================================================

  // byte 1
#define CLTRXOP_SUPPRESS_ERRMSGBEEP  0x01  
#define CLTRXOP_REPEAT_L1            0x02  
#define CLTRXOP_NO_DOMESTIC_KERNEL   0x04  
#define CLTRXOP_NO_GLOBAL            0x08  
#define CLTRXOP_PP_TORNTXN_RESET     0x10  
#define CLTRXOP_AK_DELAYED_AUTH      0x20  

#define CLTRXOP_REMOVEALL_BUT_EXCLUDED 0x80  
// byte 2
#define CLTRXOP_CANDLIST_CALLBACK    0x01  
#define CLTRXOP_APPSELECTED_CALLBACK 0x02  
#define CLTRXOP_NO_BUL12             0x04  
//#define CLTRXOP_MULTIPLE_MATCH_AID   0x08  
#define CLTRXOP_NO_LONGEST_AID_MATCH 0x10  
#define CLTRXOP_SPURIOUS_CARD_DETECT 0x20  
#define CLTRXOP_NO_PAN_RETRIEVE_DEF  0x40  
#define CLTRXOP_RND_CALLBACK         0x80  
//byte 3
#define CLTRXOP_OMIT_CHECKSUM_CHECK  0x01  
#define CLTRXOP_STOP_ON_CHKSUM_DIFF  0x02  
#define CLTRXOP_NO_AMOUNT_PRECHECK   0x08  
#define CLTRXOP_L1_ERROR_CALLBACK    0x10  
#define CLTRXOP_SETUP_WAIT_FOR_ERROR 0x20  
#define CLTRXOP_WEEK_PRIORITY_APPS   0x40  
#define CLTRXOP_PRELOAD_TRANSACTION  0x80  
//byte 4
#define CLTRXOP_KEEP_MULTIPLE_KERNEL 0x01  
#define CLTRXOP_TIP_AMOUNT_ZERO      0x02  
#define CLTRXOP_SILENT_ON_EMPTY_LIST 0x04  
#define CLTRXOP_CVM_REQUIRED         0x08  
#define CLTRXOP_LONG_TAP_TIMER       0x10  
#define CLTRXOP_SEND_POI_INFORMATION 0x20  
#define CLTRXOP_BEEP_BY_BUZZER       0x40  
#define CLTRXOP_BEEP_OS_VOLUME       0x80  
//byte 5

#define EMV_CTLS_TRAN_TYPE_PURE_GETDATA         0x78  
#define EMV_CTLS_TRAN_TYPE_PURE_PUTDATA         0x79  
#define EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE    0x90  

#define CLTRX_PASSTHROUGH_OFF        0x00  
#define CLTRX_PASSTHROUGH_NONISO     0x01  
#define CLTRX_PASSTHROUGH_ALL        0x02  

#define CLTRX_CARDTYPE_ISO           0x01  
#define CLTRX_CARDTYPE_MIFARE        0x02  
#define CLTRX_CARDTYPE_OTHER         0x03  

typedef struct EMV_CTLS_START_STRUCT
{
  unsigned char             ServerPollTimeout;         
  unsigned char             TransType;                 
  EMV_CTLS_PAYMENT_TYPE     TXN_Data;                  
  EMV_CTLS_APPS_SELECT_TYPE SEL_Data;                  
  unsigned char             TxnOptions[5];             
  unsigned char             passthroughCardTypes;      
  unsigned char             Info_Included_Data[8];     
} EMV_CTLS_START_TYPE;


/* Byte 1 */
#define  INPUT_CTLS_SEL_AMOUNT              0x01  
#define  INPUT_CTLS_SEL_AMOUNT_CURRENCY     0x02  
#define  INPUT_CTLS_SEL_CUREXPONENT         0x04  
#define  INPUT_CTLS_SEL_DATE                0x08  
#define  INPUT_CTLS_SEL_TIME                0x10  
#define  INPUT_CTLS_SEL_TTYPE               0x20  
#define  INPUT_CTLS_SEL_EXCLUDE_AID         0x40  
#define  INPUT_CTLS_SEL_FORCE_ONLINE        0x80  
/* Byte 2 */
#define  INPUT_CTLS_SEL_ONLINE_SWITCH       0x01  
#define  INPUT_CTLS_SEL_TXN_COUNTER         0x02  
#define  INPUT_CTLS_SEL_CB_AMOUNT           0x04  
#define  INPUT_CTLS_SEL_ACCOUNT_TYPE        0x08  
#define  INPUT_CTLS_SEL_TXN_OPTIONS         0x10  
#define  INPUT_CTLS_SEL_POLL_TIMEOUT        0x20  
#define  INPUT_CTLS_SEL_PASSTHROUGH         0x40  
#define  INPUT_CTLS_SEL_ADD_TAGS            0x80  

// Byte 3, Info_Included_Data[2]
#define  INPUT_CTLS_SEL_EXCLUDE_COMBO       0x01  

/* Byte 1 */
#define  EMV_CTLS_SETUPTRX_RES_CHKSUM_DIFF  0x01  

/* Byte 1 */
#define  OUTPUT_CTLS_SEL_TXN_INFO  0x01  

typedef struct EMV_CTLS_STARTRES_STRUCT
{
    unsigned char  TxnInformation[5];             
    unsigned char  T_DF61_Info_Received_Data[8];  
} EMV_CTLS_STARTRES_TYPE;



// ========================================================================================================
// === TRANSACTION EXECUTION ===
// ========================================================================================================

typedef struct EMV_CTLS_HOST_STRUCT
{
  char             OnlineResult;           
  unsigned char    AuthResp[2];            
  unsigned char    TxnOptions[5];          
  unsigned short   LenScriptData;          
  const unsigned char* ScriptData;         
  unsigned char        LenAuth;            
  const unsigned char* AuthData;           
  unsigned char    AuthResp_Positive[2];   
  unsigned char AuthResp_SwitchInterface[2]; 
  unsigned char AuthResp_OnlinePIN[2];     
  unsigned char amountUpd[EMV_ADK_BCD_AMOUNT_LEN];    
  unsigned char amountOthUpd[EMV_ADK_BCD_AMOUNT_LEN]; 
  unsigned char    Info_Included_Data[8];  
} EMV_CTLS_HOST_TYPE;


/* Byte 1 */
#define  INPUT_CTLS_ONL_ONLINE_RESP         0x01  
#define  INPUT_CTLS_ONL_AUTH_RESP           0x02  
#define  INPUT_CTLS_ONL_TXN_OPTIONS         0x04  
#define  INPUT_CTLS_ONL_SCRIPT              0x08  
#define  INPUT_CTLS_ONL_AUTHDATA            0x10  
#define  INPUT_CTLS_ONL_ARC_POSITIVE        0x20  
#define  INPUT_CTLS_ONL_ARC_SWITCH_IF       0x40  
#define  INPUT_CTLS_ONL_ARC_ONLINE_PIN      0x80  

#define  INPUT_CTLS_ONL_AMOUNT              0x01  
#define  INPUT_CTLS_ONL_AMOUNT_OTH          0x02  


#define EMV_ADK_CL_SCRIPTRES_LEN (EMV_ADK_SCRIPT_RESULT_MAX * EMV_ADK_SCRIPT_RESULT_LEN + 6) 

typedef struct EMV_CTLS_CONT_OFFL_STRUCT
{
    unsigned long options; 
    unsigned char Info_Included_Data[8];  
} EMV_CTLS_CONT_OFFL_TYPE;

// @brief Contents of the input in EMV_CTLS_CONT_OFFL_STRUCT::Info_Included_Data, EMV_CTLS_ContinueOfflineExt()
#define INPUT_CTLS_CONT_OFFL_OPTIONS        0x01 


#define INPUT_CTLS_CONT_OFFL_OPT_PIN                 0x01  
#define INPUT_CTLS_CONT_OFFL_OPT_PIN_CANCELLED       0x02  
#define INPUT_CTLS_CONT_OFFL_OPT_PIN_BYPASSED        0x04  
#define INPUT_CTLS_CONT_OFFL_OPT_PIN_ERROR           0x06  

typedef struct EMV_CTLS_TRANSRES_STRUCT // EMV_CTLS_TRANSRES_TYPE
{
  unsigned long         StatusInfo;                          
  unsigned char         T_9F27_CryptInfo;                    
  unsigned char         T_9F36_ATC[2];                       
  unsigned char         T_9F26_Cryptogramm[8];               
  unsigned char         T_5A_PAN[10];                        
  unsigned char         T_9F39_POSEntryMode;                 
  unsigned char         T_5F24_AppExpDate[3];                
  unsigned char         T_9F41_TransCount[4];                
  unsigned char         T_5F34_PANSequenceNo[1];             
  EMV_CTLS_TRACK2_TYPE  T_57_DataTrack2;                     
  EMV_CTLS_ISSDATA_TYPE T_9F10_DataIssuer;                   
  unsigned char         T_9F37_RandomNumber[4];              
  unsigned char         T_95_TVR[5];                         
  unsigned char         T_9A_Date[3];                        
  unsigned char         T_9F21_Time[3];                      
  unsigned char         T_9C_TransType;                      
  unsigned char         T_5F2A_CurrencyTrans[2];             
  unsigned char         T_82_AIP[2];                         
  unsigned char         T_9F1A_TermCountryCode[2];           
  unsigned char         T_9F34_CVM_Res[3];                   
  unsigned char         T_9F33_TermCap[3];                   
  unsigned char         T_9F35_TermTyp;                      
  unsigned char         T_9F1E_IFDSerialNumber[8];           
  EMV_CTLS_APPLI_TYPE   T_84_DFName;                         
  unsigned char         T_9F09_VerNum[2];                    
  unsigned char         T_9B_TSI[2];                         
  EMV_CTLS_APPLI_TYPE   T_9F06_AID;                          
  unsigned char         Add_TXN_Tags[EMV_ADK_ADD_TAG_SIZE];  
  unsigned char         T_9F02_TXNAmount[6];                 
  unsigned char         T_9F03_TXNAdditionalAmount[6];       
  unsigned char         T_9F53_MC_CatCode[1];                
  unsigned char         AppName[16+1];                       
  unsigned char         T_5F25_AppEffDate[3];                
  unsigned char         T_5F28_IssCountryCode[2];            
  unsigned char         T_9F45_DataAuthCode[2];              
  EMV_CTLS_ICCRND_TYPE  T_9F4C_ICCDynNumber;                 
  unsigned char         TACDenial[5];                        
  unsigned char         TACOnline[5];                        
  unsigned char         TACDefault[5];                       
  unsigned char         T_9F0E_IACDenial[5];                 
  unsigned char         T_9F0F_IACOnline[5];                 
  unsigned char         T_9F0D_IACDefault[5];                
  unsigned char         T_9F40_AddTermCap[5];                
  unsigned char         T_9F16_MerchIdent[15];               
  EMV_CTLS_CRDNAME_TYPE T_5F20_Cardholder;                   
  unsigned char         T_5F2D_Lang_Pref[8+1];               
  unsigned char         T_9F08_ICC_Appli_Vers_No[2];         
  unsigned char         T_5F36_Trx_Currency_Exp;             
  unsigned char         T_5F30_ServiceCode[2];               
  unsigned long         CL_Mode;                             
  unsigned char         T_9F66_CL_TTQ[4];                    
  EMV_CTLS_TRACK2_TYPE  T_DF5D_CL_MAGSTRIPE_T2;              
  unsigned char         T_9F6C_CL_VISA_CTQ[2];               
  unsigned char         T_9F5D_CL_VISA_AOSA[EMV_ADK_BCD_AMOUNT_LEN];     
  unsigned char         T_DF8104_CL_MC_BALANCE[EMV_ADK_BCD_AMOUNT_LEN];  
  unsigned char         T_DF8105_CL_MC_BALANCE[EMV_ADK_BCD_AMOUNT_LEN];  
  unsigned char         T_DF64_KernelDebugData[32];               
  unsigned char         ctlsCardType;                             
  unsigned char         ScriptResults[EMV_ADK_CL_SCRIPTRES_LEN];  
  unsigned short        ScriptResultsLen;                         

  unsigned char    T_DF61_Info_Received_Data[8];             
} EMV_CTLS_TRANSRES_TYPE;


/* Byte 1 */
#define  TRX_CTLS_STATUSINFO               0x01 
#define  TRX_CTLS_9F27_CRYPTINFO           0x02 
#define  TRX_CTLS_9F36_ATC                 0x04 
#define  TRX_CTLS_9F26_CRYPTOGRAMM         0x08 
#define  TRX_CTLS_5A_PAN                   0x10 
#define  TRX_CTLS_9F39_POS_ENTRY_MODE      0x20 
#define  TRX_CTLS_5F24_APPEXPDATE          0x40 
#define  TRX_CTLS_9F41_TRANSCOUNT          0x80 

/* Byte 2 */
#define  TRX_CTLS_5F34_PAN_SEQ_NUMBER      0x01 
#define  TRX_CTLS_57_DATA_TRACK2           0x02 
#define  TRX_CTLS_9F10_DATAISSUER          0x04 
#define  TRX_CTLS_9F37_RANDOM_NUMBER       0x08 
#define  TRX_CTLS_95_TVR                   0x10 
#define  TRX_CTLS_9A_DATE                  0x20 
#define  TRX_CTLS_9F21_TIME                0x40 
#define  TRX_CTLS_9C_TRANSTYPE             0x80 

/* Byte 3 */
#define  TRX_CTLS_5F2A_TRANS_CURRENCY      0x01 
#define  TRX_CTLS_82_AIP                   0x02 
#define  TRX_CTLS_9F1A_TERM_COUNTRY_CODE   0x04 
#define  TRX_CTLS_9F34_CVM_RES             0x08 
#define  TRX_CTLS_9F33_TERMCAP             0x10 
#define  TRX_CTLS_9F35_TERMTYP             0x20 
#define  TRX_CTLS_9F1E_IFDSERIALNUMBER     0x40 
#define  TRX_CTLS_84_DFNAME                0x80 

/* Byte 4 */
#define  TRX_CTLS_9F09_VERNUM              0x01 
#define  TRX_CTLS_9B_TSI                   0x02 
#define  TRX_CTLS_9F06_AID                 0x04 
#define  TRX_CTLS_ADDITIONAL_TAGS          0x08 
#define  TRX_CTLS_APPNAME                  0x10 
#define  TRX_CTLS_5F25_APPEFFDATE          0x20 
#define  TRX_CTLS_5F28_ISSCOUNTRYCODE      0x40 
#define  TRX_CTLS_9F45_DATAAUTHCODE        0x80 

/* Byte 5 */
#define  TRX_CTLS_9F4C_ICCDYNNUMBER        0x01 
#define  TRX_CTLS_TAC_DENIAL               0x02 
#define  TRX_CTLS_TAC_ONLINE               0x04 
#define  TRX_CTLS_TAC_DEFAULT              0x08 
#define  TRX_CTLS_9F0E_IAC_DENIAL          0x10 
#define  TRX_CTLS_9F0F_IAC_ONLINE          0x20 
#define  TRX_CTLS_9F0D_IAC_DEFAULT         0x40 
#define  TRX_CTLS_9F40_TERMCAP             0x80 

/* Byte 6 */
#define  TRX_CTLS_RFU_B6B1                 0x01 
#define  TRX_CTLS_9F16_MERCHANT_ID         0x02 
#define  TRX_CTLS_RFU_B6B3                 0x04 
#define  TRX_CTLS_5F20_CARDHOLDER          0x08 
#define  TRX_CTLS_5F2D_LANG_PREFERENCE     0x10 
#define  TRX_CTLS_9F08_ICC_APPLI_VERS_NO   0x20 
#define  TRX_CTLS_5F36_TRX_CURRENCY_EXPO   0x40 
#define  TRX_CTLS_5F30_SERVICE_CODE        0x80 

/* Byte 7 */
#define  TRX_CTLS_CTLS_MODES               0x01 
#define  TRX_CTLS_9F66_TTQ                 0x02 
#define  TRX_CTLS_DF5D_CL_MAGSTRIPE        0x04 
#define  TRX_CTLS_9F6C_VISA_CTQ            0x08 
#define  TRX_CTLS_9F5D_VISA_AOSA           0x10 
#define  TRX_CTLS_DF8104_MC_BALANCE        0x20 
#define  TRX_CTLS_DF8105_MC_BALANCE        0x40 
#define  TRX_CTLS_DF64_KERNEL_DEBUG        0x80 

/* Byte 8 */
#define  TRX_CTLS_9F02_AMOUNT              0x01 
#define  TRX_CTLS_9F03_CB_AMOUNT           0x02 
#define  TRX_CTLS_9F53_MC_CATCODE          0x04 
#define  TRX_CTLS_CARDTYPE                 0x08 
#define  TRX_CTLS_SCRIPTRESULTS            0x10 


#define  EXIT_CTLS_BASE           0x00  
#define  EXIT_CTLS_STOP_LEDS      0x01  
#define  EXIT_CTLS_COMPLETE       0x02  
#define  EXIT_CTLS_SEND_CALLBACK  EXIT_CTLS_COMPLETE  


#define END_TXN_CTLS_NO_LEDS_OFF 0x01  


// ========================================================================================================
// === MISCELLANEOUS ===
// ========================================================================================================

#define MAX_CTLS_CONF_KEYS  99 

typedef struct EMV_CTLS_CAPKEY_STRUCT
{
  unsigned char *RID;          
  unsigned char Index;         
  unsigned char *Key;          
  unsigned char KeyLen;        
  unsigned char Exponent;      
  unsigned char *Hash;         
  unsigned char noOfRevocEntries; 
  unsigned char* RevocEntries;    
} EMV_CTLS_CAPKEY_TYPE;

typedef struct EMV_CTLS_CAPREAD_STRUCT
{
  unsigned char RID[5];        
  unsigned char Index;         
  unsigned char KeyLen;        
} EMV_CTLS_CAPREAD_TYPE;

#define  EMV_CTLS_DE_REQ_DEK          0x00  
#define  EMV_CTLS_DE_REQ_DET          0x01  

#define  EMV_CTLS_DE_STATE_0          0x00  
#define  EMV_CTLS_DE_STATE_1          0x01  
#define  EMV_CTLS_DE_STATE_2          0x02  
#define  EMV_CTLS_DE_STATE_3          0x03  
#define  EMV_CTLS_DE_STATE_4          0x04  
#define  EMV_CTLS_DE_STATE_5          0x05  
#define  EMV_CTLS_DE_STATE_6          0x06  
#define  EMV_CTLS_DE_STATE_7          0x07  
#define  EMV_CTLS_DE_STATE_8          0x08  

#define  EMV_CTLS_DE_MODE_STOP        0x00  
#define  EMV_CTLS_DE_MODE_CONT        0x01  
#define  EMV_CTLS_DE_MODE_MORE        0x02  

// ========================================================================================================
// === CALLBACK FUNCTION for additional features and apps interaction during the transaction            ===
// === (PIN, Application Selection, DCC, ...)                                                           ===
// ========================================================================================================

#define TAG_BF0B_INIT_CALLBACK_THREAD    0xBF0B  
#define TAG_BF0C_CTLS_CBK_APP_SELECTED   0xBF0C  
#define TAG_BF0E_CBK_DATA_EXCHANGE       0xBF0E  
#define TAG_BF0F_EXIT_CALLBACK_THREAD    0xBF0F  
#define TAG_BF10_CTLS_CBK_LEDS           0xBF10  
#define TAG_BF12_CBK_MODIFY_CAND         0xBF12  
#define TAG_BF13_CBK_RND                 0xBF13  
#define TAG_BF14_CBK_TEXT_DISPLAY        0xBF14  
#define TAG_BF15_CBK_CARD_TAPPED         0xBF15  
#define TAG_BF16_CBK_SERVICE_SHORTLIST   0xBF16  
#define TAG_BF17_CBK_SERVICE_FOR_GENAC   0xBF17  
#define TAG_BF18_CBK_PURE_GET_PUT_DATA   0xBF18  
#define TAG_BF19_CTLS_CBK_BEEP           0xBF19  
#define TAG_BF7F_CTLS_CBK_TRACE          0xBF7F  


// ========================================================================================================
// === SERIALIZED FUNCTIONAL CONTACTLESS INTERFACE
// ========================================================================================================


#define EMV_CTLS_SER_Init_Framework(dataIn, dataInLen, dataOut, dataOutLen) EMV_CTLS_SER_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (dataIn), (dataInLen), (dataOut), (dataOutLen))

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_Init_Framework_Client(const char *version, const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC void EMV_CTLS_SER_Exit_Framework(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_MapVirtualTerminal(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_StoreCAPKey(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_ReadCAPKeys(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_SetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_GetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_SetAppliDataSchemeSpecific(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_GetAppliDataSchemeSpecific(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_SetupTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_ContinueOffline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_ContinueOnline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_fetchTxnTags(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_EndTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC unsigned char EMV_CTLS_SER_TransparentCommand(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen)
#if defined(_VOS) || !defined(_VOS2)
;
#else
__attribute ((deprecated));
#endif

DLL_CLC unsigned char EMV_CTLS_SER_SmartISO(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC unsigned char EMV_CTLS_SER_SmartReset(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC unsigned char EMV_CTLS_SER_SmartPowerOff(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC unsigned char EMV_CTLS_SER_CardRemoval(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC unsigned char EMV_CTLS_SER_LED_SetMode(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC unsigned char EMV_CTLS_SER_LED(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC unsigned char EMV_CTLS_SER_LED_ConfigDesign(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC unsigned char EMV_CTLS_SER_Break(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_GetCandidateData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

// ========================================================================================================
// === FUNCTIONAL CONTACTLESS INTERFACE                                                                 ===
// ========================================================================================================


#define EMV_CTLS_INIT_OPT_BASE_INIT       0x00000001   
#define EMV_CTLS_INIT_OPT_L1_DUMP         0x00000002   
#define EMV_CTLS_INIT_OPT_AUTO_RETAP      0x00000004   
#define EMV_CTLS_INIT_OPT_CONFIG_MODE     0x00000008   
#define EMV_CTLS_INIT_OPT_USE_DEF_VT_CAPK 0x00000010   
#define EMV_CTLS_INIT_OPT_DELETE_ALL      0x00000020   
#define EMV_CTLS_INIT_OPT_USE_VFI         0x00000040   
#define EMV_CTLS_INIT_OPT_USE_VERTEX      0x00000080   
#define EMV_CTLS_INIT_OPT_TRACE           0x00000100   
#define EMV_CTLS_INIT_OPT_TRACE_CLT       0x00000200   
#define EMV_CTLS_INIT_OPT_LED_CBK_EXT     0x00000400   
#define EMV_CTLS_INIT_OPT_TRACE_SYSLOG    0x00000800   
#define EMV_CTLS_INIT_OPT_LED_VFI_INT     0x00001000   
#define EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK  0x00004000   
#define EMV_CTLS_INIT_OPT_CALC_CHKSUM     0x00010000   
#define EMV_CTLS_INIT_OPT_NEW_CFG_INTF    0x00020000   
#define EMV_CTLS_INIT_OPT_BEEP_CBK_EXT    0x00040000   
#define EMV_CTLS_INIT_OPT_TRACE_ADK_LOG   0x00080000   
#define EMV_CTLS_INIT_OPT_TIMINGS         0x00100000   
#define EMV_CTLS_INIT_OPT_SHARED_CONFIG   0x00200000   
#define EMV_CTLS_INIT_OPT_EPP_MASTER      0x00400000   

#define EMV_CTLS_INIT_VIRT_1              0x01000000   
#define EMV_CTLS_INIT_VIRT_2              0x02000000   
#define EMV_CTLS_INIT_VIRT_3              0x03000000   
#define EMV_CTLS_INIT_VIRT_4              0x04000000   
#define EMV_CTLS_INIT_VIRT_5              0x05000000   
#define EMV_CTLS_INIT_VIRT_6              0x06000000   
#define EMV_CTLS_INIT_VIRT_7              0x07000000   
#define EMV_CTLS_INIT_VIRT_8              0x08000000   
#define EMV_CTLS_INIT_VIRT_9              0x09000000   
#define EMV_CTLS_INIT_VIRT_10             0x0A000000   
#define EMV_CTLS_INIT_VIRT_11             0x0B000000   
#define EMV_CTLS_INIT_VIRT_12             0x0C000000   
#define EMV_CTLS_INIT_VIRT_13             0x0D000000   
#define EMV_CTLS_INIT_VIRT_14             0x0E000000   
#define EMV_CTLS_INIT_VIRT_15             0x0F000000   
#define EMV_CTLS_INIT_VIRT_16             0x10000000   
#define EMV_CTLS_INIT_VIRT_17             0x11000000   
#define EMV_CTLS_INIT_VIRT_18             0x12000000   
#define EMV_CTLS_INIT_VIRT_19             0x13000000   
#define EMV_CTLS_INIT_VIRT_20             0x14000000   

#define EMV_CTLS_INIT_RES_CHKSUM_DIFF       0x00000001  
#define EMV_CTLS_INIT_RES_VFI_READER_MISS   0x00000002  
#define EMV_CTLS_INIT_RES_ENTRY_POINT_MISS  0x00000004  

#define EMV_CTLS_Init_Framework(numberOfAIDs, EMV_Callback, externalData, options,ulResult) EMV_CTLS_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options),(ulResult))

/*****************************************************************************
*  EMV_CTLS_Init_Framework_Client
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_Init_Framework_Client(const char *version, unsigned char numberOfAIDs, EMV_CTLS_CALLBACK_FnT EMV_Callback, void* externalData, unsigned long options,unsigned long *ulResult);

/*****************************************************************************
*  EMV_CTLS_Exit_Framework
*****************************************************************************/
DLL_CLC void EMV_CTLS_Exit_Framework(void);

/*****************************************************************************
*  EMV_CTLS_Exit_Framework_extended
*****************************************************************************/
DLL_CLC void EMV_CTLS_Exit_Framework_extended(unsigned char options);


/*****************************************************************************
*  EMV_CTLS_CLIENT_GetVersion
*****************************************************************************/
DLL_CLC const char* EMV_CTLS_CLIENT_GetVersion(void);


/*****************************************************************************
*  EMV_CTLS_FRAMEWORK_GetVersion
*****************************************************************************/
DLL_CLC const char* EMV_CTLS_FRAMEWORK_GetVersion(void);


/*****************************************************************************
*  EMV_CTLS_MapVirtualTerminal
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_MapVirtualTerminal(EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType, unsigned char *TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal);


/*****************************************************************************
*  EMV_CTLS_StoreCAPKey
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_StoreCAPKey(EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType, const EMV_CTLS_CAPKEY_TYPE *pxKeyData);


/*****************************************************************************
*  EMV_CTLS_ReadCAPKeys
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_ReadCAPKeys(EMV_CTLS_CAPREAD_TYPE *pxKeyData, unsigned char *pucMaxnum);

/*****************************************************************************
*  EMV_CTLS_ReadCAPKeyInfo
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_GetCAPKeyInfo(EMV_CTLS_CAPREAD_TYPE *pxKeyData, unsigned capacity, unsigned offset, unsigned* numberRead, unsigned* numberConfigured);

/*****************************************************************************
*  EMV_CTLS_SetTermData
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_SetTermData(EMV_CTLS_TERMDATA_TYPE* pxTermData);

/*****************************************************************************
*  EMV_CTLS_GetTermData
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_GetTermData(EMV_CTLS_TERMDATA_TYPE* pxTermData);

/*****************************************************************************
*  EMV_CTLS_SetAppliDataSchemeSpecific
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_SetAppliDataSchemeSpecific(EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CTLS_APPLI_KERNEL_TYPE* pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE* pxAppliData);

/*****************************************************************************
*  EMV_CTLS_GetAppliDataSchemeSpecific
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_GetAppliDataSchemeSpecific(EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CTLS_APPLI_KERNEL_TYPE* pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE* pxAppliData);

/*****************************************************************************
*  EMV_CTLS_ApplyConfiguration
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_ApplyConfiguration(unsigned long options);

/*****************************************************************************
* EMV_CTLS_SetupTransaction
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_SetupTransaction( EMV_CTLS_START_TYPE *pxStartInput, EMV_CTLS_STARTRES_TYPE* pxStartRes);

/*****************************************************************************
*  EMV_CTLS_ContinueOffline
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_ContinueOffline(EMV_CTLS_TRANSRES_TYPE *pxTransRes);

/*****************************************************************************
*  EMV_CTLS_ContinueOfflineExt
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_ContinueOfflineExt(EMV_CTLS_CONT_OFFL_TYPE *pxContOfflInput, EMV_CTLS_TRANSRES_TYPE *pxTransRes);

/*****************************************************************************
*  EMV_CTLS_ContinueOnline
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_ContinueOnline(EMV_CTLS_HOST_TYPE *pxOnlineInput, EMV_CTLS_TRANSRES_TYPE *pxTransRes);

/*****************************************************************************
*  EMV_CTLS_fetchTxnTags
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_fetchTxnTags(unsigned long options, unsigned long* requestedTags, unsigned short noOfRequestedTags, unsigned char* tlvBuffer, unsigned short bufferLength, unsigned short* tlvDataLength );

/*****************************************************************************
*  EMV_CTLS_fetchTxnDOL
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_fetchTxnDOL(unsigned long options, const unsigned char* DOL, unsigned dolLen, unsigned char* buffer, unsigned bufferSize, unsigned* dataLength);

/*****************************************************************************
*  EMV_CTLS_EndTransaction
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_EndTransaction(unsigned long options);


// ========================================================================================================
// === CONTACTLESS FUNCTIONS to be implemented in entity in which framework is running ===
// ========================================================================================================

#  define CONTACTLESS_LED_FIRST   0x01 
#  define CONTACTLESS_LED_SECOND  0x02 
#  define CONTACTLESS_LED_THIRD   0x04 
#  define CONTACTLESS_LED_FOURTH  0x08 
// and a second list for those who like colours according Book A, Architecture and General Requirements, 9.3.3 Option 2 for Card Read Successfully/Processing Error
#  define CONTACTLESS_LED_BLUE    CONTACTLESS_LED_FIRST  
#  define CONTACTLESS_LED_YELLOW  CONTACTLESS_LED_SECOND 
#  define CONTACTLESS_LED_GREEN   CONTACTLESS_LED_THIRD  
#  define CONTACTLESS_LED_RED     CONTACTLESS_LED_FOURTH 
// the original and deprecated list.
#  define CONTACTLESS_LED_0       CONTACTLESS_LED_FIRST  
#  define CONTACTLESS_LED_1       CONTACTLESS_LED_SECOND 
#  define CONTACTLESS_LED_2       CONTACTLESS_LED_THIRD  
#  define CONTACTLESS_LED_3       CONTACTLESS_LED_FOURTH 

#  define CONTACTLESS_LED_ALL     0x0F 
#  define CONTACTLESS_LED_LOGO    0x80 

#define CONTACTLESS_LED_OFF                     0x00 
#define CONTACTLESS_LED_ON                      0x01 
#define CONTACTLESS_LED_IDLE_BLINK              0x02 
#define CONTACTLESS_LED_ONLINE_BLINK            0x03 
#define CONTACTLESS_LED_HANDLE_EOT_SILENT       0x04 
#define CONTACTLESS_LED_HANDLE_EOT_SUCCESS      0x05 
#define CONTACTLESS_LED_HANDLE_EOT_FAIL         0x06 
#define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK   0x07 
#define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3 0x08 

#define CONTACTLESS_LED_MODE_OFF                0x00 
#define CONTACTLESS_LED_MODE_API                0x01 
#define CONTACTLESS_LED_MODE_EMV                0x02 

#define  EMV_CTLS_BEEP_SUCCESS  1  
#define  EMV_CTLS_BEEP_ALERT    2  

#define  EMV_CTLS_RFU_1                  0x01  
#define  EMV_CTLS_RESET_KEEP_FIELD_ON    0x02  
#define  EMV_CTLS_SPURIOUS_DETECT        0x04  
#define  EMV_CTLS_EMV_COMPLIANT          0x08  
#define  EMV_CTLS_RESET_NO_EMV           0x10  
#define  EMV_CTLS_RESET_PICC_OPEN_ONLY   0x20  
#define  EMV_CTLS_SKIP_FIELD_ON          0x40  

#define  EMV_CTLS_OPEN_READER EMV_CTLS_RESET_PICC_OPEN_ONLY 
#define  EMV_CTLS_CLOSE_READER           0x40  
#define  EMV_CTLS_DETECT_REMOVAL         0x80  


/*****************************************************************************
* EMV_CTLS_TransparentCommand
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_TransparentCommand (unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut)
#if defined(_VOS) || !defined(_VOS2)
;
#else
__attribute ((deprecated));
#endif


/*****************************************************************************
* EMV_CTLS_TransparentSend
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_TransparentSend (unsigned short usInDataLen, unsigned char *pucDataIn)
#if defined(_VOS) || !defined(_VOS2)
;
#else
__attribute ((deprecated));
#endif


/*****************************************************************************
* EMV_CTLS_TransparentReceive
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_TransparentReceive (unsigned short *pusOutDataLen, unsigned char *pucDataOut)
#if defined(_VOS) || !defined(_VOS2)
;
#else
__attribute ((deprecated));
#endif


/*****************************************************************************
* EMV_CTLS_SmartISO
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_SmartISO (unsigned char ucOptions, unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut, unsigned short usOutBufferLength);

/*****************************************************************************
* EMV_CTLS_SmartReset
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_SmartReset(unsigned char ucOptions, unsigned char* pucCardInfo, unsigned long* pnInfoLength);

/*****************************************************************************
* EMV_CTLS_SmartPowerOff
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_SmartPowerOff(unsigned char ucOptions);


/*****************************************************************************
 * EMV_CTLS_CardRemoval
 *****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_CardRemoval(long timeoutMillis);

/*****************************************************************************
* EMV_CTLS_LED_SetMode
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_LED_SetMode(unsigned char ucLedMode);

/*****************************************************************************
* EMV_CTLS_LED
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_LED(unsigned char ucLedId, unsigned char ucLedState);

/*****************************************************************************
* EMV_CTLS_LED_ConfigDesign
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_LED_ConfigDesign(unsigned short width, unsigned short height, unsigned char* color_off, unsigned char* color_on,
                                                unsigned short xRegion, unsigned short yRegion, unsigned short wRegion, unsigned short hRegion)
__attribute ((deprecated));


#define EMV_CTLS_LED_SHAPE_RECTANGLE  0    
#define EMV_CTLS_LED_SHAPE_CIRCLE     1    

typedef struct EMV_CTLS_LED_COLORS_STRUCT
{
    unsigned char num_colors; 
    unsigned char *colors;    
} EMV_CTLS_LED_COLORS;

typedef struct EMV_CTLS_LED_CONFIG_STRUCT
{
    unsigned short region_x;          
    unsigned short region_y;          
    unsigned short region_width;      
    unsigned short region_height;     
    EMV_CTLS_LED_COLORS colors_off;   
    EMV_CTLS_LED_COLORS colors_on;    
    unsigned char *bg_color;          
    unsigned char shape;              
    unsigned short *shape_params;     
    unsigned char *options;           
} EMV_CTLS_LED_CONFIG;

/*****************************************************************************
* EMV_CTLS_LED_ConfigDesign_Extended
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_LED_ConfigDesign_Extended(const EMV_CTLS_LED_CONFIG *led_config) __attribute ((deprecated));

/*****************************************************************************
* EMV_CTLS_Break
*****************************************************************************/
DLL_CLC unsigned char EMV_CTLS_Break(void);

#define EMV_CTLS_SUPPORTED_SIZE_9F0A 50 
#define EMV_CTLS_SUPPORTED_SIZE_DISC 50 

typedef struct EMV_CTLS_CANDIDATE_DATA_STRUCT
{
  unsigned char API;      
  unsigned char IIN[4];   
  unsigned char IBAN[35]; 
  unsigned char BIC[12];  
  unsigned char country2[2];  
  unsigned char country3[3];  
  unsigned char len9F06;  
  unsigned char selData[1+EMV_CTLS_SUPPORTED_SIZE_9F0A]; 
  unsigned char disc[1+50]; 
} EMV_CTLS_CANDIDATE_DATA_TYPE;

#define  EMV_CTLS_ADDTAG_COMBOS  6  

/*****************************************************************************
* EMV_CTLS_GetCandidateData
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_GetCandidateData(EMV_CTLS_CANDIDATE_DATA_TYPE *candidateData);

/*****************************************************************************
* EMV_CTLS_GetCandidateDataMax
*****************************************************************************/
DLL_CLC EMV_ADK_INFO EMV_CTLS_GetCandidateDataMax(EMV_CTLS_CANDIDATE_DATA_TYPE *candidateData, unsigned maxCandidates);

#ifdef __cplusplus
}     // extern "C"
#endif

#endif  // #ifndef _EMV_CTLS_INTERFACE_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

---
title: Deprecated List

---

# Deprecated List






Module [CL_MODES](group___c_l___m_o_d_e_s.md)

* Use [Contactless Kernel Ids](group___d_e_f___k_e_r_n_e_l___i_d.md) instead.

Global [CLTRXOP_RND_CALLBACK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-rnd-callback)

* not supported anymore  

Global [com_verifone_seccmd::Sec_Destroy](namespacecom__verifone__seccmd.md#function-sec-destroy)  ()

* 

Global [com_verifone_seccmd::Sec_Init](namespacecom__verifone__seccmd.md#function-sec-init)  (u_char *=NULL)

* 

Global [CONTACT_LED_BLINK](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-blink)

* : No more supported, for instance, because it relies on SVRMGR functionality that is going to be removed  

Global [CONTACTLESS_LED_0](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-0)

* because confusing, use [CONTACTLESS_LED_FIRST](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-first) instead  

Global [CONTACTLESS_LED_1](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-1)

* because confusing, use [CONTACTLESS_LED_SECOND](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-second) instead  

Global [CONTACTLESS_LED_2](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-2)

* because confusing, use [CONTACTLESS_LED_THIRD](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-third) instead  

Global [CONTACTLESS_LED_3](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-3)

* because confusing, use [CONTACTLESS_LED_FOURTH](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-fourth) instead  

Global [EMV_ADK_MAX_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-aidsupp)

* old define for default maximum number of supported AIDs, don't use anymore, use [EMV_ADK_DEFAULT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-default-aidsupp) instead  

Global [EMV_ADK_TIP_MODE_INPUT](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-mode-input)

* Since UI control is outside EMV ADK framework this has been deprecated.  

Global [EMV_ADK_TIP_MODE_MIXED](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-mode-mixed)

* handled the same way as EMV_ADK_TIP_YES  

Global [EMV_ADK_TRAN_TYPE_BUCHUNG_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-a)

* use [EMV_ADK_TRAN_TYPE_BOOKING_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-a)

Global [EMV_ADK_TRAN_TYPE_BUCHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-b)

* use [EMV_ADK_TRAN_TYPE_BOOKING_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-b)

Global [EMV_ADK_TRAN_TYPE_ERHOEHUNG_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-erhoehung-a)

* use [EMV_ADK_TRAN_TYPE_INCREMENT_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-a)

Global [EMV_ADK_TRAN_TYPE_ERHOEHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-erhoehung-b)

* use [EMV_ADK_TRAN_TYPE_INCREMENT_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-b)

Global [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD]

* . ADK stores additional ICC tags automatically. No need to configure this anymore. Tag + maximum Length: Additional ICC tags for special applications 

 e.g. domestic cards with additional tags in ReadRecords, fleetcards with additional customer specific tags and others 

 see [EMV_CT_DOL_STRUCT](struct_e_m_v___c_t___d_o_l___s_t_r_u_c_t.md), temporary update possible, validity bit [EMV_CT_INPUT_APL_ADD_CRD_TAGS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-crd-tags)
`Tag`, `Struct`, `XML` Reference: 

 TLV tag [TAG_DF2C_ADD_TAGS_CRD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2c-add-tags-crd), 

 Additional_Tags_CRD in [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd), 

 XML Tag: [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-additional-tags-crd)

Global [EMV_CT_INIT_OPT_L1_DUMP](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-l1-dump)

* not supported anymore as non-kernel tags are collected by default  

Global [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags]

* Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead.  

Global [EMV_CT_TRANSRES_STRUCT::Add_TXN_Tags]  [EMV_ADK_ADD_TAG_SIZE]

* Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead.  

Global [EMV_CT_TRXOP_RND_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-rnd-callback)

* not supported anymore  

Global [EMV_CTLS_CALLBACK_STACK_SIZE](group___t_l_v___c_a_l_l_b_c_k.md#define-emv-ctls-callback-stack-size)

* avaiable stack-size in [EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func) (verix-only)  

Global [EMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-success-tone-on-decline)

* : If GPO results in AAC: default was changed to sound solely success tone  

Global [EMV_CTLS_GetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getapplidataschemespecific)  (EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CTLS_APPLI_KERNEL_TYPE *pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE *pxAppliData)

* [EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed-wrong-cfg-intf): wrong configuration function 

Global [EMV_CTLS_INIT_OPT_L1_DUMP](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-l1-dump)

* not supported anymore as non-kernel tags are collected by default  

Global [EMV_CTLS_INIT_OPT_NEW_CFG_INTF](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-new-cfg-intf)

* new application configuration interface is the only processing and this flag is ignored  

Global [EMV_CTLS_INIT_OPT_USE_VERTEX](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vertex)

* Ignored because combined CTLS framework not continued anymore  

Global [EMV_CTLS_INIT_OPT_USE_VFI](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vfi)

* Ignored because combined CTLS framework not continued anymore  

Global [EMV_CTLS_KERN_SK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sk)

* use [EMV_CTLS_KERN_SB](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sb) instead  

Global [EMV_CTLS_LED_ConfigDesign](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)  (unsigned short width, unsigned short height, unsigned char *color_off, unsigned char *color_on, unsigned short xRegion, unsigned short yRegion, unsigned short wRegion, unsigned short hRegion) __attribute((deprecated))

* The direct framebuffer approach is deprecated - use LED callbacks and LED-API from ADK-GUIPRT instead 

Global [EMV_CTLS_LED_ConfigDesign_Extended](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended)  (const EMV_CTLS_LED_CONFIG *led_config) __attribute((deprecated))

* The direct framebuffer approach is deprecated - use LED callbacks and LED-API from ADK-GUIPRT instead 

Global [EMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags]

* Use [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) instead.  

Global [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)  (EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CTLS_APPLI_KERNEL_TYPE *pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE *pxAppliData)

* [EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed-wrong-cfg-intf): wrong configuration function 

Global [EMV_CTLS_TransparentCommand](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentcommand)  (unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut)

* except for VFI reader on VOS-1 

Global [EMV_CTLS_TransparentReceive](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive)  (unsigned short *pusOutDataLen, unsigned char *pucDataOut)

* except for VFI reader on VOS-1 

Global [EMV_CTLS_TransparentSend](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend)  (unsigned short usInDataLen, unsigned char *pucDataIn)

* except for VFI reader on VOS-1 

Global [EMV_CTLS_TRANSRES_STRUCT::Add_TXN_Tags]  [EMV_ADK_ADD_TAG_SIZE]

* Use [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) instead.  

Global [EMV_CTLS_TRANSRES_STRUCT::CL_Mode]

* Maintained only for backwards compatibility. Kernel is given by [EMV_CTLS_TRANSRES_TYPE::T_DF64_KernelDebugData](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata)[18] and MSR transactions are indicated by [EMV_CTLS_TRANSRES_TYPE::StatusInfo](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo) bit [EMV_ADK_SI_CONTACTLESS_MSR](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-msr)

 TLV tag [TAG_C2_TRM_CL_MODES](group___v_e_r_i___t_a_g_s.md#define-tag-c2-trm-cl-modes), availability bit [TRX_CTLS_CTLS_MODES](group___d_e_f___d_f61.md#define-trx-ctls-ctls-modes)

Global [EXIT_CTLS_SEND_CALLBACK](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-send-callback)

* use [EXIT_CTLS_COMPLETE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-complete)

Global [INPUT_CTLS_SEL_ADD_TAGS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-add-tags)

* Don't use [EMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) instead.  

Global [INPUT_OFL_ADD_TAGS](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-add-tags)

* Don't use [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead.  

Global [INPUT_SEL_ADD_TAGS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-add-tags)

* Don't use [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead.  

Global [libsdi::SDI_SW12_ERROR](namespacelibsdi.md#enumvalue-sdi-sw12-error)

* any other error  

Global [libsdi::SDI_SW12_NOT_ALLOWED](namespacelibsdi.md#enumvalue-sdi-sw12-not-allowed)

* not allowed for the moment, e.g. card removal  

Global [libsdi::SDI_SW12_PARAMETER_ERROR](namespacelibsdi.md#enumvalue-sdi-sw12-parameter-error)

* parameter error (only in relation with EMV commands)  

Global [libsdi::SDI_SW12_TIMEOUT](namespacelibsdi.md#enumvalue-sdi-sw12-timeout)

* card detection/removal  

Global [MSR_SAMSUNG_TRACK1](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-samsung-track1)

* Samsung LoopPay Detection is activated by default.  

Global [pcBTLVTagStr](btlv_8h.md#function-pcbtlvtagstr)  (unsigned long ulTag) __attribute((deprecated))

* This function is not thread safe! It is strongly recommended to use pcBTLVTagStr2 or macro ULTAG2ASC  

Module [PP3_PMT_NO_OF_ENTRIES](group___p_p3___p_m_t___n_o___o_f___e_n_t_r_i_e_s.md)

* not used anymore

Global [sdi::bintohex](namespacesdi.md#function-bintohex)  (unsigned char *dst, const unsigned char *src, int srclen)

* Use prefixed version TLVUTIL_bintohexstring instead  

Global [sdi::bintohex](namespacesdi.md#function-bintohex)  (unsigned char *dst, const unsigned char *src, int srclen)

* Use prefixed version TLVUTIL_bintohexstring instead  

Global [sdi::hextobin](namespacesdi.md#function-hextobin)  (unsigned char *dst, const unsigned char *src, int srclen)

* Use prefixed version TLVUTIL_hextobin or TLVUTIL_hexstringtobin instead  

Global [sdi::hextobin](namespacesdi.md#function-hextobin)  (unsigned char *dst, const unsigned char *src, int srclen)

* Use prefixed version TLVUTIL_hextobin or TLVUTIL_hexstringtobin instead  

Global [SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#define-sdi-protocol-init-opt-trace-adk-log)

* Trace via ADK-LOG is controlled by LOG control panel 
component always uses ADK LOG channel with label SDIPROT  

Global [SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#define-sdi-protocol-init-opt-trace-emv-cbk)

* component always uses ADK LOG channel with label SDIPROT  

Global [SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#define-sdi-protocol-init-opt-trace-syslog)

* component always uses ADK LOG channel with label SDIPROT  

Global [TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd)

* not supported anymore 
not supported anymore  

Global [TAG_C2_TRM_CL_MODES](group___v_e_r_i___t_a_g_s.md#define-tag-c2-trm-cl-modes)

* [EMV_CTLS_TRANSRES_TYPE::CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode)

Global [TAG_C3_INDEX](group___v_e_r_i___t_a_g_s.md#define-tag-c3-index)

* 

Global [TAG_C4_APP_PRG_ID_LEN](group___v_e_r_i___t_a_g_s.md#define-tag-c4-app-prg-id-len)

* 

Global [TAG_C5_APP_PRG_ID](group___v_e_r_i___t_a_g_s.md#define-tag-c5-app-prg-id)

* 

Global [TAG_C6_TXN_LIMIT](group___v_e_r_i___t_a_g_s.md#define-tag-c6-txn-limit)

* 

Global [TAG_DF10_MSR_CVM_BELOW](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df10-msr-cvm-below)

* Was used in old config interface  

Global [TAG_DF13_TERM_PARAM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df13-term-param)

* Was used in old config interface  

Global [TAG_DF14_ADD_TAGS_RES](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df14-add-tags-res)

* Don't use [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead.  

Global [TAG_DF15_OFFL_ONLY_PROCESS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df15-offl-only-process)

* Was used in old config interface  

Global [TAG_DF17_FALLBACK_MIDS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df17-fallback-mids)

* Was used in old config interface  

Global [TAG_DF18_FALLABCK](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df18-fallabck)

* Was used in old config interface  

Global [TAG_DF1C_SPECIAL_TRX](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1c-special-trx)

* Was used in old config interface  

Global [TAG_DF1D_PRIO_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df1d-prio-appli)

* Was used in old config interface  

Global [TAG_DF20_ASI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df20-asi)

* Was used in old config interface  

Global [TAG_DF21_TAC_ABLEHNUNG](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-ablehnung)

* use [TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial) instead 
use [TAG_DF21_TAC_DENIAL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df21-tac-denial) instead  

Global [TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)

* Was used in old config interface  

Global [TAG_DF25_MAXPERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df25-maxpercent-onl)

* Was used in old config interface  

Global [TAG_DF26_PERCENT_ONL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df26-percent-onl)

* Was used in old config interface  

Global [TAG_DF27_DEFAULT_TDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df27-default-tdol)

* Was used in old config interface  

Global [TAG_DF28_DEFAULT_DDOL](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df28-default-ddol)

* Was used in old config interface  

Global [TAG_DF29_ADD_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df29-add-tags)

* Was used in old config interface  

Global [TAG_DF2B_APP_FLOW_CAP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2b-app-flow-cap)

* Was used in old config interface  

Global [TAG_DF2C_ADD_TAGS_CRD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2c-add-tags-crd)

* Was used in old config interface  

Global [TAG_DF2D_EMV_APPLI](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2d-emv-appli)

* Was used in old config interface  

Global [TAG_DF2E_CVM_NOT_SUPP](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2e-cvm-not-supp)

* Was used in old config interface  

Global [TAG_DF2F_MSR_CVM_ABOVE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df2f-msr-cvm-above)

* Was used in old config interface  

Global [TAG_DF30_RETAP_FIELD_OFF](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df30-retap-field-off)

* Was used in old config interface  

Global [TAG_DF44_CHIP_CVM_BELOW](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df44-chip-cvm-below)

* Was used in old config interface  

Global [TAG_DF45_CHIP_TXN_LIFETIME](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df45-chip-txn-lifetime)

* Was used in old config interface  

Global [TAG_DF46_CHIP_TXN_NO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df46-chip-txn-no)

* Was used in old config interface  

Global [TAG_DF49_CEIL_LIMIT_MOBILE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df49-ceil-limit-mobile)

* Was used in old config interface  

Global [TAG_DF6F_CBK_PIN_ICC_RESP](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6f-cbk-pin-icc-resp)

* ICC answer to VERIFY command (2 byte SW1/2), not needed anymore, EMV ADK stores this info internally during [EMV_CT_Send_PIN_Offline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline)

Global [TAG_DF77_CBK_LANGUAGE](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df77-cbk-language)

* EMV ADK does not send selected customer language and it ignores this parameter if put in  

Global [TAG_DF8010_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8010-de-request)

* use [TAG_DF8F58_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8f58-de-request) instead  

Global [TAG_DF8011_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8011-de-state)

* use [TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state) instead  

Global [TAG_DF8012_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8012-de-mode)

* use [TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode) instead  

Global [TAG_DF8020_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8020-rupay-gpo)

* use [TAG_DF8F50_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8f50-rupay-gpo) instead  

Global [TAG_DF8021_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8021-rupay-genac)

* use [TAG_DF8F51_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8f51-rupay-genac) instead  

Global [TAG_DF8030_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8030-led-add-info)

* use [TAG_DF8F60_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8f60-led-add-info) instead  

Global [TAG_FA_VISA_DRL_RISK](group___v_e_r_i___t_a_g_s.md#define-tag-fa-visa-drl-risk)

* 

Global [TAG_FB_PP3_PMSG_TABLE](group___v_e_r_i___t_a_g_s.md#define-tag-fb-pp3-pmsg-table)

* 

Global [TAG_FD_AMEX_DRL_RISK](group___v_e_r_i___t_a_g_s.md#define-tag-fd-amex-drl-risk)

* 

Global [TAG_FF8013_SIGNAL_MSG](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8013-signal-msg)

* use [TAG_FF8F13_SIGNAL_MSG](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f13-signal-msg) instead  

Global [TAG_FF8014_SIGNAL_OUT](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8014-signal-out)

* use [TAG_FF8F14_SIGNAL_OUT](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff8f14-signal-out) instead  

Global [TRX_CTLS_ADDITIONAL_TAGS](group___d_e_f___d_f61.md#define-trx-ctls-additional-tags)

* Use [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) instead.  

Global [vBTLVWipeAndClear](btlv_8h.md#function-vbtlvwipeandclear)  (struct [BTLVNode](struct_b_t_l_v_node.md) *pxNode) __attribute((deprecated))

* [vBTLVWipeAndClear()](btlv_8h.md#function-vbtlvwipeandclear) does not consider BTLV data, which was overwritten by [pxBTLVWriteTag()](btlv_8h.md#function-pxbtlvwritetag), therefore, it is recommended to use [vBTLVSetWipeCallback()](btlv_8h.md#function-vbtlvsetwipecallback) instead.  

Global [vBTLVWipeAndRemoveNode](btlv_8h.md#function-vbtlvwipeandremovenode)  (struct [BTLVNode](struct_b_t_l_v_node.md) *pxNode) __attribute((deprecated))

* [vBTLVWipeAndRemoveNode()](btlv_8h.md#function-vbtlvwipeandremovenode) does not consider BTLV data, which was overwritten by [pxBTLVWriteTag()](btlv_8h.md#function-pxbtlvwritetag), therefore, it is recommended to use [vBTLVSetWipeCallback()](btlv_8h.md#function-vbtlvsetwipecallback) instead.  

Global [vfisdi::EMV_CB_RANDOM](namespacevfisdi.md#enumvalue-emv-cb-random)

* not supported any more  

Global [vfisdi::EMV_CT_TXNOP_RND_CALLBACK](namespacevfisdi.md#enumvalue-emv-ct-txnop-rnd-callback)

* not supported any more  

Global [vfisdi::EMV_CTLS_RESET_PICC_OPEN_ONLY](namespacevfisdi.md#enumvalue-emv-ctls-reset-picc-open-only)

* (Vel: y VFI: n) [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset) ucOptions: Only initialise CTLS reader, do not detect cards.  

Global [vfisdi::EMV_CTLS_SPURIOUS_DETECT](namespacevfisdi.md#enumvalue-emv-ctls-spurious-detect)

* switch off the workaround for spurious card detections on ADK level (workaround for L1 issues, code provided by platform team), siwthcing off may provide better detection of 2 cards in field, which is resolved with the spurious card detection workaround.  

Global [vfisdi::EMV_OPT_L1_DUMP](namespacevfisdi.md#enumvalue-emv-opt-l1-dump)

* not supported anymore as non-kernel tags are collected by default  

Global [vfisdi::EMV_OPT_NEW_CFG_INTF](namespacevfisdi.md#enumvalue-emv-opt-new-cfg-intf)

* new application configuration interface is the only processing and this flag is ignored 

Global [XML_TAG_AMEX_ENH_TERMINAL_CAPS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-amex-enh-terminal-caps)

* 

Global [XML_TAG_AMEX_TERMINAL_CAPS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-amex-terminal-caps)

* 

Global [XML_TAG_APPLIDATA](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata)

* 

Global [XML_TAG_APPLIDATA_ADD_VER_NUM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-add-ver-num)

* 

Global [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-additional-tags-crd)

* 

Global [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-additional-tags-trm)

* 

Global [XML_TAG_APPLIDATA_AID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-aid)

* 

Global [XML_TAG_APPLIDATA_AID_PRIO](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-aid-prio)

* 

Global [XML_TAG_APPLIDATA_AMEX_DRL_CVM_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-amex-drl-cvm-limit)

* 

Global [XML_TAG_APPLIDATA_AMEX_DRL_FLOORLIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-amex-drl-floorlimit)

* 

Global [XML_TAG_APPLIDATA_AMEX_DRL_INDEX](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-amex-drl-index)

* 

Global [XML_TAG_APPLIDATA_AMEX_DRL_PARAMS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-amex-drl-params)

* 

Global [XML_TAG_APPLIDATA_AMEX_DRL_SWITCH](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-amex-drl-switch)

* 

Global [XML_TAG_APPLIDATA_AMEX_DRL_TXN_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-amex-drl-txn-limit)

* 

Global [XML_TAG_APPLIDATA_APP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app)

* 

Global [XML_TAG_APPLIDATA_APP_FLOW_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-flow-cap)

* 

Global [XML_TAG_APPLIDATA_APP_NAME](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-name)

* 

Global [XML_TAG_APPLIDATA_APP_TERM_ADD_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-term-add-cap)

* 

Global [XML_TAG_APPLIDATA_APP_TERM_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-term-cap)

* 

Global [XML_TAG_APPLIDATA_APP_TERM_TYP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-app-term-typ)

* 

Global [XML_TAG_APPLIDATA_ASI](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-asi)

* 

Global [XML_TAG_APPLIDATA_BR_KEY](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-br-key)

* 

Global [XML_TAG_APPLIDATA_CEILING_LIMIT_MOBILE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-ceiling-limit-mobile)

* 

Global [XML_TAG_APPLIDATA_CHIP_CVM_BELOW](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chip-cvm-below)

* 

Global [XML_TAG_APPLIDATA_CHKSUM_ASCII_ENTRYPNT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chksum-ascii-entrypnt)

* 

Global [XML_TAG_APPLIDATA_CHKSUM_ASCII_KERNEL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chksum-ascii-kernel)

* 

Global [XML_TAG_APPLIDATA_CHKSUM_PARAMS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-chksum-params)

* 

Global [XML_TAG_APPLIDATA_CL_CEILING_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-cl-ceiling-limit)

* 

Global [XML_TAG_APPLIDATA_CL_CVM_SOFT_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-cl-cvm-soft-limit)

* 

Global [XML_TAG_APPLIDATA_CL_MODES](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-cl-modes)

* 

Global [XML_TAG_APPLIDATA_COUNTRY_CODE_TERM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-country-code-term)

* 

Global [XML_TAG_APPLIDATA_DEFAULT_TDOL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-default-tdol)

* 

Global [XML_TAG_APPLIDATA_FLOOR_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-floor-limit)

* 

Global [XML_TAG_APPLIDATA_MASTER_AID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-master-aid)

* 

Global [XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-max-target-percentage)

* 

Global [XML_TAG_APPLIDATA_MERCH_IDENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-merch-ident)

* 

Global [XML_TAG_APPLIDATA_MERCH_NAME_LOCATION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-merch-name-location)

* 

Global [XML_TAG_APPLIDATA_MSR_CVM_ABOVE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-msr-cvm-above)

* 

Global [XML_TAG_APPLIDATA_MSR_CVM_BELOW](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-msr-cvm-below)

* 

Global [XML_TAG_APPLIDATA_MTI_MERCHANT_TYPE_IND](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-mti-merchant-type-ind)

* 

Global [XML_TAG_APPLIDATA_PP3_PMSG_TABLE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-pp3-pmsg-table)

* 

Global [XML_TAG_APPLIDATA_RETAP_FIELD_OFF](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-retap-field-off)

* 

Global [XML_TAG_APPLIDATA_SPECIAL_TRX](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-special-trx)

* 

Global [XML_TAG_APPLIDATA_TAC_DEFAULT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-tac-default)

* 

Global [XML_TAG_APPLIDATA_TAC_DENIAL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-tac-denial)

* 

Global [XML_TAG_APPLIDATA_TAC_ONLINE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-tac-online)

* 

Global [XML_TAG_APPLIDATA_TARGET_PERCENTAGE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-target-percentage)

* 

Global [XML_TAG_APPLIDATA_TERM_IDENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-term-ident)

* 

Global [XML_TAG_APPLIDATA_TERM_RECEIPT_REQUIRED_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-term-receipt-required-limit)

* 

Global [XML_TAG_APPLIDATA_THRESHOLD_BCD](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-threshold-bcd)

* 

Global [XML_TAG_APPLIDATA_TORN_TXN_LIFETIME](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-torn-txn-lifetime)

* 

Global [XML_TAG_APPLIDATA_TORN_TXN_NO](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-torn-txn-no)

* 

Global [XML_TAG_APPLIDATA_TOS_TERM_OPTION_STATUS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-tos-term-option-status)

* 

Global [XML_TAG_APPLIDATA_TRY_AGAIN_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-try-again-limit)

* 

Global [XML_TAG_APPLIDATA_TTC](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-ttc)

* 

Global [XML_TAG_APPLIDATA_TTI_TERM_TRANS_INFO](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-tti-term-trans-info)

* 

Global [XML_TAG_APPLIDATA_TTI_TERM_TRANS_TYPE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-tti-term-trans-type)

* 

Global [XML_TAG_APPLIDATA_VISA_DRL_APP_PRG_ID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-visa-drl-app-prg-id)

* 

Global [XML_TAG_APPLIDATA_VISA_DRL_CVM_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-visa-drl-cvm-limit)

* 

Global [XML_TAG_APPLIDATA_VISA_DRL_FLOORLIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-visa-drl-floorlimit)

* 

Global [XML_TAG_APPLIDATA_VISA_DRL_INDEX](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-visa-drl-index)

* 

Global [XML_TAG_APPLIDATA_VISA_DRL_PARAMS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-visa-drl-params)

* 

Global [XML_TAG_APPLIDATA_VISA_DRL_PRG_ID_LEN](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-visa-drl-prg-id-len)

* 

Global [XML_TAG_APPLIDATA_VISA_DRL_SWITCH](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-visa-drl-switch)

* 

Global [XML_TAG_APPLIDATA_VISA_DRL_TXN_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-visa-drl-txn-limit)

* 

Global [XML_TAG_APPLIDATA_VISA_TTQ](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-applidata-visa-ttq)

* 

Global [XML_TAG_CHPAPPLIDATA_VER_NUM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-chpapplidata-ver-num)

* 

Global [XML_TAG_MSRAPPLIDATA_VER_NUM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-msrapplidata-ver-num)

* 

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

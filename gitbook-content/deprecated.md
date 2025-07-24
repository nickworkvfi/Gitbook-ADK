---
title: Deprecated List
---

### ModuleCL_MODES {#module-cl_modes}

Use <a href="group___d_e_f___k_e_r_n_e_l___i_d.md">Contactless Kernel Ids</a> instead.

### GlobalCLTRXOP_RND_CALLBACK {#global-cltrxop_rnd_callback}

not supported anymore

### Globalcom_verifone_seccmd::Sec_Destroy () {#global-com_verifone_seccmdsec_destroy}

### Globalcom_verifone_seccmd::Sec_Init (u_char \*=NULL) {#global-com_verifone_seccmdsec_init-u_char-null}

### GlobalCONTACT_LED_BLINK {#global-contact_led_blink}

: No more supported, for instance, because it relies on SVRMGR functionality that is going to be removed

### GlobalCONTACTLESS_LED_0 {#global-contactless_led_0}

because confusing, use <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#gaee6580bd95df40c758983f6552bffb8a">CONTACTLESS_LED_FIRST</a> instead

### GlobalCONTACTLESS_LED_1 {#global-contactless_led_1}

because confusing, use <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#gaddb4297a505bf9e07937cd4a9c09a2aa">CONTACTLESS_LED_SECOND</a> instead

### GlobalCONTACTLESS_LED_2 {#global-contactless_led_2}

because confusing, use <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#ga0d9c18a1b0aa19948aed89aa1cb26e0a">CONTACTLESS_LED_THIRD</a> instead

### GlobalCONTACTLESS_LED_3 {#global-contactless_led_3}

because confusing, use <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#gad33b5cb37c8b6f4736ea29cccc74a550">CONTACTLESS_LED_FOURTH</a> instead

### GlobalEMV_ADK_MAX_AIDSUPP {#global-emv_adk_max_aidsupp}

old define for default maximum number of supported AIDs, don\'t use anymore, use <a href="group___a_d_k___l_i_m_i_t_s.md#ga451b76d7c9854647febe4f89c53fa57a">EMV_ADK_DEFAULT_AIDSUPP</a> instead

### GlobalEMV_ADK_TIP_MODE_INPUT {#global-emv_adk_tip_mode_input}

Since UI control is outside EMV ADK framework this has been deprecated.

### GlobalEMV_ADK_TIP_MODE_MIXED {#global-emv_adk_tip_mode_mixed}

handled the same way as EMV_ADK_TIP_YES

### GlobalEMV_ADK_TRAN_TYPE_BUCHUNG_A {#global-emv_adk_tran_type_buchung_a}

use <a href="group___t_r_a_n_s___t_y_p_e_s.md#gac3058be0feb5e6f647dfb653cb110e77">EMV_ADK_TRAN_TYPE_BOOKING_A</a>

### GlobalEMV_ADK_TRAN_TYPE_BUCHUNG_B {#global-emv_adk_tran_type_buchung_b}

use <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga14ae8daf8dd6168067160e79dd63aa36">EMV_ADK_TRAN_TYPE_BOOKING_B</a>

### GlobalEMV_ADK_TRAN_TYPE_ERHOEHUNG_A {#global-emv_adk_tran_type_erhoehung_a}

use <a href="group___t_r_a_n_s___t_y_p_e_s.md#gae4dfcb64069c00ea212290887d63d39b">EMV_ADK_TRAN_TYPE_INCREMENT_A</a>

### GlobalEMV_ADK_TRAN_TYPE_ERHOEHUNG_B {#global-emv_adk_tran_type_erhoehung_b}

use <a href="group___t_r_a_n_s___t_y_p_e_s.md#gaef5a04977330d6ec069bf2564719c018">EMV_ADK_TRAN_TYPE_INCREMENT_B</a>

### GlobalEMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD {#global-emv_ct_applidata_structadditional_tags_crd}

. ADK stores additional ICC tags automatically. No need to configure this anymore. Tag + maximum Length: Additional ICC tags for special applications
e.g. domestic cards with additional tags in ReadRecords, fleetcards with additional customer specific tags and others
see <a href="_e_m_v___c_t___interface_8h.md#struct_e_m_v___c_t___d_o_l___s_t_r_u_c_t">EMV_CT_DOL_STRUCT</a>, temporary update possible, validity bit <a href="group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#ga5cd4646f7f4cf0d43df97abec7be72bf">EMV_CT_INPUT_APL_ADD_CRD_TAGS</a>
`Tag`, `Struct`, `XML` Reference:
TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga6dfa73e43cd6f1a0a956d8a20d42efeb">TAG_DF2C_ADD_TAGS_CRD</a>,
Additional_Tags_CRD in <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acd89bdbc00f19a23befec2eed0ff7b00">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD</a>,
XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga4aa7498018941c11031f732a702ed08f">XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD</a>

### GlobalEMV_CT_INIT_OPT_L1_DUMP {#global-emv_ct_init_opt_l1_dump}

not supported anymore as non-kernel tags are collected by default

### GlobalEMV_CT_PAYMENT_STRUCT::Additional_Result_Tags {#global-emv_ct_payment_structadditional_result_tags}

Use <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags()</a> instead.

### GlobalEMV_CT_TRANSRES_STRUCT::Add_TXN_Tags \[EMV_ADK_ADD_TAG_SIZE\] {#global-emv_ct_transres_structadd_txn_tags-emv_adk_add_tag_size}

Use <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags()</a> instead.

### GlobalEMV_CT_TRXOP_RND_CALLBACK {#global-emv_ct_trxop_rnd_callback}

not supported anymore

### GlobalEMV_CTLS_CALLBACK_STACK_SIZE {#global-emv_ctls_callback_stack_size}

avaiable stack-size in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga8099f858729a6abaca5890d8631d547a">EMV_CTLS_CALLBACK_Func</a> (verix-only)

### GlobalEMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE {#global-emv_ctls_flow_vk_success_tone_on_decline}

: If GPO results in AAC: default was changed to sound solely success tone

### GlobalEMV_CTLS_GetAppliDataSchemeSpecific (EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CTLS_APPLI_KERNEL_TYPE \*pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE \*pxAppliData) {#global-emv_ctls_getapplidataschemespecific-emv_adk_readappli_type-ereadapplitype-emv_ctls_appli_kernel_type-pxaid-emv_ctls_applidata_scheme_specific_type-pxapplidata}

<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga40078f8164a34afef771e922a935a5e7">EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF</a>: wrong configuration function

### GlobalEMV_CTLS_INIT_OPT_L1_DUMP {#global-emv_ctls_init_opt_l1_dump}

not supported anymore as non-kernel tags are collected by default

### GlobalEMV_CTLS_INIT_OPT_NEW_CFG_INTF {#global-emv_ctls_init_opt_new_cfg_intf}

new application configuration interface is the only processing and this flag is ignored

### GlobalEMV_CTLS_INIT_OPT_USE_VERTEX {#global-emv_ctls_init_opt_use_vertex}

Ignored because combined CTLS framework not continued anymore

### GlobalEMV_CTLS_INIT_OPT_USE_VFI {#global-emv_ctls_init_opt_use_vfi}

Ignored because combined CTLS framework not continued anymore

### GlobalEMV_CTLS_KERN_SK {#global-emv_ctls_kern_sk}

use <a href="group___d_e_f___k_e_r_n_e_l___i_d.md#ga8016533ec70ab010c3fbb95a3b23fbde">EMV_CTLS_KERN_SB</a> instead

### GlobalEMV_CTLS_LED_ConfigDesign (unsigned short width, unsigned short height, unsigned char \*color_off, unsigned char \*color_on, unsigned short xRegion, unsigned short yRegion, unsigned short wRegion, unsigned short hRegion) \_\_attribute((deprecated)) {#global-emv_ctls_led_configdesign-unsigned-short-width-unsigned-short-height-unsigned-char-color_off-unsigned-char-color_on-unsigned-short-xregion-unsigned-short-yregion-unsigned-short-wregion-unsigned-short-hregion-__attributedeprecated}

The direct framebuffer approach is deprecated - use LED callbacks and LED-API from ADK-GUIPRT instead

### GlobalEMV_CTLS_LED_ConfigDesign_Extended (const EMV_CTLS_LED_CONFIG \*led_config) \_\_attribute((deprecated)) {#global-emv_ctls_led_configdesign_extended-const-emv_ctls_led_config-led_config-__attributedeprecated}

The direct framebuffer approach is deprecated - use LED callbacks and LED-API from ADK-GUIPRT instead

### GlobalEMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags {#global-emv_ctls_payment_structadditional_result_tags}

Use <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> instead.

### GlobalEMV_CTLS_SetAppliDataSchemeSpecific (EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CTLS_APPLI_KERNEL_TYPE \*pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE \*pxAppliData) {#global-emv_ctls_setapplidataschemespecific-emv_adk_handle_record_type-ehandleapplitype-emv_ctls_appli_kernel_type-pxaid-emv_ctls_applidata_scheme_specific_type-pxapplidata}

<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga40078f8164a34afef771e922a935a5e7">EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF</a>: wrong configuration function

### GlobalEMV_CTLS_SKIP_FIELD_ON {#global-emv_ctls_skip_field_on}

Tell VFI Reader to consider RF Field is already turned on by NFC ADK.

### GlobalEMV_CTLS_TransparentCommand (unsigned short usInDataLen, unsigned char \*pucDataIn, unsigned short \*pusOutDataLen, unsigned char \*pucDataOut) {#global-emv_ctls_transparentcommand-unsigned-short-usindatalen-unsigned-char-pucdatain-unsigned-short-pusoutdatalen-unsigned-char-pucdataout}

except for VFI reader on VOS-1

### GlobalEMV_CTLS_TransparentReceive (unsigned short \*pusOutDataLen, unsigned char \*pucDataOut) {#global-emv_ctls_transparentreceive-unsigned-short-pusoutdatalen-unsigned-char-pucdataout}

except for VFI reader on VOS-1

### GlobalEMV_CTLS_TransparentSend (unsigned short usInDataLen, unsigned char \*pucDataIn) {#global-emv_ctls_transparentsend-unsigned-short-usindatalen-unsigned-char-pucdatain}

except for VFI reader on VOS-1

### GlobalEMV_CTLS_TRANSRES_STRUCT::Add_TXN_Tags \[EMV_ADK_ADD_TAG_SIZE\] {#global-emv_ctls_transres_structadd_txn_tags-emv_adk_add_tag_size}

Use <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> instead.

### GlobalEMV_CTLS_TRANSRES_STRUCT::CL_Mode {#global-emv_ctls_transres_structcl_mode}

Maintained only for backwards compatibility. Kernel is given by <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a558a9d3945e1233063c57d26a329ad55">EMV_CTLS_TRANSRES_TYPE::T_DF64_KernelDebugData</a>\[18\] and MSR transactions are indicated by <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a89b6ee4a99c6f75514d803b0098aa2ed">EMV_CTLS_TRANSRES_TYPE::StatusInfo</a> bit <a href="group___s_t_a_t_u_s___i_n_f_o.md#ga5a5eb8b54a6ada0ee197dff969a8e77e">EMV_ADK_SI_CONTACTLESS_MSR</a>
TLV tag <a href="group___v_e_r_i___t_a_g_s.md#gaa66039efd92d9d68efc76d60ed6bfef5">TAG_C2_TRM_CL_MODES</a>, availability bit <a href="group___d_e_f___d_f61.md#ga9a1d5ecdb5ea20b68b2681a9d0926759">TRX_CTLS_CTLS_MODES</a>

### GlobalEXIT_CTLS_SEND_CALLBACK {#global-exit_ctls_send_callback}

use <a href="group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#ga2d511cd481102b916dd4025d6064a8ea">EXIT_CTLS_COMPLETE</a>

### GlobalINPUT_CTLS_SEL_ADD_TAGS {#global-input_ctls_sel_add_tags}

Don\'t use <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ac99d6e6b09a0e3fcbe4d2ec8336a30e2">EMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags</a> anymore. Use <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> instead.

### GlobalINPUT_OFL_ADD_TAGS {#global-input_ofl_add_tags}

Don\'t use <a href="group___a_d_k___t_r_x___e_x_e_c.md#abd31d434ee96e0662b86d4ef82017e33">EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags</a> anymore. Use <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags()</a> instead.

### GlobalINPUT_SEL_ADD_TAGS {#global-input_sel_add_tags}

Don\'t use <a href="group___a_d_k___t_r_x___e_x_e_c.md#abd31d434ee96e0662b86d4ef82017e33">EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags</a> anymore. Use <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags()</a> instead.

### Globallibsdi::SDI_SW12_ERROR {#global-libsdisdi_sw12_error}

any other error

### Globallibsdi::SDI_SW12_NOT_ALLOWED {#global-libsdisdi_sw12_not_allowed}

not allowed for the moment, e.g. card removal

### Globallibsdi::SDI_SW12_PARAMETER_ERROR {#global-libsdisdi_sw12_parameter_error}

parameter error (only in relation with EMV commands)

### Globallibsdi::SDI_SW12_TIMEOUT {#global-libsdisdi_sw12_timeout}

card detection/removal

### GlobalMSR_SAMSUNG_TRACK1 {#global-msr_samsung_track1}

Samsung LoopPay Detection is activated by default.

### GlobalpcBTLVTagStr (unsigned long ulTag) \_\_attribute((deprecated)) {#global-pcbtlvtagstr-unsigned-long-ultag-__attributedeprecated}

This function is not thread safe! It is strongly recommended to use pcBTLVTagStr2 or macro ULTAG2ASC

### ModulePP3_PMT_NO_OF_ENTRIES {#module-pp3_pmt_no_of_entries}

not used anymore

### Globalsdi::bintohex (unsigned char \*dst, const unsigned char \*src, int srclen) {#global-sdibintohex-unsigned-char-dst-const-unsigned-char-src-int-srclen}

Use prefixed version TLVUTIL_bintohexstring instead

### Globalsdi::bintohex (unsigned char \*dst, const unsigned char \*src, int srclen) {#global-sdibintohex-unsigned-char-dst-const-unsigned-char-src-int-srclen-1}

Use prefixed version TLVUTIL_bintohexstring instead

### Globalsdi::hextobin (unsigned char \*dst, const unsigned char \*src, int srclen) {#global-sdihextobin-unsigned-char-dst-const-unsigned-char-src-int-srclen}

Use prefixed version TLVUTIL_hextobin or TLVUTIL_hexstringtobin instead

### Globalsdi::hextobin (unsigned char \*dst, const unsigned char \*src, int srclen) {#global-sdihextobin-unsigned-char-dst-const-unsigned-char-src-int-srclen-1}

Use prefixed version TLVUTIL_hextobin or TLVUTIL_hexstringtobin instead

### GlobalSDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG {#global-sdi_protocol_init_opt_trace_adk_log}

Trace via ADK-LOG is controlled by LOG control panel

component always uses ADK LOG channel with label SDIPROT

### GlobalSDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK {#global-sdi_protocol_init_opt_trace_emv_cbk}

component always uses ADK LOG channel with label SDIPROT

### GlobalSDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG {#global-sdi_protocol_init_opt_trace_syslog}

component always uses ADK LOG channel with label SDIPROT

### GlobalTAG_BF13_CBK_RND {#global-tag_bf13_cbk_rnd}

not supported anymore

not supported anymore

### GlobalTAG_C2_TRM_CL_MODES {#global-tag_c2_trm_cl_modes}

<a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af2a0fc1109b1f50d008679aeb4db9d2f">EMV_CTLS_TRANSRES_TYPE::CL_Mode</a>

### GlobalTAG_C3_INDEX {#global-tag_c3_index}

### GlobalTAG_C4_APP_PRG_ID_LEN {#global-tag_c4_app_prg_id_len}

### GlobalTAG_C5_APP_PRG_ID {#global-tag_c5_app_prg_id}

### GlobalTAG_C6_TXN_LIMIT {#global-tag_c6_txn_limit}

### GlobalTAG_DF10_MSR_CVM_BELOW {#global-tag_df10_msr_cvm_below}

Was used in old config interface

### GlobalTAG_DF13_TERM_PARAM {#global-tag_df13_term_param}

Was used in old config interface

### GlobalTAG_DF14_ADD_TAGS_RES {#global-tag_df14_add_tags_res}

Don\'t use <a href="group___a_d_k___t_r_x___e_x_e_c.md#abd31d434ee96e0662b86d4ef82017e33">EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags</a> anymore. Use <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags()</a> instead.

### GlobalTAG_DF15_OFFL_ONLY_PROCESS {#global-tag_df15_offl_only_process}

Was used in old config interface

### GlobalTAG_DF17_FALLBACK_MIDS {#global-tag_df17_fallback_mids}

Was used in old config interface

### GlobalTAG_DF18_FALLABCK {#global-tag_df18_fallabck}

Was used in old config interface

### GlobalTAG_DF1C_SPECIAL_TRX {#global-tag_df1c_special_trx}

Was used in old config interface

### GlobalTAG_DF1D_PRIO_APPLI {#global-tag_df1d_prio_appli}

Was used in old config interface

### GlobalTAG_DF20_ASI {#global-tag_df20_asi}

Was used in old config interface

### GlobalTAG_DF21_TAC_ABLEHNUNG {#global-tag_df21_tac_ablehnung}

use <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga313084d02966bb6075d6a07b5e227ac3">TAG_DF21_TAC_DENIAL</a> instead

use <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga313084d02966bb6075d6a07b5e227ac3">TAG_DF21_TAC_DENIAL</a> instead

### GlobalTAG_DF24_THRESHHOLD {#global-tag_df24_threshhold}

Was used in old config interface

### GlobalTAG_DF25_MAXPERCENT_ONL {#global-tag_df25_maxpercent_onl}

Was used in old config interface

### GlobalTAG_DF26_PERCENT_ONL {#global-tag_df26_percent_onl}

Was used in old config interface

### GlobalTAG_DF27_DEFAULT_TDOL {#global-tag_df27_default_tdol}

Was used in old config interface

### GlobalTAG_DF28_DEFAULT_DDOL {#global-tag_df28_default_ddol}

Was used in old config interface

### GlobalTAG_DF29_ADD_TAGS {#global-tag_df29_add_tags}

Was used in old config interface

### GlobalTAG_DF2B_APP_FLOW_CAP {#global-tag_df2b_app_flow_cap}

Was used in old config interface

### GlobalTAG_DF2C_ADD_TAGS_CRD {#global-tag_df2c_add_tags_crd}

Was used in old config interface

### GlobalTAG_DF2D_EMV_APPLI {#global-tag_df2d_emv_appli}

Was used in old config interface

### GlobalTAG_DF2E_CVM_NOT_SUPP {#global-tag_df2e_cvm_not_supp}

Was used in old config interface

### GlobalTAG_DF2F_MSR_CVM_ABOVE {#global-tag_df2f_msr_cvm_above}

Was used in old config interface

### GlobalTAG_DF30_RETAP_FIELD_OFF {#global-tag_df30_retap_field_off}

Was used in old config interface

### GlobalTAG_DF44_CHIP_CVM_BELOW {#global-tag_df44_chip_cvm_below}

Was used in old config interface

### GlobalTAG_DF45_CHIP_TXN_LIFETIME {#global-tag_df45_chip_txn_lifetime}

Was used in old config interface

### GlobalTAG_DF46_CHIP_TXN_NO {#global-tag_df46_chip_txn_no}

Was used in old config interface

### GlobalTAG_DF49_CEIL_LIMIT_MOBILE {#global-tag_df49_ceil_limit_mobile}

Was used in old config interface

### GlobalTAG_DF6F_CBK_PIN_ICC_RESP {#global-tag_df6f_cbk_pin_icc_resp}

ICC answer to VERIFY command (2 byte SW1/2), not needed anymore, EMV ADK stores this info internally during <a href="group___f_u_n_c___f_l_o_w.md#ga895cb054c344d011e9e3c6acc4aadafe">EMV_CT_Send_PIN_Offline()</a>

### GlobalTAG_DF77_CBK_LANGUAGE {#global-tag_df77_cbk_language}

EMV ADK does not send selected customer language and it ignores this parameter if put in

### GlobalTAG_DF8010_DE_REQUEST {#global-tag_df8010_de_request}

use <a href="group___t_l_v___c_b_c_k.md#ga39a89f82a43d278d55f4a30ef988428d">TAG_DF8F58_DE_REQUEST</a> instead

### GlobalTAG_DF8011_DE_STATE {#global-tag_df8011_de_state}

use <a href="group___t_l_v___c_b_c_k.md#ga350252d0754af29e65491c61efafd681">TAG_DF8F59_DE_STATE</a> instead

### GlobalTAG_DF8012_DE_MODE {#global-tag_df8012_de_mode}

use <a href="group___t_l_v___c_b_c_k.md#gaa5adbd002c7e040e248be3fb7fe7f5ad">TAG_DF8F5A_DE_MODE</a> instead

### GlobalTAG_DF8020_RUPAY_GPO {#global-tag_df8020_rupay_gpo}

use <a href="group___t_l_v___c_b_c_k.md#gad48383e6581198120c73814045b1a61a">TAG_DF8F50_RUPAY_GPO</a> instead

### GlobalTAG_DF8021_RUPAY_GENAC {#global-tag_df8021_rupay_genac}

use <a href="group___t_l_v___c_b_c_k.md#gad69547ab3e017ea8fbf40aecc8bfec7a">TAG_DF8F51_RUPAY_GENAC</a> instead

### GlobalTAG_DF8030_LED_ADD_INFO {#global-tag_df8030_led_add_info}

use <a href="group___t_l_v___c_b_c_k.md#ga49b42df1c0b4c78b9e954b1c24aa8e3d">TAG_DF8F60_LED_ADD_INFO</a> instead

### GlobalTAG_FA_VISA_DRL_RISK {#global-tag_fa_visa_drl_risk}

### GlobalTAG_FB_PP3_PMSG_TABLE {#global-tag_fb_pp3_pmsg_table}

### GlobalTAG_FD_AMEX_DRL_RISK {#global-tag_fd_amex_drl_risk}

### GlobalTAG_FF8013_SIGNAL_MSG {#global-tag_ff8013_signal_msg}

use <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#gafbd7dbf0777c05e3767966068ce6d1a7">TAG_FF8F13_SIGNAL_MSG</a> instead

### GlobalTAG_FF8014_SIGNAL_OUT {#global-tag_ff8014_signal_out}

use <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#ga338143e80bd209946f38173c58585d8f">TAG_FF8F14_SIGNAL_OUT</a> instead

### GlobalTRX_CTLS_ADDITIONAL_TAGS {#global-trx_ctls_additional_tags}

Use <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> instead.

### GlobalvBTLVWipeAndClear (struct BTLVNode \*pxNode) \_\_attribute((deprecated)) {#global-vbtlvwipeandclear-struct-btlvnode-pxnode-__attributedeprecated}

<a href="btlv_8h.md#ad64bc62b62bf5375b2b4813f76ee8f26">vBTLVWipeAndClear()</a> does not consider BTLV data, which was overwritten by <a href="btlv_8h.md#a9819b6c9e4d8be3c412cf251e564d31d">pxBTLVWriteTag()</a>, therefore, it is recommended to use <a href="btlv_8h.md#aa6cb90004fb1fab00ac3afbc7a9493b3">vBTLVSetWipeCallback()</a> instead.

### GlobalvBTLVWipeAndRemoveNode (struct BTLVNode \*pxNode) \_\_attribute((deprecated)) {#global-vbtlvwipeandremovenode-struct-btlvnode-pxnode-__attributedeprecated}

<a href="btlv_8h.md#acadee218eb35d1eecce639c637496953">vBTLVWipeAndRemoveNode()</a> does not consider BTLV data, which was overwritten by <a href="btlv_8h.md#a9819b6c9e4d8be3c412cf251e564d31d">pxBTLVWriteTag()</a>, therefore, it is recommended to use <a href="btlv_8h.md#aa6cb90004fb1fab00ac3afbc7a9493b3">vBTLVSetWipeCallback()</a> instead.

### Globalvfisdi::EMV_CB_RANDOM {#global-vfisdiemv_cb_random}

not supported any more

### Globalvfisdi::EMV_CT_TXNOP_RND_CALLBACK {#global-vfisdiemv_ct_txnop_rnd_callback}

not supported any more

### Globalvfisdi::EMV_CTLS_RESET_PICC_OPEN_ONLY {#global-vfisdiemv_ctls_reset_picc_open_only}

(Vel: y VFI: n) <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a> ucOptions: Only initialise CTLS reader, do not detect cards.

### Globalvfisdi::EMV_CTLS_SPURIOUS_DETECT {#global-vfisdiemv_ctls_spurious_detect}

switch off the workaround for spurious card detections on ADK level (workaround for L1 issues, code provided by platform team), siwthcing off may provide better detection of 2 cards in field, which is resolved with the spurious card detection workaround.

### Globalvfisdi::EMV_OPT_L1_DUMP {#global-vfisdiemv_opt_l1_dump}

not supported anymore as non-kernel tags are collected by default

### Globalvfisdi::EMV_OPT_NEW_CFG_INTF {#global-vfisdiemv_opt_new_cfg_intf}

new application configuration interface is the only processing and this flag is ignored

### GlobalXML_TAG_AMEX_ENH_TERMINAL_CAPS {#global-xml_tag_amex_enh_terminal_caps}

### GlobalXML_TAG_AMEX_TERMINAL_CAPS {#global-xml_tag_amex_terminal_caps}

### GlobalXML_TAG_APPLIDATA {#global-xml_tag_applidata}

### GlobalXML_TAG_APPLIDATA_ADD_VER_NUM {#global-xml_tag_applidata_add_ver_num}

### GlobalXML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD {#global-xml_tag_applidata_additional_tags_crd}

### GlobalXML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM {#global-xml_tag_applidata_additional_tags_trm}

### GlobalXML_TAG_APPLIDATA_AID {#global-xml_tag_applidata_aid}

### GlobalXML_TAG_APPLIDATA_AID_PRIO {#global-xml_tag_applidata_aid_prio}

### GlobalXML_TAG_APPLIDATA_AMEX_DRL_CVM_LIMIT {#global-xml_tag_applidata_amex_drl_cvm_limit}

### GlobalXML_TAG_APPLIDATA_AMEX_DRL_FLOORLIMIT {#global-xml_tag_applidata_amex_drl_floorlimit}

### GlobalXML_TAG_APPLIDATA_AMEX_DRL_INDEX {#global-xml_tag_applidata_amex_drl_index}

### GlobalXML_TAG_APPLIDATA_AMEX_DRL_PARAMS {#global-xml_tag_applidata_amex_drl_params}

### GlobalXML_TAG_APPLIDATA_AMEX_DRL_SWITCH {#global-xml_tag_applidata_amex_drl_switch}

### GlobalXML_TAG_APPLIDATA_AMEX_DRL_TXN_LIMIT {#global-xml_tag_applidata_amex_drl_txn_limit}

### GlobalXML_TAG_APPLIDATA_APP {#global-xml_tag_applidata_app}

### GlobalXML_TAG_APPLIDATA_APP_FLOW_CAP {#global-xml_tag_applidata_app_flow_cap}

### GlobalXML_TAG_APPLIDATA_APP_NAME {#global-xml_tag_applidata_app_name}

### GlobalXML_TAG_APPLIDATA_APP_TERM_ADD_CAP {#global-xml_tag_applidata_app_term_add_cap}

### GlobalXML_TAG_APPLIDATA_APP_TERM_CAP {#global-xml_tag_applidata_app_term_cap}

### GlobalXML_TAG_APPLIDATA_APP_TERM_TYP {#global-xml_tag_applidata_app_term_typ}

### GlobalXML_TAG_APPLIDATA_ASI {#global-xml_tag_applidata_asi}

### GlobalXML_TAG_APPLIDATA_BR_KEY {#global-xml_tag_applidata_br_key}

### GlobalXML_TAG_APPLIDATA_CEILING_LIMIT_MOBILE {#global-xml_tag_applidata_ceiling_limit_mobile}

### GlobalXML_TAG_APPLIDATA_CHIP_CVM_BELOW {#global-xml_tag_applidata_chip_cvm_below}

### GlobalXML_TAG_APPLIDATA_CHKSUM_ASCII_ENTRYPNT {#global-xml_tag_applidata_chksum_ascii_entrypnt}

### GlobalXML_TAG_APPLIDATA_CHKSUM_ASCII_KERNEL {#global-xml_tag_applidata_chksum_ascii_kernel}

### GlobalXML_TAG_APPLIDATA_CHKSUM_PARAMS {#global-xml_tag_applidata_chksum_params}

### GlobalXML_TAG_APPLIDATA_CL_CEILING_LIMIT {#global-xml_tag_applidata_cl_ceiling_limit}

### GlobalXML_TAG_APPLIDATA_CL_CVM_SOFT_LIMIT {#global-xml_tag_applidata_cl_cvm_soft_limit}

### GlobalXML_TAG_APPLIDATA_CL_MODES {#global-xml_tag_applidata_cl_modes}

### GlobalXML_TAG_APPLIDATA_COUNTRY_CODE_TERM {#global-xml_tag_applidata_country_code_term}

### GlobalXML_TAG_APPLIDATA_DEFAULT_TDOL {#global-xml_tag_applidata_default_tdol}

### GlobalXML_TAG_APPLIDATA_FLOOR_LIMIT {#global-xml_tag_applidata_floor_limit}

### GlobalXML_TAG_APPLIDATA_MASTER_AID {#global-xml_tag_applidata_master_aid}

### GlobalXML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE {#global-xml_tag_applidata_max_target_percentage}

### GlobalXML_TAG_APPLIDATA_MERCH_IDENT {#global-xml_tag_applidata_merch_ident}

### GlobalXML_TAG_APPLIDATA_MERCH_NAME_LOCATION {#global-xml_tag_applidata_merch_name_location}

### GlobalXML_TAG_APPLIDATA_MSR_CVM_ABOVE {#global-xml_tag_applidata_msr_cvm_above}

### GlobalXML_TAG_APPLIDATA_MSR_CVM_BELOW {#global-xml_tag_applidata_msr_cvm_below}

### GlobalXML_TAG_APPLIDATA_MTI_MERCHANT_TYPE_IND {#global-xml_tag_applidata_mti_merchant_type_ind}

### GlobalXML_TAG_APPLIDATA_PP3_PMSG_TABLE {#global-xml_tag_applidata_pp3_pmsg_table}

### GlobalXML_TAG_APPLIDATA_RETAP_FIELD_OFF {#global-xml_tag_applidata_retap_field_off}

### GlobalXML_TAG_APPLIDATA_SPECIAL_TRX {#global-xml_tag_applidata_special_trx}

### GlobalXML_TAG_APPLIDATA_TAC_DEFAULT {#global-xml_tag_applidata_tac_default}

### GlobalXML_TAG_APPLIDATA_TAC_DENIAL {#global-xml_tag_applidata_tac_denial}

### GlobalXML_TAG_APPLIDATA_TAC_ONLINE {#global-xml_tag_applidata_tac_online}

### GlobalXML_TAG_APPLIDATA_TARGET_PERCENTAGE {#global-xml_tag_applidata_target_percentage}

### GlobalXML_TAG_APPLIDATA_TERM_IDENT {#global-xml_tag_applidata_term_ident}

### GlobalXML_TAG_APPLIDATA_TERM_RECEIPT_REQUIRED_LIMIT {#global-xml_tag_applidata_term_receipt_required_limit}

### GlobalXML_TAG_APPLIDATA_THRESHOLD_BCD {#global-xml_tag_applidata_threshold_bcd}

### GlobalXML_TAG_APPLIDATA_TORN_TXN_LIFETIME {#global-xml_tag_applidata_torn_txn_lifetime}

### GlobalXML_TAG_APPLIDATA_TORN_TXN_NO {#global-xml_tag_applidata_torn_txn_no}

### GlobalXML_TAG_APPLIDATA_TOS_TERM_OPTION_STATUS {#global-xml_tag_applidata_tos_term_option_status}

### GlobalXML_TAG_APPLIDATA_TRY_AGAIN_LIMIT {#global-xml_tag_applidata_try_again_limit}

### GlobalXML_TAG_APPLIDATA_TTC {#global-xml_tag_applidata_ttc}

### GlobalXML_TAG_APPLIDATA_TTI_TERM_TRANS_INFO {#global-xml_tag_applidata_tti_term_trans_info}

### GlobalXML_TAG_APPLIDATA_TTI_TERM_TRANS_TYPE {#global-xml_tag_applidata_tti_term_trans_type}

### GlobalXML_TAG_APPLIDATA_VISA_DRL_APP_PRG_ID {#global-xml_tag_applidata_visa_drl_app_prg_id}

### GlobalXML_TAG_APPLIDATA_VISA_DRL_CVM_LIMIT {#global-xml_tag_applidata_visa_drl_cvm_limit}

### GlobalXML_TAG_APPLIDATA_VISA_DRL_FLOORLIMIT {#global-xml_tag_applidata_visa_drl_floorlimit}

### GlobalXML_TAG_APPLIDATA_VISA_DRL_INDEX {#global-xml_tag_applidata_visa_drl_index}

### GlobalXML_TAG_APPLIDATA_VISA_DRL_PARAMS {#global-xml_tag_applidata_visa_drl_params}

### GlobalXML_TAG_APPLIDATA_VISA_DRL_PRG_ID_LEN {#global-xml_tag_applidata_visa_drl_prg_id_len}

### GlobalXML_TAG_APPLIDATA_VISA_DRL_SWITCH {#global-xml_tag_applidata_visa_drl_switch}

### GlobalXML_TAG_APPLIDATA_VISA_DRL_TXN_LIMIT {#global-xml_tag_applidata_visa_drl_txn_limit}

### GlobalXML_TAG_APPLIDATA_VISA_TTQ {#global-xml_tag_applidata_visa_ttq}

### GlobalXML_TAG_CHPAPPLIDATA_VER_NUM {#global-xml_tag_chpapplidata_ver_num}

### GlobalXML_TAG_MSRAPPLIDATA_VER_NUM {#global-xml_tag_msrapplidata_ver_num}

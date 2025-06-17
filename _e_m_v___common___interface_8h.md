---
title: emv/EMV_Common/export/emv/EMV_Common_Interface.h

---

# emv/EMV_Common/export/emv/EMV_Common_Interface.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_ADK_TXT_TYPE](struct_e_m_v___a_d_k___t_x_t___t_y_p_e.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode)** { EMV_CLIENT_MODE_LIBRARY, EMV_CLIENT_MODE_SERVER, EMV_CLIENT_MODE_GATEWAY, EMV_CLIENT_MODE_SDI}<br>definitions for [EMV_CT_SetClientMode()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-setclientmode) and [EMV_CTLS_SetClientMode()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setclientmode) |
| typedef unsigned char | **[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info)** <br>type of return code  |
| typedef unsigned char | **[EMV_ADK_VIRTUALTERMMAP_TYPE](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md#typedef-emv-adk-virtualtermmap-type)** <br>typedef for "virtual terminal map type" ([EMV_CT_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal))  |
| typedef unsigned char | **[EMV_ADK_READAPPLI_TYPE](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#typedef-emv-adk-readappli-type)** <br>typedef for "read appli type" ([EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata))  |
| typedef unsigned char | **[EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type)** <br>Type for handle application data setting (SetAppliData())  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_MAX_LANG](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-lang)** <br>maximum number of languages to be configured  |
|  | **[EMV_ADK_DEFAULT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-default-aidsupp)** <br>default maximum number of supported AIDs  |
|  | **[EMV_ADK_MAX_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-aidsupp)**  |
|  | **[EMV_ADK_LIMIT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-limit-aidsupp)** <br>maximum number of supported AIDs for extended AID support  |
|  | **[EMV_ADK_MAX_LG_DDOL](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-lg-ddol)** <br>max. length of DDOL ([EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol))  |
|  | **[EMV_ADK_MAX_LG_TDOL](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-lg-tdol)** <br>max. length of TDOL ([EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol))  |
|  | **[EMV_ADK_MAX_PRIO_APP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-prio-app)** <br>max. number of priority applications (see [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio))  |
|  | **[EMV_ADK_MAX_DOM_CHP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-dom-chp)** <br>max. number of domestic chip applications (see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip))  |
|  | **[EMV_ADK_MAX_FB_MSR](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-fb-msr)** <br>max. number of assigned magstripe fallback applications per transaction (see [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms)) . Candidates are every credit card, Maestro and maybe local applications.  |
|  | **[EMV_ADK_MAX_CHP_TO_MSR](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-chp-to-msr)** <br>max. number of assigned magstripe fallback applications per chip application (see [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids))  |
|  | **[EMV_ADK_IAD_MAX_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-iad-max-len)** <br>max. length of issuer authentic. data (EMVCo tag 91)    because [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata) includes "91xx" it has a maximum length of EMV_ADK_IAD_MAX_LEN + 2  |
|  | **[EMV_ADK_SCRIPT_RESULT_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-script-result-len)** <br>Max. length of issuer script result data (output of [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline), see also [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults)) (not used for contactless)  |
|  | **[EMV_ADK_SCRIPT_RESULT_MAX](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-script-result-max)** <br>L2 kernel: Max. number of issuer script results (output of [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline), see also [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults))    Used for [EMV_ADK_SCRIPT_RESULT_MAX](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-script-result-max) (not used for contactless)  |
|  | **[EMV_ADK_CHECKSUM_ASCII_SIZE](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-checksum-ascii-size)** <br>EMV L2 kernel: Size of EMVCo checksum in ASCII representation (incl. zero termination)    Used for [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco).  |
|  | **[EMV_ADK_VERSION_ASCII_SIZE](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-version-ascii-size)** <br>Size of EMVCo Kernel version, Framework version and L1 Driver version information in ASCII representation (see [EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion), EMV_CT_TERMDATA_STRUCT::FrameworkVersiona and [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion))  |
|  | **[EMV_ADK_CHECKSUM_SIZE](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-checksum-size)** <br>L2 kernel: Size of EMVCo checksum in bytes    Used internally.  |
|  | **[EMV_ADK_CHECKSUM_SIZE_NEW](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-checksum-size-new)** <br>L2 kernel: Size of new EMVCo checksum in bytes    Used internally.  |
|  | **[EMV_ADK_BCD_AMOUNT_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-bcd-amount-len)**  |
|  | **[EMV_ADK_BIN_AMOUNT_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-bin-amount-len)**  |
|  | **[EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-bcd-country-currency-code-len)**  |
|  | **[EMV_ADK_BCD_DATE_OR_TIME_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-bcd-date-or-time-len)**  |
|  | **[EMV_ADK_MAX_CVM](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm)** <br>Number of CVM given in parameter `pucCvmList` of [EMV_CT_CALLBACK_FnT()](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks), [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)). Also used in [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list). Length in bytes: [EMV_ADK_MAX_CVM_LIST_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm-list-len) (not used for contactless)  |
|  | **[EMV_ADK_MAX_CVM_LIST_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm-list-len)** <br>Length in bytes of parameter `pucCvmList` of [EMV_CT_CALLBACK_FnT()](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps) and [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)). Also used in [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list). Number of included CVMs: [EMV_ADK_MAX_CVM](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm) (not used for contactless)  |
|  | **[EMV_ADK_MAX_PAN_LANGUAGES](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-pan-languages)** <br>Maximum number of languages to give back in `pucReducedLanguageList` of [EMV_CT_CALLBACK_FnT()](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps)) (Not used for contactless)  |
|  | **[EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok)** <br>Function successful, no error.  |
|  | **[EMV_ADK_APP_REQ_START](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-start)** <br>CT Reentrance mode: Application requested return start reserved codes.  |
|  | **[EMV_ADK_APP_REQ_CANDIDATE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-candidate)** <br>CT Reentrance mode: Application requested return application selection.  |
|  | **[EMV_ADK_APP_REQ_READREC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-readrec)** <br>CT Reentrance mode: Application requested return read records.  |
|  | **[EMV_ADK_APP_REQ_DATAAUTH](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-dataauth)** <br>CT Reentrance mode: Application requested return data authentication.  |
|  | **[EMV_ADK_APP_REQ_ONL_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-onl-pin)** <br>CT Reentrance mode: Application requested return for online PIN entry.  |
|  | **[EMV_ADK_APP_REQ_OFL_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-ofl-pin)** <br>CT Reentrance mode: Application requested return for offline PIN entry.  |
|  | **[EMV_ADK_APP_REQ_PLAIN_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-plain-pin)** <br>CT Reentrance mode: Application requested return for plaintext PIN entry.  |
|  | **[EMV_ADK_APP_REQ_CVM_END](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-cvm-end)** <br>CT Reentrance mode: Application requested return cardholder verification.  |
|  | **[EMV_ADK_APP_REQ_RISK_MAN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-risk-man)** <br>CT Reentrance mode: Application requested return riskmanagement.  |
|  | **[EMV_ADK_APP_REQ_CUST_CVM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-cust-cvm)** <br>CT Reentrance mode: Application requested return for customCVM method.  |
|  | **[EMV_ADK_APP_REQ_APPS_PREPROC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-apps-preproc)** <br>CT Reentrance mode: Application requested return for candidate list manipulation.  |
|  | **[EMV_ADK_APP_REQ_AFTER_GPO](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-after-gpo)** <br>CT Reentrance mode: Application requested return for return after GPO.  |
|  | **[EMV_ADK_APP_REQ_BUILD_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-build-list)** <br>CT Reentrance mode: Application requested return before terminal candidate list build.  |
|  | **[EMV_ADK_APP_REQ_END](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-end)** <br>CT Reentrance mode: Application requested return end of reserved codes.  |
|  | **[EMV_ADK_EMPTY_CONFIG](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-empty-config)** <br>Empty configuration.  |
|  | **[EMV_ADK_TERMINATE_CDCVM_RETRY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-terminate-cdcvm-retry)** <br>DPAS CDCVM has not been performed. Terminate the transaction, prompt the Cardholder to remove the card, perform CDCVM, and try again.  |
|  | **[EMV_ADK_TIMEOUT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-timeout)** <br>Timeout.  |
|  | **[EMV_ADK_MAX_CFG_NUMBER_EXCEEDED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-max-cfg-number-exceeded)** <br>CTLS: Number of keys uploaded to VFI Reader exceeded (appears when number of keys more than 99, all next keys are ignored)  |
|  | **[EMV_ADK_VFI_FAIL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-vfi-fail)**  |
|  | **[EMV_ADK_CTLS_OFFLINE_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-offline-pin)** <br>Transaction to be continued after PIN input for girocard (German debit card) Offline PIN CVM.  |
|  | **[EMV_ADK_NOT_ACCEPTED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-accepted)** <br>Transaction / Payment type not accepted.  |
|  | **[EMV_ADK_CANCELLED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-cancelled)** <br>Contactless only    Transaction was cancelled by [EMV_CTLS_Break()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-break) |
|  | **[EMV_ADK_CARD_LOG_LOG_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-card-log-log-ok)** <br>Return code for successful read of cards transaction log (currently qPBOC only)  |
|  | **[EMV_ADK_CTLS_LOW_BATTERY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-low-battery)** <br>Return code for EMV_CTLS_SetupTransaction indicating mobile device's battery too low for contactless transaction.  |
|  | **[EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed-wrong-cfg-intf)** <br>CTLS: The function is not allowed when using this config interface.  |
|  | **[EMV_ADK_VIRTTERMMAP_WRONG_INIT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-virttermmap-wrong-init)** <br>Virtual terminal map is configured, but transaction is started with virtual terminal != 0.  |
|  | **[EMV_ADK_TOO_MANY_TAPS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-too-many-taps)** <br>CTLS: card holder exceeded the number of taps allowed for one transaction (Interac to show "Cannot Process transaction - too many taps")  |
|  | **[EMV_ADK_CAN_NOT_PROCESS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-can-not-process)** <br>(will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported)  |
|  | **[EMV_ADK_USE_ANOTHER_CTLS_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-use-another-ctls-card)** <br>CTLS: advice the customer to use another CTLS card (will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported)  |
|  | **[EMV_ADK_USE_OTHER_TERMINAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-use-other-terminal)** <br>CTLS: advice the merchant to use another terminal to process the transaction (Interac spec requirement)  |
|  | **[EMV_ADK_SCRIPT_PROCESSING_COMPLETE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-script-processing-complete)** <br>CTLS: explicit script processing completed (CTLS, e.g. Discover DPAS)  |
|  | **[EMV_ADK_FALLBACK_CHIP_ONLY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback-chip-only)** <br>CTLS: Fallback to chip (CTLS), no msr allowed.  |
|  | **[EMV_ADK_READER_CMD_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-reader-cmd-not-allowed)**  |
|  | **[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed)** <br>Parallel function call not allowed.  |
|  | **[EMV_ADK_CTLS_NOT_AVAILABLE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-not-available)** <br>CTLS not present on hardware per OS information.  |
|  | **[EMV_ADK_USR_BCKSPC_KEY_PRESSED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-usr-bckspc-key-pressed)** <br>Application requested return for E_USR_BACKSPACE_KEY_PRESSED, not used anymore.  |
|  | **[EMV_ADK_CEILING_LIMIT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ceiling-limit)** <br>CTLS: amount is above the ceiling limit for CTLS (either terminal ceiling limit or highest scheme ceiling limit)  |
|  | **[EMV_ADK_CTLS_RETAP_SAME](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-retap-same)** <br>CTLS: start over with re-tapping the same card (deactivation/activation/start txn)  |
|  | **[EMV_ADK_CTLS_DOMESTIC_APP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-domestic-app)** <br>CTLS: Domestic Application Kernel selected.  |
|  | **[EMV_ADK_NO_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-card)** <br>CTLS: No card processing so far.  |
|  | **[EMV_ADK_NOAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-noapp)** <br>CT: Return code if application not found by [EMV_CT_CheckSupportedAID()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-checksupportedaid).    CTLS: Empty terminal candidate list (e.g. all application's ceiling limits exceeded) at [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction).  |
|  | **[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec)** <br>CT & CTLS: not executable.  |
|  | **[EMV_ADK_ARQC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-arqc)** <br>CT & CTLS: Transaction must be performed online.  |
|  | **[EMV_ADK_TC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tc)** <br>CT & CTLS: Transaction performed (offline / online)  |
|  | **[EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac)** <br>CT & CTLS: Transaction declined.  |
|  | **[EMV_ADK_AAR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aar)** <br>CT: Transaction cancellation (former "card referral"), not used anymore.  |
|  | **[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param)** <br>CT & CTLS: Parameter error (wrong parameter was passed to the function)  |
|  | **[EMV_ADK_CARDERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-carderr)** <br>CT & CTLS: Proprietary card error (actually converted to [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback))  |
|  | **[EMV_ADK_BADAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-badapp)** <br>CT: Repeat EMV_Select function call-up because selected application on the proprietary card is erroneous. The currently selected application must be transferred (not NO_APPLI) -> this leads to new application selection but the candidate list is not reconstructed.  |
|  | **[EMV_ADK_CVM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-cvm)** <br>CT: User abort during PIN input (cancel button, timeout, card removed)  |
|  | **[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort)** <br>On transaction function it means that current transaction must be aborted.    On configuration function it represents "failed".  |
|  | **[EMV_ADK_CARD_BLOCKED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-card-blocked)** <br>CT & CTLS: Blocked card, regional dependent if fallback to magstripe should be done.  |
|  | **[EMV_ADK_CARDERR_FORMAT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-carderr-format)** <br>Card error e.g. erroneous TLV coding, incorrect data -> no transaction cancellation.  |
|  | **[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal)** <br>CT & CTLS: e.g. erroneous communication to PINPad, internal error, not (completely) initialized (function not allowed due to [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) with `[EMV_CT_INIT_OPT_BASE_INIT()](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-base-init)`)  |
|  | **[EMV_ADK_ONLINE_PIN_RETRY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-online-pin-retry)** <br>CT: Online PIN reentered (PIN check).  [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)will return this value in the following scenario: Online PIN was entered. Host returned "PIN wrong".    Calling application must contact host again. And afterwards call [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)once again.  |
|  | **[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error)** <br>Writing config files failed. ANSI C functions fopen(), fwrite(), or fclose() gave back error. Make sure that file access rights are setup correctly.  |
|  | **[EMV_ADK_APP_BLOCKED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-blocked)** <br>Application blocked: AID evaluation at fallback, no global fallback because it is not allowed for this special blocked application.  |
|  | **[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error)** <br>Error while reading EMV configuration.  |
|  | **[EMV_ADK_ERR_HSM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-err-hsm)** <br>E.g. erroneous communication to PINPad, internal error, not used anymore.  |
|  | **[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err)** <br>CT & CTLS: Error in TLV data object = internal error.  |
|  | **[EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback)** <br>CT & CTLS: Fallback to chip/msr (for CTLS) respectively magstripe (for CT) must be done.  |
|  | **[EMV_ADK_ONL_PIN_REPEAT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-onl-pin-repeat)** <br>CT: wrong Online-PIN, repeat transaction (reduced) beginning with [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction) |
|  | **[EMV_ADK_MAND_ELEM_MISSING](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-mand-elem-missing)** <br>CT: mandatory (TLV) element missing (EMV-configuration), not used anymore.  |
|  | **[EMV_ADK_INVALID_TERM_CAP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-invalid-term-cap)** <br>CT & CTLS: invalid terminal capabilities (EMV-configuration), not used anymore.  |
|  | **[EMV_ADK_REFERRAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-referral)** <br>CT: a referral of the application decides if the TRX is approved or not.  |
|  | **[EMV_ADK_2_CTLS_CARDS](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-2-ctls-cards)** <br>CTLS: 2 CTLS cards in the field detected. If this is reported after a call to ContinueOffline 2 cards have been detected in the field. The transaction is terminated in this case and must be restarted with a new call of SetupTransaction. This is mandatory for the VFI-Reader ADK and optional (but works as well) for teh Velocity/VERTX based ADK.  |
|  | **[EMV_ADK_TXN_CTLS_L1_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-l1-err)** <br>CTLS: level 1 problem, retap necessary.  |
|  | **[EMV_ADK_TXN_CTLS_MOBILE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-mobile)** <br>CTLS: mobile device, retap necessary.  |
|  | **[EMV_ADK_TXN_CTLS_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-empty-list)** <br>CTLS: empty candidate list. The application shall display "please use other interface" and (depending on regional market requirements) additionally "or tap another card".  |
|  | **[EMV_ADK_TXN_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-empty-list)** <br>CT & CTLS: Empty candidate List = no common application between card and terminal. For CT usually [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback) is returned in any case, card error and empty list. If the caller needs to distinguish these cases, she has to enable this return code via [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions) bit EMV_CT_SELOP_DETECT_EMPTY_LIST.  |
|  | **[EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-emv-use-other-card)** <br>CTLS: insert, swipe or try another card.  |
|  | **[EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-domestic-only-not-readable)** <br>CTLS: domestic not readable (no AID and EMV not configured)  |
|  | **[EMV_ADK_CONTINUE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-continue)** <br>CT & CTLS: Transaction can be continued (e.g. CTLS Commit)  |
|  | **[EMV_ADK_VIRTUALTERMMAP_APPEND](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md#define-emv-adk-virtualtermmap-append)** <br>append one entry to virtual terminal map.  |
|  | **[EMV_ADK_VIRTUALTERMMAP_DELETE_ALL](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md#define-emv-adk-virtualtermmap-delete-all)** <br>delete whole virtual terminal map.  |
|  | **[EMV_ADK_READ_AID](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#define-emv-adk-read-aid)** <br>read data of a given AID. Remark: If the same AID is configured with multiple param sets (Velocity CTLS only, see [EMV_ADK_FORCE_NEW_PARAMSET](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-force-new-paramset)) only the first AID is presented here. To read all of the AIDs in this case please use first, next mechanism.  |
|  | **[EMV_ADK_READ_FIRST](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#define-emv-adk-read-first)** <br>read first AID  |
|  | **[EMV_ADK_READ_NEXT](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#define-emv-adk-read-next)** <br>read next AID  |
|  | **[EMV_ADK_READ_MAX_APPLI](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#define-emv-adk-read-max-appli)** <br>future use  |
|  | **[EMV_ADK_SET_ONE_RECORD](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-one-record)** <br>Set record for 1 AID, If the AID exists, the parameters included are updated, not included parameters will be untouched. If the AID does not exist, not included parameters will be set with ADK default values. It is highly recommended to configure all parameters on initial setup. Remark: If the AID is existing and the AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are updated --> if the AIDs need to be reconfigured independently it is necessary to delete this AID and confgure again from scratch, see [EMV_ADK_FORCE_NEW_PARAMSET](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-force-new-paramset).  |
|  | **[EMV_ADK_SET_TWO_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-two-records)** <br>Set same record for 2 AIDS.  |
|  | **[EMV_ADK_SET_THREE_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-three-records)** <br>Set same record for 3 AIDs.  |
|  | **[EMV_ADK_SET_FOUR_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-four-records)** <br>Set same record for 4 AIDs.  |
|  | **[EMV_ADK_SET_FIVE_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-five-records)** <br>Set same record for 5 AIDs.  |
|  | **[EMV_ADK_CLEAR_ONE_RECORD](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-clear-one-record)** <br>Clear data of an AID record by AID. Remark: If the same AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are deleted --> one record in this respect means: one AID with its multiple parameters sets, see [EMV_ADK_FORCE_NEW_PARAMSET](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-force-new-paramset).  |
|  | **[EMV_ADK_CLEAR_ALL_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-clear-all-records)** <br>Clear all data.  |
|  | **[EMV_ADK_FORCE_NEW_PARAMSET](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-force-new-paramset)** <br>This is for the CTLS EntryPoint --> Force a new parameterset for an existing AID but having different kernel ID. This is for Velocity CTLS only since the entry point architecture allows to have different kernels (and therefore parameter sets) used for the same AID. So each AID can be configured mutiple times.  |
|  | **[EMV_ADK_TEMP_UPDATE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-temp-update)**  |
|  | **[EMV_ADK_ADD_TAG_SIZE](_e_m_v___common___interface_8h.md#define-emv-adk-add-tag-size)** <br>Maximum field size for `Additional_Tags`.  |
|  | **[EMV_ADK_DEBUG_DATA_SIZE](_e_m_v___common___interface_8h.md#define-emv-adk-debug-data-size)** <br>size for L2 kernel debug data + RFU + 2 byte framework status  |
|  | **[EMV_ADK_EMV_ADK_MANUAL_REVERSAL_BYTE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-emv-adk-manual-reversal-byte)** <br>byte for configuration of manual reversal  |
|  | **[EMV_ADK_MANUAL_REVERSAL_NIBBLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-manual-reversal-nibble)** <br>nibble for configuration of manual reversal  |
|  | **[EMV_ADK_REFUND_BYTE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-refund-byte)** <br>byte for configuration of refund  |
|  | **[EMV_ADK_REFUND_NIBBLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-refund-nibble)** <br>nibble for configuration of refund  |
|  | **[EMV_ADK_EMV_ADK_RESERVATION_BYTE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-emv-adk-reservation-byte)** <br>byte for configuration of reservation  |
|  | **[EMV_ADK_RESERVATION_NIBBLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-reservation-nibble)** <br>nibble for configuration of reservation  |
|  | **[EMV_ADK_TIP_BYTE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-byte)** <br>byte for configuration of tip (gratuity)  |
|  | **[EMV_ADK_TIP_NIBBLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-nibble)** <br>nibble for configuration of tip (gratuity)  |
|  | **[EMV_ADK_REFERRAL_BYTE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-referral-byte)** <br>byte for configuration of referral    not used for contactless  |
|  | **[EMV_ADK_REFERRAL_NIBBLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-referral-nibble)** <br>nibble for configuration of referral    not used for contactless  |
|  | **[EMV_ADK_VOICEAUT_BYTE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-voiceaut-byte)** <br>byte for configuration of voice authorization    not used for contactless  |
|  | **[EMV_ADK_VOICEAUT_NIBBLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-voiceaut-nibble)** <br>nibble for configuration of voice authorization    not used for contactless  |
|  | **[EMV_ADK_RFU_MODE_BYTE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-rfu-mode-byte)** <br>byte RFU  |
|  | **[EMV_ADK_RFU_MODE_NIBBLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-rfu-mode-nibble)** <br>nibble RFU  |
|  | **[EMV_ADK_FALLBACK_AFTER_CVM_BYTE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-fallback-after-cvm-byte)** <br>byte for configuration of "fallback to magstripe after start of cardholder verification or early PIN entry allowed"    not used for contactless  |
|  | **[EMV_ADK_FALLBACK_AFTER_CVM_NIBBLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-fallback-after-cvm-nibble)** <br>nibble for configuration of "fallback to magstripe after start of cardholder verification or early PIN entry allowed"    not used for contactless  |
|  | **[EMV_ADK_IGNORE_CARD_ERROR_BYTE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-ignore-card-error-byte)** <br>byte for configuration of "ignore card error after issuer authorization"  |
|  | **[EMV_ADK_IGNORE_CARD_ERROR_NIBBLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-ignore-card-error-nibble)** <br>nibble for configuration of "ignore card error after issuer authorization"  |
|  | **[EMV_ADK_MANUAL_REVERSAL_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-manual-reversal-no)** <br>future use  |
|  | **[EMV_ADK_MANUAL_REVERSAL_A](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-manual-reversal-a)** <br>future use  |
|  | **[EMV_ADK_MANUAL_REVERSAL_B](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-manual-reversal-b)** <br>future use  |
|  | **[EMV_ADK_REFUND_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-refund-no)** <br>refund forbidden  |
|  | **[EMV_ADK_REFUND_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-refund-yes)** <br>refund allowed  |
|  | **[EMV_ADK_RESERVATION_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-reservation-no)** <br>reservation forbidden  |
|  | **[EMV_ADK_RESERVATION_A](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-reservation-a)** <br>reservation variant a (without partial reversal) allowed, no amount increment (Reservierung-Erhoehung)    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a) |
|  | **[EMV_ADK_RESERVATION_A_PLUS](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-reservation-a-plus)** <br>reservation variant a (without partial reversal) allowed, amount increment (Reservierung-Erhoehung) allowed    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a) and [EMV_ADK_TRAN_TYPE_INCREMENT_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-a)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a) |
|  | **[EMV_ADK_RESERVATION_B](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-reservation-b)** <br>reservation variant b (with partial reversal) allowed, no amount increment (Reservierung-Erhoehung)    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a) |
|  | **[EMV_ADK_RESERVATION_B_PLUS](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-reservation-b-plus)** <br>reservation variant b (with partial reversal) allowed, amount increment (Reservierung-Erhoehung) allowed    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b) and [EMV_ADK_TRAN_TYPE_INCREMENT_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-b)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a) |
|  | **[EMV_ADK_RESERVATION_B_OFFLINE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-reservation-b-offline)** <br>reservation variant b (with partial reversal) allowed, no amount increment (Reservierung-Erhoehung)    offline allowed (will be without partial reversal)    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a) |
|  | **[EMV_ADK_TIP_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-no)** <br>tip (gratuity) forbidden: Transactions with [EMV_ADK_TRAN_TYPE_TIP](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-tip) are handled like ordinary [EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service) |
|  | **[EMV_ADK_TIP_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-yes)** <br>tip (gratuity) allowed: Transactions with [EMV_ADK_TRAN_TYPE_TIP](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-tip) are forced online and marked with [EMV_ADK_SI_GICC_TIPPABLE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-gicc-tippable) if applicable  |
|  | **[EMV_ADK_TIP_MODE_TIPPABLE](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-mode-tippable)** <br>tip (gratuity) same as [EMV_ADK_TIP_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-yes) |
|  | **[EMV_ADK_TIP_MODE_MIXED](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-mode-mixed)** <br>tip (gratuity) tip mode depends on CVM  |
|  | **[EMV_ADK_TIP_MODE_INPUT](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-mode-input)** <br>tip (gratuity) allowed as payment with tip input  |
|  | **[EMV_ADK_TIP_NON_REFUSED](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-non-refused)** <br>tip (gratuity) allowed if the card holder did not explicitly disliked it, that is there was a tip amount input dialog and she confirmed zero amount.  |
|  | **[EMV_ADK_REFERRAL_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-referral-no)** <br>voice referral forbidden    Will only take effect in case [REFERRAL_AFTER_TRX](adk__emv__contactless__programmers__guide_8dox.md#define-referral-after-trx) is set [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap)   not used for contactless  |
|  | **[EMV_ADK_REFERRAL_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-referral-yes)** <br>voice referral allowed    not used for contactless  |
|  | **[EMV_ADK_VOICE_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-voice-no)** <br>voice authorization forbidden    not used for contactless  |
|  | **[EMV_ADK_VOICE_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-voice-yes)** <br>voice authorization (part of TAC-IAC-default handling) allowed  _Preconditions:_   - terminal is attended    - [REFERRAL_AFTER_TRX](adk__emv__contactless__programmers__guide_8dox.md#define-referral-after-trx) is set ([EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap))    not used for contactless  |
|  | **[EMV_ADK_FALLBACK_AFTER_CVM_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-fallback-after-cvm-no)** <br>No fallback to magstripe after start cardholder verification or early PIN entry.    Take care: [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling) must be set to [FB_GERMAN_POS_SPEC](adk__emv__contactless__programmers__guide_8dox.md#define-fb-german-pos-spec).    not used for contactless.  |
|  | **[EMV_ADK_FALLBACK_AFTER_CVM_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-fallback-after-cvm-yes)** <br>Fallback to magstripe after start cardholder verification or early PIN entry.    Take care: [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling) must be set to [FB_GERMAN_POS_SPEC](adk__emv__contactless__programmers__guide_8dox.md#define-fb-german-pos-spec).    not used for contactless.  |
|  | **[EMV_ADK_IGNORE_CARD_ERROR_NO](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-ignore-card-error-no)** <br>Transaction decline on card error after issuer authorization.  |
|  | **[EMV_ADK_IGNORE_CARD_ERROR_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-ignore-card-error-yes)** <br>Ignore card errors after issuer authorization. Anyhow approve the transaction.  |
|  | **[EMV_ADK_TRX_CONFIG_DEFAULT](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-trx-config-default)** <br>Default setting, for interpretation see [Configuration of application data: special transaction] .  |
|  | **[EMV_ADK_TXT_NO_TXT](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-no-txt)** <br>no text (internal use)  |
|  | **[EMV_ADK_TXT_REFUND_CONF_AMOUNT](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-refund-conf-amount)** <br>Refund    EUR XXXXXX,XX    Please confirm    Needed in case [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund)`AND`[REFUND_CONFIRM_AMOUNT](adk__emv__contactless__programmers__guide_8dox.md#define-refund-confirm-amount).  |
|  | **[EMV_ADK_TXT_AMOUNT](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-amount)** <br>AMOUNT    EUR XXXXXX,XX    PLEASE CONFIRM.  |
|  | **[EMV_ADK_TXT_3AMO_TIP](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-3amo-tip)** <br>second part for 3 amounts for payment with tip input  |
|  | **[EMV_ADK_TXT_3AMO_CASHBACK](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-3amo-cashback)** <br>second part for 3 amounts for payment with cash back  |
|  | **[EMV_ADK_TXT_APPROVED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-approved)** <br>APPROVED.  |
|  | **[EMV_ADK_TXT_AUTH_APPROVED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-auth-approved)** <br>like [EMV_ADK_TXT_APPROVED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-approved), but for reservation  |
|  | **[EMV_ADK_TXT_DECLINED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-declined)** <br>DECLINED.  |
|  | **[EMV_ADK_TXT_AUTH_DECLINED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-auth-declined)** <br>like [EMV_ADK_TXT_DECLINED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-declined), but for reservation  |
|  | **[EMV_ADK_TXT_NOT_ACCEPTED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-not-accepted)** <br>NOT ACCEPTED.  |
|  | **[EMV_ADK_TXT_CARD_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-card-error)** <br>CARD ERROR.  |
|  | **[EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error)** <br>PROCESSING ERROR.  |
|  | **[EMV_ADK_TXT_CARD_READ_OK](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-card-read-ok)** <br>card read ok  |
|  | **[EMV_ADK_TXT_AUTHORIZING](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-authorizing)** <br>authorizing  |
|  | **[EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card)** <br>REMOVE CARD.  |
|  | **[EMV_ADK_TXT_USE_CHIP_READER](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-use-chip-reader)**  |
|  | **[EMV_ADK_TXT_USE_MAG_STRIPE](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-use-mag-stripe)**  |
|  | **[EMV_ADK_TXT_VOICEAUT](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-voiceaut)** <br>Voice authorization in case of communication problem.  |
|  | **[EMV_ADK_TXT_SEE_PHONE](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-see-phone)** <br>CTLS only: "See phone for instructions".  |
|  | **[EMV_ADK_TXT_RETAP_SAME](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-retap-same)** <br>CTLS only: "Retap (same) card", probable reason: torn transaction.  |
|  | **[EMV_ADK_TXT_RETAP_SAME_L1](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-retap-same-l1)** <br>CTLS only: "Retap (same) card", reason: L1 error    Only sent in case [CLTRXOP_L1_ERROR_CALLBACK()](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-l1-error-callback) is activated    Dependency to [INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT()](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-ui-scheme-default) |
|  | **[EMV_ADK_TXT_2_CARDS_IN_FIELD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-2-cards-in-field)** <br>CTLS only: 2 card detected in the field    Only sent in case [CLTRXOP_L1_ERROR_CALLBACK()](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-l1-error-callback) is activated.  |
|  | **[EMV_ADK_TXT_CARD_READ_COMPLETE](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-card-read-complete)** <br>CTLS only: waiting for Card Removal in the ADK , App should display Card Read Complete, Remove Card    Only sent in case CTLS_WAIT_CARD_REMOVAL_END() in application flow capabilties is activated.  |
|  | **[EMV_ADK_LANG_NO_LANG](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-no-lang)** <br>internal use only  |
|  | **[EMV_ADK_LANG_ENGLISH](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-english)** <br>English.  |
|  | **[EMV_ADK_LANG_GERMAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-german)** <br>German.  |
|  | **[EMV_ADK_LANG_FRENCH](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-french)** <br>French.  |
|  | **[EMV_ADK_LANG_SPANISH](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-spanish)** <br>Spanish.  |
|  | **[EMV_ADK_LANG_ITALIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-italian)** <br>Italian.  |
|  | **[EMV_ADK_LANG_CZECH](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-czech)** <br>Czech.  |
|  | **[EMV_ADK_LANG_SLOVAK](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-slovak)** <br>Slovak.  |
|  | **[EMV_ADK_LANG_SWEDISH](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-swedish)** <br>Swedish.  |
|  | **[EMV_ADK_LANG_POLISH](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-polish)** <br>Polish.  |
|  | **[EMV_ADK_LANG_GREEK](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-greek)** <br>Greek.  |
|  | **[EMV_ADK_LANG_TURKISH](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-turkish)** <br>Turkish.  |
|  | **[EMV_ADK_LANG_DANSK](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-dansk)** <br>Dansk.  |
|  | **[EMV_ADK_LANG_DUTCH](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-dutch)** <br>Dutch.  |
|  | **[EMV_ADK_LANG_NORWEGIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-norwegian)** <br>Norwegian.  |
|  | **[EMV_ADK_LANG_PORTUGUESE](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-portuguese)** <br>Portuguese.  |
|  | **[EMV_ADK_LANG_AUSTRIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-austrian)** <br>Austrian.  |
|  | **[EMV_ADK_LANG_ESTONIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-estonian)** <br>Estonian.  |
|  | **[EMV_ADK_LANG_FINNISH](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-finnish)** <br>Finnish.  |
|  | **[EMV_ADK_LANG_LATVIA](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-latvia)** <br>Latvia.  |
|  | **[EMV_ADK_LANG_LITHUANIA](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-lithuania)** <br>Lithuania.  |
|  | **[EMV_ADK_LANG_RUSSIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-russian)** <br>Russian.  |
|  | **[EMV_ADK_LANG_BULGARIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-bulgarian)** <br>Bulgarian.  |
|  | **[EMV_ADK_LANG_CROATIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-croatian)** <br>Croatian.  |
|  | **[EMV_ADK_LANG_HUNGARIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-hungarian)** <br>Hungarian.  |
|  | **[EMV_ADK_LANG_MOLDAVIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-moldavian)** <br>Moldavian.  |
|  | **[EMV_ADK_LANG_ROMANIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-romanian)** <br>Romanian.  |
|  | **[EMV_ADK_LANG_SERBIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-serbian)** <br>Serbian.  |
|  | **[EMV_ADK_LANG_SLOVENIAN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-slovenian)** <br>Slovenian.  |
|  | **[EMV_ADK_LANG_HEBREW](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-hebrew)** <br>Hebrew.  |
|  | **[EMV_ADK_LANG_UNKNOWN](group___t_f___l_a_n_g_u_a_g_e_s.md#define-emv-adk-lang-unknown)** <br>internal use only  |
|  | **[EMV_ADK_TT_BANK_ATTENDED_ONL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-bank-attended-onl-only)** <br>Operational Control Provided By Financial Institution    attended terminal, online only.  |
|  | **[EMV_ADK_TT_BANK_ATTENDED_OFFL_ONL](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-bank-attended-offl-onl)** <br>Operational Control Provided By Financial Institution    attended terminal, offline with online capability.  |
|  | **[EMV_ADK_TT_BANK_ATTENDED_OFFL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-bank-attended-offl-only)** <br>Operational Control Provided By Financial Institution    attended terminal, offline only.  |
|  | **[EMV_ADK_TT_BANK_UNATTENDED_ONL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-bank-unattended-onl-only)** <br>Operational Control Provided By Financial Institution    unattended terminal, online only    ATM.  |
|  | **[EMV_ADK_TT_BANK_UNATTENDED_OFFL_ONL](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-bank-unattended-offl-onl)** <br>Operational Control Provided By Financial Institution    unattended terminal, offline with online capability    ATM.  |
|  | **[EMV_ADK_TT_BANK_UNATTENDED_OFFL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-bank-unattended-offl-only)** <br>Operational Control Provided By Financial Institution    unattended terminal, offline only    ATM.  |
|  | **[EMV_ADK_TT_ATTENDED_ONL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-attended-onl-only)** <br>Operational Control Provided By Merchant    attended terminal, online only.  |
|  | **[EMV_ADK_TT_ATTENDED_OFFL_ONL](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-attended-offl-onl)** <br>Operational Control Provided By Merchant    attended terminal, offline with online capability.  |
|  | **[EMV_ADK_TT_ATTENDED_OFFL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-attended-offl-only)** <br>Operational Control Provided By Merchant    attended terminal, offline only.  |
|  | **[EMV_ADK_TT_UNATTENDED_ONL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-unattended-onl-only)** <br>Operational Control Provided By Merchant    unattended terminal, online only.  |
|  | **[EMV_ADK_TT_UNATTENDED_OFFL_ONL](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-unattended-offl-onl)** <br>Operational Control Provided By Merchant    unattended terminal, offline with online capability.  |
|  | **[EMV_ADK_TT_UNATTENDED_OFFL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-unattended-offl-only)** <br>Operational Control Provided By Merchant    unattended terminal, offline only.  |
|  | **[EMV_ADK_TT_CRDHC_UNATTENDED_ONL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-crdhc-unattended-onl-only)** <br>Operational Control Provided By Cardholder    unattended terminal, online only.  |
|  | **[EMV_ADK_TT_CRDHC_UNATTENDED_OFFL_ONL](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-crdhc-unattended-offl-onl)** <br>Operational Control Provided By Cardholder    unattended terminal, offline with online capability.  |
|  | **[EMV_ADK_TT_CRDHC_UNATTENDED_OFFL_ONLY](group___t_e_r_m___t_y_p_e_s.md#define-emv-adk-tt-crdhc-unattended-offl-only)** <br>Operational Control Provided By Cardholder    unattended terminal, offline only.  |
|  | **[EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service)** <br>Goods and services.  |
|  | **[EMV_ADK_TRAN_TYPE_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cash)** <br>Cash advance.  |
|  | **[EMV_ADK_TRAN_TYPE_CASHBACK](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cashback)** <br>Cashback (payment with cash hand out)  |
|  | **[EMV_ADK_TRAN_TYPE_VISA_QUASI_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-visa-quasi-cash)** <br>Quasi Cash as defined by Visa, VCPS 2.2 (only output, transaction to be started as cash)  |
|  | **[EMV_ADK_TRAN_TYPE_MANUAL_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-cash)** <br>manual cash (PP3 testcase)  |
|  | **[EMV_ADK_TRAN_TYPE_MASTERCARD_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-mastercard-cash)** <br>Cash for MasterCard (only output, transaction to be started as cash)  |
|  | **[EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund)** <br>Refund.  |
|  | **[EMV_ADK_TRAN_TYPE_AMEX_PREAUTH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-amex-preauth)** <br>Pre-Authorization for Amex (only output)  |
|  | **[EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-internal-limit)**  |
|  | **[EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a)** <br>Reservation variant a (without partial reversal)  |
|  | **[EMV_ADK_TRAN_TYPE_INCREMENT_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-a)** <br>Reservation increment variant a.  |
|  | **[EMV_ADK_TRAN_TYPE_ERHOEHUNG_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-erhoehung-a)**  |
|  | **[EMV_ADK_TRAN_TYPE_BOOKING_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-a)** <br>Booking (reservation)  |
|  | **[EMV_ADK_TRAN_TYPE_BUCHUNG_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-a)**  |
|  | **[EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b)** <br>Reservation variant b (with partial reversal)  |
|  | **[EMV_ADK_TRAN_TYPE_INCREMENT_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-b)** <br>Reservation increment variant a.  |
|  | **[EMV_ADK_TRAN_TYPE_ERHOEHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-erhoehung-b)**  |
|  | **[EMV_ADK_TRAN_TYPE_BOOKING_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-b)** <br>Booking (reservation)  |
|  | **[EMV_ADK_TRAN_TYPE_BUCHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-b)**  |
|  | **[EMV_ADK_TRAN_TYPE_TIP](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-tip)** <br>Tip (gratuity) - Transaction forced online and marked as initial transaction for tip follow-up.  |
|  | **[EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-reversal)** <br>Manual reversal.  |
|  | **[EMV_ADK_TRAN_TYPE_APPROVAL_PHONE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-approval-phone)** <br>Approval by phone.  |
|  | **[EMV_ADK_TRAN_TYPE_READ_CARD_LOG](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-log)** <br>Try to read the card log (CUP CTLS feature)  |
|  | **[EMV_ADK_TRAN_TYPE_READ_CARD_DATA](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-read-card-data)** <br>Read card transaction for retrieval of special tags defined by applications flow capabilities.  |
|  | **[EMV_ADK_TRAN_TYPE_TRANSIT](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-transit)** <br>Card Validation, e.g. Visa VCKTS mode.  |
|  | **[EMV_ADK_TRAN_TYPE_REPEAT_ONLINE_PIN](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-online-pin)** <br>Transaction repetition after wrong online PIN entry.  |
|  | **[EMV_ADK_TRAN_TYPE_REPEAT_AMOUNT_CHANGE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-amount-change)** <br>Contact only: Transaction repetition after amount change (requirement detected in [TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks)).    Examples: domestic TIP (Austria) or cashback (Sweden).  |
|  | **[EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-trx-intercept)** <br>Contact only: Transaction repetition after CR request (requirement detected in [TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks), [DOM_OPTION_TRX_INTERCEPT](adk__emv__contactless__programmers__guide_8dox.md#define-dom-option-trx-intercept)).    Examples: CR was asked after reading the PAN (Austria EPA).    not used for contactless.  |
|  | **[EMV_ADK_TRAN_TYPE_REPEAT_TRX_DCC](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-trx-dcc)** <br>Contact only: Transaction repetition after DCC handling. Shall be used after break at [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc).  |
|  | **[EMV_ADK_CARD_REQUESTS_ADVICE](group___c_r_y_p___e_m_v___a_d_k___i_n_f___a_d_d.md#define-emv-adk-card-requests-advice)** <br>Card requests advice.  |
|  | **[EMV_ADK_CARD_ADDITIONAL_INFO](group___c_r_y_p___e_m_v___a_d_k___i_n_f___a_d_d.md#define-emv-adk-card-additional-info)** <br>Mask for "service not allowed", "PIN try limit exceeded", "Issuer authentication failed".  |
|  | **[EMV_ADK_SI_ONLINE_PIN_REQUIRED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-online-pin-required)** <br>this means Online PIN CVM was performed during the transaction (CT: already done in a callback by the app, CTLS: to be performed by the app once the card is out of the field) --> Online PIN processing (host encryption) is required if the transaction is not declined or if there is no fallback.  |
|  | **[EMV_ADK_SI_SIGNATURE_REQUIRED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-signature-required)** <br>this means signature CVM was performed and the signature line must be printed on the receipt if the transaction is not declined or if there is no fallback.  |
|  | **[EMV_ADK_SI_FORCED_ACCEPTANCE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-forced-acceptance)** <br>Forced acceptance transaction.  |
|  | **[EMV_ADK_SI_USER_DEFINED_CVM](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-user-defined-cvm)** <br>user defined CVM, this means that a custom CVM was performed and according to custom/domestic rules additional steps may apply  |
|  | **[EMV_ADK_SI_ON_DEVICE_CVM](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-on-device-cvm)** <br>An On-Device CVM was performed (Amex: "Mobile CVM", Visa: "Consumer device CVM"). Caution, obsolete: For VFI-Reader it indicates if CVM has been performed on the consumer device even if transaction flow CVM was no CVM (e.g. because below CVM-Limit). But for VERTEX this bit is set if CD-CVM is indicated in the kernel outcome with exception for Amex. Replaced by [EMV_ADK_SI_CONSUMER_DEVICE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-consumer-device) and [EMV_ADK_SI_OUTCOME_CD_CVM](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-outcome-cd-cvm) with a consistent behaviour.  |
|  | **[EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-customer-cardwithdrawl)** <br>Result is EMV_ADK_ABORT because customer has pulled out the card.  |
|  | **[EMV_ADK_SI_GICC_TIPPABLE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-gicc-tippable)** <br>A tip transaction may follow this payment.  |
|  | **[EMV_ADK_SI_PTC_EXCEEDED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-ptc-exceeded)** <br>PIN try counter exceeded.  |
|  | **[EMV_ADK_SI_PIN_FAILURE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-pin-failure)** <br>Last entered offline PIN was wrong.  |
|  | **[EMV_ADK_SI_CONTACTLESS_CHIP](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-chip)** <br>A contactless chip transaction.  |
|  | **[EMV_ADK_SI_CONTACTLESS_MSR](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-msr)** <br>A contactless magstripe txn.  |
|  | **[EMV_ADK_SI_TORN_CREATED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-torn-created)** <br>A torn transaction was created (PP3)    not used for contact.  |
|  | **[EMV_ADK_SI_TORN_TRY_RECOVER](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-torn-try-recover)** <br>A torn transaction was tried to recover    not used for contact.  |
|  | **[EMV_ADK_SI_CONTACTLESS_WAITING](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-waiting)** <br>The contactless transaction is still in the card waiting phase.  |
|  | **[EMV_ADK_SI_CONTACT_ONGOING](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contact-ongoing)** <br>The contact transaction is still ongoing.  |
|  | **[EMV_ADK_SI_CTLS_LONG_TAP](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-ctls-long-tap)** <br>Contactless "Long Tap" / Present And Hold , only appears if transaction goes online, card has to remain in field until [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) returned, see [Present And Hold Transaction ("Long Tap")].  |
|  | **[EMV_ADK_SI_ARQC_RESTART_ANY](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-arqc-restart-any)** <br>Contactless kernel asks for second activation after online request in any case even in case of online problem (e.g. girocard OUT.ORD=ANY)  |
|  | **[EMV_ADK_SI_ARQC_RESTART_UTGO](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-arqc-restart-utgo)** <br>Contactless kernel set OUT.ORD to EMV&OTGO and conditions for offline approval are valid. Retap required if unable to go online or script/auth data available.  |
|  | **[EMV_ADK_SI_CONSUMER_DEVICE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-consumer-device)** <br>Contactless transaction performed by a consumer device (smart phone, tablet, watch) supporting CD-CVM (Consumer Device Cardholder Verification Method).  |
|  | **[EMV_ADK_SI_CONTACTLESS_ONLY](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-contactless-only)** <br>Contactless device, key fob or mini card without alternate interfaces. Note: This bit is derived from various card properties like "switch interface" or form factor indicators and is not reliable for all schemes. Don't use this information for control flow. It is intended as additional information or for statistics.  |
|  | **[EMV_ADK_SI_OUTCOME_CD_CVM](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-outcome-cd-cvm)** <br>Contactless set if kernel Outcome Parameter CVM = Confirmation Code Verified (Consumer Device CVM successfully performed, see Book A)  |
|  | **[EMV_ADK_SI_OUTCOME_RECEIPT](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-outcome-receipt)** <br>Contactless set if kernel Outcome Parameter Receipt = Yes (provide a receipt, see Book A). Note: For instance only supported for MasterCard, girocard, JCB and RuPay.  |
|  | **[EMV_ADK_SI_WRITE_DS_FAILED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-write-ds-failed)** <br>Contact Write data storage has failed.  |
|  | **[EMV_ADK_SI_ARQC_RESTART_FORBIDDEN](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-arqc-restart-forbidden)** <br>Do not prompt for re-tap, no matter if there are issuer authentication data or scripts. This is a requirement for JCB online outcome neither 2 presentments nor present and hold and other kernels (e.g. Gemalto-PURE). It is also set for kernels that do not process issuer update at all (e.g. MasterCard, Visa, Amex, CUP, ...) and contactless mag. stripe transactions.  |
|  | **[EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-arqc-restart-no-iauthd)** <br>Only prompt for re-tap in case issuer scripts are present, that is discard Issuer Authentication Data (IAuD, tag '91'). This flag is set for Discover and WISE transactions.  |
|  | **[EMV_ADK_SI_TRANSIT_APPROVED](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-transit-approved)** <br>Indicates that transit transaction has been approved ((TC or ARQC) and successful ODA). Additional checks could be needed at application level (exception file, etc.).  |
|  | **[EMV_ADK_SMART_STATUS_OK](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-status-ok)** <br>okay (== comms ok == card in == card activated ... )  |
|  | **[EMV_ADK_SMART_STATUS_REMOVED](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-status-removed)** <br>card removed = error caused by cardholder  |
|  | **[EMV_ADK_SMART_STATUS_OVERFLOW](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-status-overflow)** <br>error caused by terminal - response buffer too small  |
|  | **[EMV_ADK_SMART_STATUS_EXCHG_ERR](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-status-exchg-err)** <br>error caused by ICC  |
|  | **[EMV_ADK_SMART_TWO_CARDS](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-two-cards)** <br>Contactless: Two cards in the field.  |
|  | **[EMV_ADK_SMART_ERR_INIT](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-err-init)** <br>error caused for initialization  |
|  | **[EMV_ADK_SMART_INV_PARAM](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-inv-param)** <br>error caused passing invalid parameters  |
|  | **[EMV_ADK_SMART_WRONG_ATR](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-wrong-atr)** <br>customer slot only: ATR is not EMV conform, in contrast to missing ATR, detection to be enabled by EMV_CT_DETECT_WRONG_ATR  |
|  | **[EMV_ADK_FETCHTAGS_NO_EMPTY](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-no-empty)** <br>In case no data is found for a given TLV tag: don't include this tag in the output.  |
|  | **[EMV_ADK_FETCHTAGS_KERNEL](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-kernel)** <br>Search tags only in kernel database, excluding kernel private tags ("readHypTag").  |
|  | **[EMV_ADK_FETCHTAGS_ADK](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-adk)** <br>Search tags only in the ADK configuration database.  |
|  | **[EMV_ADK_FETCHTAGS_KERNEL_PRV](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-kernel-prv)** <br>Search tags only in kernel private database ("readHypTag").  |
|  | **[EMV_ADK_FETCHTAGS_GET_DATA](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-get-data)** <br>Issue Get Data command '80 CA' to directly read the information from the chip card.  |
|  | **[EMV_ADK_UPDATETAGS_ERROR_ON_NOT_ALLOWED_TAG](group___u_p_d_a_t_e___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-updatetags-error-on-not-allowed-tag)** <br>return error [EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param) if one or several tags are not allowed to be updated. If bit is not set, not allowed tags will be silently ignored.  |

## Types Documentation

### enum EMV_CLIENT_MODE

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| EMV_CLIENT_MODE_LIBRARY | | Directly use EMV framework library. This is the default setting.   |
| EMV_CLIENT_MODE_SERVER | | Connect to an EMV server.   |
| EMV_CLIENT_MODE_GATEWAY | | Use the gateway client library which uses a single connection to an EMV gateway server for both, contact and contactless.   |
| EMV_CLIENT_MODE_SDI | | Use SDI Server to execute EMV functions.   |



definitions for [EMV_CT_SetClientMode()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-setclientmode) and [EMV_CTLS_SetClientMode()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setclientmode)

### typedef EMV_ADK_INFO

```cpp
typedef unsigned char EMV_ADK_INFO;
```

type of return code 

### typedef EMV_ADK_VIRTUALTERMMAP_TYPE

```cpp
typedef unsigned char EMV_ADK_VIRTUALTERMMAP_TYPE;
```

typedef for "virtual terminal map type" ([EMV_CT_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal)) 

### typedef EMV_ADK_READAPPLI_TYPE

```cpp
typedef unsigned char EMV_ADK_READAPPLI_TYPE;
```

typedef for "read appli type" ([EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata)) 

### typedef EMV_ADK_HANDLE_RECORD_TYPE

```cpp
typedef unsigned char EMV_ADK_HANDLE_RECORD_TYPE;
```

Type for handle application data setting (SetAppliData()) 




## Macros Documentation

### define EMV_ADK_MAX_LANG

```cpp
#define EMV_ADK_MAX_LANG 20
```

maximum number of languages to be configured 

### define EMV_ADK_DEFAULT_AIDSUPP

```cpp
#define EMV_ADK_DEFAULT_AIDSUPP 20
```

default maximum number of supported AIDs 

### define EMV_ADK_MAX_AIDSUPP

```cpp
#define EMV_ADK_MAX_AIDSUPP EMV_ADK_DEFAULT_AIDSUPP
```


**Deprecated**: 

old define for default maximum number of supported AIDs, don't use anymore, use [EMV_ADK_DEFAULT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-default-aidsupp) instead 

### define EMV_ADK_LIMIT_AIDSUPP

```cpp
#define EMV_ADK_LIMIT_AIDSUPP 255
```

maximum number of supported AIDs for extended AID support 

### define EMV_ADK_MAX_LG_DDOL

```cpp
#define EMV_ADK_MAX_LG_DDOL 80
```

max. length of DDOL ([EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol)) 

### define EMV_ADK_MAX_LG_TDOL

```cpp
#define EMV_ADK_MAX_LG_TDOL 80
```

max. length of TDOL ([EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol)) 

### define EMV_ADK_MAX_PRIO_APP

```cpp
#define EMV_ADK_MAX_PRIO_APP 5
```

max. number of priority applications (see [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio)) 

### define EMV_ADK_MAX_DOM_CHP

```cpp
#define EMV_ADK_MAX_DOM_CHP 5
```

max. number of domestic chip applications (see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)) 

### define EMV_ADK_MAX_FB_MSR

```cpp
#define EMV_ADK_MAX_FB_MSR 20
```

max. number of assigned magstripe fallback applications per transaction (see [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms)) . Candidates are every credit card, Maestro and maybe local applications. 

### define EMV_ADK_MAX_CHP_TO_MSR

```cpp
#define EMV_ADK_MAX_CHP_TO_MSR 3
```

max. number of assigned magstripe fallback applications per chip application (see [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids)) 

### define EMV_ADK_IAD_MAX_LEN

```cpp
#define EMV_ADK_IAD_MAX_LEN 16
```

max. length of issuer authentic. data (EMVCo tag 91)    because [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata) includes "91xx" it has a maximum length of EMV_ADK_IAD_MAX_LEN + 2 

### define EMV_ADK_SCRIPT_RESULT_LEN

```cpp
#define EMV_ADK_SCRIPT_RESULT_LEN 5
```

Max. length of issuer script result data (output of [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline), see also [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults)) (not used for contactless) 

### define EMV_ADK_SCRIPT_RESULT_MAX

```cpp
#define EMV_ADK_SCRIPT_RESULT_MAX 10
```

L2 kernel: Max. number of issuer script results (output of [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline), see also [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults))    Used for [EMV_ADK_SCRIPT_RESULT_MAX](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-script-result-max) (not used for contactless) 

### define EMV_ADK_CHECKSUM_ASCII_SIZE

```cpp
#define EMV_ADK_CHECKSUM_ASCII_SIZE 33
```

EMV L2 kernel: Size of EMVCo checksum in ASCII representation (incl. zero termination)    Used for [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco). 

### define EMV_ADK_VERSION_ASCII_SIZE

```cpp
#define EMV_ADK_VERSION_ASCII_SIZE 128
```

Size of EMVCo Kernel version, Framework version and L1 Driver version information in ASCII representation (see [EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion), EMV_CT_TERMDATA_STRUCT::FrameworkVersiona and [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion)) 

### define EMV_ADK_CHECKSUM_SIZE

```cpp
#define EMV_ADK_CHECKSUM_SIZE 4
```

L2 kernel: Size of EMVCo checksum in bytes    Used internally. 

### define EMV_ADK_CHECKSUM_SIZE_NEW

```cpp
#define EMV_ADK_CHECKSUM_SIZE_NEW 16
```

L2 kernel: Size of new EMVCo checksum in bytes    Used internally. 

### define EMV_ADK_BCD_AMOUNT_LEN

```cpp
#define EMV_ADK_BCD_AMOUNT_LEN 6
```


### define EMV_ADK_BIN_AMOUNT_LEN

```cpp
#define EMV_ADK_BIN_AMOUNT_LEN 4
```


### define EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN

```cpp
#define EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN 2
```


### define EMV_ADK_BCD_DATE_OR_TIME_LEN

```cpp
#define EMV_ADK_BCD_DATE_OR_TIME_LEN 3
```


### define EMV_ADK_MAX_CVM

```cpp
#define EMV_ADK_MAX_CVM 10
```

Number of CVM given in parameter `pucCvmList` of [EMV_CT_CALLBACK_FnT()](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks), [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)). Also used in [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list). Length in bytes: [EMV_ADK_MAX_CVM_LIST_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm-list-len) (not used for contactless) 

### define EMV_ADK_MAX_CVM_LIST_LEN

```cpp
#define EMV_ADK_MAX_CVM_LIST_LEN (8 + EMV_ADK_MAX_CVM * 2)
```

Length in bytes of parameter `pucCvmList` of [EMV_CT_CALLBACK_FnT()](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps) and [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)). Also used in [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list). Number of included CVMs: [EMV_ADK_MAX_CVM](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm) (not used for contactless) 

### define EMV_ADK_MAX_PAN_LANGUAGES

```cpp
#define EMV_ADK_MAX_PAN_LANGUAGES 6
```

Maximum number of languages to give back in `pucReducedLanguageList` of [EMV_CT_CALLBACK_FnT()](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ct-callback-fnt) ([TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps)) (Not used for contactless) 

### define EMV_ADK_OK

```cpp
#define EMV_ADK_OK 0
```

Function successful, no error. 

[EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline): This return value indicates successful outcome for card read transaction (e.g. [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund), [EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-reversal), [EMV_ADK_TRAN_TYPE_BUCHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-b)) 


### define EMV_ADK_APP_REQ_START

```cpp
#define EMV_ADK_APP_REQ_START 0xA0
```

CT Reentrance mode: Application requested return start reserved codes. 

### define EMV_ADK_APP_REQ_CANDIDATE

```cpp
#define EMV_ADK_APP_REQ_CANDIDATE 0xA1
```

CT Reentrance mode: Application requested return application selection. 

### define EMV_ADK_APP_REQ_READREC

```cpp
#define EMV_ADK_APP_REQ_READREC 0xA2
```

CT Reentrance mode: Application requested return read records. 

### define EMV_ADK_APP_REQ_DATAAUTH

```cpp
#define EMV_ADK_APP_REQ_DATAAUTH 0xA3
```

CT Reentrance mode: Application requested return data authentication. 

### define EMV_ADK_APP_REQ_ONL_PIN

```cpp
#define EMV_ADK_APP_REQ_ONL_PIN 0xA4
```

CT Reentrance mode: Application requested return for online PIN entry. 

### define EMV_ADK_APP_REQ_OFL_PIN

```cpp
#define EMV_ADK_APP_REQ_OFL_PIN 0xA5
```

CT Reentrance mode: Application requested return for offline PIN entry. 

### define EMV_ADK_APP_REQ_PLAIN_PIN

```cpp
#define EMV_ADK_APP_REQ_PLAIN_PIN 0xA6
```

CT Reentrance mode: Application requested return for plaintext PIN entry. 

### define EMV_ADK_APP_REQ_CVM_END

```cpp
#define EMV_ADK_APP_REQ_CVM_END 0xA7
```

CT Reentrance mode: Application requested return cardholder verification. 

### define EMV_ADK_APP_REQ_RISK_MAN

```cpp
#define EMV_ADK_APP_REQ_RISK_MAN 0xA8
```

CT Reentrance mode: Application requested return riskmanagement. 

### define EMV_ADK_APP_REQ_CUST_CVM

```cpp
#define EMV_ADK_APP_REQ_CUST_CVM 0xA9
```

CT Reentrance mode: Application requested return for customCVM method. 

### define EMV_ADK_APP_REQ_APPS_PREPROC

```cpp
#define EMV_ADK_APP_REQ_APPS_PREPROC 0xAA
```

CT Reentrance mode: Application requested return for candidate list manipulation. 

### define EMV_ADK_APP_REQ_AFTER_GPO

```cpp
#define EMV_ADK_APP_REQ_AFTER_GPO 0xAB
```

CT Reentrance mode: Application requested return for return after GPO. 

### define EMV_ADK_APP_REQ_BUILD_LIST

```cpp
#define EMV_ADK_APP_REQ_BUILD_LIST 0xAC
```

CT Reentrance mode: Application requested return before terminal candidate list build. 

### define EMV_ADK_APP_REQ_END

```cpp
#define EMV_ADK_APP_REQ_END 0xAF
```

CT Reentrance mode: Application requested return end of reserved codes. 

### define EMV_ADK_EMPTY_CONFIG

```cpp
#define EMV_ADK_EMPTY_CONFIG 0xC6
```

Empty configuration. 

### define EMV_ADK_TERMINATE_CDCVM_RETRY

```cpp
#define EMV_ADK_TERMINATE_CDCVM_RETRY 0xC7
```

DPAS CDCVM has not been performed. Terminate the transaction, prompt the Cardholder to remove the card, perform CDCVM, and try again. 

### define EMV_ADK_TIMEOUT

```cpp
#define EMV_ADK_TIMEOUT 0xC8
```

Timeout. 

### define EMV_ADK_MAX_CFG_NUMBER_EXCEEDED

```cpp
#define EMV_ADK_MAX_CFG_NUMBER_EXCEEDED 0xC9
```

CTLS: Number of keys uploaded to VFI Reader exceeded (appears when number of keys more than 99, all next keys are ignored) 

### define EMV_ADK_VFI_FAIL

```cpp
#define EMV_ADK_VFI_FAIL 0xCA
```


VFI Reader "Fail" result. Transaction is terminated and application should decide about the final outcome (decline, fallback, try another card, etc...) based on the VFI Reader response data items (Error Code - SW1 - SW2 - RF State Code). This is returned only with VFI Reader and only if the Terminal Flow Option INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL is set, otherwise EMV_ADK_AAC is returned per default. 


### define EMV_ADK_CTLS_OFFLINE_PIN

```cpp
#define EMV_ADK_CTLS_OFFLINE_PIN 0xCB
```

Transaction to be continued after PIN input for girocard (German debit card) Offline PIN CVM. 

### define EMV_ADK_NOT_ACCEPTED

```cpp
#define EMV_ADK_NOT_ACCEPTED 0xCC
```

Transaction / Payment type not accepted. 

### define EMV_ADK_CANCELLED

```cpp
#define EMV_ADK_CANCELLED 0xCD
```

Contactless only    Transaction was cancelled by [EMV_CTLS_Break()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-break)

### define EMV_ADK_CARD_LOG_LOG_OK

```cpp
#define EMV_ADK_CARD_LOG_LOG_OK 0xCE
```

Return code for successful read of cards transaction log (currently qPBOC only) 

### define EMV_ADK_CTLS_LOW_BATTERY

```cpp
#define EMV_ADK_CTLS_LOW_BATTERY 0xCF
```

Return code for EMV_CTLS_SetupTransaction indicating mobile device's battery too low for contactless transaction. 

### define EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF

```cpp
#define EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF 0xD0
```

CTLS: The function is not allowed when using this config interface. 

### define EMV_ADK_VIRTTERMMAP_WRONG_INIT

```cpp
#define EMV_ADK_VIRTTERMMAP_WRONG_INIT 0xD1
```

Virtual terminal map is configured, but transaction is started with virtual terminal != 0. 

### define EMV_ADK_TOO_MANY_TAPS

```cpp
#define EMV_ADK_TOO_MANY_TAPS 0xD2
```

CTLS: card holder exceeded the number of taps allowed for one transaction (Interac to show "Cannot Process transaction - too many taps") 

### define EMV_ADK_CAN_NOT_PROCESS

```cpp
#define EMV_ADK_CAN_NOT_PROCESS 0xD3
```

(will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported) 

CTLS: card can't be processed, e.g. PIN required in CTLS Interac but CT not available 


### define EMV_ADK_USE_ANOTHER_CTLS_CARD

```cpp
#define EMV_ADK_USE_ANOTHER_CTLS_CARD 0xD4
```

CTLS: advice the customer to use another CTLS card (will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported) 

### define EMV_ADK_USE_OTHER_TERMINAL

```cpp
#define EMV_ADK_USE_OTHER_TERMINAL 0xD5
```

CTLS: advice the merchant to use another terminal to process the transaction (Interac spec requirement) 

### define EMV_ADK_SCRIPT_PROCESSING_COMPLETE

```cpp
#define EMV_ADK_SCRIPT_PROCESSING_COMPLETE 0xD6
```

CTLS: explicit script processing completed (CTLS, e.g. Discover DPAS) 

### define EMV_ADK_FALLBACK_CHIP_ONLY

```cpp
#define EMV_ADK_FALLBACK_CHIP_ONLY 0xD7
```

CTLS: Fallback to chip (CTLS), no msr allowed. 

### define EMV_ADK_READER_CMD_NOT_ALLOWED

```cpp
#define EMV_ADK_READER_CMD_NOT_ALLOWED 0xD8
```


Contacless only 

 VFI-Reader: Returned by [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) and [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) if VFI-Reader responds to "Activate Transaction" with "Command not allowed". This happens if VFI-Reader has not yet finished last transaction, e.g. is still waiting for ContinueOnline. 


### define EMV_ADK_NOT_ALLOWED

```cpp
#define EMV_ADK_NOT_ALLOWED 0xD9
```

Parallel function call not allowed. 

### define EMV_ADK_CTLS_NOT_AVAILABLE

```cpp
#define EMV_ADK_CTLS_NOT_AVAILABLE 0xDA
```

CTLS not present on hardware per OS information. 

### define EMV_ADK_USR_BCKSPC_KEY_PRESSED

```cpp
#define EMV_ADK_USR_BCKSPC_KEY_PRESSED 0xDB
```

Application requested return for E_USR_BACKSPACE_KEY_PRESSED, not used anymore. 

### define EMV_ADK_CEILING_LIMIT

```cpp
#define EMV_ADK_CEILING_LIMIT 0xDC
```

CTLS: amount is above the ceiling limit for CTLS (either terminal ceiling limit or highest scheme ceiling limit) 

### define EMV_ADK_CTLS_RETAP_SAME

```cpp
#define EMV_ADK_CTLS_RETAP_SAME 0xDD
```

CTLS: start over with re-tapping the same card (deactivation/activation/start txn) 

### define EMV_ADK_CTLS_DOMESTIC_APP

```cpp
#define EMV_ADK_CTLS_DOMESTIC_APP 0xDE
```

CTLS: Domestic Application Kernel selected. 

### define EMV_ADK_NO_CARD

```cpp
#define EMV_ADK_NO_CARD 0xDF
```

CTLS: No card processing so far. 

### define EMV_ADK_NOAPP

```cpp
#define EMV_ADK_NOAPP 0xE0
```

CT: Return code if application not found by [EMV_CT_CheckSupportedAID()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-checksupportedaid).    CTLS: Empty terminal candidate list (e.g. all application's ceiling limits exceeded) at [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction). 

### define EMV_ADK_NO_EXEC

```cpp
#define EMV_ADK_NO_EXEC 0xE1
```

CT & CTLS: not executable. 

### define EMV_ADK_ARQC

```cpp
#define EMV_ADK_ARQC 0xE2
```

CT & CTLS: Transaction must be performed online. 

### define EMV_ADK_TC

```cpp
#define EMV_ADK_TC 0xE3
```

CT & CTLS: Transaction performed (offline / online) 

### define EMV_ADK_AAC

```cpp
#define EMV_ADK_AAC 0xE4
```

CT & CTLS: Transaction declined. 

### define EMV_ADK_AAR

```cpp
#define EMV_ADK_AAR 0xE5
```

CT: Transaction cancellation (former "card referral"), not used anymore. 

### define EMV_ADK_PARAM

```cpp
#define EMV_ADK_PARAM 0xE6
```

CT & CTLS: Parameter error (wrong parameter was passed to the function) 

### define EMV_ADK_CARDERR

```cpp
#define EMV_ADK_CARDERR 0xE7
```

CT & CTLS: Proprietary card error (actually converted to [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback)) 

### define EMV_ADK_BADAPP

```cpp
#define EMV_ADK_BADAPP 0xE8
```

CT: Repeat EMV_Select function call-up because selected application on the proprietary card is erroneous. The currently selected application must be transferred (not NO_APPLI) -> this leads to new application selection but the candidate list is not reconstructed. 

### define EMV_ADK_CVM

```cpp
#define EMV_ADK_CVM 0xE9
```

CT: User abort during PIN input (cancel button, timeout, card removed) 

### define EMV_ADK_ABORT

```cpp
#define EMV_ADK_ABORT 0xEA
```

On transaction function it means that current transaction must be aborted.    On configuration function it represents "failed". 

### define EMV_ADK_CARD_BLOCKED

```cpp
#define EMV_ADK_CARD_BLOCKED 0xEB
```

CT & CTLS: Blocked card, regional dependent if fallback to magstripe should be done. 

### define EMV_ADK_CARDERR_FORMAT

```cpp
#define EMV_ADK_CARDERR_FORMAT 0xEC
```

Card error e.g. erroneous TLV coding, incorrect data -> no transaction cancellation. 

### define EMV_ADK_INTERNAL

```cpp
#define EMV_ADK_INTERNAL 0xED
```

CT & CTLS: e.g. erroneous communication to PINPad, internal error, not (completely) initialized (function not allowed due to [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) with `[EMV_CT_INIT_OPT_BASE_INIT()](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-base-init)`) 

### define EMV_ADK_ONLINE_PIN_RETRY

```cpp
#define EMV_ADK_ONLINE_PIN_RETRY 0xEE
```

CT: Online PIN reentered (PIN check).  [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)will return this value in the following scenario: Online PIN was entered. Host returned "PIN wrong".    Calling application must contact host again. And afterwards call [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)once again. 

### define EMV_ADK_SAVE_ERROR

```cpp
#define EMV_ADK_SAVE_ERROR 0xEF
```

Writing config files failed. ANSI C functions fopen(), fwrite(), or fclose() gave back error. Make sure that file access rights are setup correctly. 

### define EMV_ADK_APP_BLOCKED

```cpp
#define EMV_ADK_APP_BLOCKED 0xF0
```

Application blocked: AID evaluation at fallback, no global fallback because it is not allowed for this special blocked application. 

### define EMV_ADK_READ_ERROR

```cpp
#define EMV_ADK_READ_ERROR 0xF1
```

Error while reading EMV configuration. 

### define EMV_ADK_ERR_HSM

```cpp
#define EMV_ADK_ERR_HSM 0xF2
```

E.g. erroneous communication to PINPad, internal error, not used anymore. 

### define EMV_ADK_TLV_BUILD_ERR

```cpp
#define EMV_ADK_TLV_BUILD_ERR 0xF3
```

CT & CTLS: Error in TLV data object = internal error. 

### define EMV_ADK_FALLBACK

```cpp
#define EMV_ADK_FALLBACK 0xF4
```

CT & CTLS: Fallback to chip/msr (for CTLS) respectively magstripe (for CT) must be done. 

### define EMV_ADK_ONL_PIN_REPEAT

```cpp
#define EMV_ADK_ONL_PIN_REPEAT 0xF5
```

CT: wrong Online-PIN, repeat transaction (reduced) beginning with [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction)

### define EMV_ADK_MAND_ELEM_MISSING

```cpp
#define EMV_ADK_MAND_ELEM_MISSING 0xF6
```

CT: mandatory (TLV) element missing (EMV-configuration), not used anymore. 

### define EMV_ADK_INVALID_TERM_CAP

```cpp
#define EMV_ADK_INVALID_TERM_CAP 0xF7
```

CT & CTLS: invalid terminal capabilities (EMV-configuration), not used anymore. 

### define EMV_ADK_REFERRAL

```cpp
#define EMV_ADK_REFERRAL 0xF8
```

CT: a referral of the application decides if the TRX is approved or not. 

### define EMV_ADK_2_CTLS_CARDS

```cpp
#define EMV_ADK_2_CTLS_CARDS 0xF9
```

CTLS: 2 CTLS cards in the field detected. If this is reported after a call to ContinueOffline 2 cards have been detected in the field. The transaction is terminated in this case and must be restarted with a new call of SetupTransaction. This is mandatory for the VFI-Reader ADK and optional (but works as well) for teh Velocity/VERTX based ADK. 

### define EMV_ADK_TXN_CTLS_L1_ERR

```cpp
#define EMV_ADK_TXN_CTLS_L1_ERR 0xFA
```

CTLS: level 1 problem, retap necessary. 

### define EMV_ADK_TXN_CTLS_MOBILE

```cpp
#define EMV_ADK_TXN_CTLS_MOBILE 0xFB
```

CTLS: mobile device, retap necessary. 

### define EMV_ADK_TXN_CTLS_EMPTY_LIST

```cpp
#define EMV_ADK_TXN_CTLS_EMPTY_LIST 0xFC
```

CTLS: empty candidate list. The application shall display "please use other interface" and (depending on regional market requirements) additionally "or tap another card". 

### define EMV_ADK_TXN_EMPTY_LIST

```cpp
#define EMV_ADK_TXN_EMPTY_LIST EMV_ADK_TXN_CTLS_EMPTY_LIST
```

CT & CTLS: Empty candidate List = no common application between card and terminal. For CT usually [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback) is returned in any case, card error and empty list. If the caller needs to distinguish these cases, she has to enable this return code via [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions) bit EMV_CT_SELOP_DETECT_EMPTY_LIST. 

### define EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD

```cpp
#define EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD 0xFD
```

CTLS: insert, swipe or try another card. 

### define EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE

```cpp
#define EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE 0xFE
```

CTLS: domestic not readable (no AID and EMV not configured) 

### define EMV_ADK_CONTINUE

```cpp
#define EMV_ADK_CONTINUE 0xFF
```

CT & CTLS: Transaction can be continued (e.g. CTLS Commit) 

### define EMV_ADK_VIRTUALTERMMAP_APPEND

```cpp
#define EMV_ADK_VIRTUALTERMMAP_APPEND 0x01
```

append one entry to virtual terminal map. 

### define EMV_ADK_VIRTUALTERMMAP_DELETE_ALL

```cpp
#define EMV_ADK_VIRTUALTERMMAP_DELETE_ALL 0x20
```

delete whole virtual terminal map. 

### define EMV_ADK_READ_AID

```cpp
#define EMV_ADK_READ_AID 0
```

read data of a given AID. Remark: If the same AID is configured with multiple param sets (Velocity CTLS only, see [EMV_ADK_FORCE_NEW_PARAMSET](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-force-new-paramset)) only the first AID is presented here. To read all of the AIDs in this case please use first, next mechanism. 

### define EMV_ADK_READ_FIRST

```cpp
#define EMV_ADK_READ_FIRST 1
```

read first AID 

### define EMV_ADK_READ_NEXT

```cpp
#define EMV_ADK_READ_NEXT 2
```

read next AID 

### define EMV_ADK_READ_MAX_APPLI

```cpp
#define EMV_ADK_READ_MAX_APPLI 3
```

future use 

### define EMV_ADK_SET_ONE_RECORD

```cpp
#define EMV_ADK_SET_ONE_RECORD 1
```

Set record for 1 AID, If the AID exists, the parameters included are updated, not included parameters will be untouched. If the AID does not exist, not included parameters will be set with ADK default values. It is highly recommended to configure all parameters on initial setup. Remark: If the AID is existing and the AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are updated --> if the AIDs need to be reconfigured independently it is necessary to delete this AID and confgure again from scratch, see [EMV_ADK_FORCE_NEW_PARAMSET](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-force-new-paramset). 

### define EMV_ADK_SET_TWO_RECORDS

```cpp
#define EMV_ADK_SET_TWO_RECORDS 2
```

Set same record for 2 AIDS. 

### define EMV_ADK_SET_THREE_RECORDS

```cpp
#define EMV_ADK_SET_THREE_RECORDS 3
```

Set same record for 3 AIDs. 

### define EMV_ADK_SET_FOUR_RECORDS

```cpp
#define EMV_ADK_SET_FOUR_RECORDS 4
```

Set same record for 4 AIDs. 

### define EMV_ADK_SET_FIVE_RECORDS

```cpp
#define EMV_ADK_SET_FIVE_RECORDS 5
```

Set same record for 5 AIDs. 

### define EMV_ADK_CLEAR_ONE_RECORD

```cpp
#define EMV_ADK_CLEAR_ONE_RECORD 0x10
```

Clear data of an AID record by AID. Remark: If the same AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are deleted --> one record in this respect means: one AID with its multiple parameters sets, see [EMV_ADK_FORCE_NEW_PARAMSET](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-force-new-paramset). 

### define EMV_ADK_CLEAR_ALL_RECORDS

```cpp
#define EMV_ADK_CLEAR_ALL_RECORDS 0x20
```

Clear all data. 

### define EMV_ADK_FORCE_NEW_PARAMSET

```cpp
#define EMV_ADK_FORCE_NEW_PARAMSET 0x30
```

This is for the CTLS EntryPoint --> Force a new parameterset for an existing AID but having different kernel ID. This is for Velocity CTLS only since the entry point architecture allows to have different kernels (and therefore parameter sets) used for the same AID. So each AID can be configured mutiple times. 

### define EMV_ADK_TEMP_UPDATE

```cpp
#define EMV_ADK_TEMP_UPDATE 0xF0
```


Temporary dynamic update of AID data during a transaction 

 This can be used for updating data during a transaction, e.g. if the transaction is interrupted with the parameter `TxnSteps`. The stored config in the XML files will NOT be touched 

 After transaction initiation: It is activated when having finished the application selection == Final Select is done 

 Before the final select any temporary updated data will be overwritten with the permanent AID parameters, which are copied for the current transaction after Final Select was performed. 


### define EMV_ADK_ADD_TAG_SIZE

```cpp
#define EMV_ADK_ADD_TAG_SIZE 255
```

Maximum field size for `Additional_Tags`. 

### define EMV_ADK_DEBUG_DATA_SIZE

```cpp
#define EMV_ADK_DEBUG_DATA_SIZE 32
```

size for L2 kernel debug data + RFU + 2 byte framework status 

### define EMV_ADK_EMV_ADK_MANUAL_REVERSAL_BYTE

```cpp
#define EMV_ADK_EMV_ADK_MANUAL_REVERSAL_BYTE 0
```

byte for configuration of manual reversal 

### define EMV_ADK_MANUAL_REVERSAL_NIBBLE

```cpp
#define EMV_ADK_MANUAL_REVERSAL_NIBBLE >> 4 & 0x0F
```

nibble for configuration of manual reversal 

### define EMV_ADK_REFUND_BYTE

```cpp
#define EMV_ADK_REFUND_BYTE 0
```

byte for configuration of refund 

### define EMV_ADK_REFUND_NIBBLE

```cpp
#define EMV_ADK_REFUND_NIBBLE & 0x0F
```

nibble for configuration of refund 

### define EMV_ADK_EMV_ADK_RESERVATION_BYTE

```cpp
#define EMV_ADK_EMV_ADK_RESERVATION_BYTE 1
```

byte for configuration of reservation 

### define EMV_ADK_RESERVATION_NIBBLE

```cpp
#define EMV_ADK_RESERVATION_NIBBLE >> 4 & 0x0F
```

nibble for configuration of reservation 

### define EMV_ADK_TIP_BYTE

```cpp
#define EMV_ADK_TIP_BYTE 1
```

byte for configuration of tip (gratuity) 

### define EMV_ADK_TIP_NIBBLE

```cpp
#define EMV_ADK_TIP_NIBBLE & 0x0F
```

nibble for configuration of tip (gratuity) 

### define EMV_ADK_REFERRAL_BYTE

```cpp
#define EMV_ADK_REFERRAL_BYTE 2
```

byte for configuration of referral    not used for contactless 

### define EMV_ADK_REFERRAL_NIBBLE

```cpp
#define EMV_ADK_REFERRAL_NIBBLE >> 4 & 0x0F
```

nibble for configuration of referral    not used for contactless 

### define EMV_ADK_VOICEAUT_BYTE

```cpp
#define EMV_ADK_VOICEAUT_BYTE 2
```

byte for configuration of voice authorization    not used for contactless 

### define EMV_ADK_VOICEAUT_NIBBLE

```cpp
#define EMV_ADK_VOICEAUT_NIBBLE & 0x0F
```

nibble for configuration of voice authorization    not used for contactless 

### define EMV_ADK_RFU_MODE_BYTE

```cpp
#define EMV_ADK_RFU_MODE_BYTE 3
```

byte RFU 

### define EMV_ADK_RFU_MODE_NIBBLE

```cpp
#define EMV_ADK_RFU_MODE_NIBBLE >> 4 & 0x0F
```

nibble RFU 

### define EMV_ADK_FALLBACK_AFTER_CVM_BYTE

```cpp
#define EMV_ADK_FALLBACK_AFTER_CVM_BYTE 3
```

byte for configuration of "fallback to magstripe after start of cardholder verification or early PIN entry allowed"    not used for contactless 

### define EMV_ADK_FALLBACK_AFTER_CVM_NIBBLE

```cpp
#define EMV_ADK_FALLBACK_AFTER_CVM_NIBBLE & 0x0F
```

nibble for configuration of "fallback to magstripe after start of cardholder verification or early PIN entry allowed"    not used for contactless 

### define EMV_ADK_IGNORE_CARD_ERROR_BYTE

```cpp
#define EMV_ADK_IGNORE_CARD_ERROR_BYTE 4
```

byte for configuration of "ignore card error after issuer authorization" 

### define EMV_ADK_IGNORE_CARD_ERROR_NIBBLE

```cpp
#define EMV_ADK_IGNORE_CARD_ERROR_NIBBLE >> 4 & 0x0F
```

nibble for configuration of "ignore card error after issuer authorization" 

### define EMV_ADK_MANUAL_REVERSAL_NO

```cpp
#define EMV_ADK_MANUAL_REVERSAL_NO 0
```

future use 

### define EMV_ADK_MANUAL_REVERSAL_A

```cpp
#define EMV_ADK_MANUAL_REVERSAL_A 1
```

future use 

### define EMV_ADK_MANUAL_REVERSAL_B

```cpp
#define EMV_ADK_MANUAL_REVERSAL_B 2
```

future use 

### define EMV_ADK_REFUND_NO

```cpp
#define EMV_ADK_REFUND_NO 0
```

refund forbidden 

### define EMV_ADK_REFUND_YES

```cpp
#define EMV_ADK_REFUND_YES 1
```

refund allowed 

### define EMV_ADK_RESERVATION_NO

```cpp
#define EMV_ADK_RESERVATION_NO 0
```

reservation forbidden 

### define EMV_ADK_RESERVATION_A

```cpp
#define EMV_ADK_RESERVATION_A 1
```

reservation variant a (without partial reversal) allowed, no amount increment (Reservierung-Erhoehung)    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a)

### define EMV_ADK_RESERVATION_A_PLUS

```cpp
#define EMV_ADK_RESERVATION_A_PLUS 2
```

reservation variant a (without partial reversal) allowed, amount increment (Reservierung-Erhoehung) allowed    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a) and [EMV_ADK_TRAN_TYPE_INCREMENT_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-a)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a)

### define EMV_ADK_RESERVATION_B

```cpp
#define EMV_ADK_RESERVATION_B 3
```

reservation variant b (with partial reversal) allowed, no amount increment (Reservierung-Erhoehung)    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a)

### define EMV_ADK_RESERVATION_B_PLUS

```cpp
#define EMV_ADK_RESERVATION_B_PLUS 4
```

reservation variant b (with partial reversal) allowed, amount increment (Reservierung-Erhoehung) allowed    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b) and [EMV_ADK_TRAN_TYPE_INCREMENT_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-b)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a)

### define EMV_ADK_RESERVATION_B_OFFLINE

```cpp
#define EMV_ADK_RESERVATION_B_OFFLINE 5
```

reservation variant b (with partial reversal) allowed, no amount increment (Reservierung-Erhoehung)    offline allowed (will be without partial reversal)    according [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype): [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b)   for exception case see [EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a)

### define EMV_ADK_TIP_NO

```cpp
#define EMV_ADK_TIP_NO 0
```

tip (gratuity) forbidden: Transactions with [EMV_ADK_TRAN_TYPE_TIP](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-tip) are handled like ordinary [EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service)

### define EMV_ADK_TIP_YES

```cpp
#define EMV_ADK_TIP_YES 1
```

tip (gratuity) allowed: Transactions with [EMV_ADK_TRAN_TYPE_TIP](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-tip) are forced online and marked with [EMV_ADK_SI_GICC_TIPPABLE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-gicc-tippable) if applicable 

### define EMV_ADK_TIP_MODE_TIPPABLE

```cpp
#define EMV_ADK_TIP_MODE_TIPPABLE 1
```

tip (gratuity) same as [EMV_ADK_TIP_YES](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-tip-yes)

### define EMV_ADK_TIP_MODE_MIXED

```cpp
#define EMV_ADK_TIP_MODE_MIXED 2
```

tip (gratuity) tip mode depends on CVM 

**Deprecated**: 

handled the same way as EMV_ADK_TIP_YES 

### define EMV_ADK_TIP_MODE_INPUT

```cpp
#define EMV_ADK_TIP_MODE_INPUT 3
```

tip (gratuity) allowed as payment with tip input 

**Deprecated**: 

Since UI control is outside EMV ADK framework this has been deprecated. 

### define EMV_ADK_TIP_NON_REFUSED

```cpp
#define EMV_ADK_TIP_NON_REFUSED 3
```

tip (gratuity) allowed if the card holder did not explicitly disliked it, that is there was a tip amount input dialog and she confirmed zero amount. 

### define EMV_ADK_REFERRAL_NO

```cpp
#define EMV_ADK_REFERRAL_NO 0
```

voice referral forbidden    Will only take effect in case [REFERRAL_AFTER_TRX](adk__emv__contactless__programmers__guide_8dox.md#define-referral-after-trx) is set [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap)   not used for contactless 

### define EMV_ADK_REFERRAL_YES

```cpp
#define EMV_ADK_REFERRAL_YES 1
```

voice referral allowed    not used for contactless 

### define EMV_ADK_VOICE_NO

```cpp
#define EMV_ADK_VOICE_NO 0
```

voice authorization forbidden    not used for contactless 

### define EMV_ADK_VOICE_YES

```cpp
#define EMV_ADK_VOICE_YES 1
```

voice authorization (part of TAC-IAC-default handling) allowed  _Preconditions:_   - terminal is attended    - [REFERRAL_AFTER_TRX](adk__emv__contactless__programmers__guide_8dox.md#define-referral-after-trx) is set ([EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap))    not used for contactless 

### define EMV_ADK_FALLBACK_AFTER_CVM_NO

```cpp
#define EMV_ADK_FALLBACK_AFTER_CVM_NO 0
```

No fallback to magstripe after start cardholder verification or early PIN entry.    Take care: [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling) must be set to [FB_GERMAN_POS_SPEC](adk__emv__contactless__programmers__guide_8dox.md#define-fb-german-pos-spec).    not used for contactless. 

### define EMV_ADK_FALLBACK_AFTER_CVM_YES

```cpp
#define EMV_ADK_FALLBACK_AFTER_CVM_YES 1
```

Fallback to magstripe after start cardholder verification or early PIN entry.    Take care: [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling) must be set to [FB_GERMAN_POS_SPEC](adk__emv__contactless__programmers__guide_8dox.md#define-fb-german-pos-spec).    not used for contactless. 

### define EMV_ADK_IGNORE_CARD_ERROR_NO

```cpp
#define EMV_ADK_IGNORE_CARD_ERROR_NO 0
```

Transaction decline on card error after issuer authorization. 

### define EMV_ADK_IGNORE_CARD_ERROR_YES

```cpp
#define EMV_ADK_IGNORE_CARD_ERROR_YES 1
```

Ignore card errors after issuer authorization. Anyhow approve the transaction. 

### define EMV_ADK_TRX_CONFIG_DEFAULT

```cpp
#define EMV_ADK_TRX_CONFIG_DEFAULT "\x21\x20\x11\x00\x00\x00\x00\x00"
```

Default setting, for interpretation see [Configuration of application data: special transaction] . 

### define EMV_ADK_TXT_NO_TXT

```cpp
#define EMV_ADK_TXT_NO_TXT 0x00
```

no text (internal use) 

### define EMV_ADK_TXT_REFUND_CONF_AMOUNT

```cpp
#define EMV_ADK_TXT_REFUND_CONF_AMOUNT 0x01
```

Refund    EUR XXXXXX,XX    Please confirm    Needed in case [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund)`AND`[REFUND_CONFIRM_AMOUNT](adk__emv__contactless__programmers__guide_8dox.md#define-refund-confirm-amount). 

### define EMV_ADK_TXT_AMOUNT

```cpp
#define EMV_ADK_TXT_AMOUNT 0x02
```

AMOUNT    EUR XXXXXX,XX    PLEASE CONFIRM. 

### define EMV_ADK_TXT_3AMO_TIP

```cpp
#define EMV_ADK_TXT_3AMO_TIP 0xA1
```

second part for 3 amounts for payment with tip input 

### define EMV_ADK_TXT_3AMO_CASHBACK

```cpp
#define EMV_ADK_TXT_3AMO_CASHBACK 0xA2
```

second part for 3 amounts for payment with cash back 

### define EMV_ADK_TXT_APPROVED

```cpp
#define EMV_ADK_TXT_APPROVED 0x03
```

APPROVED. 

### define EMV_ADK_TXT_AUTH_APPROVED

```cpp
#define EMV_ADK_TXT_AUTH_APPROVED 0xA3
```

like [EMV_ADK_TXT_APPROVED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-approved), but for reservation 

### define EMV_ADK_TXT_DECLINED

```cpp
#define EMV_ADK_TXT_DECLINED 0x04
```

DECLINED. 

### define EMV_ADK_TXT_AUTH_DECLINED

```cpp
#define EMV_ADK_TXT_AUTH_DECLINED 0xA4
```

like [EMV_ADK_TXT_DECLINED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-declined), but for reservation 

### define EMV_ADK_TXT_NOT_ACCEPTED

```cpp
#define EMV_ADK_TXT_NOT_ACCEPTED 0x05
```

NOT ACCEPTED. 

### define EMV_ADK_TXT_CARD_ERROR

```cpp
#define EMV_ADK_TXT_CARD_ERROR 0x06
```

CARD ERROR. 

### define EMV_ADK_TXT_PROCESSING_ERROR

```cpp
#define EMV_ADK_TXT_PROCESSING_ERROR 0x07
```

PROCESSING ERROR. 

### define EMV_ADK_TXT_CARD_READ_OK

```cpp
#define EMV_ADK_TXT_CARD_READ_OK 0x08
```

card read ok 

### define EMV_ADK_TXT_AUTHORIZING

```cpp
#define EMV_ADK_TXT_AUTHORIZING 0x09
```

authorizing 

### define EMV_ADK_TXT_REMOVE_CARD

```cpp
#define EMV_ADK_TXT_REMOVE_CARD 0x10
```

REMOVE CARD. 

### define EMV_ADK_TXT_USE_CHIP_READER

```cpp
#define EMV_ADK_TXT_USE_CHIP_READER 0x11
```


### define EMV_ADK_TXT_USE_MAG_STRIPE

```cpp
#define EMV_ADK_TXT_USE_MAG_STRIPE 0x12
```


### define EMV_ADK_TXT_VOICEAUT

```cpp
#define EMV_ADK_TXT_VOICEAUT 0x13
```

Voice authorization in case of communication problem. 

### define EMV_ADK_TXT_SEE_PHONE

```cpp
#define EMV_ADK_TXT_SEE_PHONE 0x14
```

CTLS only: "See phone for instructions". 

### define EMV_ADK_TXT_RETAP_SAME

```cpp
#define EMV_ADK_TXT_RETAP_SAME 0x15
```

CTLS only: "Retap (same) card", probable reason: torn transaction. 

### define EMV_ADK_TXT_RETAP_SAME_L1

```cpp
#define EMV_ADK_TXT_RETAP_SAME_L1 0x16
```

CTLS only: "Retap (same) card", reason: L1 error    Only sent in case [CLTRXOP_L1_ERROR_CALLBACK()](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-l1-error-callback) is activated    Dependency to [INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT()](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-ui-scheme-default)

### define EMV_ADK_TXT_2_CARDS_IN_FIELD

```cpp
#define EMV_ADK_TXT_2_CARDS_IN_FIELD 0x17
```

CTLS only: 2 card detected in the field    Only sent in case [CLTRXOP_L1_ERROR_CALLBACK()](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-l1-error-callback) is activated. 

### define EMV_ADK_TXT_CARD_READ_COMPLETE

```cpp
#define EMV_ADK_TXT_CARD_READ_COMPLETE 0x18
```

CTLS only: waiting for Card Removal in the ADK , App should display Card Read Complete, Remove Card    Only sent in case CTLS_WAIT_CARD_REMOVAL_END() in application flow capabilties is activated. 

### define EMV_ADK_LANG_NO_LANG

```cpp
#define EMV_ADK_LANG_NO_LANG 0x00
```

internal use only 

### define EMV_ADK_LANG_ENGLISH

```cpp
#define EMV_ADK_LANG_ENGLISH 0x01
```

English. 

### define EMV_ADK_LANG_GERMAN

```cpp
#define EMV_ADK_LANG_GERMAN 0x02
```

German. 

### define EMV_ADK_LANG_FRENCH

```cpp
#define EMV_ADK_LANG_FRENCH 0x03
```

French. 

### define EMV_ADK_LANG_SPANISH

```cpp
#define EMV_ADK_LANG_SPANISH 0x04
```

Spanish. 

### define EMV_ADK_LANG_ITALIAN

```cpp
#define EMV_ADK_LANG_ITALIAN 0x05
```

Italian. 

### define EMV_ADK_LANG_CZECH

```cpp
#define EMV_ADK_LANG_CZECH 0x06
```

Czech. 

### define EMV_ADK_LANG_SLOVAK

```cpp
#define EMV_ADK_LANG_SLOVAK 0x07
```

Slovak. 

### define EMV_ADK_LANG_SWEDISH

```cpp
#define EMV_ADK_LANG_SWEDISH 0x08
```

Swedish. 

### define EMV_ADK_LANG_POLISH

```cpp
#define EMV_ADK_LANG_POLISH 0x09
```

Polish. 

### define EMV_ADK_LANG_GREEK

```cpp
#define EMV_ADK_LANG_GREEK 0x0A
```

Greek. 

### define EMV_ADK_LANG_TURKISH

```cpp
#define EMV_ADK_LANG_TURKISH 0x0B
```

Turkish. 

### define EMV_ADK_LANG_DANSK

```cpp
#define EMV_ADK_LANG_DANSK 0x0C
```

Dansk. 

### define EMV_ADK_LANG_DUTCH

```cpp
#define EMV_ADK_LANG_DUTCH 0x0D
```

Dutch. 

### define EMV_ADK_LANG_NORWEGIAN

```cpp
#define EMV_ADK_LANG_NORWEGIAN 0x0E
```

Norwegian. 

### define EMV_ADK_LANG_PORTUGUESE

```cpp
#define EMV_ADK_LANG_PORTUGUESE 0x0F
```

Portuguese. 

### define EMV_ADK_LANG_AUSTRIAN

```cpp
#define EMV_ADK_LANG_AUSTRIAN 0x10
```

Austrian. 

### define EMV_ADK_LANG_ESTONIAN

```cpp
#define EMV_ADK_LANG_ESTONIAN 0x11
```

Estonian. 

### define EMV_ADK_LANG_FINNISH

```cpp
#define EMV_ADK_LANG_FINNISH 0x12
```

Finnish. 

### define EMV_ADK_LANG_LATVIA

```cpp
#define EMV_ADK_LANG_LATVIA 0x13
```

Latvia. 

### define EMV_ADK_LANG_LITHUANIA

```cpp
#define EMV_ADK_LANG_LITHUANIA 0x14
```

Lithuania. 

### define EMV_ADK_LANG_RUSSIAN

```cpp
#define EMV_ADK_LANG_RUSSIAN 0x15
```

Russian. 

### define EMV_ADK_LANG_BULGARIAN

```cpp
#define EMV_ADK_LANG_BULGARIAN 0x16
```

Bulgarian. 

### define EMV_ADK_LANG_CROATIAN

```cpp
#define EMV_ADK_LANG_CROATIAN 0x17
```

Croatian. 

### define EMV_ADK_LANG_HUNGARIAN

```cpp
#define EMV_ADK_LANG_HUNGARIAN 0x18
```

Hungarian. 

### define EMV_ADK_LANG_MOLDAVIAN

```cpp
#define EMV_ADK_LANG_MOLDAVIAN 0x19
```

Moldavian. 

### define EMV_ADK_LANG_ROMANIAN

```cpp
#define EMV_ADK_LANG_ROMANIAN 0x1A
```

Romanian. 

### define EMV_ADK_LANG_SERBIAN

```cpp
#define EMV_ADK_LANG_SERBIAN 0x1B
```

Serbian. 

### define EMV_ADK_LANG_SLOVENIAN

```cpp
#define EMV_ADK_LANG_SLOVENIAN 0x1C
```

Slovenian. 

### define EMV_ADK_LANG_HEBREW

```cpp
#define EMV_ADK_LANG_HEBREW 0x1D
```

Hebrew. 

### define EMV_ADK_LANG_UNKNOWN

```cpp
#define EMV_ADK_LANG_UNKNOWN 0xFF
```

internal use only 

### define EMV_ADK_TT_BANK_ATTENDED_ONL_ONLY

```cpp
#define EMV_ADK_TT_BANK_ATTENDED_ONL_ONLY 0x11
```

Operational Control Provided By Financial Institution    attended terminal, online only. 

### define EMV_ADK_TT_BANK_ATTENDED_OFFL_ONL

```cpp
#define EMV_ADK_TT_BANK_ATTENDED_OFFL_ONL 0x12
```

Operational Control Provided By Financial Institution    attended terminal, offline with online capability. 

### define EMV_ADK_TT_BANK_ATTENDED_OFFL_ONLY

```cpp
#define EMV_ADK_TT_BANK_ATTENDED_OFFL_ONLY 0x13
```

Operational Control Provided By Financial Institution    attended terminal, offline only. 

### define EMV_ADK_TT_BANK_UNATTENDED_ONL_ONLY

```cpp
#define EMV_ADK_TT_BANK_UNATTENDED_ONL_ONLY 0x14
```

Operational Control Provided By Financial Institution    unattended terminal, online only    ATM. 

### define EMV_ADK_TT_BANK_UNATTENDED_OFFL_ONL

```cpp
#define EMV_ADK_TT_BANK_UNATTENDED_OFFL_ONL 0x15
```

Operational Control Provided By Financial Institution    unattended terminal, offline with online capability    ATM. 

### define EMV_ADK_TT_BANK_UNATTENDED_OFFL_ONLY

```cpp
#define EMV_ADK_TT_BANK_UNATTENDED_OFFL_ONLY 0x16
```

Operational Control Provided By Financial Institution    unattended terminal, offline only    ATM. 

### define EMV_ADK_TT_ATTENDED_ONL_ONLY

```cpp
#define EMV_ADK_TT_ATTENDED_ONL_ONLY 0x21
```

Operational Control Provided By Merchant    attended terminal, online only. 

### define EMV_ADK_TT_ATTENDED_OFFL_ONL

```cpp
#define EMV_ADK_TT_ATTENDED_OFFL_ONL 0x22
```

Operational Control Provided By Merchant    attended terminal, offline with online capability. 

### define EMV_ADK_TT_ATTENDED_OFFL_ONLY

```cpp
#define EMV_ADK_TT_ATTENDED_OFFL_ONLY 0x23
```

Operational Control Provided By Merchant    attended terminal, offline only. 

### define EMV_ADK_TT_UNATTENDED_ONL_ONLY

```cpp
#define EMV_ADK_TT_UNATTENDED_ONL_ONLY 0x24
```

Operational Control Provided By Merchant    unattended terminal, online only. 

### define EMV_ADK_TT_UNATTENDED_OFFL_ONL

```cpp
#define EMV_ADK_TT_UNATTENDED_OFFL_ONL 0x25
```

Operational Control Provided By Merchant    unattended terminal, offline with online capability. 

### define EMV_ADK_TT_UNATTENDED_OFFL_ONLY

```cpp
#define EMV_ADK_TT_UNATTENDED_OFFL_ONLY 0x26
```

Operational Control Provided By Merchant    unattended terminal, offline only. 

### define EMV_ADK_TT_CRDHC_UNATTENDED_ONL_ONLY

```cpp
#define EMV_ADK_TT_CRDHC_UNATTENDED_ONL_ONLY 0x34
```

Operational Control Provided By Cardholder    unattended terminal, online only. 

### define EMV_ADK_TT_CRDHC_UNATTENDED_OFFL_ONL

```cpp
#define EMV_ADK_TT_CRDHC_UNATTENDED_OFFL_ONL 0x35
```

Operational Control Provided By Cardholder    unattended terminal, offline with online capability. 

### define EMV_ADK_TT_CRDHC_UNATTENDED_OFFL_ONLY

```cpp
#define EMV_ADK_TT_CRDHC_UNATTENDED_OFFL_ONLY 0x36
```

Operational Control Provided By Cardholder    unattended terminal, offline only. 

### define EMV_ADK_TRAN_TYPE_GOODS_SERVICE

```cpp
#define EMV_ADK_TRAN_TYPE_GOODS_SERVICE 0x00
```

Goods and services. 

### define EMV_ADK_TRAN_TYPE_CASH

```cpp
#define EMV_ADK_TRAN_TYPE_CASH 0x01
```

Cash advance. 

### define EMV_ADK_TRAN_TYPE_CASHBACK

```cpp
#define EMV_ADK_TRAN_TYPE_CASHBACK 0x09
```

Cashback (payment with cash hand out) 

### define EMV_ADK_TRAN_TYPE_VISA_QUASI_CASH

```cpp
#define EMV_ADK_TRAN_TYPE_VISA_QUASI_CASH 0x11
```

Quasi Cash as defined by Visa, VCPS 2.2 (only output, transaction to be started as cash) 

### define EMV_ADK_TRAN_TYPE_MANUAL_CASH

```cpp
#define EMV_ADK_TRAN_TYPE_MANUAL_CASH 0x12
```

manual cash (PP3 testcase) 

### define EMV_ADK_TRAN_TYPE_MASTERCARD_CASH

```cpp
#define EMV_ADK_TRAN_TYPE_MASTERCARD_CASH 0x17
```

Cash for MasterCard (only output, transaction to be started as cash) 

Used towards card and in [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype)

 in case [TRANSACTION_TYPE_17_FOR_CASH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-type-17-for-cash)

 is set and cash transaction (as given in [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash)) 


### define EMV_ADK_TRAN_TYPE_REFUND

```cpp
#define EMV_ADK_TRAN_TYPE_REFUND 0x20
```

Refund. 

### define EMV_ADK_TRAN_TYPE_AMEX_PREAUTH

```cpp
#define EMV_ADK_TRAN_TYPE_AMEX_PREAUTH 0x30
```

Pre-Authorization for Amex (only output) 

Used towards card and in [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype)

 in case [TRANSACTION_TYPE_30_FOR_PREAUTH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-type-30-for-preauth)

 is set and [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a) or [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b) is used 


### define EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT

```cpp
#define EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT 0x99
```


### define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A

```cpp
#define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A 0xF0
```

Reservation variant a (without partial reversal) 

### define EMV_ADK_TRAN_TYPE_INCREMENT_A

```cpp
#define EMV_ADK_TRAN_TYPE_INCREMENT_A 0xF1
```

Reservation increment variant a. 

### define EMV_ADK_TRAN_TYPE_ERHOEHUNG_A

```cpp
#define EMV_ADK_TRAN_TYPE_ERHOEHUNG_A EMV_ADK_TRAN_TYPE_INCREMENT_A
```


**Deprecated**: 

use [EMV_ADK_TRAN_TYPE_INCREMENT_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-a)

### define EMV_ADK_TRAN_TYPE_BOOKING_A

```cpp
#define EMV_ADK_TRAN_TYPE_BOOKING_A 0xF2
```

Booking (reservation) 

### define EMV_ADK_TRAN_TYPE_BUCHUNG_A

```cpp
#define EMV_ADK_TRAN_TYPE_BUCHUNG_A EMV_ADK_TRAN_TYPE_BOOKING_A
```


**Deprecated**: 

use [EMV_ADK_TRAN_TYPE_BOOKING_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-a)

### define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B

```cpp
#define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B 0xF3
```

Reservation variant b (with partial reversal) 

### define EMV_ADK_TRAN_TYPE_INCREMENT_B

```cpp
#define EMV_ADK_TRAN_TYPE_INCREMENT_B 0xF4
```

Reservation increment variant a. 

### define EMV_ADK_TRAN_TYPE_ERHOEHUNG_B

```cpp
#define EMV_ADK_TRAN_TYPE_ERHOEHUNG_B EMV_ADK_TRAN_TYPE_INCREMENT_B
```


**Deprecated**: 

use [EMV_ADK_TRAN_TYPE_INCREMENT_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-increment-b)

### define EMV_ADK_TRAN_TYPE_BOOKING_B

```cpp
#define EMV_ADK_TRAN_TYPE_BOOKING_B 0xF5
```

Booking (reservation) 

### define EMV_ADK_TRAN_TYPE_BUCHUNG_B

```cpp
#define EMV_ADK_TRAN_TYPE_BUCHUNG_B EMV_ADK_TRAN_TYPE_BOOKING_B
```


**Deprecated**: 

use [EMV_ADK_TRAN_TYPE_BOOKING_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-booking-b)

### define EMV_ADK_TRAN_TYPE_TIP

```cpp
#define EMV_ADK_TRAN_TYPE_TIP 0xE0
```

Tip (gratuity) - Transaction forced online and marked as initial transaction for tip follow-up. 

### define EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL

```cpp
#define EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL 0xD0
```

Manual reversal. 

### define EMV_ADK_TRAN_TYPE_APPROVAL_PHONE

```cpp
#define EMV_ADK_TRAN_TYPE_APPROVAL_PHONE 0xD1
```

Approval by phone. 

### define EMV_ADK_TRAN_TYPE_READ_CARD_LOG

```cpp
#define EMV_ADK_TRAN_TYPE_READ_CARD_LOG 0xD2
```

Try to read the card log (CUP CTLS feature) 

### define EMV_ADK_TRAN_TYPE_READ_CARD_DATA

```cpp
#define EMV_ADK_TRAN_TYPE_READ_CARD_DATA 0xD3
```

Read card transaction for retrieval of special tags defined by applications flow capabilities. 

### define EMV_ADK_TRAN_TYPE_TRANSIT

```cpp
#define EMV_ADK_TRAN_TYPE_TRANSIT 0xD4
```

Card Validation, e.g. Visa VCKTS mode. 

### define EMV_ADK_TRAN_TYPE_REPEAT_ONLINE_PIN

```cpp
#define EMV_ADK_TRAN_TYPE_REPEAT_ONLINE_PIN 0xC0
```

Transaction repetition after wrong online PIN entry. 

### define EMV_ADK_TRAN_TYPE_REPEAT_AMOUNT_CHANGE

```cpp
#define EMV_ADK_TRAN_TYPE_REPEAT_AMOUNT_CHANGE 0xB0
```

Contact only: Transaction repetition after amount change (requirement detected in [TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks)).    Examples: domestic TIP (Austria) or cashback (Sweden). 

### define EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT

```cpp
#define EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT 0xA0
```

Contact only: Transaction repetition after CR request (requirement detected in [TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks), [DOM_OPTION_TRX_INTERCEPT](adk__emv__contactless__programmers__guide_8dox.md#define-dom-option-trx-intercept)).    Examples: CR was asked after reading the PAN (Austria EPA).    not used for contactless. 

### define EMV_ADK_TRAN_TYPE_REPEAT_TRX_DCC

```cpp
#define EMV_ADK_TRAN_TYPE_REPEAT_TRX_DCC 0xA1
```

Contact only: Transaction repetition after DCC handling. Shall be used after break at [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc). 

### define EMV_ADK_CARD_REQUESTS_ADVICE

```cpp
#define EMV_ADK_CARD_REQUESTS_ADVICE 0x08
```

Card requests advice. 

### define EMV_ADK_CARD_ADDITIONAL_INFO

```cpp
#define EMV_ADK_CARD_ADDITIONAL_INFO 0x07
```

Mask for "service not allowed", "PIN try limit exceeded", "Issuer authentication failed". 

### define EMV_ADK_SI_ONLINE_PIN_REQUIRED

```cpp
#define EMV_ADK_SI_ONLINE_PIN_REQUIRED 0x00000001u
```

this means Online PIN CVM was performed during the transaction (CT: already done in a callback by the app, CTLS: to be performed by the app once the card is out of the field) --> Online PIN processing (host encryption) is required if the transaction is not declined or if there is no fallback. 

### define EMV_ADK_SI_SIGNATURE_REQUIRED

```cpp
#define EMV_ADK_SI_SIGNATURE_REQUIRED 0x00000002u
```

this means signature CVM was performed and the signature line must be printed on the receipt if the transaction is not declined or if there is no fallback. 

### define EMV_ADK_SI_FORCED_ACCEPTANCE

```cpp
#define EMV_ADK_SI_FORCED_ACCEPTANCE 0x00000004u
```

Forced acceptance transaction. 

### define EMV_ADK_SI_USER_DEFINED_CVM

```cpp
#define EMV_ADK_SI_USER_DEFINED_CVM 0x00000008u
```

user defined CVM, this means that a custom CVM was performed and according to custom/domestic rules additional steps may apply 

### define EMV_ADK_SI_ON_DEVICE_CVM

```cpp
#define EMV_ADK_SI_ON_DEVICE_CVM 0x00000010u
```

An On-Device CVM was performed (Amex: "Mobile CVM", Visa: "Consumer device CVM"). Caution, obsolete: For VFI-Reader it indicates if CVM has been performed on the consumer device even if transaction flow CVM was no CVM (e.g. because below CVM-Limit). But for VERTEX this bit is set if CD-CVM is indicated in the kernel outcome with exception for Amex. Replaced by [EMV_ADK_SI_CONSUMER_DEVICE](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-consumer-device) and [EMV_ADK_SI_OUTCOME_CD_CVM](group___s_t_a_t_u_s___i_n_f_o.md#define-emv-adk-si-outcome-cd-cvm) with a consistent behaviour. 

### define EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL

```cpp
#define EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL 0x00000080u
```

Result is EMV_ADK_ABORT because customer has pulled out the card. 

### define EMV_ADK_SI_GICC_TIPPABLE

```cpp
#define EMV_ADK_SI_GICC_TIPPABLE 0x00000100u
```

A tip transaction may follow this payment. 

### define EMV_ADK_SI_PTC_EXCEEDED

```cpp
#define EMV_ADK_SI_PTC_EXCEEDED 0x00000200u
```

PIN try counter exceeded. 

### define EMV_ADK_SI_PIN_FAILURE

```cpp
#define EMV_ADK_SI_PIN_FAILURE 0x00000400u
```

Last entered offline PIN was wrong. 

### define EMV_ADK_SI_CONTACTLESS_CHIP

```cpp
#define EMV_ADK_SI_CONTACTLESS_CHIP 0x00000800u
```

A contactless chip transaction. 

### define EMV_ADK_SI_CONTACTLESS_MSR

```cpp
#define EMV_ADK_SI_CONTACTLESS_MSR 0x00001000u
```

A contactless magstripe txn. 

### define EMV_ADK_SI_TORN_CREATED

```cpp
#define EMV_ADK_SI_TORN_CREATED 0x00002000u
```

A torn transaction was created (PP3)    not used for contact. 

### define EMV_ADK_SI_TORN_TRY_RECOVER

```cpp
#define EMV_ADK_SI_TORN_TRY_RECOVER 0x00004000u
```

A torn transaction was tried to recover    not used for contact. 

### define EMV_ADK_SI_CONTACTLESS_WAITING

```cpp
#define EMV_ADK_SI_CONTACTLESS_WAITING 0x00008000u
```

The contactless transaction is still in the card waiting phase. 

### define EMV_ADK_SI_CONTACT_ONGOING

```cpp
#define EMV_ADK_SI_CONTACT_ONGOING 0x00008000u
```

The contact transaction is still ongoing. 

### define EMV_ADK_SI_CTLS_LONG_TAP

```cpp
#define EMV_ADK_SI_CTLS_LONG_TAP 0x00010000u
```

Contactless "Long Tap" / Present And Hold , only appears if transaction goes online, card has to remain in field until [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) returned, see [Present And Hold Transaction ("Long Tap")]. 

### define EMV_ADK_SI_ARQC_RESTART_ANY

```cpp
#define EMV_ADK_SI_ARQC_RESTART_ANY 0x00020000u
```

Contactless kernel asks for second activation after online request in any case even in case of online problem (e.g. girocard OUT.ORD=ANY) 

### define EMV_ADK_SI_ARQC_RESTART_UTGO

```cpp
#define EMV_ADK_SI_ARQC_RESTART_UTGO 0x00040000u
```

Contactless kernel set OUT.ORD to EMV&OTGO and conditions for offline approval are valid. Retap required if unable to go online or script/auth data available. 

### define EMV_ADK_SI_CONSUMER_DEVICE

```cpp
#define EMV_ADK_SI_CONSUMER_DEVICE 0x00080000u
```

Contactless transaction performed by a consumer device (smart phone, tablet, watch) supporting CD-CVM (Consumer Device Cardholder Verification Method). 

### define EMV_ADK_SI_CONTACTLESS_ONLY

```cpp
#define EMV_ADK_SI_CONTACTLESS_ONLY 0x00100000u
```

Contactless device, key fob or mini card without alternate interfaces. Note: This bit is derived from various card properties like "switch interface" or form factor indicators and is not reliable for all schemes. Don't use this information for control flow. It is intended as additional information or for statistics. 

### define EMV_ADK_SI_OUTCOME_CD_CVM

```cpp
#define EMV_ADK_SI_OUTCOME_CD_CVM 0x00200000u
```

Contactless set if kernel Outcome Parameter CVM = Confirmation Code Verified (Consumer Device CVM successfully performed, see Book A) 

### define EMV_ADK_SI_OUTCOME_RECEIPT

```cpp
#define EMV_ADK_SI_OUTCOME_RECEIPT 0x00400000u
```

Contactless set if kernel Outcome Parameter Receipt = Yes (provide a receipt, see Book A). Note: For instance only supported for MasterCard, girocard, JCB and RuPay. 

### define EMV_ADK_SI_WRITE_DS_FAILED

```cpp
#define EMV_ADK_SI_WRITE_DS_FAILED 0x00800000u
```

Contact Write data storage has failed. 

### define EMV_ADK_SI_ARQC_RESTART_FORBIDDEN

```cpp
#define EMV_ADK_SI_ARQC_RESTART_FORBIDDEN 0x01000000u
```

Do not prompt for re-tap, no matter if there are issuer authentication data or scripts. This is a requirement for JCB online outcome neither 2 presentments nor present and hold and other kernels (e.g. Gemalto-PURE). It is also set for kernels that do not process issuer update at all (e.g. MasterCard, Visa, Amex, CUP, ...) and contactless mag. stripe transactions. 

### define EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD

```cpp
#define EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD 0x02000000u
```

Only prompt for re-tap in case issuer scripts are present, that is discard Issuer Authentication Data (IAuD, tag '91'). This flag is set for Discover and WISE transactions. 

### define EMV_ADK_SI_TRANSIT_APPROVED

```cpp
#define EMV_ADK_SI_TRANSIT_APPROVED 0x04000000u
```

Indicates that transit transaction has been approved ((TC or ARQC) and successful ODA). Additional checks could be needed at application level (exception file, etc.). 

### define EMV_ADK_SMART_STATUS_OK

```cpp
#define EMV_ADK_SMART_STATUS_OK 0
```

okay (== comms ok == card in == card activated ... ) 

### define EMV_ADK_SMART_STATUS_REMOVED

```cpp
#define EMV_ADK_SMART_STATUS_REMOVED 1
```

card removed = error caused by cardholder 

### define EMV_ADK_SMART_STATUS_OVERFLOW

```cpp
#define EMV_ADK_SMART_STATUS_OVERFLOW 2
```

error caused by terminal - response buffer too small 

### define EMV_ADK_SMART_STATUS_EXCHG_ERR

```cpp
#define EMV_ADK_SMART_STATUS_EXCHG_ERR 3
```

error caused by ICC 

### define EMV_ADK_SMART_TWO_CARDS

```cpp
#define EMV_ADK_SMART_TWO_CARDS 4
```

Contactless: Two cards in the field. 

### define EMV_ADK_SMART_ERR_INIT

```cpp
#define EMV_ADK_SMART_ERR_INIT 5
```

error caused for initialization 

### define EMV_ADK_SMART_INV_PARAM

```cpp
#define EMV_ADK_SMART_INV_PARAM 6
```

error caused passing invalid parameters 

### define EMV_ADK_SMART_WRONG_ATR

```cpp
#define EMV_ADK_SMART_WRONG_ATR 7
```

customer slot only: ATR is not EMV conform, in contrast to missing ATR, detection to be enabled by EMV_CT_DETECT_WRONG_ATR 

### define EMV_ADK_FETCHTAGS_NO_EMPTY

```cpp
#define EMV_ADK_FETCHTAGS_NO_EMPTY (1 << 0)
```

In case no data is found for a given TLV tag: don't include this tag in the output. 

Exception for MIR: In case there is no data for 9F70 and/or DF74 those tags are never included in the output. 


### define EMV_ADK_FETCHTAGS_KERNEL

```cpp
#define EMV_ADK_FETCHTAGS_KERNEL (1 << 1)
```

Search tags only in kernel database, excluding kernel private tags ("readHypTag"). 

Data originated from kernel, ICC and [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm) can be found. To be used in case of double definition of tags. 


### define EMV_ADK_FETCHTAGS_ADK

```cpp
#define EMV_ADK_FETCHTAGS_ADK (1 << 2)
```

Search tags only in the ADK configuration database. 

Data originated from [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-scheme-specific-type) and [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) can be found. To be used in case of double definition of tags. 


### define EMV_ADK_FETCHTAGS_KERNEL_PRV

```cpp
#define EMV_ADK_FETCHTAGS_KERNEL_PRV (1 << 3)
```

Search tags only in kernel private database ("readHypTag"). 

### define EMV_ADK_FETCHTAGS_GET_DATA

```cpp
#define EMV_ADK_FETCHTAGS_GET_DATA (1 << 4)
```

Issue Get Data command '80 CA' to directly read the information from the chip card. 

### define EMV_ADK_UPDATETAGS_ERROR_ON_NOT_ALLOWED_TAG

```cpp
#define EMV_ADK_UPDATETAGS_ERROR_ON_NOT_ALLOWED_TAG (1 << 0)
```

return error [EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param) if one or several tags are not allowed to be updated. If bit is not set, not allowed tags will be silently ignored. 

## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     VeriFone
*  Author:      GSS R&D Germany
*  Content:     Interface definitions and functions
****************************************************************************/


#ifndef EMVCTRL_COMMON_H   /* avoid double interface-includes */
  #define EMVCTRL_COMMON_H

#ifdef __cplusplus
extern "C" {
#endif



// ========================================================================================================
// === COMMON PART ===
// ========================================================================================================

#define EMV_ADK_MAX_LANG             20  
#define EMV_ADK_DEFAULT_AIDSUPP      20  
#define EMV_ADK_MAX_AIDSUPP          EMV_ADK_DEFAULT_AIDSUPP  
#define EMV_ADK_LIMIT_AIDSUPP        255 
#define EMV_ADK_MAX_LG_DDOL          80  
#define EMV_ADK_MAX_LG_TDOL          80  
#define EMV_ADK_MAX_PRIO_APP          5  
#define EMV_ADK_MAX_DOM_CHP           5  
#define EMV_ADK_MAX_FB_MSR           20  
#define EMV_ADK_MAX_CHP_TO_MSR        3  

#define EMV_ADK_IAD_MAX_LEN          16  

#define EMV_ADK_SCRIPT_RESULT_LEN       5  
#define EMV_ADK_SCRIPT_RESULT_MAX      10  

#define EMV_ADK_CHECKSUM_ASCII_SIZE    33  
#define EMV_ADK_VERSION_ASCII_SIZE    128  
#define EMV_ADK_CHECKSUM_SIZE           4  
#define EMV_ADK_CHECKSUM_SIZE_NEW      16  
#define EMV_ADK_BCD_AMOUNT_LEN          6
#define EMV_ADK_BIN_AMOUNT_LEN          4
#define EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN  2
#define EMV_ADK_BCD_DATE_OR_TIME_LEN           3

#define EMV_ADK_MAX_CVM           10                         
#define EMV_ADK_MAX_CVM_LIST_LEN  (8 + EMV_ADK_MAX_CVM * 2)  

#define EMV_ADK_MAX_PAN_LANGUAGES       6  



// ========================================================================================================
// === RETURN VALUES ===
// ========================================================================================================

typedef unsigned char EMV_ADK_INFO;      
#define    EMV_ADK_OK                                 0    
#define    EMV_ADK_APP_REQ_START                      0xA0 
#define    EMV_ADK_APP_REQ_CANDIDATE                  0xA1 
#define    EMV_ADK_APP_REQ_READREC                    0xA2 
#define    EMV_ADK_APP_REQ_DATAAUTH                   0xA3 
#define    EMV_ADK_APP_REQ_ONL_PIN                    0xA4 
#define    EMV_ADK_APP_REQ_OFL_PIN                    0xA5 
#define    EMV_ADK_APP_REQ_PLAIN_PIN                  0xA6 
#define    EMV_ADK_APP_REQ_CVM_END                    0xA7 
#define    EMV_ADK_APP_REQ_RISK_MAN                   0xA8 
#define    EMV_ADK_APP_REQ_CUST_CVM                   0xA9 
#define    EMV_ADK_APP_REQ_APPS_PREPROC               0xAA 
#define    EMV_ADK_APP_REQ_AFTER_GPO                  0xAB 
#define    EMV_ADK_APP_REQ_BUILD_LIST                 0xAC 
#define    EMV_ADK_APP_REQ_END                        0xAF 

#define    EMV_ADK_EMPTY_CONFIG                       0xC6 
#define    EMV_ADK_TERMINATE_CDCVM_RETRY              0xC7 
#define    EMV_ADK_TIMEOUT                            0xC8 
#define    EMV_ADK_MAX_CFG_NUMBER_EXCEEDED            0xC9 
#define    EMV_ADK_VFI_FAIL                           0xCA 
#define    EMV_ADK_CTLS_OFFLINE_PIN                   0xCB 
#define    EMV_ADK_NOT_ACCEPTED                       0xCC 
#define    EMV_ADK_CANCELLED                          0xCD 
#define    EMV_ADK_CARD_LOG_LOG_OK                    0xCE 
#define    EMV_ADK_CTLS_LOW_BATTERY                   0xCF 
#define    EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF         0xD0 
#define    EMV_ADK_VIRTTERMMAP_WRONG_INIT             0xD1 
#define    EMV_ADK_TOO_MANY_TAPS                      0xD2 
#define    EMV_ADK_CAN_NOT_PROCESS                    0xD3 
#define    EMV_ADK_USE_ANOTHER_CTLS_CARD              0xD4 
#define    EMV_ADK_USE_OTHER_TERMINAL                 0xD5 
#define    EMV_ADK_SCRIPT_PROCESSING_COMPLETE         0xD6 
#define    EMV_ADK_FALLBACK_CHIP_ONLY                 0xD7 
#define    EMV_ADK_READER_CMD_NOT_ALLOWED             0xD8 
#define    EMV_ADK_NOT_ALLOWED                        0xD9 
#define    EMV_ADK_CTLS_NOT_AVAILABLE                 0xDA 
#define    EMV_ADK_USR_BCKSPC_KEY_PRESSED             0xDB 
#define    EMV_ADK_CEILING_LIMIT                      0xDC 
#define    EMV_ADK_CTLS_RETAP_SAME                    0xDD 
#define    EMV_ADK_CTLS_DOMESTIC_APP                  0xDE 
#define    EMV_ADK_NO_CARD                            0xDF 
#define    EMV_ADK_NOAPP                              0xE0 
#define    EMV_ADK_NO_EXEC                            0xE1 
#define    EMV_ADK_ARQC                               0xE2 
#define    EMV_ADK_TC                                 0xE3 
#define    EMV_ADK_AAC                                0xE4 
#define    EMV_ADK_AAR                                0xE5 
#define    EMV_ADK_PARAM                              0xE6 
#define    EMV_ADK_CARDERR                            0xE7 
#define    EMV_ADK_BADAPP                             0xE8 
#define    EMV_ADK_CVM                                0xE9 
#define    EMV_ADK_ABORT                              0xEA 
#define    EMV_ADK_CARD_BLOCKED                       0xEB 
#define    EMV_ADK_CARDERR_FORMAT                     0xEC 
#define    EMV_ADK_INTERNAL                           0xED 
#define    EMV_ADK_ONLINE_PIN_RETRY                   0xEE 
#define    EMV_ADK_SAVE_ERROR                         0xEF 
#define    EMV_ADK_APP_BLOCKED                        0xF0 
#define    EMV_ADK_READ_ERROR                         0xF1 
#define    EMV_ADK_ERR_HSM                            0xF2 
#define    EMV_ADK_TLV_BUILD_ERR                      0xF3 
#define    EMV_ADK_FALLBACK                           0xF4 
#define    EMV_ADK_ONL_PIN_REPEAT                     0xF5 
#define    EMV_ADK_MAND_ELEM_MISSING                  0xF6 
#define    EMV_ADK_INVALID_TERM_CAP                   0xF7 
#define    EMV_ADK_REFERRAL                           0xF8 
#define    EMV_ADK_2_CTLS_CARDS                       0xF9 
#define    EMV_ADK_TXN_CTLS_L1_ERR                    0xFA 
#define    EMV_ADK_TXN_CTLS_MOBILE                    0xFB 
#define    EMV_ADK_TXN_CTLS_EMPTY_LIST                0xFC 
#define    EMV_ADK_TXN_EMPTY_LIST  EMV_ADK_TXN_CTLS_EMPTY_LIST 
#define    EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD        0xFD 
#define    EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE    0xFE 
#define    EMV_ADK_CONTINUE                           0xFF 


// ========================================================================================================
// === CONFIGURATION DEFINES ===
// ========================================================================================================

typedef unsigned char EMV_ADK_VIRTUALTERMMAP_TYPE;  
  #define EMV_ADK_VIRTUALTERMMAP_APPEND       0x01  
  #define EMV_ADK_VIRTUALTERMMAP_DELETE_ALL   0x20  


typedef unsigned char EMV_ADK_READAPPLI_TYPE; 
  #define EMV_ADK_READ_AID       0                  
  #define EMV_ADK_READ_FIRST     1                  
  #define EMV_ADK_READ_NEXT      2                  
  #define EMV_ADK_READ_MAX_APPLI 3                  


typedef unsigned char EMV_ADK_HANDLE_RECORD_TYPE; 
  #define EMV_ADK_SET_ONE_RECORD      1                  
  #define EMV_ADK_SET_TWO_RECORDS     2                  
  #define EMV_ADK_SET_THREE_RECORDS   3                  
  #define EMV_ADK_SET_FOUR_RECORDS    4                  
  #define EMV_ADK_SET_FIVE_RECORDS    5                  
  #define EMV_ADK_CLEAR_ONE_RECORD    0x10               
  #define EMV_ADK_CLEAR_ALL_RECORDS   0x20               
  #define EMV_ADK_FORCE_NEW_PARAMSET  0x30               

  #define EMV_ADK_TEMP_UPDATE         0xF0               

#define EMV_ADK_ADD_TAG_SIZE        255        
#define EMV_ADK_DEBUG_DATA_SIZE     32         


#define  EMV_ADK_EMV_ADK_MANUAL_REVERSAL_BYTE         0   
#define  EMV_ADK_MANUAL_REVERSAL_NIBBLE       >> 4 & 0x0F 
#define  EMV_ADK_REFUND_BYTE                  0           
#define  EMV_ADK_REFUND_NIBBLE                & 0x0F      

#define  EMV_ADK_EMV_ADK_RESERVATION_BYTE             1   
#define  EMV_ADK_RESERVATION_NIBBLE           >> 4 & 0x0F 
#define  EMV_ADK_TIP_BYTE                     1           
#define  EMV_ADK_TIP_NIBBLE                   & 0x0F      

#define  EMV_ADK_REFERRAL_BYTE                2           
#define  EMV_ADK_REFERRAL_NIBBLE              >> 4 & 0x0F 
#define  EMV_ADK_VOICEAUT_BYTE                2           
#define  EMV_ADK_VOICEAUT_NIBBLE              & 0x0F      

#define  EMV_ADK_RFU_MODE_BYTE                3           
#define  EMV_ADK_RFU_MODE_NIBBLE              >> 4 & 0x0F 
#define  EMV_ADK_FALLBACK_AFTER_CVM_BYTE      3           
#define  EMV_ADK_FALLBACK_AFTER_CVM_NIBBLE    & 0x0F      

#define  EMV_ADK_IGNORE_CARD_ERROR_BYTE       4           
#define  EMV_ADK_IGNORE_CARD_ERROR_NIBBLE     >> 4 & 0x0F 

/* ------------------------------------------- */

#define  EMV_ADK_MANUAL_REVERSAL_NO           0 
#define  EMV_ADK_MANUAL_REVERSAL_A            1 
#define  EMV_ADK_MANUAL_REVERSAL_B            2 
#define  EMV_ADK_REFUND_NO                    0 
#define  EMV_ADK_REFUND_YES                   1 

#define  EMV_ADK_RESERVATION_NO               0 
#define  EMV_ADK_RESERVATION_A                1 
#define  EMV_ADK_RESERVATION_A_PLUS           2 
#define  EMV_ADK_RESERVATION_B                3 
#define  EMV_ADK_RESERVATION_B_PLUS           4 
#define  EMV_ADK_RESERVATION_B_OFFLINE        5 

#define  EMV_ADK_TIP_NO                       0 
#define  EMV_ADK_TIP_YES                      1 
#define  EMV_ADK_TIP_MODE_TIPPABLE            1 
#define  EMV_ADK_TIP_MODE_MIXED               2 
#define  EMV_ADK_TIP_MODE_INPUT               3 
#define  EMV_ADK_TIP_NON_REFUSED              3 

#define  EMV_ADK_REFERRAL_NO                  0 
#define  EMV_ADK_REFERRAL_YES                 1 

#define  EMV_ADK_VOICE_NO                     0 
#define  EMV_ADK_VOICE_YES                    1 

#define  EMV_ADK_FALLBACK_AFTER_CVM_NO        0 
#define  EMV_ADK_FALLBACK_AFTER_CVM_YES       1 

#define  EMV_ADK_IGNORE_CARD_ERROR_NO         0 
#define  EMV_ADK_IGNORE_CARD_ERROR_YES        1 

#define  EMV_ADK_TRX_CONFIG_DEFAULT           "\x21\x20\x11\x00\x00\x00\x00\x00" 


// ========================================================================================================
// === TEXTS AND LANGUAGES ===
// ========================================================================================================

// === EMV_ADK_TXT_TYPE ===
typedef struct
{
  unsigned char   byLanguage;
  unsigned char   byTxt1;
  unsigned char   byTxt2;
} EMV_ADK_TXT_TYPE;

#define EMV_ADK_TXT_NO_TXT              0x00  
#define EMV_ADK_TXT_REFUND_CONF_AMOUNT  0x01  
#define EMV_ADK_TXT_AMOUNT              0x02  
#define EMV_ADK_TXT_3AMO_TIP            0xA1  
#define EMV_ADK_TXT_3AMO_CASHBACK       0xA2  
#define EMV_ADK_TXT_APPROVED            0x03  
#define EMV_ADK_TXT_AUTH_APPROVED       0xA3  
#define EMV_ADK_TXT_DECLINED            0x04  
#define EMV_ADK_TXT_AUTH_DECLINED       0xA4  
#define EMV_ADK_TXT_NOT_ACCEPTED        0x05  
#define EMV_ADK_TXT_CARD_ERROR          0x06  
#define EMV_ADK_TXT_PROCESSING_ERROR    0x07  
#define EMV_ADK_TXT_CARD_READ_OK        0x08  
#define EMV_ADK_TXT_AUTHORIZING         0x09  
#define EMV_ADK_TXT_REMOVE_CARD         0x10  
#define EMV_ADK_TXT_USE_CHIP_READER     0x11  
#define EMV_ADK_TXT_USE_MAG_STRIPE      0x12  
#define EMV_ADK_TXT_VOICEAUT            0x13  
#define EMV_ADK_TXT_SEE_PHONE           0x14  
#define EMV_ADK_TXT_RETAP_SAME          0x15  
#define EMV_ADK_TXT_RETAP_SAME_L1       0x16  
#define EMV_ADK_TXT_2_CARDS_IN_FIELD    0x17  
#define EMV_ADK_TXT_CARD_READ_COMPLETE  0x18  

#define EMV_ADK_LANG_NO_LANG            0x00 
#define EMV_ADK_LANG_ENGLISH            0x01 
#define EMV_ADK_LANG_GERMAN             0x02 
#define EMV_ADK_LANG_FRENCH             0x03 
#define EMV_ADK_LANG_SPANISH            0x04 
#define EMV_ADK_LANG_ITALIAN            0x05 
#define EMV_ADK_LANG_CZECH              0x06 
#define EMV_ADK_LANG_SLOVAK             0x07 
#define EMV_ADK_LANG_SWEDISH            0x08 
#define EMV_ADK_LANG_POLISH             0x09 
#define EMV_ADK_LANG_GREEK              0x0A 
#define EMV_ADK_LANG_TURKISH            0x0B 
#define EMV_ADK_LANG_DANSK              0x0C 
#define EMV_ADK_LANG_DUTCH              0x0D 
#define EMV_ADK_LANG_NORWEGIAN          0x0E 
#define EMV_ADK_LANG_PORTUGUESE         0x0F 
#define EMV_ADK_LANG_AUSTRIAN           0x10 
#define EMV_ADK_LANG_ESTONIAN           0x11 
#define EMV_ADK_LANG_FINNISH            0x12 
#define EMV_ADK_LANG_LATVIA             0x13 
#define EMV_ADK_LANG_LITHUANIA          0x14 
#define EMV_ADK_LANG_RUSSIAN            0x15 
#define EMV_ADK_LANG_BULGARIAN          0x16 
#define EMV_ADK_LANG_CROATIAN           0x17 
#define EMV_ADK_LANG_HUNGARIAN          0x18 
#define EMV_ADK_LANG_MOLDAVIAN          0x19 
#define EMV_ADK_LANG_ROMANIAN           0x1A 
#define EMV_ADK_LANG_SERBIAN            0x1B 
#define EMV_ADK_LANG_SLOVENIAN          0x1C 
#define EMV_ADK_LANG_HEBREW             0x1D 
#define EMV_ADK_LANG_UNKNOWN            0xFF 


// ========================================================================================================
// === COMMON TRANSACTION, TERMINAL AND ICC DEFINES ===
// ========================================================================================================

  #define EMV_ADK_TT_BANK_ATTENDED_ONL_ONLY             0x11 
  #define EMV_ADK_TT_BANK_ATTENDED_OFFL_ONL             0x12 
  #define EMV_ADK_TT_BANK_ATTENDED_OFFL_ONLY            0x13 
  #define EMV_ADK_TT_BANK_UNATTENDED_ONL_ONLY           0x14 
  #define EMV_ADK_TT_BANK_UNATTENDED_OFFL_ONL           0x15 
  #define EMV_ADK_TT_BANK_UNATTENDED_OFFL_ONLY          0x16 
  #define EMV_ADK_TT_ATTENDED_ONL_ONLY                  0x21 
  #define EMV_ADK_TT_ATTENDED_OFFL_ONL                  0x22 
  #define EMV_ADK_TT_ATTENDED_OFFL_ONLY                 0x23 
  #define EMV_ADK_TT_UNATTENDED_ONL_ONLY                0x24 
  #define EMV_ADK_TT_UNATTENDED_OFFL_ONL                0x25 
  #define EMV_ADK_TT_UNATTENDED_OFFL_ONLY               0x26 
  #define EMV_ADK_TT_CRDHC_UNATTENDED_ONL_ONLY          0x34 
  #define EMV_ADK_TT_CRDHC_UNATTENDED_OFFL_ONL          0x35 
  #define EMV_ADK_TT_CRDHC_UNATTENDED_OFFL_ONLY         0x36 


  #define EMV_ADK_TRAN_TYPE_GOODS_SERVICE         0x00  
  #define EMV_ADK_TRAN_TYPE_CASH                  0x01  
  #define EMV_ADK_TRAN_TYPE_CASHBACK              0x09  
  #define EMV_ADK_TRAN_TYPE_VISA_QUASI_CASH       0x11  
  #define EMV_ADK_TRAN_TYPE_MANUAL_CASH           0x12  
  #define EMV_ADK_TRAN_TYPE_MASTERCARD_CASH       0x17  
  #define EMV_ADK_TRAN_TYPE_REFUND                0x20  
  #define EMV_ADK_TRAN_TYPE_AMEX_PREAUTH          0x30  
//----------------------------------------
  #define EMV_ADK_TRAN_TYPE_INTERNAL_LIMIT        0x99
//----------------------------------------
  #define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A    0xF0  
  #define EMV_ADK_TRAN_TYPE_INCREMENT_A           0xF1  
  #define EMV_ADK_TRAN_TYPE_ERHOEHUNG_A           EMV_ADK_TRAN_TYPE_INCREMENT_A  
  #define EMV_ADK_TRAN_TYPE_BOOKING_A             0xF2  
  #define EMV_ADK_TRAN_TYPE_BUCHUNG_A             EMV_ADK_TRAN_TYPE_BOOKING_A  
  #define EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B    0xF3  
  #define EMV_ADK_TRAN_TYPE_INCREMENT_B           0xF4  
  #define EMV_ADK_TRAN_TYPE_ERHOEHUNG_B           EMV_ADK_TRAN_TYPE_INCREMENT_B  
  #define EMV_ADK_TRAN_TYPE_BOOKING_B             0xF5  
  #define EMV_ADK_TRAN_TYPE_BUCHUNG_B             EMV_ADK_TRAN_TYPE_BOOKING_B  
  #define EMV_ADK_TRAN_TYPE_TIP                   0xE0  
  #define EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL       0xD0  
  #define EMV_ADK_TRAN_TYPE_APPROVAL_PHONE        0xD1  
  #define EMV_ADK_TRAN_TYPE_READ_CARD_LOG         0xD2  
  #define EMV_ADK_TRAN_TYPE_READ_CARD_DATA        0xD3  
  #define EMV_ADK_TRAN_TYPE_TRANSIT               0xD4  
  #define EMV_ADK_TRAN_TYPE_REPEAT_ONLINE_PIN     0xC0  
  #define EMV_ADK_TRAN_TYPE_REPEAT_AMOUNT_CHANGE  0xB0  
  #define EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT  0xA0  
  #define EMV_ADK_TRAN_TYPE_REPEAT_TRX_DCC        0xA1  

  #define EMV_ADK_CARD_REQUESTS_ADVICE          0x08 
  #define EMV_ADK_CARD_ADDITIONAL_INFO          0x07 


#define EMV_ADK_SI_ONLINE_PIN_REQUIRED    0x00000001u  
#define EMV_ADK_SI_SIGNATURE_REQUIRED     0x00000002u  
#define EMV_ADK_SI_FORCED_ACCEPTANCE      0x00000004u  
#define EMV_ADK_SI_USER_DEFINED_CVM       0x00000008u  
#define EMV_ADK_SI_ON_DEVICE_CVM          0x00000010u  
#define EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL 0x00000080u  
#define EMV_ADK_SI_GICC_TIPPABLE          0x00000100u  
#define EMV_ADK_SI_PTC_EXCEEDED           0x00000200u  
#define EMV_ADK_SI_PIN_FAILURE            0x00000400u  
#define EMV_ADK_SI_CONTACTLESS_CHIP       0x00000800u  
#define EMV_ADK_SI_CONTACTLESS_MSR        0x00001000u  
#define EMV_ADK_SI_TORN_CREATED           0x00002000u  
#define EMV_ADK_SI_TORN_TRY_RECOVER       0x00004000u  
#define EMV_ADK_SI_CONTACTLESS_WAITING    0x00008000u  
#define EMV_ADK_SI_CONTACT_ONGOING        0x00008000u  
#define EMV_ADK_SI_CTLS_LONG_TAP          0x00010000u  
#define EMV_ADK_SI_ARQC_RESTART_ANY       0x00020000u  
#define EMV_ADK_SI_ARQC_RESTART_UTGO      0x00040000u  
#define EMV_ADK_SI_CONSUMER_DEVICE        0x00080000u  
#define EMV_ADK_SI_CONTACTLESS_ONLY       0x00100000u  
#define EMV_ADK_SI_OUTCOME_CD_CVM         0x00200000u  
#define EMV_ADK_SI_OUTCOME_RECEIPT        0x00400000u  
#define EMV_ADK_SI_WRITE_DS_FAILED        0x00800000u  
#define EMV_ADK_SI_ARQC_RESTART_FORBIDDEN 0x01000000u  
#define EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD 0x02000000u  
#define EMV_ADK_SI_TRANSIT_APPROVED       0x04000000u  


#define EMV_ADK_SMART_STATUS_OK         0  
#define EMV_ADK_SMART_STATUS_REMOVED    1  
#define EMV_ADK_SMART_STATUS_OVERFLOW   2  
#define EMV_ADK_SMART_STATUS_EXCHG_ERR  3  
#define EMV_ADK_SMART_TWO_CARDS         4  
#define EMV_ADK_SMART_ERR_INIT          5  
#define EMV_ADK_SMART_INV_PARAM         6  
#define EMV_ADK_SMART_WRONG_ATR         7  

#define EMV_ADK_FETCHTAGS_NO_EMPTY   (1 << 0)  
#define EMV_ADK_FETCHTAGS_KERNEL     (1 << 1)  
#define EMV_ADK_FETCHTAGS_ADK        (1 << 2)  
#define EMV_ADK_FETCHTAGS_KERNEL_PRV (1 << 3)  
#define EMV_ADK_FETCHTAGS_GET_DATA   (1 << 4)  

#define EMV_ADK_UPDATETAGS_ERROR_ON_NOT_ALLOWED_TAG  (1 << 0)  

enum EMV_CLIENT_MODE
{
    EMV_CLIENT_MODE_LIBRARY, 
    EMV_CLIENT_MODE_SERVER,  
    EMV_CLIENT_MODE_GATEWAY, 
    EMV_CLIENT_MODE_SDI      
};

// ========================================================================================================
// === END OF COMMON PART ===
// ========================================================================================================

#ifdef __cplusplus
}     // extern "C"
#endif

#endif  // #ifndef EMVCTRL_COMMON_H
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

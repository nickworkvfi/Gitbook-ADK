---
title: Constructed tags for callback functions
summary: Used in EMV_CTLS_CALLBACK_FnT. 

---

# Constructed tags for callback functions

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt).  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
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

## Detailed Description

Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt). 

Used in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt).

The tag determines which callback function is to be used. Data is enclosed inside this contructed tag. Detailed Description uses following convention: 
** INPUT: ** This is what Application gets from the Framework 
** OUTPUT: ** This is what Application is supposed to send back 




## Macros Documentation

### define TAG_BF0B_INIT_CALLBACK_THREAD

```
#define TAG_BF0B_INIT_CALLBACK_THREAD 0xBF0B
```

Signals the creation of the "notification callback thread" (inside `libEMV_CTLS_Link.so`) 

Data provided by Framework via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback) is relayed. 

 When thread is stopped [TAG_BF0F_EXIT_CALLBACK_THREAD](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0f-exit-callback-thread) is sent. 

** INPUT: **&mdash;
** OUTPUT: **&mdash; (notify, not generated in FW, but in client) 


### define TAG_BF0C_CTLS_CBK_APP_SELECTED

```
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

```
#define TAG_BF0E_CBK_DATA_EXCHANGE 0xBF0E
```

PayPass3 DataExchange. 

DataExchange can be enabled by [EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-enable-data-exchange-0)

** INPUT: **[TAG_DF8F58_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8f58-de-request), [TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id), [TAG_DFAB01_KERNEL_ID](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab01-kernel-id), [TAG_FF8104_DE_DATA_TO_SEND](group___m_c___t_a_g_s.md#define-tag-ff8104-de-data-to-send), [TAG_DF8106_DE_DATA_NEEDED](group___m_c___t_a_g_s.md#define-tag-df8106-de-data-needed), [TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state)
** OUTPUT: **[TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode), [TAG_FF10_DE_DET_DATA](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-ff10-de-det-data)


### define TAG_BF0F_EXIT_CALLBACK_THREAD

```
#define TAG_BF0F_EXIT_CALLBACK_THREAD 0xBF0F
```

Signals the stop of the "notification callback thread" (inside `libEMV_CTLS_Link.so`) 

This thread was created at [TAG_BF0B_INIT_CALLBACK_THREAD](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0b-init-callback-thread). 

** INPUT: **&mdash;
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define TAG_BF10_CTLS_CBK_LEDS

```
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

```
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

```
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

```
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

```
#define TAG_BF15_CBK_CARD_TAPPED 0xBF15
```

Notification that a card was detected. 

Calling application shall invoke [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) to fetch transaction results. 

 Is only called in polling mode ([EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout) != 0). 

** INPUT: ** result of internally called [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) (see [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info), used tag: [TAG_DF42_STATUS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df42-status)) 
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define TAG_BF16_CBK_SERVICE_SHORTLIST

```
#define TAG_BF16_CBK_SERVICE_SHORTLIST 0xBF16
```

RuPay callback before GPO. 

This allows the application to forward RuPay parameters during the transaction to the card. 

 "Service Directory" and perform "Service Shortlisting". Service supported both by Card & terminal is selected. 

** INPUT: ** Card Data - Service Info from Card in [TAG_DF8F50_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8f50-rupay-gpo)
** OUTPUT: ** Application Data - Selected Service ID in [TAG_DF8F50_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8f50-rupay-gpo)


### define TAG_BF17_CBK_SERVICE_FOR_GENAC

```
#define TAG_BF17_CBK_SERVICE_FOR_GENAC 0xBF17
```

RuPay callback before Generate AC. 

This allows the application to forward RuPay parameters during the transaction to the card. 

** INPUT: ** Card Data - Signature Info from Card in [TAG_DF8F51_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8f51-rupay-genac)
** OUTPUT: ** Application Data - Additional CDOL1 Tags in [TAG_DF8F51_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8f51-rupay-genac)


### define TAG_BF18_CBK_PURE_GET_PUT_DATA

```
#define TAG_BF18_CBK_PURE_GET_PUT_DATA 0xBF18
```

Gemalto/Pure: provide GET DATA and/or PUT DATA input. 

Is invoked after selection of Gemalto application. 

 Depends on [EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-getdata-0) and [EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-putdata-0)

** INPUT: **&mdash;
** OUTPUT: ** GET DATA input (MSRT, [TAG_BF71_PURE_GET_DATA_MSRT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-bf71-pure-get-data-msrt)) and/or PUT DATA input (MSUT, [TAG_BF70_PURE_PUT_DATA_MSUT](group___g_e_m_a_l_t_o___t_a_g_s.md#define-tag-bf70-pure-put-data-msut)) 


### define TAG_BF19_CTLS_CBK_BEEP

```
#define TAG_BF19_CTLS_CBK_BEEP 0xBF19
```

Application shall sound the buzzer. 

Depends on [EMV_CTLS_INIT_OPT_BEEP_CBK_EXT](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-beep-cbk-ext)

** INPUT: **[TAG_CB_BEEP_SCENARIO](group___v_e_r_i___t_a_g_s.md#define-tag-cb-beep-scenario) (e.g. [EMV_CTLS_BEEP_SUCCESS](group___a_d_k___b_u_z_z_e_r.md#define-emv-ctls-beep-success)) 
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define TAG_BF7F_CTLS_CBK_TRACE

```
#define TAG_BF7F_CTLS_CBK_TRACE 0xBF7F
```

Traces. 

For special use. For standard use ADK-LOG. See also [Traces]

 Invoked depending on [EMV_CTLS_INIT_OPT_TRACE](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-trace)

 Sent by the "notification callback thread". 

** INPUT: ** ASCII Trace ([TAG_TRACE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-trace)) 
** OUTPUT: **&mdash; (notify via [EMV_CTLS_HandleCallback()](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)) 


### define TAG_BF01_CBK_MERCHINFO

```
#define TAG_BF01_CBK_MERCHINFO 0xBF01
```

Transaction progress information for the merchant. 

For valid values see [Defines for callback function "put merchant information"](group___m_e_r_c_h___i_n_f_o.md)

 Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [EMV_CT_TRXOP_MERCHINFO_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-merchinfo-callback). 
** INPUT: **
[TAG_DF70_CBK_MERCHINFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df70-cbk-merchinfo): Transaction Info for merchant 
** OUTPUT: **&ndash;


### define TAG_BF02_CBK_AMOUNTCONF

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
#define TAG_BF09_CBK_CARDHOLDERINFO 0xBF09
```

A text information has to be displayed to the cardholder. 

Called depending on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [EMV_CT_TRXOP_CARDHINFO_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-cardhinfo-callback)

 Possible values: see [Defines for callback function "cardholder information"](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md)
** INPUT: **
[TAG_DF6E_CBK_CARDHOLDERINFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6e-cbk-cardholderinfo): Transaction Info for cardholder 
** OUTPUT: **&ndash;


### define TAG_BF7F_CBK_TRACE

```
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

```
#define TAG_BF13_CBK_RND 0xBF13
```

Random number provided by the calling application. 

**Deprecated**: 

not supported anymore 

Usually the EMV ADK resp. L2 kernel uses the OS functionality for getting a random number. 

 Only for velocity kernel, invoked depending on [CLTRXOP_RND_CALLBACK](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-rnd-callback). 

** INPUT: ** none 
** OUTPUT: ** Random number from app ([TAG_9F37_UNPREDICTABLE_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f37-unpredictable-nb)) 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
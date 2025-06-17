---
title: ADK return codes

---

# ADK return codes

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)**



## Types

|                | Name           |
| -------------- | -------------- |
| typedef unsigned char | **[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info)** <br>type of return code  |

## Defines

|                | Name           |
| -------------- | -------------- |
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
|  | **[EMV_ADK_CANCELLED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-cancelled)** <br>Contactless only    Transaction was cancelled by [EMV_CTLS_Break()]() |
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
|  | **[EMV_ADK_NOAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-noapp)** <br>CT: Return code if application not found by [EMV_CT_CheckSupportedAID()]().    CTLS: Empty terminal candidate list (e.g. all application's ceiling limits exceeded) at [EMV_CTLS_SetupTransaction()]().  |
|  | **[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec)** <br>CT & CTLS: not executable.  |
|  | **[EMV_ADK_ARQC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-arqc)** <br>CT & CTLS: Transaction must be performed online.  |
|  | **[EMV_ADK_TC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tc)** <br>CT & CTLS: Transaction performed (offline / online)  |
|  | **[EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac)** <br>CT & CTLS: Transaction declined.  |
|  | **[EMV_ADK_AAR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aar)** <br>CT: Transaction cancellation (former "card referral"), not used anymore.  |
|  | **[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param)** <br>CT & CTLS: Parameter error (wrong parameter was passed to the function)  |
|  | **[EMV_ADK_CARDERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-carderr)** <br>CT & CTLS: Proprietary card error (actually converted to [EMV_ADK_FALLBACK]())  |
|  | **[EMV_ADK_BADAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-badapp)** <br>CT: Repeat EMV_Select function call-up because selected application on the proprietary card is erroneous. The currently selected application must be transferred (not NO_APPLI) -> this leads to new application selection but the candidate list is not reconstructed.  |
|  | **[EMV_ADK_CVM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-cvm)** <br>CT: User abort during PIN input (cancel button, timeout, card removed)  |
|  | **[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort)** <br>On transaction function it means that current transaction must be aborted.    On configuration function it represents "failed".  |
|  | **[EMV_ADK_CARD_BLOCKED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-card-blocked)** <br>CT & CTLS: Blocked card, regional dependent if fallback to magstripe should be done.  |
|  | **[EMV_ADK_CARDERR_FORMAT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-carderr-format)** <br>Card error e.g. erroneous TLV coding, incorrect data -> no transaction cancellation.  |
|  | **[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal)** <br>CT & CTLS: e.g. erroneous communication to PINPad, internal error, not (completely) initialized (function not allowed due to [EMV_CT_Init_Framework()]() with `[EMV_CT_INIT_OPT_BASE_INIT()]()`)  |
|  | **[EMV_ADK_ONLINE_PIN_RETRY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-online-pin-retry)** <br>CT: Online PIN reentered (PIN check).  [EMV_CT_ContinueOnline()]()will return this value in the following scenario: Online PIN was entered. Host returned "PIN wrong".    Calling application must contact host again. And afterwards call [EMV_CT_ContinueOnline()]()once again.  |
|  | **[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error)** <br>Writing config files failed. ANSI C functions fopen(), fwrite(), or fclose() gave back error. Make sure that file access rights are setup correctly.  |
|  | **[EMV_ADK_APP_BLOCKED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-blocked)** <br>Application blocked: AID evaluation at fallback, no global fallback because it is not allowed for this special blocked application.  |
|  | **[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error)** <br>Error while reading EMV configuration.  |
|  | **[EMV_ADK_ERR_HSM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-err-hsm)** <br>E.g. erroneous communication to PINPad, internal error, not used anymore.  |
|  | **[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err)** <br>CT & CTLS: Error in TLV data object = internal error.  |
|  | **[EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback)** <br>CT & CTLS: Fallback to chip/msr (for CTLS) respectively magstripe (for CT) must be done.  |
|  | **[EMV_ADK_ONL_PIN_REPEAT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-onl-pin-repeat)** <br>CT: wrong Online-PIN, repeat transaction (reduced) beginning with [EMV_CT_StartTransaction()]() |
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

## Types Documentation

### typedef EMV_ADK_INFO

```
typedef unsigned char EMV_ADK_INFO;
```

type of return code 




## Macros Documentation

### define EMV_ADK_OK

```
#define EMV_ADK_OK 0
```

Function successful, no error. 

[EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline): This return value indicates successful outcome for card read transaction (e.g. [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund), [EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-reversal), [EMV_ADK_TRAN_TYPE_BUCHUNG_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-buchung-b)) 


### define EMV_ADK_APP_REQ_START

```
#define EMV_ADK_APP_REQ_START 0xA0
```

CT Reentrance mode: Application requested return start reserved codes. 

### define EMV_ADK_APP_REQ_CANDIDATE

```
#define EMV_ADK_APP_REQ_CANDIDATE 0xA1
```

CT Reentrance mode: Application requested return application selection. 

### define EMV_ADK_APP_REQ_READREC

```
#define EMV_ADK_APP_REQ_READREC 0xA2
```

CT Reentrance mode: Application requested return read records. 

### define EMV_ADK_APP_REQ_DATAAUTH

```
#define EMV_ADK_APP_REQ_DATAAUTH 0xA3
```

CT Reentrance mode: Application requested return data authentication. 

### define EMV_ADK_APP_REQ_ONL_PIN

```
#define EMV_ADK_APP_REQ_ONL_PIN 0xA4
```

CT Reentrance mode: Application requested return for online PIN entry. 

### define EMV_ADK_APP_REQ_OFL_PIN

```
#define EMV_ADK_APP_REQ_OFL_PIN 0xA5
```

CT Reentrance mode: Application requested return for offline PIN entry. 

### define EMV_ADK_APP_REQ_PLAIN_PIN

```
#define EMV_ADK_APP_REQ_PLAIN_PIN 0xA6
```

CT Reentrance mode: Application requested return for plaintext PIN entry. 

### define EMV_ADK_APP_REQ_CVM_END

```
#define EMV_ADK_APP_REQ_CVM_END 0xA7
```

CT Reentrance mode: Application requested return cardholder verification. 

### define EMV_ADK_APP_REQ_RISK_MAN

```
#define EMV_ADK_APP_REQ_RISK_MAN 0xA8
```

CT Reentrance mode: Application requested return riskmanagement. 

### define EMV_ADK_APP_REQ_CUST_CVM

```
#define EMV_ADK_APP_REQ_CUST_CVM 0xA9
```

CT Reentrance mode: Application requested return for customCVM method. 

### define EMV_ADK_APP_REQ_APPS_PREPROC

```
#define EMV_ADK_APP_REQ_APPS_PREPROC 0xAA
```

CT Reentrance mode: Application requested return for candidate list manipulation. 

### define EMV_ADK_APP_REQ_AFTER_GPO

```
#define EMV_ADK_APP_REQ_AFTER_GPO 0xAB
```

CT Reentrance mode: Application requested return for return after GPO. 

### define EMV_ADK_APP_REQ_BUILD_LIST

```
#define EMV_ADK_APP_REQ_BUILD_LIST 0xAC
```

CT Reentrance mode: Application requested return before terminal candidate list build. 

### define EMV_ADK_APP_REQ_END

```
#define EMV_ADK_APP_REQ_END 0xAF
```

CT Reentrance mode: Application requested return end of reserved codes. 

### define EMV_ADK_EMPTY_CONFIG

```
#define EMV_ADK_EMPTY_CONFIG 0xC6
```

Empty configuration. 

### define EMV_ADK_TERMINATE_CDCVM_RETRY

```
#define EMV_ADK_TERMINATE_CDCVM_RETRY 0xC7
```

DPAS CDCVM has not been performed. Terminate the transaction, prompt the Cardholder to remove the card, perform CDCVM, and try again. 

### define EMV_ADK_TIMEOUT

```
#define EMV_ADK_TIMEOUT 0xC8
```

Timeout. 

### define EMV_ADK_MAX_CFG_NUMBER_EXCEEDED

```
#define EMV_ADK_MAX_CFG_NUMBER_EXCEEDED 0xC9
```

CTLS: Number of keys uploaded to VFI Reader exceeded (appears when number of keys more than 99, all next keys are ignored) 

### define EMV_ADK_VFI_FAIL

```
#define EMV_ADK_VFI_FAIL 0xCA
```


VFI Reader "Fail" result. Transaction is terminated and application should decide about the final outcome (decline, fallback, try another card, etc...) based on the VFI Reader response data items (Error Code - SW1 - SW2 - RF State Code). This is returned only with VFI Reader and only if the Terminal Flow Option INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL is set, otherwise EMV_ADK_AAC is returned per default. 


### define EMV_ADK_CTLS_OFFLINE_PIN

```
#define EMV_ADK_CTLS_OFFLINE_PIN 0xCB
```

Transaction to be continued after PIN input for girocard (German debit card) Offline PIN CVM. 

### define EMV_ADK_NOT_ACCEPTED

```
#define EMV_ADK_NOT_ACCEPTED 0xCC
```

Transaction / Payment type not accepted. 

### define EMV_ADK_CANCELLED

```
#define EMV_ADK_CANCELLED 0xCD
```

Contactless only    Transaction was cancelled by [EMV_CTLS_Break()]()

### define EMV_ADK_CARD_LOG_LOG_OK

```
#define EMV_ADK_CARD_LOG_LOG_OK 0xCE
```

Return code for successful read of cards transaction log (currently qPBOC only) 

### define EMV_ADK_CTLS_LOW_BATTERY

```
#define EMV_ADK_CTLS_LOW_BATTERY 0xCF
```

Return code for EMV_CTLS_SetupTransaction indicating mobile device's battery too low for contactless transaction. 

### define EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF

```
#define EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF 0xD0
```

CTLS: The function is not allowed when using this config interface. 

### define EMV_ADK_VIRTTERMMAP_WRONG_INIT

```
#define EMV_ADK_VIRTTERMMAP_WRONG_INIT 0xD1
```

Virtual terminal map is configured, but transaction is started with virtual terminal != 0. 

### define EMV_ADK_TOO_MANY_TAPS

```
#define EMV_ADK_TOO_MANY_TAPS 0xD2
```

CTLS: card holder exceeded the number of taps allowed for one transaction (Interac to show "Cannot Process transaction - too many taps") 

### define EMV_ADK_CAN_NOT_PROCESS

```
#define EMV_ADK_CAN_NOT_PROCESS 0xD3
```

(will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported) 

CTLS: card can't be processed, e.g. PIN required in CTLS Interac but CT not available 


### define EMV_ADK_USE_ANOTHER_CTLS_CARD

```
#define EMV_ADK_USE_ANOTHER_CTLS_CARD 0xD4
```

CTLS: advice the customer to use another CTLS card (will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported) 

### define EMV_ADK_USE_OTHER_TERMINAL

```
#define EMV_ADK_USE_OTHER_TERMINAL 0xD5
```

CTLS: advice the merchant to use another terminal to process the transaction (Interac spec requirement) 

### define EMV_ADK_SCRIPT_PROCESSING_COMPLETE

```
#define EMV_ADK_SCRIPT_PROCESSING_COMPLETE 0xD6
```

CTLS: explicit script processing completed (CTLS, e.g. Discover DPAS) 

### define EMV_ADK_FALLBACK_CHIP_ONLY

```
#define EMV_ADK_FALLBACK_CHIP_ONLY 0xD7
```

CTLS: Fallback to chip (CTLS), no msr allowed. 

### define EMV_ADK_READER_CMD_NOT_ALLOWED

```
#define EMV_ADK_READER_CMD_NOT_ALLOWED 0xD8
```


Contacless only 

 VFI-Reader: Returned by [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) and [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) if VFI-Reader responds to "Activate Transaction" with "Command not allowed". This happens if VFI-Reader has not yet finished last transaction, e.g. is still waiting for ContinueOnline. 


### define EMV_ADK_NOT_ALLOWED

```
#define EMV_ADK_NOT_ALLOWED 0xD9
```

Parallel function call not allowed. 

### define EMV_ADK_CTLS_NOT_AVAILABLE

```
#define EMV_ADK_CTLS_NOT_AVAILABLE 0xDA
```

CTLS not present on hardware per OS information. 

### define EMV_ADK_USR_BCKSPC_KEY_PRESSED

```
#define EMV_ADK_USR_BCKSPC_KEY_PRESSED 0xDB
```

Application requested return for E_USR_BACKSPACE_KEY_PRESSED, not used anymore. 

### define EMV_ADK_CEILING_LIMIT

```
#define EMV_ADK_CEILING_LIMIT 0xDC
```

CTLS: amount is above the ceiling limit for CTLS (either terminal ceiling limit or highest scheme ceiling limit) 

### define EMV_ADK_CTLS_RETAP_SAME

```
#define EMV_ADK_CTLS_RETAP_SAME 0xDD
```

CTLS: start over with re-tapping the same card (deactivation/activation/start txn) 

### define EMV_ADK_CTLS_DOMESTIC_APP

```
#define EMV_ADK_CTLS_DOMESTIC_APP 0xDE
```

CTLS: Domestic Application Kernel selected. 

### define EMV_ADK_NO_CARD

```
#define EMV_ADK_NO_CARD 0xDF
```

CTLS: No card processing so far. 

### define EMV_ADK_NOAPP

```
#define EMV_ADK_NOAPP 0xE0
```

CT: Return code if application not found by [EMV_CT_CheckSupportedAID()]().    CTLS: Empty terminal candidate list (e.g. all application's ceiling limits exceeded) at [EMV_CTLS_SetupTransaction()](). 

### define EMV_ADK_NO_EXEC

```
#define EMV_ADK_NO_EXEC 0xE1
```

CT & CTLS: not executable. 

### define EMV_ADK_ARQC

```
#define EMV_ADK_ARQC 0xE2
```

CT & CTLS: Transaction must be performed online. 

### define EMV_ADK_TC

```
#define EMV_ADK_TC 0xE3
```

CT & CTLS: Transaction performed (offline / online) 

### define EMV_ADK_AAC

```
#define EMV_ADK_AAC 0xE4
```

CT & CTLS: Transaction declined. 

### define EMV_ADK_AAR

```
#define EMV_ADK_AAR 0xE5
```

CT: Transaction cancellation (former "card referral"), not used anymore. 

### define EMV_ADK_PARAM

```
#define EMV_ADK_PARAM 0xE6
```

CT & CTLS: Parameter error (wrong parameter was passed to the function) 

### define EMV_ADK_CARDERR

```
#define EMV_ADK_CARDERR 0xE7
```

CT & CTLS: Proprietary card error (actually converted to [EMV_ADK_FALLBACK]()) 

### define EMV_ADK_BADAPP

```
#define EMV_ADK_BADAPP 0xE8
```

CT: Repeat EMV_Select function call-up because selected application on the proprietary card is erroneous. The currently selected application must be transferred (not NO_APPLI) -> this leads to new application selection but the candidate list is not reconstructed. 

### define EMV_ADK_CVM

```
#define EMV_ADK_CVM 0xE9
```

CT: User abort during PIN input (cancel button, timeout, card removed) 

### define EMV_ADK_ABORT

```
#define EMV_ADK_ABORT 0xEA
```

On transaction function it means that current transaction must be aborted.    On configuration function it represents "failed". 

### define EMV_ADK_CARD_BLOCKED

```
#define EMV_ADK_CARD_BLOCKED 0xEB
```

CT & CTLS: Blocked card, regional dependent if fallback to magstripe should be done. 

### define EMV_ADK_CARDERR_FORMAT

```
#define EMV_ADK_CARDERR_FORMAT 0xEC
```

Card error e.g. erroneous TLV coding, incorrect data -> no transaction cancellation. 

### define EMV_ADK_INTERNAL

```
#define EMV_ADK_INTERNAL 0xED
```

CT & CTLS: e.g. erroneous communication to PINPad, internal error, not (completely) initialized (function not allowed due to [EMV_CT_Init_Framework()]() with `[EMV_CT_INIT_OPT_BASE_INIT()]()`) 

### define EMV_ADK_ONLINE_PIN_RETRY

```
#define EMV_ADK_ONLINE_PIN_RETRY 0xEE
```

CT: Online PIN reentered (PIN check).  [EMV_CT_ContinueOnline()]()will return this value in the following scenario: Online PIN was entered. Host returned "PIN wrong".    Calling application must contact host again. And afterwards call [EMV_CT_ContinueOnline()]()once again. 

### define EMV_ADK_SAVE_ERROR

```
#define EMV_ADK_SAVE_ERROR 0xEF
```

Writing config files failed. ANSI C functions fopen(), fwrite(), or fclose() gave back error. Make sure that file access rights are setup correctly. 

### define EMV_ADK_APP_BLOCKED

```
#define EMV_ADK_APP_BLOCKED 0xF0
```

Application blocked: AID evaluation at fallback, no global fallback because it is not allowed for this special blocked application. 

### define EMV_ADK_READ_ERROR

```
#define EMV_ADK_READ_ERROR 0xF1
```

Error while reading EMV configuration. 

### define EMV_ADK_ERR_HSM

```
#define EMV_ADK_ERR_HSM 0xF2
```

E.g. erroneous communication to PINPad, internal error, not used anymore. 

### define EMV_ADK_TLV_BUILD_ERR

```
#define EMV_ADK_TLV_BUILD_ERR 0xF3
```

CT & CTLS: Error in TLV data object = internal error. 

### define EMV_ADK_FALLBACK

```
#define EMV_ADK_FALLBACK 0xF4
```

CT & CTLS: Fallback to chip/msr (for CTLS) respectively magstripe (for CT) must be done. 

### define EMV_ADK_ONL_PIN_REPEAT

```
#define EMV_ADK_ONL_PIN_REPEAT 0xF5
```

CT: wrong Online-PIN, repeat transaction (reduced) beginning with [EMV_CT_StartTransaction()]()

### define EMV_ADK_MAND_ELEM_MISSING

```
#define EMV_ADK_MAND_ELEM_MISSING 0xF6
```

CT: mandatory (TLV) element missing (EMV-configuration), not used anymore. 

### define EMV_ADK_INVALID_TERM_CAP

```
#define EMV_ADK_INVALID_TERM_CAP 0xF7
```

CT & CTLS: invalid terminal capabilities (EMV-configuration), not used anymore. 

### define EMV_ADK_REFERRAL

```
#define EMV_ADK_REFERRAL 0xF8
```

CT: a referral of the application decides if the TRX is approved or not. 

### define EMV_ADK_2_CTLS_CARDS

```
#define EMV_ADK_2_CTLS_CARDS 0xF9
```

CTLS: 2 CTLS cards in the field detected. If this is reported after a call to ContinueOffline 2 cards have been detected in the field. The transaction is terminated in this case and must be restarted with a new call of SetupTransaction. This is mandatory for the VFI-Reader ADK and optional (but works as well) for teh Velocity/VERTX based ADK. 

### define EMV_ADK_TXN_CTLS_L1_ERR

```
#define EMV_ADK_TXN_CTLS_L1_ERR 0xFA
```

CTLS: level 1 problem, retap necessary. 

### define EMV_ADK_TXN_CTLS_MOBILE

```
#define EMV_ADK_TXN_CTLS_MOBILE 0xFB
```

CTLS: mobile device, retap necessary. 

### define EMV_ADK_TXN_CTLS_EMPTY_LIST

```
#define EMV_ADK_TXN_CTLS_EMPTY_LIST 0xFC
```

CTLS: empty candidate list. The application shall display "please use other interface" and (depending on regional market requirements) additionally "or tap another card". 

### define EMV_ADK_TXN_EMPTY_LIST

```
#define EMV_ADK_TXN_EMPTY_LIST EMV_ADK_TXN_CTLS_EMPTY_LIST
```

CT & CTLS: Empty candidate List = no common application between card and terminal. For CT usually [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback) is returned in any case, card error and empty list. If the caller needs to distinguish these cases, she has to enable this return code via [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions) bit EMV_CT_SELOP_DETECT_EMPTY_LIST. 

### define EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD

```
#define EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD 0xFD
```

CTLS: insert, swipe or try another card. 

### define EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE

```
#define EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE 0xFE
```

CTLS: domestic not readable (no AID and EMV not configured) 

### define EMV_ADK_CONTINUE

```
#define EMV_ADK_CONTINUE 0xFF
```

CT & CTLS: Transaction can be continued (e.g. CTLS Commit) 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
---
title: Options for transaction processing
summary: Defines for EMV_CT_SELECT_STRUCT::TxnOptions, EMV_CT_TRANSAC_STRUCT::TxnOptions, EMV_CT_HOST_STRUCT::TxnOptions. 

---

# Options for transaction processing

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Defines for [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions), [EMV_CT_TRANSAC_STRUCT::TxnOptions](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnoptions), [EMV_CT_HOST_STRUCT::TxnOptions](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-txnoptions). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CT_SELOP_CBCK_APPLI_SEL](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-cbck-appli-sel)** <br>B1b1: Callback function for customer application selection [EMV_CT_CALLBACK_FnT]() ([TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand)) will be generated, if there are several application possible.    Depends on [MS_RETURN_CALLBACKS](), [EMV_CT_APPS_SELECT_STRUCT::ucCardholderConfirmation](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-uccardholderconfirmation).  |
|  | **[EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-reserv-allow-b-on-a)** <br>B1b2: allow reservation type B even in case only type A is activated via configuration (see [Defines for special transaction configuration](group___s_p_e_c_i_a_l___t_r_x_s.md))  |
|  | **[EMV_CT_SELOP_CBCK_DOMESTIC_APPS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-cbck-domestic-apps)** <br>B1b3: Activate callback function for cross check if a domestic app remains in the candidate list or not ([EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps)))    Depends on [MS_RETURN_CALLBACKS]().  |
|  | **[EMV_CT_SELOP_ADDALL](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-addall)** <br>B1b4: Add all PSE applications to the candidate list (Cartes Bancaires - France)  |
|  | **[EMV_CT_SELOP_ADDBLO](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-addblo)** <br>B1b5: Add blocked LOA applications to the candidate list (Interac - Canada)  |
|  | **[EMV_CT_NO_LONGEST_AID_MATCH](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-no-longest-aid-match)** <br>B1b6: Do not perform the longest AID match (technical nonsense but needed for a few domestic certifications)  |
|  | **[EMV_CT_ALLOW_BLOCKED](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-allow-blocked)** <br>B1b7: Allow blocked application to be processed (in Bank controlled terminals to enable script processing to unblock blocked cards)  |
|  | **[EMV_CT_SELOP_REMOVEALL_BUT_EXCLUDED](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-selop-removeall-but-excluded)** <br>B1b8: Remove all candidates from terminal list except those which are contained in excluded AID list. This allows transactions restricted to one, two or three AIDs without terminal reconfiguration.  |
|  | **[EMV_CT_TRXOP_PIN_BYPASS_NO_SUBSEQUENT](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-pin-bypass-no-subsequent)** <br>B2b1: If PIN bypass is supported it usually is for subsequent PIN entries, too. However some ICS (even if minor change) may announce no subsequent PIN Bypass, so you can configure here.  |
|  | **[EMV_CT_TRXOP_MULTIPLE_RANDOM_NUMBERS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-multiple-random-numbers)** <br>B2b2: Create a new value for 9F37, each time a random number is requested by the ICC. Per default one random number per transaction is generated. It is recommended to use multiple random numbers for security reasons.  |
|  | **[EMV_CT_TRXOP_DCC_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-dcc-callback)**  |
|  | **[EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-dcc-callback-always)** <br>B2b4: DCC callback function [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc)) will be called always.    Depends on [MS_RETURN_CALLBACKS]() and [DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check).  |
|  | **[EMV_CT_TRXOP_NO_FALLBACK_AFTER_CVM](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-no-fallback-after-cvm)** <br>B2b5: Despite fallback after CVM allowed by application configuration stop transaction with card error. This is required in case of separate readers if mag. stripe has not been read prior to chip.  |
|  | **[EMV_CT_TRXOP_AMOUNT_CONF](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-amount-conf)** <br>B2b6: The callback for the amount confirmation [EMV_CT_CALLBACK_FnT]() ([TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf)) will be generated, e.g. to be deactivated if terminal is unattended.    Invoking this callback depends on [EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin), [REFUND_CONFIRM_AMOUNT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-confirm-amount), [EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-amount-confirm-on-signature), [MS_RETURN_CALLBACKS]().  |
|  | **[EMV_CT_TRXOP_ENFORCE_PIN](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-enforce-pin)** <br>B2b7: Austrian (EPA) domestic feature: force PIN usage    In case no PIN entry was done during Cardholder Verification: EMV ADK will force online PIN entry, that is flag bit [EMV_ADK_SI_ONLINE_PIN_REQUIRED]() in [EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo).  |
|  | **[EMV_CT_TRXOP_FALLBACK_GOODSERVICE](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-fallback-goodservice)** <br>B2b8: German domestic feature: Execute cash transaction with transaction type "Goods & Services" (in case application's background system does not support cash)  |
|  | **[EMV_CT_TRXOP_MERCHINFO_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-merchinfo-callback)** <br>B3b1: The callback for the intermediate merchant information will be generated ([EMV_CT_CALLBACK_FnT]()[TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo))    Depends on [MS_RETURN_CALLBACKS]().  |
|  | **[EMV_CT_TRXOP_RND_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-rnd-callback)** <br>B3b2: Use own random number generator instead of OS one (not recommended but for debug purposes useful), only for velocity kernel, see [TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd).  |
|  | **[EMV_CT_TRXOP_HOTLST_LOG_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-hotlst-log-callback)** <br>B3b3: The callback for the transaction log / hotlist will be generated [EMV_CT_CALLBACK_FnT]() ([TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist))    Depends on the AID parameters [TRANSACTION_LOG](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-log) and [BLACKLIST](group___a_p_p___f_l_o_w___c_a_p_s.md#define-blacklist), and on [MS_RETURN_CALLBACKS]().  |
|  | **[EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-local-chck-callback)** <br>B3b4: The callback for the domestic and local checks will be generated [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps))    Depends on the AID parameter [EMV_CT_DOMESTIC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-domestic-check) and on [MS_RETURN_CALLBACKS]().  |
|  | **[EMV_CT_TRXOP_CARDHINFO_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-cardhinfo-callback)** <br>B3b5: The callback for the intermediate cardholder information will be generated [EMV_CT_CALLBACK_FnT]() ([TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo))    Depends on [MS_RETURN_CALLBACKS]().  |
|  | **[EMV_CT_TRXOP_EARLY_PIN_ENTRY](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-early-pin-entry)** <br>B3b6: Early PIN entry.    PIN entry is done (by application) in parallel to steps "Read application data" and "Offline data authentication".    Depends on [EMV_CT_TRXOP_DELAYED_EARLY_PIN]().    If set: Application starts PIN entry after GPO, in callback "merchant info - start read record" ([EMV_CT_CALLBACK_FnT]()[TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo) with [eEMVMerReadAppData](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerreadappdata))  |
|  | **[EMV_CT_TRXOP_DELAYED_EARLY_PIN](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-delayed-early-pin)** <br>B3b7: Delayed early PIN entry.    PIN entry is done (by application) after callback "local checks" ([EMV_CT_CALLBACK_FnT]() with [TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)).    Precondition: [EMV_CT_TRXOP_EARLY_PIN_ENTRY](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-early-pin-entry) is active.  |
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




## Macros Documentation

### define EMV_CT_SELOP_CBCK_APPLI_SEL

```
#define EMV_CT_SELOP_CBCK_APPLI_SEL 0x01
```

B1b1: Callback function for customer application selection [EMV_CT_CALLBACK_FnT]() ([TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand)) will be generated, if there are several application possible.    Depends on [MS_RETURN_CALLBACKS](), [EMV_CT_APPS_SELECT_STRUCT::ucCardholderConfirmation](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-uccardholderconfirmation). 

### define EMV_CT_SELOP_RESERV_ALLOW_B_ON_A

```
#define EMV_CT_SELOP_RESERV_ALLOW_B_ON_A 0x02
```

B1b2: allow reservation type B even in case only type A is activated via configuration (see [Defines for special transaction configuration](group___s_p_e_c_i_a_l___t_r_x_s.md)) 

### define EMV_CT_SELOP_CBCK_DOMESTIC_APPS

```
#define EMV_CT_SELOP_CBCK_DOMESTIC_APPS 0x04
```

B1b3: Activate callback function for cross check if a domestic app remains in the candidate list or not ([EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps)))    Depends on [MS_RETURN_CALLBACKS](). 

### define EMV_CT_SELOP_ADDALL

```
#define EMV_CT_SELOP_ADDALL 0x08
```

B1b4: Add all PSE applications to the candidate list (Cartes Bancaires - France) 

### define EMV_CT_SELOP_ADDBLO

```
#define EMV_CT_SELOP_ADDBLO 0x10
```

B1b5: Add blocked LOA applications to the candidate list (Interac - Canada) 

### define EMV_CT_NO_LONGEST_AID_MATCH

```
#define EMV_CT_NO_LONGEST_AID_MATCH 0x20
```

B1b6: Do not perform the longest AID match (technical nonsense but needed for a few domestic certifications) 

### define EMV_CT_ALLOW_BLOCKED

```
#define EMV_CT_ALLOW_BLOCKED 0x40
```

B1b7: Allow blocked application to be processed (in Bank controlled terminals to enable script processing to unblock blocked cards) 

### define EMV_CT_SELOP_REMOVEALL_BUT_EXCLUDED

```
#define EMV_CT_SELOP_REMOVEALL_BUT_EXCLUDED 0x80
```

B1b8: Remove all candidates from terminal list except those which are contained in excluded AID list. This allows transactions restricted to one, two or three AIDs without terminal reconfiguration. 

### define EMV_CT_TRXOP_PIN_BYPASS_NO_SUBSEQUENT

```
#define EMV_CT_TRXOP_PIN_BYPASS_NO_SUBSEQUENT 0x01
```

B2b1: If PIN bypass is supported it usually is for subsequent PIN entries, too. However some ICS (even if minor change) may announce no subsequent PIN Bypass, so you can configure here. 

### define EMV_CT_TRXOP_MULTIPLE_RANDOM_NUMBERS

```
#define EMV_CT_TRXOP_MULTIPLE_RANDOM_NUMBERS 0x02
```

B2b2: Create a new value for 9F37, each time a random number is requested by the ICC. Per default one random number per transaction is generated. It is recommended to use multiple random numbers for security reasons. 

### define EMV_CT_TRXOP_DCC_CALLBACK

```
#define EMV_CT_TRXOP_DCC_CALLBACK 0x04
```


B2b3: DCC callback function [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc)) will be invoked. 

 Callback is only invoked if DCC is allowed (transaction amount was not yet used in PDOL or amount confirmation) resp. limit conversion is needed (transaction and configuration currency difference). 

 Depends on [MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks) and [DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check). 


### define EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS

```
#define EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS 0x08
```

B2b4: DCC callback function [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc)) will be called always.    Depends on [MS_RETURN_CALLBACKS]() and [DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check). 

### define EMV_CT_TRXOP_NO_FALLBACK_AFTER_CVM

```
#define EMV_CT_TRXOP_NO_FALLBACK_AFTER_CVM 0x10
```

B2b5: Despite fallback after CVM allowed by application configuration stop transaction with card error. This is required in case of separate readers if mag. stripe has not been read prior to chip. 

### define EMV_CT_TRXOP_AMOUNT_CONF

```
#define EMV_CT_TRXOP_AMOUNT_CONF 0x20
```

B2b6: The callback for the amount confirmation [EMV_CT_CALLBACK_FnT]() ([TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf)) will be generated, e.g. to be deactivated if terminal is unattended.    Invoking this callback depends on [EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin), [REFUND_CONFIRM_AMOUNT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-confirm-amount), [EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-amount-confirm-on-signature), [MS_RETURN_CALLBACKS](). 

### define EMV_CT_TRXOP_ENFORCE_PIN

```
#define EMV_CT_TRXOP_ENFORCE_PIN 0x40
```

B2b7: Austrian (EPA) domestic feature: force PIN usage    In case no PIN entry was done during Cardholder Verification: EMV ADK will force online PIN entry, that is flag bit [EMV_ADK_SI_ONLINE_PIN_REQUIRED]() in [EMV_CT_TRANSRES_STRUCT::StatusInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-statusinfo). 

### define EMV_CT_TRXOP_FALLBACK_GOODSERVICE

```
#define EMV_CT_TRXOP_FALLBACK_GOODSERVICE 0x80
```

B2b8: German domestic feature: Execute cash transaction with transaction type "Goods & Services" (in case application's background system does not support cash) 

### define EMV_CT_TRXOP_MERCHINFO_CALLBACK

```
#define EMV_CT_TRXOP_MERCHINFO_CALLBACK 0x01
```

B3b1: The callback for the intermediate merchant information will be generated ([EMV_CT_CALLBACK_FnT]()[TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo))    Depends on [MS_RETURN_CALLBACKS](). 

### define EMV_CT_TRXOP_RND_CALLBACK

```
#define EMV_CT_TRXOP_RND_CALLBACK 0x02
```

B3b2: Use own random number generator instead of OS one (not recommended but for debug purposes useful), only for velocity kernel, see [TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd). 

**Deprecated**: 

not supported anymore 

### define EMV_CT_TRXOP_HOTLST_LOG_CALLBACK

```
#define EMV_CT_TRXOP_HOTLST_LOG_CALLBACK 0x04
```

B3b3: The callback for the transaction log / hotlist will be generated [EMV_CT_CALLBACK_FnT]() ([TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist))    Depends on the AID parameters [TRANSACTION_LOG](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-log) and [BLACKLIST](group___a_p_p___f_l_o_w___c_a_p_s.md#define-blacklist), and on [MS_RETURN_CALLBACKS](). 

### define EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK

```
#define EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK 0x08
```

B3b4: The callback for the domestic and local checks will be generated [EMV_CT_CALLBACK_FnT]() ([TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps))    Depends on the AID parameter [EMV_CT_DOMESTIC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-domestic-check) and on [MS_RETURN_CALLBACKS](). 

### define EMV_CT_TRXOP_CARDHINFO_CALLBACK

```
#define EMV_CT_TRXOP_CARDHINFO_CALLBACK 0x10
```

B3b5: The callback for the intermediate cardholder information will be generated [EMV_CT_CALLBACK_FnT]() ([TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo))    Depends on [MS_RETURN_CALLBACKS](). 

### define EMV_CT_TRXOP_EARLY_PIN_ENTRY

```
#define EMV_CT_TRXOP_EARLY_PIN_ENTRY 0x20
```

B3b6: Early PIN entry.    PIN entry is done (by application) in parallel to steps "Read application data" and "Offline data authentication".    Depends on [EMV_CT_TRXOP_DELAYED_EARLY_PIN]().    If set: Application starts PIN entry after GPO, in callback "merchant info - start read record" ([EMV_CT_CALLBACK_FnT]()[TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo) with [eEMVMerReadAppData](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerreadappdata)) 

### define EMV_CT_TRXOP_DELAYED_EARLY_PIN

```
#define EMV_CT_TRXOP_DELAYED_EARLY_PIN 0x40
```

B3b7: Delayed early PIN entry.    PIN entry is done (by application) after callback "local checks" ([EMV_CT_CALLBACK_FnT]() with [TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)).    Precondition: [EMV_CT_TRXOP_EARLY_PIN_ENTRY](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-early-pin-entry) is active. 

### define EMV_CT_TRXOP_KERNEL_PARSE_UNKNOWN_TLV

```
#define EMV_CT_TRXOP_KERNEL_PARSE_UNKNOWN_TLV 0x80
```

B3b8: Let the kernel parse and store unknown TLV templates so that unknown tags can be retrieved by EMV_CT_fetchTxnTags. Precondition is that those tags are configured in the additional tag store (Additional_Tags_CRD) 

### define EMV_CT_SELOP_NO_UTF8

```
#define EMV_CT_SELOP_NO_UTF8 0x01
```

B4b1: Omit UTF-8 converted application labels in application selection callback [TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand). 

### define EMV_CT_TRXOP_NO_UTF8

```
#define EMV_CT_TRXOP_NO_UTF8 0x01
```

B4b1: Omit UTF-8 converted application labels in amount confirmation and PIN input callback functions ([TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf), [TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin)) 

### define EMV_CT_TRXOP_TIP_AMOUNT_ZERO

```
#define EMV_CT_TRXOP_TIP_AMOUNT_ZERO 0x02
```

B4b2: Card holder confirmed zero amount within tip amount input dialog. In case of TIP setting DF22 position 4 = 3 the transaction shall not be made suitable for a tip follow-up. 

### define EMV_CT_TRXOP_NO_CHECK_BB_PADDING

```
#define EMV_CT_TRXOP_NO_CHECK_BB_PADDING 0x04
```

B4b3: Omit check for BB padding in card data authentication certificates - This check is obliged in some regions but not generally by EMVCo. 

### define EMV_CT_TRXOP_NO_CHECK_DDLEN

```
#define EMV_CT_TRXOP_NO_CHECK_DDLEN 0x08
```

B4b4: Omit check if dynamic data length in card data authentication certificates is too big. 

### define ONL_OPTS_LAST_PIN_TRY

```
#define ONL_OPTS_LAST_PIN_TRY 0x01
```

B5b1 : Host detected "last PIN try" for online PIN. 

### define EMV_CT_TRXOP_PERFORM_ISS_ACQ_CVM

```
#define EMV_CT_TRXOP_PERFORM_ISS_ACQ_CVM 0x02
```

B5b2 : For Custom CVM processing. This flag is not used so far, but might be needed one day. For instance on Custom CVM a PIN input callback with PIN mode [EMV_CT_CVM_CUSTOM](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-cvm-custom) is sent under the same condition as a PIN input callback. 

### define EMV_CT_TRXOP_WRITE_DS_OFFLINE_TXN

```
#define EMV_CT_TRXOP_WRITE_DS_OFFLINE_TXN 0x08
```

B5b4 : Write data storage data for offline transactions. Relevant only by Continue Online. When this option is set, EMV_CTLS_ContinueOnline will only write the DS data and will not perform the kernel online processing. 

### define EMV_CT_TRXOP_FORCE_TACIAC_DEFAULT

```
#define EMV_CT_TRXOP_FORCE_TACIAC_DEFAULT 0x10
```

B5b5 : After Host Connection: Force TAC IAC Default processing even the host was reached, e.g. service provider host is available and returns valid AC but the issuer host was not reached for cryptogram verification. 

### define EMV_CT_SELOP_WEEK_PRIORITY_APPS

```
#define EMV_CT_SELOP_WEEK_PRIORITY_APPS 0x20
```

B5b6 : Ignore priority applications that are not part of the terminal candidate list. 

### define EMV_CT_CUST_APPLI_SELECTION_PERFORMED

```
#define EMV_CT_CUST_APPLI_SELECTION_PERFORMED 0x40
```

B5b7 : This is a possibility that allows the app to indicate that a customer application selection has been performed. If this is set, the callback / Reentrance for candidate selection will be even called if only one candidate is left. This is to inform the customer that the prior selected application was withdrawn from the candidate list after customer confirmation. In this special case a single candidate must not be selected automatically. 

### define EMV_CT_SELOP_DETECT_EMPTY_LIST

```
#define EMV_CT_SELOP_DETECT_EMPTY_LIST 0x80
```

B5b8 : Without this bit in case of card error and in case of no common candidate [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback) is returned for backwards compatibility. If enabled, the second case results in return code [EMV_ADK_TXN_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-empty-list). 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
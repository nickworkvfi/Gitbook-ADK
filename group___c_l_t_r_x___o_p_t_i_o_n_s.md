---
title: Options for contactless transaction processing
summary: Defines for EMV_CTLS_START_TYPE::TxnOptions. 

---

# Options for contactless transaction processing

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Defines for [EMV_CTLS_START_TYPE::TxnOptions](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-txnoptions). 

## Defines

|                | Name           |
| -------------- | -------------- |
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
|  | **[CLTRXOP_SPURIOUS_CARD_DETECT](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-spurious-card-detect)** <br>B2b6: Use option [EMV_CTLS_SPURIOUS_DETECT]() for card detection.  |
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




## Macros Documentation

### define CLTRXOP_SUPPRESS_ERRMSGBEEP

```
#define CLTRXOP_SUPPRESS_ERRMSGBEEP 0x01
```

B1b1: Suppress beep on error message display. 

### define CLTRXOP_REPEAT_L1

```
#define CLTRXOP_REPEAT_L1 0x02
```

B1b2: TRX repeated because of L1 error (same txn is started a 2nd time) 

### define CLTRXOP_NO_DOMESTIC_KERNEL

```
#define CLTRXOP_NO_DOMESTIC_KERNEL 0x04
```

B1b3: skip local kernel processing for this transaction even if configured. 

### define CLTRXOP_NO_GLOBAL

```
#define CLTRXOP_NO_GLOBAL 0x08
```

B1b4: skip global EMV processing for this transaction even if configured. 

### define CLTRXOP_PP_TORNTXN_RESET

```
#define CLTRXOP_PP_TORNTXN_RESET 0x10
```

B1b5: reset the torn transaction store if a PayPass card is presented. 

### define CLTRXOP_AK_DELAYED_AUTH

```
#define CLTRXOP_AK_DELAYED_AUTH 0x20
```

B1b6: Amex delayed autorization (Amex 3.1) for environments where no real-time online transaction is possible. Note: For Amex 4 kernel this is controlled by Enhanced Contactless Reader Capabilities B4b7. 

### define CLTRXOP_REMOVEALL_BUT_EXCLUDED

```
#define CLTRXOP_REMOVEALL_BUT_EXCLUDED 0x80
```

B1b8: Remove all candidates from terminal list except those which are contained in [ExcludeAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids) or [ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos) list. This allows transactions restricted to certain AIDs, Kernel IDs or Combinations without terminal reconfiguration. 

### define CLTRXOP_CANDLIST_CALLBACK

```
#define CLTRXOP_CANDLIST_CALLBACK 0x01
```

B2b1: Mutual combo candidate list of terminal and card reported for selection and reordering, see [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand). 

### define CLTRXOP_APPSELECTED_CALLBACK

```
#define CLTRXOP_APPSELECTED_CALLBACK 0x02
```

B2b2: callback after the final select for choosing the kernel to be used, only available for velocity kernel, see [TAG_BF0C_CTLS_CBK_APP_SELECTED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf0c-ctls-cbk-app-selected). 

### define CLTRXOP_NO_BUL12

```
#define CLTRXOP_NO_BUL12 0x04
```

B2b3: SU Bulletin 12 NOT supported (Velocity Entrypoint _NOT_ EMVEP_CFG_BUL12). Obsolete since EP2.0.1. 

### define CLTRXOP_NO_LONGEST_AID_MATCH

```
#define CLTRXOP_NO_LONGEST_AID_MATCH 0x10
```

B2b5: Do not perform the longest AID match (technical nonsense but needed for a few domestic certifications) 

### define CLTRXOP_SPURIOUS_CARD_DETECT

```
#define CLTRXOP_SPURIOUS_CARD_DETECT 0x20
```

B2b6: Use option [EMV_CTLS_SPURIOUS_DETECT]() for card detection. 

### define CLTRXOP_NO_PAN_RETRIEVE_DEF

```
#define CLTRXOP_NO_PAN_RETRIEVE_DEF 0x40
```

   For all other schemes EMV ADK does anyhow use configured values for PAN retrieval transactions.    Not yet supported for VFI reader. 

B2b7: PayPass: Do NOT Use default configuration for PAN Retrieval Transactions but configured values. 


### define CLTRXOP_RND_CALLBACK

```
#define CLTRXOP_RND_CALLBACK 0x80
```

B2b8: Use own random number generator instead of OS one (not recommended but for debug purposes useful), only supported for velocity kernel, see [TAG_BF13_CBK_RND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf13-cbk-rnd). 

**Deprecated**: 

not supported anymore 

### define CLTRXOP_OMIT_CHECKSUM_CHECK

```
#define CLTRXOP_OMIT_CHECKSUM_CHECK 0x01
```

B3b1: VFI-Reader: Dont calculate checksums of configuration files    Only effective on [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

### define CLTRXOP_STOP_ON_CHKSUM_DIFF

```
#define CLTRXOP_STOP_ON_CHKSUM_DIFF 0x02
```

B3b2: VFI-Reader: abort transaction when checksums of configuration files changed    Only effective on [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

### define CLTRXOP_NO_AMOUNT_PRECHECK

```
#define CLTRXOP_NO_AMOUNT_PRECHECK 0x08
```

--> This results in terminate or fallabck later on 

B3b4: Disable the amount precheck --> even tap card is requested (Setup successful) if the txn amount is higher than the highest transaction limit of any AID / kernel. 


### define CLTRXOP_L1_ERROR_CALLBACK

```
#define CLTRXOP_L1_ERROR_CALLBACK 0x10
```

"Use 1 card only" ([EMV_ADK_TXT_2_CARDS_IN_FIELD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-2-cards-in-field)) in case 2 cards are detected    Precondition: UI scheme "default" is set, use [INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-ui-scheme-default)

B3b5: Enable notification callback for display "Error, try again" ([EMV_ADK_TXT_RETAP_SAME_L1](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-retap-same-l1)) in case of L1 error and 


### define CLTRXOP_SETUP_WAIT_FOR_ERROR

```
#define CLTRXOP_SETUP_WAIT_FOR_ERROR 0x20
```

this is already detected in [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) rather than in [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline). 

B3b6: VFI-Reader: [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) waits 10 ms for a negative answer from VFI-Reader so in case of VFI-Reader having problems, 


### define CLTRXOP_WEEK_PRIORITY_APPS

```
#define CLTRXOP_WEEK_PRIORITY_APPS 0x40
```

B3b7: Ignore priority applications that are not part of the terminal candidate list. 

### define CLTRXOP_PRELOAD_TRANSACTION

```
#define CLTRXOP_PRELOAD_TRANSACTION 0x80
```

B3b8: Preload feature: perform preliminary process and prepare database for payment without starting the transaction. Required for VAS processing using NFC ADK on VFI reader. 

### define CLTRXOP_KEEP_MULTIPLE_KERNEL

```
#define CLTRXOP_KEEP_MULTIPLE_KERNEL 0x01
```

B4b1: After Final Select keep all AID-kernel combinations for the selected AID. 

### define CLTRXOP_TIP_AMOUNT_ZERO

```
#define CLTRXOP_TIP_AMOUNT_ZERO 0x02
```

B4b2: Card holder confirmed zero amount within tip amount input dialog. In case of TIP setting DF22 position 4 = 3 the the transaction shall not be made suitable for a tip follow-up. 

### define CLTRXOP_SILENT_ON_EMPTY_LIST

```
#define CLTRXOP_SILENT_ON_EMPTY_LIST 0x04
```

B4b3: In case of empty candidate list (return code [EMV_ADK_TXN_CTLS_EMPTY_LIST](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-txn-ctls-empty-list)) suppress error tone and LED processing (LEDs off after 750ms). 

### define CLTRXOP_CVM_REQUIRED

```
#define CLTRXOP_CVM_REQUIRED 0x08
```

B4b4: Force CVM for this transaction due to a special business use case. Basically implemented by internally setting the CVM required limits to zero. 

### define CLTRXOP_LONG_TAP_TIMER

```
#define CLTRXOP_LONG_TAP_TIMER 0x10
```


B4b5: Set timer for Present And Hold timeout function according JCB Contactless IC Terminal Specification with value of Removal Timeout unless 0. In case of timeout contactless field is powered-off, "Card Read OK" display request is sent and light and sound indicators are triggered. For details please see [Present And Hold Transaction ("Long Tap")]


### define CLTRXOP_SEND_POI_INFORMATION

```
#define CLTRXOP_SEND_POI_INFORMATION 0x20
```

B4b6: Activate Entry Point's Send POI Information feature. 

### define CLTRXOP_BEEP_BY_BUZZER

```
#define CLTRXOP_BEEP_BY_BUZZER 0x40
```

B4b7: Use buzzer instead of sound library on some platforms (e.g. Android and VOS-3). This is for lower latency with the drawback that the volume is fixed. 

### define CLTRXOP_BEEP_OS_VOLUME

```
#define CLTRXOP_BEEP_OS_VOLUME 0x80
```

B4b7: On Android system the OS setting controls the volume. The OS volume is respected down to certain still hearable minimal value to avoid missing beep. For switching off (e.g. automated test run) set [EMV_CTLS_TERMDATA_STRUCT::BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume) to zero. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
---
title: Additional error info exit code
summary: Last step performed by EMV ADK 0 ? 10-27 VK-related 30-4B Amex 50-6x Discover 7 Gemalto 80-8A setup 9 ? A0-B5 common TXN C0-DB MK-related E ? F0-F4 online. 

---

# Additional error info exit code

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Additional error information](group___d_e_f___a_d_k___d_e_b_u_g.md)**

Last step performed by EMV ADK 0 ? 10-27 VK-related 30-4B Amex 50-6x Discover 7 Gemalto 80-8A setup 9 ? A0-B5 common TXN C0-DB MK-related E ? F0-F4 online.  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
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
|  | **[EMV_ADK_INF_INIT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-init)** <br>Initialization.  |
|  | **[EMV_ADK_INF_SEL_TERMDATA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-termdata)** <br>Application selection: terminal data.  |
|  | **[EMV_ADK_INF_SEL_TEXTE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-texte)** <br>Application selection: texts.  |
|  | **[EMV_ADK_INF_SEL_PAYINIT_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-payinit-ok)** <br>Application selection: Init Payment OK.  |
|  | **[EMV_ADK_INF_SEL_CHECK_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-check-ok)** <br>Application selection: Check OK.  |
|  | **[EMV_ADK_INF_SEL_BUILD_APPLI_LIST](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-build-appli-list)** <br>Application selection: Build Application List.  |
|  | **[EMV_ADK_INF_SEL_ANOTHER](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-another)** <br>Application selection: Other.  |
|  | **[EMV_ADK_INF_SEL_FINAL](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-final)** <br>Application selection: Final.  |
|  | **[EMV_ADK_INF_SEL_NO](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-no)** <br>Application selection: NO.  |
|  | **[EMV_ADK_INF_SEL_FINISH_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-finish-ok)** <br>Application selection: Finished OK.  |
|  | **[EMV_ADK_INF_SEL_BLOCK_APPLI](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-block-appli)** <br>Application selection: Blocked Application.  |
|  | **[EMV_ADK_INF_SEL_BLOCK_CARD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-block-card)** <br>Application selection: Blocked Card.  |
|  | **[EMV_ADK_INF_SEL_LOA_PROC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-loa-proc)** <br>Application selection: LOA Processing.  |
|  | **[EMV_ADK_INF_SEL_UI_LOA_PROC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-sel-ui-loa-proc)** <br>Application selection: LOA Processing (uninterrupted)  |
|  | **[EMV_ADK_INF_TRANS_CHECK_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-check-ok)** <br>Offline transaction processing: Check OK.  |
|  | **[EMV_ADK_INF_TRANS_READ_TERM](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-read-term)** <br>offline transaction processing: Read Terminal Data  |
|  | **[EMV_ADK_INF_TRANS_READ_APPLI](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-read-appli)** <br>offline transaction processing: Read Application  |
|  | **[EMV_ADK_INF_TRANS_SEL_LANG](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-sel-lang)** <br>offline transaction processing: Select Language  |
|  | **[EMV_ADK_INF_TRANS_CONF_AMOUNT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-conf-amount)** <br>offline transaction processing: Confirm Amount  |
|  | **[EMV_ADK_INF_TRANS_INITIATE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-initiate)** <br>offline transaction processing: Initiation  |
|  | **[EMV_ADK_INF_TRANS_READ_CARD_DATA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-read-card-data)** <br>offline transaction processing: Read Card Data  |
|  | **[EMV_ADK_INF_TRANS_CHECK_APPLI_DATA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-check-appli-data)** <br>offline transaction processing: Check Application Data  |
|  | **[EMV_ADK_INF_TRANS_PROC_RESTRICTION](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-proc-restriction)** <br>offline transaction processing: Process Restriction  |
|  | **[EMV_ADK_INF_TRANS_CARD_AUTH](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-card-auth)** <br>offline transaction processing: Card Authentication  |
|  | **[EMV_ADK_INF_TRANS_VERIFY](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify)** <br>offline transaction processing: Verification  |
|  | **[EMV_ADK_INF_TRANS_RISK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-risk)** <br>offline transaction processing: Risk  |
|  | **[EMV_ADK_INF_TRANS_AAT](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-aat)** <br>offline transaction processing: AAT (action analysis terminal)  |
|  | **[EMV_ADK_INF_TRANS_1GENAC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1genac)** <br>offline transaction processing: 1st Genac  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_CARD](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-card)** <br>offline transaction processing: Verify Cardholder  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_ABANDON](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-abandon)** <br>offline transaction processing: Verify Abandon  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_OTHER](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-other)** <br>offline transaction processing: Verify Other  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_ONLINE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-online)** <br>offline transaction processing: Verify Online  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_NOK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-nok)** <br>offline transaction processing: Verify NOT OK  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-ok)** <br>offline transaction processing: Verify OK  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_SIGNATURE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-signature)** <br>offline transaction processing: Verify Signature  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_TC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-tc)** <br>offline transaction processing: 1st Cryptography TC  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-arqc-cda)** <br>offline transaction processing: 1st Cryptography ARQC CDA  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-arqc-other)** <br>offline transaction processing: 1st Cryptography ARQC Other  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_AAC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-aac)** <br>offline transaction processing: 1st Cryptography AAC  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_AAR](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-aar)** <br>offline transaction processing: 1st Cryptography AAC  |
|  | **[EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-1crypt-unknown)** <br>offline transaction processing: 1st Cryptography Unknown  |
|  | **[EMV_ADK_INF_ONL_CHECK_OK](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-check-ok)** <br>Processing the host response: Check OK.  |
|  | **[EMV_ADK_INF_ONL_FALSE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-false)** <br>Processing the host response: False.  |
|  | **[EMV_ADK_INF_ONL_TRUE](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-true)** <br>Processing the host response: True.  |
|  | **[EMV_ADK_INF_ONL_PIN](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-pin)** <br>Processing the host response: PIN.  |
|  | **[EMV_ADK_INF_ONL_HOST_AUTH](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-host-auth)** <br>Processing the host response: Host Authorization.  |
|  | **[EMV_ADK_INF_ONL_CRIT_SC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-crit-sc)** <br>Processing the host response: Cirtical Script.  |
|  | **[EMV_ADK_INF_ONL_AC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-ac)** <br>Processing the host response: AC.  |
|  | **[EMV_ADK_INF_ONL_2GENAC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-2genac)** <br>Processing the host response: 2nd Generate AC.  |
|  | **[EMV_ADK_INF_ONL_UNCRIT_SC](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-onl-uncrit-sc)** <br>Processing the host response: Uncritical Script.  |
|  | **[EMV_ADK_INF_TRANS_VERIFY_PARAM](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-trans-verify-param)** <br>Processing the host response: Verify Parameter.  |
|  | **[EMV_ADK_INF_FETCH_TXN_TAG_DATA](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.md#define-emv-adk-inf-fetch-txn-tag-data)** <br>Function `EMV_CT_fetchTxnTags`.  |

## Detailed Description

Last step performed by EMV ADK 0 ? 10-27 VK-related 30-4B Amex 50-6x Discover 7 Gemalto 80-8A setup 9 ? A0-B5 common TXN C0-DB MK-related E ? F0-F4 online. 

Last step performed by EMV ADK.




## Macros Documentation

### define EMV_CTLS_ADK_SETUP_START

```
#define EMV_CTLS_ADK_SETUP_START 0x80
```

Initialization Setup. 

### define EMV_CTLS_ADK_SETUP_NO_CONTEXT

```
#define EMV_CTLS_ADK_SETUP_NO_CONTEXT 0x81
```

Setup: context missing. 

### define EMV_CTLS_ADK_SETUP_NO_INIT

```
#define EMV_CTLS_ADK_SETUP_NO_INIT 0x82
```

Setup: not initialized. 

### define EMV_CTLS_ADK_SETUP_TERMDATA

```
#define EMV_CTLS_ADK_SETUP_TERMDATA 0x83
```

Setup: terminal data not available. 

### define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY

```
#define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY 0x85
```

Setup: above ceiling limit EMV. 

### define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM

```
#define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM 0x86
```

Setup: above ceiling limit no domestic app. 

### define EMV_CTLS_ADK_SETUP_RND_FAIL

```
#define EMV_CTLS_ADK_SETUP_RND_FAIL 0x87
```

Setup: RND failed. 

### define EMV_CTLS_ADK_SETUP_DETECT

```
#define EMV_CTLS_ADK_SETUP_DETECT 0x88
```

Setup: detect failed. 

### define EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL

```
#define EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL 0x89
```

Setup: txn setup failure. 

### define EMV_CTLS_ADK_SETUP_OK

```
#define EMV_CTLS_ADK_SETUP_OK 0x8A
```

Setup: OK. 

### define EMV_CTLS_ADK_TXN_START

```
#define EMV_CTLS_ADK_TXN_START 0xA0
```

TXN: Start. 

### define EMV_CTLS_ADK_TXN_NO_ATR

```
#define EMV_CTLS_ADK_TXN_NO_ATR 0xA1
```

TXN: no ATR. 

### define EMV_CTLS_ADK_TXN_2_CARDS

```
#define EMV_CTLS_ADK_TXN_2_CARDS 0xA2
```

TXN: 2 cards in field. 

### define EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY

```
#define EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY 0xA3
```

TXN: empty candidate list of terminal. 

### define EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED

```
#define EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED 0xA4
```

TXN: a single domestic app is selected. 

### define EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL

```
#define EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL 0xA5
```

TXN: single domestic app failed. 

### define EMV_CTLS_ADK_TXN_L1_DIR_READING

```
#define EMV_CTLS_ADK_TXN_L1_DIR_READING 0xA6
```

TXN: L1 error at directory reading. 

### define EMV_CTLS_ADK_TXN_L1_CAND_LIST

```
#define EMV_CTLS_ADK_TXN_L1_CAND_LIST 0xA7
```

TXN: L1 error candidate list building. 

### define EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED

```
#define EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED 0xA8
```

TXN: domestic application selection failed. 

### define EMV_CTLS_ADK_TXN_DOM_APP_SELECTED

```
#define EMV_CTLS_ADK_TXN_DOM_APP_SELECTED 0xA9
```

TXN: domestic application selected. 

### define EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST

```
#define EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST 0xAA
```

TXN: empty combo list. 

### define EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL

```
#define EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL 0xAB
```

TXN: domestic app select failed no final select issued. 

### define EMV_CTLS_ADK_TXN_L1_FINAL_SELECT

```
#define EMV_CTLS_ADK_TXN_L1_FINAL_SELECT 0xAC
```

TXN: L1 error final select. 

### define EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY

```
#define EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY 0xAD
```

TXN: AID parameter reading failed, list empty. 

### define EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY

```
#define EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY 0xAE
```

TXN: domestic app skipped, list empty. 

### define EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY

```
#define EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY 0xAF
```

TXN: emv app skipped, list empty. 

### define EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK

```
#define EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK 0xB0
```

TXN: domestic application with final select ok. 

### define EMV_CTLS_ADK_TXN_UNKNOW_KERNEL

```
#define EMV_CTLS_ADK_TXN_UNKNOW_KERNEL 0xB1
```

TXN: unknown kernel. 

### define EMV_CTLS_ADK_TXN_EP_INIT_FAILED

```
#define EMV_CTLS_ADK_TXN_EP_INIT_FAILED 0xB2
```

TXN: Entry Point Init failed. 

### define EMV_CTLS_ADK_TXN_LIST_ITERATION_KO

```
#define EMV_CTLS_ADK_TXN_LIST_ITERATION_KO 0xB3
```

TXN: error list iteration. 

### define EMV_CTLS_ADK_TXN_CANDIDATE_EVAL

```
#define EMV_CTLS_ADK_TXN_CANDIDATE_EVAL 0xB4
```

TXN: candidate list evaluation. 

### define EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT

```
#define EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT 0xB5
```

TXN: final select. 

### define EMV_CTLS_ADK_TXN_MK_START

```
#define EMV_CTLS_ADK_TXN_MK_START 0xC0
```

TXN: Start of PayPass. 

### define EMV_CTLS_ADK_TXN_MK_NEW_SEL

```
#define EMV_CTLS_ADK_TXN_MK_NEW_SEL 0xC1
```

TXN: new select. 

### define EMV_CTLS_ADK_TXN_MK_RETAP_START

```
#define EMV_CTLS_ADK_TXN_MK_RETAP_START 0xC2
```

TXN: retap required. 

### define EMV_CTLS_ADK_TXN_MK_MOBILE_START

```
#define EMV_CTLS_ADK_TXN_MK_MOBILE_START 0xC3
```

TXN: mobile requested. 

### define EMV_CTLS_ADK_TXN_MK_L1_START

```
#define EMV_CTLS_ADK_TXN_MK_L1_START 0xC4
```

TXN: L1 error. 

### define EMV_CTLS_ADK_TXN_MK_RETAP_MSD

```
#define EMV_CTLS_ADK_TXN_MK_RETAP_MSD 0xC5
```

TXN: retap reuired MSD. 

### define EMV_CTLS_ADK_TXN_MK_MOBILE_MSD

```
#define EMV_CTLS_ADK_TXN_MK_MOBILE_MSD 0xC6
```

TXN: mobile requested MSD. 

### define EMV_CTLS_ADK_TXN_MK_L1_MSD

```
#define EMV_CTLS_ADK_TXN_MK_L1_MSD 0xC7
```

TXN: L1 error MSD. 

### define EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD

```
#define EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD 0xC8
```

TXN: no data MSD. 

### define EMV_CTLS_ADK_TXN_MK_DECLINE_MSD

```
#define EMV_CTLS_ADK_TXN_MK_DECLINE_MSD 0xC9
```

TXN: decline MSD. 

### define EMV_CTLS_ADK_TXN_MK_OK_MSD

```
#define EMV_CTLS_ADK_TXN_MK_OK_MSD 0xCA
```

TXN: ok MSD. 

### define EMV_CTLS_ADK_TXN_MK_ONLINE_MSD

```
#define EMV_CTLS_ADK_TXN_MK_ONLINE_MSD 0xCB
```

TXN: online MSD. 

### define EMV_CTLS_ADK_TXN_MK_OTHER_MSD

```
#define EMV_CTLS_ADK_TXN_MK_OTHER_MSD 0xCC
```

TXN: other MSD. 

### define EMV_CTLS_ADK_TXN_MK_RETAP_CHP

```
#define EMV_CTLS_ADK_TXN_MK_RETAP_CHP 0xCD
```

TXN: retap reuired CHP. 

### define EMV_CTLS_ADK_TXN_MK_MOBILE_CHP

```
#define EMV_CTLS_ADK_TXN_MK_MOBILE_CHP 0xCE
```

TXN: mobile requested CHP. 

### define EMV_CTLS_ADK_TXN_MK_L1_CHP

```
#define EMV_CTLS_ADK_TXN_MK_L1_CHP 0xCF
```

TXN: L1 error CHP. 

### define EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP

```
#define EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP 0xD0
```

TXN: card data read CHP. 

### define EMV_CTLS_ADK_TXN_MK_DECLINE_CHP

```
#define EMV_CTLS_ADK_TXN_MK_DECLINE_CHP 0xD1
```

TXN: decline CHP. 

### define EMV_CTLS_ADK_TXN_MK_ONLINE_CHP

```
#define EMV_CTLS_ADK_TXN_MK_ONLINE_CHP 0xD2
```

TXN: online CHP. 

### define EMV_CTLS_ADK_TXN_MK_OK_CHP

```
#define EMV_CTLS_ADK_TXN_MK_OK_CHP 0xD3
```

TXN: ok CHP. 

### define EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP

```
#define EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP 0xD4
```

TXN: use other interface. 

### define EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP

```
#define EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP 0xD5
```

TXN: new select CHP. 

### define EMV_CTLS_ADK_TXN_MK_OTHER_CHP

```
#define EMV_CTLS_ADK_TXN_MK_OTHER_CHP 0xD6
```

TXN: other error CHP. 

### define EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC

```
#define EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC 0xD7
```

TXN: decline start. 

### define EMV_CTLS_ADK_TXN_MK_FALLBACK_START

```
#define EMV_CTLS_ADK_TXN_MK_FALLBACK_START 0xD8
```

TXN: fallback start. 

### define EMV_CTLS_ADK_TXN_MK_INIT_FAIL

```
#define EMV_CTLS_ADK_TXN_MK_INIT_FAIL 0xD9
```

TXN: Init failed. 

### define EMV_CTLS_ADK_TXN_MK_GPO_RR

```
#define EMV_CTLS_ADK_TXN_MK_GPO_RR 0xDA
```

TXN: Step ReadRecords and GPO. 

### define EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD

```
#define EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD 0xDB
```

TXN: use other interface or other card. 

### define EMV_CTLS_ADK_TXN_VK_START

```
#define EMV_CTLS_ADK_TXN_VK_START 0x10
```

TXN: Start of payWave. 

### define EMV_CTLS_ADK_TXN_VK_NEW_SEL

```
#define EMV_CTLS_ADK_TXN_VK_NEW_SEL 0x11
```

TXN: new select. 

### define EMV_CTLS_ADK_TXN_VK_MOBILE_START

```
#define EMV_CTLS_ADK_TXN_VK_MOBILE_START 0x12
```

TXN: mobile requested. 

### define EMV_CTLS_ADK_TXN_VK_L1_START

```
#define EMV_CTLS_ADK_TXN_VK_L1_START 0x13
```

TXN: L1 error. 

### define EMV_CTLS_ADK_TXN_VK_L1_MSD

```
#define EMV_CTLS_ADK_TXN_VK_L1_MSD 0x14
```

TXN: L1 error MSD. 

### define EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD

```
#define EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD 0x15
```

TXN: Start of PayPass. 

### define EMV_CTLS_ADK_TXN_VK_DECLINE_MSD

```
#define EMV_CTLS_ADK_TXN_VK_DECLINE_MSD 0x16
```

TXN: decline MSD. 

### define EMV_CTLS_ADK_TXN_VK_OK_MSD

```
#define EMV_CTLS_ADK_TXN_VK_OK_MSD 0x17
```

TXN: ok MSD. 

### define EMV_CTLS_ADK_TXN_VK_ONLINE_MSD

```
#define EMV_CTLS_ADK_TXN_VK_ONLINE_MSD 0x18
```

TXN: online MSD. 

### define EMV_CTLS_ADK_TXN_VK_OTHER_MSD

```
#define EMV_CTLS_ADK_TXN_VK_OTHER_MSD 0x19
```

TXN: other error MSD. 

### define EMV_CTLS_ADK_TXN_VK_L1_CHP

```
#define EMV_CTLS_ADK_TXN_VK_L1_CHP 0x1A
```

TXN: L1 error CHP. 

### define EMV_CTLS_ADK_TXN_VK_READCARD_CHP

```
#define EMV_CTLS_ADK_TXN_VK_READCARD_CHP 0x1B
```

TXN: read card CHP. 

### define EMV_CTLS_ADK_TXN_VK_DECLINE_CHP

```
#define EMV_CTLS_ADK_TXN_VK_DECLINE_CHP 0x1C
```

TXN: decline CHP. 

### define EMV_CTLS_ADK_TXN_VK_ONLINE_CHP

```
#define EMV_CTLS_ADK_TXN_VK_ONLINE_CHP 0x1D
```

TXN: online CHP. 

### define EMV_CTLS_ADK_TXN_VK_OK_CHP

```
#define EMV_CTLS_ADK_TXN_VK_OK_CHP 0x1E
```

TXN: ok CHP. 

### define EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP

```
#define EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP 0x1F
```

TXN: fallback CHP. 

### define EMV_CTLS_ADK_TXN_VK_OTHER_CHP

```
#define EMV_CTLS_ADK_TXN_VK_OTHER_CHP 0x20
```

TXN: other error CHP. 

### define EMV_CTLS_ADK_TXN_VK_DECLINE_START

```
#define EMV_CTLS_ADK_TXN_VK_DECLINE_START 0x21
```

TXN: decline start. 

### define EMV_CTLS_ADK_TXN_VK_FALLBACK_START

```
#define EMV_CTLS_ADK_TXN_VK_FALLBACK_START 0x22
```

TXN: fallback start. 

### define EMV_CTLS_ADK_TXN_VK_OTHER_START

```
#define EMV_CTLS_ADK_TXN_VK_OTHER_START 0x23
```

TXN: other error start. 

### define EMV_CTLS_ADK_TXN_VK_INIT_FAIL

```
#define EMV_CTLS_ADK_TXN_VK_INIT_FAIL 0x24
```

TXN: Init failed. 

### define EMV_CTLS_ADK_TXN_VK_GPO_RR

```
#define EMV_CTLS_ADK_TXN_VK_GPO_RR 0x25
```

TXN: Step ReadRecords and GPO. 

### define EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2

```
#define EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2 0x26
```

TXN: inconsisten track 2 and PAN. 

### define EMV_CTLS_ADK_TXN_VK_READCARD_MSD

```
#define EMV_CTLS_ADK_TXN_VK_READCARD_MSD 0x27
```

TXN: card read MSD. 

### define EMV_CTLS_ADK_TXN_VK_RETAP_START

```
#define EMV_CTLS_ADK_TXN_VK_RETAP_START 0x28
```

TXN: retap required. 

### define EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG

```
#define EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG 0x29
```

TXN: fallback because of failed card log reading. 

### define EMV_CTLS_ADK_TXN_KERNEL_START

```
#define EMV_CTLS_ADK_TXN_KERNEL_START 0x30
```

TXN: Start of Kernel Processing. 

### define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL

```
#define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL 0x31
```

TXN: new select. 

### define EMV_CTLS_ADK_TXN_KERNEL_RETAP_START

```
#define EMV_CTLS_ADK_TXN_KERNEL_RETAP_START 0x32
```

TXN: retap required. 

### define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START

```
#define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START 0x33
```

TXN: mobile requested. 

### define EMV_CTLS_ADK_TXN_KERNEL_L1_START

```
#define EMV_CTLS_ADK_TXN_KERNEL_L1_START 0x34
```

TXN: L1 error. 

### define EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD 0x35
```

TXN: retap reuired MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD 0x36
```

TXN: mobile requested MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_L1_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_L1_MSD 0x37
```

TXN: L1 error MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD 0x38
```

TXN: no data MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD 0x39
```

TXN: decline MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_OK_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_OK_MSD 0x3A
```

TXN: ok MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD 0x3B
```

TXN: online MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD 0x3C
```

TXN: other MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP 0x3D
```

TXN: retap reuired CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP 0x3E
```

TXN: mobile requested CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_L1_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_L1_CHP 0x3F
```

TXN: L1 error CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP 0x40
```

TXN: card data read CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP 0x41
```

TXN: decline CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP 0x42
```

TXN: online CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_OK_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_OK_CHP 0x43
```

TXN: ok CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP 0x44
```

TXN: use other interface. 

### define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP 0x45
```

TXN: new select CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP 0x46
```

TXN: other error CHP. 

### define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC

```
#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC 0x47
```

TXN: decline start. 

### define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START

```
#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START 0x48
```

TXN: fallback start. 

### define EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL

```
#define EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL 0x49
```

TXN: Init failed. 

### define EMV_CTLS_ADK_TXN_KERNEL_GPO_RR

```
#define EMV_CTLS_ADK_TXN_KERNEL_GPO_RR 0x4A
```

TXN: Step ReadRecords and GPO. 

### define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD

```
#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD 0x4B
```

TXN: use other card. 

### define EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP

```
#define EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP 0x4C
```

TXN: try Discover ZIP. 

### define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD 0x4D
```

TXN: fallback MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START

```
#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START 0x4E
```

TXN: decline before EOT. 

### define EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD

```
#define EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD 0x4F
```

TXN: read card MSD. 

### define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP 0x50
```

TXN: use other interface or other card. 

### define EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD

```
#define EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD 0x51
```

TXN: use other interface or other card. 

### define EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP

```
#define EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP 0x52
```

TXN: advice merchant to use other terminal. 

### define EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS

```
#define EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS 0x53
```

TXN: card holder exceeded number of taps allowed for one transaction. 

### define EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI

```
#define EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI 0x54
```

TXN: Interac bad FFI. 

### define EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY

```
#define EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY 0x70
```

TXN: Gemalto, special transaction GET DATA finished okay. 

### define EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL

```
#define EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL 0x71
```

TXN: Gemalto, special transaction GET DATA finished fail. 

### define EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY

```
#define EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY 0x72
```

TXN: Gemalto, special transaction PUT DATA finished okay. 

### define EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL

```
#define EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL 0x73
```

TXN: Gemalto, special transaction PUT DATA finished fail. 

### define EMV_CTLS_ADK_ONL_START

```
#define EMV_CTLS_ADK_ONL_START 0xF0
```

Online: Start. 

### define EMV_CTLS_ADK_ONL_NO_CTLS_TXN

```
#define EMV_CTLS_ADK_ONL_NO_CTLS_TXN 0xF1
```

Online: No Ctls transaction happened before call. 

### define EMV_CTLS_ADK_ONL_NO_HOST

```
#define EMV_CTLS_ADK_ONL_NO_HOST 0xF2
```

Online: no answer from host. 

### define EMV_CTLS_ADK_ONL_HOST_OK

```
#define EMV_CTLS_ADK_ONL_HOST_OK 0xF3
```

Online: host approved. 

### define EMV_CTLS_ADK_ONL_HOST_DECLINE

```
#define EMV_CTLS_ADK_ONL_HOST_DECLINE 0xF4
```

Online: host declined. 

### define EMV_CTLS_ADK_ONL_HOST_SWITCH_IF

```
#define EMV_CTLS_ADK_ONL_HOST_SWITCH_IF 0xF5
```

Online: Strong Consumer Authentication - switch interface. 

### define EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN

```
#define EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN 0xF6
```

Online: Strong Consumer Authentication - Online PIN. 

### define EMV_CTLS_ADK_END_TXN

```
#define EMV_CTLS_ADK_END_TXN 0xFE
```

TXN: End Transaction called. 

### define EMV_ADK_INF_INIT

```
#define EMV_ADK_INF_INIT 0x80
```

Initialization. 

### define EMV_ADK_INF_SEL_TERMDATA

```
#define EMV_ADK_INF_SEL_TERMDATA 0x81
```

Application selection: terminal data. 

### define EMV_ADK_INF_SEL_TEXTE

```
#define EMV_ADK_INF_SEL_TEXTE 0x82
```

Application selection: texts. 

### define EMV_ADK_INF_SEL_PAYINIT_OK

```
#define EMV_ADK_INF_SEL_PAYINIT_OK 0x83
```

Application selection: Init Payment OK. 

### define EMV_ADK_INF_SEL_CHECK_OK

```
#define EMV_ADK_INF_SEL_CHECK_OK 0x85
```

Application selection: Check OK. 

### define EMV_ADK_INF_SEL_BUILD_APPLI_LIST

```
#define EMV_ADK_INF_SEL_BUILD_APPLI_LIST 0x86
```

Application selection: Build Application List. 

### define EMV_ADK_INF_SEL_ANOTHER

```
#define EMV_ADK_INF_SEL_ANOTHER 0x87
```

Application selection: Other. 

### define EMV_ADK_INF_SEL_FINAL

```
#define EMV_ADK_INF_SEL_FINAL 0x88
```

Application selection: Final. 

### define EMV_ADK_INF_SEL_NO

```
#define EMV_ADK_INF_SEL_NO 0x89
```

Application selection: NO. 

### define EMV_ADK_INF_SEL_FINISH_OK

```
#define EMV_ADK_INF_SEL_FINISH_OK 0x8A
```

Application selection: Finished OK. 

### define EMV_ADK_INF_SEL_BLOCK_APPLI

```
#define EMV_ADK_INF_SEL_BLOCK_APPLI 0x8B
```

Application selection: Blocked Application. 

### define EMV_ADK_INF_SEL_BLOCK_CARD

```
#define EMV_ADK_INF_SEL_BLOCK_CARD 0x8C
```

Application selection: Blocked Card. 

### define EMV_ADK_INF_SEL_LOA_PROC

```
#define EMV_ADK_INF_SEL_LOA_PROC 0x8D
```

Application selection: LOA Processing. 

### define EMV_ADK_INF_SEL_UI_LOA_PROC

```
#define EMV_ADK_INF_SEL_UI_LOA_PROC 0x8E
```

Application selection: LOA Processing (uninterrupted) 

### define EMV_ADK_INF_TRANS_CHECK_OK

```
#define EMV_ADK_INF_TRANS_CHECK_OK 0x91
```

Offline transaction processing: Check OK. 

### define EMV_ADK_INF_TRANS_READ_TERM

```
#define EMV_ADK_INF_TRANS_READ_TERM 0x92
```

offline transaction processing: Read Terminal Data 

### define EMV_ADK_INF_TRANS_READ_APPLI

```
#define EMV_ADK_INF_TRANS_READ_APPLI 0x93
```

offline transaction processing: Read Application 

### define EMV_ADK_INF_TRANS_SEL_LANG

```
#define EMV_ADK_INF_TRANS_SEL_LANG 0x95
```

offline transaction processing: Select Language 

### define EMV_ADK_INF_TRANS_CONF_AMOUNT

```
#define EMV_ADK_INF_TRANS_CONF_AMOUNT 0x96
```

offline transaction processing: Confirm Amount 

### define EMV_ADK_INF_TRANS_INITIATE

```
#define EMV_ADK_INF_TRANS_INITIATE 0x97
```

offline transaction processing: Initiation 

### define EMV_ADK_INF_TRANS_READ_CARD_DATA

```
#define EMV_ADK_INF_TRANS_READ_CARD_DATA 0x98
```

offline transaction processing: Read Card Data 

### define EMV_ADK_INF_TRANS_CHECK_APPLI_DATA

```
#define EMV_ADK_INF_TRANS_CHECK_APPLI_DATA 0x99
```

offline transaction processing: Check Application Data 

### define EMV_ADK_INF_TRANS_PROC_RESTRICTION

```
#define EMV_ADK_INF_TRANS_PROC_RESTRICTION 0x9A
```

offline transaction processing: Process Restriction 

### define EMV_ADK_INF_TRANS_CARD_AUTH

```
#define EMV_ADK_INF_TRANS_CARD_AUTH 0x9B
```

offline transaction processing: Card Authentication 

### define EMV_ADK_INF_TRANS_VERIFY

```
#define EMV_ADK_INF_TRANS_VERIFY 0x9C
```

offline transaction processing: Verification 

### define EMV_ADK_INF_TRANS_RISK

```
#define EMV_ADK_INF_TRANS_RISK 0x9D
```

offline transaction processing: Risk 

### define EMV_ADK_INF_TRANS_AAT

```
#define EMV_ADK_INF_TRANS_AAT 0x9E
```

offline transaction processing: AAT (action analysis terminal) 

### define EMV_ADK_INF_TRANS_1GENAC

```
#define EMV_ADK_INF_TRANS_1GENAC 0x9F
```

offline transaction processing: 1st Genac 

### define EMV_ADK_INF_TRANS_VERIFY_CARD

```
#define EMV_ADK_INF_TRANS_VERIFY_CARD 0xA0
```

offline transaction processing: Verify Cardholder 

### define EMV_ADK_INF_TRANS_VERIFY_ABANDON

```
#define EMV_ADK_INF_TRANS_VERIFY_ABANDON 0xA1
```

offline transaction processing: Verify Abandon 

### define EMV_ADK_INF_TRANS_VERIFY_OTHER

```
#define EMV_ADK_INF_TRANS_VERIFY_OTHER 0xA2
```

offline transaction processing: Verify Other 

### define EMV_ADK_INF_TRANS_VERIFY_ONLINE

```
#define EMV_ADK_INF_TRANS_VERIFY_ONLINE 0xA3
```

offline transaction processing: Verify Online 

### define EMV_ADK_INF_TRANS_VERIFY_NOK

```
#define EMV_ADK_INF_TRANS_VERIFY_NOK 0xA4
```

offline transaction processing: Verify NOT OK 

### define EMV_ADK_INF_TRANS_VERIFY_OK

```
#define EMV_ADK_INF_TRANS_VERIFY_OK 0xA5
```

offline transaction processing: Verify OK 

### define EMV_ADK_INF_TRANS_VERIFY_SIGNATURE

```
#define EMV_ADK_INF_TRANS_VERIFY_SIGNATURE 0xA6
```

offline transaction processing: Verify Signature 

### define EMV_ADK_INF_TRANS_1CRYPT_TC

```
#define EMV_ADK_INF_TRANS_1CRYPT_TC 0xA7
```

offline transaction processing: 1st Cryptography TC 

### define EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA

```
#define EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA 0xA8
```

offline transaction processing: 1st Cryptography ARQC CDA 

### define EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER

```
#define EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER 0xA9
```

offline transaction processing: 1st Cryptography ARQC Other 

### define EMV_ADK_INF_TRANS_1CRYPT_AAC

```
#define EMV_ADK_INF_TRANS_1CRYPT_AAC 0xAA
```

offline transaction processing: 1st Cryptography AAC 

### define EMV_ADK_INF_TRANS_1CRYPT_AAR

```
#define EMV_ADK_INF_TRANS_1CRYPT_AAR 0xAB
```

offline transaction processing: 1st Cryptography AAC 

### define EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN

```
#define EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN 0xAC
```

offline transaction processing: 1st Cryptography Unknown 

### define EMV_ADK_INF_ONL_CHECK_OK

```
#define EMV_ADK_INF_ONL_CHECK_OK 0xB1
```

Processing the host response: Check OK. 

### define EMV_ADK_INF_ONL_FALSE

```
#define EMV_ADK_INF_ONL_FALSE 0xB3
```

Processing the host response: False. 

### define EMV_ADK_INF_ONL_TRUE

```
#define EMV_ADK_INF_ONL_TRUE 0xB4
```

Processing the host response: True. 

### define EMV_ADK_INF_ONL_PIN

```
#define EMV_ADK_INF_ONL_PIN 0xB5
```

Processing the host response: PIN. 

### define EMV_ADK_INF_ONL_HOST_AUTH

```
#define EMV_ADK_INF_ONL_HOST_AUTH 0xB6
```

Processing the host response: Host Authorization. 

### define EMV_ADK_INF_ONL_CRIT_SC

```
#define EMV_ADK_INF_ONL_CRIT_SC 0xB7
```

Processing the host response: Cirtical Script. 

### define EMV_ADK_INF_ONL_AC

```
#define EMV_ADK_INF_ONL_AC 0xB8
```

Processing the host response: AC. 

### define EMV_ADK_INF_ONL_2GENAC

```
#define EMV_ADK_INF_ONL_2GENAC 0xB9
```

Processing the host response: 2nd Generate AC. 

### define EMV_ADK_INF_ONL_UNCRIT_SC

```
#define EMV_ADK_INF_ONL_UNCRIT_SC 0xBA
```

Processing the host response: Uncritical Script. 

### define EMV_ADK_INF_TRANS_VERIFY_PARAM

```
#define EMV_ADK_INF_TRANS_VERIFY_PARAM 0xBB
```

Processing the host response: Verify Parameter. 

### define EMV_ADK_INF_FETCH_TXN_TAG_DATA

```
#define EMV_ADK_INF_FETCH_TXN_TAG_DATA 0xBC
```

Function `EMV_CT_fetchTxnTags`. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
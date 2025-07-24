---
hidden: true
title: ADK return codesGeneral topics
---

[Macros](#define-members) \| [Typedefs](#typedef-members)

Collaboration diagram for ADK return codes:

![](group___a_d_k___r_e_t___c_o_d_e.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_OK](#ga1456bb13b42906927f8a8942169b62e7)   0 |
|   | Function successful, no error. [More\...](#ga1456bb13b42906927f8a8942169b62e7)<br/> |
| #define  | [EMV_ADK_APP_REQ_START](#gaae0cf180db0eb31571483f68f247b395)   0xA0 |
|   | CT Reentrance mode: Application requested return start reserved codes. [More\...](#gaae0cf180db0eb31571483f68f247b395)<br/> |
| #define  | [EMV_ADK_APP_REQ_CANDIDATE](#gaed9d54e360dbfb4a72c615596c8a87fc)   0xA1 |
|   | CT Reentrance mode: Application requested return application selection. [More\...](#gaed9d54e360dbfb4a72c615596c8a87fc)<br/> |
| #define  | [EMV_ADK_APP_REQ_READREC](#ga7e8709216fe47553fc0c129f71846579)   0xA2 |
|   | CT Reentrance mode: Application requested return read records. [More\...](#ga7e8709216fe47553fc0c129f71846579)<br/> |
| #define  | [EMV_ADK_APP_REQ_DATAAUTH](#ga3ebf5cde005e4770514ac5b6c4a93cf0)   0xA3 |
|   | CT Reentrance mode: Application requested return data authentication. [More\...](#ga3ebf5cde005e4770514ac5b6c4a93cf0)<br/> |
| #define  | [EMV_ADK_APP_REQ_ONL_PIN](#ga50c0c0b8fa6d7b1356c1604ad4f04e2e)   0xA4 |
|   | CT Reentrance mode: Application requested return for online PIN entry. [More\...](#ga50c0c0b8fa6d7b1356c1604ad4f04e2e)<br/> |
| #define  | [EMV_ADK_APP_REQ_OFL_PIN](#ga9f24ffaff279cf995620ec108e5f43ae)   0xA5 |
|   | CT Reentrance mode: Application requested return for offline PIN entry. [More\...](#ga9f24ffaff279cf995620ec108e5f43ae)<br/> |
| #define  | [EMV_ADK_APP_REQ_PLAIN_PIN](#gae60344ca125866bbf74c921df04c6a15)   0xA6 |
|   | CT Reentrance mode: Application requested return for plaintext PIN entry. [More\...](#gae60344ca125866bbf74c921df04c6a15)<br/> |
| #define  | [EMV_ADK_APP_REQ_CVM_END](#gabdfc095e6577d12f82285f938328b678)   0xA7 |
|   | CT Reentrance mode: Application requested return cardholder verification. [More\...](#gabdfc095e6577d12f82285f938328b678)<br/> |
| #define  | [EMV_ADK_APP_REQ_RISK_MAN](#gaeec298e8f5ee75843d4b029f06334038)   0xA8 |
|   | CT Reentrance mode: Application requested return riskmanagement. [More\...](#gaeec298e8f5ee75843d4b029f06334038)<br/> |
| #define  | [EMV_ADK_APP_REQ_CUST_CVM](#gac34718369beab5534c0bf9407179298e)   0xA9 |
|   | CT Reentrance mode: Application requested return for customCVM method. [More\...](#gac34718369beab5534c0bf9407179298e)<br/> |
| #define  | [EMV_ADK_APP_REQ_APPS_PREPROC](#ga6f0928c2fe4216f6c7b8d95a295ea27a)   0xAA |
|   | CT Reentrance mode: Application requested return for candidate list manipulation. [More\...](#ga6f0928c2fe4216f6c7b8d95a295ea27a)<br/> |
| #define  | [EMV_ADK_APP_REQ_AFTER_GPO](#ga68763f74d49df69973ffe93e17db5df2)   0xAB |
|   | CT Reentrance mode: Application requested return for return after GPO. [More\...](#ga68763f74d49df69973ffe93e17db5df2)<br/> |
| #define  | [EMV_ADK_APP_REQ_BUILD_LIST](#ga5d8068fba481cd994ad90650868e134b)   0xAC |
|   | CT Reentrance mode: Application requested return before terminal candidate list build. [More\...](#ga5d8068fba481cd994ad90650868e134b)<br/> |
| #define  | [EMV_ADK_APP_REQ_END](#ga41a87a27c017cfc748b95d4406eecfd3)   0xAF |
|   | CT Reentrance mode: Application requested return end of reserved codes. [More\...](#ga41a87a27c017cfc748b95d4406eecfd3)<br/> |
| #define  | [EMV_ADK_EMPTY_CONFIG](#ga69f396193e4def503c935de027b5dd9e)   0xC6 |
|   | Empty configuration. [More\...](#ga69f396193e4def503c935de027b5dd9e)<br/> |
| #define  | [EMV_ADK_TERMINATE_CDCVM_RETRY](#gab35b36c5f7adc118eeb46c0a43fe3e45)   0xC7 |
|   | DPAS CDCVM has not been performed. Terminate the transaction, prompt the Cardholder to remove the card, perform CDCVM, and try again. [More\...](#gab35b36c5f7adc118eeb46c0a43fe3e45)<br/> |
| #define  | [EMV_ADK_TIMEOUT](#gab74c96109e0d2e68a62673286075c560)   0xC8 |
|   | Timeout. [More\...](#gab74c96109e0d2e68a62673286075c560)<br/> |
| #define  | [EMV_ADK_MAX_CFG_NUMBER_EXCEEDED](#ga3adc70d672a6da9dff5859785e2fe955)   0xC9 |
|   | CTLS: Number of keys uploaded to VFI Reader exceeded (appears when number of keys more than 99, all next keys are ignored) [More\...](#ga3adc70d672a6da9dff5859785e2fe955)<br/> |
| #define  | [EMV_ADK_VFI_FAIL](#ga826808ff642e703f810898847e031b98)   0xCA |
| #define  | [EMV_ADK_CTLS_OFFLINE_PIN](#ga526c9428888487636a2f61b14533b0c4)   0xCB |
|   | Transaction to be continued after PIN input for girocard (German debit card) Offline PIN CVM. [More\...](#ga526c9428888487636a2f61b14533b0c4)<br/> |
| #define  | [EMV_ADK_NOT_ACCEPTED](#ga863ac8601603cfa61ef0d6d794742ded)   0xCC |
|   | Transaction / Payment type not accepted. [More\...](#ga863ac8601603cfa61ef0d6d794742ded)<br/> |
| #define  | [EMV_ADK_CANCELLED](#ga0ea2dfe4133a48c8ba1c2c6f083456b2)   0xCD |
|   | Contactless only<br/>Transaction was cancelled by <a href="group___f_u_n_c___f_l_o_w.md#ga2b4820be53959b56fb7f672bd54f4e63">EMV_CTLS_Break()</a> [More\...](#ga0ea2dfe4133a48c8ba1c2c6f083456b2)<br/> |
| #define  | [EMV_ADK_CARD_LOG_LOG_OK](#ga5a816be637c4bea49241c5adb1251921)   0xCE |
|   | Return code for successful read of cards transaction log (currently qPBOC only) [More\...](#ga5a816be637c4bea49241c5adb1251921)<br/> |
| #define  | [EMV_ADK_CTLS_LOW_BATTERY](#ga58557878ed94f8e27c606a675afdd5e6)   0xCF |
|   | Return code for EMV_CTLS_SetupTransaction indicating mobile device\'s battery too low for contactless transaction. [More\...](#ga58557878ed94f8e27c606a675afdd5e6)<br/> |
| #define  | [EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF](#ga40078f8164a34afef771e922a935a5e7)   0xD0 |
|   | CTLS: The function is not allowed when using this config interface. [More\...](#ga40078f8164a34afef771e922a935a5e7)<br/> |
| #define  | [EMV_ADK_VIRTTERMMAP_WRONG_INIT](#ga7c824fdc6135c521a5d9bfc1a2a71c85)   0xD1 |
|   | Virtual terminal map is configured, but transaction is started with virtual terminal != 0. [More\...](#ga7c824fdc6135c521a5d9bfc1a2a71c85)<br/> |
| #define  | [EMV_ADK_TOO_MANY_TAPS](#gabe41cb42142b83678146fe6ee1547152)   0xD2 |
|   | CTLS: card holder exceeded the number of taps allowed for one transaction (Interac to show \"Cannot Process transaction - too many taps\") [More\...](#gabe41cb42142b83678146fe6ee1547152)<br/> |
| #define  | [EMV_ADK_CAN_NOT_PROCESS](#ga3175b735efc182d22c99accc1fe86a96)   0xD3 |
|   | (will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported) [More\...](#ga3175b735efc182d22c99accc1fe86a96)<br/> |
| #define  | [EMV_ADK_USE_ANOTHER_CTLS_CARD](#ga1d74ac7463ef972f6fb458bdade5cfd8)   0xD4 |
|   | CTLS: advice the customer to use another CTLS card (will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported) [More\...](#ga1d74ac7463ef972f6fb458bdade5cfd8)<br/> |
| #define  | [EMV_ADK_USE_OTHER_TERMINAL](#gab7ba6c5087c4dbeb0d5c99312c38ab49)   0xD5 |
|   | CTLS: advice the merchant to use another terminal to process the transaction (Interac spec requirement) [More\...](#gab7ba6c5087c4dbeb0d5c99312c38ab49)<br/> |
| #define  | [EMV_ADK_SCRIPT_PROCESSING_COMPLETE](#ga4ec730a0bbd30cf666d84eb6f02d1473)   0xD6 |
|   | CTLS: explicit script processing completed (CTLS, e.g. Discover DPAS) [More\...](#ga4ec730a0bbd30cf666d84eb6f02d1473)<br/> |
| #define  | [EMV_ADK_FALLBACK_CHIP_ONLY](#ga9c3ffa7ae38648dda00a7f3d65775d2f)   0xD7 |
|   | CTLS: Fallback to chip (CTLS), no msr allowed. [More\...](#ga9c3ffa7ae38648dda00a7f3d65775d2f)<br/> |
| #define  | [EMV_ADK_READER_CMD_NOT_ALLOWED](#ga1dacd808ce3e0d37daea5d3162e4f5ce)   0xD8 |
| #define  | [EMV_ADK_NOT_ALLOWED](#ga3a1d800696b9d7a86c0e39068d3fde57)   0xD9 |
|   | Parallel function call not allowed. [More\...](#ga3a1d800696b9d7a86c0e39068d3fde57)<br/> |
| #define  | [EMV_ADK_CTLS_NOT_AVAILABLE](#ga4ea6891b4dd6c0d8d8703b8654453cbf)   0xDA |
|   | CTLS not present on hardware per OS information. [More\...](#ga4ea6891b4dd6c0d8d8703b8654453cbf)<br/> |
| #define  | [EMV_ADK_USR_BCKSPC_KEY_PRESSED](#ga73ac1b36b24d6c30117cc4a62585edc3)   0xDB |
|   | Application requested return for E_USR_BACKSPACE_KEY_PRESSED, not used anymore. [More\...](#ga73ac1b36b24d6c30117cc4a62585edc3)<br/> |
| #define  | [EMV_ADK_CEILING_LIMIT](#ga9d45b7eb80fa296f2932eef3ffe1bd8a)   0xDC |
|   | CTLS: amount is above the ceiling limit for CTLS (either terminal ceiling limit or highest scheme ceiling limit) [More\...](#ga9d45b7eb80fa296f2932eef3ffe1bd8a)<br/> |
| #define  | [EMV_ADK_CTLS_RETAP_SAME](#ga96d411b44e6e9da54f7645925d49450c)   0xDD |
|   | CTLS: start over with re-tapping the same card (deactivation/activation/start txn) [More\...](#ga96d411b44e6e9da54f7645925d49450c)<br/> |
| #define  | [EMV_ADK_CTLS_DOMESTIC_APP](#ga5ac7394992bf95374fa70bc6a86298f4)   0xDE |
|   | CTLS: Domestic Application Kernel selected. [More\...](#ga5ac7394992bf95374fa70bc6a86298f4)<br/> |
| #define  | [EMV_ADK_NO_CARD](#ga2e738502a536ed7190406ce0e7c6916d)   0xDF |
|   | CTLS: No card processing so far. [More\...](#ga2e738502a536ed7190406ce0e7c6916d)<br/> |
| #define  | [EMV_ADK_NOAPP](#ga14713da8fe0512c8700f524279d2e573)   0xE0 |
|   | CT: Return code if application not found by <a href="group___f_u_n_c___f_l_o_w.md#gad55c11dd44dbba66d6fefeb48b01a9e4">EMV_CT_CheckSupportedAID()</a>.<br/>CTLS: Empty terminal candidate list (e.g. all application\'s ceiling limits exceeded) at <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a>. [More\...](#ga14713da8fe0512c8700f524279d2e573)<br/> |
| #define  | [EMV_ADK_NO_EXEC](#ga7ffea44a30b0451d393487eae4035b4e)   0xE1 |
|   | CT & CTLS: not executable. [More\...](#ga7ffea44a30b0451d393487eae4035b4e)<br/> |
| #define  | [EMV_ADK_ARQC](#ga493578e3e0e9112d42d209b783fe1f60)   0xE2 |
|   | CT & CTLS: Transaction must be performed online. [More\...](#ga493578e3e0e9112d42d209b783fe1f60)<br/> |
| #define  | [EMV_ADK_TC](#ga555e8c267be8402d0b540253a991e1ee)   0xE3 |
|   | CT & CTLS: Transaction performed (offline / online) [More\...](#ga555e8c267be8402d0b540253a991e1ee)<br/> |
| #define  | [EMV_ADK_AAC](#ga956701431c0cef09072c040d816e5d7b)   0xE4 |
|   | CT & CTLS: Transaction declined. [More\...](#ga956701431c0cef09072c040d816e5d7b)<br/> |
| #define  | [EMV_ADK_AAR](#ga43a6dcc45fcf91c2ef8e73afc38ea121)   0xE5 |
|   | CT: Transaction cancellation (former \"card referral\"), not used anymore. [More\...](#ga43a6dcc45fcf91c2ef8e73afc38ea121)<br/> |
| #define  | [EMV_ADK_PARAM](#ga89c11346e5e636e7c9d42c6a772674bf)   0xE6 |
|   | CT & CTLS: Parameter error (wrong parameter was passed to the function) [More\...](#ga89c11346e5e636e7c9d42c6a772674bf)<br/> |
| #define  | [EMV_ADK_CARDERR](#ga5db7ec54114a9799fb2f75892215ad0a)   0xE7 |
|   | CT & CTLS: Proprietary card error (actually converted to [EMV_ADK_FALLBACK](#ga5f6c47c1042b70f3753191850219e745 "CT & CTLS: Fallback to chip/msr (for CTLS) respectively magstripe (for CT) must be done.")) [More\...](#ga5db7ec54114a9799fb2f75892215ad0a)<br/> |
| #define  | [EMV_ADK_BADAPP](#gab2bd25812bbdf301a668a2b1c07f63d9)   0xE8 |
|   | CT: Repeat EMV_Select function call-up because selected application on the proprietary card is erroneous. The currently selected application must be transferred (not NO_APPLI) -\> this leads to new application selection but the candidate list is not reconstructed. [More\...](#gab2bd25812bbdf301a668a2b1c07f63d9)<br/> |
| #define  | [EMV_ADK_CVM](#ga23fcc197f78dfa83f4c93f97faaa729e)   0xE9 |
|   | CT: User abort during PIN input (cancel button, timeout, card removed) [More\...](#ga23fcc197f78dfa83f4c93f97faaa729e)<br/> |
| #define  | [EMV_ADK_ABORT](#ga7045deba09a19eea4f7df8881a08b807)   0xEA |
|   | On transaction function it means that current transaction must be aborted.<br/>On configuration function it represents \"failed\". [More\...](#ga7045deba09a19eea4f7df8881a08b807)<br/> |
| #define  | [EMV_ADK_CARD_BLOCKED](#ga1dfbf84d77767d546775d51566cb9b3d)   0xEB |
|   | CT & CTLS: Blocked card, regional dependent if fallback to magstripe should be done. [More\...](#ga1dfbf84d77767d546775d51566cb9b3d)<br/> |
| #define  | [EMV_ADK_CARDERR_FORMAT](#gacf4f664d525a588d4a4e549002e454cd)   0xEC |
|   | Card error e.g. erroneous TLV coding, incorrect data -\> no transaction cancellation. [More\...](#gacf4f664d525a588d4a4e549002e454cd)<br/> |
| #define  | [EMV_ADK_INTERNAL](#gab0e8158b5e7019f0da44c5cbc37bae3d)   0xED |
|   | CT & CTLS: e.g. erroneous communication to PINPad, internal error, not (completely) initialized (function not allowed due to <a href="group___f_u_n_c___i_n_i_t.md#ga514e39585c5a6b79632ac317593ff592">EMV_CT_Init_Framework()</a> with <a href="group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#gaddbf06b75108654b48044e5f701fcbfc">EMV_CT_INIT_OPT_BASE_INIT()</a>) [More\...](#gab0e8158b5e7019f0da44c5cbc37bae3d)<br/> |
| #define  | [EMV_ADK_ONLINE_PIN_RETRY](#ga1c45091db79e3fb0564afd1c0fde9820)   0xEE |
|   | CT: Online PIN reentered (PIN check).<br/><a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline()</a>will return this value in the following scenario: Online PIN was entered. Host returned \"PIN wrong\".<br/>Calling application must contact host again. And afterwards call <a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline()</a>once again. [More\...](#ga1c45091db79e3fb0564afd1c0fde9820)<br/> |
| #define  | [EMV_ADK_SAVE_ERROR](#ga19d5dde29e85ada4f706ca65644df705)   0xEF |
|   | Writing config files failed. ANSI C functions fopen(), fwrite(), or fclose() gave back error. Make sure that file access rights are setup correctly. [More\...](#ga19d5dde29e85ada4f706ca65644df705)<br/> |
| #define  | [EMV_ADK_APP_BLOCKED](#gab48a793910e1f71ce30d16a19f6af3e8)   0xF0 |
|   | Application blocked: AID evaluation at fallback, no global fallback because it is not allowed for this special blocked application. [More\...](#gab48a793910e1f71ce30d16a19f6af3e8)<br/> |
| #define  | [EMV_ADK_READ_ERROR](#gaa385b17c04a9c6bbc0093a7ccfc3b11a)   0xF1 |
|   | Error while reading EMV configuration. [More\...](#gaa385b17c04a9c6bbc0093a7ccfc3b11a)<br/> |
| #define  | [EMV_ADK_ERR_HSM](#ga61d626babfbbb727f0e45d7219031947)   0xF2 |
|   | E.g. erroneous communication to PINPad, internal error, not used anymore. [More\...](#ga61d626babfbbb727f0e45d7219031947)<br/> |
| #define  | [EMV_ADK_TLV_BUILD_ERR](#ga4837e54c589150debdef49afb8f9b5db)   0xF3 |
|   | CT & CTLS: Error in TLV data object = internal error. [More\...](#ga4837e54c589150debdef49afb8f9b5db)<br/> |
| #define  | [EMV_ADK_FALLBACK](#ga5f6c47c1042b70f3753191850219e745)   0xF4 |
|   | CT & CTLS: Fallback to chip/msr (for CTLS) respectively magstripe (for CT) must be done. [More\...](#ga5f6c47c1042b70f3753191850219e745)<br/> |
| #define  | [EMV_ADK_ONL_PIN_REPEAT](#gae80d82057fc9057a5555c08cbe1a013a)   0xF5 |
|   | CT: wrong Online-PIN, repeat transaction (reduced) beginning with <a href="group___f_u_n_c___f_l_o_w.md#gac13472c2a4aea6475fe7bb52627e97eb">EMV_CT_StartTransaction()</a> [More\...](#gae80d82057fc9057a5555c08cbe1a013a)<br/> |
| #define  | [EMV_ADK_MAND_ELEM_MISSING](#ga25a3deb540cc7a021b162caf736cedd6)   0xF6 |
|   | CT: mandatory (TLV) element missing (EMV-configuration), not used anymore. [More\...](#ga25a3deb540cc7a021b162caf736cedd6)<br/> |
| #define  | [EMV_ADK_INVALID_TERM_CAP](#ga63b90cf63f7b9e1b55766589576e434e)   0xF7 |
|   | CT & CTLS: invalid terminal capabilities (EMV-configuration), not used anymore. [More\...](#ga63b90cf63f7b9e1b55766589576e434e)<br/> |
| #define  | [EMV_ADK_REFERRAL](#ga448fd17086a0da2e18f340086983c120)   0xF8 |
|   | CT: a referral of the application decides if the TRX is approved or not. [More\...](#ga448fd17086a0da2e18f340086983c120)<br/> |
| #define  | [EMV_ADK_2_CTLS_CARDS](#gae6c14e614a295de7546c3311fe157186)   0xF9 |
|   | CTLS: 2 CTLS cards in the field detected. If this is reported after a call to ContinueOffline 2 cards have been detected in the field. The transaction is terminated in this case and must be restarted with a new call of SetupTransaction. This is mandatory for the VFI-Reader ADK and optional (but works as well) for teh Velocity/VERTX based ADK. [More\...](#gae6c14e614a295de7546c3311fe157186)<br/> |
| #define  | [EMV_ADK_TXN_CTLS_L1_ERR](#gaf213d2b31adbe9f1e124292da4e2d4fe)   0xFA |
|   | CTLS: level 1 problem, retap necessary. [More\...](#gaf213d2b31adbe9f1e124292da4e2d4fe)<br/> |
| #define  | [EMV_ADK_TXN_CTLS_MOBILE](#ga2a847e1e4db9a2b11008f0df23abbcd6)   0xFB |
|   | CTLS: mobile device, retap necessary. [More\...](#ga2a847e1e4db9a2b11008f0df23abbcd6)<br/> |
| #define  | [EMV_ADK_TXN_CTLS_EMPTY_LIST](#ga4f8a5311a9bbc3494c299411622c78be)   0xFC |
|   | CTLS: empty candidate list. The application shall display \"please use other interface\" and (depending on regional market requirements) additionally \"or tap another card\". [More\...](#ga4f8a5311a9bbc3494c299411622c78be)<br/> |
| #define  | [EMV_ADK_TXN_EMPTY_LIST](#ga321bbf465c50cf89772989dec678ae60)   [EMV_ADK_TXN_CTLS_EMPTY_LIST](#ga4f8a5311a9bbc3494c299411622c78be) |
|   | CT & CTLS: Empty candidate List = no common application between card and terminal. For CT usually [EMV_ADK_FALLBACK](#ga5f6c47c1042b70f3753191850219e745) is returned in any case, card error and empty list. If the caller needs to distinguish these cases, she has to enable this return code via <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CT_SELECT_STRUCT::TxnOptions</a> bit EMV_CT_SELOP_DETECT_EMPTY_LIST. [More\...](#ga321bbf465c50cf89772989dec678ae60)<br/> |
| #define  | [EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD](#gabd933d2fe0912fe347e1c872333d2e3d)   0xFD |
|   | CTLS: insert, swipe or try another card. [More\...](#gabd933d2fe0912fe347e1c872333d2e3d)<br/> |
| #define  | [EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE](#gad4f43a6192069315fd85563505616d8d)   0xFE |
|   | CTLS: domestic not readable (no AID and EMV not configured) [More\...](#gad4f43a6192069315fd85563505616d8d)<br/> |
| #define  | [EMV_ADK_CONTINUE](#gab0311c0ec011b5d79651a56a8eb5f35c)   0xFF |
|   | CT & CTLS: Transaction can be continued (e.g. CTLS Commit) [More\...](#gab0311c0ec011b5d79651a56a8eb5f35c)<br/> |

|  |  |
|----|----|
| Typedefs |  |
| typedef unsigned char  | [EMV_ADK_INFO](#gaa5ed8ecc7a31f36a8927e6e258187810) |
|   | type of return code [More\...](#gaa5ed8ecc7a31f36a8927e6e258187810)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_2_CTLS_CARDS <a href="#gae6c14e614a295de7546c3311fe157186" id="gae6c14e614a295de7546c3311fe157186"></a>

<p>#define EMV_ADK_2_CTLS_CARDS   0xF9</p>

CTLS: 2 CTLS cards in the field detected. If this is reported after a call to ContinueOffline 2 cards have been detected in the field. The transaction is terminated in this case and must be restarted with a new call of SetupTransaction. This is mandatory for the VFI-Reader ADK and optional (but works as well) for teh Velocity/VERTX based ADK.

## EMV_ADK_AAC <a href="#ga956701431c0cef09072c040d816e5d7b" id="ga956701431c0cef09072c040d816e5d7b"></a>

<p>#define EMV_ADK_AAC   0xE4</p>

CT & CTLS: Transaction declined.

## EMV_ADK_AAR <a href="#ga43a6dcc45fcf91c2ef8e73afc38ea121" id="ga43a6dcc45fcf91c2ef8e73afc38ea121"></a>

<p>#define EMV_ADK_AAR   0xE5</p>

CT: Transaction cancellation (former \"card referral\"), not used anymore.

## EMV_ADK_ABORT <a href="#ga7045deba09a19eea4f7df8881a08b807" id="ga7045deba09a19eea4f7df8881a08b807"></a>

<p>#define EMV_ADK_ABORT   0xEA</p>

On transaction function it means that current transaction must be aborted.
On configuration function it represents \"failed\".

## EMV_ADK_APP_BLOCKED <a href="#gab48a793910e1f71ce30d16a19f6af3e8" id="gab48a793910e1f71ce30d16a19f6af3e8"></a>

<p>#define EMV_ADK_APP_BLOCKED   0xF0</p>

Application blocked: AID evaluation at fallback, no global fallback because it is not allowed for this special blocked application.

## EMV_ADK_APP_REQ_AFTER_GPO <a href="#ga68763f74d49df69973ffe93e17db5df2" id="ga68763f74d49df69973ffe93e17db5df2"></a>

<p>#define EMV_ADK_APP_REQ_AFTER_GPO   0xAB</p>

CT Reentrance mode: Application requested return for return after GPO.

## EMV_ADK_APP_REQ_APPS_PREPROC <a href="#ga6f0928c2fe4216f6c7b8d95a295ea27a" id="ga6f0928c2fe4216f6c7b8d95a295ea27a"></a>

<p>#define EMV_ADK_APP_REQ_APPS_PREPROC   0xAA</p>

CT Reentrance mode: Application requested return for candidate list manipulation.

## EMV_ADK_APP_REQ_BUILD_LIST <a href="#ga5d8068fba481cd994ad90650868e134b" id="ga5d8068fba481cd994ad90650868e134b"></a>

<p>#define EMV_ADK_APP_REQ_BUILD_LIST   0xAC</p>

CT Reentrance mode: Application requested return before terminal candidate list build.

## EMV_ADK_APP_REQ_CANDIDATE <a href="#gaed9d54e360dbfb4a72c615596c8a87fc" id="gaed9d54e360dbfb4a72c615596c8a87fc"></a>

<p>#define EMV_ADK_APP_REQ_CANDIDATE   0xA1</p>

CT Reentrance mode: Application requested return application selection.

## EMV_ADK_APP_REQ_CUST_CVM <a href="#gac34718369beab5534c0bf9407179298e" id="gac34718369beab5534c0bf9407179298e"></a>

<p>#define EMV_ADK_APP_REQ_CUST_CVM   0xA9</p>

CT Reentrance mode: Application requested return for customCVM method.

## EMV_ADK_APP_REQ_CVM_END <a href="#gabdfc095e6577d12f82285f938328b678" id="gabdfc095e6577d12f82285f938328b678"></a>

<p>#define EMV_ADK_APP_REQ_CVM_END   0xA7</p>

CT Reentrance mode: Application requested return cardholder verification.

## EMV_ADK_APP_REQ_DATAAUTH <a href="#ga3ebf5cde005e4770514ac5b6c4a93cf0" id="ga3ebf5cde005e4770514ac5b6c4a93cf0"></a>

<p>#define EMV_ADK_APP_REQ_DATAAUTH   0xA3</p>

CT Reentrance mode: Application requested return data authentication.

## EMV_ADK_APP_REQ_END <a href="#ga41a87a27c017cfc748b95d4406eecfd3" id="ga41a87a27c017cfc748b95d4406eecfd3"></a>

<p>#define EMV_ADK_APP_REQ_END   0xAF</p>

CT Reentrance mode: Application requested return end of reserved codes.

## EMV_ADK_APP_REQ_OFL_PIN <a href="#ga9f24ffaff279cf995620ec108e5f43ae" id="ga9f24ffaff279cf995620ec108e5f43ae"></a>

<p>#define EMV_ADK_APP_REQ_OFL_PIN   0xA5</p>

CT Reentrance mode: Application requested return for offline PIN entry.

## EMV_ADK_APP_REQ_ONL_PIN <a href="#ga50c0c0b8fa6d7b1356c1604ad4f04e2e" id="ga50c0c0b8fa6d7b1356c1604ad4f04e2e"></a>

<p>#define EMV_ADK_APP_REQ_ONL_PIN   0xA4</p>

CT Reentrance mode: Application requested return for online PIN entry.

## EMV_ADK_APP_REQ_PLAIN_PIN <a href="#gae60344ca125866bbf74c921df04c6a15" id="gae60344ca125866bbf74c921df04c6a15"></a>

<p>#define EMV_ADK_APP_REQ_PLAIN_PIN   0xA6</p>

CT Reentrance mode: Application requested return for plaintext PIN entry.

## EMV_ADK_APP_REQ_READREC <a href="#ga7e8709216fe47553fc0c129f71846579" id="ga7e8709216fe47553fc0c129f71846579"></a>

<p>#define EMV_ADK_APP_REQ_READREC   0xA2</p>

CT Reentrance mode: Application requested return read records.

## EMV_ADK_APP_REQ_RISK_MAN <a href="#gaeec298e8f5ee75843d4b029f06334038" id="gaeec298e8f5ee75843d4b029f06334038"></a>

<p>#define EMV_ADK_APP_REQ_RISK_MAN   0xA8</p>

CT Reentrance mode: Application requested return riskmanagement.

## EMV_ADK_APP_REQ_START <a href="#gaae0cf180db0eb31571483f68f247b395" id="gaae0cf180db0eb31571483f68f247b395"></a>

<p>#define EMV_ADK_APP_REQ_START   0xA0</p>

CT Reentrance mode: Application requested return start reserved codes.

## EMV_ADK_ARQC <a href="#ga493578e3e0e9112d42d209b783fe1f60" id="ga493578e3e0e9112d42d209b783fe1f60"></a>

<p>#define EMV_ADK_ARQC   0xE2</p>

CT & CTLS: Transaction must be performed online.

## EMV_ADK_BADAPP <a href="#gab2bd25812bbdf301a668a2b1c07f63d9" id="gab2bd25812bbdf301a668a2b1c07f63d9"></a>

<p>#define EMV_ADK_BADAPP   0xE8</p>

CT: Repeat EMV_Select function call-up because selected application on the proprietary card is erroneous. The currently selected application must be transferred (not NO_APPLI) -\> this leads to new application selection but the candidate list is not reconstructed.

## EMV_ADK_CAN_NOT_PROCESS <a href="#ga3175b735efc182d22c99accc1fe86a96" id="ga3175b735efc182d22c99accc1fe86a96"></a>

<p>#define EMV_ADK_CAN_NOT_PROCESS   0xD3</p>

(will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported)

CTLS: card can\'t be processed, e.g. PIN required in CTLS Interac but CT not available

## EMV_ADK_CANCELLED <a href="#ga0ea2dfe4133a48c8ba1c2c6f083456b2" id="ga0ea2dfe4133a48c8ba1c2c6f083456b2"></a>

<p>#define EMV_ADK_CANCELLED   0xCD</p>

Contactless only
Transaction was cancelled by <a href="group___f_u_n_c___f_l_o_w.md#ga2b4820be53959b56fb7f672bd54f4e63">EMV_CTLS_Break()</a>

## EMV_ADK_CARD_BLOCKED <a href="#ga1dfbf84d77767d546775d51566cb9b3d" id="ga1dfbf84d77767d546775d51566cb9b3d"></a>

<p>#define EMV_ADK_CARD_BLOCKED   0xEB</p>

CT & CTLS: Blocked card, regional dependent if fallback to magstripe should be done.

## EMV_ADK_CARD_LOG_LOG_OK <a href="#ga5a816be637c4bea49241c5adb1251921" id="ga5a816be637c4bea49241c5adb1251921"></a>

<p>#define EMV_ADK_CARD_LOG_LOG_OK   0xCE</p>

Return code for successful read of cards transaction log (currently qPBOC only)

## EMV_ADK_CARDERR <a href="#ga5db7ec54114a9799fb2f75892215ad0a" id="ga5db7ec54114a9799fb2f75892215ad0a"></a>

<p>#define EMV_ADK_CARDERR   0xE7</p>

CT & CTLS: Proprietary card error (actually converted to [EMV_ADK_FALLBACK](#ga5f6c47c1042b70f3753191850219e745 "CT & CTLS: Fallback to chip/msr (for CTLS) respectively magstripe (for CT) must be done."))

## EMV_ADK_CARDERR_FORMAT <a href="#gacf4f664d525a588d4a4e549002e454cd" id="gacf4f664d525a588d4a4e549002e454cd"></a>

<p>#define EMV_ADK_CARDERR_FORMAT   0xEC</p>

Card error e.g. erroneous TLV coding, incorrect data -\> no transaction cancellation.

## EMV_ADK_CEILING_LIMIT <a href="#ga9d45b7eb80fa296f2932eef3ffe1bd8a" id="ga9d45b7eb80fa296f2932eef3ffe1bd8a"></a>

<p>#define EMV_ADK_CEILING_LIMIT   0xDC</p>

CTLS: amount is above the ceiling limit for CTLS (either terminal ceiling limit or highest scheme ceiling limit)

## EMV_ADK_CONTINUE <a href="#gab0311c0ec011b5d79651a56a8eb5f35c" id="gab0311c0ec011b5d79651a56a8eb5f35c"></a>

<p>#define EMV_ADK_CONTINUE   0xFF</p>

CT & CTLS: Transaction can be continued (e.g. CTLS Commit)

## EMV_ADK_CTLS_DOMESTIC_APP <a href="#ga5ac7394992bf95374fa70bc6a86298f4" id="ga5ac7394992bf95374fa70bc6a86298f4"></a>

<p>#define EMV_ADK_CTLS_DOMESTIC_APP   0xDE</p>

CTLS: Domestic Application Kernel selected.

## EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE <a href="#gad4f43a6192069315fd85563505616d8d" id="gad4f43a6192069315fd85563505616d8d"></a>

<p>#define EMV_ADK_CTLS_DOMESTIC_ONLY_NOT_READABLE   0xFE</p>

CTLS: domestic not readable (no AID and EMV not configured)

## EMV_ADK_CTLS_LOW_BATTERY <a href="#ga58557878ed94f8e27c606a675afdd5e6" id="ga58557878ed94f8e27c606a675afdd5e6"></a>

<p>#define EMV_ADK_CTLS_LOW_BATTERY   0xCF</p>

Return code for EMV_CTLS_SetupTransaction indicating mobile device\'s battery too low for contactless transaction.

## EMV_ADK_CTLS_NOT_AVAILABLE <a href="#ga4ea6891b4dd6c0d8d8703b8654453cbf" id="ga4ea6891b4dd6c0d8d8703b8654453cbf"></a>

<p>#define EMV_ADK_CTLS_NOT_AVAILABLE   0xDA</p>

CTLS not present on hardware per OS information.

## EMV_ADK_CTLS_OFFLINE_PIN <a href="#ga526c9428888487636a2f61b14533b0c4" id="ga526c9428888487636a2f61b14533b0c4"></a>

<p>#define EMV_ADK_CTLS_OFFLINE_PIN   0xCB</p>

Transaction to be continued after PIN input for girocard (German debit card) Offline PIN CVM.

## EMV_ADK_CTLS_RETAP_SAME <a href="#ga96d411b44e6e9da54f7645925d49450c" id="ga96d411b44e6e9da54f7645925d49450c"></a>

<p>#define EMV_ADK_CTLS_RETAP_SAME   0xDD</p>

CTLS: start over with re-tapping the same card (deactivation/activation/start txn)

## EMV_ADK_CVM <a href="#ga23fcc197f78dfa83f4c93f97faaa729e" id="ga23fcc197f78dfa83f4c93f97faaa729e"></a>

<p>#define EMV_ADK_CVM   0xE9</p>

CT: User abort during PIN input (cancel button, timeout, card removed)

## EMV_ADK_EMPTY_CONFIG <a href="#ga69f396193e4def503c935de027b5dd9e" id="ga69f396193e4def503c935de027b5dd9e"></a>

<p>#define EMV_ADK_EMPTY_CONFIG   0xC6</p>

Empty configuration.

## EMV_ADK_ERR_HSM <a href="#ga61d626babfbbb727f0e45d7219031947" id="ga61d626babfbbb727f0e45d7219031947"></a>

<p>#define EMV_ADK_ERR_HSM   0xF2</p>

E.g. erroneous communication to PINPad, internal error, not used anymore.

## EMV_ADK_FALLBACK <a href="#ga5f6c47c1042b70f3753191850219e745" id="ga5f6c47c1042b70f3753191850219e745"></a>

<p>#define EMV_ADK_FALLBACK   0xF4</p>

CT & CTLS: Fallback to chip/msr (for CTLS) respectively magstripe (for CT) must be done.

## EMV_ADK_FALLBACK_CHIP_ONLY <a href="#ga9c3ffa7ae38648dda00a7f3d65775d2f" id="ga9c3ffa7ae38648dda00a7f3d65775d2f"></a>

<p>#define EMV_ADK_FALLBACK_CHIP_ONLY   0xD7</p>

CTLS: Fallback to chip (CTLS), no msr allowed.

## EMV_ADK_INTERNAL <a href="#gab0e8158b5e7019f0da44c5cbc37bae3d" id="gab0e8158b5e7019f0da44c5cbc37bae3d"></a>

<p>#define EMV_ADK_INTERNAL   0xED</p>

CT & CTLS: e.g. erroneous communication to PINPad, internal error, not (completely) initialized (function not allowed due to <a href="group___f_u_n_c___i_n_i_t.md#ga514e39585c5a6b79632ac317593ff592">EMV_CT_Init_Framework()</a> with <a href="group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#gaddbf06b75108654b48044e5f701fcbfc">EMV_CT_INIT_OPT_BASE_INIT()</a>)

## EMV_ADK_INVALID_TERM_CAP <a href="#ga63b90cf63f7b9e1b55766589576e434e" id="ga63b90cf63f7b9e1b55766589576e434e"></a>

<p>#define EMV_ADK_INVALID_TERM_CAP   0xF7</p>

CT & CTLS: invalid terminal capabilities (EMV-configuration), not used anymore.

## EMV_ADK_MAND_ELEM_MISSING <a href="#ga25a3deb540cc7a021b162caf736cedd6" id="ga25a3deb540cc7a021b162caf736cedd6"></a>

<p>#define EMV_ADK_MAND_ELEM_MISSING   0xF6</p>

CT: mandatory (TLV) element missing (EMV-configuration), not used anymore.

## EMV_ADK_MAX_CFG_NUMBER_EXCEEDED <a href="#ga3adc70d672a6da9dff5859785e2fe955" id="ga3adc70d672a6da9dff5859785e2fe955"></a>

<p>#define EMV_ADK_MAX_CFG_NUMBER_EXCEEDED   0xC9</p>

CTLS: Number of keys uploaded to VFI Reader exceeded (appears when number of keys more than 99, all next keys are ignored)

## EMV_ADK_NO_CARD <a href="#ga2e738502a536ed7190406ce0e7c6916d" id="ga2e738502a536ed7190406ce0e7c6916d"></a>

<p>#define EMV_ADK_NO_CARD   0xDF</p>

CTLS: No card processing so far.

## EMV_ADK_NO_EXEC <a href="#ga7ffea44a30b0451d393487eae4035b4e" id="ga7ffea44a30b0451d393487eae4035b4e"></a>

<p>#define EMV_ADK_NO_EXEC   0xE1</p>

CT & CTLS: not executable.

## EMV_ADK_NOAPP <a href="#ga14713da8fe0512c8700f524279d2e573" id="ga14713da8fe0512c8700f524279d2e573"></a>

<p>#define EMV_ADK_NOAPP   0xE0</p>

CT: Return code if application not found by <a href="group___f_u_n_c___f_l_o_w.md#gad55c11dd44dbba66d6fefeb48b01a9e4">EMV_CT_CheckSupportedAID()</a>.
CTLS: Empty terminal candidate list (e.g. all application\'s ceiling limits exceeded) at <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a>.

## EMV_ADK_NOT_ACCEPTED <a href="#ga863ac8601603cfa61ef0d6d794742ded" id="ga863ac8601603cfa61ef0d6d794742ded"></a>

<p>#define EMV_ADK_NOT_ACCEPTED   0xCC</p>

Transaction / Payment type not accepted.

## EMV_ADK_NOT_ALLOWED <a href="#ga3a1d800696b9d7a86c0e39068d3fde57" id="ga3a1d800696b9d7a86c0e39068d3fde57"></a>

<p>#define EMV_ADK_NOT_ALLOWED   0xD9</p>

Parallel function call not allowed.

## EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF <a href="#ga40078f8164a34afef771e922a935a5e7" id="ga40078f8164a34afef771e922a935a5e7"></a>

<p>#define EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF   0xD0</p>

CTLS: The function is not allowed when using this config interface.

## EMV_ADK_OK <a href="#ga1456bb13b42906927f8a8942169b62e7" id="ga1456bb13b42906927f8a8942169b62e7"></a>

<p>#define EMV_ADK_OK   0</p>

Function successful, no error.

<a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline()</a>: This return value indicates successful outcome for card read transaction (e.g. <a href="group___t_r_a_n_s___t_y_p_e_s.md#gaf341bd2190b00ce5ee3a8acf6d5311ab">EMV_ADK_TRAN_TYPE_REFUND</a>, <a href="group___t_r_a_n_s___t_y_p_e_s.md#gae61beb9da6b52b6cd03016917eb12458">EMV_ADK_TRAN_TYPE_MANUAL_REVERSAL</a>, <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga6e2455446afc284d8e8acd527f37ba37">EMV_ADK_TRAN_TYPE_BUCHUNG_B</a>)

## EMV_ADK_ONL_PIN_REPEAT <a href="#gae80d82057fc9057a5555c08cbe1a013a" id="gae80d82057fc9057a5555c08cbe1a013a"></a>

<p>#define EMV_ADK_ONL_PIN_REPEAT   0xF5</p>

CT: wrong Online-PIN, repeat transaction (reduced) beginning with <a href="group___f_u_n_c___f_l_o_w.md#gac13472c2a4aea6475fe7bb52627e97eb">EMV_CT_StartTransaction()</a>

## EMV_ADK_ONLINE_PIN_RETRY <a href="#ga1c45091db79e3fb0564afd1c0fde9820" id="ga1c45091db79e3fb0564afd1c0fde9820"></a>

<p>#define EMV_ADK_ONLINE_PIN_RETRY   0xEE</p>

CT: Online PIN reentered (PIN check).
<a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline()</a>will return this value in the following scenario: Online PIN was entered. Host returned \"PIN wrong\".
Calling application must contact host again. And afterwards call <a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline()</a>once again.

## EMV_ADK_PARAM <a href="#ga89c11346e5e636e7c9d42c6a772674bf" id="ga89c11346e5e636e7c9d42c6a772674bf"></a>

<p>#define EMV_ADK_PARAM   0xE6</p>

CT & CTLS: Parameter error (wrong parameter was passed to the function)

## EMV_ADK_READ_ERROR <a href="#gaa385b17c04a9c6bbc0093a7ccfc3b11a" id="gaa385b17c04a9c6bbc0093a7ccfc3b11a"></a>

<p>#define EMV_ADK_READ_ERROR   0xF1</p>

Error while reading EMV configuration.

## EMV_ADK_READER_CMD_NOT_ALLOWED <a href="#ga1dacd808ce3e0d37daea5d3162e4f5ce" id="ga1dacd808ce3e0d37daea5d3162e4f5ce"></a>

<p>#define EMV_ADK_READER_CMD_NOT_ALLOWED   0xD8</p>

Contacless only
VFI-Reader: Returned by <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction()</a> and <a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline()</a> if VFI-Reader responds to \"Activate Transaction\" with \"Command not allowed\". This happens if VFI-Reader has not yet finished last transaction, e.g. is still waiting for ContinueOnline.

## EMV_ADK_REFERRAL <a href="#ga448fd17086a0da2e18f340086983c120" id="ga448fd17086a0da2e18f340086983c120"></a>

<p>#define EMV_ADK_REFERRAL   0xF8</p>

CT: a referral of the application decides if the TRX is approved or not.

## EMV_ADK_SAVE_ERROR <a href="#ga19d5dde29e85ada4f706ca65644df705" id="ga19d5dde29e85ada4f706ca65644df705"></a>

<p>#define EMV_ADK_SAVE_ERROR   0xEF</p>

Writing config files failed. ANSI C functions fopen(), fwrite(), or fclose() gave back error. Make sure that file access rights are setup correctly.

## EMV_ADK_SCRIPT_PROCESSING_COMPLETE <a href="#ga4ec730a0bbd30cf666d84eb6f02d1473" id="ga4ec730a0bbd30cf666d84eb6f02d1473"></a>

<p>#define EMV_ADK_SCRIPT_PROCESSING_COMPLETE   0xD6</p>

CTLS: explicit script processing completed (CTLS, e.g. Discover DPAS)

## EMV_ADK_TC <a href="#ga555e8c267be8402d0b540253a991e1ee" id="ga555e8c267be8402d0b540253a991e1ee"></a>

<p>#define EMV_ADK_TC   0xE3</p>

CT & CTLS: Transaction performed (offline / online)

## EMV_ADK_TERMINATE_CDCVM_RETRY <a href="#gab35b36c5f7adc118eeb46c0a43fe3e45" id="gab35b36c5f7adc118eeb46c0a43fe3e45"></a>

<p>#define EMV_ADK_TERMINATE_CDCVM_RETRY   0xC7</p>

DPAS CDCVM has not been performed. Terminate the transaction, prompt the Cardholder to remove the card, perform CDCVM, and try again.

## EMV_ADK_TIMEOUT <a href="#gab74c96109e0d2e68a62673286075c560" id="gab74c96109e0d2e68a62673286075c560"></a>

<p>#define EMV_ADK_TIMEOUT   0xC8</p>

Timeout.

## EMV_ADK_TLV_BUILD_ERR <a href="#ga4837e54c589150debdef49afb8f9b5db" id="ga4837e54c589150debdef49afb8f9b5db"></a>

<p>#define EMV_ADK_TLV_BUILD_ERR   0xF3</p>

CT & CTLS: Error in TLV data object = internal error.

## EMV_ADK_TOO_MANY_TAPS <a href="#gabe41cb42142b83678146fe6ee1547152" id="gabe41cb42142b83678146fe6ee1547152"></a>

<p>#define EMV_ADK_TOO_MANY_TAPS   0xD2</p>

CTLS: card holder exceeded the number of taps allowed for one transaction (Interac to show \"Cannot Process transaction - too many taps\")

## EMV_ADK_TXN_CTLS_EMPTY_LIST <a href="#ga4f8a5311a9bbc3494c299411622c78be" id="ga4f8a5311a9bbc3494c299411622c78be"></a>

<p>#define EMV_ADK_TXN_CTLS_EMPTY_LIST   0xFC</p>

CTLS: empty candidate list. The application shall display \"please use other interface\" and (depending on regional market requirements) additionally \"or tap another card\".

## EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD <a href="#gabd933d2fe0912fe347e1c872333d2e3d" id="gabd933d2fe0912fe347e1c872333d2e3d"></a>

<p>#define EMV_ADK_TXN_CTLS_EMV_USE_OTHER_CARD   0xFD</p>

CTLS: insert, swipe or try another card.

## EMV_ADK_TXN_CTLS_L1_ERR <a href="#gaf213d2b31adbe9f1e124292da4e2d4fe" id="gaf213d2b31adbe9f1e124292da4e2d4fe"></a>

<p>#define EMV_ADK_TXN_CTLS_L1_ERR   0xFA</p>

CTLS: level 1 problem, retap necessary.

## EMV_ADK_TXN_CTLS_MOBILE <a href="#ga2a847e1e4db9a2b11008f0df23abbcd6" id="ga2a847e1e4db9a2b11008f0df23abbcd6"></a>

<p>#define EMV_ADK_TXN_CTLS_MOBILE   0xFB</p>

CTLS: mobile device, retap necessary.

## EMV_ADK_TXN_EMPTY_LIST <a href="#ga321bbf465c50cf89772989dec678ae60" id="ga321bbf465c50cf89772989dec678ae60"></a>

<p>#define EMV_ADK_TXN_EMPTY_LIST   [EMV_ADK_TXN_CTLS_EMPTY_LIST](#ga4f8a5311a9bbc3494c299411622c78be)</p>

CT & CTLS: Empty candidate List = no common application between card and terminal. For CT usually [EMV_ADK_FALLBACK](#ga5f6c47c1042b70f3753191850219e745) is returned in any case, card error and empty list. If the caller needs to distinguish these cases, she has to enable this return code via <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CT_SELECT_STRUCT::TxnOptions</a> bit EMV_CT_SELOP_DETECT_EMPTY_LIST.

## EMV_ADK_USE_ANOTHER_CTLS_CARD <a href="#ga1d74ac7463ef972f6fb458bdade5cfd8" id="ga1d74ac7463ef972f6fb458bdade5cfd8"></a>

<p>#define EMV_ADK_USE_ANOTHER_CTLS_CARD   0xD4</p>

CTLS: advice the customer to use another CTLS card (will appear only if the CTLS kernel is configured in that way that Contact Chip is not supported)

## EMV_ADK_USE_OTHER_TERMINAL <a href="#gab7ba6c5087c4dbeb0d5c99312c38ab49" id="gab7ba6c5087c4dbeb0d5c99312c38ab49"></a>

<p>#define EMV_ADK_USE_OTHER_TERMINAL   0xD5</p>

CTLS: advice the merchant to use another terminal to process the transaction (Interac spec requirement)

## EMV_ADK_USR_BCKSPC_KEY_PRESSED <a href="#ga73ac1b36b24d6c30117cc4a62585edc3" id="ga73ac1b36b24d6c30117cc4a62585edc3"></a>

<p>#define EMV_ADK_USR_BCKSPC_KEY_PRESSED   0xDB</p>

Application requested return for E_USR_BACKSPACE_KEY_PRESSED, not used anymore.

## EMV_ADK_VFI_FAIL <a href="#ga826808ff642e703f810898847e031b98" id="ga826808ff642e703f810898847e031b98"></a>

<p>#define EMV_ADK_VFI_FAIL   0xCA</p>

VFI Reader \"Fail\" result. Transaction is terminated and application should decide about the final outcome (decline, fallback, try another card, etc\...) based on the VFI Reader response data items (Error Code - SW1 - SW2 - RF State Code). This is returned only with VFI Reader and only if the Terminal Flow Option INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL is set, otherwise EMV_ADK_AAC is returned per default.

## EMV_ADK_VIRTTERMMAP_WRONG_INIT <a href="#ga7c824fdc6135c521a5d9bfc1a2a71c85" id="ga7c824fdc6135c521a5d9bfc1a2a71c85"></a>

<p>#define EMV_ADK_VIRTTERMMAP_WRONG_INIT   0xD1</p>

Virtual terminal map is configured, but transaction is started with virtual terminal != 0.

## TypedefDocumentation {#typedef-documentation}

## EMV_ADK_INFO <a href="#gaa5ed8ecc7a31f36a8927e6e258187810" id="gaa5ed8ecc7a31f36a8927e6e258187810"></a>

<p>typedef unsigned char [EMV_ADK_INFO](#gaa5ed8ecc7a31f36a8927e6e258187810)</p>

type of return code

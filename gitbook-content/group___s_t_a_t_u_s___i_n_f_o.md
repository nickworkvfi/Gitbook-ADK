---
hidden: true
title: Status informationTransaction execution » Output data
---

[Macros](#define-members)

defines for <a href="group___a_d_k___t_r_x___e_x_e_c.md#a89b6ee4a99c6f75514d803b0098aa2ed">EMV_CT_TRANSRES_STRUCT::StatusInfo</a> [More\...](#details)

Collaboration diagram for Status information:

![](group___s_t_a_t_u_s___i_n_f_o.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_SI_ONLINE_PIN_REQUIRED](#gad65bcb7485b33d671da3acadc03ce784)   0x00000001u |
|   | this means Online PIN CVM was performed during the transaction (CT: already done in a callback by the app, CTLS: to be performed by the app once the card is out of the field) \--\> Online PIN processing (host encryption) is required if the transaction is not declined or if there is no fallback. [More\...](#gad65bcb7485b33d671da3acadc03ce784)<br/> |
| #define  | [EMV_ADK_SI_SIGNATURE_REQUIRED](#ga2732bae61a0c16cf1866d56c3e346b15)   0x00000002u |
|   | this means signature CVM was performed and the signature line must be printed on the receipt if the transaction is not declined or if there is no fallback. [More\...](#ga2732bae61a0c16cf1866d56c3e346b15)<br/> |
| #define  | [EMV_ADK_SI_FORCED_ACCEPTANCE](#ga02ea17cfcf2b0c800d585423e7d0d7e7)   0x00000004u |
|   | Forced acceptance transaction. [More\...](#ga02ea17cfcf2b0c800d585423e7d0d7e7)<br/> |
| #define  | [EMV_ADK_SI_USER_DEFINED_CVM](#ga4ad4fcd529a3b5d241064e5a0281c245)   0x00000008u |
|   | user defined CVM, this means that a custom CVM was performed and according to custom/domestic rules additional steps may apply [More\...](#ga4ad4fcd529a3b5d241064e5a0281c245)<br/> |
| #define  | [EMV_ADK_SI_ON_DEVICE_CVM](#ga9f6c1c1aa96433213ad2517ec8b77515)   0x00000010u |
|   | An On-Device CVM was performed (Amex: \"Mobile CVM\", Visa: \"Consumer device CVM\"). Caution, obsolete: For VFI-Reader it indicates if CVM has been performed on the consumer device even if transaction flow CVM was no CVM (e.g. because below CVM-Limit). But for VERTEX this bit is set if CD-CVM is indicated in the kernel outcome with exception for Amex. Replaced by [EMV_ADK_SI_CONSUMER_DEVICE](#ga1946562eed2579151cf49ba0e38862eb "Contactless transaction performed by a consumer device (smart phone, tablet, watch) supporting CD-CVM...") and [EMV_ADK_SI_OUTCOME_CD_CVM](#ga61d0ab29cbf381f77c241ada0046b698 "Contactless set if kernel Outcome Parameter CVM = Confirmation Code Verified (Consumer Device CVM suc...") with a consistent behaviour. [More\...](#ga9f6c1c1aa96433213ad2517ec8b77515)<br/> |
| #define  | [EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL](#ga3fe171a4dcf3ea9fcc16de350e68c4e6)   0x00000080u |
|   | Result is EMV_ADK_ABORT because customer has pulled out the card. [More\...](#ga3fe171a4dcf3ea9fcc16de350e68c4e6)<br/> |
| #define  | [EMV_ADK_SI_GICC_TIPPABLE](#ga0dbf5267bd45cb900a9fcbf27337f5a0)   0x00000100u |
|   | A tip transaction may follow this payment. [More\...](#ga0dbf5267bd45cb900a9fcbf27337f5a0)<br/> |
| #define  | [EMV_ADK_SI_PTC_EXCEEDED](#ga666cfd7bff72b97ff90eb3423ad2244e)   0x00000200u |
|   | PIN try counter exceeded. [More\...](#ga666cfd7bff72b97ff90eb3423ad2244e)<br/> |
| #define  | [EMV_ADK_SI_PIN_FAILURE](#gabfd30f612c05e3c1edbd1be81e37dde1)   0x00000400u |
|   | Last entered offline PIN was wrong. [More\...](#gabfd30f612c05e3c1edbd1be81e37dde1)<br/> |
| #define  | [EMV_ADK_SI_CONTACTLESS_CHIP](#gae0bb83c4d41e1a5ac3a083411c84cb4f)   0x00000800u |
|   | A contactless chip transaction. [More\...](#gae0bb83c4d41e1a5ac3a083411c84cb4f)<br/> |
| #define  | [EMV_ADK_SI_CONTACTLESS_MSR](#ga5a5eb8b54a6ada0ee197dff969a8e77e)   0x00001000u |
|   | A contactless magstripe txn. [More\...](#ga5a5eb8b54a6ada0ee197dff969a8e77e)<br/> |
| #define  | [EMV_ADK_SI_TORN_CREATED](#ga202c022e1f99b07a41f39df09d45842c)   0x00002000u |
|   | A torn transaction was created (PP3)<br/>not used for contact. [More\...](#ga202c022e1f99b07a41f39df09d45842c)<br/> |
| #define  | [EMV_ADK_SI_TORN_TRY_RECOVER](#gaebc149513b3c3523986050067b4f8c18)   0x00004000u |
|   | A torn transaction was tried to recover<br/>not used for contact. [More\...](#gaebc149513b3c3523986050067b4f8c18)<br/> |
| #define  | [EMV_ADK_SI_CONTACTLESS_WAITING](#gadd79ecaf9a0c271293f2bdc8082dd90f)   0x00008000u |
|   | The contactless transaction is still in the card waiting phase. [More\...](#gadd79ecaf9a0c271293f2bdc8082dd90f)<br/> |
| #define  | [EMV_ADK_SI_CONTACT_ONGOING](#ga9b39eb5b72d77d5c9f378ce87ae5c665)   0x00008000u |
|   | The contact transaction is still ongoing. [More\...](#ga9b39eb5b72d77d5c9f378ce87ae5c665)<br/> |
| #define  | [EMV_ADK_SI_CTLS_LONG_TAP](#ga8e9dfda8ddb3162139c4f8a527126157)   0x00010000u |
|   | Contactless \"Long Tap\" / Present And Hold , only appears if transaction goes online, card has to remain in field until <a href="group___f_u_n_c___f_l_o_w.md#ga297b6843994afaa2e7a6f5e0e4a8af3e">EMV_CTLS_ContinueOnline()</a> returned, see <a href="pg_emv_contactless_users_guide.md#subsec_emv_ctls_scenarios_and_use_cases_present_and_hold">Present And Hold Transaction ("Long Tap")</a>. [More\...](#ga8e9dfda8ddb3162139c4f8a527126157)<br/> |
| #define  | [EMV_ADK_SI_ARQC_RESTART_ANY](#ga0cb67eee3060e84efce62bdbdca0dfb3)   0x00020000u |
|   | Contactless kernel asks for second activation after online request in any case even in case of online problem (e.g. girocard OUT.ORD=ANY) [More\...](#ga0cb67eee3060e84efce62bdbdca0dfb3)<br/> |
| #define  | [EMV_ADK_SI_ARQC_RESTART_UTGO](#ga97193a2db4f6980833a51dbf189b859d)   0x00040000u |
|   | Contactless kernel set OUT.ORD to EMV&OTGO and conditions for offline approval are valid. Retap required if unable to go online or script/auth data available. [More\...](#ga97193a2db4f6980833a51dbf189b859d)<br/> |
| #define  | [EMV_ADK_SI_CONSUMER_DEVICE](#ga1946562eed2579151cf49ba0e38862eb)   0x00080000u |
|   | Contactless transaction performed by a consumer device (smart phone, tablet, watch) supporting CD-CVM (Consumer Device Cardholder Verification Method). [More\...](#ga1946562eed2579151cf49ba0e38862eb)<br/> |
| #define  | [EMV_ADK_SI_CONTACTLESS_ONLY](#ga9ba43b041e6f025b0dcc2ab6abb6aa34)   0x00100000u |
|   | Contactless device, key fob or mini card without alternate interfaces. Note: This bit is derived from various card properties like \"switch interface\" or form factor indicators and is not reliable for all schemes. Don\'t use this information for control flow. It is intended as additional information or for statistics. [More\...](#ga9ba43b041e6f025b0dcc2ab6abb6aa34)<br/> |
| #define  | [EMV_ADK_SI_OUTCOME_CD_CVM](#ga61d0ab29cbf381f77c241ada0046b698)   0x00200000u |
|   | Contactless set if kernel Outcome Parameter CVM = Confirmation Code Verified (Consumer Device CVM successfully performed, see Book A) [More\...](#ga61d0ab29cbf381f77c241ada0046b698)<br/> |
| #define  | [EMV_ADK_SI_OUTCOME_RECEIPT](#ga4c6a2a7ae690592cfc500177035c7a20)   0x00400000u |
|   | Contactless set if kernel Outcome Parameter Receipt = Yes (provide a receipt, see Book A). Note: For instance only supported for MasterCard, girocard, JCB and RuPay. [More\...](#ga4c6a2a7ae690592cfc500177035c7a20)<br/> |
| #define  | [EMV_ADK_SI_WRITE_DS_FAILED](#ga8e2db24b3ec09503ca536c9f53e950f6)   0x00800000u |
|   | Contact Write data storage has failed. [More\...](#ga8e2db24b3ec09503ca536c9f53e950f6)<br/> |
| #define  | [EMV_ADK_SI_ARQC_RESTART_FORBIDDEN](#gab518dcdaeea12b66fe2a862834f8b273)   0x01000000u |
|   | Do not prompt for re-tap, no matter if there are issuer authentication data or scripts. This is a requirement for JCB online outcome neither 2 presentments nor present and hold and other kernels (e.g. Gemalto-PURE). It is also set for kernels that do not process issuer update at all (e.g. MasterCard, Visa, Amex, CUP, \...) and contactless mag. stripe transactions. [More\...](#gab518dcdaeea12b66fe2a862834f8b273)<br/> |
| #define  | [EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD](#gaaffb473bb6d4861b0c04ab5f71bf1734)   0x02000000u |
|   | Only prompt for re-tap in case issuer scripts are present, that is discard Issuer Authentication Data (IAuD, tag \'91\'). This flag is set for Discover and WISE transactions. [More\...](#gaaffb473bb6d4861b0c04ab5f71bf1734)<br/> |
| #define  | [EMV_ADK_SI_TRANSIT_APPROVED](#ga33df5f730f55290b103a1ba8458db70e)   0x04000000u |
|   | Indicates that transit transaction has been approved ((TC or ARQC) and successful ODA). Additional checks could be needed at application level (exception file, etc.). [More\...](#ga33df5f730f55290b103a1ba8458db70e)<br/> |

## DetailedDescription {#detailed-description}

defines for <a href="group___a_d_k___t_r_x___e_x_e_c.md#a89b6ee4a99c6f75514d803b0098aa2ed">EMV_CT_TRANSRES_STRUCT::StatusInfo</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_SI_ARQC_RESTART_ANY <a href="#ga0cb67eee3060e84efce62bdbdca0dfb3" id="ga0cb67eee3060e84efce62bdbdca0dfb3"></a>

<p>#define EMV_ADK_SI_ARQC_RESTART_ANY   0x00020000u</p>

Contactless kernel asks for second activation after online request in any case even in case of online problem (e.g. girocard OUT.ORD=ANY)

## EMV_ADK_SI_ARQC_RESTART_FORBIDDEN <a href="#gab518dcdaeea12b66fe2a862834f8b273" id="gab518dcdaeea12b66fe2a862834f8b273"></a>

<p>#define EMV_ADK_SI_ARQC_RESTART_FORBIDDEN   0x01000000u</p>

Do not prompt for re-tap, no matter if there are issuer authentication data or scripts. This is a requirement for JCB online outcome neither 2 presentments nor present and hold and other kernels (e.g. Gemalto-PURE). It is also set for kernels that do not process issuer update at all (e.g. MasterCard, Visa, Amex, CUP, \...) and contactless mag. stripe transactions.

## EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD <a href="#gaaffb473bb6d4861b0c04ab5f71bf1734" id="gaaffb473bb6d4861b0c04ab5f71bf1734"></a>

<p>#define EMV_ADK_SI_ARQC_RESTART_NO_IAUTHD   0x02000000u</p>

Only prompt for re-tap in case issuer scripts are present, that is discard Issuer Authentication Data (IAuD, tag \'91\'). This flag is set for Discover and WISE transactions.

## EMV_ADK_SI_ARQC_RESTART_UTGO <a href="#ga97193a2db4f6980833a51dbf189b859d" id="ga97193a2db4f6980833a51dbf189b859d"></a>

<p>#define EMV_ADK_SI_ARQC_RESTART_UTGO   0x00040000u</p>

Contactless kernel set OUT.ORD to EMV&OTGO and conditions for offline approval are valid. Retap required if unable to go online or script/auth data available.

## EMV_ADK_SI_CONSUMER_DEVICE <a href="#ga1946562eed2579151cf49ba0e38862eb" id="ga1946562eed2579151cf49ba0e38862eb"></a>

<p>#define EMV_ADK_SI_CONSUMER_DEVICE   0x00080000u</p>

Contactless transaction performed by a consumer device (smart phone, tablet, watch) supporting CD-CVM (Consumer Device Cardholder Verification Method).

## EMV_ADK_SI_CONTACT_ONGOING <a href="#ga9b39eb5b72d77d5c9f378ce87ae5c665" id="ga9b39eb5b72d77d5c9f378ce87ae5c665"></a>

<p>#define EMV_ADK_SI_CONTACT_ONGOING   0x00008000u</p>

The contact transaction is still ongoing.

## EMV_ADK_SI_CONTACTLESS_CHIP <a href="#gae0bb83c4d41e1a5ac3a083411c84cb4f" id="gae0bb83c4d41e1a5ac3a083411c84cb4f"></a>

<p>#define EMV_ADK_SI_CONTACTLESS_CHIP   0x00000800u</p>

A contactless chip transaction.

## EMV_ADK_SI_CONTACTLESS_MSR <a href="#ga5a5eb8b54a6ada0ee197dff969a8e77e" id="ga5a5eb8b54a6ada0ee197dff969a8e77e"></a>

<p>#define EMV_ADK_SI_CONTACTLESS_MSR   0x00001000u</p>

A contactless magstripe txn.

## EMV_ADK_SI_CONTACTLESS_ONLY <a href="#ga9ba43b041e6f025b0dcc2ab6abb6aa34" id="ga9ba43b041e6f025b0dcc2ab6abb6aa34"></a>

<p>#define EMV_ADK_SI_CONTACTLESS_ONLY   0x00100000u</p>

Contactless device, key fob or mini card without alternate interfaces. Note: This bit is derived from various card properties like \"switch interface\" or form factor indicators and is not reliable for all schemes. Don\'t use this information for control flow. It is intended as additional information or for statistics.

## EMV_ADK_SI_CONTACTLESS_WAITING <a href="#gadd79ecaf9a0c271293f2bdc8082dd90f" id="gadd79ecaf9a0c271293f2bdc8082dd90f"></a>

<p>#define EMV_ADK_SI_CONTACTLESS_WAITING   0x00008000u</p>

The contactless transaction is still in the card waiting phase.

## EMV_ADK_SI_CTLS_LONG_TAP <a href="#ga8e9dfda8ddb3162139c4f8a527126157" id="ga8e9dfda8ddb3162139c4f8a527126157"></a>

<p>#define EMV_ADK_SI_CTLS_LONG_TAP   0x00010000u</p>

Contactless \"Long Tap\" / Present And Hold , only appears if transaction goes online, card has to remain in field until <a href="group___f_u_n_c___f_l_o_w.md#ga297b6843994afaa2e7a6f5e0e4a8af3e">EMV_CTLS_ContinueOnline()</a> returned, see <a href="pg_emv_contactless_users_guide.md#subsec_emv_ctls_scenarios_and_use_cases_present_and_hold">Present And Hold Transaction ("Long Tap")</a>.

## EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL <a href="#ga3fe171a4dcf3ea9fcc16de350e68c4e6" id="ga3fe171a4dcf3ea9fcc16de350e68c4e6"></a>

<p>#define EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL   0x00000080u</p>

Result is EMV_ADK_ABORT because customer has pulled out the card.

## EMV_ADK_SI_FORCED_ACCEPTANCE <a href="#ga02ea17cfcf2b0c800d585423e7d0d7e7" id="ga02ea17cfcf2b0c800d585423e7d0d7e7"></a>

<p>#define EMV_ADK_SI_FORCED_ACCEPTANCE   0x00000004u</p>

Forced acceptance transaction.

## EMV_ADK_SI_GICC_TIPPABLE <a href="#ga0dbf5267bd45cb900a9fcbf27337f5a0" id="ga0dbf5267bd45cb900a9fcbf27337f5a0"></a>

<p>#define EMV_ADK_SI_GICC_TIPPABLE   0x00000100u</p>

A tip transaction may follow this payment.

## EMV_ADK_SI_ON_DEVICE_CVM <a href="#ga9f6c1c1aa96433213ad2517ec8b77515" id="ga9f6c1c1aa96433213ad2517ec8b77515"></a>

<p>#define EMV_ADK_SI_ON_DEVICE_CVM   0x00000010u</p>

An On-Device CVM was performed (Amex: \"Mobile CVM\", Visa: \"Consumer device CVM\"). Caution, obsolete: For VFI-Reader it indicates if CVM has been performed on the consumer device even if transaction flow CVM was no CVM (e.g. because below CVM-Limit). But for VERTEX this bit is set if CD-CVM is indicated in the kernel outcome with exception for Amex. Replaced by [EMV_ADK_SI_CONSUMER_DEVICE](#ga1946562eed2579151cf49ba0e38862eb "Contactless transaction performed by a consumer device (smart phone, tablet, watch) supporting CD-CVM...") and [EMV_ADK_SI_OUTCOME_CD_CVM](#ga61d0ab29cbf381f77c241ada0046b698 "Contactless set if kernel Outcome Parameter CVM = Confirmation Code Verified (Consumer Device CVM suc...") with a consistent behaviour.

## EMV_ADK_SI_ONLINE_PIN_REQUIRED <a href="#gad65bcb7485b33d671da3acadc03ce784" id="gad65bcb7485b33d671da3acadc03ce784"></a>

<p>#define EMV_ADK_SI_ONLINE_PIN_REQUIRED   0x00000001u</p>

this means Online PIN CVM was performed during the transaction (CT: already done in a callback by the app, CTLS: to be performed by the app once the card is out of the field) \--\> Online PIN processing (host encryption) is required if the transaction is not declined or if there is no fallback.

## EMV_ADK_SI_OUTCOME_CD_CVM <a href="#ga61d0ab29cbf381f77c241ada0046b698" id="ga61d0ab29cbf381f77c241ada0046b698"></a>

<p>#define EMV_ADK_SI_OUTCOME_CD_CVM   0x00200000u</p>

Contactless set if kernel Outcome Parameter CVM = Confirmation Code Verified (Consumer Device CVM successfully performed, see Book A)

## EMV_ADK_SI_OUTCOME_RECEIPT <a href="#ga4c6a2a7ae690592cfc500177035c7a20" id="ga4c6a2a7ae690592cfc500177035c7a20"></a>

<p>#define EMV_ADK_SI_OUTCOME_RECEIPT   0x00400000u</p>

Contactless set if kernel Outcome Parameter Receipt = Yes (provide a receipt, see Book A). Note: For instance only supported for MasterCard, girocard, JCB and RuPay.

## EMV_ADK_SI_PIN_FAILURE <a href="#gabfd30f612c05e3c1edbd1be81e37dde1" id="gabfd30f612c05e3c1edbd1be81e37dde1"></a>

<p>#define EMV_ADK_SI_PIN_FAILURE   0x00000400u</p>

Last entered offline PIN was wrong.

## EMV_ADK_SI_PTC_EXCEEDED <a href="#ga666cfd7bff72b97ff90eb3423ad2244e" id="ga666cfd7bff72b97ff90eb3423ad2244e"></a>

<p>#define EMV_ADK_SI_PTC_EXCEEDED   0x00000200u</p>

PIN try counter exceeded.

## EMV_ADK_SI_SIGNATURE_REQUIRED <a href="#ga2732bae61a0c16cf1866d56c3e346b15" id="ga2732bae61a0c16cf1866d56c3e346b15"></a>

<p>#define EMV_ADK_SI_SIGNATURE_REQUIRED   0x00000002u</p>

this means signature CVM was performed and the signature line must be printed on the receipt if the transaction is not declined or if there is no fallback.

## EMV_ADK_SI_TORN_CREATED <a href="#ga202c022e1f99b07a41f39df09d45842c" id="ga202c022e1f99b07a41f39df09d45842c"></a>

<p>#define EMV_ADK_SI_TORN_CREATED   0x00002000u</p>

A torn transaction was created (PP3)
not used for contact.

## EMV_ADK_SI_TORN_TRY_RECOVER <a href="#gaebc149513b3c3523986050067b4f8c18" id="gaebc149513b3c3523986050067b4f8c18"></a>

<p>#define EMV_ADK_SI_TORN_TRY_RECOVER   0x00004000u</p>

A torn transaction was tried to recover
not used for contact.

## EMV_ADK_SI_TRANSIT_APPROVED <a href="#ga33df5f730f55290b103a1ba8458db70e" id="ga33df5f730f55290b103a1ba8458db70e"></a>

<p>#define EMV_ADK_SI_TRANSIT_APPROVED   0x04000000u</p>

Indicates that transit transaction has been approved ((TC or ARQC) and successful ODA). Additional checks could be needed at application level (exception file, etc.).

## EMV_ADK_SI_USER_DEFINED_CVM <a href="#ga4ad4fcd529a3b5d241064e5a0281c245" id="ga4ad4fcd529a3b5d241064e5a0281c245"></a>

<p>#define EMV_ADK_SI_USER_DEFINED_CVM   0x00000008u</p>

user defined CVM, this means that a custom CVM was performed and according to custom/domestic rules additional steps may apply

## EMV_ADK_SI_WRITE_DS_FAILED <a href="#ga8e2db24b3ec09503ca536c9f53e950f6" id="ga8e2db24b3ec09503ca536c9f53e950f6"></a>

<p>#define EMV_ADK_SI_WRITE_DS_FAILED   0x00800000u</p>

Contact Write data storage has failed.

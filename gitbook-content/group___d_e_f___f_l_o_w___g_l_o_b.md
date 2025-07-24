---
hidden: true
title: Application flow capabilities for all schemesConfiguration » Application data
---

[Macros](#define-members)

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6b141ca640db3a0ea501018167b70531">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03</a>. [More\...](#details)

Collaboration diagram for Application flow capabilities for all schemes:

![](group___d_e_f___f_l_o_w___g_l_o_b.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0](#gafe048f18a1079275fe1e5446b3cb14cd)   0x01 |
|   | B1b1: (Vel: y VFI: n) Do not perform the final select if the AID belongs to a nonEMV/Domestic kernel. [More\...](#gafe048f18a1079275fe1e5446b3cb14cd)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](#ga2a08e27d16b9915644193ffc7cc024d9)   0x02 |
|   | B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommended for CTLS txns because directory file is available) [More\...](#ga2a08e27d16b9915644193ffc7cc024d9)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0](#ga41036a790a664f3b9f6ab8bb48c8921d)   0x04 |
|   | B1b3: (Vel: y VFI: y) Support of cash transactions. [More\...](#ga41036a790a664f3b9f6ab8bb48c8921d)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0](#gadce6a58c5b62df83195d60e7fddf0875)   0x08 |
|   | B1b4: (Vel: y VFI: y) Support of cashback transactions. [More\...](#gadce6a58c5b62df83195d60e7fddf0875)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0](#gae686e4e9ed9cee9442206a56f32a0f78)   0x10 |
|   | B1b5: (Vel: y VFI: n) Omit not allowed candidates already during Entry Point selection process, e.g. above CTLS transaction limit. However: Warning: The EP defines Contactless transaction Limit \>=, while MasterCard PP3 defines it as \>. So do not set it for MasterCard AIDs. [More\...](#gae686e4e9ed9cee9442206a56f32a0f78)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0](#gae685292a75308ee42f40c281348a11a9)   0x20 |
|   | B1b6: (Vel: y VFI: n) Force Entry Point processing of the former EMVCo Entry Point specification. It has the effect like [EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0](#gae686e4e9ed9cee9442206a56f32a0f78 "B1b5: (Vel: y VFI: n) Omit not allowed candidates already during Entry Point selection process,...") plus continue with START_B after L1 error at Combination Selection. [More\...](#gae685292a75308ee42f40c281348a11a9)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0](#gac038968db661ff18dc956cb63b37ec25)   0x40 |
|   | B1b7: (Vel: y VFI: n) Force Kernel ID to be used, even if EP tag 9F2A is available. [More\...](#gac038968db661ff18dc956cb63b37ec25)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0](#ga2616770379ceb74361920fd8579639a0)   0x80 |
|   | B1b8: (Vel: y VFI: y) List of AIDs method only if PPSE directory does not exist in a card with the corresponding AID. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](#ga2a08e27d16b9915644193ffc7cc024d9 "B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommende...") is set. [More\...](#ga2616770379ceb74361920fd8579639a0)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1](#ga06f5d8d035ade9e0d78d8b82f988beeb)   0x01 |
|   | B2b1: (Vel: n VFI: y) List of AIDs method only if PPSE directory exists in the card but a response for PPSE request was badly formatted and PPSE stage failed. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](#ga2a08e27d16b9915644193ffc7cc024d9 "B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommende...") is set. [More\...](#ga06f5d8d035ade9e0d78d8b82f988beeb)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1](#ga7d05dfc1345e2a62960b36dfdb062ce6)   0x02 |
|   | B2b2: (Vel: y VFI: y) If this bit is set then the reader will send an amount of zero to the card for card read transactions, otherwise the reader will send the normal amount. [More\...](#ga7d05dfc1345e2a62960b36dfdb062ce6)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1](#ga3911ea17b1a71f72a581270bfa2f0dcd)   0x04 |
|   | B2b3: (Vel: y VFI: n) If this bit is set this AID will be skipped if requiring explicit cardholder selection. [More\...](#ga3911ea17b1a71f72a581270bfa2f0dcd)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1](#gaefcec3e87a4f0a582b2f6fa8ecc1c3c7)   0x08 |
|   | B2b4: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped and the AID remains in the candidate list. [More\...](#gaefcec3e87a4f0a582b2f6fa8ecc1c3c7)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1](#ga9e863273c6424cc3a0b50c66174a874b)   0x10 |
|   | B2b5: (Vel: y VFI: n) Feature \"Force online\" supported (suspicious customer). This relates to Terminal Verification Result B4b4 \"Merchant forced transaction online\". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ac9379ba99fde04b446f004946e00cb7f">EMV_CTLS_PAYMENT_STRUCT::Force_Online</a>. [More\...](#ga9e863273c6424cc3a0b50c66174a874b)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1](#ga539e94bdac1c16d0aa1d8647c3772509)   0x20 |
|   | B2b6: (Vel: y VFI: y) Wait for card removal at the end of an EMV transaction before returning to application (on TC, AAC and ARQC \--\> Card Read Complete) [More\...](#ga539e94bdac1c16d0aa1d8647c3772509)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1](#ga1ca36e437fe85a3cf8b3322004b2b154)   0x40 |
|   | B2b7: (Vel: y VFI: n) Start card removal procedure after kernel processing. This enables the service <a href="group___f_u_n_c___f_l_o_w.md#gaf9ca19bc9d77bfe1dfec28c030b18059">EMV_CTLS_CardRemoval</a>.<br/>Only effective on deactivated [EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1](#ga539e94bdac1c16d0aa1d8647c3772509 "B2b6: (Vel: y VFI: y) Wait for card removal at the end of an EMV transaction before returning to appl..."). [More\...](#ga1ca36e437fe85a3cf8b3322004b2b154)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1](#gafeaea6d01272cff810a834a5b280a0fd)   0x80 |
|   | B2b8: (Vel: y VFI: n) Enable the Entry Point extended selection (9F29 is used if present on ICC) [More\...](#gafeaea6d01272cff810a834a5b280a0fd)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2](#ga2cf4e47b4b2438f8841529479aad7708)   0x01 |
|   | B3b1: (Vel: y VFI: n) byte 3 of kernel id is used to store multiple configurations of same kernel Id-AID pair. If this flag is set the 3rd byte of the kernel id is set to zero in the Terminal Candidate List which is presented to the EntryPoint while the original value is used towards application interface. [More\...](#ga2cf4e47b4b2438f8841529479aad7708)<br/> |
| #define  | [EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2](#ga380ac93ce8daa7b5ed631fcb0bc1e9d4)   0x02 |
| #define  | [EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2](#ga9371e67e024495ec2c2469ab2d032234)   0x04 |
| #define  | [EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2](#ga2c170aa2bc8bdf5fbb8b3ab594e49439)   0x08 |
| #define  | [EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2](#gae23a2e76973d32f52b15a85ab6b44abc)   0x10 |
|   | B3b5: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped for card read transactions and the AID remains in the candidate list. [More\...](#gae23a2e76973d32f52b15a85ab6b44abc)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6b141ca640db3a0ea501018167b70531">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2 <a href="#gae23a2e76973d32f52b15a85ab6b44abc" id="gae23a2e76973d32f52b15a85ab6b44abc"></a>

<p>#define EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2   0x10</p>

B3b5: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped for card read transactions and the AID remains in the candidate list.

## EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1 <a href="#ga7d05dfc1345e2a62960b36dfdb062ce6" id="ga7d05dfc1345e2a62960b36dfdb062ce6"></a>

<p>#define EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1   0x02</p>

B2b2: (Vel: y VFI: y) If this bit is set then the reader will send an amount of zero to the card for card read transactions, otherwise the reader will send the normal amount.

## EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0 <a href="#ga41036a790a664f3b9f6ab8bb48c8921d" id="ga41036a790a664f3b9f6ab8bb48c8921d"></a>

<p>#define EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0   0x04</p>

B1b3: (Vel: y VFI: y) Support of cash transactions.

## EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0 <a href="#gadce6a58c5b62df83195d60e7fddf0875" id="gadce6a58c5b62df83195d60e7fddf0875"></a>

<p>#define EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0   0x08</p>

B1b4: (Vel: y VFI: y) Support of cashback transactions.

## EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2 <a href="#ga2c170aa2bc8bdf5fbb8b3ab594e49439" id="ga2c170aa2bc8bdf5fbb8b3ab594e49439"></a>

<p>#define EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2   0x08</p>

B3b4: (Vel: y VFI: n) **Use with care**: Do not use card\'s application name (EMVCo rule: 9F12 prior to 50) but always use the default application label <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa022d006c533c7901b3f03d691a7f4b0">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::DefaultApplicationName_DFAB22</a> in result data <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a1a933985680b099e926e54086a602c12">EMV_CTLS_TRANSRES_STRUCT::AppName</a>

## EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0 <a href="#gafe048f18a1079275fe1e5446b3cb14cd" id="gafe048f18a1079275fe1e5446b3cb14cd"></a>

<p>#define EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0   0x01</p>

B1b1: (Vel: y VFI: n) Do not perform the final select if the AID belongs to a nonEMV/Domestic kernel.

## EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2 <a href="#ga380ac93ce8daa7b5ed631fcb0bc1e9d4" id="ga380ac93ce8daa7b5ed631fcb0bc1e9d4"></a>

<p>#define EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2   0x02</p>

B3b2: (Vel: y VFI: n) Do not apply business rule: \"Cash back is online only\". Instead rely on terminal and card risk management. Anyhow the application might force the transaction online by transaction flow option <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a21582d26b3baf84a6bf36e1597415195">EMV_CTLS_PAYMENT_STRUCT::Online_Switch</a>.
**Caution**: For Visa like schemes (Visa, Visa-AP, Discover and UPI) this flag has a different effect: It suppresses the mandory reduction of the floor limit to zero.

## EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1 <a href="#gafeaea6d01272cff810a834a5b280a0fd" id="gafeaea6d01272cff810a834a5b280a0fd"></a>

<p>#define EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1   0x80</p>

B2b8: (Vel: y VFI: n) Enable the Entry Point extended selection (9F29 is used if present on ICC)

## EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0 <a href="#gae685292a75308ee42f40c281348a11a9" id="gae685292a75308ee42f40c281348a11a9"></a>

<p>#define EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0   0x20</p>

B1b6: (Vel: y VFI: n) Force Entry Point processing of the former EMVCo Entry Point specification. It has the effect like [EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0](#gae686e4e9ed9cee9442206a56f32a0f78 "B1b5: (Vel: y VFI: n) Omit not allowed candidates already during Entry Point selection process,...") plus continue with START_B after L1 error at Combination Selection.

## EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0 <a href="#gac038968db661ff18dc956cb63b37ec25" id="gac038968db661ff18dc956cb63b37ec25"></a>

<p>#define EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0   0x40</p>

B1b7: (Vel: y VFI: n) Force Kernel ID to be used, even if EP tag 9F2A is available.

## EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1 <a href="#ga9e863273c6424cc3a0b50c66174a874b" id="ga9e863273c6424cc3a0b50c66174a874b"></a>

<p>#define EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1   0x10</p>

B2b5: (Vel: y VFI: n) Feature \"Force online\" supported (suspicious customer). This relates to Terminal Verification Result B4b4 \"Merchant forced transaction online\". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ac9379ba99fde04b446f004946e00cb7f">EMV_CTLS_PAYMENT_STRUCT::Force_Online</a>.

## EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1 <a href="#ga06f5d8d035ade9e0d78d8b82f988beeb" id="ga06f5d8d035ade9e0d78d8b82f988beeb"></a>

<p>#define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1   0x01</p>

B2b1: (Vel: n VFI: y) List of AIDs method only if PPSE directory exists in the card but a response for PPSE request was badly formatted and PPSE stage failed. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](#ga2a08e27d16b9915644193ffc7cc024d9 "B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommende...") is set.

## EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0 <a href="#ga2616770379ceb74361920fd8579639a0" id="ga2616770379ceb74361920fd8579639a0"></a>

<p>#define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0   0x80</p>

B1b8: (Vel: y VFI: y) List of AIDs method only if PPSE directory does not exist in a card with the corresponding AID. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](#ga2a08e27d16b9915644193ffc7cc024d9 "B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommende...") is set.

## EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0 <a href="#ga2a08e27d16b9915644193ffc7cc024d9" id="ga2a08e27d16b9915644193ffc7cc024d9"></a>

<p>#define EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0   0x02</p>

B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommended for CTLS txns because directory file is available)

## EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2 <a href="#ga2cf4e47b4b2438f8841529479aad7708" id="ga2cf4e47b4b2438f8841529479aad7708"></a>

<p>#define EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2   0x01</p>

B3b1: (Vel: y VFI: n) byte 3 of kernel id is used to store multiple configurations of same kernel Id-AID pair. If this flag is set the 3rd byte of the kernel id is set to zero in the Terminal Candidate List which is presented to the EntryPoint while the original value is used towards application interface.

## EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0 <a href="#gae686e4e9ed9cee9442206a56f32a0f78" id="gae686e4e9ed9cee9442206a56f32a0f78"></a>

<p>#define EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0   0x10</p>

B1b5: (Vel: y VFI: n) Omit not allowed candidates already during Entry Point selection process, e.g. above CTLS transaction limit. However: Warning: The EP defines Contactless transaction Limit \>=, while MasterCard PP3 defines it as \>. So do not set it for MasterCard AIDs.

## EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2 <a href="#ga9371e67e024495ec2c2469ab2d032234" id="ga9371e67e024495ec2c2469ab2d032234"></a>

<p>#define EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2   0x04</p>

B3b3: (Vel: y VFI: n) A custom transaction type (\'9C\') might be used during kernel processing in a virtual terminal for card read transactions. Therefore tag \'9C\' has to be configured to <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb1d4cd4bf1913ad2a42cb0764fcc619">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20</a>. If this flag is raised the transaction type in the kernel database will be reset after completion (e.g. to \'20\' for refund) in order to hide this modification from the outside world (vouchers, host messages)

## EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1 <a href="#ga3911ea17b1a71f72a581270bfa2f0dcd" id="ga3911ea17b1a71f72a581270bfa2f0dcd"></a>

<p>#define EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1   0x04</p>

B2b3: (Vel: y VFI: n) If this bit is set this AID will be skipped if requiring explicit cardholder selection.

## EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1 <a href="#gaefcec3e87a4f0a582b2f6fa8ecc1c3c7" id="gaefcec3e87a4f0a582b2f6fa8ecc1c3c7"></a>

<p>#define EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1   0x08</p>

B2b4: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped and the AID remains in the candidate list.

## EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1 <a href="#ga1ca36e437fe85a3cf8b3322004b2b154" id="ga1ca36e437fe85a3cf8b3322004b2b154"></a>

<p>#define EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1   0x40</p>

B2b7: (Vel: y VFI: n) Start card removal procedure after kernel processing. This enables the service <a href="group___f_u_n_c___f_l_o_w.md#gaf9ca19bc9d77bfe1dfec28c030b18059">EMV_CTLS_CardRemoval</a>.
Only effective on deactivated [EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1](#ga539e94bdac1c16d0aa1d8647c3772509 "B2b6: (Vel: y VFI: y) Wait for card removal at the end of an EMV transaction before returning to appl...").

## EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1 <a href="#ga539e94bdac1c16d0aa1d8647c3772509" id="ga539e94bdac1c16d0aa1d8647c3772509"></a>

<p>#define EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1   0x20</p>

B2b6: (Vel: y VFI: y) Wait for card removal at the end of an EMV transaction before returning to application (on TC, AAC and ARQC \--\> Card Read Complete)

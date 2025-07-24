---
hidden: true
title: Constructed tags for callback functionsTransaction execution » Callback functions
---

[Macros](#define-members)

Used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>. [More\...](#details)

Collaboration diagram for Constructed tags for callback functions:

![](group___c_b_c_k___f_c_t___t_a_g_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_BF0B_INIT_CALLBACK_THREAD](#ga2dd430ed5e62c398afa839bcf012fa48)   0xBF0B |
|   | Signals the creation of the \"notification callback thread\" (inside `libEMV_CTLS_Link.so`) [More\...](#ga2dd430ed5e62c398afa839bcf012fa48)<br/> |
| #define  | [TAG_BF0C_CTLS_CBK_APP_SELECTED](#gaf101b44707dcb098e311d65bd7ac817e)   0xBF0C |
|   | Signals that application is selected. [More\...](#gaf101b44707dcb098e311d65bd7ac817e)<br/> |
| #define  | [TAG_BF0E_CBK_DATA_EXCHANGE](#ga32719fcef354a44723c8b6561716f5bd)   0xBF0E |
|   | PayPass3 DataExchange. [More\...](#ga32719fcef354a44723c8b6561716f5bd)<br/> |
| #define  | [TAG_BF0F_EXIT_CALLBACK_THREAD](#gabdca4a381394736c399374070789196f)   0xBF0F |
|   | Signals the stop of the \"notification callback thread\" (inside `libEMV_CTLS_Link.so`) [More\...](#gabdca4a381394736c399374070789196f)<br/> |
| #define  | [TAG_BF10_CTLS_CBK_LEDS](#ga1ed48d32ca46560f8dacd954fc485bcf)   0xBF10 |
|   | Switch soft LEDs. [More\...](#ga1ed48d32ca46560f8dacd954fc485bcf)<br/> |
| #define  | [TAG_BF12_CBK_MODIFY_CAND](#ga2ef5c305dbfcabbea00a6d9e3c544547)   0xBF12 |
|   | Modify candidate list. [More\...](#ga2ef5c305dbfcabbea00a6d9e3c544547)<br/> |
| #define  | [TAG_BF13_CBK_RND](#ga8da23b41b13c8e47e14f5976422cf4a1)   0xBF13 |
|   | Random number provided by the calling application -. [More\...](#ga8da23b41b13c8e47e14f5976422cf4a1)<br/> |
| #define  | [TAG_BF14_CBK_TEXT_DISPLAY](#ga694e27a1370530d36c245cc0cb2288bd)   0xBF14 |
|   | Text display. [More\...](#ga694e27a1370530d36c245cc0cb2288bd)<br/> |
| #define  | [TAG_BF15_CBK_CARD_TAPPED](#ga62e41db8f2248fd9a247ace09c1e0f7f)   0xBF15 |
|   | Notification that a card was detected. [More\...](#ga62e41db8f2248fd9a247ace09c1e0f7f)<br/> |
| #define  | [TAG_BF16_CBK_SERVICE_SHORTLIST](#gac2ac8ae81521b54bfa5abf043b323916)   0xBF16 |
|   | RuPay callback before GPO. [More\...](#gac2ac8ae81521b54bfa5abf043b323916)<br/> |
| #define  | [TAG_BF17_CBK_SERVICE_FOR_GENAC](#gae0841093e4002162f3eebdd567efdbdf)   0xBF17 |
|   | RuPay callback before Generate AC. [More\...](#gae0841093e4002162f3eebdd567efdbdf)<br/> |
| #define  | [TAG_BF18_CBK_PURE_GET_PUT_DATA](#gab3c66f8374aaddaef98194d8135acd79)   0xBF18 |
|   | Gemalto/Pure: provide GET DATA and/or PUT DATA input. [More\...](#gab3c66f8374aaddaef98194d8135acd79)<br/> |
| #define  | [TAG_BF19_CTLS_CBK_BEEP](#ga805fd29bb45bbc706fefd6533ee3c69f)   0xBF19 |
|   | Application shall sound the buzzer. [More\...](#ga805fd29bb45bbc706fefd6533ee3c69f)<br/> |
| #define  | [TAG_BF7F_CTLS_CBK_TRACE](#ga8e26244b50f45cd8de1db4563fc11eea)   0xBF7F |
|   | Traces. [More\...](#ga8e26244b50f45cd8de1db4563fc11eea)<br/> |
| #define  | [TAG_BF01_CBK_MERCHINFO](#gaf8eeceb6363ca4e9b124d67334c09f57)   0xBF01 |
|   | Transaction progress information for the merchant. [More\...](#gaf8eeceb6363ca4e9b124d67334c09f57)<br/> |
| #define  | [TAG_BF02_CBK_AMOUNTCONF](#ga626da7fbed5c5a9a5563cf0b9d45a4a4)   0xBF02 |
|   | The cardholder has to confirm the amount. [More\...](#ga626da7fbed5c5a9a5563cf0b9d45a4a4)<br/> |
| #define  | [TAG_BF03_CBK_LOG_HOTLIST](#ga7db951ffee1aa377131cd752468145a4)   0xBF03 |
|   | EMVCo features \"transaction log\" and \"hotlist\". [More\...](#ga7db951ffee1aa377131cd752468145a4)<br/> |
| #define  | [TAG_BF04_CBK_REDUCE_CAND](#gababcd780ecf1c9d400ecfde024d910fe)   0xBF04 |
|   | Application Candidate List Reduction/Modification. [More\...](#gababcd780ecf1c9d400ecfde024d910fe)<br/> |
| #define  | [TAG_BF05_CBK_DOM_APPS](#gafd0adcc12331559863dd65d8f7558645)   0xBF05 |
|   | Domestic app detected during application selection. [More\...](#gafd0adcc12331559863dd65d8f7558645)<br/> |
| #define  | [TAG_BF06_CBK_LOCAL_CHECKS](#gac82fa7e4064512e71e63fd647b817d97)   0xBF06 |
|   | Callback for local checks after reading the PAN. [More\...](#gac82fa7e4064512e71e63fd647b817d97)<br/> |
| #define  | [TAG_BF07_CBK_DCC](#gaf335a870e9d2f299c848f76b843907f7)   0xBF07 |
|   | Dynamic currency conversion (DCC) [More\...](#gaf335a870e9d2f299c848f76b843907f7)<br/> |
| #define  | [TAG_BF08_CBK_PIN](#gadc9d6fed84456455586fb621722ae922)   0xBF08 |
|   | PIN Input request. [More\...](#gadc9d6fed84456455586fb621722ae922)<br/> |
| #define  | [TAG_BF09_CBK_CARDHOLDERINFO](#ga03bf78609c19ba9c07772fcd74d8c1f1)   0xBF09 |
|   | A text information has to be displayed to the cardholder. [More\...](#ga03bf78609c19ba9c07772fcd74d8c1f1)<br/> |
| #define  | [TAG_BF7F_CBK_TRACE](#ga2bdf296e1436b64373715038c87263b2)   0xBF7F |
|   | Callback for Traces. [More\...](#ga2bdf296e1436b64373715038c87263b2)<br/> |
| #define  | [TAG_BF13_CBK_RND](#ga8da23b41b13c8e47e14f5976422cf4a1)   0xBF13 |
|   | Random number provided by the calling application. [More\...](#ga8da23b41b13c8e47e14f5976422cf4a1)<br/> |

## DetailedDescription {#detailed-description}

Used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>.

Used in <a href="adk__emv__contactless__programmers__guide_8dox.md#a591fd0f380cd390007ce78b47be923c4">EMV_CT_CALLBACK_FnT</a>.

The tag determines which callback function is to be used. Data is enclosed inside this contructed tag. Detailed Description uses following convention:
**INPUT:** This is what Application gets from the Framework
**OUTPUT:** This is what Application is supposed to send back

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_BF01_CBK_MERCHINFO <a href="#gaf8eeceb6363ca4e9b124d67334c09f57" id="gaf8eeceb6363ca4e9b124d67334c09f57"></a>

<p>#define TAG_BF01_CBK_MERCHINFO   0xBF01</p>

Transaction progress information for the merchant.

For valid values see <a href="group___m_e_r_c_h___i_n_f_o.md">Defines for callback function "put merchant information"</a>
Called depending on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a> and <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab687ffddde3bcdd5b299b6ffd5411338">EMV_CT_TRXOP_MERCHINFO_CALLBACK</a>.
**INPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#gadb20bec2ea43ca880918b66a83f9f9c9">TAG_DF70_CBK_MERCHINFO</a>: Transaction Info for merchant
**OUTPUT:** --

## TAG_BF02_CBK_AMOUNTCONF <a href="#ga626da7fbed5c5a9a5563cf0b9d45a4a4" id="ga626da7fbed5c5a9a5563cf0b9d45a4a4"></a>

<p>#define TAG_BF02_CBK_AMOUNTCONF   0xBF02</p>

The cardholder has to confirm the amount.

Called depending on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a> and <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab7245d9aa5ebca9d6947cfe8af8717d1">EMV_CT_TRXOP_AMOUNT_CONF</a>
This explicit amount confirmation is an alternative to combined confirmation with PIN entry or signature on receipt.
**INPUT:**
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gadc58d877552c00f1f6b2586500bccf1b">TAG_DF30_LANG</a>: Language, see <a href="pg_emv_contact_users_guide.md#subsec_emv_ct_different_languages">Different Languages</a>
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga2beb9a714e710507de77fa7d6ba7b342">TAG_DF31_TEXT_NUM</a>: Text ID, see <a href="pg_emv_contact_users_guide.md#subsec_emv_ct_display_messages">Display Messages</a>
<a href="group___e_m_v_c_o___t_a_g_s.md#ga6952b55733eff49c55768a6f7802f9e4">TAG_9F02_NUM_AMOUNT_AUTH</a>: Amount
<a href="group___e_m_v_c_o___t_a_g_s.md#gaccc339b2226ade4b5ab935624377f800">TAG_9F03_NUM_AMOUNT_OTHER</a>: Cashback Amount
<a href="group___e_m_v_c_o___t_a_g_s.md#ga4064d8681a4f0a40f4a3bf304f2a0902">TAG_9C_TRANS_TYPE</a>: Transaction Type
<a href="group___e_m_v_c_o___t_a_g_s.md#ga369ab2cc83e9b220bdfa79753f1f3962">TAG_5F2A_TRANS_CURRENCY</a>: Transaction currency
**OUTPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#gaaa1584fd7168b5fc96f50a51b97b15f6">TAG_DF71_CBK_AMOUNTCONF</a>: confirmed 1=yes, 0=no

## TAG_BF03_CBK_LOG_HOTLIST <a href="#ga7db951ffee1aa377131cd752468145a4" id="ga7db951ffee1aa377131cd752468145a4"></a>

<p>#define TAG_BF03_CBK_LOG_HOTLIST   0xBF03</p>

EMVCo features \"transaction log\" and \"hotlist\".

Called depending on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a> and <a href="group___t_x_n___o_p_t_i_o_n_s.md#gae29197978a50277b7ebbcb8c3890be9d">EMV_CT_TRXOP_HOTLST_LOG_CALLBACK</a>
The application shall return information if the given card is black-listed and which amounts were already payed with that card.
**INPUT:**
<a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a>: PAN
<a href="group___e_m_v_c_o___t_a_g_s.md#ga17f22ccb8130cc68e45609afc6b58f00">TAG_5F34_PAN_SEQUENCE_NB</a>: PAN Sequence Number
<a href="group___e_m_v_c_o___t_a_g_s.md#ga5eb2095961ebe9a91e560003f75358bb">TAG_5F24_APP_EXP_DATE</a>: Expiry Date
**OUTPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#ga1768b84097a1d50df88863566897c9eb">TAG_DF72_CBK_BLACKLIST</a>: In hotlist yes/no, optional
<a href="group___t_l_v___c_b_c_k___t_l_v.md#gabdaff06d3ecc07bc38b49eb7a6b3da44">TAG_DF73_CBK_TRANSLOG</a>: Stored amount, optional, format n12

## TAG_BF04_CBK_REDUCE_CAND <a href="#gababcd780ecf1c9d400ecfde024d910fe" id="gababcd780ecf1c9d400ecfde024d910fe"></a>

<p>#define TAG_BF04_CBK_REDUCE_CAND   0xBF04</p>

Application Candidate List Reduction/Modification.

Called depending on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a> and <a href="group___t_x_n___o_p_t_i_o_n_s.md#gaab785578dcd744eb56754e0be88d63c3">EMV_CT_SELOP_CBCK_APPLI_SEL</a>
The application gets the candidate list and has the option to modify it.
It may select which candidate to choose, or reduce the candidate list, or re-order it.
So a selection by the cardholder can be implemented. Or a selection by local rules.
**INPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#ga40ea6cec9913e25bd353e4adfd440451">TAG_DF74_CBK_SELECTOR</a>: Who has to select the application (0=merchant or 1=customer)
[Following parameters are repeated for each candidate:]{.underline}
<a href="group___e_m_v_c_o___t_a_g_s.md#ga70b6da94fde0a697b05755cdfc084023">TAG_50_APP_LABEL</a>: Application label, the chosen application label according EMVCo rules and application configuration,
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga939333f4c5c2e500beb9b06d6939fb23">TAG_DF04_AID</a>: AID
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3a1054eb544cd6bec61e05af08f8fbe0">TAG_DF60_VELOCITY_ORIG_IDX</a>: Original candidate index
<a href="group___e_m_v_c_o___t_a_g_s.md#gaaa613c7ef00b768c88fe5cc3ee16107b">TAG_5F2D_LANGUAGE</a>: Language preference
<a href="group___t_l_v___c_b_c_k___t_l_v.md#gafa1df1b64dc7e2046cb76065c3eafcab">TAG_DFD00B_APPNAME_UFT8</a>: Application label converted to UTF-8 unless switched off by transaction flow option <a href="group___t_x_n___o_p_t_i_o_n_s.md#gade4aa691ae49dc65a56a21a07ad85bf1">EMV_CT_SELOP_NO_UTF8</a>
<a href="group___e_m_v_c_o___t_a_g_s.md#gaec3d1fc145f66b87ec5416b7d6cb69aa">TAG_9F11_ISS_CODE_TABLE_ID</a>: Code page index part of ISO-8859, length 0 if not present or discarded, absent if no candidate requires
**OUTPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#ga48500ab87c68d9e4042ba3420393e7bc">TAG_DF75_CBK_APP_NO</a>: Index of the selected application (1-based, 0=cancel, \>0xE0: 0xED=fallback, else abort).
A (resorted) list of candidates can be given back by including several indices in DF75.

{% hint style="info" %}
Due to backward compatibility the candidate-wise input data (all but selector) are put the order listed here each as sequence of all candidates, e.g. DF74, 50, 50, 50, DF04, DF04, DF04 and so on.
{% endhint %}

## TAG_BF05_CBK_DOM_APPS <a href="#gafd0adcc12331559863dd65d8f7558645" id="gafd0adcc12331559863dd65d8f7558645"></a>

<p>#define TAG_BF05_CBK_DOM_APPS   0xBF05</p>

Domestic app detected during application selection.

Called depending on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a> and <a href="group___t_x_n___o_p_t_i_o_n_s.md#gaac4024c63ae6e2d9e8919089801d65dd">EMV_CT_SELOP_CBCK_DOMESTIC_APPS</a>
An application configured as \"domestic\" by means of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ga930c35de610cfdd929e6baa6a93d9d53">EMV_CT_DOM_CHIP_TYPE</a> has been found on the card.
**INPUT:**
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga939333f4c5c2e500beb9b06d6939fb23">TAG_DF04_AID</a>: AID
**OUTPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#gaa554c75ed30b7eeb73ff2a981b8878eb">TAG_DF7E_CBK_DOM_APP_RES</a>: Domestic app in/out, see <a href="group___d_e_f___c_b_k___d_o_m_a_p_p.md">Modes of domestic application handling</a>

## TAG_BF06_CBK_LOCAL_CHECKS <a href="#gac82fa7e4064512e71e63fd647b817d97" id="gac82fa7e4064512e71e63fd647b817d97"></a>

<p>#define TAG_BF06_CBK_LOCAL_CHECKS   0xBF06</p>

Callback for local checks after reading the PAN.

Called depending on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a> and <a href="group___t_x_n___o_p_t_i_o_n_s.md#gab25c0778e85a9cc2c72c33cd0616bf89">EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK</a>
After step \"READ RECORD\" the available card data is given to the application.
Upon this information the application can modify certain transaction parameters.
**INPUT:**
<a href="group___e_m_v_c_o___t_a_g_s.md#gac2b5ddfa533fc2ce2612d1f126b2ed5f">TAG_9F42_APP_CURRENCY_CODE</a>: Transaction currency
<a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a>: Primary Account Number
<a href="group___e_m_v_c_o___t_a_g_s.md#ga6952b55733eff49c55768a6f7802f9e4">TAG_9F02_NUM_AMOUNT_AUTH</a>: Transaction amount
<a href="group___e_m_v_c_o___t_a_g_s.md#gab275fa140f8e21bda8e1d0bdafe47602">TAG_9F1B_TRM_FLOOR_LIMIT</a>: Floor limit
<a href="group___e_m_v_c_o___t_a_g_s.md#gaa35ef81cc90fe90126a537cbd611ead6">TAG_5F28_ISS_COUNTRY_CODE</a>: Issuer country code
<a href="group___e_m_v_c_o___t_a_g_s.md#ga5eb2095961ebe9a91e560003f75358bb">TAG_5F24_APP_EXP_DATE</a>: Expiry Date of the card
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga6295466514899cd71991d081038ca021">TAG_DF5B_DCC_PROHIBIT</a>: Info if Dynamic Currency Conversion is forbidden (1=forbidden, 0=allowed), that\'s the case if currency or amount was already sent to ICC in PDOL
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8f31676739de9253f1192a44eadaa19a">TAG_DF5C_DOM_INFO</a>: Special information, <a href="group___c_b_c_k___d_o_m___i_n_f_o.md">Domestic callback information</a>
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga313084d02966bb6075d6a07b5e227ac3">TAG_DF21_TAC_DENIAL</a>, <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8300df6d32eb040757cce4594db2eea8">TAG_DF22_TAC_ONLINE</a>, <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga588b92246f48302d61cc055baf122dda">TAG_DF23_TAC_DEFAULT</a>: Terminal action codes
<a href="group___e_m_v_c_o___t_a_g_s.md#ga2e6e79fb698c2021efe43366f6517b76">TAG_57_TRACK2_EQUIVALENT</a>: Track2 equivalent data
<a href="group___e_m_v_c_o___t_a_g_s.md#ga70b6da94fde0a697b05755cdfc084023">TAG_50_APP_LABEL</a>: Application label
<a href="group___e_m_v_c_o___t_a_g_s.md#ga94548248d5f87864250eb58aa7f09907">TAG_8E_CVM_LIST</a>: List of Cardholder Verification Methods
**OUTPUT** (all optional):
<a href="group___e_m_v_c_o___t_a_g_s.md#ga6952b55733eff49c55768a6f7802f9e4">TAG_9F02_NUM_AMOUNT_AUTH</a>: Modified transaction amount
<a href="group___e_m_v_c_o___t_a_g_s.md#gab275fa140f8e21bda8e1d0bdafe47602">TAG_9F1B_TRM_FLOOR_LIMIT</a>: Modified floor limit
<a href="group___t_l_v___c_b_c_k___t_l_v.md#ga188ecff68e5b74f42c28d8faa67778d9">TAG_DF76_CBK_MANIPUL_TRX</a>: Modify action analysis, possible values are <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga493578e3e0e9112d42d209b783fe1f60">EMV_ADK_ARQC</a>, <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga956701431c0cef09072c040d816e5d7b">EMV_ADK_AAC</a>, <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga7045deba09a19eea4f7df8881a08b807">EMV_ADK_ABORT</a>
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf0830fa6ef53350bbe99ac9efcf38055">TAG_DF5D_DOM_OPTION</a>: Option for transaction proceeding, <a href="group___c_b_c_k___d_o_m___o_p_t_i_o_n.md">Domestic callback options</a>
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga313084d02966bb6075d6a07b5e227ac3">TAG_DF21_TAC_DENIAL</a>, <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8300df6d32eb040757cce4594db2eea8">TAG_DF22_TAC_ONLINE</a>, <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga588b92246f48302d61cc055baf122dda">TAG_DF23_TAC_DEFAULT</a>: Modified terminal action codes
<a href="group___e_m_v_c_o___t_a_g_s.md#ga70b6da94fde0a697b05755cdfc084023">TAG_50_APP_LABEL</a>: Modified application label

## TAG_BF07_CBK_DCC <a href="#gaf335a870e9d2f299c848f76b843907f7" id="gaf335a870e9d2f299c848f76b843907f7"></a>

<p>#define TAG_BF07_CBK_DCC   0xBF07</p>

Dynamic currency conversion (DCC)

Called depending on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>, <a href="group___a_p_p___f_l_o_w___c_a_p_s.md#gab46cea653620bce1d34685cb1ab851d9">DCC_CHECK</a> and <a href="group___t_x_n___o_p_t_i_o_n_s.md#ga37fe06e4949f5a341274dbe45c208b84">EMV_CT_TRXOP_DCC_CALLBACK</a>
The application may change the currency of the transaction (including changed amount, floor limit, and others, see <a href="pg_emv_contact_users_guide.md#subsec_emv_ct_dynamic_currency_change">Dynamic Currency Change</a>).
**INPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#ga866150b1aa87d89f0783c4dd4eeb3d59">TAG_DF7D_CBK_DCC_CHECK</a>: see <a href="group___d_c_c___m_o_d_e.md">DCC mode</a>
<a href="group___e_m_v_c_o___t_a_g_s.md#gac2b5ddfa533fc2ce2612d1f126b2ed5f">TAG_9F42_APP_CURRENCY_CODE</a>: Application currency (from the card)
<a href="group___e_m_v_c_o___t_a_g_s.md#ga4ccedb21a71fcb6ace22bac98ba548a5">TAG_5A_APP_PAN</a>: Primary Account Number
<a href="group___e_m_v_c_o___t_a_g_s.md#ga6952b55733eff49c55768a6f7802f9e4">TAG_9F02_NUM_AMOUNT_AUTH</a>: Transaction amount
<a href="group___e_m_v_c_o___t_a_g_s.md#ga369ab2cc83e9b220bdfa79753f1f3962">TAG_5F2A_TRANS_CURRENCY</a>: Transaction currency
<a href="group___e_m_v_c_o___t_a_g_s.md#ga134c61ae2787b93c5def5bbf929f7cb4">TAG_5F36_TRANS_CURRENCY_EXP</a>: Transaction currency exponent
<a href="group___e_m_v_c_o___t_a_g_s.md#gab275fa140f8e21bda8e1d0bdafe47602">TAG_9F1B_TRM_FLOOR_LIMIT</a>: Floor limit
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gab925ead3cc4b76ac55df0d4238c9f951">TAG_DF24_THRESHHOLD</a>: Threshold value
<a href="group___e_m_v_c_o___t_a_g_s.md#ga94548248d5f87864250eb58aa7f09907">TAG_8E_CVM_LIST</a>: List of Cardholder Verification Methods
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaee093e3ed52127c68f1d09588512ee24">TAG_DF39_DCC_CBCK_INFO</a>: see <a href="group___c_b_c_k___d_c_c___i_n_f_o.md">DCC callback information</a>
**OUTPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#ga866150b1aa87d89f0783c4dd4eeb3d59">TAG_DF7D_CBK_DCC_CHECK</a>: Decision if to change the currency (<a href="group___d_c_c___m_o_d_e.md">DCC mode</a>)
<a href="group___e_m_v_c_o___t_a_g_s.md#ga6952b55733eff49c55768a6f7802f9e4">TAG_9F02_NUM_AMOUNT_AUTH</a>: Modified Transaction amount
<a href="group___e_m_v_c_o___t_a_g_s.md#ga369ab2cc83e9b220bdfa79753f1f3962">TAG_5F2A_TRANS_CURRENCY</a>: Changed transaction currency
<a href="group___e_m_v_c_o___t_a_g_s.md#ga134c61ae2787b93c5def5bbf929f7cb4">TAG_5F36_TRANS_CURRENCY_EXP</a>: Changed transaction currency exponent
<a href="group___e_m_v_c_o___t_a_g_s.md#gab275fa140f8e21bda8e1d0bdafe47602">TAG_9F1B_TRM_FLOOR_LIMIT</a>: Modified floor limit
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gab925ead3cc4b76ac55df0d4238c9f951">TAG_DF24_THRESHHOLD</a>: Changed threshold

## TAG_BF08_CBK_PIN <a href="#gadc9d6fed84456455586fb621722ae922" id="gadc9d6fed84456455586fb621722ae922"></a>

<p>#define TAG_BF08_CBK_PIN   0xBF08</p>

PIN Input request.

Called depending on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a>
The application shall prompt the cardholder to enter his PIN and then give back the result.
**INPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#gae1140e3c457d68c0dd795ffad8c84b29">TAG_DF79_CBK_PIN_INFO</a>: PIN Type, see <a href="group___a_d_k___p_i_n___p_a_r_a_m.md">Definitions for PIN Input callback function</a>
<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gade39b36895af55804c1fd7793695292a">TAG_DF41_PIN_BYPASS</a>: Bypass supported (1=yes, 0=no)
<a href="group___e_m_v_c_o___t_a_g_s.md#gad08084306abcf29bb9517b75b0b5b189">TAG_9F37_UNPREDICTABLE_NB</a>: Random number
<a href="group___t_l_v___c_b_c_k___t_l_v.md#ga265096b43775bdbc63d40542ecd1c182">TAG_DF7A_CBK_PIN_KEY_DATA</a>: Public Key Modulus
<a href="group___t_l_v___c_b_c_k___t_l_v.md#ga3a0fef9b855fb73018ddf60453df207c">TAG_DF7B_CBK_PIN_KEY_EXP</a>: Public key Exponent
<a href="group___e_m_v_c_o___t_a_g_s.md#ga6952b55733eff49c55768a6f7802f9e4">TAG_9F02_NUM_AMOUNT_AUTH</a>, <a href="group___e_m_v_c_o___t_a_g_s.md#gaccc339b2226ade4b5ab935624377f800">TAG_9F03_NUM_AMOUNT_OTHER</a>, and <a href="group___e_m_v_c_o___t_a_g_s.md#ga369ab2cc83e9b220bdfa79753f1f3962">TAG_5F2A_TRANS_CURRENCY</a>: only if <a href="group___a_p_p___f_l_o_w___c_a_p_s.md#ga646066dcb5ff2196f23e81697ece0fa0">EMV_CT_CONF_AMOUNT_PIN</a>
**OUTPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#gae1140e3c457d68c0dd795ffad8c84b29">TAG_DF79_CBK_PIN_INFO</a>: PIN input result, see <a href="group___a_d_k___p_i_n___r_e_t_u_r_n.md">Return values</a>

## TAG_BF09_CBK_CARDHOLDERINFO <a href="#ga03bf78609c19ba9c07772fcd74d8c1f1" id="ga03bf78609c19ba9c07772fcd74d8c1f1"></a>

<p>#define TAG_BF09_CBK_CARDHOLDERINFO   0xBF09</p>

A text information has to be displayed to the cardholder.

Called depending on <a href="group___t_x_n___s_t_e_p_s.md#gaddc20bcb42b1a9a5ec97e7514f2d4504">MS_RETURN_CALLBACKS</a> and <a href="group___t_x_n___o_p_t_i_o_n_s.md#gafe4002b35de58d1aca8e329a348052e6">EMV_CT_TRXOP_CARDHINFO_CALLBACK</a>
Possible values: see <a href="group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md">Defines for callback function "cardholder information"</a>
**INPUT:**
<a href="group___t_l_v___c_b_c_k___t_l_v.md#gab104c4f8b104fe62519f79eed1c0d865">TAG_DF6E_CBK_CARDHOLDERINFO</a>: Transaction Info for cardholder
**OUTPUT:** --

## TAG_BF0B_INIT_CALLBACK_THREAD <a href="#ga2dd430ed5e62c398afa839bcf012fa48" id="ga2dd430ed5e62c398afa839bcf012fa48"></a>

<p>#define TAG_BF0B_INIT_CALLBACK_THREAD   0xBF0B</p>

Signals the creation of the \"notification callback thread\" (inside `libEMV_CTLS_Link.so`)

Data provided by Framework via <a href="_e_m_v___c_t_l_s___ser_interface_8h.md#a27717a16ba1426c41655362ca975b475">EMV_CTLS_HandleCallback()</a> is relayed.
When thread is stopped [TAG_BF0F_EXIT_CALLBACK_THREAD](#gabdca4a381394736c399374070789196f "Signals the stop of the "notification callback thread" (inside libEMV_CTLS_Link.so)") is sent.

**INPUT:** ---
**OUTPUT:** --- (notify, not generated in FW, but in client)

## TAG_BF0C_CTLS_CBK_APP_SELECTED <a href="#gaf101b44707dcb098e311d65bd7ac817e" id="gaf101b44707dcb098e311d65bd7ac817e"></a>

<p>#define TAG_BF0C_CTLS_CBK_APP_SELECTED   0xBF0C</p>

Signals that application is selected.

Used Kernel can be changed, invoked depending on <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#ga0f5eaa999c8e098ac3c834987c9735db">CLTRXOP_APPSELECTED_CALLBACK</a>.

**INPUT:** AID (tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga939333f4c5c2e500beb9b06d6939fb23">TAG_DF04_AID</a>)
**INPUT:** application label (tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga70b6da94fde0a697b05755cdfc084023">TAG_50_APP_LABEL</a>)
**INPUT:** application origin index of candidate list (tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3a1054eb544cd6bec61e05af08f8fbe0">TAG_DF60_VELOCITY_ORIG_IDX</a>)
**INPUT:** application language preferences of candidate list (tag <a href="group___e_m_v_c_o___t_a_g_s.md#gaaa613c7ef00b768c88fe5cc3ee16107b">TAG_5F2D_LANGUAGE</a>)
**INPUT:** application kernel ID (tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga4638f726fef86334fe54d19d3b18713e">TAG_DFD003_Kernel_ID</a>)
**INPUT:** Processing Result Bitmap of Entry Point (tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga9fa431f39dfd3f302d379995a919dc41">TAG_DF63_VELOCITY_EP_PRB</a>), contains flag for 9F2A presence (see emv_cl.h from Velocity Entry Point)
**INPUT:** FCI Issuer Discretionary Data from Final Select response (tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga87cf97daaa2f8375a36dd08318cdb38d">TAG_BF0C_FCI_ISS_DISCR</a>)
**OUTPUT:** 3-byte kernel ID to be used for the transaction (tag <a href="group___t_l_v___c_b_c_k.md#gab8411e36258d5c7d3291e9ea22e17863">TAG_DF7E_KERNEL_TO_USE</a>), e.g. 0x020000 for PayPass, use 0xFF0000 to abort the transaction, use 0xFE0000 to silently abort, use 0x000000 to force fallback to contact interface

{% hint style="info" %}
For restart without LED flickering activate transaction flow option <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#ga7d7db81a9ebcf9bba42d9dbc4bf0e33f">CLTRXOP_REPEAT_L1</a>
{% endhint %}

## TAG_BF0E_CBK_DATA_EXCHANGE <a href="#ga32719fcef354a44723c8b6561716f5bd" id="ga32719fcef354a44723c8b6561716f5bd"></a>

<p>#define TAG_BF0E_CBK_DATA_EXCHANGE   0xBF0E</p>

PayPass3 DataExchange.

DataExchange can be enabled by <a href="group___d_e_f___f_l_o_w___m_k.md#gaa43ef9549ae63dd49b6d18549f1b6c8b">EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0</a>

**INPUT:** <a href="group___t_l_v___c_b_c_k.md#ga39a89f82a43d278d55f4a30ef988428d">TAG_DF8F58_DE_REQUEST</a>, <a href="group___e_m_v_c_o___t_a_g_s.md#gaa1a0900aa13055b0b5199a8542ea2c64">TAG_4F_APP_ID</a>, <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaa5dcebd8d4d4bd17eab87fdc7a3ddc6b">TAG_DFAB01_KERNEL_ID</a>, <a href="group___m_c___t_a_g_s.md#ga31cbc9b6d96370b74c32970e1967b42d">TAG_FF8104_DE_DATA_TO_SEND</a>, <a href="group___m_c___t_a_g_s.md#ga42d1ee853afeb21f585492a4c8428382">TAG_DF8106_DE_DATA_NEEDED</a>, <a href="group___t_l_v___c_b_c_k.md#ga350252d0754af29e65491c61efafd681">TAG_DF8F59_DE_STATE</a>
**OUTPUT:** <a href="group___t_l_v___c_b_c_k.md#gaa5adbd002c7e040e248be3fb7fe7f5ad">TAG_DF8F5A_DE_MODE</a>, <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#ga8cba9e04a32675f7ed16d81f3af7ebed">TAG_FF10_DE_DET_DATA</a>

## TAG_BF0F_EXIT_CALLBACK_THREAD <a href="#gabdca4a381394736c399374070789196f" id="gabdca4a381394736c399374070789196f"></a>

<p>#define TAG_BF0F_EXIT_CALLBACK_THREAD   0xBF0F</p>

Signals the stop of the \"notification callback thread\" (inside `libEMV_CTLS_Link.so`)

This thread was created at [TAG_BF0B_INIT_CALLBACK_THREAD](#ga2dd430ed5e62c398afa839bcf012fa48 "Signals the creation of the "notification callback thread" (inside libEMV_CTLS_Link....").

**INPUT:** ---
**OUTPUT:** --- (notify via <a href="_e_m_v___c_t_l_s___ser_interface_8h.md#a27717a16ba1426c41655362ca975b475">EMV_CTLS_HandleCallback()</a>)

## TAG_BF10_CTLS_CBK_LEDS <a href="#ga1ed48d32ca46560f8dacd954fc485bcf" id="ga1ed48d32ca46560f8dacd954fc485bcf"></a>

<p>#define TAG_BF10_CTLS_CBK_LEDS   0xBF10</p>

Switch soft LEDs.

Invoked depending on <a href="group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#ga24093f62e25124dd2c5050d3ed05cf5c">EMV_CTLS_INIT_OPT_LED_CBK_EXT</a>
Not sent in case the terminal has physical (hardware) LEDs.
Not sent in SDI standard mode.
See also <a href="pg_emv_contactless_users_guide.md#subsubsec_emv_ctls_led_handling">LED Handling</a>.

**INPUT:** State of CTLS LEDs (1-byte-bitstring, e.g. <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#gaee6580bd95df40c758983f6552bffb8a">CONTACTLESS_LED_FIRST</a>), in tag <a href="group___v_e_r_i___t_a_g_s.md#ga2f34280866aca01da43759de83289fd6">TAG_C8_LED_STATE</a>
**INPUT:** Additional info (1-byte-bitstring, e.g. <a href="group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md#gacdd5936384668992cd4a8e21cd835495">CBCK_LED_ADD_INFO_DONT_TRACE</a>), in tag <a href="group___t_l_v___c_b_c_k.md#ga49b42df1c0b4c78b9e954b1c24aa8e3d">TAG_DF8F60_LED_ADD_INFO</a>
**OUTPUT:** --- (notify via <a href="_e_m_v___c_t_l_s___ser_interface_8h.md#a27717a16ba1426c41655362ca975b475">EMV_CTLS_HandleCallback()</a>)

## TAG_BF12_CBK_MODIFY_CAND <a href="#ga2ef5c305dbfcabbea00a6d9e3c544547" id="ga2ef5c305dbfcabbea00a6d9e3c544547"></a>

<p>#define TAG_BF12_CBK_MODIFY_CAND   0xBF12</p>

Modify candidate list.

Invoked depending on <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#ga00c2871b0d89e9b08f2c93db8cab6e8d">CLTRXOP_CANDLIST_CALLBACK</a>.
<a href="group___f_u_n_c___f_l_o_w.md#gab1600b67271771658ce682b9cfeb660e">EMV_CTLS_GetCandidateData()</a> may be called inside this callback to fetch additional candidate data.

**INPUT:** All AIDs of candidate list (each in a single tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga939333f4c5c2e500beb9b06d6939fb23">TAG_DF04_AID</a>)
**INPUT:** All application labels of candidate list (each in a single tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga70b6da94fde0a697b05755cdfc084023">TAG_50_APP_LABEL</a>)
**INPUT:** All application origin indices of candidate list (each in a single tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3a1054eb544cd6bec61e05af08f8fbe0">TAG_DF60_VELOCITY_ORIG_IDX</a>)
**INPUT:** All application language preferences of candidate list (each in a single tag <a href="group___e_m_v_c_o___t_a_g_s.md#gaaa613c7ef00b768c88fe5cc3ee16107b">TAG_5F2D_LANGUAGE</a>)
**INPUT:** All application kernel IDs of candidate list (each in a single tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga4638f726fef86334fe54d19d3b18713e">TAG_DFD003_Kernel_ID</a>)
**INPUT:** All combination Processing Result Bitmap of Entry Point (tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga9fa431f39dfd3f302d379995a919dc41">TAG_DF63_VELOCITY_EP_PRB</a>), contains flag for 9F2A presence (see emv_cl.h from Velocity Entry Point)
**OUTPUT:**

- <a href="group___t_l_v___c_b_c_k___t_l_v.md#ga4f60c8e0ba68025a32ff0c793c13c5f5">TAG_DF7F_CBK_COMM_ERR</a>
- Reduced list as a list of App Index (<a href="group___t_l_v___c_b_c_k___t_l_v.md#ga48500ab87c68d9e4042ba3420393e7bc">TAG_DF75_CBK_APP_NO</a>), resorting only supported for velocity kernel
  A single index \> \'E0\' causes abort: \'FE\' results in silent <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga7045deba09a19eea4f7df8881a08b807">EMV_ADK_ABORT</a>, others result in <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga321bbf465c50cf89772989dec678ae60">EMV_ADK_TXN_EMPTY_LIST</a> with silence depending on <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#gaf2d8aa5ec98248a678aaf79948941223">CLTRXOP_SILENT_ON_EMPTY_LIST</a>
  {% hint style="info" %}
  For restart without LED flickering activate transaction flow option <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#ga7d7db81a9ebcf9bba42d9dbc4bf0e33f">CLTRXOP_REPEAT_L1</a>
  {% endhint %}
- PostProcessingOption, skip Post Processing if TRUE (<a href="group___t_l_v___c_b_c_k.md#ga0660b592558683068d51d05ee1673f15">TAG_DF76_CBK_APP_POSTPROC</a>)
- Transaction amount update (<a href="group___e_m_v_c_o___t_a_g_s.md#ga6952b55733eff49c55768a6f7802f9e4">TAG_9F02_NUM_AMOUNT_AUTH</a>). An amount update will restart the Entry Point pre-processing and combination selection. The Select PPSE APDU exchange is replayed (no command is sent to card). A second Candidate List Callback will be issued because the Entry Point might have other processing results. Amount updates in this second callback are not foreseen and ignored.
- <a href="group___t_l_v___c_b_c_k___t_l_v.md#ga6951c652d92531826b367791f40c35a6">TAG_DF6C_CBK_REPEAT</a>: Decide if ADK should repeat the callback call or not.

## TAG_BF13_CBK_RND\[1/2\] <a href="#ga8da23b41b13c8e47e14f5976422cf4a1" id="ga8da23b41b13c8e47e14f5976422cf4a1"></a> {#tag_bf13_cbk_rnd-12}

<p>#define TAG_BF13_CBK_RND   0xBF13</p>

Random number provided by the calling application.

**<a href="deprecated.md#_deprecated000146">Deprecated:</a>** not supported anymore

Usually the EMV ADK resp. L2 kernel uses the OS functionality for getting a random number.
Only for velocity kernel, invoked depending on <a href="group___t_x_n___o_p_t_i_o_n_s.md#ga6abd07279b04c5fd38bb58edc02d2f78">EMV_CT_TRXOP_RND_CALLBACK</a>
**INPUT:**
none
**OUTPUT:**
random number from app (<a href="group___e_m_v_c_o___t_a_g_s.md#gad08084306abcf29bb9517b75b0b5b189">TAG_9F37_UNPREDICTABLE_NB</a>)

## TAG_BF13_CBK_RND\[2/2\] <a href="#ga8da23b41b13c8e47e14f5976422cf4a1" id="ga8da23b41b13c8e47e14f5976422cf4a1"></a> {#tag_bf13_cbk_rnd-22}

<p>#define TAG_BF13_CBK_RND   0xBF13</p>

Random number provided by the calling application -.

**<a href="deprecated.md#_deprecated000050">Deprecated:</a>** not supported anymore

Usually the EMV ADK resp. L2 kernel uses the OS functionality for getting a random number.
Only for velocity kernel, invoked depending on <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#gad7421921c4390a1255aef0635297a0e5">CLTRXOP_RND_CALLBACK</a>.

**INPUT:** none
**OUTPUT:** Random number from app (<a href="group___e_m_v_c_o___t_a_g_s.md#gad08084306abcf29bb9517b75b0b5b189">TAG_9F37_UNPREDICTABLE_NB</a>)

## TAG_BF14_CBK_TEXT_DISPLAY <a href="#ga694e27a1370530d36c245cc0cb2288bd" id="ga694e27a1370530d36c245cc0cb2288bd"></a>

<p>#define TAG_BF14_CBK_TEXT_DISPLAY   0xBF14</p>

Text display.

Example: \"See phone for instructions\", <a href="group___a_p_p_l_i___t_e_x_t_s.md#gaa06ce44c0d2088762672aa1aa477fde3">EMV_ADK_TXT_SEE_PHONE</a>
Sent by the \"notification callback thread\".

**INPUT:** text ID to be displayed by calling application, see <a href="group___a_p_p_l_i___t_e_x_t_s.md">Application text IDs</a> (<a href="group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#gaf08138de4ca9161fd3e04c927857275c">TAG_DF8F12_DISPLAY_TEXT</a>)
**INPUT:** AID of processed terminal candidate (<a href="group___e_m_v_c_o___t_a_g_s.md#gaa1a0900aa13055b0b5199a8542ea2c64">TAG_4F_APP_ID</a>)
**INPUT:** Kernel Id of processed terminal candidate (<a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaa5dcebd8d4d4bd17eab87fdc7a3ddc6b">TAG_DFAB01_KERNEL_ID</a>, 3 bytes)
**INPUT:** card\'s language preference (<a href="group___e_m_v_c_o___t_a_g_s.md#gaaa613c7ef00b768c88fe5cc3ee16107b">TAG_5F2D_LANGUAGE</a>, 2-8 bytes)
**INPUT:** EMVCo Book A UI request message ID (<a href="group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga16f8318678468a0229965cb44c6855e1">TAG_DF8F13_UI_MSG_ID</a>)
**INPUT:** EMVCo Book A UI request message hold time (<a href="group___m_c___t_a_g_s.md#gab6639b6014ddbc22057a1ad2ed9f21f1">TAG_DF812D_MESSAGE_HOLD_TIME</a>, 3 bytes, n 6, integer in 100ms)
**INPUT:** EMVCo Book A UI request message ID restart (<a href="group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga3eaeac5f0914159a807f4838d20fae0b">TAG_DF8F14_UI_MSG_ID_RESTART</a>)
**OUTPUT:** --- (notify via <a href="_e_m_v___c_t_l_s___ser_interface_8h.md#a27717a16ba1426c41655362ca975b475">EMV_CTLS_HandleCallback()</a>)

## TAG_BF15_CBK_CARD_TAPPED <a href="#ga62e41db8f2248fd9a247ace09c1e0f7f" id="ga62e41db8f2248fd9a247ace09c1e0f7f"></a>

<p>#define TAG_BF15_CBK_CARD_TAPPED   0xBF15</p>

Notification that a card was detected.

Calling application shall invoke <a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline()</a> to fetch transaction results.
Is only called in polling mode (<a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a55288d912bcb810932a421b632af84aa">EMV_CTLS_START_STRUCT::ServerPollTimeout</a> != 0).

**INPUT:** result of internally called <a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline()</a> (see <a href="group___a_d_k___r_e_t___c_o_d_e.md#gaa5ed8ecc7a31f36a8927e6e258187810">EMV_ADK_INFO</a>, used tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga119e82bf38d864a4b81d6e45d74f358d">TAG_DF42_STATUS</a>)
**OUTPUT:** --- (notify via <a href="_e_m_v___c_t_l_s___ser_interface_8h.md#a27717a16ba1426c41655362ca975b475">EMV_CTLS_HandleCallback()</a>)

## TAG_BF16_CBK_SERVICE_SHORTLIST <a href="#gac2ac8ae81521b54bfa5abf043b323916" id="gac2ac8ae81521b54bfa5abf043b323916"></a>

<p>#define TAG_BF16_CBK_SERVICE_SHORTLIST   0xBF16</p>

RuPay callback before GPO.

This allows the application to forward RuPay parameters during the transaction to the card.
\"Service Directory\" and perform \"Service Shortlisting\". Service supported both by Card & terminal is selected.

**INPUT:** Card Data - Service Info from Card in <a href="group___t_l_v___c_b_c_k.md#gad48383e6581198120c73814045b1a61a">TAG_DF8F50_RUPAY_GPO</a>
**OUTPUT:** Application Data - Selected Service ID in <a href="group___t_l_v___c_b_c_k.md#gad48383e6581198120c73814045b1a61a">TAG_DF8F50_RUPAY_GPO</a>

## TAG_BF17_CBK_SERVICE_FOR_GENAC <a href="#gae0841093e4002162f3eebdd567efdbdf" id="gae0841093e4002162f3eebdd567efdbdf"></a>

<p>#define TAG_BF17_CBK_SERVICE_FOR_GENAC   0xBF17</p>

RuPay callback before Generate AC.

This allows the application to forward RuPay parameters during the transaction to the card.

**INPUT:** Card Data - Signature Info from Card in <a href="group___t_l_v___c_b_c_k.md#gad69547ab3e017ea8fbf40aecc8bfec7a">TAG_DF8F51_RUPAY_GENAC</a>
**OUTPUT:** Application Data - Additional CDOL1 Tags in <a href="group___t_l_v___c_b_c_k.md#gad69547ab3e017ea8fbf40aecc8bfec7a">TAG_DF8F51_RUPAY_GENAC</a>

## TAG_BF18_CBK_PURE_GET_PUT_DATA <a href="#gab3c66f8374aaddaef98194d8135acd79" id="gab3c66f8374aaddaef98194d8135acd79"></a>

<p>#define TAG_BF18_CBK_PURE_GET_PUT_DATA   0xBF18</p>

Gemalto/Pure: provide GET DATA and/or PUT DATA input.

Is invoked after selection of Gemalto application.
Depends on <a href="group___d_e_f___f_l_o_w___g_k.md#ga8a1ccff65b5848f71423b936748cc368">EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0</a> and <a href="group___d_e_f___f_l_o_w___g_k.md#ga0080e3ed4b67038be346185c35c3af30">EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0</a>

**INPUT:** ---
**OUTPUT:** GET DATA input (MSRT, <a href="group___g_e_m_a_l_t_o___t_a_g_s.md#ga7a020ead3ac5f45c250ea24b2e86e0f0">TAG_BF71_PURE_GET_DATA_MSRT</a>) and/or PUT DATA input (MSUT, <a href="group___g_e_m_a_l_t_o___t_a_g_s.md#gaca9e3bd5d28bc64cc520763e71144630">TAG_BF70_PURE_PUT_DATA_MSUT</a>)

## TAG_BF19_CTLS_CBK_BEEP <a href="#ga805fd29bb45bbc706fefd6533ee3c69f" id="ga805fd29bb45bbc706fefd6533ee3c69f"></a>

<p>#define TAG_BF19_CTLS_CBK_BEEP   0xBF19</p>

Application shall sound the buzzer.

Depends on <a href="group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#ga45c618babc37c98358ae6db73fd963eb">EMV_CTLS_INIT_OPT_BEEP_CBK_EXT</a>

**INPUT:** <a href="group___v_e_r_i___t_a_g_s.md#ga0b724e7079eee112657fd53f1e4d909e">TAG_CB_BEEP_SCENARIO</a> (e.g. <a href="group___a_d_k___b_u_z_z_e_r.md#ga15572c15eb725ba64fc23397d04edb10">EMV_CTLS_BEEP_SUCCESS</a>)
**OUTPUT:** --- (notify via <a href="_e_m_v___c_t_l_s___ser_interface_8h.md#a27717a16ba1426c41655362ca975b475">EMV_CTLS_HandleCallback()</a>)

## TAG_BF7F_CBK_TRACE <a href="#ga2bdf296e1436b64373715038c87263b2" id="ga2bdf296e1436b64373715038c87263b2"></a>

<p>#define TAG_BF7F_CBK_TRACE   0xBF7F</p>

Callback for Traces.

Called depending on <a href="group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#ga2e45cc21dd0264a8d3a8c90c733d4f8c">EMV_CT_INIT_OPT_TRACE</a> Recommended way to fetch traces is via ADK-LOG.
Use this callback functionality only if you have special needs.
See also <a href="pg_emv_contact_users_guide.md#subsec_emv_ct_logging">Traces</a>.
**INPUT:**
ASCII Trace (<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaee4e6d6b052dc25dce9ae63c41589ddd">TAG_TRACE</a>)
**OUTPUT:** --

## TAG_BF7F_CTLS_CBK_TRACE <a href="#ga8e26244b50f45cd8de1db4563fc11eea" id="ga8e26244b50f45cd8de1db4563fc11eea"></a>

<p>#define TAG_BF7F_CTLS_CBK_TRACE   0xBF7F</p>

Traces.

For special use. For standard use ADK-LOG. See also <a href="pg_emv_contactless_users_guide.md#subsec_emv_ctls_logging">Traces</a>
Invoked depending on <a href="group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#gaa158cffa6762f6e3f062646c842c9896">EMV_CTLS_INIT_OPT_TRACE</a>
Sent by the \"notification callback thread\".

**INPUT:** ASCII Trace (<a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaee4e6d6b052dc25dce9ae63c41589ddd">TAG_TRACE</a>)
**OUTPUT:** --- (notify via <a href="_e_m_v___c_t_l_s___ser_interface_8h.md#a27717a16ba1426c41655362ca975b475">EMV_CTLS_HandleCallback()</a>)

---
hidden: true
title: 3-byte primitive tagsGeneral topics » Serialization » BER TLV tags used by EMV ADK » Verifone internal tags » Primitive tags
---

[Macros](#define-members)

For all unsigned long variables in functional interface, please use 4 byte in the serialization. [More\...](#details)

Collaboration diagram for 3-byte primitive tags:

![](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_DFD004_TXN_TYPES_SALE](#ga20c3d899e1759544b4fe9e9e4b95eeea)   0xDFD004 |
|   | Additional Transaction Types for sale (length 1..3). See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2747a88626df7b02d5a6c3a283972736">EMV_CT_APPLIDATA_STRUCT::TxnTypesSale</a>. [More\...](#ga20c3d899e1759544b4fe9e9e4b95eeea)<br/> |
| #define  | [TAG_DFD005_TXN_TYPES_CASH](#gad5e676bfc0893326b66dd1915c1230ce)   0xDFD005 |
|   | Additional Transaction Types for cash (length 1..3). See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaf06c0171381243a268293449aac83a3">EMV_CT_APPLIDATA_STRUCT::TxnTypesCash</a>. [More\...](#gad5e676bfc0893326b66dd1915c1230ce)<br/> |
| #define  | [TAG_DFD006_TXN_TYPES_CASHBACK](#ga139574f5e46407ac2844efcb16c91d98)   0xDFD006 |
|   | Additional Transaction Types for cashback (length 1..3). See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5c423eef2c409c104e37ae13ee5edc91">EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback</a>. [More\...](#ga139574f5e46407ac2844efcb16c91d98)<br/> |
| #define  | [TAG_DFD007_TXN_TYPES_REFUND](#gad06c010a334fdc3cdf73b3398fb696af)   0xDFD007 |
|   | Additional Transaction Types for refund (length 1..3). See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80c8a1f9e2c537ecbc027981dc237c0b">EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund</a>. [More\...](#gad06c010a334fdc3cdf73b3398fb696af)<br/> |
| #define  | [TAG_DFAB58_DCR_LIST_IDS](#gacca3b2f66195b57095be5242cc7c747e)   0xDFAB58 |
|   | Data Container Read List for DPAS-2 Data Storage: list of container IDs. See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a94cdb96dc0c72d50b22bc9ee29c25b9f">EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds</a>. [More\...](#gacca3b2f66195b57095be5242cc7c747e)<br/> |
| #define  | [TAG_DFAB59_DCR_LIST_RANGES](#ga4e900f633bb23ee6490e0cfe6e7e32aa)   0xDFAB59 |
|   | Data Container Read List for DPAS-2 Data Storage: list of container ID ranges. See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a418acaa9bb3b4d2a70442c50205f69a3">EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges</a>. [More\...](#ga4e900f633bb23ee6490e0cfe6e7e32aa)<br/> |
| #define  | [TAG_DF8F0A_EXIT_OPTIONS](#ga7809d602c4a9b6f1d35eac38754011fc)   0xDF8F0A |
|   | Options send with Exit_Framework, see <a href="group___e_x_i_t___f_w___o_p_t_i_o_n_s.md">Options for Exit Framework</a>. [More\...](#ga7809d602c4a9b6f1d35eac38754011fc)<br/> |
| #define  | [TAG_DF8F0F_APPLYCONFIG_OPTIONS](#ga47ee9ec331037ee05887cfa8889c76b2)   0xDF8F0F |
|   | Options send with <a href="group___f_u_n_c___c_o_n_f.md#ga3170974cb7a73a9dec8f881295cc1cac">EMV_CT_ApplyConfiguration()</a>, unsigned long in functional interface, please use 4 byte in the serialization. [More\...](#ga47ee9ec331037ee05887cfa8889c76b2)<br/> |
| #define  | [TAG_DF8F30_REQUESTED_TAGS](#ga8de6a518ec47d3e50b97922c8a528be4)   0xDF8F30 |
|   | for requestedTags parameter in <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> [More\...](#ga8de6a518ec47d3e50b97922c8a528be4)<br/> |

## DetailedDescription {#detailed-description}

For all unsigned long variables in functional interface, please use 4 byte in the serialization.

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_DF8F0A_EXIT_OPTIONS <a href="#ga7809d602c4a9b6f1d35eac38754011fc" id="ga7809d602c4a9b6f1d35eac38754011fc"></a>

<p>#define TAG_DF8F0A_EXIT_OPTIONS   0xDF8F0A</p>

Options send with Exit_Framework, see <a href="group___e_x_i_t___f_w___o_p_t_i_o_n_s.md">Options for Exit Framework</a>.

## TAG_DF8F0F_APPLYCONFIG_OPTIONS <a href="#ga47ee9ec331037ee05887cfa8889c76b2" id="ga47ee9ec331037ee05887cfa8889c76b2"></a>

<p>#define TAG_DF8F0F_APPLYCONFIG_OPTIONS   0xDF8F0F</p>

Options send with <a href="group___f_u_n_c___c_o_n_f.md#ga3170974cb7a73a9dec8f881295cc1cac">EMV_CT_ApplyConfiguration()</a>, unsigned long in functional interface, please use 4 byte in the serialization.

## TAG_DF8F30_REQUESTED_TAGS <a href="#ga8de6a518ec47d3e50b97922c8a528be4" id="ga8de6a518ec47d3e50b97922c8a528be4"></a>

<p>#define TAG_DF8F30_REQUESTED_TAGS   0xDF8F30</p>

for requestedTags parameter in <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a>

## TAG_DFAB58_DCR_LIST_IDS <a href="#gacca3b2f66195b57095be5242cc7c747e" id="gacca3b2f66195b57095be5242cc7c747e"></a>

<p>#define TAG_DFAB58_DCR_LIST_IDS   0xDFAB58</p>

Data Container Read List for DPAS-2 Data Storage: list of container IDs. See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a94cdb96dc0c72d50b22bc9ee29c25b9f">EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds</a>.

## TAG_DFAB59_DCR_LIST_RANGES <a href="#ga4e900f633bb23ee6490e0cfe6e7e32aa" id="ga4e900f633bb23ee6490e0cfe6e7e32aa"></a>

<p>#define TAG_DFAB59_DCR_LIST_RANGES   0xDFAB59</p>

Data Container Read List for DPAS-2 Data Storage: list of container ID ranges. See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a418acaa9bb3b4d2a70442c50205f69a3">EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges</a>.

## TAG_DFD004_TXN_TYPES_SALE <a href="#ga20c3d899e1759544b4fe9e9e4b95eeea" id="ga20c3d899e1759544b4fe9e9e4b95eeea"></a>

<p>#define TAG_DFD004_TXN_TYPES_SALE   0xDFD004</p>

Additional Transaction Types for sale (length 1..3). See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2747a88626df7b02d5a6c3a283972736">EMV_CT_APPLIDATA_STRUCT::TxnTypesSale</a>.

## TAG_DFD005_TXN_TYPES_CASH <a href="#gad5e676bfc0893326b66dd1915c1230ce" id="gad5e676bfc0893326b66dd1915c1230ce"></a>

<p>#define TAG_DFD005_TXN_TYPES_CASH   0xDFD005</p>

Additional Transaction Types for cash (length 1..3). See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaf06c0171381243a268293449aac83a3">EMV_CT_APPLIDATA_STRUCT::TxnTypesCash</a>.

## TAG_DFD006_TXN_TYPES_CASHBACK <a href="#ga139574f5e46407ac2844efcb16c91d98" id="ga139574f5e46407ac2844efcb16c91d98"></a>

<p>#define TAG_DFD006_TXN_TYPES_CASHBACK   0xDFD006</p>

Additional Transaction Types for cashback (length 1..3). See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5c423eef2c409c104e37ae13ee5edc91">EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback</a>.

## TAG_DFD007_TXN_TYPES_REFUND <a href="#gad06c010a334fdc3cdf73b3398fb696af" id="gad06c010a334fdc3cdf73b3398fb696af"></a>

<p>#define TAG_DFD007_TXN_TYPES_REFUND   0xDFD007</p>

Additional Transaction Types for refund (length 1..3). See description of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80c8a1f9e2c537ecbc027981dc237c0b">EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund</a>.

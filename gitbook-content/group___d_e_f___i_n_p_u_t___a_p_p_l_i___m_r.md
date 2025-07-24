---
hidden: true
title: Appli data scheme specific - MIR - Availability bitsConfiguration » Application data
---

[Macros](#define-members)

Contents of the input in EMV_CTLS_APPLIDATA_MIR_STRUCT::IncludedData. [More\...](#details)

Collaboration diagram for Appli data scheme specific - MIR - Availability bits:

![](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_r.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [INPUT_CTLS_APL_MR_9F1C_0](#ga082cc99db4762496d03ba0319d6974fd)   0x01 |
|   | B1b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_MR_STRUCT::TermIdent_9F1C</a>. [More\...](#ga082cc99db4762496d03ba0319d6974fd)<br/> |
| #define  | [INPUT_CTLS_APL_MR_9F1A_0](#ga5b32bf8b28a3e7f304b9c1ca5976917b)   0x02 |
|   | B1b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalCountryCode_9F1A</a>. [More\...](#ga5b32bf8b28a3e7f304b9c1ca5976917b)<br/> |
| #define  | [INPUT_CTLS_APL_MR_9F35_0](#ga809ce693eb58703aaba1188b4eff52bf)   0x04 |
|   | B1b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalType_9F35</a>. [More\...](#ga809ce693eb58703aaba1188b4eff52bf)<br/> |
| #define  | [INPUT_CTLS_APL_MR_9F09_0](#ga819a62d90468ec7c66c4bf9293d3b15e)   0x08 |
|   | B1b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_MR_STRUCT::VersionNumber_9F09</a>. [More\...](#ga819a62d90468ec7c66c4bf9293d3b15e)<br/> |
| #define  | [INPUT_CTLS_APL_MR_9F15_0](#ga3dd6f6e4cead6967dbbaab7e7fd5419d)   0x10 |
|   | B1b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantCategoryCode_9F15</a>. [More\...](#ga3dd6f6e4cead6967dbbaab7e7fd5419d)<br/> |
| #define  | [INPUT_CTLS_APL_MR_9F4E_0](#ga06225e0d5d87c81598a13c8f03e93361)   0x20 |
|   | B1b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantNameAndLocation_9F4E</a>. [More\...](#ga06225e0d5d87c81598a13c8f03e93361)<br/> |
| #define  | [INPUT_CTLS_APL_MR_9F01_0](#ga6360f46b78372121cd3a811357e7af7c)   0x40 |
|   | B1b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_MR_STRUCT::AcquirerIdentifier_9F01</a>. [More\...](#ga6360f46b78372121cd3a811357e7af7c)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DF51_0](#ga190fbcbb0340709c0d694c715507f834)   0x80 |
|   | B1b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a74e27e1b76b0bd686b3a781d75c62d8b">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalFloorLimit_DF51</a>. [More\...](#ga190fbcbb0340709c0d694c715507f834)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DF52_1](#gad8ff2686b617f8f5efc2bee83963f123)   0x01 |
|   | B2b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8b07f4d4d545a9f208a534028a536300">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalNoCVMLimit_DF52</a>. [More\...](#gad8ff2686b617f8f5efc2bee83963f123)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DF53_1](#ga5c6f950a236ce35087ae2f5379f89e93)   0x02 |
|   | B2b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a002ee8e4ab4ea2a88f81832a19039f59">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitNonCDCVM_DF53</a>. [More\...](#ga5c6f950a236ce35087ae2f5379f89e93)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DF54_1](#ga88c54a9a4aad176b327b0c14419da85e)   0x04 |
|   | B2b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a23cc0c55ff19d5ed96f407d7d358e69c">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitCDCVM_DF54</a>. [More\...](#ga88c54a9a4aad176b327b0c14419da85e)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DF55_1](#ga3ff1b2f291a98d1a50383e6dacb40212)   0x08 |
|   | B2b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a62356837c0aca2e30fa7012244c4d0a0">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalTPMCapabilities_DF55</a>. [More\...](#ga3ff1b2f291a98d1a50383e6dacb40212)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DF56_1](#ga8c951efb52201e127fe83833232d0bd9)   0x10 |
|   | B2b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac36341c56813c028334361fcec6aea8e">EMV_CTLS_APPLIDATA_MR_STRUCT::TransactionRecoveryLimit_DF56</a>. [More\...](#ga8c951efb52201e127fe83833232d0bd9)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DFAB31_1](#ga79922f54b6e57ec06bf3be8e10880f97)   0x20 |
|   | B2b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_MR_STRUCT::AppFlowCap_DFAB31</a>. [More\...](#ga79922f54b6e57ec06bf3be8e10880f97)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DFAB43_1](#gac2005df6fdb1836899917281ad54269d)   0x40 |
|   | B2b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_MR_STRUCT::TACDefault_DFAB43</a>. [More\...](#gac2005df6fdb1836899917281ad54269d)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DFAB44_1](#gad24b7f821ee1c0a55e95881cc5a07d57)   0x80 |
|   | B2b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_MR_STRUCT::TACDenial_DFAB44</a>. [More\...](#gad24b7f821ee1c0a55e95881cc5a07d57)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DFAB45_2](#ga5a0820dd06b3410cc156b5f0427efe44)   0x01 |
|   | B3b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_MR_STRUCT::TACOnline_DFAB45</a>. [More\...](#ga5a0820dd06b3410cc156b5f0427efe44)<br/> |
| #define  | [INPUT_CTLS_APL_MR_DFAB57_2](#ga61d75ca110e1ac2fdb663ca1dff59ff7)   0x02 |
|   | B3b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac6d4527d26ab23434a0f2b0d4241f2b6">EMV_CTLS_APPLIDATA_MR_STRUCT::DataExchangeTagList_DFAB57</a>. [More\...](#ga61d75ca110e1ac2fdb663ca1dff59ff7)<br/> |

## DetailedDescription {#detailed-description}

Contents of the input in EMV_CTLS_APPLIDATA_MIR_STRUCT::IncludedData.

## MacroDefinition Documentation {#macro-definition-documentation}

## INPUT_CTLS_APL_MR_9F01_0 <a href="#ga6360f46b78372121cd3a811357e7af7c" id="ga6360f46b78372121cd3a811357e7af7c"></a>

<p>#define INPUT_CTLS_APL_MR_9F01_0   0x40</p>

B1b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_MR_STRUCT::AcquirerIdentifier_9F01</a>.

## INPUT_CTLS_APL_MR_9F09_0 <a href="#ga819a62d90468ec7c66c4bf9293d3b15e" id="ga819a62d90468ec7c66c4bf9293d3b15e"></a>

<p>#define INPUT_CTLS_APL_MR_9F09_0   0x08</p>

B1b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_MR_STRUCT::VersionNumber_9F09</a>.

## INPUT_CTLS_APL_MR_9F15_0 <a href="#ga3dd6f6e4cead6967dbbaab7e7fd5419d" id="ga3dd6f6e4cead6967dbbaab7e7fd5419d"></a>

<p>#define INPUT_CTLS_APL_MR_9F15_0   0x10</p>

B1b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantCategoryCode_9F15</a>.

## INPUT_CTLS_APL_MR_9F1A_0 <a href="#ga5b32bf8b28a3e7f304b9c1ca5976917b" id="ga5b32bf8b28a3e7f304b9c1ca5976917b"></a>

<p>#define INPUT_CTLS_APL_MR_9F1A_0   0x02</p>

B1b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalCountryCode_9F1A</a>.

## INPUT_CTLS_APL_MR_9F1C_0 <a href="#ga082cc99db4762496d03ba0319d6974fd" id="ga082cc99db4762496d03ba0319d6974fd"></a>

<p>#define INPUT_CTLS_APL_MR_9F1C_0   0x01</p>

B1b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_MR_STRUCT::TermIdent_9F1C</a>.

## INPUT_CTLS_APL_MR_9F35_0 <a href="#ga809ce693eb58703aaba1188b4eff52bf" id="ga809ce693eb58703aaba1188b4eff52bf"></a>

<p>#define INPUT_CTLS_APL_MR_9F35_0   0x04</p>

B1b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalType_9F35</a>.

## INPUT_CTLS_APL_MR_9F4E_0 <a href="#ga06225e0d5d87c81598a13c8f03e93361" id="ga06225e0d5d87c81598a13c8f03e93361"></a>

<p>#define INPUT_CTLS_APL_MR_9F4E_0   0x20</p>

B1b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantNameAndLocation_9F4E</a>.

## INPUT_CTLS_APL_MR_DF51_0 <a href="#ga190fbcbb0340709c0d694c715507f834" id="ga190fbcbb0340709c0d694c715507f834"></a>

<p>#define INPUT_CTLS_APL_MR_DF51_0   0x80</p>

B1b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a74e27e1b76b0bd686b3a781d75c62d8b">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalFloorLimit_DF51</a>.

## INPUT_CTLS_APL_MR_DF52_1 <a href="#gad8ff2686b617f8f5efc2bee83963f123" id="gad8ff2686b617f8f5efc2bee83963f123"></a>

<p>#define INPUT_CTLS_APL_MR_DF52_1   0x01</p>

B2b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8b07f4d4d545a9f208a534028a536300">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalNoCVMLimit_DF52</a>.

## INPUT_CTLS_APL_MR_DF53_1 <a href="#ga5c6f950a236ce35087ae2f5379f89e93" id="ga5c6f950a236ce35087ae2f5379f89e93"></a>

<p>#define INPUT_CTLS_APL_MR_DF53_1   0x02</p>

B2b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a002ee8e4ab4ea2a88f81832a19039f59">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitNonCDCVM_DF53</a>.

## INPUT_CTLS_APL_MR_DF54_1 <a href="#ga88c54a9a4aad176b327b0c14419da85e" id="ga88c54a9a4aad176b327b0c14419da85e"></a>

<p>#define INPUT_CTLS_APL_MR_DF54_1   0x04</p>

B2b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a23cc0c55ff19d5ed96f407d7d358e69c">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitCDCVM_DF54</a>.

## INPUT_CTLS_APL_MR_DF55_1 <a href="#ga3ff1b2f291a98d1a50383e6dacb40212" id="ga3ff1b2f291a98d1a50383e6dacb40212"></a>

<p>#define INPUT_CTLS_APL_MR_DF55_1   0x08</p>

B2b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a62356837c0aca2e30fa7012244c4d0a0">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalTPMCapabilities_DF55</a>.

## INPUT_CTLS_APL_MR_DF56_1 <a href="#ga8c951efb52201e127fe83833232d0bd9" id="ga8c951efb52201e127fe83833232d0bd9"></a>

<p>#define INPUT_CTLS_APL_MR_DF56_1   0x10</p>

B2b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac36341c56813c028334361fcec6aea8e">EMV_CTLS_APPLIDATA_MR_STRUCT::TransactionRecoveryLimit_DF56</a>.

## INPUT_CTLS_APL_MR_DFAB31_1 <a href="#ga79922f54b6e57ec06bf3be8e10880f97" id="ga79922f54b6e57ec06bf3be8e10880f97"></a>

<p>#define INPUT_CTLS_APL_MR_DFAB31_1   0x20</p>

B2b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_MR_STRUCT::AppFlowCap_DFAB31</a>.

## INPUT_CTLS_APL_MR_DFAB43_1 <a href="#gac2005df6fdb1836899917281ad54269d" id="gac2005df6fdb1836899917281ad54269d"></a>

<p>#define INPUT_CTLS_APL_MR_DFAB43_1   0x40</p>

B2b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_MR_STRUCT::TACDefault_DFAB43</a>.

## INPUT_CTLS_APL_MR_DFAB44_1 <a href="#gad24b7f821ee1c0a55e95881cc5a07d57" id="gad24b7f821ee1c0a55e95881cc5a07d57"></a>

<p>#define INPUT_CTLS_APL_MR_DFAB44_1   0x80</p>

B2b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_MR_STRUCT::TACDenial_DFAB44</a>.

## INPUT_CTLS_APL_MR_DFAB45_2 <a href="#ga5a0820dd06b3410cc156b5f0427efe44" id="ga5a0820dd06b3410cc156b5f0427efe44"></a>

<p>#define INPUT_CTLS_APL_MR_DFAB45_2   0x01</p>

B3b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_MR_STRUCT::TACOnline_DFAB45</a>.

## INPUT_CTLS_APL_MR_DFAB57_2 <a href="#ga61d75ca110e1ac2fdb663ca1dff59ff7" id="ga61d75ca110e1ac2fdb663ca1dff59ff7"></a>

<p>#define INPUT_CTLS_APL_MR_DFAB57_2   0x02</p>

B3b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac6d4527d26ab23434a0f2b0d4241f2b6">EMV_CTLS_APPLIDATA_MR_STRUCT::DataExchangeTagList_DFAB57</a>.

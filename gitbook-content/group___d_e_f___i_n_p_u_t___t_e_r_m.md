---
hidden: true
title: "Terminal data: Which data is validConfiguration » Terminal Data"
---

[Macros](#define-members)

Contents of the <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CTLS_TERMDATA_STRUCT::Info_Included_Data</a>. [More\...](#details)

Collaboration diagram for Terminal data: Which data is valid:

![](group___d_e_f___i_n_p_u_t___t_e_r_m.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [INPUT_CTLS_TRM_SUPPORTED_CTLS](#gaf496f57b91c9f395f0722d64b6053a35)   0x01 |
|   | B1b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a032cb9d200c633fda5088968eafb4f18">EMV_CTLS_TERMDATA_STRUCT::CL_Modes_Supported</a>. [More\...](#gaf496f57b91c9f395f0722d64b6053a35)<br/> |
| #define  | [INPUT_CTLS_TRM_TYPE](#ga984520d076c445ff9c734734242b1461)   0x02 |
|   | B1b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CTLS_TERMDATA_STRUCT::TermTyp</a>. [More\...](#ga984520d076c445ff9c734734242b1461)<br/> |
| #define  | [INPUT_CTLS_TRM_CURRENCY](#ga5974d5c2ce1835883799e206b4b342f0)   0x04 |
|   | B1b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans</a>. [More\...](#ga5974d5c2ce1835883799e206b4b342f0)<br/> |
| #define  | [INPUT_CTLS_TRM_EXP_CURRENCY](#ga92251f0b4d8f1283cbb48555ddd097ee)   0x08 |
|   | B1b4: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CTLS_TERMDATA_STRUCT::ExpTrans</a>. [More\...](#ga92251f0b4d8f1283cbb48555ddd097ee)<br/> |
| #define  | [INPUT_CTLS_TRM_COUNTRY_CODE](#gae3d351171b1502a01d5efb52fa2b7302)   0x10 |
|   | B1b5: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a0cd015d4fd7fa26a9c13d6687dcc1aea">EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm</a>. [More\...](#gae3d351171b1502a01d5efb52fa2b7302)<br/> |
| #define  | [INPUT_CTLS_TRM_FLOW_OPTIONS](#gafc158a2e5ada57ef35e334bfc19a5c9a)   0x20 |
|   | B1b6: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a347abf8f0129f37f17279ef981765674">EMV_CTLS_TERMDATA_STRUCT::FlowOptions</a>. [More\...](#gafc158a2e5ada57ef35e334bfc19a5c9a)<br/> |
| #define  | [INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT](#gaf3a1ff600113e5829e8b2bb6bb06f63c)   0x40 |
|   | B1b7: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a3a9583914dda18129d8a82c8a1ebd679">EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit</a>. [More\...](#gaf3a1ff600113e5829e8b2bb6bb06f63c)<br/> |
| #define  | [INPUT_CTLS_TRM_BEEP_VOLUME](#gaa1fa9622841d79d1a4399364e59fc394)   0x80 |
|   | B1b8: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a93d1982261d2afed6ce0b169b9f89541">EMV_CTLS_TERMDATA_STRUCT::BeepVolume</a>. [More\...](#gaa1fa9622841d79d1a4399364e59fc394)<br/> |
| #define  | [INPUT_CTLS_TRM_LANGUAGES](#ga397a524f5c3329ff08f19471a825138c)   0x01 |
|   | B2b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9d2672ac7a65bb39a13e450b4cb4737b">EMV_CTLS_TERMDATA_STRUCT::SuppLang</a>. [More\...](#ga397a524f5c3329ff08f19471a825138c)<br/> |
| #define  | [INPUT_CTLS_TRM_IFD_SERIAL](#ga6f4225cb93a4793a8e1c54eaac432053)   0x02 |
|   | B2b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber</a>. [More\...](#ga6f4225cb93a4793a8e1c54eaac432053)<br/> |
| #define  | [INPUT_CTLS_TRM_KERNEL_VERSION](#gac02be862ed45087ed271d9201837fe80)   0x04 |
|   | B2b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a75c365e8a1aca8672ee83242dfb3fe42">EMV_CTLS_TERMDATA_STRUCT::KernelVersion</a>. [More\...](#gac02be862ed45087ed271d9201837fe80)<br/> |
| #define  | [INPUT_CTLS_TRM_FRAMEWORK_VERSION](#ga85f1566e3aff548dd77765f2d461adbf)   0x08 |
|   | B2b4: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a15d10a5c739bb6c45d9d0bf3f40c0021">EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion</a>. [More\...](#ga85f1566e3aff548dd77765f2d461adbf)<br/> |
| #define  | [INPUT_CTLS_TRM_HOTLIST](#ga6e7dac5e3c9a950008778dd2d44f1851)   0x10 |
|   | B2b5: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ad0009ae39ab506b4158d8002d4b33da5">EMV_CTLS_TERMDATA_STRUCT::Hotlist</a>. [More\...](#ga6e7dac5e3c9a950008778dd2d44f1851)<br/> |
| #define  | [INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS](#gaaadf18997faa3575d3326943a8001e32)   0x20 |
|   | B2b6: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a82bafc9160b85144ec5a62a8ae28e49f">EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess</a>. [More\...](#gaaadf18997faa3575d3326943a8001e32)<br/> |
| #define  | [INPUT_CTLS_TRM_BEEP_FREQ_ALERT](#ga962d9c776e06203268ba24a9b16eb242)   0x40 |
|   | B2b7: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a2d2a207c6b103e0f8e9b21301150c5a6">EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert</a>. [More\...](#ga962d9c776e06203268ba24a9b16eb242)<br/> |
| #define  | [INPUT_CTLS_TRM_L1DRIVER_VERSION](#ga1fd12967fecf739984724ce8aba031a7)   0x80 |
|   | B2b8: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion</a>. [More\...](#ga1fd12967fecf739984724ce8aba031a7)<br/> |
| #define  | [INPUT_CTLS_TRM_SECOND_TAP_DELAY](#gaebad415ab6843a40f12019aae094b9c5)   0x01 |
|   | B3b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a7c7bd56336bc0c080bab48db9a1aa2a3">EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay</a>. [More\...](#gaebad415ab6843a40f12019aae094b9c5)<br/> |
| #define  | [INPUT_CTLS_TRM_HOST_COMM_TIMEOUT](#gaf7e4c7d41da73915d58e0c5fc9c4de6c)   0x02 |
|   | B3b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a5296f4f7b31fa3553a4fb502be8bccde">EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout</a>. [More\...](#gaf7e4c7d41da73915d58e0c5fc9c4de6c)<br/> |
| #define  | [INPUT_CTLS_TRM_POI_INFORMATION](#ga3e62f0f7d25ba7802e55360c3beedccc)   0x04 |
|   | B3b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaf88e302e58d70d28ed59a53cdca2f2e">EMV_CTLS_TERMDATA_STRUCT::poiInformation</a>. [More\...](#ga3e62f0f7d25ba7802e55360c3beedccc)<br/> |
| #define  | [EMV_CT_INPUT_TRM_TYPE](#gaa97540390db40f0c46a6900ade205799)   0x01 |
|   | B1b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CT_TERMDATA_STRUCT::TermTyp</a>. [More\...](#gaa97540390db40f0c46a6900ade205799)<br/> |
| #define  | [EMV_CT_INPUT_TRM_CURRENCY](#ga25a46ef790b6f8f85d6b5fc357cac05c)   0x02 |
|   | B1b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CT_TERMDATA_STRUCT::CurrencyTrans</a>. [More\...](#ga25a46ef790b6f8f85d6b5fc357cac05c)<br/> |
| #define  | [EMV_CT_INPUT_TRM_EXP_CURRENCY](#gaba078690f9ef9be7c2a4c7b3c3bd0141)   0x04 |
|   | B1b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CT_TERMDATA_STRUCT::ExpTrans</a>. [More\...](#gaba078690f9ef9be7c2a4c7b3c3bd0141)<br/> |
| #define  | [EMV_CT_INPUT_TRM_COUNTRY_CODE](#gaaf0058ba5369f88f64da1051553123b4)   0x08 |
|   | B1b4: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#af11a6d7b3bb1f5438dca672b746aeb11">EMV_CT_TERMDATA_STRUCT::TermCountryCode</a>. [More\...](#gaaf0058ba5369f88f64da1051553123b4)<br/> |
| #define  | [EMV_CT_INPUT_TRM_CAPABILITIES](#ga43add8cec7260c4f1dc11c34dc56812b)   0x10 |
|   | B1b5: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aa98172f43b850403ff2e6aba0340281f">EMV_CT_TERMDATA_STRUCT::TermCap</a>. [More\...](#ga43add8cec7260c4f1dc11c34dc56812b)<br/> |
| #define  | [EMV_CT_INPUT_TRM_ADD_CAPS](#gae7fb207afea249c2b5384928e7d22bfa)   0x20 |
|   | B1b6: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9cafd59682bd260f14ce67e716046538">EMV_CT_TERMDATA_STRUCT::TermAddCap</a>. [More\...](#gae7fb207afea249c2b5384928e7d22bfa)<br/> |
| #define  | [EMV_CT_INPUT_TRM_ID](#ga6153c89871467b83f3c9de7aeb5ce6c7)   0x40 |
|   | B1b7: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_TERMDATA_STRUCT::TermIdent</a>. [More\...](#ga6153c89871467b83f3c9de7aeb5ce6c7)<br/> |
| #define  | [EMV_CT_INPUT_TRM_LANGUAGES](#gadfc1ccfc70eccb63d83e6999efea5b68)   0x01 |
|   | B2b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9d2672ac7a65bb39a13e450b4cb4737b">EMV_CT_TERMDATA_STRUCT::SuppLang</a>. [More\...](#gadfc1ccfc70eccb63d83e6999efea5b68)<br/> |
| #define  | [EMV_CT_INPUT_TRM_IFD_SERIAL](#ga7f8a513612c7ecdca5911e7b3ea65a5d)   0x02 |
|   | B2b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CT_TERMDATA_STRUCT::IFDSerialNumber</a>. [More\...](#ga7f8a513612c7ecdca5911e7b3ea65a5d)<br/> |
| #define  | [EMV_CT_INPUT_TRM_KERNEL_VERSION](#ga77efe02efa12d9bbafb97deb3ac7b995)   0x04 |
|   | B2b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a808cb5cde9cf6ac837ef81977f4a751c">EMV_CT_TERMDATA_STRUCT::KernelVersion</a>. [More\...](#ga77efe02efa12d9bbafb97deb3ac7b995)<br/> |
| #define  | [EMV_CT_INPUT_TRM_FRAMEWORK_VERSION](#ga74be00aeb0c765185114c099af576d1b)   0x08 |
|   | B2b4: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a15d10a5c739bb6c45d9d0bf3f40c0021">EMV_CT_TERMDATA_STRUCT::FrameworkVersion</a>. [More\...](#ga74be00aeb0c765185114c099af576d1b)<br/> |
| #define  | [EMV_CT_INPUT_TRM_L1DRIVER_VERSION](#ga88945d9d7fa24549ffbe8abba40c17d9)   0x10 |
|   | B2b5: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CT_TERMDATA_STRUCT::L1DriverVersion</a>. [More\...](#ga88945d9d7fa24549ffbe8abba40c17d9)<br/> |

## DetailedDescription {#detailed-description}

Contents of the <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CTLS_TERMDATA_STRUCT::Info_Included_Data</a>.

Contents of the <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CT_TERMDATA_STRUCT::Info_Included_Data</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_INPUT_TRM_ADD_CAPS <a href="#gae7fb207afea249c2b5384928e7d22bfa" id="gae7fb207afea249c2b5384928e7d22bfa"></a>

<p>#define EMV_CT_INPUT_TRM_ADD_CAPS   0x20</p>

B1b6: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9cafd59682bd260f14ce67e716046538">EMV_CT_TERMDATA_STRUCT::TermAddCap</a>.

## EMV_CT_INPUT_TRM_CAPABILITIES <a href="#ga43add8cec7260c4f1dc11c34dc56812b" id="ga43add8cec7260c4f1dc11c34dc56812b"></a>

<p>#define EMV_CT_INPUT_TRM_CAPABILITIES   0x10</p>

B1b5: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aa98172f43b850403ff2e6aba0340281f">EMV_CT_TERMDATA_STRUCT::TermCap</a>.

## EMV_CT_INPUT_TRM_COUNTRY_CODE <a href="#gaaf0058ba5369f88f64da1051553123b4" id="gaaf0058ba5369f88f64da1051553123b4"></a>

<p>#define EMV_CT_INPUT_TRM_COUNTRY_CODE   0x08</p>

B1b4: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#af11a6d7b3bb1f5438dca672b746aeb11">EMV_CT_TERMDATA_STRUCT::TermCountryCode</a>.

## EMV_CT_INPUT_TRM_CURRENCY <a href="#ga25a46ef790b6f8f85d6b5fc357cac05c" id="ga25a46ef790b6f8f85d6b5fc357cac05c"></a>

<p>#define EMV_CT_INPUT_TRM_CURRENCY   0x02</p>

B1b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CT_TERMDATA_STRUCT::CurrencyTrans</a>.

## EMV_CT_INPUT_TRM_EXP_CURRENCY <a href="#gaba078690f9ef9be7c2a4c7b3c3bd0141" id="gaba078690f9ef9be7c2a4c7b3c3bd0141"></a>

<p>#define EMV_CT_INPUT_TRM_EXP_CURRENCY   0x04</p>

B1b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CT_TERMDATA_STRUCT::ExpTrans</a>.

## EMV_CT_INPUT_TRM_FRAMEWORK_VERSION <a href="#ga74be00aeb0c765185114c099af576d1b" id="ga74be00aeb0c765185114c099af576d1b"></a>

<p>#define EMV_CT_INPUT_TRM_FRAMEWORK_VERSION   0x08</p>

B2b4: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a15d10a5c739bb6c45d9d0bf3f40c0021">EMV_CT_TERMDATA_STRUCT::FrameworkVersion</a>.

## EMV_CT_INPUT_TRM_ID <a href="#ga6153c89871467b83f3c9de7aeb5ce6c7" id="ga6153c89871467b83f3c9de7aeb5ce6c7"></a>

<p>#define EMV_CT_INPUT_TRM_ID   0x40</p>

B1b7: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_TERMDATA_STRUCT::TermIdent</a>.

## EMV_CT_INPUT_TRM_IFD_SERIAL <a href="#ga7f8a513612c7ecdca5911e7b3ea65a5d" id="ga7f8a513612c7ecdca5911e7b3ea65a5d"></a>

<p>#define EMV_CT_INPUT_TRM_IFD_SERIAL   0x02</p>

B2b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CT_TERMDATA_STRUCT::IFDSerialNumber</a>.

## EMV_CT_INPUT_TRM_KERNEL_VERSION <a href="#ga77efe02efa12d9bbafb97deb3ac7b995" id="ga77efe02efa12d9bbafb97deb3ac7b995"></a>

<p>#define EMV_CT_INPUT_TRM_KERNEL_VERSION   0x04</p>

B2b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a808cb5cde9cf6ac837ef81977f4a751c">EMV_CT_TERMDATA_STRUCT::KernelVersion</a>.

## EMV_CT_INPUT_TRM_L1DRIVER_VERSION <a href="#ga88945d9d7fa24549ffbe8abba40c17d9" id="ga88945d9d7fa24549ffbe8abba40c17d9"></a>

<p>#define EMV_CT_INPUT_TRM_L1DRIVER_VERSION   0x10</p>

B2b5: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CT_TERMDATA_STRUCT::L1DriverVersion</a>.

## EMV_CT_INPUT_TRM_LANGUAGES <a href="#gadfc1ccfc70eccb63d83e6999efea5b68" id="gadfc1ccfc70eccb63d83e6999efea5b68"></a>

<p>#define EMV_CT_INPUT_TRM_LANGUAGES   0x01</p>

B2b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9d2672ac7a65bb39a13e450b4cb4737b">EMV_CT_TERMDATA_STRUCT::SuppLang</a>.

## EMV_CT_INPUT_TRM_TYPE <a href="#gaa97540390db40f0c46a6900ade205799" id="gaa97540390db40f0c46a6900ade205799"></a>

<p>#define EMV_CT_INPUT_TRM_TYPE   0x01</p>

B1b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CT_TERMDATA_STRUCT::TermTyp</a>.

## INPUT_CTLS_TRM_BEEP_FREQ_ALERT <a href="#ga962d9c776e06203268ba24a9b16eb242" id="ga962d9c776e06203268ba24a9b16eb242"></a>

<p>#define INPUT_CTLS_TRM_BEEP_FREQ_ALERT   0x40</p>

B2b7: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a2d2a207c6b103e0f8e9b21301150c5a6">EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert</a>.

## INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS <a href="#gaaadf18997faa3575d3326943a8001e32" id="gaaadf18997faa3575d3326943a8001e32"></a>

<p>#define INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS   0x20</p>

B2b6: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a82bafc9160b85144ec5a62a8ae28e49f">EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess</a>.

## INPUT_CTLS_TRM_BEEP_VOLUME <a href="#gaa1fa9622841d79d1a4399364e59fc394" id="gaa1fa9622841d79d1a4399364e59fc394"></a>

<p>#define INPUT_CTLS_TRM_BEEP_VOLUME   0x80</p>

B1b8: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a93d1982261d2afed6ce0b169b9f89541">EMV_CTLS_TERMDATA_STRUCT::BeepVolume</a>.

## INPUT_CTLS_TRM_COUNTRY_CODE <a href="#gae3d351171b1502a01d5efb52fa2b7302" id="gae3d351171b1502a01d5efb52fa2b7302"></a>

<p>#define INPUT_CTLS_TRM_COUNTRY_CODE   0x10</p>

B1b5: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a0cd015d4fd7fa26a9c13d6687dcc1aea">EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm</a>.

## INPUT_CTLS_TRM_CURRENCY <a href="#ga5974d5c2ce1835883799e206b4b342f0" id="ga5974d5c2ce1835883799e206b4b342f0"></a>

<p>#define INPUT_CTLS_TRM_CURRENCY   0x04</p>

B1b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans</a>.

## INPUT_CTLS_TRM_EXP_CURRENCY <a href="#ga92251f0b4d8f1283cbb48555ddd097ee" id="ga92251f0b4d8f1283cbb48555ddd097ee"></a>

<p>#define INPUT_CTLS_TRM_EXP_CURRENCY   0x08</p>

B1b4: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CTLS_TERMDATA_STRUCT::ExpTrans</a>.

## INPUT_CTLS_TRM_FLOW_OPTIONS <a href="#gafc158a2e5ada57ef35e334bfc19a5c9a" id="gafc158a2e5ada57ef35e334bfc19a5c9a"></a>

<p>#define INPUT_CTLS_TRM_FLOW_OPTIONS   0x20</p>

B1b6: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a347abf8f0129f37f17279ef981765674">EMV_CTLS_TERMDATA_STRUCT::FlowOptions</a>.

## INPUT_CTLS_TRM_FRAMEWORK_VERSION <a href="#ga85f1566e3aff548dd77765f2d461adbf" id="ga85f1566e3aff548dd77765f2d461adbf"></a>

<p>#define INPUT_CTLS_TRM_FRAMEWORK_VERSION   0x08</p>

B2b4: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a15d10a5c739bb6c45d9d0bf3f40c0021">EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion</a>.

## INPUT_CTLS_TRM_HOST_COMM_TIMEOUT <a href="#gaf7e4c7d41da73915d58e0c5fc9c4de6c" id="gaf7e4c7d41da73915d58e0c5fc9c4de6c"></a>

<p>#define INPUT_CTLS_TRM_HOST_COMM_TIMEOUT   0x02</p>

B3b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a5296f4f7b31fa3553a4fb502be8bccde">EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout</a>.

## INPUT_CTLS_TRM_HOTLIST <a href="#ga6e7dac5e3c9a950008778dd2d44f1851" id="ga6e7dac5e3c9a950008778dd2d44f1851"></a>

<p>#define INPUT_CTLS_TRM_HOTLIST   0x10</p>

B2b5: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ad0009ae39ab506b4158d8002d4b33da5">EMV_CTLS_TERMDATA_STRUCT::Hotlist</a>.

## INPUT_CTLS_TRM_IFD_SERIAL <a href="#ga6f4225cb93a4793a8e1c54eaac432053" id="ga6f4225cb93a4793a8e1c54eaac432053"></a>

<p>#define INPUT_CTLS_TRM_IFD_SERIAL   0x02</p>

B2b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber</a>.

## INPUT_CTLS_TRM_KERNEL_VERSION <a href="#gac02be862ed45087ed271d9201837fe80" id="gac02be862ed45087ed271d9201837fe80"></a>

<p>#define INPUT_CTLS_TRM_KERNEL_VERSION   0x04</p>

B2b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a75c365e8a1aca8672ee83242dfb3fe42">EMV_CTLS_TERMDATA_STRUCT::KernelVersion</a>.

## INPUT_CTLS_TRM_L1DRIVER_VERSION <a href="#ga1fd12967fecf739984724ce8aba031a7" id="ga1fd12967fecf739984724ce8aba031a7"></a>

<p>#define INPUT_CTLS_TRM_L1DRIVER_VERSION   0x80</p>

B2b8: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion</a>.

## INPUT_CTLS_TRM_LANGUAGES <a href="#ga397a524f5c3329ff08f19471a825138c" id="ga397a524f5c3329ff08f19471a825138c"></a>

<p>#define INPUT_CTLS_TRM_LANGUAGES   0x01</p>

B2b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9d2672ac7a65bb39a13e450b4cb4737b">EMV_CTLS_TERMDATA_STRUCT::SuppLang</a>.

## INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT <a href="#gaf3a1ff600113e5829e8b2bb6bb06f63c" id="gaf3a1ff600113e5829e8b2bb6bb06f63c"></a>

<p>#define INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT   0x40</p>

B1b7: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a3a9583914dda18129d8a82c8a1ebd679">EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit</a>.

## INPUT_CTLS_TRM_POI_INFORMATION <a href="#ga3e62f0f7d25ba7802e55360c3beedccc" id="ga3e62f0f7d25ba7802e55360c3beedccc"></a>

<p>#define INPUT_CTLS_TRM_POI_INFORMATION   0x04</p>

B3b3: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaf88e302e58d70d28ed59a53cdca2f2e">EMV_CTLS_TERMDATA_STRUCT::poiInformation</a>.

## INPUT_CTLS_TRM_SECOND_TAP_DELAY <a href="#gaebad415ab6843a40f12019aae094b9c5" id="gaebad415ab6843a40f12019aae094b9c5"></a>

<p>#define INPUT_CTLS_TRM_SECOND_TAP_DELAY   0x01</p>

B3b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a7c7bd56336bc0c080bab48db9a1aa2a3">EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay</a>.

## INPUT_CTLS_TRM_SUPPORTED_CTLS <a href="#gaf496f57b91c9f395f0722d64b6053a35" id="gaf496f57b91c9f395f0722d64b6053a35"></a>

<p>#define INPUT_CTLS_TRM_SUPPORTED_CTLS   0x01</p>

B1b1: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a032cb9d200c633fda5088968eafb4f18">EMV_CTLS_TERMDATA_STRUCT::CL_Modes_Supported</a>.

## INPUT_CTLS_TRM_TYPE <a href="#ga984520d076c445ff9c734734242b1461" id="ga984520d076c445ff9c734734242b1461"></a>

<p>#define INPUT_CTLS_TRM_TYPE   0x02</p>

B1b2: <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CTLS_TERMDATA_STRUCT::TermTyp</a>.

---
hidden: true
title: "Application data: Which data is includedConfiguration » Application data"
---

[Macros](#define-members)

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CT_APPLIDATA_STRUCT::Info_Included_Data</a>. [More\...](#details)

Collaboration diagram for Application data: Which data is included:

![](group___d_e_f___i_n_p_u_t___a_p_p_l_i.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CT_INPUT_APL_VERSION](#ga2e5e1749c8ce9516611741592c7a7ea2)   0x01 |
|   | B1b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4a13940a43927f00f7c701cb98131588">EMV_CT_APPLIDATA_STRUCT::VerNum</a>, application version number. [More\...](#ga2e5e1749c8ce9516611741592c7a7ea2)<br/> |
| #define  | [EMV_CT_INPUT_APL_NAME](#ga932af997ee523cd74556f8e8c2d4ecee)   0x02 |
|   | B1b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1a933985680b099e926e54086a602c12">EMV_CT_APPLIDATA_STRUCT::AppName</a>, application name. [More\...](#ga932af997ee523cd74556f8e8c2d4ecee)<br/> |
| #define  | [EMV_CT_INPUT_APL_ASI](#gad2248942bf630be611652aeb8860cfc2)   0x04 |
|   | B1b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2000688e48cdadee86eb401946a71785">EMV_CT_APPLIDATA_STRUCT::ASI</a>, ASI. [More\...](#gad2248942bf630be611652aeb8860cfc2)<br/> |
| #define  | [EMV_CT_INPUT_APL_MERCHANT_CATCODE](#ga4ad26154aa32520b74498b9d80a2b9d2)   0x08 |
|   | B1b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aadaaf73921101bb812f90ec7c4a9d5dd">EMV_CT_APPLIDATA_STRUCT::BrKey</a>, merchant category code. [More\...](#ga4ad26154aa32520b74498b9d80a2b9d2)<br/> |
| #define  | [EMV_CT_INPUT_APL_TID](#ga9a19ef45dfdba542e2d536279f1beeae)   0x10 |
|   | B1b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_APPLIDATA_STRUCT::TermIdent</a>, terminal ID. [More\...](#ga9a19ef45dfdba542e2d536279f1beeae)<br/> |
| #define  | [EMV_CT_INPUT_APL_FLOOR_LIMIT](#ga65b5bab068258243ab5dabe904abea37)   0x20 |
|   | B1b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5fb4232c2d98685b61df7884ccfbaf5">EMV_CT_APPLIDATA_STRUCT::FloorLimit</a>, floor limt. [More\...](#ga65b5bab068258243ab5dabe904abea37)<br/> |
| #define  | [EMV_CT_INPUT_APL_THRESH](#gabca6575e6a688a2db26dc1a853b1879b)   0x40 |
|   | B1b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0ff73036f6d3329cc1e8858761af2653">EMV_CT_APPLIDATA_STRUCT::Threshhold</a>, threshhold value. [More\...](#gabca6575e6a688a2db26dc1a853b1879b)<br/> |
| #define  | [EMV_CT_INPUT_APL_TARGET](#ga1775beadd5b4c87f0b04f6c373242840)   0x80 |
|   | B1b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#accfd8d6023e6718726e1a736e0d54e8f">EMV_CT_APPLIDATA_STRUCT::TargetPercentage</a>, target percentage. [More\...](#ga1775beadd5b4c87f0b04f6c373242840)<br/> |
| #define  | [EMV_CT_INPUT_APL_MAXTARGET](#ga7ca0d41a5e2de3c3b9f34d9f3c90c35f)   0x01 |
|   | B2b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae06a2f3428cf719f7fc1523a2e2b9fce">EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage</a>, maximum target percentage. [More\...](#ga7ca0d41a5e2de3c3b9f34d9f3c90c35f)<br/> |
| #define  | [EMV_CT_INPUT_APL_TAC_DENIAL](#gab264ef83adc481b1afd16edde0886a08)   0x02 |
|   | B2b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab4a00313a90f392f78eb7517a136aae6">EMV_CT_APPLIDATA_STRUCT::TACDenial</a>, TAC Denial. [More\...](#gab264ef83adc481b1afd16edde0886a08)<br/> |
| #define  | [EMV_CT_INPUT_APL_TAC_ONLINE](#gab0021c0422bb71c965abc0078a9faf77)   0x04 |
|   | B2b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a71a391d7f8da7dc0e5be8b97c14447da">EMV_CT_APPLIDATA_STRUCT::TACOnline</a>, TAC Online. [More\...](#gab0021c0422bb71c965abc0078a9faf77)<br/> |
| #define  | [EMV_CT_INPUT_APL_TAC_DEFAULT](#ga9e349187d15d9a7d1d50f852f87dd5d2)   0x08 |
|   | B2b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ce1deed9d23bcc207bfb582f59cac6b">EMV_CT_APPLIDATA_STRUCT::TACDefault</a>, TAC Default. [More\...](#ga9e349187d15d9a7d1d50f852f87dd5d2)<br/> |
| #define  | [EMV_CT_INPUT_APL_TDOL](#ga66b7fd71d420257e69f289b2dc56d5e7)   0x10 |
|   | B2b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9741f7d86efbb9dc20f687b6cad55f4c">EMV_CT_APPLIDATA_STRUCT::Default_TDOL</a>, Default TDOL. [More\...](#ga66b7fd71d420257e69f289b2dc56d5e7)<br/> |
| #define  | [EMV_CT_INPUT_APL_DDOL](#ga2d3455d96b50bbe6534326fb64dafd20)   0x20 |
|   | B2b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a27e03203f154c52be3abc2db49842a93">EMV_CT_APPLIDATA_STRUCT::Default_DDOL</a>, Default DDOL. [More\...](#ga2d3455d96b50bbe6534326fb64dafd20)<br/> |
| #define  | [EMV_CT_INPUT_APL_MERCHANT_IDENT](#ga932404bc4568e388b35d46434ee7ccf2)   0x40 |
|   | B2b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3e3c059a7e2f459a449ab7e746046cf7">EMV_CT_APPLIDATA_STRUCT::MerchIdent</a>, merchant identification. [More\...](#ga932404bc4568e388b35d46434ee7ccf2)<br/> |
| #define  | [EMV_CT_INPUT_APL_ADD_TAGS](#ga6524e8d2866539c261df0e931efbdbd3)   0x80 |
|   | B2b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad7a6039ab1aa91113c012eab4293d664">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM</a>, additional terminal tags. [More\...](#ga6524e8d2866539c261df0e931efbdbd3)<br/> |
| #define  | [EMV_CT_INPUT_APL_MAND_TAGS](#ga7a26a94b830ad72eb8a219b0a7aef026)   0x01 |
|   | B3b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a15601aa3b54c9da3032a3ed1d43b0b6b">EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD</a>, mandatory tags. [More\...](#ga7a26a94b830ad72eb8a219b0a7aef026)<br/> |
| #define  | [EMV_CT_INPUT_APL_TERM_CAPS](#ga9a89428b080a0f8b7a12058a0fa96e3d)   0x02 |
|   | B3b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7ac173f4a1d9a3845a18af806ee8bb31">EMV_CT_APPLIDATA_STRUCT::App_TermCap</a>, terminal capabilities for app. [More\...](#ga9a89428b080a0f8b7a12058a0fa96e3d)<br/> |
| #define  | [EMV_CT_INPUT_APL_FLOW_CAPS](#ga90eda81c6374249fce8a0bde0803c342)   0x04 |
|   | B3b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a>, flow capabilities. [More\...](#ga90eda81c6374249fce8a0bde0803c342)<br/> |
| #define  | [EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP](#ga12b949b39aa59affaf8ea075d858a7fd)   0x08 |
|   | B3b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0cc466b7328ef1933036d1372ba99b00">EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported</a>, CVM in AIP disabled. [More\...](#ga12b949b39aa59affaf8ea075d858a7fd)<br/> |
| #define  | [EMV_CT_INPUT_APL_COUNTRY_CODE](#ga23fbe1e0df3ae5908386f073e82fbffc)   0x10 |
|   | B3b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3cc1a7ad9805c9caf22a3164e3f1d326">EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm</a>, country code. [More\...](#ga23fbe1e0df3ae5908386f073e82fbffc)<br/> |
| #define  | [EMV_CT_INPUT_APL_ADD_TERM_CAPS](#ga6214399bb522a66553de15f268663d87)   0x20 |
|   | B3b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa137395f6cc0b7618d9fec892c3c8b00">EMV_CT_APPLIDATA_STRUCT::App_TermAddCap</a>, addtional terminal capabilties for tapp. [More\...](#ga6214399bb522a66553de15f268663d87)<br/> |
| #define  | [EMV_CT_INPUT_APL_PRIO_APPS](#gad2089aa2e0295189f3700d0ef5c24241)   0x40 |
|   | B3b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aafdd60748ec764b0398657d3a87e0d19">EMV_CT_APPLIDATA_STRUCT::xAIDPrio</a>, priority application. [More\...](#gad2089aa2e0295189f3700d0ef5c24241)<br/> |
| #define  | [EMV_CT_INPUT_APL_MID](#ga9d30ced82f3d642fbc4bf272cb05a75b)   0x80 |
|   | B3b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afe1309924816c148ef5665647e4b3f53">EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs</a>, MID relation. [More\...](#ga9d30ced82f3d642fbc4bf272cb05a75b)<br/> |
| #define  | [EMV_CT_INPUT_APL_EMV_APPKIND](#ga8d7f564f9da500647def2ae7ac3d214f)   0x01 |
|   | B4b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a04624c8cc1358b3d029f8c77a930c0c6">EMV_CT_APPLIDATA_STRUCT::EMV_Application</a>, EMV Application Type. [More\...](#ga8d7f564f9da500647def2ae7ac3d214f)<br/> |
| #define  | [EMV_CT_INPUT_APL_SPECIAL_TXN](#ga8a7ba244f40aec4bf4845e5d88e9eca5)   0x02 |
|   | B4b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab10831fed2998962919365d261912869">EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX</a>, configuration of special transactions. [More\...](#ga8a7ba244f40aec4bf4845e5d88e9eca5)<br/> |
| #define  | [EMV_CT_INPUT_APL_FALLBACK](#gaad2c597ff9d332afe12a853c4a98f560)   0x04 |
|   | B4b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9d0d4cedf99a248f40af087fdfa40b51">EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling</a>, fallback handling for this app. [More\...](#gaad2c597ff9d332afe12a853c4a98f560)<br/> |
| #define  | [EMV_CT_INPUT_APL_CDA](#ga321282e3d102e5aab562ed1e11895825)   0x08 |
|   | B4b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2673654f6fac8e005bb4cb45dec325ed">EMV_CT_APPLIDATA_STRUCT::CDAProcessing</a>, CDA mode. [More\...](#ga321282e3d102e5aab562ed1e11895825)<br/> |
| #define  | [EMV_CT_INPUT_APL_AC_BEFOREAFTER](#gad02ef5b9192f47789039e1dc2bb0a122)   0x10 |
|   | B4b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac6e17c9e053521b910b1eeb6a75c74c">EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter</a>, TAC processing for offline only. [More\...](#gad02ef5b9192f47789039e1dc2bb0a122)<br/> |
| #define  | [EMV_CT_INPUT_APL_POS_ENTRY](#ga6afd6ee616691cf5fb77ff9b34ae0870)   0x20 |
|   | B4b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9cec52ed8e47c79a53adb21646bf136e">EMV_CT_APPLIDATA_STRUCT::POS_EntryMode</a>, POS entry mode. [More\...](#ga6afd6ee616691cf5fb77ff9b34ae0870)<br/> |
| #define  | [EMV_CT_INPUT_APL_TRM_TYPE](#gac8489e7df9188cc84c052acd86c4d99a)   0x40 |
|   | B4b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae3ea58006297dfb1045a9ff86831112e">EMV_CT_APPLIDATA_STRUCT::App_TermTyp</a>, terminal type. [More\...](#gac8489e7df9188cc84c052acd86c4d99a)<br/> |
| #define  | [EMV_CT_INPUT_APL_CUSTOMER_CVM](#gad4324ccb06107ffc964212f1c8f5db18)   0x80 |
|   | B4b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afbad69449ba81d43f2d6a43309443bc6">EMV_CT_APPLIDATA_STRUCT::Customer_CVM</a>, customer CVM. [More\...](#gad4324ccb06107ffc964212f1c8f5db18)<br/> |
| #define  | [EMV_CT_INPUT_APL_CHECKSUM_PARAMS](#ga43c0ab0709a8a2b49d98fa878c4604de)   0x01 |
|   | B5b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a906f3a211340298f467942b94e57010e">EMV_CT_APPLIDATA_STRUCT::Chksum_Params</a>, checksum parmeters. [More\...](#ga43c0ab0709a8a2b49d98fa878c4604de)<br/> |
| #define  | [EMV_CT_INPUT_APL_CHECKSUM](#ga164fc93a15b4268f04cb133ef89f6988)   0x02 |
|   | B5b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae6aab5905479e56d87c421779d57b603">EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO</a>, EMVCo checksum for this app. [More\...](#ga164fc93a15b4268f04cb133ef89f6988)<br/> |
| #define  | [EMV_CT_INPUT_APL_MASTER_AID](#gac94317348011c3e8528affa8f5846787)   0x04 |
|   | B5b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4844ee77295b43631df410adb1beaf41">EMV_CT_APPLIDATA_STRUCT::MasterAID</a>, Master AID for groups. [More\...](#gac94317348011c3e8528affa8f5846787)<br/> |
| #define  | [EMV_CT_INPUT_APL_ADD_CRD_TAGS](#ga5cd4646f7f4cf0d43df97abec7be72bf)   0x08 |
|   | B5b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acd89bdbc00f19a23befec2eed0ff7b00">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD</a>, additional tags available on the ICC. [More\...](#ga5cd4646f7f4cf0d43df97abec7be72bf)<br/> |
| #define  | [EMV_CT_INPUT_APL_ADD_VERSIONS](#gab54d7a9bba15c1fe593246139740229c)   0x10 |
|   | B5b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a88b324674895d7548b40c7d597cdf84d">EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No</a>, additional version number of AID (optional) [More\...](#gab54d7a9bba15c1fe593246139740229c)<br/> |
| #define  | [EMV_CT_INPUT_APL_SEC_LIMIT](#gacf94afe7627d9ca7af878e65f1c0616b)   0x20 |
|   | B5b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afa6752c96d0046c68e76710aee5a070f">EMV_CT_APPLIDATA_STRUCT::Security_Limit</a>, limit below which other terminal capabilties apply (optional) [More\...](#gacf94afe7627d9ca7af878e65f1c0616b)<br/> |
| #define  | [EMV_CT_INPUT_APL_SEC_CAPS](#ga530a800dd545eecc4b1c239c9d350e77)   0x40 |
|   | B5b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aef46aa8782c04a197abd81f77dc5c8ed">EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit</a>, terminal capabilties below the security limit (optional) [More\...](#ga530a800dd545eecc4b1c239c9d350e77)<br/> |
| #define  | [EMV_CT_INPUT_APL_TXN_TYPES_SALE](#gade53080e487f377b98ac9a73e5ecd839)   0x01 |
|   | B6b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2747a88626df7b02d5a6c3a283972736">EMV_CT_APPLIDATA_STRUCT::TxnTypesSale</a> additional transaction types handled as sale (optional) [More\...](#gade53080e487f377b98ac9a73e5ecd839)<br/> |
| #define  | [EMV_CT_INPUT_APL_TXN_TYPES_CASH](#gab176e19aa0b87f7aa212186197ac6e3f)   0x02 |
|   | B6b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaf06c0171381243a268293449aac83a3">EMV_CT_APPLIDATA_STRUCT::TxnTypesCash</a> additional transaction types handled as cash (optional) [More\...](#gab176e19aa0b87f7aa212186197ac6e3f)<br/> |
| #define  | [EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK](#ga45cbd51e4f959d8e39cc05f09783e3c7)   0x04 |
|   | B6b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5c423eef2c409c104e37ae13ee5edc91">EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback</a> additional transaction types handled as cashack (optional) [More\...](#ga45cbd51e4f959d8e39cc05f09783e3c7)<br/> |
| #define  | [EMV_CT_INPUT_APL_TXN_TYPES_REFUND](#gaed82c8a9378a9516ad8320176c3a992b)   0x08 |
|   | B6b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80c8a1f9e2c537ecbc027981dc237c0b">EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund</a> additional transaction types handled as refund (optional) [More\...](#gaed82c8a9378a9516ad8320176c3a992b)<br/> |
| #define  | [EMV_CT_INPUT_APL_DCR_LIST_IDS](#gaf749792412c8972eef629ee6a87c3354)   0x10 |
|   | B6b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a94cdb96dc0c72d50b22bc9ee29c25b9f">EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds</a> Data Container Read List for DPAS-2 Data Storage: list of container IDs. [More\...](#gaf749792412c8972eef629ee6a87c3354)<br/> |
| #define  | [EMV_CT_INPUT_APL_DCR_LIST_RANGES](#gad50c4a902dd130e7204317f31ec43a98)   0x20 |
|   | B6b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a418acaa9bb3b4d2a70442c50205f69a3">EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges</a> Data Container Read List for DPAS-2 Data Storage: list of container ID ranges. [More\...](#gad50c4a902dd130e7204317f31ec43a98)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CT_APPLIDATA_STRUCT::Info_Included_Data</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_INPUT_APL_AC_BEFOREAFTER <a href="#gad02ef5b9192f47789039e1dc2bb0a122" id="gad02ef5b9192f47789039e1dc2bb0a122"></a>

<p>#define EMV_CT_INPUT_APL_AC_BEFOREAFTER   0x10</p>

B4b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac6e17c9e053521b910b1eeb6a75c74c">EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter</a>, TAC processing for offline only.

## EMV_CT_INPUT_APL_ADD_CRD_TAGS <a href="#ga5cd4646f7f4cf0d43df97abec7be72bf" id="ga5cd4646f7f4cf0d43df97abec7be72bf"></a>

<p>#define EMV_CT_INPUT_APL_ADD_CRD_TAGS   0x08</p>

B5b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acd89bdbc00f19a23befec2eed0ff7b00">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD</a>, additional tags available on the ICC.

## EMV_CT_INPUT_APL_ADD_TAGS <a href="#ga6524e8d2866539c261df0e931efbdbd3" id="ga6524e8d2866539c261df0e931efbdbd3"></a>

<p>#define EMV_CT_INPUT_APL_ADD_TAGS   0x80</p>

B2b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad7a6039ab1aa91113c012eab4293d664">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM</a>, additional terminal tags.

## EMV_CT_INPUT_APL_ADD_TERM_CAPS <a href="#ga6214399bb522a66553de15f268663d87" id="ga6214399bb522a66553de15f268663d87"></a>

<p>#define EMV_CT_INPUT_APL_ADD_TERM_CAPS   0x20</p>

B3b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa137395f6cc0b7618d9fec892c3c8b00">EMV_CT_APPLIDATA_STRUCT::App_TermAddCap</a>, addtional terminal capabilties for tapp.

## EMV_CT_INPUT_APL_ADD_VERSIONS <a href="#gab54d7a9bba15c1fe593246139740229c" id="gab54d7a9bba15c1fe593246139740229c"></a>

<p>#define EMV_CT_INPUT_APL_ADD_VERSIONS   0x10</p>

B5b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a88b324674895d7548b40c7d597cdf84d">EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No</a>, additional version number of AID (optional)

## EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP <a href="#ga12b949b39aa59affaf8ea075d858a7fd" id="ga12b949b39aa59affaf8ea075d858a7fd"></a>

<p>#define EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP   0x08</p>

B3b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0cc466b7328ef1933036d1372ba99b00">EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported</a>, CVM in AIP disabled.

## EMV_CT_INPUT_APL_ASI <a href="#gad2248942bf630be611652aeb8860cfc2" id="gad2248942bf630be611652aeb8860cfc2"></a>

<p>#define EMV_CT_INPUT_APL_ASI   0x04</p>

B1b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2000688e48cdadee86eb401946a71785">EMV_CT_APPLIDATA_STRUCT::ASI</a>, ASI.

## EMV_CT_INPUT_APL_CDA <a href="#ga321282e3d102e5aab562ed1e11895825" id="ga321282e3d102e5aab562ed1e11895825"></a>

<p>#define EMV_CT_INPUT_APL_CDA   0x08</p>

B4b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2673654f6fac8e005bb4cb45dec325ed">EMV_CT_APPLIDATA_STRUCT::CDAProcessing</a>, CDA mode.

## EMV_CT_INPUT_APL_CHECKSUM <a href="#ga164fc93a15b4268f04cb133ef89f6988" id="ga164fc93a15b4268f04cb133ef89f6988"></a>

<p>#define EMV_CT_INPUT_APL_CHECKSUM   0x02</p>

B5b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae6aab5905479e56d87c421779d57b603">EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO</a>, EMVCo checksum for this app.

## EMV_CT_INPUT_APL_CHECKSUM_PARAMS <a href="#ga43c0ab0709a8a2b49d98fa878c4604de" id="ga43c0ab0709a8a2b49d98fa878c4604de"></a>

<p>#define EMV_CT_INPUT_APL_CHECKSUM_PARAMS   0x01</p>

B5b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a906f3a211340298f467942b94e57010e">EMV_CT_APPLIDATA_STRUCT::Chksum_Params</a>, checksum parmeters.

## EMV_CT_INPUT_APL_COUNTRY_CODE <a href="#ga23fbe1e0df3ae5908386f073e82fbffc" id="ga23fbe1e0df3ae5908386f073e82fbffc"></a>

<p>#define EMV_CT_INPUT_APL_COUNTRY_CODE   0x10</p>

B3b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3cc1a7ad9805c9caf22a3164e3f1d326">EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm</a>, country code.

## EMV_CT_INPUT_APL_CUSTOMER_CVM <a href="#gad4324ccb06107ffc964212f1c8f5db18" id="gad4324ccb06107ffc964212f1c8f5db18"></a>

<p>#define EMV_CT_INPUT_APL_CUSTOMER_CVM   0x80</p>

B4b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afbad69449ba81d43f2d6a43309443bc6">EMV_CT_APPLIDATA_STRUCT::Customer_CVM</a>, customer CVM.

## EMV_CT_INPUT_APL_DCR_LIST_IDS <a href="#gaf749792412c8972eef629ee6a87c3354" id="gaf749792412c8972eef629ee6a87c3354"></a>

<p>#define EMV_CT_INPUT_APL_DCR_LIST_IDS   0x10</p>

B6b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a94cdb96dc0c72d50b22bc9ee29c25b9f">EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds</a> Data Container Read List for DPAS-2 Data Storage: list of container IDs.

## EMV_CT_INPUT_APL_DCR_LIST_RANGES <a href="#gad50c4a902dd130e7204317f31ec43a98" id="gad50c4a902dd130e7204317f31ec43a98"></a>

<p>#define EMV_CT_INPUT_APL_DCR_LIST_RANGES   0x20</p>

B6b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a418acaa9bb3b4d2a70442c50205f69a3">EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges</a> Data Container Read List for DPAS-2 Data Storage: list of container ID ranges.

## EMV_CT_INPUT_APL_DDOL <a href="#ga2d3455d96b50bbe6534326fb64dafd20" id="ga2d3455d96b50bbe6534326fb64dafd20"></a>

<p>#define EMV_CT_INPUT_APL_DDOL   0x20</p>

B2b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a27e03203f154c52be3abc2db49842a93">EMV_CT_APPLIDATA_STRUCT::Default_DDOL</a>, Default DDOL.

## EMV_CT_INPUT_APL_EMV_APPKIND <a href="#ga8d7f564f9da500647def2ae7ac3d214f" id="ga8d7f564f9da500647def2ae7ac3d214f"></a>

<p>#define EMV_CT_INPUT_APL_EMV_APPKIND   0x01</p>

B4b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a04624c8cc1358b3d029f8c77a930c0c6">EMV_CT_APPLIDATA_STRUCT::EMV_Application</a>, EMV Application Type.

## EMV_CT_INPUT_APL_FALLBACK <a href="#gaad2c597ff9d332afe12a853c4a98f560" id="gaad2c597ff9d332afe12a853c4a98f560"></a>

<p>#define EMV_CT_INPUT_APL_FALLBACK   0x04</p>

B4b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9d0d4cedf99a248f40af087fdfa40b51">EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling</a>, fallback handling for this app.

## EMV_CT_INPUT_APL_FLOOR_LIMIT <a href="#ga65b5bab068258243ab5dabe904abea37" id="ga65b5bab068258243ab5dabe904abea37"></a>

<p>#define EMV_CT_INPUT_APL_FLOOR_LIMIT   0x20</p>

B1b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5fb4232c2d98685b61df7884ccfbaf5">EMV_CT_APPLIDATA_STRUCT::FloorLimit</a>, floor limt.

## EMV_CT_INPUT_APL_FLOW_CAPS <a href="#ga90eda81c6374249fce8a0bde0803c342" id="ga90eda81c6374249fce8a0bde0803c342"></a>

<p>#define EMV_CT_INPUT_APL_FLOW_CAPS   0x04</p>

B3b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a>, flow capabilities.

## EMV_CT_INPUT_APL_MAND_TAGS <a href="#ga7a26a94b830ad72eb8a219b0a7aef026" id="ga7a26a94b830ad72eb8a219b0a7aef026"></a>

<p>#define EMV_CT_INPUT_APL_MAND_TAGS   0x01</p>

B3b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a15601aa3b54c9da3032a3ed1d43b0b6b">EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD</a>, mandatory tags.

## EMV_CT_INPUT_APL_MASTER_AID <a href="#gac94317348011c3e8528affa8f5846787" id="gac94317348011c3e8528affa8f5846787"></a>

<p>#define EMV_CT_INPUT_APL_MASTER_AID   0x04</p>

B5b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4844ee77295b43631df410adb1beaf41">EMV_CT_APPLIDATA_STRUCT::MasterAID</a>, Master AID for groups.

## EMV_CT_INPUT_APL_MAXTARGET <a href="#ga7ca0d41a5e2de3c3b9f34d9f3c90c35f" id="ga7ca0d41a5e2de3c3b9f34d9f3c90c35f"></a>

<p>#define EMV_CT_INPUT_APL_MAXTARGET   0x01</p>

B2b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae06a2f3428cf719f7fc1523a2e2b9fce">EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage</a>, maximum target percentage.

## EMV_CT_INPUT_APL_MERCHANT_CATCODE <a href="#ga4ad26154aa32520b74498b9d80a2b9d2" id="ga4ad26154aa32520b74498b9d80a2b9d2"></a>

<p>#define EMV_CT_INPUT_APL_MERCHANT_CATCODE   0x08</p>

B1b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aadaaf73921101bb812f90ec7c4a9d5dd">EMV_CT_APPLIDATA_STRUCT::BrKey</a>, merchant category code.

## EMV_CT_INPUT_APL_MERCHANT_IDENT <a href="#ga932404bc4568e388b35d46434ee7ccf2" id="ga932404bc4568e388b35d46434ee7ccf2"></a>

<p>#define EMV_CT_INPUT_APL_MERCHANT_IDENT   0x40</p>

B2b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3e3c059a7e2f459a449ab7e746046cf7">EMV_CT_APPLIDATA_STRUCT::MerchIdent</a>, merchant identification.

## EMV_CT_INPUT_APL_MID <a href="#ga9d30ced82f3d642fbc4bf272cb05a75b" id="ga9d30ced82f3d642fbc4bf272cb05a75b"></a>

<p>#define EMV_CT_INPUT_APL_MID   0x80</p>

B3b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afe1309924816c148ef5665647e4b3f53">EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs</a>, MID relation.

## EMV_CT_INPUT_APL_NAME <a href="#ga932af997ee523cd74556f8e8c2d4ecee" id="ga932af997ee523cd74556f8e8c2d4ecee"></a>

<p>#define EMV_CT_INPUT_APL_NAME   0x02</p>

B1b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1a933985680b099e926e54086a602c12">EMV_CT_APPLIDATA_STRUCT::AppName</a>, application name.

## EMV_CT_INPUT_APL_POS_ENTRY <a href="#ga6afd6ee616691cf5fb77ff9b34ae0870" id="ga6afd6ee616691cf5fb77ff9b34ae0870"></a>

<p>#define EMV_CT_INPUT_APL_POS_ENTRY   0x20</p>

B4b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9cec52ed8e47c79a53adb21646bf136e">EMV_CT_APPLIDATA_STRUCT::POS_EntryMode</a>, POS entry mode.

## EMV_CT_INPUT_APL_PRIO_APPS <a href="#gad2089aa2e0295189f3700d0ef5c24241" id="gad2089aa2e0295189f3700d0ef5c24241"></a>

<p>#define EMV_CT_INPUT_APL_PRIO_APPS   0x40</p>

B3b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aafdd60748ec764b0398657d3a87e0d19">EMV_CT_APPLIDATA_STRUCT::xAIDPrio</a>, priority application.

## EMV_CT_INPUT_APL_SEC_CAPS <a href="#ga530a800dd545eecc4b1c239c9d350e77" id="ga530a800dd545eecc4b1c239c9d350e77"></a>

<p>#define EMV_CT_INPUT_APL_SEC_CAPS   0x40</p>

B5b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aef46aa8782c04a197abd81f77dc5c8ed">EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit</a>, terminal capabilties below the security limit (optional)

## EMV_CT_INPUT_APL_SEC_LIMIT <a href="#gacf94afe7627d9ca7af878e65f1c0616b" id="gacf94afe7627d9ca7af878e65f1c0616b"></a>

<p>#define EMV_CT_INPUT_APL_SEC_LIMIT   0x20</p>

B5b6: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afa6752c96d0046c68e76710aee5a070f">EMV_CT_APPLIDATA_STRUCT::Security_Limit</a>, limit below which other terminal capabilties apply (optional)

## EMV_CT_INPUT_APL_SPECIAL_TXN <a href="#ga8a7ba244f40aec4bf4845e5d88e9eca5" id="ga8a7ba244f40aec4bf4845e5d88e9eca5"></a>

<p>#define EMV_CT_INPUT_APL_SPECIAL_TXN   0x02</p>

B4b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab10831fed2998962919365d261912869">EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX</a>, configuration of special transactions.

## EMV_CT_INPUT_APL_TAC_DEFAULT <a href="#ga9e349187d15d9a7d1d50f852f87dd5d2" id="ga9e349187d15d9a7d1d50f852f87dd5d2"></a>

<p>#define EMV_CT_INPUT_APL_TAC_DEFAULT   0x08</p>

B2b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ce1deed9d23bcc207bfb582f59cac6b">EMV_CT_APPLIDATA_STRUCT::TACDefault</a>, TAC Default.

## EMV_CT_INPUT_APL_TAC_DENIAL <a href="#gab264ef83adc481b1afd16edde0886a08" id="gab264ef83adc481b1afd16edde0886a08"></a>

<p>#define EMV_CT_INPUT_APL_TAC_DENIAL   0x02</p>

B2b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab4a00313a90f392f78eb7517a136aae6">EMV_CT_APPLIDATA_STRUCT::TACDenial</a>, TAC Denial.

## EMV_CT_INPUT_APL_TAC_ONLINE <a href="#gab0021c0422bb71c965abc0078a9faf77" id="gab0021c0422bb71c965abc0078a9faf77"></a>

<p>#define EMV_CT_INPUT_APL_TAC_ONLINE   0x04</p>

B2b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a71a391d7f8da7dc0e5be8b97c14447da">EMV_CT_APPLIDATA_STRUCT::TACOnline</a>, TAC Online.

## EMV_CT_INPUT_APL_TARGET <a href="#ga1775beadd5b4c87f0b04f6c373242840" id="ga1775beadd5b4c87f0b04f6c373242840"></a>

<p>#define EMV_CT_INPUT_APL_TARGET   0x80</p>

B1b8: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#accfd8d6023e6718726e1a736e0d54e8f">EMV_CT_APPLIDATA_STRUCT::TargetPercentage</a>, target percentage.

## EMV_CT_INPUT_APL_TDOL <a href="#ga66b7fd71d420257e69f289b2dc56d5e7" id="ga66b7fd71d420257e69f289b2dc56d5e7"></a>

<p>#define EMV_CT_INPUT_APL_TDOL   0x10</p>

B2b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9741f7d86efbb9dc20f687b6cad55f4c">EMV_CT_APPLIDATA_STRUCT::Default_TDOL</a>, Default TDOL.

## EMV_CT_INPUT_APL_TERM_CAPS <a href="#ga9a89428b080a0f8b7a12058a0fa96e3d" id="ga9a89428b080a0f8b7a12058a0fa96e3d"></a>

<p>#define EMV_CT_INPUT_APL_TERM_CAPS   0x02</p>

B3b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7ac173f4a1d9a3845a18af806ee8bb31">EMV_CT_APPLIDATA_STRUCT::App_TermCap</a>, terminal capabilities for app.

## EMV_CT_INPUT_APL_THRESH <a href="#gabca6575e6a688a2db26dc1a853b1879b" id="gabca6575e6a688a2db26dc1a853b1879b"></a>

<p>#define EMV_CT_INPUT_APL_THRESH   0x40</p>

B1b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0ff73036f6d3329cc1e8858761af2653">EMV_CT_APPLIDATA_STRUCT::Threshhold</a>, threshhold value.

## EMV_CT_INPUT_APL_TID <a href="#ga9a19ef45dfdba542e2d536279f1beeae" id="ga9a19ef45dfdba542e2d536279f1beeae"></a>

<p>#define EMV_CT_INPUT_APL_TID   0x10</p>

B1b5: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_APPLIDATA_STRUCT::TermIdent</a>, terminal ID.

## EMV_CT_INPUT_APL_TRM_TYPE <a href="#gac8489e7df9188cc84c052acd86c4d99a" id="gac8489e7df9188cc84c052acd86c4d99a"></a>

<p>#define EMV_CT_INPUT_APL_TRM_TYPE   0x40</p>

B4b7: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae3ea58006297dfb1045a9ff86831112e">EMV_CT_APPLIDATA_STRUCT::App_TermTyp</a>, terminal type.

## EMV_CT_INPUT_APL_TXN_TYPES_CASH <a href="#gab176e19aa0b87f7aa212186197ac6e3f" id="gab176e19aa0b87f7aa212186197ac6e3f"></a>

<p>#define EMV_CT_INPUT_APL_TXN_TYPES_CASH   0x02</p>

B6b2: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaf06c0171381243a268293449aac83a3">EMV_CT_APPLIDATA_STRUCT::TxnTypesCash</a> additional transaction types handled as cash (optional)

## EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK <a href="#ga45cbd51e4f959d8e39cc05f09783e3c7" id="ga45cbd51e4f959d8e39cc05f09783e3c7"></a>

<p>#define EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK   0x04</p>

B6b3: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5c423eef2c409c104e37ae13ee5edc91">EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback</a> additional transaction types handled as cashack (optional)

## EMV_CT_INPUT_APL_TXN_TYPES_REFUND <a href="#gaed82c8a9378a9516ad8320176c3a992b" id="gaed82c8a9378a9516ad8320176c3a992b"></a>

<p>#define EMV_CT_INPUT_APL_TXN_TYPES_REFUND   0x08</p>

B6b4: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80c8a1f9e2c537ecbc027981dc237c0b">EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund</a> additional transaction types handled as refund (optional)

## EMV_CT_INPUT_APL_TXN_TYPES_SALE <a href="#gade53080e487f377b98ac9a73e5ecd839" id="gade53080e487f377b98ac9a73e5ecd839"></a>

<p>#define EMV_CT_INPUT_APL_TXN_TYPES_SALE   0x01</p>

B6b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2747a88626df7b02d5a6c3a283972736">EMV_CT_APPLIDATA_STRUCT::TxnTypesSale</a> additional transaction types handled as sale (optional)

## EMV_CT_INPUT_APL_VERSION <a href="#ga2e5e1749c8ce9516611741592c7a7ea2" id="ga2e5e1749c8ce9516611741592c7a7ea2"></a>

<p>#define EMV_CT_INPUT_APL_VERSION   0x01</p>

B1b1: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4a13940a43927f00f7c701cb98131588">EMV_CT_APPLIDATA_STRUCT::VerNum</a>, application version number.

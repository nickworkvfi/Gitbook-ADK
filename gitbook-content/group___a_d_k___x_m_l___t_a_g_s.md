---
hidden: true
title: Tags for configuration storageConfiguration
---

[Macros](#define-members)

Used for storing the configuration in XML files. [More\...](#details)

Collaboration diagram for Tags for configuration storage:

![](group___a_d_k___x_m_l___t_a_g_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [XML_TAG_TERMDATA](#ga222621e71edebae1ad5520a19b59fbf3)   \"TerminalData\" |
|   | constructed xml tag for terminal data <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CTLS_TERMDATA_STRUCT</a>, used in \"EMV_CTLS_Terminal.xml\" [More\...](#ga222621e71edebae1ad5520a19b59fbf3)<br/> |
| #define  | [XML_TAG_TERMDATA_TERM_TYP](#gae8ddc36e1390de13ad98cf5da17cfc3f)   \"TermTyp\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CTLS_TERMDATA_STRUCT::TermTyp</a>. [More\...](#gae8ddc36e1390de13ad98cf5da17cfc3f)<br/> |
| #define  | [XML_TAG_TERMDATA_COUNTRY_CODE_TERM](#gaef4d5036990ed54a310bfa34e9a018aa)   \"CountryCodeTerm\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a0cd015d4fd7fa26a9c13d6687dcc1aea">EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm</a>. [More\...](#gaef4d5036990ed54a310bfa34e9a018aa)<br/> |
| #define  | [XML_TAG_TERMDATA_CURRENCY_TRANS](#ga661c0545150aba185eb87f9cc4ec2888)   \"CurrencyTrans\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga369ab2cc83e9b220bdfa79753f1f3962">TAG_5F2A_TRANS_CURRENCY</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans</a>. [More\...](#ga661c0545150aba185eb87f9cc4ec2888)<br/> |
| #define  | [XML_TAG_TERMDATA_EXP_TRANS](#ga626a3a285542c99e089df3c38d66ee89)   \"ExpTrans\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga134c61ae2787b93c5def5bbf929f7cb4">TAG_5F36_TRANS_CURRENCY_EXP</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CTLS_TERMDATA_STRUCT::ExpTrans</a>. [More\...](#ga626a3a285542c99e089df3c38d66ee89)<br/> |
| #define  | [XML_TAG_TERMDATA_SUPP_LANG](#ga77460b946c3b46533edfbdbd3a6caf4c)   \"SuppLang\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga52707e76d2602d822429e98d653933c3">TAG_SUPP_LANG</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9d2672ac7a65bb39a13e450b4cb4737b">EMV_CTLS_TERMDATA_STRUCT::SuppLang</a>. [More\...](#ga77460b946c3b46533edfbdbd3a6caf4c)<br/> |
| #define  | [XML_TAG_TERMDATA_IFD_SERIAL_NUMBER](#ga629ee278fb088066573a86dd7d0b0e55)   \"IFD_SerialNumber\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga1edb578c8df9ce5a55b3204cda45d198">TAG_9F1E_IFD_SERIAL_NB</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber</a>. [More\...](#ga629ee278fb088066573a86dd7d0b0e55)<br/> |
| #define  | [XML_TAG_TERMDATA_FLOW_OPTIONS](#gab16baa33ca0e740088426ad66b521adf)   \"FlowOptions\" |
|   | TLV tag <a href="group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#gad0e9f205f2fcb246b6c958150d8a6338">TAG_DF8F0B_TERM_FLOW_OPTIONS</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a347abf8f0129f37f17279ef981765674">EMV_CTLS_TERMDATA_STRUCT::FlowOptions</a>,. [More\...](#gab16baa33ca0e740088426ad66b521adf)<br/> |
| #define  | [XML_TAG_TERMDATA_MAXCTLS_TRANSLIMIT](#gaffe891d87e34d05b4a9c12603a1f5acd)   \"MaxCTLSTranslimit\" |
|   | TLV tag <a href="group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga6a3a4411ca48ce2fe52c516dbeed0ebc">TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a3a9583914dda18129d8a82c8a1ebd679">EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit</a>. [More\...](#gaffe891d87e34d05b4a9c12603a1f5acd)<br/> |
| #define  | [XML_TAG_TERMDATA_BEEP_VOLUME](#ga57ca04c769961df068507ec48d8749df)   \"BeepVolume\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac3f64e7a2f4fc6ae2911cf8809aa97de">TAG_DF62_BUZZER_VOLUME</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a93d1982261d2afed6ce0b169b9f89541">EMV_CTLS_TERMDATA_STRUCT::BeepVolume</a>. [More\...](#ga57ca04c769961df068507ec48d8749df)<br/> |
| #define  | [XML_TAG_TERMDATA_BEEP_FREQUENCY_SUCCESS](#gafa52bc19e376c25cb63f9bd98f7b7aa8)   \"BeepFrequencySuccess\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac4d4fa824c7ddadf3c1b83ea682c991c">TAG_DFD006_BEEP_FREQ_SUCCESS</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a82bafc9160b85144ec5a62a8ae28e49f">EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess</a>. [More\...](#gafa52bc19e376c25cb63f9bd98f7b7aa8)<br/> |
| #define  | [XML_TAG_TERMDATA_BEEP_FREQUENCY_ALERT](#ga16e19d8553d2fd19a8069da5c5c0548c)   \"BeepFrequencyAlert\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga637b56c5915d91922ad0a6b03316baeb">TAG_DFD007_BEEP_FREQ_ALERT</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a2d2a207c6b103e0f8e9b21301150c5a6">EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert</a>. [More\...](#ga16e19d8553d2fd19a8069da5c5c0548c)<br/> |
| #define  | [XML_TAG_TERMDATA_SECOND_TAP_DELAY](#ga5d86c5d8f45bdd9f30ab755db45b6205)   \"SecondTapDelay\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga4026965f91b1424004ecd2b376349c78">TAG_DFD008_SECOND_TAP_DELAY</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a7c7bd56336bc0c080bab48db9a1aa2a3">EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay</a>. [More\...](#ga5d86c5d8f45bdd9f30ab755db45b6205)<br/> |
| #define  | [XML_TAG_TERMDATA_HOST_COMM_TIMEOUT](#ga0fb88db4b918907ecb583113812609a1)   \"HostCommunicationTimeout\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga5abfcf66eecc5c5eb457ef24d01a6ea2">TAG_DFD009_HOST_COMM_TIMEOUT</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a5296f4f7b31fa3553a4fb502be8bccde">EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout</a>. [More\...](#ga0fb88db4b918907ecb583113812609a1)<br/> |
| #define  | [XML_TAG_TERMDATA_POI_INFORMATION](#ga18101ad0d744cdf74d82aa5028d99db2)   \"PoiInformation\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga54b024713e6b8dd6d99e3c1d18005496">TAG_8B_POI_INFORMATION</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaf88e302e58d70d28ed59a53cdca2f2e">EMV_CTLS_TERMDATA_STRUCT::poiInformation</a>. [More\...](#ga18101ad0d744cdf74d82aa5028d99db2)<br/> |
| #define  | [XML_TAG_TERMDATA_KERNEL_VERSION](#ga22fd4430dee89d1b99af96d86a6b0109)   \"KernelVersion\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga67a162b9d0b04eff880450e857dafb37">TAG_KERNEL_VERSION</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a75c365e8a1aca8672ee83242dfb3fe42">EMV_CTLS_TERMDATA_STRUCT::KernelVersion</a>. [More\...](#ga22fd4430dee89d1b99af96d86a6b0109)<br/> |
| #define  | [XML_TAG_TERMDATA_FRAMEWORK_VERSION](#ga7466ea82a873f9b06da23f703c800a17)   \"FrameworkVersion\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga6f8f8ac35965ec091b3d1a3f4a4efe8d">TAG_DF11_LIB_VERSION</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a15d10a5c739bb6c45d9d0bf3f40c0021">EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion</a>. [More\...](#ga7466ea82a873f9b06da23f703c800a17)<br/> |
| #define  | [XML_TAG_TERMDATA_L1DRIVER_VERSION](#ga1027f53b9fdf8329597f1a18fe49a316)   \"L1DriverVersion\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga1a279b58a27d0cc9146e89c6106035dc">TAG_DF6F_L1DRIVER_VERSION</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion</a>. [More\...](#ga1027f53b9fdf8329597f1a18fe49a316)<br/> |
| #define  | [XML_TAG_TERMDATA_HOTLIST](#gad10a81f383a61b654186234abbc9ae97)   \"Hotlist\" |
|   | Enclosing tag in \"EMV_CTLS_HOTLIST.xml\". [More\...](#gad10a81f383a61b654186234abbc9ae97)<br/> |
| #define  | [XML_TAG_TERMDATA_HOTLIST_RECORD](#gac628721e676509eef7b4456f3a248df0)   \"Hot_Item\" |
|   | One record in \"EMV_CTLS_HOTLIST.xml\". [More\...](#gac628721e676509eef7b4456f3a248df0)<br/> |
| #define  | [XML_TAG_TERMDATA_HOTLIST_PAN](#ga02567214f31fa24cfd632fd111f4903e)   \"PAN\" |
|   | PAN data in \"EMV_CTLS_HOTLIST.xml\". [More\...](#ga02567214f31fa24cfd632fd111f4903e)<br/> |
| #define  | [XML_TAG_TERMDATA_HOTLIST_SEQ_NUMBER](#ga9774ad1849206aa0707286558487ae94)   \"PAN_Sequence_Number\" |
|   | PAN sequence number in \"EMV_CTLS_HOTLIST.xml\". [More\...](#ga9774ad1849206aa0707286558487ae94)<br/> |
| #define  | [XML_TAG_CAP_KEYS](#ga42c816c3906637a4065cb023e47148af)   \"CapKeys\" |
|   | constructed xml tag for CAP key data, used in \"EMV_CTLS_Keys.xml\" [More\...](#ga42c816c3906637a4065cb023e47148af)<br/> |
| #define  | [XML_TAG_CAP_KEYS_CAPKEY](#gadca82bc6f2514de3d8c46c456ee814ba)   \"CapKey\" |
|   | constructed xml tag for A SINGLE CAP key <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t">EMV_CTLS_CAPKEY_STRUCT</a> [More\...](#gadca82bc6f2514de3d8c46c456ee814ba)<br/> |
| #define  | [XML_TAG_CAP_KEYS_INDEX](#ga2564b8002f03295e157b242ad2efa950)   \"Index\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga7b2bdd988a89e21cd04afe12a30c0ddf">TAG_KEY_INDEX</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#ac24ea04d0a0218723498d1632c6875a9">EMV_CTLS_CAPKEY_STRUCT::Index</a>. [More\...](#ga2564b8002f03295e157b242ad2efa950)<br/> |
| #define  | [XML_TAG_CAP_KEYS_RID](#ga2acfa293c67d4c30b81f26f1fc51f677)   \"RID\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga0c86b48955a7de5b01796ece1dd8157b">TAG_KEY_RID</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a7d507a69b2eb69015b1ced0f4c4d47fd">EMV_CTLS_CAPKEY_STRUCT::RID</a>. [More\...](#ga2acfa293c67d4c30b81f26f1fc51f677)<br/> |
| #define  | [XML_TAG_CAP_KEYS_KEY](#ga151215aa136d44cb12e3ea1d392c744f)   \"Key\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a0a3543353678a64e265f8d5a817c52db">EMV_CTLS_CAPKEY_STRUCT::Key</a>. [More\...](#ga151215aa136d44cb12e3ea1d392c744f)<br/> |
| #define  | [XML_TAG_CAP_KEYS_KEYLEN](#ga94a87250bc33e6e85a09285f832fbfd9)   \"KeyLen\" |
|   | Length of TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aeb6f1a41fb682dc06cfdc1d0c1bef18f">EMV_CTLS_CAPKEY_STRUCT::KeyLen</a>. [More\...](#ga94a87250bc33e6e85a09285f832fbfd9)<br/> |
| #define  | [XML_TAG_CAP_KEYS_EXPONENT](#ga19533a461456afae8eb33ee784fd361b)   \"Exponent\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3301dc858f4033e7100dae7d71a7e1e0">TAG_KEY_EXPONENT</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a65d7fb542cdae2f7104b266bbe3ac9b2">EMV_CTLS_CAPKEY_STRUCT::Exponent</a>. [More\...](#ga19533a461456afae8eb33ee784fd361b)<br/> |
| #define  | [XML_TAG_CAP_KEYS_HASH](#gad6a0497d2964a67cec810ea12c8279a1)   \"Hash\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac037a26b7d73563286fb125d59f1265d">TAG_KEY_HASH</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aa04067e88f6cfe9465c0a92f7233ebee">EMV_CTLS_CAPKEY_STRUCT::Hash</a>. [More\...](#gad6a0497d2964a67cec810ea12c8279a1)<br/> |
| #define  | [XML_TAG_CAP_KEYS_REVOC_LIST](#ga1e433908dd992082b5a252f39d60f45d)   \"RevocationList\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae92f2b4a70d0c2217bdcc751106477d1">TAG_KEY_CRL</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aad05155fcd539c313f48260d8ebd2f76">EMV_CTLS_CAPKEY_STRUCT::RevocEntries</a>. [More\...](#ga1e433908dd992082b5a252f39d60f45d)<br/> |
| #define  | [XML_TAG_APPLIDATA](#gaaa1f944043cef98010a54b9c074185ff)   \"ApplicationData\" |
| #define  | [XML_TAG_APPLIDATA_APP](#ga32de48c9dd0037fbd10d3c6d1264e4d1)   \"Application\" |
| #define  | [XML_TAG_APPLIDATA_AID](#gab51b5b160528c4eba7de7bf08e42ed5d)   \"AID\" |
| #define  | [XML_TAG_APPLIDATA_CL_MODES](#ga90ca354a5daf73aa2edc9678440e5584)   \"CL_Modes\" |
| #define  | [XML_TAG_APPLIDATA_APP_NAME](#ga0e796259cace748a875c804a6bdc342b)   \"AppName\" |
| #define  | [XML_TAG_APPLIDATA_ASI](#ga2e5b4d6bc8885bd582a8c8a53988adeb)   \"ASI\" |
| #define  | [XML_TAG_APPLIDATA_COUNTRY_CODE_TERM](#ga834453de1096e1827ebe688eaab110f8)   \"CountryCodeTerm\" |
| #define  | [XML_TAG_APPLIDATA_BR_KEY](#ga1c91e30ac44b2fd1c9c90e2d5ab2f2da)   \"BrKey\" |
| #define  | [XML_TAG_APPLIDATA_TERM_IDENT](#gaf0f3d447f6398bbb9ed79e18b0b399e5)   \"TermIdent\" |
| #define  | [XML_TAG_APPLIDATA_CL_CVM_SOFT_LIMIT](#gabae9c04d8f457fe7ea9f26f2afb70199)   \"CL_CVM_Soft_Limit\" |
| #define  | [XML_TAG_APPLIDATA_CL_CEILING_LIMIT](#ga360e308e22b55148bff72c04b2bf842b)   \"CL_Ceiling_Limit\" |
| #define  | [XML_TAG_APPLIDATA_FLOOR_LIMIT](#gabe783b9ab1c5589bab73048ec67cf8e9)   \"FloorLimit\" |
| #define  | [XML_TAG_CHPAPPLIDATA_VER_NUM](#gab9cca69893732da4749b55d0dbd714ac)   \"Chip_VerNumber\" |
| #define  | [XML_TAG_MSRAPPLIDATA_VER_NUM](#ga7bd7e2b82bdfff8ab0f6f6555951bd63)   \"MSR_VerNumber\" |
| #define  | [XML_TAG_APPLIDATA_ADD_VER_NUM](#ga31257afdc52fda5212500ffdbef44c25)   \"AdditionalVersioNumbers\" |
| #define  | [XML_TAG_APPLIDATA_MERCH_IDENT](#ga7ae8ff8350d9527942bb5c969e16e237)   \"MerchIdent\" |
| #define  | [XML_TAG_APPLIDATA_AID_PRIO](#ga099f0028fb4bcb042b90d881d3c35318)   \"AID_Prio\" |
| #define  | [XML_TAG_APPLIDATA_SPECIAL_TRX](#gafb41a5be33a5d300ab2f1a353ccdb39a)   \"SpecialTRX\" |
| #define  | [XML_TAG_APPLIDATA_APP_FLOW_CAP](#ga50d78399df4e3c11369093dc4e841d7d)   \"AppFlowCap\" |
| #define  | [XML_TAG_APPLIDATA_RETAP_FIELD_OFF](#gacef158dec1a3555b1e2c81ecd9fe8710)   \"RetapFieldOff\" |
| #define  | [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM](#ga3ebc4e2121dd29d4a0c29bf0662fc2da)   \"AdditionalTagsTRM\" |
| #define  | [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD](#ga4aa7498018941c11031f732a702ed08f)   \"AdditionalTagsCRD\" |
| #define  | [XML_TAG_APPLIDATA_APP_TERM_CAP](#ga96e3d7de6bd5ffc66025301ce777531b)   \"AppTermCap\" |
| #define  | [XML_TAG_APPLIDATA_APP_TERM_ADD_CAP](#ga0a15bcaf24ec34bfde9b5a49217c7422)   \"AppTermAddCap\" |
| #define  | [XML_TAG_APPLIDATA_APP_TERM_TYP](#ga715c2019507324bd280553d4a2515127)   \"AppTerminalType\" |
| #define  | [XML_TAG_APPLIDATA_TAC_DENIAL](#ga7a831333f78a2d2a955f415f5f739b70)   \"TAC_Denial\" |
| #define  | [XML_TAG_APPLIDATA_TAC_ONLINE](#ga4162a52b25e14b4b1bf16b00def428b1)   \"TAC_Online\" |
| #define  | [XML_TAG_APPLIDATA_TAC_DEFAULT](#ga98c3b8b286cfc9c3be668677d20d510d)   \"TAC_Default\" |
| #define  | [XML_TAG_APPLIDATA_DEFAULT_TDOL](#ga1876212b8287be7382ad6c45c8e22596)   \"DefaultTDOL\" |
| #define  | [XML_TAG_APPLIDATA_PP3_PMSG_TABLE](#ga2802ca0c104ebda43755918052f7f998)   \"PhoneMessageTable\" |
| #define  | [XML_TAG_APPLIDATA_MSR_CVM_ABOVE](#ga5dcef08bc16ccc60e1d30a344f51aa48)   \"MagstripeCVM_aboveLimit\" |
| #define  | [XML_TAG_APPLIDATA_MSR_CVM_BELOW](#gaeb127ba7b1aa09fee36edefe7f9e7b57)   \"MagstripeCVM_belowLimit\" |
| #define  | [XML_TAG_APPLIDATA_CHIP_CVM_BELOW](#gad4e4adeb8ef490e0336b262d74d2cee2)   \"ChipCVM_belowLimit\" |
| #define  | [XML_TAG_APPLIDATA_CEILING_LIMIT_MOBILE](#ga706a513e5a40795696261fac3e9ba279)   \"CL_Ceiling_LimitMobile\" |
| #define  | [XML_TAG_APPLIDATA_TORN_TXN_LIFETIME](#gae25cb6c0ba0d27ef2be8f09c1cf53b6c)   \"Torn_TXN_Liftime\" |
| #define  | [XML_TAG_APPLIDATA_TORN_TXN_NO](#ga98ce343706d15f091c7ea699bcfa298a)   \"Torn_TXN_Number\" |
| #define  | [XML_TAG_APPLIDATA_TTC](#ga273ea4ba44d455bab01edeeddc2fe903)   \"Txn_Category_Code\" |
| #define  | [XML_TAG_APPLIDATA_MERCH_NAME_LOCATION](#gaf1d700ac912a3bc322d96dcef6f845e1)   \"MerchantName_Location\" |
| #define  | [XML_TAG_APPLIDATA_VISA_TTQ](#ga516f562a7f74940e85b0abac7cde9d1a)   \"VisaTTQ\" |
| #define  | [XML_TAG_APPLIDATA_VISA_DRL_PARAMS](#gaaff9d036edcda51dbc1a61053349710a)   \"VisaDRLParams\" |
| #define  | [XML_TAG_APPLIDATA_VISA_DRL_INDEX](#gaa85e96afea9267ac90fc195391e8bb89)   \"Index\" |
| #define  | [XML_TAG_APPLIDATA_VISA_DRL_FLOORLIMIT](#ga96a2449a83693772f26370b86e105727)   \"Floorlimit\" |
| #define  | [XML_TAG_APPLIDATA_VISA_DRL_PRG_ID_LEN](#gacfb924d975c29f3209abbf3f506dae03)   \"AppPrgIdLen\" |
| #define  | [XML_TAG_APPLIDATA_VISA_DRL_APP_PRG_ID](#gac2deb9d75e2bb86ee5b785bee22c2ea5)   \"Application_PRG_ID\" |
| #define  | [XML_TAG_APPLIDATA_VISA_DRL_TXN_LIMIT](#gad649bea958beed648efb3a83e8afc5b4)   \"TXNlimit\" |
| #define  | [XML_TAG_APPLIDATA_VISA_DRL_CVM_LIMIT](#ga2e0a7f380e1dc82c40cc9967d2c515ee)   \"CVMlimit\" |
| #define  | [XML_TAG_APPLIDATA_VISA_DRL_SWITCH](#ga19d9ef288f545d4437a0cf95cd171179)   \"FeatureSwitch\" |
| #define  | [XML_TAG_APPLIDATA_AMEX_DRL_PARAMS](#gae02cbd4fdc1bcb745833d82c2e177505)   \"AmexDRLParams\" |
| #define  | [XML_TAG_APPLIDATA_AMEX_DRL_INDEX](#gaf487e894c6393382c6d3b67764113ed0)   \"Index\" |
| #define  | [XML_TAG_APPLIDATA_AMEX_DRL_FLOORLIMIT](#gaf55c80a6bffc6727c57b959cd7613ec1)   \"Floorlimit\" |
| #define  | [XML_TAG_APPLIDATA_AMEX_DRL_TXN_LIMIT](#ga593794490b75d73f4bb2ebe012cf83ee)   \"TXNlimit\" |
| #define  | [XML_TAG_APPLIDATA_AMEX_DRL_CVM_LIMIT](#ga5a07aa563719db4fc5dc7659ba3e2594)   \"CVMlimit\" |
| #define  | [XML_TAG_APPLIDATA_AMEX_DRL_SWITCH](#ga4f90015ac142bbfcfd7494033e94d03f)   \"FeatureSwitch\" |
| #define  | [XML_TAG_APPLIDATA_MTI_MERCHANT_TYPE_IND](#gaf1d330f8f0bdca44369f76b745f69795)   \"MTI_Merchant_Type_Ind\" |
| #define  | [XML_TAG_APPLIDATA_TTI_TERM_TRANS_INFO](#ga3bae00d3acf768c4f7c89d91bc681b1f)   \"TTI_Term_Trans_Info\" |
| #define  | [XML_TAG_APPLIDATA_TTI_TERM_TRANS_TYPE](#gab7e63284b96f2b0cd3168dc4b01e9c3f)   \"TTT_Term_Trans_Type\" |
| #define  | [XML_TAG_APPLIDATA_TOS_TERM_OPTION_STATUS](#ga536709d3c41197bbcdcf03ef14d94c4a)   \"TOS_Term_Option_Status\" |
| #define  | [XML_TAG_APPLIDATA_TERM_RECEIPT_REQUIRED_LIMIT](#ga3c35869ff738066286788e59f1ed5321)   \"TERM_RCPT_REQLimit\" |
| #define  | [XML_TAG_APPLIDATA_THRESHOLD_BCD](#ga3cabd47633c72ecfd1e1a8fd6229be34)   \"Threshold_BCD\" |
| #define  | [XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE](#gaeb5c69b544617e33b0349a39089f1a16)   \"MaxTargetPercentage\" |
| #define  | [XML_TAG_APPLIDATA_TARGET_PERCENTAGE](#ga86f7ccf9a954b05b9818e82e00c446a9)   \"TargetPercentage\" |
| #define  | [XML_TAG_APPLIDATA_TRY_AGAIN_LIMIT](#gab136b4d9c1292c61022c78e8588606df)   \"TryAgainLimit\" |
| #define  | [XML_TAG_AMEX_TERMINAL_CAPS](#ga8592dee245ce116c88c93eebfad5e4d1)   \"AMEX_Term_Caps\" |
| #define  | [XML_TAG_AMEX_ENH_TERMINAL_CAPS](#ga2abf4cf2f928ee92d91e6f09d856ebe5)   \"AMEX_Enhanced_Reader_Capabilties\" |
| #define  | [XML_TAG_APPLIDATA_CHKSUM_PARAMS](#ga1bea96b6e55c18fe7225c7ef0707f45d)   \"ChksumParams\" |
| #define  | [XML_TAG_APPLIDATA_CHKSUM_ASCII_ENTRYPNT](#gade6ca130cddacd5591f31c13cfcad6eb)   \"Chksum_EntryPoint\" |
| #define  | [XML_TAG_APPLIDATA_CHKSUM_ASCII_KERNEL](#ga0fea1088c31e410280b94828e0c7444a)   \"Chksum_Kernel\" |
| #define  | [XML_TAG_APPLIDATA_MASTER_AID](#gab39766fa922ae19d4827eae5fd14dab2)   \"MasterAID\" |
| #define  | [XML_TAG_AD](#ga9caeb2556ba78d40a6229adb31aad324)   \"ApplicationData\" |
|   | constructed xml tag for application data containing sequence of [XML_TAG_AD_APP](#gac59e08c61f80cea0bfd193fea694fcb9 "Constructed tag for one AID, contains data from EMV_CTLS_APPLI_KERNEL_STRUCT and EMV_CTLS_APPLIDATA_S..."), used in \"EMV_CTLS_Apps_SchemeSpecific.xml\" [More\...](#ga9caeb2556ba78d40a6229adb31aad324)<br/> |
| #define  | [XML_TAG_AD_APP](#gac59e08c61f80cea0bfd193fea694fcb9)   \"Application\" |
|   | Constructed tag for one AID, contains data from <a href="_e_m_v___c_t_l_s___interface_8h.md#struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t">EMV_CTLS_APPLI_KERNEL_STRUCT</a> and <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT</a>. [More\...](#gac59e08c61f80cea0bfd193fea694fcb9)<br/> |
| #define  | [XML_TAG_AD_AID](#ga4f9fc396aafa280bc6ac486edac3413b)   \"AID\" |
|   | Application ID, TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gaa1a0900aa13055b0b5199a8542ea2c64">TAG_4F_APP_ID</a><br/>Struct element <a href="_e_m_v___c_t_l_s___interface_8h.md#a1af6aa5d2e82428d0fe225cfe2b3b501">EMV_CTLS_APPLI_KERNEL_STRUCT::AID</a>. [More\...](#ga4f9fc396aafa280bc6ac486edac3413b)<br/> |
| #define  | [XML_TAG_AD_KERNEL_ID](#ga7c8cfdea1faf6bff5245be09c70267a0)   \"KernelID\" |
|   | Kernel ID, TLV tag <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaa5dcebd8d4d4bd17eab87fdc7a3ddc6b">TAG_DFAB01_KERNEL_ID</a><br/>Struct element <a href="_e_m_v___c_t_l_s___interface_8h.md#ae162469ea7144a6de337323d1c65b761">EMV_CTLS_APPLI_KERNEL_STRUCT::KernelID</a>. [More\...](#ga7c8cfdea1faf6bff5245be09c70267a0)<br/> |
| #define  | [XML_TAG_AD_DFAB02_ASI](#ga23931bf572b98e20b11dcc5467794d53)   \"ASI_DFAB02\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gafe5da15801bec2bd77d947a157834b93">TAG_DFAB02_ASI</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad7b796959f437113eb08a0d5a055bfa9">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ASI_DFAB02</a>; [More\...](#ga23931bf572b98e20b11dcc5467794d53)<br/> |
| #define  | [XML_TAG_AD_DFAB03_APP_FLOW_CAP](#gaada32f63da211af5504ab94fb2355ee6)   \"AppFlowCap_DFAB03\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga3c45ab910372e62b487333c0547c7355">TAG_DFAB03_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6b141ca640db3a0ea501018167b70531">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03</a>\[5\]; [More\...](#gaada32f63da211af5504ab94fb2355ee6)<br/> |
| #define  | [XML_TAG_AD_DFAB04_PRIO_APPS](#gad85745726179ea81ee9cd11e58095252)   \"PriorityApplications_DFAB04\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga51c09305fb6284eccc1aab2e693ab15f">TAG_DFAB04_PRIO_APPS</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a984c64b64f07f57509ec8581284b3aa7">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::PriorityApplications_DFAB04</a>\[EMV_ADK_MAX_PRIO_APP\]; [More\...](#gad85745726179ea81ee9cd11e58095252)<br/> |
| #define  | [XML_TAG_AD_DFAB05_SPECIAL_TRX_CONFIG](#ga7da3f99c62238cb13b9226174ac14909)   \"SpecialTRXConfig_DFAB05\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga0a0c8010bd0c0f86b71adbbaa9000918">TAG_DFAB05_SPECIAL_TRX_CFG</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af70ff3e0b1158f7b868655b1ef77f377">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::SpecialTRXConfig_DFAB05</a>\[8\]; [More\...](#ga7da3f99c62238cb13b9226174ac14909)<br/> |
| #define  | [XML_TAG_AD_DFAB06_CHKSUM_ENTRY_POINT](#gaf1d37eb69dad810fb7b3c06ac3a19703)   \"ChksumEntryPoint_DFAB06\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga14258ef6983f51928a2a6c99948e0d9c">TAG_DFAB06_CHKSUM_EP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0bc4216ec7acb4fefe1d5791477dad78">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ChksumEntryPoint_DFAB06</a>\[EMV_ADK_CHECKSUM_ASCII_SIZE\]; [More\...](#gaf1d37eb69dad810fb7b3c06ac3a19703)<br/> |
| #define  | [XML_TAG_AD_DFAB07_CHKSUM_KERNEL](#ga825110c5de3f42ead0c05c5668551ce2)   \"ChksumKernel_DFAB07\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga34a29c6ff84372970b499ccdc9db16ef">TAG_DFAB07_CHKSUM_KERNEL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8fff947b0a275bd66907bf7012c7ef59">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ChksumKernel_DFAB07</a>\[EMV_ADK_CHECKSUM_ASCII_SIZE\]; [More\...](#ga825110c5de3f42ead0c05c5668551ce2)<br/> |
| #define  | [XML_TAG_AD_DFAB08_RETAP_FIELD_OFF](#gab3f9e0b2ace94e90049cf60bde238c9b)   \"RetapFieldOff_DFAB08\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gacf23191e16912c5b79d4dc131273929a">TAG_DFAB08_RETAP_FIELD_OFF</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a21a7d1dd4fed708472fc123a0a03abfa">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::RetapFieldOff_DFAB08</a>; [More\...](#gab3f9e0b2ace94e90049cf60bde238c9b)<br/> |
| #define  | [XML_TAG_AD_DFAB20_ADD_TAGS_TRM](#gad7ab87e852cc4a26025afd07d17a902a)   \"AdditionalTagsTRM_DFAB20\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga45084da5a6be45a9d8f698c784f9b533">TAG_DFAB20_ADD_TAGS_TRM</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb1d4cd4bf1913ad2a42cb0764fcc619">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20</a>; [More\...](#gad7ab87e852cc4a26025afd07d17a902a)<br/> |
| #define  | [XML_TAG_AD_DFAB21_ADD_TAGS_CRD](#ga4104829597336be46d4854d8af96e87a)   \"AdditionalTagsCRD_DFAB21\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga97704bb8567e8fde98dba20e8e5d579c">TAG_DFAB21_ADD_TAGS_CRD</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a04b972642e943c8509ed2d1802f2edc1">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21</a>; [More\...](#ga4104829597336be46d4854d8af96e87a)<br/> |
| #define  | [XML_TAG_AD_DFAB22_DEFAULT_APP_NAME](#gab1a063d8990a8c5e899f27a161641ab4)   \"DefaultApplicationName_DFAB22\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga08d9f5d4309c6574e292b8f93f49b886">TAG_DFAB22_DEF_APP_NAME</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa022d006c533c7901b3f03d691a7f4b0">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::DefaultApplicationName_DFAB22</a>\[16+1\]; [More\...](#gab1a063d8990a8c5e899f27a161641ab4)<br/> |
| #define  | [XML_TAG_AD_DFAB23_INTERNAL_KERNEL_ID](#ga7624f253e42b46f6d9207cf7cae79b5a)   \"InternalKernelId_DFAB23\" |
|   | <br/>TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac55e826d40fc1c8e1ea51869fa1bc6cb">TAG_DFAB23_INTERNAL_KERNEL_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a750e97ca2975e2f5309417e707f3aab3">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::InternalKernelId_DFAB23</a>; [More\...](#ga7624f253e42b46f6d9207cf7cae79b5a)<br/> |
| #define  | [XML_TAG_AD_9F01_ACQUIRER_ID](#ga2574462d9c86ea3a5b38de70e6805abe)   \"AcquirerIdentifier_9F01\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a>. [More\...](#ga2574462d9c86ea3a5b38de70e6805abe)<br/> |
| #define  | [XML_TAG_AD_9F09_VERSION_NUMBER](#gaadbdb604ebc480d0ca6d77105987034e)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>. [More\...](#gaadbdb604ebc480d0ca6d77105987034e)<br/> |
| #define  | [XML_TAG_AD_9F15_MERCHANT_CATEGORY_CODE](#gae88b926438441531ae9092bd0bb660d1)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>. [More\...](#gae88b926438441531ae9092bd0bb660d1)<br/> |
| #define  | [XML_TAG_AD_9F16_MERCHANT_ID](#ga8da674894d29e2a9aa9510c076a78c4d)   \"MerchantIdentifier_9F16\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>. [More\...](#ga8da674894d29e2a9aa9510c076a78c4d)<br/> |
| #define  | [XML_TAG_AD_9F1A_TERM_COUNTRY_CODE](#gac90c5457d7e98c811d727b03b2ce527f)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>. [More\...](#gac90c5457d7e98c811d727b03b2ce527f)<br/> |
| #define  | [XML_TAG_AD_9F1C_TERM_IDENT](#gaac04779e3fbe03f8b471661b313b4330)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>. [More\...](#gaac04779e3fbe03f8b471661b313b4330)<br/> |
| #define  | [XML_TAG_AD_9F33_TERM_CAPS](#gac7631a53460a29936f07cc2bc1d17443)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>. [More\...](#gac7631a53460a29936f07cc2bc1d17443)<br/> |
| #define  | [XML_TAG_AD_9F35_TERM_TYPE](#ga0326cdf90192c73abf14e7de25077543)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>. [More\...](#ga0326cdf90192c73abf14e7de25077543)<br/> |
| #define  | [XML_TAG_AD_9F40_ADD_TERM_CAPS](#ga72a5aead1f3bdb2063b3122a52ee5a02)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>. [More\...](#ga72a5aead1f3bdb2063b3122a52ee5a02)<br/> |
| #define  | [XML_TAG_AD_9F4E_MERCHANT_NAME_LOCATION](#gaae07de3e2c2bdf3ad815fb540c572cdc)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>. [More\...](#gaae07de3e2c2bdf3ad815fb540c572cdc)<br/> |
| #define  | [XML_TAG_AD_DFAB30_TEC_SUPPORT](#ga1bbb2b483834683506e0bbd644dba730)   \"TecSupport_DFAB30\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a>. [More\...](#ga1bbb2b483834683506e0bbd644dba730)<br/> |
| #define  | [XML_TAG_AD_DFAB31_APP_FLOW_CAP](#ga6b8be55da5b6d73ae05c3b3337e4d068)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>. [More\...](#ga6b8be55da5b6d73ae05c3b3337e4d068)<br/> |
| #define  | [XML_TAG_AD_DFAB40_CTLS_FLOOR_LIMIT](#gafc581a8f3d684e0d50242cdd1910384c)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>. [More\...](#gafc581a8f3d684e0d50242cdd1910384c)<br/> |
| #define  | [XML_TAG_AD_DFAB41_CTLS_TRX_LIMIT](#ga924fa1a4ca6efcdc90ea3ba9891def95)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>. [More\...](#ga924fa1a4ca6efcdc90ea3ba9891def95)<br/> |
| #define  | [XML_TAG_AD_DFAB42_CTLS_CVM_REQ_LIMIT](#gaea5a78c6e1023d6abef845f69e7df4be)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>. [More\...](#gaea5a78c6e1023d6abef845f69e7df4be)<br/> |
| #define  | [XML_TAG_AD_DFAB5B_CTLS_TRX_LIMIT_ODCVM](#gaee433f2a21425de76cb0e6526f1528e4)   \"CL_TXN_Limit_ODCVM_DFAB5B\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga7eb63c89a56b7f491d9f29abe6604b61">TAG_DFAB5B_CTLS_TRX_LIMIT_ODCVM</a>. [More\...](#gaee433f2a21425de76cb0e6526f1528e4)<br/> |
| #define  | [XML_TAG_AD_MK](#ga00c9526d26f8e302cf8d748ff5627be2)   \"MasterCard\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_MK_STRUCT</a>. [More\...](#ga00c9526d26f8e302cf8d748ff5627be2)<br/> |
| #define  | [XML_TAG_AD_GIROCARD](#gaf56ec7b16f42aea92ac394dab8e5383b)   \"girocard\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_MK_STRUCT</a> (for German domestic scheme \"Girocard\") [More\...](#gaf56ec7b16f42aea92ac394dab8e5383b)<br/> |
| #define  | [XML_TAG_AD_MK_9F1C_TERM_IDENT](#gadc61cbbb4d2fbfe7481b0a5825acdc45)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_MK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#gadc61cbbb4d2fbfe7481b0a5825acdc45)<br/> |
| #define  | [XML_TAG_AD_MK_9F1A_TERM_COUNTRY_CODE](#ga6c616ea6b2a63dbaeb7af6346ebcc58f)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga6c616ea6b2a63dbaeb7af6346ebcc58f)<br/> |
| #define  | [XML_TAG_AD_MK_9F35_TERM_TYPE](#ga435a71218ff105a93e8f7f623f421ad4)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalType_9F35</a>;. [More\...](#ga435a71218ff105a93e8f7f623f421ad4)<br/> |
| #define  | [XML_TAG_AD_MK_9F40_ADD_TERM_CAPS](#ga3a91157df0e2100cb89154ffb5a3c724)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_MK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#ga3a91157df0e2100cb89154ffb5a3c724)<br/> |
| #define  | [XML_TAG_AD_MK_DF811E_MSR_CVM_ABOVE_LIMIT](#gade7ba9a4b8d07f82a4581fcda29a61cb)   \"MagstripeCVM_aboveLimit_DF811E\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gaafb1df3552503b65888886ebc175c2eb">TAG_DF811E_MSR_CVM_ABOVE_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a82fc51540e28fb76b48dd01347e13f43">EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_aboveLimit_DF811E</a>;. [More\...](#gade7ba9a4b8d07f82a4581fcda29a61cb)<br/> |
| #define  | [XML_TAG_AD_MK_DF812C_MSR_CVM_BELOW_LIMIT](#ga0dad35a58403f4c8fa5087c586f655c5)   \"MagstripeCVM_belowLimit_DF812C\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gab4ad1694319aab79dd087cd77de574b9">TAG_DF812C_MSR_CVM_BELOW_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#adf50b490082b4ad86b03ed2e044f1b98">EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_belowLimit_DF812C</a>;. [More\...](#ga0dad35a58403f4c8fa5087c586f655c5)<br/> |
| #define  | [XML_TAG_AD_MK_DF8118_CHP_CVM_ABOVE_LIMIT](#ga674de16887b9c1b53311137e99ed4258)   \"ChipCVM_aboveLimit_DF8118\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gae26b009b2e8fbc3f96890a6f8f05f917">TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afd2cc1051e044d0ef00f4f0713abea9b">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118</a>;. [More\...](#ga674de16887b9c1b53311137e99ed4258)<br/> |
| #define  | [XML_TAG_AD_MK_DF8119_CHP_CVM_BELOW_LIMIT](#gaf62e2c41a80d5f8da1bd3583ab4c816a)   \"ChipCVM_belowLimit_DF8119\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga891bf29200fdd3a0e520e68bb06d5a8d">TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a51dce31dfdd9f05c79f0b3eba62cea89">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119</a>;. [More\...](#gaf62e2c41a80d5f8da1bd3583ab4c816a)<br/> |
| #define  | [XML_TAG_AD_MK_DF811F_SECURITY_CAP](#ga47293ac969e1d77e6f580e27d3921ad6)   \"SecurityCapability_DF811F\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gaf663ad885385fe9b0764fd5e159c1b3a">TAG_DF811F_SECURITY_CAPABILITY</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afb9be05d474bc208569ed6f61ea55a9f">EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F</a>;. [More\...](#ga47293ac969e1d77e6f580e27d3921ad6)<br/> |
| #define  | [XML_TAG_AD_MK_DF8117_CARD_DATA_INPUT_CAP](#gab6ec1862aa15b3add923e8b337d9b7ac)   \"CardDataInputCapability_DF8117\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga42b2457c0910cc5d33ad04ec5ca22974">TAG_DF8117_CARD_DATA_INPUT_CAPABILITY</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aae06d72d84f8cd4b1c6dbec8b6595e50">EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117</a>;. [More\...](#gab6ec1862aa15b3add923e8b337d9b7ac)<br/> |
| #define  | [XML_TAG_AD_MK_DF8123_FLOOR_LIMIT](#gad835bd5288af49a5c55005d5404a3c60)   \"FloorLimit_DF8123\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga7e3bc2b53045bb7f683762fdb53a4358">TAG_DF8123_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a120bc0b391b6eb0b1dc88076cd460664">EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123</a>\[6\];. [More\...](#gad835bd5288af49a5c55005d5404a3c60)<br/> |
| #define  | [XML_TAG_AD_MK_DF8124_TRX_LIMIT_NO_ON_DEVICE](#gab3652c4dcb2269ea391f48af807ab9b8)   \"TransactionLimitNoOnDevice_DF8124\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga97bfc09582df37b5cc75822f4efbfeb3">TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0c42a791bdd3497f5518e08ff7e6f18e">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124</a>\[6\];. [More\...](#gab3652c4dcb2269ea391f48af807ab9b8)<br/> |
| #define  | [XML_TAG_AD_MK_DF8125_TRX_LIMIT_ON_DEVICE](#ga05955203610c16665e7e35d8cc8f40ad)   \"TransactionLimitOnDevice_DF8125\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga55d133646b780225892a8e430d85ed71">TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aad3ddefb848e37af03377938289edbfc">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125</a>\[6\];. [More\...](#ga05955203610c16665e7e35d8cc8f40ad)<br/> |
| #define  | [XML_TAG_AD_MK_DF8126_CVM_REQUIRED_LIMIT](#gae98f6f8d3a08a02b10f56ef146a0757c)   \"CVMRequiredLimit_DF8126\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga30158fe6b585cce6e0f823d6f3893821">TAG_DF8126_CVM_REQUIRED_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb20a04d178dc35df1a42c2d564f2440">EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126</a>\[6\];. [More\...](#gae98f6f8d3a08a02b10f56ef146a0757c)<br/> |
| #define  | [XML_TAG_AD_MK_9F09_CHP_VERSION_NUMBER](#gaf92fe97cc679ad4ebd8205e4148a2a79)   \"ChipVersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afebfd05421c4847bf81521a92ac3d8ee">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipVersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#gaf92fe97cc679ad4ebd8205e4148a2a79)<br/> |
| #define  | [XML_TAG_AD_MK_9F6D_MSR_VERSION_NUMBER](#gad76b1e45cec75ddf20d98737db4215f0)   \"MSRVersionNumber_9F6D\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gad65f96e73f89dae30c874870e0f97cb2">TAG_9F6D_TRM_APP_MSR_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#adfde93ebf20039feac2f95c2d0184277">EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#gad76b1e45cec75ddf20d98737db4215f0)<br/> |
| #define  | [XML_TAG_AD_MK_DF811B_KERNEL_CONFIG](#gae39599e0c48154673795010e56baeeca)   \"KernelConfiguration_DF811B\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gaf54761e0bb859b84f08931b53ea2bcb3">TAG_DF811B_KERNEL_CONFIGURATION</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a896642c3eff7c8a2bb637aea4a3cf625">EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B</a>;. [More\...](#gae39599e0c48154673795010e56baeeca)<br/> |
| #define  | [XML_TAG_AD_MK_9F53_TRX_CATEGORY_CODE](#ga20f321574abf88bf5b95aac6165602ef)   \"TransactionCategoryCode_9F53\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga47396b01e28e3eadd46f0f1a5f79662e">TAG_9F53_TRANS_CATEGORY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac6b7c2240547bac95c5b696d14049a3b">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionCategoryCode_9F53</a>;. [More\...](#ga20f321574abf88bf5b95aac6165602ef)<br/> |
| #define  | [XML_TAG_AD_MK_DF8120_TAC_DEFAULT](#ga1af41111b9d9e730f45d217506dae165)   \"TACDefault_DF8120\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga8de41e2b23c67abd4560ad0e210ebcc0">TAG_DF8120_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7680fabfb53533dd8b3bb0c71a7484fe">EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120</a>\[5\];. [More\...](#ga1af41111b9d9e730f45d217506dae165)<br/> |
| #define  | [XML_TAG_AD_MK_DF8121_TAC_DENIAL](#ga8845dcd232cb753b238289d6deca349b)   \"TACDenial_DF8121\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gaf7567abd6f21a6c76f4cf7c5be314b34">TAG_DF8121_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a78079e1470342e9c9677c8cecb4e5580">EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121</a>\[5\];. [More\...](#ga8845dcd232cb753b238289d6deca349b)<br/> |
| #define  | [XML_TAG_AD_MK_DF8122_TAC_ONLINE](#gaecd8afc192ef31b6f853ac9f7cafea38)   \"TACOnline_DF8122\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga223085b47b7d8ef1a7f4ec69f9a32efb">TAG_DF8122_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa15ba42840580205287542f74ee37b66">EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122</a>\[5\];. [More\...](#gaecd8afc192ef31b6f853ac9f7cafea38)<br/> |
| #define  | [XML_TAG_AD_MK_DF810C_KERNEL_ID](#ga7c458a6f36024339052cca5c021a9498)   \"KernelID_DF810C\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga1ac3033fda29e12b9fecdc62b2744d46">TAG_DF810C_KERNEL_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ada17f52aa7c3dbdd8b774922168c09">EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C</a>;. [More\...](#ga7c458a6f36024339052cca5c021a9498)<br/> |
| #define  | [XML_TAG_AD_MK_9F1D_TRM_RISK_MGMT_DATA](#ga920f167d5422ff346ada24a3cd995037)   \"TerminalRiskManagementData_9F1D\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga9d809ba2d6c28d0989f1bbffffe35a45">TAG_9F1D_TRM_RISK_MNGT_DATA</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad71cd39800ac88311b925feaeafef835">EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalRiskManagementData_9F1D</a>\[8\];. [More\...](#ga920f167d5422ff346ada24a3cd995037)<br/> |
| #define  | [XML_TAG_AD_MK_9F15_MERCHANT_CATEGORY_CODE](#ga0168c4a6cd5939953ce0c53ec0f40f6d)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#ga0168c4a6cd5939953ce0c53ec0f40f6d)<br/> |
| #define  | [XML_TAG_AD_MK_9F16_MERCHANT_ID](#ga4d2be44d5cbfcf50e5a4b9bf9712d379)   \"MerchantIdentifier_9F16\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];. [More\...](#ga4d2be44d5cbfcf50e5a4b9bf9712d379)<br/> |
| #define  | [XML_TAG_AD_MK_9F4E_MERCHANT_NAME_LOCATION](#gaf3026c3abcf6207e0dfba11d2f9d36b0)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#gaf3026c3abcf6207e0dfba11d2f9d36b0)<br/> |
| #define  | [XML_TAG_AD_MK_9F01_ACQUIRER_ID](#ga814dd46185f7635ee55d0fb6827b0072)   \"AcquirerIdentifier_9F01\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_MK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];. [More\...](#ga814dd46185f7635ee55d0fb6827b0072)<br/> |
| #define  | [XML_TAG_AD_MK_DF8130_HOLD_TIME_VALUE](#gaba4d9f625deef205323f0f44832c745c)   \"HoldTimeValue_DF8130\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga14b2bd792d60d8cba426bccfc2546ffa">TAG_DF8130_HOLD_TIME_VALUE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a65466db9794ad80b1497f1d20d32e2e9">EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130</a>;. [More\...](#gaba4d9f625deef205323f0f44832c745c)<br/> |
| #define  | [XML_TAG_AD_MK_DF812D_MESSAGE_HOLD_TIME](#gaa4927f95fc990fd67a77c10e6dc084de)   \"MessageHoldTime_DF812D\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gab6639b6014ddbc22057a1ad2ed9f21f1">TAG_DF812D_MESSAGE_HOLD_TIME</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1b020166d324dd6547910c8a661ee8e0">EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D</a>\[3\];. [More\...](#gaa4927f95fc990fd67a77c10e6dc084de)<br/> |
| #define  | [XML_TAG_AD_MK_DF811C_TORN_TRX_LIFETIME](#gacbabddb1e6ff4c7830023a330ffe568a)   \"TornTransactionLifetime_DF811C\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga8aaa1d9ac0acc2a512ea7c4292942818">TAG_DF811C_TRN_TXN_LIFETIME</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae7ce805109961212fd3b81f2893f854c">EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C</a>\[2\];. [More\...](#gacbabddb1e6ff4c7830023a330ffe568a)<br/> |
| #define  | [XML_TAG_AD_MK_DF811D_TORN_TRX_NUMBER](#ga2fb175cddf554b8062606b2ce6821e6f)   \"TornTransactionNumber_DF811D\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gaafcebff672b6d27983cfd3ffe9568112">TAG_DF811D_TRN_TXN_NUMBER</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2961d7ec31ba7257e02df650186fa2cf">EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D</a>;. [More\...](#ga2fb175cddf554b8062606b2ce6821e6f)<br/> |
| #define  | [XML_TAG_AD_MK_DF8131_PHONE_MSG_TABLE](#ga62f573381dbe1a8096b0bf13ac15d38c)   \"PhoneMessageTable_DF8131\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga19265599710cf038895aea974b000166">TAG_DF8131_PHONE_MSG_TABLE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac229a9f37336fc77ec29829b7ef38d21">EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131</a>;. [More\...](#ga62f573381dbe1a8096b0bf13ac15d38c)<br/> |
| #define  | [XML_TAG_AD_MK_DF8112_TAGS_TO_READ](#ga5e877511d6aee528c98221bfb9cc410d)   \"TagsToRead_DF8112\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga634f6329a34aa4633f4514a41f31a0e3">TAG_DF8112_TAGS_TO_READ</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac3fe9ed51d7b7d75ea949a449311d7bd">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112</a>;. [More\...](#ga5e877511d6aee528c98221bfb9cc410d)<br/> |
| #define  | [XML_TAG_AD_MK_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC](#ga9745d646ebc264fa75a570d8f72640d4)   \"TagsToWriteBeforeGenAC_FF8102\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga91e87ea5c33e41742332a70c9e9b25e4">TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7521fa6374def935989383f7c5ce25e3">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102</a>;. [More\...](#ga9745d646ebc264fa75a570d8f72640d4)<br/> |
| #define  | [XML_TAG_AD_MK_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC](#ga70333473d53b60f7c75912d3e8f46d00)   \"TagsToWriteAfterGenAC_FF8103\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga59594ea453d6ad2452b61008edaf17f0">TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6bb13b23e1ca9c0f8f501dddcf36834e">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103</a>;. [More\...](#ga70333473d53b60f7c75912d3e8f46d00)<br/> |
| #define  | [XML_TAG_AD_MK_DF8110_PROCEED_TO_FIRST_WRITE_FLAG](#ga2e7c8e656c0332c2d1b9cdc4a81d5ba9)   \"ProceedToFirstWriteFlag_DF8110\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga3c18d291635a36adf3d61b16ad5e9ee2">TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a331f32df08bf0303f3cf092352d219ba">EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110</a>;. [More\...](#ga2e7c8e656c0332c2d1b9cdc4a81d5ba9)<br/> |
| #define  | [XML_TAG_AD_MK_9F5C_DS_REQUESTED_OPERATOR_ID](#gadd17e779f66be9a83b011d9e01ca2c51)   \"DSRequestedOperatorID_9F5C\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gae3ff1dcce86b00807abf063eb2a6de2f">TAG_9F5C_DS_REQUESTED_OPERATOR_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80e6584bda848e756f8c9d5a5b832812">EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C</a>;. [More\...](#gadd17e779f66be9a83b011d9e01ca2c51)<br/> |
| #define  | [XML_TAG_AD_MK_DF8127_DE_TIMEOUT_VALUE](#ga5802d19425a826ecf2cc785b5632ab0b)   \"DETimeoutValue_DF8127\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga4f61ce936421c5a1abfea829e94e5567">TAG_DF8127_DE_TIMEOUT_VALUE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5cc8d2ff01a1967ba0e0b5eba8e3487">EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127</a>;. [More\...](#ga5802d19425a826ecf2cc785b5632ab0b)<br/> |
| #define  | [XML_TAG_AD_MK_DFAB31_APP_FLOW_CAP](#gaf19d32e414b4c776e4341f53fb872c6a)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#gaf19d32e414b4c776e4341f53fb872c6a)<br/> |
| #define  | [XML_TAG_AD_MK_DF8132_RR_MIN_GRACE_PERIOD](#ga514dd5e769fa1ba0d808c97f804e3058)   \"RR_MinGracePeriod_DF8132\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gad002d7cb64f70850b6b57e2afe610eb2">TAG_DF8132_RR_MIN_GRACE_PERIOD</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2bb03c9482e6fc62c5683eaef07c8e37">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132</a>. [More\...](#ga514dd5e769fa1ba0d808c97f804e3058)<br/> |
| #define  | [XML_TAG_AD_MK_DF8133_RR_MAX_GRACE_PREIOD](#ga9d73f54e46c609b8216cc94d9a88aa47)   \"RR_MaxGracePeriod_DF8133\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gaff8cee533b36d5c16c57f9238ef5287f">TAG_DF8133_RR_MAX_GRACE_PERIOD</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a32193ead58f5038dbcb61f81eb5e28ae">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133</a>. [More\...](#ga9d73f54e46c609b8216cc94d9a88aa47)<br/> |
| #define  | [XML_TAG_AD_MK_DF8134_RR_EXP_TRANS_TIME_CAPDU](#gafc255d824c73f5a295a719cae5d3b4c1)   \"RR_ExpTransTimeCAPDU_DF8134\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gaeb20fef28673994edbc531e8e1deef45">TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af860b71c8466de6cfb4aaae655be44e4">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134</a>. [More\...](#gafc255d824c73f5a295a719cae5d3b4c1)<br/> |
| #define  | [XML_TAG_AD_MK_DF8135_RR_EXP_TRANS_TIME_RAPDU](#gaa445cffdf9aa2ba1c155ac70ffd742e4)   \"RR_ExpTransTimeRAPDU_DF8135\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga884b0eba03de051b0c696f740431e651">TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a99c98ba33d7b823984a9d3435666d65f">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135</a>. [More\...](#gaa445cffdf9aa2ba1c155ac70ffd742e4)<br/> |
| #define  | [XML_TAG_AD_MK_DF8136_RR_ACCURACY_THRESHOLD](#gaac645b02a3d5c525a2bd32b37b744877)   \"RR_AccuracyThreshold_DF8136\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gaa8edcf63c6c6e3573a87c1eb06d2c6b1">TAG_DF8136_RR_ACCURACY_THRESHOLD</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa07f0821f57d18b5d1a8c0c02ee1c62a">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136</a>. [More\...](#gaac645b02a3d5c525a2bd32b37b744877)<br/> |
| #define  | [XML_TAG_AD_MK_DF8137_RR_TT_MISMATCH_THRESHOLD](#ga03a3d5a2a2cdd2a2f324e0e7901c94ee)   \"RR_TransTimeMismatchThreshold_DF8137\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga13ac475cae84818b777e7d7a697f7001">TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae4e57b81456960fa9bf5ba1eef3bc0ff">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137</a>. [More\...](#ga03a3d5a2a2cdd2a2f324e0e7901c94ee)<br/> |
| #define  | [XML_TAG_AD_MK_9F7C_MERCHANT_CUSTOM_DATA](#ga1c65c23d0311f4bf5594df51e5c13c17)   \"MerchantCustomData_9F7C\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga347a4ace211c5abd340cc2c2f47e20f0">TAG_9F7C_MERCHANT_CUSTOM_DATA</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aec9159fa9d8ddc9e72887eec78e0466a">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C</a>. [More\...](#ga1c65c23d0311f4bf5594df51e5c13c17)<br/> |
| #define  | [XML_TAG_AD_VK](#gaaa318bf1c13d8ccef28b69e64bf681e9)   \"Visa\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_VK_STRUCT</a>. [More\...](#gaaa318bf1c13d8ccef28b69e64bf681e9)<br/> |
| #define  | [XML_TAG_AD_VK_9F1C_TERM_IDENT](#ga53fa0cc3a0521eb5fc10a0c95db8a47a)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_VK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga53fa0cc3a0521eb5fc10a0c95db8a47a)<br/> |
| #define  | [XML_TAG_AD_VK_9F1A_TERM_COUNTRY_CODE](#ga48eb194deea62714c82e31929beb28b0)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga48eb194deea62714c82e31929beb28b0)<br/> |
| #define  | [XML_TAG_AD_VK_9F35_TERM_TYPE](#gaa1800858b9442099a9fd38b24dd9674a)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalType_9F35</a>;. [More\...](#gaa1800858b9442099a9fd38b24dd9674a)<br/> |
| #define  | [XML_TAG_AD_VK_9F66_TERM_TRX_QUALIFIER](#gaa981a7d88bda70b2ff465f7b344b234c)   \"TerminalTransactionQualifier_9F66\" |
|   | TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66</a>\[4\];. [More\...](#gaa981a7d88bda70b2ff465f7b344b234c)<br/> |
| #define  | [XML_TAG_AD_VK_9F33_TERM_CAPS](#ga9313bc6ba628902d8a8908fe326f2399)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCapabilities_9F33</a>\[3\];. [More\...](#ga9313bc6ba628902d8a8908fe326f2399)<br/> |
| #define  | [XML_TAG_AD_VK_9F40_ADD_TERM_CAPS](#gacc84599daa188d787a6a01efe5a810df)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_VK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#gacc84599daa188d787a6a01efe5a810df)<br/> |
| #define  | [XML_TAG_AD_VK_9F09_VERSION_NUMBER](#ga4d0897a4bbe59c36fa7454b1ddaa78a5)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_VK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#ga4d0897a4bbe59c36fa7454b1ddaa78a5)<br/> |
| #define  | [XML_TAG_AD_VK_9F15_MERCHANT_CATEGORY_CODE](#ga45bfb73e6cf76f78a10c9e1e08e74d0e)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#ga45bfb73e6cf76f78a10c9e1e08e74d0e)<br/> |
| #define  | [XML_TAG_AD_VK_9F16_MERCHANT_ID](#ga7c59afd2adf52cc7dbe7a0dc3413e364)   \"MerchantIdentifier_9F16\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];. [More\...](#ga7c59afd2adf52cc7dbe7a0dc3413e364)<br/> |
| #define  | [XML_TAG_AD_VK_9F4E_MERCHANT_NAME_LOCATION](#gab22a58edf8edd9ad6baa077dc4441477)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#gab22a58edf8edd9ad6baa077dc4441477)<br/> |
| #define  | [XML_TAG_AD_VK_DFAB30_TEC_SUPPORT](#ga412989d5a92bfb08e8f240eaae1ed189)   \"TecSupport_DFAB30\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_VK_STRUCT::TecSupport_DFAB30</a>;. [More\...](#ga412989d5a92bfb08e8f240eaae1ed189)<br/> |
| #define  | [XML_TAG_AD_VK_DFAB31_APP_FLOW_CAP](#ga2adec076a8ca589a00714beedf923857)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga2adec076a8ca589a00714beedf923857)<br/> |
| #define  | [XML_TAG_AD_VK_DFAB40_CTLS_FLOOR_LIMIT](#gab988a26d6f3bb8d1d38259be42a9116a)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#gab988a26d6f3bb8d1d38259be42a9116a)<br/> |
| #define  | [XML_TAG_AD_VK_DFAB41_CTLS_TRX_LIMIT](#ga96c2005d60f9b020da6fa6482dfaeb43)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#ga96c2005d60f9b020da6fa6482dfaeb43)<br/> |
| #define  | [XML_TAG_AD_VK_DFAB42_CTLS_CVM_REQ_LIMIT](#gaa35158676fea4c9fe5ca7a0a7309fc96)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#gaa35158676fea4c9fe5ca7a0a7309fc96)<br/> |
| #define  | [XML_TAG_AD_VK_FFAB01_VISA_DRL_PARAMS](#ga73d67328f0497c4d5d2f02c173a8bfb7)   \"VisaDRLParams_FFAB01\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___c_o_n_s_t_r.md#ga6da72379bdf0faa5dfcec68ec4dd4510">TAG_FFAB01_DRL_PARAMETER</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a125164cdd7dd17625739afaed890ac0f">EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01</a>;. [More\...](#ga73d67328f0497c4d5d2f02c173a8bfb7)<br/> |
| #define  | [XML_TAG_AD_VK_9F5A_APP_PROGRAM_ID](#ga5914918bd7ebc3c12ae7cc9af1d888d3)   \"AppProgramId_9F5A\" |
|   | TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#gab2e09e3e34f3443924d6cd79016cadec">TAG_9F5A_APP_PROGRAM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8c51d5e8aa164e8c49dfb2eb67c5dd87">EMV_CTLS_VK_DRL_ENTRY_STRUCT::AppProgramId_9F5A</a>\[16\]. [More\...](#ga5914918bd7ebc3c12ae7cc9af1d888d3)<br/> |
| #define  | [XML_TAG_AD_VK_DFAB49_ON_OFF_SWITCH](#gaf3063c614db3a5c58e21e2851b1e48b2)   \"OnOffSwitch_DFAB49\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga8ce5508c4959532fae6923215be6b978">TAG_DFAB49_DRL_SWITCHES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5493acb97631eeed9d74e6b051db1da0">EMV_CTLS_VK_DRL_ENTRY_STRUCT::OnOffSwitch_DFAB49</a>. [More\...](#gaf3063c614db3a5c58e21e2851b1e48b2)<br/> |
| #define  | [XML_TAG_AD_AK](#ga17a18036c23a727d40c3db25f35dcef8)   \"AmericanExpress\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_AK_STRUCT</a>. [More\...](#ga17a18036c23a727d40c3db25f35dcef8)<br/> |
| #define  | [XML_TAG_AD_AK_9F1C_TERM_IDENT](#ga9c80a071ddf56b8c4dd869dd94d5b30c)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_AK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga9c80a071ddf56b8c4dd869dd94d5b30c)<br/> |
| #define  | [XML_TAG_AD_AK_9F1A_TERM_COUNTRY_CODE](#ga6fe642d9d709df7b57376de7199487fa)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga6fe642d9d709df7b57376de7199487fa)<br/> |
| #define  | [XML_TAG_AD_AK_9F35_TERM_TYPE](#ga51c286a0b3c558292d65d6d939cff9ce)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalType_9F35</a>;. [More\...](#ga51c286a0b3c558292d65d6d939cff9ce)<br/> |
| #define  | [XML_TAG_AD_AK_9F6D_AMEX_CTLS_READER_CAPS](#gae21e0f8806a8eecb7432962b8d6038c6)   \"AmexContactlessReaderCapabilities_9F6D\" |
|   | TLV tag: <a href="group___e_x_p_r_e_s_s_p_a_y___t_a_g_s.md#ga33be7c69a6e1ffd03b22640e08745fff">TAG_9F6D_AMEX_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aea125d099b77a199d403ce4f3e82b4cc">EMV_CTLS_APPLIDATA_AK_STRUCT::AmexContactlessReaderCapabilities_9F6D</a>;. [More\...](#gae21e0f8806a8eecb7432962b8d6038c6)<br/> |
| #define  | [XML_TAG_AD_AK_9F6E_AMEX_TERM_TRX_CAPS](#gae84a2ad6bbc9dec4ed44bf1a54705f42)   \"AmexTerminalTransactionCapabilities_9F6E\" |
|   | TLV tag: <a href="group___e_x_p_r_e_s_s_p_a_y___t_a_g_s.md#ga4ef2ef0cae4f0f667bd0eeccdf18faaf">TAG_9F6E_AMEX_ENHANCED_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5b96a70efc27aea80f2807131bc3232f">EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E</a>\[4\];. [More\...](#gae84a2ad6bbc9dec4ed44bf1a54705f42)<br/> |
| #define  | [XML_TAG_AD_AK_9F33_TERM_CAPS](#ga924ae20c6fa78f27f8ed8c0b3428aef4)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCapabilities_9F33</a>\[3\];. [More\...](#ga924ae20c6fa78f27f8ed8c0b3428aef4)<br/> |
| #define  | [XML_TAG_AD_AK_9F40_ADD_TERM_CAPS](#gae0b8027d5d821889d8b7e796992ac147)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_AK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#gae0b8027d5d821889d8b7e796992ac147)<br/> |
| #define  | [XML_TAG_AD_AK_9F09_VERSION_NUMBER](#gafac66550a33653a9120377200af2235a)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_AK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#gafac66550a33653a9120377200af2235a)<br/> |
| #define  | [XML_TAG_AD_AK_9F15_MERCHANT_CATEGORY_CODE](#gafa38c391e12dea85b0d25e46c4f4b0d0)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#gafa38c391e12dea85b0d25e46c4f4b0d0)<br/> |
| #define  | [XML_TAG_AD_AK_9F16_MERCHANT_ID](#gab75b5e728d31dec055075010ab6e3af7)   \"MerchantIdentifier_9F16\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];. [More\...](#gab75b5e728d31dec055075010ab6e3af7)<br/> |
| #define  | [XML_TAG_AD_AK_9F4E_MERCHANT_NAME_LOCATION](#ga3a2bbeff0fa2bcff8de27960707998e6)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#ga3a2bbeff0fa2bcff8de27960707998e6)<br/> |
| #define  | [XML_TAG_AD_AK_9F01_ACQUIRER_ID](#ga676f0b802fff9dc749b44bbbef18123c)   \"AcquirerIdentifier_9F01\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_AK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];. [More\...](#ga676f0b802fff9dc749b44bbbef18123c)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB30_TEC_SUPPORT](#ga0ade647bbd8447cbe4c0f219b02b487a)   \"TecSupport_DFAB30\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_AK_STRUCT::TecSupport_DFAB30</a>;. [More\...](#ga0ade647bbd8447cbe4c0f219b02b487a)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB31_APP_FLOW_CAP](#ga32a88b3afac8f2b2fc71cb34649c33f5)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga32a88b3afac8f2b2fc71cb34649c33f5)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB40_CTLS_FLOOR_LIMIT](#gac138bb1c91f02a072e00c491032047f0)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#gac138bb1c91f02a072e00c491032047f0)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB41_CTLS_TRX_LIMIT](#ga7a08e6b354dd3d1385721d27b1633c24)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#ga7a08e6b354dd3d1385721d27b1633c24)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB42_CTLS_CVM_REQ_LIMIT](#ga518e8182099c530f9d3db19cf7f81a44)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#ga518e8182099c530f9d3db19cf7f81a44)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB43_TAC_DEFAULT](#ga783b8ad05b92f4b240b35a48bd0b688a)   \"TACDefault_DFAB43\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_AK_STRUCT::TACDefault_DFAB43</a>\[5\];. [More\...](#ga783b8ad05b92f4b240b35a48bd0b688a)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB44_TAC_DENIAL](#ga5e5f4e29c2d3c20f82fee3c7e39606b7)   \"TACDenial_DFAB44\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_AK_STRUCT::TACDenial_DFAB44</a>\[5\];. [More\...](#ga5e5f4e29c2d3c20f82fee3c7e39606b7)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB45_TAC_ONLINE](#ga1c3c97b73fa777a9613b2202084bf0bd)   \"TACOnline_DFAB45\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_AK_STRUCT::TACOnline_DFAB45</a>\[5\];. [More\...](#ga1c3c97b73fa777a9613b2202084bf0bd)<br/> |
| #define  | [XML_TAG_AD_AK_FFAB01_AMEX_DRL_PARAMS](#ga7f84720f74906bb526e44d600a26b264)   \"AmexDRLParams_FFAB01\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___c_o_n_s_t_r.md#ga6da72379bdf0faa5dfcec68ec4dd4510">TAG_FFAB01_DRL_PARAMETER</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#adb7925c29affa71ae450ef807bd07e85">EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01</a>;. [More\...](#ga7f84720f74906bb526e44d600a26b264)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB49_ON_OFF_SWITCH](#gaa8e790cfa2ab971f3e87a1c36deedd85)   \"OnOffSwitch_DFAB49\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga8ce5508c4959532fae6923215be6b978">TAG_DFAB49_DRL_SWITCHES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5493acb97631eeed9d74e6b051db1da0">EMV_CTLS_AK_DRL_ENTRY_STRUCT::OnOffSwitch_DFAB49</a>. [More\...](#gaa8e790cfa2ab971f3e87a1c36deedd85)<br/> |
| #define  | [XML_TAG_AD_AK_DFAB52_UN_RANGE](#gadba0b407dde44ad12c5ee5e595dc9426)   \"UnpredictableNumberRange_DFAB52\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga7e1311335c8c779b33eac469bd872cf8">TAG_DFAB52_AMEX_UN_RANGE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8383422b1af609acd922faa1d9e3abe9">EMV_CTLS_APPLIDATA_AK_STRUCT::UnpredictableNumberRange_DFAB52</a>. [More\...](#gadba0b407dde44ad12c5ee5e595dc9426)<br/> |
| #define  | [XML_TAG_AD_JK](#ga074dda08c87cc2568dbff760c3e18f08)   \"JCB\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_JK_STRUCT</a>. [More\...](#ga074dda08c87cc2568dbff760c3e18f08)<br/> |
| #define  | [XML_TAG_AD_JK_9F1C_TERM_IDENT](#ga811c3fd7b7fd8139aec6d2e7583e009d)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_JK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga811c3fd7b7fd8139aec6d2e7583e009d)<br/> |
| #define  | [XML_TAG_AD_JK_9F1A_TERM_COUNTRY_CODE](#gaa29eb12f9dd67900cc6945726653372d)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#gaa29eb12f9dd67900cc6945726653372d)<br/> |
| #define  | [XML_TAG_AD_JK_9F35_TERM_TYPE](#gaf1c7553af9a7593377a58f24aa92e7ad)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalType_9F35</a>;. [More\...](#gaf1c7553af9a7593377a58f24aa92e7ad)<br/> |
| #define  | [XML_TAG_AD_JK_9F53_TERM_INTERCHANGE_PROFILE](#ga806231354823672dc45657ff4c517af9)   \"TerminalInterchangeProfile_9F53\" |
|   | TLV tag: <a href="group___j_k___t_a_g_s.md#ga46908b906437ae7972c9a6aa93f0678c">TAG_9F53_TRM_INTERCHANGE_PROFILE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a52036c4e132a0218b7947ec317ffccc8">EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalInterchangeProfile_9F53</a>\[3\];. [More\...](#ga806231354823672dc45657ff4c517af9)<br/> |
| #define  | [XML_TAG_AD_JK_9F15_MERCHANT_CATEGORY_CODE](#ga41b8b70578ff86c428eedf78b07714a5)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#ga41b8b70578ff86c428eedf78b07714a5)<br/> |
| #define  | [XML_TAG_AD_JK_9F4E_MERCHANT_NAME_LOCATION](#ga49e28d220767f0a20f63b019fbce8fa1)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#ga49e28d220767f0a20f63b019fbce8fa1)<br/> |
| #define  | [XML_TAG_AD_JK_9F01_ACQUIRER_ID](#gabe1cae8ec11ae1c91b63cdbc481e26fe)   \"AcquirerIdentifier_9F01\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_JK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];. [More\...](#gabe1cae8ec11ae1c91b63cdbc481e26fe)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB31_APP_FLOW_CAP](#ga1caa97b3cfa7a7be882358865d865b4a)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_JK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga1caa97b3cfa7a7be882358865d865b4a)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB40_CTLS_FLOOR_LIMIT](#gaba1256f652e84a529c26558bca5cb62e)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#gaba1256f652e84a529c26558bca5cb62e)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB41_CTLS_TRX_LIMIT](#ga0f6407252a7279735665028a81602532)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#ga0f6407252a7279735665028a81602532)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB42_CTLS_CVM_REQ_LIMIT](#ga0ca3a7cd27527dfd384e4ca9f39563a4)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#ga0ca3a7cd27527dfd384e4ca9f39563a4)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB43_TAC_DEFAULT](#gac7e6cbc6b7d6d56eb68a335a67c34690)   \"TACDefault_DFAB43\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_JK_STRUCT::TACDefault_DFAB43</a>\[5\];. [More\...](#gac7e6cbc6b7d6d56eb68a335a67c34690)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB44_TAC_DENIAL](#ga22fa06febc99f576174a834f60301956)   \"TACDenial_DFAB44\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_JK_STRUCT::TACDenial_DFAB44</a>\[5\];. [More\...](#ga22fa06febc99f576174a834f60301956)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB45_TAC_ONLINE](#ga0597d8e0ff8e76e41b8497f1f2966ce5)   \"TACOnline_DFAB45\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_JK_STRUCT::TACOnline_DFAB45</a>\[5\];. [More\...](#ga0597d8e0ff8e76e41b8497f1f2966ce5)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB46_RISK_MGMT_THRESHOLD](#ga53903aac8680f51b9c7d5181fe294dc4)   \"RiskManagementThreshold_DFAB46\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga03c938e159dbea0a48e833d5205f2529">TAG_DFAB46_RISK_MGMT_THRESHOLD</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a096278403e842d9b135643dcc67e834c">EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementThreshold_DFAB46</a>\[6\];. [More\...](#ga53903aac8680f51b9c7d5181fe294dc4)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB47_RISK_MGMT_TRGT_PERC](#ga4715e024fc44e2132cd82847c24fff78)   \"RiskManagementTargetPercentage_DFAB47\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4795ddca7a863da46b56a3a34d3b9c39">TAG_DFAB47_RISK_MGMT_TRGT_PRCT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac09806019918cd2daedef5834c88740">EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementTargetPercentage_DFAB47</a>;. [More\...](#ga4715e024fc44e2132cd82847c24fff78)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB48_RISK_MGMT_MAX_TRGT_PERC](#ga2acabba5ab730a21bce6342fd30554f0)   \"RiskManagementMaximumTargetPercentage_DFAB48\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gad755eca2cea7087042166526654c7291">TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ec4f8eae672a49ef9f5538dc86e3075">EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48</a>;. [More\...](#ga2acabba5ab730a21bce6342fd30554f0)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB4B_COMBINATION_OPTIONS](#gaef9991ee1eaa59f76b4f60a09277efed)   \"CombinationOptions_DFAB4B\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga9b6162a27a6c326c49610edda2e763c4">TAG_DFAB4B_COMBINATION_OPTIONS</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaa789d0a78a4161f4416a5cc853aa3f7">EMV_CTLS_APPLIDATA_JK_STRUCT::CombinationOptions_DFAB4B</a>\[2\];. [More\...](#gaef9991ee1eaa59f76b4f60a09277efed)<br/> |
| #define  | [XML_TAG_AD_JK_DFAB4C_REMOVAL_TIMEOUT](#ga6394544b1d23499095830af6cab5c6a9)   \"RemovalTimeout_DFAB4C\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga1b5114f265187889b782c5a8a86fb42b">TAG_DFAB4C_REMOVAL_TIMEOUT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af781e11637a7a71b447a2a282296b875">EMV_CTLS_APPLIDATA_JK_STRUCT::RemovalTimeout_DFAB4C</a>\[2\];. [More\...](#ga6394544b1d23499095830af6cab5c6a9)<br/> |
| #define  | [XML_TAG_AD_DK](#gac52c50c48fbb4a6cea92e7b671f829b0)   \"Discover\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_DK_STRUCT</a>. [More\...](#gac52c50c48fbb4a6cea92e7b671f829b0)<br/> |
| #define  | [XML_TAG_AD_DK_9F1C_TERM_IDENT](#ga928397e9050c00b4b44dba2d29b1fdac)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_DK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga928397e9050c00b4b44dba2d29b1fdac)<br/> |
| #define  | [XML_TAG_AD_DK_9F1A_TERM_COUNTRY_CODE](#ga6e1baba29149800acbb8e701d22f894b)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga6e1baba29149800acbb8e701d22f894b)<br/> |
| #define  | [XML_TAG_AD_DK_9F35_TERM_TYPE](#ga8ffc5928599ddf41c2d5e8f8d86b6ffc)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalType_9F35</a>;. [More\...](#ga8ffc5928599ddf41c2d5e8f8d86b6ffc)<br/> |
| #define  | [XML_TAG_AD_DK_9F66_TERM_TRX_QUALIFIER](#ga48b82c6f1000b62b79d28922946213f0)   \"TerminalTransactionQualifier_9F66\" |
|   | TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalTransactionQualifier_9F66</a>\[4\];. [More\...](#ga48b82c6f1000b62b79d28922946213f0)<br/> |
| #define  | [XML_TAG_AD_DK_9F33_TERM_CAPS](#ga1700c7b6c7bdf393277ffbb884f96b03)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCapabilities_9F33</a>\[3\];. [More\...](#ga1700c7b6c7bdf393277ffbb884f96b03)<br/> |
| #define  | [XML_TAG_AD_DK_9F40_ADD_TERM_CAPS](#gaee5ddd02d287fdd5124303aa70a4adcf)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_DK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#gaee5ddd02d287fdd5124303aa70a4adcf)<br/> |
| #define  | [XML_TAG_AD_DK_9F09_VERSION_NUMBER](#gaa4cf464050c637c55aa4ab1fb414b871)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_DK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#gaa4cf464050c637c55aa4ab1fb414b871)<br/> |
| #define  | [XML_TAG_AD_DK_9F15_MERCHANT_CATEGORY_CODE](#ga4bf6a8e6677e8500395ec704a9f82ee1)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_DK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#ga4bf6a8e6677e8500395ec704a9f82ee1)<br/> |
| #define  | [XML_TAG_AD_DK_DFAB30_TEC_SUPPORT](#ga22e8a67fe25578766bbfd87f04456f10)   \"TecSupport_DFAB30\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_DK_STRUCT::TecSupport_DFAB30</a>;. [More\...](#ga22e8a67fe25578766bbfd87f04456f10)<br/> |
| #define  | [XML_TAG_AD_DK_DFAB31_APP_FLOW_CAP](#ga6c0c74e3e5f896300add429e75e00b58)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga6c0c74e3e5f896300add429e75e00b58)<br/> |
| #define  | [XML_TAG_AD_DK_DFAB40_CTLS_FLOOR_LIMIT](#ga2f2be903486eb4d85795c86fa0dbf1cf)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#ga2f2be903486eb4d85795c86fa0dbf1cf)<br/> |
| #define  | [XML_TAG_AD_DK_DFAB41_CTLS_TRX_LIMIT](#gafe26dd9a5628ac1d6cdf8e8cbc4c3e57)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#gafe26dd9a5628ac1d6cdf8e8cbc4c3e57)<br/> |
| #define  | [XML_TAG_AD_DK_DFAB42_CTLS_CVM_REQ_LIMIT](#ga45a75b7302a4997d8669d0915f49cd15)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#ga45a75b7302a4997d8669d0915f49cd15)<br/> |
| #define  | [XML_TAG_AD_DK_DFAB58_CONTAINER_IDS](#ga69de9eacf4780bf3890b92243ed38bdf)   \"DataContainerReadIds_DFAB58\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab369deb5cfb1151b852c9fefd39f1137">TAG_DFAB58_ID_LIST</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a75fc0e5e9f1b2ed47fac2428b52dd514">EMV_CTLS_APPLIDATA_DK_STRUCT::DataContainerReadIds_DFAB58</a>. [More\...](#ga69de9eacf4780bf3890b92243ed38bdf)<br/> |
| #define  | [XML_TAG_AD_DK_DFAB59_CONTAINER_RANGES](#ga63af455594800b8a019404269bb3de22)   \"DataContainerReadRanges_DFAB59\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga9825a781e8501bf908e3a8bfef211740">TAG_DFAB59_RANGE_LIST</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a42894365d82316f9b26686c51b138665">EMV_CTLS_APPLIDATA_DK_STRUCT::DataContainerReadRanges_DFAB59</a>. [More\...](#ga63af455594800b8a019404269bb3de22)<br/> |
| #define  | [XML_TAG_AD_IK](#ga228e2df08d4f3e81ee3e1c4387dd5441)   \"Interac\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_IK_STRUCT</a>. [More\...](#ga228e2df08d4f3e81ee3e1c4387dd5441)<br/> |
| #define  | [XML_TAG_AD_IK_9F1C_TERM_IDENT](#ga27e4260b7bb5a452170ebbeb5cf0ded3)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_IK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga27e4260b7bb5a452170ebbeb5cf0ded3)<br/> |
| #define  | [XML_TAG_AD_IK_9F1A_TERM_COUNTRY_CODE](#gaa51ac4ec5003e26db37f3e1336fbc69d)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#gaa51ac4ec5003e26db37f3e1336fbc69d)<br/> |
| #define  | [XML_TAG_AD_IK_9F35_TERM_TYPE](#ga770655a2a970f56f1bed25354e9595b1)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalType_9F35</a>;. [More\...](#ga770655a2a970f56f1bed25354e9595b1)<br/> |
| #define  | [XML_TAG_AD_IK_9F33_TERM_CAPS](#ga9cc19ce570c1257db632de603cf1eb37)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCapabilities_9F33</a>\[3\];. [More\...](#ga9cc19ce570c1257db632de603cf1eb37)<br/> |
| #define  | [XML_TAG_AD_IK_9F40_ADD_TERM_CAPS](#ga9c75e9fcc832a061616dcb4f77a0be29)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_IK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#ga9c75e9fcc832a061616dcb4f77a0be29)<br/> |
| #define  | [XML_TAG_AD_IK_9F5F_CTLS_FLOOR_LIMIT](#gad9e32b4ef7874610f62cde5f7fd5ad04)   \"ContactlessFloorLimit_9F5F\" |
|   | TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#ga81000799324cec4dab00c2953f56cb3a">TAG_9F5F_READER_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa5083de092cef846211943e89a6ce570">EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessFloorLimit_9F5F</a>\[6\];. [More\...](#gad9e32b4ef7874610f62cde5f7fd5ad04)<br/> |
| #define  | [XML_TAG_AD_IK_9F58_MERCHANT_TYPE_INDICATOR](#ga83bf2a4f50b478fe7f24ab294ffad491)   \"MerchantTypeIndicator_9F58\" |
|   | TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#ga3ed9a0cea5a7839c74d034c22605ba7e">TAG_9F58_MERCH_TYPE_INDICATOR</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a465adca1bc35480a254eb4838faebcc3">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantTypeIndicator_9F58</a>;. [More\...](#ga83bf2a4f50b478fe7f24ab294ffad491)<br/> |
| #define  | [XML_TAG_AD_IK_9F59_TERM_TRX_INFORMATION](#ga4d116cfc05343a5d8ee9b89f92c4f185)   \"TerminalTransactionInformation_9F59\" |
|   | TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#ga265e19e0b9a6af6ef7419d91671beb5b">TAG_9F59_TERM_TRANS_INFO</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ade0c4ac55e26f27eac5de04d17e3abd4">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionInformation_9F59</a>\[3\];. [More\...](#ga4d116cfc05343a5d8ee9b89f92c4f185)<br/> |
| #define  | [XML_TAG_AD_IK_9F5A_TERM_TRX_TYPE](#ga646e748471e8288608d5769fe9dd313c)   \"TerminalTransactionType_9F5A\" |
|   | TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#gae3a0c1352ba2253bf4989940364d079c">TAG_9F5A_TERM_TRANS_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4f0a93ccab7b6ac23efaf3f217334b85">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionType_9F5A</a>;. [More\...](#ga646e748471e8288608d5769fe9dd313c)<br/> |
| #define  | [XML_TAG_AD_IK_9F5E_TERM_OPTION_STATUS](#ga409e8e927db674d5c8458bf6db056dfd)   \"TerminalOptionStatus_9F5E\" |
|   | TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#gadd1fedce8a2aa1b6490126943b541121">TAG_9F5E_TERM_OPTION_STATUS</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0cad3c3036a97f0d58b6833899a022ae">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalOptionStatus_9F5E</a>\[2\];. [More\...](#ga409e8e927db674d5c8458bf6db056dfd)<br/> |
| #define  | [XML_TAG_AD_IK_9F5D_RECEIPT_REQ_LIMIT](#ga7962ea536fd0508cd2cd0955e5b8c979)   \"ReceiptRequiredLimit_9F5D\" |
|   | TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#ga9f229147f1568804b2dd19cd5e107d86">TAG_9F5D_TERM_CTLS_RECEIPT_REQUIRED_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab8bfa6b648fce4c5fd7101c9204b609a">EMV_CTLS_APPLIDATA_IK_STRUCT::ReceiptRequiredLimit_9F5D</a>\[6\];. [More\...](#ga7962ea536fd0508cd2cd0955e5b8c979)<br/> |
| #define  | [XML_TAG_AD_IK_DF6D_TRY_AGAIN_LIMIT](#ga1e6bbadebd270422ab5222f2ec2c9196)   \"TryAgainLimit_DF6D\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga27032ebc43b42c7d230e78a6a7831bb1">TAG_DF6D_TRY_AGAIN_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab96b5ddc67e3ecf968b1d2896d8a2d8a">EMV_CTLS_APPLIDATA_IK_STRUCT::TryAgainLimit_DF6D</a>;. [More\...](#ga1e6bbadebd270422ab5222f2ec2c9196)<br/> |
| #define  | [XML_TAG_AD_IK_9F09_VERSION_NUMBER](#ga4166bcabd9830d1321276878d6e2823a)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_IK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#ga4166bcabd9830d1321276878d6e2823a)<br/> |
| #define  | [XML_TAG_AD_IK_9F15_MERCHANT_CATEGORY_CODE](#gadca32d657cb29e8e0ef8b8d32a0cbba8)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#gadca32d657cb29e8e0ef8b8d32a0cbba8)<br/> |
| #define  | [XML_TAG_AD_IK_9F16_MERCHANT_ID](#ga44bf5f652b41cae2028686e74ebb8ebb)   \"MerchantIdentifier_9F16\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];. [More\...](#ga44bf5f652b41cae2028686e74ebb8ebb)<br/> |
| #define  | [XML_TAG_AD_IK_9F4E_MERCHANT_NAME_LOCATION](#gae7f91e9fb5bdd3bc6023f376a973bb41)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#gae7f91e9fb5bdd3bc6023f376a973bb41)<br/> |
| #define  | [XML_TAG_AD_IK_9F01_ACQUIRER_ID](#ga030442dc1c8df310eecd2981616c41be)   \"AcquirerIdentifier_9F01\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_IK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];. [More\...](#ga030442dc1c8df310eecd2981616c41be)<br/> |
| #define  | [XML_TAG_AD_IK_DFAB31_APP_FLOW_CAP](#ga39b97f952caa9ef1a4ae3e1c10d2d28a)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga39b97f952caa9ef1a4ae3e1c10d2d28a)<br/> |
| #define  | [XML_TAG_AD_IK_DFAB41_CTLS_TRX_LIMIT](#gab4e2d085447febdab8f1a7e0c2a7b4c8)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#gab4e2d085447febdab8f1a7e0c2a7b4c8)<br/> |
| #define  | [XML_TAG_AD_IK_DFAB42_CTLS_CVM_REQ_LIMIT](#gab1a49c963a7c28c6255eb987cf880957)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#gab1a49c963a7c28c6255eb987cf880957)<br/> |
| #define  | [XML_TAG_AD_IK_DFAB43_TAC_DEFAULT](#ga8fc01943af2551fcd23d114fa4f1c2de)   \"TACDefault_DFAB43\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_IK_STRUCT::TACDefault_DFAB43</a>\[5\];. [More\...](#ga8fc01943af2551fcd23d114fa4f1c2de)<br/> |
| #define  | [XML_TAG_AD_IK_DFAB44_TAC_DENIAL](#gaf2d47c7219cf71ca36e8d20213d1639a)   \"TACDenial_DFAB44\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_IK_STRUCT::TACDenial_DFAB44</a>\[5\];. [More\...](#gaf2d47c7219cf71ca36e8d20213d1639a)<br/> |
| #define  | [XML_TAG_AD_IK_DFAB45_TAC_ONLINE](#ga881bb1e00d9e2f29fce8271f583ca4d6)   \"TACOnline_DFAB45\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_IK_STRUCT::TACOnline_DFAB45</a>\[5\];. [More\...](#ga881bb1e00d9e2f29fce8271f583ca4d6)<br/> |
| #define  | [XML_TAG_AD_IK_DFAB46_RISK_MGMT_THRESHOLD](#gafbe07df7a7ae8a14f8b9a67fc56c8bb5)   \"RiskManagementThreshold_DFAB46\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga03c938e159dbea0a48e833d5205f2529">TAG_DFAB46_RISK_MGMT_THRESHOLD</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a096278403e842d9b135643dcc67e834c">EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementThreshold_DFAB46</a>\[6\];. [More\...](#gafbe07df7a7ae8a14f8b9a67fc56c8bb5)<br/> |
| #define  | [XML_TAG_AD_IK_DFAB47_RISK_MGMT_TRGT_PERC](#ga8b3e985e5f2a715d0558a5ed25689da5)   \"RiskManagementTargetPercentage_DFAB47\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4795ddca7a863da46b56a3a34d3b9c39">TAG_DFAB47_RISK_MGMT_TRGT_PRCT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac09806019918cd2daedef5834c88740">EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementTargetPercentage_DFAB47</a>;. [More\...](#ga8b3e985e5f2a715d0558a5ed25689da5)<br/> |
| #define  | [XML_TAG_AD_IK_DFAB48_RISK_MGMT_MAX_TRGT_PERC](#gaeb436e2d4974f7810a79ff268526bdca)   \"RiskManagementMaximumTargetPercentage_DFAB48\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gad755eca2cea7087042166526654c7291">TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ec4f8eae672a49ef9f5538dc86e3075">EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48</a>;. [More\...](#gaeb436e2d4974f7810a79ff268526bdca)<br/> |
| #define  | [XML_TAG_AD_EK](#ga49f682eafc0d274b1382ea692fb17e89)   \"EPAL\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_EK_STRUCT</a>. [More\...](#ga49f682eafc0d274b1382ea692fb17e89)<br/> |
| #define  | [XML_TAG_AD_EK_9F1C_TERM_IDENT](#ga5ad7d818060229ce7bcf711eb54740c3)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_EK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga5ad7d818060229ce7bcf711eb54740c3)<br/> |
| #define  | [XML_TAG_AD_EK_9F1A_TERM_COUNTRY_CODE](#gab34efe3fb77ab818e77e627c99d7c6bf)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#gab34efe3fb77ab818e77e627c99d7c6bf)<br/> |
| #define  | [XML_TAG_AD_EK_9F35_TERM_TYPE](#ga2777c7d1e2518b62676c628e348e5ba3)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalType_9F35</a>;. [More\...](#ga2777c7d1e2518b62676c628e348e5ba3)<br/> |
| #define  | [XML_TAG_AD_EK_9F33_TERM_CAPS](#ga59db09138e122abb6e69bfc5c7339a48)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCapabilities_9F33</a>\[3\];. [More\...](#ga59db09138e122abb6e69bfc5c7339a48)<br/> |
| #define  | [XML_TAG_AD_EK_9F40_ADD_TERM_CAPS](#ga844dcde751de1774b1712c463c383fdc)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_EK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#ga844dcde751de1774b1712c463c383fdc)<br/> |
| #define  | [XML_TAG_AD_EK_9F09_VERSION_NUMBER](#ga8710d5e932cbc43f44c4ac6d0c8058bb)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_EK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#ga8710d5e932cbc43f44c4ac6d0c8058bb)<br/> |
| #define  | [XML_TAG_AD_EK_9F15_MERCHANT_CATEGORY_CODE](#ga024c405a2206ac9ce9ed8a92e56bcf6e)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#ga024c405a2206ac9ce9ed8a92e56bcf6e)<br/> |
| #define  | [XML_TAG_AD_EK_9F16_MERCHANT_ID](#gaab8463b0320abb66a4f5f3a9fd6f37e3)   \"MerchantIdentifier_9F16\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];. [More\...](#gaab8463b0320abb66a4f5f3a9fd6f37e3)<br/> |
| #define  | [XML_TAG_AD_EK_9F4E_MERCHANT_NAME_LOCATION](#gad4e32222f2f8bf15c03e64fc3373db73)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#gad4e32222f2f8bf15c03e64fc3373db73)<br/> |
| #define  | [XML_TAG_AD_EK_9F01_ACQUIRER_ID](#gadbcbafcc9b33e748d692d0df86357bf3)   \"AcquirerIdentifier_9F01\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_EK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];. [More\...](#gadbcbafcc9b33e748d692d0df86357bf3)<br/> |
| #define  | [XML_TAG_AD_EK_9F66_TERM_TRX_QUALIFIER](#gad466b4b062f6af80b154ced47fe4c5ab)   \"TerminalTransactionQualifier_9F66\" |
|   | TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalTransactionQualifier_9F66</a>. [More\...](#gad466b4b062f6af80b154ced47fe4c5ab)<br/> |
| #define  | [XML_TAG_AD_EK_DFAB31_APP_FLOW_CAP](#gaf6e645b1bbcefa10eff4de8d38306f20)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_EK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#gaf6e645b1bbcefa10eff4de8d38306f20)<br/> |
| #define  | [XML_TAG_AD_EK_DFAB40_CTLS_FLOOR_LIMIT](#gacfe34ee3395dd70e7fb6512a471e859e)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_EK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#gacfe34ee3395dd70e7fb6512a471e859e)<br/> |
| #define  | [XML_TAG_AD_EK_DFAB41_CTLS_TRX_LIMIT](#ga50af1b8ce8ba9da1d75ca55e57a1b8a3)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_EK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#ga50af1b8ce8ba9da1d75ca55e57a1b8a3)<br/> |
| #define  | [XML_TAG_AD_EK_DFAB43_TAC_DEFAULT](#ga69072c39cfdb4b04db6d13510f201629)   \"TACDefault_DFAB43\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_EK_STRUCT::TACDefault_DFAB43</a>\[5\];. [More\...](#ga69072c39cfdb4b04db6d13510f201629)<br/> |
| #define  | [XML_TAG_AD_EK_DFAB44_TAC_DENIAL](#ga2d14b2e41841162ffc0ebacfaf28b2fb)   \"TACDenial_DFAB44\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_EK_STRUCT::TACDenial_DFAB44</a>\[5\];. [More\...](#ga2d14b2e41841162ffc0ebacfaf28b2fb)<br/> |
| #define  | [XML_TAG_AD_EK_DFAB45_TAC_ONLINE](#ga40f45a0974e12d0562635c365b72dc70)   \"TACOnline_DFAB45\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_EK_STRUCT::TACOnline_DFAB45</a>\[5\];. [More\...](#ga40f45a0974e12d0562635c365b72dc70)<br/> |
| #define  | [XML_TAG_AD_EK_DFAB4A_CTLS_TRX_LIMIT_CASH](#ga146b16861780544f80cd7e3489c4555d)   \"CtlsTransactionLimitCash_DFAB4A\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gade3e980a887d630e918a1d9dd8e43cd8">TAG_DFAB4A_CTLS_TRX_LIMIT_CASH</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab0b0ace23f2e8fe449e00e34ad477c69">EMV_CTLS_APPLIDATA_EK_STRUCT::CtlsTransactionLimitCash_DFAB4A</a>\[6\];. [More\...](#ga146b16861780544f80cd7e3489c4555d)<br/> |
| #define  | [XML_TAG_AD_PK](#ga32fb01c036e8a5dc0dbe7f9328b855ec)   \"VisaAsiaPacific\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_PK_STRUCT</a>. [More\...](#ga32fb01c036e8a5dc0dbe7f9328b855ec)<br/> |
| #define  | [XML_TAG_AD_PK_9F1C_TERM_IDENT](#ga03eaf6b7c271502273c265bae804cbb0)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_PK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga03eaf6b7c271502273c265bae804cbb0)<br/> |
| #define  | [XML_TAG_AD_PK_9F1A_TERM_COUNTRY_CODE](#ga656756c4b4bda82043b5bae8f9e2addb)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_PK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga656756c4b4bda82043b5bae8f9e2addb)<br/> |
| #define  | [XML_TAG_AD_PK_9F35_TERM_TYPE](#ga074be4d4e067f50091e050bd7645886b)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_PK_STRUCT::TerminalType_9F35</a>;. [More\...](#ga074be4d4e067f50091e050bd7645886b)<br/> |
| #define  | [XML_TAG_AD_PK_CVM_REQUIREMENTS](#gad761c0a874844a3d2a187368159cbc90)   \"CvmRequirements_DF04\" |
|   | TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#gad00d4584c8dece99bc5afe17252560c0">TAG_DF04_PK_CVM_REQUIREMENTS</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afbcb816298915570ae5e47a12805913d">EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04</a>;. [More\...](#gad761c0a874844a3d2a187368159cbc90)<br/> |
| #define  | [XML_TAG_AD_PK_DFAB31_APP_FLOW_CAP](#ga528da5c0d59eebb9f280e13f6ea71c2a)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga528da5c0d59eebb9f280e13f6ea71c2a)<br/> |
| #define  | [XML_TAG_AD_PK_DF02_CTLS_FLOOR_LIMIT](#gabf0616ab6cec0a1f99e3e993852d806f)   \"ContactlessFloorLimit_DF02\" |
|   | TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#gaefbade1401fdfc9c4f1f95779a8a8262">TAG_DF02_PK_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5cd219dce6240490e80e2580f9328966">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02</a>\[6\];. [More\...](#gabf0616ab6cec0a1f99e3e993852d806f)<br/> |
| #define  | [XML_TAG_AD_PK_DFAB41_CTLS_TRX_LIMIT](#gadd4639f125bed99ae80725fe4c00a556)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#gadd4639f125bed99ae80725fe4c00a556)<br/> |
| #define  | [XML_TAG_AD_PK_DF01_CTLS_CVM_REQ_LIMIT](#ga4444c90a462dafc4f97afe711a76c178)   \"ContactlessCVMRequiredLimit_DF01\" |
|   | TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga7c31703a767a4eb7a8de7a708f601633">TAG_DF01_PK_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aebed9ba683c113382c9a5c521d63ec27">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01</a>\[6\];. [More\...](#ga4444c90a462dafc4f97afe711a76c178)<br/> |
| #define  | [XML_TAG_AD_CK](#gae4c0c56c9a158bea2e90cda699be7d61)   \"ChinaUnionPay\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_CK_STRUCT</a>. [More\...](#gae4c0c56c9a158bea2e90cda699be7d61)<br/> |
| #define  | [XML_TAG_AD_CK_9F1C_TERM_IDENT](#gabb763b4c07f1921b9a2a348e96f7dc1b)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_CK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#gabb763b4c07f1921b9a2a348e96f7dc1b)<br/> |
| #define  | [XML_TAG_AD_CK_9F1A_TERM_COUNTRY_CODE](#ga4f12f92305877ef7300c9c457722e188)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga4f12f92305877ef7300c9c457722e188)<br/> |
| #define  | [XML_TAG_AD_CK_9F35_TERM_TYPE](#ga60549eb1d1ac164be143fb43d60ec24a)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalType_9F35</a>;. [More\...](#ga60549eb1d1ac164be143fb43d60ec24a)<br/> |
| #define  | [XML_TAG_AD_CK_9F66_TERM_TRX_QUALIFIER](#ga90082353125c3c8dd07c3b01b8ec301a)   \"TerminalTransactionQualifier_9F66\" |
|   | TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalTransactionQualifier_9F66</a>\[4\];. [More\...](#ga90082353125c3c8dd07c3b01b8ec301a)<br/> |
| #define  | [XML_TAG_AD_CK_9F33_TERM_CAPS](#ga38f0d0171e00010507d5df2d89ab8f90)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCapabilities_9F33</a>\[3\];. [More\...](#ga38f0d0171e00010507d5df2d89ab8f90)<br/> |
| #define  | [XML_TAG_AD_CK_9F40_ADD_TERM_CAPS](#ga38f03f6e8bf816f16c77d89fbe245f51)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_CK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#ga38f03f6e8bf816f16c77d89fbe245f51)<br/> |
| #define  | [XML_TAG_AD_CK_9F09_VERSION_NUMBER](#gac562a71249d3ec24c5237daec0b95755)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_CK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#gac562a71249d3ec24c5237daec0b95755)<br/> |
| #define  | [XML_TAG_AD_CK_9F15_MERCHANT_CATEGORY_CODE](#ga36be6d44c2867d5e10835d59b40ab9f3)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#ga36be6d44c2867d5e10835d59b40ab9f3)<br/> |
| #define  | [XML_TAG_AD_CK_9F16_MERCHANT_ID](#ga43c02bda4f5f48f86091883328a7d6b9)   \"MerchantIdentifier_9F16\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];. [More\...](#ga43c02bda4f5f48f86091883328a7d6b9)<br/> |
| #define  | [XML_TAG_AD_CK_9F4E_MERCHANT_NAME_LOCATION](#gacdc261cc444eb24d122db2f09f775955)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#gacdc261cc444eb24d122db2f09f775955)<br/> |
| #define  | [XML_TAG_AD_CK_DFAB30_TEC_SUPPORT](#ga408d6bbb52e3bcb7e168dc8754310dce)   \"TecSupport_DFAB30\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_CK_STRUCT::TecSupport_DFAB30</a>;. [More\...](#ga408d6bbb52e3bcb7e168dc8754310dce)<br/> |
| #define  | [XML_TAG_AD_CK_DFAB31_APP_FLOW_CAP](#gae1357f3c61e124527dbd203266e3256a)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#gae1357f3c61e124527dbd203266e3256a)<br/> |
| #define  | [XML_TAG_AD_CK_DFAB40_CTLS_FLOOR_LIMIT](#ga71d5585a35420f1a6d2d8959ee92fb5c)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#ga71d5585a35420f1a6d2d8959ee92fb5c)<br/> |
| #define  | [XML_TAG_AD_CK_DFAB41_CTLS_TRX_LIMIT](#ga50ee28f6cdd3f7c7b7bebdfe8573be63)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#ga50ee28f6cdd3f7c7b7bebdfe8573be63)<br/> |
| #define  | [XML_TAG_AD_CK_DFAB42_CTLS_CVM_REQ_LIMIT](#gacfb8c3923d60ae1d49434972e8e52236)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#gacfb8c3923d60ae1d49434972e8e52236)<br/> |
| #define  | [XML_TAG_AD_GK](#gaa3dffe9145547b173faccc03005a326d)   \"Gemalto\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_GK_STRUCT</a>. [More\...](#gaa3dffe9145547b173faccc03005a326d)<br/> |
| #define  | [XML_TAG_AD_GK_9F1C_TERM_IDENT](#ga71a899a0eccb54155e8930c0e26de482)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_GK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga71a899a0eccb54155e8930c0e26de482)<br/> |
| #define  | [XML_TAG_AD_GK_9F1A_TERM_COUNTRY_CODE](#ga1d0a518868fe204d9d921b3941d7c3cf)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga1d0a518868fe204d9d921b3941d7c3cf)<br/> |
| #define  | [XML_TAG_AD_GK_9F35_TERM_TYPE](#gac89361521e63e70348b050c462665100)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalType_9F35</a>;. [More\...](#gac89361521e63e70348b050c462665100)<br/> |
| #define  | [XML_TAG_AD_GK_9F33_TERM_CAPS](#gac0a046c21b3863037c7cbf760750d386)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCapabilities_9F33</a>\[3\];. [More\...](#gac0a046c21b3863037c7cbf760750d386)<br/> |
| #define  | [XML_TAG_AD_GK_9F40_ADD_TERM_CAPS](#gad16948bf4d61ee6d8737ac8e67060ec3)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_GK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#gad16948bf4d61ee6d8737ac8e67060ec3)<br/> |
| #define  | [XML_TAG_AD_GK_9F09_VERSION_NUMBER](#ga9f90e9ea9f6360fd0208a4dfbeba683b)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_GK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#ga9f90e9ea9f6360fd0208a4dfbeba683b)<br/> |
| #define  | [XML_TAG_AD_GK_9F15_MERCHANT_CATEGORY_CODE](#ga5369c41b68e46cc19c325115912bac32)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#ga5369c41b68e46cc19c325115912bac32)<br/> |
| #define  | [XML_TAG_AD_GK_9F16_MERCHANT_ID](#gac1bb144adc2653138a5d221d89f0f139)   \"MerchantIdentifier_9F16\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];. [More\...](#gac1bb144adc2653138a5d221d89f0f139)<br/> |
| #define  | [XML_TAG_AD_GK_9F4E_MERCHANT_NAME_LOCATION](#gaa34740f14411558198e76e629f70126e)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#gaa34740f14411558198e76e629f70126e)<br/> |
| #define  | [XML_TAG_AD_GK_9F01_ACQUIRER_ID](#ga0b9b71f4b415c702c66dbe52b58e1d9a)   \"AcquirerIdentifier_9F01\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_GK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];. [More\...](#ga0b9b71f4b415c702c66dbe52b58e1d9a)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB31_APP_FLOW_CAP](#ga9025b678cb552e7cdb9133c6fbc60aff)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga9025b678cb552e7cdb9133c6fbc60aff)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB40_CTLS_FLOOR_LIMIT](#gad5a142e306c40a81cb5f5986069c4bfc)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#gad5a142e306c40a81cb5f5986069c4bfc)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB41_CTLS_TRX_LIMIT](#ga7ea0e83ecff59bbd009d331cc31c0647)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#ga7ea0e83ecff59bbd009d331cc31c0647)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB42_CTLS_CVM_REQ_LIMIT](#ga7d6b4f17a1904736399baf34f94e6749)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#ga7d6b4f17a1904736399baf34f94e6749)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB43_TAC_DEFAULT](#ga29c4978ee625a1f641cfaeaf9823b64f)   \"TACDefault_DFAB43\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_GK_STRUCT::TACDefault_DFAB43</a>\[5\];. [More\...](#ga29c4978ee625a1f641cfaeaf9823b64f)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB44_TAC_DENIAL](#ga2a31d620fb4e9707de90298ea3a4124e)   \"TACDenial_DFAB44\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_GK_STRUCT::TACDenial_DFAB44</a>\[5\];. [More\...](#ga2a31d620fb4e9707de90298ea3a4124e)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB45_TAC_ONLINE](#ga63c5be8d24f0d963a67883d76c265083)   \"TACOnline_DFAB45\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_GK_STRUCT::TACOnline_DFAB45</a>\[5\];. [More\...](#ga63c5be8d24f0d963a67883d76c265083)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB4F_CTLS_APP_KERN_CAP](#ga863baf8eb302dd159c5f629d7401411a)   \"CtlsAppKernelCap_DFAB4F\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gabd7f05113879dd0978d4a67080016d9e">TAG_DFAB4F_PURE_CTLS_APP_KERN_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac413df6ede2a33de7f7767bb9161bb40">EMV_CTLS_APPLIDATA_GK_STRUCT::CtlsAppKernelCap_DFAB4F</a>. [More\...](#ga863baf8eb302dd159c5f629d7401411a)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB50_MTOL](#ga92ffbadf7b761e40d950431f58f4794b)   \"MTOL_DFAB50\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga8d850ebb1abbb370cbdf60477d618496">TAG_DFAB50_PURE_MTOL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae3e0a5935877843b845d87ecab5c0ae5">EMV_CTLS_APPLIDATA_GK_STRUCT::MTOL_DFAB50</a>. [More\...](#ga92ffbadf7b761e40d950431f58f4794b)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB51_DEFAULT_DDOL](#gaa4c13f6009eb173848f2eed3c6da7ed6)   \"DefaultDDOL_DFAB51\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaaee6cefc61301ecd90247b1a26496c0f">TAG_DFAB51_CTLS_DEFAULT_DDOL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9e117a7d71c637dad1fe6c0e7f0ff778">EMV_CTLS_APPLIDATA_GK_STRUCT::DefaultDDOL_DFAB51</a>. [More\...](#gaa4c13f6009eb173848f2eed3c6da7ed6)<br/> |
| #define  | [XML_TAG_AD_GK_9F76_TERMINAL_TRX_DATA](#ga06cd7b3424986d36028e8081fd84c2d8)   \"TerminalTransactionData_9F76\" |
|   | TLV tag: <a href="group___g_e_m_a_l_t_o___t_a_g_s.md#ga2481f5687b7d5ecaef77e9b9bdca2155">TAG_9F76_PURE_TERM_TRX_DATA</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaecc0e86802f7f72a49f6d0541c47ce8">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalTransactionData_9F76</a>. [More\...](#ga06cd7b3424986d36028e8081fd84c2d8)<br/> |
| #define  | [XML_TAG_AD_GK_DFAB5A_APPLI_AUTH_TRX_TYPE](#ga90254669672c94baecb8b6d6c57ed1e8)   \"AppliAuthTransType_DFAB5A\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga244302289feb32ded58d5f1e232b41af">TAG_DFAB5A_PURE_APPLI_AUTH_TRX_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aefd03a6ffe405efa9370adf010e8d5ec">EMV_CTLS_APPLIDATA_GK_STRUCT::AppliAuthTransType_DFAB5A</a>. [More\...](#ga90254669672c94baecb8b6d6c57ed1e8)<br/> |
| #define  | [XML_TAG_AD_RK](#ga25825fbd315fa86ce226a660e420743a)   \"RuPay\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_RK_STRUCT</a>. [More\...](#ga25825fbd315fa86ce226a660e420743a)<br/> |
| #define  | [XML_TAG_AD_RK_9F1C_TERM_IDENT](#ga17cdff6c87c85c3759258472a5f6557b)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_RK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga17cdff6c87c85c3759258472a5f6557b)<br/> |
| #define  | [XML_TAG_AD_RK_9F1A_TERM_COUNTRY_CODE](#ga95f86e65eb334dea43577a0a21b745ab)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga95f86e65eb334dea43577a0a21b745ab)<br/> |
| #define  | [XML_TAG_AD_RK_9F35_TERM_TYPE](#gae07b4f85c06af6cff2a8beb242780caf)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalType_9F35</a>;. [More\...](#gae07b4f85c06af6cff2a8beb242780caf)<br/> |
| #define  | [XML_TAG_AD_RK_9F33_TERM_CAPS](#ga94603469b3e573ca698cadc97a1c2372)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCapabilities_9F33</a>\[3\];. [More\...](#ga94603469b3e573ca698cadc97a1c2372)<br/> |
| #define  | [XML_TAG_AD_RK_9F40_ADD_TERM_CAPS](#ga2f80312f8aee9fccf8e19265c10ca539)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#ga2f80312f8aee9fccf8e19265c10ca539)<br/> |
| #define  | [XML_TAG_AD_RK_9F09_VERSION_NUMBER](#ga66d7ee35bacdd6610fe29728b1dc90db)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_RK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#ga66d7ee35bacdd6610fe29728b1dc90db)<br/> |
| #define  | [XML_TAG_AD_RK_9F15_MERCHANT_CATEGORY_CODE](#gab20d73b6497cd64bf2519e2722ad0105)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_RK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#gab20d73b6497cd64bf2519e2722ad0105)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB31_APP_FLOW_CAP](#ga9178725a98ac9074056ed23575774f8c)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga9178725a98ac9074056ed23575774f8c)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB40_CTLS_FLOOR_LIMIT](#ga426e907f5ea4b32a24c228d2893e0c8b)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#ga426e907f5ea4b32a24c228d2893e0c8b)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB41_CTLS_TRX_LIMIT](#ga30b70c64049c5e3acd724d57c5f4fded)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#ga30b70c64049c5e3acd724d57c5f4fded)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB42_CTLS_CVM_REQ_LIMIT](#ga76930fffe2d21abf332b982311f998d7)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#ga76930fffe2d21abf332b982311f998d7)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB43_TAC_DEFAULT](#ga78b11b0a33ce31c38c91bc38f3915dfe)   \"TACDefault_DFAB43\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_RK_STRUCT::TACDefault_DFAB43</a>\[5\];. [More\...](#ga78b11b0a33ce31c38c91bc38f3915dfe)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB44_TAC_DENIAL](#gac3e0ed0f97337d240b64282e11c3c229)   \"TACDenial_DFAB44\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_RK_STRUCT::TACDenial_DFAB44</a>\[5\];. [More\...](#gac3e0ed0f97337d240b64282e11c3c229)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB45_TAC_ONLINE](#gae06a2076329f552598a8e87fff201ff9)   \"TACOnline_DFAB45\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_RK_STRUCT::TACOnline_DFAB45</a>\[5\];. [More\...](#gae06a2076329f552598a8e87fff201ff9)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB46_RISK_MGMT_THRESHOLD](#ga9575d0193a811ccf006c807aeaacefc7)   \"RiskManagementThreshold_DFAB46\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga03c938e159dbea0a48e833d5205f2529">TAG_DFAB46_RISK_MGMT_THRESHOLD</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a096278403e842d9b135643dcc67e834c">EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementThreshold_DFAB46</a>\[6\];. [More\...](#ga9575d0193a811ccf006c807aeaacefc7)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB47_RISK_MGMT_TRGT_PERC](#ga6bf3fa9d70bdbe4a07bf6f9c57123897)   \"RiskManagementTargetPercentage_DFAB47\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4795ddca7a863da46b56a3a34d3b9c39">TAG_DFAB47_RISK_MGMT_TRGT_PRCT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac09806019918cd2daedef5834c88740">EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementTargetPercentage_DFAB47</a>;. [More\...](#ga6bf3fa9d70bdbe4a07bf6f9c57123897)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB48_RISK_MGMT_MAX_TRGT_PERC](#ga5f3ec698e668ad3b0d6df80d831ce946)   \"RiskManagementMaximumTargetPercentage_DFAB48\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gad755eca2cea7087042166526654c7291">TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ec4f8eae672a49ef9f5538dc86e3075">EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48</a>;. [More\...](#ga5f3ec698e668ad3b0d6df80d831ce946)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB4D_CALLBACK_TIMEOUT](#gafb5952319a54de26fad4c98dd02d89fc)   \"CallbackTimeout_DFAB4D\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga8c003bdaed26f44ad570217a763680cd">TAG_DFAB4D_RUPAY_CALLBACK_TIMEOUT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a828f539d6ebbffb74146b546db4eb6d7">EMV_CTLS_APPLIDATA_RK_STRUCT::CallbackTimeout_DFAB4D</a>\[2\];. [More\...](#gafb5952319a54de26fad4c98dd02d89fc)<br/> |
| #define  | [XML_TAG_AD_RK_DFAB4E_TORN_TRX_INTERVAL](#gaec00500f8a30f8ad98ebf1e93802ac87)   \"TornTransactionInterval_DFAB4E\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaa552982c326d11acd8cdb672c94447fc">TAG_DFAB4E_RUPAY_TORN_TRX_INTERVAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2b2bd262153668e95468f9db8ff296ce">EMV_CTLS_APPLIDATA_RK_STRUCT::TornTransactionInterval_DFAB4E</a>\[2\];. [More\...](#gaec00500f8a30f8ad98ebf1e93802ac87)<br/> |
| #define  | [XML_TAG_AD_RK_DF3A_ADD_TERM_CAPS_EXT](#ga5c0cce7528cd78917ef1394da4d1cfba)   \"AdditionalTerminalCapabilitiesExt_DF3A\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga9c54250ab313a2fa165a42e89fa51945">TAG_DF3A_ADD_TRM_CAP_EXT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa067675fcb990973520ebd4bd342fa91">EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilitiesExt_DF3A</a>\[5\];. [More\...](#ga5c0cce7528cd78917ef1394da4d1cfba)<br/> |
| #define  | [XML_TAG_AD_SK](#ga0ff45ba26a2dbd983d1cba6b9aa634c9)   \"SIBS\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_SK_STRUCT</a>. [More\...](#ga0ff45ba26a2dbd983d1cba6b9aa634c9)<br/> |
| #define  | [XML_TAG_AD_SK_9F1C_TERM_IDENT](#ga57f42a0efd9340f4bab1af8eba2f410e)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_SK_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga57f42a0efd9340f4bab1af8eba2f410e)<br/> |
| #define  | [XML_TAG_AD_SK_9F1A_TERM_COUNTRY_CODE](#ga4c34fcfa824888eb163abfedb2894657)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga4c34fcfa824888eb163abfedb2894657)<br/> |
| #define  | [XML_TAG_AD_SK_9F35_TERM_TYPE](#ga8dd5517fab1eda48fb4d41f3d35e3752)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalType_9F35</a>;. [More\...](#ga8dd5517fab1eda48fb4d41f3d35e3752)<br/> |
| #define  | [XML_TAG_AD_SK_9F33_TERM_CAPS](#ga962e14ea18f14a21aa072c29ffebdf04)   \"TerminalCapabilities_9F33\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCapabilities_9F33</a>\[3\];. [More\...](#ga962e14ea18f14a21aa072c29ffebdf04)<br/> |
| #define  | [XML_TAG_AD_SK_9F40_ADD_TERM_CAPS](#gaaa829aa80d0949ae8cd7b7e0463c21d3)   \"AdditionalTerminalCapabilities_9F40\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_SK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];. [More\...](#gaaa829aa80d0949ae8cd7b7e0463c21d3)<br/> |
| #define  | [XML_TAG_AD_SK_9F09_VERSION_NUMBER](#ga5ee5f97971dbd18fbb03017cd57f4704)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_SK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#ga5ee5f97971dbd18fbb03017cd57f4704)<br/> |
| #define  | [XML_TAG_AD_SK_9F15_MERCHANT_CATEGORY_CODE](#gac7073443ff4375d652c4f7a8af790f0e)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#gac7073443ff4375d652c4f7a8af790f0e)<br/> |
| #define  | [XML_TAG_AD_SK_9F4E_MERCHANT_NAME_LOCATION](#gac73acb01a9ce3196f11c940d01d1b82e)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#gac73acb01a9ce3196f11c940d01d1b82e)<br/> |
| #define  | [XML_TAG_AD_SK_DFAB31_APP_FLOW_CAP](#ga98169e369441c5310b07f6dfd0a7006f)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_SK_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga98169e369441c5310b07f6dfd0a7006f)<br/> |
| #define  | [XML_TAG_AD_SK_DFAB40_CTLS_FLOOR_LIMIT](#ga50c2236cc245a61a3a6365f89d8d7a16)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#ga50c2236cc245a61a3a6365f89d8d7a16)<br/> |
| #define  | [XML_TAG_AD_SK_DFAB41_CTLS_TRX_LIMIT](#ga94dd140ae4e3f51c0db06dbdff6eec2b)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#ga94dd140ae4e3f51c0db06dbdff6eec2b)<br/> |
| #define  | [XML_TAG_AD_SK_DFAB42_CTLS_CVM_REQ_LIMIT](#ga7dd5519de47bf5dacc8a76a6d8063c95)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#ga7dd5519de47bf5dacc8a76a6d8063c95)<br/> |
| #define  | [XML_TAG_AD_SK_DFAB43_TAC_DEFAULT](#gab0120403337cd12c2dbe5c3d7e42ec8d)   \"TACDefault_DFAB43\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_SK_STRUCT::TACDefault_DFAB43</a>\[5\];. [More\...](#gab0120403337cd12c2dbe5c3d7e42ec8d)<br/> |
| #define  | [XML_TAG_AD_SK_DFAB44_TAC_DENIAL](#ga7adf6241f8a5b63d20532190257002b8)   \"TACDenial_DFAB44\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_SK_STRUCT::TACDenial_DFAB44</a>\[5\];. [More\...](#ga7adf6241f8a5b63d20532190257002b8)<br/> |
| #define  | [XML_TAG_AD_SK_DFAB45_TAC_ONLINE](#ga42a3e7f178928d78d7a904328b0ff6f1)   \"TACOnline_DFAB45\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_SK_STRUCT::TACOnline_DFAB45</a>\[5\];. [More\...](#ga42a3e7f178928d78d7a904328b0ff6f1)<br/> |
| #define  | [XML_TAG_AD_SK_DFAB53_TERMCAP_ABOVE_CVM_LIMIT](#gabf186c82248b74b9f0c1056822819417)   \"TermCap_aboveCVMLimit_DFAB53\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga506a475aaf82c498cbaf4ac0f594c89f">TAG_DFAB53_TERMCAP_ABOVE_CVM_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa783a472a471753238cf9e2c096a1acd">EMV_CTLS_APPLIDATA_SK_STRUCT::TermCap_aboveCVMLimit_DFAB53</a>\[3\];. [More\...](#gabf186c82248b74b9f0c1056822819417)<br/> |
| #define  | [XML_TAG_AD_SK_DFAB54_TERMCAP_BELOW_CVM_LIMIT](#gaea3870e1b850e3f898efb03097886167)   \"TermCap_belowCVMLimit_DFAB54\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf262237efee4fe45b97bfa7ee4ba206e">TAG_DFAB54_TERMCAP_BELOW_CVM_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab25b5993860d29f76b357e4bb2cde63f">EMV_CTLS_APPLIDATA_SK_STRUCT::TermCap_belowCVMLimit_DFAB54</a>\[3\];. [More\...](#gaea3870e1b850e3f898efb03097886167)<br/> |
| #define  | [XML_TAG_AD_PB](#ga45dceef9b7aa465fd847b156d1a09af7)   \"PagoBancomat\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_PB_STRUCT</a>. [More\...](#ga45dceef9b7aa465fd847b156d1a09af7)<br/> |
| #define  | [XML_TAG_AD_PB_9F1C_TERM_IDENT](#ga44935cf29467a5cd9763b189b29e0566)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_PB_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#ga44935cf29467a5cd9763b189b29e0566)<br/> |
| #define  | [XML_TAG_AD_PB_9F1A_TERM_COUNTRY_CODE](#gaaac374eb7c618eecd63451a5fa675e62)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#gaaac374eb7c618eecd63451a5fa675e62)<br/> |
| #define  | [XML_TAG_AD_PB_9F35_TERM_TYPE](#ga75c4fd7d16c9267320cb339a32bf8855)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalType_9F35</a>;. [More\...](#ga75c4fd7d16c9267320cb339a32bf8855)<br/> |
| #define  | [XML_TAG_AD_PB_9F66_TERM_TRX_QUALIFIER](#gafc03e8358c16909d06dce55ec73e64d6)   \"TerminalTransactionQualifier_9F66\" |
|   | TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalTransactionQualifier_9F66</a>\[4\];. [More\...](#gafc03e8358c16909d06dce55ec73e64d6)<br/> |
| #define  | [XML_TAG_AD_PB_9F09_VERSION_NUMBER](#ga8bd59ffa99b074a8a4ce6d0f5b69507b)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_PB_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#ga8bd59ffa99b074a8a4ce6d0f5b69507b)<br/> |
| #define  | [XML_TAG_AD_PB_9F4E_MERCHANT_NAME_LOCATION](#ga88348cc2652b802d817e7d0867dfb73d)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_PB_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#ga88348cc2652b802d817e7d0867dfb73d)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB31_APP_FLOW_CAP](#ga52c253029b8e561b814f3c4e3af42451)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_PB_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga52c253029b8e561b814f3c4e3af42451)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB40_CTLS_FLOOR_LIMIT](#gadd41bdf2df615f5aeacd1c1a82f97df8)   \"ContactlessFloorLimit_DFAB40\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];. [More\...](#gadd41bdf2df615f5aeacd1c1a82f97df8)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB41_CTLS_TRX_LIMIT](#gad49249c8a92ffaa9853131cefd14e096)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#gad49249c8a92ffaa9853131cefd14e096)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB42_CTLS_CVM_REQ_LIMIT](#ga5f6b626113cf4bce1572a8ec76be0bac)   \"ContactlessCVMRequiredLimit_DFAB42\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];. [More\...](#ga5f6b626113cf4bce1572a8ec76be0bac)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB43_TAC_DEFAULT](#ga98b8bd2b7199b90ba3851c50b5be513d)   \"TACDefault_DFAB43\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_PB_STRUCT::TACDefault_DFAB43</a>\[5\];. [More\...](#ga98b8bd2b7199b90ba3851c50b5be513d)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB44_TAC_DENIAL](#gadd082475d320e24a8b5b830a0493a75e)   \"TACDenial_DFAB44\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_PB_STRUCT::TACDenial_DFAB44</a>\[5\];. [More\...](#gadd082475d320e24a8b5b830a0493a75e)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB45_TAC_ONLINE](#ga36f2af2859294133b4b3f20ec521696c)   \"TACOnline_DFAB45\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_PB_STRUCT::TACOnline_DFAB45</a>\[5\];. [More\...](#ga36f2af2859294133b4b3f20ec521696c)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB46_RISK_MGMT_THRESHOLD](#gae5094978fd102edadc628a3defe5dc6d)   \"RiskManagementThreshold_DFAB46\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga03c938e159dbea0a48e833d5205f2529">TAG_DFAB46_RISK_MGMT_THRESHOLD</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a096278403e842d9b135643dcc67e834c">EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementThreshold_DFAB46</a>\[6\];. [More\...](#gae5094978fd102edadc628a3defe5dc6d)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB47_RISK_MGMT_TRGT_PERC](#gaebd570c02e2a3725c4c08fd41f132a6c)   \"RiskManagementTargetPercentage_DFAB47\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4795ddca7a863da46b56a3a34d3b9c39">TAG_DFAB47_RISK_MGMT_TRGT_PRCT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac09806019918cd2daedef5834c88740">EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementTargetPercentage_DFAB47</a>;. [More\...](#gaebd570c02e2a3725c4c08fd41f132a6c)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB48_RISK_MGMT_MAX_TRGT_PERC](#ga8869b72ba42466f4bb65ea2948f07aeb)   \"RiskManagementMaximumTargetPercentage_DFAB48\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gad755eca2cea7087042166526654c7291">TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ec4f8eae672a49ef9f5538dc86e3075">EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48</a>;. [More\...](#ga8869b72ba42466f4bb65ea2948f07aeb)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB55_TAC_SWITCH_INTERFACE](#gaae6f7de52a19aa7028fc3e9320e0dc96)   \"TACSwitchInterface_DFAB55\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga514e6b0aa34219d0bccd9b01ec4de45e">TAG_DFAB55_TAC_SWITCH_INTERFACE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af783aad0b195ebfa3f9037645fd0073f">EMV_CTLS_APPLIDATA_PB_STRUCT::TACSwitchInterface_DFAB55</a>\[5\];. [More\...](#gaae6f7de52a19aa7028fc3e9320e0dc96)<br/> |
| #define  | [XML_TAG_AD_PB_DFAB56_IAC_SWITCH_INTERFACE](#gae148741ca8548a56462e0dc4cd5f1e52)   \"IACSwitchInterface_DFAB56\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga432cbf60b986d8829f530241dc24f37e">TAG_DFAB56_IAC_SWITCH_INTERFACE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a32fb661b0211fab5de9b9bdbeef56157">EMV_CTLS_APPLIDATA_PB_STRUCT::IACSwitchInterface_DFAB56</a>\[5\];. [More\...](#gae148741ca8548a56462e0dc4cd5f1e52)<br/> |
| #define  | [XML_TAG_AD_WK](#ga7e4d3d670f1a47594da334866c3f2825)   \"WISE\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_WK_STRUCT</a>. [More\...](#ga7e4d3d670f1a47594da334866c3f2825)<br/> |
| #define  | [XML_TAG_AD_BK](#ga859b7ced9c21b89490d21b9ef5834a1f)   \"CPACE\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_BK_STRUCT</a>. [More\...](#ga859b7ced9c21b89490d21b9ef5834a1f)<br/> |
| #define  | [XML_TAG_AD_DF8118_CVM_ABOVE_LIMIT](#ga94b2eed4980138684e0a219004dae40f)   \"CVM_aboveLimit_DF8118\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#gae26b009b2e8fbc3f96890a6f8f05f917">TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a924188de218d213ed4e528127057b16c">EMV_CTLS_APPLIDATA_BK_STRUCT::CVM_aboveLimit_DF8118</a>;. [More\...](#ga94b2eed4980138684e0a219004dae40f)<br/> |
| #define  | [XML_TAG_AD_DF8119_CVM_BELOW_LIMIT](#ga4eeeec9f4fbbe6bac5d5f28576b83bc7)   \"CVM_belowLimit_DF8119\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga891bf29200fdd3a0e520e68bb06d5a8d">TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7ad9b6a3e390831aa0ebfadc6cfe2fa7">EMV_CTLS_APPLIDATA_BK_STRUCT::CVM_belowLimit_DF8119</a>;. [More\...](#ga4eeeec9f4fbbe6bac5d5f28576b83bc7)<br/> |
| #define  | [XML_TAG_AD_DF8131_CHV_CS_MessageTable](#ga2b315e48ce82ab77de45689f62e7dccc)   \"CHV_CS_MessageTable_DF8131\" |
|   | TLV tag: [XML_TAG_AD_MK_DF8131_PHONE_MSG_TABLE](#ga62f573381dbe1a8096b0bf13ac15d38c "TLV tag: TAG_DF8131_PHONE_MSG_TABLE   Struct: EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131;...")<br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af42f3c0140e4ba7e98c7fbf2bd20a612">EMV_CTLS_APPLIDATA_BK_STRUCT::CHV_CS_MessageTable_DF8131</a>;. [More\...](#ga2b315e48ce82ab77de45689f62e7dccc)<br/> |
| #define  | [XML_TAG_AD_DF8124_TRX_LIMIT_NO_CDCVM](#gaaba0e5284ffae47b5babcfc02bb4a2a3)   \"TransactionLimitNoCDCVM_DF8124\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga97bfc09582df37b5cc75822f4efbfeb3">TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb2661377a60163b189ddc6a2a1943aa">EMV_CTLS_APPLIDATA_BK_STRUCT::TransactionLimitNoCDCVM_DF8124</a>\[6\];. [More\...](#gaaba0e5284ffae47b5babcfc02bb4a2a3)<br/> |
| #define  | [XML_TAG_AD_DF8125_TRX_LIMIT_CDCVM](#ga1fdb3fb836be1e6918aa3cb8daa94590)   \"TransactionLimitCDCVM_DF8125\" |
|   | TLV tag: <a href="group___m_c___t_a_g_s.md#ga55d133646b780225892a8e430d85ed71">TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a38785329f7fba84649fcc662e9e264e1">EMV_CTLS_APPLIDATA_BK_STRUCT::TransactionLimitCDCVM_DF8125</a>\[6\];. [More\...](#ga1fdb3fb836be1e6918aa3cb8daa94590)<br/> |
| #define  | [XML_TAG_AD_MR](#ga3b7ff8acf83e0c165c42457c56e72ce5)   \"MIR\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_MR_STRUCT</a>. [More\...](#ga3b7ff8acf83e0c165c42457c56e72ce5)<br/> |
| #define  | [XML_TAG_AD_MR_9F1C_TERM_IDENT](#gada1608589f085696ceb30deeb935159d)   \"TermIdent_9F1C\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_MR_STRUCT::TermIdent_9F1C</a>\[8\];. [More\...](#gada1608589f085696ceb30deeb935159d)<br/> |
| #define  | [XML_TAG_AD_MR_9F1A_TERM_COUNTRY_CODE](#ga19b3a047f3e40c294d0921b057d39a06)   \"TerminalCountryCode_9F1A\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalCountryCode_9F1A</a>\[2\];. [More\...](#ga19b3a047f3e40c294d0921b057d39a06)<br/> |
| #define  | [XML_TAG_AD_MR_9F35_TERM_TYPE](#ga70d5f14087a4adadb0834a66dd725bfe)   \"TerminalType_9F35\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalType_9F35</a>;. [More\...](#ga70d5f14087a4adadb0834a66dd725bfe)<br/> |
| #define  | [XML_TAG_AD_MR_9F09_VERSION_NUMBER](#gafcca18abf3043ecaceafbfd7a4ed4395)   \"VersionNumber_9F09\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_MR_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];. [More\...](#gafcca18abf3043ecaceafbfd7a4ed4395)<br/> |
| #define  | [XML_TAG_AD_MR_9F15_MERCHANT_CATEGORY_CODE](#gab12c65e731db375e52dee5a4db834070)   \"MerchantCategoryCode_9F15\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantCategoryCode_9F15</a>\[2\];. [More\...](#gab12c65e731db375e52dee5a4db834070)<br/> |
| #define  | [XML_TAG_AD_MR_9F4E_MERCHANT_NAME_LOCATION](#ga5db863c1b0639cef0e245480ce374233)   \"MerchantNameAndLocation_9F4E\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];. [More\...](#ga5db863c1b0639cef0e245480ce374233)<br/> |
| #define  | [XML_TAG_AD_MR_9F01_ACQUIRER_ID](#ga0ca98d63f83b0c68562c606d70cd8021)   \"AcquirerIdentifier_9F01\" |
|   | TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_MR_STRUCT::AcquirerIdentifier_9F01</a>\[6\];. [More\...](#ga0ca98d63f83b0c68562c606d70cd8021)<br/> |
| #define  | [XML_TAG_AD_MR_DF51_TRM_FLOOR_LIMIT](#ga36f9b8c3db2c17d4ce447c6d33c25948)   \"TerminalFloorLimit_DF51\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga4dd15e9ee3a30a6777961d6fdf59df84">TAG_DF51_TRM_FLOOR_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a74e27e1b76b0bd686b3a781d75c62d8b">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalFloorLimit_DF51</a>\[6\];. [More\...](#ga36f9b8c3db2c17d4ce447c6d33c25948)<br/> |
| #define  | [XML_TAG_AD_MR_DF52_TRM_NOCVM_LIMIT](#gac1310fa0d3f9edeccce6f8dc39f811be)   \"TerminalNoCVMLimit_DF52\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3bfb98b307995cefd6d6c715531bb9ce">TAG_DF52_TRM_NOCVM_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8b07f4d4d545a9f208a534028a536300">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalNoCVMLimit_DF52</a>\[6\];. [More\...](#gac1310fa0d3f9edeccce6f8dc39f811be)<br/> |
| #define  | [XML_TAG_AD_MR_DF53_TRM_CTLS_LIMIT_NON_CDCVM](#ga47c82c5f33b0c1e20138a45c20de54f8)   \"TerminalContactlessLimitNonCDCVM_DF53\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8bbe0e0821128b275e0839b729ac88e9">TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a002ee8e4ab4ea2a88f81832a19039f59">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitNonCDCVM_DF53</a>\[6\];. [More\...](#ga47c82c5f33b0c1e20138a45c20de54f8)<br/> |
| #define  | [XML_TAG_AD_MR_DF54_TRM_CTLS_LIMIT_CDCVM](#gaaa39cd174c31c653ce6893bc542a1c05)   \"TerminalContactlessLimitCDCVM_DF54\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga729abdd1acc5d0d5693bd0071cf84ffb">TAG_DF54_TRM_CTLS_LIMIT_CDCVM</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a23cc0c55ff19d5ed96f407d7d358e69c">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitCDCVM_DF54</a>\[6\];. [More\...](#gaaa39cd174c31c653ce6893bc542a1c05)<br/> |
| #define  | [XML_TAG_AD_MR_DF55_TRM_TPM_CAPABILITIES](#gaf1699b1e1ddefb8245738e78ff15a6df)   \"TerminalTPMCapabilities_DF55\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaa8699891579c92d5f94f9b4ecb5bfd00">TAG_DF55_TRM_TPM_CAPABILITIES</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a62356837c0aca2e30fa7012244c4d0a0">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalTPMCapabilities_DF55</a>\[2\];. [More\...](#gaf1699b1e1ddefb8245738e78ff15a6df)<br/> |
| #define  | [XML_TAG_AD_MR_DF56_TRANSACTION_RECOVERY_LIMIT](#ga8aa28074f594b5543a1f5fc6a5fbcecc)   \"TransactionRecoveryLimit_DF56\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gab9aeb6926d2b56dd0803b57cb8221c2d">TAG_DF56_TRANSACTION_RECOVERY_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac36341c56813c028334361fcec6aea8e">EMV_CTLS_APPLIDATA_MR_STRUCT::TransactionRecoveryLimit_DF56</a>;. [More\...](#ga8aa28074f594b5543a1f5fc6a5fbcecc)<br/> |
| #define  | [XML_TAG_AD_MR_DFAB31_APP_FLOW_CAP](#ga6b163b1654a82b4e3a64dba5daea720b)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_MR_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#ga6b163b1654a82b4e3a64dba5daea720b)<br/> |
| #define  | [XML_TAG_AD_MR_DFAB43_TAC_DEFAULT](#ga2058d949c7971b107ec6d236130b95e0)   \"TACDefault_DFAB43\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_MR_STRUCT::TACDefault_DFAB43</a>\[5\];. [More\...](#ga2058d949c7971b107ec6d236130b95e0)<br/> |
| #define  | [XML_TAG_AD_MR_DFAB44_TAC_DENIAL](#ga1fc7ce31881d1adf85de6da59539d1bb)   \"TACDenial_DFAB44\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_MR_STRUCT::TACDenial_DFAB44</a>\[5\];. [More\...](#ga1fc7ce31881d1adf85de6da59539d1bb)<br/> |
| #define  | [XML_TAG_AD_MR_DFAB45_TAC_ONLINE](#ga787f6891704fd406eddebcd617642b2e)   \"TACOnline_DFAB45\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_MR_STRUCT::TACOnline_DFAB45</a>\[5\];. [More\...](#ga787f6891704fd406eddebcd617642b2e)<br/> |
| #define  | [XML_TAG_AD_MR_DFAB57_MIR_DATA_EXCHANGE_TAGS](#gaae2d11590ad11a4bd992ccb1e3c43199)   \"DataExchangeTagList_DFAB57\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga23c364ffc5ecb5da1c56852ee45a167a">TAG_DFAB57_MIR_DATA_EXCHANGE_TAGS</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac6d4527d26ab23434a0f2b0d4241f2b6">EMV_CTLS_APPLIDATA_MR_STRUCT::DataExchangeTagList_DFAB57</a>;. [More\...](#gaae2d11590ad11a4bd992ccb1e3c43199)<br/> |
| #define  | [XML_TAG_AD_DOM](#ga7a7c4819383998f2c791168a9d373a56)   \"domestic\" |
|   | Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_DOM_STRUCT</a>. [More\...](#ga7a7c4819383998f2c791168a9d373a56)<br/> |
| #define  | [XML_TAG_AD_DOM_DFAB31_APP_FLOW_CAP](#gaaa5d67beb51adba4f23988b62639b435)   \"AppFlowCap_DFAB31\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_DOM_STRUCT::AppFlowCap_DFAB31</a>\[5\];. [More\...](#gaaa5d67beb51adba4f23988b62639b435)<br/> |
| #define  | [XML_TAG_AD_DOM_DFAB41_CTLS_TRX_LIMIT](#ga01bd2a5337b7c7bc10e0eb58436ed11d)   \"ContactlessTransactionLimit_DFAB41\" |
|   | TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a><br/>Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_DOM_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];. [More\...](#ga01bd2a5337b7c7bc10e0eb58436ed11d)<br/> |
| #define  | [XML_TAG_VTM](#gacaa0b882a863697830b8d45bc689bf94)   \"VirtualTerminalMap\" |
|   | Enclosing tag used in \"EMV_VirtualTermConfig.xml\". [More\...](#gacaa0b882a863697830b8d45bc689bf94)<br/> |
| #define  | [XML_TAG_VTM_ENTRY](#ga808a59de04c2005f55356e0b5105ec85)   \"VTMEntry\" |
|   | One entry in \"EMV_VirtualTermConfig.xml\". [More\...](#ga808a59de04c2005f55356e0b5105ec85)<br/> |
| #define  | [XML_TAG_VTM_TERMINAL](#ga0655877ecf7e60793e932890a41cbf6d)   \"Terminal\" |
|   | Virtual terminal index used in \"EMV_VirtualTermConfig.xml\". [More\...](#ga0655877ecf7e60793e932890a41cbf6d)<br/> |
| #define  | [XML_TAG_VTM_TRANSTYPE](#ga13f8bb9237d759244863c3f450d1f6e6)   \"TransType_9C\" |
|   | Transaction type used in \"EMV_VirtualTermConfig.xml\". [More\...](#ga13f8bb9237d759244863c3f450d1f6e6)<br/> |
| #define  | [XML_TAG_VTM_CURRENCYCODE](#gabcde01c75efe189a50b25acb24eb5e97)   \"CurrencyCode_5F2A\" |
|   | Currency code used in \"EMV_VirtualTermConfig.xml\". [More\...](#gabcde01c75efe189a50b25acb24eb5e97)<br/> |
| #define  | [XML_TAG_TERMDATA](#ga222621e71edebae1ad5520a19b59fbf3)   \"TerminalData\" |
|   | constructed xml tag for terminal data, used in file \"EMV_Terminal.xml\" [More\...](#ga222621e71edebae1ad5520a19b59fbf3)<br/> |
| #define  | [XML_TAG_TERMDATA_TERM_TYP](#gae8ddc36e1390de13ad98cf5da17cfc3f)   \"TermTyp\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CT_TERMDATA_STRUCT::TermTyp</a>. [More\...](#gae8ddc36e1390de13ad98cf5da17cfc3f)<br/> |
| #define  | [XML_TAG_TERMDATA_COUNTRY_CODE_TERM](#gaef4d5036990ed54a310bfa34e9a018aa)   \"CountryCodeTerm\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#af11a6d7b3bb1f5438dca672b746aeb11">EMV_CT_TERMDATA_STRUCT::TermCountryCode</a>. [More\...](#gaef4d5036990ed54a310bfa34e9a018aa)<br/> |
| #define  | [XML_TAG_TERMDATA_TERM_CAP](#ga7bfeb1312c6535a069be1b26015e6ef4)   \"TermCap\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aa98172f43b850403ff2e6aba0340281f">EMV_CT_TERMDATA_STRUCT::TermCap</a>. [More\...](#ga7bfeb1312c6535a069be1b26015e6ef4)<br/> |
| #define  | [XML_TAG_TERMDATA_TERM_ADD_CAP](#ga3514324960ea620fc5a8daef445fcecd)   \"TermAddCap\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9cafd59682bd260f14ce67e716046538">EMV_CT_TERMDATA_STRUCT::TermAddCap</a>. [More\...](#ga3514324960ea620fc5a8daef445fcecd)<br/> |
| #define  | [XML_TAG_TERMDATA_TERM_IDENT](#ga0c70e5646bee358cbfeb5f65628c55d2)   \"TermIdent\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_TERMDATA_STRUCT::TermIdent</a>. [More\...](#ga0c70e5646bee358cbfeb5f65628c55d2)<br/> |
| #define  | [XML_TAG_TERMDATA_CURRENCY_TRANS](#ga661c0545150aba185eb87f9cc4ec2888)   \"CurrencyTrans\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga369ab2cc83e9b220bdfa79753f1f3962">TAG_5F2A_TRANS_CURRENCY</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CT_TERMDATA_STRUCT::CurrencyTrans</a>. [More\...](#ga661c0545150aba185eb87f9cc4ec2888)<br/> |
| #define  | [XML_TAG_TERMDATA_EXP_TRANS](#ga626a3a285542c99e089df3c38d66ee89)   \"ExpTrans\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga134c61ae2787b93c5def5bbf929f7cb4">TAG_5F36_TRANS_CURRENCY_EXP</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CT_TERMDATA_STRUCT::ExpTrans</a>. [More\...](#ga626a3a285542c99e089df3c38d66ee89)<br/> |
| #define  | [XML_TAG_TERMDATA_SUPP_LANG](#ga77460b946c3b46533edfbdbd3a6caf4c)   \"SuppLang\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga52707e76d2602d822429e98d653933c3">TAG_SUPP_LANG</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9d2672ac7a65bb39a13e450b4cb4737b">EMV_CT_TERMDATA_STRUCT::SuppLang</a>. [More\...](#ga77460b946c3b46533edfbdbd3a6caf4c)<br/> |
| #define  | [XML_TAG_TERMDATA_IFD_SERIAL_NUMBER](#ga629ee278fb088066573a86dd7d0b0e55)   \"IFD_SerialNumber\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga1edb578c8df9ce5a55b3204cda45d198">TAG_9F1E_IFD_SERIAL_NB</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CT_TERMDATA_STRUCT::IFDSerialNumber</a>. [More\...](#ga629ee278fb088066573a86dd7d0b0e55)<br/> |
| #define  | [XML_TAG_TERMDATA_KERNEL_VERSION](#ga22fd4430dee89d1b99af96d86a6b0109)   \"KernelVersion\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga67a162b9d0b04eff880450e857dafb37">TAG_KERNEL_VERSION</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a808cb5cde9cf6ac837ef81977f4a751c">EMV_CT_TERMDATA_STRUCT::KernelVersion</a>. [More\...](#ga22fd4430dee89d1b99af96d86a6b0109)<br/> |
| #define  | [XML_TAG_TERMDATA_FRAMEWORK_VERSION](#ga7466ea82a873f9b06da23f703c800a17)   \"FrameworkVersion\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga6f8f8ac35965ec091b3d1a3f4a4efe8d">TAG_DF11_LIB_VERSION</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a15d10a5c739bb6c45d9d0bf3f40c0021">EMV_CT_TERMDATA_STRUCT::FrameworkVersion</a>. [More\...](#ga7466ea82a873f9b06da23f703c800a17)<br/> |
| #define  | [XML_TAG_TERMDATA_L1DRIVER_VERSION](#ga1027f53b9fdf8329597f1a18fe49a316)   \"L1DriverVersion\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac1ea086216b81ee8ac8b78f2fbe15daa">TAG_L1DRIVER_VERSION</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CT_TERMDATA_STRUCT::L1DriverVersion</a>. [More\...](#ga1027f53b9fdf8329597f1a18fe49a316)<br/> |
| #define  | [XML_TAG_TERMDATA_SB308_FLAG](#ga6fe017c859ae597ce9417b26635ce410)   \"EMVCoSB308\" |
|   | Format: 1 character \[0,1\] TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae4ae3d27836d4d82c28240ff6f55a852">TAG_DF6F_SB308_FLAG</a>, used exclusive for Titus. [More\...](#ga6fe017c859ae597ce9417b26635ce410)<br/> |
| #define  | [XML_TAG_CAP_KEYS](#ga42c816c3906637a4065cb023e47148af)   \"CapKeys\" |
|   | constructed xml tag for CAP key data, used in file \"EMV_Keys.xml\" [More\...](#ga42c816c3906637a4065cb023e47148af)<br/> |
| #define  | [XML_TAG_CAP_KEYS_CAPKEY](#gadca82bc6f2514de3d8c46c456ee814ba)   \"CapKey\" |
|   | constructed xml tag for A SINGLE CAP key <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t">EMV_CT_CAPKEY_STRUCT</a>, embedded in [XML_TAG_CAP_KEYS](#ga42c816c3906637a4065cb023e47148af "constructed xml tag for CAP key data, used in file "EMV_Keys.xml"") [More\...](#gadca82bc6f2514de3d8c46c456ee814ba)<br/> |
| #define  | [XML_TAG_CAP_KEYS_INDEX](#ga2564b8002f03295e157b242ad2efa950)   \"Index\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga7b2bdd988a89e21cd04afe12a30c0ddf">TAG_KEY_INDEX</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#ac24ea04d0a0218723498d1632c6875a9">EMV_CT_CAPKEY_STRUCT::Index</a>. [More\...](#ga2564b8002f03295e157b242ad2efa950)<br/> |
| #define  | [XML_TAG_CAP_KEYS_RID](#ga2acfa293c67d4c30b81f26f1fc51f677)   \"RID\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga0c86b48955a7de5b01796ece1dd8157b">TAG_KEY_RID</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a7d507a69b2eb69015b1ced0f4c4d47fd">EMV_CT_CAPKEY_STRUCT::RID</a>. [More\...](#ga2acfa293c67d4c30b81f26f1fc51f677)<br/> |
| #define  | [XML_TAG_CAP_KEYS_KEY](#ga151215aa136d44cb12e3ea1d392c744f)   \"Key\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a0a3543353678a64e265f8d5a817c52db">EMV_CT_CAPKEY_STRUCT::Key</a>. [More\...](#ga151215aa136d44cb12e3ea1d392c744f)<br/> |
| #define  | [XML_TAG_CAP_KEYS_KEYLEN](#ga94a87250bc33e6e85a09285f832fbfd9)   \"KeyLen\" |
|   | Length of data in TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aeb6f1a41fb682dc06cfdc1d0c1bef18f">EMV_CT_CAPKEY_STRUCT::KeyLen</a>. [More\...](#ga94a87250bc33e6e85a09285f832fbfd9)<br/> |
| #define  | [XML_TAG_CAP_KEYS_EXPONENT](#ga19533a461456afae8eb33ee784fd361b)   \"Exponent\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3301dc858f4033e7100dae7d71a7e1e0">TAG_KEY_EXPONENT</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a65d7fb542cdae2f7104b266bbe3ac9b2">EMV_CT_CAPKEY_STRUCT::Exponent</a>. [More\...](#ga19533a461456afae8eb33ee784fd361b)<br/> |
| #define  | [XML_TAG_CAP_KEYS_HASH](#gad6a0497d2964a67cec810ea12c8279a1)   \"Hash\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac037a26b7d73563286fb125d59f1265d">TAG_KEY_HASH</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aa04067e88f6cfe9465c0a92f7233ebee">EMV_CT_CAPKEY_STRUCT::Hash</a>. [More\...](#gad6a0497d2964a67cec810ea12c8279a1)<br/> |
| #define  | [XML_TAG_CAP_KEYS_REVOC_LIST](#ga1e433908dd992082b5a252f39d60f45d)   \"RevocationList\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae92f2b4a70d0c2217bdcc751106477d1">TAG_KEY_CRL</a><br/>Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aad05155fcd539c313f48260d8ebd2f76">EMV_CT_CAPKEY_STRUCT::RevocEntries</a>. [More\...](#ga1e433908dd992082b5a252f39d60f45d)<br/> |
| #define  | [XML_TAG_APPLIDATA](#gaaa1f944043cef98010a54b9c074185ff)   \"ApplicationData\" |
|   | constructed xml tag for application data, used in file \"EMV_Applications.xml\" [More\...](#gaaa1f944043cef98010a54b9c074185ff)<br/> |
| #define  | [XML_TAG_APPLIDATA_APP](#ga32de48c9dd0037fbd10d3c6d1264e4d1)   \"Application\" |
|   | Constructed tag for one AID, embedded in [XML_TAG_APPLIDATA](#gaaa1f944043cef98010a54b9c074185ff "constructed xml tag for application data, used in file "EMV_Applications.xml""). [More\...](#ga32de48c9dd0037fbd10d3c6d1264e4d1)<br/> |
| #define  | [XML_TAG_APPLIDATA_AID](#gab51b5b160528c4eba7de7bf08e42ed5d)   \"AID\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga939333f4c5c2e500beb9b06d6939fb23">TAG_DF04_AID</a><br/>Struct element <a href="_e_m_v___c_t___interface_8h.md#a1af6aa5d2e82428d0fe225cfe2b3b501">EMV_CT_APPLI_STRUCT::AID</a>. [More\...](#gab51b5b160528c4eba7de7bf08e42ed5d)<br/> |
| #define  | [XML_TAG_APPLIDATA_VER_NUM](#ga3732b63e4cf39f8300736e9cf0432fa7)   \"VerNum\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4a13940a43927f00f7c701cb98131588">EMV_CT_APPLIDATA_STRUCT::VerNum</a>. [More\...](#ga3732b63e4cf39f8300736e9cf0432fa7)<br/> |
| #define  | [XML_TAG_APPLIDATA_APP_NAME](#ga0e796259cace748a875c804a6bdc342b)   \"AppName\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga70b6da94fde0a697b05755cdfc084023">TAG_50_APP_LABEL</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1a933985680b099e926e54086a602c12">EMV_CT_APPLIDATA_STRUCT::AppName</a>. [More\...](#ga0e796259cace748a875c804a6bdc342b)<br/> |
| #define  | [XML_TAG_APPLIDATA_ASI](#ga2e5b4d6bc8885bd582a8c8a53988adeb)   \"ASI\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3ec6eef8ef2baf5298bba904c5339614">TAG_DF20_ASI</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2000688e48cdadee86eb401946a71785">EMV_CT_APPLIDATA_STRUCT::ASI</a>. [More\...](#ga2e5b4d6bc8885bd582a8c8a53988adeb)<br/> |
| #define  | [XML_TAG_APPLIDATA_BR_KEY](#ga1c91e30ac44b2fd1c9c90e2d5ab2f2da)   \"BrKey\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aadaaf73921101bb812f90ec7c4a9d5dd">EMV_CT_APPLIDATA_STRUCT::BrKey</a>. [More\...](#ga1c91e30ac44b2fd1c9c90e2d5ab2f2da)<br/> |
| #define  | [XML_TAG_APPLIDATA_TERM_IDENT](#gaf0f3d447f6398bbb9ed79e18b0b399e5)   \"TermIdent\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_APPLIDATA_STRUCT::TermIdent</a>. [More\...](#gaf0f3d447f6398bbb9ed79e18b0b399e5)<br/> |
| #define  | [XML_TAG_APPLIDATA_FLOOR_LIMIT](#gabe783b9ab1c5589bab73048ec67cf8e9)   \"FloorLimit\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gab275fa140f8e21bda8e1d0bdafe47602">TAG_9F1B_TRM_FLOOR_LIMIT</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5fb4232c2d98685b61df7884ccfbaf5">EMV_CT_APPLIDATA_STRUCT::FloorLimit</a>. [More\...](#gabe783b9ab1c5589bab73048ec67cf8e9)<br/> |
| #define  | [XML_TAG_APPLIDATA_SECURE_LIMIT](#gaa28af81dc810f58ba4bef8c3d15ce296)   \"SecurityLimit\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga773accbac8ce408209a6e2e58d5370de">TAG_DF49_APL_SEC_LIMIT</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afa6752c96d0046c68e76710aee5a070f">EMV_CT_APPLIDATA_STRUCT::Security_Limit</a>. [More\...](#gaa28af81dc810f58ba4bef8c3d15ce296)<br/> |
| #define  | [XML_TAG_APPLIDATA_NON_SECURE_CAPS](#ga02f0c87378e69fd62aec80a35fe0e578)   \"BelowLimitTerminalCapabilities\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gad704c3335371f34032189ddcfa98c9d9">TAG_DF4A_APL_SEC_CAPS</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aef46aa8782c04a197abd81f77dc5c8ed">EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit</a>. [More\...](#ga02f0c87378e69fd62aec80a35fe0e578)<br/> |
| #define  | [XML_TAG_APPLIDATA_THRESHOLD](#ga88563026608169a4bcb335c7e24d7b37)   \"Threshold\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gab925ead3cc4b76ac55df0d4238c9f951">TAG_DF24_THRESHHOLD</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0ff73036f6d3329cc1e8858761af2653">EMV_CT_APPLIDATA_STRUCT::Threshhold</a>. [More\...](#ga88563026608169a4bcb335c7e24d7b37)<br/> |
| #define  | [XML_TAG_APPLIDATA_TARGET_PERCENTAGE](#ga86f7ccf9a954b05b9818e82e00c446a9)   \"TargetPercentage\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga76bc46fd4f87330d2ae8424900702e23">TAG_DF26_PERCENT_ONL</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#accfd8d6023e6718726e1a736e0d54e8f">EMV_CT_APPLIDATA_STRUCT::TargetPercentage</a>. [More\...](#ga86f7ccf9a954b05b9818e82e00c446a9)<br/> |
| #define  | [XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE](#gaeb5c69b544617e33b0349a39089f1a16)   \"MaxTargetPercentage\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gacf7f922e89e073e7b095468414b8afbd">TAG_DF25_MAXPERCENT_ONL</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae06a2f3428cf719f7fc1523a2e2b9fce">EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage</a>. [More\...](#gaeb5c69b544617e33b0349a39089f1a16)<br/> |
| #define  | [XML_TAG_APPLIDATA_TAC_DENIAL](#ga7a831333f78a2d2a955f415f5f739b70)   \"TAC_Denial\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga313084d02966bb6075d6a07b5e227ac3">TAG_DF21_TAC_DENIAL</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab4a00313a90f392f78eb7517a136aae6">EMV_CT_APPLIDATA_STRUCT::TACDenial</a>. [More\...](#ga7a831333f78a2d2a955f415f5f739b70)<br/> |
| #define  | [XML_TAG_APPLIDATA_TAC_ONLINE](#ga4162a52b25e14b4b1bf16b00def428b1)   \"TAC_Online\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8300df6d32eb040757cce4594db2eea8">TAG_DF22_TAC_ONLINE</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a71a391d7f8da7dc0e5be8b97c14447da">EMV_CT_APPLIDATA_STRUCT::TACOnline</a>. [More\...](#ga4162a52b25e14b4b1bf16b00def428b1)<br/> |
| #define  | [XML_TAG_APPLIDATA_TAC_DEFAULT](#ga98c3b8b286cfc9c3be668677d20d510d)   \"TAC_Default\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga588b92246f48302d61cc055baf122dda">TAG_DF23_TAC_DEFAULT</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ce1deed9d23bcc207bfb582f59cac6b">EMV_CT_APPLIDATA_STRUCT::TACDefault</a>. [More\...](#ga98c3b8b286cfc9c3be668677d20d510d)<br/> |
| #define  | [XML_TAG_APPLIDATA_EMV_APPLICATION](#ga1934ad2be00923729082b211703c8567)   \"EMV_Application\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga85a1fd825ffae412a17f45249da1bc69">TAG_DF2D_EMV_APPLI</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a04624c8cc1358b3d029f8c77a930c0c6">EMV_CT_APPLIDATA_STRUCT::EMV_Application</a>. [More\...](#ga1934ad2be00923729082b211703c8567)<br/> |
| #define  | [XML_TAG_APPLIDATA_DEFAULT_TDOL](#ga1876212b8287be7382ad6c45c8e22596)   \"DefaultTDOL\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga10531a229294794d67f4d817ae2e7bac">TAG_DF27_DEFAULT_TDOL</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9741f7d86efbb9dc20f687b6cad55f4c">EMV_CT_APPLIDATA_STRUCT::Default_TDOL</a>. [More\...](#ga1876212b8287be7382ad6c45c8e22596)<br/> |
| #define  | [XML_TAG_APPLIDATA_DEFAULT_DDOL](#gac12bfacfb1082a80fa10aee3569aaf30)   \"DefaultDDOL\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3fcfb3993a3c7ff601286499651bca9a">TAG_DF28_DEFAULT_DDOL</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a27e03203f154c52be3abc2db49842a93">EMV_CT_APPLIDATA_STRUCT::Default_DDOL</a>. [More\...](#gac12bfacfb1082a80fa10aee3569aaf30)<br/> |
| #define  | [XML_TAG_APPLIDATA_MERCH_IDENT](#ga7ae8ff8350d9527942bb5c969e16e237)   \"MerchIdent\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3e3c059a7e2f459a449ab7e746046cf7">EMV_CT_APPLIDATA_STRUCT::MerchIdent</a>. [More\...](#ga7ae8ff8350d9527942bb5c969e16e237)<br/> |
| #define  | [XML_TAG_APPLIDATA_CDA_PROCESSING](#ga2ca269e927e2201872845e0c77b6604f)   \"CDA_Processing\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga26b711050e9aefc38b967f67dffa6619">TAG_DF3E_CDA_PROC</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2673654f6fac8e005bb4cb45dec325ed">EMV_CT_APPLIDATA_STRUCT::CDAProcessing</a>. [More\...](#ga2ca269e927e2201872845e0c77b6604f)<br/> |
| #define  | [XML_TAG_APPLIDATA_AC_BEFORE_AFTER](#ga9c988c6b2daeb55ebfef17b94aedbf09)   \"AC_BeforeAfter\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaa32dcaf965a2b7811278930e36be20af">TAG_DF15_OFFL_ONLY_PROCESS</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac6e17c9e053521b910b1eeb6a75c74c">EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter</a>. [More\...](#ga9c988c6b2daeb55ebfef17b94aedbf09)<br/> |
| #define  | [XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED](#gaed8babbf2d6ae2cae216077a1c86cc77)   \"AIP_CVM_NotSupported\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3a9cba27229ecde4c3c6231eaf09e591">TAG_DF2E_CVM_NOT_SUPP</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0cc466b7328ef1933036d1372ba99b00">EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported</a>. [More\...](#gaed8babbf2d6ae2cae216077a1c86cc77)<br/> |
| #define  | [XML_TAG_APPLIDATA_POS_ENTRY_MODE](#ga8e9158f247d6c7011eaa3cd93507b214)   \"POS_EntryMode\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga52532bf55c516d8055dcba4695fdc159">TAG_9F39_POS_ENTRY_MODE</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9cec52ed8e47c79a53adb21646bf136e">EMV_CT_APPLIDATA_STRUCT::POS_EntryMode</a>. [More\...](#ga8e9158f247d6c7011eaa3cd93507b214)<br/> |
| #define  | [XML_TAG_APPLIDATA_ADD_VER_NUM](#ga31257afdc52fda5212500ffdbef44c25)   \"AdditionalVersionNumbers\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga1711621294dec8693e50c73502873cb8">TAG_DF5F_ADD_APP_VERSION</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a88b324674895d7548b40c7d597cdf84d">EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No</a>. [More\...](#ga31257afdc52fda5212500ffdbef44c25)<br/> |
| #define  | [XML_TAG_APPLIDATA_APP_FLOW_CAP](#ga50d78399df4e3c11369093dc4e841d7d)   \"AppFlowCap\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga732d040746d77b79e9ab53e4ab4abcf6">TAG_DF2B_APP_FLOW_CAP</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a>. [More\...](#ga50d78399df4e3c11369093dc4e841d7d)<br/> |
| #define  | [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM](#ga3ebc4e2121dd29d4a0c29bf0662fc2da)   \"AdditionalTagsTRM\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gabe548a652e3c1ccbb0c36443f0cab24e">TAG_DF29_ADD_TAGS</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad7a6039ab1aa91113c012eab4293d664">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM</a>. [More\...](#ga3ebc4e2121dd29d4a0c29bf0662fc2da)<br/> |
| #define  | [XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD](#ga4aa7498018941c11031f732a702ed08f)   \"AdditionalTagsCRD\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga6dfa73e43cd6f1a0a956d8a20d42efeb">TAG_DF2C_ADD_TAGS_CRD</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acd89bdbc00f19a23befec2eed0ff7b00">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD</a>. [More\...](#ga4aa7498018941c11031f732a702ed08f)<br/> |
| #define  | [XML_TAG_APPLIDATA_TAGLIST](#ga7ac889dd15056267afb8020e33de5ce6)   \"MandatoryTaglistCRD\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga5bbea3e13a9e17f2227d3756a0c8665b">TAG_DF2A_DUTY_TAGS</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a15601aa3b54c9da3032a3ed1d43b0b6b">EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD</a>. [More\...](#ga7ac889dd15056267afb8020e33de5ce6)<br/> |
| #define  | [XML_TAG_APPLIDATA_APP_TERM_CAP](#ga96e3d7de6bd5ffc66025301ce777531b)   \"AppTermCap\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7ac173f4a1d9a3845a18af806ee8bb31">EMV_CT_APPLIDATA_STRUCT::App_TermCap</a>. [More\...](#ga96e3d7de6bd5ffc66025301ce777531b)<br/> |
| #define  | [XML_TAG_APPLIDATA_COUNTRY_CODE_TERM](#ga834453de1096e1827ebe688eaab110f8)   \"CountryCodeTerm\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3cc1a7ad9805c9caf22a3164e3f1d326">EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm</a>. [More\...](#ga834453de1096e1827ebe688eaab110f8)<br/> |
| #define  | [XML_TAG_APPLIDATA_APP_TERM_ADD_CAP](#ga0a15bcaf24ec34bfde9b5a49217c7422)   \"AppTermAddCap\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa137395f6cc0b7618d9fec892c3c8b00">EMV_CT_APPLIDATA_STRUCT::App_TermAddCap</a>. [More\...](#ga0a15bcaf24ec34bfde9b5a49217c7422)<br/> |
| #define  | [XML_TAG_APPLIDATA_APP_TERM_TYP](#ga715c2019507324bd280553d4a2515127)   \"AppTerminalType\" |
|   | TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae3ea58006297dfb1045a9ff86831112e">EMV_CT_APPLIDATA_STRUCT::App_TermTyp</a>. [More\...](#ga715c2019507324bd280553d4a2515127)<br/> |
| #define  | [XML_TAG_APPLIDATA_AID_PRIO](#ga099f0028fb4bcb042b90d881d3c35318)   \"AID_Prio\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga932e21a3b1b113c5eafd8abd4715bab4">TAG_DF1D_PRIO_APPLI</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aafdd60748ec764b0398657d3a87e0d19">EMV_CT_APPLIDATA_STRUCT::xAIDPrio</a>. [More\...](#ga099f0028fb4bcb042b90d881d3c35318)<br/> |
| #define  | [XML_TAG_APPLIDATA_FALLBACK_MIDS](#gad0ea96486bd37aefabac74e308cb4f05)   \"FallbackMIDs\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga932e21a3b1b113c5eafd8abd4715bab4">TAG_DF1D_PRIO_APPLI</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afe1309924816c148ef5665647e4b3f53">EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs</a>. [More\...](#gad0ea96486bd37aefabac74e308cb4f05)<br/> |
| #define  | [XML_TAG_APPLIDATA_SPECIAL_TRX](#gafb41a5be33a5d300ab2f1a353ccdb39a)   \"SpecialTRX\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gab6d44f4c0940dd6d574a03820b2673dc">TAG_DF1C_SPECIAL_TRX</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab10831fed2998962919365d261912869">EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX</a>. [More\...](#gafb41a5be33a5d300ab2f1a353ccdb39a)<br/> |
| #define  | [XML_TAG_APPLIDATA_FALLBACK_HANDLING](#ga13a3483900584bc5fb5dee035a9f9bc0)   \"FallbackHandling\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaa606116b376f0e89c618e5477bb1e351">TAG_DF18_FALLABCK</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9d0d4cedf99a248f40af087fdfa40b51">EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling</a>. [More\...](#ga13a3483900584bc5fb5dee035a9f9bc0)<br/> |
| #define  | [XML_TAG_APPLIDATA_CUSTOMER_CVM](#ga9051fee0ad29cbed93a4fe88f74e2a88)   \"CustomerCVM\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae344911761717940db3f2e07f3e6363a">TAG_DF2F_CVM_CUSTOM</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afbad69449ba81d43f2d6a43309443bc6">EMV_CT_APPLIDATA_STRUCT::Customer_CVM</a>. [More\...](#ga9051fee0ad29cbed93a4fe88f74e2a88)<br/> |
| #define  | [XML_TAG_APPLIDATA_CHKSUM_PARAMS](#ga1bea96b6e55c18fe7225c7ef0707f45d)   \"ChksumParams\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8d1957a446ea91132fb417a0d8d0cd87">TAG_DF13_TERM_PARAM</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a906f3a211340298f467942b94e57010e">EMV_CT_APPLIDATA_STRUCT::Chksum_Params</a>. [More\...](#ga1bea96b6e55c18fe7225c7ef0707f45d)<br/> |
| #define  | [XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO](#ga9916553d54022e9ff269b4d9e82f7658)   \"ChksumASCII_EMVCO\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf795532d38b6fd7fe5e4b9aeeda03a58">TAG_DF12_CHECKSUM</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae6aab5905479e56d87c421779d57b603">EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO</a>. [More\...](#ga9916553d54022e9ff269b4d9e82f7658)<br/> |
| #define  | [XML_TAG_APPLIDATA_MASTER_AID](#gab39766fa922ae19d4827eae5fd14dab2)   \"MasterAID\" |
|   | TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga939333f4c5c2e500beb9b06d6939fb23">TAG_DF04_AID</a><br/>Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4844ee77295b43631df410adb1beaf41">EMV_CT_APPLIDATA_STRUCT::MasterAID</a>. [More\...](#gab39766fa922ae19d4827eae5fd14dab2)<br/> |
| #define  | [XML_TAG_APPLIDATA_TXN_TYPES_SALE](#ga83d1c097a8e6bd915c8786debb88f028)   \"TxnTypesSale\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga20c3d899e1759544b4fe9e9e4b95eeea">TAG_DFD004_TXN_TYPES_SALE</a><br/>Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2747a88626df7b02d5a6c3a283972736">EMV_CT_APPLIDATA_STRUCT::TxnTypesSale</a>. [More\...](#ga83d1c097a8e6bd915c8786debb88f028)<br/> |
| #define  | [XML_TAG_APPLIDATA_TXN_TYPES_CASH](#gab8ec9bff360881236d02281bd4c97f9c)   \"TxnTypesCash\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#gad5e676bfc0893326b66dd1915c1230ce">TAG_DFD005_TXN_TYPES_CASH</a><br/>Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaf06c0171381243a268293449aac83a3">EMV_CT_APPLIDATA_STRUCT::TxnTypesCash</a>. [More\...](#gab8ec9bff360881236d02281bd4c97f9c)<br/> |
| #define  | [XML_TAG_APPLIDATA_TXN_TYPES_CASHBACK](#ga6d192fb0bc37a441d298f328ef05ea07)   \"TxnTypesCashback\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga139574f5e46407ac2844efcb16c91d98">TAG_DFD006_TXN_TYPES_CASHBACK</a><br/>Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5c423eef2c409c104e37ae13ee5edc91">EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback</a>. [More\...](#ga6d192fb0bc37a441d298f328ef05ea07)<br/> |
| #define  | [XML_TAG_APPLIDATA_TXN_TYPES_REFUND](#gaa54bd4858a70eab42fa179ac3744a729)   \"TxnTypesRefund\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#gad06c010a334fdc3cdf73b3398fb696af">TAG_DFD007_TXN_TYPES_REFUND</a><br/>Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80c8a1f9e2c537ecbc027981dc237c0b">EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund</a>. [More\...](#gaa54bd4858a70eab42fa179ac3744a729)<br/> |
| #define  | [XML_TAG_APPLIDATA_DCR_LIST_IDS](#ga0662ce42e415d68b627a754d7e0e5259)   \"DataContainerReadIds\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#gacca3b2f66195b57095be5242cc7c747e">TAG_DFAB58_DCR_LIST_IDS</a><br/>Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a94cdb96dc0c72d50b22bc9ee29c25b9f">EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds</a>. [More\...](#ga0662ce42e415d68b627a754d7e0e5259)<br/> |
| #define  | [XML_TAG_APPLIDATA_DCR_LIST_RANGES](#ga3bc8db0b4aa5a989af015dd298b16c7b)   \"DataContainerReadRanges\" |
|   | TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga4e900f633bb23ee6490e0cfe6e7e32aa">TAG_DFAB59_DCR_LIST_RANGES</a><br/>Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a418acaa9bb3b4d2a70442c50205f69a3">EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges</a>. [More\...](#ga3bc8db0b4aa5a989af015dd298b16c7b)<br/> |
| #define  | [XML_TAG_VTM](#gacaa0b882a863697830b8d45bc689bf94)   \"VirtualTerminalMap\" |
|   | Enclosing tag used in \"EMV_VirtualTermConfig.xml\". [More\...](#gacaa0b882a863697830b8d45bc689bf94)<br/> |
| #define  | [XML_TAG_VTM_ENTRY](#ga808a59de04c2005f55356e0b5105ec85)   \"VTMEntry\" |
|   | One entry in \"EMV_VirtualTermConfig.xml\". [More\...](#ga808a59de04c2005f55356e0b5105ec85)<br/> |
| #define  | [XML_TAG_VTM_TERMINAL](#ga0655877ecf7e60793e932890a41cbf6d)   \"Terminal\" |
|   | Virtual terminal index used in \"EMV_VirtualTermConfig.xml\". [More\...](#ga0655877ecf7e60793e932890a41cbf6d)<br/> |
| #define  | [XML_TAG_VTM_TRANSTYPE](#ga13f8bb9237d759244863c3f450d1f6e6)   \"TransType_9C\" |
|   | Transaction type used in \"EMV_VirtualTermConfig.xml\". [More\...](#ga13f8bb9237d759244863c3f450d1f6e6)<br/> |
| #define  | [XML_TAG_VTM_CURRENCYCODE](#gabcde01c75efe189a50b25acb24eb5e97)   \"CurrencyCode_5F2A\" |
|   | Currency code used in \"EMV_VirtualTermConfig.xml\". [More\...](#gabcde01c75efe189a50b25acb24eb5e97)<br/> |

## DetailedDescription {#detailed-description}

Used for storing the configuration in XML files.

## MacroDefinition Documentation {#macro-definition-documentation}

## XML_TAG_AD <a href="#ga9caeb2556ba78d40a6229adb31aad324" id="ga9caeb2556ba78d40a6229adb31aad324"></a>

<p>#define XML_TAG_AD   \"ApplicationData\"</p>

constructed xml tag for application data containing sequence of [XML_TAG_AD_APP](#gac59e08c61f80cea0bfd193fea694fcb9 "Constructed tag for one AID, contains data from EMV_CTLS_APPLI_KERNEL_STRUCT and EMV_CTLS_APPLIDATA_S..."), used in \"EMV_CTLS_Apps_SchemeSpecific.xml\"

## XML_TAG_AD_9F01_ACQUIRER_ID <a href="#ga2574462d9c86ea3a5b38de70e6805abe" id="ga2574462d9c86ea3a5b38de70e6805abe"></a>

<p>#define XML_TAG_AD_9F01_ACQUIRER_ID   \"AcquirerIdentifier_9F01\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a>.

## XML_TAG_AD_9F09_VERSION_NUMBER <a href="#gaadbdb604ebc480d0ca6d77105987034e" id="gaadbdb604ebc480d0ca6d77105987034e"></a>

<p>#define XML_TAG_AD_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>.

## XML_TAG_AD_9F15_MERCHANT_CATEGORY_CODE <a href="#gae88b926438441531ae9092bd0bb660d1" id="gae88b926438441531ae9092bd0bb660d1"></a>

<p>#define XML_TAG_AD_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>.

## XML_TAG_AD_9F16_MERCHANT_ID <a href="#ga8da674894d29e2a9aa9510c076a78c4d" id="ga8da674894d29e2a9aa9510c076a78c4d"></a>

<p>#define XML_TAG_AD_9F16_MERCHANT_ID   \"MerchantIdentifier_9F16\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>.

## XML_TAG_AD_9F1A_TERM_COUNTRY_CODE <a href="#gac90c5457d7e98c811d727b03b2ce527f" id="gac90c5457d7e98c811d727b03b2ce527f"></a>

<p>#define XML_TAG_AD_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>.

## XML_TAG_AD_9F1C_TERM_IDENT <a href="#gaac04779e3fbe03f8b471661b313b4330" id="gaac04779e3fbe03f8b471661b313b4330"></a>

<p>#define XML_TAG_AD_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>.

## XML_TAG_AD_9F33_TERM_CAPS <a href="#gac7631a53460a29936f07cc2bc1d17443" id="gac7631a53460a29936f07cc2bc1d17443"></a>

<p>#define XML_TAG_AD_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>.

## XML_TAG_AD_9F35_TERM_TYPE <a href="#ga0326cdf90192c73abf14e7de25077543" id="ga0326cdf90192c73abf14e7de25077543"></a>

<p>#define XML_TAG_AD_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>.

## XML_TAG_AD_9F40_ADD_TERM_CAPS <a href="#ga72a5aead1f3bdb2063b3122a52ee5a02" id="ga72a5aead1f3bdb2063b3122a52ee5a02"></a>

<p>#define XML_TAG_AD_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>.

## XML_TAG_AD_9F4E_MERCHANT_NAME_LOCATION <a href="#gaae07de3e2c2bdf3ad815fb540c572cdc" id="gaae07de3e2c2bdf3ad815fb540c572cdc"></a>

<p>#define XML_TAG_AD_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>.

## XML_TAG_AD_AID <a href="#ga4f9fc396aafa280bc6ac486edac3413b" id="ga4f9fc396aafa280bc6ac486edac3413b"></a>

<p>#define XML_TAG_AD_AID   \"AID\"</p>

Application ID, TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gaa1a0900aa13055b0b5199a8542ea2c64">TAG_4F_APP_ID</a>
Struct element <a href="_e_m_v___c_t_l_s___interface_8h.md#a1af6aa5d2e82428d0fe225cfe2b3b501">EMV_CTLS_APPLI_KERNEL_STRUCT::AID</a>.

## XML_TAG_AD_AK <a href="#ga17a18036c23a727d40c3db25f35dcef8" id="ga17a18036c23a727d40c3db25f35dcef8"></a>

<p>#define XML_TAG_AD_AK   \"AmericanExpress\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_AK_STRUCT</a>.

## XML_TAG_AD_AK_9F01_ACQUIRER_ID <a href="#ga676f0b802fff9dc749b44bbbef18123c" id="ga676f0b802fff9dc749b44bbbef18123c"></a>

<p>#define XML_TAG_AD_AK_9F01_ACQUIRER_ID   \"AcquirerIdentifier_9F01\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_AK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];.

## XML_TAG_AD_AK_9F09_VERSION_NUMBER <a href="#gafac66550a33653a9120377200af2235a" id="gafac66550a33653a9120377200af2235a"></a>

<p>#define XML_TAG_AD_AK_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_AK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_AK_9F15_MERCHANT_CATEGORY_CODE <a href="#gafa38c391e12dea85b0d25e46c4f4b0d0" id="gafa38c391e12dea85b0d25e46c4f4b0d0"></a>

<p>#define XML_TAG_AD_AK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_AK_9F16_MERCHANT_ID <a href="#gab75b5e728d31dec055075010ab6e3af7" id="gab75b5e728d31dec055075010ab6e3af7"></a>

<p>#define XML_TAG_AD_AK_9F16_MERCHANT_ID   \"MerchantIdentifier_9F16\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];.

## XML_TAG_AD_AK_9F1A_TERM_COUNTRY_CODE <a href="#ga6fe642d9d709df7b57376de7199487fa" id="ga6fe642d9d709df7b57376de7199487fa"></a>

<p>#define XML_TAG_AD_AK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_AK_9F1C_TERM_IDENT <a href="#ga9c80a071ddf56b8c4dd869dd94d5b30c" id="ga9c80a071ddf56b8c4dd869dd94d5b30c"></a>

<p>#define XML_TAG_AD_AK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_AK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_AK_9F33_TERM_CAPS <a href="#ga924ae20c6fa78f27f8ed8c0b3428aef4" id="ga924ae20c6fa78f27f8ed8c0b3428aef4"></a>

<p>#define XML_TAG_AD_AK_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalCapabilities_9F33</a>\[3\];.

## XML_TAG_AD_AK_9F35_TERM_TYPE <a href="#ga51c286a0b3c558292d65d6d939cff9ce" id="ga51c286a0b3c558292d65d6d939cff9ce"></a>

<p>#define XML_TAG_AD_AK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_AK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_AK_9F40_ADD_TERM_CAPS <a href="#gae0b8027d5d821889d8b7e796992ac147" id="gae0b8027d5d821889d8b7e796992ac147"></a>

<p>#define XML_TAG_AD_AK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_AK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_AK_9F4E_MERCHANT_NAME_LOCATION <a href="#ga3a2bbeff0fa2bcff8de27960707998e6" id="ga3a2bbeff0fa2bcff8de27960707998e6"></a>

<p>#define XML_TAG_AD_AK_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_AK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_AK_9F6D_AMEX_CTLS_READER_CAPS <a href="#gae21e0f8806a8eecb7432962b8d6038c6" id="gae21e0f8806a8eecb7432962b8d6038c6"></a>

<p>#define XML_TAG_AD_AK_9F6D_AMEX_CTLS_READER_CAPS   \"AmexContactlessReaderCapabilities_9F6D\"</p>

TLV tag: <a href="group___e_x_p_r_e_s_s_p_a_y___t_a_g_s.md#ga33be7c69a6e1ffd03b22640e08745fff">TAG_9F6D_AMEX_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aea125d099b77a199d403ce4f3e82b4cc">EMV_CTLS_APPLIDATA_AK_STRUCT::AmexContactlessReaderCapabilities_9F6D</a>;.

## XML_TAG_AD_AK_9F6E_AMEX_TERM_TRX_CAPS <a href="#gae84a2ad6bbc9dec4ed44bf1a54705f42" id="gae84a2ad6bbc9dec4ed44bf1a54705f42"></a>

<p>#define XML_TAG_AD_AK_9F6E_AMEX_TERM_TRX_CAPS   \"AmexTerminalTransactionCapabilities_9F6E\"</p>

TLV tag: <a href="group___e_x_p_r_e_s_s_p_a_y___t_a_g_s.md#ga4ef2ef0cae4f0f667bd0eeccdf18faaf">TAG_9F6E_AMEX_ENHANCED_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5b96a70efc27aea80f2807131bc3232f">EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E</a>\[4\];.

## XML_TAG_AD_AK_DFAB30_TEC_SUPPORT <a href="#ga0ade647bbd8447cbe4c0f219b02b487a" id="ga0ade647bbd8447cbe4c0f219b02b487a"></a>

<p>#define XML_TAG_AD_AK_DFAB30_TEC_SUPPORT   \"TecSupport_DFAB30\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_AK_STRUCT::TecSupport_DFAB30</a>;.

## XML_TAG_AD_AK_DFAB31_APP_FLOW_CAP <a href="#ga32a88b3afac8f2b2fc71cb34649c33f5" id="ga32a88b3afac8f2b2fc71cb34649c33f5"></a>

<p>#define XML_TAG_AD_AK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_AK_DFAB40_CTLS_FLOOR_LIMIT <a href="#gac138bb1c91f02a072e00c491032047f0" id="gac138bb1c91f02a072e00c491032047f0"></a>

<p>#define XML_TAG_AD_AK_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_AK_DFAB41_CTLS_TRX_LIMIT <a href="#ga7a08e6b354dd3d1385721d27b1633c24" id="ga7a08e6b354dd3d1385721d27b1633c24"></a>

<p>#define XML_TAG_AD_AK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_AK_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#ga518e8182099c530f9d3db19cf7f81a44" id="ga518e8182099c530f9d3db19cf7f81a44"></a>

<p>#define XML_TAG_AD_AK_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_AK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_AK_DFAB43_TAC_DEFAULT <a href="#ga783b8ad05b92f4b240b35a48bd0b688a" id="ga783b8ad05b92f4b240b35a48bd0b688a"></a>

<p>#define XML_TAG_AD_AK_DFAB43_TAC_DEFAULT   \"TACDefault_DFAB43\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_AK_STRUCT::TACDefault_DFAB43</a>\[5\];.

## XML_TAG_AD_AK_DFAB44_TAC_DENIAL <a href="#ga5e5f4e29c2d3c20f82fee3c7e39606b7" id="ga5e5f4e29c2d3c20f82fee3c7e39606b7"></a>

<p>#define XML_TAG_AD_AK_DFAB44_TAC_DENIAL   \"TACDenial_DFAB44\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_AK_STRUCT::TACDenial_DFAB44</a>\[5\];.

## XML_TAG_AD_AK_DFAB45_TAC_ONLINE <a href="#ga1c3c97b73fa777a9613b2202084bf0bd" id="ga1c3c97b73fa777a9613b2202084bf0bd"></a>

<p>#define XML_TAG_AD_AK_DFAB45_TAC_ONLINE   \"TACOnline_DFAB45\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_AK_STRUCT::TACOnline_DFAB45</a>\[5\];.

## XML_TAG_AD_AK_DFAB49_ON_OFF_SWITCH <a href="#gaa8e790cfa2ab971f3e87a1c36deedd85" id="gaa8e790cfa2ab971f3e87a1c36deedd85"></a>

<p>#define XML_TAG_AD_AK_DFAB49_ON_OFF_SWITCH   \"OnOffSwitch_DFAB49\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga8ce5508c4959532fae6923215be6b978">TAG_DFAB49_DRL_SWITCHES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5493acb97631eeed9d74e6b051db1da0">EMV_CTLS_AK_DRL_ENTRY_STRUCT::OnOffSwitch_DFAB49</a>.

## XML_TAG_AD_AK_DFAB52_UN_RANGE <a href="#gadba0b407dde44ad12c5ee5e595dc9426" id="gadba0b407dde44ad12c5ee5e595dc9426"></a>

<p>#define XML_TAG_AD_AK_DFAB52_UN_RANGE   \"UnpredictableNumberRange_DFAB52\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga7e1311335c8c779b33eac469bd872cf8">TAG_DFAB52_AMEX_UN_RANGE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8383422b1af609acd922faa1d9e3abe9">EMV_CTLS_APPLIDATA_AK_STRUCT::UnpredictableNumberRange_DFAB52</a>.

## XML_TAG_AD_AK_FFAB01_AMEX_DRL_PARAMS <a href="#ga7f84720f74906bb526e44d600a26b264" id="ga7f84720f74906bb526e44d600a26b264"></a>

<p>#define XML_TAG_AD_AK_FFAB01_AMEX_DRL_PARAMS   \"AmexDRLParams_FFAB01\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___c_o_n_s_t_r.md#ga6da72379bdf0faa5dfcec68ec4dd4510">TAG_FFAB01_DRL_PARAMETER</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#adb7925c29affa71ae450ef807bd07e85">EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01</a>;.

## XML_TAG_AD_APP <a href="#gac59e08c61f80cea0bfd193fea694fcb9" id="gac59e08c61f80cea0bfd193fea694fcb9"></a>

<p>#define XML_TAG_AD_APP   \"Application\"</p>

Constructed tag for one AID, contains data from <a href="_e_m_v___c_t_l_s___interface_8h.md#struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t">EMV_CTLS_APPLI_KERNEL_STRUCT</a> and <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT</a>.

## XML_TAG_AD_BK <a href="#ga859b7ced9c21b89490d21b9ef5834a1f" id="ga859b7ced9c21b89490d21b9ef5834a1f"></a>

<p>#define XML_TAG_AD_BK   \"CPACE\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_BK_STRUCT</a>.

## XML_TAG_AD_CK <a href="#gae4c0c56c9a158bea2e90cda699be7d61" id="gae4c0c56c9a158bea2e90cda699be7d61"></a>

<p>#define XML_TAG_AD_CK   \"ChinaUnionPay\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_CK_STRUCT</a>.

## XML_TAG_AD_CK_9F09_VERSION_NUMBER <a href="#gac562a71249d3ec24c5237daec0b95755" id="gac562a71249d3ec24c5237daec0b95755"></a>

<p>#define XML_TAG_AD_CK_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_CK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_CK_9F15_MERCHANT_CATEGORY_CODE <a href="#ga36be6d44c2867d5e10835d59b40ab9f3" id="ga36be6d44c2867d5e10835d59b40ab9f3"></a>

<p>#define XML_TAG_AD_CK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_CK_9F16_MERCHANT_ID <a href="#ga43c02bda4f5f48f86091883328a7d6b9" id="ga43c02bda4f5f48f86091883328a7d6b9"></a>

<p>#define XML_TAG_AD_CK_9F16_MERCHANT_ID   \"MerchantIdentifier_9F16\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];.

## XML_TAG_AD_CK_9F1A_TERM_COUNTRY_CODE <a href="#ga4f12f92305877ef7300c9c457722e188" id="ga4f12f92305877ef7300c9c457722e188"></a>

<p>#define XML_TAG_AD_CK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_CK_9F1C_TERM_IDENT <a href="#gabb763b4c07f1921b9a2a348e96f7dc1b" id="gabb763b4c07f1921b9a2a348e96f7dc1b"></a>

<p>#define XML_TAG_AD_CK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_CK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_CK_9F33_TERM_CAPS <a href="#ga38f0d0171e00010507d5df2d89ab8f90" id="ga38f0d0171e00010507d5df2d89ab8f90"></a>

<p>#define XML_TAG_AD_CK_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalCapabilities_9F33</a>\[3\];.

## XML_TAG_AD_CK_9F35_TERM_TYPE <a href="#ga60549eb1d1ac164be143fb43d60ec24a" id="ga60549eb1d1ac164be143fb43d60ec24a"></a>

<p>#define XML_TAG_AD_CK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_CK_9F40_ADD_TERM_CAPS <a href="#ga38f03f6e8bf816f16c77d89fbe245f51" id="ga38f03f6e8bf816f16c77d89fbe245f51"></a>

<p>#define XML_TAG_AD_CK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_CK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_CK_9F4E_MERCHANT_NAME_LOCATION <a href="#gacdc261cc444eb24d122db2f09f775955" id="gacdc261cc444eb24d122db2f09f775955"></a>

<p>#define XML_TAG_AD_CK_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_CK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_CK_9F66_TERM_TRX_QUALIFIER <a href="#ga90082353125c3c8dd07c3b01b8ec301a" id="ga90082353125c3c8dd07c3b01b8ec301a"></a>

<p>#define XML_TAG_AD_CK_9F66_TERM_TRX_QUALIFIER   \"TerminalTransactionQualifier_9F66\"</p>

TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalTransactionQualifier_9F66</a>\[4\];.

## XML_TAG_AD_CK_DFAB30_TEC_SUPPORT <a href="#ga408d6bbb52e3bcb7e168dc8754310dce" id="ga408d6bbb52e3bcb7e168dc8754310dce"></a>

<p>#define XML_TAG_AD_CK_DFAB30_TEC_SUPPORT   \"TecSupport_DFAB30\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_CK_STRUCT::TecSupport_DFAB30</a>;.

## XML_TAG_AD_CK_DFAB31_APP_FLOW_CAP <a href="#gae1357f3c61e124527dbd203266e3256a" id="gae1357f3c61e124527dbd203266e3256a"></a>

<p>#define XML_TAG_AD_CK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_CK_DFAB40_CTLS_FLOOR_LIMIT <a href="#ga71d5585a35420f1a6d2d8959ee92fb5c" id="ga71d5585a35420f1a6d2d8959ee92fb5c"></a>

<p>#define XML_TAG_AD_CK_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_CK_DFAB41_CTLS_TRX_LIMIT <a href="#ga50ee28f6cdd3f7c7b7bebdfe8573be63" id="ga50ee28f6cdd3f7c7b7bebdfe8573be63"></a>

<p>#define XML_TAG_AD_CK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_CK_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#gacfb8c3923d60ae1d49434972e8e52236" id="gacfb8c3923d60ae1d49434972e8e52236"></a>

<p>#define XML_TAG_AD_CK_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_CK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_DF8118_CVM_ABOVE_LIMIT <a href="#ga94b2eed4980138684e0a219004dae40f" id="ga94b2eed4980138684e0a219004dae40f"></a>

<p>#define XML_TAG_AD_DF8118_CVM_ABOVE_LIMIT   \"CVM_aboveLimit_DF8118\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gae26b009b2e8fbc3f96890a6f8f05f917">TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a924188de218d213ed4e528127057b16c">EMV_CTLS_APPLIDATA_BK_STRUCT::CVM_aboveLimit_DF8118</a>;.

## XML_TAG_AD_DF8119_CVM_BELOW_LIMIT <a href="#ga4eeeec9f4fbbe6bac5d5f28576b83bc7" id="ga4eeeec9f4fbbe6bac5d5f28576b83bc7"></a>

<p>#define XML_TAG_AD_DF8119_CVM_BELOW_LIMIT   \"CVM_belowLimit_DF8119\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga891bf29200fdd3a0e520e68bb06d5a8d">TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7ad9b6a3e390831aa0ebfadc6cfe2fa7">EMV_CTLS_APPLIDATA_BK_STRUCT::CVM_belowLimit_DF8119</a>;.

## XML_TAG_AD_DF8124_TRX_LIMIT_NO_CDCVM <a href="#gaaba0e5284ffae47b5babcfc02bb4a2a3" id="gaaba0e5284ffae47b5babcfc02bb4a2a3"></a>

<p>#define XML_TAG_AD_DF8124_TRX_LIMIT_NO_CDCVM   \"TransactionLimitNoCDCVM_DF8124\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga97bfc09582df37b5cc75822f4efbfeb3">TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb2661377a60163b189ddc6a2a1943aa">EMV_CTLS_APPLIDATA_BK_STRUCT::TransactionLimitNoCDCVM_DF8124</a>\[6\];.

## XML_TAG_AD_DF8125_TRX_LIMIT_CDCVM <a href="#ga1fdb3fb836be1e6918aa3cb8daa94590" id="ga1fdb3fb836be1e6918aa3cb8daa94590"></a>

<p>#define XML_TAG_AD_DF8125_TRX_LIMIT_CDCVM   \"TransactionLimitCDCVM_DF8125\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga55d133646b780225892a8e430d85ed71">TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a38785329f7fba84649fcc662e9e264e1">EMV_CTLS_APPLIDATA_BK_STRUCT::TransactionLimitCDCVM_DF8125</a>\[6\];.

## XML_TAG_AD_DF8131_CHV_CS_MessageTable <a href="#ga2b315e48ce82ab77de45689f62e7dccc" id="ga2b315e48ce82ab77de45689f62e7dccc"></a>

<p>#define XML_TAG_AD_DF8131_CHV_CS_MessageTable   \"CHV_CS_MessageTable_DF8131\"</p>

TLV tag: [XML_TAG_AD_MK_DF8131_PHONE_MSG_TABLE](#ga62f573381dbe1a8096b0bf13ac15d38c "TLV tag: TAG_DF8131_PHONE_MSG_TABLE   Struct: EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131;...")
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af42f3c0140e4ba7e98c7fbf2bd20a612">EMV_CTLS_APPLIDATA_BK_STRUCT::CHV_CS_MessageTable_DF8131</a>;.

## XML_TAG_AD_DFAB02_ASI <a href="#ga23931bf572b98e20b11dcc5467794d53" id="ga23931bf572b98e20b11dcc5467794d53"></a>

<p>#define XML_TAG_AD_DFAB02_ASI   \"ASI_DFAB02\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gafe5da15801bec2bd77d947a157834b93">TAG_DFAB02_ASI</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad7b796959f437113eb08a0d5a055bfa9">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ASI_DFAB02</a>;

## XML_TAG_AD_DFAB03_APP_FLOW_CAP <a href="#gaada32f63da211af5504ab94fb2355ee6" id="gaada32f63da211af5504ab94fb2355ee6"></a>

<p>#define XML_TAG_AD_DFAB03_APP_FLOW_CAP   \"AppFlowCap_DFAB03\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga3c45ab910372e62b487333c0547c7355">TAG_DFAB03_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6b141ca640db3a0ea501018167b70531">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03</a>\[5\];

## XML_TAG_AD_DFAB04_PRIO_APPS <a href="#gad85745726179ea81ee9cd11e58095252" id="gad85745726179ea81ee9cd11e58095252"></a>

<p>#define XML_TAG_AD_DFAB04_PRIO_APPS   \"PriorityApplications_DFAB04\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga51c09305fb6284eccc1aab2e693ab15f">TAG_DFAB04_PRIO_APPS</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a984c64b64f07f57509ec8581284b3aa7">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::PriorityApplications_DFAB04</a>\[EMV_ADK_MAX_PRIO_APP\];

## XML_TAG_AD_DFAB05_SPECIAL_TRX_CONFIG <a href="#ga7da3f99c62238cb13b9226174ac14909" id="ga7da3f99c62238cb13b9226174ac14909"></a>

<p>#define XML_TAG_AD_DFAB05_SPECIAL_TRX_CONFIG   \"SpecialTRXConfig_DFAB05\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga0a0c8010bd0c0f86b71adbbaa9000918">TAG_DFAB05_SPECIAL_TRX_CFG</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af70ff3e0b1158f7b868655b1ef77f377">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::SpecialTRXConfig_DFAB05</a>\[8\];

## XML_TAG_AD_DFAB06_CHKSUM_ENTRY_POINT <a href="#gaf1d37eb69dad810fb7b3c06ac3a19703" id="gaf1d37eb69dad810fb7b3c06ac3a19703"></a>

<p>#define XML_TAG_AD_DFAB06_CHKSUM_ENTRY_POINT   \"ChksumEntryPoint_DFAB06\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga14258ef6983f51928a2a6c99948e0d9c">TAG_DFAB06_CHKSUM_EP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0bc4216ec7acb4fefe1d5791477dad78">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ChksumEntryPoint_DFAB06</a>\[EMV_ADK_CHECKSUM_ASCII_SIZE\];

## XML_TAG_AD_DFAB07_CHKSUM_KERNEL <a href="#ga825110c5de3f42ead0c05c5668551ce2" id="ga825110c5de3f42ead0c05c5668551ce2"></a>

<p>#define XML_TAG_AD_DFAB07_CHKSUM_KERNEL   \"ChksumKernel_DFAB07\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga34a29c6ff84372970b499ccdc9db16ef">TAG_DFAB07_CHKSUM_KERNEL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8fff947b0a275bd66907bf7012c7ef59">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::ChksumKernel_DFAB07</a>\[EMV_ADK_CHECKSUM_ASCII_SIZE\];

## XML_TAG_AD_DFAB08_RETAP_FIELD_OFF <a href="#gab3f9e0b2ace94e90049cf60bde238c9b" id="gab3f9e0b2ace94e90049cf60bde238c9b"></a>

<p>#define XML_TAG_AD_DFAB08_RETAP_FIELD_OFF   \"RetapFieldOff_DFAB08\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gacf23191e16912c5b79d4dc131273929a">TAG_DFAB08_RETAP_FIELD_OFF</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a21a7d1dd4fed708472fc123a0a03abfa">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::RetapFieldOff_DFAB08</a>;

## XML_TAG_AD_DFAB20_ADD_TAGS_TRM <a href="#gad7ab87e852cc4a26025afd07d17a902a" id="gad7ab87e852cc4a26025afd07d17a902a"></a>

<p>#define XML_TAG_AD_DFAB20_ADD_TAGS_TRM   \"AdditionalTagsTRM_DFAB20\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga45084da5a6be45a9d8f698c784f9b533">TAG_DFAB20_ADD_TAGS_TRM</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb1d4cd4bf1913ad2a42cb0764fcc619">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20</a>;

## XML_TAG_AD_DFAB21_ADD_TAGS_CRD <a href="#ga4104829597336be46d4854d8af96e87a" id="ga4104829597336be46d4854d8af96e87a"></a>

<p>#define XML_TAG_AD_DFAB21_ADD_TAGS_CRD   \"AdditionalTagsCRD_DFAB21\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga97704bb8567e8fde98dba20e8e5d579c">TAG_DFAB21_ADD_TAGS_CRD</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a04b972642e943c8509ed2d1802f2edc1">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21</a>;

## XML_TAG_AD_DFAB22_DEFAULT_APP_NAME <a href="#gab1a063d8990a8c5e899f27a161641ab4" id="gab1a063d8990a8c5e899f27a161641ab4"></a>

<p>#define XML_TAG_AD_DFAB22_DEFAULT_APP_NAME   \"DefaultApplicationName_DFAB22\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga08d9f5d4309c6574e292b8f93f49b886">TAG_DFAB22_DEF_APP_NAME</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa022d006c533c7901b3f03d691a7f4b0">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::DefaultApplicationName_DFAB22</a>\[16+1\];

## XML_TAG_AD_DFAB23_INTERNAL_KERNEL_ID <a href="#ga7624f253e42b46f6d9207cf7cae79b5a" id="ga7624f253e42b46f6d9207cf7cae79b5a"></a>

<p>#define XML_TAG_AD_DFAB23_INTERNAL_KERNEL_ID   \"InternalKernelId_DFAB23\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac55e826d40fc1c8e1ea51869fa1bc6cb">TAG_DFAB23_INTERNAL_KERNEL_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a750e97ca2975e2f5309417e707f3aab3">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::InternalKernelId_DFAB23</a>;

## XML_TAG_AD_DFAB30_TEC_SUPPORT <a href="#ga1bbb2b483834683506e0bbd644dba730" id="ga1bbb2b483834683506e0bbd644dba730"></a>

<p>#define XML_TAG_AD_DFAB30_TEC_SUPPORT   \"TecSupport_DFAB30\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a>.

## XML_TAG_AD_DFAB31_APP_FLOW_CAP <a href="#ga6b8be55da5b6d73ae05c3b3337e4d068" id="ga6b8be55da5b6d73ae05c3b3337e4d068"></a>

<p>#define XML_TAG_AD_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>.

## XML_TAG_AD_DFAB40_CTLS_FLOOR_LIMIT <a href="#gafc581a8f3d684e0d50242cdd1910384c" id="gafc581a8f3d684e0d50242cdd1910384c"></a>

<p>#define XML_TAG_AD_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>.

## XML_TAG_AD_DFAB41_CTLS_TRX_LIMIT <a href="#ga924fa1a4ca6efcdc90ea3ba9891def95" id="ga924fa1a4ca6efcdc90ea3ba9891def95"></a>

<p>#define XML_TAG_AD_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>.

## XML_TAG_AD_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#gaea5a78c6e1023d6abef845f69e7df4be" id="gaea5a78c6e1023d6abef845f69e7df4be"></a>

<p>#define XML_TAG_AD_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>.

## XML_TAG_AD_DFAB5B_CTLS_TRX_LIMIT_ODCVM <a href="#gaee433f2a21425de76cb0e6526f1528e4" id="gaee433f2a21425de76cb0e6526f1528e4"></a>

<p>#define XML_TAG_AD_DFAB5B_CTLS_TRX_LIMIT_ODCVM   \"CL_TXN_Limit_ODCVM_DFAB5B\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga7eb63c89a56b7f491d9f29abe6604b61">TAG_DFAB5B_CTLS_TRX_LIMIT_ODCVM</a>.

## XML_TAG_AD_DK <a href="#gac52c50c48fbb4a6cea92e7b671f829b0" id="gac52c50c48fbb4a6cea92e7b671f829b0"></a>

<p>#define XML_TAG_AD_DK   \"Discover\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_DK_STRUCT</a>.

## XML_TAG_AD_DK_9F09_VERSION_NUMBER <a href="#gaa4cf464050c637c55aa4ab1fb414b871" id="gaa4cf464050c637c55aa4ab1fb414b871"></a>

<p>#define XML_TAG_AD_DK_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_DK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_DK_9F15_MERCHANT_CATEGORY_CODE <a href="#ga4bf6a8e6677e8500395ec704a9f82ee1" id="ga4bf6a8e6677e8500395ec704a9f82ee1"></a>

<p>#define XML_TAG_AD_DK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_DK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_DK_9F1A_TERM_COUNTRY_CODE <a href="#ga6e1baba29149800acbb8e701d22f894b" id="ga6e1baba29149800acbb8e701d22f894b"></a>

<p>#define XML_TAG_AD_DK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_DK_9F1C_TERM_IDENT <a href="#ga928397e9050c00b4b44dba2d29b1fdac" id="ga928397e9050c00b4b44dba2d29b1fdac"></a>

<p>#define XML_TAG_AD_DK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_DK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_DK_9F33_TERM_CAPS <a href="#ga1700c7b6c7bdf393277ffbb884f96b03" id="ga1700c7b6c7bdf393277ffbb884f96b03"></a>

<p>#define XML_TAG_AD_DK_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalCapabilities_9F33</a>\[3\];.

## XML_TAG_AD_DK_9F35_TERM_TYPE <a href="#ga8ffc5928599ddf41c2d5e8f8d86b6ffc" id="ga8ffc5928599ddf41c2d5e8f8d86b6ffc"></a>

<p>#define XML_TAG_AD_DK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_DK_9F40_ADD_TERM_CAPS <a href="#gaee5ddd02d287fdd5124303aa70a4adcf" id="gaee5ddd02d287fdd5124303aa70a4adcf"></a>

<p>#define XML_TAG_AD_DK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_DK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_DK_9F66_TERM_TRX_QUALIFIER <a href="#ga48b82c6f1000b62b79d28922946213f0" id="ga48b82c6f1000b62b79d28922946213f0"></a>

<p>#define XML_TAG_AD_DK_9F66_TERM_TRX_QUALIFIER   \"TerminalTransactionQualifier_9F66\"</p>

TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalTransactionQualifier_9F66</a>\[4\];.

## XML_TAG_AD_DK_DFAB30_TEC_SUPPORT <a href="#ga22e8a67fe25578766bbfd87f04456f10" id="ga22e8a67fe25578766bbfd87f04456f10"></a>

<p>#define XML_TAG_AD_DK_DFAB30_TEC_SUPPORT   \"TecSupport_DFAB30\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_DK_STRUCT::TecSupport_DFAB30</a>;.

## XML_TAG_AD_DK_DFAB31_APP_FLOW_CAP <a href="#ga6c0c74e3e5f896300add429e75e00b58" id="ga6c0c74e3e5f896300add429e75e00b58"></a>

<p>#define XML_TAG_AD_DK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_DK_DFAB40_CTLS_FLOOR_LIMIT <a href="#ga2f2be903486eb4d85795c86fa0dbf1cf" id="ga2f2be903486eb4d85795c86fa0dbf1cf"></a>

<p>#define XML_TAG_AD_DK_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_DK_DFAB41_CTLS_TRX_LIMIT <a href="#gafe26dd9a5628ac1d6cdf8e8cbc4c3e57" id="gafe26dd9a5628ac1d6cdf8e8cbc4c3e57"></a>

<p>#define XML_TAG_AD_DK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_DK_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#ga45a75b7302a4997d8669d0915f49cd15" id="ga45a75b7302a4997d8669d0915f49cd15"></a>

<p>#define XML_TAG_AD_DK_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_DK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_DK_DFAB58_CONTAINER_IDS <a href="#ga69de9eacf4780bf3890b92243ed38bdf" id="ga69de9eacf4780bf3890b92243ed38bdf"></a>

<p>#define XML_TAG_AD_DK_DFAB58_CONTAINER_IDS   \"DataContainerReadIds_DFAB58\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab369deb5cfb1151b852c9fefd39f1137">TAG_DFAB58_ID_LIST</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a75fc0e5e9f1b2ed47fac2428b52dd514">EMV_CTLS_APPLIDATA_DK_STRUCT::DataContainerReadIds_DFAB58</a>.

## XML_TAG_AD_DK_DFAB59_CONTAINER_RANGES <a href="#ga63af455594800b8a019404269bb3de22" id="ga63af455594800b8a019404269bb3de22"></a>

<p>#define XML_TAG_AD_DK_DFAB59_CONTAINER_RANGES   \"DataContainerReadRanges_DFAB59\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga9825a781e8501bf908e3a8bfef211740">TAG_DFAB59_RANGE_LIST</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a42894365d82316f9b26686c51b138665">EMV_CTLS_APPLIDATA_DK_STRUCT::DataContainerReadRanges_DFAB59</a>.

## XML_TAG_AD_DOM <a href="#ga7a7c4819383998f2c791168a9d373a56" id="ga7a7c4819383998f2c791168a9d373a56"></a>

<p>#define XML_TAG_AD_DOM   \"domestic\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_DOM_STRUCT</a>.

## XML_TAG_AD_DOM_DFAB31_APP_FLOW_CAP <a href="#gaaa5d67beb51adba4f23988b62639b435" id="gaaa5d67beb51adba4f23988b62639b435"></a>

<p>#define XML_TAG_AD_DOM_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_DOM_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_DOM_DFAB41_CTLS_TRX_LIMIT <a href="#ga01bd2a5337b7c7bc10e0eb58436ed11d" id="ga01bd2a5337b7c7bc10e0eb58436ed11d"></a>

<p>#define XML_TAG_AD_DOM_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_DOM_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_EK <a href="#ga49f682eafc0d274b1382ea692fb17e89" id="ga49f682eafc0d274b1382ea692fb17e89"></a>

<p>#define XML_TAG_AD_EK   \"EPAL\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_EK_STRUCT</a>.

## XML_TAG_AD_EK_9F01_ACQUIRER_ID <a href="#gadbcbafcc9b33e748d692d0df86357bf3" id="gadbcbafcc9b33e748d692d0df86357bf3"></a>

<p>#define XML_TAG_AD_EK_9F01_ACQUIRER_ID   \"AcquirerIdentifier_9F01\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_EK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];.

## XML_TAG_AD_EK_9F09_VERSION_NUMBER <a href="#ga8710d5e932cbc43f44c4ac6d0c8058bb" id="ga8710d5e932cbc43f44c4ac6d0c8058bb"></a>

<p>#define XML_TAG_AD_EK_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_EK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_EK_9F15_MERCHANT_CATEGORY_CODE <a href="#ga024c405a2206ac9ce9ed8a92e56bcf6e" id="ga024c405a2206ac9ce9ed8a92e56bcf6e"></a>

<p>#define XML_TAG_AD_EK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_EK_9F16_MERCHANT_ID <a href="#gaab8463b0320abb66a4f5f3a9fd6f37e3" id="gaab8463b0320abb66a4f5f3a9fd6f37e3"></a>

<p>#define XML_TAG_AD_EK_9F16_MERCHANT_ID   \"MerchantIdentifier_9F16\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];.

## XML_TAG_AD_EK_9F1A_TERM_COUNTRY_CODE <a href="#gab34efe3fb77ab818e77e627c99d7c6bf" id="gab34efe3fb77ab818e77e627c99d7c6bf"></a>

<p>#define XML_TAG_AD_EK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_EK_9F1C_TERM_IDENT <a href="#ga5ad7d818060229ce7bcf711eb54740c3" id="ga5ad7d818060229ce7bcf711eb54740c3"></a>

<p>#define XML_TAG_AD_EK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_EK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_EK_9F33_TERM_CAPS <a href="#ga59db09138e122abb6e69bfc5c7339a48" id="ga59db09138e122abb6e69bfc5c7339a48"></a>

<p>#define XML_TAG_AD_EK_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalCapabilities_9F33</a>\[3\];.

## XML_TAG_AD_EK_9F35_TERM_TYPE <a href="#ga2777c7d1e2518b62676c628e348e5ba3" id="ga2777c7d1e2518b62676c628e348e5ba3"></a>

<p>#define XML_TAG_AD_EK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_EK_9F40_ADD_TERM_CAPS <a href="#ga844dcde751de1774b1712c463c383fdc" id="ga844dcde751de1774b1712c463c383fdc"></a>

<p>#define XML_TAG_AD_EK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_EK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_EK_9F4E_MERCHANT_NAME_LOCATION <a href="#gad4e32222f2f8bf15c03e64fc3373db73" id="gad4e32222f2f8bf15c03e64fc3373db73"></a>

<p>#define XML_TAG_AD_EK_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_EK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_EK_9F66_TERM_TRX_QUALIFIER <a href="#gad466b4b062f6af80b154ced47fe4c5ab" id="gad466b4b062f6af80b154ced47fe4c5ab"></a>

<p>#define XML_TAG_AD_EK_9F66_TERM_TRX_QUALIFIER   \"TerminalTransactionQualifier_9F66\"</p>

TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalTransactionQualifier_9F66</a>.

## XML_TAG_AD_EK_DFAB31_APP_FLOW_CAP <a href="#gaf6e645b1bbcefa10eff4de8d38306f20" id="gaf6e645b1bbcefa10eff4de8d38306f20"></a>

<p>#define XML_TAG_AD_EK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_EK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_EK_DFAB40_CTLS_FLOOR_LIMIT <a href="#gacfe34ee3395dd70e7fb6512a471e859e" id="gacfe34ee3395dd70e7fb6512a471e859e"></a>

<p>#define XML_TAG_AD_EK_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_EK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_EK_DFAB41_CTLS_TRX_LIMIT <a href="#ga50af1b8ce8ba9da1d75ca55e57a1b8a3" id="ga50af1b8ce8ba9da1d75ca55e57a1b8a3"></a>

<p>#define XML_TAG_AD_EK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_EK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_EK_DFAB43_TAC_DEFAULT <a href="#ga69072c39cfdb4b04db6d13510f201629" id="ga69072c39cfdb4b04db6d13510f201629"></a>

<p>#define XML_TAG_AD_EK_DFAB43_TAC_DEFAULT   \"TACDefault_DFAB43\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_EK_STRUCT::TACDefault_DFAB43</a>\[5\];.

## XML_TAG_AD_EK_DFAB44_TAC_DENIAL <a href="#ga2d14b2e41841162ffc0ebacfaf28b2fb" id="ga2d14b2e41841162ffc0ebacfaf28b2fb"></a>

<p>#define XML_TAG_AD_EK_DFAB44_TAC_DENIAL   \"TACDenial_DFAB44\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_EK_STRUCT::TACDenial_DFAB44</a>\[5\];.

## XML_TAG_AD_EK_DFAB45_TAC_ONLINE <a href="#ga40f45a0974e12d0562635c365b72dc70" id="ga40f45a0974e12d0562635c365b72dc70"></a>

<p>#define XML_TAG_AD_EK_DFAB45_TAC_ONLINE   \"TACOnline_DFAB45\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_EK_STRUCT::TACOnline_DFAB45</a>\[5\];.

## XML_TAG_AD_EK_DFAB4A_CTLS_TRX_LIMIT_CASH <a href="#ga146b16861780544f80cd7e3489c4555d" id="ga146b16861780544f80cd7e3489c4555d"></a>

<p>#define XML_TAG_AD_EK_DFAB4A_CTLS_TRX_LIMIT_CASH   \"CtlsTransactionLimitCash_DFAB4A\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gade3e980a887d630e918a1d9dd8e43cd8">TAG_DFAB4A_CTLS_TRX_LIMIT_CASH</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab0b0ace23f2e8fe449e00e34ad477c69">EMV_CTLS_APPLIDATA_EK_STRUCT::CtlsTransactionLimitCash_DFAB4A</a>\[6\];.

## XML_TAG_AD_GIROCARD <a href="#gaf56ec7b16f42aea92ac394dab8e5383b" id="gaf56ec7b16f42aea92ac394dab8e5383b"></a>

<p>#define XML_TAG_AD_GIROCARD   \"girocard\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_MK_STRUCT</a> (for German domestic scheme \"Girocard\")

## XML_TAG_AD_GK <a href="#gaa3dffe9145547b173faccc03005a326d" id="gaa3dffe9145547b173faccc03005a326d"></a>

<p>#define XML_TAG_AD_GK   \"Gemalto\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_GK_STRUCT</a>.

## XML_TAG_AD_GK_9F01_ACQUIRER_ID <a href="#ga0b9b71f4b415c702c66dbe52b58e1d9a" id="ga0b9b71f4b415c702c66dbe52b58e1d9a"></a>

<p>#define XML_TAG_AD_GK_9F01_ACQUIRER_ID   \"AcquirerIdentifier_9F01\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_GK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];.

## XML_TAG_AD_GK_9F09_VERSION_NUMBER <a href="#ga9f90e9ea9f6360fd0208a4dfbeba683b" id="ga9f90e9ea9f6360fd0208a4dfbeba683b"></a>

<p>#define XML_TAG_AD_GK_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_GK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_GK_9F15_MERCHANT_CATEGORY_CODE <a href="#ga5369c41b68e46cc19c325115912bac32" id="ga5369c41b68e46cc19c325115912bac32"></a>

<p>#define XML_TAG_AD_GK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_GK_9F16_MERCHANT_ID <a href="#gac1bb144adc2653138a5d221d89f0f139" id="gac1bb144adc2653138a5d221d89f0f139"></a>

<p>#define XML_TAG_AD_GK_9F16_MERCHANT_ID   \"MerchantIdentifier_9F16\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];.

## XML_TAG_AD_GK_9F1A_TERM_COUNTRY_CODE <a href="#ga1d0a518868fe204d9d921b3941d7c3cf" id="ga1d0a518868fe204d9d921b3941d7c3cf"></a>

<p>#define XML_TAG_AD_GK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_GK_9F1C_TERM_IDENT <a href="#ga71a899a0eccb54155e8930c0e26de482" id="ga71a899a0eccb54155e8930c0e26de482"></a>

<p>#define XML_TAG_AD_GK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_GK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_GK_9F33_TERM_CAPS <a href="#gac0a046c21b3863037c7cbf760750d386" id="gac0a046c21b3863037c7cbf760750d386"></a>

<p>#define XML_TAG_AD_GK_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalCapabilities_9F33</a>\[3\];.

## XML_TAG_AD_GK_9F35_TERM_TYPE <a href="#gac89361521e63e70348b050c462665100" id="gac89361521e63e70348b050c462665100"></a>

<p>#define XML_TAG_AD_GK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_GK_9F40_ADD_TERM_CAPS <a href="#gad16948bf4d61ee6d8737ac8e67060ec3" id="gad16948bf4d61ee6d8737ac8e67060ec3"></a>

<p>#define XML_TAG_AD_GK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_GK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_GK_9F4E_MERCHANT_NAME_LOCATION <a href="#gaa34740f14411558198e76e629f70126e" id="gaa34740f14411558198e76e629f70126e"></a>

<p>#define XML_TAG_AD_GK_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_GK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_GK_9F76_TERMINAL_TRX_DATA <a href="#ga06cd7b3424986d36028e8081fd84c2d8" id="ga06cd7b3424986d36028e8081fd84c2d8"></a>

<p>#define XML_TAG_AD_GK_9F76_TERMINAL_TRX_DATA   \"TerminalTransactionData_9F76\"</p>

TLV tag: <a href="group___g_e_m_a_l_t_o___t_a_g_s.md#ga2481f5687b7d5ecaef77e9b9bdca2155">TAG_9F76_PURE_TERM_TRX_DATA</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaecc0e86802f7f72a49f6d0541c47ce8">EMV_CTLS_APPLIDATA_GK_STRUCT::TerminalTransactionData_9F76</a>.

## XML_TAG_AD_GK_DFAB31_APP_FLOW_CAP <a href="#ga9025b678cb552e7cdb9133c6fbc60aff" id="ga9025b678cb552e7cdb9133c6fbc60aff"></a>

<p>#define XML_TAG_AD_GK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_GK_DFAB40_CTLS_FLOOR_LIMIT <a href="#gad5a142e306c40a81cb5f5986069c4bfc" id="gad5a142e306c40a81cb5f5986069c4bfc"></a>

<p>#define XML_TAG_AD_GK_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_GK_DFAB41_CTLS_TRX_LIMIT <a href="#ga7ea0e83ecff59bbd009d331cc31c0647" id="ga7ea0e83ecff59bbd009d331cc31c0647"></a>

<p>#define XML_TAG_AD_GK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_GK_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#ga7d6b4f17a1904736399baf34f94e6749" id="ga7d6b4f17a1904736399baf34f94e6749"></a>

<p>#define XML_TAG_AD_GK_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_GK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_GK_DFAB43_TAC_DEFAULT <a href="#ga29c4978ee625a1f641cfaeaf9823b64f" id="ga29c4978ee625a1f641cfaeaf9823b64f"></a>

<p>#define XML_TAG_AD_GK_DFAB43_TAC_DEFAULT   \"TACDefault_DFAB43\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_GK_STRUCT::TACDefault_DFAB43</a>\[5\];.

## XML_TAG_AD_GK_DFAB44_TAC_DENIAL <a href="#ga2a31d620fb4e9707de90298ea3a4124e" id="ga2a31d620fb4e9707de90298ea3a4124e"></a>

<p>#define XML_TAG_AD_GK_DFAB44_TAC_DENIAL   \"TACDenial_DFAB44\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_GK_STRUCT::TACDenial_DFAB44</a>\[5\];.

## XML_TAG_AD_GK_DFAB45_TAC_ONLINE <a href="#ga63c5be8d24f0d963a67883d76c265083" id="ga63c5be8d24f0d963a67883d76c265083"></a>

<p>#define XML_TAG_AD_GK_DFAB45_TAC_ONLINE   \"TACOnline_DFAB45\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_GK_STRUCT::TACOnline_DFAB45</a>\[5\];.

## XML_TAG_AD_GK_DFAB4F_CTLS_APP_KERN_CAP <a href="#ga863baf8eb302dd159c5f629d7401411a" id="ga863baf8eb302dd159c5f629d7401411a"></a>

<p>#define XML_TAG_AD_GK_DFAB4F_CTLS_APP_KERN_CAP   \"CtlsAppKernelCap_DFAB4F\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gabd7f05113879dd0978d4a67080016d9e">TAG_DFAB4F_PURE_CTLS_APP_KERN_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac413df6ede2a33de7f7767bb9161bb40">EMV_CTLS_APPLIDATA_GK_STRUCT::CtlsAppKernelCap_DFAB4F</a>.

## XML_TAG_AD_GK_DFAB50_MTOL <a href="#ga92ffbadf7b761e40d950431f58f4794b" id="ga92ffbadf7b761e40d950431f58f4794b"></a>

<p>#define XML_TAG_AD_GK_DFAB50_MTOL   \"MTOL_DFAB50\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga8d850ebb1abbb370cbdf60477d618496">TAG_DFAB50_PURE_MTOL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae3e0a5935877843b845d87ecab5c0ae5">EMV_CTLS_APPLIDATA_GK_STRUCT::MTOL_DFAB50</a>.

## XML_TAG_AD_GK_DFAB51_DEFAULT_DDOL <a href="#gaa4c13f6009eb173848f2eed3c6da7ed6" id="gaa4c13f6009eb173848f2eed3c6da7ed6"></a>

<p>#define XML_TAG_AD_GK_DFAB51_DEFAULT_DDOL   \"DefaultDDOL_DFAB51\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaaee6cefc61301ecd90247b1a26496c0f">TAG_DFAB51_CTLS_DEFAULT_DDOL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9e117a7d71c637dad1fe6c0e7f0ff778">EMV_CTLS_APPLIDATA_GK_STRUCT::DefaultDDOL_DFAB51</a>.

## XML_TAG_AD_GK_DFAB5A_APPLI_AUTH_TRX_TYPE <a href="#ga90254669672c94baecb8b6d6c57ed1e8" id="ga90254669672c94baecb8b6d6c57ed1e8"></a>

<p>#define XML_TAG_AD_GK_DFAB5A_APPLI_AUTH_TRX_TYPE   \"AppliAuthTransType_DFAB5A\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga244302289feb32ded58d5f1e232b41af">TAG_DFAB5A_PURE_APPLI_AUTH_TRX_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aefd03a6ffe405efa9370adf010e8d5ec">EMV_CTLS_APPLIDATA_GK_STRUCT::AppliAuthTransType_DFAB5A</a>.

## XML_TAG_AD_IK <a href="#ga228e2df08d4f3e81ee3e1c4387dd5441" id="ga228e2df08d4f3e81ee3e1c4387dd5441"></a>

<p>#define XML_TAG_AD_IK   \"Interac\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_IK_STRUCT</a>.

## XML_TAG_AD_IK_9F01_ACQUIRER_ID <a href="#ga030442dc1c8df310eecd2981616c41be" id="ga030442dc1c8df310eecd2981616c41be"></a>

<p>#define XML_TAG_AD_IK_9F01_ACQUIRER_ID   \"AcquirerIdentifier_9F01\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_IK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];.

## XML_TAG_AD_IK_9F09_VERSION_NUMBER <a href="#ga4166bcabd9830d1321276878d6e2823a" id="ga4166bcabd9830d1321276878d6e2823a"></a>

<p>#define XML_TAG_AD_IK_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_IK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_IK_9F15_MERCHANT_CATEGORY_CODE <a href="#gadca32d657cb29e8e0ef8b8d32a0cbba8" id="gadca32d657cb29e8e0ef8b8d32a0cbba8"></a>

<p>#define XML_TAG_AD_IK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_IK_9F16_MERCHANT_ID <a href="#ga44bf5f652b41cae2028686e74ebb8ebb" id="ga44bf5f652b41cae2028686e74ebb8ebb"></a>

<p>#define XML_TAG_AD_IK_9F16_MERCHANT_ID   \"MerchantIdentifier_9F16\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];.

## XML_TAG_AD_IK_9F1A_TERM_COUNTRY_CODE <a href="#gaa51ac4ec5003e26db37f3e1336fbc69d" id="gaa51ac4ec5003e26db37f3e1336fbc69d"></a>

<p>#define XML_TAG_AD_IK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_IK_9F1C_TERM_IDENT <a href="#ga27e4260b7bb5a452170ebbeb5cf0ded3" id="ga27e4260b7bb5a452170ebbeb5cf0ded3"></a>

<p>#define XML_TAG_AD_IK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_IK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_IK_9F33_TERM_CAPS <a href="#ga9cc19ce570c1257db632de603cf1eb37" id="ga9cc19ce570c1257db632de603cf1eb37"></a>

<p>#define XML_TAG_AD_IK_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalCapabilities_9F33</a>\[3\];.

## XML_TAG_AD_IK_9F35_TERM_TYPE <a href="#ga770655a2a970f56f1bed25354e9595b1" id="ga770655a2a970f56f1bed25354e9595b1"></a>

<p>#define XML_TAG_AD_IK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_IK_9F40_ADD_TERM_CAPS <a href="#ga9c75e9fcc832a061616dcb4f77a0be29" id="ga9c75e9fcc832a061616dcb4f77a0be29"></a>

<p>#define XML_TAG_AD_IK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_IK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_IK_9F4E_MERCHANT_NAME_LOCATION <a href="#gae7f91e9fb5bdd3bc6023f376a973bb41" id="gae7f91e9fb5bdd3bc6023f376a973bb41"></a>

<p>#define XML_TAG_AD_IK_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_IK_9F58_MERCHANT_TYPE_INDICATOR <a href="#ga83bf2a4f50b478fe7f24ab294ffad491" id="ga83bf2a4f50b478fe7f24ab294ffad491"></a>

<p>#define XML_TAG_AD_IK_9F58_MERCHANT_TYPE_INDICATOR   \"MerchantTypeIndicator_9F58\"</p>

TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#ga3ed9a0cea5a7839c74d034c22605ba7e">TAG_9F58_MERCH_TYPE_INDICATOR</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a465adca1bc35480a254eb4838faebcc3">EMV_CTLS_APPLIDATA_IK_STRUCT::MerchantTypeIndicator_9F58</a>;.

## XML_TAG_AD_IK_9F59_TERM_TRX_INFORMATION <a href="#ga4d116cfc05343a5d8ee9b89f92c4f185" id="ga4d116cfc05343a5d8ee9b89f92c4f185"></a>

<p>#define XML_TAG_AD_IK_9F59_TERM_TRX_INFORMATION   \"TerminalTransactionInformation_9F59\"</p>

TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#ga265e19e0b9a6af6ef7419d91671beb5b">TAG_9F59_TERM_TRANS_INFO</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ade0c4ac55e26f27eac5de04d17e3abd4">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionInformation_9F59</a>\[3\];.

## XML_TAG_AD_IK_9F5A_TERM_TRX_TYPE <a href="#ga646e748471e8288608d5769fe9dd313c" id="ga646e748471e8288608d5769fe9dd313c"></a>

<p>#define XML_TAG_AD_IK_9F5A_TERM_TRX_TYPE   \"TerminalTransactionType_9F5A\"</p>

TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#gae3a0c1352ba2253bf4989940364d079c">TAG_9F5A_TERM_TRANS_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4f0a93ccab7b6ac23efaf3f217334b85">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalTransactionType_9F5A</a>;.

## XML_TAG_AD_IK_9F5D_RECEIPT_REQ_LIMIT <a href="#ga7962ea536fd0508cd2cd0955e5b8c979" id="ga7962ea536fd0508cd2cd0955e5b8c979"></a>

<p>#define XML_TAG_AD_IK_9F5D_RECEIPT_REQ_LIMIT   \"ReceiptRequiredLimit_9F5D\"</p>

TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#ga9f229147f1568804b2dd19cd5e107d86">TAG_9F5D_TERM_CTLS_RECEIPT_REQUIRED_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab8bfa6b648fce4c5fd7101c9204b609a">EMV_CTLS_APPLIDATA_IK_STRUCT::ReceiptRequiredLimit_9F5D</a>\[6\];.

## XML_TAG_AD_IK_9F5E_TERM_OPTION_STATUS <a href="#ga409e8e927db674d5c8458bf6db056dfd" id="ga409e8e927db674d5c8458bf6db056dfd"></a>

<p>#define XML_TAG_AD_IK_9F5E_TERM_OPTION_STATUS   \"TerminalOptionStatus_9F5E\"</p>

TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#gadd1fedce8a2aa1b6490126943b541121">TAG_9F5E_TERM_OPTION_STATUS</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0cad3c3036a97f0d58b6833899a022ae">EMV_CTLS_APPLIDATA_IK_STRUCT::TerminalOptionStatus_9F5E</a>\[2\];.

## XML_TAG_AD_IK_9F5F_CTLS_FLOOR_LIMIT <a href="#gad9e32b4ef7874610f62cde5f7fd5ad04" id="gad9e32b4ef7874610f62cde5f7fd5ad04"></a>

<p>#define XML_TAG_AD_IK_9F5F_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_9F5F\"</p>

TLV tag: <a href="group___i_n_t_e_r_a_c___t_a_g_s.md#ga81000799324cec4dab00c2953f56cb3a">TAG_9F5F_READER_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa5083de092cef846211943e89a6ce570">EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessFloorLimit_9F5F</a>\[6\];.

## XML_TAG_AD_IK_DF6D_TRY_AGAIN_LIMIT <a href="#ga1e6bbadebd270422ab5222f2ec2c9196" id="ga1e6bbadebd270422ab5222f2ec2c9196"></a>

<p>#define XML_TAG_AD_IK_DF6D_TRY_AGAIN_LIMIT   \"TryAgainLimit_DF6D\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga27032ebc43b42c7d230e78a6a7831bb1">TAG_DF6D_TRY_AGAIN_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab96b5ddc67e3ecf968b1d2896d8a2d8a">EMV_CTLS_APPLIDATA_IK_STRUCT::TryAgainLimit_DF6D</a>;.

## XML_TAG_AD_IK_DFAB31_APP_FLOW_CAP <a href="#ga39b97f952caa9ef1a4ae3e1c10d2d28a" id="ga39b97f952caa9ef1a4ae3e1c10d2d28a"></a>

<p>#define XML_TAG_AD_IK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_IK_DFAB41_CTLS_TRX_LIMIT <a href="#gab4e2d085447febdab8f1a7e0c2a7b4c8" id="gab4e2d085447febdab8f1a7e0c2a7b4c8"></a>

<p>#define XML_TAG_AD_IK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_IK_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#gab1a49c963a7c28c6255eb987cf880957" id="gab1a49c963a7c28c6255eb987cf880957"></a>

<p>#define XML_TAG_AD_IK_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_IK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_IK_DFAB43_TAC_DEFAULT <a href="#ga8fc01943af2551fcd23d114fa4f1c2de" id="ga8fc01943af2551fcd23d114fa4f1c2de"></a>

<p>#define XML_TAG_AD_IK_DFAB43_TAC_DEFAULT   \"TACDefault_DFAB43\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_IK_STRUCT::TACDefault_DFAB43</a>\[5\];.

## XML_TAG_AD_IK_DFAB44_TAC_DENIAL <a href="#gaf2d47c7219cf71ca36e8d20213d1639a" id="gaf2d47c7219cf71ca36e8d20213d1639a"></a>

<p>#define XML_TAG_AD_IK_DFAB44_TAC_DENIAL   \"TACDenial_DFAB44\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_IK_STRUCT::TACDenial_DFAB44</a>\[5\];.

## XML_TAG_AD_IK_DFAB45_TAC_ONLINE <a href="#ga881bb1e00d9e2f29fce8271f583ca4d6" id="ga881bb1e00d9e2f29fce8271f583ca4d6"></a>

<p>#define XML_TAG_AD_IK_DFAB45_TAC_ONLINE   \"TACOnline_DFAB45\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_IK_STRUCT::TACOnline_DFAB45</a>\[5\];.

## XML_TAG_AD_IK_DFAB46_RISK_MGMT_THRESHOLD <a href="#gafbe07df7a7ae8a14f8b9a67fc56c8bb5" id="gafbe07df7a7ae8a14f8b9a67fc56c8bb5"></a>

<p>#define XML_TAG_AD_IK_DFAB46_RISK_MGMT_THRESHOLD   \"RiskManagementThreshold_DFAB46\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga03c938e159dbea0a48e833d5205f2529">TAG_DFAB46_RISK_MGMT_THRESHOLD</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a096278403e842d9b135643dcc67e834c">EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementThreshold_DFAB46</a>\[6\];.

## XML_TAG_AD_IK_DFAB47_RISK_MGMT_TRGT_PERC <a href="#ga8b3e985e5f2a715d0558a5ed25689da5" id="ga8b3e985e5f2a715d0558a5ed25689da5"></a>

<p>#define XML_TAG_AD_IK_DFAB47_RISK_MGMT_TRGT_PERC   \"RiskManagementTargetPercentage_DFAB47\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4795ddca7a863da46b56a3a34d3b9c39">TAG_DFAB47_RISK_MGMT_TRGT_PRCT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac09806019918cd2daedef5834c88740">EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementTargetPercentage_DFAB47</a>;.

## XML_TAG_AD_IK_DFAB48_RISK_MGMT_MAX_TRGT_PERC <a href="#gaeb436e2d4974f7810a79ff268526bdca" id="gaeb436e2d4974f7810a79ff268526bdca"></a>

<p>#define XML_TAG_AD_IK_DFAB48_RISK_MGMT_MAX_TRGT_PERC   \"RiskManagementMaximumTargetPercentage_DFAB48\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gad755eca2cea7087042166526654c7291">TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ec4f8eae672a49ef9f5538dc86e3075">EMV_CTLS_APPLIDATA_IK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48</a>;.

## XML_TAG_AD_JK <a href="#ga074dda08c87cc2568dbff760c3e18f08" id="ga074dda08c87cc2568dbff760c3e18f08"></a>

<p>#define XML_TAG_AD_JK   \"JCB\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_JK_STRUCT</a>.

## XML_TAG_AD_JK_9F01_ACQUIRER_ID <a href="#gabe1cae8ec11ae1c91b63cdbc481e26fe" id="gabe1cae8ec11ae1c91b63cdbc481e26fe"></a>

<p>#define XML_TAG_AD_JK_9F01_ACQUIRER_ID   \"AcquirerIdentifier_9F01\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_JK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];.

## XML_TAG_AD_JK_9F15_MERCHANT_CATEGORY_CODE <a href="#ga41b8b70578ff86c428eedf78b07714a5" id="ga41b8b70578ff86c428eedf78b07714a5"></a>

<p>#define XML_TAG_AD_JK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_JK_9F1A_TERM_COUNTRY_CODE <a href="#gaa29eb12f9dd67900cc6945726653372d" id="gaa29eb12f9dd67900cc6945726653372d"></a>

<p>#define XML_TAG_AD_JK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_JK_9F1C_TERM_IDENT <a href="#ga811c3fd7b7fd8139aec6d2e7583e009d" id="ga811c3fd7b7fd8139aec6d2e7583e009d"></a>

<p>#define XML_TAG_AD_JK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_JK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_JK_9F35_TERM_TYPE <a href="#gaf1c7553af9a7593377a58f24aa92e7ad" id="gaf1c7553af9a7593377a58f24aa92e7ad"></a>

<p>#define XML_TAG_AD_JK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_JK_9F4E_MERCHANT_NAME_LOCATION <a href="#ga49e28d220767f0a20f63b019fbce8fa1" id="ga49e28d220767f0a20f63b019fbce8fa1"></a>

<p>#define XML_TAG_AD_JK_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_JK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_JK_9F53_TERM_INTERCHANGE_PROFILE <a href="#ga806231354823672dc45657ff4c517af9" id="ga806231354823672dc45657ff4c517af9"></a>

<p>#define XML_TAG_AD_JK_9F53_TERM_INTERCHANGE_PROFILE   \"TerminalInterchangeProfile_9F53\"</p>

TLV tag: <a href="group___j_k___t_a_g_s.md#ga46908b906437ae7972c9a6aa93f0678c">TAG_9F53_TRM_INTERCHANGE_PROFILE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a52036c4e132a0218b7947ec317ffccc8">EMV_CTLS_APPLIDATA_JK_STRUCT::TerminalInterchangeProfile_9F53</a>\[3\];.

## XML_TAG_AD_JK_DFAB31_APP_FLOW_CAP <a href="#ga1caa97b3cfa7a7be882358865d865b4a" id="ga1caa97b3cfa7a7be882358865d865b4a"></a>

<p>#define XML_TAG_AD_JK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_JK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_JK_DFAB40_CTLS_FLOOR_LIMIT <a href="#gaba1256f652e84a529c26558bca5cb62e" id="gaba1256f652e84a529c26558bca5cb62e"></a>

<p>#define XML_TAG_AD_JK_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_JK_DFAB41_CTLS_TRX_LIMIT <a href="#ga0f6407252a7279735665028a81602532" id="ga0f6407252a7279735665028a81602532"></a>

<p>#define XML_TAG_AD_JK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_JK_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#ga0ca3a7cd27527dfd384e4ca9f39563a4" id="ga0ca3a7cd27527dfd384e4ca9f39563a4"></a>

<p>#define XML_TAG_AD_JK_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_JK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_JK_DFAB43_TAC_DEFAULT <a href="#gac7e6cbc6b7d6d56eb68a335a67c34690" id="gac7e6cbc6b7d6d56eb68a335a67c34690"></a>

<p>#define XML_TAG_AD_JK_DFAB43_TAC_DEFAULT   \"TACDefault_DFAB43\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_JK_STRUCT::TACDefault_DFAB43</a>\[5\];.

## XML_TAG_AD_JK_DFAB44_TAC_DENIAL <a href="#ga22fa06febc99f576174a834f60301956" id="ga22fa06febc99f576174a834f60301956"></a>

<p>#define XML_TAG_AD_JK_DFAB44_TAC_DENIAL   \"TACDenial_DFAB44\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_JK_STRUCT::TACDenial_DFAB44</a>\[5\];.

## XML_TAG_AD_JK_DFAB45_TAC_ONLINE <a href="#ga0597d8e0ff8e76e41b8497f1f2966ce5" id="ga0597d8e0ff8e76e41b8497f1f2966ce5"></a>

<p>#define XML_TAG_AD_JK_DFAB45_TAC_ONLINE   \"TACOnline_DFAB45\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_JK_STRUCT::TACOnline_DFAB45</a>\[5\];.

## XML_TAG_AD_JK_DFAB46_RISK_MGMT_THRESHOLD <a href="#ga53903aac8680f51b9c7d5181fe294dc4" id="ga53903aac8680f51b9c7d5181fe294dc4"></a>

<p>#define XML_TAG_AD_JK_DFAB46_RISK_MGMT_THRESHOLD   \"RiskManagementThreshold_DFAB46\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga03c938e159dbea0a48e833d5205f2529">TAG_DFAB46_RISK_MGMT_THRESHOLD</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a096278403e842d9b135643dcc67e834c">EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementThreshold_DFAB46</a>\[6\];.

## XML_TAG_AD_JK_DFAB47_RISK_MGMT_TRGT_PERC <a href="#ga4715e024fc44e2132cd82847c24fff78" id="ga4715e024fc44e2132cd82847c24fff78"></a>

<p>#define XML_TAG_AD_JK_DFAB47_RISK_MGMT_TRGT_PERC   \"RiskManagementTargetPercentage_DFAB47\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4795ddca7a863da46b56a3a34d3b9c39">TAG_DFAB47_RISK_MGMT_TRGT_PRCT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac09806019918cd2daedef5834c88740">EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementTargetPercentage_DFAB47</a>;.

## XML_TAG_AD_JK_DFAB48_RISK_MGMT_MAX_TRGT_PERC <a href="#ga2acabba5ab730a21bce6342fd30554f0" id="ga2acabba5ab730a21bce6342fd30554f0"></a>

<p>#define XML_TAG_AD_JK_DFAB48_RISK_MGMT_MAX_TRGT_PERC   \"RiskManagementMaximumTargetPercentage_DFAB48\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gad755eca2cea7087042166526654c7291">TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ec4f8eae672a49ef9f5538dc86e3075">EMV_CTLS_APPLIDATA_JK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48</a>;.

## XML_TAG_AD_JK_DFAB4B_COMBINATION_OPTIONS <a href="#gaef9991ee1eaa59f76b4f60a09277efed" id="gaef9991ee1eaa59f76b4f60a09277efed"></a>

<p>#define XML_TAG_AD_JK_DFAB4B_COMBINATION_OPTIONS   \"CombinationOptions_DFAB4B\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga9b6162a27a6c326c49610edda2e763c4">TAG_DFAB4B_COMBINATION_OPTIONS</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaa789d0a78a4161f4416a5cc853aa3f7">EMV_CTLS_APPLIDATA_JK_STRUCT::CombinationOptions_DFAB4B</a>\[2\];.

## XML_TAG_AD_JK_DFAB4C_REMOVAL_TIMEOUT <a href="#ga6394544b1d23499095830af6cab5c6a9" id="ga6394544b1d23499095830af6cab5c6a9"></a>

<p>#define XML_TAG_AD_JK_DFAB4C_REMOVAL_TIMEOUT   \"RemovalTimeout_DFAB4C\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga1b5114f265187889b782c5a8a86fb42b">TAG_DFAB4C_REMOVAL_TIMEOUT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af781e11637a7a71b447a2a282296b875">EMV_CTLS_APPLIDATA_JK_STRUCT::RemovalTimeout_DFAB4C</a>\[2\];.

## XML_TAG_AD_KERNEL_ID <a href="#ga7c8cfdea1faf6bff5245be09c70267a0" id="ga7c8cfdea1faf6bff5245be09c70267a0"></a>

<p>#define XML_TAG_AD_KERNEL_ID   \"KernelID\"</p>

Kernel ID, TLV tag <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaa5dcebd8d4d4bd17eab87fdc7a3ddc6b">TAG_DFAB01_KERNEL_ID</a>
Struct element <a href="_e_m_v___c_t_l_s___interface_8h.md#ae162469ea7144a6de337323d1c65b761">EMV_CTLS_APPLI_KERNEL_STRUCT::KernelID</a>.

## XML_TAG_AD_MK <a href="#ga00c9526d26f8e302cf8d748ff5627be2" id="ga00c9526d26f8e302cf8d748ff5627be2"></a>

<p>#define XML_TAG_AD_MK   \"MasterCard\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_MK_STRUCT</a>.

## XML_TAG_AD_MK_9F01_ACQUIRER_ID <a href="#ga814dd46185f7635ee55d0fb6827b0072" id="ga814dd46185f7635ee55d0fb6827b0072"></a>

<p>#define XML_TAG_AD_MK_9F01_ACQUIRER_ID   \"AcquirerIdentifier_9F01\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_MK_STRUCT::AcquirerIdentifier_9F01</a>\[6\];.

## XML_TAG_AD_MK_9F09_CHP_VERSION_NUMBER <a href="#gaf92fe97cc679ad4ebd8205e4148a2a79" id="gaf92fe97cc679ad4ebd8205e4148a2a79"></a>

<p>#define XML_TAG_AD_MK_9F09_CHP_VERSION_NUMBER   \"ChipVersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afebfd05421c4847bf81521a92ac3d8ee">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipVersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_MK_9F15_MERCHANT_CATEGORY_CODE <a href="#ga0168c4a6cd5939953ce0c53ec0f40f6d" id="ga0168c4a6cd5939953ce0c53ec0f40f6d"></a>

<p>#define XML_TAG_AD_MK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_MK_9F16_MERCHANT_ID <a href="#ga4d2be44d5cbfcf50e5a4b9bf9712d379" id="ga4d2be44d5cbfcf50e5a4b9bf9712d379"></a>

<p>#define XML_TAG_AD_MK_9F16_MERCHANT_ID   \"MerchantIdentifier_9F16\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];.

## XML_TAG_AD_MK_9F1A_TERM_COUNTRY_CODE <a href="#ga6c616ea6b2a63dbaeb7af6346ebcc58f" id="ga6c616ea6b2a63dbaeb7af6346ebcc58f"></a>

<p>#define XML_TAG_AD_MK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_MK_9F1C_TERM_IDENT <a href="#gadc61cbbb4d2fbfe7481b0a5825acdc45" id="gadc61cbbb4d2fbfe7481b0a5825acdc45"></a>

<p>#define XML_TAG_AD_MK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_MK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_MK_9F1D_TRM_RISK_MGMT_DATA <a href="#ga920f167d5422ff346ada24a3cd995037" id="ga920f167d5422ff346ada24a3cd995037"></a>

<p>#define XML_TAG_AD_MK_9F1D_TRM_RISK_MGMT_DATA   \"TerminalRiskManagementData_9F1D\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga9d809ba2d6c28d0989f1bbffffe35a45">TAG_9F1D_TRM_RISK_MNGT_DATA</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad71cd39800ac88311b925feaeafef835">EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalRiskManagementData_9F1D</a>\[8\];.

## XML_TAG_AD_MK_9F35_TERM_TYPE <a href="#ga435a71218ff105a93e8f7f623f421ad4" id="ga435a71218ff105a93e8f7f623f421ad4"></a>

<p>#define XML_TAG_AD_MK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_MK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_MK_9F40_ADD_TERM_CAPS <a href="#ga3a91157df0e2100cb89154ffb5a3c724" id="ga3a91157df0e2100cb89154ffb5a3c724"></a>

<p>#define XML_TAG_AD_MK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_MK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_MK_9F4E_MERCHANT_NAME_LOCATION <a href="#gaf3026c3abcf6207e0dfba11d2f9d36b0" id="gaf3026c3abcf6207e0dfba11d2f9d36b0"></a>

<p>#define XML_TAG_AD_MK_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_MK_9F53_TRX_CATEGORY_CODE <a href="#ga20f321574abf88bf5b95aac6165602ef" id="ga20f321574abf88bf5b95aac6165602ef"></a>

<p>#define XML_TAG_AD_MK_9F53_TRX_CATEGORY_CODE   \"TransactionCategoryCode_9F53\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga47396b01e28e3eadd46f0f1a5f79662e">TAG_9F53_TRANS_CATEGORY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac6b7c2240547bac95c5b696d14049a3b">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionCategoryCode_9F53</a>;.

## XML_TAG_AD_MK_9F5C_DS_REQUESTED_OPERATOR_ID <a href="#gadd17e779f66be9a83b011d9e01ca2c51" id="gadd17e779f66be9a83b011d9e01ca2c51"></a>

<p>#define XML_TAG_AD_MK_9F5C_DS_REQUESTED_OPERATOR_ID   \"DSRequestedOperatorID_9F5C\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gae3ff1dcce86b00807abf063eb2a6de2f">TAG_9F5C_DS_REQUESTED_OPERATOR_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80e6584bda848e756f8c9d5a5b832812">EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C</a>;.

## XML_TAG_AD_MK_9F6D_MSR_VERSION_NUMBER <a href="#gad76b1e45cec75ddf20d98737db4215f0" id="gad76b1e45cec75ddf20d98737db4215f0"></a>

<p>#define XML_TAG_AD_MK_9F6D_MSR_VERSION_NUMBER   \"MSRVersionNumber_9F6D\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gad65f96e73f89dae30c874870e0f97cb2">TAG_9F6D_TRM_APP_MSR_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#adfde93ebf20039feac2f95c2d0184277">EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_MK_9F7C_MERCHANT_CUSTOM_DATA <a href="#ga1c65c23d0311f4bf5594df51e5c13c17" id="ga1c65c23d0311f4bf5594df51e5c13c17"></a>

<p>#define XML_TAG_AD_MK_9F7C_MERCHANT_CUSTOM_DATA   \"MerchantCustomData_9F7C\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga347a4ace211c5abd340cc2c2f47e20f0">TAG_9F7C_MERCHANT_CUSTOM_DATA</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aec9159fa9d8ddc9e72887eec78e0466a">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C</a>.

## XML_TAG_AD_MK_DF810C_KERNEL_ID <a href="#ga7c458a6f36024339052cca5c021a9498" id="ga7c458a6f36024339052cca5c021a9498"></a>

<p>#define XML_TAG_AD_MK_DF810C_KERNEL_ID   \"KernelID_DF810C\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga1ac3033fda29e12b9fecdc62b2744d46">TAG_DF810C_KERNEL_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ada17f52aa7c3dbdd8b774922168c09">EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C</a>;.

## XML_TAG_AD_MK_DF8110_PROCEED_TO_FIRST_WRITE_FLAG <a href="#ga2e7c8e656c0332c2d1b9cdc4a81d5ba9" id="ga2e7c8e656c0332c2d1b9cdc4a81d5ba9"></a>

<p>#define XML_TAG_AD_MK_DF8110_PROCEED_TO_FIRST_WRITE_FLAG   \"ProceedToFirstWriteFlag_DF8110\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga3c18d291635a36adf3d61b16ad5e9ee2">TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a331f32df08bf0303f3cf092352d219ba">EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110</a>;.

## XML_TAG_AD_MK_DF8112_TAGS_TO_READ <a href="#ga5e877511d6aee528c98221bfb9cc410d" id="ga5e877511d6aee528c98221bfb9cc410d"></a>

<p>#define XML_TAG_AD_MK_DF8112_TAGS_TO_READ   \"TagsToRead_DF8112\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga634f6329a34aa4633f4514a41f31a0e3">TAG_DF8112_TAGS_TO_READ</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac3fe9ed51d7b7d75ea949a449311d7bd">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112</a>;.

## XML_TAG_AD_MK_DF8117_CARD_DATA_INPUT_CAP <a href="#gab6ec1862aa15b3add923e8b337d9b7ac" id="gab6ec1862aa15b3add923e8b337d9b7ac"></a>

<p>#define XML_TAG_AD_MK_DF8117_CARD_DATA_INPUT_CAP   \"CardDataInputCapability_DF8117\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga42b2457c0910cc5d33ad04ec5ca22974">TAG_DF8117_CARD_DATA_INPUT_CAPABILITY</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aae06d72d84f8cd4b1c6dbec8b6595e50">EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117</a>;.

## XML_TAG_AD_MK_DF8118_CHP_CVM_ABOVE_LIMIT <a href="#ga674de16887b9c1b53311137e99ed4258" id="ga674de16887b9c1b53311137e99ed4258"></a>

<p>#define XML_TAG_AD_MK_DF8118_CHP_CVM_ABOVE_LIMIT   \"ChipCVM_aboveLimit_DF8118\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gae26b009b2e8fbc3f96890a6f8f05f917">TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afd2cc1051e044d0ef00f4f0713abea9b">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118</a>;.

## XML_TAG_AD_MK_DF8119_CHP_CVM_BELOW_LIMIT <a href="#gaf62e2c41a80d5f8da1bd3583ab4c816a" id="gaf62e2c41a80d5f8da1bd3583ab4c816a"></a>

<p>#define XML_TAG_AD_MK_DF8119_CHP_CVM_BELOW_LIMIT   \"ChipCVM_belowLimit_DF8119\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga891bf29200fdd3a0e520e68bb06d5a8d">TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a51dce31dfdd9f05c79f0b3eba62cea89">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119</a>;.

## XML_TAG_AD_MK_DF811B_KERNEL_CONFIG <a href="#gae39599e0c48154673795010e56baeeca" id="gae39599e0c48154673795010e56baeeca"></a>

<p>#define XML_TAG_AD_MK_DF811B_KERNEL_CONFIG   \"KernelConfiguration_DF811B\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gaf54761e0bb859b84f08931b53ea2bcb3">TAG_DF811B_KERNEL_CONFIGURATION</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a896642c3eff7c8a2bb637aea4a3cf625">EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B</a>;.

## XML_TAG_AD_MK_DF811C_TORN_TRX_LIFETIME <a href="#gacbabddb1e6ff4c7830023a330ffe568a" id="gacbabddb1e6ff4c7830023a330ffe568a"></a>

<p>#define XML_TAG_AD_MK_DF811C_TORN_TRX_LIFETIME   \"TornTransactionLifetime_DF811C\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga8aaa1d9ac0acc2a512ea7c4292942818">TAG_DF811C_TRN_TXN_LIFETIME</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae7ce805109961212fd3b81f2893f854c">EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C</a>\[2\];.

## XML_TAG_AD_MK_DF811D_TORN_TRX_NUMBER <a href="#ga2fb175cddf554b8062606b2ce6821e6f" id="ga2fb175cddf554b8062606b2ce6821e6f"></a>

<p>#define XML_TAG_AD_MK_DF811D_TORN_TRX_NUMBER   \"TornTransactionNumber_DF811D\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gaafcebff672b6d27983cfd3ffe9568112">TAG_DF811D_TRN_TXN_NUMBER</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2961d7ec31ba7257e02df650186fa2cf">EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D</a>;.

## XML_TAG_AD_MK_DF811E_MSR_CVM_ABOVE_LIMIT <a href="#gade7ba9a4b8d07f82a4581fcda29a61cb" id="gade7ba9a4b8d07f82a4581fcda29a61cb"></a>

<p>#define XML_TAG_AD_MK_DF811E_MSR_CVM_ABOVE_LIMIT   \"MagstripeCVM_aboveLimit_DF811E\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gaafb1df3552503b65888886ebc175c2eb">TAG_DF811E_MSR_CVM_ABOVE_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a82fc51540e28fb76b48dd01347e13f43">EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_aboveLimit_DF811E</a>;.

## XML_TAG_AD_MK_DF811F_SECURITY_CAP <a href="#ga47293ac969e1d77e6f580e27d3921ad6" id="ga47293ac969e1d77e6f580e27d3921ad6"></a>

<p>#define XML_TAG_AD_MK_DF811F_SECURITY_CAP   \"SecurityCapability_DF811F\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gaf663ad885385fe9b0764fd5e159c1b3a">TAG_DF811F_SECURITY_CAPABILITY</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afb9be05d474bc208569ed6f61ea55a9f">EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F</a>;.

## XML_TAG_AD_MK_DF8120_TAC_DEFAULT <a href="#ga1af41111b9d9e730f45d217506dae165" id="ga1af41111b9d9e730f45d217506dae165"></a>

<p>#define XML_TAG_AD_MK_DF8120_TAC_DEFAULT   \"TACDefault_DF8120\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga8de41e2b23c67abd4560ad0e210ebcc0">TAG_DF8120_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7680fabfb53533dd8b3bb0c71a7484fe">EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120</a>\[5\];.

## XML_TAG_AD_MK_DF8121_TAC_DENIAL <a href="#ga8845dcd232cb753b238289d6deca349b" id="ga8845dcd232cb753b238289d6deca349b"></a>

<p>#define XML_TAG_AD_MK_DF8121_TAC_DENIAL   \"TACDenial_DF8121\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gaf7567abd6f21a6c76f4cf7c5be314b34">TAG_DF8121_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a78079e1470342e9c9677c8cecb4e5580">EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121</a>\[5\];.

## XML_TAG_AD_MK_DF8122_TAC_ONLINE <a href="#gaecd8afc192ef31b6f853ac9f7cafea38" id="gaecd8afc192ef31b6f853ac9f7cafea38"></a>

<p>#define XML_TAG_AD_MK_DF8122_TAC_ONLINE   \"TACOnline_DF8122\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga223085b47b7d8ef1a7f4ec69f9a32efb">TAG_DF8122_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa15ba42840580205287542f74ee37b66">EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122</a>\[5\];.

## XML_TAG_AD_MK_DF8123_FLOOR_LIMIT <a href="#gad835bd5288af49a5c55005d5404a3c60" id="gad835bd5288af49a5c55005d5404a3c60"></a>

<p>#define XML_TAG_AD_MK_DF8123_FLOOR_LIMIT   \"FloorLimit_DF8123\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga7e3bc2b53045bb7f683762fdb53a4358">TAG_DF8123_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a120bc0b391b6eb0b1dc88076cd460664">EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123</a>\[6\];.

## XML_TAG_AD_MK_DF8124_TRX_LIMIT_NO_ON_DEVICE <a href="#gab3652c4dcb2269ea391f48af807ab9b8" id="gab3652c4dcb2269ea391f48af807ab9b8"></a>

<p>#define XML_TAG_AD_MK_DF8124_TRX_LIMIT_NO_ON_DEVICE   \"TransactionLimitNoOnDevice_DF8124\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga97bfc09582df37b5cc75822f4efbfeb3">TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0c42a791bdd3497f5518e08ff7e6f18e">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124</a>\[6\];.

## XML_TAG_AD_MK_DF8125_TRX_LIMIT_ON_DEVICE <a href="#ga05955203610c16665e7e35d8cc8f40ad" id="ga05955203610c16665e7e35d8cc8f40ad"></a>

<p>#define XML_TAG_AD_MK_DF8125_TRX_LIMIT_ON_DEVICE   \"TransactionLimitOnDevice_DF8125\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga55d133646b780225892a8e430d85ed71">TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aad3ddefb848e37af03377938289edbfc">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125</a>\[6\];.

## XML_TAG_AD_MK_DF8126_CVM_REQUIRED_LIMIT <a href="#gae98f6f8d3a08a02b10f56ef146a0757c" id="gae98f6f8d3a08a02b10f56ef146a0757c"></a>

<p>#define XML_TAG_AD_MK_DF8126_CVM_REQUIRED_LIMIT   \"CVMRequiredLimit_DF8126\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga30158fe6b585cce6e0f823d6f3893821">TAG_DF8126_CVM_REQUIRED_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb20a04d178dc35df1a42c2d564f2440">EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126</a>\[6\];.

## XML_TAG_AD_MK_DF8127_DE_TIMEOUT_VALUE <a href="#ga5802d19425a826ecf2cc785b5632ab0b" id="ga5802d19425a826ecf2cc785b5632ab0b"></a>

<p>#define XML_TAG_AD_MK_DF8127_DE_TIMEOUT_VALUE   \"DETimeoutValue_DF8127\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga4f61ce936421c5a1abfea829e94e5567">TAG_DF8127_DE_TIMEOUT_VALUE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5cc8d2ff01a1967ba0e0b5eba8e3487">EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127</a>;.

## XML_TAG_AD_MK_DF812C_MSR_CVM_BELOW_LIMIT <a href="#ga0dad35a58403f4c8fa5087c586f655c5" id="ga0dad35a58403f4c8fa5087c586f655c5"></a>

<p>#define XML_TAG_AD_MK_DF812C_MSR_CVM_BELOW_LIMIT   \"MagstripeCVM_belowLimit_DF812C\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gab4ad1694319aab79dd087cd77de574b9">TAG_DF812C_MSR_CVM_BELOW_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#adf50b490082b4ad86b03ed2e044f1b98">EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_belowLimit_DF812C</a>;.

## XML_TAG_AD_MK_DF812D_MESSAGE_HOLD_TIME <a href="#gaa4927f95fc990fd67a77c10e6dc084de" id="gaa4927f95fc990fd67a77c10e6dc084de"></a>

<p>#define XML_TAG_AD_MK_DF812D_MESSAGE_HOLD_TIME   \"MessageHoldTime_DF812D\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gab6639b6014ddbc22057a1ad2ed9f21f1">TAG_DF812D_MESSAGE_HOLD_TIME</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1b020166d324dd6547910c8a661ee8e0">EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D</a>\[3\];.

## XML_TAG_AD_MK_DF8130_HOLD_TIME_VALUE <a href="#gaba4d9f625deef205323f0f44832c745c" id="gaba4d9f625deef205323f0f44832c745c"></a>

<p>#define XML_TAG_AD_MK_DF8130_HOLD_TIME_VALUE   \"HoldTimeValue_DF8130\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga14b2bd792d60d8cba426bccfc2546ffa">TAG_DF8130_HOLD_TIME_VALUE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a65466db9794ad80b1497f1d20d32e2e9">EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130</a>;.

## XML_TAG_AD_MK_DF8131_PHONE_MSG_TABLE <a href="#ga62f573381dbe1a8096b0bf13ac15d38c" id="ga62f573381dbe1a8096b0bf13ac15d38c"></a>

<p>#define XML_TAG_AD_MK_DF8131_PHONE_MSG_TABLE   \"PhoneMessageTable_DF8131\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga19265599710cf038895aea974b000166">TAG_DF8131_PHONE_MSG_TABLE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac229a9f37336fc77ec29829b7ef38d21">EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131</a>;.

## XML_TAG_AD_MK_DF8132_RR_MIN_GRACE_PERIOD <a href="#ga514dd5e769fa1ba0d808c97f804e3058" id="ga514dd5e769fa1ba0d808c97f804e3058"></a>

<p>#define XML_TAG_AD_MK_DF8132_RR_MIN_GRACE_PERIOD   \"RR_MinGracePeriod_DF8132\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gad002d7cb64f70850b6b57e2afe610eb2">TAG_DF8132_RR_MIN_GRACE_PERIOD</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2bb03c9482e6fc62c5683eaef07c8e37">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132</a>.

## XML_TAG_AD_MK_DF8133_RR_MAX_GRACE_PREIOD <a href="#ga9d73f54e46c609b8216cc94d9a88aa47" id="ga9d73f54e46c609b8216cc94d9a88aa47"></a>

<p>#define XML_TAG_AD_MK_DF8133_RR_MAX_GRACE_PREIOD   \"RR_MaxGracePeriod_DF8133\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gaff8cee533b36d5c16c57f9238ef5287f">TAG_DF8133_RR_MAX_GRACE_PERIOD</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a32193ead58f5038dbcb61f81eb5e28ae">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133</a>.

## XML_TAG_AD_MK_DF8134_RR_EXP_TRANS_TIME_CAPDU <a href="#gafc255d824c73f5a295a719cae5d3b4c1" id="gafc255d824c73f5a295a719cae5d3b4c1"></a>

<p>#define XML_TAG_AD_MK_DF8134_RR_EXP_TRANS_TIME_CAPDU   \"RR_ExpTransTimeCAPDU_DF8134\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gaeb20fef28673994edbc531e8e1deef45">TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af860b71c8466de6cfb4aaae655be44e4">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134</a>.

## XML_TAG_AD_MK_DF8135_RR_EXP_TRANS_TIME_RAPDU <a href="#gaa445cffdf9aa2ba1c155ac70ffd742e4" id="gaa445cffdf9aa2ba1c155ac70ffd742e4"></a>

<p>#define XML_TAG_AD_MK_DF8135_RR_EXP_TRANS_TIME_RAPDU   \"RR_ExpTransTimeRAPDU_DF8135\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga884b0eba03de051b0c696f740431e651">TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a99c98ba33d7b823984a9d3435666d65f">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135</a>.

## XML_TAG_AD_MK_DF8136_RR_ACCURACY_THRESHOLD <a href="#gaac645b02a3d5c525a2bd32b37b744877" id="gaac645b02a3d5c525a2bd32b37b744877"></a>

<p>#define XML_TAG_AD_MK_DF8136_RR_ACCURACY_THRESHOLD   \"RR_AccuracyThreshold_DF8136\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#gaa8edcf63c6c6e3573a87c1eb06d2c6b1">TAG_DF8136_RR_ACCURACY_THRESHOLD</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa07f0821f57d18b5d1a8c0c02ee1c62a">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136</a>.

## XML_TAG_AD_MK_DF8137_RR_TT_MISMATCH_THRESHOLD <a href="#ga03a3d5a2a2cdd2a2f324e0e7901c94ee" id="ga03a3d5a2a2cdd2a2f324e0e7901c94ee"></a>

<p>#define XML_TAG_AD_MK_DF8137_RR_TT_MISMATCH_THRESHOLD   \"RR_TransTimeMismatchThreshold_DF8137\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga13ac475cae84818b777e7d7a697f7001">TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae4e57b81456960fa9bf5ba1eef3bc0ff">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137</a>.

## XML_TAG_AD_MK_DFAB31_APP_FLOW_CAP <a href="#gaf19d32e414b4c776e4341f53fb872c6a" id="gaf19d32e414b4c776e4341f53fb872c6a"></a>

<p>#define XML_TAG_AD_MK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_MK_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC <a href="#ga9745d646ebc264fa75a570d8f72640d4" id="ga9745d646ebc264fa75a570d8f72640d4"></a>

<p>#define XML_TAG_AD_MK_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC   \"TagsToWriteBeforeGenAC_FF8102\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga91e87ea5c33e41742332a70c9e9b25e4">TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7521fa6374def935989383f7c5ce25e3">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102</a>;.

## XML_TAG_AD_MK_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC <a href="#ga70333473d53b60f7c75912d3e8f46d00" id="ga70333473d53b60f7c75912d3e8f46d00"></a>

<p>#define XML_TAG_AD_MK_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC   \"TagsToWriteAfterGenAC_FF8103\"</p>

TLV tag: <a href="group___m_c___t_a_g_s.md#ga59594ea453d6ad2452b61008edaf17f0">TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6bb13b23e1ca9c0f8f501dddcf36834e">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103</a>;.

## XML_TAG_AD_MR <a href="#ga3b7ff8acf83e0c165c42457c56e72ce5" id="ga3b7ff8acf83e0c165c42457c56e72ce5"></a>

<p>#define XML_TAG_AD_MR   \"MIR\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_MR_STRUCT</a>.

## XML_TAG_AD_MR_9F01_ACQUIRER_ID <a href="#ga0ca98d63f83b0c68562c606d70cd8021" id="ga0ca98d63f83b0c68562c606d70cd8021"></a>

<p>#define XML_TAG_AD_MR_9F01_ACQUIRER_ID   \"AcquirerIdentifier_9F01\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gaab4cf8e32535962270e6219bcbc08194">TAG_9F01_ACQ_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a60d3aeba5739afbe3c429fd39d005b9e">EMV_CTLS_APPLIDATA_MR_STRUCT::AcquirerIdentifier_9F01</a>\[6\];.

## XML_TAG_AD_MR_9F09_VERSION_NUMBER <a href="#gafcca18abf3043ecaceafbfd7a4ed4395" id="gafcca18abf3043ecaceafbfd7a4ed4395"></a>

<p>#define XML_TAG_AD_MR_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_MR_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_MR_9F15_MERCHANT_CATEGORY_CODE <a href="#gab12c65e731db375e52dee5a4db834070" id="gab12c65e731db375e52dee5a4db834070"></a>

<p>#define XML_TAG_AD_MR_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_MR_9F1A_TERM_COUNTRY_CODE <a href="#ga19b3a047f3e40c294d0921b057d39a06" id="ga19b3a047f3e40c294d0921b057d39a06"></a>

<p>#define XML_TAG_AD_MR_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_MR_9F1C_TERM_IDENT <a href="#gada1608589f085696ceb30deeb935159d" id="gada1608589f085696ceb30deeb935159d"></a>

<p>#define XML_TAG_AD_MR_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_MR_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_MR_9F35_TERM_TYPE <a href="#ga70d5f14087a4adadb0834a66dd725bfe" id="ga70d5f14087a4adadb0834a66dd725bfe"></a>

<p>#define XML_TAG_AD_MR_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_MR_9F4E_MERCHANT_NAME_LOCATION <a href="#ga5db863c1b0639cef0e245480ce374233" id="ga5db863c1b0639cef0e245480ce374233"></a>

<p>#define XML_TAG_AD_MR_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_MR_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_MR_DF51_TRM_FLOOR_LIMIT <a href="#ga36f9b8c3db2c17d4ce447c6d33c25948" id="ga36f9b8c3db2c17d4ce447c6d33c25948"></a>

<p>#define XML_TAG_AD_MR_DF51_TRM_FLOOR_LIMIT   \"TerminalFloorLimit_DF51\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga4dd15e9ee3a30a6777961d6fdf59df84">TAG_DF51_TRM_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a74e27e1b76b0bd686b3a781d75c62d8b">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalFloorLimit_DF51</a>\[6\];.

## XML_TAG_AD_MR_DF52_TRM_NOCVM_LIMIT <a href="#gac1310fa0d3f9edeccce6f8dc39f811be" id="gac1310fa0d3f9edeccce6f8dc39f811be"></a>

<p>#define XML_TAG_AD_MR_DF52_TRM_NOCVM_LIMIT   \"TerminalNoCVMLimit_DF52\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3bfb98b307995cefd6d6c715531bb9ce">TAG_DF52_TRM_NOCVM_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8b07f4d4d545a9f208a534028a536300">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalNoCVMLimit_DF52</a>\[6\];.

## XML_TAG_AD_MR_DF53_TRM_CTLS_LIMIT_NON_CDCVM <a href="#ga47c82c5f33b0c1e20138a45c20de54f8" id="ga47c82c5f33b0c1e20138a45c20de54f8"></a>

<p>#define XML_TAG_AD_MR_DF53_TRM_CTLS_LIMIT_NON_CDCVM   \"TerminalContactlessLimitNonCDCVM_DF53\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8bbe0e0821128b275e0839b729ac88e9">TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a002ee8e4ab4ea2a88f81832a19039f59">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitNonCDCVM_DF53</a>\[6\];.

## XML_TAG_AD_MR_DF54_TRM_CTLS_LIMIT_CDCVM <a href="#gaaa39cd174c31c653ce6893bc542a1c05" id="gaaa39cd174c31c653ce6893bc542a1c05"></a>

<p>#define XML_TAG_AD_MR_DF54_TRM_CTLS_LIMIT_CDCVM   \"TerminalContactlessLimitCDCVM_DF54\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga729abdd1acc5d0d5693bd0071cf84ffb">TAG_DF54_TRM_CTLS_LIMIT_CDCVM</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a23cc0c55ff19d5ed96f407d7d358e69c">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalContactlessLimitCDCVM_DF54</a>\[6\];.

## XML_TAG_AD_MR_DF55_TRM_TPM_CAPABILITIES <a href="#gaf1699b1e1ddefb8245738e78ff15a6df" id="gaf1699b1e1ddefb8245738e78ff15a6df"></a>

<p>#define XML_TAG_AD_MR_DF55_TRM_TPM_CAPABILITIES   \"TerminalTPMCapabilities_DF55\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaa8699891579c92d5f94f9b4ecb5bfd00">TAG_DF55_TRM_TPM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a62356837c0aca2e30fa7012244c4d0a0">EMV_CTLS_APPLIDATA_MR_STRUCT::TerminalTPMCapabilities_DF55</a>\[2\];.

## XML_TAG_AD_MR_DF56_TRANSACTION_RECOVERY_LIMIT <a href="#ga8aa28074f594b5543a1f5fc6a5fbcecc" id="ga8aa28074f594b5543a1f5fc6a5fbcecc"></a>

<p>#define XML_TAG_AD_MR_DF56_TRANSACTION_RECOVERY_LIMIT   \"TransactionRecoveryLimit_DF56\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gab9aeb6926d2b56dd0803b57cb8221c2d">TAG_DF56_TRANSACTION_RECOVERY_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac36341c56813c028334361fcec6aea8e">EMV_CTLS_APPLIDATA_MR_STRUCT::TransactionRecoveryLimit_DF56</a>;.

## XML_TAG_AD_MR_DFAB31_APP_FLOW_CAP <a href="#ga6b163b1654a82b4e3a64dba5daea720b" id="ga6b163b1654a82b4e3a64dba5daea720b"></a>

<p>#define XML_TAG_AD_MR_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_MR_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_MR_DFAB43_TAC_DEFAULT <a href="#ga2058d949c7971b107ec6d236130b95e0" id="ga2058d949c7971b107ec6d236130b95e0"></a>

<p>#define XML_TAG_AD_MR_DFAB43_TAC_DEFAULT   \"TACDefault_DFAB43\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_MR_STRUCT::TACDefault_DFAB43</a>\[5\];.

## XML_TAG_AD_MR_DFAB44_TAC_DENIAL <a href="#ga1fc7ce31881d1adf85de6da59539d1bb" id="ga1fc7ce31881d1adf85de6da59539d1bb"></a>

<p>#define XML_TAG_AD_MR_DFAB44_TAC_DENIAL   \"TACDenial_DFAB44\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_MR_STRUCT::TACDenial_DFAB44</a>\[5\];.

## XML_TAG_AD_MR_DFAB45_TAC_ONLINE <a href="#ga787f6891704fd406eddebcd617642b2e" id="ga787f6891704fd406eddebcd617642b2e"></a>

<p>#define XML_TAG_AD_MR_DFAB45_TAC_ONLINE   \"TACOnline_DFAB45\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_MR_STRUCT::TACOnline_DFAB45</a>\[5\];.

## XML_TAG_AD_MR_DFAB57_MIR_DATA_EXCHANGE_TAGS <a href="#gaae2d11590ad11a4bd992ccb1e3c43199" id="gaae2d11590ad11a4bd992ccb1e3c43199"></a>

<p>#define XML_TAG_AD_MR_DFAB57_MIR_DATA_EXCHANGE_TAGS   \"DataExchangeTagList_DFAB57\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga23c364ffc5ecb5da1c56852ee45a167a">TAG_DFAB57_MIR_DATA_EXCHANGE_TAGS</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac6d4527d26ab23434a0f2b0d4241f2b6">EMV_CTLS_APPLIDATA_MR_STRUCT::DataExchangeTagList_DFAB57</a>;.

## XML_TAG_AD_PB <a href="#ga45dceef9b7aa465fd847b156d1a09af7" id="ga45dceef9b7aa465fd847b156d1a09af7"></a>

<p>#define XML_TAG_AD_PB   \"PagoBancomat\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_PB_STRUCT</a>.

## XML_TAG_AD_PB_9F09_VERSION_NUMBER <a href="#ga8bd59ffa99b074a8a4ce6d0f5b69507b" id="ga8bd59ffa99b074a8a4ce6d0f5b69507b"></a>

<p>#define XML_TAG_AD_PB_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_PB_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_PB_9F1A_TERM_COUNTRY_CODE <a href="#gaaac374eb7c618eecd63451a5fa675e62" id="gaaac374eb7c618eecd63451a5fa675e62"></a>

<p>#define XML_TAG_AD_PB_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_PB_9F1C_TERM_IDENT <a href="#ga44935cf29467a5cd9763b189b29e0566" id="ga44935cf29467a5cd9763b189b29e0566"></a>

<p>#define XML_TAG_AD_PB_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_PB_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_PB_9F35_TERM_TYPE <a href="#ga75c4fd7d16c9267320cb339a32bf8855" id="ga75c4fd7d16c9267320cb339a32bf8855"></a>

<p>#define XML_TAG_AD_PB_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_PB_9F4E_MERCHANT_NAME_LOCATION <a href="#ga88348cc2652b802d817e7d0867dfb73d" id="ga88348cc2652b802d817e7d0867dfb73d"></a>

<p>#define XML_TAG_AD_PB_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_PB_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_PB_9F66_TERM_TRX_QUALIFIER <a href="#gafc03e8358c16909d06dce55ec73e64d6" id="gafc03e8358c16909d06dce55ec73e64d6"></a>

<p>#define XML_TAG_AD_PB_9F66_TERM_TRX_QUALIFIER   \"TerminalTransactionQualifier_9F66\"</p>

TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalTransactionQualifier_9F66</a>\[4\];.

## XML_TAG_AD_PB_DFAB31_APP_FLOW_CAP <a href="#ga52c253029b8e561b814f3c4e3af42451" id="ga52c253029b8e561b814f3c4e3af42451"></a>

<p>#define XML_TAG_AD_PB_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_PB_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_PB_DFAB40_CTLS_FLOOR_LIMIT <a href="#gadd41bdf2df615f5aeacd1c1a82f97df8" id="gadd41bdf2df615f5aeacd1c1a82f97df8"></a>

<p>#define XML_TAG_AD_PB_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_PB_DFAB41_CTLS_TRX_LIMIT <a href="#gad49249c8a92ffaa9853131cefd14e096" id="gad49249c8a92ffaa9853131cefd14e096"></a>

<p>#define XML_TAG_AD_PB_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_PB_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#ga5f6b626113cf4bce1572a8ec76be0bac" id="ga5f6b626113cf4bce1572a8ec76be0bac"></a>

<p>#define XML_TAG_AD_PB_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_PB_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_PB_DFAB43_TAC_DEFAULT <a href="#ga98b8bd2b7199b90ba3851c50b5be513d" id="ga98b8bd2b7199b90ba3851c50b5be513d"></a>

<p>#define XML_TAG_AD_PB_DFAB43_TAC_DEFAULT   \"TACDefault_DFAB43\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_PB_STRUCT::TACDefault_DFAB43</a>\[5\];.

## XML_TAG_AD_PB_DFAB44_TAC_DENIAL <a href="#gadd082475d320e24a8b5b830a0493a75e" id="gadd082475d320e24a8b5b830a0493a75e"></a>

<p>#define XML_TAG_AD_PB_DFAB44_TAC_DENIAL   \"TACDenial_DFAB44\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_PB_STRUCT::TACDenial_DFAB44</a>\[5\];.

## XML_TAG_AD_PB_DFAB45_TAC_ONLINE <a href="#ga36f2af2859294133b4b3f20ec521696c" id="ga36f2af2859294133b4b3f20ec521696c"></a>

<p>#define XML_TAG_AD_PB_DFAB45_TAC_ONLINE   \"TACOnline_DFAB45\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_PB_STRUCT::TACOnline_DFAB45</a>\[5\];.

## XML_TAG_AD_PB_DFAB46_RISK_MGMT_THRESHOLD <a href="#gae5094978fd102edadc628a3defe5dc6d" id="gae5094978fd102edadc628a3defe5dc6d"></a>

<p>#define XML_TAG_AD_PB_DFAB46_RISK_MGMT_THRESHOLD   \"RiskManagementThreshold_DFAB46\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga03c938e159dbea0a48e833d5205f2529">TAG_DFAB46_RISK_MGMT_THRESHOLD</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a096278403e842d9b135643dcc67e834c">EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementThreshold_DFAB46</a>\[6\];.

## XML_TAG_AD_PB_DFAB47_RISK_MGMT_TRGT_PERC <a href="#gaebd570c02e2a3725c4c08fd41f132a6c" id="gaebd570c02e2a3725c4c08fd41f132a6c"></a>

<p>#define XML_TAG_AD_PB_DFAB47_RISK_MGMT_TRGT_PERC   \"RiskManagementTargetPercentage_DFAB47\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4795ddca7a863da46b56a3a34d3b9c39">TAG_DFAB47_RISK_MGMT_TRGT_PRCT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac09806019918cd2daedef5834c88740">EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementTargetPercentage_DFAB47</a>;.

## XML_TAG_AD_PB_DFAB48_RISK_MGMT_MAX_TRGT_PERC <a href="#ga8869b72ba42466f4bb65ea2948f07aeb" id="ga8869b72ba42466f4bb65ea2948f07aeb"></a>

<p>#define XML_TAG_AD_PB_DFAB48_RISK_MGMT_MAX_TRGT_PERC   \"RiskManagementMaximumTargetPercentage_DFAB48\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gad755eca2cea7087042166526654c7291">TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ec4f8eae672a49ef9f5538dc86e3075">EMV_CTLS_APPLIDATA_PB_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48</a>;.

## XML_TAG_AD_PB_DFAB55_TAC_SWITCH_INTERFACE <a href="#gaae6f7de52a19aa7028fc3e9320e0dc96" id="gaae6f7de52a19aa7028fc3e9320e0dc96"></a>

<p>#define XML_TAG_AD_PB_DFAB55_TAC_SWITCH_INTERFACE   \"TACSwitchInterface_DFAB55\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga514e6b0aa34219d0bccd9b01ec4de45e">TAG_DFAB55_TAC_SWITCH_INTERFACE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af783aad0b195ebfa3f9037645fd0073f">EMV_CTLS_APPLIDATA_PB_STRUCT::TACSwitchInterface_DFAB55</a>\[5\];.

## XML_TAG_AD_PB_DFAB56_IAC_SWITCH_INTERFACE <a href="#gae148741ca8548a56462e0dc4cd5f1e52" id="gae148741ca8548a56462e0dc4cd5f1e52"></a>

<p>#define XML_TAG_AD_PB_DFAB56_IAC_SWITCH_INTERFACE   \"IACSwitchInterface_DFAB56\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga432cbf60b986d8829f530241dc24f37e">TAG_DFAB56_IAC_SWITCH_INTERFACE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a32fb661b0211fab5de9b9bdbeef56157">EMV_CTLS_APPLIDATA_PB_STRUCT::IACSwitchInterface_DFAB56</a>\[5\];.

## XML_TAG_AD_PK <a href="#ga32fb01c036e8a5dc0dbe7f9328b855ec" id="ga32fb01c036e8a5dc0dbe7f9328b855ec"></a>

<p>#define XML_TAG_AD_PK   \"VisaAsiaPacific\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_PK_STRUCT</a>.

## XML_TAG_AD_PK_9F1A_TERM_COUNTRY_CODE <a href="#ga656756c4b4bda82043b5bae8f9e2addb" id="ga656756c4b4bda82043b5bae8f9e2addb"></a>

<p>#define XML_TAG_AD_PK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_PK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_PK_9F1C_TERM_IDENT <a href="#ga03eaf6b7c271502273c265bae804cbb0" id="ga03eaf6b7c271502273c265bae804cbb0"></a>

<p>#define XML_TAG_AD_PK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_PK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_PK_9F35_TERM_TYPE <a href="#ga074be4d4e067f50091e050bd7645886b" id="ga074be4d4e067f50091e050bd7645886b"></a>

<p>#define XML_TAG_AD_PK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_PK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_PK_CVM_REQUIREMENTS <a href="#gad761c0a874844a3d2a187368159cbc90" id="gad761c0a874844a3d2a187368159cbc90"></a>

<p>#define XML_TAG_AD_PK_CVM_REQUIREMENTS   \"CvmRequirements_DF04\"</p>

TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#gad00d4584c8dece99bc5afe17252560c0">TAG_DF04_PK_CVM_REQUIREMENTS</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afbcb816298915570ae5e47a12805913d">EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04</a>;.

## XML_TAG_AD_PK_DF01_CTLS_CVM_REQ_LIMIT <a href="#ga4444c90a462dafc4f97afe711a76c178" id="ga4444c90a462dafc4f97afe711a76c178"></a>

<p>#define XML_TAG_AD_PK_DF01_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DF01\"</p>

TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga7c31703a767a4eb7a8de7a708f601633">TAG_DF01_PK_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aebed9ba683c113382c9a5c521d63ec27">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01</a>\[6\];.

## XML_TAG_AD_PK_DF02_CTLS_FLOOR_LIMIT <a href="#gabf0616ab6cec0a1f99e3e993852d806f" id="gabf0616ab6cec0a1f99e3e993852d806f"></a>

<p>#define XML_TAG_AD_PK_DF02_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DF02\"</p>

TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#gaefbade1401fdfc9c4f1f95779a8a8262">TAG_DF02_PK_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5cd219dce6240490e80e2580f9328966">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02</a>\[6\];.

## XML_TAG_AD_PK_DFAB31_APP_FLOW_CAP <a href="#ga528da5c0d59eebb9f280e13f6ea71c2a" id="ga528da5c0d59eebb9f280e13f6ea71c2a"></a>

<p>#define XML_TAG_AD_PK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_PK_DFAB41_CTLS_TRX_LIMIT <a href="#gadd4639f125bed99ae80725fe4c00a556" id="gadd4639f125bed99ae80725fe4c00a556"></a>

<p>#define XML_TAG_AD_PK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_RK <a href="#ga25825fbd315fa86ce226a660e420743a" id="ga25825fbd315fa86ce226a660e420743a"></a>

<p>#define XML_TAG_AD_RK   \"RuPay\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_RK_STRUCT</a>.

## XML_TAG_AD_RK_9F09_VERSION_NUMBER <a href="#ga66d7ee35bacdd6610fe29728b1dc90db" id="ga66d7ee35bacdd6610fe29728b1dc90db"></a>

<p>#define XML_TAG_AD_RK_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_RK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_RK_9F15_MERCHANT_CATEGORY_CODE <a href="#gab20d73b6497cd64bf2519e2722ad0105" id="gab20d73b6497cd64bf2519e2722ad0105"></a>

<p>#define XML_TAG_AD_RK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_RK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_RK_9F1A_TERM_COUNTRY_CODE <a href="#ga95f86e65eb334dea43577a0a21b745ab" id="ga95f86e65eb334dea43577a0a21b745ab"></a>

<p>#define XML_TAG_AD_RK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_RK_9F1C_TERM_IDENT <a href="#ga17cdff6c87c85c3759258472a5f6557b" id="ga17cdff6c87c85c3759258472a5f6557b"></a>

<p>#define XML_TAG_AD_RK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_RK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_RK_9F33_TERM_CAPS <a href="#ga94603469b3e573ca698cadc97a1c2372" id="ga94603469b3e573ca698cadc97a1c2372"></a>

<p>#define XML_TAG_AD_RK_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalCapabilities_9F33</a>\[3\];.

## XML_TAG_AD_RK_9F35_TERM_TYPE <a href="#gae07b4f85c06af6cff2a8beb242780caf" id="gae07b4f85c06af6cff2a8beb242780caf"></a>

<p>#define XML_TAG_AD_RK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_RK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_RK_9F40_ADD_TERM_CAPS <a href="#ga2f80312f8aee9fccf8e19265c10ca539" id="ga2f80312f8aee9fccf8e19265c10ca539"></a>

<p>#define XML_TAG_AD_RK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_RK_DF3A_ADD_TERM_CAPS_EXT <a href="#ga5c0cce7528cd78917ef1394da4d1cfba" id="ga5c0cce7528cd78917ef1394da4d1cfba"></a>

<p>#define XML_TAG_AD_RK_DF3A_ADD_TERM_CAPS_EXT   \"AdditionalTerminalCapabilitiesExt_DF3A\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga9c54250ab313a2fa165a42e89fa51945">TAG_DF3A_ADD_TRM_CAP_EXT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa067675fcb990973520ebd4bd342fa91">EMV_CTLS_APPLIDATA_RK_STRUCT::AdditionalTerminalCapabilitiesExt_DF3A</a>\[5\];.

## XML_TAG_AD_RK_DFAB31_APP_FLOW_CAP <a href="#ga9178725a98ac9074056ed23575774f8c" id="ga9178725a98ac9074056ed23575774f8c"></a>

<p>#define XML_TAG_AD_RK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_RK_DFAB40_CTLS_FLOOR_LIMIT <a href="#ga426e907f5ea4b32a24c228d2893e0c8b" id="ga426e907f5ea4b32a24c228d2893e0c8b"></a>

<p>#define XML_TAG_AD_RK_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_RK_DFAB41_CTLS_TRX_LIMIT <a href="#ga30b70c64049c5e3acd724d57c5f4fded" id="ga30b70c64049c5e3acd724d57c5f4fded"></a>

<p>#define XML_TAG_AD_RK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_RK_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#ga76930fffe2d21abf332b982311f998d7" id="ga76930fffe2d21abf332b982311f998d7"></a>

<p>#define XML_TAG_AD_RK_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_RK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_RK_DFAB43_TAC_DEFAULT <a href="#ga78b11b0a33ce31c38c91bc38f3915dfe" id="ga78b11b0a33ce31c38c91bc38f3915dfe"></a>

<p>#define XML_TAG_AD_RK_DFAB43_TAC_DEFAULT   \"TACDefault_DFAB43\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_RK_STRUCT::TACDefault_DFAB43</a>\[5\];.

## XML_TAG_AD_RK_DFAB44_TAC_DENIAL <a href="#gac3e0ed0f97337d240b64282e11c3c229" id="gac3e0ed0f97337d240b64282e11c3c229"></a>

<p>#define XML_TAG_AD_RK_DFAB44_TAC_DENIAL   \"TACDenial_DFAB44\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_RK_STRUCT::TACDenial_DFAB44</a>\[5\];.

## XML_TAG_AD_RK_DFAB45_TAC_ONLINE <a href="#gae06a2076329f552598a8e87fff201ff9" id="gae06a2076329f552598a8e87fff201ff9"></a>

<p>#define XML_TAG_AD_RK_DFAB45_TAC_ONLINE   \"TACOnline_DFAB45\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_RK_STRUCT::TACOnline_DFAB45</a>\[5\];.

## XML_TAG_AD_RK_DFAB46_RISK_MGMT_THRESHOLD <a href="#ga9575d0193a811ccf006c807aeaacefc7" id="ga9575d0193a811ccf006c807aeaacefc7"></a>

<p>#define XML_TAG_AD_RK_DFAB46_RISK_MGMT_THRESHOLD   \"RiskManagementThreshold_DFAB46\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga03c938e159dbea0a48e833d5205f2529">TAG_DFAB46_RISK_MGMT_THRESHOLD</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a096278403e842d9b135643dcc67e834c">EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementThreshold_DFAB46</a>\[6\];.

## XML_TAG_AD_RK_DFAB47_RISK_MGMT_TRGT_PERC <a href="#ga6bf3fa9d70bdbe4a07bf6f9c57123897" id="ga6bf3fa9d70bdbe4a07bf6f9c57123897"></a>

<p>#define XML_TAG_AD_RK_DFAB47_RISK_MGMT_TRGT_PERC   \"RiskManagementTargetPercentage_DFAB47\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4795ddca7a863da46b56a3a34d3b9c39">TAG_DFAB47_RISK_MGMT_TRGT_PRCT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac09806019918cd2daedef5834c88740">EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementTargetPercentage_DFAB47</a>;.

## XML_TAG_AD_RK_DFAB48_RISK_MGMT_MAX_TRGT_PERC <a href="#ga5f3ec698e668ad3b0d6df80d831ce946" id="ga5f3ec698e668ad3b0d6df80d831ce946"></a>

<p>#define XML_TAG_AD_RK_DFAB48_RISK_MGMT_MAX_TRGT_PERC   \"RiskManagementMaximumTargetPercentage_DFAB48\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gad755eca2cea7087042166526654c7291">TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ec4f8eae672a49ef9f5538dc86e3075">EMV_CTLS_APPLIDATA_RK_STRUCT::RiskManagementMaximumTargetPercentage_DFAB48</a>;.

## XML_TAG_AD_RK_DFAB4D_CALLBACK_TIMEOUT <a href="#gafb5952319a54de26fad4c98dd02d89fc" id="gafb5952319a54de26fad4c98dd02d89fc"></a>

<p>#define XML_TAG_AD_RK_DFAB4D_CALLBACK_TIMEOUT   \"CallbackTimeout_DFAB4D\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga8c003bdaed26f44ad570217a763680cd">TAG_DFAB4D_RUPAY_CALLBACK_TIMEOUT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a828f539d6ebbffb74146b546db4eb6d7">EMV_CTLS_APPLIDATA_RK_STRUCT::CallbackTimeout_DFAB4D</a>\[2\];.

## XML_TAG_AD_RK_DFAB4E_TORN_TRX_INTERVAL <a href="#gaec00500f8a30f8ad98ebf1e93802ac87" id="gaec00500f8a30f8ad98ebf1e93802ac87"></a>

<p>#define XML_TAG_AD_RK_DFAB4E_TORN_TRX_INTERVAL   \"TornTransactionInterval_DFAB4E\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaa552982c326d11acd8cdb672c94447fc">TAG_DFAB4E_RUPAY_TORN_TRX_INTERVAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2b2bd262153668e95468f9db8ff296ce">EMV_CTLS_APPLIDATA_RK_STRUCT::TornTransactionInterval_DFAB4E</a>\[2\];.

## XML_TAG_AD_SK <a href="#ga0ff45ba26a2dbd983d1cba6b9aa634c9" id="ga0ff45ba26a2dbd983d1cba6b9aa634c9"></a>

<p>#define XML_TAG_AD_SK   \"SIBS\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_SK_STRUCT</a>.

## XML_TAG_AD_SK_9F09_VERSION_NUMBER <a href="#ga5ee5f97971dbd18fbb03017cd57f4704" id="ga5ee5f97971dbd18fbb03017cd57f4704"></a>

<p>#define XML_TAG_AD_SK_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_SK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_SK_9F15_MERCHANT_CATEGORY_CODE <a href="#gac7073443ff4375d652c4f7a8af790f0e" id="gac7073443ff4375d652c4f7a8af790f0e"></a>

<p>#define XML_TAG_AD_SK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_SK_9F1A_TERM_COUNTRY_CODE <a href="#ga4c34fcfa824888eb163abfedb2894657" id="ga4c34fcfa824888eb163abfedb2894657"></a>

<p>#define XML_TAG_AD_SK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_SK_9F1C_TERM_IDENT <a href="#ga57f42a0efd9340f4bab1af8eba2f410e" id="ga57f42a0efd9340f4bab1af8eba2f410e"></a>

<p>#define XML_TAG_AD_SK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_SK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_SK_9F33_TERM_CAPS <a href="#ga962e14ea18f14a21aa072c29ffebdf04" id="ga962e14ea18f14a21aa072c29ffebdf04"></a>

<p>#define XML_TAG_AD_SK_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalCapabilities_9F33</a>\[3\];.

## XML_TAG_AD_SK_9F35_TERM_TYPE <a href="#ga8dd5517fab1eda48fb4d41f3d35e3752" id="ga8dd5517fab1eda48fb4d41f3d35e3752"></a>

<p>#define XML_TAG_AD_SK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_SK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_SK_9F40_ADD_TERM_CAPS <a href="#gaaa829aa80d0949ae8cd7b7e0463c21d3" id="gaaa829aa80d0949ae8cd7b7e0463c21d3"></a>

<p>#define XML_TAG_AD_SK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_SK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_SK_9F4E_MERCHANT_NAME_LOCATION <a href="#gac73acb01a9ce3196f11c940d01d1b82e" id="gac73acb01a9ce3196f11c940d01d1b82e"></a>

<p>#define XML_TAG_AD_SK_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_SK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_SK_DFAB31_APP_FLOW_CAP <a href="#ga98169e369441c5310b07f6dfd0a7006f" id="ga98169e369441c5310b07f6dfd0a7006f"></a>

<p>#define XML_TAG_AD_SK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_SK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_SK_DFAB40_CTLS_FLOOR_LIMIT <a href="#ga50c2236cc245a61a3a6365f89d8d7a16" id="ga50c2236cc245a61a3a6365f89d8d7a16"></a>

<p>#define XML_TAG_AD_SK_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_SK_DFAB41_CTLS_TRX_LIMIT <a href="#ga94dd140ae4e3f51c0db06dbdff6eec2b" id="ga94dd140ae4e3f51c0db06dbdff6eec2b"></a>

<p>#define XML_TAG_AD_SK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_SK_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#ga7dd5519de47bf5dacc8a76a6d8063c95" id="ga7dd5519de47bf5dacc8a76a6d8063c95"></a>

<p>#define XML_TAG_AD_SK_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_SK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_SK_DFAB43_TAC_DEFAULT <a href="#gab0120403337cd12c2dbe5c3d7e42ec8d" id="gab0120403337cd12c2dbe5c3d7e42ec8d"></a>

<p>#define XML_TAG_AD_SK_DFAB43_TAC_DEFAULT   \"TACDefault_DFAB43\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga885632db95d4e5e768eb59582123ab4c">TAG_DFAB43_TAC_DEFAULT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa582a19da2fe2cdd6e2389fd67ef8f37">EMV_CTLS_APPLIDATA_SK_STRUCT::TACDefault_DFAB43</a>\[5\];.

## XML_TAG_AD_SK_DFAB44_TAC_DENIAL <a href="#ga7adf6241f8a5b63d20532190257002b8" id="ga7adf6241f8a5b63d20532190257002b8"></a>

<p>#define XML_TAG_AD_SK_DFAB44_TAC_DENIAL   \"TACDenial_DFAB44\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga6c4ffbdb026c264681d2c8da01607e9f">TAG_DFAB44_TAC_DENIAL</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1cbf9e6410bde87648d601020e16fe06">EMV_CTLS_APPLIDATA_SK_STRUCT::TACDenial_DFAB44</a>\[5\];.

## XML_TAG_AD_SK_DFAB45_TAC_ONLINE <a href="#ga42a3e7f178928d78d7a904328b0ff6f1" id="ga42a3e7f178928d78d7a904328b0ff6f1"></a>

<p>#define XML_TAG_AD_SK_DFAB45_TAC_ONLINE   \"TACOnline_DFAB45\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga53c8a7f59827691e78e3a9d452da187a">TAG_DFAB45_TAC_ONLINE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1e02f4e9910807d2a7b3de3ac673fb9e">EMV_CTLS_APPLIDATA_SK_STRUCT::TACOnline_DFAB45</a>\[5\];.

## XML_TAG_AD_SK_DFAB53_TERMCAP_ABOVE_CVM_LIMIT <a href="#gabf186c82248b74b9f0c1056822819417" id="gabf186c82248b74b9f0c1056822819417"></a>

<p>#define XML_TAG_AD_SK_DFAB53_TERMCAP_ABOVE_CVM_LIMIT   \"TermCap_aboveCVMLimit_DFAB53\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga506a475aaf82c498cbaf4ac0f594c89f">TAG_DFAB53_TERMCAP_ABOVE_CVM_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa783a472a471753238cf9e2c096a1acd">EMV_CTLS_APPLIDATA_SK_STRUCT::TermCap_aboveCVMLimit_DFAB53</a>\[3\];.

## XML_TAG_AD_SK_DFAB54_TERMCAP_BELOW_CVM_LIMIT <a href="#gaea3870e1b850e3f898efb03097886167" id="gaea3870e1b850e3f898efb03097886167"></a>

<p>#define XML_TAG_AD_SK_DFAB54_TERMCAP_BELOW_CVM_LIMIT   \"TermCap_belowCVMLimit_DFAB54\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf262237efee4fe45b97bfa7ee4ba206e">TAG_DFAB54_TERMCAP_BELOW_CVM_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab25b5993860d29f76b357e4bb2cde63f">EMV_CTLS_APPLIDATA_SK_STRUCT::TermCap_belowCVMLimit_DFAB54</a>\[3\];.

## XML_TAG_AD_VK <a href="#gaaa318bf1c13d8ccef28b69e64bf681e9" id="gaaa318bf1c13d8ccef28b69e64bf681e9"></a>

<p>#define XML_TAG_AD_VK   \"Visa\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_VK_STRUCT</a>.

## XML_TAG_AD_VK_9F09_VERSION_NUMBER <a href="#ga4d0897a4bbe59c36fa7454b1ddaa78a5" id="ga4d0897a4bbe59c36fa7454b1ddaa78a5"></a>

<p>#define XML_TAG_AD_VK_9F09_VERSION_NUMBER   \"VersionNumber_9F09\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a585cc4800408a4cb205c05232d623d3d">EMV_CTLS_APPLIDATA_VK_STRUCT::VersionNumber_9F09</a>\[2\*EMV_CTLS_MAX_APP_VERS\];.

## XML_TAG_AD_VK_9F15_MERCHANT_CATEGORY_CODE <a href="#ga45bfb73e6cf76f78a10c9e1e08e74d0e" id="ga45bfb73e6cf76f78a10c9e1e08e74d0e"></a>

<p>#define XML_TAG_AD_VK_9F15_MERCHANT_CATEGORY_CODE   \"MerchantCategoryCode_9F15\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a84da5b354dd3258920611cde310a6682">EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantCategoryCode_9F15</a>\[2\];.

## XML_TAG_AD_VK_9F16_MERCHANT_ID <a href="#ga7c59afd2adf52cc7dbe7a0dc3413e364" id="ga7c59afd2adf52cc7dbe7a0dc3413e364"></a>

<p>#define XML_TAG_AD_VK_9F16_MERCHANT_ID   \"MerchantIdentifier_9F16\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97841a4ff9423ac32cff97cbd692930a">EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantIdentifier_9F16</a>\[15+1\];.

## XML_TAG_AD_VK_9F1A_TERM_COUNTRY_CODE <a href="#ga48eb194deea62714c82e31929beb28b0" id="ga48eb194deea62714c82e31929beb28b0"></a>

<p>#define XML_TAG_AD_VK_9F1A_TERM_COUNTRY_CODE   \"TerminalCountryCode_9F1A\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d350b969875642fb796e422c8604c8f">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCountryCode_9F1A</a>\[2\];.

## XML_TAG_AD_VK_9F1C_TERM_IDENT <a href="#ga53fa0cc3a0521eb5fc10a0c95db8a47a" id="ga53fa0cc3a0521eb5fc10a0c95db8a47a"></a>

<p>#define XML_TAG_AD_VK_9F1C_TERM_IDENT   \"TermIdent_9F1C\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae32a650d025e785fd81accc4c7f6dd4d">EMV_CTLS_APPLIDATA_VK_STRUCT::TermIdent_9F1C</a>\[8\];.

## XML_TAG_AD_VK_9F33_TERM_CAPS <a href="#ga9313bc6ba628902d8a8908fe326f2399" id="ga9313bc6ba628902d8a8908fe326f2399"></a>

<p>#define XML_TAG_AD_VK_9F33_TERM_CAPS   \"TerminalCapabilities_9F33\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab194b1a9a21f02602da018f990b6c188">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalCapabilities_9F33</a>\[3\];.

## XML_TAG_AD_VK_9F35_TERM_TYPE <a href="#gaa1800858b9442099a9fd38b24dd9674a" id="gaa1800858b9442099a9fd38b24dd9674a"></a>

<p>#define XML_TAG_AD_VK_9F35_TERM_TYPE   \"TerminalType_9F35\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a97776f987c035d49a92c1e01a4694811">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalType_9F35</a>;.

## XML_TAG_AD_VK_9F40_ADD_TERM_CAPS <a href="#gacc84599daa188d787a6a01efe5a810df" id="gacc84599daa188d787a6a01efe5a810df"></a>

<p>#define XML_TAG_AD_VK_9F40_ADD_TERM_CAPS   \"AdditionalTerminalCapabilities_9F40\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6d26c3945bec16db3c198f51a7b998aa">EMV_CTLS_APPLIDATA_VK_STRUCT::AdditionalTerminalCapabilities_9F40</a>\[5\];.

## XML_TAG_AD_VK_9F4E_MERCHANT_NAME_LOCATION <a href="#gab22a58edf8edd9ad6baa077dc4441477" id="gab22a58edf8edd9ad6baa077dc4441477"></a>

<p>#define XML_TAG_AD_VK_9F4E_MERCHANT_NAME_LOCATION   \"MerchantNameAndLocation_9F4E\"</p>

TLV tag: <a href="group___e_m_v_c_o___t_a_g_s.md#gac3a7de1661225ab41a4529b68d1fda71">TAG_9F4E_TAC_MERCHANTLOC</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acb923ec08caea6869e68eb5019ae108b">EMV_CTLS_APPLIDATA_VK_STRUCT::MerchantNameAndLocation_9F4E</a>\[40+1\];.

## XML_TAG_AD_VK_9F5A_APP_PROGRAM_ID <a href="#ga5914918bd7ebc3c12ae7cc9af1d888d3" id="ga5914918bd7ebc3c12ae7cc9af1d888d3"></a>

<p>#define XML_TAG_AD_VK_9F5A_APP_PROGRAM_ID   \"AppProgramId_9F5A\"</p>

TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#gab2e09e3e34f3443924d6cd79016cadec">TAG_9F5A_APP_PROGRAM_ID</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8c51d5e8aa164e8c49dfb2eb67c5dd87">EMV_CTLS_VK_DRL_ENTRY_STRUCT::AppProgramId_9F5A</a>\[16\].

## XML_TAG_AD_VK_9F66_TERM_TRX_QUALIFIER <a href="#gaa981a7d88bda70b2ff465f7b344b234c" id="gaa981a7d88bda70b2ff465f7b344b234c"></a>

<p>#define XML_TAG_AD_VK_9F66_TERM_TRX_QUALIFIER   \"TerminalTransactionQualifier_9F66\"</p>

TLV tag: <a href="group___v_i_s_a___t_a_g_s.md#ga30362da6e863c342f262adc3cafb680e">TAG_9F66_TTQ</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a81ada881cb9cb5271821724dbc124fe0">EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66</a>\[4\];.

## XML_TAG_AD_VK_DFAB30_TEC_SUPPORT <a href="#ga412989d5a92bfb08e8f240eaae1ed189" id="ga412989d5a92bfb08e8f240eaae1ed189"></a>

<p>#define XML_TAG_AD_VK_DFAB30_TEC_SUPPORT   \"TecSupport_DFAB30\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gab9f0400d266ebde31ce4c0b6c2290a67">TAG_DFAB30_TEC_SUPPORT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a8951efd96bfad7c790084e6aee4f2bb7">EMV_CTLS_APPLIDATA_VK_STRUCT::TecSupport_DFAB30</a>;.

## XML_TAG_AD_VK_DFAB31_APP_FLOW_CAP <a href="#ga2adec076a8ca589a00714beedf923857" id="ga2adec076a8ca589a00714beedf923857"></a>

<p>#define XML_TAG_AD_VK_DFAB31_APP_FLOW_CAP   \"AppFlowCap_DFAB31\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf35f7d22b485b509c980566dba2eea1a">TAG_DFAB31_APP_FLOW_CAP</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ecdf1dde8e274003bee99e35551f0e8">EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31</a>\[5\];.

## XML_TAG_AD_VK_DFAB40_CTLS_FLOOR_LIMIT <a href="#gab988a26d6f3bb8d1d38259be42a9116a" id="gab988a26d6f3bb8d1d38259be42a9116a"></a>

<p>#define XML_TAG_AD_VK_DFAB40_CTLS_FLOOR_LIMIT   \"ContactlessFloorLimit_DFAB40\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga4fbadad5ae4dad262274c4c74dc6deb2">TAG_DFAB40_CTLS_FLOOR_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afc0645a233390f03e59a2c7d82d7a666">EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessFloorLimit_DFAB40</a>\[6\];.

## XML_TAG_AD_VK_DFAB41_CTLS_TRX_LIMIT <a href="#ga96c2005d60f9b020da6fa6482dfaeb43" id="ga96c2005d60f9b020da6fa6482dfaeb43"></a>

<p>#define XML_TAG_AD_VK_DFAB41_CTLS_TRX_LIMIT   \"ContactlessTransactionLimit_DFAB41\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gac0ad8ae2d5bd130f089f010278a99b4e">TAG_DFAB41_CTLS_TRX_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7fd9415fef3456b4a178de80f27f9575">EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessTransactionLimit_DFAB41</a>\[6\];.

## XML_TAG_AD_VK_DFAB42_CTLS_CVM_REQ_LIMIT <a href="#gaa35158676fea4c9fe5ca7a0a7309fc96" id="gaa35158676fea4c9fe5ca7a0a7309fc96"></a>

<p>#define XML_TAG_AD_VK_DFAB42_CTLS_CVM_REQ_LIMIT   \"ContactlessCVMRequiredLimit_DFAB42\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#gaf8082e86422522353c6f242f63f71b46">TAG_DFAB42_CTLS_CVM_REQ_LIMIT</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad1166499037fd57eb9e4ad82963b4554">EMV_CTLS_APPLIDATA_VK_STRUCT::ContactlessCVMRequiredLimit_DFAB42</a>\[6\];.

## XML_TAG_AD_VK_DFAB49_ON_OFF_SWITCH <a href="#gaf3063c614db3a5c58e21e2851b1e48b2" id="gaf3063c614db3a5c58e21e2851b1e48b2"></a>

<p>#define XML_TAG_AD_VK_DFAB49_ON_OFF_SWITCH   \"OnOffSwitch_DFAB49\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#ga8ce5508c4959532fae6923215be6b978">TAG_DFAB49_DRL_SWITCHES</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5493acb97631eeed9d74e6b051db1da0">EMV_CTLS_VK_DRL_ENTRY_STRUCT::OnOffSwitch_DFAB49</a>.

## XML_TAG_AD_VK_FFAB01_VISA_DRL_PARAMS <a href="#ga73d67328f0497c4d5d2f02c173a8bfb7" id="ga73d67328f0497c4d5d2f02c173a8bfb7"></a>

<p>#define XML_TAG_AD_VK_FFAB01_VISA_DRL_PARAMS   \"VisaDRLParams_FFAB01\"</p>

TLV tag: <a href="group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___c_o_n_s_t_r.md#ga6da72379bdf0faa5dfcec68ec4dd4510">TAG_FFAB01_DRL_PARAMETER</a>
Struct: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a125164cdd7dd17625739afaed890ac0f">EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01</a>;.

## XML_TAG_AD_WK <a href="#ga7e4d3d670f1a47594da334866c3f2825" id="ga7e4d3d670f1a47594da334866c3f2825"></a>

<p>#define XML_TAG_AD_WK   \"WISE\"</p>

Tag to include data of <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_WK_STRUCT</a>.

## XML_TAG_AMEX_ENH_TERMINAL_CAPS <a href="#ga2abf4cf2f928ee92d91e6f09d856ebe5" id="ga2abf4cf2f928ee92d91e6f09d856ebe5"></a>

<p>#define XML_TAG_AMEX_ENH_TERMINAL_CAPS   \"AMEX_Enhanced_Reader_Capabilties\"</p>

**<a href="deprecated.md#_deprecated000134">Deprecated:</a>**

## XML_TAG_AMEX_TERMINAL_CAPS <a href="#ga8592dee245ce116c88c93eebfad5e4d1" id="ga8592dee245ce116c88c93eebfad5e4d1"></a>

<p>#define XML_TAG_AMEX_TERMINAL_CAPS   \"AMEX_Term_Caps\"</p>

**<a href="deprecated.md#_deprecated000133">Deprecated:</a>**

## XML_TAG_APPLIDATA\[1/2\] <a href="#gaaa1f944043cef98010a54b9c074185ff" id="gaaa1f944043cef98010a54b9c074185ff"></a> {#xml_tag_applidata-12}

<p>#define XML_TAG_APPLIDATA   \"ApplicationData\"</p>

constructed xml tag for application data, used in file \"EMV_Applications.xml\"

## XML_TAG_APPLIDATA\[2/2\] <a href="#gaaa1f944043cef98010a54b9c074185ff" id="gaaa1f944043cef98010a54b9c074185ff"></a> {#xml_tag_applidata-22}

<p>#define XML_TAG_APPLIDATA   \"ApplicationData\"</p>

**<a href="deprecated.md#_deprecated000071">Deprecated:</a>**

## XML_TAG_APPLIDATA_AC_BEFORE_AFTER <a href="#ga9c988c6b2daeb55ebfef17b94aedbf09" id="ga9c988c6b2daeb55ebfef17b94aedbf09"></a>

<p>#define XML_TAG_APPLIDATA_AC_BEFORE_AFTER   \"AC_BeforeAfter\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaa32dcaf965a2b7811278930e36be20af">TAG_DF15_OFFL_ONLY_PROCESS</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aac6e17c9e053521b910b1eeb6a75c74c">EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter</a>.

## XML_TAG_APPLIDATA_ADD_VER_NUM\[1/2\] <a href="#ga31257afdc52fda5212500ffdbef44c25" id="ga31257afdc52fda5212500ffdbef44c25"></a> {#xml_tag_applidata_add_ver_num-12}

<p>#define XML_TAG_APPLIDATA_ADD_VER_NUM   \"AdditionalVersioNumbers\"</p>

**<a href="deprecated.md#_deprecated000085">Deprecated:</a>**

## XML_TAG_APPLIDATA_ADD_VER_NUM\[2/2\] <a href="#ga31257afdc52fda5212500ffdbef44c25" id="ga31257afdc52fda5212500ffdbef44c25"></a> {#xml_tag_applidata_add_ver_num-22}

<p>#define XML_TAG_APPLIDATA_ADD_VER_NUM   \"AdditionalVersionNumbers\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga1711621294dec8693e50c73502873cb8">TAG_DF5F_ADD_APP_VERSION</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a88b324674895d7548b40c7d597cdf84d">EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No</a>.

## XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD\[1/2\] <a href="#ga4aa7498018941c11031f732a702ed08f" id="ga4aa7498018941c11031f732a702ed08f"></a> {#xml_tag_applidata_additional_tags_crd-12}

<p>#define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD   \"AdditionalTagsCRD\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga6dfa73e43cd6f1a0a956d8a20d42efeb">TAG_DF2C_ADD_TAGS_CRD</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#acd89bdbc00f19a23befec2eed0ff7b00">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD</a>.

## XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD\[2/2\] <a href="#ga4aa7498018941c11031f732a702ed08f" id="ga4aa7498018941c11031f732a702ed08f"></a> {#xml_tag_applidata_additional_tags_crd-22}

<p>#define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_CRD   \"AdditionalTagsCRD\"</p>

**<a href="deprecated.md#_deprecated000092">Deprecated:</a>**

## XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM\[1/2\] <a href="#ga3ebc4e2121dd29d4a0c29bf0662fc2da" id="ga3ebc4e2121dd29d4a0c29bf0662fc2da"></a> {#xml_tag_applidata_additional_tags_trm-12}

<p>#define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM   \"AdditionalTagsTRM\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gabe548a652e3c1ccbb0c36443f0cab24e">TAG_DF29_ADD_TAGS</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ad7a6039ab1aa91113c012eab4293d664">EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM</a>.

## XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM\[2/2\] <a href="#ga3ebc4e2121dd29d4a0c29bf0662fc2da" id="ga3ebc4e2121dd29d4a0c29bf0662fc2da"></a> {#xml_tag_applidata_additional_tags_trm-22}

<p>#define XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM   \"AdditionalTagsTRM\"</p>

**<a href="deprecated.md#_deprecated000091">Deprecated:</a>**

## XML_TAG_APPLIDATA_AID\[1/2\] <a href="#gab51b5b160528c4eba7de7bf08e42ed5d" id="gab51b5b160528c4eba7de7bf08e42ed5d"></a> {#xml_tag_applidata_aid-12}

<p>#define XML_TAG_APPLIDATA_AID   \"AID\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga939333f4c5c2e500beb9b06d6939fb23">TAG_DF04_AID</a>
Struct element <a href="_e_m_v___c_t___interface_8h.md#a1af6aa5d2e82428d0fe225cfe2b3b501">EMV_CT_APPLI_STRUCT::AID</a>.

## XML_TAG_APPLIDATA_AID\[2/2\] <a href="#gab51b5b160528c4eba7de7bf08e42ed5d" id="gab51b5b160528c4eba7de7bf08e42ed5d"></a> {#xml_tag_applidata_aid-22}

<p>#define XML_TAG_APPLIDATA_AID   \"AID\"</p>

**<a href="deprecated.md#_deprecated000073">Deprecated:</a>**

## XML_TAG_APPLIDATA_AID_PRIO\[1/2\] <a href="#ga099f0028fb4bcb042b90d881d3c35318" id="ga099f0028fb4bcb042b90d881d3c35318"></a> {#xml_tag_applidata_aid_prio-12}

<p>#define XML_TAG_APPLIDATA_AID_PRIO   \"AID_Prio\"</p>

**<a href="deprecated.md#_deprecated000087">Deprecated:</a>**

## XML_TAG_APPLIDATA_AID_PRIO\[2/2\] <a href="#ga099f0028fb4bcb042b90d881d3c35318" id="ga099f0028fb4bcb042b90d881d3c35318"></a> {#xml_tag_applidata_aid_prio-22}

<p>#define XML_TAG_APPLIDATA_AID_PRIO   \"AID_Prio\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga932e21a3b1b113c5eafd8abd4715bab4">TAG_DF1D_PRIO_APPLI</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aafdd60748ec764b0398657d3a87e0d19">EMV_CT_APPLIDATA_STRUCT::xAIDPrio</a>.

## XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED <a href="#gaed8babbf2d6ae2cae216077a1c86cc77" id="gaed8babbf2d6ae2cae216077a1c86cc77"></a>

<p>#define XML_TAG_APPLIDATA_AIP_CVM_NOT_SUPPORTED   \"AIP_CVM_NotSupported\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3a9cba27229ecde4c3c6231eaf09e591">TAG_DF2E_CVM_NOT_SUPP</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0cc466b7328ef1933036d1372ba99b00">EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported</a>.

## XML_TAG_APPLIDATA_AMEX_DRL_CVM_LIMIT <a href="#ga5a07aa563719db4fc5dc7659ba3e2594" id="ga5a07aa563719db4fc5dc7659ba3e2594"></a>

<p>#define XML_TAG_APPLIDATA_AMEX_DRL_CVM_LIMIT   \"CVMlimit\"</p>

**<a href="deprecated.md#_deprecated000122">Deprecated:</a>**

## XML_TAG_APPLIDATA_AMEX_DRL_FLOORLIMIT <a href="#gaf55c80a6bffc6727c57b959cd7613ec1" id="gaf55c80a6bffc6727c57b959cd7613ec1"></a>

<p>#define XML_TAG_APPLIDATA_AMEX_DRL_FLOORLIMIT   \"Floorlimit\"</p>

**<a href="deprecated.md#_deprecated000120">Deprecated:</a>**

## XML_TAG_APPLIDATA_AMEX_DRL_INDEX <a href="#gaf487e894c6393382c6d3b67764113ed0" id="gaf487e894c6393382c6d3b67764113ed0"></a>

<p>#define XML_TAG_APPLIDATA_AMEX_DRL_INDEX   \"Index\"</p>

**<a href="deprecated.md#_deprecated000119">Deprecated:</a>**

## XML_TAG_APPLIDATA_AMEX_DRL_PARAMS <a href="#gae02cbd4fdc1bcb745833d82c2e177505" id="gae02cbd4fdc1bcb745833d82c2e177505"></a>

<p>#define XML_TAG_APPLIDATA_AMEX_DRL_PARAMS   \"AmexDRLParams\"</p>

**<a href="deprecated.md#_deprecated000118">Deprecated:</a>**

## XML_TAG_APPLIDATA_AMEX_DRL_SWITCH <a href="#ga4f90015ac142bbfcfd7494033e94d03f" id="ga4f90015ac142bbfcfd7494033e94d03f"></a>

<p>#define XML_TAG_APPLIDATA_AMEX_DRL_SWITCH   \"FeatureSwitch\"</p>

**<a href="deprecated.md#_deprecated000123">Deprecated:</a>**

## XML_TAG_APPLIDATA_AMEX_DRL_TXN_LIMIT <a href="#ga593794490b75d73f4bb2ebe012cf83ee" id="ga593794490b75d73f4bb2ebe012cf83ee"></a>

<p>#define XML_TAG_APPLIDATA_AMEX_DRL_TXN_LIMIT   \"TXNlimit\"</p>

**<a href="deprecated.md#_deprecated000121">Deprecated:</a>**

## XML_TAG_APPLIDATA_APP\[1/2\] <a href="#ga32de48c9dd0037fbd10d3c6d1264e4d1" id="ga32de48c9dd0037fbd10d3c6d1264e4d1"></a> {#xml_tag_applidata_app-12}

<p>#define XML_TAG_APPLIDATA_APP   \"Application\"</p>

Constructed tag for one AID, embedded in [XML_TAG_APPLIDATA](#gaaa1f944043cef98010a54b9c074185ff "constructed xml tag for application data, used in file "EMV_Applications.xml"").

## XML_TAG_APPLIDATA_APP\[2/2\] <a href="#ga32de48c9dd0037fbd10d3c6d1264e4d1" id="ga32de48c9dd0037fbd10d3c6d1264e4d1"></a> {#xml_tag_applidata_app-22}

<p>#define XML_TAG_APPLIDATA_APP   \"Application\"</p>

**<a href="deprecated.md#_deprecated000072">Deprecated:</a>**

## XML_TAG_APPLIDATA_APP_FLOW_CAP\[1/2\] <a href="#ga50d78399df4e3c11369093dc4e841d7d" id="ga50d78399df4e3c11369093dc4e841d7d"></a> {#xml_tag_applidata_app_flow_cap-12}

<p>#define XML_TAG_APPLIDATA_APP_FLOW_CAP   \"AppFlowCap\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga732d040746d77b79e9ab53e4ab4abcf6">TAG_DF2B_APP_FLOW_CAP</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a760a1211f0f7f2df285879a21e2fa9d8">EMV_CT_APPLIDATA_STRUCT::App_FlowCap</a>.

## XML_TAG_APPLIDATA_APP_FLOW_CAP\[2/2\] <a href="#ga50d78399df4e3c11369093dc4e841d7d" id="ga50d78399df4e3c11369093dc4e841d7d"></a> {#xml_tag_applidata_app_flow_cap-22}

<p>#define XML_TAG_APPLIDATA_APP_FLOW_CAP   \"AppFlowCap\"</p>

**<a href="deprecated.md#_deprecated000089">Deprecated:</a>**

## XML_TAG_APPLIDATA_APP_NAME\[1/2\] <a href="#ga0e796259cace748a875c804a6bdc342b" id="ga0e796259cace748a875c804a6bdc342b"></a> {#xml_tag_applidata_app_name-12}

<p>#define XML_TAG_APPLIDATA_APP_NAME   \"AppName\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga70b6da94fde0a697b05755cdfc084023">TAG_50_APP_LABEL</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1a933985680b099e926e54086a602c12">EMV_CT_APPLIDATA_STRUCT::AppName</a>.

## XML_TAG_APPLIDATA_APP_NAME\[2/2\] <a href="#ga0e796259cace748a875c804a6bdc342b" id="ga0e796259cace748a875c804a6bdc342b"></a> {#xml_tag_applidata_app_name-22}

<p>#define XML_TAG_APPLIDATA_APP_NAME   \"AppName\"</p>

**<a href="deprecated.md#_deprecated000075">Deprecated:</a>**

## XML_TAG_APPLIDATA_APP_TERM_ADD_CAP\[1/2\] <a href="#ga0a15bcaf24ec34bfde9b5a49217c7422" id="ga0a15bcaf24ec34bfde9b5a49217c7422"></a> {#xml_tag_applidata_app_term_add_cap-12}

<p>#define XML_TAG_APPLIDATA_APP_TERM_ADD_CAP   \"AppTermAddCap\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa137395f6cc0b7618d9fec892c3c8b00">EMV_CT_APPLIDATA_STRUCT::App_TermAddCap</a>.

## XML_TAG_APPLIDATA_APP_TERM_ADD_CAP\[2/2\] <a href="#ga0a15bcaf24ec34bfde9b5a49217c7422" id="ga0a15bcaf24ec34bfde9b5a49217c7422"></a> {#xml_tag_applidata_app_term_add_cap-22}

<p>#define XML_TAG_APPLIDATA_APP_TERM_ADD_CAP   \"AppTermAddCap\"</p>

**<a href="deprecated.md#_deprecated000094">Deprecated:</a>**

## XML_TAG_APPLIDATA_APP_TERM_CAP\[1/2\] <a href="#ga96e3d7de6bd5ffc66025301ce777531b" id="ga96e3d7de6bd5ffc66025301ce777531b"></a> {#xml_tag_applidata_app_term_cap-12}

<p>#define XML_TAG_APPLIDATA_APP_TERM_CAP   \"AppTermCap\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7ac173f4a1d9a3845a18af806ee8bb31">EMV_CT_APPLIDATA_STRUCT::App_TermCap</a>.

## XML_TAG_APPLIDATA_APP_TERM_CAP\[2/2\] <a href="#ga96e3d7de6bd5ffc66025301ce777531b" id="ga96e3d7de6bd5ffc66025301ce777531b"></a> {#xml_tag_applidata_app_term_cap-22}

<p>#define XML_TAG_APPLIDATA_APP_TERM_CAP   \"AppTermCap\"</p>

**<a href="deprecated.md#_deprecated000093">Deprecated:</a>**

## XML_TAG_APPLIDATA_APP_TERM_TYP\[1/2\] <a href="#ga715c2019507324bd280553d4a2515127" id="ga715c2019507324bd280553d4a2515127"></a> {#xml_tag_applidata_app_term_typ-12}

<p>#define XML_TAG_APPLIDATA_APP_TERM_TYP   \"AppTerminalType\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae3ea58006297dfb1045a9ff86831112e">EMV_CT_APPLIDATA_STRUCT::App_TermTyp</a>.

## XML_TAG_APPLIDATA_APP_TERM_TYP\[2/2\] <a href="#ga715c2019507324bd280553d4a2515127" id="ga715c2019507324bd280553d4a2515127"></a> {#xml_tag_applidata_app_term_typ-22}

<p>#define XML_TAG_APPLIDATA_APP_TERM_TYP   \"AppTerminalType\"</p>

**<a href="deprecated.md#_deprecated000095">Deprecated:</a>**

## XML_TAG_APPLIDATA_ASI\[1/2\] <a href="#ga2e5b4d6bc8885bd582a8c8a53988adeb" id="ga2e5b4d6bc8885bd582a8c8a53988adeb"></a> {#xml_tag_applidata_asi-12}

<p>#define XML_TAG_APPLIDATA_ASI   \"ASI\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3ec6eef8ef2baf5298bba904c5339614">TAG_DF20_ASI</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2000688e48cdadee86eb401946a71785">EMV_CT_APPLIDATA_STRUCT::ASI</a>.

## XML_TAG_APPLIDATA_ASI\[2/2\] <a href="#ga2e5b4d6bc8885bd582a8c8a53988adeb" id="ga2e5b4d6bc8885bd582a8c8a53988adeb"></a> {#xml_tag_applidata_asi-22}

<p>#define XML_TAG_APPLIDATA_ASI   \"ASI\"</p>

**<a href="deprecated.md#_deprecated000076">Deprecated:</a>**

## XML_TAG_APPLIDATA_BR_KEY\[1/2\] <a href="#ga1c91e30ac44b2fd1c9c90e2d5ab2f2da" id="ga1c91e30ac44b2fd1c9c90e2d5ab2f2da"></a> {#xml_tag_applidata_br_key-12}

<p>#define XML_TAG_APPLIDATA_BR_KEY   \"BrKey\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga41481cf04242a0ba441c87f6a1569639">TAG_9F15_MERCH_CATEG_CODE</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aadaaf73921101bb812f90ec7c4a9d5dd">EMV_CT_APPLIDATA_STRUCT::BrKey</a>.

## XML_TAG_APPLIDATA_BR_KEY\[2/2\] <a href="#ga1c91e30ac44b2fd1c9c90e2d5ab2f2da" id="ga1c91e30ac44b2fd1c9c90e2d5ab2f2da"></a> {#xml_tag_applidata_br_key-22}

<p>#define XML_TAG_APPLIDATA_BR_KEY   \"BrKey\"</p>

**<a href="deprecated.md#_deprecated000078">Deprecated:</a>**

## XML_TAG_APPLIDATA_CDA_PROCESSING <a href="#ga2ca269e927e2201872845e0c77b6604f" id="ga2ca269e927e2201872845e0c77b6604f"></a>

<p>#define XML_TAG_APPLIDATA_CDA_PROCESSING   \"CDA_Processing\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga26b711050e9aefc38b967f67dffa6619">TAG_DF3E_CDA_PROC</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2673654f6fac8e005bb4cb45dec325ed">EMV_CT_APPLIDATA_STRUCT::CDAProcessing</a>.

## XML_TAG_APPLIDATA_CEILING_LIMIT_MOBILE <a href="#ga706a513e5a40795696261fac3e9ba279" id="ga706a513e5a40795696261fac3e9ba279"></a>

<p>#define XML_TAG_APPLIDATA_CEILING_LIMIT_MOBILE   \"CL_Ceiling_LimitMobile\"</p>

**<a href="deprecated.md#_deprecated000104">Deprecated:</a>**

## XML_TAG_APPLIDATA_CHIP_CVM_BELOW <a href="#gad4e4adeb8ef490e0336b262d74d2cee2" id="gad4e4adeb8ef490e0336b262d74d2cee2"></a>

<p>#define XML_TAG_APPLIDATA_CHIP_CVM_BELOW   \"ChipCVM_belowLimit\"</p>

**<a href="deprecated.md#_deprecated000103">Deprecated:</a>**

## XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO <a href="#ga9916553d54022e9ff269b4d9e82f7658" id="ga9916553d54022e9ff269b4d9e82f7658"></a>

<p>#define XML_TAG_APPLIDATA_CHKSUM_ASCII_EMVCO   \"ChksumASCII_EMVCO\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf795532d38b6fd7fe5e4b9aeeda03a58">TAG_DF12_CHECKSUM</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae6aab5905479e56d87c421779d57b603">EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO</a>.

## XML_TAG_APPLIDATA_CHKSUM_ASCII_ENTRYPNT <a href="#gade6ca130cddacd5591f31c13cfcad6eb" id="gade6ca130cddacd5591f31c13cfcad6eb"></a>

<p>#define XML_TAG_APPLIDATA_CHKSUM_ASCII_ENTRYPNT   \"Chksum_EntryPoint\"</p>

**<a href="deprecated.md#_deprecated000136">Deprecated:</a>**

## XML_TAG_APPLIDATA_CHKSUM_ASCII_KERNEL <a href="#ga0fea1088c31e410280b94828e0c7444a" id="ga0fea1088c31e410280b94828e0c7444a"></a>

<p>#define XML_TAG_APPLIDATA_CHKSUM_ASCII_KERNEL   \"Chksum_Kernel\"</p>

**<a href="deprecated.md#_deprecated000137">Deprecated:</a>**

## XML_TAG_APPLIDATA_CHKSUM_PARAMS\[1/2\] <a href="#ga1bea96b6e55c18fe7225c7ef0707f45d" id="ga1bea96b6e55c18fe7225c7ef0707f45d"></a> {#xml_tag_applidata_chksum_params-12}

<p>#define XML_TAG_APPLIDATA_CHKSUM_PARAMS   \"ChksumParams\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8d1957a446ea91132fb417a0d8d0cd87">TAG_DF13_TERM_PARAM</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a906f3a211340298f467942b94e57010e">EMV_CT_APPLIDATA_STRUCT::Chksum_Params</a>.

## XML_TAG_APPLIDATA_CHKSUM_PARAMS\[2/2\] <a href="#ga1bea96b6e55c18fe7225c7ef0707f45d" id="ga1bea96b6e55c18fe7225c7ef0707f45d"></a> {#xml_tag_applidata_chksum_params-22}

<p>#define XML_TAG_APPLIDATA_CHKSUM_PARAMS   \"ChksumParams\"</p>

**<a href="deprecated.md#_deprecated000135">Deprecated:</a>**

## XML_TAG_APPLIDATA_CL_CEILING_LIMIT <a href="#ga360e308e22b55148bff72c04b2bf842b" id="ga360e308e22b55148bff72c04b2bf842b"></a>

<p>#define XML_TAG_APPLIDATA_CL_CEILING_LIMIT   \"CL_Ceiling_Limit\"</p>

**<a href="deprecated.md#_deprecated000081">Deprecated:</a>**

## XML_TAG_APPLIDATA_CL_CVM_SOFT_LIMIT <a href="#gabae9c04d8f457fe7ea9f26f2afb70199" id="gabae9c04d8f457fe7ea9f26f2afb70199"></a>

<p>#define XML_TAG_APPLIDATA_CL_CVM_SOFT_LIMIT   \"CL_CVM_Soft_Limit\"</p>

**<a href="deprecated.md#_deprecated000080">Deprecated:</a>**

## XML_TAG_APPLIDATA_CL_MODES <a href="#ga90ca354a5daf73aa2edc9678440e5584" id="ga90ca354a5daf73aa2edc9678440e5584"></a>

<p>#define XML_TAG_APPLIDATA_CL_MODES   \"CL_Modes\"</p>

**<a href="deprecated.md#_deprecated000074">Deprecated:</a>**

## XML_TAG_APPLIDATA_COUNTRY_CODE_TERM\[1/2\] <a href="#ga834453de1096e1827ebe688eaab110f8" id="ga834453de1096e1827ebe688eaab110f8"></a> {#xml_tag_applidata_country_code_term-12}

<p>#define XML_TAG_APPLIDATA_COUNTRY_CODE_TERM   \"CountryCodeTerm\"</p>

**<a href="deprecated.md#_deprecated000077">Deprecated:</a>**

## XML_TAG_APPLIDATA_COUNTRY_CODE_TERM\[2/2\] <a href="#ga834453de1096e1827ebe688eaab110f8" id="ga834453de1096e1827ebe688eaab110f8"></a> {#xml_tag_applidata_country_code_term-22}

<p>#define XML_TAG_APPLIDATA_COUNTRY_CODE_TERM   \"CountryCodeTerm\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3cc1a7ad9805c9caf22a3164e3f1d326">EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm</a>.

## XML_TAG_APPLIDATA_CUSTOMER_CVM <a href="#ga9051fee0ad29cbed93a4fe88f74e2a88" id="ga9051fee0ad29cbed93a4fe88f74e2a88"></a>

<p>#define XML_TAG_APPLIDATA_CUSTOMER_CVM   \"CustomerCVM\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae344911761717940db3f2e07f3e6363a">TAG_DF2F_CVM_CUSTOM</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afbad69449ba81d43f2d6a43309443bc6">EMV_CT_APPLIDATA_STRUCT::Customer_CVM</a>.

## XML_TAG_APPLIDATA_DCR_LIST_IDS <a href="#ga0662ce42e415d68b627a754d7e0e5259" id="ga0662ce42e415d68b627a754d7e0e5259"></a>

<p>#define XML_TAG_APPLIDATA_DCR_LIST_IDS   \"DataContainerReadIds\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#gacca3b2f66195b57095be5242cc7c747e">TAG_DFAB58_DCR_LIST_IDS</a>
Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a94cdb96dc0c72d50b22bc9ee29c25b9f">EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds</a>.

## XML_TAG_APPLIDATA_DCR_LIST_RANGES <a href="#ga3bc8db0b4aa5a989af015dd298b16c7b" id="ga3bc8db0b4aa5a989af015dd298b16c7b"></a>

<p>#define XML_TAG_APPLIDATA_DCR_LIST_RANGES   \"DataContainerReadRanges\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga4e900f633bb23ee6490e0cfe6e7e32aa">TAG_DFAB59_DCR_LIST_RANGES</a>
Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a418acaa9bb3b4d2a70442c50205f69a3">EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges</a>.

## XML_TAG_APPLIDATA_DEFAULT_DDOL <a href="#gac12bfacfb1082a80fa10aee3569aaf30" id="gac12bfacfb1082a80fa10aee3569aaf30"></a>

<p>#define XML_TAG_APPLIDATA_DEFAULT_DDOL   \"DefaultDDOL\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3fcfb3993a3c7ff601286499651bca9a">TAG_DF28_DEFAULT_DDOL</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a27e03203f154c52be3abc2db49842a93">EMV_CT_APPLIDATA_STRUCT::Default_DDOL</a>.

## XML_TAG_APPLIDATA_DEFAULT_TDOL\[1/2\] <a href="#ga1876212b8287be7382ad6c45c8e22596" id="ga1876212b8287be7382ad6c45c8e22596"></a> {#xml_tag_applidata_default_tdol-12}

<p>#define XML_TAG_APPLIDATA_DEFAULT_TDOL   \"DefaultTDOL\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga10531a229294794d67f4d817ae2e7bac">TAG_DF27_DEFAULT_TDOL</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9741f7d86efbb9dc20f687b6cad55f4c">EMV_CT_APPLIDATA_STRUCT::Default_TDOL</a>.

## XML_TAG_APPLIDATA_DEFAULT_TDOL\[2/2\] <a href="#ga1876212b8287be7382ad6c45c8e22596" id="ga1876212b8287be7382ad6c45c8e22596"></a> {#xml_tag_applidata_default_tdol-22}

<p>#define XML_TAG_APPLIDATA_DEFAULT_TDOL   \"DefaultTDOL\"</p>

**<a href="deprecated.md#_deprecated000099">Deprecated:</a>**

## XML_TAG_APPLIDATA_EMV_APPLICATION <a href="#ga1934ad2be00923729082b211703c8567" id="ga1934ad2be00923729082b211703c8567"></a>

<p>#define XML_TAG_APPLIDATA_EMV_APPLICATION   \"EMV_Application\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga85a1fd825ffae412a17f45249da1bc69">TAG_DF2D_EMV_APPLI</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a04624c8cc1358b3d029f8c77a930c0c6">EMV_CT_APPLIDATA_STRUCT::EMV_Application</a>.

## XML_TAG_APPLIDATA_FALLBACK_HANDLING <a href="#ga13a3483900584bc5fb5dee035a9f9bc0" id="ga13a3483900584bc5fb5dee035a9f9bc0"></a>

<p>#define XML_TAG_APPLIDATA_FALLBACK_HANDLING   \"FallbackHandling\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaa606116b376f0e89c618e5477bb1e351">TAG_DF18_FALLABCK</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9d0d4cedf99a248f40af087fdfa40b51">EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling</a>.

## XML_TAG_APPLIDATA_FALLBACK_MIDS <a href="#gad0ea96486bd37aefabac74e308cb4f05" id="gad0ea96486bd37aefabac74e308cb4f05"></a>

<p>#define XML_TAG_APPLIDATA_FALLBACK_MIDS   \"FallbackMIDs\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga932e21a3b1b113c5eafd8abd4715bab4">TAG_DF1D_PRIO_APPLI</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afe1309924816c148ef5665647e4b3f53">EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs</a>.

## XML_TAG_APPLIDATA_FLOOR_LIMIT\[1/2\] <a href="#gabe783b9ab1c5589bab73048ec67cf8e9" id="gabe783b9ab1c5589bab73048ec67cf8e9"></a> {#xml_tag_applidata_floor_limit-12}

<p>#define XML_TAG_APPLIDATA_FLOOR_LIMIT   \"FloorLimit\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gab275fa140f8e21bda8e1d0bdafe47602">TAG_9F1B_TRM_FLOOR_LIMIT</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5fb4232c2d98685b61df7884ccfbaf5">EMV_CT_APPLIDATA_STRUCT::FloorLimit</a>.

## XML_TAG_APPLIDATA_FLOOR_LIMIT\[2/2\] <a href="#gabe783b9ab1c5589bab73048ec67cf8e9" id="gabe783b9ab1c5589bab73048ec67cf8e9"></a> {#xml_tag_applidata_floor_limit-22}

<p>#define XML_TAG_APPLIDATA_FLOOR_LIMIT   \"FloorLimit\"</p>

**<a href="deprecated.md#_deprecated000082">Deprecated:</a>**

## XML_TAG_APPLIDATA_MASTER_AID\[1/2\] <a href="#gab39766fa922ae19d4827eae5fd14dab2" id="gab39766fa922ae19d4827eae5fd14dab2"></a> {#xml_tag_applidata_master_aid-12}

<p>#define XML_TAG_APPLIDATA_MASTER_AID   \"MasterAID\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga939333f4c5c2e500beb9b06d6939fb23">TAG_DF04_AID</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4844ee77295b43631df410adb1beaf41">EMV_CT_APPLIDATA_STRUCT::MasterAID</a>.

## XML_TAG_APPLIDATA_MASTER_AID\[2/2\] <a href="#gab39766fa922ae19d4827eae5fd14dab2" id="gab39766fa922ae19d4827eae5fd14dab2"></a> {#xml_tag_applidata_master_aid-22}

<p>#define XML_TAG_APPLIDATA_MASTER_AID   \"MasterAID\"</p>

**<a href="deprecated.md#_deprecated000138">Deprecated:</a>**

## XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE\[1/2\] <a href="#gaeb5c69b544617e33b0349a39089f1a16" id="gaeb5c69b544617e33b0349a39089f1a16"></a> {#xml_tag_applidata_max_target_percentage-12}

<p>#define XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE   \"MaxTargetPercentage\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gacf7f922e89e073e7b095468414b8afbd">TAG_DF25_MAXPERCENT_ONL</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae06a2f3428cf719f7fc1523a2e2b9fce">EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage</a>.

## XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE\[2/2\] <a href="#gaeb5c69b544617e33b0349a39089f1a16" id="gaeb5c69b544617e33b0349a39089f1a16"></a> {#xml_tag_applidata_max_target_percentage-22}

<p>#define XML_TAG_APPLIDATA_MAX_TARGET_PERCENTAGE   \"MaxTargetPercentage\"</p>

**<a href="deprecated.md#_deprecated000130">Deprecated:</a>**

## XML_TAG_APPLIDATA_MERCH_IDENT\[1/2\] <a href="#ga7ae8ff8350d9527942bb5c969e16e237" id="ga7ae8ff8350d9527942bb5c969e16e237"></a> {#xml_tag_applidata_merch_ident-12}

<p>#define XML_TAG_APPLIDATA_MERCH_IDENT   \"MerchIdent\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga184ccaaef50ada9988bfd4af37b8c9fb">TAG_9F16_MERCHANT_ID</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a3e3c059a7e2f459a449ab7e746046cf7">EMV_CT_APPLIDATA_STRUCT::MerchIdent</a>.

## XML_TAG_APPLIDATA_MERCH_IDENT\[2/2\] <a href="#ga7ae8ff8350d9527942bb5c969e16e237" id="ga7ae8ff8350d9527942bb5c969e16e237"></a> {#xml_tag_applidata_merch_ident-22}

<p>#define XML_TAG_APPLIDATA_MERCH_IDENT   \"MerchIdent\"</p>

**<a href="deprecated.md#_deprecated000086">Deprecated:</a>**

## XML_TAG_APPLIDATA_MERCH_NAME_LOCATION <a href="#gaf1d700ac912a3bc322d96dcef6f845e1" id="gaf1d700ac912a3bc322d96dcef6f845e1"></a>

<p>#define XML_TAG_APPLIDATA_MERCH_NAME_LOCATION   \"MerchantName_Location\"</p>

**<a href="deprecated.md#_deprecated000108">Deprecated:</a>**

## XML_TAG_APPLIDATA_MSR_CVM_ABOVE <a href="#ga5dcef08bc16ccc60e1d30a344f51aa48" id="ga5dcef08bc16ccc60e1d30a344f51aa48"></a>

<p>#define XML_TAG_APPLIDATA_MSR_CVM_ABOVE   \"MagstripeCVM_aboveLimit\"</p>

**<a href="deprecated.md#_deprecated000101">Deprecated:</a>**

## XML_TAG_APPLIDATA_MSR_CVM_BELOW <a href="#gaeb127ba7b1aa09fee36edefe7f9e7b57" id="gaeb127ba7b1aa09fee36edefe7f9e7b57"></a>

<p>#define XML_TAG_APPLIDATA_MSR_CVM_BELOW   \"MagstripeCVM_belowLimit\"</p>

**<a href="deprecated.md#_deprecated000102">Deprecated:</a>**

## XML_TAG_APPLIDATA_MTI_MERCHANT_TYPE_IND <a href="#gaf1d330f8f0bdca44369f76b745f69795" id="gaf1d330f8f0bdca44369f76b745f69795"></a>

<p>#define XML_TAG_APPLIDATA_MTI_MERCHANT_TYPE_IND   \"MTI_Merchant_Type_Ind\"</p>

**<a href="deprecated.md#_deprecated000124">Deprecated:</a>**

## XML_TAG_APPLIDATA_NON_SECURE_CAPS <a href="#ga02f0c87378e69fd62aec80a35fe0e578" id="ga02f0c87378e69fd62aec80a35fe0e578"></a>

<p>#define XML_TAG_APPLIDATA_NON_SECURE_CAPS   \"BelowLimitTerminalCapabilities\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gad704c3335371f34032189ddcfa98c9d9">TAG_DF4A_APL_SEC_CAPS</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aef46aa8782c04a197abd81f77dc5c8ed">EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit</a>.

## XML_TAG_APPLIDATA_POS_ENTRY_MODE <a href="#ga8e9158f247d6c7011eaa3cd93507b214" id="ga8e9158f247d6c7011eaa3cd93507b214"></a>

<p>#define XML_TAG_APPLIDATA_POS_ENTRY_MODE   \"POS_EntryMode\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga52532bf55c516d8055dcba4695fdc159">TAG_9F39_POS_ENTRY_MODE</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9cec52ed8e47c79a53adb21646bf136e">EMV_CT_APPLIDATA_STRUCT::POS_EntryMode</a>.

## XML_TAG_APPLIDATA_PP3_PMSG_TABLE <a href="#ga2802ca0c104ebda43755918052f7f998" id="ga2802ca0c104ebda43755918052f7f998"></a>

<p>#define XML_TAG_APPLIDATA_PP3_PMSG_TABLE   \"PhoneMessageTable\"</p>

**<a href="deprecated.md#_deprecated000100">Deprecated:</a>**

## XML_TAG_APPLIDATA_RETAP_FIELD_OFF <a href="#gacef158dec1a3555b1e2c81ecd9fe8710" id="gacef158dec1a3555b1e2c81ecd9fe8710"></a>

<p>#define XML_TAG_APPLIDATA_RETAP_FIELD_OFF   \"RetapFieldOff\"</p>

**<a href="deprecated.md#_deprecated000090">Deprecated:</a>**

## XML_TAG_APPLIDATA_SECURE_LIMIT <a href="#gaa28af81dc810f58ba4bef8c3d15ce296" id="gaa28af81dc810f58ba4bef8c3d15ce296"></a>

<p>#define XML_TAG_APPLIDATA_SECURE_LIMIT   \"SecurityLimit\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga773accbac8ce408209a6e2e58d5370de">TAG_DF49_APL_SEC_LIMIT</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afa6752c96d0046c68e76710aee5a070f">EMV_CT_APPLIDATA_STRUCT::Security_Limit</a>.

## XML_TAG_APPLIDATA_SPECIAL_TRX\[1/2\] <a href="#gafb41a5be33a5d300ab2f1a353ccdb39a" id="gafb41a5be33a5d300ab2f1a353ccdb39a"></a> {#xml_tag_applidata_special_trx-12}

<p>#define XML_TAG_APPLIDATA_SPECIAL_TRX   \"SpecialTRX\"</p>

**<a href="deprecated.md#_deprecated000088">Deprecated:</a>**

## XML_TAG_APPLIDATA_SPECIAL_TRX\[2/2\] <a href="#gafb41a5be33a5d300ab2f1a353ccdb39a" id="gafb41a5be33a5d300ab2f1a353ccdb39a"></a> {#xml_tag_applidata_special_trx-22}

<p>#define XML_TAG_APPLIDATA_SPECIAL_TRX   \"SpecialTRX\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gab6d44f4c0940dd6d574a03820b2673dc">TAG_DF1C_SPECIAL_TRX</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab10831fed2998962919365d261912869">EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX</a>.

## XML_TAG_APPLIDATA_TAC_DEFAULT\[1/2\] <a href="#ga98c3b8b286cfc9c3be668677d20d510d" id="ga98c3b8b286cfc9c3be668677d20d510d"></a> {#xml_tag_applidata_tac_default-12}

<p>#define XML_TAG_APPLIDATA_TAC_DEFAULT   \"TAC_Default\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga588b92246f48302d61cc055baf122dda">TAG_DF23_TAC_DEFAULT</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6ce1deed9d23bcc207bfb582f59cac6b">EMV_CT_APPLIDATA_STRUCT::TACDefault</a>.

## XML_TAG_APPLIDATA_TAC_DEFAULT\[2/2\] <a href="#ga98c3b8b286cfc9c3be668677d20d510d" id="ga98c3b8b286cfc9c3be668677d20d510d"></a> {#xml_tag_applidata_tac_default-22}

<p>#define XML_TAG_APPLIDATA_TAC_DEFAULT   \"TAC_Default\"</p>

**<a href="deprecated.md#_deprecated000098">Deprecated:</a>**

## XML_TAG_APPLIDATA_TAC_DENIAL\[1/2\] <a href="#ga7a831333f78a2d2a955f415f5f739b70" id="ga7a831333f78a2d2a955f415f5f739b70"></a> {#xml_tag_applidata_tac_denial-12}

<p>#define XML_TAG_APPLIDATA_TAC_DENIAL   \"TAC_Denial\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga313084d02966bb6075d6a07b5e227ac3">TAG_DF21_TAC_DENIAL</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ab4a00313a90f392f78eb7517a136aae6">EMV_CT_APPLIDATA_STRUCT::TACDenial</a>.

## XML_TAG_APPLIDATA_TAC_DENIAL\[2/2\] <a href="#ga7a831333f78a2d2a955f415f5f739b70" id="ga7a831333f78a2d2a955f415f5f739b70"></a> {#xml_tag_applidata_tac_denial-22}

<p>#define XML_TAG_APPLIDATA_TAC_DENIAL   \"TAC_Denial\"</p>

**<a href="deprecated.md#_deprecated000096">Deprecated:</a>**

## XML_TAG_APPLIDATA_TAC_ONLINE\[1/2\] <a href="#ga4162a52b25e14b4b1bf16b00def428b1" id="ga4162a52b25e14b4b1bf16b00def428b1"></a> {#xml_tag_applidata_tac_online-12}

<p>#define XML_TAG_APPLIDATA_TAC_ONLINE   \"TAC_Online\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga8300df6d32eb040757cce4594db2eea8">TAG_DF22_TAC_ONLINE</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a71a391d7f8da7dc0e5be8b97c14447da">EMV_CT_APPLIDATA_STRUCT::TACOnline</a>.

## XML_TAG_APPLIDATA_TAC_ONLINE\[2/2\] <a href="#ga4162a52b25e14b4b1bf16b00def428b1" id="ga4162a52b25e14b4b1bf16b00def428b1"></a> {#xml_tag_applidata_tac_online-22}

<p>#define XML_TAG_APPLIDATA_TAC_ONLINE   \"TAC_Online\"</p>

**<a href="deprecated.md#_deprecated000097">Deprecated:</a>**

## XML_TAG_APPLIDATA_TAGLIST <a href="#ga7ac889dd15056267afb8020e33de5ce6" id="ga7ac889dd15056267afb8020e33de5ce6"></a>

<p>#define XML_TAG_APPLIDATA_TAGLIST   \"MandatoryTaglistCRD\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga5bbea3e13a9e17f2227d3756a0c8665b">TAG_DF2A_DUTY_TAGS</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a15601aa3b54c9da3032a3ed1d43b0b6b">EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD</a>.

## XML_TAG_APPLIDATA_TARGET_PERCENTAGE\[1/2\] <a href="#ga86f7ccf9a954b05b9818e82e00c446a9" id="ga86f7ccf9a954b05b9818e82e00c446a9"></a> {#xml_tag_applidata_target_percentage-12}

<p>#define XML_TAG_APPLIDATA_TARGET_PERCENTAGE   \"TargetPercentage\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga76bc46fd4f87330d2ae8424900702e23">TAG_DF26_PERCENT_ONL</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#accfd8d6023e6718726e1a736e0d54e8f">EMV_CT_APPLIDATA_STRUCT::TargetPercentage</a>.

## XML_TAG_APPLIDATA_TARGET_PERCENTAGE\[2/2\] <a href="#ga86f7ccf9a954b05b9818e82e00c446a9" id="ga86f7ccf9a954b05b9818e82e00c446a9"></a> {#xml_tag_applidata_target_percentage-22}

<p>#define XML_TAG_APPLIDATA_TARGET_PERCENTAGE   \"TargetPercentage\"</p>

**<a href="deprecated.md#_deprecated000131">Deprecated:</a>**

## XML_TAG_APPLIDATA_TERM_IDENT\[1/2\] <a href="#gaf0f3d447f6398bbb9ed79e18b0b399e5" id="gaf0f3d447f6398bbb9ed79e18b0b399e5"></a> {#xml_tag_applidata_term_ident-12}

<p>#define XML_TAG_APPLIDATA_TERM_IDENT   \"TermIdent\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_APPLIDATA_STRUCT::TermIdent</a>.

## XML_TAG_APPLIDATA_TERM_IDENT\[2/2\] <a href="#gaf0f3d447f6398bbb9ed79e18b0b399e5" id="gaf0f3d447f6398bbb9ed79e18b0b399e5"></a> {#xml_tag_applidata_term_ident-22}

<p>#define XML_TAG_APPLIDATA_TERM_IDENT   \"TermIdent\"</p>

**<a href="deprecated.md#_deprecated000079">Deprecated:</a>**

## XML_TAG_APPLIDATA_TERM_RECEIPT_REQUIRED_LIMIT <a href="#ga3c35869ff738066286788e59f1ed5321" id="ga3c35869ff738066286788e59f1ed5321"></a>

<p>#define XML_TAG_APPLIDATA_TERM_RECEIPT_REQUIRED_LIMIT   \"TERM_RCPT_REQLimit\"</p>

**<a href="deprecated.md#_deprecated000128">Deprecated:</a>**

## XML_TAG_APPLIDATA_THRESHOLD <a href="#ga88563026608169a4bcb335c7e24d7b37" id="ga88563026608169a4bcb335c7e24d7b37"></a>

<p>#define XML_TAG_APPLIDATA_THRESHOLD   \"Threshold\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gab925ead3cc4b76ac55df0d4238c9f951">TAG_DF24_THRESHHOLD</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0ff73036f6d3329cc1e8858761af2653">EMV_CT_APPLIDATA_STRUCT::Threshhold</a>.

## XML_TAG_APPLIDATA_THRESHOLD_BCD <a href="#ga3cabd47633c72ecfd1e1a8fd6229be34" id="ga3cabd47633c72ecfd1e1a8fd6229be34"></a>

<p>#define XML_TAG_APPLIDATA_THRESHOLD_BCD   \"Threshold_BCD\"</p>

**<a href="deprecated.md#_deprecated000129">Deprecated:</a>**

## XML_TAG_APPLIDATA_TORN_TXN_LIFETIME <a href="#gae25cb6c0ba0d27ef2be8f09c1cf53b6c" id="gae25cb6c0ba0d27ef2be8f09c1cf53b6c"></a>

<p>#define XML_TAG_APPLIDATA_TORN_TXN_LIFETIME   \"Torn_TXN_Liftime\"</p>

**<a href="deprecated.md#_deprecated000105">Deprecated:</a>**

## XML_TAG_APPLIDATA_TORN_TXN_NO <a href="#ga98ce343706d15f091c7ea699bcfa298a" id="ga98ce343706d15f091c7ea699bcfa298a"></a>

<p>#define XML_TAG_APPLIDATA_TORN_TXN_NO   \"Torn_TXN_Number\"</p>

**<a href="deprecated.md#_deprecated000106">Deprecated:</a>**

## XML_TAG_APPLIDATA_TOS_TERM_OPTION_STATUS <a href="#ga536709d3c41197bbcdcf03ef14d94c4a" id="ga536709d3c41197bbcdcf03ef14d94c4a"></a>

<p>#define XML_TAG_APPLIDATA_TOS_TERM_OPTION_STATUS   \"TOS_Term_Option_Status\"</p>

**<a href="deprecated.md#_deprecated000127">Deprecated:</a>**

## XML_TAG_APPLIDATA_TRY_AGAIN_LIMIT <a href="#gab136b4d9c1292c61022c78e8588606df" id="gab136b4d9c1292c61022c78e8588606df"></a>

<p>#define XML_TAG_APPLIDATA_TRY_AGAIN_LIMIT   \"TryAgainLimit\"</p>

**<a href="deprecated.md#_deprecated000132">Deprecated:</a>**

## XML_TAG_APPLIDATA_TTC <a href="#ga273ea4ba44d455bab01edeeddc2fe903" id="ga273ea4ba44d455bab01edeeddc2fe903"></a>

<p>#define XML_TAG_APPLIDATA_TTC   \"Txn_Category_Code\"</p>

**<a href="deprecated.md#_deprecated000107">Deprecated:</a>**

## XML_TAG_APPLIDATA_TTI_TERM_TRANS_INFO <a href="#ga3bae00d3acf768c4f7c89d91bc681b1f" id="ga3bae00d3acf768c4f7c89d91bc681b1f"></a>

<p>#define XML_TAG_APPLIDATA_TTI_TERM_TRANS_INFO   \"TTI_Term_Trans_Info\"</p>

**<a href="deprecated.md#_deprecated000125">Deprecated:</a>**

## XML_TAG_APPLIDATA_TTI_TERM_TRANS_TYPE <a href="#gab7e63284b96f2b0cd3168dc4b01e9c3f" id="gab7e63284b96f2b0cd3168dc4b01e9c3f"></a>

<p>#define XML_TAG_APPLIDATA_TTI_TERM_TRANS_TYPE   \"TTT_Term_Trans_Type\"</p>

**<a href="deprecated.md#_deprecated000126">Deprecated:</a>**

## XML_TAG_APPLIDATA_TXN_TYPES_CASH <a href="#gab8ec9bff360881236d02281bd4c97f9c" id="gab8ec9bff360881236d02281bd4c97f9c"></a>

<p>#define XML_TAG_APPLIDATA_TXN_TYPES_CASH   \"TxnTypesCash\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#gad5e676bfc0893326b66dd1915c1230ce">TAG_DFD005_TXN_TYPES_CASH</a>
Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aaf06c0171381243a268293449aac83a3">EMV_CT_APPLIDATA_STRUCT::TxnTypesCash</a>.

## XML_TAG_APPLIDATA_TXN_TYPES_CASHBACK <a href="#ga6d192fb0bc37a441d298f328ef05ea07" id="ga6d192fb0bc37a441d298f328ef05ea07"></a>

<p>#define XML_TAG_APPLIDATA_TXN_TYPES_CASHBACK   \"TxnTypesCashback\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga139574f5e46407ac2844efcb16c91d98">TAG_DFD006_TXN_TYPES_CASHBACK</a>
Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5c423eef2c409c104e37ae13ee5edc91">EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback</a>.

## XML_TAG_APPLIDATA_TXN_TYPES_REFUND <a href="#gaa54bd4858a70eab42fa179ac3744a729" id="gaa54bd4858a70eab42fa179ac3744a729"></a>

<p>#define XML_TAG_APPLIDATA_TXN_TYPES_REFUND   \"TxnTypesRefund\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#gad06c010a334fdc3cdf73b3398fb696af">TAG_DFD007_TXN_TYPES_REFUND</a>
Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80c8a1f9e2c537ecbc027981dc237c0b">EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund</a>.

## XML_TAG_APPLIDATA_TXN_TYPES_SALE <a href="#ga83d1c097a8e6bd915c8786debb88f028" id="ga83d1c097a8e6bd915c8786debb88f028"></a>

<p>#define XML_TAG_APPLIDATA_TXN_TYPES_SALE   \"TxnTypesSale\"</p>

TLV tag: <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga20c3d899e1759544b4fe9e9e4b95eeea">TAG_DFD004_TXN_TYPES_SALE</a>
Struct element: <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2747a88626df7b02d5a6c3a283972736">EMV_CT_APPLIDATA_STRUCT::TxnTypesSale</a>.

## XML_TAG_APPLIDATA_VER_NUM <a href="#ga3732b63e4cf39f8300736e9cf0432fa7" id="ga3732b63e4cf39f8300736e9cf0432fa7"></a>

<p>#define XML_TAG_APPLIDATA_VER_NUM   \"VerNum\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gac0fb6f2c9da5e835754d94e7edf4f7c2">TAG_9F09_TRM_APP_VERSION_NB</a>
Struct element <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a4a13940a43927f00f7c701cb98131588">EMV_CT_APPLIDATA_STRUCT::VerNum</a>.

## XML_TAG_APPLIDATA_VISA_DRL_APP_PRG_ID <a href="#gac2deb9d75e2bb86ee5b785bee22c2ea5" id="gac2deb9d75e2bb86ee5b785bee22c2ea5"></a>

<p>#define XML_TAG_APPLIDATA_VISA_DRL_APP_PRG_ID   \"Application_PRG_ID\"</p>

**<a href="deprecated.md#_deprecated000114">Deprecated:</a>**

## XML_TAG_APPLIDATA_VISA_DRL_CVM_LIMIT <a href="#ga2e0a7f380e1dc82c40cc9967d2c515ee" id="ga2e0a7f380e1dc82c40cc9967d2c515ee"></a>

<p>#define XML_TAG_APPLIDATA_VISA_DRL_CVM_LIMIT   \"CVMlimit\"</p>

**<a href="deprecated.md#_deprecated000116">Deprecated:</a>**

## XML_TAG_APPLIDATA_VISA_DRL_FLOORLIMIT <a href="#ga96a2449a83693772f26370b86e105727" id="ga96a2449a83693772f26370b86e105727"></a>

<p>#define XML_TAG_APPLIDATA_VISA_DRL_FLOORLIMIT   \"Floorlimit\"</p>

**<a href="deprecated.md#_deprecated000112">Deprecated:</a>**

## XML_TAG_APPLIDATA_VISA_DRL_INDEX <a href="#gaa85e96afea9267ac90fc195391e8bb89" id="gaa85e96afea9267ac90fc195391e8bb89"></a>

<p>#define XML_TAG_APPLIDATA_VISA_DRL_INDEX   \"Index\"</p>

**<a href="deprecated.md#_deprecated000111">Deprecated:</a>**

## XML_TAG_APPLIDATA_VISA_DRL_PARAMS <a href="#gaaff9d036edcda51dbc1a61053349710a" id="gaaff9d036edcda51dbc1a61053349710a"></a>

<p>#define XML_TAG_APPLIDATA_VISA_DRL_PARAMS   \"VisaDRLParams\"</p>

**<a href="deprecated.md#_deprecated000110">Deprecated:</a>**

## XML_TAG_APPLIDATA_VISA_DRL_PRG_ID_LEN <a href="#gacfb924d975c29f3209abbf3f506dae03" id="gacfb924d975c29f3209abbf3f506dae03"></a>

<p>#define XML_TAG_APPLIDATA_VISA_DRL_PRG_ID_LEN   \"AppPrgIdLen\"</p>

**<a href="deprecated.md#_deprecated000113">Deprecated:</a>**

## XML_TAG_APPLIDATA_VISA_DRL_SWITCH <a href="#ga19d9ef288f545d4437a0cf95cd171179" id="ga19d9ef288f545d4437a0cf95cd171179"></a>

<p>#define XML_TAG_APPLIDATA_VISA_DRL_SWITCH   \"FeatureSwitch\"</p>

**<a href="deprecated.md#_deprecated000117">Deprecated:</a>**

## XML_TAG_APPLIDATA_VISA_DRL_TXN_LIMIT <a href="#gad649bea958beed648efb3a83e8afc5b4" id="gad649bea958beed648efb3a83e8afc5b4"></a>

<p>#define XML_TAG_APPLIDATA_VISA_DRL_TXN_LIMIT   \"TXNlimit\"</p>

**<a href="deprecated.md#_deprecated000115">Deprecated:</a>**

## XML_TAG_APPLIDATA_VISA_TTQ <a href="#ga516f562a7f74940e85b0abac7cde9d1a" id="ga516f562a7f74940e85b0abac7cde9d1a"></a>

<p>#define XML_TAG_APPLIDATA_VISA_TTQ   \"VisaTTQ\"</p>

**<a href="deprecated.md#_deprecated000109">Deprecated:</a>**

## XML_TAG_CAP_KEYS\[1/2\] <a href="#ga42c816c3906637a4065cb023e47148af" id="ga42c816c3906637a4065cb023e47148af"></a> {#xml_tag_cap_keys-12}

<p>#define XML_TAG_CAP_KEYS   \"CapKeys\"</p>

constructed xml tag for CAP key data, used in file \"EMV_Keys.xml\"

## XML_TAG_CAP_KEYS\[2/2\] <a href="#ga42c816c3906637a4065cb023e47148af" id="ga42c816c3906637a4065cb023e47148af"></a> {#xml_tag_cap_keys-22}

<p>#define XML_TAG_CAP_KEYS   \"CapKeys\"</p>

constructed xml tag for CAP key data, used in \"EMV_CTLS_Keys.xml\"

## XML_TAG_CAP_KEYS_CAPKEY\[1/2\] <a href="#gadca82bc6f2514de3d8c46c456ee814ba" id="gadca82bc6f2514de3d8c46c456ee814ba"></a> {#xml_tag_cap_keys_capkey-12}

<p>#define XML_TAG_CAP_KEYS_CAPKEY   \"CapKey\"</p>

constructed xml tag for A SINGLE CAP key <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t">EMV_CT_CAPKEY_STRUCT</a>, embedded in [XML_TAG_CAP_KEYS](#ga42c816c3906637a4065cb023e47148af "constructed xml tag for CAP key data, used in file "EMV_Keys.xml"")

## XML_TAG_CAP_KEYS_CAPKEY\[2/2\] <a href="#gadca82bc6f2514de3d8c46c456ee814ba" id="gadca82bc6f2514de3d8c46c456ee814ba"></a> {#xml_tag_cap_keys_capkey-22}

<p>#define XML_TAG_CAP_KEYS_CAPKEY   \"CapKey\"</p>

constructed xml tag for A SINGLE CAP key <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t">EMV_CTLS_CAPKEY_STRUCT</a>

## XML_TAG_CAP_KEYS_EXPONENT\[1/2\] <a href="#ga19533a461456afae8eb33ee784fd361b" id="ga19533a461456afae8eb33ee784fd361b"></a> {#xml_tag_cap_keys_exponent-12}

<p>#define XML_TAG_CAP_KEYS_EXPONENT   \"Exponent\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3301dc858f4033e7100dae7d71a7e1e0">TAG_KEY_EXPONENT</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a65d7fb542cdae2f7104b266bbe3ac9b2">EMV_CT_CAPKEY_STRUCT::Exponent</a>.

## XML_TAG_CAP_KEYS_EXPONENT\[2/2\] <a href="#ga19533a461456afae8eb33ee784fd361b" id="ga19533a461456afae8eb33ee784fd361b"></a> {#xml_tag_cap_keys_exponent-22}

<p>#define XML_TAG_CAP_KEYS_EXPONENT   \"Exponent\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3301dc858f4033e7100dae7d71a7e1e0">TAG_KEY_EXPONENT</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a65d7fb542cdae2f7104b266bbe3ac9b2">EMV_CTLS_CAPKEY_STRUCT::Exponent</a>.

## XML_TAG_CAP_KEYS_HASH\[1/2\] <a href="#gad6a0497d2964a67cec810ea12c8279a1" id="gad6a0497d2964a67cec810ea12c8279a1"></a> {#xml_tag_cap_keys_hash-12}

<p>#define XML_TAG_CAP_KEYS_HASH   \"Hash\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac037a26b7d73563286fb125d59f1265d">TAG_KEY_HASH</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aa04067e88f6cfe9465c0a92f7233ebee">EMV_CT_CAPKEY_STRUCT::Hash</a>.

## XML_TAG_CAP_KEYS_HASH\[2/2\] <a href="#gad6a0497d2964a67cec810ea12c8279a1" id="gad6a0497d2964a67cec810ea12c8279a1"></a> {#xml_tag_cap_keys_hash-22}

<p>#define XML_TAG_CAP_KEYS_HASH   \"Hash\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac037a26b7d73563286fb125d59f1265d">TAG_KEY_HASH</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aa04067e88f6cfe9465c0a92f7233ebee">EMV_CTLS_CAPKEY_STRUCT::Hash</a>.

## XML_TAG_CAP_KEYS_INDEX\[1/2\] <a href="#ga2564b8002f03295e157b242ad2efa950" id="ga2564b8002f03295e157b242ad2efa950"></a> {#xml_tag_cap_keys_index-12}

<p>#define XML_TAG_CAP_KEYS_INDEX   \"Index\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga7b2bdd988a89e21cd04afe12a30c0ddf">TAG_KEY_INDEX</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#ac24ea04d0a0218723498d1632c6875a9">EMV_CT_CAPKEY_STRUCT::Index</a>.

## XML_TAG_CAP_KEYS_INDEX\[2/2\] <a href="#ga2564b8002f03295e157b242ad2efa950" id="ga2564b8002f03295e157b242ad2efa950"></a> {#xml_tag_cap_keys_index-22}

<p>#define XML_TAG_CAP_KEYS_INDEX   \"Index\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga7b2bdd988a89e21cd04afe12a30c0ddf">TAG_KEY_INDEX</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#ac24ea04d0a0218723498d1632c6875a9">EMV_CTLS_CAPKEY_STRUCT::Index</a>.

## XML_TAG_CAP_KEYS_KEY\[1/2\] <a href="#ga151215aa136d44cb12e3ea1d392c744f" id="ga151215aa136d44cb12e3ea1d392c744f"></a> {#xml_tag_cap_keys_key-12}

<p>#define XML_TAG_CAP_KEYS_KEY   \"Key\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a0a3543353678a64e265f8d5a817c52db">EMV_CT_CAPKEY_STRUCT::Key</a>.

## XML_TAG_CAP_KEYS_KEY\[2/2\] <a href="#ga151215aa136d44cb12e3ea1d392c744f" id="ga151215aa136d44cb12e3ea1d392c744f"></a> {#xml_tag_cap_keys_key-22}

<p>#define XML_TAG_CAP_KEYS_KEY   \"Key\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a0a3543353678a64e265f8d5a817c52db">EMV_CTLS_CAPKEY_STRUCT::Key</a>.

## XML_TAG_CAP_KEYS_KEYLEN\[1/2\] <a href="#ga94a87250bc33e6e85a09285f832fbfd9" id="ga94a87250bc33e6e85a09285f832fbfd9"></a> {#xml_tag_cap_keys_keylen-12}

<p>#define XML_TAG_CAP_KEYS_KEYLEN   \"KeyLen\"</p>

Length of data in TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aeb6f1a41fb682dc06cfdc1d0c1bef18f">EMV_CT_CAPKEY_STRUCT::KeyLen</a>.

## XML_TAG_CAP_KEYS_KEYLEN\[2/2\] <a href="#ga94a87250bc33e6e85a09285f832fbfd9" id="ga94a87250bc33e6e85a09285f832fbfd9"></a> {#xml_tag_cap_keys_keylen-22}

<p>#define XML_TAG_CAP_KEYS_KEYLEN   \"KeyLen\"</p>

Length of TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aeb6f1a41fb682dc06cfdc1d0c1bef18f">EMV_CTLS_CAPKEY_STRUCT::KeyLen</a>.

## XML_TAG_CAP_KEYS_REVOC_LIST\[1/2\] <a href="#ga1e433908dd992082b5a252f39d60f45d" id="ga1e433908dd992082b5a252f39d60f45d"></a> {#xml_tag_cap_keys_revoc_list-12}

<p>#define XML_TAG_CAP_KEYS_REVOC_LIST   \"RevocationList\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae92f2b4a70d0c2217bdcc751106477d1">TAG_KEY_CRL</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aad05155fcd539c313f48260d8ebd2f76">EMV_CT_CAPKEY_STRUCT::RevocEntries</a>.

## XML_TAG_CAP_KEYS_REVOC_LIST\[2/2\] <a href="#ga1e433908dd992082b5a252f39d60f45d" id="ga1e433908dd992082b5a252f39d60f45d"></a> {#xml_tag_cap_keys_revoc_list-22}

<p>#define XML_TAG_CAP_KEYS_REVOC_LIST   \"RevocationList\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae92f2b4a70d0c2217bdcc751106477d1">TAG_KEY_CRL</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#aad05155fcd539c313f48260d8ebd2f76">EMV_CTLS_CAPKEY_STRUCT::RevocEntries</a>.

## XML_TAG_CAP_KEYS_RID\[1/2\] <a href="#ga2acfa293c67d4c30b81f26f1fc51f677" id="ga2acfa293c67d4c30b81f26f1fc51f677"></a> {#xml_tag_cap_keys_rid-12}

<p>#define XML_TAG_CAP_KEYS_RID   \"RID\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga0c86b48955a7de5b01796ece1dd8157b">TAG_KEY_RID</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a7d507a69b2eb69015b1ced0f4c4d47fd">EMV_CT_CAPKEY_STRUCT::RID</a>.

## XML_TAG_CAP_KEYS_RID\[2/2\] <a href="#ga2acfa293c67d4c30b81f26f1fc51f677" id="ga2acfa293c67d4c30b81f26f1fc51f677"></a> {#xml_tag_cap_keys_rid-22}

<p>#define XML_TAG_CAP_KEYS_RID   \"RID\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga0c86b48955a7de5b01796ece1dd8157b">TAG_KEY_RID</a>
Struct element <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#a7d507a69b2eb69015b1ced0f4c4d47fd">EMV_CTLS_CAPKEY_STRUCT::RID</a>.

## XML_TAG_CHPAPPLIDATA_VER_NUM <a href="#gab9cca69893732da4749b55d0dbd714ac" id="gab9cca69893732da4749b55d0dbd714ac"></a>

<p>#define XML_TAG_CHPAPPLIDATA_VER_NUM   \"Chip_VerNumber\"</p>

**<a href="deprecated.md#_deprecated000083">Deprecated:</a>**

## XML_TAG_MSRAPPLIDATA_VER_NUM <a href="#ga7bd7e2b82bdfff8ab0f6f6555951bd63" id="ga7bd7e2b82bdfff8ab0f6f6555951bd63"></a>

<p>#define XML_TAG_MSRAPPLIDATA_VER_NUM   \"MSR_VerNumber\"</p>

**<a href="deprecated.md#_deprecated000084">Deprecated:</a>**

## XML_TAG_TERMDATA\[1/2\] <a href="#ga222621e71edebae1ad5520a19b59fbf3" id="ga222621e71edebae1ad5520a19b59fbf3"></a> {#xml_tag_termdata-12}

<p>#define XML_TAG_TERMDATA   \"TerminalData\"</p>

constructed xml tag for terminal data, used in file \"EMV_Terminal.xml\"

## XML_TAG_TERMDATA\[2/2\] <a href="#ga222621e71edebae1ad5520a19b59fbf3" id="ga222621e71edebae1ad5520a19b59fbf3"></a> {#xml_tag_termdata-22}

<p>#define XML_TAG_TERMDATA   \"TerminalData\"</p>

constructed xml tag for terminal data <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CTLS_TERMDATA_STRUCT</a>, used in \"EMV_CTLS_Terminal.xml\"

## XML_TAG_TERMDATA_BEEP_FREQUENCY_ALERT <a href="#ga16e19d8553d2fd19a8069da5c5c0548c" id="ga16e19d8553d2fd19a8069da5c5c0548c"></a>

<p>#define XML_TAG_TERMDATA_BEEP_FREQUENCY_ALERT   \"BeepFrequencyAlert\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga637b56c5915d91922ad0a6b03316baeb">TAG_DFD007_BEEP_FREQ_ALERT</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a2d2a207c6b103e0f8e9b21301150c5a6">EMV_CTLS_TERMDATA_STRUCT::BeepFrequencyAlert</a>.

## XML_TAG_TERMDATA_BEEP_FREQUENCY_SUCCESS <a href="#gafa52bc19e376c25cb63f9bd98f7b7aa8" id="gafa52bc19e376c25cb63f9bd98f7b7aa8"></a>

<p>#define XML_TAG_TERMDATA_BEEP_FREQUENCY_SUCCESS   \"BeepFrequencySuccess\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac4d4fa824c7ddadf3c1b83ea682c991c">TAG_DFD006_BEEP_FREQ_SUCCESS</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a82bafc9160b85144ec5a62a8ae28e49f">EMV_CTLS_TERMDATA_STRUCT::BeepFrequencySuccess</a>.

## XML_TAG_TERMDATA_BEEP_VOLUME <a href="#ga57ca04c769961df068507ec48d8749df" id="ga57ca04c769961df068507ec48d8749df"></a>

<p>#define XML_TAG_TERMDATA_BEEP_VOLUME   \"BeepVolume\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac3f64e7a2f4fc6ae2911cf8809aa97de">TAG_DF62_BUZZER_VOLUME</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a93d1982261d2afed6ce0b169b9f89541">EMV_CTLS_TERMDATA_STRUCT::BeepVolume</a>.

## XML_TAG_TERMDATA_COUNTRY_CODE_TERM\[1/2\] <a href="#gaef4d5036990ed54a310bfa34e9a018aa" id="gaef4d5036990ed54a310bfa34e9a018aa"></a> {#xml_tag_termdata_country_code_term-12}

<p>#define XML_TAG_TERMDATA_COUNTRY_CODE_TERM   \"CountryCodeTerm\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#af11a6d7b3bb1f5438dca672b746aeb11">EMV_CT_TERMDATA_STRUCT::TermCountryCode</a>.

## XML_TAG_TERMDATA_COUNTRY_CODE_TERM\[2/2\] <a href="#gaef4d5036990ed54a310bfa34e9a018aa" id="gaef4d5036990ed54a310bfa34e9a018aa"></a> {#xml_tag_termdata_country_code_term-22}

<p>#define XML_TAG_TERMDATA_COUNTRY_CODE_TERM   \"CountryCodeTerm\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5bc987c3686fd5821f20d21015354787">TAG_9F1A_TRM_COUNTRY_CODE</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a0cd015d4fd7fa26a9c13d6687dcc1aea">EMV_CTLS_TERMDATA_STRUCT::CountryCodeTerm</a>.

## XML_TAG_TERMDATA_CURRENCY_TRANS\[1/2\] <a href="#ga661c0545150aba185eb87f9cc4ec2888" id="ga661c0545150aba185eb87f9cc4ec2888"></a> {#xml_tag_termdata_currency_trans-12}

<p>#define XML_TAG_TERMDATA_CURRENCY_TRANS   \"CurrencyTrans\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga369ab2cc83e9b220bdfa79753f1f3962">TAG_5F2A_TRANS_CURRENCY</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CTLS_TERMDATA_STRUCT::CurrencyTrans</a>.

## XML_TAG_TERMDATA_CURRENCY_TRANS\[2/2\] <a href="#ga661c0545150aba185eb87f9cc4ec2888" id="ga661c0545150aba185eb87f9cc4ec2888"></a> {#xml_tag_termdata_currency_trans-22}

<p>#define XML_TAG_TERMDATA_CURRENCY_TRANS   \"CurrencyTrans\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga369ab2cc83e9b220bdfa79753f1f3962">TAG_5F2A_TRANS_CURRENCY</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CT_TERMDATA_STRUCT::CurrencyTrans</a>.

## XML_TAG_TERMDATA_EXP_TRANS\[1/2\] <a href="#ga626a3a285542c99e089df3c38d66ee89" id="ga626a3a285542c99e089df3c38d66ee89"></a> {#xml_tag_termdata_exp_trans-12}

<p>#define XML_TAG_TERMDATA_EXP_TRANS   \"ExpTrans\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga134c61ae2787b93c5def5bbf929f7cb4">TAG_5F36_TRANS_CURRENCY_EXP</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CTLS_TERMDATA_STRUCT::ExpTrans</a>.

## XML_TAG_TERMDATA_EXP_TRANS\[2/2\] <a href="#ga626a3a285542c99e089df3c38d66ee89" id="ga626a3a285542c99e089df3c38d66ee89"></a> {#xml_tag_termdata_exp_trans-22}

<p>#define XML_TAG_TERMDATA_EXP_TRANS   \"ExpTrans\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga134c61ae2787b93c5def5bbf929f7cb4">TAG_5F36_TRANS_CURRENCY_EXP</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CT_TERMDATA_STRUCT::ExpTrans</a>.

## XML_TAG_TERMDATA_FLOW_OPTIONS <a href="#gab16baa33ca0e740088426ad66b521adf" id="gab16baa33ca0e740088426ad66b521adf"></a>

<p>#define XML_TAG_TERMDATA_FLOW_OPTIONS   \"FlowOptions\"</p>

TLV tag <a href="group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#gad0e9f205f2fcb246b6c958150d8a6338">TAG_DF8F0B_TERM_FLOW_OPTIONS</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a347abf8f0129f37f17279ef981765674">EMV_CTLS_TERMDATA_STRUCT::FlowOptions</a>,.

## XML_TAG_TERMDATA_FRAMEWORK_VERSION\[1/2\] <a href="#ga7466ea82a873f9b06da23f703c800a17" id="ga7466ea82a873f9b06da23f703c800a17"></a> {#xml_tag_termdata_framework_version-12}

<p>#define XML_TAG_TERMDATA_FRAMEWORK_VERSION   \"FrameworkVersion\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga6f8f8ac35965ec091b3d1a3f4a4efe8d">TAG_DF11_LIB_VERSION</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a15d10a5c739bb6c45d9d0bf3f40c0021">EMV_CT_TERMDATA_STRUCT::FrameworkVersion</a>.

## XML_TAG_TERMDATA_FRAMEWORK_VERSION\[2/2\] <a href="#ga7466ea82a873f9b06da23f703c800a17" id="ga7466ea82a873f9b06da23f703c800a17"></a> {#xml_tag_termdata_framework_version-22}

<p>#define XML_TAG_TERMDATA_FRAMEWORK_VERSION   \"FrameworkVersion\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga6f8f8ac35965ec091b3d1a3f4a4efe8d">TAG_DF11_LIB_VERSION</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a15d10a5c739bb6c45d9d0bf3f40c0021">EMV_CTLS_TERMDATA_STRUCT::FrameworkVersion</a>.

## XML_TAG_TERMDATA_HOST_COMM_TIMEOUT <a href="#ga0fb88db4b918907ecb583113812609a1" id="ga0fb88db4b918907ecb583113812609a1"></a>

<p>#define XML_TAG_TERMDATA_HOST_COMM_TIMEOUT   \"HostCommunicationTimeout\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga5abfcf66eecc5c5eb457ef24d01a6ea2">TAG_DFD009_HOST_COMM_TIMEOUT</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a5296f4f7b31fa3553a4fb502be8bccde">EMV_CTLS_TERMDATA_STRUCT::HostCommunicationTimeout</a>.

## XML_TAG_TERMDATA_HOTLIST <a href="#gad10a81f383a61b654186234abbc9ae97" id="gad10a81f383a61b654186234abbc9ae97"></a>

<p>#define XML_TAG_TERMDATA_HOTLIST   \"Hotlist\"</p>

Enclosing tag in \"EMV_CTLS_HOTLIST.xml\".

## XML_TAG_TERMDATA_HOTLIST_PAN <a href="#ga02567214f31fa24cfd632fd111f4903e" id="ga02567214f31fa24cfd632fd111f4903e"></a>

<p>#define XML_TAG_TERMDATA_HOTLIST_PAN   \"PAN\"</p>

PAN data in \"EMV_CTLS_HOTLIST.xml\".

## XML_TAG_TERMDATA_HOTLIST_RECORD <a href="#gac628721e676509eef7b4456f3a248df0" id="gac628721e676509eef7b4456f3a248df0"></a>

<p>#define XML_TAG_TERMDATA_HOTLIST_RECORD   \"Hot_Item\"</p>

One record in \"EMV_CTLS_HOTLIST.xml\".

## XML_TAG_TERMDATA_HOTLIST_SEQ_NUMBER <a href="#ga9774ad1849206aa0707286558487ae94" id="ga9774ad1849206aa0707286558487ae94"></a>

<p>#define XML_TAG_TERMDATA_HOTLIST_SEQ_NUMBER   \"PAN_Sequence_Number\"</p>

PAN sequence number in \"EMV_CTLS_HOTLIST.xml\".

## XML_TAG_TERMDATA_IFD_SERIAL_NUMBER\[1/2\] <a href="#ga629ee278fb088066573a86dd7d0b0e55" id="ga629ee278fb088066573a86dd7d0b0e55"></a> {#xml_tag_termdata_ifd_serial_number-12}

<p>#define XML_TAG_TERMDATA_IFD_SERIAL_NUMBER   \"IFD_SerialNumber\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga1edb578c8df9ce5a55b3204cda45d198">TAG_9F1E_IFD_SERIAL_NB</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CTLS_TERMDATA_STRUCT::IFDSerialNumber</a>.

## XML_TAG_TERMDATA_IFD_SERIAL_NUMBER\[2/2\] <a href="#ga629ee278fb088066573a86dd7d0b0e55" id="ga629ee278fb088066573a86dd7d0b0e55"></a> {#xml_tag_termdata_ifd_serial_number-22}

<p>#define XML_TAG_TERMDATA_IFD_SERIAL_NUMBER   \"IFD_SerialNumber\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga1edb578c8df9ce5a55b3204cda45d198">TAG_9F1E_IFD_SERIAL_NB</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a67d893f7b2cd705d266455f171ff7657">EMV_CT_TERMDATA_STRUCT::IFDSerialNumber</a>.

## XML_TAG_TERMDATA_KERNEL_VERSION\[1/2\] <a href="#ga22fd4430dee89d1b99af96d86a6b0109" id="ga22fd4430dee89d1b99af96d86a6b0109"></a> {#xml_tag_termdata_kernel_version-12}

<p>#define XML_TAG_TERMDATA_KERNEL_VERSION   \"KernelVersion\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga67a162b9d0b04eff880450e857dafb37">TAG_KERNEL_VERSION</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a808cb5cde9cf6ac837ef81977f4a751c">EMV_CT_TERMDATA_STRUCT::KernelVersion</a>.

## XML_TAG_TERMDATA_KERNEL_VERSION\[2/2\] <a href="#ga22fd4430dee89d1b99af96d86a6b0109" id="ga22fd4430dee89d1b99af96d86a6b0109"></a> {#xml_tag_termdata_kernel_version-22}

<p>#define XML_TAG_TERMDATA_KERNEL_VERSION   \"KernelVersion\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga67a162b9d0b04eff880450e857dafb37">TAG_KERNEL_VERSION</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a75c365e8a1aca8672ee83242dfb3fe42">EMV_CTLS_TERMDATA_STRUCT::KernelVersion</a>.

## XML_TAG_TERMDATA_L1DRIVER_VERSION\[1/2\] <a href="#ga1027f53b9fdf8329597f1a18fe49a316" id="ga1027f53b9fdf8329597f1a18fe49a316"></a> {#xml_tag_termdata_l1driver_version-12}

<p>#define XML_TAG_TERMDATA_L1DRIVER_VERSION   \"L1DriverVersion\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac1ea086216b81ee8ac8b78f2fbe15daa">TAG_L1DRIVER_VERSION</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CT_TERMDATA_STRUCT::L1DriverVersion</a>.

## XML_TAG_TERMDATA_L1DRIVER_VERSION\[2/2\] <a href="#ga1027f53b9fdf8329597f1a18fe49a316" id="ga1027f53b9fdf8329597f1a18fe49a316"></a> {#xml_tag_termdata_l1driver_version-22}

<p>#define XML_TAG_TERMDATA_L1DRIVER_VERSION   \"L1DriverVersion\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga1a279b58a27d0cc9146e89c6106035dc">TAG_DF6F_L1DRIVER_VERSION</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CTLS_TERMDATA_STRUCT::L1DriverVersion</a>.

## XML_TAG_TERMDATA_MAXCTLS_TRANSLIMIT <a href="#gaffe891d87e34d05b4a9c12603a1f5acd" id="gaffe891d87e34d05b4a9c12603a1f5acd"></a>

<p>#define XML_TAG_TERMDATA_MAXCTLS_TRANSLIMIT   \"MaxCTLSTranslimit\"</p>

TLV tag <a href="group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga6a3a4411ca48ce2fe52c516dbeed0ebc">TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a3a9583914dda18129d8a82c8a1ebd679">EMV_CTLS_TERMDATA_STRUCT::MaxCTLSTranslimit</a>.

## XML_TAG_TERMDATA_POI_INFORMATION <a href="#ga18101ad0d744cdf74d82aa5028d99db2" id="ga18101ad0d744cdf74d82aa5028d99db2"></a>

<p>#define XML_TAG_TERMDATA_POI_INFORMATION   \"PoiInformation\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga54b024713e6b8dd6d99e3c1d18005496">TAG_8B_POI_INFORMATION</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aaf88e302e58d70d28ed59a53cdca2f2e">EMV_CTLS_TERMDATA_STRUCT::poiInformation</a>.

## XML_TAG_TERMDATA_SB308_FLAG <a href="#ga6fe017c859ae597ce9417b26635ce410" id="ga6fe017c859ae597ce9417b26635ce410"></a>

<p>#define XML_TAG_TERMDATA_SB308_FLAG   \"EMVCoSB308\"</p>

Format: 1 character \[0,1\] TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae4ae3d27836d4d82c28240ff6f55a852">TAG_DF6F_SB308_FLAG</a>, used exclusive for Titus.

## XML_TAG_TERMDATA_SECOND_TAP_DELAY <a href="#ga5d86c5d8f45bdd9f30ab755db45b6205" id="ga5d86c5d8f45bdd9f30ab755db45b6205"></a>

<p>#define XML_TAG_TERMDATA_SECOND_TAP_DELAY   \"SecondTapDelay\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga4026965f91b1424004ecd2b376349c78">TAG_DFD008_SECOND_TAP_DELAY</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a7c7bd56336bc0c080bab48db9a1aa2a3">EMV_CTLS_TERMDATA_STRUCT::SecondTapDelay</a>.

## XML_TAG_TERMDATA_SUPP_LANG\[1/2\] <a href="#ga77460b946c3b46533edfbdbd3a6caf4c" id="ga77460b946c3b46533edfbdbd3a6caf4c"></a> {#xml_tag_termdata_supp_lang-12}

<p>#define XML_TAG_TERMDATA_SUPP_LANG   \"SuppLang\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga52707e76d2602d822429e98d653933c3">TAG_SUPP_LANG</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9d2672ac7a65bb39a13e450b4cb4737b">EMV_CTLS_TERMDATA_STRUCT::SuppLang</a>.

## XML_TAG_TERMDATA_SUPP_LANG\[2/2\] <a href="#ga77460b946c3b46533edfbdbd3a6caf4c" id="ga77460b946c3b46533edfbdbd3a6caf4c"></a> {#xml_tag_termdata_supp_lang-22}

<p>#define XML_TAG_TERMDATA_SUPP_LANG   \"SuppLang\"</p>

TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga52707e76d2602d822429e98d653933c3">TAG_SUPP_LANG</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9d2672ac7a65bb39a13e450b4cb4737b">EMV_CT_TERMDATA_STRUCT::SuppLang</a>.

## XML_TAG_TERMDATA_TERM_ADD_CAP <a href="#ga3514324960ea620fc5a8daef445fcecd" id="ga3514324960ea620fc5a8daef445fcecd"></a>

<p>#define XML_TAG_TERMDATA_TERM_ADD_CAP   \"TermAddCap\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga5670c7d223a0af749d5b8b251e32f870">TAG_9F40_ADD_TRM_CAP</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9cafd59682bd260f14ce67e716046538">EMV_CT_TERMDATA_STRUCT::TermAddCap</a>.

## XML_TAG_TERMDATA_TERM_CAP <a href="#ga7bfeb1312c6535a069be1b26015e6ef4" id="ga7bfeb1312c6535a069be1b26015e6ef4"></a>

<p>#define XML_TAG_TERMDATA_TERM_CAP   \"TermCap\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gad3ec876483505eb23aad4e1b210653f5">TAG_9F33_TRM_CAPABILITIES</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aa98172f43b850403ff2e6aba0340281f">EMV_CT_TERMDATA_STRUCT::TermCap</a>.

## XML_TAG_TERMDATA_TERM_IDENT <a href="#ga0c70e5646bee358cbfeb5f65628c55d2" id="ga0c70e5646bee358cbfeb5f65628c55d2"></a>

<p>#define XML_TAG_TERMDATA_TERM_IDENT   \"TermIdent\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#ga64f401e453e74b4ff1f727aa7cc449ac">TAG_9F1C_TRM_ID</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a9f0b41880fba4d452b3b9e7b4170a2e1">EMV_CT_TERMDATA_STRUCT::TermIdent</a>.

## XML_TAG_TERMDATA_TERM_TYP\[1/2\] <a href="#gae8ddc36e1390de13ad98cf5da17cfc3f" id="gae8ddc36e1390de13ad98cf5da17cfc3f"></a> {#xml_tag_termdata_term_typ-12}

<p>#define XML_TAG_TERMDATA_TERM_TYP   \"TermTyp\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CTLS_TERMDATA_STRUCT::TermTyp</a>.

## XML_TAG_TERMDATA_TERM_TYP\[2/2\] <a href="#gae8ddc36e1390de13ad98cf5da17cfc3f" id="gae8ddc36e1390de13ad98cf5da17cfc3f"></a> {#xml_tag_termdata_term_typ-22}

<p>#define XML_TAG_TERMDATA_TERM_TYP   \"TermTyp\"</p>

TLV tag <a href="group___e_m_v_c_o___t_a_g_s.md#gace5b4ef50a58d29b2f5296c2c17273c9">TAG_9F35_TRM_TYPE</a>
Struct element <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#aedfef0baa468f4fff2d56821c55f8726">EMV_CT_TERMDATA_STRUCT::TermTyp</a>.

## XML_TAG_VTM\[1/2\] <a href="#gacaa0b882a863697830b8d45bc689bf94" id="gacaa0b882a863697830b8d45bc689bf94"></a> {#xml_tag_vtm-12}

<p>#define XML_TAG_VTM   \"VirtualTerminalMap\"</p>

Enclosing tag used in \"EMV_VirtualTermConfig.xml\".

## XML_TAG_VTM\[2/2\] <a href="#gacaa0b882a863697830b8d45bc689bf94" id="gacaa0b882a863697830b8d45bc689bf94"></a> {#xml_tag_vtm-22}

<p>#define XML_TAG_VTM   \"VirtualTerminalMap\"</p>

Enclosing tag used in \"EMV_VirtualTermConfig.xml\".

## XML_TAG_VTM_CURRENCYCODE\[1/2\] <a href="#gabcde01c75efe189a50b25acb24eb5e97" id="gabcde01c75efe189a50b25acb24eb5e97"></a> {#xml_tag_vtm_currencycode-12}

<p>#define XML_TAG_VTM_CURRENCYCODE   \"CurrencyCode_5F2A\"</p>

Currency code used in \"EMV_VirtualTermConfig.xml\".

## XML_TAG_VTM_CURRENCYCODE\[2/2\] <a href="#gabcde01c75efe189a50b25acb24eb5e97" id="gabcde01c75efe189a50b25acb24eb5e97"></a> {#xml_tag_vtm_currencycode-22}

<p>#define XML_TAG_VTM_CURRENCYCODE   \"CurrencyCode_5F2A\"</p>

Currency code used in \"EMV_VirtualTermConfig.xml\".

## XML_TAG_VTM_ENTRY\[1/2\] <a href="#ga808a59de04c2005f55356e0b5105ec85" id="ga808a59de04c2005f55356e0b5105ec85"></a> {#xml_tag_vtm_entry-12}

<p>#define XML_TAG_VTM_ENTRY   \"VTMEntry\"</p>

One entry in \"EMV_VirtualTermConfig.xml\".

## XML_TAG_VTM_ENTRY\[2/2\] <a href="#ga808a59de04c2005f55356e0b5105ec85" id="ga808a59de04c2005f55356e0b5105ec85"></a> {#xml_tag_vtm_entry-22}

<p>#define XML_TAG_VTM_ENTRY   \"VTMEntry\"</p>

One entry in \"EMV_VirtualTermConfig.xml\".

## XML_TAG_VTM_TERMINAL\[1/2\] <a href="#ga0655877ecf7e60793e932890a41cbf6d" id="ga0655877ecf7e60793e932890a41cbf6d"></a> {#xml_tag_vtm_terminal-12}

<p>#define XML_TAG_VTM_TERMINAL   \"Terminal\"</p>

Virtual terminal index used in \"EMV_VirtualTermConfig.xml\".

## XML_TAG_VTM_TERMINAL\[2/2\] <a href="#ga0655877ecf7e60793e932890a41cbf6d" id="ga0655877ecf7e60793e932890a41cbf6d"></a> {#xml_tag_vtm_terminal-22}

<p>#define XML_TAG_VTM_TERMINAL   \"Terminal\"</p>

Virtual terminal index used in \"EMV_VirtualTermConfig.xml\".

## XML_TAG_VTM_TRANSTYPE\[1/2\] <a href="#ga13f8bb9237d759244863c3f450d1f6e6" id="ga13f8bb9237d759244863c3f450d1f6e6"></a> {#xml_tag_vtm_transtype-12}

<p>#define XML_TAG_VTM_TRANSTYPE   \"TransType_9C\"</p>

Transaction type used in \"EMV_VirtualTermConfig.xml\".

## XML_TAG_VTM_TRANSTYPE\[2/2\] <a href="#ga13f8bb9237d759244863c3f450d1f6e6" id="ga13f8bb9237d759244863c3f450d1f6e6"></a> {#xml_tag_vtm_transtype-22}

<p>#define XML_TAG_VTM_TRANSTYPE   \"TransType_9C\"</p>

Transaction type used in \"EMV_VirtualTermConfig.xml\".

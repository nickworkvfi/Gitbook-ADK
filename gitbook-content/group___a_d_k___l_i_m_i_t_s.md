---
hidden: true
title: Limitations and sizesGeneral topics
---

[Macros](#define-members)

Collaboration diagram for Limitations and sizes:

![](group___a_d_k___l_i_m_i_t_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_MAX_LANG](#ga574c13b5401ae9f6875d2becafc73337)   20 |
|   | maximum number of languages to be configured [More\...](#ga574c13b5401ae9f6875d2becafc73337)<br/> |
| #define  | [EMV_ADK_DEFAULT_AIDSUPP](#ga451b76d7c9854647febe4f89c53fa57a)   20 |
|   | default maximum number of supported AIDs [More\...](#ga451b76d7c9854647febe4f89c53fa57a)<br/> |
| #define  | [EMV_ADK_MAX_AIDSUPP](#ga5049b813ed8f9aa33e607835e30a176c)   [EMV_ADK_DEFAULT_AIDSUPP](#ga451b76d7c9854647febe4f89c53fa57a) |
| #define  | [EMV_ADK_LIMIT_AIDSUPP](#ga1de1c8d68d575ee04c4f271f4b075e99)   255 |
|   | maximum number of supported AIDs for extended AID support [More\...](#ga1de1c8d68d575ee04c4f271f4b075e99)<br/> |
| #define  | [EMV_ADK_MAX_LG_DDOL](#gaa08617397087858bb1ca9c3a7830bb12)   80 |
|   | max. length of DDOL (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a27e03203f154c52be3abc2db49842a93">EMV_CT_APPLIDATA_STRUCT::Default_DDOL</a>) [More\...](#gaa08617397087858bb1ca9c3a7830bb12)<br/> |
| #define  | [EMV_ADK_MAX_LG_TDOL](#ga35fcdb8dd0661988e68a90ced11a8db6)   80 |
|   | max. length of TDOL (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9741f7d86efbb9dc20f687b6cad55f4c">EMV_CT_APPLIDATA_STRUCT::Default_TDOL</a>) [More\...](#ga35fcdb8dd0661988e68a90ced11a8db6)<br/> |
| #define  | [EMV_ADK_MAX_PRIO_APP](#gab820d19be0790eb2e15c5388ba3903fc)   5 |
|   | max. number of priority applications (see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aafdd60748ec764b0398657d3a87e0d19">EMV_CT_APPLIDATA_STRUCT::xAIDPrio</a>) [More\...](#gab820d19be0790eb2e15c5388ba3903fc)<br/> |
| #define  | [EMV_ADK_MAX_DOM_CHP](#gaa286e1585fdb397b7731314abb2fe690)   5 |
|   | max. number of domestic chip applications (see <a href="group___a_d_k___t_r_x___e_x_e_c.md#a383caf30fab1895ac0b58becb208a758">EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip</a>) [More\...](#gaa286e1585fdb397b7731314abb2fe690)<br/> |
| #define  | [EMV_ADK_MAX_FB_MSR](#ga32af480e45f8fd565ef45241cda5864c)   20 |
|   | max. number of assigned magstripe fallback applications per transaction (see <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0ce15f8ce270bd4f01e39c8c8dd5953b">EMV_CT_APPS_SELECT_STRUCT::xFallback_MS</a>) . Candidates are every credit card, Maestro and maybe local applications. [More\...](#ga32af480e45f8fd565ef45241cda5864c)<br/> |
| #define  | [EMV_ADK_MAX_CHP_TO_MSR](#ga8985e58be6c1a0568bcf5dc777ff2e37)   3 |
|   | max. number of assigned magstripe fallback applications per chip application (see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afe1309924816c148ef5665647e4b3f53">EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs</a>) [More\...](#ga8985e58be6c1a0568bcf5dc777ff2e37)<br/> |
| #define  | [EMV_ADK_IAD_MAX_LEN](#gafe3c054e399fe8a12f67d8201cc67db5)   16 |
|   | max. length of issuer authentic. data (EMVCo tag 91)<br/>because <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9c0d8eae37200d205013e0a17f2d2ff1">EMV_CT_HOST_STRUCT::AuthData</a> includes \"91xx\" it has a maximum length of EMV_ADK_IAD_MAX_LEN + 2 [More\...](#gafe3c054e399fe8a12f67d8201cc67db5)<br/> |
| #define  | [EMV_ADK_SCRIPT_RESULT_LEN](#gaf9bd4a2a5e99c9e5564c55204280a9f8)   5 |
|   | Max. length of issuer script result data (output of <a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline()</a>, see also <a href="group___a_d_k___t_r_x___e_x_e_c.md#a6257b8c91140f05c572607aff48a301e">EMV_CT_TRANSRES_STRUCT::scriptresults</a>) (not used for contactless) [More\...](#gaf9bd4a2a5e99c9e5564c55204280a9f8)<br/> |
| #define  | [EMV_ADK_SCRIPT_RESULT_MAX](#ga1ec5682c80c6a268dd18a054c231c5e7)   10 |
|   | L2 kernel: Max. number of issuer script results (output of <a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline()</a>, see also <a href="group___a_d_k___t_r_x___e_x_e_c.md#a6257b8c91140f05c572607aff48a301e">EMV_CT_TRANSRES_STRUCT::scriptresults</a>)<br/>Used for [EMV_ADK_SCRIPT_RESULT_MAX](#ga1ec5682c80c6a268dd18a054c231c5e7 "L2 kernel: Max. number of issuer script results (output of EMV_CT_ContinueOnline(),...") (not used for contactless) [More\...](#ga1ec5682c80c6a268dd18a054c231c5e7)<br/> |
| #define  | [EMV_ADK_CHECKSUM_ASCII_SIZE](#ga9b9c110ea297c64e70f6847acd351032)   33 |
|   | EMV L2 kernel: Size of EMVCo checksum in ASCII representation (incl. zero termination)<br/>Used for <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae6aab5905479e56d87c421779d57b603">EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO</a>. [More\...](#ga9b9c110ea297c64e70f6847acd351032)<br/> |
| #define  | [EMV_ADK_VERSION_ASCII_SIZE](#ga94c28d1831d5df59ec7e7e44b7f39528)   128 |
|   | Size of EMVCo Kernel version, Framework version and L1 Driver version information in ASCII representation (see <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a808cb5cde9cf6ac837ef81977f4a751c">EMV_CT_TERMDATA_STRUCT::KernelVersion</a>, EMV_CT_TERMDATA_STRUCT::FrameworkVersiona and <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CT_TERMDATA_STRUCT::L1DriverVersion</a>) [More\...](#ga94c28d1831d5df59ec7e7e44b7f39528)<br/> |
| #define  | [EMV_ADK_CHECKSUM_SIZE](#ga32efd5748824ecdc236506ff0b7d5a38)   4 |
|   | L2 kernel: Size of EMVCo checksum in bytes<br/>Used internally. [More\...](#ga32efd5748824ecdc236506ff0b7d5a38)<br/> |
| #define  | [EMV_ADK_CHECKSUM_SIZE_NEW](#gad1f3a82ce1270c4cdef0688274514219)   16 |
|   | L2 kernel: Size of new EMVCo checksum in bytes<br/>Used internally. [More\...](#gad1f3a82ce1270c4cdef0688274514219)<br/> |
| #define  | [EMV_ADK_BCD_AMOUNT_LEN](#gad5cac2b5abf312efe65c8dba287b7e33)   6 |
| #define  | [EMV_ADK_BIN_AMOUNT_LEN](#ga738e39b250b1635be85fbbd117df6c47)   4 |
| #define  | [EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN](#gac3556a77138a4d38cd8f4adc3ed5e9dc)   2 |
| #define  | [EMV_ADK_BCD_DATE_OR_TIME_LEN](#ga6e8567321ccb6b0e0ead17f9e227ef24)   3 |
| #define  | [EMV_ADK_MAX_CVM](#ga7d096e27feca56f2d8d04c0c7a24dbe9)   10 |
|   | Number of CVM given in parameter `pucCvmList` of <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga3ff52ae040bd291d348e505e057f02ef">EMV_CT_CALLBACK_FnT()</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>, <a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>). Also used in <a href="group___a_d_k___t_r_x___e_x_e_c.md#a43475fc383c8af04a791babac2e7d139">EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List</a>. Length in bytes: [EMV_ADK_MAX_CVM_LIST_LEN](#ga46764397b0b65ae83c015e4d1f570cf6 "Length in bytes of parameter pucCvmList of EMV_CT_CALLBACK_FnT() (TAG_BF05_CBK_DOM_APPS and TAG_BF07_...") (not used for contactless) [More\...](#ga7d096e27feca56f2d8d04c0c7a24dbe9)<br/> |
| #define  | [EMV_ADK_MAX_CVM_LIST_LEN](#ga46764397b0b65ae83c015e4d1f570cf6)   (8 + [EMV_ADK_MAX_CVM](#ga7d096e27feca56f2d8d04c0c7a24dbe9) \* 2) |
|   | Length in bytes of parameter `pucCvmList` of <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga3ff52ae040bd291d348e505e057f02ef">EMV_CT_CALLBACK_FnT()</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#afd0adcc12331559863dd65d8f7558645">TAG_BF05_CBK_DOM_APPS</a> and <a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>). Also used in <a href="group___a_d_k___t_r_x___e_x_e_c.md#a43475fc383c8af04a791babac2e7d139">EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List</a>. Number of included CVMs: [EMV_ADK_MAX_CVM](#ga7d096e27feca56f2d8d04c0c7a24dbe9 "Number of CVM given in parameter pucCvmList of EMV_CT_CALLBACK_FnT() (TAG_BF06_CBK_LOCAL_CHECKS,...") (not used for contactless) [More\...](#ga46764397b0b65ae83c015e4d1f570cf6)<br/> |
| #define  | [EMV_ADK_MAX_PAN_LANGUAGES](#ga0b43710811c6f8b8aa7110abdf771269)   6 |
|   | Maximum number of languages to give back in `pucReducedLanguageList` of <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga3ff52ae040bd291d348e505e057f02ef">EMV_CT_CALLBACK_FnT()</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#afd0adcc12331559863dd65d8f7558645">TAG_BF05_CBK_DOM_APPS</a>) (Not used for contactless) [More\...](#ga0b43710811c6f8b8aa7110abdf771269)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_BCD_AMOUNT_LEN <a href="#gad5cac2b5abf312efe65c8dba287b7e33" id="gad5cac2b5abf312efe65c8dba287b7e33"></a>

<p>#define EMV_ADK_BCD_AMOUNT_LEN   6</p>

## EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN <a href="#gac3556a77138a4d38cd8f4adc3ed5e9dc" id="gac3556a77138a4d38cd8f4adc3ed5e9dc"></a>

<p>#define EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN   2</p>

## EMV_ADK_BCD_DATE_OR_TIME_LEN <a href="#ga6e8567321ccb6b0e0ead17f9e227ef24" id="ga6e8567321ccb6b0e0ead17f9e227ef24"></a>

<p>#define EMV_ADK_BCD_DATE_OR_TIME_LEN   3</p>

## EMV_ADK_BIN_AMOUNT_LEN <a href="#ga738e39b250b1635be85fbbd117df6c47" id="ga738e39b250b1635be85fbbd117df6c47"></a>

<p>#define EMV_ADK_BIN_AMOUNT_LEN   4</p>

## EMV_ADK_CHECKSUM_ASCII_SIZE <a href="#ga9b9c110ea297c64e70f6847acd351032" id="ga9b9c110ea297c64e70f6847acd351032"></a>

<p>#define EMV_ADK_CHECKSUM_ASCII_SIZE   33</p>

EMV L2 kernel: Size of EMVCo checksum in ASCII representation (incl. zero termination)
Used for <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae6aab5905479e56d87c421779d57b603">EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO</a>.

## EMV_ADK_CHECKSUM_SIZE <a href="#ga32efd5748824ecdc236506ff0b7d5a38" id="ga32efd5748824ecdc236506ff0b7d5a38"></a>

<p>#define EMV_ADK_CHECKSUM_SIZE   4</p>

L2 kernel: Size of EMVCo checksum in bytes
Used internally.

## EMV_ADK_CHECKSUM_SIZE_NEW <a href="#gad1f3a82ce1270c4cdef0688274514219" id="gad1f3a82ce1270c4cdef0688274514219"></a>

<p>#define EMV_ADK_CHECKSUM_SIZE_NEW   16</p>

L2 kernel: Size of new EMVCo checksum in bytes
Used internally.

## EMV_ADK_DEFAULT_AIDSUPP <a href="#ga451b76d7c9854647febe4f89c53fa57a" id="ga451b76d7c9854647febe4f89c53fa57a"></a>

<p>#define EMV_ADK_DEFAULT_AIDSUPP   20</p>

default maximum number of supported AIDs

## EMV_ADK_IAD_MAX_LEN <a href="#gafe3c054e399fe8a12f67d8201cc67db5" id="gafe3c054e399fe8a12f67d8201cc67db5"></a>

<p>#define EMV_ADK_IAD_MAX_LEN   16</p>

max. length of issuer authentic. data (EMVCo tag 91)
because <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9c0d8eae37200d205013e0a17f2d2ff1">EMV_CT_HOST_STRUCT::AuthData</a> includes \"91xx\" it has a maximum length of EMV_ADK_IAD_MAX_LEN + 2

## EMV_ADK_LIMIT_AIDSUPP <a href="#ga1de1c8d68d575ee04c4f271f4b075e99" id="ga1de1c8d68d575ee04c4f271f4b075e99"></a>

<p>#define EMV_ADK_LIMIT_AIDSUPP   255</p>

maximum number of supported AIDs for extended AID support

## EMV_ADK_MAX_AIDSUPP <a href="#ga5049b813ed8f9aa33e607835e30a176c" id="ga5049b813ed8f9aa33e607835e30a176c"></a>

<p>#define EMV_ADK_MAX_AIDSUPP   [EMV_ADK_DEFAULT_AIDSUPP](#ga451b76d7c9854647febe4f89c53fa57a)</p>

**<a href="deprecated.md#_deprecated000152">Deprecated:</a>** old define for default maximum number of supported AIDs, don\'t use anymore, use [EMV_ADK_DEFAULT_AIDSUPP](#ga451b76d7c9854647febe4f89c53fa57a "default maximum number of supported AIDs") instead

## EMV_ADK_MAX_CHP_TO_MSR <a href="#ga8985e58be6c1a0568bcf5dc777ff2e37" id="ga8985e58be6c1a0568bcf5dc777ff2e37"></a>

<p>#define EMV_ADK_MAX_CHP_TO_MSR   3</p>

max. number of assigned magstripe fallback applications per chip application (see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afe1309924816c148ef5665647e4b3f53">EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs</a>)

## EMV_ADK_MAX_CVM <a href="#ga7d096e27feca56f2d8d04c0c7a24dbe9" id="ga7d096e27feca56f2d8d04c0c7a24dbe9"></a>

<p>#define EMV_ADK_MAX_CVM   10</p>

Number of CVM given in parameter `pucCvmList` of <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga3ff52ae040bd291d348e505e057f02ef">EMV_CT_CALLBACK_FnT()</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#ac82fa7e4064512e71e63fd647b817d97">TAG_BF06_CBK_LOCAL_CHECKS</a>, <a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>). Also used in <a href="group___a_d_k___t_r_x___e_x_e_c.md#a43475fc383c8af04a791babac2e7d139">EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List</a>. Length in bytes: [EMV_ADK_MAX_CVM_LIST_LEN](#ga46764397b0b65ae83c015e4d1f570cf6 "Length in bytes of parameter pucCvmList of EMV_CT_CALLBACK_FnT() (TAG_BF05_CBK_DOM_APPS and TAG_BF07_...") (not used for contactless)

## EMV_ADK_MAX_CVM_LIST_LEN <a href="#ga46764397b0b65ae83c015e4d1f570cf6" id="ga46764397b0b65ae83c015e4d1f570cf6"></a>

<p>#define EMV_ADK_MAX_CVM_LIST_LEN   (8 + [EMV_ADK_MAX_CVM](#ga7d096e27feca56f2d8d04c0c7a24dbe9) \* 2)</p>

Length in bytes of parameter `pucCvmList` of <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga3ff52ae040bd291d348e505e057f02ef">EMV_CT_CALLBACK_FnT()</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#afd0adcc12331559863dd65d8f7558645">TAG_BF05_CBK_DOM_APPS</a> and <a href="adk__emv__contactless__programmers__guide_8dox.md#af335a870e9d2f299c848f76b843907f7">TAG_BF07_CBK_DCC</a>). Also used in <a href="group___a_d_k___t_r_x___e_x_e_c.md#a43475fc383c8af04a791babac2e7d139">EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List</a>. Number of included CVMs: [EMV_ADK_MAX_CVM](#ga7d096e27feca56f2d8d04c0c7a24dbe9 "Number of CVM given in parameter pucCvmList of EMV_CT_CALLBACK_FnT() (TAG_BF06_CBK_LOCAL_CHECKS,...") (not used for contactless)

## EMV_ADK_MAX_DOM_CHP <a href="#gaa286e1585fdb397b7731314abb2fe690" id="gaa286e1585fdb397b7731314abb2fe690"></a>

<p>#define EMV_ADK_MAX_DOM_CHP   5</p>

max. number of domestic chip applications (see <a href="group___a_d_k___t_r_x___e_x_e_c.md#a383caf30fab1895ac0b58becb208a758">EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip</a>)

## EMV_ADK_MAX_FB_MSR <a href="#ga32af480e45f8fd565ef45241cda5864c" id="ga32af480e45f8fd565ef45241cda5864c"></a>

<p>#define EMV_ADK_MAX_FB_MSR   20</p>

max. number of assigned magstripe fallback applications per transaction (see <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0ce15f8ce270bd4f01e39c8c8dd5953b">EMV_CT_APPS_SELECT_STRUCT::xFallback_MS</a>) . Candidates are every credit card, Maestro and maybe local applications.

## EMV_ADK_MAX_LANG <a href="#ga574c13b5401ae9f6875d2becafc73337" id="ga574c13b5401ae9f6875d2becafc73337"></a>

<p>#define EMV_ADK_MAX_LANG   20</p>

maximum number of languages to be configured

## EMV_ADK_MAX_LG_DDOL <a href="#gaa08617397087858bb1ca9c3a7830bb12" id="gaa08617397087858bb1ca9c3a7830bb12"></a>

<p>#define EMV_ADK_MAX_LG_DDOL   80</p>

max. length of DDOL (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a27e03203f154c52be3abc2db49842a93">EMV_CT_APPLIDATA_STRUCT::Default_DDOL</a>)

## EMV_ADK_MAX_LG_TDOL <a href="#ga35fcdb8dd0661988e68a90ced11a8db6" id="ga35fcdb8dd0661988e68a90ced11a8db6"></a>

<p>#define EMV_ADK_MAX_LG_TDOL   80</p>

max. length of TDOL (<a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a9741f7d86efbb9dc20f687b6cad55f4c">EMV_CT_APPLIDATA_STRUCT::Default_TDOL</a>)

## EMV_ADK_MAX_PAN_LANGUAGES <a href="#ga0b43710811c6f8b8aa7110abdf771269" id="ga0b43710811c6f8b8aa7110abdf771269"></a>

<p>#define EMV_ADK_MAX_PAN_LANGUAGES   6</p>

Maximum number of languages to give back in `pucReducedLanguageList` of <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga3ff52ae040bd291d348e505e057f02ef">EMV_CT_CALLBACK_FnT()</a> (<a href="adk__emv__contactless__programmers__guide_8dox.md#afd0adcc12331559863dd65d8f7558645">TAG_BF05_CBK_DOM_APPS</a>) (Not used for contactless)

## EMV_ADK_MAX_PRIO_APP <a href="#gab820d19be0790eb2e15c5388ba3903fc" id="gab820d19be0790eb2e15c5388ba3903fc"></a>

<p>#define EMV_ADK_MAX_PRIO_APP   5</p>

max. number of priority applications (see <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aafdd60748ec764b0398657d3a87e0d19">EMV_CT_APPLIDATA_STRUCT::xAIDPrio</a>)

## EMV_ADK_SCRIPT_RESULT_LEN <a href="#gaf9bd4a2a5e99c9e5564c55204280a9f8" id="gaf9bd4a2a5e99c9e5564c55204280a9f8"></a>

<p>#define EMV_ADK_SCRIPT_RESULT_LEN   5</p>

Max. length of issuer script result data (output of <a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline()</a>, see also <a href="group___a_d_k___t_r_x___e_x_e_c.md#a6257b8c91140f05c572607aff48a301e">EMV_CT_TRANSRES_STRUCT::scriptresults</a>) (not used for contactless)

## EMV_ADK_SCRIPT_RESULT_MAX <a href="#ga1ec5682c80c6a268dd18a054c231c5e7" id="ga1ec5682c80c6a268dd18a054c231c5e7"></a>

<p>#define EMV_ADK_SCRIPT_RESULT_MAX   10</p>

L2 kernel: Max. number of issuer script results (output of <a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline()</a>, see also <a href="group___a_d_k___t_r_x___e_x_e_c.md#a6257b8c91140f05c572607aff48a301e">EMV_CT_TRANSRES_STRUCT::scriptresults</a>)
Used for [EMV_ADK_SCRIPT_RESULT_MAX](#ga1ec5682c80c6a268dd18a054c231c5e7 "L2 kernel: Max. number of issuer script results (output of EMV_CT_ContinueOnline(),...") (not used for contactless)

## EMV_ADK_VERSION_ASCII_SIZE <a href="#ga94c28d1831d5df59ec7e7e44b7f39528" id="ga94c28d1831d5df59ec7e7e44b7f39528"></a>

<p>#define EMV_ADK_VERSION_ASCII_SIZE   128</p>

Size of EMVCo Kernel version, Framework version and L1 Driver version information in ASCII representation (see <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a808cb5cde9cf6ac837ef81977f4a751c">EMV_CT_TERMDATA_STRUCT::KernelVersion</a>, EMV_CT_TERMDATA_STRUCT::FrameworkVersiona and <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a534424c16f043292e2b4bf000b07ead3">EMV_CT_TERMDATA_STRUCT::L1DriverVersion</a>)

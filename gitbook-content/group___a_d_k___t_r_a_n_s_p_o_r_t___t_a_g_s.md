---
hidden: true
title: Tags for transport layerGeneral topics » Serialization
---

[Macros](#define-members)

Used for enclosing TLV container at transport. That\'s necessary in case EMV ADK and calling application are placed in separated entities. Transport layer (e.g. PINPad ISO2) must have indicators to determine whether data is meant for EMV ADK or not. [More\...](#details)

Collaboration diagram for Tags for transport layer:

![](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f)   0x39 |
|   | Class for requests to EMV ADK. [More\...](#ga7ca54f43b657f0cc8b1ad98ecf60491f)<br/> |
| #define  | [CLA_EMV_ALT](#ga43723b2d17804e3934b43e370aa96e31)   0x40 |
|   | Alternative class for requests to EMV ADK. [More\...](#ga43723b2d17804e3934b43e370aa96e31)<br/> |
| #define  | [CLA_CRD](#ga5bba87bf3fef52692566815cace38934)   0x41 |
|   | Class for ICC functions. [More\...](#ga5bba87bf3fef52692566815cace38934)<br/> |
| #define  | [CLA_CRD_ALT](#gae25dbca0f06ecd523fc9e26216b3fae1)   0x42 |
|   | Alternative class for ICC functions. [More\...](#gae25dbca0f06ecd523fc9e26216b3fae1)<br/> |
| #define  | [CLA_LED](#gad1c3412f36620771889c9691889f80b1)   0x43 |
|   | Class for LED functions. [More\...](#gad1c3412f36620771889c9691889f80b1)<br/> |
| #define  | [EMV_CTLS_CLA_CBCK_REQ](#ga3824324397d1922e125aa46661a6b2ee)   0x91 |
|   | Class for callback requests from EMV ADK to calling application (see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md">Constructed tags for callback functions</a>) [More\...](#ga3824324397d1922e125aa46661a6b2ee)<br/> |
| #define  | [EMV_CTLS_CLA_CBCK_RESP](#ga01497e2819acf0fcac29d6d3e3a46956)   0x92 |
|   | Class for callback responses (see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md">Constructed tags for callback functions</a>) [More\...](#ga01497e2819acf0fcac29d6d3e3a46956)<br/> |
| #define  | [EMV_CTLS_CLA_RET_OK](#ga4cd968e98897402a9505b20d07a3d29f)   0x90 |
|   | Class for Return with no error. [More\...](#ga4cd968e98897402a9505b20d07a3d29f)<br/> |
| #define  | [EMV_CTLS_CLA_RET_ERROR](#gad98eb5908db925500050141833b9dc91)   0x94 |
|   | Class for Return with error (function not available / parameter error, \...) [More\...](#gad98eb5908db925500050141833b9dc91)<br/> |
| #define  | [P2_SET](#gaf0ba91f2a3df6af70463601679417fd4)   0x00 |
|   | Uaed for config command, e.g. <a href="group___f_u_n_c___c_o_n_f.md#gac5ce9781bba083028538f9e77c2d58f3">EMV_CTLS_SetTermData</a>. [More\...](#gaf0ba91f2a3df6af70463601679417fd4)<br/> |
| #define  | [P2_GET](#ga2a2911f7e67d626c4c5f4ec1bd69dff6)   0x01 |
|   | Uaed for config command, e.g. <a href="group___f_u_n_c___c_o_n_f.md#gad690d9dec1818d4ffc7db35c12c3b610">EMV_CTLS_GetTermData</a>. [More\...](#ga2a2911f7e67d626c4c5f4ec1bd69dff6)<br/> |
| #define  | [P2_CLONE](#ga3171d7e1bf6ef77813a8fd2ac595961b)   0x02 |
|   | Used reading configuration data that shall be transfered to another system (internal use, serialised API only) [More\...](#ga3171d7e1bf6ef77813a8fd2ac595961b)<br/> |
| #define  | [INS_CBCK_FCT](#gace07d6cfd34efe7b0e594324c4e1b303)   0x01 |
|   | Instruction byte used for callback functions, used with [EMV_CTLS_CLA_CBCK_REQ](#ga3824324397d1922e125aa46661a6b2ee "Class for callback requests from EMV ADK to calling application (see Constructed tags for callback fu..."). [More\...](#gace07d6cfd34efe7b0e594324c4e1b303)<br/> |
| #define  | [INS_CBCK_CRD](#gac530d3a642a780e6430f2a9fd1f57dce)   0x02 |
|   | Instruction byte used for callbacks to cardreader, used with [EMV_CTLS_CLA_CBCK_REQ](#ga3824324397d1922e125aa46661a6b2ee "Class for callback requests from EMV ADK to calling application (see Constructed tags for callback fu..."). [More\...](#gac530d3a642a780e6430f2a9fd1f57dce)<br/> |
| #define  | [INS_CBCK_TRACE](#gacf7e3a366c458c27e002776330e84cbb)   0xFF |
|   | Instruction byte used for trace output, used with [EMV_CTLS_CLA_CBCK_REQ](#ga3824324397d1922e125aa46661a6b2ee "Class for callback requests from EMV ADK to calling application (see Constructed tags for callback fu..."). Also used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.") in header field passed to EMV_CTLS_IF_BERTLV for client traces. [More\...](#gacf7e3a366c458c27e002776330e84cbb)<br/> |
| #define  | [INS_INIT](#gaffb63d3b2d98277221a603a0a6c48fff)   0x00 |
|   | Instruction byte for <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#gaffb63d3b2d98277221a603a0a6c48fff)<br/> |
| #define  | [INS_TERM_CFG](#gaf2a42e0a1c524294cde7ae3ed4c9c45f)   0x01 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gac5ce9781bba083028538f9e77c2d58f3">EMV_CTLS_SetTermData</a>, <a href="group___f_u_n_c___c_o_n_f.md#gad690d9dec1818d4ffc7db35c12c3b610">EMV_CTLS_GetTermData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#gaf2a42e0a1c524294cde7ae3ed4c9c45f)<br/> |
| #define  | [INS_APPLI_CFG](#ga6795399515af157c4fb02c2141290935)   0x02 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gadc7f2eba5fd3e941d0ddb65a936a0776">EMV_CTLS_SetAppliDataSchemeSpecific</a>, <a href="group___f_u_n_c___c_o_n_f.md#gae76efd9464ef90029a0dddb8d845d4d8">EMV_CTLS_GetAppliDataSchemeSpecific</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga6795399515af157c4fb02c2141290935)<br/> |
| #define  | [INS_CAPKEY_CFG](#ga6f9fe9144b546c050a5cfdd516c26b01)   0x03 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga3e03f6dd283e873cbcd6b8e4bb78f09a">EMV_CTLS_StoreCAPKey</a>, <a href="group___f_u_n_c___c_o_n_f.md#gacaf6e34b74f3c446ca7f877223cf4724">EMV_CTLS_ReadCAPKeys</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga6f9fe9144b546c050a5cfdd516c26b01)<br/> |
| #define  | [INS_APPLY_CFG](#ga523b4877cb4ce370ff00f343a16cc021)   0x04 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gaa5352e4331b8fd16eaa02b1bbb7027c2">EMV_CTLS_ApplyConfiguration</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga523b4877cb4ce370ff00f343a16cc021)<br/> |
| #define  | [INS_GET_VER](#ga45cf078d40876821a8c2d6c997b117e7)   0x05 |
|   | Instruction byte for <a href="group___f_u_n_c___i_n_i_t.md#ga986ef3db0e4168cb9dc3868b06cea0d5">EMV_CTLS_FRAMEWORK_GetVersion</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga45cf078d40876821a8c2d6c997b117e7)<br/> |
| #define  | [INS_VIRT_CFG](#ga12fb1f55ae937a04c8385a5c6974ac1b)   0x06 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga6fbd51a31dd89f11d137adab3ed4d733">EMV_CTLS_MapVirtualTerminal</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga12fb1f55ae937a04c8385a5c6974ac1b)<br/> |
| #define  | [INS_SELECT](#gaef01811fe4398a2410cb8a841f623bd3)   0x10 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#gaef01811fe4398a2410cb8a841f623bd3)<br/> |
| #define  | [INS_TRANSAC](#ga153f7430e35ff29a88b352f6bc3f2e93)   0x11 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga153f7430e35ff29a88b352f6bc3f2e93)<br/> |
| #define  | [INS_ONLINE](#ga6deba1f9808c46b51e95b93128f80233)   0x12 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga297b6843994afaa2e7a6f5e0e4a8af3e">EMV_CTLS_ContinueOnline</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga6deba1f9808c46b51e95b93128f80233)<br/> |
| #define  | [INS_RFU](#ga67230d89e515a3b2b7fcb85008a568f5)   0x13 |
|   | Instruction byte used in CT mode only. [More\...](#ga67230d89e515a3b2b7fcb85008a568f5)<br/> |
| #define  | [INS_FETCH_TAG](#ga108262bd90a9b17cfd6e0c3c15094c01)   0x14 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga108262bd90a9b17cfd6e0c3c15094c01)<br/> |
| #define  | [INS_END_TRX](#ga2fae6a4de2eb26c2c5d30d475ccc19c5)   0x15 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gaa7aed3c7f0c3ac0f26cc46efff422dd9">EMV_CTLS_EndTransaction</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga2fae6a4de2eb26c2c5d30d475ccc19c5)<br/> |
| #define  | [INS_CND_DATA](#ga365fd99d486ce39e53c107e46de14ee5)   0x16 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gab1600b67271771658ce682b9cfeb660e">EMV_CTLS_GetCandidateData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga365fd99d486ce39e53c107e46de14ee5)<br/> |
| #define  | [INS_FETCH_DOL](#gac3d226ab26f6649ab60a7412dde79bef)   0x18 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga41af1fb74c44d7e154ee5ee774ec9460">EMV_CTLS_fetchTxnDOL</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#gac3d226ab26f6649ab60a7412dde79bef)<br/> |
| #define  | [INS_BREAK](#ga319c151884f9cdcd12fb3c7e3ec244bd)   0x20 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga2b4820be53959b56fb7f672bd54f4e63">EMV_CTLS_Break</a>, used wih [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga319c151884f9cdcd12fb3c7e3ec244bd)<br/> |
| #define  | [INS_ICC_RESET](#ga93317ba7df100e161844932dbd20698f)   0x02 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#ga93317ba7df100e161844932dbd20698f)<br/> |
| #define  | [INS_ICC_ISO](#gabca70fa6b551edc49bd98ac79f50bfbf)   0x03 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gafbcdb0278723b9629eb7c12532119e2d">EMV_CTLS_SmartISO</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gabca70fa6b551edc49bd98ac79f50bfbf)<br/> |
| #define  | [INS_ICC_OFF](#gad4ec43d9380ec71d8c396270b5d34bc2)   0x04 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gadd0716253a50b2791ac4e2a1627d1e8d">EMV_CTLS_SmartPowerOff</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gad4ec43d9380ec71d8c396270b5d34bc2)<br/> |
| #define  | [INS_ICC_TRANS](#gaa274137086fb28a0e9697deb17555113)   0x07 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga5290215f61c323842d712a8ad130c758">EMV_CTLS_TransparentCommand</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gaa274137086fb28a0e9697deb17555113)<br/> |
| #define  | [INS_ICC_SEND](#ga25d2323eddf0061e3eadabbbfe766638)   0x08 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga91409ddd42bd277e1be3157f6c3bd445">EMV_CTLS_TransparentSend</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#ga25d2323eddf0061e3eadabbbfe766638)<br/> |
| #define  | [INS_ICC_RECEIVE](#gab3ddc4213a9aaf815a80fcf39dffa699)   0x09 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga13fd81242d6f2012ffade242f069a7f0">EMV_CTLS_TransparentReceive</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gab3ddc4213a9aaf815a80fcf39dffa699)<br/> |
| #define  | [INS_ICC_REMOVAL](#gab7f57823771b2c97055b030f09228548)   0x0A |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gaf9ca19bc9d77bfe1dfec28c030b18059">EMV_CTLS_CardRemoval</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gab7f57823771b2c97055b030f09228548)<br/> |
| #define  | [INS_LED_SWITCH](#ga0c455b1cdcb1ad1513e54c823f1d07a8)   0x03 |
|   | Instruction byte for <a href="group___a_d_k___l_e_d.md#gabd80a7d1c3dbc5604604b02c20620f51">EMV_CTLS_LED</a>, used with [CLA_LED](#gad1c3412f36620771889c9691889f80b1 "Class for LED functions."). [More\...](#ga0c455b1cdcb1ad1513e54c823f1d07a8)<br/> |
| #define  | [INS_LED_MODE](#ga62d51f45ace79bf1afa60498d84b17ad)   0x04 |
|   | Instruction byte for <a href="group___a_d_k___l_e_d.md#ga62eb0e6232dad59e94b75205493fa06d">EMV_CTLS_LED_SetMode</a>, used with [CLA_LED](#gad1c3412f36620771889c9691889f80b1 "Class for LED functions."). [More\...](#ga62d51f45ace79bf1afa60498d84b17ad)<br/> |
| #define  | [INS_LED_CONF_DESIGN](#gac4b89905db7b0371dba0ec2a42f73071)   0x05 |
|   | Instruction byte for <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign</a>, used with [CLA_LED](#gad1c3412f36620771889c9691889f80b1 "Class for LED functions."). [More\...](#gac4b89905db7b0371dba0ec2a42f73071)<br/> |
| #define  | [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f)   0x39 |
|   | Class for requests to EMV ADK. [More\...](#ga7ca54f43b657f0cc8b1ad98ecf60491f)<br/> |
| #define  | [CLA_CRD](#ga5bba87bf3fef52692566815cace38934)   0x41 |
|   | Class for ICC functions. [More\...](#ga5bba87bf3fef52692566815cace38934)<br/> |
| #define  | [CLA_LED](#gad1c3412f36620771889c9691889f80b1)   0x43 |
|   | Class for LED functions. [More\...](#gad1c3412f36620771889c9691889f80b1)<br/> |
| #define  | [EMV_CT_CLA_CBCK_REQ](#ga975cd4206f0b6b238b340178ad792c78)   0x91 |
|   | Class for callback requests from EMV ADK to calling application (see <a href="group___t_l_v___c_a_l_l_b_c_k.md">Callback functions</a>) [More\...](#ga975cd4206f0b6b238b340178ad792c78)<br/> |
| #define  | [EMV_CT_CLA_CBCK_RESP](#ga0fe23ca596d2bf6ff3d483c6eb6a63ea)   0x92 |
|   | Class for callback responses (see <a href="group___t_l_v___c_a_l_l_b_c_k.md">Callback functions</a>) [More\...](#ga0fe23ca596d2bf6ff3d483c6eb6a63ea)<br/> |
| #define  | [P2_SET](#gaf0ba91f2a3df6af70463601679417fd4)   0x00 |
|   | Used for config command, e.g. <a href="group___f_u_n_c___c_o_n_f.md#ga351c2deba9865081c314d818463f20c9">EMV_CT_SetTermData</a>. [More\...](#gaf0ba91f2a3df6af70463601679417fd4)<br/> |
| #define  | [P2_GET](#ga2a2911f7e67d626c4c5f4ec1bd69dff6)   0x01 |
|   | Used for config command, e.g. <a href="group___f_u_n_c___c_o_n_f.md#ga954c82bc82203115b10fcab356df0079">EMV_CT_GetTermData</a>. [More\...](#ga2a2911f7e67d626c4c5f4ec1bd69dff6)<br/> |
| #define  | [P2_CLONE](#ga3171d7e1bf6ef77813a8fd2ac595961b)   0x02 |
|   | Used reading configuration data that shall be transfered to another system (internal use, serialised API only) [More\...](#ga3171d7e1bf6ef77813a8fd2ac595961b)<br/> |
| #define  | [INS_CBCK_FCT](#gace07d6cfd34efe7b0e594324c4e1b303)   0x01 |
|   | Instruction byte used for callback functions, used with [EMV_CT_CLA_CBCK_REQ](#ga975cd4206f0b6b238b340178ad792c78 "Class for callback requests from EMV ADK to calling application (see Callback functions)"). [More\...](#gace07d6cfd34efe7b0e594324c4e1b303)<br/> |
| #define  | [INS_CBCK_CRD](#gac530d3a642a780e6430f2a9fd1f57dce)   0x02 |
|   | Instruction byte used for callbacks to cardreader, used with [EMV_CT_CLA_CBCK_REQ](#ga975cd4206f0b6b238b340178ad792c78 "Class for callback requests from EMV ADK to calling application (see Callback functions)"). [More\...](#gac530d3a642a780e6430f2a9fd1f57dce)<br/> |
| #define  | [INS_CBCK_TRACE](#gacf7e3a366c458c27e002776330e84cbb)   0xFF |
|   | Instruction byte used for trace output, used with [EMV_CT_CLA_CBCK_REQ](#ga975cd4206f0b6b238b340178ad792c78 "Class for callback requests from EMV ADK to calling application (see Callback functions)"). Also used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.") in header field passed to EMV_CT_IF_BERTLV for client traces. [More\...](#gacf7e3a366c458c27e002776330e84cbb)<br/> |
| #define  | [INS_INIT](#gaffb63d3b2d98277221a603a0a6c48fff)   0x00 |
|   | Instruction byte for <a href="group___f_u_n_c___i_n_i_t.md#ga514e39585c5a6b79632ac317593ff592">EMV_CT_Init_Framework()</a>, respectively EMV_CT_Init_FrameworkClient(), used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#gaffb63d3b2d98277221a603a0a6c48fff)<br/> |
| #define  | [INS_TERM_CFG](#gaf2a42e0a1c524294cde7ae3ed4c9c45f)   0x01 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga351c2deba9865081c314d818463f20c9">EMV_CT_SetTermData</a>, <a href="group___f_u_n_c___c_o_n_f.md#ga954c82bc82203115b10fcab356df0079">EMV_CT_GetTermData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#gaf2a42e0a1c524294cde7ae3ed4c9c45f)<br/> |
| #define  | [INS_APPLI_CFG](#ga6795399515af157c4fb02c2141290935)   0x02 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga73ca1735defbb65a1aae2ead1de70233">EMV_CT_SetAppliData</a>, <a href="group___f_u_n_c___c_o_n_f.md#ga363163e375895b7d3ad03ace5df5d0d3">EMV_CT_GetAppliData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga6795399515af157c4fb02c2141290935)<br/> |
| #define  | [INS_CAPKEY_CFG](#ga6f9fe9144b546c050a5cfdd516c26b01)   0x03 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gade5b2bbc6ab46c4b7d9efa991b696ad2">EMV_CT_StoreCAPKey</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga6f9fe9144b546c050a5cfdd516c26b01)<br/> |
| #define  | [INS_APPLY_CFG](#ga523b4877cb4ce370ff00f343a16cc021)   0x04 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga3170974cb7a73a9dec8f881295cc1cac">EMV_CT_ApplyConfiguration</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga523b4877cb4ce370ff00f343a16cc021)<br/> |
| #define  | [INS_GET_VER](#ga45cf078d40876821a8c2d6c997b117e7)   0x05 |
|   | Instruction byte for <a href="group___f_u_n_c___i_n_i_t.md#ga36754df7722826d8264b5a00f7455312">EMV_CT_FRAMEWORK_GetVersion</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga45cf078d40876821a8c2d6c997b117e7)<br/> |
| #define  | [INS_VIRT_CFG](#ga12fb1f55ae937a04c8385a5c6974ac1b)   0x06 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gab5d29810043af901c08736d4e9337353">EMV_CT_MapVirtualTerminal</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga12fb1f55ae937a04c8385a5c6974ac1b)<br/> |
| #define  | [INS_SELECT](#gaef01811fe4398a2410cb8a841f623bd3)   0x10 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gac13472c2a4aea6475fe7bb52627e97eb">EMV_CT_StartTransaction</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#gaef01811fe4398a2410cb8a841f623bd3)<br/> |
| #define  | [INS_TRANSAC](#ga153f7430e35ff29a88b352f6bc3f2e93)   0x11 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga8be6df6babc587a19f63f284b2a6f006">EMV_CT_ContinueOffline</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga153f7430e35ff29a88b352f6bc3f2e93)<br/> |
| #define  | [INS_ONLINE](#ga6deba1f9808c46b51e95b93128f80233)   0x12 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga6deba1f9808c46b51e95b93128f80233)<br/> |
| #define  | [INS_UPDATE_TAG](#ga54dcb30d6ef6f0954a6589ff7933daee)   0x13 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gad3dd36d27d5fa94d3f302dc4a4546b70">EMV_CT_updateTxnTags</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga54dcb30d6ef6f0954a6589ff7933daee)<br/> |
| #define  | [INS_FETCH_TAG](#ga108262bd90a9b17cfd6e0c3c15094c01)   0x14 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga108262bd90a9b17cfd6e0c3c15094c01)<br/> |
| #define  | [INS_END_TRX](#ga2fae6a4de2eb26c2c5d30d475ccc19c5)   0x15 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gaec319989542c7681715566de387d7f69">EMV_CT_EndTransaction</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga2fae6a4de2eb26c2c5d30d475ccc19c5)<br/> |
| #define  | [INS_CND_DATA](#ga365fd99d486ce39e53c107e46de14ee5)   0x16 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gac8f6430c652d6dad621ca3c0cf367346">EMV_CT_GetCandidateData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga365fd99d486ce39e53c107e46de14ee5)<br/> |
| #define  | [INS_CHECK_AID](#ga8f34305a68eaabfa66bf18f13f248ff6)   0x17 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gad55c11dd44dbba66d6fefeb48b01a9e4">EMV_CT_CheckSupportedAID</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#ga8f34305a68eaabfa66bf18f13f248ff6)<br/> |
| #define  | [INS_FETCH_DOL](#gac3d226ab26f6649ab60a7412dde79bef)   0x18 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga1af2b496d37337cff4fb8b9407ed933d">EMV_CT_fetchTxnDOL</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK."). [More\...](#gac3d226ab26f6649ab60a7412dde79bef)<br/> |
| #define  | [INS_ICC_DETECT](#gafbe849dd3c9a3eb3dedbc48c0d43625c)   0x01 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga62577d8d938685a65dd2b326cb03522d">EMV_CT_SmartDetect</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gafbe849dd3c9a3eb3dedbc48c0d43625c)<br/> |
| #define  | [INS_ICC_RESET](#ga93317ba7df100e161844932dbd20698f)   0x02 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gaa63515431ea6f33b113fa7af5562db11">EMV_CT_SmartReset</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#ga93317ba7df100e161844932dbd20698f)<br/> |
| #define  | [INS_ICC_ISO](#gabca70fa6b551edc49bd98ac79f50bfbf)   0x03 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga728923e6e6be8867cf954b7c8d4414d5">EMV_CT_SmartISO</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gabca70fa6b551edc49bd98ac79f50bfbf)<br/> |
| #define  | [INS_ICC_OFF](#gad4ec43d9380ec71d8c396270b5d34bc2)   0x04 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gab99f6946bd7815a64a54be66652c2840">EMV_CT_SmartPowerOff</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gad4ec43d9380ec71d8c396270b5d34bc2)<br/> |
| #define  | [INS_ICC_PIN](#ga34d4eeacd4b59981be2a96960ff38bbf)   0x05 |
|   | Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga895cb054c344d011e9e3c6acc4aadafe">EMV_CT_Send_PIN_Offline</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#ga34d4eeacd4b59981be2a96960ff38bbf)<br/> |
| #define  | [INS_ICC_PIN_DIRECT](#gacc08078ca12aa8c8a11044abad0dac88)   0x08 |
|   | Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga1399e33e4c57a10554adbb2aa16d4dcb">EMV_CT_SmartPIN</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gacc08078ca12aa8c8a11044abad0dac88)<br/> |
| #define  | [INS_ICC_LED_SWITCH](#gaead5042ef855394387af73ecd8fba1de)   0x09 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gaa7a875eed1a49cff8fdf70c81100be2f">EMV_CT_LED</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions."). [More\...](#gaead5042ef855394387af73ecd8fba1de)<br/> |
| #define  | [INS_LED_SWITCH](#ga0c455b1cdcb1ad1513e54c823f1d07a8)   0x03 |
|   | Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gaa7a875eed1a49cff8fdf70c81100be2f">EMV_CT_LED</a>, used with [CLA_LED](#gad1c3412f36620771889c9691889f80b1 "Class for LED functions."). [More\...](#ga0c455b1cdcb1ad1513e54c823f1d07a8)<br/> |

## DetailedDescription {#detailed-description}

Used for enclosing TLV container at transport. That\'s necessary in case EMV ADK and calling application are placed in separated entities. Transport layer (e.g. PINPad ISO2) must have indicators to determine whether data is meant for EMV ADK or not.

Used for enclosing TLV container at transport. That\'s necessary in case EMV ADK and calling application are placed in separated entities. Transport layer (e.g. PINPad ISO2) must have indicators to determine whether data is meant for EMv ADK or not.

## MacroDefinition Documentation {#macro-definition-documentation}

## CLA_CRD\[1/2\] <a href="#ga5bba87bf3fef52692566815cace38934" id="ga5bba87bf3fef52692566815cace38934"></a> {#cla_crd-12}

<p>#define CLA_CRD   0x41</p>

Class for ICC functions.

## CLA_CRD\[2/2\] <a href="#ga5bba87bf3fef52692566815cace38934" id="ga5bba87bf3fef52692566815cace38934"></a> {#cla_crd-22}

<p>#define CLA_CRD   0x41</p>

Class for ICC functions.

## CLA_CRD_ALT <a href="#gae25dbca0f06ecd523fc9e26216b3fae1" id="gae25dbca0f06ecd523fc9e26216b3fae1"></a>

<p>#define CLA_CRD_ALT   0x42</p>

Alternative class for ICC functions.

## CLA_EMV\[1/2\] <a href="#ga7ca54f43b657f0cc8b1ad98ecf60491f" id="ga7ca54f43b657f0cc8b1ad98ecf60491f"></a> {#cla_emv-12}

<p>#define CLA_EMV   0x39</p>

Class for requests to EMV ADK.

## CLA_EMV\[2/2\] <a href="#ga7ca54f43b657f0cc8b1ad98ecf60491f" id="ga7ca54f43b657f0cc8b1ad98ecf60491f"></a> {#cla_emv-22}

<p>#define CLA_EMV   0x39</p>

Class for requests to EMV ADK.

## CLA_EMV_ALT <a href="#ga43723b2d17804e3934b43e370aa96e31" id="ga43723b2d17804e3934b43e370aa96e31"></a>

<p>#define CLA_EMV_ALT   0x40</p>

Alternative class for requests to EMV ADK.

## CLA_LED\[1/2\] <a href="#gad1c3412f36620771889c9691889f80b1" id="gad1c3412f36620771889c9691889f80b1"></a> {#cla_led-12}

<p>#define CLA_LED   0x43</p>

Class for LED functions.

## CLA_LED\[2/2\] <a href="#gad1c3412f36620771889c9691889f80b1" id="gad1c3412f36620771889c9691889f80b1"></a> {#cla_led-22}

<p>#define CLA_LED   0x43</p>

Class for LED functions.

## EMV_CT_CLA_CBCK_REQ <a href="#ga975cd4206f0b6b238b340178ad792c78" id="ga975cd4206f0b6b238b340178ad792c78"></a>

<p>#define EMV_CT_CLA_CBCK_REQ   0x91</p>

Class for callback requests from EMV ADK to calling application (see <a href="group___t_l_v___c_a_l_l_b_c_k.md">Callback functions</a>)

## EMV_CT_CLA_CBCK_RESP <a href="#ga0fe23ca596d2bf6ff3d483c6eb6a63ea" id="ga0fe23ca596d2bf6ff3d483c6eb6a63ea"></a>

<p>#define EMV_CT_CLA_CBCK_RESP   0x92</p>

Class for callback responses (see <a href="group___t_l_v___c_a_l_l_b_c_k.md">Callback functions</a>)

## EMV_CTLS_CLA_CBCK_REQ <a href="#ga3824324397d1922e125aa46661a6b2ee" id="ga3824324397d1922e125aa46661a6b2ee"></a>

<p>#define EMV_CTLS_CLA_CBCK_REQ   0x91</p>

Class for callback requests from EMV ADK to calling application (see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md">Constructed tags for callback functions</a>)

## EMV_CTLS_CLA_CBCK_RESP <a href="#ga01497e2819acf0fcac29d6d3e3a46956" id="ga01497e2819acf0fcac29d6d3e3a46956"></a>

<p>#define EMV_CTLS_CLA_CBCK_RESP   0x92</p>

Class for callback responses (see <a href="group___c_b_c_k___f_c_t___t_a_g_s.md">Constructed tags for callback functions</a>)

## EMV_CTLS_CLA_RET_ERROR <a href="#gad98eb5908db925500050141833b9dc91" id="gad98eb5908db925500050141833b9dc91"></a>

<p>#define EMV_CTLS_CLA_RET_ERROR   0x94</p>

Class for Return with error (function not available / parameter error, \...)

## EMV_CTLS_CLA_RET_OK <a href="#ga4cd968e98897402a9505b20d07a3d29f" id="ga4cd968e98897402a9505b20d07a3d29f"></a>

<p>#define EMV_CTLS_CLA_RET_OK   0x90</p>

Class for Return with no error.

## INS_APPLI_CFG\[1/2\] <a href="#ga6795399515af157c4fb02c2141290935" id="ga6795399515af157c4fb02c2141290935"></a> {#ins_appli_cfg-12}

<p>#define INS_APPLI_CFG   0x02</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga73ca1735defbb65a1aae2ead1de70233">EMV_CT_SetAppliData</a>, <a href="group___f_u_n_c___c_o_n_f.md#ga363163e375895b7d3ad03ace5df5d0d3">EMV_CT_GetAppliData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_APPLI_CFG\[2/2\] <a href="#ga6795399515af157c4fb02c2141290935" id="ga6795399515af157c4fb02c2141290935"></a> {#ins_appli_cfg-22}

<p>#define INS_APPLI_CFG   0x02</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gadc7f2eba5fd3e941d0ddb65a936a0776">EMV_CTLS_SetAppliDataSchemeSpecific</a>, <a href="group___f_u_n_c___c_o_n_f.md#gae76efd9464ef90029a0dddb8d845d4d8">EMV_CTLS_GetAppliDataSchemeSpecific</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_APPLY_CFG\[1/2\] <a href="#ga523b4877cb4ce370ff00f343a16cc021" id="ga523b4877cb4ce370ff00f343a16cc021"></a> {#ins_apply_cfg-12}

<p>#define INS_APPLY_CFG   0x04</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga3170974cb7a73a9dec8f881295cc1cac">EMV_CT_ApplyConfiguration</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_APPLY_CFG\[2/2\] <a href="#ga523b4877cb4ce370ff00f343a16cc021" id="ga523b4877cb4ce370ff00f343a16cc021"></a> {#ins_apply_cfg-22}

<p>#define INS_APPLY_CFG   0x04</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gaa5352e4331b8fd16eaa02b1bbb7027c2">EMV_CTLS_ApplyConfiguration</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_BREAK <a href="#ga319c151884f9cdcd12fb3c7e3ec244bd" id="ga319c151884f9cdcd12fb3c7e3ec244bd"></a>

<p>#define INS_BREAK   0x20</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga2b4820be53959b56fb7f672bd54f4e63">EMV_CTLS_Break</a>, used wih [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_CAPKEY_CFG\[1/2\] <a href="#ga6f9fe9144b546c050a5cfdd516c26b01" id="ga6f9fe9144b546c050a5cfdd516c26b01"></a> {#ins_capkey_cfg-12}

<p>#define INS_CAPKEY_CFG   0x03</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gade5b2bbc6ab46c4b7d9efa991b696ad2">EMV_CT_StoreCAPKey</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_CAPKEY_CFG\[2/2\] <a href="#ga6f9fe9144b546c050a5cfdd516c26b01" id="ga6f9fe9144b546c050a5cfdd516c26b01"></a> {#ins_capkey_cfg-22}

<p>#define INS_CAPKEY_CFG   0x03</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga3e03f6dd283e873cbcd6b8e4bb78f09a">EMV_CTLS_StoreCAPKey</a>, <a href="group___f_u_n_c___c_o_n_f.md#gacaf6e34b74f3c446ca7f877223cf4724">EMV_CTLS_ReadCAPKeys</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_CBCK_CRD\[1/2\] <a href="#gac530d3a642a780e6430f2a9fd1f57dce" id="gac530d3a642a780e6430f2a9fd1f57dce"></a> {#ins_cbck_crd-12}

<p>#define INS_CBCK_CRD   0x02</p>

Instruction byte used for callbacks to cardreader, used with [EMV_CT_CLA_CBCK_REQ](#ga975cd4206f0b6b238b340178ad792c78 "Class for callback requests from EMV ADK to calling application (see Callback functions)").

## INS_CBCK_CRD\[2/2\] <a href="#gac530d3a642a780e6430f2a9fd1f57dce" id="gac530d3a642a780e6430f2a9fd1f57dce"></a> {#ins_cbck_crd-22}

<p>#define INS_CBCK_CRD   0x02</p>

Instruction byte used for callbacks to cardreader, used with [EMV_CTLS_CLA_CBCK_REQ](#ga3824324397d1922e125aa46661a6b2ee "Class for callback requests from EMV ADK to calling application (see Constructed tags for callback fu...").

## INS_CBCK_FCT\[1/2\] <a href="#gace07d6cfd34efe7b0e594324c4e1b303" id="gace07d6cfd34efe7b0e594324c4e1b303"></a> {#ins_cbck_fct-12}

<p>#define INS_CBCK_FCT   0x01</p>

Instruction byte used for callback functions, used with [EMV_CT_CLA_CBCK_REQ](#ga975cd4206f0b6b238b340178ad792c78 "Class for callback requests from EMV ADK to calling application (see Callback functions)").

## INS_CBCK_FCT\[2/2\] <a href="#gace07d6cfd34efe7b0e594324c4e1b303" id="gace07d6cfd34efe7b0e594324c4e1b303"></a> {#ins_cbck_fct-22}

<p>#define INS_CBCK_FCT   0x01</p>

Instruction byte used for callback functions, used with [EMV_CTLS_CLA_CBCK_REQ](#ga3824324397d1922e125aa46661a6b2ee "Class for callback requests from EMV ADK to calling application (see Constructed tags for callback fu...").

## INS_CBCK_TRACE\[1/2\] <a href="#gacf7e3a366c458c27e002776330e84cbb" id="gacf7e3a366c458c27e002776330e84cbb"></a> {#ins_cbck_trace-12}

<p>#define INS_CBCK_TRACE   0xFF</p>

Instruction byte used for trace output, used with [EMV_CT_CLA_CBCK_REQ](#ga975cd4206f0b6b238b340178ad792c78 "Class for callback requests from EMV ADK to calling application (see Callback functions)"). Also used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.") in header field passed to EMV_CT_IF_BERTLV for client traces.

## INS_CBCK_TRACE\[2/2\] <a href="#gacf7e3a366c458c27e002776330e84cbb" id="gacf7e3a366c458c27e002776330e84cbb"></a> {#ins_cbck_trace-22}

<p>#define INS_CBCK_TRACE   0xFF</p>

Instruction byte used for trace output, used with [EMV_CTLS_CLA_CBCK_REQ](#ga3824324397d1922e125aa46661a6b2ee "Class for callback requests from EMV ADK to calling application (see Constructed tags for callback fu..."). Also used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.") in header field passed to EMV_CTLS_IF_BERTLV for client traces.

## INS_CHECK_AID <a href="#ga8f34305a68eaabfa66bf18f13f248ff6" id="ga8f34305a68eaabfa66bf18f13f248ff6"></a>

<p>#define INS_CHECK_AID   0x17</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gad55c11dd44dbba66d6fefeb48b01a9e4">EMV_CT_CheckSupportedAID</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_CND_DATA\[1/2\] <a href="#ga365fd99d486ce39e53c107e46de14ee5" id="ga365fd99d486ce39e53c107e46de14ee5"></a> {#ins_cnd_data-12}

<p>#define INS_CND_DATA   0x16</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gac8f6430c652d6dad621ca3c0cf367346">EMV_CT_GetCandidateData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_CND_DATA\[2/2\] <a href="#ga365fd99d486ce39e53c107e46de14ee5" id="ga365fd99d486ce39e53c107e46de14ee5"></a> {#ins_cnd_data-22}

<p>#define INS_CND_DATA   0x16</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gab1600b67271771658ce682b9cfeb660e">EMV_CTLS_GetCandidateData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_END_TRX\[1/2\] <a href="#ga2fae6a4de2eb26c2c5d30d475ccc19c5" id="ga2fae6a4de2eb26c2c5d30d475ccc19c5"></a> {#ins_end_trx-12}

<p>#define INS_END_TRX   0x15</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gaec319989542c7681715566de387d7f69">EMV_CT_EndTransaction</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_END_TRX\[2/2\] <a href="#ga2fae6a4de2eb26c2c5d30d475ccc19c5" id="ga2fae6a4de2eb26c2c5d30d475ccc19c5"></a> {#ins_end_trx-22}

<p>#define INS_END_TRX   0x15</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gaa7aed3c7f0c3ac0f26cc46efff422dd9">EMV_CTLS_EndTransaction</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_FETCH_DOL\[1/2\] <a href="#gac3d226ab26f6649ab60a7412dde79bef" id="gac3d226ab26f6649ab60a7412dde79bef"></a> {#ins_fetch_dol-12}

<p>#define INS_FETCH_DOL   0x18</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga1af2b496d37337cff4fb8b9407ed933d">EMV_CT_fetchTxnDOL</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_FETCH_DOL\[2/2\] <a href="#gac3d226ab26f6649ab60a7412dde79bef" id="gac3d226ab26f6649ab60a7412dde79bef"></a> {#ins_fetch_dol-22}

<p>#define INS_FETCH_DOL   0x18</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga41af1fb74c44d7e154ee5ee774ec9460">EMV_CTLS_fetchTxnDOL</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_FETCH_TAG\[1/2\] <a href="#ga108262bd90a9b17cfd6e0c3c15094c01" id="ga108262bd90a9b17cfd6e0c3c15094c01"></a> {#ins_fetch_tag-12}

<p>#define INS_FETCH_TAG   0x14</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_FETCH_TAG\[2/2\] <a href="#ga108262bd90a9b17cfd6e0c3c15094c01" id="ga108262bd90a9b17cfd6e0c3c15094c01"></a> {#ins_fetch_tag-22}

<p>#define INS_FETCH_TAG   0x14</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_GET_VER\[1/2\] <a href="#ga45cf078d40876821a8c2d6c997b117e7" id="ga45cf078d40876821a8c2d6c997b117e7"></a> {#ins_get_ver-12}

<p>#define INS_GET_VER   0x05</p>

Instruction byte for <a href="group___f_u_n_c___i_n_i_t.md#ga36754df7722826d8264b5a00f7455312">EMV_CT_FRAMEWORK_GetVersion</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_GET_VER\[2/2\] <a href="#ga45cf078d40876821a8c2d6c997b117e7" id="ga45cf078d40876821a8c2d6c997b117e7"></a> {#ins_get_ver-22}

<p>#define INS_GET_VER   0x05</p>

Instruction byte for <a href="group___f_u_n_c___i_n_i_t.md#ga986ef3db0e4168cb9dc3868b06cea0d5">EMV_CTLS_FRAMEWORK_GetVersion</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_ICC_DETECT <a href="#gafbe849dd3c9a3eb3dedbc48c0d43625c" id="gafbe849dd3c9a3eb3dedbc48c0d43625c"></a>

<p>#define INS_ICC_DETECT   0x01</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga62577d8d938685a65dd2b326cb03522d">EMV_CT_SmartDetect</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_ISO\[1/2\] <a href="#gabca70fa6b551edc49bd98ac79f50bfbf" id="gabca70fa6b551edc49bd98ac79f50bfbf"></a> {#ins_icc_iso-12}

<p>#define INS_ICC_ISO   0x03</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga728923e6e6be8867cf954b7c8d4414d5">EMV_CT_SmartISO</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_ISO\[2/2\] <a href="#gabca70fa6b551edc49bd98ac79f50bfbf" id="gabca70fa6b551edc49bd98ac79f50bfbf"></a> {#ins_icc_iso-22}

<p>#define INS_ICC_ISO   0x03</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gafbcdb0278723b9629eb7c12532119e2d">EMV_CTLS_SmartISO</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_LED_SWITCH <a href="#gaead5042ef855394387af73ecd8fba1de" id="gaead5042ef855394387af73ecd8fba1de"></a>

<p>#define INS_ICC_LED_SWITCH   0x09</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gaa7a875eed1a49cff8fdf70c81100be2f">EMV_CT_LED</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_OFF\[1/2\] <a href="#gad4ec43d9380ec71d8c396270b5d34bc2" id="gad4ec43d9380ec71d8c396270b5d34bc2"></a> {#ins_icc_off-12}

<p>#define INS_ICC_OFF   0x04</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gab99f6946bd7815a64a54be66652c2840">EMV_CT_SmartPowerOff</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_OFF\[2/2\] <a href="#gad4ec43d9380ec71d8c396270b5d34bc2" id="gad4ec43d9380ec71d8c396270b5d34bc2"></a> {#ins_icc_off-22}

<p>#define INS_ICC_OFF   0x04</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gadd0716253a50b2791ac4e2a1627d1e8d">EMV_CTLS_SmartPowerOff</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_PIN <a href="#ga34d4eeacd4b59981be2a96960ff38bbf" id="ga34d4eeacd4b59981be2a96960ff38bbf"></a>

<p>#define INS_ICC_PIN   0x05</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga895cb054c344d011e9e3c6acc4aadafe">EMV_CT_Send_PIN_Offline</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_PIN_DIRECT <a href="#gacc08078ca12aa8c8a11044abad0dac88" id="gacc08078ca12aa8c8a11044abad0dac88"></a>

<p>#define INS_ICC_PIN_DIRECT   0x08</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga1399e33e4c57a10554adbb2aa16d4dcb">EMV_CT_SmartPIN</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_RECEIVE <a href="#gab3ddc4213a9aaf815a80fcf39dffa699" id="gab3ddc4213a9aaf815a80fcf39dffa699"></a>

<p>#define INS_ICC_RECEIVE   0x09</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga13fd81242d6f2012ffade242f069a7f0">EMV_CTLS_TransparentReceive</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_REMOVAL <a href="#gab7f57823771b2c97055b030f09228548" id="gab7f57823771b2c97055b030f09228548"></a>

<p>#define INS_ICC_REMOVAL   0x0A</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gaf9ca19bc9d77bfe1dfec28c030b18059">EMV_CTLS_CardRemoval</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_RESET\[1/2\] <a href="#ga93317ba7df100e161844932dbd20698f" id="ga93317ba7df100e161844932dbd20698f"></a> {#ins_icc_reset-12}

<p>#define INS_ICC_RESET   0x02</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gaa63515431ea6f33b113fa7af5562db11">EMV_CT_SmartReset</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_RESET\[2/2\] <a href="#ga93317ba7df100e161844932dbd20698f" id="ga93317ba7df100e161844932dbd20698f"></a> {#ins_icc_reset-22}

<p>#define INS_ICC_RESET   0x02</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_SEND <a href="#ga25d2323eddf0061e3eadabbbfe766638" id="ga25d2323eddf0061e3eadabbbfe766638"></a>

<p>#define INS_ICC_SEND   0x08</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga91409ddd42bd277e1be3157f6c3bd445">EMV_CTLS_TransparentSend</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_ICC_TRANS <a href="#gaa274137086fb28a0e9697deb17555113" id="gaa274137086fb28a0e9697deb17555113"></a>

<p>#define INS_ICC_TRANS   0x07</p>

Instruction byte for <a href="group___f_u_n_c___i_c_c.md#ga5290215f61c323842d712a8ad130c758">EMV_CTLS_TransparentCommand</a>, used with [CLA_CRD](#ga5bba87bf3fef52692566815cace38934 "Class for ICC functions.").

## INS_INIT\[1/2\] <a href="#gaffb63d3b2d98277221a603a0a6c48fff" id="gaffb63d3b2d98277221a603a0a6c48fff"></a> {#ins_init-12}

<p>#define INS_INIT   0x00</p>

Instruction byte for <a href="group___f_u_n_c___i_n_i_t.md#ga514e39585c5a6b79632ac317593ff592">EMV_CT_Init_Framework()</a>, respectively EMV_CT_Init_FrameworkClient(), used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_INIT\[2/2\] <a href="#gaffb63d3b2d98277221a603a0a6c48fff" id="gaffb63d3b2d98277221a603a0a6c48fff"></a> {#ins_init-22}

<p>#define INS_INIT   0x00</p>

Instruction byte for <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_LED_CONF_DESIGN <a href="#gac4b89905db7b0371dba0ec2a42f73071" id="gac4b89905db7b0371dba0ec2a42f73071"></a>

<p>#define INS_LED_CONF_DESIGN   0x05</p>

Instruction byte for <a href="group___a_d_k___l_e_d.md#gaabbf98fcb94592b96bee2c680bfccee9">EMV_CTLS_LED_ConfigDesign</a>, used with [CLA_LED](#gad1c3412f36620771889c9691889f80b1 "Class for LED functions.").

## INS_LED_MODE <a href="#ga62d51f45ace79bf1afa60498d84b17ad" id="ga62d51f45ace79bf1afa60498d84b17ad"></a>

<p>#define INS_LED_MODE   0x04</p>

Instruction byte for <a href="group___a_d_k___l_e_d.md#ga62eb0e6232dad59e94b75205493fa06d">EMV_CTLS_LED_SetMode</a>, used with [CLA_LED](#gad1c3412f36620771889c9691889f80b1 "Class for LED functions.").

## INS_LED_SWITCH\[1/2\] <a href="#ga0c455b1cdcb1ad1513e54c823f1d07a8" id="ga0c455b1cdcb1ad1513e54c823f1d07a8"></a> {#ins_led_switch-12}

<p>#define INS_LED_SWITCH   0x03</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gaa7a875eed1a49cff8fdf70c81100be2f">EMV_CT_LED</a>, used with [CLA_LED](#gad1c3412f36620771889c9691889f80b1 "Class for LED functions.").

## INS_LED_SWITCH\[2/2\] <a href="#ga0c455b1cdcb1ad1513e54c823f1d07a8" id="ga0c455b1cdcb1ad1513e54c823f1d07a8"></a> {#ins_led_switch-22}

<p>#define INS_LED_SWITCH   0x03</p>

Instruction byte for <a href="group___a_d_k___l_e_d.md#gabd80a7d1c3dbc5604604b02c20620f51">EMV_CTLS_LED</a>, used with [CLA_LED](#gad1c3412f36620771889c9691889f80b1 "Class for LED functions.").

## INS_ONLINE\[1/2\] <a href="#ga6deba1f9808c46b51e95b93128f80233" id="ga6deba1f9808c46b51e95b93128f80233"></a> {#ins_online-12}

<p>#define INS_ONLINE   0x12</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga42f570d2b8e66841ab9e8de7736e92d4">EMV_CT_ContinueOnline</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_ONLINE\[2/2\] <a href="#ga6deba1f9808c46b51e95b93128f80233" id="ga6deba1f9808c46b51e95b93128f80233"></a> {#ins_online-22}

<p>#define INS_ONLINE   0x12</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga297b6843994afaa2e7a6f5e0e4a8af3e">EMV_CTLS_ContinueOnline</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_RFU <a href="#ga67230d89e515a3b2b7fcb85008a568f5" id="ga67230d89e515a3b2b7fcb85008a568f5"></a>

<p>#define INS_RFU   0x13</p>

Instruction byte used in CT mode only.

## INS_SELECT\[1/2\] <a href="#gaef01811fe4398a2410cb8a841f623bd3" id="gaef01811fe4398a2410cb8a841f623bd3"></a> {#ins_select-12}

<p>#define INS_SELECT   0x10</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gac13472c2a4aea6475fe7bb52627e97eb">EMV_CT_StartTransaction</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_SELECT\[2/2\] <a href="#gaef01811fe4398a2410cb8a841f623bd3" id="gaef01811fe4398a2410cb8a841f623bd3"></a> {#ins_select-22}

<p>#define INS_SELECT   0x10</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga1a86c76dcf8fec6e97ead6cf8f2717ff">EMV_CTLS_SetupTransaction</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_TERM_CFG\[1/2\] <a href="#gaf2a42e0a1c524294cde7ae3ed4c9c45f" id="gaf2a42e0a1c524294cde7ae3ed4c9c45f"></a> {#ins_term_cfg-12}

<p>#define INS_TERM_CFG   0x01</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga351c2deba9865081c314d818463f20c9">EMV_CT_SetTermData</a>, <a href="group___f_u_n_c___c_o_n_f.md#ga954c82bc82203115b10fcab356df0079">EMV_CT_GetTermData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_TERM_CFG\[2/2\] <a href="#gaf2a42e0a1c524294cde7ae3ed4c9c45f" id="gaf2a42e0a1c524294cde7ae3ed4c9c45f"></a> {#ins_term_cfg-22}

<p>#define INS_TERM_CFG   0x01</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gac5ce9781bba083028538f9e77c2d58f3">EMV_CTLS_SetTermData</a>, <a href="group___f_u_n_c___c_o_n_f.md#gad690d9dec1818d4ffc7db35c12c3b610">EMV_CTLS_GetTermData</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_TRANSAC\[1/2\] <a href="#ga153f7430e35ff29a88b352f6bc3f2e93" id="ga153f7430e35ff29a88b352f6bc3f2e93"></a> {#ins_transac-12}

<p>#define INS_TRANSAC   0x11</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#ga8be6df6babc587a19f63f284b2a6f006">EMV_CT_ContinueOffline</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_TRANSAC\[2/2\] <a href="#ga153f7430e35ff29a88b352f6bc3f2e93" id="ga153f7430e35ff29a88b352f6bc3f2e93"></a> {#ins_transac-22}

<p>#define INS_TRANSAC   0x11</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_UPDATE_TAG <a href="#ga54dcb30d6ef6f0954a6589ff7933daee" id="ga54dcb30d6ef6f0954a6589ff7933daee"></a>

<p>#define INS_UPDATE_TAG   0x13</p>

Instruction byte for <a href="group___f_u_n_c___f_l_o_w.md#gad3dd36d27d5fa94d3f302dc4a4546b70">EMV_CT_updateTxnTags</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_VIRT_CFG\[1/2\] <a href="#ga12fb1f55ae937a04c8385a5c6974ac1b" id="ga12fb1f55ae937a04c8385a5c6974ac1b"></a> {#ins_virt_cfg-12}

<p>#define INS_VIRT_CFG   0x06</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#gab5d29810043af901c08736d4e9337353">EMV_CT_MapVirtualTerminal</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## INS_VIRT_CFG\[2/2\] <a href="#ga12fb1f55ae937a04c8385a5c6974ac1b" id="ga12fb1f55ae937a04c8385a5c6974ac1b"></a> {#ins_virt_cfg-22}

<p>#define INS_VIRT_CFG   0x06</p>

Instruction byte for <a href="group___f_u_n_c___c_o_n_f.md#ga6fbd51a31dd89f11d137adab3ed4d733">EMV_CTLS_MapVirtualTerminal</a>, used with [CLA_EMV](#ga7ca54f43b657f0cc8b1ad98ecf60491f "Class for requests to EMV ADK.").

## P2_CLONE\[1/2\] <a href="#ga3171d7e1bf6ef77813a8fd2ac595961b" id="ga3171d7e1bf6ef77813a8fd2ac595961b"></a> {#p2_clone-12}

<p>#define P2_CLONE   0x02</p>

Used reading configuration data that shall be transfered to another system (internal use, serialised API only)

## P2_CLONE\[2/2\] <a href="#ga3171d7e1bf6ef77813a8fd2ac595961b" id="ga3171d7e1bf6ef77813a8fd2ac595961b"></a> {#p2_clone-22}

<p>#define P2_CLONE   0x02</p>

Used reading configuration data that shall be transfered to another system (internal use, serialised API only)

## P2_GET\[1/2\] <a href="#ga2a2911f7e67d626c4c5f4ec1bd69dff6" id="ga2a2911f7e67d626c4c5f4ec1bd69dff6"></a> {#p2_get-12}

<p>#define P2_GET   0x01</p>

Used for config command, e.g. <a href="group___f_u_n_c___c_o_n_f.md#ga954c82bc82203115b10fcab356df0079">EMV_CT_GetTermData</a>.

## P2_GET\[2/2\] <a href="#ga2a2911f7e67d626c4c5f4ec1bd69dff6" id="ga2a2911f7e67d626c4c5f4ec1bd69dff6"></a> {#p2_get-22}

<p>#define P2_GET   0x01</p>

Uaed for config command, e.g. <a href="group___f_u_n_c___c_o_n_f.md#gad690d9dec1818d4ffc7db35c12c3b610">EMV_CTLS_GetTermData</a>.

## P2_SET\[1/2\] <a href="#gaf0ba91f2a3df6af70463601679417fd4" id="gaf0ba91f2a3df6af70463601679417fd4"></a> {#p2_set-12}

<p>#define P2_SET   0x00</p>

Used for config command, e.g. <a href="group___f_u_n_c___c_o_n_f.md#ga351c2deba9865081c314d818463f20c9">EMV_CT_SetTermData</a>.

## P2_SET\[2/2\] <a href="#gaf0ba91f2a3df6af70463601679417fd4" id="gaf0ba91f2a3df6af70463601679417fd4"></a> {#p2_set-22}

<p>#define P2_SET   0x00</p>

Uaed for config command, e.g. <a href="group___f_u_n_c___c_o_n_f.md#gac5ce9781bba083028538f9e77c2d58f3">EMV_CTLS_SetTermData</a>.

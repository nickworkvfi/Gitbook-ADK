---
hidden: true
title: com_verifone_seccmd Namespace ReferenceCom_verifone_seccmd
---

[Data Structures](#nested-classes) \| [Enumerations](#enum-members) \| [Functions](#func-members) \| [Variables](#var-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [DUKPTmask](#structcom__verifone__seccmd_1_1_d_u_k_p_tmask) |
| struct   | [EncDecData](#structcom__verifone__seccmd_1_1_enc_dec_data) |
| struct   | [EncDecDataIV](#structcom__verifone__seccmd_1_1_enc_dec_data_i_v) |
| struct   | [EncPINBlock](#structcom__verifone__seccmd_1_1_enc_p_i_n_block) |
| struct   | [genMAC](#structcom__verifone__seccmd_1_1gen_m_a_c) |
| struct   | [Ksn](#structcom__verifone__seccmd_1_1_ksn) |
| struct   | [Ksn_v2](#structcom__verifone__seccmd_1_1_ksn__v2) |
| struct   | [MACData](#structcom__verifone__seccmd_1_1_m_a_c_data) |
| struct   | [PINBlockParams](#structcom__verifone__seccmd_1_1_p_i_n_block_params) |
| struct   | [PropData](#structcom__verifone__seccmd_1_1_prop_data) |
| struct   | [SecConfig](#structcom__verifone__seccmd_1_1_sec_config) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a) {<br/>  [SC_SUCCESS](#a37f4111ddad314e8d0d664c1c4ec3a0aa6f2560b50ea6424b22c64ce918d219b1) = 0, [SC_ERROR](#a37f4111ddad314e8d0d664c1c4ec3a0aadb0d6638c65cb8e1489eefeb1e397539) = -1, [SC_WRONG_PAR](#a37f4111ddad314e8d0d664c1c4ec3a0aac9a40f75d583ba632ec6a7b1bba837c2) = -2, [SC_SEND_FAILED](#a37f4111ddad314e8d0d664c1c4ec3a0aa96b297b6e7da87854591137807e87118) = -3,<br/>  [SC_RECBUF_SMALL](#a37f4111ddad314e8d0d664c1c4ec3a0aa74093537566cc3dc99a16f316cdf4bcb) = -4, [SC_TIMER_ERROR](#a37f4111ddad314e8d0d664c1c4ec3a0aa78d223e76c4217694194196df5953efa) = -5<br/>} |

|  |  |
|----|----|
| Functions |  |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secInit](#ab649bee85abb5cb4085c3958f279483d) () |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secDestroy](#a644b5479904871433cffef9145c53dad) () |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secOpen](#a8091d419f67f4b53630f2fabe1888a09) (const std::string &, <a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> &handle) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secOpen](#a0214e263380c9c6e10f3c0afc4f53e8a) (const <a href="namespacecom__adksec__cmd.md#a8963c1dd7c626a621a8033209294fcbd">SecTransactionData_t</a> &td, <a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> &handle) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secClose](#a34f8a9e3b92467759d0bbdbf7b2dd8c0) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secSetKSId](#a75edecb24f839e04debb1aa5e47b5714) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, uint32_t ksid) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secGetKeyInventory](#a79b00ea8a8aed3b7950800bf136a1944) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, std::string &out) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secGetKeyData](#aff0a109c58ef5637c7bf3ffc0722c48d) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, <a href="namespacecom__verifone__host.md#a2418ec606f68970a9ed5ddf6ede58a2f">com_verifone_host::key_type_t</a> keyType, std::vector\< uint8_t \> &out) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secUpdateKey](#ab249c77069e9fc9946745fd4c63d5e39) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, <a href="namespacecom__verifone__host.md#a2418ec606f68970a9ed5ddf6ede58a2f">com_verifone_host::key_type_t</a> keyType, const std::vector\< uint8_t \> &keyData, std::vector\< uint8_t \> &propData) |
| <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secUpdateKey](#afeef2dc9bf85b090e712c03d0314b095) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, <a href="namespacecom__verifone__host.md#a2418ec606f68970a9ed5ddf6ede58a2f">com_verifone_host::key_type_t</a> keyType, const std::vector\< uint8_t \> &keyData) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secEncryptData](#aa58bc1a6a2056aebd3edc92f3bfcce9d) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, const std::vector\< uint8_t \> &plainData, std::vector\< uint8_t \> &encData, std::vector\< uint8_t \> &iv, std::vector\< uint8_t \> &ksn) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secEncryptTransactionData](#aaed6fc175245ba31936547cffd988948) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> &TDindex, std::vector\< uint8_t \> &encData, std::vector\< uint8_t \> &iv, std::vector\< uint8_t \> &ksn) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secDecryptData](#a9cd679dc9763b06566dff28b3d3268c9) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, const std::vector\< uint8_t \> &encData, std::vector\< uint8_t \> &plainData, std::vector\< uint8_t \> &iv, std::vector\< uint8_t \> &ksn) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secSign](#a66a1992f617359f2e4a96f4980478f82) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, const std::vector\< uint8_t \> &data, std::vector\< uint8_t \> &signature, std::vector\< uint8_t \> &iv, std::vector\< uint8_t \> &ksn) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secVerify](#a5470ce89fa947abc445f251ae0b2387b) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, const std::vector\< uint8_t \> &data, const std::vector\< uint8_t \> &signature, std::vector\< uint8_t \> &iv, std::vector\< uint8_t \> &ksn) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secRetrieveEncryptedPIN](#ab3d26136c64019fd223aa9ccd120d4e0) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, const uint8_t pinBlockFormat, std::vector\< unsigned char \> &pinBlk, std::vector\< uint8_t \> &ksn) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secIncrementKSN](#a77860b4cffed3ba159a5c124c8e2cde2) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, std::vector\< uint8_t \> &ksn) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secGetStatus](#a008e3cde266f576be23846d0c7b729c5) (std::string &jsonString, std::string hostName=\"\") |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secGetStatus](#a5fdc04a9bb61305af440ff6aaa9d4bf2) (std::string &jsonString, <a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secGetVersions](#a5499423d685ed9deb7ace9c22114adf2) (std::string &versions) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> std::string  | [secGetApiVersion](#a5ea5cbc9daa2ea726212741cd596b294) (void) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> std::string  | [secGetSvcVersion](#a029d7e16ab6b044379e9568a6c969afa) (void) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secClearTransactionData](#ac31ab997e8dc434d72e427a5d841186a) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secPutTransactionData](#a6bc0d39e1739680282d33d3d68df84c9) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, const <a href="namespacecom__adksec__cmd.md#a8963c1dd7c626a621a8033209294fcbd">SecTransactionData_t</a> &taData) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secGetTransactionValue](#a85ada2e35c1d1cbf60c05454b88b4b44) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> &key, <a href="namespacecom__adksec__cmd.md#abddf3fd58f8658a7475911ed80e0fe20">SecTransactionValue</a> &date) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secGetPermission](#af127868b6268758596f8a2a1ca0aaab3) (<a href="namespacecom__adksec__cmd.md#acc01edab4b0f73c92142d9d43dc7a7f7">secHandle_t</a> handle, const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> &key, <a href="namespacecom__adksec__cmd.md#af79ae13c5f9ec8424f44764288144041">bitMask_t</a> &permissionFlags) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secGenerateRandom](#a689199c9e7e4d8a553f3ab2f379b812e) (std::vector\< uint8_t \> &data, int count) |
| <a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a>  | [secDigest](#a0cca8cfbb868cbf34d35afabe5af29af) (int type, std::vector\< uint8_t \> &data, std::vector\< uint8_t \> &digest) |
| bool  | [hex2binCH](#a40857c3b0bad84b00cb6e8aa0ec585e0) (char in, unsigned char \*out) |
| int  | [convDsp2Hex](#a458e25c100e2be6e98615bbf37b61bf5) (const char \*dsp, size_t dsp_len, char \*hex, const size_t max_hex_len) |
| uint8_t  | [getCompatibleCode](#af55a5b4c8e099d741d4c38493fee3f3d) (<a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> error) |
| int  | [getCompatibleReturn](#ad034b089a8b4c935b2d8dfd64b3ae7b2) (<a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> newError) |
| int  | [getCompatibleReturn](#ab920b3ec278fd494f64959ea64f02469) (<a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> newError, uint8_t \*oldError) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_Init](#a9871b00715c29b88812f6cbe88657a21) (u_char \*=NULL) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> void  | [Sec_Destroy](#a9815dafaa8bd5999fbfaa20d7d22e661) () |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> u_char  | [Sec_Open](#a16e0564f479c004161cf826dbc6670b1) (const std::string &schemaName, uint8_t \*errCode) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> u_char  | [Sec_Open](#a84745bd9107eed389a508007daa6c73f) (u_char \*schemaName, uint8_t \*errCode) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_Close](#aed03f5425bde3f1404d4b97f8175c39f) (u_char HostId, uint8_t \*errCode) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_SelectHostConf](#ae805c757835a3b0a1b9e8adfc5ab574c) (u_char HostId, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_GetKeyData](#a3deda460871c6786f09216ea917dbfe0) (u_char HostId, u_char GKD_KeyType, u_char kekFlag, char \*aOutBuf, u_long \*uiOutBufLen, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_GetKeyData](#a121293b0e74ff6a415ee448c9985e819) (u_char GKD_HostId, u_char GKD_KeyType, char \*aOutBuf, u_long \*uiOutBufLen, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_UpdateKey](#a433ea1cf1bb2d33de167c140f01239ed) (u_char HostId, <a href="namespacecom__verifone__host.md#a2418ec606f68970a9ed5ddf6ede58a2f">key_type_t</a> UpK_KeyType, u_char kekFlag, char \*aKeyData, u_long uiKeyDataLen, [Ksn_v2](#structcom__verifone__seccmd_1_1_ksn__v2) KSN, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| [Ksn_v2](#structcom__verifone__seccmd_1_1_ksn__v2)  | [getKsn_v2](#a50a6ff38602b3fc92bfdb0743b361c7e) ([Ksn](#structcom__verifone__seccmd_1_1_ksn) \*pKSN) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_UpdateKey](#abd6053c9cceb8c43464afebdd6a39310) (u_char UpK_HostId, <a href="namespacecom__verifone__host.md#a2418ec606f68970a9ed5ddf6ede58a2f">key_type_t</a> UpK_KeyType, u_char kekFlag, char \*aKeyData, u_long uiKeyDataLen, [Ksn](#structcom__verifone__seccmd_1_1_ksn) \*pKSN, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_UpdateKey](#a772353b1140cb46753086ceddabf7d67) (u_char UpK_HostId, u_char UpK_KeyType, u_char kekFlag, char \*aKeyData, u_long uiKeyDataLen, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_UpdateKey](#a4e6b189775578f026dcac179a8b32002) (u_char UpK_HostId, u_char UpK_KeyType, char \*aKeyData, u_long uiKeyDataLen, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_AS2805KeyMgmnt](#a6db6f20b1810117273ba926c668abe09) (u_char HostId, u_char AS2805_AS2805Func, char \*aKeyData, u_long \*uiKeyDataLen, u_long, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_EncryptData](#a86bd1dbbaa97e44d4678e2cfbddca9a0) (u_char HostId, u_char EncD_EncMode, [EncDecDataIV](#structcom__verifone__seccmd_1_1_enc_dec_data_i_v) \*pData, [Ksn](#structcom__verifone__seccmd_1_1_ksn) \*pKSN, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_EncryptData](#a190633af1f21ffb1cb04305639d9d3a7) (u_char EncD_HostId, [EncDecDataIV](#structcom__verifone__seccmd_1_1_enc_dec_data_i_v) \*pData, [Ksn](#structcom__verifone__seccmd_1_1_ksn) \*pKSN, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_EncryptData](#ae736f0032aa220edc6ad88c6b30fb890) (u_char EncD_HostId, [EncDecDataIV](#structcom__verifone__seccmd_1_1_enc_dec_data_i_v) \*pData, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_EncryptData](#a6281732ab34b79ccb4f9073c9d818357) (u_char EncD_HostId, u_char EncD_EncMode, [EncDecData](#structcom__verifone__seccmd_1_1_enc_dec_data) \*pData, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_DecryptData](#abd1a0b2921b3987ea04a3554f9b01654) (u_char HostId, [EncDecDataIV](#structcom__verifone__seccmd_1_1_enc_dec_data_i_v) \*pData, [Ksn](#structcom__verifone__seccmd_1_1_ksn) \*pKSN, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_DecryptData](#a65bb1be7511682df1bf08f5c67ba1af8) (u_char DecD_HostId, [EncDecDataIV](#structcom__verifone__seccmd_1_1_enc_dec_data_i_v) \*pData, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_DecryptData](#a492a6884d5b4ec1c86a16d36847f9d35) (u_char DecD_HostId, u_char, [EncDecData](#structcom__verifone__seccmd_1_1_enc_dec_data) \*pData, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_GenerateMAC](#a415992011cbd54131165ca25801edb8a) (u_char HostId, u_char, u_char GMAC_MACMode, [MACData](#structcom__verifone__seccmd_1_1_m_a_c_data) \*pData, [genMAC](#structcom__verifone__seccmd_1_1gen_m_a_c) \*pMAC, [Ksn](#structcom__verifone__seccmd_1_1_ksn) \*pKSN, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_GenerateMAC](#a7891606a905ab9bdfb3aba52676b8c59) (u_char GMAC_HostId, u_char GMAC_UseDefaultCV, u_char GMAC_MACMode, [MACData](#structcom__verifone__seccmd_1_1_m_a_c_data) \*pData, [genMAC](#structcom__verifone__seccmd_1_1gen_m_a_c) \*pMAC, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_VerifyMAC](#a8a524ef7b08dde1a6e71492a44f1ea6b) (u_char HostId, u_char, u_char VMAC_MACMode, [MACData](#structcom__verifone__seccmd_1_1_m_a_c_data) \*pData, [genMAC](#structcom__verifone__seccmd_1_1gen_m_a_c) MAC, [Ksn](#structcom__verifone__seccmd_1_1_ksn) \*pKSN, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_VerifyMAC](#a5fd605ed60e48329c3b82f0f46270f18) (u_char VMAC_HostId, u_char VMAC_UseDefaultCV, u_char VMAC_MACMode, [MACData](#structcom__verifone__seccmd_1_1_m_a_c_data) \*pData, [genMAC](#structcom__verifone__seccmd_1_1gen_m_a_c) MAC, uint8_t \*errCode, long timeout=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_RetrieveEncryptedPIN](#a9a8932b53f4d3b1c33fe80636f25abb5) (u_char HostId, [PINBlockParams](#structcom__verifone__seccmd_1_1_p_i_n_block_params) \*pREP_PINBlockParams, uint16_t REP_Flags, [PropData](#structcom__verifone__seccmd_1_1_prop_data) REP_PropData, [EncPINBlock](#structcom__verifone__seccmd_1_1_enc_p_i_n_block) \*pREP_encPIN, [Ksn_v2](#structcom__verifone__seccmd_1_1_ksn__v2) \*pREP_KSN, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_RetrieveEncryptedPIN](#aaf7c25deeb41bbd8404477ccb27794f1) (u_char REP_HostId, [PINBlockParams](#structcom__verifone__seccmd_1_1_p_i_n_block_params) \*pREP_PINBlockParams, u_char REP_Flags, [PropData](#structcom__verifone__seccmd_1_1_prop_data) REP_PropData, [EncPINBlock](#structcom__verifone__seccmd_1_1_enc_p_i_n_block) \*pREP_encPIN, uint8_t \*errCode, long timeout=0) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_RetrieveEncryptedPIN](#ab801c0bcc6976c3b40114c34b7f89c53) (u_char REP_HostId, [PINBlockParams](#structcom__verifone__seccmd_1_1_p_i_n_block_params) \*pREP_PINBlockParams, uint16_t REP_Flags, [PropData](#structcom__verifone__seccmd_1_1_prop_data) REP_PropData, [EncPINBlock](#structcom__verifone__seccmd_1_1_enc_p_i_n_block) \*pREP_encPIN, [Ksn](#structcom__verifone__seccmd_1_1_ksn) \*pREP_KSN, uint8_t \*errCode, long timeout) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_GetVersions](#acbda26bbc5a491c6cc45e05e801e0c43) (std::string \*pVersions, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| const <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> char \*  | [Sec_GetVersion](#aac3397523242fcae1a15786ff8f5aa09) (void) |
| const <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> char \*  | [Sec_GetSvcVersion](#ac17ac87391e0a1843fab4825be72b151) (void) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_SetKSId](#a88e049aa8e79d431c600e78fee76a969) (u_char HostId, uint8_t ksid) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_SetDUKPTMask](#ad71befc1abbf8dad13f233b4730c8f08) (u_char HostId, [DUKPTmask](#structcom__verifone__seccmd_1_1_d_u_k_p_tmask) \*pDUKPTMask, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int  | [Sec_IncrementKSN](#a1bdf809486c2ce3ef0e8dc9b4dd97130) (u_char HostId, [Ksn](#structcom__verifone__seccmd_1_1_ksn) \*pKSN, uint8_t \*errCode, long=<a href="libseccmd-comp_8h.md#a749dc153d334bffad7096bca6ff9e540">DEFAULT_COMM_TIMEOUT</a>) |

|               |                                                             |
|---------------|-------------------------------------------------------------|
| Variables     |                                                             |
| const size_t  | [VERSION_BUFF_SIZE](#a175b9ecfa71e6da7225ab7d86e0e05c3) =20 |

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## com_verifone_seccmd::DUKPTmask <a href="#structcom__verifone__seccmd_1_1_d_u_k_p_tmask" id="structcom__verifone__seccmd_1_1_d_u_k_p_tmask"></a>

<p>struct com_verifone_seccmd::DUKPTmask</p>

Parameter container for DUKPT Key masking

| Data Fields |         |                                                      |
|-------------|---------|------------------------------------------------------|
| u_char \*   | maskENC | <p>mask for encryption</p>         |
| u_char \*   | maskMAC | <p>mask for MAC</p>                |
| u_char \*   | maskPIN | <p>mask for PIN</p>                |
| u_char      | sizeE   | <p>size of mask for encryption</p> |
| u_char      | sizeM   | <p>size of mask for MAC</p>        |
| u_char      | sizeP   | <p>size of mask for PIN</p>        |

## com_verifone_seccmd::EncDecData <a href="#structcom__verifone__seccmd_1_1_enc_dec_data" id="structcom__verifone__seccmd_1_1_enc_dec_data"></a>

<p>struct com_verifone_seccmd::EncDecData</p>

Data container for encryption/decryption functions

| Data Fields |  |  |
|----|----|----|
| uint8_t \* | pInData | <p>input buffer</p> |
| uint8_t \* | pOutData | <p>output buffer</p> |
| uint8_t \* | stan | <p>up to 6 bytes, NULL terminated ASCII data, optional, NULL value as default</p> |
| uint8_t \* | tid | <p>up to 8 bytes, NULL terminated ASCII data, optional, NULL value as default</p> |
| u_long | uiInLen | <p>length of input buffer</p> |
| u_long | uiOutLen | <p>length of output buffer</p> |

## com_verifone_seccmd::EncDecDataIV <a href="#structcom__verifone__seccmd_1_1_enc_dec_data_i_v" id="structcom__verifone__seccmd_1_1_enc_dec_data_i_v"></a>

<p>struct com_verifone_seccmd::EncDecDataIV</p>

Data container for encryption/decryption functions

| Data Fields |  |  |
|----|----|----|
| uint8_t \* | IV | <p>IV, optional, NULL value as default {0}</p> |
| uint8_t \* | pInData | <p>input buffer</p> |
| uint8_t \* | pOutData | <p>output buffer</p> |
| u_long | uiInLen | <p>length of input buffer</p> |
| u_long | uiIVLen | <p>length of IV buffer</p> |
| u_long | uiOutLen | <p>length of output buffer</p> |

## com_verifone_seccmd::EncPINBlock <a href="#structcom__verifone__seccmd_1_1_enc_p_i_n_block" id="structcom__verifone__seccmd_1_1_enc_p_i_n_block"></a>

<p>struct com_verifone_seccmd::EncPINBlock</p>

Online PIN Cipher Block container

| Data Fields |  |  |
|----|----|----|
| uint8_t \* | pPINBlock | <p>pointer to data buffer</p> |
| u_char | ucPINBlockLen | <p>\[in\] maximal buffer size, \[out\] length of data stored in pPINBlock buffer</p> |

## com_verifone_seccmd::genMAC <a href="#structcom__verifone__seccmd_1_1gen_m_a_c" id="structcom__verifone__seccmd_1_1gen_m_a_c"></a>

<p>struct com_verifone_seccmd::genMAC</p>

MAC container for MAC calculation/verification

| Data Fields |          |                                           |
|-------------|----------|-------------------------------------------|
| uint8_t \*  | pMAC     | <p>MAC buffer</p>       |
| u_char      | ucMACLen | <p>size of MAC data</p> |

## com_verifone_seccmd::Ksn <a href="#structcom__verifone__seccmd_1_1_ksn" id="structcom__verifone__seccmd_1_1_ksn"></a>

<p>struct com_verifone_seccmd::Ksn</p>

Parameter container for DUKPT Key Serial Number (KSN)

| Data Fields |  |  |
|----|----|----|
| u_char | KSN\[<a href="sec2_8h.md#a39c92888160f6810dc7fed5fea7417f4">KSN_SIZE</a>\] |  |

## com_verifone_seccmd::Ksn_v2 <a href="#structcom__verifone__seccmd_1_1_ksn__v2" id="structcom__verifone__seccmd_1_1_ksn__v2"></a>

<p>struct com_verifone_seccmd::Ksn_v2</p>

Parameter container for DUKPT Key Serial Number (KSN), version 2

| Data Fields |        |     |
|-------------|--------|-----|
| u_char \*   | KSN    |     |
| u_long      | KSNLen |     |

## com_verifone_seccmd::MACData <a href="#structcom__verifone__seccmd_1_1_m_a_c_data" id="structcom__verifone__seccmd_1_1_m_a_c_data"></a>

<p>struct com_verifone_seccmd::MACData</p>

Data container for MAC calculation/verification

| Data Fields |       |                                                 |
|-------------|-------|-------------------------------------------------|
| uint8_t \*  | pData | <p>input buffer</p>           |
| u_long      | uiLen | <p>length of input buffer</p> |

## com_verifone_seccmd::PINBlockParams <a href="#structcom__verifone__seccmd_1_1_p_i_n_block_params" id="structcom__verifone__seccmd_1_1_p_i_n_block_params"></a>

<p>struct com_verifone_seccmd::PINBlockParams</p>

Parameter container for PIN block using in PIN entry/retrieving functions

| Data Fields |  |  |
|----|----|----|
| u_char | PinBlockFormat |  |
| u_char \* | pPAN | <p>pointer to NULL terminated string containing PAN (19 digits max)</p> |
| u_char \* | pSTAN | <p>pointer to NULL terminated string containing STAN (6 digits max)</p> |
| u_char | TransAmount\[<a href="sec2_8h.md#a733b5fa0159e0f063543d9be2aa3158b">TRANS_AMOUNT_SIZE</a>\] | <p>Used only for Sec_RetrieveEncryptedPIN - 6 bytes BCD transaction amount</p> |

## com_verifone_seccmd::PropData <a href="#structcom__verifone__seccmd_1_1_prop_data" id="structcom__verifone__seccmd_1_1_prop_data"></a>

<p>struct com_verifone_seccmd::PropData</p>

Proprietary data passed to VSS scripts

| Data Fields |               |     |
|-------------|---------------|-----|
| uint8_t \*  | pPropData     |     |
| u_long      | uiPropDataLen |     |

## com_verifone_seccmd::SecConfig <a href="#structcom__verifone__seccmd_1_1_sec_config" id="structcom__verifone__seccmd_1_1_sec_config"></a>

<p>struct com_verifone_seccmd::SecConfig</p>

structure of security configuration

| Data Fields |  |  |
|----|----|----|
| u_char | DataAlgo | <p>data algorithm, 1 = Single DES; 2 = 3 DES; 3 = AES</p> |
| u_char | KeyManagement | <p>key management, 1 = MSK; 2 = DUKPT</p> |
| u_char | PINAlgo | <p>PIN algorithm, 1 = Single DES; 2 = 3 DES; 3 = AES</p> |
| u_char | PinBlockFormat | <p>PIN block format, 0 = ISO-0; 1 = ISO-1; 2 = ISO-2; 3 = ISO-3</p> |
| u_char | PinEntryType | <p>PIN entry type, 0 = PIN Mandatory; 1 = PIN Optional; 2 = PIN Optional - 0-Length PIN Encryption; 3 = 0-Length PIN</p> |
| u_char | ScriptIdent\[<a href="libseccmd-comp_8h.md#abafc8860bbd8d44da76d2e9153138077">SCRIPT_NAME_LENGTH</a>\] | <p>script identifier</p> |

## EnumerationType Documentation {#enumeration-type-documentation}

## SecCmd_errors <a href="#a37f4111ddad314e8d0d664c1c4ec3a0a" id="a37f4111ddad314e8d0d664c1c4ec3a0a"></a>

<p>enum [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a)</p>

Error codes

| Enumerator       |                             |
|------------------|-----------------------------|
| SC_SUCCESS       | <p>0</p>  |
| SC_ERROR         | <p>-1</p> |
| SC_WRONG_PAR     | <p>-2</p> |
| SC_SEND_FAILED   | <p>-3</p> |
| SC_RECBUF_SMALL  | <p>-4</p> |
| SC_TIMER_ERROR   | <p>-5</p> |

## FunctionDocumentation {#function-documentation}

## convDsp2Hex() <a href="#a458e25c100e2be6e98615bbf37b61bf5" id="a458e25c100e2be6e98615bbf37b61bf5"></a>

<p>int com_verifone_seccmd::convDsp2Hex</p>

inline

## getCompatibleCode() <a href="#af55a5b4c8e099d741d4c38493fee3f3d" id="af55a5b4c8e099d741d4c38493fee3f3d"></a>

<p>uint8_t com_verifone_seccmd::getCompatibleCode</p>

inline

## getCompatibleReturn()\[1/2\] <a href="#ad034b089a8b4c935b2d8dfd64b3ae7b2" id="ad034b089a8b4c935b2d8dfd64b3ae7b2"></a> {#getcompatiblereturn-12}

<p>int com_verifone_seccmd::getCompatibleReturn</p>

inline

## getCompatibleReturn()\[2/2\] <a href="#ab920b3ec278fd494f64959ea64f02469" id="ab920b3ec278fd494f64959ea64f02469"></a> {#getcompatiblereturn-22}

<p>int com_verifone_seccmd::getCompatibleReturn</p>

inline

## getKsn_v2() <a href="#a50a6ff38602b3fc92bfdb0743b361c7e" id="a50a6ff38602b3fc92bfdb0743b361c7e"></a>

<p>[Ksn_v2](#structcom__verifone__seccmd_1_1_ksn__v2) com_verifone_seccmd::getKsn_v2</p>

inline

## hex2binCH() <a href="#a40857c3b0bad84b00cb6e8aa0ec585e0" id="a40857c3b0bad84b00cb6e8aa0ec585e0"></a>

<p>bool com_verifone_seccmd::hex2binCH</p>

inline

## Sec_AS2805KeyMgmnt() <a href="#a6db6f20b1810117273ba926c668abe09" id="a6db6f20b1810117273ba926c668abe09"></a>

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_AS2805KeyMgmnt</p>

inline

## Sec_Close() <a href="#aed03f5425bde3f1404d4b97f8175c39f" id="aed03f5425bde3f1404d4b97f8175c39f"></a>

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_Close</p>

inline

Generic interface to close Encryption Module

**Parameters**

\[in\] **HostId** - handle to encryption scheme \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_DecryptData()\[1/3\] <a href="#a65bb1be7511682df1bf08f5c67ba1af8" id="a65bb1be7511682df1bf08f5c67ba1af8"></a> {#sec_decryptdata-13}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_DecryptData</p>

inline

## Sec_DecryptData()\[2/3\] <a href="#a492a6884d5b4ec1c86a16d36847f9d35" id="a492a6884d5b4ec1c86a16d36847f9d35"></a> {#sec_decryptdata-23}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_DecryptData</p>

inline

## Sec_DecryptData()\[3/3\] <a href="#abd1a0b2921b3987ea04a3554f9b01654" id="abd1a0b2921b3987ea04a3554f9b01654"></a> {#sec_decryptdata-33}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_DecryptData</p>

inline

SecApp, decrypt data

**Parameters**

\[in\] **HostId** - Host Id to set \[in\] **pData** - structure with inp/output parameters, IV is optional \[out\] **pData** - structure with inp/output parameters \[out\] **pKSN** - structure of KSN \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_Destroy() <a href="#a9815dafaa8bd5999fbfaa20d7d22e661" id="a9815dafaa8bd5999fbfaa20d7d22e661"></a>

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> void com_verifone_seccmd::Sec_Destroy</p>

inline

compatibility-wrapper for secDestroy

**<a href="deprecated.md#_deprecated000179">Deprecated:</a>**

## Sec_EncryptData()\[1/4\] <a href="#a190633af1f21ffb1cb04305639d9d3a7" id="a190633af1f21ffb1cb04305639d9d3a7"></a> {#sec_encryptdata-14}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_EncryptData</p>

inline

SecApp, encrypt data

**Parameters**

\[in\] **EncD_HostId** - Host Id to set \[in\] **pData** - structure with inp/output parameters, IV is optional \[out\] **pData** \[out\] **pKSN** - structure of KSN \[out\] **errCode** - error code sent from SC \[in\] **timeout** - timeout for receiving answer (in milliseconds) - minimum value: 30000, default value: -1 (wait forever)

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_EncryptData()\[2/4\] <a href="#ae736f0032aa220edc6ad88c6b30fb890" id="ae736f0032aa220edc6ad88c6b30fb890"></a> {#sec_encryptdata-24}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_EncryptData</p>

inline

## Sec_EncryptData()\[3/4\] <a href="#a6281732ab34b79ccb4f9073c9d818357" id="a6281732ab34b79ccb4f9073c9d818357"></a> {#sec_encryptdata-34}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_EncryptData</p>

inline

## Sec_EncryptData()\[4/4\] <a href="#a86bd1dbbaa97e44d4678e2cfbddca9a0" id="a86bd1dbbaa97e44d4678e2cfbddca9a0"></a> {#sec_encryptdata-44}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_EncryptData</p>

inline

SecApp, encrypt data

**Parameters**

\[in\] **HostId** - Host Id to set \[in\] **EncD_EncMode** - encryption mode, useb by encryption module. ADE: 0 - ECB mode, 1 - CBC mode \[in\] **pData** - structure with inp/output parameters, IV is optional \[out\] **pData** \[out\] **pKSN** - structure of KSN \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_GenerateMAC()\[1/2\] <a href="#a7891606a905ab9bdfb3aba52676b8c59" id="a7891606a905ab9bdfb3aba52676b8c59"></a> {#sec_generatemac-12}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_GenerateMAC</p>

inline

## Sec_GenerateMAC()\[2/2\] <a href="#a415992011cbd54131165ca25801edb8a" id="a415992011cbd54131165ca25801edb8a"></a> {#sec_generatemac-22}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_GenerateMAC</p>

inline

SecApp, GenerateMAC

**Parameters**

\[in\] **HostId** - Host Id to set 1 - yes \[in\] **GMAC_MACMode** - MAC mode Not IPP: parameter is not used! IPP: 5 - IPP, ASCII Data 7 - IPP, Binary Data \[in\] **pData** - structure of data to be MAC-ed \[out\] **pMAC** - structure of MAC length and MAC, MAC output format: Not IPP: BIN format IPP: GMAC_MACMode=5: ASCII format GMAC_MACMode=7: BIN format \[out\] **pKSN** - structure of KSN \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_GetKeyData()\[1/2\] <a href="#a121293b0e74ff6a415ee448c9985e819" id="a121293b0e74ff6a415ee448c9985e819"></a> {#sec_getkeydata-12}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_GetKeyData</p>

inline

## Sec_GetKeyData()\[2/2\] <a href="#a3deda460871c6786f09216ea917dbfe0" id="a3deda460871c6786f09216ea917dbfe0"></a> {#sec_getkeydata-22}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_GetKeyData</p>

inline

SecApp, Get Key Data

**Parameters**

\[in\] **HostId** - Host Id to set \[in\] **GKD_KeyType** - key type values of key_type_t 4 - TCU RSA Public Key 12 - Encrypted KI (Format 0) 13 - Encrypted KI (Format 1) 14 - Encrypted KI (Format 2) 15 - Encrypted PPID 16 - Encrypted PPASN 17 - KVC of KIA 18 - KVC of KEK1 19 - KVC of KT \[in\] **kekFlag** - indicates use of KEK1 or KEK2 for Key Type 11 \[in\] **uiOutBufLen** - maximal buffer length \[out\] **errCode** - error code sent from SC \[out\] **aOutBuf** - Key data, specific for each key type \[out\] **uiOutBufLen** - data length

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_GetSvcVersion() <a href="#ac17ac87391e0a1843fab4825be72b151" id="ac17ac87391e0a1843fab4825be72b151"></a>

<p>const <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> char\* com_verifone_seccmd::Sec_GetSvcVersion</p>

inline

SecApp, get security service version

### Returns

version string: \<major\>.\<minor\>.\<patch\>-\<build\>

## Sec_GetVersion() <a href="#aac3397523242fcae1a15786ff8f5aa09" id="aac3397523242fcae1a15786ff8f5aa09"></a>

<p>const <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> char\* com_verifone_seccmd::Sec_GetVersion</p>

inline

SecApp, get API library version

### Returns

version string: \<major\>.\<minor\>.\<patch\>-\<build\>

## Sec_GetVersions() <a href="#acbda26bbc5a491c6cc45e05e801e0c43" id="acbda26bbc5a491c6cc45e05e801e0c43"></a>

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_GetVersions</p>

inline

SecApp, get components versions

**Parameters**

\[out\] **pVersions** - version string in format (component separator:\';\'): API:MAJOR.MINOR.BUILD;SC:MAJOR.MINOR.BUILD;HOSTIDn:name_n.vso;\...;HOSTIDm:name_m.vso; (where n,m are from 1,2, \..., k), key words are: API - API library SC - security component HOSTID - host id \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_IncrementKSN() <a href="#a1bdf809486c2ce3ef0e8dc9b4dd97130" id="a1bdf809486c2ce3ef0e8dc9b4dd97130"></a>

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_IncrementKSN</p>

inline

SecApp, Increment KSN (Key Serial Number)

**Parameters**

\[in\] **HostId** - Host Id to set \[out\] **pKSN** - Key Serial Number \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_Init() <a href="#a9871b00715c29b88812f6cbe88657a21" id="a9871b00715c29b88812f6cbe88657a21"></a>

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_Init</p>

inline

compatibility-wrapper for secInit

**<a href="deprecated.md#_deprecated000178">Deprecated:</a>**

## Sec_Open()\[1/2\] <a href="#a16e0564f479c004161cf826dbc6670b1" id="a16e0564f479c004161cf826dbc6670b1"></a> {#sec_open-12}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> u_char com_verifone_seccmd::Sec_Open</p>

inline

Generic interface to open Encryption Module based on Host Name

**Parameters**

\[in\] **schemaName** - name of encryption scheme \[out\] **errCode** - error code sent from SC

### Returns

a handle to encrypto scheme 0 - error case

## Sec_Open()\[2/2\] <a href="#a84745bd9107eed389a508007daa6c73f" id="a84745bd9107eed389a508007daa6c73f"></a> {#sec_open-22}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> u_char com_verifone_seccmd::Sec_Open</p>

inline

## Sec_RetrieveEncryptedPIN()\[1/3\] <a href="#a9a8932b53f4d3b1c33fe80636f25abb5" id="a9a8932b53f4d3b1c33fe80636f25abb5"></a> {#sec_retrieveencryptedpin-13}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_RetrieveEncryptedPIN</p>

inline

SecApp, RetrieveEncryptedPIN

**Parameters**

\[in\] **HostId** - Host Id to set \[in\] **pREP_PINBlockParams** - structure of PIN block parameter:pPAN - pointer to PAN (NULL terminated string, 20 digits max). Only the last 12 digits, except the last digit (Luhn value), are used (Luhn value is not checked)pSTAN - pointer to STAN (NULL terminated string, 12 digits max), mandatory if PIN block format ISO-1 is usedPinBlockFormat - PIN block format 0 = ISO-0 1 = ISO-1 2 = ISO-2 3 = ISO-3TransAmount - Transaction Amount - 6 bytes BCD coded \[in\] **REP_Flags** - flagsBit 0 = bypass KSN incrementation in case of DUKPT support (=0x0001) \[in\] **REP_PropData** - proprietary data passed to VSS scripts \[out\] **pREP_encPIN** - online PIN Cipher Block \[out\] **pREP_KSN** - structure of KSN \[out\] **errCode** - error code sent from SCIPP relevant: \[in\] **HostId** - Host Id to set \[out\] **pREP_encPIN** - online PIN Cipher Block. Data are provided in BIN format. Output data depend on key management scheme:MSK: 20 Bytes (PINLength\[2\], PINFormat\[2\], PINBlock\[16\])DUKPT: 16 Bytes PINBlock \[out\] **pREP_KSN** - structure v2 of KSN. Data are provided in BIN format \[out\] **errCode** - error code sent from SC Note: In case of IPP usage error codes provided by the OS IPP component are returned (see \'MS Packet 71\' or \'DUKPT Packet 75\' in \'Verix eVo Volume I:Operations Systems, Programmers Guide, Appendix D: IPP Communications Packets\')

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_RetrieveEncryptedPIN()\[2/3\] <a href="#aaf7c25deeb41bbd8404477ccb27794f1" id="aaf7c25deeb41bbd8404477ccb27794f1"></a> {#sec_retrieveencryptedpin-23}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_RetrieveEncryptedPIN</p>

inline

## Sec_RetrieveEncryptedPIN()\[3/3\] <a href="#ab801c0bcc6976c3b40114c34b7f89c53" id="ab801c0bcc6976c3b40114c34b7f89c53"></a> {#sec_retrieveencryptedpin-33}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_RetrieveEncryptedPIN</p>

inline

## Sec_SelectHostConf() <a href="#ae805c757835a3b0a1b9e8adfc5ab574c" id="ae805c757835a3b0a1b9e8adfc5ab574c"></a>

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_SelectHostConf</p>

inline

SecApp, Selecting host configuration

**Parameters**

\[in\] **HostId** - Host Id to set \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_SetDUKPTMask() <a href="#ad71befc1abbf8dad13f233b4730c8f08" id="ad71befc1abbf8dad13f233b4730c8f08"></a>

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_SetDUKPTMask</p>

inline

SecApp, set DUKPT mask

**Parameters**

\[in\] **HostId** - Host Id to set \[in\] **pDUKPTMask** - masking of PIN, MAC and ENC DUKPT key \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_SetKSId() <a href="#a88e049aa8e79d431c600e78fee76a969" id="a88e049aa8e79d431c600e78fee76a969"></a>

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_SetKSId</p>

inline

SecApp, Set key set ID - used in

- VSS for UpdateKey, Enc/Decryption, MAC Gen/Verification operations

- IPP for UpdateKey, MAC Generation, PIN Encryption operations **Parameters**

  \[in\] **HostId** - Host Id to set \[in\] **ksid** - key set id1-8 for VSS1-10 for IPPMSK1-3 for IPPDUKPT

  ### Returns

  0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_UpdateKey()\[1/4\] <a href="#a433ea1cf1bb2d33de167c140f01239ed" id="a433ea1cf1bb2d33de167c140f01239ed"></a> {#sec_updatekey-14}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_UpdateKey</p>

inline

SecApp, update key

**Parameters**

\[in\] **HostId** - Host Id to set \[in\] **UpK_KeyType** - key type (IPP relevant: KEY_TYPE_PPK, KEY_TYPE_MGK) \[in\] **kekFlag** - indicates use of KEK1 or KEK2 for Key Type 11 \[in\] **aKeyData** - key data to store in SC (NULL is also allowed). For IPP usage data have to be provided in ASCII format. \[in\] **uiKeyDataLen** - length of the key data \[in\] **KSN** - KSN for new DUKPT key (variable length). For IPP usage data have to be provided in BIN format. \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_UpdateKey()\[2/4\] <a href="#abd6053c9cceb8c43464afebdd6a39310" id="abd6053c9cceb8c43464afebdd6a39310"></a> {#sec_updatekey-24}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_UpdateKey</p>

inline

## Sec_UpdateKey()\[3/4\] <a href="#a4e6b189775578f026dcac179a8b32002" id="a4e6b189775578f026dcac179a8b32002"></a> {#sec_updatekey-34}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_UpdateKey</p>

inline

## Sec_UpdateKey()\[4/4\] <a href="#a772353b1140cb46753086ceddabf7d67" id="a772353b1140cb46753086ceddabf7d67"></a> {#sec_updatekey-44}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_UpdateKey</p>

inline

## Sec_VerifyMAC()\[1/2\] <a href="#a8a524ef7b08dde1a6e71492a44f1ea6b" id="a8a524ef7b08dde1a6e71492a44f1ea6b"></a> {#sec_verifymac-12}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_VerifyMAC</p>

inline

SecApp, VerifyMAC

**Parameters**

\[in\] **HostId** - Host Id to set \[in\] **VMAC_MACMode** - parameter is not used! \[in\] **pData** - structure of data to be MAC-ed \[in\] **MAC** - structure of MAC length and MAC \[out\] **pKSN** - structure of KSN \[out\] **errCode** - error code sent from SC

### Returns

0 in success case, other value in error case (see [SecCmd_errors](#a37f4111ddad314e8d0d664c1c4ec3a0a))

## Sec_VerifyMAC()\[2/2\] <a href="#a5fd605ed60e48329c3b82f0f46270f18" id="a5fd605ed60e48329c3b82f0f46270f18"></a> {#sec_verifymac-22}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> int com_verifone_seccmd::Sec_VerifyMAC</p>

inline

## secClearTransactionData() <a href="#ac31ab997e8dc434d72e427a5d841186a" id="ac31ab997e8dc434d72e427a5d841186a"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secClearTransactionData</p>

Clear all TransactionData tags except TagHostName and TagKeySetID

**Parameters**

\[in\] **handle**

### Returns

## secClose() <a href="#a34f8a9e3b92467759d0bbdbf7b2dd8c0" id="a34f8a9e3b92467759d0bbdbf7b2dd8c0"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secClose</p>

Close a Security Module

## secDecryptData() <a href="#a9cd679dc9763b06566dff28b3d3268c9" id="a9cd679dc9763b06566dff28b3d3268c9"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secDecryptData</p>

Decrypt data

**Parameters**

\[in\] **handle** \[in\] **encData** \[out\] **plainData** \[in,out\] **iv** try to use this IV, empty for configured default. get used IV back. Relevant for module VSS \[out\] **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema VSS

### Returns

Module related parameter descriptions can be found in chapter <a href="pg_sec_users_guide.md#subsubsec_security_security_modules">Security Modules</a>.

## secDestroy() <a href="#a644b5479904871433cffef9145c53dad" id="a644b5479904871433cffef9145c53dad"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secDestroy</p>

Generic interface to close IPC connection to Security Service

### Returns

## secDigest() <a href="#a0cca8cfbb868cbf34d35afabe5af29af" id="a0cca8cfbb868cbf34d35afabe5af29af"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secDigest</p>

Perform digest operations

**Parameters**

\[in\] **type** of digests algorithm. Supported types defined as SEC_DIG\_\... in sec2.h \[in\] **data** \[out\] **digest** buffer with calculated digits

### Returns

## secEncryptData() <a href="#aa58bc1a6a2056aebd3edc92f3bfcce9d" id="aa58bc1a6a2056aebd3edc92f3bfcce9d"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secEncryptData</p>

Encrypt data

**Parameters**

\[in\] **handle** \[in\] **plainData** \[out\] **encData** the encrypted result of encryption \[in,out\] **iv** try to use this IV, empty for configured default. get used IV back. Relevant for modules VSS and ADE \[out\] **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like VSS DUKPT, ADE

### Returns

Module related parameter descriptions can be found in chapter <a href="pg_sec_users_guide.md#subsubsec_security_security_modules">Security Modules</a>.

## secEncryptTransactionData() <a href="#aaed6fc175245ba31936547cffd988948" id="aaed6fc175245ba31936547cffd988948"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secEncryptTransactionData</p>

Encrypt TransactionData referenced by index

**Parameters**

\[in\] **handle** \[in\] **TDindex** index-key of TransactionData to reference plainData \[out\] **encData** the encrypted result of encryption \[in,out\] **iv** try to use this IV, empty for configured default. get used IV back. Relevant for modules VSS and ADE \[out\] **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like VSS DUKPT, ADE

### Returns

Module related parameter descriptions can be found in chapter <a href="pg_sec_users_guide.md#subsubsec_security_security_modules">Security Modules</a>.

## secGenerateRandom() <a href="#a689199c9e7e4d8a553f3ab2f379b812e" id="a689199c9e7e4d8a553f3ab2f379b812e"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secGenerateRandom</p>

Get N bytes of random data

**Parameters**

\[in\] **data** buffer for random data \[in\] **count** number of random bytes to generate \[out\] **data** buffer with random data. Vector is resized to count bytes and filled with random data

### Returns

## secGetApiVersion() <a href="#a5ea5cbc9daa2ea726212741cd596b294" id="a5ea5cbc9daa2ea726212741cd596b294"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> std::string com_verifone_seccmd::secGetApiVersion</p>

Get API library version

### Returns

version string: \<major\>.\<minor\>.\<patch\>-\<build\>

## secGetKeyData() <a href="#aff0a109c58ef5637c7bf3ffc0722c48d" id="aff0a109c58ef5637c7bf3ffc0722c48d"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secGetKeyData</p>

Get key relevant information related to an opened Security Module (key file path, \...)

**Parameters**

\[in\] **handle** \[in\] **keyType** \[out\] **out** TLV if keyType is a Bendigo-type \[in\] **kek_flag** optional KEK flag (relevant VOS3 only)

### Returns

## secGetKeyInventory() <a href="#a79b00ea8a8aed3b7950800bf136a1944" id="a79b00ea8a8aed3b7950800bf136a1944"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secGetKeyInventory</p>

Get JSON formatted information about keys related to an opened Security Module (available keys, creation date, \...)

**Parameters**

\[in\] **handle** \[out\] **out** json of all available keys depending on transaction.Output examples can be obtained in the documentation reference part at Output-Example-VSS-MSK, Output-Example-VSS-DUKPT, Output-Example-IPP-MSK, Output-Example-IPP-DUKPT,Output-Example-ADE, Output-Example-RSA and Output-Example-VisaDSP.The corresponding JSON schema can be found at JSON Schema for Output of secGetKeyInventory().

### Returns

## secGetPermission() <a href="#af127868b6268758596f8a2a1ca0aaab3" id="af127868b6268758596f8a2a1ca0aaab3"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secGetPermission</p>

Get Permissions of an TransactionData entry

**Parameters**

\[in\] **handle** \[in\] **key** index - Which entry of TransactionData \[out\] **permissionFlags** values of CTransactionValue::ePermissionFlags

### Returns

## secGetStatus()\[1/2\] <a href="#a5fdc04a9bb61305af440ff6aaa9d4bf2" id="a5fdc04a9bb61305af440ff6aaa9d4bf2"></a> {#secgetstatus-12}

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secGetStatus</p>

Get JSON formatted information about status of Security Component (version, information of existing host configurations, available Security Modules)

**Parameters**

\[out\] **jsonString** An output example can be found at Output example of secGetStatus().The corresponding JSON schema can be found at JSON Schema for Output of secGetStatus(). \[in\] **handle**

### Returns

## secGetStatus()\[2/2\] <a href="#a008e3cde266f576be23846d0c7b729c5" id="a008e3cde266f576be23846d0c7b729c5"></a> {#secgetstatus-22}

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secGetStatus</p>

Get JSON formatted information about status of Security Component (version, information of existing host configurations, available Security Modules)

**Parameters**

\[out\] **jsonString** An output example can be found at Output example of secGetStatus().The corresponding JSON schema can be found at JSON Schema for Output of secGetStatus(). \[in\] **hostName** configuration name, optional. Provide only defined host configuration.

### Returns

## secGetSvcVersion() <a href="#a029d7e16ab6b044379e9568a6c969afa" id="a029d7e16ab6b044379e9568a6c969afa"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> std::string com_verifone_seccmd::secGetSvcVersion</p>

Get Security Service version

### Returns

version string: \<major\>.\<minor\>.\<patch\>-\<build\>

## secGetTransactionValue() <a href="#a85ada2e35c1d1cbf60c05454b88b4b44" id="a85ada2e35c1d1cbf60c05454b88b4b44"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secGetTransactionValue</p>

Get TransactionData of transaction of a given handle

- h3. Permissions Reading Permissions will be checked They can be reduced by configuration or during putting the data (see SecTransactionValue::restrictPermissions)

**Parameters**

\[in\] **handle** \[in\] **key** \[out\] **date**

### Returns

\[unsupported block\]

## secGetVersions() <a href="#a5499423d685ed9deb7ace9c22114adf2" id="a5499423d685ed9deb7ace9c22114adf2"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secGetVersions</p>

Get versions of components (API library, Security Component, Host Names/VSS)

**Parameters**

\[out\] **versions** - version string in format (component separator:\';\'):

### Returns

## secIncrementKSN() <a href="#a77860b4cffed3ba159a5c124c8e2cde2" id="a77860b4cffed3ba159a5c124c8e2cde2"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secIncrementKSN</p>

Increment the KSN

**Parameters**

\[in\] **handle** \[out\] **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for VSS DUKPT encryption schema

### Returns

Module related parameter descriptions can be found in chapter <a href="pg_sec_users_guide.md#subsubsec_security_security_modules">Security Modules</a>.

## secInit() <a href="#ab649bee85abb5cb4085c3958f279483d" id="ab649bee85abb5cb4085c3958f279483d"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secInit</p>

Generic interface to establish an IPC communication to Security Service

### Returns

## secOpen()\[1/2\] <a href="#a0214e263380c9c6e10f3c0afc4f53e8a" id="a0214e263380c9c6e10f3c0afc4f53e8a"></a> {#secopen-12}

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secOpen</p>

## secOpen()\[2/2\] <a href="#a8091d419f67f4b53630f2fabe1888a09" id="a8091d419f67f4b53630f2fabe1888a09"></a> {#secopen-22}

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secOpen</p>

Open a Host configuration with module name refernced in the configuration For compatibility only: hostname will be handled as Transaction value

## secPutTransactionData() <a href="#a6bc0d39e1739680282d33d3d68df84c9" id="a6bc0d39e1739680282d33d3d68df84c9"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="libsec_8h.md#aee3bc4f656b4576272b4ad069ed0aa01">VOS3_Depricated</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secPutTransactionData</p>

Insert additionally TransactionData of transaction of a given handle (merge)

h3. Permissions for each Value of given Data Writing Permissions will be checked:

# Configuration will be checked <a href="#autotoc_md45" id="autotoc_md45"></a>

# if there is an existing entry it will be checked if overwriting is allowed <a href="#autotoc_md46" id="autotoc_md46"></a>

**Parameters**

\[in\] **handle** \[in\] **taData**

### Returns

EsecTAWriteProtected if writing not allowed

## secRetrieveEncryptedPIN() <a href="#ab3d26136c64019fd223aa9ccd120d4e0" id="ab3d26136c64019fd223aa9ccd120d4e0"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secRetrieveEncryptedPIN</p>

Retrieve an encrypted PIN block

**Parameters**

\[in\] **handle** \[in\] **pinBlockFormat** value of pin_block_format_t \[out\] **pinBlk** \[out\] **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like VSS DUKPT and IPP DUKPT

### Returns

Module related parameter descriptions can be found in chapter <a href="pg_sec_users_guide.md#subsubsec_security_security_modules">Security Modules</a>.

## secSetKSId() <a href="#a75edecb24f839e04debb1aa5e47b5714" id="a75edecb24f839e04debb1aa5e47b5714"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secSetKSId</p>

Set the Key Set ID

## secSign() <a href="#a66a1992f617359f2e4a96f4980478f82" id="a66a1992f617359f2e4a96f4980478f82"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secSign</p>

Generate a cryptographic signature of given data (in most cases this will be MAC generation)

**Parameters**

\[in\] **handle** \[in\] **data** data to be signed \[out\] **signature** MAC \[in,out\] **iv** try to use this IV, empty for configured default. get used IV back. Relevant for modules VSS and SRED \[out\] **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like VSS DUKPT and SRED

### Returns

Module related parameter descriptions can be found in chapter <a href="pg_sec_users_guide.md#subsubsec_security_security_modules">Security Modules</a>.

## secUpdateKey()\[1/2\] <a href="#afeef2dc9bf85b090e712c03d0314b095" id="afeef2dc9bf85b090e712c03d0314b095"></a> {#secupdatekey-12}

<p><a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secUpdateKey</p>

inline

## secUpdateKey()\[2/2\] <a href="#ab249c77069e9fc9946745fd4c63d5e39" id="ab249c77069e9fc9946745fd4c63d5e39"></a> {#secupdatekey-22}

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secUpdateKey</p>

Load a key

**Parameters**

\[in\] **handle** \[in\] **keyType** \[in\] **keyData** - binary data (e.g. 8Byte for 1DES, 16Byte for 3DES and 2TDEA-ADE-DUKPT key, 120Byte for GISKE)TLV if keyType is a Bendigo-type\'KSN incrementation\' with keyType=KEY_TYPE_DUKPT effects KSN incrementation \[in,out\] **propData** - proprietary datain: in case of DUKPT (modules VSS, IPP DUKPT part, ADE): KSN binary data (maybe padded with 0xFF, 0xFF))out: in case of VSS-MSK and VSS-DUKPT (module VSS): received data from an assigned Update Finalize macro

### Returns

Module related parameter descriptions can be found in chapter <a href="pg_sec_users_guide.md#subsubsec_security_security_modules">Security Modules</a>.

## secVerify() <a href="#a5470ce89fa947abc445f251ae0b2387b" id="a5470ce89fa947abc445f251ae0b2387b"></a>

<p><a href="seclogging_8h.md#abcde1739ffe76c2296e21ce0b20f0ad3">DllSpecSEC</a> <a href="namespacecom__adksec__cmd.md#af511ddd4237541a758df48299546d49a">secError</a> com_verifone_seccmd::secVerify</p>

Verify a cryptographic signature of given data (in most cases this will be MAC verification)

**Parameters**

\[in\] **handle** \[in\] **data** \[in\] **signature** \[in,out\] **iv** try to use this IV, empty for configured default. get used IV back. Relevant for modules VSS and SRED \[out\] **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like VSS DUKPT and SRED

### Returns

Module related parameter descriptions can be found in chapter <a href="pg_sec_users_guide.md#subsubsec_security_security_modules">Security Modules</a>.

## VariableDocumentation {#variable-documentation}

## VERSION_BUFF_SIZE <a href="#a175b9ecfa71e6da7225ab7d86e0e05c3" id="a175b9ecfa71e6da7225ab7d86e0e05c3"></a>

<p>const size_t VERSION_BUFF_SIZE =20</p>

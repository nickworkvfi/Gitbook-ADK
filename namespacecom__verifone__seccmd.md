---
title: com_verifone_seccmd

---

# com_verifone_seccmd

**Module:** **[Com_verifone_seccmd](group__com__verifone__seccmd.md)**



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[com_verifone_seccmd::DUKPTmask](structcom__verifone__seccmd_1_1_d_u_k_p_tmask.md)**  |
| struct | **[com_verifone_seccmd::EncDecData](structcom__verifone__seccmd_1_1_enc_dec_data.md)**  |
| struct | **[com_verifone_seccmd::EncDecDataIV](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md)**  |
| struct | **[com_verifone_seccmd::EncPINBlock](structcom__verifone__seccmd_1_1_enc_p_i_n_block.md)**  |
| struct | **[com_verifone_seccmd::genMAC](structcom__verifone__seccmd_1_1gen_m_a_c.md)**  |
| struct | **[com_verifone_seccmd::Ksn](structcom__verifone__seccmd_1_1_ksn.md)**  |
| struct | **[com_verifone_seccmd::Ksn_v2](structcom__verifone__seccmd_1_1_ksn__v2.md)**  |
| struct | **[com_verifone_seccmd::MACData](structcom__verifone__seccmd_1_1_m_a_c_data.md)**  |
| struct | **[com_verifone_seccmd::PINBlockParams](structcom__verifone__seccmd_1_1_p_i_n_block_params.md)**  |
| struct | **[com_verifone_seccmd::PropData](structcom__verifone__seccmd_1_1_prop_data.md)**  |
| struct | **[com_verifone_seccmd::SecConfig](structcom__verifone__seccmd_1_1_sec_config.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)** { SC_SUCCESS = 0, SC_ERROR = -1, SC_WRONG_PAR = -2, SC_SEND_FAILED = -3, SC_RECBUF_SMALL = -4, SC_TIMER_ERROR = -5} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secInit](namespacecom__verifone__seccmd.md#function-secinit)**() |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secDestroy](namespacecom__verifone__seccmd.md#function-secdestroy)**() |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secOpen](namespacecom__verifone__seccmd.md#function-secopen)**(const std::string & , [secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) & handle) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[VOS3_Depricated](libsec_8h.md#define-vos3-depricated)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secOpen](namespacecom__verifone__seccmd.md#function-secopen)**(const [SecTransactionData_t](namespacecom__adksec__cmd.md#typedef-sectransactiondata-t) & td, [secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) & handle) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secClose](namespacecom__verifone__seccmd.md#function-secclose)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secSetKSId](namespacecom__verifone__seccmd.md#function-secsetksid)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, uint32_t ksid) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secGetKeyInventory](namespacecom__verifone__seccmd.md#function-secgetkeyinventory)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, std::string & out) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secGetKeyData](namespacecom__verifone__seccmd.md#function-secgetkeydata)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, [com_verifone_host::key_type_t](namespacecom__verifone__host.md#typedef-key-type-t) keyType, std::vector< uint8_t > & out) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secUpdateKey](namespacecom__verifone__seccmd.md#function-secupdatekey)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, [com_verifone_host::key_type_t](namespacecom__verifone__host.md#typedef-key-type-t) keyType, const std::vector< uint8_t > & keyData, std::vector< uint8_t > & propData) |
| [secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secUpdateKey](namespacecom__verifone__seccmd.md#function-secupdatekey)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, [com_verifone_host::key_type_t](namespacecom__verifone__host.md#typedef-key-type-t) keyType, const std::vector< uint8_t > & keyData) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secEncryptData](namespacecom__verifone__seccmd.md#function-secencryptdata)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, const std::vector< uint8_t > & plainData, std::vector< uint8_t > & encData, std::vector< uint8_t > & iv, std::vector< uint8_t > & ksn) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[VOS3_Depricated](libsec_8h.md#define-vos3-depricated)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secEncryptTransactionData](namespacecom__verifone__seccmd.md#function-secencrypttransactiondata)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) & TDindex, std::vector< uint8_t > & encData, std::vector< uint8_t > & iv, std::vector< uint8_t > & ksn) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secDecryptData](namespacecom__verifone__seccmd.md#function-secdecryptdata)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, const std::vector< uint8_t > & encData, std::vector< uint8_t > & plainData, std::vector< uint8_t > & iv, std::vector< uint8_t > & ksn) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secSign](namespacecom__verifone__seccmd.md#function-secsign)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, const std::vector< uint8_t > & data, std::vector< uint8_t > & signature, std::vector< uint8_t > & iv, std::vector< uint8_t > & ksn) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secVerify](namespacecom__verifone__seccmd.md#function-secverify)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, const std::vector< uint8_t > & data, const std::vector< uint8_t > & signature, std::vector< uint8_t > & iv, std::vector< uint8_t > & ksn) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secRetrieveEncryptedPIN](namespacecom__verifone__seccmd.md#function-secretrieveencryptedpin)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, const uint8_t pinBlockFormat, std::vector< unsigned char > & pinBlk, std::vector< uint8_t > & ksn) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secIncrementKSN](namespacecom__verifone__seccmd.md#function-secincrementksn)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, std::vector< uint8_t > & ksn) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secGetStatus](namespacecom__verifone__seccmd.md#function-secgetstatus)**(std::string & jsonString, std::string hostName ="") |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secGetStatus](namespacecom__verifone__seccmd.md#function-secgetstatus)**(std::string & jsonString, [secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secGetVersions](namespacecom__verifone__seccmd.md#function-secgetversions)**(std::string & versions) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) std::string | **[secGetApiVersion](namespacecom__verifone__seccmd.md#function-secgetapiversion)**(void ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) std::string | **[secGetSvcVersion](namespacecom__verifone__seccmd.md#function-secgetsvcversion)**(void ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[VOS3_Depricated](libsec_8h.md#define-vos3-depricated)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secClearTransactionData](namespacecom__verifone__seccmd.md#function-seccleartransactiondata)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[VOS3_Depricated](libsec_8h.md#define-vos3-depricated)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secPutTransactionData](namespacecom__verifone__seccmd.md#function-secputtransactiondata)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, const [SecTransactionData_t](namespacecom__adksec__cmd.md#typedef-sectransactiondata-t) & taData) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[VOS3_Depricated](libsec_8h.md#define-vos3-depricated)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secGetTransactionValue](namespacecom__verifone__seccmd.md#function-secgettransactionvalue)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) & key, [SecTransactionValue](namespacecom__adksec__cmd.md#typedef-sectransactionvalue) & date) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[VOS3_Depricated](libsec_8h.md#define-vos3-depricated)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secGetPermission](namespacecom__verifone__seccmd.md#function-secgetpermission)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) & key, [bitMask_t](namespacecom__adksec__cmd.md#typedef-bitmask-t) & permissionFlags) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secGenerateRandom](namespacecom__verifone__seccmd.md#function-secgeneraterandom)**(std::vector< uint8_t > & data, int count) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secDigest](namespacecom__verifone__seccmd.md#function-secdigest)**(int type, std::vector< uint8_t > & data, std::vector< uint8_t > & digest) |
| bool | **[hex2binCH](namespacecom__verifone__seccmd.md#function-hex2binch)**(char in, unsigned char * out) |
| int | **[convDsp2Hex](namespacecom__verifone__seccmd.md#function-convdsp2hex)**(const char * dsp, size_t dsp_len, char * hex, const size_t max_hex_len) |
| uint8_t | **[getCompatibleCode](namespacecom__verifone__seccmd.md#function-getcompatiblecode)**([secError](namespacecom__adksec__cmd.md#enum-secerror) error) |
| int | **[getCompatibleReturn](namespacecom__verifone__seccmd.md#function-getcompatiblereturn)**([secError](namespacecom__adksec__cmd.md#enum-secerror) newError) |
| int | **[getCompatibleReturn](namespacecom__verifone__seccmd.md#function-getcompatiblereturn)**([secError](namespacecom__adksec__cmd.md#enum-secerror) newError, uint8_t * oldError) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_Init](namespacecom__verifone__seccmd.md#function-sec-init)**(u_char *  =NULL) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) void | **[Sec_Destroy](namespacecom__verifone__seccmd.md#function-sec-destroy)**() |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) u_char | **[Sec_Open](namespacecom__verifone__seccmd.md#function-sec-open)**(const std::string & schemaName, uint8_t * errCode) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) u_char | **[Sec_Open](namespacecom__verifone__seccmd.md#function-sec-open)**(u_char * schemaName, uint8_t * errCode) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_Close](namespacecom__verifone__seccmd.md#function-sec-close)**(u_char HostId, uint8_t * errCode) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_SelectHostConf](namespacecom__verifone__seccmd.md#function-sec-selecthostconf)**(u_char HostId, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_GetKeyData](namespacecom__verifone__seccmd.md#function-sec-getkeydata)**(u_char HostId, u_char GKD_KeyType, u_char kekFlag, char * aOutBuf, u_long * uiOutBufLen, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_GetKeyData](namespacecom__verifone__seccmd.md#function-sec-getkeydata)**(u_char GKD_HostId, u_char GKD_KeyType, char * aOutBuf, u_long * uiOutBufLen, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| bool | **[is_hex_notation](namespacecom__verifone__seccmd.md#function-is-hex-notation)**(std::string const & s) |
| std::vector< uint8_t > | **[hexString_to_binary](namespacecom__verifone__seccmd.md#function-hexstring-to-binary)**(const std::string & input) |
| std::string | **[binary_to_hexString](namespacecom__verifone__seccmd.md#function-binary-to-hexstring)**(const std::vector< uint8_t > & input) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_UpdateKey](namespacecom__verifone__seccmd.md#function-sec-updatekey)**(u_char HostId, [key_type_t](namespacecom__verifone__host.md#typedef-key-type-t) UpK_KeyType, u_char kekFlag, char * aKeyData, u_long uiKeyDataLen, [Ksn_v2](structcom__verifone__seccmd_1_1_ksn__v2.md) KSN, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [Ksn_v2](structcom__verifone__seccmd_1_1_ksn__v2.md) | **[getKsn_v2](namespacecom__verifone__seccmd.md#function-getksn-v2)**([Ksn](structcom__verifone__seccmd_1_1_ksn.md) * pKSN) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_UpdateKey](namespacecom__verifone__seccmd.md#function-sec-updatekey)**(u_char UpK_HostId, [key_type_t](namespacecom__verifone__host.md#typedef-key-type-t) UpK_KeyType, u_char kekFlag, char * aKeyData, u_long uiKeyDataLen, [Ksn](structcom__verifone__seccmd_1_1_ksn.md) * pKSN, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_UpdateKey](namespacecom__verifone__seccmd.md#function-sec-updatekey)**(u_char UpK_HostId, u_char UpK_KeyType, u_char kekFlag, char * aKeyData, u_long uiKeyDataLen, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_UpdateKey](namespacecom__verifone__seccmd.md#function-sec-updatekey)**(u_char UpK_HostId, u_char UpK_KeyType, char * aKeyData, u_long uiKeyDataLen, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_AS2805KeyMgmnt](namespacecom__verifone__seccmd.md#function-sec-as2805keymgmnt)**(u_char HostId, u_char AS2805_AS2805Func, char * aKeyData, u_long * uiKeyDataLen, u_long , uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_EncryptData](namespacecom__verifone__seccmd.md#function-sec-encryptdata)**(u_char HostId, u_char EncD_EncMode, [EncDecDataIV](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md) * pData, [Ksn](structcom__verifone__seccmd_1_1_ksn.md) * pKSN, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_EncryptData](namespacecom__verifone__seccmd.md#function-sec-encryptdata)**(u_char EncD_HostId, [EncDecDataIV](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md) * pData, [Ksn](structcom__verifone__seccmd_1_1_ksn.md) * pKSN, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_EncryptData](namespacecom__verifone__seccmd.md#function-sec-encryptdata)**(u_char EncD_HostId, [EncDecDataIV](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md) * pData, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_EncryptData](namespacecom__verifone__seccmd.md#function-sec-encryptdata)**(u_char EncD_HostId, u_char EncD_EncMode, [EncDecData](structcom__verifone__seccmd_1_1_enc_dec_data.md) * pData, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_DecryptData](namespacecom__verifone__seccmd.md#function-sec-decryptdata)**(u_char HostId, [EncDecDataIV](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md) * pData, [Ksn](structcom__verifone__seccmd_1_1_ksn.md) * pKSN, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_DecryptData](namespacecom__verifone__seccmd.md#function-sec-decryptdata)**(u_char DecD_HostId, [EncDecDataIV](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md) * pData, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_DecryptData](namespacecom__verifone__seccmd.md#function-sec-decryptdata)**(u_char DecD_HostId, u_char , [EncDecData](structcom__verifone__seccmd_1_1_enc_dec_data.md) * pData, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_GenerateMAC](namespacecom__verifone__seccmd.md#function-sec-generatemac)**(u_char HostId, u_char , u_char GMAC_MACMode, [MACData](structcom__verifone__seccmd_1_1_m_a_c_data.md) * pData, [genMAC](structcom__verifone__seccmd_1_1gen_m_a_c.md) * pMAC, [Ksn](structcom__verifone__seccmd_1_1_ksn.md) * pKSN, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_GenerateMAC](namespacecom__verifone__seccmd.md#function-sec-generatemac)**(u_char GMAC_HostId, u_char GMAC_UseDefaultCV, u_char GMAC_MACMode, [MACData](structcom__verifone__seccmd_1_1_m_a_c_data.md) * pData, [genMAC](structcom__verifone__seccmd_1_1gen_m_a_c.md) * pMAC, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_VerifyMAC](namespacecom__verifone__seccmd.md#function-sec-verifymac)**(u_char HostId, u_char , u_char VMAC_MACMode, [MACData](structcom__verifone__seccmd_1_1_m_a_c_data.md) * pData, [genMAC](structcom__verifone__seccmd_1_1gen_m_a_c.md) MAC, [Ksn](structcom__verifone__seccmd_1_1_ksn.md) * pKSN, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_VerifyMAC](namespacecom__verifone__seccmd.md#function-sec-verifymac)**(u_char VMAC_HostId, u_char VMAC_UseDefaultCV, u_char VMAC_MACMode, [MACData](structcom__verifone__seccmd_1_1_m_a_c_data.md) * pData, [genMAC](structcom__verifone__seccmd_1_1gen_m_a_c.md) MAC, uint8_t * errCode, long timeout =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_RetrieveEncryptedPIN](namespacecom__verifone__seccmd.md#function-sec-retrieveencryptedpin)**(u_char HostId, [PINBlockParams](structcom__verifone__seccmd_1_1_p_i_n_block_params.md) * pREP_PINBlockParams, uint16_t REP_Flags, [PropData](structcom__verifone__seccmd_1_1_prop_data.md) REP_PropData, [EncPINBlock](structcom__verifone__seccmd_1_1_enc_p_i_n_block.md) * pREP_encPIN, [Ksn_v2](structcom__verifone__seccmd_1_1_ksn__v2.md) * pREP_KSN, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_RetrieveEncryptedPIN](namespacecom__verifone__seccmd.md#function-sec-retrieveencryptedpin)**(u_char REP_HostId, [PINBlockParams](structcom__verifone__seccmd_1_1_p_i_n_block_params.md) * pREP_PINBlockParams, u_char REP_Flags, [PropData](structcom__verifone__seccmd_1_1_prop_data.md) REP_PropData, [EncPINBlock](structcom__verifone__seccmd_1_1_enc_p_i_n_block.md) * pREP_encPIN, uint8_t * errCode, long timeout =0) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_RetrieveEncryptedPIN](namespacecom__verifone__seccmd.md#function-sec-retrieveencryptedpin)**(u_char REP_HostId, [PINBlockParams](structcom__verifone__seccmd_1_1_p_i_n_block_params.md) * pREP_PINBlockParams, uint16_t REP_Flags, [PropData](structcom__verifone__seccmd_1_1_prop_data.md) REP_PropData, [EncPINBlock](structcom__verifone__seccmd_1_1_enc_p_i_n_block.md) * pREP_encPIN, [Ksn](structcom__verifone__seccmd_1_1_ksn.md) * pREP_KSN, uint8_t * errCode, long timeout) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_GetVersions](namespacecom__verifone__seccmd.md#function-sec-getversions)**(std::string * pVersions, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| const [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) char * | **[Sec_GetVersion](namespacecom__verifone__seccmd.md#function-sec-getversion)**(void ) |
| const [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) char * | **[Sec_GetSvcVersion](namespacecom__verifone__seccmd.md#function-sec-getsvcversion)**(void ) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_SetKSId](namespacecom__verifone__seccmd.md#function-sec-setksid)**(u_char HostId, uint8_t ksid) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_SetDUKPTMask](namespacecom__verifone__seccmd.md#function-sec-setdukptmask)**(u_char HostId, [DUKPTmask](structcom__verifone__seccmd_1_1_d_u_k_p_tmask.md) * pDUKPTMask, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) int | **[Sec_IncrementKSN](namespacecom__verifone__seccmd.md#function-sec-incrementksn)**(u_char HostId, [Ksn](structcom__verifone__seccmd_1_1_ksn.md) * pKSN, uint8_t * errCode, long  =[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const size_t | **[VERSION_BUFF_SIZE](namespacecom__verifone__seccmd.md#variable-version-buff-size)**  |

## Types Documentation

### enum SecCmd_errors

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SC_SUCCESS | 0|  0  |
| SC_ERROR | -1|  -1  |
| SC_WRONG_PAR | -2|  -2  |
| SC_SEND_FAILED | -3|  -3  |
| SC_RECBUF_SMALL | -4|  -4  |
| SC_TIMER_ERROR | -5|  -5  |




Error codes 



## Functions Documentation

### function secInit

```cpp
DllSpecSECsecError secInit()
```


**Return**: 

Generic interface to establish an IPC communication to Security Service 


### function secDestroy

```cpp
DllSpecSECsecError secDestroy()
```


**Return**: 

Generic interface to close IPC connection to Security Service 


### function secOpen

```cpp
DllSpecSECsecError secOpen(
    const std::string & ,
    secHandle_t & handle
)
```


Open a Host configuration with module name refernced in the configuration For compatibility only: hostname will be handled as Transaction value 


### function secOpen

```cpp
DllSpecSECVOS3_DepricatedsecError secOpen(
    const SecTransactionData_t & td,
    secHandle_t & handle
)
```


### function secClose

```cpp
DllSpecSECsecError secClose(
    secHandle_t handle
)
```


Close a Security Module 


### function secSetKSId

```cpp
DllSpecSECsecError secSetKSId(
    secHandle_t handle,
    uint32_t ksid
)
```


Set the Key Set ID 


### function secGetKeyInventory

```cpp
DllSpecSECsecError secGetKeyInventory(
    secHandle_t handle,
    std::string & out
)
```


**Parameters**: 

  * **handle** 
  * **out** json of all available keys depending on transaction. 


 Output examples can be obtained in the documentation reference part at [Output-Example-VSS-MSK], [Output-Example-VSS-DUKPT], [Output-Example-IPP-MSK], [Output-Example-IPP-DUKPT], 
[Output-Example-ADE], [Output-Example-RSA] and [Output-Example-VisaDSP]. 

 The corresponding JSON schema can be found at [JSON Schema for Output of secGetKeyInventory()]. 


**Return**: 

Get JSON formatted information about keys related to an opened Security Module (available keys, creation date, ...) 


### function secGetKeyData

```cpp
DllSpecSECsecError secGetKeyData(
    secHandle_t handle,
    com_verifone_host::key_type_t keyType,
    std::vector< uint8_t > & out
)
```


**Parameters**: 

  * **handle** 
  * **keyType** 
  * **out** TLV if keyType is a Bendigo-type 
  * **kek_flag** optional KEK flag (relevant VOS3 only) 


**Return**: 

Get key relevant information related to an opened Security Module (key file path, ...) 


### function secUpdateKey

```cpp
DllSpecSECsecError secUpdateKey(
    secHandle_t handle,
    com_verifone_host::key_type_t keyType,
    const std::vector< uint8_t > & keyData,
    std::vector< uint8_t > & propData
)
```


**Parameters**: 

  * **handle** 
  * **keyType** 
  * **keyData** - binary data (e.g. 8Byte for 1DES, 16Byte for 3DES and 2TDEA-ADE-DUKPT key, 120Byte for GISKE)

* TLV if keyType is a Bendigo-type
* 'KSN incrementation' with keyType=KEY_TYPE_DUKPT effects KSN incrementation 
  * **propData** - proprietary data

* in: in case of DUKPT (modules [VSS], [IPP] DUKPT part, [ADE]): KSN binary data (maybe padded with 0xFF, 0xFF))
* out: in case of VSS-MSK and VSS-DUKPT (module [VSS]): received data from an assigned Update Finalize macro 


**Return**: 

Load a key 
Module related parameter descriptions can be found in chapter [Security Modules]. 


### function secUpdateKey

```cpp
inline secError secUpdateKey(
    secHandle_t handle,
    com_verifone_host::key_type_t keyType,
    const std::vector< uint8_t > & keyData
)
```


### function secEncryptData

```cpp
DllSpecSECsecError secEncryptData(
    secHandle_t handle,
    const std::vector< uint8_t > & plainData,
    std::vector< uint8_t > & encData,
    std::vector< uint8_t > & iv,
    std::vector< uint8_t > & ksn
)
```


**Parameters**: 

  * **handle** 
  * **plainData** 
  * **encData** the encrypted result of encryption 
  * **iv** try to use this IV, empty for configured default. get used IV back. Relevant for modules [VSS] and [ADE]
  * **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like [VSS] DUKPT, [ADE]


**Return**: Module related parameter descriptions can be found in chapter [Security Modules]. 

Encrypt data 


### function secEncryptTransactionData

```cpp
DllSpecSECVOS3_DepricatedsecError secEncryptTransactionData(
    secHandle_t handle,
    const secIndex_t & TDindex,
    std::vector< uint8_t > & encData,
    std::vector< uint8_t > & iv,
    std::vector< uint8_t > & ksn
)
```


**Parameters**: 

  * **handle** 
  * **TDindex** index-key of TransactionData to reference plainData 
  * **encData** the encrypted result of encryption 
  * **iv** try to use this IV, empty for configured default. get used IV back. Relevant for modules [VSS] and [ADE]
  * **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like [VSS] DUKPT, [ADE]


**Return**: Module related parameter descriptions can be found in chapter [Security Modules]. 

Encrypt TransactionData referenced by index 


### function secDecryptData

```cpp
DllSpecSECsecError secDecryptData(
    secHandle_t handle,
    const std::vector< uint8_t > & encData,
    std::vector< uint8_t > & plainData,
    std::vector< uint8_t > & iv,
    std::vector< uint8_t > & ksn
)
```


**Parameters**: 

  * **handle** 
  * **encData** 
  * **plainData** 
  * **iv** try to use this IV, empty for configured default. get used IV back. Relevant for module [VSS]
  * **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema [VSS]


**Return**: Module related parameter descriptions can be found in chapter [Security Modules]. 

Decrypt data 


### function secSign

```cpp
DllSpecSECsecError secSign(
    secHandle_t handle,
    const std::vector< uint8_t > & data,
    std::vector< uint8_t > & signature,
    std::vector< uint8_t > & iv,
    std::vector< uint8_t > & ksn
)
```


**Parameters**: 

  * **handle** 
  * **data** data to be signed 
  * **signature** MAC 
  * **iv** try to use this IV, empty for configured default. get used IV back. Relevant for modules [VSS] and [SRED]
  * **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like [VSS] DUKPT and [SRED]


**Return**: Module related parameter descriptions can be found in chapter [Security Modules]. 

Generate a cryptographic signature of given data (in most cases this will be MAC generation) 


### function secVerify

```cpp
DllSpecSECsecError secVerify(
    secHandle_t handle,
    const std::vector< uint8_t > & data,
    const std::vector< uint8_t > & signature,
    std::vector< uint8_t > & iv,
    std::vector< uint8_t > & ksn
)
```


**Parameters**: 

  * **handle** 
  * **data** 
  * **signature** 
  * **iv** try to use this IV, empty for configured default. get used IV back. Relevant for modules [VSS] and [SRED]
  * **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like [VSS] DUKPT and [SRED]


**Return**: Module related parameter descriptions can be found in chapter [Security Modules]. 

Verify a cryptographic signature of given data (in most cases this will be MAC verification) 


### function secRetrieveEncryptedPIN

```cpp
DllSpecSECsecError secRetrieveEncryptedPIN(
    secHandle_t handle,
    const uint8_t pinBlockFormat,
    std::vector< unsigned char > & pinBlk,
    std::vector< uint8_t > & ksn
)
```


**Parameters**: 

  * **handle** 
  * **pinBlockFormat** value of pin_block_format_t 
  * **pinBlk** 
  * **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for DUKPT encryption schema, like [VSS] DUKPT and [IPP] DUKPT 


**Return**: Module related parameter descriptions can be found in chapter [Security Modules]. 

Retrieve an encrypted PIN block 


### function secIncrementKSN

```cpp
DllSpecSECsecError secIncrementKSN(
    secHandle_t handle,
    std::vector< uint8_t > & ksn
)
```


**Parameters**: 

  * **handle** 
  * **ksn** 10 bytes binary data (maybe padded with 0xFF, 0xFF). Relevant for [VSS] DUKPT encryption schema 


**Return**: Module related parameter descriptions can be found in chapter [Security Modules]. 

Increment the KSN 


### function secGetStatus

```cpp
DllSpecSECsecError secGetStatus(
    std::string & jsonString,
    std::string hostName =""
)
```


**Parameters**: 

  * **jsonString** 

 An output example can be found at [Output example of secGetStatus()]. 

 The corresponding JSON schema can be found at [JSON Schema for Output of secGetStatus()]. 
  * **hostName** configuration name, optional. Provide only defined host configuration. 


**Return**: 

Get JSON formatted information about status of Security Component (version, information of existing host configurations, available Security Modules) 


### function secGetStatus

```cpp
DllSpecSECsecError secGetStatus(
    std::string & jsonString,
    secHandle_t handle
)
```


**Parameters**: 

  * **jsonString** 

 An output example can be found at [Output example of secGetStatus()]. 

 The corresponding JSON schema can be found at [JSON Schema for Output of secGetStatus()]. 
  * **handle** 


**Return**: 

Get JSON formatted information about status of Security Component (version, information of existing host configurations, available Security Modules) 


### function secGetVersions

```cpp
DllSpecSECsecError secGetVersions(
    std::string & versions
)
```


**Parameters**: 

  * **versions** - version string in format (component separator:';'): 


**Return**: 

Get versions of components (API library, Security Component, Host Names/VSS) 


### function secGetApiVersion

```cpp
DllSpecSEC std::string secGetApiVersion(
    void 
)
```


**Return**: version string: <major>.<minor>.<patch>-<build> 

Get API library version


### function secGetSvcVersion

```cpp
DllSpecSEC std::string secGetSvcVersion(
    void 
)
```


**Return**: version string: <major>.<minor>.<patch>-<build> 

Get Security Service version


### function secClearTransactionData

```cpp
DllSpecSECVOS3_DepricatedsecError secClearTransactionData(
    secHandle_t handle
)
```


**Parameters**: 

  * **handle** 


**Return**: 

Clear all TransactionData tags except TagHostName and TagKeySetID 


### function secPutTransactionData

```cpp
DllSpecSECVOS3_DepricatedsecError secPutTransactionData(
    secHandle_t handle,
    const SecTransactionData_t & taData
)
```


Insert additionally TransactionData of transaction of a given handle (merge)

h3. Permissions for each Value of given Data Writing Permissions will be checked: 


# Configuration will be checked


# if there is an existing entry it will be checked if overwriting is allowed

handle

taData

EsecTAWriteProtected if writing not allowed 


### function secGetTransactionValue

```cpp
DllSpecSECVOS3_DepricatedsecError secGetTransactionValue(
    secHandle_t handle,
    const secIndex_t & key,
    SecTransactionValue & date
)
```


**Parameters**: 

  * **handle** 
  * **key** 
  * **date** 


**Return**: 

* EsecTANoEntry if no Value with key can be found
* EsecTAReadProtected if permissions are reduced and reading not allowed 

Get TransactionData of transaction of a given handle

* h3. Permissions Reading Permissions will be checked They can be reduced by configuration or during putting the data (see SecTransactionValue::restrictPermissions)


### function secGetPermission

```cpp
DllSpecSECVOS3_DepricatedsecError secGetPermission(
    secHandle_t handle,
    const secIndex_t & key,
    bitMask_t & permissionFlags
)
```


**Parameters**: 

  * **handle** 
  * **key** index - Which entry of TransactionData 
  * **permissionFlags** values of CTransactionValue::ePermissionFlags 


**Return**: 

Get Permissions of an TransactionData entry 


### function secGenerateRandom

```cpp
DllSpecSECsecError secGenerateRandom(
    std::vector< uint8_t > & data,
    int count
)
```


**Parameters**: 

  * **data** buffer for random data 
  * **count** number of random bytes to generate 
  * **data** buffer with random data. Vector is resized to count bytes and filled with random data 


**Return**: 

Get N bytes of random data 


### function secDigest

```cpp
DllSpecSECsecError secDigest(
    int type,
    std::vector< uint8_t > & data,
    std::vector< uint8_t > & digest
)
```


**Parameters**: 

  * **type** of digests algorithm. Supported types defined as SEC_DIG_... in [sec2.h](sec2_8h.md#file-sec2.h)
  * **data** 
  * **digest** buffer with calculated digits 


**Return**: 

Perform digest operations 


### function hex2binCH

```cpp
inline bool hex2binCH(
    char in,
    unsigned char * out
)
```


### function convDsp2Hex

```cpp
inline int convDsp2Hex(
    const char * dsp,
    size_t dsp_len,
    char * hex,
    const size_t max_hex_len
)
```


### function getCompatibleCode

```cpp
inline uint8_t getCompatibleCode(
    secError error
)
```


### function getCompatibleReturn

```cpp
inline int getCompatibleReturn(
    secError newError
)
```


### function getCompatibleReturn

```cpp
inline int getCompatibleReturn(
    secError newError,
    uint8_t * oldError
)
```


### function Sec_Init

```cpp
inline DEPRECATED int Sec_Init(
    u_char *  =NULL
)
```


compatibility-wrapper for secInit 


### function Sec_Destroy

```cpp
inline DEPRECATED void Sec_Destroy()
```


compatibility-wrapper for secDestroy 


### function Sec_Open

```cpp
inline DEPRECATED u_char Sec_Open(
    const std::string & schemaName,
    uint8_t * errCode
)
```


**Parameters**: 

  * **schemaName** - name of encryption scheme 
  * **errCode** - error code sent from SC 


**Return**: a handle to encrypto scheme 0 - error case 

Generic interface to open Encryption Module based on Host Name


### function Sec_Open

```cpp
inline DEPRECATED u_char Sec_Open(
    u_char * schemaName,
    uint8_t * errCode
)
```


### function Sec_Close

```cpp
inline DEPRECATED int Sec_Close(
    u_char HostId,
    uint8_t * errCode
)
```


**Parameters**: 

  * **HostId** - handle to encryption scheme 
  * **errCode** - error code sent from SC 


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

Generic interface to close Encryption Module


### function Sec_SelectHostConf

```cpp
inline DEPRECATED int Sec_SelectHostConf(
    u_char HostId,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 
  * **errCode** - error code sent from SC


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, Selecting host configuration 


### function Sec_GetKeyData

```cpp
inline DEPRECATED int Sec_GetKeyData(
    u_char HostId,
    u_char GKD_KeyType,
    u_char kekFlag,
    char * aOutBuf,
    u_long * uiOutBufLen,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 
  * **GKD_KeyType** - key type values of key_type_t 4 - TCU RSA Public Key 12 - Encrypted KI (Format 0) 13 - Encrypted KI (Format 1) 14 - Encrypted KI (Format 2) 15 - Encrypted PPID 16 - Encrypted PPASN 17 - KVC of KIA 18 - KVC of KEK1 19 - KVC of KT 
  * **kekFlag** - indicates use of KEK1 or KEK2 for Key Type 11 
  * **uiOutBufLen** - maximal buffer length 
  * **errCode** - error code sent from SC 
  * **aOutBuf** - Key data, specific for each key type 
  * **uiOutBufLen** - data length


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, Get Key Data 


### function Sec_GetKeyData

```cpp
inline DEPRECATED int Sec_GetKeyData(
    u_char GKD_HostId,
    u_char GKD_KeyType,
    char * aOutBuf,
    u_long * uiOutBufLen,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function is_hex_notation

```cpp
static inline bool is_hex_notation(
    std::string const & s
)
```


### function hexString_to_binary

```cpp
static inline std::vector< uint8_t > hexString_to_binary(
    const std::string & input
)
```


### function binary_to_hexString

```cpp
static inline std::string binary_to_hexString(
    const std::vector< uint8_t > & input
)
```


### function Sec_UpdateKey

```cpp
inline DEPRECATED int Sec_UpdateKey(
    u_char HostId,
    key_type_t UpK_KeyType,
    u_char kekFlag,
    char * aKeyData,
    u_long uiKeyDataLen,
    Ksn_v2 KSN,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 
  * **UpK_KeyType** - key type (IPP relevant: KEY_TYPE_PPK, KEY_TYPE_MGK) 
  * **kekFlag** - indicates use of KEK1 or KEK2 for Key Type 11 
  * **aKeyData** - key data to store in SC (NULL is also allowed). For IPP usage data have to be provided in ASCII format. 
  * **uiKeyDataLen** - length of the key data 
  * **KSN** - KSN for new DUKPT key (variable length). For IPP usage data have to be provided in BIN format. 
  * **errCode** - error code sent from SC


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, update key 


### function getKsn_v2

```cpp
inline Ksn_v2 getKsn_v2(
    Ksn * pKSN
)
```


### function Sec_UpdateKey

```cpp
inline DEPRECATED int Sec_UpdateKey(
    u_char UpK_HostId,
    key_type_t UpK_KeyType,
    u_char kekFlag,
    char * aKeyData,
    u_long uiKeyDataLen,
    Ksn * pKSN,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_UpdateKey

```cpp
inline DEPRECATED int Sec_UpdateKey(
    u_char UpK_HostId,
    u_char UpK_KeyType,
    u_char kekFlag,
    char * aKeyData,
    u_long uiKeyDataLen,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_UpdateKey

```cpp
inline DEPRECATED int Sec_UpdateKey(
    u_char UpK_HostId,
    u_char UpK_KeyType,
    char * aKeyData,
    u_long uiKeyDataLen,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_AS2805KeyMgmnt

```cpp
inline DEPRECATED int Sec_AS2805KeyMgmnt(
    u_char HostId,
    u_char AS2805_AS2805Func,
    char * aKeyData,
    u_long * uiKeyDataLen,
    u_long ,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_EncryptData

```cpp
inline DEPRECATED int Sec_EncryptData(
    u_char HostId,
    u_char EncD_EncMode,
    EncDecDataIV * pData,
    Ksn * pKSN,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 
  * **EncD_EncMode** - encryption mode, useb by encryption module. ADE: 0 - ECB mode, 1 - CBC mode 
  * **pData** - structure with inp/output parameters, IV is optional 
  * **pData** 
  * **pKSN** - structure of KSN 
  * **errCode** - error code sent from SC


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, encrypt data 


### function Sec_EncryptData

```cpp
inline DEPRECATED int Sec_EncryptData(
    u_char EncD_HostId,
    EncDecDataIV * pData,
    Ksn * pKSN,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **EncD_HostId** - Host Id to set 
  * **pData** - structure with inp/output parameters, IV is optional 
  * **pData** 
  * **pKSN** - structure of KSN 
  * **errCode** - error code sent from SC 
  * **timeout** - timeout for receiving answer (in milliseconds) - minimum value: 30000, default value: -1 (wait forever)


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, encrypt data 


### function Sec_EncryptData

```cpp
inline DEPRECATED int Sec_EncryptData(
    u_char EncD_HostId,
    EncDecDataIV * pData,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_EncryptData

```cpp
inline DEPRECATED int Sec_EncryptData(
    u_char EncD_HostId,
    u_char EncD_EncMode,
    EncDecData * pData,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_DecryptData

```cpp
inline DEPRECATED int Sec_DecryptData(
    u_char HostId,
    EncDecDataIV * pData,
    Ksn * pKSN,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 
  * **pData** - structure with inp/output parameters, IV is optional 
  * **pData** - structure with inp/output parameters 
  * **pKSN** - structure of KSN 
  * **errCode** - error code sent from SC


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, decrypt data 


### function Sec_DecryptData

```cpp
inline DEPRECATED int Sec_DecryptData(
    u_char DecD_HostId,
    EncDecDataIV * pData,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_DecryptData

```cpp
inline DEPRECATED int Sec_DecryptData(
    u_char DecD_HostId,
    u_char ,
    EncDecData * pData,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_GenerateMAC

```cpp
inline DEPRECATED int Sec_GenerateMAC(
    u_char HostId,
    u_char ,
    u_char GMAC_MACMode,
    MACData * pData,
    genMAC * pMAC,
    Ksn * pKSN,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 1 - yes 
  * **GMAC_MACMode** - MAC mode Not IPP: parameter is not used! IPP: 5 - IPP, ASCII Data 7 - IPP, Binary Data 
  * **pData** - structure of data to be MAC-ed 
  * **pMAC** - structure of MAC length and MAC, MAC output format: Not IPP: BIN format IPP: GMAC_MACMode=5: ASCII format GMAC_MACMode=7: BIN format 
  * **pKSN** - structure of KSN 
  * **errCode** - error code sent from SC


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, GenerateMAC 


### function Sec_GenerateMAC

```cpp
inline DEPRECATED int Sec_GenerateMAC(
    u_char GMAC_HostId,
    u_char GMAC_UseDefaultCV,
    u_char GMAC_MACMode,
    MACData * pData,
    genMAC * pMAC,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_VerifyMAC

```cpp
inline DEPRECATED int Sec_VerifyMAC(
    u_char HostId,
    u_char ,
    u_char VMAC_MACMode,
    MACData * pData,
    genMAC MAC,
    Ksn * pKSN,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 
  * **VMAC_MACMode** - parameter is not used! 
  * **pData** - structure of data to be MAC-ed 
  * **MAC** - structure of MAC length and MAC 
  * **pKSN** - structure of KSN 
  * **errCode** - error code sent from SC


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, VerifyMAC 


### function Sec_VerifyMAC

```cpp
inline DEPRECATED int Sec_VerifyMAC(
    u_char VMAC_HostId,
    u_char VMAC_UseDefaultCV,
    u_char VMAC_MACMode,
    MACData * pData,
    genMAC MAC,
    uint8_t * errCode,
    long timeout =DEFAULT_COMM_TIMEOUT
)
```


### function Sec_RetrieveEncryptedPIN

```cpp
inline DEPRECATED int Sec_RetrieveEncryptedPIN(
    u_char HostId,
    PINBlockParams * pREP_PINBlockParams,
    uint16_t REP_Flags,
    PropData REP_PropData,
    EncPINBlock * pREP_encPIN,
    Ksn_v2 * pREP_KSN,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 
  * **pREP_PINBlockParams** - structure of PIN block parameter:

* pPAN - pointer to PAN (NULL terminated string, 20 digits max). Only the last 12 digits, except the last digit (Luhn value), are used (Luhn value is not checked)
* pSTAN - pointer to STAN (NULL terminated string, 12 digits max), mandatory if PIN block format ISO-1 is used
* PinBlockFormat - PIN block format 0 = ISO-0 1 = ISO-1 2 = ISO-2 3 = ISO-3
* TransAmount - Transaction Amount - 6 bytes BCD coded 
  * **REP_Flags** - flags

* Bit 0 = bypass KSN incrementation in case of DUKPT support (=0x0001) 
  * **REP_PropData** - proprietary data passed to VSS scripts 
  * **pREP_encPIN** - online PIN Cipher Block 
  * **pREP_KSN** - structure of KSN 
  * **errCode** - error code sent from SC 

* IPP relevant: 
  * **HostId** - Host Id to set 
  * **pREP_encPIN** - online PIN Cipher Block. Data are provided in BIN format. Output data depend on key management scheme:

* MSK: 20 Bytes (PINLength[2], PINFormat[2], PINBlock[16])
* DUKPT: 16 Bytes PINBlock 
  * **pREP_KSN** - structure v2 of KSN. Data are provided in BIN format 
  * **errCode** - error code sent from SC Note: In case of IPP usage error codes provided by the OS IPP component are returned (see 'MS Packet 71' or 'DUKPT Packet 75' in 'Verix eVo Volume I:Operations Systems, Programmers Guide, Appendix D: IPP Communications Packets')


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, RetrieveEncryptedPIN 


### function Sec_RetrieveEncryptedPIN

```cpp
inline DEPRECATED int Sec_RetrieveEncryptedPIN(
    u_char REP_HostId,
    PINBlockParams * pREP_PINBlockParams,
    u_char REP_Flags,
    PropData REP_PropData,
    EncPINBlock * pREP_encPIN,
    uint8_t * errCode,
    long timeout =0
)
```


### function Sec_RetrieveEncryptedPIN

```cpp
inline DEPRECATED int Sec_RetrieveEncryptedPIN(
    u_char REP_HostId,
    PINBlockParams * pREP_PINBlockParams,
    uint16_t REP_Flags,
    PropData REP_PropData,
    EncPINBlock * pREP_encPIN,
    Ksn * pREP_KSN,
    uint8_t * errCode,
    long timeout
)
```


### function Sec_GetVersions

```cpp
inline DEPRECATED int Sec_GetVersions(
    std::string * pVersions,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **pVersions** - version string in format (component separator:';'): API:MAJOR.MINOR.BUILD;SC:MAJOR.MINOR.BUILD;HOSTIDn:name_n.vso;...;HOSTIDm:name_m.vso; (where n,m are from 1,2, ..., k), key words are: API - API library SC - security component HOSTID - host id 
  * **errCode** - error code sent from SC


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, get components versions 


### function Sec_GetVersion

```cpp
inline const DEPRECATED char * Sec_GetVersion(
    void 
)
```


**Return**: version string: <major>.<minor>.<patch>-<build> 

SecApp, get API library version


### function Sec_GetSvcVersion

```cpp
inline const DEPRECATED char * Sec_GetSvcVersion(
    void 
)
```


**Return**: version string: <major>.<minor>.<patch>-<build> 

SecApp, get security service version


### function Sec_SetKSId

```cpp
inline DEPRECATED int Sec_SetKSId(
    u_char HostId,
    uint8_t ksid
)
```


SecApp, Set key set ID - used in

* VSS for UpdateKey, Enc/Decryption, MAC Gen/Verification operations
* IPP for UpdateKey, MAC Generation, PIN Encryption operations HostId- Host Id to set 

ksid- key set id
    * 1-8 for VSS
    * 1-10 for IPPMSK
    * 1-3 for IPPDUKPT
0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 


### function Sec_SetDUKPTMask

```cpp
inline DEPRECATED int Sec_SetDUKPTMask(
    u_char HostId,
    DUKPTmask * pDUKPTMask,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 
  * **pDUKPTMask** - masking of PIN, MAC and ENC DUKPT key 
  * **errCode** - error code sent from SC


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, set DUKPT mask 


### function Sec_IncrementKSN

```cpp
inline DEPRECATED int Sec_IncrementKSN(
    u_char HostId,
    Ksn * pKSN,
    uint8_t * errCode,
    long  =DEFAULT_COMM_TIMEOUT
)
```


**Parameters**: 

  * **HostId** - Host Id to set 
  * **pKSN** - Key Serial Number 
  * **errCode** - error code sent from SC


**Return**: 0 in success case, other value in error case (see [SecCmd_errors](namespacecom__verifone__seccmd.md#enum-seccmd-errors)) 

SecApp, Increment KSN (Key Serial Number) 



## Attributes Documentation

### variable VERSION_BUFF_SIZE

```cpp
const size_t VERSION_BUFF_SIZE =20;
```





-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
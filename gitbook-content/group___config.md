---
hidden: true
title: Config
---

[Macros](#define-members)

|  |  |
|----|----|
| Macros |  |
| #define  | [CFG_ENTRY_IV](#gab60d01dead9ae5dd41d7a0c50e37e231)   \"IVType\" |
| #define  | [CFG_TOKEN_IV_NONE](#ga82bfec8916794526f55f323be2384cc9)   \"NONE\" |
|   | value of CFG_ENTRY_IV default value [More\...](#ga82bfec8916794526f55f323be2384cc9)<br/> |
| #define  | [CFG_TOKEN_IV_ZERO](#ga40452c6a4635fa88638d637ffd08852e)   \"ZERO\" |
|   | value of CFG_ENTRY_IV [More\...](#ga40452c6a4635fa88638d637ffd08852e)<br/> |
| #define  | [CFG_TOKEN_IV_RAND](#ga1963b2d020f256b2bc8f686e8d79c878)   \"RANDOM\" |
|   | value of CFG_ENTRY_IV [More\...](#ga1963b2d020f256b2bc8f686e8d79c878)<br/> |
| #define  | [CFG_TOKEN_IV_USE_INPUT](#gaa3f2a7cd9700eb6e094c491cba90f44b)   \"USER_DEFINED\" |
|   | value of CFG_ENTRY_IV [More\...](#gaa3f2a7cd9700eb6e094c491cba90f44b)<br/> |
| #define  | [CFG_ENTRY_ENCMODE](#ga946270505efb931b3211312afa8d492c)   \"encMode\" |
| #define  | [CFG_TOKEN_ENCMODE_ECB](#gafd97668a7484ce5224a24c3c7a657b08)   \"MODE_ECB\" |
|   | value of CFG_ENTRY_ENCMODE, default value [More\...](#gafd97668a7484ce5224a24c3c7a657b08)<br/> |
| #define  | [CFG_TOKEN_ENCMODE_CBC](#gaebf52c0f1820c19768a164f88a27bc94)   \"MODE_CBC\" |
|   | value of CFG_ENTRY_ENCMODE [More\...](#gaebf52c0f1820c19768a164f88a27bc94)<br/> |
| #define  | [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc)   \"padding\" |
| #define  | [CFG_TOKEN_PAD_NONE](#ga5c10532bcee038e5914f6373eacb46a0)   \"NONE\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), default value [More\...](#ga5c10532bcee038e5914f6373eacb46a0)<br/> |
| #define  | [CFG_TOKEN_PAD_PKCS7](#gade87be513aa2c1a1a5b5271f78147533)   \"PKCS7\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc) [More\...](#gade87be513aa2c1a1a5b5271f78147533)<br/> |
| #define  | [CFG_TOKEN_PAD_X923](#ga48e6b29ddaa97bbbd1d270f6c2a0da12)   \"X923\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc) [More\...](#ga48e6b29ddaa97bbbd1d270f6c2a0da12)<br/> |
| #define  | [CFG_TOKEN_PAD_ISO7816](#gac1440351c36ae311ae5268468a6f0da8)   \"ISO7816\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc) [More\...](#gac1440351c36ae311ae5268468a6f0da8)<br/> |
| #define  | [CFG_TOKEN_PAD_ZERO](#gaf95a5567d68b9d300baef8e27a741f8d)   \"ZERO\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc) [More\...](#gaf95a5567d68b9d300baef8e27a741f8d)<br/> |
| #define  | [CFG_TOKEN_PAD_FF](#ga0f0e7c3801fb3b722d4bf3e42743250d)   \"FF\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc) [More\...](#ga0f0e7c3801fb3b722d4bf3e42743250d)<br/> |
| #define  | [CFG_TOKEN_PAD_SPACE](#ga27203e3e9c85b785354155336c7cb83b)   \"SPACE\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc) [More\...](#ga27203e3e9c85b785354155336c7cb83b)<br/> |
| #define  | [CFG_TOKEN_PAD_ISO10126](#gae7322759618c7331c57ddd6e1f3c88a2)   \"ISO10126\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc) [More\...](#gae7322759618c7331c57ddd6e1f3c88a2)<br/> |
| #define  | [CFG_TOKEN_PAD_ISO9797_1](#ga9d966f4258d3169c123770080d65e5ba)   \"ISO9797_1\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), ADE/SRED specific padding [More\...](#ga9d966f4258d3169c123770080d65e5ba)<br/> |
| #define  | [CFG_TOKEN_PAD_ISO9797_2](#gabada9ee23745697d8202500d8086b102)   \"ISO9797_2\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), ADE/SRED specific padding [More\...](#gabada9ee23745697d8202500d8086b102)<br/> |
| #define  | [CFG_TOKEN_RSA_PAD_PKCS1](#gac8dcc08d9e286bac750fea9e93d7ad73)   \"PKCS1\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), RSA specific padding [More\...](#gac8dcc08d9e286bac750fea9e93d7ad73)<br/> |
| #define  | [CFG_TOKEN_RSA_PAD_PKCS1_OAEP](#gaa4fb8e794160a33f923fe68ee7179bd3)   \"PKCS1_OAEP\" |
|   | value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), RSA specific padding [More\...](#gaa4fb8e794160a33f923fe68ee7179bd3)<br/> |
| #define  | [CFG_ENTRY_HASHTYPE](#ga86a1b2813b9c5f7cf27242fdbf775439)   \"hashType\" |
| #define  | [CFG_TOKEN_HASHTYPE_SHA1](#gadd90d36b31ab0a577378f7720c076439)   \"SHA1\" |
|   | value of CFG_ENTRY_HASHTYPE [More\...](#gadd90d36b31ab0a577378f7720c076439)<br/> |
| #define  | [CFG_TOKEN_HASHTYPE_SHA224](#ga898427bc525c8513e971d8198e8f43dd)   \"SHA224\" |
|   | value of CFG_ENTRY_HASHTYPE [More\...](#ga898427bc525c8513e971d8198e8f43dd)<br/> |
| #define  | [CFG_TOKEN_HASHTYPE_SHA256](#gaba0922b0c5f4bb2f104d7dc3cd9affb2)   \"SHA256\" |
|   | value of CFG_ENTRY_HASHTYPE, default value in AES module [More\...](#gaba0922b0c5f4bb2f104d7dc3cd9affb2)<br/> |
| #define  | [CFG_TOKEN_HASHTYPE_SHA384](#gaaacb946c9029654216868f58fe3d4eae)   \"SHA384\" |
|   | value of CFG_ENTRY_HASHTYPE [More\...](#gaaacb946c9029654216868f58fe3d4eae)<br/> |
| #define  | [CFG_TOKEN_HASHTYPE_SHA512](#ga0a15b7e427347133f38c9cd34a6441e3)   \"SHA512\" |
|   | value of CFG_ENTRY_HASHTYPE [More\...](#ga0a15b7e427347133f38c9cd34a6441e3)<br/> |
| #define  | [CFG_ENTRY_RSA_CALC_HASH](#gad6cb616ebd3638d561f21650dc1466ad)   \"calcHash\" |
| #define  | [CFG_TOKEN_RSA_CALC_HASH_YES](#ga4b1f0e2242b9b4ecc89ee3bf6f548976)   \"yes\" |
|   | value of [CFG_ENTRY_RSA_CALC_HASH](#gad6cb616ebd3638d561f21650dc1466ad), default value [More\...](#ga4b1f0e2242b9b4ecc89ee3bf6f548976)<br/> |
| #define  | [CFG_TOKEN_RSA_CALC_HASH_NO](#ga89545638866850d2cfaf499d4bbb2fb2)   \"no\" |
|   | value of [CFG_ENTRY_RSA_CALC_HASH](#gad6cb616ebd3638d561f21650dc1466ad) [More\...](#ga89545638866850d2cfaf499d4bbb2fb2)<br/> |
| #define  | [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a)   \"getKeyDataFormat\" |
| #define  | [CFG_TOKEN_RSA_GETKD_PEM](#gadc53fdacbcb2c210a7672d3e9fea6e99)   \"PEM\" |
|   | value of [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a) [More\...](#gadc53fdacbcb2c210a7672d3e9fea6e99)<br/> |
| #define  | [CFG_TOKEN_RSA_GETKD_DER](#gaa7a16f0472b900b454c6969c7d8720ee)   \"DER\" |
|   | value of [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a) [More\...](#gaa7a16f0472b900b454c6969c7d8720ee)<br/> |
| #define  | [CFG_TOKEN_RSA_GETKD_PRT](#gaeaf542d1a2dbd450b6aa81839df10200)   \"PRINT\" |
|   | value of [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a), default value [More\...](#gaeaf542d1a2dbd450b6aa81839df10200)<br/> |
| #define  | [CFG_TOKEN_RSA_GETKD_ORG](#ga8573171ef0704459dbdcd91b363db091)   \"ORIGINAL\" |
|   | value of [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a) [More\...](#ga8573171ef0704459dbdcd91b363db091)<br/> |
| #define  | [CFG_ENTRY_DUKPT_INC_KSN](#ga86878ef55c861a78b3c0240703d1bedb)   \"KSNincrementation\" |
| #define  | [CFG_TOKEN_DUKPT_BY_OPERATION](#ga1038e59d5a70ded57d6fa4d4828a5d00)   \"BY_OPERATION\" |
|   | value of [CFG_ENTRY_DUKPT_INC_KSN](#ga86878ef55c861a78b3c0240703d1bedb) default value [More\...](#ga1038e59d5a70ded57d6fa4d4828a5d00)<br/> |
| #define  | [CFG_TOKEN_DUKPT_BY_API](#gad3b7e6d29779eee52566da614317208b)   \"BY_API\" |
|   | value of [CFG_ENTRY_DUKPT_INC_KSN](#ga86878ef55c861a78b3c0240703d1bedb) [More\...](#gad3b7e6d29779eee52566da614317208b)<br/> |
| #define  | [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d)   \"keyVariant\" |
| #define  | [CFG_TOKEN_DUKPT_KEY_VAR_REQUEST](#ga6727ebc5a0cda870745972d4b55ab71c)   \"request\" |
|   | value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d), default value. In case of AES DUKPT - Data Encryption Encrypt / Message Authentication Generation [More\...](#ga6727ebc5a0cda870745972d4b55ab71c)<br/> |
| #define  | [CFG_TOKEN_DUKPT_KEY_VAR_RESPONSE](#ga34c5fb6b1b6b58c4d6a51f2da208479b)   \"response\" |
|   | value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d). In case of AES DUKPT - Data Encryption Decrypt / Message Authentication Verification [More\...](#ga34c5fb6b1b6b58c4d6a51f2da208479b)<br/> |
| #define  | [CFG_TOKEN_DUKPT_KEY_VAR_BOTH](#ga397a6f6091a11718ed25027c3e41d92d)   \"both\" |
|   | value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d). In case of AES DUKPT - Data Encryption Both Ways / Message Authentication Both Ways [More\...](#ga397a6f6091a11718ed25027c3e41d92d)<br/> |
| #define  | [CFG_TOKEN_SRED_VARIANT_X924_MAC_REQ_BW](#gac10817d4961802bbf9da51825ed9a42f)   \"X924_MAC_REQ_BW\" |
|   | value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d) [More\...](#gac10817d4961802bbf9da51825ed9a42f)<br/> |
| #define  | [CFG_TOKEN_SRED_VARIANT_X924_MAC_RESP](#gad736c699dfba417d61030f2e12ade24b)   \"X924_MAC_RESP\" |
|   | value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d) [More\...](#gad736c699dfba417d61030f2e12ade24b)<br/> |
| #define  | [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6)   \"algo\" |
| #define  | [CFG_TOKEN_SRED_ALG_1](#gafdd390e0c15cdc2eed87ca316d3bbb74)   \"ALG_9797_MAC_1\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), default value. SRED specific padding. No default value for AES module [More\...](#gafdd390e0c15cdc2eed87ca316d3bbb74)<br/> |
| #define  | [CFG_TOKEN_SRED_ALG_1A](#ga00432754611bf9d4d68928f46aacf7e1)   \"ALG_9797_MAC_1A\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding [More\...](#ga00432754611bf9d4d68928f46aacf7e1)<br/> |
| #define  | [CFG_TOKEN_SRED_ALG_2](#ga8c9674a4e3e987b05f9faa0d5e545833)   \"ALG_9797_MAC_2\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding [More\...](#ga8c9674a4e3e987b05f9faa0d5e545833)<br/> |
| #define  | [CFG_TOKEN_SRED_ALG_3](#gac239a169346e74784abe25141f702fa1)   \"ALG_9797_MAC_3\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding [More\...](#gac239a169346e74784abe25141f702fa1)<br/> |
| #define  | [CFG_TOKEN_SRED_ALG_4](#ga769d2b2a5b51bbc6e49b5b72abd45e6b)   \"ALG_9797_MAC_4\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding [More\...](#ga769d2b2a5b51bbc6e49b5b72abd45e6b)<br/> |
| #define  | [CFG_TOKEN_SRED_ALG_5](#ga999281312eeef703cef5cfe1449aaee0)   \"ALG_9797_MAC_5\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding [More\...](#ga999281312eeef703cef5cfe1449aaee0)<br/> |
| #define  | [CFG_TOKEN_SRED_ALG_5A](#gab5822349188eae06fa55634ea4d3bb49)   \"ALG_9797_MAC_5A\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding [More\...](#gab5822349188eae06fa55634ea4d3bb49)<br/> |
| #define  | [CFG_TOKEN_SRED_ALG_CMAC](#ga312073af7ce6f177d077f21fc164a897)   \"ALG_CMAC_TDEA\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding [More\...](#ga312073af7ce6f177d077f21fc164a897)<br/> |
| #define  | [CFG_TOKEN_SRED_ALG_HMAC](#gac26c4068e2480cbb6fd967a551cf790c)   \"ALG_HMAC_SHA256\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding [More\...](#gac26c4068e2480cbb6fd967a551cf790c)<br/> |
| #define  | [CFG_TOKEN_ALGO_CMAC](#gaf79405974fcfbba042ef5c2cb40e08a7)   \"CMAC\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6) [More\...](#gaf79405974fcfbba042ef5c2cb40e08a7)<br/> |
| #define  | [CFG_TOKEN_ALGO_HMAC](#ga7e7c533e64c60c460623099a271839e6)   \"HMAC\" |
|   | value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6) [More\...](#ga7e7c533e64c60c460623099a271839e6)<br/> |
| #define  | [CFG_ENTRY_IPP_KEY_MANAGEMENT](#ga9b4a8d263360a9fc49e056cd459c65b0)   \"KeyManagementOption\" |
| #define  | [CFG_ENTRY_KEY_MANAGEMENT_TYPE](#gace84acf3acd2546983b0ac7f34bccd82)   \"KeyManagementType\" |
| #define  | [CFG_TOKEN_KEY_MAN_TYPE_MSK](#ga6cc85bd481d0e2068105c2ab52ed1c3c)   \"MSK\" |
|   | value of CFG_ENTRY_KEY_MANAGEMENT_TYPE [More\...](#ga6cc85bd481d0e2068105c2ab52ed1c3c)<br/> |
| #define  | [CFG_TOKEN_KEY_MAN_TYPE_DUKPT](#gac61a347bdf88553e6014655dcf50cd96)   \"DUKPT\" |
|   | value of CFG_ENTRY_KEY_MANAGEMENT_TYPE [More\...](#gac61a347bdf88553e6014655dcf50cd96)<br/> |
| #define  | [CFG_TOKEN_KEY_MAN_TYPE_AS2805](#ga24851e60ec98ee64e15d7d019a561c5e)   \"AS2805\" |
|   | value of CFG_ENTRY_KEY_MANAGEMENT_TYPE [More\...](#ga24851e60ec98ee64e15d7d019a561c5e)<br/> |
| #define  | [CFG_ENTRY_TRANSPORT_KEY](#ga89cd282e773cd9be0282720efb9bae94)   \"transportKey\" |

## DetailedDescription {#detailed-description}

# Security Module VSS <a href="#autotoc_md47" id="autotoc_md47"></a>

VSS provides two engines: VSS-MSK and VSS-DUKPT

Using VSS - API functions

- <a href="namespacecom__verifone__seccmd.md#a75edecb24f839e04debb1aa5e47b5714">secSetKSId()</a> - selects a Key Set Id between 1 and 8 (default value is 1) which addresses the macro MACRO_SELECT_KEY_SET_ID_x (1 \<= x \<= 8)
- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - loads a key in a VSS key slot. possible Key Types
  - for DUKPT:
    - KEY_TYPE_DUKPT
  - for MSK:
    - KEY_TYPE_PPK
    - KEY_TYPE_MGK
    - KEY_TYPE_DEK
    - KEY_TYPE_MVK
    - KEY_TYPE_DDK
    - KEY_TYPE_KEK
  - special handling for MSK (OS function replacement):
    - KEY_TYPE_DIRECT_MK_PLAIN - iPS_LoadMasterClearKey replacement. Loads the security script's master key. The values are sent in the clear, but must all be loaded in the same session. Before loading the first key after a power cycle, all previously loaded keys (including the system keys) are erased. **This function should be used exclusively in a secure environment.** Data will be installed into the script referenced by host config (via handle) and key slot pointed by <a href="namespacecom__verifone__seccmd.md#a75edecb24f839e04debb1aa5e47b5714">secSetKSId()</a> (key slot=keySetId-1)
    - KEY_TYPE_DIRECT_MK_ENC - iPS_LoadMasterEncKey replacement. Loads the security script's master key without deleting the keys already loaded. The key value must be encrypted with VSS_KLK. Data will be installed into the script referenced by host config (via handle) and key slot pointed by <a href="namespacecom__verifone__seccmd.md#a75edecb24f839e04debb1aa5e47b5714">secSetKSId()</a> (key slot=keySetId-1)
    - KEY_TYPE_DIRECT_SYSK_PLAIN - iPS_LoadSysClearKey replacement. Loads the VSS_KLK (system key) in the clear. Before writing the new value of the key, all other keys in the terminal are erased. **This function should be used exclusively in a secure environment.** Handle and keySetId are not relevant in this case.
    - KEY_TYPE_DIRECT_SYSK_ENC - iPS_LoadSysEncKey replacement. Loads the system key. The new values must be encrypted under the current value of VSS_KLK. Handle and keySetId are not relevant in this case.
    - KEY_TYPE_DELETE_ALL_KEYS - This iPS_DeleteKey replacement deletes all keys in the script referenced by host config (via handle)
    - KEY_TYPE_DELETE_SYS_KEY - This iPS_DeleteKey replacement deletes System key (VSS_KLK). Handle and keySetId are not relevant in this case.
    - KEY_TYPE_DIRECT_AUTHEX_ENC - rsaAuthexVssKeyInstall replacement for loading the VSS keys. The new VSS key slot values must be encrypted under AuthEx with PKCS1 v1.5 padding. Data length of the encrypted data should be 256 bytes. Data will be installed into the script referenced by host config (via handle) and first key slot, that must be filled with decrypted key value, is pointed by <a href="namespacecom__verifone__seccmd.md#a75edecb24f839e04debb1aa5e47b5714">secSetKSId()</a> (key slot=keySetId-1)
    - KEY_TYPE_DIRECT_AUTHEX_SYSK - rsaAuthexVssKeyInstall replacement for loading the VSS_KLK key. The new 16 bytes key value must be encrypted under AuthEx with PKCS1 v1.5 padding. Data length of the encrypted data should be 256 bytes. Handle and keySetId are not relevant in this case.
    - KEY_TYPE_DELETE_ALL_CUST_KEYS - special key type (replacement for iPS_DeleteKey(DEL_ALL)) is independent from host configuration and clears all OS-managed customer keys like VSS, IPP and ADE.
    - KEY_TYPE_DIRECT_CUSTOM_ASYM - similar to KEY_TYPE_DIRECT_AUTHEX_ENC but using Custom RSA key. Functionality is provided only by VOS2. Data will be installed into the script referenced by host config (via handle) and first key slot, that must be filled with decrypted key value, is pointed by <a href="namespacecom__verifone__seccmd.md#a75edecb24f839e04debb1aa5e47b5714">secSetKSId()</a> (key slot=keySetId-1). The key value must be encrypted under Custom RSA key with PKCS1 v1.5 padding. Cryptogram length must be equal to transport key modulus length. Custom RSA key must be loaded via VRK and referenced in host configuration setting by tag \"transportKey\".
    - KEY_TYPE_DIRECT_CUSTOM_ASYM_SYSK - similar to KEY_TYPE_DIRECT_AUTHEX_SYSK for loading the VSS_KLK key. Functionality is provided only by VOS2. The new 16 bytes key value must be encrypted under Custom RSA key with PKCS1 v1.5 padding. Cryptogram length must be equal to transport key modulus length. KeySetId is not relevant in this case. Custom RSA key must be loaded via VRK and referenced in host configuration setting by tag \"transportKey\" (see Custom VSS key loading configuration example below).
- <a href="namespacecom__verifone__seccmd.md#a77860b4cffed3ba159a5c124c8e2cde2">secIncrementKSN()</a> - increments the Key Serial Number and creates a new DUKPT key (for DUKTP only)
- <a href="namespacecom__verifone__seccmd.md#a66a1992f617359f2e4a96f4980478f82">secSign()</a> - generates a MAC or HMAC (a maximum size of 4096 bytes will be supported)
- <a href="namespacecom__verifone__seccmd.md#a5470ce89fa947abc445f251ae0b2387b">secVerify()</a> - verifies a MAC (a maximum size of 4096 bytes will be supported)
- <a href="namespacecom__verifone__seccmd.md#aa58bc1a6a2056aebd3edc92f3bfcce9d">secEncryptData()</a> - encrypts data
- <a href="namespacecom__verifone__seccmd.md#a9cd679dc9763b06566dff28b3d3268c9">secDecryptData()</a> - decrypts data
- <a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> - delivers a JSON-formatted list of injected keys per Key Set Id (see section \'JSON-formatted outputs\' below)
- <a href="namespacecom__verifone__seccmd.md#ab3d26136c64019fd223aa9ccd120d4e0">secRetrieveEncryptedPIN()</a> - retrieves an encrypted PIN block

# Configuration in sccfg.json <a href="#autotoc_md48" id="autotoc_md48"></a>

Mandatory tags:

- scriptFileName
- scriptName
- KeyManagementType

Optional tags:

- KSNincrementation (only for VSS_DUKPT)

## Example for VSS-MSK configuration <a href="#autotoc_md49" id="autotoc_md49"></a>

``` cpp
{
  "name": "schemeVSSMSK",
  "scriptFileName": "TS020122.vso",
  "scriptName": "TS020122",
  "settings": {
   "KeyManagementType": "MSK"
  }
}
```

## Example for VSS-DUKPT configuration <a href="#autotoc_md50" id="autotoc_md50"></a>

``` cpp
{
  "name": "schemeVSSDUKPT",
  "scriptFileName": "TS010322.vso",
  "scriptName": "TS010322",
  "settings": {
   "KeyManagementType": "DUKPT",
   "KSNincrementation": "BY_OPERATION"
}
}
```

## Example for Custom VSS key loading configuration <a href="#autotoc_md51" id="autotoc_md51"></a>

ADKSEC_CustomVSS_RKL.der - RSA private Key loaded via VRK

``` cpp
{
  "name": "schemeVSSMSK",
  "scriptFileName": "TS020122.vso",
  "scriptName": "TS020122",
  "settings": {
   "transportKey": "generickeys/usr1/ADKSEC_CustomVSS_RKL.der"
  }
}
```

# JSON formatted outputs <a href="#autotoc_md52" id="autotoc_md52"></a>

<a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> delivers a JSON formatted output string with information about keys related to an opened Security Module.

## Example: Output for a host using module VSS-MSK (conditioned output) <a href="#autotoc_md53" id="autotoc_md53"></a>

``` cpp
{
  "Keys":[
   {"DDK":{"injected":"yes"},"DEK":{"injected":"yes"},"KEK":{"injected":"yes"},"KeySet":1,"MGK":{"injected":"yes"},"MVK":{"injected":"yes"},"PPK":{"injected":"yes"},"TMK":{"injected":"yes"}},
   {"DDK":{"injected":"yes"},"DEK":{"injected":"yes"},"KEK":{"injected":"yes"},"KeySet":2,"MGK":{"injected":"yes"},"MVK":{"injected":"yes"},"PPK":{"injected":"yes"},"TMK":{"injected":"yes"}},
   {"DDK":{"injected":"yes"},"DEK":{"injected":"yes"},"KEK":{"injected":"yes"},"KeySet":3,"MGK":{"injected":"yes"},"MVK":{"injected":"yes"},"PPK":{"injected":"yes"},"TMK":{"injected":"yes"}},
   {"DDK":{"injected":"yes"},"DEK":{"injected":"yes"},"KEK":{"injected":"yes"},"KeySet":4,"MGK":{"injected":"yes"},"MVK":{"injected":"yes"},"PPK":{"injected":"yes"},"TMK":{"injected":"yes"}},
   {"DDK":{"injected":"yes"},"DEK":{"injected":"yes"},"KEK":{"injected":"yes"},"KeySet":5,"MGK":{"injected":"yes"},"MVK":{"injected":"yes"},"PPK":{"injected":"yes"},"TMK":{"injected":"yes"}},
   {"DDK":{"injected":"yes"},"DEK":{"injected":"yes"},"KEK":{"injected":"yes"},"KeySet":6,"MGK":{"injected":"yes"},"MVK":{"injected":"yes"},"PPK":{"injected":"yes"},"TMK":{"injected":"yes"}},
   {"DDK":{"injected":"yes"},"DEK":{"injected":"yes"},"KEK":{"injected":"yes"},"KeySet":7,"MGK":{"injected":"yes"},"MVK":{"injected":"yes"},"PPK":{"injected":"yes"},"TMK":{"injected":"yes"}},
   {"DDK":{"injected":"yes"},"DEK":{"injected":"yes"},"KEK":{"injected":"yes"},"KeySet":8,"MGK":{"injected":"yes"},"MVK":{"injected":"yes"},"PPK":{"injected":"yes"},"TMK":{"injected":"yes"}}
  ],
  "Status":{
   "SlotsInUse":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,26,27,28,29,30,31,32,33,34,35,36,37,56,57,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,100,101,103]
  }
}
```

## Example: Output for a host using module VSS-DUKPT (conditioned output) <a href="#autotoc_md54" id="autotoc_md54"></a>

``` cpp
{
  "Keys":[
   {"DUKPT":{"KSN":"FFFF9876543210E00002","injected":"yes"},"KeySet":1},
   {"DUKPT":{"KSN":"FFFF9876543210E00002","injected":"yes"},"KeySet":2},
   {"DUKPT":{"KSN":"FFFF9876543210E00002","injected":"yes"},"KeySet":3},
   {"DUKPT":{"KSN":"FFFF9876543210E00002","injected":"yes"},"KeySet":4}
  ],
  "Status":{
   "SlotsInUse":[2,3,4,5,6,7,8,9,10,102,103,106,107,108,109,110]
  }
}
```

# Module Bendigo <a href="#autotoc_md55" id="autotoc_md55"></a>

Module Bendigo enhances the VSS Module functionality to meet AS2805 requirements for usage in the project Boomer.

Functionality of Bendigo module:

The Bendigo scheme covers the following functionality:

- key loading, management and update of symmetric and RSA keys
- retrieving key information
- generating and verifying MAC
- encrypting and decrypting data
- retrieving PIN block

For details please see the relevant documentation.

The Bendigo Module provides additionally to the shared VSS Module API functions following functions with special effectiveness:

- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - load a key in a VSS key slot. Possible Key Types:

  - KEY_TYPE_PPK
  - KEY_TYPE_MGK
  - KEY_TYPE_DEK
  - KEY_TYPE_MVK
  - KEY_TYPE_DDK
  - KEY_TYPE_KEK
  - KEY_TYPE_DUKPT
  - KEY_TYPE_SPONSOR_PK
  - KEY_TYPE_SPONSOR_MK
  - KEY_TYPE_SPONSOR_KI
  - KEY_TYPE_SEC_ACQ_KI
  - KEY_TYPE_ACQUIRER_MK
  - KEY_TYPE_SEC_ACQ_MK
  - KEY_TYPE_ACQ_SESSION_KEYS

  KEK1 or KEK2 usage can be adjusted in Transaction Data by tag TagBendigoKEKFlag (=1 for KEK1, =2 for KEK2) for KEY_TYPE_ACQ_SESSION_KEYS.

- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - rolls key KEK1 or KEK2 by setting tag TagAS2805Func in Transaction Data:

  - KEK1 roll: TagAS2805Func=2
  - KEK2 roll: TagAS2805Func=3

  All function parameters are obsolete in this case.

- getKeyData() - get dedicated information for the following key types:

  - KEY_TYPE_TCU_PK
  - KEY_TYPE_ENC_KI_FMT_0
  - KEY_TYPE_ENC_KI_FMT_1
  - KEY_TYPE_ENC_KI_FMT_2
  - KEY_TYPE_ENC_PPID
  - KEY_TYPE_ENC_PPASN
  - KEY_TYPE_KVC_KIA (KVC of KIA)
  - KEY_TYPE_KVC_KEK1 (KVC of KEK1)

  To get key information of KEK1 or KEK2 set indication in Transaction Data tag TagBendigoKEKFlag (=1 for KEK1, =2 for KEK2) for KEY_TYPE_ENC_PPASN.

- getKeyInventory() - get indicator whether AS2805 keys are injected

# Configuration in sccfg.json <a href="#autotoc_md56" id="autotoc_md56"></a>

Mandatory tags:

- KeyManagementType - value: \"AS2805\"

## Example for configuration <a href="#autotoc_md57" id="autotoc_md57"></a>

``` cpp
{
   "name": "schemeBendigo",
   "scriptFileName": "AU010222.vso",
   "scriptName": "AU010222",
   "settings": {
   "KeyManagementType": "AS2805"
   }
}
```

# JSON formatted outputs <a href="#autotoc_md58" id="autotoc_md58"></a>

<a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> delivers a JSON formatted output string with information about keys related to an opened Security Module.

## Example: Output for a host using module Bendigo (conditioned output) <a href="#autotoc_md59" id="autotoc_md59"></a>

``` cpp
{
   "Keys": [
   {
   "AS2805": {
   "injected": "yes"
   },
   "KeySet": 1
   }
   ]
}
```

# Security Modules IPPmsk and IPPdukpt <a href="#autotoc_md60" id="autotoc_md60"></a>

Working with IPP on Verix is described in Verix eVo Volume I: Operating System Programmers Manual, VPN DOC00301. For V/OS, please refer to V/OS Programmers Manual, VPN DOC00501.

IPP provides two engines: IPP-MSK and IPP-DUKPT

Note: To utilize IPP a Master Key injection must be prepared outside the user application before. Master Key injection is not ADK-SEC IPP functionality.

## Using IPP-MSK - API functions <a href="#autotoc_md61" id="autotoc_md61"></a>

- <a href="namespacecom__verifone__seccmd.md#a75edecb24f839e04debb1aa5e47b5714">secSetKSId()</a> - selects Key Set Id. Master Key will be used for cryption operation from slot given by KeyAddressTable (see configuration). The default KSId value is 1
- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - loads a Master Key in a IPP key slot given by KeyAddressTable (see configuration). KeyAddressTable can reference MK (slots 0-9) and IPP KLK (slot 15)
  - possible Key Types: KEY_TYPE_KEK
  - use GISKE input format for \'keyData\'
- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - loads a Session Key
  - possible Key Types: KEY_TYPE_PPK, KEY_TYPE_MGK
  - use GISKE input format for \'keyData\'
- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - KEY_TYPE_DELETE_ALL_KEYS - This iPS_DeleteKey replacement deletes all IPP keys referenced by host config (via handle)
- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - KEY_TYPE_DELETE_ALL_CUST_KEYS - special key type (replacement for iPS_DeleteKey(DEL_ALL)) is independent from host configuration and clears all OS-managed customer keys like VSS, IPP and ADE.
- <a href="namespacecom__verifone__seccmd.md#a66a1992f617359f2e4a96f4980478f82">secSign()</a> - generates a MAC
  - use BIN input format for \'data\'
  - output format is BIN
  - a maximum size of 4096 bytes will be supported
- <a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> - delivers a JSON-formatted list of injected keys per Key Set Id (Master Key address (0-9))
- <a href="namespacecom__verifone__seccmd.md#ab3d26136c64019fd223aa9ccd120d4e0">secRetrieveEncryptedPIN()</a> - retrieves an encrypted PIN block
  - output format for \'pinBlk\' is BIN

## Using IPP-DUKPT - API functions <a href="#autotoc_md62" id="autotoc_md62"></a>

- <a href="namespacecom__verifone__seccmd.md#a75edecb24f839e04debb1aa5e47b5714">secSetKSId()</a> - selects Key Set Id. DUKPT key will be used for crypto operation from given by KeyAddressTable (see configuation). The default KSId value is 1
- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - loads DUKPT Initial Key and an Initial KSN in a IPP key slot given by KeyAddressTable (see configuration). KeyAddressTable can reference DUKPT key slots 0, 1 and 2
  - possible Key Types: KEY_TYPE_DUKPT
  - use BIN input format for \'keyData\' and \'ksn\'
- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - KEY_TYPE_DELETE_ALL_KEYS - This iPS_DeleteKey replacement deletes all IPP-DUKPT keys referenced by host config (via handle)
- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - KEY_TYPE_DELETE_ALL_CUST_KEYS - special key type (replacement for iPS_DeleteKey(DEL_ALL)) is independent from host configuration and clears all OS-managed customer keys like VSS, IPP and ADE.
- <a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> - delivers a JSON-formatted list of injected keys per Key Set Id (DUKPT Key address (0-2)) Key Serial Number (KSN) with suppressed leading Fs.
- <a href="namespacecom__verifone__seccmd.md#ab3d26136c64019fd223aa9ccd120d4e0">secRetrieveEncryptedPIN()</a> - retrieves an encrypted PIN block
  - output format for \'pinBlk\' and \'KSN\' is BIN

# Configuration in sccfg.json <a href="#autotoc_md63" id="autotoc_md63"></a>

Mandatory tags:

- KeyManagementOption

Optional tags:

- KeyAddressTable

## Example for IPP-MSK configuration <a href="#autotoc_md64" id="autotoc_md64"></a>

``` cpp
{
  "KeyManagementOption": "8A3",
  "KeyAddressTable": [
   {"description": "| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 <- KeySetId"},
   {"sign": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]},
   {"retrieveEncPIN": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]},
   {"updateKey": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "15"]}
  ]
}
```

## Example for IPP-DUKPT configuration <a href="#autotoc_md65" id="autotoc_md65"></a>

``` cpp
{
"name": "schemeIPPDUKPT",
"settings": {
  "KeyManagementOption": "0A0",
  "KeyAddressTable": [
   {"description": "| 1 | 2 | 3 | <- KeySetId (3 slots)"},
   {"retrieveEncPIN": ["0", "1", "2"]}
  ]
}
}
```

IPP Key Management Options \[KMM + DEMF\] according IPP Packet 17 (see OS Programmers Manual) example \"0A0\".

# JSON formatted outputs <a href="#autotoc_md66" id="autotoc_md66"></a>

<a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> delivers a JSON formatted output string with information about keys related to an opened Security Module.

## Example: Output for a host using security module IPP-MSK (conditioned output) <a href="#autotoc_md67" id="autotoc_md67"></a>

``` cpp
{
   "Keys":[
   {
   "KEK":{
   "Algorithm":"TDES [4]",
   "KeyAddress":1,
   "KeyLength":50,
   "KeyUsageAttribute":"key encryption or wrapping",
   "KeyVersion":"00",
   "ModeOfUseAttribute":"Decryption only [2]",
   "injected":"yes",
   "slot_id":0
   },
   "KeySet":1,
   "MGK":{ "injected":"no" },
   "PPK":{ "injected":"no" }
   },
   {
   "KEK":{
   "Algorithm":"TDES [4]",
   "KeyAddress":2,
   "KeyLength":50,
   "KeyUsageAttribute":"ISO 9797-1 MAC algorithm 1 (1-112 bits)",
   "KeyVersion":"00",
   "ModeOfUseAttribute":"MAC generate [5]",
   "injected":"yes",
   "slot_id":1
   },
   "MGK":{ "injected":"yes" },
   "PPK":{ "injected":"yes" },
   "KeySet":2
   },
   {
   "KEK":{ "injected":"no" },
   "KeySet":3
   },
   {
   "KEK":{ "injected":"no" },
   "KeySet":4
   },
   {
   "KEK":{ "injected":"no" },
   "KeySet":5
   },
   {
   "KEK":{ "injected":"no" },
   "KeySet":6
   },
   {
   "KEK":{ "injected":"no" },
   "KeySet":7
   },
   {
   "KEK":{ "injected":"no" },
   "KeySet":8
   },
   {
   "KEK":{ "injected":"no" },
   "KeySet":9
   },
   {
   "KEK":{ "injected":"no" },
   "KeySet":10
   }
   ]
}
```

## Example: Output for a host using security module IPP-DUKPT (conditioned output) <a href="#autotoc_md68" id="autotoc_md68"></a>

``` cpp
{
   "Keys":[
   {
   "DUKPT":{
   "KSN":"9876543210E00002",
   "injected":"yes",
   "slot_id":0
   },
   "KeySet":1
   },
   {
   "DUKPT":{
   "KSN":"552AE6B6DF000000002",
   "injected":"yes",
   "slot_id":1
   },
   "KeySet":2
   },
   {
   "DUKPT":{
   "KSN":"552AE7B7DF000000002",
   "injected":"yes",
   "slot_id":2
   },
   "KeySet":3
   }
   ]
}
```

# Security Module ADE <a href="#autotoc_md69" id="autotoc_md69"></a>

ADE (Account Data Encryption) is an SRED solution and provides DUKPT based card data encryption using triple DES encryption with a double-length key.

Sensitive card data protected is:

- Application Primary Account Number (PAN) \[Card read or Manual\]
- Track1 Data (MasterCard PayPass contactless only)
- Track 2 Data (MasterCard PayPass contactless only)
- Track 1 Discretionary Data
- Track 2 Discretionary Data
- Track 2 Equivalent Data
- Magstripe read Track 1, 2 and 3 data
- Manual CVV2

ADE DUKPT keys are injected using VRK, VTM or IPP. The keys are independent to IPP DUKPT keys.

## Functionality of ADE module <a href="#autotoc_md70" id="autotoc_md70"></a>

THe ADE module provides following functionality:

- get status of engine and ADE module in a JSON formatted output string
- load a DUKPT initial key and initial KSN (optional - key loading is usually not done by ADK-SEC). This functionality is not supported on Verix!
- encrypt card data

For card data encryption following parameters are configurable:

1.  encryption mode
2.  initialization vector (IV)
3.  padding scheme
4.  KeyAddressTable

ADE encryption modes of operation:

- MODE_ECB
- MODE_CBC

In CBC mode ADE uses a initialization vector (IV) per encryption (8-byte). If the IV is configured as \'Random\' the random value will be generated by the OS and returned as output parameter.

SRED padding schemes:

- NONE (default value)
- PKCS7 Each padding byte equals the padding length. Example: XX XX XX XX 04 04 04 04
- X923 Final padding byte equals the padding length and all other padding bytes equal 0x00. Example: XX XX XX XX 00 00 00 04
- ISO7816 First padding byte equals 0x80 and all other padding bytes equal 0x00. Example: XX XX XX XX 80 00 00 00
- ISO9797_1 Padding bytes are 0x00 if needed to fill block. Example: XX XX XX XX 00 00 00 00
- ISO9797_2 First padding byte equals 0x80 and all other padding bytes equal 0x00. There must be at least one padding byte. Example: XX XX XX XX 80 00 00 00

Involved API functions:

- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - load an initial DUKPT key in a slot given by KeyAddressTable (see configuration) and the initial KSN (This function is not supported on Verix!)
- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> with key type KEY_TYPE_DELETE_ALL_CUST_KEYS - special key type (replacement for iPS_DeleteKey(DEL_ALL)) is independent from host configuration and clears all OS-managed customer keys like VSS, IPP and ADE.
- <a href="namespacecom__verifone__seccmd.md#aa58bc1a6a2056aebd3edc92f3bfcce9d">secEncryptData()</a> - encrypt data
- <a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> - delivers a JSON-formatted list of injected keys per Key Set Id status of ADE engine (see section \'JSON-formatted outputs\' below)

# Configuration in sccfg.json <a href="#autotoc_md71" id="autotoc_md71"></a>

Optional tags:

- encMode - possible values: 0 (= \"MODE_ECB\"), 1 (= \"MODE_CBC\")
- IVType - possible values: 0 (= \"NOT_USED\"), 1 (= \"ZERO\"), 2 (= \"RANDOM\"), 3 (= \"USER_DEFINED\")
- padding - possible values: 0 (= \"NONE\"), 1 (= \"PKCS7\"), 2 (= \"X923\"), 3 (= \"ISO7816\"), 4 (= \"ISO9797_1\"), 5 (= \"ISO9797_2\")
- KeyAddressTable - key slots can be assigned per function by setting a KeySetId

## Example for configuration <a href="#autotoc_md72" id="autotoc_md72"></a>

``` cpp
{
  "name": "schemeADE",
  "settings": {
   "padding": "PKCS7",
   "encMode": "MODE_CBC",
   "IVType": "RANDOM",
   "KeyManagementType": "DUKPT",
   "KeyAddressTable": [
   {"description":"| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | <- KeySetId (10 slots)"},
   {"encryptData": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
   ]
  }
}
```

# JSON formatted outputs <a href="#autotoc_md73" id="autotoc_md73"></a>

<a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> delivers a JSON formatted output string with information about keys related to an opened Security Module.

## Example: Output for a host using module ADE (conditioned output) <a href="#autotoc_md74" id="autotoc_md74"></a>

``` cpp
{
   "Keys":[
   {
   "DUKPT":{
   "KSN":"FFFF9876543210E00001",
   "injected":"yes",
   "slot_id":0
   },
   "KeySet":1
   },
   {
   "DUKPT":{
   "KSN":"FFFF0013010000200005",
   "injected":"yes",
   "slot_id":1
   },
   "KeySet":2
   },
   {
   "DUKPT":{
   "KSN":"FFFF0013020000200002",
   "injected":"yes",
   "slot_id":2
   },
   "KeySet":3
   },
   {
   "DUKPT":{"injected":"no"},
   "KeySet":4
   },
   {
   "DUKPT":{"injected":"no"},
   "KeySet":5
   },
   {
   "DUKPT":{"injected":"no"},
   "KeySet":6
   },
   {
   "DUKPT":{"injected":"no"},
   "KeySet":7
   },
   {
   "DUKPT":{"injected":"no"},
   "KeySet":8
   },
   {
   "DUKPT":{"injected":"no"},
   "KeySet":9
   },
   {
   "DUKPT":{"injected":"no"},
   "KeySet":10
   }
   ],
   "Status":{
   "ADE active":"yes",
   "ADE enabled":"yes"
   }
}
```

# Security Module RSA <a href="#autotoc_md75" id="autotoc_md75"></a>

RSA is one of the first practical public-key crypto systems and is widely used for secure data transmission. In such a crypto system, the encryption key is public and differs from the decryption key which is kept secret.

Module is designed to work with two kind of keys, stored in system:

- RSA key is istalled in OS. It can be both Public and Private RSA key. E.g. AuthEx keys. All the keys can be used in crypto operations provided by ADK-SEC. The keys must be loaded only using OS functions like VRK.
- Certificate Tree + Working RSA keys stored in Certstore service. These RSA public key certificates can be loaded using ADK-SEC UpdateKey() in PEM format. A special key type KEY_TYPE_CERT must be used for Cert Tree installation. Loading/Update of Cert Tree occurs in PEM format that contains all certificates of the chain. Root Cert is mandatory.

Cert store is a service that:

- takes care about storing, validating the chain and protecting the root cert against updates using PEM file format
- support a new key type=KEY_TYPE_CERT that will allow to install/update intermediate certs via the already define APIs <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a>
- allow installation of X.509 public keys for the existing key types=Encrypt/Verify via the already define APIs <a href="namespacecom__verifone__seccmd.md#a75edecb24f839e04debb1aa5e47b5714">secSetKSId()</a>, <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a>
- allow to reference the installed Public keys in existing <a href="namespacecom__verifone__seccmd.md#aa58bc1a6a2056aebd3edc92f3bfcce9d">secEncryptData()</a> and <a href="namespacecom__verifone__seccmd.md#a5470ce89fa947abc445f251ae0b2387b">secVerify()</a> commands

# Configuration <a href="#autotoc_md76" id="autotoc_md76"></a>

## Padding <a href="#autotoc_md77" id="autotoc_md77"></a>

- Required entry [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc)
- possible values are defined in [CFG_TOKEN_PAD_NONE](#ga5c10532bcee038e5914f6373eacb46a0 "value of CFG_ENTRY_PADDING, default value") [CFG_TOKEN_RSA_PAD_PKCS1](#gac8dcc08d9e286bac750fea9e93d7ad73 "value of CFG_ENTRY_PADDING, RSA specific padding") [CFG_TOKEN_RSA_PAD_PKCS1_OAEP](#gaa4fb8e794160a33f923fe68ee7179bd3 "value of CFG_ENTRY_PADDING, RSA specific padding")

## hash type <a href="#autotoc_md78" id="autotoc_md78"></a>

- optional entry [CFG_ENTRY_HASHTYPE](#ga86a1b2813b9c5f7cf27242fdbf775439)
- effective for \"sign\" and \"verify\"
- possible values are defined in [CFG_TOKEN_HASHTYPE_SHA1](#gadd90d36b31ab0a577378f7720c076439 "value of CFG_ENTRY_HASHTYPE") [CFG_TOKEN_HASHTYPE_SHA224](#ga898427bc525c8513e971d8198e8f43dd "value of CFG_ENTRY_HASHTYPE") [CFG_TOKEN_HASHTYPE_SHA256](#gaba0922b0c5f4bb2f104d7dc3cd9affb2 "value of CFG_ENTRY_HASHTYPE, default value in AES module") [CFG_TOKEN_HASHTYPE_SHA384](#gaaacb946c9029654216868f58fe3d4eae "value of CFG_ENTRY_HASHTYPE") [CFG_TOKEN_HASHTYPE_SHA512](#ga0a15b7e427347133f38c9cd34a6441e3 "value of CFG_ENTRY_HASHTYPE")
- default value: #CFG_ENTRY_RSA_SHA256

## calcHash <a href="#autotoc_md79" id="autotoc_md79"></a>

- optional entry [CFG_ENTRY_RSA_CALC_HASH](#gad6cb616ebd3638d561f21650dc1466ad) - determines if a hash of the input data shall be calculated before performing the crypto operation
- effective for \"sign\" and \"verify\"
- possible values are defined in [CFG_TOKEN_RSA_CALC_HASH_YES](#ga4b1f0e2242b9b4ecc89ee3bf6f548976 "value of CFG_ENTRY_RSA_CALC_HASH, default value") [CFG_TOKEN_RSA_CALC_HASH_NO](#ga89545638866850d2cfaf499d4bbb2fb2 "value of CFG_ENTRY_RSA_CALC_HASH")
- default value: [CFG_TOKEN_RSA_CALC_HASH_YES](#ga4b1f0e2242b9b4ecc89ee3bf6f548976 "value of CFG_ENTRY_RSA_CALC_HASH, default value")

## secGetData format <a href="#autotoc_md80" id="autotoc_md80"></a>

- optional entry [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a)
- effective for <a href="namespacecom__verifone__seccmd.md#aff0a109c58ef5637c7bf3ffc0722c48d">secGetKeyData()</a> command
- possible values are defined in [CFG_TOKEN_RSA_GETKD_PEM](#gadc53fdacbcb2c210a7672d3e9fea6e99 "value of CFG_ENTRY_RSA_GETKD_FORMAT") [CFG_TOKEN_RSA_GETKD_DER](#gaa7a16f0472b900b454c6969c7d8720ee "value of CFG_ENTRY_RSA_GETKD_FORMAT") [CFG_TOKEN_RSA_GETKD_PRT](#gaeaf542d1a2dbd450b6aa81839df10200 "value of CFG_ENTRY_RSA_GETKD_FORMAT, default value") [CFG_TOKEN_RSA_GETKD_ORG](#ga8573171ef0704459dbdcd91b363db091 "value of CFG_ENTRY_RSA_GETKD_FORMAT")
- default value: [CFG_TOKEN_RSA_GETKD_PRT](#gaeaf542d1a2dbd450b6aa81839df10200 "value of CFG_ENTRY_RSA_GETKD_FORMAT, default value")

## KeyAddressTable <a href="#autotoc_md81" id="autotoc_md81"></a>

- Key-Slots are given as key-files relative to #RSA_KEY_PREFIX_VOS resp. #RSA_KEY_PREFIX_VOS, absolute path to the key file or \"internal\" for certstore usage. In case of \"internal\" the secUpdateKey can be used for certificate loading.
- For encrypt and verify this has to be a public key
- For decrypt and sign this has to be a private key, which is encrypted by vault-key

## example <a href="#autotoc_md82" id="autotoc_md82"></a>

``` cpp
{
   "padding": "PKCS1",
   "hashType": "SHA256",
   "calcHash": "yes"
   "getKeyDataFormat": "PEM",
   "KeyAddressTable": [
   {"encryptData": ["rkeys/usr1/key0.crt"]},
   {"decryptData": ["rkeys/usr1/key0.der"]},
   {"sign": ["rkeys/usr1/key0.der"]},
   {"verify": ["rkeys/usr1/key0.crt"]}
   ]
}
```

# JSON formatted outputs <a href="#autotoc_md83" id="autotoc_md83"></a>

<a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> delivers a JSON formatted output string with information about keys related to an opened Security Module.

## Example: Output for a host using module RSA (conditioned output) <a href="#autotoc_md84" id="autotoc_md84"></a>

``` cpp
{
   "Keys": [
   {
   "DDK": {
   "injected": "yes"
   },
   "DEK": {
   "info": {
   "key_id": 0,
   "status": 3,
   "ts": "20180110161432",
   "type": "R",
   "user_id": 1
   },
   "info_type": "RSA",
   "injected": "yes",
   "install_date": "12\/01\/2018 15:43:01",
   "name": "RSAOS10",
   "version": 1
   },
   "KeySet": 1,
   "MGK": {
   "injected": "yes"
   },
   "MVK": {
   "info": {
   "key_id": 0,
   "status": 3,
   "ts": "20180110161432",
   "type": "R",
   "user_id": 1
   },
   "info_type": "RSA",
   "injected": "yes",
   "install_date": "12\/01\/2018 15:43:01",
   "name": "RSAOS10",
   "version": 1
   }
   }
   ]
}
```

# Security Module SRED <a href="#autotoc_md85" id="autotoc_md85"></a>

Module SRED supports SRED MAC-ing and encryption using the MAC key variant and the same DUKPT future key as is used to encrypt.

Functionality of SRED module: THe SRED module provides following functionality:

- get status of module in a JSON formatted output string
- load a DUKPT initial key and initial KSN (optional - key loading is usually not done by ADK-SEC). This functionality is not supported on Verix!
- MAC generation/verification using ADE DUKPT keys

Involved API functions:

- <a href="namespacecom__verifone__seccmd.md#a66a1992f617359f2e4a96f4980478f82">secSign()</a>
- <a href="namespacecom__verifone__seccmd.md#a5470ce89fa947abc445f251ae0b2387b">secVerify()</a>

# Configuration in sccfg.json <a href="#autotoc_md86" id="autotoc_md86"></a>

Mandatory tags: none Optional tags:

- encMode MODE_ECB - default value MODE_CBC

- IVType NONE - default value ZERO RANDOM USER_DEFINED

- keyVariant X924_MAC_REQ_BW - default value X924_MAC_RESP X924_DE_REQ_BW

- algo DES112 ALG_9797_MAC_1 K is a single length key (K1) - default value

  ALG_9797_MAC_1A K is a double length key (K1 and K2) ALG_9797_MAC_2 K1 is a single length key (K1) K2 is a single length key (K2) ALG_9797_MAC_3 K1 is a single length key (K1) K2 is a single length key (K2) ALG_9797_MAC_4 K is a single length key (K1) K1 is a single length key (K1 XOR 0xF0F0F0F0F0F0F0F0) K2 is a single length key (K2) ALG_9797_MAC_5 K1 is a single length key (K1) K2 is a single length key (K1 XOR 0xF0F0F0F0F0F0F0F0) ALG_9797_MAC_5A K1 is a double length key (K1 and K2) K2 is a double length key (K1 XOR 0xF0F0F0F0F0F0F0F0) (K2 XOR 0xF0F0F0F0F0F0F0F0) ALG_CMAC_TDEA ALG_HMAC_SHA256

- padding NONE - default value PKCS7 Each padding byte equals the padding length. Example: XX XX XX XX 04 04 04 04 X923 Final padding byte equals the padding length and all other padding bytes equal 0x00. Example: XX XX XX XX 00 00 00 04 ISO7816 First padding byte equals 0x80 and all other padding bytes equal 0x00. Example: XX XX XX XX 80 00 00 00 ISO9797_1 Padding bytes are 0x00 if needed to fill block. Example: XX XX XX XX 00 00 00 00 ISO9797_2 First padding byte equals 0x80 and all other padding bytes equal 0x00. There must be at least one padding byte. Example: XX XX XX XX 80 00 00 00 \* \* - PKCS7

- KeyAddressTable - key slots can be assigned per function by setting a KeySetId

## Example for configuration <a href="#autotoc_md87" id="autotoc_md87"></a>

``` cpp
{
  "name": "schemeSREDMAC",
  "settings": {
   "padding": "NONE",
   "IVType": "ZERO",
   "encMode": "MODE_ECB",
   "algo": "ALG_9797_MAC_1A"
   "KSNincrementation": "BY_OPERATION",
   "KeyManagementType": "DUKPT",
   "KeyAddressTable": [
   {"description": "| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | <- KeySetId (10 slots)"},
   {"sign": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]},
   {"verify": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
   }
  }
}
```

# Security Module VisaDSP <a href="#autotoc_md88" id="autotoc_md88"></a>

VisaDSP provides two methods of Point-to-Point-Encryption for the following card data types: PAN, Cardholder Name, Track1, Track2. The two methods are:

- Standard Point-to-Point Encryption (P2PE)
- Format-Preserving Encryption (FPE)

Both methods use the same keys and the DES IPP-DUKPT or optional the ADE DUKPT key management scheme. Additionally to encryption the original card data are obfuscated if P2PE is used.

Functionality of module VisaDSP:

- handling of configuration data (key management type, encryption algorithm, \...)
- loading a DUKPT initial key and initial KSN (optional - key loading is not the task of ADK-SEC)
- handling of options and card data provided by TD (Transaction Data)
- encryption of card data of each type according to the configured encryption algorithm (data variant of the key is used)
- obfuscating card data in case of P2PE
- retrieving an encrypted PIN block (PIN variant of the key is used). This this possible only if IPP DUKPT key management scheme is used. Remark: PIN entry is not the task of ADK-SEC.
- delivering of information about keys (related to an opened Security Module)

Involved API functions:

- <a href="namespacecom__verifone__seccmd.md#ab249c77069e9fc9946745fd4c63d5e39">secUpdateKey()</a> - load an initial DUKPT key and the initial KSN
- <a href="namespacecom__verifone__seccmd.md#a6bc0d39e1739680282d33d3d68df84c9">secPutTransactionData()</a> - put options and card data to TD
- <a href="namespacecom__verifone__seccmd.md#aaed6fc175245ba31936547cffd988948">secEncryptTransactionData()</a> - perform a card data encryption (P2PE or FPE) and a card data obfuscation in case of P2PE
- <a href="namespacecom__verifone__seccmd.md#a85ada2e35c1d1cbf60c05454b88b4b44">secGetTransactionValue()</a> - get obfuscated card data if P2PE was used
- <a href="namespacecom__verifone__seccmd.md#ab3d26136c64019fd223aa9ccd120d4e0">secRetrieveEncryptedPIN()</a> - retrieve encrypted PIN block
- <a href="namespacecom__verifone__seccmd.md#ac31ab997e8dc434d72e427a5d841186a">secClearTransactionData()</a> - clear card data in TD
- <a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> - delivers a JSON-formatted list of injected keys per Key Set Id (see section \'JSON-formatted outputs\' below)

## Example for getting obfuscated data <a href="#autotoc_md89" id="autotoc_md89"></a>

``` cpp
{
  secError errCode = EsecOK;
  SecTransactionValue transDataOut;
  std::string obfCardDataType = CTransactionData::TagObfuscatedPAN;
  if ((errCode = secGetTransactionValue(handle, obfCardDataType, transDataOut)) != EsecOK)
  return ((int)errCode);
  std::vector<uint8_t> outData = transDataOut.getRaw();
}
```

# Configuration in sccfg.json <a href="#autotoc_md90" id="autotoc_md90"></a>

Mandatory tags:

- \"module\": \"VisaDSP\"
- \"encryptionAlgo\" - possible values: \"P2PE\" or \"FPE\"
- \"KeyManagementOption\" - in case of DUKPT IPP key management type
- \"KeyAddressTable\" - list Key Address Table of involved functions (key slots can be selected by setting Key Set Ids)

Optional tags:

- \"permissions\" - access rights for card data types (e.g.: 1=writable only)

## Example for configuration <a href="#autotoc_md91" id="autotoc_md91"></a>

``` cpp
{
  "secSchemes": [
  {
   "name": "schemeVisaDSP",
   "settings": {
   "encryptionAlgo": "P2PE"
   }
  }
  . . .
  "hosts": [
  {
   "name": "VisaDSP_FPE_Host",
   "description": "IPP-DUKPT usage",
   "scheme": "schemeVisaDSP",
   "module": "VisaDSP",
   "settings": {
   "encryptionAlgo": "FPE",
   "KeyManagementOption": "0A3",
   "KeyAddressTable": [
   {"description": "| 1 | 2 | 3 | <- KeySetId (3 slots)"},
   {"updateKey": ["0", "1", "2"]},
   {"encryptData": ["0", "1", "2"]},
   {"retrieveEncPIN": ["0", "1", "2"]}
   ]
   },
   "permissions": {
   "TagPAN": 1,
   "TagCHName": 1,
   "TagTrack1": 1,
   "TagTrack2": 1
   }
  }
  . . .
}
```

# JSON formatted outputs <a href="#autotoc_md92" id="autotoc_md92"></a>

<a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> delivers a JSON formatted output string with information about keys related to an opened Security Module.

## Example: Output for a host using module VisaDSP (conditioned output) <a href="#autotoc_md93" id="autotoc_md93"></a>

``` cpp
{
   "Keys":[
   {
   "DUKPT":{
   "KSN":"AFEECABC871200000003",
   "injected":"yes",
   "slot_id":0
   },
   "KeySet":1
   },
   {
   "DUKPT":{
   "KSN":"AFEECABC871200000003",
   "injected":"yes",
   "slot_id":1
   },
   "KeySet":2
   },
   {
   "DUKPT":{
   "KSN":"736081210E000004",
   "injected":"yes",
   "slot_id":2
   },
   "KeySet":3
   }
   ]
}
```

# Security Module CryptoRW <a href="#autotoc_md94" id="autotoc_md94"></a>

CryptoRW module is a replacement for deprecated OS function cryptoRead / cryptoWrite()

Use the Data Encryption feature to guarantee that the content is lost if the unit is tampered with. The data is encrypted with a key derived from the top-level key erased from the terminal in case of attack, making it impossible to recover the plain text data. The key is unique for each terminal and is not known outside the cryptographic unit of the terminal. This feature can be used, for instance, when tamper detection must cause the deletion of the transaction batch file.

In contrast to the deprecated cryptoRead() / cryptoWrite() APIs, the CryptoRW module will not work on file handles and only be used to encrypt or decrypt data with a terminal individual key.

## Functionality of CryptoRW module <a href="#autotoc_md95" id="autotoc_md95"></a>

The CryptoRW module provides following functionality:

- encrypt data - encrypts the input data with the terminal individual key.
- decrypt data - decrypts the input data with the terminal individual key. Encrypted data can be in old (legacy) or new format. Decryption will be done according host configuation flag \"legacy_decrypt\" described below.
- get status of engine and CryptoRW module in a JSON formatted output string

Please be aware that the data encryption of this module will use a different format, then used with the deprecated cryptoRead() / cryptoWrite() APIs. For compatibility and migration of data stored in old format, the decrypt functionality can be configured to use the old (deprecated) or the new format (default), but data encryption always uses the new format, independent of the configuration.

The decrypt mode can be configured the following ways:

- host/schema configuration settings entry \"legacy_decrypt\" : true/false (default value \"false\" if entry is not exists)
- transaction data entry td\[<a href="classcom__adksec__cmd_1_1_c_transaction_data.md#ab5aff0278f7b0482a946cf9008dacb7d">CTransactionData::TagCryptoRWLegacyDecrypt</a>\] = true/false (default value \"false\" if the tag is not exists)

If application does not need to decrypt files encrypted with old interface, please use in general \"legacy_decrypt\" : false.
Data encryption occurs only in new format.

Involved API functions:

- <a href="namespacecom__verifone__seccmd.md#aa58bc1a6a2056aebd3edc92f3bfcce9d">secEncryptData()</a> - encrypt data. Please note, that encrypted data are longer than input data due to some internal formatting during encryption.
- <a href="namespacecom__verifone__seccmd.md#a9cd679dc9763b06566dff28b3d3268c9">secDecryptData()</a> - decrypt data. Decrypted data do not contain any internal formatting.

# Configuration in sccfg.json <a href="#autotoc_md96" id="autotoc_md96"></a>

Optional tags:

- legacy_decrypt - possible values: true (= use legacy decryption), false (= data are in new format, default value)

## Example for configuration <a href="#autotoc_md97" id="autotoc_md97"></a>

``` cpp
{
  "adksecconfig": {
   "serviceCfg":
   {
   "secSchemes": [
   {
   "name": "schemeCryptoReadWrite",
   "settings": {
   "legacy_decrypt": false
   }
   }
   ]
   }
   "hosts": [
   {
   "name": "hostSafeData",
   "scheme": "schemeCryptoReadWrite",
   "module": "CryptoRW"
   }
   ]
  }
}
```

## Example of usage <a href="#autotoc_md98" id="autotoc_md98"></a>

``` cpp
{
   secHandle_t hdl = 0;
   std::vector<uint8_t> plainData;
   std::vector<uint8_t> encData;
   std::vector<uint8_t> decryptedData;
   std::vector<uint8_t> vdummy;
   secError reterr = EsecOK;
   secOpen("hostSafeData", hdl);
   plainData.clear();
   secGenerateRandom(plainData, 77 ); // 77 byte of data to be encrypted. It can be data from file
   reterr = secEncryptData(hdl, plainData, encData, vdummy, vdummy);
   if (EsecNotSupportedModule == reterr)
   {
   LOG("Skip test due to not supported OS functionality");
   secClose(hdl);
   return;
   }
   if (plainData.size()+64 != encData.size()) // header to protect encrypted data
   {
   // error handling
   }
   secDecryptData(hdl, encData, decryptedData, vdummy, vdummy));
   SEC_DBG_HEXDUMP_TRACE("plain data", plainData.data(), plainData.size());
   SEC_DBG_HEXDUMP_TRACE("encrypted data", encData.data(), encData.size());
   SEC_DBG_HEXDUMP_TRACE("decrypted data", decryptedData.data(), decryptedData.size());
   if (plainData.size() != decryptedData.size())
   {
   // error handling
   }
   secClose(hdl);
}
```

# Security Module AES <a href="#autotoc_md99" id="autotoc_md99"></a>

AES is a specification for the encryption of electronic data. The algorithm described by AES is a symmetric-key algorithm, meaning the same key is used for both encrypting and decrypting the data. It is a variant of Rijndael which has a fixed block size of 128 bits, and a key size of 128, 192, or 256 bits. By contrast, the Rijndael specification per se is specified with block and key sizes that may be any multiple of 32 bits, both with a minimum of 128 and a maximum of 256 bits.

The Security AES Module uses the AES DUKPT algorithm. Transaction key(s) of 128, 192 or 256 bit length are derived from an Initial Terminal DUKPT Key of the corresponding length based on a transaction number. A transaction number consists of an Initial Key-ID and the Transaction Counter. The Initial Key and Initial Key-ID is injected via VRK or VTM.

## Functionality of AES module <a href="#autotoc_md100" id="autotoc_md100"></a>

The AES module provides following functionality:

- CMAC calculation and verifying of data
- data encryption and decryption
- retrieval of an encrypted PIN block
- key inventory information in a JSON formatted output string

Involved API functions:

- <a href="namespacecom__verifone__seccmd.md#a66a1992f617359f2e4a96f4980478f82">secSign()</a> - generation CMAC
- <a href="namespacecom__verifone__seccmd.md#a5470ce89fa947abc445f251ae0b2387b">secVerify()</a> - verifying CMAC
- <a href="namespacecom__verifone__seccmd.md#aa58bc1a6a2056aebd3edc92f3bfcce9d">secEncryptData()</a> - encrypt data
- <a href="namespacecom__verifone__seccmd.md#a9cd679dc9763b06566dff28b3d3268c9">secDecryptData()</a> - decrypt data
- <a href="namespacecom__verifone__seccmd.md#ab3d26136c64019fd223aa9ccd120d4e0">secRetrieveEncryptedPIN()</a> - retrieve the encrypted PIN block of a entered PIN
- <a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> - delivers status information about injected keys

# Configuration <a href="#autotoc_md101" id="autotoc_md101"></a>

## algorithm method <a href="#autotoc_md102" id="autotoc_md102"></a>

- Required entry #CFG_ENTRY_ALG
- possible values are defined in [CFG_TOKEN_ALGO_CMAC](#gaf79405974fcfbba042ef5c2cb40e08a7 "value of CFG_ENTRY_ALGO")

## encryption mode <a href="#autotoc_md103" id="autotoc_md103"></a>

- required entry #CFG_ENTRY_AES_ENCMODE
- possible values are defined in #CFG_ENTRY_AES_MODE_ECB, #CFG_ENTRY_AES_MODE_CBC
- default value is #CFG_ENTRY_AES_MODE_ECB

## padding <a href="#autotoc_md104" id="autotoc_md104"></a>

- Required entry #CFG_ENTRY_AES_PAD
- possible values are defined in #CFG_ENTRY_AES_PAD_NONE, #CFG_ENTRY_AES_PAD_PKCS7
- default value is #CFG_ENTRY_AES_PAD_PKCS7

## KeyAddressTable <a href="#autotoc_md105" id="autotoc_md105"></a>

- Key files relative to #AES_KEY_PREFIX_VOS resp. #AES_KEY_PREFIX_VRX can be assigned per function by setting a KeySetId

## Example for configuration <a href="#autotoc_md106" id="autotoc_md106"></a>

``` cpp
{
   "name": "schemeAESDUKPT",
   "settings": {
   "algo": "CMAC",
   "encMode": "MODE_CBC",
   "padding": "NONE",
   "KeyAddressTable": [
   {"sign": ["generickeys/usr1/key2.ses"]},
   {"verify": ["generickeys/usr1/key2.ses"]},
   {"encryptData": ["generickeys/usr1/key2.ses"]},
   {"decryptData": ["generickeys/usr1/key2.ses"]},
   {"retrieveEncPIN": ["generickeys/usr1/key2.ses"]}
   ]
   }
}
```

# JSON formatted outputs <a href="#autotoc_md107" id="autotoc_md107"></a>

<a href="namespacecom__verifone__seccmd.md#a79b00ea8a8aed3b7950800bf136a1944">secGetKeyInventory()</a> delivers a JSON formatted output string with information about keys related to an opened Security Module.

## Example: Output for a host using module AES (conditioned output) <a href="#autotoc_md108" id="autotoc_md108"></a>

``` cpp
{
   "Keys": [
   {
   "DDK": {
   "KSN": "123456789012345600000003",
   "KeyType": "aesdukpt192",
   "injected": "yes"
   },
   "DEK": {
   "KSN": "123456789012345600000002",
   "KeyType": "aesdukpt192",
   "injected": "yes"
   },
   "KeySet": 1,
   "MGK": {
   "KSN": "123456789012345600000004",
   "KeyType": "aesdukpt256",
   "injected": "yes"
   },
   "MVK": {
   "KSN": "123456789012345600000005",
   "KeyType": "aesdukpt256",
   "injected": "yes"
   },
   "PPK": {
   "KSN": "123456789012345600000002",
   "KeyType": "aesdukpt128",
   "injected": "yes"
   }
   },
   {
   "DDK": {
   "KSN": "123456789012345600000004",
   "KeyType": "aesdukpt128",
   "injected": "yes"
   },
   "DEK": {
   "KSN": "123456789012345600000003",
   "KeyType": "aesdukpt128",
   "injected": "yes"
   },
   "KeySet": 2,
   "MGK": {
   "injected": "no"
   },
   "MVK": {
   "injected": "no"
   },
   "PPK": {
   "injected": "no"
   }
   },
   {
   "DDK": {
   "KSN": "123456789012345600000007",
   "KeyType": "aesdukpt256",
   "injected": "yes"
   },
   "DEK": {
   "KSN": "123456789012345600000006",
   "KeyType": "aesdukpt256",
   "injected": "yes"
   },
   "KeySet": 3,
   "MGK": {
   "injected": "no"
   },
   "MVK": {
   "injected": "no"
   },
   "PPK": {
   "injected": "no"
   }
   }
   ]
}
```

## MacroDefinition Documentation {#macro-definition-documentation}

## CFG_ENTRY_ALGO <a href="#gab479d306344dff2934da238f5e2c48c6" id="gab479d306344dff2934da238f5e2c48c6"></a>

<p>#define CFG_ENTRY_ALGO   \"algo\"</p>

## CFG_ENTRY_DUKPT_INC_KSN <a href="#ga86878ef55c861a78b3c0240703d1bedb" id="ga86878ef55c861a78b3c0240703d1bedb"></a>

<p>#define CFG_ENTRY_DUKPT_INC_KSN   \"KSNincrementation\"</p>

## CFG_ENTRY_DUKPT_KEY_VARIANT <a href="#ga053f55fa711f0286d30aa4e79207aa6d" id="ga053f55fa711f0286d30aa4e79207aa6d"></a>

<p>#define CFG_ENTRY_DUKPT_KEY_VARIANT   \"keyVariant\"</p>

## CFG_ENTRY_ENCMODE <a href="#ga946270505efb931b3211312afa8d492c" id="ga946270505efb931b3211312afa8d492c"></a>

<p>#define CFG_ENTRY_ENCMODE   \"encMode\"</p>

## CFG_ENTRY_HASHTYPE <a href="#ga86a1b2813b9c5f7cf27242fdbf775439" id="ga86a1b2813b9c5f7cf27242fdbf775439"></a>

<p>#define CFG_ENTRY_HASHTYPE   \"hashType\"</p>

## CFG_ENTRY_IPP_KEY_MANAGEMENT <a href="#ga9b4a8d263360a9fc49e056cd459c65b0" id="ga9b4a8d263360a9fc49e056cd459c65b0"></a>

<p>#define CFG_ENTRY_IPP_KEY_MANAGEMENT   \"KeyManagementOption\"</p>

## CFG_ENTRY_IV <a href="#gab60d01dead9ae5dd41d7a0c50e37e231" id="gab60d01dead9ae5dd41d7a0c50e37e231"></a>

<p>#define CFG_ENTRY_IV   \"IVType\"</p>

## CFG_ENTRY_KEY_MANAGEMENT_TYPE <a href="#gace84acf3acd2546983b0ac7f34bccd82" id="gace84acf3acd2546983b0ac7f34bccd82"></a>

<p>#define CFG_ENTRY_KEY_MANAGEMENT_TYPE   \"KeyManagementType\"</p>

## CFG_ENTRY_PADDING <a href="#gafe03108f84657a93a3f7e1a52feb53bc" id="gafe03108f84657a93a3f7e1a52feb53bc"></a>

<p>#define CFG_ENTRY_PADDING   \"padding\"</p>

## CFG_ENTRY_RSA_CALC_HASH <a href="#gad6cb616ebd3638d561f21650dc1466ad" id="gad6cb616ebd3638d561f21650dc1466ad"></a>

<p>#define CFG_ENTRY_RSA_CALC_HASH   \"calcHash\"</p>

## CFG_ENTRY_RSA_GETKD_FORMAT <a href="#ga336a59e27b41607b81eb15f34cac894a" id="ga336a59e27b41607b81eb15f34cac894a"></a>

<p>#define CFG_ENTRY_RSA_GETKD_FORMAT   \"getKeyDataFormat\"</p>

## CFG_ENTRY_TRANSPORT_KEY <a href="#ga89cd282e773cd9be0282720efb9bae94" id="ga89cd282e773cd9be0282720efb9bae94"></a>

<p>#define CFG_ENTRY_TRANSPORT_KEY   \"transportKey\"</p>

## CFG_TOKEN_ALGO_CMAC <a href="#gaf79405974fcfbba042ef5c2cb40e08a7" id="gaf79405974fcfbba042ef5c2cb40e08a7"></a>

<p>#define CFG_TOKEN_ALGO_CMAC   \"CMAC\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6)

## CFG_TOKEN_ALGO_HMAC <a href="#ga7e7c533e64c60c460623099a271839e6" id="ga7e7c533e64c60c460623099a271839e6"></a>

<p>#define CFG_TOKEN_ALGO_HMAC   \"HMAC\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6)

## CFG_TOKEN_DUKPT_BY_API <a href="#gad3b7e6d29779eee52566da614317208b" id="gad3b7e6d29779eee52566da614317208b"></a>

<p>#define CFG_TOKEN_DUKPT_BY_API   \"BY_API\"</p>

value of [CFG_ENTRY_DUKPT_INC_KSN](#ga86878ef55c861a78b3c0240703d1bedb)

## CFG_TOKEN_DUKPT_BY_OPERATION <a href="#ga1038e59d5a70ded57d6fa4d4828a5d00" id="ga1038e59d5a70ded57d6fa4d4828a5d00"></a>

<p>#define CFG_TOKEN_DUKPT_BY_OPERATION   \"BY_OPERATION\"</p>

value of [CFG_ENTRY_DUKPT_INC_KSN](#ga86878ef55c861a78b3c0240703d1bedb) default value

## CFG_TOKEN_DUKPT_KEY_VAR_BOTH <a href="#ga397a6f6091a11718ed25027c3e41d92d" id="ga397a6f6091a11718ed25027c3e41d92d"></a>

<p>#define CFG_TOKEN_DUKPT_KEY_VAR_BOTH   \"both\"</p>

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d). In case of AES DUKPT - Data Encryption Both Ways / Message Authentication Both Ways

## CFG_TOKEN_DUKPT_KEY_VAR_REQUEST <a href="#ga6727ebc5a0cda870745972d4b55ab71c" id="ga6727ebc5a0cda870745972d4b55ab71c"></a>

<p>#define CFG_TOKEN_DUKPT_KEY_VAR_REQUEST   \"request\"</p>

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d), default value. In case of AES DUKPT - Data Encryption Encrypt / Message Authentication Generation

## CFG_TOKEN_DUKPT_KEY_VAR_RESPONSE <a href="#ga34c5fb6b1b6b58c4d6a51f2da208479b" id="ga34c5fb6b1b6b58c4d6a51f2da208479b"></a>

<p>#define CFG_TOKEN_DUKPT_KEY_VAR_RESPONSE   \"response\"</p>

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d). In case of AES DUKPT - Data Encryption Decrypt / Message Authentication Verification

## CFG_TOKEN_ENCMODE_CBC <a href="#gaebf52c0f1820c19768a164f88a27bc94" id="gaebf52c0f1820c19768a164f88a27bc94"></a>

<p>#define CFG_TOKEN_ENCMODE_CBC   \"MODE_CBC\"</p>

value of CFG_ENTRY_ENCMODE

## CFG_TOKEN_ENCMODE_ECB <a href="#gafd97668a7484ce5224a24c3c7a657b08" id="gafd97668a7484ce5224a24c3c7a657b08"></a>

<p>#define CFG_TOKEN_ENCMODE_ECB   \"MODE_ECB\"</p>

value of CFG_ENTRY_ENCMODE, default value

## CFG_TOKEN_HASHTYPE_SHA1 <a href="#gadd90d36b31ab0a577378f7720c076439" id="gadd90d36b31ab0a577378f7720c076439"></a>

<p>#define CFG_TOKEN_HASHTYPE_SHA1   \"SHA1\"</p>

value of CFG_ENTRY_HASHTYPE

## CFG_TOKEN_HASHTYPE_SHA224 <a href="#ga898427bc525c8513e971d8198e8f43dd" id="ga898427bc525c8513e971d8198e8f43dd"></a>

<p>#define CFG_TOKEN_HASHTYPE_SHA224   \"SHA224\"</p>

value of CFG_ENTRY_HASHTYPE

## CFG_TOKEN_HASHTYPE_SHA256 <a href="#gaba0922b0c5f4bb2f104d7dc3cd9affb2" id="gaba0922b0c5f4bb2f104d7dc3cd9affb2"></a>

<p>#define CFG_TOKEN_HASHTYPE_SHA256   \"SHA256\"</p>

value of CFG_ENTRY_HASHTYPE, default value in AES module

## CFG_TOKEN_HASHTYPE_SHA384 <a href="#gaaacb946c9029654216868f58fe3d4eae" id="gaaacb946c9029654216868f58fe3d4eae"></a>

<p>#define CFG_TOKEN_HASHTYPE_SHA384   \"SHA384\"</p>

value of CFG_ENTRY_HASHTYPE

## CFG_TOKEN_HASHTYPE_SHA512 <a href="#ga0a15b7e427347133f38c9cd34a6441e3" id="ga0a15b7e427347133f38c9cd34a6441e3"></a>

<p>#define CFG_TOKEN_HASHTYPE_SHA512   \"SHA512\"</p>

value of CFG_ENTRY_HASHTYPE

## CFG_TOKEN_IV_NONE <a href="#ga82bfec8916794526f55f323be2384cc9" id="ga82bfec8916794526f55f323be2384cc9"></a>

<p>#define CFG_TOKEN_IV_NONE   \"NONE\"</p>

value of CFG_ENTRY_IV default value

## CFG_TOKEN_IV_RAND <a href="#ga1963b2d020f256b2bc8f686e8d79c878" id="ga1963b2d020f256b2bc8f686e8d79c878"></a>

<p>#define CFG_TOKEN_IV_RAND   \"RANDOM\"</p>

value of CFG_ENTRY_IV

## CFG_TOKEN_IV_USE_INPUT <a href="#gaa3f2a7cd9700eb6e094c491cba90f44b" id="gaa3f2a7cd9700eb6e094c491cba90f44b"></a>

<p>#define CFG_TOKEN_IV_USE_INPUT   \"USER_DEFINED\"</p>

value of CFG_ENTRY_IV

## CFG_TOKEN_IV_ZERO <a href="#ga40452c6a4635fa88638d637ffd08852e" id="ga40452c6a4635fa88638d637ffd08852e"></a>

<p>#define CFG_TOKEN_IV_ZERO   \"ZERO\"</p>

value of CFG_ENTRY_IV

## CFG_TOKEN_KEY_MAN_TYPE_AS2805 <a href="#ga24851e60ec98ee64e15d7d019a561c5e" id="ga24851e60ec98ee64e15d7d019a561c5e"></a>

<p>#define CFG_TOKEN_KEY_MAN_TYPE_AS2805   \"AS2805\"</p>

value of CFG_ENTRY_KEY_MANAGEMENT_TYPE

## CFG_TOKEN_KEY_MAN_TYPE_DUKPT <a href="#gac61a347bdf88553e6014655dcf50cd96" id="gac61a347bdf88553e6014655dcf50cd96"></a>

<p>#define CFG_TOKEN_KEY_MAN_TYPE_DUKPT   \"DUKPT\"</p>

value of CFG_ENTRY_KEY_MANAGEMENT_TYPE

## CFG_TOKEN_KEY_MAN_TYPE_MSK <a href="#ga6cc85bd481d0e2068105c2ab52ed1c3c" id="ga6cc85bd481d0e2068105c2ab52ed1c3c"></a>

<p>#define CFG_TOKEN_KEY_MAN_TYPE_MSK   \"MSK\"</p>

value of CFG_ENTRY_KEY_MANAGEMENT_TYPE

## CFG_TOKEN_PAD_FF <a href="#ga0f0e7c3801fb3b722d4bf3e42743250d" id="ga0f0e7c3801fb3b722d4bf3e42743250d"></a>

<p>#define CFG_TOKEN_PAD_FF   \"FF\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc)

## CFG_TOKEN_PAD_ISO10126 <a href="#gae7322759618c7331c57ddd6e1f3c88a2" id="gae7322759618c7331c57ddd6e1f3c88a2"></a>

<p>#define CFG_TOKEN_PAD_ISO10126   \"ISO10126\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc)

## CFG_TOKEN_PAD_ISO7816 <a href="#gac1440351c36ae311ae5268468a6f0da8" id="gac1440351c36ae311ae5268468a6f0da8"></a>

<p>#define CFG_TOKEN_PAD_ISO7816   \"ISO7816\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc)

## CFG_TOKEN_PAD_ISO9797_1 <a href="#ga9d966f4258d3169c123770080d65e5ba" id="ga9d966f4258d3169c123770080d65e5ba"></a>

<p>#define CFG_TOKEN_PAD_ISO9797_1   \"ISO9797_1\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), ADE/SRED specific padding

## CFG_TOKEN_PAD_ISO9797_2 <a href="#gabada9ee23745697d8202500d8086b102" id="gabada9ee23745697d8202500d8086b102"></a>

<p>#define CFG_TOKEN_PAD_ISO9797_2   \"ISO9797_2\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), ADE/SRED specific padding

## CFG_TOKEN_PAD_NONE <a href="#ga5c10532bcee038e5914f6373eacb46a0" id="ga5c10532bcee038e5914f6373eacb46a0"></a>

<p>#define CFG_TOKEN_PAD_NONE   \"NONE\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), default value

## CFG_TOKEN_PAD_PKCS7 <a href="#gade87be513aa2c1a1a5b5271f78147533" id="gade87be513aa2c1a1a5b5271f78147533"></a>

<p>#define CFG_TOKEN_PAD_PKCS7   \"PKCS7\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc)

## CFG_TOKEN_PAD_SPACE <a href="#ga27203e3e9c85b785354155336c7cb83b" id="ga27203e3e9c85b785354155336c7cb83b"></a>

<p>#define CFG_TOKEN_PAD_SPACE   \"SPACE\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc)

## CFG_TOKEN_PAD_X923 <a href="#ga48e6b29ddaa97bbbd1d270f6c2a0da12" id="ga48e6b29ddaa97bbbd1d270f6c2a0da12"></a>

<p>#define CFG_TOKEN_PAD_X923   \"X923\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc)

## CFG_TOKEN_PAD_ZERO <a href="#gaf95a5567d68b9d300baef8e27a741f8d" id="gaf95a5567d68b9d300baef8e27a741f8d"></a>

<p>#define CFG_TOKEN_PAD_ZERO   \"ZERO\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc)

## CFG_TOKEN_RSA_CALC_HASH_NO <a href="#ga89545638866850d2cfaf499d4bbb2fb2" id="ga89545638866850d2cfaf499d4bbb2fb2"></a>

<p>#define CFG_TOKEN_RSA_CALC_HASH_NO   \"no\"</p>

value of [CFG_ENTRY_RSA_CALC_HASH](#gad6cb616ebd3638d561f21650dc1466ad)

## CFG_TOKEN_RSA_CALC_HASH_YES <a href="#ga4b1f0e2242b9b4ecc89ee3bf6f548976" id="ga4b1f0e2242b9b4ecc89ee3bf6f548976"></a>

<p>#define CFG_TOKEN_RSA_CALC_HASH_YES   \"yes\"</p>

value of [CFG_ENTRY_RSA_CALC_HASH](#gad6cb616ebd3638d561f21650dc1466ad), default value

## CFG_TOKEN_RSA_GETKD_DER <a href="#gaa7a16f0472b900b454c6969c7d8720ee" id="gaa7a16f0472b900b454c6969c7d8720ee"></a>

<p>#define CFG_TOKEN_RSA_GETKD_DER   \"DER\"</p>

value of [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a)

## CFG_TOKEN_RSA_GETKD_ORG <a href="#ga8573171ef0704459dbdcd91b363db091" id="ga8573171ef0704459dbdcd91b363db091"></a>

<p>#define CFG_TOKEN_RSA_GETKD_ORG   \"ORIGINAL\"</p>

value of [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a)

## CFG_TOKEN_RSA_GETKD_PEM <a href="#gadc53fdacbcb2c210a7672d3e9fea6e99" id="gadc53fdacbcb2c210a7672d3e9fea6e99"></a>

<p>#define CFG_TOKEN_RSA_GETKD_PEM   \"PEM\"</p>

value of [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a)

## CFG_TOKEN_RSA_GETKD_PRT <a href="#gaeaf542d1a2dbd450b6aa81839df10200" id="gaeaf542d1a2dbd450b6aa81839df10200"></a>

<p>#define CFG_TOKEN_RSA_GETKD_PRT   \"PRINT\"</p>

value of [CFG_ENTRY_RSA_GETKD_FORMAT](#ga336a59e27b41607b81eb15f34cac894a), default value

## CFG_TOKEN_RSA_PAD_PKCS1 <a href="#gac8dcc08d9e286bac750fea9e93d7ad73" id="gac8dcc08d9e286bac750fea9e93d7ad73"></a>

<p>#define CFG_TOKEN_RSA_PAD_PKCS1   \"PKCS1\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), RSA specific padding

## CFG_TOKEN_RSA_PAD_PKCS1_OAEP <a href="#gaa4fb8e794160a33f923fe68ee7179bd3" id="gaa4fb8e794160a33f923fe68ee7179bd3"></a>

<p>#define CFG_TOKEN_RSA_PAD_PKCS1_OAEP   \"PKCS1_OAEP\"</p>

value of [CFG_ENTRY_PADDING](#gafe03108f84657a93a3f7e1a52feb53bc), RSA specific padding

## CFG_TOKEN_SRED_ALG_1 <a href="#gafdd390e0c15cdc2eed87ca316d3bbb74" id="gafdd390e0c15cdc2eed87ca316d3bbb74"></a>

<p>#define CFG_TOKEN_SRED_ALG_1   \"ALG_9797_MAC_1\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), default value. SRED specific padding. No default value for AES module

## CFG_TOKEN_SRED_ALG_1A <a href="#ga00432754611bf9d4d68928f46aacf7e1" id="ga00432754611bf9d4d68928f46aacf7e1"></a>

<p>#define CFG_TOKEN_SRED_ALG_1A   \"ALG_9797_MAC_1A\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding

## CFG_TOKEN_SRED_ALG_2 <a href="#ga8c9674a4e3e987b05f9faa0d5e545833" id="ga8c9674a4e3e987b05f9faa0d5e545833"></a>

<p>#define CFG_TOKEN_SRED_ALG_2   \"ALG_9797_MAC_2\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding

## CFG_TOKEN_SRED_ALG_3 <a href="#gac239a169346e74784abe25141f702fa1" id="gac239a169346e74784abe25141f702fa1"></a>

<p>#define CFG_TOKEN_SRED_ALG_3   \"ALG_9797_MAC_3\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding

## CFG_TOKEN_SRED_ALG_4 <a href="#ga769d2b2a5b51bbc6e49b5b72abd45e6b" id="ga769d2b2a5b51bbc6e49b5b72abd45e6b"></a>

<p>#define CFG_TOKEN_SRED_ALG_4   \"ALG_9797_MAC_4\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding

## CFG_TOKEN_SRED_ALG_5 <a href="#ga999281312eeef703cef5cfe1449aaee0" id="ga999281312eeef703cef5cfe1449aaee0"></a>

<p>#define CFG_TOKEN_SRED_ALG_5   \"ALG_9797_MAC_5\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding

## CFG_TOKEN_SRED_ALG_5A <a href="#gab5822349188eae06fa55634ea4d3bb49" id="gab5822349188eae06fa55634ea4d3bb49"></a>

<p>#define CFG_TOKEN_SRED_ALG_5A   \"ALG_9797_MAC_5A\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding

## CFG_TOKEN_SRED_ALG_CMAC <a href="#ga312073af7ce6f177d077f21fc164a897" id="ga312073af7ce6f177d077f21fc164a897"></a>

<p>#define CFG_TOKEN_SRED_ALG_CMAC   \"ALG_CMAC_TDEA\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding

## CFG_TOKEN_SRED_ALG_HMAC <a href="#gac26c4068e2480cbb6fd967a551cf790c" id="gac26c4068e2480cbb6fd967a551cf790c"></a>

<p>#define CFG_TOKEN_SRED_ALG_HMAC   \"ALG_HMAC_SHA256\"</p>

value of [CFG_ENTRY_ALGO](#gab479d306344dff2934da238f5e2c48c6), SRED specific padding

## CFG_TOKEN_SRED_VARIANT_X924_MAC_REQ_BW <a href="#gac10817d4961802bbf9da51825ed9a42f" id="gac10817d4961802bbf9da51825ed9a42f"></a>

<p>#define CFG_TOKEN_SRED_VARIANT_X924_MAC_REQ_BW   \"X924_MAC_REQ_BW\"</p>

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d)

## CFG_TOKEN_SRED_VARIANT_X924_MAC_RESP <a href="#gad736c699dfba417d61030f2e12ade24b" id="gad736c699dfba417d61030f2e12ade24b"></a>

<p>#define CFG_TOKEN_SRED_VARIANT_X924_MAC_RESP   \"X924_MAC_RESP\"</p>

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](#ga053f55fa711f0286d30aa4e79207aa6d)

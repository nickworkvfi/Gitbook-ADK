---
title: Config

---

# Config

 [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CFG_ENTRY_IV](group___config.md#define-cfg-entry-iv)**  |
|  | **[CFG_TOKEN_IV_NONE](group___config.md#define-cfg-token-iv-none)** <br>value of CFG_ENTRY_IV default value  |
|  | **[CFG_TOKEN_IV_ZERO](group___config.md#define-cfg-token-iv-zero)** <br>value of CFG_ENTRY_IV  |
|  | **[CFG_TOKEN_IV_RAND](group___config.md#define-cfg-token-iv-rand)** <br>value of CFG_ENTRY_IV  |
|  | **[CFG_TOKEN_IV_USE_INPUT](group___config.md#define-cfg-token-iv-use-input)** <br>value of CFG_ENTRY_IV  |
|  | **[CFG_ENTRY_ENCMODE](group___config.md#define-cfg-entry-encmode)**  |
|  | **[CFG_TOKEN_ENCMODE_ECB](group___config.md#define-cfg-token-encmode-ecb)** <br>value of CFG_ENTRY_ENCMODE, default value  |
|  | **[CFG_TOKEN_ENCMODE_CBC](group___config.md#define-cfg-token-encmode-cbc)** <br>value of CFG_ENTRY_ENCMODE  |
|  | **[CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding)**  |
|  | **[CFG_TOKEN_PAD_NONE](group___config.md#define-cfg-token-pad-none)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), default value  |
|  | **[CFG_TOKEN_PAD_PKCS7](group___config.md#define-cfg-token-pad-pkcs7)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding) |
|  | **[CFG_TOKEN_PAD_X923](group___config.md#define-cfg-token-pad-x923)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding) |
|  | **[CFG_TOKEN_PAD_ISO7816](group___config.md#define-cfg-token-pad-iso7816)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding) |
|  | **[CFG_TOKEN_PAD_ZERO](group___config.md#define-cfg-token-pad-zero)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding) |
|  | **[CFG_TOKEN_PAD_FF](group___config.md#define-cfg-token-pad-ff)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding) |
|  | **[CFG_TOKEN_PAD_SPACE](group___config.md#define-cfg-token-pad-space)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding) |
|  | **[CFG_TOKEN_PAD_ISO10126](group___config.md#define-cfg-token-pad-iso10126)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding) |
|  | **[CFG_TOKEN_PAD_ISO9797_1](group___config.md#define-cfg-token-pad-iso9797-1)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), ADE/SRED specific padding  |
|  | **[CFG_TOKEN_PAD_ISO9797_2](group___config.md#define-cfg-token-pad-iso9797-2)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), ADE/SRED specific padding  |
|  | **[CFG_TOKEN_RSA_PAD_PKCS1](group___config.md#define-cfg-token-rsa-pad-pkcs1)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), RSA specific padding  |
|  | **[CFG_TOKEN_RSA_PAD_PKCS1_OAEP](group___config.md#define-cfg-token-rsa-pad-pkcs1-oaep)** <br>value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), RSA specific padding  |
|  | **[CFG_ENTRY_HASHTYPE](group___config.md#define-cfg-entry-hashtype)**  |
|  | **[CFG_TOKEN_HASHTYPE_SHA1](group___config.md#define-cfg-token-hashtype-sha1)** <br>value of CFG_ENTRY_HASHTYPE  |
|  | **[CFG_TOKEN_HASHTYPE_SHA224](group___config.md#define-cfg-token-hashtype-sha224)** <br>value of CFG_ENTRY_HASHTYPE  |
|  | **[CFG_TOKEN_HASHTYPE_SHA256](group___config.md#define-cfg-token-hashtype-sha256)** <br>value of CFG_ENTRY_HASHTYPE, default value in AES module  |
|  | **[CFG_TOKEN_HASHTYPE_SHA384](group___config.md#define-cfg-token-hashtype-sha384)** <br>value of CFG_ENTRY_HASHTYPE  |
|  | **[CFG_TOKEN_HASHTYPE_SHA512](group___config.md#define-cfg-token-hashtype-sha512)** <br>value of CFG_ENTRY_HASHTYPE  |
|  | **[CFG_ENTRY_RSA_CALC_HASH](group___config.md#define-cfg-entry-rsa-calc-hash)**  |
|  | **[CFG_TOKEN_RSA_CALC_HASH_YES](group___config.md#define-cfg-token-rsa-calc-hash-yes)** <br>value of [CFG_ENTRY_RSA_CALC_HASH](group___config.md#define-cfg-entry-rsa-calc-hash), default value  |
|  | **[CFG_TOKEN_RSA_CALC_HASH_NO](group___config.md#define-cfg-token-rsa-calc-hash-no)** <br>value of [CFG_ENTRY_RSA_CALC_HASH](group___config.md#define-cfg-entry-rsa-calc-hash) |
|  | **[CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format)**  |
|  | **[CFG_TOKEN_RSA_GETKD_PEM](group___config.md#define-cfg-token-rsa-getkd-pem)** <br>value of [CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format) |
|  | **[CFG_TOKEN_RSA_GETKD_DER](group___config.md#define-cfg-token-rsa-getkd-der)** <br>value of [CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format) |
|  | **[CFG_TOKEN_RSA_GETKD_PRT](group___config.md#define-cfg-token-rsa-getkd-prt)** <br>value of [CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format), default value  |
|  | **[CFG_TOKEN_RSA_GETKD_ORG](group___config.md#define-cfg-token-rsa-getkd-org)** <br>value of [CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format) |
|  | **[CFG_ENTRY_DUKPT_INC_KSN](group___config.md#define-cfg-entry-dukpt-inc-ksn)**  |
|  | **[CFG_TOKEN_DUKPT_BY_OPERATION](group___config.md#define-cfg-token-dukpt-by-operation)** <br>value of [CFG_ENTRY_DUKPT_INC_KSN](group___config.md#define-cfg-entry-dukpt-inc-ksn) default value  |
|  | **[CFG_TOKEN_DUKPT_BY_API](group___config.md#define-cfg-token-dukpt-by-api)** <br>value of [CFG_ENTRY_DUKPT_INC_KSN](group___config.md#define-cfg-entry-dukpt-inc-ksn) |
|  | **[CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant)**  |
|  | **[CFG_TOKEN_DUKPT_KEY_VAR_REQUEST](group___config.md#define-cfg-token-dukpt-key-var-request)** <br>value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant), default value. In case of AES DUKPT - Data Encryption Encrypt / Message Authentication Generation  |
|  | **[CFG_TOKEN_DUKPT_KEY_VAR_RESPONSE](group___config.md#define-cfg-token-dukpt-key-var-response)** <br>value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant). In case of AES DUKPT - Data Encryption Decrypt / Message Authentication Verification  |
|  | **[CFG_TOKEN_DUKPT_KEY_VAR_BOTH](group___config.md#define-cfg-token-dukpt-key-var-both)** <br>value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant). In case of AES DUKPT - Data Encryption Both Ways / Message Authentication Both Ways  |
|  | **[CFG_TOKEN_SRED_VARIANT_X924_MAC_REQ_BW](group___config.md#define-cfg-token-sred-variant-x924-mac-req-bw)** <br>value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant) |
|  | **[CFG_TOKEN_SRED_VARIANT_X924_MAC_RESP](group___config.md#define-cfg-token-sred-variant-x924-mac-resp)** <br>value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant) |
|  | **[CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo)**  |
|  | **[CFG_TOKEN_SRED_ALG_1](group___config.md#define-cfg-token-sred-alg-1)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), default value. SRED specific padding. No default value for AES module  |
|  | **[CFG_TOKEN_SRED_ALG_1A](group___config.md#define-cfg-token-sred-alg-1a)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding  |
|  | **[CFG_TOKEN_SRED_ALG_2](group___config.md#define-cfg-token-sred-alg-2)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding  |
|  | **[CFG_TOKEN_SRED_ALG_3](group___config.md#define-cfg-token-sred-alg-3)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding  |
|  | **[CFG_TOKEN_SRED_ALG_4](group___config.md#define-cfg-token-sred-alg-4)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding  |
|  | **[CFG_TOKEN_SRED_ALG_5](group___config.md#define-cfg-token-sred-alg-5)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding  |
|  | **[CFG_TOKEN_SRED_ALG_5A](group___config.md#define-cfg-token-sred-alg-5a)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding  |
|  | **[CFG_TOKEN_SRED_ALG_CMAC](group___config.md#define-cfg-token-sred-alg-cmac)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding  |
|  | **[CFG_TOKEN_SRED_ALG_HMAC](group___config.md#define-cfg-token-sred-alg-hmac)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding  |
|  | **[CFG_TOKEN_ALGO_CMAC](group___config.md#define-cfg-token-algo-cmac)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo) |
|  | **[CFG_TOKEN_ALGO_HMAC](group___config.md#define-cfg-token-algo-hmac)** <br>value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo) |
|  | **[CFG_ENTRY_IPP_KEY_MANAGEMENT](group___config.md#define-cfg-entry-ipp-key-management)**  |
|  | **[CFG_ENTRY_KEY_MANAGEMENT_TYPE](group___config.md#define-cfg-entry-key-management-type)**  |
|  | **[CFG_TOKEN_KEY_MAN_TYPE_MSK](group___config.md#define-cfg-token-key-man-type-msk)** <br>value of CFG_ENTRY_KEY_MANAGEMENT_TYPE  |
|  | **[CFG_TOKEN_KEY_MAN_TYPE_DUKPT](group___config.md#define-cfg-token-key-man-type-dukpt)** <br>value of CFG_ENTRY_KEY_MANAGEMENT_TYPE  |
|  | **[CFG_TOKEN_KEY_MAN_TYPE_AS2805](group___config.md#define-cfg-token-key-man-type-as2805)** <br>value of CFG_ENTRY_KEY_MANAGEMENT_TYPE  |
|  | **[CFG_ENTRY_TRANSPORT_KEY](group___config.md#define-cfg-entry-transport-key)**  |

## Detailed Description





# Security Module VSS

VSS provides two engines: VSS-MSK and VSS-DUKPT

Using VSS - API functions

* [secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid) - selects a Key Set Id between 1 and 8 (default value is 1) which addresses the macro MACRO_SELECT_KEY_SET_ID_x (1 <= x <= 8)
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - loads a key in a VSS key slot. possible Key Types
    * for DUKPT:
        * KEY_TYPE_DUKPT
    * for MSK:
        * KEY_TYPE_PPK
        * KEY_TYPE_MGK
        * KEY_TYPE_DEK
        * KEY_TYPE_MVK
        * KEY_TYPE_DDK
        * KEY_TYPE_KEK
    * special handling for MSK (OS function replacement):
        * KEY_TYPE_DIRECT_MK_PLAIN - iPS_LoadMasterClearKey replacement. Loads the security script’s master key. The values are sent in the clear, but must all be loaded in the same session. Before loading the first key after a power cycle, all previously loaded keys (including the system keys) are erased. **This function should be used exclusively in a secure environment.** Data will be installed into the script referenced by host config (via handle) and key slot pointed by [secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid) (key slot=keySetId-1)
        * KEY_TYPE_DIRECT_MK_ENC - iPS_LoadMasterEncKey replacement. Loads the security script’s master key without deleting the keys already loaded. The key value must be encrypted with VSS_KLK. Data will be installed into the script referenced by host config (via handle) and key slot pointed by [secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid) (key slot=keySetId-1)
        * KEY_TYPE_DIRECT_SYSK_PLAIN - iPS_LoadSysClearKey replacement. Loads the VSS_KLK (system key) in the clear. Before writing the new value of the key, all other keys in the terminal are erased. **This function should be used exclusively in a secure environment.** Handle and keySetId are not relevant in this case.
        * KEY_TYPE_DIRECT_SYSK_ENC - iPS_LoadSysEncKey replacement. Loads the system key. The new values must be encrypted under the current value of VSS_KLK. Handle and keySetId are not relevant in this case.
        * KEY_TYPE_DELETE_ALL_KEYS - This iPS_DeleteKey replacement deletes all keys in the script referenced by host config (via handle)
        * KEY_TYPE_DELETE_SYS_KEY - This iPS_DeleteKey replacement deletes System key (VSS_KLK). Handle and keySetId are not relevant in this case.
        * KEY_TYPE_DIRECT_AUTHEX_ENC - rsaAuthexVssKeyInstall replacement for loading the VSS keys. The new VSS key slot values must be encrypted under AuthEx with PKCS1 v1.5 padding. Data length of the encrypted data should be 256 bytes. Data will be installed into the script referenced by host config (via handle) and first key slot, that must be filled with decrypted key value, is pointed by [secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid) (key slot=keySetId-1)
        * KEY_TYPE_DIRECT_AUTHEX_SYSK - rsaAuthexVssKeyInstall replacement for loading the VSS_KLK key. The new 16 bytes key value must be encrypted under AuthEx with PKCS1 v1.5 padding. Data length of the encrypted data should be 256 bytes. Handle and keySetId are not relevant in this case.
        * KEY_TYPE_DELETE_ALL_CUST_KEYS - special key type (replacement for iPS_DeleteKey(DEL_ALL)) is independent from host configuration and clears all OS-managed customer keys like VSS, IPP and ADE.
        * KEY_TYPE_DIRECT_CUSTOM_ASYM - similar to KEY_TYPE_DIRECT_AUTHEX_ENC but using Custom RSA key. Functionality is provided only by VOS2. Data will be installed into the script referenced by host config (via handle) and first key slot, that must be filled with decrypted key value, is pointed by [secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid) (key slot=keySetId-1). The key value must be encrypted under Custom RSA key with PKCS1 v1.5 padding. Cryptogram length must be equal to transport key modulus length. Custom RSA key must be loaded via VRK and referenced in host configuration setting by tag "transportKey".
        * KEY_TYPE_DIRECT_CUSTOM_ASYM_SYSK - similar to KEY_TYPE_DIRECT_AUTHEX_SYSK for loading the VSS_KLK key. Functionality is provided only by VOS2. The new 16 bytes key value must be encrypted under Custom RSA key with PKCS1 v1.5 padding. Cryptogram length must be equal to transport key modulus length. KeySetId is not relevant in this case. Custom RSA key must be loaded via VRK and referenced in host configuration setting by tag "transportKey" (see Custom VSS key loading configuration example below).
* [secIncrementKSN()](namespacecom__verifone__seccmd.md#function-secincrementksn) - increments the Key Serial Number and creates a new DUKPT key (for DUKTP only)
* [secSign()](namespacecom__verifone__seccmd.md#function-secsign) - generates a MAC or HMAC (a maximum size of 4096 bytes will be supported)
* [secVerify()](namespacecom__verifone__seccmd.md#function-secverify) - verifies a MAC (a maximum size of 4096 bytes will be supported)
* [secEncryptData()](namespacecom__verifone__seccmd.md#function-secencryptdata) - encrypts data
* [secDecryptData()](namespacecom__verifone__seccmd.md#function-secdecryptdata) - decrypts data
* [secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) - delivers a JSON-formatted list of injected keys per Key Set Id (see section 'JSON-formatted outputs' below)
* [secRetrieveEncryptedPIN()](namespacecom__verifone__seccmd.md#function-secretrieveencryptedpin) - retrieves an encrypted PIN block


# Configuration in sccfg.json

Mandatory tags:

* scriptFileName
* scriptName
* KeyManagementType

Optional tags:

* KSNincrementation (only for VSS_DUKPT)


## Example for VSS-MSK configuration

```java

{
  "name": "schemeVSSMSK",
  "scriptFileName": "TS020122.vso",
  "scriptName": "TS020122",
  "settings": {
    "KeyManagementType": "MSK"
  }
}
```


## Example for VSS-DUKPT configuration

```java

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


## Example for Custom VSS key loading configuration

ADKSEC_CustomVSS_RKL.der - RSA private Key loaded via VRK ```java

{
  "name": "schemeVSSMSK",
  "scriptFileName": "TS020122.vso",
  "scriptName": "TS020122",
  "settings": {
    "transportKey": "generickeys/usr1/ADKSEC_CustomVSS_RKL.der"
  }
}
```


# JSON formatted outputs

[secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) delivers a JSON formatted output string with information about keys related to an opened Security Module.


## Example: Output for a host using module VSS-MSK (conditioned output)

```java

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


## Example: Output for a host using module VSS-DUKPT (conditioned output)

```java

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


# Module Bendigo

Module Bendigo enhances the VSS Module functionality to meet AS2805 requirements for usage in the project Boomer.

Functionality of Bendigo module:

The Bendigo scheme covers the following functionality:

* key loading, management and update of symmetric and RSA keys
* retrieving key information
* generating and verifying MAC
* encrypting and decrypting data
* retrieving PIN block

For details please see the relevant documentation.

The Bendigo Module provides additionally to the shared VSS Module API functions following functions with special effectiveness:

* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - load a key in a VSS key slot. Possible Key Types:
    * KEY_TYPE_PPK
    * KEY_TYPE_MGK
    * KEY_TYPE_DEK
    * KEY_TYPE_MVK
    * KEY_TYPE_DDK
    * KEY_TYPE_KEK
    * KEY_TYPE_DUKPT
    * KEY_TYPE_SPONSOR_PK
    * KEY_TYPE_SPONSOR_MK
    * KEY_TYPE_SPONSOR_KI
    * KEY_TYPE_SEC_ACQ_KI
    * KEY_TYPE_ACQUIRER_MK
    * KEY_TYPE_SEC_ACQ_MK
    * KEY_TYPE_ACQ_SESSION_KEYS
KEK1 or KEK2 usage can be adjusted in Transaction Data by tag TagBendigoKEKFlag (=1 for KEK1, =2 for KEK2) for KEY_TYPE_ACQ_SESSION_KEYS.
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - rolls key KEK1 or KEK2 by setting tag TagAS2805Func in Transaction Data:
    * KEK1 roll: TagAS2805Func=2
    * KEK2 roll: TagAS2805Func=3
All function parameters are obsolete in this case.
* getKeyData() - get dedicated information for the following key types:
    * KEY_TYPE_TCU_PK
    * KEY_TYPE_ENC_KI_FMT_0
    * KEY_TYPE_ENC_KI_FMT_1
    * KEY_TYPE_ENC_KI_FMT_2
    * KEY_TYPE_ENC_PPID
    * KEY_TYPE_ENC_PPASN
    * KEY_TYPE_KVC_KIA (KVC of KIA)
    * KEY_TYPE_KVC_KEK1 (KVC of KEK1)
To get key information of KEK1 or KEK2 set indication in Transaction Data tag TagBendigoKEKFlag (=1 for KEK1, =2 for KEK2) for KEY_TYPE_ENC_PPASN.
* getKeyInventory() - get indicator whether AS2805 keys are injected


# Configuration in sccfg.json

Mandatory tags:

* KeyManagementType - value: "AS2805"


## Example for configuration

```java

{
    "name": "schemeBendigo",
    "scriptFileName": "AU010222.vso",
    "scriptName": "AU010222",
    "settings": {
        "KeyManagementType": "AS2805"
    }
}
```


# JSON formatted outputs

[secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) delivers a JSON formatted output string with information about keys related to an opened Security Module.


## Example: Output for a host using module Bendigo (conditioned output)

```java

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


# Security Modules IPPmsk and IPPdukpt

Working with IPP on Verix is described in Verix eVo Volume I: Operating System Programmers Manual, VPN DOC00301. For V/OS, please refer to V/OS Programmers Manual, VPN DOC00501.

IPP provides two engines: IPP-MSK and IPP-DUKPT

Note: To utilize IPP a Master Key injection must be prepared outside the user application before. Master Key injection is not ADK-SEC IPP functionality.


## Using IPP-MSK - API functions



* [secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid) - selects Key Set Id. Master Key will be used for cryption operation from slot given by KeyAddressTable (see configuration). The default KSId value is 1
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - loads a Master Key in a IPP key slot given by KeyAddressTable (see configuration). KeyAddressTable can reference MK (slots 0-9) and IPP KLK (slot 15)
    * possible Key Types: KEY_TYPE_KEK
    * use GISKE input format for 'keyData'
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - loads a Session Key
    * possible Key Types: KEY_TYPE_PPK, KEY_TYPE_MGK
    * use GISKE input format for 'keyData'
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - KEY_TYPE_DELETE_ALL_KEYS - This iPS_DeleteKey replacement deletes all IPP keys referenced by host config (via handle)
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - KEY_TYPE_DELETE_ALL_CUST_KEYS - special key type (replacement for iPS_DeleteKey(DEL_ALL)) is independent from host configuration and clears all OS-managed customer keys like VSS, IPP and ADE.
* [secSign()](namespacecom__verifone__seccmd.md#function-secsign) - generates a MAC
    * use BIN input format for 'data'
    * output format is BIN
    * a maximum size of 4096 bytes will be supported
* [secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) - delivers a JSON-formatted list of injected keys per Key Set Id (Master Key address (0-9))
* [secRetrieveEncryptedPIN()](namespacecom__verifone__seccmd.md#function-secretrieveencryptedpin) - retrieves an encrypted PIN block
    * output format for 'pinBlk' is BIN


## Using IPP-DUKPT - API functions



* [secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid) - selects Key Set Id. DUKPT key will be used for crypto operation from given by KeyAddressTable (see configuation). The default KSId value is 1
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - loads DUKPT Initial Key and an Initial KSN in a IPP key slot given by KeyAddressTable (see configuration). KeyAddressTable can reference DUKPT key slots 0, 1 and 2
    * possible Key Types: KEY_TYPE_DUKPT
    * use BIN input format for 'keyData' and 'ksn'
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - KEY_TYPE_DELETE_ALL_KEYS - This iPS_DeleteKey replacement deletes all IPP-DUKPT keys referenced by host config (via handle)
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - KEY_TYPE_DELETE_ALL_CUST_KEYS - special key type (replacement for iPS_DeleteKey(DEL_ALL)) is independent from host configuration and clears all OS-managed customer keys like VSS, IPP and ADE.
* [secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) - delivers a JSON-formatted list of injected keys per Key Set Id (DUKPT Key address (0-2)) Key Serial Number (KSN) with suppressed leading Fs.
* [secRetrieveEncryptedPIN()](namespacecom__verifone__seccmd.md#function-secretrieveencryptedpin) - retrieves an encrypted PIN block
    * output format for 'pinBlk' and 'KSN' is BIN


# Configuration in sccfg.json

Mandatory tags:

* KeyManagementOption

Optional tags:

* KeyAddressTable


## Example for IPP-MSK configuration

```java

{
  "KeyManagementOption": "8A3",
  "KeyAddressTable": [
    {"description":   "| 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8 |  9 | 10 |  11 <- KeySetId"},
    {"sign":           ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]},
    {"retrieveEncPIN": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]},
    {"updateKey":      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "15"]}
  ]
}
```


## Example for IPP-DUKPT configuration

```java

{
"name": "schemeIPPDUKPT",
"settings": {
  "KeyManagementOption": "0A0",
  "KeyAddressTable": [
    {"description": "| 1  | 2  | 3 | <- KeySetId (3 slots)"},
    {"retrieveEncPIN": ["0", "1", "2"]}
  ]
}
}
```

IPP Key Management Options [KMM + DEMF] according IPP Packet 17 (see OS Programmers Manual) example "0A0".


# JSON formatted outputs

[secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) delivers a JSON formatted output string with information about keys related to an opened Security Module.


## Example: Output for a host using security module IPP-MSK (conditioned output)

```java

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
         "MGK":{            "injected":"no"         },
         "PPK":{            "injected":"no"         }
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
        "MGK":{            "injected":"yes"         },
        "PPK":{            "injected":"yes"         },
        "KeySet":2
      },
      {
         "KEK":{            "injected":"no"         },
         "KeySet":3
      },
      {
         "KEK":{            "injected":"no"         },
         "KeySet":4
      },
      {
         "KEK":{            "injected":"no"         },
         "KeySet":5
      },
      {
         "KEK":{            "injected":"no"         },
         "KeySet":6
      },
      {
         "KEK":{            "injected":"no"         },
         "KeySet":7
      },
      {
         "KEK":{            "injected":"no"         },
         "KeySet":8
      },
      {
         "KEK":{            "injected":"no"         },
         "KeySet":9
      },
      {
         "KEK":{            "injected":"no"         },
         "KeySet":10
      }
   ]
}
```


## Example: Output for a host using security module IPP-DUKPT (conditioned output)

```java

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


# Security Module ADE

ADE (Account Data Encryption) is an SRED solution and provides DUKPT based card data encryption using triple DES encryption with a double-length key.

Sensitive card data protected is:

* Application Primary Account Number (PAN) [Card read or Manual]
* Track1 Data (MasterCard PayPass contactless only)
* Track 2 Data (MasterCard PayPass contactless only)
* Track 1 Discretionary Data
* Track 2 Discretionary Data
* Track 2 Equivalent Data
* Magstripe read Track 1, 2 and 3 data
* Manual CVV2

ADE DUKPT keys are injected using VRK, VTM or IPP. The keys are independent to IPP DUKPT keys.


## Functionality of ADE module

THe ADE module provides following functionality:

* get status of engine and ADE module in a JSON formatted output string
* load a DUKPT initial key and initial KSN (optional - key loading is usually not done by ADK-SEC). This functionality is not supported on Verix!
* encrypt card data

For card data encryption following parameters are configurable:

1. encryption mode
2. initialization vector (IV)
3. padding scheme
4. KeyAddressTable

ADE encryption modes of operation:

* MODE_ECB
* MODE_CBC

In CBC mode ADE uses a initialization vector (IV) per encryption (8-byte). If the IV is configured as 'Random' the random value will be generated by the OS and returned as output parameter.

SRED padding schemes:

* NONE (default value)
* PKCS7 Each padding byte equals the padding length. Example: XX XX XX XX 04 04 04 04
* X923 Final padding byte equals the padding length and all other padding bytes equal 0x00. Example: XX XX XX XX 00 00 00 04
* ISO7816 First padding byte equals 0x80 and all other padding bytes equal 0x00. Example: XX XX XX XX 80 00 00 00
* ISO9797_1 Padding bytes are 0x00 if needed to fill block. Example: XX XX XX XX 00 00 00 00
* ISO9797_2 First padding byte equals 0x80 and all other padding bytes equal 0x00. There must be at least one padding byte. Example: XX XX XX XX 80 00 00 00

Involved API functions:

* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - load an initial DUKPT key in a slot given by KeyAddressTable (see configuration) and the initial KSN (This function is not supported on Verix!)
* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) with key type KEY_TYPE_DELETE_ALL_CUST_KEYS - special key type (replacement for iPS_DeleteKey(DEL_ALL)) is independent from host configuration and clears all OS-managed customer keys like VSS, IPP and ADE.
* [secEncryptData()](namespacecom__verifone__seccmd.md#function-secencryptdata) - encrypt data
* [secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) - delivers a JSON-formatted list of injected keys per Key Set Id status of ADE engine (see section 'JSON-formatted outputs' below)


# Configuration in sccfg.json

Optional tags:

* encMode - possible values: 0 (= "MODE_ECB"), 1 (= "MODE_CBC")
* IVType - possible values: 0 (= "NOT_USED"), 1 (= "ZERO"), 2 (= "RANDOM"), 3 (= "USER_DEFINED")
* padding - possible values: 0 (= "NONE"), 1 (= "PKCS7"), 2 (= "X923"), 3 (= "ISO7816"), 4 (= "ISO9797_1"), 5 (= "ISO9797_2")
* KeyAddressTable - key slots can be assigned per function by setting a KeySetId


## Example for configuration

```java

{
  "name": "schemeADE",
  "settings": {
    "padding": "PKCS7",
    "encMode": "MODE_CBC",
    "IVType":  "RANDOM",
    "KeyManagementType": "DUKPT",
    "KeyAddressTable": [
      {"description":"| 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8 |  9 | 10 | <- KeySetId (10 slots)"},
      {"encryptData": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
    ]
  }
}
```


# JSON formatted outputs

[secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) delivers a JSON formatted output string with information about keys related to an opened Security Module.


## Example: Output for a host using module ADE (conditioned output)

```java

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


# Security Module RSA

RSA is one of the first practical public-key crypto systems and is widely used for secure data transmission. In such a crypto system, the encryption key is public and differs from the decryption key which is kept secret.

Module is designed to work with two kind of keys, stored in system:

* RSA key is istalled in OS. It can be both Public and Private RSA key. E.g. AuthEx keys. All the keys can be used in crypto operations provided by ADK-SEC. The keys must be loaded only using OS functions like VRK.
* Certificate Tree + Working RSA keys stored in Certstore service. These RSA public key certificates can be loaded using ADK-SEC UpdateKey() in PEM format. A special key type KEY_TYPE_CERT must be used for Cert Tree installation. Loading/Update of Cert Tree occurs in PEM format that contains all certificates of the chain. Root Cert is mandatory.

Cert store is a service that:

* takes care about storing, validating the chain and protecting the root cert against updates using PEM file format
* support a new key type=KEY_TYPE_CERT that will allow to install/update intermediate certs via the already define APIs [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey)
* allow installation of X.509 public keys for the existing key types=Encrypt/Verify via the already define APIs [secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid), [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey)
* allow to reference the installed Public keys in existing [secEncryptData()](namespacecom__verifone__seccmd.md#function-secencryptdata) and [secVerify()](namespacecom__verifone__seccmd.md#function-secverify) commands


# Configuration


## Padding



* Required entry [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding)
* possible values are defined in [CFG_TOKEN_PAD_NONE](group___config.md#define-cfg-token-pad-none)[CFG_TOKEN_RSA_PAD_PKCS1](group___config.md#define-cfg-token-rsa-pad-pkcs1)[CFG_TOKEN_RSA_PAD_PKCS1_OAEP](group___config.md#define-cfg-token-rsa-pad-pkcs1-oaep)


## hash type



* optional entry [CFG_ENTRY_HASHTYPE](group___config.md#define-cfg-entry-hashtype)
* effective for "sign" and "verify"
* possible values are defined in [CFG_TOKEN_HASHTYPE_SHA1](group___config.md#define-cfg-token-hashtype-sha1)[CFG_TOKEN_HASHTYPE_SHA224](group___config.md#define-cfg-token-hashtype-sha224)[CFG_TOKEN_HASHTYPE_SHA256](group___config.md#define-cfg-token-hashtype-sha256)[CFG_TOKEN_HASHTYPE_SHA384](group___config.md#define-cfg-token-hashtype-sha384)[CFG_TOKEN_HASHTYPE_SHA512](group___config.md#define-cfg-token-hashtype-sha512)
* default value: #CFG_ENTRY_RSA_SHA256


## calcHash



* optional entry [CFG_ENTRY_RSA_CALC_HASH](group___config.md#define-cfg-entry-rsa-calc-hash) - determines if a hash of the input data shall be calculated before performing the crypto operation
* effective for "sign" and "verify"
* possible values are defined in [CFG_TOKEN_RSA_CALC_HASH_YES](group___config.md#define-cfg-token-rsa-calc-hash-yes)[CFG_TOKEN_RSA_CALC_HASH_NO](group___config.md#define-cfg-token-rsa-calc-hash-no)
* default value: [CFG_TOKEN_RSA_CALC_HASH_YES](group___config.md#define-cfg-token-rsa-calc-hash-yes)


## secGetData format



* optional entry [CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format)
* effective for [secGetKeyData()](namespacecom__verifone__seccmd.md#function-secgetkeydata) command
* possible values are defined in [CFG_TOKEN_RSA_GETKD_PEM](group___config.md#define-cfg-token-rsa-getkd-pem)[CFG_TOKEN_RSA_GETKD_DER](group___config.md#define-cfg-token-rsa-getkd-der)[CFG_TOKEN_RSA_GETKD_PRT](group___config.md#define-cfg-token-rsa-getkd-prt)[CFG_TOKEN_RSA_GETKD_ORG](group___config.md#define-cfg-token-rsa-getkd-org)
* default value: [CFG_TOKEN_RSA_GETKD_PRT](group___config.md#define-cfg-token-rsa-getkd-prt)


## KeyAddressTable



* Key-Slots are given as key-files relative to #RSA_KEY_PREFIX_VOS resp. #RSA_KEY_PREFIX_VOS, absolute path to the key file or "internal" for certstore usage. In case of "internal" the secUpdateKey can be used for certificate loading.
* For encrypt and verify this has to be a public key
* For decrypt and sign this has to be a private key, which is encrypted by vault-key


## example

```java

{
    "padding": "PKCS1",
    "hashType": "SHA256",
    "calcHash": "yes"
    "getKeyDataFormat": "PEM",
    "KeyAddressTable": [
        {"encryptData":    ["rkeys/usr1/key0.crt"]},
        {"decryptData":    ["rkeys/usr1/key0.der"]},
        {"sign":           ["rkeys/usr1/key0.der"]},
        {"verify":         ["rkeys/usr1/key0.crt"]}
    ]
}
```


# JSON formatted outputs

[secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) delivers a JSON formatted output string with information about keys related to an opened Security Module.


## Example: Output for a host using module RSA (conditioned output)

```java

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


# Security Module SRED

Module SRED supports SRED MAC-ing and encryption using the MAC key variant and the same DUKPT future key as is used to encrypt.

Functionality of SRED module: THe SRED module provides following functionality:

* get status of module in a JSON formatted output string
* load a DUKPT initial key and initial KSN (optional - key loading is usually not done by ADK-SEC). This functionality is not supported on Verix!
* MAC generation/verification using ADE DUKPT keys

Involved API functions:

* [secSign()](namespacecom__verifone__seccmd.md#function-secsign)
* [secVerify()](namespacecom__verifone__seccmd.md#function-secverify)


# Configuration in sccfg.json

Mandatory tags: none Optional tags:

* encMode MODE_ECB - default value MODE_CBC
* IVType NONE - default value ZERO RANDOM USER_DEFINED
* keyVariant X924_MAC_REQ_BW - default value X924_MAC_RESP X924_DE_REQ_BW
* algo DES112 ALG_9797_MAC_1 K is a single length key (K1) - default value
ALG_9797_MAC_1A K is a double length key (K1 and K2) ALG_9797_MAC_2 K1 is a single length key (K1) K2 is a single length key (K2) ALG_9797_MAC_3 K1 is a single length key (K1) K2 is a single length key (K2) ALG_9797_MAC_4 K is a single length key (K1) K1 is a single length key (K1 XOR 0xF0F0F0F0F0F0F0F0) K2 is a single length key (K2) ALG_9797_MAC_5 K1 is a single length key (K1) K2 is a single length key (K1 XOR 0xF0F0F0F0F0F0F0F0) ALG_9797_MAC_5A K1 is a double length key (K1 and K2) K2 is a double length key (K1 XOR 0xF0F0F0F0F0F0F0F0) (K2 XOR 0xF0F0F0F0F0F0F0F0) ALG_CMAC_TDEA ALG_HMAC_SHA256
* padding NONE - default value PKCS7 Each padding byte equals the padding length. Example: XX XX XX XX 04 04 04 04 X923 Final padding byte equals the padding length and all other padding bytes equal 0x00. Example: XX XX XX XX 00 00 00 04 ISO7816 First padding byte equals 0x80 and all other padding bytes equal 0x00. Example: XX XX XX XX 80 00 00 00 ISO9797_1 Padding bytes are 0x00 if needed to fill block. Example: XX XX XX XX 00 00 00 00 ISO9797_2 First padding byte equals 0x80 and all other padding bytes equal 0x00. There must be at least one padding byte. Example: XX XX XX XX 80 00 00 00 * * - PKCS7
* KeyAddressTable - key slots can be assigned per function by setting a KeySetId


## Example for configuration

```java

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
      {"description": "| 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8 |  9 | 10 | <- KeySetId (10 slots)"},
      {"sign": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]},
      {"verify": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
    }
  }
}
```


# Security Module VisaDSP

VisaDSP provides two methods of Point-to-Point-Encryption for the following card data types: PAN, Cardholder Name, Track1, Track2. The two methods are:

* Standard Point-to-Point Encryption (P2PE)
* Format-Preserving Encryption (FPE)

Both methods use the same keys and the DES IPP-DUKPT or optional the ADE DUKPT key management scheme. Additionally to encryption the original card data are obfuscated if P2PE is used.

Functionality of module VisaDSP:

* handling of configuration data (key management type, encryption algorithm, ...)
* loading a DUKPT initial key and initial KSN (optional - key loading is not the task of ADK-SEC)
* handling of options and card data provided by TD (Transaction Data)
* encryption of card data of each type according to the configured encryption algorithm (data variant of the key is used)
* obfuscating card data in case of P2PE
* retrieving an encrypted PIN block (PIN variant of the key is used). This this possible only if IPP DUKPT key management scheme is used. Remark: PIN entry is not the task of ADK-SEC.
* delivering of information about keys (related to an opened Security Module)

Involved API functions:

* [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey) - load an initial DUKPT key and the initial KSN
* [secPutTransactionData()](namespacecom__verifone__seccmd.md#function-secputtransactiondata) - put options and card data to TD
* [secEncryptTransactionData()](namespacecom__verifone__seccmd.md#function-secencrypttransactiondata) - perform a card data encryption (P2PE or FPE) and a card data obfuscation in case of P2PE
* [secGetTransactionValue()](namespacecom__verifone__seccmd.md#function-secgettransactionvalue) - get obfuscated card data if P2PE was used
* [secRetrieveEncryptedPIN()](namespacecom__verifone__seccmd.md#function-secretrieveencryptedpin) - retrieve encrypted PIN block
* [secClearTransactionData()](namespacecom__verifone__seccmd.md#function-seccleartransactiondata) - clear card data in TD
* [secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) - delivers a JSON-formatted list of injected keys per Key Set Id (see section 'JSON-formatted outputs' below)


## Example for getting obfuscated data

```java

{
  secError             errCode = EsecOK;
  SecTransactionValue  transDataOut;
  std::string          obfCardDataType = CTransactionData::TagObfuscatedPAN;

  if ((errCode = secGetTransactionValue(handle, obfCardDataType, transDataOut)) != EsecOK)
  return ((int)errCode);

  std::vector<uint8_t> outData = transDataOut.getRaw();

}
```


# Configuration in sccfg.json

Mandatory tags:

* "module": "VisaDSP"
* "encryptionAlgo" - possible values: "P2PE" or "FPE"
* "KeyManagementOption" - in case of DUKPT IPP key management type
* "KeyAddressTable" - list Key Address Table of involved functions (key slots can be selected by setting Key Set Ids)

Optional tags:

* "permissions" - access rights for card data types (e.g.: 1=writable only)


## Example for configuration

```java

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
        {"description": "| 1  | 2  | 3 | <- KeySetId (3 slots)"},
        {"updateKey":  ["0", "1", "2"]},
        {"encryptData":  ["0", "1", "2"]},
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


# JSON formatted outputs

[secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) delivers a JSON formatted output string with information about keys related to an opened Security Module.


## Example: Output for a host using module VisaDSP (conditioned output)

```java

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


# Security Module CryptoRW

CryptoRW module is a replacement for deprecated OS function cryptoRead / cryptoWrite()

Use the Data Encryption feature to guarantee that the content is lost if the unit is tampered with. The data is encrypted with a key derived from the top-level key erased from the terminal in case of attack, making it impossible to recover the plain text data. The key is unique for each terminal and is not known outside the cryptographic unit of the terminal. This feature can be used, for instance, when tamper detection must cause the deletion of the transaction batch file.

In contrast to the deprecated cryptoRead() / cryptoWrite() APIs, the CryptoRW module will not work on file handles and only be used to encrypt or decrypt data with a terminal individual key.


## Functionality of CryptoRW module

The CryptoRW module provides following functionality:

* encrypt data - encrypts the input data with the terminal individual key.
* decrypt data - decrypts the input data with the terminal individual key. Encrypted data can be in old (legacy) or new format. Decryption will be done according host configuation flag "legacy_decrypt" described below.
* get status of engine and CryptoRW module in a JSON formatted output string

Please be aware that the data encryption of this module will use a different format, then used with the deprecated cryptoRead() / cryptoWrite() APIs. For compatibility and migration of data stored in old format, the decrypt functionality can be configured to use the old (deprecated) or the new format (default), but data encryption always uses the new format, independent of the configuration.

The decrypt mode can be configured the following ways:

* host/schema configuration settings entry "legacy_decrypt" : true/false (default value "false" if entry is not exists)
* transaction data entry td[[CTransactionData::TagCryptoRWLegacyDecrypt](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagcryptorwlegacydecrypt)] = true/false (default value "false" if the tag is not exists)

If application does not need to decrypt files encrypted with old interface, please use in general "legacy_decrypt" : false.

 Data encryption occurs only in new format.

Involved API functions:

* [secEncryptData()](namespacecom__verifone__seccmd.md#function-secencryptdata) - encrypt data. Please note, that encrypted data are longer than input data due to some internal formatting during encryption.
* [secDecryptData()](namespacecom__verifone__seccmd.md#function-secdecryptdata) - decrypt data. Decrypted data do not contain any internal formatting.


# Configuration in sccfg.json

Optional tags:

* legacy_decrypt - possible values: true (= use legacy decryption), false (= data are in new format, default value)


## Example for configuration

```java

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


## Example of usage

```java

{
   secHandle_t hdl = 0;
   std::vector<uint8_t> plainData;
   std::vector<uint8_t> encData;
   std::vector<uint8_t> decryptedData;
   std::vector<uint8_t> vdummy;
   secError             reterr = EsecOK;

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

   SEC_DBG_HEXDUMP_TRACE("plain data",     plainData.data(),     plainData.size());
   SEC_DBG_HEXDUMP_TRACE("encrypted data", encData.data(),       encData.size());
   SEC_DBG_HEXDUMP_TRACE("decrypted data", decryptedData.data(), decryptedData.size());
   if (plainData.size() != decryptedData.size())
   {
     // error handling
   }

   secClose(hdl);
 }
```


# Security Module AES

AES is a specification for the encryption of electronic data. The algorithm described by AES is a symmetric-key algorithm, meaning the same key is used for both encrypting and decrypting the data. It is a variant of Rijndael which has a fixed block size of 128 bits, and a key size of 128, 192, or 256 bits. By contrast, the Rijndael specification per se is specified with block and key sizes that may be any multiple of 32 bits, both with a minimum of 128 and a maximum of 256 bits.

The Security AES Module uses the AES DUKPT algorithm. Transaction key(s) of 128, 192 or 256 bit length are derived from an Initial Terminal DUKPT Key of the corresponding length based on a transaction number. A transaction number consists of an Initial Key-ID and the Transaction Counter. The Initial Key and Initial Key-ID is injected via VRK or VTM.


## Functionality of AES module

The AES module provides following functionality:

* CMAC calculation and verifying of data
* data encryption and decryption
* retrieval of an encrypted PIN block
* key inventory information in a JSON formatted output string

Involved API functions:

* [secSign()](namespacecom__verifone__seccmd.md#function-secsign) - generation CMAC
* [secVerify()](namespacecom__verifone__seccmd.md#function-secverify) - verifying CMAC
* [secEncryptData()](namespacecom__verifone__seccmd.md#function-secencryptdata) - encrypt data
* [secDecryptData()](namespacecom__verifone__seccmd.md#function-secdecryptdata) - decrypt data
* [secRetrieveEncryptedPIN()](namespacecom__verifone__seccmd.md#function-secretrieveencryptedpin) - retrieve the encrypted PIN block of a entered PIN
* [secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) - delivers status information about injected keys


# Configuration


## algorithm method



* Required entry #CFG_ENTRY_ALG
* possible values are defined in [CFG_TOKEN_ALGO_CMAC](group___config.md#define-cfg-token-algo-cmac)


## encryption mode



* required entry #CFG_ENTRY_AES_ENCMODE
* possible values are defined in #CFG_ENTRY_AES_MODE_ECB, #CFG_ENTRY_AES_MODE_CBC
* default value is #CFG_ENTRY_AES_MODE_ECB


## padding



* Required entry #CFG_ENTRY_AES_PAD
* possible values are defined in #CFG_ENTRY_AES_PAD_NONE, #CFG_ENTRY_AES_PAD_PKCS7
* default value is #CFG_ENTRY_AES_PAD_PKCS7


## KeyAddressTable



* Key files relative to #AES_KEY_PREFIX_VOS resp. #AES_KEY_PREFIX_VRX can be assigned per function by setting a KeySetId


## Example for configuration

```java

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


# JSON formatted outputs

[secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory) delivers a JSON formatted output string with information about keys related to an opened Security Module.


## Example: Output for a host using module AES (conditioned output)

```java

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




## Macros Documentation

### define CFG_ENTRY_IV

```
#define CFG_ENTRY_IV "IVType"
```


### define CFG_TOKEN_IV_NONE

```
#define CFG_TOKEN_IV_NONE "NONE"
```

value of CFG_ENTRY_IV default value 

### define CFG_TOKEN_IV_ZERO

```
#define CFG_TOKEN_IV_ZERO "ZERO"
```

value of CFG_ENTRY_IV 

### define CFG_TOKEN_IV_RAND

```
#define CFG_TOKEN_IV_RAND "RANDOM"
```

value of CFG_ENTRY_IV 

### define CFG_TOKEN_IV_USE_INPUT

```
#define CFG_TOKEN_IV_USE_INPUT "USER_DEFINED"
```

value of CFG_ENTRY_IV 

### define CFG_ENTRY_ENCMODE

```
#define CFG_ENTRY_ENCMODE "encMode"
```


### define CFG_TOKEN_ENCMODE_ECB

```
#define CFG_TOKEN_ENCMODE_ECB "MODE_ECB"
```

value of CFG_ENTRY_ENCMODE, default value 

### define CFG_TOKEN_ENCMODE_CBC

```
#define CFG_TOKEN_ENCMODE_CBC "MODE_CBC"
```

value of CFG_ENTRY_ENCMODE 

### define CFG_ENTRY_PADDING

```
#define CFG_ENTRY_PADDING "padding"
```


### define CFG_TOKEN_PAD_NONE

```
#define CFG_TOKEN_PAD_NONE "NONE"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), default value 

### define CFG_TOKEN_PAD_PKCS7

```
#define CFG_TOKEN_PAD_PKCS7 "PKCS7"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding)

### define CFG_TOKEN_PAD_X923

```
#define CFG_TOKEN_PAD_X923 "X923"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding)

### define CFG_TOKEN_PAD_ISO7816

```
#define CFG_TOKEN_PAD_ISO7816 "ISO7816"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding)

### define CFG_TOKEN_PAD_ZERO

```
#define CFG_TOKEN_PAD_ZERO "ZERO"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding)

### define CFG_TOKEN_PAD_FF

```
#define CFG_TOKEN_PAD_FF "FF"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding)

### define CFG_TOKEN_PAD_SPACE

```
#define CFG_TOKEN_PAD_SPACE "SPACE"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding)

### define CFG_TOKEN_PAD_ISO10126

```
#define CFG_TOKEN_PAD_ISO10126 "ISO10126"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding)

### define CFG_TOKEN_PAD_ISO9797_1

```
#define CFG_TOKEN_PAD_ISO9797_1 "ISO9797_1"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), ADE/SRED specific padding 

### define CFG_TOKEN_PAD_ISO9797_2

```
#define CFG_TOKEN_PAD_ISO9797_2 "ISO9797_2"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), ADE/SRED specific padding 

### define CFG_TOKEN_RSA_PAD_PKCS1

```
#define CFG_TOKEN_RSA_PAD_PKCS1 "PKCS1"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), RSA specific padding 

### define CFG_TOKEN_RSA_PAD_PKCS1_OAEP

```
#define CFG_TOKEN_RSA_PAD_PKCS1_OAEP "PKCS1_OAEP"
```

value of [CFG_ENTRY_PADDING](group___config.md#define-cfg-entry-padding), RSA specific padding 

### define CFG_ENTRY_HASHTYPE

```
#define CFG_ENTRY_HASHTYPE "hashType"
```


### define CFG_TOKEN_HASHTYPE_SHA1

```
#define CFG_TOKEN_HASHTYPE_SHA1 "SHA1"
```

value of CFG_ENTRY_HASHTYPE 

### define CFG_TOKEN_HASHTYPE_SHA224

```
#define CFG_TOKEN_HASHTYPE_SHA224 "SHA224"
```

value of CFG_ENTRY_HASHTYPE 

### define CFG_TOKEN_HASHTYPE_SHA256

```
#define CFG_TOKEN_HASHTYPE_SHA256 "SHA256"
```

value of CFG_ENTRY_HASHTYPE, default value in AES module 

### define CFG_TOKEN_HASHTYPE_SHA384

```
#define CFG_TOKEN_HASHTYPE_SHA384 "SHA384"
```

value of CFG_ENTRY_HASHTYPE 

### define CFG_TOKEN_HASHTYPE_SHA512

```
#define CFG_TOKEN_HASHTYPE_SHA512 "SHA512"
```

value of CFG_ENTRY_HASHTYPE 

### define CFG_ENTRY_RSA_CALC_HASH

```
#define CFG_ENTRY_RSA_CALC_HASH "calcHash"
```


### define CFG_TOKEN_RSA_CALC_HASH_YES

```
#define CFG_TOKEN_RSA_CALC_HASH_YES "yes"
```

value of [CFG_ENTRY_RSA_CALC_HASH](group___config.md#define-cfg-entry-rsa-calc-hash), default value 

### define CFG_TOKEN_RSA_CALC_HASH_NO

```
#define CFG_TOKEN_RSA_CALC_HASH_NO "no"
```

value of [CFG_ENTRY_RSA_CALC_HASH](group___config.md#define-cfg-entry-rsa-calc-hash)

### define CFG_ENTRY_RSA_GETKD_FORMAT

```
#define CFG_ENTRY_RSA_GETKD_FORMAT "getKeyDataFormat"
```


### define CFG_TOKEN_RSA_GETKD_PEM

```
#define CFG_TOKEN_RSA_GETKD_PEM "PEM"
```

value of [CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format)

### define CFG_TOKEN_RSA_GETKD_DER

```
#define CFG_TOKEN_RSA_GETKD_DER "DER"
```

value of [CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format)

### define CFG_TOKEN_RSA_GETKD_PRT

```
#define CFG_TOKEN_RSA_GETKD_PRT "PRINT"
```

value of [CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format), default value 

### define CFG_TOKEN_RSA_GETKD_ORG

```
#define CFG_TOKEN_RSA_GETKD_ORG "ORIGINAL"
```

value of [CFG_ENTRY_RSA_GETKD_FORMAT](group___config.md#define-cfg-entry-rsa-getkd-format)

### define CFG_ENTRY_DUKPT_INC_KSN

```
#define CFG_ENTRY_DUKPT_INC_KSN "KSNincrementation"
```


### define CFG_TOKEN_DUKPT_BY_OPERATION

```
#define CFG_TOKEN_DUKPT_BY_OPERATION "BY_OPERATION"
```

value of [CFG_ENTRY_DUKPT_INC_KSN](group___config.md#define-cfg-entry-dukpt-inc-ksn) default value 

### define CFG_TOKEN_DUKPT_BY_API

```
#define CFG_TOKEN_DUKPT_BY_API "BY_API"
```

value of [CFG_ENTRY_DUKPT_INC_KSN](group___config.md#define-cfg-entry-dukpt-inc-ksn)

### define CFG_ENTRY_DUKPT_KEY_VARIANT

```
#define CFG_ENTRY_DUKPT_KEY_VARIANT "keyVariant"
```


### define CFG_TOKEN_DUKPT_KEY_VAR_REQUEST

```
#define CFG_TOKEN_DUKPT_KEY_VAR_REQUEST "request"
```

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant), default value. In case of AES DUKPT - Data Encryption Encrypt / Message Authentication Generation 

### define CFG_TOKEN_DUKPT_KEY_VAR_RESPONSE

```
#define CFG_TOKEN_DUKPT_KEY_VAR_RESPONSE "response"
```

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant). In case of AES DUKPT - Data Encryption Decrypt / Message Authentication Verification 

### define CFG_TOKEN_DUKPT_KEY_VAR_BOTH

```
#define CFG_TOKEN_DUKPT_KEY_VAR_BOTH "both"
```

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant). In case of AES DUKPT - Data Encryption Both Ways / Message Authentication Both Ways 

### define CFG_TOKEN_SRED_VARIANT_X924_MAC_REQ_BW

```
#define CFG_TOKEN_SRED_VARIANT_X924_MAC_REQ_BW "X924_MAC_REQ_BW"
```

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant)

### define CFG_TOKEN_SRED_VARIANT_X924_MAC_RESP

```
#define CFG_TOKEN_SRED_VARIANT_X924_MAC_RESP "X924_MAC_RESP"
```

value of [CFG_ENTRY_DUKPT_KEY_VARIANT](group___config.md#define-cfg-entry-dukpt-key-variant)

### define CFG_ENTRY_ALGO

```
#define CFG_ENTRY_ALGO "algo"
```


### define CFG_TOKEN_SRED_ALG_1

```
#define CFG_TOKEN_SRED_ALG_1 "ALG_9797_MAC_1"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), default value. SRED specific padding. No default value for AES module 

### define CFG_TOKEN_SRED_ALG_1A

```
#define CFG_TOKEN_SRED_ALG_1A "ALG_9797_MAC_1A"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding 

### define CFG_TOKEN_SRED_ALG_2

```
#define CFG_TOKEN_SRED_ALG_2 "ALG_9797_MAC_2"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding 

### define CFG_TOKEN_SRED_ALG_3

```
#define CFG_TOKEN_SRED_ALG_3 "ALG_9797_MAC_3"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding 

### define CFG_TOKEN_SRED_ALG_4

```
#define CFG_TOKEN_SRED_ALG_4 "ALG_9797_MAC_4"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding 

### define CFG_TOKEN_SRED_ALG_5

```
#define CFG_TOKEN_SRED_ALG_5 "ALG_9797_MAC_5"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding 

### define CFG_TOKEN_SRED_ALG_5A

```
#define CFG_TOKEN_SRED_ALG_5A "ALG_9797_MAC_5A"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding 

### define CFG_TOKEN_SRED_ALG_CMAC

```
#define CFG_TOKEN_SRED_ALG_CMAC "ALG_CMAC_TDEA"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding 

### define CFG_TOKEN_SRED_ALG_HMAC

```
#define CFG_TOKEN_SRED_ALG_HMAC "ALG_HMAC_SHA256"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo), SRED specific padding 

### define CFG_TOKEN_ALGO_CMAC

```
#define CFG_TOKEN_ALGO_CMAC "CMAC"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo)

### define CFG_TOKEN_ALGO_HMAC

```
#define CFG_TOKEN_ALGO_HMAC "HMAC"
```

value of [CFG_ENTRY_ALGO](group___config.md#define-cfg-entry-algo)

### define CFG_ENTRY_IPP_KEY_MANAGEMENT

```
#define CFG_ENTRY_IPP_KEY_MANAGEMENT "KeyManagementOption"
```


### define CFG_ENTRY_KEY_MANAGEMENT_TYPE

```
#define CFG_ENTRY_KEY_MANAGEMENT_TYPE "KeyManagementType"
```


### define CFG_TOKEN_KEY_MAN_TYPE_MSK

```
#define CFG_TOKEN_KEY_MAN_TYPE_MSK "MSK"
```

value of CFG_ENTRY_KEY_MANAGEMENT_TYPE 

### define CFG_TOKEN_KEY_MAN_TYPE_DUKPT

```
#define CFG_TOKEN_KEY_MAN_TYPE_DUKPT "DUKPT"
```

value of CFG_ENTRY_KEY_MANAGEMENT_TYPE 

### define CFG_TOKEN_KEY_MAN_TYPE_AS2805

```
#define CFG_TOKEN_KEY_MAN_TYPE_AS2805 "AS2805"
```

value of CFG_ENTRY_KEY_MANAGEMENT_TYPE 

### define CFG_ENTRY_TRANSPORT_KEY

```
#define CFG_ENTRY_TRANSPORT_KEY "transportKey"
```




-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
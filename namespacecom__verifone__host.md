---
title: com_verifone_host

---

# com_verifone_host



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[key_type_e](namespacecom__verifone__host.md#enum-key-type-e)** { KEY_TYPE__INVALID_E = -1, KEY_TYPE_TMK = 0, KEY_TYPE_PPK = 1, KEY_TYPE_MGK = 2, KEY_TYPE_DEK = 3, KEY_TYPE_TCU_PK = 4, KEY_TYPE_SPONSOR_PK = 5, KEY_TYPE_SPONSOR_MK = 6, KEY_TYPE_SPONSOR_KI = 7, KEY_TYPE_SEC_ACQ_KI = 8, KEY_TYPE_ACQUIRER_MK = 9, KEY_TYPE_SEC_ACQ_MK = 10, KEY_TYPE_ACQ_SESSION_KEYS = 11, KEY_TYPE_ENC_KI_FMT_0 = 12, KEY_TYPE_ENC_KI_FMT_1 = 13, KEY_TYPE_ENC_KI_FMT_2 = 14, KEY_TYPE_ENC_PPID = 15, KEY_TYPE_ENC_PPASN = 16, KEY_TYPE_KVC_KIA = 17, KEY_TYPE_KVC_KEK1 = 18, KEY_TYPE_MVK = 19, KEY_TYPE_DDK = 20, KEY_TYPE_KEK = 21, KEY_TYPE_DUKPT = 22, KEY_TYPE_CERT = 23, KEY_TYPE_DIRECT_MK_PLAIN = 24, KEY_TYPE_DIRECT_MK_ENC = 25, KEY_TYPE_DIRECT_SYSK_PLAIN = 26, KEY_TYPE_DIRECT_SYSK_ENC = 27, KEY_TYPE_DELETE_ALL_KEYS = 28, KEY_TYPE_DELETE_SYS_KEY = 29, KEY_TYPE_DIRECT_AUTHEX_ENC = 30, KEY_TYPE_DIRECT_AUTHEX_SYSK = 31, KEY_TYPE_DELETE_ALL_CUST_KEYS = 32, KEY_TYPE_DIRECT_CUSTOM_ASYM = 33, KEY_TYPE_DIRECT_CUSTOM_ASYM_SYSK = 34} |
| enum| **[pin_entry_type_e](namespacecom__verifone__host.md#enum-pin-entry-type-e)** { PIN_ENTRY_TYPE__INVALID_E = -1, PIN_ENTRY_TYPE_MANDATORY_E = 0, PIN_ENTRY_TYPE_OPTIONAL_E = 1, PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_ENC_E = 2, PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_E = 3} |
| enum| **[pin_block_format_e](namespacecom__verifone__host.md#enum-pin-block-format-e)** { PIN_BLOCK_FORMAT__INVALID_E = -1, PIN_BLOCK_FORMAT_ISO0_E = 0, PIN_BLOCK_FORMAT_ISO1_E = 1, PIN_BLOCK_FORMAT_ISO2_E = 2, PIN_BLOCK_FORMAT_ISO3_E = 3, PIN_BLOCK_FORMAT_ISO4_E = 4, PIN_BLOCK_FORMAT_INC_KSN = 4} |
| typedef uint8_t | **[key_type_t](namespacecom__verifone__host.md#typedef-key-type-t)**  |
| typedef enum [com_verifone_host::pin_entry_type_e](namespacecom__verifone__host.md#enum-pin-entry-type-e) | **[pin_entry_type_t](namespacecom__verifone__host.md#typedef-pin-entry-type-t)**  |
| typedef enum [com_verifone_host::pin_block_format_e](namespacecom__verifone__host.md#enum-pin-block-format-e) | **[pin_block_format_t](namespacecom__verifone__host.md#typedef-pin-block-format-t)**  |

## Types Documentation

### enum key_type_e

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| KEY_TYPE__INVALID_E | -1|  Value not set  |
| KEY_TYPE_TMK | 0|  Termina Master Key  |
| KEY_TYPE_PPK | 1|  PIN Protection Key  |
| KEY_TYPE_MGK | 2|  MAC Generation Key  |
| KEY_TYPE_DEK | 3|  Data Encryption Key  |
| KEY_TYPE_TCU_PK | 4|  Bendigo only: TCU RSA Public Key  |
| KEY_TYPE_SPONSOR_PK | 5|  Bendigo only: Sponsor RSA Public Key  |
| KEY_TYPE_SPONSOR_MK | 6|  Bendigo only: Sponsor Master Keys  |
| KEY_TYPE_SPONSOR_KI | 7|  Bendigo only: Sponsor Initialisation Key  |
| KEY_TYPE_SEC_ACQ_KI | 8|  Bendigo only: Secondary Acquirer Initialisation Key  |
| KEY_TYPE_ACQUIRER_MK | 9|  Bendigo only: Acquirer Master Keys  |
| KEY_TYPE_SEC_ACQ_MK | 10|  Bendigo only: Secondary Acquirer Master Keys  |
| KEY_TYPE_ACQ_SESSION_KEYS | 11|  Bendigo only: Acquirer Session Keys  |
| KEY_TYPE_ENC_KI_FMT_0 | 12|  Bendigo only: Encrypted KI (Format 0)  |
| KEY_TYPE_ENC_KI_FMT_1 | 13|  Bendigo only: Encrypted KI (Format 1)  |
| KEY_TYPE_ENC_KI_FMT_2 | 14|  Bendigo only: Encrypted KI (Format 2)  |
| KEY_TYPE_ENC_PPID | 15|  Bendigo only: Encrypted PPID  |
| KEY_TYPE_ENC_PPASN | 16|  Bendigo only: Encrypted PPASN  |
| KEY_TYPE_KVC_KIA | 17|  Bendigo only: KVC of KIA  |
| KEY_TYPE_KVC_KEK1 | 18|  Bendigo only: KVC of KEK1  |
| KEY_TYPE_MVK | 19|  MAC Verification Key  |
| KEY_TYPE_DDK | 20|  Data Decryption Key  |
| KEY_TYPE_KEK | 21|  Key Encryption Key  |
| KEY_TYPE_DUKPT | 22|  DUKPT key  |
| KEY_TYPE_CERT | 23|  Certificate  |
| KEY_TYPE_DIRECT_MK_PLAIN | 24|  iPS_LoadMasterClearKey replacement. Loads the security script’s master key. The values are sent in the clear, but must all be loaded in the same session. 

 Before loading the first key after a power cycle, all previously loaded keys (including the system keys) are erased.

**This function should be used exclusively in a secure environment.** |
| KEY_TYPE_DIRECT_MK_ENC | 25|  iPS_LoadMasterEncKey replacement. Loads the security script’s master key without deleting the keys already loaded. The key value must be encrypted with VSS_KLK  |
| KEY_TYPE_DIRECT_SYSK_PLAIN | 26|  iPS_LoadSysClearKey replacement. Loads the VSS_KLK (system key) in the clear. 

 Before writing the new value of the key, all other keys in the terminal are erased. 

**This function should be used exclusively in a secure environment.** |
| KEY_TYPE_DIRECT_SYSK_ENC | 27|  iPS_LoadSysEncKey replacement. Loads the system key. The new values must be encrypted under the current value of VSS_KLK.  |
| KEY_TYPE_DELETE_ALL_KEYS | 28|  iPS_DeleteKey replacement.  |
| KEY_TYPE_DELETE_SYS_KEY | 29|  iPS_DeleteKey replacement.  |
| KEY_TYPE_DIRECT_AUTHEX_ENC | 30|  rsaAuthexVssKeyInstall replacement. Loads the VSS key. The new values must be encrypted under AuthEx.  |
| KEY_TYPE_DIRECT_AUTHEX_SYSK | 31|  rsaAuthexVssKeyInstall replacement. Loads the VSS_KLK. The new values must be encrypted under AuthEx.  |
| KEY_TYPE_DELETE_ALL_CUST_KEYS | 32|  iPS_DeleteKey replacement for DEL_ALL - clears all OS-managed customer keys like VSS, IPP and ADE.  |
| KEY_TYPE_DIRECT_CUSTOM_ASYM | 33|  customAsymmKeyVssKeyInstall replacement. Install the given encrypted VSS key after decrypting it with the Custom RSA key loaded previously by VRKv2. This key loading functionality is provided only by VOS2.  |
| KEY_TYPE_DIRECT_CUSTOM_ASYM_SYSK | 34|  customAsymmKeyVssKeyInstall replacement. Install the given encrypted VSS_KLK key after decrypting it with the Custom RSA key loaded previously by VRKv2. This key loading functionality is provided only by VOS2.  |




Key types 


### enum pin_entry_type_e

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PIN_ENTRY_TYPE__INVALID_E | -1|  Value not set  |
| PIN_ENTRY_TYPE_MANDATORY_E | 0|  PIN Mandatory  |
| PIN_ENTRY_TYPE_OPTIONAL_E | 1|  PIN Optional  |
| PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_ENC_E | 2|  PIN Optional 0 length PIN Encryption  |
| PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_E | 3|  0 Length PIN  |




PIN Entry Type 


### enum pin_block_format_e

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PIN_BLOCK_FORMAT__INVALID_E | -1|  Value not set  |
| PIN_BLOCK_FORMAT_ISO0_E | 0|  ISO-0  |
| PIN_BLOCK_FORMAT_ISO1_E | 1|  ISO-1  |
| PIN_BLOCK_FORMAT_ISO2_E | 2|  ISO-2  |
| PIN_BLOCK_FORMAT_ISO3_E | 3|  ISO-3  |
| PIN_BLOCK_FORMAT_ISO4_E | 4|  ISO-4 Supported only with AES module  |
| PIN_BLOCK_FORMAT_INC_KSN | 4|   |




PIN Block Format 


### typedef key_type_t

```cpp
typedef uint8_t key_type_t;
```


### typedef pin_entry_type_t

```cpp
typedef enum com_verifone_host::pin_entry_type_e pin_entry_type_t;
```


PIN Entry Type 


### typedef pin_block_format_t

```cpp
typedef enum com_verifone_host::pin_block_format_e pin_block_format_t;
```


PIN Block Format 







-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
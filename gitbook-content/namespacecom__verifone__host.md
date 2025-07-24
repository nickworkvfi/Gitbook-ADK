---
hidden: true
title: com_verifone_host Namespace Reference
---

[Typedefs](#typedef-members) \| [Enumerations](#enum-members)

|  |  |
|----|----|
| Typedefs |  |
| typedef uint8_t  | [key_type_t](#a2418ec606f68970a9ed5ddf6ede58a2f) |
| typedef enum [com_verifone_host::pin_entry_type_e](#a112cf2dddd5a504da9cb646fe6df856a)  | [pin_entry_type_t](#a8912bf5e7a5e7c3572234976755a39aa) |
| typedef enum [com_verifone_host::pin_block_format_e](#a9187fdfc7bd10fdf9a04181929e41693)  | [pin_block_format_t](#ad9cc247c205c1cbf74aae27e459c4ce9) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [key_type_e](#ab6420af507afd2c6a57f725ad69d11cb) {<br/>  [KEY_TYPE\_\_INVALID_E](#ab6420af507afd2c6a57f725ad69d11cbaa2678cce73d51c8593a4b32f06e863f6) = -1, [KEY_TYPE_TMK](#ab6420af507afd2c6a57f725ad69d11cba97fca93a5b7ec4aedee7149073db751e) = 0, [KEY_TYPE_PPK](#ab6420af507afd2c6a57f725ad69d11cba508471c3ad9204286222065b5adb9f23) = 1, [KEY_TYPE_MGK](#ab6420af507afd2c6a57f725ad69d11cba793c57ed813cdc0fcadd9a1e5d175bbc) = 2,<br/>  [KEY_TYPE_DEK](#ab6420af507afd2c6a57f725ad69d11cba93b5ecc6254c9553998b5b503c5565c2) = 3, [KEY_TYPE_TCU_PK](#ab6420af507afd2c6a57f725ad69d11cbafde71a7e88381351a90819d189395595) = 4, [KEY_TYPE_SPONSOR_PK](#ab6420af507afd2c6a57f725ad69d11cba703240f5f7a5e5250fb0c500718e4ae7) = 5, [KEY_TYPE_SPONSOR_MK](#ab6420af507afd2c6a57f725ad69d11cbab35dea27712284a2c1a7304978a22b29) = 6,<br/>  [KEY_TYPE_SPONSOR_KI](#ab6420af507afd2c6a57f725ad69d11cba09f2a46c0323886f3c0972645d766899) = 7, [KEY_TYPE_SEC_ACQ_KI](#ab6420af507afd2c6a57f725ad69d11cbaa1b0414e11ad93eea0ed683e5f71817f) = 8, [KEY_TYPE_ACQUIRER_MK](#ab6420af507afd2c6a57f725ad69d11cba478004f6fb9430b21c56edae85c50a90) = 9, [KEY_TYPE_SEC_ACQ_MK](#ab6420af507afd2c6a57f725ad69d11cba72ac58fd195ecf7c7217bea4a6ff2a23) = 10,<br/>  [KEY_TYPE_ACQ_SESSION_KEYS](#ab6420af507afd2c6a57f725ad69d11cbaf79e0ff7580875d9bdcf4d10225779c7) = 11, [KEY_TYPE_ENC_KI_FMT_0](#ab6420af507afd2c6a57f725ad69d11cbae6cfdb89bd03c0a2199f28e16fec0ee7) = 12, [KEY_TYPE_ENC_KI_FMT_1](#ab6420af507afd2c6a57f725ad69d11cbabc5fb023d8d677e74d3b48545563a952) = 13, [KEY_TYPE_ENC_KI_FMT_2](#ab6420af507afd2c6a57f725ad69d11cbacbe0d7ac6481e5ab5ba76f9743313374) = 14,<br/>  [KEY_TYPE_ENC_PPID](#ab6420af507afd2c6a57f725ad69d11cba3bfba7d3da9d84c4e5a17dbb531a2264) = 15, [KEY_TYPE_ENC_PPASN](#ab6420af507afd2c6a57f725ad69d11cba87086d37574db21a706727ea790a3c08) = 16, [KEY_TYPE_KVC_KIA](#ab6420af507afd2c6a57f725ad69d11cbae255a9df4e1aaefbc9366de3f8065d60) = 17, [KEY_TYPE_KVC_KEK1](#ab6420af507afd2c6a57f725ad69d11cba824c4c6708c37969db4828faf327aca9) = 18,<br/>  [KEY_TYPE_MVK](#ab6420af507afd2c6a57f725ad69d11cba7221a6157a4a90491547f38975a9ebcf) = 19, [KEY_TYPE_DDK](#ab6420af507afd2c6a57f725ad69d11cba06ba2d0d2a433b018b9bce5a7b703ed6) = 20, [KEY_TYPE_KEK](#ab6420af507afd2c6a57f725ad69d11cba768d13fac4b43aa792f2b529636ee45f) = 21, [KEY_TYPE_DUKPT](#ab6420af507afd2c6a57f725ad69d11cba7d6a499d7761faab2f2af90b7adc6f3e) = 22,<br/>  [KEY_TYPE_CERT](#ab6420af507afd2c6a57f725ad69d11cba3a40bbfe0fae7cd1418c9eeb94541ebf) = 23, [KEY_TYPE_DIRECT_MK_PLAIN](#ab6420af507afd2c6a57f725ad69d11cba2623446657a3abaaa477ae31aae03538) = 24, [KEY_TYPE_DIRECT_MK_ENC](#ab6420af507afd2c6a57f725ad69d11cba5ba1a7e32fb7aff0a6c8595f3748b418) = 25, [KEY_TYPE_DIRECT_SYSK_PLAIN](#ab6420af507afd2c6a57f725ad69d11cbadb06bfd0ecb8cbef74ed51861c2aecd4) = 26,<br/>  [KEY_TYPE_DIRECT_SYSK_ENC](#ab6420af507afd2c6a57f725ad69d11cba5692ffc7bfa4e0a25d8dc3483ec353f9) = 27, [KEY_TYPE_DELETE_ALL_KEYS](#ab6420af507afd2c6a57f725ad69d11cba331d442daf2746bf9d60b3709ec314c3) = 28, [KEY_TYPE_DELETE_SYS_KEY](#ab6420af507afd2c6a57f725ad69d11cba9a7f2b8cd3918549fa78db39c4f93a68) = 29, [KEY_TYPE_DIRECT_AUTHEX_ENC](#ab6420af507afd2c6a57f725ad69d11cba9edf634d7c59ddb63f033e7f91dc7771) = 30,<br/>  [KEY_TYPE_DIRECT_AUTHEX_SYSK](#ab6420af507afd2c6a57f725ad69d11cbaa50da1d301fd48e8e21e10ba499737d5) = 31, [KEY_TYPE_DELETE_ALL_CUST_KEYS](#ab6420af507afd2c6a57f725ad69d11cbaa7c42d56623245fd2f3f0befa0cb47f6) = 32, [KEY_TYPE_DIRECT_CUSTOM_ASYM](#ab6420af507afd2c6a57f725ad69d11cba95a6b8bab845cce0b7d7ea0fc6cabb3f) = 33, [KEY_TYPE_DIRECT_CUSTOM_ASYM_SYSK](#ab6420af507afd2c6a57f725ad69d11cbaa2f6a2eeb244c7f15e35d4962b0d651c) = 34<br/>} |
| enum   | [pin_entry_type_e](#a112cf2dddd5a504da9cb646fe6df856a) {<br/>  [PIN_ENTRY_TYPE\_\_INVALID_E](#a112cf2dddd5a504da9cb646fe6df856aa0fd0290ee4f049554b606088884a5d9c) = -1, [PIN_ENTRY_TYPE_MANDATORY_E](#a112cf2dddd5a504da9cb646fe6df856aa218934142930b6e0876c1a83decae7dc) = 0, [PIN_ENTRY_TYPE_OPTIONAL_E](#a112cf2dddd5a504da9cb646fe6df856aa81532cd64d5490e643b13b8b4cd46714) = 1, [PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_ENC_E](#a112cf2dddd5a504da9cb646fe6df856aa1c92c3e6fa01b594ae2b086c3eb4a63f) = 2,<br/>  [PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_E](#a112cf2dddd5a504da9cb646fe6df856aa84e4eca8cdc0cd40e317c9f8922511a7) = 3<br/>} |
| enum   | [pin_block_format_e](#a9187fdfc7bd10fdf9a04181929e41693) {<br/>  [PIN_BLOCK_FORMAT\_\_INVALID_E](#a9187fdfc7bd10fdf9a04181929e41693a41c2fe8ecd7de50f286582a2ae6b6fd1) = -1, [PIN_BLOCK_FORMAT_ISO0_E](#a9187fdfc7bd10fdf9a04181929e41693aca37b0bbb503fcbbc83126484c7c53dc) = 0, [PIN_BLOCK_FORMAT_ISO1_E](#a9187fdfc7bd10fdf9a04181929e41693ab26b2fa22fd9c7ccff77d51adf9fefea) = 1, [PIN_BLOCK_FORMAT_ISO2_E](#a9187fdfc7bd10fdf9a04181929e41693aba22b80e572de9064a7811fb10ddb1e2) = 2,<br/>  [PIN_BLOCK_FORMAT_ISO3_E](#a9187fdfc7bd10fdf9a04181929e41693ac81a724b79ab82756da6d67b14788514) = 3, [PIN_BLOCK_FORMAT_ISO4_E](#a9187fdfc7bd10fdf9a04181929e41693a70c003f1b46a252064fcfe374ab67869) = 4, [PIN_BLOCK_FORMAT_INC_KSN](#a9187fdfc7bd10fdf9a04181929e41693a8ef7b1bf8a286ab7cea7649a1d017761) = 4<br/>} |

## TypedefDocumentation {#typedef-documentation}

## key_type_t <a href="#a2418ec606f68970a9ed5ddf6ede58a2f" id="a2418ec606f68970a9ed5ddf6ede58a2f"></a>

<p>typedef uint8_t [key_type_t](#a2418ec606f68970a9ed5ddf6ede58a2f)</p>

## pin_block_format_t <a href="#ad9cc247c205c1cbf74aae27e459c4ce9" id="ad9cc247c205c1cbf74aae27e459c4ce9"></a>

<p>typedef enum [com_verifone_host::pin_block_format_e](#a9187fdfc7bd10fdf9a04181929e41693) [pin_block_format_t](#ad9cc247c205c1cbf74aae27e459c4ce9)</p>

PIN Block Format

## pin_entry_type_t <a href="#a8912bf5e7a5e7c3572234976755a39aa" id="a8912bf5e7a5e7c3572234976755a39aa"></a>

<p>typedef enum [com_verifone_host::pin_entry_type_e](#a112cf2dddd5a504da9cb646fe6df856a) [pin_entry_type_t](#a8912bf5e7a5e7c3572234976755a39aa)</p>

PIN Entry Type

## EnumerationType Documentation {#enumeration-type-documentation}

## key_type_e <a href="#ab6420af507afd2c6a57f725ad69d11cb" id="ab6420af507afd2c6a57f725ad69d11cb"></a>

<p>enum [key_type_e](#ab6420af507afd2c6a57f725ad69d11cb)</p>

Key types

| Enumerator |  |
|----|----|
| KEY_TYPE\_\_INVALID_E  | <p>Value not set</p> |
| KEY_TYPE_TMK  | <p>Termina Master Key</p> |
| KEY_TYPE_PPK  | <p>PIN Protection Key</p> |
| KEY_TYPE_MGK  | <p>MAC Generation Key</p> |
| KEY_TYPE_DEK  | <p>Data Encryption Key</p> |
| KEY_TYPE_TCU_PK  | <p>Bendigo only: TCU RSA Public Key</p> |
| KEY_TYPE_SPONSOR_PK  | <p>Bendigo only: Sponsor RSA Public Key</p> |
| KEY_TYPE_SPONSOR_MK  | <p>Bendigo only: Sponsor Master Keys</p> |
| KEY_TYPE_SPONSOR_KI  | <p>Bendigo only: Sponsor Initialisation Key</p> |
| KEY_TYPE_SEC_ACQ_KI  | <p>Bendigo only: Secondary Acquirer Initialisation Key</p> |
| KEY_TYPE_ACQUIRER_MK  | <p>Bendigo only: Acquirer Master Keys</p> |
| KEY_TYPE_SEC_ACQ_MK  | <p>Bendigo only: Secondary Acquirer Master Keys</p> |
| KEY_TYPE_ACQ_SESSION_KEYS  | <p>Bendigo only: Acquirer Session Keys</p> |
| KEY_TYPE_ENC_KI_FMT_0  | <p>Bendigo only: Encrypted KI (Format 0)</p> |
| KEY_TYPE_ENC_KI_FMT_1  | <p>Bendigo only: Encrypted KI (Format 1)</p> |
| KEY_TYPE_ENC_KI_FMT_2  | <p>Bendigo only: Encrypted KI (Format 2)</p> |
| KEY_TYPE_ENC_PPID  | <p>Bendigo only: Encrypted PPID</p> |
| KEY_TYPE_ENC_PPASN  | <p>Bendigo only: Encrypted PPASN</p> |
| KEY_TYPE_KVC_KIA  | <p>Bendigo only: KVC of KIA</p> |
| KEY_TYPE_KVC_KEK1  | <p>Bendigo only: KVC of KEK1</p> |
| KEY_TYPE_MVK  | <p>MAC Verification Key</p> |
| KEY_TYPE_DDK  | <p>Data Decryption Key</p> |
| KEY_TYPE_KEK  | <p>Key Encryption Key</p> |
| KEY_TYPE_DUKPT  | <p>DUKPT key</p> |
| KEY_TYPE_CERT  | <p>Certificate</p> |
| KEY_TYPE_DIRECT_MK_PLAIN  | <p>iPS_LoadMasterClearKey replacement. Loads the security script's master key. The values are sent in the clear, but must all be loaded in the same session.<br/>Before loading the first key after a power cycle, all previously loaded keys (including the system keys) are erased.<br/><br/>**This function should be used exclusively in a secure environment.**</p> |
| KEY_TYPE_DIRECT_MK_ENC  | <p>iPS_LoadMasterEncKey replacement. Loads the security script's master key without deleting the keys already loaded. The key value must be encrypted with VSS_KLK</p> |
| KEY_TYPE_DIRECT_SYSK_PLAIN  | <p>iPS_LoadSysClearKey replacement. Loads the VSS_KLK (system key) in the clear.<br/>Before writing the new value of the key, all other keys in the terminal are erased.<br/><br/>**This function should be used exclusively in a secure environment.**</p> |
| KEY_TYPE_DIRECT_SYSK_ENC  | <p>iPS_LoadSysEncKey replacement. Loads the system key. The new values must be encrypted under the current value of VSS_KLK.</p> |
| KEY_TYPE_DELETE_ALL_KEYS  | <p>iPS_DeleteKey replacement.</p> |
| KEY_TYPE_DELETE_SYS_KEY  | <p>iPS_DeleteKey replacement.</p> |
| KEY_TYPE_DIRECT_AUTHEX_ENC  | <p>rsaAuthexVssKeyInstall replacement. Loads the VSS key. The new values must be encrypted under AuthEx.</p> |
| KEY_TYPE_DIRECT_AUTHEX_SYSK  | <p>rsaAuthexVssKeyInstall replacement. Loads the VSS_KLK. The new values must be encrypted under AuthEx.</p> |
| KEY_TYPE_DELETE_ALL_CUST_KEYS  | <p>iPS_DeleteKey replacement for DEL_ALL - clears all OS-managed customer keys like VSS, IPP and ADE.</p> |
| KEY_TYPE_DIRECT_CUSTOM_ASYM  | <p>customAsymmKeyVssKeyInstall replacement. Install the given encrypted VSS key after decrypting it with the Custom RSA key loaded previously by VRKv2. This key loading functionality is provided only by VOS2.</p> |
| KEY_TYPE_DIRECT_CUSTOM_ASYM_SYSK  | <p>customAsymmKeyVssKeyInstall replacement. Install the given encrypted VSS_KLK key after decrypting it with the Custom RSA key loaded previously by VRKv2. This key loading functionality is provided only by VOS2.</p> |

## pin_block_format_e <a href="#a9187fdfc7bd10fdf9a04181929e41693" id="a9187fdfc7bd10fdf9a04181929e41693"></a>

<p>enum [pin_block_format_e](#a9187fdfc7bd10fdf9a04181929e41693)</p>

PIN Block Format

| Enumerator |  |
|----|----|
| PIN_BLOCK_FORMAT\_\_INVALID_E  | <p>Value not set</p> |
| PIN_BLOCK_FORMAT_ISO0_E  | <p>ISO-0</p> |
| PIN_BLOCK_FORMAT_ISO1_E  | <p>ISO-1</p> |
| PIN_BLOCK_FORMAT_ISO2_E  | <p>ISO-2</p> |
| PIN_BLOCK_FORMAT_ISO3_E  | <p>ISO-3</p> |
| PIN_BLOCK_FORMAT_ISO4_E  | <p>ISO-4 Supported only with AES module</p> |
| PIN_BLOCK_FORMAT_INC_KSN  |  |

## pin_entry_type_e <a href="#a112cf2dddd5a504da9cb646fe6df856a" id="a112cf2dddd5a504da9cb646fe6df856a"></a>

<p>enum [pin_entry_type_e](#a112cf2dddd5a504da9cb646fe6df856a)</p>

PIN Entry Type

| Enumerator |  |
|----|----|
| PIN_ENTRY_TYPE\_\_INVALID_E  | <p>Value not set</p> |
| PIN_ENTRY_TYPE_MANDATORY_E  | <p>PIN Mandatory<br/></p> |
| PIN_ENTRY_TYPE_OPTIONAL_E  | <p>PIN Optional</p> |
| PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_ENC_E  | <p>PIN Optional 0 length PIN Encryption</p> |
| PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_E  | <p>0 Length PIN</p> |

---
hidden: true
title: ADK-VCL Programmers Guide
---

### Tableof Contents

- [Preface](#vcl_preface)
- [Introduction](#vcl_into)
- [VeriShield Protect Components (VSP)](#vcl_vsp_components)
- [VeriShield Crypto Library (VCL)](#vcl_vcl)
- [DDK Mode](#vcl_ddk_mode)
  - [Steps to get started with VCL (VSP Encryption)](#vcl_ddk_get_started)
  - [Key concepts about VCL and VSP](#vcl_ddk_key_concepts)
  - [SRED changes for DDK Mode](#vcl_ddk_sred_changes)
    - [Maple VCL (12.x)](#vcl_ddk_sred_changes_maple)
    - [Hollywood and Juniper VCL (9.x)](#vcl_ddk_sred_changes_hollywood)
- [AES DUKPT Mode](#vcl_aes_dukpt_mode)
  - [AES DUKPT overview](#vcl_aes_dukpt_mode_overview)
  - [AES DUKPT Features and Benefits](#vcl_aes_dukpt_mode_overview_features)
  - [AES DUKPT Modes](#vcl_aes_dukpt_mode_overview_modes)
  - [Track Filtering and Masking](#vcl_aes_dukpt_mode_overview_filtering)
- [Encryption Rules and Expiry Date modifications](#vcl_expiry_date)
- [VSP Status Screen](#vsp_status)
  - [VSP not enabled - VCL Initial Status](#vsp_status_not_enabled)
  - [VSP Status screen after a VRK AES DUKPT key load.](#vsp_status_key_loaded)
  - [VSP Status screen after settings file was consumed by VCL](#vsp_status_settings_consumed)
  - [VCL summary of each state](#vsp_status_summary)
    - [New VSP install](#vsp_status_summary_new_install)
    - [DDK Mode was enabled](#vsp_status_summary_ddk_mode_enabled)
  - [Anatomy of VCL Status](#vsp_status_anatomy)
    - [Secure Mode vs Secure Mode SRED](#vsp_status_anatomy_sec_vs_secsred)
  - [Section #5 in VSP Status](#vsp_status_section_5)
- [Troubleshooting](#troubleshooting)

# Preface <a href="#vcl_preface" id="vcl_preface"></a>

This document is for programmers and developers who want to understand and use the VeriShield Crypto Library.

# Introduction <a href="#vcl_into" id="vcl_into"></a>

VeriShield Protect (VSP) is an end-to-end encryption solution. VSP encrypts the credit card at the moment the card is read at the payment device, passing that data through intermediate systems to a processor who has installed the VSP decryption solution.

# VeriShield Protect Components (VSP) <a href="#vcl_vsp_components" id="vcl_vsp_components"></a>

VSP consists of device encryption (VeriShield Crypto Library or VCL) and a host decryption system consisting of VeriShield Service Decryption (VSD), VeriShield Merchant Boarding (VMB), and VeriShield Monitoring & Compliance (VMC).

- VCL: the encryption module that runs on V/OS, V/OS2, VX, and Trinity devices.
- VSD: the Decryption System is accessed via a web service API. VSD sits within-host environments, such as Fiserv, Chase, Global Payments, etc. VSD is not reachable directly by the device.
- VMB: the Verifone Merchant Boarding is the system that generates customer-specific `vcl_settings` files, as well as bin table files.
- VMC: the result of all VSD decryption results is logged in the Verifone Monitoring and Compliance system. VMC provides analytics and compliance reports.

# VeriShield Crypto Library (VCL) <a href="#vcl_vcl" id="vcl_vcl"></a>

VeriShield Crypto Library (VCL) is a module that provides format-preserving encryption (FPE) using Verifone\'s VAES encryption algorithm. Also known as Device Derivation Key (DDK), the VSP original encryption solution is widely used in North America. In 2018, AES DUKPT was introduced as another VSP encryption method. Due to the eParms requirement to use AES DUKPT, the AES DUKPT solution is just now getting implemented with customers and payment hosts. In 2021, AES DUKPT will start to become the VSP standard.

Following is older guide created many years ago before the introduction of Android/Trinity devices: <a href="D45_00021_%20VeriShield_Crypto_Library_Technical_Reference_Manual-4.pdf">D45_00021_ VeriShield_Crypto_Library_Technical_Reference_Manual-4.pdf</a>.

# DDK Mode <a href="#vcl_ddk_mode" id="vcl_ddk_mode"></a>

## Steps to get started with VCL (VSP Encryption) <a href="#vcl_ddk_get_started" id="vcl_ddk_get_started"></a>

- Install a `vcl_settings` file
- Install the VSP VRK key.
  - Note, if using the TestMDK with LongKifKek (these are in the `vcl_settings` file), you can do key injection via key component cards, or by sending 2 sets of track 3 data.
- Validate that a MDK was loaded on the device. This confirms that VSP Key injection was successful.
- Enable VSP Encryption
  - Using the Registart API, encryption can be enabled and disabled (with a Registop).
  - Using the Registart SRED API enables encryption, and prevents encryption from being disabled (Registop does not work if the device is in SRED Mode).
- Test encryption.

## Key concepts about VCL and VSP <a href="#vcl_ddk_key_concepts" id="vcl_ddk_key_concepts"></a>

- The MDK key is the master derivation key used for deriving unique keys per device (10 shared keys and 90 unique keys per device).
- The MDK is wrapped with a key encrypting key and is embedded in the `vcl_settings` file.
- VSP Key injection on development devices can be done via 3 options:
  - Key Component cards (not used very often anymore).
  - Using `semdriv`, the VCL test tool.
  - VRK.
- VSP Key injection on production devices requires the `vcl_settings` file to be installed first, then the VRK VSP Key (the wrapping key) is installed.
- The MDK and Wrapping key combo must match for VSP Key Injection to be successful.
- The `vcl_settings` file is generated by the VMB that is linked with VSD and an HSM.
- VSP Keys
  - Key are generated in certified HSMs (FIPS or PCI HSM) using compliant random number generators.
  - Keys are loaded compliantly using encrypted key loading techniques provided by VRK and certified by PCI PIN and PCI P2PE. Our facilities are audited to these requirements.
  - VRK uses ANSI X9 TR-34 and ANSI X9 TR-31 for protecting keys during transit and meets PCI PIN, PCI P2PE, and ANSI X9.24 part 1 and part 2 requirements.
  - Terminal key loading is SRED compliant. All Verifone devices are certified to SRED secure key loading in PCI PTS.
  - All key loading is mutually authenticated, encrypted and signed, uses replay protection, and only uses certified SCD (Secure Cryptographic Devices) to protect key materials on each end.
- Each customer has a unique `vcl_settings` file
  - Although some hosts share the MDK between merchants, each merchant has its own unique <a href="class_config.md">Config</a> ID (aka Merchant ID) internal to VMB and VSD.
  - `vcl_settings` files can not be shared between customers.
  - `vcl_settings` file should never be manually altered (or hand-edited). Doing so will cause decryption issues.
  - The initial `vcl_settings` contains VSP configuration data as well as Bin Table white lists and special BIN Table rules (when needed). If a customer needs to alter the BIN Table rules, a separate BIN Table update file is used. Modifying an existing `vcl_settings` file BIN Table entries is strictly forbidden and will not work correctly.
- The VCL major version (example: 12 from VCL 12.0.03), is displayed as part of the SRED Version on the device.
- There are two flavors of VSP:
  - The original design using a MDK. This mode is often referred to as Derived Derivation Key, or DDK.
  - AES DUKPT is the newer design and uses different key and encryption methodologies.
- When using the standard DDK settings, VCL encrypts Track Data using a format-preserving encryption algorithm (FPE) and the VSP encrypted data is message preserving.
- When using the standard DDK settings, VCL modifies the expiry date as an encryption flag. This allows the Decryption System (VSD) to know when to decrypt: [Encryption Rules and Expiry Date modifications](#vcl_expiry_date).
- eParms is an option to be enabled for a merchant. eParms is an extra piece of data that must accompany the VSP encrypted data. eParms contains information on what VCL encrypted and MACs of the data for data integrity checks. When eParms is enabled, the expiry date is not modified by VCL.
- Command Transactions are VCL generated track data to be used in the authorization to signal to VSD that something has changed on the device. For example, when the VCL Registart SRED API is called, VCL will generate track data that must be sent up for authorization.
- MIV is a Message Integrity Value that is used to generate a mini MAC of the clear track data so when VSD decrypts the data, VSD can validate the decrypted data is correct. MIV is only used when eParms is disabled, and when the service code of the track data is 101.
- VCL uses a Format Preserving Encryption algorithm known as VAES.
- VCL is used for encrypting Track Data and PAN Data. Altough VAES could be used for other types of data, VSP has implemented FPE for numeric digits only in Track Data and PAN Data.
- VCL will only encrypt track that is ISO-7813 compliant: <a href="https://en.wikipedia.org/wiki/ISO/IEC_7813">https://en.wikipedia.org/wiki/ISO/IEC_7813</a>

## SRED changes for DDK Mode <a href="#vcl_ddk_sred_changes" id="vcl_ddk_sred_changes"></a>

### Maple VCL (12.x) <a href="#vcl_ddk_sred_changes_maple" id="vcl_ddk_sred_changes_maple"></a>

PCI changed the requirement for \"Double Encryption\" from 2-digits (or less) to 4-digits (or less). The device must have Double Encryption with 4-Digits (or less) to be in SRED mode.

- VSP supports Double Encryption for both 2-Digits and 4-Digits in Maple.
  - If 2-Digits or less for Double Encryption is enabled the device will show it\'s in \"Secure Mode\". This is no longer not considered SRED in Maple VCL 12.x
  - If 4-Digits or less for Double Encryption is enabled the device will show it\'s in \"Secure Mode SRED\".

### Hollywood and Juniper VCL (9.x) <a href="#vcl_ddk_sred_changes_hollywood" id="vcl_ddk_sred_changes_hollywood"></a>

PCI decided that in order for the M400 to be PCI PTS 5.0 certified VAES3 shall no longer be used for card data encryption. Starting in Hollywood VCL (7.6.002S for VOS2) the ability to set VAES3 for new devices has been removed. Installing this version of VCL (or updating the OS that includes this version of VCL) on an existing device that is using VAES3 will continue to function under VAES3. But as soon as a Registart API is called VCL will automatically switch from VAES3 to VAES4. The encryption algorithm used is within the Registart command response.

Key points:

- VAES3 has been deprecated. VAES3 can no longer be enabled on new installations. VAES4 is the only allowed encryption algorithm.
- In order for a device to be considered SRED Compliant, VAES4 and Double Encryption must be enabled.
- A new \"Double Encryption\" setting has been introduced. For short data input (2 characters or less), the data must be submitted twice to the encryption algorithm. Because VCL/VSP uses a synchronous encryption scheme we must set the \"double encryption\" as a flag in the vcl settings files since existing implementations are not aware of double encryption. VSD will do \"double decryption\" when a device sends up the flag that it has \"double encryption\" enabled.
- The VSP status screen will display 22 in the 5th section to denote that VAES4 is using Double Encryption for short data input.
- SRED Mode in VSP Status screen has been modified to:
  - SECURE MODE: displayed when VAES4 is selected, Double Encryption is not enabled, and Registart SRED was processed.
  - SECURE MODE SRED: displayed when VAES4 is selected, Double Encryption is enabled, and Registart SRED was processed.
- \"\[06\]\" is a new code for SECURE MODE. See the VCL Status screen for details.
- Both SECURE MODE and SECURE MODE SRED do not allow encryption to be disabled (stopped) via the VCL Registop API.
- VCL will update the SRED mode flag on the bootup screen to \"SRED=ON\" only when VCL is in SECURE MODE SRED mode.

# AES DUKPT Mode <a href="#vcl_aes_dukpt_mode" id="vcl_aes_dukpt_mode"></a>

This technical documentation describes AES DUKPT features and methods of use.

## AES DUKPT overview <a href="#vcl_aes_dukpt_mode_overview" id="vcl_aes_dukpt_mode_overview"></a>

AES DUKPT allows financial institutions to use the Advanced Encryption Standard (AES) algorithm in a secure and interoperable way to provide confidentiality through encryption of PINs and cardholder data, transaction authentication, and much more.

Merchants use symmetric key encryption inside the payment terminal to protect consumer debit PIN and cardholder data. Symmetric key encryption uses a single secret key to protect the contents of a message; the sending and receiving parties must use the same key to transmit information in the message successfully. But using the same key multiple times can put the key, and the data being protected, at greater risk in the event of an attack. To mitigate the damage of a single key is compromised, a DUKPT algorithm is used by the sending and receiving parties to independently derive a new but identical secret key for each new message. Therefore, if one key is compromised, messages sent using other keys are still protected.

The AES DUKPT algorithm, which uses the U.S. government approved Advanced Encryption Standard, is intended to replace a nearly 40-year-old standard based on DES technology. AES DUKPT is a major improvement over the previously used algorithm because, among other benefits, it provides a much larger set of unique secret keys. The new algorithm can generate 2.5 billion unique keys versus about 1 million for the prior version. The keys generated by the DUKPT algorithm can be used for a variety of functions, such as encryption of card PINs, card and financial data, or other keys, the derivation of other keys, for message authentication, etc.

Juniper VTP is the first VTP release that is PCI P2PE (Domains 1, 2, 3, 5, 6) compliant and ANSI X9 24-1 Section 7 compliant.

## AES DUKPT Features and Benefits <a href="#vcl_aes_dukpt_mode_overview_features" id="vcl_aes_dukpt_mode_overview_features"></a>

- Key Injection is a separate process not involving VCL. The VRK system will inject the AES DUKPT Initial key.
- A new `vcl_settings_aesdukpt` file will be used to trigger VCL to go into AES DUKPT mode.
- The `vcl_settings_aesdukpt` file does not contain wrapped keys, key components, or anything to do with keys.
- Track data that meets ISO-7813 specifications will be encrypted via AES as a cryptogram and put into eParms.
- All administrative commands such as Registart, Advance DDK, etc, all are not used in AES DUKPT mode and are not required. Administrative Commands are not needed but for backward compatibility, if a payment app calls VCL's API for an admin function VCL will generate a pseudo command response that can be used to submit to VSD. VSD will support accepting the transaction but does not process it as an admin command. VSD will return a success response as if it did operate on it. This is needed for SCA, for example, that will not allow a device to be activated unless VCL provides it with a Registart response. So this allows payment apps to continue to work with no changes if there were some business logic for enabling VTP.
- All command override transactions that were generated after bin table updates or VCL settings update changes are no longer generated. The current Bin Table ID and/or VCL Settings token is included in each eParms transaction.
- There are three (3) AES DUKPT operating modes:
  - Backward Compatibility Mode.
  - Modified Mode for P2PE.
  - Future Use: Payment App compatibility mode.
- Eparms is *REQUIRED* to operate in AES DUKPT mode. The track data is encrypted via AES using AES_DUKPT keys and put in eParms as a Cryptogram. The visible track data provided to the POS is masked via random numbers using the same FPE logic as before (in DDK Mode). In AES DUKPT the digits that were encrypted under DDK Mode are now masked with random digits.
- The AES encryption scheme uses AES DUKPT keys, which are 128 bits (16 bytes) in length.
- The AES encryption scheme uses zero padding when the block size is not a multiple of 128 bits (16 bytes).
- The AES encryption scheme uses Random IV.

## AES DUKPT Modes <a href="#vcl_aes_dukpt_mode_overview_modes" id="vcl_aes_dukpt_mode_overview_modes"></a>

- Backward Compatibility Mode. This will be the default mode. VCL will get encrypt requests like it does today from MSR library, Contactless, EMV, etc. VCL will mask the track data with random digits and generate eParms with a cryptogram. After the payment app gets the track data it will call to request the eParms data. This is how eParms works today and in this mode, there are no changes required by Payment Apps.
- The Modified Mode for P2PE (mode name may be changed to something better) is a way for a customer to get into P2PE mode with no changes to the payment app. In this mode VCL will behave exactly as it does above with one distinction: If VCL gets data that it cannot mask/encrypt (because of malformed data, invalid ISO format, etc.), VCL will not return the data in the clear. P2PE mandates that a payment app does not allow clear payment data to leave a device, so in the mode, we can provide a P2PE mode if the payment app does not make any changes.
- Payment Application Mode (available in future release?). In this mode, VCL does not encrypt or mask data before the payment app gets the data. The payment app gets the clear track data, then calls a new VCL API to encrypt the data; VCL responds with masked track data and the eParms all in one call. This gives more flexibility to the Payment Application and also ensures that the track data matches the correct eParms.

## Track Filtering and Masking <a href="#vcl_aes_dukpt_mode_overview_filtering" id="vcl_aes_dukpt_mode_overview_filtering"></a>

In AES DUKPT the visible track data provided to the Payment Application is no longer FPE encrypted. The track data is encrypted via AES using AES DUKPT keys and then inserted into the eParms Cryptogram. The visible track data provided to the Payment Application is masked using the same filtering rules as before. In order for the track data to be masked the track data must meet ISO-7813 specifications.

ISO-7813 specifications include:

- Maximum track lengths.
- Start and End sentinels must be present.
- LRC.
- Legal characters in each track, respectively.
- Field separators.

# Encryption Rules and Expiry Date modifications <a href="#vcl_expiry_date" id="vcl_expiry_date"></a>

| VCL Receives | VCL Processing | Year tweak | VSD Processing |
|----|----|----|----|
| <p>YY \< 11</p> | <p>Encrypt</p> | <p>No</p> | <p>Decrypt</p> |
| <p>YY between 11 and 53</p> | <p>Encrypt</p> | <p>Yes, add 44 to the year</p> | <p>Decrypt, subtract 44 from year</p> |
| <p>YY between 54 and 98</p> | <p>Don\'t encrypt</p> | <p>Yes, change year to 98</p> | <p>Don\'t decrypt. The card will be declined. Cards with expiry years of 54 through 98 are considered high expiry cards and are not encrypted and handled differently. For these cards to pass through VSP the customer must add the BINs of those cards to the bin exclusion or bin inclusion table.</p> |
| <p>YY = 99</p> | <p>Encrypt</p> | <p>No</p> | <p>Decrypt</p> |

: Expiry Date Rules

- An expired card is considered anything under Year 11. In this scenario, VCL will not tweak the date but will still encrypt.
- Cards with expiry years of 11 through 53 will all be encrypted with the year tweak of YY + 44.
- Cards with an expiry year of 99 are encrypted and the year is not touched.

Separately the Luhn (mod 10) is checked but this doesn't affect the encryption or expiry date handling.

- If the clear PAN passed mod 10, then the encrypted PAN will also pass mod 10
- If the clear PAN does not pass mod 10, then the encrypted PAN will also not pass mod 10.

{% hint style="info" %}
For the cards that don't pass mod 10 the term used for the encryption/decryption is "cycle walking". An algorithm is used on the encryption/decryption to get to the right values by cycle walking.
{% endhint %}

### Attention

When eParms is enabled (where VCL generates a data blob that accompanies the transaction) the expiry dates are not changed.

# VSP Status Screen <a href="#vsp_status" id="vsp_status"></a>

The VSP Status screen is used to display current VCL status for [DDK Mode](#vcl_ddk_mode) and [AES DUKPT Mode](#vcl_aes_dukpt_mode).

Some values are only used while in DDK Mode and some values are only used while in AES DUKPT Mode.

The information and screen (examples) below show the values that are expected as AES DUKPT encryption is enabled.

## VSP not enabled - VCL Initial Status <a href="#vsp_status_not_enabled" id="vsp_status_not_enabled"></a>

This is an example of how the VSP Status screen will be displayed when VTP is not enabled and the AES DUKPT keys have not been injected yet.

- Validate that the VCL is version 9.0.030S (or higher) and that VCL is in the initial state.
- Navigate to the VSP Status screen by selecting Security -\> VSP Status in Sysmode.

The VSP Status screen will display:

| VSP Status |  |
|----|----|
| <p>VCL</p> | <p>9.0.030S</p> |
| <p>State</p> | <p>00\[Initial\]</p> |
| <p>Status</p> | <p>00 00 00 00 - 00 00 04 00</p> |
| <p>Encryption</p> | <p>Disabled</p> |
| <p>MDK</p> |  |
| <p>Initial Key ID</p> |  |
| <p><a href="class_config.md">Config</a> ID</p> |  |
| <p>Track (1,2,3)</p> | <p>0-0-0</p> |
| <p>Swipe count</p> | <p>0</p> |

: Initial VSP Status screen

Details of VSP Status items:

|  |  |
|----|----|
| <p>VCL</p> | <p>This is the VCL Version. Example: 9.0.030S</p> |
| <p>State</p> | <p>In AES DUKPT mode there are 2 possible states: 00 \[Initial\] or 05 \[Secure SRED Mode\]</p> |
| <p>Status</p> | <p>See the [Anatomy of VCL Status](#vsp_status_anatomy) for details.</p> |
| <p>Encryption</p> | <p>This line will display \"Disabled\" or \"Enabled\".</p> |
| <p>MDK</p> | <p>The MDK Label, Not used in AES DUKPT mode</p> |
| <p>Initial Key ID</p> | <p>The Initial Key ID that was injected by the VRK payload</p> |
| <p><a href="class_config.md">Config</a> ID</p> | <p>The config ID from the `vcl_settings_aesdukpt` file</p> |
| <p>Track (1,2,3)</p> | <p>Not used in AES DUKPT mode. This line displays the track error during a card swipe (a key component card when doing the manual key injection process, aka the \"double swipe\"). When a card is swiped a value of 0 is displayed for success and a value of 1 for a track read error. Since key component cards have data encoded on track 3, the swipe result would be 1-1-0. For a normal payment card that is encoded with track 1 and track 2 (and no track 3), the swipe result would be 0-0-1. Because Key Component Cards are not used for AES DUKPT there is no need to swipe key component cards on this screen. Consequently, this line will always display 0-0-0.</p> |
| <p>Swipe Count</p> | <p>The number of times a card is swiped while on this screen. In AES DUKPT cards are not required to be swiped so this feature is not used in AES DUKPT mode.</p> |

: Details of VSP Status items

## VSP Status screen after a VRK AES DUKPT key load. <a href="#vsp_status_key_loaded" id="vsp_status_key_loaded"></a>

After a VRK payload to install AES DUKPT keys have been processed, the VSP Status screen will include the Initial Key ID. This is the only thing updated on this screen after the AES DUKPT keys have been injected by VRK.

| VSP Status |  |
|----|----|
| <p>VCL</p> | <p>9.0.030S</p> |
| <p>State</p> | <p>00\[Initial\]</p> |
| <p>Status</p> | <p>00 00 00 00 - 00 00 04 00</p> |
| <p>Encryption</p> | <p>Disabled</p> |
| <p>MDK</p> |  |
| <p>Initial Key ID</p> | <p>1234567890123456</p> |
| <p><a href="class_config.md">Config</a> ID</p> |  |
| <p>Track (1,2,3)</p> | <p>0-0-0</p> |
| <p>Swipe count</p> | <p>0</p> |

: The VSP Status screen after keys loaded

## VSP Status screen after settings file was consumed by VCL <a href="#vsp_status_settings_consumed" id="vsp_status_settings_consumed"></a>

After a `vcl_settings_aesdukpt` is consumed by VCL in the `/tmp/share` folder, AES DUKPT encryption will be enabled. There are no other administrative steps or requirements to enable encryption. Encryption is automatically enabled and every transaction from this point forward will be encrypted.

The VSP Status screen will display:

| VSP Status |  |
|----|----|
| <p>VCL</p> | <p>9.0.030S</p> |
| <p>State</p> | <p>05 \[Secure Mode SRED\]</p> |
| <p>Status</p> | <p>00 05 00 00 - 00 01 01 02</p> |
| <p>Encryption</p> | <p>Enabled</p> |
| <p>MDK</p> | <p>\*AES DUKPT MODE</p> |
| <p>Initial Key ID</p> | <p>1234567890123456</p> |
| <p><a href="class_config.md">Config</a> ID</p> | <p>00000000123</p> |
| <p>Track (1,2,3)</p> | <p>0-0-0</p> |
| <p>Swipe count</p> | <p>0</p> |

: The VSP Status screen after settings consumed

### Warning

Some systems are coded to determine if an MDK is loaded on the device and these systems have been coded to initiate a VSP automatic download if there is no MDK Label of the device. After VCL enables encryption under AES DUKPT, VCL will insert \"\*AES DUKPT MODE\" into the MDK label to allow existing systems to operate under AES DUKPT mode with no operational or programming changes.

## VCL summary of each state <a href="#vsp_status_summary" id="vsp_status_summary"></a>

### New VSP install <a href="#vsp_status_summary_new_install" id="vsp_status_summary_new_install"></a>

This summary shows transition of VSP statuses for new VSP install in DDK Mode.

|  |  |  |  |  |  |  |  |
|----|----|----|----|----|----|----|----|
| <p>Step 1</p> |  | <p>Step 2</p> |  | <p>Step 3</p> |  |  |  |
| <p>Initial settings</p> | <p>After VRK AES DUKPT payload installed</p> | <p>After `vcl_settings_aesdukpt` consumed</p> |  |  |  |  |  |
| <p>VSP Status</p> | <p>VSP Status</p> | <p>VSP Status</p> |  |  |  |  |  |
| <p>VCL</p> | <p>9.0.030S</p> | <p>VCL</p> | <p>9.0.030S</p> | <p>VCL</p> | <p>9.0.030S</p> |  |  |
| <p>State</p> | <p>00\[Initial\]</p> | <p>State</p> | <p>00\[Initial\]</p> | <p>State</p> | <p>05 \[Secure Mode SRED\]</p> |  |  |
| <p>Status</p> | <p>00 00 00 00 - 00 00 04 00</p> | <p>Status</p> | <p>00 00 00 00 - 00 00 04 00</p> | <p>Status</p> | <p>00 05 00 00 - 00 01 01 02</p> |  |  |
| <p>Encryption</p> | <p>Disabled</p> | <p>Encryption</p> | <p>Disabled</p> | <p>Encryption</p> | <p>Enabled</p> |  |  |
| <p>MDK</p> |  | <p>MDK</p> |  | <p>MDK</p> | <p>\*AES DUKPT MODE</p> |  |  |
| <p>Initial Key ID</p> |  | <p>Initial Key ID</p> | <p>1234567890123456</p> | <p>Initial Key ID</p> | <p>1234567890123456</p> |  |  |
| <p><a href="class_config.md">Config</a> ID</p> |  | <p><a href="class_config.md">Config</a> ID</p> |  | <p><a href="class_config.md">Config</a> ID</p> | <p>00000000123</p> |  |  |
| <p>Track (1,2,3)</p> | <p>0-0-0</p> | <p>Track (1,2,3)</p> | <p>0-0-0</p> | <p>Track (1,2,3)</p> | <p>0-0-0</p> |  |  |
| <p>Swipe count</p> | <p>0</p> | <p>Swipe count</p> | <p>0</p> | <p>Swipe count</p> | <p>0</p> |  |  |

: New VSP install

### DDK Mode was enabled <a href="#vsp_status_summary_ddk_mode_enabled" id="vsp_status_summary_ddk_mode_enabled"></a>

This summary shows transition of VSP statuses when switching from DDK Mode to AES DUKPT mode.

|  |  |  |  |  |  |  |  |
|----|----|----|----|----|----|----|----|
| <p>Step 1</p> |  | <p>Step 2</p> |  | <p>Step 3</p> |  |  |  |
| <p>DDK Mode / VSP is already enabled</p> | <p>After VRK AES DUKPT payload installed</p> | <p>After `vcl_settings_aesdukpt` consumed</p> |  |  |  |  |  |
| <p>VSP Status</p> | <p>VSP Status</p> | <p>VSP Status</p> |  |  |  |  |  |
| <p>VCL</p> | <p>9.0.030S</p> | <p>VCL</p> | <p>9.0.030S</p> | <p>VCL</p> | <p>9.0.030S</p> |  |  |
| <p>State</p> | <p>05 \[Secure Mode SRED\]</p> | <p>State</p> | <p>05 \[Secure Mode SRED\]</p> | <p>State</p> | <p>05 \[Secure Mode SRED\]</p> |  |  |
| <p>Status</p> | <p>00 05 00 00 - 00 00 04 02</p> | <p>Status</p> | <p>00 05 00 00 - 00 00 04 02</p> | <p>Status</p> | <p>00 05 00 00 - 00 01 01 02</p> |  |  |
| <p>Encryption</p> | <p>Enabled</p> | <p>Encryption</p> | <p>Enabled</p> | <p>Encryption</p> | <p>Enabled</p> |  |  |
| <p>MDK</p> | <p>TEST MDK</p> | <p>MDK</p> | <p>TEST MDK</p> | <p>MDK</p> | <p>\*AES DUKPT MODE</p> |  |  |
| <p>Initial Key ID</p> |  | <p>Initial Key ID</p> | <p>1234567890123456</p> | <p>Initial Key ID</p> | <p>1234567890123456</p> |  |  |
| <p><a href="class_config.md">Config</a> ID</p> | <p>00000000999</p> | <p><a href="class_config.md">Config</a> ID</p> | <p>00000000999</p> | <p><a href="class_config.md">Config</a> ID</p> | <p>00000000123</p> |  |  |
| <p>Track (1,2,3)</p> | <p>0-0-0</p> | <p>Track (1,2,3)</p> | <p>0-0-0</p> | <p>Track (1,2,3)</p> | <p>0-0-0</p> |  |  |
| <p>Swipe count</p> | <p>0</p> | <p>Swipe count</p> | <p>0</p> | <p>Swipe count</p> | <p>0</p> |  |  |

: DDK Mode was enabled

## Anatomy of VCL Status <a href="#vsp_status_anatomy" id="vsp_status_anatomy"></a>

The VSP Status Screen displays various settings of VCL. One item of importance is the VCL Status.

| VSP Status |  |
|----|----|
| <p>VCL</p> | <p>9.0.030S</p> |
| <p>State</p> | <p>05 \[Secure Mode SRED\]</p> |
| <p>Status</p> | <p>00 05 00 00 - 00 01 01 02</p> |
| <p>Encryption</p> | <p>Enabled</p> |
| <p>MDK</p> | <p>\*AES DUKPT MODE</p> |
| <p>Initial Key ID</p> | <p>1234567890123456</p> |
| <p><a href="class_config.md">Config</a> ID</p> | <p>00000000123</p> |
| <p>Track (1,2,3)</p> | <p>0-0-0</p> |
| <p>Swipe count</p> | <p>0</p> |

: The VSP Status screen after settings consumed

In the example above, the VCL Status is displayed as `00 05 00 00 - 00 01 01 02`.

The Status is eight (8) sections:

| 1 | 2 | 3 | 4 | \- | 5 | 6 | 7 | 8 |
|----|----|----|----|----|----|----|----|----|
| <p>00</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p>-</p> | <p>00</p> | <p>01</p> | <p>01</p> | <p>02</p> |

: VCL Status

[TABLE]

: VCL status sections description

| Status | Meaning |
|----|----|
| <p>00 00 00 00 - 00 00 04 00</p> | <p>Encryption not enabled. VAES4 is set to be default algorithm (if DDK mode is enabled).</p> |
| <p>00 05 00 00 - 00 01 01 02</p> | <p>Secure Mode SRED, AES DUKPT Backward Compatibility Mode set, AES encryption algorithm, encryption enabled.</p> |
| <p>00 05 00 00 - 00 02 01 02</p> | <p>Secure Mode SRED, AES DUKPT Modified Compatibility Mode set, AES encryption algorithm, encryption enabled.</p> |
| <p>00 05 06 00 - 00 02 01 02</p> | <p>Secure Mode SRED, The last encryption request resulted in Track 1 and Track 2 encryption success, AES DUKPT Modified Compatibility Mode set, AES encryption algorithm, encryption enabled.</p> |

: Examples

### Secure Mode vs Secure Mode SRED <a href="#vsp_status_anatomy_sec_vs_secsred" id="vsp_status_anatomy_sec_vs_secsred"></a>

The 2nd section of the status result is used to display the VCL State. In DDK mode the valid values were 00, 04, 05. 04 was defined as \"Normal Operations\" and 05 was defined as \"SRED Mode\". SRED Mode is used when a customer does not want encryption to be easily disabled via a Registop command card or Registop API.

The PCI council decided that VAES3 is no longer SRED Compliant. Therefore devices that are using VAES3 can no longer be considered SRED. But Verifone\'s customers don\'t want the devices to have encryption disabled so new VCL States were introduced: Secure Mode and Secure Mode SRED. PCI PTS 5.0 also added a new requirement that any FPE algorithm used that encrypts short data input (2 characters or less) must Double Encrypt the short data input in order to be SRED compliant.

Therefore, a device will display Secure Mode SRED if the device has the following settings:

- VAES4 and Double Encryption is enabled.
- AES DUKPT is being used.

The meaning of the states is defined as:

- Normal Operations: a Registart command card or Registart API was used to enable encryption. In this state, Encryption may be disabled via a Registop process.
- Secure Mode: a Registart SRED command card or Registart SRED API was used to enable encryption but VCL set the state to Secure Mode because VAES3 is being used or Double Encryption was not enabled under VAES4. In this state, encryption cannot be disabled via a Registop process.
- Secure Mode SRED: a Registart SRED command card or Registart SRED API was used to enable encryption and the encryption used is AES DUKPT or VAES4 with Double Encryption Enabled.

| Encryption | Double Encryption Enabled | Process | VCL State Result |
|----|----|----|----|
| <p>AES DUKPT</p> | <p>Not Applicable</p> | <p>Not Applicable</p> | <p>\[05\] SECURE MODE SRED</p> |
| <p>VAES4</p> | <p>YES</p> | <p>Registart SRED</p> | <p>\[05\] SECURE MODE SRED</p> |
| <p>VAES4</p> | <p>YES</p> | <p>Registart</p> | <p>\[04\] Normal Operations</p> |
| <p>VAES4</p> | <p>NO</p> | <p>Registart SRED</p> | <p>\[06\] SECURE MODE</p> |
| <p>VAES4</p> | <p>NO</p> | <p>Registart</p> | <p>\[04\] Normal Operations</p> |
| <p>VAES3</p> | <p>Not Applicable</p> | <p>Registart SRED</p> | <p>\[06\] SECURE MODE</p> |
| <p>VAES3</p> | <p>Not Applicable</p> | <p>Registart</p> | <p>\[04\] Normal Operations</p> |

{% hint style="info" %}
When AES DUKPT mode is enabled there are no Registart or admin commands needed to enable encryption. Encryption is automatically enabled and is considered SRED compliant. Double Encryption for short data input does not apply to VCL in AES DUKPT mode.
{% endhint %}

## Section #5 in VSP Status <a href="#vsp_status_section_5" id="vsp_status_section_5"></a>

Section #5 is now used to display VCL configurations data and which ones are enabled.

| Description | Bitmap | hex | dec |
|----|----|----|----|
| <p>eParms</p> | <p>(1 \<\< 0)</p> | <p>0x01</p> | <p>1</p> |
| <p>Double Encryption (2-digits or less)</p> | <p>(1 \<\< 1)</p> | <p>0x02</p> | <p>2</p> |
| <p>Double Encryption (4-digits or less). New PCI SRED requirement</p> | <p>(1 \<\< 2)</p> | <p>0x04</p> | <p>4</p> |
| <p>Message Integrity Value (MIV)</p> | <p>(1 \<\< 4)</p> | <p>0x10</p> | <p>16</p> |
| <p>Command Card Expiry Year Bump (needed when eParms is enabled)</p> | <p>(1 \<\< 5)</p> | <p>0x20</p> | <p>32</p> |
| <p>CSC / CVV encryption with Manual PAN Entry</p> | <p>(1 \<\< 6)</p> | <p>0x40</p> | <p>64</p> |

: Section #5 flags

### Warning

When eParms is enabled, VCL will not modify the expiry year. Administrative commands (aka Command Card Transactions) such as Registart, Registart SRED, Advance DDK, etc. have predefined expiry dates, and some of these dates are now considered expired when eParms is enabled. Therefore, some payment applications won\'t let these transactions go through for authorization. The Command Card Expiry Bump is a switch that will bump the expiry year into a range that is no longer considered expired.


{% hint style="info" %}
CSC / CVV Encryption. VCL has the option to encrypt CSC / CVV codes when doing Manual PAN encryption. To utilize the CSC encryption feature the new Manual PAN Encryption with CSC API must be used AND the VCL settings to enable this feature must be enabled via Merchant Boarding (VMB). Also, the integrators to VSD need to change from `decrypt04()` to `decrypt06()` for CSC decryption to be supported. There are no VSD instances today (as of July 31, 2020) that are using `decrypt06()`, and therefore, CSC Decryption is NOT SUPPORTED yet.
{% endhint %}

VCL metrics for Section #5:

| Section #5 value | eParams (0x01) | DE 2-digits (0x02) | DE 4-digits (0x04) | MIV (0x10) | CC Bump (0x20) | CSC Encryption (0x40) |
|----|----|----|----|----|----|----|
| <p>00</p> |  |  |  |  |  |  |
| <p>01</p> | <p>X</p> |  |  |  |  |  |
| <p>02</p> |  | <p>X</p> |  |  |  |  |
| <p>03</p> | <p>X</p> | <p>X</p> |  |  |  |  |
| <p>04</p> |  |  | <p>X</p> |  |  |  |
| <p>05</p> | <p>X</p> |  | <p>X</p> |  |  |  |
| <p>10</p> |  |  |  | <p>X</p> |  |  |
| <p>11</p> | <p>X</p> |  |  | <p>X</p> |  |  |
| <p>12</p> |  | <p>X</p> |  | <p>X</p> |  |  |
| <p>13</p> | <p>X</p> | <p>X</p> |  | <p>X</p> |  |  |
| <p>14</p> |  |  | <p>X</p> | <p>X</p> |  |  |
| <p>15</p> | <p>X</p> |  | <p>X</p> | <p>X</p> |  |  |
| <p>Section #5 value</p> | <p>eParams (0x01)</p> | <p>DE 2-digits (0x02)</p> | <p>DE 4-digits (0x04)</p> | <p>MIV (0x10)</p> | <p>CC Bump (0x20)</p> | <p>CSC Encryption (0x40)</p> |
| <p>20</p> |  |  |  |  | <p>X</p> |  |
| <p>21</p> | <p>X</p> |  |  |  | <p>X</p> |  |
| <p>22</p> |  | <p>X</p> |  |  | <p>X</p> |  |
| <p>23</p> | <p>X</p> | <p>X</p> |  |  | <p>X</p> |  |
| <p>24</p> |  |  | <p>X</p> |  | <p>X</p> |  |
| <p>25</p> | <p>X</p> |  | <p>X</p> |  | <p>X</p> |  |
| <p>30</p> |  |  |  | <p>X</p> | <p>X</p> |  |
| <p>31</p> | <p>X</p> |  |  | <p>X</p> | <p>X</p> |  |
| <p>32</p> |  | <p>X</p> |  | <p>X</p> | <p>X</p> |  |
| <p>33</p> | <p>X</p> | <p>X</p> |  | <p>X</p> | <p>X</p> |  |
| <p>34</p> |  |  | <p>X</p> | <p>X</p> | <p>X</p> |  |
| <p>35</p> | <p>X</p> |  | <p>X</p> | <p>X</p> | <p>X</p> |  |
| <p>Section #5 value</p> | <p>eParams (0x01)</p> | <p>DE 2-digits (0x02)</p> | <p>DE 4-digits (0x04)</p> | <p>MIV (0x10)</p> | <p>CC Bump (0x20)</p> | <p>CSC Encryption (0x40)</p> |
| <p>40</p> |  |  |  |  |  | <p>X</p> |
| <p>41</p> | <p>X</p> |  |  |  |  | <p>X</p> |
| <p>42</p> |  | <p>X</p> |  |  |  | <p>X</p> |
| <p>43</p> | <p>X</p> | <p>X</p> |  |  |  | <p>X</p> |
| <p>44</p> |  |  | <p>X</p> |  |  | <p>X</p> |
| <p>45</p> | <p>X</p> |  | <p>X</p> |  |  | <p>X</p> |
| <p>50</p> |  |  |  | <p>X</p> |  | <p>X</p> |
| <p>51</p> | <p>X</p> |  |  | <p>X</p> |  | <p>X</p> |
| <p>52</p> |  | <p>X</p> |  | <p>X</p> |  | <p>X</p> |
| <p>53</p> | <p>X</p> | <p>X</p> |  | <p>X</p> |  | <p>X</p> |
| <p>54</p> |  |  | <p>X</p> | <p>X</p> |  | <p>X</p> |
| <p>55</p> | <p>X</p> |  | <p>X</p> | <p>X</p> |  | <p>X</p> |
| <p>Section #5 value</p> | <p>eParams (0x01)</p> | <p>DE 2-digits (0x02)</p> | <p>DE 4-digits (0x04)</p> | <p>MIV (0x10)</p> | <p>CC Bump (0x20)</p> | <p>CSC Encryption (0x40)</p> |
| <p>60</p> |  |  |  |  | <p>X</p> | <p>X</p> |
| <p>61</p> | <p>X</p> |  |  |  | <p>X</p> | <p>X</p> |
| <p>62</p> |  | <p>X</p> |  |  | <p>X</p> | <p>X</p> |
| <p>63</p> | <p>X</p> | <p>X</p> |  |  | <p>X</p> | <p>X</p> |
| <p>64</p> |  |  | <p>X</p> |  | <p>X</p> | <p>X</p> |
| <p>65</p> | <p>X</p> |  | <p>X</p> |  | <p>X</p> | <p>X</p> |
| <p>70</p> |  |  |  | <p>X</p> | <p>X</p> | <p>X</p> |
| <p>71</p> | <p>X</p> |  |  | <p>X</p> | <p>X</p> | <p>X</p> |
| <p>72</p> |  | <p>X</p> |  | <p>X</p> | <p>X</p> | <p>X</p> |
| <p>73</p> | <p>X</p> | <p>X</p> |  | <p>X</p> | <p>X</p> | <p>X</p> |
| <p>74</p> |  |  | <p>X</p> | <p>X</p> | <p>X</p> | <p>X</p> |
| <p>75</p> | <p>X</p> |  | <p>X</p> | <p>X</p> | <p>X</p> | <p>X</p> |

: VCL metrics for Section #5

{% hint style="info" %}
DE 2 and DE 4 cannot both be enabled at same time.
{% endhint %}

# Troubleshooting <a href="#troubleshooting" id="troubleshooting"></a>

[TABLE]

: VCL Troubleshooting

---
title: vss_documentation.dox

---

# vss_documentation.dox






## Source code

```cpp

ret = loadData(TDEA2_SCRIPT_ID, kbpk_key, KBPK_FIRST_SLOT, kbpk_key.size() / DATABLOCK_SIZE);
CHECK_EQUAL(0, ret);
\endcode

#### KBH loading
KBH is loaded into dedicated VSS slots using the data loading function:

\code
static std::string key1_x9swkb = "B0096P0TE00E0000"
                                  "94B420079CC80BA3461F86FE26EFC4A38C6B0A146BF1B0BE0D3277F17A3AD514"
                                  "6EED7B727B8A248E";

std::string key1_kbh = key1_x9swkb.substr(0, 16);
std::vector<unsigned char> key1_kbh_bytes = hexToBytes(key1_kbh);

/* Loading KBH */
ret = loadData(TDEA2_SCRIPT_ID, key1_kbh_bytes, KBH1_FIRST_SLOT, key1_kbh_bytes.size() / DATABLOCK_SIZE);
CHECK_EQUAL(0, ret);
\endcode

#### RCVD_MAC loading
\code
std::string key1_mac = key1_x9swkb.substr(80, 16);
std::vector<unsigned char> key1_mac_bytes = hexToBytes(key1_mac);

/* Loading RCVD_MAC */
ret = loadData(TDEA2_SCRIPT_ID, key1_mac_bytes, RCVD_MAC_FIRST_SLOT, key1_mac_bytes.size() / DATABLOCK_SIZE);
CHECK_EQUAL(0, ret);
\endcode

#### KBEK and KBAK key derivation
KBEK and KBAK are derived in the VSS via macro. The API call for the derivation doesn't need any input or output data parameters:

\code
/* Derive KBEK and KBAK from KBPK */
ret = iPS_ExecuteScript(TDEA2_SCRIPT_ID, TDEA2_DERIVE_KBAK_KBEK, 0, NULL, 0, NULL, NULL);
CHECK_EQUAL(0, ret);
\endcode

#### Confidential data decryption
This process performs the iterative decryption of the confidential data of the secure key block in CBC mode using the MAC as IV. Before decryption IV is set to MAC value loaded in previous step.

\code
/* Set MAC as IV for decryption */
ret = iPS_ExecuteScript(TDEA2_SCRIPT_ID, TDEA_CBC_SET_MAC_AS_IV, 0, NULL, 0, NULL, NULL);
CHECK_EQUAL(0, ret);

/* Decrypt data iteratively */
std::vector<uint8_t> key1_dec_bytes;
ret = decryptData(TDEA2_SCRIPT_ID, TDEA2_CMAC_ITER, TDEA_BLOCK_SIZE, key1_key_bytes, key1_dec_bytes);
CHECK_EQUAL(0, ret);
\endcode

#### MAC verification
MAC verification is done in two parts: first is iterative MAC calculation on n - 1 data blocks, then the last block is passed into another macro for MAC finalizing and comparison with RCVD_MAC.

\code
/* Verify MAC iteratively */
std::vector<uint8_t> mac_input_bytes;
mac_input_bytes.insert( mac_input_bytes.end(), key1_kbh_bytes.begin(), key1_kbh_bytes.end());
mac_input_bytes.insert( mac_input_bytes.end(), key1_dec_bytes.begin(), key1_dec_bytes.end());

/* For TDEA CMAC IV is used as a temporary buffer */
ret = iPS_ExecuteScript(TDEA2_SCRIPT_ID, IV_CLEAR, 0, NULL, 0, NULL, NULL);
CHECK_EQUAL(0, ret);

ret = verifyMAC(TDEA2_SCRIPT_ID, TDEA2_CMAC_ITER, TDEA2_CMAC_CMP, TDEA_BLOCK_SIZE, mac_input_bytes);
CHECK_EQUAL(0, ret);
\endcode

#### 2TDEA Working Key (Session Key) loading into VSS slots

\code
/* Load WK from decrypted confidential part to VSS */
ret = iPS_ExecuteScript(TDEA2_SCRIPT_ID, LOAD_SK_KEY_KB, key1_dec_bytes.size(), key1_dec_bytes.data(), 0, NULL, NULL);
CHECK_EQUAL(0, ret);
\endcode

#### Working Key decryption with the plaintext Master Key

\code
/* Get SK by decrypting WK with MK */
std::vector<uint8_t> session_key(2 * TDEA_BLOCK_SIZE);
unsigned short out_size = 0;

ret = iPS_ExecuteScript(TDEA2_SCRIPT_ID, TDEA2_ECB_WK_DECRYPT, master_key.size(), master_key.data(), session_key.size(), &out_size, session_key.data());
CHECK_EQUAL(0, ret);
\endcode

### AES Key Derivation Binding (ID 'D')
<a name="aes_deriv"></a>
VSS Script sources: [AES-128](https://bitbucket.verifone.com:8443/projects/ADVTOOLS/repos/poc-vss-x9swkb/browse/scripts/vss_x9swkb_aes128.vss) [AES-256](https://bitbucket.verifone.com:8443/projects/ADVTOOLS/repos/poc-vss-x9swkb/browse/scripts/vss_x9swkb_aes256.vss)

#### KBPK loading
KBPK is loaded in plaintext using the data loading function:

\code
std::vector<uint8_t> kbpk_key = { 0xDD, 0x75, 0x15, 0xF2, 0xBF, 0xC1, 0x7F, 0x85,
                          0xCE, 0x48, 0xF3, 0xCA, 0x25, 0xCB, 0x21, 0xF6 };

/* Loading KBPK */
ret = loadData(AES128_SCRIPT_ID, kbpk_key, KBPK_FIRST_SLOT, kbpk_key.size() / DATABLOCK_SIZE);
CHECK_EQUAL(0, ret);
\endcode

#### KBH loading
KBH is loaded into dedicated VSS slots using the data loading function:

\code
static std::string key2_x9swkb = "D0160K0AE00N0200LB0BAES_KEYPB050"
                                  "3F89491AE7D048A64361CB2A500FA35CBA0DD6D1368A0CA4F8D9C8E136A69DFEA19EECFF9F83699257A21066EEA5502E"
                                  "F5BA53A8C756450F5CA47505C17D15D8";

std::string key2_kbh = key2_x9swkb.substr(0, 32);
std::vector<unsigned char> key2_kbh_bytes = hexToBytes(key2_kbh);

/* Loading KBH */
ret = loadData(AES128_SCRIPT_ID, key2_kbh_bytes, KBH2_FIRST_SLOT, key2_kbh_bytes.size() / DATABLOCK_SIZE);
CHECK_EQUAL(0, ret);
\endcode

#### RCVD_MAC loading

\code
std::string key2_mac = key2_x9swkb.substr(80, 16);
std::vector<unsigned char> key2_mac_bytes = hexToBytes(key2_mac);

/* Loading RCVD_MAC */
ret = loadData(TDEA2_SCRIPT_ID, key2_mac_bytes, RCVD_MAC_FIRST_SLOT, key2_mac_bytes.size() / DATABLOCK_SIZE);
CHECK_EQUAL(0, ret);
\endcode

#### KBEK and KBAK key derivation
KBEK and KBAK are derived in the VSS via macro. The API call for the derivation doesn't need any input or output data parameters:

\code
/* Derive KBEK and KBAK from KBPK */
ret = iPS_ExecuteScript(AES128_SCRIPT_ID, AES128_DERIVE_KBAK_KBEK, 0, NULL, 0, NULL, NULL);
CHECK_EQUAL(0, ret);
\endcode

#### Confidential data decryption
This process performs the iterative decryption of the confidential data of the secure key block in CBC mode using the MAC as IV. Before decryption IV is set to MAC value loaded in previous step.

\code
/* Set MAC as IV for decryption */
ret = iPS_ExecuteScript(AES128_SCRIPT_ID, AES_CBC_SET_MAC_AS_IV, 0, NULL, 0, NULL, NULL);
CHECK_EQUAL(0, ret);

/* Decrypt data iteratively */
std::vector<uint8_t> key2_dec_bytes;
ret = decryptData(AES128_SCRIPT_ID, AES128_CBC_DECRYPT_ITER, AES_BLOCK_SIZE, key2_key_bytes, key2_dec_bytes);
CHECK_EQUAL(0, ret);
\endcode

#### MAC verification
MAC verification is done in two parts: first is iterative MAC calculation on n - 1 data blocks, then the last block is passed into another macro for MAC finalizing and comparison with RCVD_MAC.

\code
/* Verify MAC iteratively */
std::vector<uint8_t> mac_input_bytes;
mac_input_bytes.insert( mac_input_bytes.end(), key2_kbh_bytes.begin(), key2_kbh_bytes.end());
mac_input_bytes.insert( mac_input_bytes.end(), key2_dec_bytes.begin(), key2_dec_bytes.end());

ret = verifyMAC(AES128_SCRIPT_ID, AES128_CMAC_ITER, AES128_CMAC_CMP, AES_BLOCK_SIZE, mac_input_bytes);
CHECK_EQUAL(0, ret);
\endcode

#### 2TDEA Working Key (Session Key) loading into VSS slots

\code
/* Load WK from decrypted confidential part to VSS */
ret = iPS_ExecuteScript(AES128_SCRIPT_ID, LOAD_SK_KEY_KB, key2_dec_bytes.size(), key2_dec_bytes.data(), 0, NULL, NULL);
CHECK_EQUAL(0, ret);
\endcode

#### Working Key decryption with the plaintext Master Key

\code
/* Get SK by decrypting WK with MK */
std::vector<uint8_t> session_key(2 * TDEA_BLOCK_SIZE);
unsigned short out_size = 0;

ret = iPS_ExecuteScript(AES128_SCRIPT_ID, TDEA2_ECB_WK_DECRYPT, master_key.size(), master_key.data(), session_key.size(), &out_size, session_key.data());
CHECK_EQUAL(0, ret);
\endcode

### TDEA DUKPT key loading
VSS Script source: [2TDEA DUKPT](https://bitbucket.verifone.com:8443/projects/ADVTOOLS/repos/poc-vss-x9swkb/browse/scripts/vss_x9swkb_dukpt_2tdea.vss)

#### Key unwrapping
In this example, AES-128 Key Derivation Binding is used, so the key is unwrapped in the way described in the [AES Key Derivation Binding](#aes_deriv) section. KSN must be parced from KBH.

\code
static std::string tdea2_dukpt_x9swkb = "D0192B1TX00N0500KS1800604B120F9292800000KP1001D77F007724KC0C0057C409TS1320241008034229ZPB0900000"
                                                                    "7FD21FD44DBD73E8D50C7E7B7BC6D943BCA428E15607D128491D633B9E6323CF"
                                                                    "FFA45C04269AC320969D21731B9978FD"

std::string tdea2_kbh = tdea2_x9swkb.substr(0, 96);
std::string ksn = tdea2_kbh.substr(20, 20);

std::vector<unsigned char> ksn_bytes = hexToBytes(ksn);
\endcode

#### KSN and key loading into VSS
To load KSN, it should be passed into VSS via the VSS API from dedicated KBH field. Key loading is performed by passing the decrypted confidential data to VSS macro.

\code
/* Load IK from decrypted confidential part to VSS */
ret = iPS_ExecuteScript(TDEA2_DUKPT_SCRIPT_ID, LOAD_IK_KEY_KB, tdea2_dec_bytes.size(), tdea2_dec_bytes.data(), 0, NULL, NULL);
CHECK_EQUAL(0, ret);

/* Load KSN */
ret = iPS_ExecuteScript(TDEA2_DUKPT_SCRIPT_ID, TDEA2_DUKPT_LOAD_KSN, ksn_bytes.size(), ksn_bytes.data(), 0, NULL, NULL);
CHECK_EQUAL(0, ret);
\endcode

#### Next Key generation
Next Key and KSN are generated by one call, KSN is returned by the API. It should be saved for next generation iteration.

\code
/* Generate next key */
unsigned char returned_ksn[KSN_LENGTH] = {0};
unsigned short outlen;
ret = iPS_ExecuteScript(TDEA2_DUKPT_SCRIPT_ID, TDEA2_DUKPT_GEN_KEYS, 0, NULL, KSN_LENGTH, &outlen, ksn);
CHECK_EQUAL(0, ret);
CHECK_EQUAL(KSN_LENGTH, outlen);
\endcode

#### MAC calculation
For MAC calculation, common functions can be used with corresponding scripts.

\code
std::string msg = "0123456789ABCDEFFEDCBA9876543210";
std::vector<unsigned char> msg_bytes = hexToBytes(msg);
std::vector<uint8_t> msg_input_bytes;
msg_input_bytes.insert( msg_input_bytes.end(), msg_bytes.begin(), msg_bytes.end());

ret = verifyMAC(TDEA2_DUKPT_SCRIPT_ID, TDEA2_DUKPT_MAC_TDEA_REQUEST, TDEA2_DUKPT_MAC_3TDEA_REQUEST, TDEA_BLOCK_SIZE, msg_input_bytes);
CHECK_EQUAL(0, ret);
\endcode

Data and PIN encryption
Data encryption should be performed iteratively, in the same manner as MAC calculation. See 2TDEA_DUKPT_ENCRYPT_DATA_REQ and 2TDEA_DUKPT_ENCRYPT_DATA_RESP macros. PIN encryption has a dedicated macro for that

\code
unsigned char buffer[KEY_SLOT_SIZE + KSN_LENGTH];
unsigned char epb[MAX_PIN_LENGTH], pin[MAX_PIN_LENGTH];
unsigned short outlen = 0;
/* Arguments for PIN entry on VATS device */
int iStatus = PIN_IDLE;
char enter_key[1] = {VATS_KEY_ENTER};
PINPARAMETER pinparam;
PINRESULT result;

/* Perform PIN entry on VATS device */
memset(&pinparam, 0, sizeof(pinparam));
/* Set the values of PINPARAMETER vector */
pinparam.ucMin = 4;
pinparam.ucMax = 8;
pinparam.ucEchoChar = '*';
pinparam.ucDefChar = 0;
pinparam.ucOption = 0;

ret = iPS_SelectPINAlgo(VSS_PIN);

if (!ret)
{
    iPS_CancelPIN();
    ret = iPS_SetPINParameter(&pinparam);

    VFLOG_INFO("%s: Request PIN entry\n", __func__);
    if (!ret)
    {
        ret = iPS_RequestPINEntry(0, NULL);
    }
}

if (!ret)
    {
    for(int i = 0; i < (int)strlen(test_pin); i++)
    {
        /* Adding artificial delay of 250ms to allow process key, and imitating real pin entry.*/
        usleep(250000);
        VATS_InjectKeys(&test_pin[i], 1);
        VFLOG_INFO("PIN Digit Entered: %c \n", test_pin[i]);
    }
    /* Delay before pin "enter" key. */
    usleep(250000);
    VATS_InjectKeys(enter_key, 1);

    while(iStatus != PIN_DONE) ret = iPS_GetPINResponse(&iStatus, &result);

}

CHECK_EQUAL(0, ret);

if (ret == 0) {
    VFLOG_INFO("%s: PIN Entered successfully!\n", __func__);

    memset(buffer, 0, sizeof(buffer));
    outlen = (strlen(pan) - 1) / 2 + (strlen(pan) - 1) % 2;

    SVC_DSP_2_HEX (pan, &buffer[DATA_BLOCK_SIZE - outlen], outlen);
    outlen = 0;

    /*
    ** PIN Encryption (ANS X9.8).
    ** When PIN entry is complete, put 8 bytes of account data in epb.
    */
    ret = iPS_ExecuteScript(TDEA2_DUKPT_SCRIPT_ID, 2TDEA_DUKPT_ENCRYPT_PIN, sizeof(pan), buffer,
                                MAX_PIN_LENGTH, &outlen, epb);
    CHECK_EQUAL(0, ret);

    /* if EPB returned correctly, check if it can be decrypted with dukInitKey & current KSN */
    if (ret == 0) {
        CHECK_EQUAL(MAX_PIN_LENGTH, outlen);
        VFLOG_INFO("%s: EPB verified okay!\n", __func__);
        print_hex("EPB", epb, outlen);

        memset(buffer, 0, sizeof(buffer));

        ret = duk_decrypt_pin(epb, ksn, pin);
        CHECK_EQUAL(0, ret);

        if (ret == 0) {
            VFLOG_INFO("%s: EPB decrypted successfully!\n", __func__);

            CHECK_EQUAL(0, memcmp(test_pin, pin, strlen(test_pin)));
            VFLOG_INFO("%s: Decrypted PIN verified successfully!\n", __func__);
        } else {
            VFLOG_INFO("%s: EPB decryption failed!\n", __func__);
        }
    } else {
        VFLOG_INFO("%s: EPB verification failed!\n", __func__);
    }
} else {
    VFLOG_INFO("%s: PIN entry failed!\n", __func__);
}
\endcode

### AES DUKPT key loading
VSS Script source: [AES-128 DUKPT](https://bitbucket.verifone.com:8443/projects/ADVTOOLS/repos/poc-vss-x9swkb/browse/scripts/vss_x9swkb_aes128_dukpt.vss)

#### Key unwrapping
In this example, AES-128 Key Derivation Binding is used, so the key is unwrapped in the way described in the [AES Key Derivation Binding](#aes_deriv) section

#### Key loading into VSS
VSS does not support AES DUKPT. Therefore, the key can be unwrapped but further operations are impossible. After unwrapping, key loading is performed by passing the decrypted confidential data to VSS macro. The VSS macro returns the key to user side so it can be passed into AES DUKPT engine.

\code
/* Load IK from decrypted confidential part to VSS */
unsigned char returned_initial_key[AES_BLOCK_SIZE] = {0};
unsigned short outlen;
ret = iPS_ExecuteScript(AES128_DUKPT_SCRIPT_ID, LOAD_IK_KEY_KB, aes128_dec_bytes.size(), aes128_dec_bytes.data(), AES_BLOCK_SIZE, &outlen, returned_initial_key);
CHECK_EQUAL(0, ret);

/* Load initial key into vfiSec AES DUKPT engine */
unsigned int flags = 0; // Define your flags here
err = vfiSec_load_aesdukpt_initial_key(returned_initial_key, AES_BLOCK_SIZE, iksn.data(), 1, "Test_AES_DUKPT", aes128_kbh.data(), aes128_kbh.size(), flags);
\endcode

### Common functions

This is a common function that allows loading data iteratively into VSS slots. Each VSS API call consists of 1 byte of slot index and 8 bytes of data. This can be used for plaintext KBPK, KBH and received MAC loading.

\code
int loadData(int scriptId, std::vector<uint8_t> & data, int firstSlot, int blockCount)
{
  std::vector<uint8_t>::iterator it = data.begin();
  int ret = 0;

  for (int i = 0; i < blockCount; i++)
  {
    std::vector<uint8_t> block(DATABLOCK_SIZE);
    block.assign(it, it + DATABLOCK_SIZE);
    block.insert(block.begin(), firstSlot + i);
    ret = iPS_ExecuteScript(scriptId, LOAD_DATA_ITERATION, block.size(), block.data(), 0, NULL, NULL);
    if (ret) break;
    it += DATABLOCK_SIZE;
  }

  return ret;
}
\endcode

This is a common function that performs data decryption iteratively. The data block size depends on the algorithm. Before data decryption, macro that sets MAC as IV should be called.

\code
int decryptData(int scriptId, int macroId, int blockSize, std::vector<uint8_t> & data, std::vector<uint8_t> & outData)
{
  std::vector<uint8_t>::iterator it = data.begin();
  int ret = 0;

  for (unsigned int i = 0; i < data.size() / blockSize; i++)
  {
    std::vector<uint8_t> enc_block(blockSize);
    std::vector<uint8_t> dec_block(blockSize);
    unsigned short out_size = 0;

    enc_block.assign(it, it + blockSize);
    ret = iPS_ExecuteScript(scriptId, macroId, blockSize, enc_block.data(), blockSize, &out_size, dec_block.data());
    if (ret != 0 || out_size != blockSize) break;
    outData.insert( outData.end(), dec_block.begin(), dec_block.end());
    it += blockSize;
  }

  return ret;
}
\endcode

This function is used for MAC calculation verification iteratively and verifies MAC on the last step. The data block size depends on the algorithm. Both calculation and verification macro IDs must be provided.

\code
int verifyMAC(int scriptId, int iterMacroId, int cmpMacroId, int blockSize, std::vector<uint8_t> & data)
{
  int ret = 0;
  std::vector<uint8_t>::iterator it = data.begin();
  std::vector<uint8_t> block(blockSize);

  for (unsigned int i = 0; i < (data.size() / blockSize) - 1; i++)
  {
    block.assign(it, it + blockSize);
    ret = iPS_ExecuteScript(scriptId, iterMacroId, blockSize, block.data(), 0, NULL, NULL);
    if (ret) break;
    it += blockSize;
  }

  if (ret != 0) ret = iPS_ExecuteScript(scriptId, cmpMacroId, blockSize, block.data(), 0, NULL, NULL);

  return ret;
}
\endcode

### Script with several keys
Since key and data storage is hardcoded, one script can contain several keys encrypted with the same KBPK, stored in the predefined slots, i.e:

| Key type | Slots   | Description                            |
|----------|---------|----------------------------------------|
| KBPK     | 0 - 3   | From 8 (TDEA) to 32 (AES256) bytes max |
| KEY1 KBH | 4 - 15  | 96 bytes max for KBHs with opt blocks  |
| KEY1     | 16 - 23 | From 8 (TDEA) to 64 (HMAC) bytes max   |
| KEY2 KBH | 24 - 35 | 96 bytes max for KBHs with opt blocks  |
| KEY2     | 36 - 43 | From 8 (TDEA) to 64 (HMAC) bytes max   |

\section sec_vss_macro_command_execution Macro Command Execution

\subsection subsec_vss_security_script_file_download Security Script File Download

The file generated by the script-processing tool has a .VSO extension that is recognized by the unit as a VeriShield Security Script file.
The .VSO file must be downloaded along with its signature file (P7S) into the unit using the Zontalk protocol.
Script files must be signed using signer certificates that have specific “xV” attributes authorizing them to sign scripts.
For instance, to load a script in group 13, the file must be signed with a certificate that has the “13V” attribute.
Else the authentication will fail.

There is a slight difference between the SC 5000 PINpads and Vx terminals regarding the downloads and install process.

\subsubsection subsubsec_vss_in_the_sc_5000_pinpads In the SC 5000 PINpads

Upon successful authentication by the VeriShield File Authentication module, the script file is automatically installed in the PINpad.
It is checked for validity and consistency.
If everything is coherent, then the macro commands are stored in the security module and the space for the keys defined in the script are allocated.
The script file is then deleted from the file system irrespective of the loading, whether successful or not.
Three API functions are available to access the VeriShield Security Scripts from a SC 5000 application:

<tt>
iPS_GetScriptStatus()<br>
iPS_ExecuteScript()<br>
iPS_DeleteScript()<br>
</tt>

\note Please refer to VDN22425 - SC 5000 API for description of those functions.

\subsubsection subsubsec_vss_in_the_vx_terminals In the Vx Terminals

Upon successful authentication by the VeriShield File Authentication module, the script file is not automatically installed in the PINpad.
The terminal application must install the script using the <tt>iPS_InstallScript()</tt> function.
During the install process the file is checked for validity and consistency.
If everything is coherent, then the script is validated and the space for the keys defined in the script are allocated.
The script file is not deleted from the file system and should not be deleted or replaced because it would invalidate the script.
This difference with the SC 5000 is partly because Vx terminals should support back-to-back downloads.

Four API functions are available to access the VeriShield Security Scripts from a Vx application:

<tt>iPS_InstallScript()</tt> – This function installs a script file in the unit.<br>
<tt>iPS_GetScriptStatus()</tt><br>
<tt>iPS_ExecuteScript()</tt><br>
<tt>iPS_UninstallScript()</tt> – This function uninstalls the script but does not delete the script file.

\subsubsection subsubsec_vss_pin_sessions PIN Sessions

In order to perform a PIN session using a macro command, the <tt>iPS_SelectPINAlgo()</tt> API function has to be called with the PinFormat parameter equal to 0Bh.
In such a case, once the PIN entry is completed, the PIN is stored into a specific buffer inside the security module.
The PIN is then retrieve by the “PIN processing“ macro using the GETPINx commands.
The PIN is not be accessible at the application level.
From the PINpad application the sequence looks like the following:

- Setup parameters for the upcoming PIN session:
<tt>iPS_PINParameters(…);</tt>
- Select PIN algorithm with parameter 0Bh (Store PIN internally for postprocessing by a VeriShield Security Script macro command:
<tt>iPS_SelectPINAlgo(0x0B);</tt>
- Request PIN Entry:
<tt>iPS_RequestPINEntry(0, 0);</tt>
- do {Get PIN Response:
<tt>iPS_GetPINResponse(…);</tt>
} while (not done)
- Execute the custom “PIN processing” macro
<tt>iPS_ExecuteScript(Script\#, Macro\#, …);</tt>

\subsubsection subsubsec_vss_security_script_library Security Script Library

A terminal library could be developed along with each VeriShield Security Script.
If this library has the same API as the related SCxxx library, it would ease the application conversion when switching from an SCxxx to another device.

\section sec_vss_tools Tools

\subsection subsec_vss_script_processor Script Processor (VSS Compiler)

The script processor tool takes ASCII script file as an input and generates a binary file to be downloaded into the unit.
It also generates a report file (.LOG) containing the results of the last execution.
If errors are found, then they are listed in the report file for debugging purposes.
If the execution is successful, then some information is reported (number of macros and blocks, code size,…).

The engineering version of the VeriShield Security Script Processor Tool is a Win32 console application.
The name of the executable is VSSCONV.EXE. The name of the input ASCII file must be passed as parameter.

/verbatim
C:\>VSSCONV libtest
VeriShield Security Script Tool version 9.0 - PSVSSv90 - 20200204
Copyright (c) 2001-2020, Verifone, Inc.
libtest - 0 error(s).
Execution ended normally.
/endverbatim

After the execution, a report file (.LOG) is generated.

/verbatim
VeriShield Security Script Tool version 9.0 - PSVSSv90 - 20200204
    Copyright (c) 2001-2020, Verifone, Inc.

libtest - 0 error(s).

Tool Identifier (Max Op Code Version Used): PSVSSv2
Tool Version: 9.0
Script Identifier: 00 hex (00 decimal)
Script Name: Tst0v2op
PP1000 compatible commands are disabled.
Default Master/Session functions are disabled.
Default DUKPT functions are disabled.
Number of Macros: 2 (2h)
Macro Code Size: 237 (EDh) bytes
Total number of blocks: 40 (28h) of which 0 (0h) can be
  loaded using the default key loading functions.
Number of pre-loaded blocks: 1 (1h)

Execution ended normally.
/endverbatim


\note Before using/loading scripts on ADK upgrade, make sure the appropriate VSSConv verson is used and scripts are re-compiled. Ignoring that requirement may lead to unexpected failures on different stages of loading/processing scripts.

Below is a table of VSSConv/ADK and feature mapping:

VSSConv version         |ADK version      |Number of 'usr' scripts supported |Number of 'sys' scripts supported | RSA-4096     |
------------------------|-----------------|----------------------------------|----------------------------------|--------------|
VSSConv 6.0, VSSConv7.0 |ADK 4.4, ADK 4.6 |64                                |Not supported                     |Not supported |
VSSConv 8.0             |ADK 4.7            |96                                |Not supported                     |Not supported |
VSSConv 9.0             |ADK 4.8            |96                                |96                                |Not supported |
VSSConv 9.1             |ADK 4.8            |96                                |96                                |Supported     |

\subsection subsec_vss_signing_tool Signing Tool

"VeriShield File Signing Tool" will be used to sign the VeriShield Security Script Object file (.VSO) like every other file to be downloaded into the unit.

The only difference is that the Security Script Object files (.VSO) must be signed with certificates that have script signing capabilities.
Because of the sensitive nature of the security script files compared to applications, it is required to have distinct certificate attributes for script signing capability and for application/data signing capability.

This way it is possible to generate smart cards that have only application signing capability for instance.

Like we have attributes "1","2",''3",''4",''5",''6",''7",''9",''10",''11",''12",''13",''14",''15" for applications, we have specific attributes for security scripts.

In the SC5000 the script signing attributes for the 15 groups are:

"1V","2V",''3V",''4V",''5V",''6V",''7V",''9V",''10V",''11V",''12V",''13V",''14V",''15V"

In the Vx terminal the script signing attributes for the 15 groups are:

"A",''B",''C",''D",''E",''F",''G",''H",''I",''J",''K",''L",''M",''N",''O"

For instance, to load a script in group 13, the file must be signed with a certificate that has the “13V” attribute (for SC 5000) or the “M” attribute (for Vx terminals).
If not, even though the signing process seems to work, the authentication in the unit will fail.

\subsubsection subsubsec_vss_signing_tool_in_the_sc_5000_pinpad In The SC 5000 PINpad

The VeriShield Security Script Object files (.VSO) must be downloaded into the SC 5000 PINpads as code files (option.-e with DDL.EXE or option -i with DL.EXE).
example:
/verbatim
ddl.exe -eLibTest.vso LibTest.vso.p7s
/endverbatim

\subsection subsec_vss_key_loading_tool Key Loading Tool

SecureKIT is the Key Loading solution of Verifone.

The current version 2.1 of SecureKIT supports a limited set of existing Verifone devices and in most of the cases it cannot be used to load keys defined by a VeriShield Security Script.

The next version of SecureKIT should provide a generic interface for key loading.
Being programmable devices, SC 5000 and Vx terminals will easily adapt to it at the application level.
The application might be different for each customization, (i.e. for each VeriShield Security Script) in order to interface SecureKIT communication packet into customer-specific key loading macro defined in their script.

\section sec_vss_loading_apis VSS Key Installation APIs

There are APIs available that allow loading VSS keys encrypted with:
\li AuthEx key
\li Custom Asymmetric Key loaded on the device via VRKv2

\warning Both of these APIs are vulnerable to the Padding Oracle attack. Use at your own risk.

In both cases, the encryption keys must be installed on the device.

\subsection sec_vss_loading_authex VSS key encrypted with AuthEx

To load the VSS key encrypted with AuthEx key, the following API is available:
\code
int rsaAuthexVssKeyInstall(int encryption_format, int data_length,
                           unsigned char *encrypted_key, int key_size,
                           unsigned char vss_script_num, unsigned char vss_key_slot);
\endcode

\subsection sec_vss_loading_custom_asymm VSS key encrypted with Custom Asymmetric key

To load the VSS key encrypted with Custom Asymmetric key, the following API is available:
\code
int customAsymmKeyVssKeyInstall(unsigned char *encrypted_key, int key_size,
                           unsigned char vss_script_num, unsigned char vss_key_slot, const char * custom_key_filen);
\endcode

\section sec_vss_appendix_a Appendix A: OP Code Table

The table below indicates the OP Code value for all the keywords that might generate an execution error.
This is the value returned by the <tt>iPS_ExecuteScript()</tt> function when the OP code execution fails.

<table>
<caption id="multi_row_a1" style="text-align:left">Table 1 OP Code Table</caption>
<tr><th>OP Code                      <th>Dec        <th>Hex
<tr><td>EOM <td>3 <td>03
<tr><td>GETA <td>4 <td>04
<tr><td>SENDA <td>5 <td>05
<tr><td>GETX <td>6 <td>06
<tr><td>SENDX <td>7 <td>07
<tr><td>GETW <td>8 <td>08
<tr><td>SENDW <td>9 <td>09
<tr><td>TSTXI <td>15 <td>0F
<tr><td>LSLA <td>28 <td>1C
<tr><td>LSRA <td>29 <td>1D
<tr><td>CMPA_B0 <td>40 <td>28
<tr><td>CMPA_B1 <td>41 <td>29
<tr><td>CMPA <td>42 <td>2A
<tr><td>CMPAX <td>43 <td>2B
<tr><td>SELECT <td>45 <td>2D
<tr><td>SELECTX <td>47 <td>2F
<tr><td>DELETE <td>48 <td>30
<tr><td>DELETEX <td>49 <td>31
<tr><td>STA <td>50 <td>32
<tr><td>STAX <td>51 <td>33
<tr><td>LDA <td>52 <td>34
<tr><td>LDAX <td>53 <td>35
<tr><td>CHK_ODD <td>56 <td>38
<tr><td>CHK_EVEN <td>57 <td>39
<tr><td>GETPINNB <td>68 <td>44
<tr><td>GETPIN0 <td>69 <td>45
<tr><td>GETPIN1 <td>70 <td>46
<tr><td>GETPIN2 <td>71 <td>47
<tr><td>GETPIN3 <td>72 <td>48
<tr><td>SELRSA <td>79 <td>4F
<tr><td>SELRSAX <td>80 <td>50
<tr><td>STRSA <td>81 <td>51
<tr><td>STRSAX <td>82 <td>52
<tr><td>RSACOMP <td>83 <td>53
<tr><td>SHAUPDATE <td>85 <td>55
<tr><td>CMPSHA <td>88 <td>58
<tr><td>GETA_HA_TO_BIN <td>89 <td>59
<tr><td>GETX_HA_TO_BIN <td>90 <td>5A
<tr><td>SENDA_BIN_TO_HA <td>91 <td>5B
<tr><td>SENDX_BIN_TO_HA <td>92 <td>5C
<tr><td>CMPA_BEQ <td>108 <td>6C
<tr><td>CMPAX_BEQ <td>109 <td>6D
<tr><td>CMPA_BNE <td>110 <td>6E
<tr><td>CMPAX_BNE <td>111 <td>6F
<tr><td>CMPA_BGT <td>112 <td>70
<tr><td>CMPAX_BGT <td>113 <td>71
<tr><td>CMPA_BLT <td>114 <td>72
<tr><td>CMPAX_BLT <td>115 <td>73
<tr><td>CMPA_BGE <td>116 <td>74
<tr><td>CMPAX_BGE <td>117 <td>75
<tr><td>CMPA_BLE <td>118 <td>76
<tr><td>CMPAX_BLE <td>119 <td>77
<tr><td>GETW_HA_TO_BIN <td>120 <td>78
<tr><td>SENDW_BIN_TO_HA <td>121 <td>79
<tr><td>ERR_RET <td>125 <td>7D
<tr><td>INIT_1DES_DUKPT <td>127 <td>7F
<tr><td>INIT_3DES_DUKPT <td>128 <td>80
<tr><td>GET_DUKPT_KEY <td>129 <td>81
<tr><td>DELETE_DUKPT_KEY <td>130 <td>82
<tr><td>SHA256UPDATE <td>132 <td>84
<tr><td>CMPSHA256 <td>135 <td>87
<tr><td>MAC_CB <td>151 <td>97
<tr><td>MAC_CB_X <td>152 <td>98
<tr><td>EECB_CB <td>153 <td>99
<tr><td>EECB_CB_X <td>154 <td>9A
<tr><td>DECB_CB <td>155 <td>9B
<tr><td>DECB_CB_X <td>156 <td>9C
<tr><td>ECBC_CB <td>157 <td>9D
<tr><td>ECBC_CB_X <td>158 <td>9E
<tr><td>DCBC_CB <td>159 <td>9F
<tr><td>DCBC_CB_X <td>160 <td>A0
<tr><td>OAEP <td>161 <td>A1
</table>


\section sec_vss_appendix_b Appendix B: VSS Troubleshooting Guide

This chapter describes some common problems that occur with VSS and what are the possible reasons/solutions.

\subsection VSS_load_troubleshooting VSS script fails to load
There are several reasons why VSS script may fail on installation/loading. The reason now can be found in system logs since logging has been added with ADK 4.8.
However, since proper logging is absent in earlier versions, here is a list of possible reasons for failure:

| Reason                                 | Solution/description                                                                                                                                                                                                                                                                                                                                                                                                                     |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VSS script ID is incorrect             | With VSS v9.0, the maximum VSS script ID is 191 in decimal value. On VSS version 5.0 and higher, maximal script ID is 63 and on VSS version 8.0 and higher maximal script ID is 95.<br>\note With ADK 4.8, user limitations are added for VSS script ID values. The slots 0 - 95 are now reserved for 'usr' users and slots 96 - 191 are reserved for 'sys' users. The script with incorrect ID range will fail to install with permission error. |
| Inorrect password is defined in script | In some cases, i.e. when using block retention, a 'password' (RETAIN_BLK code) must be provided in the script. Make sure that password is correct. The valid password can also be the currently loaded script name. If you are loading the script with the same script ID but use different name,  password should still be defined as the old (previous) script name.                                                                   |
| System key (KLK) is not loaded         | To perform some initial operations, Key Loading Key aka System key must be present. The KLK can be loaded via <i>iPS_LoadSysClearKey()</i> or <i>iPS_LoadSysEncKey()</i> APIs. Make sure it is present in either clear text or encrypted format.                                                                                                                                                                                                       |
| Incorrect VSSConv version is used      | On different ADK/OS releases different amount of VSS script slots is available. If you switch to newer ADK, <b>make sure you use the corresponding VSSConv version that is distributed with it and re-compile the scripts</b> before loading.                                                                                                                                 |
| Downgrade to version that does not support script IDs performed | On downgrade to older ADK versions there is possibility that certain script IDs are not supported. There is no way to downgrade and keep scripts with newer IDs on the device. Max script ID value is 63 decimal for all ADK versions older than 4.7, 95 for ADK 4.7 and 191 for ADK 4.8. Any downgrades between these versions may cause script loading problems. |

\subsection VSS_keys_troubleshooting VSS keys are wiped after the installation
There are two typical cases when the VSS keys are being wiped after the new VSS script is installed:

| Reason                                             | Solution/description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RETAIN_BLK is not used for keeping the keys loaded | If you want to upgrade the script but keep the loaded keys on the device, the RETAIN_BLK should be used instead of DEF_BLK in the new script to achieve that. The RETAIN_BLK does not erase the block values when upgrading a script. For VSS version 6.0 and higher you use fixed retain block value of ASCII hex value of the name of the previous script. For earlier versions/other retain block value must be a cryptogram, which has the following computation rules:<p>CODE = TDES[KLK xor(NAME \| NAME)] (NAME), where:<br>* NAME is the 8-character name of the script to be replaced<br>* (NAME \| NAME) is the concatenation of two NAMEs to form a 16-byte value that will be exclusive-or’d with KLK to form the double-length encryption key<br>* CODE is the result of the triple-DES encryption of NAME under this key<br>\note Please note that both scripts (old and new) must have the same script ID (SUBDEV). |
| Using the same script ID while other needed        | One of the typical situations is when the same script ID is used instead of a new one. Please make sure SUBDEV ID is different from the one loaded if you want to load a new script.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

\subsection VSS_macro_troubleshooting VSS macro fails to execute
This is a section mostly for the VSS API <i>iPS_ExecuteScript()</i> usage. Since the API uses a lot of different input parameters, there are several reason why the scripts execution might fail:

| Reason                                            | Solution/description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Wrong macro ID passed to the API                  | Macro ID is defined as "MACRO XXXh", where "XXX" is a value in HEX that serves as an entry point for the macro. One of the regular cases is when the API tries to access the macro number which is not present in a script. Please make sure that the macro with referenced number is actually defined in the VSS script.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Wrong script ID passed to the API                 | The same as with macro IDs, sometimes wrong script ID is used on the API. Also, with VSS 9.0 and higher, there are user-defined limitations on script ID usage. Please make sure you don't try to execute 'sys' script under the 'usr' user and vice versa. The only exclusion is 'shared' VSS scripts which are installed under the 'uXsys10' Secure installer group (where X is user number). In this case, 'sys10' user can execute 'usrX' VSS scripts, <b>but not vice versa</b>.                                                                                                                                                                                                                                                                                |
| Script invalid/does not exist                     | Before execution of the script, it is recommended to use <i>iPS_GetScriptStatus()</i> API to make sure the script is actually present/valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Wrong VSSConv version used for script compilation | All the scripts loaded on the device must be compiled using the VSSConv compiler. However, depending on the VSS version, there are commands that are not implemented. Before command usage make sure you are using the corresponding VSSConv/VSS version. The full list of available VSS version commands can be found in VSS Documentation, while the current VSS version used on the device is obtainable via pcPS_GetVSSVersion() API.                                                                                                                                                                                                                                                                                                                     |
| Incorrect API usage order                         | To make sure that script is executed correctly, the following API usage is recommended:<p>1. <i>iPS_GetScriptStatus()</i> - Make sure the script is present and valid.<br>2. <i>iPS_LoadSysClearKey()/iPS_LoadSysEncKey()</i> - Load the System/Key Loading Key. Can be done only once.<br>3. <i>iPS_LoadMasterClearKey()/iPS_LoadMasterEncKey()</i> - Load Master key <b>in the correspinding script ID slots 0 and 1</b>. You can also check the status of Master key with <i>iPS_CheckMasterKey()</i> API if already loaded. Script execution will fail on some commands due to Master Key required for some operations. This is recommended for any command though.<br>4. <i>iPS_ExecuteScript()</i> - Now, after we made sure we have all the required keys loaded, the script can be actually executed. |

\subsection VSS_package_troubleshooting VSS script package fails to install
Aside from the regular Secure installer errors on package installation, there are two specific cases for the VSS packages:

| Reason                                                   | Solution/description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VSS package contains dirs/files that are not .vso script | The VSS package must contain the CONTROL file and the compiled VSS script <b>only</b>.<br>Having any other files or directory inside the VSS package is not allowed. All the VSS scripts are installed in /etc/vss/<i>username</i> directories and that structure must not be modified by the internal package structure on installation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Incorrect group/type defined in the CONTROL file         | The CONTROL file for the VSS package must comply with the following rules:<br>The package type must be defined as 'vss'<br>If you are using the VSS 9.0 or higher and want to share the uploaded script between 'usrX' and 'sys10', the package group must be specified as 'uXsys10'. <br><b>Note that this group can be used with VSS 9.0 and higher and ADK 4.8+</b>. Usage of the mentioned group on installation will lead to package installation error.<br>If you are using the VSS 9.0 or higher and want to stop sharing scripts between 'usrX' and 'sys10', the package group must be specified as 'usrX'.<br>Below are the sample CONTROL files for regular and 'shared' VSS script packages: <p><b>'Shared' VSS script</b>:<br>Package: sample-vss-script<br>Version: 1.0.0<br>User: usr1<br>Group: u1sys10<br>Type: vss<p><b>Regular VSS script</b>:<br>Package: generated-0<br>Version: 1.0.0<br>User: usr1<br>Type: vss |

\subsection VSS_removal_troubleshooting VSS scripts not removed by SI
The VSS packages are a special case for removal for the SI. If you want to remove the scripts, 'removevss' command should be used in the remove bundle 'remove' file <b>along with 'removeall' command</b>.
If you use any of them separately, the VSS scripts will not be unregistered.
Here is an example of 'remove' file that removes both binary bundle and the VSS scripts that it is using:

<b>'removevss' example:</b>
\code
removebundle bndl.vos-bin-usr
removeall
removevss
\endcode
<br>


\section sec_vss_acronyms Acronyms Definition

Acronym |Definitions
--------|------------
AES     |Advanced Encryption Standard selected by NIST.
CBC     |Cipher Block Chaining mode, as defined in ANSI X3.106.
VSS     |VeriShield Security Scripts.
DES     |Data Encryption Standard, as defined in ANSI X3.92.
DUKPT   |Derived Unique Key Per Transaction Method as defined in the VISA‘s POS Equipment Requirement: PIN processing and Data Authentication, International Version 1.0, August 1988.
ECB     |Electronic Code Book mode, as defined in ANSI X3.106.
MAC     |Message Authentication Code, as defined in ANSI X9.19.
PIN     |Personal Identification Number.
POS     |Point-of-Sale.
PP1000+ |Verifone’s PINpad 1000 plus.
PRD     |Product Requirement Document.

*/
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

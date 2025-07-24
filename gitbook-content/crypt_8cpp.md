---
hidden: true
title: crypt.cpp File Reference
---

[Data Structures](#nested-classes) \| [Macros](#define-members) \| [Functions](#func-members)

`#include <stdio.h>`
`#include "`<a href="crypt_8h_source.md">crypt.h</a>`"`
`#include "`<a href="libsec_8h_source.md">sec/libsec.h</a>`"`
`#include "`<a href="sys_8h_source.md">sys.h</a>`"`
`#include "`<a href="__logf_8h_source.md">_logf.h</a>`"`
`#include <vector>`
`#include <string>`
`#include "`<a href="ipc_2src_2ipc_2jsobject_8h_source.md">ipc/jsobject.h</a>`"`
`#include "`<a href="sysinfo_8h_source.md">sysinfo/sysinfo.h</a>`"`
`#include "`<a href="md5_8h_source.md">md5.h</a>`"`
`#include "`<a href="pthreadutil_8h_source.md">pthreadutil.h</a>`"`

Include dependency graph for crypt.cpp:

![](crypt_8cpp__incl.png)

|                 |                                                  |
|-----------------|--------------------------------------------------|
| Data Structures |                                                  |
| class           | <a href="class_auth.md">Auth</a>        |
| class           | <a href="class_auth_sec.md">AuthSec</a> |

|          |                                                    |
|----------|----------------------------------------------------|
| Macros   |                                                    |
| #define  | [FALL_THROUGH](#a38dadd06badcc5b7cca444a551604399) |

|  |  |
|----|----|
| Functions |  |
| int  | [check_AuthScript](#aa132af50976d028410ad9789f5ec5aab) () |
| int  | [system_Auth](#a853e613db30d5f21771dd5b5ba76b989) (enum <a href="crypt_8h.md#ab97c53cf460f4280eb94c660cb5e357d">AuthStep</a> as, unsigned char \*in, unsigned short in_size, unsigned char \*out, unsigned short \*out_size) |
| int  | [calculate_CMAC](#affad0aaba09298a627562b262e523d93) (<a href="crypt_8h.md#adcc10b90a6f6d8e58954648e01763711">Inputype</a> type, const char \*fileToMAC, unsigned char \*dataToMAC, unsigned dataSize, unsigned char \*MAC) |
| int  | [check_CMAC](#a3242ff53cdc315266c6a352f86359c70) (<a href="crypt_8h.md#adcc10b90a6f6d8e58954648e01763711">Inputype</a> type, const char \*filename, unsigned char \*data, unsigned dataSize, unsigned char \*MAC) |
| int  | [encrypt_Data](#a7e77c714fd81df4137cfc32dc7af3584) (unsigned char \*data, unsigned long dataSize, unsigned char \*encryptedData, unsigned long \*encryptedDataSize) |
| int  | [decrypt_Data](#ab52056b7a75e86920c5b03cf2d3730ad) (unsigned char \*data, unsigned long dataSize, unsigned char \*decryptedData, unsigned long \*decryptedDataSize) |
| int  | [calculate_MD5](#a9d396bd846d00eab3b94e9c2763236cc) (const char \*file, unsigned char \*checkSum) |

## MacroDefinition Documentation {#macro-definition-documentation}

## FALL_THROUGH <a href="#a38dadd06badcc5b7cca444a551604399" id="a38dadd06badcc5b7cca444a551604399"></a>

<p>#define FALL_THROUGH</p>

## FunctionDocumentation {#function-documentation}

## calculate_CMAC() <a href="#affad0aaba09298a627562b262e523d93" id="affad0aaba09298a627562b262e523d93"></a>

<p>int calculate_CMAC</p>

Calculate the CMAC value for the given data

**Parameters**

\[in\] **type** input type. can be a file or a data buffer \[in\] **fileToMAC** file name (when input type is INPUT_TYPE_FILE) \[in\] **dataToMAC** pointer to input message buffer (when input type is INPUT_TYPE_BUFFER) \[in\] **dataSize** size of the input message (when input type is INPUT_TYPE_BUFFER) \[in,out\] **MAC** pointer to the MAC value buffer

### Returns

RESULT_OK on success otherwise RESULT_FAIL

## calculate_MD5() <a href="#a9d396bd846d00eab3b94e9c2763236cc" id="a9d396bd846d00eab3b94e9c2763236cc"></a>

<p>int calculate_MD5</p>

Compute and MD5 digest of file `file`

**Parameters**

\[in\] **file** file of which MD5 checksum shall be calculated \[out\] **checkSum** output buffer for calculated MD5 checksum, buffer must have at least 16 bytes

### Returns

1 for success, else 0 for error (e.g. file does not exist)

## check_AuthScript() <a href="#aa132af50976d028410ad9789f5ec5aab" id="aa132af50976d028410ad9789f5ec5aab"></a>

<p>int check_AuthScript</p>

checks the status of VSS script used for SDI message integrity check (message MAC) and SDI message encryption

### Returns

RESULT_OK for success, else RESULT_FAIL for failure

## check_CMAC() <a href="#a3242ff53cdc315266c6a352f86359c70" id="a3242ff53cdc315266c6a352f86359c70"></a>

<p>int check_CMAC</p>

Check the CMAC value of the given data

**Parameters**

\[in\] **type** input type. can be a file or a data buffer \[in\] **filename** file name (when input type is INPUT_TYPE_FILE) \[in\] **data** pointer to input message buffer (when input type is INPUT_TYPE_BUFFER) \[in\] **dataSize** size of the input message (when input type is INPUT_TYPE_BUFFER) \[in\] **MAC** pointer to the MAC value buffer

### Returns

RESULT_OK on success otherwise RESULT_FAIL

## decrypt_Data() <a href="#ab52056b7a75e86920c5b03cf2d3730ad" id="ab52056b7a75e86920c5b03cf2d3730ad"></a>

<p>int decrypt_Data</p>

Decrypt the given data

**Parameters**

\[in\] **data** pointer to input message buffer \[in\] **dataSize** size of the input message \[in,out\] **decryptedData** pointer to decrypted data buffer \[in,out\] **decryptedDataSize** pointer to decrypted data buffer size

### Returns

RESULT_OK on success otherwise RESULT_FAIL

## encrypt_Data() <a href="#a7e77c714fd81df4137cfc32dc7af3584" id="a7e77c714fd81df4137cfc32dc7af3584"></a>

<p>int encrypt_Data</p>

Encrypt the given data

**Parameters**

\[in\] **data** pointer to input message buffer \[in\] **dataSize** size of the input message \[in,out\] **encryptedData** pointer to encrypted data buffer \[in,out\] **encryptedDataSize** pointer to encrypted data buffer size

### Returns

RESULT_OK on success otherwise RESULT_FAIL

## system_Auth() <a href="#a853e613db30d5f21771dd5b5ba76b989" id="a853e613db30d5f21771dd5b5ba76b989"></a>

<p>int system_Auth</p>

Process System Authentication step 1 or 2. With success of step 2, the SDI client (Server) is successfully authenticated against SDI server (E105). In addition, the session key (SK) was stored to vault successfully. This is the prerequisite that other functions <a href="crypt_8h.md#affad0aaba09298a627562b262e523d93">calculate_CMAC()</a>, <a href="crypt_8h.md#a3242ff53cdc315266c6a352f86359c70">check_CMAC()</a>, <a href="crypt_8h.md#a7e77c714fd81df4137cfc32dc7af3584">encrypt_Data()</a> and <a href="crypt_8h.md#ab52056b7a75e86920c5b03cf2d3730ad">decrypt_Data()</a> will work, since these functions use the session key (SK).

**Parameters**

\[in\] **as** For System Authentication Step 1: AuthStep_1 For System Authentication Step 2: AuthStep_2 Input and output data of this function depend on this parameter (see below). \[in\] **in** pointer to input data buffer For AuthStep_1 (16 bytes): 16 bytes (Server random, plain) For AuthStep_2 (32 bytes): \[16 bytes (E105 token) + 16 bytes (Server token)\] SK encrypted \[in\] **in_size** size of input buffer (depend on auth. step, see parameter in) \[out\] **out** pointer to output buffer For AuthStep_1 (42 bytes): \[16 bytes (E105 token) + 16 bytes (E105 token)\] DUKPT encrypted + 10 bytes (KSN) For AuthStep_2 (32 bytes): \[16 bytes (Server token) + 16 bytes (E105 serial number)\] SK encrypted \[in,out\] **out_size** in: size of output buffer out: size of output buffer data (depend on auth. step, see parameter out)

### Returns

RESULT_OK for success, else RESULT_FAIL for failure

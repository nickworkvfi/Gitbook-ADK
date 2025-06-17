---
title: tmsagt/src/VHQSecurity/VHQSecurity.c

---

# tmsagt/src/VHQSecurity/VHQSecurity.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[VerifyCert](_v_h_q_security_8c.md#function-verifycert)**(char * CertFile) |
| int | **[VerifyServerCert](_v_h_q_security_8c.md#function-verifyservercert)**(char * CertFile) |
| int | **[cb](_v_h_q_security_8c.md#function-cb)**(int ok, X509_STORE_CTX * ctx) |
| bool | **[cryptoRead_wrapper](_v_h_q_security_8c.md#function-cryptoread-wrapper)**(char * filename, char * buf, size_t isize) |
| bool | **[cryptoWrite_wrapper](_v_h_q_security_8c.md#function-cryptowrite-wrapper)**(char * filename, char * buf, size_t isize) |
| int | **[password_callback](_v_h_q_security_8c.md#function-password-callback)**(char * buf, int bufsiz, int verify, void * cb_tmp) |
| bool | **[GetCertSerNum](_v_h_q_security_8c.md#function-getcertsernum)**(char * certfile, char * serial_num, int serial_num_len) |
| bool | **[GetPubKeyID](_v_h_q_security_8c.md#function-getpubkeyid)**(char * certfile, char * pubkey_id, int pubkey_id_len) |
| void | **[ReadAgentKeysToMem](_v_h_q_security_8c.md#function-readagentkeystomem)**(void ) |
| bool | **[MACKeyExists](_v_h_q_security_8c.md#function-mackeyexists)**(void ) |
| bool | **[EncryptionKeyExists](_v_h_q_security_8c.md#function-encryptionkeyexists)**(void ) |
| bool | **[GenerateMACKey](_v_h_q_security_8c.md#function-generatemackey)**(MACKey_t * MACKey, KCV_t * KCV) |
| bool | **[GenerateEncryptionKey](_v_h_q_security_8c.md#function-generateencryptionkey)**(EncryptionKey_t * EncryptionKey, KCV_t * KCV) |
| bool | **[auto_info](_v_h_q_security_8c.md#function-auto-info)**(X509_REQ * req, BIO * bio_err) |
| bool | **[make_REQ](_v_h_q_security_8c.md#function-make-req)**(X509_REQ * req, EVP_PKEY * pkey, BIO * bio_err) |
| int | **[rand_serial](_v_h_q_security_8c.md#function-rand-serial)**(BIGNUM * b, ASN1_INTEGER * ai) |
| bool | **[create_cert](_v_h_q_security_8c.md#function-create-cert)**(X509 * x509ss, X509_REQ * req, EVP_PKEY * pkey, BIO * out, BIO * bio_err) |
| bool | **[GenerateCert](_v_h_q_security_8c.md#function-generatecert)**(void ) |
| bool | **[GenerateRSAKeyPair](_v_h_q_security_8c.md#function-generatersakeypair)**(RSA ** RSA_key_pair, bool force_generation) |
| bool | **[AgentKeysExist](_v_h_q_security_8c.md#function-agentkeysexist)**(void ) |
| int | **[ReadPubKeyCertfile](_v_h_q_security_8c.md#function-readpubkeycertfile)**(char ** CertFile) |
| bool | **[EncryptAgentKeys](_v_h_q_security_8c.md#function-encryptagentkeys)**(int flen, char * input, char * output, char * signature) |
| vhq_result_t | **[GenerateAgentKeys](_v_h_q_security_8c.md#function-generateagentkeys)**(char * CertFile) |
| void | **[RemoveAgentKeys](_v_h_q_security_8c.md#function-removeagentkeys)**(void ) |
| void | **[VHQSecurityInit](_v_h_q_security_8c.md#function-vhqsecurityinit)**(void ) |
| void | **[VHQSecurityReloadKeys](_v_h_q_security_8c.md#function-vhqsecurityreloadkeys)**(void ) |
| bool | **[VHQSecurityGenSig](_v_h_q_security_8c.md#function-vhqsecuritygensig)**(unsigned char * data_p, int data_len, unsigned char * sigbuf, int sigbuf_size) |
| bool | **[VHQSecurtiyVerifySignatureKey](_v_h_q_security_8c.md#function-vhqsecurtiyverifysignaturekey)**(char * signing_key_id) |
| bool | **[VHQSecurtiyGetSignatureKeyID](_v_h_q_security_8c.md#function-vhqsecurtiygetsignaturekeyid)**(char * signing_key_id, int signing_key_id_len) |
| void | **[VHQSecurityCalculateFileHash](_v_h_q_security_8c.md#function-vhqsecuritycalculatefilehash)**(const char * pszFileName, dl_file_hash_algo_t eHashAlgo, unsigned char * pszFileHash, int pszFileHashSize, int * genHashLen) |
| bool | **[VHQSecurityVerifyFileSignature](_v_h_q_security_8c.md#function-vhqsecurityverifyfilesignature)**(const char * pszFileName, dl_file_hash_algo_t eHashAlgo, char * pszHash) |
| bool | **[VHQSecurityGenSha1](_v_h_q_security_8c.md#function-vhqsecuritygensha1)**(const char * filename, unsigned char * sha1_digest) |
| int | **[checkCert](_v_h_q_security_8c.md#function-checkcert)**(X509_STORE * ctx, char * file, STACK_OF(X509) * uchain, STACK_OF(X509) * tchain, int purpose, ENGINE * e) |
| int | **[check_cert_time](_v_h_q_security_8c.md#function-check-cert-time)**(X509_STORE_CTX * ctx, X509 * x) |
| int | **[internal_verify](_v_h_q_security_8c.md#function-internal-verify)**(X509_STORE_CTX * ctx, X509 * xi) |
| int | **[checkServerCert](_v_h_q_security_8c.md#function-checkservercert)**(X509_STORE * ctx, char * file, STACK_OF(X509) * uchain, STACK_OF(X509) * tchain, int purpose, ENGINE * e) |
| time_t | **[ASN1_GetTimeT](_v_h_q_security_8c.md#function-asn1-gettimet)**(ASN1_TIME * time) |
| time_t | **[GetCertExpiration](_v_h_q_security_8c.md#function-getcertexpiration)**(char * file) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| vhq_key_data_t | **[VHQKeyData](_v_h_q_security_8c.md#variable-vhqkeydata)**  |
| pthread_mutex_t | **[securityMutex](_v_h_q_security_8c.md#variable-securitymutex)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[OPENSSL_NO_SHA256](_v_h_q_security_8c.md#define-openssl-no-sha256)**  |
|  | **[VALIDATE_AGENT_PUB_KEY_CERTFILE](_v_h_q_security_8c.md#define-validate-agent-pub-key-certfile)**  |
|  | **[USE_X509_V3_EXTENSIONS](_v_h_q_security_8c.md#define-use-x509-v3-extensions)**  |
|  | **[CONFFileName1_](_v_h_q_security_8c.md#define-conffilename1-)**(x)  |
|  | **[CONFFileName_](_v_h_q_security_8c.md#define-conffilename-)**(x)  |
|  | **[CONFFileName](_v_h_q_security_8c.md#define-conffilename)**  |
|  | **[lib_VfiSecCrypto](_v_h_q_security_8c.md#define-lib-vfiseccrypto)**  |
|  | **[vfiSecCryptoReadFn](_v_h_q_security_8c.md#define-vfiseccryptoreadfn)**  |
|  | **[vfiSecCryptoWriteFn](_v_h_q_security_8c.md#define-vfiseccryptowritefn)**  |
|  | **[DEBUG_AES_CMAC](_v_h_q_security_8c.md#define-debug-aes-cmac)**  |
|  | **[ENABLE_CRYPTO_RD_WR](_v_h_q_security_8c.md#define-enable-crypto-rd-wr)**  |
|  | **[SUBJ_KEY_ID_OBJ](_v_h_q_security_8c.md#define-subj-key-id-obj)**  |
|  | **[JULY_30_2012](_v_h_q_security_8c.md#define-july-30-2012)**  |
|  | **[SHA256_SIGNATURE](_v_h_q_security_8c.md#define-sha256-signature)**  |
|  | **[MAX_MALLOC_SIZE](_v_h_q_security_8c.md#define-max-malloc-size)**  |
|  | **[COMMON_NAME_START_STR](_v_h_q_security_8c.md#define-common-name-start-str)**  |
|  | **[HOST_NAME_START_STR](_v_h_q_security_8c.md#define-host-name-start-str)**  |

## Detailed Description


The VHQ security module for: Generating Keys Generating Signatures Validating Signatures 


## Functions Documentation

### function VerifyCert

```cpp
static int VerifyCert(
    char * CertFile
)
```


### function VerifyServerCert

```cpp
static int VerifyServerCert(
    char * CertFile
)
```


**Parameters**: 

  * **CertFile** = file name.


**Return**: -1, if error. 

This function verifies the server certificate 


### function cb

```cpp
static int cb(
    int ok,
    X509_STORE_CTX * ctx
)
```


### function cryptoRead_wrapper

```cpp
static bool cryptoRead_wrapper(
    char * filename,
    char * buf,
    size_t isize
)
```


### function cryptoWrite_wrapper

```cpp
static bool cryptoWrite_wrapper(
    char * filename,
    char * buf,
    size_t isize
)
```


### function password_callback

```cpp
static int password_callback(
    char * buf,
    int bufsiz,
    int verify,
    void * cb_tmp
)
```


### function GetCertSerNum

```cpp
bool GetCertSerNum(
    char * certfile,
    char * serial_num,
    int serial_num_len
)
```


**Parameters**: 

  * **certfile** = file name 
  * **serial_num** = serial number. 
  * **serial_num_len** = length of serial number buffer.


**Return**: TRUE, if serial number found. 

This function gets serial number from a certificate. 


### function GetPubKeyID

```cpp
bool GetPubKeyID(
    char * certfile,
    char * pubkey_id,
    int pubkey_id_len
)
```


**Parameters**: 

  * **certfile** = file name. 
  * **pubkey_id** = public key ID buffer. 
  * **pubkey_id_len** = public key ID buffer length.


**Return**: TRUE, if key found. 

This function gets the public key ID to send to server. 


### function ReadAgentKeysToMem

```cpp
static void ReadAgentKeysToMem(
    void 
)
```


**Return**: void 

This function reads the agent keys for current instance and saves it. 


### function MACKeyExists

```cpp
static bool MACKeyExists(
    void 
)
```


**Return**: TRUE, if MAC key found. 

This function checks for MAC key. 


### function EncryptionKeyExists

```cpp
static bool EncryptionKeyExists(
    void 
)
```


**Return**: TRUE, if Encryption key found. 

This function checks for Encryption keys. 


### function GenerateMACKey

```cpp
static bool GenerateMACKey(
    MACKey_t * MACKey,
    KCV_t * KCV
)
```


**Parameters**: 

  * **MACKey** = pointer to MAC key. 
  * **KCV** = pointer to MAC key check value


**Return**: TRUE, if MAC key generated. 

This function generates a MAC key and stores it into MAC Key File. 


### function GenerateEncryptionKey

```cpp
static bool GenerateEncryptionKey(
    EncryptionKey_t * EncryptionKey,
    KCV_t * KCV
)
```


**Parameters**: 

  * **EncryptionKey** = pointer to MAC key. 
  * **KCV** = pointer to Encryption key check value


**Return**: TRUE, if Encryption key generated. 

This function generates a encryption key and stores it into encryption Key File. 


### function auto_info

```cpp
static bool auto_info(
    X509_REQ * req,
    BIO * bio_err
)
```


### function make_REQ

```cpp
static bool make_REQ(
    X509_REQ * req,
    EVP_PKEY * pkey,
    BIO * bio_err
)
```


### function rand_serial

```cpp
int rand_serial(
    BIGNUM * b,
    ASN1_INTEGER * ai
)
```


### function create_cert

```cpp
static bool create_cert(
    X509 * x509ss,
    X509_REQ * req,
    EVP_PKEY * pkey,
    BIO * out,
    BIO * bio_err
)
```


### function GenerateCert

```cpp
static bool GenerateCert(
    void 
)
```


### function GenerateRSAKeyPair

```cpp
static bool GenerateRSAKeyPair(
    RSA ** RSA_key_pair,
    bool force_generation
)
```


**Parameters**: 

  * **RSA_key_pair** = pointer to RSA key generated. 
  * **force_generation** = TRUE, if force generation of keys enabled.


**Return**: TRUE, if RSA key generated. 

This function generates and writes the RSA key into file, if not present. 


### function AgentKeysExist

```cpp
bool AgentKeysExist(
    void 
)
```


**Return**: void. 

This function checks if agent keys exists in memory or not. 


### function ReadPubKeyCertfile

```cpp
int ReadPubKeyCertfile(
    char ** CertFile
)
```


**Parameters**: 

  * **CertFile** = pointer to public key read.


**Return**: number of objects read from public key file, if success. 

This function reads the public key certificate from file to be sent to server. 


### function EncryptAgentKeys

```cpp
bool EncryptAgentKeys(
    int flen,
    char * input,
    char * output,
    char * signature
)
```


**Parameters**: 

  * **flen** = length of agent key buffer. 
  * **input** = agent keys buffer. 
  * **output** = encrypted keys. 
  * **signature** = signature from file.


**Return**: TRUE, if keys encrypted. 

This function encrypts agent keys to be send to server. 


### function GenerateAgentKeys

```cpp
vhq_result_t GenerateAgentKeys(
    char * CertFile
)
```


**Parameters**: 

  * **Certificate** file 


**Return**: TRUE, if keys generated. 

This function generates agent keys and loads the keys into memory. 


### function RemoveAgentKeys

```cpp
void RemoveAgentKeys(
    void 
)
```


**Return**: void. 

This function removes the agent keys from memory and request for re-registration if required.


### function VHQSecurityInit

```cpp
void VHQSecurityInit(
    void 
)
```


**Return**: void. 

This function removes the agent keys and reloads it if the device is tampered. 


### function VHQSecurityReloadKeys

```cpp
void VHQSecurityReloadKeys(
    void 
)
```


**Return**: void 

This function reloads all the agent keys. 


### function VHQSecurityGenSig

```cpp
bool VHQSecurityGenSig(
    unsigned char * data_p,
    int data_len,
    unsigned char * sigbuf,
    int sigbuf_size
)
```


**Parameters**: 

  * **data_p** = input string 
  * **data_len** = length of data_p 
  * **sigbuf** = buffer to store signature data into 
  * **sigbuf_size** = size of signature data buffer


**Return**: TRUE, if success; FALSE, otherwise 

This function generates the signature. 


### function VHQSecurtiyVerifySignatureKey

```cpp
bool VHQSecurtiyVerifySignatureKey(
    char * signing_key_id
)
```


**Parameters**: 

  * **signing_key_id** = signature recieved.


**Return**: TRUE, if signature matches. 

This function compares the signature key received from server with expected key. 


### function VHQSecurtiyGetSignatureKeyID

```cpp
bool VHQSecurtiyGetSignatureKeyID(
    char * signing_key_id,
    int signing_key_id_len
)
```


**Parameters**: 

  * **signing_key_id** = signing key ID found. 
  * **signing_key_id_len** = expected length of signing key id.


**Return**: TRUE, if found. 

This function gets the signature key ID to send to server. 


### function VHQSecurityCalculateFileHash

```cpp
void VHQSecurityCalculateFileHash(
    const char * pszFileName,
    dl_file_hash_algo_t eHashAlgo,
    unsigned char * pszFileHash,
    int pszFileHashSize,
    int * genHashLen
)
```


**Parameters**: 

  * **pszFileName** = file name. 
  * **eHashAlgo** = hash algorithm type 
  * **pszFileHash** = calculated hash 
  * **pszFileHashSize** = expected calculated file hash size. 
  * **genHashLen** = calculated hash length.


**Return**: void 

This function computes the SHA1 hash for a file. 


### function VHQSecurityVerifyFileSignature

```cpp
bool VHQSecurityVerifyFileSignature(
    const char * pszFileName,
    dl_file_hash_algo_t eHashAlgo,
    char * pszHash
)
```


**Parameters**: 

  * **pszFileName** = file name. 
  * **eHashAlgo** = hash algorithm type 
  * **pszHash** = received hash value from server.


**Return**: TRUE ,if hash matched. 

This function compares the the SHA1 message digest for file and the hash received from server. 


### function VHQSecurityGenSha1

```cpp
bool VHQSecurityGenSha1(
    const char * filename,
    unsigned char * sha1_digest
)
```


**Parameters**: 

  * **filename** = file name 
  * **sha1_digest** = sha1 message.


**Return**: TRUE ,if success 

This function computes the SHA1 message digest for data in a file. 


### function checkCert

```cpp
static int checkCert(
    X509_STORE * ctx,
    char * file,
    STACK_OF(X509) * uchain,
    STACK_OF(X509) * tchain,
    int purpose,
    ENGINE * e
)
```


### function check_cert_time

```cpp
static int check_cert_time(
    X509_STORE_CTX * ctx,
    X509 * x
)
```


### function internal_verify

```cpp
static int internal_verify(
    X509_STORE_CTX * ctx,
    X509 * xi
)
```


### function checkServerCert

```cpp
static int checkServerCert(
    X509_STORE * ctx,
    char * file,
    STACK_OF(X509) * uchain,
    STACK_OF(X509) * tchain,
    int purpose,
    ENGINE * e
)
```


### function ASN1_GetTimeT

```cpp
static time_t ASN1_GetTimeT(
    ASN1_TIME * time
)
```


**Parameters**: 

  * **time** = ASN1_TIME time.


**Return**: converted time_t. 

This function convert ASN1_TIME to time_t format. 


### function GetCertExpiration

```cpp
time_t GetCertExpiration(
    char * file
)
```


**Parameters**: 

  * **file** = filename


**Return**: expiration time. 

This function gets the certificate expiration time to send to server. 



## Attributes Documentation

### variable VHQKeyData

```cpp
vhq_key_data_t VHQKeyData;
```


### variable securityMutex

```cpp
pthread_mutex_t securityMutex = PTHREAD_MUTEX_INITIALIZER;
```



## Macros Documentation

### define OPENSSL_NO_SHA256

```cpp
#define OPENSSL_NO_SHA256 1
```


### define VALIDATE_AGENT_PUB_KEY_CERTFILE

```cpp
#define VALIDATE_AGENT_PUB_KEY_CERTFILE 1
```


### define USE_X509_V3_EXTENSIONS

```cpp
#define USE_X509_V3_EXTENSIONS 1
```


### define CONFFileName1_

```cpp
#define CONFFileName1_(
    x
)
#x
```


### define CONFFileName_

```cpp
#define CONFFileName_(
    x
)
CONFFileName1_(x)
```


### define CONFFileName

```cpp
#define CONFFileName CONFFileName_(OPENSSL_CNF_FILE_NAME)
```


### define lib_VfiSecCrypto

```cpp
#define lib_VfiSecCrypto "libvfiVaultapi.so"
```


### define vfiSecCryptoReadFn

```cpp
#define vfiSecCryptoReadFn "vfiSec_CwkRead"
```


### define vfiSecCryptoWriteFn

```cpp
#define vfiSecCryptoWriteFn "vfiSec_CwkWrite"
```


### define DEBUG_AES_CMAC

```cpp
#define DEBUG_AES_CMAC 0
```


### define ENABLE_CRYPTO_RD_WR

```cpp
#define ENABLE_CRYPTO_RD_WR 
```


### define SUBJ_KEY_ID_OBJ

```cpp
#define SUBJ_KEY_ID_OBJ "X509v3 Subject Key Identifier"
```


### define JULY_30_2012

```cpp
#define JULY_30_2012 1343606400
```


### define SHA256_SIGNATURE

```cpp
#define SHA256_SIGNATURE 1
```


### define MAX_MALLOC_SIZE

```cpp
#define MAX_MALLOC_SIZE (1024 * 1024)
```


### define COMMON_NAME_START_STR

```cpp
#define COMMON_NAME_START_STR "/CN="
```


### define HOST_NAME_START_STR

```cpp
#define HOST_NAME_START_STR "://"
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///

#ifdef VHQ_CERT_VERIFIER
#include "VHQCertVerifier.h"
#else //VHQ_CERT_VERIFIER

#define OPENSSL_NO_SHA256 1
#include <fcntl.h>
#include <memory.h>
#include <pwd.h>
#include <svcsec.h>
#include <unistd.h>
#include <openssl/bio.h>
#include <openssl/err.h>
#include <openssl/evp.h>
#include <openssl/pem.h>
#include <openssl/rsa.h>
#include <openssl/sha.h>
#include <openssl/x509.h>
#include <openssl/x509v3.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#ifdef Mx2
#include <vficrypt.h>
#include <dlfcn.h>
#endif
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQFileNames.h"
#include "VHQSecurity.h"
#include "VHQTypes.h"
#include "VHQUtils.h"
#include "VHQManager.h"

#endif // VHQ_CERT_VERIFIER

#ifndef VHQ_CERT_VERIFIER
vhq_key_data_t VHQKeyData;

#define VALIDATE_AGENT_PUB_KEY_CERTFILE         1

#define USE_X509_V3_EXTENSIONS                  1
#if USE_X509_V3_EXTENSIONS
/* Pick up the openssl config filename from the makefile */
#define CONFFileName1_(x) #x
#define CONFFileName_(x) CONFFileName1_(x)
#define CONFFileName CONFFileName_(OPENSSL_CNF_FILE_NAME)
#endif

#define lib_VfiSecCrypto                        "libvfiVaultapi.so"
#define vfiSecCryptoReadFn                      "vfiSec_CwkRead"
#define vfiSecCryptoWriteFn                     "vfiSec_CwkWrite"
#define DEBUG_AES_CMAC                          0
#define ENABLE_CRYPTO_RD_WR

static int VerifyCert(char *CertFile);
static int VerifyServerCert(char *CertFile);
#else
int VerifyServerCert(char* CertFile);
#endif

/* Common function prototype for verifier and main code */
static int cb(int ok, X509_STORE_CTX *ctx);

pthread_mutex_t securityMutex = PTHREAD_MUTEX_INITIALIZER;

static bool cryptoRead_wrapper(char *filename, char *buf, size_t isize)
{
#ifdef ENABLE_CRYPTO_RD_WR
  bool ret = TRUE;
  int fd = -1;
  int bytes_read = -1;

  fd = open(filename, O_RDWR);

  if (fd != -1)
  {
#ifdef _VOS2
    if (IsBaseDevice())
    {
      bytes_read = read(fd, buf, isize);
      if (bytes_read < isize)
      {
        dbg_err("%s: Could not read from file\n", __FUNCTION__);
      }
    }
    else
#endif
    {
      int *secHandle = NULL;
      bool isNewApi = FALSE;

      secHandle = dlopen(lib_VfiSecCrypto, RTLD_NOW | RTLD_GLOBAL);

      if (secHandle)
      {
        int (*vfiSec_CwkReadFnPtr)(void *src, size_t src_size, void *dst,
                                   size_t dst_size, enum gek_endec_flags flags);

        dlerror();

        vfiSec_CwkReadFnPtr = dlsym(secHandle, vfiSecCryptoReadFn);

        if (vfiSec_CwkReadFnPtr)
        {
          struct stat file_stat;
          char *data = NULL;

          stat(filename, &file_stat);

          data = (char*) calloc(1, file_stat.st_size);

          if (data)
          {
            size_t data_size = 0;
            data_size = read(fd, data, file_stat.st_size);
            if (data_size < file_stat.st_size)
            {
              dbg_err("%s: Could not read from encrypted file\n", __FUNCTION__);
            }
            else
            {
              bytes_read = vfiSec_CwkReadFnPtr((void*) data, data_size,
                                               (void*) buf, isize,
                                               GEK_LEGACY_DECRYPT);
              isNewApi = TRUE;
            }

            free(data);
          }
          else
          {
            dbg_err("%s: Couldn't allocate memory for crypto read\n",
                    __FUNCTION__);
          }
        }
        dlclose(secHandle);
      }

      if (!isNewApi)
      {
        bytes_read = cryptoRead(fd, buf, isize);
      }
    }
    close(fd);
  }

  if (bytes_read != isize)
  {
    dbg_err("%s ERROR: read %d bytes (should have been %d bytes)\n",
            __FUNCTION__, bytes_read, isize);
    ret = FALSE;
  }

  return ret;
#else
  bool ret = TRUE;
  int fd = -1;
  int bytes_read = -1;

  fd = open(filename, O_RDWR);

  if (fd != -1)
  {
    bytes_read = read(fd, buf, isize);
    if (bytes_read < isize)
    {
      dbg_err("%s: Could not read from file\n", __FUNCTION__);
      ret = FALSE;
    }
  }
  else
  {
    ret = FALSE;
  }
  return ret;
#endif
}

static bool cryptoWrite_wrapper(char *filename, char *buf, size_t isize)
{
#ifdef ENABLE_CRYPTO_RD_WR
  bool ret = TRUE;
  int fd = -1;
  int bytes_written = -1;
  bool isNewApi = FALSE;

  fd = open(filename, O_CREAT | O_RDWR | O_TRUNC, S_IWUSR | S_IRUSR | S_IRGRP);
  if (fd != -1)
  {
#ifdef _VOS2
    if (IsBaseDevice())
    {
      bytes_written = write(fd, buf, isize);
      if (bytes_written < isize)
      {
        dbg_err("%s: Could not write to file\n", __FUNCTION__);
      }
    }
    else
#endif
    {
      int *secHandle = NULL;

      secHandle = dlopen(lib_VfiSecCrypto, RTLD_NOW | RTLD_GLOBAL);

      if (secHandle)
      {
        int (*vfiSec_CwkWriteFnPtr)(void *src, size_t src_size, void *dst,
                                    size_t dst_size, enum gek_endec_flags flags);

        dlerror();

        vfiSec_CwkWriteFnPtr = dlsym(secHandle, vfiSecCryptoWriteFn);

        if (vfiSec_CwkWriteFnPtr)
        {
          char *data = NULL;

          data = (char*) calloc(1, ENCRYPTION_SIZE);

          if (data)
          {
            bytes_written = vfiSec_CwkWriteFnPtr((void*) buf, isize,
                                                 (void*) data,
                                                 ENCRYPTION_SIZE,
                                                 GEK_NONE);

            if (bytes_written == ENCRYPTION_SIZE)
            {
              isNewApi = TRUE;
            }
            else
            {
              dbg_err(
                  "%s: Could not encrypt data, data encrypted: %d, expected: %d\n",
                  __FUNCTION__, bytes_written, ENCRYPTION_SIZE);
            }

            bytes_written = write(fd, data, ENCRYPTION_SIZE);
            if (bytes_written < ENCRYPTION_SIZE)
            {
              dbg_err("%s: Could not write to encrypted file\n", __FUNCTION__);
            }

            free(data);
          }
          else
          {
            dbg_err("%s: Couldn't allocate memory for crypto read\n",
                    __FUNCTION__);
          }
        }
        dlclose(secHandle);
      }

      if (!isNewApi)
      {
        bytes_written = cryptoWrite(fd, buf, isize);
      }
    }
    close(fd);
  }

  if ((isNewApi && (bytes_written != ENCRYPTION_SIZE))
      || (!isNewApi && (bytes_written != isize)))
  {
    dbg_err(
        "%s ERROR: wrote %d bytes (should have been %d bytes or %d bytes)\n",
        __FUNCTION__, bytes_written, isize, ENCRYPTION_SIZE);
    ret = FALSE;
  }

  return ret;
#else
  bool ret = TRUE;
  int fd = -1;
  int bytes_written = -1;

  fd = open(filename, O_CREAT | O_RDWR | O_TRUNC, S_IWUSR | S_IRUSR | S_IRGRP);
  if (fd != -1)
  {
    bytes_written = write(fd, buf, isize);
    if (bytes_written < isize)
    {
      dbg_err("%s: Could not write to file\n", __FUNCTION__);
      ret = FALSE;
    }
  }
  else
  {
    ret = FALSE;
  }
  return ret;
#endif
}

#ifndef VHQ_CERT_VERIFIER
static int password_callback(char *buf, int bufsiz, int verify, void *cb_tmp)
{
  (void) (verify);
  (void) (cb_tmp);
  int i;
  int pw_len = 0;
  unsigned char password[16];
  struct stat pw_file_stat;
  char RsaKeyPwFileName[512];

  memset(RsaKeyPwFileName, 0, sizeof(RsaKeyPwFileName));
  GetFileNameForInstance(RsaKeyPwFileName, (char*) AGENT_RSA_KEY_PW_FILE,
                         GetCurrentInstance());

  /* Lets see if the PW file exists yet */
  if (stat(RsaKeyPwFileName, &pw_file_stat) == 0)
  {
    dbg_msg("%s: PW File Exists - Reading PW (%d bytes) from PW File\n",
            __FUNCTION__, sizeof(password));
    cryptoRead_wrapper(RsaKeyPwFileName, (char*) &password[0],
                       sizeof(password));
  }
  else
  {
    bool good_data;

    dbg_msg("%s: PW file %s does not exist, creating new password\n",
            __FUNCTION__, RsaKeyPwFileName);

    /* Generate the password */
    GenerateRandom(&password[0]);
    GenerateRandom(&password[8]);

    /* Make sure we don't have any zeros (NULL) characters in the first 8 bytes */
    good_data = FALSE;
    while (!good_data)
    {
      bool zero_found = FALSE;

      for (i = 0; i < 8; i++)
      {
        if (password[i] == 0)
        {
          zero_found = TRUE;
          break;
        }
      }

      if (zero_found)
      {
        dbg_msg("%s: Found NULL character at index %d - regenerating random\n",
                __FUNCTION__, i);
        GenerateRandom(&password[0]);
      }
      else
        good_data = TRUE;
    }

    /* Make sure we don't have any zeros (NULL) characters in the second 8 bytes */
    good_data = FALSE;
    while (!good_data)
    {
      bool zero_found = FALSE;

      for (i = 8; i < 16; i++)
      {
        if (password[i] == 0)
        {
          zero_found = TRUE;
          break;
        }
      }

      if (zero_found)
      {
        dbg_msg("%s: Found NULL character at index %d - regenerating random\n",
                __FUNCTION__, i);
        GenerateRandom(&password[8]);
      }
      else
        good_data = TRUE;
    }
    cryptoWrite_wrapper(RsaKeyPwFileName, (char*) password, sizeof(password));
  }

  pw_len = sizeof(password);
  if (pw_len > bufsiz)
    pw_len = bufsiz;
  memcpy(buf, password, pw_len);
  return pw_len;
}

#if 0
static bool GenerateRSAPubKeyID()
{
    BIO* bp = BIO_new(BIO_s_mem());
    int pub_key_buf_size = RSA_size(VHQKeyData.RSA_key_pair);
    BUF_MEM* pub_key_text_buf = BUF_MEM_new();
    char pub_key_buf[pub_key_buf_size];
    char* temp_pub_key_text_p;


    BIO_set_mem_buf(bp, pub_key_text_buf, BIO_NOCLOSE);

    BN_print(bp, VHQKeyData.RSA_key_pair->n);

    temp_pub_key_text_p = malloc(pub_key_text_buf->length + 1);
    memset(temp_pub_key_text_p, 0, (pub_key_text_buf->length + 1));
    memcpy(temp_pub_key_text_p, pub_key_text_buf->data, pub_key_text_buf->length);

    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "\n\n%s: RSA Public Key Text Buf (Size = %d bytes, strlen = %d)\n%s\n", __FUNCTION__,
        pub_key_text_buf->length, strlen(temp_pub_key_text_p), temp_pub_key_text_p);


    if (SHA1(SHA1ALL, temp_pub_key_text_p, strlen(temp_pub_key_text_p), VHQKeyData.RSA_PubKeyID) != 0)
    {
        DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s ERROR: Could not calculate SHA1 of public key\n", __FUNCTION__);
        return FALSE;
    }

    DebugMsgBuffer("\tPubKeyID", VHQKeyData.RSA_PubKeyID, sizeof(VHQKeyData.RSA_PubKeyID), BUF_TYPE_HEX);


    if (!ConvertHexStringToBinary(temp_pub_key_text_p, pub_key_buf, pub_key_buf_size))
    {
        DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s ERROR: Could not convert pub key hex string to binary\n", __FUNCTION__);
        free(temp_pub_key_text_p);
        BUF_MEM_free(pub_key_text_buf);
        BIO_free(bp);
        return FALSE;
    }


    DebugMsgBuffer("\tModulus", pub_key_buf, pub_key_buf_size, BUF_TYPE_HEX);

    free(temp_pub_key_text_p);
    BUF_MEM_free(pub_key_text_buf);
    BIO_free(bp);

    if (SHA1(SHA1ALL, pub_key_buf, pub_key_buf_size, VHQKeyData.RSA_PubKeyID) != 0)
    {
        DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s ERROR: Could not calculate SHA1 of public key\n", __FUNCTION__);
        return FALSE;
    }

    DebugMsgBuffer("\tPubKeyID", VHQKeyData.RSA_PubKeyID, sizeof(VHQKeyData.RSA_PubKeyID), BUF_TYPE_HEX);

    return TRUE;
}
#endif


bool GetCertSerNum(char *certfile, char *serial_num, int serial_num_len)
{
  bool ret_val = FALSE;
  int i, entry_index;
  X509 *x509 = NULL;
  BIO *cert = NULL;
  ASN1_INTEGER *asn1_serial = NULL;

  /* Clear the buffer first */
  memset(serial_num, 0, serial_num_len);

  dbg_msg("%s: Reading certificate from file %s\n", __FUNCTION__, certfile);
  if ((cert = BIO_new(BIO_s_file())) == NULL)
  {
    dbg_err("%s ERROR: couldn't create cert BIO\n", __FUNCTION__);
    goto sernum_err;
  }

  if (BIO_read_filename(cert, certfile) <= 0)
  {
    dbg_err("%s ERROR: Error reading from %s\n", __FUNCTION__, certfile);
    goto sernum_err;
  }

  x509 = PEM_read_bio_X509_AUX(cert, NULL,
                               NULL /*(pem_password_cb *)password_callback */,
                               NULL);

  if (!x509)
  {
    dbg_err("%s ERROR: x509 is NULL\n", __FUNCTION__);
    goto sernum_err;
  }

  asn1_serial = X509_get_serialNumber(x509);
  if (asn1_serial == NULL)
  {
    dbg_err("%S ERROR: Unable to read serial number from certificate\n",
            __FUNCTION__);
    goto sernum_err;
  }

  entry_index = 0;
  for (i = 0; i < asn1_serial->length; i++)
  {
    if ((entry_index + 3) >= serial_num_len)
      break;

    sprintf(&serial_num[entry_index], "%02x%c", asn1_serial->data[i],
            ((i + 1 == asn1_serial->length) ? ' ' : ':'));
    entry_index += 3;
  }

  ret_val = TRUE;

  sernum_err: if (x509)
    X509_free(x509);
  if (cert)
    BIO_free(cert);

  return ret_val;
}

#define SUBJ_KEY_ID_OBJ         "X509v3 Subject Key Identifier"


bool GetPubKeyID(char *certfile, char *pubkey_id, int pubkey_id_len)
{
  bool ret_val = FALSE;
  int i;
#ifndef OPENSSL3
  X509_CINF *cert_info = NULL;
#endif
  STACK_OF(X509_EXTENSION) *exts = NULL;
  X509 *x509 = NULL;
  BIO *cert = NULL;

  /* Clear the buffer first */
  memset(pubkey_id, 0, pubkey_id_len);

  dbg_msg("%s: Reading certificate from file %s\n", __FUNCTION__, certfile);
  if ((cert = BIO_new(BIO_s_file())) == NULL)
  {
    log_err("%s ERROR: couldn't create cert BIO\n", __FUNCTION__);
    goto pubkeyid_err;
  }

  if (BIO_read_filename(cert, certfile) <= 0)
  {
    log_err("%s ERROR: Error reading from %s\n", __FUNCTION__, certfile);
    goto pubkeyid_err;
  }

  x509 = PEM_read_bio_X509_AUX(cert, NULL,
                               NULL /*(pem_password_cb *)password_callback */,
                               NULL);

  if (!x509)
  {
    log_err("%s ERROR: x509 is NULL\n", __FUNCTION__);
    goto pubkeyid_err;
  }
#ifndef OPENSSL3
  cert_info = x509->cert_info;
  if (!cert_info)
  {
    log_err("%s ERROR: cert_info is NULL\n", __FUNCTION__);
    goto pubkeyid_err;
  }

  exts = cert_info->extensions;
#else
  exts = X509_get0_extensions(x509);
#endif
  if (!exts)
  {
    log_err("%s ERROR: No certificate extensions\n", __FUNCTION__);
    goto pubkeyid_err;
  }

  dbg_msg("%s: Num Extensions = %d\n", __FUNCTION__,
          sk_X509_EXTENSION_num(exts));
  if (sk_X509_EXTENSION_num(exts) <= 0)
    goto pubkeyid_err;

  for (i = 0; i < sk_X509_EXTENSION_num(exts); i++)
  {
    ASN1_OBJECT *obj;
    X509_EXTENSION *ext;
    void *ext_str = NULL;
    char *value = NULL;
    const unsigned char *p;
    X509V3_EXT_METHOD *method = NULL;
    char object_buf[128];
#ifdef OPENSSL3
    int extlen;
#endif

    dbg_msg("%s: Getting extension %d\n", __FUNCTION__, i);
    ext = sk_X509_EXTENSION_value(exts, i);

    obj = X509_EXTENSION_get_object(ext);
    memset(object_buf, 0, sizeof(object_buf));
    i2t_ASN1_OBJECT(object_buf, sizeof(object_buf), obj);
    dbg_msg("%s: object buf = %s\n", __FUNCTION__, object_buf);

    if (strcmp(object_buf, SUBJ_KEY_ID_OBJ) == 0)
    {
      dbg_msg("%s: Found %s object\n", __FUNCTION__, SUBJ_KEY_ID_OBJ);
      method = (X509V3_EXT_METHOD*) X509V3_EXT_get(ext);
      if (!method)
        continue;

#ifndef OPENSSL3
      p = ext->value->data;
      if (method->it)
        ext_str = ASN1_item_d2i(NULL, &p, ext->value->length,
                                ASN1_ITEM_ptr(method->it));
      else
        ext_str = method->d2i(NULL, &p, ext->value->length);
#else
      p = ASN1_STRING_get0_data(X509_EXTENSION_get_data(ext));
      extlen = ASN1_STRING_length(X509_EXTENSION_get_data(ext));
      if (method->it)
        ext_str = ASN1_item_d2i(NULL, &p, extlen,
                                ASN1_ITEM_ptr(method->it));
      else
        ext_str = method->d2i(NULL, &p, extlen);
#endif

      if (!ext_str)
        continue;

      if (method->i2s)
      {
        uint32 read_index, entry_index;
        char temp_pub_key_id[128];

        if (!(value = method->i2s(method, ext_str)))
        {
          goto err;
        }

        dbg_msg("%s: Found %s at extension %d - %s (removing colon's)\n",
                __FUNCTION__, SUBJ_KEY_ID_OBJ, i, value);

        entry_index = 0;
        memset(temp_pub_key_id, 0, sizeof(temp_pub_key_id));
        for (read_index = 0; read_index < strlen(value); read_index++)
        {
          if (value[read_index] != ':')
          {
            temp_pub_key_id[entry_index] = value[read_index];
            entry_index++;
          }
        }

        if ((uint32) pubkey_id_len <= strlen(temp_pub_key_id))
        {
          log_err(
              "%s ERROR: pubkey_id buf is too small (%d bytes but needs at least %d bytes)\n",
              __FUNCTION__, pubkey_id_len, i, value);
        }
        else
        {
          strcpy(pubkey_id, temp_pub_key_id);
          ret_val = TRUE;
          dbg_msg("%s: Set pubkey_id to %s\n", __FUNCTION__, pubkey_id);
        }
      }
    }
    err:
    dbg_msg("%s: freeing extension data\n", __FUNCTION__);
    if (value)
      OPENSSL_free(value);
    if (method)
    {
      if (method->it)
        ASN1_item_free(ext_str, ASN1_ITEM_ptr(method->it));
      else
        method->ext_free(ext_str);
    }

  }

  pubkeyid_err: if (x509)
    X509_free(x509);
  if (cert)
    BIO_free(cert);

  return ret_val;
}

#if 0
bool GetKeyKCVTempKey(BYTE *abKey, BYTE* abKCV)
{
    BYTE abInBuffer[SEMTEK_KEY_LENGTH], abOutBuffer[SEMTEK_KEY_LENGTH];
    SEMTEK_RESULT ui32Result= SEMTEK_SUCCESS;
    if (NULL==abKCV)
    {
        return SEMTEK_ENCR_ERROR_DATA;
    }

    if (NULL== abKey)
    {
        return SEMTEK_ENCR_ERROR_KEY;
    }

    memset(abInBuffer, 0, sizeof(abInBuffer));
    ui32Result= EncryptTempKey(TDES_ECB, abKey, abInBuffer, abOutBuffer);
    if (SEMTEK_SUCCESS==ui32Result)
        memcpy(abKCV, abOutBuffer, LENGTH_KCV_BUFFER);
    return ui32Result;
}
#endif


static void ReadAgentKeysToMem(void)
{
  FILE *RSAKeyFile;
  struct stat pubkey_cerfile_stat;
  char MacKeyFileName[512];
  char EncrKeyFileName[512];
  char RsaFileName[512];
  char AgentPubKeyFileName[512];

  memset(MacKeyFileName, 0, sizeof(MacKeyFileName));
  GetFileNameForInstance(MacKeyFileName, (char*) AGENT_MAC_KEY_FILE,
                         GetCurrentInstance());

  memset(EncrKeyFileName, 0, sizeof(EncrKeyFileName));
  GetFileNameForInstance(EncrKeyFileName, (char*) AGENT_ENCR_KEY_FILE,
                         GetCurrentInstance());

  memset(RsaFileName, 0, sizeof(RsaFileName));
  GetFileNameForInstance(RsaFileName, (char*) AGENT_RSA_KEY_FILE,
                         GetCurrentInstance());

  memset(AgentPubKeyFileName, 0, sizeof(AgentPubKeyFileName));
  GetFileNameForInstance(AgentPubKeyFileName, (char*) AGENT_PUB_KEY_CERTFILE,
                         GetCurrentInstance());

  /* Clear the key data first */
  pthread_mutex_lock(&securityMutex);
  memset(&VHQKeyData, 0, sizeof(VHQKeyData));

  /* Read the MAC Key from the encrypted file */
  if (cryptoRead_wrapper(MacKeyFileName, (char*) &VHQKeyData.MACKey[0],
                         sizeof(MACKey_t)))
  {
    unsigned char inblock[sizeof(MACKey_t)];
    unsigned char outblock[sizeof(MACKey_t)];

    /* Calculate the KCV */
    memset(inblock, 0, sizeof(inblock));

    if (AES(AES128E, &VHQKeyData.MACKey[0], inblock, outblock) == 0)
    {
      inblock[0] = 0x10;  // Test byte to make sure the decryption works.

      if ((AES(AES128D, &VHQKeyData.MACKey[0], outblock, inblock) == 0)
          && (memcmp(inblock, "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                     sizeof(inblock)) == 0))
      {
        memcpy(&VHQKeyData.MACKeyKcv[0], outblock, LENGTH_KCV_BUFFER);
        log_dbg("%s: MAC Key KCV = %02x%02x%02x\n", __FUNCTION__,
                VHQKeyData.MACKeyKcv[0], VHQKeyData.MACKeyKcv[1],
                VHQKeyData.MACKeyKcv[2]);
      }
    }
  }

  /* Read the Encryption Key from the encrypted file */
  if (cryptoRead_wrapper(EncrKeyFileName, (char*) &VHQKeyData.EncryptionKey[0],
                         sizeof(EncryptionKey_t)))
  {
    unsigned char inblock[sizeof(EncryptionKey_t)];
    unsigned char outblock[sizeof(EncryptionKey_t)];

    /* Calculate the KCV */
    memset(inblock, 0, sizeof(inblock));

    if (AES(AES128E, &VHQKeyData.EncryptionKey[0], inblock, outblock) == 0)
    {
      inblock[0] = 0x10;  // Test byte to make sure the decryption works.

      if ((AES(AES128D, &VHQKeyData.EncryptionKey[0], outblock, inblock) == 0)
          && (memcmp(inblock, "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                     sizeof(inblock)) == 0))
      {
        memcpy(&VHQKeyData.EncryptionKeyKcv[0], outblock, LENGTH_KCV_BUFFER);
        log_dbg("%s: Encryption Key KCV = %02x%02x%02x\n", __FUNCTION__,
                VHQKeyData.EncryptionKeyKcv[0], VHQKeyData.EncryptionKeyKcv[1],
                VHQKeyData.EncryptionKeyKcv[2]);
      }
    }
  }

  /* Now lets read the RSA Key */
  if (stat(AgentPubKeyFileName, &pubkey_cerfile_stat) == 0)
  {
    RSAKeyFile = fopen(RsaFileName, "rb+");
    if (RSAKeyFile)
    {
      bool read_error = FALSE;
      VHQKeyData.RSA_key_pair = RSA_new();
      dbg_msg("%s: Reading RSA private key from %s\n", __FUNCTION__,
              RsaFileName);
      if (PEM_read_RSAPrivateKey(RSAKeyFile, &VHQKeyData.RSA_key_pair,
                                 password_callback, NULL) == NULL)
      {
        log_err(
            "%s ERROR: Could not read the private key from file (removing files)!!!!\n",
            __FUNCTION__);
        read_error = TRUE;
        RSA_free(VHQKeyData.RSA_key_pair);
        VHQKeyData.RSA_key_pair = NULL;
      }
      fclose(RSAKeyFile);
      if (read_error)
      {
        char RsaKeyPwFileName[512];

        memset(RsaKeyPwFileName, 0, sizeof(RsaKeyPwFileName));
        GetFileNameForInstance(RsaKeyPwFileName, (char*) AGENT_RSA_KEY_PW_FILE,
                               GetCurrentInstance());

        remove(RsaKeyPwFileName);
        remove(RsaFileName);
      }
    }
    else
    {
      dbg_err("%s ERROR: Could not open the RSA Key File %s, errno = %d\n",
              __FUNCTION__, RsaFileName, errno);
    }
  }
  else
  {
    dbg_err("%s ERROR: Could not open the Agent cert %s, errno = %d\n",
            __FUNCTION__, AgentPubKeyFileName, errno);
  }

  pthread_mutex_unlock(&securityMutex);
}


static bool MACKeyExists(void)
{
  MACKey_t ZeroMACKey;

  memset(ZeroMACKey, 0, sizeof(MACKey_t));
  if (memcmp(VHQKeyData.MACKey, ZeroMACKey, sizeof(MACKey_t)) == 0)
  {
    dbg_err("%s: MAC Key is all zeros - returning FALSE\n", __FUNCTION__);
    return FALSE;
  }

  return TRUE;
}


static bool EncryptionKeyExists(void)
{
  EncryptionKey_t ZeroEncryptionKey;

  memset(ZeroEncryptionKey, 0, sizeof(EncryptionKey_t));
  if (memcmp(VHQKeyData.EncryptionKey, ZeroEncryptionKey,
             sizeof(EncryptionKey_t)) == 0)
  {
    log_err("%s: Encryption Key is all zeros - returning FALSE\n",
            __FUNCTION__);
    return FALSE;
  }

  return TRUE;
}


static bool GenerateMACKey(MACKey_t *MACKey, KCV_t *KCV)
{
  bool ret_val = FALSE;
  unsigned char inblock[sizeof(MACKey_t)];
  unsigned char outblock[sizeof(MACKey_t)];
  char MacKeyFileName[512];

  memset(MacKeyFileName, 0, sizeof(MacKeyFileName));
  GetFileNameForInstance(MacKeyFileName, (char*) AGENT_MAC_KEY_FILE,
                         GetCurrentInstance());

  /* Generate the key */
  GenerateRandom(&((*MACKey)[0]));
  GenerateRandom(&((*MACKey)[8]));
  /* Calculate the KCV */
  memset(inblock, 0, sizeof(inblock));

  if (AES(AES128E, *MACKey, inblock, outblock) == 0)
  {
    inblock[0] = 0x10;  // Test byte to make sure the decryption works.

    if ((AES(AES128D, *MACKey, outblock, inblock) == 0)
        && (memcmp(inblock, "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", sizeof(inblock))
            == 0))
    {
      memcpy((*KCV), outblock, LENGTH_KCV_BUFFER);

      /* Write the MAC Key to the encrypted file */
      dbg_msg("%s: Writing MAC Key (%d bytes) to MAC Key File\n", __FUNCTION__,
              sizeof(MACKey_t));
      if (cryptoWrite_wrapper(MacKeyFileName, (char*) &((*MACKey)[0]),
                              sizeof(MACKey_t)))
      {
        log_dbg("%s: MAC Key KCV = %02x%02x%02x\n", __FUNCTION__, (*KCV)[0],
                (*KCV)[1], (*KCV)[2]);
        ret_val = TRUE;
      }
      else
      {
        log_err("%s: Crypto Write failed\n", __FUNCTION__);
      }
    }
    else
    {
      log_err("%s: AES decryption failed\n", __FUNCTION__);
    }
  }
  else
  {
    log_err("%s: AES encryption failed\n", __FUNCTION__);
  }

  return ret_val;
}


static bool GenerateEncryptionKey(EncryptionKey_t *EncryptionKey, KCV_t *KCV)
{
  bool ret_val = TRUE;
  unsigned char inblock[sizeof(EncryptionKey_t)];
  unsigned char outblock[sizeof(EncryptionKey_t)];
  char EncrKeyFileName[512];

  memset(EncrKeyFileName, 0, sizeof(EncrKeyFileName));
  GetFileNameForInstance(EncrKeyFileName, (char*) AGENT_ENCR_KEY_FILE,
                         GetCurrentInstance());

  GenerateRandom(&((*EncryptionKey)[0]));
  GenerateRandom(&((*EncryptionKey)[8]));

  /* Calculate the KCV */
  memset(inblock, 0, sizeof(inblock));

  if (AES(AES128E, *EncryptionKey, inblock, outblock) == 0)
  {
    inblock[0] = 0x10;  // Test byte to make sure the decryption works.

    if ((AES(AES128D, *EncryptionKey, outblock, inblock) == 0)
        && (memcmp(inblock, "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", sizeof(inblock))
            == 0))
    {
      memcpy((*KCV), outblock, LENGTH_KCV_BUFFER);

      /* Write the Encryption Key to the encrypted file */
      dbg_msg("%s: Writing Encryption Key (%d bytes) to Encryption Key File\n",
              __FUNCTION__, sizeof(EncryptionKey_t));
      if (cryptoWrite_wrapper(EncrKeyFileName, (char*) &((*EncryptionKey)[0]),
                              sizeof(MACKey_t)))
      {
        log_dbg("%s: Encryption Key KCV = %02x%02x%02x\n", __FUNCTION__,
                (*KCV)[0], (*KCV)[1], (*KCV)[2]);
        ret_val = TRUE;
      }
      else
      {
        log_err("%s: Crypto Write failed\n", __FUNCTION__);
      }
    }
    else
    {
      log_err("%s: AES decryption failed\n", __FUNCTION__);
    }
  }
  else
  {
    log_err("%s: AES encryption failed\n", __FUNCTION__);
  }

  return ret_val;
}

static bool auto_info(X509_REQ *req, BIO *bio_err)
{
  char common_name[64];
  X509_NAME *subj;

  dbg_msg("%s: Getting subj\n", __FUNCTION__);
  subj = X509_REQ_get_subject_name(req);

  dbg_msg("%s: Adding Country Name\n", __FUNCTION__);
  if (!X509_NAME_add_entry_by_txt(subj, "countryName", MBSTRING_ASC,
                                  (const unsigned char*) "US", -1, -1, 0))
    return FALSE;

  dbg_msg("%s: Adding State Name\n", __FUNCTION__);
  if (!X509_NAME_add_entry_by_txt(subj, "stateOrProvinceName", MBSTRING_ASC,
                                  (const unsigned char*) "CA", -1, -1, 0))
    return FALSE;

  dbg_msg("%s: Adding locality Name\n", __FUNCTION__);
  if (!X509_NAME_add_entry_by_txt(subj, "localityName", MBSTRING_ASC,
                                  (const unsigned char*) "San Diego", -1, -1,
                                  0))
    return FALSE;

  dbg_msg("%s: Adding Organization Name\n", __FUNCTION__);
  if (!X509_NAME_add_entry_by_txt(subj, "organizationName", MBSTRING_ASC,
                                  (const unsigned char*) "Verifone, Inc.", -1,
                                  -1, 0))
    return FALSE;

  dbg_msg("%s: Adding Organization Unit Name\n", __FUNCTION__);
  if (!X509_NAME_add_entry_by_txt(subj, "organizationalUnitName", MBSTRING_ASC,
                                  (const unsigned char*) "VHQ", -1, -1, 0))
    return FALSE;

  GetCommonName(common_name, sizeof(common_name));
  dbg_msg("%s: Adding Common Name - %s\n", __FUNCTION__, common_name);
  if (!X509_NAME_add_entry_by_txt(subj, "commonName", MBSTRING_ASC,
                                  (const unsigned char*) common_name, -1, -1,
                                  0))
    return FALSE;

  dbg_msg("%s: Adding email Address\n", __FUNCTION__);
  if (!X509_NAME_add_entry_by_txt(
      subj, "emailAddress", MBSTRING_ASC,
      (const unsigned char*) "VHQAgentKeyCert@verifone.com", -1, -1, 0))
    return FALSE;

  dbg_msg("%s: Checking entry count\n", __FUNCTION__);
  if (!X509_NAME_entry_count(subj))
  {
    BIO_printf(bio_err, "error, no objects specified in config file\n");
    return FALSE;
  }

  dbg_msg("%s: returning TRUE\n", __FUNCTION__);
  return TRUE;
}

static bool make_REQ(X509_REQ *req, EVP_PKEY *pkey, BIO *bio_err)
{
  bool ret = FALSE;

  /* setup version number */
  dbg_msg("%s: Setting X509 REQ version\n", __FUNCTION__);
  if (!X509_REQ_set_version(req, 0L))
    goto err;
  /* version 1 */

  dbg_msg("%s: calling auto_info()\n", __FUNCTION__);
  ret = auto_info(req, bio_err);
  if (!ret)
    goto err;

  dbg_msg("%s: calling X509_REQ_set_pubkey()\n", __FUNCTION__);
  if (!X509_REQ_set_pubkey(req, pkey))
  {
    log_err("%s ERROR: X509_REQ_set_pubkey() FAILED!\n", __FUNCTION__);
    goto err;
  }

  dbg_msg("%s SUCCESSFUL - returning TRUE\n", __FUNCTION__);
  return (TRUE);

  err:
  log_err("%s FAILED - returning FALSE\n", __FUNCTION__);
  return (FALSE);
}

int rand_serial(BIGNUM *b, ASN1_INTEGER *ai)
{
  BIGNUM *btmp;
  int ret = 0;
  if (b)
    btmp = b;
  else
    btmp = BN_new();

  if (!btmp)
    return 0;

  if (!BN_pseudo_rand(btmp, 64, 0, 0))
    goto error;
  if (ai && !BN_to_ASN1_INTEGER(btmp, ai))
    goto error;

  ret = 1;

  error:

  if (!b)
    BN_free(btmp);

  return ret;
}

#define JULY_30_2012    1343606400

static bool create_cert(X509 *x509ss, X509_REQ *req, EVP_PKEY *pkey, BIO *out,
                        BIO *bio_err)
{
  long errline;
  EVP_PKEY *tmppkey;
#if USE_X509_V3_EXTENSIONS
  char openssl_cfg_file[512];
  int load_ret;
  X509V3_CTX ext_ctx;
  char *extensions = NULL;
  char AgentPubKeyFileName[512];
  CONF *req_conf = NCONF_new(NULL);

  /* Need to return as False to avoid null value of req_conf usage in other functions */
  if (req_conf == NULL)
  {
    dbg_err("%s: NCONF_new return NULL\n", __FUNCTION__);
    goto end;
  }

  memset(AgentPubKeyFileName, 0, sizeof(AgentPubKeyFileName));
  GetFileNameForInstance(AgentPubKeyFileName, (char*) AGENT_PUB_KEY_CERTFILE,
                         GetCurrentInstance());

  memset(openssl_cfg_file, 0, sizeof(openssl_cfg_file));
  strcpy(openssl_cfg_file, CONFFileName);

  dbg_msg("%s: Loading openssl config file %s (req_conf = 0x%08x)\n",
          __FUNCTION__, openssl_cfg_file, req_conf);
  errline = 0;
  load_ret = NCONF_load(req_conf, openssl_cfg_file, &errline);
  dbg_msg("%s: NCONF_load() returned %d - errline = %d\n", __FUNCTION__,
          load_ret, errline);
  if (load_ret < 0)
  {
    if (errline <= 0)
      dbg_err("wrong config format");
    else
      dbg_err("error in line %d", errline);
  }
#endif

  if ((x509ss = X509_new()) == NULL)
    goto end;

  /* Set version to V3 */
  if (!X509_set_version(x509ss, 2))
    goto end;

  dbg_msg("%s: creating random serial number\n", __FUNCTION__);
  if (!rand_serial(NULL, X509_get_serialNumber(x509ss)))
    goto end;

  dbg_msg("%s: Setting issuer name\n", __FUNCTION__);
  if (!X509_set_issuer_name(x509ss, X509_REQ_get_subject_name(req)))
    goto end;
  dbg_msg("%s: Setting cert begin time: offset to July 30 2012 = %d\n",
          __FUNCTION__, JULY_30_2012 - linux_time(NULL));
  if (!X509_gmtime_adj(X509_get_notBefore(x509ss),
                       JULY_30_2012 - linux_time(NULL)))
    goto end;
  dbg_msg("%s: Setting cert expiration time\n", __FUNCTION__);
  if (!X509_gmtime_adj(X509_get_notAfter(x509ss), (long) 60 * 60 * 24 * 3652))
    goto end;
  dbg_msg("%s: Setting subject name\n", __FUNCTION__);
  if (!X509_set_subject_name(x509ss, X509_REQ_get_subject_name(req)))
    goto end;
  tmppkey = X509_REQ_get_pubkey(req);
  if (!tmppkey || !X509_set_pubkey(x509ss, tmppkey))
    goto end;
  EVP_PKEY_free(tmppkey);

#if USE_X509_V3_EXTENSIONS
  dbg_msg("%s: Setting up V3 extensions\n", __FUNCTION__);
  if (!extensions)
  {
    dbg_msg("%s: Reading x509_extensions from %s (req_conf = 0x%08x)\n",
            __FUNCTION__, openssl_cfg_file, req_conf);
    extensions = NCONF_get_string(req_conf, "req", "x509_extensions");
    if (extensions)
      dbg_msg("%s: Read x509_extensions - %s\n", __FUNCTION__, extensions);
    else
      dbg_err("%s: ERROR reading x509_extensions\n", __FUNCTION__);
    if (!extensions)
      ERR_clear_error();
  }
  if (extensions)
  {
    /* Check syntax of file */
    X509V3_CTX ctx;
    X509V3_set_ctx_test(&ctx);
    X509V3_set_nconf(&ctx, req_conf);
    if (!X509V3_EXT_add_nconf(req_conf, &ctx, extensions, NULL))
    {
      BIO_printf(bio_err, "%s: Error Loading extension section %s\n",
                 __FUNCTION__, extensions);
      goto end;
    }
  }

  /* Set up V3 context struct */
  X509V3_set_ctx(&ext_ctx, x509ss, x509ss, NULL, NULL, 0);
  X509V3_set_nconf(&ext_ctx, req_conf);

  /* Add extensions */
  if (!X509V3_EXT_add_nconf(req_conf, &ext_ctx, extensions, x509ss))
  {
    BIO_printf(bio_err, "Error Loading extension section %s\n", extensions);
    goto end;
  }

  if (req_conf)
    NCONF_free(req_conf);
#endif

  dbg_msg("%s: Signing certificate\n", __FUNCTION__);
  if (!X509_sign(x509ss, pkey, EVP_get_digestbyname("sha256")))
  {
    ERR_print_errors(bio_err);
    goto end;
  }

  dbg_msg("%s: Setting output filename to %s\n", __FUNCTION__,
          AgentPubKeyFileName);
  if (!BIO_write_filename(out, AgentPubKeyFileName))
  {
    BIO_printf(bio_err, "unable to write outfile\n");
    goto end;
  }

#if 0
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Printing certificate data\n", __FUNCTION__);
    X509_print_ex(bio_err, x509ss, 0 /* nmflag */, 0 /* reqflag */);
#endif

  dbg_msg("%s: Writing certificate to %s\n", __FUNCTION__, AgentPubKeyFileName);
  if (!PEM_write_bio_X509(out, x509ss))
  {
    BIO_printf(bio_err, "unable to write X509 certificate\n");
    goto end;
  }

  return TRUE;

  end: return FALSE;
}

static bool GenerateCert(void)
{
  bool ret;
  X509 *x509ss = NULL;
  X509_REQ *req = NULL;
  EVP_PKEY *pkey = NULL;
#if 0
    BIO* key = NULL;
#endif
  BIO *out = NULL;
  BIO *bio_err = NULL;
  int ver_cert;
  char AgentPubKeyFileName[512];

  memset(AgentPubKeyFileName, 0, sizeof(AgentPubKeyFileName));
  GetFileNameForInstance(AgentPubKeyFileName, (char*) AGENT_PUB_KEY_CERTFILE,
                         GetCurrentInstance());

  if (bio_err == NULL)
    if ((bio_err = BIO_new(BIO_s_file())) != NULL)
      BIO_set_fp(bio_err, stderr, BIO_NOCLOSE|BIO_FP_TEXT);

  out = BIO_new(BIO_s_file());

  /* Generate the certificate from the RSA key pair that is already in memory.
   Don't use the one stored in AGENT_RSA_KEY_FILE because there will be problems
   with password_callback if the device has been tampered. */
#if 0
    key=BIO_new(BIO_s_file());

    if (key == NULL)
    {
        ERR_print_errors(bio_err);
        goto cleanup;
    }
    if (BIO_read_filename(key, RsaFileName) <= 0)
    {
        BIO_printf(bio_err, "%s: Error reading private key file %s\n", __FUNCTION__, RsaFileName);
        ERR_print_errors(bio_err);
        goto cleanup;
    }

    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading private key\n", __FUNCTION__);
    pkey = PEM_read_bio_PrivateKey(key, NULL, password_callback, NULL);
#else
  pkey = EVP_PKEY_new();
  if (EVP_PKEY_set1_RSA(pkey, VHQKeyData.RSA_key_pair) != 1)
  {
    log_err("%s ERROR: Could not get EVP_PKEY from RSA_key_pair\n",
            __FUNCTION__);
    pkey = NULL;
    goto cleanup;
  }
#endif

  if (!pkey)
  {
    log_err("%s ERROR: Could not read private key\n", __FUNCTION__);
    goto cleanup;
  }

  req = X509_REQ_new();
  if (req == NULL)
  {
    dbg_err("%s ERROR: Could not create REQ\n", __FUNCTION__);
    goto cleanup;
  }

  dbg_msg("%s: Making certificate request\n", __FUNCTION__);
  ret = make_REQ(req, pkey, bio_err);

  if (!ret)
  {
    BIO_printf(bio_err, "%s: problems making Certificate Request\n\n\n\n",
               __FUNCTION__);
    goto cleanup;
  }

  dbg_msg("%s: calling create_cert()\n", __FUNCTION__);
  ret = create_cert(x509ss, req, pkey, out, bio_err);

  if (ret)
  {
    dbg_msg("%s: Certificate created successfully - freeing all variables\n",
            __FUNCTION__);
  }
  else
    log_err("%s ERROR: Certificate creation FAILURE!!!!\n", __FUNCTION__);

  BIO_free_all(out);
  EVP_PKEY_free(pkey);
  X509_REQ_free(req);
  X509_free(x509ss);

#if VALIDATE_AGENT_PUB_KEY_CERTFILE
  if (ret)
  {
    X509 *x = NULL;
    BIO *cert = NULL;

    dbg_msg("%s: Reading certificate to verify it\n", __FUNCTION__);
    if ((cert = BIO_new(BIO_s_file())) == NULL)
    {
      ERR_print_errors(bio_err);
      goto verify_end;
    }

    if (BIO_read_filename(cert, AgentPubKeyFileName) <= 0)
    {
      BIO_printf(bio_err, "%s: Error reading from %s\n", __FUNCTION__,
                 AgentPubKeyFileName);
      ERR_print_errors(bio_err);
      goto verify_end;
    }

    x = PEM_read_bio_X509_AUX(cert, NULL,
                              NULL /*(pem_password_cb *)password_callback */,
                              NULL);

    verify_end: if (x == NULL)
    {
      BIO_printf(bio_err, "%s ERROR: unable to load certificate from %s\n",
                 __FUNCTION__, AgentPubKeyFileName);
      ERR_print_errors(bio_err);
    }
    else
    {
      X509_free(x);
    }

    if (cert != NULL)
      BIO_free(cert);
  }
#endif

  BIO_free(bio_err);

  ver_cert = VerifyCert(AgentPubKeyFileName);

  if (ver_cert != 0)
  {
    log_err("%s: VerifyCert(%s) failed with error %d\n", __FUNCTION__,
            AgentPubKeyFileName, ver_cert);
    ret = FALSE;
  }
  else
  {
    dbg_msg("%s: VerifyCert(%s) SUCCESSFUL\n", __FUNCTION__,
            AgentPubKeyFileName);
    ret = TRUE;
  }

  return ret;

  cleanup:

  BIO_free(bio_err);
  BIO_free_all(out);
  EVP_PKEY_free(pkey);
  X509_REQ_free(req);
  X509_free(x509ss);
  return FALSE;
}


static bool GenerateRSAKeyPair(RSA **RSA_key_pair, bool force_generation)
{
  bool ret_val = FALSE;
  char RsaFileName[512];
  char RsaKeyPwFileName[512];
  char AgentPubKeyFileName[512];

  memset(RsaFileName, 0, sizeof(RsaFileName));
  GetFileNameForInstance(RsaFileName, (char*) AGENT_RSA_KEY_FILE,
                         GetCurrentInstance());

  memset(RsaKeyPwFileName, 0, sizeof(RsaKeyPwFileName));
  GetFileNameForInstance(RsaKeyPwFileName, (char*) AGENT_RSA_KEY_PW_FILE,
                         GetCurrentInstance());

  memset(AgentPubKeyFileName, 0, sizeof(AgentPubKeyFileName));
  GetFileNameForInstance(AgentPubKeyFileName, (char*) AGENT_PUB_KEY_CERTFILE,
                         GetCurrentInstance());

  /* If we already have the RSA Key Pair files, we don't need to generate them again
   unless the forced option is set */
  if (!force_generation)
  {
    struct stat file_stat;

    if (stat(AgentPubKeyFileName, &file_stat) == 0)
    {
      if (stat(RsaFileName, &file_stat) == 0)
      {
        if (stat(RsaKeyPwFileName, &file_stat) == 0)
        {
          dbg_msg(
              "%s: all rsa key files exist - no need to create RSA key pair again\n",
              __FUNCTION__);
          return TRUE;
        }
      }
    }
  }

  dbg_msg("%s: Generating RSA key pair...\n", __FUNCTION__);
  *RSA_key_pair = RSA_generate_key(2048, 65537, NULL, NULL);

  if (*RSA_key_pair == NULL)
  {
    log_err("%s ERROR: Could not generate RSA key pair!!!!!!!\n", __FUNCTION__);
  }
  else
  {
    FILE *priv_key_file = NULL;
    errno = 0;
    priv_key_file = fopen(RsaFileName, "wb+");

    dbg_msg("%s: Generated RSA key pair - size = %d bits\n", __FUNCTION__,
            RSA_size(*RSA_key_pair) * 8);

    /* Store the key in the file first */
    if (priv_key_file != NULL)
    {
      PEM_write_RSAPrivateKey(priv_key_file, *RSA_key_pair, EVP_aes_128_cbc(),
                              NULL, 0, password_callback, NULL);
      fclose(priv_key_file);

      /* We can generate the certificate from the private key file */
      dbg_msg("%s: Generating RSA Public Key Certificate\n", __FUNCTION__);
      ret_val = GenerateCert();
    }
  }

  return ret_val;
}


bool AgentKeysExist(void)
{
  bool ret_val = TRUE;
  pthread_mutex_lock(&securityMutex);
  if (VHQKeyData.RSA_key_pair == NULL || !MACKeyExists()
      || !EncryptionKeyExists())
  {
    ret_val = FALSE;
  }

  pthread_mutex_unlock(&securityMutex);
  return ret_val;
}


int ReadPubKeyCertfile(char **CertFile)
{
  int ret_val = 0;
  struct stat pub_key_certfile_stat;
  FILE *pub_key_certfile;
  char AgentPubKeyFileName[512];

  memset(AgentPubKeyFileName, 0, sizeof(AgentPubKeyFileName));
  GetFileNameForInstance(AgentPubKeyFileName, (char*) AGENT_PUB_KEY_CERTFILE,
                         GetCurrentInstance());

  /* Get the public key certificate */

  /* Read the certfile into memory */
  if (stat(AgentPubKeyFileName, &pub_key_certfile_stat) == 0)
  {
    ret_val = -1;
    *CertFile = (char*) malloc(pub_key_certfile_stat.st_size + 1);
    if (*CertFile)
    {
      memset(*CertFile, 0, pub_key_certfile_stat.st_size + 1);
      pub_key_certfile = fopen(AgentPubKeyFileName, "rb+");

      if (pub_key_certfile)
      {
        ret_val = fread(*CertFile, 1, pub_key_certfile_stat.st_size,
                        pub_key_certfile);
        fclose(pub_key_certfile);
      }
    }

  }
  return ret_val;
}

#define SHA256_SIGNATURE    1


bool EncryptAgentKeys(int flen, char *input, char *output, char *signature)
{
  bool ret_val = FALSE;
  RSA *srv_rsa_pub_key;
  EVP_PKEY *srv_pub_key = NULL;
  FILE *encr_keyfile;
  FILE *keysig_file;
  int bytes_to_encr = flen;
  int msglen;
  int output_len;
  int bin_output_len;
  int rsa_size;
  unsigned int siglen;
  BIO *b64;
  BIO *bp;
  X509 *srv_x509 = NULL;
  BIO *srv_cert = NULL;
  struct stat encr_keyfile_stat;
  struct stat keysig_stat;
  static unsigned char bin_output[256];
  static unsigned char bin_signature[256];
#if SHA256_SIGNATURE
  static unsigned char digest[SHA256_DIGEST_LENGTH];
#else
    unsigned char digest[SHA_DIGEST_LENGTH];
#endif
  char SrvPubKeyFileName[512];

  bin_output_len = sizeof(bin_output);

  memset(SrvPubKeyFileName, 0, sizeof(SrvPubKeyFileName));
  GetFileNameForInstance(SrvPubKeyFileName, (char*) SRV_PUB_KEY_CERTFILE,
                         GetCurrentInstance());

  dbg_msg("%s: Reading server public key from certificate\n", __FUNCTION__);
  if ((srv_cert = BIO_new(BIO_s_file())) == NULL)
  {
    dbg_err("%s: Could not create cert BIO\n", __FUNCTION__);
    return FALSE;
  }

  if (BIO_read_filename(srv_cert, SrvPubKeyFileName) <= 0)
  {
    dbg_err("%s: Error reading server cert from %s\n", __FUNCTION__,
            SrvPubKeyFileName);
    BIO_free(srv_cert);
    return FALSE;
  }

  srv_x509 = PEM_read_bio_X509_AUX(srv_cert, NULL, NULL, NULL);

  if (srv_x509 == NULL)
  {
    log_err("%s ERROR: unable to load server certificate from %s\n",
            __FUNCTION__, SrvPubKeyFileName);
    BIO_free(srv_cert);
    return FALSE;
  }
  else
  {
    dbg_notice("%s: Loaded certificate SUCCESSFULLY!!!\n", __FUNCTION__);

    srv_pub_key = X509_get_pubkey(srv_x509);
    if (!srv_pub_key)
    {
      log_err("%s ERROR: Could not get pub key from server cert!!!\n",
              __FUNCTION__);
      return FALSE;
    }
    dbg_notice("%s: Loaded server public key SUCCESSFULLY!!!\n", __FUNCTION__);

    X509_free(srv_x509);
  }

  if (srv_cert != NULL)
    BIO_free(srv_cert);

  srv_rsa_pub_key = EVP_PKEY_get1_RSA(srv_pub_key);
  EVP_PKEY_free(srv_pub_key);

  rsa_size = RSA_size(srv_rsa_pub_key);

  if ((bytes_to_encr >= bin_output_len) || (rsa_size > bin_output_len))
  {
    RSA_free(srv_rsa_pub_key);
    dbg_err(
        "%s ERROR: Encryption length of %d or RSA pub key %d is greater than RSA 2048 encr block\n",
        __FUNCTION__, flen, rsa_size);
    return FALSE;
  }
  else
    memset(bin_output, 0, sizeof(bin_output));

  b64 = BIO_new(BIO_f_base64());
  bp = BIO_new_file(ENCR_KEYS_FILE, "wb+");
  bp = BIO_push(b64, bp);

  dbg_msg("%s: Encrypting %d bytes with RSA_size %d bytes server public key\n",
          __FUNCTION__, bytes_to_encr, RSA_size(srv_rsa_pub_key));

  output_len = 0;
  while (bytes_to_encr > 0)
  {
    int encr_len;

    if (bytes_to_encr < (rsa_size - 41)) /* 41 bytes because we are using RSA_PKCS1_OAEP_PADDING */
      encr_len = bytes_to_encr;
    else
      encr_len = (rsa_size - 41 - 1);

    dbg_msg("%s: Encrypting %d bytes with RSA_public_encrypt()\n", __FUNCTION__,
            encr_len);

    /* Check if we have enough room in the bin_output for remaining data to be encrypted */
    if (rsa_size <= (bin_output_len - output_len))
    {
      msglen = RSA_public_encrypt(encr_len,
                                  (unsigned char*) &input[flen - bytes_to_encr],
                                  &bin_output[output_len], srv_rsa_pub_key,
                                  RSA_PKCS1_OAEP_PADDING);
    }
    else
    {
      /* Partial data was encrypted, insufficient memory */
      BIO_flush(bp);
      BIO_free_all(bp);

      RSA_free(srv_rsa_pub_key);

      log_err("%s ERROR: Insufficient encryption output block\n", __FUNCTION__);
      return FALSE;
    }

    BIO_write(bp, &bin_output[flen - bytes_to_encr], msglen);

    dbg_msg("\t\tOutput is %d bytes\n", msglen);
    DebugMsgBuffer("\toutput", (const char*) &bin_output[output_len], msglen,
                   BUF_TYPE_HEX);
    bytes_to_encr -= encr_len;
    output_len += msglen;
  }

  BIO_flush(bp);
  BIO_free_all(bp);

  /* Free the server public key now */
  RSA_free(srv_rsa_pub_key);

  if (output)
  {
    /* Read the certfile into memory */
    if (stat(ENCR_KEYS_FILE, &encr_keyfile_stat) == 0)
    {
      encr_keyfile = fopen(ENCR_KEYS_FILE, "rb+");

      if (encr_keyfile)
      {
        int res;
        res = fread(output, encr_keyfile_stat.st_size, 1, encr_keyfile);
        if (res < encr_keyfile_stat.st_size && ferror(encr_keyfile))
          dbg_err("%s ERROR: Could not read from %s\n", __FUNCTION__,
                  ENCR_KEYS_FILE);

        fclose(encr_keyfile);
        ret_val = TRUE;
      }
    }
  }
  remove(ENCR_KEYS_FILE);

  dbg_msg(
      "%s: Creating SHA of EncryptedAgentKeys Element data (length = %d):\n",
      __FUNCTION__, output_len);
  DebugMsgBuffer("\t", (const char*) bin_output, output_len, BUF_TYPE_HEX);

  /* Generate the SHA digest of the output */
#if SHA256_SIGNATURE
  if (SHA256(bin_output, output_len, digest) == NULL)
#else
    if (SHA1(SHA1ALL, bin_output, output_len, digest) != 0)
#endif
  {
    dbg_err("%s ERROR: Could not calculate SHA digest\n", __FUNCTION__);
    return FALSE;
  }

  dbg_msg("%s: Signing digest (%d bytes) with private key\n", __FUNCTION__,
          sizeof(digest));
  DebugMsgBuffer("\tDigest", (const char*) digest, sizeof(digest),
                 BUF_TYPE_HEX);

  dbg_msg("%s: ...Done\r\n", __FUNCTION__);
  siglen = sizeof(bin_signature);

  dbg_msg("%s: Calling RSA_sign with %d, %x, %d, %x, %x\r\n", __FUNCTION__,
          NID_sha256, digest, sizeof(digest), bin_signature, &siglen);
  pthread_mutex_lock(&securityMutex);
  if (VHQKeyData.RSA_key_pair
      && RSA_sign(NID_sha256, digest, sizeof(digest), bin_signature, &siglen,
               VHQKeyData.RSA_key_pair) != 1)
  {
    dbg_err("%s ERROR: Could not sign digest\n", __FUNCTION__);
    pthread_mutex_unlock(&securityMutex);
    return FALSE;
  }
  pthread_mutex_unlock(&securityMutex);
  dbg_msg("%s: RSA sign Done\r\n", __FUNCTION__);
  b64 = BIO_new(BIO_f_base64());
  bp = BIO_new_file(KEY_SIG_FILE, "wb+");
  bp = BIO_push(b64, bp);

  BIO_write(bp, &bin_signature, siglen);

  DebugMsgBuffer("\tSignature", (const char*) bin_signature, siglen,
                 BUF_TYPE_HEX);

  BIO_flush(bp);
  BIO_free_all(bp);

  ret_val = TRUE;
  if (signature)
  {
    /* Read the certfile into memory */
    if (stat(KEY_SIG_FILE, &keysig_stat) == 0)
    {
      keysig_file = fopen(KEY_SIG_FILE, "rb+");

      if (keysig_file)
      {
        int res;
        res = fread(signature, keysig_stat.st_size, 1, keysig_file);
        if (res < keysig_stat.st_size && ferror(keysig_file))
          DebugMsg(VHQ_LOGGING_LEVEL_ERROR,
                   "%s ERROR: Could not read from %s\n", __FUNCTION__,
                   KEY_SIG_FILE);
        fclose(keysig_file);
      }
      else
        ret_val = FALSE;

      remove(KEY_SIG_FILE);
    }
  }

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}


vhq_result_t GenerateAgentKeys(char *CertFile)
{
  bool ret_val = VHQ_KEYGEN_FAILURE;

  /* If we don't have the Server's public key, we can't generate keys */
  if (FileExists(CertFile))
  {
    bool MAC_ret_val = FALSE;
    bool EncrKey_ret_val = FALSE;
    bool RSA_ret_val = FALSE;

    pthread_mutex_lock(&securityMutex);
    int ver_cert = VerifyServerCert(CertFile);

    if (ver_cert != 0)
    {
      if (ver_cert == X509_V_ERR_CERT_HAS_EXPIRED)
      {
        log_err("%s ERROR: Pub key Certificate expired \n", __FUNCTION__);
        return VHQ_PUB_KEY_CERT_EXPIRY;
      }
      else
      {
        dbg_err("%s ERROR: VerifyCert failed with error %d\n", __FUNCTION__,
                ver_cert);
      }
      pthread_mutex_unlock(&securityMutex);
      return VHQ_KEYGEN_FAILURE;
    }
    else
      dbg_msg("%s: VerifyCert SUCCESSFUL\n", __FUNCTION__);

    MAC_ret_val = GenerateMACKey(&VHQKeyData.MACKey, &VHQKeyData.MACKeyKcv);

    EncrKey_ret_val = GenerateEncryptionKey(&VHQKeyData.EncryptionKey,
                                            &VHQKeyData.EncryptionKeyKcv);

    RSA_ret_val = GenerateRSAKeyPair(&VHQKeyData.RSA_key_pair, FALSE);

    if (MAC_ret_val && EncrKey_ret_val && RSA_ret_val)
    {
      dbg_msg(
          "%s: MAC_ret_val && EncrKey_ret_val && RSA_ret_val all non-zero\n",
          __FUNCTION__);
      ret_val = VHQ_SUCCESS;
    }
    else
    {
      /* Remove any existing keys and files, no need to clear events table */
      writeHbResult("ERROR generating agent keys\n");
      RemoveAgentKeys();
    }
  }
  else
  {
    writeHbResult("Server Cert Missing\n");
    log_err(
        "%s: Can not generate keys because Server Certfile is missing\n",
            __FUNCTION__);
  }
  pthread_mutex_unlock(&securityMutex);
  return ret_val;
}


void RemoveAgentKeys(void)
{
  char FileName[512];

  log_alert("%s: remove keys\n", __FUNCTION__);
  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_MAC_KEY_FILE,
                         GetCurrentInstance());
  remove(FileName);

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_ENCR_KEY_FILE,
                         GetCurrentInstance());
  remove(FileName);

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_PUB_KEY_CERTFILE,
                         GetCurrentInstance());
  remove(FileName);

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_RSA_KEY_FILE,
                         GetCurrentInstance());
  remove(FileName);

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_RSA_KEY_PW_FILE,
                         GetCurrentInstance());
  remove(FileName);

  pthread_mutex_lock(&securityMutex);
  /* Free the RSA key */
  if (VHQKeyData.RSA_key_pair)
  {
    RSA_free(VHQKeyData.RSA_key_pair);
    VHQKeyData.RSA_key_pair = NULL;
  }

  /* Clear the key data from RAM */
  memset(&VHQKeyData, 0, sizeof(VHQKeyData));
  pthread_mutex_unlock(&securityMutex);
}


void VHQSecurityInit(void)
{
  /* Let's delete the keys if we have been tampered with */
  if (isAttacked())
  {
    char FileName[512];

    log_crit("%s: Device Tampered - Removing Agent Keys\n", __FUNCTION__);
    /* Delete our key files */
    memset(FileName, 0, sizeof(FileName));
    GetFileNameForInstance(FileName, (char*) AGENT_MAC_KEY_FILE,
                           GetCurrentInstance());
    remove(FileName);

    memset(FileName, 0, sizeof(FileName));
    GetFileNameForInstance(FileName, (char*) AGENT_ENCR_KEY_FILE,
                           GetCurrentInstance());
    remove(FileName);

    memset(FileName, 0, sizeof(FileName));
    GetFileNameForInstance(FileName, (char*) AGENT_PUB_KEY_CERTFILE,
                           GetCurrentInstance());
    remove(FileName);

    memset(FileName, 0, sizeof(FileName));
    GetFileNameForInstance(FileName, (char*) AGENT_RSA_KEY_FILE,
                           GetCurrentInstance());
    remove(FileName);

    memset(FileName, 0, sizeof(FileName));
    GetFileNameForInstance(FileName, (char*) AGENT_RSA_KEY_PW_FILE,
                           GetCurrentInstance());
    remove(FileName);

    /* Set KeysExchanged to FALSE */
    VHQSetParameterBool(PARAM_KEYS_EXCHANGED, FALSE, TRUE);
  }

  ReadAgentKeysToMem();

#if 0
    CMAC_MODULE_TEST();
#endif
}


void VHQSecurityReloadKeys(void)
{
  ReadAgentKeysToMem();
}


bool VHQSecurityGenSig(unsigned char *data_p, int data_len,
                       unsigned char *sigbuf, int sigbuf_size)
{

  /* Make sure data length is valid */
  if (data_len <= 0)
  {
    dbg_err("%s ERROR: invalid data length %d\n", __FUNCTION__, data_len);
    return FALSE;
  }

  /* Make sure the signature buffer is large enough */
  if (sigbuf_size < SIGNATURE_LENGTH)
  {
    dbg_err("%s ERROR: sigbuf size %d is less than %d\n", __FUNCTION__,
            sigbuf_size, SIGNATURE_LENGTH);
    return FALSE;
  }

#if DEBUG_AES_CMAC
    DebugMsgBuffer("\n\n\n\n\n\tMAC Key", VHQKeyData.MACKey, sizeof(VHQKeyData.MACKey), BUF_TYPE_HEX);
    DebugMsgBuffer("\tAES-CMAC Buffer", data_p, data_len, BUF_TYPE_CHAR);
    DebugMsgBuffer("\tAES-CMAC Buffer", data_p, data_len, BUF_TYPE_HEX);
#endif

  AES_CMAC(VHQKeyData.MACKey, data_p, data_len, sigbuf);

#if DEBUG_AES_CMAC
    DebugMsgBuffer("\tAES-CMAC", sigbuf, SIGNATURE_LENGTH, BUF_TYPE_HEX);
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "\n\n\n\n");
#endif

  return TRUE;
}


bool VHQSecurtiyVerifySignatureKey(char *signing_key_id)
{
  char MACKeyKCVStr[SIGNATURE_KEY_ID_LEN + 1];

  memset(MACKeyKCVStr, 0, sizeof(MACKeyKCVStr));

  sprintf(MACKeyKCVStr, "%02X%02X%02X", VHQKeyData.MACKeyKcv[0],
          VHQKeyData.MACKeyKcv[1], VHQKeyData.MACKeyKcv[2]);

  if (strlen(signing_key_id) != SIGNATURE_KEY_ID_LEN)
  {
    log_err(
        "%s ERROR: signing key ID length invalid - is %d bytes, expected %d bytes\n",
        __FUNCTION__, strlen(signing_key_id), SIGNATURE_KEY_ID_LEN);
    return FALSE;
  }

  if (strcmp(signing_key_id, MACKeyKCVStr) != 0)
  {
    log_err("%s ERROR: Signing Key Mismatch\n", __FUNCTION__);
    dbg_msg("\t\t\tReceived: %s\n", signing_key_id);
    dbg_msg("\t\t\tExpected: %s\n", MACKeyKCVStr);
    return FALSE;
  }
  else
  {
    return TRUE;
  }
}


bool VHQSecurtiyGetSignatureKeyID(char *signing_key_id, int signing_key_id_len)
{
  memset(signing_key_id, 0, signing_key_id_len);

  if (signing_key_id_len <= SIGNATURE_KEY_ID_LEN)
  {
    log_err(
        "%s ERROR: signing key ID length invalid - is %d bytes, expected at least %d bytes\n",
        __FUNCTION__, signing_key_id_len, SIGNATURE_KEY_ID_LEN + 1);
    return FALSE;
  }

  sprintf(signing_key_id, "%02X%02X%02X", VHQKeyData.MACKeyKcv[0],
          VHQKeyData.MACKeyKcv[1], VHQKeyData.MACKeyKcv[2]);
  return TRUE;

}

/* Only allocate 1 MB max and do the SHA in chunks */
#define MAX_MALLOC_SIZE             (1024 * 1024)


void VHQSecurityCalculateFileHash(const char *pszFileName,
                                  dl_file_hash_algo_t eHashAlgo,
                                  unsigned char *pszFileHash,
                                  int pszFileHashSize, int *genHashLen)
{
  int malloc_size;
  struct stat file_stat;

  if (genHashLen)
    *genHashLen = 0;

  if ((pszFileName == NULL) || (pszFileHash == NULL) || (pszFileHashSize <= 0))
  {
    log_err(
        "%s ERROR: Invalid INPUT - pszFileName=0x%08x, pszFileHash = 0x%08x, pszFileHashSize=%d",
        __FUNCTION__, pszFileName, pszFileHash, pszFileHashSize);
    return;
  }

  /* Clear the output buffer now we know it is valid */
  memset(pszFileHash, 0, pszFileHashSize);

  if (eHashAlgo != DL_FILE_HASH_ALGO_SHA_256)
  {
    log_err(
        "%s ERROR: Invalid Hash Algorithm (%d) - only SHA-256 (%d) is supported",
        __FUNCTION__, eHashAlgo, DL_FILE_HASH_ALGO_SHA_256);
    return;
  }

  /* Make sure hash buffer is large enough */
  if (pszFileHashSize < SHA256_DIGEST_LENGTH)
  {
    log_err(
        "%s ERROR: Hash buffer size %d bytes is not large engough - needs to be at least %d bytes",
        __FUNCTION__, pszFileHashSize, SHA256_DIGEST_LENGTH);
    return;
  }

  dbg_msg("%s: Calling stat(%s)\n", __FUNCTION__, pszFileName);
  if (stat(pszFileName, &file_stat) == 0)
  {
    unsigned char *data_buf = NULL;
    SHA256_CTX sha_ctx;

    dbg_msg("%s: size is %d bytes, mode: %x, UID: %x\n", __FUNCTION__,
            file_stat.st_size, file_stat.st_mode, file_stat.st_uid);

    if (file_stat.st_size > MAX_MALLOC_SIZE)
      malloc_size = MAX_MALLOC_SIZE;
    else
      malloc_size = file_stat.st_size;
    dbg_msg("%s: size is %d bytes, mallocing %d\n", __FUNCTION__,
            file_stat.st_size, malloc_size);

    data_buf = malloc(malloc_size);
    dbg_msg("%s: mallocing %d bytes returned 0x%08x\n", __FUNCTION__,
            file_stat.st_size, data_buf);
    if (data_buf)
    {
      FILE *filep;
      int bytes_read, bytes_shad;

      filep = fopen(pszFileName, "r");
      if (filep != NULL)
      {

        switch (eHashAlgo)
        {
          case DL_FILE_HASH_ALGO_SHA_256:
            if (genHashLen)
              *genHashLen = SHA256_DIGEST_LENGTH;
            if (SHA256_Init(&sha_ctx) != 1)
            {
              log_err(
                  "%s ERROR: Could not calculate SHA digest - SHA256_Init() FAILED\n",
                  __FUNCTION__);
            }
            bytes_shad = 0;
            while (bytes_shad < file_stat.st_size)
            {
              int bytes_to_read = file_stat.st_size - bytes_shad;

              /* If we can read the rest of the file do so; otherwise just fill up the read buffer */
              if (bytes_to_read > malloc_size)
              {
                bytes_to_read = malloc_size;
              }

              memset(data_buf, 0, malloc_size);
              dbg_trace("%s: reading %d bytes from %s (filep = 0x%08x)\n",
                        __FUNCTION__, bytes_to_read, pszFileName, filep);
              bytes_read = fread(data_buf, 1, bytes_to_read, filep);
              if (bytes_read != bytes_to_read)
              {
                dbg_err(
                    "%s ERROR: Read %d bytes from downloaded file - expected %d bytes\n",
                    __FUNCTION__, bytes_read, bytes_to_read);
              }

              dbg_trace("%s: hashing %d bytes @ 0x%08x\n", __FUNCTION__,
                        bytes_read, data_buf);
              if (SHA256_Update(&sha_ctx, data_buf, bytes_read) != 1)
              {
                dbg_err(
                    "%s ERROR: Could not calculate SHA digest - SHA256_Update() FAILED\n",
                    __FUNCTION__);
              }
              bytes_shad += bytes_read;
            }
            if (SHA256_Final(pszFileHash, &sha_ctx) != 1)
            {
              dbg_err(
                  "%s ERROR: Could not calculate SHA digest - SHA256_Final() FAILED\n",
                  __FUNCTION__);
            }
            break;
          default:
            log_err("%s ERROR: Invalid Hash Algorithm %d\n", __FUNCTION__,
                    eHashAlgo);
        }
      }

      free(data_buf);
    }
  }
}


bool VHQSecurityVerifyFileSignature(const char *pszFileName,
                                    dl_file_hash_algo_t eHashAlgo,
                                    char *pszHash)
{
  bool ret_val = FALSE;
  unsigned char calculated_hash[SHA256_DIGEST_LENGTH];
  int hash_len = 0;

  VHQSecurityCalculateFileHash(pszFileName, eHashAlgo, calculated_hash,
                               sizeof(calculated_hash), &hash_len);

  if (hash_len && (memcmp(calculated_hash, pszHash, hash_len) == 0))
  {
    dbg_msg("%s: %s Hash Validated\n", __FUNCTION__, pszFileName);
    DebugMsgBuffer("\t\tCalculated Hash", (char*) calculated_hash, hash_len,
                   BUF_TYPE_HEX);
    DebugMsgBuffer("\t\tReceived Hash  ", pszHash, hash_len, BUF_TYPE_HEX);
    ret_val = TRUE;
  }
  else
  {
    log_err("%s ERROR: %s Hash Mismatch\n", __FUNCTION__, pszFileName);
    DebugMsgBuffer("\t\tCalculated Hash", (char*) calculated_hash, hash_len,
                   BUF_TYPE_HEX);
    DebugMsgBuffer("\t\tReceived Hash  ", pszHash, hash_len, BUF_TYPE_HEX);
  }

  return ret_val;

}


bool VHQSecurityGenSha1(const char *filename, unsigned char *sha1_digest)
{
  bool ret_val = FALSE;
  struct stat file_stat;

  dbg_msg("%s: Generating SHA1 for %s\n", __FUNCTION__, filename);
  if (stat(filename, &file_stat) == 0)
  {
    char *file_data = (char*) malloc(file_stat.st_size + 1);
    if (file_data)
    {
      int file_handle;

      memset(file_data, 0, file_stat.st_size + 1);

      dbg_msg("%s: Opening %s\n", __FUNCTION__, filename);
      file_handle = open(filename, O_RDONLY);

      if (file_handle != -1)
      {
        int bytes_read;

        memset(file_data, 0, file_stat.st_size);
        dbg_msg("%s: reading %s\n", __FUNCTION__, filename);
        bytes_read = read(file_handle, file_data, file_stat.st_size);
        close(file_handle);

        if (bytes_read == file_stat.st_size)
        {
          SHA_CTX sha_ctx;

          dbg_msg("%s: read %d bytes from %s - calling SHA1_Init(0x%08x)\n",
                  __FUNCTION__, bytes_read, filename, sha_ctx);
          if (SHA1_Init(&sha_ctx))
          {
            dbg_msg("%s: calling SHA1_Update(0x%08x, 0x%08x, %d)\n",
                    __FUNCTION__, sha_ctx, file_data, file_stat.st_size);
            if (SHA1_Update(&sha_ctx, file_data, file_stat.st_size))
            {
              dbg_msg("%s: calling SHA1_Final(0x%08x, 0x%08x)\n", __FUNCTION__,
                      sha1_digest, sha_ctx);
              if (SHA1_Final(sha1_digest, &sha_ctx))
              {
                dbg_msg("%s: SHA1_Final SUCCESS\n", __FUNCTION__);
                ret_val = TRUE;
              }
            }
          }
        }

      }
      else
        log_err("%s ERROR: unable to open %s\n", __FUNCTION__, filename);

      dbg_msg("%s: freeing 0x%08x\n", __FUNCTION__, file_data);
      free(file_data);
    }
  }

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

#endif // VHQ_CERT_VERIFIER

static int checkCert(X509_STORE *ctx, char *file, STACK_OF(X509) *uchain,
                     STACK_OF(X509) *tchain, int purpose, ENGINE *e)
{
  (void) (e);
  BIO *cert = NULL;
  X509 *x = NULL;
  int i = 0, ret = -1;
  X509_STORE_CTX *csc;

  dbg_msg("%s: Reading certificate from file %s\n", __FUNCTION__, file);
  if ((cert = BIO_new(BIO_s_file())) == NULL)
  {
    dbg_err("%s ERROR: couldn't create cert BIO\n", __FUNCTION__);
    goto checkCert_err;
  }

  if (BIO_read_filename(cert, file) <= 0)
  {
    dbg_err("%s ERROR: Error reading from %s\n", __FUNCTION__, file);
    goto checkCert_err;
  }

  x = PEM_read_bio_X509_AUX(cert, NULL,
                            NULL /*(pem_password_cb *)password_callback */,
                            NULL);

  if (!x)
  {
    dbg_err("%s ERROR: x509 is NULL\n", __FUNCTION__);
    goto checkCert_err;
  }

  dbg_msg("%s: %s\n", __FUNCTION__, file);

  csc = X509_STORE_CTX_new();
  if (csc == NULL)
  {
    //ERR_print_errors(bio_err);
    dbg_err("%s: Could not create new x509 store context\n", __FUNCTION__);
    goto checkCert_err;
  }
  X509_STORE_set_flags(ctx, 0);
  if (!X509_STORE_CTX_init(csc, ctx, x, uchain))
  {
    //ERR_print_errors(bio_err);
    dbg_err("%s: Could not init x509 store context\n", __FUNCTION__);
    goto checkCert_err;
  }
  if (tchain)
    X509_STORE_CTX_trusted_stack(csc, tchain);
  if (purpose >= 0)
    X509_STORE_CTX_set_purpose(csc, purpose);
  i = X509_verify_cert(csc);
  ret = X509_STORE_CTX_get_error(csc);
  X509_STORE_CTX_free(csc);

  checkCert_err: if (i > 0)
  {
    dbg_msg("\tOK\n");
    ret = 0;
  }
  else
  {
    //ERR_print_errors(bio_err);
    log_err("%s ERROR: cert %s verify FAILURE %d\n", __FUNCTION__, file, ret);
  }
  if (x != NULL)
    X509_free(x);

  return (ret);
}

static int check_cert_time(X509_STORE_CTX *ctx, X509 *x)
{
int i;

#ifndef OPENSSL3
  time_t *ptime;

  if (ctx->param->flags & X509_V_FLAG_USE_CHECK_TIME)
    ptime = &ctx->param->check_time;
  else
    ptime = NULL;
#else
time_t *ptime = X509_VERIFY_PARAM_get_time(X509_STORE_CTX_get0_param(ctx));
  //X509_STORE_CTX_verify_cb verify_cb = X509_STORE_get_verify_cb(ctx);
  // TODO check verify_cb
#endif

  i = X509_cmp_time(X509_get_notBefore(x), ptime);
  if (i == 0)
  {
#ifndef OPENSSL3
    ctx->error = X509_V_ERR_ERROR_IN_CERT_NOT_BEFORE_FIELD;
    ctx->current_cert = x;
    if (!ctx->verify_cb(0, ctx))
#else
X509_STORE_CTX_set_error(ctx, X509_V_ERR_ERROR_IN_CERT_NOT_BEFORE_FIELD);
X509_STORE_CTX_set_current_cert(ctx, x);
if (!cb(0, ctx))
#endif
      return 0;
  }

  if (i > 0)
  {
#ifndef OPENSSL3
    ctx->error = X509_V_ERR_CERT_NOT_YET_VALID;
    ctx->current_cert = x;
    if (!ctx->verify_cb(0, ctx))
#else
X509_STORE_CTX_set_error(ctx, X509_V_ERR_CERT_NOT_YET_VALID);
X509_STORE_CTX_set_current_cert(ctx, x);
if (!cb(0, ctx))
#endif
      return 0;
  }

  i = X509_cmp_time(X509_get_notAfter(x), ptime);
  if (i == 0)
  {
#ifndef OPENSSL3
    ctx->error = X509_V_ERR_ERROR_IN_CERT_NOT_AFTER_FIELD;
    ctx->current_cert = x;
    if (!ctx->verify_cb(0, ctx))
#else
X509_STORE_CTX_set_error(ctx, X509_V_ERR_ERROR_IN_CERT_NOT_AFTER_FIELD);
X509_STORE_CTX_set_current_cert(ctx, x);
if (!cb(0, ctx))
#endif
      return 0;
  }

  if (i < 0)
  {
#ifndef OPENSSL3
    ctx->error = X509_V_ERR_CERT_HAS_EXPIRED;
    ctx->current_cert = x;
    if (!ctx->verify_cb(0, ctx))
#else
X509_STORE_CTX_set_error(ctx, X509_V_ERR_CERT_HAS_EXPIRED);
X509_STORE_CTX_set_current_cert(ctx, x);
if (!cb(0, ctx))
#endif
      return 0;
  }

  return 1;
}

static int internal_verify(X509_STORE_CTX *ctx, X509 *xi)
{
  int ok = 0;
  EVP_PKEY *pkey = NULL;

  /* This can be used to print the cert data.  Can be used for debugging */
#if 0
    BIO *bio_out;
    bio_out = BIO_new(BIO_s_file());
    bool bio_ready = FALSE;
    if (bio_out)
    {
        if (!BIO_set_fp(bio_out, stdout, BIO_NOCLOSE))
            DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: BIO_set_fp() FAILED\n", __FUNCTION__);
        else
        {
            bio_ready = TRUE;
            X509_print(bio_out, xi);
        }

        BIO_free(bio_out);
    }
    else
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: BIO_new() FAILED\n", __FUNCTION__);
#endif

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Getting public key of 0x%08x\n", __FUNCTION__, xi);
  if ((pkey = X509_get_pubkey(xi)) == NULL)
  {
#ifndef OPENSSL3
    ctx->error = X509_V_ERR_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY;
    ctx->current_cert = xi;
#else
X509_STORE_CTX_set_error(ctx, X509_V_ERR_CERT_SIGNATURE_FAILURE);
X509_STORE_CTX_set_current_cert(ctx, xi);
#endif
    ok = (*cb)(0, ctx);
    if (!ok)
      goto end;
  }
  else if (X509_verify(xi, pkey) <= 0)
  {
    /* XXX  For the final trusted self-signed cert,
     * this is a waste of time.  That check should
     * optional so that e.g. 'openssl x509' can be
     * used to detect invalid self-signatures, but
     * we don't verify again and again in SSL
     * handshakes and the like once the cert has
     * been declared trusted. */
#ifndef OPENSSL3
    ctx->error = X509_V_ERR_CERT_SIGNATURE_FAILURE;
    ctx->current_cert = xi;
#else
X509_STORE_CTX_set_error(ctx, X509_V_ERR_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY);
X509_STORE_CTX_set_current_cert(ctx, xi);
#endif
    ok = (*cb)(0, ctx);
    if (!ok)
    {
      EVP_PKEY_free(pkey);
      goto end;
    }
  }
  EVP_PKEY_free(pkey);
  pkey = NULL;

  ok = check_cert_time(ctx, xi);
  if (!ok)
  {
    writeHbResult("Server Cert Date Range Error\n");
    log_err("%s: check_cert_time failed - returned %d\n", __FUNCTION__, ok);
    goto end;
  }

  /* The last error (if any) is still in the error value */
#ifndef OPENSSL3
  ctx->current_issuer = xi;
  ctx->current_cert = xi;
#else
X509_STORE_CTX_set_current_cert(ctx, xi);
#endif
  ok = (*cb)(1, ctx);
  if (!ok)
    goto end;
  ok = 1;
  end:
  dbg_msg("%s: returing %d\n", __FUNCTION__, ok);
  return ok;
}

#define COMMON_NAME_START_STR   "/CN="
#define HOST_NAME_START_STR     "://"

static int checkServerCert(X509_STORE *ctx, char *file, STACK_OF(X509) *uchain,
                           STACK_OF(X509) *tchain, int purpose, ENGINE *e)
{
  (void) (e);
  char *subj_name = NULL;
  BIO *cert = NULL;
  X509 *x = NULL;
  int i = 0, ret = -1;
  X509_STORE_CTX *csc;
  bool bCheckHostname = TRUE;

  dbg_msg("%s: Reading certificate from file %s\n", __FUNCTION__, file);
  if ((cert = BIO_new(BIO_s_file())) == NULL)
  {
    log_err("%s ERROR: couldn't create cert BIO\n", __FUNCTION__);
    goto checkCert_err;
  }
  BIO_set_close(cert, BIO_CLOSE);
  dbg_msg("%s: Reading certificate from file %s\n", __FUNCTION__, file);
  if (BIO_read_filename(cert, file) <= 0)
  {
    log_err("%s ERROR: Error reading from %s\n", __FUNCTION__, file);
    goto checkCert_err;
  }
  BIO_set_close(cert, BIO_CLOSE);

  x = PEM_read_bio_X509_AUX(cert, NULL,
                            NULL /*(pem_password_cb *)password_callback */,
                            NULL);

  if (!x)
  {
    log_err("%s ERROR: x509 is NULL\n", __FUNCTION__);
    goto checkCert_err;
  }

  dbg_msg("%s: %s (x509 = 0x%08x)\n", __FUNCTION__, file, (int )x);

  csc = X509_STORE_CTX_new();
  if (csc == NULL)
  {
    //ERR_print_errors(bio_err);
    dbg_msg("%s: Could not create new x509 store context\n", __FUNCTION__);
    goto checkCert_err;
  }
  X509_STORE_set_flags(ctx, 0);
  if (!X509_STORE_CTX_init(csc, ctx, x, uchain))
  {
    //ERR_print_errors(bio_err);
    dbg_msg("%s: Could not init x509 store context\n", __FUNCTION__);
    goto checkCert_err;
  }
  if (tchain)
    X509_STORE_CTX_trusted_stack(csc, tchain);
  if (purpose >= 0)
    X509_STORE_CTX_set_purpose(csc, purpose);

  VHQGetParameterBool(PARAM_PROTOCOL_MATCH_HOSTNAME, &bCheckHostname);
  dbg_msg("%s: read bCheckHostname %d\n", __FUNCTION__, bCheckHostname);

  /* Check the common name against the root URL if the parameter is set */
  if (bCheckHostname)
  {
    subj_name = X509_NAME_oneline(X509_get_subject_name(x), NULL, 0);
    if (subj_name)
    {
      char *cn_start = strstr(subj_name, COMMON_NAME_START_STR);
      char *cn_end;
      char *hn_start;
      char *hn_end;
      char common_name[256];
      char host_name[256];
      char url_root[256];

      memset(common_name, 0, sizeof(common_name));
      if (cn_start)
      {
        cn_start += strlen(COMMON_NAME_START_STR);
        cn_end = strstr(cn_start, "/");
        if (cn_end)
        {
          memcpy(common_name, cn_start, (cn_end - cn_start));
        }
        else
          strcpy(common_name, cn_start);
      }

      VHQGetParameterString(PARAM_URL_ROOT, url_root, sizeof(url_root));

      dbg_msg("%s: read url_root %s\n", __FUNCTION__, url_root);

      memset(host_name, 0, sizeof(host_name));
      hn_start = strstr(url_root, HOST_NAME_START_STR);
      if (hn_start)
      {
        hn_start += strlen(HOST_NAME_START_STR);
        hn_end = strstr(hn_start, "/");
        if (hn_end)
        {
          memcpy(host_name, hn_start, (hn_end - hn_start));
        }
        else
          strcpy(host_name, hn_start);
      }

      dbg_msg("%s: Server Cert Common Name = '%s', Host Name = '%s'\n",
              __FUNCTION__, common_name, host_name);

      if (strcasecmp(host_name, common_name) == 0)
      {
        i = internal_verify(csc, x);
        dbg_msg("%s: internal_verify() returned %d\n", __FUNCTION__, i);
        ret = X509_STORE_CTX_get_error(csc);
      }
      else
      {
        bool SAN_verified = FALSE;
        STACK_OF(GENERAL_NAME) *gen_name_stack;
        const GENERAL_NAME *gen_name;
        int num_gen_names;
        int counter;

        gen_name_stack = (STACK_OF(GENERAL_NAME)*) X509_get_ext_d2i(
            x, NID_subject_alt_name, 0, 0);
        num_gen_names = sk_GENERAL_NAME_num(gen_name_stack);

        dbg_msg("%s: Read %d Alternative Names\n", __FUNCTION__, num_gen_names);
        for (counter = 0; counter < num_gen_names; counter++)
        {
          gen_name = sk_GENERAL_NAME_value(gen_name_stack, counter);

          if (gen_name->type == GEN_DNS)
          {
            log_dbg("%s: Alternative Name %d is a DNS name\n", __FUNCTION__,
                    counter);
            if (ASN1_STRING_type(gen_name->d.dNSName) == V_ASN1_IA5STRING)
            {
              char *dnsname = (char*) ASN1_STRING_data(gen_name->d.dNSName);

              dbg_msg("%s: Comparing Alt DNS name %s to host_name %s\n",
                      __FUNCTION__, dnsname, host_name);
              if (strcasecmp(host_name, dnsname) == 0)
              {
                log_dbg(
                    "%s: Alt DNS name %s matches host_name %s - setting SAN_verified\n",
                    __FUNCTION__, dnsname, host_name);
                SAN_verified = TRUE;
                break;
              }

              /* This was in the example code but I commented it out since we don't need it */
              //len = ASN1_STRING_length(gn->d.ia5);
              //#define TRIM0(s, l) do { while ((l) > 0 && (s)[(l)-1] == 0) --(l); } while (0)
              //TRIM0(dnsname, len);
              //if (len != strlen(dnsname))
              /* malformed cert */
            }
          }
          else if (gen_name->type == GEN_IPADD)
          {
            char ip_addr_str[20];

            dbg_msg("%s: Alternative Name %d is an IP Address\n", __FUNCTION__,
                    counter);
            //DebugMsgBuffer("IP Address Octet String", (const char*)gen_name->d.iPAddress->data, gen_name->d.iPAddress->length, BUF_TYPE_HEX);

            memset(ip_addr_str, 0, sizeof(ip_addr_str));
            if (gen_name->d.iPAddress->length >= 4)
              sprintf(ip_addr_str, "%d.%d.%d.%d",
                      gen_name->d.iPAddress->data[0],
                      gen_name->d.iPAddress->data[1],
                      gen_name->d.iPAddress->data[2],
                      gen_name->d.iPAddress->data[3]);
            else
              dbg_err(
                  "%s: Invalid IP Address Octet Data length (%d - expected 4)\n",
                  __FUNCTION__, gen_name->d.iPAddress->length);

            dbg_msg("%s: Comparing Alt IP Address %s to host_name %s\n",
                    __FUNCTION__, ip_addr_str, host_name);
            if (strcasecmp(host_name, (const char*) ip_addr_str) == 0)
            {
              log_dbg(
                  "%s: Alt IP Address %s matches host_name %s - setting SAN_verified\n",
                  __FUNCTION__, ip_addr_str, host_name);
              SAN_verified = TRUE;
              break;
            }
          }
        }

        if (SAN_verified)
        {
          i = internal_verify(csc, x);
          dbg_msg("%s: SAN match - internal_verify() returned %d\n",
                  __FUNCTION__, i);
          ret = X509_STORE_CTX_get_error(csc);
        }
        else
        {
          char SrvPubKeyFileName[512];

          memset(SrvPubKeyFileName, 0, sizeof(SrvPubKeyFileName));
          GetFileNameForInstance(SrvPubKeyFileName,
                                 (char*) SRV_PUB_KEY_CERTFILE,
                                 GetCurrentInstance());

          writeHbResult("Server Cert does not match configured Host\n");
          log_err(
              "%s ERROR: Invalid Server Certificate %s - subject name [%s] does not match root URL [%s]\n",
              __FUNCTION__, SrvPubKeyFileName, common_name, host_name);
          ret = X509_V_ERR_APPLICATION_VERIFICATION;
        }
      }

      OPENSSL_free(subj_name);

    }
    else
    {
      char SrvPubKeyFileName[512];

      memset(SrvPubKeyFileName, 0, sizeof(SrvPubKeyFileName));
      GetFileNameForInstance(SrvPubKeyFileName, (char*) SRV_PUB_KEY_CERTFILE,
                             GetCurrentInstance());

      log_err(
          "%s ERROR: Invalid Server Certificate %s - Could not read Subject name from cert\n",
          __FUNCTION__, SrvPubKeyFileName);
      writeHbResult("No Subj Name in Server Cert\n");
      ret = X509_V_ERR_APPLICATION_VERIFICATION;
    }
  }
  else
  {
    i = internal_verify(csc, x);
    dbg_msg("%s: internal_verify() returned %d\n", __FUNCTION__, i);
    ret = X509_STORE_CTX_get_error(csc);
  }

  X509_STORE_CTX_free(csc);

  checkCert_err: if (cert)
  {
    dbg_msg("%s: trying to close cert\r\n", __FUNCTION__);
    BIO_free(cert);
    //BIO_free_all(cert);
  }
  if (i > 0)
  {
    dbg_msg("\tOK\n");
    ret = 0;
  }
  else
  {
    //ERR_print_errors(bio_err);
    log_err("%s ERROR: cert %s verify FAILURE %d\n", __FUNCTION__, file, ret);
  }

  if (x != NULL)
  {
#ifdef VHQ_CERT_VERIFIER
        dbg_msg( "%s: Skipping X509_free() call for cert (@ 0x%08x)\n", __FUNCTION__, x);
#else
    X509_free(x);
#endif
  }

  return (ret);
}

#ifndef OPENSSL3
static int cb(int ok, X509_STORE_CTX *ctx)
{
  char buf[256];

  if (!ok)
  {
    if (ctx->current_cert)
    {
      X509_NAME_oneline(X509_get_subject_name(ctx->current_cert), buf,
                        sizeof buf);
      dbg_msg("%s\n", buf);
    }
    dbg_err("\terror %d at %d depth lookup:%s\n", ctx->error, ctx->error_depth,
            X509_verify_cert_error_string(ctx->error));

    /* We want expired certs to cause an error */
    //if (ctx->error == X509_V_ERR_CERT_HAS_EXPIRED) ok=1;

    /* since we are just checking the certificates, it is
     * ok if they are self signed. But we should still warn
     * the user.
     */
    if (ctx->error == X509_V_ERR_DEPTH_ZERO_SELF_SIGNED_CERT)
      ok = 1;
    /* Continue after extension errors too */
    if (ctx->error == X509_V_ERR_INVALID_CA)
      ok = 1;
    if (ctx->error == X509_V_ERR_INVALID_NON_CA)
      ok = 1;
    if (ctx->error == X509_V_ERR_PATH_LENGTH_EXCEEDED)
      ok = 1;
    if (ctx->error == X509_V_ERR_INVALID_PURPOSE)
      ok = 1;
    if (ctx->error == X509_V_ERR_DEPTH_ZERO_SELF_SIGNED_CERT)
      ok = 1;
    if (ctx->error == X509_V_ERR_CRL_HAS_EXPIRED)
      ok = 1;
    if (ctx->error == X509_V_ERR_CRL_NOT_YET_VALID)
      ok = 1;
    if (ctx->error == X509_V_ERR_UNHANDLED_CRITICAL_EXTENSION)
      ok = 1;

    if (ctx->error == X509_V_ERR_NO_EXPLICIT_POLICY)
    {
      //policies_print(NULL, ctx);
      dbg_err("%s: Call to policies_print (1) is stubbed\n", __FUNCTION__);
    }
    return ok;

  }
  if ((ctx->error == X509_V_OK) && (ok == 2))
  {
    //policies_print(NULL, ctx);
    dbg_err("%s: Call to policies_print (2) is stubbed\n", __FUNCTION__);
  }
  //if (!v_verbose)
  //ERR_clear_error();
  return (ok);
}
#else
static int cb(int ok, X509_STORE_CTX *ctx)
{
char buf[256];
int cert_err = X509_STORE_CTX_get_error(ctx);

if (!ok)
{
X509 *current_cert = X509_STORE_CTX_get_current_cert(ctx);

if (current_cert)
{
X509_NAME_oneline(X509_get_subject_name(current_cert), buf, sizeof buf);
dbg_msg("%s\n", buf);
}
dbg_err("\terror %d lookup:%s\n", cert_err,
        X509_verify_cert_error_string(cert_err));

/* since we are just checking the certificates, it is
 * ok if they are self signed. But we should still warn
 * the user.
 */
switch (cert_err)
{
case X509_V_ERR_DEPTH_ZERO_SELF_SIGNED_CERT:
case X509_V_ERR_INVALID_CA:
case X509_V_ERR_INVALID_NON_CA:
case X509_V_ERR_PATH_LENGTH_EXCEEDED:
case X509_V_ERR_INVALID_PURPOSE:
case X509_V_ERR_CRL_HAS_EXPIRED:
case X509_V_ERR_CRL_NOT_YET_VALID:
case X509_V_ERR_UNHANDLED_CRITICAL_EXTENSION:
ok = 1;
break;
default:
break;
}

if (cert_err == X509_V_ERR_NO_EXPLICIT_POLICY)
{
  //policies_print(NULL, ctx);
dbg_err("%s: Call to policies_print (1) is stubbed\n", __FUNCTION__);
}
return ok;

}
if ((cert_err == X509_V_OK) && (ok == 2))
{
  //policies_print(NULL, ctx);
dbg_err("%s: Call to policies_print (2) is stubbed\n", __FUNCTION__);
}
  //if (!v_verbose)
  //ERR_clear_error();
return (ok);
}
#endif

static int VerifyCert(char *CertFile)
{
  int i;
  int check_ret_val = -1;
  X509_STORE *cert_ctx = NULL;
  X509_LOOKUP *lookup = NULL;

  cert_ctx = X509_STORE_new();
  if (cert_ctx == NULL)
    goto end;
  X509_STORE_set_verify_cb_func(cert_ctx, cb);

  /* Leave this out for now */
  //if (!load_config(bio_err, NULL))
  //goto end;

  lookup = X509_STORE_add_lookup(cert_ctx, X509_LOOKUP_file());
  if (lookup == NULL)
    abort();
  i = X509_LOOKUP_load_file(lookup, CertFile, X509_FILETYPE_PEM);
  if (!i)
  {
    //BIO_printf(bio_err, "Error loading file %s\n", CAfile);
    //ERR_print_errors(bio_err);
    log_err("%s ERROR: Couldn't load CAFile %s\n", __FUNCTION__, CertFile);
    goto end;
  }

  lookup = X509_STORE_add_lookup(cert_ctx, X509_LOOKUP_hash_dir());
  if (lookup == NULL)
    abort();

  check_ret_val = checkCert(cert_ctx, CertFile, NULL, NULL, -1, NULL);

  end:

  if (cert_ctx != NULL)
    X509_STORE_free(cert_ctx);

  return check_ret_val;
}


#ifdef VHQ_CERT_VERIFIER
int VerifyServerCert(char* CertFile)
#else
static int VerifyServerCert(char *CertFile)
#endif
{
  int i;
  int check_ret_val = -1;
  X509_STORE *cert_ctx = NULL;
  X509_LOOKUP *lookup = NULL;

  dbg_msg("%s: Verifying server cert %s\n", __FUNCTION__, CertFile);
  cert_ctx = X509_STORE_new();
  if (cert_ctx == NULL)
    goto end;
  X509_STORE_set_verify_cb_func(cert_ctx, cb);

  /* Leave this out for now */
  //if (!load_config(bio_err, NULL))
  //goto end;

  lookup = X509_STORE_add_lookup(cert_ctx, X509_LOOKUP_file());
  if (lookup == NULL)
    abort();
  i = X509_LOOKUP_load_file(lookup, CertFile, X509_FILETYPE_PEM);
  if (!i)
  {
    //BIO_printf(bio_err, "Error loading file %s\n", CAfile);
    //ERR_print_errors(bio_err);
    log_err("%s ERROR: Couldn't load CAFile %s\n", __FUNCTION__, CertFile);
    goto end;
  }

  lookup = X509_STORE_add_lookup(cert_ctx, X509_LOOKUP_hash_dir());
  if (lookup == NULL)
    abort();

  check_ret_val = checkServerCert(cert_ctx, CertFile, NULL, NULL, -1, NULL);

  end:

  if (cert_ctx != NULL)
    X509_STORE_free(cert_ctx);

  return check_ret_val;
}

#if 0
static time_t asctime_to_localtime(const char * timestamp)
{
    static const char *mon_name[] = { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" };
    char mon[4] = {0};

    struct tm t = {0};
    time_t ret = 0;

    if (sscanf(timestamp, "%s %d %d:%d:%d %d", mon, &t.tm_mday, &t.tm_hour, &t.tm_min, &t.tm_sec, &t.tm_year) == 6)
    {
        int i;
        for (i = 0; i < sizeof(mon_name); i++)
        {
            if (strcmp(mon, mon_name[i]) == 0)
            {
                t.tm_mon = i;
                break;
            }
        }
        t.tm_year-=1900;
        ret = linux_mktime(&t);
    }

    return ret;
}

static int convert_ASN1TIME(ASN1_TIME *t, char* buf, size_t len)
{
    int rc;
    BIO *b = BIO_new(BIO_s_mem());
    rc = ASN1_TIME_print(b, t);
    if (rc <= 0) {
        DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s: ASN1_TIME_print failed or wrote no data.\n", __FUNCTION__);
        BIO_free(b);
        return EXIT_FAILURE;
    }
    rc = BIO_gets(b, buf, len);
    if (rc <= 0) {
        DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s: BIO_gets call failed to transfer contents to buf\n", __FUNCTION__);
        BIO_free(b);
        return EXIT_FAILURE;
    }
    BIO_free(b);

    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: return %s\n", __FUNCTION__, buf);
    return EXIT_SUCCESS;
}

static time_t ASN1_GetTimeT(ASN1_TIME* time)
{
    int ret;
    time_t ret_val;
    char buffer[128] = {0};

    ret = convert_ASN1TIME(time, buffer, sizeof(buffer));
    if (ret == EXIT_FAILURE)
        return 0;

    ret_val = asctime_to_localtime(buffer);
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: ASN1_TIME '%s' converted to %u, UTC time\n", __FUNCTION__, time->data, ret_val);

    return ret_val;
}
#endif

static time_t ASN1_GetTimeT(ASN1_TIME *time)
{
  struct tm t;
  const char *str;
  size_t i = 0;
  time_t ret_val;

  if (!time)
  {
    dbg_err("%s: time pointer is NULL\n", __FUNCTION__);
    return 0;
  }

  str = (const char*) time->data;
  memset(&t, 0, sizeof(t));

  if (time->type == V_ASN1_UTCTIME) /* two digit year */
  {
    t.tm_year = (str[i++] - '0') * 10 + (str[++i] - '0');
    if (t.tm_year < 70)
      t.tm_year += 100;
  }
  else if (time->type == V_ASN1_GENERALIZEDTIME) /* four digit year */
  {
    t.tm_year = (str[i++] - '0') * 1000 + (str[++i] - '0') * 100
        + (str[++i] - '0') * 10 + (str[++i] - '0');
    t.tm_year -= 1900;
  }
  t.tm_mon = ((str[i++] - '0') * 10 + (str[++i] - '0')) - 1;  // -1 since January is 0 not 1.
  t.tm_mday = (str[i++] - '0') * 10 + (str[++i] - '0');
  t.tm_hour = (str[i++] - '0') * 10 + (str[++i] - '0');
  t.tm_min = (str[i++] - '0') * 10 + (str[++i] - '0');
  t.tm_sec = (str[i++] - '0') * 10 + (str[++i] - '0');

  dbg_msg("%s: %d, %d, %d, %d, %d, %d\n", __FUNCTION__, t.tm_year, t.tm_mon,
          t.tm_mday, t.tm_hour, t.tm_min, t.tm_sec);

  /* Note: we did not adjust the time based on time zone information */
  ret_val = linux_mktime(&t);
  dbg_msg("%s: ASN1_TIME '%s' converted to time_t %u\n", __FUNCTION__,
          time->data, ret_val);
  return ret_val;
}

time_t GetCertExpiration(char *file)
{
  BIO *cert = NULL;
  X509 *x = NULL;
  time_t ret_val = 0;

  dbg_msg("%s: Reading certificate from file %s\n", __FUNCTION__, file);
  if ((cert = BIO_new(BIO_s_file())) == NULL)
  {
    dbg_err("%s ERROR: couldn't create cert BIO\n", __FUNCTION__);
    return 0;
  }

  if (BIO_read_filename(cert, file) <= 0)
  {
    log_err("%s ERROR: Error reading from %s\n", __FUNCTION__, file);
    if (cert)
      BIO_free(cert);
    return 0;
  }

  x = PEM_read_bio_X509_AUX(cert, NULL,
                            NULL /*(pem_password_cb *)password_callback */,
                            NULL);

  if (!x)
  {
    dbg_err("%s ERROR: x509 is NULL\n", __FUNCTION__);
    if (cert)
      BIO_free(cert);
    return 0;
  }

  dbg_msg("%s: %s (x509 = 0x%08x)\n", __FUNCTION__, file, (int )x);

  ret_val = ASN1_GetTimeT(X509_get_notAfter(x));

  if (x != NULL)
    X509_free(x);
  if (cert)
    BIO_free(cert);

  return ret_val;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100

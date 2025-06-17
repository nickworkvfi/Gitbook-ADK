---
title: sdi/src/crypt.cpp

---

# sdi/src/crypt.cpp



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Auth](class_auth.md)**  |
| class | **[AuthSec](class_auth_sec.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[check_AuthScript](crypt_8cpp.md#function-check-authscript)**() |
| int | **[system_Auth](crypt_8cpp.md#function-system-auth)**(enum [AuthStep](crypt_8h.md#enum-authstep) as, unsigned char * in, unsigned short in_size, unsigned char * out, unsigned short * out_size) |
| int | **[calculate_CMAC](crypt_8cpp.md#function-calculate-cmac)**([Inputype](crypt_8h.md#enum-inputype) type, const char * fileToMAC, unsigned char * dataToMAC, unsigned dataSize, unsigned char * MAC) |
| int | **[check_CMAC](crypt_8cpp.md#function-check-cmac)**([Inputype](crypt_8h.md#enum-inputype) type, const char * filename, unsigned char * data, unsigned dataSize, unsigned char * MAC) |
| int | **[encrypt_Data](crypt_8cpp.md#function-encrypt-data)**(unsigned char * data, unsigned long dataSize, unsigned char * encryptedData, unsigned long * encryptedDataSize) |
| int | **[decrypt_Data](crypt_8cpp.md#function-decrypt-data)**(unsigned char * data, unsigned long dataSize, unsigned char * decryptedData, unsigned long * decryptedDataSize) |
| int | **[calculate_MD5](crypt_8cpp.md#function-calculate-md5)**(const char * file, unsigned char * checkSum) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| pthread_mutex_t | **[obj_mutex](crypt_8cpp.md#variable-obj-mutex)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[FALL_THROUGH](crypt_8cpp.md#define-fall-through)**  |


## Functions Documentation

### function check_AuthScript

```cpp
int check_AuthScript()
```


**Return**: RESULT_OK for success, else RESULT_FAIL for failure 

checks the status of VSS script used for SDI message integrity check (message MAC) and SDI message encryption 


### function system_Auth

```cpp
int system_Auth(
    enum AuthStep as,
    unsigned char * in,
    unsigned short in_size,
    unsigned char * out,
    unsigned short * out_size
)
```


**Parameters**: 

  * **as** For System Authentication Step 1: AuthStep_1 For System Authentication Step 2: AuthStep_2 Input and output data of this function depend on this parameter (see below). 
  * **in** pointer to input data buffer For AuthStep_1 (16 bytes): 16 bytes (Server random, plain) For AuthStep_2 (32 bytes): [16 bytes (E105 token) + 16 bytes (Server token)] SK encrypted 
  * **in_size** size of input buffer (depend on auth. step, see parameter `in`) 
  * **out** pointer to output buffer For AuthStep_1 (42 bytes): [16 bytes (E105 token) + 16 bytes (E105 token)] DUKPT encrypted + 10 bytes (KSN) For AuthStep_2 (32 bytes): [16 bytes (Server token) + 16 bytes (E105 serial number)] SK encrypted 
  * **out_size** in: size of output buffer out: size of output buffer data (depend on auth. step, see parameter `out`) 


**Return**: RESULT_OK for success, else RESULT_FAIL for failure 

Process System Authentication step 1 or 2. With success of step 2, the SDI client (Server) is successfully authenticated against SDI server (E105). In addition, the session key (SK) was stored to vault successfully. This is the prerequisite that other functions [calculate_CMAC()](crypt_8h.md#function-calculate-cmac), [check_CMAC()](crypt_8h.md#function-check-cmac), [encrypt_Data()](crypt_8h.md#function-encrypt-data) and [decrypt_Data()](crypt_8h.md#function-decrypt-data) will work, since these functions use the session key (SK). 


### function calculate_CMAC

```cpp
int calculate_CMAC(
    Inputype type,
    const char * fileToMAC,
    unsigned char * dataToMAC,
    unsigned dataSize,
    unsigned char * MAC
)
```


**Parameters**: 

  * **type** input type. can be a file or a data buffer 
  * **fileToMAC** file name (when input type is INPUT_TYPE_FILE) 
  * **dataToMAC** pointer to input message buffer (when input type is INPUT_TYPE_BUFFER) 
  * **dataSize** size of the input message (when input type is INPUT_TYPE_BUFFER) 
  * **MAC** pointer to the MAC value buffer 


**Return**: RESULT_OK on success otherwise RESULT_FAIL 

Calculate the CMAC value for the given data 


### function check_CMAC

```cpp
int check_CMAC(
    Inputype type,
    const char * filename,
    unsigned char * data,
    unsigned dataSize,
    unsigned char * MAC
)
```


**Parameters**: 

  * **type** input type. can be a file or a data buffer 
  * **filename** file name (when input type is INPUT_TYPE_FILE) 
  * **data** pointer to input message buffer (when input type is INPUT_TYPE_BUFFER) 
  * **dataSize** size of the input message (when input type is INPUT_TYPE_BUFFER) 
  * **MAC** pointer to the MAC value buffer 


**Return**: RESULT_OK on success otherwise RESULT_FAIL 

Check the CMAC value of the given data 


### function encrypt_Data

```cpp
int encrypt_Data(
    unsigned char * data,
    unsigned long dataSize,
    unsigned char * encryptedData,
    unsigned long * encryptedDataSize
)
```


**Parameters**: 

  * **data** pointer to input message buffer 
  * **dataSize** size of the input message 
  * **encryptedData** pointer to encrypted data buffer 
  * **encryptedDataSize** pointer to encrypted data buffer size 


**Return**: RESULT_OK on success otherwise RESULT_FAIL 

Encrypt the given data 


### function decrypt_Data

```cpp
int decrypt_Data(
    unsigned char * data,
    unsigned long dataSize,
    unsigned char * decryptedData,
    unsigned long * decryptedDataSize
)
```


**Parameters**: 

  * **data** pointer to input message buffer 
  * **dataSize** size of the input message 
  * **decryptedData** pointer to decrypted data buffer 
  * **decryptedDataSize** pointer to decrypted data buffer size 


**Return**: RESULT_OK on success otherwise RESULT_FAIL 

Decrypt the given data 


### function calculate_MD5

```cpp
int calculate_MD5(
    const char * file,
    unsigned char * checkSum
)
```


**Parameters**: 

  * **file** file of which MD5 checksum shall be calculated 
  * **checkSum** output buffer for calculated MD5 checksum, buffer must have at least 16 bytes 


**Return**: 1 for success, else 0 for error (e.g. file does not exist) 

Compute and MD5 digest of file `file`



## Attributes Documentation

### variable obj_mutex

```cpp
static pthread_mutex_t obj_mutex = PTHREAD_MUTEX_INITIALIZER;
```



## Macros Documentation

### define FALL_THROUGH

```cpp
#define FALL_THROUGH 
```


## Source code

```cpp
/****************************************************************************
 *  Product:     InFusion
 *  Company:     Verifone
 *  Author:      GSS R&D Germany
 *  Content:     SDI-Server
 ****************************************************************************/

#include <stdio.h>
#include "crypt.h"
#include "sec/libsec.h"
#include "sys.h"
#include "_logf.h"
#include <vector>
#include <string>
#include "ipc/jsobject.h"
#include "sysinfo/sysinfo.h"
#ifdef _VOS
  #include <svcsec.h>
#endif
#include "md5.h"
#include "pthreadutil.h" // MutexLock

using namespace std;
using namespace vfisysinfo;

#if __cplusplus >= 201402L // since C++14 use [[fallthrough]] to suppress warnings
  #define FALL_THROUGH [[fallthrough]];
#else
  #define FALL_THROUGH
#endif

class AuthSec;
#ifdef _VOS
  class AuthVss;
#endif

/* base class providing authentication inteface with APIs for
 * encryption/decryption and MAC calculation. Mode specific
 * parts are implemented derived classes AuthSec (using ADKSEC)
 * and AuthVss (direct invocation of VSS scripts with iPS functions).
 * The used mode depends on the user (and platform), which SDI server
 * is running. */
class Auth
{
    pthread_mutex_t m_mutex; 
    bool m_auth_steps_done;  
    // disable copy constructor and assign operator
    Auth(const Auth&);
    Auth& operator=(const Auth&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    Auth(const Auth&&);
    Auth& operator=(Auth&&);
#endif

    // disable constructor and force caller to use instance()
    Auth() : m_auth_steps_done(false)
    {
      pthread_mutex_init(&m_mutex, 0);
    };
    // disable destruction
    virtual ~Auth()
    {
      pthread_mutex_destroy(&m_mutex);
    };

    /* pure virtual functions implemented by derived classes */

    /* returs true, if the initialization of the authentication object was successful
     * \return true for successful initialization, else false */
    virtual bool inited() = 0;

    /* internal function to process the authentication step 1
     * \return true for successful authentication step 1 */
    virtual bool step1(const vector<uint8_t> &in_data, vector<uint8_t> &out_data) = 0;
    /* internal function to process the authentication step 2
     * \return true for successful authentication step 2 */
    virtual bool step2(const vector<uint8_t> &in_data, vector<uint8_t> &out_data) = 0;

    static Auth *obj; // singleton

    friend class AuthSec;
#ifdef _VOS
    friend class AuthVss;
#endif

  public:

    /* create/obtain the authentication object instance.
     * Depending on device and running user the function returns
     * an instance of derived classes AuthSec or AuthVss
     * \return authentication object instance on success, else NULL
     *         in case of error (object initialization failed) */
    static Auth* instance();

    /* process the authentication step 1 or 2
     * \note For more details please refer to description of ::system_Auth()
     * \return true for successful authentication step 1 or 2 */
    bool auth(enum AuthStep as,
              unsigned char *in, unsigned short in_size,
              unsigned char *out, unsigned short *out_size)
    {
      if (!in || !out || !out_size)
      {
        _LOGF_ERROR("Auth::auth(): invalid pointer parameter (%p,%p,%p)", in, out, out_size);
        return false;
      }

      MutexLock ml(&m_mutex);

      vector<uint8_t> out_data, in_data;

      if (as == AuthStep_1) // authentication step 1
      {
        m_auth_steps_done = false;

        if (in_size != 16 || *out_size < 42)
        {
          _LOGF_ERROR("Auth::auth(): invalid size parameters for auth. step 1 (%hu,%hu)", in_size, *out_size);
          return false;
        }

        // take over data
        in_data.assign(in, in + in_size);

        if (!step1(in_data, out_data))
        {
          _LOGF_ERROR("Auth::auth(): step1() failed");
          return false;
        }

        if (out_data.size() != 42)
        {
          _LOGF_ERROR("Auth::auth(): step1() returned invalid output data size (%zu!=42)", out_data.size());
          return false;
        }

        /* VSS script returns KSN in bytes 0..9 and data block in bytes 10..41,
           thus, we must turn around the values for SDI server response */
        memcpy(out, &out_data[10], 32); // output: data block in bytes 0..31
        memcpy(out + 32, &out_data[0], 10); // output: KSN in bytes 32..41
      }
      else  // authentication step 2
      {
        if (in_size != 32 || *out_size < 32)
        {
          _LOGF_ERROR("Auth::auth(): invalid size parameters for auth. step 2 (%hu,%hu)", in_size, *out_size);
          return false;
        }

        // append serial number (16 bytes) to the datablock
        in_data.resize(in_size + 16);
        // copy command message into buffer and add serial number (16 bytes)
        memcpy(&in_data[0], in, in_size);

        if (sysGetPropertyString(SYS_PROP_HW_SERIALNO, (char *)&in_data[in_size], 16) != SYS_ERR_OK)
        {
          _LOGF_ERROR("Auth::auth(): cannot obtain device serial number for auth. step 2");
          return false;
        }

        if (!step2(in_data, out_data))
        {
          _LOGF_ERROR("Auth::auth(): step2() failed");
          return false;
        }

        if (out_data.size() != 32)
        {
          _LOGF_ERROR("Auth::auth(): step2() returned invalid output data size (%zu!=32)", out_data.size());
          return false;
        }

        memcpy(out, &out_data[0], out_data.size());

        m_auth_steps_done = true;
      }

      *out_size = (unsigned short)out_data.size();
      return true;
    }

    /* pure virtual functions implemented by derived classes */

    /* check the authentication VSS script status
     * \note For more details please refer to description of ::check_AuthScript()
     * \return true for installed and operating VSS script, else false */
    virtual bool check_script() = 0;
    /* Calculate the CMAC value for the given data
     * \note For more details please refer to description of ::calculate_CMAC()
     * \param[in]     type        input type. can be a file or a data buffer
     * \param[in]     fileToMAC   file name (when input type is INPUT_TYPE_FILE)
     * \param[in]     dataToMAC   pointer to input message buffer (when input type is INPUT_TYPE_BUFFER)
     * \param[in]     dataSize    size of the input message (when input type is INPUT_TYPE_BUFFER)
     * \param[in,out] MAC         pointer to the MAC value buffer
     * \return true for success else false */
    virtual bool calculate_CMAC(Inputype type, const char *fileToMAC, unsigned char *dataToMAC, unsigned dataSize, unsigned char *MAC) = 0;
    /* Encrypt data
     * \note For more details please refer to description of ::encrypt_Data()
     * \param[in]     data        pointer to input message buffer
     * \param[in]     dataSize    size of the input message
     * \param[in,out] encryptedData      pointer to encrypted data buffer
     * \param[in,out] encryptedDataSize  pointer to encrypted data buffer size
     * \return true for success else false */
    virtual bool encrypt(unsigned char *data, unsigned long dataSize, unsigned char *encryptedData, unsigned long *encryptedDataSize) = 0;
    /* Decrypt data
     * \note For more details please refer to description of ::decrypt_Data()
     * \param[in]     data        pointer to input message buffer
     * \param[in]     dataSize    size of the input message
     * \param[in,out] decryptedData      pointer to decrypted data buffer
     * \param[in,out] decryptedDataSize  pointer to decrypted data buffer size
     * \return true for success else false
     */
    virtual bool decrypt(unsigned char *data, unsigned long dataSize, unsigned char *decryptedData, unsigned long *decryptedDataSize) = 0;
};

Auth *Auth::obj = 0;
// protects creation of the protocol singleton instance
static pthread_mutex_t obj_mutex = PTHREAD_MUTEX_INITIALIZER;

/*********************************************************************************/
/********************** VSS SCRIPT INVOCATION WITH ADKSEC ************************/
/*********************************************************************************/

using namespace com_adksec_cmd;
using namespace com_verifone_seccmd;
using namespace com_verifone_host;
using namespace vfiipc;

/* derived class providing authentication inteface with implemented
 * APIs for encryption/decryption and MAC calculation using ADKSEC. */
class AuthSec : public Auth
{
    secHandle_t sec_handle;
    bool sec_open;

    // disable copy constructor and assign operator
    AuthSec(const AuthSec&);
    AuthSec& operator=(const AuthSec&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    AuthSec(const AuthSec&&);
    AuthSec& operator=(AuthSec&&);
#endif

    AuthSec() : Auth()
    {
      secError err = secOpen("sdi-authmsg", sec_handle);
      sec_open = (err == EsecOK);

      if (!sec_open)
      {
        _LOGF_ERROR("init(): secOpen(\"sdimsg\") failed with error %d", err);
      }
    }

    ~AuthSec()
    {
      if (sec_open)
      {
        secClose(sec_handle);
      }
    }

    bool inited()
    {
      return sec_open;
    }

    bool step1(const vector<uint8_t> &in_data, vector<uint8_t> &out_data)
    {
      if (!sec_open)
      {
        _LOGF_ERROR("AuthSec::step1(): failed (no handle)");
        return false;
      }

      // Key Encryption Key (KEK) used for auth. step 1
      secError err = secUpdateKey(sec_handle, KEY_TYPE_KEK, in_data, out_data);

      if (err != EsecOK)
      {
        _LOGF_ERROR("AuthSec::step1(): secUpdateKey() failed with error %d", err);
        return false;
      }

      return true;
    }

    bool step2(const vector<uint8_t> &in_data, vector<uint8_t> &out_data)
    {
      if (!sec_open)
      {
        _LOGF_ERROR("AuthSec::step2(): failed (no handle)");
        return false;
      }

      // Data Encryption Key (DEK) used for auth. step 2
      secError err = secUpdateKey(sec_handle, KEY_TYPE_DEK, in_data, out_data);

      if (err != EsecOK)
      {
        _LOGF_ERROR("AuthSec::step2(): secUpdateKey() failed with error %d", err);
        return false;
      }

      return true;
    }

    bool removeBTLVLength(vector<uint8_t> &d)
    {
      if (d.size() == 0)
      {
        return false;
      }

      unsigned len = d[0];

      if (len == 0x80)
      {
        return false;  // not allowed
      }

      unsigned size = 0;

      if ((len & 0x80) == 0)
      {
        size = len;
        d.erase(d.begin()); // remove length byte
      }
      else
      {
        len &= ~0x80;

        if (++len > d.size())
        {
          return false;
        }

        for (unsigned i = 1; i < len; i++)
        {
          size = (size << 8) + d[i];
        }

        d.erase(d.begin(), d.begin() + len); // remove length field
      }

      if (size > d.size())
      {
        return false;
      }

      // remove padding (if any)
      if (d.size() > size)
      {
        d.resize(size);
      }

      return true;
    }

    /* before encryption add a BTLV length field with value of data size \c size
     * to vector \c d and append the data provided in buffer \c data.
     * \param[out] d vector with BTLV length field and data
     * \param[in] data pointer to buffer containing the data
     * \param[in] size length of data in buffer \c data */
    void addBTLVLength(vector<uint8_t> &d, unsigned char *data, unsigned size)
    {
      unsigned slen = 5; // we do not support more than 4GBytes

      if (size < 128)
      {
        slen = 1;
      }
      else if (size < (1 << 8))
      {
        slen = 2;
      }
      else if (size < (1 << 16))
      {
        slen = 3;
      }
      else if (size < (1 << 24))
      {
        slen = 4;
      }

      if (slen == 1)
      {
        d.resize(1 + size);
        d[0] = (uint8_t)size;
      }
      else
      {
        d.resize(slen + size);
        unsigned idx = 0;
        d[idx++] = (uint8_t)((slen - 1) + 0x80);

        switch (slen)
        {
          default:
          case 5:
            d[idx++] = (uint8_t)(size >> 24);
            FALL_THROUGH

          case 4:
            d[idx++] = (uint8_t)(size >> 16);
            FALL_THROUGH

          case 3:
            d[idx++] = (uint8_t)(size >> 8);
            FALL_THROUGH

          case 2:
            d[idx]  = (uint8_t)size;
        }
      }

      memcpy(&d[slen], data, size);
    }

    friend class Auth;

  public:

    bool check_script()
    {
      MutexLock ml(&m_mutex);

      if (!sec_open)
      {
        _LOGF_ERROR("AuthSec::check_script(): failed (no handle)");
        return false;
      }

      string js_status;
      secError err = secGetStatus(js_status, sec_handle);

      if (err != EsecOK)
      {
        _LOGF_ERROR("AuthSec::check_script(): secGetStatus() failed with error %d", err);
        return false;
      }

      JSObject js;

      if (!js.load(js_status))
      {
        _LOGF_ERROR("AuthSec::check_script(): JSObject.load() failed for status string: %s", js_status.c_str());
        return false;
      }

      if (!js.exists("hosts") || !js("hosts").isArray() || js("hosts").size() < 1)
      {
        _LOGF_ERROR("AuthSec::check_script(): 'hosts' array object not found in status JSON string: %s", js_status.c_str());
        return false;
      }

      JSObject &hosts = js("hosts")[0];

      if (!hosts.exists("status") || !hosts("status").isArray() || hosts("status").size() < 1)
      {
        _LOGF_ERROR("AuthSec::check_script(): 'hosts[0].status' array object not found in status JSON string: %s", js_status.c_str());
        return false;
      }

      JSObject &status = hosts("status")[0];

      if (!status.exists("script")
          || !status("script").exists("status")
          || !status("script")("status").isString())
      {
        _LOGF_ERROR("AuthSec::check_script(): object 'hosts[0].status[0].script.status' not found in status JSON string: %s", js_status.c_str());
        return false;
      }

      // check the script status
      string s = status("script")("status").getString();

      if (s != "EsecOK")
      {
        _LOGF_ERROR("AuthSec::check_script(): object 'hosts[0].status[0].script.status' is not equal 'EsecOK' (%s) ", s.c_str());
        return false;
      }

      return true;
    }

    bool calculate_CMAC(Inputype type, const char *fileToMAC, unsigned char *dataToMAC, unsigned dataSize, unsigned char *MAC)
    {
      MutexLock ml(&m_mutex);

      if (!m_auth_steps_done)
      {
        _LOGF_ERROR("AuthSec::calculate_CMAC(): failed (auth steps 1/2 required)");
        return false;
      }

      if (!sec_open)
      {
        _LOGF_ERROR("AuthSec::calculate_CMAC(): failed (no handle)");
        return false;
      }

      if (!MAC)
      {
        _LOGF_ERROR("AuthSec::calculate_CMAC(): invalid parameter 'MAC'");
        return false;
      }

      vector<uint8_t> vdata;

      // check parameters
      if (type == INPUT_TYPE_FILE)
      {
        if (!fileToMAC || !fileToMAC[0])
        {
          _LOGF_ERROR("AuthSec::calculate_CMAC(): invalid parameter 'fileToMAC'");
          return false; // invalid parameter
        }

        FILE *fp = fopen(fileToMAC, "rb");

        if (!fp)
        {
          _LOGF_ERROR("AuthSec::calculate_CMAC(): cannot open file '%s'", fileToMAC);
          return false; // file not found
        }

        size_t r = 0;

        do
        {
          unsigned char buf[1024];
          r = fread(buf, 1, sizeof(buf), fp);

          if (r)
          {
            vdata.insert(vdata.end(), buf, buf + r);
          }
        }
        while (r == 1024);

        fclose(fp);

        if (vdata.size() == 0)
        {
          _LOGF_ERROR("AuthSec::calculate_CMAC(): file '%s' is empty", fileToMAC);
          return false;  // file empty
        }
      }
      else
      {
        if (!dataToMAC || dataSize == 0)
        {
          _LOGF_ERROR("AuthSec::calculate_CMAC(): invalid parameter '%s'", !dataToMAC ? "dataToMAC" : "dataSize");
          return false;
        }

        vdata.assign(dataToMAC, dataToMAC + dataSize);
      }

      /* add ISO7816 padding: XX XX XX XX 80 00 00 00
       * and set flag as first byte in IV that data was padded */
      vector<uint8_t> iv;
      iv.assign(1, 0); // iv[0]=0 means no padding
      unsigned pad_bytes = 8 - vdata.size() % 8; // 3DES datablock size is 8

      if (pad_bytes != 8)
      {
        unsigned size = vdata.size();
        vdata.resize(size + pad_bytes);
        vdata[size] = 0x80;
        memset(&vdata[size + 1], 0x00, pad_bytes - 1);
        iv[0] = 1; // signal padding
      }

      vector<uint8_t> signature, ksn; // ksn unused
      secError err = secSign(sec_handle, vdata, signature, iv, ksn);

      if (err != EsecOK)
      {
        _LOGF_ERROR("AuthSec::calculate_CMAC(): secSign() failed with error %d", err);
        return false;
      }

      if (signature.size() != 8)
      {
        _LOGF_ERROR("AuthSec::calculate_CMAC(): secSign() returned invalid size for MAC (size=%zu)", signature.size());
        return false;
      }

      memcpy(MAC, &signature[0], 8);
      return true;
    }

    bool encrypt(unsigned char *data, unsigned long dataSize, unsigned char *encryptedData, unsigned long *encryptedDataSize)
    {
      MutexLock ml(&m_mutex);

      if (!m_auth_steps_done)
      {
        _LOGF_ERROR("AuthSec::encrypt(): failed (auth steps 1/2 required)");
        return false;
      }

      if (!sec_open)
      {
        _LOGF_ERROR("AuthSec::encrypt(): failed (no handle)");
        return false;
      }

      if (!data || dataSize == 0 || !encryptedData || !encryptedDataSize || *encryptedDataSize == 0)
      {
        _LOGF_ERROR("AuthSec::encrypt(): invalid parameters");
        return false;
      }

      vector<uint8_t> plain, cipher, iv, ksn; // ksn unused
      iv.assign(8, 0); //  zero IV
      // put BTLV length field in front and add data to vector
      addBTLVLength(plain, data, dataSize);
      secError err = secEncryptData(sec_handle, plain, cipher, iv, ksn);

      if (err != EsecOK)
      {
        _LOGF_ERROR("AuthSec::encrypt(): secEncryptData() failed with error %d", err);
        return false;
      }

      if (!cipher.size())
      {
        _LOGF_ERROR("AuthSec::encrypt(): secEncryptData() returned no encrypted data");
        return false;
      }

      if (cipher.size() > *encryptedDataSize)
      {
        _LOGF_ERROR("AuthSec::encrypt(): encrypted data returned by secEncryptData() exceeds buffer size (%zu>%lu)",
                    cipher.size(), *encryptedDataSize);
        return false;
      }

      // take over data
      memcpy(encryptedData, &cipher[0], cipher.size());
      *encryptedDataSize = cipher.size();
      return true;
    }

    bool decrypt(unsigned char *data, unsigned long dataSize, unsigned char *decryptedData, unsigned long *decryptedDataSize)
    {
      MutexLock ml(&m_mutex);

      if (!m_auth_steps_done)
      {
        _LOGF_ERROR("AuthSec::decrypt(): failed (auth steps 1/2 required)");
        return false;
      }

      if (!sec_open)
      {
        _LOGF_ERROR("AuthSec::decrypt(): failed (no handle)");
        return false;
      }

      if (!data || dataSize == 0 || !decryptedData || !decryptedDataSize || *decryptedDataSize == 0)
      {
        _LOGF_ERROR("AuthSec::decrypt(): invalid parameters");
        return false;
      }

      vector<uint8_t> cipher, plain, iv, ksn; // ksn unused
      iv.assign(8, 0); //  zero IV
      cipher.assign(data, data + dataSize);
      secError err = secDecryptData(sec_handle, cipher, plain, iv, ksn);

      if (err != EsecOK)
      {
        _LOGF_ERROR("AuthSec::decrypt(): secDecryptData() failed with error %d", err);
        return false;
      }

      // remove BTLV length field and padding bytes (if any)
      if (!removeBTLVLength(plain))
      {
        _LOGF_ERROR("AuthSec::decrypt(): removeBTLVLength() failed");
        return false;
      }

      if (plain.size() > *decryptedDataSize)
      {
        _LOGF_ERROR("AuthSec::decrypt(): decrypted data returned by secDecryptData() exceeds buffer size (%zu>%lu)",
                    cipher.size(), *decryptedDataSize);
        return false;
      }

      // take over data
      memcpy(decryptedData, &plain[0], plain.size());
      *decryptedDataSize = plain.size();
      return true;
    }

};

/*********************************************************************************/
/************************* DIRECT VSS SCRIPT INVOCATION **************************/
/*********************************************************************************/

#ifdef _VOS

#include <fcntl.h>
#include <unistd.h>

#define SCRIPT_AUTHENTICATE     0x00
#define MACRO_AUTH_STEP1        0x11
#define MACRO_AUTH_STEP2        0x12
#define MACRO_INIT_IV           0x13
#define MACRO_ENCRYPT           0x14
#define MACRO_DECRYPT           0x15
#define MACRO_CMAC_LAST_BLOCK   0x21
#define MACRO_CALCULATE_CMAC    0x22

/* derived class providing authentication inteface with implemented
 * APIs for encryption/decryption and MAC calculation using iPS functions
 * to invoke Authentication VSS script directly. */
class AuthVss : public Auth
{
    // disable copy constructor and assign operator
    AuthVss(const AuthVss&);
    AuthVss& operator=(const AuthVss&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    AuthVss(const AuthVss&&);
    AuthVss& operator=(AuthVss&&);
#endif

    AuthVss() : Auth() {}
    ~AuthVss() {}

    bool inited()
    {
      return true;
    }

    bool step1(const vector<uint8_t> &in_data, vector<uint8_t> &out_data)
    {
      unsigned short outsize;
      out_data.resize(42);
      int ret = iPS_ExecuteScript(SCRIPT_AUTHENTICATE, MACRO_AUTH_STEP1, in_data.size(), (unsigned char *)&in_data[0], out_data.size(), &outsize, &out_data[0]);

      if (ret != 0)
      {
        _LOGF_ERROR("AuthSec::step1(): iPS_ExecuteScript() failed with error %d", ret);
        return false;
      }

      out_data.resize(outsize);

      return true;
    }

    bool step2(const vector<uint8_t> &in_data, vector<uint8_t> &out_data)
    {
      unsigned short outsize;
      out_data.resize(32);
      int ret = iPS_ExecuteScript(SCRIPT_AUTHENTICATE, MACRO_AUTH_STEP2, in_data.size(), (unsigned char *)&in_data[0], out_data.size(), &outsize, &out_data[0]);

      if (ret != 0)
      {
        _LOGF_ERROR("AuthSec::step2(): iPS_ExecuteScript() failed with error %d", ret);
        return false;
      }

      out_data.resize(outsize);

      return true;
    }

    friend class Auth;

  public:

    bool check_script()
    {
      MutexLock ml(&m_mutex);

      unsigned char scriptName[8] = {0};

      int ret = iPS_GetScriptStatus(SCRIPT_AUTHENTICATE, scriptName);

      if (ret != 0)
      {
        _LOGF_ERROR("AuthSec::check_script(): iPS_GetScriptStatus() failed with error %d", ret);
        return false;
      }

      if (strcmp((const char *)scriptName, "Authent") != 0)
      {
        _LOGF_ERROR("AuthSec::check_script(): returned script name '%s'!='Authent'", scriptName);
        return false;
      }

      return true;
    }

    bool calculate_CMAC(Inputype type, const char *fileToMAC, unsigned char *dataToMAC, unsigned dataSize, unsigned char *MAC)
    {
      bool retVal = false;

      MutexLock ml(&m_mutex);

      if (!m_auth_steps_done)
      {
        _LOGF_ERROR("AuthSec::calculate_CMAC(): failed (auth steps 1/2 required)");
        return false;
      }

      int hdl = -1;

      if ((((type == INPUT_TYPE_BUFFER) && (dataToMAC != NULL) && (dataSize > 0)) ||
           ((type == INPUT_TYPE_FILE) && (fileToMAC != NULL) && (strlen(fileToMAC) > 0) && ((hdl = open(fileToMAC, O_RDONLY)) >= 0)))
          && (MAC != NULL))
      {
        unsigned short outLength;
        unsigned char inputBuf[65] = {0};
        unsigned posLastBlock = 0;
        unsigned char lastBlock[8] = {0};

        // In case of file input, determine the data size
        if (type == INPUT_TYPE_FILE)
        {
          dataSize = lseek(hdl, 0, SEEK_END);
        }

        // Determine the position of last block
        posLastBlock = (dataSize - 1) / 8 * 8;

        // Copy last block into input buffer
        if (type == INPUT_TYPE_BUFFER)
        {
          memcpy(&inputBuf[1], &dataToMAC[posLastBlock], dataSize - posLastBlock);
        }
        else // type = INPUT_TYPE_FILE
        {
          lseek(hdl, posLastBlock, SEEK_SET);

          if (read(hdl, (char *)&inputBuf[1], dataSize - posLastBlock) < 0)
          {
            memset((char *)&inputBuf[1], 0, dataSize - posLastBlock);
            _LOGF_WARN("calculate_CMAC: Error reading file");
          }
        }

        _LOGF_INFO("calculate_CMAC: Calculate the CMAC");

        if (dataSize - posLastBlock < 8)
        {
          inputBuf[0] = 1;
          inputBuf[1 + dataSize - posLastBlock] = 0x80;
        }

        if (iPS_ExecuteScript(SCRIPT_AUTHENTICATE, MACRO_CMAC_LAST_BLOCK,
                              9, inputBuf, 8, &outLength, lastBlock) == 0)
        {
          int i;
          int loops;

          // Determine the number of loops for CMAC calculation
          loops = (dataSize + 63) / 64;

          _LOGF_INFO("%s %u%s %d", "calculate_CMAC: iPS_ExecuteScript(...MACRO_CMAC_LAST_BLOCK...) PASSED, dataSize =", dataSize, ", loops =", loops);

          for (i = 0; i < loops; i++)
          {
            memset(inputBuf, 0x00, sizeof(inputBuf));

            if (i < loops - 1)
            {
              if (type == INPUT_TYPE_BUFFER)
              {
                memcpy(&inputBuf[1], &dataToMAC[i * 64], 64);
              }
              else // type = INPUT_TYPE_FILE
              {
                lseek(hdl, i * 64, SEEK_SET);

                if (read(hdl, (char *)&inputBuf[1], 64) < 0)
                {
                  memset((char *)&inputBuf[1], 0, 64);
                  _LOGF_WARN("calculate_CMAC: Error reading file");
                }
              }

              inputBuf[0] = 8;
            }
            else
            {
              if (type == INPUT_TYPE_BUFFER)
              {
                memcpy(&inputBuf[1], &dataToMAC[i * 64], MIN(dataSize - i * 64, 64));
              }
              else // type = INPUT_TYPE_FILE
              {
                lseek(hdl, i * 64, SEEK_SET);

                if (read(hdl, (char *)&inputBuf[1], dataSize - i * 64) < 0)
                {
                  memset((char *)&inputBuf[1], 0, MIN(dataSize - i * 64, 64));
                  _LOGF_WARN("calculate_CMAC: Error reading file");
                }
              }

              if (dataSize % 8 > 0)
              {
                memcpy(&inputBuf[((dataSize - i * 64) / 8 * 8) + 1], lastBlock, 8);
                inputBuf[0] = ((dataSize - i * 64) / 8 * 8 + 8) / 8;
              }
              else
              {
                memcpy(&inputBuf[((dataSize - i * 64) / 8 * 8 - 8) + 1], lastBlock, 8);
                inputBuf[0] = ((dataSize - i * 64) / 8 * 8) / 8;
              }
            }

            if (iPS_ExecuteScript(SCRIPT_AUTHENTICATE, MACRO_CALCULATE_CMAC,
                                  sizeof(inputBuf), inputBuf, 8, &outLength, MAC) != 0)
            {
              _LOGF_ERROR("calculate_CMAC: iPS_ExecuteScript(...MACRO_CALCULATE_CMAC...) FAILED");

              break;
            }
            else if (i == loops - 1)
            {
              // last loop
              retVal = true;
            }

            _LOGF_INFO("calculate_CMAC: iPS_ExecuteScript(...MACRO_CALCULATE_CMAC...) PASSED");
          }
        }

        if (type == INPUT_TYPE_FILE)
        {
          close(hdl);
        }
      }

      return retVal;
    }

    bool encrypt(unsigned char *data, unsigned long dataSize, unsigned char *encryptedData, unsigned long *encryptedDataSize)
    {
      bool retVal = false;

      MutexLock ml(&m_mutex);

      if (!m_auth_steps_done)
      {
        _LOGF_ERROR("AuthSec::encrypt(): failed (auth steps 1/2 required)");
        return false;
      }

      if ((data != NULL) &&
          (dataSize > 0) &&
          (encryptedData != NULL) &&
          (encryptedDataSize != NULL) &&
          (*encryptedDataSize > 0))
      {
        unsigned char  inBuffer[65] = {0};
        vector<unsigned char> tmpBuffer;
        tmpBuffer.resize(dataSize + 3 + 8);

        unsigned char  IV[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
        unsigned short outLength;
        unsigned int   i = 0;
        unsigned int   j;
        unsigned short maxOutDataSize;
        unsigned int   loops = 0;

        if (iPS_ExecuteScript(SCRIPT_AUTHENTICATE, MACRO_INIT_IV, sizeof(IV), IV, 0, &outLength, NULL) != 0)
        {
          return retVal;
        }

        maxOutDataSize = *encryptedDataSize;
        *encryptedDataSize = 0;

        // add BER TLV coded length in front of data to encrypt
        if (dataSize <= 127)
        {
          tmpBuffer[i] = (char) dataSize;
          i++;
        }
        else if ((dataSize >= 128) && (dataSize <= 255))
        {
          tmpBuffer[i] = 0x81;
          i++;
          tmpBuffer[i] = (char) dataSize;
          i++;
        }
        else // dataSize >= 256
        {
          tmpBuffer[i] = 0x82;
          i++;
          tmpBuffer[i] = (dataSize) >> 8;
          i++;
          tmpBuffer[i] = (dataSize & 0x00FF);
          i++;
        }

        // copy data
        memcpy(&tmpBuffer[i], data, dataSize);
        i += dataSize;

        // pad with 0xFF if necessary
        if ((i % 8) > 0)
        {
          memset(&tmpBuffer[i], 0xFF, 8 - i % 8);
          i += 8 - i % 8;
        }

        // Determine the number of loops for the encryption
        loops = (i + 63) / 64;

        // Encrypt the data in 64 byte blocks
        for (j = 0; j < loops; j++)
        {
          unsigned short inDataSize = 64;
          unsigned short outDataSize = 0;

          if (j == loops - 1)
          {
            // Last loop run, determine remaining bytes
            inDataSize = ((i % 64) > 0) ? (i % 64) : (64);
          }

          inBuffer[0] = inDataSize / 8;
          memcpy(&inBuffer[1], &tmpBuffer[j * 64], inDataSize);

          unsigned char outbuf[64];
          unsigned char *pOutBuf = outbuf;

          if (maxOutDataSize >= sizeof(outbuf))
          {
            pOutBuf = &encryptedData[j * 64];
          }

          if (maxOutDataSize < inDataSize ||
              iPS_ExecuteScript(SCRIPT_AUTHENTICATE, MACRO_ENCRYPT, inDataSize + 1, inBuffer,
                                64, &outDataSize, pOutBuf) != 0)
          {
            _LOGF_ERROR("AuthSec::encrypt(): Encryption error -> %d", errno);
            break;
          }

          if (pOutBuf != &encryptedData[j * 64])
          {
            memcpy(&encryptedData[j * 64], pOutBuf, inDataSize);
          }

          *encryptedDataSize += inDataSize;
          maxOutDataSize -= inDataSize;

          if (j == loops - 1)
          {
            // last loop
            retVal = true;
          }
        }
      }

      return retVal;
    }

    bool decrypt(unsigned char *data, unsigned long dataSize, unsigned char *decryptedData, unsigned long *decryptedDataSize)
    {
      bool retVal = false;

      MutexLock ml(&m_mutex);

      if (!m_auth_steps_done)
      {
        _LOGF_ERROR("AuthSec::decrypt(): failed (auth steps 1/2 required)");
        return false;
      }

      if ((data != NULL) &&
          (dataSize > 0) &&
          (decryptedData != NULL) &&
          (decryptedDataSize != NULL) &&
          (*decryptedDataSize > 0))
      {
        unsigned char inBuffer[65] = {0};
        unsigned char  IV[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
        unsigned short outLength;
        unsigned short maxOutDataSize = 0;
        int            loops = 0;
        int            j;

        if (iPS_ExecuteScript(SCRIPT_AUTHENTICATE, MACRO_INIT_IV, sizeof(IV), IV, 0, &outLength, NULL) != 0)
        {
          return retVal;
        }

        maxOutDataSize = *decryptedDataSize;
        memset(decryptedData, 0x00, *decryptedDataSize);
        *decryptedDataSize = 0;

        if (dataSize % 64 == 0)
        {
          loops = dataSize / 64;
        }
        else
        {
          loops = dataSize / 64 + 1;
        }

        // Decrypt the data in 64 byte blocks
        for (j = 0; j < loops; j++)
        {
          unsigned short inDataSize = 64;
          unsigned short outDataSize = 0;

          if (dataSize - j * 64 < 64)
          {
            inDataSize = dataSize - j * 64;
          }

          inBuffer[0] = inDataSize / 8;
          memcpy(&inBuffer[1], &data[j * 64], MIN(inDataSize, 64));

          unsigned char outbuf[64];
          unsigned char *pOutBuf = outbuf;

          if (maxOutDataSize >= sizeof(outbuf))
          {
            pOutBuf = &decryptedData[j * 64];
          }

          if (maxOutDataSize < inDataSize ||
              iPS_ExecuteScript(SCRIPT_AUTHENTICATE, MACRO_DECRYPT, inDataSize + 1, inBuffer,
                                64, &outDataSize, pOutBuf) != 0)
          {
            _LOGF_ERROR("AuthSec::decrypt(): Decryption error -> %d", errno);
            break;
          }

          if (pOutBuf != &decryptedData[j * 64])
          {
            memcpy(&decryptedData[j * 64], pOutBuf, inDataSize);
          }

          *decryptedDataSize += inDataSize;
          maxOutDataSize -= inDataSize;
        }

        if (*decryptedDataSize > 0)
        {
          // determine the read data size, remove BER TLV coded length in front of data to encrypt and remove padded data (0xFF) if exist
          if (decryptedData[0] <= 127)
          {
            *decryptedDataSize = decryptedData[0];
            memmove(&decryptedData[0], &decryptedData[1], *decryptedDataSize);
            retVal = true;
          }
          else if (decryptedData[0] == 0x81)
          {
            *decryptedDataSize = decryptedData[1];
            memmove(&decryptedData[0], &decryptedData[2], *decryptedDataSize);
            retVal = true;
          }
          else if (decryptedData[0] == 0x82)
          {
            *decryptedDataSize = decryptedData[1] * 256 + decryptedData[2];
            memmove(&decryptedData[0], &decryptedData[3], *decryptedDataSize);
            retVal = true;
          }
        }
      }

      return retVal;
    }
};

#endif // #ifndef _VOS

Auth* Auth::instance()
{
  if (obj)  // optimize
  {
    return obj;
  }

  pthread_mutex_lock(&obj_mutex);
  Auth *loc_obj = 0;
#ifdef _VOS

  if (vos_sys8())
  {
    loc_obj = new AuthSec();
  }
  else
  {
    loc_obj = new AuthVss();
  }

#else
  loc_obj = new AuthSec();
#endif

  if (loc_obj->inited())
  {
    obj = loc_obj;
  }
  else
  {
    delete loc_obj;
  }

  pthread_mutex_unlock(&obj_mutex);

  return obj;
}

/*********************************************************************************/
/****************************** MODE INDEPENDENT API *****************************/
/*********************************************************************************/

int check_AuthScript()
{
  Auth *auth = Auth::instance();

  if (!auth)
  {
    _LOGF_ERROR("check_AuthScript(): initialization failed");
    return RESULT_FAIL;
  }

  if (!auth->check_script())
  {
    _LOGF_ERROR("check_AuthScript(): bad script status");
    return RESULT_FAIL;
  }

  return RESULT_OK;
}

int system_Auth(enum AuthStep as,
                unsigned char *in, unsigned short in_size,
                unsigned char *out, unsigned short *out_size)
{
  Auth *auth = Auth::instance();

  if (!auth)
  {
    _LOGF_ERROR("system_Auth(): initialization failed");
    return RESULT_FAIL;
  }

  if (!auth->auth(as, in, in_size, out, out_size))
  {
    _LOGF_ERROR("system_Auth(): auth. step %d failed", as == AuthStep_1 ? 1 : 2);
    return RESULT_FAIL;
  }

  return RESULT_OK;
}

int calculate_CMAC(Inputype type, const char *fileToMAC, unsigned char *dataToMAC, unsigned dataSize, unsigned char *MAC)
{
  Auth *auth = Auth::instance();

  if (!auth)
  {
    _LOGF_ERROR("calculate_CMAC(): initialization failed");
    return RESULT_FAIL;
  }

  if (!auth->calculate_CMAC(type, fileToMAC, dataToMAC, dataSize, MAC))
  {
    _LOGF_ERROR("calculate_CMAC(): Auth::calculate_CMAC() failed");
    return RESULT_FAIL;
  }

  return RESULT_OK;
}

int check_CMAC(Inputype type, const char *filename, unsigned char  *data, unsigned dataSize, unsigned char *MAC)
{
  if (!MAC)
  {
    _LOGF_ERROR("check_CMAC(): invalid parameter 'MAC'");
    return RESULT_FAIL;
  }

  unsigned char calc_MAC[8] = {0};

  if (calculate_CMAC(type, filename, data, dataSize, calc_MAC) != RESULT_OK)
  {
    _LOGF_ERROR("check_CMAC(): calculate_CMAC() failed");
    return RESULT_FAIL;
  }

  // MAC check
  if (memcmp(MAC, calc_MAC, 8) != 0)
  {
    _LOGF_ERROR("check_CMAC(): MAC invalid");
    return RESULT_FAIL;
  }

  return RESULT_OK;
}

int encrypt_Data(unsigned char *data, unsigned long dataSize, unsigned char *encryptedData, unsigned long *encryptedDataSize)
{
  Auth *auth = Auth::instance();

  if (!auth)
  {
    _LOGF_ERROR("encrypt_Data(): initialization failed");
    return RESULT_FAIL;
  }

  if (!auth->encrypt(data, dataSize, encryptedData, encryptedDataSize))
  {
    _LOGF_ERROR("encrypt_Data(): Auth::encrypt() failed");
    return RESULT_FAIL;
  }

  return RESULT_OK;
}

int decrypt_Data(unsigned char *data, unsigned long dataSize, unsigned char *decryptedData, unsigned long *decryptedDataSize)
{
  Auth *auth = Auth::instance();

  if (!auth)
  {
    _LOGF_ERROR("decrypt_Data(): initialization failed");
    return RESULT_FAIL;
  }

  if (!auth->decrypt(data, dataSize, decryptedData, decryptedDataSize))
  {
    _LOGF_ERROR("decrypt_Data(): Auth::decrypt() failed");
    return RESULT_FAIL;
  }

  return RESULT_OK;
}

int calculate_MD5(const char *file, unsigned char *checkSum)
{
  if (!file || !checkSum)
  {
    _LOGF_ERROR("calculate_MD5: Parameter error (%p,%p)", file, checkSum);
    return 0;
  }

  FILE *fp = fopen(file, "r");

  if (!fp)
  {
    _LOGF_ERROR("calculate_MD5: File '%s' not found", file);
    return 0;
  }

  unsigned char block[512];
  int l;
  sdi::MD5_CTX ctx;

  sdi::MD5Init(&ctx);

  do
  {
    l = fread(block, 1, sizeof(block), fp);

    if (l > 0)
    {
      sdi::MD5Update(&ctx, block, l);
    }
  }
  while (l == sizeof(block));

  fclose(fp);
  sdi::MD5Final(checkSum, &ctx);
  return 1;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

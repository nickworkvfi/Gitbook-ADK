---
title: sec/src/api/export/sec/libseccmd-comp.h
summary: ADK Security Service API (legacy) 

---

# sec/src/api/export/sec/libseccmd-comp.h

ADK Security Service API (legacy)  [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[com_verifone_seccmd](namespacecom__verifone__seccmd.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[com_verifone_seccmd::EncDecData](structcom__verifone__seccmd_1_1_enc_dec_data.md)**  |
| struct | **[com_verifone_seccmd::EncDecDataIV](structcom__verifone__seccmd_1_1_enc_dec_data_i_v.md)**  |
| struct | **[com_verifone_seccmd::MACData](structcom__verifone__seccmd_1_1_m_a_c_data.md)**  |
| struct | **[com_verifone_seccmd::genMAC](structcom__verifone__seccmd_1_1gen_m_a_c.md)**  |
| struct | **[com_verifone_seccmd::PINBlockParams](structcom__verifone__seccmd_1_1_p_i_n_block_params.md)**  |
| struct | **[com_verifone_seccmd::PropData](structcom__verifone__seccmd_1_1_prop_data.md)**  |
| struct | **[com_verifone_seccmd::EncPINBlock](structcom__verifone__seccmd_1_1_enc_p_i_n_block.md)**  |
| struct | **[com_verifone_seccmd::SecConfig](structcom__verifone__seccmd_1_1_sec_config.md)**  |
| struct | **[com_verifone_seccmd::Ksn](structcom__verifone__seccmd_1_1_ksn.md)**  |
| struct | **[com_verifone_seccmd::Ksn_v2](structcom__verifone__seccmd_1_1_ksn__v2.md)**  |
| struct | **[com_verifone_seccmd::DUKPTmask](structcom__verifone__seccmd_1_1_d_u_k_p_tmask.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[FLAG_BYPASS_KSN_INCR](group__com__verifone__seccmd.md#define-flag-bypass-ksn-incr)**  |
|  | **[DEPRECATED](libseccmd-comp_8h.md#define-deprecated)**  |
|  | **[SCRIPT_NAME_LENGTH](libseccmd-comp_8h.md#define-script-name-length)**  |
|  | **[MIN_COMM_TIMEOUT](libseccmd-comp_8h.md#define-min-comm-timeout)**  |
|  | **[DEFAULT_COMM_TIMEOUT](libseccmd-comp_8h.md#define-default-comm-timeout)**  |
|  | **[ASSERT_PARAM](libseccmd-comp_8h.md#define-assert-param)**(assertion)  |
|  | **[ASSERT_BUFSIZE](libseccmd-comp_8h.md#define-assert-bufsize)**(assertion)  |
|  | **[DO_OLD](libseccmd-comp_8h.md#define-do-old)**(Name, Group, Offset, Old, Description)  |

## Detailed Description

ADK Security Service API (legacy) 

This header file contains information about the old ADK security service (legacy) API functions. This interface is only mapping old 1.6.x interface to new 2.x.x. (see programmers guide for more information) 




## Macros Documentation

### define FLAG_BYPASS_KSN_INCR

```cpp
#define FLAG_BYPASS_KSN_INCR 0x0001
```


### define DEPRECATED

```cpp
#define DEPRECATED 
```


Defines 


### define SCRIPT_NAME_LENGTH

```cpp
#define SCRIPT_NAME_LENGTH 10
```


### define MIN_COMM_TIMEOUT

```cpp
#define MIN_COMM_TIMEOUT 30000
```


Communication timeouts 


### define DEFAULT_COMM_TIMEOUT

```cpp
#define DEFAULT_COMM_TIMEOUT -1 /** A negative timeout means: wait forever */
```


### define ASSERT_PARAM

```cpp
#define ASSERT_PARAM(
    assertion
)
{ \
    if(!(assertion)) \
    { \
    SEC_LOG_CRIT("Parameter assertion failed: " #assertion); \
    return SC_WRONG_PAR; \
    } \
}
```


### define ASSERT_BUFSIZE

```cpp
#define ASSERT_BUFSIZE(
    assertion
)
{ \
    if(!(assertion)) \
    { \
    SEC_LOG_CRIT("Output-Buffer too small: " #assertion); \
    return SC_RECBUF_SMALL; \
    } \
}
```


### define DO_OLD

```cpp
#define DO_OLD(
    Name,
    Group,
    Offset,
    Old,
    Description
)
if (error==Name) return Old;
```


## Source code

```cpp
#ifndef _LIBSECCMD_H_
#define _LIBSECCMD_H_

/***************************************************************************
 * Includes
 **************************************************************************/
#include <stdlib.h>
#include "sec2.h"

#ifdef _VRXEVO
#include <unistd.h>
#include <string>
#include <SVC_NET.H>
#endif

#ifdef _VOS
#include <string>
#include <stdint.h>
#endif
#include "libsec.h"
#include "compatibilityHelper.h"
#include <algorithm>
#include <cstring>
#include <climits>
#include <sec/seclogging.h>
#include "html/gui.h"
#include <stdio.h>


/***************************************************************************
 * Namespace
 **************************************************************************/
using namespace com_verifone_host;

/***************************************************************************
 * Preprocessor constant definitions
 **************************************************************************/
#define FLAG_BYPASS_KSN_INCR     0x0001


/***************************************************************************
 * Global variable declarations
 **************************************************************************/
namespace com_verifone_seccmd
{
  #ifndef DEPRECATED
  #  ifdef __GNUC__
  #    define DEPRECATED __attribute__((deprecated))
  #  elif defined(_MSC_VER)
  #    define DEPRECATED __declspec(deprecated)
  #  else
  #    define DEPRECATED
  #  endif
  #endif

  #define SCRIPT_NAME_LENGTH         10

  #define MIN_COMM_TIMEOUT        30000
  #define DEFAULT_COMM_TIMEOUT       -1 
  enum SecCmd_errors
  {
    SC_SUCCESS = 0,         
    SC_ERROR = -1,          
    SC_WRONG_PAR = -2,      
    SC_SEND_FAILED = -3,    
    SC_RECBUF_SMALL = -4,   
    SC_TIMER_ERROR = -5     
  };

#define ASSERT_PARAM(assertion) \
{ \
    if(!(assertion)) \
    { \
    SEC_LOG_CRIT("Parameter assertion failed: " #assertion); \
    return SC_WRONG_PAR; \
    } \
}

#define ASSERT_BUFSIZE(assertion) \
{ \
    if(!(assertion)) \
    { \
    SEC_LOG_CRIT("Output-Buffer too small: " #assertion); \
    return SC_RECBUF_SMALL; \
    } \
}


  struct EncDecData
  {
    uint8_t *pInData; 
    u_long uiInLen;   
    uint8_t *pOutData;
    u_long uiOutLen;  
    uint8_t *stan;    
    uint8_t *tid;     
  };

  struct EncDecDataIV
  {
    uint8_t *pInData; 
    u_long uiInLen;   
    uint8_t *pOutData;
    u_long uiOutLen;  
    uint8_t *IV;      
    u_long uiIVLen;   
  };

  struct MACData
  {
    uint8_t *pData; 
    u_long   uiLen; 
  };

  struct genMAC
  {
    uint8_t *pMAC;    
    u_char  ucMACLen; 
  };

  struct PINBlockParams
  {
    u_char *pPAN;   
    u_char *pSTAN;  
    u_char PinBlockFormat;
    u_char TransAmount[TRANS_AMOUNT_SIZE]; 
  };

  struct PropData
  {
    uint8_t *pPropData;
    u_long   uiPropDataLen;
  };

  struct EncPINBlock
  {
    uint8_t *pPINBlock;       
    u_char   ucPINBlockLen;   
  };

  struct SecConfig
  {
    u_char PinEntryType;    
    u_char PinBlockFormat;  
    u_char KeyManagement;   
    u_char PINAlgo;         
    u_char DataAlgo;        
    u_char ScriptIdent[SCRIPT_NAME_LENGTH];  
  };

  struct Ksn
  {
    u_char KSN[KSN_SIZE];
  };

  struct Ksn_v2
  {
    u_char *KSN;
    u_long KSNLen;
  };

  struct DUKPTmask
  {
    u_char *maskPIN;  
    u_char *maskMAC;  
    u_char *maskENC;  
    u_char sizeP;     
    u_char sizeM;     
    u_char sizeE;     
  };



/***************************************************************************
 * Helper Functions
 **************************************************************************/

inline bool hex2binCH(char in, unsigned char *out)
{
    if (in >= 0x30 && in <= 0x39)
        *out = (unsigned char) (in - 0x30);
    else if (in >= 'A' && in <= 'F')
        *out = (unsigned char) (in - 'A' + 10);
    else if (in >= 'a' && in <= 'f')
        *out = (unsigned char) (in - 'a' + 10);
    else
        return false;
    return true;
}

inline int convDsp2Hex(const char *dsp, size_t dsp_len, char *hex, const size_t max_hex_len)
{
    if (!dsp || !hex || dsp == hex || dsp_len == 0)
        return -1;
    if (dsp_len % 2)
        --dsp_len; // skip one byte
    dsp_len >>= 1;

    int i;
    unsigned char t1 = 0, t2 = 0;
    int end = (dsp_len > max_hex_len) ? (max_hex_len) : (dsp_len);
    for (i = 0; i < end; i++)
    {
        if (!hex2binCH(*dsp, &t1))
            return i;
        if (!hex2binCH(*(dsp + 1), &t2))
            return i;
        hex[i] = (char) ((t1 << 4) | t2);
        dsp += 2;
    }
    return end;
}


#define DO_OLD(Name, Group, Offset, Old, Description)  if (error==Name) return Old;

inline uint8_t getCompatibleCode(secError error)
{
    ERRORS(DO_OLD)

    return RESP_CODE_OLD_DEFAULT;
}


inline int getCompatibleReturn(secError newError)
{
    SEC_LOG_TRACE("getCompatibleReturn: secError=%#x ", newError);
    if (newError == EsecINVAL) return SC_WRONG_PAR;

    if ((newError & EsecGroupMASK) == EsecGroupIPC) return SC_SEND_FAILED;
    if ((newError & EsecGroupMASK) == EsecGroupApi) return SC_ERROR;

    return SC_SUCCESS;
}

inline int getCompatibleReturn(secError newError, uint8_t* oldError)
{
    ASSERT_PARAM(oldError);

    *oldError = getCompatibleCode(newError);
    SEC_LOG_TRACE("getCompatibleReturn: secError=%#x -> errCode(old)=%d", newError, *oldError);

    return getCompatibleReturn(newError);
}


/***************************************************************************
 * Exported function declarations
 **************************************************************************/

  DEPRECATED inline int Sec_Init( u_char* /*appName*/ = NULL )
  {
      return getCompatibleReturn(secInit());
  }

  DEPRECATED inline void Sec_Destroy( )
  {
      secDestroy();
  }


/***************************************************************************
 * Exported function declarations
 **************************************************************************/


DEPRECATED inline u_char Sec_Open(const std::string &schemaName, uint8_t *errCode)
{
    u_char oldHandle = 0;
    secHandle_t handle;
    secError ret = secOpen(schemaName, handle);

    if (!ret)
    {
        oldHandle = secCompatiblity_registerHandle(handle);
    }

    getCompatibleReturn(ret, errCode);
    return oldHandle;
}

DEPRECATED inline u_char Sec_Open( u_char * schemaName, uint8_t *errCode )
{
    return Sec_Open(schemaName, errCode);
}


  DEPRECATED inline int Sec_Close(u_char HostId, uint8_t *errCode)
  {
      ASSERT_PARAM(errCode);

      secHandle_t handle;
      secError err = secCompatiblity_getHandle(HostId, handle);
      if (err) return getCompatibleReturn(err, errCode);

      secError ret = secClose(handle);
      if (ret) return getCompatibleReturn(ret, errCode);

      ret = secCompatiblity_deregisterHandle(HostId);
      return getCompatibleReturn(ret, errCode);
  }


  DEPRECATED inline int Sec_SelectHostConf(u_char HostId, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
  {
      ASSERT_PARAM(errCode);

      secHandle_t handle;
      secError err = secCompatiblity_getHandle(HostId, handle);
      return getCompatibleReturn(err, errCode);
  }

DEPRECATED inline int Sec_GetKeyData(u_char HostId, u_char GKD_KeyType, u_char kekFlag, char *aOutBuf, u_long *uiOutBufLen,
        uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
{
    ASSERT_PARAM(aOutBuf);
    ASSERT_PARAM(uiOutBufLen);
    ASSERT_PARAM(errCode);

    secHandle_t handle;
    secError err = secCompatiblity_getHandle(HostId, handle);
    if (err) return getCompatibleReturn(err, errCode);

    //kekFlag==0 -> ignore
    if (kekFlag)
    {
        SecTransactionData_t td;
        td[CTransactionData::TagBendigoKEKFlag] = kekFlag;
        secPutTransactionData(handle, td);
    }

    std::vector<uint8_t> out;

    secError ret = secGetKeyData(handle, (com_verifone_host::key_type_t) GKD_KeyType, out);

    ASSERT_BUFSIZE(*uiOutBufLen >= out.size());
    memcpy(aOutBuf, &out[0], out.size());
    *uiOutBufLen = out.size();

    secClearTransactionData(handle);

    return getCompatibleReturn(ret, errCode);
}

DEPRECATED inline int Sec_GetKeyData(u_char GKD_HostId, u_char GKD_KeyType, char *aOutBuf, u_long *uiOutBufLen, uint8_t *errCode,
        long timeout = DEFAULT_COMM_TIMEOUT)
{
    return Sec_GetKeyData(GKD_HostId, GKD_KeyType, (u_char) 0, aOutBuf, uiOutBufLen, errCode, timeout = DEFAULT_COMM_TIMEOUT);
}



static inline bool is_hex_notation(std::string const& s)
{
  return ((!(s.length() % 2))  && (s.find_first_not_of("0123456789abcdefABCDEF") == std::string::npos));
}


static inline std::vector<uint8_t> hexString_to_binary(const std::string& input)
{
    static const char* const lut = "0123456789ABCDEF";
    size_t len = input.length();
    LOG_ASSERT(!(len & 1) /*even length*/);

    std::vector<uint8_t> output;
    output.reserve(len / 2);
    for (size_t i = 0; i < len; i += 2)
    {
        char a = input[i];
        const char* p = std::lower_bound(lut, lut + 16, a);
        LOG_ASSERT (*p == a); //else not a hex digit

        char b = input[i + 1];
        const char* q = std::lower_bound(lut, lut + 16, b);
        LOG_ASSERT (*q == b); //else not a hex digit

        output.push_back(((p - lut) << 4) | (q - lut));
    }
    return output;
}

static inline std::string binary_to_hexString(const std::vector<uint8_t>& input)
{
    static const char* const lut = "0123456789ABCDEF";
    size_t len = input.size();

    std::string output;
    output.reserve(2 * len);
    for (size_t i = 0; i < len; ++i)
    {
        const unsigned char c = input[i];
        output.push_back(lut[c >> 4]);
        output.push_back(lut[c & 15]);
    }
    return output;
}

DEPRECATED inline int Sec_UpdateKey(u_char HostId, key_type_t UpK_KeyType, u_char kekFlag,
                    char *aKeyData, u_long uiKeyDataLen, Ksn_v2 KSN,
                    uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
  {
      ASSERT_PARAM(errCode);
      secHandle_t handle;
      secError err = secCompatiblity_getHandle(HostId, handle);
      if (err) return getCompatibleReturn(err, errCode);

      //kekFlag==0 -> ignore

      secError ret=EsecOK;

      if (kekFlag)
      {
          SecTransactionData_t td;
          td[CTransactionData::TagBendigoKEKFlag] = kekFlag;
          ret = secPutTransactionData(handle, td);
      }

      if (!ret)
      {
          std::vector<uint8_t> keyData;
          if(aKeyData)
          {
              std::string sKeyData(aKeyData, uiKeyDataLen);

              if (is_hex_notation(sKeyData))
              {
                  SEC_LOG_WARN("Assuming key is hex-string instead of binary data - use Compatibility Workaround");
                  keyData = hexString_to_binary(sKeyData);
              } else {

                  keyData.assign(aKeyData, aKeyData+uiKeyDataLen);
              }
          }

          std::vector<uint8_t> ksn;
          if(KSN.KSN && KSN.KSNLen)
          {
              ksn.assign(KSN.KSN, KSN.KSN+KSN.KSNLen);
          }

          ret = secUpdateKey(handle, UpK_KeyType, keyData, ksn);
      }

      // Do not secClearTransactionData(handle) as IPP session keys must still be available for further functions

      return getCompatibleReturn(ret, errCode);
  }

inline Ksn_v2 getKsn_v2(Ksn *pKSN)
{
    Ksn_v2 KSN = {NULL,0};
    if(pKSN)
    {
        KSN.KSN = pKSN->KSN;
        KSN.KSNLen = KSN_SIZE;
    }
    return KSN;
}


DEPRECATED inline int Sec_UpdateKey(u_char UpK_HostId, key_type_t UpK_KeyType, u_char kekFlag, char *aKeyData, u_long uiKeyDataLen,
        Ksn *pKSN, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)

{
    Ksn_v2 KSN = getKsn_v2(pKSN);
    return Sec_UpdateKey(UpK_HostId, UpK_KeyType, kekFlag, aKeyData, uiKeyDataLen, KSN, errCode, timeout = DEFAULT_COMM_TIMEOUT);
}

DEPRECATED inline int Sec_UpdateKey(u_char UpK_HostId, u_char UpK_KeyType, u_char kekFlag, char *aKeyData, u_long uiKeyDataLen,
        uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
{
    return Sec_UpdateKey(UpK_HostId, (key_type_t) UpK_KeyType, kekFlag, aKeyData, uiKeyDataLen, (Ksn*) NULL, errCode,
            timeout = DEFAULT_COMM_TIMEOUT);
}

DEPRECATED inline int Sec_UpdateKey(u_char UpK_HostId, u_char UpK_KeyType, char *aKeyData, u_long uiKeyDataLen, uint8_t *errCode,
        long timeout = DEFAULT_COMM_TIMEOUT)
{
    return Sec_UpdateKey(UpK_HostId, UpK_KeyType, 0, aKeyData, uiKeyDataLen, errCode, timeout = DEFAULT_COMM_TIMEOUT);
}



DEPRECATED inline int Sec_AS2805KeyMgmnt(u_char HostId, u_char AS2805_AS2805Func, char *aKeyData, u_long *uiKeyDataLen,
        u_long /*uiMaxKeyDataLen*/, uint8_t *errCode, long /*timeout*/= DEFAULT_COMM_TIMEOUT)
{
    ASSERT_PARAM(aKeyData);
    ASSERT_PARAM(uiKeyDataLen);
    ASSERT_PARAM(errCode);

    secHandle_t handle;
    secError err = secCompatiblity_getHandle(HostId, handle);
    if (err) return getCompatibleReturn(err, errCode);

    SecTransactionData_t td;
    td[CTransactionData::TagAS2805Func] = AS2805_AS2805Func;
    secPutTransactionData(handle, td);

    std::vector<uint8_t> keyData;
    keyData.assign(aKeyData, aKeyData + *uiKeyDataLen);

    std::vector<uint8_t> ksnDummy;

    secError ret = secUpdateKey(handle, 0, keyData, ksnDummy);

    secClearTransactionData(handle);

    return getCompatibleReturn(ret, errCode);
}


DEPRECATED inline int Sec_EncryptData(u_char HostId, u_char EncD_EncMode, EncDecDataIV *pData, Ksn *pKSN, uint8_t *errCode,
        long /*timeout*/= DEFAULT_COMM_TIMEOUT)
{

    ASSERT_PARAM(pData);
    ASSERT_PARAM(pData->pInData);
    ASSERT_PARAM(pData->pOutData);
    ASSERT_PARAM(pData->uiOutLen);
    ASSERT_PARAM(errCode);

    secHandle_t handle;
    secError err = secCompatiblity_getHandle(HostId, handle);
    if (err) return getCompatibleReturn(err, errCode);

    //EncD_EncMode==0 -> ignore
    //if (EncD_EncMode)
    {

        SecTransactionData_t td;
        td[CTransactionData::TagADEEncMode] = EncD_EncMode;
        secPutTransactionData(handle, td);
    }

    std::vector<uint8_t> plainData;
    plainData.assign(pData->pInData, pData->pInData + pData->uiInLen);

    std::vector<uint8_t> encData;

    std::vector<uint8_t> iv;
    if (pData->IV && pData->uiIVLen)
    {
        iv.assign(pData->IV, pData->IV + pData->uiIVLen);
    }

    std::vector<uint8_t> ksn;

    secError ret = secEncryptData(handle, plainData, encData, iv, ksn);

    if (pKSN)
    {
        ASSERT_BUFSIZE(ksn.size() <= sizeof(pKSN->KSN));
        memcpy(pKSN->KSN, &ksn[0], ksn.size());
    }

    memcpy(pData->pOutData, &encData[0], encData.size());
    pData->uiOutLen = encData.size();

    if (pData->IV)
    {
        memcpy(pData->IV, &iv[0], iv.size());
        pData->uiIVLen = iv.size();
    }

    secClearTransactionData(handle);

    return getCompatibleReturn(ret, errCode);
}

  DEPRECATED inline int Sec_EncryptData(u_char EncD_HostId, EncDecDataIV *pData, Ksn *pKSN, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
  {
      return Sec_EncryptData(EncD_HostId, 0, pData, pKSN, errCode, timeout = DEFAULT_COMM_TIMEOUT);
  }


DEPRECATED inline int Sec_EncryptData(u_char EncD_HostId, EncDecDataIV *pData, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
{
    return Sec_EncryptData(EncD_HostId, 0, pData, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
}

DEPRECATED inline int Sec_EncryptData(u_char EncD_HostId, u_char EncD_EncMode, EncDecData *pData, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
{
    ASSERT_PARAM(pData);

    uint8_t IV[DES_IV_SIZE];
    memset(IV, 0x00, sizeof(IV));
    if (pData->stan || pData->tid)
    {
        if (pData->stan)
        {
            uint8_t formattedStanStr[DES_IV_SIZE * 2];
            uint8_t formattedStan[DES_IV_SIZE];
            memset(formattedStanStr, 0x30, sizeof(formattedStanStr));
            memset(formattedStan, 0x0, sizeof(formattedStan));
            memcpy(&formattedStanStr[sizeof(formattedStanStr) - strlen((const char *) pData->stan)], pData->stan,
                    strlen((const char *) pData->stan));
            convDsp2Hex((const char *) formattedStanStr, sizeof(formattedStanStr),
                    reinterpret_cast<char *>(formattedStan), sizeof(formattedStan));
            memcpy(IV, formattedStan, sizeof(formattedStan));
        }

        if (pData->tid)
            for (int i = 0; i < DES_IV_SIZE && pData->tid[i] != 0; i++)
                IV[i] ^= pData->tid[i];
    }

    EncDecDataIV EncDecDataIV;
    EncDecDataIV.IV = IV;
    EncDecDataIV.uiIVLen = sizeof(IV);
    EncDecDataIV.pOutData = pData->pOutData;
    EncDecDataIV.uiOutLen = pData->uiOutLen;
    EncDecDataIV.pInData = pData->pInData;
    EncDecDataIV.uiInLen = pData->uiInLen;

    int ret = Sec_EncryptData(EncD_HostId, EncD_EncMode, &EncDecDataIV, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);

    pData->uiOutLen = EncDecDataIV.uiOutLen;
    return ret;
}


   DEPRECATED inline int Sec_DecryptData(u_char HostId, EncDecDataIV *pData, Ksn *pKSN, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
   {
       ASSERT_PARAM(pData);
       ASSERT_PARAM(pData->pInData);
       ASSERT_PARAM(pData->pOutData);
       ASSERT_PARAM(pData->uiOutLen);
       ASSERT_PARAM(errCode);

       secHandle_t handle;
       secError err = secCompatiblity_getHandle(HostId, handle);
       if (err) return getCompatibleReturn(err, errCode);

       std::vector<uint8_t> encData;
       encData.assign(pData->pInData, pData->pInData + pData->uiInLen);

       std::vector<uint8_t> plainData;

       std::vector<uint8_t> iv;
       if(pData->IV && pData->uiIVLen)
       {
           iv.assign(pData->IV, pData->IV + pData->uiIVLen);
       }

       std::vector<uint8_t> ksn;

       secError ret = secDecryptData(handle, encData, plainData, iv, ksn);

       memcpy(pData->pOutData, &plainData[0], plainData.size());
       pData->uiOutLen = plainData.size();

       if(pData->IV)
       {
           memcpy(pData->IV, &iv[0], iv.size());
           pData->uiIVLen = iv.size();
       }

       if (pKSN)
       {
           memcpy(pKSN->KSN, &ksn[0], std::min((size_t)KSN_SIZE, ksn.size()));
       }

       return getCompatibleReturn(ret, errCode);
   }

DEPRECATED inline int Sec_DecryptData(u_char DecD_HostId, EncDecDataIV *pData, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
{
    return Sec_DecryptData(DecD_HostId, pData, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
}

DEPRECATED inline int Sec_DecryptData(u_char DecD_HostId, u_char /*DecD_DecMode*/, EncDecData *pData, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
{
    ASSERT_PARAM(pData);

    uint8_t IV[DES_IV_SIZE];
    memset(IV,0x00,sizeof(IV));
    if( pData->stan || pData->tid )
    {
      if( pData->stan )
      {
        uint8_t formattedStanStr[DES_IV_SIZE*2];
        uint8_t formattedStan[DES_IV_SIZE];
        memset(formattedStanStr, 0x30, sizeof(formattedStanStr));
        memset(formattedStan,    0x0,  sizeof(formattedStan));
        memcpy(&formattedStanStr[sizeof(formattedStanStr) - strlen((const char *)pData->stan)], pData->stan, strlen((const char *)pData->stan));
        convDsp2Hex((const char *)formattedStanStr, sizeof(formattedStanStr), reinterpret_cast<char *>(formattedStan), sizeof(formattedStan));
        memcpy(IV,formattedStan,sizeof(formattedStan));
      }

      if( pData->tid )
        for(int i=0; i<DES_IV_SIZE && pData->tid[i]!=0; i++ )
          IV[i] ^= pData->tid[i];
    }

    EncDecDataIV EncDecDataIV;
    EncDecDataIV.IV = IV;
    EncDecDataIV.uiIVLen = sizeof(IV);
    EncDecDataIV.pOutData = pData->pOutData;
    EncDecDataIV.uiOutLen = pData->uiOutLen;
    EncDecDataIV.pInData = pData->pInData;
    EncDecDataIV.uiInLen = pData->uiInLen;
    int ret = Sec_DecryptData(DecD_HostId, &EncDecDataIV, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);

    pData->uiOutLen = EncDecDataIV.uiOutLen;
    return ret;
}


DEPRECATED inline int Sec_GenerateMAC(u_char HostId, u_char /*GMAC_UseDefaultCV*/, u_char GMAC_MACMode,
                      MACData *pData, genMAC *pMAC, Ksn *pKSN, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
  {
      ASSERT_PARAM(pData);
      ASSERT_PARAM(pData->pData);
      ASSERT_PARAM(pMAC);
      ASSERT_PARAM(pMAC->pMAC);
      ASSERT_PARAM(errCode);

      secHandle_t handle;
      secError err = secCompatiblity_getHandle(HostId, handle);
      if (err) return getCompatibleReturn(err, errCode);

      std::vector<uint8_t> data;

      if (GMAC_MACMode == 5)
      {
          // convert data to BIN format
          std::string sData((char*)pData->pData, pData->uiLen);
          data = hexString_to_binary(sData);
      }
      else
      {
          // use data in BIN format
          data.assign(pData->pData, pData->pData + pData->uiLen);
      }

      std::vector<uint8_t> mac;
      std::vector<uint8_t> ksn;
      std::vector<uint8_t> dummy_iv(8,0);

      secError ret = secSign(handle, data, mac, dummy_iv, ksn);

      if (GMAC_MACMode == 5)
      {
          // convert MAC to ASCII format
          std::string sMAC = binary_to_hexString(mac);

          ASSERT_BUFSIZE(sMAC.size() <= UCHAR_MAX);
          memcpy(pMAC->pMAC, &sMAC[0], sMAC.size());
          pMAC->ucMACLen = (u_char)sMAC.size();

          /*it seems user expects c-string - add a trailing zero: */
          pMAC->pMAC[sMAC.size()] = 0x00;
          SEC_DBG_TRACE("MAC (ASCII): %s", pMAC->pMAC);
      }
      else
      {
          ASSERT_BUFSIZE(mac.size() <= UCHAR_MAX);
          memcpy(pMAC->pMAC, &mac[0], mac.size());
          pMAC->ucMACLen = (u_char)mac.size();
      }

      if (!ksn.empty())
      {
          if (pKSN == NULL)
          {
              SEC_LOG_WARN("SCAPP_API: SCAPP_API: No memory for KSN, ignore");
          } else if (KSN_SIZE < ksn.size())
          {
              SEC_LOG_ERROR("SCAPP_API: KSN buffer is to small, returned %d bytes key data", ksn.size());
              return EsecINVAL;
          } else {
              ASSERT_BUFSIZE(KSN_SIZE >= ksn.size());
              memcpy(pKSN->KSN, &ksn[0], ksn.size());
          }
      }
      else
      {
          SEC_LOG_TRACE("SCAPP_API: No KSN");
          if (pKSN != NULL)
          {
              memset(pKSN->KSN, 0x00, KSN_SIZE);
          }
      }

      return getCompatibleReturn(ret, errCode);
  }


DEPRECATED inline int Sec_GenerateMAC(u_char GMAC_HostId, u_char GMAC_UseDefaultCV, u_char GMAC_MACMode, MACData *pData, genMAC *pMAC,
        uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
{
    return Sec_GenerateMAC(GMAC_HostId, GMAC_UseDefaultCV, GMAC_MACMode, pData, pMAC, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
}



  DEPRECATED inline int Sec_VerifyMAC(u_char HostId, u_char /*VMAC_UseDefaultCV*/, u_char VMAC_MACMode,
                    MACData *pData, genMAC MAC, Ksn *pKSN, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT){

      ASSERT_PARAM(pData);
      ASSERT_PARAM(pData->pData);
      ASSERT_PARAM(MAC.pMAC);
      ASSERT_PARAM(errCode);

      secHandle_t handle;
      secError err = secCompatiblity_getHandle(HostId, handle);
      if (err) return getCompatibleReturn(err, errCode);

      std::vector<uint8_t> data;

      if (VMAC_MACMode == 5)
      {
          // convert data to BIN format
          std::string sData((char*)pData->pData, pData->uiLen);
          data = hexString_to_binary(sData);
      }
      else
      {
          // use data in BIN format
          data.assign(pData->pData, pData->pData + pData->uiLen);
      }

      std::vector<uint8_t> mac;
      mac.assign(MAC.pMAC, MAC.pMAC + MAC.ucMACLen);

      std::vector<uint8_t> ksn;
      std::vector<uint8_t> dummy_iv(8,0);

      secError ret = secVerify(handle, data, mac, dummy_iv, ksn);

      if(pKSN)
      {
          memcpy(pKSN->KSN, &ksn[0], std::min((size_t)KSN_SIZE, ksn.size()));
      }

      return getCompatibleReturn(ret, errCode);
  }


DEPRECATED inline int Sec_VerifyMAC(u_char VMAC_HostId, u_char VMAC_UseDefaultCV, u_char VMAC_MACMode, MACData *pData, genMAC MAC,
        uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
{
    return Sec_VerifyMAC(VMAC_HostId, VMAC_UseDefaultCV, VMAC_MACMode, pData, MAC, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
}



DEPRECATED inline int Sec_RetrieveEncryptedPIN(u_char HostId, PINBlockParams *pREP_PINBlockParams, uint16_t REP_Flags,
                                               PropData REP_PropData, EncPINBlock *pREP_encPIN, Ksn_v2 *pREP_KSN, uint8_t *errCode, long /*timeout*/ =
                                               DEFAULT_COMM_TIMEOUT)
{
    ASSERT_PARAM(errCode);

    secHandle_t handle;
    secError err = secCompatiblity_getHandle(HostId, handle);
    if (err) return getCompatibleReturn(err, errCode);

    ASSERT_PARAM(pREP_PINBlockParams);
    const uint8_t pinBlockFormat = pREP_PINBlockParams->PinBlockFormat;
    std::vector<uint8_t> pinBlk;
    std::vector<uint8_t> ksn;

    ASSERT_PARAM(pREP_encPIN);
    ASSERT_PARAM(pREP_encPIN->pPINBlock);

    {
        SecTransactionData_t taData;

        if ( REP_Flags & FLAG_BYPASS_KSN_INCR)
        {
            taData[CTransactionData::TagFlagBypassKsnIncr] = true;
        } else {
            taData[CTransactionData::TagFlagBypassKsnIncr] = false;
        }

        if(pREP_PINBlockParams->pPAN)
        {
          char paddedPanStr[PAN_SIZE * 2];
          memset(paddedPanStr, 'F', sizeof(paddedPanStr));
          memcpy(paddedPanStr, pREP_PINBlockParams->pPAN, (strlen((const char *)pREP_PINBlockParams->pPAN) > sizeof(paddedPanStr)) ? sizeof(paddedPanStr) : strlen((const char *)pREP_PINBlockParams->pPAN));
          taData[CTransactionData::TagPAN] =  std::string(paddedPanStr, sizeof(paddedPanStr));
        }

        if(pREP_PINBlockParams->pSTAN)
        {
          char paddedStanStr[STAN_SIZE * 2];
          memset(paddedStanStr, 0x30, sizeof(paddedStanStr));
          memcpy(&paddedStanStr[STAN_SIZE * 2 - strlen((const char *)pREP_PINBlockParams->pSTAN)], pREP_PINBlockParams->pSTAN, strlen((const char *)pREP_PINBlockParams->pSTAN));
          taData[CTransactionData::TagStan] = std::string(paddedStanStr, sizeof(paddedStanStr));
        }

        if(REP_PropData.pPropData && (REP_PropData.uiPropDataLen > 0))
        {
            std::vector<uint8_t>vPropData(REP_PropData.pPropData, REP_PropData.pPropData + REP_PropData.uiPropDataLen);
            taData[CTransactionData::TagVSSPropData] = vPropData;
        }

        u_char zeros [TRANS_AMOUNT_SIZE] = {0,};
        if(memcmp(pREP_PINBlockParams->TransAmount, zeros, TRANS_AMOUNT_SIZE))
        {
            std::vector<uint8_t>vAmount(&pREP_PINBlockParams->TransAmount[0], &pREP_PINBlockParams->TransAmount[TRANS_AMOUNT_SIZE]);
            taData[CTransactionData::TagTransAmount] = vAmount;
        }

        if (!taData.empty())
        {
            secPutTransactionData(handle, taData);
        }
    }


    secError ret = secRetrieveEncryptedPIN(handle, pinBlockFormat, pinBlk, ksn);

    if(!pinBlk.empty())
    {
      if( pREP_encPIN->ucPINBlockLen < pinBlk.size() )
      {
          SEC_LOG_ERROR("SCAPP_API: PIN Block buffer is to small, returned %d bytes key data", pinBlk.size());
          pREP_encPIN->ucPINBlockLen = 0;
          secClearTransactionData(handle);
          return SC_WRONG_PAR;
      }
      else
      {
        memcpy(pREP_encPIN->pPINBlock, &pinBlk[0], pinBlk.size());
        pREP_encPIN->ucPINBlockLen = pinBlk.size();
      }
    }

    if (pREP_KSN && pREP_KSN->KSN && (!ksn.empty()))
    {
        if( pREP_KSN->KSNLen < ksn.size() )
        {
          SEC_LOG_ERROR("SCAPP_API: KSN buffer is to small, returned %d bytes of key serial number", ksn.size());
          pREP_KSN->KSNLen = 0;
          secClearTransactionData(handle);
          return SC_WRONG_PAR;
        }
        else
        {
          memcpy(pREP_KSN->KSN, &ksn[0], ksn.size());
          pREP_KSN->KSNLen = ksn.size();
        }
    }

    secClearTransactionData(handle);

    return getCompatibleReturn(ret, errCode);
}

DEPRECATED inline int Sec_RetrieveEncryptedPIN(u_char REP_HostId, PINBlockParams *pREP_PINBlockParams, u_char REP_Flags,
        PropData REP_PropData, EncPINBlock *pREP_encPIN, uint8_t *errCode, long timeout=0)
{
    REP_Flags = 0;
    return Sec_RetrieveEncryptedPIN(REP_HostId, pREP_PINBlockParams, REP_Flags, REP_PropData, pREP_encPIN,
            (Ksn_v2 *) NULL, errCode, timeout);
}

DEPRECATED inline int Sec_RetrieveEncryptedPIN(u_char REP_HostId, PINBlockParams *pREP_PINBlockParams, uint16_t REP_Flags,
        PropData REP_PropData, EncPINBlock *pREP_encPIN, Ksn *pREP_KSN, uint8_t *errCode, long timeout)
{
    Ksn_v2 REP_KSN, *pREP_KSN_out = NULL;

    if (pREP_KSN)
    {
        REP_KSN.KSN = pREP_KSN->KSN;
        REP_KSN.KSNLen = KSN_SIZE;
        pREP_KSN_out = &REP_KSN;
    }
    return Sec_RetrieveEncryptedPIN(REP_HostId, pREP_PINBlockParams, REP_Flags, REP_PropData, pREP_encPIN, pREP_KSN_out,
            errCode, timeout);
}


#if 0

  int Sec_SetSecurityConfig(u_char     SSC_HostId,
                            PropData   SSC_PropData,
                            SecConfig *pSSC_SecConfig,
                            uint8_t   *errCode,
                            long       timeout = DEFAULT_COMM_TIMEOUT);


  int Sec_GetSecurityConfig(u_char     GSC_HostId,
                            PropData   GSC_PropData,
                            SecConfig *pGSC_SecConfig,
                            uint8_t   *errCode,
                            long       timeout = DEFAULT_COMM_TIMEOUT);
#endif

  DEPRECATED inline int Sec_GetVersions(std::string *pVersions, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
  {
      ASSERT_PARAM(pVersions);
      ASSERT_PARAM(errCode);
      secError ret = secGetVersions(*pVersions);

      return getCompatibleReturn(ret, errCode);

  }


const size_t VERSION_BUFF_SIZE=20;
DEPRECATED inline const char *Sec_GetVersion(void)
{
    static char APIversion[VERSION_BUFF_SIZE]={0,};
    std::string sAPIversion = secGetApiVersion();
    LOG_ASSERT(sAPIversion.size() <= sizeof(APIversion));
    memcpy(APIversion, sAPIversion.c_str(), sAPIversion.size());
    return APIversion;
}

DEPRECATED inline const char *Sec_GetSvcVersion(void)
{
    static char SvcVersion[VERSION_BUFF_SIZE]={0,};
    std::string sVersion = secGetSvcVersion();
    LOG_ASSERT(sVersion.size() <= sizeof(SvcVersion));
    memcpy(SvcVersion, sVersion.c_str(), sVersion.size());
    return SvcVersion;
}


  DEPRECATED inline int Sec_SetKSId(u_char HostId, uint8_t ksid)
  {
      secHandle_t handle;
      secError err = secCompatiblity_getHandle(HostId, handle);
      if (err) return getCompatibleReturn(err);

      return secSetKSId(handle, ksid);
  }


DEPRECATED inline int Sec_SetDUKPTMask(u_char      HostId,
                                       DUKPTmask   *pDUKPTMask,
                                       uint8_t     *errCode,
                                       long        /*timeout*/ = DEFAULT_COMM_TIMEOUT)
{
    ASSERT_PARAM(errCode);

    secHandle_t handle;
    secError err = secCompatiblity_getHandle(HostId, handle);
    if (err) return getCompatibleReturn(err, errCode);

    ASSERT_PARAM(pDUKPTMask);
    ASSERT_PARAM(pDUKPTMask->maskPIN);
    ASSERT_PARAM(pDUKPTMask->maskMAC);
    ASSERT_PARAM(pDUKPTMask->maskENC);

    secError ret;

    {
        SecTransactionData_t taData;
        taData[CTransactionData::TagVSSDUKPTMaskPIN] = CTransactionValue(pDUKPTMask->maskPIN, pDUKPTMask->sizeP);
        taData[CTransactionData::TagVSSDUKPTMaskMAC] = CTransactionValue(pDUKPTMask->maskMAC, pDUKPTMask->sizeM);
        taData[CTransactionData::TagVSSDUKPTMaskENC] = CTransactionValue(pDUKPTMask->maskENC, pDUKPTMask->sizeE);
        taData[CTransactionData::setDUKPTmasks] = true;
        ret = secPutTransactionData(handle, taData);
    }

    if (!ret)
    {
        std::vector<uint8_t> dummy;
        ret = secUpdateKey(handle, KEY_TYPE_DUKPT, dummy, dummy);
    }

    secClearTransactionData(handle);

    return getCompatibleReturn(ret, errCode);
}


DEPRECATED inline int Sec_IncrementKSN( u_char   HostId,
                        Ksn      *pKSN,
                        uint8_t  *errCode,
                        long     /*timeout*/ = DEFAULT_COMM_TIMEOUT)
{
    ASSERT_PARAM(pKSN);
    ASSERT_PARAM(errCode);

    secHandle_t handle;
    secError err = secCompatiblity_getHandle(HostId, handle);
    if (err) return getCompatibleReturn(err, errCode);

    std::string KSNincIdent("KSN incrementation");
    std::vector<uint8_t> keyData(KSNincIdent.begin(), KSNincIdent.end());
    std::vector<unsigned char> ksn;
    secError ret = secUpdateKey(handle, KEY_TYPE_DUKPT, keyData, ksn);

    memset(pKSN->KSN, 0x00, KSN_SIZE);
    memcpy(pKSN->KSN, &ksn[0], ksn.size());

    return getCompatibleReturn(ret, errCode);
}


} //namespace com_verifone_host;

#endif //_LIBSECCMD_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

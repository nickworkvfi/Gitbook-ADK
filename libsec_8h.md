---
title: sec/src/api/export/sec/libsec.h
summary: ADK Security Service API. 

---

# sec/src/api/export/sec/libsec.h

ADK Security Service API.  [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[com_verifone_seccmd](namespacecom__verifone__seccmd.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpecSEC](libsec_8h.md#define-dllspecsec)**  |
|  | **[VOS3_Depricated](libsec_8h.md#define-vos3-depricated)**  |

## Detailed Description

ADK Security Service API. 

This header file contains information about the ADK security service API functions. 




## Macros Documentation

### define DllSpecSEC

```cpp
#define DllSpecSEC 
```


### define VOS3_Depricated

```cpp
#define VOS3_Depricated 
```


## Source code

```cpp
#ifndef _LIBSEC_H_
#define _LIBSEC_H_

/***************************************************************************
 * Includes
 **************************************************************************/
//#include <stdlib.h>
#include "sec2.h"
#include "CTransactionData.h"

#ifdef _VOS
    #include <string>
    #include <stdint.h>
#endif

#include <vector>
#include <map>
#include "secError.h"


#if (defined _WIN32)
#  if defined VFI_SEC_SHARED_EXPORT
#    define DllSpecSEC __declspec(dllexport)
#  elif defined VFI_SEC_STATIC_EXPORT || defined _WIN32  // dllimport not required for Windows
#    define DllSpecSEC
#  else
#    define DllSpecSEC __declspec(dllimport)
#  endif
#elif defined __GNUC__ && defined VFI_SEC_SHARED_EXPORT
#  define DllSpecSEC  __attribute__((visibility ("default")))
#else
#  define DllSpecSEC
#endif


#if defined VFI_PLATFORM_VOS3 || defined _VOS3
#    define VOS3_Depricated  __attribute__((deprecated))
#else
#    define VOS3_Depricated
#endif

/***************************************************************************
 * Namespace
 **************************************************************************/
//using namespace com_verifone_host;
using namespace com_adksec_cmd;

namespace com_verifone_seccmd
{

DllSpecSEC secError secInit();

DllSpecSEC secError secDestroy();

DllSpecSEC secError secOpen(const std::string& , secHandle_t& handle);

DllSpecSEC VOS3_Depricated secError secOpen(const SecTransactionData_t& td, secHandle_t& handle);
DllSpecSEC secError secClose(secHandle_t handle);

DllSpecSEC secError secSetKSId(secHandle_t handle, uint32_t ksid
#if defined VFI_PLATFORM_VOS3 || defined _VOS3
, unsigned master_id=0
#endif
);

DllSpecSEC secError secGetKeyInventory(secHandle_t handle, std::string& out);

DllSpecSEC secError secGetKeyData(secHandle_t handle, com_verifone_host::key_type_t keyType, std::vector<uint8_t>& out);

DllSpecSEC secError secUpdateKey(secHandle_t handle, com_verifone_host::key_type_t keyType, const std::vector<uint8_t>& keyData,
    std::vector<uint8_t>& propData);

inline secError secUpdateKey(secHandle_t handle, com_verifone_host::key_type_t keyType, const std::vector<uint8_t>& keyData)
        {
            std::vector<uint8_t> dummyKsn = std::vector<uint8_t>();
            return secUpdateKey(handle, keyType, keyData, dummyKsn);
        }


#if defined VFI_PLATFORM_VOS3 || defined _VOS3

DllSpecSEC secError secUpdateKey(secHandle_t handle, com_verifone_host::key_type_t keyType, const std::vector<uint8_t>& keyData,
    std::vector<uint8_t>& propData, std::vector<uint8_t>& key_kcv, const std::vector<uint8_t>& iv);
#endif


DllSpecSEC secError secEncryptData(secHandle_t handle, const std::vector<uint8_t>& plainData, std::vector<uint8_t>& encData,
        std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);


DllSpecSEC VOS3_Depricated secError secEncryptTransactionData(secHandle_t handle, const secIndex_t& TDindex, std::vector<uint8_t>& encData,
        std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);

DllSpecSEC secError secDecryptData(secHandle_t handle, const std::vector<uint8_t>& encData, std::vector<uint8_t>& plainData,
        std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);

DllSpecSEC secError secSign(secHandle_t handle, const std::vector<uint8_t>& data, std::vector<uint8_t>& signature,
        std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);

DllSpecSEC secError secVerify(secHandle_t handle, const std::vector<uint8_t>& data, const std::vector<uint8_t>& signature,
        std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);

DllSpecSEC secError secRetrieveEncryptedPIN(secHandle_t handle, const uint8_t pinBlockFormat, std::vector<unsigned char>& pinBlk,
        std::vector<uint8_t>& ksn);

DllSpecSEC secError secIncrementKSN(secHandle_t handle, std::vector<uint8_t>& ksn);

DllSpecSEC secError secGetStatus(std::string& jsonString, std::string hostName = "");

DllSpecSEC secError secGetStatus(std::string& jsonString, secHandle_t handle);

DllSpecSEC secError secGetVersions(std::string& versions);

DllSpecSEC std::string secGetApiVersion(void);


DllSpecSEC std::string secGetSvcVersion(void);


DllSpecSEC VOS3_Depricated secError secClearTransactionData(secHandle_t handle);


DllSpecSEC VOS3_Depricated secError secPutTransactionData(secHandle_t handle, const SecTransactionData_t& taData);

DllSpecSEC VOS3_Depricated secError secGetTransactionValue(secHandle_t handle, const secIndex_t& key, SecTransactionValue& date);

DllSpecSEC VOS3_Depricated secError secGetPermission(secHandle_t handle, const secIndex_t& key, bitMask_t& permissionFlags);

DllSpecSEC secError secGenerateRandom( std::vector<uint8_t>& data, int count );

DllSpecSEC secError secDigest(int type, std::vector<uint8_t>& data, std::vector<uint8_t>& digest);

}

#undef DllSpecSEC // important to avoid duplicated definitions of DllSpec with other component header files

#endif //_LIBSEC_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

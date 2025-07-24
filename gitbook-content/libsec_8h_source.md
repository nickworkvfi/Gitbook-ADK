---
hidden: true
title: libsec.h
---

<a href="libsec_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef _LIBSEC_H_
 2 #define _LIBSEC_H_
 3 
 11 /***************************************************************************
 12  * Includes
 13  **************************************************************************/
 14 //#include <stdlib.h>
 15 #include "sec2.h"
 16 #include "CTransactionData.h"
 17 
 18 #ifdef _VOS
 19  #include <string>
 20  #include <stdint.h>
 21 #endif
 22 
 23 #include <vector>
 24 #include <map>
 25 #include "secError.h"
 26 
 27 
 28 #if (defined _WIN32)
 29 # if defined VFI_SEC_SHARED_EXPORT
 30 # define DllSpecSEC __declspec(dllexport)
 31 # elif defined VFI_SEC_STATIC_EXPORT || defined _WIN32 // dllimport not required for Windows
 32 # define DllSpecSEC
 33 # else
 34 # define DllSpecSEC __declspec(dllimport)
 35 # endif
 36 #elif defined __GNUC__ && defined VFI_SEC_SHARED_EXPORT
 37 # define DllSpecSEC __attribute__((visibility ("default")))
 38 #else
 39 # define DllSpecSEC
 40 #endif
 41 
 42 
 43 #if defined VFI_PLATFORM_VOS3 || defined _VOS3
 44 # define VOS3_Depricated __attribute__((deprecated))
 45 #else
 46 # define VOS3_Depricated
 47 #endif
 48 
 49 /***************************************************************************
 50  * Namespace
 51  **************************************************************************/
 52 //using namespace com_verifone_host;
 53 using namespace com_adksec_cmd;
 54 
 55 namespace com_verifone_seccmd
 56 {
 57 
 62 DllSpecSEC secError secInit();
 63 
 68 DllSpecSEC secError secDestroy();
 69 
 74 DllSpecSEC secError secOpen(const std::string& , secHandle_t& handle);
 75 
 76 DllSpecSEC VOS3_Depricated secError secOpen(const SecTransactionData_t& td, secHandle_t& handle);
 80 DllSpecSEC secError secClose(secHandle_t handle);
 81 
 85 DllSpecSEC secError secSetKSId(secHandle_t handle, uint32_t ksid
 86 #if defined VFI_PLATFORM_VOS3 || defined _VOS3
 87 , unsigned master_id=0
 88 #endif
 89 );
 90 
 101 DllSpecSEC secError secGetKeyInventory(secHandle_t handle, std::string& out);
 102 
 111 DllSpecSEC secError secGetKeyData(secHandle_t handle, com_verifone_host::key_type_t keyType, std::vector<uint8_t>& out);
 112 
 127 DllSpecSEC secError secUpdateKey(secHandle_t handle, com_verifone_host::key_type_t keyType, const std::vector<uint8_t>& keyData,
 128  std::vector<uint8_t>& propData);
 129 
 130 inline secError secUpdateKey(secHandle_t handle, com_verifone_host::key_type_t keyType, const std::vector<uint8_t>& keyData)
 131  {
 132  std::vector<uint8_t> dummyKsn = std::vector<uint8_t>();
 133  return secUpdateKey(handle, keyType, keyData, dummyKsn);
 134  }
 135 
 136 
 137 #if defined VFI_PLATFORM_VOS3 || defined _VOS3
 138 
 156 DllSpecSEC secError secUpdateKey(secHandle_t handle, com_verifone_host::key_type_t keyType, const std::vector<uint8_t>& keyData,
 157  std::vector<uint8_t>& propData, std::vector<uint8_t>& key_kcv, const std::vector<uint8_t>& iv);
 158 #endif
 159 
 160 
 171 DllSpecSEC secError secEncryptData(secHandle_t handle, const std::vector<uint8_t>& plainData, std::vector<uint8_t>& encData,
 172  std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);
 173 
 174 
 185 DllSpecSEC VOS3_Depricated secError secEncryptTransactionData(secHandle_t handle, const secIndex_t& TDindex, std::vector<uint8_t>& encData,
 186  std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);
 187 
 198 DllSpecSEC secError secDecryptData(secHandle_t handle, const std::vector<uint8_t>& encData, std::vector<uint8_t>& plainData,
 199  std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);
 200 
 211 DllSpecSEC secError secSign(secHandle_t handle, const std::vector<uint8_t>& data, std::vector<uint8_t>& signature,
 212  std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);
 213 
 224 DllSpecSEC secError secVerify(secHandle_t handle, const std::vector<uint8_t>& data, const std::vector<uint8_t>& signature,
 225  std::vector<uint8_t>& iv, std::vector<uint8_t>& ksn);
 226 
 236 DllSpecSEC secError secRetrieveEncryptedPIN(secHandle_t handle, const uint8_t pinBlockFormat, std::vector<unsigned char>& pinBlk,
 237  std::vector<uint8_t>& ksn);
 238 
 246 DllSpecSEC secError secIncrementKSN(secHandle_t handle, std::vector<uint8_t>& ksn);
 247 
 256 DllSpecSEC secError secGetStatus(std::string& jsonString, std::string hostName = "");
 257 
 266 DllSpecSEC secError secGetStatus(std::string& jsonString, secHandle_t handle);
 267 
 273 DllSpecSEC secError secGetVersions(std::string& versions);
 274 
 279 DllSpecSEC std::string secGetApiVersion(void);
 280 
 281 
 286 DllSpecSEC std::string secGetSvcVersion(void);
 287 
 288 
 294 DllSpecSEC VOS3_Depricated secError secClearTransactionData(secHandle_t handle);
 295 
 296 
 309 DllSpecSEC VOS3_Depricated secError secPutTransactionData(secHandle_t handle, const SecTransactionData_t& taData);
 310 
 324 DllSpecSEC VOS3_Depricated secError secGetTransactionValue(secHandle_t handle, const secIndex_t& key, SecTransactionValue& date);
 325 
 333 DllSpecSEC VOS3_Depricated secError secGetPermission(secHandle_t handle, const secIndex_t& key, bitMask_t& permissionFlags);
 334 
 343 DllSpecSEC secError secGenerateRandom( std::vector<uint8_t>& data, int count );
 344 
 353 DllSpecSEC secError secDigest(int type, std::vector<uint8_t>& data, std::vector<uint8_t>& digest);
 354 
 355 }
 356 
 357 #undef DllSpecSEC // important to avoid duplicated definitions of DllSpec with other component header files
 358 
 359 #endif //_LIBSEC_H_
 360 
```

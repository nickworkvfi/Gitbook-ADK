---
title: sdi/src/sec.cpp

---

# sdi/src/sec.cpp



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[SecHandleMap](class_sec_handle_map.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| unsigned | **[addSecHandle](sec_8cpp.md#function-addsechandle)**(void * sdihandle, [secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) h) |
| void | **[removeSecHandle](sec_8cpp.md#function-removesechandle)**(void * sdihandle, [secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) h) |
| bool | **[getSecHandle](sec_8cpp.md#function-getsechandle)**(void * sdihandle, [secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) & h, unsigned idx) |
| void | **[cleanUpSecHandles](sec_8cpp.md#function-cleanupsechandles)**(void * sdihandle) |
| bool | **[isAdeEnabled](sec_8cpp.md#function-isadeenabled)**(void ) |
| int | **[extractData](sec_8cpp.md#function-extractdata)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, struct [BTLVNode](struct_b_t_l_v_node.md) ** node, [secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) * handle, std::vector< uint8_t > & data) |
| int | **[findCryptoHandle](sec_8cpp.md#function-findcryptohandle)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, struct [BTLVNode](struct_b_t_l_v_node.md) ** node, [secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) * handle) |
| int | **[SEC_open](sec_8cpp.md#function-sec-open)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_close](sec_8cpp.md#function-sec-close)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_encrypt](sec_8cpp.md#function-sec-encrypt)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_decrypt](sec_8cpp.md#function-sec-decrypt)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_sign](sec_8cpp.md#function-sec-sign)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_verify](sec_8cpp.md#function-sec-verify)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_updateKey](sec_8cpp.md#function-sec-updatekey)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_setKeySet](sec_8cpp.md#function-sec-setkeyset)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, unsigned char * rsp, unsigned short * rspSize, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_getKeyInventory](sec_8cpp.md#function-sec-getkeyinventory)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_getKeyData](sec_8cpp.md#function-sec-getkeydata)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_getStatus](sec_8cpp.md#function-sec-getstatus)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| int | **[SEC_getVersion](sec_8cpp.md#function-sec-getversion)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| void | **[handleSec](sec_8cpp.md#function-handlesec)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< void *, [SecHandleMap](class_sec_handle_map.md) * > * | **[handle_map](sec_8cpp.md#variable-handle-map)**  |
| pthread_mutex_t | **[handle_mutex](sec_8cpp.md#variable-handle-mutex)**  |


## Functions Documentation

### function addSecHandle

```cpp
static unsigned addSecHandle(
    void * sdihandle,
    secHandle_t h
)
```


### function removeSecHandle

```cpp
static void removeSecHandle(
    void * sdihandle,
    secHandle_t h
)
```


### function getSecHandle

```cpp
bool getSecHandle(
    void * sdihandle,
    secHandle_t & h,
    unsigned idx
)
```


### function cleanUpSecHandles

```cpp
void cleanUpSecHandles(
    void * sdihandle
)
```


### function isAdeEnabled

```cpp
bool isAdeEnabled(
    void 
)
```


### function extractData

```cpp
static int extractData(
    struct BTLVNode * xBtlv,
    struct BTLVNode ** node,
    secHandle_t * handle,
    std::vector< uint8_t > & data
)
```


### function findCryptoHandle

```cpp
int findCryptoHandle(
    struct BTLVNode * xBtlv,
    struct BTLVNode ** node,
    secHandle_t * handle
)
```


### function SEC_open

```cpp
int SEC_open(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_close

```cpp
int SEC_close(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_encrypt

```cpp
int SEC_encrypt(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_decrypt

```cpp
int SEC_decrypt(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_sign

```cpp
int SEC_sign(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_verify

```cpp
int SEC_verify(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_updateKey

```cpp
int SEC_updateKey(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_setKeySet

```cpp
int SEC_setKeySet(
    struct BTLVNode * xBtlv,
    unsigned char * rsp,
    unsigned short * rspSize,
    secError & errorCode
)
```


### function SEC_getKeyInventory

```cpp
int SEC_getKeyInventory(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_getKeyData

```cpp
int SEC_getKeyData(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_getStatus

```cpp
int SEC_getStatus(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function SEC_getVersion

```cpp
int SEC_getVersion(
    struct BTLVNode * xBtlv,
    secError & errorCode
)
```


### function handleSec

```cpp
void handleSec(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


**Note**: [handleSec()](sec_8h.md#function-handlesec) is always executed, even if invoked by a side command. Therefore, this function has no return value, see also [process_side_command()](main_8cpp.md#function-process-side-command). 

Dispatch function to handle different crypto interface commands 



## Attributes Documentation

### variable handle_map

```cpp
static std::map< void *, SecHandleMap * > * handle_map;
```


### variable handle_mutex

```cpp
static pthread_mutex_t handle_mutex = PTHREAD_MUTEX_INITIALIZER;
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
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include "_logf.h"
#include "sys.h"
#include "sec.h"
#include "btlv_helper.h"
#include "ped.h"
#include "sdi_tags.h"
#include "vcl_client.h"
#include "common/respVal.h"
#include "pthreadutil.h"
#include "madk_pp_protocol.h"
#include "lib_mADK_PP_Prot/mADK_PP_Prot.h"
#include "svcsec.h"

using namespace std;
using namespace com_adksec_cmd;
using namespace com_verifone_seccmd;

/* helper class used to store for ADKSEC handles in a map per connection.
 * The index into an internal map is hand out outside world instead of the
 * internal address/handle of ADKSEC. With deletion of the object, all stored
 * ADKSEC handle are automatically closed with secClose(). */
class SecHandleMap
{

    unsigned counter;
    map<unsigned, secHandle_t> hmap;

  public:
    SecHandleMap()
    {
      counter = 0;
    }

    virtual ~SecHandleMap()
    {
      map<unsigned, secHandle_t>::iterator it;

      for (it = hmap.begin(); it != hmap.end(); ++it)
      {
        secClose(it->second);
      }
    }

    unsigned add(secHandle_t h)
    {
      hmap[counter] = h;
      unsigned r = counter++;
      return r;
    }

    bool get(secHandle_t &h, unsigned idx)
    {
      map<unsigned, secHandle_t>::iterator it = hmap.find(idx);

      if (it == hmap.end())
      {
        return false;
      }

      h = it->second;
      return true;
    }

    void remove(secHandle_t h)
    {
      map<unsigned, secHandle_t>::iterator it;

      for (it = hmap.begin(); it != hmap.end(); ++it)
      {
        if (it->second == h)
        {
          hmap.erase(it);
          break;
        }
      }
    }
};

/* map storing an instance of class SecHandleMap per SDI connection
 * Note: If SDI server will be refactored to a multi-threaded application
 *       (1 thread per connection) the instance should be stored to session
 *       context in thread local storage */
static std::map<void *, SecHandleMap *> *handle_map;
static pthread_mutex_t handle_mutex = PTHREAD_MUTEX_INITIALIZER;

static unsigned addSecHandle(void *sdihandle, secHandle_t h)
{
  if (!sdihandle)
  {
    /* connection already terminated, thus,
     * return code is never sent in response */
    return (unsigned)~0;
  }

  MutexLock m(&handle_mutex);

  if (!handle_map)
  {
    handle_map = new map<void *, SecHandleMap *>;
  }

  map<void *, SecHandleMap *>::iterator i = handle_map->find(sdihandle);
  SecHandleMap *secmap;

  if (i != handle_map->end())
  {
    secmap = i->second;
  }
  else
  {
    secmap = new SecHandleMap;
    (*handle_map)[sdihandle] = secmap;
  }

  return secmap->add(h);
}

static void removeSecHandle(void *sdihandle, secHandle_t h)
{
  if (!sdihandle)
  {
    return;  // connection already terminated
  }

  MutexLock m(&handle_mutex);

  if (!handle_map)
  {
    return;
  }

  map<void *, SecHandleMap *>::iterator i = handle_map->find(sdihandle);

  if (i == handle_map->end())
  {
    return;
  }

  i->second->remove(h);
}
// required by getEncData
bool getSecHandle(void *sdihandle, secHandle_t &h, unsigned idx)
{
  if (!sdihandle)
  {
    return false;  // connection already terminated
  }

  MutexLock m(&handle_mutex);

  if (!handle_map)
  {
    return false;
  }

  map<void *, SecHandleMap *>::iterator i = handle_map->find(sdihandle);

  if (i == handle_map->end())
  {
    return false;
  }

  return i->second->get(h, idx);
}
// called by e105 protocol object on connection termination
void cleanUpSecHandles(void *sdihandle)
{
  if (!sdihandle)
  {
    return;  // parameter error (shouldn't happen)
  }

  MutexLock m(&handle_mutex);

  if (!handle_map)
  {
    return;
  }

  map<void *, SecHandleMap *>::iterator i = handle_map->find(sdihandle);

  if (i == handle_map->end())
  {
    return;
  }

  delete i->second; // closes all ADKSEC handles
  handle_map->erase(i);
}

// returns true if ADE encryption is enabled, false otherwise
bool isAdeEnabled(void)
{
#ifdef _VOS
  return !!ade_active();
#else
  static int result = -1; // needs init
  static pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

  MutexLock ml(&mutex);

  if (result == -1)
  {
    secHandle_t handle;
    string hostName = "ADE-DUKPT";

    // Open Crypto Device
    if (secOpen(hostName, handle) == EsecOK)
    {
      string keyInfo = "";

      // Get Key Inventory
      if (secGetKeyInventory(handle, keyInfo) == EsecOK)
      {
        if (keyInfo.find("\"injected\":\"yes\"") != string::npos)
        {
          result = 1;
        }
        else
        {
          result = 0;
        }
      }

      // Close Crypto Device
      secClose(handle);
    }
  }

  return (result == 1);
#endif
}

static int extractData(struct BTLVNode *xBtlv, struct BTLVNode **node, secHandle_t *handle, std::vector<uint8_t> &data)
{
  if (RESULT_OK == findCryptoHandle(xBtlv, node, handle))
  {
    struct BTLVNode *val = NULL;

    // Extract the Data
    if ((val = pxBTLVFindTag(*node, SDI_TAG_DFA407_INPUT_DATA)) != NULL)
    {
      //std::vector<uint8_t> data;
      unsigned int i;

      for (i = 0; i < val->uSize; ++i)
      {
        data.push_back((uint8_t)val->pucData[i]);
      }

      return RESULT_OK;
    }
  }

  return RESULT_FAIL;
}

int findCryptoHandle(struct BTLVNode *xBtlv, struct BTLVNode **node, secHandle_t *handle)
{
  int result = RESULT_FAIL;

  struct BTLVNode *val = NULL;

  if ((*node = pxBTLVFindTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA)) != NULL)
  {
    // Extract the Crypto Handle
    if ((val = pxBTLVFindTag(*node, SDI_TAG_DFA401_CRYPTO_HANDLE)) != NULL && val->uSize == 4)
    {
      unsigned handle2;
      handle2 = val->pucData[3];
      handle2 += val->pucData[2] * 256;
      handle2 += val->pucData[1] * 65536;
      handle2 += val->pucData[0] * 16777216;

      mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
      result = getSecHandle(proto->get_handle(), *handle, handle2) ? RESULT_OK : RESULT_FAIL;
    }
  }

  return result;
}

int SEC_open(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;

  struct BTLVNode *node = NULL;

  if ((node = pxBTLVFindTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA)) != NULL)
  {
    struct BTLVNode *val = NULL;

    // Extract the Host Name
    if ((val = pxBTLVFindTag(node, SDI_TAG_DFA400_HOST_NAME)) != NULL)
    {
      secHandle_t handle2;
      string hostName((const char *)val->pucData, val->uSize);

#ifdef _DEBUG
      _LOGF_INFO("SEC_open: hostName = %s", hostName.c_str());
#endif

      /* PWMADK-1882: restrict crypto interface usage for local connections and
       *              disallow using ADKSEC handles cross over connections */
      mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
      SecTransactionData_t td;
      struct UdsInfo conn_info;
      bool trusted = proto->trusted_connection();
      _LOGF_INFO("SEC_open: connection %p is %s",
                 proto->get_handle(),
                 trusted ? "trusted" : "untrusted");
      td[CTransactionData::TagTrustConn] = trusted;
      td[CTransactionData::TagHostName] = hostName;

      if (proto->get_uds_info(&conn_info))
      {
        _LOGF_INFO("%s: connection is uds from uid %u", __FUNCTION__, conn_info.uid);
        td[CTransactionData::TagPeerUID] = conn_info.uid;
      }
      else
      {
        _LOGF_INFO("%s: connection is not uds. Use default uid 0xffff", __FUNCTION__);
        td[CTransactionData::TagPeerUID] = (unsigned)0xffff;
      }

      if ((errorCode = secOpen(td, handle2)) == EsecOK)
      {
        vBTLVClear(xBtlv);
        node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

        unsigned handle = addSecHandle(proto->get_handle(), handle2);

        // Append Crypto Handle
        char buffer[4] = {0};
        buffer[3] = handle;
        handle = handle >> 8;
        buffer[2] = handle;
        handle = handle >> 8;
        buffer[1] = handle;
        handle = handle >> 8;
        buffer[0] = handle;
        pxBTLVAppendTag(node, SDI_TAG_DFA401_CRYPTO_HANDLE, (unsigned char *)buffer, sizeof(buffer));

        result = RESULT_OK;
      }
    }
  }

  return result;
}

int SEC_close(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;

  if (RESULT_OK == findCryptoHandle(xBtlv, &node, &handle))
  {
    mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
    removeSecHandle(proto->get_handle(), handle);

    if ((errorCode = secClose(handle)) == EsecOK)
    {
      vBTLVClear(xBtlv);
      result = RESULT_OK;
    }
  }

  return result;
}

int SEC_encrypt(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;

  if (RESULT_OK == findCryptoHandle(xBtlv, &node, &handle))
  {
    struct BTLVNode *val = NULL;

    // Extract the Plain Data
    if ((val = pxBTLVFindTag(node, SDI_TAG_DFA402_PLAINTEXT_DATA)) != NULL)
    {
      std::vector<uint8_t> plainData;
      std::vector<uint8_t> encData;
      std::vector<uint8_t> iv;
      std::vector<uint8_t> ksn;
      unsigned int i;

      for (i = 0; i < val->uSize; ++i)
      {
        plainData.push_back((uint8_t)val->pucData[i]);
      }

      // Extract the Initial Vector
      if ((val = pxBTLVFindTag(node, SDI_TAG_DFA403_INITIAL_VECTOR)) != NULL)
      {
        for (i = 0; i < val->uSize; ++i)
        {
          iv.push_back((uint8_t)val->pucData[i]);
        }
      }

      if ((errorCode = secEncryptData(handle, plainData, encData, iv, ksn)) == EsecOK)
      {
        vBTLVClear(xBtlv);
        node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

        // Append Encrypted Data
        pxBTLVAppendTag(node, SDI_TAG_DFA404_ENCRYPTED_DATA, &encData[0], encData.size());

        if (iv.size() > 0)
        {
          // Append Initial Vector
          pxBTLVAppendTag(node, SDI_TAG_DFA403_INITIAL_VECTOR, &iv[0], iv.size());
        }

        if (ksn.size() > 0)
        {
          // Append KSN
          pxBTLVAppendTag(node, SDI_TAG_DFA405_KEY_SERIAL_NUMBER, &ksn[0], ksn.size());
        }

        result = RESULT_OK;
      }
    }
  }

  return result;
}

int SEC_decrypt(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;

  if (RESULT_OK == findCryptoHandle(xBtlv, &node, &handle))
  {
    struct BTLVNode *val = NULL;

    // Extract the Encrypted Data
    if ((val = pxBTLVFindTag(node, SDI_TAG_DFA404_ENCRYPTED_DATA)) != NULL)
    {
      std::vector<uint8_t> encData;
      std::vector<uint8_t> plainData;
      std::vector<uint8_t> iv;
      std::vector<uint8_t> ksn;
      unsigned int i;

      for (i = 0; i < val->uSize; ++i)
      {
        encData.push_back((uint8_t)val->pucData[i]);
      }

      // Extract the Initial Vector
      if ((val = pxBTLVFindTag(node, SDI_TAG_DFA403_INITIAL_VECTOR)) != NULL)
      {
        for (i = 0; i < val->uSize; ++i)
        {
          iv.push_back((uint8_t)val->pucData[i]);
        }
      }

      if ((errorCode = secDecryptData(handle, encData, plainData, iv, ksn)) == EsecOK)
      {
        vBTLVClear(xBtlv);
        node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

        // Append Decrypted Data
        pxBTLVAppendTag(node, SDI_TAG_DFA406_DECRYPTED_DATA, &plainData[0], plainData.size());

        if (ksn.size() > 0)
        {
          // Append KSN
          pxBTLVAppendTag(node, SDI_TAG_DFA405_KEY_SERIAL_NUMBER, &ksn[0], ksn.size());
        }

        result = RESULT_OK;
      }
    }
  }

  return result;
}

int SEC_sign(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;

  std::vector<uint8_t> data;

  if (RESULT_OK == extractData(xBtlv, &node, &handle, data))
  {
    struct BTLVNode *val = NULL;
    std::vector<uint8_t> signature;
    std::vector<uint8_t> iv;
    std::vector<uint8_t> ksn;

    // Extract the Initial Vector
    if ((val = pxBTLVFindTag(node, SDI_TAG_DFA403_INITIAL_VECTOR)) != NULL)
    {
      for (unsigned int i = 0; i < val->uSize; ++i)
      {
        iv.push_back((uint8_t)val->pucData[i]);
      }
    }

    if ((errorCode = secSign(handle, data, signature, iv, ksn)) == EsecOK)
    {
      vBTLVClear(xBtlv);
      node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

      // Append the Signature
      pxBTLVAppendTag(node, SDI_TAG_DFA408_SIGNATURE, &signature[0], signature.size());

      if (iv.size() > 0)
      {
        // Append Initial Vector
        pxBTLVAppendTag(node, SDI_TAG_DFA403_INITIAL_VECTOR, &iv[0], iv.size());
      }

      if (ksn.size() > 0)
      {
        // Append KSN
        pxBTLVAppendTag(node, SDI_TAG_DFA405_KEY_SERIAL_NUMBER, &ksn[0], ksn.size());
      }

      result = RESULT_OK;
    }
  }

  return result;
}

int SEC_verify(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;
  std::vector<uint8_t> data;

  if (RESULT_OK == extractData(xBtlv, &node, &handle, data))
  {
    struct BTLVNode *val = NULL;
    std::vector<uint8_t> signature;
    std::vector<uint8_t> iv;
    std::vector<uint8_t> ksn;

    // Extract the Signature
    if ((val = pxBTLVFindTag(node, SDI_TAG_DFA408_SIGNATURE)) != NULL)
    {
      for (unsigned int i = 0; i < val->uSize; ++i)
      {
        signature.push_back((uint8_t)val->pucData[i]);
      }

      // Extract the Initial Vector
      if ((val = pxBTLVFindTag(node, SDI_TAG_DFA403_INITIAL_VECTOR)) != NULL)
      {
        for (unsigned int i = 0; i < val->uSize; ++i)
        {
          iv.push_back((uint8_t)val->pucData[i]);
        }
      }

      if ((errorCode = secVerify(handle, data, signature, iv, ksn)) == EsecOK)
      {
        vBTLVClear(xBtlv);
        node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

        if (ksn.size() > 0)
        {
          // Append KSN
          pxBTLVAppendTag(node, SDI_TAG_DFA405_KEY_SERIAL_NUMBER, &ksn[0], ksn.size());
        }

        result = RESULT_OK;
      }
    }
  }

  return result;
}

int SEC_updateKey(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;

  if (RESULT_OK == findCryptoHandle(xBtlv, &node, &handle))
  {
    struct BTLVNode *val = NULL;

    // Extract the Key Type
    if ((val = pxBTLVFindTag(node, SDI_TAG_DFA40C_KEY_TYPE)) != NULL && val->uSize == 1)
    {
      com_verifone_host::key_type_t keyType;

      keyType = val->pucData[0];

      // Extract the Key Data
      if ((val = pxBTLVFindTag(node, SDI_TAG_DFA40D_KEY_DATA)) != NULL)
      {
        std::vector<uint8_t> keyData;
        std::vector<uint8_t> propData;
        std::vector<uint8_t> kcv;
        SecTransactionData_t td;
        secError errCode;

        unsigned int i;

        for (i = 0; i < val->uSize; ++i)
        {
          keyData.push_back((uint8_t)val->pucData[i]);
        }

        // Extract the proprietary data (KSN)
        if ((val = pxBTLVFindTag(node, SDI_TAG_DFA405_KEY_SERIAL_NUMBER)) != NULL)
        {
          for (i = 0; i < val->uSize; ++i)
          {
            propData.push_back((uint8_t)val->pucData[i]);
          }
        }

        // Extract the AS2805 tag
        if ((val = pxBTLVFindTag(node, SDI_TAG_DFA411_AS2805_TAG)) != NULL && val->uSize == 1)
        {
          td[CTransactionData::TagAS2805Func] = val->pucData[0];
        }

#if defined(_VOS3) || defined(__ANDROID__) || defined (_STM32)

        // Extract the key check value (kcv)
        if ((val = pxBTLVFindTag(node, SDI_TAG_DFA416_KCV)) != NULL)
        {
          for (i = 0; i < val->uSize; ++i)
          {
            kcv.push_back((uint8_t)val->pucData[i]);
          }

          td[CTransactionData::TagKCV] = kcv;
        }

        // Extract the Initial Vector
        if ((val = pxBTLVFindTag(node, SDI_TAG_DFA403_INITIAL_VECTOR)) != NULL)
        {
          std::vector<uint8_t> iv;

          for (i = 0; i < val->uSize; ++i)
          {
            iv.push_back((uint8_t)val->pucData[i]);
          }

          td[CTransactionData::TagIV] = iv;
        }

#endif

        if (td.size() > 0 && (errCode = secPutTransactionData(handle, td)) != EsecOK)
        {
          _LOGF_ERROR("SEC_updateKey: secPutTransactionData failed: errCode=0x%X", errCode);
        }

        if ((errorCode = secUpdateKey(handle, keyType, keyData, propData)) == EsecOK)
        {
          vBTLVClear(xBtlv);
          node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

          if (propData.size() > 0)
          {
            // Append proprietary data
            pxBTLVAppendTag(node, SDI_TAG_DFA405_KEY_SERIAL_NUMBER, &propData[0], propData.size());
          }

#if defined(_VOS3) || defined(__ANDROID__) || defined (_STM32)

          SecTransactionValue tdRetData;

          if ((errCode = secGetTransactionValue(handle, CTransactionData::TagKCVout, tdRetData)) == EsecOK)
          {
            // Append kcv
            kcv = tdRetData.getBuffer();
            pxBTLVAppendTag(node, SDI_TAG_DFA416_KCV, &kcv[0], kcv.size());
            SecTransactionData_t td_dummy;
            std::vector<uint8_t> kcv_dummy;
            td_dummy[CTransactionData::TagKCVout] = kcv_dummy;
            secPutTransactionData(handle, td_dummy);
          }

#endif
          result = RESULT_OK;
        }
      }
    }
  }

  return result;
}

int SEC_setKeySet(struct BTLVNode *xBtlv, unsigned char *rsp, unsigned short *rspSize, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;

  if (RESULT_OK == findCryptoHandle(xBtlv, &node, &handle))
  {
    struct BTLVNode *val = NULL;

    // Extract the Key Set Id
    if ((val = pxBTLVFindTag(node, SDI_TAG_DFA409_KEY_SET_ID)) != NULL && val->uSize == 4)
    {
      uint32_t ksid;

      ksid = val->pucData[3];
      ksid += val->pucData[2] * 256;
      ksid += val->pucData[1] * 65536;
      ksid += val->pucData[0] * 16777216;

#if defined(_VOS3) || defined(__ANDROID__) || defined (_STM32)

      // Extract the Master Key Set Id
      if ((val = pxBTLVFindTag(node, SDI_TAG_DFA415_MASTER_KEY_SET_ID)) != NULL && val->uSize == 4)
      {
        uint32_t mksid;

        mksid = val->pucData[3];
        mksid += val->pucData[2] * 256;
        mksid += val->pucData[1] * 65536;
        mksid += val->pucData[0] * 16777216;
        errorCode = secSetKSId(handle, ksid, mksid);
      }
      else
#endif
      {
        errorCode = secSetKSId(handle, ksid);
      }

      if (errorCode == EsecOK)
      {
        // Everything OK
        rsp[0] = 0x90;
        rsp[1] = 0x00;
        *rspSize = 2;

        result = RESULT_OK;
      }
    }
  }

  return result;
}

int SEC_getKeyInventory(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;

  if (RESULT_OK == findCryptoHandle(xBtlv, &node, &handle))
  {
    string keyInfo = "";

    if ((errorCode = secGetKeyInventory(handle, keyInfo)) == EsecOK)
    {
      vBTLVClear(xBtlv);
      node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

      // Append Key Info
      pxBTLVAppendTag(node, SDI_TAG_DFA40E_JSON_FORMATTED_KEY_INFO, (unsigned char *)keyInfo.c_str(), keyInfo.size());

      result = RESULT_OK;
    }
  }

  return result;
}

int SEC_getKeyData(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;

  if (RESULT_OK == findCryptoHandle(xBtlv, &node, &handle))
  {
    struct BTLVNode *val = NULL;
    std::vector<uint8_t> keyInfo;

    // Extract the Key Type
    if ((val = pxBTLVFindTag(node, SDI_TAG_DFA40C_KEY_TYPE)) != NULL && val->uSize == 1)
    {
      com_verifone_host::key_type_t keyType;

      keyType = val->pucData[0];

      // Extract the KEK Flag
      if ((val = pxBTLVFindTag(node, SDI_TAG_DFA410_KEK_FLAG)) != NULL && val->uSize == 1)
      {
        SecTransactionData_t td;
        secError_t errCode;

        td[CTransactionData::TagBendigoKEKFlag] = val->pucData[0];

        if ((errCode = secPutTransactionData(handle, td)) != EsecOK)
        {
          _LOGF_ERROR("SEC_getKeyDatasecPutTransactionData failed: errCode=0x%X", errCode);
        }
      }

      if ((errorCode = secGetKeyData(handle, keyType, keyInfo)) == EsecOK)
      {
        vBTLVClear(xBtlv);
        node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

        // Append Key relevant Info
        if (keyInfo.size() > 0)
        {
          // Append KSN
          pxBTLVAppendTag(node, SDI_TAG_DFA40F_KEY_RELEVANT_INFO, &keyInfo[0], keyInfo.size());
        }

        result = RESULT_OK;
      }
    }
  }

  return result;
}

int SEC_getStatus(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  secHandle_t handle;
  string status;

  if (RESULT_OK == findCryptoHandle(xBtlv, &node, &handle))
  {
    // Crypto handle received, try to get the status for this handle
    if ((errorCode = secGetStatus(status, handle)) == EsecOK)
    {
      result = RESULT_OK;
    }
  }
  else
  {
    // Check if F0-Tag is available
    node = pxBTLVFindTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA);

    if (node == NULL ||
        pxBTLVFindTag(node, SDI_TAG_DFA401_CRYPTO_HANDLE) == NULL)
    {
      struct BTLVNode *val = NULL;
      string hostName;

      // No crypto handle received, try to extract the Host Name
      if (node != NULL && (val = pxBTLVFindTag(node, SDI_TAG_DFA400_HOST_NAME)) != NULL)
      {
        hostName = string((const char *)val->pucData, val->uSize);
      }

      if ((errorCode = secGetStatus(status, hostName)) == EsecOK)
      {
        result = RESULT_OK;
      }
    }
  }

  if (result == RESULT_OK)
  {
    vBTLVClear(xBtlv);
    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (status.size() > 0)
    {
      // Append Status
      pxBTLVAppendTag(node, SDI_TAG_DFA412_STATUS, (unsigned char *)status.c_str(), status.size());
    }
  }

  return result;
}

int SEC_getVersion(struct BTLVNode *xBtlv, secError &errorCode)
{
  int result = RESULT_FAIL;
  struct BTLVNode *node = NULL;
  string versions;

  if ((errorCode = secGetVersions(versions)) == EsecOK)
  {
    //vBTLVClear(&xBtlv);
    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (versions.size() > 0)
    {
      // Append Versions
      pxBTLVAppendTag(node, SDI_TAG_DFA413_VERSION, (unsigned char *)versions.c_str(), versions.size());
    }

    result = RESULT_OK;
  }

  return result;
}

void handleSec(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  int result = RESULT_FAIL;
  bool setKey = false;
  struct BTLVRootNode xBtlv;
  secError errorCode = EsecOK;
  int size = 0;

  if (rsp == NULL || rspSize == NULL)
  {
    return;
  }

  // clear the response buffer
  memset(rsp, 0x00, rspBufSize);

  // Extract the necessary input parameter/data from the BERTLV message buffer
  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    switch (msg[1])
    {
      case INS_SEC_OPEN:
      {
        result = SEC_open(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_CLOSE:
      {
        result = SEC_close(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_ENCRYPT:
      {
        result = SEC_encrypt(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_DECRYPT:
      {
        result = SEC_decrypt(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_SIGN:
      {
        result = SEC_sign(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_VERIFY:
      {
        result = SEC_verify(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_UPDATE_KEY:
      {
        result = SEC_updateKey(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_SET_KEY_SET:
      {
        result = SEC_setKeySet(&xBtlv, rsp, rspSize, errorCode);
        setKey = true;
        break;
      }

#if !defined(_STM32)

      case INS_SEC_GET_ENCRYPTED_PIN:
      {
        result = SEC_getEncryptedPin(&xBtlv, errorCode);
        break;
      }

#endif

      case INS_SEC_GET_KEY_INVENTORY:
      {
        result = SEC_getKeyInventory(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_GET_KEY_DATA:
      {
        result = SEC_getKeyData(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_GET_STATUS:
      {
        result = SEC_getStatus(&xBtlv, errorCode);
        break;
      }

      case INS_SEC_GET_VERSION:
      {
        result = SEC_getVersion(&xBtlv, errorCode);
        break;
      }

      default:
      {
        // unknown INS
        rsp[0] = 0x6D;
        rsp[1] = 0x00;
        *rspSize = 2;

        vBTLVClear(&xBtlv);

        return;
      }
    }
  }

  // fetch error codes and add to response
  if (EsecOK != errorCode)
  {
    common::appendSecRespVal(errorCode, rspBufSize - 2, &rsp[2], &size);
  }

  if ((RESULT_OK == result) &&
      !setKey)
  {
    if ((size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) < 0)
    {
      size = 0;
      result = RESULT_FAIL;
    }
  }

  if (rspBufSize >= 2)
  {
    setSW1SW2(result, rsp);

    *rspSize = 2 + size;
  }
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

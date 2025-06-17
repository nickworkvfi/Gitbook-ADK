---
title: sdi/src/sec.h

---

# sdi/src/sec.h



## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[isAdeEnabled](sec_8h.md#function-isadeenabled)**(void ) |
| void | **[handleSec](sec_8h.md#function-handlesec)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| int | **[findCryptoHandle](sec_8h.md#function-findcryptohandle)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, struct [BTLVNode](struct_b_t_l_v_node.md) ** node, [com_adksec_cmd::secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) * handle) |
| int | **[SEC_getEncryptedPin](sec_8h.md#function-sec-getencryptedpin)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv, [com_adksec_cmd::secError](namespacecom__adksec__cmd.md#enum-secerror) & errorCode) |
| bool | **[getSecHandle](sec_8h.md#function-getsechandle)**(void * sdihandle, [com_adksec_cmd::secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) & h, unsigned idx) |
| void | **[cleanUpSecHandles](sec_8h.md#function-cleanupsechandles)**(void * sdihandle) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_SEC](sec_8h.md#define-cla-sec)** <br>Class for SEC commands.  |
|  | **[INS_SEC_OPEN](sec_8h.md#define-ins-sec-open)** <br>Open SecADK crypto interface.  |
|  | **[INS_SEC_CLOSE](sec_8h.md#define-ins-sec-close)** <br>Close SecADK crypto interface.  |
|  | **[INS_SEC_ENCRYPT](sec_8h.md#define-ins-sec-encrypt)** <br>SecADK Encrypt.  |
|  | **[INS_SEC_DECRYPT](sec_8h.md#define-ins-sec-decrypt)** <br>SecADK Decrypt.  |
|  | **[INS_SEC_SIGN](sec_8h.md#define-ins-sec-sign)** <br>SecADK Singing.  |
|  | **[INS_SEC_VERIFY](sec_8h.md#define-ins-sec-verify)** <br>SecADK Verify.  |
|  | **[INS_SEC_UPDATE_KEY](sec_8h.md#define-ins-sec-update-key)** <br>SecADK Update Key.  |
|  | **[INS_SEC_SET_KEY_SET](sec_8h.md#define-ins-sec-set-key-set)** <br>SecADK Set Key Set.  |
|  | **[INS_SEC_GET_ENCRYPTED_PIN](sec_8h.md#define-ins-sec-get-encrypted-pin)** <br>SecADK Get encrypted Pin.  |
|  | **[INS_SEC_GET_KEY_INVENTORY](sec_8h.md#define-ins-sec-get-key-inventory)** <br>SecADK Get Key Inventory.  |
|  | **[INS_SEC_GET_KEY_DATA](sec_8h.md#define-ins-sec-get-key-data)** <br>SecADK Get Key Data.  |
|  | **[INS_SEC_GET_STATUS](sec_8h.md#define-ins-sec-get-status)** <br>SecADK Get Status.  |
|  | **[INS_SEC_GET_VERSION](sec_8h.md#define-ins-sec-get-version)** <br>SecADK Get Version.  |


## Functions Documentation

### function isAdeEnabled

```cpp
bool isAdeEnabled(
    void 
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


### function findCryptoHandle

```cpp
int findCryptoHandle(
    struct BTLVNode * xBtlv,
    struct BTLVNode ** node,
    com_adksec_cmd::secHandle_t * handle
)
```


### function SEC_getEncryptedPin

```cpp
int SEC_getEncryptedPin(
    struct BTLVNode * xBtlv,
    com_adksec_cmd::secError & errorCode
)
```


### function getSecHandle

```cpp
bool getSecHandle(
    void * sdihandle,
    com_adksec_cmd::secHandle_t & h,
    unsigned idx
)
```


### function cleanUpSecHandles

```cpp
void cleanUpSecHandles(
    void * sdihandle
)
```




## Macros Documentation

### define CLA_SEC

```cpp
#define CLA_SEC 0x70
```

Class for SEC commands. 

### define INS_SEC_OPEN

```cpp
#define INS_SEC_OPEN 0x00
```

Open SecADK crypto interface. 

### define INS_SEC_CLOSE

```cpp
#define INS_SEC_CLOSE 0x01
```

Close SecADK crypto interface. 

### define INS_SEC_ENCRYPT

```cpp
#define INS_SEC_ENCRYPT 0x02
```

SecADK Encrypt. 

### define INS_SEC_DECRYPT

```cpp
#define INS_SEC_DECRYPT 0x03
```

SecADK Decrypt. 

### define INS_SEC_SIGN

```cpp
#define INS_SEC_SIGN 0x04
```

SecADK Singing. 

### define INS_SEC_VERIFY

```cpp
#define INS_SEC_VERIFY 0x05
```

SecADK Verify. 

### define INS_SEC_UPDATE_KEY

```cpp
#define INS_SEC_UPDATE_KEY 0x06
```

SecADK Update Key. 

### define INS_SEC_SET_KEY_SET

```cpp
#define INS_SEC_SET_KEY_SET 0x07
```

SecADK Set Key Set. 

### define INS_SEC_GET_ENCRYPTED_PIN

```cpp
#define INS_SEC_GET_ENCRYPTED_PIN 0x08
```

SecADK Get encrypted Pin. 

### define INS_SEC_GET_KEY_INVENTORY

```cpp
#define INS_SEC_GET_KEY_INVENTORY 0x09
```

SecADK Get Key Inventory. 

### define INS_SEC_GET_KEY_DATA

```cpp
#define INS_SEC_GET_KEY_DATA 0x0A
```

SecADK Get Key Data. 

### define INS_SEC_GET_STATUS

```cpp
#define INS_SEC_GET_STATUS 0x0B
```

SecADK Get Status. 

### define INS_SEC_GET_VERSION

```cpp
#define INS_SEC_GET_VERSION 0x0C
```

SecADK Get Version. 

## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _SEC_H_
#define _SEC_H_

#include "csdcontainer.h"
#include "sec/libsec.h"

#define CLA_SEC                   0x70 

#define INS_SEC_OPEN              0x00 
#define INS_SEC_CLOSE             0x01 
#define INS_SEC_ENCRYPT           0x02 
#define INS_SEC_DECRYPT           0x03 
#define INS_SEC_SIGN              0x04 
#define INS_SEC_VERIFY            0x05 
#define INS_SEC_UPDATE_KEY        0x06 
#define INS_SEC_SET_KEY_SET       0x07 
#define INS_SEC_GET_ENCRYPTED_PIN 0x08 
#define INS_SEC_GET_KEY_INVENTORY 0x09 
#define INS_SEC_GET_KEY_DATA      0x0A 
#define INS_SEC_GET_STATUS        0x0B 
#define INS_SEC_GET_VERSION       0x0C 

#ifdef __cplusplus
extern "C"
{
#endif

bool isAdeEnabled(void);

void handleSec(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
int findCryptoHandle(struct BTLVNode *xBtlv, struct BTLVNode **node, com_adksec_cmd::secHandle_t *handle);

int SEC_getEncryptedPin(struct BTLVNode *xBtlv, com_adksec_cmd::secError &errorCode);

bool getSecHandle(void *sdihandle, com_adksec_cmd::secHandle_t &h, unsigned idx);
void cleanUpSecHandles(void *sdihandle);

#ifdef __cplusplus
}
#endif

#endif // _SEC_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

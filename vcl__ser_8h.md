---
title: sdi/src/vcl_ser.h

---

# sdi/src/vcl_ser.h



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[handleVcl](vcl__ser_8h.md#function-handlevcl)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_VCL](vcl__ser_8h.md#define-cla-vcl)** <br>Class for VCL commands.  |
|  | **[INS_VCL_MSG_REGISTART_SRED_REQ](vcl__ser_8h.md#define-ins-vcl-msg-registart-sred-req)** <br>Turn on Encryption in SRED mode.  |
|  | **[INS_VCL_MSG_STATUS_REQUEST](vcl__ser_8h.md#define-ins-vcl-msg-status-request)** <br>Get VCL's current status.  |
|  | **[INS_VCL_MSG_ADVANCE_DDK](vcl__ser_8h.md#define-ins-vcl-msg-advance-ddk)** <br>Advance to next derived key.  |
|  | **[INS_VCL_MSG_EPARMS_REQUEST](vcl__ser_8h.md#define-ins-vcl-msg-eparms-request)** <br>Get eParms from VCL.  |
|  | **[INS_VCL_MSG_DIAG_QUERY](vcl__ser_8h.md#define-ins-vcl-msg-diag-query)** <br>Diag query.  |
|  | **[INS_VCL_MSG_DERIV_QUERY](vcl__ser_8h.md#define-ins-vcl-msg-deriv-query)** <br>Derive data query.  |
|  | **[INS_VCL_MSG_OVERRIDE_MSG_QUERY](vcl__ser_8h.md#define-ins-vcl-msg-override-msg-query)** <br>Request the queued VCL Override Command Response.  |
|  | **[INS_VCL_MSG_KSN_REQ](vcl__ser_8h.md#define-ins-vcl-msg-ksn-req)** <br>KSN request.  |
|  | **[INS_VCL_MSG_KMAILIN_REQUEST](vcl__ser_8h.md#define-ins-vcl-msg-kmailin-request)** <br>KMAILIN request (VOS3 only)  |


## Functions Documentation

### function handleVcl

```cpp
void handleVcl(
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


Dispatch function to handle different VCL commands 




## Macros Documentation

### define CLA_VCL

```cpp
#define CLA_VCL 0x28
```

Class for VCL commands. 

### define INS_VCL_MSG_REGISTART_SRED_REQ

```cpp
#define INS_VCL_MSG_REGISTART_SRED_REQ 0x00
```

Turn on Encryption in SRED mode. 

### define INS_VCL_MSG_STATUS_REQUEST

```cpp
#define INS_VCL_MSG_STATUS_REQUEST 0x01
```

Get VCL's current status. 

### define INS_VCL_MSG_ADVANCE_DDK

```cpp
#define INS_VCL_MSG_ADVANCE_DDK 0x02
```

Advance to next derived key. 

### define INS_VCL_MSG_EPARMS_REQUEST

```cpp
#define INS_VCL_MSG_EPARMS_REQUEST 0x03
```

Get eParms from VCL. 

### define INS_VCL_MSG_DIAG_QUERY

```cpp
#define INS_VCL_MSG_DIAG_QUERY 0x06
```

Diag query. 

### define INS_VCL_MSG_DERIV_QUERY

```cpp
#define INS_VCL_MSG_DERIV_QUERY 0x07
```

Derive data query. 

### define INS_VCL_MSG_OVERRIDE_MSG_QUERY

```cpp
#define INS_VCL_MSG_OVERRIDE_MSG_QUERY 0x08
```

Request the queued VCL Override Command Response. 

### define INS_VCL_MSG_KSN_REQ

```cpp
#define INS_VCL_MSG_KSN_REQ 0x09
```

KSN request. 

### define INS_VCL_MSG_KMAILIN_REQUEST

```cpp
#define INS_VCL_MSG_KMAILIN_REQUEST 0x0A
```

KMAILIN request (VOS3 only) 

## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _VCL_SER_H_
#define _VCL_SER_H_

#include "csdcontainer.h"
#include "sec/libsec.h"

#define CLA_VCL                        0x28 

#define INS_VCL_MSG_REGISTART_SRED_REQ 0x00 
#define INS_VCL_MSG_STATUS_REQUEST     0x01 
#define INS_VCL_MSG_ADVANCE_DDK        0x02 
#define INS_VCL_MSG_EPARMS_REQUEST     0x03 
#define INS_VCL_MSG_DIAG_QUERY         0x06 
#define INS_VCL_MSG_DERIV_QUERY        0x07 
#define INS_VCL_MSG_OVERRIDE_MSG_QUERY 0x08 
#define INS_VCL_MSG_KSN_REQ            0x09 
#define INS_VCL_MSG_KMAILIN_REQUEST    0x0A 

#ifdef __cplusplus
extern "C"
{
#endif

void handleVcl(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

#ifdef __cplusplus
}
#endif

#endif // _VCL_SER_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

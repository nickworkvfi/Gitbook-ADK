---
title: sdi/src/prt.h

---

# sdi/src/prt.h



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[handlePrt](sdi_2src_2prt_8h.md#function-handleprt)**(unsigned short msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| int | **[print_getStatus](sdi_2src_2prt_8h.md#function-print-getstatus)**(int * valueInt) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_PRT](sdi_2src_2prt_8h.md#define-cla-prt)** <br>Class for PRT commands.  |
|  | **[INS_PRT_SET_PROPERTY](sdi_2src_2prt_8h.md#define-ins-prt-set-property)** <br>prtSetProperty command  |
|  | **[INS_PRT_GET_PROPERTY](sdi_2src_2prt_8h.md#define-ins-prt-get-property)** <br>prtGetProperty command  |
|  | **[INS_PRT_HTML](sdi_2src_2prt_8h.md#define-ins-prt-html)** <br>prtHTML command  |
|  | **[INS_PRT_BITMAP](sdi_2src_2prt_8h.md#define-ins-prt-bitmap)**  |


## Functions Documentation

### function handlePrt

```cpp
void handlePrt(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned long msgSize,
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


**Note**: [handlePrt()](sdi_2src_2prt_8h.md#function-handleprt) is always executed, even if invoked by a side command. Therefore, this function has no return value, see also [process_side_command()](main_8cpp.md#function-process-side-command). 

Dispatch function to handle different printer commands 


### function print_getStatus

```cpp
int print_getStatus(
    int * valueInt
)
```




## Macros Documentation

### define CLA_PRT

```cpp
#define CLA_PRT 0x25
```

Class for PRT commands. 

### define INS_PRT_SET_PROPERTY

```cpp
#define INS_PRT_SET_PROPERTY 0x00
```

prtSetProperty command 

### define INS_PRT_GET_PROPERTY

```cpp
#define INS_PRT_GET_PROPERTY 0x01
```

prtGetProperty command 

### define INS_PRT_HTML

```cpp
#define INS_PRT_HTML 0x02
```

prtHTML command 

### define INS_PRT_BITMAP

```cpp
#define INS_PRT_BITMAP 0x04
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _PRT_H_
#define _PRT_H_

#define CLA_PRT              0x25 

#define INS_PRT_SET_PROPERTY 0x00 
#define INS_PRT_GET_PROPERTY 0x01 
#define INS_PRT_HTML         0x02 
// #define INS_PRT_URL          0x03 
#define INS_PRT_BITMAP       0x04 //< print raw bitmap command

#ifdef __cplusplus
extern "C"
{
#endif

void handlePrt(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

int print_getStatus(int* valueInt);

#ifdef __cplusplus
}
#endif

#endif // _PRT_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

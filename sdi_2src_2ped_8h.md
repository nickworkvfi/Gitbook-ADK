---
title: sdi/src/ped.h

---

# sdi/src/ped.h



## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[handlePedCmd](sdi_2src_2ped_8h.md#function-handlepedcmd)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| bool | **[pedSetExtButton](sdi_2src_2ped_8h.md#function-pedsetextbutton)**(void ) |
| void | **[pedReset](sdi_2src_2ped_8h.md#function-pedreset)**(void * handle) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_PED](sdi_2src_2ped_8h.md#define-cla-ped)** <br>Class for PED commands.  |
|  | **[INS_PED_ENABLE](sdi_2src_2ped_8h.md#define-ins-ped-enable)** <br>Enable or Disable PED.  |
|  | **[INS_PED_GET_PIN](sdi_2src_2ped_8h.md#define-ins-ped-get-pin)** <br>Request PIN from user.  |
|  | **[INS_SET_PIN_TIMEOUT](sdi_2src_2ped_8h.md#define-ins-set-pin-timeout)** <br>Configure timeout for PIN entry.  |
|  | **[INS_PED_START_PIN](sdi_2src_2ped_8h.md#define-ins-ped-start-pin)** <br>Start PIN entry (polling interface)  |
|  | **[INS_PED_POLL_PIN](sdi_2src_2ped_8h.md#define-ins-ped-poll-pin)** <br>Poll PIN entry status (polling interface)  |
|  | **[INS_PED_STOP_PIN](sdi_2src_2ped_8h.md#define-ins-ped-stop-pin)** <br>Stop PIN entry (polling interface)  |
|  | **[INS_SET_PIN_INPUT_PARAM](sdi_2src_2ped_8h.md#define-ins-set-pin-input-param)** <br>Configure PIN input parameter.  |


## Functions Documentation

### function handlePedCmd

```cpp
bool handlePedCmd(
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


**Return**: true if command was executed and rsp contains a response, false in case invocation is not allowed by a side command. 

Dispatch function to handle different PED commands 


### function pedSetExtButton

```cpp
bool pedSetExtButton(
    void 
)
```


**Return**: true if PIN polling is active and Navigator Mode 2 set, else false 

Inform the VAULT about the Confirm button was pressed if PIN polling is active and Navigator Mode 2 is set 


### function pedReset

```cpp
void pedReset(
    void * handle
)
```


**Parameters**: 

  * **handle** handle of the terminating connection 


Function invoked by a thread at connection termination to abort the PIN entry. SDI server supports multiple connections, which can use the PED interface. With activation of the PED interface with command 22-03 (Start PIN entry) on one connection, the interface is locked for other connections. If a connection terminates, which optains the PED lock, the interface would be unaccessable for other connections. Therfore, this function will abort the PIN entry and unlock the PED interface, if the connection disturbes so that it can be used by other connection again. Please note that this function works for a PIN Entry started by 22-03 (Start PIN entry). A PIN entry started with 22-01 (Get PIN) is not considered, but the PED lock is released after the user hast finished the PIN entry. 




## Macros Documentation

### define CLA_PED

```cpp
#define CLA_PED 0x22
```

Class for PED commands. 

### define INS_PED_ENABLE

```cpp
#define INS_PED_ENABLE 0x00
```

Enable or Disable PED. 

### define INS_PED_GET_PIN

```cpp
#define INS_PED_GET_PIN 0x01
```

Request PIN from user. 

### define INS_SET_PIN_TIMEOUT

```cpp
#define INS_SET_PIN_TIMEOUT 0x02
```

Configure timeout for PIN entry. 

### define INS_PED_START_PIN

```cpp
#define INS_PED_START_PIN 0x03
```

Start PIN entry (polling interface) 

### define INS_PED_POLL_PIN

```cpp
#define INS_PED_POLL_PIN 0x04
```

Poll PIN entry status (polling interface) 

### define INS_PED_STOP_PIN

```cpp
#define INS_PED_STOP_PIN 0x05
```

Stop PIN entry (polling interface) 

### define INS_SET_PIN_INPUT_PARAM

```cpp
#define INS_SET_PIN_INPUT_PARAM 0x06
```

Configure PIN input parameter. 

## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _PED_H_
#define _PED_H_

#define CLA_PED                  0x22 

#define INS_PED_ENABLE           0x00 
#define INS_PED_GET_PIN          0x01 
#define INS_SET_PIN_TIMEOUT      0x02 

#define INS_PED_START_PIN        0x03 
#define INS_PED_POLL_PIN         0x04 
#define INS_PED_STOP_PIN         0x05 

#define INS_SET_PIN_INPUT_PARAM  0x06 

#ifdef __cplusplus
extern "C"
{
#endif

bool handlePedCmd(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

bool pedSetExtButton(void);

void pedReset(void *handle);

#ifdef __cplusplus
}
#endif

#endif // _PED_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

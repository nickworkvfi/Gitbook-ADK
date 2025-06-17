---
title: sdi/src/disp.h

---

# sdi/src/disp.h



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[handleDispCmd](disp_8h.md#function-handledispcmd)**(unsigned short msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_DISP](disp_8h.md#define-cla-disp)** <br>Class for Display commands.  |
|  | **[INS_DISP_ENABLE](disp_8h.md#define-ins-disp-enable)** <br>Enable or Disable Display.  |
|  | **[INS_DISP_TEXT](disp_8h.md#define-ins-disp-text)** <br>Display Text.  |
|  | **[INS_DISP_TEXT_CONF](disp_8h.md#define-ins-disp-text-conf)** <br>Display Text with Confirmation.  |
|  | **[INS_DISP_HANDLE_DISPLAY](disp_8h.md#define-ins-disp-handle-display)** <br>Handle Display.  |
|  | **[INS_DISP_HANDLE_SECURE_INPUT](disp_8h.md#define-ins-disp-handle-secure-input)** <br>Handle Secure Input.  |
|  | **[INS_DISP_HANDLE_MENU](disp_8h.md#define-ins-disp-handle-menu)** <br>Handle Menu.  |
|  | **[INS_DISP_HANDLE_CARD_REQUEST](disp_8h.md#define-ins-disp-handle-card-request)** <br>Handle Card Request Display.  |
|  | **[INS_DISP_IDLE_SCREEN](disp_8h.md#define-ins-disp-idle-screen)** <br>Display Idle Screen.  |
|  | **[INS_DISP_HANDLE_SIGNATURE_CAPTURE](disp_8h.md#define-ins-disp-handle-signature-capture)** <br>Display Idle Screen.  |
|  | **[INS_DISP_ACTIVATE_LEDS](disp_8h.md#define-ins-disp-activate-leds)** <br>Activation of LEDs.  |
|  | **[INS_DISP_HANDLE_HTML_DIALOG](disp_8h.md#define-ins-disp-handle-html-dialog)** <br>Handle a customer specific HTML dialog.  |
|  | **[INS_DISP_GET_ASYNC_RESULT](disp_8h.md#define-ins-disp-get-async-result)** <br>Return result of the last asynchronous external dialog (24-03)  |


## Functions Documentation

### function handleDispCmd

```cpp
void handleDispCmd(
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


Dispatch function to handle different Display commands 




## Macros Documentation

### define CLA_DISP

```cpp
#define CLA_DISP 0x24
```

Class for Display commands. 

### define INS_DISP_ENABLE

```cpp
#define INS_DISP_ENABLE 0x00
```

Enable or Disable Display. 

### define INS_DISP_TEXT

```cpp
#define INS_DISP_TEXT 0x01
```

Display Text. 

### define INS_DISP_TEXT_CONF

```cpp
#define INS_DISP_TEXT_CONF 0x02
```

Display Text with Confirmation. 

### define INS_DISP_HANDLE_DISPLAY

```cpp
#define INS_DISP_HANDLE_DISPLAY 0x03
```

Handle Display. 

### define INS_DISP_HANDLE_SECURE_INPUT

```cpp
#define INS_DISP_HANDLE_SECURE_INPUT 0x04
```

Handle Secure Input. 

### define INS_DISP_HANDLE_MENU

```cpp
#define INS_DISP_HANDLE_MENU 0x05
```

Handle Menu. 

### define INS_DISP_HANDLE_CARD_REQUEST

```cpp
#define INS_DISP_HANDLE_CARD_REQUEST 0x06
```

Handle Card Request Display. 

### define INS_DISP_IDLE_SCREEN

```cpp
#define INS_DISP_IDLE_SCREEN 0x07
```

Display Idle Screen. 

### define INS_DISP_HANDLE_SIGNATURE_CAPTURE

```cpp
#define INS_DISP_HANDLE_SIGNATURE_CAPTURE 0x08
```

Display Idle Screen. 

### define INS_DISP_ACTIVATE_LEDS

```cpp
#define INS_DISP_ACTIVATE_LEDS 0x09
```

Activation of LEDs. 

### define INS_DISP_HANDLE_HTML_DIALOG

```cpp
#define INS_DISP_HANDLE_HTML_DIALOG 0x0A
```

Handle a customer specific HTML dialog. 

### define INS_DISP_GET_ASYNC_RESULT

```cpp
#define INS_DISP_GET_ASYNC_RESULT 0x0B
```

Return result of the last asynchronous external dialog (24-03) 

## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _DISP_H_
#define _DISP_H_

#define CLA_DISP                          0x24 

#define INS_DISP_ENABLE                   0x00 
#define INS_DISP_TEXT                     0x01 
#define INS_DISP_TEXT_CONF                0x02 
#define INS_DISP_HANDLE_DISPLAY           0x03 
#define INS_DISP_HANDLE_SECURE_INPUT      0x04 
#define INS_DISP_HANDLE_MENU              0x05 
#define INS_DISP_HANDLE_CARD_REQUEST      0x06 
#define INS_DISP_IDLE_SCREEN              0x07 
#define INS_DISP_HANDLE_SIGNATURE_CAPTURE 0x08 
#define INS_DISP_ACTIVATE_LEDS            0x09 
#define INS_DISP_HANDLE_HTML_DIALOG       0x0A 
#define INS_DISP_GET_ASYNC_RESULT         0x0B 

#ifdef __cplusplus
extern "C"
{
#endif

void handleDispCmd(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

#ifdef __cplusplus
}
#endif

#endif // _DISP_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

---
hidden: true
title: disp.h File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

This graph shows which files directly or indirectly include this file:

![](disp_8h__dep__incl.png)

<a href="disp_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Macros |  |
| #define  | [CLA_DISP](#acff3a92ec7593f6a7ae508c713dae4ad)   0x24 |
|   | Class for Display commands. [More\...](#acff3a92ec7593f6a7ae508c713dae4ad)<br/> |
| #define  | [INS_DISP_ENABLE](#a5552414283ec42b02579d24b331f3e3b)   0x00 |
|   | Enable or Disable Display. [More\...](#a5552414283ec42b02579d24b331f3e3b)<br/> |
| #define  | [INS_DISP_TEXT](#aa9a89489e3262eb3c0d45b1cfd230fad)   0x01 |
|   | Display Text. [More\...](#aa9a89489e3262eb3c0d45b1cfd230fad)<br/> |
| #define  | [INS_DISP_TEXT_CONF](#af6ec23d1b19d567757bb25e060bdc915)   0x02 |
|   | Display Text with Confirmation. [More\...](#af6ec23d1b19d567757bb25e060bdc915)<br/> |
| #define  | [INS_DISP_HANDLE_DISPLAY](#ad33bee6feeb7fed40f7c8f84412cf1ae)   0x03 |
|   | Handle Display. [More\...](#ad33bee6feeb7fed40f7c8f84412cf1ae)<br/> |
| #define  | [INS_DISP_HANDLE_SECURE_INPUT](#a4cd1a7644e8e7eb84b8eca49bdb3387b)   0x04 |
|   | Handle Secure Input. [More\...](#a4cd1a7644e8e7eb84b8eca49bdb3387b)<br/> |
| #define  | [INS_DISP_HANDLE_MENU](#af2d333e085e5fa42c68aba7aebe2e014)   0x05 |
|   | Handle Menu. [More\...](#af2d333e085e5fa42c68aba7aebe2e014)<br/> |
| #define  | [INS_DISP_HANDLE_CARD_REQUEST](#abf6d3a2d716eba006c1010658bfe14f0)   0x06 |
|   | Handle Card Request Display. [More\...](#abf6d3a2d716eba006c1010658bfe14f0)<br/> |
| #define  | [INS_DISP_IDLE_SCREEN](#a0c231519b00109d232d336c1b40bdac7)   0x07 |
|   | Display Idle Screen. [More\...](#a0c231519b00109d232d336c1b40bdac7)<br/> |
| #define  | [INS_DISP_HANDLE_SIGNATURE_CAPTURE](#ac30e4e18714cfed1393b681397a3895d)   0x08 |
|   | Display Idle Screen. [More\...](#ac30e4e18714cfed1393b681397a3895d)<br/> |
| #define  | [INS_DISP_ACTIVATE_LEDS](#a48112e525a1ddf4895d83b4ce63c780f)   0x09 |
|   | Activation of LEDs. [More\...](#a48112e525a1ddf4895d83b4ce63c780f)<br/> |
| #define  | [INS_DISP_HANDLE_HTML_DIALOG](#a77230f3169974e5d8b055378e99e80f1)   0x0A |
|   | Handle a customer specific HTML dialog. [More\...](#a77230f3169974e5d8b055378e99e80f1)<br/> |
| #define  | [INS_DISP_GET_ASYNC_RESULT](#a4b617aeca4cdae3be87f6490516039ff)   0x0B |
|   | Return result of the last asynchronous external dialog (24-03) [More\...](#a4b617aeca4cdae3be87f6490516039ff)<br/> |

|  |  |
|----|----|
| Functions |  |
| void  | [handleDispCmd](#a5b3e410eb3656aac2880328377cd7eec) (unsigned short msgBufSize, unsigned char \*msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char \*rsp, unsigned short \*rspSize) |

## MacroDefinition Documentation {#macro-definition-documentation}

## CLA_DISP <a href="#acff3a92ec7593f6a7ae508c713dae4ad" id="acff3a92ec7593f6a7ae508c713dae4ad"></a>

<p>#define CLA_DISP   0x24</p>

Class for Display commands.

## INS_DISP_ACTIVATE_LEDS <a href="#a48112e525a1ddf4895d83b4ce63c780f" id="a48112e525a1ddf4895d83b4ce63c780f"></a>

<p>#define INS_DISP_ACTIVATE_LEDS   0x09</p>

Activation of LEDs.

## INS_DISP_ENABLE <a href="#a5552414283ec42b02579d24b331f3e3b" id="a5552414283ec42b02579d24b331f3e3b"></a>

<p>#define INS_DISP_ENABLE   0x00</p>

Enable or Disable Display.

## INS_DISP_GET_ASYNC_RESULT <a href="#a4b617aeca4cdae3be87f6490516039ff" id="a4b617aeca4cdae3be87f6490516039ff"></a>

<p>#define INS_DISP_GET_ASYNC_RESULT   0x0B</p>

Return result of the last asynchronous external dialog (24-03)

## INS_DISP_HANDLE_CARD_REQUEST <a href="#abf6d3a2d716eba006c1010658bfe14f0" id="abf6d3a2d716eba006c1010658bfe14f0"></a>

<p>#define INS_DISP_HANDLE_CARD_REQUEST   0x06</p>

Handle Card Request Display.

## INS_DISP_HANDLE_DISPLAY <a href="#ad33bee6feeb7fed40f7c8f84412cf1ae" id="ad33bee6feeb7fed40f7c8f84412cf1ae"></a>

<p>#define INS_DISP_HANDLE_DISPLAY   0x03</p>

Handle Display.

## INS_DISP_HANDLE_HTML_DIALOG <a href="#a77230f3169974e5d8b055378e99e80f1" id="a77230f3169974e5d8b055378e99e80f1"></a>

<p>#define INS_DISP_HANDLE_HTML_DIALOG   0x0A</p>

Handle a customer specific HTML dialog.

## INS_DISP_HANDLE_MENU <a href="#af2d333e085e5fa42c68aba7aebe2e014" id="af2d333e085e5fa42c68aba7aebe2e014"></a>

<p>#define INS_DISP_HANDLE_MENU   0x05</p>

Handle Menu.

## INS_DISP_HANDLE_SECURE_INPUT <a href="#a4cd1a7644e8e7eb84b8eca49bdb3387b" id="a4cd1a7644e8e7eb84b8eca49bdb3387b"></a>

<p>#define INS_DISP_HANDLE_SECURE_INPUT   0x04</p>

Handle Secure Input.

## INS_DISP_HANDLE_SIGNATURE_CAPTURE <a href="#ac30e4e18714cfed1393b681397a3895d" id="ac30e4e18714cfed1393b681397a3895d"></a>

<p>#define INS_DISP_HANDLE_SIGNATURE_CAPTURE   0x08</p>

Display Idle Screen.

## INS_DISP_IDLE_SCREEN <a href="#a0c231519b00109d232d336c1b40bdac7" id="a0c231519b00109d232d336c1b40bdac7"></a>

<p>#define INS_DISP_IDLE_SCREEN   0x07</p>

Display Idle Screen.

## INS_DISP_TEXT <a href="#aa9a89489e3262eb3c0d45b1cfd230fad" id="aa9a89489e3262eb3c0d45b1cfd230fad"></a>

<p>#define INS_DISP_TEXT   0x01</p>

Display Text.

## INS_DISP_TEXT_CONF <a href="#af6ec23d1b19d567757bb25e060bdc915" id="af6ec23d1b19d567757bb25e060bdc915"></a>

<p>#define INS_DISP_TEXT_CONF   0x02</p>

Display Text with Confirmation.

## FunctionDocumentation {#function-documentation}

## handleDispCmd() <a href="#a5b3e410eb3656aac2880328377cd7eec" id="a5b3e410eb3656aac2880328377cd7eec"></a>

<p>void handleDispCmd</p>

Dispatch function to handle different Display commands

**Parameters**

\[in\] **msgBufSize** size of the input message buffer \[in\] **msg** pointer to the input message buffer \[in\] **msgSize** size of the input message \[in\] **rspBufSize** maximum size of the response buffer \[in,out\] **rsp** pointer to the response buffer \[in,out\] **rspSize** pointer to the response message size

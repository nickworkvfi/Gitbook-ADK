---
title: sdi/src/disp.cpp

---

# sdi/src/disp.cpp



## Namespaces

| Name           |
| -------------- |
| **[config](namespaceconfig.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[dispEnable](disp_8cpp.md#function-dispenable)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handleDisplay](disp_8cpp.md#function-handledisplay)**(unsigned short msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handleSecureInput](disp_8cpp.md#function-handlesecureinput)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handleMenu](disp_8cpp.md#function-handlemenu)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handleCardRequestDisplay](disp_8cpp.md#function-handlecardrequestdisplay)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[displayIdleScreen](disp_8cpp.md#function-displayidlescreen)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handleSignatureCapture](disp_8cpp.md#function-handlesignaturecapture)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[activateLEDs](disp_8cpp.md#function-activateleds)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handleHtmlDialog](disp_8cpp.md#function-handlehtmldialog)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[displayGetAsyncResult](disp_8cpp.md#function-displaygetasyncresult)**(unsigned short msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handleDispCmd](disp_8cpp.md#function-handledispcmd)**(unsigned short msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |


## Functions Documentation

### function dispEnable

```cpp
static void dispEnable(
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
  * **rsp** pointer to the response message size 


**Note**: This command doesn't contain any further data than CLA, INS, P1 and P2. The distinction between Enable and Disable is handled by the P2 value (0-Enable, 1-Disable). 

Enable or disable the Display device 


### function handleDisplay

```cpp
static void handleDisplay(
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


Display a Text on the Display device 


### function handleSecureInput

```cpp
static void handleSecureInput(
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
  * **rsp** pointer to the response message size 


Handles a secure input on the e3xx screen 


### function handleMenu

```cpp
static void handleMenu(
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
  * **rsp** pointer to the response message size 


Handles a menu on the e3xx screen 


### function handleCardRequestDisplay

```cpp
static void handleCardRequestDisplay(
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
  * **rsp** pointer to the response message size 


Handles the card request display according the given card technology 


### function displayIdleScreen

```cpp
static void displayIdleScreen(
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
  * **rsp** pointer to the response message size 


Display the Idle Screen 


### function handleSignatureCapture

```cpp
static void handleSignatureCapture(
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
  * **rsp** pointer to the response message size 


Handles a signature capture dialog on the device screen 


### function activateLEDs

```cpp
static void activateLEDs(
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


Activates or disactivates the CTLS-LED bar 


### function handleHtmlDialog

```cpp
static void handleHtmlDialog(
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


Handle a customer specific HTML dialog 


### function displayGetAsyncResult

```cpp
static void displayGetAsyncResult(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned long msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


< status '0': async dialog confirmed with ENTER/CONFIRM hardkey/softkey

< status '1': no async dialog started (no result)

< status '2': async dialog in progress (no result returned yet)

< CANCEL/ABORT hardkey/softkey was pressed

< async dialog has timed out

< BACK/CLEAR hardkey/softkey was pressed -> raw_ui_error set to -2 (UI_ERR_BACK)

< async dialog has failed (provide raw_ui_error for more details)


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




## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/
#ifndef HEADLESS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include "btlv_helper.h"
#include "html/gui.h"
#include "sys/time.h"
#include "disp.h"
#include "_logf.h"
#include "sys.h"
#include "ui.h"
#include "util.h"
#include "config/sdi_sysconfig.h"
#include "sdi_tags.h"
#include "common/respVal.h"
#include "config.h"
#include <fcntl.h>
#include <errno.h>
#include "emv/EMV_Common_Interface.h"

using namespace std;
using namespace vfigui;
using namespace config;

static void dispEnable(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

static void handleDisplay(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void handleSecureInput(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void handleMenu(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void handleCardRequestDisplay(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void displayIdleScreen(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void handleSignatureCapture(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void activateLEDs(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void handleHtmlDialog(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void displayGetAsyncResult(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

//**************************************
//* handleDispCmd                      *
//* documentation see ped.h            *
//**************************************
void handleDispCmd(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  // clear the response buffer
  memset(rsp, 0x00, rspBufSize);

  switch (msg[1])
  {
    case INS_DISP_ENABLE:
    {
      dispEnable(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_DISP_HANDLE_DISPLAY:
    {
      handleDisplay(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_DISP_HANDLE_MENU:
    {
      handleMenu(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_DISP_HANDLE_SECURE_INPUT:
    {
      handleSecureInput(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_DISP_HANDLE_CARD_REQUEST:
    {
      handleCardRequestDisplay(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_DISP_IDLE_SCREEN:
    {
      displayIdleScreen(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_DISP_HANDLE_SIGNATURE_CAPTURE:
    {
      handleSignatureCapture(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_DISP_ACTIVATE_LEDS:
    {
      activateLEDs(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_DISP_HANDLE_HTML_DIALOG:
    {
      handleHtmlDialog(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_DISP_GET_ASYNC_RESULT:
    {
      displayGetAsyncResult(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    default:
    {
      // unknown INS
      rsp[0] = 0x6D;
      rsp[1] = 0x00;
      *rspSize = 2;
    }
  }
}

static void dispEnable(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;
  (void) msgSize;
  (void) msg;

  if (ui_enabled())
  {
    // function not necessary if GUI is used
    rsp[0] = 0x90;
    rsp[1] = 0x00;
    *rspSize = 2;
  }
}

static void handleDisplay(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  int result = RESULT_OK;
  struct BTLVRootNode xBtlv;
  int raw_ui_error = 0;

  (void) msgBufSize;

  if (msgSize > 4 && iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *f0 = NULL;
    struct BTLVNode *node = NULL;
    unsigned char   timeout[2] = {0, 0}; // default timeout = 0
    map<string, string> value;
    unsigned char templateId = 1;  // default template ID = 1
    unsigned char confirm = 0; // default: no confirm (only used if no dialog options provided)
    unsigned options = DLG_DisplayOnly; // dialog options (default is 0: just display dialog without buttons)

    if ((f0 = pxBTLVFindTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA)) != NULL)
    {
      // extract template ID
      iBTLVExtractTag(f0, SDI_TAG_DFA010_DISPLAY_TEMPLATE_ID, &templateId, 1);

      // extract timeout
      iBTLVExtractTag(f0, SDI_TAG_DFA005_TIMEOUT_SEC, timeout, 2);

      // extract confirmation
      iBTLVExtractTag(f0, SDI_TAG_DFA006_CONFIRMATION_REQUESTED, &confirm, 1);

      // dialog options
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA13D_DIALOG_OPTIONS)) != NULL)
      {
        // take over option value
        for (unsigned i = 0; i < node->uSize; i++)
        {
          options = options << 8 | node->pucData[i];
        }

        // filter allowed options
        options &= DLG_AllowedExtOptions;

        // check for enter button label
        if ((options & DLG_EnterKey) && (node = pxBTLVFindTag(f0, SDI_TAG_DFA13E_DIALOG_ENTER_BUTTON_LABEL)) && node->uSize > 0)
        {
          value["label_enter"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
        }

        // check for clear button label
        if ((options & DLG_ClearKey) && (node = pxBTLVFindTag(f0, SDI_TAG_DFA13F_DIALOG_CLEAR_BUTTON_LABEL)) && node->uSize > 0)
        {
          value["label_clear"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
        }

        // check for cancel button label
        if ((options & DLG_CancelKey) && (node = pxBTLVFindTag(f0, SDI_TAG_DFA140_DIALOG_CANCEL_BUTTON_LABEL)) && node->uSize > 0)
        {
          value["label_cancel"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
        }

        // check for dialog header text label
        if (!(options & DLG_NoHeader) && (node = pxBTLVFindTag(f0, SDI_TAG_DFA143_DIALOG_HEADER_LABEL)) && node->uSize > 0)
        {
          value["header_text"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
        }
      }
      else
      {
        // signal UI layer that compatibility mode for old external dialog is active
        options |= DLG_ExtDialogCompat;
      }

      // extract beep
      unsigned char beep = 0; // default: no beep
      iBTLVExtractTag(f0, SDI_TAG_DFA00D_TEXT_BEEP, &beep, 1);

      if (beep)
      {
        options |= DLG_Beep;
      }

      // additional key actions
      JSObject key_actions;
      unsigned ka_idx = 0;
      node = NULL;

      // SDI >4.14.4 uses multiple tags FFA106 each containing 1 key-action pair
      while ((node = pxBTLVFindNextTag(f0, SDI_TAG_FFA106_ADDITIONAL_KEY_ACTION, node)) != NULL)
      {
        struct BTLVNode *key, *action;
        key = action = NULL;

        // be compatible to first implementation in SDI 4.14.4, which has used multible key-action pairs in one FFA106
        while ((key = pxBTLVFindNextTag(node, SDI_TAG_DFA13B_ADDITIONAL_KEY, key)) && key->uSize > 0
               && (action = pxBTLVFindNextTag(node, SDI_TAG_DFA13C_ADDITIONAL_ACTION, action)) && action->uSize > 0)
        {
          /* Don't use uiPrint(), since 'key' contains '&', which would be escaped.
           * In addition, both values are validated by JavaScript */
          key_actions[ka_idx]("key") = string((const char *)key->pucData, key->uSize);
          key_actions[ka_idx]("action") = string((const char *)action->pucData, action->uSize);
          ka_idx++;
        }
      }

      if (ka_idx > 0)
      {
        value["key_actions"] = key_actions.dump();
      }

      // extract texts
      node = NULL;

      while ((node = pxBTLVFindNextTag(f0, SDI_TAG_FFA011_DISPLAY_DATA, node)) != NULL)
      {
        struct BTLVNode *var = NULL;

        // check for variable name
        string varname = "text"; // default (if DFA012 is missing)

        if ((var = pxBTLVFindTag(node, SDI_TAG_DFA012_DISPLAY_DATA_NAME)) != NULL)
        {
          varname.assign((const char *)var->pucData, var->uSize);
        }

        map<string, string>::iterator it = value.find(varname);

        if (it != value.end())
        {
          _LOGF_ERROR("handleDisplay: Variable name '%s' already exists and cannot be used at twice", varname.c_str());
          result = RESULT_FAIL;
          break;
        }

        // check for variable value
        if ((var = pxBTLVFindTag(node, SDI_TAG_DFA013_DISPLAY_DATA_VALUE)) != NULL)
        {
          // use uiPrint() to not allow HTML (in addition this does some additional converstion, e.g. \n -> <br>)
          value[varname] = uiPrint("%S", string((const char *)var->pucData, var->uSize).c_str());
        }
        else
        {
          _LOGF_ERROR("handleDisplay: TLV tag DFA013 (variable value) is missing");
          result = RESULT_FAIL;
          break;
        }
      }
    }
    else
    {
      _LOGF_ERROR("handleDisplay: Unknown TLV Data imported (Tag F0 missing)");
      result = RESULT_FAIL;
    }

    if (result == RESULT_OK)
    {
      result = ui_externalDialog(templateId, value, confirm, options, (timeout[0] << 8) | (timeout[1]), &raw_ui_error);
    }
  }
  else if (msgSize > 4) // Pure command (without data) means 'Display Clear', thus, only pending bytes lead to error
  {
    _LOGF_ERROR("handleDisplay: TLV import failed");
    result = RESULT_FAIL;
  }
  else
  {
    ui_clear(); // clear display, keep RESULT_OK and return 9000
  }


  if (rsp != NULL && rspSize != NULL && rspBufSize >= 2)
  {
    switch (result)
    {
      case RESULT_OK:
        rsp[0] = 0x90;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      case RESULT_USER_CANCEL:
        // Cancellation by user
        rsp[0] = 0x64;
        rsp[1] = 0x05;
        *rspSize = 2;
        break;

      case RESULT_MOBILE_ABORT:
        // Abort from host device
        rsp[0] = 0x65;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      case RESULT_NO_LINK:
        // Set ExtServer into idle state
        setDevice2Idle();
        *rspSize = 0;
        break;

      case RESULT_TIMEOUT:
        // Timeout error
        rsp[0] = 0x66;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      default:
      case RESULT_FAIL:
      {
        // Execution error
        rsp[0] = 0x64;
        rsp[1] = 0x00;

        // check, if raw_ui_error was set by UI
        if (raw_ui_error == 0)
        {
          /* Init value UI_ERR_OK (0) already mapped to RESULT_OK (9000), if uiInvoke() was used.
           * Thus, another error occured w/o UI being invoked. */
          *rspSize = 2;
          break;
        }

        /* add raw UI error code
         * Note: appendRespVal() always returns RESULT_FAIL (even if error code was successfully added).
         *       In case of failure, parameter size is set to 0 and we just return 6400 response. */
        int size = 0;
        (void)common::appendRespVal(raw_ui_error, rspBufSize - 2, &rsp[2], &size);
        *rspSize = 2 + size;
        break;
      }
    }
  }
}

static void handleSecureInput(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  int    result = RESULT_OK;
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;
  char   *inputFormatString = NULL;
  stringmap value;

  (void) msgBufSize;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    unsigned char templateId = 0; // default template ID = 0
    sdi::Language textLanguage = SdiSysConfig::instance().getLanguageId(); // default: system language
    unsigned char beep = 0;
    char          maskChar = 0;
    unsigned char amount[6] = {0};
    unsigned short currency = 0;

    // Determine the Template Id
    if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA007_INPUT_TEMPLATE_ID))) != NULL) &&
        (node -> uSize == 1))
    {
      templateId = *node->pucData;

      if (templateId < 0x01 || templateId > 0x11)
      {
        result = RESULT_FAIL;
      }
    }
    else
    {
      _LOGF_ERROR("%s: Mandatory tag missing or wrong size", __FUNCTION__);
      result = RESULT_FAIL;
    }

    if ((result == RESULT_OK) &&
        // Determine the Text Language
        ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA008_TEXT_LANGUAGE))) != NULL) &&
        (node->uSize == 1))
    {
      // Check whether the Text Language is valid/supported
      textLanguage = sdi::languageSupported(node->pucData[0]);

      if (textLanguage == sdi::LANG_NO_LANG)
      {
        _LOGF_ERROR("%s: Text Language 0x%02X not supported", __FUNCTION__, node->pucData[0]);
        result = RESULT_FAIL;
      }
      else
      {
        _LOGF_INFO("%s: textLanguage = 0x%02X", __FUNCTION__, textLanguage);
      }
    }

    if ((result == RESULT_OK) &&
        // Check whether a beep should be occur
        (((node = pxBTLVFindTag(&xBtlv,
                                NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA,
                                           SDI_TAG_DFA00D_TEXT_BEEP))
          ) != NULL) && (node->pucData[node->uSize - 1] == 0x01)))
    {
      beep = 1;
    }

    if ((result == RESULT_OK) &&
        // Check for masking character
        ((node = pxBTLVFindTag(&xBtlv,
                               NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA,
                                          SDI_TAG_DFA019_MASKING_CHARACTER))) != NULL))
    {
      // Check for valid presentable ASCII sign
      if ((*node->pucData < 0x20) ||
          (*node->pucData > 0x7E))
      {
        _LOGF_ERROR("%s: Wrong ASCII sign as masking character", __FUNCTION__);
        result = RESULT_FAIL;
      }
      else
      {
        maskChar = *node->pucData;
      }
    }

    if ((result == RESULT_OK) &&
        // Check for alternative input format string
        ((node = pxBTLVFindTag(&xBtlv,
                               NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA,
                                          SDI_TAG_DFA01A_ALT_INPUT_FORMAT_STRING)
                              )) != NULL))
    {
      // Allocate memory for the alternative input format string
      if ((inputFormatString = (char *)malloc(node->uSize + 1)) != NULL)
      {
        memcpy(inputFormatString, node->pucData, node->uSize);
        inputFormatString[node->uSize] = 0x00;

        // Check the validity of the data
        if ((strlen(inputFormatString) >= 3) &&
            (inputFormatString[0] == 0x5B)   &&          // "["
            (inputFormatString[node->uSize - 1] == 0x5D)) // "]"
        {
          unsigned int  i;
          char optInpChar = 0;

          for (i = 1; i < strlen(inputFormatString) - 1; i++)
          {
            if (inputFormatString[i] == 0x6E) // "n"
            {
              optInpChar = 1;
            }
            else if ((inputFormatString[i] != 0x4E) || // "N"
                     (optInpChar == 1))
            {
              _LOGF_ERROR("%s: Invalid alternative input format string received", __FUNCTION__);
              result = RESULT_FAIL;
              break;
            }
          }
        }
        else
        {
          _LOGF_ERROR("%s: Alternative input format string has wrong format", __FUNCTION__);
          result = RESULT_FAIL;
        }
      }
      else
      {
        _LOGF_ERROR("%s: No memory available for alternative input format string", __FUNCTION__);
        result = RESULT_FAIL;
      }
    }

    if (result == RESULT_OK && templateId == 0x0E)
    {
      // amount
      if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "9F02"))) != NULL) &&
          (node -> uSize == 6))
      {
        memcpy(amount, node->pucData, node->uSize);

        // currency
        if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "5F2A"))) != NULL) &&
            (node -> uSize == 2))
        {
          currency = node->pucData[0] << 8;
          currency += node->pucData[1];
        }
        else
        {
          _LOGF_ERROR("%s: Currency missing or wrong size", __FUNCTION__);
          result = RESULT_PARAMETER_ERROR;
        }
      }
      else if (node != NULL)
      {
        _LOGF_ERROR("%s: Amount size wrong", __FUNCTION__);
        result = RESULT_PARAMETER_ERROR;
      }
    }
    // for other amount inputs we show currency (if provided with TLV tag 5F2A)
    else if (result == RESULT_OK && (templateId == 0x0B || templateId == 0x0D))
    {
      // currency (optional)
      if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "5F2A"))) != NULL) &&
          (node -> uSize == 2))
      {
        currency = decodeUS(node->pucData);
      }
    }

    if (result == RESULT_OK)
    {
      unsigned short timeout = 0;

      // Check whether a valid timeout value is received
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA005_TIMEOUT_SEC))) != NULL)
      {
        if (node->uSize == 2)
        {
          timeout = decodeUS(node->pucData);
        }
        else
        {
          _LOGF_ERROR("%s: Wrong timeout length", __FUNCTION__);
          result = RESULT_FAIL;
        }
      }

      if (result == RESULT_OK)
      {
        if (templateId == 0x0E) // TIP input with showing the amount
        {
          result = ui_handleSecureInput(templateId, textLanguage, beep, timeout, value, maskChar, inputFormatString, amount, currency);
        }
        else
        {
          result = ui_handleSecureInput(templateId, textLanguage, beep, timeout, value, maskChar, inputFormatString, 0, currency);
        }

        if (result != RESULT_OK)
        {
          _LOGF_ERROR("%s: ui_handleSecureInput() failed with %d", __FUNCTION__, result);
        }
      }
    }
  }
  else
  {
    _LOGF_ERROR("%s: TLV import failed", __FUNCTION__);
    result = RESULT_FAIL;
  }

  vBTLVClear(&xBtlv);

  // Free the memory for alternative format string
  if (inputFormatString != NULL)
  {
    free(inputFormatString);
  }

  if (rsp != NULL && rspSize != NULL && rspBufSize >= 2)
  {
    switch (result)
    {
      case RESULT_OK:
      {
        int size;
        vBTLVClear(&xBtlv);
        node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

        for (stringmap::iterator iterator = value.begin(); iterator != value.end(); ++iterator)
        {
          struct BTLVNode *text = pxBTLVAppendTag(node, SDI_TAG_FFA014_INPUT_DATA, NULL, 0);

          pxBTLVAppendTag(text, SDI_TAG_DFA015_INPUT_DATA_NAME, (unsigned char *)iterator->first.data(), iterator->first.length());
          pxBTLVAppendTag(text, SDI_TAG_DFA016_INPUT_DATA_VALUE, (unsigned char *)iterator->second.data(), iterator->second.length());
        }

        if ((size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) > 0)
        {
          rsp[0] = 0x90;
          rsp[1] = 0x00;
          *rspSize = 2 + size;
        }
        else
        {
          _LOGF_ERROR("%s: Response buffer too small", __FUNCTION__);
          rsp[0] = 0x64;
          rsp[1] = 0x00;
          *rspSize = 2;
        }

        break;
      }

      case RESULT_USER_CANCEL:
        // Cancellation by user
        rsp[0] = 0x64;
        rsp[1] = 0x05;
        *rspSize = 2;
        break;

      case RESULT_MOBILE_ABORT:
        // Abort from host device
        rsp[0] = 0x65;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      case RESULT_NO_LINK:
        // Set ExtServer into idle state
        setDevice2Idle();
        *rspSize = 0;
        break;

      case RESULT_TIMEOUT:
        // Timeout error
        rsp[0] = 0x66;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      case RESULT_PARAMETER_ERROR:
        // Wrong parameter detected
        rsp[0] = 0x64;
        rsp[1] = 0xFE;
        *rspSize = 2;
        break;

      case RESULT_FAIL:
      default:
        // Execution error
        rsp[0] = 0x64;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;
    }
  }
}

static void handleMenu(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  int result = RESULT_OK;
  struct BTLVRootNode xBtlv;
  int raw_ui_error = 0;
  unsigned menu_cnt = 0; // counts the menu entries

  (void) msgBufSize;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *f0 = NULL;
    struct BTLVNode *node = NULL;
    map<string, string> value;
    JSObject menuEntries;
    unsigned char timeout[2] = {0, 0}; // default timeout = 0
    unsigned options = MENU_NoOpts; // menu options (default: no options set)

    if ((f0 = pxBTLVFindTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA)) != NULL)
    {
      bool     highlight = false;
      unsigned highlightIdx = 0;

      // extract timeout
      iBTLVExtractTag(f0, SDI_TAG_DFA005_TIMEOUT_SEC, timeout, 2);

      // menu dialog options
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA13D_DIALOG_OPTIONS)) != NULL)
      {
        // take over option value
        for (unsigned i = 0; i < node->uSize; i++)
        {
          options = options << 8 | node->pucData[i];
        }

        // filter allowed options
        options &= MENU_AllowedExtOptions;
      }
      else
      {
        /* compatibility mode (without dialog options behave the same as old SDI versions):
         * 1. clear screen, if the menu command returns
         * 2. abort menu dialog, of an inserted card is removed */
        options = MENU_ClearOnReturn;

        if (isCardRemoved() == 0)
        {
          // Check for card removal on a chip transaction during an active Menu
          options |= MENU_AbortOnCardRemove;
        }
      }

      // check for enter button label
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA13E_DIALOG_ENTER_BUTTON_LABEL)) && node->uSize > 0)
      {
        value["label_enter"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
      }

      // check for cancel button label
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA140_DIALOG_CANCEL_BUTTON_LABEL)) && node->uSize > 0)
      {
        value["label_cancel"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
      }

      // check for up button label
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA141_DIALOG_UP_BUTTON_LABEL)) && node->uSize > 0)
      {
        value["label_up"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
      }

      // check for down button label
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA142_DIALOG_DOWN_BUTTON_LABEL)) && node->uSize > 0)
      {
        value["label_down"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
      }

      // check for dialog header text label
      if (!(options & MENU_NoHeader) && (node = pxBTLVFindTag(f0, SDI_TAG_DFA143_DIALOG_HEADER_LABEL)) && node->uSize > 0)
      {
        value["header_text"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
      }

      // check for headline (menu prompt)
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA00A_MENU_HEADLINE_TEXT)) != NULL)
      {
        value["headline"] = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
      }

      // extract beep
      unsigned char beep = 0; // default: no beep
      iBTLVExtractTag(f0, SDI_TAG_DFA00D_TEXT_BEEP, &beep, 1);

      if (beep)
      {
        options |= DLG_Beep;
      }

      // additional key actions
      JSObject key_actions;
      unsigned ka_idx = 0;
      node = NULL;

      // SDI >4.14.4 uses multiple tags FFA106 each containing 1 key-action pair
      while ((node = pxBTLVFindNextTag(f0, SDI_TAG_FFA106_ADDITIONAL_KEY_ACTION, node)) != NULL)
      {
        struct BTLVNode *key, *action;
        key = action = NULL;

        // be compatible to first implementation in SDI 4.14.4, which has used multible key-action pairs in one FFA106
        while ((key = pxBTLVFindNextTag(node, SDI_TAG_DFA13B_ADDITIONAL_KEY, key)) && key->uSize > 0
               && (action = pxBTLVFindNextTag(node, SDI_TAG_DFA13C_ADDITIONAL_ACTION, action)) && action->uSize > 0)
        {
          /* Don't use uiPrint(), since 'key' contains '&', which would be escaped.
           * In addition, both values are validated by JavaScript */
          key_actions[ka_idx]("key") = string((const char *)key->pucData, key->uSize);
          key_actions[ka_idx]("action") = string((const char *)action->pucData, action->uSize);
          ka_idx++;
        }
      }

      if (ka_idx > 0)
      {
        value["key_actions"] = key_actions.dump();
      }

      // check whether an entry should be highlighted
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA00C_MENU_ENTRY_INDEX)) != NULL)
      {
        highlight = true;

        if (node->uSize == 1)
        {
          // extract entry which should be highlighted
          highlightIdx = node->pucData[0];
        }
        else
        {
          result = RESULT_FAIL;
        }
      }

      if (result == RESULT_OK)
      {
        // extract texts
        node = NULL;

        while ((node = pxBTLVFindNextTag(f0, SDI_TAG_DFA00B_MENU_ENTRY_TEXT, node)) != NULL)
        {
          if (menu_cnt == 255)
          {
            result = RESULT_FAIL;
            break;
          }

          menuEntries[menu_cnt]("selected") = false; // pre-select no entry
          menuEntries[menu_cnt]("text") = uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
          menuEntries[menu_cnt]("value") = menu_cnt + 1; // start return values from 1
          menu_cnt++;
        }

        if (menu_cnt == 0)
        {
          // No menu entry found
          result = RESULT_FAIL;
        }

        if (result == RESULT_OK)
        {
          // Highligh menu entry
          if (highlight == true)
          {
            if ((highlightIdx > 0) &&
                (highlightIdx <= menu_cnt))
            {
              menuEntries[highlightIdx - 1]("selected") = true; // pre-select the requested entry
            }
          }
          else // previous behavior!
          {
            menuEntries[0]("selected") = true; // pre-select the first entry
          }
        }
      }
    }

    if (result == RESULT_OK)
    {
      if (menuEntries.size() == 0)
      {
        _LOGF_ERROR("handleMenu: No menu entries found");
        result = RESULT_FAIL;
      }
      else
      {
        value["menu"] = menuEntries.dump();
        result = ui_handleMenu(value, options, (timeout[0] << 8) | (timeout[1]), &raw_ui_error);
      }
    }
  }
  else
  {
    _LOGF_ERROR("handleMenu: TLV import failed");
    result = RESULT_FAIL;
  }

  if (rsp != NULL && rspSize != NULL && rspBufSize >= 2)
  {
    unsigned char selected_item = 0;

    if (result >= RESULT_OK)
    {
      // menu entries in range 1...n
      if (result > RESULT_OK && result <= (int)menu_cnt)
      {
        selected_item = (unsigned char)result;
        result = RESULT_OK;
      }
      else
      {
        /* PWMADK-2759: allow positive UI error codes provided with additional key actions
         * and return them in response 6400 with tag DFA000 (additional error code).
         * If these values conflict with menu item index numbers, SDI returns them
         * in response 9000 with tag DFA00C (menu index). */
        result = RESULT_FAIL;
      }
    }

    switch (result)
    {
      case RESULT_OK:
      {
        if (rspBufSize < 9)
        {
          _LOGF_ERROR("handleMenu: Response buffer too small");
          rsp[0] = 0x64;
          rsp[1] = 0x00;
          *rspSize = 2;
          break;
        }

        // Everything OK
        rsp[0] = 0x90;
        rsp[1] = 0x00;
        rsp[2] = 0xF0;
        rsp[3] = 0x05;
        rsp[4] = 0xDF;
        rsp[5] = 0xA0;
        rsp[6] = 0x0C;
        rsp[7] = 0x01;
        rsp[8] = selected_item;
        *rspSize = 9;
        break;
      }

      case RESULT_USER_CANCEL:
      {
        // Cancellation by user
        rsp[0] = 0x64;
        rsp[1] = 0x05;
        *rspSize = 2;
        break;
      }

      case RESULT_MOBILE_ABORT:
      {
        // Abort from host device
        rsp[0] = 0x65;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;
      }

      case RESULT_NO_LINK:
      {
        // Set ExtServer into idle state
        setDevice2Idle();
        *rspSize = 0;
        break;
      }

      case RESULT_TIMEOUT:
      {
        // Timeout error
        rsp[0] = 0x66;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;
      }

      default:
      case RESULT_FAIL:
      {
        // Execution error
        rsp[0] = 0x64;
        rsp[1] = 0x00;

        // check, if raw_ui_error was set by UI
        if (raw_ui_error == 0)
        {
          /* Init value UI_ERR_OK (0) already mapped to RESULT_OK (9000), if uiInvoke() was used.
           * Thus, another error occured w/o UI being invoked. */
          *rspSize = 2;
          break;
        }

        /* add raw UI error code
         * Note: appendRespVal() always returns RESULT_FAIL (even if error code was successfully added).
         *       In case of failure, parameter size is set to 0 and we just return 6400 response. */
        int size = 0;
        (void)common::appendRespVal(raw_ui_error, rspBufSize - 2, &rsp[2], &size);
        *rspSize = 2 + size;
        break;
      }
    }
  }
}

static void handleCardRequestDisplay(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;

  int  result = RESULT_OK;
  struct BTLVRootNode xBtlv;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *node = NULL;
    unsigned char   cardTechnology = 0;
    unsigned char   mode = 0x00;
    unsigned char   amount[6] = {0};
    unsigned short  currency = 0;
    unsigned char   cancel_allowed = 0;
    unsigned char   trxType = EMV_ADK_TRAN_TYPE_GOODS_SERVICE;

    // Determine the Card Technology
    if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA108_SUPPORTED_CARD_TECHNOLOGY))) != NULL) &&
        (node -> uSize == 1))
    {
      cardTechnology = *node->pucData;
    }
    else
    {
      _LOGF_ERROR("handleCardRequestDisplay: Mandatory tag missing or wrong size");
      result = RESULT_FAIL;
    }

    if ((result == RESULT_OK) &&
        // Determine the cancel_allowed flag if exists
        (((node = pxBTLVFindTag(&xBtlv,
                                NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA,
                                           SDI_TAG_DFA109_ALLOW_CANCEL_WHILE_CARD_DETECT)
                               )) != NULL) &&
         node->uSize == 1))
    {
      cancel_allowed = *node->pucData;
    }

    if ((result == RESULT_OK) &&
        // Determine the mode (optional)
        (((node = pxBTLVFindTag(&xBtlv,
                                NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA,
                                           SDI_TAG_DFA10A_CARD_REQUEST_DISPLAY_MODE)
                               )) != NULL) &&
         (node -> uSize == 1)))
    {
      mode = *node->pucData;
    }

    if (result == RESULT_OK)
    {
      // Determine the amount (optional)
      if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "9F02"))) != NULL) &&
          (node -> uSize == 6))
      {
        memcpy(amount, node->pucData, node->uSize);

        // Determine the currency (optional)
        if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "5F2A"))) != NULL) &&
            (node -> uSize == 2))
        {
          currency = node->pucData[0] << 8;
          currency += node->pucData[1];
        }
        else
        {
          _LOGF_ERROR("handleCardRequestDisplay: Currency missing or wrong size");
          result = RESULT_PARAMETER_ERROR;
        }
      }
      else if (node != NULL)
      {
        _LOGF_ERROR("handleCardRequestDisplay: Amount size wrong");
        result = RESULT_FAIL;
      }
    }

    if ((result == RESULT_OK) &&
        // Determine the transaction type (optional)
        (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "9C"))) != NULL) &&
         (node -> uSize == 1)))
    {
      trxType = *node->pucData;
    }

    if (result == RESULT_OK)
    {
      if (currency != 0)
      {
        result = ui_handleCardRequestDisplay(cardTechnology, mode, amount, currency, cancel_allowed, trxType);
      }
      else
      {
        result = ui_handleCardRequestDisplay(cardTechnology, mode, NULL, 0, cancel_allowed, trxType);
      }
    }
  }
  else
  {
    _LOGF_ERROR("handleCardRequestDisplay: TLV import failed");
    result = RESULT_FAIL;
  }

  if (rsp != NULL && rspSize != NULL && rspBufSize >= 2)
  {
    switch (result)
    {
      case RESULT_OK:
        // Everything OK
        rsp[0] = 0x90;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      case RESULT_PARAMETER_ERROR:
        // Wrong parameter detected
        rsp[0] = 0x64;
        rsp[1] = 0xFE;
        *rspSize = 2;
        break;

      case RESULT_FAIL:
      default:
        // Execution error
        rsp[0] = 0x64;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;
    }
  }
}

static void displayIdleScreen(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;

  unsigned mode = Idle_Normal;

  if (Config::getInstance().adminMode())
  {
    // disable admin menu as long as not enabled below
    sysSetIdleScreenAdminMenu(false);

    struct BTLVRootNode xBtlv;

    if (msgSize > 4 && iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
    {
      struct BTLVNode *node;

      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA155_IDLE_ADMIN_MENU))) != NULL &&
          node->uSize == 1)
      {
        if (node->pucData[0] == 1)
        {
          mode = Idle_NoAdminMode;
        }
        else if (node->pucData[0] == 2)
        {
          mode = Idle_MenuEnabled;
          sysSetIdleScreenAdminMenu(true);
        }
      }
    }
  }

  // Display the Idle Screen
  sysDisplayIdleScreen(mode);

  rsp[0] = 0x90;
  rsp[1] = 0x00;
  *rspSize = 2;
}

static void handleSignatureCapture(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  int    result = RESULT_OK;
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;
  //char   *inputFormatString = NULL;
  map<string, string> value;

  (void) msgBufSize;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    sdi::Language textLanguage = SdiSysConfig::instance().getLanguageId(); // default: system language

    if ((result == RESULT_OK) &&
        // Determine the Text Language
        ((node = pxBTLVFindTag(&xBtlv,
                               NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA,
                                          SDI_TAG_DFA008_TEXT_LANGUAGE))) != NULL
        ) &&
        (node->uSize == 1))
    {
      // Check whether the Text Language is valid/supported
      textLanguage = sdi::languageSupported(node->pucData[0]);

      if (textLanguage == sdi::LANG_NO_LANG)
      {
        _LOGF_ERROR("%s: Text Language 0x%02X not supported", __FUNCTION__, node->pucData[0]);
        result = RESULT_FAIL;
      }
    }

    if (result == RESULT_OK)
    {
      int timeout = -1; // wait infinite

      // Check whether a valid timeout value is received
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA005_TIMEOUT_SEC))) != NULL)
      {
        if (node->uSize == 2)
        {
          timeout = decodeUS(node->pucData);

          if (timeout == 0)
          {
            timeout = -1;  // 0 means infinite
          }
        }
        else
        {
          _LOGF_ERROR("%s: Wrong timeout length", __FUNCTION__);
          result = RESULT_FAIL;
        }
      }

      if (result == RESULT_OK)
      {
        result = ui_handleSignatureCapture(textLanguage, timeout, value);
      }
    }
  }

  if (rsp != NULL && rspSize != NULL && rspBufSize >= 2)
  {
    switch (result)
    {
      case RESULT_OK:
      {
        stringmap::iterator iterator = value.find("signature");

        if (iterator != value.end())
        {
          FILE *p_file = NULL;

          // Open the signature file
          if ((p_file = fopen(iterator->second.c_str(), "rb")) != NULL)
          {
            // Determine the file size and allocate memory
            if (fseek(p_file, 0, SEEK_END) == 0)
            {
              long fileSize = ftell(p_file);
              rewind(p_file);

              if (fileSize > 0)
              {
                char *fileContent = (char *)malloc(fileSize);

                if (fileContent != NULL)
                {
                  // Read the file content into buffer
                  int bytesRead = fread(fileContent, 1, fileSize, p_file);

                  if (bytesRead == fileSize)
                  {
                    int size = 0;

                    vBTLVClear(&xBtlv);
                    node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

                    struct BTLVNode *text = pxBTLVAppendTag(node, SDI_TAG_FFA015_SIGNATURE_DATA, NULL, 0);

                    pxBTLVAppendTag(text, SDI_TAG_DFA01C_SIGNATURE_FORMAT, (unsigned char *)"png", 3);
                    pxBTLVAppendTag(text, SDI_TAG_DFA01D_SIGNATURE_VALUE, (unsigned char *)fileContent, fileSize);

                    if ((size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) > 0)
                    {
                      rsp[0] = 0x90;
                      rsp[1] = 0x00;
                      *rspSize = 2 + size;
                    }
                    else
                    {
                      _LOGF_ERROR("%s: iBTLVExport failed", __FUNCTION__);
                      rsp[0] = 0x64;
                      rsp[1] = 0x00;
                      *rspSize = 2;
                    }
                  }
                  else
                  {
                    _LOGF_ERROR("%s: Incomplete file content", __FUNCTION__);
                    rsp[0] = 0x64;
                    rsp[1] = 0x00;
                    *rspSize = 2;
                  }

                  // Free the allocated memory
                  free(fileContent);
                }
                else
                {
                  _LOGF_ERROR("%s: No memory allocated", __FUNCTION__);
                  rsp[0] = 0x64;
                  rsp[1] = 0x00;
                  *rspSize = 2;
                }
              }
              else
              {
                _LOGF_ERROR("%s: File size can not be determined", __FUNCTION__);
                rsp[0] = 0x64;
                rsp[1] = 0x00;
                *rspSize = 2;
              }
            }
            else
            {
              _LOGF_ERROR("%s: Setting file position indicator to the end failed", __FUNCTION__);
              rsp[0] = 0x64;
              rsp[1] = 0x00;
              *rspSize = 2;
            }

            // Close the signature file
            fclose(p_file);
          }
          else
          {
            _LOGF_ERROR("%s: File access error", __FUNCTION__);
            rsp[0] = 0x64;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
        }
        else
        {
          _LOGF_ERROR("%s: Wrong data", __FUNCTION__);
          rsp[0] = 0x64;
          rsp[1] = 0x00;
          *rspSize = 2;
        }

        break;
      }

      case RESULT_USER_CANCEL:
        // Cancellation by user
        rsp[0] = 0x64;
        rsp[1] = 0x05;
        *rspSize = 2;
        break;

      case RESULT_MOBILE_ABORT:
        // Abort from host device
        rsp[0] = 0x65;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      case RESULT_NO_LINK:
        // Set ExtServer into idle state
        setDevice2Idle();
        *rspSize = 0;
        break;

      case RESULT_TIMEOUT:
        // Timeout error
        rsp[0] = 0x66;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      case RESULT_FAIL:
      default:
        // Execution error
        rsp[0] = 0x64;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;
    }
  }
}

static void activateLEDs(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msgSize;
  (void) rspBufSize;

  switch (msg[3])
  {
    case 0x00: // enable
    {
      ui_enableLEDs(true);

      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    case 0x01: // disable
    {
      ui_enableLEDs(false);

      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    default:
    {
      // execution error
      rsp[0] = 0x64;
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }
  }
}

static void handleHtmlDialog(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;

  int result = RESULT_OK;
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL, *f0 = NULL;
  int raw_ui_error = 0;
  map<string, string> value;

  if (msgSize > 4 && iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    string htmlFileName;
    unsigned options = DLG_DisplayOnly; // dialog options (default is 0: just display dialog without buttons)
    sdi::Language textLanguage = SdiSysConfig::instance().getLanguageId(); // default: system language
    unsigned char timeout[2] = {0, 0}; // default timeout = 0

    if ((f0 = pxBTLVFindTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA)) != NULL)
    {
      // extract HTML filename
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA020_SOFTWARE_UPLOAD_FILENAME)) != NULL && node->uSize > 0)
      {
        htmlFileName.assign((const char *)node->pucData, node->uSize);
      }
      else
      {
        _LOGF_ERROR("handleHtmlDialog: HTML filename missing or wrong");
        result = RESULT_FAIL;
      }

      // extract timeout
      iBTLVExtractTag(f0, SDI_TAG_DFA005_TIMEOUT_SEC, timeout, 2);

      // extract texts
      node = NULL;

      while ((node = pxBTLVFindNextTag(f0, SDI_TAG_FFA011_DISPLAY_DATA, node)) != NULL)
      {
        struct BTLVNode *var = NULL;

        // check for variable name
        string varname = "text"; // default (if DFA012 is missing)

        if ((var = pxBTLVFindTag(node, SDI_TAG_DFA012_DISPLAY_DATA_NAME)) != NULL)
        {
          varname.assign((const char *)var->pucData, var->uSize);
        }

        map<string, string>::iterator it = value.find(varname);

        if (it != value.end())
        {
          _LOGF_ERROR("handleHtmlDialog: Variable name '%s' already exists and cannot be used at twice", varname.c_str());
          result = RESULT_FAIL;
          break;
        }

        // check for variable value
        if ((var = pxBTLVFindTag(node, SDI_TAG_DFA013_DISPLAY_DATA_VALUE)) != NULL)
        {
          // explicitely allow HTML, since dialog runs in secure CPApp mode, which disallows varhtml and print from JS
          value[varname] = string((const char *)var->pucData, var->uSize);
        }
        else
        {
          _LOGF_ERROR("handleHtmlDialog: TLV tag DFA013 (variable value) is missing");
          result = RESULT_FAIL;
          break;
        }
      }

      // dialog options
      if ((node = pxBTLVFindTag(f0, SDI_TAG_DFA13D_DIALOG_OPTIONS)) != NULL)
      {
        // take over option value
        for (unsigned i = 0; i < node->uSize; i++)
        {
          options = options << 8 | node->pucData[i];
        }

        // filter allowed options
        options &= DLG_AllowedOptsHtmlDialog;
      }

      // extract beep
      unsigned char beep = 0; // default: no beep
      iBTLVExtractTag(f0, SDI_TAG_DFA00D_TEXT_BEEP, &beep, 1);

      if (beep)
      {
        options |= DLG_Beep;
      }
    }
    else
    {
      _LOGF_ERROR("handleHtmlDialog: Unknown TLV Data imported (Tag F0 missing)");
      result = RESULT_FAIL;
    }

    if (result == RESULT_OK)
    {
      _LOGF_INFO("handleHtmlDialog: lang = %d", textLanguage);

      result = ui_htmlDialog(htmlFileName, value, (timeout[0] << 8) | (timeout[1]),
                             textLanguage, options, &raw_ui_error);
    }
  }
  else if (msgSize > 4) // Pure command (without data) means 'Display Clear', thus, only pending bytes lead to error
  {
    _LOGF_ERROR("handleHtmlDialog: TLV import failed");
    result = RESULT_FAIL;
  }
  else
  {
    ui_clear(); // clear display, keep RESULT_OK and return 9000
  }

  if (rsp != NULL && rspSize != NULL && rspBufSize >= 2)
  {
    switch (result)
    {
      case RESULT_OK:
      {
        int size;
        vBTLVClear(&xBtlv);
        f0 = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

        for (stringmap::iterator it = value.begin(); it != value.end(); ++it)
        {
          const string &name = it->first;
          const string &val = it->second;

          // filter dialog private variables with prefix '_'
          if (name.empty() || name[0] == '_')
          {
            continue;
          }

          node = pxBTLVAppendTag(f0, SDI_TAG_FFA014_INPUT_DATA, NULL, 0);
          pxBTLVAppendTag(node, SDI_TAG_DFA015_INPUT_DATA_NAME, (unsigned char *)name.c_str(), name.length());
          pxBTLVAppendTag(node, SDI_TAG_DFA016_INPUT_DATA_VALUE, (unsigned char *)val.c_str(), val.length());
        }

        if ((size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) > 0)
        {
          rsp[0] = 0x90;
          rsp[1] = 0x00;
          *rspSize = 2 + size;
        }
        else
        {
          _LOGF_ERROR("handleHtmlDialog: Response buffer too small");
          rsp[0] = 0x64;
          rsp[1] = 0x00;
          *rspSize = 2;
        }

        break;
      }

      case RESULT_USER_CANCEL:
        // Cancellation by user
        rsp[0] = 0x64;
        rsp[1] = 0x05;
        *rspSize = 2;
        break;

      case RESULT_MOBILE_ABORT:
        // Abort from host device
        rsp[0] = 0x65;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      case RESULT_NO_LINK:
        // Set ExtServer into idle state
        setDevice2Idle();
        *rspSize = 0;
        break;

      case RESULT_TIMEOUT:
        // Timeout error
        rsp[0] = 0x66;
        rsp[1] = 0x00;
        *rspSize = 2;
        break;

      default:
      case RESULT_FAIL:
      {
        // Execution error
        rsp[0] = 0x64;
        rsp[1] = 0x00;

        // check, if raw_ui_error was set by UI
        if (raw_ui_error == 0)
        {
          /* Init value UI_ERR_OK (0) already mapped to RESULT_OK (9000), if uiInvoke() was used.
           * Thus, another error occured w/o UI being invoked. */
          *rspSize = 2;
          break;
        }

        /* add raw UI error code
         * Note: appendRespVal() always returns RESULT_FAIL (even if error code was successfully added).
         *       In case of failure, parameter size is set to 0 and we just return 6400 response. */
        int size = 0;
        (void)common::appendRespVal(raw_ui_error, rspBufSize - 2, &rsp[2], &size);
        *rspSize = 2 + size;
        break;
      }
    }
  }
}

static void displayGetAsyncResult(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msg;
  (void) msgSize;

  if (!rsp || !rspSize || rspBufSize < 2)
  {
    _LOGF_ERROR("displayGetAsyncResult: Response buffer not provided or too small");
    return;
  }

  int raw_ui_error = 0;
  enum ui_async_result res = ui_getAsyncResult(true, &raw_ui_error); // reset result, if the dialog has finished
  unsigned char status = 0xff;

  switch (res)
  {
    // map status returned with 9000 and add it
    case UI_AR_KEY_ENTER:     
      if (status == 0xff)
      {
        status = 0;
      }

    /* fall through */
    case UI_AR_NONE:          
      if (status == 0xff)
      {
        status = 1;
      }

    /* fall through */
    case UI_AR_IN_PROGRESS:   
    {
      if (status == 0xff)
      {
        status = 2;
      }

      // append async dialog status
      struct ::BTLVRootNode xBtlv;
      struct ::BTLVNode *node = NULL;
      int size = 0;

      if (!(node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0))
          || !pxBTLVAppendTag(node, SDI_TAG_DFA144_ASYNC_DIALOG_STATUS, &status, 1)
          || (size = iBTLVExport(&xBtlv, rsp + 2, rspBufSize - 2)) < 0)
      {
        rsp[0] = 0x62;  // tag error
        rsp[1] = 0x00;
        *rspSize = 2;
        break;
      }

      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = 2 + size;
      break;
    }

    case UI_AR_KEY_CANCEL:   
    {
      rsp[0] = 0x64;  // dialog cancelled by user
      rsp[1] = 0x05;
      *rspSize = 2;
      break;
    }

    case UI_AR_TIMEOUT:   
    {
      rsp[0] = 0x66;  // execution timeout
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    default:
    case UI_AR_KEY_CLEAR: 
    case UI_AR_FAILED:    
    {
      // Execution error
      rsp[0] = 0x64;
      rsp[1] = 0x00;
      /* add raw UI error code
       * Note: appendRespVal() always returns RESULT_FAIL (even if error code was successfully added).
       *       In case of failure, parameter size is set to 0 and we just return 6400 response. */
      int size = 0;
      (void)common::appendRespVal(raw_ui_error, rspBufSize - 2, &rsp[2], &size);
      *rspSize = 2 + size;
      break;
    }
  }
}


#endif // ! HEADLESS
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

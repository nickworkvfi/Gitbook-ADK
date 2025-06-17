---
title: sdi/src/ui.cpp

---

# sdi/src/ui.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[statusCB](ui_8cpp.md#function-statuscb)**(unsigned char num, csd_string dispText ="") |
| void | **[pinstateCallback](ui_8cpp.md#function-pinstatecallback)**(void * data, const string & from, const string & to, const string & notification_id, const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & param, unsigned flags) |
| int | **[ui_getInputMinLength](ui_8cpp.md#function-ui-getinputminlength)**(string text) |
| int | **[ui_handleCardRequestDisplay](ui_8cpp.md#function-ui-handlecardrequestdisplay)**(unsigned char CardTec, unsigned char displayMode, unsigned char * amount, unsigned short currency, unsigned char cancel_allowed, unsigned char transType) |
| int | **[ui_handleSecureInput](ui_8cpp.md#function-ui-handlesecureinput)**(unsigned char templateId, Language textLanguage, unsigned char beep, unsigned short timeout, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, char maskingCharacter, char * inputFormatString, unsigned char * amount, unsigned short currency) |
| int | **[ui_handleSignatureCapture](ui_8cpp.md#function-ui-handlesignaturecapture)**(Language textLanguage, unsigned short timeout, [stringmap](namespacevfihtml.md#typedef-stringmap) & value) |
| int | **[ui_externalDialog](ui_8cpp.md#function-ui-externaldialog)**(unsigned char templateId, [vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) & value, unsigned char confirmation, unsigned options, unsigned short timeout, int * raw_ui_error) |
| int | **[ui_htmlDialog](ui_8cpp.md#function-ui-htmldialog)**(const std::string & htmlFileName, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, unsigned short timeout, Language lang, int opts, int * raw_ui_error) |
| int | **[ui_handleMenu](ui_8cpp.md#function-ui-handlemenu)**([vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) & value, unsigned options =[MENU_NoOpts](ui_8h.md#enumvalue-menu-noopts), int timeout =30, int * raw_ui_error =0) |
| int | **[validateData_ControlCB](ui_8cpp.md#function-validatedata-controlcb)**(const char * sdi_tag, const csd_string & pan, csd_string & expDate, bool & skipCvv, char * formatString =NULL, unsigned short formatStringSize =0, unsigned char * continuationMode =NULL) |
| int | **[ui_handleManualCardDataEntry](ui_8cpp.md#function-ui-handlemanualcarddataentry)**(Language textLanguage, unsigned short timeout, csd_stringmap & value, unsigned char cardEntryValueDeactivation, unsigned char cardEntryMode, char * inputFormatString, char * touchCoordinates, unsigned char nbrTouchButtons, unsigned char forceMinPanLenTo7, unsigned char skipCb9FFE) |
| int | **[ui_EnterPin](ui_8cpp.md#function-ui-enterpin)**(Language pinTextLanguage, unsigned short timeout, unsigned char * pinBypass, unsigned opts, unsigned char minPINLength, unsigned char maxPINLength, unsigned interchar_tout, [vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) * value, int password_char, char * touchCoordinates, unsigned char nbrTouchButtons) |
| int | **[ui_dialog](ui_8cpp.md#function-ui-dialog)**(const string & msg, unsigned options, int timeout, [stringmap](namespacevfihtml.md#typedef-stringmap) * value, bool * abort) |
| int | **[ui_idlescreen](ui_8cpp.md#function-ui-idlescreen)**(const string & msg, int options, int timeout, void * data) |
| void | **[ui_displayTextKey](ui_8cpp.md#function-ui-displaytextkey)**(const string & textKey, Language language) |
| int | **[ui_confirmTextKey](ui_8cpp.md#function-ui-confirmtextkey)**(const string & textKey, Language language, [stringmap](namespacevfihtml.md#typedef-stringmap) * value, unsigned short timeout) |
| void | **[ui_init](ui_8cpp.md#function-ui-init)**(uiAsyncCallback idlescreen_cb) |
| bool | **[ui_enabled](ui_8cpp.md#function-ui-enabled)**(void ) |
| void | **[ui_clear](ui_8cpp.md#function-ui-clear)**(void ) |
| enum [ui_async_result](ui_8h.md#enum-ui-async-result) | **[ui_getAsyncResult](ui_8cpp.md#function-ui-getasyncresult)**(bool reset, int * raw_ui_error) |
| void | **[ui_enableLEDs](ui_8cpp.md#function-ui-enableleds)**(bool enable) |
| void | **[ui_dispLEDs](ui_8cpp.md#function-ui-displeds)**(unsigned char leds) |


## Functions Documentation

### function statusCB

```cpp
static void statusCB(
    unsigned char num,
    csd_string dispText =""
)
```


include ADKGUI related implementation required by SDI with standard mode support only. 


### function pinstateCallback

```cpp
void pinstateCallback(
    void * data,
    const string & from,
    const string & to,
    const string & notification_id,
    const vfiipc::JSObject & param,
    unsigned flags
)
```


### function ui_getInputMinLength

```cpp
int ui_getInputMinLength(
    string text
)
```


### function ui_handleCardRequestDisplay

```cpp
int ui_handleCardRequestDisplay(
    unsigned char CardTec,
    unsigned char displayMode,
    unsigned char * amount,
    unsigned short currency,
    unsigned char cancel_allowed,
    unsigned char transType
)
```


**Parameters**: 

  * **CardTec** Supported card technology 
  * **displayMode** Display mode: 0 = default, 1 = Fallback, 2 = retry 
  * **amount** Pointer to amount (BCD buffer of 6 bytes) or NULL if no amount used 
  * **currency** Currency code or 0 if no currency used 
  * **cancel_allowed** Cancel button allowed or not 
  * **transType** Transaction Type according to EMV-ADK 


**Return**: RESULT_OK or RESULT_FAIL 

Handles the displays for card requests 


### function ui_handleSecureInput

```cpp
int ui_handleSecureInput(
    unsigned char templateId,
    Language textLanguage,
    unsigned char beep,
    unsigned short timeout,
    stringmap & value,
    char maskingCharacter,
    char * inputFormatString,
    unsigned char * amount,
    unsigned short currency
)
```


### function ui_handleSignatureCapture

```cpp
int ui_handleSignatureCapture(
    Language textLanguage,
    unsigned short timeout,
    stringmap & value
)
```


### function ui_externalDialog

```cpp
int ui_externalDialog(
    unsigned char templateId,
    vfigui::stringmap & value,
    unsigned char confirmation,
    unsigned options,
    unsigned short timeout,
    int * raw_ui_error
)
```


**Parameters**: 

  * **templateId** Template Identifier as passed in TLV tag DFA010 (default: 1 for dialog.html). 
  * **value** Stringmap including the text to display 
  * **confirmation** Confirmation requested (0 = no, 1 = yes) => this parameter is ignored, if `options` hasn't set bit DLG_ExtDialogCompat 
  * **options** dialog options as supported for [ui_dialog()](ui_8h.md#function-ui-dialog), see enum Ui_DialogOpts 
  * **timeout** Timeout in seconds 
  * **raw_ui_error** if a pointer is passed the related variable is set with the raw error code of ADKGUI 


**Return**: RESULT_OK or RESULT_FAIL 

Displays an external dialog for command Handle Display (24-03) with a specified template _templateId_. For templateId==1, SDI server used default dialog dialog.html, otherwise the following file is looked up: template_e_<templateId>.html. The templateId in the filename is filled up to 3 digits, e.g. templateId==2 will look up template_e_002.html. 


### function ui_htmlDialog

```cpp
int ui_htmlDialog(
    const std::string & htmlFileName,
    stringmap & value,
    unsigned short timeout,
    Language lang,
    int opts,
    int * raw_ui_error
)
```


### function ui_handleMenu

```cpp
int ui_handleMenu(
    vfigui::stringmap & value,
    unsigned options =MENU_NoOpts,
    int timeout =30,
    int * raw_ui_error =0
)
```


**Parameters**: 

  * **value** Stringmap including the selected menu entry 
  * **options** menu dialog options, see enum Ui_MenuOpts 
  * **timeout** menu dialog timeout in seconds, a value <=0 means infinite timeout 
  * **raw_ui_error** if a pointer is passed the related variable is set with the raw error code of ADKGUI 


**Return**: For a selected menu item, the "value" for the selected menu item is returned. This is usually value >=0. Negative values indicate the following errors: RESULT_USER_CANCEL: Cancel softkey/hardkey pressed to abort the menu dialog without selection of an menu item. RESULT_TIMEOUT: Menu dialog timed out RESULT_MOBILE_ABORT: Abort received from mobile device (see option MENU_IgnoreExtAbort) RESULT_NO_LINK: Link to mobile device disturbed (see option MENU_IgnoreExtAbort) RESULT_FAIL: Card was removed (see option MENU_AbortOnCardRemove) RESULT_FAIL: For other errors 

display a menu dialog. Menu entries are passed in value map `value`, which supports the following values: "headline": a text line used as menu headline "menu": a JSON formatted string. The JSON data consist of an array, each entry represents a menu item having additional options and values as follows: [ { "icon_id": "checked", "selected": true, "submenu": true, "text": "LAN", "value": 0 },{ "icon_id": "unchecked", "selected": false, "submenu": false, "text": "USB", "value": 1 } ] Meaning of JSON values for each menu item entry: "icon_id": an icon ID referring to an CSS class to display a icon next to the item text "checked" is recently used to display a checked radio button icon "unchecked" is recently used to display an un-checked radio buttion Omitting "icon_id" or an empty value means displaying no icon. "selected": sets the menu item as pre-selected. The pre-selection may be a background color, which differs from un-selected menu icons. Confirming the pre-selected item with enter hardkey/softkey lets [ui_handleMenu()](ui_8h.md#function-ui-handlemenu) return the value assigned to "value". Omitting "selected" or setting to false means the item is not pre-selected. "submenu": the menu item is displayed as submenu item. On selection the item shall display submenu and on return of this menu the previous menu shall be displayed. Recently an arrow icon is displayed next to the item text. Omitting "submenu" or setting to false means the item is displayed as normal item entry. "text": text line used as menu item text "value": value, which is returned [ui_handleMenu()](ui_8h.md#function-ui-handlemenu), if the menu item is selected. Please note to use positive values (>=0) to distingish menu times from error codes returned for failures or aborts. 


### function validateData_ControlCB

```cpp
int validateData_ControlCB(
    const char * sdi_tag,
    const csd_string & pan,
    csd_string & expDate,
    bool & skipCvv,
    char * formatString =NULL,
    unsigned short formatStringSize =0,
    unsigned char * continuationMode =NULL
)
```


### function ui_handleManualCardDataEntry

```cpp
int ui_handleManualCardDataEntry(
    Language textLanguage,
    unsigned short timeout,
    csd_stringmap & value,
    unsigned char cardEntryValueDeactivation,
    unsigned char cardEntryMode,
    char * inputFormatString,
    char * touchCoordinates,
    unsigned char nbrTouchButtons,
    unsigned char forceMinPanLenTo7,
    unsigned char skipCb9FFE
)
```


### function ui_EnterPin

```cpp
int ui_EnterPin(
    Language pinTextLanguage,
    unsigned short timeout,
    unsigned char * pinBypass,
    unsigned opts,
    unsigned char minPINLength,
    unsigned char maxPINLength,
    unsigned interchar_tout,
    vfigui::stringmap * value,
    int password_char,
    char * touchCoordinates,
    unsigned char nbrTouchButtons
)
```


### function ui_dialog

```cpp
int ui_dialog(
    const string & msg,
    unsigned options,
    int timeout,
    stringmap * value,
    bool * abort
)
```


### function ui_idlescreen

```cpp
int ui_idlescreen(
    const string & msg,
    int options,
    int timeout,
    void * data
)
```


### function ui_displayTextKey

```cpp
void ui_displayTextKey(
    const string & textKey,
    Language language
)
```


### function ui_confirmTextKey

```cpp
int ui_confirmTextKey(
    const string & textKey,
    Language language,
    stringmap * value,
    unsigned short timeout
)
```


### function ui_init

```cpp
void ui_init(
    uiAsyncCallback idlescreen_cb
)
```


### function ui_enabled

```cpp
bool ui_enabled(
    void 
)
```


**Return**: true, if UI interface of SDI server was enabled 

Returns true, if UI interface of SDI server was enabled with call of [ui_init()](ui_8h.md#function-ui-init). 


### function ui_clear

```cpp
void ui_clear(
    void 
)
```


Removes the last rendered UI dialog and clears the display. 


### function ui_getAsyncResult

```cpp
enum ui_async_result ui_getAsyncResult(
    bool reset,
    int * raw_ui_error
)
```


### function ui_enableLEDs

```cpp
void ui_enableLEDs(
    bool enable
)
```


### function ui_dispLEDs

```cpp
void ui_dispLEDs(
    unsigned char leds
)
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
#include <string.h>
#include <stdlib.h>
#include <time.h>
#include "unistd.h"
#include "ui.h"
#include "_logf.h"
#include "util.h"
#if !defined(__ANDROID__) && !defined(_STM32) //TODO  sysbeep for STM32
  #include "sysinfo/sysbeep.h"
#else
  #define sysBeepNormal(x) 0
#endif
#include "sysinfo/sysinfo.h"
#include "touch.h"
#include "keypad.h"
#include "btlv_helper.h"
#include "config/sdi_sysconfig.h"
#include "sdi_tags.h"
#include "data.h"
#include "cardranges.h"
#include "filterconfig.h"
#include "sys.h"
#include "common/callback.h"
#include "csd.h"
#include "hexutil.h"
#include "pathutil.h"
#include "madk_pp_protocol.h"
#include "vcl_client.h"
#include "filesystem.h"
#include "emv/EMV_Common_Interface.h"
#include "pthreadutil.h" // MutexLock
#include "timestamp.h"
#include "sdi_lang.h"
#include "sdi_text.h"
#include "loadplugin.h"

#include <svcsec.h>
#ifndef HEADLESS
  #include <ipc/notify.h>
#endif
#include <sys/time.h>
#include <sys/stat.h>

#ifdef _VOS2
  #include <dlfcn.h>
  #include <libkeypad_client.h>
#endif

using namespace std;
using namespace sdi;
using namespace vfigui; // for HEADLESS use dummy definitions of ui.h
using namespace vfisysinfo;
using namespace csd;
using namespace config;

#ifndef HEADLESS
  #include "ui_priv.cpp"
#endif

#ifdef _VOS2
static keypad_mode_t (*_get_keypad_mode)(void) = 0;
static keypad_mode_t (*_set_keypad_mode)(keypad_mode_t mode) = 0;
#define LIBKEYPADCLIENT "/usr/local/lib/libkeypad_client.so.1"

static void initLibkeypad_client(void)
{
  static bool initialized = false; // Not initialized

  if (!initialized) // libkeypad_client not yet initialzed
  {
    void *libraryHandle;

    dlerror();
    libraryHandle = dlopen(LIBKEYPADCLIENT, RTLD_LAZY);

    if (libraryHandle)
    {
      _get_keypad_mode = (keypad_mode_t(*)(void))dlsym(libraryHandle, "get_keypad_mode");
      _set_keypad_mode = (keypad_mode_t(*)(keypad_mode_t))dlsym(libraryHandle, "set_keypad_mode");

      if (!_get_keypad_mode || !_set_keypad_mode)
      {
        const char* error = dlerror();

        _LOGF_WARN("%s: dlsym: %s\n", __FUNCTION__, error ? error : "unknown error");
        _get_keypad_mode = 0;
        _set_keypad_mode = 0;
        dlclose(libraryHandle);
      }
    }
    else
    {
      _LOGF_ERROR("%s: dlopen to libkeypad_client failed", __FUNCTION__);
    }
  }

  initialized = true;
  return;
}
#endif

static void statusCB(unsigned char num, csd_string dispText = "")
{
  // Number of entered digits changed, send Status callback
  unsigned char statusCbData[64] = {0};
  int size = 0;

  // Add SW1-SW2 for notification callback
  statusCbData[0] = 0x9F; // Status callback
  statusCbData[1] = num; // Number of enetered digits
  size = 2;

  // Add Tag for string
  if (dispText.size() > 0)
  {
    struct BTLVRootNode xBtlv;

    pxBTLVAppendTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA009_HEADLESS_ENTRY_STRING), (const unsigned char *)dispText.c_str(), (unsigned)dispText.size());

    if ((size = iBTLVExport(&xBtlv, &statusCbData[2], sizeof(statusCbData) - 2)) > 0)
    {
      size += 2;
    }
    else
    {
      _LOGF_ERROR("%s: iBTLVExport() error for Display string", __FUNCTION__);
    }
  }

  _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = %d", __FUNCTION__, size);
  _LOGAPI_HEXDUMP_RAW_INFO((char *)statusCbData, size);

  // Send Callback Request
  mADK_PP_Prot::getInstance()->command(statusCbData, size);
}

void pinstateCallback(void *data, const string &from, const string &to, const string &notification_id, const vfiipc::JSObject &param, unsigned flags)
{
  (void) data;
  (void) from;
  (void) to;
  (void) notification_id;
  (void) flags;
  char statusCbData[2] = {0};
  char navigatorCbData[2] = {0};

  string state = param("state").getString();
  string key   = param("key").getString();
  int digits   = param("digitcnt").getInt();

  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

  // Add SW1 for status callback
  statusCbData[0] = 0x9F;

  // Add SW1 for Navigator callback
  navigatorCbData[0] = 0x9D;

  _LOGF_INFO("%s: state = %s, key = %s, digits = %d", __FUNCTION__, state.c_str(), key.c_str(), digits);

  if (strcmp(state.c_str(), "selected") == 0)
  {
    if (strcmp(key.c_str(), "digit") == 0)
    {
      // Numeric key was selected
      navigatorCbData[1] = 0x00;
    }
    else if (strcmp(key.c_str(), "enter") == 0)
    {
      // Enter key was selected
      navigatorCbData[1] = 0x01;
    }
    else if (strcmp(key.c_str(), "cancel") == 0)
    {
      // Cancel key was selected
      navigatorCbData[1] = 0x02;
    }
    else if (strcmp(key.c_str(), "clear") == 0)
    {
      // Clear key was selected
      navigatorCbData[1] = 0x03;
    }

    _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
    _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

    // Send Callback Request
    proto->command((const unsigned char *)navigatorCbData, 2);
  }
  else if (strcmp(state.c_str(), "confirmed") == 0)
  {
    if (strcmp(key.c_str(), "digit") == 0)
    {
      // A digit was confirmed
      statusCbData[1] = (unsigned char)digits;
    }

    // A key was confirmed
    navigatorCbData[1] = 0x10;

    _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
    _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

    // Send Callback Request
    proto->command((const unsigned char *)navigatorCbData, 2);
  }
  else if (strcmp(state.c_str(), "multitouch") == 0)
  {
    // Multiple (i.e. too many) touches detected during PIN entry
    navigatorCbData[1] = 0x04;

    _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
    _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

    // Send Callback Request
    proto->command((const unsigned char *)navigatorCbData, 2);
  }
  else if (strcmp(state.c_str(), "underflow") == 0)
  {
    // Pin digit underflow
    navigatorCbData[1] = 0x05;

    _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
    _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

    // Send Callback Request
    proto->command((const unsigned char *)navigatorCbData, 2);
  }
  else if (strcmp(state.c_str(), "overflow") == 0)
  {
    // Pin digit underflow
    navigatorCbData[1] = 0x06;

    _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
    _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

    // Send Callback Request
    proto->command((const unsigned char *)navigatorCbData, 2);
  }

  if (statusCbData[1] != 0x00)
  {
    _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
    _LOGAPI_HEXDUMP_RAW_INFO(statusCbData, 2);

    // Send Callback Request
    proto->command((const unsigned char *)navigatorCbData, 2);
  }

  return;
}

int ui_getInputMinLength(string text)
{
  if (!ui_enabled())
  {
    //not possible. TODO Prior check should ensure we won't come here.
    return 0;
  }

  size_t startPos, endPos;
  string maxLength;
  int i, minLength = 0;
  string findText = "<!--[N";

  // Determine the maximum input length
  startPos = text.find("maxlength=\"") + 11;
  endPos = text.find("\"", startPos);
  maxLength = text.substr(startPos, endPos - startPos);

  for (i = 0; i < atoi(maxLength.c_str()); i++)
  {
    if (text.find(findText) != string::npos)
    {
      minLength++;
      findText.append("N");
    }
    else
    {
      break;
    }
  }

  if (minLength == 0)
  {
    minLength = atoi(maxLength.c_str());
  }

  return minLength;
}

int ui_handleCardRequestDisplay(unsigned char CardTec,
                                unsigned char displayMode,
                                unsigned char *amount,
                                unsigned short currency,
                                unsigned char cancel_allowed,
                                unsigned char transType)
{
#ifdef HEADLESS
  (void) CardTec;
  (void) displayMode;
  (void) amount;
  (void) currency;
  (void) cancel_allowed;
  (void) transType;
  return RESULT_FAIL;
#else

  if (!ui_enabled())
  {
    return RESULT_FAIL;
  }

  string textKey = TXT_NO_TXT;
  string trxTypeTextKey = TXT_NO_TXT;

  if ((CardTec & 0x07) == 0x00)
  {
    _LOGF_ERROR("%s: Card tec not supported (%02X)", __FUNCTION__, CardTec);
    return RESULT_FAIL;
  }

  if ((amount != NULL) &&
      (bcdValid(amount, 6) == 1) &&
      (memcmp(amount, "\x00\x00\x00\x00\x00\x00", 6) != 0) &&
      (currency != 0))
  {
    // Amount and currency available for showing on display
    switch (CardTec & 0x07)
    {
      case 0x01: // Chip only
        if (displayMode == 1)
        {
          textKey = TXT_AMOUNT_INSERT_CARD_FALLBACK;
        }
        else if (displayMode == 2)
        {
          textKey = TXT_AMOUNT_INSERT_CARD_RETRY;
        }
        else
        {
          textKey = TXT_AMOUNT_INSERT_CARD;
        }

        break;

      case 0x02: // MSR only
        if (displayMode == 1)
        {
          textKey = TXT_AMOUNT_SWIPE_CARD_FALLBACK;
        }
        else
        {
          textKey = TXT_AMOUNT_SWIPE_CARD;
        }

        break;

      case 0x03: // Chip or MSR
        textKey = TXT_AMOUNT_INSERT_SWIPE_CARD;
        break;

      case 0x04: // CTLS only
        textKey = TXT_AMOUNT_TAP_CARD;
        break;

      case 0x05: // Chip or CTLS
        textKey = TXT_AMOUNT_INSERT_TAP_CARD;
        break;

      case 0x06: // MSR or CTLS
        textKey = TXT_AMOUNT_SWIPE_TAP_CARD;
        break;

      case 0x07: // Chip, MSR or CTLS
        textKey = TXT_AMOUNT_INSERT_SWIPE_TAP_CARD;
        break;
    }
  }
  else
  {
    // Use texts without amount and currency
    amount = 0;
    currency = 0;

    switch (CardTec & 0x07)
    {
      case 0x01: // Chip only
        if (displayMode == 1)
        {
          textKey = TXT_INSERT_CARD_FALLBACK;
        }
        else if (displayMode == 2)
        {
          textKey = TXT_INSERT_CARD_RETRY;
        }
        else
        {
          textKey = TXT_INSERT_CARD;
        }

        break;

      case 0x02: // MSR only
        if (displayMode == 1)
        {
          textKey = TXT_SWIPE_CARD_FALLBACK;
        }
        else
        {
          textKey = TXT_SWIPE_CARD;
        }

        break;

      case 0x03: // Chip or MSR
        textKey = TXT_INSERT_SWIPE_CARD;
        break;

      case 0x04: // CTLS only
        textKey = TXT_TAP_CARD;
        break;

      case 0x05: // Chip or CTLS
        textKey = TXT_INSERT_TAP_CARD;
        break;

      case 0x06: // MSR or CTLS
        textKey = TXT_SWIPE_TAP_CARD;
        break;

      case 0x07: // Chip, MSR or CTLS
        textKey = TXT_INSERT_SWIPE_TAP_CARD;
        break;
    }
  }

  // Transaction Type Text
  if (transType == EMV_ADK_TRAN_TYPE_CASH)
  {
    trxTypeTextKey = TXT_TRX_TYPE_CASH_ADVANCE;
  }
  else if (transType == EMV_ADK_TRAN_TYPE_CASHBACK)
  {
    trxTypeTextKey = TXT_TRX_TYPE_CASHBACK;
  }
  else if (transType == EMV_ADK_TRAN_TYPE_REFUND)
  {
    trxTypeTextKey = TXT_TRX_TYPE_REFUND;
  }
  else
  {
    trxTypeTextKey = TXT_TRX_TYPE_PURCHASE; // "AMOUNT"
  }

  return gui_displayTextKey(textKey, SdiSysConfig::instance().getLanguageId(), trxTypeTextKey,
                            amount, currency, cancel_allowed, ((CardTec & 0x08) ? 1 : 0));
#endif
}

int ui_handleSecureInput(unsigned char templateId, Language textLanguage, unsigned char beep, unsigned short timeout, stringmap &value, char maskingCharacter, char *inputFormatString,
                         unsigned char *amount, unsigned short currency)
{
#ifdef HEADLESS
  (void) templateId;
  (void) textLanguage;
  (void) beep;
  (void) timeout;
  (void) value;
  (void) maskingCharacter;
  (void) inputFormatString;
  (void) amount;
  (void) currency;
  return RESULT_FAIL;
#else

  if (!ui_enabled())
  {
    return RESULT_FAIL;
  }

  string textKey = TXT_NO_TXT;

  // Map to internal secure text Id
  switch (templateId)
  {
    case 0x01:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_01_POSTAL_CODE", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_01_POSTAL_CODE;
      value["name"] = "ZIP";

      break;
    }

    case 0x02:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_02_CVV", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_02_CVV;
      value["name"] = "CVV";

      break;
    }

    case 0x03:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_03_DATE_OF_BIRTH", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_03_DATE_OF_BIRTH;
      value["name"] = "BIRTHDAY";

      break;
    }

    case 0x04:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_04_SSN", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_04_SSN;
      value["name"] = "SSN";

      break;
    }

    case 0x05:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_05_LAST_4_OF_SSN", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_05_LAST_4_OF_SSN;
      value["name"] = "LAST4SSN";

      break;
    }

    case 0x06:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_06_VERIFY_POSTAL_CODE", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_06_VERIFY_POSTAL_CODE;
      value["name"] = "ZIP";

      break;
    }

    case 0x07:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_07_VERIFY_CVV", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_07_VERIFY_CVV;
      value["name"] = "CVV";

      break;
    }

    case 0x08:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_08_VERIFY_DATE_OF_BIRTH", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_08_VERIFY_DATE_OF_BIRTH;
      value["name"] = "BIRTHDAY";

      break;
    }

    case 0x09:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_09_VERIFY_SSN", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_09_VERIFY_SSN;
      value["name"] = "SSN";

      break;
    }

    case 0x0A:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_0A_VERIFY_LAST_4_OF_SSN", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_0A_VERIFY_LAST_4_OF_SSN;
      value["name"] = "LAST4SSN";

      break;
    }

    case 0x0B:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_0B_GRATUITY_AMOUNT", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_0B_GRATUITY_AMOUNT;
      value["name"] = "AMOUNT";

      break;
    }

    case 0x0C:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_0C_GRATUITY_PERCENTAGE", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_0C_GRATUITY_PERCENTAGE;
      value["name"] = "PERCENT";

      break;
    }

    case 0x0D:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_0D_CASHBACK_AMOUNT", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_0D_CASHBACK_AMOUNT;
      value["name"] = "AMOUNT";

      break;
    }

    case 0x0E:
    {
      // for tip input a valid amount and currency must be provided
      if ((amount != NULL) &&
          (bcdValid(amount, 6) == 1) &&
          (memcmp(amount, "\x00\x00\x00\x00\x00\x00", 6) != 0) &&
          (currency != 0))
      {
        _LOGF_INFO("%s: TXT_SECURE_DISP_AMOUNT_AND_INPUT_0E_TIP", __FUNCTION__);
        textKey = TXT_SECURE_DISP_AMOUNT_AND_INPUT_0E_TIP;
        value["name"] = "AMOUNT";
        break;
      }
      else
      {
        _LOGF_ERROR("%s: Amount or currency missing", __FUNCTION__);
        return RESULT_PARAMETER_ERROR;
      }
    }

    case 0x0F:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_0F_EMAIL_ADDR", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_0F_EMAIL_ADDR;
      value["name"] = "EMAIL";

      break;
    }

    case 0x10:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_10_PHONE_NBR", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_10_PHONE_NBR;
      value["name"] = "PHONE";

      break;
    }

    case 0x11:
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_11_NBR_INSTALLMENTS", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_11_NBR_INSTALLMENTS;
      value["name"] = "INSTALLMENTS";

      break;
    }

    default:
    {
      _LOGF_ERROR("%s: Text Id not supported", __FUNCTION__);

      break;
    }
  }

  if (beep == 0x01)
  {
    sysBeepNormal(50);
  }

  return gui_secureInput(textKey, textLanguage, value, timeout, maskingCharacter, inputFormatString, 0, amount, currency);
#endif
}


int ui_handleSignatureCapture(Language textLanguage, unsigned short timeout, stringmap &value)
{
#ifdef HEADLESS
  (void) textLanguage;
  (void) timeout;
  (void) value;
  return RESULT_FAIL;
#else

  if (!ui_enabled())
  {
    return RESULT_FAIL;
  }

  return gui_signatureCapture(textLanguage, value, timeout);
#endif
}

int ui_externalDialog(unsigned char templateId, stringmap &value, unsigned char confirmation,
                      unsigned options, unsigned short timeout, int *raw_ui_error)
{
#ifdef HEADLESS
  (void) templateId;
  (void) value;
  (void) confirmation;
  (void) options;
  (void) timeout;

  if (raw_ui_error)
  {
    *raw_ui_error = -10;  // UI_ERR_FAIL
  }

  return RESULT_FAIL;
#else

  if (!ui_enabled())
  {
    if (raw_ui_error)
    {
      *raw_ui_error = UI_ERR_OK;
    }

    return RESULT_OK;
  }

  // Check if beep should occur
  if (options & DLG_Beep)
  {
    sysBeepNormal(50);
  }

  // Display the text using GUI
  return gui_dispExternalDialog(templateId, value, confirmation, options, timeout, raw_ui_error);
#endif
}


int ui_htmlDialog(const std::string &htmlFileName, stringmap &value,
                  unsigned short timeout, Language lang, int opts, int *raw_ui_error)
{
#ifdef HEADLESS
  (void) htmlFileName;
  (void) value;
  (void) timeout;
  (void) lang;
  (void) opts;
  (void) raw_ui_error;
  return RESULT_FAIL;
#else

  if (!ui_enabled())
  {
    return RESULT_OK;
  }

  // Check if beep should occur
  if (opts & DLG_Beep)
  {
    sysBeepNormal(50);
  }

  // Display the text using GUI
  return gui_dispHtmlDialog(htmlFileName, value, timeout == 0 ? -1 : (int)timeout, lang, opts, raw_ui_error);
#endif
}


int ui_handleMenu(stringmap &value, unsigned options, int timeout, int *raw_ui_error)
{
#ifdef HEADLESS
  (void) value;
  (void) options;
  (void) timeout;

  if (raw_ui_error)
  {
    *raw_ui_error = -10;  // UI_ERR_FAIL
  }

  return RESULT_FAIL;
#else

  if (!ui_enabled())
  {
    if (raw_ui_error)
    {
      *raw_ui_error = UI_ERR_OK;
    }

    return RESULT_OK;
  }

  // Check if beep should occur
  if (options & MENU_Beep)
  {
    sysBeepNormal(50);
  }

  return gui_dispMenu(value, options, timeout, raw_ui_error);
#endif
}

int validateData_ControlCB(const char *sdi_tag, const csd_string &pan, csd_string &expDate, bool &skipCvv,  char *formatString = NULL, unsigned short formatStringSize = 0, unsigned char *continuationMode = NULL)
{
  int res = RESULT_FAIL;

  // #################
  // # Validate Data #
  // #################

  // get an instance of the card ranges singleton object
  CardRanges &cr = CardRanges::getInstance();
  CardRanges::Error err = cr.getStatus();

  switch (err)
  {
    case CardRanges::ERR_NONE:
      _LOGF_INFO("%s: card ranges file successfully loaded", __FUNCTION__);
      break;

    case CardRanges::ERR_FILE:
      _LOGF_INFO("%s: card ranges file not found", __FUNCTION__);
      break;

    default:
      _LOGF_ERROR("%s: error (%d) in card ranges file", __FUNCTION__, err);
      break;
  }

  if (err != CardRanges::ERR_NONE)
  {
    return res;
  }

  // Determine the current date
  string dt;

  if (sysGetPropertyString(SYS_PROP_TIME_ISO8601, dt) != SYS_ERR_OK || dt.length() < 19) // Read system date and time
  {
    _LOGF_INFO("%s: error while determining the current date", __FUNCTION__);
    return res;
  }

  _LOGF_INFO("%s: current date = %s", __FUNCTION__, dt.c_str());
  //                      0123456789012345678          012345
  // Convert from string "YYYY-MM-ddTHH:mm:ss" to BCD "DDMMYY"
  dt[10] = dt[5]; // M
  dt[11] = dt[6]; // M
  dt[12] = dt[2]; // Y
  dt[13] = dt[3]; // Y
  csd_data currentdate;
  currentdate.resize(3);
  sdi::hextobin(&currentdate[0], (const unsigned char *)dt.substr(8, 6).c_str(), 6);

  // Perform the validation check
  csd_data expirydate;
  expirydate.resize(2);
  sdi::hextobin(&expirydate[0], (const unsigned char *)&expDate.c_str()[2], 2);
  sdi::hextobin(&expirydate[1], (const unsigned char *)&expDate.c_str()[0], 2);

  CardRanges::MatchingRecord best_match;
  std::vector<CardRanges::MatchingRecord> matching_records;
  cr.findBestMatch(pan, "", expirydate, currentdate, &matching_records);

  if (matching_records.size() > 0 && matching_records.back().json.size() > 0)
  {
    best_match = matching_records.back();
  }

  _LOGF_INFO("%s: match = %s", __FUNCTION__, best_match.json.c_str());
  _LOGF_INFO("%s: expirycheck_result = %02X", __FUNCTION__, best_match.expirycheck_result);
  _LOGF_INFO("%s: luhncheck_result = %02X", __FUNCTION__,  best_match.luhncheck_result);
  _LOGF_INFO("%s: activationcheck_result = %02X", __FUNCTION__, best_match.activationcheck_result);

  // ####################
  // # Control Callback #
  // ####################

  unsigned char msg[512] = {0};
  unsigned short msgSize = 0;
  unsigned char rsp[64] = {0};
  unsigned short rspSize = sizeof(rsp);
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;

  // Build Callback Command Message
  if (strcmp(sdi_tag, SDI_TAG_BF01_CONTINUATION_REQ_CB_PAN) == 0)
  {
    _LOGF_INFO("%s: SDI Callback BF01", __FUNCTION__);

    if ((node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0)) != NULL)
    {
      pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF01_CONTINUATION_REQ_CB_PAN, SDI_TAG_DFA12C_CARD_VALIDATOR_MATCH), (const unsigned char *)best_match.json.c_str(), (unsigned)best_match.json.size());
      pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF01_CONTINUATION_REQ_CB_PAN, SDI_TAG_DFA12E_LUHN_CHECK_RESULT), &best_match.luhncheck_result, 1);

      // Add obfuscated PAN
      csd_string opan(pan);
      obfuscatePAN(opan);
      pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF01_CONTINUATION_REQ_CB_PAN, SDI_TAG_DF1A_OBFUSCATED_PAN_CN), (const unsigned char *)opan.c_str(), opan.length());

      // Add VCL encrypted PAN
      if (isVclEnabled()) // ToDo: And feature activated (config?)
      {
        csd_string cvv = "";

        // Assign default expiry date if exist
        expDate.assign(best_match.default_expiry_date.c_str());

        if (pan.length() > 0)
        {
          csd_string pan2 = pan;
          csd_string expDate2, expDate3;

          // Try to get the default Expiry Date
          if (expDate.length() > 0)
          {
            expDate2 = expDate.substr(2, 2) + expDate.substr(0, 2); // Use default Expiry Date (YYMM) from best match
          }
          else
          {
            expDate2 = "4912"; // Use fix default Expiry Date (YYMM)!
          }

          expDate3 = expDate2;

          if (VCL_EncryptMAN(pan2, expDate2, cvv))
          {
            struct BTLVNode *node2 = NULL;

            if ((pan2.length() % 2) != 0)
            {
              // Add a padding "F" to get an even number of Pan digits
              pan2 += "F";
            }

            // Add VCL encrypted Pan and Expiry Date to the callback message
            if ((node2 = pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF01_CONTINUATION_REQ_CB_PAN, SDI_TAG_FFA108_VCL_MANUAL_ENTERED_DATA), NULL, 0)) != NULL)
            {
              csd_data paramBin;
              sdi::hextobin(paramBin, (const unsigned char*) pan2.data(), pan2.length());
              pxBTLVAppendTag(node2, "5A", &paramBin[0], pan2.size() / 2);
              sdi::hextobin(paramBin, (const unsigned char*) expDate2.data(), expDate2.length());
              pxBTLVAppendTag(node2, "5F24", &paramBin[0], expDate2.size() / 2);
              // Add clear text Expiry Date to the callback message as well
              sdi::hextobin(paramBin, (const unsigned char*) expDate3.data(), expDate3.length());
              pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF01_CONTINUATION_REQ_CB_PAN, "5F24"), &paramBin[0], expDate3.size() / 2);
            }
          }
        }
      }
      else // VCL disabeld
      {
        Whitelist &wl = Whitelist::getInstance();
        csd_data paramBin;

        sdi::hextobin(paramBin, (const unsigned char*) pan.data(), pan.length());

        if (wl.whitelisted(pan))
        {
          // Add clear text PAN
          pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF01_CONTINUATION_REQ_CB_PAN, "5A"), &paramBin[0], pan.size() / 2);
        }

#ifndef NO_PLUGINS
        unsigned char tlvHeader[] = "\xF0\x00\x5A\x00";
        tlvHeader[1] = (unsigned char)paramBin.size() + 2;
        tlvHeader[3] = (unsigned char)paramBin.size();
        paramBin.insert(paramBin.begin(), tlvHeader, tlvHeader + 4);

        // Send trigger "Card Data Available" to all loaded plugins which support this trigger
        std::vector<struct bcTriggerResult> results;
        broadcastTrigger(SDIPlugin::SDITrigger_ManualPan, paramBin, results);
#endif // #ifndef NO_PLUGINS
      }

      res = RESULT_OK;
    }
    else
    {
      _LOGF_INFO("%s: pxBTLVAppendTag failed", __FUNCTION__);
    }
  }
  else if (strcmp(sdi_tag, SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE) == 0)
  {
    _LOGF_INFO("%s: SDI Callback BF02", __FUNCTION__);

    if ((node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0)) != NULL)
    {
      pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE, SDI_TAG_DFA12C_CARD_VALIDATOR_MATCH), (const unsigned char *)best_match.json.c_str(), (unsigned)best_match.json.size());

      if (expDate != "0101")
      {
        // Expiry Date is skipped or bypassed and expiry check result has to be ignored!
        pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE, SDI_TAG_DFA12D_EXPIRY_CHECK_RESULT), &best_match.expirycheck_result, 1);
      }

      // Add obfuscated PAN
      csd_string opan(pan);
      obfuscatePAN(opan);
      pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE, SDI_TAG_DF1A_OBFUSCATED_PAN_CN), (const unsigned char *)opan.c_str(), opan.length());

      skipCvv = best_match.skip_cvv;

      // Add VCL encrypted PAN
      if (isVclEnabled()) // ToDo: And feature activated (config?)
      {
        csd_string cvv = "";

        if (pan.length() > 0)
        {
          csd_string pan2 = pan;
          csd_string expDate2, expDate3;

          // Try to get the Expiry Date
          if (expDate.length() > 0)
          {
            expDate2 = expDate.substr(2, 2) + expDate.substr(0, 2); // Use the entered Expiry Date (YYMM)
          }
          else
          {
            // Assign default expiry date if exist
            expDate2.assign(best_match.default_expiry_date.c_str());

            // Try to get the default Expiry Date from the card validation match
            if (expDate2.length() > 0)
            {
              expDate2 = expDate2.substr(2, 2) + expDate2.substr(0, 2); // Use default Expiry Date (YYMM) from best match
            }
            else
            {
              expDate2 = "4912"; // Use fix default Expiry Date (YYMM)!
            }
          }

          expDate3 = expDate2;

          if (VCL_EncryptMAN(pan2, expDate2, cvv))
          {
            struct BTLVNode *node2 = NULL;

            if ((pan2.length() % 2) != 0)
            {
              // Add a padding "F" to get an even number of Pan digits
              pan2 += "F";
            }

            // Add VCL encrypted Pan and Expiry Date to the callback message
            if ((node2 = pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE, SDI_TAG_FFA108_VCL_MANUAL_ENTERED_DATA), NULL, 0)) != NULL)
            {
              csd_data paramBin;
              sdi::hextobin(paramBin, (const unsigned char*) pan2.data(), pan2.length());
              pxBTLVAppendTag(node2, "5A", &paramBin[0], pan2.size() / 2);
              sdi::hextobin(paramBin, (const unsigned char*) expDate2.data(), expDate2.length());
              pxBTLVAppendTag(node2, "5F24", &paramBin[0], expDate2.size() / 2);
              // Add clear text Expiry Date to the callback message as well
              sdi::hextobin(paramBin, (const unsigned char*) expDate3.data(), expDate3.length());
              pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE, "5F24"), &paramBin[0], expDate3.size() / 2);
            }
          }
        }
      }
      else // VCL disabeld
      {
        Whitelist &wl = Whitelist::getInstance();
        csd_data paramBin;

        if (wl.whitelisted(pan))
        {
          // Add clear text PAN
          sdi::hextobin(paramBin, (const unsigned char*) pan.data(), pan.length());
          pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE, "5A"), &paramBin[0], pan.size() / 2);
        }

        if ((expDate.length() > 0) && expDate != "0101")
        {
          // Add Expiry Date
          csd_string expDate2 = expDate.substr(2, 2) + expDate.substr(0, 2); // Use default Expiry Date (YYMM) from best match
          sdi::hextobin(paramBin, (const unsigned char*) expDate2.data(), expDate2.length());
          pxBTLVAppendTag(node, NESTED_TAG(SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE, "5F24"), &paramBin[0], expDate2.size() / 2);
        }
      }

      res = RESULT_OK;
    }
    else
    {
      _LOGF_INFO("%s: pxBTLVAppendTag failed", __FUNCTION__);
    }
  }
  else
  {
    _LOGF_INFO("%s: Unknown SDI Callback: %s", __FUNCTION__, sdi_tag);
  }

  if (res == RESULT_OK)
  {
    int size = 0;

    memcpy(msg, "\x9B\x01", 2);

    if ((size = iBTLVExport(&xBtlv, &msg[2], sizeof(msg) - 2)) <= 0)
    {
      _LOGF_INFO("%s: iBTLVExport failed", __FUNCTION__);
      res = RESULT_FAIL;
    }
    else
    {
      msgSize = size + 2;

      _LOGF_INFO("%s: msgSize = %d", __FUNCTION__, msgSize);
      _LOGAPI_HEXDUMP_RAW_INFO(msg, msgSize);
    }
  }

  vBTLVClear(&xBtlv);

  if (res == RESULT_OK)
  {
    // Send Callback and wait for response
    res = common::sendRequestResponseCallback(msg, msgSize, rsp, &rspSize);
  }

  if (res == RESULT_OK)
  {
    res = RESULT_FAIL;

    // Evaluate Callback result
    if (iBTLVImport(&xBtlv, &rsp[2], rspSize - 2, NULL, NULL) == 0)
    {
      if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA128_CONTINUATION_RESPONSE))) != NULL) &&
          (node->uSize == 1) &&
          (*node->pucData >= CONT_VAL_CONTINUE && *node->pucData <= CONT_VAL_ABORT))
      {
        res = *node->pucData;

        _LOGF_INFO("%s: CONTINUATION RESPONSE = 0x%02X", __FUNCTION__, res);
      }

      if (formatString != NULL)
      {
        if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA01A_ALT_INPUT_FORMAT_STRING))) != NULL) &&
            (node->uSize < formatStringSize))
        {
          memcpy(formatString, node->pucData, node->uSize);
          formatString[node->uSize] = 0x00;

          _LOGF_INFO("%s: Alternative Format String = %s", __FUNCTION__, formatString);
        }
      }

      if (res == CONT_VAL_CONTINUE && continuationMode != NULL)
      {
        if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA158_CONTINUATION_MODE))) != NULL) &&
            (node->uSize == 1) &&
            ((*node->pucData >= CONT_MODE_CONTINUE && *node->pucData <= CONT_MODE_SKIP)))
        {
          *continuationMode = *node->pucData;

          _LOGF_INFO("%s: CONTINUATION MODE = 0x%02X", __FUNCTION__, *continuationMode);
        }
      }
    }
  }

  return res;
}

int ui_handleManualCardDataEntry(Language textLanguage,
                                 unsigned short timeout,
                                 csd_stringmap &value,
                                 unsigned char cardEntryValueDeactivation,
                                 unsigned char cardEntryMode,
                                 char *inputFormatString,
                                 char *touchCoordinates,
                                 unsigned char nbrTouchButtons,
                                 unsigned char forceMinPanLenTo7,
                                 unsigned char skipCb9FFE)
{
  int result = RESULT_FAIL;
  unsigned char forcedCardEntryValueDeactivation = cardEntryValueDeactivation; // Needed for later check on card range table
  char formatString[8] = {0};
  unsigned char continuationMode = CONT_MODE_INITIAL;

  if (cardEntryValueDeactivation == 0xFF)
  {
    // No Card value deactivation forced by the command, use the default one
    cardEntryValueDeactivation = SdiSysConfig::instance().getCardEntryValueDeactivate();
  }

  if (!ui_enabled()) // Headless mode
  {
    TouchPad &touchpad = TouchPad::getInstance();
    TouchPad::callback_t cbFunc = statusCB;
    unsigned char minLength = 0;
    unsigned char maxLength = 0;
    KeyPad &keypad = KeyPad::getInstance();

    if ((touchCoordinates != NULL) && (nbrTouchButtons > 0))
    {
      TouchPad::t_hotspots hotspots;

      for (unsigned i = 0; i < nbrTouchButtons; i++)
      {
        TouchPad::t_hotspot b;
        b.x1 = decodeUS(&touchCoordinates[i * 9]);
        b.y1 = decodeUS(&touchCoordinates[i * 9 + 2]);
        b.x2 = b.x1 + decodeUS(&touchCoordinates[i * 9 + 4]);
        b.y2 = b.y1 + decodeUS(&touchCoordinates[i * 9 + 6]);
        b.result = touchCoordinates[i * 9 + 8];
        b.options = 0; //do not warn missing initializer for member

        hotspots.push_back(b);

        _LOGF_INFO("%s: x1=%d y1=%d x2=%d y2=%d result=%d\n",
                   __FUNCTION__,
                   b.x1,
                   b.y1,
                   b.x2,
                   b.y2,
                   b.result);
      }

      touchpad.setHotspots(hotspots);
    }

    if (inputFormatString != NULL &&
        (strlen(inputFormatString) + 1) <= sizeof(formatString))
    {
      strncpy(formatString, inputFormatString, sizeof(formatString));
    }

#ifdef _VOS2
    string hwModelName;
    sysGetPropertyString(SYS_PROP_HW_MODEL_NAME, hwModelName);

    if (strncmp(hwModelName.c_str(), "CM5", 3) == 0)
    {
      _LOGF_INFO("%s: iPS_SelectInputMode switch touch controller to secure controller", __FUNCTION__);
      iPS_SelectInputMode(SECURE_INPUT);
    }

    // Check for internal Android device with physical keypad (M440 and M424)
    int sysProp = 0;

    if (sys_internal_android() && // CM5, M424, M440
        (sysGetPropertyInt(SYS_PROP_KEYBOARD_HW, &sysProp) == SYS_ERR_OK) &&
        sysProp == 1) // HW keyboard exists
    {
      // Initialize the libkeypad_client
      initLibkeypad_client();

      if (_get_keypad_mode && _set_keypad_mode)
      {
        keypad_mode_t mode;

        // Set the keypad mode to MASKED to avoid sending keystrokes of sensitive input to Android on M424/M440
        mode = _set_keypad_mode(KEYPAD_MODE_MASKED); // Set the keypad mode to MASKED
        _LOGF_INFO("%s: result of _set_keypad_mode to MASKED = %d", __FUNCTION__, mode);

        if (_get_keypad_mode() != KEYPAD_MODE_MASKED)
        {
          _LOGF_ERROR("%s: Keypad Mode could not be set to MASKED", __FUNCTION__);
          return result;
        }
      }
    }

#endif

    csd_string inputData;
    csd_string expDate;
    DataEntryType entryType;
    int j;

    if (cardEntryValueDeactivation == 0x04)
    {
      // Enter CVV only
      j = 4;
    }
    else
    {
      j = 2;
    }

    for (int i = j; i >= cardEntryValueDeactivation; i--)
    {
      // Check the validity of the alternative format string
      if (strlen(formatString) > 0 &&                    // Alternative format string received
          cardEntryValueDeactivation == 0 &&             // CVV has to be entered
          strncmp(formatString, "[NNN]", 5)  != 0 &&
          strncmp(formatString, "[NNNN]", 6) != 0 &&
          strncmp(formatString, "[NNNn]", 6) != 0 &&
          strncmp(formatString, "[BBB]", 5) != 0 &&
          strncmp(formatString, "[BBBB]", 6) != 0 &&
          strncmp(formatString, "[BBBb]", 6) != 0)
      {
        _LOGF_ERROR("%s: Invalid input format string received", __FUNCTION__);
        return RESULT_FAIL;
      }

      // Determine the maximum number of digits to enter
      if (i == 2)
      {
        // Minimum number of digits for PAN is 10 and maximum is 19
        minLength = 10;

        if (forceMinPanLenTo7 == 0x01)
        {
          // Minimum number of digits for PAN is forced to 7
          minLength = 7;
        }

        maxLength = 19;
        entryType = TYPE_PAN;
      }
      else if (i == 1)
      {
        // Minimmum and maximum number of digits for DATE is 4 (MMYY)
        minLength = 4;
        maxLength = 4;
        entryType = TYPE_EXPIRYDATE;
      }
      else
      {
        // Minimum number of digits for CVV is 3 and maximum is 4 or assigned by formatString
        minLength = 3;
        maxLength = 4;
        entryType = TYPE_CVV;

        if (strlen(formatString) > 0)
        {
          if ((strlen(formatString) == 6) &&
              ((formatString[strlen(formatString) - 2] == 'N') ||
               (formatString[strlen(formatString) - 2] == 'B')))
          {
            minLength = 4;
          }

          maxLength = (strlen(formatString) - 2);
        }
      }

      if (continuationMode == CONT_MODE_SKIP)
      {
        result = RESULT_OK;
      }
      else
      {
        if ((touchCoordinates != NULL) && (nbrTouchButtons > 0))
        {
          result = touchpad.enterData(inputData, entryType, cbFunc, minLength, maxLength, timeout, skipCb9FFE);
        }
        else
        {
          result = keypad.enterData(inputData, entryType, cbFunc, minLength, maxLength, timeout, skipCb9FFE);
        }
      }

      if (result == RESULT_OK)
      {
        if (i == 2)
        {
#ifdef _DEBUG
          _LOGF_INFO("%s: entered data for PAN in headless mode: %s", __FUNCTION__, inputData.c_str());
#endif

          if (inputData.length() < minLength)
          {
            // At least 10 digits have to be entered for PAN
            _LOGF_INFO("%s: PAN not completely entered", __FUNCTION__);

            // Send callback to inform the payment app that data are not completely entered
            cbFunc(TOO_FEW_DIGITS_ENTERED, "");

            i++;
            continue;
          }
          else
          {
            bool skipCvv;
#ifdef _VOS2

            if (strncmp(hwModelName.c_str(), "CM5", 3) == 0)
            {
              _LOGF_INFO("%s: iPS_SelectInputMode switch touch controller to none-secure application processor", __FUNCTION__);
              iPS_SelectInputMode(PUBLIC_INPUT);
            }

#endif

            int retval = validateData_ControlCB(SDI_TAG_BF01_CONTINUATION_REQ_CB_PAN, inputData, expDate, skipCvv, formatString, sizeof(formatString), &continuationMode);

#ifdef _VOS2

            if (strncmp(hwModelName.c_str(), "CM5", 3) == 0)
            {
              _LOGF_INFO("%s: iPS_SelectInputMode switch touch controller back to secure controller", __FUNCTION__);
              iPS_SelectInputMode(SECURE_INPUT);
            }

#endif

            if (retval == CONT_VAL_CONTINUE)
            {
              // Continue
              value["PAN"] = inputData;

              if (continuationMode == CONT_MODE_INITIAL)
              {
                if (expDate.size() > 0)
                {
                  // Default expiry date found, stop further entry and use this expiry date
                  value["DATE"] = expDate;
                  break;
                }
                else if ((forcedCardEntryValueDeactivation == 0x02) && isVclEnabled())
                {
                  // Manual card data entry forced to enter PAN only and VCL is enabled, use default expiry date '12/49'
                  value["DATE"] = "1249";
                  break;
                }
              }
            }
            else if (retval == CONT_VAL_REENTER)
            {
              continuationMode = CONT_MODE_INITIAL;

              // Clear entered Pan and reenter it
              inputData.clear();
              i++;
              continue;
            }
            else if (retval == CONT_VAL_ABORT)
            {
              // Abort requested from payment app
              result = RESULT_MOBILE_ABORT;
              break;
            }
            else
            {
              // Execution error
              result = RESULT_FAIL;
              break;
            }
          }
        }
        else if (i == 1)
        {
          bool skipExpiryDate = false;

          value["DATE"].append(inputData);
#ifdef _DEBUG
          _LOGF_INFO("%s: entered data for DATE in headless mode: %s", __FUNCTION__, inputData.c_str());
#endif

          if ((inputData.length() == 0) && (continuationMode == CONT_MODE_BYPASS || continuationMode == CONT_MODE_SKIP))
          {
            _LOGF_INFO("%s: Expiry Date bypassed or skipped", __FUNCTION__);

            if (expDate.size() == 4)
            {
              _LOGF_INFO("%s: Default Expiry Date found", __FUNCTION__);
              inputData = expDate;
            }
            else
            {
              if (isVclEnabled())
              {
                _LOGF_INFO("%s: Hard coded Expiry Date (12/49) used", __FUNCTION__);
                inputData = "1249";
              }
              else
              {
                _LOGF_INFO("%s: Hard coded Expiry Date (01/01) used", __FUNCTION__);
                inputData = "0101"; // To signal validateData_ControlCB() for BF02 that the Expiry Date is skipped and has to be ignored!
              }
            }

            skipExpiryDate = !isVclEnabled();
          }

          if (inputData.length() < minLength)
          {
            // At least 4 digits have to be entered for DATE
            _LOGF_INFO("%s: DATE not completely entered", __FUNCTION__);

            // Send callback to inform the payment app that data are not completely entered
            cbFunc(TOO_FEW_DIGITS_ENTERED, "");

            i++;
            continue;
          }
          else if (verifyDate(inputData.c_str(), "MMYY") == 0)
          {
            // DATE must have correct format
            _LOGF_INFO("%s: DATE has a format error", __FUNCTION__);

            // Send callback to inform the payment app that an invalid expiry date was entered
            cbFunc(INVALID_VALUE_ENTERED, "");

            // Clear entered expiry date and reenter it
            inputData.clear();

            i++;
            continue;
          }
          else
          {
            bool skipCvv;
#ifdef _VOS2

            if (strncmp(hwModelName.c_str(), "CM5", 3) == 0)
            {
              _LOGF_INFO("%s: iPS_SelectInputMode switch touch controller to none-secure application processor", __FUNCTION__);
              iPS_SelectInputMode(PUBLIC_INPUT);
            }

#endif
            // Reset the continuation mode to initial before the callback
            continuationMode = CONT_MODE_INITIAL;
            int retval = validateData_ControlCB(SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE, value["PAN"], inputData, skipCvv, formatString, sizeof(formatString), &continuationMode);

#ifdef _VOS2

            if (strncmp(hwModelName.c_str(), "CM5", 3) == 0)
            {
              _LOGF_INFO("%s: iPS_SelectInputMode switch touch controller back to secure controller", __FUNCTION__);
              iPS_SelectInputMode(SECURE_INPUT);
            }

#endif

            if (retval == 0x01)
            {
              // Continue
              if (skipExpiryDate == false)
              {
                value["DATE"] = inputData;
              }

              if ((skipCvv && forcedCardEntryValueDeactivation == 0xFF))
              {
                // Skip CVV found in card range table an no forcing by command or VCL enabled, stop entry
                break;
              }
            }
            else if (retval == 0x02)
            {
              // Clear entered Pan and reenter it
              inputData.clear();
              i++;
              continue;
            }
            else if (retval == 0x03)
            {
              // Abort requested from payment app
              result = RESULT_MOBILE_ABORT;
              break;
            }
            else
            {
              // Execution error
              result = RESULT_FAIL;
              break;
            }
          }
        }
        else
        {
#ifdef _DEBUG
          _LOGF_INFO("%s: entered data for CVV in headless mode: %s", __FUNCTION__, inputData.c_str());
#endif

          if ((inputData.length() == 0) && ((continuationMode == CONT_MODE_BYPASS || continuationMode == CONT_MODE_SKIP)))
          {
            value["CVV"] = "";
          }
          else if (inputData.length() < minLength)
          {
            if ((inputData.length() == 0) &&
                (strncmp(formatString, "[BBB", 4) == 0))
            {
              // CVV bypassed
              _LOGF_INFO("%s: CVV bypassed", __FUNCTION__);
              value["CVV"] = inputData;
            }
            else
            {
              // At least 3 digits have to be entered for CVV
              _LOGF_INFO("%s: CVV not completely entered", __FUNCTION__);

              // Send callback to inform the payment app that data are not completely entered
              cbFunc(TOO_FEW_DIGITS_ENTERED, "");

              i++;
              continue;
            }
          }
          else
          {
            value["CVV"] = inputData;
          }
        }

#if 0 //ToDo: Do we need the status callback (e.g. when no card range file exist)?

        if (i > cardEntryValueDeactivation)
        {
          statusCB(0xFF, ""); // Send status callback that actual parameter entry is confirmed
        }

#endif

        // Clear the input data string
        inputData.clear();
      }
      else
      {
        _LOGF_ERROR("%s: enterData in headless mode returned an error: %d", __FUNCTION__, result);
        break;
      }
    }

#ifdef _VOS2

    if (strncmp(hwModelName.c_str(), "CM5", 3) == 0)
    {
      _LOGF_INFO("%s: iPS_SelectInputMode switch touch controller back to none-secure application processor", __FUNCTION__);
      iPS_SelectInputMode(PUBLIC_INPUT);
    }

    if (_get_keypad_mode && _set_keypad_mode)
    {
      keypad_mode_t mode;

      // Reset the keypad mode to CLEAR
      mode = _set_keypad_mode(KEYPAD_MODE_CLEAR); // Set the clear keypad mode
      _LOGF_INFO("%s: result of _set_keypad_mode to CLEAR = %d", __FUNCTION__, mode);
    }

#endif

  }

#ifndef HEADLESS
  else
  {
    // Standard mode

    string textKey = TXT_NO_TXT;

    if (cardEntryValueDeactivation == 0)
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_FF_MANUAL_CARD_ENTRY", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_FF_MANUAL_CARD_ENTRY;
      value["name1"] = "PAN";
      value["name2"] = "DATE";
      value["name3"] = "CVV";
    }
    else if (cardEntryValueDeactivation == 1)
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_FE_MANUAL_CARD_ENTRY_WITHOUT_CVV", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_FE_MANUAL_CARD_ENTRY_WITHOUT_CVV;
      value["name1"] = "PAN";
      value["name2"] = "DATE";
    }
    else if (cardEntryValueDeactivation == 2)
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_FC_CARD_NUMBER", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_FC_CARD_NUMBER;
      value["name1"] = "PAN";
    }
    else // cardEntryValueDeactivation = 0 or 4!
    {
      _LOGF_INFO("%s: TXT_SECURE_INPUT_02_CVV", __FUNCTION__);
      textKey = TXT_SECURE_INPUT_02_CVV;
      value["name1"] = "CVV";
    }

    if (cardEntryMode == 0)
    {
      stringmap help;

      for (csd_stringmap::iterator iterator = value.begin(); iterator != value.end(); ++iterator)
      {
        help[iterator->first] = iterator->second.c_str();
      }

      // Perform manual card data entry in one screen
      result = gui_secureInput(textKey, textLanguage, help, timeout, 0, inputFormatString, forceMinPanLenTo7);

      if (result == RESULT_OK)
      {
        for (stringmap::iterator iterator = help.begin(); iterator != help.end(); ++iterator)
        {
          value[iterator->first] = iterator->second.c_str();
        }
      }
    }
    else
    {
      // Perform manual card data entry in separate screens
      for (csd_stringmap::iterator iterator = value.begin(); iterator != value.end(); ++iterator)
      {
        stringmap help;

        if (iterator->second.compare("PAN") == 0)
        {
          textKey = TXT_SECURE_INPUT_FC_CARD_NUMBER;
        }
        else if (iterator->second.compare("DATE") == 0)
        {
          textKey = TXT_SECURE_INPUT_FD_EXPIRY_DATE;
        }
        else
        {
          textKey = TXT_SECURE_INPUT_02_CVV;
        }

        help[iterator->first] = iterator->second.c_str();

        result = gui_secureInput(textKey, textLanguage, help, timeout, 0, inputFormatString, forceMinPanLenTo7);

        if (result == RESULT_OK)
        {
          value[iterator->second.c_str()] = help[iterator->second.c_str()].c_str();
        }
        else
        {
          _LOGF_ERROR("%s: GUI: Card data entry in separate screens encountered a problem", __FUNCTION__);
          break;
        }
      }

    }
  }

#else
  (void) textLanguage;
  (void) cardEntryMode;
#endif
  return result;
}

int ui_EnterPin(Language pinTextLanguage,
                unsigned short timeout,
                unsigned char *pinBypass,
                unsigned opts,
                unsigned char minPINLength,
                unsigned char maxPINLength,
                unsigned interchar_tout,
                vfigui::stringmap *value,
                int password_char,
                char *touchCoordinates,
                unsigned char nbrTouchButtons)
{
  _LOGF_INFO("%s: navigator=%s", __FUNCTION__, (opts & PIN_NavigatorMode_1) ? "1" : ((opts & PIN_NavigatorMode_2) ? "2" : "0"));
  int retVal = RESULT_FAIL;

  if (!ui_enabled()) // headless
  {
    int result = 0;

    // validate PIN bypass configuration
    if (pinBypass)
    {
      if (*pinBypass & (~PINBypass_MaskAllowed))
      {
        _LOGF_ERROR("%s: Invalid bypass configuration '%d'", __FUNCTION__, (int)*pinBypass);
        return RESULT_FAIL;
      }

      // PINBypass_DisableByDigit must be combined with a key
      if (*pinBypass == PINBypass_DisableByDigit)
      {
        *pinBypass = PINBypass_Disabled; // ignore option and disable PIN bypass
      }
    }

    result = iPS_SelectPINAlgo(0x0A); // VSS_PIN not defined on Verix

    if (result == 0)
    {
      PINPARAMETER pinParams = {minPINLength, maxPINLength, '*', ' ', 0x00}; // password_char don't matter for headless

      /* NOTE: PIN bypass is no longer activated with PIN parameter option bits 1 and 4,
       * since we need to disable bypass for option PINBypass_DisableByDigit, while PIN entry is active.
       * Thus, in this case status 0x06 or 0x0A is returned, we would have to restart the PIN entry.
       * But is is also possible to detect the bypass with return values of iPS_GetPINResponse():
       * -nbPinDigits (number of input digits)
       * -encPinBlock[0] (containing the pressed function key: 8 = clear, 13 = enter.
       * This method is used for all PIN bypass cases (see below) */

      // enable navigator mode
      if ((opts & PIN_NavigatorMode_1) || (opts & PIN_NavigatorMode_2))
      {
        pinParams.ucOption = pinParams.ucOption | (1 << 2); // bit 2: enable navigator accessibility mode

        if (opts & PIN_NavigatorMode_2)
        {
          pinParams.ucOption = pinParams.ucOption | (1 << 7); // bit 7: use tactile button instead of double tap
        }
      }

      // PIN digit clear key behaviour
      if (!(opts & PIN_ClearAllDigits))
      {
        // Clear only one PIN digit on clear button
        pinParams.ucOption = pinParams.ucOption | (1 << 3); // bit 3: clear to backspace
      }

      // Automatic Enter, if maximal digits are reached
      if (opts & PIN_AutoEnter)
      {
        pinParams.ucOption |= (1 << 0); // bit 0: auto enter
      }

      result = iPS_SetPINParameter(&pinParams);
    }

    if ((touchCoordinates != NULL) && (nbrTouchButtons > 0))
    {
      // Set touch coordinates to VAULT
      touch_hs_s sp;
      memset(&sp, 0x00, sizeof(sp));

      if (nbrTouchButtons > MAX_NUM_HOTSPOTS)
      {
        _LOGF_INFO("%s: To many touch buttons defined, nbrTouchButtons = %d, MAX_NUM_HOTSPOTS = %d",
                   __FUNCTION__, nbrTouchButtons, MAX_NUM_HOTSPOTS);
        nbrTouchButtons = MAX_NUM_HOTSPOTS;
      }

      sp.num_hotspots = nbrTouchButtons;

      for (unsigned i = 0; i < nbrTouchButtons; i++)
      {
        sp.touch_spot[i].x1 = decodeUS(&touchCoordinates[i * 9]);
        sp.touch_spot[i].y1 = decodeUS(&touchCoordinates[i * 9 + 2]);
        sp.touch_spot[i].x2 = sp.touch_spot[i].x1 + decodeUS(&touchCoordinates[i * 9 + 4]);
        sp.touch_spot[i].y2 = sp.touch_spot[i].y1 + decodeUS(&touchCoordinates[i * 9 + 6]);
        sp.touch_spot[i].result = touchCoordinates[i * 9 + 8];

        _LOGF_INFO("%s: x1=%d y1=%d x2=%d y2=%d result=%d\n",
                   __FUNCTION__,
                   sp.touch_spot[i].x1,
                   sp.touch_spot[i].y1,
                   sp.touch_spot[i].x2,
                   sp.touch_spot[i].y2,
                   sp.touch_spot[i].result);
      }

      setSecurePINDisplayParameters(&sp, 0);
    }

    if (result == 0)
    {
      unsigned char lPanDummy[19] = {0};

      result = iPS_RequestPINEntry(0, lPanDummy);
    }

    if (result == 0)
    {
      int       Status = -1;
      PINRESULT RetEncPin;
#ifdef __ANDROID__
      int       timer = 30;
#else
      int       timer = 100;
#endif
      int       interrupt = RESULT_OK;
      unsigned char nbPinDigits = 0;
      mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

      // Initialize PINRESULT structure
      memset(&RetEncPin, 0x00, sizeof(RetEncPin));

#if 0 // ToDo: Check if this callback is necessary because the payment app knows this on her own in that case

      if (opts & (PIN_NavigatorMode_1 | PIN_NavigatorMode_2))
      {
        unsigned char navigatorCbData[2] = {0};

        // Send Navigator CB that PIN entry has started
        navigatorCbData[0] = 0x9D; // Navigator callback
        navigatorCbData[1] = 0x20; // PIN entry started

        _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
        _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

        // Send Callback Request
        proto->command(navigatorCbData, 2);
      }

#endif

      // calculate timeout for PIN entry
      sdi::TimeStamp tout = sdi::TimeStamp::Monotonic() + timeout * sdi::TimeStamp::S;
      // interchar timeout
      sdi::TimeStamp ictout;
      bool ictout_inited = false; // flag to check, if the interchar timeout was set once and icTout is valid

      do
      {
        result = iPS_GetPINResponse(&Status, &RetEncPin);

        if (result != 0)
        {
          // Cancel PIN entry
          iPS_CancelPIN();
          break;
        }

        _LOGF_INFO("%s: headless mode: iPS_GetPINResponse: status         = %d", __FUNCTION__, Status);
        _LOGF_INFO("%s: headless mode: iPS_GetPINResponse: nbPinDigits    = %d", __FUNCTION__, RetEncPin.nbPinDigits);
        _LOGF_INFO("%s: headless mode: iPS_GetPINResponse: encPinBlock[0] = %d", __FUNCTION__, RetEncPin.encPinBlock[0]);

        if (Status == 0x02) // PIN_COLLECTING
        {
          // handle PIN bypass (if enabled)
          if (pinBypass && *pinBypass != PINBypass_Disabled)
          {
            // PIN field empty (no digits)
            if (nbPinDigits == 0 && RetEncPin.nbPinDigits == 0)
            {
              // PIN bypass with Clear key enabled and Clear was pressed on empty PIN field
              if ((*pinBypass & PINBypass_Clear) && RetEncPin.encPinBlock[0] == 8)
              {
                Status = 0x0A; // bypass with clear key
                // Cancel PIN entry
                iPS_CancelPIN();
                break;
              }

              // PIN bypass with Enter key enabled and Enter was pressed on empty PIN field
              if ((*pinBypass & PINBypass_Enter) && RetEncPin.encPinBlock[0] == 13)
              {
                Status = 0x06; // bypass with enter key
                // Cancel PIN entry
                iPS_CancelPIN();
                break;
              }
            }

            // disable PIN bypass once a digit has been entered
            if ((*pinBypass & PINBypass_DisableByDigit) && RetEncPin.nbPinDigits > 0)
            {
              *pinBypass = PINBypass_Disabled;
            }
          }

          // PIN entry aborted by card removal
          if ((opts & PIN_AbortOnCardRemove) && isCardRemoved())
          {
            // Cancel PIN entry
            iPS_CancelPIN();
            retVal = RESULT_USER_CANCEL;
            _LOGF_ERROR("%s: headless mode: card removed!", __FUNCTION__);
            break;
          }

          // PIN entry timeout
          if (sdi::TimeStamp::Monotonic() >= tout)
          {
            // Cancel PIN entry
            iPS_CancelPIN();
            retVal = RESULT_TIMEOUT;
            _LOGF_ERROR("%s: headless mode: PIN entry timeout occurred!", __FUNCTION__);
            break;
          }

          // interchar timeout
          if (interchar_tout > 0)
          {
            // restart interchar timeout, if any key has been pressed
            if (nbPinDigits != RetEncPin.nbPinDigits || RetEncPin.encPinBlock[0] != 0)
            {
              ictout = sdi::TimeStamp::Monotonic() + interchar_tout * sdi::TimeStamp::MS;
              ictout_inited = true;
            }

            if (ictout_inited && sdi::TimeStamp::Monotonic() >= ictout)
            {
              // Cancel PIN entry
              iPS_CancelPIN();
              retVal = RESULT_INTERCHAR_TIMEOUT;
              _LOGF_ERROR("%s: headless mode: Interchar timeout occured!", __FUNCTION__);
              break;
            }
          }

          // check abort
          if (!(opts & PIN_IgnoreExtAbort))
          {
            interrupt = check4Interrupt();

            if (interrupt != RESULT_OK) // Abort received or communication to mobile device inerrupted
            {
              // Cancel PIN entry
              iPS_CancelPIN();

              if (interrupt == RESULT_MOBILE_ABORT)
              {
                retVal = RESULT_MOBILE_ABORT;
                _LOGF_ERROR("%s: headless mode: Abort command received from mobile device!", __FUNCTION__);
                break;
              }

              if (interrupt == RESULT_NO_LINK)
              {
                retVal = RESULT_NO_LINK;
                _LOGF_ERROR("%s: headless mode: link interrupted!", __FUNCTION__);
                break;
              }

              retVal = RESULT_FAIL;
              _LOGF_ERROR("%s: headless mode: interrupted with %d!", __FUNCTION__, interrupt);
              break;
            }
          }

          unsigned char navigatorCbData[2] = {0};

          // Add SW1 for Navigator callback
          navigatorCbData[0] = 0x9D; // Navigator callback

          _LOGF_ERROR("%s: headless mode: RetEncPin.encPinBlock[0] = %02X", __FUNCTION__, RetEncPin.encPinBlock[0]);

          // Check for Navigator data
          if (opts & (PIN_NavigatorMode_1 | PIN_NavigatorMode_2))
          {
            if ((RetEncPin.encPinBlock[0] & 0xF0) == 0xD0)
            {
              // A key was selected but not entered, send Navigator callback

              switch (RetEncPin.encPinBlock[0])
              {
                case 0xD1:
                {
                  navigatorCbData[1] = 0x00; // A numeric key was selected
                  break;
                }

                case 0xD2:
                {
                  navigatorCbData[1] = 0x02; // Cancel key was selected
                  break;
                }

                case 0xD3:
                {
                  navigatorCbData[1] = 0x03; // Backspace/Clear key was selected
                  break;
                }

                case 0xDE:
                {
                  navigatorCbData[1] = 0x01; // Enter key was selected
                  break;
                }

                case 0xDF:
                {
                  navigatorCbData[1] = 0x04; // Multiple (i.e. too many) touches detected during PIN entry
                  break;
                }

                default:
                {
                  _LOGF_ERROR("%s: headless mode: Unknown indication received from ips_GetPINResponse: %02X ",
                              __FUNCTION__, RetEncPin.encPinBlock[0]);
                  break;
                }
              }

              _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
              _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

              // Send Callback Request
              proto->command(navigatorCbData, 2);
            }
            else if (RetEncPin.encPinBlock[0] == 0x0D) // Pin digit underflow
            {
              navigatorCbData[1] = 0x05;

              _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
              _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

              // Send Callback Request
              proto->command(navigatorCbData, 2);
            }
            else if (RetEncPin.encPinBlock[0] == 0xF9) // Pin digit overflow
            {
              navigatorCbData[1] = 0x06;

              _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
              _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

              // Send Callback Request
              proto->command(navigatorCbData, 2);
            }
          }

          if (nbPinDigits != RetEncPin.nbPinDigits)
          {
            // Number of entered digits changed, send Status callback
            unsigned char statusCbData[2] = {0};

            if (opts & (PIN_NavigatorMode_1 | PIN_NavigatorMode_2))
            {
              navigatorCbData[1] = 0x10; // Numeric key confirmed

              _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
              _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

              // Send Callback Request
              proto->command(navigatorCbData, 2);
            }

            // Add SW1-SW2 for status callback
            statusCbData[0] = 0x9F; // Status callback
            statusCbData[1] = RetEncPin.nbPinDigits; // Number of entered digits

            _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
            _LOGAPI_HEXDUMP_RAW_INFO(statusCbData, 2);

            // Send Callback Request
            proto->command(statusCbData, 2);
          }

          usleep(timer * 1000);

          // save the number of PIN digits already entered
          nbPinDigits = RetEncPin.nbPinDigits;
        }
      }
      while (Status == 0x02); // PIN_COLLECTING

      _LOGF_INFO("%s: headless mode: iPS_GetPINResponse: status = %d", __FUNCTION__, Status);
      _LOGF_INFO("%s: headless mode: iPS_GetPINResponse: nbPinDigits = %d", __FUNCTION__, RetEncPin.nbPinDigits);

      if (result == 0)
      {
        switch (Status)
        {
          case 0x00: // PIN_DONE
          {
            // PIN successfully entered
            if (pinBypass)
            {
              *pinBypass = 0;
            }

            retVal = RESULT_OK;
            break;
          }

          case 0x02: // PIN_COLLECTING
          {
            /* PIN entry aborted, while PIN collecting ...
             * iPS_CancelPIN() already called and
             * retVal already set in upper while loop */
            break;
          }

          case 0x05: // PIN_ABORTED
          {
            // Cancel button was pressed
            retVal = RESULT_USER_CANCEL;
            break;
          }

          case 0x0A: // PIN_CLEAR_CANCEL (bypass with clear key)
          {
            if (pinBypass)
            {
              *pinBypass = 2; // bypass with Clear
              retVal = RESULT_OK;
              break;
            }

            retVal = RESULT_FAIL;
            break;
          }

          case 0x06: // PIN_NULL_PIN (bypass with enter key)
          {
            if (pinBypass)
            {
              *pinBypass = 1; // bypass with Enter
              retVal = RESULT_OK;
              break;
            }

            retVal = RESULT_FAIL;
            break;
          }

          case 0x0C: // PIN_TIMED_OUT
          {
            retVal = RESULT_TIMEOUT;
            break;
          }

          default:
          {
            retVal = RESULT_FAIL;
            break;
          }
        }

        if ((opts & (PIN_NavigatorMode_1 | PIN_NavigatorMode_2)) &&
            (Status == 0x00 || Status == 0x05 || Status == 0x0A || Status == 0x06))
        {
          unsigned char navigatorCbData[2] = {0};

          navigatorCbData[0] = 0x9D; // Navigator callback
          navigatorCbData[1] = 0x10; // OK or Cancel button confirmed

          _LOGF_INFO("%s: mADK_PP_Prot::command(), msgSize = 2", __FUNCTION__);
          _LOGAPI_HEXDUMP_RAW_INFO(navigatorCbData, 2);

          // Send Callback Request
          proto->command(navigatorCbData, 2);
        }
      }
    }
    else if (result == (int) E_KM_ACCESS_DENIED)
    {
      // Excessive PIN entries, PIN entry decline by VAULT
      _LOGF_ERROR("%s: iPS_GetPINResponse failed with E_KM_ACCESS_DENIED (Excessive PIN entry)", __FUNCTION__);
      retVal = RESULT_EXCESSIVE_PIN_REQUESTS;
    }
  }

#ifndef HEADLESS
  else // SDI standard mode
  {
    if (opts & (PIN_NavigatorMode_1 | PIN_NavigatorMode_2))
    {
      vfiipc::NotifyResult nr;

      // Navigator accessibility mode active, register for notifications
      nr = vfiipc::ipcRegisterNotificationCB("EXT_SYS_PINSTATE_NTF", pinstateCallback, NULL, 0);

      if (nr != vfiipc::NOTIFY_OK)
      {
        _LOGF_ERROR("%s: ipcRegisterNotificationCB for EXT_SYS_PINSTATE_NTF returned an error: %d", __FUNCTION__, nr);
        return retVal;
      }
    }

    // Check if beep should occur
    if (opts & PIN_Beep)
    {
      sysBeepNormal(50);
    }

    retVal = gui_EnterPin(pinTextLanguage, timeout, pinBypass, opts, minPINLength, maxPINLength, interchar_tout, value, password_char);

    if (opts & (PIN_NavigatorMode_1 | PIN_NavigatorMode_2))
    {
      vfiipc::NotifyResult nr;

      // Navigator accessibility mode active, unregister for notifications
      nr = vfiipc::ipcUnregisterNotificationCB("EXT_SYS_PINSTATE_NTF", pinstateCallback, NULL);

      if (nr != vfiipc::NOTIFY_OK)
      {
        _LOGF_WARN("%s: ipcUnregisterNotificationCB for EXT_SYS_PINSTATE_NTF returned an error: %d", __FUNCTION__, nr);
      }
    }
  }

#else
  (void) pinTextLanguage;
  (void) value;
  (void) password_char;
#endif
  return retVal;
}

int ui_dialog(const string &msg, unsigned options, int timeout, stringmap *value, bool *abort)
{
#ifdef HEADLESS
  (void) msg;
  (void) options;
  (void) timeout;
  (void) value;
  (void) abort;
  return RESULT_OK;
#else

  if (!ui_enabled())
  {
    return RESULT_OK;
  }

  // Check if beep should occur
  if (options & DLG_Beep)
  {
    sysBeepNormal(50);
  }

  return gui_dialog(msg, options, timeout, value, abort);
#endif
}

int ui_idlescreen(const string &msg, int options, int timeout, void *data)
{
#ifdef HEADLESS
  (void) msg;
  (void) options;
  (void) timeout;
  (void) data;
  return RESULT_OK;
#else

  if (!ui_enabled())
  {
    return RESULT_OK;
  }

  return gui_idlescreen(msg, options, timeout, data);
#endif
}

void ui_displayTextKey(const string &textKey, Language language)
{
#ifdef HEADLESS
  (void) textKey;
  (void) language;
  return;
#else

  if (!ui_enabled())
  {
    return;
  }

  gui_displayTextKey(textKey, language);
#endif
}

int ui_confirmTextKey(const string &textKey, Language language, stringmap *value, unsigned short timeout)
{
#ifdef HEADLESS
  (void) textKey;
  (void) language;
  (void) value;
  (void) timeout;
  return RESULT_FAIL;
#else

  if (!ui_enabled())
  {
    return RESULT_FAIL;
  }

  return gui_confirmTextKey(textKey, language, value, timeout);
#endif
}

void ui_init(uiAsyncCallback idlescreen_cb)
{
#ifdef HEADLESS
  (void) idlescreen_cb;
#else
  gui_init(idlescreen_cb);
#endif
}

bool ui_enabled(void)
{
  return (config::SdiSysConfig::instance().getSDIMode() == config::SdiSysConfig::SDIMode_Standard);
}

void ui_clear(void)
{
#ifdef HEADLESS
  return;
#else

  if (!ui_enabled())
  {
    return;
  }

  gui_clear();
#endif
}

enum ui_async_result ui_getAsyncResult(bool reset, int *raw_ui_error)
{
#ifdef HEADLESS
  (void) reset;

  if (raw_ui_error)
  {
    *raw_ui_error = 0; // UI_ERR_OK
  }

  return UI_AR_NONE;
#else

  if (!ui_enabled())
  {
    if (raw_ui_error)
    {
      *raw_ui_error = UI_ERR_OK;
    }

    return UI_AR_NONE;
  }

  return gui_getAsyncResult(reset, raw_ui_error);
#endif
}

void ui_enableLEDs(bool enable)
{
#ifdef HEADLESS
  (void) enable;
  return;
#else

  if (!ui_enabled())
  {
    return;
  }

  gui_enableLEDs(enable);
#endif
}

void ui_dispLEDs(unsigned char leds)
{
#ifdef HEADLESS
  (void) leds;
  return;
#else

  if (!ui_enabled())
  {
    return;
  }

  gui_dispLEDs(leds);
#endif
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

---
title: sdi/src/ui_priv.cpp

---

# sdi/src/ui_priv.cpp



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[DlgCbData](struct_dlg_cb_data.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[dialog_cb](ui__priv_8cpp.md#function-dialog-cb)**(void * data) |
| void | **[async_dialog_cb](ui__priv_8cpp.md#function-async-dialog-cb)**(void * data, UICBType type, UICBData & uidata) |
| bool | **[has_touch](ui__priv_8cpp.md#function-has-touch)**() |
| bool | **[has_keypad](ui__priv_8cpp.md#function-has-keypad)**() |
| bool | **[has_ctls_leds](ui__priv_8cpp.md#function-has-ctls-leds)**() |
| bool | **[has_ctls_logo](ui__priv_8cpp.md#function-has-ctls-logo)**() |
| string | **[gui_getImageFile](ui__priv_8cpp.md#function-gui-getimagefile)**(const string & file, bool ext =true, bool intern =true) |
| string | **[gui_getResourceFile](ui__priv_8cpp.md#function-gui-getresourcefile)**(const string & file, bool ext =true, bool intern =true, const string & www_dir ="") |
| void | **[gui_clear](ui__priv_8cpp.md#function-gui-clear)**(int opts =0) |
| int | **[gui_dialog](ui__priv_8cpp.md#function-gui-dialog)**(const string & ui_text, int opts, int timeout, stringmap * value =0, bool * abort =0, const char * url ="dialog.html", int * raw_ui_error =0) |
| void | **[js_console_cb](ui__priv_8cpp.md#function-js-console-cb)**(void * data, const char * text) |
| void | **[gui_init](ui__priv_8cpp.md#function-gui-init)**(uiAsyncCallback idlescreen_cb) |
| int | **[gui_dispExternalDialog](ui__priv_8cpp.md#function-gui-dispexternaldialog)**(unsigned char templateID, stringmap & value, int confirm, unsigned options, unsigned short timeout, int * raw_ui_error) |
| int | **[gui_dispHtmlDialog](ui__priv_8cpp.md#function-gui-disphtmldialog)**(const string & htmlFileName, stringmap & value, int timeout, Language lang, int opts, int * raw_ui_error) |
| int | **[gui_dispMenu](ui__priv_8cpp.md#function-gui-dispmenu)**(stringmap & value, unsigned options, int timeout, int * raw_ui_error) |
| int | **[gui_secureInput](ui__priv_8cpp.md#function-gui-secureinput)**(const string & textKey, Language lang, stringmap & value, unsigned short timeout, char maskingCharacter, char * inputFormatString, unsigned char forceMinPanLenTo7 =0, unsigned char * amount =0, unsigned short currency =0) |
| int | **[gui_signatureCapture](ui__priv_8cpp.md#function-gui-signaturecapture)**(Language lang, stringmap & value, unsigned short timeout) |
| enum [ui_async_result](ui_8h.md#enum-ui-async-result) | **[gui_getAsyncResult](ui__priv_8cpp.md#function-gui-getasyncresult)**(bool reset, int * raw_ui_error) |
| int | **[gui_EnterPin](ui__priv_8cpp.md#function-gui-enterpin)**(Language pinTextLanguage, unsigned short timeout =30, unsigned char * pinBypass =0, unsigned opts =[PIN_NoOpts](ui_8h.md#enumvalue-pin-noopts), unsigned char minPINLength =4, unsigned char maxPINLength =12, unsigned interchar_tout =0, stringmap * value =0, int password_char =' *') |
| void | **[gui_enableLEDs](ui__priv_8cpp.md#function-gui-enableleds)**(bool enable) |
| void | **[gui_dispLEDs](ui__priv_8cpp.md#function-gui-displeds)**(unsigned char leds) |
| int | **[gui_confirmTextKey](ui__priv_8cpp.md#function-gui-confirmtextkey)**(const string & textKey, Language language, stringmap * value =0, unsigned short timeout =30) |
| int | **[gui_displayTextKey](ui__priv_8cpp.md#function-gui-displaytextkey)**(const string & textKey, Language language, const string & trxTypeTextKey =TXT_NO_TXT, unsigned char * amount =0, unsigned short currency =0, unsigned char special_key =0, unsigned char manual_card_data =0) |
| int | **[gui_idlescreen](ui__priv_8cpp.md#function-gui-idlescreen)**(const string & ui_text, int opts, int timeout, void * data =0) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| pthread_mutex_t | **[uiMutex](ui__priv_8cpp.md#variable-uimutex)**  |
| enum [ui_async_result](ui_8h.md#enum-ui-async-result) | **[ui_async_result](ui__priv_8cpp.md#variable-ui-async-result)**  |
| int | **[ui_async_raw_error](ui__priv_8cpp.md#variable-ui-async-raw-error)**  |
| int | **[ui_async_trx_id](ui__priv_8cpp.md#variable-ui-async-trx-id)**  |
| unsigned char | **[oldLeds](ui__priv_8cpp.md#variable-oldleds)**  |
| bool | **[leds_enabled](ui__priv_8cpp.md#variable-leds-enabled)**  |
| uiAsyncCallback | **[async_idlescreen_cb](ui__priv_8cpp.md#variable-async-idlescreen-cb)**  |


## Functions Documentation

### function dialog_cb

```cpp
static bool dialog_cb(
    void * data
)
```


**Parameters**: 

  * **data** [DlgCbData](struct_dlg_cb_data.md) pointer provided by UI function (e.g. gui_dialog()) 


callback function that is called at regular intervals while a dialog is displayed. If the callback returns false, the dialog is cancelled; 


### function async_dialog_cb

```cpp
static void async_dialog_cb(
    void * data,
    UICBType type,
    UICBData & uidata
)
```


**Parameters**: 

  * **data** integer pointer with dialog options provided by UI function (e.g. gui_dialog()), which is deleted with receipt of callback type UI_CB_RESULT 
  * **type** type / reason why the callback was invoked 
  * **uidata** object to access data of the current dialog 


callback function that is called when a dialog has returned some data. 


### function has_touch

```cpp
static bool has_touch()
```


**Return**: true for touch support, else false 

returns true, if the device supports touch 


### function has_keypad

```cpp
static bool has_keypad()
```


**Return**: true for existing keypad, else false 

returns true, if the device has a keypad 


### function has_ctls_leds

```cpp
static bool has_ctls_leds()
```


**Return**: true for existing CTLS LEDs, else false 

returns true, if the device has physical CTLS status LEDs 


### function has_ctls_logo

```cpp
static bool has_ctls_logo()
```


**Return**: true for existing phyiscal CTLS logo label, else false to display the CTLS logo on screen. 

On most devices the CTLS card is tapped on screen, which requires to display the CTLS logo. If the device has a separate CTLS landing zone with its own physical CTLS logo, the CTLS logo must not be displayed on screen. 


### function gui_getImageFile

```cpp
static string gui_getImageFile(
    const string & file,
    bool ext =true,
    bool intern =true
)
```


lookup and check existance of an image file. If an absolute path is passed, the function just checks for existance of the file. For relative file is looked up relative to 2 locations in following order:

1. in user configuration folder: a) VOS/VOS2: "/etc/config/sdi/www/images" b) VOS3: "/home/usr\<X\>/sdi/www/images"
2. in resource folder of SDI: "$HOME/www/sdi/images" If the file is found, the function returns the absolute file path. fileimage file path (relative or absolute) 

extflag set to false to disable file lookup in user configuration directories (location 1) 

internflag set to false to disable file lookup in internal SDI resource folder (location 2) 

absolute path to resource file, else an empty string, if the image file does not exist. 


### function gui_getResourceFile

```cpp
static string gui_getResourceFile(
    const string & file,
    bool ext =true,
    bool intern =true,
    const string & www_dir =""
)
```


lookup and check existance of an arbitrary resource file. If an absolute path is passed, the function just checks for existance of the file. For relative file is looked up relative to 4 locations in following order:

1. in external user configuration folder: a) VOS/VOS2: "/etc/config/sdi/www/<\terminal folder\>" b) VOS3: "/home/usr\<X\>/sdi/www/<\terminal folder\>"
2. in external user configuration folder: a) VOS/VOS2: "/etc/config/sdi/www/default" b) VOS3: "/home/usr\<X\>/sdi/www/default"
3. in internal SDI folder: "\<www\>/\<terminal folder\>"
4. in internal SDI folder: "\<www\>/default" Example for <terminal folder>: 320x480C15T Internal folder <www> is "$HOME/www/sdi", if flag _intern_ is set to true. Providing false for both flags _ext_ and _intern_ the optional parameter _www_dir_ can be used to specify an alternative www lookup folder. If the file is found, the function returns the absolute file path. fileresource file path (relative or absolute) 

extflag set to false to disable file lookup in user configuration directories (location 1 and 2) 

internflag set to false to disable file lookup in internal SDI resource folders (location 3 and 4) 

www_diruse an alternative folder to look up SDI resource files (location 3 and 4). The parameter is ignored, if either _ext_ or _intern_ is set to true. 

Usually SDI uses flags _intern_ or _ext_ to lookup resource files. Only SDI command HTML Dialog (24-0A) uses parameter _www_dir_, since customer dialogs/resource files are separated from normal SDI dialogs (installed to "www/custom" with the standard system package). 

absolute path to resource file, else an empty string, if the resource file does not exist. 


don't request UI properties blow, if no UI is active, since guiserver might not run (e.g. CM5)


### function gui_clear

```cpp
static void gui_clear(
    int opts =0
)
```


### function gui_dialog

```cpp
static int gui_dialog(
    const string & ui_text,
    int opts,
    int timeout,
    stringmap * value =0,
    bool * abort =0,
    const char * url ="dialog.html",
    int * raw_ui_error =0
)
```


### function js_console_cb

```cpp
static void js_console_cb(
    void * data,
    const char * text
)
```


**Parameters**: 

  * **data** context pointer (unused) 
  * **text** log message 


JavaScript console callback passed to [jsSetConsole()](namespacejs.md#function-jssetconsole)


### function gui_init

```cpp
static void gui_init(
    uiAsyncCallback idlescreen_cb
)
```


### function gui_dispExternalDialog

```cpp
static int gui_dispExternalDialog(
    unsigned char templateID,
    stringmap & value,
    int confirm,
    unsigned options,
    unsigned short timeout,
    int * raw_ui_error
)
```


### function gui_dispHtmlDialog

```cpp
static int gui_dispHtmlDialog(
    const string & htmlFileName,
    stringmap & value,
    int timeout,
    Language lang,
    int opts,
    int * raw_ui_error
)
```


### function gui_dispMenu

```cpp
static int gui_dispMenu(
    stringmap & value,
    unsigned options,
    int timeout,
    int * raw_ui_error
)
```


### function gui_secureInput

```cpp
static int gui_secureInput(
    const string & textKey,
    Language lang,
    stringmap & value,
    unsigned short timeout,
    char maskingCharacter,
    char * inputFormatString,
    unsigned char forceMinPanLenTo7 =0,
    unsigned char * amount =0,
    unsigned short currency =0
)
```


### function gui_signatureCapture

```cpp
static int gui_signatureCapture(
    Language lang,
    stringmap & value,
    unsigned short timeout
)
```


### function gui_getAsyncResult

```cpp
static enum ui_async_result gui_getAsyncResult(
    bool reset,
    int * raw_ui_error
)
```


### function gui_EnterPin

```cpp
static int gui_EnterPin(
    Language pinTextLanguage,
    unsigned short timeout =30,
    unsigned char * pinBypass =0,
    unsigned opts =PIN_NoOpts,
    unsigned char minPINLength =4,
    unsigned char maxPINLength =12,
    unsigned interchar_tout =0,
    stringmap * value =0,
    int password_char =' *'
)
```


### function gui_enableLEDs

```cpp
static void gui_enableLEDs(
    bool enable
)
```


### function gui_dispLEDs

```cpp
static void gui_dispLEDs(
    unsigned char leds
)
```


### function gui_confirmTextKey

```cpp
static int gui_confirmTextKey(
    const string & textKey,
    Language language,
    stringmap * value =0,
    unsigned short timeout =30
)
```


### function gui_displayTextKey

```cpp
static int gui_displayTextKey(
    const string & textKey,
    Language language,
    const string & trxTypeTextKey =TXT_NO_TXT,
    unsigned char * amount =0,
    unsigned short currency =0,
    unsigned char special_key =0,
    unsigned char manual_card_data =0
)
```


### function gui_idlescreen

```cpp
static int gui_idlescreen(
    const string & ui_text,
    int opts,
    int timeout,
    void * data =0
)
```



## Attributes Documentation

### variable uiMutex

```cpp
static pthread_mutex_t uiMutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable ui_async_result

```cpp
static enum ui_async_result ui_async_result = UI_AR_NONE;
```


### variable ui_async_raw_error

```cpp
static int ui_async_raw_error = UI_ERR_OK;
```


### variable ui_async_trx_id

```cpp
static int ui_async_trx_id = -1;
```


### variable oldLeds

```cpp
static unsigned char oldLeds = 0;
```


### variable leds_enabled

```cpp
static bool leds_enabled = false;
```


### variable async_idlescreen_cb

```cpp
uiAsyncCallback async_idlescreen_cb = 0;
```



## Source code

```cpp
/****************************************************************************
 *  Company:     Verifone
 *  Author:      GSS R&D Germany
 *  Content:     SDI-Server
 *  Note:        This file contains ADKGUI related implementation, which is
 *               required for SDI-Server with standard mode support (UI mode).
 *               This file is private, has static functions only and is included
 *               by ui.cpp directly. File ui.cpp contains corresponding wrappers,
 *               coming along with dummy implementation for headless-only SDI (e.g.
 *               for Android using define HEADLESS). Therefore, no header file for
 *               ui_priv.cpp to avoid usage of these functions in other SDI sources.
 ****************************************************************************/

#include "html/gui.h"
#include "html/scriptproc.h"
#include "html/jsproc.h"
#include "sysinfo/sysbar.h"
#include "sysinfo/leds.h"
#include "emv/E2E_EMV_CTLS_Serialize.h"
#include "emv/EMV_CTLS_Interface.h"
#include <errno.h>
#include "emv_ctls.h"
#include <sys/types.h>
#include <fcntl.h>
#include <string>

static pthread_mutex_t uiMutex = PTHREAD_MUTEX_INITIALIZER;
static enum ui_async_result ui_async_result = UI_AR_NONE;
static int ui_async_raw_error = UI_ERR_OK;
static int ui_async_trx_id = -1;

static unsigned char oldLeds = 0;
static bool leds_enabled = false;

uiAsyncCallback async_idlescreen_cb = 0;

// data for dialog callback function dialog_cb()
struct DlgCbData
{
  int opts;
  int retval;
  bool *abort;
  DlgCbData(int options, bool *abort_dlg = 0)
  {
    opts = options;
    abort = abort_dlg;
    retval = RESULT_OK;
  }
};
static bool dialog_cb(void *data)
{
  DlgCbData *d = (DlgCbData *)data;

  if (!(d->opts & DLG_IgnoreExtAbort))
  {
    int intRet = check4Interrupt();

    if (intRet == RESULT_MOBILE_ABORT)
    {
      d->retval = RESULT_MOBILE_ABORT;
      _LOGF_INFO("DlgCbData: Abort command received from mobile device!");
      return false;
    }

    if (intRet == RESULT_NO_LINK)
    {
      d->retval = RESULT_NO_LINK;
      _LOGF_INFO("DlgCbData: Link interrupted!");
      return false;
    }
  }

  if ((d->opts & DLG_AbortOnCardRemove) && isCardRemoved())
  {
    d->retval = RESULT_USER_CANCEL;
    _LOGF_INFO("DlgCbData: Card removed!");
    return false;
  }

  if (d->abort && *d->abort)
  {
    d->retval = RESULT_USER_CANCEL;
    _LOGF_INFO("DlgCbData: Dialog aborted!");
    return false;
  }

  return true;
}

static void async_dialog_cb(void *data, UICBType type, UICBData &uidata)
{
  if (type == UI_CB_RESULT)
  {
    int *opts = (int *)data;

    if (!opts)
    {
      return;
    }

    // store result of asynchronous dialog, if enabled by option
    if (ui_async_trx_id == uidata.txn_id() && ((*opts) & DLG_StoreAsyncResult))
    {
      int res = uidata.result();
      pthread_mutex_lock(&uiMutex);
      ui_async_raw_error = res; // store the ADKGUI raw error code

      /* for ExtDialogCompat mode map deprecated special key error
       * codes -100 (to UI_AR_KEY_CANCEL) and -101 (ot UI_AR_KEY_CLEAR) */
      if ((*opts)&DLG_ExtDialogCompat)
      {
        if (res == -100)
        {
          res = UI_ERR_ABORT;
        }

        if (res == -101)
        {
          res = UI_ERR_BACK;
        }
      }

      switch (res)
      {
        case UI_ERR_OK:    // enter/confirm key/softkey
          ui_async_result = UI_AR_KEY_ENTER;
          break;

        case UI_ERR_ABORT: // cancel/abort key/softkey
          ui_async_result = UI_AR_KEY_CANCEL;
          break;

        case UI_ERR_BACK:  // back/clear key/softkey
          ui_async_result = UI_AR_KEY_CLEAR;
          break;

        case UI_ERR_TIMEOUT: // dialog timeout
          ui_async_result = UI_AR_TIMEOUT;
          break;

        default: // other UI error (provided with ui_async_raw_error)
          ui_async_result = UI_AR_FAILED;
          break;
      }

      pthread_mutex_unlock(&uiMutex);
    }

    delete opts;
  }
}

static bool has_touch()
{
  static int touch_support = -1;

  if (touch_support < 0)
  {
    if (UI_ERR_OK != uiGetPropertyInt(UI_DEVICE_SUPPORTS_TOUCH, &touch_support))
    {
      touch_support = -1;
    }
  }

  return touch_support == 1;
}

static bool has_keypad()
{
  static int key_count = -1;

  if (key_count < 0)
  {
    if (UI_ERR_OK != uiGetPropertyInt(UI_DEVICE_KEY_COUNT, &key_count))
    {
      key_count = -1;
    }
  }

  return key_count > 0;
}

static bool has_ctls_leds()
{
  static int ctls_leds = -1;

  if (ctls_leds < 0)
  {
    int leds;

    if (SYS_ERR_OK == sysGetPropertyInt(SYS_PROP_LED, leds))
    {
      ctls_leds = (leds & (CTLS_LED_0 | CTLS_LED_1 | CTLS_LED_2 | CTLS_LED_3)) ? 1 : 0;
    }
    else
    {
      // fallback, if ADKSYS fails (e.g. on x86) -> use GUI model name
      string model;

      if (UI_ERR_OK == uiGetPropertyString(UI_DEVICE_MODEL, model))
      {
        ctls_leds = 0;

        if (model == "X10" || model == "X8" || model == "m440")
        {
          ctls_leds = 1;
        }
      }
    }
  }

  return (ctls_leds == 1);
}

static bool has_ctls_logo()
{
  static int ctls_logo = -1;

  if (ctls_logo < 0)
  {
    // recently no system API provides this information, therefore, use use GUI model name
    string model;

    if (UI_ERR_OK == uiGetPropertyString(UI_DEVICE_MODEL, model))
    {
      ctls_logo = 0;

      if (model == "X10" || model == "X8" || model == "m440")
      {
        ctls_logo = 1;
      }
    }
  }

  return (ctls_logo == 1);
}

static string gui_getImageFile(const string &file, bool ext = true, bool intern = true)
{
  struct stat s;
  string f = file;

  // just check file existance for absolute file path
  if (!is_absolute_path(f))
  {
    // at first, lookup relative file in external user config directory under subfolder 'www'
    if (ext)
    {
      f = pathcat(sdi::filesystem::ext_config_dir(), "www/images");
      f = pathcat(f, file);

      if (stat(f.c_str(), &s) == 0 && S_ISREG(s.st_mode))
      {
        return f;
      }
    }

    if (!intern)
    {
      return "";
    }

    // at second, lookup relative file in SDI 'www' folder
    uiGetPropertyString(UI_PROP_RESOURCE_PATH, f);

    string::size_type p = f.rfind('/');

    if (p == string::npos)
    {
      return "";  // shouldn't happen
    }

    f.erase(p); // strip terminal folder, e.g. "320x480C0T"
    f = pathcat(f, "images");
    f = pathcat(f, file);
  }

  if (stat(f.c_str(), &s) == 0 && S_ISREG(s.st_mode))
  {
    return f;
  }

  return "";
}

static string gui_getResourceFile(const string &file, bool ext = true, bool intern = true, const string &www_dir = "")
{
  struct stat s;
  string f = file;

  // just check file existance for absolute file path
  if (!is_absolute_path(f))
  {
    if (!ui_enabled())
    {
      return "";
    }

    if (ext)
    {
      // 1. lookup relative file in external user config directory under UI subfolder 'www/<terminal dir>'
      f = pathcat(filesystem::ext_config_dir(), "www");
      f = uiGetTerminalResourceDir(f); // append terminal directory, e.g. "320x480C0T" or "P400"
      f = pathcat(f, file);

      if (stat(f.c_str(), &s) == 0 && S_ISREG(s.st_mode))
      {
        return f;
      }

      // 2. lookup relative file in external user config directory under UI subfolder 'www/default'
      f = pathcat(sdi::filesystem::ext_config_dir(), "www/default");
      f = pathcat(f, file);

      if (stat(f.c_str(), &s) == 0 && S_ISREG(s.st_mode))
      {
        return f;
      }
    }

    // neither in internal folder nor another www folder shall be used
    if (!intern && www_dir.empty())
    {
      return ""; // wrong parameters
    }

    // 3. lookup relative file in inernal SDI 'www' folder
    if (intern)
    {
      uiGetPropertyString(UI_PROP_RESOURCE_PATH, f);
    }
    else
    {
      f = uiGetTerminalResourceDir(www_dir); // append terminal directory, e.g. "320x480C0T" or "P400"
    }

    f = pathcat(f, file);

    if (stat(f.c_str(), &s) == 0 && S_ISREG(s.st_mode))
    {
      return f;
    }

    // 4. lookup relative file in internal SDI 'default' folder
    if (intern)
    {
      uiGetPropertyString(UI_PROP_RESOURCE_DEFAULT_PATH, f);
    }
    else
    {
      f = pathcat(www_dir, "default");
    }

    f = pathcat(f, file);
  }

  if (stat(f.c_str(), &s) == 0 && S_ISREG(s.st_mode))
  {
    return f;
  }

  return "";
}

static void gui_clear(int opts = 0)
{
  // clear the dialog
  stringmap value;
  value["led_area"] = (leds_enabled && !(opts & DLG_NoLEDs)) ? "1" : "0";
  value["header_logo"] = "0"; // disable header logo
  uiInvokeURLAsync(value, "dialog.html", async_dialog_cb);
}

static int gui_dialog(const string &ui_text, int opts, int timeout, stringmap *value = 0,
                      bool *abort = 0, const char *url = "dialog.html", int *raw_ui_error = 0)
{
  int       retVal = RESULT_FAIL;
  stringmap vmap;
  stringmap &val = (value ? *value : vmap);

  if (!ui_text.empty())
  {
    val["text"] = ui_text;
  }

  val["timeout"] = uiPrint("%d", timeout < 0 ? -1 : timeout);
  val["has_touch"] = has_touch() ? "1" : "0";
  val["has_keypad"] = has_keypad() ? "1" : "0";
  val["led_area"] = (leds_enabled && !(opts & DLG_NoLEDs)) ? "1" : "0";

  if (opts & DLG_NoHeader)
  {
    val["header_logo"] = "0"; // disable header logo
    val.erase("header_text"); // remove headline text by option
  }

  // only display CTLS logo on screen, if device has no physical CTLS logo
  if (!has_ctls_logo() && (opts & DLG_CtlsLogo))
  {
    // use CTLS logo from resource folder (don't allow replacement by user config package)
    val["image_file"] = gui_getImageFile("tap_small.png", false, true);
  }
  else if (opts & DLG_QuestionLogo)
  {
    // question logo (allow replacement by user config package)
    val["image_file"] = gui_getImageFile("question.png");
  }
  else if (opts & DLG_WarningLogo)
  {
    // attention logo (allow replacement by user config package)
    val["image_file"] = gui_getImageFile("warning.png");
  }
  else if (opts & DLG_ErrorLogo)
  {
    // error logo (allow replacement by user config package)
    val["image_file"] = gui_getImageFile("error.png");
  }
  else if (opts & DLG_SuccessLogo)
  {
    // success logo (allow replacement by user config package)
    val["image_file"] = gui_getImageFile("success.png");
  }
  else if (opts & DLG_WaitLogo)
  {
    // wait logo/animation (allow replacement by user config package)
    val["image_file"] = gui_getImageFile("wait.gif");
  }

  val["key_enter"]  = (opts & DLG_EnterKey) ? "1" : "0"; // returns UI_OK
  val["key_cancel"] = (opts & DLG_CancelKey) ? "1" : "0"; // returns UI_ERR_ABORT
  val["key_clear"]  = (opts & DLG_ClearKey) ? "1" : "0"; // returns UI_ERR_BACK
  val["hide_softkeys"] = (opts & DLG_HideSoftKeys) ? "1" : "0";

  // text alignment
  if (opts & DLG_TextAlignLeft)
  {
    val["text_align_left"] = "1";
  }
  else if (opts & DLG_TextAlignRight)
  {
    val["text_align_right"] = "1";
  }

  if (opts & DLG_TextAlignTop)
  {
    val["text_align_top"] = "1";
  }
  else if (opts & DLG_TextAlignBottom)
  {
    val["text_align_bottom"] = "1";
  }

  if (opts & DLG_Async) // asynchronous dialog
  {
    pthread_mutex_lock(&uiMutex);

    /* if a second async. dialog w/o DLG_StoreAsyncResult
     * is started, we keep the result of the previous one */
    if (opts & DLG_StoreAsyncResult)
    {
      ui_async_trx_id = -1;
      ui_async_result = UI_AR_NONE; // init: async dialog with DLG_StoreAsyncResult not started yet
      ui_async_raw_error = UI_ERR_OK;
    }

    int r = uiInvokeURLAsync(val, url, async_dialog_cb, new int(opts));

    if (raw_ui_error)
    {
      *raw_ui_error = r;
    }

    if (r >= 0)
    {
      if (opts & DLG_StoreAsyncResult)
      {
        ui_async_trx_id = r;
        ui_async_result = UI_AR_IN_PROGRESS; // async dialog with DLG_StoreAsyncResult in progress
      }

      retVal = RESULT_OK;
    }

    pthread_mutex_unlock(&uiMutex);
  }
  else     // synchronous dialog
  {
    DlgCbData cbd(opts, abort);
    int r = uiInvokeURL(val, url, dialog_cb, &cbd);

    if (raw_ui_error)
    {
      *raw_ui_error = r;
    }

    switch (r)
    {
      case UI_ERR_OK:
        retVal = RESULT_OK;
        break;

      case UI_ERR_TIMEOUT:
        retVal = RESULT_TIMEOUT;
        break;

      case UI_ERR_BACK:
        retVal = RESULT_CLEAR_BUTTON;
        break;

      case UI_ERR_ABORT:
        retVal = RESULT_USER_CANCEL;
        break;

      default:
        if (cbd.retval != RESULT_OK)
        {
          retVal = cbd.retval;
          break;
        }

        retVal = RESULT_FAIL;
        break;
    }

    // clear dialog (pass options to consider DLG_NoLEDs)
    if (opts & DLG_ClearOnReturn)
    {
      gui_clear(opts);
    }
  }

  return retVal;
}

static void js_console_cb(void *data, const char *text)
{
  (void) data;
  _LOGF_INFO("JS console log: %s", text);
}

static void gui_init(uiAsyncCallback idlescreen_cb)
{
  const char *app_name = getenv("GUIPRT_APPNAME");

  if (!app_name || strlen(app_name) == 0)
  {
    app_name = "sdi";
    setenv("GUIPRT_APPNAME", app_name, 1);
    _LOGF_WARN("%s: GUIPRT_APPNAME set to '%s', since not set by MAC!", __FUNCTION__, app_name);
  }

  // enable JavaScript support for ADKGUI
  htmlSetScriptProcessor("js", js::jsProcessorExt, 0);
  // enable JavaScript console and forward to SDI log
  js::jsSetConsole(js_console_cb, 0);

  // set the callback for the idle screen
  async_idlescreen_cb = idlescreen_cb;

  /* set user config directory 'www' as file system root to allow JavaScript to use
   * $APPDIR and file system functions to check existance of resource files in there */
  string user_config_www_dir = pathcat(sdi::filesystem::ext_config_dir(), "www");
  uiSetPropertyString(UI_PROP_JS_ROOT, user_config_www_dir);

  // extract CCS file from property
  string css_file;
  uiGetPropertyString(UI_PROP_CSS, css_file);

  if (!css_file.empty())  // empty shouldn't happen, since SDI always uses a CSS file
  {
    string www_root = "/www/";
    // consider SDI application folder
    www_root += string(app_name) + "/";

    /* replace SDI 'www' folder by user config directory 'www' to look up
     * CSS file at same relative location than in SDI 'www' folder */
    string::size_type pos = css_file.find(www_root);

    if (pos != string::npos)
    {
      css_file.erase(0, pos + www_root.length());
      css_file = pathcat(user_config_www_dir, css_file);
      struct stat s;

      // if exists, use CSS file from user config directory 'www'
      if (stat(css_file.c_str(), &s) == 0 && S_ISREG(s.st_mode))
      {
        uiSetPropertyString(UI_PROP_CSS, css_file);
      }
    }
  }

  /* optimize UI language catalogs:
   * SDI server recently uses 2 catalogs per language, one catalog comes along with SDI standard package (SDI default catalog),
   * the other can be installed with user config package optionally (custom language catalog). Since most UI functions provide
   * language as parameter (so that EMV can dynamically switch to another language different to system default language) we have
   * to cache 4 catalogs to keep SDI system default language. ADKGUI function below takes the number of additional cached languages,
   * thus, we require to cache 3 additional cataloges. */
  uiCatalogSetDelayedRelease(3);

  // select SDI default catalog corresponding to system language
  UICatalog syslang;

  /* On SDI startup set internal catalog for recent system language UO global
   * and keep this catalog for UI after deletion persistant. UI functions
   * provided by SDI interface will temporarily switch to extern catalog
   * and switch back to internal one after the corresponding dialog as finished.
   * UICatalog::getText() providing texts for <?var ...?> and <?varhtml ...?>
   * is able to lookup texts from both, internal and external text catalogs.
   * For more details please read describtions of class UICatalog. */
  if (!syslang.setUIGlobal(UICatalog::Intern, false))
  {
    _LOGF_ERROR("%s: Internal UI catalog couldn't be applied for system language: %s",
                __FUNCTION__, syslang.error().c_str());
  }
}

static int gui_dispExternalDialog(unsigned char templateID, stringmap &value, int confirm,
                                  unsigned options, unsigned short timeout, int *raw_ui_error)
{
  _LOGF_INFO("%s: mapsize = '%zu'", __FUNCTION__, value.size());

  // template 1 (default template) is provided by SDI server with dialog.html
  string url = "dialog.html";

  // optional custom catalog applied to UI
  UICatalog cat(LANG_NO_LANG); // recent system language
  /* If custom catalog is available, apply it for next UI call so that HTML templates
   * can use XML processing instruction <?text name?> to refer custom texts.
   * If custom catalog is not available, the previous catalog is disabled.
   * This all happens for this dialog only and the previous catalog is restored
   * by UICatalog object once uiInvokeURL()/uiInvokeURLAsync() returns. */
  cat.setUIGlobal(UICatalog::Extern);

  // HTML template
  if (templateID != 1)
  {
    char file[32];
    sprintf(file, "template_e_%03d.html", templateID);
    url = gui_getResourceFile(file, true, false); // lookup templates external user config folders only

    if (url.empty())
    {
      _LOGF_ERROR("%s: Template file '%s' not found in resources", __FUNCTION__, file);
      return RESULT_FAIL;
    }
  }

  // compatibility mode: no dialog options provided (do the same as in old SDI versions)
  if (options & DLG_ExtDialogCompat)
  {
    // abort running dialog, if an inserted card is removed
    if (isCardRemoved() == 0)
    {
      options |= DLG_AbortOnCardRemove;
    }

    if (confirm)
    {
      /* confirm==1 means a synchronous dialog with cancel/enter button
       * returning the result with return code (see old SDI server code below) */
      options |= (DLG_CancelKey | DLG_EnterKey); // adds vars "key_enter==1" and "key_cancel==1" for the dialog
    }
    else if (!timeout)
    {
      /* confirm==0 and timeout==0 means an asynchronous dialog, which stores
       * cancel/clear button as special keys (returned by ui_getAsyncResult() afterwards) */
      options |= (DLG_Async | DLG_CancelKey | DLG_ClearKey | DLG_StoreAsyncResult);

      // hide softkeys/helpers (only devices having a physical keyboard)
      if (has_keypad())
      {
        options |= DLG_HideSoftKeys; // add var "hide_softkeys==1" for the dialog
      } // else devices with touch-only, show softkeys

      // if default template is used
      if (templateID == 1)
      {
        /* disable special key error mapping (see async_dialog_cb()),
         * since dialog.html uses well-known UI error codes */
        options &= ~DLG_ExtDialogCompat;
      }
      else
      {
        /* for old external templates >1, activate special keys (for confirm==0 and timeout==0),
         * error code -100 and -101 are mapped with option DLG_ExtDialogCompat (see async_dialog_cb()) */
        value["key_special"] = "1";
      }
    }
  } // end compatibility mode

  return gui_dialog("", options, timeout == 0 ? -1 : (int)timeout, &value, 0, url.c_str(), raw_ui_error);
}

static int gui_dispHtmlDialog(const string &htmlFileName, stringmap &value, int timeout,
                              Language lang, int opts, int *raw_ui_error)
{
  if (htmlFileName.find('/') != string::npos)
  {
    _LOGF_ERROR("%s: Path not allowed for HTML file name '%s'", __FUNCTION__, htmlFileName.c_str());
    return RESULT_FAIL;  // path is not allowed
  }

  // external www directory
  string ext_www_dir = pathcat(sdi::filesystem::ext_config_dir(), "www");

  // custom dialogs are provided in ext. config folder with an user config package
  string html_file = gui_getResourceFile(htmlFileName, false, false, ext_www_dir); // look up file by path

  string css;

  if (!html_file.empty())
  {
    _LOGF_INFO("%s: HTML file name '%s' found in ext. config folder: %s",
               __FUNCTION__, htmlFileName.c_str(), ext_www_dir.c_str());
    // if dialog is provided with user config, we look up custom.css from there
    css = gui_getResourceFile("custom.css", false, false, ext_www_dir);

    if (css.empty())
    {
      // look up the empty CSS file to reset previous CSS file
      css = gui_getResourceFile("empty.css", false, true);
    }
  }
  else
  {
    _LOGF_ERROR("%s: HTML file name '%s' not found in folder '%s'",
                __FUNCTION__, htmlFileName.c_str(), ext_www_dir.c_str());
    return RESULT_FAIL;
  }

  /* NOTE: External dialogs have the following restrictions:
   *       1. Disabled filesystem access. If this feature will be required in future,
   *          we might set a separate subfolder under home_flash_dir() as UI_PROP_JS_ROOT,
   *          where custom dialogs could store data persistently. In this case, a quota should
   *          be applied as limitation, see UI_PROP_JS_QUOTA_ROOT, UI_PROP_JS_QUOTA_SIZE.
   *       2. Disabled printer access: If this feature will be required in future,
   *          we might set a separate subfolder 'print' under ext_www_dir as UI_PROP_PRINT_ROOT,
   *          where custom dialogs could look up printer resource files. In the same step, this
   *          will enable printer support. */
  string jsroot = ""; // disable file access
  string prtroot = ""; // disable printer access
  // setup terminal and default resource diretory
  string resource_dir = uiGetTerminalResourceDir(ext_www_dir);
  string resource_default = pathcat(ext_www_dir, "default");

  int r = UI_ERR_OK;

  DlgCbData cbd(opts);

  // add timeout (as private variable using prefix _)
  value["_timeout"] = uiPrint("%d", timeout < 0 ? -1 : timeout);

  if (uiGetLocalProperties())
  {
    string old_resource, old_default, old_cpapp, old_jsroot, old_prtroot, old_css;
    int old_mode;

    // store old configuration
    uiGetPropertyString(UI_PROP_RESOURCE_PATH, old_resource);
    uiGetPropertyString(UI_PROP_RESOURCE_DEFAULT_PATH, old_default);
    uiGetPropertyString(UI_PROP_CP_APP_DIR, old_cpapp);
    uiGetPropertyString(UI_PROP_JS_ROOT, old_jsroot);
    uiGetPropertyString(UI_PROP_PRINT_ROOT, old_prtroot);
    uiGetPropertyString(UI_PROP_CSS, old_css);
    uiGetPropertyInt(UI_PROP_CP_APP_MODE, &old_mode);

    // activate CP App restrictions
    uiSetPropertyString(UI_PROP_RESOURCE_PATH, resource_dir);
    uiSetPropertyString(UI_PROP_RESOURCE_DEFAULT_PATH, resource_default);
    uiSetPropertyString(UI_PROP_CP_APP_DIR, ext_www_dir);
    uiSetPropertyString(UI_PROP_JS_ROOT, jsroot);
    uiSetPropertyString(UI_PROP_PRINT_ROOT, prtroot);
    uiSetPropertyString(UI_PROP_CSS, css);
    uiSetPropertyInt(UI_PROP_CP_APP_MODE, 1);

    // load the catalog custom-<lang>.ctlg
    UICatalog cat(lang, ext_www_dir);

    /* If custom catalog is available, apply it for next UI call so that HTML dialog
     * can use XML processing instruction <?text name?> to refer custom texts.
     * If custom catalog is not available, the previous catalog is disabled.
     * This all happens for this dialog only and the previous catalog is
     * is restored once uiInvokeURL() below returns. */
    if (!cat.setUIGlobal(UICatalog::Extern))
    {
      _LOGF_ERROR("%s: Failed to load external catalog for language ID '%d': %s",
                  __FUNCTION__, lang, cat.error().c_str());
    }

    r = uiInvokeURL(value, htmlFileName, dialog_cb, &cbd);

    // restore configuration
    uiSetPropertyInt(UI_PROP_CP_APP_MODE, old_mode);
    uiSetPropertyString(UI_PROP_RESOURCE_PATH, old_resource);
    uiSetPropertyString(UI_PROP_RESOURCE_DEFAULT_PATH, old_default);
    uiSetPropertyString(UI_PROP_CP_APP_DIR, old_cpapp);
    uiSetPropertyString(UI_PROP_CSS, old_css);
    uiSetPropertyString(UI_PROP_JS_ROOT, old_jsroot);
    uiSetPropertyString(UI_PROP_PRINT_ROOT, old_prtroot);
  }
  else
  {
    uiSetLocalProperties(true);

    uiSetPropertyString(UI_PROP_RESOURCE_PATH, resource_dir);
    uiSetPropertyString(UI_PROP_RESOURCE_DEFAULT_PATH, resource_default);
    uiSetPropertyString(UI_PROP_CP_APP_DIR, ext_www_dir);
    uiSetPropertyString(UI_PROP_JS_ROOT, jsroot);
    uiSetPropertyString(UI_PROP_PRINT_ROOT, prtroot);
    uiSetPropertyString(UI_PROP_CSS, css);
    uiSetPropertyInt(UI_PROP_CP_APP_MODE, 1);

    // load the catalog custom-<lang>.ctlg
    UICatalog cat(lang, ext_www_dir);

    /* If custom catalog is available, apply it for next UI call so that HTML dialog
     * can use XML processing instruction <?text name?> to refer custom texts.
     * If custom catalog is not available, the previous catalog is disabled.
     * This all happens for this dialog only. The previous catalog is
     * is restored, for which uiSetLocalProperties(false) will care about. */
    if (!cat.setUIGlobal(UICatalog::Extern, false))
    {
      _LOGF_ERROR("%s: Failed to load external catalog for language ID '%d': %s",
                  __FUNCTION__, lang, cat.error().c_str());
    }

    r = uiInvokeURL(value, htmlFileName, dialog_cb, &cbd);

    uiSetLocalProperties(false);
  }

  if (raw_ui_error)
  {
    *raw_ui_error = r;
  }

  int result = RESULT_FAIL;

  switch (r)
  {
    case UI_ERR_OK:
      result = RESULT_OK;
      break;

    case UI_ERR_TIMEOUT:
      result = RESULT_TIMEOUT;
      break;

    case UI_ERR_ABORT:
      result = RESULT_USER_CANCEL;
      break;

    default:
      if (cbd.retval != RESULT_OK)
      {
        result = cbd.retval;
        break;
      }

      result = RESULT_FAIL;
      break;
  }

  // clear dialog (map option MENU_NoLEDs to DLG_NoLEDs)
  if (opts & DLG_ClearOnReturn)
  {
    gui_clear();
  }

  return result;
}


static int gui_dispMenu(stringmap &value, unsigned options, int timeout, int *raw_ui_error)
{
  int result = RESULT_FAIL;

  if (timeout > 0)
  {
    value["timeout"] = uiPrint("%d", timeout);
  }
  else
  {
    value["timeout"] = "-1";
  }

  value["led_area"] = (leds_enabled && !(options & MENU_NoLEDs)) ? "1" : "0";
  value["has_touch"] = has_touch() ? "1" : "0";
  value["has_keypad"] = has_keypad() ? "1" : "0";

  if (options & MENU_NoHeader)
  {
    value["header_logo"] = "0"; // disable header logo
    value.erase("header_text"); // remove headline text by option
  }

  int opts = 0; // mapped options for dialog_cb

  // let removed card abort dialog
  if (options & MENU_AbortOnCardRemove)
  {
    opts |= DLG_AbortOnCardRemove;
  }

  // ignore external aborts by mobile device
  if (options & MENU_IgnoreExtAbort)
  {
    opts |= DLG_IgnoreExtAbort;
  }

  DlgCbData cbd_menu(opts);
  int r = uiInvokeURL(value, "menu.html", dialog_cb, &cbd_menu);

  if (raw_ui_error)
  {
    *raw_ui_error = r;
  }

  switch (r)
  {
    case UI_ERR_TIMEOUT:
      result = RESULT_TIMEOUT;
      break;

    case UI_ERR_ABORT:
      result = RESULT_USER_CANCEL;
      break;

    default:
      if (r >= UI_ERR_OK)
      {
        result = r;  // selected menu item (or a key action with another positive value)
        break;
      }

      if (cbd_menu.retval != RESULT_OK)
      {
        result = cbd_menu.retval;
        break;
      }

      result = RESULT_FAIL;
      break;
  }

  // clear dialog (map option MENU_NoLEDs to DLG_NoLEDs)
  if (options & MENU_ClearOnReturn)
  {
    gui_clear((options & MENU_NoLEDs) ? DLG_NoLEDs : 0);
  }

  return result;
}

static int gui_secureInput(const string &textKey,
                           Language lang,
                           stringmap &value,
                           unsigned short timeout,
                           char maskingCharacter,
                           char *inputFormatString,
                           unsigned char forceMinPanLenTo7 = 0,
                           unsigned char *amount = 0,
                           unsigned short currency = 0
                          )
{
  map<string, int> minLength;
  bool             cvvByPassAllowed = false;
  stringmap val_in;
  val_in.swap(value); // take over input values and clear output values
  stringmap val_ui;   // values passed to ADKGUI

  UICatalog cat(lang);

  /* If custom catalog is available, apply it for next UI call so that HTML dialog
   * can use XML processing instruction <?text name?> to refer custom texts.
   * All required SDI texts from internal catalog are looked up by getText().
   * If custom catalog is not available, the previous catalog is disabled.
   * This all happens for this dialog only and the previous catalog is restored
   * by UICatalog object once uiInvokeURL()/uiInvokeURLAsync() returns. */
  if (!cat.setUIGlobal(UICatalog::Extern))
  {
    _LOGF_ERROR("%s: Failed to load external catalog for language ID '%d': %s", __FUNCTION__, lang, cat.error().c_str());
    return RESULT_FAIL;
  }

  string ui_text = cat.getText(textKey, "");

  if (amount)
  {
    string dsep, tsep;

    dsep = cat.getText(TXT_DECIMAL_SEPARATOR, "N/A");

    if (dsep == "N/A")
    {
      dsep = ".";
    }

    tsep = cat.getText(TXT_THOUSAND_SEPARATOR, "N/A");

    if (tsep == "N/A")
    {
      tsep = "";
    }

    short currExp = getCurrencyExponent(currency);

    if (currExp < 0)
    {
      _LOGF_ERROR("%s: currency exponent invalid", __FUNCTION__);
      return RESULT_PARAMETER_ERROR;
    }

    string amount_str = bcdToAmountStr(amount, 6, (dsep.empty() ? 0 : (unsigned)currExp), dsep, tsep);

    if (amount_str.empty())
    {
      _LOGF_ERROR("%s: amount format error", __FUNCTION__);
      return RESULT_PARAMETER_ERROR;
    }

    val_ui["amount"] = amount_str;
  }

  if (currency)
  {
    val_ui["curr"] = getCurrencyName(currency);
  }

  if ((textKey == TXT_SECURE_INPUT_01_POSTAL_CODE ||
       textKey == TXT_SECURE_INPUT_06_VERIFY_POSTAL_CODE ||
       textKey == TXT_SECURE_INPUT_02_CVV ||
       textKey == TXT_SECURE_INPUT_07_VERIFY_CVV ||
       textKey == TXT_SECURE_INPUT_FF_MANUAL_CARD_ENTRY) &&
      inputFormatString != NULL)
  {
    size_t startPos = 0;
    size_t startPosName = 0;
    size_t endPos = 0;
    char   maxLength[10] = {0};
    unsigned int i;
    string mask = "";

    sprintf(maxLength, "%zu", strlen(inputFormatString) - 2);

    // Generate alternative mask
    for (i = 0; i < strlen(inputFormatString) - 2; i++)
    {
      mask.append("*");
    }

    // Alternative input format string received, modify the text for the secure input
    if (textKey == TXT_SECURE_INPUT_01_POSTAL_CODE ||
        textKey == TXT_SECURE_INPUT_06_VERIFY_POSTAL_CODE)
    {
      // Check the validity of the alternative format string
      if (strlen(inputFormatString) > 21)
      {
        return RESULT_FAIL;
      }

      // Set start position for later search to the begin of the name
      startPosName = ui_text.find("ZIP", 0);

      if (startPosName == string::npos)
      {
        startPosName = 0;
      }

      // Overwrite the format string comment in the text
      startPos = ui_text.find("[NNNNnn]", startPosName);

      if (startPos != string::npos)
      {
        ui_text.replace(startPos, 8, inputFormatString);
      }
    }
    else if (textKey == TXT_SECURE_INPUT_02_CVV ||
             textKey == TXT_SECURE_INPUT_07_VERIFY_CVV ||
             textKey == TXT_SECURE_INPUT_FF_MANUAL_CARD_ENTRY)
    {
      // Check the validity of the alternative format string
      if (strncmp(inputFormatString, "[NNN]", 5) != 0 &&
          strncmp(inputFormatString, "[NNNN]", 6) != 0 &&
          strncmp(inputFormatString, "[NNNn]", 6) != 0 &&
          strncmp(inputFormatString, "[BBB]", 5) != 0 &&
          strncmp(inputFormatString, "[BBBB]", 6) != 0 &&
          strncmp(inputFormatString, "[BBBb]", 6) != 0)
      {
        return RESULT_FAIL;
      }

      // Detect CVV bypass for manual card data entry only
      if ((textKey == TXT_SECURE_INPUT_02_CVV ||
           textKey == TXT_SECURE_INPUT_FF_MANUAL_CARD_ENTRY) &&
          (strncmp(inputFormatString, "[BBB]", 5) == 0 ||
           strncmp(inputFormatString, "[BBBB]", 6) == 0 ||
           strncmp(inputFormatString, "[BBBb]", 6) == 0))
      {
        cvvByPassAllowed = true;

        // Replace 'B' and 'b' with 'N' and 'n'
        for (i = 1; i < strlen(inputFormatString) - 1; i++)
        {
          inputFormatString[i] += 12;
        }
      }

      // Set start position for later search to the begin of the name
      startPosName = ui_text.find("CVV", 0);

      if (startPosName == string::npos)
      {
        startPosName = 0;
      }

      // Overwrite the format string comment
      startPos = ui_text.find("[NNNn]", startPosName);

      if (startPos != string::npos)
      {
        ui_text.replace(startPos, 6, inputFormatString);
      }
    }

    if (startPosName == string::npos)
    {
      startPosName = 0;
    }

    // Update size value in the text
    startPos = ui_text.find("size=\"", startPosName) + 6;
    endPos = ui_text.find("\"", startPos);

    if (startPos != string::npos && endPos != string::npos)
    {
      ui_text.replace(startPos, endPos - startPos, maxLength);
    }

    // Update maxlength value in the text
    startPos = ui_text.find("maxlength=\"", startPosName) + 11;
    endPos = ui_text.find("\"", startPos);

    if (startPos != string::npos && endPos != string::npos)
    {
      ui_text.replace(startPos, endPos - startPos, maxLength);
    }

    // Replace the mask in the text
    startPos = ui_text.find("mask=\"", startPosName) + 6;
    endPos = ui_text.find("\"", startPos);

    if (startPos != string::npos && endPos != string::npos)
    {
      ui_text.replace(startPos, endPos - startPos, mask.c_str());
    }
  }

  if ((textKey == TXT_SECURE_INPUT_FC_CARD_NUMBER ||
       textKey == TXT_SECURE_INPUT_FE_MANUAL_CARD_ENTRY_WITHOUT_CVV ||
       textKey == TXT_SECURE_INPUT_FF_MANUAL_CARD_ENTRY) &&
      forceMinPanLenTo7 == 0x01)
  {
    size_t startPos = 0;
    size_t startPosName = 0;

    // Set start position for later search to the begin of the name
    startPosName = ui_text.find("PAN", 0);

    if (startPosName == string::npos)
    {
      startPosName = 0;
    }

    // Overwrite the format string comment in the text
    startPos = ui_text.find("[NNNNNNNNNNnnnnnnnnn]", startPosName);

    if (startPos != string::npos)
    {
      ui_text.replace(startPos, 21, "[NNNNNNNnnnnnnnnnnnn]");
    }
  }

  //  minLength = ui_getInputMinLength(ui_text);
  for (stringmap::iterator iterator = val_in.begin(); iterator != val_in.end(); ++iterator)
  {
    size_t pos = ui_text.find(iterator->second.data());

    if (pos == string::npos)
    {
      continue;
    }

    string help = ui_text.substr(pos);
    minLength[iterator->second.c_str()] = ui_getInputMinLength(help);
  }

  int echoChar;
  uiGetPropertyInt(UI_PROP_PASSWORD_CHAR, &echoChar);

  if (maskingCharacter != 0)
  {
    size_t found = ui_text.find("mask");

    if (found != std::string::npos)
    {
      ui_text.replace(found, strlen("mask"), "password");
    }

    uiSetPropertyInt(UI_PROP_PASSWORD_CHAR, maskingCharacter);
  }

  // Use custom specific decimal/thousand separators if configured for amount entry
  if (textKey == TXT_SECURE_INPUT_0B_GRATUITY_AMOUNT ||
      textKey == TXT_SECURE_INPUT_0D_CASHBACK_AMOUNT ||
      textKey == TXT_SECURE_DISP_AMOUNT_AND_INPUT_0E_TIP)
  {
    string dsep, tsep;

    dsep = cat.getText(TXT_DECIMAL_SEPARATOR, "N/A");

    if (dsep != "N/A")
    {
      val_ui["d_sep"] = dsep;
    }

    tsep = cat.getText(TXT_THOUSAND_SEPARATOR, "N/A");

    if (tsep != "N/A")
    {
      val_ui["t_sep"] = tsep;
    }

    short currExponent = getCurrencyExponent(currency);

    if (currExponent < 0)
    {
      _LOGF_ERROR("%s: Invalid Currency (0x%04X)", __FUNCTION__, currency);
      return RESULT_PARAMETER_ERROR;
    }
    else
    {
      char currExponentStr[] = "0";
      currExponentStr[0] += (char)currExponent;
      val_ui["currExp"] = currExponentStr;
    }
  }

  // Suppress logging of secure input data in GUI
  stringmap::iterator it;

  for (it = val_in.begin(); it != val_in.end(); ++it)
  {
    val_ui["_loghide"].append(it->second.c_str());
    stringmap::iterator it2 = it;

    if (++it2 != val_in.end())
    {
      // Add comma separated list of variables
      val_ui["_loghide"].append(",");
    }

    //    --it;
  }

  // invoke dialog as long as minimal input length is not given
  int ret = RESULT_FAIL;

  while (1)
  {
    ret = gui_dialog(ui_text, DLG_CancelKey | DLG_EnterKey, timeout == 0 ? -1 : (int)timeout, &val_ui);

    if (ret != RESULT_OK)
    {
      break;
    }

    stringmap::iterator iterator;

    for (iterator = val_in.begin(); iterator != val_in.end(); ++iterator)
    {
      // Check if all data completely entered
      if (val_ui[iterator->second].length() < (unsigned int) minLength[iterator->second])
      {
        if ((iterator->second.compare("CVV") == 0) &&
            cvvByPassAllowed == true &&
            val_ui[iterator->second].length() == 0)
        {
          continue;
        }

        // Entered data doesn't have the minimum length
        break;
      }

      if ((iterator->second.compare("BIRTHDAY") == 0) &&
          verifyDate(val_ui[iterator->second].c_str(), "MMDDYYYY") == 0)
      {
        // Entered data are not a correct birthday
        break;
      }

      if ((iterator->second.compare("DATE") == 0) &&
          verifyDate(val_ui[iterator->second].c_str(), "MMYY") == 0)
      {
        // Entered data are not a correct expiry date
        break;
      }
    }

    // we're done if all values have minimal length
    if (iterator == val_in.end())
    {
      // only overtake input data from UI result
      for (iterator = val_in.begin(); iterator != val_in.end(); ++iterator)
      {
        if (textKey == TXT_SECURE_DISP_AMOUNT_AND_INPUT_0E_TIP && iterator->second.compare("AMOUNT") != 0)
        {
          continue;
        }

        value[iterator->second] = val_ui[iterator->second];
      }

      break;
    }
  }

  // restore password character
  if (maskingCharacter != 0)
  {
    uiSetPropertyInt(UI_PROP_PASSWORD_CHAR, echoChar);
  }

  gui_clear();

  return ret;
}

static int gui_signatureCapture(Language lang, stringmap &value, unsigned short timeout)
{
  int result = RESULT_FAIL;

  if (!has_touch())
  {
    _LOGF_ERROR("%s: Device has no touch screen!", __FUNCTION__);
    return RESULT_FAIL;
  }

  UICatalog cat(lang); // SDI default catalog
  string ui_text;

  // get signature field with HTML (mandatory)
  ui_text = cat.getText(TXT_SIGNATURE, "");

  if (ui_text.empty())
  {
    result = RESULT_FAIL;
    _LOGF_ERROR("%s: No text found for key '%s'!", __FUNCTION__, TXT_SIGNATURE);
    return result;
  }

  /* If custom catalog is available, apply it for next UI call so that HTML dialog
   * can use XML processing instruction <?text name?> to refer custom texts.
   * All required SDI texts from internal catalog are looked up by getText().
   * If custom catalog is not available, the previous catalog is disabled.
   * This all happens for this dialog only and the previous catalog is restored
   * by UICatalog object once uiInvokeURL()/uiInvokeURLAsync() returns. */
  if (!cat.setUIGlobal(UICatalog::Extern))
  {
    _LOGF_ERROR("%s: Failed to load external catalog for language ID '%d': %s", __FUNCTION__, lang, cat.error().c_str());
    return RESULT_FAIL;
  }

  result = gui_dialog(ui_text,
                      DLG_CancelKey | DLG_EnterKey | DLG_ClearOnReturn,
                      timeout == 0 ? -1 : (int)timeout,
                      &value);

  if (result == RESULT_OK)
  {
    for (stringmap::iterator iterator = value.begin(); iterator != value.end(); ++iterator)
    {
      _LOGF_INFO("%s: iterator: %s %s", __FUNCTION__, iterator->first.c_str(), iterator->second.c_str());
    }
  }
  else
  {
    _LOGF_ERROR("%s: %s", __FUNCTION__, errText(result));
  }

  return result;
}

static enum ui_async_result gui_getAsyncResult(bool reset, int *raw_ui_error)
{
  pthread_mutex_lock(&uiMutex);
  enum ui_async_result res = ui_async_result;

  // if the dialog has finished
  if (res > UI_AR_IN_PROGRESS)
  {
    if (raw_ui_error)
    {
      *raw_ui_error = ui_async_raw_error;
    }

    if (reset)  // reset result
    {
      ui_async_result = UI_AR_NONE;
      ui_async_raw_error = UI_ERR_OK;
    }
  }

  pthread_mutex_unlock(&uiMutex);
  return res;
}

static int gui_EnterPin(Language pinTextLanguage,
                        unsigned short timeout = 30,
                        unsigned char *pinBypass = 0,
                        unsigned opts = PIN_NoOpts,
                        unsigned char minPINLength = 4,
                        unsigned char maxPINLength = 12,
                        unsigned interchar_tout = 0,
                        stringmap *value = 0,
                        int password_char = '*')
{
  map<string, string> lvalue;

  if (!value)
  {
    value = &lvalue;
  }

  int retVal = RESULT_OK;
  int bypass_key = 0; // no bypass
  const char *pin_dialog = "pin.html"; // normal PIN entry

  // bypass key(s)
  if (pinBypass && *pinBypass != PINBypass_Disabled)
  {
    // allowed values: 1=clear key, 2=enter key (3 means both keys)
    switch ((*pinBypass) & (~PINBypass_DisableByDigit))
    {
      default:
      {
        _LOGF_ERROR("%s: Invalid bypass configuration '%d'", __FUNCTION__, (int)*pinBypass);
        return RESULT_FAIL;
      }

      case PINBypass_Disabled:
      {
        break; // ignore PINBypass_DisableByDigit without combined key
      }

      case PINBypass_Enter:   // enter key
      {
        bypass_key = 13; //  bypass key enter is enabled by option UI_PROP_PIN_BYPASS_KEY (see below)
        break;
      }

      case PINBypass_Clear:   // clear key
      {
        bypass_key = 8; // bypass key clear is enabled by option UI_PROP_PIN_BYPASS_KEY (see below)
        break;
      }

      case (PINBypass_Enter | PINBypass_Clear):  // enter and clear key
      {
        bypass_key = 13; // bypass key is enabled by option UI_PROP_PIN_BYPASS_KEY (see below)
        // bypass key clear is enabled by additional accesskey button in pin.html
        (*value)["bypass_key"] = "&#8;"; // use clear key as additional bypass key
        (*value)["bypass_retval"] = "2"; // 2 used as UI return code
        break;
      }
    }

    // disable bypass as soon as a digit has been entered
    if (bypass_key > 0 && ((*pinBypass) & PINBypass_DisableByDigit))
    {
      bypass_key += 1000; // ADKGUI uses offset 1000
    }

    (*pinBypass) &= ~PINBypass_DisableByDigit;
  }

  /* PIN entry allows to use an optional custom catalog file. Create it here to use it
   * for uiInvokeURL() and allow usage of <?text name?> in external custom catalog file.
   * For compatibility reasons, PIN text keys in internal text catalog do not use
   * <?text name?>, thus, getText() function below use priority UICatalog::ExtInt
   * to lookup texts from external and then (if not found) from internal catalog. */
  UICatalog cat(pinTextLanguage);

  if (opts & (PIN_NavigatorMode_1 | PIN_NavigatorMode_2))
  {
    if (!has_touch())
    {
      _LOGF_ERROR("%s: Device has no touch screen!", __FUNCTION__);
      return RESULT_FAIL;
    }

    // Navigator accessibility mode is active, use different PIN entry template
    (*value)["navigatorMode"] = (opts & PIN_NavigatorMode_1) ? "navigator" : "navigator2";

    // use navigator PIN dialog
    pin_dialog = "nav_pin.html";
  }
  else
  {
    if (!cat.valid(UICatalog::Intern))
    {
      _LOGF_ERROR("%s: No internal UI catalog for lang ID %d", __FUNCTION__, (int)pinTextLanguage);
      return RESULT_FAIL;
    }

    /* build the key for text catalog lookup
     * Please note that order of suffixes appended below is important !!! */
    string txtkey = "txt_sdi_pinmsg";

    // if amount/currency shall be displayed (or suppressed)
    if (opts & PIN_NoAmount) // suppress
    {
      value->erase("amount"); // remove amount
      value->erase("curr");   // remove currency
    }
    else if (value->find("amount") != value->end() && value->find("curr") != value->end())
    {
      txtkey += "_amount";
    }

    // PIN bypass text
    if (pinBypass && *pinBypass != PINBypass_Disabled)
    {
      string bpkey = "txt_sdi_bypass";

      // Enter key allowed to bypass PIN
      if ((*pinBypass) & PINBypass_Enter)
      {
        bpkey += "_enter";
      }

      // Clear key allowed to bypass PIN
      if ((*pinBypass) & PINBypass_Clear)
      {
        bpkey += "_clear";
      }

      string bptxt = cat.getText(bpkey, "", UICatalog::ExtInt);

      if (!bptxt.empty())
      {
        (*value)["bypass"] = bptxt;
        txtkey += "_bypass";
      }
    }

    // if card app label shall be displayed (or suppressed)
    if (opts & PIN_NoCardAppLabel) // suppress
    {
      value->erase("prefname"); // remove it
    }
    // if exist, use application preferred name already added to value map
    else if (value->find("prefname") != value->end())
    {
      txtkey += "_prefname";
    }

    // lookup PIN prompt text
    string ui_text = cat.getText(txtkey, "", UICatalog::ExtInt);

    if (ui_text.empty())
    {
      _LOGF_ERROR("%s: No text found in catalog files for key '%s'", __FUNCTION__, txtkey.c_str());
      return RESULT_FAIL;
    }

    (*value)["msgPIN"] = ui_text;

    /* PIN disclaimer (internal lookup only, since catalog uses
     * <?custom ...?> to refer custom variable 'pin_disclaimer') */
    string disclaimer = cat.getText(TXT_PIN_DISCLAIMER, "", UICatalog::Intern);

    if (!disclaimer.empty())
    {
      (*value)["msgPIN2"] = disclaimer;
    }

    if (opts & PIN_NoHeader)
    {
      (*value)["header_logo"] = "0"; // disable header logo
      value->erase("header_text"); // remove headline text by option
    }
  }

  if (retVal == RESULT_OK)
  {
    int r, pinAlgo, autoEnter, clearAll, echoChar, bypassKey, icharTout;

    // backup current properties
    uiGetPropertyInt(UI_PROP_PIN_ALGORITHM, &pinAlgo);
    uiGetPropertyInt(UI_PROP_PASSWORD_CHAR, &echoChar);
    uiGetPropertyInt(UI_PROP_PIN_AUTO_ENTER, &autoEnter);
    uiGetPropertyInt(UI_PROP_PIN_BYPASS_KEY, &bypassKey);
    uiGetPropertyInt(UI_PROP_PIN_CLEAR_ALL, &clearAll);
    uiGetPropertyInt(UI_PROP_PIN_INTERCHAR_TIMEOUT, &icharTout);

    // set properties
    uiSetPropertyInt(UI_PROP_PIN_ALGORITHM, 0x0A);
    uiSetPropertyInt(UI_PROP_PASSWORD_CHAR, password_char);
    uiSetPropertyInt(UI_PROP_PIN_AUTO_ENTER, (opts & PIN_AutoEnter) ? 1 : 0);
    uiSetPropertyInt(UI_PROP_PIN_CLEAR_ALL, (opts & PIN_ClearAllDigits) ? 1 : 0);
    uiSetPropertyInt(UI_PROP_PIN_BYPASS_KEY, bypass_key);
    uiSetPropertyInt(UI_PROP_PIN_INTERCHAR_TIMEOUT, interchar_tout);

    // Convert minimum and maximum PIN digits to a string
    (*value)["minPinLen"] = uiPrint("%d", minPINLength);
    (*value)["maxPinLen"] = uiPrint("%d", maxPINLength);

    if (timeout)
    {
      (*value)["timeout"] = uiPrint("%u", timeout);
    }

    (*value)["led_area"] = (leds_enabled && !(opts & PIN_NoLEDs)) ? "1" : "0";
    (*value)["has_touch"] = has_touch() ? "1" : "0";
    (*value)["has_keypad"] = has_keypad() ? "1" : "0";

    // mapped options for dialog_cb
    int options = 0; // default: check4Interrupt() aborts dialog

    if (opts & PIN_AbortOnCardRemove)
    {
      options |= DLG_AbortOnCardRemove;  // let removed card abort dialog
    }

    if (opts & PIN_IgnoreExtAbort)
    {
      options |= DLG_IgnoreExtAbort;  // ignore check4Interrupt()
    }

    /* If custom catalog is available, apply it for next UI call so that HTML dialog
     * can use XML processing instruction <?text name?> to refer custom texts.
     * All required SDI texts from internal catalog are looked up by getText().
     * If custom catalog is not available, the previous catalog is disabled.
     * This all happens for this dialog only and the previous catalog is restored
     * by UICatalog object once uiInvokeURL()/uiInvokeURLAsync() returns. */
    cat.setUIGlobal(UICatalog::Extern);

    /* Since ADKGUI provides the same UI_ERR_TIMEOUT for both dialog timeout and interchar timeout, we
     * measure time of uiInvokeURL(). In case uiInvokeURL() returns UI_ERR_TIMEOUT, but duration is below
     * the overall PIN entry timeout, only the interchar timeout can be the reason for this timeout. */
    sdi::TimeStamp start = sdi::TimeStamp::Monotonic();
    DlgCbData cbd_pin(options);
    r = uiInvokeURL(*value, pin_dialog, dialog_cb, &cbd_pin);
    sdi::TimeStamp end = sdi::TimeStamp::Monotonic();

    // restore old properties
    uiSetPropertyInt(UI_PROP_PIN_ALGORITHM, pinAlgo);
    uiSetPropertyInt(UI_PROP_PASSWORD_CHAR, echoChar);
    uiSetPropertyInt(UI_PROP_PIN_AUTO_ENTER, autoEnter);
    uiSetPropertyInt(UI_PROP_PIN_BYPASS_KEY, bypassKey);
    uiSetPropertyInt(UI_PROP_PIN_CLEAR_ALL, clearAll);
    uiSetPropertyInt(UI_PROP_PIN_INTERCHAR_TIMEOUT, icharTout);

    // init bypass result
    if (pinBypass)
    {
      *pinBypass = 0;

      // remove the offset (if set)
      if (bypass_key > 1000)
      {
        bypass_key -= 1000;
      }
    }

    switch (r)
    {
      case UI_ERR_OK:
      {
        map<string, string>::iterator i = value->find("pin");

        if (i == value->end())
        {
          retVal = RESULT_FAIL;
          break;
        }

        int digits;

        if (sscanf(i->second.c_str(), "%d", &digits) == 1)
        {
          retVal = RESULT_OK;
          break;
        }
        else if (i->second == "bypass" && pinBypass)
        {
          *pinBypass = 1;  // bypass with Enter

          if (bypass_key == 8)
          {
            *pinBypass = 2;  // bypass with Clear
          }

          retVal = RESULT_OK;
          break;
        }
        else if (i->second == "cancel")
        {
          retVal = RESULT_USER_CANCEL;
          break;
        }

        retVal = RESULT_FAIL;
        break;
      }

      case 2: // additional bypass key clear was pressed
        if (pinBypass)
        {
          *pinBypass = 2;  // bypass with clear
          retVal = RESULT_OK;
          break;
        }

        retVal = RESULT_FAIL;
        break;

      case UI_ERR_TIMEOUT:
        if (interchar_tout > 0 && end < start + timeout * sdi::TimeStamp::S)
        {
          retVal = RESULT_INTERCHAR_TIMEOUT;
          break;
        }

        retVal = RESULT_TIMEOUT;
        break;

      case UI_ERR_ABORT:
        retVal = RESULT_USER_CANCEL;
        break;

      case UI_ERR_PIN_ENTRY_DENIED:
        retVal = RESULT_EXCESSIVE_PIN_REQUESTS;
        break;

      default:
        if (cbd_pin.retval != RESULT_OK)
        {
          retVal = cbd_pin.retval;
          break;
        }

        retVal = RESULT_FAIL;
        break;
    }
  }

  // clear dialog (map option MENU_NoLEDs to DLG_NoLEDs)
  if (opts & PIN_ClearOnReturn)
  {
    gui_clear((opts & PIN_NoLEDs) ? DLG_NoLEDs : 0);
  }

  return retVal;
}

static void gui_enableLEDs(bool enable)
{
  // only enable virtual CTLS LEDs, if we have no physical CTLS LEDs
  leds_enabled = has_ctls_leds() ? false : enable;
}

static void gui_dispLEDs(unsigned char leds)
{
  // if physical CTLS LEDs exists, virtual CTLS LEDs are not used
  if (has_ctls_leds())
  {
    return;
  }

  unsigned char ledsToChange = oldLeds ^ leds;

  // Check if 1st LED has to be changed
  if (ledsToChange & CONTACTLESS_LED_0)
  {
    uiSetLED(0, (leds & CONTACTLESS_LED_0) != 0);
  }

  // Check if 2nd LED has to be changed
  if (ledsToChange & CONTACTLESS_LED_1)
  {
    uiSetLED(1, (leds & CONTACTLESS_LED_1) != 0);
  }

  // Check if 3rd LED has to be changed
  if (ledsToChange & CONTACTLESS_LED_2)
  {
    uiSetLED(2, (leds & CONTACTLESS_LED_2) != 0);
  }

  // Check if 4th LED has to be changed
  if (ledsToChange & CONTACTLESS_LED_3)
  {
    uiSetLED(3, (leds & CONTACTLESS_LED_3) != 0);
  }

  // Save the status of the LEDs
  oldLeds = leds;
  return;
}

static int gui_confirmTextKey(const string &textKey, Language language, stringmap *value = 0, unsigned short timeout = 30)
{
  stringmap lvalue;

  if (!value)
  {
    value = &lvalue;  // if not provided, use local empty value map
  }

  UICatalog cat(language);

  /* If custom catalog is available, apply it for next UI call so that HTML dialog
   * can use XML processing instruction <?text name?> to refer custom texts.
   * All required SDI texts from internal catalog are looked up by getText().
   * If custom catalog is not available, the previous catalog is disabled.
   * This all happens for this dialog only and the previous catalog is restored
   * by UICatalog object once uiInvokeURL()/uiInvokeURLAsync() returns. */
  if (!cat.setUIGlobal(UICatalog::Extern))
  {
    _LOGF_ERROR("%s: Failed to load external catalog for language ID '%d': %s",
                __FUNCTION__, language, cat.error().c_str());
    return RESULT_FAIL;
  }

  string ui_text = cat.getText(textKey, "");

  if (ui_text.empty())
  {
    _LOGF_ERROR("%s: no text available for text key: %s", __FUNCTION__, textKey.c_str());
    return RESULT_FAIL;
  }

  return gui_dialog(ui_text,
                    DLG_CancelKey | DLG_EnterKey | DLG_ClearOnReturn | DLG_AbortOnCardRemove,
                    timeout == 0 ? -1 : (int)timeout, value);
}


static int gui_displayTextKey(const string &textKey,
                              Language language,
                              const string &trxTypeTextKey = TXT_NO_TXT,
                              unsigned char *amount = 0,
                              unsigned short currency = 0,
                              unsigned char special_key = 0,
                              unsigned char manual_card_data = 0)
{
  UICatalog cat(language);

  /* If custom catalog is available, apply it for next UI call so that HTML dialog
   * can use XML processing instruction <?text name?> to refer custom texts.
   * All required SDI texts from internal catalog are looked up by getText().
   * If custom catalog is not available, the previous catalog is disabled.
   * This all happens for this dialog only and the previous catalog is restored
   * by UICatalog object once uiInvokeURL()/uiInvokeURLAsync() returns. */
  if (!cat.setUIGlobal(UICatalog::Extern))
  {
    _LOGF_ERROR("%s: Failed to load external catalog for language ID '%d': %s",
                __FUNCTION__, language, cat.error().c_str());
    return RESULT_FAIL;
  }

  stringmap value;

  // check for mandatory UI text
  string ui_text = cat.getText(textKey, "");

  if (ui_text.empty())
  {
    _LOGF_ERROR("%s: no text available for text key: %s", __FUNCTION__, textKey.c_str());
    return RESULT_FAIL;
  }

  string ui_trxTypeText = cat.getText(trxTypeTextKey, "");

  if (!ui_trxTypeText.empty())
  {
    // Transaction Type Text
    value["ttt"] = ui_trxTypeText;
  }

  // call this dialog asynchronously
  int options = DLG_Async;

  // special_key means displaying CANCEL button and store it as special key
  if (special_key)
  {
    options |= (DLG_CancelKey | DLG_StoreAsyncResult);
  }

  // manual_card_data means displaying the CLEAR button and store it as special key
  if (manual_card_data)
  {
    options |= (DLG_ClearKey | DLG_StoreAsyncResult);
  }

  bool switchLEDArea = false;

  // check if CTLS logo needs to be displayed (depends on text ID)
  if (textKey == TXT_AMOUNT_TAP_CARD ||
      textKey == TXT_AMOUNT_INSERT_TAP_CARD ||
      textKey == TXT_AMOUNT_SWIPE_TAP_CARD ||
      textKey == TXT_AMOUNT_INSERT_SWIPE_TAP_CARD ||
      textKey == TXT_TAP_CARD ||
      textKey == TXT_INSERT_TAP_CARD ||
      textKey == TXT_SWIPE_TAP_CARD ||
      textKey == TXT_INSERT_SWIPE_TAP_CARD)
  {
    options |= DLG_CtlsLogo;

    if (!leds_enabled)
    {
      switchLEDArea = true;
    }
  }

  if (amount)
  {
    string dsep, tsep;

    dsep = cat.getText(TXT_DECIMAL_SEPARATOR, "N/A");

    if (dsep == "N/A")
    {
      dsep = ".";
    }

    tsep = cat.getText(TXT_THOUSAND_SEPARATOR, "N/A");

    if (tsep == "N/A")
    {
      tsep.clear();
    }

    short currExp = getCurrencyExponent(currency);

    if (currExp < 0)
    {
      _LOGF_ERROR("%s: currency exponent invalid", __FUNCTION__);
      return RESULT_PARAMETER_ERROR;
    }

    string amount_str = bcdToAmountStr(amount, 6, (dsep.empty() ? 0 : (unsigned)currExp), dsep, tsep);

    if (amount_str.empty())
    {
      _LOGF_ERROR("%s: amount format error", __FUNCTION__);
      return RESULT_PARAMETER_ERROR;
    }

    value["amount"] = amount_str;

    if (currency)
    {
      value["curr"] = getCurrencyName(currency);
    }
  }

  if (switchLEDArea)
  {
    gui_enableLEDs(true);
  }

  // display as asynchronous dialog
  int retVal = gui_dialog(ui_text, options, -1, &value);

  if (switchLEDArea)
  {
    gui_enableLEDs(false);
  }

  return retVal;
}

static int gui_idlescreen(const string &ui_text, int opts, int timeout, void *data = 0)
{
  string ui_logo;

  if (opts & IDLE_WaitLogo)
  {
    ui_logo = gui_getImageFile("wait.gif");
  }
  else
  {
    ui_logo = gui_getImageFile("cust_logo.png");
  }

  stringmap val;

  // use default idle screen text, if no custom text and custom logo are used
  if (ui_text.empty() && ui_logo.empty())
  {
    UICatalog syslang; // SDI catalog for current system language
    val["text"] = syslang.getText(TXT_IDLE_SCREEN, "");
  }
  else
  {
    if (!ui_text.empty())
    {
      val["text"] = ui_text;
    }

    if (!ui_logo.empty())
    {
      val["image_file"] = ui_logo;
    }
  }

  val["timeout"] = uiPrint("%d", timeout < 0 ? -1 : timeout);
  val["has_touch"] = has_touch() ? "1" : "0";
  val["has_keypad"] = has_keypad() ? "1" : "0";
  val["led_area"] = (leds_enabled && !(opts & IDLE_NoLEDs)) ? "1" : "0";
  val["key_menu"] = (opts & IDLE_MenuKey) ? "1" : "0"; // returns 0 (UI_OK)
  val["key_info"] = (opts & IDLE_InfoKey) ? "1" : "0"; // returns 1
  val["admin_mode"] = (opts & IDLE_AdminMode) ? "1" : "0"; // returns 2

  int r = uiInvokeURLAsync(val, "idle.html", async_idlescreen_cb, data);

  if (r >= 0)
  {
    return RESULT_OK;
  }

  return RESULT_FAIL;
}

/************************** class UICatalog ***************************/
/* The class is used crossover SDI sources, therefore, class          */
/* definition is provided with ui.h even available w/o HEADLESS only. */
/**********************************************************************/

// init static members
pthread_mutex_t UICatalog::m_mutex = PTHREAD_MUTEX_INITIALIZER;
map<string, string> UICatalog::catalog_cache;

UICatalog::UICatalog(sdi::Language lang, const std::string &www_dir)
{
  m_restore = false;
  set(lang, www_dir);
}

UICatalog::~UICatalog()
{
  MutexLock ml(&m_mutex);
  restore();
}

void UICatalog::restore()
{
  if (m_restore)
  {
    int ret = uiSetCatalog(m_old_catalog);

    if (ret != UI_ERR_OK)
    {
      _LOGF_ERROR("%s: uiSetCatalog(\"%s\") failed: %d", __FUNCTION__, m_old_catalog.c_str(), ret);
    }
  }

  m_restore = false;
  m_old_catalog.clear();
}

string UICatalog::find_catalog(const string &file, bool ext, const string &www_dir)
{
  /* optimize, if catalog was already used
   * Since another www directory may use same catalog file names
   * as SDI standard folders, we must combine www directory name
   * with file name to get an individual key for the map lookup.
   * Standard SDI folders use filename as key only. */
  string fkey = www_dir.empty() ? file : string(www_dir + "|" + file);

  map<string, string>::iterator it = catalog_cache.find(fkey);

  if (it != catalog_cache.end())
  {
    return it->second; // filename in cache
  }

  bool intern = !ext;

  if (!www_dir.empty())
  {
    // alternative www folder used -> disable lookup in standard www folders
    ext = intern = false;
  }

  string filename = gui_getResourceFile(file, ext, intern, www_dir);

  if (filename.empty())
  {
    return "";
  }

  // add to cache
  catalog_cache[fkey] = filename;
  return filename;
}

bool UICatalog::set(Language lang, const string &www_dir)
{
  MutexLock ml(&m_mutex);
  // if setUIGlobal() was called (with restore flag) we must recover the old catalog before switching to new one
  restore();
  m_ctlg_intern.clear();
  m_ctlg_extern. clear();
  m_error.clear();

  // map LANG_NO_LANG to system language
  if (lang == LANG_NO_LANG)
  {
    lang = SdiSysConfig::instance().getLanguageId();
  }

  string iso_code(getLanguageIsoCode(lang));

  if (iso_code.empty())
  {
    char err[128];
    snprintf(err, sizeof(err), "Language ID '0x%02X' invalid or not supported", lang);
    m_error = err;
    return false;
  }

  // find external catalog for this language
  string file = "custom-" + iso_code + ".ctlg";
  m_ctlg_extern = find_catalog(file, true, www_dir);

  /* don't lookup internal calalogs from external www folders and
   * check that interal catalog always exists for SDI www folders */
  if (www_dir.empty())
  {
    // find internal catalog for this language
    file = "sdi-" + iso_code + ".ctlg";
    m_ctlg_intern = find_catalog(file, false);

    if (m_ctlg_intern.empty())
    {
      // internal catalog mandatory (if SDI www folders are used)
      m_error = "Internal catalog for language'" + iso_code + "' not found";
      return false;
    }
  }
  else
  {
    if (m_ctlg_extern.empty())
    {
      // external catalog mandatory (if external www folder is used)
      m_error = "External catalog for language'" + iso_code + "' found";
      return false;
    }
  }

  // internal and/or external catalog available
  return true;
}

bool UICatalog::valid(Priority prio)
{
  MutexLock ml(&m_mutex);

  bool ret = false;

  switch (prio)
  {
    default:
    case Intern:
    {
      ret = !m_ctlg_intern.empty();
      break;
    }

    case Extern:
    {
      ret = !m_ctlg_extern.empty();
      break;
    }

    case ExtInt:
    case IntExt:
    {
      ret = (!m_ctlg_intern.empty() && !m_ctlg_extern.empty());
      break;
    }
  }

  return ret;
}

bool UICatalog::setUIGlobal(Priority prio, bool restore)
{
  MutexLock ml(&m_mutex);

  string *ctlg = 0;

  switch (prio)
  {
    default:
    case Intern:
    {
      ctlg = &m_ctlg_intern;
      break;
    }

    case Extern:
    {
      ctlg = &m_ctlg_extern;
      break;
    }

    case IntExt:
    {
      if (!m_ctlg_intern.empty())
      {
        ctlg = &m_ctlg_intern;
        break;
      }

      ctlg = &m_ctlg_extern;
      break;
    }

    case ExtInt:
    {
      if (!m_ctlg_extern.empty())
      {
        ctlg = &m_ctlg_extern;
        break;
      }

      ctlg = &m_ctlg_intern;
      break;
    }
  }

  m_old_catalog.clear();

  if (restore)
  {
    m_old_catalog = uiGetCatalog();
    m_restore = true;
  }

  int ret = uiSetCatalog(!ctlg ? "" : *ctlg);

  if (ret != UI_ERR_OK)
  {
    vector<char> err;
    err.resize((!ctlg ? 0 : ctlg->length()) + 129); // 128 for additional text below
    err[err.size() - 1] = 0; // ensure C-string
    snprintf(&err[0], err.size() - 1, "uiSetCatalog(\"%s\") failed with '%d'", !ctlg ? "" : ctlg->c_str(), ret);
    m_error = (const char *)&err[0];
    m_old_catalog.clear();
    return false;
  }

  return true;
}

bool UICatalog::textSubstitute(string &in, const std::string &deflt, int max_passes)
{
  if (max_passes == 0)
  {
    return false;
  }

  string out;
  out.reserve(in.length());

  string::size_type a, b, b2, c; /*  ... ?> ....  <?text/custom  ... ?>  *
                                  *        ^a       ^b         ^b2   ^c  */

  // scan for opening <?
  for (a = b = 0; (b = in.find("<?", b)) != string::npos; b = c + 2)
  {
    b += 2; // skip <?
    // scan for closing ?>
    c = in.find("?>", b);

    if (c == string::npos)
    {
      break;
    }

    // scan for end of processor name
    for (b2 = b; b2 < c && !isspace((unsigned char)in[b2]); b2++);

    string proc = in.substr(b, b2 - b);

    if (proc != "text" && proc != "custom")
    {
      // processor name not "text" or "custom"
      continue;
    }

    // copy data up to processing instruction
    out.append(in, a, (b - 2) - a);
    a = c + 2;

    // remove leading and trailing whitespace
    string::size_type c2 = c;

    while (b2 < c2 && isspace((unsigned char)in[b2]))
    {
      b2++;
    }

    while (b2 < c2 && isspace((unsigned char)in[c2 - 1]))
    {
      c2--;
    }

    string key = in.substr(b2, c2 - b2);
    string::size_type pos = key.find_first_of(" \t\r\n");

    // take over (optional) default text provided by internal catalog
    string deftxt = deflt;

    if (pos != string::npos)
    {
      deftxt = key.substr(pos);

      // substitute () by <>
      for (unsigned i = 0; i < deftxt.length(); i++)
      {
        if (deftxt[i] == '(')
        {
          deftxt[i] = '<';
        }
        else if (deftxt[i] == ')')
        {
          deftxt[i] = '>';
        }
      }

      key = key.substr(0, pos);
    }

    string txt = deftxt;

    // for instruction "custom" lookup text from external catalog first
    if (proc == "custom" && !m_ctlg_extern.empty())
    {
      txt = uiGetText(m_ctlg_extern, key, deftxt);
    }

    /* If found in external custom catalog, don't substutite <?text/custom ?> recursively.
     * Otherwise lookup internal catalog and substitute <?text/custom ?> again */
    if (txt == deftxt && !m_ctlg_intern.empty())
    {
      txt = uiGetText(m_ctlg_intern, key, deftxt);

      if (!textSubstitute(txt, deftxt, --max_passes))
      {
        return false;
      }
    }

    out.append(txt);
  }

  if (a != 0)   // a==0 -> nothing has been processed, keep in as it is
  {
    out.append(in, a, in.length() - a);
    in.swap(out);
  }

  return true;
}

string UICatalog::getText(const std::string &name, const std::string &deflt, Priority prio)
{
  MutexLock ml(&m_mutex);

  string txt;
  bool ext = false; // internal catalog used

  switch (prio)
  {
    default:
    case Intern:
    {
      if (m_ctlg_intern.empty())
      {
        return deflt;
      }

      txt = uiGetText(m_ctlg_intern, name, deflt);
      ext = false;
      break;
    }

    case Extern:
    {
      if (m_ctlg_extern.empty())
      {
        return deflt;
      }

      txt = uiGetText(m_ctlg_extern, name, deflt);
      ext = true;
      break;
    }

    case IntExt:
    {
      if (!m_ctlg_intern.empty())
      {
        txt = uiGetText(m_ctlg_intern, name, deflt);
        ext = false;

        if (txt != deflt)
        {
          break;
        }
      }

      if (m_ctlg_extern.empty())
      {
        return deflt;
      }

      txt = uiGetText(m_ctlg_extern, name, deflt);
      ext = true;
      break;
    }

    case ExtInt:
    {
      if (!m_ctlg_extern.empty())
      {
        txt = uiGetText(m_ctlg_extern, name, deflt);
        ext = true;

        if (txt != deflt)
        {
          break;
        }
      }

      if (m_ctlg_intern.empty())
      {
        return deflt;
      }

      txt = uiGetText(m_ctlg_intern, name, deflt);
      ext = false;
      break;
    }
  }

  /* PWMADK-3285: substitute <?text/custom ...?> looked up with entry
   * of internal catalog with text value of external catalog.
   * If not found there, the internal value is used. */
  if (!ext)
  {
    if (!textSubstitute(txt, deflt))
    {
      return deflt;
    }
  }

  return txt;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

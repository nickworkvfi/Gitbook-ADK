---
title: sdi/src/ui.h

---

# sdi/src/ui.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[UICatalog](class_u_i_catalog.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ui_async_result](ui_8h.md#enum-ui-async-result)** { UI_AR_NONE = 0, UI_AR_IN_PROGRESS = 1, UI_AR_KEY_ENTER = 2, UI_AR_KEY_CANCEL = 3, UI_AR_KEY_CLEAR = 4, UI_AR_TIMEOUT = 5, UI_AR_FAILED = 6} |
| enum| **[DataEntryType](ui_8h.md#enum-dataentrytype)** { TYPE_PAN, TYPE_EXPIRYDATE, TYPE_CVV} |
| enum| **[Ui_MenuOpts](ui_8h.md#enum-ui-menuopts)** { MENU_NoOpts = 0x00, MENU_Beep = 0x01, MENU_NoLEDs = 0x02, MENU_ClearOnReturn = 0x04, MENU_AbortOnCardRemove = 0x08, MENU_IgnoreExtAbort = 0x10, MENU_NoHeader = 0x20, MENU_AllowedExtOptions = (MENU_Beep | MENU_NoLEDs | MENU_ClearOnReturn | MENU_AbortOnCardRemove | MENU_IgnoreExtAbort | MENU_NoHeader)} |
| enum| **[Ui_PinOpts](ui_8h.md#enum-ui-pinopts)** { PIN_NoOpts =    0x0, PIN_NoLEDs =    0x1, PIN_NoHeader =    0x2, PIN_NoAmount =    0x4, PIN_NoCardAppLabel =    0x8, PIN_AllowedExtOptions = (PIN_NoLEDs | PIN_NoHeader | PIN_NoAmount | PIN_NoCardAppLabel), PIN_ClearOnReturn =  0x100, PIN_AbortOnCardRemove =  0x200, PIN_IgnoreExtAbort =  0x400, PIN_NavigatorMode_1 =  0x800, PIN_NavigatorMode_2 = 0x1000, PIN_ClearAllDigits = 0x2000, PIN_AutoEnter = 0x4000, PIN_Beep = 0x8000} |
| enum| **[Ui_PinBypass](ui_8h.md#enum-ui-pinbypass)** { PINBypass_Disabled = 0, PINBypass_Enter = 1, PINBypass_Clear = 2, PINBypass_DisableByDigit = 4, PINBypass_MaskAllowed = (PINBypass_Enter | PINBypass_Clear | PINBypass_DisableByDigit)} |
| enum| **[Ui_DialogOpts](ui_8h.md#enum-ui-dialogopts)** { DLG_DisplayOnly = 0x0000, DLG_Beep = 0x0001, DLG_CancelKey = 0x0002, DLG_ClearKey = 0x0004, DLG_EnterKey = 0x0008, DLG_NoLEDs = 0x0010, DLG_CtlsLogo = 0x0020, DLG_QuestionLogo = 0x0040, DLG_WarningLogo = 0x0080, DLG_ErrorLogo = 0x0100, DLG_SuccessLogo = 0x0200, DLG_WaitLogo = 0x0400, DLG_Async = 0x0800, DLG_StoreAsyncResult = 0x1000, DLG_HideSoftKeys = 0x2000, DLG_TextAlignLeft = 0x4000, DLG_TextAlignRight = 0x8000, DLG_TextAlignTop = 0x10000, DLG_TextAlignBottom = 0x20000, DLG_NoHeader = 0x40000, DLG_ExtDialogCompat = 0x80000, DLG_ClearOnReturn = 0x100000, DLG_AbortOnCardRemove = 0x200000, DLG_IgnoreExtAbort = 0x400000, DLG_AllowedExtOptions = (DLG_Beep | DLG_CancelKey | DLG_ClearKey | DLG_EnterKey | DLG_NoLEDs | DLG_CtlsLogo | DLG_QuestionLogo |
                           DLG_WarningLogo | DLG_ErrorLogo | DLG_SuccessLogo | DLG_WaitLogo | DLG_Async | DLG_StoreAsyncResult |
                           DLG_HideSoftKeys | DLG_TextAlignLeft | DLG_TextAlignRight | DLG_TextAlignTop | DLG_TextAlignBottom |
                           DLG_NoHeader | DLG_ClearOnReturn | DLG_AbortOnCardRemove | DLG_IgnoreExtAbort), DLG_AllowedOptsHtmlDialog = (DLG_Beep | DLG_ClearOnReturn | DLG_AbortOnCardRemove | DLG_IgnoreExtAbort)} |
| enum| **[Ui_IdleScreenOpts](ui_8h.md#enum-ui-idlescreenopts)** { IDLE_DisplayOnly = 0x0000, IDLE_MenuKey = 0x0001, IDLE_InfoKey = 0x0002, IDLE_NoLEDs = 0x0004, IDLE_AdminMode = 0x0008, IDLE_WaitLogo = 0x0010} |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[ui_externalDialog](ui_8h.md#function-ui-externaldialog)**(unsigned char templateId, [vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) & value, unsigned char confirmation, unsigned options, unsigned short timeout, int * raw_ui_error) |
| int | **[ui_htmlDialog](ui_8h.md#function-ui-htmldialog)**(const std::string & htmlFileName, [vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) & value, unsigned short timeout, sdi::Language lang, int options, int * raw_ui_error) |
| int | **[ui_handleSecureInput](ui_8h.md#function-ui-handlesecureinput)**(unsigned char templateId, sdi::Language textLanguage, unsigned char beep, unsigned short timeout, [vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) & value, char maskingCharacter, char * inputFormatString, unsigned char * amount =0, unsigned short currency =0) |
| int | **[ui_handleSignatureCapture](ui_8h.md#function-ui-handlesignaturecapture)**(sdi::Language textLanguage, unsigned short timeout, [vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) & value) |
| int | **[ui_handleMenu](ui_8h.md#function-ui-handlemenu)**([vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) & value, unsigned options =[MENU_NoOpts](ui_8h.md#enumvalue-menu-noopts), int timeout =30, int * raw_ui_error =0) |
| int | **[ui_handleCardRequestDisplay](ui_8h.md#function-ui-handlecardrequestdisplay)**(unsigned char CardTec, unsigned char displayMode, unsigned char * amount, unsigned short currency, unsigned char cancel_allowed, unsigned char transType) |
| int | **[ui_handleManualCardDataEntry](ui_8h.md#function-ui-handlemanualcarddataentry)**(sdi::Language textLanguage, unsigned short timeout, csd::csd_stringmap & value, unsigned char cardEntryValueDeactivation, unsigned char cardEntryMode, char * inputFormatString, char * touchCoordinates =NULL, unsigned char nbrTouchButtons =0, unsigned char forceMinPanLenTo7 =0, unsigned char skipCb9FFE =0) |
| int | **[ui_getInputMinLength](ui_8h.md#function-ui-getinputminlength)**(std::string text) |
| int | **[ui_EnterPin](ui_8h.md#function-ui-enterpin)**(sdi::Language pinTextLanguage, unsigned short timeout =30, unsigned char * pinBypass =0, unsigned opts =[PIN_NoOpts](ui_8h.md#enumvalue-pin-noopts), unsigned char minPINLength =4, unsigned char maxPINLength =12, unsigned interchar_tout =0, [vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) * value =0, int password_char =' *', char * touchCoordinates =NULL, unsigned char nbrTouchButtons =0) |
| void | **[ui_displayTextKey](ui_8h.md#function-ui-displaytextkey)**(const std::string & textKey, sdi::Language language) |
| int | **[ui_confirmTextKey](ui_8h.md#function-ui-confirmtextkey)**(const std::string & textKey, sdi::Language language, [vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) * value =0, unsigned short timeout =30) |
| int | **[ui_dialog](ui_8h.md#function-ui-dialog)**(const std::string & msg, unsigned options, int timeout =30, [vfigui::stringmap](namespacevfihtml.md#typedef-stringmap) * value =0, bool * abort =0) |
| int | **[ui_idlescreen](ui_8h.md#function-ui-idlescreen)**(const std::string & msg, int options, int timeout =-1, void * data =0) |
| void | **[ui_init](ui_8h.md#function-ui-init)**([vfigui::uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) idlescreen_cb) |
| bool | **[ui_enabled](ui_8h.md#function-ui-enabled)**(void ) |
| void | **[ui_clear](ui_8h.md#function-ui-clear)**(void ) |
| enum [ui_async_result](ui_8h.md#enum-ui-async-result) | **[ui_getAsyncResult](ui_8h.md#function-ui-getasyncresult)**(bool reset =true, int * raw_ui_error =0) |
| void | **[ui_enableLEDs](ui_8h.md#function-ui-enableleds)**(bool enable =true) |
| void | **[ui_dispLEDs](ui_8h.md#function-ui-displeds)**(unsigned char leds) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TOO_MANY_DIGITS_ENTERED](ui_8h.md#define-too-many-digits-entered)**  |
|  | **[TOO_FEW_DIGITS_ENTERED](ui_8h.md#define-too-few-digits-entered)**  |
|  | **[INVALID_VALUE_ENTERED](ui_8h.md#define-invalid-value-entered)**  |
|  | **[PAN_ENTERED_CHECK_AND_CONFIRM](ui_8h.md#define-pan-entered-check-and-confirm)**  |
|  | **[CONT_VAL_CONTINUE](ui_8h.md#define-cont-val-continue)**  |
|  | **[CONT_VAL_REENTER](ui_8h.md#define-cont-val-reenter)**  |
|  | **[CONT_VAL_ABORT](ui_8h.md#define-cont-val-abort)**  |
|  | **[CONT_MODE_INITIAL](ui_8h.md#define-cont-mode-initial)**  |
|  | **[CONT_MODE_CONTINUE](ui_8h.md#define-cont-mode-continue)**  |
|  | **[CONT_MODE_BYPASS](ui_8h.md#define-cont-mode-bypass)**  |
|  | **[CONT_MODE_SKIP](ui_8h.md#define-cont-mode-skip)**  |

## Types Documentation

### enum ui_async_result

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_AR_NONE | 0|  no async dialog started (no result)  |
| UI_AR_IN_PROGRESS | 1|  async dialog in progress (no result returned yet)  |
| UI_AR_KEY_ENTER | 2|  ENTER/CONFIRM hardkey/softkey was pressed  |
| UI_AR_KEY_CANCEL | 3|  CANCEL/ABORT hardkey/softkey was pressed  |
| UI_AR_KEY_CLEAR | 4|  BACK/CLEAR hardkey/softkey was pressed  |
| UI_AR_TIMEOUT | 5|  async dialog has timed out  |
| UI_AR_FAILED | 6|  async dialog has failed (more details will provide ADKGUI raw error code, see parameter `raw_ui_error` of function [ui_getAsyncResult()](ui_8h.md#function-ui-getasyncresult) |




### enum DataEntryType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TYPE_PAN | |  PAN  |
| TYPE_EXPIRYDATE | |  Expiry Date  |
| TYPE_CVV | |  Card Verifivcation Code  |




Data which have to be enetered 


### enum Ui_MenuOpts

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MENU_NoOpts | 0x00|   |
| MENU_Beep | 0x01|   |
| MENU_NoLEDs | 0x02|   |
| MENU_ClearOnReturn | 0x04|   |
| MENU_AbortOnCardRemove | 0x08|   |
| MENU_IgnoreExtAbort | 0x10|   |
| MENU_NoHeader | 0x20|   |
| MENU_AllowedExtOptions | (MENU_Beep \| MENU_NoLEDs \| MENU_ClearOnReturn \| MENU_AbortOnCardRemove \| MENU_IgnoreExtAbort \| MENU_NoHeader)|   |




### enum Ui_PinOpts

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PIN_NoOpts |    0x0|   |
| PIN_NoLEDs |    0x1|   |
| PIN_NoHeader |    0x2|   |
| PIN_NoAmount |    0x4|   |
| PIN_NoCardAppLabel |    0x8|   |
| PIN_AllowedExtOptions | (PIN_NoLEDs \| PIN_NoHeader \| PIN_NoAmount \| PIN_NoCardAppLabel)|   |
| PIN_ClearOnReturn |  0x100|   |
| PIN_AbortOnCardRemove |  0x200|   |
| PIN_IgnoreExtAbort |  0x400|   |
| PIN_NavigatorMode_1 |  0x800|   |
| PIN_NavigatorMode_2 | 0x1000|   |
| PIN_ClearAllDigits | 0x2000|   |
| PIN_AutoEnter | 0x4000|   |
| PIN_Beep | 0x8000|   |




### enum Ui_PinBypass

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PINBypass_Disabled | 0|   |
| PINBypass_Enter | 1|   |
| PINBypass_Clear | 2|   |
| PINBypass_DisableByDigit | 4|   |
| PINBypass_MaskAllowed | (PINBypass_Enter \| PINBypass_Clear \| PINBypass_DisableByDigit)|   |




### enum Ui_DialogOpts

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DLG_DisplayOnly | 0x0000|   |
| DLG_Beep | 0x0001|   |
| DLG_CancelKey | 0x0002|   |
| DLG_ClearKey | 0x0004|   |
| DLG_EnterKey | 0x0008|   |
| DLG_NoLEDs | 0x0010|   |
| DLG_CtlsLogo | 0x0020|   |
| DLG_QuestionLogo | 0x0040|   |
| DLG_WarningLogo | 0x0080|   |
| DLG_ErrorLogo | 0x0100|   |
| DLG_SuccessLogo | 0x0200|   |
| DLG_WaitLogo | 0x0400|   |
| DLG_Async | 0x0800|   |
| DLG_StoreAsyncResult | 0x1000|   |
| DLG_HideSoftKeys | 0x2000|   |
| DLG_TextAlignLeft | 0x4000|   |
| DLG_TextAlignRight | 0x8000|   |
| DLG_TextAlignTop | 0x10000|   |
| DLG_TextAlignBottom | 0x20000|   |
| DLG_NoHeader | 0x40000|   |
| DLG_ExtDialogCompat | 0x80000|   |
| DLG_ClearOnReturn | 0x100000|   |
| DLG_AbortOnCardRemove | 0x200000|   |
| DLG_IgnoreExtAbort | 0x400000|   |
| DLG_AllowedExtOptions | (DLG_Beep \| DLG_CancelKey \| DLG_ClearKey \| DLG_EnterKey \| DLG_NoLEDs \| DLG_CtlsLogo \| DLG_QuestionLogo \|
                           DLG_WarningLogo \| DLG_ErrorLogo \| DLG_SuccessLogo \| DLG_WaitLogo \| DLG_Async \| DLG_StoreAsyncResult \|
                           DLG_HideSoftKeys \| DLG_TextAlignLeft \| DLG_TextAlignRight \| DLG_TextAlignTop \| DLG_TextAlignBottom \|
                           DLG_NoHeader \| DLG_ClearOnReturn \| DLG_AbortOnCardRemove \| DLG_IgnoreExtAbort)|   |
| DLG_AllowedOptsHtmlDialog | (DLG_Beep \| DLG_ClearOnReturn \| DLG_AbortOnCardRemove \| DLG_IgnoreExtAbort)|   |




### enum Ui_IdleScreenOpts

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| IDLE_DisplayOnly | 0x0000|   |
| IDLE_MenuKey | 0x0001|   |
| IDLE_InfoKey | 0x0002|   |
| IDLE_NoLEDs | 0x0004|   |
| IDLE_AdminMode | 0x0008|   |
| IDLE_WaitLogo | 0x0010|   |





## Functions Documentation

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
    vfigui::stringmap & value,
    unsigned short timeout,
    sdi::Language lang,
    int options,
    int * raw_ui_error
)
```


**Parameters**: 

  * **htmlFileName** Name of the HTML file 
  * **value** Stringmap including the HTML input and output values (needs to be matched with the corresponding HTML file) 
  * **timeout** Timeout in seconds 
  * **lang** Language to use 
  * **options** dialog options as used for [ui_dialog()](ui_8h.md#function-ui-dialog), see enum Ui_DialogOpts. Supported options are defined by DLG_AllowedOptsHtmlDialog. 
  * **raw_ui_error** if a pointer is passed the related variable is set with the raw error code of ADKGUI 


**Return**: SDI result code (e.g. RESULT_OK or RESULT_FAIL) 

Displays an external HTML dialog specified by cusomer specific HTML file 


### function ui_handleSecureInput

```cpp
int ui_handleSecureInput(
    unsigned char templateId,
    sdi::Language textLanguage,
    unsigned char beep,
    unsigned short timeout,
    vfigui::stringmap & value,
    char maskingCharacter,
    char * inputFormatString,
    unsigned char * amount =0,
    unsigned short currency =0
)
```


**Parameters**: 

  * **templateId** Template identifier as passed in TLV tag DFA007 of command Handle Secure Input (24-04) 
  * **textLanguage** Language to use 
  * **beep** Beep when text will be displayed (0 = no, 1 = yes) 
  * **timeout** Timeout in seconds 
  * **value** Stringmap including the input data 
  * **maskingCharacter** Masking character to be use during the input 
  * **inputFormatString** Alternative Format string (see separate documentation for details) 
  * **amount** Amount to be displayed during the input 
  * **currency** Currency to be displayed during the input


**Return**: RESULT_OK or RESULT_FAIL 

Handles secure inputs 


### function ui_handleSignatureCapture

```cpp
int ui_handleSignatureCapture(
    sdi::Language textLanguage,
    unsigned short timeout,
    vfigui::stringmap & value
)
```


**Parameters**: 

  * **textLanguage** Language to use 
  * **timeout** Timeout in seconds 
  * **value** Stringmap for the captured signature 


**Return**: RESULT_OK or RESULT_FAIL 

Handles the signature capture 


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


### function ui_handleManualCardDataEntry

```cpp
int ui_handleManualCardDataEntry(
    sdi::Language textLanguage,
    unsigned short timeout,
    csd::csd_stringmap & value,
    unsigned char cardEntryValueDeactivation,
    unsigned char cardEntryMode,
    char * inputFormatString,
    char * touchCoordinates =NULL,
    unsigned char nbrTouchButtons =0,
    unsigned char forceMinPanLenTo7 =0,
    unsigned char skipCb9FFE =0
)
```


**Parameters**: 

  * **textLanguage** Language to use 
  * **timeout** Timeout in seconds 
  * **value** Stringmap including the input data 
  * **cardEntryValueDeactivation** Value Deactivation (0 = enter all values, 1 = skip CVV, 2 = skip Expiry Date and CVV) 
  * **cardEntryMode** Entry Mode (0 = enter data in one screen, 1 = enter data in separate screens) 
  * **inputFormatString** Alternative Format string (see separate documentation for details) 
  * **touchCoordinates** pointer to the memory for the touch coordinates (default: NULL) 
  * **nbrTouchButtons** 0: no touch buttons defined, else > 0 
  * **forceMinPanLenTo7** 0: use minimal PAN length in catalog file, else force minimal PAN length of 7 digits 
  * **skipCb9FFE** 0: CB 9FFE active, 1: CB 9FFE skipped 


**Return**: RESULT_OK or RESULT_FAIL 

Handles the manual card data entry 


### function ui_getInputMinLength

```cpp
int ui_getInputMinLength(
    std::string text
)
```


### function ui_EnterPin

```cpp
int ui_EnterPin(
    sdi::Language pinTextLanguage,
    unsigned short timeout =30,
    unsigned char * pinBypass =0,
    unsigned opts =PIN_NoOpts,
    unsigned char minPINLength =4,
    unsigned char maxPINLength =12,
    unsigned interchar_tout =0,
    vfigui::stringmap * value =0,
    int password_char =' *',
    char * touchCoordinates =NULL,
    unsigned char nbrTouchButtons =0
)
```


**Parameters**: 

  * **pinTextLanguage** language for the PIN entry text (ignored for headless mode) 
  * **timeout** timeout value for PIN entry in seconds 
  * **pinBypass** Input values: Bitmask, see enum Ui_PinBypass Passing a NULL pointer also disables PIN bypass. Output values: (only valid if function returns RESULT_OK) 0: no PIN bypass done 1: PIN bypass with Enter key 2: PIN bypass with Clear key 
  * **opts** PIN entry options, see enum Ui_PinOpts for more details 
  * **minPINLength** minimum number of PIN digits to enter, default is 4 
  * **maxPINLength** maximum number of PIN digits to enter, default is 12 
  * **interchar_tout** inter-character timeout (in ms). 0 means no timeout specified (default). 
  * **value** Initial UI key value map (or NULL if not provided). Following additional UI string parameters can be passed:

1. Key "header_text" with value used as PIN dialog header text (instead of customer logo), please note that this value is ignored, if option PIN_NoHeader is set.
2. Key "amount" used as displayed amount (must come along with "curr"), please note that this value is ignored, if option PIN_NoAmount is set.
3. Key "curr" used as displayed currency (must come along with "amount"), please note that this value is ignored, if option PIN_NoAmount is set.
4. Key "prefname" as application preferred name (or card application name), please note that this value is ignored, if option PIN_NoCardAppLabel is set. 
  * **password_char** Echo character to display for an entered digit (default: '*') 
  * **touchCoordinates** pointer to the memory for the touch coordinates (default: NULL) 
  * **nbrTouchButtons** 0: no touch buttons defined, else > 0 


**Return**: RESULT_OK if PIN is entered successfully (check for pinBypass return value), RESULT_FAIL, RESULT_MOBILE_ABORT, RESULT_NO_LINK, RESULT_TIMEOUT, RESULT_USER_CANCEL 

Enter the PIN 


### function ui_displayTextKey

```cpp
void ui_displayTextKey(
    const std::string & textKey,
    sdi::Language language
)
```


**Parameters**: 

  * **textKey** text key to look up text from UI catalog to display 
  * **language** language ID to select the UI catalog 


display a message dialog, which text is taken from UI catalog looked up by specified text key _textKey_. Language ID _language_ will the select the corresponding language specific UI catalog. The dialog is invoked asynchornously so that this function returns immediately. 


### function ui_confirmTextKey

```cpp
int ui_confirmTextKey(
    const std::string & textKey,
    sdi::Language language,
    vfigui::stringmap * value =0,
    unsigned short timeout =30
)
```


**Parameters**: 

  * **textKey** to look up text from UI catalog to display 
  * **language** language ID 
  * **value** Initial UI key value map (or NULL if not provided). Following additional UI string parameters can be passed:

1. Key "header_text" with value used as PIN dialog header text (instead of customer logo)
2. Key "amount" used as displayed amount (must come along with "curr")
3. Key "curr" used as displayed currency (must come along with "amount") 
  * **timeout** dialog timeout in seconds (default: 30) 


**Return**: RESULT_OK if the configuration dialog was confirmed, else RESULT_USER_CANCEL if confirmation was declined. Finally other error codes (as returned by [ui_dialog()](ui_8h.md#function-ui-dialog), e.g. RESULT_FAIL, RESULT_MOBILE_ABORT, RESULT_NO_LINK, RESULT_TIMEOUT) can be returned. 

display a confirmation dialog, which text is taken from UI catalog looked up by specified text key _textKey_. Language ID _language_ will the select the corresponding language specific UI catalog. 


### function ui_dialog

```cpp
int ui_dialog(
    const std::string & msg,
    unsigned options,
    int timeout =30,
    vfigui::stringmap * value =0,
    bool * abort =0
)
```


**Parameters**: 

  * **msg** dialog text message 
  * **options** dialog options, see enum Ui_DialogOpts 
  * **timeout** dialog timeout in seconds, a negative value means infinite timeout 
  * **value** an optional value map passed to [uiInvoke()](namespacevfigui.md#function-uiinvoke)/uiInvokeAsync(). UI result values are returned in this map to the caller. 
  * **abort** optional pointer to flag variable, which can be set to true, to abort the synchronous dialog. Set this parameter NULL to disable abort by this flag. In this case of successfull abort, RESULT_USER_CANCEL is returned. Please note that this flag is ignored for asynchronous calls with option `DLG_Async`. 


**Return**: Result codes for synchronous calls: RESULT_OK: Enter softkey/hardkey pressed RESULT_CLEAR_BUTTON: Clear softkey/hardkey pressed RESULT_USER_CANCEL: Cancel softkey/hardkey pressed or flag `abort` set to true RESULT_TIMEOUT: Dialog timed out RESULT_MOBILE_ABORT: Abort received from mobile device (see option DLG_IgnoreExtAbort) RESULT_NO_LINK: Link to mobile device disturbed (see option DLG_IgnoreExtAbort) RESULT_FAIL: Card was removed (see option DLG_AbortOnCardRemove) RESULT_FAIL: For other errors Result codes for asynchronous calls: RESULT_OK: dialog invocation successful RESULT_FAIL: dialog invocation failed 

display a generic dialog. Depending on option `DLG_Async` the function is invoked asynchronously (returning immediately) or synchronously (waiting for the dialog result). For synchronous calls the dialog result is returned as function return value. For asynchronous calls, the user may set additional option `DLG_StoreAsyncResult` to buffer the result and read it with function [ui_getAsyncResult()](ui_8h.md#function-ui-getasyncresult) afterwards. 


### function ui_idlescreen

```cpp
int ui_idlescreen(
    const std::string & msg,
    int options,
    int timeout =-1,
    void * data =0
)
```


**Parameters**: 

  * **msg** idlescreen text message 
  * **options** idlescreen options, see enum Ui_IdleScreenOpts 
  * **timeout** idlescreen timeout in seconds, a negative value means infinite timeout 
  * **data** pointer directly passed to idlescreen callback `idlescreen_cb` set by function `[ui_init()](ui_8h.md#function-ui-init)`


**Return**: RESULT_OK: idlescreen invocation successful RESULT_FAIL: idlescreen invocation failed 

display the idlescreen. This function is always called asynchronously and dialog results are reported via callback, which was passed as parameter `idlescreen_cb` to function `[ui_init()](ui_8h.md#function-ui-init)`. If both, parameters `msg` and `logo` are empty, the idlescreen displays the standard idle text referred by text ID TXT_IDLE_SCREEN. A filled string for `msg` and/or `logo` will remove the standard idle text and display the text message and/or the image logo on idlescreen. 


### function ui_init

```cpp
void ui_init(
    vfigui::uiAsyncCallback idlescreen_cb
)
```


**Parameters**: 

  * **idlescreen_cb** idlescreen result callback function, which is invoked, if asynchronous idlescreen dialog returns (see function [ui_idlescreen()](ui_8h.md#function-ui-idlescreen)). 


**Note**: The function must be called at once at startup (SDI standard mode). After UI initialization, the function [ui_enabled()](ui_8h.md#function-ui-enabled) returns true. 

Enable and initialize the UI interface of SDI server. 


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
    bool reset =true,
    int * raw_ui_error =0
)
```


### function ui_enableLEDs

```cpp
void ui_enableLEDs(
    bool enable =true
)
```


### function ui_dispLEDs

```cpp
void ui_dispLEDs(
    unsigned char leds
)
```




## Macros Documentation

### define TOO_MANY_DIGITS_ENTERED

```cpp
#define TOO_MANY_DIGITS_ENTERED 0xFB
```


### define TOO_FEW_DIGITS_ENTERED

```cpp
#define TOO_FEW_DIGITS_ENTERED 0xFC
```


### define INVALID_VALUE_ENTERED

```cpp
#define INVALID_VALUE_ENTERED 0xFD
```


### define PAN_ENTERED_CHECK_AND_CONFIRM

```cpp
#define PAN_ENTERED_CHECK_AND_CONFIRM 0xFE
```


### define CONT_VAL_CONTINUE

```cpp
#define CONT_VAL_CONTINUE 0x01
```


### define CONT_VAL_REENTER

```cpp
#define CONT_VAL_REENTER 0x02
```


### define CONT_VAL_ABORT

```cpp
#define CONT_VAL_ABORT 0x03
```


### define CONT_MODE_INITIAL

```cpp
#define CONT_MODE_INITIAL 0x00
```


### define CONT_MODE_CONTINUE

```cpp
#define CONT_MODE_CONTINUE 0x01
```


### define CONT_MODE_BYPASS

```cpp
#define CONT_MODE_BYPASS 0x02
```


### define CONT_MODE_SKIP

```cpp
#define CONT_MODE_SKIP 0x03
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _UI_H_
#define _UI_H_

#ifndef HEADLESS
#include "html/types.h"
#include "html/gui.h"
#else  // HEADLESS
#include <string>
#include <vector>
#include <map>
#include "ipc/jsobject.h"

namespace vfigui
{
  typedef std::map<std::string, std::string> stringmap;
  enum UICBType { UI_CB_RESULT,
                  UI_CB_UPDATE,
                  UI_CB_LOAD,
                  UI_CB_ERROR_LIST,
                  UI_CB_STATISTICS
                };
  class UICBData;
  typedef void (*uiAsyncCallback)(void *data, UICBType type, UICBData &uidata);
}
#endif

#include "csd.h"
#include "sdi_lang.h"

// Defines for Status Callbacks on Manual Card Data Entry in headless mode
#define TOO_MANY_DIGITS_ENTERED        0xFB
#define TOO_FEW_DIGITS_ENTERED         0xFC
#define INVALID_VALUE_ENTERED          0xFD
#define PAN_ENTERED_CHECK_AND_CONFIRM  0xFE

#define CONT_VAL_CONTINUE 0x01
#define CONT_VAL_REENTER  0x02
#define CONT_VAL_ABORT    0x03

#define CONT_MODE_INITIAL  0x00
#define CONT_MODE_CONTINUE 0x01
#define CONT_MODE_BYPASS   0x02
#define CONT_MODE_SKIP     0x03

enum ui_async_result
{
  UI_AR_NONE        = 0, 
  UI_AR_IN_PROGRESS = 1, 
  UI_AR_KEY_ENTER   = 2, 
  UI_AR_KEY_CANCEL  = 3, 
  UI_AR_KEY_CLEAR   = 4, 
  UI_AR_TIMEOUT     = 5, 
  UI_AR_FAILED      = 6  
};

enum DataEntryType
{
  TYPE_PAN,         
  TYPE_EXPIRYDATE,  
  TYPE_CVV          
};

int ui_externalDialog(unsigned char templateId, vfigui::stringmap &value, unsigned char confirmation,
                      unsigned options, unsigned short timeout, int *raw_ui_error);

int ui_htmlDialog(const std::string &htmlFileName, vfigui::stringmap &value,
                  unsigned short timeout, sdi::Language lang, int options, int *raw_ui_error);

int ui_handleSecureInput(unsigned char templateId, sdi::Language textLanguage, unsigned char beep, unsigned short timeout,
                         vfigui::stringmap &value, char maskingCharacter, char *inputFormatString,
                         unsigned char *amount = 0, unsigned short currency = 0);

int ui_handleSignatureCapture(sdi::Language textLanguage, unsigned short timeout, vfigui::stringmap &value);

/* UI menu options
 * Please note that these bit mask is used in DFA13D (dialog options) with
 * command Handle Menu 22-05, therefore, do not insert values in between */
enum Ui_MenuOpts
{
  MENU_NoOpts            = 0x00, // no options, use defaults
  MENU_Beep              = 0x01, // do a beep when displaying the menu
  MENU_NoLEDs            = 0x02, // do not show LEDs even if enabled by enableLEDs()
  MENU_ClearOnReturn     = 0x04, // clear content before the dialog returns
  MENU_AbortOnCardRemove = 0x08, // abort the dialog, if the card is removed (returns RESULT_FAIL)
  MENU_IgnoreExtAbort    = 0x10, /* ignore external abort by check4Interrupt, otherwise
                                  * the menu can be aborted by mobile device (e.g. lost
                                  * link). External abort will return RESULT_MOBILE_ABORT or RESULT_NO_LINK */
  MENU_NoHeader          = 0x20, /* don't display dialog header (neither logo nor header text is displayed
                                  * even if provided with variable "header_text" */
  /*** external options allowed for command Handly Menu 22-05 ***/
  MENU_AllowedExtOptions = (MENU_Beep | MENU_NoLEDs | MENU_ClearOnReturn | MENU_AbortOnCardRemove | MENU_IgnoreExtAbort | MENU_NoHeader)
};

int ui_handleMenu(vfigui::stringmap &value, unsigned options = MENU_NoOpts, int timeout = 30, int *raw_ui_error = 0);

int ui_handleCardRequestDisplay(unsigned char CardTec,
                                unsigned char displayMode,
                                unsigned char *amount,
                                unsigned short currency,
                                unsigned char cancel_allowed,
                                unsigned char transType);

int ui_handleManualCardDataEntry(sdi::Language textLanguage,
                                 unsigned short timeout,
                                 csd::csd_stringmap &value,
                                 unsigned char cardEntryValueDeactivation,
                                 unsigned char cardEntryMode,
                                 char *inputFormatString,
                                 char *touchCoordinates = NULL,
                                 unsigned char nbrTouchButtons = 0,
                                 unsigned char forceMinPanLenTo7 = 0,
                                 unsigned char skipCb9FFE = 0);

int ui_getInputMinLength(std::string text);


// UI PIN dialog options
enum Ui_PinOpts
{
  /* options used in DFA13D (dialog options) with 22-01/22-06),
   * thus, do not insert values in between */
  PIN_NoOpts            =    0x0,  // no options, use defaults
  PIN_NoLEDs            =    0x1,  // do not show LEDs even if enabled by enableLEDs()
  PIN_NoHeader          =    0x2,  /* don't display dialog header (neither logo nor header text is displayed
                                    * even if provided with variable "header_text" */
  PIN_NoAmount          =    0x4,  // supress displaying the amount/currency (even if provided in parameter map)
  PIN_NoCardAppLabel    =    0x8,  // supress displaying the card application label (even if provided with 'prefname' in parameter map)
  PIN_AllowedExtOptions = (PIN_NoLEDs | PIN_NoHeader | PIN_NoAmount | PIN_NoCardAppLabel),
  /* internal options not used in DFA13D (dialog options) with 22-01/22-06,
   * thus, values can be inserted or changed later if required */
  PIN_ClearOnReturn     =  0x100,  // clear content before the dialog returns
  PIN_AbortOnCardRemove =  0x200,  // abort the PIN dialog, if the card is removed (returns RESULT_FAIL)
  PIN_IgnoreExtAbort    =  0x400,  /* ignore external abort by check4Interrupt, otherwise
                                    * the PIN dialog can be aborted by mobile device (e.g. lost
                                    * link). External abort will return RESULT_MOBILE_ABORT or RESULT_NO_LINK */
  PIN_NavigatorMode_1   =  0x800,  // Navigator mode 1 enabled: double click on touch
  PIN_NavigatorMode_2   = 0x1000, // Navigator mode 2 enabled: with tactile button (ignored if PIN_NavigatorMode_1 is set)
  PIN_ClearAllDigits    = 0x2000, // clear key removes all digits, otherwise the last digit is removed only
  PIN_AutoEnter         = 0x4000, // automatically confirm PIN entry when the maximum number of PIN digits has been reached
  PIN_Beep              = 0x8000  // do a beep when displaying the PIN dialog
};

enum Ui_PinBypass
{
  PINBypass_Disabled       = 0, // PIN bypass disabled
  PINBypass_Enter          = 1, // PIN bypass enabled with Enter key
  PINBypass_Clear          = 2, // PIN bypass enabled with Clear key
  PINBypass_DisableByDigit = 4, // disable PIN bypass as soon as a digit has been entered
  PINBypass_MaskAllowed    = (PINBypass_Enter | PINBypass_Clear | PINBypass_DisableByDigit)
};

int ui_EnterPin(sdi::Language pinTextLanguage,
                unsigned short timeout = 30,
                unsigned char *pinBypass = 0,
                unsigned opts = PIN_NoOpts,
                unsigned char minPINLength = 4,
                unsigned char maxPINLength = 12,
                unsigned interchar_tout = 0,
                vfigui::stringmap *value = 0,
                int password_char = '*',
                char *touchCoordinates = NULL,
                unsigned char nbrTouchButtons = 0);

void ui_displayTextKey(const std::string &textKey, sdi::Language language);

int ui_confirmTextKey(const std::string &textKey, sdi::Language language, vfigui::stringmap *value = 0, unsigned short timeout = 30);

/* UI dialog options
 * Please note that these bit mask is used in DFA13D (dialog options) with
 * command Handle Display 22-03 and Handle HTML Dialog (24-0A), therefore,
 * do not insert values in between */
enum Ui_DialogOpts
{
  DLG_DisplayOnly       = 0x0000,  // display only (text without softkeys)
  DLG_Beep              = 0x0001,  // play one short beep when displaying the dialog
  DLG_CancelKey         = 0x0002,  /* add cancel softkey to dialog. On press, RESULT_USER_CANCEL
                                      * is returned. In addition, cancel key will result the same
                                      * on devices with keyboard. For devices without touch an
                                      * entry in helpers bar is displayed to signal user that the
                                      * enter key can be pressed on the keyboard. */
  DLG_ClearKey          = 0x0004,  /* add clear softkey to dialog. On press, RESULT_CLEAR_BUTTON
                                      * is returned. In addition, clear key will result the same
                                      * on devices with keyboard. For devices without touch an
                                      * entry in helpers bar is displayed to signal user that
                                      * the clear key can be pressed on the keyboard. */
  DLG_EnterKey          = 0x0008,  /* add enter softkey to dialog. On press, RESULT_OK
                                      * is returned. In addition, enter key will result the same
                                      * on devices with keyboard. For devices without touch an
                                      * entry in helpers bar is displayed to signal user that t
                                      * he enter key can be pressed on the keyboard. */
  DLG_NoLEDs            = 0x0010,  // do not show LEDs even if enabled by enableLEDs()
  DLG_CtlsLogo          = 0x0020,  // show CTLS logo on top of the dialog message
  DLG_QuestionLogo      = 0x0040,  // show question logo on top of the dialog message (previous logo bit prior)
  DLG_WarningLogo       = 0x0080,  // show warning logo on top of the dialog message (previous logo bits prior)
  DLG_ErrorLogo         = 0x0100,  // show error logo on top of the dialog message (previous logo bits prior)
  DLG_SuccessLogo       = 0x0200,  // show success logo on top of the dialog message (previous logo bits prior)
  DLG_WaitLogo          = 0x0400,  // show wait logo/animation on top of the dialog message (previous logo bits prior)
  DLG_Async             = 0x0800,  // asynchronous dialog, which lets ui_dialog() return immediatelly
  DLG_StoreAsyncResult  = 0x1000,  /* store asynchornous result to provide it with ui_getAsyncResult()
                                    * after the dialog has been finished */
  DLG_HideSoftKeys      = 0x2000,  /* hide softkeys on touch screen devices enabled by option
                                      * DLG_CancelKey, DLG_ClearKey or DLG_EnterKey. For devices
                                      * without touch, the entry in helpers bar will not apear.
                                      * If the terminal has a keyboard, the dialog returns for
                                      * the corresponding key stroke. */
  DLG_TextAlignLeft     = 0x4000,  /* text message shall be left aligned
                                      * (default: horizontal centered) */
  DLG_TextAlignRight    = 0x8000,  /* text message shall be right aligned
                                      * (default: horizontal centered, left-aligned is prior) */
  DLG_TextAlignTop      = 0x10000, /* text message shall be top aligned
                                      * (default: vertical centered) */
  DLG_TextAlignBottom   = 0x20000, /* text message shall be bottom aligned
                                      * (default: vertical centered, top-aligned is prior) */
  DLG_NoHeader          = 0x40000, /* don't display dialog header field (neither logo nor header text is displayed
                                    * even if provided with variable "header_text" */
  DLG_ExtDialogCompat   = 0x80000, /* HandleDisplay (24-03) w/o dialog options was invoked, which
                                    * requires some special handling in UI layer (compatibility mode) */
  /*** synchronous dialog options (ignored, if DLG_Async is set) ***/
  DLG_ClearOnReturn     = 0x100000, // clear content before the dialog returns
  DLG_AbortOnCardRemove = 0x200000, // abort the dialog, if the card is removed (returns RESULT_FAIL)
  DLG_IgnoreExtAbort    = 0x400000, /* ignore external abort by check4Interrupt, otherwise
                                     * the dialog can be aborted by mobile device (e.g. lost
                                     * link). External abort will return RESULT_MOBILE_ABORT
                                     * or RESULT_NO_LINK (ignored, if DLG_Async is not set) */
  /*** external options allowed for command Handly Display 22-03 ***/
  DLG_AllowedExtOptions = (DLG_Beep | DLG_CancelKey | DLG_ClearKey | DLG_EnterKey | DLG_NoLEDs | DLG_CtlsLogo | DLG_QuestionLogo |
                           DLG_WarningLogo | DLG_ErrorLogo | DLG_SuccessLogo | DLG_WaitLogo | DLG_Async | DLG_StoreAsyncResult |
                           DLG_HideSoftKeys | DLG_TextAlignLeft | DLG_TextAlignRight | DLG_TextAlignTop | DLG_TextAlignBottom |
                           DLG_NoHeader | DLG_ClearOnReturn | DLG_AbortOnCardRemove | DLG_IgnoreExtAbort),
  /*** external options allowed for command Handle HTML Dialog 24-0A ***/
  DLG_AllowedOptsHtmlDialog = (DLG_Beep | DLG_ClearOnReturn | DLG_AbortOnCardRemove | DLG_IgnoreExtAbort)
};
int ui_dialog(const std::string &msg, unsigned options, int timeout = 30,
              vfigui::stringmap *value = 0, bool *abort = 0);

// UI idlescreen options
enum Ui_IdleScreenOpts
{
  IDLE_DisplayOnly       = 0x0000, // display only (text without softkeys)
  IDLE_MenuKey           = 0x0001, /* add menu softkey to dialog. On press, 0 is returned.
                                    * In addition, enter key will result the same on devices
                                    * with keyboard. For devices without touch an entry in
                                    * helpers bar is displayed to signal user that the enter key
                                    * can be pressed on the keyboard to display the menu. */
  IDLE_InfoKey           = 0x0002, /* add info softkey to dialog. On press, 1 is returned.
                                    * In addition, cancel key will result the same on devices
                                    * with keyboard. For devices without touch an entry in
                                    * helpers bar is displayed to signal user that the cancel key
                                    * can be pressed on the keyboard to display the info menu. */
  IDLE_NoLEDs            = 0x0004, // do not show LEDs even if enabled by enableLEDs()
  IDLE_AdminMode         = 0x0008, /* Admin mode enabled to enter menu with key compination 2-5-8
                                    * or with touch sequence (4 display corners) */
  IDLE_WaitLogo          = 0x0010  /* show wait logo on idle screen. If this options is note set,
                                    * the custom logo is looked up. If no custom logo is provided
                                    * with an user config package, finally no logo is displayed. */
};
int ui_idlescreen(const std::string &msg, int options, int timeout = -1, void *data = 0);

void ui_init(vfigui::uiAsyncCallback idlescreen_cb);

bool ui_enabled(void);

void ui_clear(void);

/* For asynchronous calls of function ui_dialog(), the user may set additional option \c DLG_StoreAsyncResult to
 * buffer the dialog result and read it with function ui_getAsyncResult() afterwards. For more details, please refer
 * to description of function ui_dialog().
 * \param[in]  reset set to true to reset the result, in case the dialog has finished
 * \param[out] raw_ui_error  if a pointer is passed the related variable is set with the
 *                           buffered ADKGUI raw error code of last asynchronous UI dialog.
 * \return The buffered result of last asynchronous UI dialog (see enum ui_async_result). The function returns UI_AR_NONE,
 *         if no asynchronous dialog is active. UI_AR_IN_PROGRESS is returned for and active dialog with pending result.
 *         Once the result of a finished dialog is returned, the function resets the result back to UI_AR_NONE, if \c reset
 *         is set to true. In this case, the result is provided exactly once. */
enum ui_async_result ui_getAsyncResult(bool reset = true, int *raw_ui_error = 0);

/* Enable (or disable) virtual CTLS LED area. Please note that this takes effect with call of the next UI dialog.
 * \param[in] enable set to true, to enable the LED area, else the LED area is disabled. */
void ui_enableLEDs(bool enable = true);

/* Activate/deactivate virtual LEDs during CTLS transaction. The function is passed a bitmask with values of
 * CONTACTLESS_LED_0, CONTACTLESS_LED_1, CONTACTLESS_LED_2 and CONTACTLESS_LED_3 (see EMV_CTLS_Interface.h).
 * \param[in] leds bitmask to specify the activated/disabled CLTS LEDs */
void ui_dispLEDs(unsigned char leds);


#ifndef HEADLESS

class UICatalog
{
    // disable copy constructor and assign operator
    UICatalog(const UICatalog&);
    UICatalog& operator=(const UICatalog&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move and heap allocation
    UICatalog(const UICatalog&&);
    UICatalog& operator=(UICatalog&&);
#endif

    std::string m_error;  
    std::string m_ctlg_intern;  
    std::string m_ctlg_extern;  
    bool m_restore; 
    std::string m_old_catalog;  
    static pthread_mutex_t m_mutex; 
    static std::map<std::string, std::string> catalog_cache; 
    void restore();

    std::string find_catalog(const std::string &file, bool ext, const std::string &www_dir = "");

    bool textSubstitute(std::string &in, const std::string &deflt, int max_passes = 10);

  public:

    enum Priority
    {
      Intern = 0, 
      Extern = 1, 
      IntExt = 2, 
      ExtInt = 3  
    };

    UICatalog(sdi::Language lang = sdi::LANG_NO_LANG, const std::string &www_dir = "");

    virtual ~UICatalog();

    bool set(sdi::Language lang, const std::string &www_dir = "");

    std::string error()
    {
      return m_error;
    }

    bool valid(Priority prio);

    bool setUIGlobal(Priority prio, bool restore = true);

    std::string getText(const std::string &name, const std::string &deflt = "", Priority prio = Intern);
};
#endif

#endif // _UI_FORK_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

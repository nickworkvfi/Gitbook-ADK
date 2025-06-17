---
title: Display interface

---

# Display interface



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[IdleScreenMode](group__sdidisplay.md#enum-idlescreenmode)** { IDLE_HOTKEY_ADMIN =0, IDLE_NO_ADMIN =1, IDEL_SHOW_ADMIN =2} |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[displayText](group__sdidisplay.md#function-displaytext)**(int template_id, const std::string & data_name, const std::string & data_value, int timeout =0, bool confirm =false, bool beep =false, int dest =1) |
| int | **[displayText](group__sdidisplay.md#function-displaytext)**(int template_id, unsigned dialog_opt, const std::map< std::string, std::string > & value, const std::map< std::string, std::string > & key_actions, const char * header_text =0, const char * enter_text =0, const char * clear_text =0, const char * cancel_text =0, int timeout =0, int dest =1) |
| int | **[displayText](group__sdidisplay.md#function-displaytext)**(const std::string & data_value, int timeout =0, bool confirm =false, bool beep =false, int dest =1) |
| int | **[displayInput](group__sdidisplay.md#function-displayinput)**(std::string & out, InputType type, Language language =LANGUAGE_NO_LANGUAGE, char maskchar =0, const std::string & altformat ="", int timeout =0, bool beep =false, int dest =1) |
| int | **[displayInputTipWithAmount](group__sdidisplay.md#function-displayinputtipwithamount)**(std::string & out, Language language, const BCD< 6 > & amount, Currency currency, char maskchar =0, const std::string & altformat ="", int timeout =0, bool beep =false, int dest =1) |
| int | **[displayMenu](group__sdidisplay.md#function-displaymenu)**(const std::string & prompt, const std::vector< std::string > & entries, int timeout =0, bool beep =false, int dest =1) |
| int | **[displayMenu](group__sdidisplay.md#function-displaymenu)**(unsigned dialog_opt, const std::string & prompt, const std::vector< std::string > & entries, int preselect, const std::map< std::string, std::string > & key_actions, const char * header_text =0, const char * enter_text =0, const char * cancel_text =0, const char * up_text =0, const char * down_text =0, int timeout =0, int dest =1) |
| int | **[displayCardRequest](group__sdidisplay.md#function-displaycardrequest)**(unsigned char tec, unsigned char mode, const BCD< 6 > amount, int currency, int dest =1) |
| int | **[displayCardRequest](group__sdidisplay.md#function-displaycardrequest)**(unsigned char tec, unsigned char mode, int dest =1) |
| int | **[displayCardRequest](group__sdidisplay.md#function-displaycardrequest)**(unsigned char tec, unsigned char mode, const BCD< 6 > amount, int currency, enum EMVTransaction txn, int dest =1) |
| int | **[displayCardRequest](group__sdidisplay.md#function-displaycardrequest)**(unsigned char tec, unsigned char mode, enum EMVTransaction txn, int dest =1) |
| int | **[displayIdleScreen](group__sdidisplay.md#function-displayidlescreen)**(int dest =1) |
| int | **[displayIdleScreenMode](group__sdidisplay.md#function-displayidlescreenmode)**(enum [IdleScreenMode](sys_8h.md#enum-idlescreenmode) mode, int dest =1) |
| int | **[displaySignatureCapture](group__sdidisplay.md#function-displaysignaturecapture)**(std::string & outformat, bytevector & outdata, Language lang, unsigned short timeout =0, int dest =1) |
| int | **[displayLEDs](group__sdidisplay.md#function-displayleds)**(bool on) |
| int | **[displayDialog](group__sdidisplay.md#function-displaydialog)**(const std::string & filename, std::map< std::string, std::string > & value, Language lang =LANGUAGE_NO_LANGUAGE, bool beep =false, int dest =1) |
| int | **[displayDialog](group__sdidisplay.md#function-displaydialog)**(unsigned dialog_opt, const std::string & filename, std::map< std::string, std::string > & value, Language lang =LANGUAGE_NO_LANGUAGE, int dest =1) |
| int | **[displayGetAsyncResult](group__sdidisplay.md#function-displaygetasyncresult)**(enum DialogAsyncStatus & status, int dest =1) |

## Types Documentation

### enum IdleScreenMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| IDLE_HOTKEY_ADMIN | =0|  Admin menu can be activated using 2-5-8 (default)  |
| IDLE_NO_ADMIN | =1|  Admin menu is disabled  |
| IDEL_SHOW_ADMIN | =2|  Admin menu is enabled  |




idle screen mode (if enabled in config.json), (DFA155) 



## Functions Documentation

### function displayText

```
int displayText(
    int template_id,
    const std::string & data_name,
    const std::string & data_value,
    int timeout =0,
    bool confirm =false,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **template_id** display template identifier (DFA010) 
  * **data_name** display data name (DFA012) 
  * **data_value** display data value (e.g UTF-8 coded text string) (DFA013) 
  * **timeout** timeout in seconds, 0 means no timeout (DFA005) 
  * **confirm** confirmation requested (DFA006) 
  * **beep** beep when text will be displayed (DFA00D) 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

display text (24-03) 


### function displayText

```
int displayText(
    int template_id,
    unsigned dialog_opt,
    const std::map< std::string, std::string > & value,
    const std::map< std::string, std::string > & key_actions,
    const char * header_text =0,
    const char * enter_text =0,
    const char * clear_text =0,
    const char * cancel_text =0,
    int timeout =0,
    int dest =1
)
```


**Parameters**: 

  * **template_id** display template identifier (DFA010) 
  * **dialog_opt** dialog options ([DialogOptions](namespacevfisdi.md#enum-dialogoptions)) (DFA13D) 
  * **value** display data key value map (FFA011) 
  * **key_actions** (FFA106) 
  * **header_text** optional header text. If provided flag DLG_NO_HEADER is ignored. (DFA143) 
  * **enter_text** optional enter button text. If provided flag DLG_ENTER_KEY is implicitly added. (DFA13E) 
  * **clear_text** optional clear button text. If provided flag DLG_CLEAR_KEY is implicitly added. (DFA13F) 
  * **cancel_text** optional cancel button text. If provided flag DLG_CANCEL_KEY is implicitly added. (DFA140) 
  * **timeout** timeout in seconds, 0 means no timeout (DFA005) 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

display text (24-03) 


### function displayText

```
inline int displayText(
    const std::string & data_value,
    int timeout =0,
    bool confirm =false,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **data_value** display data value (e.g UTF-8 coded text string) 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **confirm** confirmation requested 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

display text using display template_id=1 and data_name="text" (24-03) 


### function displayInput

```
int displayInput(
    std::string & out,
    InputType type,
    Language language =LANGUAGE_NO_LANGUAGE,
    char maskchar =0,
    const std::string & altformat ="",
    int timeout =0,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **out** entered value 
  * **type** InputType 
  * **language** language (e.g. LANGUAGE_ENGLISH) 
  * **maskchar** masking character in the range 20..7E, 0 disables masking character 
  * **altformat** alternate format string, if not empty 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

secure input (24-04) 


### function displayInputTipWithAmount

```
int displayInputTipWithAmount(
    std::string & out,
    Language language,
    const BCD< 6 > & amount,
    Currency currency,
    char maskchar =0,
    const std::string & altformat ="",
    int timeout =0,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **out** entered value 
  * **language** language (e.g. LANGUAGE_ENGLISH) 
  * **amount** payment amount 
  * **currency** currency 
  * **maskchar** masking character in the range 20..7E, 0 disables masking character 
  * **altformat** alternate format string, if not empty 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

secure tip input with display of the payment amount (24-04) 


### function displayMenu

```
int displayMenu(
    const std::string & prompt,
    const std::vector< std::string > & entries,
    int timeout =0,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **prompt** menu prompt 
  * **dialog_opt** dialog options ([DialogOptions](namespacevfisdi.md#enum-dialogoptions)) (DFA13D) 
  * **entries** menu entries 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Selected menu entry (first menu entry has index 0) (>=0) or SDI error code (<0). 

**Note**: GUI error codes are mapped to SDI error codes! 

display menu (24-05) 


### function displayMenu

```
int displayMenu(
    unsigned dialog_opt,
    const std::string & prompt,
    const std::vector< std::string > & entries,
    int preselect,
    const std::map< std::string, std::string > & key_actions,
    const char * header_text =0,
    const char * enter_text =0,
    const char * cancel_text =0,
    const char * up_text =0,
    const char * down_text =0,
    int timeout =0,
    int dest =1
)
```


**Parameters**: 

  * **prompt** menu prompt (DFA00A) 
  * **dialog_opt** dialog options ([DialogOptions](namespacevfisdi.md#enum-dialogoptions)) (DFA13D) 
  * **entries** menu entries (DFA00B) 
  * **preselect** if >0 preselected menu entry, index of first entry is 1 (DFA00C) 
  * **key_actions** (FFA106) 
  * **header_text** optional header text. If provided flag DLG_NO_HEADER is ignored. (DFA143) 
  * **enter_text** optional enter button text. (DFA13E) 
  * **cancel_text** optional cancel button text. (DFA140) 
  * **up_text** optional up button text. (DFA141) 
  * **down_text** optional down button text. (DFA142) 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Selected menu entry (first menu entry has index 1) / exit code (>=0) or SDI error code (<0). 

**Note**: 

  * IMPORTANT: This function uses a different indexing of menu entries than the other (old) displayMenu function. The reason for this is that SDI uses indexes starting at 1 and mapping the menu index to be 0-based could collide with return values configured in key_actions so that this mapping can no longer be provided. 
  * GUI error codes are mapped to SDI error codes! 


**Par**: 

display menu (24-05) 


### function displayCardRequest

```
int displayCardRequest(
    unsigned char tec,
    unsigned char mode,
    const BCD< 6 > amount,
    int currency,
    int dest =1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **mode** mode: 0 = default, 1 = fallback, 2 = retry 
  * **amount** amount 
  * **currency** currency ([Currency](namespacevfisdi.md#enum-currency)) 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show card request display according the given parameter. It can be used directly before the Card Detection command (23-01) to show the corresponding display including the contactless logo if required. Only physical card technologies are supported. For manual card data entry only this command is not to be used because the user dialog is handled automatically inside the Card Detection command. (24-06) 


### function displayCardRequest

```
inline int displayCardRequest(
    unsigned char tec,
    unsigned char mode,
    int dest =1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **mode** mode: 0 = default, 1 = fallback, 2 = retry 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show card request display without amount. (24-06) 


### function displayCardRequest

```
int displayCardRequest(
    unsigned char tec,
    unsigned char mode,
    const BCD< 6 > amount,
    int currency,
    enum EMVTransaction txn,
    int dest =1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **mode** mode: 0 = default, 1 = fallback, 2 = retry 
  * **amount** amount 
  * **currency** currency ([Currency](namespacevfisdi.md#enum-currency)) 
  * **txn** EMV transaction type 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show card request display according the given parameter. It can be used directly before the Card Detection command (23-01) to show the corresponding display including the contactless logo if required. Only physical card technologies are supported. For manual card data entry only this command is not to be used because the user dialog is handled automatically inside the Card Detection command. (24-06) 


### function displayCardRequest

```
inline int displayCardRequest(
    unsigned char tec,
    unsigned char mode,
    enum EMVTransaction txn,
    int dest =1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **mode** mode: 0 = default, 1 = fallback, 2 = retry 
  * **txn** EMV transaction type 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show card request display without amount. (24-06) 


### function displayIdleScreen

```
int displayIdleScreen(
    int dest =1
)
```


**Parameters**: 

  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Display idle screen, check the SDI server documentation for more information on the idle screen (24-07) 


### function displayIdleScreenMode

```
int displayIdleScreenMode(
    enum IdleScreenMode mode,
    int dest =1
)
```


**Parameters**: 

  * **mode** idle screen mode 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Display idle screen with selecting admin mode, check the SDI server documentation for more information on the idle screen (24-07) 


### function displaySignatureCapture

```
int displaySignatureCapture(
    std::string & outformat,
    bytevector & outdata,
    Language lang,
    unsigned short timeout =0,
    int dest =1
)
```


**Parameters**: 

  * **outformat** signature format, e.g. "png" 
  * **outdata** signature data 
  * **lang** language (e.g. LANGUAGE_ENGLISH) 
  * **timeout** timeout in seconds, 0 to deactivate timeout 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show signature capture dialog (24-08) 


### function displayLEDs

```
int displayLEDs(
    bool on
)
```


**Parameters**: 

  * **on** true to activate, false to deactivate 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Activate / deactivate display of virtual CTLS LED area on the display. The command itself doesn't change the display at all. The display content will be updated with the next screen update. The payment application is responsible for the correct command order. (24-09) 


### function displayDialog

```
int displayDialog(
    const std::string & filename,
    std::map< std::string, std::string > & value,
    Language lang =LANGUAGE_NO_LANGUAGE,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **filename** HTML file name without path 
  * **value** key value map containing the values for display. It gets updated by the values that have been entered in the dialog. 
  * **lang** language 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Dialog result (>=0) or SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: GUI error codes are mapped to SDI error codes! 

Display customer specific HTML dialog.The dialog has to be stored in a separate user signed HTML file. The appearance of the dialog can be controlled with a corresponding CSS file. (24-0A) 


### function displayDialog

```
int displayDialog(
    unsigned dialog_opt,
    const std::string & filename,
    std::map< std::string, std::string > & value,
    Language lang =LANGUAGE_NO_LANGUAGE,
    int dest =1
)
```


**Parameters**: 

  * **dialog_opt** dialog options ([DialogOptions](namespacevfisdi.md#enum-dialogoptions)) (DFA13D) 
  * **filename** HTML file name without path 
  * **value** key value map containing the values for display. It gets updated by the values that have been entered in the dialog. 
  * **lang** language 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Dialog result (>=0) or SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: GUI error codes are mapped to SDI error codes! 

Display customer specific HTML dialog.The dialog has to be stored in a separate user signed HTML file. The appearance of the dialog can be controlled with a corresponding CSS file. (24-0A) 


### function displayGetAsyncResult

```
int displayGetAsyncResult(
    enum DialogAsyncStatus & status,
    int dest =1
)
```


**Parameters**: 

  * **status** async dialog status 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Dialog result (>=0) or SDI error code ([Result](namespacevfisdi.md#enum-result)) 

get the result of an input started with dialog option DLG_ASYNC 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
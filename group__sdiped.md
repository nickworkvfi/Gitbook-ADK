---
title: PIN entry interface

---

# PIN entry interface



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[pedGetPIN](group__sdiped.md#function-pedgetpin)**(const std::vector< TouchButton > & btn =std::vector< TouchButton >(), bool bypass =false, int timeout =300, int navigator_mode =0, int min_digits =4, int max_digits =12, Language lang =LANGUAGE_NO_LANGUAGE) |
| int | **[pedGetPIN](group__sdiped.md#function-pedgetpin)**(unsigned pin_options, const BCD< 6 > amount =0, int currency =-1, const char * applabel =0, const char * headline =0, unsigned pwd_char =0, const std::vector< TouchButton > & btn =std::vector< TouchButton >(), unsigned bypass =BYPASS_DISABLED, int timeout =300, int interchar_timeout =0, int min_digits =4, int max_digits =12, Language lang =LANGUAGE_NO_LANGUAGE) |
| int | **[pedGetPIN](group__sdiped.md#function-pedgetpin)**(bool bypass =false, int timeout =300, int min_digits =4, int max_digits =12, Language lang =LANGUAGE_NO_LANGUAGE) |
| int | **[pedSetPINTimeout](group__sdiped.md#function-pedsetpintimeout)**(unsigned short timeout_sec) |
| void | **[pedConfirmKey](group__sdiped.md#function-pedconfirmkey)**() |
| int | **[pedStartPIN](group__sdiped.md#function-pedstartpin)**(const std::vector< TouchButton > & btn =std::vector< TouchButton >(), int bypass_key =0, int navigator_mode =0, int minlen =4, int maxlen =12, bool clear_all =false, bool auto_enter =false) |
| int | **[pedPollPIN](group__sdiped.md#function-pedpollpin)**(PINStatus & pin, int & digits, int & status) |
| int | **[pedStopPIN](group__sdiped.md#function-pedstoppin)**() |
| int | **[pedSetPINInputParameter](group__sdiped.md#function-pedsetpininputparameter)**(bool clear_all) |
| int | **[pedSetPINInputParameter](group__sdiped.md#function-pedsetpininputparameter)**(unsigned pin_options, const char * headline =0, unsigned pwd_char =0, unsigned bypass =BYPASS_DISABLED, int interchar_timeout =0, int min_digits =4, int max_digits =12, int dest =1) |


## Functions Documentation

### function pedGetPIN

```
int pedGetPIN(
    const std::vector< TouchButton > & btn =std::vector< TouchButton >(),
    bool bypass =false,
    int timeout =300,
    int navigator_mode =0,
    int min_digits =4,
    int max_digits =12,
    Language lang =LANGUAGE_NO_LANGUAGE
)
```


**Parameters**: 

  * **btn** position and size of touch buttons 
  * **bypass** true if bypass is enabled, else false 
  * **timeout** timeout in seconds 
  * **navigator_mode** navigator mode: 0 (disabled), 1 (mode 1) or 2 (mode 2) 
  * **min_digits** minimum number of PIN digits 
  * **max_digits** maximum number of PIN digits 
  * **lang** language, default is current terminal/transaction language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: In case of bypass ERR_PED_BYPASS is returned. 

PIN entry, PIN status updates trigger invocation of the status callback set using [setStatusCallback()](group__sdicallback.md#function-setstatuscallback) (22-01) 


### function pedGetPIN

```
int pedGetPIN(
    unsigned pin_options,
    const BCD< 6 > amount =0,
    int currency =-1,
    const char * applabel =0,
    const char * headline =0,
    unsigned pwd_char =0,
    const std::vector< TouchButton > & btn =std::vector< TouchButton >(),
    unsigned bypass =BYPASS_DISABLED,
    int timeout =300,
    int interchar_timeout =0,
    int min_digits =4,
    int max_digits =12,
    Language lang =LANGUAGE_NO_LANGUAGE
)
```


**Parameters**: 

  * **pin_options** PIN entry options ([PINEntryOptions](namespacevfisdi.md#enum-pinentryoptions)) 
  * **amount** payment amount (only displayed if also a valid currency is provided) 
  * **currency** currency ([Currency](namespacevfisdi.md#enum-currency)) or -1 
  * **applabel** application label for display or NULL 
  * **headline** headline for display or NULL 
  * **pwd_char** unicode password character code (0: default character) 
  * **btn** position and size of touch buttons 
  * **bypass** true if bypass is enabled, else false 
  * **timeout** timeout in seconds 
  * **interchar_timeout** inter character timeout in milliseconds (0: disabled) 
  * **min_digits** minimum number of PIN digits 
  * **max_digits** maximum number of PIN digits 
  * **lang** language, default is current terminal/transaction language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: In case of bypass ERR_PED_BYPASS is returned. 

PIN entry, PIN status updates trigger invocation of the status callback set using [setStatusCallback()](group__sdicallback.md#function-setstatuscallback) (22-01) 


### function pedGetPIN

```
inline int pedGetPIN(
    bool bypass =false,
    int timeout =300,
    int min_digits =4,
    int max_digits =12,
    Language lang =LANGUAGE_NO_LANGUAGE
)
```


**Parameters**: 

  * **bypass** true if bypass is enabled, else false 
  * **timeout** timeout in seconds 
  * **min_digits** minimum number of PIN digits 
  * **max_digits** maximum number of PIN digits 
  * **lang** language, default is current terminal/transaction language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

PIN entry using keypad, PIN status updates trigger invocation of the status callback set using [setStatusCallback()](group__sdicallback.md#function-setstatuscallback) (22-01) 


### function pedSetPINTimeout

```
int pedSetPINTimeout(
    unsigned short timeout_sec
)
```


**Parameters**: 

  * **timeout_sec** timeout in seconds 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

configure PIN timeout for pedGetPIN (22-02) 


### function pedConfirmKey

```
void pedConfirmKey()
```


confirm the selected key in Navigator mode 2 (20-20) 


### function pedStartPIN

```
int pedStartPIN(
    const std::vector< TouchButton > & btn =std::vector< TouchButton >(),
    int bypass_key =0,
    int navigator_mode =0,
    int minlen =4,
    int maxlen =12,
    bool clear_all =false,
    bool auto_enter =false
)
```


**Parameters**: 

  * **btn** position and size of touch buttons 
  * **bypass_key** 0: no bypass, ASCII code of bypass key, add ASCII+256 to activate direct bypass 
  * **navigator_mode** navigator mode: 0 (disabled), 1 (mode 1) or 2 (mode 2) 
  * **minlen** minimum PIN length 
  * **maxlen** maximum PIN length 
  * **clear_all** if true backspace clears all digits instead of only last one 
  * **auto_enter** if true automatically confirm PIN if _maxlen_ has been reached 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

start PIN entry (22-03) 


### function pedPollPIN

```
int pedPollPIN(
    PINStatus & pin,
    int & digits,
    int & status
)
```


**Parameters**: 

  * **pin** PINSTATUS_COLLECTING while PIN is entered, PINSTATUS_OK, PINSTATUS_CANCELLED, PINSTATUS_BYPASS, PINSTATUS_TIMEOUT or PINSTATUS_ERROR when done 
  * **digits** number of digits entered or 0xFC for bypass, 0xFD for cancel, 0xFE for timeout or 0xFF for error 
  * **status** additional status information (e.g. for Navigator) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result))

poll PIN entry status (22-04) 
Status information: 
| Status  | Description   |
|  -------- | -------- |
| 0x00  | no key entered or selected   |
| 0x01  | digit entered   |
| 0x08  | backspace entered   |
| 0x0D  | OK entered   |
| 0x1B  | cancel enterd   |
| 0xD1  | numeric key selected   |
| 0xD2  | cancel selected   |
| 0xD3  | backspace selected   |
| 0xDE  | OK selected   |
| 0xDF  | multiple touches   |
| 0xF8  | underflow   |
| 0xF9  | overflow   |


### function pedStopPIN

```
int pedStopPIN()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Stop PIN entry and release resources, cancel PIN entry if required. (22-05) 


### function pedSetPINInputParameter

```
int pedSetPINInputParameter(
    bool clear_all
)
```


**Parameters**: 

  * **clear_all** if true backspace clears all digits instead of only last one 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Configure input parameter for PIN entry (22-06) 


### function pedSetPINInputParameter

```
int pedSetPINInputParameter(
    unsigned pin_options,
    const char * headline =0,
    unsigned pwd_char =0,
    unsigned bypass =BYPASS_DISABLED,
    int interchar_timeout =0,
    int min_digits =4,
    int max_digits =12,
    int dest =1
)
```


**Parameters**: 

  * **pin_options** PIN entry options ([PINEntryOptions](namespacevfisdi.md#enum-pinentryoptions)) 
  * **headline** headline for display or NULL 
  * **pwd_char** unicode password character code (0: default character) 
  * **bypass** true if bypass is enabled, else false 
  * **interchar_timeout** inter character timeout in milliseconds (0: disabled) 
  * **min_digits** minimum number of PIN digits 
  * **max_digits** maximum number of PIN digits 
  * **dest** destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: In case of bypass ERR_PED_BYPASS is returned. 

Configure input parameter for PIN entry (22-06) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
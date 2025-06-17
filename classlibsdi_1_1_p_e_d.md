---
title: libsdi::PED

---

# libsdi::PED



 [More...](#detailed-description)


`#include <sdi_if.h>`

Inherits from [SdiCmd](classlibsdi_1_1_sdi_cmd.md), [SdiBase](classlibsdi_1_1_sdi_base.md)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NavigatorMode](classlibsdi_1_1_p_e_d.md#enum-navigatormode)** { NAVIGATOR_MODE_OFF, NAVIGATOR_MODE_DOUBLE_TAB, NAVIGATOR_MODE_TACTILE_BUTTON} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setTimeout](classlibsdi_1_1_p_e_d.md#function-settimeout)**(unsigned seconds)<br>Set PIN input dialog timeout (DFA005) for [startPinEntry()]().  |
| bool | **[setDefaultTimeout](classlibsdi_1_1_p_e_d.md#function-setdefaulttimeout)**(unsigned seconds)<br>Configure PIN input dialog default timeout (22-02)  |
| void | **[setTouchCoordinates](classlibsdi_1_1_p_e_d.md#function-settouchcoordinates)**(const unsigned char * array, unsigned size)<br>configure touch coordinates (DFA024) for [startPinInput()]() and [startPinEntry()]().  |
| void | **[setNavigatorMode](classlibsdi_1_1_p_e_d.md#function-setnavigatormode)**(enum [NavigatorMode](classlibsdi_1_1_p_e_d.md#enum-navigatormode) mode)<br>Activate Navigator Mode (DFA025) for [startPinInput()]() and [startPinEntry()]().  |
| void | **[setPinDigitCountMinMax](classlibsdi_1_1_p_e_d.md#function-setpindigitcountminmax)**(unsigned char min, unsigned char max)<br>Change PIN digit count limits (DFA02B and DFA02C) for [sendPinInputParameters()](), [startPinInput()]() and [startPinEntry()]().  |
| void | **[setLanguage](classlibsdi_1_1_p_e_d.md#function-setlanguage)**(unsigned char lang)<br>Set language (DFA008) for Pin input dialog of [startPinInput()]().  |
| void | **[setAmount](classlibsdi_1_1_p_e_d.md#function-setamount)**(const unsigned char * amount)<br>Amount (9F02) for PIN input dialog of [startPinInput()]() |
| void | **[setCurrency](classlibsdi_1_1_p_e_d.md#function-setcurrency)**(const unsigned char * currency)<br>Currency (5F2A) for PIN input dialog of [startPinInput()]() |
| void | **[setAppLabel](classlibsdi_1_1_p_e_d.md#function-setapplabel)**(const std::string & appLabel)<br>Card application label (DFA037) for PIN input dialog of [startPinInput()]() |
| int | **[startPinInput](classlibsdi_1_1_p_e_d.md#function-startpininput)**()<br>Send command for PIN input (22-01).  |
| int | **[startPinInput](classlibsdi_1_1_p_e_d.md#function-startpininput)**(bool enablePinBypass)<br>Send command for PIN input (22-01).  |
| bool | **[startPinEntry](classlibsdi_1_1_p_e_d.md#function-startpinentry)**(unsigned pinBypassKey =0)<br>Send command for asynchronous PIN input (22-03, polling mode).  |
| bool | **[pollPinEntry](classlibsdi_1_1_p_e_d.md#function-pollpinentry)**(std::vector< unsigned char > & status)<br>poll PIN input status after [startPinEntry()](classlibsdi_1_1_p_e_d.md#function-startpinentry) (22-04)  |
| bool | **[stopPinEntry](classlibsdi_1_1_p_e_d.md#function-stoppinentry)**()<br>abort PIN entry (22-05)  |
| bool | **[setPinInputClearKeyMode](classlibsdi_1_1_p_e_d.md#function-setpininputclearkeymode)**(bool clearAllDigits)<br>Configure behavior of the backspace key for the PIN input dialog (22-06).  |
| void | **[setClearKeyMode](classlibsdi_1_1_p_e_d.md#function-setclearkeymode)**(bool clearAllDigits)<br>Setter for clear key behavior (DFA02F) for [sendPinInputParameters()](), [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput) and [startPinEntry()](classlibsdi_1_1_p_e_d.md#function-startpinentry).  |
| void | **[setPinBypassKeyAndMode](classlibsdi_1_1_p_e_d.md#function-setpinbypasskeyandmode)**(unsigned char value)<br>Set PIN bypass key and mode bit mask (DFA104) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput).  |
| void | **[setAutoConfirmation](classlibsdi_1_1_p_e_d.md#function-setautoconfirmation)**(bool enable)<br>Set automatic confirmation when maximum digits are entered (DFA02E) for [sendPinInputParameters()](), [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput) and [startPinEntry()](classlibsdi_1_1_p_e_d.md#function-startpinentry).  |
| void | **[setDialogOptions](classlibsdi_1_1_p_e_d.md#function-setdialogoptions)**(uint32_t options)<br>Set dialog option bit mask (DFA13D) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput).  |
| void | **[setIntercharTimeout](classlibsdi_1_1_p_e_d.md#function-setinterchartimeout)**(uint32_t millis)<br>Set inter-character timeout (DFA035) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput).  |
| void | **[setHeaderLabel](classlibsdi_1_1_p_e_d.md#function-setheaderlabel)**(const std::string & label)<br>Set label for header area (DFA143) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput).  |
| void | **[setEchoChar](classlibsdi_1_1_p_e_d.md#function-setechochar)**(uint32_t unicode)<br>Set PIN echo character as unicode (DFA036) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput).  |
| bool | **[sendPinInputParameters](classlibsdi_1_1_p_e_d.md#function-sendpininputparameters)**(bool epp =true)<br>Send parameters that have been set before (22-06).  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receiveGetPinResult](classlibsdi_1_1_p_e_d.md#function-receivegetpinresult)**()<br>Receive Pin Input result after [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput).  |
| bool | **[getPinBypassKey](classlibsdi_1_1_p_e_d.md#function-getpinbypasskey)**(unsigned char & value)<br>Get PIN bypass key after [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput) and [receiveGetPinResult()](classlibsdi_1_1_p_e_d.md#function-receivegetpinresult).  |

## Additional inherited members

**Public Functions inherited from [SdiCmd](classlibsdi_1_1_sdi_cmd.md)**

|                | Name           |
| -------------- | -------------- |
| | **[SdiCmd](classlibsdi_1_1_sdi_cmd.md#function-sdicmd)**() |
| virtual | **[~SdiCmd](classlibsdi_1_1_sdi_cmd.md#function-~sdicmd)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[sendReceive](classlibsdi_1_1_sdi_cmd.md#function-sendreceive)**(unsigned char cla, unsigned char ins, unsigned char p1 =0, unsigned char p2 =0, unsigned maxResponseSize =2048)<br>Generic SDI command exchange function combining sending of request, waiting and receiving the response.  |
| int | **[send](classlibsdi_1_1_sdi_cmd.md#function-send)**(unsigned char cla, unsigned char ins, unsigned char p1 =0, unsigned char p2 =0)<br>Like [sendReceive()](classlibsdi_1_1_sdi_cmd.md#function-sendreceive) but without waiting for response.  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receive](classlibsdi_1_1_sdi_cmd.md#function-receive)**(unsigned maxResponseSize =2048)<br>Receive SDI response after request has been send with [send()](classlibsdi_1_1_sdi_cmd.md#function-send) and data availability has been signaled.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, int value, unsigned fixedLength =0)<br>Set integer data object SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, uint32_t value, unsigned fixedLength =0)<br>Set unsigned integer data object SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, const unsigned char * data, unsigned dataLen)<br>Set byte array data object in SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, unsigned char byteValue)<br>Set single byte value in SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, const std::vector< unsigned char > & data)<br>Set byte array data object in SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, const std::string & value)<br>Set character data object in SDI command.  |
| void | **[setCommandDestination](classlibsdi_1_1_sdi_cmd.md#function-setcommanddestination)**(bool epp, bool force =false)<br>Set command destination for systems with EPP Unless force the command destination is set only if parameter epp is true.  |
| virtual void | **[clear](classlibsdi_1_1_sdi_cmd.md#function-clear)**()<br>Remove all SDI command command input data.  |
| virtual void | **[clear](classlibsdi_1_1_sdi_cmd.md#function-clear)**(const char * path)<br>Remove single input data stored in [dataIn](classlibsdi_1_1_sdi_cmd.md#variable-datain).  |
| virtual void | **[clearResults](classlibsdi_1_1_sdi_cmd.md#function-clearresults)**()<br>Remove all SDI response data.  |
| void | **[importResults](classlibsdi_1_1_sdi_cmd.md#function-importresults)**(const [SdiCmd](classlibsdi_1_1_sdi_cmd.md) & intermediate)<br>Transfer status word, client error and response data from an intermediate command while keeping command input data.  |
| void | **[importResults](classlibsdi_1_1_sdi_cmd.md#function-importresults)**(const unsigned char * sw12, const unsigned char * tlvData, unsigned tlvSize)<br>Inject result data from a call back.  |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, int & value) |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, uint32_t & value) |
| int | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, unsigned char * buffer, unsigned bufferSize) |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, unsigned char & value) |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, std::vector< unsigned char > & buffer) |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, std::string & value) |
| std::string | **[getString](classlibsdi_1_1_sdi_cmd.md#function-getstring)**(const char * path) |

**Protected Attributes inherited from [SdiCmd](classlibsdi_1_1_sdi_cmd.md)**

|                | Name           |
| -------------- | -------------- |
| void * | **[dataIn](classlibsdi_1_1_sdi_cmd.md#variable-datain)** <br>Command input buffer collecting TLV data items.  |
| void * | **[dataOut](classlibsdi_1_1_sdi_cmd.md#variable-dataout)** <br>Command response TLV data items.  |

**Public Classes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| struct | **[PluginResult](structlibsdi_1_1_sdi_base_1_1_plugin_result.md)**  |

**Public Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| | **[SdiBase](classlibsdi_1_1_sdi_base.md#function-sdibase)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12)**() |
| int | **[getAdditionalResultValue](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue)**()<br>Access Additional Result Value if returned in SDI response.  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[getClientError](classlibsdi_1_1_sdi_base.md#function-getclienterror)**()<br>Access client side error codes.  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receiveSW12](classlibsdi_1_1_sdi_base.md#function-receivesw12)**()<br>Receive SDI server response with no data.  |
| void | **[clear](classlibsdi_1_1_sdi_base.md#function-clear)**()<br>clear result data obtained from SDI communication  |
| void | **[importResults](classlibsdi_1_1_sdi_base.md#function-importresults)**(const [SdiBase](classlibsdi_1_1_sdi_base.md) & intermediate)<br>set result data obtained from intermediate SDI communication  |

**Protected Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| void | **[setSdiSw12](classlibsdi_1_1_sdi_base.md#function-setsdisw12)**(enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) s) |
| void | **[setClientError](classlibsdi_1_1_sdi_base.md#function-setclienterror)**(int libsdiprotocol_result) |

**Protected Attributes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| unsigned short | **[sw12](classlibsdi_1_1_sdi_base.md#variable-sw12)**  |
| int | **[additionalResultValue](classlibsdi_1_1_sdi_base.md#variable-additionalresultvalue)**  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[clientErr](classlibsdi_1_1_sdi_base.md#variable-clienterr)**  |


## Detailed Description

```cpp
class libsdi::PED;
```


Interface for PIN input dialog control _[PED](classlibsdi_1_1_p_e_d.md) Interface_

## Public Types Documentation

### enum NavigatorMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NAVIGATOR_MODE_OFF | | Navigator Mode disabled.   |
| NAVIGATOR_MODE_DOUBLE_TAB | | mode 1 with double tap   |
| NAVIGATOR_MODE_TACTILE_BUTTON | | mode 2 with tactile button   |




Navigator Mode is used for barrier-free PIN entry on touch-only devices 


## Public Functions Documentation

### function setTimeout

```cpp
void setTimeout(
    unsigned seconds
)
```

Set PIN input dialog timeout (DFA005) for [startPinEntry()](). 

**Parameters**: 

  * **seconds** PIN input dialog timeout 


This timeout will be used for PIN entries started with this object and replaces the SDI services default timeout configured via setDefaultTimeout.


### function setDefaultTimeout

```cpp
bool setDefaultTimeout(
    unsigned seconds
)
```

Configure PIN input dialog default timeout (22-02) 

**Parameters**: 

  * **seconds** PIN input dialog timeout 


**Return**: true in case of successful execution 

This timeout will be applied in case [setTimeout()](classlibsdi_1_1_p_e_d.md#function-settimeout) has not been invoked. 


### function setTouchCoordinates

```cpp
void setTouchCoordinates(
    const unsigned char * array,
    unsigned size
)
```

configure touch coordinates (DFA024) for [startPinInput()]() and [startPinEntry()](). 

**Parameters**: 

  * **array** coordinates 
  * **size** size of coordinates array (n*9) 


Each key consists of x-position b2 y-position b2 button width b2 button height b2 associated key ASCII code b1 ("0" .. "9" = '30' .. '31', cancel = '1B', correction = '08', enter = '0D')


### function setNavigatorMode

```cpp
void setNavigatorMode(
    enum NavigatorMode mode
)
```

Activate Navigator Mode (DFA025) for [startPinInput()]() and [startPinEntry()](). 

### function setPinDigitCountMinMax

```cpp
void setPinDigitCountMinMax(
    unsigned char min,
    unsigned char max
)
```

Change PIN digit count limits (DFA02B and DFA02C) for [sendPinInputParameters()](), [startPinInput()]() and [startPinEntry()](). 

**Parameters**: 

  * **min** minimal number of PIN digits [4..12] 
  * **max** maximal number of PIN digits [4..12] 


The default values are 4 and 12. Calling this method is only required if other values shall be applied.


### function setLanguage

```cpp
void setLanguage(
    unsigned char lang
)
```

Set language (DFA008) for Pin input dialog of [startPinInput()](). 

**Parameters**: 

  * **lang** language code 


**Note**: this option is valid in standard mode only 

### function setAmount

```cpp
void setAmount(
    const unsigned char * amount
)
```

Amount (9F02) for PIN input dialog of [startPinInput()]()

**Parameters**: 

  * **amount** n12 (6 bytes) 


**Note**: this option is valid in standard mode only 

### function setCurrency

```cpp
void setCurrency(
    const unsigned char * currency
)
```

Currency (5F2A) for PIN input dialog of [startPinInput()]()

**Parameters**: 

  * **currency** n3 (2 bytes, padded left with '0') 


**Note**: this option is valid in standard mode only 

### function setAppLabel

```cpp
void setAppLabel(
    const std::string & appLabel
)
```

Card application label (DFA037) for PIN input dialog of [startPinInput()]()

**Parameters**: 

  * **appLabel** Card application as UTF-8 string 


**Note**: this option is valid in standard mode only 

### function startPinInput

```cpp
int startPinInput()
```

Send command for PIN input (22-01). 

**Return**: return value from [SDI_Send()](sdiprotocol_8h.md#function-sdi-send)

**Par**: Setters

[setTimeout()](classlibsdi_1_1_p_e_d.md#function-settimeout) for DFA005 
[setPinBypassKeyAndMode()](classlibsdi_1_1_p_e_d.md#function-setpinbypasskeyandmode) for DFA104 
[setTouchCoordinates()](classlibsdi_1_1_p_e_d.md#function-settouchcoordinates) for DFA024 (headless mode only) 
[setNavigatorMode()](classlibsdi_1_1_p_e_d.md#function-setnavigatormode) for DFA025 
[setPinDigitCountMinMax()](classlibsdi_1_1_p_e_d.md#function-setpindigitcountminmax) for DFA02B and DFA02C 
[setClearKeyMode()](classlibsdi_1_1_p_e_d.md#function-setclearkeymode) for DFA02F 
[setIntercharTimeout()](classlibsdi_1_1_p_e_d.md#function-setinterchartimeout) for DFA035 
[setAutoConfirmation()](classlibsdi_1_1_p_e_d.md#function-setautoconfirmation) for DFA02E 
[setLanguage()](classlibsdi_1_1_p_e_d.md#function-setlanguage) for DFA008 (standard mode only) 
[setAmount()](classlibsdi_1_1_p_e_d.md#function-setamount) for 9F02 (standard mode only) 
[setCurrency()](classlibsdi_1_1_p_e_d.md#function-setcurrency) for 5F2A (standard mode only) 
[setAppLabel()](classlibsdi_1_1_p_e_d.md#function-setapplabel) for DFA037 (stanard mode only) 
[setDialogOptions()](classlibsdi_1_1_p_e_d.md#function-setdialogoptions) for DFA13D (standard mode only) 
[setHeaderLabel()](classlibsdi_1_1_p_e_d.md#function-setheaderlabel) for DFA143 (standard mode only) 
[setEchoChar()](classlibsdi_1_1_p_e_d.md#function-setechochar) for DFA036 (standard mode only)

The response should be received with [receiveGetPinResult()](classlibsdi_1_1_p_e_d.md#function-receivegetpinresult) or [receiveSW12()](classlibsdi_1_1_sdi_base.md#function-receivesw12). [SDI_SetSdiCallback()](sdiprotocol_8h.md#function-sdi-setsdicallback) can be used to receive PIN input status messages, i.e. the digit count.


### function startPinInput

```cpp
int startPinInput(
    bool enablePinBypass
)
```

Send command for PIN input (22-01). 

**Parameters**: 

  * **enablePinBypass** if false, PIN bypass is disabled otherwise current configuration from [setPinBypassKeyAndMode()](classlibsdi_1_1_p_e_d.md#function-setpinbypasskeyandmode) is applied. 


**Return**: return value from [SDI_Send()](sdiprotocol_8h.md#function-sdi-send)

This is for backward compatibility with previous libsdiclient versions having a default parameter. For description, see [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput) without parameters. 


### function startPinEntry

```cpp
bool startPinEntry(
    unsigned pinBypassKey =0
)
```

Send command for asynchronous PIN input (22-03, polling mode). 

**Parameters**: 

  * **pinBypassKey** PIN bypass key (DFA02D), 

 0: deactivate (default), 

 ASCII code of bypass key, 

 256 for direct PIN bypass


**Return**: true for success 

**Par**: Setters

[setPinDigitCountMinMax()](classlibsdi_1_1_p_e_d.md#function-setpindigitcountminmax) for DFA02B and DFA02C 
[setAutoConfirmation()](classlibsdi_1_1_p_e_d.md#function-setautoconfirmation) for DFA02E 
[setClearKeyMode()](classlibsdi_1_1_p_e_d.md#function-setclearkeymode) for DFA02F 
[setNavigatorMode()](classlibsdi_1_1_p_e_d.md#function-setnavigatormode) for DFA025 
[setTouchCoordinates()](classlibsdi_1_1_p_e_d.md#function-settouchcoordinates) for DFA024

Use [pollPinEntry()](classlibsdi_1_1_p_e_d.md#function-pollpinentry) and [stopPinEntry()](classlibsdi_1_1_p_e_d.md#function-stoppinentry) hereafter.


### function pollPinEntry

```cpp
bool pollPinEntry(
    std::vector< unsigned char > & status
)
```

poll PIN input status after [startPinEntry()](classlibsdi_1_1_p_e_d.md#function-startpinentry) (22-04) 

**Parameters**: 

  * **status** like described for tag DFA000 


**Return**: true for success 

### function stopPinEntry

```cpp
bool stopPinEntry()
```

abort PIN entry (22-05) 

**Return**: true for success 

### function setPinInputClearKeyMode

```cpp
bool setPinInputClearKeyMode(
    bool clearAllDigits
)
```

Configure behavior of the backspace key for the PIN input dialog (22-06). 

**Parameters**: 

  * **clearAllDigits** true: Clear all input, false: Just clear one digit. 


Note: In contrast to other setters this function sends this single configuration immediately. This is somewhat obsolete as there are [setClearKeyMode()](classlibsdi_1_1_p_e_d.md#function-setclearkeymode) and [sendPinInputParameters()](classlibsdi_1_1_p_e_d.md#function-sendpininputparameters) can do the same together with other parameters. 


### function setClearKeyMode

```cpp
void setClearKeyMode(
    bool clearAllDigits
)
```

Setter for clear key behavior (DFA02F) for [sendPinInputParameters()](), [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput) and [startPinEntry()](classlibsdi_1_1_p_e_d.md#function-startpinentry). 

**Parameters**: 

  * **clearAllDigits** true: Clear all input, false: Just clear one digit. 


### function setPinBypassKeyAndMode

```cpp
void setPinBypassKeyAndMode(
    unsigned char value
)
```

Set PIN bypass key and mode bit mask (DFA104) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput). 

**Parameters**: 

  * **value** value for DFA104 


### function setAutoConfirmation

```cpp
void setAutoConfirmation(
    bool enable
)
```

Set automatic confirmation when maximum digits are entered (DFA02E) for [sendPinInputParameters()](), [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput) and [startPinEntry()](classlibsdi_1_1_p_e_d.md#function-startpinentry). 

**Parameters**: 

  * **enable** enable auto confirmation 


### function setDialogOptions

```cpp
void setDialogOptions(
    uint32_t options
)
```

Set dialog option bit mask (DFA13D) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput). 

**Parameters**: 

  * **options** Option bit mask 


### function setIntercharTimeout

```cpp
void setIntercharTimeout(
    uint32_t millis
)
```

Set inter-character timeout (DFA035) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput). 

**Parameters**: 

  * **millis** timout in milli seconds 


### function setHeaderLabel

```cpp
void setHeaderLabel(
    const std::string & label
)
```

Set label for header area (DFA143) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput). 

**Parameters**: 

  * **label** Label 


Setting empty value resets the default.


### function setEchoChar

```cpp
void setEchoChar(
    uint32_t unicode
)
```

Set PIN echo character as unicode (DFA036) for [sendPinInputParameters()]() and [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput). 

**Parameters**: 

  * **unicode** unicode code 


### function sendPinInputParameters

```cpp
bool sendPinInputParameters(
    bool epp =true
)
```

Send parameters that have been set before (22-06). 

**Parameters**: 

  * **epp** command destination, default is true for EPP 


**Par**: Setters

[setClearKeyMode()](classlibsdi_1_1_p_e_d.md#function-setclearkeymode) for DFA02F 
[setPinBypassKeyAndMode()](classlibsdi_1_1_p_e_d.md#function-setpinbypasskeyandmode) for DFA104 
[setPinDigitCountMinMax()](classlibsdi_1_1_p_e_d.md#function-setpindigitcountminmax) for DFA02B and DFA02C 
[setDialogOptions()](classlibsdi_1_1_p_e_d.md#function-setdialogoptions) for DFA13D 
[setHeaderLabel()](classlibsdi_1_1_p_e_d.md#function-setheaderlabel) for DFA143 
[setIntercharTimeout()](classlibsdi_1_1_p_e_d.md#function-setinterchartimeout) for DFA035 
[setAutoConfirmation()](classlibsdi_1_1_p_e_d.md#function-setautoconfirmation) for DFA02E 
[setEchoChar()](classlibsdi_1_1_p_e_d.md#function-setechochar) for DFA036

Note: This command should be used to configure standard mode behavior only and therefore the command destination defaults to EPP


### function receiveGetPinResult

```cpp
enum SDI_SW12 receiveGetPinResult()
```

Receive Pin Input result after [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput). 

This is the alternative to [receiveSW12()](classlibsdi_1_1_sdi_base.md#function-receivesw12) if data is expected, e.g. if two bypass keys are possible and [getPinBypassKey()](classlibsdi_1_1_p_e_d.md#function-getpinbypasskey) will be called later. 


### function getPinBypassKey

```cpp
bool getPinBypassKey(
    unsigned char & value
)
```

Get PIN bypass key after [startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput) and [receiveGetPinResult()](classlibsdi_1_1_p_e_d.md#function-receivegetpinresult). 

**Parameters**: 

  * **value** key code (see 22-01 documentation, DFA038) return true if information had been received 


This is for the case that multiple bypass keys are possible


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
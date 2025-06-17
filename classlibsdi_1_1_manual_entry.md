---
title: libsdi::ManualEntry
summary: Interface for SDI command MSR Card Data Entry (21-02) 

---

# libsdi::ManualEntry



Interface for SDI command [MSR Card Data Entry] (21-02)  [More...](#detailed-description)


`#include <sdi_if.h>`

Inherits from [SdiCmd](classlibsdi_1_1_sdi_cmd.md), [SdiBase](classlibsdi_1_1_sdi_base.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[ManualEntry](classlibsdi_1_1_manual_entry.md#function-manualentry)**() |
| | **[~ManualEntry](classlibsdi_1_1_manual_entry.md#function-~manualentry)**() |
| void | **[setLanguage](classlibsdi_1_1_manual_entry.md#function-setlanguage)**(unsigned char language)<br>Configure text language for manual card data entry (DFA008)  |
| int | **[setTimeout](classlibsdi_1_1_manual_entry.md#function-settimeout)**(unsigned seconds)<br>Configure timeout for manual card data entry (DFA005)  |
| int | **[setCvvEntryDeactivation](classlibsdi_1_1_manual_entry.md#function-setcvventrydeactivation)**(unsigned char cvvEntry)<br>Configure temporary Card Entry Value deactivation for manual card data entry (DFA017)  |
| int | **[setCardDataEntryMode](classlibsdi_1_1_manual_entry.md#function-setcarddataentrymode)**(unsigned char mode)<br>Configure Card Data Entry mode (DFA018)  |
| int | **[setCvvInputString](classlibsdi_1_1_manual_entry.md#function-setcvvinputstring)**(const std::string & inputString)<br>Configure optional alternative input format string for CVV (DFA01A)  |
| int | **[setTouchCoordinates](classlibsdi_1_1_manual_entry.md#function-settouchcoordinates)**(const unsigned char * array, unsigned size)<br>Configure touch coordinate table for manual card entry (DFA024)  |
| int | **[setMimimumDigits](classlibsdi_1_1_manual_entry.md#function-setmimimumdigits)**(unsigned char minimumDigits)<br>Configure forcing of minimum number of Pan digits to 7 instead the default of 10 digits (DFA123)  |
| int | **[setDoubleConfirmationMode](classlibsdi_1_1_manual_entry.md#function-setdoubleconfirmationmode)**(unsigned char mode)<br>Configure skipping of double confirmation of PAN in headless mode (DFA033)  |
| int | **[start](classlibsdi_1_1_manual_entry.md#function-start)**()<br>Start manual card data entry (21-02)  |
| int | **[receiveResult](classlibsdi_1_1_manual_entry.md#function-receiveresult)**(std::string & obfuscatedPAN, std::vector< unsigned char > & token)<br>Receive manual card data entry result.  |
| int | **[getPluginResponseData](classlibsdi_1_1_manual_entry.md#function-getpluginresponsedata)**(std::vector< unsigned char > & data)<br>Access plugin response data (DFA101) in case one plugin has been triggered.  |
| int | **[getPluginResponseData](classlibsdi_1_1_manual_entry.md#function-getpluginresponsedata)**(unsigned index, int32_t & pluginId, int32_t & pluginResponseCode, std::vector< unsigned char > & data)<br>Access plugin response data (FFA107, DFA101, DFA10C, DFA10D)  |
| bool | **[getPluginResponseData](classlibsdi_1_1_manual_entry.md#function-getpluginresponsedata)**(std::vector< [PluginResult](structlibsdi_1_1_sdi_base_1_1_plugin_result.md) > & results)<br>Access plugin response data (FFA107, DFA101, DFA10C, DFA10D)  |

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
class libsdi::ManualEntry;
```

Interface for SDI command [MSR Card Data Entry] (21-02) 

Use the setters to configure the command, then use [SDI_SetDataAvailableCallback()](sdiprotocol_8h.md#function-sdi-setdataavailablecallback) to register a notification function. With [start()](classlibsdi_1_1_manual_entry.md#function-start) the manual card data input begins. After data available notification call [receiveResult()](classlibsdi_1_1_manual_entry.md#function-receiveresult) to read the SDI server response. 

## Public Functions Documentation

### function ManualEntry

```cpp
ManualEntry()
```


### function ~ManualEntry

```cpp
~ManualEntry()
```


### function setLanguage

```cpp
void setLanguage(
    unsigned char language
)
```

Configure text language for manual card data entry (DFA008) 

**Parameters**: 

  * **language** language to be used for manual entry 


If not set, default is current terminal/transaction language 


### function setTimeout

```cpp
int setTimeout(
    unsigned seconds
)
```

Configure timeout for manual card data entry (DFA005) 

**Parameters**: 

  * **seconds** PIN input dialog timeout 


**Return**: 0 

### function setCvvEntryDeactivation

```cpp
int setCvvEntryDeactivation(
    unsigned char cvvEntry
)
```

Configure temporary Card Entry Value deactivation for manual card data entry (DFA017) 

**Parameters**: 

  * **cvvEntry** temporary Card Entry Value deactivation during the current command execution 
**0** perform all input 
**1** skip card verification code 
**2** skip expiration and verification code 
**4** just enter CVV after card data read from mag. stripe


**Return**: 0 

### function setCardDataEntryMode

```cpp
int setCardDataEntryMode(
    unsigned char mode
)
```

Configure Card Data Entry mode (DFA018) 

**Parameters**: 

  * **mode** Card Data Entry mode 

 0: Card Data Entry performed in one screen 

 1: Card Data Entry performed in separate screens 


**Return**: 0 

### function setCvvInputString

```cpp
int setCvvInputString(
    const std::string & inputString
)
```

Configure optional alternative input format string for CVV (DFA01A) 

**Parameters**: 

  * **inputString** alternative input string for CVV 


**Return**: 0 

### function setTouchCoordinates

```cpp
int setTouchCoordinates(
    const unsigned char * array,
    unsigned size
)
```

Configure touch coordinate table for manual card entry (DFA024) 

**Parameters**: 

  * **array** coordinate table 
  * **size** byte count of coordinate table (= 9 * button count) 


**Return**: 0 

Each table entry consists of

* x-position b2
* y-position b2
* button width b2
* button height b2
* associated key ASCII code b1 ("0" .. "9" = '30' .. '31', cancel = '1B', correction = '08', enter = '0D')


### function setMimimumDigits

```cpp
int setMimimumDigits(
    unsigned char minimumDigits
)
```

Configure forcing of minimum number of Pan digits to 7 instead the default of 10 digits (DFA123) 

**Parameters**: 

  * **minimumDigits** minimum number of Pan digits to be entered 

 0: Use default (10 digits) 

 1: Force to 7 digits 


**Return**: 0 

### function setDoubleConfirmationMode

```cpp
int setDoubleConfirmationMode(
    unsigned char mode
)
```

Configure skipping of double confirmation of PAN in headless mode (DFA033) 

**Parameters**: 

  * **mode** double confirmation mode of PAN 

 0: Double confirmation active (default) 

 1: Double Confirmation skipped 


**Return**: 0 

### function start

```cpp
int start()
```

Start manual card data entry (21-02) 

**Return**: return value from [SDI_Send()](sdiprotocol_8h.md#function-sdi-send)

**Par**: Setters

[setLanguage()](classlibsdi_1_1_manual_entry.md#function-setlanguage) (DFA008) 
[setTimeout()](classlibsdi_1_1_manual_entry.md#function-settimeout) (DFA005) 
[setCvvEntryDeactivation()](classlibsdi_1_1_manual_entry.md#function-setcvventrydeactivation) (DFA017) 
[setCardDataEntryMode()](classlibsdi_1_1_manual_entry.md#function-setcarddataentrymode) (DFA018) 
[setCvvInputString()](classlibsdi_1_1_manual_entry.md#function-setcvvinputstring) (DFA01A) 
[setTouchCoordinates()](classlibsdi_1_1_manual_entry.md#function-settouchcoordinates) (DFA024) 
[setMimimumDigits()](classlibsdi_1_1_manual_entry.md#function-setmimimumdigits) (DFA123) 
[setDoubleConfirmationMode()](classlibsdi_1_1_manual_entry.md#function-setdoubleconfirmationmode) (DFA033)

Before calling this function use the setters of this class to configure it and [SDI_SetDataAvailableCallback()](sdiprotocol_8h.md#function-sdi-setdataavailablecallback) to register a notification function. Once result is available the notification function will be invoked and [receiveResult()](classlibsdi_1_1_manual_entry.md#function-receiveresult) has to be called.


### function receiveResult

```cpp
int receiveResult(
    std::string & obfuscatedPAN,
    std::vector< unsigned char > & token
)
```

Receive manual card data entry result. 

**Parameters**: 

  * **obfuscatedPAN** an [7..19] 
  * **token** unique card specific token b20 


**Return**: 0 if successful, negative value if an error has occurred, e.g. return value from [SDI_Receive()](sdiprotocol_8h.md#function-sdi-receive)

**Par**: Getters - Manual Card Data Entry

[getPluginResponseData()](classlibsdi_1_1_manual_entry.md#function-getpluginresponsedata) (DFA101) 
[getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)
[getClientError()](classlibsdi_1_1_sdi_base.md#function-getclienterror) inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)

In case of problem, when '0' is returned use [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) to retrieve the SDI Server SW1 SW2.


### function getPluginResponseData

```cpp
int getPluginResponseData(
    std::vector< unsigned char > & data
)
```

Access plugin response data (DFA101) in case one plugin has been triggered. 

**Parameters**: 

  * **data** plugin response data (Note: Data is appended to existing content) 


**Return**: length of appended data, -1 if not present 

### function getPluginResponseData

```cpp
int getPluginResponseData(
    unsigned index,
    int32_t & pluginId,
    int32_t & pluginResponseCode,
    std::vector< unsigned char > & data
)
```

Access plugin response data (FFA107, DFA101, DFA10C, DFA10D) 

**Parameters**: 

  * **index** for iterating the result data, starting with 0 
  * **pluginId** return value of a plugin's `moduleID` function also used as INS byte of SDI 26-xx command to invoke a plugin, 0 if not available 
  * **pluginResponseCode** plugin's `processTrigger` function return value, [SDI_SW12_NONE](namespacelibsdi.md#enumvalue-sdi-sw12-none) if not available 
  * **data** plugin response data (Note: Data is appended to existing content) 


**Return**: length of appended data, -1 if not present = end of iteration 

### function getPluginResponseData

```cpp
bool getPluginResponseData(
    std::vector< PluginResult > & results
)
```

Access plugin response data (FFA107, DFA101, DFA10C, DFA10D) 

**Parameters**: 

  * **results** plugin ids, response codes and response data 


**Return**: true if any plugin result has been found 

-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
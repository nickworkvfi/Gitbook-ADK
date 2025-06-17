---
title: libsdi::SdiCmd
summary: Composition for TLV based SDI commands. 

---

# libsdi::SdiCmd



Composition for TLV based SDI commands.  [More...](#detailed-description)


`#include <sdi_if.h>`

Inherits from [SdiBase](classlibsdi_1_1_sdi_base.md)

Inherited by [CardDetection](classlibsdi_1_1_card_detection.md), [Dialog](classlibsdi_1_1_dialog.md), [ManualEntry](classlibsdi_1_1_manual_entry.md), [PED](classlibsdi_1_1_p_e_d.md)

## Public Functions

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

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| void * | **[dataIn](classlibsdi_1_1_sdi_cmd.md#variable-datain)** <br>Command input buffer collecting TLV data items.  |
| void * | **[dataOut](classlibsdi_1_1_sdi_cmd.md#variable-dataout)** <br>Command response TLV data items.  |

## Additional inherited members

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
class libsdi::SdiCmd;
```

Composition for TLV based SDI commands. 

General instruction:

* Create instance of [SdiCmd](classlibsdi_1_1_sdi_cmd.md#function-sdicmd)
* Populate input data by calling the set functions
* call [sendReceive()](classlibsdi_1_1_sdi_cmd.md#function-sendreceive) to execute the SDI command
* use the getter functions to access response data

**Path Format**

The path specification is a terminated ASCII string composed of the hexadecimal encoded tag names with '/' separating sub tag levels. **Note: The leading "F0/" is implicitly added and must not be used.**To support TLV data not enclosed in 'F0' template the path has to start with '/'. Additionally a counter is possible separated by ',' E.g "E0,3/90,2" gives the second primitive '90' in the third 'E0' container. Note: Count starts at 1: "90,1" is the same as "90,0" and "90". 
**Example** showing use in subclass [PED](classlibsdi_1_1_p_e_d.md): 

```cpp
void PED::setAmount(const unsigned char* amount)
{
    set("9F02", amount, 6);
}
```

## Public Functions Documentation

### function SdiCmd

```cpp
SdiCmd()
```


### function ~SdiCmd

```cpp
virtual ~SdiCmd()
```


### function sendReceive

```cpp
enum SDI_SW12 sendReceive(
    unsigned char cla,
    unsigned char ins,
    unsigned char p1 =0,
    unsigned char p2 =0,
    unsigned maxResponseSize =2048
)
```

Generic SDI command exchange function combining sending of request, waiting and receiving the response. 

**Parameters**: 

  * **cla** SDI command class 
  * **ins** SDI command instruction for given class 
  * **p1** optional SDI command parameter 1 
  * **p2** optional SDI command parameter 2 
  * **maxResponseSize** optional required buffer size for entire SDI response 


**Return**: SDI status word (the two leading bytes of the SDI response as word) 

The SDI command TLV data part is created from the public [dataIn](classlibsdi_1_1_sdi_cmd.md#variable-datain) attribute, which has been populated with this classes setter functions before function invocation. The SDI response TLV data part will be imported to public dataOut attribute.


### function send

```cpp
int send(
    unsigned char cla,
    unsigned char ins,
    unsigned char p1 =0,
    unsigned char p2 =0
)
```

Like [sendReceive()](classlibsdi_1_1_sdi_cmd.md#function-sendreceive) but without waiting for response. 

**Parameters**: 

  * **cla** SDI command class 
  * **ins** SDI command instruction for given class 
  * **p1** optional SDI command parameter 1 
  * **p2** optional SDI command parameter 2 


**Return**: 0 for success, SDI_PROTOCOL_ERR_xxx on failure 

If [send()](classlibsdi_1_1_sdi_cmd.md#function-send) succeeded (return code 0) wait for signal by data available callback. Thereafter call [receive()](classlibsdi_1_1_sdi_cmd.md#function-receive) to get SDI response.


### function receive

```cpp
enum SDI_SW12 receive(
    unsigned maxResponseSize =2048
)
```

Receive SDI response after request has been send with [send()](classlibsdi_1_1_sdi_cmd.md#function-send) and data availability has been signaled. 

**Parameters**: 

  * **maxResponseSize** optional required buffer size for entire SDI response 


**Return**: SDI status word (the two leading bytes of the SDI response as word) 

### function set

```cpp
void set(
    const char * path,
    int value,
    unsigned fixedLength =0
)
```

Set integer data object SDI command. 

**Parameters**: 

  * **path** TLV tag name path, see [Path Format]
  * **value** signed integer value 
  * **fixedLength** optional, might be required for some parameters 


Set integer for TLV path (without enclosing F0). If a tags already exists it's data will be overwritten. The data length after serialisation is 1-4 bytes as needed to encode the value unless otherwise specified by parameter fixedLength.


### function set

```cpp
void set(
    const char * path,
    uint32_t value,
    unsigned fixedLength =0
)
```

Set unsigned integer data object SDI command. 

**Parameters**: 

  * **path** TLV tag name path, see [Path Format]
  * **value** signed unsigned integer value 
  * **fixedLength** optional, might be required for some parameters 


Set integer for TLV path (without enclosing F0). If a tags already exists it's data will be overwritten. The data length after serialisation is 1-4 bytes as needed to encode the value unless otherwise specified by parameter fixedLength.


### function set

```cpp
void set(
    const char * path,
    const unsigned char * data,
    unsigned dataLen
)
```

Set byte array data object in SDI command. 

**Parameters**: 

  * **path** TLV tag name path, see [Path Format]
  * **data** byte array 
  * **dataLen** byte count of data length 


Set binary data for TLV path (without enclosing F0). If a tags already exists it's data will be overwritten.


### function set

```cpp
inline void set(
    const char * path,
    unsigned char byteValue
)
```

Set single byte value in SDI command. 

**Parameters**: 

  * **path** TLV tag name path, see [Path Format]
  * **byteValue** single byte 


Set binary data for TLV path (without enclosing F0). If a tags already exists it's data will be overwritten.


### function set

```cpp
void set(
    const char * path,
    const std::vector< unsigned char > & data
)
```

Set byte array data object in SDI command. 

**Parameters**: 

  * **path** TLV tag name path, see [Path Format]
  * **data** byte vector 


Set binary data for TLV path (without enclosing F0). If a tags already exists it's data will be overwritten.


### function set

```cpp
void set(
    const char * path,
    const std::string & value
)
```

Set character data object in SDI command. 

**Parameters**: 

  * **path** TLV tag name path, see [Path Format]
  * **value** alpha-numeric data 


Set text for TLV path (without enclosing F0). If a tags already exists it's data will be overwritten.


### function setCommandDestination

```cpp
void setCommandDestination(
    bool epp,
    bool force =false
)
```

Set command destination for systems with EPP Unless force the command destination is set only if parameter epp is true. 

**Parameters**: 

  * **epp** true if command shall be set to EPP 
  * **force** if true do not omit command destination in case of countertop 


### function clear

```cpp
virtual void clear()
```

Remove all SDI command command input data. 

**Reimplemented by**: [libsdi::CardDetection::clear](classlibsdi_1_1_card_detection.md#function-clear)


### function clear

```cpp
virtual void clear(
    const char * path
)
```

Remove single input data stored in [dataIn](classlibsdi_1_1_sdi_cmd.md#variable-datain). 

**Parameters**: 

  * **path** TLV tag name path (without enclosing F0), see [Path Format]


### function clearResults

```cpp
virtual void clearResults()
```

Remove all SDI response data. 

### function importResults

```cpp
void importResults(
    const SdiCmd & intermediate
)
```

Transfer status word, client error and response data from an intermediate command while keeping command input data. 

**Parameters**: 

  * **intermediate** reference to intermediate command that received SDI response 


### function importResults

```cpp
void importResults(
    const unsigned char * sw12,
    const unsigned char * tlvData,
    unsigned tlvSize
)
```

Inject result data from a call back. 

**Parameters**: 

  * **sw12** pointer to SDI status word 
  * **tlvData** pointer to SDI TLV data (should start with F0) 
  * **tlvSize** length of tlvData in bytes 


### function get

```cpp
bool get(
    const char * path,
    int & value
)
```


**Parameters**: 

  * **path** TLV path (without enclosing F0), see [Path Format]
  * **value** target buffer 


**Return**: true if value was found in [SDI](classlibsdi_1_1_s_d_i.md) response 

Get integer value from [SDI](classlibsdi_1_1_s_d_i.md) response 


### function get

```cpp
bool get(
    const char * path,
    uint32_t & value
)
```


**Parameters**: 

  * **path** TLV path (without enclosing F0), see [Path Format]
  * **value** target buffer 


**Return**: true if value was found in [SDI](classlibsdi_1_1_s_d_i.md) response 

Get unsigned integer value from SDI response 


### function get

```cpp
int get(
    const char * path,
    unsigned char * buffer,
    unsigned bufferSize
)
```


**Parameters**: 

  * **path** TLV path (without enclosing F0), see [Path Format]
  * **buffer** target buffer 
  * **bufferSize** size of target buffer 


**Return**: length of data found in [SDI](classlibsdi_1_1_s_d_i.md) response, -1 if absent 

Read data from SDI response 


### function get

```cpp
inline bool get(
    const char * path,
    unsigned char & value
)
```


**Parameters**: 

  * **path** TLV path (without enclosing F0), see [Path Format]
  * **value** target buffer, remains unchanged if tag not found 


**Return**: true if SDI contains requested data with length 1 

Read single byte from SDI response 


### function get

```cpp
bool get(
    const char * path,
    std::vector< unsigned char > & buffer
)
```


**Parameters**: 

  * **path** TLV path (without enclosing F0), see [Path Format]
  * **buffer** target vector 


**Return**: true if data was found in [SDI](classlibsdi_1_1_s_d_i.md) response 

Read data from SDI response 


### function get

```cpp
bool get(
    const char * path,
    std::string & value
)
```


**Parameters**: 

  * **path** TLV path (without enclosing F0), see [Path Format]
  * **value** string reference for the result data 


**Return**: true for success 

Read text from SDI response 


### function getString

```cpp
std::string getString(
    const char * path
)
```


**Parameters**: 

  * **path** TLV path (without enclosing F0), see [Path Format]


**Return**: Text from [SDI](classlibsdi_1_1_s_d_i.md) response, empty string if absent 

Read text from SDI response 


## Protected Attributes Documentation

### variable dataIn

```cpp
void * dataIn;
```

Command input buffer collecting TLV data items. 

### variable dataOut

```cpp
void * dataOut;
```

Command response TLV data items. 

-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
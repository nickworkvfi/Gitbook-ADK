---
title: SDIPlugin

---

# SDIPlugin



 [More...](#detailed-description)


`#include <sdiplugin.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[SDITrigger](class_s_d_i_plugin.md#enum-sditrigger)** { SDITrigger_None =  0, SDITrigger_CardDetected =  1 << 0, SDITrigger_EMVConfig =  1 << 1, SDITrigger_SDIConfig =  1 << 2, SDITrigger_CardDataAvail =  1 << 3, SDITrigger_MsgDataAvail =  1 << 4, SDITrigger_EmvCndListCbk =  1 << 5, SDITrigger_CardId =  1 << 6, SDITrigger_FactoryReset =  1 << 7, SDITrigger_ExternalCSD =  1 << 8, SDITrigger_ExtDataStore =  1 << 9, SDITrigger_ManualPan =  1 << 10} |
| enum| **[SDIExtension](class_s_d_i_plugin.md#enum-sdiextension)** { SDIExt_TrustedConnection =  0, SDIExt_PCI_Version =  1, SDIExt_VCL_Callback =  4} |
| typedef std::vector< unsigned char > | **[Buffer](class_s_d_i_plugin.md#typedef-buffer)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~SDIPlugin](class_s_d_i_plugin.md#function-~sdiplugin)**() |
| virtual const char * | **[name](class_s_d_i_plugin.md#function-name)**() const =0 |
| virtual void | **[version](class_s_d_i_plugin.md#function-version)**(int & major, int & minor, int & patch) const =0 |
| virtual int | **[moduleID](class_s_d_i_plugin.md#function-moduleid)**() const =0 |
| virtual unsigned | **[supportedTriggers](class_s_d_i_plugin.md#function-supportedtriggers)**() const =0 |
| virtual int | **[processMessage](class_s_d_i_plugin.md#function-processmessage)**([Buffer](class_s_d_i_plugin.md#typedef-buffer) & result, int cmd, const [Buffer](class_s_d_i_plugin.md#typedef-buffer) & message) =0 |
| virtual int | **[processTrigger](class_s_d_i_plugin.md#function-processtrigger)**([Buffer](class_s_d_i_plugin.md#typedef-buffer) & result, unsigned triggerID, const [Buffer](class_s_d_i_plugin.md#typedef-buffer) & message) =0 |
| virtual void * | **[openExtension](class_s_d_i_plugin.md#function-openextension)**(int ext_number) =0 |
| virtual void | **[closeExtension](class_s_d_i_plugin.md#function-closeextension)**(void * extension) =0 |

## Detailed Description

```cpp
class SDIPlugin;
```


Abstract [SDIPlugin](class_s_d_i_plugin.md) base class 

## Public Types Documentation

### enum SDITrigger

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SDITrigger_None |  0|  No trigger  |
| SDITrigger_CardDetected |  1 << 0|  Card has been swiped after a card request was sent (2301)  |
| SDITrigger_EMVConfig |  1 << 1|  EMV config command issued by the application  |
| SDITrigger_SDIConfig |  1 << 2|  SDI config file upload command issued by the application  |
| SDITrigger_CardDataAvail |  1 << 3|  SDI server has detected track equivalent 2 data  |
| SDITrigger_MsgDataAvail |  1 << 4|  SDI server has created host message data  |
| SDITrigger_EmvCndListCbk |  1 << 5|  EMV Reduce Candidate List callback has been called  |
| SDITrigger_CardId |  1 << 6|  SDI server delivers a PAN to generate a unique Card Id  |
| SDITrigger_FactoryReset |  1 << 7|  SDI server performs a factory reset and requests the plugin the delete persistent data (e.g. files created during runtime) and to do a reinitialization with defaults  |
| SDITrigger_ExternalCSD |  1 << 8|  Provide extern entered PAN to the SDI server for PIN block generation  |
| SDITrigger_ExtDataStore |  1 << 9|  Cardholder Sensitive Data not available in the SDI Data Store, try to get them from the plugin Following tags are provided to the plugin:

* F0/DF3B: Options, 4 bytes. Byte 4 bit 1: Clear text flag. Relevant only in case VTP is enabled If set to true and VTP is enabled, the plugin has to deliver clear text data (VTP decrypted) Per default, when VTP is enabled, the plugin has to deliver VTP encrypted data. Byte 4 bit 2: Request to clear sensitive data. Called by SDI Server on a Clear Data Store 29-03 command
* F0/DF3C: Requested tags, array with 4 bytes for each tag  |
| SDITrigger_ManualPan |  1 << 10|  Provide entered PAN during manual card data entry for further processing, e.g whitelist check  |




SDI plugin trigger IDs in the form 1<<n 


### enum SDIExtension

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SDIExt_TrustedConnection |  0|  Provide the information to the plugin if the SDI connection is trusted or not. This is actually used for trigger SDITrigger_EMVConfig. The [openExtension()](class_s_d_i_plugin.md#function-openextension) returns a pointer to bool in that case. !!! NOTE: SDIExt_TrustedConnection is DEPRECATED and no longer invoked by SDI !!!  |
| SDIExt_PCI_Version |  1|  Obtain PCI version of the plugin (if available). [openExtension()](class_s_d_i_plugin.md#function-openextension) call returns C-string (const char*) containing PCI version string. If there is no PCI versioning for the plugin, NULL is returned.  |
| SDIExt_VCL_Callback |  4|  Provide a function pointer (of type Vcl_Encryption_Callback_Setter) for VCL encryption by SDI. This is used for plugins that register for trigger SDITrigger_ExtDataStore. [openExtension()](class_s_d_i_plugin.md#function-openextension) call returns a function pointer for which SDI will set the callback function for VCL encryption. If this functionality is not supported by the plugin, NULL is returned.  |




SDI plugin extensions 


### typedef Buffer

```cpp
typedef std::vector<unsigned char> Buffer;
```


buffer type 


## Public Functions Documentation

### function ~SDIPlugin

```cpp
inline virtual ~SDIPlugin()
```


Destructor 


### function name

```cpp
virtual const char * name() const =0
```


**Return**: String containing the name of the plugin 

### function version

```cpp
virtual void version(
    int & major,
    int & minor,
    int & patch
) const =0
```


**Parameters**: 

  * **major** major version 
  * **minor** minor version 
  * **patch** patch version 


obtain version information 


### function moduleID

```cpp
virtual int moduleID() const =0
```


**Return**: module ID 

obtain module ID that identifies the plugin (parameter p1 in the SDI interface) 


### function supportedTriggers

```cpp
virtual unsigned supportedTriggers() const =0
```


**Return**: trigger ID mask that are supported by this plugin. This is the or-ed value of all supported SDITriggers. 

### function processMessage

```cpp
virtual int processMessage(
    Buffer & result,
    int cmd,
    const Buffer & message
) =0
```


**Parameters**: 

  * **result** buffer containing the result of the operation. The plugin shall write the SW1/SW2 bytes in the first two bytes of the buffer, followed by the data to be returned to the application. It's recommended to use BER-TLV format for encoding the returned data, and enclose the data in tag F0. If the plugin does not return the SW1/SW2 bytes then SDI will ignore the result buffer and return 6802 ("Invalid result returned from the plugin") to the application. 
  * **cmd** P1 parameter in the SDI interface that identifies the function 
  * **message** input message recommended is to use BER-TLV format for encoding the content of the buffer 


**Return**: result code, e.g. 0x9000 for OK 

process SDI message sent by application 


### function processTrigger

```cpp
virtual int processTrigger(
    Buffer & result,
    unsigned triggerID,
    const Buffer & message
) =0
```


**Parameters**: 

  * **result** buffer containing the result of the operation, recommended is to use BER-TLV format for encoding the content of the buffer 
  * **triggerID** trigger ID 
  * **message** input input format depends on the triggerID. 


**Return**: result code, e.g. 0x9000 for OK 

process trigger ID invoked from SDI server 


### function openExtension

```cpp
virtual void * openExtension(
    int ext_number
) =0
```


**Parameters**: 

  * **ext_number** extension number 


**Return**: pointer to extension or NULL if the extension is not known 

open extension. Extensions need to be closed using [closeExtension()](class_s_d_i_plugin.md#function-closeextension) when no longer needed. 


### function closeExtension

```cpp
virtual void closeExtension(
    void * extension
) =0
```


**Parameters**: 

  * **extension** pointer as returned from openExtension 


close extension 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
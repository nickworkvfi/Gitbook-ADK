---
title: sdi/src/sdiplugin.h

---

# sdi/src/sdiplugin.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[SDIPlugin](class_s_d_i_plugin.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(void *data, unsigned short *size, void *context) | **[Vcl_Encryption_Callback](sdiplugin_8h.md#typedef-vcl-encryption-callback)**  |
| typedef void(*)(Vcl_Encryption_Callback cb, void *context) | **[Vcl_Encryption_Callback_Setter](sdiplugin_8h.md#typedef-vcl-encryption-callback-setter)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| | **[__attribute__](sdiplugin_8h.md#function---attribute--)**((visibility("default")) ) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_PLUGIN_CMD](sdiplugin_8h.md#define-cla-plugin-cmd)** <br>Class for plugin commands.  |

## Types Documentation

### typedef Vcl_Encryption_Callback

```cpp
typedef void(* Vcl_Encryption_Callback) (void *data, unsigned short *size, void *context);
```


**Parameters**: 

  * **[in/out]** data Data pointer provided by the plugin.


* in: The data provided by the plugin should have following structure:
    * Byte 1 and 2 should contain the length of the provided data
    * Following bytes should contain the data in BERTLV format
* out: The returned data provided by the SDI should have following structure:
    * Byte 1 and 2 should contain SW1/SW2
    * If SW1/SW2 is 90 00 the following bytes should contain the data in BERTLV format 
  * **[in/out]** size Pointer to the buffer/data size

* in: buffer size
* out: data size 
  * **[in/out]** context generic context data pointer, currently not used. 


Type of function that is called after external manual card data entry to perform VCL encryption. The plugin must provide PAN, expiry date and optional CVV in clear and gets the data back VCL encrypted. 


### typedef Vcl_Encryption_Callback_Setter

```cpp
typedef void(* Vcl_Encryption_Callback_Setter) (Vcl_Encryption_Callback cb, void *context);
```


**Parameters**: 

  * **cb** pointer to the VCL Encryption Callback function. 
  * **context** generic context data pointer, currently not used. 


Setter for Vcl_Encryption_Callback. This function should be implemented in the plugin and returned by the openExtension() function when called with the extension ID [SDIPlugin::SDIExt_VCL_Callback](class_s_d_i_plugin.md#enumvalue-sdiext-vcl-callback). SDI Server calls this function to set the Vcl_Encryption_Callback pointer in the plugin. The plugin can then call this function in order to perform VCL encryption for externally entered manual card data. 



## Functions Documentation

### function __attribute__

```cpp
__attribute__(
    (visibility("default")) 
)
```


**Return**: [SDIPlugin](class_s_d_i_plugin.md) object 

SDI plugin entry function 




## Macros Documentation

### define CLA_PLUGIN_CMD

```cpp
#define CLA_PLUGIN_CMD 0x26
```

Class for plugin commands. 

## Source code

```cpp
// -*- Mode: C++ -*-
#ifndef SDI_PLUGIN_H_20181001
#define SDI_PLUGIN_H_20181001

#include <vector>


#define CLA_PLUGIN_CMD                          0x26 


class SDIPlugin
{
  public:

    typedef std::vector<unsigned char> Buffer;

    enum SDITrigger
    {
      SDITrigger_None          =  0,      
      SDITrigger_CardDetected  =  1 << 0, 
      SDITrigger_EMVConfig     =  1 << 1, 
      SDITrigger_SDIConfig     =  1 << 2, 
      SDITrigger_CardDataAvail =  1 << 3, 
      SDITrigger_MsgDataAvail  =  1 << 4, 
      SDITrigger_EmvCndListCbk =  1 << 5, 
      SDITrigger_CardId        =  1 << 6, 
      SDITrigger_FactoryReset  =  1 << 7, 
      SDITrigger_ExternalCSD   =  1 << 8, 
      SDITrigger_ExtDataStore  =  1 << 9, 
      SDITrigger_ManualPan     =  1 << 10 
    };

    enum SDIExtension
    {
      SDIExt_TrustedConnection   =  0, 
      SDIExt_PCI_Version         =  1, 
      SDIExt_VCL_Callback        =  4  
    };


    virtual ~SDIPlugin() {}

    virtual const char *name() const = 0;

    virtual void version(int &major, int &minor, int &patch) const = 0;

    virtual int moduleID() const = 0;

    virtual unsigned supportedTriggers() const = 0;

    virtual int processMessage(Buffer &result, int cmd, const Buffer &message) = 0;


    virtual int processTrigger(Buffer &result, unsigned triggerID, const Buffer &message) = 0;

    //
    //virtual int cardInsert(Buffer &result, unsigned cardType, const Buffer &atr, const Buffer &track1, const Buffer &track2, const Buffer &track3);
    //

    virtual void *openExtension(int ext_number) = 0;

    virtual void closeExtension(void *extension) = 0;
};


extern "C" {
  __attribute__((visibility("default"))) SDIPlugin *getSDIPlugin();
}

typedef void (* Vcl_Encryption_Callback)(void *data, unsigned short* size, void *context);


typedef void (* Vcl_Encryption_Callback_Setter)(Vcl_Encryption_Callback cb, void *context);

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

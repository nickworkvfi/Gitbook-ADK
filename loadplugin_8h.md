---
title: sdi/src/loadplugin.h

---

# sdi/src/loadplugin.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[SDIPluginCtx](class_s_d_i_plugin_ctx.md)**  |
| struct | **[bcTriggerResult](structbc_trigger_result.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[TRIGGER_TYPE](loadplugin_8h.md#enum-trigger-type)** { TRIGGER_TYPE_UNKNOWN, TRIGGER_TYPE_SINGLE, TRIGGER_TYPE_MULTIPLE, TRIGGER_TYPE_SEQUENCIAL} |
| enum| **[PLUGIN_READ_TYPE](loadplugin_8h.md#enum-plugin-read-type)** { PLUGIN_READ_NONE, PLUGIN_READ_FIRST, PLUGIN_READ_NEXT} |

## Functions

|                | Name           |
| -------------- | -------------- |
| const std::vector< [SDIPluginCtx](class_s_d_i_plugin_ctx.md) * > & | **[loadPlugins](loadplugin_8h.md#function-loadplugins)**(bool reload =true) |
| const std::vector< [SDIPluginCtx](class_s_d_i_plugin_ctx.md) * > & | **[getLoadedPlugins](loadplugin_8h.md#function-getloadedplugins)**() |
| void | **[registerPlugin](loadplugin_8h.md#function-registerplugin)**([SDIPluginCtx](class_s_d_i_plugin_ctx.md) * p) |
| [SDIPluginCtx](class_s_d_i_plugin_ctx.md) * | **[unregisterPlugin](loadplugin_8h.md#function-unregisterplugin)**(const std::string & filename) |
| [SDIPlugin](class_s_d_i_plugin.md) * | **[getPlugin](loadplugin_8h.md#function-getplugin)**(int pluginID) |
| void | **[handlePluginCmd](loadplugin_8h.md#function-handleplugincmd)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| int | **[executeSequencialTrigger](loadplugin_8h.md#function-executesequencialtrigger)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID, [PLUGIN_READ_TYPE](loadplugin_8h.md#enum-plugin-read-type) readType, unsigned char * msg, unsigned short msgSize, unsigned short resBufSize, unsigned char * res, unsigned short * resSize) |
| void | **[storePluginMsrData](loadplugin_8h.md#function-storepluginmsrdata)**([MSR_TrackData4](struct_m_s_r___track_data4.md) & tracks, [MSR_DecodedData4](struct_m_s_r___decoded_data4.md) & decoded) |
| void | **[broadcastTriggerLocal](loadplugin_8h.md#function-broadcasttriggerlocal)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID, csd::csd_data & message, std::vector< struct [bcTriggerResult](structbc_trigger_result.md) > & results) |
| void | **[broadcastTrigger](loadplugin_8h.md#function-broadcasttrigger)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID, csd::csd_data & message, std::vector< struct [bcTriggerResult](structbc_trigger_result.md) > & results) |
| int | **[executeSingleTrigger](loadplugin_8h.md#function-executesingletrigger)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID, unsigned char * msg, unsigned short msgSize, unsigned short resBufSize, unsigned char * res, unsigned short * resSize) |
| bool | **[pluginInstalledForTrigger](loadplugin_8h.md#function-plugininstalledfortrigger)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[VOS3_CARDS_PLUGIN_ID](loadplugin_8h.md#define-vos3-cards-plugin-id)**  |

## Types Documentation

### enum TRIGGER_TYPE

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TRIGGER_TYPE_UNKNOWN | |   |
| TRIGGER_TYPE_SINGLE | |   |
| TRIGGER_TYPE_MULTIPLE | |   |
| TRIGGER_TYPE_SEQUENCIAL | |   |




### enum PLUGIN_READ_TYPE

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PLUGIN_READ_NONE | |   |
| PLUGIN_READ_FIRST | |   |
| PLUGIN_READ_NEXT | |   |





## Functions Documentation

### function loadPlugins

```cpp
const std::vector< SDIPluginCtx * > & loadPlugins(
    bool reload =true
)
```


loads the SDI plugins from the SDI plugin folders and register them to the list of loaded SDI plugins. SDI plugin folders are the following:

1. Internal home lib directory
2. External plugin directory (Android only). If a plugin in external plugin directory is found and has the same name as an plugin from home lib directory, the external plugin is preferred.


If mode flag `reload` is set true (default), all plugins are loaded or reloaded. If the flag is set to false, only the those plugins are loaded, which are not yet registered in the list of loaded SDI plugins. reloadset to true (default), to unload already registered plugins, before they get loaded 

list of loaded and registered SDI plugins as vector (storing instances of class [SDIPluginCtx](class_s_d_i_plugin_ctx.md)) 


### function getLoadedPlugins

```cpp
const std::vector< SDIPluginCtx * > & getLoadedPlugins()
```


**Return**: list of loaded and registered SDI plugins as vector (storing instances of class [SDIPluginCtx](class_s_d_i_plugin_ctx.md)) 

return the list of loaded and registered SDI plugins 


### function registerPlugin

```cpp
void registerPlugin(
    SDIPluginCtx * p
)
```


**Parameters**: 

  * **p** new plugin to register in list of loaded SDI plugins 


register a loaded plugin to the list of SDI plugins. If the plugin is not valid or not loaded, this function does nothing. If a plugin with the same plugin file name, was already registered, the old plugin is unregistered and unloaded, before the new plugin is added. 


### function unregisterPlugin

```cpp
SDIPluginCtx * unregisterPlugin(
    const std::string & filename
)
```


**Parameters**: 

  * **filename** name of the plugin shared object (without path), Example: "libsdiplugin-myplugin.so" 


**Return**: pointer to the SDI plugin context (if found), else NULL 

**Note**: The plugin is not unloaded, after it was successfully unregistered. The caller must invoke delete on the returned object to free its resources. 

unregister a loaded plugin from the list of loaded SDI plugins. If the plugin is found according its filename (without path) the pointer to the unregistered SDI plugin context is returned. 


### function getPlugin

```cpp
SDIPlugin * getPlugin(
    int pluginID
)
```


### function handlePluginCmd

```cpp
void handlePluginCmd(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function executeSequencialTrigger

```cpp
int executeSequencialTrigger(
    SDIPlugin::SDITrigger triggerID,
    PLUGIN_READ_TYPE readType,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short resBufSize,
    unsigned char * res,
    unsigned short * resSize
)
```


### function storePluginMsrData

```cpp
void storePluginMsrData(
    MSR_TrackData4 & tracks,
    MSR_DecodedData4 & decoded
)
```


### function broadcastTriggerLocal

```cpp
void broadcastTriggerLocal(
    SDIPlugin::SDITrigger triggerID,
    csd::csd_data & message,
    std::vector< struct bcTriggerResult > & results
)
```


### function broadcastTrigger

```cpp
void broadcastTrigger(
    SDIPlugin::SDITrigger triggerID,
    csd::csd_data & message,
    std::vector< struct bcTriggerResult > & results
)
```


**Parameters**: 

  * **triggerID** trigger ID, for which processTrigger() is called on the loaded plugins, which support the trigger 
  * **message** message buffer passed to processTrigger() invoked on the plugins, which support the trigger. 
  * **results** vector containing result data for each processTrigger call (see struct [bcTriggerResult](structbc_trigger_result.md)) 


checks all loaded plugins for implemented trigger `triggerID`. If the trigger is implemented, the plugin function processTrigger() with the `triggerID` and the `message` is invoked. The results of all plugins, which supports the trigger is stored in vector `results`. This structure takes the return value of the the processTrigger() call and the result buffer of this function. In addition, the plugin name is stored so that the caller knows, which plugin has returned which result. 


### function executeSingleTrigger

```cpp
int executeSingleTrigger(
    SDIPlugin::SDITrigger triggerID,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short resBufSize,
    unsigned char * res,
    unsigned short * resSize
)
```


### function pluginInstalledForTrigger

```cpp
bool pluginInstalledForTrigger(
    SDIPlugin::SDITrigger triggerID
)
```


**Parameters**: 

  * **triggerID** trigger ID to check plugins, if the trigger is supported 


**Return**: true if there is at least one plugin, which supports trigger `triggerID`, else false. 

checks for installed/loaded plugins, which support a specific trigger specified by `triggerID`. 




## Macros Documentation

### define VOS3_CARDS_PLUGIN_ID

```cpp
#define VOS3_CARDS_PLUGIN_ID 0xE1
```


## Source code

```cpp
// -*- mode: C++ -*-
#ifndef LOADPLUGIN_H_20180928
#define LOADPLUGIN_H_20180928

#include <utility>
#include <vector>
#include <string>

#include "sdiplugin.h"
#include "csd.h"
#include "msr/msr.h"

// ID of the vos3-cards plugin
#define VOS3_CARDS_PLUGIN_ID         0xE1

typedef enum
{
  TRIGGER_TYPE_UNKNOWN,
  TRIGGER_TYPE_SINGLE,
  TRIGGER_TYPE_MULTIPLE,
  TRIGGER_TYPE_SEQUENCIAL
} TRIGGER_TYPE;

typedef enum
{
  PLUGIN_READ_NONE,
  PLUGIN_READ_FIRST,
  PLUGIN_READ_NEXT
} PLUGIN_READ_TYPE;

class SDIPluginCtx
{
    SDIPlugin *m_p;            
    void *m_handle;            
    std::string m_file;        
    std::string m_name;        
    std::string m_version;     
    std::string m_pciversion;  
    // disable copy constructor and assign operator
    SDIPluginCtx(const SDIPluginCtx&);
    SDIPluginCtx& operator=(const SDIPluginCtx&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    SDIPluginCtx(const SDIPluginCtx&&);
    SDIPluginCtx& operator=(SDIPluginCtx&&);
#endif

  public:
    SDIPluginCtx(): m_p(0), m_handle(0) { }
    SDIPluginCtx(const std::string &file): m_p(0), m_handle(0)
    {
      load(file);
    }
    virtual ~SDIPluginCtx()
    {
      unload();
    }

    bool load(const std::string &file);
    inline bool loaded() const
    {
      return !!m_handle;
    }
    void unload();
    const std::string &getFile() const
    {
      return m_file;
    }
    const std::string &getName() const
    {
      return m_name;
    }
    const std::string &getVersion() const
    {
      return m_version;
    }
    const std::string &getPciVersion() const
    {
      return m_pciversion;
    }
    SDIPlugin *getObj()
    {
      return m_p;
    }
};

const std::vector<SDIPluginCtx *> &loadPlugins(bool reload = true);

const std::vector<SDIPluginCtx *>& getLoadedPlugins();

void registerPlugin(SDIPluginCtx *p);

SDIPluginCtx * unregisterPlugin(const std::string &filename);

SDIPlugin* getPlugin(int pluginID);

void handlePluginCmd(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

int executeSequencialTrigger(SDIPlugin::SDITrigger triggerID, PLUGIN_READ_TYPE readType, unsigned char *msg, unsigned short msgSize, unsigned short resBufSize, unsigned char *res, unsigned short *resSize);

void storePluginMsrData(MSR_TrackData4 &tracks, MSR_DecodedData4 &decoded);

struct bcTriggerResult
{
  int retval;  
  SDIPlugin::Buffer result; 
  std::string name; 
  int id; 
};

void broadcastTriggerLocal(SDIPlugin::SDITrigger triggerID, csd::csd_data &message, std::vector<struct bcTriggerResult> &results);

void broadcastTrigger(SDIPlugin::SDITrigger triggerID, csd::csd_data &message, std::vector<struct bcTriggerResult> &results);

int executeSingleTrigger(SDIPlugin::SDITrigger triggerID, unsigned char *msg, unsigned short msgSize, unsigned short resBufSize, unsigned char *res, unsigned short *resSize);


bool pluginInstalledForTrigger(SDIPlugin::SDITrigger triggerID);

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

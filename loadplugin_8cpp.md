---
title: sdi/src/loadplugin.cpp

---

# sdi/src/loadplugin.cpp



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[UInt32Array](struct_u_int32_array.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [TRIGGER_TYPE](loadplugin_8h.md#enum-trigger-type) | **[getTriggerType](loadplugin_8cpp.md#function-gettriggertype)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID) |
| std::string | **[getTriggerName](loadplugin_8cpp.md#function-gettriggername)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID) |
| const vector< [SDIPluginCtx](class_s_d_i_plugin_ctx.md) * > & | **[loadPlugins](loadplugin_8cpp.md#function-loadplugins)**(bool reload =true) |
| const vector< [SDIPluginCtx](class_s_d_i_plugin_ctx.md) * > & | **[getLoadedPlugins](loadplugin_8cpp.md#function-getloadedplugins)**() |
| [SDIPlugin](class_s_d_i_plugin.md) * | **[getPlugin](loadplugin_8cpp.md#function-getplugin)**(int pluginID) |
| void | **[storePluginMsrData](loadplugin_8cpp.md#function-storepluginmsrdata)**([MSR_TrackData4](struct_m_s_r___track_data4.md) & tracks, [MSR_DecodedData4](struct_m_s_r___decoded_data4.md) & decoded) |
| void | **[registerPlugin](loadplugin_8cpp.md#function-registerplugin)**([SDIPluginCtx](class_s_d_i_plugin_ctx.md) * p) |
| [SDIPluginCtx](class_s_d_i_plugin_ctx.md) * | **[unregisterPlugin](loadplugin_8cpp.md#function-unregisterplugin)**(const string & filename) |
| void | **[handlePluginCmd](loadplugin_8cpp.md#function-handleplugincmd)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| struct [BTLVNode](struct_b_t_l_v_node.md) * | **[btlvWriteInt](loadplugin_8cpp.md#function-btlvwriteint)**(struct [BTLVNode](struct_b_t_l_v_node.md) * node, const char * path, uint32_t value) |
| void | **[broadcastTriggerRemote](loadplugin_8cpp.md#function-broadcasttriggerremote)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID, csd_data & message, vector< struct [bcTriggerResult](structbc_trigger_result.md) > & results) |
| void | **[broadcastTriggerLocal](loadplugin_8cpp.md#function-broadcasttriggerlocal)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID, csd_data & message, vector< struct [bcTriggerResult](structbc_trigger_result.md) > & results) |
| void | **[broadcastTrigger](loadplugin_8cpp.md#function-broadcasttrigger)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID, csd_data & message, vector< struct [bcTriggerResult](structbc_trigger_result.md) > & results) |
| int | **[executeSingleTrigger](loadplugin_8cpp.md#function-executesingletrigger)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID, unsigned char * msg, unsigned short msgSize, unsigned short resBufSize, unsigned char * res, unsigned short * resSize) |
| bool | **[pluginInstalledForTrigger](loadplugin_8cpp.md#function-plugininstalledfortrigger)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID) |
| int | **[executeSequencialTrigger](loadplugin_8cpp.md#function-executesequencialtrigger)**([SDIPlugin::SDITrigger](class_s_d_i_plugin.md#enum-sditrigger) triggerID, [PLUGIN_READ_TYPE](loadplugin_8h.md#enum-plugin-read-type) readType, unsigned char * msg, unsigned short msgSize, unsigned short resBufSize, unsigned char * res, unsigned short * resSize) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| vector< [SDIPluginCtx](class_s_d_i_plugin_ctx.md) * > | **[plugins](loadplugin_8cpp.md#variable-plugins)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SET_RESULT](loadplugin_8cpp.md#define-set-result)**(sw1, sw2)  |


## Functions Documentation

### function getTriggerType

```cpp
static TRIGGER_TYPE getTriggerType(
    SDIPlugin::SDITrigger triggerID
)
```


### function getTriggerName

```cpp
static std::string getTriggerName(
    SDIPlugin::SDITrigger triggerID
)
```


### function loadPlugins

```cpp
const vector< SDIPluginCtx * > & loadPlugins(
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
const vector< SDIPluginCtx * > & getLoadedPlugins()
```


**Return**: list of loaded and registered SDI plugins as vector (storing instances of class [SDIPluginCtx](class_s_d_i_plugin_ctx.md)) 

return the list of loaded and registered SDI plugins 


### function getPlugin

```cpp
SDIPlugin * getPlugin(
    int pluginID
)
```


### function storePluginMsrData

```cpp
void storePluginMsrData(
    MSR_TrackData4 & tracks,
    MSR_DecodedData4 & decoded
)
```


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
    const string & filename
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


### function btlvWriteInt

```cpp
static struct BTLVNode * btlvWriteInt(
    struct BTLVNode * node,
    const char * path,
    uint32_t value
)
```


### function broadcastTriggerRemote

```cpp
static void broadcastTriggerRemote(
    SDIPlugin::SDITrigger triggerID,
    csd_data & message,
    vector< struct bcTriggerResult > & results
)
```


### function broadcastTriggerLocal

```cpp
void broadcastTriggerLocal(
    SDIPlugin::SDITrigger triggerID,
    csd_data & message,
    vector< struct bcTriggerResult > & results
)
```


### function broadcastTrigger

```cpp
void broadcastTrigger(
    SDIPlugin::SDITrigger triggerID,
    csd_data & message,
    vector< struct bcTriggerResult > & results
)
```


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



## Attributes Documentation

### variable plugins

```cpp
vector< SDIPluginCtx * > plugins;
```


registration list storing the loaded plugins (instances of class [SDIPluginCtx](class_s_d_i_plugin_ctx.md)) as vector 



## Macros Documentation

### define SET_RESULT

```cpp
#define SET_RESULT(
    sw1,
    sw2
)
{ rsp[0] = sw1; rsp[1] = sw2; *rspSize = 2; }
```


## Source code

```cpp
#include "loadplugin.h"
#include "filesystem.h"
#include "pathutil.h"
#include <string.h>
#include <string>
#include <dlfcn.h>
#include <stdio.h>
#include <stdlib.h>
#include "madk_pp_protocol.h"
#include "_logf.h"
#include "sdi_tags.h"
#include "common/callback.h"
#include "sys.h"
#include "epp/counterTop.h"
#include "card_dt.h"
#include "msr.h"
#include "msr/msr.h"
#include "vcl_client.h"

#if defined(__ANDROID__) || defined (_VOS3)
  #include <sdi-pal.h>
#endif

using namespace std;
using namespace csd;

vector<SDIPluginCtx *> plugins;

#define SET_RESULT(sw1, sw2) { rsp[0] = sw1; rsp[1] = sw2; *rspSize = 2; }

static TRIGGER_TYPE getTriggerType(SDIPlugin::SDITrigger triggerID)
{
  TRIGGER_TYPE type;

  switch (triggerID)
  {
    case SDIPlugin::SDITrigger_CardDetected:
    case SDIPlugin::SDITrigger_CardDataAvail:
    case SDIPlugin::SDITrigger_FactoryReset:
    case SDIPlugin::SDITrigger_ManualPan:
      type = TRIGGER_TYPE_MULTIPLE;
      break;

    case SDIPlugin::SDITrigger_EmvCndListCbk:
      type = TRIGGER_TYPE_SEQUENCIAL;
      break;

    case SDIPlugin::SDITrigger_EMVConfig:
    case SDIPlugin::SDITrigger_SDIConfig:
    case SDIPlugin::SDITrigger_MsgDataAvail:
    case SDIPlugin::SDITrigger_CardId:
    case SDIPlugin::SDITrigger_ExternalCSD:
    case SDIPlugin::SDITrigger_ExtDataStore:
      type = TRIGGER_TYPE_SINGLE;
      break;

    case SDIPlugin::SDITrigger_None:
    default:
      type = TRIGGER_TYPE_UNKNOWN;
      break;
  }

  return type;
}

static std::string getTriggerName(SDIPlugin::SDITrigger triggerID)
{
  std::string name;

  switch (triggerID)
  {
    case SDIPlugin::SDITrigger_CardDetected:
      name = "CardDetected";
      break;

    case SDIPlugin::SDITrigger_EMVConfig:
      name = "EMVConfig";
      break;

    case SDIPlugin::SDITrigger_SDIConfig:
      name = "SDIConfig";
      break;

    case SDIPlugin::SDITrigger_CardDataAvail:
      name = "CardDataAvail";
      break;

    case SDIPlugin::SDITrigger_MsgDataAvail:
      name = "MsgDataAvail";
      break;

    case SDIPlugin::SDITrigger_EmvCndListCbk:
      name = "EmvCndListCbk";
      break;

    case SDIPlugin::SDITrigger_CardId:
      name = "CardId";
      break;

    case SDIPlugin::SDITrigger_FactoryReset:
      name = "FactoryReset";
      break;

    case SDIPlugin::SDITrigger_ExternalCSD:
      name = "ExternalCSD";
      break;

    case SDIPlugin::SDITrigger_ExtDataStore:
      name = "ExtDataStore";
      break;

    case SDIPlugin::SDITrigger_ManualPan:
      name = "ManualPan";
      break;

    case SDIPlugin::SDITrigger_None:
      name = "None";
      break;
  }

  return name;
}


bool SDIPluginCtx::load(const string &file)
{
  unload();

  m_handle = dlopen(file.c_str(), RTLD_NOW);

  if (!m_handle)
  {
    _LOGF_ERROR("SDIPluginCtx::load(): failed to open plugin '%s' (error: %s)", file.c_str(), dlerror());
    return false;
  }

  void *(*func)() = (void * (*)())dlsym(m_handle, "getSDIPlugin");

  if (!func)
  {
    _LOGF_ERROR("SDIPluginCtx::load(): failed to get symbol 'getSDIPlugin' from plugin '%s' (error: %s)", file.c_str(), dlerror());
    goto fail;
  }

  m_p = (SDIPlugin *)func();

  if (!m_p)
  {
    _LOGF_ERROR("SDIPluginCtx::load(): failed to get object from plugin '%s'", file.c_str());
    goto fail;
  }

  // set file path and filename of the plugin shared object
  m_file = file;

  // set plugin name
  m_name = m_p->name();

  // set plugin version
  {
    int a, b, c;
    m_p->version(a, b, c);
    char v[128];
    sprintf(v, "%u.%u.%u", (unsigned)a, (unsigned)b, (unsigned)c);
    m_version = v;
  }

  // obtain PCI plugin version (if available)
  {
    const char *pciversion = (const char *) m_p->openExtension(SDIPlugin::SDIExt_PCI_Version);
    m_pciversion = pciversion ? pciversion : "";
    m_p->closeExtension((void*) pciversion);
  }

  return true;

fail:
  dlclose(m_handle);
  m_handle = 0;
  return false;
}

void SDIPluginCtx::unload()
{
  if (m_handle)
  {
    dlclose(m_handle);
    m_handle = 0;
  }

  m_p = 0;
  m_file.clear();
  m_name.clear();
  m_version.clear();
}

const vector<SDIPluginCtx *> &loadPlugins(bool reload)
{
  // force reload of plugins
  if (reload)
  {
    // unregister and unload plugins, if already loaded
    for (unsigned i = 0; i < plugins.size(); i++)
    {
      delete plugins[i];
    }

    plugins.clear();
  }

  // all found plugins to load
  vector<string> found_plugins;

  // default: home lib directory
  vector<string> lib_plugins;
  sdi::filesystem::get_dir_files(sdi::filesystem::home_lib_dir(), &lib_plugins, PLUGIN_PATTERN);

  /* some platforms (e.g. Android) use a second external plugin directory
   * Note: If a plugin in external plugin directory is found and has the same name
   *       as an plugin from home lib directory, the external plugin is preferred. */
  string pdir = sdi::filesystem::ext_plugin_dir();

  if (!pdir.empty() && sdi::filesystem::get_dir_files(pdir.c_str(), &found_plugins, PLUGIN_PATTERN) > 0)
  {
    for (int i = 0; i < (int)lib_plugins.size(); i++)
    {
      string p1 = filename_from_path(lib_plugins[i]);

      for (unsigned j = 0; j < found_plugins.size(); j++)
      {
        string p2 = filename_from_path(found_plugins[j]);

        if (p1 == p2)
        {
          _LOGF_INFO("loadPlugins(): external plugin '%s' preferred to internal plugin '%s'",
                     found_plugins[j].c_str(), lib_plugins[i].c_str());
          lib_plugins.erase(lib_plugins.begin() + i);
          i--;
          break;
        }
      }
    }
  }

  // insert plugins from home lib to found external plugins
  if (lib_plugins.size() > 0)
  {
    found_plugins.insert(found_plugins.begin(), lib_plugins.begin(), lib_plugins.end());
  }

  for (unsigned i = 0; i < found_plugins.size(); i++)
  {
    if (!reload)
    {
      unsigned j;

      for (j = 0; j < plugins.size(); j++)
      {
        if (found_plugins[i] == plugins[j]->getFile())
        {
          break;
        }
      }

      if (j < plugins.size())
      {
        _LOGF_INFO("loadPlugins(): plugin '%s' already loaded, skip reload", found_plugins[i].c_str());
        continue;
      }
    }

    SDIPluginCtx *p = new SDIPluginCtx(found_plugins[i]);

    if (!p->loaded())
    {
      delete p;
      continue;
    }

    registerPlugin(p);
    _LOGF_INFO("loadPlugins(): plugin '%s' successfully loaded", p->getFile().c_str());
  }

#if defined(__ANDROID__) || defined (_VOS3)
  pal_refreshPluginInfo();
#endif // __VOS3

  return plugins;
}

const vector<SDIPluginCtx *>& getLoadedPlugins()
{
  return plugins;
}

SDIPlugin* getPlugin(int pluginID)
{
  SDIPlugin *plugin = NULL;

  for (unsigned i = 0; i < plugins.size(); i++)
  {
    if (plugins[i]->getObj()->moduleID() == pluginID)
    {
      plugin = plugins[i]->getObj();
      break;
    }
  }

  return plugin;
}

void storePluginMsrData(MSR_TrackData4 &tracks, MSR_DecodedData4 &decoded)
{
  SDIPlugin *plugin = getPlugin(VOS3_CARDS_PLUGIN_ID);

  if (plugin)
  {
    // Get the setMsrData() function from the VOS3 plugin through the plugin extension 2
    // and call it in order to set the raw MSR data into the plugin
    void (*extFunc)(MSR_TrackData4&, MSR_DecodedData4&);
    extFunc = (void (*)(MSR_TrackData4&, MSR_DecodedData4&))plugin->openExtension(2);

    if (extFunc)
    {
      extFunc(tracks, decoded);
    }
  }
}

void registerPlugin(SDIPluginCtx *p)
{
  if (!p || !p->loaded())
  {
    _LOGF_ERROR("registerPlugin(): parameter error, plugin '%p' not registered", p);
    return;
  }

  string filename = filename_from_path(p->getFile());
  SDIPluginCtx *old = unregisterPlugin(filename);

  if (old)
  {
    _LOGF_INFO("registerPlugin(): unregistered/unloaded plugin '%s'", old->getFile().c_str());
    delete old; // unload plugin and free resources
  }

  plugins.push_back(p);

  _LOGF_INFO("registerPlugin(): registered plugin '%s'", p->getFile().c_str());

  if (p->getObj()->moduleID() == VOS3_CARDS_PLUGIN_ID)
  {
    // Register the msrPluginCallback() function into the VOS3 plugin in order to allow
    // the plugin to call this function to send callbacks to the client.
    void (*extFunc)(MSR_Callback, void*);
    extFunc = (void (*)(MSR_Callback, void*))p->getObj()->openExtension(1);

    if (extFunc)
    {
      extFunc(msrPluginCallback, NULL);
    }
  }

  if ((p->getObj()->supportedTriggers() & SDIPlugin::SDITrigger_ExtDataStore) && isVclEnabled())
  {
    Vcl_Encryption_Callback_Setter extFunc = (Vcl_Encryption_Callback_Setter)p->getObj()->openExtension(SDIPlugin::SDIExt_VCL_Callback);

    if (extFunc)
    {
      extFunc(vclEncryptionPluginCallback, NULL);
    }
  }
}

SDIPluginCtx *unregisterPlugin(const string &filename)
{
  SDIPluginCtx *p = 0;

  for (unsigned i = 0; i < plugins.size(); i++)
  {
    string fn = filename_from_path(plugins[i]->getFile());

    if (fn == filename)
    {
      p = plugins[i];
      plugins.erase(plugins.begin() + i);
      _LOGF_INFO("unregisterPlugin(): unregistered plugin '%s'", p->getFile().c_str());
    }
  }

  return p;
}

void handlePluginCmd(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;

  if (rspBufSize < 2)
  {
    *rspSize = 0;
    return;
  }

  if (msgSize < 4)
  {
    // Message Length Error
    SET_RESULT(0x67, 0x00)
    return;
  }

  if (plugins.size() == 0)
  {
    _LOGF_INFO("handlePluginCmd(): No SDI plugin available");
    SET_RESULT(0x68, 0x00)
    return;
  }

  SDIPlugin *plugin = getPlugin(msg[1]);

  if (plugin)
  {
    SDIPlugin::Buffer result;
    int cmd = msg[3]; // Use P2 to define the plugin command
    SDIPlugin::Buffer message(msg + 4, msg + msgSize);
    int ret = plugin->processMessage(result, cmd, message);

    if (ret != 0x9000)
    {
      _LOGF_WARN("handlePluginCmd(): Plugin message processing failed");
    }

    if (result.size() >= 2)
    {
      memcpy(rsp, &result[0], result.size());
      *rspSize = result.size();
    }
    else
    {
      // Plugin must return minimum 2 bytes SW1SW2
      _LOGF_ERROR("handlePluginCmd(): Invalid result returned from the plugin");
      SET_RESULT(0x68, 0x02)
    }
  }
  else
  {
    _LOGF_ERROR("handlePluginCmd(): INS byte does not match a known plugin ID");
    SET_RESULT(0x68, 0x01)
    return;
  }
}

struct UInt32Array
{
  unsigned char value[4];
  UInt32Array(uint32_t x)
  {
    value[0] = (unsigned char)(x >> 24);
    value[1] = (unsigned char)(x >> 16);
    value[2] = (unsigned char)(x >> 8);
    value[3] = (unsigned char) x;
  }
};

static struct BTLVNode* btlvWriteInt(struct BTLVNode* node, const char* path, uint32_t value)
{
  UInt32Array v(value);
  unsigned n;

  for (n = 0; n < 3; n++)
    if (v.value[n])
    {
      break;
    }

  return pxBTLVAppendTag(node, path, v.value + n, sizeof v.value - n);
}

static void broadcastTriggerRemote(SDIPlugin::SDITrigger triggerID, csd_data &message, vector<struct bcTriggerResult> &results)
{
  string name = getTriggerName(triggerID);
  _LOGF_INFO("%s [SDITrigger_%s]", __FUNCTION__, name.c_str());

  int res = RESULT_FAIL;
  struct BTLVRootNode btlv;
  struct BTLVNode *node, *subNode = NULL;
  unsigned char rsp[2048] = {0};
  unsigned short rspSize = sizeof(rsp);

  if ((node = pxBTLVAppendTag(&btlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0)) != NULL)
  {
    btlvWriteInt(node, SDI_TAG_DFA10F_PLUGIN_TRIGGER_ID, triggerID);
    pxBTLVAppendTag(node, SDI_TAG_DFA10E_PLUGIN_TRIGGER_MESSAGE, message.data(), message.size());
  }

  std::vector<unsigned char> msg(2 + uBTLVContentSize(&btlv));
  int msgSize = iBTLVExport(&btlv, msg.data() + 2, msg.size() - 2);

  if (msgSize > 0)
  {
    TECSEL_STATE s = getCardDetectionState();

    if (s == RUNNING_CALLBACK_MODE)
    {
      // add SW1-SW2 for plugin trigger fire and forget callback
      msg[0] = 0x9A;
      msg[1] = 0x03;
      res = RESULT_OK;

      bool *waiting = NULL;
      pthread_cond_t* cond = NULL;
      pthread_mutex_t* mutex = NULL;
      std::vector<unsigned char>* callbackResponse = NULL;
      getAsyncCardDetectionCallbackVariables(&waiting, &cond, &mutex, &callbackResponse);
      pthread_mutex_lock(mutex);
      // send callback as fire and forget
      _LOGF_INFO("mADK_PP_Prot::command(), msgSize = %d", msgSize);
#ifndef _DEBUG

      if (!vfiepm::CounterTop::getInstance().isEppMode())
#endif
      {
        _LOGAPI_HEXDUMP_RAW_INFO(msg.data(), msg.size());
      }

      if (mADK_PP_Prot::getInstance()->command(msg.data(), msg.size()))
      {
        // wait for callback response data coming as a separate command on the main dispatcher
        struct timespec ts;
        clock_gettime(CLOCK_MONOTONIC, &ts);
        // wait for one minute
        ts.tv_sec += 60;

        *waiting = true;

        while (*waiting)
        {
          if (pthread_cond_timedwait(cond, mutex, &ts) == ETIMEDOUT)
          {
            res = RESULT_FAIL;
            break;
          }
        }

        *waiting = false;

        if (res == RESULT_OK)
        {
          if (sizeof(rsp) >= 2 + callbackResponse->size())
          {
            rsp[0] = 0x9A;
            rsp[1] = 0x02;
            memcpy(rsp + 2, callbackResponse->data(), callbackResponse->size());
            rspSize = 2 + callbackResponse->size();
          }
          else
          {
            res = RESULT_FAIL;
          }
        }

        callbackResponse->clear();
      }
      else
      {
        _LOGF_ERROR("Sending of 9A03 callback failed");
        res = RESULT_FAIL;
      }

      pthread_mutex_unlock(mutex);
    }
    else
    {
      msg[0] = 0x9A;
      msg[1] = 0x01;
      // Send Callback and wait for response
      res = common::sendRequestResponseCallback(msg.data(), msg.size(), rsp, &rspSize);
    }
  }

  if (res == RESULT_OK && rsp[0] == 0x9A && rsp[1] == 0x02)
  {
    // Extract the results data
    vBTLVClear(&btlv);

    if (iBTLVImport(&btlv, &rsp[2], rspSize - 2, NULL, NULL) == 0)
    {
      node = NULL;

      while ((node = pxBTLVFindNextTag(&btlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_FFA107_MULTI_PLUGIN_RESPONSE), node)) != NULL)
      {
        struct bcTriggerResult triggerResult;
        triggerResult.id = 0;
        triggerResult.retval = 0x6800;

        // extract the plugin id
        if ((subNode = pxBTLVFindTag(node, SDI_TAG_DFA10C_PLUGIN_ID)) != NULL
            && subNode->uSize == 1)
        {
          triggerResult.id = subNode->pucData[0];
        }

        // extract the plugin response code
        if ((subNode = pxBTLVFindTag(node, SDI_TAG_DFA10D_PLUGIN_RESPONSE_CODE)) != NULL
            && subNode->uSize == 2)
        {
          triggerResult.retval = (subNode->pucData[0] << 8) | subNode->pucData[1];
        }

        // extract the plugin result data
        if ((subNode = pxBTLVFindTag(node, SDI_TAG_DFA101_PLUGIN_RESPONSE_DATA)) != NULL
            && subNode->uSize > 0)
        {
          triggerResult.result.insert(triggerResult.result.begin(), subNode->pucData, subNode->pucData + subNode->uSize);
        }

        results.push_back(triggerResult);
      }
    }
  }
}

void broadcastTriggerLocal(SDIPlugin::SDITrigger triggerID, csd_data &message, vector<struct bcTriggerResult> &results)
{
  string name = getTriggerName(triggerID);
  _LOGF_INFO("%s [SDITrigger_%s]", __FUNCTION__, name.c_str());

  results.clear();
  TRIGGER_TYPE type = getTriggerType(triggerID);

  if (type != TRIGGER_TYPE_UNKNOWN)
  {
    for (unsigned i = 0; i < plugins.size(); i++)
    {
      if ((plugins[i]->getObj()->supportedTriggers() & (unsigned) triggerID) == (unsigned) triggerID)
      {
        struct bcTriggerResult res;
        SDIPlugin::Buffer msg(message.begin(), message.end());
        res.retval = plugins[i]->getObj()->processTrigger(res.result, triggerID, msg);
        csd::wipe(&msg[0], msg.size());
        const char *name = plugins[i]->getObj()->name();
        res.name = name ? name : "";
        res.id = plugins[i]->getObj()->moduleID();
        results.push_back(res);

        if (type == TRIGGER_TYPE_SINGLE)
        {
          break;
        }
      }
    }
  }
}

void broadcastTrigger(SDIPlugin::SDITrigger triggerID, csd_data &message, vector<struct bcTriggerResult> &results)
{
  if (vfiepm::CounterTop::getInstance().isEppMode())
  {
    // Following triggers should not be executed on EPP
    if (!(triggerID == SDIPlugin::SDITrigger_EMVConfig
          || triggerID == SDIPlugin::SDITrigger_SDIConfig
          || triggerID == SDIPlugin::SDITrigger_MsgDataAvail
          || triggerID == SDIPlugin::SDITrigger_FactoryReset
          || triggerID == SDIPlugin::SDITrigger_ExternalCSD
          || triggerID == SDIPlugin::SDITrigger_ExtDataStore))
    {
      broadcastTriggerRemote(triggerID, message, results);
    }
  }
  else
  {
    broadcastTriggerLocal(triggerID, message, results);
  }
}

int executeSingleTrigger(SDIPlugin::SDITrigger triggerID, unsigned char *msg, unsigned short msgSize, unsigned short resBufSize, unsigned char *res, unsigned short *resSize)
{
  int ret = 0x6400;

  if (resSize)
  {
    *resSize = 0;
  }

  if (getTriggerType(triggerID) != TRIGGER_TYPE_SINGLE)
  {
    return ret;
  }

  csd_data message(msg, msg + msgSize);
  std::vector<struct bcTriggerResult> results;
  broadcastTrigger(triggerID, message, results);

  if (results.size() == 0)
  {
    ret = 0x6800;  // No available PlugIn supporting this trigger
  }
  else if (results.size() == 1)
  {
    string name = getTriggerName(triggerID);
    _LOGF_INFO("%s: Trigger %s executed on plugin id %d (result=0x%.4X), done.",
               __FUNCTION__, name.c_str(), results[0].id, results[0].retval);

    ret = results[0].retval;

    if (ret == 0x9000)
    {
      if (res != NULL && resSize != NULL && resBufSize > 0)
      {
        *resSize = (resBufSize > results[0].result.size()) ? results[0].result.size() : resBufSize;
        memcpy(res, results[0].result.data(), *resSize);
      }
    }
  }

  return ret;
}


bool pluginInstalledForTrigger(SDIPlugin::SDITrigger triggerID)
{
  for (unsigned i = 0; i < plugins.size(); i++)
  {
    if ((plugins[i]->getObj()->supportedTriggers() & (unsigned) triggerID) == (unsigned) triggerID)
    {
      return true;
    }
  }

  return false;
}

int executeSequencialTrigger(SDIPlugin::SDITrigger triggerID, PLUGIN_READ_TYPE readType, unsigned char *msg, unsigned short msgSize, unsigned short resBufSize, unsigned char *res, unsigned short *resSize)
{
  int ret = 0x6800; // PlugIn not loaded
  SDIPlugin *plugin = NULL;

  if (readType == PLUGIN_READ_NONE)
  {
    return ret;
  }

  if (plugins.size() > 0)
  {
    static unsigned position = 0;

    if (readType == PLUGIN_READ_FIRST)
    {
      position = 0;
    }

    for (unsigned i = position; i < plugins.size(); i++)
    {
      if ((plugins[i]->getObj()->supportedTriggers() & (unsigned) triggerID) == (unsigned) triggerID)
      {
        plugin = plugins[i]->getObj();
        position = i + 1;
        break;
      }
    }

    if (plugin)
    {
      SDIPlugin::Buffer result;
      SDIPlugin::Buffer message(msg, msg + msgSize);
      ret = plugin->processTrigger(result, triggerID, message);

      if (res != NULL && resSize != NULL && resBufSize > 0)
      {
        *resSize = (resBufSize > result.size()) ? result.size() : resBufSize;
        memcpy(res, &result[0], *resSize);
      }
      else if (resSize != NULL)
      {
        *resSize = 0;
      }
    }
    else
    {
      position = 0;
    }
  }

  return ret;
}

#ifdef LOADPLUGINTEST

int main(int argc, char *argv[])
{
  if (argc != 2)
  {
    fprintf(stderr, "Usage: %s <pluginpath>\n", argv[0]);
    return 1;
  }

  vector<SDIPlugin *> testPlugins;
  loadPlugins(testPlugins, argv[1]);

  for (unsigned i = 0; i < testPlugins.size(); i++)
  {
    int major, minor, patch;
    testPlugins[i]->version(major, minor, patch);
    printf("plugin '%s' version '%d.%d.%d' moduleID %d\n", testPlugins[i]->name(), major, minor, patch, testPlugins[i]->moduleID());

    void *ext = testPlugins[i]->openExtension(1);

    if (ext)
    {
      void (*extfunc)() = (void (*)())ext;
      extfunc();
      testPlugins[i]->closeExtension(ext);
    }

  }

  return 0;
}

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

---
hidden: true
title: loadplugin.h
---

<a href="loadplugin_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- mode: C++ -*-
 2 #ifndef LOADPLUGIN_H_20180928
 3 #define LOADPLUGIN_H_20180928
 4 
 5 #include <utility>
 6 #include <vector>
 7 #include <string>
 8 
 9 #include "sdiplugin.h"
 10 #include "csd.h"
 11 #include "msr/msr.h"
 12 
 13 // ID of the vos3-cards plugin
 14 #define VOS3_CARDS_PLUGIN_ID 0xE1
 15 
 16 typedef enum
 17 {
 18  TRIGGER_TYPE_UNKNOWN,
 19  TRIGGER_TYPE_SINGLE,
 20  TRIGGER_TYPE_MULTIPLE,
 21  TRIGGER_TYPE_SEQUENCIAL
 22 } TRIGGER_TYPE;
 23 
 24 typedef enum
 25 {
 26  PLUGIN_READ_NONE,
 27  PLUGIN_READ_FIRST,
 28  PLUGIN_READ_NEXT
 29 } PLUGIN_READ_TYPE;
 30 
 32 class SDIPluginCtx
 33 {
 34  SDIPlugin *m_p;
 35  void *m_handle;
 36  std::string m_file;
 37  std::string m_name;
 38  std::string m_version;
 39  std::string m_pciversion;
 41  // disable copy constructor and assign operator
 42  SDIPluginCtx(const SDIPluginCtx&);
 43  SDIPluginCtx& operator=(const SDIPluginCtx&);
 44 #if __cplusplus >= 201103L // since C++11 also forbid usage of move
 45  SDIPluginCtx(const SDIPluginCtx&&);
 46  SDIPluginCtx& operator=(SDIPluginCtx&&);
 47 #endif
 48 
 49  public:
 50  SDIPluginCtx(): m_p(0), m_handle(0) { }
 51  SDIPluginCtx(const std::string &file): m_p(0), m_handle(0)
 52  {
 53  load(file);
 54  }
 55  virtual ~SDIPluginCtx()
 56  {
 57  unload();
 58  }
 59 
 63  bool load(const std::string &file);
 66  inline bool loaded() const
 67  {
 68  return !!m_handle;
 69  }
 71  void unload();
 74  const std::string &getFile() const
 75  {
 76  return m_file;
 77  }
 80  const std::string &getName() const
 81  {
 82  return m_name;
 83  }
 86  const std::string &getVersion() const
 87  {
 88  return m_version;
 89  }
 92  const std::string &getPciVersion() const
 93  {
 94  return m_pciversion;
 95  }
 98  SDIPlugin *getObj()
 99  {
 100  return m_p;
 101  }
 102 };
 103 
 121 const std::vector<SDIPluginCtx *> &loadPlugins(bool reload = true);
 122 
 126 const std::vector<SDIPluginCtx *>& getLoadedPlugins();
 127 
 133 void registerPlugin(SDIPluginCtx *p);
 134 
 144 SDIPluginCtx * unregisterPlugin(const std::string &filename);
 145 
 146 SDIPlugin* getPlugin(int pluginID);
 147 
 148 void handlePluginCmd(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
 149 
 150 int executeSequencialTrigger(SDIPlugin::SDITrigger triggerID, PLUGIN_READ_TYPE readType, unsigned char *msg, unsigned short msgSize, unsigned short resBufSize, unsigned char *res, unsigned short *resSize);
 151 
 152 void storePluginMsrData(MSR_TrackData4 &tracks, MSR_DecodedData4 &decoded);
 153 
 155 struct bcTriggerResult
 156 {
 157  int retval;
 158  SDIPlugin::Buffer result;
 159  std::string name;
 160  int id;
 161 };
 162 
 163 void broadcastTriggerLocal(SDIPlugin::SDITrigger triggerID, csd::csd_data &message, std::vector<struct bcTriggerResult> &results);
 164 
 173 void broadcastTrigger(SDIPlugin::SDITrigger triggerID, csd::csd_data &message, std::vector<struct bcTriggerResult> &results);
 174 
 175 int executeSingleTrigger(SDIPlugin::SDITrigger triggerID, unsigned char *msg, unsigned short msgSize, unsigned short resBufSize, unsigned char *res, unsigned short *resSize);
 176 
 177 
 181 SDIPlugin* pluginInstalledForTrigger(SDIPlugin::SDITrigger triggerID);
 182 
 183 #endif
```

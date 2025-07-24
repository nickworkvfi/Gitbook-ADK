---
hidden: true
title: sdiplugin.h
---

<a href="sdiplugin_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++ -*-
 2 #ifndef SDI_PLUGIN_H_20181001
 3 #define SDI_PLUGIN_H_20181001
 4 
 7 #include <vector>
 8 
 9 
 10 #define CLA_PLUGIN_CMD 0x26 
 11 
 12 
 14 class SDIPlugin
 15 {
 16  public:
 17 
 19  typedef std::vector<unsigned char> Buffer;
 20 
 22  enum SDITrigger
 23  {
 24  SDITrigger_None = 0,
 25  SDITrigger_CardDetected = 1 << 0,
 26  SDITrigger_EMVConfig = 1 << 1,
 27  SDITrigger_SDIConfig = 1 << 2,
 28  SDITrigger_CardDataAvail = 1 << 3,
 29  SDITrigger_MsgDataAvail = 1 << 4,
 30  SDITrigger_EmvCndListCbk = 1 << 5,
 31  SDITrigger_CardId = 1 << 6,
 32  SDITrigger_FactoryReset = 1 << 7,
 34  SDITrigger_ExternalCSD = 1 << 8,
 35  SDITrigger_ExtDataStore = 1 << 9,
 43  SDITrigger_ManualPan = 1 << 10,
 44  SDITrigger_CTLSSmartISO = 1 << 11
 45  };
 46 
 48  enum SDIExtension
 49  {
 50  SDIExt_TrustedConnection = 0,
 55  SDIExt_PCI_Version = 1,
 59  SDIExt_VCL_Callback = 4
 63  };
 64 
 65 
 67  virtual ~SDIPlugin() {}
 68 
 70  virtual const char *name() const = 0;
 71 
 77  virtual void version(int &major, int &minor, int &patch) const = 0;
 78 
 82  virtual int moduleID() const = 0;
 83 
 86  virtual unsigned supportedTriggers() const = 0;
 87 
 100  virtual int processMessage(Buffer &result, int cmd, const Buffer &message) = 0;
 101 
 102 
 110  virtual int processTrigger(Buffer &result, unsigned triggerID, const Buffer &message) = 0;
 111 
 112  //
 113  //virtual int cardInsert(Buffer &result, unsigned cardType, const Buffer &atr, const Buffer &track1, const Buffer &track2, const Buffer &track3);
 114  //
 115 
 120  virtual void *openExtension(int ext_number) = 0;
 121 
 125  virtual void closeExtension(void *extension) = 0;
 126 };
 127 
 128 
 132 extern "C" {
 133  __attribute__((visibility("default"))) SDIPlugin *getSDIPlugin();
 134 }
 135 
 151 typedef void (* Vcl_Encryption_Callback)(void *data, unsigned short* size, void *context);
 152 
 153 
 162 typedef void (* Vcl_Encryption_Callback_Setter)(Vcl_Encryption_Callback cb, void *context);
 163 
 164 #endif
```

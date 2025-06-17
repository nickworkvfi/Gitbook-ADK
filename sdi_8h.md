---
title: sdiapi/src/sdiapi/sdi.h

---

# sdiapi/src/sdiapi/sdi.h



## Namespaces

| Name           |
| -------------- |
| **[vfiipc](namespacevfiipc.md)**  |
| **[vfisdi](namespacevfisdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfisdi::SDIClient](classvfisdi_1_1_s_d_i_client.md)**  |
| struct | **[vfisdi::SDIClient::TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md)**  |
| struct | **[vfisdi::SDIClient::CAPKeyInfo](structvfisdi_1_1_s_d_i_client_1_1_c_a_p_key_info.md)**  |
| struct | **[vfisdi::SDIClient::ComponentVersion](structvfisdi_1_1_s_d_i_client_1_1_component_version.md)**  |
| struct | **[vfisdi::SDIClient::TECOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md)**  |
| struct | **[vfisdi::SDIClient::PluginResult](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md)**  |
| struct | **[vfisdi::SDIClient::PlaceHolder](structvfisdi_1_1_s_d_i_client_1_1_place_holder.md)**  |
| struct | **[vfisdi::SDIClient::Matching](structvfisdi_1_1_s_d_i_client_1_1_matching.md)**  |
| struct | **[vfisdi::SDIClient::CTCandidateData](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md)**  |
| struct | **[vfisdi::SDIClient::CTCandidate](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md)**  |
| struct | **[vfisdi::SDIClient::AdditionalCardTag](structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag.md)**  |
| struct | **[vfisdi::SDIClient::CTLSCandidateData](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md)**  |
| struct | **[vfisdi::SDIClient::NFCCardCount](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count.md)**  |
| struct | **[vfisdi::SDIClient::NFCCard](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card.md)**  |
| struct | **[vfisdi::SDIClient::NFCCardExt](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](sdi_8h.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
// -*- Mode: C++; -*-
#ifndef SDI_H_20190919
#define SDI_H_20190919

#include <vector>
#include <map>
#include <string>
#include <stdio.h>
#include <stdarg.h>
#if defined _WIN32
// Need this for conflicting includes for pthread on Windows
#define HAVE_STRUCT_TIMESPEC
#endif
#if __cplusplus>=201103
#  include <thread>
#  include <mutex>
#  include <condition_variable>
#else
#  include <pthread.h>
#endif
#include <stdint.h>

#include "tlv.h"
#include "bcd.h"
#include "sdi_emv.h"
#include "sdi_enum.h"

#if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
#   define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

namespace vfiipc {
class IPC;
}

namespace vfisdi {

class DllSpec SDIClient {

   // disable copying
   SDIClient(const SDIClient &);
   void operator=(const SDIClient &);

 public:

   typedef std::vector<unsigned char> bytevector;

   enum ProtocolType {
      PROTOCOL_B, 
      PROTOCOL_C  
   };

   static bool isGenericError(int r)    { return -1000<r; }
   static bool isSystemError(int r)     { return ERR_SYSTEM_BASE-1000<r     && r<=ERR_SYSTEM_BASE;     }
   static bool isCardreaderError(int r) { return ERR_CARDREADER_BASE-1000<r && r<=ERR_CARDREADER_BASE; }
   static bool isDisplayError(int r)    { return ERR_DISPLAY_BASE-1000<r    && r<=ERR_DISPLAY_BASE;    }
   static bool isPrinterError(int r)    { return ERR_PRINTER_BASE-1000<r    && r<=ERR_PRINTER_BASE;    }
   static bool isPluginError(int r)     { return ERR_PLUGIN_BASE-1000<r     && r<=ERR_PLUGIN_BASE;     }
   static bool isVCLError(int r)        { return ERR_VCL_BASE-1000<r        && r<=ERR_VCL_BASE;        }
   static bool isEMVError(int r)        { return ERR_EMV_BASE-1000<r        && r<=ERR_EMV_BASE;        }
   static bool isPEDError(int r)        { return ERR_PED_BASE-1000<r        && r<=ERR_PED_BASE;        }
   static bool isNFCError(int r)        { return ERR_NFC_BASE-1000<r        && r<=ERR_NFC_BASE;        }
   static bool isVASError(int r)        { return ERR_VAS_BASE-1000<r        && r<=ERR_VAS_BASE;        }
   static bool isDataError(int r)       { return ERR_DATA_BASE-1000<r       && r<=ERR_DATA_BASE;       }
   static bool isSECError(int r)        { return ERR_SEC_BASE-1000<r        && r<=ERR_SEC_BASE;        }


   struct TouchButton {
      int  x; 
      int  y; 
      int  w; 
      int  h; 
      char c; 
#if __cplusplus>=201103
      TouchButton(int x=0, int y=0, int w=0, int h=0, char c=0)
        : x(x), y(y), w(w), h(h), c(c) {}
#endif
   };

   struct CAPKeyInfo {
      Array<5> rid; 
      unsigned char index; 
      unsigned char keyLength; 
   };

   typedef void (*LogCallback)(void *data, const char *file, int line, const char *format, va_list ap);

 protected:
   enum { STX=0x02, ETX=0x03 };

   struct PrivateData;

   PrivateData *p;

   void logError(const char *file, int line, const char *format, ...);
   void logDebug(const char *file, int line, const char *format, ...);

   // send/receive/close without locking
   int sendMessage_nolock(unsigned short cmd, unsigned short p1p2, const bytevector &data);
   int sendReply_nolock(unsigned short cmd, const bytevector &data);
   void close_nolock();

   static int getResult(unsigned short sw12);
   static int getResult(unsigned short sw12, const bytevector &reply, int error_offset);
   static int getResult(unsigned short sw12, TLV &t, int error_offset);

#if __cplusplus<201103
   static void *reader_thread(void *data);
#endif
   void reader_thread();

   // internal EMV functions
   int emvXExit(unsigned short cmd, unsigned options=0);
   int emvXSetTermData(unsigned short cmd, const EMVConf &emv);
   int emvXGetTermData(unsigned short cmd, EMVConf &emv);
   int emvXSetCAPKey(unsigned short cmd,
                     const Array<5> &rid, unsigned char index,
                     const bytevector &key, unsigned char exp,
                     const bytevector &hash=bytevector(),
                     const bytevector &revocationlist=bytevector());
   int emvXClearCAPKey(unsigned short cmd, const Array<5> &rid, unsigned char index);
   int emvXClearAllCAPKey(unsigned short cmd);
   int emvXGetCAPKeys(unsigned short cmd, std::vector<CAPKeyInfo> &keys);
   int emvXApplyConfig(unsigned short cmd, unsigned options);
   int emvXAddVirtualMapEntry(unsigned short cmd, int transaction, int currency, unsigned char vterminal);
   int emvXClearVirtualMap(unsigned short cmd);
   int emvXContinueOnline(EMVTxn &out,
                          unsigned short cmd,
                          bool onlineResult,
                          const Array<2> &authResp,
                          const EMVTxn &optional);
   int emvXEndTransaction(unsigned short cmd, unsigned options);

   int emvCtlsSetAppData(unsigned kernel_id, const bytevector &aid, const EMVConf &emv, unsigned char config_cmd);
   int emvCtlsGetAppData(unsigned kernel_id, const bytevector &aid, EMVConf &emv, unsigned char config_cmd);



 public:
   SDIClient();

   virtual ~SDIClient();

   void setProtocol(ProtocolType proto);


   void setTrace(void *data, void (*trace_cb)(void *data, const char *format, ...));

   template<typename R, typename T> void setTrace(T *data, R (*trace)(T *data, const char *format, ...)) {
      setTrace((void *)data,(void (*)(void *, const char *, ...))trace);
   }

   int connect(const char *host, unsigned short port=12000);

   int connect(vfiipc::IPC *link);

   bool connected() const;

   void close();
 // group sdisetup


   int sendMessage(unsigned short cmd, unsigned short p1p2, const bytevector &data);

   int sendMessage(unsigned short cmd, const bytevector &data) { return sendMessage(cmd,0,data); }

   int receiveMessage(unsigned short &sw1sw2, bytevector &data);

   int sendReply(unsigned short cmd, const bytevector &data);

   int sendReceiveMessage(unsigned short cmd, unsigned short p1p2, const bytevector &sdata, unsigned short &sw1sw2, bytevector &rdata);

   int sendReceiveMessage(unsigned short cmd, const bytevector &sdata, unsigned short &sw1sw2, bytevector &rdata) { return sendReceiveMessage(cmd,0,sdata,sw1sw2,rdata); }

 // group sdilowlevel



   int sysAbort();

   int sysGetConfig(const bytevector &req, bytevector &out);

   int sysGetCPUID(std::string &id);

   int sysGetSerialNumber(std::string &sn);

   int sysGetBootSoftwareID(std::string &id);

   int sysGetApplicationSoftwareID(std::string &id);

   int sysGetHardwareID(std::string &id);

   int sysGetIFMID(std::string &id);

   int sysGetEMVL2ID(std::string &id);

   int sysGetStatus(const bytevector &req, bytevector &out);

   int sysGetDateTime(unsigned short &year, unsigned char &month, unsigned char &day,
                      unsigned char &hour, unsigned char &minute, unsigned char &second);

   int sysGetTamperStatus(Array<9> &tamper);

   int sysGetBatteryStatus(unsigned char &charge_level, unsigned char &charge_status);

   int sysGetBatteryVoltage(unsigned short &voltage);

   int sysGetLanguage(enum Language &language);

   int sysGetCVVDeactivation(unsigned char &cfg);

   int sysGetCardEntryMode(unsigned char &mode);

   int sysSetDateTime(unsigned short year, unsigned char month, unsigned char day,
                      unsigned char hour, unsigned char minute, unsigned char second);

   int sysSetLanguage(enum Language language);

   int sysSetCVVDeactivation(unsigned char deactivate);

   int sysSetCardEntryMode(unsigned char mode);

   int sysSetDisplayBacklight(unsigned char backlight);

   int sysSetDisplayConstrast(unsigned char contrast);

   int sysGetKSN(KSNSelection which, bytevector &out);

   int sysAuthStep1(const Array<16> &hostRandom, Array<32> &serverData, bytevector &ksn);

   int sysAuthStep2(const Array<32> &hostData, Array<32> &serverData);

   int sysSetIdleText(const std::string &text);

   int sysClearIdleText();

   int sysUploadBegin(const std::string &filename,
                      SYSUploadType type=SYS_UPLOAD_SOFTWARE_UPDATE,
                      int dest=1);

   int sysUploadData(const void *packet,
                     unsigned size,
                     int packet_no,
                     int dest=1);

   int sysUploadEnd(const bytevector *md5=0,
                    const bytevector *mac=0,
                    int dest=1);

   int sysUpload(const std::string &filename,
                 const bytevector &data,
                 SYSUploadType type=SYS_UPLOAD_SOFTWARE_UPDATE,
                 const bytevector *md5=0,
                 const bytevector *mac=0,
                 int dest=1);

   int sysShutdown();

   int sysReboot();

   int sysSleep();

   int sysHibernate();

   int sysShowMACDesktop();

   int sysSetPropertyString(int property, const std::string &in, int dest=1);

   int sysSetPropertyInt(int property, int in, int dest=1);

   int sysGetPropertyString(int property, std::string &out, int dest=1);

   int sysGetPropertyInt(int property, int &out, int dest=1);

   int sysInstallSponsorCert(const bytevector &cert);

   struct ComponentVersion {
      std::string name; 
      std::string version; 
   };

   int sysGetSDIVersion(std::vector<ComponentVersion> &info, unsigned char device=1);


   int sysInstallUpdate(SYSUpdateType type);

   int sysInstallResult(std::string &result, unsigned char device=1);

   int sysEnableEPP(bool enable);

   int sysFactoryReset();

   int sysReadCert(const std::string &name, bytevector &cert);

   int sysSetCurrencyDisplay(enum Currency currency, enum CurrencyDisplay display);
 // group sdisystem


   int displayText(int template_id, const std::string &data_name, const std::string &data_value, int timeout=0, bool confirm=false, bool beep=false, int dest=1);

   int displayText(int template_id,
                   unsigned dialog_opt,
                   const std::map<std::string, std::string> &value,
                   const std::map<std::string, std::string> &key_actions,
                   const char *header_text=0,
                   const char *enter_text=0,
                   const char *clear_text=0,
                   const char *cancel_text=0,
                   int timeout=0,
                   int dest=1);


   int displayText(const std::string &data_value, int timeout=0, bool confirm=false, bool beep=false, int dest=1)
   { return displayText(1,"text",data_value,timeout,confirm,beep,dest); }


   int displayInput(std::string &out, InputType type, Language language=LANGUAGE_NO_LANGUAGE,
                    char maskchar=0, const std::string &altformat="",
                    int timeout=0, bool beep=false, int dest=1);

   int displayInputTipWithAmount(std::string &out, Language language,
                                 const BCD<6> &amount, Currency currency,
                                 char maskchar=0, const std::string &altformat="",
                                 int timeout=0, bool beep=false, int dest=1);




   int displayMenu(const std::string &prompt, const std::vector<std::string> &entries,int timeout=0, bool beep=false, int dest=1);


   int displayMenu(unsigned dialog_opt,
                   const std::string &prompt,
                   const std::vector<std::string> &entries,
                   int preselect,
                   const std::map<std::string, std::string> &key_actions,
                   const char *header_text=0,
                   const char *enter_text=0,
                   const char *cancel_text=0,
                   const char *up_text=0,
                   const char *down_text=0,
                   int timeout=0,
                   int dest=1);


   int displayCardRequest(unsigned char tec,
                          unsigned char mode,
                          const BCD<6> amount,
                          int currency,
                          int dest=1);

   int displayCardRequest(unsigned char tec, unsigned char mode, int dest=1)
   {   return displayCardRequest(tec,mode,0,-1,dest); }

   int displayCardRequest(unsigned char tec,
                          unsigned char mode,
                          const BCD<6> amount,
                          int currency,
                          enum EMVTransaction txn,
                          int dest=1);

   int displayCardRequest(unsigned char tec, unsigned char mode, enum EMVTransaction txn, int dest=1)
   {   return displayCardRequest(tec,mode,0,-1,txn,dest); }


   enum IdleScreenMode {
      IDLE_HOTKEY_ADMIN=0, 
      IDLE_NO_ADMIN=1,      
      IDEL_SHOW_ADMIN=2,    
   };

   int displayIdleScreen(int dest=1);

   int displayIdleScreenMode(enum IdleScreenMode mode, int dest=1);

   int displaySignatureCapture(std::string &outformat, bytevector &outdata,
                               Language lang, unsigned short timeout=0, int dest=1);

   int displayLEDs(bool on);

   int displayDialog(const std::string &filename, std::map<std::string,std::string> &value, Language lang=LANGUAGE_NO_LANGUAGE, bool beep=false, int dest=1);

   int displayDialog(unsigned dialog_opt,
                     const std::string &filename,
                     std::map<std::string,std::string> &value,
                     Language lang=LANGUAGE_NO_LANGUAGE,
                     int dest=1);

   int displayGetAsyncResult(enum DialogAsyncStatus &status, int dest=1);
 // group sdidisplay


   int printSetPropertyString(int property, const std::string &in);

   int printSetPropertyInt(int property, int in);

   int printGetPropertyString(int property, std::string &out);

   int printGetPropertyInt(int property, int &out);

   int printHTML(const std::string &html, bool landscape=false);

   int printBitmap(int width, int height, const void *bitmap, unsigned size);

   int printBitmap(int width, int height, const bytevector &bitmap) {
      return bitmap.empty() ? OK : printBitmap(width,height,&bitmap[0],(unsigned int)bitmap.size());
   }
 // group sdiprinter


   struct PluginResult;

   int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track2, int timeout_sec);

   int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track2, Array<3> &track_status, int timeout_sec);

   int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track2, Array<3> &track_status, bytevector &card_token, int timeout_sec, int removal_timeout_ms=-1);

   int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track2, Array<3> &track_status, bytevector &card_token,
               std::vector<PluginResult> &plugin_result,
               int timeout_sec, int removal_timeout_ms=-1);

   int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track1, std::string &track2, Array<3> &track_status, bytevector &card_token,
               std::vector<PluginResult> &plugin_result,
               int timeout_sec, int removal_timeout_ms=-1);

   int msrCardDataEntry(std::string &out, const std::vector<TouchButton> &btn=std::vector<TouchButton>());

   int msrCardDataEntry(std::string &out, bytevector &card_token, unsigned flags,
                        const std::string &format=std::string(),
                        const std::vector<TouchButton> &btn=std::vector<TouchButton>());

   int msrCardDataEntry(std::string &out, bytevector &card_token,
                        std::vector<PluginResult> &plugin_result,
                        unsigned flags,
                        const std::string &format=std::string(),
                        const std::vector<TouchButton> &btn=std::vector<TouchButton>());

   int msrCardDataEntry(std::string &out, bytevector &card_token,
                        std::vector<PluginResult> &plugin_result,
                        unsigned flags,
                        int timeout,
                        const std::string &format=std::string(),
                        const std::vector<TouchButton> &btn=std::vector<TouchButton>());

   int msrSetOptions(unsigned options);

   int msrLED(unsigned led1, unsigned led2, unsigned led3, unsigned timeout=0);

   int msrSetSensitivity(unsigned char sensitivity, int dest=1);
 // group sdimsr


   struct TECOptions {
      unsigned short tec_start;  
      unsigned char ctOptions;   
      unsigned char ctlsOptions; 
      unsigned short msrAfterCTLSTimeout;
      unsigned short msrAfterInsertTimeout;
      unsigned short paymentTimeout;
      unsigned nfcTechnology; 
   };

   int crdDetect(unsigned char tec,
                 const TECOptions &options,
                 bool allow_cancel,
                 unsigned timeout_ms,
                 unsigned char &tec_out,
                 EMVTxn &emv_out,
                 const bytevector &appid=bytevector(),
                 unsigned char syncCard=0,
                 unsigned char manual_mode=0,
                 const std::string &format="",
                 bytevector *plugin_result=0
      );

   struct PluginResult {
      short id;                    
      unsigned short responseCode; 
      bytevector responseData;     
   };

   int crdDetect(unsigned char tec,
                 const TECOptions &options,
                 bool allow_cancel,
                 unsigned timeout_ms,
                 unsigned char &tec_out,
                 EMVTxn &emv_out,
                 std::vector<PluginResult> &plugin_result,
                 const bytevector &appid=bytevector(),
                 unsigned char syncCard=0,
                 unsigned char manual_mode=0,
                 const std::string &format="",
                 int removal_timeout_ms=-1
      );

   int crdWaitForRemoval(unsigned short timeout=0);

   int crdStartDetect(unsigned char tec,
                      const TECOptions &options,
                      unsigned timeout,
                      bool use_cb=false,
                      const bytevector &appid=bytevector(),
                      unsigned char syncCard=0);

   int crdStartDetect(unsigned char tec,
                      const TECOptions &options,
                      unsigned timeout,
                      bool use_cb,
                      const bytevector &appid,
                      unsigned char syncCard,
                      int removal_timeout_ms=-1);

   int crdPollDetect(unsigned char &tec_out,
                     EMVTxn &emv_out,
                     bytevector *plugin_result=0);

   int crdStopDetect();

   int crdAddTechnology(unsigned char tec,
                        const TECOptions &options,
                        const bytevector &appid=bytevector(),
                        unsigned char syncCard=0);

   int crdRemoveTechnology(unsigned char tec);


   int crdProvideCallbackResponse(EMVTxn &in);
 // group sdicrd


   int pedGetPIN(const std::vector<TouchButton> &btn=std::vector<TouchButton>(),
                 bool bypass=false,
                 int timeout=300,
                 int navigator_mode=0,
                 int min_digits=4,
                 int max_digits=12,
                 Language lang=LANGUAGE_NO_LANGUAGE);

   int pedGetPIN(unsigned pin_options,
                 const BCD<6> amount=0,
                 int currency=-1,
                 const char *applabel=0,
                 const char *headline=0,
                 unsigned pwd_char=0,
                 const std::vector<TouchButton> &btn=std::vector<TouchButton>(),
                 unsigned bypass=BYPASS_DISABLED,
                 int timeout=300,
                 int interchar_timeout=0,
                 int min_digits=4,
                 int max_digits=12,
                 Language lang=LANGUAGE_NO_LANGUAGE);

   int pedGetPIN(bool bypass=false,
                 int timeout=300,
                 int min_digits=4,
                 int max_digits=12,
                 Language lang=LANGUAGE_NO_LANGUAGE)
   {
      return pedGetPIN(std::vector<TouchButton>(),bypass,timeout,0,min_digits,max_digits,lang);
   }

   int pedSetPINTimeout(unsigned short timeout_sec);

   void pedConfirmKey();


   int pedStartPIN(const std::vector<TouchButton> &btn=std::vector<TouchButton>(),
                   int bypass_key=0,
                   int navigator_mode=0,
                   int minlen=4,
                   int maxlen=12,
                   bool clear_all=false,
                   bool auto_enter=false);


   int pedPollPIN(PINStatus &pin, int &digits, int &status);

   int pedStopPIN();

   int pedSetPINInputParameter(bool clear_all);

   int pedSetPINInputParameter(unsigned pin_options,
                               const char *headline=0,
                               unsigned pwd_char=0,
                               unsigned bypass=BYPASS_DISABLED,
                               int interchar_timeout=0,
                               int min_digits=4,
                               int max_digits=12,
                               int dest=1);
 // group sdiped


   int secOpen(unsigned &handle, const std::string &hostname);

   int secClose(unsigned handle);

   int secEncrypt(unsigned handle, const bytevector &in, bytevector &out, bytevector *iv=0, bytevector *ksn=0);

   int secDecrypt(unsigned handle, const bytevector &in, bytevector &out, const bytevector *iv=0, bytevector *ksn=0);

   int secSign(unsigned handle, const bytevector &in, bytevector &out, bytevector *iv=0, bytevector *ksn=0);

   int secVerify(unsigned handle, const bytevector &in, const bytevector &sig, const bytevector *iv=0, bytevector *ksn=0);

   int secUpdateKey(unsigned handle, unsigned char keyType, const bytevector &key, bytevector *prop=0, const unsigned char *as2805=0, bytevector *key_kcv=0);

   int secUpdateKey(unsigned handle, unsigned char keyType, const bytevector &key, bytevector *prop, const unsigned char *as2805, bytevector *key_kcv, const bytevector *iv);

   int secSetKeySetID(unsigned handle, unsigned id, unsigned master_id=0);

   int secGetEncryptedPIN(unsigned handle,unsigned char fmt, bytevector &pinblock, bytevector &ksn, bool zero_pin=false);

   int secGetKeyInventory(unsigned handle, std::string &json);

   int secGetKeyData(unsigned handle, unsigned char keyType, bytevector &out, bool kek_flag=false);

   int secGetStatus(unsigned handle, std::string &json);

   int secGetStatus(const std::string &hostname, std::string &json);

   int secGetStatus(std::string &json) {
      return secGetStatus("",json);
   }

   int secGetVersions(std::string &version);
 // group sdisec


   int dataGetEncData(unsigned handle,
                      const bytevector &taglist,
                      const bytevector &appdata,
                      unsigned options,
                      bool useStoredTX,
                      bytevector &out,
                      bytevector *iv=0,
                      bytevector *ksn=0);

   int dataGetEncData(unsigned handle,
                      const bytevector &taglist,
                      const bytevector &appdata,
                      unsigned options,
                      bool useStoredTX,
                      bytevector &out,
                      bytevector *iv,
                      bytevector *ksn,
                      bool incrementKSN,
                      unsigned keysetID=0,
                      unsigned masterKeysetID=0);


   struct PlaceHolder {
      bytevector taglist; 
      bytevector appdata; 
      unsigned options; 
#if __cplusplus >= 201103
      PlaceHolder(const bytevector &taglist_, const bytevector &appdata_, unsigned options_)
          : taglist(taglist_),
            appdata(appdata_),
            options(options_) {}
      PlaceHolder() = default;
#endif
   };

   int dataGetEncMsgData(unsigned handle,
                         const bytevector &msgtemplate,
                         const std::vector<PlaceHolder> &placeholder,
                         bool useStoredTX,
                         bytevector &out,
                         bytevector *iv=0,
                         bytevector *ksn=0);
   int dataGetEncMsgData(unsigned handle,
                         const bytevector &msgtemplate,
                         const std::vector<PlaceHolder> &placeholder,
                         bool useStoredTX,
                         bytevector &out,
                         bytevector *iv,
                         bytevector *ksn,
                         bool incrementKSN,
                         unsigned keysetID=0,
                         unsigned masterKeysetID=0);

   int dataFetchTxnTags(const std::vector<unsigned> &taglist, bytevector &out, unsigned char mode=0, bool cleartext_date=false);

   int dataFetchTxnTags(const std::vector<unsigned> &taglist, bytevector &out,
                        unsigned char mode, bool cleartext_date,
                        unsigned options);

   int dataClearDataStore();

   int dataGetMsgSignature(unsigned handle,
                           const bytevector &msgtemplate,
                           const std::vector<PlaceHolder> &placeholder,
                           bool useStoredTX,
                           bytevector &out,
                           bytevector *iv=0,
                           bytevector *ksn=0);

   int dataGetMsgSignature(unsigned handle,
                           const bytevector &msgtemplate,
                           const std::vector<PlaceHolder> &placeholder,
                           bool useStoredTX,
                           bytevector &out,
                           bytevector *iv,
                           bytevector *ksn,
                           bool incrementKSN,
                           unsigned keysetID=0,
                           unsigned masterKeysetID=0);

   struct Matching {
      std::string record;            
      unsigned char expirationCheck;     
      unsigned char luhnCheck;       
      unsigned char activationCheck; 
   };

   int dataPerformValidationChecks(const Array<3> &date, Matching &match, std::vector<Matching> *additional=0);

   int dataPerformValidationChecks(const Array<3> &date, const bytevector &iin, Matching &match, std::vector<Matching> *additional=0);

   int dataGetValidationInfo(std::string &out);

   int dataGetEncTxnData(const std::vector<unsigned> &taglist, bytevector &encrypted);


   int dataSetEncTxnData(const bytevector &encrypted);

   int dataEndEncTxnData();

   int dataGetEmvInfo(EMVConf &emv);
 // group sdidata


   int vclRegistartSRED(bytevector &track1, bytevector &track2, bytevector &track3);

   int vclStatusRequest(bytevector &status);

   int vclAdvanceDDK(bytevector &track1, bytevector &track2, bytevector &track3);

   int vclRequestEParms(bytevector &eparms);

   int vclGetDiagnostic(unsigned format, unsigned page, std::string &diag);

   int vclGetKeyStatus(unsigned char &status);

   int vclOverrideMessageQuery(bytevector &track1, bytevector &track2, bytevector &track3);

   int vclKSNRequest(std::string &ksn);

   int vclKmailinRequest();
 // group sdivcl


   int emvCtInit(int aidCount=0, unsigned options=0);

   int emvCtExit(unsigned options=0);

   int emvCtSetTermData(const EMVConf &emv);

   int emvCtGetTermData(EMVConf &emv);

   int emvCtSetAppData(const bytevector &aid, const EMVConf &emv);

   int emvCtClearAppData(const bytevector &aid);

   int emvCtClearAllAppData();

   int emvCtSetTempAppData(const EMVConf &emv);

   int emvCtGetAppData(const bytevector &aid, EMVConf &emv);

   int emvCtGetAppData(bool first, EMVConf &emv);


   int emvCtSetCAPKey(const Array<5> &rid, unsigned char index,
                      const bytevector &key, unsigned char exp,
                      const bytevector &hash=bytevector(),
                      const bytevector &revocationlist=bytevector());

   int emvCtClearCAPKey(const Array<5> &rid, unsigned char index);

   int emvCtClearAllCAPKey();

   int emvCtGetCAPKeys(std::vector<CAPKeyInfo> &keys);

   int emvCtApplyConfig(unsigned options=0);

   int emvCtAddVirtualMapEntry(int transaction, int currency, unsigned char vterminal);

   int emvCtClearVirtualMap();

   int emvCtSmartDetect(int timeout_ms);

   int emvCtActivate(bytevector *atr=0);

   int emvCtActivate(unsigned options, bytevector *atr=0);

   int emvCtDeactivate();

   int emvCtDeactivate(unsigned options);

   int emvCtStartTransaction(EMVTxn &out,
                             EMVTransaction type,
                             const BCD<6> amount,
                             const Array<3> &date,
                             const Array<3> &time,
                             const BCD<4> &counter,
                             const EMVTxn &optional=EMVTxn());

   int emvCtContinueOffline(EMVTxn &out, const EMVTxn &optional=EMVTxn());


   int emvCtContinueOnline(EMVTxn &out,
                           bool onlineResult,
                           const Array<2> &authResp=Array<2>(),
                           const EMVTxn &optional=EMVTxn());

   int emvCtUpdateTxnTags(unsigned options, const EMVTxn &config);

   int emvCtEndTransaction(unsigned options=0);

   struct CTCandidateData {
      unsigned char api;            
      unsigned char codeTableIndex; 
      unsigned char iin[4];         
      std::string iban;             
      std::string bic;              
      unsigned char country2[2];    
      unsigned char country3[3];    
      unsigned char aidLen;         
      bytevector asf;               
      bytevector selData;           
   };


   int emvCtGetCandidateData(std::vector<CTCandidateData> &out);

   int emvCtSendOfflinePIN(unsigned short &chipresult);

   struct CTCandidate {
      bytevector aid;               
      unsigned char api;            
      std::string text;             
      std::string text2;            
      unsigned char codeTableIndex; 
      unsigned char languagePref;   
   };


   struct AdditionalCardTag {
      unsigned tag;         
      EMVType  type;     
      unsigned char minLen; 
      unsigned char maxLen; 
#if __cplusplus >= 201103
      AdditionalCardTag(unsigned tag_,
                        EMVType type_,
                        unsigned char minLen_,
                        unsigned char maxLen_)
          : tag(tag_), type(type_), minLen(minLen_), maxLen(maxLen_) {}
      AdditionalCardTag() = default;
#endif
   };

   int emvCtCheckSupportedAID(const bytevector &aid,
                              unsigned char asi,
                              const std::string &defaultLabel,
                              std::vector<CTCandidate> &candlist,
                              unsigned short *sw12=0,
                              const std::vector<AdditionalCardTag> *adtCrdTags=0);

   int emvCtLED(bool ledState);

   int emvCtSendReceive(unsigned options, const bytevector &in, bytevector &out);
 // group sdiemvct


   int emvCtlsInit(int aidCount=0, unsigned options=0);

   int emvCtlsExit(unsigned options=0);

   int emvCtlsSetTermData(const EMVConf &emv);

   int emvCtlsGetTermData(EMVConf &emv);


   int emvCtlsSetAppData(unsigned kernel_id, const bytevector &aid, const EMVConf &emv);

   int emvCtlsClearAppData(unsigned kernel_id, const bytevector &aid);

   int emvCtlsClearAllAppData();

   int emvCtlsSetTempAppData(unsigned kernel_id, const bytevector &aid, const EMVConf &emv);


   int emvCtlsGetAppData(unsigned kernel_id, const bytevector &aid, EMVConf &emv);

   int emvCtlsGetAppData(bool first, EMVConf &emv);


   int emvCtlsSetCAPKey(const Array<5> &rid, unsigned char index,
                      const bytevector &key, unsigned char exp,
                      const bytevector &hash=bytevector(),
                      const bytevector &revocationlist=bytevector());

   int emvCtlsClearCAPKey(const Array<5> &rid, unsigned char index);

   int emvCtlsClearAllCAPKey();

   int emvCtlsGetCAPKeys(std::vector<CAPKeyInfo> &keys);

   int emvCtlsApplyConfig(unsigned options=7);

   int emvCtlsAddVirtualMapEntry(int transaction, int currency, unsigned char vterminal);

   int emvCtlsClearVirtualMap();

   int emvCtlsSetupTransaction(EMVTxn &out,
                               EMVTransaction type,
                               const BCD<6> amount,
                               const Array<3> &date,
                               const Array<3> &time,
                               const BCD<4> &counter,
                               const EMVTxn &optional=EMVTxn());

   int emvCtlsContinueOffline(EMVTxn &out, unsigned options=0);

   int emvCtlsContinueOnline(EMVTxn &out,
                             bool onlineResult,
                             const Array<2> &authResp=Array<2>(),
                             const EMVTxn &optional=EMVTxn());

   int emvCtlsEndTransaction(unsigned options=0);

   struct CTLSCandidateData {
      unsigned char api;            
      unsigned char iin[4];         
      std::string iban;             
      std::string bic;              
      unsigned char country2[2];    
      unsigned char country3[3];    
      unsigned char aidLen;         
      bytevector selData;           
      bytevector discData;          
   };


   int emvCtlsGetCandidateData(std::vector<CTLSCandidateData> &out);

   int emvCtlsBreak();


   int emvCtlsSmartReset(unsigned char readeropt=0, bytevector *atr=0);

   int emvCtlsSmartPowerOff(unsigned char options);

   int emvCtlsCardRemoval(unsigned timeout_ms);


   int emvCtlsTransparentCommand(const bytevector &in, bytevector &out);

   int emvCtlsTransparentSend(const bytevector &in);

   int emvCtlsTransparentReceive(bytevector &out);

   int emvCtlsLEDMode(unsigned char mode);

   int emvCtlsLED(int led, unsigned char state);

   int emvCtlsSendReceive(const bytevector &in, bytevector &out);
 // group sdiemvctls


   int nfcInit(unsigned char conn_type);

   int nfcPing(bytevector &raw);

   int nfcGetVersion(std::string &version);

   int nfcConfigInit();

   int nfcOpen();

   int nfcClose();

   int nfcFieldOn();

   int nfcFieldOff();

   struct NFCCardCount {
      unsigned char totalCount; 
      unsigned char cardACount; 
      unsigned char cardBCount; 
      unsigned char cardFCount; 
   };

   struct NFCCard {
      unsigned char type; 
      bytevector info;    
   };

   struct NFCCardExt {
      unsigned char type; 
      unsigned char SAK;  
      unsigned short ATQ; 
      unsigned typeFull;  
      bytevector info;    
      bytevector RFU;     
   };

   int nfcFieldPolling(unsigned tech_bm,
                       unsigned timeout,
                       const bytevector &in,
                       unsigned char &return_code,
                       NFCCardCount &card_count,
                       bytevector &out,
                       std::vector<NFCCard> &cards);

   int nfcFieldPollingExt(unsigned tech_bm,
                          unsigned timeout,
                          const bytevector &in,
                          unsigned char &return_code,
                          NFCCardCount &card_count,
                          bytevector &out,
                          std::vector<NFCCardExt> &cards);

   int nfcFieldCancelPolling();

   int nfcFieldActivation(unsigned modulation, const bytevector &info);

   int nfcFtechBaud(unsigned char baud);

   int nfcMifareAuthenticate(unsigned char blocknum,
                             unsigned char keytype,
                             const bytevector &key);

   int nfcMifareRead(unsigned char type,
                     unsigned char startblock,
                     unsigned char blockcount,
                     bytevector &out);

   int nfcMifareWrite(unsigned char type,
                     unsigned char startblock,
                     unsigned char blockcount,
                     const bytevector &in);

   int nfcMifareIncrement(unsigned char block, unsigned char value);

   int nfcMifareDecrement(unsigned char block, unsigned char value);

   int nfcMifareIncrementOnly(unsigned char block, unsigned char value);

   int nfcMifareDecrementOnly(unsigned char block, unsigned char value);

   int nfcMifareRestore(unsigned char block);

   int nfcMifareTransfer(unsigned char block);

   int nfcFelicaSendReceive(unsigned timeout, const bytevector &in, bytevector &out);


   int nfcFelicaPolling(unsigned poll_timeout,
                        unsigned recv_timeout,
                        unsigned short system_code,
                        unsigned char req_code,
                        unsigned char time_slot,
                        Array<8> &uid,
                        Array<8> &pad,
                        unsigned short &system_code_out);

   int nfcApduSendReceive(const bytevector &in, bytevector &out, unsigned short &cardsw1sw2);

   int nfcTxRx(unsigned card_type, const bytevector &in, bytevector &out);
 // group sdinfc


   int vasSetTerminalConfig(const std::string &config);

   int vasGetTerminalConfig(const std::string &appid, std::string &config);

   int vasGetConfig(const std::string &appid, std::string &config);

   int vasActivate(const std::string &appid, const std::string &config, std::string &data);

   int vasCancel();

   int vasUpdateConfig(const std::string &appid, const std::string &config);

   int vasCancelConfig(const std::string &appid);

   int vasPreload(const std::string &appid, const std::string &config);

   int vasCancelPreload(const std::string &appid);

   int vasDecrypt(const std::string &appid, const std::string &cipher, std::string &plain);

   int vasAction(const std::string &appid, const std::string &in, std::string &out);

 // group sdinfc

   void setLogCallbacks(void *data, LogCallback error, LogCallback debug);
 // group sdisetup


   void setCallbackData(void *d);

   void setStatusCallback(void (*cb)(void *data, int digits, std::string &display));

   void setControlCallback(int (*cb)(void *data, TLV &t));

   void setNotifyCallback(void (*cb)(void *data, TLV &t));

   void setNavigatorCallback(void (*cb)(void *data, int status));


   void setCardDetectCallback(void (*cb)(void *data, int retcode, unsigned char tec_out,
                                         EMVTxn &emv_out, bytevector &plugin_result));


   void setEMVCallback(void (*cb)(void *data, unsigned type, EMVTxn &in, EMVTxn &out));


   void setAsyncCardDetectEmvCallback(void (*cb)(void *data, unsigned type, EMVTxn &in));

   void setCardRemovalCallback(void (*cb)(void *data));

   void setDisconnectCallback(void (*cb)(void *data));
 // group sdicallback



   int pluginCmd(unsigned char plugin, unsigned char cmd, bytevector &in, bytevector &out);
 // group sdiplugin


};

} // namespace vfisdi

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

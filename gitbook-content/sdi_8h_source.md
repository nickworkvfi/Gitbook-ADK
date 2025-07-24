---
hidden: true
title: sdi.h
---

<a href="sdi_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++; -*-
 2 #ifndef SDI_H_20190919
 3 #define SDI_H_20190919
 4 
 7 #include <vector>
 8 #include <map>
 9 #include <string>
 10 #include <stdio.h>
 11 #include <stdarg.h>
 12 #if defined _WIN32
 13 // Need this for conflicting includes for pthread on Windows
 14 #define HAVE_STRUCT_TIMESPEC
 15 #endif
 16 #if __cplusplus>=201103
 17 # include <thread>
 18 # include <mutex>
 19 # include <condition_variable>
 20 #else
 21 # include <pthread.h>
 22 #endif
 23 #include <stdint.h>
 24 
 25 #include "tlv.h"
 26 #include "bcd.h"
 27 #include "sdi_emv.h"
 28 #include "sdi_enum.h"
 29 
 30 #if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
 31 # define DllSpec __declspec(dllexport)
 32 #elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
 33 # define DllSpec __attribute__((visibility ("default")))
 34 #else
 35 # define DllSpec
 36 #endif
 37 
 38 namespace vfiipc {
 39 class IPC;
 40 }
 41 
 42 namespace vfisdi {
 43 
 45 class DllSpec SDIClient {
 46 
 47  // disable copying
 48  SDIClient(const SDIClient &);
 49  void operator=(const SDIClient &);
 50 
 51  public:
 52 
 54  typedef std::vector<unsigned char> bytevector;
 55 
 57  enum ProtocolType {
 58  PROTOCOL_B,
 59  PROTOCOL_C
 60  };
 61 
 63  static bool isGenericError(int r) { return -1000<r; }
 65  static bool isSystemError(int r) { return ERR_SYSTEM_BASE-1000<r && r<=ERR_SYSTEM_BASE; }
 67  static bool isCardreaderError(int r) { return ERR_CARDREADER_BASE-1000<r && r<=ERR_CARDREADER_BASE; }
 69  static bool isDisplayError(int r) { return ERR_DISPLAY_BASE-1000<r && r<=ERR_DISPLAY_BASE; }
 71  static bool isPrinterError(int r) { return ERR_PRINTER_BASE-1000<r && r<=ERR_PRINTER_BASE; }
 73  static bool isPluginError(int r) { return ERR_PLUGIN_BASE-1000<r && r<=ERR_PLUGIN_BASE; }
 75  static bool isVCLError(int r) { return ERR_VCL_BASE-1000<r && r<=ERR_VCL_BASE; }
 77  static bool isEMVError(int r) { return ERR_EMV_BASE-1000<r && r<=ERR_EMV_BASE; }
 79  static bool isPEDError(int r) { return ERR_PED_BASE-1000<r && r<=ERR_PED_BASE; }
 81  static bool isNFCError(int r) { return ERR_NFC_BASE-1000<r && r<=ERR_NFC_BASE; }
 83  static bool isVASError(int r) { return ERR_VAS_BASE-1000<r && r<=ERR_VAS_BASE; }
 85  static bool isDataError(int r) { return ERR_DATA_BASE-1000<r && r<=ERR_DATA_BASE; }
 87  static bool isSECError(int r) { return ERR_SEC_BASE-1000<r && r<=ERR_SEC_BASE; }
 88 
 89 
 91  struct TouchButton {
 92  int x;
 93  int y;
 94  int w;
 95  int h;
 96  char c;
 97 #if __cplusplus>=201103
 98  TouchButton(int x=0, int y=0, int w=0, int h=0, char c=0)
 99  : x(x), y(y), w(w), h(h), c(c) {}
 100 #endif
 101  };
 102 
 104  struct CAPKeyInfo {
 105  Array<5> rid;
 106  unsigned char index;
 107  unsigned char keyLength;
 108  };
 109 
 115  typedef void (*LogCallback)(void *data, const char *file, int line, const char *format, va_list ap);
 116 
 117  protected:
 118  enum { STX=0x02, ETX=0x03 };
 119 
 120  struct PrivateData;
 121 
 122  PrivateData *p;
 123 
 124  void logError(const char *file, int line, const char *format, ...);
 125  void logDebug(const char *file, int line, const char *format, ...);
 126 
 127  // send/receive/close without locking
 128  int sendMessage_nolock(unsigned short cmd, unsigned short p1p2, const bytevector &data);
 129  int sendReply_nolock(unsigned short cmd, const bytevector &data);
 130  void close_nolock();
 131 
 132  static int getResult(unsigned short sw12);
 133  static int getResult(unsigned short sw12, const bytevector &reply, int error_offset);
 134  static int getResult(unsigned short sw12, TLV &t, int error_offset);
 135 
 136 #if __cplusplus<201103
 137  static void *reader_thread(void *data);
 138 #endif
 139  void reader_thread();
 140 
 141  // internal EMV functions
 142  int emvXExit(unsigned short cmd, unsigned options=0);
 143  int emvXSetTermData(unsigned short cmd, const EMVConf &emv);
 144  int emvXGetTermData(unsigned short cmd, EMVConf &emv);
 145  int emvXSetCAPKey(unsigned short cmd,
 146  const Array<5> &rid, unsigned char index,
 147  const bytevector &key, unsigned char exp,
 148  const bytevector &hash=bytevector(),
 149  const bytevector &revocationlist=bytevector());
 150  int emvXClearCAPKey(unsigned short cmd, const Array<5> &rid, unsigned char index);
 151  int emvXClearAllCAPKey(unsigned short cmd);
 152  int emvXGetCAPKeys(unsigned short cmd, std::vector<CAPKeyInfo> &keys);
 153  int emvXApplyConfig(unsigned short cmd, unsigned options);
 154  int emvXAddVirtualMapEntry(unsigned short cmd, int transaction, int currency, unsigned char vterminal);
 155  int emvXClearVirtualMap(unsigned short cmd);
 156  int emvXContinueOnline(EMVTxn &out,
 157  unsigned short cmd,
 158  bool onlineResult,
 159  const Array<2> &authResp,
 160  const EMVTxn &optional);
 161  int emvXEndTransaction(unsigned short cmd, unsigned options);
 162 
 163  int emvCtlsSetAppData(unsigned kernel_id, const bytevector &aid, const EMVConf &emv, unsigned char config_cmd);
 164  int emvCtlsGetAppData(unsigned kernel_id, const bytevector &aid, EMVConf &emv, unsigned char config_cmd);
 165 
 166 
 167 
 168  public:
 173  SDIClient();
 174 
 176  virtual ~SDIClient();
 177 
 179  void setProtocol(ProtocolType proto);
 180 
 181 
 182  void setTrace(void *data, void (*trace_cb)(void *data, const char *format, ...));
 183 
 189  template<typename R, typename T> void setTrace(T *data, R (*trace)(T *data, const char *format, ...)) {
 190  setTrace((void *)data,(void (*)(void *, const char *, ...))trace);
 191  }
 192 
 198  int connect(const char *host, unsigned short port=12000);
 199 
 205  int connect(vfiipc::IPC *link);
 206 
 210  bool connected() const;
 211 
 213  void close();
 214  // group sdisetup
 216 
 220 
 230  int sendMessage(unsigned short cmd, unsigned short p1p2, const bytevector &data);
 231 
 237  int sendMessage(unsigned short cmd, const bytevector &data) { return sendMessage(cmd,0,data); }
 238 
 244  int receiveMessage(unsigned short &sw1sw2, bytevector &data);
 245 
 251  int sendReply(unsigned short cmd, const bytevector &data);
 252 
 261  int sendReceiveMessage(unsigned short cmd, unsigned short p1p2, const bytevector &sdata, unsigned short &sw1sw2, bytevector &rdata);
 262 
 263  int sendReceiveMessage(unsigned short cmd, const bytevector &sdata, unsigned short &sw1sw2, bytevector &rdata) { return sendReceiveMessage(cmd,0,sdata,sw1sw2,rdata); }
 264 
 265  // group sdilowlevel
 267 
 271 
 275 
 283  int sysAbort();
 284 
 291  int sysGetConfig(const bytevector &req, bytevector &out);
 292 
 296  int sysGetCPUID(std::string &id);
 297 
 301  int sysGetSerialNumber(std::string &sn);
 302 
 306  int sysGetBootSoftwareID(std::string &id);
 307 
 311  int sysGetApplicationSoftwareID(std::string &id);
 312 
 316  int sysGetHardwareID(std::string &id);
 317 
 321  int sysGetIFMID(std::string &id);
 322 
 326  int sysGetEMVL2ID(std::string &id);
 327 
 333  int sysGetStatus(const bytevector &req, bytevector &out);
 334 
 344  int sysGetDateTime(unsigned short &year, unsigned char &month, unsigned char &day,
 345  unsigned char &hour, unsigned char &minute, unsigned char &second);
 346 
 350  int sysGetTamperStatus(Array<9> &tamper);
 351 
 357  int sysGetBatteryStatus(unsigned char &charge_level, unsigned char &charge_status);
 358 
 363  int sysGetBatteryVoltage(unsigned short &voltage);
 364 
 369  int sysGetLanguage(enum Language &language);
 370 
 375  int sysGetCVVDeactivation(unsigned char &cfg);
 376 
 381  int sysGetCardEntryMode(unsigned char &mode);
 382 
 392  int sysSetDateTime(unsigned short year, unsigned char month, unsigned char day,
 393  unsigned char hour, unsigned char minute, unsigned char second);
 394 
 399  int sysSetLanguage(enum Language language);
 400 
 405  int sysSetCVVDeactivation(unsigned char deactivate);
 406 
 411  int sysSetCardEntryMode(unsigned char mode);
 412 
 417  int sysSetDisplayBacklight(unsigned char backlight);
 418 
 423  int sysSetDisplayConstrast(unsigned char contrast);
 424 
 430  int sysGetKSN(KSNSelection which, bytevector &out);
 431 
 439  int sysAuthStep1(const Array<16> &hostRandom, Array<32> &serverData, bytevector &ksn);
 440 
 447  int sysAuthStep2(const Array<32> &hostData, Array<32> &serverData);
 448 
 453  int sysSetIdleText(const std::string &text);
 454 
 458  int sysClearIdleText();
 459 
 469  int sysUploadBegin(const std::string &filename,
 470  SYSUploadType type=SYS_UPLOAD_SOFTWARE_UPDATE,
 471  int dest=1);
 472 
 480  int sysUploadData(const void *packet,
 481  unsigned size,
 482  int packet_no,
 483  int dest=1);
 484 
 491  int sysUploadEnd(const bytevector *md5=0,
 492  const bytevector *mac=0,
 493  int dest=1);
 494 
 504  int sysUpload(const std::string &filename,
 505  const bytevector &data,
 506  SYSUploadType type=SYS_UPLOAD_SOFTWARE_UPDATE,
 507  const bytevector *md5=0,
 508  const bytevector *mac=0,
 509  int dest=1);
 510 
 514  int sysShutdown();
 515 
 519  int sysReboot();
 520 
 524  int sysSleep();
 525 
 529  int sysHibernate();
 530 
 534  int sysShowMACDesktop();
 535 
 542  int sysSetPropertyString(int property, const std::string &in, int dest=1);
 543 
 550  int sysSetPropertyInt(int property, int in, int dest=1);
 551 
 558  int sysGetPropertyString(int property, std::string &out, int dest=1);
 559 
 566  int sysGetPropertyInt(int property, int &out, int dest=1);
 567 
 572  int sysInstallSponsorCert(const bytevector &cert);
 573 
 575  struct ComponentVersion {
 576  std::string name;
 577  std::string version;
 578  };
 579 
 585  int sysGetSDIVersion(std::vector<ComponentVersion> &info, unsigned char device=1);
 586 
 587 
 592  int sysInstallUpdate(SYSUpdateType type);
 593 
 599  int sysInstallResult(std::string &result, unsigned char device=1);
 600 
 605  int sysEnableEPP(bool enable);
 606 
 610  int sysFactoryReset();
 611 
 617  int sysReadCert(const std::string &name, bytevector &cert);
 618 
 625  int sysSetCurrencyDisplay(enum Currency currency, enum CurrencyDisplay display);
 626  // group sdisystem
 628 
 632 
 646  int displayText(int template_id, const std::string &data_name, const std::string &data_value, int timeout=0, bool confirm=false, bool beep=false, int dest=1);
 647 
 661  int displayText(int template_id,
 662  unsigned dialog_opt,
 663  const std::map<std::string, std::string> &value,
 664  const std::map<std::string, std::string> &key_actions,
 665  const char *header_text=0,
 666  const char *enter_text=0,
 667  const char *clear_text=0,
 668  const char *cancel_text=0,
 669  int timeout=0,
 670  int dest=1);
 671 
 672 
 681  int displayText(const std::string &data_value, int timeout=0, bool confirm=false, bool beep=false, int dest=1)
 682  { return displayText(1,"text",data_value,timeout,confirm,beep,dest); }
 683 
 684 
 696  int displayInput(std::string &out, InputType type, Language language=LANGUAGE_NO_LANGUAGE,
 697  char maskchar=0, const std::string &altformat="",
 698  int timeout=0, bool beep=false, int dest=1);
 699 
 712  int displayInputTipWithAmount(std::string &out, Language language,
 713  const BCD<6> &amount, Currency currency,
 714  char maskchar=0, const std::string &altformat="",
 715  int timeout=0, bool beep=false, int dest=1);
 716 
 717 
 718 
 719 
 730  int displayMenu(const std::string &prompt, const std::vector<std::string> &entries,int timeout=0, bool beep=false, int dest=1);
 731 
 732 
 753  int displayMenu(unsigned dialog_opt,
 754  const std::string &prompt,
 755  const std::vector<std::string> &entries,
 756  int preselect,
 757  const std::map<std::string, std::string> &key_actions,
 758  const char *header_text=0,
 759  const char *enter_text=0,
 760  const char *cancel_text=0,
 761  const char *up_text=0,
 762  const char *down_text=0,
 763  int timeout=0,
 764  int dest=1);
 765 
 766 
 784  int displayCardRequest(unsigned char tec,
 785  unsigned char mode,
 786  const BCD<6> amount,
 787  int currency,
 788  int dest=1);
 789 
 800  int displayCardRequest(unsigned char tec, unsigned char mode, int dest=1)
 801  { return displayCardRequest(tec,mode,0,-1,dest); }
 802 
 821  int displayCardRequest(unsigned char tec,
 822  unsigned char mode,
 823  const BCD<6> amount,
 824  int currency,
 825  enum EMVTransaction txn,
 826  int dest=1);
 827 
 839  int displayCardRequest(unsigned char tec, unsigned char mode, enum EMVTransaction txn, int dest=1)
 840  { return displayCardRequest(tec,mode,0,-1,txn,dest); }
 841 
 842 
 844  enum IdleScreenMode {
 845  IDLE_HOTKEY_ADMIN=0,
 846  IDLE_NO_ADMIN=1,
 847  IDEL_SHOW_ADMIN=2,
 848  };
 849 
 855  int displayIdleScreen(int dest=1);
 856 
 864  int displayIdleScreenMode(enum IdleScreenMode mode, int dest=1);
 865 
 874  int displaySignatureCapture(std::string &outformat, bytevector &outdata,
 875  Language lang, unsigned short timeout=0, int dest=1);
 876 
 884  int displayLEDs(bool on);
 885 
 898  int displayDialog(const std::string &filename, std::map<std::string,std::string> &value, Language lang=LANGUAGE_NO_LANGUAGE, bool beep=false, int dest=1);
 899 
 913  int displayDialog(unsigned dialog_opt,
 914  const std::string &filename,
 915  std::map<std::string,std::string> &value,
 916  Language lang=LANGUAGE_NO_LANGUAGE,
 917  int dest=1);
 918 
 924  int displayGetAsyncResult(enum DialogAsyncStatus &status, int dest=1);
 925  // group sdidisplay
 927 
 931 
 940  int printSetPropertyString(int property, const std::string &in);
 941 
 947  int printSetPropertyInt(int property, int in);
 948 
 954  int printGetPropertyString(int property, std::string &out);
 955 
 961  int printGetPropertyInt(int property, int &out);
 962 
 968  int printHTML(const std::string &html, bool landscape=false);
 969 
 977  int printBitmap(int width, int height, const void *bitmap, unsigned size);
 978 
 985  int printBitmap(int width, int height, const bytevector &bitmap) {
 986  return bitmap.empty() ? OK : printBitmap(width,height,&bitmap[0],(unsigned int)bitmap.size());
 987  }
 988  // group sdiprinter
 990 
 994 
 998  struct PluginResult;
 999 
 1008  int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track2, int timeout_sec);
 1009 
 1019  int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track2, Array<3> &track_status, int timeout_sec);
 1020 
 1033  int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track2, Array<3> &track_status, bytevector &card_token, int timeout_sec, int removal_timeout_ms=-1);
 1034 
 1048  int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track2, Array<3> &track_status, bytevector &card_token,
 1049  std::vector<PluginResult> &plugin_result,
 1050  int timeout_sec, int removal_timeout_ms=-1);
 1051 
 1066  int msrRead(bytevector &pan, std::string &name, std::string &service, std::string &track1, std::string &track2, Array<3> &track_status, bytevector &card_token,
 1067  std::vector<PluginResult> &plugin_result,
 1068  int timeout_sec, int removal_timeout_ms=-1);
 1069 
 1075  int msrCardDataEntry(std::string &out, const std::vector<TouchButton> &btn=std::vector<TouchButton>());
 1076 
 1085  int msrCardDataEntry(std::string &out, bytevector &card_token, unsigned flags,
 1086  const std::string &format=std::string(),
 1087  const std::vector<TouchButton> &btn=std::vector<TouchButton>());
 1088 
 1098  int msrCardDataEntry(std::string &out, bytevector &card_token,
 1099  std::vector<PluginResult> &plugin_result,
 1100  unsigned flags,
 1101  const std::string &format=std::string(),
 1102  const std::vector<TouchButton> &btn=std::vector<TouchButton>());
 1103 
 1114  int msrCardDataEntry(std::string &out, bytevector &card_token,
 1115  std::vector<PluginResult> &plugin_result,
 1116  unsigned flags,
 1117  int timeout,
 1118  const std::string &format=std::string(),
 1119  const std::vector<TouchButton> &btn=std::vector<TouchButton>());
 1120 
 1125  int msrSetOptions(unsigned options);
 1126 
 1134  int msrLED(unsigned led1, unsigned led2, unsigned led3, unsigned timeout=0);
 1135 
 1147  int msrSetSensitivity(unsigned char sensitivity, int dest=1);
 1148  // group sdimsr
 1150 
 1154 
 1159  struct TECOptions {
 1160  unsigned short tec_start;
 1161  unsigned char ctOptions;
 1162  unsigned char ctlsOptions;
 1163  unsigned short msrAfterCTLSTimeout;
 1164  unsigned short msrAfterInsertTimeout;
 1165  unsigned short paymentTimeout;
 1166  unsigned nfcTechnology;
 1167  };
 1168 
 1190  int crdDetect(unsigned char tec,
 1191  const TECOptions &options,
 1192  bool allow_cancel,
 1193  unsigned timeout_ms,
 1194  unsigned char &tec_out,
 1195  EMVTxn &emv_out,
 1196  const bytevector &appid=bytevector(),
 1197  unsigned char syncCard=0,
 1198  unsigned char manual_mode=0,
 1199  const std::string &format="",
 1200  bytevector *plugin_result=0
 1201  );
 1202 
 1204  struct PluginResult {
 1205  short id;
 1206  unsigned short responseCode;
 1207  bytevector responseData;
 1208  };
 1209 
 1233  int crdDetect(unsigned char tec,
 1234  const TECOptions &options,
 1235  bool allow_cancel,
 1236  unsigned timeout_ms,
 1237  unsigned char &tec_out,
 1238  EMVTxn &emv_out,
 1239  std::vector<PluginResult> &plugin_result,
 1240  const bytevector &appid=bytevector(),
 1241  unsigned char syncCard=0,
 1242  unsigned char manual_mode=0,
 1243  const std::string &format="",
 1244  int removal_timeout_ms=-1
 1245  );
 1246 
 1251  int crdWaitForRemoval(unsigned short timeout=0);
 1252 
 1266  int crdStartDetect(unsigned char tec,
 1267  const TECOptions &options,
 1268  unsigned timeout,
 1269  bool use_cb=false,
 1270  const bytevector &appid=bytevector(),
 1271  unsigned char syncCard=0);
 1272 
 1288  int crdStartDetect(unsigned char tec,
 1289  const TECOptions &options,
 1290  unsigned timeout,
 1291  bool use_cb,
 1292  const bytevector &appid,
 1293  unsigned char syncCard,
 1294  int removal_timeout_ms=-1);
 1295 
 1302  int crdPollDetect(unsigned char &tec_out,
 1303  EMVTxn &emv_out,
 1304  bytevector *plugin_result=0);
 1305 
 1311  int crdStopDetect();
 1312 
 1324  int crdAddTechnology(unsigned char tec,
 1325  const TECOptions &options,
 1326  const bytevector &appid=bytevector(),
 1327  unsigned char syncCard=0);
 1328 
 1337  int crdRemoveTechnology(unsigned char tec);
 1338 
 1339 
 1344  int crdProvideCallbackResponse(EMVTxn &in);
 1345  // group sdicrd
 1347 
 1351 
 1366  int pedGetPIN(const std::vector<TouchButton> &btn=std::vector<TouchButton>(),
 1367  bool bypass=false,
 1368  int timeout=300,
 1369  int navigator_mode=0,
 1370  int min_digits=4,
 1371  int max_digits=12,
 1372  Language lang=LANGUAGE_NO_LANGUAGE);
 1373 
 1391  int pedGetPIN(unsigned pin_options,
 1392  const BCD<6> amount=0,
 1393  int currency=-1,
 1394  const char *applabel=0,
 1395  const char *headline=0,
 1396  unsigned pwd_char=0,
 1397  const std::vector<TouchButton> &btn=std::vector<TouchButton>(),
 1398  unsigned bypass=BYPASS_DISABLED,
 1399  int timeout=300,
 1400  int interchar_timeout=0,
 1401  int min_digits=4,
 1402  int max_digits=12,
 1403  Language lang=LANGUAGE_NO_LANGUAGE);
 1404 
 1413  int pedGetPIN(bool bypass=false,
 1414  int timeout=300,
 1415  int min_digits=4,
 1416  int max_digits=12,
 1417  Language lang=LANGUAGE_NO_LANGUAGE)
 1418  {
 1419  return pedGetPIN(std::vector<TouchButton>(),bypass,timeout,0,min_digits,max_digits,lang);
 1420  }
 1421 
 1426  int pedSetPINTimeout(unsigned short timeout_sec);
 1427 
 1430  void pedConfirmKey();
 1431 
 1432 
 1443  int pedStartPIN(const std::vector<TouchButton> &btn=std::vector<TouchButton>(),
 1444  int bypass_key=0,
 1445  int navigator_mode=0,
 1446  int minlen=4,
 1447  int maxlen=12,
 1448  bool clear_all=false,
 1449  bool auto_enter=false);
 1450 
 1451 
 1475  int pedPollPIN(PINStatus &pin, int &digits, int &status);
 1476 
 1479  int pedStopPIN();
 1480 
 1484  int pedSetPINInputParameter(bool clear_all);
 1485 
 1498  int pedSetPINInputParameter(unsigned pin_options,
 1499  const char *headline=0,
 1500  unsigned pwd_char=0,
 1501  unsigned bypass=BYPASS_DISABLED,
 1502  int interchar_timeout=0,
 1503  int min_digits=4,
 1504  int max_digits=12,
 1505  int dest=1);
 1506  // group sdiped
 1508 
 1512 
 1520  int secOpen(unsigned &handle, const std::string &hostname);
 1521 
 1525  int secClose(unsigned handle);
 1526 
 1534  int secEncrypt(unsigned handle, const bytevector &in, bytevector &out, bytevector *iv=0, bytevector *ksn=0);
 1535 
 1543  int secDecrypt(unsigned handle, const bytevector &in, bytevector &out, const bytevector *iv=0, bytevector *ksn=0);
 1544 
 1552  int secSign(unsigned handle, const bytevector &in, bytevector &out, bytevector *iv=0, bytevector *ksn=0);
 1553 
 1561  int secVerify(unsigned handle, const bytevector &in, const bytevector &sig, const bytevector *iv=0, bytevector *ksn=0);
 1562 
 1577  int secUpdateKey(unsigned handle, unsigned char keyType, const bytevector &key, bytevector *prop=0, const unsigned char *as2805=0, bytevector *key_kcv=0);
 1578 
 1594  int secUpdateKey(unsigned handle, unsigned char keyType, const bytevector &key, bytevector *prop, const unsigned char *as2805, bytevector *key_kcv, const bytevector *iv);
 1595 
 1601  int secSetKeySetID(unsigned handle, unsigned id, unsigned master_id=0);
 1602 
 1610  int secGetEncryptedPIN(unsigned handle,unsigned char fmt, bytevector &pinblock, bytevector &ksn, bool zero_pin=false);
 1611 
 1616  int secGetKeyInventory(unsigned handle, std::string &json);
 1617 
 1624  int secGetKeyData(unsigned handle, unsigned char keyType, bytevector &out, bool kek_flag=false);
 1625 
 1630  int secGetStatus(unsigned handle, std::string &json);
 1631 
 1636  int secGetStatus(const std::string &hostname, std::string &json);
 1637 
 1641  int secGetStatus(std::string &json) {
 1642  return secGetStatus("",json);
 1643  }
 1644 
 1648  int secGetVersions(std::string &version);
 1649  // group sdisec
 1651 
 1655 
 1673  int dataGetEncData(unsigned handle,
 1674  const bytevector &taglist,
 1675  const bytevector &appdata,
 1676  unsigned options,
 1677  bool useStoredTX,
 1678  bytevector &out,
 1679  bytevector *iv=0,
 1680  bytevector *ksn=0);
 1681 
 1704  int dataGetEncData(unsigned handle,
 1705  const bytevector &taglist,
 1706  const bytevector &appdata,
 1707  unsigned options,
 1708  bool useStoredTX,
 1709  bytevector &out,
 1710  bytevector *iv,
 1711  bytevector *ksn,
 1712  bool incrementKSN,
 1713  unsigned keysetID=0,
 1714  unsigned masterKeysetID=0);
 1715 
 1716 
 1718  struct PlaceHolder {
 1719  bytevector taglist;
 1720  bytevector appdata;
 1721  unsigned options;
 1722 #if __cplusplus >= 201103
 1723  PlaceHolder(const bytevector &taglist_, const bytevector &appdata_, unsigned options_)
 1724  : taglist(taglist_),
 1725  appdata(appdata_),
 1726  options(options_) {}
 1727  PlaceHolder() = default;
 1728 #endif
 1729  };
 1730 
 1745  int dataGetEncMsgData(unsigned handle,
 1746  const bytevector &msgtemplate,
 1747  const std::vector<PlaceHolder> &placeholder,
 1748  bool useStoredTX,
 1749  bytevector &out,
 1750  bytevector *iv=0,
 1751  bytevector *ksn=0);
 1773  int dataGetEncMsgData(unsigned handle,
 1774  const bytevector &msgtemplate,
 1775  const std::vector<PlaceHolder> &placeholder,
 1776  bool useStoredTX,
 1777  bytevector &out,
 1778  bytevector *iv,
 1779  bytevector *ksn,
 1780  bool incrementKSN,
 1781  unsigned keysetID=0,
 1782  unsigned masterKeysetID=0);
 1783 
 1793  int dataFetchTxnTags(const std::vector<unsigned> &taglist, bytevector &out, unsigned char mode=0, bool cleartext_date=false);
 1794 
 1805  int dataFetchTxnTags(const std::vector<unsigned> &taglist, bytevector &out,
 1806  unsigned char mode, bool cleartext_date,
 1807  unsigned options);
 1808 
 1811  int dataClearDataStore();
 1812 
 1822  int dataGetMsgSignature(unsigned handle,
 1823  const bytevector &msgtemplate,
 1824  const std::vector<PlaceHolder> &placeholder,
 1825  bool useStoredTX,
 1826  bytevector &out,
 1827  bytevector *iv=0,
 1828  bytevector *ksn=0);
 1829 
 1846  int dataGetMsgSignature(unsigned handle,
 1847  const bytevector &msgtemplate,
 1848  const std::vector<PlaceHolder> &placeholder,
 1849  bool useStoredTX,
 1850  bytevector &out,
 1851  bytevector *iv,
 1852  bytevector *ksn,
 1853  bool incrementKSN,
 1854  unsigned keysetID=0,
 1855  unsigned masterKeysetID=0);
 1856 
 1858  struct Matching {
 1859  std::string record;
 1860  unsigned char expirationCheck;
 1861  unsigned char luhnCheck;
 1862  unsigned char activationCheck;
 1863  };
 1864 
 1871  int dataPerformValidationChecks(const Array<3> &date, Matching &match, std::vector<Matching> *additional=0);
 1872 
 1880  int dataPerformValidationChecks(const Array<3> &date, const bytevector &iin, Matching &match, std::vector<Matching> *additional=0);
 1881 
 1885  int dataGetValidationInfo(std::string &out);
 1886 
 1892  int dataGetEncTxnData(const std::vector<unsigned> &taglist, bytevector &encrypted);
 1893 
 1894 
 1898  int dataSetEncTxnData(const bytevector &encrypted);
 1899 
 1902  int dataEndEncTxnData();
 1903 
 1907  int dataGetEmvInfo(EMVConf &emv);
 1908  // group sdidata
 1910 
 1914 
 1923  int vclRegistartSRED(bytevector &track1, bytevector &track2, bytevector &track3);
 1924 
 1928  int vclStatusRequest(bytevector &status);
 1929 
 1935  int vclAdvanceDDK(bytevector &track1, bytevector &track2, bytevector &track3);
 1936 
 1943  int vclRequestEParms(bytevector &eparms);
 1944 
 1953  int vclGetDiagnostic(unsigned format, unsigned page, std::string &diag);
 1954 
 1958  int vclGetKeyStatus(unsigned char &status);
 1959 
 1965  int vclOverrideMessageQuery(bytevector &track1, bytevector &track2, bytevector &track3);
 1966 
 1970  int vclKSNRequest(std::string &ksn);
 1971 
 1975  int vclKmailinRequest();
 1976  // group sdivcl
 1978 
 1982 
 1992  int emvCtInit(int aidCount=0, unsigned options=0);
 1993 
 1998  int emvCtExit(unsigned options=0);
 1999 
 2004  int emvCtSetTermData(const EMVConf &emv);
 2005 
 2010  int emvCtGetTermData(EMVConf &emv);
 2011 
 2017  int emvCtSetAppData(const bytevector &aid, const EMVConf &emv);
 2018 
 2023  int emvCtClearAppData(const bytevector &aid);
 2024 
 2028  int emvCtClearAllAppData();
 2029 
 2036  int emvCtSetTempAppData(const EMVConf &emv);
 2037 
 2043  int emvCtGetAppData(const bytevector &aid, EMVConf &emv);
 2044 
 2050  int emvCtGetAppData(bool first, EMVConf &emv);
 2051 
 2052 
 2062  int emvCtSetCAPKey(const Array<5> &rid, unsigned char index,
 2063  const bytevector &key, unsigned char exp,
 2064  const bytevector &hash=bytevector(),
 2065  const bytevector &revocationlist=bytevector());
 2066 
 2072  int emvCtClearCAPKey(const Array<5> &rid, unsigned char index);
 2073 
 2077  int emvCtClearAllCAPKey();
 2078 
 2083  int emvCtGetCAPKeys(std::vector<CAPKeyInfo> &keys);
 2084 
 2089  int emvCtApplyConfig(unsigned options=0);
 2090 
 2101  int emvCtAddVirtualMapEntry(int transaction, int currency, unsigned char vterminal);
 2102 
 2106  int emvCtClearVirtualMap();
 2107 
 2114  int emvCtSmartDetect(int timeout_ms);
 2115 
 2120  int emvCtActivate(bytevector *atr=0);
 2121 
 2127  int emvCtActivate(unsigned options, bytevector *atr=0);
 2128 
 2132  int emvCtDeactivate();
 2133 
 2138  int emvCtDeactivate(unsigned options);
 2139 
 2150  int emvCtStartTransaction(EMVTxn &out,
 2151  EMVTransaction type,
 2152  const BCD<6> amount,
 2153  const Array<3> &date,
 2154  const Array<3> &time,
 2155  const BCD<4> &counter,
 2156  const EMVTxn &optional=EMVTxn());
 2157 
 2163  int emvCtContinueOffline(EMVTxn &out, const EMVTxn &optional=EMVTxn());
 2164 
 2165 
 2173  int emvCtContinueOnline(EMVTxn &out,
 2174  bool onlineResult,
 2175  const Array<2> &authResp=Array<2>(),
 2176  const EMVTxn &optional=EMVTxn());
 2177 
 2187  int emvCtUpdateTxnTags(unsigned options, const EMVTxn &config);
 2188 
 2193  int emvCtEndTransaction(unsigned options=0);
 2194 
 2196  struct CTCandidateData {
 2197  unsigned char api;
 2198  unsigned char codeTableIndex;
 2199  unsigned char iin[4];
 2200  std::string iban;
 2201  std::string bic;
 2202  unsigned char country2[2];
 2203  unsigned char country3[3];
 2204  unsigned char aidLen;
 2205  bytevector asf;
 2206  bytevector selData;
 2207  };
 2208 
 2209 
 2215  int emvCtGetCandidateData(std::vector<CTCandidateData> &out);
 2216 
 2221  int emvCtSendOfflinePIN(unsigned short &chipresult);
 2222 
 2223  struct CTCandidate {
 2224  bytevector aid;
 2225  unsigned char api;
 2226  std::string text;
 2227  std::string text2;
 2228  unsigned char codeTableIndex;
 2231  unsigned char languagePref;
 2232  };
 2233 
 2234 
 2236  struct AdditionalCardTag {
 2237  unsigned tag;
 2238  EMVType type;
 2239  unsigned char minLen;
 2240  unsigned char maxLen;
 2241 #if __cplusplus >= 201103
 2242  AdditionalCardTag(unsigned tag_,
 2243  EMVType type_,
 2244  unsigned char minLen_,
 2245  unsigned char maxLen_)
 2246  : tag(tag_), type(type_), minLen(minLen_), maxLen(maxLen_) {}
 2247  AdditionalCardTag() = default;
 2248 #endif
 2249  };
 2250 
 2260  int emvCtCheckSupportedAID(const bytevector &aid,
 2261  unsigned char asi,
 2262  const std::string &defaultLabel,
 2263  std::vector<CTCandidate> &candlist,
 2264  unsigned short *sw12=0,
 2265  const std::vector<AdditionalCardTag> *adtCrdTags=0);
 2266 
 2271  int emvCtLED(bool ledState);
 2272 
 2279  int emvCtSendReceive(unsigned options, const bytevector &in, bytevector &out);
 2280  // group sdiemvct
 2282 
 2284 
 2294  int emvCtlsInit(int aidCount=0, unsigned options=0);
 2295 
 2300  int emvCtlsExit(unsigned options=0);
 2301 
 2306  int emvCtlsSetTermData(const EMVConf &emv);
 2307 
 2312  int emvCtlsGetTermData(EMVConf &emv);
 2313 
 2314 
 2321  int emvCtlsSetAppData(unsigned kernel_id, const bytevector &aid, const EMVConf &emv);
 2322 
 2328  int emvCtlsClearAppData(unsigned kernel_id, const bytevector &aid);
 2329 
 2333  int emvCtlsClearAllAppData();
 2334 
 2341  int emvCtlsSetTempAppData(unsigned kernel_id, const bytevector &aid, const EMVConf &emv);
 2342 
 2343 
 2350  int emvCtlsGetAppData(unsigned kernel_id, const bytevector &aid, EMVConf &emv);
 2351 
 2357  int emvCtlsGetAppData(bool first, EMVConf &emv);
 2358 
 2359 
 2369  int emvCtlsSetCAPKey(const Array<5> &rid, unsigned char index,
 2370  const bytevector &key, unsigned char exp,
 2371  const bytevector &hash=bytevector(),
 2372  const bytevector &revocationlist=bytevector());
 2373 
 2379  int emvCtlsClearCAPKey(const Array<5> &rid, unsigned char index);
 2380 
 2384  int emvCtlsClearAllCAPKey();
 2385 
 2390  int emvCtlsGetCAPKeys(std::vector<CAPKeyInfo> &keys);
 2391 
 2400  int emvCtlsApplyConfig(unsigned options=7);
 2401 
 2410  int emvCtlsAddVirtualMapEntry(int transaction, int currency, unsigned char vterminal);
 2411 
 2415  int emvCtlsClearVirtualMap();
 2416 
 2427  int emvCtlsSetupTransaction(EMVTxn &out,
 2428  EMVTransaction type,
 2429  const BCD<6> amount,
 2430  const Array<3> &date,
 2431  const Array<3> &time,
 2432  const BCD<4> &counter,
 2433  const EMVTxn &optional=EMVTxn());
 2434 
 2440  int emvCtlsContinueOffline(EMVTxn &out, unsigned options=0);
 2441 
 2449  int emvCtlsContinueOnline(EMVTxn &out,
 2450  bool onlineResult,
 2451  const Array<2> &authResp=Array<2>(),
 2452  const EMVTxn &optional=EMVTxn());
 2453 
 2458  int emvCtlsEndTransaction(unsigned options=0);
 2459 
 2461  struct CTLSCandidateData {
 2462  unsigned char api;
 2463  unsigned char iin[4];
 2464  std::string iban;
 2465  std::string bic;
 2466  unsigned char country2[2];
 2467  unsigned char country3[3];
 2468  unsigned char aidLen;
 2469  bytevector selData;
 2470  bytevector discData;
 2471  };
 2472 
 2473 
 2479  int emvCtlsGetCandidateData(std::vector<CTLSCandidateData> &out);
 2480 
 2484  int emvCtlsBreak();
 2485 
 2486 
 2492  int emvCtlsSmartReset(unsigned char readeropt=0, bytevector *atr=0);
 2493 
 2498  int emvCtlsSmartPowerOff(unsigned char options);
 2499 
 2503  int emvCtlsCardRemoval(unsigned timeout_ms);
 2504 
 2505 
 2512  int emvCtlsTransparentCommand(const bytevector &in, bytevector &out);
 2513 
 2519  int emvCtlsTransparentSend(const bytevector &in);
 2520 
 2526  int emvCtlsTransparentReceive(bytevector &out);
 2527 
 2532  int emvCtlsLEDMode(unsigned char mode);
 2533 
 2540  int emvCtlsLED(int led, unsigned char state);
 2541 
 2547  int emvCtlsSendReceive(const bytevector &in, bytevector &out);
 2548  // group sdiemvctls
 2550 
 2554 
 2562  int nfcInit(unsigned char conn_type);
 2563 
 2568  int nfcPing(bytevector &raw);
 2569 
 2574  int nfcGetVersion(std::string &version);
 2575 
 2579  int nfcConfigInit();
 2580 
 2584  int nfcOpen();
 2585 
 2589  int nfcClose();
 2590 
 2594  int nfcFieldOn();
 2595 
 2599  int nfcFieldOff();
 2600 
 2602  struct NFCCardCount {
 2603  unsigned char totalCount;
 2604  unsigned char cardACount;
 2605  unsigned char cardBCount;
 2606  unsigned char cardFCount;
 2607  };
 2608 
 2610  struct NFCCard {
 2611  unsigned char type;
 2612  bytevector info;
 2613  };
 2614 
 2616  struct NFCCardExt {
 2617  unsigned char type;
 2618  unsigned char SAK;
 2619  unsigned short ATQ;
 2620  unsigned typeFull;
 2621  bytevector info;
 2622  bytevector RFU;
 2623  };
 2624 
 2635  int nfcFieldPolling(unsigned tech_bm,
 2636  unsigned timeout,
 2637  const bytevector &in,
 2638  unsigned char &return_code,
 2639  NFCCardCount &card_count,
 2640  bytevector &out,
 2641  std::vector<NFCCard> &cards);
 2642 
 2653  int nfcFieldPollingExt(unsigned tech_bm,
 2654  unsigned timeout,
 2655  const bytevector &in,
 2656  unsigned char &return_code,
 2657  NFCCardCount &card_count,
 2658  bytevector &out,
 2659  std::vector<NFCCardExt> &cards);
 2660 
 2664  int nfcFieldCancelPolling();
 2665 
 2671  int nfcFieldActivation(unsigned modulation, const bytevector &info);
 2672 
 2677  int nfcFtechBaud(unsigned char baud);
 2678 
 2685  int nfcMifareAuthenticate(unsigned char blocknum,
 2686  unsigned char keytype,
 2687  const bytevector &key);
 2688 
 2696  int nfcMifareRead(unsigned char type,
 2697  unsigned char startblock,
 2698  unsigned char blockcount,
 2699  bytevector &out);
 2700 
 2708  int nfcMifareWrite(unsigned char type,
 2709  unsigned char startblock,
 2710  unsigned char blockcount,
 2711  const bytevector &in);
 2712 
 2718  int nfcMifareIncrement(unsigned char block, unsigned char value);
 2719 
 2725  int nfcMifareDecrement(unsigned char block, unsigned char value);
 2726 
 2732  int nfcMifareIncrementOnly(unsigned char block, unsigned char value);
 2733 
 2739  int nfcMifareDecrementOnly(unsigned char block, unsigned char value);
 2740 
 2745  int nfcMifareRestore(unsigned char block);
 2746 
 2751  int nfcMifareTransfer(unsigned char block);
 2752 
 2759  int nfcFelicaSendReceive(unsigned timeout, const bytevector &in, bytevector &out);
 2760 
 2761 
 2773  int nfcFelicaPolling(unsigned poll_timeout,
 2774  unsigned recv_timeout,
 2775  unsigned short system_code,
 2776  unsigned char req_code,
 2777  unsigned char time_slot,
 2778  Array<8> &uid,
 2779  Array<8> &pad,
 2780  unsigned short &system_code_out);
 2781 
 2788  int nfcApduSendReceive(const bytevector &in, bytevector &out, unsigned short &cardsw1sw2);
 2789 
 2796  int nfcTxRx(unsigned card_type, const bytevector &in, bytevector &out);
 2797  // group sdinfc
 2799 
 2803 
 2811  int vasSetTerminalConfig(const std::string &config);
 2812 
 2818  int vasGetTerminalConfig(const std::string &appid, std::string &config);
 2819 
 2825  int vasGetConfig(const std::string &appid, std::string &config);
 2826 
 2833  int vasActivate(const std::string &appid, const std::string &config, std::string &data);
 2834 
 2838  int vasCancel();
 2839 
 2845  int vasUpdateConfig(const std::string &appid, const std::string &config);
 2846 
 2851  int vasCancelConfig(const std::string &appid);
 2852 
 2858  int vasPreload(const std::string &appid, const std::string &config);
 2859 
 2864  int vasCancelPreload(const std::string &appid);
 2865 
 2872  int vasDecrypt(const std::string &appid, const std::string &cipher, std::string &plain);
 2873 
 2880  int vasAction(const std::string &appid, const std::string &in, std::string &out);
 2881 
 2882  // group sdinfc
 2887 
 2896  void setLogCallbacks(void *data, LogCallback error, LogCallback debug);
 2897  // group sdisetup
 2899 
 2903 
 2911  void setCallbackData(void *d);
 2912 
 2923  void setStatusCallback(void (*cb)(void *data, int digits, std::string &display));
 2924 
 2942  void setControlCallback(int (*cb)(void *data, TLV &t));
 2943 
 2955  void setNotifyCallback(void (*cb)(void *data, TLV &t));
 2956 
 2974  void setNavigatorCallback(void (*cb)(void *data, int status));
 2975 
 2976 
 2989  void setCardDetectCallback(void (*cb)(void *data, int retcode, unsigned char tec_out,
 2990  EMVTxn &emv_out, bytevector &plugin_result));
 2991 
 2992 
 3004  void setEMVCallback(void (*cb)(void *data, unsigned type, EMVTxn &in, EMVTxn &out));
 3005 
 3006 
 3017  void setAsyncCardDetectEmvCallback(void (*cb)(void *data, unsigned type, EMVTxn &in));
 3018 
 3025  void setCardRemovalCallback(void (*cb)(void *data));
 3026 
 3032  void setDisconnectCallback(void (*cb)(void *data));
 3033  // group sdicallback
 3035 
 3036 
 3040 
 3051  int pluginCmd(unsigned char plugin, unsigned char cmd, bytevector &in, bytevector &out);
 3052  // group sdiplugin
 3054 
 3055 
 3056 };
 3057 
 3058 } // namespace vfisdi
 3059 
 3060 #undef DllSpec
 3061 
 3062 #endif
```

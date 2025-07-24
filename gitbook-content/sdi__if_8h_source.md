---
hidden: true
title: sdi_if.h
---

<a href="sdi__if_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: ADK Secure Data Interface (SDI)
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: Client (structure) interface - non-EMV part
 6 ****************************************************************************/
 7 #ifndef CLIENT_SDI_IF_H_
 8 #define CLIENT_SDI_IF_H_
 9 
 10 #ifndef DOXYGEN
 11 #ifdef __cplusplus
 12 #endif
 13 #include <vector>
 14 #include <string>
 15 #include <stdint.h>
 16 #include <emv/EMV_Common_Interface.h> // for EMV_ADK_INFO
 17 #include <sysinfo/sysinfo.h> // for property enumerations
 18 #include <html/prt.h> // for printer property enumerations
 19 
 20 namespace libsdi {
 21 
 25 enum SDI_SW12
 26 {
 27  SDI_SW12_NONE = 0,
 28  SDI_SW12_SUCCESS = 0x9000,
 29 
 30  SDI_SW12_TAG_ERROR = 0x6200,
 31  SDI_SW12_TAG_LENGTH_ERROR = 0x6300,
 32  SDI_SW12_EXEC_ERROR = 0x6400,
 33  SDI_SW12_CANCELED_BY_USER = 0x6405,
 34  SDI_SW12_BUSY = 0x640A,
 35  SDI_SW12_TIMEOUT_PIN_ENTRY = 0x640C,
 36  SDI_SW12_TIMEOUT_NO_MSR_DATA = 0x64F6,
 37  SDI_SW12_TIMEOUT_CARD_REMOVAL = 0x64F7,
 38  SDI_SW12_INTERCHAR_PIN_ENTRY = 0x64F8,
 39  SDI_SW12_COMMAND_NOT_ALLOWED = 0x64F9,
 40  SDI_SW12_MAIN_CONNECTION_USED = 0x64FA,
 41  SDI_SW12_INVALID_FILE_CONTENT = 0x64FB,
 42  SDI_SW12_FILE_ACCESS_ERROR = 0x64FC,
 43  SDI_SW12_LOGIC_ERROR = 0x64FD,
 44  SDI_SW12_SDI_PARAMETER_ERROR = 0x64FE,
 45  SDI_SW12_LUHN_CHECK_FAILED = 0x64FF,
 46  SDI_SW12_EXECUTION_ABORTED = 0x6500,
 47  SDI_SW12_EXECUTION_TIMEOUT = 0x6600,
 48  SDI_SW12_MESSAGE_LENGTH_ERROR = 0x6700,
 49 
 50  SDI_SW12_NO_SDI_PLUGIN_AVAILABLE = 0x6800,
 51  SDI_SW12_UNKNOWN_PLUGIN_ID = 0x6801,
 52  SDI_SW12_UNKNOWN_PLUGING_ID = 0x6801,
 53  SDI_SW12_INVALID_PLUGIN_RESPONSE = 0x6802,
 54 
 55  SDI_SW12_EPP_CONNECTION_ERROR = 0x6900,
 56 
 57  SDI_SW12_UNKNOWN_INS_BYTE = 0x6D00,
 58  SDI_SW12_UNKNOWN_CLA_BYTE = 0x6E00,
 59 
 60  SDI_SW12_CMAC_ERROR = 0x6FB0,
 61  SDI_SW12_CMAC_LENGTH_ERROR = 0x6FB1,
 62  SDI_SW12_CMAC_MISSING_ERROR = 0x6FB2,
 63  SDI_SW12_ENCRYPTION_ERROR = 0x6FB4,
 64  SDI_SW12_ENCRYPTION_LENGTH_ERROR = 0x6FB5,
 65  SDI_SW12_ENCRYPTION_MISSING_ERROR = 0x6FB6,
 66  SDI_SW12_DECRYPTION_ERROR = 0x6FB8,
 67  SDI_SW12_DECRYPTION_LENGTH_ERROR = 0x6FB9,
 68  SDI_SW12_DECRYPTION_MISSING_ERROR = 0x6FBA,
 69 
 70  SDI_SW12_EXCESSIVE_PIN_REQUESTS = 0x6FC0,
 71  SDI_SW12_LOW_BATTERY = 0x6FD0,
 72  SDI_SW12_NO_DUKPT_KEYS_LOADED = 0x6FE0,
 73  SDI_SW12_UNIT_TAMPERED = 0x6FF0,
 74  SDI_SW12_RECOVERY_MODE = 0x6FF1,
 75 
 76  SDI_SW12_PIN_BYPASSED = 0x9070,
 77  SDI_SW12_NO_MACTCH_FOR_CARD_VALIDATION = 0x9071,
 78  SDI_SW12_SMART_CARD_REMOVED = 0x9401,
 79  SDI_SW12_SMART_CARD_ERROR_TRM = 0x9402,
 80  SDI_SW12_SMART_CARD_ERROR = 0x9403,
 81  SDI_SW12_TWO_CARDS = 0x9404,
 82  SDI_SW12_SMART_CARD_ERR_INIT = 0x9405,
 83  SDI_SW12_SMART_CARD_ERR_PARAM = 0x9406,
 84  SDI_SW12_EMV_TLV_ERROR = 0x94F3, // error In TLV data object (only in relation with EMV commands)
 85 
 86  // There are from previous header version and kept for backward compatibility
 87  SDI_SW12_ERROR = 0x6400,
 88  SDI_SW12_TIMEOUT = 0x6600,
 89  SDI_SW12_NOT_ALLOWED = 0x64FD,
 90  SDI_SW12_PARAMETER_ERROR = 0x90E6
 91 };
 92 
 100 enum SDICLIENT_ERROR
 101 {
 102  SDICLIENT_ERROR_NONE = 0,
 103  SDICLIENT_ERROR_COMMUNICATION = -1,
 104  SDICLIENT_ERROR_CONCURRENT_USE = -2,
 105  SDICLIENT_ERROR_CONNECT = -3,
 106  SDICLIENT_ERROR_OVERFLOW = -4,
 107  SDICLIENT_ERROR_PARAM = -5,
 108  SDICLIENT_ERROR_OTHER = -6,
 109  SDICLIENT_ERROR_NO_RECEIVE = -7,
 110  SDICLIENT_ERROR_NOT_SUPPORTED = -10,
 112  SDICLIENT_ERROR_NOT_ALLOWED = -11
 113 };
 114 
 115 #define MSR_CLIENT_ERROR_OFFSET 100 
 116 
 117 #define VALIDATION_CHECK_OPTION_RETURN_ALL_MATCHING_RANGES 0x01 //Return all matching card ranges. per default only the best match is returned
 118 
 122 enum SDICLIENT_ERROR getNfcClientError();
 123 
 127 enum SDI_SW12 getNfcSW12();
 128 
 129 struct MatchingRecord
 130 {
 131  std::string json;
 132  unsigned char expirycheck_result;
 133  unsigned char luhncheck_result;
 134  unsigned char activationcheck_result;
 135  MatchingRecord(const std::string &_json): json(_json), expirycheck_result(0xFF), luhncheck_result(0xFF), activationcheck_result(0xFF){};
 136 };
 137 
 139 enum SYSUploadType {
 140  SYS_UPLOAD_SOFTWARE_UPDATE,
 141  SYS_UPLOAD_CONFIG_WHITELIST,
 142  SYS_UPLOAD_CONFIG_SENSITIVE_TAGS,
 143  SYS_UPLOAD_CONFIG_CARD_RANGES,
 144  SYS_UPLOAD_INSTALL_CP_PACKAGE = 11,
 145  SYS_UPLOAD_EMV_CONFIGURATION
 146 };
 147 
 148 
 152 class SdiBase
 153 {
 154 protected:
 155  unsigned short sw12;
 156  int additionalResultValue;
 157  SDICLIENT_ERROR clientErr;
 158  void setSdiSw12(enum SDI_SW12 s) {sw12=s;}
 159 
 166  void setClientError(int libsdiprotocol_result);
 167 
 168 public:
 169  SdiBase() : sw12(0), additionalResultValue(0), clientErr(SDICLIENT_ERROR_NONE){}
 170  enum SDI_SW12 getSdiSw12();
 171 
 176  int getAdditionalResultValue(){return additionalResultValue;}
 177 
 184  SDICLIENT_ERROR getClientError(){return clientErr;}
 185 
 196  enum SDI_SW12 receiveSW12();
 197 
 201  void clear()
 202  {
 203  sw12 = SDI_SW12_NONE;
 204  additionalResultValue = 0;
 205  clientErr = SDICLIENT_ERROR_NONE;
 206  };
 207 
 211  void importResults(const SdiBase& intermediate)
 212  {
 213  sw12 = intermediate.sw12;
 214  additionalResultValue = intermediate.additionalResultValue;
 215  clientErr = intermediate.clientErr;
 216  }
 217 
 218  struct PluginResult
 219  {
 220  int32_t pluginId;
 221  int32_t responseCode;
 224  std::vector<unsigned char> responseData;
 226  };
 227 
 228 private:
 229  // make SdiBase non-copyable because some subclasses hold pointers and should not be copied
 230  SdiBase(const SdiBase&);
 231  SdiBase& operator=(const SdiBase&);
 232  // since C++11 we have to avoid the move, too
 233 #if __cplusplus >= 201103L
 234  SdiBase(const SdiBase&&);
 235  SdiBase& operator=(SdiBase&&);
 236 #endif
 237 };
 238 
 239 
 240 
 266 class SdiCmd: public SdiBase
 267 {
 268 protected:
 269  void* dataIn;
 270  void* dataOut;
 271 
 272 public:
 273  SdiCmd();
 274  virtual ~SdiCmd();
 275 
 293  enum SDI_SW12 sendReceive(unsigned char cla, unsigned char ins,
 294  unsigned char p1 = 0, unsigned char p2 = 0,
 295  unsigned maxResponseSize = 2048);
 296 
 309  int send(unsigned char cla, unsigned char ins,
 310  unsigned char p1 = 0, unsigned char p2 = 0);
 311 
 320  enum SDI_SW12 receive(unsigned maxResponseSize = 2048);
 321 
 322  // generic setters modify #dataIn before command execution
 335  void set(const char* path, int value, unsigned fixedLength = 0);
 336 
 349  void set(const char* path, uint32_t value, unsigned fixedLength = 0);
 350 
 361  void set(const char* path, const unsigned char* data, unsigned dataLen);
 362 
 372  inline void set(const char* path, unsigned char byteValue)
 373  {
 374  set(path, &byteValue, 1);
 375  }
 376 
 386  void set(const char* path, const std::vector<unsigned char>& data);
 387 
 397  void set(const char* path, const std::string& value);
 398 
 407  void setCommandDestination(bool epp, bool force = false);
 408 
 412  virtual void clear();
 413 
 420  virtual void clear(const char* path);
 421 
 425  virtual void clearResults();
 426 
 434  void importResults(const SdiCmd& intermediate);
 435 
 443  void importResults(const unsigned char* sw12, const unsigned char* tlvData, unsigned tlvSize);
 444 
 445  // generic getter to read from dataOut after command execution
 453  bool get(const char* path, int& value);
 454 
 462  bool get(const char* path, uint32_t& value);
 463 
 472  int get(const char* path, unsigned char* buffer, unsigned bufferSize);
 473 
 481  inline bool get(const char* path, unsigned char& value)
 482  {
 483  return get(path, &value, 1) == 1;
 484  }
 485 
 493  bool get(const char* path, std::vector<unsigned char>& buffer);
 494 
 502  bool get(const char* path, std::string& value);
 503 
 510  std::string getString(const char* path);
 511 };
 512 
 513 class SDI: public SdiBase
 514 {
 515 public:
 516 
 526  bool getDateTime(unsigned char* buffer);
 527 
 537  bool setDateTime(const unsigned char* dateTime);
 538 
 546  unsigned char getLanguage();
 547 
 555  bool setLanguage(unsigned char languageId);
 556 
 569  unsigned char getCardDataEntryDeactivation();
 570 
 583  bool setCardDataEntryDeactivation(unsigned char value);
 584 
 594  unsigned char getCardDataEntryMode();
 595 
 605  bool setCardDataEntryMode(unsigned char value);
 606 
 614  bool setIdleText(std::string text, bool epp = true);
 615 
 624  bool showMacDesktop(bool epp = true);
 625 
 636  int getProperty(enum vfisysinfo::SYSPropertyInt p, bool epp = false); // 20 1A 00 00
 637 
 648  enum vfisysinfo::sysError getProperty(enum vfisysinfo::SYSPropertyInt p, int& value, bool epp = false); // 20 1A 00 00
 649 
 660  enum vfisysinfo::sysError setProperty(enum vfisysinfo::SYSPropertyInt p, int value, bool epp = false); // 20 19 00 00
 661 
 672  std::string getProperty(enum vfisysinfo::SYSPropertyString p, bool epp = false); // 20 1A 00 01
 673 
 684  enum vfisysinfo::sysError getProperty(enum vfisysinfo::SYSPropertyString p, std::string& value, bool epp = false);
 685 
 696  enum vfisysinfo::sysError setProperty(enum vfisysinfo::SYSPropertyString p, const std::string& value, bool epp = false); // 20 19 00 01
 697 
 704  std::string getVersionInfo(bool epp = false);
 705 
 712  bool checkForUpdate(unsigned char updateKind);
 713 
 720  bool waitCardRemoval(unsigned seconds);
 721 
 730  int sendWaitCardRemoval(unsigned seconds);
 731 
 732  // Data Interface (without crypto handle)
 733 
 737  void clearDataStore();
 738 
 749  bool vclRegistartSRED(std::vector<unsigned char>& track1,
 750  std::vector<unsigned char>& track2,
 751  std::vector<unsigned char>& track3);
 752 
 760  bool vclStatusRequest(std::vector<unsigned char>& vclStatus);
 761 
 772  bool vclAdvanceDDK(std::vector<unsigned char>& track1,
 773  std::vector<unsigned char>& track2,
 774  std::vector<unsigned char>& track3);
 775 
 787  bool vclRequestEParms(std::vector <unsigned char>& eParms);
 788 
 799  std::string vclGetDiagnosticData(unsigned char format = 1,
 800  unsigned char pageNumber = 0);
 801 
 808  int vclGetKeyDerivationMode();
 809 
 820  bool vclOverrideMessageQuery(std::vector<unsigned char>& track1,
 821  std::vector<unsigned char>& track2,
 822  std::vector<unsigned char>& track3);
 823 
 832  bool vclKsnRequest(std::string& ksn);
 833 
 841  bool vclKmailinRequest();
 842 
 853  libsdi::SDI_SW12 pluginCommand(const unsigned char plugin, const unsigned char cmd,
 854  const std::vector<unsigned char>& data,
 855  std::vector<unsigned char>& response);
 856 
 866  bool setManualPAN(const std::vector<unsigned char>& pan);
 867 
 877  bool setManualPAN(const std::string& pan);
 878 
 892  libsdi::SDI_SW12 performValidationChecks(std::vector<MatchingRecord>& records,
 893  const std::vector<unsigned char>& currentDate,
 894  const unsigned char options = 0,
 895  const std::vector<unsigned char> IIN = std::vector<unsigned char>());
 896 
 904  libsdi::SDI_SW12 getValidationInfo(std::string& info);
 905 
 915  libsdi::SDI_SW12 sysUploadStart(const std::string& filename,
 916  SYSUploadType type,
 917  bool epp = false);
 918 
 927  libsdi::SDI_SW12 sysUploadTransfer(const std::vector<unsigned char>& packet,
 928  unsigned packet_no,
 929  bool epp = false);
 930 
 942  libsdi::SDI_SW12 sysUploadFinalize(const std::vector<unsigned char>* md5 = NULL,
 943  const std::vector<unsigned char>* mac = NULL,
 944  bool epp = false);
 945 
 952  bool sysShutdown(bool epp = false);
 953 
 960  bool sysReboot(bool epp = false);
 961 
 969  bool sysSleep(bool epp = false);
 970 
 978  bool sysHybernate(bool epp = false);
 979 
 985  bool installSponsorCert(const std::vector<unsigned char>& cert);
 986 
 996  bool getLastInstallError(std::string& json, std::string& bundle, std::string& package, bool epp = false);
 997 
 998 
 1003  void externalButton(void);
 1004 
 1017  bool enableEpp(int& status);
 1018 
 1031  bool disableEpp(int& status);
 1032 
 1037  bool factoryReset();
 1038 
 1045  bool readCertificate(const std::string& name, std::vector<unsigned char>& certificate);
 1046 
 1053  bool setUseCurrencyAbbreviation(const unsigned char* currency, bool useAbbreviation);
 1054 
 1061  bool setUseCurrencyAbbreviation(unsigned currency, bool useAbbreviation);
 1062 
 1072  bool msrSwitchLeds(int led1, int led2, int led3, int duration);
 1073 
 1080  bool msrSetSensitivty(unsigned char level, bool epp = false);
 1081 
 1082 
 1092  enum vfiprt::PrtError setPrinterProperty(enum vfiprt::PrtPropertyInt p, int value); // 25 00 00 00
 1093 
 1103  enum vfiprt::PrtError setPrinterProperty(enum vfiprt::PrtPropertyString p, const std::string& value); // 25 00 00 01
 1104 
 1114  enum vfiprt::PrtError getPrinterProperty(enum vfiprt::PrtPropertyInt p, int& value); // 25 01 00 00
 1115 
 1125  enum vfiprt::PrtError getPrinterProperty(enum vfiprt::PrtPropertyString p, std::string& value); // 25 01 00 01
 1126 
 1134  enum vfiprt::PrtError printHtml(const std::string& html, bool landscape = false);
 1135 
 1144  enum vfiprt::PrtError printBitmap(const int width, const int height, const std::vector<unsigned char>& data);
 1145 
 1146 private:
 1147  bool sysPower(unsigned char p2, bool epp);
 1148  bool enableEpp(int& status, unsigned char p2);
 1149 
 1150 }; // class SDI
 1151 
 1152 
 1171 class CardDetection: public SdiCmd
 1172 {
 1173 public:
 1174  const static unsigned char SDI_TEC_CHIP = 1; // ISO 7816
 1175  const static unsigned char SDI_TEC_MAGN = 2; // ISO 7810
 1176  const static unsigned char SDI_TEC_CTLS = 4; // ISO 14443
 1177  const static unsigned char SDI_TEC_MANU = 8; // ITU-T E.161
 1178 
 1183  enum DetectionMode {
 1184  DETECTION_MODE_BLOCKING,
 1185  DETECTION_MODE_POLLING,
 1186  DETECTION_MODE_CALLBACK
 1187  };
 1188 
 1194  void setDetectionMode(const enum DetectionMode mode);
 1195 
 1201  void setTecStartOptions(const std::vector<unsigned char>& opts); // see cts_StartSelection
 1202 
 1208  void setTecConfig(const std::vector<unsigned char>& opts); // see cts_SetOptions
 1209 
 1215  void setCancelButton(bool enable);
 1216 
 1222  void setCardEntryValueDeativation(unsigned char b);
 1223 
 1229  void setAlternativeInputFormat(const char* f);
 1230 
 1241  void setCardRemovalTimeout(unsigned timeout_ms);
 1242 
 1249  void setCallback(void (*cb)(unsigned char technology, void* context), void* ctx);
 1250 
 1251 
 1258  void cardDetectedCallback(unsigned char *dataIn, unsigned short sizeIn);
 1259 
 1260 
 1291  int startSelection(unsigned char supportedTechnologies, unsigned seconds);
 1292 
 1302  enum libsdi::SDI_SW12 stopSelection();
 1303 
 1341  unsigned char receiveTechnology();
 1342 
 1351  bool cardReadAtEpp();
 1352 
 1361  unsigned char pollTechnology();
 1362 
 1370  enum libsdi::SDI_SW12 addTechnology(unsigned char technology, const std::vector<unsigned char>& opts);
 1371 
 1378  enum libsdi::SDI_SW12 removeTechnology(unsigned char technology);
 1379 
 1384  std::string getPan();
 1385 
 1390  std::string getTrack2();
 1391 
 1397  int getTrack2Bin(std::vector<unsigned char>& data);
 1398 
 1403  std::string getCardholderName();
 1404 
 1409  std::string getServiceCode();
 1410 
 1415  std::string getTrack1();
 1416 
 1425  int getPluginResponseData(std::vector<unsigned char>& data);
 1426 
 1440  int getPluginResponseData(unsigned index,
 1441  int32_t& pluginId,
 1442  int32_t& pluginResponseCode,
 1443  std::vector<unsigned char>& data);
 1444 
 1451  bool getPluginResponseData(std::vector<PluginResult>& results);
 1452 
 1459  std::string getString(unsigned CTS_DATA_TAG);
 1460 
 1476  unsigned char getValue(unsigned CTS_DATA_TAG, unsigned char defaultValue);
 1477 
 1485  unsigned char getValue(unsigned CTS_DATA_TAG, int n, unsigned char defaultValue);
 1486 
 1492  int getData(std::vector<unsigned char>& data);
 1493 
 1501  int getData(unsigned CTS_DATA_TAG, std::vector<unsigned char>& data);
 1502 
 1512  int getData(unsigned CTS_DATA_TAG, int n, std::vector<unsigned char>& data);
 1513 
 1522  int getTecselData(std::vector<unsigned char>& data);
 1523 
 1538  int startMsrRead(unsigned timeout_sec);
 1539 
 1551  int msrSetOptions(const std::vector<unsigned char>& opts);
 1552 
 1561  int msrGetTrackStatus(int track);
 1562 
 1569  int msrGetCardSpecificToken(std::vector<unsigned char>& token);
 1570 
 1571  CardDetection();
 1572  ~CardDetection();
 1573 
 1581  virtual void clear();
 1582 
 1583 private:
 1584  void (*callback)(unsigned char technology, void* context);
 1585  void* context;
 1586  enum DetectionMode mode;
 1587 };
 1588 
 1592 class PED: public SdiCmd
 1593 {
 1594 public:
 1598  enum NavigatorMode
 1599  {
 1600  NAVIGATOR_MODE_OFF,
 1601  NAVIGATOR_MODE_DOUBLE_TAB,
 1602  NAVIGATOR_MODE_TACTILE_BUTTON
 1603  };
 1604 
 1613  void setTimeout(unsigned seconds);
 1614 
 1622  bool setDefaultTimeout(unsigned seconds);
 1623 
 1639  void setTouchCoordinates(const unsigned char* array, unsigned size);
 1640 
 1645  void setNavigatorMode(enum NavigatorMode mode);
 1646 
 1657  void setPinDigitCountMinMax(unsigned char min, unsigned char max);
 1658 
 1665  void setLanguage(unsigned char lang);
 1666 
 1673  void setAmount(const unsigned char* amount);
 1674 
 1681  void setCurrency(const unsigned char* currency);
 1682 
 1690  void setAppLabel(const std::string& appLabel);
 1691 
 1692 
 1719  int startPinInput();
 1720 
 1731  int startPinInput(bool enablePinBypass);
 1732 
 1752  bool startPinEntry(unsigned pinBypassKey = 0);
 1753 
 1760  bool pollPinEntry(std::vector<unsigned char>& status);
 1761 
 1767  bool stopPinEntry();
 1768 
 1777  bool setPinInputClearKeyMode(bool clearAllDigits);
 1778 
 1785  void setClearKeyMode(bool clearAllDigits);
 1786 
 1793  void setPinBypassKeyAndMode(unsigned char value);
 1794 
 1801  void setAutoConfirmation(bool enable);
 1802 
 1809  void setDialogOptions(uint32_t options);
 1810 
 1817  void setIntercharTimeout(uint32_t millis);
 1818 
 1827  void setHeaderLabel(const std::string& label);
 1828 
 1835  void setEchoChar(uint32_t unicode);
 1836 
 1855  bool sendPinInputParameters(bool epp = true);
 1856 
 1863  enum SDI_SW12 receiveGetPinResult();
 1864 
 1873  bool getPinBypassKey(unsigned char& value);
 1874 };
 1875 
 1884 class SdiCrypt: public SdiBase
 1885 {
 1886 public:
 1887  // SDI Crypto Interface
 1888  SdiCrypt();
 1889  ~SdiCrypt();
 1890 
 1899  bool open(const char* hostName);
 1900 
 1907  bool close();
 1908 
 1914  bool isOpen() const;
 1915 
 1922  uint32_t getCryptoHandle();
 1923 
 1935  bool encrypt(const std::vector<unsigned char>& data,
 1936  std::vector<unsigned char>& encrypted);
 1937 
 1949  bool decrypt(const std::vector<unsigned char>& encrypted,
 1950  std::vector<unsigned char>& decrypted);
 1951 
 1963  bool sign(const std::vector<unsigned char>& data,
 1964  std::vector<unsigned char>& signature);
 1965 
 1977  bool verify(const std::vector<unsigned char>& data,
 1978  const std::vector<unsigned char>& signature);
 1979 
 1994  bool updateKey(unsigned char keyType, const std::vector<unsigned char>& keyData,
 1995  std::vector<unsigned char>* proprietaryData = NULL,
 1996  const unsigned char AS2805 = 0,
 1997  std::vector<unsigned char>* KCV = NULL);
 1998 
 2010  bool setKeySetId(uint32_t ksid, uint32_t mksid = 0, bool asAttribute = false);
 2011 
 2020  bool getEncryptedPin(unsigned char pinBlockFormat,
 2021  std::vector<unsigned char>& pinBlock,
 2022  bool requestZeroPinBlock = false);
 2023 
 2029  std::string getKeyInventory();
 2030 
 2039  bool getKeyData(unsigned char keyType, std::vector<unsigned char>& keyData, unsigned char kekFlag = 0);
 2040 
 2047  std::string getStatus();
 2048 
 2058  std::string getStatus(std::string hostName);
 2059 
 2060 
 2067  static std::string getVersions(int& additionalResult);
 2068 
 2079  void setInitialVector(const std::vector<unsigned char>& iv)
 2080  {
 2081  initialVector = iv;
 2082  }
 2083 
 2089  void getInitialVector(std::vector<unsigned char>& iv) const
 2090  {
 2091  iv = initialVector;
 2092  }
 2093 
 2094 
 2100  void getKeySerialNumber(std::vector<unsigned char>& ksn) const
 2101  {
 2102  ksn = keySerialNumber;
 2103  }
 2104 
 2108  struct Placeholder
 2109  {
 2110  std::vector<unsigned char> tagList;
 2111  std::vector<unsigned char> applicationData;
 2112  std::vector<unsigned char> dataOptions;
 2113  };
 2114 
 2129  bool getEncData(const Placeholder& descriptor,
 2130  std::vector<unsigned char>& encrypted,
 2131  bool useStoredData = false,
 2132  bool incrementKSN = false);
 2133 
 2149  bool getEncMsgData(const std::vector<unsigned char>& messageTemplate,
 2150  const std::vector<Placeholder>& placeholder,
 2151  std::vector<unsigned char>& encrypted,
 2152  bool useStoredData = false,
 2153  bool incrementKSN = false);
 2154 
 2170  bool getMsgSignature(const std::vector<unsigned char>& messageTemplate,
 2171  const std::vector<Placeholder>& placeholder,
 2172  std::vector<unsigned char>& signature,
 2173  bool useStoredData = false,
 2174  bool incrementKSN = false);
 2175 
 2183  bool getEncTrxData(const std::vector<unsigned long> tags, std::vector<unsigned char>& data);
 2184 
 2191  bool setEncTrxData(const std::vector<unsigned char> data);
 2192 
 2198  bool endEncTrxData();
 2199 
 2200 private:
 2201  unsigned char cryptoHandle[4];
 2202  std::vector<unsigned char> initialVector;
 2203  std::vector<unsigned char> keySerialNumber;
 2204  uint32_t keySetId;
 2205  uint32_t masterKeySetId;
 2206 };
 2207 
 2217 class ManualEntry: public SdiCmd
 2218 {
 2219 public:
 2220  ManualEntry();
 2221  ~ManualEntry();
 2222 
 2229  void setLanguage(unsigned char language);
 2230 
 2231 
 2238  int setTimeout(unsigned seconds);
 2239 
 2253  int setCvvEntryDeactivation(unsigned char cvvEntry);
 2254 
 2255 
 2264  int setCardDataEntryMode(unsigned char mode);
 2265 
 2266 
 2273  int setCvvInputString(const std::string &inputString);
 2274 
 2290  int setTouchCoordinates(const unsigned char* array, unsigned size);
 2291 
 2301  int setMimimumDigits(unsigned char minimumDigits);
 2302 
 2311  int setDoubleConfirmationMode(unsigned char mode);
 2312 
 2333  int start();
 2334 
 2351  int receiveResult(std::string& obfuscatedPAN, std::vector<unsigned char>& token);
 2352 
 2361  int getPluginResponseData(std::vector<unsigned char>& data);
 2362 
 2376  int getPluginResponseData(unsigned index,
 2377  int32_t& pluginId,
 2378  int32_t& pluginResponseCode,
 2379  std::vector<unsigned char>& data);
 2380 
 2387  bool getPluginResponseData(std::vector<PluginResult>& results);
 2388 };
 2389 
 2435 class Dialog: public SdiCmd
 2436 {
 2437 public:
 2438 
 2445 
 2451  const static int DIALOG_SUCCESS = 0;
 2452 
 2458  const static int DIALOG_CANCEL_PRESSED = -1;
 2459 
 2465  const static int DIALOG_TIMEOUT = -3;
 2466 
 2473  const static int DIALOG_SYS_ABORT = -8;
 2474 
 2480  const static int DIALOG_CLIENT_ERROR = -14;
 2481 
 2487  const static int DIALOG_SDI_SW12 = -15;
 2488 
 2493  const static int DIALOG_NO_ASYNC_DIALOG = 1;
 2494 
 2499  const static int DIALOG_IN_PROGRESS = 2;
 2500 
 2502 
 2509  const static unsigned DLG_DisplayOnly = 0x00000000;
 2510  const static unsigned DLG_CancelKey = 0x00000002;
 2511  const static unsigned DLG_ClearKey = 0x00000004;
 2512  const static unsigned DLG_EnterKey = 0x00000008;
 2513  const static unsigned DLG_NoLEDs = 0x00000010;
 2514  const static unsigned DLG_CtlsLogo = 0x00000020;
 2515  const static unsigned DLG_QuestionLogo = 0x00000040;
 2516  const static unsigned DLG_WarningLogo = 0x00000080;
 2517  const static unsigned DLG_ErrorLogo = 0x00000100;
 2518  const static unsigned DLG_SuccessLogo = 0x00000200;
 2519  const static unsigned DLG_WaitLogo = 0x00000400;
 2520  const static unsigned DLG_Async = 0x00000800;
 2521  const static unsigned DLG_StoreAsyncResult = 0x00001000;
 2522  const static unsigned DLG_HideSoftKeys = 0x00002000;
 2523  const static unsigned DLG_TextAlignLeft = 0x00004000;
 2524  const static unsigned DLG_TextAlignRight = 0x00008000;
 2525  const static unsigned DLG_TextAlignTop = 0x00010000;
 2526  const static unsigned DLG_TextAlignButton = 0x00020000;
 2527  const static unsigned DLG_NoHeader = 0x00040000;
 2528  const static unsigned DLG_ClearOnReturn = 0x00100000;
 2529  const static unsigned DLG_AbortOnCardRemove = 0x00200000;
 2530  const static unsigned DLG_IgnoreExtAbort = 0x00400000;
 2532 
 2539  const static unsigned MENU_NoOpts = 0x00000000;
 2540  const static unsigned MENU_NoLEDs = 0x00000002;
 2541  const static unsigned MENU_ClearOnReturn = 0x00000004;
 2542  const static unsigned MENU_AbortOnCardRemove= 0x00000008;
 2543  const static unsigned MENU_IgnoreExtAbort = 0x00000010;
 2544  const static unsigned MENU_NoHeader = 0x00000020;
 2546 
 2550  enum REQUEST_CARD_MODE
 2551  {
 2552  REQUEST_CARD_STANDARD = 0,
 2553  REQUEST_CARD_FALLBACK = 1,
 2554  REQUEST_CARD_RETRY = 2
 2555  };
 2556 
 2565  bool clearScreen(bool epp = true);
 2566 
 2590  int display(const std::string& text, bool epp = true);
 2591 
 2615  int secureInput(bool epp = true);
 2616 
 2648  int menu(bool epp = true);
 2649 
 2667  int requestCard(unsigned char technology,
 2668  enum REQUEST_CARD_MODE mode = REQUEST_CARD_STANDARD,
 2669  bool epp = true);
 2670 
 2677  bool idleScreen(bool epp = true);
 2678 
 2694  int captureSignature(std::vector<unsigned char>& signature, std::string& format,
 2695  bool epp = true);
 2696 
 2703  static void showLedArea(bool show);
 2704 
 2726  int htmlDialog(const std::string& fname, bool epp = true);
 2727 
 2739  int getAsyncResult(bool epp = true);
 2740 
 2744  static void abort();
 2745 
 2754  void setTemplate(unsigned char id);
 2755 
 2764  void setInputTemplate(unsigned char id);
 2765 
 2775  void setLanguage(unsigned char language);
 2776 
 2788  void addData(const std::string& name, const std::string& value);
 2789 
 2800  void setTimeout(int seconds);
 2801 
 2814  void setOptions(unsigned options);
 2815 
 2825  void setEnterKeyLabel(const std::string& label);
 2826 
 2836  void setClearKeyLabel(const std::string& label);
 2837 
 2847  void setCancelKeyLabel(const std::string& label);
 2848 
 2858  void setUpKeyLabel(const std::string& label);
 2859 
 2868  void setDownKeyLabel(const std::string& label);
 2869 
 2878  void setHeader(const std::string& text);
 2879 
 2888  void setBeep(bool active = true);
 2889 
 2899  void addAction(const std::string& key, const std::string& action);
 2900 
 2909  void setMaskingCharacter(char c);
 2910 
 2919  void setAlternativeInputFormat(const char* f);
 2920 
 2929  void setAmount(const unsigned char* amount);
 2930 
 2941  void setCurrency(const unsigned char* currency);
 2942 
 2953  void setTransactionType(unsigned char txnType);
 2954 
 2963  void setMenuText(const std::string& text);
 2964 
 2973  void addMenuItem(const std::string& item);
 2974 
 2985  void setPreSelected(unsigned char itemNumber);
 2986 
 3001  void setAdminMenu(unsigned char adminMenu);
 3002 
 3011  unsigned char getSelected();
 3012 
 3022  std::string get(const std::string& name);
 3023 
 3036  std::vector<std::string> getInputFieldNames();
 3037 
 3038 private:
 3039  int startDialog(unsigned char instruction, bool epp);
 3040 };
 3041 
 3042 } // namespace sdi
 3043 
 3044 #ifndef DOXYGEN
 3045 #endif // C++
 3046 #endif
 3047 #endif /* CLIENT_SDI_IF_H_ */
```

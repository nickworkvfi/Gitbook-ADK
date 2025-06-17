---
title: sdiclient/client/sdi_if.h

---

# sdiclient/client/sdi_if.h



## Namespaces

| Name           |
| -------------- |
| **[libsdi](namespacelibsdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[libsdi::MatchingRecord](structlibsdi_1_1_matching_record.md)**  |
| class | **[libsdi::SdiBase](classlibsdi_1_1_sdi_base.md)**  |
| struct | **[libsdi::SdiBase::PluginResult](structlibsdi_1_1_sdi_base_1_1_plugin_result.md)**  |
| class | **[libsdi::SdiCmd](classlibsdi_1_1_sdi_cmd.md)** <br>Composition for TLV based SDI commands.  |
| class | **[libsdi::SDI](classlibsdi_1_1_s_d_i.md)**  |
| class | **[libsdi::CardDetection](classlibsdi_1_1_card_detection.md)** <br>Interface for SDI Card Detection Interface, command class 23.  |
| class | **[libsdi::PED](classlibsdi_1_1_p_e_d.md)**  |
| class | **[libsdi::SdiCrypt](classlibsdi_1_1_sdi_crypt.md)**  |
| struct | **[libsdi::SdiCrypt::Placeholder](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md)**  |
| class | **[libsdi::ManualEntry](classlibsdi_1_1_manual_entry.md)** <br>Interface for SDI command [MSR Card Data Entry] (21-02)  |
| class | **[libsdi::Dialog](classlibsdi_1_1_dialog.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MSR_CLIENT_ERROR_OFFSET](sdi__if_8h.md#define-msr-client-error-offset)** <br>if a client error happens, msr functions will return (enum SDICLIENT_ERROR - MSR_CLIENT_ERROR_OFFSET)  |
|  | **[VALIDATION_CHECK_OPTION_RETURN_ALL_MATCHING_RANGES](sdi__if_8h.md#define-validation-check-option-return-all-matching-ranges)**  |




## Macros Documentation

### define MSR_CLIENT_ERROR_OFFSET

```cpp
#define MSR_CLIENT_ERROR_OFFSET 100
```

if a client error happens, msr functions will return (enum SDICLIENT_ERROR - MSR_CLIENT_ERROR_OFFSET) 

### define VALIDATION_CHECK_OPTION_RETURN_ALL_MATCHING_RANGES

```cpp
#define VALIDATION_CHECK_OPTION_RETURN_ALL_MATCHING_RANGES 0x01
```


## Source code

```cpp
/****************************************************************************
*  Product:     ADK Secure Data Interface (SDI)
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     Client (structure) interface - non-EMV part
****************************************************************************/
#ifndef CLIENT_SDI_IF_H_
#define CLIENT_SDI_IF_H_

#ifndef DOXYGEN
#ifdef __cplusplus
#endif
#include <vector>
#include <string>
#include <stdint.h>
#include <emv/EMV_Common_Interface.h> // for EMV_ADK_INFO
#include <sysinfo/sysinfo.h> // for property enumerations
#include <html/prt.h> // for printer property enumerations

namespace libsdi {

enum SDI_SW12
{
  SDI_SW12_NONE = 0, 
  SDI_SW12_SUCCESS = 0x9000, 

  SDI_SW12_TAG_ERROR = 0x6200, 
  SDI_SW12_TAG_LENGTH_ERROR = 0x6300, 
  SDI_SW12_EXEC_ERROR = 0x6400, 
  SDI_SW12_CANCELED_BY_USER = 0x6405, 
  SDI_SW12_BUSY = 0x640A, 
  SDI_SW12_TIMEOUT_PIN_ENTRY = 0x640C, 
  SDI_SW12_TIMEOUT_NO_MSR_DATA = 0x64F6, 
  SDI_SW12_TIMEOUT_CARD_REMOVAL = 0x64F7, 
  SDI_SW12_INTERCHAR_PIN_ENTRY = 0x64F8, 
  SDI_SW12_COMMAND_NOT_ALLOWED = 0x64F9, 
  SDI_SW12_MAIN_CONNECTION_USED = 0x64FA, 
  SDI_SW12_INVALID_FILE_CONTENT = 0x64FB, 
  SDI_SW12_FILE_ACCESS_ERROR = 0x64FC, 
  SDI_SW12_LOGIC_ERROR = 0x64FD, 
  SDI_SW12_SDI_PARAMETER_ERROR = 0x64FE, 
  SDI_SW12_LUHN_CHECK_FAILED = 0x64FF, 
  SDI_SW12_EXECUTION_ABORTED = 0x6500, 
  SDI_SW12_EXECUTION_TIMEOUT = 0x6600, 
  SDI_SW12_MESSAGE_LENGTH_ERROR = 0x6700, 

  SDI_SW12_NO_SDI_PLUGIN_AVAILABLE = 0x6800, 
  SDI_SW12_UNKNOWN_PLUGIN_ID = 0x6801, 
  SDI_SW12_UNKNOWN_PLUGING_ID = 0x6801, 
  SDI_SW12_INVALID_PLUGIN_RESPONSE = 0x6802, 

  SDI_SW12_EPP_CONNECTION_ERROR = 0x6900, 

  SDI_SW12_UNKNOWN_INS_BYTE = 0x6D00, 
  SDI_SW12_UNKNOWN_CLA_BYTE = 0x6E00, 

  SDI_SW12_CMAC_ERROR = 0x6FB0, 
  SDI_SW12_CMAC_LENGTH_ERROR = 0x6FB1, 
  SDI_SW12_CMAC_MISSING_ERROR = 0x6FB2, 
  SDI_SW12_ENCRYPTION_ERROR = 0x6FB4, 
  SDI_SW12_ENCRYPTION_LENGTH_ERROR = 0x6FB5, 
  SDI_SW12_ENCRYPTION_MISSING_ERROR = 0x6FB6, 
  SDI_SW12_DECRYPTION_ERROR = 0x6FB8, 
  SDI_SW12_DECRYPTION_LENGTH_ERROR = 0x6FB9, 
  SDI_SW12_DECRYPTION_MISSING_ERROR = 0x6FBA, 

  SDI_SW12_EXCESSIVE_PIN_REQUESTS = 0x6FC0, 
  SDI_SW12_LOW_BATTERY = 0x6FD0, 
  SDI_SW12_NO_DUKPT_KEYS_LOADED = 0x6FE0, 
  SDI_SW12_UNIT_TAMPERED = 0x6FF0, 
  SDI_SW12_RECOVERY_MODE = 0x6FF1, 

  SDI_SW12_PIN_BYPASSED = 0x9070, 
  SDI_SW12_NO_MACTCH_FOR_CARD_VALIDATION = 0x9071, 
  SDI_SW12_SMART_CARD_REMOVED = 0x9401, 
  SDI_SW12_SMART_CARD_ERROR_TRM = 0x9402, 
  SDI_SW12_SMART_CARD_ERROR = 0x9403, 
  SDI_SW12_TWO_CARDS = 0x9404, 
  SDI_SW12_SMART_CARD_ERR_INIT = 0x9405, 
  SDI_SW12_SMART_CARD_ERR_PARAM = 0x9406, 
  SDI_SW12_EMV_TLV_ERROR = 0x94F3, // error In TLV data object (only in relation with EMV commands)

  // There are from previous header version and kept for backward compatibility
  SDI_SW12_ERROR = 0x6400, 
  SDI_SW12_TIMEOUT = 0x6600, 
  SDI_SW12_NOT_ALLOWED = 0x64FD, 
  SDI_SW12_PARAMETER_ERROR = 0x90E6 
};

enum SDICLIENT_ERROR
{
  SDICLIENT_ERROR_NONE = 0,           
  SDICLIENT_ERROR_COMMUNICATION = -1, 
  SDICLIENT_ERROR_CONCURRENT_USE = -2,
  SDICLIENT_ERROR_CONNECT = -3,       
  SDICLIENT_ERROR_OVERFLOW = -4,      
  SDICLIENT_ERROR_PARAM = -5,         
  SDICLIENT_ERROR_OTHER = -6,         
  SDICLIENT_ERROR_NO_RECEIVE = -7,    
  SDICLIENT_ERROR_NOT_SUPPORTED = -10,
  SDICLIENT_ERROR_NOT_ALLOWED = -11   
};

#define MSR_CLIENT_ERROR_OFFSET   100 

#define VALIDATION_CHECK_OPTION_RETURN_ALL_MATCHING_RANGES       0x01  //Return all matching card ranges. per default only the best match is returned

enum SDICLIENT_ERROR getNfcClientError();

enum SDI_SW12 getNfcSW12();

struct MatchingRecord
{
  std::string json;
  unsigned char expirycheck_result;
  unsigned char luhncheck_result;
  unsigned char activationcheck_result;
  MatchingRecord(const std::string &_json): json(_json), expirycheck_result(0xFF), luhncheck_result(0xFF), activationcheck_result(0xFF){};
};

enum SYSUploadType {
  SYS_UPLOAD_SOFTWARE_UPDATE,        
  SYS_UPLOAD_CONFIG_WHITELIST,       
  SYS_UPLOAD_CONFIG_SENSITIVE_TAGS,  
  SYS_UPLOAD_CONFIG_CARD_RANGES,     
  SYS_UPLOAD_INSTALL_CP_PACKAGE = 11,
  SYS_UPLOAD_EMV_CONFIGURATION       
};


class SdiBase
{
protected:
  unsigned short sw12;
  int additionalResultValue;
  SDICLIENT_ERROR clientErr;
  void setSdiSw12(enum SDI_SW12 s) {sw12=s;}

  void setClientError(int libsdiprotocol_result);

public:
  SdiBase() : sw12(0), additionalResultValue(0), clientErr(SDICLIENT_ERROR_NONE){}
  enum SDI_SW12 getSdiSw12();

  int getAdditionalResultValue(){return additionalResultValue;}

  SDICLIENT_ERROR getClientError(){return clientErr;}

  enum SDI_SW12 receiveSW12();

  void clear()
  {
    sw12 = SDI_SW12_NONE;
    additionalResultValue = 0;
    clientErr = SDICLIENT_ERROR_NONE;
  };

  void importResults(const SdiBase& intermediate)
  {
    sw12 = intermediate.sw12;
    additionalResultValue = intermediate.additionalResultValue;
    clientErr = intermediate.clientErr;
  }

  struct PluginResult
  {
    int32_t pluginId; 
    int32_t responseCode; 
    std::vector<unsigned char> responseData; 
  };

private:
  // make SdiBase non-copyable because some subclasses hold pointers and should not be copied
  SdiBase(const SdiBase&);
  SdiBase& operator=(const SdiBase&);
  // since C++11 we have to avoid the move, too
#if __cplusplus >= 201103L
  SdiBase(const SdiBase&&);
  SdiBase& operator=(SdiBase&&);
#endif
};



class SdiCmd: public SdiBase
{
protected:
  void* dataIn; 
  void* dataOut; 

public:
  SdiCmd();
  virtual ~SdiCmd();

  enum SDI_SW12 sendReceive(unsigned char cla, unsigned char ins,
          unsigned char p1 = 0, unsigned char p2 = 0,
          unsigned maxResponseSize = 2048);

  int send(unsigned char cla, unsigned char ins,
          unsigned char p1 = 0, unsigned char p2 = 0);

  enum SDI_SW12 receive(unsigned maxResponseSize = 2048);

  // generic setters modify #dataIn before command execution
  void set(const char* path, int value, unsigned fixedLength = 0);

  void set(const char* path, uint32_t value, unsigned fixedLength = 0);

  void set(const char* path, const unsigned char* data, unsigned dataLen);

  inline void set(const char* path, unsigned char byteValue)
  {
    set(path, &byteValue, 1);
  }

  void set(const char* path, const std::vector<unsigned char>& data);

  void set(const char* path, const std::string& value);

  void setCommandDestination(bool epp, bool force = false);

  virtual void clear();

  virtual void clear(const char* path);

  virtual void clearResults();

  void importResults(const SdiCmd& intermediate);

  void importResults(const unsigned char* sw12, const unsigned char* tlvData, unsigned tlvSize);

  // generic getter to read from dataOut after command execution
  bool get(const char* path, int& value);

  bool get(const char* path, uint32_t& value);

  int get(const char* path, unsigned char* buffer, unsigned bufferSize);

  inline bool get(const char* path, unsigned char& value)
  {
    return get(path, &value, 1) == 1;
  }

  bool get(const char* path, std::vector<unsigned char>& buffer);

  bool get(const char* path, std::string& value);

  std::string getString(const char* path);
};

class SDI: public SdiBase
{
public:

  bool getDateTime(unsigned char* buffer);

  bool setDateTime(const unsigned char* dateTime);

  unsigned char getLanguage();

  bool setLanguage(unsigned char languageId);

  unsigned char getCardDataEntryDeactivation();

  bool setCardDataEntryDeactivation(unsigned char value);

  unsigned char getCardDataEntryMode();

  bool setCardDataEntryMode(unsigned char value);

  bool setIdleText(std::string text, bool epp = true);

  bool showMacDesktop(bool epp = true);

  int getProperty(enum vfisysinfo::SYSPropertyInt p, bool epp = false); // 20 1A 00 00

  enum vfisysinfo::sysError getProperty(enum vfisysinfo::SYSPropertyInt p, int& value, bool epp = false); // 20 1A 00 00

  enum vfisysinfo::sysError setProperty(enum vfisysinfo::SYSPropertyInt p, int value, bool epp = false); // 20 19 00 00

  std::string getProperty(enum vfisysinfo::SYSPropertyString p, bool epp = false); // 20 1A 00 01

  enum vfisysinfo::sysError getProperty(enum vfisysinfo::SYSPropertyString p, std::string& value, bool epp = false);

  enum vfisysinfo::sysError setProperty(enum vfisysinfo::SYSPropertyString p, const std::string& value, bool epp = false); // 20 19 00 01

  std::string getVersionInfo(bool epp = false);

  bool checkForUpdate(unsigned char updateKind);

  bool waitCardRemoval(unsigned seconds);

  int sendWaitCardRemoval(unsigned seconds);

  // Data Interface (without crypto handle)

  void clearDataStore();

  bool vclRegistartSRED(std::vector<unsigned char>& track1,
          std::vector<unsigned char>& track2,
          std::vector<unsigned char>& track3);

  bool vclStatusRequest(std::vector<unsigned char>& vclStatus);

  bool vclAdvanceDDK(std::vector<unsigned char>& track1,
          std::vector<unsigned char>& track2,
          std::vector<unsigned char>& track3);

  bool vclRequestEParms(std::vector <unsigned char>& eParms);

  std::string vclGetDiagnosticData(unsigned char format = 1,
                                   unsigned char pageNumber = 0);

  int vclGetKeyDerivationMode();

  bool vclOverrideMessageQuery(std::vector<unsigned char>& track1,
          std::vector<unsigned char>& track2,
          std::vector<unsigned char>& track3);

  bool vclKsnRequest(std::string& ksn);

  bool vclKmailinRequest();

  libsdi::SDI_SW12 pluginCommand(const unsigned char plugin, const unsigned char cmd,
                                 const std::vector<unsigned char>& data,
                                 std::vector<unsigned char>& response);

  bool setManualPAN(const std::vector<unsigned char>& pan);

  bool setManualPAN(const std::string& pan);

  libsdi::SDI_SW12 performValidationChecks(std::vector<MatchingRecord>& records,
                                           const std::vector<unsigned char>& currentDate,
                                           const unsigned char options = 0,
                                           const std::vector<unsigned char> IIN = std::vector<unsigned char>());

  libsdi::SDI_SW12 getValidationInfo(std::string& info);

  libsdi::SDI_SW12 sysUploadStart(const std::string& filename,
                                  SYSUploadType type,
                                  bool epp = false);

  libsdi::SDI_SW12 sysUploadTransfer(const std::vector<unsigned char>& packet,
                                     unsigned packet_no,
                                     bool epp = false);

  libsdi::SDI_SW12 sysUploadFinalize(const std::vector<unsigned char>* md5 = NULL,
                                     const std::vector<unsigned char>* mac = NULL,
                                     bool epp = false);

  bool sysShutdown(bool epp = false);

  bool sysReboot(bool epp = false);

  bool sysSleep(bool epp = false);

  bool sysHybernate(bool epp = false);

  bool installSponsorCert(const std::vector<unsigned char>& cert);

  bool getLastInstallError(std::string& json, std::string& bundle, std::string& package, bool epp = false);


  void externalButton(void);

  bool enableEpp(int& status);

  bool disableEpp(int& status);

  bool factoryReset();

  bool readCertificate(const std::string& name, std::vector<unsigned char>& certificate);

  bool setUseCurrencyAbbreviation(const unsigned char* currency, bool useAbbreviation);

  bool setUseCurrencyAbbreviation(unsigned currency, bool useAbbreviation);

  bool msrSwitchLeds(int led1, int led2, int led3, int duration);

  bool msrSetSensitivty(unsigned char level, bool epp = false);


  enum vfiprt::PrtError setPrinterProperty(enum vfiprt::PrtPropertyInt p, int value); // 25 00 00 00

  enum vfiprt::PrtError setPrinterProperty(enum vfiprt::PrtPropertyString p, const std::string& value); // 25 00 00 01

  enum vfiprt::PrtError getPrinterProperty(enum vfiprt::PrtPropertyInt p, int& value); // 25 01 00 00

  enum vfiprt::PrtError getPrinterProperty(enum vfiprt::PrtPropertyString p, std::string& value); // 25 01 00 01

  enum vfiprt::PrtError printHtml(const std::string& html, bool landscape = false);

  enum vfiprt::PrtError printBitmap(const int width, const int height, const std::vector<unsigned char>& data);

private:
  bool sysPower(unsigned char p2, bool epp);
  bool enableEpp(int& status, unsigned char p2);

}; // class SDI


class CardDetection: public SdiCmd
{
public:
  const static unsigned char SDI_TEC_CHIP = 1; // ISO 7816
  const static unsigned char SDI_TEC_MAGN = 2; // ISO 7810
  const static unsigned char SDI_TEC_CTLS = 4; // ISO 14443
  const static unsigned char SDI_TEC_MANU = 8; // ITU-T E.161

  enum DetectionMode {
    DETECTION_MODE_BLOCKING, 
    DETECTION_MODE_POLLING,  
    DETECTION_MODE_CALLBACK  
  };

  void setDetectionMode(const enum DetectionMode mode);

  void setTecStartOptions(const std::vector<unsigned char>& opts); // see cts_StartSelection

  void setTecConfig(const std::vector<unsigned char>& opts); // see cts_SetOptions

  void setCancelButton(bool enable);

  void setCardEntryValueDeativation(unsigned char b);

  void setAlternativeInputFormat(const char* f);

  void setCardRemovalTimeout(unsigned timeout_ms);

  void setCallback(void (*cb)(unsigned char technology, void* context), void* ctx);


  void cardDetectedCallback(unsigned char *dataIn, unsigned short sizeIn);


  int startSelection(unsigned char supportedTechnologies, unsigned seconds);

  enum libsdi::SDI_SW12 stopSelection();

  unsigned char receiveTechnology();

  bool cardReadAtEpp();

  unsigned char pollTechnology();

  enum libsdi::SDI_SW12 addTechnology(unsigned char technology, const std::vector<unsigned char>& opts);

  enum libsdi::SDI_SW12 removeTechnology(unsigned char technology);

  std::string getPan();

  std::string getTrack2();

  int getTrack2Bin(std::vector<unsigned char>& data);

  std::string getCardholderName();

  std::string getServiceCode();

  std::string getTrack1();

  int getPluginResponseData(std::vector<unsigned char>& data);

  int getPluginResponseData(unsigned index,
          int32_t& pluginId,
          int32_t& pluginResponseCode,
          std::vector<unsigned char>& data);

  bool getPluginResponseData(std::vector<PluginResult>& results);

  std::string getString(unsigned CTS_DATA_TAG);

  unsigned char getValue(unsigned CTS_DATA_TAG, unsigned char defaultValue);

  unsigned char getValue(unsigned CTS_DATA_TAG, int n, unsigned char defaultValue);

  int getData(std::vector<unsigned char>& data);

  int getData(unsigned CTS_DATA_TAG, std::vector<unsigned char>& data);

  int getData(unsigned CTS_DATA_TAG, int n, std::vector<unsigned char>& data);

  int getTecselData(std::vector<unsigned char>& data);

  int startMsrRead(unsigned timeout_sec);

  int msrSetOptions(const std::vector<unsigned char>& opts);

  int msrGetTrackStatus(int track);

  int msrGetCardSpecificToken(std::vector<unsigned char>& token);

  CardDetection();
  ~CardDetection();

  virtual void clear();

private:
  void (*callback)(unsigned char technology, void* context);
  void* context;
  enum DetectionMode mode;
};

class PED: public SdiCmd
{
public:
  enum NavigatorMode
  {
    NAVIGATOR_MODE_OFF, 
    NAVIGATOR_MODE_DOUBLE_TAB, 
    NAVIGATOR_MODE_TACTILE_BUTTON 
  };

  void setTimeout(unsigned seconds);

  bool setDefaultTimeout(unsigned seconds);

  void setTouchCoordinates(const unsigned char* array, unsigned size);

  void setNavigatorMode(enum NavigatorMode mode);

  void setPinDigitCountMinMax(unsigned char min, unsigned char max);

  void setLanguage(unsigned char lang);

  void setAmount(const unsigned char* amount);

  void setCurrency(const unsigned char* currency);

  void setAppLabel(const std::string& appLabel);


  int startPinInput();

  int startPinInput(bool enablePinBypass);

  bool startPinEntry(unsigned pinBypassKey = 0);

  bool pollPinEntry(std::vector<unsigned char>& status);

  bool stopPinEntry();

  bool setPinInputClearKeyMode(bool clearAllDigits);

  void setClearKeyMode(bool clearAllDigits);

  void setPinBypassKeyAndMode(unsigned char value);

  void setAutoConfirmation(bool enable);

  void setDialogOptions(uint32_t options);

  void setIntercharTimeout(uint32_t millis);

  void setHeaderLabel(const std::string& label);

  void setEchoChar(uint32_t unicode);

  bool sendPinInputParameters(bool epp = true);

  enum SDI_SW12 receiveGetPinResult();

  bool getPinBypassKey(unsigned char& value);
};

class SdiCrypt: public SdiBase
{
public:
  // SDI Crypto Interface
  SdiCrypt();
  ~SdiCrypt();

  bool open(const char* hostName);

  bool close();

  bool isOpen() const;

  uint32_t getCryptoHandle();

  bool encrypt(const std::vector<unsigned char>& data,
          std::vector<unsigned char>& encrypted);

  bool decrypt(const std::vector<unsigned char>& encrypted,
          std::vector<unsigned char>& decrypted);

  bool sign(const std::vector<unsigned char>& data,
          std::vector<unsigned char>& signature);

  bool verify(const std::vector<unsigned char>& data,
          const std::vector<unsigned char>& signature);

  bool updateKey(unsigned char keyType, const std::vector<unsigned char>& keyData,
          std::vector<unsigned char>* proprietaryData = NULL,
          const unsigned char AS2805 = 0,
          std::vector<unsigned char>* KCV = NULL);

  bool setKeySetId(uint32_t ksid, uint32_t mksid = 0, bool asAttribute = false);

  bool getEncryptedPin(unsigned char pinBlockFormat,
          std::vector<unsigned char>& pinBlock,
          bool requestZeroPinBlock = false);

  std::string getKeyInventory();

  bool getKeyData(unsigned char keyType, std::vector<unsigned char>& keyData, unsigned char kekFlag = 0);

  std::string getStatus();

  std::string getStatus(std::string hostName);


  static std::string getVersions(int& additionalResult);

  void setInitialVector(const std::vector<unsigned char>& iv)
  {
    initialVector = iv;
  }

  void getInitialVector(std::vector<unsigned char>& iv) const
  {
    iv = initialVector;
  }


  void getKeySerialNumber(std::vector<unsigned char>& ksn) const
  {
    ksn = keySerialNumber;
  }

  struct Placeholder
  {
    std::vector<unsigned char> tagList;          
    std::vector<unsigned char> applicationData;  
    std::vector<unsigned char> dataOptions;      
  };

  bool getEncData(const Placeholder& descriptor,
          std::vector<unsigned char>& encrypted,
          bool useStoredData = false,
          bool incrementKSN = false);

  bool getEncMsgData(const std::vector<unsigned char>& messageTemplate,
          const std::vector<Placeholder>& placeholder,
          std::vector<unsigned char>& encrypted,
          bool useStoredData = false,
          bool incrementKSN = false);

  bool getMsgSignature(const std::vector<unsigned char>& messageTemplate,
          const std::vector<Placeholder>& placeholder,
          std::vector<unsigned char>& signature,
          bool useStoredData = false,
          bool incrementKSN = false);

  bool getEncTrxData(const std::vector<unsigned long> tags, std::vector<unsigned char>& data);

  bool setEncTrxData(const std::vector<unsigned char> data);

  bool endEncTrxData();

private:
  unsigned char cryptoHandle[4];
  std::vector<unsigned char> initialVector;
  std::vector<unsigned char> keySerialNumber;
  uint32_t keySetId;
  uint32_t masterKeySetId;
};

class ManualEntry: public SdiCmd
{
public:
  ManualEntry();
  ~ManualEntry();

  void setLanguage(unsigned char language);


  int setTimeout(unsigned seconds);

  int setCvvEntryDeactivation(unsigned char cvvEntry);


  int setCardDataEntryMode(unsigned char mode);


  int setCvvInputString(const std::string &inputString);

  int setTouchCoordinates(const unsigned char* array, unsigned size);

  int setMimimumDigits(unsigned char minimumDigits);

  int setDoubleConfirmationMode(unsigned char mode);

  int start();

  int receiveResult(std::string& obfuscatedPAN, std::vector<unsigned char>& token);

  int getPluginResponseData(std::vector<unsigned char>& data);

  int getPluginResponseData(unsigned index,
          int32_t& pluginId,
          int32_t& pluginResponseCode,
          std::vector<unsigned char>& data);

  bool getPluginResponseData(std::vector<PluginResult>& results);
};

class Dialog: public SdiCmd
{
public:


  const static int DIALOG_SUCCESS = 0;

  const static int DIALOG_CANCEL_PRESSED = -1;

  const static int DIALOG_TIMEOUT = -3;

  const static int DIALOG_SYS_ABORT = -8;

  const static int DIALOG_CLIENT_ERROR = -14;

  const static int DIALOG_SDI_SW12 = -15;

  const static int DIALOG_NO_ASYNC_DIALOG = 1;

  const static int DIALOG_IN_PROGRESS = 2;


  const static unsigned DLG_DisplayOnly       = 0x00000000;
  const static unsigned DLG_CancelKey         = 0x00000002;
  const static unsigned DLG_ClearKey          = 0x00000004;
  const static unsigned DLG_EnterKey          = 0x00000008;
  const static unsigned DLG_NoLEDs            = 0x00000010;
  const static unsigned DLG_CtlsLogo          = 0x00000020;
  const static unsigned DLG_QuestionLogo      = 0x00000040;
  const static unsigned DLG_WarningLogo       = 0x00000080;
  const static unsigned DLG_ErrorLogo         = 0x00000100;
  const static unsigned DLG_SuccessLogo       = 0x00000200;
  const static unsigned DLG_WaitLogo          = 0x00000400;
  const static unsigned DLG_Async             = 0x00000800;
  const static unsigned DLG_StoreAsyncResult  = 0x00001000;
  const static unsigned DLG_HideSoftKeys      = 0x00002000;
  const static unsigned DLG_TextAlignLeft     = 0x00004000;
  const static unsigned DLG_TextAlignRight    = 0x00008000;
  const static unsigned DLG_TextAlignTop      = 0x00010000;
  const static unsigned DLG_TextAlignButton   = 0x00020000;
  const static unsigned DLG_NoHeader          = 0x00040000;
  const static unsigned DLG_ClearOnReturn     = 0x00100000;
  const static unsigned DLG_AbortOnCardRemove = 0x00200000;
  const static unsigned DLG_IgnoreExtAbort    = 0x00400000;

  const static unsigned MENU_NoOpts           = 0x00000000;
  const static unsigned MENU_NoLEDs           = 0x00000002;
  const static unsigned MENU_ClearOnReturn    = 0x00000004;
  const static unsigned MENU_AbortOnCardRemove= 0x00000008;
  const static unsigned MENU_IgnoreExtAbort   = 0x00000010;
  const static unsigned MENU_NoHeader         = 0x00000020;

  enum REQUEST_CARD_MODE
  {
    REQUEST_CARD_STANDARD = 0, 
    REQUEST_CARD_FALLBACK = 1, 
    REQUEST_CARD_RETRY    = 2  
  };

  bool clearScreen(bool epp = true);

  int display(const std::string& text, bool epp = true);

  int secureInput(bool epp = true);

  int menu(bool epp = true);

  int requestCard(unsigned char technology,
          enum REQUEST_CARD_MODE mode = REQUEST_CARD_STANDARD,
          bool epp = true);

  bool idleScreen(bool epp = true);

  int captureSignature(std::vector<unsigned char>& signature, std::string& format,
          bool epp = true);

  static void showLedArea(bool show);

  int htmlDialog(const std::string& fname, bool epp = true);

  int getAsyncResult(bool epp = true);

  static void abort();

  void setTemplate(unsigned char id);

  void setInputTemplate(unsigned char id);

  void setLanguage(unsigned char language);

  void addData(const std::string& name, const std::string& value);

  void setTimeout(int seconds);

  void setOptions(unsigned options);

  void setEnterKeyLabel(const std::string& label);

  void setClearKeyLabel(const std::string& label);

  void setCancelKeyLabel(const std::string& label);

  void setUpKeyLabel(const std::string& label);

  void setDownKeyLabel(const std::string& label);

  void setHeader(const std::string& text);

  void setBeep(bool active = true);

  void addAction(const std::string& key, const std::string& action);

  void setMaskingCharacter(char c);

  void setAlternativeInputFormat(const char* f);

  void setAmount(const unsigned char* amount);

  void setCurrency(const unsigned char* currency);

  void setTransactionType(unsigned char txnType);

  void setMenuText(const std::string& text);

  void addMenuItem(const std::string& item);

  void setPreSelected(unsigned char itemNumber);

  void setAdminMenu(unsigned char adminMenu);

  unsigned char getSelected();

  std::string get(const std::string& name);

  std::vector<std::string> getInputFieldNames();

private:
  int startDialog(unsigned char instruction, bool epp);
};

} // namespace sdi

#ifndef DOXYGEN
#endif // C++
#endif
#endif /* CLIENT_SDI_IF_H_ */
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

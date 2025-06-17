---
title: libsdi::SDI

---

# libsdi::SDI






`#include <sdi_if.h>`

Inherits from [SdiBase](classlibsdi_1_1_sdi_base.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[getDateTime](classlibsdi_1_1_s_d_i.md#function-getdatetime)**(unsigned char * buffer)<br>Read numeric date/time.  |
| bool | **[setDateTime](classlibsdi_1_1_s_d_i.md#function-setdatetime)**(const unsigned char * dateTime)<br>Write numeric date/time.  |
| unsigned char | **[getLanguage](classlibsdi_1_1_s_d_i.md#function-getlanguage)**()<br>Call Sys Get Status (20-04), tag 'D6', DOL approach to read system default language.  |
| bool | **[setLanguage](classlibsdi_1_1_s_d_i.md#function-setlanguage)**(unsigned char languageId)<br>Call Sys Set Status (20-09), tag 'D6', DOL approach to set system default language.  |
| unsigned char | **[getCardDataEntryDeactivation](classlibsdi_1_1_s_d_i.md#function-getcarddataentrydeactivation)**()<br>Call Sys Get Status (20-04), tag 'D7', DOL approach to read system default card data entry deactivation value.  |
| bool | **[setCardDataEntryDeactivation](classlibsdi_1_1_s_d_i.md#function-setcarddataentrydeactivation)**(unsigned char value)<br>Call Sys Set Status (20-09), tag 'D7', DOL approach to set system default card data entry deactivation value.  |
| unsigned char | **[getCardDataEntryMode](classlibsdi_1_1_s_d_i.md#function-getcarddataentrymode)**()<br>Call Sys Get Status (20-04), tag 'D8', DOL approach to read system default card data entry mode.  |
| bool | **[setCardDataEntryMode](classlibsdi_1_1_s_d_i.md#function-setcarddataentrymode)**(unsigned char value)<br>Call Sys Set Status (20-09), tag 'D8', DOL approach to set the system default card data entry mode.  |
| bool | **[setIdleText](classlibsdi_1_1_s_d_i.md#function-setidletext)**(std::string text, bool epp =true)<br>Command to set the idle text (20-13).  |
| bool | **[showMacDesktop](classlibsdi_1_1_s_d_i.md#function-showmacdesktop)**(bool epp =true)<br>Switch from SDI to MAC Desktop (20-18).  |
| int | **[getProperty](classlibsdi_1_1_s_d_i.md#function-getproperty)**(enum [vfisysinfo::SYSPropertyInt](namespacevfisysinfo.md#enum-syspropertyint) p, bool epp =false)<br>Get Integer Property by SYSINFO-ADK (20-1A, P2 = 00).  |
| enum [vfisysinfo::sysError](namespacevfisysinfo.md#enum-syserror) | **[getProperty](classlibsdi_1_1_s_d_i.md#function-getproperty)**(enum [vfisysinfo::SYSPropertyInt](namespacevfisysinfo.md#enum-syspropertyint) p, int & value, bool epp =false)<br>Get Integer Property by SYSINFO-ADK (20-1A, P2 = 00).  |
| enum [vfisysinfo::sysError](namespacevfisysinfo.md#enum-syserror) | **[setProperty](classlibsdi_1_1_s_d_i.md#function-setproperty)**(enum [vfisysinfo::SYSPropertyInt](namespacevfisysinfo.md#enum-syspropertyint) p, int value, bool epp =false)<br>Set Integer Property by SYSINFO-ADK (20-19, P2 = 00).  |
| std::string | **[getProperty](classlibsdi_1_1_s_d_i.md#function-getproperty)**(enum [vfisysinfo::SYSPropertyString](namespacevfisysinfo.md#enum-syspropertystring) p, bool epp =false)<br>Get String Property by SYSINFO-ADK (20-1A, P2 = 01).  |
| enum [vfisysinfo::sysError](namespacevfisysinfo.md#enum-syserror) | **[getProperty](classlibsdi_1_1_s_d_i.md#function-getproperty)**(enum [vfisysinfo::SYSPropertyString](namespacevfisysinfo.md#enum-syspropertystring) p, std::string & value, bool epp =false)<br>Get String Property by SYSINFO-ADK (20-1A, P2 = 01).  |
| enum [vfisysinfo::sysError](namespacevfisysinfo.md#enum-syserror) | **[setProperty](classlibsdi_1_1_s_d_i.md#function-setproperty)**(enum [vfisysinfo::SYSPropertyString](namespacevfisysinfo.md#enum-syspropertystring) p, const std::string & value, bool epp =false)<br>Set String Property by SYSINFO-ADK (20-19, P2 = 01).  |
| std::string | **[getVersionInfo](classlibsdi_1_1_s_d_i.md#function-getversioninfo)**(bool epp =false)<br>read SDI version info via Get SDI version info (20-1C).  |
| bool | **[checkForUpdate](classlibsdi_1_1_s_d_i.md#function-checkforupdate)**(unsigned char updateKind)<br>Check if update available on Android platform and execute (20-1D).  |
| bool | **[waitCardRemoval](classlibsdi_1_1_s_d_i.md#function-waitcardremoval)**(unsigned seconds)<br>Wait Card Removal (23-02).  |
| int | **[sendWaitCardRemoval](classlibsdi_1_1_s_d_i.md#function-sendwaitcardremoval)**(unsigned seconds)<br>Wait Card Removal (23-02), send only.  |
| void | **[clearDataStore](classlibsdi_1_1_s_d_i.md#function-cleardatastore)**()<br>Clear data, especially sensitive data related to last transaction (29-03).  |
| bool | **[vclRegistartSRED](classlibsdi_1_1_s_d_i.md#function-vclregistartsred)**(std::vector< unsigned char > & track1, std::vector< unsigned char > & track2, std::vector< unsigned char > & track3)<br>Request VCL to turn on the encryption in SRED mode (28-00).  |
| bool | **[vclStatusRequest](classlibsdi_1_1_s_d_i.md#function-vclstatusrequest)**(std::vector< unsigned char > & vclStatus)<br>Get the current status of VCL (28-01).  |
| bool | **[vclAdvanceDDK](classlibsdi_1_1_s_d_i.md#function-vcladvanceddk)**(std::vector< unsigned char > & track1, std::vector< unsigned char > & track2, std::vector< unsigned char > & track3)<br>Request VCL to turn on the encryption in SRED mode (28-02).  |
| bool | **[vclRequestEParms](classlibsdi_1_1_s_d_i.md#function-vclrequesteparms)**(std::vector< unsigned char > & eParms)<br>Get the eParms of the last encryption from VCL (28-03).  |
| std::string | **[vclGetDiagnosticData](classlibsdi_1_1_s_d_i.md#function-vclgetdiagnosticdata)**(unsigned char format =1, unsigned char pageNumber =0)<br>Get the diagnostic data from VCL (28-06, VCL: DIAG_QUERY).  |
| int | **[vclGetKeyDerivationMode](classlibsdi_1_1_s_d_i.md#function-vclgetkeyderivationmode)**()<br>Extract key derivation mode from diagnostic data (28-07, VCL: DIAG_QUERY).  |
| bool | **[vclOverrideMessageQuery](classlibsdi_1_1_s_d_i.md#function-vcloverridemessagequery)**(std::vector< unsigned char > & track1, std::vector< unsigned char > & track2, std::vector< unsigned char > & track3)<br>VCL Override Message Query (28-08).  |
| bool | **[vclKsnRequest](classlibsdi_1_1_s_d_i.md#function-vclksnrequest)**(std::string & ksn)<br>VCL KSN Request (28-09).  |
| bool | **[vclKmailinRequest](classlibsdi_1_1_s_d_i.md#function-vclkmailinrequest)**()<br>VCL KMAILIN Request (28-0A).  |
| [libsdi::SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[pluginCommand](classlibsdi_1_1_s_d_i.md#function-plugincommand)**(const unsigned char plugin, const unsigned char cmd, const std::vector< unsigned char > & data, std::vector< unsigned char > & response)<br>Send a plugin specific command (26-<plugin id>, P2 = <command id>).  |
| bool | **[setManualPAN](classlibsdi_1_1_s_d_i.md#function-setmanualpan)**(const std::vector< unsigned char > & pan)<br>PAN injection after manual card data entry on application's side for ISO-0 PIN block.  |
| bool | **[setManualPAN](classlibsdi_1_1_s_d_i.md#function-setmanualpan)**(const std::string & pan)<br>PAN injection after manual card data entry on application's side for ISO-0 PIN block.  |
| [libsdi::SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[performValidationChecks](classlibsdi_1_1_s_d_i.md#function-performvalidationchecks)**(std::vector< [MatchingRecord](structlibsdi_1_1_matching_record.md) > & records, const std::vector< unsigned char > & currentDate, const unsigned char options =0, const std::vector< unsigned char > IIN =std::vector< unsigned char >())<br>Perform the validation checks for the current card using the validation table (cardranges.json) stored on the device (29-05).  |
| [libsdi::SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[getValidationInfo](classlibsdi_1_1_s_d_i.md#function-getvalidationinfo)**(std::string & info)<br>Perform the get validation info command to get the header information of the validation table file (cardranges.json) stored on the device (29-06).  |
| [libsdi::SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[sysUploadStart](classlibsdi_1_1_s_d_i.md#function-sysuploadstart)**(const std::string & filename, [SYSUploadType](namespacelibsdi.md#enum-sysuploadtype) type, bool epp =false)<br>Start upload of a software package or a configuration file to the SDI Server (20-14).  |
| [libsdi::SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[sysUploadTransfer](classlibsdi_1_1_s_d_i.md#function-sysuploadtransfer)**(const std::vector< unsigned char > & packet, unsigned packet_no, bool epp =false)<br>Transfer data packet to the SDI Server (20-15).  |
| [libsdi::SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[sysUploadFinalize](classlibsdi_1_1_s_d_i.md#function-sysuploadfinalize)**(const std::vector< unsigned char > * md5 =NULL, const std::vector< unsigned char > * mac =NULL, bool epp =false)<br>Start upload of a software package or a configuration file to the SDI Server (20-16).  |
| bool | **[sysShutdown](classlibsdi_1_1_s_d_i.md#function-sysshutdown)**(bool epp =false)<br>Execute a system shutdown, (20-17, P2 = 00).  |
| bool | **[sysReboot](classlibsdi_1_1_s_d_i.md#function-sysreboot)**(bool epp =false)<br>Execute a system reboot, (20-17, P2 = 01).  |
| bool | **[sysSleep](classlibsdi_1_1_s_d_i.md#function-syssleep)**(bool epp =false)<br>Execute a system sleep, (20-17, P2 = 02). Not supported on Android.  |
| bool | **[sysHybernate](classlibsdi_1_1_s_d_i.md#function-syshybernate)**(bool epp =false)<br>Execute a system hybernate, (20-17, P2 = 03). Not supported on Android.  |
| bool | **[installSponsorCert](classlibsdi_1_1_s_d_i.md#function-installsponsorcert)**(const std::vector< unsigned char > & cert)<br>Check and Install a Sponsor Certificate (20-1B).  |
| bool | **[getLastInstallError](classlibsdi_1_1_s_d_i.md#function-getlastinstallerror)**(std::string & json, std::string & bundle, std::string & package, bool epp =false)<br>Get last installation error from secure installer (20-1E).  |
| void | **[externalButton](classlibsdi_1_1_s_d_i.md#function-externalbutton)**(void )<br>Send External Button command '20 20' always with P2 = 1 (suppress response) to inform the SDI-Server in Headless Mode that the external button is pressed.  |
| bool | **[enableEpp](classlibsdi_1_1_s_d_i.md#function-enableepp)**(int & status)<br>Enables a connected EPP (20-21, P2 = 00).  |
| bool | **[disableEpp](classlibsdi_1_1_s_d_i.md#function-disableepp)**(int & status)<br>Disables a connected EPP (20-21, P2 = 01).  |
| bool | **[factoryReset](classlibsdi_1_1_s_d_i.md#function-factoryreset)**()<br>This command resets SDI server to factory defaults (20-22)  |
| bool | **[readCertificate](classlibsdi_1_1_s_d_i.md#function-readcertificate)**(const std::string & name, std::vector< unsigned char > & certificate)<br>Read Keystore Certificate (20-23)  |
| bool | **[setUseCurrencyAbbreviation](classlibsdi_1_1_s_d_i.md#function-setusecurrencyabbreviation)**(const unsigned char * currency, bool useAbbreviation)<br>Make [SDI](classlibsdi_1_1_s_d_i.md) use ISO-4217 instead of using a symbol like $ or €  |
| bool | **[setUseCurrencyAbbreviation](classlibsdi_1_1_s_d_i.md#function-setusecurrencyabbreviation)**(unsigned currency, bool useAbbreviation)<br>Make [SDI](classlibsdi_1_1_s_d_i.md) use ISO-4217 instead of using a symbol like $ or €  |
| bool | **[msrSwitchLeds](classlibsdi_1_1_s_d_i.md#function-msrswitchleds)**(int led1, int led2, int led3, int duration) |
| bool | **[msrSetSensitivty](classlibsdi_1_1_s_d_i.md#function-msrsetsensitivty)**(unsigned char level, bool epp =false)<br>Set MSR sensitivity level.  |
| enum [vfiprt::PrtError](namespacevfiprt.md#enum-prterror) | **[setPrinterProperty](classlibsdi_1_1_s_d_i.md#function-setprinterproperty)**(enum [vfiprt::PrtPropertyInt](namespacevfiprt.md#enum-prtpropertyint) p, int value)<br>Set Integer Printer Property by GUIPRT ADK (25-00, P2 = 00).  |
| enum [vfiprt::PrtError](namespacevfiprt.md#enum-prterror) | **[setPrinterProperty](classlibsdi_1_1_s_d_i.md#function-setprinterproperty)**(enum [vfiprt::PrtPropertyString](namespacevfiprt.md#enum-prtpropertystring) p, const std::string & value)<br>Set String Printer Property by GUIPRT ADK (25-00, P2 = 01).  |
| enum [vfiprt::PrtError](namespacevfiprt.md#enum-prterror) | **[getPrinterProperty](classlibsdi_1_1_s_d_i.md#function-getprinterproperty)**(enum [vfiprt::PrtPropertyInt](namespacevfiprt.md#enum-prtpropertyint) p, int & value)<br>Get Integer Printer Property by GUIPRT ADK (25-01, P2 = 00).  |
| enum [vfiprt::PrtError](namespacevfiprt.md#enum-prterror) | **[getPrinterProperty](classlibsdi_1_1_s_d_i.md#function-getprinterproperty)**(enum [vfiprt::PrtPropertyString](namespacevfiprt.md#enum-prtpropertystring) p, std::string & value)<br>Get String Printer Property by GUIPRT ADK (25-01, P2 = 01).  |
| enum [vfiprt::PrtError](namespacevfiprt.md#enum-prterror) | **[printHtml](classlibsdi_1_1_s_d_i.md#function-printhtml)**(const std::string & html, bool landscape =false)<br>Perform the Print HTML command (25-02).  |
| enum [vfiprt::PrtError](namespacevfiprt.md#enum-prterror) | **[printBitmap](classlibsdi_1_1_s_d_i.md#function-printbitmap)**(const int width, const int height, const std::vector< unsigned char > & data)<br>Perform the Print Bitmap command (25-04).  |

## Additional inherited members

**Public Classes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| struct | **[PluginResult](structlibsdi_1_1_sdi_base_1_1_plugin_result.md)**  |

**Public Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| | **[SdiBase](classlibsdi_1_1_sdi_base.md#function-sdibase)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12)**() |
| int | **[getAdditionalResultValue](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue)**()<br>Access Additional Result Value if returned in SDI response.  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[getClientError](classlibsdi_1_1_sdi_base.md#function-getclienterror)**()<br>Access client side error codes.  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receiveSW12](classlibsdi_1_1_sdi_base.md#function-receivesw12)**()<br>Receive SDI server response with no data.  |
| void | **[clear](classlibsdi_1_1_sdi_base.md#function-clear)**()<br>clear result data obtained from SDI communication  |
| void | **[importResults](classlibsdi_1_1_sdi_base.md#function-importresults)**(const [SdiBase](classlibsdi_1_1_sdi_base.md) & intermediate)<br>set result data obtained from intermediate SDI communication  |

**Protected Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| void | **[setSdiSw12](classlibsdi_1_1_sdi_base.md#function-setsdisw12)**(enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) s) |
| void | **[setClientError](classlibsdi_1_1_sdi_base.md#function-setclienterror)**(int libsdiprotocol_result) |

**Protected Attributes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| unsigned short | **[sw12](classlibsdi_1_1_sdi_base.md#variable-sw12)**  |
| int | **[additionalResultValue](classlibsdi_1_1_sdi_base.md#variable-additionalresultvalue)**  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[clientErr](classlibsdi_1_1_sdi_base.md#variable-clienterr)**  |


## Public Functions Documentation

### function getDateTime

```cpp
bool getDateTime(
    unsigned char * buffer
)
```

Read numeric date/time. 

**Parameters**: 

  * **buffer** for date/time n14 (length 7, 'yyyymmddHHMMSS') 


**Return**: true in case of success 

Call Sys Get Status (20-04), tag 'D0', DOL approach. This is an alternative to getProperty(vfisysinfo::SYS_PROP_RTC) which returns a string. NOTE: In contrast to [SDI](classlibsdi_1_1_s_d_i.md) serial interface format is numeric (7 bytes BCD). 


### function setDateTime

```cpp
bool setDateTime(
    const unsigned char * dateTime
)
```

Write numeric date/time. 

**Parameters**: 

  * **dateTime** for date/time n14 (length 7, 'yyyymmddHHMMSS') 


**Return**: true in case of success 

Call Sys Set Status (20-09), tag 'D0', DOL approach. This is an alternative to setProperty(vfisysinfo::SYS_PROP_RTC) which returns a string. NOTE: In contrast to [SDI](classlibsdi_1_1_s_d_i.md) serial interface format is numeric (7 bytes BCD). 


### function getLanguage

```cpp
unsigned char getLanguage()
```

Call Sys Get Status (20-04), tag 'D6', DOL approach to read system default language. 

**Return**: languageId [%SDI language code] further analysis, 0xFF in case of error. 

### function setLanguage

```cpp
bool setLanguage(
    unsigned char languageId
)
```

Call Sys Set Status (20-09), tag 'D6', DOL approach to set system default language. 

**Parameters**: 

  * **languageId** [%SDI language code]


**Return**: true for success 

### function getCardDataEntryDeactivation

```cpp
unsigned char getCardDataEntryDeactivation()
```

Call Sys Get Status (20-04), tag 'D7', DOL approach to read system default card data entry deactivation value. 

**Return**: default card data entry deactivation value current command execution 
**0** perform all input 
**1** skip card verification code 
**2** skip expiration and verification code 
**4** just enter CVV after card data read from mag. stripe 

 0xff error, use [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) for further analysis 

### function setCardDataEntryDeactivation

```cpp
bool setCardDataEntryDeactivation(
    unsigned char value
)
```

Call Sys Set Status (20-09), tag 'D7', DOL approach to set system default card data entry deactivation value. 

**Parameters**: 

  * **value** temporary Card Entry Value deactivation during the current command execution 
**0** perform all input 
**1** skip card verification code 
**2** skip expiration and verification code 
**4** just enter CVV after card data read from mag. stripe 


**Return**: true for success 

### function getCardDataEntryMode

```cpp
unsigned char getCardDataEntryMode()
```

Call Sys Get Status (20-04), tag 'D8', DOL approach to read system default card data entry mode. 

**Return**: card data entry mode 

 0: Card Data Entry performed on one screen 

 1: Card Data Entry performed on separate screens 

 0xff an error occurred, use [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) for further analysis 

### function setCardDataEntryMode

```cpp
bool setCardDataEntryMode(
    unsigned char value
)
```

Call Sys Set Status (20-09), tag 'D8', DOL approach to set the system default card data entry mode. 

**Parameters**: 

  * **value** Card Data Entry mode 

 0: Card Data Entry performed on one screen 

 1: Card Data Entry performed on separate screens 


**Return**: true for success 

### function setIdleText

```cpp
bool setIdleText(
    std::string text,
    bool epp =true
)
```

Command to set the idle text (20-13). 

**Parameters**: 

  * **text** idle text UTF-8 format, empty for deletion 
  * **epp** true if value shall be read from external PIN pad 


**Return**: true for succcess 

### function showMacDesktop

```cpp
bool showMacDesktop(
    bool epp =true
)
```

Switch from SDI to MAC Desktop (20-18). 

**Parameters**: 

  * **epp** true if value shall be read from external PIN pad 


**Return**: true for succcess 

SDI is still running in background.


### function getProperty

```cpp
int getProperty(
    enum vfisysinfo::SYSPropertyInt p,
    bool epp =false
)
```

Get Integer Property by SYSINFO-ADK (20-1A, P2 = 00). 

**Parameters**: 

  * **p** integer property identifier 
  * **epp** true if value shall be read from external PIN pad 


**Return**: property value, 0 in case of failure 

If 0 is returned, call [SdiBase::getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) to check if an error has occurred. If applicable call [SdiBase::getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) to read the error raised by SYSINFO ADK. 


### function getProperty

```cpp
enum vfisysinfo::sysError getProperty(
    enum vfisysinfo::SYSPropertyInt p,
    int & value,
    bool epp =false
)
```

Get Integer Property by SYSINFO-ADK (20-1A, P2 = 00). 

**Parameters**: 

  * **p** integer property identifier 
  * **value** the value of that integer property 
  * **epp** true if value shall be read from external PIN pad 


**Return**: value returned by SYSINFO ADK, [vfisysinfo::SYS_ERR_FAIL](namespacevfisysinfo.md#enumvalue-sys-err-fail) in case of error 

In case of error [vfisysinfo::SYS_ERR_FAIL](namespacevfisysinfo.md#enumvalue-sys-err-fail) is returned and the details can be analyzed by calling [SdiBase::getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12) and SdiBase::getAddtionalResultValue(). 


### function setProperty

```cpp
enum vfisysinfo::sysError setProperty(
    enum vfisysinfo::SYSPropertyInt p,
    int value,
    bool epp =false
)
```

Set Integer Property by SYSINFO-ADK (20-19, P2 = 00). 

**Parameters**: 

  * **p** integer property identifier 
  * **value** the value of that integer property 
  * **epp** true if value shall be read from external PIN pad 


**Return**: value returned by SYSINFO ADK, [vfisysinfo::SYS_ERR_FAIL](namespacevfisysinfo.md#enumvalue-sys-err-fail) in case of error 

In case of error [vfisysinfo::SYS_ERR_FAIL](namespacevfisysinfo.md#enumvalue-sys-err-fail) is returned and the details can be analyzed by calling [SdiBase::getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12) and SdiBase::getAddtionalResultValue(). 


### function getProperty

```cpp
std::string getProperty(
    enum vfisysinfo::SYSPropertyString p,
    bool epp =false
)
```

Get String Property by SYSINFO-ADK (20-1A, P2 = 01). 

**Parameters**: 

  * **p** string property identifier 
  * **epp** true if value shall be read from external PIN pad 


**Return**: property value, empty string in case of failure 

If empty string is returned, call [SdiBase::getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) to check if an error has occurred. If applicable call [SdiBase::getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) to read the error raised by SYSINFO ADK. 


### function getProperty

```cpp
enum vfisysinfo::sysError getProperty(
    enum vfisysinfo::SYSPropertyString p,
    std::string & value,
    bool epp =false
)
```

Get String Property by SYSINFO-ADK (20-1A, P2 = 01). 

**Parameters**: 

  * **p** string property identifier 
  * **value** the value of that string property 
  * **epp** true if value shall be read from external PIN pad 


**Return**: value returned by SYSINFO ADK, [vfisysinfo::SYS_ERR_FAIL](namespacevfisysinfo.md#enumvalue-sys-err-fail) in case of error 

In case of error [vfisysinfo::SYS_ERR_FAIL](namespacevfisysinfo.md#enumvalue-sys-err-fail) is returned and the details can be analyzed by calling [SdiBase::getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12) and SdiBase::getAddtionalResultValue(). 


### function setProperty

```cpp
enum vfisysinfo::sysError setProperty(
    enum vfisysinfo::SYSPropertyString p,
    const std::string & value,
    bool epp =false
)
```

Set String Property by SYSINFO-ADK (20-19, P2 = 01). 

**Parameters**: 

  * **p** string property identifier 
  * **value** the value of that string property 
  * **epp** true if value shall be read from external PIN pad 


**Return**: value returned by SYSINFO ADK, [vfisysinfo::SYS_ERR_FAIL](namespacevfisysinfo.md#enumvalue-sys-err-fail) in case of error 

In case of error [vfisysinfo::SYS_ERR_FAIL](namespacevfisysinfo.md#enumvalue-sys-err-fail) is returned and the details can be analyzed by calling [SdiBase::getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12) and SdiBase::getAddtionalResultValue(). 


### function getVersionInfo

```cpp
std::string getVersionInfo(
    bool epp =false
)
```

read SDI version info via Get SDI version info (20-1C). 

**Parameters**: 

  * **epp** true if value shall be read from external PIN pad 


**Return**: versions a single string "<component A>:<version A>;<component B>:version b>;..." 

### function checkForUpdate

```cpp
bool checkForUpdate(
    unsigned char updateKind
)
```

Check if update available on Android platform and execute (20-1D). 

**Parameters**: 

  * **updateKind** e.g. 6 for SDI user config. See SDI server documentation. 


**Return**: true for success (SW12 = '9000' 

### function waitCardRemoval

```cpp
bool waitCardRemoval(
    unsigned seconds
)
```

Wait Card Removal (23-02). 

**Parameters**: 

  * **seconds** wait time in seconds 


**Return**: true if card is absent 

### function sendWaitCardRemoval

```cpp
int sendWaitCardRemoval(
    unsigned seconds
)
```

Wait Card Removal (23-02), send only. 

**Parameters**: 

  * **seconds** wait time in seconds 


**Return**: return result of [SDI_Send()](sdiprotocol_8h.md#function-sdi-send)

Send command Wait Card Removal. To be used with the data available callback. Once data is available call [receiveSW12()](classlibsdi_1_1_sdi_base.md#function-receivesw12) to get the result. 


### function clearDataStore

```cpp
void clearDataStore()
```

Clear data, especially sensitive data related to last transaction (29-03). 

### function vclRegistartSRED

```cpp
bool vclRegistartSRED(
    std::vector< unsigned char > & track1,
    std::vector< unsigned char > & track2,
    std::vector< unsigned char > & track3
)
```

Request VCL to turn on the encryption in SRED mode (28-00). 

**Parameters**: 

  * **track1** - track 1 data returned from VCL, hexadecimal 
  * **track2** - track 2 data returned from VCL, hexadecimal 
  * **track3** - track 3 data returned from VCL, hexadecimal 


**Return**: true in case of success 

For the case of error [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) or [getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) might contain further information. 


### function vclStatusRequest

```cpp
bool vclStatusRequest(
    std::vector< unsigned char > & vclStatus
)
```

Get the current status of VCL (28-01). 

**Parameters**: 

  * **vclStatus** VCL status 


**Return**: true if status has been received from SDI server 

In case of error call [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) to get the error reason. 


### function vclAdvanceDDK

```cpp
bool vclAdvanceDDK(
    std::vector< unsigned char > & track1,
    std::vector< unsigned char > & track2,
    std::vector< unsigned char > & track3
)
```

Request VCL to turn on the encryption in SRED mode (28-02). 

**Parameters**: 

  * **track1** - track 1 data returned from VCL, hexadecimal 
  * **track2** - track 2 data returned from VCL, hexadecimal 
  * **track3** - track 3 data returned from VCL, hexadecimal 


**Return**: true in case of success 

For the case of error [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) or [getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) might contain further information. 


### function vclRequestEParms

```cpp
bool vclRequestEParms(
    std::vector< unsigned char > & eParms
)
```

Get the eParms of the last encryption from VCL (28-03). 

**Parameters**: 

  * **eParms** VCL eParms 


**Return**: true in case of success 

This command should be used by the payment application if eParms is activated only. The eParms will be forwarded from the SDI-Server as obtained from VCL. Further processing is up to the payment application. In case of error call [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) or [getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) for more information. 


### function vclGetDiagnosticData

```cpp
std::string vclGetDiagnosticData(
    unsigned char format =1,
    unsigned char pageNumber =0
)
```

Get the diagnostic data from VCL (28-06, VCL: DIAG_QUERY). 

**Parameters**: 

  * **format** output format, 1: verbose, 2: concise, 4:XML 
  * **pageNumber** page number 0..127 


**Return**: diagnostic data 

The diagnostic query result will be forwarded by the SDI-Server as obtained from VCL. Further processing is up to the payment application. Additional parameters can be the output format as well as the requested page number. 


### function vclGetKeyDerivationMode

```cpp
int vclGetKeyDerivationMode()
```

Extract key derivation mode from diagnostic data (28-07, VCL: DIAG_QUERY). 

**Return**: key derivation mode: 0: shared key, 1: unique key, -1: error (call getSdiSw12) for closer analysis) 

### function vclOverrideMessageQuery

```cpp
bool vclOverrideMessageQuery(
    std::vector< unsigned char > & track1,
    std::vector< unsigned char > & track2,
    std::vector< unsigned char > & track3
)
```

VCL Override Message Query (28-08). 

**Parameters**: 

  * **track1** - track 1 data returned from VCL, hexadecimal 
  * **track2** - track 2 data returned from VCL, hexadecimal 
  * **track3** - track 3 data returned from VCL, hexadecimal 


**Return**: true in case of success 

For the case of error [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) or [getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) might contain further information. 


### function vclKsnRequest

```cpp
bool vclKsnRequest(
    std::string & ksn
)
```

VCL KSN Request (28-09). 

**Parameters**: 

  * **ksn** KSN in format ans 


**Return**: true in case of success 

For the case of error [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) or [getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) might contain further information. 


### function vclKmailinRequest

```cpp
bool vclKmailinRequest()
```

VCL KMAILIN Request (28-0A). 

**Return**: true in case of success 

Use [getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) or [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) in case of failure.


### function pluginCommand

```cpp
libsdi::SDI_SW12 pluginCommand(
    const unsigned char plugin,
    const unsigned char cmd,
    const std::vector< unsigned char > & data,
    std::vector< unsigned char > & response
)
```

Send a plugin specific command (26-<plugin id>, P2 = <command id>). 

**Parameters**: 

  * **plugin** id of the plugin which is supposed to execute the command (INS) 
  * **cmd** plugin's command id (P2) 
  * **data** command data 
  * **response** entire SDI server response starting with SDI status word, followed by response data from the plugin at offset 2 


**Return**: SDI response status word (SW12) 

### function setManualPAN

```cpp
bool setManualPAN(
    const std::vector< unsigned char > & pan
)
```

PAN injection after manual card data entry on application's side for ISO-0 PIN block. 

**Parameters**: 

  * **pan** PAN from manual card data input (cn ..19, ..10 bytes) 


**Return**: true for success 

**Note**: This command will fail if VOS3-CARDS plugin is not loaded.

### function setManualPAN

```cpp
bool setManualPAN(
    const std::string & pan
)
```

PAN injection after manual card data entry on application's side for ISO-0 PIN block. 

**Parameters**: 

  * **pan** PAN from manual card data input (n ..19) 


**Return**: true for success 

**Note**: This command will fail if VOS3-CARDS plugin is not loaded.

### function performValidationChecks

```cpp
libsdi::SDI_SW12 performValidationChecks(
    std::vector< MatchingRecord > & records,
    const std::vector< unsigned char > & currentDate,
    const unsigned char options =0,
    const std::vector< unsigned char > IIN =std::vector< unsigned char >()
)
```

Perform the validation checks for the current card using the validation table (cardranges.json) stored on the device (29-05). 

**Parameters**: 

  * **records** complete matching table record, first entry in the vector is the best matching record 
  * **currentDate** date (DDMMYY) against which the card is to be checked 
  * **options** option to return all matching card ranges, 0 to return only the best match, 1 to return all matches 
  * **IIN** Issuer Identification Number (IIN), this will be used as alternative for the PAN to find the best match 


**Return**: SW12 returned by the SDI Server 

### function getValidationInfo

```cpp
libsdi::SDI_SW12 getValidationInfo(
    std::string & info
)
```

Perform the get validation info command to get the header information of the validation table file (cardranges.json) stored on the device (29-06). 

**Parameters**: 

  * **info** json string containing the details section of the validation table file 


**Return**: SW12 returned by the SDI Server 

### function sysUploadStart

```cpp
libsdi::SDI_SW12 sysUploadStart(
    const std::string & filename,
    SYSUploadType type,
    bool epp =false
)
```

Start upload of a software package or a configuration file to the SDI Server (20-14). 

**Parameters**: 

  * **filename** filename including extension, mandatory in case of Software Update, not needed for configuration upload 
  * **type** configuration type 
  * **epp** upload destination, false for Countertop, true for EPP 


**Return**: SW12 returned by the SDI Server 

### function sysUploadTransfer

```cpp
libsdi::SDI_SW12 sysUploadTransfer(
    const std::vector< unsigned char > & packet,
    unsigned packet_no,
    bool epp =false
)
```

Transfer data packet to the SDI Server (20-15). 

**Parameters**: 

  * **packet** record data, size is limited to maximum message size of the underlying transport layer 
  * **packet_no** packet number, first packet should be number 1 
  * **epp** upload destination, false for Countertop, true for EPP 


**Return**: SW12 returned by the SDI Server 

### function sysUploadFinalize

```cpp
libsdi::SDI_SW12 sysUploadFinalize(
    const std::vector< unsigned char > * md5 =NULL,
    const std::vector< unsigned char > * mac =NULL,
    bool epp =false
)
```

Start upload of a software package or a configuration file to the SDI Server (20-16). 

**Parameters**: 

  * **md5** MD5 check sum 
  * **mac** MAC of the configuration file 
  * **epp** upload destination, false for Countertop (default), true for EPP 


**Return**: SW12 returned by the SDI Server 

**Note**: For Upload type [SYS_UPLOAD_SOFTWARE_UPDATE](namespacelibsdi.md#enumvalue-sys-upload-software-update) a post installation action might be available and can be accessed with [getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue).

### function sysShutdown

```cpp
bool sysShutdown(
    bool epp =false
)
```

Execute a system shutdown, (20-17, P2 = 00). 

**Parameters**: 

  * **epp** command destination, false for Countertop, true for EPP 


**Return**: true for succcess 

### function sysReboot

```cpp
bool sysReboot(
    bool epp =false
)
```

Execute a system reboot, (20-17, P2 = 01). 

**Parameters**: 

  * **epp** command destination, false for Countertop, true for EPP 


**Return**: true for succcess 

### function sysSleep

```cpp
bool sysSleep(
    bool epp =false
)
```

Execute a system sleep, (20-17, P2 = 02). Not supported on Android. 

**Parameters**: 

  * **epp** command destination, false for Countertop, true for EPP 


**Return**: true for succcess 

### function sysHybernate

```cpp
bool sysHybernate(
    bool epp =false
)
```

Execute a system hybernate, (20-17, P2 = 03). Not supported on Android. 

**Parameters**: 

  * **epp** command destination, false for Countertop, true for EPP 


**Return**: true for succcess 

### function installSponsorCert

```cpp
bool installSponsorCert(
    const std::vector< unsigned char > & cert
)
```

Check and Install a Sponsor Certificate (20-1B). 

**Parameters**: 

  * **cert** sponsor certification DER-encoded X.509 certificate 


**Return**: true for succcess 

### function getLastInstallError

```cpp
bool getLastInstallError(
    std::string & json,
    std::string & bundle,
    std::string & package,
    bool epp =false
)
```

Get last installation error from secure installer (20-1E). 

**Parameters**: 

  * **json** new API output in JSON format. 
  * **bundle** old API output - name of failed bundle 
  * **package** old API output - name of failed package 
  * **epp** true if value shall be read from external PIN pad 


**Return**: true for success 

### function externalButton

```cpp
void externalButton(
    void 
)
```

Send External Button command '20 20' always with P2 = 1 (suppress response) to inform the SDI-Server in Headless Mode that the external button is pressed. 

### function enableEpp

```cpp
bool enableEpp(
    int & status
)
```

Enables a connected EPP (20-21, P2 = 00). 

**Parameters**: 

  * **status** connection states in case of error. Possible values are: 0 -> EPP is disconnected 1 -> EPP Sponsor Id mismatch 2 -> EPP Exchange of certificates failed 3 -> EPP EMV configuration problem 4 -> EPP NFC configuration problem 5 -> EPP SDI configuration problem 


**Return**: true for success 

### function disableEpp

```cpp
bool disableEpp(
    int & status
)
```

Disables a connected EPP (20-21, P2 = 01). 

**Parameters**: 

  * **status** connection states in case of error. Possible values are: 0 -> EPP is disconnected 1 -> EPP Sponsor Id mismatch 2 -> EPP Exchange of certificates failed 3 -> EPP EMV configuration problem 4 -> EPP NFC configuration problem 5 -> EPP SDI configuration problem 


**Return**: true for success 

### function factoryReset

```cpp
bool factoryReset()
```

This command resets SDI server to factory defaults (20-22) 

**Return**: true for success 

### function readCertificate

```cpp
bool readCertificate(
    const std::string & name,
    std::vector< unsigned char > & certificate
)
```

Read Keystore Certificate (20-23) 

**Parameters**: 

  * **name** certificate reference name (DFA500) 
  * **certificate** target buffer for placing the certification in DER format 


### function setUseCurrencyAbbreviation

```cpp
bool setUseCurrencyAbbreviation(
    const unsigned char * currency,
    bool useAbbreviation
)
```

Make [SDI](classlibsdi_1_1_s_d_i.md) use ISO-4217 instead of using a symbol like $ or € 

**Parameters**: 

  * **currency** BCD encoded currency code (ISO-4217) to be configured (5F2A) 
  * **useAbbreviation** true: Use ISO-4217 (3 letters), false: Use symbol (default) 


### function setUseCurrencyAbbreviation

```cpp
bool setUseCurrencyAbbreviation(
    unsigned currency,
    bool useAbbreviation
)
```

Make [SDI](classlibsdi_1_1_s_d_i.md) use ISO-4217 instead of using a symbol like $ or € 

**Parameters**: 

  * **currency** binary currency (ISO-4217) to be configured. Conversion to BCD is applied (5F2A). 
  * **useAbbreviation** true: Use ISO-4217 (3 letters), false: Use symbol (default) 


### function msrSwitchLeds

```cpp
bool msrSwitchLeds(
    int led1,
    int led2,
    int led3,
    int duration
)
```


**Parameters**: 

  * **led1** LED 1 state 
  * **led2** LED 2 state 
  * **led3** LED 3 state 
  * **duration** Lighting duration in seconds. if > 0 all LEDs are switched off after this time. 


Set LED states, see [MSR_SwitchLeds()](msr_8h.md#function-msr-switchleds)


### function msrSetSensitivty

```cpp
bool msrSetSensitivty(
    unsigned char level,
    bool epp =false
)
```

Set MSR sensitivity level. 

**Parameters**: 

  * **level** sensitivity level (DFA039) 
  * **epp** command destination (DFA150), optional, default false 


### function setPrinterProperty

```cpp
enum vfiprt::PrtError setPrinterProperty(
    enum vfiprt::PrtPropertyInt p,
    int value
)
```

Set Integer Printer Property by GUIPRT ADK (25-00, P2 = 00). 

**Parameters**: 

  * **p** integer property identifier 
  * **value** the value of that integer property 


**Return**: value returned by GUIPRT ADK, [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) in case of error 

In case of error [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) is returned and the details can be analyzed by calling [SdiBase::getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12) and SdiBase::getAddtionalResultValue(). 


### function setPrinterProperty

```cpp
enum vfiprt::PrtError setPrinterProperty(
    enum vfiprt::PrtPropertyString p,
    const std::string & value
)
```

Set String Printer Property by GUIPRT ADK (25-00, P2 = 01). 

**Parameters**: 

  * **p** string property identifier 
  * **value** the value of that string property 


**Return**: value returned by GUIPRT ADK, [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) in case of error 

In case of error [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) is returned and the details can be analyzed by calling [SdiBase::getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12) and SdiBase::getAddtionalResultValue(). 


### function getPrinterProperty

```cpp
enum vfiprt::PrtError getPrinterProperty(
    enum vfiprt::PrtPropertyInt p,
    int & value
)
```

Get Integer Printer Property by GUIPRT ADK (25-01, P2 = 00). 

**Parameters**: 

  * **p** integer property identifier 
  * **value** the value of that integer property 


**Return**: value returned by GUIPRT ADK, [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) in case of error 

In case of error [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) is returned and the details can be analyzed by calling [SdiBase::getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12) and SdiBase::getAddtionalResultValue(). 


### function getPrinterProperty

```cpp
enum vfiprt::PrtError getPrinterProperty(
    enum vfiprt::PrtPropertyString p,
    std::string & value
)
```

Get String Printer Property by GUIPRT ADK (25-01, P2 = 01). 

**Parameters**: 

  * **p** string property identifier 
  * **value** the value of that string property 


**Return**: value returned by GUIPRT ADK, [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) in case of error 

In case of error [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) is returned and the details can be analyzed by calling [SdiBase::getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12) and SdiBase::getAddtionalResultValue(). 


### function printHtml

```cpp
enum vfiprt::PrtError printHtml(
    const std::string & html,
    bool landscape =false
)
```

Perform the Print HTML command (25-02). 

**Parameters**: 

  * **html** html string containing the text to print 
  * **landscape** enable landscape printing. default is false 


**Return**: value returned by GUIPRT ADK, [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) in case of error 

### function printBitmap

```cpp
enum vfiprt::PrtError printBitmap(
    const int width,
    const int height,
    const std::vector< unsigned char > & data
)
```

Perform the Print Bitmap command (25-04). 

**Parameters**: 

  * **width** bitmap width in pixel 
  * **height** bitmap height in pixel 
  * **data** bitmap raw data 


**Return**: value returned by GUIPRT ADK, [vfiprt::PRT_FAIL](namespacevfiprt.md#enumvalue-prt-fail) in case of error 

-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
---
title: System interface

---

# System interface



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfisdi::SDIClient::ComponentVersion](structvfisdi_1_1_s_d_i_client_1_1_component_version.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[sysAbort](group__sdisystem.md#function-sysabort)**() |
| int | **[sysGetConfig](group__sdisystem.md#function-sysgetconfig)**(const bytevector & req, bytevector & out) |
| int | **[sysGetCPUID](group__sdisystem.md#function-sysgetcpuid)**(std::string & id) |
| int | **[sysGetSerialNumber](group__sdisystem.md#function-sysgetserialnumber)**(std::string & sn) |
| int | **[sysGetBootSoftwareID](group__sdisystem.md#function-sysgetbootsoftwareid)**(std::string & id) |
| int | **[sysGetApplicationSoftwareID](group__sdisystem.md#function-sysgetapplicationsoftwareid)**(std::string & id) |
| int | **[sysGetHardwareID](group__sdisystem.md#function-sysgethardwareid)**(std::string & id) |
| int | **[sysGetIFMID](group__sdisystem.md#function-sysgetifmid)**(std::string & id) |
| int | **[sysGetEMVL2ID](group__sdisystem.md#function-sysgetemvl2id)**(std::string & id) |
| int | **[sysGetStatus](group__sdisystem.md#function-sysgetstatus)**(const bytevector & req, bytevector & out) |
| int | **[sysGetDateTime](group__sdisystem.md#function-sysgetdatetime)**(unsigned short & year, unsigned char & month, unsigned char & day, unsigned char & hour, unsigned char & minute, unsigned char & second) |
| int | **[sysGetTamperStatus](group__sdisystem.md#function-sysgettamperstatus)**(Array< 9 > & tamper) |
| int | **[sysGetBatteryStatus](group__sdisystem.md#function-sysgetbatterystatus)**(unsigned char & charge_level, unsigned char & charge_status) |
| int | **[sysGetBatteryVoltage](group__sdisystem.md#function-sysgetbatteryvoltage)**(unsigned short & voltage) |
| int | **[sysGetLanguage](group__sdisystem.md#function-sysgetlanguage)**(enum Language & language) |
| int | **[sysGetCVVDeactivation](group__sdisystem.md#function-sysgetcvvdeactivation)**(unsigned char & cfg) |
| int | **[sysGetCardEntryMode](group__sdisystem.md#function-sysgetcardentrymode)**(unsigned char & mode) |
| int | **[sysSetDateTime](group__sdisystem.md#function-syssetdatetime)**(unsigned short year, unsigned char month, unsigned char day, unsigned char hour, unsigned char minute, unsigned char second) |
| int | **[sysSetLanguage](group__sdisystem.md#function-syssetlanguage)**(enum Language language) |
| int | **[sysSetCVVDeactivation](group__sdisystem.md#function-syssetcvvdeactivation)**(unsigned char deactivate) |
| int | **[sysSetCardEntryMode](group__sdisystem.md#function-syssetcardentrymode)**(unsigned char mode) |
| int | **[sysSetDisplayBacklight](group__sdisystem.md#function-syssetdisplaybacklight)**(unsigned char backlight) |
| int | **[sysSetDisplayConstrast](group__sdisystem.md#function-syssetdisplayconstrast)**(unsigned char contrast) |
| int | **[sysGetKSN](group__sdisystem.md#function-sysgetksn)**(KSNSelection which, bytevector & out) |
| int | **[sysAuthStep1](group__sdisystem.md#function-sysauthstep1)**(const Array< 16 > & hostRandom, Array< 32 > & serverData, bytevector & ksn) |
| int | **[sysAuthStep2](group__sdisystem.md#function-sysauthstep2)**(const Array< 32 > & hostData, Array< 32 > & serverData) |
| int | **[sysSetIdleText](group__sdisystem.md#function-syssetidletext)**(const std::string & text) |
| int | **[sysClearIdleText](group__sdisystem.md#function-sysclearidletext)**() |
| int | **[sysUploadBegin](group__sdisystem.md#function-sysuploadbegin)**(const std::string & filename, SYSUploadType type =SYS_UPLOAD_SOFTWARE_UPDATE, int dest =1) |
| int | **[sysUploadData](group__sdisystem.md#function-sysuploaddata)**(const void * packet, unsigned size, int packet_no, int dest =1) |
| int | **[sysUploadEnd](group__sdisystem.md#function-sysuploadend)**(const bytevector * md5 =0, const bytevector * mac =0, int dest =1) |
| int | **[sysUpload](group__sdisystem.md#function-sysupload)**(const std::string & filename, const bytevector & data, SYSUploadType type =SYS_UPLOAD_SOFTWARE_UPDATE, const bytevector * md5 =0, const bytevector * mac =0, int dest =1) |
| int | **[sysShutdown](group__sdisystem.md#function-sysshutdown)**() |
| int | **[sysReboot](group__sdisystem.md#function-sysreboot)**() |
| int | **[sysSleep](group__sdisystem.md#function-syssleep)**() |
| int | **[sysHibernate](group__sdisystem.md#function-syshibernate)**() |
| int | **[sysShowMACDesktop](group__sdisystem.md#function-sysshowmacdesktop)**() |
| int | **[sysSetPropertyString](group__sdisystem.md#function-syssetpropertystring)**(int property, const std::string & in, int dest =1) |
| int | **[sysSetPropertyInt](group__sdisystem.md#function-syssetpropertyint)**(int property, int in, int dest =1) |
| int | **[sysGetPropertyString](group__sdisystem.md#function-sysgetpropertystring)**(int property, std::string & out, int dest =1) |
| int | **[sysGetPropertyInt](group__sdisystem.md#function-sysgetpropertyint)**(int property, int & out, int dest =1) |
| int | **[sysInstallSponsorCert](group__sdisystem.md#function-sysinstallsponsorcert)**(const bytevector & cert) |
| int | **[sysGetSDIVersion](group__sdisystem.md#function-sysgetsdiversion)**(std::vector< ComponentVersion > & info, unsigned char device =1) |
| int | **[sysInstallUpdate](group__sdisystem.md#function-sysinstallupdate)**(SYSUpdateType type) |
| int | **[sysInstallResult](group__sdisystem.md#function-sysinstallresult)**(std::string & result, unsigned char device =1) |
| int | **[sysEnableEPP](group__sdisystem.md#function-sysenableepp)**(bool enable) |
| int | **[sysFactoryReset](group__sdisystem.md#function-sysfactoryreset)**() |
| int | **[sysReadCert](group__sdisystem.md#function-sysreadcert)**(const std::string & name, bytevector & cert) |
| int | **[sysSetCurrencyDisplay](group__sdisystem.md#function-syssetcurrencydisplay)**(enum Currency currency, enum CurrencyDisplay display) |


## Functions Documentation

### function sysAbort

```
int sysAbort()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: Not all commands can be aborted. 

abort the current command in progress (20-02) 


### function sysGetConfig

```
int sysGetConfig(
    const bytevector & req,
    bytevector & out
)
```


**Parameters**: 

  * **req** read request in DOL or COL format 
  * **out** requested configuration parameters 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read configuration parameters. Check the SDI server documentation for details about the DOL and COL format. (20-03) 


### function sysGetCPUID

```
int sysGetCPUID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read CPU unique ID (20-03)


### function sysGetSerialNumber

```
int sysGetSerialNumber(
    std::string & sn
)
```


**Parameters**: 

  * **sn** serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read serial number (20-03)


### function sysGetBootSoftwareID

```
int sysGetBootSoftwareID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read boot software ID (20-03)


### function sysGetApplicationSoftwareID

```
int sysGetApplicationSoftwareID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read application software ID (20-03)


### function sysGetHardwareID

```
int sysGetHardwareID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read hardware ID (20-03)


### function sysGetIFMID

```
int sysGetIFMID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read IFM ID (20-03)


### function sysGetEMVL2ID

```
int sysGetEMVL2ID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read EMV L2 ID (20-03)


### function sysGetStatus

```
int sysGetStatus(
    const bytevector & req,
    bytevector & out
)
```


**Parameters**: 

  * **req** read request in DOL or COL format 
  * **out** device status information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read device status information from PINPad (20-04) 


### function sysGetDateTime

```
int sysGetDateTime(
    unsigned short & year,
    unsigned char & month,
    unsigned char & day,
    unsigned char & hour,
    unsigned char & minute,
    unsigned char & second
)
```


**Parameters**: 

  * **year** year including century (e.g. 2020) 
  * **month** month (1..12) 
  * **day** day (1..31) 
  * **hour** hour (0..23) 
  * **minute** minute (0..59) 
  * **second** second (0..59) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get date and time (20-04) 


### function sysGetTamperStatus

```
int sysGetTamperStatus(
    Array< 9 > & tamper
)
```


**Parameters**: 

  * **tamper** tamper status 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get tamper status (20-04)


### function sysGetBatteryStatus

```
int sysGetBatteryStatus(
    unsigned char & charge_level,
    unsigned char & charge_status
)
```


**Parameters**: 

  * **charge_level** charge level in percent 
  * **charge_status** charge_status: 0: in progress, 1: finished, 2: suspended, 3: error 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get battery status 


### function sysGetBatteryVoltage

```
int sysGetBatteryVoltage(
    unsigned short & voltage
)
```


**Parameters**: 

  * **voltage** battery voltage 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get battery voltage (coin cell) (20-04) 


### function sysGetLanguage

```
int sysGetLanguage(
    enum Language & language
)
```


**Parameters**: 

  * **language** language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get language (20-04) 


### function sysGetCVVDeactivation

```
int sysGetCVVDeactivation(
    unsigned char & cfg
)
```


**Parameters**: 

  * **cfg** Card Entry Value Deactivation 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get CVV deactivation (20-04) 


### function sysGetCardEntryMode

```
int sysGetCardEntryMode(
    unsigned char & mode
)
```


**Parameters**: 

  * **mode** card entry mode 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get card entry mode (20-04) 


### function sysSetDateTime

```
int sysSetDateTime(
    unsigned short year,
    unsigned char month,
    unsigned char day,
    unsigned char hour,
    unsigned char minute,
    unsigned char second
)
```


**Parameters**: 

  * **year** year including century (e.g. 2020) 
  * **month** month (1..12) 
  * **day** day (1..31) 
  * **hour** hour (0..23) 
  * **minute** minute (0..59) 
  * **second** second (0..59) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set date and time (20-09) 


### function sysSetLanguage

```
int sysSetLanguage(
    enum Language language
)
```


**Parameters**: 

  * **language** language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set language (20-09) 


### function sysSetCVVDeactivation

```
int sysSetCVVDeactivation(
    unsigned char deactivate
)
```


**Parameters**: 

  * **deactivate** deactivation value 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set CVV deactivation (20-09) 


### function sysSetCardEntryMode

```
int sysSetCardEntryMode(
    unsigned char mode
)
```


**Parameters**: 

  * **mode** card entry mode 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set card entry mode (20-09) 


### function sysSetDisplayBacklight

```
int sysSetDisplayBacklight(
    unsigned char backlight
)
```


**Parameters**: 

  * **backlight** backlight 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set display backlight (20-09) 


### function sysSetDisplayConstrast

```
int sysSetDisplayConstrast(
    unsigned char contrast
)
```


**Parameters**: 

  * **contrast** contrast 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set display contrast (20-09) 


### function sysGetKSN

```
int sysGetKSN(
    KSNSelection which,
    bytevector & out
)
```


**Parameters**: 

  * **which** selects which KSN to read 
  * **out** read KSN 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read the key serial number (20-10) 


### function sysAuthStep1

```
int sysAuthStep1(
    const Array< 16 > & hostRandom,
    Array< 32 > & serverData,
    bytevector & ksn
)
```


**Parameters**: 

  * **hostRandom** host random number 
  * **serverData** encrypted SDI server data. After decryption contains 16 bytes SDI server token and 16 bytes SDI server random number 
  * **ksn** key serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

mutual auth and session key setup step 1 (20-11) 


### function sysAuthStep2

```
int sysAuthStep2(
    const Array< 32 > & hostData,
    Array< 32 > & serverData
)
```


**Parameters**: 

  * **hostData** encrypted host data 
  * **serverData** encrypted SDI server data. After decryption contains 16 bytes host token and 16 bytes SDI server serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

mutual auth and session key setup step 2 (20-11) 


### function sysSetIdleText

```
int sysSetIdleText(
    const std::string & text
)
```


**Parameters**: 

  * **text** idle text 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set the idle text (20-13) 


### function sysClearIdleText

```
int sysClearIdleText()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

clear the idle text (20-13) 


### function sysUploadBegin

```
int sysUploadBegin(
    const std::string & filename,
    SYSUploadType type =SYS_UPLOAD_SOFTWARE_UPDATE,
    int dest =1
)
```


**Parameters**: 

  * **filename** filename including extension (mandatory in case of software update) 
  * **type** configuration type 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: After a successfull call to [sysUploadBegin()](group__sdisystem.md#function-sysuploadbegin), [sysUploadData()](group__sdisystem.md#function-sysuploaddata) is used to transmit the data in chunks. [sysUploadEnd()](group__sdisystem.md#function-sysuploadend) completes the upload. It must be invoked also if [sysUploadData()](group__sdisystem.md#function-sysuploaddata) reports an error to clean up resources. 

begin software or configuration package upload. (20-14) 


### function sysUploadData

```
int sysUploadData(
    const void * packet,
    unsigned size,
    int packet_no,
    int dest =1
)
```


**Parameters**: 

  * **packet** data chunk 
  * **size** chunk size, the maximum size depends on the protocol type 
  * **packet_no** packet number. The first packet should be number 1 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

upload data chunk (20-15) 


### function sysUploadEnd

```
int sysUploadEnd(
    const bytevector * md5 =0,
    const bytevector * mac =0,
    int dest =1
)
```


**Parameters**: 

  * **md5** optional MD5 checksum or NULL 
  * **mac** optional MAC or NULL 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

finalize software upload (20-16) 


### function sysUpload

```
int sysUpload(
    const std::string & filename,
    const bytevector & data,
    SYSUploadType type =SYS_UPLOAD_SOFTWARE_UPDATE,
    const bytevector * md5 =0,
    const bytevector * mac =0,
    int dest =1
)
```


**Parameters**: 

  * **filename** filename including extension or empty string if not required 
  * **data** data to be uploaded, splitting into data chunks is performed internally 
  * **type** configuration file type 
  * **md5** optional MD5 checksum or NULL 
  * **mac** optional MAC or NULL 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

upload software or configuration, shortcut for sysUploadBegin/Data/End (20-14/20-15/20-16) 


### function sysShutdown

```
int sysShutdown()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

perform system shutdown (20-17) 


### function sysReboot

```
int sysReboot()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

perform system reboot (20-17) 


### function sysSleep

```
int sysSleep()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set system to sleep state (20-17) 


### function sysHibernate

```
int sysHibernate()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set system to hibernate state (20-17) 


### function sysShowMACDesktop

```
int sysShowMACDesktop()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

show MAC desktop (20-18) 


### function sysSetPropertyString

```
int sysSetPropertyString(
    int property,
    const std::string & in,
    int dest =1
)
```


**Parameters**: 

  * **property** property ID ([SYSPropertyString](namespacevfisdi.md#enum-syspropertystring)) 
  * **in** new property value 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set string property (20-19) 


### function sysSetPropertyInt

```
int sysSetPropertyInt(
    int property,
    int in,
    int dest =1
)
```


**Parameters**: 

  * **property** property ID ([SYSPropertyInt](namespacevfisdi.md#enum-syspropertyint)) 
  * **in** new property value 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set int property (20-19) 


### function sysGetPropertyString

```
int sysGetPropertyString(
    int property,
    std::string & out,
    int dest =1
)
```


**Parameters**: 

  * **property** property ID ([SYSPropertyString](namespacevfisdi.md#enum-syspropertystring)) 
  * **out** read property 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read string property (20-1A) 


### function sysGetPropertyInt

```
int sysGetPropertyInt(
    int property,
    int & out,
    int dest =1
)
```


**Parameters**: 

  * **property** property ID ([SYSPropertyInt](namespacevfisdi.md#enum-syspropertyint)) 
  * **out** read property 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read int property (20-1A) 


### function sysInstallSponsorCert

```
int sysInstallSponsorCert(
    const bytevector & cert
)
```


**Parameters**: 

  * **cert** certificate 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

install DER encoded X.509 certficate (20-1B) 


### function sysGetSDIVersion

```
int sysGetSDIVersion(
    std::vector< ComponentVersion > & info,
    unsigned char device =1
)
```


**Parameters**: 

  * **info** array with component version information 
  * **device** device: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get version information of basic SDI components and installed SDI plugins (20-1C) 


### function sysInstallUpdate

```
int sysInstallUpdate(
    SYSUpdateType type
)
```


**Parameters**: 

  * **type** update type 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Install update, that has been uploaded before. (20-1D) 


### function sysInstallResult

```
int sysInstallResult(
    std::string & result,
    unsigned char device =1
)
```


**Parameters**: 

  * **result** JSON string containing installation errors (DFA148) 
  * **device** device: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get installation result (20-1E) 


### function sysEnableEPP

```
int sysEnableEPP(
    bool enable
)
```


**Parameters**: 

  * **enable** if true enable EPP, else disable 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Enable EPP (20-21) 


### function sysFactoryReset

```
int sysFactoryReset()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Trigger factory reset (20-22) 


### function sysReadCert

```
int sysReadCert(
    const std::string & name,
    bytevector & cert
)
```


**Parameters**: 

  * **name** certificate name 
  * **cert** certificate in DER format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read X509 certificate from keystore (20-23) 


### function sysSetCurrencyDisplay

```
int sysSetCurrencyDisplay(
    enum Currency currency,
    enum CurrencyDisplay display
)
```


**Parameters**: 

  * **currency** currency for which to change the setting 
  * **display** display configuration 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

switch whether the currency is displayed using a symbol or an abbreviation for currencies that support it. This setting is persistent. (20-24) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
---
title: ADK-SDI-Client Programmers Guide

---

# ADK-SDI-Client Programmers Guide




# Preface


## Audience

The SDI Server compat client _libsdiclient_ is for existing projects migrating from direct ADK use to SDI server approach.


## Organization

This guide relies on the [ADK-SDI Programmers Guide](./pg_sdi_users_guide.html). For the EMV part see [ADK-EMV Contact Programmers Guide](./pg_emv_contact_users_guide.html) and [ADK-EMV Contactless Programmers Guide](./pg_emv_contactless_users_guide.html). Other details can be found in [ADK-TEC Programmers Guide](./pg_tec_programmers_guide.html), [ADK-MSR Programmers Guide](./pg_msr_programmers_guide.html) and [ADK-NFC Programmers Guide](./pg_nfc_users_guide.html).


# Introduction

libsdiclient provides an API based approach for interfacing the SDI server. It was designed to reuse the EMV-ADK API, its client libraries, libEMV_CT_client and libEMV_CTLS_Client for serialisation. The EMV-ADK client libraries call the shared EMV link libraries that are configured to use SDI mode via libsdiprotocol.

Non-EMV-ADK extensions have been added using the same infrastructure since the SDI server was not able to handle multiple connections at time of design. The original library name was libsdiemvclient which is still available but deprecated. With the extension the new name was introduced: libsdiclient.

For more sample code please refer to EMV Test App from which most examples in this document originate from. You can find its source in VDE sample (ADK full package) in directory doc/vdedemo/EmvTestApp.


# Getting Started


## Dependencies

libsdiclient depends on

* libTLV_Util
* libEMV_CT_Client
* libEMV_CTLS_Client

The static clients call the EMV-ADK link libraries which results in more dependencies to these shared libraries

* libEMV_CT_Link
* libEMV_CTLS_Link
* libTLV_Util
* libsdiprotocol
* libipc
* libipctls
* liblog (Android: libvfilog)

```cpp

# Makefile example based on ADK make rules
# Should be added to applications or libraries using libsdiclient and libsdiprotocol
LIBS += -lsdiclient -lEMV_CT_Client -lEMV_CTLS_Client
LIBS += -lsdiprotocol -lEMV_CT_Link -lEMV_CTLS_Link -lTLV_Util
```


# Programming

Header files of libsdiclient are located in import/<platform>/include/sdiclient. Therefore they are included this way: ```cpp

#include <sdiclient/sdi_emv.h> // for migration of EMV-ADK API
#include <sdiclient/sdi_data.h> // provides SDI_fetchTxnTags
#include <sdiclient/sdi_if.h> // SDI client interface for non-EMV
// #define SDI_NFC_NAMESPACE_ONLY uncomment if applicable
#include <sdiclient/sdi_nfc.h> // compatiblity to NFC_Interface.h
```


## EMV-API

By including sdi_emv.h EMV-ADK API functions are available as SDI counterpart. Their prefix changes from **EMV_** to **SDI_**, e.g. EMV_SetTermData becomes SDI_SetTermData. There are some differences to note:



* On responses with transaction results the SDI Server will hold back card holder sensitive data unless the card's PAN appears to be whitelisted. [SDI_CT_ContinueOffline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-continueoffline) and [SDI_CT_ContinueOnline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-continueonline) have an additional ouput parameter of type EMV_SDI_CT_TRANSRES_STRUCT containing SDI Server added obfuscated data. The same applies to [SDI_CTLS_ContinueOffline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-continueoffline) and [SDI_CTLS_ContinueOnline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-continueonline) with EMV_SDI_CTLS_TRANSRES_STRUCT.



* [SDI_fetchTxnTags()](sdi__data_8h.md#function-sdi-fetchtxntags) replaces both, [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) and [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags). The SDI server will switch to appropriate technology and apply its sensitive data filters.



* [SDI_CT_SmartISO()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-smartiso) and [SDI_CTLS_SmartISO()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-smartiso) as well as [SDI_CT_SER_SmartISO()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-ser-smartiso) and [SDI_CTLS_SER_SmartISO()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-ser-smartiso) are blocked by SDI server and can't be used. For custom direct chip card communication an SDI plugin should be used.


Excerpt from EMV TestApp supporting both, direct ADK and SDI compat client: ```cpp

EMV_ADK_INFO CTLS_fetchTxnTags(unsigned long options, unsigned long* requestedTags, unsigned short noOfRequestedTags, unsigned char* tlvBuffer, unsigned short bufferLength, unsigned short* tlvDataLength )
{
  if(SdiMode) return SDI_fetchTxnTags(options, requestedTags, noOfRequestedTags, tlvBuffer, bufferLength, tlvDataLength);
  else        return EMV_CTLS_fetchTxnTags(options, requestedTags, noOfRequestedTags, tlvBuffer, bufferLength, tlvDataLength);
}

EMV_ADK_INFO CTLS_EndTransaction(unsigned long options)
{
  if(SdiMode) return SDI_CTLS_EndTransaction(options);
  else        return EMV_CTLS_EndTransaction(options);
}
```


## SDI-API

Other SDI-API is provided by [sdi_if.h](sdi__if_8h.md#file-sdi-if.h). Most SDI commands, especially those with fewer parameters are provided by [libsdi::SDI](classlibsdi_1_1_s_d_i.md). In most cases the functions just return a success flag and in case of failure [libsdi::SdiBase::getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12), [libsdi::SdiBase::getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) and [libsdi::SdiBase::getClientError()](classlibsdi_1_1_sdi_base.md#function-getclienterror) can be called for fine-grained error handling. More complex command invocation is performed by instantiation of other [libsdi::SdiBase](classlibsdi_1_1_sdi_base.md) subclasses and calling their setters for providing the input data, then starting command execution and finally invoking getters for accessing the result data from the SDI server response. These are 

* [libsdi::CardDetection](classlibsdi_1_1_card_detection.md) for Technology Selection (SDI class 23) 
* [libsdi::SdiCrypt](classlibsdi_1_1_sdi_crypt.md) for cryptographic and some data interface functions (SDI classes 70 and 29) 
* [libsdi::ManualEntry](classlibsdi_1_1_manual_entry.md) for manual card data input (SDI command 21-02) 
* [libsdi::PED](classlibsdi_1_1_p_e_d.md) for PIN input functions (SDI class 22) 
* [libsdi::Dialog](classlibsdi_1_1_dialog.md) for display control of External PIN pad (SDI class 24) 
* [libsdi::SdiCmd](classlibsdi_1_1_sdi_cmd.md) Generic command for command and tags not (yet) supported by this library


Example: ```cpp

libsdi::SdiCrypt crypt;
crypt.open("myProvider");
crypt.setInitialVector(myIntialVector);
crypt.encrypt(myInputData, myCipherData);
crypt.close();
```

In general libsdiclient does not provide deprecated SDI commands. If other commands are missing because not yet provided here, the [SDI_SendReceive()](sdiprotocol_8h.md#function-sdi-sendreceive) method from libsdiprotocol can be directly called but the input data has to be set up by your application and the output data has to be parsed. There is a **generic** class [libsdi::SdiCmd](classlibsdi_1_1_sdi_cmd.md) supporting convenient getters and setters for TLV based SDI commands.


## NFC-API

The header file [sdi_nfc.h](sdi__nfc_8h.md#file-sdi-nfc.h) has a compiler switch SDI_NFC_NAMESPACE_ONLY that deactivates the NFC-ADK complient function aliases for the case of name conflicts. In case of client side error or negative SDI response the return value will be EMB_APP_COMM_ERROR or VAS_COMM_ERR. In this case the negative SDI SW12 value or the client side error can be read with [libsdi::getNfcSW12()](namespacelibsdi.md#function-getnfcsw12) and [libsdi::getNfcClientError()](namespacelibsdi.md#function-getnfcclienterror).


## VOS3 API

For compatibility reasons these (VOS2-)interfaces are provided on VOS3. Parts of this functionality require VOS3-CARDS plugin. If the plugin is installed SDI is no more P2PE domain.



* ADK-EMV ([ADK-EMV Contact Programmers Guide](./pg_emv_contact_users_guide.html), [ADK-EMV Contactless Programmers Guide](./pg_emv_contactless_users_guide.html)) 
* ADK-TEC ([ADK-TEC Programmers Guide](./pg_tec_programmers_guide.html)) 
* ADK-MSR ([ADK-MSR Programmers Guide](./pg_msr_programmers_guide.html)) 
* ADK-NFC ([ADK-NFC Programmers Guide](./pg_nfc_users_guide.html)) 
* [libsdi::SDI::setManualPAN()](classlibsdi_1_1_s_d_i.md#function-setmanualpan) replaces ADK-SEC [secPutTransactionData()](namespacecom__verifone__seccmd.md#function-secputtransactiondata) for the use case that PAN from manual input is required for ISO-0 PIN block.


## Connection Handling

The connection to the SDI Server is implicitly established when required and will not be closed unless libsdiprotocol's [SDI_Disconnect()](sdiprotocol_8h.md#function-sdi-disconnect) is called. The default destination is 127.0.0.1::12000 but other IP addresses or connection types can be configured with [SDI_ProtocolInit()](sdiprotocol_8h.md#function-sdi-protocolinit)**before** a connection is set-up or [SDI_Disconnect()](sdiprotocol_8h.md#function-sdi-disconnect) can be used to apply a configuration change.

Example 1 - Simple TCP/IP connection: ```cpp

// {"server":{"host":"127.0.0.1","port":12000}}
vfiipc::JSObject server, config;
server("host") = "127.0.0.1";
server("port") = 12000;
config("server") = server;
return SDI_ProtocolInit(0, config.dump().c_str());
```

Example 2 - TLS connection: ```cpp

// {"server":{"ca":["CA_1.pem","CA_2.pem"],"host":"vfi-terminal","port":12000}}
vfiipc::JSObject server, config;
server("host") = "vfi-terminal";
server("port") = 12000;
server("ca")[0] = "CA_1.pem";
server("ca")[1] = "CA_2.pem";
config("server") = server;
return SDI_ProtocolInit(0, config.dump().c_str());
```

Example 3 - Unix Domain Socket connection: ```cpp

// {"server":{"socket":"/tmp/sdi.socket"}}
vfiipc::JSObject server, config;
server("socket") = "/tmp/sdi.socket"
config("server") = server;
return SDI_ProtocolInit(0, config.dump().c_str());
```

Example 4 - Serial connection: ```cpp

// {"server":{"serial":"/dev/ttyACM0"}}
vfiipc::JSObject server, config;
server("serial") = "/dev/ttyACM0"
config("server") = server;
return SDI_ProtocolInit(0, config.dump().c_str());
```


## Sample Code


### Card Detection

The card detection demo code starts all three SDI card detection modes for illustrating the differences.

```cpp

bool startCardDetection(libsdi::CardDetection& cardDetection, unsigned char tech, int variant)
{
    libsdi::CardDetection::DetectionMode mode = libsdi::CardDetection::DETECTION_MODE_BLOCKING;
    if (variant == SDI_BLOCKING)
    {
        mode = libsdi::CardDetection::DETECTION_MODE_BLOCKING;
        SDI_SetDataAvailableCallback(sdiDataAvailableCallback, NULL);
    }
    else if (variant == SDI_POLLING)
    {
        mode = libsdi::CardDetection::DETECTION_MODE_POLLING;
    }
    else if (variant == SDI_CALLBACK)
    {
        mode = libsdi::CardDetection::DETECTION_MODE_CALLBACK;
        cardDetection.setCallback(sdiCardDetectionCallback, NULL);
    }
    cardDetection.setDetectionMode(mode);

    std::vector<unsigned char> ucOptions(16, 0);
    ucOptions[4] = EMV_CT_TRY_PPS|EMV_CT_DETECT_WRONG_ATR;
    cardDetection.setTecStartOptions(ucOptions);

    return cardDetection.startSelection(tech, 30 == 0);
}
```


### Chip Card Processing

After card detection results in CTS_CHIP (contact chip card detected) the card should be powered and in this example the PSE is read. As written above card communications is blocked by SDI server but the EMV TestApp has a plugin that sends a Select PSE command for command id SDI_PLUGIN_SELECT_PSE.

```cpp

unsigned char atr[40];
unsigned long atrLen;
unsigned char status = isSdiMode()
    ? SDI_CT_SmartReset(EMV_CT_TRY_PPS | EMV_CT_DETECT_WRONG_ATR, atr, &atrLen);
    : EMV_CT_SmartReset(EMV_CT_TRY_PPS | EMV_CT_DETECT_WRONG_ATR, atr, &atrLen);

if (status == EMV_ADK_SMART_STATUS_OK)
{
    unsigned short rspLen;
    unsigned char rsp[261];

    APP_TRACE_HEX(atr, atrLen, "ATR: \n");

    unsigned char cmd[] = "\x00\xA4\x04\x00\x0E" "1PAY.SYS.DDF01";
    APP_TRACE_HEX(cmd, sizeof cmd, "CMD: ");

    if (isSdiMode())
    {
        std::vector<unsigned char> inOut;
        libsdi::SDI sdi;
        libsdi::SDI_SW12 sw12 = sdi.pluginCommand(SDI_PLUGIN_ID_EMVTESTAPP,
            SDI_PLUGIN_SELECT_PSE, inOut, inOut);

        if (sw12 == libsdi::SDI_SW12_SUCCESS)
        {
            if (inOut.size() > 2)
            {
                struct BTLVNode root;
                struct BTLVNode* rapdu;
                vBTLVInit(&root, NULL);
                if (iBTLVImport(&root, inOut.data() + 2, inOut.size() - 2, NULL, NULL) == 0
                    && (rapdu = pxBTLVFindTag(&root, "F0/DF01")) != NULL)
                {
                    if (rapdu->uSize > sizeof rsp)
                    {
                        APP_TRACE("R-APDU too long: ", rapdu->uSize);
                        status = EMV_ADK_SMART_STATUS_OVERFLOW;
                    }
                    else
                    {
                        rspLen = (unsigned short) rapdu->uSize;
                        memcpy(rsp, rapdu->pucData, rapdu->uSize);
                    }
                }
                vBTLVClear(&root);
            }
        }
        else
        {
            APP_TRACE("SDI plugin result: %04x", sw12);
            status = (sw12 & 0xFF00) == 0x9000 ? (unsigned char) sw12 : EMV_ADK_SMART_STATUS_EXCHG_ERR;
        }
    }
    else
    {
        status = EMV_CT_SmartISO(0, (unsigned short) sizeof cmd, cmd, &rspLen, rsp, sizeof rsp);
    }
    APP_TRACE("CT_SmartISO returns %d", status);
}
```


## SDI command mapping table


| CLA  | INS  | P1  | P2  | SDI name  | libsdiclient API   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 00  | 00  | 00  | [Sync/Turn On] | _deprecated_ |
| 20  | 01  | 00  | 00  | [Turn Off] | _deprecated_ |
| 20  | 02  | 00  | 00  | [Sys Abort] (with response)  | [SDI_SendSysAbort()](sdiprotocol_8h.md#function-sdi-sendsysabort) |
| 20  | 02  | 00  | 01  | [Sys Abort] (without response)  | _not available_ |
| 20  | 03  | 00  | 00  | [Sys Get Config] | _not available_, instead use [libsdi::SDI::getProperty()](classlibsdi_1_1_s_d_i.md#function-getproperty) |
| 20  | 04  | 00  | 00  | [Sys Get Status] | [libsdi::SDI::getDateTime()](classlibsdi_1_1_s_d_i.md#function-getdatetime), [libsdi::SDI::getLanguage()](classlibsdi_1_1_s_d_i.md#function-getlanguage), [libsdi::SDI::getCardDataEntryDeactivation()](classlibsdi_1_1_s_d_i.md#function-getcarddataentrydeactivation), [libsdi::SDI::getCardDataEntryMode()](classlibsdi_1_1_s_d_i.md#function-getcarddataentrymode) |
| 20  | 05  | 00  | 00  | [Sys Selftest] | _deprecated_ |
| 20  | 09  | 00  | 00  | [Sys Set Status] | [libsdi::SDI::setDateTime()](classlibsdi_1_1_s_d_i.md#function-setdatetime), [libsdi::SDI::setLanguage()](classlibsdi_1_1_s_d_i.md#function-setlanguage), [libsdi::SDI::setCardDataEntryDeactivation()](classlibsdi_1_1_s_d_i.md#function-setcarddataentrydeactivation), [libsdi::SDI::setCardDataEntryMode()](classlibsdi_1_1_s_d_i.md#function-setcarddataentrymode) |
| 20  | 10  | 00  | 00  | [Sys Get KSN] | _not available_ |
| 20  | 11  | 00  | 00  | [Sys Auth] | _not available_ |
| 20  | 13  | 00  | 00  | [Set Idle Text] | [libsdi::SDI::setIdleText()](classlibsdi_1_1_s_d_i.md#function-setidletext) |
| 20  | 14  | 00  | 00  | [Software Upload Start] | [libsdi::SDI::sysUploadStart()](classlibsdi_1_1_s_d_i.md#function-sysuploadstart) |
| 20  | 15  | 00  | 00  | [Software Upload Transfer] | [libsdi::SDI::sysUploadTransfer()](classlibsdi_1_1_s_d_i.md#function-sysuploadtransfer) |
| 20  | 16  | 00  | 00  | [Software Upload Finalize] | [libsdi::SDI::sysUploadFinalize()](classlibsdi_1_1_s_d_i.md#function-sysuploadfinalize) |
| 20  | 17  | 00  | 00  | [Shutdown] | [libsdi::SDI::sysShutdown()](classlibsdi_1_1_s_d_i.md#function-sysshutdown) |
| 20  | 17  | 00  | 01  | [Reboot] | [libsdi::SDI::sysReboot()](classlibsdi_1_1_s_d_i.md#function-sysreboot) |
| 20  | 17  | 00  | 02  | [Sleep] | [libsdi::SDI::sysSleep()](classlibsdi_1_1_s_d_i.md#function-syssleep) |
| 20  | 17  | 00  | 03  | [Hibernate] | [libsdi::SDI::sysHybernate()](classlibsdi_1_1_s_d_i.md#function-syshybernate) |
| 20  | 18  | 00  | 00  | [Show MAC Desktop] | [libsdi::SDI::showMacDesktop()](classlibsdi_1_1_s_d_i.md#function-showmacdesktop) |
| 20  | 19  | 00  | 00  | [Set Property] (Integer)  | [libsdi::SDI::setProperty(vfisysinfo::SYSPropertyInt, int, bool)](classlibsdi_1_1_s_d_i.md#function-setproperty) |
| 20  | 19  | 00  | 01  | [Set Property] (String)  | [libsdi::SDI::setProperty(vfisysinfo::SYSPropertyString, const std::string &, bool)](classlibsdi_1_1_s_d_i.md#function-setproperty) |
| 20  | 1A  | 00  | 00  | [Get Property] (Integer)  | [libsdi::SDI::getProperty(vfisysinfo::SYSPropertyInt, bool)](classlibsdi_1_1_s_d_i.md#function-getproperty)
[libsdi::SDI::getProperty(vfisysinfo::SYSPropertyInt, int&, bool)](classlibsdi_1_1_s_d_i.md#function-getproperty) |
| 20  | 1A  | 00  | 01  | [Get Property] (String)  | [libsdi::SDI::getProperty(vfisysinfo::SYSPropertyString, bool)](classlibsdi_1_1_s_d_i.md#function-getproperty)
[libsdi::SDI::getProperty(vfisysinfo::SYSPropertyString, std::string&, bool)](classlibsdi_1_1_s_d_i.md#function-getproperty) |
| 20  | 18  | 00  | 00  | [Install Sponsor Cert] | [libsdi::SDI::installSponsorCert()](classlibsdi_1_1_s_d_i.md#function-installsponsorcert) |
| 20  | 1C  | 00  | 00  | [Get SDI version info] | [libsdi::SDI::getVersionInfo()](classlibsdi_1_1_s_d_i.md#function-getversioninfo) |
| 20  | 1D  | 00  | 00  | [Check For Update] | [libsdi::SDI::checkForUpdate()](classlibsdi_1_1_s_d_i.md#function-checkforupdate) |
| 20  | 1E  | 00  | 00  | [Get last install error] | [libsdi::SDI::getLastInstallError()](classlibsdi_1_1_s_d_i.md#function-getlastinstallerror) |
| 20  | 20  | 00  | 00  | [External Button] | [libsdi::SDI::externalButton()](classlibsdi_1_1_s_d_i.md#function-externalbutton) |
| 20  | 21  | 00  | 00  | [Enable EPP] | [libsdi::SDI::enableEpp()](classlibsdi_1_1_s_d_i.md#function-enableepp) |
| 20  | 21  | 00  | 01  | [Disable EPP] | [libsdi::SDI::disableEpp()](classlibsdi_1_1_s_d_i.md#function-disableepp) |
| 20  | 22  | 00  | 00  | [Factory Reset] | [libsdi::SDI::factoryReset()](classlibsdi_1_1_s_d_i.md#function-factoryreset) |
| 20  | 23  | 00  | 00  | [Read Keystore Certificate] | [libsdi::SDI::readCertificate()](classlibsdi_1_1_s_d_i.md#function-readcertificate) |
| 20  | 24  | 00  | 00  | [Force Currency Abbreviation] | [libsdi::SDI::setUseCurrencyAbbreviation()](classlibsdi_1_1_s_d_i.md#function-setusecurrencyabbreviation) |
|  |
| 21  | 00  | 00  | 00  | MSR Enable  | _deprecated_ |
| 21  | 01  | 00  | 00  | [MSR Read] | [libsdi::CardDetection::startMsrRead()](classlibsdi_1_1_card_detection.md#function-startmsrread) |
| 21  | 02  | 00  | 00  | [MSR Card Data Entry] | [libsdi::ManualEntry::start()](classlibsdi_1_1_manual_entry.md#function-start) |
| 21  | 03  | 00  | 00  | [MSR Set Options] | [libsdi::CardDetection::msrSetOptions()](classlibsdi_1_1_card_detection.md#function-msrsetoptions) |
| 21  | 04  | 00  | 00  | [MSR Switch LEDs] | [libsdi::SDI::msrSwitchLeds()](classlibsdi_1_1_s_d_i.md#function-msrswitchleds) |
| 21  | 05  | 00  | 00  | [MSR Set Sensitivity] | [libsdi::SDI::msrSetSensitivty()](classlibsdi_1_1_s_d_i.md#function-msrsetsensitivty) |
|  |
| 22  | 00  | 00  | 00  | PED Enable  | _not available_ |
| 22  | 00  | 00  | 01  | PED Disable  | _not available_ |
| 22  | 01  | 00  | 00  | [PED Get PIN] | [libsdi::PED::startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput) |
| 22  | 02  | 00  | 00  | [PED Set PIN Timeout] | [libsdi::PED::setDefaultTimeout()](classlibsdi_1_1_p_e_d.md#function-setdefaulttimeout) |
| 22  | 03  | 00  | 00  | [PED start PIN entry] | [libsdi::PED::startPinEntry()](classlibsdi_1_1_p_e_d.md#function-startpinentry) |
| 22  | 04  | 00  | 00  | [PED poll PIN entry] | [libsdi::PED::pollPinEntry()](classlibsdi_1_1_p_e_d.md#function-pollpinentry) |
| 22  | 05  | 00  | 00  | [PED stop PIN entry] | [libsdi::PED::stopPinEntry()](classlibsdi_1_1_p_e_d.md#function-stoppinentry) |
| 22  | 06  | 00  | 00  | [PED Set PIN Input Parameter] | [libsdi::PED::sendPinInputParameters()](classlibsdi_1_1_p_e_d.md#function-sendpininputparameters) |
|  |
| 23  | 00  | 00  | 00  | Card Detect Enable  | _not available_ |
| 23  | 01  | 00  | NN  | [Card Detection] | [libsdi::CardDetection::startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) |
| 23  | 02  | 00  | 00  | [Wait Card Removal] | [libsdi::SDI::waitCardRemoval()](classlibsdi_1_1_s_d_i.md#function-waitcardremoval)
[libsdi::SDI::sendWaitCardRemoval()](classlibsdi_1_1_s_d_i.md#function-sendwaitcardremoval) |
| 23  | 03  | 00  | 00  | [Start Card Detection] | [libsdi::CardDetection::startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) |
| 23  | 04  | 00  | 00  | [Poll Card Detection] | [libsdi::CardDetection::pollTechnology()](classlibsdi_1_1_card_detection.md#function-polltechnology) |
| 23  | 05  | 00  | 00  | [Stop Card Detection] | [libsdi::CardDetection::stopSelection()](classlibsdi_1_1_card_detection.md#function-stopselection) |
| 23  | 06  | 00  | 00  | [Add Technology] | [libsdi::CardDetection::addTechnology()](classlibsdi_1_1_card_detection.md#function-addtechnology) |
| 23  | 07  | 00  | 00  | [Remove Technology] | [libsdi::CardDetection::removeTechnology()](classlibsdi_1_1_card_detection.md#function-removetechnology) |
| 23  | 08  | 00  | 00  | [Provide Callback Response] | _implicit call_ |
|  |
| 24  | 00  | 00  | 00  | Display Enable  | _deprecated_ |
| 24  | 01  | 00  | 00  | Display Text  | _deprecated_ |
| 24  | 02  | 00  | 00  | Display Text with Confirmation  | _deprecated_ |
| 24  | 03  | 00  | 00  | [Handle Display] | [libsdi::Dialog::display()](classlibsdi_1_1_dialog.md#function-display) |
| 24  | 04  | 00  | 00  | [Handle Secure Input] | [libsdi::Dialog::secureInput()](classlibsdi_1_1_dialog.md#function-secureinput) |
| 24  | 05  | 00  | 00  | [Handle Menu] | [libsdi::Dialog::menu()](classlibsdi_1_1_dialog.md#function-menu) |
| 24  | 06  | 00  | 00  | [Handle Card Request Display] | [libsdi::Dialog::requestCard()](classlibsdi_1_1_dialog.md#function-requestcard) |
| 24  | 07  | 00  | 00  | [Display Idle Screen] | [libsdi::Dialog::idleScreen()](classlibsdi_1_1_dialog.md#function-idlescreen) |
| 24  | 08  | 00  | 00  | [Handle Signature Capture] | [libsdi::Dialog::captureSignature()](classlibsdi_1_1_dialog.md#function-capturesignature) |
| 24  | 09  | 00  | 00  | [Activate LEDs] | [libsdi::Dialog::showLedArea()](classlibsdi_1_1_dialog.md#function-showledarea) |
| 24  | 0A  | 00  | 00  | [Handle HTML Dialog] | [libsdi::Dialog::htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog) |
| 24  | 0B  | 00  | 00  | [Get Async Display Result] | [libsdi::Dialog::getAsyncResult()](classlibsdi_1_1_dialog.md#function-getasyncresult) |
|  |
| 25  | 00  | 00  | 00  | [Set Printer Property (Integer)] | [libsdi::SDI::setPrinterProperty(vfiprt::PrtPropertyInt, int)](classlibsdi_1_1_s_d_i.md#function-setprinterproperty) |
| 25  | 00  | 00  | 01  | [Set Printer Property (String)] | [libsdi::SDI::setPrinterProperty(vfiprt::PrtPropertyString, const std::string&)](classlibsdi_1_1_s_d_i.md#function-setprinterproperty) |
| 25  | 01  | 00  | 00  | [Get Printer Property (Integer)] | [libsdi::SDI::getPrinterProperty(vfiprt::PrtPropertyInt, int&)](classlibsdi_1_1_s_d_i.md#function-getprinterproperty) |
| 25  | 01  | 00  | 01  | [Get Printer Property (String)] | [libsdi::SDI::getPrinterProperty(vfiprt::PrtPropertyString, std::string&)](classlibsdi_1_1_s_d_i.md#function-getprinterproperty) |
| 25  | 02  | 00  | 00  | [Print HTML] | [libsdi::SDI::printHtml()](classlibsdi_1_1_s_d_i.md#function-printhtml) |
| 25  | 04  | 00  | 00  | [Print Bitmap] | [libsdi::SDI::printBitmap()](classlibsdi_1_1_s_d_i.md#function-printbitmap) |
|  |
| 26  |  | 00  |  | [Plugin Interface] | [libsdi::SDI::pluginCommand()](classlibsdi_1_1_s_d_i.md#function-plugincommand) |
|  |
| 28  | 00  | 00  | 00  | [VCL Registart SRED Request] | [libsdi::SDI::vclRegistartSRED()](classlibsdi_1_1_s_d_i.md#function-vclregistartsred) |
| 28  | 01  | 00  | 00  | [VCL Status Request] | [libsdi::SDI::vclStatusRequest()](classlibsdi_1_1_s_d_i.md#function-vclstatusrequest) |
| 28  | 02  | 00  | 00  | [VCL Advance DDK] | [libsdi::SDI::vclAdvanceDDK()](classlibsdi_1_1_s_d_i.md#function-vcladvanceddk) |
| 28  | 03  | 00  | 00  | [VCL Request eParms] | [libsdi::SDI::vclRequestEParms()](classlibsdi_1_1_s_d_i.md#function-vclrequesteparms) |
| 28  | 06  | 00  | 00  | [VCL Request Diag Query] | [libsdi::SDI::vclGetDiagnosticData()](classlibsdi_1_1_s_d_i.md#function-vclgetdiagnosticdata) |
| 28  | 07  | 00  | 00  | [VCL Request Derive Query] | [libsdi::SDI::vclGetKeyDerivationMode()](classlibsdi_1_1_s_d_i.md#function-vclgetkeyderivationmode) |
| 28  | 08  | 00  | 00  | [VCL Override Message Query] | [libsdi::SDI::vclOverrideMessageQuery()](classlibsdi_1_1_s_d_i.md#function-vcloverridemessagequery) |
| 28  | 09  | 00  | 00  | [VCL_KSN_Request] | [libsdi::SDI::vclKsnRequest()](classlibsdi_1_1_s_d_i.md#function-vclksnrequest) |
| 28  | 0A  | 00  | 00  | [VCL KMAILIN Request] | [libsdi::SDI::vclKmailinRequest()](classlibsdi_1_1_s_d_i.md#function-vclkmailinrequest) |
|  |
| 29  | 00  | 00  | 00  | [getEncData] | [libsdi::SdiCrypt::getEncData()](classlibsdi_1_1_sdi_crypt.md#function-getencdata) |
| 29  | 01  | 00  | 00  | [getEncMsgData] | [libsdi::SdiCrypt::getEncMsgData()](classlibsdi_1_1_sdi_crypt.md#function-getencmsgdata) |
| 29  | 02  | 00  | 00  | [fetchTrxTags] | [SDI_fetchTxnTags()](sdi__data_8h.md#function-sdi-fetchtxntags) |
| 29  | 03  | 00  | 00  | [clearDataStore] | [libsdi::SDI::clearDataStore()](classlibsdi_1_1_s_d_i.md#function-cleardatastore) |
| 29  | 04  | 00  | 00  | [getMsgSignature] | [libsdi::SdiCrypt::getMsgSignature()](classlibsdi_1_1_sdi_crypt.md#function-getmsgsignature) |
| 29  | 05  | 00  | 00  | [performValidationChecks] | [libsdi::SDI::performValidationChecks()](classlibsdi_1_1_s_d_i.md#function-performvalidationchecks) |
| 29  | 06  | 00  | 00  | [getValidationInfo] | [libsdi::SDI::getValidationInfo()](classlibsdi_1_1_s_d_i.md#function-getvalidationinfo) |
| 29  | 07  | 00  | 00  | [getEncTrxData] | [libsdi::SdiCrypt::getEncTrxData()](classlibsdi_1_1_sdi_crypt.md#function-getenctrxdata) |
| 29  | 08  | 00  | 00  | [setEncTrxData] | [libsdi::SdiCrypt::setEncTrxData()](classlibsdi_1_1_sdi_crypt.md#function-setenctrxdata) |
| 29  | 09  | 00  | 00  | [endEncTrxData] | [libsdi::SdiCrypt::endEncTrxData()](classlibsdi_1_1_sdi_crypt.md#function-endenctrxdata) |
| 29  | 0A  | 00  | 00  | [getEmvInfo] | _not available_, use EMV API   |
|  |
| 31  | 00  | 00  | 00  | [NFC Ping] | [libsdi::NFC_Ping()](namespacelibsdi.md#function-nfc-ping), [NFC_Ping()](titusstubs_8cpp.md#function-nfc-ping) |
| 31  | 01  | 00  | 00  | [NFC Pass Through Open] | [libsdi::NFC_PT_Open()](namespacelibsdi.md#function-nfc-pt-open), [NFC_PT_Open()](titusstubs_8cpp.md#function-nfc-pt-open) |
| 31  | 02  | 00  | 00  | [NFC Pass Through Close] | [libsdi::NFC_PT_Close()](namespacelibsdi.md#function-nfc-pt-close), [NFC_PT_Close()](titusstubs_8cpp.md#function-nfc-pt-close) |
| 31  | 03  | 00  | 00  | [NFC Pass Through Field On] | [libsdi::NFC_PT_FieldOn()](namespacelibsdi.md#function-nfc-pt-fieldon), [NFC_PT_FieldOn()](titusstubs_8cpp.md#function-nfc-pt-fieldon) |
| 31  | 04  | 00  | 00  | [NFC Pass Through Field Off] | [libsdi::NFC_PT_FieldOff()](namespacelibsdi.md#function-nfc-pt-fieldoff), [NFC_PT_FieldOff()](titusstubs_8cpp.md#function-nfc-pt-fieldoff) |
| 31  | 05  | 00  | 00  | [NFC Pass Through Field Polling] | [libsdi::NFC_PT_Polling()](namespacelibsdi.md#function-nfc-pt-polling), [NFC_PT_Polling()](titusstubs_8cpp.md#function-nfc-pt-polling) |
| 31  | 07  | 00  | 00  | [NFC Pass Through Card Activation] | [libsdi::NFC_PT_Activation()](namespacelibsdi.md#function-nfc-pt-activation), [NFC_PT_Activation()](titusstubs_8cpp.md#function-nfc-pt-activation) |
| 31  | 08  | 00  | 00  | NFC Pass Through RxTx  | _blocked_:[libsdi::NFC_PT_TxRx()](namespacelibsdi.md#function-nfc-pt-txrx), [NFC_PT_TxRx()](titusstubs_8cpp.md#function-nfc-pt-txrx) |
| 31  | 09  | 00  | 00  | [NFC Pass Through Ftech Baud] | [libsdi::NFC_PT_FtechBaud()](namespacelibsdi.md#function-nfc-pt-ftechbaud), [NFC_PT_FtechBaud()](titusstubs_8cpp.md#function-nfc-pt-ftechbaud) |
| 31  | 0A  | 00  | 00  | [NFC Mifare Authenticate] | [libsdi::NFC_Mifare_Authenticate()](namespacelibsdi.md#function-nfc-mifare-authenticate), [NFC_Mifare_Authenticate()](titusstubs_8cpp.md#function-nfc-mifare-authenticate) |
| 31  | 0B  | 00  | 00  | [NFC Mifare Read] | [libsdi::NFC_Mifare_Read()](namespacelibsdi.md#function-nfc-mifare-read), [NFC_Mifare_Read()](titusstubs_8cpp.md#function-nfc-mifare-read) |
| 31  | 0C  | 00  | 00  | [NFC Mifare Write] | [libsdi::NFC_Mifare_Write()](namespacelibsdi.md#function-nfc-mifare-write), [NFC_Mifare_Write()](titusstubs_8cpp.md#function-nfc-mifare-write) |
| 31  | 0D  | 00  | 00  | [NFC Mifare Increment] | [libsdi::NFC_Mifare_Increment()](namespacelibsdi.md#function-nfc-mifare-increment), [NFC_Mifare_Increment()](titusstubs_8cpp.md#function-nfc-mifare-increment) |
| 31  | 0E  | 00  | 00  | [NFC Mifare Decrement] | [libsdi::NFC_Mifare_Decrement()](namespacelibsdi.md#function-nfc-mifare-decrement), [NFC_Mifare_Decrement()](titusstubs_8cpp.md#function-nfc-mifare-decrement) |
| 31  | 0F  | 00  | 00  | [NFC Felica Exchange] | [libsdi::NFC_Felica_Exchange()](namespacelibsdi.md#function-nfc-felica-exchange), [NFC_Felica_Exchange()](titusstubs_8cpp.md#function-nfc-felica-exchange) |
| 31  | 10  | 00  | 00  | [NFC Client Init] | [libsdi::NFC_Client_Init()](namespacelibsdi.md#function-nfc-client-init), [NFC_Client_Init()](sdi__nfc_8h.md#define-nfc-client-init) |
| 31  | 11  | 00  | 00  | [NFC Get Version] | [libsdi::NFC_Get_Version()](namespacelibsdi.md#function-nfc-get-version), [NFC_Get_Version()](titusstubs_8cpp.md#function-nfc-get-version) |
| 31  | 13  | 00  | 00  | [NFC Pass Through Field Polling Full] | [libsdi::NFC_PT_PollingFull()](namespacelibsdi.md#function-nfc-pt-pollingfull), [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull) |
| 31  | 14  | 00  | 00  | [NFC Felica Polling] | [libsdi::NFC_Felica_Polling()](namespacelibsdi.md#function-nfc-felica-polling), [NFC_Felica_Polling()](titusstubs_8cpp.md#function-nfc-felica-polling) |
| 31  | 15  | 00  | 00  | [NFC Mifare Increment Only] | [libsdi::NFC_Mifare_Increment_Only()](namespacelibsdi.md#function-nfc-mifare-increment-only), [NFC_Mifare_Increment_Only()](titusstubs_8cpp.md#function-nfc-mifare-increment-only) |
| 31  | 16  | 00  | 00  | [NFC Mifare Decrement Only] | [libsdi::NFC_Mifare_Decrement_Only()](namespacelibsdi.md#function-nfc-mifare-decrement-only), [NFC_Mifare_Decrement_Only()](titusstubs_8cpp.md#function-nfc-mifare-decrement-only) |
| 31  | 17  | 00  | 00  | [NFC Mifare Transfer] | [libsdi::NFC_Mifare_Transfer()](namespacelibsdi.md#function-nfc-mifare-transfer), [NFC_Mifare_Transfer()](titusstubs_8cpp.md#function-nfc-mifare-transfer) |
| 31  | 18  | 00  | 00  | [NFC Mifare Restore] | [libsdi::NFC_Mifare_Restore()](namespacelibsdi.md#function-nfc-mifare-restore), [NFC_Mifare_Restore()](titusstubs_8cpp.md#function-nfc-mifare-restore) |
| 31  | 1C  | 00  | 00  | [NFC APDU Exchange] | _blocked_, [libsdi::NFC_APDU_Exchange()](namespacelibsdi.md#function-nfc-apdu-exchange), [NFC_APDU_Exchange()](titusstubs_8cpp.md#function-nfc-apdu-exchange) |
|  |
| 32  | 00  | 00  | 00  | [VAS Terminal Config] | [libsdi::NFC_Terminal_Config()](namespacelibsdi.md#function-nfc-terminal-config), [NFC_Terminal_Config()](titusstubs_8cpp.md#function-nfc-terminal-config) |
| 32  | 01  | 00  | 00  | [VAS Terminal Read Config] | [libsdi::NFC_TERMINAL_ReadConfig()](namespacelibsdi.md#function-nfc-terminal-readconfig), [NFC_TERMINAL_ReadConfig()](titusstubs_8cpp.md#function-nfc-terminal-readconfig) |
| 32  | 02  | 00  | 00  | [VAS Read Config] | [libsdi::NFC_VAS_ReadConfig()](namespacelibsdi.md#function-nfc-vas-readconfig), [NFC_VAS_ReadConfig()](titusstubs_8cpp.md#function-nfc-vas-readconfig) |
| 32  | 03  | 00  | 00  | [VAS Activate] | [libsdi::NFC_VAS_Activate()](namespacelibsdi.md#function-nfc-vas-activate), [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate) |
| -  | -  | -  | -  | VAS Cancel  | _not available_,[libsdi::NFC_VAS_Cancel](namespacelibsdi.md#function-nfc-vas-cancel), [NFC_VAS_Cancel()](titusstubs_8cpp.md#function-nfc-vas-cancel) |
| 32  | 05  | 00  | 00  | [VAS Update Config] | [libsdi::NFC_VAS_UpdateConfig()](namespacelibsdi.md#function-nfc-vas-updateconfig), [NFC_VAS_UpdateConfig()](titusstubs_8cpp.md#function-nfc-vas-updateconfig) |
| 32  | 06  | 00  | 00  | [VAS Cancel Config] | [libsdi::NFC_VAS_CancelConfig()](namespacelibsdi.md#function-nfc-vas-cancelconfig), [NFC_VAS_CancelConfig()](titusstubs_8cpp.md#function-nfc-vas-cancelconfig) |
| 32  | 07  | 00  | 00  | [VAS Preload] | [libsdi::NFC_VAS_PreLoad()](namespacelibsdi.md#function-nfc-vas-preload), [NFC_VAS_PreLoad()](titusstubs_8cpp.md#function-nfc-vas-preload) |
| 32  | 08  | 00  | 00  | [VAS Cancel Preload] | [libsdi::NFC_VAS_CancelPreLoad()](namespacelibsdi.md#function-nfc-vas-cancelpreload), [NFC_VAS_CancelPreLoad()](titusstubs_8cpp.md#function-nfc-vas-cancelpreload) |
| 32  | 09  | 00  | 00  | [VAS Decrypt] | [libsdi::NFC_VAS_Decrypt()](namespacelibsdi.md#function-nfc-vas-decrypt), [NFC_VAS_Decrypt()](titusstubs_8cpp.md#function-nfc-vas-decrypt) |
|  |
| 39  | 00  | 00  | 00  | [EMV_CT_Init_Framewerk] | [SDI_CT_Init_Framework()](sdiclient_2client_2sdi__emv_8h.md#define-sdi-ct-init-framework) |
| 39  | 00  | 00  | 01  | [EMV_CT_Exit_Framewerk] | [SDI_CT_Exit_Framework()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-exit-framework) |
| 39  | 01  | 00  | 00  | [EMV_CT_SetTermData] | [SDI_CT_SetTermData()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-settermdata) |
| 39  | 01  | 00  | 01  | [EMV_CT_GetTermData] | [SDI_CT_GetTermData()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-gettermdata) |
| 39  | 02  | 00  | 00  | [EMV_CT_SetAppliData] | [SDI_CT_SetAppliData()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-setapplidata) |
| 39  | 02  | 00  | 01  | [EMV_CT_GetAppliData] | [SDI_CT_GetAppliData()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-getapplidata) |
| 39  | 03  | 00  | 00  | [EMV_CT_StoreCAPKey] | [SDI_CT_StoreCAPKey()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-storecapkey) |
| 39  | 03  | 00  | 01  | [EMV_CT_ReadCAPKeys] | [SDI_CT_ReadCAPKeys()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-readcapkeys) |
| EMV_CT_GetCAPKeyInfo  | [SDI_CT_GetCAPKeyInfo()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-getcapkeyinfo) |
| 39  | 04  | 00  | 00  | [EMV_CT_ApplyConfiguration] | [SDI_CT_ApplyConfiguration()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-applyconfiguration) |
| 39  | 05  | 00  | 00  | EMV_CT_FRAMEWORK_GetVersion  | [SDI_CTLS_FRAMEWORK_GetVersion()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-framework-getversion) |
| -  | -  | -  | -  | EMV_CT_CLIENT_GetVersion  | [SDI_CT_CLIENT_GetVersion()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-client-getversion) |
| 39  | 06  | 00  | 00  | EMV_CT_MapVirtualTerminal  | [SDI_CT_MapVirtualTerminal()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-mapvirtualterminal) |
| 39  | 10  | 00  | 00  | [EMV_CT_StartTransaction] | [SDI_CT_StartTransaction()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-starttransaction) |
| 39  | 11  | 00  | 00  | [EMV_CT_ContinueOffline] | [SDI_CT_ContinueOffline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-continueoffline) |
| 39  | 12  | 00  | 00  | [EMV_CT_ContinueOnline] | [SDI_CT_ContinueOnline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-continueonline) |
| 39  | 13  | 00  | 00  | EMV_CT_updateTxnTags  | [SDI_CT_updateTxnTags()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-updatetxntags) |
| 39  | 14  | 00  | 00  | EMV_CT_fetchTxnTags  | _blocked_, use [SDI_fetchTxnTags()](sdi__data_8h.md#function-sdi-fetchtxntags) |
| 39  | 15  | 00  | 00  | EMV_CT_EndTransaction  | [SDI_CT_EndTransaction()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-endtransaction), [libsdi::SDI::clearDataStore()](classlibsdi_1_1_s_d_i.md#function-cleardatastore) |
| 39  | 16  | 00  | 00  | [EMV_CT_GetCandidateData] | [SDI_CT_GetCandidateData()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-getcandidatedata) |
| 39  | 17  | 00  | 00  | EMV_CT_CheckSupportedAID  | [SDI_CT_CheckSupportedAID()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-checksupportedaid) |
| 39  | 18  | 00  | 00  | EMV_CT_fetchTxnDOL  | _not available_ |
|  |
| 40  | 00  | 00  | 00  | [EMV_CTLS_Init_Framewerk] | [SDI_CTLS_Init_Framework()](sdiclient_2client_2sdi__emv_8h.md#define-sdi-ctls-init-framework) |
| 40  | 00  | 00  | 01  | [EMV_CTLS_Exit_Framewerk] | [SDI_CTLS_Exit_Framework()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-exit-framework) |
| [EMV_CTLS_Exit_Framewerk_extended] | [SDI_CTLS_Exit_Framework_extended()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-exit-framework-extended) |
| 40  | 01  | 00  | 00  | [EMV_CTLS_SetTermData] | [SDI_CTLS_SetTermData()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-settermdata) |
| 40  | 01  | 00  | 01  | [EMV_CTLS_GetTermData] | [SDI_CTLS_GetTermData()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-gettermdata) |
| 40  | 02  | 00  | 00  | [EMV_CTLS_SetAppliDataSchemeSpecific] | [SDI_CTLS_SetAppliDataSchemeSpecific()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-setapplidataschemespecific) |
| 40  | 02  | 00  | 01  | [EMV_CTLS_GetAppliDataSchemeSpecific] | [SDI_CTLS_GetAppliDataSchemeSpecific()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-getapplidataschemespecific) |
| 40  | 03  | 00  | 00  | [EMV_CTLS_StoreCAPKey] | [SDI_CTLS_StoreCAPKey()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-storecapkey) |
| 40  | 03  | 00  | 01  | [EMV_CTLS_ReadCAPKeys] | [SDI_CTLS_ReadCAPKeys()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-readcapkeys) |
| EMV_CTLS_GetCAPKeyInfo  | [SDI_CTLS_GetCAPKeyInfo()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-getcapkeyinfo) |
| 40  | 04  | 00  | 00  | [EMV_CTLS_ApplyConfiguration] | [SDI_CTLS_ApplyConfiguration()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-applyconfiguration) |
| 40  | 05  | 00  | 00  | EMV_CTLS_FRAMEWORK_GetVersion  | [SDI_CTLS_FRAMEWORK_GetVersion()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-framework-getversion) |
| -  | -  | -  | -  | EMV_CTLS_CLIENT_GetVersion  | [SDI_CTLS_CLIENT_GetVersion()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-client-getversion) |
| 40  | 06  | 00  | 00  | EMV_CTLS_MapVirtualTerminal  | [SDI_CTLS_MapVirtualTerminal()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-mapvirtualterminal) |
| 40  | 10  | 00  | 00  | [EMV_CTLS_SetupTransaction] | [SDI_CTLS_SetupTransaction()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-setuptransaction) |
| 40  | 11  | 00  | 00  | [EMV_CTLS_ContinueOffline] | [SDI_CTLS_ContinueOffline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-continueoffline) |
| [EMV_CTLS_ContinueOfflineExt] | [SDI_CTLS_ContinueOfflineExt()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-continueofflineext) |
| 40  | 12  | 00  | 00  | [EMV_CTLS_ContinueOnline] | [SDI_CTLS_ContinueOnline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-continueonline) |
| 40  | 14  | 00  | 00  | EMV_CTLS_fetchTxnTags  | _blocked_, use [SDI_fetchTxnTags()](sdi__data_8h.md#function-sdi-fetchtxntags) |
| 40  | 15  | 00  | 00  | EMV_CTLS_EndTransaction  | [SDI_CTLS_EndTransaction()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-endtransaction), [libsdi::SDI::clearDataStore()](classlibsdi_1_1_s_d_i.md#function-cleardatastore) |
| 40  | 16  | 00  | 00  | [EMV_CTLS_GetCandidateData] | [SDI_CTLS_GetCandidateData()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-getcandidatedata) |
| 40  | 18  | 00  | 00  | EMV_CTLS_fetchTxnDOL  | _not available_ |
| 40  | 20  | 00  | 00  | [EMV_CTLS_Break] | [SDI_CTLS_Break()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-break) |
|  |
| 41  | 00  | 00  | 00  | Smart Card Enable  | _not available_ |
| 41  | 01  | 00  | 00  | [EMV_CT_SmartDetect] | [SDI_CT_SmartDetect()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-smartdetect) |
| 41  | 02  | 00  | 00  | [EMV_CT_SmartReset] | [SDI_CT_SmartReset()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-smartreset) |
| 41  | 03  | 00  | 00  | [EMV_CT_SmartISO] | _blocked_ |
| 41  | 04  | 00  | 00  | [EMV_CT_SmartPowerOff] | [SDI_CT_SmartPowerOff()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-smartpoweroff) |
| 41  | 05  | 00  | 00  | [EMV_CT_Send_PIN_Offline] | [SDI_CT_Send_PIN_Offline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-send-pin-offline) |
| 41  | 09  | 00  | 00  | [EMV_CT_LED] | [SDI_CT_LED()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-led) |
|  |
| 42  | 02  | 00  | 00  | [EMV_CTLS_SmartReset] | [SDI_CTLS_SmartReset()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-smartreset) |
| 42  | 03  | 00  | 00  | [EMV_CTLS_SmartISO] | _blocked_ |
| 42  | 04  | 00  | 00  | [EMV_CTLS_SmartPowerOff] | [SDI_CTLS_SmartPowerOff()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-smartpoweroff) |
| 42  | 0A  | 00  | 00  | [EMV_CTLS_CardRemoval] | [SDI_CTLS_CardRemoval()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-cardremoval) |
|  |
| 43  | 03  | 00  | 00  | [EMV_CTLS_LED] | [SDI_CTLS_LED()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-led) |
| 43  | 04  | 00  | 00  | [EMV_CTLS_LED_SetMode] | [SDI_CTLS_LED_SetMode()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-led-setmode) |
|  |
| 70  | 00  | 00  | 00  | [Crypto Open] | [libsdi::SdiCrypt::open()](classlibsdi_1_1_sdi_crypt.md#function-open) |
| 70  | 01  | 00  | 00  | [Crypto Close] | [libsdi::SdiCrypt::close()](classlibsdi_1_1_sdi_crypt.md#function-close) |
| 70  | 02  | 00  | 00  | [Crypto Encrypt] | [libsdi::SdiCrypt::encrypt()](classlibsdi_1_1_sdi_crypt.md#function-encrypt) |
| 70  | 03  | 00  | 00  | [Crypto Decrypt] | [libsdi::SdiCrypt::decrypt()](classlibsdi_1_1_sdi_crypt.md#function-decrypt) |
| 70  | 04  | 00  | 00  | [Crypto Sign] | [libsdi::SdiCrypt::sign()](classlibsdi_1_1_sdi_crypt.md#function-sign) |
| 70  | 05  | 00  | 00  | [Crypto Verify] | [libsdi::SdiCrypt::verify()](classlibsdi_1_1_sdi_crypt.md#function-verify) |
| 70  | 06  | 00  | 00  | [Crypto Updatekey] | [libsdi::SdiCrypt::updateKey()](classlibsdi_1_1_sdi_crypt.md#function-updatekey) |
| 70  | 07  | 00  | 00  | [Crypto Set Key Set] | [libsdi::SdiCrypt::setKeySetId()](classlibsdi_1_1_sdi_crypt.md#function-setkeysetid) |
| 70  | 08  | 00  | 00  | [Crypto Get encrypted Pin] | [libsdi::SdiCrypt::getEncryptedPin()](classlibsdi_1_1_sdi_crypt.md#function-getencryptedpin) |
| 70  | 09  | 00  | 00  | [Crypto Get Key Inventory] | [libsdi::SdiCrypt::getKeyInventory()](classlibsdi_1_1_sdi_crypt.md#function-getkeyinventory) |
| 70  | 0A  | 00  | 00  | [Crypto Get Key Data] | [libsdi::SdiCrypt::getKeyData()](classlibsdi_1_1_sdi_crypt.md#function-getkeydata) |
| 70  | 0B  | 00  | 00  | [Crypto Get Status] | [libsdi::SdiCrypt::getStatus()](classlibsdi_1_1_sdi_crypt.md#function-getstatus) |
| 70  | 0C  | 00  | 00  | [Crypto Get Versions] | [libsdi::SdiCrypt::getVersions()](classlibsdi_1_1_sdi_crypt.md#function-getversions) |
|  |
| 72  | 00  | 00  | 00  | [Read Certificate] | _not available_ |
| 72  | 01  | 00  | 00  | [RSA Private Key Calculate] | _not available_ |



## Callback Functions

Callbacks sent by SDI Server do not end a running command, instead the client API has to wait for the response. Meanwhile some types callback require a response which blocks the command execution. Therefore libsdiprotocol and libsdiclient support setting callback functions that are called by separate threads. This chapter lists up the SDI callbacks, the way a callback function can be registered and in which context it is invoked.

The Data Available callback is no SDI Server callback but sent once the SDI Server response is available on a command sent out by [SDI_Send()](sdiprotocol_8h.md#function-sdi-send). It is listed here for completeness.

For callback types that do not expect a response the output parameter _sizeOut_ of [SDI_CALLBACK_TYPE](sdiprotocol_8h.md#typedef-sdi-callback-type) has to be set to zero by the callback function.


| SW1  | SW2  | SDI reference  | Registration  | Context   |
|  -------- | -------- | -------- | -------- | -------- |
| 91  | 01  | EMV Callback (contact)  | [SDI_CT_Init_Framework()](sdiclient_2client_2sdi__emv_8h.md#define-sdi-ct-init-framework) | [SDI_CT_StartTransaction()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-starttransaction) and [SDI_CT_ContinueOffline()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ct-continueoffline) in callback mode   |
| 91  | 01  | CTLS Query Callback  | [SDI_CTLS_Init_Framework()](sdiclient_2client_2sdi__emv_8h.md#define-sdi-ctls-init-framework) | [libsdi::CardDetection::startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) with [DETECTION_MODE_BLOCKING](classlibsdi_1_1_card_detection.md#enumvalue-detection-mode-blocking) |
| 9F  |  | Status Callbacks  | [SDI_SetSdiCallback()](sdiprotocol_8h.md#function-sdi-setsdicallback) | [libsdi::PED::startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput), [libsdi::ManualEntry::start()](classlibsdi_1_1_manual_entry.md#function-start) |
| 9B  | 01  | Control Callback  | [SDI_SetSdiCallback()](sdiprotocol_8h.md#function-sdi-setsdicallback) | [libsdi::SDI::performValidationChecks()](classlibsdi_1_1_s_d_i.md#function-performvalidationchecks) |
| 9E  | 01  | Notify Callback  | [SDI_CTLS_Init_Framework()](sdiclient_2client_2sdi__emv_8h.md#define-sdi-ctls-init-framework) | [libsdi::CardDetection::startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) and out of transaction, e.g. LED blinking   |
| 9E  | 02  | Card Detected Callback  | [libsdi::CardDetection::setCallback()](classlibsdi_1_1_card_detection.md#function-setcallback) | [libsdi::CardDetection::startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) with [DETECTION_MODE_CALLBACK](classlibsdi_1_1_card_detection.md#enumvalue-detection-mode-callback) |
| 9E  | 03  | CTLS Query Callback  | [SDI_CTLS_Init_Framework()](sdiclient_2client_2sdi__emv_8h.md#define-sdi-ctls-init-framework) | [libsdi::CardDetection::startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) other than [DETECTION_MODE_BLOCKING](classlibsdi_1_1_card_detection.md#enumvalue-detection-mode-blocking) |
| 9E  | 04  | Card Removal Callback  | [SDI_SetSdiCallback()](sdiprotocol_8h.md#function-sdi-setsdicallback) | hybrid card reader only: [libsdi::CardDetection::startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) (MSR only), [libsdi::CardDetection::startMsrRead()](classlibsdi_1_1_card_detection.md#function-startmsrread) |
| 9D  |  | Navigator Callbacks  | [SDI_SetSdiCallback()](sdiprotocol_8h.md#function-sdi-setsdicallback) | [libsdi::PED::startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput), [libsdi::ManualEntry::start()](classlibsdi_1_1_manual_entry.md#function-start) |
| SW1  | SW2  | Data Available  | [SDI_SetDataAvailableCallback()](sdiprotocol_8h.md#function-sdi-setdataavailablecallback) | [libsdi::PED::startPinInput()](classlibsdi_1_1_p_e_d.md#function-startpininput), [libsdi::ManualEntry::start()](classlibsdi_1_1_manual_entry.md#function-start), [libsdi::CardDetection::startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) with [DETECTION_MODE_BLOCKING](classlibsdi_1_1_card_detection.md#enumvalue-detection-mode-blocking) |

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

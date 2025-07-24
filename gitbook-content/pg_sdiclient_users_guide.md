---
hidden: true
title: ADK-SDI-Client Programmers Guide
---

# Preface <a href="#sec_libsdiclient_preface" id="sec_libsdiclient_preface"></a>

## Audience <a href="#subsec_libsdiclient_audience" id="subsec_libsdiclient_audience"></a>

The SDI Server compat client *libsdiclient* is for existing projects migrating from direct ADK use to SDI server approach.

## Organization <a href="#subsec_libsdiclient_organization" id="subsec_libsdiclient_organization"></a>

This guide relies on the <a href="./pg_sdi_users_guide.md">ADK-SDI Programmers Guide</a>. For the EMV part see <a href="./pg_emv_contact_users_guide.md">ADK-EMV Contact Programmers Guide</a> and <a href="./pg_emv_contactless_users_guide.md">ADK-EMV Contactless Programmers Guide</a>. Other details can be found in <a href="./pg_tec_programmers_guide.md">ADK-TEC Programmers Guide</a>, <a href="./pg_msr_programmers_guide.md">ADK-MSR Programmers Guide</a> and <a href="./pg_nfc_users_guide.md">ADK-NFC Programmers Guide</a>.

# Introduction <a href="#sec_libsdiclient_introduction" id="sec_libsdiclient_introduction"></a>

libsdiclient provides an API based approach for interfacing the SDI server. It was designed to reuse the EMV-ADK API, its client libraries, libEMV_CT_client and libEMV_CTLS_Client for serialisation. The EMV-ADK client libraries call the shared EMV link libraries that are configured to use SDI mode via libsdiprotocol.

Non-EMV-ADK extensions have been added using the same infrastructure since the SDI server was not able to handle multiple connections at time of design. The original library name was libsdiemvclient which is still available but deprecated. With the extension the new name was introduced: libsdiclient.

For more sample code please refer to EMV Test App from which most examples in this document originate from. You can find its source in VDE sample (ADK full package) in directory doc/vdedemo/EmvTestApp.

# Getting Started <a href="#sec_libsdiclient_gettingstartet" id="sec_libsdiclient_gettingstartet"></a>

## Dependencies <a href="#subsec_libsdiclient_dependencie" id="subsec_libsdiclient_dependencie"></a>

libsdiclient depends on

- libTLV_Util
- libEMV_CT_Client
- libEMV_CTLS_Client

The static clients call the EMV-ADK link libraries which results in more dependencies to these shared libraries

- libEMV_CT_Link
- libEMV_CTLS_Link
- libTLV_Util
- libsdiprotocol
- libipc
- libipctls
- liblog (Android: libvfilog)

``` cpp
# Makefile example based on ADK make rules
# Should be added to applications or libraries using libsdiclient and libsdiprotocol
LIBS += -lsdiclient -lEMV_CT_Client -lEMV_CTLS_Client
LIBS += -lsdiprotocol -lEMV_CT_Link -lEMV_CTLS_Link -lTLV_Util
```

# Programming <a href="#sec_libsdiclient_programming" id="sec_libsdiclient_programming"></a>

Header files of libsdiclient are located in import/\<platform\>/include/sdiclient. Therefore they are included this way:

``` cpp
#include <sdiclient/sdi_emv.h> // for migration of EMV-ADK API
#include <sdiclient/sdi_data.h> // provides SDI_fetchTxnTags
#include <sdiclient/sdi_if.h> // SDI client interface for non-EMV
// #define SDI_NFC_NAMESPACE_ONLY uncomment if applicable
#include <sdiclient/sdi_nfc.h> // compatiblity to NFC_Interface.h
```

## EMV-API <a href="#subsec_libsdiclient_emv" id="subsec_libsdiclient_emv"></a>

By including sdi_emv.h EMV-ADK API functions are available as SDI counterpart. Their prefix changes from **EMV\_** to **SDI\_**, e.g. EMV_SetTermData becomes SDI_SetTermData. There are some differences to note:

- On responses with transaction results the SDI Server will hold back card holder sensitive data unless the card\'s PAN appears to be whitelisted. <a href="sdiclient_2client_2sdi__emv_8h.md#a3c717f500d88355431c389b9278ee2d2">SDI_CT_ContinueOffline()</a> and <a href="sdiclient_2client_2sdi__emv_8h.md#a9916bb98ecefc1525293662b1f635d7e">SDI_CT_ContinueOnline()</a> have an additional ouput parameter of type EMV_SDI_CT_TRANSRES_STRUCT containing SDI Server added obfuscated data. The same applies to <a href="sdiclient_2client_2sdi__emv_8h.md#a8f840b23f10cfd012035529a742da311">SDI_CTLS_ContinueOffline()</a> and <a href="sdiclient_2client_2sdi__emv_8h.md#a0ec21e60d70435450c5ecbf0b6cec8da">SDI_CTLS_ContinueOnline()</a> with EMV_SDI_CTLS_TRANSRES_STRUCT.

&nbsp;

- <a href="sdi__data_8h.md#aa0964da27a7a19aaae21a423f330af83">SDI_fetchTxnTags()</a> replaces both, <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags()</a> and <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a>. The SDI server will switch to appropriate technology and apply its sensitive data filters.

&nbsp;

- <a href="sdiclient_2client_2sdi__emv_8h.md#a9e40db3cda39667912f7fb665efb1827">SDI_CT_SmartISO()</a> and <a href="sdiclient_2client_2sdi__emv_8h.md#ac1650604f4ce6c911b1e6a9d33f5e2f4">SDI_CTLS_SmartISO()</a> as well as <a href="sdiclient_2client_2sdi__emv_8h.md#a89d92655babbd308231f10093e8c45a2">SDI_CT_SER_SmartISO()</a> and <a href="sdiclient_2client_2sdi__emv_8h.md#a9cbf5c78570ce455e95c9949014700cb">SDI_CTLS_SER_SmartISO()</a> are blocked by SDI server and can\'t be used. For custom direct chip card communication an SDI plugin should be used.

Excerpt from EMV TestApp supporting both, direct ADK and SDI compat client:

``` cpp
EMV_ADK_INFO CTLS_fetchTxnTags(unsigned long options, unsigned long* requestedTags, unsigned short noOfRequestedTags, unsigned char* tlvBuffer, unsigned short bufferLength, unsigned short* tlvDataLength )
{
  if(SdiMode) return SDI_fetchTxnTags(options, requestedTags, noOfRequestedTags, tlvBuffer, bufferLength, tlvDataLength);
  else return EMV_CTLS_fetchTxnTags(options, requestedTags, noOfRequestedTags, tlvBuffer, bufferLength, tlvDataLength);
}
EMV_ADK_INFO CTLS_EndTransaction(unsigned long options)
{
  if(SdiMode) return SDI_CTLS_EndTransaction(options);
  else return EMV_CTLS_EndTransaction(options);
}
```

## SDI-API <a href="#subsec_libsdiclient_sdi" id="subsec_libsdiclient_sdi"></a>

Other SDI-API is provided by <a href="sdi__if_8h.md">sdi_if.h</a>. Most SDI commands, especially those with fewer parameters are provided by <a href="classlibsdi_1_1_s_d_i.md">libsdi::SDI</a>. In most cases the functions just return a success flag and in case of failure <a href="classlibsdi_1_1_sdi_base.md#a4058a7890507b92a38f3921ff4bf863b">libsdi::SdiBase::getSdiSw12()</a>, <a href="classlibsdi_1_1_sdi_base.md#a03cfc4186ba19fa866f27a0c12dbb4ad">libsdi::SdiBase::getAdditionalResultValue()</a> and <a href="classlibsdi_1_1_sdi_base.md#a167a672bfb8c6f222c4b2a255b053aec">libsdi::SdiBase::getClientError()</a> can be called for fine-grained error handling. More complex command invocation is performed by instantiation of other <a href="classlibsdi_1_1_sdi_base.md">libsdi::SdiBase</a> subclasses and calling their setters for providing the input data, then starting command execution and finally invoking getters for accessing the result data from the SDI server response. These are

- <a href="classlibsdi_1_1_card_detection.md">libsdi::CardDetection</a> for Technology Selection (SDI class 23)
- <a href="classlibsdi_1_1_sdi_crypt.md">libsdi::SdiCrypt</a> for cryptographic and some data interface functions (SDI classes 70 and 29)
- <a href="classlibsdi_1_1_manual_entry.md">libsdi::ManualEntry</a> for manual card data input (SDI command 21-02)
- <a href="classlibsdi_1_1_p_e_d.md">libsdi::PED</a> for PIN input functions (SDI class 22)
- <a href="classlibsdi_1_1_dialog.md">libsdi::Dialog</a> for display control of External PIN pad (SDI class 24)
- <a href="classlibsdi_1_1_sdi_cmd.md">libsdi::SdiCmd</a> Generic command for command and tags not (yet) supported by this library

Example:

``` cpp
libsdi::SdiCrypt crypt;
crypt.open("myProvider");
crypt.setInitialVector(myIntialVector);
crypt.encrypt(myInputData, myCipherData);
crypt.close();
```

{% hint style="info" %}
In general libsdiclient does not provide deprecated SDI commands. If other commands are missing because not yet provided here, the <a href="sdiprotocol_8h.md#a4aa2844124e589c89fd41fca774e21fe">SDI_SendReceive()</a> method from libsdiprotocol can be directly called but the input data has to be set up by your application and the output data has to be parsed. There is a **generic** class <a href="classlibsdi_1_1_sdi_cmd.md">libsdi::SdiCmd</a> supporting convenient getters and setters for TLV based SDI commands.
{% endhint %}

## NFC-API <a href="#subsec_libsdiclient_nfc" id="subsec_libsdiclient_nfc"></a>

The header file <a href="sdi__nfc_8h.md">sdi_nfc.h</a> has a compiler switch SDI_NFC_NAMESPACE_ONLY that deactivates the NFC-ADK complient function aliases for the case of name conflicts. In case of client side error or negative SDI response the return value will be EMB_APP_COMM_ERROR or VAS_COMM_ERR. In this case the negative SDI SW12 value or the client side error can be read with <a href="namespacelibsdi.md#a3b0818635e2caaab3b2f98370fb37d16">libsdi::getNfcSW12()</a> and <a href="namespacelibsdi.md#a22b6870acf257e81edc02ef0942b98ed">libsdi::getNfcClientError()</a>.

## VOS3 API <a href="#subsec_libsdiclient_vos3" id="subsec_libsdiclient_vos3"></a>

For compatibility reasons these (VOS2-)interfaces are provided on VOS3. Parts of this functionality require VOS3-CARDS plugin.

{% hint style="info" %}
If the plugin is installed SDI is no more P2PE domain.
{% endhint %}

- ADK-EMV (<a href="./pg_emv_contact_users_guide.md">ADK-EMV Contact Programmers Guide</a>, <a href="./pg_emv_contactless_users_guide.md">ADK-EMV Contactless Programmers Guide</a>)
- ADK-TEC (<a href="./pg_tec_programmers_guide.md">ADK-TEC Programmers Guide</a>)
- ADK-MSR (<a href="./pg_msr_programmers_guide.md">ADK-MSR Programmers Guide</a>)
- ADK-NFC (<a href="./pg_nfc_users_guide.md">ADK-NFC Programmers Guide</a>)
- <a href="classlibsdi_1_1_s_d_i.md#a9adf9253959686cdf6cd04a42a168ba1">libsdi::SDI::setManualPAN()</a> replaces ADK-SEC <a href="namespacecom__verifone__seccmd.md#a6bc0d39e1739680282d33d3d68df84c9">secPutTransactionData()</a> for the use case that PAN from manual input is required for ISO-0 PIN block.

## Connection Handling <a href="#subsec_libsdiclient_connection" id="subsec_libsdiclient_connection"></a>

The connection to the SDI Server is implicitly established when required and will not be closed unless libsdiprotocol\'s <a href="sdiprotocol_8h.md#a665e7f44cf329b0222d9ee8b624fc32c">SDI_Disconnect()</a> is called. The default destination is 127.0.0.1::12000 but other IP addresses or connection types can be configured with <a href="sdiprotocol_8h.md#abca943173d2f57b9d5aea916fa37d010">SDI_ProtocolInit()</a> **before** a connection is set-up or <a href="sdiprotocol_8h.md#a665e7f44cf329b0222d9ee8b624fc32c">SDI_Disconnect()</a> can be used to apply a configuration change.

Example 1 - Simple TCP/IP connection:

``` cpp
// {"server":{"host":"127.0.0.1","port":12000}}
vfiipc::JSObject server, config;
server("host") = "127.0.0.1";
server("port") = 12000;
config("server") = server;
return SDI_ProtocolInit(0, config.dump().c_str());
```

Example 2 - TLS connection:

``` cpp
// {"server":{"ca":["CA_1.pem","CA_2.pem"],"host":"vfi-terminal","port":12000}}
vfiipc::JSObject server, config;
server("host") = "vfi-terminal";
server("port") = 12000;
server("ca")[0] = "CA_1.pem";
server("ca")[1] = "CA_2.pem";
config("server") = server;
return SDI_ProtocolInit(0, config.dump().c_str());
```

Example 3 - Unix Domain Socket connection:

``` cpp
// {"server":{"socket":"/tmp/sdi.socket"}}
vfiipc::JSObject server, config;
server("socket") = "/tmp/sdi.socket"
config("server") = server;
return SDI_ProtocolInit(0, config.dump().c_str());
```

Example 4 - Serial connection:

``` cpp
// {"server":{"serial":"/dev/ttyACM0"}}
vfiipc::JSObject server, config;
server("serial") = "/dev/ttyACM0"
config("server") = server;
return SDI_ProtocolInit(0, config.dump().c_str());
```

## Sample Code <a href="#subsec_libsdiclient_samplecode" id="subsec_libsdiclient_samplecode"></a>

### Card Detection <a href="#subsubsec_libsdiclient_carddetection" id="subsubsec_libsdiclient_carddetection"></a>

The card detection demo code starts all three SDI card detection modes for illustrating the differences.

``` cpp
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

### Chip Card Processing <a href="#subsubsec_libsdiclient_chipcardprocessing" id="subsubsec_libsdiclient_chipcardprocessing"></a>

After card detection results in CTS_CHIP (contact chip card detected) the card should be powered and in this example the PSE is read. As written above card communications is blocked by SDI server but the EMV TestApp has a plugin that sends a Select PSE command for command id SDI_PLUGIN_SELECT_PSE.

``` cpp
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

## SDI command mapping table <a href="#subsec_libsdiclient_sdicommandmapping" id="subsec_libsdiclient_sdicommandmapping"></a>

| CLA | INS | P1 | P2 | SDI name | libsdiclient API |
|----|----|----|----|----|----|
| <p>20</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sync_turn_on">Sync/Turn On</a></p> | <p>*deprecated*</p> |
| <p>20</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sync_turn_off">Turn Off</a></p> | <p>*deprecated*</p> |
| <p>20</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_abort">Sys Abort</a> (with response)</p> | <p><a href="sdiprotocol_8h.md#a7ce1c5445e39ce0a025fe20b1ccfd988">SDI_SendSysAbort()</a></p> |
| <p>20</p> | <p>02</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_abort">Sys Abort</a> (without response)</p> | <p>*not available*</p> |
| <p>20</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_get_config">Sys Get Config</a></p> | <p>*not available*, instead use <a href="classlibsdi_1_1_s_d_i.md#a2aca042320f064763951085726f0f761">libsdi::SDI::getProperty()</a></p> |
| <p>20</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_get_status">Sys Get Status</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a15781f01b66e81a07c61124067d278d0">libsdi::SDI::getDateTime()</a>, <a href="classlibsdi_1_1_s_d_i.md#a30396af1c4d6d99cb8185f189a6c8b74">libsdi::SDI::getLanguage()</a>, <a href="classlibsdi_1_1_s_d_i.md#afe1b485e3a9eb6bed1a69ad4b248e0c2">libsdi::SDI::getCardDataEntryDeactivation()</a>, <a href="classlibsdi_1_1_s_d_i.md#a691380011de69e7e593620d99a34a2b2">libsdi::SDI::getCardDataEntryMode()</a></p> |
| <p>20</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_selftest">Sys Selftest</a></p> | <p>*deprecated*</p> |
| <p>20</p> | <p>09</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_set_status">Sys Set Status</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a7bd5eb46020f8c2248088d36f13cd647">libsdi::SDI::setDateTime()</a>, <a href="classlibsdi_1_1_s_d_i.md#acbeb2c3d60685bea672b93376256ba23">libsdi::SDI::setLanguage()</a>, <a href="classlibsdi_1_1_s_d_i.md#a941a9ad9c11238b150159b3d7b3be0c3">libsdi::SDI::setCardDataEntryDeactivation()</a>, <a href="classlibsdi_1_1_s_d_i.md#aced223b555ef96db5090d8828c0446b2">libsdi::SDI::setCardDataEntryMode()</a></p> |
| <p>20</p> | <p>10</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_get_ksn">Sys Get KSN</a></p> | <p>*not available*</p> |
| <p>20</p> | <p>11</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_auth">Sys Auth</a></p> | <p>*not available*</p> |
| <p>20</p> | <p>13</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_set_idle_text">Set Idle Text</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a4fc12918919cb213d03019f140c21336">libsdi::SDI::setIdleText()</a></p> |
| <p>20</p> | <p>14</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#para_sdi_sys_software_upload_start">Software Upload Start</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ac63326457e5820ce93d974a7b7cfc00f">libsdi::SDI::sysUploadStart()</a></p> |
| <p>20</p> | <p>15</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#para_sdi_sys_software_upload_transfer">Software Upload Transfer</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a90ce3c5bc7e32c0d407bce3b122e4086">libsdi::SDI::sysUploadTransfer()</a></p> |
| <p>20</p> | <p>16</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#para_sdi_sys_software_upload_finalize">Software Upload Finalize</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a5aecfd4391c93a9240917737f3e4b073">libsdi::SDI::sysUploadFinalize()</a></p> |
| <p>20</p> | <p>17</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_shutdown_reboot_sleep">Shutdown</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a98482392d659a41ad8f6a418f320da73">libsdi::SDI::sysShutdown()</a></p> |
| <p>20</p> | <p>17</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_shutdown_reboot_sleep">Reboot</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a65e916ec5e65ef99f09dcc70250d1526">libsdi::SDI::sysReboot()</a></p> |
| <p>20</p> | <p>17</p> | <p>00</p> | <p>02</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_shutdown_reboot_sleep">Sleep</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#afa793fcaac5240500157fcf7ef457779">libsdi::SDI::sysSleep()</a></p> |
| <p>20</p> | <p>17</p> | <p>00</p> | <p>03</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_shutdown_reboot_sleep">Hibernate</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ad5ce6e20c60d9e3e6d36d64ccf187a50">libsdi::SDI::sysHybernate()</a></p> |
| <p>20</p> | <p>18</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_show_mac_desktop">Show MAC Desktop</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#aaaf4e185d5f11a4571983d979672553a">libsdi::SDI::showMacDesktop()</a></p> |
| <p>20</p> | <p>19</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_set_property">Set Property</a> (Integer)</p> | <p><a href="classlibsdi_1_1_s_d_i.md#abc1d1d67dc87829f3bd31f315577b632">libsdi::SDI::setProperty(vfisysinfo::SYSPropertyInt, int, bool)</a></p> |
| <p>20</p> | <p>19</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_set_property">Set Property</a> (String)</p> | <p><a href="classlibsdi_1_1_s_d_i.md#a6c65079ae10362180b3e2cab5f3bbd18">libsdi::SDI::setProperty(vfisysinfo::SYSPropertyString, const std::string &, bool)</a></p> |
| <p>20</p> | <p>1A</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_get_property">Get Property</a> (Integer)</p> | <p><a href="classlibsdi_1_1_s_d_i.md#a2aca042320f064763951085726f0f761">libsdi::SDI::getProperty(vfisysinfo::SYSPropertyInt, bool)</a><br/><a href="classlibsdi_1_1_s_d_i.md#a4705eca770cacc9829e3f60e8fc49054">libsdi::SDI::getProperty(vfisysinfo::SYSPropertyInt, int&, bool)</a></p> |
| <p>20</p> | <p>1A</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_get_property">Get Property</a> (String)</p> | <p><a href="classlibsdi_1_1_s_d_i.md#a10091b838a73997e87c6cb7ee2d572ff">libsdi::SDI::getProperty(vfisysinfo::SYSPropertyString, bool)</a><br/><a href="classlibsdi_1_1_s_d_i.md#a00189ec34f481a6a9527bc149f6d8ed6">libsdi::SDI::getProperty(vfisysinfo::SYSPropertyString, std::string&, bool)</a></p> |
| <p>20</p> | <p>18</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_show_mac_desktop">Install Sponsor Cert</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#aa4ea51ced9b2affc12687ab2f03959bb">libsdi::SDI::installSponsorCert()</a></p> |
| <p>20</p> | <p>1C</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_get_version_info">Get SDI version info</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a05d9381d18c66001110ff125f9b8fe9e">libsdi::SDI::getVersionInfo()</a></p> |
| <p>20</p> | <p>1D</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#para_sdi_sys_software_check_update">Check For Update</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a6ab3e8fc45d07275607654fb738dd8c3">libsdi::SDI::checkForUpdate()</a></p> |
| <p>20</p> | <p>1E</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_get_last_install_error">Get last install error</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a6135caccb89e4aa48b0df7106f2e9f97">libsdi::SDI::getLastInstallError()</a></p> |
| <p>20</p> | <p>20</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_external_button">External Button</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a722ba5f41a2b506f89e3bc446d6aeabd">libsdi::SDI::externalButton()</a></p> |
| <p>20</p> | <p>21</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_enable_epp">Enable EPP</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ac278a950191d5e0d23d3b752ad9eaf04">libsdi::SDI::enableEpp()</a></p> |
| <p>20</p> | <p>21</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_enable_epp">Disable EPP</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a3ffe1f09009b4e4f915ba920b61541b2">libsdi::SDI::disableEpp()</a></p> |
| <p>20</p> | <p>22</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_factory_reset">Factory Reset</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a74e599790e3ef458f6b11e42c12fa9b5">libsdi::SDI::factoryReset()</a></p> |
| <p>20</p> | <p>23</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_read_certificate">Read Keystore Certificate</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a9233675532dc75c48289bb0aa42241fe">libsdi::SDI::readCertificate()</a></p> |
| <p>20</p> | <p>24</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_sys_force_currency_abbreviation">Force Currency Abbreviation</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a54b90d74ca898415489a782f231e9080">libsdi::SDI::setUseCurrencyAbbreviation()</a></p> |
|  |  |  |  |  |  |
| <p>21</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p>MSR Enable</p> | <p>*deprecated*</p> |
| <p>21</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_msr_read">MSR Read</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#a5d4d9b3d1806fd63f22f8d0cf1f8ff36">libsdi::CardDetection::startMsrRead()</a></p> |
| <p>21</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_msr_card_data_entry">MSR Card Data Entry</a></p> | <p><a href="classlibsdi_1_1_manual_entry.md#ac92d3b835636641550b12b0f93daf21d">libsdi::ManualEntry::start()</a></p> |
| <p>21</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_msr_set_options">MSR Set Options</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#a065d25439941338d5f4c36cbb528ca6b">libsdi::CardDetection::msrSetOptions()</a></p> |
| <p>21</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_msr_switch_leds">MSR Switch LEDs</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ae00fb39999cbdb8a8a2936ffb6e59ba0">libsdi::SDI::msrSwitchLeds()</a></p> |
| <p>21</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_msr_set_sensitivity">MSR Set Sensitivity</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ab81230da298c92fc2af63f2aeae58f6f">libsdi::SDI::msrSetSensitivty()</a></p> |
|  |  |  |  |  |  |
| <p>22</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p>PED Enable</p> | <p>*not available*</p> |
| <p>22</p> | <p>00</p> | <p>00</p> | <p>01</p> | <p>PED Disable</p> | <p>*not available*</p> |
| <p>22</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_ped_get_pin">PED Get PIN</a></p> | <p><a href="classlibsdi_1_1_p_e_d.md#a72d4729d98f034d6d1de480fd7ead4c4">libsdi::PED::startPinInput()</a></p> |
| <p>22</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_ped_set_pin_timeout">PED Set PIN Timeout</a></p> | <p><a href="classlibsdi_1_1_p_e_d.md#a13e92404ba1a5650243c23613f2c8fbf">libsdi::PED::setDefaultTimeout()</a></p> |
| <p>22</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_ped_start_pin">PED start PIN entry</a></p> | <p><a href="classlibsdi_1_1_p_e_d.md#a54143c9cc693d00b948f64b3372cb4bc">libsdi::PED::startPinEntry()</a></p> |
| <p>22</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_ped_poll_pin">PED poll PIN entry</a></p> | <p><a href="classlibsdi_1_1_p_e_d.md#a38a6450328edc2164a74cf4fda14c79c">libsdi::PED::pollPinEntry()</a></p> |
| <p>22</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_ped_stop_pin">PED stop PIN entry</a></p> | <p><a href="classlibsdi_1_1_p_e_d.md#a04d8e1713192151774e9bc1692ffbf3c">libsdi::PED::stopPinEntry()</a></p> |
| <p>22</p> | <p>06</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_ped_set_pin_input_parameter">PED Set PIN Input Parameter</a></p> | <p><a href="classlibsdi_1_1_p_e_d.md#a2dd6e63a41be7826b4a7d7fcc54b26bd">libsdi::PED::sendPinInputParameters()</a></p> |
|  |  |  |  |  |  |
| <p>23</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p>Card Detect Enable</p> | <p>*not available*</p> |
| <p>23</p> | <p>01</p> | <p>00</p> | <p>NN</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_card_detection">Card Detection</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#abd641215dab1399373c2ab31e74e8343">libsdi::CardDetection::startSelection()</a></p> |
| <p>23</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_wait_card_removal">Wait Card Removal</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a4bdd17ae8d9185a0be2ef4e2a1d2903b">libsdi::SDI::waitCardRemoval()</a><br/><a href="classlibsdi_1_1_s_d_i.md#a841f782b6c4d139914f3a2370837689f">libsdi::SDI::sendWaitCardRemoval()</a></p> |
| <p>23</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_start_card_detection">Start Card Detection</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#abd641215dab1399373c2ab31e74e8343">libsdi::CardDetection::startSelection()</a></p> |
| <p>23</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_poll_card_detection">Poll Card Detection</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#ac8badf7309b3dec37c15fb5df3adfc8c">libsdi::CardDetection::pollTechnology()</a></p> |
| <p>23</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_stop_card_detection">Stop Card Detection</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#a1eab262c8c87517bc6d62fe11b5f0927">libsdi::CardDetection::stopSelection()</a></p> |
| <p>23</p> | <p>06</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_add_technology">Add Technology</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#a7ccceaf4350919543165633cbadf7ad2">libsdi::CardDetection::addTechnology()</a></p> |
| <p>23</p> | <p>07</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_remove_technology">Remove Technology</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#aa0e4580b1535e8cf36d697d6374847a0">libsdi::CardDetection::removeTechnology()</a></p> |
| <p>23</p> | <p>08</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_provide_callback_response">Provide Callback Response</a></p> | <p>*implicit call*</p> |
|  |  |  |  |  |  |
| <p>24</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p>Display Enable</p> | <p>*deprecated*</p> |
| <p>24</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p>Display Text</p> | <p>*deprecated*</p> |
| <p>24</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p>Display Text with Confirmation</p> | <p>*deprecated*</p> |
| <p>24</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_handle_display">Handle Display</a></p> | <p><a href="classlibsdi_1_1_dialog.md#a6c0c8abff6439cb7ff87d62cd27d0934">libsdi::Dialog::display()</a></p> |
| <p>24</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_handle_secure_input">Handle Secure Input</a></p> | <p><a href="classlibsdi_1_1_dialog.md#aa009968eec1dfccd208de74b02751faf">libsdi::Dialog::secureInput()</a></p> |
| <p>24</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_handle_menu">Handle Menu</a></p> | <p><a href="classlibsdi_1_1_dialog.md#a107276ae07528d74dcf34e02b20917a9">libsdi::Dialog::menu()</a></p> |
| <p>24</p> | <p>06</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_handle_card_request_display">Handle Card Request Display</a></p> | <p><a href="classlibsdi_1_1_dialog.md#a3f9167afa0b6593b06560072bf94be9e">libsdi::Dialog::requestCard()</a></p> |
| <p>24</p> | <p>07</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_display_idle_screen">Display Idle Screen</a></p> | <p><a href="classlibsdi_1_1_dialog.md#a83a548ca4c3d5b5a73b8ce20bd424d27">libsdi::Dialog::idleScreen()</a></p> |
| <p>24</p> | <p>08</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_handle_signature_capture">Handle Signature Capture</a></p> | <p><a href="classlibsdi_1_1_dialog.md#a41c8e442425f8a584b0c85e2837807f3">libsdi::Dialog::captureSignature()</a></p> |
| <p>24</p> | <p>09</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_activate_leds">Activate LEDs</a></p> | <p><a href="classlibsdi_1_1_dialog.md#a209ec1998b40502052f69f4314bc3612">libsdi::Dialog::showLedArea()</a></p> |
| <p>24</p> | <p>0A</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_handle_html_dialog">Handle HTML Dialog</a></p> | <p><a href="classlibsdi_1_1_dialog.md#a5051e1a28471ee0017c86d442e2b2aaa">libsdi::Dialog::htmlDialog()</a></p> |
| <p>24</p> | <p>0B</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_get_async_display_result">Get Async Display Result</a></p> | <p><a href="classlibsdi_1_1_dialog.md#a5dc7bec3fd34264255ba456fb5522839">libsdi::Dialog::getAsyncResult()</a></p> |
|  |  |  |  |  |  |
| <p>25</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_prt_set_property">Set Printer Property (Integer)</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ad0684b76e4f9887db31ce9f20cab9150">libsdi::SDI::setPrinterProperty(vfiprt::PrtPropertyInt, int)</a></p> |
| <p>25</p> | <p>00</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_prt_set_property">Set Printer Property (String)</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a3ca20e1f4c769dcf5388b17460d9259d">libsdi::SDI::setPrinterProperty(vfiprt::PrtPropertyString, const std::string&)</a></p> |
| <p>25</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_prt_get_property">Get Printer Property (Integer)</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a412cd1d5894520f920fd7f7030d68f8c">libsdi::SDI::getPrinterProperty(vfiprt::PrtPropertyInt, int&)</a></p> |
| <p>25</p> | <p>01</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_prt_get_property">Get Printer Property (String)</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a730b32f696fd9b9dbf0ba3ed103e4c4f">libsdi::SDI::getPrinterProperty(vfiprt::PrtPropertyString, std::string&)</a></p> |
| <p>25</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_prt_html">Print HTML</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ac94f53d810b1d23fc63ae62732e6b24a">libsdi::SDI::printHtml()</a></p> |
| <p>25</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_prt_bitmap">Print Bitmap</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a4b6848f586bf6e2518a8d782e9774f9c">libsdi::SDI::printBitmap()</a></p> |
|  |  |  |  |  |  |
| <p>26</p> |  | <p>00</p> |  | <p><a href="pg_sdi_users_guide.md#subsec_sdi_plugin_interface">Plugin Interface</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ae03cf495a6cfafebc5367b6fd50ea5cc">libsdi::SDI::pluginCommand()</a></p> |
|  |  |  |  |  |  |
| <p>28</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vcl_registart_sred_request">VCL Registart SRED Request</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a84bb654abf9388f58e854c96f6bb33e8">libsdi::SDI::vclRegistartSRED()</a></p> |
| <p>28</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vcl_status_request">VCL Status Request</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a62263d75586d6f8f4d81e6f1576f9537">libsdi::SDI::vclStatusRequest()</a></p> |
| <p>28</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vcl_advance_ddk">VCL Advance DDK</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a1cf3b5f5e00f75b8b82e5c5ba9dfe1cc">libsdi::SDI::vclAdvanceDDK()</a></p> |
| <p>28</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vcl_eparms_request">VCL Request eParms</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ad4b7d516003824adc33cda3159a165a1">libsdi::SDI::vclRequestEParms()</a></p> |
| <p>28</p> | <p>06</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vcl_diag_query">VCL Request Diag Query</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a12c0ecba8fff6526c6a5e4792a73ceeb">libsdi::SDI::vclGetDiagnosticData()</a></p> |
| <p>28</p> | <p>07</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vcl_derive_query">VCL Request Derive Query</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#ab46e60a6ce8dd17f1fb24dc5e7dd9b9d">libsdi::SDI::vclGetKeyDerivationMode()</a></p> |
| <p>28</p> | <p>08</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vcl_override_message_query">VCL Override Message Query</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a954bd544e6fb25b844fa5d5ee7ed24c6">libsdi::SDI::vclOverrideMessageQuery()</a></p> |
| <p>28</p> | <p>09</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vcl_ksn_request">VCL_KSN_Request</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a261f6bdbcafd6c534f01c421904eccd1">libsdi::SDI::vclKsnRequest()</a></p> |
| <p>28</p> | <p>0A</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vcl_kmailin_request">VCL KMAILIN Request</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a66c1988cc3ccf6ca13f8ad59450352f1">libsdi::SDI::vclKmailinRequest()</a></p> |
|  |  |  |  |  |  |
| <p>29</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_getencdata">getEncData</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a04dbff235d0bc2ee3965deb24c067bcb">libsdi::SdiCrypt::getEncData()</a></p> |
| <p>29</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_getencmsgdata">getEncMsgData</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#aa3cbfa1f404ec3a00bf639440ca7d5ce">libsdi::SdiCrypt::getEncMsgData()</a></p> |
| <p>29</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_fetchtrxtags">fetchTrxTags</a></p> | <p><a href="sdi__data_8h.md#aa0964da27a7a19aaae21a423f330af83">SDI_fetchTxnTags()</a></p> |
| <p>29</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_cleardatastore">clearDataStore</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a74ac1725f8aa985ddea24cc6755b5f85">libsdi::SDI::clearDataStore()</a></p> |
| <p>29</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_getmsgsignature">getMsgSignature</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a0471fc11895a6a5cfe1c9cc927cde309">libsdi::SdiCrypt::getMsgSignature()</a></p> |
| <p>29</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_performvalidationchecks">performValidationChecks</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a9e2f26480c30241795d22317ac003164">libsdi::SDI::performValidationChecks()</a></p> |
| <p>29</p> | <p>06</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_getvalidationinfo">getValidationInfo</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a9efc44d41d83ae857cc95283f1439add">libsdi::SDI::getValidationInfo()</a></p> |
| <p>29</p> | <p>07</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_getenctrxdata">getEncTrxData</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a108c80d36b5996a03c8034d04ecf9a87">libsdi::SdiCrypt::getEncTrxData()</a></p> |
| <p>29</p> | <p>08</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_setenctrxdata">setEncTrxData</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a86641b88966fb93c099c4998d6c66c5d">libsdi::SdiCrypt::setEncTrxData()</a></p> |
| <p>29</p> | <p>09</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_endenctrxdata">endEncTrxData</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a000632209707b04739d161ee4dda6600">libsdi::SdiCrypt::endEncTrxData()</a></p> |
| <p>29</p> | <p>0A</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_getemvinfo">getEmvInfo</a></p> | <p>*not available*, use EMV API</p> |
|  |  |  |  |  |  |
| <p>31</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_ping">NFC Ping</a></p> | <p><a href="namespacelibsdi.md#af2720b510afe83dfbb88f8525998110e">libsdi::NFC_Ping()</a>, <a href="titusstubs_8cpp.md#a67ffc3f45da9f94fe48f8b7915008bf1">NFC_Ping()</a></p> |
| <p>31</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_pt_open">NFC Pass Through Open</a></p> | <p><a href="namespacelibsdi.md#a725fcbe27b01fb76f0a311837df2b6a2">libsdi::NFC_PT_Open()</a>, <a href="titusstubs_8cpp.md#aaa8fefdd6c9e72d4d3a487b0ae5e5925">NFC_PT_Open()</a></p> |
| <p>31</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_pt_close">NFC Pass Through Close</a></p> | <p><a href="namespacelibsdi.md#a1ed7f9f633b243555c21f6e743f93818">libsdi::NFC_PT_Close()</a>, <a href="titusstubs_8cpp.md#a00d4921f4a21667ae4cddb317ffc04a5">NFC_PT_Close()</a></p> |
| <p>31</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_pt_field_on">NFC Pass Through Field On</a></p> | <p><a href="namespacelibsdi.md#aac507fa74c6e4dee274e8e319fae53b4">libsdi::NFC_PT_FieldOn()</a>, <a href="titusstubs_8cpp.md#af0e3c8e7991ac4edbeceb2e432c10275">NFC_PT_FieldOn()</a></p> |
| <p>31</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_pt_field_off">NFC Pass Through Field Off</a></p> | <p><a href="namespacelibsdi.md#a6d22f7f2995498c3deeff5ca14f035cd">libsdi::NFC_PT_FieldOff()</a>, <a href="titusstubs_8cpp.md#a65c5ac372de4d71a8154f61b820abaf0">NFC_PT_FieldOff()</a></p> |
| <p>31</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_pt_field_polling">NFC Pass Through Field Polling</a></p> | <p><a href="namespacelibsdi.md#a7b8940cfad41a41aa030a403673ff08e">libsdi::NFC_PT_Polling()</a>, <a href="titusstubs_8cpp.md#aa1e541259f194621834060bf770b717b">NFC_PT_Polling()</a></p> |
| <p>31</p> | <p>07</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_pt_card_activation">NFC Pass Through Card Activation</a></p> | <p><a href="namespacelibsdi.md#a81820d4b1d383f7dbec708a62be8682c">libsdi::NFC_PT_Activation()</a>, <a href="titusstubs_8cpp.md#a969e1a6109a61709214ff554e91eed60">NFC_PT_Activation()</a></p> |
| <p>31</p> | <p>08</p> | <p>00</p> | <p>00</p> | <p>NFC Pass Through RxTx</p> | <p>*blocked*:<a href="namespacelibsdi.md#a1f3eb229b32c5a66e9249be7be57cdfe">libsdi::NFC_PT_TxRx()</a>, <a href="titusstubs_8cpp.md#a32723e5224c90c693a167dbdfb7d4700">NFC_PT_TxRx()</a></p> |
| <p>31</p> | <p>09</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_pt_field_ftech_baud">NFC Pass Through Ftech Baud</a></p> | <p><a href="namespacelibsdi.md#a1f60cbbb8ab69f84d3dea7bc2370be7f">libsdi::NFC_PT_FtechBaud()</a>, <a href="titusstubs_8cpp.md#af3c0de5e1db22e34a32d0d5adab0e756">NFC_PT_FtechBaud()</a></p> |
| <p>31</p> | <p>0A</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_mifare_authenticate">NFC Mifare Authenticate</a></p> | <p><a href="namespacelibsdi.md#a6307dc1a4339c298bbeaf61ffff8fb4f">libsdi::NFC_Mifare_Authenticate()</a>, <a href="titusstubs_8cpp.md#aedec140cfc839fe5a37cf2a50a2817f4">NFC_Mifare_Authenticate()</a></p> |
| <p>31</p> | <p>0B</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_mifare_read">NFC Mifare Read</a></p> | <p><a href="namespacelibsdi.md#a1bab92fb0966e68a4318d6fec39cd501">libsdi::NFC_Mifare_Read()</a>, <a href="titusstubs_8cpp.md#ae4ae024c208eeaf4a8a8c6a0d4455850">NFC_Mifare_Read()</a></p> |
| <p>31</p> | <p>0C</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_mifare_write">NFC Mifare Write</a></p> | <p><a href="namespacelibsdi.md#ad4b883fc075f8f66b860ca97cb1a06d5">libsdi::NFC_Mifare_Write()</a>, <a href="titusstubs_8cpp.md#a530661a2519e18704b7b42d20f975d10">NFC_Mifare_Write()</a></p> |
| <p>31</p> | <p>0D</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_mifare_increment">NFC Mifare Increment</a></p> | <p><a href="namespacelibsdi.md#ac25aa2323c5c8bc10a993d2e89335037">libsdi::NFC_Mifare_Increment()</a>, <a href="titusstubs_8cpp.md#a1465ec2daccc203d021d97c85d216628">NFC_Mifare_Increment()</a></p> |
| <p>31</p> | <p>0E</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_mifare_decrement">NFC Mifare Decrement</a></p> | <p><a href="namespacelibsdi.md#ad95d22bd21e99d44afccdf91e45daaa4">libsdi::NFC_Mifare_Decrement()</a>, <a href="titusstubs_8cpp.md#a0173f202da9dcb995cf8a0ae2c676a9d">NFC_Mifare_Decrement()</a></p> |
| <p>31</p> | <p>0F</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_felica_exchange">NFC Felica Exchange</a></p> | <p><a href="namespacelibsdi.md#a608fb992b1d21dad9dd507d0b7673d27">libsdi::NFC_Felica_Exchange()</a>, <a href="titusstubs_8cpp.md#a2c931bb61406783d5beae327e75f9c62">NFC_Felica_Exchange()</a></p> |
| <p>31</p> | <p>10</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_client_init">NFC Client Init</a></p> | <p><a href="namespacelibsdi.md#ac04174b3f4524e1f9942ebd550ec4743">libsdi::NFC_Client_Init()</a>, <a href="sdi__nfc_8h.md#a7a9419cd6aa7aa9185fb249ce761ae0f">NFC_Client_Init()</a></p> |
| <p>31</p> | <p>11</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_get_version">NFC Get Version</a></p> | <p><a href="namespacelibsdi.md#ac67395030324faba382bf017a031cccd">libsdi::NFC_Get_Version()</a>, <a href="titusstubs_8cpp.md#aeb1d7b0b11d9e03b115520994b55f35c">NFC_Get_Version()</a></p> |
| <p>31</p> | <p>13</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_pt_field_polling_full">NFC Pass Through Field Polling Full</a></p> | <p><a href="namespacelibsdi.md#a4a38cf0fdbc941135a826e5fb44eeb72">libsdi::NFC_PT_PollingFull()</a>, <a href="titusstubs_8cpp.md#ac692591d9c1287d0d4b6131a03b2e977">NFC_PT_PollingFull()</a></p> |
| <p>31</p> | <p>14</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_felica_polling">NFC Felica Polling</a></p> | <p><a href="namespacelibsdi.md#afbc84f034c17d26d0254a0ee0bca9da6">libsdi::NFC_Felica_Polling()</a>, <a href="titusstubs_8cpp.md#a243a0bf8d307ac9e73b6ceb1428b5fee">NFC_Felica_Polling()</a></p> |
| <p>31</p> | <p>15</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_mifare_increment_only">NFC Mifare Increment Only</a></p> | <p><a href="namespacelibsdi.md#a0501c6d614390321c449b609148b8b79">libsdi::NFC_Mifare_Increment_Only()</a>, <a href="titusstubs_8cpp.md#a905d4c59d169e24179efdefb7b02ea29">NFC_Mifare_Increment_Only()</a></p> |
| <p>31</p> | <p>16</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_mifare_decrement_only">NFC Mifare Decrement Only</a></p> | <p><a href="namespacelibsdi.md#a35e059c78ad0c5b3a64bf731ea025565">libsdi::NFC_Mifare_Decrement_Only()</a>, <a href="titusstubs_8cpp.md#af60063ed1a2e16ea0d36246c00060b9e">NFC_Mifare_Decrement_Only()</a></p> |
| <p>31</p> | <p>17</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_mifare_transfer">NFC Mifare Transfer</a></p> | <p><a href="namespacelibsdi.md#af34c2125714ab64c3b6f6483bb481f1b">libsdi::NFC_Mifare_Transfer()</a>, <a href="titusstubs_8cpp.md#a927d249ae02b388d7cd1e673844263d0">NFC_Mifare_Transfer()</a></p> |
| <p>31</p> | <p>18</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_mifare_restore">NFC Mifare Restore</a></p> | <p><a href="namespacelibsdi.md#a9dd06c4cbae1d1c5148120dd166a3ddf">libsdi::NFC_Mifare_Restore()</a>, <a href="titusstubs_8cpp.md#ab6deea5c5d4fda9e929350926b527196">NFC_Mifare_Restore()</a></p> |
| <p>31</p> | <p>1C</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_nfc_apdu_exchange">NFC APDU Exchange</a></p> | <p>*blocked*, <a href="namespacelibsdi.md#ab4e820ce6573ae601d8a3a66d7a775ec">libsdi::NFC_APDU_Exchange()</a>, <a href="titusstubs_8cpp.md#af4ee1c833fe1c5cb410982be81a68a12">NFC_APDU_Exchange()</a></p> |
|  |  |  |  |  |  |
| <p>32</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vas_terminal_config">VAS Terminal Config</a></p> | <p><a href="namespacelibsdi.md#a3b0973ce25d6c02fcd568cd2c7cc8a76">libsdi::NFC_Terminal_Config()</a>, <a href="titusstubs_8cpp.md#ad0a349a0904d698fea9fffa004cb3eb3">NFC_Terminal_Config()</a></p> |
| <p>32</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vas_terminal_read_config">VAS Terminal Read Config</a></p> | <p><a href="namespacelibsdi.md#a55382d02bcabcb88a34fa55bc671a87d">libsdi::NFC_TERMINAL_ReadConfig()</a>, <a href="titusstubs_8cpp.md#a2de5511cecb17b6859116720c33b48bf">NFC_TERMINAL_ReadConfig()</a></p> |
| <p>32</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vas_read_config">VAS Read Config</a></p> | <p><a href="namespacelibsdi.md#adf9ad7a8bd41321326437e43912f5142">libsdi::NFC_VAS_ReadConfig()</a>, <a href="titusstubs_8cpp.md#af8f463010a4c8584d2973b9df3c88c52">NFC_VAS_ReadConfig()</a></p> |
| <p>32</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vas_activate">VAS Activate</a></p> | <p><a href="namespacelibsdi.md#a9bbdb328e88858f94fdf1044e570c104">libsdi::NFC_VAS_Activate()</a>, <a href="titusstubs_8cpp.md#a1f0e681b88497ef9e25abde4ed3b5b3b">NFC_VAS_Activate()</a></p> |
| <p>-</p> | <p>-</p> | <p>-</p> | <p>-</p> | <p>VAS Cancel</p> | <p>*not available*,<a href="namespacelibsdi.md#a1dd2e9ef4621db0030ee9018f2ff5169">libsdi::NFC_VAS_Cancel</a>, <a href="titusstubs_8cpp.md#a03691ec1f524ef86c995066b25185e80">NFC_VAS_Cancel()</a></p> |
| <p>32</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vas_update_config">VAS Update Config</a></p> | <p><a href="namespacelibsdi.md#ab54ae674653c3a11b093fa18cb181f96">libsdi::NFC_VAS_UpdateConfig()</a>, <a href="titusstubs_8cpp.md#a8816583d91da702a6c7e2143ed68f7d9">NFC_VAS_UpdateConfig()</a></p> |
| <p>32</p> | <p>06</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vas_cancel_config">VAS Cancel Config</a></p> | <p><a href="namespacelibsdi.md#a5569bbf869f3660c48940654b06b17a6">libsdi::NFC_VAS_CancelConfig()</a>, <a href="titusstubs_8cpp.md#a7ea699bbeb85daabaf52bb2d94d7dc61">NFC_VAS_CancelConfig()</a></p> |
| <p>32</p> | <p>07</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vas_preload">VAS Preload</a></p> | <p><a href="namespacelibsdi.md#a1462bff8b73099bdb78609ecf374ce30">libsdi::NFC_VAS_PreLoad()</a>, <a href="titusstubs_8cpp.md#a8ee28a30cc5757bdd4d9ac413fe7ef17">NFC_VAS_PreLoad()</a></p> |
| <p>32</p> | <p>08</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vas_cancel_preload">VAS Cancel Preload</a></p> | <p><a href="namespacelibsdi.md#a1de872f3d1cecf8d7b266773910bfe4b">libsdi::NFC_VAS_CancelPreLoad()</a>, <a href="titusstubs_8cpp.md#a46e68ef15da8c20bc91ddef1b814859c">NFC_VAS_CancelPreLoad()</a></p> |
| <p>32</p> | <p>09</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_vas_decrypt">VAS Decrypt</a></p> | <p><a href="namespacelibsdi.md#afe16916defaa30dac8f7df05e097e92e">libsdi::NFC_VAS_Decrypt()</a>, <a href="titusstubs_8cpp.md#a19053197bd7fd0894d55827e7becec0a">NFC_VAS_Decrypt()</a></p> |
|  |  |  |  |  |  |
| <p>39</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CT_Init_Framewerk</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a01a41b8c21f17bab420a71c88a9bcad7">SDI_CT_Init_Framework()</a></p> |
| <p>39</p> | <p>00</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CT_Exit_Framewerk</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#aacb84d76cf1cb9968aee2c952bd931c8">SDI_CT_Exit_Framework()</a></p> |
| <p>39</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CT_SetTermData</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#adeae7a144a729b82e93ff92abd463fd6">SDI_CT_SetTermData()</a></p> |
| <p>39</p> | <p>01</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CT_GetTermData</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#aa02e34b3ec12329f41c03f6ff6d28424">SDI_CT_GetTermData()</a></p> |
| <p>39</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CT_SetAppliData</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a566f5011af25eeaa9ddb4a34dd893c58">SDI_CT_SetAppliData()</a></p> |
| <p>39</p> | <p>02</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CT_GetAppliData</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a23c10ab76e436e6b4e895f622a6107fe">SDI_CT_GetAppliData()</a></p> |
| <p>39</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CT_StoreCAPKey</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ae4efad90d867c2fe4086b4ccbe4d986f">SDI_CT_StoreCAPKey()</a></p> |
| <p>39</p> | <p>03</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CT_ReadCAPKeys</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#adcc88c7d18377af00d029786d695e68d">SDI_CT_ReadCAPKeys()</a></p> |
| <p>EMV_CT_GetCAPKeyInfo</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#aefca28186d400736b0f33a4768b685fe">SDI_CT_GetCAPKeyInfo()</a></p> |  |  |  |  |
| <p>39</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CT_ApplyConfiguration</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ad814ebfe5ca88dc0768c71f5223fde29">SDI_CT_ApplyConfiguration()</a></p> |
| <p>39</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p>EMV_CT_FRAMEWORK_GetVersion</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a3f04822f7cf7255d501d6705b9b10c4d">SDI_CTLS_FRAMEWORK_GetVersion()</a></p> |
| <p>-</p> | <p>-</p> | <p>-</p> | <p>-</p> | <p>EMV_CT_CLIENT_GetVersion</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#adb81a3d31f7a88cf6a9768c4ba1fc062">SDI_CT_CLIENT_GetVersion()</a></p> |
| <p>39</p> | <p>06</p> | <p>00</p> | <p>00</p> | <p>EMV_CT_MapVirtualTerminal</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a24decafe63c8f3f793f3cb1778411156">SDI_CT_MapVirtualTerminal()</a></p> |
| <p>39</p> | <p>10</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CT_StartTransaction</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a478841176a5e0ba2f91485b6c96f9258">SDI_CT_StartTransaction()</a></p> |
| <p>39</p> | <p>11</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CT_ContinueOffline</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a3c717f500d88355431c389b9278ee2d2">SDI_CT_ContinueOffline()</a></p> |
| <p>39</p> | <p>12</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CT_ContinueOnline</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a9916bb98ecefc1525293662b1f635d7e">SDI_CT_ContinueOnline()</a></p> |
| <p>39</p> | <p>13</p> | <p>00</p> | <p>00</p> | <p>EMV_CT_updateTxnTags</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ad9d70b7cdd6e4ad3a1a8e84764d9f52a">SDI_CT_updateTxnTags()</a></p> |
| <p>39</p> | <p>14</p> | <p>00</p> | <p>00</p> | <p>EMV_CT_fetchTxnTags</p> | <p>*blocked*, use <a href="sdi__data_8h.md#aa0964da27a7a19aaae21a423f330af83">SDI_fetchTxnTags()</a></p> |
| <p>39</p> | <p>15</p> | <p>00</p> | <p>00</p> | <p>EMV_CT_EndTransaction</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a56ba63dac87a3c55e5434e25a81eb0b7">SDI_CT_EndTransaction()</a>, <a href="classlibsdi_1_1_s_d_i.md#a74ac1725f8aa985ddea24cc6755b5f85">libsdi::SDI::clearDataStore()</a></p> |
| <p>39</p> | <p>16</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CT_GetCandidateData</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#aace8b5361882d055e739c2ef972b9b92">SDI_CT_GetCandidateData()</a></p> |
| <p>39</p> | <p>17</p> | <p>00</p> | <p>00</p> | <p>EMV_CT_CheckSupportedAID</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a560fa3ca8d377ab8f7263e3188ceed5f">SDI_CT_CheckSupportedAID()</a></p> |
| <p>39</p> | <p>18</p> | <p>00</p> | <p>00</p> | <p>EMV_CT_fetchTxnDOL</p> | <p>*not available*</p> |
|  |  |  |  |  |  |
| <p>40</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_Init_Framewerk</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ad0094543adddebbe0667a3bd92ab8d67">SDI_CTLS_Init_Framework()</a></p> |
| <p>40</p> | <p>00</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_Exit_Framewerk</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a091c03aae4a936db4aea7de946bbd7df">SDI_CTLS_Exit_Framework()</a></p> |
| <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_Exit_Framewerk_extended</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ac84dff021f4cb33ad617bd8fe6218700">SDI_CTLS_Exit_Framework_extended()</a></p> |  |  |  |  |
| <p>40</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_SetTermData</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a2c173b8efa5a7f874e3a9161e9522592">SDI_CTLS_SetTermData()</a></p> |
| <p>40</p> | <p>01</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_GetTermData</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a85415e42f910ffff697898d3f2627203">SDI_CTLS_GetTermData()</a></p> |
| <p>40</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_SetAppliDataSchemeSpecific</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a9cb348913360ea6b898607ca137f019e">SDI_CTLS_SetAppliDataSchemeSpecific()</a></p> |
| <p>40</p> | <p>02</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_GetAppliDataSchemeSpecific</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#af46039aee2eff5a0029b4b2fcfe580bf">SDI_CTLS_GetAppliDataSchemeSpecific()</a></p> |
| <p>40</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_StoreCAPKey</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ab15cd410ec08579adb2703afb222a5f7">SDI_CTLS_StoreCAPKey()</a></p> |
| <p>40</p> | <p>03</p> | <p>00</p> | <p>01</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_ReadCAPKeys</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a480502b2428eca1197826a541d0a0773">SDI_CTLS_ReadCAPKeys()</a></p> |
| <p>EMV_CTLS_GetCAPKeyInfo</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a9c68d6ac64c4cbfe4ccad9ec2b2dc94b">SDI_CTLS_GetCAPKeyInfo()</a></p> |  |  |  |  |
| <p>40</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_ApplyConfiguration</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a70ff02dafb4e117aa99fa3eb3a67b53f">SDI_CTLS_ApplyConfiguration()</a></p> |
| <p>40</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p>EMV_CTLS_FRAMEWORK_GetVersion</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a3f04822f7cf7255d501d6705b9b10c4d">SDI_CTLS_FRAMEWORK_GetVersion()</a></p> |
| <p>-</p> | <p>-</p> | <p>-</p> | <p>-</p> | <p>EMV_CTLS_CLIENT_GetVersion</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a7338c85bcef9a810abeb04a964ba7ac1">SDI_CTLS_CLIENT_GetVersion()</a></p> |
| <p>40</p> | <p>06</p> | <p>00</p> | <p>00</p> | <p>EMV_CTLS_MapVirtualTerminal</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a0f94ff4f712670646d91cf4c1c5ad7b7">SDI_CTLS_MapVirtualTerminal()</a></p> |
| <p>40</p> | <p>10</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CTLS_SetupTransaction</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a0cedaed434229de9771965b0b3ecf1cd">SDI_CTLS_SetupTransaction()</a></p> |
| <p>40</p> | <p>11</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CTLS_ContinueOffline</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a8f840b23f10cfd012035529a742da311">SDI_CTLS_ContinueOffline()</a></p> |
| <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CTLS_ContinueOfflineExt</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ade5c78dfdb3e1d87bca3473c4b7b15aa">SDI_CTLS_ContinueOfflineExt()</a></p> |  |  |  |  |
| <p>40</p> | <p>12</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CTLS_ContinueOnline</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a0ec21e60d70435450c5ecbf0b6cec8da">SDI_CTLS_ContinueOnline()</a></p> |
| <p>40</p> | <p>14</p> | <p>00</p> | <p>00</p> | <p>EMV_CTLS_fetchTxnTags</p> | <p>*blocked*, use <a href="sdi__data_8h.md#aa0964da27a7a19aaae21a423f330af83">SDI_fetchTxnTags()</a></p> |
| <p>40</p> | <p>15</p> | <p>00</p> | <p>00</p> | <p>EMV_CTLS_EndTransaction</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#af971a09777bf760df91396afc2f9a4fb">SDI_CTLS_EndTransaction()</a>, <a href="classlibsdi_1_1_s_d_i.md#a74ac1725f8aa985ddea24cc6755b5f85">libsdi::SDI::clearDataStore()</a></p> |
| <p>40</p> | <p>16</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CTLS_GetCandidateData</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a9eb1db9d7e8a5285150d22cb695ac4ef">SDI_CTLS_GetCandidateData()</a></p> |
| <p>40</p> | <p>18</p> | <p>00</p> | <p>00</p> | <p>EMV_CTLS_fetchTxnDOL</p> | <p>*not available*</p> |
| <p>40</p> | <p>20</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CTLS_Break</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ac371002a617daefdbf15829424ba41d7">SDI_CTLS_Break()</a></p> |
|  |  |  |  |  |  |
| <p>41</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p>Smart Card Enable</p> | <p>*not available*</p> |
| <p>41</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_smart_card_interface">EMV_CT_SmartDetect</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a54d8b8cad0b78c0614fd30007edbe173">SDI_CT_SmartDetect()</a></p> |
| <p>41</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_smart_card_interface">EMV_CT_SmartReset</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a16eb48c1413a968f909929261e8670b6">SDI_CT_SmartReset()</a></p> |
| <p>41</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_smart_card_interface">EMV_CT_SmartISO</a></p> | <p>*blocked*</p> |
| <p>41</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_smart_card_interface">EMV_CT_SmartPowerOff</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#acf66aae1d9be2f8daffdb454b23f4a21">SDI_CT_SmartPowerOff()</a></p> |
| <p>41</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_transaction_interface">EMV_CT_Send_PIN_Offline</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a92f31bb5f5b44eed55fb0297755c3954">SDI_CT_Send_PIN_Offline()</a></p> |
| <p>41</p> | <p>09</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_smart_card_interface">EMV_CT_LED</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a5cb2cb595561e9589d24145184bee449">SDI_CT_LED()</a></p> |
|  |  |  |  |  |  |
| <p>42</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_smart_card_interface">EMV_CTLS_SmartReset</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a6a525de44bb40afcf19c1a913986efd8">SDI_CTLS_SmartReset()</a></p> |
| <p>42</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_smart_card_interface">EMV_CTLS_SmartISO</a></p> | <p>*blocked*</p> |
| <p>42</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_smart_card_interface">EMV_CTLS_SmartPowerOff</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a3ac830135da154343c655ad8650e65af">SDI_CTLS_SmartPowerOff()</a></p> |
| <p>42</p> | <p>0A</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_smart_card_interface">EMV_CTLS_CardRemoval</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a0810a73ee9af9f7e8ead9751422fd172">SDI_CTLS_CardRemoval()</a></p> |
|  |  |  |  |  |  |
| <p>43</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_LED</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#adafede7433a6ea37d1644ac2a9f97eb4">SDI_CTLS_LED()</a></p> |
| <p>43</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsec_sdi_emv_system_interface">EMV_CTLS_LED_SetMode</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a4519178a19f6e841b069ed2d4c2eb75c">SDI_CTLS_LED_SetMode()</a></p> |
|  |  |  |  |  |  |
| <p>70</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_open">Crypto Open</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#ae99bad44e7039ea84f53656155edeaac">libsdi::SdiCrypt::open()</a></p> |
| <p>70</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_close">Crypto Close</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a46143fd6de3be9ab9951f140d3ae8c2f">libsdi::SdiCrypt::close()</a></p> |
| <p>70</p> | <p>02</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_encrypt">Crypto Encrypt</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#ad2ac275f8a1634eb37ec84ebf004b3cb">libsdi::SdiCrypt::encrypt()</a></p> |
| <p>70</p> | <p>03</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_decrypt">Crypto Decrypt</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a7684301d03885939b4dccdd19d2807f4">libsdi::SdiCrypt::decrypt()</a></p> |
| <p>70</p> | <p>04</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_sign">Crypto Sign</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a941d99efd0f797b2ea0776b80b64961a">libsdi::SdiCrypt::sign()</a></p> |
| <p>70</p> | <p>05</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_verify">Crypto Verify</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#ae60ef41731e7c9a7b9aa4b48d23b785a">libsdi::SdiCrypt::verify()</a></p> |
| <p>70</p> | <p>06</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_updatekey">Crypto Updatekey</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a1a13ac3691aa5936c2e4e0f07d32a7a7">libsdi::SdiCrypt::updateKey()</a></p> |
| <p>70</p> | <p>07</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_setkeyset">Crypto Set Key Set</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#af6bf6e8170adac0abf2b1f33344a8552">libsdi::SdiCrypt::setKeySetId()</a></p> |
| <p>70</p> | <p>08</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_getencryptedpin">Crypto Get encrypted Pin</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a29bc02bfa0379a16f6bd38be417b0327">libsdi::SdiCrypt::getEncryptedPin()</a></p> |
| <p>70</p> | <p>09</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_getkeyinventory">Crypto Get Key Inventory</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#aace57550a2c64b313b9561c4d377fe34">libsdi::SdiCrypt::getKeyInventory()</a></p> |
| <p>70</p> | <p>0A</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_getkeydata">Crypto Get Key Data</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a3ec32f356421fa02d7514b582326660f">libsdi::SdiCrypt::getKeyData()</a></p> |
| <p>70</p> | <p>0B</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_getstatus">Crypto Get Status</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a8531e732960977a2f1dfe5002bb8f6ab">libsdi::SdiCrypt::getStatus()</a></p> |
| <p>70</p> | <p>0C</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_crypto_getversions">Crypto Get Versions</a></p> | <p><a href="classlibsdi_1_1_sdi_crypt.md#a82bb8a102a935a4aba921ba0c9ecf5e7">libsdi::SdiCrypt::getVersions()</a></p> |
|  |  |  |  |  |  |
| <p>72</p> | <p>00</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_keyservice_read_certificate">Read Certificate</a></p> | <p>*not available*</p> |
| <p>72</p> | <p>01</p> | <p>00</p> | <p>00</p> | <p><a href="pg_sdi_users_guide.md#subsubsec_sdi_keyservice_rsa_pk_calculate">RSA Private Key Calculate</a></p> | <p>*not available*</p> |

## Callback Functions <a href="#subsec_libsdiclient_callbacks" id="subsec_libsdiclient_callbacks"></a>

Callbacks sent by SDI Server do not end a running command, instead the client API has to wait for the response. Meanwhile some types callback require a response which blocks the command execution. Therefore libsdiprotocol and libsdiclient support setting callback functions that are called by separate threads. This chapter lists up the SDI callbacks, the way a callback function can be registered and in which context it is invoked.

The Data Available callback is no SDI Server callback but sent once the SDI Server response is available on a command sent out by <a href="sdiprotocol_8h.md#ab3428d0ca92d1516b4efaa2ed7849795">SDI_Send()</a>. It is listed here for completeness.

{% hint style="info" %}
For callback types that do not expect a response the output parameter *sizeOut* of <a href="sdiprotocol_8h.md#a279358c02723f5f0fedb5fbc31e10da1">SDI_CALLBACK_TYPE</a> has to be set to zero by the callback function.
{% endhint %}

| SW1 | SW2 | SDI reference | Registration | Context |
|----|----|----|----|----|
| <p>91</p> | <p>01</p> | <p>EMV Callback (contact)</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a01a41b8c21f17bab420a71c88a9bcad7">SDI_CT_Init_Framework()</a></p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#a478841176a5e0ba2f91485b6c96f9258">SDI_CT_StartTransaction()</a> and <a href="sdiclient_2client_2sdi__emv_8h.md#a3c717f500d88355431c389b9278ee2d2">SDI_CT_ContinueOffline()</a> in callback mode</p> |
| <p>91</p> | <p>01</p> | <p>CTLS Query Callback</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ad0094543adddebbe0667a3bd92ab8d67">SDI_CTLS_Init_Framework()</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#abd641215dab1399373c2ab31e74e8343">libsdi::CardDetection::startSelection()</a> with <a href="classlibsdi_1_1_card_detection.md#a0e6b4f9573cc4a509a0aa899db897ceaa90305cd42b075df69032d816d8a6125e">DETECTION_MODE_BLOCKING</a></p> |
| <p>9F</p> |  | <p>Status Callbacks</p> | <p><a href="sdiprotocol_8h.md#a77a7796fbf67ab1207dd80355dfcc251">SDI_SetSdiCallback()</a></p> | <p><a href="classlibsdi_1_1_p_e_d.md#a72d4729d98f034d6d1de480fd7ead4c4">libsdi::PED::startPinInput()</a>, <a href="classlibsdi_1_1_manual_entry.md#ac92d3b835636641550b12b0f93daf21d">libsdi::ManualEntry::start()</a></p> |
| <p>9B</p> | <p>01</p> | <p>Control Callback</p> | <p><a href="sdiprotocol_8h.md#a77a7796fbf67ab1207dd80355dfcc251">SDI_SetSdiCallback()</a></p> | <p><a href="classlibsdi_1_1_s_d_i.md#a9e2f26480c30241795d22317ac003164">libsdi::SDI::performValidationChecks()</a></p> |
| <p>9E</p> | <p>01</p> | <p>Notify Callback</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ad0094543adddebbe0667a3bd92ab8d67">SDI_CTLS_Init_Framework()</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#abd641215dab1399373c2ab31e74e8343">libsdi::CardDetection::startSelection()</a> and out of transaction, e.g. LED blinking</p> |
| <p>9E</p> | <p>02</p> | <p>Card Detected Callback</p> | <p><a href="classlibsdi_1_1_card_detection.md#aa20cfc93106aeadbd200b8b8133d709c">libsdi::CardDetection::setCallback()</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#abd641215dab1399373c2ab31e74e8343">libsdi::CardDetection::startSelection()</a> with <a href="classlibsdi_1_1_card_detection.md#a0e6b4f9573cc4a509a0aa899db897ceaa258ceb8db19545c478b1c9342b535458">DETECTION_MODE_CALLBACK</a></p> |
| <p>9E</p> | <p>03</p> | <p>CTLS Query Callback</p> | <p><a href="sdiclient_2client_2sdi__emv_8h.md#ad0094543adddebbe0667a3bd92ab8d67">SDI_CTLS_Init_Framework()</a></p> | <p><a href="classlibsdi_1_1_card_detection.md#abd641215dab1399373c2ab31e74e8343">libsdi::CardDetection::startSelection()</a> other than <a href="classlibsdi_1_1_card_detection.md#a0e6b4f9573cc4a509a0aa899db897ceaa90305cd42b075df69032d816d8a6125e">DETECTION_MODE_BLOCKING</a></p> |
| <p>9E</p> | <p>04</p> | <p>Card Removal Callback</p> | <p><a href="sdiprotocol_8h.md#a77a7796fbf67ab1207dd80355dfcc251">SDI_SetSdiCallback()</a></p> | <p>hybrid card reader only: <a href="classlibsdi_1_1_card_detection.md#abd641215dab1399373c2ab31e74e8343">libsdi::CardDetection::startSelection()</a> (MSR only), <a href="classlibsdi_1_1_card_detection.md#a5d4d9b3d1806fd63f22f8d0cf1f8ff36">libsdi::CardDetection::startMsrRead()</a></p> |
| <p>9D</p> |  | <p>Navigator Callbacks</p> | <p><a href="sdiprotocol_8h.md#a77a7796fbf67ab1207dd80355dfcc251">SDI_SetSdiCallback()</a></p> | <p><a href="classlibsdi_1_1_p_e_d.md#a72d4729d98f034d6d1de480fd7ead4c4">libsdi::PED::startPinInput()</a>, <a href="classlibsdi_1_1_manual_entry.md#ac92d3b835636641550b12b0f93daf21d">libsdi::ManualEntry::start()</a></p> |
| <p>SW1</p> | <p>SW2</p> | <p>Data Available</p> | <p><a href="sdiprotocol_8h.md#ab08218e1215675470afea05b45bdccb9">SDI_SetDataAvailableCallback()</a></p> | <p><a href="classlibsdi_1_1_p_e_d.md#a72d4729d98f034d6d1de480fd7ead4c4">libsdi::PED::startPinInput()</a>, <a href="classlibsdi_1_1_manual_entry.md#ac92d3b835636641550b12b0f93daf21d">libsdi::ManualEntry::start()</a>, <a href="classlibsdi_1_1_card_detection.md#abd641215dab1399373c2ab31e74e8343">libsdi::CardDetection::startSelection()</a> with <a href="classlibsdi_1_1_card_detection.md#a0e6b4f9573cc4a509a0aa899db897ceaa90305cd42b075df69032d816d8a6125e">DETECTION_MODE_BLOCKING</a></p> |

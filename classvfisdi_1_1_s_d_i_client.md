---
title: vfisdi::SDIClient

---

# vfisdi::SDIClient



 [More...](#detailed-description)


`#include <sdi.h>`

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[AdditionalCardTag](structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag.md)**  |
| struct | **[CAPKeyInfo](structvfisdi_1_1_s_d_i_client_1_1_c_a_p_key_info.md)**  |
| struct | **[ComponentVersion](structvfisdi_1_1_s_d_i_client_1_1_component_version.md)**  |
| struct | **[CTCandidate](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md)**  |
| struct | **[CTCandidateData](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md)**  |
| struct | **[CTLSCandidateData](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md)**  |
| struct | **[Matching](structvfisdi_1_1_s_d_i_client_1_1_matching.md)**  |
| struct | **[NFCCard](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card.md)**  |
| struct | **[NFCCardCount](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count.md)**  |
| struct | **[NFCCardExt](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md)**  |
| struct | **[PlaceHolder](structvfisdi_1_1_s_d_i_client_1_1_place_holder.md)**  |
| struct | **[PluginResult](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md)**  |
| struct | **[TECOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md)**  |
| struct | **[TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ProtocolType](classvfisdi_1_1_s_d_i_client.md#enum-protocoltype)** { PROTOCOL_B, PROTOCOL_C} |
| enum| **[IdleScreenMode](group__sdidisplay.md#enum-idlescreenmode)** { IDLE_HOTKEY_ADMIN =0, IDLE_NO_ADMIN =1, IDEL_SHOW_ADMIN =2} |
| typedef std::vector< unsigned char > | **[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)**  |
| typedef void(*)(void *data, const char *file, int line, const char *format, va_list ap) | **[LogCallback](classvfisdi_1_1_s_d_i_client.md#typedef-logcallback)**  |

## Protected Types

|                | Name           |
| -------------- | -------------- |
| enum| **[@13](classvfisdi_1_1_s_d_i_client.md#enum-@13)** { STX =0x02, ETX =0x03} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[isGenericError](classvfisdi_1_1_s_d_i_client.md#function-isgenericerror)**(int r) |
| bool | **[isSystemError](classvfisdi_1_1_s_d_i_client.md#function-issystemerror)**(int r) |
| bool | **[isCardreaderError](classvfisdi_1_1_s_d_i_client.md#function-iscardreadererror)**(int r) |
| bool | **[isDisplayError](classvfisdi_1_1_s_d_i_client.md#function-isdisplayerror)**(int r) |
| bool | **[isPrinterError](classvfisdi_1_1_s_d_i_client.md#function-isprintererror)**(int r) |
| bool | **[isPluginError](classvfisdi_1_1_s_d_i_client.md#function-ispluginerror)**(int r) |
| bool | **[isVCLError](classvfisdi_1_1_s_d_i_client.md#function-isvclerror)**(int r) |
| bool | **[isEMVError](classvfisdi_1_1_s_d_i_client.md#function-isemverror)**(int r) |
| bool | **[isPEDError](classvfisdi_1_1_s_d_i_client.md#function-ispederror)**(int r) |
| bool | **[isNFCError](classvfisdi_1_1_s_d_i_client.md#function-isnfcerror)**(int r) |
| bool | **[isVASError](classvfisdi_1_1_s_d_i_client.md#function-isvaserror)**(int r) |
| bool | **[isDataError](classvfisdi_1_1_s_d_i_client.md#function-isdataerror)**(int r) |
| bool | **[isSECError](classvfisdi_1_1_s_d_i_client.md#function-issecerror)**(int r) |
| | **[SDIClient](group__sdisetup.md#function-sdiclient)**() |
| virtual | **[~SDIClient](group__sdisetup.md#function-~sdiclient)**() |
| void | **[setProtocol](group__sdisetup.md#function-setprotocol)**([ProtocolType](classvfisdi_1_1_s_d_i_client.md#enum-protocoltype) proto) |
| void | **[setTrace](group__sdisetup.md#function-settrace)**(void * data, void(*)(void *data, const char *format,...) trace_cb) |
| template <typename R ,typename T \> <br>void | **[setTrace](group__sdisetup.md#function-settrace)**(T * data, R(*)(T *data, const char *format,...) trace) |
| int | **[connect](group__sdisetup.md#function-connect)**(const char * host, unsigned short port =12000) |
| int | **[connect](group__sdisetup.md#function-connect)**([vfiipc::IPC](classvfiipc_1_1_i_p_c.md) * link) |
| bool | **[connected](group__sdisetup.md#function-connected)**() const |
| void | **[close](group__sdisetup.md#function-close)**() |
| int | **[sendMessage](group__sdilowlevel.md#function-sendmessage)**(unsigned short cmd, unsigned short p1p2, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & data) |
| int | **[sendMessage](group__sdilowlevel.md#function-sendmessage)**(unsigned short cmd, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & data) |
| int | **[receiveMessage](group__sdilowlevel.md#function-receivemessage)**(unsigned short & sw1sw2, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & data) |
| int | **[sendReply](group__sdilowlevel.md#function-sendreply)**(unsigned short cmd, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & data) |
| int | **[sendReceiveMessage](group__sdilowlevel.md#function-sendreceivemessage)**(unsigned short cmd, unsigned short p1p2, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & sdata, unsigned short & sw1sw2, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & rdata) |
| int | **[sendReceiveMessage](group__sdilowlevel.md#function-sendreceivemessage)**(unsigned short cmd, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & sdata, unsigned short & sw1sw2, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & rdata) |
| int | **[sysAbort](group__sdisystem.md#function-sysabort)**() |
| int | **[sysGetConfig](group__sdisystem.md#function-sysgetconfig)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & req, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[sysGetCPUID](group__sdisystem.md#function-sysgetcpuid)**(std::string & id) |
| int | **[sysGetSerialNumber](group__sdisystem.md#function-sysgetserialnumber)**(std::string & sn) |
| int | **[sysGetBootSoftwareID](group__sdisystem.md#function-sysgetbootsoftwareid)**(std::string & id) |
| int | **[sysGetApplicationSoftwareID](group__sdisystem.md#function-sysgetapplicationsoftwareid)**(std::string & id) |
| int | **[sysGetHardwareID](group__sdisystem.md#function-sysgethardwareid)**(std::string & id) |
| int | **[sysGetIFMID](group__sdisystem.md#function-sysgetifmid)**(std::string & id) |
| int | **[sysGetEMVL2ID](group__sdisystem.md#function-sysgetemvl2id)**(std::string & id) |
| int | **[sysGetStatus](group__sdisystem.md#function-sysgetstatus)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & req, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[sysGetDateTime](group__sdisystem.md#function-sysgetdatetime)**(unsigned short & year, unsigned char & month, unsigned char & day, unsigned char & hour, unsigned char & minute, unsigned char & second) |
| int | **[sysGetTamperStatus](group__sdisystem.md#function-sysgettamperstatus)**([Array](structvfisdi_1_1_array.md)< 9 > & tamper) |
| int | **[sysGetBatteryStatus](group__sdisystem.md#function-sysgetbatterystatus)**(unsigned char & charge_level, unsigned char & charge_status) |
| int | **[sysGetBatteryVoltage](group__sdisystem.md#function-sysgetbatteryvoltage)**(unsigned short & voltage) |
| int | **[sysGetLanguage](group__sdisystem.md#function-sysgetlanguage)**(enum [Language](namespacevfisdi.md#enum-language) & language) |
| int | **[sysGetCVVDeactivation](group__sdisystem.md#function-sysgetcvvdeactivation)**(unsigned char & cfg) |
| int | **[sysGetCardEntryMode](group__sdisystem.md#function-sysgetcardentrymode)**(unsigned char & mode) |
| int | **[sysSetDateTime](group__sdisystem.md#function-syssetdatetime)**(unsigned short year, unsigned char month, unsigned char day, unsigned char hour, unsigned char minute, unsigned char second) |
| int | **[sysSetLanguage](group__sdisystem.md#function-syssetlanguage)**(enum [Language](namespacevfisdi.md#enum-language) language) |
| int | **[sysSetCVVDeactivation](group__sdisystem.md#function-syssetcvvdeactivation)**(unsigned char deactivate) |
| int | **[sysSetCardEntryMode](group__sdisystem.md#function-syssetcardentrymode)**(unsigned char mode) |
| int | **[sysSetDisplayBacklight](group__sdisystem.md#function-syssetdisplaybacklight)**(unsigned char backlight) |
| int | **[sysSetDisplayConstrast](group__sdisystem.md#function-syssetdisplayconstrast)**(unsigned char contrast) |
| int | **[sysGetKSN](group__sdisystem.md#function-sysgetksn)**([KSNSelection](namespacevfisdi.md#enum-ksnselection) which, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[sysAuthStep1](group__sdisystem.md#function-sysauthstep1)**(const [Array](structvfisdi_1_1_array.md)< 16 > & hostRandom, [Array](structvfisdi_1_1_array.md)< 32 > & serverData, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & ksn) |
| int | **[sysAuthStep2](group__sdisystem.md#function-sysauthstep2)**(const [Array](structvfisdi_1_1_array.md)< 32 > & hostData, [Array](structvfisdi_1_1_array.md)< 32 > & serverData) |
| int | **[sysSetIdleText](group__sdisystem.md#function-syssetidletext)**(const std::string & text) |
| int | **[sysClearIdleText](group__sdisystem.md#function-sysclearidletext)**() |
| int | **[sysUploadBegin](group__sdisystem.md#function-sysuploadbegin)**(const std::string & filename, [SYSUploadType](namespacevfisdi.md#enum-sysuploadtype) type =[SYS_UPLOAD_SOFTWARE_UPDATE](namespacevfisdi.md#enumvalue-sys-upload-software-update), int dest =1) |
| int | **[sysUploadData](group__sdisystem.md#function-sysuploaddata)**(const void * packet, unsigned size, int packet_no, int dest =1) |
| int | **[sysUploadEnd](group__sdisystem.md#function-sysuploadend)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * md5 =0, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * mac =0, int dest =1) |
| int | **[sysUpload](group__sdisystem.md#function-sysupload)**(const std::string & filename, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & data, [SYSUploadType](namespacevfisdi.md#enum-sysuploadtype) type =[SYS_UPLOAD_SOFTWARE_UPDATE](namespacevfisdi.md#enumvalue-sys-upload-software-update), const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * md5 =0, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * mac =0, int dest =1) |
| int | **[sysShutdown](group__sdisystem.md#function-sysshutdown)**() |
| int | **[sysReboot](group__sdisystem.md#function-sysreboot)**() |
| int | **[sysSleep](group__sdisystem.md#function-syssleep)**() |
| int | **[sysHibernate](group__sdisystem.md#function-syshibernate)**() |
| int | **[sysShowMACDesktop](group__sdisystem.md#function-sysshowmacdesktop)**() |
| int | **[sysSetPropertyString](group__sdisystem.md#function-syssetpropertystring)**(int property, const std::string & in, int dest =1) |
| int | **[sysSetPropertyInt](group__sdisystem.md#function-syssetpropertyint)**(int property, int in, int dest =1) |
| int | **[sysGetPropertyString](group__sdisystem.md#function-sysgetpropertystring)**(int property, std::string & out, int dest =1) |
| int | **[sysGetPropertyInt](group__sdisystem.md#function-sysgetpropertyint)**(int property, int & out, int dest =1) |
| int | **[sysInstallSponsorCert](group__sdisystem.md#function-sysinstallsponsorcert)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & cert) |
| int | **[sysGetSDIVersion](group__sdisystem.md#function-sysgetsdiversion)**(std::vector< [ComponentVersion](structvfisdi_1_1_s_d_i_client_1_1_component_version.md) > & info, unsigned char device =1) |
| int | **[sysInstallUpdate](group__sdisystem.md#function-sysinstallupdate)**([SYSUpdateType](namespacevfisdi.md#enum-sysupdatetype) type) |
| int | **[sysInstallResult](group__sdisystem.md#function-sysinstallresult)**(std::string & result, unsigned char device =1) |
| int | **[sysEnableEPP](group__sdisystem.md#function-sysenableepp)**(bool enable) |
| int | **[sysFactoryReset](group__sdisystem.md#function-sysfactoryreset)**() |
| int | **[sysReadCert](group__sdisystem.md#function-sysreadcert)**(const std::string & name, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & cert) |
| int | **[sysSetCurrencyDisplay](group__sdisystem.md#function-syssetcurrencydisplay)**(enum [Currency](namespacevfisdi.md#enum-currency) currency, enum [CurrencyDisplay](namespacevfisdi.md#enum-currencydisplay) display) |
| int | **[displayText](group__sdidisplay.md#function-displaytext)**(int template_id, const std::string & data_name, const std::string & data_value, int timeout =0, bool confirm =false, bool beep =false, int dest =1) |
| int | **[displayText](group__sdidisplay.md#function-displaytext)**(int template_id, unsigned dialog_opt, const std::map< std::string, std::string > & value, const std::map< std::string, std::string > & key_actions, const char * header_text =0, const char * enter_text =0, const char * clear_text =0, const char * cancel_text =0, int timeout =0, int dest =1) |
| int | **[displayText](group__sdidisplay.md#function-displaytext)**(const std::string & data_value, int timeout =0, bool confirm =false, bool beep =false, int dest =1) |
| int | **[displayInput](group__sdidisplay.md#function-displayinput)**(std::string & out, [InputType](namespacevfisdi.md#enum-inputtype) type, [Language](namespacevfisdi.md#enum-language) language =[LANGUAGE_NO_LANGUAGE](namespacevfisdi.md#enumvalue-language-no-language), char maskchar =0, const std::string & altformat ="", int timeout =0, bool beep =false, int dest =1) |
| int | **[displayInputTipWithAmount](group__sdidisplay.md#function-displayinputtipwithamount)**(std::string & out, [Language](namespacevfisdi.md#enum-language) language, const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount, [Currency](namespacevfisdi.md#enum-currency) currency, char maskchar =0, const std::string & altformat ="", int timeout =0, bool beep =false, int dest =1) |
| int | **[displayMenu](group__sdidisplay.md#function-displaymenu)**(const std::string & prompt, const std::vector< std::string > & entries, int timeout =0, bool beep =false, int dest =1) |
| int | **[displayMenu](group__sdidisplay.md#function-displaymenu)**(unsigned dialog_opt, const std::string & prompt, const std::vector< std::string > & entries, int preselect, const std::map< std::string, std::string > & key_actions, const char * header_text =0, const char * enter_text =0, const char * cancel_text =0, const char * up_text =0, const char * down_text =0, int timeout =0, int dest =1) |
| int | **[displayCardRequest](group__sdidisplay.md#function-displaycardrequest)**(unsigned char tec, unsigned char mode, const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > amount, int currency, int dest =1) |
| int | **[displayCardRequest](group__sdidisplay.md#function-displaycardrequest)**(unsigned char tec, unsigned char mode, int dest =1) |
| int | **[displayCardRequest](group__sdidisplay.md#function-displaycardrequest)**(unsigned char tec, unsigned char mode, const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > amount, int currency, enum [EMVTransaction](namespacevfisdi.md#enum-emvtransaction) txn, int dest =1) |
| int | **[displayCardRequest](group__sdidisplay.md#function-displaycardrequest)**(unsigned char tec, unsigned char mode, enum [EMVTransaction](namespacevfisdi.md#enum-emvtransaction) txn, int dest =1) |
| int | **[displayIdleScreen](group__sdidisplay.md#function-displayidlescreen)**(int dest =1) |
| int | **[displayIdleScreenMode](group__sdidisplay.md#function-displayidlescreenmode)**(enum [IdleScreenMode](group__sdidisplay.md#enum-idlescreenmode) mode, int dest =1) |
| int | **[displaySignatureCapture](group__sdidisplay.md#function-displaysignaturecapture)**(std::string & outformat, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & outdata, [Language](namespacevfisdi.md#enum-language) lang, unsigned short timeout =0, int dest =1) |
| int | **[displayLEDs](group__sdidisplay.md#function-displayleds)**(bool on) |
| int | **[displayDialog](group__sdidisplay.md#function-displaydialog)**(const std::string & filename, std::map< std::string, std::string > & value, [Language](namespacevfisdi.md#enum-language) lang =[LANGUAGE_NO_LANGUAGE](namespacevfisdi.md#enumvalue-language-no-language), bool beep =false, int dest =1) |
| int | **[displayDialog](group__sdidisplay.md#function-displaydialog)**(unsigned dialog_opt, const std::string & filename, std::map< std::string, std::string > & value, [Language](namespacevfisdi.md#enum-language) lang =[LANGUAGE_NO_LANGUAGE](namespacevfisdi.md#enumvalue-language-no-language), int dest =1) |
| int | **[displayGetAsyncResult](group__sdidisplay.md#function-displaygetasyncresult)**(enum [DialogAsyncStatus](namespacevfisdi.md#enum-dialogasyncstatus) & status, int dest =1) |
| int | **[printSetPropertyString](group__sdiprinter.md#function-printsetpropertystring)**(int property, const std::string & in) |
| int | **[printSetPropertyInt](group__sdiprinter.md#function-printsetpropertyint)**(int property, int in) |
| int | **[printGetPropertyString](group__sdiprinter.md#function-printgetpropertystring)**(int property, std::string & out) |
| int | **[printGetPropertyInt](group__sdiprinter.md#function-printgetpropertyint)**(int property, int & out) |
| int | **[printHTML](group__sdiprinter.md#function-printhtml)**(const std::string & html, bool landscape =false) |
| int | **[printBitmap](group__sdiprinter.md#function-printbitmap)**(int width, int height, const void * bitmap, unsigned size) |
| int | **[printBitmap](group__sdiprinter.md#function-printbitmap)**(int width, int height, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & bitmap) |
| int | **[msrRead](group__sdimsr.md#function-msrread)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & pan, std::string & name, std::string & service, std::string & track2, int timeout_sec) |
| int | **[msrRead](group__sdimsr.md#function-msrread)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & pan, std::string & name, std::string & service, std::string & track2, [Array](structvfisdi_1_1_array.md)< 3 > & track_status, int timeout_sec) |
| int | **[msrRead](group__sdimsr.md#function-msrread)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & pan, std::string & name, std::string & service, std::string & track2, [Array](structvfisdi_1_1_array.md)< 3 > & track_status, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & card_token, int timeout_sec, int removal_timeout_ms =-1) |
| int | **[msrRead](group__sdimsr.md#function-msrread)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & pan, std::string & name, std::string & service, std::string & track2, [Array](structvfisdi_1_1_array.md)< 3 > & track_status, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & card_token, std::vector< [PluginResult](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md) > & plugin_result, int timeout_sec, int removal_timeout_ms =-1) |
| int | **[msrRead](group__sdimsr.md#function-msrread)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & pan, std::string & name, std::string & service, std::string & track1, std::string & track2, [Array](structvfisdi_1_1_array.md)< 3 > & track_status, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & card_token, std::vector< [PluginResult](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md) > & plugin_result, int timeout_sec, int removal_timeout_ms =-1) |
| int | **[msrCardDataEntry](group__sdimsr.md#function-msrcarddataentry)**(std::string & out, const std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) > & btn =std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) >()) |
| int | **[msrCardDataEntry](group__sdimsr.md#function-msrcarddataentry)**(std::string & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & card_token, unsigned flags, const std::string & format =std::string(), const std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) > & btn =std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) >()) |
| int | **[msrCardDataEntry](group__sdimsr.md#function-msrcarddataentry)**(std::string & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & card_token, std::vector< [PluginResult](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md) > & plugin_result, unsigned flags, const std::string & format =std::string(), const std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) > & btn =std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) >()) |
| int | **[msrCardDataEntry](group__sdimsr.md#function-msrcarddataentry)**(std::string & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & card_token, std::vector< [PluginResult](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md) > & plugin_result, unsigned flags, int timeout, const std::string & format =std::string(), const std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) > & btn =std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) >()) |
| int | **[msrSetOptions](group__sdimsr.md#function-msrsetoptions)**(unsigned options) |
| int | **[msrLED](group__sdimsr.md#function-msrled)**(unsigned led1, unsigned led2, unsigned led3, unsigned timeout =0) |
| int | **[msrSetSensitivity](group__sdimsr.md#function-msrsetsensitivity)**(unsigned char sensitivity, int dest =1) |
| int | **[crdDetect](group__sdicrd.md#function-crddetect)**(unsigned char tec, const [TECOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md) & options, bool allow_cancel, unsigned timeout_ms, unsigned char & tec_out, [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & emv_out, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & appid =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)(), unsigned char syncCard =0, unsigned char manual_mode =0, const std::string & format ="", [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * plugin_result =0) |
| int | **[crdDetect](group__sdicrd.md#function-crddetect)**(unsigned char tec, const [TECOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md) & options, bool allow_cancel, unsigned timeout_ms, unsigned char & tec_out, [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & emv_out, std::vector< [PluginResult](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md) > & plugin_result, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & appid =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)(), unsigned char syncCard =0, unsigned char manual_mode =0, const std::string & format ="", int removal_timeout_ms =-1) |
| int | **[crdWaitForRemoval](group__sdicrd.md#function-crdwaitforremoval)**(unsigned short timeout =0) |
| int | **[crdStartDetect](group__sdicrd.md#function-crdstartdetect)**(unsigned char tec, const [TECOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md) & options, unsigned timeout, bool use_cb =false, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & appid =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)(), unsigned char syncCard =0) |
| int | **[crdStartDetect](group__sdicrd.md#function-crdstartdetect)**(unsigned char tec, const [TECOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md) & options, unsigned timeout, bool use_cb, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & appid, unsigned char syncCard, int removal_timeout_ms =-1) |
| int | **[crdPollDetect](group__sdicrd.md#function-crdpolldetect)**(unsigned char & tec_out, [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & emv_out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * plugin_result =0) |
| int | **[crdStopDetect](group__sdicrd.md#function-crdstopdetect)**() |
| int | **[crdAddTechnology](group__sdicrd.md#function-crdaddtechnology)**(unsigned char tec, const [TECOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md) & options, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & appid =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)(), unsigned char syncCard =0) |
| int | **[crdRemoveTechnology](group__sdicrd.md#function-crdremovetechnology)**(unsigned char tec) |
| int | **[crdProvideCallbackResponse](group__sdicrd.md#function-crdprovidecallbackresponse)**([EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & in) |
| int | **[pedGetPIN](group__sdiped.md#function-pedgetpin)**(const std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) > & btn =std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) >(), bool bypass =false, int timeout =300, int navigator_mode =0, int min_digits =4, int max_digits =12, [Language](namespacevfisdi.md#enum-language) lang =[LANGUAGE_NO_LANGUAGE](namespacevfisdi.md#enumvalue-language-no-language)) |
| int | **[pedGetPIN](group__sdiped.md#function-pedgetpin)**(unsigned pin_options, const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > amount =0, int currency =-1, const char * applabel =0, const char * headline =0, unsigned pwd_char =0, const std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) > & btn =std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) >(), unsigned bypass =[BYPASS_DISABLED](namespacevfisdi.md#enumvalue-bypass-disabled), int timeout =300, int interchar_timeout =0, int min_digits =4, int max_digits =12, [Language](namespacevfisdi.md#enum-language) lang =[LANGUAGE_NO_LANGUAGE](namespacevfisdi.md#enumvalue-language-no-language)) |
| int | **[pedGetPIN](group__sdiped.md#function-pedgetpin)**(bool bypass =false, int timeout =300, int min_digits =4, int max_digits =12, [Language](namespacevfisdi.md#enum-language) lang =[LANGUAGE_NO_LANGUAGE](namespacevfisdi.md#enumvalue-language-no-language)) |
| int | **[pedSetPINTimeout](group__sdiped.md#function-pedsetpintimeout)**(unsigned short timeout_sec) |
| void | **[pedConfirmKey](group__sdiped.md#function-pedconfirmkey)**() |
| int | **[pedStartPIN](group__sdiped.md#function-pedstartpin)**(const std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) > & btn =std::vector< [TouchButton](structvfisdi_1_1_s_d_i_client_1_1_touch_button.md) >(), int bypass_key =0, int navigator_mode =0, int minlen =4, int maxlen =12, bool clear_all =false, bool auto_enter =false) |
| int | **[pedPollPIN](group__sdiped.md#function-pedpollpin)**([PINStatus](namespacevfisdi.md#enum-pinstatus) & pin, int & digits, int & status) |
| int | **[pedStopPIN](group__sdiped.md#function-pedstoppin)**() |
| int | **[pedSetPINInputParameter](group__sdiped.md#function-pedsetpininputparameter)**(bool clear_all) |
| int | **[pedSetPINInputParameter](group__sdiped.md#function-pedsetpininputparameter)**(unsigned pin_options, const char * headline =0, unsigned pwd_char =0, unsigned bypass =[BYPASS_DISABLED](namespacevfisdi.md#enumvalue-bypass-disabled), int interchar_timeout =0, int min_digits =4, int max_digits =12, int dest =1) |
| int | **[secOpen](group__sdisec.md#function-secopen)**(unsigned & handle, const std::string & hostname) |
| int | **[secClose](group__sdisec.md#function-secclose)**(unsigned handle) |
| int | **[secEncrypt](group__sdisec.md#function-secencrypt)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv =0, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn =0) |
| int | **[secDecrypt](group__sdisec.md#function-secdecrypt)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv =0, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn =0) |
| int | **[secSign](group__sdisec.md#function-secsign)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv =0, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn =0) |
| int | **[secVerify](group__sdisec.md#function-secverify)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & sig, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv =0, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn =0) |
| int | **[secUpdateKey](group__sdisec.md#function-secupdatekey)**(unsigned handle, unsigned char keyType, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & key, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * prop =0, const unsigned char * as2805 =0, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * key_kcv =0) |
| int | **[secUpdateKey](group__sdisec.md#function-secupdatekey)**(unsigned handle, unsigned char keyType, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & key, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * prop, const unsigned char * as2805, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * key_kcv, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv) |
| int | **[secSetKeySetID](group__sdisec.md#function-secsetkeysetid)**(unsigned handle, unsigned id, unsigned master_id =0) |
| int | **[secGetEncryptedPIN](group__sdisec.md#function-secgetencryptedpin)**(unsigned handle, unsigned char fmt, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & pinblock, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & ksn, bool zero_pin =false) |
| int | **[secGetKeyInventory](group__sdisec.md#function-secgetkeyinventory)**(unsigned handle, std::string & json) |
| int | **[secGetKeyData](group__sdisec.md#function-secgetkeydata)**(unsigned handle, unsigned char keyType, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, bool kek_flag =false) |
| int | **[secGetStatus](group__sdisec.md#function-secgetstatus)**(unsigned handle, std::string & json) |
| int | **[secGetStatus](group__sdisec.md#function-secgetstatus)**(const std::string & hostname, std::string & json) |
| int | **[secGetStatus](group__sdisec.md#function-secgetstatus)**(std::string & json) |
| int | **[secGetVersions](group__sdisec.md#function-secgetversions)**(std::string & version) |
| int | **[dataGetEncData](group__sdidata.md#function-datagetencdata)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & taglist, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & appdata, unsigned options, bool useStoredTX, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv =0, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn =0) |
| int | **[dataGetEncData](group__sdidata.md#function-datagetencdata)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & taglist, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & appdata, unsigned options, bool useStoredTX, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn, bool incrementKSN, unsigned keysetID =0, unsigned masterKeysetID =0) |
| int | **[dataGetEncMsgData](group__sdidata.md#function-datagetencmsgdata)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & msgtemplate, const std::vector< [PlaceHolder](structvfisdi_1_1_s_d_i_client_1_1_place_holder.md) > & placeholder, bool useStoredTX, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv =0, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn =0) |
| int | **[dataGetEncMsgData](group__sdidata.md#function-datagetencmsgdata)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & msgtemplate, const std::vector< [PlaceHolder](structvfisdi_1_1_s_d_i_client_1_1_place_holder.md) > & placeholder, bool useStoredTX, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn, bool incrementKSN, unsigned keysetID =0, unsigned masterKeysetID =0) |
| int | **[dataFetchTxnTags](group__sdidata.md#function-datafetchtxntags)**(const std::vector< unsigned > & taglist, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, unsigned char mode =0, bool cleartext_date =false) |
| int | **[dataFetchTxnTags](group__sdidata.md#function-datafetchtxntags)**(const std::vector< unsigned > & taglist, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, unsigned char mode, bool cleartext_date, unsigned options) |
| int | **[dataClearDataStore](group__sdidata.md#function-datacleardatastore)**() |
| int | **[dataGetMsgSignature](group__sdidata.md#function-datagetmsgsignature)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & msgtemplate, const std::vector< [PlaceHolder](structvfisdi_1_1_s_d_i_client_1_1_place_holder.md) > & placeholder, bool useStoredTX, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv =0, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn =0) |
| int | **[dataGetMsgSignature](group__sdidata.md#function-datagetmsgsignature)**(unsigned handle, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & msgtemplate, const std::vector< [PlaceHolder](structvfisdi_1_1_s_d_i_client_1_1_place_holder.md) > & placeholder, bool useStoredTX, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * iv, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * ksn, bool incrementKSN, unsigned keysetID =0, unsigned masterKeysetID =0) |
| int | **[dataPerformValidationChecks](group__sdidata.md#function-dataperformvalidationchecks)**(const [Array](structvfisdi_1_1_array.md)< 3 > & date, [Matching](structvfisdi_1_1_s_d_i_client_1_1_matching.md) & match, std::vector< [Matching](structvfisdi_1_1_s_d_i_client_1_1_matching.md) > * additional =0) |
| int | **[dataPerformValidationChecks](group__sdidata.md#function-dataperformvalidationchecks)**(const [Array](structvfisdi_1_1_array.md)< 3 > & date, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & iin, [Matching](structvfisdi_1_1_s_d_i_client_1_1_matching.md) & match, std::vector< [Matching](structvfisdi_1_1_s_d_i_client_1_1_matching.md) > * additional =0) |
| int | **[dataGetValidationInfo](group__sdidata.md#function-datagetvalidationinfo)**(std::string & out) |
| int | **[dataGetEncTxnData](group__sdidata.md#function-datagetenctxndata)**(const std::vector< unsigned > & taglist, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & encrypted) |
| int | **[dataSetEncTxnData](group__sdidata.md#function-datasetenctxndata)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & encrypted) |
| int | **[dataEndEncTxnData](group__sdidata.md#function-dataendenctxndata)**() |
| int | **[dataGetEmvInfo](group__sdidata.md#function-datagetemvinfo)**([EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[vclRegistartSRED](group__sdivcl.md#function-vclregistartsred)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & track1, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & track2, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & track3) |
| int | **[vclStatusRequest](group__sdivcl.md#function-vclstatusrequest)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & status) |
| int | **[vclAdvanceDDK](group__sdivcl.md#function-vcladvanceddk)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & track1, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & track2, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & track3) |
| int | **[vclRequestEParms](group__sdivcl.md#function-vclrequesteparms)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & eparms) |
| int | **[vclGetDiagnostic](group__sdivcl.md#function-vclgetdiagnostic)**(unsigned format, unsigned page, std::string & diag) |
| int | **[vclGetKeyStatus](group__sdivcl.md#function-vclgetkeystatus)**(unsigned char & status) |
| int | **[vclOverrideMessageQuery](group__sdivcl.md#function-vcloverridemessagequery)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & track1, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & track2, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & track3) |
| int | **[vclKSNRequest](group__sdivcl.md#function-vclksnrequest)**(std::string & ksn) |
| int | **[vclKmailinRequest](group__sdivcl.md#function-vclkmailinrequest)**() |
| int | **[emvCtInit](group__sdiemvct.md#function-emvctinit)**(int aidCount =0, unsigned options =0) |
| int | **[emvCtExit](group__sdiemvct.md#function-emvctexit)**(unsigned options =0) |
| int | **[emvCtSetTermData](group__sdiemvct.md#function-emvctsettermdata)**(const [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtGetTermData](group__sdiemvct.md#function-emvctgettermdata)**([EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtSetAppData](group__sdiemvct.md#function-emvctsetappdata)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid, const [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtClearAppData](group__sdiemvct.md#function-emvctclearappdata)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid) |
| int | **[emvCtClearAllAppData](group__sdiemvct.md#function-emvctclearallappdata)**() |
| int | **[emvCtSetTempAppData](group__sdiemvct.md#function-emvctsettempappdata)**(const [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtGetAppData](group__sdiemvct.md#function-emvctgetappdata)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid, [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtGetAppData](group__sdiemvct.md#function-emvctgetappdata)**(bool first, [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtSetCAPKey](group__sdiemvct.md#function-emvctsetcapkey)**(const [Array](structvfisdi_1_1_array.md)< 5 > & rid, unsigned char index, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & key, unsigned char exp, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & hash =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)(), const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & revocationlist =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)()) |
| int | **[emvCtClearCAPKey](group__sdiemvct.md#function-emvctclearcapkey)**(const [Array](structvfisdi_1_1_array.md)< 5 > & rid, unsigned char index) |
| int | **[emvCtClearAllCAPKey](group__sdiemvct.md#function-emvctclearallcapkey)**() |
| int | **[emvCtGetCAPKeys](group__sdiemvct.md#function-emvctgetcapkeys)**(std::vector< [CAPKeyInfo](structvfisdi_1_1_s_d_i_client_1_1_c_a_p_key_info.md) > & keys) |
| int | **[emvCtApplyConfig](group__sdiemvct.md#function-emvctapplyconfig)**(unsigned options =0) |
| int | **[emvCtAddVirtualMapEntry](group__sdiemvct.md#function-emvctaddvirtualmapentry)**(int transaction, int currency, unsigned char vterminal) |
| int | **[emvCtClearVirtualMap](group__sdiemvct.md#function-emvctclearvirtualmap)**() |
| int | **[emvCtSmartDetect](group__sdiemvct.md#function-emvctsmartdetect)**(int timeout_ms) |
| int | **[emvCtActivate](group__sdiemvct.md#function-emvctactivate)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * atr =0) |
| int | **[emvCtActivate](group__sdiemvct.md#function-emvctactivate)**(unsigned options, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * atr =0) |
| int | **[emvCtDeactivate](group__sdiemvct.md#function-emvctdeactivate)**() |
| int | **[emvCtDeactivate](group__sdiemvct.md#function-emvctdeactivate)**(unsigned options) |
| int | **[emvCtStartTransaction](group__sdiemvct.md#function-emvctstarttransaction)**([EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & out, [EMVTransaction](namespacevfisdi.md#enum-emvtransaction) type, const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > amount, const [Array](structvfisdi_1_1_array.md)< 3 > & date, const [Array](structvfisdi_1_1_array.md)< 3 > & time, const [BCD](classvfisdi_1_1_b_c_d.md)< 4 > & counter, const [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & optional =[EMVTxn](structvfisdi_1_1_e_m_v_txn.md)()) |
| int | **[emvCtContinueOffline](group__sdiemvct.md#function-emvctcontinueoffline)**([EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & out, const [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & optional =[EMVTxn](structvfisdi_1_1_e_m_v_txn.md)()) |
| int | **[emvCtContinueOnline](group__sdiemvct.md#function-emvctcontinueonline)**([EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & out, bool onlineResult, const [Array](structvfisdi_1_1_array.md)< 2 > & authResp =[Array](structvfisdi_1_1_array.md)< 2 >(), const [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & optional =[EMVTxn](structvfisdi_1_1_e_m_v_txn.md)()) |
| int | **[emvCtUpdateTxnTags](group__sdiemvct.md#function-emvctupdatetxntags)**(unsigned options, const [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & config) |
| int | **[emvCtEndTransaction](group__sdiemvct.md#function-emvctendtransaction)**(unsigned options =0) |
| int | **[emvCtGetCandidateData](group__sdiemvct.md#function-emvctgetcandidatedata)**(std::vector< [CTCandidateData](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md) > & out) |
| int | **[emvCtSendOfflinePIN](group__sdiemvct.md#function-emvctsendofflinepin)**(unsigned short & chipresult) |
| int | **[emvCtCheckSupportedAID](group__sdiemvct.md#function-emvctchecksupportedaid)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid, unsigned char asi, const std::string & defaultLabel, std::vector< [CTCandidate](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md) > & candlist, unsigned short * sw12 =0, const std::vector< [AdditionalCardTag](structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag.md) > * adtCrdTags =0) |
| int | **[emvCtLED](group__sdiemvct.md#function-emvctled)**(bool ledState) |
| int | **[emvCtSendReceive](group__sdiemvct.md#function-emvctsendreceive)**(unsigned options, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[emvCtlsInit](group__sdiemvctls.md#function-emvctlsinit)**(int aidCount =0, unsigned options =0) |
| int | **[emvCtlsExit](group__sdiemvctls.md#function-emvctlsexit)**(unsigned options =0) |
| int | **[emvCtlsSetTermData](group__sdiemvctls.md#function-emvctlssettermdata)**(const [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtlsGetTermData](group__sdiemvctls.md#function-emvctlsgettermdata)**([EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtlsSetAppData](group__sdiemvctls.md#function-emvctlssetappdata)**(unsigned kernel_id, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid, const [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtlsClearAppData](group__sdiemvctls.md#function-emvctlsclearappdata)**(unsigned kernel_id, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid) |
| int | **[emvCtlsClearAllAppData](group__sdiemvctls.md#function-emvctlsclearallappdata)**() |
| int | **[emvCtlsSetTempAppData](group__sdiemvctls.md#function-emvctlssettempappdata)**(unsigned kernel_id, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid, const [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtlsGetAppData](group__sdiemvctls.md#function-emvctlsgetappdata)**(unsigned kernel_id, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid, [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtlsGetAppData](group__sdiemvctls.md#function-emvctlsgetappdata)**(bool first, [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvCtlsSetCAPKey](group__sdiemvctls.md#function-emvctlssetcapkey)**(const [Array](structvfisdi_1_1_array.md)< 5 > & rid, unsigned char index, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & key, unsigned char exp, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & hash =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)(), const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & revocationlist =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)()) |
| int | **[emvCtlsClearCAPKey](group__sdiemvctls.md#function-emvctlsclearcapkey)**(const [Array](structvfisdi_1_1_array.md)< 5 > & rid, unsigned char index) |
| int | **[emvCtlsClearAllCAPKey](group__sdiemvctls.md#function-emvctlsclearallcapkey)**() |
| int | **[emvCtlsGetCAPKeys](group__sdiemvctls.md#function-emvctlsgetcapkeys)**(std::vector< [CAPKeyInfo](structvfisdi_1_1_s_d_i_client_1_1_c_a_p_key_info.md) > & keys) |
| int | **[emvCtlsApplyConfig](group__sdiemvctls.md#function-emvctlsapplyconfig)**(unsigned options =7) |
| int | **[emvCtlsAddVirtualMapEntry](group__sdiemvctls.md#function-emvctlsaddvirtualmapentry)**(int transaction, int currency, unsigned char vterminal) |
| int | **[emvCtlsClearVirtualMap](group__sdiemvctls.md#function-emvctlsclearvirtualmap)**() |
| int | **[emvCtlsSetupTransaction](group__sdiemvctls.md#function-emvctlssetuptransaction)**([EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & out, [EMVTransaction](namespacevfisdi.md#enum-emvtransaction) type, const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > amount, const [Array](structvfisdi_1_1_array.md)< 3 > & date, const [Array](structvfisdi_1_1_array.md)< 3 > & time, const [BCD](classvfisdi_1_1_b_c_d.md)< 4 > & counter, const [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & optional =[EMVTxn](structvfisdi_1_1_e_m_v_txn.md)()) |
| int | **[emvCtlsContinueOffline](group__sdiemvctls.md#function-emvctlscontinueoffline)**([EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & out, unsigned options =0) |
| int | **[emvCtlsContinueOnline](group__sdiemvctls.md#function-emvctlscontinueonline)**([EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & out, bool onlineResult, const [Array](structvfisdi_1_1_array.md)< 2 > & authResp =[Array](structvfisdi_1_1_array.md)< 2 >(), const [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & optional =[EMVTxn](structvfisdi_1_1_e_m_v_txn.md)()) |
| int | **[emvCtlsEndTransaction](group__sdiemvctls.md#function-emvctlsendtransaction)**(unsigned options =0) |
| int | **[emvCtlsGetCandidateData](group__sdiemvctls.md#function-emvctlsgetcandidatedata)**(std::vector< [CTLSCandidateData](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md) > & out) |
| int | **[emvCtlsBreak](group__sdiemvctls.md#function-emvctlsbreak)**() |
| int | **[emvCtlsSmartReset](group__sdiemvctls.md#function-emvctlssmartreset)**(unsigned char readeropt =0, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) * atr =0) |
| int | **[emvCtlsSmartPowerOff](group__sdiemvctls.md#function-emvctlssmartpoweroff)**(unsigned char options) |
| int | **[emvCtlsCardRemoval](group__sdiemvctls.md#function-emvctlscardremoval)**(unsigned timeout_ms) |
| int | **[emvCtlsTransparentCommand](group__sdiemvctls.md#function-emvctlstransparentcommand)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[emvCtlsTransparentSend](group__sdiemvctls.md#function-emvctlstransparentsend)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in) |
| int | **[emvCtlsTransparentReceive](group__sdiemvctls.md#function-emvctlstransparentreceive)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[emvCtlsLEDMode](group__sdiemvctls.md#function-emvctlsledmode)**(unsigned char mode) |
| int | **[emvCtlsLED](group__sdiemvctls.md#function-emvctlsled)**(int led, unsigned char state) |
| int | **[emvCtlsSendReceive](group__sdiemvctls.md#function-emvctlssendreceive)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[nfcInit](group__sdinfc.md#function-nfcinit)**(unsigned char conn_type) |
| int | **[nfcPing](group__sdinfc.md#function-nfcping)**([bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & raw) |
| int | **[nfcGetVersion](group__sdinfc.md#function-nfcgetversion)**(std::string & version) |
| int | **[nfcConfigInit](group__sdinfc.md#function-nfcconfiginit)**() |
| int | **[nfcOpen](group__sdinfc.md#function-nfcopen)**() |
| int | **[nfcClose](group__sdinfc.md#function-nfcclose)**() |
| int | **[nfcFieldOn](group__sdinfc.md#function-nfcfieldon)**() |
| int | **[nfcFieldOff](group__sdinfc.md#function-nfcfieldoff)**() |
| int | **[nfcFieldPolling](group__sdinfc.md#function-nfcfieldpolling)**(unsigned tech_bm, unsigned timeout, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, unsigned char & return_code, [NFCCardCount](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count.md) & card_count, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, std::vector< [NFCCard](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card.md) > & cards) |
| int | **[nfcFieldPollingExt](group__sdinfc.md#function-nfcfieldpollingext)**(unsigned tech_bm, unsigned timeout, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, unsigned char & return_code, [NFCCardCount](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count.md) & card_count, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, std::vector< [NFCCardExt](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_ext.md) > & cards) |
| int | **[nfcFieldCancelPolling](group__sdinfc.md#function-nfcfieldcancelpolling)**() |
| int | **[nfcFieldActivation](group__sdinfc.md#function-nfcfieldactivation)**(unsigned modulation, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & info) |
| int | **[nfcFtechBaud](group__sdinfc.md#function-nfcftechbaud)**(unsigned char baud) |
| int | **[nfcMifareAuthenticate](group__sdinfc.md#function-nfcmifareauthenticate)**(unsigned char blocknum, unsigned char keytype, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & key) |
| int | **[nfcMifareRead](group__sdinfc.md#function-nfcmifareread)**(unsigned char type, unsigned char startblock, unsigned char blockcount, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[nfcMifareWrite](group__sdinfc.md#function-nfcmifarewrite)**(unsigned char type, unsigned char startblock, unsigned char blockcount, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in) |
| int | **[nfcMifareIncrement](group__sdinfc.md#function-nfcmifareincrement)**(unsigned char block, unsigned char value) |
| int | **[nfcMifareDecrement](group__sdinfc.md#function-nfcmifaredecrement)**(unsigned char block, unsigned char value) |
| int | **[nfcMifareIncrementOnly](group__sdinfc.md#function-nfcmifareincrementonly)**(unsigned char block, unsigned char value) |
| int | **[nfcMifareDecrementOnly](group__sdinfc.md#function-nfcmifaredecrementonly)**(unsigned char block, unsigned char value) |
| int | **[nfcMifareRestore](group__sdinfc.md#function-nfcmifarerestore)**(unsigned char block) |
| int | **[nfcMifareTransfer](group__sdinfc.md#function-nfcmifaretransfer)**(unsigned char block) |
| int | **[nfcFelicaSendReceive](group__sdinfc.md#function-nfcfelicasendreceive)**(unsigned timeout, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[nfcFelicaPolling](group__sdinfc.md#function-nfcfelicapolling)**(unsigned poll_timeout, unsigned recv_timeout, unsigned short system_code, unsigned char req_code, unsigned char time_slot, [Array](structvfisdi_1_1_array.md)< 8 > & uid, [Array](structvfisdi_1_1_array.md)< 8 > & pad, unsigned short & system_code_out) |
| int | **[nfcApduSendReceive](group__sdinfc.md#function-nfcapdusendreceive)**(const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out, unsigned short & cardsw1sw2) |
| int | **[nfcTxRx](group__sdinfc.md#function-nfctxrx)**(unsigned card_type, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |
| int | **[vasSetTerminalConfig](group__sdivas.md#function-vassetterminalconfig)**(const std::string & config) |
| int | **[vasGetTerminalConfig](group__sdivas.md#function-vasgetterminalconfig)**(const std::string & appid, std::string & config) |
| int | **[vasGetConfig](group__sdivas.md#function-vasgetconfig)**(const std::string & appid, std::string & config) |
| int | **[vasActivate](group__sdivas.md#function-vasactivate)**(const std::string & appid, const std::string & config, std::string & data) |
| int | **[vasCancel](group__sdivas.md#function-vascancel)**() |
| int | **[vasUpdateConfig](group__sdivas.md#function-vasupdateconfig)**(const std::string & appid, const std::string & config) |
| int | **[vasCancelConfig](group__sdivas.md#function-vascancelconfig)**(const std::string & appid) |
| int | **[vasPreload](group__sdivas.md#function-vaspreload)**(const std::string & appid, const std::string & config) |
| int | **[vasCancelPreload](group__sdivas.md#function-vascancelpreload)**(const std::string & appid) |
| int | **[vasDecrypt](group__sdivas.md#function-vasdecrypt)**(const std::string & appid, const std::string & cipher, std::string & plain) |
| int | **[vasAction](group__sdivas.md#function-vasaction)**(const std::string & appid, const std::string & in, std::string & out) |
| void | **[setLogCallbacks](group__sdisetup.md#function-setlogcallbacks)**(void * data, [LogCallback](classvfisdi_1_1_s_d_i_client.md#typedef-logcallback) error, [LogCallback](classvfisdi_1_1_s_d_i_client.md#typedef-logcallback) debug) |
| void | **[setCallbackData](group__sdicallback.md#function-setcallbackdata)**(void * d) |
| void | **[setStatusCallback](group__sdicallback.md#function-setstatuscallback)**(void(*)(void *data, int digits, std::string &display) cb) |
| void | **[setControlCallback](group__sdicallback.md#function-setcontrolcallback)**(int(*)(void *data, [TLV](classvfisdi_1_1_t_l_v.md) &t) cb) |
| void | **[setNotifyCallback](group__sdicallback.md#function-setnotifycallback)**(void(*)(void *data, [TLV](classvfisdi_1_1_t_l_v.md) &t) cb) |
| void | **[setNavigatorCallback](group__sdicallback.md#function-setnavigatorcallback)**(void(*)(void *data, int status) cb) |
| void | **[setCardDetectCallback](group__sdicallback.md#function-setcarddetectcallback)**(void(*)(void *data, int retcode, unsigned char tec_out, [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) &emv_out, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) &plugin_result) cb) |
| void | **[setEMVCallback](group__sdicallback.md#function-setemvcallback)**(void(*)(void *data, unsigned type, [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) &in, [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) &out) cb) |
| void | **[setAsyncCardDetectEmvCallback](group__sdicallback.md#function-setasynccarddetectemvcallback)**(void(*)(void *data, unsigned type, [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) &in) cb) |
| void | **[setCardRemovalCallback](group__sdicallback.md#function-setcardremovalcallback)**(void(*)(void *data) cb) |
| void | **[setDisconnectCallback](group__sdicallback.md#function-setdisconnectcallback)**(void(*)(void *data) cb) |
| int | **[pluginCmd](group__sdiplugin.md#function-plugincmd)**(unsigned char plugin, unsigned char cmd, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & in, [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & out) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[logError](classvfisdi_1_1_s_d_i_client.md#function-logerror)**(const char * file, int line, const char * format, ... ) |
| void | **[logDebug](classvfisdi_1_1_s_d_i_client.md#function-logdebug)**(const char * file, int line, const char * format, ... ) |
| int | **[sendMessage_nolock](classvfisdi_1_1_s_d_i_client.md#function-sendmessage-nolock)**(unsigned short cmd, unsigned short p1p2, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & data) |
| int | **[sendReply_nolock](classvfisdi_1_1_s_d_i_client.md#function-sendreply-nolock)**(unsigned short cmd, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & data) |
| void | **[close_nolock](classvfisdi_1_1_s_d_i_client.md#function-close-nolock)**() |
| void | **[reader_thread](classvfisdi_1_1_s_d_i_client.md#function-reader-thread)**() |
| int | **[emvXExit](classvfisdi_1_1_s_d_i_client.md#function-emvxexit)**(unsigned short cmd, unsigned options =0) |
| int | **[emvXSetTermData](classvfisdi_1_1_s_d_i_client.md#function-emvxsettermdata)**(unsigned short cmd, const [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvXGetTermData](classvfisdi_1_1_s_d_i_client.md#function-emvxgettermdata)**(unsigned short cmd, [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv) |
| int | **[emvXSetCAPKey](classvfisdi_1_1_s_d_i_client.md#function-emvxsetcapkey)**(unsigned short cmd, const [Array](structvfisdi_1_1_array.md)< 5 > & rid, unsigned char index, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & key, unsigned char exp, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & hash =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)(), const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & revocationlist =[bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector)()) |
| int | **[emvXClearCAPKey](classvfisdi_1_1_s_d_i_client.md#function-emvxclearcapkey)**(unsigned short cmd, const [Array](structvfisdi_1_1_array.md)< 5 > & rid, unsigned char index) |
| int | **[emvXClearAllCAPKey](classvfisdi_1_1_s_d_i_client.md#function-emvxclearallcapkey)**(unsigned short cmd) |
| int | **[emvXGetCAPKeys](classvfisdi_1_1_s_d_i_client.md#function-emvxgetcapkeys)**(unsigned short cmd, std::vector< [CAPKeyInfo](structvfisdi_1_1_s_d_i_client_1_1_c_a_p_key_info.md) > & keys) |
| int | **[emvXApplyConfig](classvfisdi_1_1_s_d_i_client.md#function-emvxapplyconfig)**(unsigned short cmd, unsigned options) |
| int | **[emvXAddVirtualMapEntry](classvfisdi_1_1_s_d_i_client.md#function-emvxaddvirtualmapentry)**(unsigned short cmd, int transaction, int currency, unsigned char vterminal) |
| int | **[emvXClearVirtualMap](classvfisdi_1_1_s_d_i_client.md#function-emvxclearvirtualmap)**(unsigned short cmd) |
| int | **[emvXContinueOnline](classvfisdi_1_1_s_d_i_client.md#function-emvxcontinueonline)**([EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & out, unsigned short cmd, bool onlineResult, const [Array](structvfisdi_1_1_array.md)< 2 > & authResp, const [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) & optional) |
| int | **[emvXEndTransaction](classvfisdi_1_1_s_d_i_client.md#function-emvxendtransaction)**(unsigned short cmd, unsigned options) |
| int | **[emvCtlsSetAppData](classvfisdi_1_1_s_d_i_client.md#function-emvctlssetappdata)**(unsigned kernel_id, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid, const [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv, unsigned char config_cmd) |
| int | **[emvCtlsGetAppData](classvfisdi_1_1_s_d_i_client.md#function-emvctlsgetappdata)**(unsigned kernel_id, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & aid, [EMVConf](structvfisdi_1_1_e_m_v_conf.md) & emv, unsigned char config_cmd) |
| int | **[getResult](classvfisdi_1_1_s_d_i_client.md#function-getresult)**(unsigned short sw12) |
| int | **[getResult](classvfisdi_1_1_s_d_i_client.md#function-getresult)**(unsigned short sw12, const [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) & reply, int error_offset) |
| int | **[getResult](classvfisdi_1_1_s_d_i_client.md#function-getresult)**(unsigned short sw12, [TLV](classvfisdi_1_1_t_l_v.md) & t, int error_offset) |
| void * | **[reader_thread](classvfisdi_1_1_s_d_i_client.md#function-reader-thread)**(void * data) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| PrivateData * | **[p](classvfisdi_1_1_s_d_i_client.md#variable-p)**  |

## Detailed Description

```cpp
class vfisdi::SDIClient;
```


SDI client 

## Public Types Documentation

### enum ProtocolType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PROTOCOL_B | |  protocol type B, for main SDI server access  |
| PROTOCOL_C | |  protocol type C, for limited access concurrent to main application  |




SDI protocol 


### enum IdleScreenMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| IDLE_HOTKEY_ADMIN | =0|  Admin menu can be activated using 2-5-8 (default)  |
| IDLE_NO_ADMIN | =1|  Admin menu is disabled  |
| IDEL_SHOW_ADMIN | =2|  Admin menu is enabled  |




idle screen mode (if enabled in config.json), (DFA155) 


### typedef bytevector

```cpp
typedef std::vector<unsigned char> bytevector;
```


shorter name for std::vector<unsigned char> 


### typedef LogCallback

```cpp
typedef void(* LogCallback(void *data, const char *file, int line, const char *format, va_list ap);
```


**Parameters**: 

  * **data** data pointer 
  * **format** printf-like format string 
  * **ap** variable args pointer 


log callback 


## Protected Types Documentation

### enum @13

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| STX | =0x02|   |
| ETX | =0x03|   |




## Public Functions Documentation

### function isGenericError

```cpp
static inline bool isGenericError(
    int r
)
```


**Return**: true if error is a generic error 

### function isSystemError

```cpp
static inline bool isSystemError(
    int r
)
```


**Return**: true if error is a system error 

### function isCardreaderError

```cpp
static inline bool isCardreaderError(
    int r
)
```


**Return**: true if error is a card reader error 

### function isDisplayError

```cpp
static inline bool isDisplayError(
    int r
)
```


**Return**: true if error is a display error 

### function isPrinterError

```cpp
static inline bool isPrinterError(
    int r
)
```


**Return**: true if error is a printer error 

### function isPluginError

```cpp
static inline bool isPluginError(
    int r
)
```


**Return**: true if error is a plugin error 

### function isVCLError

```cpp
static inline bool isVCLError(
    int r
)
```


**Return**: true if error is a VCL error 

### function isEMVError

```cpp
static inline bool isEMVError(
    int r
)
```


**Return**: true if error is a EMV error 

### function isPEDError

```cpp
static inline bool isPEDError(
    int r
)
```


**Return**: true if error is a PED error 

### function isNFCError

```cpp
static inline bool isNFCError(
    int r
)
```


**Return**: true if error is a NFC error 

### function isVASError

```cpp
static inline bool isVASError(
    int r
)
```


deprecated: VAS methods share the NFC error codes 


### function isDataError

```cpp
static inline bool isDataError(
    int r
)
```


**Return**: true if error is a data error 

### function isSECError

```cpp
static inline bool isSECError(
    int r
)
```


**Return**: true if error is a SEC error 

### function SDIClient

```cpp
SDIClient()
```


constructor 


### function ~SDIClient

```cpp
virtual ~SDIClient()
```


destructor 


### function setProtocol

```cpp
void setProtocol(
    ProtocolType proto
)
```


**Parameters**: 

  * **proto** protocol type 


set protocol type


### function setTrace

```cpp
void setTrace(
    void * data,
    void(*)(void *data, const char *format,...) trace_cb
)
```


### function setTrace

```cpp
template <typename R ,
typename T >
inline void setTrace(
    T * data,
    R(*)(T *data, const char *format,...) trace
)
```


**Parameters**: 

  * **data** data pointer to be passed to the trace callback 
  * **trace** trace callback function, use NULL to reset the callback 


**Note**: The interface can be used for tracing with fprintf like this: setTrace(stderr,fprintf) 

set trace callback function. The trace callback traces sent and received bytes and can be used for logging 


### function connect

```cpp
int connect(
    const char * host,
    unsigned short port =12000
)
```


**Parameters**: 

  * **host** host name or path name of unix domain socket 
  * **port** TCP port number, ignored in case of unix domain socket 


**Return**: OK in case of success, ERR_NOT_CONNECTED in case of failure 

connect to SDI server 


### function connect

```cpp
int connect(
    vfiipc::IPC * link
)
```


**Parameters**: 

  * **link** already connected IPC object 


**Return**: OK in case of success, ERR_NOT_CONNECTED in case of failure (e.g. link==0) 

**Note**: If successful, ownership is transferred to [SDIClient](classvfisdi_1_1_s_d_i_client.md). The Object will be deleted when invoking [close()](group__sdisetup.md#function-close); 

set up connection to SDI server 


### function connected

```cpp
bool connected() const
```


**Return**: true if a connection exists, false if not. 

check whether a connection to SDI server exists 


### function close

```cpp
void close()
```


close connection to SDI server 


### function sendMessage

```cpp
int sendMessage(
    unsigned short cmd,
    unsigned short p1p2,
    const bytevector & data
)
```


**Parameters**: 

  * **cmd** class and instruction of the command to be sent 
  * **p1p2** P1 and P2 of the command to be sent 
  * **data** command data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

send SDI message 


### function sendMessage

```cpp
inline int sendMessage(
    unsigned short cmd,
    const bytevector & data
)
```


**Parameters**: 

  * **cmd** class and instruction of the command to be sent 
  * **data** command data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

send SDI command with P1P2=0x0000 


### function receiveMessage

```cpp
int receiveMessage(
    unsigned short & sw1sw2,
    bytevector & data
)
```


**Parameters**: 

  * **sw1sw2** SW1 SW2 packed into an unsigned short as returned from SDI 
  * **data** reply data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

receive SDI reply with internal handling of SDI callbacks. 


### function sendReply

```cpp
int sendReply(
    unsigned short cmd,
    const bytevector & data
)
```


**Parameters**: 

  * **cmd** class and instruction of the reply to be sent 
  * **data** command data 


**Return**: 0 in case of success, -1 in case of failure 

send SDI reply for an SDI callback message 


### function sendReceiveMessage

```cpp
int sendReceiveMessage(
    unsigned short cmd,
    unsigned short p1p2,
    const bytevector & sdata,
    unsigned short & sw1sw2,
    bytevector & rdata
)
```


**Parameters**: 

  * **cmd** class and instruction of the command to be sent 
  * **p1p2** P1 and P2 of the command to be sent 
  * **sdata** command data 
  * **sw1sw2** SW1 SW2 packed into an unsigned short as returned from SDI 
  * **rdata** reply data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

send and receive SDI message 


### function sendReceiveMessage

```cpp
inline int sendReceiveMessage(
    unsigned short cmd,
    const bytevector & sdata,
    unsigned short & sw1sw2,
    bytevector & rdata
)
```


### function sysAbort

```cpp
int sysAbort()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: Not all commands can be aborted. 

abort the current command in progress (20-02) 


### function sysGetConfig

```cpp
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

```cpp
int sysGetCPUID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read CPU unique ID (20-03)


### function sysGetSerialNumber

```cpp
int sysGetSerialNumber(
    std::string & sn
)
```


**Parameters**: 

  * **sn** serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read serial number (20-03)


### function sysGetBootSoftwareID

```cpp
int sysGetBootSoftwareID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read boot software ID (20-03)


### function sysGetApplicationSoftwareID

```cpp
int sysGetApplicationSoftwareID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read application software ID (20-03)


### function sysGetHardwareID

```cpp
int sysGetHardwareID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read hardware ID (20-03)


### function sysGetIFMID

```cpp
int sysGetIFMID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read IFM ID (20-03)


### function sysGetEMVL2ID

```cpp
int sysGetEMVL2ID(
    std::string & id
)
```


**Parameters**: 

  * **id** ID 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read EMV L2 ID (20-03)


### function sysGetStatus

```cpp
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

```cpp
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

```cpp
int sysGetTamperStatus(
    Array< 9 > & tamper
)
```


**Parameters**: 

  * **tamper** tamper status 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get tamper status (20-04)


### function sysGetBatteryStatus

```cpp
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

```cpp
int sysGetBatteryVoltage(
    unsigned short & voltage
)
```


**Parameters**: 

  * **voltage** battery voltage 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get battery voltage (coin cell) (20-04) 


### function sysGetLanguage

```cpp
int sysGetLanguage(
    enum Language & language
)
```


**Parameters**: 

  * **language** language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get language (20-04) 


### function sysGetCVVDeactivation

```cpp
int sysGetCVVDeactivation(
    unsigned char & cfg
)
```


**Parameters**: 

  * **cfg** Card Entry Value Deactivation 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get CVV deactivation (20-04) 


### function sysGetCardEntryMode

```cpp
int sysGetCardEntryMode(
    unsigned char & mode
)
```


**Parameters**: 

  * **mode** card entry mode 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get card entry mode (20-04) 


### function sysSetDateTime

```cpp
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

```cpp
int sysSetLanguage(
    enum Language language
)
```


**Parameters**: 

  * **language** language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set language (20-09) 


### function sysSetCVVDeactivation

```cpp
int sysSetCVVDeactivation(
    unsigned char deactivate
)
```


**Parameters**: 

  * **deactivate** deactivation value 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set CVV deactivation (20-09) 


### function sysSetCardEntryMode

```cpp
int sysSetCardEntryMode(
    unsigned char mode
)
```


**Parameters**: 

  * **mode** card entry mode 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set card entry mode (20-09) 


### function sysSetDisplayBacklight

```cpp
int sysSetDisplayBacklight(
    unsigned char backlight
)
```


**Parameters**: 

  * **backlight** backlight 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set display backlight (20-09) 


### function sysSetDisplayConstrast

```cpp
int sysSetDisplayConstrast(
    unsigned char contrast
)
```


**Parameters**: 

  * **contrast** contrast 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set display contrast (20-09) 


### function sysGetKSN

```cpp
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

```cpp
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

```cpp
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

```cpp
int sysSetIdleText(
    const std::string & text
)
```


**Parameters**: 

  * **text** idle text 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set the idle text (20-13) 


### function sysClearIdleText

```cpp
int sysClearIdleText()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

clear the idle text (20-13) 


### function sysUploadBegin

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
int sysShutdown()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

perform system shutdown (20-17) 


### function sysReboot

```cpp
int sysReboot()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

perform system reboot (20-17) 


### function sysSleep

```cpp
int sysSleep()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set system to sleep state (20-17) 


### function sysHibernate

```cpp
int sysHibernate()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set system to hibernate state (20-17) 


### function sysShowMACDesktop

```cpp
int sysShowMACDesktop()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

show MAC desktop (20-18) 


### function sysSetPropertyString

```cpp
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

```cpp
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

```cpp
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

```cpp
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

```cpp
int sysInstallSponsorCert(
    const bytevector & cert
)
```


**Parameters**: 

  * **cert** certificate 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

install DER encoded X.509 certficate (20-1B) 


### function sysGetSDIVersion

```cpp
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

```cpp
int sysInstallUpdate(
    SYSUpdateType type
)
```


**Parameters**: 

  * **type** update type 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Install update, that has been uploaded before. (20-1D) 


### function sysInstallResult

```cpp
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

```cpp
int sysEnableEPP(
    bool enable
)
```


**Parameters**: 

  * **enable** if true enable EPP, else disable 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Enable EPP (20-21) 


### function sysFactoryReset

```cpp
int sysFactoryReset()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Trigger factory reset (20-22) 


### function sysReadCert

```cpp
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

```cpp
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


### function displayText

```cpp
int displayText(
    int template_id,
    const std::string & data_name,
    const std::string & data_value,
    int timeout =0,
    bool confirm =false,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **template_id** display template identifier (DFA010) 
  * **data_name** display data name (DFA012) 
  * **data_value** display data value (e.g UTF-8 coded text string) (DFA013) 
  * **timeout** timeout in seconds, 0 means no timeout (DFA005) 
  * **confirm** confirmation requested (DFA006) 
  * **beep** beep when text will be displayed (DFA00D) 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

display text (24-03) 


### function displayText

```cpp
int displayText(
    int template_id,
    unsigned dialog_opt,
    const std::map< std::string, std::string > & value,
    const std::map< std::string, std::string > & key_actions,
    const char * header_text =0,
    const char * enter_text =0,
    const char * clear_text =0,
    const char * cancel_text =0,
    int timeout =0,
    int dest =1
)
```


**Parameters**: 

  * **template_id** display template identifier (DFA010) 
  * **dialog_opt** dialog options ([DialogOptions](namespacevfisdi.md#enum-dialogoptions)) (DFA13D) 
  * **value** display data key value map (FFA011) 
  * **key_actions** (FFA106) 
  * **header_text** optional header text. If provided flag DLG_NO_HEADER is ignored. (DFA143) 
  * **enter_text** optional enter button text. If provided flag DLG_ENTER_KEY is implicitly added. (DFA13E) 
  * **clear_text** optional clear button text. If provided flag DLG_CLEAR_KEY is implicitly added. (DFA13F) 
  * **cancel_text** optional cancel button text. If provided flag DLG_CANCEL_KEY is implicitly added. (DFA140) 
  * **timeout** timeout in seconds, 0 means no timeout (DFA005) 
  * **dest** display destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

display text (24-03) 


### function displayText

```cpp
inline int displayText(
    const std::string & data_value,
    int timeout =0,
    bool confirm =false,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **data_value** display data value (e.g UTF-8 coded text string) 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **confirm** confirmation requested 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

display text using display template_id=1 and data_name="text" (24-03) 


### function displayInput

```cpp
int displayInput(
    std::string & out,
    InputType type,
    Language language =LANGUAGE_NO_LANGUAGE,
    char maskchar =0,
    const std::string & altformat ="",
    int timeout =0,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **out** entered value 
  * **type** InputType 
  * **language** language (e.g. LANGUAGE_ENGLISH) 
  * **maskchar** masking character in the range 20..7E, 0 disables masking character 
  * **altformat** alternate format string, if not empty 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

secure input (24-04) 


### function displayInputTipWithAmount

```cpp
int displayInputTipWithAmount(
    std::string & out,
    Language language,
    const BCD< 6 > & amount,
    Currency currency,
    char maskchar =0,
    const std::string & altformat ="",
    int timeout =0,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **out** entered value 
  * **language** language (e.g. LANGUAGE_ENGLISH) 
  * **amount** payment amount 
  * **currency** currency 
  * **maskchar** masking character in the range 20..7E, 0 disables masking character 
  * **altformat** alternate format string, if not empty 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

secure tip input with display of the payment amount (24-04) 


### function displayMenu

```cpp
int displayMenu(
    const std::string & prompt,
    const std::vector< std::string > & entries,
    int timeout =0,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **prompt** menu prompt 
  * **dialog_opt** dialog options ([DialogOptions](namespacevfisdi.md#enum-dialogoptions)) (DFA13D) 
  * **entries** menu entries 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Selected menu entry (first menu entry has index 0) (>=0) or SDI error code (<0). 

**Note**: GUI error codes are mapped to SDI error codes! 

display menu (24-05) 


### function displayMenu

```cpp
int displayMenu(
    unsigned dialog_opt,
    const std::string & prompt,
    const std::vector< std::string > & entries,
    int preselect,
    const std::map< std::string, std::string > & key_actions,
    const char * header_text =0,
    const char * enter_text =0,
    const char * cancel_text =0,
    const char * up_text =0,
    const char * down_text =0,
    int timeout =0,
    int dest =1
)
```


**Parameters**: 

  * **prompt** menu prompt (DFA00A) 
  * **dialog_opt** dialog options ([DialogOptions](namespacevfisdi.md#enum-dialogoptions)) (DFA13D) 
  * **entries** menu entries (DFA00B) 
  * **preselect** if >0 preselected menu entry, index of first entry is 1 (DFA00C) 
  * **key_actions** (FFA106) 
  * **header_text** optional header text. If provided flag DLG_NO_HEADER is ignored. (DFA143) 
  * **enter_text** optional enter button text. (DFA13E) 
  * **cancel_text** optional cancel button text. (DFA140) 
  * **up_text** optional up button text. (DFA141) 
  * **down_text** optional down button text. (DFA142) 
  * **timeout** timeout in seconds, 0 means no timeout 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Selected menu entry (first menu entry has index 1) / exit code (>=0) or SDI error code (<0). 

**Note**: 

  * IMPORTANT: This function uses a different indexing of menu entries than the other (old) displayMenu function. The reason for this is that SDI uses indexes starting at 1 and mapping the menu index to be 0-based could collide with return values configured in key_actions so that this mapping can no longer be provided. 
  * GUI error codes are mapped to SDI error codes! 


**Par**: 

display menu (24-05) 


### function displayCardRequest

```cpp
int displayCardRequest(
    unsigned char tec,
    unsigned char mode,
    const BCD< 6 > amount,
    int currency,
    int dest =1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **mode** mode: 0 = default, 1 = fallback, 2 = retry 
  * **amount** amount 
  * **currency** currency ([Currency](namespacevfisdi.md#enum-currency)) 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show card request display according the given parameter. It can be used directly before the Card Detection command (23-01) to show the corresponding display including the contactless logo if required. Only physical card technologies are supported. For manual card data entry only this command is not to be used because the user dialog is handled automatically inside the Card Detection command. (24-06) 


### function displayCardRequest

```cpp
inline int displayCardRequest(
    unsigned char tec,
    unsigned char mode,
    int dest =1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **mode** mode: 0 = default, 1 = fallback, 2 = retry 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show card request display without amount. (24-06) 


### function displayCardRequest

```cpp
int displayCardRequest(
    unsigned char tec,
    unsigned char mode,
    const BCD< 6 > amount,
    int currency,
    enum EMVTransaction txn,
    int dest =1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **mode** mode: 0 = default, 1 = fallback, 2 = retry 
  * **amount** amount 
  * **currency** currency ([Currency](namespacevfisdi.md#enum-currency)) 
  * **txn** EMV transaction type 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show card request display according the given parameter. It can be used directly before the Card Detection command (23-01) to show the corresponding display including the contactless logo if required. Only physical card technologies are supported. For manual card data entry only this command is not to be used because the user dialog is handled automatically inside the Card Detection command. (24-06) 


### function displayCardRequest

```cpp
inline int displayCardRequest(
    unsigned char tec,
    unsigned char mode,
    enum EMVTransaction txn,
    int dest =1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **mode** mode: 0 = default, 1 = fallback, 2 = retry 
  * **txn** EMV transaction type 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show card request display without amount. (24-06) 


### function displayIdleScreen

```cpp
int displayIdleScreen(
    int dest =1
)
```


**Parameters**: 

  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Display idle screen, check the SDI server documentation for more information on the idle screen (24-07) 


### function displayIdleScreenMode

```cpp
int displayIdleScreenMode(
    enum IdleScreenMode mode,
    int dest =1
)
```


**Parameters**: 

  * **mode** idle screen mode 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Display idle screen with selecting admin mode, check the SDI server documentation for more information on the idle screen (24-07) 


### function displaySignatureCapture

```cpp
int displaySignatureCapture(
    std::string & outformat,
    bytevector & outdata,
    Language lang,
    unsigned short timeout =0,
    int dest =1
)
```


**Parameters**: 

  * **outformat** signature format, e.g. "png" 
  * **outdata** signature data 
  * **lang** language (e.g. LANGUAGE_ENGLISH) 
  * **timeout** timeout in seconds, 0 to deactivate timeout 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Show signature capture dialog (24-08) 


### function displayLEDs

```cpp
int displayLEDs(
    bool on
)
```


**Parameters**: 

  * **on** true to activate, false to deactivate 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Activate / deactivate display of virtual CTLS LED area on the display. The command itself doesn't change the display at all. The display content will be updated with the next screen update. The payment application is responsible for the correct command order. (24-09) 


### function displayDialog

```cpp
int displayDialog(
    const std::string & filename,
    std::map< std::string, std::string > & value,
    Language lang =LANGUAGE_NO_LANGUAGE,
    bool beep =false,
    int dest =1
)
```


**Parameters**: 

  * **filename** HTML file name without path 
  * **value** key value map containing the values for display. It gets updated by the values that have been entered in the dialog. 
  * **lang** language 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Dialog result (>=0) or SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: GUI error codes are mapped to SDI error codes! 

Display customer specific HTML dialog.The dialog has to be stored in a separate user signed HTML file. The appearance of the dialog can be controlled with a corresponding CSS file. (24-0A) 


### function displayDialog

```cpp
int displayDialog(
    unsigned dialog_opt,
    const std::string & filename,
    std::map< std::string, std::string > & value,
    Language lang =LANGUAGE_NO_LANGUAGE,
    int dest =1
)
```


**Parameters**: 

  * **dialog_opt** dialog options ([DialogOptions](namespacevfisdi.md#enum-dialogoptions)) (DFA13D) 
  * **filename** HTML file name without path 
  * **value** key value map containing the values for display. It gets updated by the values that have been entered in the dialog. 
  * **lang** language 
  * **beep** beep when text will be displayed 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Dialog result (>=0) or SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: GUI error codes are mapped to SDI error codes! 

Display customer specific HTML dialog.The dialog has to be stored in a separate user signed HTML file. The appearance of the dialog can be controlled with a corresponding CSS file. (24-0A) 


### function displayGetAsyncResult

```cpp
int displayGetAsyncResult(
    enum DialogAsyncStatus & status,
    int dest =1
)
```


**Parameters**: 

  * **status** async dialog status 
  * **dest** display destination: countertop=1, EPP=2 


**Return**: Dialog result (>=0) or SDI error code ([Result](namespacevfisdi.md#enum-result)) 

get the result of an input started with dialog option DLG_ASYNC 


### function printSetPropertyString

```cpp
int printSetPropertyString(
    int property,
    const std::string & in
)
```


**Parameters**: 

  * **property** property ID ([PrtPropertyString](namespacevfisdi.md#enum-prtpropertystring)) 
  * **in** new property value 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set string property (25-00) 


### function printSetPropertyInt

```cpp
int printSetPropertyInt(
    int property,
    int in
)
```


**Parameters**: 

  * **property** property ID ([PrtPropertyInt](namespacevfisdi.md#enum-prtpropertyint)) 
  * **in** new property value 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set int property (25-00) 


### function printGetPropertyString

```cpp
int printGetPropertyString(
    int property,
    std::string & out
)
```


**Parameters**: 

  * **property** property ID ([PrtPropertyString](namespacevfisdi.md#enum-prtpropertystring)) 
  * **out** read property 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read string property (25-01) 


### function printGetPropertyInt

```cpp
int printGetPropertyInt(
    int property,
    int & out
)
```


**Parameters**: 

  * **property** property ID ([PrtPropertyInt](namespacevfisdi.md#enum-prtpropertyint)) 
  * **out** read property 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read int property (25-01) 


### function printHTML

```cpp
int printHTML(
    const std::string & html,
    bool landscape =false
)
```


**Parameters**: 

  * **html** HTML document 
  * **landscape** if true print in landscape 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

print HTML document 


### function printBitmap

```cpp
int printBitmap(
    int width,
    int height,
    const void * bitmap,
    unsigned size
)
```


**Parameters**: 

  * **width** width of bitmap 
  * **height** height of bitmap 
  * **bitmap** bitmap data, set bits represent black pixels, ordering left to right is MSB to LSB. 
  * **size** size of _bitmap_ in bytes 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

print bitmap 


### function printBitmap

```cpp
inline int printBitmap(
    int width,
    int height,
    const bytevector & bitmap
)
```


**Parameters**: 

  * **width** width of bitmap 
  * **height** height of bitmap 
  * **bitmap** bitmap data, set bits represent black pixels, ordering left to right is MSB to LSB. 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

print bitmap 


### function msrRead

```cpp
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track2,
    int timeout_sec
)
```


**Parameters**: 

  * **pan** obfuscated PAN 
  * **name** card holder name 
  * **service** service code 
  * **track2** obfuscated track 2 data 
  * **timeout_sec** timeout in seconds (0..128) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrRead

```cpp
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track2,
    Array< 3 > & track_status,
    int timeout_sec
)
```


**Parameters**: 

  * **pan** obfuscated PAN 
  * **name** card holder name 
  * **service** service code 
  * **track2** obfuscated track 2 data 
  * **track_status** track status ([MSRTrackStatus](namespacevfisdi.md#enum-msrtrackstatus), one byte per track, in the order track3, track2, track1!) 
  * **timeout_sec** timeout in seconds (0..128) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrRead

```cpp
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track2,
    Array< 3 > & track_status,
    bytevector & card_token,
    int timeout_sec,
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **pan** obfuscated PAN 
  * **name** card holder name 
  * **service** service code 
  * **track2** obfuscated track 2 data 
  * **track_status** track status ([MSRTrackStatus](namespacevfisdi.md#enum-msrtrackstatus), one byte per track, in the order track3, track2, track1!) 
  * **card_token** unique card token 
  * **timeout_sec** timeout in seconds (0..128) 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrRead

```cpp
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track2,
    Array< 3 > & track_status,
    bytevector & card_token,
    std::vector< PluginResult > & plugin_result,
    int timeout_sec,
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **pan** PAN 
  * **name** card holder name 
  * **service** service code 
  * **track2** track 2 data 
  * **track_status** track status ([MSRTrackStatus](namespacevfisdi.md#enum-msrtrackstatus), one byte per track, in the order track3, track2, track1!) 
  * **card_token** unique card token 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **timeout_sec** timeout in seconds (0..128) 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrRead

```cpp
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track1,
    std::string & track2,
    Array< 3 > & track_status,
    bytevector & card_token,
    std::vector< PluginResult > & plugin_result,
    int timeout_sec,
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **pan** obfuscated PAN 
  * **name** card holder name 
  * **service** service code 
  * **track1** obfuscated track 1 data (DFA040) 
  * **track2** obfuscated track 2 data 
  * **track_status** track status ([MSRTrackStatus](namespacevfisdi.md#enum-msrtrackstatus), one byte per track, in the order track3, track2, track1!) 
  * **card_token** unique card token 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **timeout_sec** timeout in seconds (0..128) 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrCardDataEntry

```cpp
int msrCardDataEntry(
    std::string & out,
    const std::vector< TouchButton > & btn =std::vector< TouchButton >()
)
```


**Parameters**: 

  * **out** obfuscated PAN 
  * **btn** position and size of touch buttons 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

manual card data entry (21-02) 


### function msrCardDataEntry

```cpp
int msrCardDataEntry(
    std::string & out,
    bytevector & card_token,
    unsigned flags,
    const std::string & format =std::string(),
    const std::vector< TouchButton > & btn =std::vector< TouchButton >()
)
```


**Parameters**: 

  * **out** obfuscated PAN 
  * **card_token** unique card token 
  * **flags** card entry flags ([MSRDataEntryFlags](namespacevfisdi.md#enum-msrdataentryflags)) 
  * **format** optional alternate input format string 
  * **btn** position and size of touch buttons 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

manual card data entry (21-02) 


### function msrCardDataEntry

```cpp
int msrCardDataEntry(
    std::string & out,
    bytevector & card_token,
    std::vector< PluginResult > & plugin_result,
    unsigned flags,
    const std::string & format =std::string(),
    const std::vector< TouchButton > & btn =std::vector< TouchButton >()
)
```


**Parameters**: 

  * **out** obfuscated PAN 
  * **card_token** unique card token 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **flags** card entry flags ([MSRDataEntryFlags](namespacevfisdi.md#enum-msrdataentryflags)) 
  * **format** optional alternate input format string 
  * **btn** position and size of touch buttons 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

manual card data entry (21-02) 


### function msrCardDataEntry

```cpp
int msrCardDataEntry(
    std::string & out,
    bytevector & card_token,
    std::vector< PluginResult > & plugin_result,
    unsigned flags,
    int timeout,
    const std::string & format =std::string(),
    const std::vector< TouchButton > & btn =std::vector< TouchButton >()
)
```


**Parameters**: 

  * **out** obfuscated PAN 
  * **card_token** unique card token 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **flags** card entry flags ([MSRDataEntryFlags](namespacevfisdi.md#enum-msrdataentryflags)) 
  * **timeout** timeout in seconds (<0 to use default) 
  * **format** optional alternate input format string 
  * **btn** position and size of touch buttons 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

manual card data entry (21-02) 


### function msrSetOptions

```cpp
int msrSetOptions(
    unsigned options
)
```


**Parameters**: 

  * **options** ([MSROptions](namespacevfisdi.md#enum-msroptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set MSR options. For details see [MSR_SetOptions()](msr_8h.md#function-msr-setoptions) in ADK-MSR (21-03) 


### function msrLED

```cpp
int msrLED(
    unsigned led1,
    unsigned led2,
    unsigned led3,
    unsigned timeout =0
)
```


**Parameters**: 

  * **led1** bit mask for state of led 1 ([MSRLEDState](namespacevfisdi.md#enum-msrledstate)) 
  * **led2** bit mask for state of led 2 ([MSRLEDState](namespacevfisdi.md#enum-msrledstate)) 
  * **led3** bit mask for state of led 3 ([MSRLEDState](namespacevfisdi.md#enum-msrledstate)) 
  * **timeout** if >0 all LEDs are switched off after this time in seconds) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

switch the MSR LEDs (21-04) 


### function msrSetSensitivity

```cpp
int msrSetSensitivity(
    unsigned char sensitivity,
    int dest =1
)
```


**Parameters**: 

  * **sensitivity** sensitivity level in the range 20..200 or 0 to reset to default setting.

 Values >100 will increase MSR sensitivity and amplify signals.

 Values <100 will decrease MSR sensitivity and damp signals.

 Value 100 means no amplification/damping. 
  * **dest** destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set the MSR sensitivity level for the magnetic head for subsequent read operations. Basically, it is recommended to use default MSR sensitivity to get best MSR reading results. Once MSR Set Sensitivity is used with another value than the default, it is recommended to recover default sensitivity as soon as possible. (21-05) 


### function crdDetect

```cpp
int crdDetect(
    unsigned char tec,
    const TECOptions & options,
    bool allow_cancel,
    unsigned timeout_ms,
    unsigned char & tec_out,
    EMVTxn & emv_out,
    const bytevector & appid =bytevector(),
    unsigned char syncCard =0,
    unsigned char manual_mode =0,
    const std::string & format ="",
    bytevector * plugin_result =0
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **allow_cancel** if true enable cancel button (DFA109) 
  * **timeout_ms** timeout in milliseconds, range 0..1275000ms, granularity varies from 500ms to 5s. 
  * **tec_out** selected card technology (DFA108) 
  * **emv_out** emv data 
  * **appid** optional application ID (DFA133->DFDB40) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133->DFDB41) 
  * **manual_mode** manual card entry mode (only considered if enabled in _tec_) (DFA017):

* 0: enter PAN, expiration date and CVV
* 1: enter PAN and expiration date
* 2: enter only PAN 
  * **format** optional input format string for CVV 
  * **plugin_result** plugin result of the card detect trigger, if not NULL (DFA101) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Detect magstripe read, smart card insertion, contactless card or manual card data entry (23-01) 


### function crdDetect

```cpp
int crdDetect(
    unsigned char tec,
    const TECOptions & options,
    bool allow_cancel,
    unsigned timeout_ms,
    unsigned char & tec_out,
    EMVTxn & emv_out,
    std::vector< PluginResult > & plugin_result,
    const bytevector & appid =bytevector(),
    unsigned char syncCard =0,
    unsigned char manual_mode =0,
    const std::string & format ="",
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **allow_cancel** if true enable cancel button (DFA109) 
  * **timeout_ms** timeout in milliseconds, range 0..1275000ms, granularity varies from 500ms to 5s. 
  * **tec_out** selected card technology (DFA108) 
  * **emv_out** emv data 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 
  * **appid** optional application ID (DFA133->DFDB40) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133->DFDB41) 
  * **manual_mode** manual card entry mode (only considered if enabled in _tec_) (DFA017):

* 0: enter PAN, expiration date and CVV
* 1: enter PAN and expiration date
* 2: enter only PAN 
  * **format** optional input format string for CVV 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Detect magstripe read, smart card insertion, contactless card or manual card data entry (23-01) 


### function crdWaitForRemoval

```cpp
int crdWaitForRemoval(
    unsigned short timeout =0
)
```


**Parameters**: 

  * **timeout** timeout in seconds 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

wait until the card is removed (only for contact) (23-02) 


### function crdStartDetect

```cpp
int crdStartDetect(
    unsigned char tec,
    const TECOptions & options,
    unsigned timeout,
    bool use_cb =false,
    const bytevector & appid =bytevector(),
    unsigned char syncCard =0
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **timeout** timeout in seconds 
  * **appid** optional application ID (DFA133) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133) 
  * **use_cb** if true trigger card callback 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

start card detection (23-03) 


### function crdStartDetect

```cpp
int crdStartDetect(
    unsigned char tec,
    const TECOptions & options,
    unsigned timeout,
    bool use_cb,
    const bytevector & appid,
    unsigned char syncCard,
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **timeout** timeout in seconds 
  * **appid** optional application ID (DFA133) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133) 
  * **use_cb** if true trigger card callback 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

start card detection (23-03) 


### function crdPollDetect

```cpp
int crdPollDetect(
    unsigned char & tec_out,
    EMVTxn & emv_out,
    bytevector * plugin_result =0
)
```


**Parameters**: 

  * **tec_out** selected card technology, or 0 in case no card has been found, yet (DFA108) 
  * **emv_out** emv data 
  * **plugin_result** plugin result of the card detect trigger, if not NULL (DFA101) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

poll for detected card (23-04) 


### function crdStopDetect

```cpp
int crdStopDetect()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

stop card detection (23-05) It may be required to call crdPollDetect to get the result in case a card was inserted between the last crdPollDetect and crdStopDetect 


### function crdAddTechnology

```cpp
int crdAddTechnology(
    unsigned char tec,
    const TECOptions & options,
    const bytevector & appid =bytevector(),
    unsigned char syncCard =0
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **appid** optional application ID (DFA133) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

add technology to a running card detection started by crdStartDetect (23-06) 


### function crdRemoveTechnology

```cpp
int crdRemoveTechnology(
    unsigned char tec
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

remove technology to a running card detection started by crdStartDetect (23-07) 


### function crdProvideCallbackResponse

```cpp
int crdProvideCallbackResponse(
    EMVTxn & in
)
```


**Parameters**: 

  * **in** callback response data as [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) object 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

provide callback response (23-08) 


### function pedGetPIN

```cpp
int pedGetPIN(
    const std::vector< TouchButton > & btn =std::vector< TouchButton >(),
    bool bypass =false,
    int timeout =300,
    int navigator_mode =0,
    int min_digits =4,
    int max_digits =12,
    Language lang =LANGUAGE_NO_LANGUAGE
)
```


**Parameters**: 

  * **btn** position and size of touch buttons 
  * **bypass** true if bypass is enabled, else false 
  * **timeout** timeout in seconds 
  * **navigator_mode** navigator mode: 0 (disabled), 1 (mode 1) or 2 (mode 2) 
  * **min_digits** minimum number of PIN digits 
  * **max_digits** maximum number of PIN digits 
  * **lang** language, default is current terminal/transaction language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: In case of bypass ERR_PED_BYPASS is returned. 

PIN entry, PIN status updates trigger invocation of the status callback set using [setStatusCallback()](group__sdicallback.md#function-setstatuscallback) (22-01) 


### function pedGetPIN

```cpp
int pedGetPIN(
    unsigned pin_options,
    const BCD< 6 > amount =0,
    int currency =-1,
    const char * applabel =0,
    const char * headline =0,
    unsigned pwd_char =0,
    const std::vector< TouchButton > & btn =std::vector< TouchButton >(),
    unsigned bypass =BYPASS_DISABLED,
    int timeout =300,
    int interchar_timeout =0,
    int min_digits =4,
    int max_digits =12,
    Language lang =LANGUAGE_NO_LANGUAGE
)
```


**Parameters**: 

  * **pin_options** PIN entry options ([PINEntryOptions](namespacevfisdi.md#enum-pinentryoptions)) 
  * **amount** payment amount (only displayed if also a valid currency is provided) 
  * **currency** currency ([Currency](namespacevfisdi.md#enum-currency)) or -1 
  * **applabel** application label for display or NULL 
  * **headline** headline for display or NULL 
  * **pwd_char** unicode password character code (0: default character) 
  * **btn** position and size of touch buttons 
  * **bypass** true if bypass is enabled, else false 
  * **timeout** timeout in seconds 
  * **interchar_timeout** inter character timeout in milliseconds (0: disabled) 
  * **min_digits** minimum number of PIN digits 
  * **max_digits** maximum number of PIN digits 
  * **lang** language, default is current terminal/transaction language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: In case of bypass ERR_PED_BYPASS is returned. 

PIN entry, PIN status updates trigger invocation of the status callback set using [setStatusCallback()](group__sdicallback.md#function-setstatuscallback) (22-01) 


### function pedGetPIN

```cpp
inline int pedGetPIN(
    bool bypass =false,
    int timeout =300,
    int min_digits =4,
    int max_digits =12,
    Language lang =LANGUAGE_NO_LANGUAGE
)
```


**Parameters**: 

  * **bypass** true if bypass is enabled, else false 
  * **timeout** timeout in seconds 
  * **min_digits** minimum number of PIN digits 
  * **max_digits** maximum number of PIN digits 
  * **lang** language, default is current terminal/transaction language 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

PIN entry using keypad, PIN status updates trigger invocation of the status callback set using [setStatusCallback()](group__sdicallback.md#function-setstatuscallback) (22-01) 


### function pedSetPINTimeout

```cpp
int pedSetPINTimeout(
    unsigned short timeout_sec
)
```


**Parameters**: 

  * **timeout_sec** timeout in seconds 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

configure PIN timeout for pedGetPIN (22-02) 


### function pedConfirmKey

```cpp
void pedConfirmKey()
```


confirm the selected key in Navigator mode 2 (20-20) 


### function pedStartPIN

```cpp
int pedStartPIN(
    const std::vector< TouchButton > & btn =std::vector< TouchButton >(),
    int bypass_key =0,
    int navigator_mode =0,
    int minlen =4,
    int maxlen =12,
    bool clear_all =false,
    bool auto_enter =false
)
```


**Parameters**: 

  * **btn** position and size of touch buttons 
  * **bypass_key** 0: no bypass, ASCII code of bypass key, add ASCII+256 to activate direct bypass 
  * **navigator_mode** navigator mode: 0 (disabled), 1 (mode 1) or 2 (mode 2) 
  * **minlen** minimum PIN length 
  * **maxlen** maximum PIN length 
  * **clear_all** if true backspace clears all digits instead of only last one 
  * **auto_enter** if true automatically confirm PIN if _maxlen_ has been reached 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

start PIN entry (22-03) 


### function pedPollPIN

```cpp
int pedPollPIN(
    PINStatus & pin,
    int & digits,
    int & status
)
```


**Parameters**: 

  * **pin** PINSTATUS_COLLECTING while PIN is entered, PINSTATUS_OK, PINSTATUS_CANCELLED, PINSTATUS_BYPASS, PINSTATUS_TIMEOUT or PINSTATUS_ERROR when done 
  * **digits** number of digits entered or 0xFC for bypass, 0xFD for cancel, 0xFE for timeout or 0xFF for error 
  * **status** additional status information (e.g. for Navigator) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result))

poll PIN entry status (22-04) 
Status information: 
| Status  | Description   |
|  -------- | -------- |
| 0x00  | no key entered or selected   |
| 0x01  | digit entered   |
| 0x08  | backspace entered   |
| 0x0D  | OK entered   |
| 0x1B  | cancel enterd   |
| 0xD1  | numeric key selected   |
| 0xD2  | cancel selected   |
| 0xD3  | backspace selected   |
| 0xDE  | OK selected   |
| 0xDF  | multiple touches   |
| 0xF8  | underflow   |
| 0xF9  | overflow   |


### function pedStopPIN

```cpp
int pedStopPIN()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Stop PIN entry and release resources, cancel PIN entry if required. (22-05) 


### function pedSetPINInputParameter

```cpp
int pedSetPINInputParameter(
    bool clear_all
)
```


**Parameters**: 

  * **clear_all** if true backspace clears all digits instead of only last one 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Configure input parameter for PIN entry (22-06) 


### function pedSetPINInputParameter

```cpp
int pedSetPINInputParameter(
    unsigned pin_options,
    const char * headline =0,
    unsigned pwd_char =0,
    unsigned bypass =BYPASS_DISABLED,
    int interchar_timeout =0,
    int min_digits =4,
    int max_digits =12,
    int dest =1
)
```


**Parameters**: 

  * **pin_options** PIN entry options ([PINEntryOptions](namespacevfisdi.md#enum-pinentryoptions)) 
  * **headline** headline for display or NULL 
  * **pwd_char** unicode password character code (0: default character) 
  * **bypass** true if bypass is enabled, else false 
  * **interchar_timeout** inter character timeout in milliseconds (0: disabled) 
  * **min_digits** minimum number of PIN digits 
  * **max_digits** maximum number of PIN digits 
  * **dest** destination: countertop=1, EPP=2 (DFA150) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: In case of bypass ERR_PED_BYPASS is returned. 

Configure input parameter for PIN entry (22-06) 


### function secOpen

```cpp
int secOpen(
    unsigned & handle,
    const std::string & hostname
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **hostname** host name 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Open the crypto device (70-00) 


### function secClose

```cpp
int secClose(
    unsigned handle
)
```


**Parameters**: 

  * **handle** crypto handle 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Close the crypto device (70-01) 


### function secEncrypt

```cpp
int secEncrypt(
    unsigned handle,
    const bytevector & in,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **in** plain text data (DFA402) 
  * **out** encrypted data 
  * **iv** optional initialization vector (IV), may be NULL 
  * **ksn** optional DUKPT key serial number, may be NULL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Encrypt data (70-02) 


### function secDecrypt

```cpp
int secDecrypt(
    unsigned handle,
    const bytevector & in,
    bytevector & out,
    const bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **in** plain text data 
  * **out** encrypted data 
  * **iv** optional initialization vector (IV), may be NULL 
  * **ksn** optional DUKPT key serial number, may be NULL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Decrypt data (70-03) 


### function secSign

```cpp
int secSign(
    unsigned handle,
    const bytevector & in,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **in** plain text data 
  * **out** MAC or signature 
  * **iv** optional initialization vector (IV), may be NULL 
  * **ksn** optional DUKPT key serial number, may be NULL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Sign data (70-04) 


### function secVerify

```cpp
int secVerify(
    unsigned handle,
    const bytevector & in,
    const bytevector & sig,
    const bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **in** plain text data 
  * **sig** MAC or signature 
  * **iv** optional initialization vector (IV), may be NULL 
  * **ksn** optional DUKPT key serial number, may be NULL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Verify signature (70-05) 


### function secUpdateKey

```cpp
int secUpdateKey(
    unsigned handle,
    unsigned char keyType,
    const bytevector & key,
    bytevector * prop =0,
    const unsigned char * as2805 =0,
    bytevector * key_kcv =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **keyType** key type ([SECKeyType](namespacevfisdi.md#enum-seckeytype)) (DFA40C) 
  * **key** key data, binary data (e.g. 8Byte for 1DES, 16Byte for 3DES and 2TDEA-ADE-DUKPT key, 120Byte for GISKE) [TLV](classvfisdi_1_1_t_l_v.md) if keyType is a Bendigo-type 'KSN incrementation' with keyType=KEY_TYPE_DUKPT effects KSN incrementation (DFA40D) 
  * **prop** if not NULL proprietary data

 in: in case of DUKPT (modules VSS, IPP DUKPT part, ADE): KSN binary data (maybe padded with 0xFF, 0xFF))

 out: in case of VSS-MSK and VSS-DUKPT (module VSS): received data from an assigned Update Finalize macro 
  * **as2805** if not NULL optional AS2805 tag data (1 byte). 
  * **key_kcv** Key Check Value, relevant for MKSK/CustomRKL Key injection and for Trinity/Neo only

 in: kcv of injecting key to verify, it is optional. No verification if empty

 out: kcv of injected key 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Update key (70-06) 


### function secUpdateKey

```cpp
int secUpdateKey(
    unsigned handle,
    unsigned char keyType,
    const bytevector & key,
    bytevector * prop,
    const unsigned char * as2805,
    bytevector * key_kcv,
    const bytevector * iv
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **keyType** key type ([SECKeyType](namespacevfisdi.md#enum-seckeytype)) (DFA40C) 
  * **key** key data, binary data (e.g. 8Byte for 1DES, 16Byte for 3DES and 2TDEA-ADE-DUKPT key, 120Byte for GISKE) [TLV](classvfisdi_1_1_t_l_v.md) if keyType is a Bendigo-type 'KSN incrementation' with keyType=KEY_TYPE_DUKPT effects KSN incrementation (DFA40D) 
  * **prop** if not NULL proprietary data

 in: in case of DUKPT (modules VSS, IPP DUKPT part, ADE): KSN binary data (maybe padded with 0xFF, 0xFF))

 out: in case of VSS-MSK and VSS-DUKPT (module VSS): received data from an assigned Update Finalize macro 
  * **as2805** if not NULL optional AS2805 tag data (1 byte). 
  * **key_kcv** Key Check Value, relevant for MKSK/CustomRKL Key injection and for Trinity/Neo only

 in: kcv of injecting key to verify, it is optional. No verification if empty

 out: kcv of injected key 
  * **iv** if not NULL optional initial vector, relevant for Trinity/Neo only. 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Update key (70-06) 


### function secSetKeySetID

```cpp
int secSetKeySetID(
    unsigned handle,
    unsigned id,
    unsigned master_id =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **id** key set ID, it must be always > 0 
  * **master_id** master key set ID, optional parameter, relevant for MKSK Session Key injection and for Trinity only 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set key set ID (70-07) 


### function secGetEncryptedPIN

```cpp
int secGetEncryptedPIN(
    unsigned handle,
    unsigned char fmt,
    bytevector & pinblock,
    bytevector & ksn,
    bool zero_pin =false
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **fmt** ISO PIN block format (0..3) 
  * **pinblock** encrypted PIN block 
  * **ksn** DUKPT key serial number 
  * **zero_pin** if true request zero PIN block 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Retrieve encrypted PIN block (70-08) 


### function secGetKeyInventory

```cpp
int secGetKeyInventory(
    unsigned handle,
    std::string & json
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **json** JSON formatted information about keys 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get key inventory (70-09) 


### function secGetKeyData

```cpp
int secGetKeyData(
    unsigned handle,
    unsigned char keyType,
    bytevector & out,
    bool kek_flag =false
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **keyType** key type 
  * **out** JSON formatted information about keys 
  * **kek_flag** optional KEK flag 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get key data (70-0A) 


### function secGetStatus

```cpp
int secGetStatus(
    unsigned handle,
    std::string & json
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **json** status information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get crypto status (70-0B) 


### function secGetStatus

```cpp
int secGetStatus(
    const std::string & hostname,
    std::string & json
)
```


**Parameters**: 

  * **hostname** host name, if empty the status of all hosts is returned 
  * **json** status information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get crypto status of host (70-0B) 


### function secGetStatus

```cpp
inline int secGetStatus(
    std::string & json
)
```


**Parameters**: 

  * **json** status information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get crypto status of all hosts (70-0B) 


### function secGetVersions

```cpp
int secGetVersions(
    std::string & version
)
```


**Parameters**: 

  * **version** version information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get crypto version information (70-0C) 


### function dataGetEncData

```cpp
int dataGetEncData(
    unsigned handle,
    const bytevector & taglist,
    const bytevector & appdata,
    unsigned options,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **taglist** tag list consisting of tag-length pairs 
  * **appdata** application data 
  * **options** data options ([DataOption](namespacevfisdi.md#enum-dataoption)) 
  * **useStoredTX** 
  * **out** encrypted block containing the result of tags with card holder sensitive data 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Encrypt card holder sensitive data. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the result as encrypted BERTLV buffer. (29-01) 


### function dataGetEncData

```cpp
int dataGetEncData(
    unsigned handle,
    const bytevector & taglist,
    const bytevector & appdata,
    unsigned options,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv,
    bytevector * ksn,
    bool incrementKSN,
    unsigned keysetID =0,
    unsigned masterKeysetID =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **taglist** tag list consisting of tag-length pairs 
  * **appdata** application data 
  * **options** data options ([DataOption](namespacevfisdi.md#enum-dataoption)) 
  * **useStoredTX** 
  * **out** encrypted block containing the result of tags with card holder sensitive data 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 
  * **incrementKSN** increment KSN with encryption (default: false) 
  * **keysetID** keyset ID (1,2,3,...), 0: use default 
  * **masterKeysetID** master keyset ID (1,2,3,...), 0: use default 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: 

  * incrementKSN may be ignored by ADKSEC depending on host configuration 
  * masterKeysetID is only relevant for Android. When used keysetID must be provided, too. 


**Par**: 

Encrypt card holder sensitive data. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the result as encrypted BERTLV buffer. (29-01) 


### function dataGetEncMsgData

```cpp
int dataGetEncMsgData(
    unsigned handle,
    const bytevector & msgtemplate,
    const std::vector< PlaceHolder > & placeholder,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **msgtemplate** message template including placeholders for sensitive data elements 
  * **placeholder** placeholder data 
  * **useStoredTX** 
  * **out** encrypted block containing the result of tags with card holder sensitive data 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Encrypt complete host messages that fills sensitive data elements into placeholders. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the encrypted message. (29-01) 


### function dataGetEncMsgData

```cpp
int dataGetEncMsgData(
    unsigned handle,
    const bytevector & msgtemplate,
    const std::vector< PlaceHolder > & placeholder,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv,
    bytevector * ksn,
    bool incrementKSN,
    unsigned keysetID =0,
    unsigned masterKeysetID =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **msgtemplate** message template including placeholders for sensitive data elements 
  * **placeholder** placeholder data 
  * **useStoredTX** 
  * **out** encrypted block containing the result of tags with card holder sensitive data 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 
  * **incrementKSN** increment KSN with encryption (default: false) 
  * **keysetID** keyset ID (1,2,3,...), 0: use default 
  * **masterKeysetID** master keyset ID (1,2,3,...), 0: use default 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: 

  * incrementKSN may be ignored by ADKSEC depending on host configuration 
  * masterKeysetID is only relevant for Android. When used keysetID must be provided, too. 


**Par**: 

Encrypt complete host messages that fills sensitive data elements into placeholders. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the encrypted message. (29-01) 


### function dataFetchTxnTags

```cpp
int dataFetchTxnTags(
    const std::vector< unsigned > & taglist,
    bytevector & out,
    unsigned char mode =0,
    bool cleartext_date =false
)
```


**Parameters**: 

  * **taglist** list of tags to extract 
  * **out** fetched tags with information 
  * **mode** fetch mode: 0 sensitive tags are not returned, 1: sensitive tags are returned with zero length, 2: sensitive tags are returned with correct length but overwritten with 0xff 
  * **cleartext_date** request expiration date (5F24) encrypted if false or in clear if true 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

fetch non-sensitive transaction data from SDI server (29-02) 


### function dataFetchTxnTags

```cpp
int dataFetchTxnTags(
    const std::vector< unsigned > & taglist,
    bytevector & out,
    unsigned char mode,
    bool cleartext_date,
    unsigned options
)
```


**Parameters**: 

  * **taglist** list of tags to extract 
  * **out** fetched tags with information 
  * **mode** fetch mode: 0: sensitive tags are not returned (default) 1: sensitive tags are returned with zero length, 2: sensitive tags are returned with correct length but overwritten with 0xff 
  * **cleartext_date** request expiration date (5F24) encrypted if false (default) or in clear if true 
  * **options** data options (DFA13A) 0: default 1: Use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

fetch non-sensitive transaction data from SDI server (29-02) 


### function dataClearDataStore

```cpp
int dataClearDataStore()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

clear data store (29-03) 


### function dataGetMsgSignature

```cpp
int dataGetMsgSignature(
    unsigned handle,
    const bytevector & msgtemplate,
    const std::vector< PlaceHolder > & placeholder,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **msgtemplate** message template including placeholders for sensitive data elements (DFA126) 
  * **placeholder** placeholder data 
  * **useStoredTX** 
  * **out** signature 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Fill sensitive data elements into the placeholders and calculates a signature for the complete host messages. (29-04) 


### function dataGetMsgSignature

```cpp
int dataGetMsgSignature(
    unsigned handle,
    const bytevector & msgtemplate,
    const std::vector< PlaceHolder > & placeholder,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv,
    bytevector * ksn,
    bool incrementKSN,
    unsigned keysetID =0,
    unsigned masterKeysetID =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **msgtemplate** message template including placeholders for sensitive data elements (DFA126) 
  * **placeholder** placeholder data 
  * **useStoredTX** 
  * **out** signature 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 
  * **incrementKSN** increment KSN with encryption (default: false) 
  * **keysetID** keyset ID (1,2,3,...), 0: use default 
  * **masterKeysetID** master keyset ID (1,2,3,...), 0: use default 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: 

  * incrementKSN may be ignored by ADKSEC depending on host configuration 
  * masterKeysetID is only relevant for Android. When used keysetID must be provided, too. 


**Par**: 

Fill sensitive data elements into the placeholders and calculates a signature for the complete host messages. (29-04) 


### function dataPerformValidationChecks

```cpp
int dataPerformValidationChecks(
    const Array< 3 > & date,
    Matching & match,
    std::vector< Matching > * additional =0
)
```


**Parameters**: 

  * **date** date (DDMMYY) 
  * **match** 
  * **additional** if not NULL additional matches are returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Perform validation checks for the current card regarding the validation table (cardranges.json) stored on the device (29-05) 


### function dataPerformValidationChecks

```cpp
int dataPerformValidationChecks(
    const Array< 3 > & date,
    const bytevector & iin,
    Matching & match,
    std::vector< Matching > * additional =0
)
```


**Parameters**: 

  * **date** date (DDMMYY) 
  * **iin** if not empty Issuer Identification Number (IIN) to be used as alternative for the PAN to find the best match 
  * **match** 
  * **additional** if not NULL additional matches are returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Perform validation checks for the current card regarding the validation table (cardranges.json) stored on the device (29-05) 


### function dataGetValidationInfo

```cpp
int dataGetValidationInfo(
    std::string & out
)
```


**Parameters**: 

  * **out** validation table information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the header information of the validation table file. (29-06) 


### function dataGetEncTxnData

```cpp
int dataGetEncTxnData(
    const std::vector< unsigned > & taglist,
    bytevector & encrypted
)
```


**Parameters**: 

  * **taglist** tag list containing all requested data elements. 
  * **encrypted** encrypted data block containing the requested tags with transaction data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get encrypted transaction data for later use (e.g. offline transaction handling). Data needs to be sent back to SDI-Server with command dataSetEncTxnData (29-07) 


### function dataSetEncTxnData

```cpp
int dataSetEncTxnData(
    const bytevector & encrypted
)
```


**Parameters**: 

  * **encrypted** encrypted data block containing the requested tags with transaction data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set encrypted transaction data (29-08) 


### function dataEndEncTxnData

```cpp
int dataEndEncTxnData()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Finish encrypted transaction data procedure inside the SDI-Server. (29-09) 


### function dataGetEmvInfo

```cpp
int dataGetEmvInfo(
    EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get EMV data from SDI EMV information cache (29-0A) 


### function vclRegistartSRED

```cpp
int vclRegistartSRED(
    bytevector & track1,
    bytevector & track2,
    bytevector & track3
)
```


**Parameters**: 

  * **track1** VCL track 1 
  * **track2** VCL track 2 
  * **track3** VCL track 3 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Request VCL to turn on the encryption in SRED mode. (28-00) 


### function vclStatusRequest

```cpp
int vclStatusRequest(
    bytevector & status
)
```


**Parameters**: 

  * **status** VLC status 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the current status of VCL. (28-01) 


### function vclAdvanceDDK

```cpp
int vclAdvanceDDK(
    bytevector & track1,
    bytevector & track2,
    bytevector & track3
)
```


**Parameters**: 

  * **track1** VCL track 1 
  * **track2** VCL track 2 
  * **track3** VCL track 3 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Instruct VCL to use the next derived key for future encryption operations. (28-02) 


### function vclRequestEParms

```cpp
int vclRequestEParms(
    bytevector & eparms
)
```


**Parameters**: 

  * **eparms** eParms of the last encryption from VCL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the eParms of the last encryption from VCL. This command should be used by the payment application if eParms is activated only. The eParms will be forwarded from the SDI-Server as obtained from VCL. Further processing is up to the payment application. (28-03) 


### function vclGetDiagnostic

```cpp
int vclGetDiagnostic(
    unsigned format,
    unsigned page,
    std::string & diag
)
```


**Parameters**: 

  * **format** 1=verbose, 2=concise, 4=xml 
  * **page** page number (0-127) 
  * **diag** diagnostic data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the diagnostic data from VCL.(28-06) The diag query will be forwarded from the SDI-Server as obtained from VCL. Further processing is up to the payment application. Additional parameters can be the output format as well as the requested page number. 


### function vclGetKeyStatus

```cpp
int vclGetKeyStatus(
    unsigned char & status
)
```


**Parameters**: 

  * **status** key status: 0=shared key, 1=unique key 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the key status from VCL. (28-07) 


### function vclOverrideMessageQuery

```cpp
int vclOverrideMessageQuery(
    bytevector & track1,
    bytevector & track2,
    bytevector & track3
)
```


**Parameters**: 

  * **track1** VCL track 1 
  * **track2** VCL track 2 
  * **track3** VCL track 3 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Performs a override message query to the vcl daemon/kernel modul and delivers the response as track data. (28-08) 


### function vclKSNRequest

```cpp
int vclKSNRequest(
    std::string & ksn
)
```


**Parameters**: 

  * **ksn** KSN 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

performs a KSN request to the vcl daemon/kernel modul (28-09) 


### function vclKmailinRequest

```cpp
int vclKmailinRequest()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)); 

The sdi server performs a kmailin request to the vcl daemon/kernel modul and delivers the result (success or failed) (28-0A) 


### function emvCtInit

```cpp
int emvCtInit(
    int aidCount =0,
    unsigned options =0
)
```


**Parameters**: 

  * **aidCount** number of AIDs 
  * **options** EMV options (see [EMVOptions](namespacevfisdi.md#enum-emvoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: The EMV callback function must have been set before invoking this function 

initialize EMV CT framework (39-00) 


### function emvCtExit

```cpp
int emvCtExit(
    unsigned options =0
)
```


**Parameters**: 

  * **options** EMV options 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

exit EMV CTLS framework (39-00) 


### function emvCtSetTermData

```cpp
int emvCtSetTermData(
    const EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV settings 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CT terminal data (39-01) 


### function emvCtGetTermData

```cpp
int emvCtGetTermData(
    EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV settings 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CT terminal data (39-01) 


### function emvCtSetAppData

```cpp
int emvCtSetAppData(
    const bytevector & aid,
    const EMVConf & emv
)
```


**Parameters**: 

  * **aid** AID that is to be configured 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CT application data (39-02) 


### function emvCtClearAppData

```cpp
int emvCtClearAppData(
    const bytevector & aid
)
```


**Parameters**: 

  * **aid** AID that is to be cleared 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear EMV CT application data (39-02) 


### function emvCtClearAllAppData

```cpp
int emvCtClearAllAppData()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear all EMV CT application data (39-02) 


### function emvCtSetTempAppData

```cpp
int emvCtSetTempAppData(
    const EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: Transaction data (such as time stamp or transaction type) can be updated with [emvCtUpdateTxnTags()](group__sdiemvct.md#function-emvctupdatetxntags)

set EMV CT application data for current transaction (39-02) 


### function emvCtGetAppData

```cpp
int emvCtGetAppData(
    const bytevector & aid,
    EMVConf & emv
)
```


**Parameters**: 

  * **aid** AID 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CT application data (39-02) 


### function emvCtGetAppData

```cpp
int emvCtGetAppData(
    bool first,
    EMVConf & emv
)
```


**Parameters**: 

  * **first** if true get data of first AID, if false get data of next AID 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CT application data of first / next AID (39-02) 


### function emvCtSetCAPKey

```cpp
int emvCtSetCAPKey(
    const Array< 5 > & rid,
    unsigned char index,
    const bytevector & key,
    unsigned char exp,
    const bytevector & hash =bytevector(),
    const bytevector & revocationlist =bytevector()
)
```


**Parameters**: 

  * **rid** key register identifier 
  * **index** key index 
  * **key** key data 
  * **exp** key exponent, use 1 for 63357 
  * **hash** if not empty 20 bytes hash 
  * **revocationlist** if not empty key revocation list, each entry has 3 bytes serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CT CAP key (39-03) 


### function emvCtClearCAPKey

```cpp
int emvCtClearCAPKey(
    const Array< 5 > & rid,
    unsigned char index
)
```


**Parameters**: 

  * **rid** key register identifier 
  * **index** key index 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear EMV CT CAP key (39-03) 


### function emvCtClearAllCAPKey

```cpp
int emvCtClearAllCAPKey()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear all EMV CT CAP keys (39-03) 


### function emvCtGetCAPKeys

```cpp
int emvCtGetCAPKeys(
    std::vector< CAPKeyInfo > & keys
)
```


**Parameters**: 

  * **keys** key information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

read EMV CT CAP key information (39-03) 


### function emvCtApplyConfig

```cpp
int emvCtApplyConfig(
    unsigned options =0
)
```


**Parameters**: 

  * **options** options 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Store configuration (39-04) 


### function emvCtAddVirtualMapEntry

```cpp
int emvCtAddVirtualMapEntry(
    int transaction,
    int currency,
    unsigned char vterminal
)
```


**Parameters**: 

  * **transaction** transaction type ([EMVTransaction](namespacevfisdi.md#enum-emvtransaction)) or -1 
  * **currency** currency ([Currency](namespacevfisdi.md#enum-currency)) or -1 
  * **vterminal** virtual terminal number to switch to in case of a match 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: The wildcard -1 cannot be used for both _transaction_ and _currency_ at the same time. 

Add an entry to the CT virtual map. If an entry in the virtual map matches the transaction and currency, switch to the virtual terminal _vterminal_. Use -1 as wildcard for _transaction_ or _currency_ to match all. (39-06) 


### function emvCtClearVirtualMap

```cpp
int emvCtClearVirtualMap()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

remove all entries from virtual map (39-06) 


### function emvCtSmartDetect

```cpp
int emvCtSmartDetect(
    int timeout_ms
)
```


**Parameters**: 

  * **timeout_ms** timeout in milliseconds, range 0..1275000ms, granularity varies from 500ms to 5s. 


**Return**: 0 if card inserted, 1 if card removed, else SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Handle the Smart Card Detection. It can be used for both a card request and a card removal. (41-01) For detecting card removal it has to be invoked with _timeout_ms==0_ in a loop and the return code has to be checked. 


### function emvCtActivate

```cpp
int emvCtActivate(
    bytevector * atr =0
)
```


**Parameters**: 

  * **atr** if not NULL, the ATR is returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Activate smart card (41-02) 


### function emvCtActivate

```cpp
int emvCtActivate(
    unsigned options,
    bytevector * atr =0
)
```


**Parameters**: 

  * **options** bit mask with options from [EMVCtReaderOptions](namespacevfisdi.md#enum-emvctreaderoptions) (DF06) 
  * **atr** if not NULL, the ATR is returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Activate smart card (41-02) 


### function emvCtDeactivate

```cpp
int emvCtDeactivate()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Deactivate smart card (41-04) 


### function emvCtDeactivate

```cpp
int emvCtDeactivate(
    unsigned options
)
```


**Parameters**: 

  * **options** bit mask with options from [EMVCtReaderOptions](namespacevfisdi.md#enum-emvctreaderoptions) (DF06) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Deactivate smart card (41-04) 


### function emvCtStartTransaction

```cpp
int emvCtStartTransaction(
    EMVTxn & out,
    EMVTransaction type,
    const BCD< 6 > amount,
    const Array< 3 > & date,
    const Array< 3 > & time,
    const BCD< 4 > & counter,
    const EMVTxn & optional =EMVTxn()
)
```


**Parameters**: 

  * **type** transaction type, (see [EMVTransaction](namespacevfisdi.md#enum-emvtransaction)) (9C) 
  * **amount** transaction amount (9F02) 
  * **date** transaction date (9A) 
  * **time** transaction time (9F21) 
  * **counter** transaction sequence counter (9F41) 
  * **optional** optional transaction parameters 
  * **out** transaction result data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

start EMV CT transaction (39-10) 


### function emvCtContinueOffline

```cpp
int emvCtContinueOffline(
    EMVTxn & out,
    const EMVTxn & optional =EMVTxn()
)
```


**Parameters**: 

  * **out** transaction result data 
  * **optional** optional transaction parameters, these may be used to change 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

continue offline EMV CT transaction (39-11) 


### function emvCtContinueOnline

```cpp
int emvCtContinueOnline(
    EMVTxn & out,
    bool onlineResult,
    const Array< 2 > & authResp =Array< 2 >(),
    const EMVTxn & optional =EMVTxn()
)
```


**Parameters**: 

  * **out** transaction result data 
  * **onlineResult** online result, true if transaction was successful, false if not (DF50) 
  * **authResp** authorization response code from the host, ignored if _onlineResult==false_ (8A) 
  * **optional** optional transaction parameters 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

continue online EMV CT transaction (39-12) 


### function emvCtUpdateTxnTags

```cpp
int emvCtUpdateTxnTags(
    unsigned options,
    const EMVTxn & config
)
```


**Parameters**: 

  * **options** update options (see [EMVUpdateOptions](namespacevfisdi.md#enum-emvupdateoptions)) 
  * **config** configuration containing the settings to be updated 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: Application configuration data has to be updated with [emvCtSetTempAppData()](group__sdiemvct.md#function-emvctsettempappdata). 

Update one or several kernel tags during transaction.

This update is restricted to certain (not protected) EMV L2 kernel tags, if there is a need to change these tags during the transaction temporarily and for this transaction only but not for the general configuration. Use carefully. (39-13) 


### function emvCtEndTransaction

```cpp
int emvCtEndTransaction(
    unsigned options =0
)
```


**Parameters**: 

  * **options** reserved for future use 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

End transaction (39-15) 


### function emvCtGetCandidateData

```cpp
int emvCtGetCandidateData(
    std::vector< CTCandidateData > & out
)
```


**Parameters**: 

  * **out** transaction result data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get additional candidate information for reducing, resorting or displaying the mutual candidate list. (39-16) 


### function emvCtSendOfflinePIN

```cpp
int emvCtSendOfflinePIN(
    unsigned short & chipresult
)
```


**Parameters**: 

  * **chipresult** result code from the chip card 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

send entered (ofline) PIN to chip card for verification. (41-05) 


### function emvCtCheckSupportedAID

```cpp
int emvCtCheckSupportedAID(
    const bytevector & aid,
    unsigned char asi,
    const std::string & defaultLabel,
    std::vector< CTCandidate > & candlist,
    unsigned short * sw12 =0,
    const std::vector< AdditionalCardTag > * adtCrdTags =0
)
```


**Parameters**: 

  * **aid** terminal AID 
  * **asi** application selection indicator 0=exact, 1=partial 
  * **defaultLabel** optional default application label 
  * **candlist** candidates found 
  * **sw12** if not NULL status word returned by card '0000' for communication problem 
  * **adtCrdTags** optional list of additional tags to be stored in tag store 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Do List Of Application processing for a single terminal AID. (39-17) 


### function emvCtLED

```cpp
int emvCtLED(
    bool ledState
)
```


**Parameters**: 

  * **ledState** led state, on if true, off if false. 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Control the Smart Card Reader LEDs. (41-09) 


### function emvCtSendReceive

```cpp
int emvCtSendReceive(
    unsigned options,
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **options** bit mask with options from [EMVCtReaderOptions](namespacevfisdi.md#enum-emvctreaderoptions) (DF06) 
  * **in** EMV command (DF01) 
  * **out** EMV result (DF01) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

send EMV command and receive result 


### function emvCtlsInit

```cpp
int emvCtlsInit(
    int aidCount =0,
    unsigned options =0
)
```


**Parameters**: 

  * **aidCount** number of AIDs 
  * **options** EMV options (see [EMVOptions](namespacevfisdi.md#enum-emvoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: The EMV callback function must have been set before invoking this function 

initialize EMV CTLS framework (40-00) 


### function emvCtlsExit

```cpp
int emvCtlsExit(
    unsigned options =0
)
```


**Parameters**: 

  * **options** EMV options 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

exit EMV CTLS framework (40-00) 


### function emvCtlsSetTermData

```cpp
int emvCtlsSetTermData(
    const EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV settings 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CTLS terminal data (40-01) 


### function emvCtlsGetTermData

```cpp
int emvCtlsGetTermData(
    EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV settings 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CTLS terminal data (40-01) 


### function emvCtlsSetAppData

```cpp
int emvCtlsSetAppData(
    unsigned kernel_id,
    const bytevector & aid,
    const EMVConf & emv
)
```


**Parameters**: 

  * **kernel_id** ID of contactless kernel 
  * **aid** AID that is to be configured 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CTLS application data (40-02) 


### function emvCtlsClearAppData

```cpp
int emvCtlsClearAppData(
    unsigned kernel_id,
    const bytevector & aid
)
```


**Parameters**: 

  * **kernel_id** ID of contactless kernel 
  * **aid** AID that is to be configured 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear EMV CTLS application data (40-02) 


### function emvCtlsClearAllAppData

```cpp
int emvCtlsClearAllAppData()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear all EMV CTLS application data (40-02) 


### function emvCtlsSetTempAppData

```cpp
int emvCtlsSetTempAppData(
    unsigned kernel_id,
    const bytevector & aid,
    const EMVConf & emv
)
```


**Parameters**: 

  * **kernel_id** ID of contactless kernel 
  * **aid** AID that is to be configured 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CTLS application data for current transaction (40-02) 


### function emvCtlsGetAppData

```cpp
int emvCtlsGetAppData(
    unsigned kernel_id,
    const bytevector & aid,
    EMVConf & emv
)
```


**Parameters**: 

  * **kernel_id** ID of contactless kernel 
  * **aid** AID 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CTLS application data (40-02) 


### function emvCtlsGetAppData

```cpp
int emvCtlsGetAppData(
    bool first,
    EMVConf & emv
)
```


**Parameters**: 

  * **first** if true get data of first AID, if false get data of next AID 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CTLS application data of first / next AID (40-02) 


### function emvCtlsSetCAPKey

```cpp
int emvCtlsSetCAPKey(
    const Array< 5 > & rid,
    unsigned char index,
    const bytevector & key,
    unsigned char exp,
    const bytevector & hash =bytevector(),
    const bytevector & revocationlist =bytevector()
)
```


**Parameters**: 

  * **rid** key register identifier 
  * **index** key index 
  * **key** key data 
  * **exp** key exponent, use 1 for 63357 
  * **hash** if not empty 20 bytes hash 
  * **revocationlist** if not empty key revocation list, each entry has 3 bytes serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CTLS CAP key 


### function emvCtlsClearCAPKey

```cpp
int emvCtlsClearCAPKey(
    const Array< 5 > & rid,
    unsigned char index
)
```


**Parameters**: 

  * **rid** key register identifier 
  * **index** key index 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear EMV CTLS CAP key (40-03) 


### function emvCtlsClearAllCAPKey

```cpp
int emvCtlsClearAllCAPKey()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear all EMV CTLS CAP keys (40-03) 


### function emvCtlsGetCAPKeys

```cpp
int emvCtlsGetCAPKeys(
    std::vector< CAPKeyInfo > & keys
)
```


**Parameters**: 

  * **keys** key information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

read EMV CTLS CAP key information (40-03) 


### function emvCtlsApplyConfig

```cpp
int emvCtlsApplyConfig(
    unsigned options =7
)
```


**Parameters**: 

  * **options** options bit mask:

* 1: Apply application data if something changed since last configuration
* 2: Apply terminal data if something changed since last configuration
* 4: Apply CAP key data if something changed since last configuration
* 8: Apply all configuration data even in case nothing changed 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Store configuration (40-04) 


### function emvCtlsAddVirtualMapEntry

```cpp
int emvCtlsAddVirtualMapEntry(
    int transaction,
    int currency,
    unsigned char vterminal
)
```


**Parameters**: 

  * **transaction** transaction type ([EMVTransaction](namespacevfisdi.md#enum-emvtransaction)) or -1 
  * **currency** currency ([Currency](namespacevfisdi.md#enum-currency)) or -1 
  * **vterminal** virtual terminal number to switch to in case of a match 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Add an entry to the CT virtual map. If an entry in the virtual map matches the transaction and currency, switch to the virtual terminal _vterminal_. Use -1 as wildcard for _transaction_ or _currency_ to match all. (40-06) 


### function emvCtlsClearVirtualMap

```cpp
int emvCtlsClearVirtualMap()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

remove all entries from virtual map (40-06) 


### function emvCtlsSetupTransaction

```cpp
int emvCtlsSetupTransaction(
    EMVTxn & out,
    EMVTransaction type,
    const BCD< 6 > amount,
    const Array< 3 > & date,
    const Array< 3 > & time,
    const BCD< 4 > & counter,
    const EMVTxn & optional =EMVTxn()
)
```


**Parameters**: 

  * **type** transaction type (9C) 
  * **amount** transaction amount (9F02) 
  * **date** transaction date (YYMMDD) (9A) 
  * **time** transaction time (HHMMSS) (9F21) 
  * **counter** transaction sequence counter (9F41) 
  * **optional** optional transaction parameters 
  * **out** transaction result data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

setup EMV CTLS transaction (40-10) 


### function emvCtlsContinueOffline

```cpp
int emvCtlsContinueOffline(
    EMVTxn & out,
    unsigned options =0
)
```


**Parameters**: 

  * **out** transaction result data 
  * **options** input parameter for special use case (see [EMVContinueOfflineOptions](namespacevfisdi.md#enum-emvcontinueofflineoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

CTLS EMV transaction (offline part ... including 1st cryptogram, depends on CTLS scheme) (40-11) 


### function emvCtlsContinueOnline

```cpp
int emvCtlsContinueOnline(
    EMVTxn & out,
    bool onlineResult,
    const Array< 2 > & authResp =Array< 2 >(),
    const EMVTxn & optional =EMVTxn()
)
```


**Parameters**: 

  * **out** transaction result data 
  * **onlineResult** online result (DF50) 
  * **authResp** authorization response code from the host, ignored if _onlineResult==false_ (8A) 
  * **optional** optional transaction parameters 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

continue online EMV CTLS transaction (40-12) 


### function emvCtlsEndTransaction

```cpp
int emvCtlsEndTransaction(
    unsigned options =0
)
```


**Parameters**: 

  * **options** options (see [EMVEndOptions](namespacevfisdi.md#enum-emvendoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

End transaction (40-15) 


### function emvCtlsGetCandidateData

```cpp
int emvCtlsGetCandidateData(
    std::vector< CTLSCandidateData > & out
)
```


**Parameters**: 

  * **out** transaction result data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get additional candidate information for reducing, resorting or displaying the mutual candidate list. (40-16) 


### function emvCtlsBreak

```cpp
int emvCtlsBreak()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Universal CTLS break command (40-20) 


### function emvCtlsSmartReset

```cpp
int emvCtlsSmartReset(
    unsigned char readeropt =0,
    bytevector * atr =0
)
```


**Parameters**: 

  * **readeropt** reader options (see [EMVCtlsReaderOptions](namespacevfisdi.md#enum-emvctlsreaderoptions)) 
  * **atr** if not NULL, the ATR is returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Detect if card is present in the RF field (read ATR) (42-02) 


### function emvCtlsSmartPowerOff

```cpp
int emvCtlsSmartPowerOff(
    unsigned char options
)
```


**Parameters**: 

  * **options** reader options (see [EMVCtReaderOptions](namespacevfisdi.md#enum-emvctreaderoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

deactivate chip card. (42-04) 


### function emvCtlsCardRemoval

```cpp
int emvCtlsCardRemoval(
    unsigned timeout_ms
)
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

wait until contactless card removed or timeout (42-0A) 


### function emvCtlsTransparentCommand

```cpp
int emvCtlsTransparentCommand(
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **in** reader command 
  * **out** reader response 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Transparently send a command to the reader and receive it's response (42-07) only supported for VFI reader. 


### function emvCtlsTransparentSend

```cpp
int emvCtlsTransparentSend(
    const bytevector & in
)
```


**Parameters**: 

  * **in** reader command 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Transparently send a command to the reader (42-08) only supported for VFI reader. 


### function emvCtlsTransparentReceive

```cpp
int emvCtlsTransparentReceive(
    bytevector & out
)
```


**Parameters**: 

  * **out** reader response 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Transparent VFI reader access: Receive a response (42-09) only supported for VFI reader. 


### function emvCtlsLEDMode

```cpp
int emvCtlsLEDMode(
    unsigned char mode
)
```


**Parameters**: 

  * **mode** LED mode control (see [EMVLEDMode](namespacevfisdi.md#enum-emvledmode)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Set mode of LED control (43-04) 


### function emvCtlsLED

```cpp
int emvCtlsLED(
    int led,
    unsigned char state
)
```


**Parameters**: 

  * **led** bit mask of LEDs to be switched, bit 0 represents LED 0, bit 1 represents LED 1, and so on. 
  * **state** 0: off, 1: on, 2: blinking (only LED 0) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

switch LEDs (43-03) 


### function emvCtlsSendReceive

```cpp
int emvCtlsSendReceive(
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **in** EMV command (DF01) 
  * **out** EMV result (DF01) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

send EMV command and receive result 


### function nfcInit

```cpp
int nfcInit(
    unsigned char conn_type
)
```


**Parameters**: 

  * **conn_type** connection type: 0=CL_TYPE_CLIENT_SERVER, 1=CL_TYPE_FUNCTION 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Initialize NFC client (31-10) 


### function nfcPing

```cpp
int nfcPing(
    bytevector & raw
)
```


**Parameters**: 

  * **raw** NFC framework state: 1=IDLE, 2=BUSY 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Return NFC framework state of the NFC framework (31-00) 


### function nfcGetVersion

```cpp
int nfcGetVersion(
    std::string & version
)
```


**Parameters**: 

  * **version** build and kernel versions in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Return NFC version information (31-11) 


### function nfcConfigInit

```cpp
int nfcConfigInit()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Initialize NFC configuration (31-12) 


### function nfcOpen

```cpp
int nfcOpen()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Initialize L1 driver (31-01) 


### function nfcClose

```cpp
int nfcClose()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Release L1 driver (31-02) 


### function nfcFieldOn

```cpp
int nfcFieldOn()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Turn RF field on (31-03) 


### function nfcFieldOff

```cpp
int nfcFieldOff()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Turn RF field off (31-04) 


### function nfcFieldPolling

```cpp
int nfcFieldPolling(
    unsigned tech_bm,
    unsigned timeout,
    const bytevector & in,
    unsigned char & return_code,
    NFCCardCount & card_count,
    bytevector & out,
    std::vector< NFCCard > & cards
)
```


**Parameters**: 

  * **tech_bm** technology bitmap ([NFCPollingBitmap](namespacevfisdi.md#enum-nfcpollingbitmap)) (DFA202) 
  * **timeout** poll timeout (DFA203) 
  * **in** custom data (DFA207) 
  * **return_code** NFC return code (DFAB20) 
  * **card_count** number of cards found 
  * **out** custom poll result (DFDB2C) 
  * **cards** detected cards (FFDB20) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Open the field and execute polling loop (31-05) 


### function nfcFieldPollingExt

```cpp
int nfcFieldPollingExt(
    unsigned tech_bm,
    unsigned timeout,
    const bytevector & in,
    unsigned char & return_code,
    NFCCardCount & card_count,
    bytevector & out,
    std::vector< NFCCardExt > & cards
)
```


**Parameters**: 

  * **tech_bm** technology bitmap ([NFCPollingBitmap](namespacevfisdi.md#enum-nfcpollingbitmap)) (DFA202) 
  * **timeout** poll timeout (DFA203) 
  * **in** custom data (DFA207) 
  * **return_code** NFC return code (DFAB20) 
  * **card_count** number of cards found 
  * **out** custom poll result (DFDB2C) 
  * **cards** detected cards (FFDB20) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) 

NFC pass-through: Open the field and execute polling loop (31-13) 


### function nfcFieldCancelPolling

```cpp
int nfcFieldCancelPolling()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-throuhg: Cancel polling process (31-06) 


### function nfcFieldActivation

```cpp
int nfcFieldActivation(
    unsigned modulation,
    const bytevector & info
)
```


**Parameters**: 

  * **modulation** NFC card type / modulation (DFDB21) 
  * **info** NFC card info (DFDB22) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Activate (select) the card found during polling 


### function nfcFtechBaud

```cpp
int nfcFtechBaud(
    unsigned char baud
)
```


**Parameters**: 

  * **baud** baud rate: 0=INF_BAUD212, 1=INF_BAUD424 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC pass-through: Change NFC-F baud rate 


### function nfcMifareAuthenticate

```cpp
int nfcMifareAuthenticate(
    unsigned char blocknum,
    unsigned char keytype,
    const bytevector & key
)
```


**Parameters**: 

  * **blocknum** block number (DFA208) 
  * **keytype** key type (DFA209) 
  * **key** key (DFA20A) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Authenticate block number with key (31-0A) 


### function nfcMifareRead

```cpp
int nfcMifareRead(
    unsigned char type,
    unsigned char startblock,
    unsigned char blockcount,
    bytevector & out
)
```


**Parameters**: 

  * **type** Mifare card type (DFA20B) 
  * **startblock** start block (DFA20C) 
  * **blockcount** number of blocks to read (up to 15) (DFA20D) 
  * **out** output data (DFA20E) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Read _blockcount_ blocks of data starting from block _startblock_ (31-0B) 


### function nfcMifareWrite

```cpp
int nfcMifareWrite(
    unsigned char type,
    unsigned char startblock,
    unsigned char blockcount,
    const bytevector & in
)
```


**Parameters**: 

  * **type** Mifare card type (DFA20B) 
  * **startblock** start block (DFA20C) 
  * **blockcount** number of blocks to read (up to 15) (DFA20D) 
  * **in** input data (DFA20F) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Write _blockcount_ blocks of data starting from block _startblock_ (31-0C) 


### function nfcMifareIncrement

```cpp
int nfcMifareIncrement(
    unsigned char block,
    unsigned char value
)
```


**Parameters**: 

  * **block** block number (DFA208) 
  * **value** increment value (DFA210) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Increment value of block (31-0D) 


### function nfcMifareDecrement

```cpp
int nfcMifareDecrement(
    unsigned char block,
    unsigned char value
)
```


**Parameters**: 

  * **block** block number (DFA208) 
  * **value** decrement value (DFA210) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Decrement value of block (31-0E) 


### function nfcMifareIncrementOnly

```cpp
int nfcMifareIncrementOnly(
    unsigned char block,
    unsigned char value
)
```


**Parameters**: 

  * **block** block number (DFA208) 
  * **value** increment value (DFA210) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Increment value of block (31-15) 


### function nfcMifareDecrementOnly

```cpp
int nfcMifareDecrementOnly(
    unsigned char block,
    unsigned char value
)
```


**Parameters**: 

  * **block** block number (DFA208) 
  * **value** decrement value (DFA210) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Decrement value of block (31-16) 


### function nfcMifareRestore

```cpp
int nfcMifareRestore(
    unsigned char block
)
```


**Parameters**: 

  * **block** block number (DFA208) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Restore a value block to transfer buffer (31-18) 


### function nfcMifareTransfer

```cpp
int nfcMifareTransfer(
    unsigned char block
)
```


**Parameters**: 

  * **block** block number (DFA208) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Mifare: Store a value block from transfer buffer (31-17) 


### function nfcFelicaSendReceive

```cpp
int nfcFelicaSendReceive(
    unsigned timeout,
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **timeout** timeout (DFA218) 
  * **in** input data (DFA206) 
  * **out** output data (DFA206) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Felica: Send and receive raw data (31-0F) 


### function nfcFelicaPolling

```cpp
int nfcFelicaPolling(
    unsigned poll_timeout,
    unsigned recv_timeout,
    unsigned short system_code,
    unsigned char req_code,
    unsigned char time_slot,
    Array< 8 > & uid,
    Array< 8 > & pad,
    unsigned short & system_code_out
)
```


**Parameters**: 

  * **poll_timeout** poll timeout (DFA211) 
  * **recv_timeout** receive timeout (DFA212) 
  * **system_code** system code (DFA213) 
  * **req_code** request code (DFA214) 
  * **time_slot** time slot (DFA215) 
  * **uid** UID (DFA216) 
  * **pad** PAD (DFA217) 
  * **system_code_out** system code (DFA213) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Felica: Polling request (31-14) 


### function nfcApduSendReceive

```cpp
int nfcApduSendReceive(
    const bytevector & in,
    bytevector & out,
    unsigned short & cardsw1sw2
)
```


**Parameters**: 

  * **in** input data (DFA204) 
  * **out** output data (DFA205) 
  * **cardsw1sw2** SW1/SW2 from card (DFA219) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC: Send and receive data using APDU protocol (31-1C) 


### function nfcTxRx

```cpp
int nfcTxRx(
    unsigned card_type,
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **card_type** NFC card type (DFDB21) 
  * **in** input data (DFA206) 
  * **out** output data (DFA206) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

NFC: Send and receive raw data usingISO 14443-3 protocol (31-08) 


### function vasSetTerminalConfig

```cpp
int vasSetTerminalConfig(
    const std::string & config
)
```


**Parameters**: 

  * **config** terminal configuration in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Configure the temrinal with terminal parameters (32-00) 


### function vasGetTerminalConfig

```cpp
int vasGetTerminalConfig(
    const std::string & appid,
    std::string & config
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** terminal configuration in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read the most updated terminal configuration (32-01) 


### function vasGetConfig

```cpp
int vasGetConfig(
    const std::string & appid,
    std::string & config
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** terminal configuration and configuration of all wallets in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read the most updated wallet configuration (32-02) 


### function vasActivate

```cpp
int vasActivate(
    const std::string & appid,
    const std::string & config,
    std::string & data
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** set of dynamic parameters to be merged with configuration from data base 
  * **data** VAS data received from the handset 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Activates NFC interface, runs through wallet kernel flow and retrieves VAS data. (32-03) 


### function vasCancel

```cpp
int vasCancel()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Cancel technology discovery process (32-04) 


### function vasUpdateConfig

```cpp
int vasUpdateConfig(
    const std::string & appid,
    const std::string & config
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** set of parameters to configure one or multiple wallets in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Configure the terminal with wallet specific parameters. (32-05) 


### function vasCancelConfig

```cpp
int vasCancelConfig(
    const std::string & appid
)
```


**Parameters**: 

  * **appid** application unique identifier 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Clear all the VAS configuration by application ID. (32-06) 


### function vasPreload

```cpp
int vasPreload(
    const std::string & appid,
    const std::string & config
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** set of preload parameters to be merged with configuration from data base in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Configure the terminal with wallet specific parameters. (32-07) 


### function vasCancelPreload

```cpp
int vasCancelPreload(
    const std::string & appid
)
```


**Parameters**: 

  * **appid** application unique identifier 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Clear preloaded configuration by application ID and pull latest configuration from data base. (32-08) 


### function vasDecrypt

```cpp
int vasDecrypt(
    const std::string & appid,
    const std::string & cipher,
    std::string & plain
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **cipher** VAS data response with the included encrypted message 
  * **plain** VAS data response with the included decrypted message 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Decrypt an encrypted VAS response. (32-09) 


### function vasAction

```cpp
int vasAction(
    const std::string & appid,
    const std::string & in,
    std::string & out
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **in** input data 
  * **out** output data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

VAS action 


### function setLogCallbacks

```cpp
void setLogCallbacks(
    void * data,
    LogCallback error,
    LogCallback debug
)
```


**Parameters**: 

  * **data** data pointer passed to the log callbacks 
  * **error** error logging callback 
  * **debug** debug logging callback 


set logging callbacks 


### function setCallbackData

```cpp
void setCallbackData(
    void * d
)
```


**Parameters**: 

  * **d** callback data pointer 


set callback data passed on as data pointer to the callback functions. The data pointer is shared between all callback functions. 


### function setStatusCallback

```cpp
void setStatusCallback(
    void(*)(void *data, int digits, std::string &display) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **digits** number of digits entered so far 
  * **display** string for display 


**Note**: Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 

**Par**: 

The callback gets the following parameters: 

set status callback 


### function setControlCallback

```cpp
void setControlCallback(
    int(*)(void *data, TLV &t) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **t** [TLV](classvfisdi_1_1_t_l_v.md) data received from SDI server 


**Return**: 

* 1: continue (perform next step)
* 2: reenter last value (input field is cleared)
* 3: abort 

**Note**: 

  * ALT_INPUT_FORMAT_STRING and CONTINUATION_MODE can be set by updating _t_. 
  * Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 
  * It is safe if the callback modifies _t_. 


**Par**: 

  * 

The callback gets the following parameters: 
  * 
  * 


set control callback 


### function setNotifyCallback

```cpp
void setNotifyCallback(
    void(*)(void *data, TLV &t) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **t** [TLV](classvfisdi_1_1_t_l_v.md) data received from SDI server 


**Note**: 

  * Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 
  * It is safe it the callback modifies _t_, modifications are ignored. 


**Par**: 

  * 

The callback gets the following parameters: 
  * 


set notifycallback 


### function setNavigatorCallback

```cpp
void setNavigatorCallback(
    void(*)(void *data, int status) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **status** navigator status:

* 00 Digit selected
* 01 OK selected
* 02 Cancel selected
* 03 Backspace/Clear selected
* 04 Multiple touches detected
* 05 Pin digit underflow
* 06 Pin digit overflow
* 10 Selection confirmed 


**Note**: Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 

**Par**: 

The callback gets the following parameters: 

set navigator callback 


### function setCardDetectCallback

```cpp
void setCardDetectCallback(
    void(*)(void *data, int retcode, unsigned char tec_out, EMVTxn &emv_out, bytevector &plugin_result) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **retcode** return code that would have been returned in crdPollDetect 
  * **tec_out** selected card technology (DFA108) 
  * **emv_out** emv data 
  * **plugin_result** plugin result of the card detect trigger (DFA101) 


**Note**: Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 

**Par**: 

The callback gets the following parameters: 

set card detect callback 


### function setEMVCallback

```cpp
void setEMVCallback(
    void(*)(void *data, unsigned type, EMVTxn &in, EMVTxn &out) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **type** callback type (see [EMVCallbackType](namespacevfisdi.md#enum-emvcallbacktype)) 
  * **in** [TLV](classvfisdi_1_1_t_l_v.md) data received from SDI server 
  * **out** [TLV](classvfisdi_1_1_t_l_v.md) data to be sent to SDI server 


**Note**: It is safe it the callback modifies _in_, modifications are ignored. 

**Par**: 

  * 

The callback gets the following parameters: 
  * 


set EMV callback 


### function setAsyncCardDetectEmvCallback

```cpp
void setAsyncCardDetectEmvCallback(
    void(*)(void *data, unsigned type, EMVTxn &in) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **type** callback type (see [EMVCallbackType](namespacevfisdi.md#enum-emvcallbacktype)) 
  * **in** [TLV](classvfisdi_1_1_t_l_v.md) data received from SDI server 


**Note**: It is safe it the callback modifies _in_, modifications are ignored. 

**Par**: 

  * 

The callback gets the following parameters: 
  * 


set async card detect callback 


### function setCardRemovalCallback

```cpp
void setCardRemovalCallback(
    void(*)(void *data) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)


**Par**: 

The callback gets the following parameters: 

set card removal callback 


### function setDisconnectCallback

```cpp
void setDisconnectCallback(
    void(*)(void *data) cb
)
```


**Parameters**: 

  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)


**Par**: 

The callback gets the following parameters: 

set callback, that gets invoked when the connection to SDI server has been closed by SDI server 


### function pluginCmd

```cpp
int pluginCmd(
    unsigned char plugin,
    unsigned char cmd,
    bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **plugin** plugin ID 
  * **cmd** command ID 
  * **in** command data 
  * **out** plugin response data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Send an SDI plugin command 


## Protected Functions Documentation

### function logError

```cpp
void logError(
    const char * file,
    int line,
    const char * format,
    ... 
)
```


### function logDebug

```cpp
void logDebug(
    const char * file,
    int line,
    const char * format,
    ... 
)
```


### function sendMessage_nolock

```cpp
int sendMessage_nolock(
    unsigned short cmd,
    unsigned short p1p2,
    const bytevector & data
)
```


### function sendReply_nolock

```cpp
int sendReply_nolock(
    unsigned short cmd,
    const bytevector & data
)
```


### function close_nolock

```cpp
void close_nolock()
```


### function reader_thread

```cpp
void reader_thread()
```


### function emvXExit

```cpp
int emvXExit(
    unsigned short cmd,
    unsigned options =0
)
```


### function emvXSetTermData

```cpp
int emvXSetTermData(
    unsigned short cmd,
    const EMVConf & emv
)
```


### function emvXGetTermData

```cpp
int emvXGetTermData(
    unsigned short cmd,
    EMVConf & emv
)
```


### function emvXSetCAPKey

```cpp
int emvXSetCAPKey(
    unsigned short cmd,
    const Array< 5 > & rid,
    unsigned char index,
    const bytevector & key,
    unsigned char exp,
    const bytevector & hash =bytevector(),
    const bytevector & revocationlist =bytevector()
)
```


### function emvXClearCAPKey

```cpp
int emvXClearCAPKey(
    unsigned short cmd,
    const Array< 5 > & rid,
    unsigned char index
)
```


### function emvXClearAllCAPKey

```cpp
int emvXClearAllCAPKey(
    unsigned short cmd
)
```


### function emvXGetCAPKeys

```cpp
int emvXGetCAPKeys(
    unsigned short cmd,
    std::vector< CAPKeyInfo > & keys
)
```


### function emvXApplyConfig

```cpp
int emvXApplyConfig(
    unsigned short cmd,
    unsigned options
)
```


### function emvXAddVirtualMapEntry

```cpp
int emvXAddVirtualMapEntry(
    unsigned short cmd,
    int transaction,
    int currency,
    unsigned char vterminal
)
```


### function emvXClearVirtualMap

```cpp
int emvXClearVirtualMap(
    unsigned short cmd
)
```


### function emvXContinueOnline

```cpp
int emvXContinueOnline(
    EMVTxn & out,
    unsigned short cmd,
    bool onlineResult,
    const Array< 2 > & authResp,
    const EMVTxn & optional
)
```


### function emvXEndTransaction

```cpp
int emvXEndTransaction(
    unsigned short cmd,
    unsigned options
)
```


### function emvCtlsSetAppData

```cpp
int emvCtlsSetAppData(
    unsigned kernel_id,
    const bytevector & aid,
    const EMVConf & emv,
    unsigned char config_cmd
)
```


### function emvCtlsGetAppData

```cpp
int emvCtlsGetAppData(
    unsigned kernel_id,
    const bytevector & aid,
    EMVConf & emv,
    unsigned char config_cmd
)
```


### function getResult

```cpp
static int getResult(
    unsigned short sw12
)
```


### function getResult

```cpp
static int getResult(
    unsigned short sw12,
    const bytevector & reply,
    int error_offset
)
```


### function getResult

```cpp
static int getResult(
    unsigned short sw12,
    TLV & t,
    int error_offset
)
```


### function reader_thread

```cpp
static void * reader_thread(
    void * data
)
```


## Protected Attributes Documentation

### variable p

```cpp
PrivateData * p;
```


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
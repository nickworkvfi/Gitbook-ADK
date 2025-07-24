---
title: Modules
---

Here is a list of all modules:

|   |   |
|:---|:---|
| 📄 Return Codes |  |
| 📄 Synchronous Card Types | Used by crdSync_PowerUp() |
|  ▼General topics |  |
| └─ 📁Additional error information | Filled in case of error, value to describe which error occured |
| └──📄 Additional error info exit code | Last step performed by EMV ADK 0 ? 10-27 VK-related 30-4B Amex 50-6x Discover 7 Gemalto 80-8A setup 9 ? A0-B5 common TXN C0-DB MK-related E ? F0-F4 online |
| └──📄 Additional error info, status | Internal error index |
| └─📄 Limitations and sizes |  |
| └─📄 ADK return codes |  |
| └─ 📁Special tag handling |  |
| └──📄 Handling of tags not defined by EMVCo |  |
| └─ 📁Serialization |  |
| └── 📁BER TLV tags used by EMV ADK |  |
| └───📄 Tags defined by EMVCo |  |
| └───📄 Propriertary tags used by Visa | See \[Visa_Card\], page A-63 |
| └───📄 Proprietary tags used by MasterCard | See \[MC_FA\], page 7-78 |
| └───📄 Proprietary tags used by JCB |  |
| └───📄 Proprietary tags used by Interac (Canada) |  |
| └───📄 Proprietary tags used by Amex |  |
| └───📄 Proprietary tags used by Gemalto/Pure |  |
| └─── 📁Verifone internal tags | There are many data objects, which do not have an EMVCo defined tags. For usage of TLV interface it\'s necessary to define internal tags |
| └──── 📁Constructed tags |  |
| └─────📄 Card Transaction Log dump (China union pay) |  |
| └─────📄 Constructed tags for new scheme specific config interface |  |
| └──── 📁Primitive tags |  |
| └───── 📁TLV tags for callback functions | Used in function EMV_CallbackFunction() |
| └──────📄 LED callback: Additional information | Additional information for LED switching, used for TAG_DF8F60_LED_ADD_INFO |
| └─────📄 Primitive tags for new scheme specific config interface | Used in functions EMV_CTLS_SetAppliDataSchemeSpecific()/EMV_CTLS_GetAppliDataSchemeSpecific |
| └─────📄 Tags for callback functions | Used in function EMV_CT_CALLBACK_FnT |
| └─────📄 3-byte primitive tags | For all unsigned long variables in functional interface, please use 4 byte in the serialization |
| └────📄 Three-byte-tags |  |
| └────📄 Tags for Transaction Log subfields |  |
| └────📄 Primitive tags for L1 dump |  |
| └──📄 Tags for transport layer | Used for enclosing TLV container at transport. That\'s necessary in case EMV ADK and calling application are placed in separated entities. Transport layer (e.g. PINPad ISO2) must have indicators to determine whether data is meant for EMV ADK or not |
|  ▼Initialization |  |
| └─ 📁EMV ADK functions for initialization |  |
| └──📄 Options for Exit Framework | Meaning of TAG_DF8F0A_EXIT_OPTIONS, see also EMV_CTLS_Exit_Framework_extended() |
| └──📄 Options for End Transaction | Meaning of TAG_DF8F0A_EXIT_OPTIONS, see also EMV_CTLS_EndTransaction() |
| └──📄 Options at framework initialisation | Flags used in EMV_CTLS_Init_Framework |
| └──📄 Result flags for outcome of framework initialization | Flags used in EMV_CTLS_Init_Framework |
| └──📄 Options at framework initialisation | Flags used in parameter options in EMV_CT_Init_Framework |
|  ▼Configuration |  |
| └─📄 Tags for configuration storage | Used for storing the configuration in XML files |
| └─📄 Defines for type of virtual terminal map |  |
| └─📄 EMV ADK functions for configuration |  |
| └─ 📁Terminal Data | Definitions used for functions EMV_CT_SetTermData(), EMV_CT_GetTermData() |
| └──📄 Terminal data: Which data is valid | Contents of the EMV_CTLS_TERMDATA_STRUCT::Info_Included_Data |
| └──📄 Supported Contactless modes | Defines for EMV_CTLS_TRANSRES_STRUCT::CL_Mode |
| └──📄 Terminal configuration: Collection of flow options | Contents of the EMV_CTLS_TERMDATA_STRUCT::FlowOptions |
| └──📄 Terminaltypes (Tag 9F35) | See also \[EMV B4\], page 113 |
| └─ 📁Application data | Definitions used for functions EMV_CT_SetAppliData(), EMV_CT_GetAppliData() |
| └──📄 VISA terminal transaction qualifier | Possible values for EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66 |
| └──📄 Common Terminal Transaction Qualifier | TTQ bits as defined \[EMV-A\] section 5.7 |
| └── 📁Dynamic reader limits |  |
| └───📄 DRL feature switching | Values for VISA and Amex DRL features which can be switched on and off |
| └───📄 Number of DRL entries for Visa and Amex | For VISA and Amex: How many DRL entries are possible |
| └──📄 Number of entries in Phone message table | Number of entries in Phone message table |
| └──📄 Options how to apply configuration (VFI reader only) | Options for EMV_CTLS_ApplyConfiguration() |
| └──📄 Contactless Kernel Ids | Short or Extended Kernel Id as integer |
| └──📄 technologies used in TecSupport_DFAB30 |  |
| └──📄 used in EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B |  |
| └──📄 used in EMV_CTLS_APPLIDATA_RK_STRUCT::KernelConfiguration_DF811B |  |
| └──📄 Application flow capabilities for all schemes | Contents of EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03 |
| └──📄 Application flow capabilities for PayPass (MasterCard) | Contents of EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for payWave (Visa) | Contents of EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for ExpressPay (Amex) | Contents of EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for JCB | Contents of EMV_CTLS_APPLIDATA_JK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for Discover/Diners | Contents of EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for Interac | Contents of EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for EPAL | Contents of EMV_CTLS_APPLIDATA_EK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for Visa Asia/Pacific | Contents of EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for China Union Pay | Contents of EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Gemalto/Pure: Application flow capabilities | Defines for EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for RuPay | Contents of EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for SIBS | Contents of EMV_CTLS_APPLIDATA_SK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for PagoBancomat | Contents of EMV_CTLS_APPLIDATA_PB_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for WISE | Contents of EMV_CTLS_APPLIDATA_WK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for CPACE | Contents of EMV_CTLS_APPLIDATA_BK_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Application flow capabilities for MIR | Contents of EMV_CTLS_APPLIDATA_MR_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Appli data scheme specific - MasterCard - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_MK_STRUCT::IncludedData |
| └──📄 PayPass ProceedToFirstWriteFlag_DF8110 values | Well-known values for PayPass flag ProceedToFirstWriteFlag(\'DF1810\') in EMV_CTLS_APPLIDATA_MK_STRUCT::Scheme.MK.ProceedToFirstWriteFlag_DF8110 |
| └──📄 Appli data scheme specific - Visa - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_VK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - Amex - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_AK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - JCB - Avaiability bits | Contents of the input in EMV_CTLS_APPLIDATA_JK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - Discover - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_DK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - Interac - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_IK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - Epal - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_EK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - Visa Asia/Pacific - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_PK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - China Union Pay - Avaialability bits | Contents of the input in EMV_CTLS_APPLIDATA_CK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - Gemalto Pure - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_GK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - RuPay - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_RK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - SIBS - Avaiability bits | Contents of the input in EMV_CTLS_APPLIDATA_SK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - PagoBancomat - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_PB_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - Wise - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_WK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - CPACE - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_BK_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - MIR - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_MIR_STRUCT::IncludedData |
| └──📄 Appli data scheme specific - domestic kernel - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_DOM_STRUCT::IncludedData |
| └──📄 application flow capabilities for domestic applications | Contents of EMV_CTLS_APPLIDATA_DOM_STRUCT::AppFlowCap_DFAB31 |
| └──📄 Appli data scheme specific - global part - Availability bits | Contents of the input in EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::IncludedData |
| └──📄 Supported | Defines for supported EMV Modes |
| └──📄 TAC/IAC DENIAL processing in case of Offline Only terminals | DF15, ICS feature, for ucAC_before_after in EMV_CT_TERMDATA_STRUCT |
| └──📄 Defines for EMVCo checksum calculation | Other major terminal parameters actually there are only some of them definedmost of them are hard coded in the lib as actually neededall of them are Yes / No decisions\--\> whenever there is a need to make this configurable for the checksum there will be another parameter addedIn brackets there is the default value or the currently hard coded valueonly for checksum \--\> no control on the flow,e.g. Blacklist is controlled per application not per terminal parameters!!! take respect on the default !!! |
| └──📄 Application data: Which data is included | Contents of EMV_CT_APPLIDATA_STRUCT::Info_Included_Data |
| └──📄 Byte defines for CVM not supported / CVM not required | See AIP_CVM_not_supported and EMV_CT_APPLIDATA_STRUCT::CVM_not_required |
| └──📄 Defines for Application flow capabilities | Application (transaction flow) capabilities (see EMV_CT_APPLIDATA_STRUCT::App_FlowCap) |
| └──📄 CDA modes | DF3E, CDA mode to be executed for the named AID |
| └──📄 Fallback handling after Final Select | DF18, see EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling |
| └──📄 Defines for type of read application data mode |  |
| └──📄 Modes of application data and CAP key setting |  |
| └──📄 Defines for special transaction configuration | Special transactions, transaction types and flows |
| └─ 📁Text data |  |
| └──📄 Application text IDs | Also see EMV_ADK_TXT_TYPE |
| └──📄 Known languages | See EMV_ADK_TXT_TYPE |
|  ▼Transaction execution | Definitions used for functions EMV_CT_StartTransaction(), EMV_CT_ContinueOffline(), EMV_CT_ContinueOnline() |
| └─📄 Functions for performing transactions |  |
| └─ 📁Callback functions | Callback function to be implemented in the same entity as EMV ADK |
| └──📄 Options for DataExchange request | Used in EMV_CTLS_CALLBACK_FnT, TAG_BF0E_CBK_DATA_EXCHANGE, TAG_DF8F58_DE_REQUEST |
| └──📄 Options for DataExchange state | Used in EMV_CTLS_CALLBACK_FnT, TAG_BF0E_CBK_DATA_EXCHANGE, TAG_DF8F59_DE_STATE |
| └──📄 Options for DataExchange mode | Used in EMV_CTLS_CALLBACK_FnT, TAG_BF0E_CBK_DATA_EXCHANGE, TAG_DF8F5A_DE_MODE |
| └──📄 Constructed tags for callback functions | Used in EMV_CTLS_CALLBACK_FnT |
| └──📄 Buzzer handling | Defines given in callback TAG_BF19_CTLS_CBK_BEEP |
| └── 📁Definitions for PIN Input callback function | See EMV_CT_CALLBACK_FnT (TAG_BF08_CBK_PIN) |
| └───📄 Input params for PIN entry |  |
| └───📄 Return values | Return values used by calling application for PIN input callback function |
| └──📄 DCC mode | Used to carry decision given back by EMV_CT_CALLBACK_FnT (TAG_BF07_CBK_DCC)TLV tag TAG_DF7D_CBK_DCC_CHECK |
| └──📄 Defines for callback function \"put merchant information\" | In order to show the merchant additional information on a system with two displays, \'information flashes\' can be sent to the terminal during payment processing. This allows the merchant to alert the customer to confirming the amount or entering the PIN as required.see EMV_CT_CALLBACK_FnT (TAG_BF01_CBK_MERCHINFO) |
| └──📄 Defines for callback function \"cardholder information\" | In order to show the cardholder additional information, e.g. wrong PIN, last PIN try, another app is selected, \...see EMV_CT_CALLBACK_FnT (TAG_BF09_CBK_CARDHOLDERINFO) |
| └──📄 Types of external application selection | Used as input for callback function \"Application Selection\" \--\> ReduceCandidateList() (ucSelector) |
| └──📄 Modes of domestic application handling | Used as return TAG_DF7E_CBK_DOM_APP_RES for EMV_CT_CALLBACK_FnT TAG_BF05_CBK_DOM_APPS |
| └──📄 Domestic callback options | Calling application may set some options for further transaction processing |
| └──📄 Domestic callback information | Information flags for TAG_DF5C_DOM_INFO in EMV_CT_CALLBACK_FnT (TAG_BF06_CBK_LOCAL_CHECKS) |
| └──📄 DCC callback information | Information flags for calling application |
| └─ 📁Input data |  |
| └──📄 Options for contactless transaction processing | Defines for EMV_CTLS_START_TYPE::TxnOptions |
| └──📄 Scheme specific transaction types | Defines for EMV_CTLS_START_TYPE::TransType |
| └──📄 CTLS card types for which passtrough mode is set | Defines for EMV_CTLS_START_TYPE::passthroughCardTypes |
| └──📄 EMV_CTLS_SetupTransaction: Which data is included in input struct | Contents of the input in EMV_CTLS_START_STRUCT::Info_Included_Data, EMV_CTLS_SetupTransaction() |
| └──📄 EMV_CTLS_ContinueOnline: Which data is included | Contents of the input in EMV_CTLS_HOST_STRUCT::Info_Included_Data, EMV_CTLS_ContinueOnline() |
| └──📄 EMV_CTLS_ContinueOfflineExt(): Which data is included |  |
| └──📄 Options for contactless transaction processing at EMV_CTLS_ContinueOfflineExt() | Defines for EMV_CTLS_CONT_OFFL_STRUCT::options |
| └──📄 Fallback options for magstripe applications | For use in ucFallback of EMV_CT_FALLBCK_MSR_TYPE |
| └──📄 Bit field for additional fallback options for magstripe applications (not originating from DC POS tag DF18) | For use in fallbackMsrOptions of EMV_CT_SELECT_TYPE |
| └──📄 Support of cardholder confirmation | DF4D, see ucCardholderConfirmation in EMV_CT_SELECT_TYPE |
| └──📄 Buildlist options for EMV_CT_StartTransaction() | See EMV_CT_SELECT_TYPE::InitTXN_Buildlist |
| └──📄 Options for transaction processing | Defines for EMV_CT_SELECT_STRUCT::TxnOptions, EMV_CT_TRANSAC_STRUCT::TxnOptions, EMV_CT_HOST_STRUCT::TxnOptions |
| └──📄 Re-entrance options | Defines for EMV_CT_SELECT_TYPE::TxnSteps resp. EMV_CT_TRANSAC_TYPE::TxnSteps |
| └──📄 Amount confirmation before or after CVM processing | Byte defines for EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmationonly valid in case no combined amount confirmation configured (see EMV_CT_CONF_AMOUNT_PIN in Defines for Application flow capabilities) |
| └──📄 Transaction input: Which data is included | Contents of EMV_CT_TRANSAC_TYPE::Info_Included_Data |
| └──📄 Transaction type (Tag 9C) | According to ISO 8583 - Annex A: Processing Code, Position 1 + 2 |
| └──📄 Options for updating TLV data | options for EMV_CT_updateTxnTags() |
| └─ 📁Output data |  |
| └──📄 CTLS card types | Defines for EMV_CTLS_TRANSRES_TYPE::ctlsCardType |
| └──📄 Bitstring with information about the outcome of EMV_CTLS_SetupTransaction() | Contents of EMV_CTLS_STARTRES_STRUCT::TxnInformation, EMV_CTLS_SetupTransaction() |
| └──📄 EMV_CTLS_SetupTransaction: Which data is included in result struct | Contents of the output in EMV_CTLS_STARTRES_STRUCT::T_DF61_Info_Received_Data, EMV_CTLS_SetupTransaction() |
| └──📄 Information which data was provided by the ICC | Contents of EMV_CTLS_TRANSRES_STRUCT::T_DF61_Info_Received_Data |
| └── 📁Additional error data | DF62, 15 bytes, error reference |
| └───📄 Position 1: chipcard command where error occurs (2 byte) |  |
| └───📄 Position 2: status of chipcard communication (2 byte) |  |
| └───📄 Position 3: activator (1 byte) |  |
| └───📄 Position 7: error class (1 byte) |  |
| └──📄 StartTransaction: Which data was received from the chip | Contents of EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data |
| └──📄 ContinueOffline/ContinueOnline: Information which data was provided by the ICC | Contents of EMV_CT_TRANSRES_TYPE::T_DF61_Info_Received_Data |
| └──📄 Additional information in cryptogram information (9F27) | 9F27 (cryptogram information) can carry more information than just AAC, TC, and ARQC. The ICC has the possibility to give back these additional information. Calling application may use these defines to analyse EMV_CT_TRANSRES_STRUCT::T_9F27_CryptInfo |
| └──📄 Status information | Defines for EMV_CT_TRANSRES_STRUCT::StatusInfo |
| └──📄 Options for fetching TLV data | options for EMV_CT_fetchTxnTags() |
|  ▼ICC Interface | Definitions used for functions EMV_CT_SmartISO(), EMV_CT_SmartReset(), EMV_CT_SmartPowerOff(), EMV_CT_Send_PIN_Offline(), EMV_CT_SmartDetect() |
| └─📄 Options for ICC access | Options for ICC access, e.g. for EMV_CTLS_SmartISO(), EMV_CTLS_SmartReset(), EMV_CTLS_SmartPowerOff() |
| └─📄 Smart status | Return values for functions of group Functions for transparent ICC access |
| └─📄 Functions for transparent ICC access |  |
|  ▼LED control |  |
| └─📄 Defines for LED IDs | LED numbers in EMV_CTLS_LED() |
| └─📄 Defines for LED states | LED states to be used in EMV_CTLS_LED() |
| └─📄 Defines for LED modes | LED modes to be used in EMV_CTLS_LED_SetMode() |
| └─📄 Defines for LED handling | LED numbers and modes to be used in EMV_CT_LED() |
|  ▼Import/Export Utility | Allows configurable data translation from a file into a database and vice versa |
| └─📄 Public API | API for the users of the library |
| 📄 Property Database API | Allows for easy to use hierarchical key/value storage |
| 📄 Multi Application Controller functions |  |
| 📄 Error codes | These error codes are returned by the various libmsr functions |
| 📄 Status code | These values indicate the status of each read track |
| 📄 Card Type Code | These values indicate the type of msr read |
| 📄 Track Type Code | These values indicate the type of track data |
| 📄 Options bitmask | These options configure the behavior of magnetic card reader library, set by MSR_SetOptions(). A combination is possible using \| operator |
| 📄 LED states | These are the states of the three MSR LEDs which can be set by MSR_SwitchLeds(). On devices that don\'t have multicolored LEDs, all \"color defines\" are equivalent and imply \"LED on\". As there is currently no device with multicolored LEDs, multicolor feature is not implemented yet |
| 📄 management functions |  |
| 📄 Dialog invocation return values | Return values from display(), secureInput(), htmlDialog(), menu(), requestCard() and captureSignature() are defined as integer values according to html/gui_error.h to be able to return a positive value for the selected menu item |
| 📄 Dialog options | Bit mask values for dialog options set with setOptions() (DFA13D) |
| 📄 Menu options | Bit mask values for menu options set with setOptions() (DFA13D) |
| 📄 SDI Protocol Error Codes | SDI protocol error codes |
| 📄 SDI Protocol Initialization Options | SDI protocol configuration flags |
| 📄 System LED functions |  |
| 📄 Netloader |  |
| 📄 System statusbar functions |  |
| 📄 Low level system power management functions. Please use vfisyspm.h instead. |  |
| 📄 System beep functions |  |
| 📄 System property functions |  |
| 📄 System property functions |  |
| 📄 installation functions |  |
| 📄 Utility functions |  |
| 📄 zontalk protocal APIs |  |
| 📄 PED return codes | These return codes are returned by the ped functions |
| 📄 PED status codes | These codes are set by ped_Pairing() |
| 📄 Notification callback types | These callbacks can be set by cts_SetNotificationCallback() |
| 📄 TEC technology code | These codes are used to specify supported technologies. A combination is possible using \| operator |
| 📄 TEC return codes | These return codes are returned by the various libtec functions |
| 📄 TEC start options | These options configure the behavior of technology selection, set by cts_StartSelection(). A combination is possible using \| operator |
| 📄 TEC result data tags | These tags are used in dataBuffer of cts_WaitSelection() if CTS_DATA_TLV is set in usedTechnology |
| 📄 TEC option tags | These options can be set by cts_SetOptions() |
| 📄 Graphical User Interface |  |
| 📄 Printing functions |  |
| 📄 inter process communication |  |
| 📄 TLVLite |  |
| 📄 SDI client setup |  |
| 📄 Low level message interface |  |
| 📄 System interface |  |
| 📄 Display interface |  |
| 📄 Printer interface |  |
| 📄 MSR interface |  |
| 📄 Card reader interface |  |
| 📄 PIN entry interface |  |
| 📄 Crypto interface |  |
| 📄 Data interface |  |
| 📄 VCL interface |  |
| 📄 EMV contact interface |  |
| 📄 EMV contactless interface |  |
| 📄 SDI client NFC interface |  |
| 📄 SDI client VAS interface |  |
| 📄 SDI and EMV callbacks |  |
| 📄 SDI plugin commands |  |
| 📄 Com_verifone_seccmd |  |
| 📄 Config |  |
| 📄 Vss |  |

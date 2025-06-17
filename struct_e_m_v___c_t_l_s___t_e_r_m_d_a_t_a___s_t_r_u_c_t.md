---
title: EMV_CTLS_TERMDATA_STRUCT
summary: struct for interface to EMV_CTLS_SetTermData() and EMV_CTLS_GetTermData()

---

# EMV_CTLS_TERMDATA_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Terminal Data](group___d_e_f___c_o_n_f___t_e_r_m.md)**



struct for interface to [EMV_CTLS_SetTermData()]() and [EMV_CTLS_GetTermData()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned long | **[CL_Modes_Supported](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-cl-modes-supported)** <br>obsolete, ignored  |
| unsigned char | **[TermTyp](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp)** <br>Terminal type, for possible values see [Terminaltypes (Tag 9F35)]()   mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_TRM_TYPE]()   TLV tag [TAG_9F35_TRM_TYPE]()   XML Tag: [XML_TAG_TERMDATA_TERM_TYP]().  |
| unsigned char[2] | **[CountryCodeTerm](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-countrycodeterm)** <br>Terminal country code according ISO 3166    Availability bit: [INPUT_CTLS_TRM_COUNTRY_CODE]()   TLV tag [TAG_9F1A_TRM_COUNTRY_CODE]()   XML Tag: [XML_TAG_TERMDATA_COUNTRY_CODE_TERM]().  |
| unsigned char[2] | **[CurrencyTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans)** <br>Transaction currency code according ISO 4217    Availability bit: [INPUT_CTLS_TRM_CURRENCY]()   TLV tag [TAG_5F2A_TRANS_CURRENCY]()   XML Tag: [XML_TAG_TERMDATA_CURRENCY_TRANS]().  |
| unsigned char | **[ExpTrans](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans)** <br>Transaction currency exponent    Availability bit: [INPUT_CTLS_TRM_EXP_CURRENCY]()   TLV tag [TAG_5F36_TRANS_CURRENCY_EXP]()   XML Tag: [XML_TAG_TERMDATA_EXP_TRANS]().  |
| unsigned char[EMV_ADK_MAX_LANG] | **[SuppLang](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang)** <br>Languages supported by the terminal application, see [Known languages]()   Availability bit: [INPUT_CTLS_TRM_LANGUAGES]()   TLV tag [TAG_SUPP_LANG]()   XML Tag: [XML_TAG_TERMDATA_SUPP_LANG]().  |
| unsigned char[8] | **[IFDSerialNumber](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber)** <br>Interface Device (IFD) Serial Number    In case there are no special project requirements this parameter can be filled as follows:  _ Verix: _ use function `SVC_INFO_SERLNO()` and take the last 8 digits from the result  _ V/OS: _ function `platforminfo_get()` with ` InfoType==PI_SERIAL_NUM `   On VFI reader the configured value does not come into effect. VFI reader internally fetches the 9F1E from the OS.    Availability bit: [INPUT_CTLS_TRM_IFD_SERIAL]()   TLV tag [TAG_9F1E_IFD_SERIAL_NB]()   XML Tag: [XML_TAG_TERMDATA_IFD_SERIAL_NUMBER]().  |
| unsigned char[10] | **[FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions)** <br>Flow Options, see [Terminal configuration: Collection of flow options]()   Availability bit: [INPUT_CTLS_TRM_FLOW_OPTIONS]()   TLV tag [TAG_DF8F0B_TERM_FLOW_OPTIONS]()   XML Tag: [XML_TAG_TERMDATA_FLOW_OPTIONS]().  |
| unsigned char[4] | **[MaxCTLSTranslimit](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-maxctlstranslimit)** <br>(Hexadecimal coded) Contactless transaction limit    CTLS Setup will fail if the amount is above this limit (EPAL requirement) - not recommended to configure (leave empty) if not explicitly needed like in Australia    TLV tag [TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT]()   XML Tag: [XML_TAG_TERMDATA_MAXCTLS_TRANSLIMIT]()   Availability bit [INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT]() |
| unsigned short | **[BeepVolume](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepvolume)** <br>Beeper Volume Allows the application to modify the volume of the success tone at the end of a contactless transaction. Format: Percentage of maximum volume as binary value [1..100].    See also [EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK]()   TLV tag [TAG_DF62_BUZZER_VOLUME]()   XML Tag: [XML_TAG_TERMDATA_BEEP_VOLUME]()   Availability bit [INPUT_CTLS_TRM_BEEP_VOLUME]().  |
| unsigned short | **[BeepFrequencySuccess](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencysuccess)** <br>Beeper frequency for success tone (unit: Hz)    Optional, default: 1500    See also [EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK]()   Availability bit: [INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS]()   TLV tag [TAG_DFD006_BEEP_FREQ_SUCCESS]()   XML Tag: [XML_TAG_TERMDATA_BEEP_FREQUENCY_SUCCESS]().  |
| unsigned short | **[BeepFrequencyAlert](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-beepfrequencyalert)** <br>Beeper frequency for alert tone (unit: Hz)    Optional, default: 750    See also [EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK]()   Availability bit: [INPUT_CTLS_TRM_BEEP_FREQ_ALERT]()   TLV tag [TAG_DFD007_BEEP_FREQ_ALERT](),    XML Tag: [XML_TAG_TERMDATA_BEEP_FREQUENCY_ALERT]().  |
| unsigned char | **[HostCommunicationTimeout](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hostcommunicationtimeout)** <br>Maximum time between response of [EMV_CTLS_ContinueOffline()]() and call of [EMV_CTLS_ContinueOnline()]().    Relevant for schemes having second tap scenarios (Discover, JCB and Rupay).    VFI reader only!    Optional, default: 15 Seconds    Availability bit: [INPUT_CTLS_TRM_HOST_COMM_TIMEOUT]()   TLV tag [TAG_DFD009_HOST_COMM_TIMEOUT]()   XML Tag: [XML_TAG_TERMDATA_HOST_COMM_TIMEOUT]().  |
| unsigned char | **[SecondTapDelay](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-secondtapdelay)** <br>Maximum time to wait for the second card tap after the online session.    Relevant for schemes having second tap scenarios (Discover, JCB and Rupay).    VFI reader only!    Optional, default: 10 Seconds    Availability bit: [INPUT_CTLS_TRM_SECOND_TAP_DELAY]()   TLV tag [TAG_DFD008_SECOND_TAP_DELAY]()   XML Tag: [XML_TAG_TERMDATA_SECOND_TAP_DELAY]().  |
| const unsigned char * | **[Hotlist](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-hotlist)** <br>Blacklisted card numbers optional pointer to PAN list, BER-TLV coded list of tag '5A' each optionally followed by PAN sequence number tag '5F34'. The list end is marked by trailing binary '0'. Please note: It is recommended that the payment application itself checks for hotcard after the payment because of timing considerations (if the scheme allows this). Anyway for certification purpose and short lists a support is added. The hotlist is member of the contactless terminal wide configuration structure. It is a const byte array with a TLV coded list of '5A' tags of arbitrary length. The interface is write-only. Deletion is achieved by sending an empty list. The list is stored in a file named "EMV_CTLS_Hotlist.xml" containing XML tags "<Hotlist>" and "<PAN>". Limitations: Simple algorithm Since the hotlist is foreseen to be small for instance. So the check is just a simple list iteration. Therefore the time consumption is O(n). No partial match, the PANs have to match completely that is they have to have the same length. TLV tag [TAG_HOTLIST]()   Availability bit [INPUT_CTLS_TRM_HOTLIST]().  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[poiInformation](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-poiinformation)** <br>POI information according Book B - Entry Point specification TLV tag [TAG_8B_POI_INFORMATION]()   Availability bit [INPUT_CTLS_TRM_HOTLIST]().  |
| char[EMV_CTLS_KERNEL_VERSION_SIZE] | **[KernelVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion)** <br>Version of EMVCo Kernels, only valid for [EMV_CTLS_GetTermData()]()   Availability bit: [INPUT_CTLS_TRM_KERNEL_VERSION]()   TLV tag [TAG_KERNEL_VERSION]()   XML Tag: [XML_TAG_TERMDATA_KERNEL_VERSION]().  |
| char[EMV_ADK_VERSION_ASCII_SIZE] | **[FrameworkVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion)** <br>Version of the Framework, only valid for [EMV_CTLS_GetTermData()]()   Availability bit: [INPUT_CTLS_TRM_FRAMEWORK_VERSION]()   TLV tag [TAG_DF11_LIB_VERSION]()   XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION]().  |
| char[EMV_ADK_VERSION_ASCII_SIZE] | **[L1DriverVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion)** <br>Version of L1 driver in the form _<PCD software id>,<PCD hardware id>;<OS driver version>;<PCD name> <checksum>_, only valid for [EMV_CTLS_GetTermData()]()   Availability bit: [INPUT_CTLS_TRM_L1DRIVER_VERSION]()   TLV tag [TAG_DF6F_L1DRIVER_VERSION]()   XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION]().  |
| unsigned char[8] | **[Info_Included_Data](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-info-included-data)** <br>Which data is included in the message.  |

## Public Attributes Documentation

### variable CL_Modes_Supported

```cpp
unsigned long CL_Modes_Supported;
```

obsolete, ignored 

### variable TermTyp

```cpp
unsigned char TermTyp;
```

Terminal type, for possible values see [Terminaltypes (Tag 9F35)]()   mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_TRM_TYPE]()   TLV tag [TAG_9F35_TRM_TYPE]()   XML Tag: [XML_TAG_TERMDATA_TERM_TYP](). 

### variable CountryCodeTerm

```cpp
unsigned char[2] CountryCodeTerm;
```

Terminal country code according ISO 3166    Availability bit: [INPUT_CTLS_TRM_COUNTRY_CODE]()   TLV tag [TAG_9F1A_TRM_COUNTRY_CODE]()   XML Tag: [XML_TAG_TERMDATA_COUNTRY_CODE_TERM](). 

### variable CurrencyTrans

```cpp
unsigned char[2] CurrencyTrans;
```

Transaction currency code according ISO 4217    Availability bit: [INPUT_CTLS_TRM_CURRENCY]()   TLV tag [TAG_5F2A_TRANS_CURRENCY]()   XML Tag: [XML_TAG_TERMDATA_CURRENCY_TRANS](). 

### variable ExpTrans

```cpp
unsigned char ExpTrans;
```

Transaction currency exponent    Availability bit: [INPUT_CTLS_TRM_EXP_CURRENCY]()   TLV tag [TAG_5F36_TRANS_CURRENCY_EXP]()   XML Tag: [XML_TAG_TERMDATA_EXP_TRANS](). 

### variable SuppLang

```cpp
unsigned char[EMV_ADK_MAX_LANG] SuppLang;
```

Languages supported by the terminal application, see [Known languages]()   Availability bit: [INPUT_CTLS_TRM_LANGUAGES]()   TLV tag [TAG_SUPP_LANG]()   XML Tag: [XML_TAG_TERMDATA_SUPP_LANG](). 

### variable IFDSerialNumber

```cpp
unsigned char[8] IFDSerialNumber;
```

Interface Device (IFD) Serial Number    In case there are no special project requirements this parameter can be filled as follows:  _ Verix: _ use function `SVC_INFO_SERLNO()` and take the last 8 digits from the result  _ V/OS: _ function `platforminfo_get()` with ` InfoType==PI_SERIAL_NUM `   On VFI reader the configured value does not come into effect. VFI reader internally fetches the 9F1E from the OS.    Availability bit: [INPUT_CTLS_TRM_IFD_SERIAL]()   TLV tag [TAG_9F1E_IFD_SERIAL_NB]()   XML Tag: [XML_TAG_TERMDATA_IFD_SERIAL_NUMBER](). 

### variable FlowOptions

```cpp
unsigned char[10] FlowOptions;
```

Flow Options, see [Terminal configuration: Collection of flow options]()   Availability bit: [INPUT_CTLS_TRM_FLOW_OPTIONS]()   TLV tag [TAG_DF8F0B_TERM_FLOW_OPTIONS]()   XML Tag: [XML_TAG_TERMDATA_FLOW_OPTIONS](). 

### variable MaxCTLSTranslimit

```cpp
unsigned char[4] MaxCTLSTranslimit;
```

(Hexadecimal coded) Contactless transaction limit    CTLS Setup will fail if the amount is above this limit (EPAL requirement) - not recommended to configure (leave empty) if not explicitly needed like in Australia    TLV tag [TAG_DF8F0E_TERM_MAXCTLS_TRANSLIMIT]()   XML Tag: [XML_TAG_TERMDATA_MAXCTLS_TRANSLIMIT]()   Availability bit [INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT]()

### variable BeepVolume

```cpp
unsigned short BeepVolume;
```

Beeper Volume Allows the application to modify the volume of the success tone at the end of a contactless transaction. Format: Percentage of maximum volume as binary value [1..100].    See also [EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK]()   TLV tag [TAG_DF62_BUZZER_VOLUME]()   XML Tag: [XML_TAG_TERMDATA_BEEP_VOLUME]()   Availability bit [INPUT_CTLS_TRM_BEEP_VOLUME](). 

### variable BeepFrequencySuccess

```cpp
unsigned short BeepFrequencySuccess;
```

Beeper frequency for success tone (unit: Hz)    Optional, default: 1500    See also [EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK]()   Availability bit: [INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS]()   TLV tag [TAG_DFD006_BEEP_FREQ_SUCCESS]()   XML Tag: [XML_TAG_TERMDATA_BEEP_FREQUENCY_SUCCESS](). 

### variable BeepFrequencyAlert

```cpp
unsigned short BeepFrequencyAlert;
```

Beeper frequency for alert tone (unit: Hz)    Optional, default: 750    See also [EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK]()   Availability bit: [INPUT_CTLS_TRM_BEEP_FREQ_ALERT]()   TLV tag [TAG_DFD007_BEEP_FREQ_ALERT](),    XML Tag: [XML_TAG_TERMDATA_BEEP_FREQUENCY_ALERT](). 

### variable HostCommunicationTimeout

```cpp
unsigned char HostCommunicationTimeout;
```

Maximum time between response of [EMV_CTLS_ContinueOffline()]() and call of [EMV_CTLS_ContinueOnline()]().    Relevant for schemes having second tap scenarios (Discover, JCB and Rupay).    VFI reader only!    Optional, default: 15 Seconds    Availability bit: [INPUT_CTLS_TRM_HOST_COMM_TIMEOUT]()   TLV tag [TAG_DFD009_HOST_COMM_TIMEOUT]()   XML Tag: [XML_TAG_TERMDATA_HOST_COMM_TIMEOUT](). 

### variable SecondTapDelay

```cpp
unsigned char SecondTapDelay;
```

Maximum time to wait for the second card tap after the online session.    Relevant for schemes having second tap scenarios (Discover, JCB and Rupay).    VFI reader only!    Optional, default: 10 Seconds    Availability bit: [INPUT_CTLS_TRM_SECOND_TAP_DELAY]()   TLV tag [TAG_DFD008_SECOND_TAP_DELAY]()   XML Tag: [XML_TAG_TERMDATA_SECOND_TAP_DELAY](). 

### variable Hotlist

```cpp
const unsigned char * Hotlist;
```

Blacklisted card numbers optional pointer to PAN list, BER-TLV coded list of tag '5A' each optionally followed by PAN sequence number tag '5F34'. The list end is marked by trailing binary '0'. Please note: It is recommended that the payment application itself checks for hotcard after the payment because of timing considerations (if the scheme allows this). Anyway for certification purpose and short lists a support is added. The hotlist is member of the contactless terminal wide configuration structure. It is a const byte array with a TLV coded list of '5A' tags of arbitrary length. The interface is write-only. Deletion is achieved by sending an empty list. The list is stored in a file named "EMV_CTLS_Hotlist.xml" containing XML tags "<Hotlist>" and "<PAN>". Limitations: Simple algorithm Since the hotlist is foreseen to be small for instance. So the check is just a simple list iteration. Therefore the time consumption is O(n). No partial match, the PANs have to match completely that is they have to have the same length. TLV tag [TAG_HOTLIST]()   Availability bit [INPUT_CTLS_TRM_HOTLIST](). 

### variable poiInformation

```cpp
EMV_CTLS_DATA_TYPE poiInformation;
```

POI information according Book B - Entry Point specification TLV tag [TAG_8B_POI_INFORMATION]()   Availability bit [INPUT_CTLS_TRM_HOTLIST](). 

### variable KernelVersion

```cpp
char[EMV_CTLS_KERNEL_VERSION_SIZE] KernelVersion;
```

Version of EMVCo Kernels, only valid for [EMV_CTLS_GetTermData()]()   Availability bit: [INPUT_CTLS_TRM_KERNEL_VERSION]()   TLV tag [TAG_KERNEL_VERSION]()   XML Tag: [XML_TAG_TERMDATA_KERNEL_VERSION](). 

### variable FrameworkVersion

```cpp
char[EMV_ADK_VERSION_ASCII_SIZE] FrameworkVersion;
```

Version of the Framework, only valid for [EMV_CTLS_GetTermData()]()   Availability bit: [INPUT_CTLS_TRM_FRAMEWORK_VERSION]()   TLV tag [TAG_DF11_LIB_VERSION]()   XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION](). 

### variable L1DriverVersion

```cpp
char[EMV_ADK_VERSION_ASCII_SIZE] L1DriverVersion;
```

Version of L1 driver in the form _<PCD software id>,<PCD hardware id>;<OS driver version>;<PCD name> <checksum>_, only valid for [EMV_CTLS_GetTermData()]()   Availability bit: [INPUT_CTLS_TRM_L1DRIVER_VERSION]()   TLV tag [TAG_DF6F_L1DRIVER_VERSION]()   XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION](). 

### variable Info_Included_Data

```cpp
unsigned char[8] Info_Included_Data;
```

Which data is included in the message. 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
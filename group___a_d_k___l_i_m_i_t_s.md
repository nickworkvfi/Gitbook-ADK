---
title: Limitations and sizes

---

# Limitations and sizes

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_MAX_LANG](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-lang)** <br>maximum number of languages to be configured  |
|  | **[EMV_ADK_DEFAULT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-default-aidsupp)** <br>default maximum number of supported AIDs  |
|  | **[EMV_ADK_MAX_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-aidsupp)**  |
|  | **[EMV_ADK_LIMIT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-limit-aidsupp)** <br>maximum number of supported AIDs for extended AID support  |
|  | **[EMV_ADK_MAX_LG_DDOL](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-lg-ddol)** <br>max. length of DDOL ([EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol))  |
|  | **[EMV_ADK_MAX_LG_TDOL](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-lg-tdol)** <br>max. length of TDOL ([EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol))  |
|  | **[EMV_ADK_MAX_PRIO_APP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-prio-app)** <br>max. number of priority applications (see [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio))  |
|  | **[EMV_ADK_MAX_DOM_CHP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-dom-chp)** <br>max. number of domestic chip applications (see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip))  |
|  | **[EMV_ADK_MAX_FB_MSR](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-fb-msr)** <br>max. number of assigned magstripe fallback applications per transaction (see [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms)) . Candidates are every credit card, Maestro and maybe local applications.  |
|  | **[EMV_ADK_MAX_CHP_TO_MSR](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-chp-to-msr)** <br>max. number of assigned magstripe fallback applications per chip application (see [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids))  |
|  | **[EMV_ADK_IAD_MAX_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-iad-max-len)** <br>max. length of issuer authentic. data (EMVCo tag 91)    because [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata) includes "91xx" it has a maximum length of EMV_ADK_IAD_MAX_LEN + 2  |
|  | **[EMV_ADK_SCRIPT_RESULT_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-script-result-len)** <br>Max. length of issuer script result data (output of [EMV_CT_ContinueOnline()](), see also [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults)) (not used for contactless)  |
|  | **[EMV_ADK_SCRIPT_RESULT_MAX](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-script-result-max)** <br>L2 kernel: Max. number of issuer script results (output of [EMV_CT_ContinueOnline()](), see also [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults))    Used for [EMV_ADK_SCRIPT_RESULT_MAX]() (not used for contactless)  |
|  | **[EMV_ADK_CHECKSUM_ASCII_SIZE](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-checksum-ascii-size)** <br>EMV L2 kernel: Size of EMVCo checksum in ASCII representation (incl. zero termination)    Used for [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco).  |
|  | **[EMV_ADK_VERSION_ASCII_SIZE](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-version-ascii-size)** <br>Size of EMVCo Kernel version, Framework version and L1 Driver version information in ASCII representation (see [EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion), EMV_CT_TERMDATA_STRUCT::FrameworkVersiona and [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion))  |
|  | **[EMV_ADK_CHECKSUM_SIZE](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-checksum-size)** <br>L2 kernel: Size of EMVCo checksum in bytes    Used internally.  |
|  | **[EMV_ADK_CHECKSUM_SIZE_NEW](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-checksum-size-new)** <br>L2 kernel: Size of new EMVCo checksum in bytes    Used internally.  |
|  | **[EMV_ADK_BCD_AMOUNT_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-bcd-amount-len)**  |
|  | **[EMV_ADK_BIN_AMOUNT_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-bin-amount-len)**  |
|  | **[EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-bcd-country-currency-code-len)**  |
|  | **[EMV_ADK_BCD_DATE_OR_TIME_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-bcd-date-or-time-len)**  |
|  | **[EMV_ADK_MAX_CVM](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm)** <br>Number of CVM given in parameter `pucCvmList` of [EMV_CT_CALLBACK_FnT()]() ([TAG_BF06_CBK_LOCAL_CHECKS](), [TAG_BF07_CBK_DCC]()). Also used in [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list). Length in bytes: [EMV_ADK_MAX_CVM_LIST_LEN]() (not used for contactless)  |
|  | **[EMV_ADK_MAX_CVM_LIST_LEN](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm-list-len)** <br>Length in bytes of parameter `pucCvmList` of [EMV_CT_CALLBACK_FnT()]() ([TAG_BF05_CBK_DOM_APPS]() and [TAG_BF07_CBK_DCC]()). Also used in [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list). Number of included CVMs: [EMV_ADK_MAX_CVM](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm) (not used for contactless)  |
|  | **[EMV_ADK_MAX_PAN_LANGUAGES](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-pan-languages)** <br>Maximum number of languages to give back in `pucReducedLanguageList` of [EMV_CT_CALLBACK_FnT()]() ([TAG_BF05_CBK_DOM_APPS]()) (Not used for contactless)  |




## Macros Documentation

### define EMV_ADK_MAX_LANG

```
#define EMV_ADK_MAX_LANG 20
```

maximum number of languages to be configured 

### define EMV_ADK_DEFAULT_AIDSUPP

```
#define EMV_ADK_DEFAULT_AIDSUPP 20
```

default maximum number of supported AIDs 

### define EMV_ADK_MAX_AIDSUPP

```
#define EMV_ADK_MAX_AIDSUPP EMV_ADK_DEFAULT_AIDSUPP
```


**Deprecated**: 

old define for default maximum number of supported AIDs, don't use anymore, use [EMV_ADK_DEFAULT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-default-aidsupp) instead 

### define EMV_ADK_LIMIT_AIDSUPP

```
#define EMV_ADK_LIMIT_AIDSUPP 255
```

maximum number of supported AIDs for extended AID support 

### define EMV_ADK_MAX_LG_DDOL

```
#define EMV_ADK_MAX_LG_DDOL 80
```

max. length of DDOL ([EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol)) 

### define EMV_ADK_MAX_LG_TDOL

```
#define EMV_ADK_MAX_LG_TDOL 80
```

max. length of TDOL ([EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol)) 

### define EMV_ADK_MAX_PRIO_APP

```
#define EMV_ADK_MAX_PRIO_APP 5
```

max. number of priority applications (see [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio)) 

### define EMV_ADK_MAX_DOM_CHP

```
#define EMV_ADK_MAX_DOM_CHP 5
```

max. number of domestic chip applications (see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)) 

### define EMV_ADK_MAX_FB_MSR

```
#define EMV_ADK_MAX_FB_MSR 20
```

max. number of assigned magstripe fallback applications per transaction (see [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms)) . Candidates are every credit card, Maestro and maybe local applications. 

### define EMV_ADK_MAX_CHP_TO_MSR

```
#define EMV_ADK_MAX_CHP_TO_MSR 3
```

max. number of assigned magstripe fallback applications per chip application (see [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids)) 

### define EMV_ADK_IAD_MAX_LEN

```
#define EMV_ADK_IAD_MAX_LEN 16
```

max. length of issuer authentic. data (EMVCo tag 91)    because [EMV_CT_HOST_STRUCT::AuthData](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authdata) includes "91xx" it has a maximum length of EMV_ADK_IAD_MAX_LEN + 2 

### define EMV_ADK_SCRIPT_RESULT_LEN

```
#define EMV_ADK_SCRIPT_RESULT_LEN 5
```

Max. length of issuer script result data (output of [EMV_CT_ContinueOnline()](), see also [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults)) (not used for contactless) 

### define EMV_ADK_SCRIPT_RESULT_MAX

```
#define EMV_ADK_SCRIPT_RESULT_MAX 10
```

L2 kernel: Max. number of issuer script results (output of [EMV_CT_ContinueOnline()](), see also [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults))    Used for [EMV_ADK_SCRIPT_RESULT_MAX]() (not used for contactless) 

### define EMV_ADK_CHECKSUM_ASCII_SIZE

```
#define EMV_ADK_CHECKSUM_ASCII_SIZE 33
```

EMV L2 kernel: Size of EMVCo checksum in ASCII representation (incl. zero termination)    Used for [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco). 

### define EMV_ADK_VERSION_ASCII_SIZE

```
#define EMV_ADK_VERSION_ASCII_SIZE 128
```

Size of EMVCo Kernel version, Framework version and L1 Driver version information in ASCII representation (see [EMV_CT_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion), EMV_CT_TERMDATA_STRUCT::FrameworkVersiona and [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion)) 

### define EMV_ADK_CHECKSUM_SIZE

```
#define EMV_ADK_CHECKSUM_SIZE 4
```

L2 kernel: Size of EMVCo checksum in bytes    Used internally. 

### define EMV_ADK_CHECKSUM_SIZE_NEW

```
#define EMV_ADK_CHECKSUM_SIZE_NEW 16
```

L2 kernel: Size of new EMVCo checksum in bytes    Used internally. 

### define EMV_ADK_BCD_AMOUNT_LEN

```
#define EMV_ADK_BCD_AMOUNT_LEN 6
```


### define EMV_ADK_BIN_AMOUNT_LEN

```
#define EMV_ADK_BIN_AMOUNT_LEN 4
```


### define EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN

```
#define EMV_ADK_BCD_COUNTRY_CURRENCY_CODE_LEN 2
```


### define EMV_ADK_BCD_DATE_OR_TIME_LEN

```
#define EMV_ADK_BCD_DATE_OR_TIME_LEN 3
```


### define EMV_ADK_MAX_CVM

```
#define EMV_ADK_MAX_CVM 10
```

Number of CVM given in parameter `pucCvmList` of [EMV_CT_CALLBACK_FnT()]() ([TAG_BF06_CBK_LOCAL_CHECKS](), [TAG_BF07_CBK_DCC]()). Also used in [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list). Length in bytes: [EMV_ADK_MAX_CVM_LIST_LEN]() (not used for contactless) 

### define EMV_ADK_MAX_CVM_LIST_LEN

```
#define EMV_ADK_MAX_CVM_LIST_LEN (8 + EMV_ADK_MAX_CVM * 2)
```

Length in bytes of parameter `pucCvmList` of [EMV_CT_CALLBACK_FnT()]() ([TAG_BF05_CBK_DOM_APPS]() and [TAG_BF07_CBK_DCC]()). Also used in [EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-8e-cvm-list). Number of included CVMs: [EMV_ADK_MAX_CVM](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-cvm) (not used for contactless) 

### define EMV_ADK_MAX_PAN_LANGUAGES

```
#define EMV_ADK_MAX_PAN_LANGUAGES 6
```

Maximum number of languages to give back in `pucReducedLanguageList` of [EMV_CT_CALLBACK_FnT()]() ([TAG_BF05_CBK_DOM_APPS]()) (Not used for contactless) 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
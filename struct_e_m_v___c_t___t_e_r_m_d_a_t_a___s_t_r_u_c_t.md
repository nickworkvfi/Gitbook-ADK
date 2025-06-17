---
title: EMV_CT_TERMDATA_STRUCT
summary: struct for interface to EMV_CT_SetTermData() and EMV_CT_GetTermData()

---

# EMV_CT_TERMDATA_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Terminal Data](group___d_e_f___c_o_n_f___t_e_r_m.md)**



struct for interface to [EMV_CT_SetTermData()]() and [EMV_CT_GetTermData()]()


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[TermTyp](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termtyp)** <br>Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CT_SetTermData()]() ,validity bit [EMV_CT_INPUT_TRM_TYPE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F35_TRM_TYPE](),    TermTyp in [EMV_CT_TERMDATA_STRUCT::TermTyp](),    XML Tag: [XML_TAG_TERMDATA_TERM_TYP]().  |
| unsigned char[2] | **[TermCountryCode](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcountrycode)** <br>Terminal country code according ISO 3166, validity bit [EMV_CT_INPUT_TRM_COUNTRY_CODE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](),    TermCountryCode in [EMV_CT_TERMDATA_STRUCT::TermCountryCode](),    XML Tag: [XML_TAG_TERMDATA_COUNTRY_CODE_TERM]().  |
| unsigned char[3] | **[TermCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termcap)** <br>Terminal capabilities    overwritten by [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap) at Final Select    mandatory for first call of [EMV_CT_SetTermData()](), validity bit [EMV_CT_INPUT_TRM_CAPABILITIES]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F33_TRM_CAPABILITIES](),    TermCap in [EMV_CT_TERMDATA_STRUCT::TermCap](),    XML Tag: [XML_TAG_TERMDATA_TERM_CAP]().  |
| unsigned char[5] | **[TermAddCap](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termaddcap)** <br>Additional terminal capabilities    overwritten by [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap) at Final Select, validity bit [EMV_CT_INPUT_TRM_ADD_CAPS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F40_ADD_TRM_CAP](),    TermAddCap in [EMV_CT_TERMDATA_STRUCT::TermAddCap](),    XML Tag: [XML_TAG_TERMDATA_TERM_ADD_CAP]().  |
| unsigned char[8] | **[TermIdent](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-termident)** <br>Terminal Identification    Can also be changed by [EMV_CT_updateTxnTags()]()   validity bit [EMV_CT_INPUT_TRM_ID]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1C_TRM_ID](),    TermIdent in [EMV_CT_TERMDATA_STRUCT::TermIdent](), `XML` Tag: [XML_TAG_TERMDATA_TERM_IDENT]().  |
| unsigned char[2] | **[CurrencyTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-currencytrans)** <br>Transaction currency code according ISO 4217    For a single transaction this value may be overwritten by `CurrencyTrans` of [EMV_CT_SELECT_TYPE](), validity bit [EMV_CT_INPUT_TRM_CURRENCY]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_5F2A_TRANS_CURRENCY](),    CurrencyTrans in [EMV_CT_TERMDATA_STRUCT::CurrencyTrans](),    XML Tag: [XML_TAG_TERMDATA_CURRENCY_TRANS]().  |
| unsigned char | **[ExpTrans](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-exptrans)** <br>Transaction currency exponent    For a single transaction this value may be overwritten by `Exp_Trans` of [EMV_CT_SELECT_TYPE](), validity bit [EMV_CT_INPUT_TRM_EXP_CURRENCY]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](),    ExpTrans in [EMV_CT_TERMDATA_STRUCT::ExpTrans](),    XML Tag: [XML_TAG_TERMDATA_EXP_TRANS]().  |
| unsigned char[EMV_ADK_MAX_LANG] | **[SuppLang](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-supplang)** <br>Supported languages by the terminal application, validity bit [EMV_CT_INPUT_TRM_LANGUAGES]() `Tag`, `Struct`, `XML` Reference:    TLV tag: [TAG_SUPP_LANG](),    SuppLang in [EMV_CT_TERMDATA_STRUCT::SuppLang](),    XML Tag: [XML_TAG_TERMDATA_SUPP_LANG]().  |
| unsigned char[8] | **[IFDSerialNumber](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-ifdserialnumber)** <br>Interface Device (IFD) Serial Number    In case there are no special project requirements this parameter can be filled as follows:  _ Verix: _ use function `SVC_INFO_SERLNO()` and take the last 8 digits from the result  _ V/OS: _ function `platforminfo_get()` with ` InfoType==PI_SERIAL_NUM `   Can also be changed by [EMV_CT_updateTxnTags()]()   validity bit [EMV_CT_INPUT_TRM_IFD_SERIAL]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1E_IFD_SERIAL_NB](),    IFDSerialNumber in [EMV_CT_TERMDATA_STRUCT::IFDSerialNumber](),    XML Tag: [XML_TAG_TERMDATA_IFD_SERIAL_NUMBER]().  |
| char[EMV_ADK_VERSION_ASCII_SIZE] | **[KernelVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion)** <br>version of EMVCo Kernel, validity bit [EMV_CT_INPUT_TRM_KERNEL_VERSION]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KERNEL_VERSION](),    KernelVersion in [EMV_CT_TERMDATA_STRUCT::KernelVersion](),    XML Tag: [XML_TAG_TERMDATA_KERNEL_VERSION]() |
| char[EMV_ADK_VERSION_ASCII_SIZE] | **[FrameworkVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-frameworkversion)** <br>version of the Framework, see #EMV_CT_FRAMEWORK_VERSION, validity bit [EMV_CT_INPUT_TRM_FRAMEWORK_VERSION]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](),    FrameworkVersion in [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION]() |
| char[EMV_ADK_VERSION_ASCII_SIZE] | **[L1DriverVersion](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-l1driverversion)** <br>version of L1 Driver, validity bit [EMV_CT_INPUT_TRM_L1DRIVER_VERSION]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_L1DRIVER_VERSION](),    L1DriverVersion in [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION]() |
| unsigned char[8] | **[Info_Included_Data](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-info-included-data)** <br>Which data is included in the message, see [Terminal data: Which data is valid]().  |

## Public Attributes Documentation

### variable TermTyp

```cpp
unsigned char TermTyp;
```

Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CT_SetTermData()]() ,validity bit [EMV_CT_INPUT_TRM_TYPE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F35_TRM_TYPE](),    TermTyp in [EMV_CT_TERMDATA_STRUCT::TermTyp](),    XML Tag: [XML_TAG_TERMDATA_TERM_TYP](). 

### variable TermCountryCode

```cpp
unsigned char[2] TermCountryCode;
```

Terminal country code according ISO 3166, validity bit [EMV_CT_INPUT_TRM_COUNTRY_CODE]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1A_TRM_COUNTRY_CODE](),    TermCountryCode in [EMV_CT_TERMDATA_STRUCT::TermCountryCode](),    XML Tag: [XML_TAG_TERMDATA_COUNTRY_CODE_TERM](). 

### variable TermCap

```cpp
unsigned char[3] TermCap;
```

Terminal capabilities    overwritten by [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap) at Final Select    mandatory for first call of [EMV_CT_SetTermData()](), validity bit [EMV_CT_INPUT_TRM_CAPABILITIES]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F33_TRM_CAPABILITIES](),    TermCap in [EMV_CT_TERMDATA_STRUCT::TermCap](),    XML Tag: [XML_TAG_TERMDATA_TERM_CAP](). 

### variable TermAddCap

```cpp
unsigned char[5] TermAddCap;
```

Additional terminal capabilities    overwritten by [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap) at Final Select, validity bit [EMV_CT_INPUT_TRM_ADD_CAPS]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F40_ADD_TRM_CAP](),    TermAddCap in [EMV_CT_TERMDATA_STRUCT::TermAddCap](),    XML Tag: [XML_TAG_TERMDATA_TERM_ADD_CAP](). 

### variable TermIdent

```cpp
unsigned char[8] TermIdent;
```

Terminal Identification    Can also be changed by [EMV_CT_updateTxnTags()]()   validity bit [EMV_CT_INPUT_TRM_ID]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1C_TRM_ID](),    TermIdent in [EMV_CT_TERMDATA_STRUCT::TermIdent](), `XML` Tag: [XML_TAG_TERMDATA_TERM_IDENT](). 

### variable CurrencyTrans

```cpp
unsigned char[2] CurrencyTrans;
```

Transaction currency code according ISO 4217    For a single transaction this value may be overwritten by `CurrencyTrans` of [EMV_CT_SELECT_TYPE](), validity bit [EMV_CT_INPUT_TRM_CURRENCY]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_5F2A_TRANS_CURRENCY](),    CurrencyTrans in [EMV_CT_TERMDATA_STRUCT::CurrencyTrans](),    XML Tag: [XML_TAG_TERMDATA_CURRENCY_TRANS](). 

### variable ExpTrans

```cpp
unsigned char ExpTrans;
```

Transaction currency exponent    For a single transaction this value may be overwritten by `Exp_Trans` of [EMV_CT_SELECT_TYPE](), validity bit [EMV_CT_INPUT_TRM_EXP_CURRENCY]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](),    ExpTrans in [EMV_CT_TERMDATA_STRUCT::ExpTrans](),    XML Tag: [XML_TAG_TERMDATA_EXP_TRANS](). 

### variable SuppLang

```cpp
unsigned char[EMV_ADK_MAX_LANG] SuppLang;
```

Supported languages by the terminal application, validity bit [EMV_CT_INPUT_TRM_LANGUAGES]() `Tag`, `Struct`, `XML` Reference:    TLV tag: [TAG_SUPP_LANG](),    SuppLang in [EMV_CT_TERMDATA_STRUCT::SuppLang](),    XML Tag: [XML_TAG_TERMDATA_SUPP_LANG](). 

### variable IFDSerialNumber

```cpp
unsigned char[8] IFDSerialNumber;
```

Interface Device (IFD) Serial Number    In case there are no special project requirements this parameter can be filled as follows:  _ Verix: _ use function `SVC_INFO_SERLNO()` and take the last 8 digits from the result  _ V/OS: _ function `platforminfo_get()` with ` InfoType==PI_SERIAL_NUM `   Can also be changed by [EMV_CT_updateTxnTags()]()   validity bit [EMV_CT_INPUT_TRM_IFD_SERIAL]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_9F1E_IFD_SERIAL_NB](),    IFDSerialNumber in [EMV_CT_TERMDATA_STRUCT::IFDSerialNumber](),    XML Tag: [XML_TAG_TERMDATA_IFD_SERIAL_NUMBER](). 

### variable KernelVersion

```cpp
char[EMV_ADK_VERSION_ASCII_SIZE] KernelVersion;
```

version of EMVCo Kernel, validity bit [EMV_CT_INPUT_TRM_KERNEL_VERSION]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_KERNEL_VERSION](),    KernelVersion in [EMV_CT_TERMDATA_STRUCT::KernelVersion](),    XML Tag: [XML_TAG_TERMDATA_KERNEL_VERSION]()

### variable FrameworkVersion

```cpp
char[EMV_ADK_VERSION_ASCII_SIZE] FrameworkVersion;
```

version of the Framework, see #EMV_CT_FRAMEWORK_VERSION, validity bit [EMV_CT_INPUT_TRM_FRAMEWORK_VERSION]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_DF11_LIB_VERSION](),    FrameworkVersion in [EMV_CT_TERMDATA_STRUCT::FrameworkVersion](),    XML Tag: [XML_TAG_TERMDATA_FRAMEWORK_VERSION]()

### variable L1DriverVersion

```cpp
char[EMV_ADK_VERSION_ASCII_SIZE] L1DriverVersion;
```

version of L1 Driver, validity bit [EMV_CT_INPUT_TRM_L1DRIVER_VERSION]() `Tag`, `Struct`, `XML` Reference:    TLV tag [TAG_L1DRIVER_VERSION](),    L1DriverVersion in [EMV_CT_TERMDATA_STRUCT::L1DriverVersion](),    XML Tag: [XML_TAG_TERMDATA_L1DRIVER_VERSION]()

### variable Info_Included_Data

```cpp
unsigned char[8] Info_Included_Data;
```

Which data is included in the message, see [Terminal data: Which data is valid](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
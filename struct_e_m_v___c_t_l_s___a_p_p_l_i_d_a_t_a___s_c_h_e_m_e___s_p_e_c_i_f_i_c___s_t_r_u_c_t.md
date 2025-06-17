---
title: EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT
summary: Structure for configuration of one single application. See EMV_CTLS_SetAppliDataSchemeSpecific()
 XML tag XML_TAG_AD_APP
 no TLV tag is used. 

---

# EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application. See [EMV_CTLS_SetAppliDataSchemeSpecific()]()   XML tag [XML_TAG_AD_APP]()   no TLV tag is used. 


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - global part - Availability bits]().  |
| unsigned char | **[ASI_DFAB02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-asi-dfab02)**  |
| unsigned char[5] | **[AppFlowCap_DFAB03](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-appflowcap-dfab03)**  |
| [EMV_CTLS_APPLI_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-type)[EMV_ADK_MAX_PRIO_APP] | **[PriorityApplications_DFAB04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-priorityapplications-dfab04)**  |
| unsigned char[8] | **[SpecialTRXConfig_DFAB05](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-specialtrxconfig-dfab05)**  |
| char[EMV_ADK_CHECKSUM_ASCII_SIZE] | **[ChksumEntryPoint_DFAB06](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-chksumentrypoint-dfab06)**  |
| char[EMV_ADK_CHECKSUM_ASCII_SIZE] | **[ChksumKernel_DFAB07](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-chksumkernel-dfab07)**  |
| unsigned char | **[RetapFieldOff_DFAB08](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-retapfieldoff-dfab08)**  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[AdditionalTagsTRM_DFAB20](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagstrm-dfab20)**  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[AdditionalTagsCRD_DFAB21](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagscrd-dfab21)**  |
| char[16+1] | **[DefaultApplicationName_DFAB22](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-defaultapplicationname-dfab22)**  |
| unsigned | **[InternalKernelId_DFAB23](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-internalkernelid-dfab23)**  |
| union EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::@0 | **[Scheme](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-scheme)**  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - global part - Availability bits](). 

### variable ASI_DFAB02

```cpp
unsigned char ASI_DFAB02;
```


TempUpdate allowed: NO 

 Description: Application selection indicator 

 Must the card's AID match the configured AID exactly? 
`0` ... yes 
`1` ... no 

 mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB02_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab02-0)

 TLV tag [TAG_DFAB02_ASI](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab02-asi), 

 XML Tag: [XML_TAG_AD_DFAB02_ASI](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab02-asi)


### variable AppFlowCap_DFAB03

```cpp
unsigned char[5] AppFlowCap_DFAB03;
```


TempUpdate allowed: YES 

 Description: Configure special application characteristics, see [Application flow capabilities for all schemes](group___d_e_f___f_l_o_w___g_l_o_b.md)

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB03_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab03-0)

 TLV tag [TAG_DFAB03_APP_FLOW_CAP](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab03-app-flow-cap), 

 XML Tag: [XML_TAG_AD_DFAB03_APP_FLOW_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab03-app-flow-cap)


### variable PriorityApplications_DFAB04

```cpp
EMV_CTLS_APPLI_TYPE[EMV_ADK_MAX_PRIO_APP] PriorityApplications_DFAB04;
```


TempUpdate allowed: NO 

 Description: Priority applications for this application ([EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md)) 

 max. number see [EMV_ADK_MAX_PRIO_APP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-max-prio-app)

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB04_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab04-0)

 TLV tag [TAG_DFAB04_PRIO_APPS](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab04-prio-apps), 

 XML Tag: [XML_TAG_AD_DFAB04_PRIO_APPS](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab04-prio-apps)


### variable SpecialTRXConfig_DFAB05

```cpp
unsigned char[8] SpecialTRXConfig_DFAB05;
```


TempUpdate allowed: NO 

 Description: List of special allowed transactions (manual reversal, refund, reservation, tip, Referral), see [Defines for special transaction configuration](group___s_p_e_c_i_a_l___t_r_x_s.md)

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB05_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab05-0)

 TLV tag [TAG_DFAB05_SPECIAL_TRX_CFG](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab05-special-trx-cfg), 

 XML Tag: [XML_TAG_AD_DFAB05_SPECIAL_TRX_CONFIG](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab05-special-trx-config)


### variable ChksumEntryPoint_DFAB06

```cpp
char[EMV_ADK_CHECKSUM_ASCII_SIZE] ChksumEntryPoint_DFAB06;
```


TempUpdate allowed: NO 

 Description: Entrypoint checksum dynamically calculated by the configuration 

 Only valid in EMV_CTLS_GetAppliData() 

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB06_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab06-0)

 TLV tag [TAG_DFAB06_CHKSUM_EP](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab06-chksum-ep), 

 XML Tag: [XML_TAG_AD_DFAB06_CHKSUM_ENTRY_POINT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab06-chksum-entry-point)


### variable ChksumKernel_DFAB07

```cpp
char[EMV_ADK_CHECKSUM_ASCII_SIZE] ChksumKernel_DFAB07;
```


TempUpdate allowed: NO 

 Description: Kernel checksum dynamically calculated by the configuration 

 Only valid in EMV_CTLS_GetAppliData() 

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB07_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab07-0)

 TLV tag [TAG_DFAB07_CHKSUM_KERNEL](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab07-chksum-kernel), 

 XML Tag: [XML_TAG_AD_DFAB07_CHKSUM_KERNEL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab07-chksum-kernel)


### variable RetapFieldOff_DFAB08

```cpp
unsigned char RetapFieldOff_DFAB08;
```


TempUpdate allowed: YES 

 Description: On mobile retap the RF field is switched off. This parameter determines for how long. Unit: 0.1 second. Vertex only. 

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB08_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab08-0)

 TLV tag [TAG_DFAB08_RETAP_FIELD_OFF](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab08-retap-field-off), 

 XML Tag: [XML_TAG_AD_DFAB08_RETAP_FIELD_OFF](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab08-retap-field-off)


### variable AdditionalTagsTRM_DFAB20

```cpp
EMV_CTLS_DATA_TYPE AdditionalTagsTRM_DFAB20;
```


TempUpdate allowed: NO 

 Description: Additional terminal data for special applications 

 Variants: a) list of primitive tags, b) primitive tags embedded in constructed tags defining the format 

 (see [TAG_E2_FORMAT_B](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e2-format-b), [TAG_E3_FORMAT_N](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md#define-tag-e3-format-n), ...). Restriction: Tag length must not exceed 4 bytes 

 Link to struct: [EMV_CTLS_DATA_STRUCT](struct_e_m_v___c_t_l_s___d_a_t_a___s_t_r_u_c_t.md). 

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB20_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab20-1)

 TLV tag [TAG_DFAB20_ADD_TAGS_TRM](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab20-add-tags-trm), 

 XML Tag: [XML_TAG_AD_DFAB20_ADD_TAGS_TRM](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab20-add-tags-trm)


### variable AdditionalTagsCRD_DFAB21

```cpp
EMV_CTLS_DATA_TYPE AdditionalTagsCRD_DFAB21;
```


TempUpdate allowed: NO 

 Description: 

 Vertex: Additional ICC tags for special applications. e.g. domestic cards with additional tags in ReadRecords, fleetcards with additional customer specific tags and others. 

 VFI Reader: Additional tags to be delivered by the VFI Reader in the response ( VFI Reader ATOL) 

 Format: DOL (Tag + maximum Length) 

 restriction: only 1- and 2-byte-tags are supported, no support for 3-byte-tags 

 Link to struct: [EMV_CTLS_DATA_STRUCT](struct_e_m_v___c_t_l_s___d_a_t_a___s_t_r_u_c_t.md)

 For Vertex, length is to be coded in one byte (length value between 1 and 0xF7). 

 For VFI Reader, length is to be coded in BER-TLV length format and can be up to 4 bytes long. 

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB21_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab21-1)

 TLV tag [TAG_DFAB21_ADD_TAGS_CRD](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab21-add-tags-crd), 

 XML Tag: [XML_TAG_AD_DFAB21_ADD_TAGS_CRD](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab21-add-tags-crd)


### variable DefaultApplicationName_DFAB22

```cpp
char[16+1] DefaultApplicationName_DFAB22;
```


TempUpdate allowed: NO 

 Description: Default application name to be used in case application label (tag 50) and application preferred name (tag 9F12) are not read from chip 

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB22_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab22-1)

 TLV tag [TAG_DFAB22_DEF_APP_NAME](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab22-def-app-name), 

 XML Tag: [XML_TAG_AD_DFAB22_DEFAULT_APP_NAME](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab22-default-app-name)


### variable InternalKernelId_DFAB23

```cpp
unsigned InternalKernelId_DFAB23;
```


TempUpdate allowed: NO 

 Description: Kernel to use as given by [Contactless Kernel Ids](group___d_e_f___k_e_r_n_e_l___i_d.md), required if the kernel ID given by [EMV_CTLS_APPLI_KERNEL_STRUCT::KernelID](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md#variable-kernelid) for match by Entry Point with a card's kernel identifier ('9F2A') is not a well-known or Verifone's internal kernel Id. Example: Cards with kernel identifier '9F2A' = '3F' shall be processed with the regional RuPay kernel: Configure with [EMV_CTLS_APPLI_KERNEL_STRUCT::KernelID](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md#variable-kernelid) '3F 00 00' as value given to the Entry Point and set [InternalKernelId_DFAB23](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-internalkernelid-dfab23) to [EMV_CTLS_KERN_RK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-rk). 

 Availability bit: [INPUT_CTLS_APL_GLOB_DFAB23_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___g_l_o_b_a_l.md#define-input-ctls-apl-glob-dfab23-1)

 TLV tag [TAG_DFAB23_INTERNAL_KERNEL_ID](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab23-internal-kernel-id)

 XML Tag: [XML_TAG_AD_DFAB23_INTERNAL_KERNEL_ID](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-dfab23-internal-kernel-id)


### variable Scheme

```cpp
union EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::@0 Scheme;
```


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
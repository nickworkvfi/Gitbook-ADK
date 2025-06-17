---
title: Application data: Which data is included
summary: Contents of EMV_CT_APPLIDATA_STRUCT::Info_Included_Data. 

---

# Application data: Which data is included

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CT_APPLIDATA_STRUCT::Info_Included_Data](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-info-included-data). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CT_INPUT_APL_VERSION](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-version)** <br>B1b1: [EMV_CT_APPLIDATA_STRUCT::VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum), application version number.  |
|  | **[EMV_CT_INPUT_APL_NAME](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-name)** <br>B1b2: [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname), application name.  |
|  | **[EMV_CT_INPUT_APL_ASI](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-asi)** <br>B1b3: [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi), ASI.  |
|  | **[EMV_CT_INPUT_APL_MERCHANT_CATCODE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-merchant-catcode)** <br>B1b4: [EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey), merchant category code.  |
|  | **[EMV_CT_INPUT_APL_TID](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tid)** <br>B1b5: [EMV_CT_APPLIDATA_STRUCT::TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident), terminal ID.  |
|  | **[EMV_CT_INPUT_APL_FLOOR_LIMIT](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-floor-limit)** <br>B1b6: [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit), floor limt.  |
|  | **[EMV_CT_INPUT_APL_THRESH](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-thresh)** <br>B1b7: [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold), threshhold value.  |
|  | **[EMV_CT_INPUT_APL_TARGET](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-target)** <br>B1b8: [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage), target percentage.  |
|  | **[EMV_CT_INPUT_APL_MAXTARGET](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-maxtarget)** <br>B2b1: [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage), maximum target percentage.  |
|  | **[EMV_CT_INPUT_APL_TAC_DENIAL](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tac-denial)** <br>B2b2: [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial), TAC Denial.  |
|  | **[EMV_CT_INPUT_APL_TAC_ONLINE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tac-online)** <br>B2b3: [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline), TAC Online.  |
|  | **[EMV_CT_INPUT_APL_TAC_DEFAULT](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tac-default)** <br>B2b4: [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault), TAC Default.  |
|  | **[EMV_CT_INPUT_APL_TDOL](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-tdol)** <br>B2b5: [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol), Default TDOL.  |
|  | **[EMV_CT_INPUT_APL_DDOL](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-ddol)** <br>B2b6: [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol), Default DDOL.  |
|  | **[EMV_CT_INPUT_APL_MERCHANT_IDENT](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-merchant-ident)** <br>B2b7: [EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident), merchant identification.  |
|  | **[EMV_CT_INPUT_APL_ADD_TAGS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-tags)** <br>B2b8: [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm), additional terminal tags.  |
|  | **[EMV_CT_INPUT_APL_MAND_TAGS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-mand-tags)** <br>B3b1: [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd), mandatory tags.  |
|  | **[EMV_CT_INPUT_APL_TERM_CAPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-term-caps)** <br>B3b2: [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap), terminal capabilities for app.  |
|  | **[EMV_CT_INPUT_APL_FLOW_CAPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-flow-caps)** <br>B3b3: [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap), flow capabilities.  |
|  | **[EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-aip-cvm-notsupp)** <br>B3b4: [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported), CVM in AIP disabled.  |
|  | **[EMV_CT_INPUT_APL_COUNTRY_CODE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-country-code)** <br>B3b5: [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm), country code.  |
|  | **[EMV_CT_INPUT_APL_ADD_TERM_CAPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-term-caps)** <br>B3b6: [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap), addtional terminal capabilties for tapp.  |
|  | **[EMV_CT_INPUT_APL_PRIO_APPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-prio-apps)** <br>B3b7: [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio), priority application.  |
|  | **[EMV_CT_INPUT_APL_MID](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-mid)** <br>B3b8: [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids), MID relation.  |
|  | **[EMV_CT_INPUT_APL_EMV_APPKIND](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-emv-appkind)** <br>B4b1: [EMV_CT_APPLIDATA_STRUCT::EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application), EMV Application Type.  |
|  | **[EMV_CT_INPUT_APL_SPECIAL_TXN](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-special-txn)** <br>B4b2: [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx), configuration of special transactions.  |
|  | **[EMV_CT_INPUT_APL_FALLBACK](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-fallback)** <br>B4b3: [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling), fallback handling for this app.  |
|  | **[EMV_CT_INPUT_APL_CDA](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-cda)** <br>B4b4: [EMV_CT_APPLIDATA_STRUCT::CDAProcessing](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-cdaprocessing), CDA mode.  |
|  | **[EMV_CT_INPUT_APL_AC_BEFOREAFTER](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-ac-beforeafter)** <br>B4b5: [EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-acbeforeafter), TAC processing for offline only.  |
|  | **[EMV_CT_INPUT_APL_POS_ENTRY](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-pos-entry)** <br>B4b6: [EMV_CT_APPLIDATA_STRUCT::POS_EntryMode](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-pos-entrymode), POS entry mode.  |
|  | **[EMV_CT_INPUT_APL_TRM_TYPE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-trm-type)** <br>B4b7: [EMV_CT_APPLIDATA_STRUCT::App_TermTyp](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termtyp), terminal type.  |
|  | **[EMV_CT_INPUT_APL_CUSTOMER_CVM](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-customer-cvm)** <br>B4b8: [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm), customer CVM.  |
|  | **[EMV_CT_INPUT_APL_CHECKSUM_PARAMS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-checksum-params)** <br>B5b1: [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params), checksum parmeters.  |
|  | **[EMV_CT_INPUT_APL_CHECKSUM](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-checksum)** <br>B5b2: [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco), EMVCo checksum for this app.  |
|  | **[EMV_CT_INPUT_APL_MASTER_AID](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-master-aid)** <br>B5b3: [EMV_CT_APPLIDATA_STRUCT::MasterAID](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-masteraid), Master AID for groups.  |
|  | **[EMV_CT_INPUT_APL_ADD_CRD_TAGS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-crd-tags)** <br>B5b4: [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd), additional tags available on the ICC.  |
|  | **[EMV_CT_INPUT_APL_ADD_VERSIONS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-add-versions)** <br>B5b5: [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no), additional version number of AID (optional)  |
|  | **[EMV_CT_INPUT_APL_SEC_LIMIT](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-sec-limit)** <br>B5b6: [EMV_CT_APPLIDATA_STRUCT::Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit), limit below which other terminal capabilties apply (optional)  |
|  | **[EMV_CT_INPUT_APL_SEC_CAPS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-sec-caps)** <br>B5b7: [EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit), terminal capabilties below the security limit (optional)  |
|  | **[EMV_CT_INPUT_APL_TXN_TYPES_SALE](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-sale)** <br>B6b1: [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale) additional transaction types handled as sale (optional)  |
|  | **[EMV_CT_INPUT_APL_TXN_TYPES_CASH](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-cash)** <br>B6b2: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash) additional transaction types handled as cash (optional)  |
|  | **[EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-cashback)** <br>B6b3: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback) additional transaction types handled as cashack (optional)  |
|  | **[EMV_CT_INPUT_APL_TXN_TYPES_REFUND](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-txn-types-refund)** <br>B6b4: [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund) additional transaction types handled as refund (optional)  |
|  | **[EMV_CT_INPUT_APL_DCR_LIST_IDS](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-dcr-list-ids)** <br>B6b5: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids) Data Container Read List for DPAS-2 Data Storage: list of container IDs.  |
|  | **[EMV_CT_INPUT_APL_DCR_LIST_RANGES](group___d_e_f___i_n_p_u_t___a_p_p_l_i.md#define-emv-ct-input-apl-dcr-list-ranges)** <br>B6b6: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges) Data Container Read List for DPAS-2 Data Storage: list of container ID ranges.  |




## Macros Documentation

### define EMV_CT_INPUT_APL_VERSION

```
#define EMV_CT_INPUT_APL_VERSION 0x01
```

B1b1: [EMV_CT_APPLIDATA_STRUCT::VerNum](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-vernum), application version number. 

### define EMV_CT_INPUT_APL_NAME

```
#define EMV_CT_INPUT_APL_NAME 0x02
```

B1b2: [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname), application name. 

### define EMV_CT_INPUT_APL_ASI

```
#define EMV_CT_INPUT_APL_ASI 0x04
```

B1b3: [EMV_CT_APPLIDATA_STRUCT::ASI](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-asi), ASI. 

### define EMV_CT_INPUT_APL_MERCHANT_CATCODE

```
#define EMV_CT_INPUT_APL_MERCHANT_CATCODE 0x08
```

B1b4: [EMV_CT_APPLIDATA_STRUCT::BrKey](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-brkey), merchant category code. 

### define EMV_CT_INPUT_APL_TID

```
#define EMV_CT_INPUT_APL_TID 0x10
```

B1b5: [EMV_CT_APPLIDATA_STRUCT::TermIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-termident), terminal ID. 

### define EMV_CT_INPUT_APL_FLOOR_LIMIT

```
#define EMV_CT_INPUT_APL_FLOOR_LIMIT 0x20
```

B1b6: [EMV_CT_APPLIDATA_STRUCT::FloorLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-floorlimit), floor limt. 

### define EMV_CT_INPUT_APL_THRESH

```
#define EMV_CT_INPUT_APL_THRESH 0x40
```

B1b7: [EMV_CT_APPLIDATA_STRUCT::Threshhold](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-threshhold), threshhold value. 

### define EMV_CT_INPUT_APL_TARGET

```
#define EMV_CT_INPUT_APL_TARGET 0x80
```

B1b8: [EMV_CT_APPLIDATA_STRUCT::TargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-targetpercentage), target percentage. 

### define EMV_CT_INPUT_APL_MAXTARGET

```
#define EMV_CT_INPUT_APL_MAXTARGET 0x01
```

B2b1: [EMV_CT_APPLIDATA_STRUCT::MaxTargetPercentage](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-maxtargetpercentage), maximum target percentage. 

### define EMV_CT_INPUT_APL_TAC_DENIAL

```
#define EMV_CT_INPUT_APL_TAC_DENIAL 0x02
```

B2b2: [EMV_CT_APPLIDATA_STRUCT::TACDenial](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdenial), TAC Denial. 

### define EMV_CT_INPUT_APL_TAC_ONLINE

```
#define EMV_CT_INPUT_APL_TAC_ONLINE 0x04
```

B2b3: [EMV_CT_APPLIDATA_STRUCT::TACOnline](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-taconline), TAC Online. 

### define EMV_CT_INPUT_APL_TAC_DEFAULT

```
#define EMV_CT_INPUT_APL_TAC_DEFAULT 0x08
```

B2b4: [EMV_CT_APPLIDATA_STRUCT::TACDefault](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tacdefault), TAC Default. 

### define EMV_CT_INPUT_APL_TDOL

```
#define EMV_CT_INPUT_APL_TDOL 0x10
```

B2b5: [EMV_CT_APPLIDATA_STRUCT::Default_TDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-tdol), Default TDOL. 

### define EMV_CT_INPUT_APL_DDOL

```
#define EMV_CT_INPUT_APL_DDOL 0x20
```

B2b6: [EMV_CT_APPLIDATA_STRUCT::Default_DDOL](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-default-ddol), Default DDOL. 

### define EMV_CT_INPUT_APL_MERCHANT_IDENT

```
#define EMV_CT_INPUT_APL_MERCHANT_IDENT 0x40
```

B2b7: [EMV_CT_APPLIDATA_STRUCT::MerchIdent](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-merchident), merchant identification. 

### define EMV_CT_INPUT_APL_ADD_TAGS

```
#define EMV_CT_INPUT_APL_ADD_TAGS 0x80
```

B2b8: [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm), additional terminal tags. 

### define EMV_CT_INPUT_APL_MAND_TAGS

```
#define EMV_CT_INPUT_APL_MAND_TAGS 0x01
```

B3b1: [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd), mandatory tags. 

### define EMV_CT_INPUT_APL_TERM_CAPS

```
#define EMV_CT_INPUT_APL_TERM_CAPS 0x02
```

B3b2: [EMV_CT_APPLIDATA_STRUCT::App_TermCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termcap), terminal capabilities for app. 

### define EMV_CT_INPUT_APL_FLOW_CAPS

```
#define EMV_CT_INPUT_APL_FLOW_CAPS 0x04
```

B3b3: [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap), flow capabilities. 

### define EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP

```
#define EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP 0x08
```

B3b4: [EMV_CT_APPLIDATA_STRUCT::AIP_CVM_not_supported](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-aip-cvm-not-supported), CVM in AIP disabled. 

### define EMV_CT_INPUT_APL_COUNTRY_CODE

```
#define EMV_CT_INPUT_APL_COUNTRY_CODE 0x10
```

B3b5: [EMV_CT_APPLIDATA_STRUCT::App_CountryCodeTerm](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-countrycodeterm), country code. 

### define EMV_CT_INPUT_APL_ADD_TERM_CAPS

```
#define EMV_CT_INPUT_APL_ADD_TERM_CAPS 0x20
```

B3b6: [EMV_CT_APPLIDATA_STRUCT::App_TermAddCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termaddcap), addtional terminal capabilties for tapp. 

### define EMV_CT_INPUT_APL_PRIO_APPS

```
#define EMV_CT_INPUT_APL_PRIO_APPS 0x40
```

B3b7: [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio), priority application. 

### define EMV_CT_INPUT_APL_MID

```
#define EMV_CT_INPUT_APL_MID 0x80
```

B3b8: [EMV_CT_APPLIDATA_STRUCT::tucFallbackMIDs](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-tucfallbackmids), MID relation. 

### define EMV_CT_INPUT_APL_EMV_APPKIND

```
#define EMV_CT_INPUT_APL_EMV_APPKIND 0x01
```

B4b1: [EMV_CT_APPLIDATA_STRUCT::EMV_Application](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-emv-application), EMV Application Type. 

### define EMV_CT_INPUT_APL_SPECIAL_TXN

```
#define EMV_CT_INPUT_APL_SPECIAL_TXN 0x02
```

B4b2: [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx), configuration of special transactions. 

### define EMV_CT_INPUT_APL_FALLBACK

```
#define EMV_CT_INPUT_APL_FALLBACK 0x04
```

B4b3: [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling), fallback handling for this app. 

### define EMV_CT_INPUT_APL_CDA

```
#define EMV_CT_INPUT_APL_CDA 0x08
```

B4b4: [EMV_CT_APPLIDATA_STRUCT::CDAProcessing](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-cdaprocessing), CDA mode. 

### define EMV_CT_INPUT_APL_AC_BEFOREAFTER

```
#define EMV_CT_INPUT_APL_AC_BEFOREAFTER 0x10
```

B4b5: [EMV_CT_APPLIDATA_STRUCT::ACBeforeAfter](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-acbeforeafter), TAC processing for offline only. 

### define EMV_CT_INPUT_APL_POS_ENTRY

```
#define EMV_CT_INPUT_APL_POS_ENTRY 0x20
```

B4b6: [EMV_CT_APPLIDATA_STRUCT::POS_EntryMode](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-pos-entrymode), POS entry mode. 

### define EMV_CT_INPUT_APL_TRM_TYPE

```
#define EMV_CT_INPUT_APL_TRM_TYPE 0x40
```

B4b7: [EMV_CT_APPLIDATA_STRUCT::App_TermTyp](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-termtyp), terminal type. 

### define EMV_CT_INPUT_APL_CUSTOMER_CVM

```
#define EMV_CT_INPUT_APL_CUSTOMER_CVM 0x80
```

B4b8: [EMV_CT_APPLIDATA_STRUCT::Customer_CVM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-customer-cvm), customer CVM. 

### define EMV_CT_INPUT_APL_CHECKSUM_PARAMS

```
#define EMV_CT_INPUT_APL_CHECKSUM_PARAMS 0x01
```

B5b1: [EMV_CT_APPLIDATA_STRUCT::Chksum_Params](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksum-params), checksum parmeters. 

### define EMV_CT_INPUT_APL_CHECKSUM

```
#define EMV_CT_INPUT_APL_CHECKSUM 0x02
```

B5b2: [EMV_CT_APPLIDATA_STRUCT::ChksumASCIIEMVCO](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-chksumasciiemvco), EMVCo checksum for this app. 

### define EMV_CT_INPUT_APL_MASTER_AID

```
#define EMV_CT_INPUT_APL_MASTER_AID 0x04
```

B5b3: [EMV_CT_APPLIDATA_STRUCT::MasterAID](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-masteraid), Master AID for groups. 

### define EMV_CT_INPUT_APL_ADD_CRD_TAGS

```
#define EMV_CT_INPUT_APL_ADD_CRD_TAGS 0x08
```

B5b4: [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd), additional tags available on the ICC. 

### define EMV_CT_INPUT_APL_ADD_VERSIONS

```
#define EMV_CT_INPUT_APL_ADD_VERSIONS 0x10
```

B5b5: [EMV_CT_APPLIDATA_STRUCT::Additional_Versions_No](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-versions-no), additional version number of AID (optional) 

### define EMV_CT_INPUT_APL_SEC_LIMIT

```
#define EMV_CT_INPUT_APL_SEC_LIMIT 0x20
```

B5b6: [EMV_CT_APPLIDATA_STRUCT::Security_Limit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-security-limit), limit below which other terminal capabilties apply (optional) 

### define EMV_CT_INPUT_APL_SEC_CAPS

```
#define EMV_CT_INPUT_APL_SEC_CAPS 0x40
```

B5b7: [EMV_CT_APPLIDATA_STRUCT::Capabilities_belowLimit](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-capabilities-belowlimit), terminal capabilties below the security limit (optional) 

### define EMV_CT_INPUT_APL_TXN_TYPES_SALE

```
#define EMV_CT_INPUT_APL_TXN_TYPES_SALE 0x01
```

B6b1: [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale) additional transaction types handled as sale (optional) 

### define EMV_CT_INPUT_APL_TXN_TYPES_CASH

```
#define EMV_CT_INPUT_APL_TXN_TYPES_CASH 0x02
```

B6b2: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash) additional transaction types handled as cash (optional) 

### define EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK

```
#define EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK 0x04
```

B6b3: [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback) additional transaction types handled as cashack (optional) 

### define EMV_CT_INPUT_APL_TXN_TYPES_REFUND

```
#define EMV_CT_INPUT_APL_TXN_TYPES_REFUND 0x08
```

B6b4: [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund) additional transaction types handled as refund (optional) 

### define EMV_CT_INPUT_APL_DCR_LIST_IDS

```
#define EMV_CT_INPUT_APL_DCR_LIST_IDS 0x10
```

B6b5: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids) Data Container Read List for DPAS-2 Data Storage: list of container IDs. 

### define EMV_CT_INPUT_APL_DCR_LIST_RANGES

```
#define EMV_CT_INPUT_APL_DCR_LIST_RANGES 0x20
```

B6b6: [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges) Data Container Read List for DPAS-2 Data Storage: list of container ID ranges. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
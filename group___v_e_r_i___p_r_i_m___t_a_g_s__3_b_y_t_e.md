---
title: 3-byte primitive tags
summary: For all unsigned long variables in functional interface, please use 4 byte in the serialization. 

---

# 3-byte primitive tags

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** **/** **[Verifone internal tags](group___v_e_r_i___t_a_g_s.md)** **/** **[Primitive tags](group___v_e_r_i___p_r_i_m___t_a_g_s.md)**

For all unsigned long variables in functional interface, please use 4 byte in the serialization. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_DFD004_TXN_TYPES_SALE](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd004-txn-types-sale)** <br>Additional Transaction Types for sale (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale).  |
|  | **[TAG_DFD005_TXN_TYPES_CASH](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd005-txn-types-cash)** <br>Additional Transaction Types for cash (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash).  |
|  | **[TAG_DFD006_TXN_TYPES_CASHBACK](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd006-txn-types-cashback)** <br>Additional Transaction Types for cashback (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback).  |
|  | **[TAG_DFD007_TXN_TYPES_REFUND](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfd007-txn-types-refund)** <br>Additional Transaction Types for refund (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund).  |
|  | **[TAG_DFAB58_DCR_LIST_IDS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfab58-dcr-list-ids)** <br>Data Container Read List for DPAS-2 Data Storage: list of container IDs. See description of [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids).  |
|  | **[TAG_DFAB59_DCR_LIST_RANGES](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-dfab59-dcr-list-ranges)** <br>Data Container Read List for DPAS-2 Data Storage: list of container ID ranges. See description of [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges).  |
|  | **[TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options)** <br>Options send with Exit_Framework, see [Options for Exit Framework]().  |
|  | **[TAG_DF8F0F_APPLYCONFIG_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0f-applyconfig-options)** <br>Options send with [EMV_CT_ApplyConfiguration()](), unsigned long in functional interface, please use 4 byte in the serialization.  |
|  | **[TAG_DF8F30_REQUESTED_TAGS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f30-requested-tags)** <br>for requestedTags parameter in [EMV_CTLS_fetchTxnTags()]() |




## Macros Documentation

### define TAG_DFD004_TXN_TYPES_SALE

```
#define TAG_DFD004_TXN_TYPES_SALE 0xDFD004
```

Additional Transaction Types for sale (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesSale](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypessale). 

### define TAG_DFD005_TXN_TYPES_CASH

```
#define TAG_DFD005_TXN_TYPES_CASH 0xDFD005
```

Additional Transaction Types for cash (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash). 

### define TAG_DFD006_TXN_TYPES_CASHBACK

```
#define TAG_DFD006_TXN_TYPES_CASHBACK 0xDFD006
```

Additional Transaction Types for cashback (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback). 

### define TAG_DFD007_TXN_TYPES_REFUND

```
#define TAG_DFD007_TXN_TYPES_REFUND 0xDFD007
```

Additional Transaction Types for refund (length 1..3). See description of [EMV_CT_APPLIDATA_STRUCT::TxnTypesRefund](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypesrefund). 

### define TAG_DFAB58_DCR_LIST_IDS

```
#define TAG_DFAB58_DCR_LIST_IDS 0xDFAB58
```

Data Container Read List for DPAS-2 Data Storage: list of container IDs. See description of [EMV_CT_APPLIDATA_STRUCT::DataContainerReadIds](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadids). 

### define TAG_DFAB59_DCR_LIST_RANGES

```
#define TAG_DFAB59_DCR_LIST_RANGES 0xDFAB59
```

Data Container Read List for DPAS-2 Data Storage: list of container ID ranges. See description of [EMV_CT_APPLIDATA_STRUCT::DataContainerReadRanges](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-datacontainerreadranges). 

### define TAG_DF8F0A_EXIT_OPTIONS

```
#define TAG_DF8F0A_EXIT_OPTIONS 0xDF8F0A
```

Options send with Exit_Framework, see [Options for Exit Framework](). 

### define TAG_DF8F0F_APPLYCONFIG_OPTIONS

```
#define TAG_DF8F0F_APPLYCONFIG_OPTIONS 0xDF8F0F
```

Options send with [EMV_CT_ApplyConfiguration()](), unsigned long in functional interface, please use 4 byte in the serialization. 

### define TAG_DF8F30_REQUESTED_TAGS

```
#define TAG_DF8F30_REQUESTED_TAGS 0xDF8F30
```

for requestedTags parameter in [EMV_CTLS_fetchTxnTags()]()



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
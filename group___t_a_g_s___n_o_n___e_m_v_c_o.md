---
title: Handling of tags not defined by EMVCo

---

# Handling of tags not defined by EMVCo

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Special tag handling](group___s_p_e_c_i_a_l___t_a_g___h_a_n_d_l_i_n_g.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS](group___t_a_g_s___n_o_n___e_m_v_c_o.md#define-emv-ctls-max-no-of-non-emvco-tags)** <br>Max. number of non-EMVCo-tags included in additional tags ([EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagstrm-dfab20) and [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagscrd-dfab21))  |
|  | **[EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS](group___t_a_g_s___n_o_n___e_m_v_c_o.md#define-emv-ctls-buffer-for-non-emvco-tags)** <br>Calculation rule: max. tag value size + 10 bytes/tag.  |
|  | **[EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS](group___t_a_g_s___n_o_n___e_m_v_c_o.md#define-emv-ct-max-no-of-non-emvco-tags)** <br>Max. number of non-EMVCo-tags included in additional tags ([EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm) and [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd))  |




## Macros Documentation

### define EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS

```
#define EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS 25
```

Max. number of non-EMVCo-tags included in additional tags ([EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagstrm-dfab20) and [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsCRD_DFAB21](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagscrd-dfab21)) 

### define EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS

```
#define EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS 1230
```

Calculation rule: max. tag value size + 10 bytes/tag. 

### define EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS

```
#define EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS 20
```

Max. number of non-EMVCo-tags included in additional tags ([EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm) and [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd)) 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
---
title: StartTransaction: Which data was received from the chip
summary: "Contents of EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data."

---

# StartTransaction: Which data was received from the chip

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)**

Contents of [EMV_CT_SELECTRES_STRUCT::T_DF61_Info_Received_Data](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DF61_SEL_DF62_ERRORDATA](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-df62-errordata)** <br>B1b1: [EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata).  |
|  | **[DF61_SEL_AGREED_APPNAME](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-agreed-appname)** <br>B1b2: [EMV_CT_SELECTRES_STRUCT::AppName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-appname).  |
|  | **[DF61_SEL_50_APPLICATION_NAME](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-50-application-name)** <br>B1b3: [EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-50-applicationname).  |
|  | **[DF61_SEL_9F11_CODE_TABLE](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-9f11-code-table)** <br>B1b4: [EMV_CT_SELECTRES_STRUCT::T_9F11_CodeTable](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f11-codetable).  |
|  | **[DF61_SEL_5F2D_LANG_PREF](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-5f2d-lang-pref)** <br>B1b5: [EMV_CT_SELECTRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref).  |
|  | **[DF61_SEL_84_DF_NAME](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-84-df-name)** <br>B1b6: [EMV_CT_SELECTRES_STRUCT::T_84_DFName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname).  |
|  | **[DF61_SEL_9F12_PREF_NAME](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-9f12-pref-name)** <br>B1b7: [EMV_CT_SELECTRES_STRUCT::T_9F12_PreferredName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f12-preferredname).  |
|  | **[DF61_SEL_9F63_DISPTXT](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-9f63-disptxt)** <br>B1b8: [EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext).  |
|  | **[DF61_SEL_MID_DATA](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-mid-data)** <br>B2b1: MID data, [EMV_CT_SELECTRES_STRUCT::countFallbackMS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-countfallbackms), [EMV_CT_SELECTRES_STRUCT::xFallback_MS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-xfallback-ms).  |
|  | **[DF61_SEL_PDOL](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-pdol)** <br>B2b2: PDOL info, [EMV_CT_SELECTRES_STRUCT::PDOL_tags](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-pdol-tags).  |
|  | **[DF61_SEL_AID](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-aid)** <br>B2b3: selected AID, [EMV_CT_SELECTRES_STRUCT::T_DF04_Aidselected](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df04-aidselected).  |
|  | **[DF61_SEL_CANDIDATES](group___d_e_f___d_f61___s_e_l_e_c_t.md#define-df61-sel-candidates)** <br>B2b4: candidate list, [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates).  |




## Macros Documentation

### define DF61_SEL_DF62_ERRORDATA

```
#define DF61_SEL_DF62_ERRORDATA 0x01
```

B1b1: [EMV_CT_SELECTRES_STRUCT::T_DF62_ErrorData](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata). 

### define DF61_SEL_AGREED_APPNAME

```
#define DF61_SEL_AGREED_APPNAME 0x02
```

B1b2: [EMV_CT_SELECTRES_STRUCT::AppName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-appname). 

### define DF61_SEL_50_APPLICATION_NAME

```
#define DF61_SEL_50_APPLICATION_NAME 0x04
```

B1b3: [EMV_CT_SELECTRES_STRUCT::T_50_ApplicationName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-50-applicationname). 

### define DF61_SEL_9F11_CODE_TABLE

```
#define DF61_SEL_9F11_CODE_TABLE 0x08
```

B1b4: [EMV_CT_SELECTRES_STRUCT::T_9F11_CodeTable](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f11-codetable). 

### define DF61_SEL_5F2D_LANG_PREF

```
#define DF61_SEL_5F2D_LANG_PREF 0x10
```

B1b5: [EMV_CT_SELECTRES_STRUCT::T_5F2D_Lang_Pref](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref). 

### define DF61_SEL_84_DF_NAME

```
#define DF61_SEL_84_DF_NAME 0x20
```

B1b6: [EMV_CT_SELECTRES_STRUCT::T_84_DFName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname). 

### define DF61_SEL_9F12_PREF_NAME

```
#define DF61_SEL_9F12_PREF_NAME 0x40
```

B1b7: [EMV_CT_SELECTRES_STRUCT::T_9F12_PreferredName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f12-preferredname). 

### define DF61_SEL_9F63_DISPTXT

```
#define DF61_SEL_9F63_DISPTXT 0x80
```

B1b8: [EMV_CT_SELECTRES_STRUCT::T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext). 

### define DF61_SEL_MID_DATA

```
#define DF61_SEL_MID_DATA 0x01
```

B2b1: MID data, [EMV_CT_SELECTRES_STRUCT::countFallbackMS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-countfallbackms), [EMV_CT_SELECTRES_STRUCT::xFallback_MS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-xfallback-ms). 

### define DF61_SEL_PDOL

```
#define DF61_SEL_PDOL 0x02
```

B2b2: PDOL info, [EMV_CT_SELECTRES_STRUCT::PDOL_tags](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-pdol-tags). 

### define DF61_SEL_AID

```
#define DF61_SEL_AID 0x04
```

B2b3: selected AID, [EMV_CT_SELECTRES_STRUCT::T_DF04_Aidselected](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df04-aidselected). 

### define DF61_SEL_CANDIDATES

```
#define DF61_SEL_CANDIDATES 0x08
```

B2b4: candidate list, [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates). 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
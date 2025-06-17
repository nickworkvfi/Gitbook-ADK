---
title: EMV_CT_FALLBCK_MSR_STRUCT
summary: list of MID applications supported by terminal 
 DF4C, see xFallback_MS in EMV_CT_SELECT_STRUCT and EMV_CT_SELECTRES_STRUCT

---

# EMV_CT_FALLBCK_MSR_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



list of MID applications supported by terminal    DF4C, see `xFallback_MS` in [EMV_CT_SELECT_STRUCT]() and [EMV_CT_SELECTRES_STRUCT]()


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[xMID](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md#variable-xmid)** <br>MID of domestic MSR application (index managed by calling application)    TLV tag [TAG_DF17_FALLBACK_MIDS]().  |
| unsigned char[8] | **[xuc_Special_TRX](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md#variable-xuc-special-trx)** <br>List of special allowed transactions (manual reversal, refund, reservation, tip, Referral)    see [Defines for special transaction configuration]()   will be checked against `TransType` of [EMV_CT_SELECT_TYPE]()   TLV tag [TAG_DF1C_SPECIAL_TRX]().  |
| unsigned char | **[ucFallback](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md#variable-ucfallback)** <br>Conditions under which a fallback to this MSR application is allowed    see [Fallback options for magstripe applications]()   TLV tag [TAG_DF18_FALLABCK]().  |
| unsigned char | **[ucOptions](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md#variable-ucoptions)** <br>Further conditions for fallback decision, not contained in DC POS configuration tag DF18    TLV tag [TAG_DF3A_FB_MSR_OPTIONS]().  |

## Public Attributes Documentation

### variable xMID

```cpp
unsigned char xMID;
```

MID of domestic MSR application (index managed by calling application)    TLV tag [TAG_DF17_FALLBACK_MIDS](). 

### variable xuc_Special_TRX

```cpp
unsigned char[8] xuc_Special_TRX;
```

List of special allowed transactions (manual reversal, refund, reservation, tip, Referral)    see [Defines for special transaction configuration]()   will be checked against `TransType` of [EMV_CT_SELECT_TYPE]()   TLV tag [TAG_DF1C_SPECIAL_TRX](). 

### variable ucFallback

```cpp
unsigned char ucFallback;
```

Conditions under which a fallback to this MSR application is allowed    see [Fallback options for magstripe applications]()   TLV tag [TAG_DF18_FALLABCK](). 

### variable ucOptions

```cpp
unsigned char ucOptions;
```

Further conditions for fallback decision, not contained in DC POS configuration tag DF18    TLV tag [TAG_DF3A_FB_MSR_OPTIONS](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
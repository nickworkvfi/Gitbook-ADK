---
title: EMV_CT_DOM_CHIP_STRUCT
summary: Domestic non-EMV chip applications supporting AID selection 
 see EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip
 TLV tag TAG_EMV_CONFORM. 

---

# EMV_CT_DOM_CHIP_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Domestic non-EMV chip applications supporting AID selection    see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)   TLV tag [TAG_EMV_CONFORM](). 


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) | **[xAIDChip](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-xaidchip)** <br>AID of domestic application ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    TLV tag [TAG_DF04_AID]().  |
| unsigned char[16+1] | **[ucAppName](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucappname)** <br>Application label    TLV tag [TAG_50_APP_LABEL]().  |
| unsigned char | **[ucASI](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-ucasi)** <br>Application selection indicator    Must the card's AID match the configured AID exactly?  `0` ... yes  `1` ... no    TLV tag [TAG_DF20_ASI]().  |
| unsigned char[8] | **[xuc_Special_TRX](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-xuc-special-trx)** <br>List of special allowed transactions (manual reversal, refund, reservation, tip, Referral)    see [Defines for special transaction configuration]()   will be checked against [EMV_CT_SELECT_STRUCT::TransType]()   TLV tag [TAG_DF1C_SPECIAL_TRX]().  |
| unsigned char | **[uc_EMVConformSelect](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md#variable-uc-emvconformselect)** <br>Selection procedure is EMV conform (0) or not (1)    In case of non EMV conformance selection process there is no select issued to the card but the application is added to the candidates list    TLV tag [TAG_EMV_CONFORM]().  |

## Public Attributes Documentation

### variable xAIDChip

```cpp
EMV_CT_APPLI_TYPE xAIDChip;
```

AID of domestic application ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    TLV tag [TAG_DF04_AID](). 

### variable ucAppName

```cpp
unsigned char[16+1] ucAppName;
```

Application label    TLV tag [TAG_50_APP_LABEL](). 

### variable ucASI

```cpp
unsigned char ucASI;
```

Application selection indicator    Must the card's AID match the configured AID exactly?  `0` ... yes  `1` ... no    TLV tag [TAG_DF20_ASI](). 

### variable xuc_Special_TRX

```cpp
unsigned char[8] xuc_Special_TRX;
```

List of special allowed transactions (manual reversal, refund, reservation, tip, Referral)    see [Defines for special transaction configuration]()   will be checked against [EMV_CT_SELECT_STRUCT::TransType]()   TLV tag [TAG_DF1C_SPECIAL_TRX](). 

### variable uc_EMVConformSelect

```cpp
unsigned char uc_EMVConformSelect;
```

Selection procedure is EMV conform (0) or not (1)    In case of non EMV conformance selection process there is no select issued to the card but the application is added to the candidates list    TLV tag [TAG_EMV_CONFORM](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
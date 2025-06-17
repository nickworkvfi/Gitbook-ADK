---
title: Defines for type of read application data mode

---

# Defines for type of read application data mode

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

 [More...](#detailed-description)

## Types

|                | Name           |
| -------------- | -------------- |
| typedef unsigned char | **[EMV_ADK_READAPPLI_TYPE](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#typedef-emv-adk-readappli-type)** <br>typedef for "read appli type" ([EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata))  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_READ_AID](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#define-emv-adk-read-aid)** <br>read data of a given AID. Remark: If the same AID is configured with multiple param sets (Velocity CTLS only, see [EMV_ADK_FORCE_NEW_PARAMSET]()) only the first AID is presented here. To read all of the AIDs in this case please use first, next mechanism.  |
|  | **[EMV_ADK_READ_FIRST](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#define-emv-adk-read-first)** <br>read first AID  |
|  | **[EMV_ADK_READ_NEXT](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#define-emv-adk-read-next)** <br>read next AID  |
|  | **[EMV_ADK_READ_MAX_APPLI](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#define-emv-adk-read-max-appli)** <br>future use  |

## Detailed Description


Used in [EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata)

## Types Documentation

### typedef EMV_ADK_READAPPLI_TYPE

```
typedef unsigned char EMV_ADK_READAPPLI_TYPE;
```

typedef for "read appli type" ([EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata)) 




## Macros Documentation

### define EMV_ADK_READ_AID

```
#define EMV_ADK_READ_AID 0
```

read data of a given AID. Remark: If the same AID is configured with multiple param sets (Velocity CTLS only, see [EMV_ADK_FORCE_NEW_PARAMSET]()) only the first AID is presented here. To read all of the AIDs in this case please use first, next mechanism. 

### define EMV_ADK_READ_FIRST

```
#define EMV_ADK_READ_FIRST 1
```

read first AID 

### define EMV_ADK_READ_NEXT

```
#define EMV_ADK_READ_NEXT 2
```

read next AID 

### define EMV_ADK_READ_MAX_APPLI

```
#define EMV_ADK_READ_MAX_APPLI 3
```

future use 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
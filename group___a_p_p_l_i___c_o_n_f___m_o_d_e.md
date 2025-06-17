---
title: Modes of application data and CAP key setting

---

# Modes of application data and CAP key setting

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



## Types

|                | Name           |
| -------------- | -------------- |
| typedef unsigned char | **[EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type)** <br>Type for handle application data setting (SetAppliData())  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_SET_ONE_RECORD](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-one-record)** <br>Set record for 1 AID, If the AID exists, the parameters included are updated, not included parameters will be untouched. If the AID does not exist, not included parameters will be set with ADK default values. It is highly recommended to configure all parameters on initial setup. Remark: If the AID is existing and the AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are updated --> if the AIDs need to be reconfigured independently it is necessary to delete this AID and confgure again from scratch, see [EMV_ADK_FORCE_NEW_PARAMSET]().  |
|  | **[EMV_ADK_SET_TWO_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-two-records)** <br>Set same record for 2 AIDS.  |
|  | **[EMV_ADK_SET_THREE_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-three-records)** <br>Set same record for 3 AIDs.  |
|  | **[EMV_ADK_SET_FOUR_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-four-records)** <br>Set same record for 4 AIDs.  |
|  | **[EMV_ADK_SET_FIVE_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-set-five-records)** <br>Set same record for 5 AIDs.  |
|  | **[EMV_ADK_CLEAR_ONE_RECORD](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-clear-one-record)** <br>Clear data of an AID record by AID. Remark: If the same AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are deleted --> one record in this respect means: one AID with its multiple parameters sets, see [EMV_ADK_FORCE_NEW_PARAMSET]().  |
|  | **[EMV_ADK_CLEAR_ALL_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-clear-all-records)** <br>Clear all data.  |
|  | **[EMV_ADK_FORCE_NEW_PARAMSET](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-force-new-paramset)** <br>This is for the CTLS EntryPoint --> Force a new parameterset for an existing AID but having different kernel ID. This is for Velocity CTLS only since the entry point architecture allows to have different kernels (and therefore parameter sets) used for the same AID. So each AID can be configured mutiple times.  |
|  | **[EMV_ADK_TEMP_UPDATE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-temp-update)**  |

## Types Documentation

### typedef EMV_ADK_HANDLE_RECORD_TYPE

```
typedef unsigned char EMV_ADK_HANDLE_RECORD_TYPE;
```

Type for handle application data setting (SetAppliData()) 




## Macros Documentation

### define EMV_ADK_SET_ONE_RECORD

```
#define EMV_ADK_SET_ONE_RECORD 1
```

Set record for 1 AID, If the AID exists, the parameters included are updated, not included parameters will be untouched. If the AID does not exist, not included parameters will be set with ADK default values. It is highly recommended to configure all parameters on initial setup. Remark: If the AID is existing and the AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are updated --> if the AIDs need to be reconfigured independently it is necessary to delete this AID and confgure again from scratch, see [EMV_ADK_FORCE_NEW_PARAMSET](). 

### define EMV_ADK_SET_TWO_RECORDS

```
#define EMV_ADK_SET_TWO_RECORDS 2
```

Set same record for 2 AIDS. 

### define EMV_ADK_SET_THREE_RECORDS

```
#define EMV_ADK_SET_THREE_RECORDS 3
```

Set same record for 3 AIDs. 

### define EMV_ADK_SET_FOUR_RECORDS

```
#define EMV_ADK_SET_FOUR_RECORDS 4
```

Set same record for 4 AIDs. 

### define EMV_ADK_SET_FIVE_RECORDS

```
#define EMV_ADK_SET_FIVE_RECORDS 5
```

Set same record for 5 AIDs. 

### define EMV_ADK_CLEAR_ONE_RECORD

```
#define EMV_ADK_CLEAR_ONE_RECORD 0x10
```

Clear data of an AID record by AID. Remark: If the same AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are deleted --> one record in this respect means: one AID with its multiple parameters sets, see [EMV_ADK_FORCE_NEW_PARAMSET](). 

### define EMV_ADK_CLEAR_ALL_RECORDS

```
#define EMV_ADK_CLEAR_ALL_RECORDS 0x20
```

Clear all data. 

### define EMV_ADK_FORCE_NEW_PARAMSET

```
#define EMV_ADK_FORCE_NEW_PARAMSET 0x30
```

This is for the CTLS EntryPoint --> Force a new parameterset for an existing AID but having different kernel ID. This is for Velocity CTLS only since the entry point architecture allows to have different kernels (and therefore parameter sets) used for the same AID. So each AID can be configured mutiple times. 

### define EMV_ADK_TEMP_UPDATE

```
#define EMV_ADK_TEMP_UPDATE 0xF0
```


Temporary dynamic update of AID data during a transaction 

 This can be used for updating data during a transaction, e.g. if the transaction is interrupted with the parameter `TxnSteps`. The stored config in the XML files will NOT be touched 

 After transaction initiation: It is activated when having finished the application selection == Final Select is done 

 Before the final select any temporary updated data will be overwritten with the permanent AID parameters, which are copied for the current transaction after Final Select was performed. 




-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
---
title: Buildlist options for EMV_CT_StartTransaction()
summary: see EMV_CT_SELECT_TYPE::InitTXN_Buildlist

---

# Buildlist options for EMV_CT_StartTransaction()

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

see [EMV_CT_SELECT_TYPE::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[REUSE_LIST_REMOVE_AID](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-list-remove-aid)** <br>Reuse the existing list and remove the used AID, e.g. after card answered with Status Word 6985 at GPO.  |
|  | **[BUILD_NEW](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-build-new)** <br>Build a new candidate list (needs to be set on start of transaction)  |
|  | **[REUSE_EXISTING_LIST_SEL_0](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-0)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 1 of the candidate list.  |
|  | **[REUSE_EXISTING_LIST_SEL_1](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-1)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 2 of the candidate list.  |
|  | **[REUSE_EXISTING_LIST_SEL_2](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-2)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 3 of the candidate list.  |
|  | **[REUSE_EXISTING_LIST_SEL_3](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-3)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 4 of the candidate list.  |
|  | **[REUSE_EXISTING_LIST_SEL_4](group___b_u_i_l_d___l_i_s_t___o_p_t_i_o_n_s.md#define-reuse-existing-list-sel-4)** <br>Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 5 of the candidate list.  |




## Macros Documentation

### define REUSE_LIST_REMOVE_AID

```
#define REUSE_LIST_REMOVE_AID 0x00
```

Reuse the existing list and remove the used AID, e.g. after card answered with Status Word 6985 at GPO. 

### define BUILD_NEW

```
#define BUILD_NEW 0x01
```

Build a new candidate list (needs to be set on start of transaction) 

### define REUSE_EXISTING_LIST_SEL_0

```
#define REUSE_EXISTING_LIST_SEL_0 0xF0
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 1 of the candidate list. 

### define REUSE_EXISTING_LIST_SEL_1

```
#define REUSE_EXISTING_LIST_SEL_1 0xF1
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 2 of the candidate list. 

### define REUSE_EXISTING_LIST_SEL_2

```
#define REUSE_EXISTING_LIST_SEL_2 0xF2
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 3 of the candidate list. 

### define REUSE_EXISTING_LIST_SEL_3

```
#define REUSE_EXISTING_LIST_SEL_3 0xF3
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 4 of the candidate list. 

### define REUSE_EXISTING_LIST_SEL_4

```
#define REUSE_EXISTING_LIST_SEL_4 0xF4
```

Reentrance mode, if EMV ADK returned EMV_ADK_APP_REQ_CANDIDATE: reuse the existing list do not remove anything and select candidate 5 of the candidate list. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
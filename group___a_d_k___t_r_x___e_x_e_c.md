---
title: Transaction execution
summary: Definitions used for functions EMV_CT_StartTransaction(), EMV_CT_ContinueOffline(), EMV_CT_ContinueOnline()

---

# Transaction execution

Definitions used for functions [EMV_CT_StartTransaction()](), [EMV_CT_ContinueOffline()](), [EMV_CT_ContinueOnline()]() [More...](#detailed-description)

## Modules

| Name           |
| -------------- |
| **[Functions for performing transactions](group___f_u_n_c___f_l_o_w.md)**  |
| **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)** <br>Callback function to be implemented in the same entity as EMV ADK.  |
| **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**  |
| **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CT_CANDIDATE_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md)** <br>Candidate list structure.  |
| struct | **[EMV_CT_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md)** <br>Candidate list additional data Output of [EMV_CT_GetCandidateData()]()   To be used in conjunction with [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates]().  |
| struct | **[EMV_CT_DOM_CHIP_STRUCT](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md)** <br>Domestic non-EMV chip applications supporting AID selection    see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)   TLV tag [TAG_EMV_CONFORM]().  |
| struct | **[EMV_CT_FALLBCK_MSR_STRUCT](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md)** <br>list of MID applications supported by terminal    DF4C, see `xFallback_MS` in [EMV_CT_SELECT_STRUCT]() and [EMV_CT_SELECTRES_STRUCT]() |
| struct | **[EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md)** <br>Transaction parameters of an EMV transaction.  |
| struct | **[EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md)** <br>Application selection parameters of an EMV transaction used for [EMV_CT_SELECT_STRUCT::SEL_Data]().  |
| struct | **[EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)** <br>struct for interface to [EMV_CT_StartTransaction()]() |
| struct | **[EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md)** <br>result data of [EMV_CT_StartTransaction()]() |
| struct | **[EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md)** <br>Structure for call of [EMV_CT_ContinueOffline()]() |
| struct | **[EMV_CT_SRCRIPTRES_STRUCT](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md)** <br>Data structure for issuer script results. Used in [EMV_CT_TRANSRES_STRUCT::scriptresults]().  |
| struct | **[EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md)** <br>Data structure for host response data. Input for [EMV_CT_ContinueOnline()]() |
| struct | **[EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md)** <br>Data structure for output data of [EMV_CT_ContinueOffline()]() and [EMV_CT_ContinueOnline()]() |
| struct | **[EMV_CT_CandListType](struct_e_m_v___c_t___cand_list_type.md)** <br>Data structure for output of EMV_CT_CheckSupportedAID.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CT_CANDIDATE_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md) | **[EMV_CT_CANDIDATE_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-candidate-type)** <br>Candidate list structure.  |
| typedef struct [EMV_CT_CANDIDATE_DATA_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CT_CANDIDATE_DATA_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-candidate-data-type)** <br>Candidate list additional data Output of [EMV_CT_GetCandidateData()]()   To be used in conjunction with [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates).  |
| typedef struct [EMV_CT_DOM_CHIP_STRUCT](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md) | **[EMV_CT_DOM_CHIP_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-dom-chip-type)** <br>Domestic non-EMV chip applications supporting AID selection    see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)   TLV tag [TAG_EMV_CONFORM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-emv-conform).  |
| typedef struct [EMV_CT_FALLBCK_MSR_STRUCT](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md) | **[EMV_CT_FALLBCK_MSR_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-fallbck-msr-type)** <br>list of MID applications supported by terminal    DF4C, see `xFallback_MS` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) and [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md) |
| typedef struct [EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md) | **[EMV_CT_PAYMENT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-payment-type)** <br>Transaction parameters of an EMV transaction.  |
| typedef struct [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md) | **[EMV_CT_APPS_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-apps-select-type)** <br>Application selection parameters of an EMV transaction used for [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data).  |
| typedef struct [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) | **[EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type)** <br>struct for interface to [EMV_CT_StartTransaction()]() |
| typedef struct [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md) | **[EMV_CT_SELECTRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-selectres-type)** <br>result data of [EMV_CT_StartTransaction()]() |
| typedef struct [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md) | **[EMV_CT_TRANSAC_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transac-type)** <br>Structure for call of [EMV_CT_ContinueOffline()]() |
| typedef struct [EMV_CT_SRCRIPTRES_STRUCT](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md) | **[EMV_CT_SRCRIPTRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-srcriptres-type)** <br>Data structure for issuer script results. Used in [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults).  |
| typedef struct [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md) | **[EMV_CT_HOST_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-host-type)** <br>Data structure for host response data. Input for [EMV_CT_ContinueOnline()]() |
| typedef struct [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md) | **[EMV_CT_TRANSRES_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-transres-type)** <br>Data structure for output data of [EMV_CT_ContinueOffline()]() and [EMV_CT_ContinueOnline()]() |

## Detailed Description

Definitions used for functions [EMV_CT_StartTransaction()](), [EMV_CT_ContinueOffline()](), [EMV_CT_ContinueOnline()]()

Definitions used for functions [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction), [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline), [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline)

## Types Documentation

### typedef EMV_CT_CANDIDATE_TYPE

```
typedef struct EMV_CT_CANDIDATE_STRUCT EMV_CT_CANDIDATE_TYPE;
```

Candidate list structure. 

used as [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates)


### typedef EMV_CT_CANDIDATE_DATA_TYPE

```
typedef struct EMV_CT_CANDIDATE_DATA_STRUCT EMV_CT_CANDIDATE_DATA_TYPE;
```

Candidate list additional data Output of [EMV_CT_GetCandidateData()]()   To be used in conjunction with [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates). 

### typedef EMV_CT_DOM_CHIP_TYPE

```
typedef struct EMV_CT_DOM_CHIP_STRUCT EMV_CT_DOM_CHIP_TYPE;
```

Domestic non-EMV chip applications supporting AID selection    see [EMV_CT_APPS_SELECT_STRUCT::xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)   TLV tag [TAG_EMV_CONFORM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-emv-conform). 

typedef for [EMV_CT_DOM_CHIP_STRUCT](struct_e_m_v___c_t___d_o_m___c_h_i_p___s_t_r_u_c_t.md)


### typedef EMV_CT_FALLBCK_MSR_TYPE

```
typedef struct EMV_CT_FALLBCK_MSR_STRUCT EMV_CT_FALLBCK_MSR_TYPE;
```

list of MID applications supported by terminal    DF4C, see `xFallback_MS` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) and [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md)

typedef for [EMV_CT_FALLBCK_MSR_STRUCT](struct_e_m_v___c_t___f_a_l_l_b_c_k___m_s_r___s_t_r_u_c_t.md)


### typedef EMV_CT_PAYMENT_TYPE

```
typedef struct EMV_CT_PAYMENT_STRUCT EMV_CT_PAYMENT_TYPE;
```

Transaction parameters of an EMV transaction. 

Used in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) and [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md) . 

 typedef for [EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md)


### typedef EMV_CT_APPS_SELECT_TYPE

```
typedef struct EMV_CT_APPS_SELECT_STRUCT EMV_CT_APPS_SELECT_TYPE;
```

Application selection parameters of an EMV transaction used for [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data). 

typedef for [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md)


### typedef EMV_CT_SELECT_TYPE

```
typedef struct EMV_CT_SELECT_STRUCT EMV_CT_SELECT_TYPE;
```

struct for interface to [EMV_CT_StartTransaction()]()

typedef for [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)


### typedef EMV_CT_SELECTRES_TYPE

```
typedef struct EMV_CT_SELECTRES_STRUCT EMV_CT_SELECTRES_TYPE;
```

result data of [EMV_CT_StartTransaction()]()

typedef for [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md)


### typedef EMV_CT_TRANSAC_TYPE

```
typedef struct EMV_CT_TRANSAC_STRUCT EMV_CT_TRANSAC_TYPE;
```

Structure for call of [EMV_CT_ContinueOffline()]()

typedef for [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md)


### typedef EMV_CT_SRCRIPTRES_TYPE

```
typedef struct EMV_CT_SRCRIPTRES_STRUCT EMV_CT_SRCRIPTRES_TYPE;
```

Data structure for issuer script results. Used in [EMV_CT_TRANSRES_STRUCT::scriptresults](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-scriptresults). 

### typedef EMV_CT_HOST_TYPE

```
typedef struct EMV_CT_HOST_STRUCT EMV_CT_HOST_TYPE;
```

Data structure for host response data. Input for [EMV_CT_ContinueOnline()]()

### typedef EMV_CT_TRANSRES_TYPE

```
typedef struct EMV_CT_TRANSRES_STRUCT EMV_CT_TRANSRES_TYPE;
```

Data structure for output data of [EMV_CT_ContinueOffline()]() and [EMV_CT_ContinueOnline()]()






-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
---
hidden: true
title: TAC/IAC DENIAL processing in case of Offline Only terminalsConfiguration » Application data
---

[Macros](#define-members)

DF15, ICS feature, for `ucAC_before_after` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>. [More\...](#details)

Collaboration diagram for TAC/IAC DENIAL processing in case of Offline Only terminals:

![](group___t_a_c___i_a_c___d_e_n_i_a_l.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE](#gac37332da209f939658ada2df8890eb73)   0x00 |
|   | process default action codes prior to 1st GENERATE AC [More\...](#gac37332da209f939658ada2df8890eb73)<br/> |
| #define  | [EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER](#gacd9cfed9e7b2516bb6d3f7316970a29a)   0x01 |
|   | process default action codes after 1st GENERATE AC [More\...](#gacd9cfed9e7b2516bb6d3f7316970a29a)<br/> |

## DetailedDescription {#detailed-description}

DF15, ICS feature, for `ucAC_before_after` in <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CT_TERMDATA_STRUCT</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER <a href="#gacd9cfed9e7b2516bb6d3f7316970a29a" id="gacd9cfed9e7b2516bb6d3f7316970a29a"></a>

<p>#define EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER   0x01</p>

process default action codes after 1st GENERATE AC

## EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE <a href="#gac37332da209f939658ada2df8890eb73" id="gac37332da209f939658ada2df8890eb73"></a>

<p>#define EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE   0x00</p>

process default action codes prior to 1st GENERATE AC

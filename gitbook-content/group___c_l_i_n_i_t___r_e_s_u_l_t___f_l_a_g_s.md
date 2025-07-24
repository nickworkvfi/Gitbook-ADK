---
hidden: true
title: Result flags for outcome of framework initializationInitialization » EMV ADK functions for initialization
---

[Macros](#define-members)

Flags used in <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework</a>. [More\...](#details)

Collaboration diagram for Result flags for outcome of framework initialization:

![](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_INIT_RES_CHKSUM_DIFF](#ga05ef85705e647d9b5c3c977b4acc3e45)   0x00000001 |
|   | Checksums of configuration files changed, call of <a href="group___f_u_n_c___c_o_n_f.md#gaa5352e4331b8fd16eaa02b1bbb7027c2">EMV_CTLS_ApplyConfiguration()</a> may be needed<br/>EMV framework does this check only if <a href="group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#ga0f897bfdb0216dc6c27a4524734b46d0">EMV_CTLS_INIT_OPT_CALC_CHKSUM</a> is set. Is only possible on VFI reader. [More\...](#ga05ef85705e647d9b5c3c977b4acc3e45)<br/> |
| #define  | [EMV_CTLS_INIT_RES_VFI_READER_MISS](#ga69e166e3694492a8dfbfaabba1aed60f)   0x00000002 |
|   | VFI reader usage desired (via <a href="group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#ga8aa9068db5a59add5c1e868803d6af39">EMV_CTLS_INIT_OPT_USE_VFI</a>), but VFI reader is not installed. [More\...](#ga69e166e3694492a8dfbfaabba1aed60f)<br/> |
| #define  | [EMV_CTLS_INIT_RES_ENTRY_POINT_MISS](#gaf190c865efa0dfaea0bc5beed32de16f)   0x00000004 |
|   | Vertex usage desired (via <a href="group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#ga291af5b7240ee22488ed8596a5f4342e">EMV_CTLS_INIT_OPT_USE_VERTEX</a>), but Entry Point is not installed. [More\...](#gaf190c865efa0dfaea0bc5beed32de16f)<br/> |

## DetailedDescription {#detailed-description}

Flags used in <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_INIT_RES_CHKSUM_DIFF <a href="#ga05ef85705e647d9b5c3c977b4acc3e45" id="ga05ef85705e647d9b5c3c977b4acc3e45"></a>

<p>#define EMV_CTLS_INIT_RES_CHKSUM_DIFF   0x00000001</p>

Checksums of configuration files changed, call of <a href="group___f_u_n_c___c_o_n_f.md#gaa5352e4331b8fd16eaa02b1bbb7027c2">EMV_CTLS_ApplyConfiguration()</a> may be needed
EMV framework does this check only if <a href="group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#ga0f897bfdb0216dc6c27a4524734b46d0">EMV_CTLS_INIT_OPT_CALC_CHKSUM</a> is set. Is only possible on VFI reader.

## EMV_CTLS_INIT_RES_ENTRY_POINT_MISS <a href="#gaf190c865efa0dfaea0bc5beed32de16f" id="gaf190c865efa0dfaea0bc5beed32de16f"></a>

<p>#define EMV_CTLS_INIT_RES_ENTRY_POINT_MISS   0x00000004</p>

Vertex usage desired (via <a href="group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#ga291af5b7240ee22488ed8596a5f4342e">EMV_CTLS_INIT_OPT_USE_VERTEX</a>), but Entry Point is not installed.

## EMV_CTLS_INIT_RES_VFI_READER_MISS <a href="#ga69e166e3694492a8dfbfaabba1aed60f" id="ga69e166e3694492a8dfbfaabba1aed60f"></a>

<p>#define EMV_CTLS_INIT_RES_VFI_READER_MISS   0x00000002</p>

VFI reader usage desired (via <a href="group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#ga8aa9068db5a59add5c1e868803d6af39">EMV_CTLS_INIT_OPT_USE_VFI</a>), but VFI reader is not installed.

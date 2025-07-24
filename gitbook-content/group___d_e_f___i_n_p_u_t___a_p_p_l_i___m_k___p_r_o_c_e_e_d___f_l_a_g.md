---
hidden: true
title: PayPass ProceedToFirstWriteFlag_DF8110 valuesConfiguration » Application data
---

[Macros](#define-members)

Well-known values for PayPass flag ProceedToFirstWriteFlag(\'DF1810\') in EMV_CTLS_APPLIDATA_MK_STRUCT::Scheme.MK.ProceedToFirstWriteFlag_DF8110. [More\...](#details)

Collaboration diagram for PayPass ProceedToFirstWriteFlag_DF8110 values:

![](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO](#ga31e6ee52ca63522ac5373704a3cc9b51)   0x00 |
|   | Kernel shall wait for DET signal, specification says that no DEK shall be sent. [More\...](#ga31e6ee52ca63522ac5373704a3cc9b51)<br/> |
| #define  | [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES](#gad747b63686a7b52714dbf5a03beb97d3)   0x01 |
|   | Kernel shall proceed without sending DEK signal. [More\...](#gad747b63686a7b52714dbf5a03beb97d3)<br/> |
| #define  | [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY](#ga989060220417fb6df1552631eb7430bb)   0xFF |
|   | Kernel shall send DEK signal before first write. [More\...](#ga989060220417fb6df1552631eb7430bb)<br/> |
| #define  | [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT](#gaea3207032fc0d99310c8896b63fffec3)   0xFE |
|   | Any other value makes the flag absent. Kernel shall act like [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES](#gad747b63686a7b52714dbf5a03beb97d3 "Kernel shall proceed without sending DEK signal."). [More\...](#gaea3207032fc0d99310c8896b63fffec3)<br/> |

## DetailedDescription {#detailed-description}

Well-known values for PayPass flag ProceedToFirstWriteFlag(\'DF1810\') in EMV_CTLS_APPLIDATA_MK_STRUCT::Scheme.MK.ProceedToFirstWriteFlag_DF8110.

## MacroDefinition Documentation {#macro-definition-documentation}

## INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT <a href="#gaea3207032fc0d99310c8896b63fffec3" id="gaea3207032fc0d99310c8896b63fffec3"></a>

<p>#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT   0xFE</p>

Any other value makes the flag absent. Kernel shall act like [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES](#gad747b63686a7b52714dbf5a03beb97d3 "Kernel shall proceed without sending DEK signal.").

## INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY <a href="#ga989060220417fb6df1552631eb7430bb" id="ga989060220417fb6df1552631eb7430bb"></a>

<p>#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY   0xFF</p>

Kernel shall send DEK signal before first write.

## INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO <a href="#ga31e6ee52ca63522ac5373704a3cc9b51" id="ga31e6ee52ca63522ac5373704a3cc9b51"></a>

<p>#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO   0x00</p>

Kernel shall wait for DET signal, specification says that no DEK shall be sent.

## INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES <a href="#gad747b63686a7b52714dbf5a03beb97d3" id="gad747b63686a7b52714dbf5a03beb97d3"></a>

<p>#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES   0x01</p>

Kernel shall proceed without sending DEK signal.

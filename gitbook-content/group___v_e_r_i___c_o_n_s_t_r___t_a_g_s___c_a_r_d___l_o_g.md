---
hidden: true
title: Card Transaction Log dump (China union pay)General topics » Serialization » BER TLV tags used by EMV ADK » Verifone internal tags » Constructed tags
---

[Macros](#define-members)

Collaboration diagram for Card Transaction Log dump (China union pay):

![](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_FFDC01_LOG_ENTRY_1](#ga922f1190b409db9ccca03b07339d5aa4)   0xFFDC01 |
|   | 1st Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga922f1190b409db9ccca03b07339d5aa4)<br/> |
| #define  | [TAG_FFDC02_LOG_ENTRY_2](#gac977c17f473e9fb0a0b6f021f7a8c024)   0xFFDC02 |
|   | 2nd Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#gac977c17f473e9fb0a0b6f021f7a8c024)<br/> |
| #define  | [TAG_FFDC03_LOG_ENTRY_3](#gac2c5ac0468545f6d2c391651223a6695)   0xFFDC03 |
|   | 3rd Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#gac2c5ac0468545f6d2c391651223a6695)<br/> |
| #define  | [TAG_FFDC04_LOG_ENTRY_4](#ga749e33340ba3b16f256d350c053c344c)   0xFFDC04 |
|   | 4th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga749e33340ba3b16f256d350c053c344c)<br/> |
| #define  | [TAG_FFDC05_LOG_ENTRY_5](#gad721072cd36cf15ebd32c82aee976d60)   0xFFDC05 |
|   | 5th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#gad721072cd36cf15ebd32c82aee976d60)<br/> |
| #define  | [TAG_FFDC06_LOG_ENTRY_6](#ga5f69defbfafe5bd35fdf97aed931641c)   0xFFDC06 |
|   | 6th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga5f69defbfafe5bd35fdf97aed931641c)<br/> |
| #define  | [TAG_FFDC07_LOG_ENTRY_7](#ga04105ae1b510400d65dd185ff495268e)   0xFFDC07 |
|   | 7th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga04105ae1b510400d65dd185ff495268e)<br/> |
| #define  | [TAG_FFDC08_LOG_ENTRY_8](#ga3dc61e6fee78f11e7064e8d6a7cf3916)   0xFFDC08 |
|   | 8th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga3dc61e6fee78f11e7064e8d6a7cf3916)<br/> |
| #define  | [TAG_FFDC09_LOG_ENTRY_9](#ga177d5dd7c2c5418630cb248c5e4ca9d0)   0xFFDC09 |
|   | 9th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga177d5dd7c2c5418630cb248c5e4ca9d0)<br/> |
| #define  | [TAG_FFDC0A_LOG_ENTRY_A](#ga0af944a0747435f649e1adffcb5443fa)   0xFFDC0A |
|   | 10th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga0af944a0747435f649e1adffcb5443fa)<br/> |
| #define  | [TAG_FFDC0B_LOG_ENTRY_B](#ga07d4f43ab2363694c9ce0741745de19a)   0xFFDC0B |
|   | 11th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga07d4f43ab2363694c9ce0741745de19a)<br/> |
| #define  | [TAG_FFDC0C_LOG_ENTRY_C](#ga5d059d16d1500c48b7e8a286af1bb4d1)   0xFFDC0C |
|   | 12th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga5d059d16d1500c48b7e8a286af1bb4d1)<br/> |
| #define  | [TAG_FFDC0D_LOG_ENTRY_D](#gad700bb485883b6d99dd7590adef23f27)   0xFFDC0D |
|   | 13th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#gad700bb485883b6d99dd7590adef23f27)<br/> |
| #define  | [TAG_FFDC0E_LOG_ENTRY_E](#ga76fd62f419b986a2240f886aa74604b5)   0xFFDC0E |
|   | 14th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga76fd62f419b986a2240f886aa74604b5)<br/> |
| #define  | [TAG_FFDC0F_LOG_ENTRY_F](#ga9a324cce7cef51b609e81305e1705d20)   0xFFDC0F |
|   | 15th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.<br/>See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>. [More\...](#ga9a324cce7cef51b609e81305e1705d20)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_FFDC01_LOG_ENTRY_1 <a href="#ga922f1190b409db9ccca03b07339d5aa4" id="ga922f1190b409db9ccca03b07339d5aa4"></a>

<p>#define TAG_FFDC01_LOG_ENTRY_1   0xFFDC01</p>

1st Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC02_LOG_ENTRY_2 <a href="#gac977c17f473e9fb0a0b6f021f7a8c024" id="gac977c17f473e9fb0a0b6f021f7a8c024"></a>

<p>#define TAG_FFDC02_LOG_ENTRY_2   0xFFDC02</p>

2nd Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC03_LOG_ENTRY_3 <a href="#gac2c5ac0468545f6d2c391651223a6695" id="gac2c5ac0468545f6d2c391651223a6695"></a>

<p>#define TAG_FFDC03_LOG_ENTRY_3   0xFFDC03</p>

3rd Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC04_LOG_ENTRY_4 <a href="#ga749e33340ba3b16f256d350c053c344c" id="ga749e33340ba3b16f256d350c053c344c"></a>

<p>#define TAG_FFDC04_LOG_ENTRY_4   0xFFDC04</p>

4th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC05_LOG_ENTRY_5 <a href="#gad721072cd36cf15ebd32c82aee976d60" id="gad721072cd36cf15ebd32c82aee976d60"></a>

<p>#define TAG_FFDC05_LOG_ENTRY_5   0xFFDC05</p>

5th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC06_LOG_ENTRY_6 <a href="#ga5f69defbfafe5bd35fdf97aed931641c" id="ga5f69defbfafe5bd35fdf97aed931641c"></a>

<p>#define TAG_FFDC06_LOG_ENTRY_6   0xFFDC06</p>

6th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC07_LOG_ENTRY_7 <a href="#ga04105ae1b510400d65dd185ff495268e" id="ga04105ae1b510400d65dd185ff495268e"></a>

<p>#define TAG_FFDC07_LOG_ENTRY_7   0xFFDC07</p>

7th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC08_LOG_ENTRY_8 <a href="#ga3dc61e6fee78f11e7064e8d6a7cf3916" id="ga3dc61e6fee78f11e7064e8d6a7cf3916"></a>

<p>#define TAG_FFDC08_LOG_ENTRY_8   0xFFDC08</p>

8th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC09_LOG_ENTRY_9 <a href="#ga177d5dd7c2c5418630cb248c5e4ca9d0" id="ga177d5dd7c2c5418630cb248c5e4ca9d0"></a>

<p>#define TAG_FFDC09_LOG_ENTRY_9   0xFFDC09</p>

9th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC0A_LOG_ENTRY_A <a href="#ga0af944a0747435f649e1adffcb5443fa" id="ga0af944a0747435f649e1adffcb5443fa"></a>

<p>#define TAG_FFDC0A_LOG_ENTRY_A   0xFFDC0A</p>

10th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC0B_LOG_ENTRY_B <a href="#ga07d4f43ab2363694c9ce0741745de19a" id="ga07d4f43ab2363694c9ce0741745de19a"></a>

<p>#define TAG_FFDC0B_LOG_ENTRY_B   0xFFDC0B</p>

11th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC0C_LOG_ENTRY_C <a href="#ga5d059d16d1500c48b7e8a286af1bb4d1" id="ga5d059d16d1500c48b7e8a286af1bb4d1"></a>

<p>#define TAG_FFDC0C_LOG_ENTRY_C   0xFFDC0C</p>

12th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC0D_LOG_ENTRY_D <a href="#gad700bb485883b6d99dd7590adef23f27" id="gad700bb485883b6d99dd7590adef23f27"></a>

<p>#define TAG_FFDC0D_LOG_ENTRY_D   0xFFDC0D</p>

13th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC0E_LOG_ENTRY_E <a href="#ga76fd62f419b986a2240f886aa74604b5" id="ga76fd62f419b986a2240f886aa74604b5"></a>

<p>#define TAG_FFDC0E_LOG_ENTRY_E   0xFFDC0E</p>

14th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

## TAG_FFDC0F_LOG_ENTRY_F <a href="#ga9a324cce7cef51b609e81305e1705d20" id="ga9a324cce7cef51b609e81305e1705d20"></a>

<p>#define TAG_FFDC0F_LOG_ENTRY_F   0xFFDC0F</p>

15th Transaction log entry. Used as input for <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>.
See also <a href="group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md">Tags for Transaction Log subfields</a>.

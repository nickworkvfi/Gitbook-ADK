---
hidden: true
title: Tags for Transaction Log subfieldsGeneral topics » Serialization » BER TLV tags used by EMV ADK » Verifone internal tags
---

[Macros](#define-members)

Collaboration diagram for Tags for Transaction Log subfields:

![](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_DFDC01_SFI](#ga2fa9354035fe8450e431e5840ce79929)   0xDFDC01 |
|   | SFI from Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>. [More\...](#ga2fa9354035fe8450e431e5840ce79929)<br/> |
| #define  | [TAG_DFDC02_RECORD_NB](#gaf6a538df0efd2081b5000843eb75c404)   0xDFDC02 |
|   | Record no. from Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>. [More\...](#gaf6a538df0efd2081b5000843eb75c404)<br/> |
| #define  | [TAG_DFDC03_READ_STATUS](#ga7f88ef10e189382d8b9ae7e316989002)   0xDFDC03 |
|   | Read status from Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>. [More\...](#ga7f88ef10e189382d8b9ae7e316989002)<br/> |
| #define  | [TAG_DFDC04_SW12](#ga543924fad2051befc66a9b79feaf203b)   0xDFDC04 |
|   | Status word (SW1/2)from Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>. [More\...](#ga543924fad2051befc66a9b79feaf203b)<br/> |
| #define  | [TAG_DFDC05_RECORD](#ga34db94c6a9bb55ee664733e7bdc164a0)   0xDFDC05 |
|   | Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>. [More\...](#ga34db94c6a9bb55ee664733e7bdc164a0)<br/> |
| #define  | [TAG_DFDC06_LOG_FORMAT](#gae8aa65a9cab0b529dbedebce394959bb)   0xDFDC06 |
|   | Format of Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>. [More\...](#gae8aa65a9cab0b529dbedebce394959bb)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_DFDC01_SFI <a href="#ga2fa9354035fe8450e431e5840ce79929" id="ga2fa9354035fe8450e431e5840ce79929"></a>

<p>#define TAG_DFDC01_SFI   0xDFDC01</p>

SFI from Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>.

## TAG_DFDC02_RECORD_NB <a href="#gaf6a538df0efd2081b5000843eb75c404" id="gaf6a538df0efd2081b5000843eb75c404"></a>

<p>#define TAG_DFDC02_RECORD_NB   0xDFDC02</p>

Record no. from Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>.

## TAG_DFDC03_READ_STATUS <a href="#ga7f88ef10e189382d8b9ae7e316989002" id="ga7f88ef10e189382d8b9ae7e316989002"></a>

<p>#define TAG_DFDC03_READ_STATUS   0xDFDC03</p>

Read status from Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>.

## TAG_DFDC04_SW12 <a href="#ga543924fad2051befc66a9b79feaf203b" id="ga543924fad2051befc66a9b79feaf203b"></a>

<p>#define TAG_DFDC04_SW12   0xDFDC04</p>

Status word (SW1/2)from Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>.

## TAG_DFDC05_RECORD <a href="#ga34db94c6a9bb55ee664733e7bdc164a0" id="ga34db94c6a9bb55ee664733e7bdc164a0"></a>

<p>#define TAG_DFDC05_RECORD   0xDFDC05</p>

Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>.

## TAG_DFDC06_LOG_FORMAT <a href="#gae8aa65a9cab0b529dbedebce394959bb" id="gae8aa65a9cab0b529dbedebce394959bb"></a>

<p>#define TAG_DFDC06_LOG_FORMAT   0xDFDC06</p>

Format of Transaction log entry. Used as output by <a href="group___f_u_n_c___f_l_o_w.md#ga8c9f0640ed818c3dc19da528f5f0b406">EMV_CTLS_fetchTxnTags()</a> after a transaction with <a href="group___t_r_a_n_s___t_y_p_e_s.md#ga10f4233c84dcf3c6602d29f97fffcb54">EMV_ADK_TRAN_TYPE_READ_CARD_LOG</a>. See also <a href="group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md">Card Transaction Log dump (China union pay)</a>.

---
title: Tags for Transaction Log subfields

---

# Tags for Transaction Log subfields

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** **/** **[Verifone internal tags](group___v_e_r_i___t_a_g_s.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_DFDC01_SFI](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc01-sfi)** <br>SFI from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC02_RECORD_NB](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc02-record-nb)** <br>Record no. from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC03_READ_STATUS](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc03-read-status)** <br>Read status from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC04_SW12](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc04-sw12)** <br>Status word (SW1/2)from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC05_RECORD](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc05-record)** <br>Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |
|  | **[TAG_DFDC06_LOG_FORMAT](group___v_e_r_i___t_r_x___l_o_g___s_u_b_f_i_e_l_d_s.md#define-tag-dfdc06-log-format)** <br>Format of Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md).  |




## Macros Documentation

### define TAG_DFDC01_SFI

```
#define TAG_DFDC01_SFI 0xDFDC01
```

SFI from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC02_RECORD_NB

```
#define TAG_DFDC02_RECORD_NB 0xDFDC02
```

Record no. from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC03_READ_STATUS

```
#define TAG_DFDC03_READ_STATUS 0xDFDC03
```

Read status from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC04_SW12

```
#define TAG_DFDC04_SW12 0xDFDC04
```

Status word (SW1/2)from Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC05_RECORD

```
#define TAG_DFDC05_RECORD 0xDFDC05
```

Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 

### define TAG_DFDC06_LOG_FORMAT

```
#define TAG_DFDC06_LOG_FORMAT 0xDFDC06
```

Format of Transaction log entry. Used as output by [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG](). See also [Card Transaction Log dump (China union pay)](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md). 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
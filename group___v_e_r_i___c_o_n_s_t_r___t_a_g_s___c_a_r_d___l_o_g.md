---
title: Card Transaction Log dump (China union pay)

---

# Card Transaction Log dump (China union pay)

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** **/** **[Verifone internal tags](group___v_e_r_i___t_a_g_s.md)** **/** **[Constructed tags](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_FFDC01_LOG_ENTRY_1](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc01-log-entry-1)** <br>1st Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC02_LOG_ENTRY_2](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc02-log-entry-2)** <br>2nd Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC03_LOG_ENTRY_3](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc03-log-entry-3)** <br>3rd Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC04_LOG_ENTRY_4](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc04-log-entry-4)** <br>4th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC05_LOG_ENTRY_5](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc05-log-entry-5)** <br>5th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC06_LOG_ENTRY_6](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc06-log-entry-6)** <br>6th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC07_LOG_ENTRY_7](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc07-log-entry-7)** <br>7th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC08_LOG_ENTRY_8](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc08-log-entry-8)** <br>8th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC09_LOG_ENTRY_9](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc09-log-entry-9)** <br>9th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC0A_LOG_ENTRY_A](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0a-log-entry-a)** <br>10th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC0B_LOG_ENTRY_B](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0b-log-entry-b)** <br>11th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC0C_LOG_ENTRY_C](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0c-log-entry-c)** <br>12th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC0D_LOG_ENTRY_D](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0d-log-entry-d)** <br>13th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC0E_LOG_ENTRY_E](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0e-log-entry-e)** <br>14th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |
|  | **[TAG_FFDC0F_LOG_ENTRY_F](group___v_e_r_i___c_o_n_s_t_r___t_a_g_s___c_a_r_d___l_o_g.md#define-tag-ffdc0f-log-entry-f)** <br>15th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields]().  |




## Macros Documentation

### define TAG_FFDC01_LOG_ENTRY_1

```
#define TAG_FFDC01_LOG_ENTRY_1 0xFFDC01
```

1st Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC02_LOG_ENTRY_2

```
#define TAG_FFDC02_LOG_ENTRY_2 0xFFDC02
```

2nd Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC03_LOG_ENTRY_3

```
#define TAG_FFDC03_LOG_ENTRY_3 0xFFDC03
```

3rd Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC04_LOG_ENTRY_4

```
#define TAG_FFDC04_LOG_ENTRY_4 0xFFDC04
```

4th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC05_LOG_ENTRY_5

```
#define TAG_FFDC05_LOG_ENTRY_5 0xFFDC05
```

5th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC06_LOG_ENTRY_6

```
#define TAG_FFDC06_LOG_ENTRY_6 0xFFDC06
```

6th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC07_LOG_ENTRY_7

```
#define TAG_FFDC07_LOG_ENTRY_7 0xFFDC07
```

7th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC08_LOG_ENTRY_8

```
#define TAG_FFDC08_LOG_ENTRY_8 0xFFDC08
```

8th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC09_LOG_ENTRY_9

```
#define TAG_FFDC09_LOG_ENTRY_9 0xFFDC09
```

9th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC0A_LOG_ENTRY_A

```
#define TAG_FFDC0A_LOG_ENTRY_A 0xFFDC0A
```

10th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC0B_LOG_ENTRY_B

```
#define TAG_FFDC0B_LOG_ENTRY_B 0xFFDC0B
```

11th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC0C_LOG_ENTRY_C

```
#define TAG_FFDC0C_LOG_ENTRY_C 0xFFDC0C
```

12th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC0D_LOG_ENTRY_D

```
#define TAG_FFDC0D_LOG_ENTRY_D 0xFFDC0D
```

13th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC0E_LOG_ENTRY_E

```
#define TAG_FFDC0E_LOG_ENTRY_E 0xFFDC0E
```

14th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 

### define TAG_FFDC0F_LOG_ENTRY_F

```
#define TAG_FFDC0F_LOG_ENTRY_F 0xFFDC0F
```

15th Transaction log entry. Used as input for [EMV_CTLS_fetchTxnTags()]() after a transaction with [EMV_ADK_TRAN_TYPE_READ_CARD_LOG]().    See also [Tags for Transaction Log subfields](). 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
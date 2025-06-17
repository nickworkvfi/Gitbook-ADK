---
title: Options for updating TLV data
summary: options for EMV_CT_updateTxnTags()

---

# Options for updating TLV data

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

`options` for [EMV_CT_updateTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_UPDATETAGS_ERROR_ON_NOT_ALLOWED_TAG](group___u_p_d_a_t_e___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-updatetags-error-on-not-allowed-tag)** <br>return error [EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param) if one or several tags are not allowed to be updated. If bit is not set, not allowed tags will be silently ignored.  |




## Macros Documentation

### define EMV_ADK_UPDATETAGS_ERROR_ON_NOT_ALLOWED_TAG

```
#define EMV_ADK_UPDATETAGS_ERROR_ON_NOT_ALLOWED_TAG (1 << 0)
```

return error [EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param) if one or several tags are not allowed to be updated. If bit is not set, not allowed tags will be silently ignored. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
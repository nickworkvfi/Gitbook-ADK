---
title: LED callback- Additional information
summary: Additional information for LED switching, used for TAG_DF8F60_LED_ADD_INFO. 

---

# LED callback: Additional information

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** **/** **[Verifone internal tags](group___v_e_r_i___t_a_g_s.md)** **/** **[Primitive tags](group___v_e_r_i___p_r_i_m___t_a_g_s.md)** **/** **[TLV tags for callback functions](group___t_l_v___c_b_c_k.md)**

Additional information for LED switching, used for [TAG_DF8F60_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8f60-led-add-info). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CBCK_LED_ADD_INFO_DONT_TRACE](group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md#define-cbck-led-add-info-dont-trace)** <br>Don't trace this callback in client interface trace, reason: e.g. LED blinking would fill trace buffer with needless information.  |




## Macros Documentation

### define CBCK_LED_ADD_INFO_DONT_TRACE

```
#define CBCK_LED_ADD_INFO_DONT_TRACE 0x01
```

Don't trace this callback in client interface trace, reason: e.g. LED blinking would fill trace buffer with needless information. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
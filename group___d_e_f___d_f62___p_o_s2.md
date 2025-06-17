---
title: Position 2: status of chipcard communication (2 byte)

---

# Position 2: status of chipcard communication (2 byte)

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)** **/** **[Additional error data](group___d_e_f___d_f62.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER](group___d_e_f___d_f62___p_o_s2.md#define-emv-adk-df62-err-pos2-transport-layer)** <br>error in transport layer (T=0, T=1)  |
|  | **[EMV_ADK_DF62_ERR_POS2_BASE_ERROR](group___d_e_f___d_f62___p_o_s2.md#define-emv-adk-df62-err-pos2-base-error)** <br>base error (wrong length of R-APDU)  |
|  | **[EMV_ADK_DF62_ERR_POS2_RAPDU](group___d_e_f___d_f62___p_o_s2.md#define-emv-adk-df62-err-pos2-rapdu)** <br>R-APDU data with wrong content.  |




## Macros Documentation

### define EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER

```
#define EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER 0x0000u
```

error in transport layer (T=0, T=1) 

### define EMV_ADK_DF62_ERR_POS2_BASE_ERROR

```
#define EMV_ADK_DF62_ERR_POS2_BASE_ERROR 0x0001u
```

base error (wrong length of R-APDU) 

### define EMV_ADK_DF62_ERR_POS2_RAPDU

```
#define EMV_ADK_DF62_ERR_POS2_RAPDU 0xFFFFu
```

R-APDU data with wrong content. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
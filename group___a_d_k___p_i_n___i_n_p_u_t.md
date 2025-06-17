---
title: Input params for PIN entry

---

# Input params for PIN entry

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)** **/** **[Definitions for PIN Input callback function](group___a_d_k___p_i_n___p_a_r_a_m.md)**



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CT_PIN_INPUT_ONLINE](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-online)** <br>Online enciphered PIN.  |
|  | **[EMV_CT_PIN_INPUT_PLAIN](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-plain)** <br>Offline plaintext PIN.  |
|  | **[EMV_CT_PIN_INPUT_ENCIPHERED](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-enciphered)** <br>Offline enciphered PIN.  |
|  | **[EMV_CT_PIN_INPUT_PLAIN_EXT](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-plain-ext)** <br>Offline plaintext PIN at external device (old Verix devices only)  |
|  | **[EMV_CT_PIN_INPUT_ENCIPHERED_EXT](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-pin-input-enciphered-ext)** <br>Offline enciphered PIN at external device (old Verix devices only)  |
|  | **[EMV_CT_CVM_CUSTOM](group___a_d_k___p_i_n___i_n_p_u_t.md#define-emv-ct-cvm-custom)** <br>Custom CVM, the highest bit indicates the custom CVM, byte 0...3 indicates the custom CVM method.  |




## Macros Documentation

### define EMV_CT_PIN_INPUT_ONLINE

```
#define EMV_CT_PIN_INPUT_ONLINE 0
```

Online enciphered PIN. 

### define EMV_CT_PIN_INPUT_PLAIN

```
#define EMV_CT_PIN_INPUT_PLAIN 1
```

Offline plaintext PIN. 

### define EMV_CT_PIN_INPUT_ENCIPHERED

```
#define EMV_CT_PIN_INPUT_ENCIPHERED 2
```

Offline enciphered PIN. 

### define EMV_CT_PIN_INPUT_PLAIN_EXT

```
#define EMV_CT_PIN_INPUT_PLAIN_EXT 3
```

Offline plaintext PIN at external device (old Verix devices only) 

### define EMV_CT_PIN_INPUT_ENCIPHERED_EXT

```
#define EMV_CT_PIN_INPUT_ENCIPHERED_EXT 4
```

Offline enciphered PIN at external device (old Verix devices only) 

### define EMV_CT_CVM_CUSTOM

```
#define EMV_CT_CVM_CUSTOM 5
```

Custom CVM, the highest bit indicates the custom CVM, byte 0...3 indicates the custom CVM method. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
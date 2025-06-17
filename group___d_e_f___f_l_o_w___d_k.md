---
title: Application flow capabilities for Discover/Diners
summary: Contents of EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for Discover/Diners

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_DK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-cashback-not-forced-cvm-0)** <br>B1b1: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.  |
|  | **[EMV_CTLS_FLOW_DK_DATA_STORAGE_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-data-storage-0)** <br>B1b2: (Vel: y VFI: n) DPAS-2: Activate kernel feature Data Storage.  |
|  | **[EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-extended-loggging-0)** <br>B1b3: (Vel: y VFI: n) DPAS-2: Activate kernel feature Extended Logging.  |
|  | **[EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-torn-txn-recovery-0)** <br>B1b4: (Vel: y VFI: n) DPAS-2: Activate kernel feature Torn Transaction Recovery.  |
|  | **[EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-deferred-authorisation-0)** <br>B1b5: (Vel: y VFI: n) DPAS-2: Activate kernel feature Deferred Authorisation.  |
|  | **[EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-status-check-enable-0)** <br>B1b6: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check)  |
|  | **[EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-skip-0)** <br>B1b7: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0]().  |
|  | **[EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-online-0)** <br>B1b8: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-skip-0).  |




## Macros Documentation

### define EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0

```
#define EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0 0x01
```

B1b1: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. 

### define EMV_CTLS_FLOW_DK_DATA_STORAGE_0

```
#define EMV_CTLS_FLOW_DK_DATA_STORAGE_0 0x02
```

B1b2: (Vel: y VFI: n) DPAS-2: Activate kernel feature Data Storage. 

### define EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0

```
#define EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0 0x04
```

B1b3: (Vel: y VFI: n) DPAS-2: Activate kernel feature Extended Logging. 

### define EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0

```
#define EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0 0x08
```

B1b4: (Vel: y VFI: n) DPAS-2: Activate kernel feature Torn Transaction Recovery. 

### define EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0

```
#define EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0 0x10
```

B1b5: (Vel: y VFI: n) DPAS-2: Activate kernel feature Deferred Authorisation. 

### define EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0

```
#define EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0 0x20
```

B1b6: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check) 

### define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0

```
#define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0 0x40
```

B1b7: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0](). 

### define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0

```
#define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0 0x80
```

B1b8: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns - not to be used together with [EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___d_k.md#define-emv-ctls-flow-dk-zero-check-enable-skip-0). 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
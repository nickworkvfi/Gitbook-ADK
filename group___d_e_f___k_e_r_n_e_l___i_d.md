---
title: Contactless Kernel Ids
summary: Short or Extended Kernel Id as integer. 

---

# Contactless Kernel Ids

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Short or Extended Kernel Id as integer.  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_KERN_EP](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ep)** <br>Entry Point, not applicable for application configuration.  |
|  | **[EMV_CTLS_KERN_PK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-pk)** <br>Visa Asia/Pacific.  |
|  | **[EMV_CTLS_KERN_MK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-mk)** <br>PayPass (MasterCard, maestro, ...)  |
|  | **[EMV_CTLS_KERN_VK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-vk)** <br>payWave (Visa, Visa electron, V-PAY, ...)  |
|  | **[EMV_CTLS_KERN_AK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ak)** <br>Expresspay (American Express)  |
|  | **[EMV_CTLS_KERN_JK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-jk)** <br>JCB.  |
|  | **[EMV_CTLS_KERN_DK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-dk)** <br>Discover.  |
|  | **[EMV_CTLS_KERN_CK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ck)** <br>China Union Pay (CUP, UnionPay International)  |
|  | **[EMV_CTLS_KERN_IK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ik)** <br>Interac (Canada)  |
|  | **[EMV_CTLS_KERN_EK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-ek)** <br>EPAL (Australia)  |
|  | **[EMV_CTLS_KERN_RK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-rk)** <br>RuPay (India)  |
|  | **[EMV_CTLS_KERN_GK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-gk)** <br>gemalto PURE  |
|  | **[EMV_CTLS_KERN_PB](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-pb)** <br>PagoBANCOMAT (Italy)  |
|  | **[EMV_CTLS_KERN_WK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-wk)** <br>reserved for WISE  |
|  | **[EMV_CTLS_KERN_BK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-bk)** <br>reserved for CPACE  |
|  | **[EMV_CTLS_KERN_GC](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-gc)** <br>girocard (Germany)  |
|  | **[EMV_CTLS_KERN_SAMA](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sama)** <br>Saudi Arabian Monetary Authority, automatically mapped to internal kernel Id [EMV_CTLS_KERN_GK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-gk).  |
|  | **[EMV_CTLS_KERN_CPACE](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-cpace)** <br>European Card Payment Cooperation AV, automatically mapped to internal kernel Id [EMV_CTLS_KERN_BK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-bk).  |
|  | **[EMV_CTLS_KERN_WLA](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-wla)** <br>WLA kernel by IDEMIA, automatically mapped to internal kernel id [EMV_CTLS_KERN_WK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-wk).  |
|  | **[EMV_CTLS_KERN_DOM](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-dom)** <br>Domestic kernel.  |
|  | **[EMV_CTLS_KERN_MR](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-mr)** <br>MIR (Russia)  |
|  | **[EMV_CTLS_KERN_SK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sk)** <br>SIBS (Portugal)  |
|  | **[EMV_CTLS_KERN_SB](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sb)** <br>SIBS MB (MULTIBANCO, Portugal)  |

## Detailed Description

Short or Extended Kernel Id as integer. 

Kernel Ids according to EMVCo and EMV-ADK's internal definitions for non-EMVCo registered kernel Ids. First byte in case of Short Kernel Id or bytes 1-3 in case of Extended Kernel Id for [EMV_CTLS_APPLI_KERNEL_TYPE::KernelID](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md#variable-kernelid). Used as integer for [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::InternalKernelId_DFAB23](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-internalkernelid-dfab23)

 0x01 ... 0x0F are reserved for the EMV L2 kernel 

 0x10 ... 0x1F for international non EMVCo kernels (EPAL, Interac, ...) 

 domestic application kernels start with 0xF0 ... 0xFF 




## Macros Documentation

### define EMV_CTLS_KERN_EP

```
#define EMV_CTLS_KERN_EP 0x00
```

Entry Point, not applicable for application configuration. 

### define EMV_CTLS_KERN_PK

```
#define EMV_CTLS_KERN_PK 0x01
```

Visa Asia/Pacific. 

### define EMV_CTLS_KERN_MK

```
#define EMV_CTLS_KERN_MK 0x02
```

PayPass (MasterCard, maestro, ...) 

### define EMV_CTLS_KERN_VK

```
#define EMV_CTLS_KERN_VK 0x03
```

payWave (Visa, Visa electron, V-PAY, ...) 

### define EMV_CTLS_KERN_AK

```
#define EMV_CTLS_KERN_AK 0x04
```

Expresspay (American Express) 

### define EMV_CTLS_KERN_JK

```
#define EMV_CTLS_KERN_JK 0x05
```

JCB. 

### define EMV_CTLS_KERN_DK

```
#define EMV_CTLS_KERN_DK 0x06
```

Discover. 

### define EMV_CTLS_KERN_CK

```
#define EMV_CTLS_KERN_CK 0x07
```

China Union Pay (CUP, UnionPay International) 

### define EMV_CTLS_KERN_IK

```
#define EMV_CTLS_KERN_IK 0x10
```

Interac (Canada) 

### define EMV_CTLS_KERN_EK

```
#define EMV_CTLS_KERN_EK 0x11
```

EPAL (Australia) 

### define EMV_CTLS_KERN_RK

```
#define EMV_CTLS_KERN_RK 0x12
```

RuPay (India) 

### define EMV_CTLS_KERN_GK

```
#define EMV_CTLS_KERN_GK 0x13
```

gemalto PURE 

### define EMV_CTLS_KERN_PB

```
#define EMV_CTLS_KERN_PB 0x14
```

PagoBANCOMAT (Italy) 

### define EMV_CTLS_KERN_WK

```
#define EMV_CTLS_KERN_WK 0x16
```

reserved for WISE 

### define EMV_CTLS_KERN_BK

```
#define EMV_CTLS_KERN_BK 0x17
```

reserved for CPACE 

### define EMV_CTLS_KERN_GC

```
#define EMV_CTLS_KERN_GC 0x2A
```

girocard (Germany) 

### define EMV_CTLS_KERN_SAMA

```
#define EMV_CTLS_KERN_SAMA 0x2D
```

Saudi Arabian Monetary Authority, automatically mapped to internal kernel Id [EMV_CTLS_KERN_GK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-gk). 

### define EMV_CTLS_KERN_CPACE

```
#define EMV_CTLS_KERN_CPACE 0x2E
```

European Card Payment Cooperation AV, automatically mapped to internal kernel Id [EMV_CTLS_KERN_BK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-bk). 

### define EMV_CTLS_KERN_WLA

```
#define EMV_CTLS_KERN_WLA 0x31
```

WLA kernel by IDEMIA, automatically mapped to internal kernel id [EMV_CTLS_KERN_WK](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-wk). 

### define EMV_CTLS_KERN_DOM

```
#define EMV_CTLS_KERN_DOM 0xF0
```

Domestic kernel. 

EMV ADK only handles application selection. Payment processing has to be done by calling application. 


### define EMV_CTLS_KERN_MR

```
#define EMV_CTLS_KERN_MR 0x810643
```

MIR (Russia) 

### define EMV_CTLS_KERN_SK

```
#define EMV_CTLS_KERN_SK 0xC1
```

SIBS (Portugal) 

**Deprecated**: 

use [EMV_CTLS_KERN_SB](group___d_e_f___k_e_r_n_e_l___i_d.md#define-emv-ctls-kern-sb) instead 

### define EMV_CTLS_KERN_SB

```
#define EMV_CTLS_KERN_SB 0xC14D42
```

SIBS MB (MULTIBANCO, Portugal) 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
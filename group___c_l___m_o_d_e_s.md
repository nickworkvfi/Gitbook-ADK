---
title: Supported Contactless modes
summary: Defines for EMV_CTLS_TRANSRES_STRUCT::CL_Mode. 

---

# Supported Contactless modes

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Terminal Data](group___d_e_f___c_o_n_f___t_e_r_m.md)**

Defines for [EMV_CTLS_TRANSRES_STRUCT::CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode).  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CL_DISABLED](group___c_l___m_o_d_e_s.md#define-cl-disabled)** <br>Contactless TXNs are disabled, all other contactless parameters are ignored.  |
|  | **[CL_MC_PAYPASS_CHIP](group___c_l___m_o_d_e_s.md#define-cl-mc-paypass-chip)** <br>Maestro Paypass enabled (chip only, e.g. Maestro definiton)  |
|  | **[CL_MC_PAYPASS_MSR](group___c_l___m_o_d_e_s.md#define-cl-mc-paypass-msr)** <br>Mastercard Paypass enabled, msr only.  |
|  | **[CL_MC_PAYPASS_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-mc-paypass-combined)** <br>Mastercard Paypass enabled (MC mandates to support chip and msr per standard)  |
|  | **[CL_VISA_CHIP](group___c_l___m_o_d_e_s.md#define-cl-visa-chip)** <br>VISA qVSDC enabled (no magstripe, VISA mandates using chip only in Europe)  |
|  | **[CL_VISA_MSR](group___c_l___m_o_d_e_s.md#define-cl-visa-msr)** <br>VISA magstripe enabled, msr only.  |
|  | **[CL_VISA_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-visa-combined)** <br>VISA chip and magstripe enabled.  |
|  | **[CL_AMEX_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-amex-combined)** <br>Amex enabled, chip and msr (this is the Amex default)  |
|  | **[CL_DISCOVER_ZIP](group___c_l___m_o_d_e_s.md#define-cl-discover-zip)** <br>Discover Zip enabled (msr only system)  |
|  | **[CL_INTERAC](group___c_l___m_o_d_e_s.md#define-cl-interac)** <br>Interac (Canada) enabled (always chip and msr)  |
|  | **[CL_QPBOC_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-qpboc-combined)** <br>China PBOC/UnionPay enabled (msr and chip)  |
|  | **[CL_JCB](group___c_l___m_o_d_e_s.md#define-cl-jcb)** <br>JCB enabled.  |
|  | **[CL_EPAL](group___c_l___m_o_d_e_s.md#define-cl-epal)** <br>EPAL (Australia) enabled.  |
|  | **[CL_AMEX_MSR](group___c_l___m_o_d_e_s.md#define-cl-amex-msr)** <br>Amex enable, msr only enabled (either use Amex combined or Amex msr)  |
|  | **[CL_DISCOVER_DPAS_CHIP](group___c_l___m_o_d_e_s.md#define-cl-discover-dpas-chip)** <br>D-PAS (Discover) chip enabled, chip only.  |
|  | **[CL_DISCOVER_DPAS_MSR](group___c_l___m_o_d_e_s.md#define-cl-discover-dpas-msr)** <br>D-PAS (Discover) magstripe enabled, msr only.  |
|  | **[CL_DISCOVER_DPAS_COMBINED](group___c_l___m_o_d_e_s.md#define-cl-discover-dpas-combined)** <br>D-PAS (Discover) chip and magstripe enabled.  |
|  | **[CL_RUPAY](group___c_l___m_o_d_e_s.md#define-cl-rupay)** <br>RuPay (India) enabled.  |
|  | **[CL_JCB_EMV](group___c_l___m_o_d_e_s.md#define-cl-jcb-emv)** <br>JCB with EMV mode.  |
|  | **[CL_JCB_LEGACY](group___c_l___m_o_d_e_s.md#define-cl-jcb-legacy)** <br>JCB with Legacy mode.  |
|  | **[CL_GEMALTO](group___c_l___m_o_d_e_s.md#define-cl-gemalto)** <br>Gemalto kernel.  |
|  | **[CL_GIROCARD](group___c_l___m_o_d_e_s.md#define-cl-girocard)** <br>girocard (German debit brand) kernel based on PayPass  |
|  | **[CL_SIBS](group___c_l___m_o_d_e_s.md#define-cl-sibs)** <br>SIBS (chip only)  |
|  | **[CL_PAGOBANCOMAT](group___c_l___m_o_d_e_s.md#define-cl-pagobancomat)** <br>PagoBancomat.  |
|  | **[CL_MIR](group___c_l___m_o_d_e_s.md#define-cl-mir)** <br>MIR.  |
|  | **[CL_SUPPORTED_VELOCITY](group___c_l___m_o_d_e_s.md#define-cl-supported-velocity)** <br>(used internally)  |
|  | **[CL_SUPPORTED_VFI](group___c_l___m_o_d_e_s.md#define-cl-supported-vfi)** <br>(used internally)  |
|  | **[CL_ALL](group___c_l___m_o_d_e_s.md#define-cl-all)** <br>This can be used to configure Terminal to support all modes.  |
|  | **[CL_UNKNOWN](group___c_l___m_o_d_e_s.md#define-cl-unknown)** <br>unknown kernel  |
|  | **[CL_APPS_KERNEL](group___c_l___m_o_d_e_s.md#define-cl-apps-kernel)** <br>kernel is handled by the application, entry point returns to app if this AID is selected  |

## Detailed Description

Defines for [EMV_CTLS_TRANSRES_STRUCT::CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode). 

**Deprecated**: 

Use [Contactless Kernel Ids](group___d_e_f___k_e_r_n_e_l___i_d.md) instead.



## Macros Documentation

### define CL_DISABLED

```
#define CL_DISABLED 0x00
```

Contactless TXNs are disabled, all other contactless parameters are ignored. 

### define CL_MC_PAYPASS_CHIP

```
#define CL_MC_PAYPASS_CHIP 0x01
```

Maestro Paypass enabled (chip only, e.g. Maestro definiton) 

### define CL_MC_PAYPASS_MSR

```
#define CL_MC_PAYPASS_MSR 0x02
```

Mastercard Paypass enabled, msr only. 

### define CL_MC_PAYPASS_COMBINED

```
#define CL_MC_PAYPASS_COMBINED 0x03
```

Mastercard Paypass enabled (MC mandates to support chip and msr per standard) 

### define CL_VISA_CHIP

```
#define CL_VISA_CHIP 0x04
```

VISA qVSDC enabled (no magstripe, VISA mandates using chip only in Europe) 

### define CL_VISA_MSR

```
#define CL_VISA_MSR 0x08
```

VISA magstripe enabled, msr only. 

### define CL_VISA_COMBINED

```
#define CL_VISA_COMBINED 0x0C
```

VISA chip and magstripe enabled. 

### define CL_AMEX_COMBINED

```
#define CL_AMEX_COMBINED 0x10
```

Amex enabled, chip and msr (this is the Amex default) 

### define CL_DISCOVER_ZIP

```
#define CL_DISCOVER_ZIP 0x20
```

Discover Zip enabled (msr only system) 

### define CL_INTERAC

```
#define CL_INTERAC 0x40
```

Interac (Canada) enabled (always chip and msr) 

### define CL_QPBOC_COMBINED

```
#define CL_QPBOC_COMBINED 0x80
```

China PBOC/UnionPay enabled (msr and chip) 

### define CL_JCB

```
#define CL_JCB 0x100
```

JCB enabled. 

### define CL_EPAL

```
#define CL_EPAL 0x200
```

EPAL (Australia) enabled. 

### define CL_AMEX_MSR

```
#define CL_AMEX_MSR 0x400
```

Amex enable, msr only enabled (either use Amex combined or Amex msr) 

### define CL_DISCOVER_DPAS_CHIP

```
#define CL_DISCOVER_DPAS_CHIP 0x800
```

D-PAS (Discover) chip enabled, chip only. 

### define CL_DISCOVER_DPAS_MSR

```
#define CL_DISCOVER_DPAS_MSR 0x1000
```

D-PAS (Discover) magstripe enabled, msr only. 

### define CL_DISCOVER_DPAS_COMBINED

```
#define CL_DISCOVER_DPAS_COMBINED 0x1800
```

D-PAS (Discover) chip and magstripe enabled. 

### define CL_RUPAY

```
#define CL_RUPAY 0x2000
```

RuPay (India) enabled. 

### define CL_JCB_EMV

```
#define CL_JCB_EMV 0x4000
```

JCB with EMV mode. 

### define CL_JCB_LEGACY

```
#define CL_JCB_LEGACY 0x8000
```

JCB with Legacy mode. 

### define CL_GEMALTO

```
#define CL_GEMALTO 0x010000
```

Gemalto kernel. 

### define CL_GIROCARD

```
#define CL_GIROCARD 0x020000
```

girocard (German debit brand) kernel based on PayPass 

### define CL_SIBS

```
#define CL_SIBS 0x040000
```

SIBS (chip only) 

### define CL_PAGOBANCOMAT

```
#define CL_PAGOBANCOMAT 0x080000
```

PagoBancomat. 

### define CL_MIR

```
#define CL_MIR 0x100000
```

MIR. 

### define CL_SUPPORTED_VELOCITY

```
#define CL_SUPPORTED_VELOCITY 0xFFFFFF
```

(used internally) 

### define CL_SUPPORTED_VFI

```
#define CL_SUPPORTED_VFI 0xFFFFFF
```

(used internally) 

### define CL_ALL

```
#define CL_ALL 0xFFFFFF
```

This can be used to configure Terminal to support all modes. 

### define CL_UNKNOWN

```
#define CL_UNKNOWN 0x40000000
```

unknown kernel 

### define CL_APPS_KERNEL

```
#define CL_APPS_KERNEL 0x80000000
```

kernel is handled by the application, entry point returns to app if this AID is selected 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
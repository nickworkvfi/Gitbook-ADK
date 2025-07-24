---
hidden: true
title: Supported Contactless modesConfiguration » Terminal Data
---

[Macros](#define-members)

Defines for <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af2a0fc1109b1f50d008679aeb4db9d2f">EMV_CTLS_TRANSRES_STRUCT::CL_Mode</a>. [More\...](#details)

Collaboration diagram for Supported Contactless modes:

![](group___c_l___m_o_d_e_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [CL_DISABLED](#gac7d2e08668ac77db34ab72e7bbabbc2f)   0x00 |
|   | Contactless TXNs are disabled, all other contactless parameters are ignored. [More\...](#gac7d2e08668ac77db34ab72e7bbabbc2f)<br/> |
| #define  | [CL_MC_PAYPASS_CHIP](#ga9b20d30ba40054adb79a1c263b740144)   0x01 |
|   | Maestro Paypass enabled (chip only, e.g. Maestro definiton) [More\...](#ga9b20d30ba40054adb79a1c263b740144)<br/> |
| #define  | [CL_MC_PAYPASS_MSR](#gaa4e43dedad78ab6a90c4cf2d81c0fec3)   0x02 |
|   | Mastercard Paypass enabled, msr only. [More\...](#gaa4e43dedad78ab6a90c4cf2d81c0fec3)<br/> |
| #define  | [CL_MC_PAYPASS_COMBINED](#ga82e308a9fdb26cbd1201b82d9b8028d3)   0x03 |
|   | Mastercard Paypass enabled (MC mandates to support chip and msr per standard) [More\...](#ga82e308a9fdb26cbd1201b82d9b8028d3)<br/> |
| #define  | [CL_VISA_CHIP](#gadeef9fb61bc7c3c41affe085e18245fd)   0x04 |
|   | VISA qVSDC enabled (no magstripe, VISA mandates using chip only in Europe) [More\...](#gadeef9fb61bc7c3c41affe085e18245fd)<br/> |
| #define  | [CL_VISA_MSR](#gaaa6f0ebd66e65a9778b2737421d2582e)   0x08 |
|   | VISA magstripe enabled, msr only. [More\...](#gaaa6f0ebd66e65a9778b2737421d2582e)<br/> |
| #define  | [CL_VISA_COMBINED](#ga930e8f7e53add5970dd6416f7c93efae)   0x0C |
|   | VISA chip and magstripe enabled. [More\...](#ga930e8f7e53add5970dd6416f7c93efae)<br/> |
| #define  | [CL_AMEX_COMBINED](#gad3a16e62be89248157bdab308210010e)   0x10 |
|   | Amex enabled, chip and msr (this is the Amex default) [More\...](#gad3a16e62be89248157bdab308210010e)<br/> |
| #define  | [CL_DISCOVER_ZIP](#ga63550a53973decbf9d7c44200cfa737b)   0x20 |
|   | Discover Zip enabled (msr only system) [More\...](#ga63550a53973decbf9d7c44200cfa737b)<br/> |
| #define  | [CL_INTERAC](#gae9011919bb1dff138ae04a0b05d3d632)   0x40 |
|   | Interac (Canada) enabled (always chip and msr) [More\...](#gae9011919bb1dff138ae04a0b05d3d632)<br/> |
| #define  | [CL_QPBOC_COMBINED](#ga893a69e78b2c5aeaf771f9640bd9ab0b)   0x80 |
|   | China PBOC/UnionPay enabled (msr and chip) [More\...](#ga893a69e78b2c5aeaf771f9640bd9ab0b)<br/> |
| #define  | [CL_JCB](#ga837fa26ca8d02ff502ceb7b16dc0e31c)   0x100 |
|   | JCB enabled. [More\...](#ga837fa26ca8d02ff502ceb7b16dc0e31c)<br/> |
| #define  | [CL_EPAL](#gaf2a724a9a2d3e81f2fd30c9478c171d9)   0x200 |
|   | EPAL (Australia) enabled. [More\...](#gaf2a724a9a2d3e81f2fd30c9478c171d9)<br/> |
| #define  | [CL_AMEX_MSR](#gaf7469cced7bcc5a1565d46d1ee1bd4d4)   0x400 |
|   | Amex enable, msr only enabled (either use Amex combined or Amex msr) [More\...](#gaf7469cced7bcc5a1565d46d1ee1bd4d4)<br/> |
| #define  | [CL_DISCOVER_DPAS_CHIP](#ga0b0e5ebbed23285aaf2fe0b86ddd4b02)   0x800 |
|   | D-PAS (Discover) chip enabled, chip only. [More\...](#ga0b0e5ebbed23285aaf2fe0b86ddd4b02)<br/> |
| #define  | [CL_DISCOVER_DPAS_MSR](#ga120491aa1b56026cd428e7365442d501)   0x1000 |
|   | D-PAS (Discover) magstripe enabled, msr only. [More\...](#ga120491aa1b56026cd428e7365442d501)<br/> |
| #define  | [CL_DISCOVER_DPAS_COMBINED](#gae0f56968599671f5d41117aa733107bb)   0x1800 |
|   | D-PAS (Discover) chip and magstripe enabled. [More\...](#gae0f56968599671f5d41117aa733107bb)<br/> |
| #define  | [CL_RUPAY](#ga1cf0105b37a5a389f7a7cbe9da66896b)   0x2000 |
|   | RuPay (India) enabled. [More\...](#ga1cf0105b37a5a389f7a7cbe9da66896b)<br/> |
| #define  | [CL_JCB_EMV](#gab7c5b37058cbf1f45ea4ea9374231961)   0x4000 |
|   | JCB with EMV mode. [More\...](#gab7c5b37058cbf1f45ea4ea9374231961)<br/> |
| #define  | [CL_JCB_LEGACY](#ga65e8ee03485edb00fbd8c1c5cb8b47d2)   0x8000 |
|   | JCB with Legacy mode. [More\...](#ga65e8ee03485edb00fbd8c1c5cb8b47d2)<br/> |
| #define  | [CL_GEMALTO](#ga4b673a8854bde1a99ef2671da0d13888)   0x010000 |
|   | Gemalto kernel. [More\...](#ga4b673a8854bde1a99ef2671da0d13888)<br/> |
| #define  | [CL_GIROCARD](#ga0d087e1b67cb6dd8bada181ded6f8491)   0x020000 |
|   | girocard (German debit brand) kernel based on PayPass [More\...](#ga0d087e1b67cb6dd8bada181ded6f8491)<br/> |
| #define  | [CL_SIBS](#gaa401179e28f844f6e75fdfe4ce08c639)   0x040000 |
|   | SIBS (chip only) [More\...](#gaa401179e28f844f6e75fdfe4ce08c639)<br/> |
| #define  | [CL_PAGOBANCOMAT](#ga41caf4e9cd0f6ba74d2eeaf219ebe41e)   0x080000 |
|   | PagoBancomat. [More\...](#ga41caf4e9cd0f6ba74d2eeaf219ebe41e)<br/> |
| #define  | [CL_MIR](#ga6cc169e05ca8d8ce87737fc5d356a28c)   0x100000 |
|   | MIR. [More\...](#ga6cc169e05ca8d8ce87737fc5d356a28c)<br/> |
| #define  | [CL_SUPPORTED_VELOCITY](#gab36efbdf4fae7662602e9bdb2a209690)   0xFFFFFF |
|   | (used internally) [More\...](#gab36efbdf4fae7662602e9bdb2a209690)<br/> |
| #define  | [CL_SUPPORTED_VFI](#ga6b948e4592d360e25d93f00bf0dc97a3)   0xFFFFFF |
|   | (used internally) [More\...](#ga6b948e4592d360e25d93f00bf0dc97a3)<br/> |
| #define  | [CL_ALL](#gab133081f05f9e61966d22bd5278358a7)   0xFFFFFF |
|   | This can be used to configure Terminal to support all modes. [More\...](#gab133081f05f9e61966d22bd5278358a7)<br/> |
| #define  | [CL_UNKNOWN](#ga08a5c3e3d2d31183b0ed789a0667ffec)   0x40000000 |
|   | unknown kernel [More\...](#ga08a5c3e3d2d31183b0ed789a0667ffec)<br/> |
| #define  | [CL_APPS_KERNEL](#gad81f79bd6458c7bcc5049abb55cf7995)   0x80000000 |
|   | kernel is handled by the application, entry point returns to app if this AID is selected [More\...](#gad81f79bd6458c7bcc5049abb55cf7995)<br/> |

## DetailedDescription {#detailed-description}

Defines for <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#af2a0fc1109b1f50d008679aeb4db9d2f">EMV_CTLS_TRANSRES_STRUCT::CL_Mode</a>.

**<a href="deprecated.md#_deprecated000042">Deprecated:</a>** Use <a href="group___d_e_f___k_e_r_n_e_l___i_d.md">Contactless Kernel Ids</a> instead.

## MacroDefinition Documentation {#macro-definition-documentation}

## CL_ALL <a href="#gab133081f05f9e61966d22bd5278358a7" id="gab133081f05f9e61966d22bd5278358a7"></a>

<p>#define CL_ALL   0xFFFFFF</p>

This can be used to configure Terminal to support all modes.

## CL_AMEX_COMBINED <a href="#gad3a16e62be89248157bdab308210010e" id="gad3a16e62be89248157bdab308210010e"></a>

<p>#define CL_AMEX_COMBINED   0x10</p>

Amex enabled, chip and msr (this is the Amex default)

## CL_AMEX_MSR <a href="#gaf7469cced7bcc5a1565d46d1ee1bd4d4" id="gaf7469cced7bcc5a1565d46d1ee1bd4d4"></a>

<p>#define CL_AMEX_MSR   0x400</p>

Amex enable, msr only enabled (either use Amex combined or Amex msr)

## CL_APPS_KERNEL <a href="#gad81f79bd6458c7bcc5049abb55cf7995" id="gad81f79bd6458c7bcc5049abb55cf7995"></a>

<p>#define CL_APPS_KERNEL   0x80000000</p>

kernel is handled by the application, entry point returns to app if this AID is selected

## CL_DISABLED <a href="#gac7d2e08668ac77db34ab72e7bbabbc2f" id="gac7d2e08668ac77db34ab72e7bbabbc2f"></a>

<p>#define CL_DISABLED   0x00</p>

Contactless TXNs are disabled, all other contactless parameters are ignored.

## CL_DISCOVER_DPAS_CHIP <a href="#ga0b0e5ebbed23285aaf2fe0b86ddd4b02" id="ga0b0e5ebbed23285aaf2fe0b86ddd4b02"></a>

<p>#define CL_DISCOVER_DPAS_CHIP   0x800</p>

D-PAS (Discover) chip enabled, chip only.

## CL_DISCOVER_DPAS_COMBINED <a href="#gae0f56968599671f5d41117aa733107bb" id="gae0f56968599671f5d41117aa733107bb"></a>

<p>#define CL_DISCOVER_DPAS_COMBINED   0x1800</p>

D-PAS (Discover) chip and magstripe enabled.

## CL_DISCOVER_DPAS_MSR <a href="#ga120491aa1b56026cd428e7365442d501" id="ga120491aa1b56026cd428e7365442d501"></a>

<p>#define CL_DISCOVER_DPAS_MSR   0x1000</p>

D-PAS (Discover) magstripe enabled, msr only.

## CL_DISCOVER_ZIP <a href="#ga63550a53973decbf9d7c44200cfa737b" id="ga63550a53973decbf9d7c44200cfa737b"></a>

<p>#define CL_DISCOVER_ZIP   0x20</p>

Discover Zip enabled (msr only system)

## CL_EPAL <a href="#gaf2a724a9a2d3e81f2fd30c9478c171d9" id="gaf2a724a9a2d3e81f2fd30c9478c171d9"></a>

<p>#define CL_EPAL   0x200</p>

EPAL (Australia) enabled.

## CL_GEMALTO <a href="#ga4b673a8854bde1a99ef2671da0d13888" id="ga4b673a8854bde1a99ef2671da0d13888"></a>

<p>#define CL_GEMALTO   0x010000</p>

Gemalto kernel.

## CL_GIROCARD <a href="#ga0d087e1b67cb6dd8bada181ded6f8491" id="ga0d087e1b67cb6dd8bada181ded6f8491"></a>

<p>#define CL_GIROCARD   0x020000</p>

girocard (German debit brand) kernel based on PayPass

## CL_INTERAC <a href="#gae9011919bb1dff138ae04a0b05d3d632" id="gae9011919bb1dff138ae04a0b05d3d632"></a>

<p>#define CL_INTERAC   0x40</p>

Interac (Canada) enabled (always chip and msr)

## CL_JCB <a href="#ga837fa26ca8d02ff502ceb7b16dc0e31c" id="ga837fa26ca8d02ff502ceb7b16dc0e31c"></a>

<p>#define CL_JCB   0x100</p>

JCB enabled.

## CL_JCB_EMV <a href="#gab7c5b37058cbf1f45ea4ea9374231961" id="gab7c5b37058cbf1f45ea4ea9374231961"></a>

<p>#define CL_JCB_EMV   0x4000</p>

JCB with EMV mode.

## CL_JCB_LEGACY <a href="#ga65e8ee03485edb00fbd8c1c5cb8b47d2" id="ga65e8ee03485edb00fbd8c1c5cb8b47d2"></a>

<p>#define CL_JCB_LEGACY   0x8000</p>

JCB with Legacy mode.

## CL_MC_PAYPASS_CHIP <a href="#ga9b20d30ba40054adb79a1c263b740144" id="ga9b20d30ba40054adb79a1c263b740144"></a>

<p>#define CL_MC_PAYPASS_CHIP   0x01</p>

Maestro Paypass enabled (chip only, e.g. Maestro definiton)

## CL_MC_PAYPASS_COMBINED <a href="#ga82e308a9fdb26cbd1201b82d9b8028d3" id="ga82e308a9fdb26cbd1201b82d9b8028d3"></a>

<p>#define CL_MC_PAYPASS_COMBINED   0x03</p>

Mastercard Paypass enabled (MC mandates to support chip and msr per standard)

## CL_MC_PAYPASS_MSR <a href="#gaa4e43dedad78ab6a90c4cf2d81c0fec3" id="gaa4e43dedad78ab6a90c4cf2d81c0fec3"></a>

<p>#define CL_MC_PAYPASS_MSR   0x02</p>

Mastercard Paypass enabled, msr only.

## CL_MIR <a href="#ga6cc169e05ca8d8ce87737fc5d356a28c" id="ga6cc169e05ca8d8ce87737fc5d356a28c"></a>

<p>#define CL_MIR   0x100000</p>

MIR.

## CL_PAGOBANCOMAT <a href="#ga41caf4e9cd0f6ba74d2eeaf219ebe41e" id="ga41caf4e9cd0f6ba74d2eeaf219ebe41e"></a>

<p>#define CL_PAGOBANCOMAT   0x080000</p>

PagoBancomat.

## CL_QPBOC_COMBINED <a href="#ga893a69e78b2c5aeaf771f9640bd9ab0b" id="ga893a69e78b2c5aeaf771f9640bd9ab0b"></a>

<p>#define CL_QPBOC_COMBINED   0x80</p>

China PBOC/UnionPay enabled (msr and chip)

## CL_RUPAY <a href="#ga1cf0105b37a5a389f7a7cbe9da66896b" id="ga1cf0105b37a5a389f7a7cbe9da66896b"></a>

<p>#define CL_RUPAY   0x2000</p>

RuPay (India) enabled.

## CL_SIBS <a href="#gaa401179e28f844f6e75fdfe4ce08c639" id="gaa401179e28f844f6e75fdfe4ce08c639"></a>

<p>#define CL_SIBS   0x040000</p>

SIBS (chip only)

## CL_SUPPORTED_VELOCITY <a href="#gab36efbdf4fae7662602e9bdb2a209690" id="gab36efbdf4fae7662602e9bdb2a209690"></a>

<p>#define CL_SUPPORTED_VELOCITY   0xFFFFFF</p>

(used internally)

## CL_SUPPORTED_VFI <a href="#ga6b948e4592d360e25d93f00bf0dc97a3" id="ga6b948e4592d360e25d93f00bf0dc97a3"></a>

<p>#define CL_SUPPORTED_VFI   0xFFFFFF</p>

(used internally)

## CL_UNKNOWN <a href="#ga08a5c3e3d2d31183b0ed789a0667ffec" id="ga08a5c3e3d2d31183b0ed789a0667ffec"></a>

<p>#define CL_UNKNOWN   0x40000000</p>

unknown kernel

## CL_VISA_CHIP <a href="#gadeef9fb61bc7c3c41affe085e18245fd" id="gadeef9fb61bc7c3c41affe085e18245fd"></a>

<p>#define CL_VISA_CHIP   0x04</p>

VISA qVSDC enabled (no magstripe, VISA mandates using chip only in Europe)

## CL_VISA_COMBINED <a href="#ga930e8f7e53add5970dd6416f7c93efae" id="ga930e8f7e53add5970dd6416f7c93efae"></a>

<p>#define CL_VISA_COMBINED   0x0C</p>

VISA chip and magstripe enabled.

## CL_VISA_MSR <a href="#gaaa6f0ebd66e65a9778b2737421d2582e" id="gaaa6f0ebd66e65a9778b2737421d2582e"></a>

<p>#define CL_VISA_MSR   0x08</p>

VISA magstripe enabled, msr only.

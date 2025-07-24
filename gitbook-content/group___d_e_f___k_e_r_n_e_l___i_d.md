---
hidden: true
title: Contactless Kernel IdsConfiguration » Application data
---

[Macros](#define-members)

Short or Extended Kernel Id as integer. [More\...](#details)

Collaboration diagram for Contactless Kernel Ids:

![](group___d_e_f___k_e_r_n_e_l___i_d.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_KERN_EP](#ga6a1913b69c899e302a91711d29cdc932)   0x00 |
|   | Entry Point, not applicable for application configuration. [More\...](#ga6a1913b69c899e302a91711d29cdc932)<br/> |
| #define  | [EMV_CTLS_KERN_PK](#gac9453d6101882bd30822ad44278b9e07)   0x01 |
|   | Visa Asia/Pacific. [More\...](#gac9453d6101882bd30822ad44278b9e07)<br/> |
| #define  | [EMV_CTLS_KERN_MK](#gab57309cf6fa7fb5c3119a8e34f32a42d)   0x02 |
|   | PayPass (MasterCard, maestro, \...) [More\...](#gab57309cf6fa7fb5c3119a8e34f32a42d)<br/> |
| #define  | [EMV_CTLS_KERN_VK](#ga9ceb7bbf91789d4113dba164f90fe72f)   0x03 |
|   | payWave (Visa, Visa electron, V-PAY, \...) [More\...](#ga9ceb7bbf91789d4113dba164f90fe72f)<br/> |
| #define  | [EMV_CTLS_KERN_AK](#gae9ee77139694cb99096f70ec9512a9ad)   0x04 |
|   | Expresspay (American Express) [More\...](#gae9ee77139694cb99096f70ec9512a9ad)<br/> |
| #define  | [EMV_CTLS_KERN_JK](#gaf3627e7b50b92d9836692a7d91f67215)   0x05 |
|   | JCB. [More\...](#gaf3627e7b50b92d9836692a7d91f67215)<br/> |
| #define  | [EMV_CTLS_KERN_DK](#gafae24fe51b7115f172222248de5dfc97)   0x06 |
|   | Discover. [More\...](#gafae24fe51b7115f172222248de5dfc97)<br/> |
| #define  | [EMV_CTLS_KERN_CK](#gae83fea487b0e3f07e693fc3c3ccf9086)   0x07 |
|   | China Union Pay (CUP, UnionPay International) [More\...](#gae83fea487b0e3f07e693fc3c3ccf9086)<br/> |
| #define  | [EMV_CTLS_KERN_IK](#ga89abf011cb60db387335b722f5eb2534)   0x10 |
|   | Interac (Canada) [More\...](#ga89abf011cb60db387335b722f5eb2534)<br/> |
| #define  | [EMV_CTLS_KERN_EK](#gaa3e8c869bc5d305143c40eb4edb9d65b)   0x11 |
|   | EPAL (Australia) [More\...](#gaa3e8c869bc5d305143c40eb4edb9d65b)<br/> |
| #define  | [EMV_CTLS_KERN_RK](#gacd3fd06d268e21a2af5cb5306bab6635)   0x12 |
|   | RuPay (India) [More\...](#gacd3fd06d268e21a2af5cb5306bab6635)<br/> |
| #define  | [EMV_CTLS_KERN_GK](#ga3f55cc1e6d58675029002362bd931d46)   0x13 |
|   | gemalto PURE [More\...](#ga3f55cc1e6d58675029002362bd931d46)<br/> |
| #define  | [EMV_CTLS_KERN_PB](#ga83a12ad7d23eee6ccda8eef62d827872)   0x14 |
|   | PagoBANCOMAT (Italy) [More\...](#ga83a12ad7d23eee6ccda8eef62d827872)<br/> |
| #define  | [EMV_CTLS_KERN_WK](#ga31ca0aecf7471cf3102552170eeaa136)   0x16 |
|   | reserved for WISE [More\...](#ga31ca0aecf7471cf3102552170eeaa136)<br/> |
| #define  | [EMV_CTLS_KERN_BK](#gab3b5f3156598750a603e420820417db5)   0x17 |
|   | reserved for CPACE [More\...](#gab3b5f3156598750a603e420820417db5)<br/> |
| #define  | [EMV_CTLS_KERN_GC](#ga66565fa6c5a9df42fa728d55691f0862)   0x2A |
|   | girocard (Germany) [More\...](#ga66565fa6c5a9df42fa728d55691f0862)<br/> |
| #define  | [EMV_CTLS_KERN_SAMA](#ga8126332364e248c77eddb28fb50206f5)   0x2D |
|   | Saudi Arabian Monetary Authority, automatically mapped to internal kernel Id [EMV_CTLS_KERN_GK](#ga3f55cc1e6d58675029002362bd931d46 "gemalto PURE"). [More\...](#ga8126332364e248c77eddb28fb50206f5)<br/> |
| #define  | [EMV_CTLS_KERN_CPACE](#ga1cc83c703219da4ef8ef195b2b13c02a)   0x2E |
|   | European Card Payment Cooperation AV, automatically mapped to internal kernel Id [EMV_CTLS_KERN_BK](#gab3b5f3156598750a603e420820417db5 "reserved for CPACE"). [More\...](#ga1cc83c703219da4ef8ef195b2b13c02a)<br/> |
| #define  | [EMV_CTLS_KERN_WLA](#ga4b9723f06bb52bbc2d362686f3b39aef)   0x31 |
|   | WLA kernel by IDEMIA, automatically mapped to internal kernel id [EMV_CTLS_KERN_WK](#ga31ca0aecf7471cf3102552170eeaa136 "reserved for WISE"). [More\...](#ga4b9723f06bb52bbc2d362686f3b39aef)<br/> |
| #define  | [EMV_CTLS_KERN_DOM](#gabf24ebfab936ee4ccbd6160743982447)   0xF0 |
|   | Domestic kernel. [More\...](#gabf24ebfab936ee4ccbd6160743982447)<br/> |
| #define  | [EMV_CTLS_KERN_MR](#gab87d72a3143750dc71804a4c568b71c6)   0x810643 |
|   | MIR (Russia) [More\...](#gab87d72a3143750dc71804a4c568b71c6)<br/> |
| #define  | [EMV_CTLS_KERN_SK](#ga056a4738c75a52b8b41edc642c63db62)   0xC1 |
|   | SIBS (Portugal) [More\...](#ga056a4738c75a52b8b41edc642c63db62)<br/> |
| #define  | [EMV_CTLS_KERN_SB](#ga8016533ec70ab010c3fbb95a3b23fbde)   0xC14D42 |
|   | SIBS MB (MULTIBANCO, Portugal) [More\...](#ga8016533ec70ab010c3fbb95a3b23fbde)<br/> |

## DetailedDescription {#detailed-description}

Short or Extended Kernel Id as integer.

Kernel Ids according to EMVCo and EMV-ADK\'s internal definitions for non-EMVCo registered kernel Ids. First byte in case of Short Kernel Id or bytes 1-3 in case of Extended Kernel Id for <a href="_e_m_v___c_t_l_s___interface_8h.md#ae162469ea7144a6de337323d1c65b761">EMV_CTLS_APPLI_KERNEL_TYPE::KernelID</a>. Used as integer for <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a750e97ca2975e2f5309417e707f3aab3">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::InternalKernelId_DFAB23</a>
0x01 \... 0x0F are reserved for the EMV L2 kernel
0x10 \... 0x1F for international non EMVCo kernels (EPAL, Interac, \...)
domestic application kernels start with 0xF0 \... 0xFF

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_KERN_AK <a href="#gae9ee77139694cb99096f70ec9512a9ad" id="gae9ee77139694cb99096f70ec9512a9ad"></a>

<p>#define EMV_CTLS_KERN_AK   0x04</p>

Expresspay (American Express)

## EMV_CTLS_KERN_BK <a href="#gab3b5f3156598750a603e420820417db5" id="gab3b5f3156598750a603e420820417db5"></a>

<p>#define EMV_CTLS_KERN_BK   0x17</p>

reserved for CPACE

## EMV_CTLS_KERN_CK <a href="#gae83fea487b0e3f07e693fc3c3ccf9086" id="gae83fea487b0e3f07e693fc3c3ccf9086"></a>

<p>#define EMV_CTLS_KERN_CK   0x07</p>

China Union Pay (CUP, UnionPay International)

## EMV_CTLS_KERN_CPACE <a href="#ga1cc83c703219da4ef8ef195b2b13c02a" id="ga1cc83c703219da4ef8ef195b2b13c02a"></a>

<p>#define EMV_CTLS_KERN_CPACE   0x2E</p>

European Card Payment Cooperation AV, automatically mapped to internal kernel Id [EMV_CTLS_KERN_BK](#gab3b5f3156598750a603e420820417db5 "reserved for CPACE").

## EMV_CTLS_KERN_DK <a href="#gafae24fe51b7115f172222248de5dfc97" id="gafae24fe51b7115f172222248de5dfc97"></a>

<p>#define EMV_CTLS_KERN_DK   0x06</p>

Discover.

## EMV_CTLS_KERN_DOM <a href="#gabf24ebfab936ee4ccbd6160743982447" id="gabf24ebfab936ee4ccbd6160743982447"></a>

<p>#define EMV_CTLS_KERN_DOM   0xF0</p>

Domestic kernel.

EMV ADK only handles application selection. Payment processing has to be done by calling application.

## EMV_CTLS_KERN_EK <a href="#gaa3e8c869bc5d305143c40eb4edb9d65b" id="gaa3e8c869bc5d305143c40eb4edb9d65b"></a>

<p>#define EMV_CTLS_KERN_EK   0x11</p>

EPAL (Australia)

## EMV_CTLS_KERN_EP <a href="#ga6a1913b69c899e302a91711d29cdc932" id="ga6a1913b69c899e302a91711d29cdc932"></a>

<p>#define EMV_CTLS_KERN_EP   0x00</p>

Entry Point, not applicable for application configuration.

## EMV_CTLS_KERN_GC <a href="#ga66565fa6c5a9df42fa728d55691f0862" id="ga66565fa6c5a9df42fa728d55691f0862"></a>

<p>#define EMV_CTLS_KERN_GC   0x2A</p>

girocard (Germany)

## EMV_CTLS_KERN_GK <a href="#ga3f55cc1e6d58675029002362bd931d46" id="ga3f55cc1e6d58675029002362bd931d46"></a>

<p>#define EMV_CTLS_KERN_GK   0x13</p>

gemalto PURE

## EMV_CTLS_KERN_IK <a href="#ga89abf011cb60db387335b722f5eb2534" id="ga89abf011cb60db387335b722f5eb2534"></a>

<p>#define EMV_CTLS_KERN_IK   0x10</p>

Interac (Canada)

## EMV_CTLS_KERN_JK <a href="#gaf3627e7b50b92d9836692a7d91f67215" id="gaf3627e7b50b92d9836692a7d91f67215"></a>

<p>#define EMV_CTLS_KERN_JK   0x05</p>

JCB.

## EMV_CTLS_KERN_MK <a href="#gab57309cf6fa7fb5c3119a8e34f32a42d" id="gab57309cf6fa7fb5c3119a8e34f32a42d"></a>

<p>#define EMV_CTLS_KERN_MK   0x02</p>

PayPass (MasterCard, maestro, \...)

## EMV_CTLS_KERN_MR <a href="#gab87d72a3143750dc71804a4c568b71c6" id="gab87d72a3143750dc71804a4c568b71c6"></a>

<p>#define EMV_CTLS_KERN_MR   0x810643</p>

MIR (Russia)

## EMV_CTLS_KERN_PB <a href="#ga83a12ad7d23eee6ccda8eef62d827872" id="ga83a12ad7d23eee6ccda8eef62d827872"></a>

<p>#define EMV_CTLS_KERN_PB   0x14</p>

PagoBANCOMAT (Italy)

## EMV_CTLS_KERN_PK <a href="#gac9453d6101882bd30822ad44278b9e07" id="gac9453d6101882bd30822ad44278b9e07"></a>

<p>#define EMV_CTLS_KERN_PK   0x01</p>

Visa Asia/Pacific.

## EMV_CTLS_KERN_RK <a href="#gacd3fd06d268e21a2af5cb5306bab6635" id="gacd3fd06d268e21a2af5cb5306bab6635"></a>

<p>#define EMV_CTLS_KERN_RK   0x12</p>

RuPay (India)

## EMV_CTLS_KERN_SAMA <a href="#ga8126332364e248c77eddb28fb50206f5" id="ga8126332364e248c77eddb28fb50206f5"></a>

<p>#define EMV_CTLS_KERN_SAMA   0x2D</p>

Saudi Arabian Monetary Authority, automatically mapped to internal kernel Id [EMV_CTLS_KERN_GK](#ga3f55cc1e6d58675029002362bd931d46 "gemalto PURE").

## EMV_CTLS_KERN_SB <a href="#ga8016533ec70ab010c3fbb95a3b23fbde" id="ga8016533ec70ab010c3fbb95a3b23fbde"></a>

<p>#define EMV_CTLS_KERN_SB   0xC14D42</p>

SIBS MB (MULTIBANCO, Portugal)

## EMV_CTLS_KERN_SK <a href="#ga056a4738c75a52b8b41edc642c63db62" id="ga056a4738c75a52b8b41edc642c63db62"></a>

<p>#define EMV_CTLS_KERN_SK   0xC1</p>

SIBS (Portugal)

**<a href="deprecated.md#_deprecated000044">Deprecated:</a>** use [EMV_CTLS_KERN_SB](#ga8016533ec70ab010c3fbb95a3b23fbde "SIBS MB (MULTIBANCO, Portugal)") instead

## EMV_CTLS_KERN_VK <a href="#ga9ceb7bbf91789d4113dba164f90fe72f" id="ga9ceb7bbf91789d4113dba164f90fe72f"></a>

<p>#define EMV_CTLS_KERN_VK   0x03</p>

payWave (Visa, Visa electron, V-PAY, \...)

## EMV_CTLS_KERN_WK <a href="#ga31ca0aecf7471cf3102552170eeaa136" id="ga31ca0aecf7471cf3102552170eeaa136"></a>

<p>#define EMV_CTLS_KERN_WK   0x16</p>

reserved for WISE

## EMV_CTLS_KERN_WLA <a href="#ga4b9723f06bb52bbc2d362686f3b39aef" id="ga4b9723f06bb52bbc2d362686f3b39aef"></a>

<p>#define EMV_CTLS_KERN_WLA   0x31</p>

WLA kernel by IDEMIA, automatically mapped to internal kernel id [EMV_CTLS_KERN_WK](#ga31ca0aecf7471cf3102552170eeaa136 "reserved for WISE").

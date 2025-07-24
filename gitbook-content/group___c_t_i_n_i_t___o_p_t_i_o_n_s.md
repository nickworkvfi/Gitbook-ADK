---
hidden: true
title: Options at framework initialisationInitialization » EMV ADK functions for initialization
---

[Macros](#define-members)

Flags used in parameter `options` in <a href="group___f_u_n_c___i_n_i_t.md#ga514e39585c5a6b79632ac317593ff592">EMV_CT_Init_Framework</a>. [More\...](#details)

Collaboration diagram for Options at framework initialisation:

![](group___c_t_i_n_i_t___o_p_t_i_o_n_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CT_INIT_OPT_BASE_INIT](#gaddbf06b75108654b48044e5f701fcbfc)   0x00000001 |
|   | base init: set options and register callback, but do not allocate memory. Useful on devices without contact EMV like UX410 and UX412. [More\...](#gaddbf06b75108654b48044e5f701fcbfc)<br/> |
| #define  | [EMV_CT_INIT_OPT_L1_DUMP](#ga8cb0828f8f3a9d40dd0ec4695c992123)   0x00000002 |
| #define  | [EMV_CT_INIT_OPT_CONFIG_MODE](#gab256e2810f51ed6cc87ea9d5536b7e1e)   0x00000008 |
| #define  | [EMV_CT_INIT_OPT_USE_DEF_VT_CAPK](#gaa9161ab2fddd06c1978efe082c4e1dd4)   0x00000010 |
|   | Use \"EMV_Keys.xml\" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals. [More\...](#gaa9161ab2fddd06c1978efe082c4e1dd4)<br/> |
| #define  | [EMV_CT_INIT_OPT_DELETE_ALL](#ga5236fbbb2436ad2514e8fea6ab95391c)   0x00000020 |
|   | delete all existing configuration files using the same virtual terminal [More\...](#ga5236fbbb2436ad2514e8fea6ab95391c)<br/> |
| #define  | [EMV_CT_INIT_OPT_TRACE](#ga2e45cc21dd0264a8d3a8c90c733d4f8c)   0x00000100 |
|   | Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2bdf296e1436b64373715038c87263b2">TAG_BF7F_CBK_TRACE</a>), switch on EMV trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](#gafc7596039c1ae075f46cb4e23fd5a1a1 "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CBK_TRACE). De-/Activation of AD...") or log configuration file missing or read error. [More\...](#ga2e45cc21dd0264a8d3a8c90c733d4f8c)<br/> |
| #define  | [EMV_CT_INIT_OPT_TRACE_CLT](#ga9b2576e36b0771a53249ff7b448197fd)   0x00000200 |
|   | Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2bdf296e1436b64373715038c87263b2">TAG_BF7F_CBK_TRACE</a>), switch on client trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](#gafc7596039c1ae075f46cb4e23fd5a1a1 "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CBK_TRACE). De-/Activation of AD...") or log configuration file missing or read error. [More\...](#ga9b2576e36b0771a53249ff7b448197fd)<br/> |
| #define  | [EMV_CT_INIT_OPT_TRACE_SYSLOG](#gadb67c45ce3f0e228db2585ecb885b0dd)   0x00000800 |
|   | Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2bdf296e1436b64373715038c87263b2">TAG_BF7F_CBK_TRACE</a>), additionally write to syslog. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](#gafc7596039c1ae075f46cb4e23fd5a1a1 "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CBK_TRACE). De-/Activation of AD...") or log configuration file missing or read error. [More\...](#gadb67c45ce3f0e228db2585ecb885b0dd)<br/> |
| #define  | [EMV_CT_INIT_OPT_TRACE_ADK_LOG](#gafc7596039c1ae075f46cb4e23fd5a1a1)   0x00080000 |
|   | Solely use ADK-LOG for tracing. Deactivates trace callback (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2bdf296e1436b64373715038c87263b2">TAG_BF7F_CBK_TRACE</a>). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file \"EMVCT\". [More\...](#gafc7596039c1ae075f46cb4e23fd5a1a1)<br/> |
| #define  | [EMV_CT_INIT_OPT_TIMINGS](#ga10ed9429c080a6f23be83f0bb732703e)   0x00100000 |
|   | measure card and terminal performance. Note: For this feature other trace output is switched off [More\...](#ga10ed9429c080a6f23be83f0bb732703e)<br/> |
| #define  | [EMV_CT_INIT_OPT_SHARED_CONFIG](#gaedec4507cd04ea68483e090a2d80ee0a)   0x00200000 |
| #define  | [EMV_CT_INIT_OPT_EPP_MASTER](#ga052005c388a903245d2162edc4720da5)   0x00400000 |
| #define  | [EMV_CT_INIT_VIRT_1](#gaf4074eda84324e107cb5ad73458868c8)   0x01000000 |
|   | virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gaf4074eda84324e107cb5ad73458868c8)<br/> |
| #define  | [EMV_CT_INIT_VIRT_2](#ga3fe310b168e70a4bf7e383bdd7d78494)   0x02000000 |
|   | virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga3fe310b168e70a4bf7e383bdd7d78494)<br/> |
| #define  | [EMV_CT_INIT_VIRT_3](#gadfb539bb567e7cbc66c420e6e8609746)   0x03000000 |
|   | virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gadfb539bb567e7cbc66c420e6e8609746)<br/> |
| #define  | [EMV_CT_INIT_VIRT_4](#gaf78a68179956ccea8b140447ce8a8df7)   0x04000000 |
|   | virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gaf78a68179956ccea8b140447ce8a8df7)<br/> |
| #define  | [EMV_CT_INIT_VIRT_5](#ga68748bd3ffd80a668cd08e2b309af14a)   0x05000000 |
|   | virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga68748bd3ffd80a668cd08e2b309af14a)<br/> |
| #define  | [EMV_CT_INIT_VIRT_6](#gade0e72705f57e5aba0a03a718af7ca43)   0x06000000 |
|   | virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gade0e72705f57e5aba0a03a718af7ca43)<br/> |
| #define  | [EMV_CT_INIT_VIRT_7](#gae8bc89f157593ae9a4503cd945b772c0)   0x07000000 |
|   | virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gae8bc89f157593ae9a4503cd945b772c0)<br/> |
| #define  | [EMV_CT_INIT_VIRT_8](#ga9b6907d36b64a3bf5b55375da4f62cf0)   0x08000000 |
|   | virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga9b6907d36b64a3bf5b55375da4f62cf0)<br/> |
| #define  | [EMV_CT_INIT_VIRT_9](#gafb0cf5af8d97f4ac36931604c455e35b)   0x09000000 |
|   | virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gafb0cf5af8d97f4ac36931604c455e35b)<br/> |
| #define  | [EMV_CT_INIT_VIRT_10](#gafc896d861dc8a017aa8c1ed9de1decee)   0x0A000000 |
|   | virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gafc896d861dc8a017aa8c1ed9de1decee)<br/> |
| #define  | [EMV_CT_INIT_VIRT_11](#gaa08f3bc2ab0917e251c95d666eac1041)   0x0B000000 |
|   | virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gaa08f3bc2ab0917e251c95d666eac1041)<br/> |
| #define  | [EMV_CT_INIT_VIRT_12](#gad756d46b48eb70ba4ee338865afebc0e)   0x0C000000 |
|   | virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gad756d46b48eb70ba4ee338865afebc0e)<br/> |
| #define  | [EMV_CT_INIT_VIRT_13](#ga1251380b21bd223d400237e71f372f55)   0x0D000000 |
|   | virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga1251380b21bd223d400237e71f372f55)<br/> |
| #define  | [EMV_CT_INIT_VIRT_14](#ga0a6053430eb5a2b093531990cda55d28)   0x0E000000 |
|   | virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga0a6053430eb5a2b093531990cda55d28)<br/> |
| #define  | [EMV_CT_INIT_VIRT_15](#ga14e5e5aa6a35eaa167364dcd4d9eedea)   0x0F000000 |
|   | virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga14e5e5aa6a35eaa167364dcd4d9eedea)<br/> |
| #define  | [EMV_CT_INIT_VIRT_16](#ga918de4e9d785cc751fa0dcae608e02f4)   0x10000000 |
|   | virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga918de4e9d785cc751fa0dcae608e02f4)<br/> |
| #define  | [EMV_CT_INIT_VIRT_17](#ga14eec11a44d4256f2274d369275ab985)   0x11000000 |
|   | virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga14eec11a44d4256f2274d369275ab985)<br/> |
| #define  | [EMV_CT_INIT_VIRT_18](#gae0372764625afbfcfd0f41b8a54cef36)   0x12000000 |
|   | virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gae0372764625afbfcfd0f41b8a54cef36)<br/> |
| #define  | [EMV_CT_INIT_VIRT_19](#ga03a31f33c5e1f698833a97259146afc2)   0x13000000 |
|   | virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga03a31f33c5e1f698833a97259146afc2)<br/> |
| #define  | [EMV_CT_INIT_VIRT_20](#gaf66865fbf38e8181deda9086e2369462)   0x14000000 |
|   | virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gaf66865fbf38e8181deda9086e2369462)<br/> |

## DetailedDescription {#detailed-description}

Flags used in parameter `options` in <a href="group___f_u_n_c___i_n_i_t.md#ga514e39585c5a6b79632ac317593ff592">EMV_CT_Init_Framework</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_INIT_OPT_BASE_INIT <a href="#gaddbf06b75108654b48044e5f701fcbfc" id="gaddbf06b75108654b48044e5f701fcbfc"></a>

<p>#define EMV_CT_INIT_OPT_BASE_INIT   0x00000001</p>

base init: set options and register callback, but do not allocate memory. Useful on devices without contact EMV like UX410 and UX412.

## EMV_CT_INIT_OPT_CONFIG_MODE <a href="#gab256e2810f51ed6cc87ea9d5536b7e1e" id="gab256e2810f51ed6cc87ea9d5536b7e1e"></a>

<p>#define EMV_CT_INIT_OPT_CONFIG_MODE   0x00000008</p>

Configuration is only written to files upon ExitFramework and ApplyConfiguration instead of written upon each configuration function or framework initialisation, which results in performance improvement.

{% hint style="info" %}
Do not directly update configuration files if this option is active.
{% endhint %}

## EMV_CT_INIT_OPT_DELETE_ALL <a href="#ga5236fbbb2436ad2514e8fea6ab95391c" id="ga5236fbbb2436ad2514e8fea6ab95391c"></a>

<p>#define EMV_CT_INIT_OPT_DELETE_ALL   0x00000020</p>

delete all existing configuration files using the same virtual terminal

## EMV_CT_INIT_OPT_EPP_MASTER <a href="#ga052005c388a903245d2162edc4720da5" id="ga052005c388a903245d2162edc4720da5"></a>

<p>#define EMV_CT_INIT_OPT_EPP_MASTER   0x00400000</p>

Generate a Configuration Id for every configuration change at time of persisting. Generate a checksum for every persistence file to be aware of changes via file system. The configuration id is specific to a Virtual Terminal and returned on Init Framework and when the configuration is stored to the file system. It is seen on serial interface only.

## EMV_CT_INIT_OPT_L1_DUMP <a href="#ga8cb0828f8f3a9d40dd0ec4695c992123" id="ga8cb0828f8f3a9d40dd0ec4695c992123"></a>

<p>#define EMV_CT_INIT_OPT_L1_DUMP   0x00000002</p>

**<a href="deprecated.md#_deprecated000147">Deprecated:</a>** not supported anymore as non-kernel tags are collected by default

## EMV_CT_INIT_OPT_SHARED_CONFIG <a href="#gaedec4507cd04ea68483e090a2d80ee0a" id="gaedec4507cd04ea68483e090a2d80ee0a"></a>

<p>#define EMV_CT_INIT_OPT_SHARED_CONFIG   0x00200000</p>

On VOS/VOS2 use `/mnt/flash/etc/config/adkemv` for persistence instead of ` $(HOME)/flash `. VOS3: `/mnt/appdata/versioned/globalshare/sdi/emv/`.

{% hint style="info" %}
Only the processes very first <a href="group___f_u_n_c___i_n_i_t.md#ga514e39585c5a6b79632ac317593ff592">EMV_CT_Init_Framework()</a> decides the shared config mode.
{% endhint %}

## EMV_CT_INIT_OPT_TIMINGS <a href="#ga10ed9429c080a6f23be83f0bb732703e" id="ga10ed9429c080a6f23be83f0bb732703e"></a>

<p>#define EMV_CT_INIT_OPT_TIMINGS   0x00100000</p>

measure card and terminal performance. Note: For this feature other trace output is switched off

## EMV_CT_INIT_OPT_TRACE <a href="#ga2e45cc21dd0264a8d3a8c90c733d4f8c" id="ga2e45cc21dd0264a8d3a8c90c733d4f8c"></a>

<p>#define EMV_CT_INIT_OPT_TRACE   0x00000100</p>

Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2bdf296e1436b64373715038c87263b2">TAG_BF7F_CBK_TRACE</a>), switch on EMV trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](#gafc7596039c1ae075f46cb4e23fd5a1a1 "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CBK_TRACE). De-/Activation of AD...") or log configuration file missing or read error.

## EMV_CT_INIT_OPT_TRACE_ADK_LOG <a href="#gafc7596039c1ae075f46cb4e23fd5a1a1" id="gafc7596039c1ae075f46cb4e23fd5a1a1"></a>

<p>#define EMV_CT_INIT_OPT_TRACE_ADK_LOG   0x00080000</p>

Solely use ADK-LOG for tracing. Deactivates trace callback (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2bdf296e1436b64373715038c87263b2">TAG_BF7F_CBK_TRACE</a>). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file \"EMVCT\".

## EMV_CT_INIT_OPT_TRACE_CLT <a href="#ga9b2576e36b0771a53249ff7b448197fd" id="ga9b2576e36b0771a53249ff7b448197fd"></a>

<p>#define EMV_CT_INIT_OPT_TRACE_CLT   0x00000200</p>

Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2bdf296e1436b64373715038c87263b2">TAG_BF7F_CBK_TRACE</a>), switch on client trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](#gafc7596039c1ae075f46cb4e23fd5a1a1 "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CBK_TRACE). De-/Activation of AD...") or log configuration file missing or read error.

## EMV_CT_INIT_OPT_TRACE_SYSLOG <a href="#gadb67c45ce3f0e228db2585ecb885b0dd" id="gadb67c45ce3f0e228db2585ecb885b0dd"></a>

<p>#define EMV_CT_INIT_OPT_TRACE_SYSLOG   0x00000800</p>

Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga2bdf296e1436b64373715038c87263b2">TAG_BF7F_CBK_TRACE</a>), additionally write to syslog. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG](#gafc7596039c1ae075f46cb4e23fd5a1a1 "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CBK_TRACE). De-/Activation of AD...") or log configuration file missing or read error.

## EMV_CT_INIT_OPT_USE_DEF_VT_CAPK <a href="#gaa9161ab2fddd06c1978efe082c4e1dd4" id="gaa9161ab2fddd06c1978efe082c4e1dd4"></a>

<p>#define EMV_CT_INIT_OPT_USE_DEF_VT_CAPK   0x00000010</p>

Use \"EMV_Keys.xml\" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals.

## EMV_CT_INIT_VIRT_1 <a href="#gaf4074eda84324e107cb5ad73458868c8" id="gaf4074eda84324e107cb5ad73458868c8"></a>

<p>#define EMV_CT_INIT_VIRT_1   0x01000000</p>

virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_10 <a href="#gafc896d861dc8a017aa8c1ed9de1decee" id="gafc896d861dc8a017aa8c1ed9de1decee"></a>

<p>#define EMV_CT_INIT_VIRT_10   0x0A000000</p>

virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_11 <a href="#gaa08f3bc2ab0917e251c95d666eac1041" id="gaa08f3bc2ab0917e251c95d666eac1041"></a>

<p>#define EMV_CT_INIT_VIRT_11   0x0B000000</p>

virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_12 <a href="#gad756d46b48eb70ba4ee338865afebc0e" id="gad756d46b48eb70ba4ee338865afebc0e"></a>

<p>#define EMV_CT_INIT_VIRT_12   0x0C000000</p>

virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_13 <a href="#ga1251380b21bd223d400237e71f372f55" id="ga1251380b21bd223d400237e71f372f55"></a>

<p>#define EMV_CT_INIT_VIRT_13   0x0D000000</p>

virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_14 <a href="#ga0a6053430eb5a2b093531990cda55d28" id="ga0a6053430eb5a2b093531990cda55d28"></a>

<p>#define EMV_CT_INIT_VIRT_14   0x0E000000</p>

virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_15 <a href="#ga14e5e5aa6a35eaa167364dcd4d9eedea" id="ga14e5e5aa6a35eaa167364dcd4d9eedea"></a>

<p>#define EMV_CT_INIT_VIRT_15   0x0F000000</p>

virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_16 <a href="#ga918de4e9d785cc751fa0dcae608e02f4" id="ga918de4e9d785cc751fa0dcae608e02f4"></a>

<p>#define EMV_CT_INIT_VIRT_16   0x10000000</p>

virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_17 <a href="#ga14eec11a44d4256f2274d369275ab985" id="ga14eec11a44d4256f2274d369275ab985"></a>

<p>#define EMV_CT_INIT_VIRT_17   0x11000000</p>

virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_18 <a href="#gae0372764625afbfcfd0f41b8a54cef36" id="gae0372764625afbfcfd0f41b8a54cef36"></a>

<p>#define EMV_CT_INIT_VIRT_18   0x12000000</p>

virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_19 <a href="#ga03a31f33c5e1f698833a97259146afc2" id="ga03a31f33c5e1f698833a97259146afc2"></a>

<p>#define EMV_CT_INIT_VIRT_19   0x13000000</p>

virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_2 <a href="#ga3fe310b168e70a4bf7e383bdd7d78494" id="ga3fe310b168e70a4bf7e383bdd7d78494"></a>

<p>#define EMV_CT_INIT_VIRT_2   0x02000000</p>

virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_20 <a href="#gaf66865fbf38e8181deda9086e2369462" id="gaf66865fbf38e8181deda9086e2369462"></a>

<p>#define EMV_CT_INIT_VIRT_20   0x14000000</p>

virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_3 <a href="#gadfb539bb567e7cbc66c420e6e8609746" id="gadfb539bb567e7cbc66c420e6e8609746"></a>

<p>#define EMV_CT_INIT_VIRT_3   0x03000000</p>

virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_4 <a href="#gaf78a68179956ccea8b140447ce8a8df7" id="gaf78a68179956ccea8b140447ce8a8df7"></a>

<p>#define EMV_CT_INIT_VIRT_4   0x04000000</p>

virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_5 <a href="#ga68748bd3ffd80a668cd08e2b309af14a" id="ga68748bd3ffd80a668cd08e2b309af14a"></a>

<p>#define EMV_CT_INIT_VIRT_5   0x05000000</p>

virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_6 <a href="#gade0e72705f57e5aba0a03a718af7ca43" id="gade0e72705f57e5aba0a03a718af7ca43"></a>

<p>#define EMV_CT_INIT_VIRT_6   0x06000000</p>

virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_7 <a href="#gae8bc89f157593ae9a4503cd945b772c0" id="gae8bc89f157593ae9a4503cd945b772c0"></a>

<p>#define EMV_CT_INIT_VIRT_7   0x07000000</p>

virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_8 <a href="#ga9b6907d36b64a3bf5b55375da4f62cf0" id="ga9b6907d36b64a3bf5b55375da4f62cf0"></a>

<p>#define EMV_CT_INIT_VIRT_8   0x08000000</p>

virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CT_INIT_VIRT_9 <a href="#gafb0cf5af8d97f4ac36931604c455e35b" id="gafb0cf5af8d97f4ac36931604c455e35b"></a>

<p>#define EMV_CT_INIT_VIRT_9   0x09000000</p>

virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X

---
hidden: true
title: Options at framework initialisationInitialization » EMV ADK functions for initialization
---

[Macros](#define-members)

Flags used in <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework</a>. [More\...](#details)

Collaboration diagram for Options at framework initialisation:

![](group___c_l_i_n_i_t___o_p_t_i_o_n_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_INIT_OPT_BASE_INIT](#ga733cd16847314198e5ab5f384025afea)   0x00000001 |
|   | base init: set options and register callback, but do not allocate memory [More\...](#ga733cd16847314198e5ab5f384025afea)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_L1_DUMP](#gad9f169c8f10f57ff482dd04502443c10)   0x00000002 |
| #define  | [EMV_CTLS_INIT_OPT_AUTO_RETAP](#ga6fa3aeb5079bb3b8992a05fb40f51083)   0x00000004 |
|   | do NOT handle retaps as two separate transactions but handle retaps internally and fire message events only to the app (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga694e27a1370530d36c245cc0cb2288bd">TAG_BF14_CBK_TEXT_DISPLAY</a>), the retap returncodes (like [More\...](#ga6fa3aeb5079bb3b8992a05fb40f51083)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_CONFIG_MODE](#ga1c8e49286494443e871880f3c168dd13)   0x00000008 |
| #define  | [EMV_CTLS_INIT_OPT_USE_DEF_VT_CAPK](#ga94e0753e91b63884476d3226f49d1239)   0x00000010 |
|   | Use \"EMV_CTLS_Keys.xml\" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals. [More\...](#ga94e0753e91b63884476d3226f49d1239)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_DELETE_ALL](#ga245cf4a8cf1bd68ed75ebdcb2918c5c2)   0x00000020 |
|   | delete all existing configuration files using the same virtual terminal [More\...](#ga245cf4a8cf1bd68ed75ebdcb2918c5c2)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_USE_VFI](#ga8aa9068db5a59add5c1e868803d6af39)   0x00000040 |
|   | option that ensures VFI Reader will be used [More\...](#ga8aa9068db5a59add5c1e868803d6af39)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_USE_VERTEX](#ga291af5b7240ee22488ed8596a5f4342e)   0x00000080 |
|   | option that ensures VERTEX Kernels will be used [More\...](#ga291af5b7240ee22488ed8596a5f4342e)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_TRACE](#gaa158cffa6762f6e3f062646c842c9896)   0x00000100 |
|   | Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8e26244b50f45cd8de1db4563fc11eea">TAG_BF7F_CTLS_CBK_TRACE</a>), for special use. For standard use ADK-LOG. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](#ga3dd82ececdb6ac17537767156b9a6b2a "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CTLS_CBK_TRACE)....") or log configuration file missing or read error. [More\...](#gaa158cffa6762f6e3f062646c842c9896)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_TRACE_CLT](#ga80ee1f85f27dac7facb5ba3674d33faf)   0x00000200 |
|   | Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8e26244b50f45cd8de1db4563fc11eea">TAG_BF7F_CTLS_CBK_TRACE</a>), for special use. For standard use ADK-LOG. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](#ga3dd82ececdb6ac17537767156b9a6b2a "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CTLS_CBK_TRACE)....") or log configuration file missing or read error. [More\...](#ga80ee1f85f27dac7facb5ba3674d33faf)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_LED_CBK_EXT](#ga24093f62e25124dd2c5050d3ed05cf5c)   0x00000400 |
| #define  | [EMV_CTLS_INIT_OPT_TRACE_SYSLOG](#ga5a3f03f5071018f7c882ee78fe950f5f)   0x00000800 |
|   | Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8e26244b50f45cd8de1db4563fc11eea">TAG_BF7F_CTLS_CBK_TRACE</a>), additionally write to syslog. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](#ga3dd82ececdb6ac17537767156b9a6b2a "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CTLS_CBK_TRACE)....") or log configuration file missing or read error. [More\...](#ga5a3f03f5071018f7c882ee78fe950f5f)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_LED_VFI_INT](#ga5e7c7c53f8b49f5312d2c0eec4415fd9)   0x00001000 |
|   | VFI Reader only: request internal LED display. If set, LED handling is done internally by the VFI Reader. If not set, LED display depends on [EMV_CTLS_INIT_OPT_LED_CBK_EXT](#ga24093f62e25124dd2c5050d3ed05cf5c). [More\...](#ga5e7c7c53f8b49f5312d2c0eec4415fd9)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK](#gadfa6a5c2610b8ddfe8be6f92849c5e33)   0x00004000 |
|   | VFI Reader only: Buzzer is not done by VFI reader, ADK takes over the beeps.<br/>see also <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a93d1982261d2afed6ce0b169b9f89541">EMV_CTLS_TERMDATA_STRUCT::BeepVolume</a>. [More\...](#gadfa6a5c2610b8ddfe8be6f92849c5e33)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_CALC_CHKSUM](#ga0f897bfdb0216dc6c27a4524734b46d0)   0x00010000 |
|   | VFI Reader only: Calculate checksums of configuration files, may lead to setting of result bit <a href="group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#ga05ef85705e647d9b5c3c977b4acc3e45">EMV_CTLS_INIT_RES_CHKSUM_DIFF</a>. [More\...](#ga0f897bfdb0216dc6c27a4524734b46d0)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_NEW_CFG_INTF](#ga6e8e1a00ac01882fa8cc29b74a1d3ac4)   0x00020000 |
| #define  | [EMV_CTLS_INIT_OPT_BEEP_CBK_EXT](#ga45c618babc37c98358ae6db73fd963eb)   0x00040000 |
|   | Activate beeper callback (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga805fd29bb45bbc706fefd6533ee3c69f">TAG_BF19_CTLS_CBK_BEEP</a>). Per default beeper is controlled by EMV ADK. [More\...](#ga45c618babc37c98358ae6db73fd963eb)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](#ga3dd82ececdb6ac17537767156b9a6b2a)   0x00080000 |
|   | Solely use ADK-LOG for tracing. Deactivates trace callback (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8e26244b50f45cd8de1db4563fc11eea">TAG_BF7F_CTLS_CBK_TRACE</a>). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file \"EMVCTLS\". [More\...](#ga3dd82ececdb6ac17537767156b9a6b2a)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_TIMINGS](#ga279ba129f77ef4aae75631f87343c7bd)   0x00100000 |
|   | measure card and terminal performance. Note: For this feature other trace output is switched off [More\...](#ga279ba129f77ef4aae75631f87343c7bd)<br/> |
| #define  | [EMV_CTLS_INIT_OPT_SHARED_CONFIG](#ga76d08c6ffb0c40a67976f49a09e81aa4)   0x00200000 |
| #define  | [EMV_CTLS_INIT_OPT_EPP_MASTER](#gaa12baf9ad86666879d0a0e53edc835cc)   0x00400000 |
| #define  | [EMV_CTLS_INIT_VIRT_1](#ga1dbe101da14f4a545ea7d8b2bfc402c6)   0x01000000 |
|   | virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga1dbe101da14f4a545ea7d8b2bfc402c6)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_2](#gaf8723eb2256c0a2d4402be4659ca045c)   0x02000000 |
|   | virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gaf8723eb2256c0a2d4402be4659ca045c)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_3](#gaddcaf201703c5f345f78f7e474bb6e22)   0x03000000 |
|   | virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gaddcaf201703c5f345f78f7e474bb6e22)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_4](#gaf245b01f0e88212f340d0c7a2123096d)   0x04000000 |
|   | virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gaf245b01f0e88212f340d0c7a2123096d)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_5](#ga778bbbacb5ba4f6a3bd26a266c0c59c2)   0x05000000 |
|   | virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga778bbbacb5ba4f6a3bd26a266c0c59c2)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_6](#ga754046a06b5b2b0fd62b8f877959b60a)   0x06000000 |
|   | virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga754046a06b5b2b0fd62b8f877959b60a)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_7](#ga8bde58f3198d4a34801ebabc78480187)   0x07000000 |
|   | virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga8bde58f3198d4a34801ebabc78480187)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_8](#gafb21c34991d487bfd51cacdb40dd10ee)   0x08000000 |
|   | virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gafb21c34991d487bfd51cacdb40dd10ee)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_9](#ga81726cceb8c38cee3fdaefa948ae6356)   0x09000000 |
|   | virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga81726cceb8c38cee3fdaefa948ae6356)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_10](#ga90e3c0a872f0266503c0221eeb502a48)   0x0A000000 |
|   | virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga90e3c0a872f0266503c0221eeb502a48)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_11](#ga5985297375b2649974abac47152b4162)   0x0B000000 |
|   | virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga5985297375b2649974abac47152b4162)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_12](#gac711274738a909f8143bc2d480d35205)   0x0C000000 |
|   | virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gac711274738a909f8143bc2d480d35205)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_13](#gac245e0df790f08adff0558f78f93bedc)   0x0D000000 |
|   | virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gac245e0df790f08adff0558f78f93bedc)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_14](#ga20ccc0319ae4aa3cf9c64b7aab2e929f)   0x0E000000 |
|   | virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga20ccc0319ae4aa3cf9c64b7aab2e929f)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_15](#gafede9aefff207e59eb18a8755aac4b2a)   0x0F000000 |
|   | virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gafede9aefff207e59eb18a8755aac4b2a)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_16](#gad773204b18383d6c37c2767c0047d4dc)   0x10000000 |
|   | virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gad773204b18383d6c37c2767c0047d4dc)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_17](#gaa1d778afe396f2632ef5264bd1b14c98)   0x11000000 |
|   | virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gaa1d778afe396f2632ef5264bd1b14c98)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_18](#ga1a354bb9694836510ee018f5931f069c)   0x12000000 |
|   | virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga1a354bb9694836510ee018f5931f069c)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_19](#gae86d8612e5020a7cee7dbad6c5ce64fd)   0x13000000 |
|   | virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#gae86d8612e5020a7cee7dbad6c5ce64fd)<br/> |
| #define  | [EMV_CTLS_INIT_VIRT_20](#ga350dfc6609aceaffcbc939cb757cbd07)   0x14000000 |
|   | virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X [More\...](#ga350dfc6609aceaffcbc939cb757cbd07)<br/> |

## DetailedDescription {#detailed-description}

Flags used in <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_INIT_OPT_AUTO_RETAP <a href="#ga6fa3aeb5079bb3b8992a05fb40f51083" id="ga6fa3aeb5079bb3b8992a05fb40f51083"></a>

<p>#define EMV_CTLS_INIT_OPT_AUTO_RETAP   0x00000004</p>

do NOT handle retaps as two separate transactions but handle retaps internally and fire message events only to the app (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga694e27a1370530d36c245cc0cb2288bd">TAG_BF14_CBK_TEXT_DISPLAY</a>), the retap returncodes (like

- <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga2a847e1e4db9a2b11008f0df23abbcd6">EMV_ADK_TXN_CTLS_MOBILE</a>) will not appear in this case but processing is handled on ADK level. -- Detailed explanation: -- VFI-Reader: The VFI-reader in general manges the retap for a mobile internally, ALWAYS. There is no chance for the ADK hand over the retap for a moblie transaction to the application. Therefore the EMV_ADK_TXN_CTLS_MOBILE does NEVER appear with VRFI-Reader. -- Velocity: On velovcity the kernel is NEVER handling the retap itnernally. So the ADK can hand it over to the application. Then you would receive EMV_ADK_TXN_CTLS_MOBILE. For compatibility reasons with the VFI-Reader we have introduced that the ADK is handling the mobile retap optionally. This is configurable with this parameter. If you configure this, then also the EMV_ADK_TXN_CTLS_MOBILE is NEVER returned to the application. If you do not confgure it this returncode will appear. -- Only if internal handling of the Velocity or the VFI-Reader takes place, the BF14 callback is issued to allow the application to display something. If the configuration is in that way that the app wants to handle the mobile retap according to its needs, then the BF14 is NEVER invoked. This is mutually exclusive.

## EMV_CTLS_INIT_OPT_BASE_INIT <a href="#ga733cd16847314198e5ab5f384025afea" id="ga733cd16847314198e5ab5f384025afea"></a>

<p>#define EMV_CTLS_INIT_OPT_BASE_INIT   0x00000001</p>

base init: set options and register callback, but do not allocate memory

## EMV_CTLS_INIT_OPT_BEEP_CBK_EXT <a href="#ga45c618babc37c98358ae6db73fd963eb" id="ga45c618babc37c98358ae6db73fd963eb"></a>

<p>#define EMV_CTLS_INIT_OPT_BEEP_CBK_EXT   0x00040000</p>

Activate beeper callback (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga805fd29bb45bbc706fefd6533ee3c69f">TAG_BF19_CTLS_CBK_BEEP</a>). Per default beeper is controlled by EMV ADK.

## EMV_CTLS_INIT_OPT_CALC_CHKSUM <a href="#ga0f897bfdb0216dc6c27a4524734b46d0" id="ga0f897bfdb0216dc6c27a4524734b46d0"></a>

<p>#define EMV_CTLS_INIT_OPT_CALC_CHKSUM   0x00010000</p>

VFI Reader only: Calculate checksums of configuration files, may lead to setting of result bit <a href="group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#ga05ef85705e647d9b5c3c977b4acc3e45">EMV_CTLS_INIT_RES_CHKSUM_DIFF</a>.

## EMV_CTLS_INIT_OPT_CONFIG_MODE <a href="#ga1c8e49286494443e871880f3c168dd13" id="ga1c8e49286494443e871880f3c168dd13"></a>

<p>#define EMV_CTLS_INIT_OPT_CONFIG_MODE   0x00000008</p>

Configuration is only written to files upon ExitFramework and ApplyConfiguration instead of written upon each configuration function or framework initialisation, which results in performance improvement.

{% hint style="info" %}
: Do not directly update configuration files if this option is active.
{% endhint %}

## EMV_CTLS_INIT_OPT_DELETE_ALL <a href="#ga245cf4a8cf1bd68ed75ebdcb2918c5c2" id="ga245cf4a8cf1bd68ed75ebdcb2918c5c2"></a>

<p>#define EMV_CTLS_INIT_OPT_DELETE_ALL   0x00000020</p>

delete all existing configuration files using the same virtual terminal

## EMV_CTLS_INIT_OPT_EPP_MASTER <a href="#gaa12baf9ad86666879d0a0e53edc835cc" id="gaa12baf9ad86666879d0a0e53edc835cc"></a>

<p>#define EMV_CTLS_INIT_OPT_EPP_MASTER   0x00400000</p>

Generate a Configuration Id for every configuration change at time of persisting. Generate a checksum for every persistence file to be aware of changes via file system. The configuration id is specific to a Virtual Terminal and returned on Init Framework and when the configuration is stored to the file system. It is seen on serial interface only.

## EMV_CTLS_INIT_OPT_L1_DUMP <a href="#gad9f169c8f10f57ff482dd04502443c10" id="gad9f169c8f10f57ff482dd04502443c10"></a>

<p>#define EMV_CTLS_INIT_OPT_L1_DUMP   0x00000002</p>

**<a href="deprecated.md#_deprecated000051">Deprecated:</a>** not supported anymore as non-kernel tags are collected by default

## EMV_CTLS_INIT_OPT_LED_CBK_EXT <a href="#ga24093f62e25124dd2c5050d3ed05cf5c" id="ga24093f62e25124dd2c5050d3ed05cf5c"></a>

<p>#define EMV_CTLS_INIT_OPT_LED_CBK_EXT   0x00000400</p>

Activate callback for LED display. Only effective in case terminal does not have hardware LEDs and SDI standard mode is not used.
EMV ADK will invoke a callback (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga1ed48d32ca46560f8dacd954fc485bcf">TAG_BF10_CTLS_CBK_LEDS</a>) for each needed LED switch on/off.
Calling application has to implement it and call ADK-GUI to realize LED switch (see also <a href="pg_emv_contactless_users_guide.md#subsubsec_emv_ctls_led_handling">LED Handling</a>).

## EMV_CTLS_INIT_OPT_LED_VFI_INT <a href="#ga5e7c7c53f8b49f5312d2c0eec4415fd9" id="ga5e7c7c53f8b49f5312d2c0eec4415fd9"></a>

<p>#define EMV_CTLS_INIT_OPT_LED_VFI_INT   0x00001000</p>

VFI Reader only: request internal LED display. If set, LED handling is done internally by the VFI Reader. If not set, LED display depends on [EMV_CTLS_INIT_OPT_LED_CBK_EXT](#ga24093f62e25124dd2c5050d3ed05cf5c).

## EMV_CTLS_INIT_OPT_NEW_CFG_INTF <a href="#ga6e8e1a00ac01882fa8cc29b74a1d3ac4" id="ga6e8e1a00ac01882fa8cc29b74a1d3ac4"></a>

<p>#define EMV_CTLS_INIT_OPT_NEW_CFG_INTF   0x00020000</p>

**<a href="deprecated.md#_deprecated000054">Deprecated:</a>** new application configuration interface is the only processing and this flag is ignored

## EMV_CTLS_INIT_OPT_SHARED_CONFIG <a href="#ga76d08c6ffb0c40a67976f49a09e81aa4" id="ga76d08c6ffb0c40a67976f49a09e81aa4"></a>

<p>#define EMV_CTLS_INIT_OPT_SHARED_CONFIG   0x00200000</p>

On VOS/VOS2 use `/mnt/flash/etc/config/adkemv` for persistence instead of ` $(HOME)/flash `. VOS3: `/mnt/appdata/versioned/globalshare/sdi/emv/`.

{% hint style="info" %}
Only the processes very first <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework()</a> decides the shared config mode.
{% endhint %}

## EMV_CTLS_INIT_OPT_TIMINGS <a href="#ga279ba129f77ef4aae75631f87343c7bd" id="ga279ba129f77ef4aae75631f87343c7bd"></a>

<p>#define EMV_CTLS_INIT_OPT_TIMINGS   0x00100000</p>

measure card and terminal performance. Note: For this feature other trace output is switched off

## EMV_CTLS_INIT_OPT_TRACE <a href="#gaa158cffa6762f6e3f062646c842c9896" id="gaa158cffa6762f6e3f062646c842c9896"></a>

<p>#define EMV_CTLS_INIT_OPT_TRACE   0x00000100</p>

Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8e26244b50f45cd8de1db4563fc11eea">TAG_BF7F_CTLS_CBK_TRACE</a>), for special use. For standard use ADK-LOG. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](#ga3dd82ececdb6ac17537767156b9a6b2a "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CTLS_CBK_TRACE)....") or log configuration file missing or read error.

## EMV_CTLS_INIT_OPT_TRACE_ADK_LOG <a href="#ga3dd82ececdb6ac17537767156b9a6b2a" id="ga3dd82ececdb6ac17537767156b9a6b2a"></a>

<p>#define EMV_CTLS_INIT_OPT_TRACE_ADK_LOG   0x00080000</p>

Solely use ADK-LOG for tracing. Deactivates trace callback (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8e26244b50f45cd8de1db4563fc11eea">TAG_BF7F_CTLS_CBK_TRACE</a>). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file \"EMVCTLS\".

## EMV_CTLS_INIT_OPT_TRACE_CLT <a href="#ga80ee1f85f27dac7facb5ba3674d33faf" id="ga80ee1f85f27dac7facb5ba3674d33faf"></a>

<p>#define EMV_CTLS_INIT_OPT_TRACE_CLT   0x00000200</p>

Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8e26244b50f45cd8de1db4563fc11eea">TAG_BF7F_CTLS_CBK_TRACE</a>), for special use. For standard use ADK-LOG. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](#ga3dd82ececdb6ac17537767156b9a6b2a "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CTLS_CBK_TRACE)....") or log configuration file missing or read error.

## EMV_CTLS_INIT_OPT_TRACE_SYSLOG <a href="#ga5a3f03f5071018f7c882ee78fe950f5f" id="ga5a3f03f5071018f7c882ee78fe950f5f"></a>

<p>#define EMV_CTLS_INIT_OPT_TRACE_SYSLOG   0x00000800</p>

Callback trace (<a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga8e26244b50f45cd8de1db4563fc11eea">TAG_BF7F_CTLS_CBK_TRACE</a>), additionally write to syslog. Only effective in case of deactivated [EMV_CTLS_INIT_OPT_TRACE_ADK_LOG](#ga3dd82ececdb6ac17537767156b9a6b2a "Solely use ADK-LOG for tracing. Deactivates trace callback (TAG_BF7F_CTLS_CBK_TRACE)....") or log configuration file missing or read error.

## EMV_CTLS_INIT_OPT_USE_DEF_VT_CAPK <a href="#ga94e0753e91b63884476d3226f49d1239" id="ga94e0753e91b63884476d3226f49d1239"></a>

<p>#define EMV_CTLS_INIT_OPT_USE_DEF_VT_CAPK   0x00000010</p>

Use \"EMV_CTLS_Keys.xml\" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals.

## EMV_CTLS_INIT_OPT_USE_VERTEX <a href="#ga291af5b7240ee22488ed8596a5f4342e" id="ga291af5b7240ee22488ed8596a5f4342e"></a>

<p>#define EMV_CTLS_INIT_OPT_USE_VERTEX   0x00000080</p>

option that ensures VERTEX Kernels will be used

**<a href="deprecated.md#_deprecated000053">Deprecated:</a>** Ignored because combined CTLS framework not continued anymore

## EMV_CTLS_INIT_OPT_USE_VFI <a href="#ga8aa9068db5a59add5c1e868803d6af39" id="ga8aa9068db5a59add5c1e868803d6af39"></a>

<p>#define EMV_CTLS_INIT_OPT_USE_VFI   0x00000040</p>

option that ensures VFI Reader will be used

**<a href="deprecated.md#_deprecated000052">Deprecated:</a>** Ignored because combined CTLS framework not continued anymore

## EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK <a href="#gadfa6a5c2610b8ddfe8be6f92849c5e33" id="gadfa6a5c2610b8ddfe8be6f92849c5e33"></a>

<p>#define EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK   0x00004000</p>

VFI Reader only: Buzzer is not done by VFI reader, ADK takes over the beeps.
see also <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#a93d1982261d2afed6ce0b169b9f89541">EMV_CTLS_TERMDATA_STRUCT::BeepVolume</a>.

## EMV_CTLS_INIT_VIRT_1 <a href="#ga1dbe101da14f4a545ea7d8b2bfc402c6" id="ga1dbe101da14f4a545ea7d8b2bfc402c6"></a>

<p>#define EMV_CTLS_INIT_VIRT_1   0x01000000</p>

virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_10 <a href="#ga90e3c0a872f0266503c0221eeb502a48" id="ga90e3c0a872f0266503c0221eeb502a48"></a>

<p>#define EMV_CTLS_INIT_VIRT_10   0x0A000000</p>

virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_11 <a href="#ga5985297375b2649974abac47152b4162" id="ga5985297375b2649974abac47152b4162"></a>

<p>#define EMV_CTLS_INIT_VIRT_11   0x0B000000</p>

virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_12 <a href="#gac711274738a909f8143bc2d480d35205" id="gac711274738a909f8143bc2d480d35205"></a>

<p>#define EMV_CTLS_INIT_VIRT_12   0x0C000000</p>

virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_13 <a href="#gac245e0df790f08adff0558f78f93bedc" id="gac245e0df790f08adff0558f78f93bedc"></a>

<p>#define EMV_CTLS_INIT_VIRT_13   0x0D000000</p>

virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_14 <a href="#ga20ccc0319ae4aa3cf9c64b7aab2e929f" id="ga20ccc0319ae4aa3cf9c64b7aab2e929f"></a>

<p>#define EMV_CTLS_INIT_VIRT_14   0x0E000000</p>

virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_15 <a href="#gafede9aefff207e59eb18a8755aac4b2a" id="gafede9aefff207e59eb18a8755aac4b2a"></a>

<p>#define EMV_CTLS_INIT_VIRT_15   0x0F000000</p>

virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_16 <a href="#gad773204b18383d6c37c2767c0047d4dc" id="gad773204b18383d6c37c2767c0047d4dc"></a>

<p>#define EMV_CTLS_INIT_VIRT_16   0x10000000</p>

virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_17 <a href="#gaa1d778afe396f2632ef5264bd1b14c98" id="gaa1d778afe396f2632ef5264bd1b14c98"></a>

<p>#define EMV_CTLS_INIT_VIRT_17   0x11000000</p>

virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_18 <a href="#ga1a354bb9694836510ee018f5931f069c" id="ga1a354bb9694836510ee018f5931f069c"></a>

<p>#define EMV_CTLS_INIT_VIRT_18   0x12000000</p>

virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_19 <a href="#gae86d8612e5020a7cee7dbad6c5ce64fd" id="gae86d8612e5020a7cee7dbad6c5ce64fd"></a>

<p>#define EMV_CTLS_INIT_VIRT_19   0x13000000</p>

virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_2 <a href="#gaf8723eb2256c0a2d4402be4659ca045c" id="gaf8723eb2256c0a2d4402be4659ca045c"></a>

<p>#define EMV_CTLS_INIT_VIRT_2   0x02000000</p>

virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_20 <a href="#ga350dfc6609aceaffcbc939cb757cbd07" id="ga350dfc6609aceaffcbc939cb757cbd07"></a>

<p>#define EMV_CTLS_INIT_VIRT_20   0x14000000</p>

virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_3 <a href="#gaddcaf201703c5f345f78f7e474bb6e22" id="gaddcaf201703c5f345f78f7e474bb6e22"></a>

<p>#define EMV_CTLS_INIT_VIRT_3   0x03000000</p>

virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_4 <a href="#gaf245b01f0e88212f340d0c7a2123096d" id="gaf245b01f0e88212f340d0c7a2123096d"></a>

<p>#define EMV_CTLS_INIT_VIRT_4   0x04000000</p>

virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_5 <a href="#ga778bbbacb5ba4f6a3bd26a266c0c59c2" id="ga778bbbacb5ba4f6a3bd26a266c0c59c2"></a>

<p>#define EMV_CTLS_INIT_VIRT_5   0x05000000</p>

virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_6 <a href="#ga754046a06b5b2b0fd62b8f877959b60a" id="ga754046a06b5b2b0fd62b8f877959b60a"></a>

<p>#define EMV_CTLS_INIT_VIRT_6   0x06000000</p>

virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_7 <a href="#ga8bde58f3198d4a34801ebabc78480187" id="ga8bde58f3198d4a34801ebabc78480187"></a>

<p>#define EMV_CTLS_INIT_VIRT_7   0x07000000</p>

virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_8 <a href="#gafb21c34991d487bfd51cacdb40dd10ee" id="gafb21c34991d487bfd51cacdb40dd10ee"></a>

<p>#define EMV_CTLS_INIT_VIRT_8   0x08000000</p>

virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X

## EMV_CTLS_INIT_VIRT_9 <a href="#ga81726cceb8c38cee3fdaefa948ae6356" id="ga81726cceb8c38cee3fdaefa948ae6356"></a>

<p>#define EMV_CTLS_INIT_VIRT_9   0x09000000</p>

virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X

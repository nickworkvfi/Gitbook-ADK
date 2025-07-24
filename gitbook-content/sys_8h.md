---
hidden: true
title: sys.h File Reference
---

[Data Structures](#nested-classes) \| [Macros](#define-members) \| [Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

This graph shows which files directly or indirectly include this file:

![](sys_8h__dep__incl.png)

<a href="sys_8h_source.md">Go to the source code of this file.</a>

|                 |                                    |
|-----------------|------------------------------------|
| Data Structures |                                    |
| struct          | [thread_data](#structthread__data) |

|  |  |
|----|----|
| Macros |  |
| #define  | [CLA_SYS](#af7805be6c0a1866a0810f2ffc5dfb2dc)   0x20 |
|   | Class for System commands. [More\...](#af7805be6c0a1866a0810f2ffc5dfb2dc)<br/> |
| #define  | [INS_SYS_SYNC_TURN_ON](#aea810192a402df0a33faa882ea076bc8)   0x00 |
|   | Turn On device. [More\...](#aea810192a402df0a33faa882ea076bc8)<br/> |
| #define  | [INS_SYS_TURN_OFF](#a88534d083ea20c7f0e05ede598f105d7)   0x01 |
|   | Turn Off device. [More\...](#a88534d083ea20c7f0e05ede598f105d7)<br/> |
| #define  | [INS_SYS_ABORT](#a9af1087d5ffa81a0f54d93d4c5235c51)   0x02 |
|   | Abort any command in progress. [More\...](#a9af1087d5ffa81a0f54d93d4c5235c51)<br/> |
| #define  | [INS_SYS_GET_CONFIG](#a1e2d090241dfcf12bba5d2e45b3d5f33)   0x03 |
|   | Get device configuration. [More\...](#a1e2d090241dfcf12bba5d2e45b3d5f33)<br/> |
| #define  | [INS_SYS_GET_STATUS](#a98553a2159921c6a4a5e84d933891b0c)   0x04 |
|   | Get device status info. [More\...](#a98553a2159921c6a4a5e84d933891b0c)<br/> |
| #define  | [INS_SYS_SELFTEST](#a2058048dd49ff37e7d14422cf5ffef74)   0x05 |
|   | Perform device selftest. [More\...](#a2058048dd49ff37e7d14422cf5ffef74)<br/> |
| #define  | [INS_SYS_LOCK_PAYMENT](#abd188cb21d2bf805c92a77ddae86eb37)   0x06 |
|   | Lock payment. [More\...](#abd188cb21d2bf805c92a77ddae86eb37)<br/> |
| #define  | [INS_SYS_SET_STATUS](#ac67f66838ed245959518c01ba263c077)   0x09 |
|   | Set device status info. [More\...](#ac67f66838ed245959518c01ba263c077)<br/> |
| #define  | [INS_SYS_AUTH](#ad96983ee0fea39cc2c2de536b01041e5)   0x11 |
|   | Request authentication of data. [More\...](#ad96983ee0fea39cc2c2de536b01041e5)<br/> |
| #define  | [INS_SYS_SET_IDLE_TEXT](#a4716584d8cc1ceb9913b81093b1eb0bb)   0x13 |
|   | Set the text displayed in the idle sceen (replaces the welcome text if set) [More\...](#a4716584d8cc1ceb9913b81093b1eb0bb)<br/> |
| #define  | [INS_SYS_SW_UPLOAD_START](#a3ed8b7fb7f077ce09888eeefd0e6ba30)   0x14 |
|   | Start a software upload. [More\...](#a3ed8b7fb7f077ce09888eeefd0e6ba30)<br/> |
| #define  | [INS_SYS_SW_UPLOAD_TRANSFER](#a586ae83176f7669aca82a81a762f6021)   0x15 |
|   | Transfer record data for software upload. [More\...](#a586ae83176f7669aca82a81a762f6021)<br/> |
| #define  | [INS_SYS_SW_UPLOAD_FINALIZE](#aab035bdcfd31ec20cede910f2dd11be4)   0x16 |
|   | Finalize a software upload. [More\...](#aab035bdcfd31ec20cede910f2dd11be4)<br/> |
| #define  | [INS_SYS_SHUTDOWN_REBOOT_SLEEP](#a3ab736555cafdb3b2edc7576a8fa090d)   0x17 |
|   | Shutdown, reboot or set the terminal to sleep. [More\...](#a3ab736555cafdb3b2edc7576a8fa090d)<br/> |
| #define  | [INS_SYS_MAC_SHOW_DESKTOP](#a556d381c46ef2c2e6a4839efb62286f7)   0x18 |
|   | Show the MAC desktop. [More\...](#a556d381c46ef2c2e6a4839efb62286f7)<br/> |
| #define  | [INS_SYS_SET_PROPERTY](#af8dac5fd1f8896a26d7a7c5045470a56)   0x19 |
|   | Serialized <a href="namespacevfisysinfo.md#a377307b06ac969f30af51e7cccf94dbb">sysSetPropertyInt()</a>/sysSetPropertyString() command. [More\...](#af8dac5fd1f8896a26d7a7c5045470a56)<br/> |
| #define  | [INS_SYS_GET_PROPERTY](#a1f14950b662d9c0e92ff8bc514e2cec7)   0x1A |
|   | Serialized <a href="namespacevfisysinfo.md#ab94a5b33000760afbee10e7fefd16355">sysGetPropertyInt()</a>/sysGetPropertyString() command. [More\...](#a1f14950b662d9c0e92ff8bc514e2cec7)<br/> |
| #define  | [INS_SYS_INSTALL_SPONSOR_CERT](#a183b9d13fdd951745876c62e4e9f36cb)   0x1B |
|   | Check and Install Sponsor Cert. [More\...](#a183b9d13fdd951745876c62e4e9f36cb)<br/> |
| #define  | [INS_SYS_GET_VERSION_INFO](#ae6edcfe0f7e81b59e5716fe53053fd86)   0x1C |
|   | Get version info of SDI components. [More\...](#ae6edcfe0f7e81b59e5716fe53053fd86)<br/> |
| #define  | [INS_SYS_CHECK_FOR_UPDATE](#a5b39f9b83e478aae444085ed9965f7de)   0x1D |
|   | Check for updates. [More\...](#a5b39f9b83e478aae444085ed9965f7de)<br/> |
| #define  | [INS_SYS_SW_GET_LAST_INSTALL_ERROR](#a3270a127f531045f7684ef1347020658)   0x1E |
|   | Get last install error from secure installer and reset. [More\...](#a3270a127f531045f7684ef1347020658)<br/> |
| #define  | [INS_SYS_EXT_BUTTON](#ac05d62b099d61b2dc58ba436a2d83a64)   0x20 |
|   | External button was pressed. [More\...](#ac05d62b099d61b2dc58ba436a2d83a64)<br/> |
| #define  | [INS_SYS_EPP_ENABLE](#a5a3270374de9c98314ce16b41c1b2a87)   0x21 |
|   | Enable/Disable EPP. [More\...](#a5a3270374de9c98314ce16b41c1b2a87)<br/> |
| #define  | [INS_SYS_FACTORY_RESET](#aadd77f7ec4c84183e9f11979d6cc14ef)   0x22 |
|   | Factory Reset. [More\...](#aadd77f7ec4c84183e9f11979d6cc14ef)<br/> |
| #define  | [INS_SYS_READ_CERTIFICATE](#a52291f320dbd3b054203375b5bf368dd)   0x23 |
|   | Read Certificate. [More\...](#a52291f320dbd3b054203375b5bf368dd)<br/> |
| #define  | [INS_SYS_FORCE_CURR_ABBR](#afba0f2e965faeae316893bbfb1871746)   0x24 |
|   | Force Currency Abbreviation. [More\...](#afba0f2e965faeae316893bbfb1871746)<br/> |
| #define  | [MAX_OUT_MSG_SIZE_A](#a535a37cbfd7f58dd8f5dbdb69ababfd9)   0xFFF0 |
| #define  | [MAX_OUT_MSG_SIZE_B_C_D](#a0a4d3755c2b2df8a7d65e91e847f3f0b)   0xFFFF |
| #define  | [MIN](#a3acffbd305ee72dcd4593c0d8af64a4f)(a, b)   ((a)\<(b)?(a):(b)) |

|  |  |
|----|----|
| Typedefs |  |
| typedef struct [thread_data](#structthread__data)  | [Thread_Data](#a180fda2fed413013609591e0b565b8e8) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [ExtserverResult](#a0ee277aec4317de742cf8b2bd40af3a9) {<br/>  [RESULT_OK](#a0ee277aec4317de742cf8b2bd40af3a9a818c541216b4ca0e29b7885495a46ad2) = 0, [RESULT_FAIL](#a0ee277aec4317de742cf8b2bd40af3a9adbaa15b6c3bcc0196b4b314fac50e36c) = -1, [RESULT_TIMEOUT](#a0ee277aec4317de742cf8b2bd40af3a9ad02c8491b0eab6eab286a00466993805) = -2, [RESULT_USER_CANCEL](#a0ee277aec4317de742cf8b2bd40af3a9ae9a95470ffa907b24be20927bd6b6524) = -3,<br/>  [RESULT_MOBILE_ABORT](#a0ee277aec4317de742cf8b2bd40af3a9ae0fc559eeb55b5d25b1e3dad4877f02a) = -4, [RESULT_NO_LINK](#a0ee277aec4317de742cf8b2bd40af3a9abb0279cf3581b071df7f16d126c87477) = -5, [RESULT_CLEAR_BUTTON](#a0ee277aec4317de742cf8b2bd40af3a9ae3422d8a18a394540cab891cb3b59b78) = -6, [RESULT_DATA_AVAILABLE](#a0ee277aec4317de742cf8b2bd40af3a9a54ebd26ad0cc26331ce3189908bc1866) = -7,<br/>  [RESULT_EXCESSIVE_PIN_REQUESTS](#a0ee277aec4317de742cf8b2bd40af3a9ab7791209b54a1f594110c871500ac7cc) = -8, [RESULT_TAG_ERROR](#a0ee277aec4317de742cf8b2bd40af3a9a98a7e70df73757a57d668cea47b6e058) = -9, [RESULT_TAG_LENGTH_ERROR](#a0ee277aec4317de742cf8b2bd40af3a9a9b341401cd6686c61d31b0ab76fd3ef1) = -10, [RESULT_PARAMETER_ERROR](#a0ee277aec4317de742cf8b2bd40af3a9abdddee10f743a36a524e311669116326) = -11,<br/>  [RESULT_INTERCHAR_TIMEOUT](#a0ee277aec4317de742cf8b2bd40af3a9aeaabb76b9cc0decb0985ea5797440b88) = -12, [RESULT_LOGIC_ERROR](#a0ee277aec4317de742cf8b2bd40af3a9a112f04f754eb9b75ffc9852d4c0fb156) = -13<br/>} |
| enum   | [UploadType](#a6cd49ae0288c8ad7e57768049b88e2c0) {<br/>  [UPLOAD_TYPE_SOFTWARE_UPDATE](#a6cd49ae0288c8ad7e57768049b88e2c0a7bf67041c45c44d425c383a7ebcdfe46), [UPLOAD_TYPE_CONFIG_WHITELIST](#a6cd49ae0288c8ad7e57768049b88e2c0a34f5269aab5031c2734b5adc6680497e), [UPLOAD_TYPE_CONFIG_SENSITIVE_TAGS](#a6cd49ae0288c8ad7e57768049b88e2c0a2673e19024e6247e70a2af83476dde43), [UPLOAD_TYPE_CONFIG_CARD_RANGES](#a6cd49ae0288c8ad7e57768049b88e2c0a81fd3b513fd362d89e3aa7694b8da5ba),<br/>  [UPLOAD_TYPE_FIRMWARE_UPDATE](#a6cd49ae0288c8ad7e57768049b88e2c0a7ea1f2e7950b794e9cb1937237ad67af), [UPLOAD_TYPE_KEYS](#a6cd49ae0288c8ad7e57768049b88e2c0a45cf0bd2cd8c067e00540e4eeb5cf688), [UPLOAD_TYPE_CONFIG_SDIEMV](#a6cd49ae0288c8ad7e57768049b88e2c0a794564e38d5b307089756bf59d4cefa9), [UPLOAD_TYPE_REMOVE_SPONSOR](#a6cd49ae0288c8ad7e57768049b88e2c0ac0b55fa237e2c9e6404a01ddaa64e114),<br/>  [UPLOAD_TYPE_REMOVE_CONFIG_SDIEMV](#a6cd49ae0288c8ad7e57768049b88e2c0a41e05b1531d19de605151972bfd31bec), [UPLOAD_TYPE_PLUGIN](#a6cd49ae0288c8ad7e57768049b88e2c0a0e250606f2be91f748221a82209ead8a), [UPLOAD_TYPE_REMOVE_PLUGIN](#a6cd49ae0288c8ad7e57768049b88e2c0affd345175d249f8c98f96e0ee0d19c17), [UPLOAD_TYPE_CP_PACKAGE](#a6cd49ae0288c8ad7e57768049b88e2c0a87320aad5379f54e7385ba48e735b3e2),<br/>  [UPLOAD_TYPE_EMV_CONFIG_PACKAGE](#a6cd49ae0288c8ad7e57768049b88e2c0a538ea2e0f3f71bc276c0d87787edf922), [UPLOAD_TYPE_UVRK_PACKAGE](#a6cd49ae0288c8ad7e57768049b88e2c0a90968c682bc475511600bccf72633511), [UPLOAD_TYPE_MAX](#a6cd49ae0288c8ad7e57768049b88e2c0a51246b9edc5cc59323c993619584e692)<br/>} |
| enum   | [IdleScreenMode](#acdffce6b62c4db2a50dd9cdae6caba78) { [Idle_Normal](#acdffce6b62c4db2a50dd9cdae6caba78abe85fe1a66041bcdd883413a79606363) = 0, [Idle_MenuEnabled](#acdffce6b62c4db2a50dd9cdae6caba78a18fc0e990d0fa8795a191a2a03b9ef64) = 1, [Idle_WaitLogo](#acdffce6b62c4db2a50dd9cdae6caba78a6bc06fe4ebc2a6b6d3e76ea084f42710) = 2, [Idle_NoAdminMode](#acdffce6b62c4db2a50dd9cdae6caba78a2ddddb450f003d9d854201353a3cd4b6) = 4 } |
| enum   | [IdleLockType](#acbca865bf1cc550151c765b4bb11dc7e) { [ILT_NoLock](#acbca865bf1cc550151c765b4bb11dc7ea78d433f6f876bbc24a90dbccae665624) = 0, [ILT_ApiLock](#acbca865bf1cc550151c765b4bb11dc7ea952eed5112fd85859a0bd8ecd62b9647) = 1, [ILT_AdminLock](#acbca865bf1cc550151c765b4bb11dc7ea0af1ff86e1129d6f7f9ad06a68a7b104) = 2 } |

|  |  |
|----|----|
| Functions |  |
| bool  | [handleSystemCmd](#afe8ab8c8d592d69c0b6d074f03081d3e) (unsigned long msgBufSize, unsigned char \*msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char \*rsp, unsigned short \*rspSize) |
| int  | [check4Interrupt](#af8ff9f4a2125f866eda540eaf867197b) (void) |
| void  | [setInterrupt](#a86502db8f28fe31f7ee0266a97ee156a) (enum [ExtserverResult](#a0ee277aec4317de742cf8b2bd40af3a9) reason) |
| int  | [isCardRemoved](#a43801947261b861981e5f2c52e878fa0) (void) |
| const char \*  | [errText](#ae05a33a2f7e55688d36a0692fc795ffe) (int err) |
| void  | [setDevice2Idle](#ac28a8edfbaded7c71c0e249ae70aba3b) (void) |
| void  | [sysDisplayIdleScreen](#ad2bc24707c477aa4c2cb1c4fb92855df) (unsigned mode=[Idle_Normal](#acdffce6b62c4db2a50dd9cdae6caba78abe85fe1a66041bcdd883413a79606363), const char \*idletext=0) |
| bool  | [sysSetIdleScreenFinished](#a02ab2d39fc437b5924aed122a8adb57e) (unsigned long id) |
| void  | [sysSetIdleScreenAdminMenu](#af85581548b99a07d923feb33e0297b5c) (bool on) |
| bool  | [sysSetIdleScreenLocked](#af0f2a2ccba88c6c9f0ee759172febaa0) (bool lock=true, bool update_screen=true) |
| enum [IdleLockType](#acbca865bf1cc550151c765b4bb11dc7e)  | [sysGetIdleScreenLocked](#af826b34d72f2718baf08d472448063bd) () |
| void  | [setSW1SW2](#a2b1e62cbba20fe441f74365bab09c22c) (int result, unsigned char \*rsp) |
| bool  | [sys_internal_android](#a914eb0ad5b455073caeed46e742f3cd2) () |
| bool  | [vos_sys8](#a7109ff8195a9046828f8120509022d76) () |
| bool  | [checkBundleInstalled](#a3aeb676c0c19ca74396503eb1267f979) (const char \*bdlname) |
| bool  | [isHwModelName](#aadbe3a6553fce242b52a2655173897fe) (const char \*targetHwModelName) |
| void  | [sysResetUpdateContext](#a6777013b116ca3f41fc511143671ef8e) (void \*handle) |

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## thread_data <a href="#structthread__data" id="structthread__data"></a>

<p>struct thread_data</p>

| Data Fields   |               |     |
|---------------|---------------|-----|
| void \*       | addThreadData |     |
| char \*       | cmdData       |     |
| unsigned long | cmdSize       |     |
| int           | taskId        |     |

## MacroDefinition Documentation {#macro-definition-documentation}

## CLA_SYS <a href="#af7805be6c0a1866a0810f2ffc5dfb2dc" id="af7805be6c0a1866a0810f2ffc5dfb2dc"></a>

<p>#define CLA_SYS   0x20</p>

Class for System commands.

## INS_SYS_ABORT <a href="#a9af1087d5ffa81a0f54d93d4c5235c51" id="a9af1087d5ffa81a0f54d93d4c5235c51"></a>

<p>#define INS_SYS_ABORT   0x02</p>

Abort any command in progress.

## INS_SYS_AUTH <a href="#ad96983ee0fea39cc2c2de536b01041e5" id="ad96983ee0fea39cc2c2de536b01041e5"></a>

<p>#define INS_SYS_AUTH   0x11</p>

Request authentication of data.

## INS_SYS_CHECK_FOR_UPDATE <a href="#a5b39f9b83e478aae444085ed9965f7de" id="a5b39f9b83e478aae444085ed9965f7de"></a>

<p>#define INS_SYS_CHECK_FOR_UPDATE   0x1D</p>

Check for updates.

## INS_SYS_EPP_ENABLE <a href="#a5a3270374de9c98314ce16b41c1b2a87" id="a5a3270374de9c98314ce16b41c1b2a87"></a>

<p>#define INS_SYS_EPP_ENABLE   0x21</p>

Enable/Disable EPP.

## INS_SYS_EXT_BUTTON <a href="#ac05d62b099d61b2dc58ba436a2d83a64" id="ac05d62b099d61b2dc58ba436a2d83a64"></a>

<p>#define INS_SYS_EXT_BUTTON   0x20</p>

External button was pressed.

## INS_SYS_FACTORY_RESET <a href="#aadd77f7ec4c84183e9f11979d6cc14ef" id="aadd77f7ec4c84183e9f11979d6cc14ef"></a>

<p>#define INS_SYS_FACTORY_RESET   0x22</p>

Factory Reset.

## INS_SYS_FORCE_CURR_ABBR <a href="#afba0f2e965faeae316893bbfb1871746" id="afba0f2e965faeae316893bbfb1871746"></a>

<p>#define INS_SYS_FORCE_CURR_ABBR   0x24</p>

Force Currency Abbreviation.

## INS_SYS_GET_CONFIG <a href="#a1e2d090241dfcf12bba5d2e45b3d5f33" id="a1e2d090241dfcf12bba5d2e45b3d5f33"></a>

<p>#define INS_SYS_GET_CONFIG   0x03</p>

Get device configuration.

## INS_SYS_GET_PROPERTY <a href="#a1f14950b662d9c0e92ff8bc514e2cec7" id="a1f14950b662d9c0e92ff8bc514e2cec7"></a>

<p>#define INS_SYS_GET_PROPERTY   0x1A</p>

Serialized <a href="namespacevfisysinfo.md#ab94a5b33000760afbee10e7fefd16355">sysGetPropertyInt()</a>/sysGetPropertyString() command.

## INS_SYS_GET_STATUS <a href="#a98553a2159921c6a4a5e84d933891b0c" id="a98553a2159921c6a4a5e84d933891b0c"></a>

<p>#define INS_SYS_GET_STATUS   0x04</p>

Get device status info.

## INS_SYS_GET_VERSION_INFO <a href="#ae6edcfe0f7e81b59e5716fe53053fd86" id="ae6edcfe0f7e81b59e5716fe53053fd86"></a>

<p>#define INS_SYS_GET_VERSION_INFO   0x1C</p>

Get version info of SDI components.

## INS_SYS_INSTALL_SPONSOR_CERT <a href="#a183b9d13fdd951745876c62e4e9f36cb" id="a183b9d13fdd951745876c62e4e9f36cb"></a>

<p>#define INS_SYS_INSTALL_SPONSOR_CERT   0x1B</p>

Check and Install Sponsor Cert.

## INS_SYS_LOCK_PAYMENT <a href="#abd188cb21d2bf805c92a77ddae86eb37" id="abd188cb21d2bf805c92a77ddae86eb37"></a>

<p>#define INS_SYS_LOCK_PAYMENT   0x06</p>

Lock payment.

## INS_SYS_MAC_SHOW_DESKTOP <a href="#a556d381c46ef2c2e6a4839efb62286f7" id="a556d381c46ef2c2e6a4839efb62286f7"></a>

<p>#define INS_SYS_MAC_SHOW_DESKTOP   0x18</p>

Show the MAC desktop.

## INS_SYS_READ_CERTIFICATE <a href="#a52291f320dbd3b054203375b5bf368dd" id="a52291f320dbd3b054203375b5bf368dd"></a>

<p>#define INS_SYS_READ_CERTIFICATE   0x23</p>

Read Certificate.

## INS_SYS_SELFTEST <a href="#a2058048dd49ff37e7d14422cf5ffef74" id="a2058048dd49ff37e7d14422cf5ffef74"></a>

<p>#define INS_SYS_SELFTEST   0x05</p>

Perform device selftest.

## INS_SYS_SET_IDLE_TEXT <a href="#a4716584d8cc1ceb9913b81093b1eb0bb" id="a4716584d8cc1ceb9913b81093b1eb0bb"></a>

<p>#define INS_SYS_SET_IDLE_TEXT   0x13</p>

Set the text displayed in the idle sceen (replaces the welcome text if set)

## INS_SYS_SET_PROPERTY <a href="#af8dac5fd1f8896a26d7a7c5045470a56" id="af8dac5fd1f8896a26d7a7c5045470a56"></a>

<p>#define INS_SYS_SET_PROPERTY   0x19</p>

Serialized <a href="namespacevfisysinfo.md#a377307b06ac969f30af51e7cccf94dbb">sysSetPropertyInt()</a>/sysSetPropertyString() command.

## INS_SYS_SET_STATUS <a href="#ac67f66838ed245959518c01ba263c077" id="ac67f66838ed245959518c01ba263c077"></a>

<p>#define INS_SYS_SET_STATUS   0x09</p>

Set device status info.

## INS_SYS_SHUTDOWN_REBOOT_SLEEP <a href="#a3ab736555cafdb3b2edc7576a8fa090d" id="a3ab736555cafdb3b2edc7576a8fa090d"></a>

<p>#define INS_SYS_SHUTDOWN_REBOOT_SLEEP   0x17</p>

Shutdown, reboot or set the terminal to sleep.

## INS_SYS_SW_GET_LAST_INSTALL_ERROR <a href="#a3270a127f531045f7684ef1347020658" id="a3270a127f531045f7684ef1347020658"></a>

<p>#define INS_SYS_SW_GET_LAST_INSTALL_ERROR   0x1E</p>

Get last install error from secure installer and reset.

## INS_SYS_SW_UPLOAD_FINALIZE <a href="#aab035bdcfd31ec20cede910f2dd11be4" id="aab035bdcfd31ec20cede910f2dd11be4"></a>

<p>#define INS_SYS_SW_UPLOAD_FINALIZE   0x16</p>

Finalize a software upload.

## INS_SYS_SW_UPLOAD_START <a href="#a3ed8b7fb7f077ce09888eeefd0e6ba30" id="a3ed8b7fb7f077ce09888eeefd0e6ba30"></a>

<p>#define INS_SYS_SW_UPLOAD_START   0x14</p>

Start a software upload.

## INS_SYS_SW_UPLOAD_TRANSFER <a href="#a586ae83176f7669aca82a81a762f6021" id="a586ae83176f7669aca82a81a762f6021"></a>

<p>#define INS_SYS_SW_UPLOAD_TRANSFER   0x15</p>

Transfer record data for software upload.

## INS_SYS_SYNC_TURN_ON <a href="#aea810192a402df0a33faa882ea076bc8" id="aea810192a402df0a33faa882ea076bc8"></a>

<p>#define INS_SYS_SYNC_TURN_ON   0x00</p>

Turn On device.

## INS_SYS_TURN_OFF <a href="#a88534d083ea20c7f0e05ede598f105d7" id="a88534d083ea20c7f0e05ede598f105d7"></a>

<p>#define INS_SYS_TURN_OFF   0x01</p>

Turn Off device.

## MAX_OUT_MSG_SIZE_A <a href="#a535a37cbfd7f58dd8f5dbdb69ababfd9" id="a535a37cbfd7f58dd8f5dbdb69ababfd9"></a>

<p>#define MAX_OUT_MSG_SIZE_A   0xFFF0</p>

## MAX_OUT_MSG_SIZE_B_C_D <a href="#a0a4d3755c2b2df8a7d65e91e847f3f0b" id="a0a4d3755c2b2df8a7d65e91e847f3f0b"></a>

<p>#define MAX_OUT_MSG_SIZE_B_C_D   0xFFFF</p>

## MIN <a href="#a3acffbd305ee72dcd4593c0d8af64a4f" id="a3acffbd305ee72dcd4593c0d8af64a4f"></a>

<p>#define MIN</p>

## TypedefDocumentation {#typedef-documentation}

## Thread_Data <a href="#a180fda2fed413013609591e0b565b8e8" id="a180fda2fed413013609591e0b565b8e8"></a>

<p>typedef struct [thread_data](#structthread__data) [Thread_Data](#a180fda2fed413013609591e0b565b8e8)</p>

## EnumerationType Documentation {#enumeration-type-documentation}

## ExtserverResult <a href="#a0ee277aec4317de742cf8b2bd40af3a9" id="a0ee277aec4317de742cf8b2bd40af3a9"></a>

<p>enum [ExtserverResult](#a0ee277aec4317de742cf8b2bd40af3a9)</p>

Internal Extserver Result Values

| Enumerator |  |
|----|----|
| RESULT_OK  | <p>No error</p> |
| RESULT_FAIL  | <p>Generic error</p> |
| RESULT_TIMEOUT  | <p>Timeout occurred</p> |
| RESULT_USER_CANCEL  | <p>User cancellation</p> |
| RESULT_MOBILE_ABORT  | <p>Abort from mobile device received</p> |
| RESULT_NO_LINK  | <p>Link to mobile device interrupted</p> |
| RESULT_CLEAR_BUTTON  | <p>clear button pressed</p> |
| RESULT_DATA_AVAILABLE  | <p>data available from slave device (e.g EPP)</p> |
| RESULT_EXCESSIVE_PIN_REQUESTS  | <p>Excessive PIN entry</p> |
| RESULT_TAG_ERROR  | <p>Tag error</p> |
| RESULT_TAG_LENGTH_ERROR  | <p>Tag length error</p> |
| RESULT_PARAMETER_ERROR  | <p>Parameter error</p> |
| RESULT_INTERCHAR_TIMEOUT  | <p>interchar timeout during input</p> |
| RESULT_LOGIC_ERROR  | <p>Logic error (e.g. wrong command order)</p> |

## IdleLockType <a href="#acbca865bf1cc550151c765b4bb11dc7e" id="acbca865bf1cc550151c765b4bb11dc7e"></a>

<p>enum [IdleLockType](#acbca865bf1cc550151c765b4bb11dc7e)</p>

| Enumerator |  |
|----|----|
| ILT_NoLock  | <p>idle screen recently not locked</p> |
| ILT_ApiLock  | <p>idle screen locked by [sysSetIdleScreenLocked()](#af0f2a2ccba88c6c9f0ee759172febaa0)</p> |
| ILT_AdminLock  | <p>idle screen locked by admin mode</p> |

## IdleScreenMode <a href="#acdffce6b62c4db2a50dd9cdae6caba78" id="acdffce6b62c4db2a50dd9cdae6caba78"></a>

<p>enum [IdleScreenMode](#acdffce6b62c4db2a50dd9cdae6caba78)</p>

[TABLE]

## UploadType <a href="#a6cd49ae0288c8ad7e57768049b88e2c0" id="a6cd49ae0288c8ad7e57768049b88e2c0"></a>

<p>enum [UploadType](#a6cd49ae0288c8ad7e57768049b88e2c0)</p>

Types for sw/file upload command

| Enumerator |  |
|----|----|
| UPLOAD_TYPE_SOFTWARE_UPDATE  | <p>0: Software update with SW upload 20-14/20-15/20-16</p> |
| UPLOAD_TYPE_CONFIG_WHITELIST  | <p>1: Whitelist configuration: whitelist.json with SW upload 20-14/20-15/20-16</p> |
| UPLOAD_TYPE_CONFIG_SENSITIVE_TAGS  | <p>2: Sensitive tags configuration: sensitivetags.json with SW upload 20-14/20-15/20-16</p> |
| UPLOAD_TYPE_CONFIG_CARD_RANGES  | <p>3: Card ranges configuration: cardranges.json with SW upload 20-14/20-15/20-16</p> |
| UPLOAD_TYPE_FIRMWARE_UPDATE  | <p>4: Firmware update with check for update 20-1D</p> |
| UPLOAD_TYPE_KEYS  | <p>5: Install keys with check for update 20-1D</p> |
| UPLOAD_TYPE_CONFIG_SDIEMV  | <p>6: User configuration for SDI or EMV with check for update 20-1D</p> |
| UPLOAD_TYPE_REMOVE_SPONSOR  | <p>7: Remove sponsor certificates with check for update 20-1D</p> |
| UPLOAD_TYPE_REMOVE_CONFIG_SDIEMV  | <p>8: Remove user configuration for SDI or EMV with check for update 20-1D</p> |
| UPLOAD_TYPE_PLUGIN  | <p>9: Install SDI plugin(s) with check for update 20-1D</p> |
| UPLOAD_TYPE_REMOVE_PLUGIN  | <p>10: Remove SDI plugin(s) with check for update 20-1D</p> |
| UPLOAD_TYPE_CP_PACKAGE  | <p>11: Install commerce platform package with SW upload 20-14/20-15/20-16</p> |
| UPLOAD_TYPE_EMV_CONFIG_PACKAGE  | <p>12: Install EMV config package with SW upload 20-14/20-15/20-16</p> |
| UPLOAD_TYPE_UVRK_PACKAGE  | <p>13: Install UVRK package with SW upload 20-14/20-15/20-16. tar file \*.uvrk.tar with flat files of \*.vrk2.json.</p> |
| UPLOAD_TYPE_MAX  | <p>!!! Must be the last entry, please insert before !!\!</p> |

## FunctionDocumentation {#function-documentation}

## check4Interrupt() <a href="#af8ff9f4a2125f866eda540eaf867197b" id="af8ff9f4a2125f866eda540eaf867197b"></a>

<p>int check4Interrupt</p>

Check if a SysAbort command is received or a Link interruption occurred

### Returns

RESULT_MOBILE_ABORT if a SysAbort is received, RESULT_NO_LINK in case of link interrupt, else RESULT_OK

## checkBundleInstalled() <a href="#a3aeb676c0c19ca74396503eb1267f979" id="a3aeb676c0c19ca74396503eb1267f979"></a>

<p>bool checkBundleInstalled</p>

check for installed bundle with name `bdlname`. String `bdlname` can be a regular expression.

**Parameters**

\[in\] **bdlname** name of the bundle (or regex)

### Returns

true if the bundle is installed, false in case that `bdlname` does not match an installed bundle


{% hint style="info" %}
This function works for VOS/VOS2 only. If invoked on other platforms it returns always false.
{% endhint %}

## errText() <a href="#ae05a33a2f7e55688d36a0692fc795ffe" id="ae05a33a2f7e55688d36a0692fc795ffe"></a>

<p>const char\* errText</p>

Return C-String of error ExtserverResult

### Returns

C-String with error name, \"UNKNOWN\" for unknown error codes

## handleSystemCmd() <a href="#afe8ab8c8d592d69c0b6d074f03081d3e" id="afe8ab8c8d592d69c0b6d074f03081d3e"></a>

<p>bool handleSystemCmd</p>

Dispatch function to handle different system commands

**Parameters**

\[in\] **msgBufSize** size of the input message buffer \[in\] **msg** pointer to the input message buffer \[in\] **msgSize** size of the input message \[in\] **rspBufSize** maximum size of the response buffer \[in,out\] **rsp** pointer to the response buffer \[in,out\] **rspSize** pointer to the response message size

### Returns

true if command was executed and rsp contains a response, false in case invocation is not allowed by a side command.

## isCardRemoved() <a href="#a43801947261b861981e5f2c52e878fa0" id="a43801947261b861981e5f2c52e878fa0"></a>

<p>int isCardRemoved</p>

Check if a Chip Card is removed

### Returns

0 = Card inserted, 1 = Card removed

## isHwModelName() <a href="#aadbe3a6553fce242b52a2655173897fe" id="aadbe3a6553fce242b52a2655173897fe"></a>

<p>bool isHwModelName</p>

Check the Hardware Model Name of the device

**Parameters**

\[in\] **targetHwModelName** target Hardware Model Name

### Returns

true if the Hardware Model Name matches, false if the Hardware Model Name doesn\'t match

## setDevice2Idle() <a href="#ac28a8edfbaded7c71c0e249ae70aba3b" id="ac28a8edfbaded7c71c0e249ae70aba3b"></a>

<p>void setDevice2Idle</p>

Set the device into idle mode

## setInterrupt() <a href="#a86502db8f28fe31f7ee0266a97ee156a" id="a86502db8f28fe31f7ee0266a97ee156a"></a>

<p>void setInterrupt</p>

Make the check4Interrupt return not RESULT_OK once.

## setSW1SW2() <a href="#a2b1e62cbba20fe441f74365bab09c22c" id="a2b1e62cbba20fe441f74365bab09c22c"></a>

<p>void setSW1SW2</p>

Map result to SW1/SW2

**Parameters**

\[in\] **result** SDI result code \[in,out\] **rsp** pointer to the response buffer

## sys_internal_android() <a href="#a914eb0ad5b455073caeed46e742f3cd2" id="a914eb0ad5b455073caeed46e742f3cd2"></a>

<p>bool sys_internal_android</p>

checks for device types, which run SDI server on Engage and the payment application on the internal Android device. A special internal network is used to connect both devices. Recently these are CM5, M440 and M424. Others like X10 or X8 shall not match, since payment application runs on Engage here.

### Returns

true for internal android with payment application

## sysDisplayIdleScreen() <a href="#ad2bc24707c477aa4c2cb1c4fb92855df" id="ad2bc24707c477aa4c2cb1c4fb92855df"></a>

<p>void sysDisplayIdleScreen</p>

Display idle screen

**Parameters**

\[in\] **mode** idle screen mode bit mask, see enum IdleScreenMode \[in\] **idletext** optional text used in favor of standard or customer text

## sysGetIdleScreenLocked() <a href="#af826b34d72f2718baf08d472448063bd" id="af826b34d72f2718baf08d472448063bd"></a>

<p>enum [IdleLockType](#acbca865bf1cc550151c765b4bb11dc7e) sysGetIdleScreenLocked</p>

Returns true, if idle screen was locked either by [sysSetIdleScreenLocked()](#af0f2a2ccba88c6c9f0ee759172febaa0) or admin mode w/o admin menu was turned on by [sysSetIdleScreenAdminMenu()](#af85581548b99a07d923feb33e0297b5c)

### Returns

true, if idle screen is locked, else false

## sysResetUpdateContext() <a href="#a6777013b116ca3f41fc511143671ef8e" id="a6777013b116ca3f41fc511143671ef8e"></a>

<p>void sysResetUpdateContext</p>

Reset update context allocated for SW update with 20-14, 20-15, 20-16. The function is invoked by a thread at connection termination to abort a pending update which was started by command 20-14, but not completed with 20-15 and 20-16. SDI server supports multiple connections, which can use the update interface. With a started update with command 20-14 on one connection, the interface is locked for other connections. If a connection terminates, which obtains the update context (lock), the interface would be unaccessable for other connections. Therfore, this function will abort the started update and unlock the update interface, if the connection disturbes so that it can be used by other connection again.

**Parameters**

\[in\] **handle** handle of the terminating connection

## sysSetIdleScreenAdminMenu() <a href="#af85581548b99a07d923feb33e0297b5c" id="af85581548b99a07d923feb33e0297b5c"></a>

<p>void sysSetIdleScreenAdminMenu</p>

Turn on the admin menu, if this was locked by admin mode (enabled by config). Next call of [sysDisplayIdleScreen()](#ad2bc24707c477aa4c2cb1c4fb92855df) with mode Idle_MenuEnabled then will display idle screen with menu/info softkey/keyhelpers.

{% hint style="info" %}
This function has no effect, if admin mode is disabled (not enabled by config).
{% endhint %}

## sysSetIdleScreenFinished() <a href="#a02ab2d39fc437b5924aed122a8adb57e" id="a02ab2d39fc437b5924aed122a8adb57e"></a>

<p>bool sysSetIdleScreenFinished</p>

Function called by idlescreen callback to signal the return of idlescreen

**Parameters**

\[in\] **id** idlescreen ID forwarded by idlescreen callback

### Returns

true, if the last idle screen has display the admin menu, (for active admin mode) else false is returned.

## sysSetIdleScreenLocked() <a href="#af0f2a2ccba88c6c9f0ee759172febaa0" id="af0f2a2ccba88c6c9f0ee759172febaa0"></a>

<p>bool sysSetIdleScreenLocked</p>

Lock/Unlock the idle screen and disable/enable softkeys/keyhelpers to access the menu. If locked, further subsequent calls of [`sysDisplayIdleScreen()`](#ad2bc24707c477aa4c2cb1c4fb92855df) with mode `Idle_MenuEnabled` are suppressed and idle screen is displayed without softkeys/keyhelpers. Parameter `update_screen` (set to true) will replace an existing idle screen by a default idle screen by invoking function [sysDisplayIdleScreen()](#ad2bc24707c477aa4c2cb1c4fb92855df) with or without option Idle_MenuEnabled depending on the new lock state `lock`.

**Parameters**

**lock** new lock state: true/false to lock/unlock the idle screen **update_screen** update an existing idle screen and enable/disable menu according new lock state

### Returns

old lock state (before this function was called): true, if the idlescreen was already locked false, if the idlescreen was already unlocked


{% hint style="info" %}
This function does nothing, if SDI admin mode was enabled by configuration. The admin mode defines another behavior for locking the idle screen (e.g. it must be always unlocked by key combination or touch. Thus, internal calls of this function, will be ignored
{% endhint %}

## vos_sys8() <a href="#a7109ff8195a9046828f8120509022d76" id="a7109ff8195a9046828f8120509022d76"></a>

<p>bool vos_sys8</p>

returns true, if SDI server runs on V/OS as system user sys8

### Returns

true if running as sys8 user

---
hidden: true
title: vfimac Namespace ReferenceMulti Application Controller functions
---

[Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Typedefs |  |
| typedef void(\*  | [macEventCallback](#aa740ccdb24bc2dad5717ef65e33b0a24)) ([macEvent](#a3bc43cdb5f4033e625bb6dc7e1579d4b) event, const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &json) |
| typedef void(\*  | [macNotificationCallback](#ad2df18eb227eae3f9524fa9031c92d4a)) ([macNotifications](#aabd24d8a0b08ebc6a6da2c43b0ae2d9b) notification) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [macError](#a343256ae5f150542a1f6a38fcaca216c) {<br/>  [MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) = 0, [MAC_ERR_FAIL](#a343256ae5f150542a1f6a38fcaca216cab6a630bc98f5fcfa5a70e994171e514a) = -1, [MAC_ERR_UNSUPPORTED](#a343256ae5f150542a1f6a38fcaca216ca3fe164f68d4f87b4e82dc481ea0516f6) = -2, [MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) = -3,<br/>  [MAC_ERR_TIMEOUT](#a343256ae5f150542a1f6a38fcaca216caaad631494e81b88687cb7a360f623524) = -4, [MAC_ERR_LIBNOTIFY](#a343256ae5f150542a1f6a38fcaca216ca48bc15eb2d9bc14d089714e680ec462f) = -5, [MAC_ERR_APP_NOT_RUNNING](#a343256ae5f150542a1f6a38fcaca216ca2b3e6bb894a825d49a856f7d78fbaace) = -6, [MAC_ERR_WRONG_APPID](#a343256ae5f150542a1f6a38fcaca216ca6bc9cec21645bb6cc7dedc85598ad726) = -7,<br/>  [MAC_ERR_NOT_CP_APP](#a343256ae5f150542a1f6a38fcaca216ca13ecf9a9db7593cabe3ca09c3496c17b) = -8, [MAC_ERR_UNKNOWN](#a343256ae5f150542a1f6a38fcaca216ca95e3d004d001f47819fc6899a3f3c534) = -9, [MAC_ERR_CYCLE](#a343256ae5f150542a1f6a38fcaca216ca388507f8c281d588adfecda0ea957dae) = -10, [MAC_ERR_DEPENDS](#a343256ae5f150542a1f6a38fcaca216caeb1198ea1741ae185ba82873527fc923) = -11,<br/>  [MAC_ERR_MANIFEST](#a343256ae5f150542a1f6a38fcaca216cada88f95b27c2d275512fe15b4c54c2dd) = -12, [MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) = -13, [MAC_ERR_NO_APP](#a343256ae5f150542a1f6a38fcaca216ca0514be0a87ce110f34cd00b756520654) = -14, [MAC_ERR_READY](#a343256ae5f150542a1f6a38fcaca216caeb10ef35a775f680b9576a0696c2c2de) = -15,<br/>  [MAC_ERR_ACTIVE](#a343256ae5f150542a1f6a38fcaca216cab1f9a71117ad2514a34c858c5cb47578) = -16, [MAC_ERR_STOP](#a343256ae5f150542a1f6a38fcaca216ca7f94b5307c9aaa494682cb4a3a8f2e0d) = -17, [MAC_ERR_NO_APPID](#a343256ae5f150542a1f6a38fcaca216ca9bb50ccba3958e9b7fda61d3ac05534c) = -18, [MAC_ERR_PERMISSION](#a343256ae5f150542a1f6a38fcaca216cad3bee99511a15c87676dd9f453ac02fb) = -19,<br/>  [MAC_ERR_SERVICE](#a343256ae5f150542a1f6a38fcaca216ca12b59c43d38429cdcaeaa7b45461930c) = -20, [MAC_ERR_VISIBLE](#a343256ae5f150542a1f6a38fcaca216ca0ed934fa7a34568e74061ef14dfe3958) = -21, [MAC_ERR_DISABLED](#a343256ae5f150542a1f6a38fcaca216caf0bdc46094bdcbb96d29c4a145e2fd33) = -22, [MAC_ERR_LAUNCH](#a343256ae5f150542a1f6a38fcaca216ca5237e9b1351d2f63ae61112253bbfc16) = -23,<br/>  [MAC_ERR_RUNNING](#a343256ae5f150542a1f6a38fcaca216cac8482ef81b09dd82e6d99dc35396e52c) = -24, [MAC_ERR_LAYOUT](#a343256ae5f150542a1f6a38fcaca216cad71447e193322aa3defb1b6cdc6f6d5e) = -25, [MAC_ERR_PARAMETER](#a343256ae5f150542a1f6a38fcaca216ca75777560e490e9383775482ac3bc245d) = -26, [MAC_ERR_IGNORE](#a343256ae5f150542a1f6a38fcaca216ca8648e53c152517be3dcebfdfb17edb97) = -27,<br/>  [MAC_ERR_CANCELED](#a343256ae5f150542a1f6a38fcaca216ca495bae09e1bc1aa9559aa0f7ec8668c0) = -28, [MAC_ERR_EXISTS](#a343256ae5f150542a1f6a38fcaca216cab4d8f261fbe38564274fbf83af83c640) = -29, [MAC_ERR_NO_KEYS](#a343256ae5f150542a1f6a38fcaca216cac704a12dc011b3831433799ec080ee1d) = -30, [MAC_ERR_EXPECTED_KEYS](#a343256ae5f150542a1f6a38fcaca216caa6268efb5a8546b5d46e3bb0e553177a) = -31,<br/>  [MAC_ERR_ACCESS](#a343256ae5f150542a1f6a38fcaca216cafb7c2c54548ff09323602f8a6376fd01) = -32, [MAC_ERR_AVAILIBLE](#a343256ae5f150542a1f6a38fcaca216ca0d00af9e30df42f5d7c593092ae546eb) = -33, [MAC_ERR_CPR_DISABLED](#a343256ae5f150542a1f6a38fcaca216cad1f788f290b62d4889261290c009f40a) = -35<br/>} |
| enum   | [macLaunchParams](#a3d1d0138ae66b9a9e03ae518de7ecf63) { [NONE](#a3d1d0138ae66b9a9e03ae518de7ecf63ac157bdf0b85a40d2619cbc8bc1ae5fe2) = 0, [KEEP_IN_BACKGROUND](#a3d1d0138ae66b9a9e03ae518de7ecf63a365b0d10413f98eb889815324f8baa8c) = 1 } |
| enum   | [macKeyboard](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5f) {<br/>  [MAC_KBD_OFF](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5fadbb3aeb300a8742e67f13bf86222792c) = (0\<\<0), [MAC_KBD_ON](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5fa55c180fc86b4f765cabde2dd43046205) = (1\<\<0), [MAC_KBD_AUTO](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5fa1897eb426573ca469062c0af6ffe0db2) = (1\<\<1), [MAC_KBD_NUMERIC](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5fa70f8a1ce4507a2faab7727edee56f25b) = (1\<\<2),<br/>  [MAC_KBD_ALPHANUMERIC](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5faacf7fd09da851474c48e57ae2b9246d5) = (1\<\<3), [MAC_KBD_CAPITALIZED](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5fad6499892dc5c2341c9a29774e4a5b8ae) = (1\<\<4), [MAC_KBD_LAST](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5fa07083975a8682e89077a7d12fbad382d) = (1\<\<5)<br/>} |
| enum   | [macEvent](#a3bc43cdb5f4033e625bb6dc7e1579d4b) {<br/>  [EVENT_NONE](#a3bc43cdb5f4033e625bb6dc7e1579d4ba939a6cc6d749a232a23ff324dca6d48c) = 0, [EVENT_MANIFEST_UPDATE](#a3bc43cdb5f4033e625bb6dc7e1579d4baa4bcbb24c61f7b837ca19df0d94be56d) = 1, [EVENT_ACTIVATION_UPDATE](#a3bc43cdb5f4033e625bb6dc7e1579d4ba5d88b096adf1cb668ea2c1bf0d8e8cb8) = 2, [EVENT_PARAMETER_UPDATE](#a3bc43cdb5f4033e625bb6dc7e1579d4ba7e6a2f51239e12672d2809ee6f07e177) = 3,<br/>  [EVENT_FOCUS_UPDATE](#a3bc43cdb5f4033e625bb6dc7e1579d4ba5e22fbb3d7e11c749b90e3b0461681fb) = 4, [EVENT_FOREGROUND](#a3bc43cdb5f4033e625bb6dc7e1579d4ba5919ad4670c8e825ad53aba144805df5) = 5, [EVENT_BACKGROUND](#a3bc43cdb5f4033e625bb6dc7e1579d4bac8f0e13a5042856ad22cc0ba40ac5062) = 6, [EVENT_CP_STARTED](#a3bc43cdb5f4033e625bb6dc7e1579d4ba4ca989c23c081528027d2838adda4010) = 7,<br/>  [EVENT_CP_STOPPED](#a3bc43cdb5f4033e625bb6dc7e1579d4bae4b2096693e8230bf7e8234bffeb7ba3) = 8, [EVENT_BOOT_COMPLETED](#a3bc43cdb5f4033e625bb6dc7e1579d4bad928ed1a71b92636907ab3b1738c0b22) = 9, [EVENT_LAST](#a3bc43cdb5f4033e625bb6dc7e1579d4ba9266ca0adff9ab315332fb237ddfed81) = 10<br/>} |
| enum   | [macNotifications](#aabd24d8a0b08ebc6a6da2c43b0ae2d9b) {<br/>  [NOTIFICATION_NONE](#aabd24d8a0b08ebc6a6da2c43b0ae2d9ba5cc432d77c6eb1abbe3f89d4f895f778) = (0\<\<0), [NOTIFICATION_MANIFEST_RESCAN](#aabd24d8a0b08ebc6a6da2c43b0ae2d9ba6e467da2577048534d2368040c31d17e) = (1\<\<0), [NOTIFICATION_ACTIVATION_CFG_UPDATE](#aabd24d8a0b08ebc6a6da2c43b0ae2d9ba923a1344f83663f39ac04c4ec3d745d9) = (1\<\<1), [NOTIFICATION_PARAMETER_CFG_UPDATE](#aabd24d8a0b08ebc6a6da2c43b0ae2d9ba95a27537b51afc0c265c453ada39d055) = (1\<\<2),<br/>  [NOTIFICATION_CP_START](#aabd24d8a0b08ebc6a6da2c43b0ae2d9badd8eec9dc45ce42675de6bda75ab3619) = (1\<\<3), [NOTIFICATION_CP_STOP](#aabd24d8a0b08ebc6a6da2c43b0ae2d9bac0ebe51801843ebdb451ae7a36d4f2cb) = (1\<\<4), [NOTIFICATION_LAST](#aabd24d8a0b08ebc6a6da2c43b0ae2d9ba29e9cf6282fd10a8fb52f46d21c482c2) = (1\<\<6), [NOTIFICATION_ALL](#aabd24d8a0b08ebc6a6da2c43b0ae2d9ba1930c35d6489778ddfeaca7fb2ca6f5e) = 0xFFFF<br/>} |
| enum   | [systemNotificationPriority](#af8d28bc2c3fa0398b42f840088f59a4b) { [SYSTEM_NOTIFICATION_INFO](#af8d28bc2c3fa0398b42f840088f59a4bae45a50bf56795bda968dfc1694ad2871) = 1, [SYSTEM_NOTIFICATION_WARNING](#af8d28bc2c3fa0398b42f840088f59a4ba4313068313501b2088a0336442126a4a) = 2, [SYSTEM_NOTIFICATION_CRITICAL](#af8d28bc2c3fa0398b42f840088f59a4ba6951f9532ee21d9a68bf0e4f1307d03b) = 3 } |

|  |  |
|----|----|
| Functions |  |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysSetEventCallback](#ae4108c74c16f2f512405ba326843109a) ([macEvent](#a3bc43cdb5f4033e625bb6dc7e1579d4b) event, [macEventCallback](#aa740ccdb24bc2dad5717ef65e33b0a24) cb) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysNotificationCallback](#a21f532b6bb03873e6927390c19840c67) ([macNotificationCallback](#ad2df18eb227eae3f9524fa9031c92d4a) cb, long notification_mask) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysNotificationCallback](#adb02617beacae56d66f518a263ce0890) ([macNotificationCallback](#ad2df18eb227eae3f9524fa9031c92d4a) cb=NULL, [macNotifications](#aabd24d8a0b08ebc6a6da2c43b0ae2d9b) notification=[NOTIFICATION_NONE](#aabd24d8a0b08ebc6a6da2c43b0ae2d9ba5cc432d77c6eb1abbe3f89d4f895f778)) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysShowDesktop](#a404d8e38300385724b2d2ed306df863e) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysShowControlPanel](#a395a73335aa92641a3ac0967fc0bb200) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysShowPowerControlPanel](#a085b2f637d5f82e4ee2812baf24eba46) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysShowPrevApp](#a40e24a74e4f3dc63f080b34b0bb6c7de) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchAppid](#a77748eeae43d8b50145564d0022ad886) (const std::string &appid, const std::vector\< std::string \> &args, const std::map\< std::string, std::string \> &envs, int params=0) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchAppid](#a17fee224cba3c5bfaf8835fbda157cc3) (const std::string &appid, const std::vector\< std::string \> &args, int params) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchAppid](#a53a3ccda2cdc2d39f2c618015ea81efb) (const std::string &appid, const std::vector\< std::string \> &args) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchAppid](#aa3c091d3bd20d0131c5f50318cd0750e) (const std::string &appid) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchApp](#a52ed11c68234a6abcf53fa5edd596729) (const std::string &appname, const std::vector\< std::string \> &args) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchApp](#a5b1e0d2f61a93565ac1f1f2d89d4caf3) (const std::string &appname) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysRelaunchApps](#a5b63071e5232000be8cd04e2950b28b2) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysIsRunning](#aae05286692566c22ef2d18a69748c5fe) (const std::string &appid, bool &running) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysShowProgress](#abb5ddef3187ac018cda433a3aec2c6fb) (const std::string &info, size_t percent) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysSetAppid](#abcf911819fbee784ef245fe34aa9572c) (const std::string &appid) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysUnSetAppid](#a738e18eb97f53b402e01c6ee391b2607) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysChangeLayout](#aa54bee100e8df7bab8868a0c6b81bc67) (const std::string &layoutname, bool statusbar=true, bool keyboard=false) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysChangeLayout](#a868378044b45895f8c85d0530c482a9e) (const std::string &layoutname, bool statusbar) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysAssignToLayout](#aad01e467699aabea2fa64b588ede1fec) (const std::string &appid, const std::string &region) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysFullscreenMode](#a56bd229ab93be9b2ee7ae2f95d10c166) (bool enable) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysStatusbar](#a9c942ac576c34a0e8dbd8cd69935a807) (bool visible) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysGetCPRState](#a924f920dc0fd9b34e91c6e57bd97816c) (bool &active) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysGetCPAppRootDir](#a0d95ca7aac6a37040b0e2135d9f134d1) (std::string &path) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysGetWMState](#ad031802bca1577454ee78a31122bde6d) (bool &active) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysStatusbarState](#ac3325831385c4e7755c3d96575db9496) (bool &visible) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysSetStatusbarValues](#a6c72ec8391307ac42e3c9d044eac36e2) (const std::map\< std::string, std::string \> &values) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysGetStatusbarValues](#a443df02ff6897b4a9e6cb5973f5842b2) (std::map\< std::string, std::string \> &values) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysStatusbarRefresh](#a6f771d3743e177bce7b7d79c26cf3036) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysVirtualKeyboard](#a287906c2724d813bb1eb0ad1f3b4f18a) ([macKeyboard](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5f) mode) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysVirtualKeyboard](#acb5c31824823ba4b9708f41f86a3e4f0) (int mode) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLockLayout](#a1f0513c597f95e860f0d4e516d72b364) (bool enable) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysInForeground](#a438d8362980527e345759c52a2615071) (std::string &appid) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysInForeground](#afd762089e189223f837321ceb76ba9ba) (bool &visible) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysToForeground](#a424b735dc0296a43429f6dfeab802fa4) (const std::string &appid) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysToForground](#a1ac2b7ae5456bc7a0e543804f92f890a) (const std::string &appid) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysStopAppid](#a57f7a1edb91c7479e4c2b2916a252822) (const std::string &appid) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysStopAppname](#a54ba5d09eeee6974f08950ae922c1896) (const std::string &appname) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysStopAllUserApps](#a6b24cb5e42ba92f571a4f000e2ed0230) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysStopOtherApps](#ad5c53e66bd56f6368628fbbeaa514622) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysGetAppList](#a807e4d61017fe99f6f6c66a8bd37ad08) (<a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &applist) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysScanManifests](#aec38c483c58974ddb58d576d9f7ac2f0) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysSetCPEnvData](#a3cb1620e29b7920b2b53560c1cae71fe) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &envs) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysInstallCPApp](#a86f520239eb2af7b49b1bc31dfc20906) (const std::string &path) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchCPAppFromDesktop](#a509d985b46d2fe8d772bd749888fd1ab) (const std::string &trigger_id, const std::vector\< std::string \> &param) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchCPAppFromDesktop](#a188f9500b7eff15c4e9761c26b7e6641) (const std::string &trigger_id, const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &param) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchCPAppFromDesktopSync](#aff611b7f21a2748fdc138db0718a481b) (const std::string &trigger_id, const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &param, int flags=0) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysLaunchCPAppByTrigger](#a86cff41093ff1ab578ff1c54f47c5062) (const std::string &appid, const std::string &trigger_id, const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &param, unsigned int flags) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysInvokeCPAppAction](#a45f53838cafde90263046e5844717399) (const std::string &appid, const std::string &name, int display_id=0, unsigned int flags=0) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysGetGUIRegionId](#a5a32e6fc3ca601108ec200e0bebf10a1) (const std::string &appid, int &gui_region_id) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [sysStopAllCPApps](#a9dea7108a3a1efc9a1cc087e18548c59) () |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> int  | [systemNotificationAdd](#ac4a12edca6083bfb03386f390d67bc3d) ([systemNotificationPriority](#af8d28bc2c3fa0398b42f840088f59a4b) p, const std::string &message, bool sticky=false) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [systemNotificationRemove](#a4aa74ec3d2bd8a53334045452b21820f) (int id) |
| <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c)  | [systemNotificationList](#a49a2afa866d86f54ab20603abcb7eb45) (std::list\< int \> &list) |
| const <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> char \*  | [sysMac_GetVersion](#a2e646f58a5f98e1b01ccae0a576ab8cf) () |
| const <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> char \*  | [sysLibMac_GetVersion](#a9145ab384964062fa95dd07ad6cc7480) () |

## DetailedDescription {#detailed-description}

Verifone Multi Application Controller (vfimac) namespace

## TypedefDocumentation {#typedef-documentation}

## macEventCallback <a href="#aa740ccdb24bc2dad5717ef65e33b0a24" id="aa740ccdb24bc2dad5717ef65e33b0a24"></a>

<p>typedef void(\* macEventCallback) ([macEvent](#a3bc43cdb5f4033e625bb6dc7e1579d4b) event, const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &json)</p>

MAC event callback. This callback gets invoked when corresponding event occurs

**Parameters**

\[in\] **json** JSON encoded event information


{% hint style="info" %}
Callback will be invoked sequentially for every event one by one in sequence
{% endhint %}

## macNotificationCallback <a href="#ad2df18eb227eae3f9524fa9031c92d4a" id="ad2df18eb227eae3f9524fa9031c92d4a"></a>

<p>typedef void(\* macNotificationCallback) ([macNotifications](#aabd24d8a0b08ebc6a6da2c43b0ae2d9b) notification)</p>

MAC notification callback. This callback gets invoked when corresponding event occurs

**Parameters**

\[in\] **notification** macNotifications event identifier


{% hint style="info" %}
Callback will be invoked sequentially for every event one by one in sequence
please see macNotifications for reference
{% endhint %}

## EnumerationType Documentation {#enumeration-type-documentation}

## macError <a href="#a343256ae5f150542a1f6a38fcaca216c" id="a343256ae5f150542a1f6a38fcaca216c"></a>

<p>enum [macError](#a343256ae5f150542a1f6a38fcaca216c)</p>

Error codes returned by MAC APIs

| Enumerator |  |
|----|----|
| MAC_ERR_OK  | <p>Success</p> |
| MAC_ERR_FAIL  | <p>Generic error</p> |
| MAC_ERR_UNSUPPORTED  | <p>Function is not supported</p> |
| MAC_ERR_LOCKED  | <p>Layout is locked</p> |
| MAC_ERR_TIMEOUT  | <p>Timeout</p> |
| MAC_ERR_LIBNOTIFY  | <p>IPC error</p> |
| MAC_ERR_APP_NOT_RUNNING  | <p>Application is not running</p> |
| MAC_ERR_WRONG_APPID  | <p>Wrong/unknown application id</p> |
| MAC_ERR_NOT_CP_APP  | <p>No matching CP application</p> |
| MAC_ERR_UNKNOWN  | <p>Unknown command</p> |
| MAC_ERR_CYCLE  | <p>Manifest dependency cycle detected</p> |
| MAC_ERR_DEPENDS  | <p>Manifest has missing dependency</p> |
| MAC_ERR_MANIFEST  | <p>Manifest validation error</p> |
| MAC_ERR_IPC  | <p>IPC error</p> |
| MAC_ERR_NO_APP  | <p>No matching application</p> |
| MAC_ERR_READY  | <p>MAC is not ready</p> |
| MAC_ERR_ACTIVE  | <p>Application is not activate on this terminal</p> |
| MAC_ERR_STOP  | <p>Can\'t stop application</p> |
| MAC_ERR_NO_APPID  | <p>No matching appid</p> |
| MAC_ERR_PERMISSION  | <p>Permission error</p> |
| MAC_ERR_SERVICE  | <p>Application is a service</p> |
| MAC_ERR_VISIBLE  | <p>Action not allowed while application is not visible</p> |
| MAC_ERR_DISABLED  | <p>This feature is disabled in MAC configuration file</p> |
| MAC_ERR_LAUNCH  | <p>Error during application launch</p> |
| MAC_ERR_RUNNING  | <p>MAC is not running</p> |
| MAC_ERR_LAYOUT  | <p>Layout doesn\'t exist</p> |
| MAC_ERR_PARAMETER  | <p>Parameter error</p> |
| MAC_ERR_IGNORE  | <p>Command was ignored due to configuration</p> |
| MAC_ERR_CANCELED  | <p>Canceled by user</p> |
| MAC_ERR_EXISTS  | <p>Doesn\'t exists</p> |
| MAC_ERR_NO_KEYS  | <p>Keys are not available</p> |
| MAC_ERR_EXPECTED_KEYS  | <p>No information on expected keys</p> |
| MAC_ERR_ACCESS  | <p>No access</p> |
| MAC_ERR_AVAILIBLE  | <p>Not available</p> |
| MAC_ERR_CPR_DISABLED  | <p>Commerce Platform Runtime is disabled</p> |

## macEvent <a href="#a3bc43cdb5f4033e625bb6dc7e1579d4b" id="a3bc43cdb5f4033e625bb6dc7e1579d4b"></a>

<p>enum [macEvent](#a3bc43cdb5f4033e625bb6dc7e1579d4b)</p>

MAC events

| Enumerator |  |
|----|----|
| EVENT_NONE  | <p>no events occurred</p> |
| EVENT_MANIFEST_UPDATE  | <p>manifest list was updated</p> |
| EVENT_ACTIVATION_UPDATE  | <p>deprecated</p> |
| EVENT_PARAMETER_UPDATE  | <p>deprecated</p> |
| EVENT_FOCUS_UPDATE  | <p>focus switched to different application</p> |
| EVENT_FOREGROUND  | <p>application transitioned to foreground</p> |
| EVENT_BACKGROUND  | <p>application transitioned to background</p> |
| EVENT_CP_STARTED  | <p>CP application started</p> |
| EVENT_CP_STOPPED  | <p>CP application stopped</p> |
| EVENT_BOOT_COMPLETED  | <p>Boot completed</p> |
| EVENT_LAST  | <p>placeholder</p> |

## macKeyboard <a href="#a7ecd7d8b8c98bd60b3a7d95dc5da7c5f" id="a7ecd7d8b8c98bd60b3a7d95dc5da7c5f"></a>

<p>enum [macKeyboard](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5f)</p>

Virtual keyboard modes

| Enumerator |  |
|----|----|
| MAC_KBD_OFF  | <p>permanently disable virtual keyboard</p> |
| MAC_KBD_ON  | <p>permanently enable virtual keyboard</p> |
| MAC_KBD_AUTO  | <p>activate automatic mode for both numeric and alphanumeric input</p> |
| MAC_KBD_NUMERIC  | <p>activate automatic mode only for numeric input</p> |
| MAC_KBD_ALPHANUMERIC  | <p>activate automatic mode only for alphanumeric input</p> |
| MAC_KBD_CAPITALIZED  | <p>alphanumeric keyboard will appear capitalized</p> |
| MAC_KBD_LAST  | <p>placeholder</p> |

## macLaunchParams <a href="#a3d1d0138ae66b9a9e03ae518de7ecf63" id="a3d1d0138ae66b9a9e03ae518de7ecf63"></a>

<p>enum [macLaunchParams](#a3d1d0138ae66b9a9e03ae518de7ecf63)</p>

Application execution flags

| Enumerator |  |
|----|----|
| NONE  | <p>No special flags</p> |
| KEEP_IN_BACKGROUND  | <p>Keep application in background</p> |

## macNotifications <a href="#aabd24d8a0b08ebc6a6da2c43b0ae2d9b" id="aabd24d8a0b08ebc6a6da2c43b0ae2d9b"></a>

<p>enum [macNotifications](#aabd24d8a0b08ebc6a6da2c43b0ae2d9b)</p>

MAC notifications

| Enumerator |  |
|----|----|
| NOTIFICATION_NONE  | <p>no events occurred</p> |
| NOTIFICATION_MANIFEST_RESCAN  | <p>manifest list was updated</p> |
| NOTIFICATION_ACTIVATION_CFG_UPDATE  | <p>deprecated</p> |
| NOTIFICATION_PARAMETER_CFG_UPDATE  | <p>deprecated</p> |
| NOTIFICATION_CP_START  | <p>CP application started</p> |
| NOTIFICATION_CP_STOP  | <p>CP application stopped</p> |
| NOTIFICATION_LAST  | <p>placeholder</p> |
| NOTIFICATION_ALL  | <p>register callback for all available events</p> |

## systemNotificationPriority <a href="#af8d28bc2c3fa0398b42f840088f59a4b" id="af8d28bc2c3fa0398b42f840088f59a4b"></a>

<p>enum [systemNotificationPriority](#af8d28bc2c3fa0398b42f840088f59a4b)</p>

SYSTEM notifications priority

| Enumerator                    |                                            |
|-------------------------------|--------------------------------------------|
| SYSTEM_NOTIFICATION_INFO      | <p>Info severity</p>     |
| SYSTEM_NOTIFICATION_WARNING   | <p>Warning severity</p>  |
| SYSTEM_NOTIFICATION_CRITICAL  | <p>Critical severity</p> |

## FunctionDocumentation {#function-documentation}

## sysAssignToLayout() <a href="#aad01e467699aabea2fa64b588ede1fec" id="aad01e467699aabea2fa64b588ede1fec"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysAssignToLayout</p>

Assign application to certain region in layout

**Parameters**

\[in\] **appid** application id from manifest file \[in\] **region** region name from layout file

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_NO_APPID](#a343256ae5f150542a1f6a38fcaca216ca9bb50ccba3958e9b7fda61d3ac05534c) unknown application id



{% hint style="info" %}
This API is needed for split screen mode
{% endhint %}

## sysChangeLayout()\[1/2\] <a href="#a868378044b45895f8c85d0530c482a9e" id="a868378044b45895f8c85d0530c482a9e"></a> {#syschangelayout-12}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysChangeLayout</p>

Change layout

**Parameters**

\[in\] **layoutname** layout name from layout.ini file \[in\] **statusbar** layout name with -sb suffix

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked

## sysChangeLayout()\[2/2\] <a href="#aa54bee100e8df7bab8868a0c6b81bc67" id="aa54bee100e8df7bab8868a0c6b81bc67"></a> {#syschangelayout-22}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysChangeLayout</p>

Change layout

**Parameters**

\[in\] **layoutname** layout name from layout.ini file \[in\] **statusbar** layout name with -sb suffix \[in\] **keyboard** layout name with -kb suffix

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked

## sysFullscreenMode() <a href="#a56bd229ab93be9b2ee7ae2f95d10c166" id="a56bd229ab93be9b2ee7ae2f95d10c166"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysFullscreenMode</p>

Enter/leave full screen mode

**Parameters**

\[in\] **enable**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_VISIBLE](#a343256ae5f150542a1f6a38fcaca216ca0ed934fa7a34568e74061ef14dfe3958) application is not currently visible


{% hint style="info" %}
Will switch layout to full screen one
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a30">mac_demo1.cpp</a>.

## sysGetAppList() <a href="#a807e4d61017fe99f6f6c66a8bd37ad08" id="a807e4d61017fe99f6f6c66a8bd37ad08"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysGetAppList</p>

Get information about available application

**Parameters**

\[out\] **applist**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


{% hint style="info" %}
payload example: \[unsupported block\]
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a32">mac_demo1.cpp</a>.

## sysGetCPAppRootDir() <a href="#a0d95ca7aac6a37040b0e2135d9f134d1" id="a0d95ca7aac6a37040b0e2135d9f134d1"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysGetCPAppRootDir</p>

Get path to Commerce Platform application root directory

**Parameters**

\[out\] **path** path to Commerce Platform application root directory

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_CPR_DISABLED](#a343256ae5f150542a1f6a38fcaca216cad1f788f290b62d4889261290c009f40a) CPR is disabled

### Examples

<a href="mac_demo1_8cpp-example.md#a66">mac_demo1.cpp</a>.

## sysGetCPRState() <a href="#a924f920dc0fd9b34e91c6e57bd97816c" id="a924f920dc0fd9b34e91c6e57bd97816c"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysGetCPRState</p>

Commerce Platform Runtime state

**Parameters**

\[out\] **active**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


{% hint style="info" %}
CPR will be inactive if no CP apps are installed or libcpr is missing on the system.
{% endhint %}

## sysGetGUIRegionId() <a href="#a5a32e6fc3ca601108ec200e0bebf10a1" id="a5a32e6fc3ca601108ec200e0bebf10a1"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysGetGUIRegionId</p>

Returns GUI region id used by application

**Parameters**

\[in\] **appid** application id from manifest file \[in\] **gui_region_id** GUI region id

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

[MAC_ERR_PARAMETER](#a343256ae5f150542a1f6a38fcaca216ca75777560e490e9383775482ac3bc245d) wrong parameter passed

[MAC_ERR_NOT_CP_APP](#a343256ae5f150542a1f6a38fcaca216ca13ecf9a9db7593cabe3ca09c3496c17b) no CP application to launch

### Examples

<a href="mac_demo1_8cpp-example.md#a48">mac_demo1.cpp</a>.

## sysGetStatusbarValues() <a href="#a443df02ff6897b4a9e6cb5973f5842b2" id="a443df02ff6897b4a9e6cb5973f5842b2"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysGetStatusbarValues</p>

Obtain value map from statusbar.html

**Parameters**

\[out\] **values** value map from statusbar

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error



{% hint style="info" %}
This API can be used to add extra icons to statusbar.
This API is useful in case custom MAC resources are used.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a42">mac_demo1.cpp</a>.

## sysGetWMState() <a href="#ad031802bca1577454ee78a31122bde6d" id="ad031802bca1577454ee78a31122bde6d"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysGetWMState</p>

Windows Management state

**Parameters**

\[out\] **active**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


{% hint style="info" %}
Windows Management is ON on devices with hardware display or remote display.
{% endhint %}

## sysInForeground()\[1/2\] <a href="#afd762089e189223f837321ceb76ba9ba" id="afd762089e189223f837321ceb76ba9ba"></a> {#sysinforeground-12}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysInForeground</p>

Allows to check if application is currently visible

**Parameters**

\[out\] **visible**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

## sysInForeground()\[2/2\] <a href="#a438d8362980527e345759c52a2615071" id="a438d8362980527e345759c52a2615071"></a> {#sysinforeground-22}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysInForeground</p>

Returns appid of currently visible application

**Parameters**

\[out\] **appid**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

### Examples

<a href="mac_demo1_8cpp-example.md#a49">mac_demo1.cpp</a>.

## sysInstallCPApp() <a href="#a86f520239eb2af7b49b1bc31dfc20906" id="a86f520239eb2af7b49b1bc31dfc20906"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysInstallCPApp</p>

Install Commerce Platform application

**Parameters**

\[in\] **path** path to CPA package which should be installed

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

[MAC_ERR_PARAMETER](#a343256ae5f150542a1f6a38fcaca216ca75777560e490e9383775482ac3bc245d) wrong parameter passed

[MAC_ERR_ACCESS](#a343256ae5f150542a1f6a38fcaca216cafb7c2c54548ff09323602f8a6376fd01) installation package is not accessible

[MAC_ERR_NOT_CP_APP](#a343256ae5f150542a1f6a38fcaca216ca13ecf9a9db7593cabe3ca09c3496c17b) no CP application to install

[MAC_ERR_CPR_DISABLED](#a343256ae5f150542a1f6a38fcaca216cad1f788f290b62d4889261290c009f40a) CPR is disabled


{% hint style="info" %}
Enable CPR logging channel to see installation log.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a55">mac_demo1.cpp</a>.

## sysInvokeCPAppAction() <a href="#a45f53838cafde90263046e5844717399" id="a45f53838cafde90263046e5844717399"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysInvokeCPAppAction</p>

Allows to invoke action inside CP app context

**Parameters**

\[in\] **appid** application id from manifest file \[in\] **name** action name \[in\] **display_id** GUI display identifier \[in\] **flags** for future use

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

[MAC_ERR_PARAMETER](#a343256ae5f150542a1f6a38fcaca216ca75777560e490e9383775482ac3bc245d) wrong parameter passed

[MAC_ERR_NOT_CP_APP](#a343256ae5f150542a1f6a38fcaca216ca13ecf9a9db7593cabe3ca09c3496c17b) no CP application to launch

[MAC_ERR_CPR_DISABLED](#a343256ae5f150542a1f6a38fcaca216cad1f788f290b62d4889261290c009f40a) CPR is disabled


{% hint style="info" %}
API can be used for graceful API shutdown, if there is action which supports this.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a60">mac_demo1.cpp</a>.

## sysIsRunning() <a href="#aae05286692566c22ef2d18a69748c5fe" id="aae05286692566c22ef2d18a69748c5fe"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysIsRunning</p>

Check if application is currently running

**Parameters**

\[in\] **appid** application id from manifest file \[out\] **running** running/not running

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


[MAC_ERR_NO_APPID](#a343256ae5f150542a1f6a38fcaca216ca9bb50ccba3958e9b7fda61d3ac05534c) unknown application id

### Examples

<a href="mac_demo1_8cpp-example.md#a45">mac_demo1.cpp</a>.

## sysLaunchApp()\[1/2\] <a href="#a5b1e0d2f61a93565ac1f1f2d89d4caf3" id="a5b1e0d2f61a93565ac1f1f2d89d4caf3"></a> {#syslaunchapp-12}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchApp</p>

Launch an application by application name

**Parameters**

\[in\] **appname** application name from manifest file

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

## sysLaunchApp()\[2/2\] <a href="#a52ed11c68234a6abcf53fa5edd596729" id="a52ed11c68234a6abcf53fa5edd596729"></a> {#syslaunchapp-22}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchApp</p>

Launch an application by application name

**Parameters**

\[in\] **appname** application name from manifest file \[in\] **args** arguments to be passed to application

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

## sysLaunchAppid()\[1/4\] <a href="#aa3c091d3bd20d0131c5f50318cd0750e" id="aa3c091d3bd20d0131c5f50318cd0750e"></a> {#syslaunchappid-14}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchAppid</p>

Launch an application by application id

**Parameters**

\[in\] **appid** application id from manifest file

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

## sysLaunchAppid()\[2/4\] <a href="#a53a3ccda2cdc2d39f2c618015ea81efb" id="a53a3ccda2cdc2d39f2c618015ea81efb"></a> {#syslaunchappid-24}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchAppid</p>

Launch an application by application id

**Parameters**

\[in\] **appid** application id from manifest file \[in\] **args** arguments to be passed to application

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

## sysLaunchAppid()\[3/4\] <a href="#a77748eeae43d8b50145564d0022ad886" id="a77748eeae43d8b50145564d0022ad886"></a> {#syslaunchappid-34}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchAppid</p>

Launch an application by application id

**Parameters**

\[in\] **appid** application id from manifest file \[in\] **args** arguments to be passed to application \[in\] **envs** environments to be passed to application \[in\] **params** mask with launching parameters from macLaunchParams enum

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

### Examples

<a href="mac_demo1_8cpp-example.md#a46">mac_demo1.cpp</a>.

## sysLaunchAppid()\[4/4\] <a href="#a17fee224cba3c5bfaf8835fbda157cc3" id="a17fee224cba3c5bfaf8835fbda157cc3"></a> {#syslaunchappid-44}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchAppid</p>

Launch an application by application id

**Parameters**

\[in\] **appid** application id from manifest file \[in\] **args** arguments to be passed to application \[in\] **params** mas with launching parameters from macLaunchParams enum

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

## sysLaunchCPAppByTrigger() <a href="#a86cff41093ff1ab578ff1c54f47c5062" id="a86cff41093ff1ab578ff1c54f47c5062"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchCPAppByTrigger</p>

Will execute all CP applications, which are registered for certain trigger identifier

**Parameters**

\[in\] **appid** application id from manifest file (can be \"\*\" for broadcast mode or \"1\" for unicast mode) \[in\] **trigger_id** trigger identifier \[in\] **param** parameters will be passed to CP application in cp_notifyParam field \[in\] **flags** flags passed to CP app in cp_notifyFlags field

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

[MAC_ERR_PARAMETER](#a343256ae5f150542a1f6a38fcaca216ca75777560e490e9383775482ac3bc245d) wrong parameter passed

[MAC_ERR_NOT_CP_APP](#a343256ae5f150542a1f6a38fcaca216ca13ecf9a9db7593cabe3ca09c3496c17b) no CP application to launch

[MAC_ERR_CPR_DISABLED](#a343256ae5f150542a1f6a38fcaca216cad1f788f290b62d4889261290c009f40a) CPR is disabled


{% hint style="info" %}
if appid is equal to \"\*\", this will invoke broadcast mode. In this case all CP applications with matching trigger identifier will be launched one by one. Launching sequence happens according to CP application priorities.
if appid is equal to \"1\", this will invoke unicast mode. In this case only one CP applications with highest priority and matching trigger identifier will be launched.
in all other cases only one application with matching appid will be launched.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a53">mac_demo1.cpp</a>.

## sysLaunchCPAppFromDesktop()\[1/2\] <a href="#a509d985b46d2fe8d772bd749888fd1ab" id="a509d985b46d2fe8d772bd749888fd1ab"></a> {#syslaunchcpappfromdesktop-12}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchCPAppFromDesktop</p>

MAC will generate desktop with icons for every CP application, which has matching trigger.

**Parameters**

\[in\] **trigger_id** trigger identifier \[in\] **param** parameters will be passed to CP application in cp_notifyParam field

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

[MAC_ERR_PARAMETER](#a343256ae5f150542a1f6a38fcaca216ca75777560e490e9383775482ac3bc245d) wrong parameter passed

[MAC_ERR_NOT_CP_APP](#a343256ae5f150542a1f6a38fcaca216ca13ecf9a9db7593cabe3ca09c3496c17b) no matching CP application

[MAC_ERR_CPR_DISABLED](#a343256ae5f150542a1f6a38fcaca216cad1f788f290b62d4889261290c009f40a) CPR is disabled


{% hint style="info" %}
This API is asynchronous.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a52">mac_demo1.cpp</a>.

## sysLaunchCPAppFromDesktop()\[2/2\] <a href="#a188f9500b7eff15c4e9761c26b7e6641" id="a188f9500b7eff15c4e9761c26b7e6641"></a> {#syslaunchcpappfromdesktop-22}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchCPAppFromDesktop</p>

MAC will generate desktop with icons for every CP application, which has matching trigger.

**Parameters**

\[in\] **trigger_id** trigger identifier \[in\] **param** parameters will be passed to CP application in cp_notifyParam field

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

[MAC_ERR_PARAMETER](#a343256ae5f150542a1f6a38fcaca216ca75777560e490e9383775482ac3bc245d) wrong parameter passed

[MAC_ERR_NOT_CP_APP](#a343256ae5f150542a1f6a38fcaca216ca13ecf9a9db7593cabe3ca09c3496c17b) no matching CP application


{% hint style="info" %}
This API is asynchronous.
{% endhint %}

## sysLaunchCPAppFromDesktopSync() <a href="#aff611b7f21a2748fdc138db0718a481b" id="aff611b7f21a2748fdc138db0718a481b"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLaunchCPAppFromDesktopSync</p>

MAC will generate desktop with icons for every CP application, which has matching trigger.

**Parameters**

\[in\] **trigger_id** trigger identifier \[in\] **param** parameters will be passed to CP application in cp_notifyParam field \[in\] **flags** flags passed to CP app in cp_notifyFlags field

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) application was launched successfully

[MAC_ERR_CANCELED](#a343256ae5f150542a1f6a38fcaca216ca495bae09e1bc1aa9559aa0f7ec8668c0) desktop was canceled by user

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) IPC error

[MAC_ERR_CPR_DISABLED](#a343256ae5f150542a1f6a38fcaca216cad1f788f290b62d4889261290c009f40a) CPR is disabled


{% hint style="info" %}
This API is synchronous. It will exit only after application is launched or desktop is canceled.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a51">mac_demo1.cpp</a>.

## sysLibMac_GetVersion() <a href="#a9145ab384964062fa95dd07ad6cc7480" id="a9145ab384964062fa95dd07ad6cc7480"></a>

<p>const <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> char\* vfimac::sysLibMac_GetVersion</p>

returns a zero-terminated string with version and build information of MAC library in ADK version string format: major.minor.patch-build, e.g. \"1.2.3-4\"

### Returns

version string

### Examples

<a href="mac_demo1_8cpp-example.md#a28">mac_demo1.cpp</a>.

## sysLockLayout() <a href="#a1f0513c597f95e860f0d4e516d72b364" id="a1f0513c597f95e860f0d4e516d72b364"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysLockLayout</p>

Lock/unlock the layout.

**Parameters**

\[in\] **enable** enable/disable layout lock


{% hint style="info" %}
Prevents other application from changing the layout (e.g. requesting full screen or virtual keyboard). Prevents from showing the application desktop. Typically this is being called when applications do user processing and don\'t want the layout to be changed.
{% endhint %}

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is already locked


[MAC_ERR_VISIBLE](#a343256ae5f150542a1f6a38fcaca216ca0ed934fa7a34568e74061ef14dfe3958) application is not currently visible (in this case it can\'t lock layout)

### Examples

<a href="mac_demo1_8cpp-example.md#a31">mac_demo1.cpp</a>.

## sysMac_GetVersion() <a href="#a2e646f58a5f98e1b01ccae0a576ab8cf" id="a2e646f58a5f98e1b01ccae0a576ab8cf"></a>

<p>const <a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> char\* vfimac::sysMac_GetVersion</p>

returns a zero-terminated string with version and build information of MAC in ADK version string format: major.minor.patch-build, e.g. \"1.2.3-4\"

### Returns

version string

### Examples

<a href="mac_demo1_8cpp-example.md#a27">mac_demo1.cpp</a>.

## sysNotificationCallback()\[1/2\] <a href="#a21f532b6bb03873e6927390c19840c67" id="a21f532b6bb03873e6927390c19840c67"></a> {#sysnotificationcallback-12}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysNotificationCallback</p>

Register notification callback.

**Parameters**

\[in\] **cb** notification callback to be invoked \[in\] **notification_mask** mask with requested events


{% hint style="info" %}
Set callback to NULL to disable callback
please see macNotifications for reference
{% endhint %}

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

## sysNotificationCallback()\[2/2\] <a href="#adb02617beacae56d66f518a263ce0890" id="adb02617beacae56d66f518a263ce0890"></a> {#sysnotificationcallback-22}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysNotificationCallback</p>

Register notification callback.

**Parameters**

\[in\] **cb** notification callback to be invoked \[in\] **notification** mask with requested events


{% hint style="info" %}
Set callback to NULL to disable callback
please see macNotifications for reference
{% endhint %}

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

## sysRelaunchApps() <a href="#a5b63071e5232000be8cd04e2950b28b2" id="a5b63071e5232000be8cd04e2950b28b2"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysRelaunchApps</p>

Initialize relaunch process

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error



{% hint style="info" %}
after invoking this API, MAC will first stop all applications. After that all applications with autolaunch sections in manifest files, will be launched.
this API should bring terminal to clean state (same as after boot)
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a29">mac_demo1.cpp</a>.

## sysScanManifests() <a href="#aec38c483c58974ddb58d576d9f7ac2f0" id="aec38c483c58974ddb58d576d9f7ac2f0"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysScanManifests</p>

Request MAC to rescan all folders for new manifest files

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


[MAC_ERR_CYCLE](#a343256ae5f150542a1f6a38fcaca216ca388507f8c281d588adfecda0ea957dae) manifest dependency cycle is detected

[MAC_ERR_DEPENDS](#a343256ae5f150542a1f6a38fcaca216caeb1198ea1741ae185ba82873527fc923) manifests are missing dependencies


{% hint style="info" %}
Typically this is done after a SW update and new application installation.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a61">mac_demo1.cpp</a>.

## sysSetAppid() <a href="#abcf911819fbee784ef245fe34aa9572c" id="abcf911819fbee784ef245fe34aa9572c"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysSetAppid</p>

This API is used to register you application in MAC. After invokig this API, MAC will create new GUI region for application and set correct environment variables.

**Parameters**

\[in\] **appid** application id from manifest file

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success


{% hint style="info" %}
This API is needed for specific usecase. Not intended for general use.
This API is usefull when application was launched by SI, but it still wants to interract with MAC.
Application needs to call sysUnSetAppid before exiting, to avoid resource leek.
Be sure to invoke this API before using any ADK-GUI API calls.
{% endhint %}

## sysSetCPEnvData() <a href="#a3cb1620e29b7920b2b53560c1cae71fe" id="a3cb1620e29b7920b2b53560c1cae71fe"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysSetCPEnvData</p>

Set environment values for CPR applications

**Parameters**

\[in\] **envs** environment values

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error



{% hint style="info" %}
Values will be accessible to CP application via ARGV\["cp_envData"\].
Values are available only to CPR applications.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a54">mac_demo1.cpp</a>.

## sysSetEventCallback() <a href="#ae4108c74c16f2f512405ba326843109a" id="ae4108c74c16f2f512405ba326843109a"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysSetEventCallback</p>

Register notification callback.

**Parameters**

\[in\] **cb** notification callback to be invoked \[in\] **event** requested event


{% hint style="info" %}
Set callback to NULL to disable callback
please see macNotifications for reference
{% endhint %}

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

### Examples

<a href="mac_demo1_8cpp-example.md#a11">mac_demo1.cpp</a>.

## sysSetStatusbarValues() <a href="#a6c72ec8391307ac42e3c9d044eac36e2" id="a6c72ec8391307ac42e3c9d044eac36e2"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysSetStatusbarValues</p>

Sets value map to statusbar.html

**Parameters**

\[in\] **values** value map, which will be passed to statusbar.html

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error



{% hint style="info" %}
This API can be used to add extra icons to statusbar.
This API is useful in case custom MAC resources are used.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a43">mac_demo1.cpp</a>.

## sysShowControlPanel() <a href="#a395a73335aa92641a3ac0967fc0bb200" id="a395a73335aa92641a3ac0967fc0bb200"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysShowControlPanel</p>

Show MAC Control Panel

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

### Examples

<a href="mac_demo1_8cpp-example.md#a64">mac_demo1.cpp</a>.

## sysShowDesktop() <a href="#a404d8e38300385724b2d2ed306df863e" id="a404d8e38300385724b2d2ed306df863e"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysShowDesktop</p>

Show MAC desktop

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

### Examples

<a href="mac_demo1_8cpp-example.md#a62">mac_demo1.cpp</a>.

## sysShowPowerControlPanel() <a href="#a085b2f637d5f82e4ee2812baf24eba46" id="a085b2f637d5f82e4ee2812baf24eba46"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysShowPowerControlPanel</p>

Show MAC Power Control Panel

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

### Examples

<a href="mac_demo1_8cpp-example.md#a63">mac_demo1.cpp</a>.

## sysShowPrevApp() <a href="#a40e24a74e4f3dc63f080b34b0bb6c7de" id="a40e24a74e4f3dc63f080b34b0bb6c7de"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysShowPrevApp</p>

Show previous visible application

{% hint style="info" %}
Will show previously visible application.
will show desktop if visibility stack is empty
{% endhint %}

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

## sysShowProgress() <a href="#abb5ddef3187ac018cda433a3aec2c6fb" id="abb5ddef3187ac018cda433a3aec2c6fb"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysShowProgress</p>

Shows progress screen during application startup

**Parameters**

\[in\] **info** message to be reported on screen \[in\] **percent** boot progress (0-100%)

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


[MAC_ERR_VISIBLE](#a343256ae5f150542a1f6a38fcaca216ca0ed934fa7a34568e74061ef14dfe3958) application is not currently visible

### Examples

<a href="mac_demo1_8cpp-example.md#a7">mac_demo1.cpp</a>.

## sysStatusbar() <a href="#a9c942ac576c34a0e8dbd8cd69935a807" id="a9c942ac576c34a0e8dbd8cd69935a807"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysStatusbar</p>

Set statusbar state

**Parameters**

\[in\] **visible**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error



{% hint style="info" %}
This configuration is stored per application
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a40">mac_demo1.cpp</a>.

## sysStatusbarRefresh() <a href="#a6f771d3743e177bce7b7d79c26cf3036" id="a6f771d3743e177bce7b7d79c26cf3036"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysStatusbarRefresh</p>

Enforce MAC statusbar refresh

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

### Examples

<a href="mac_demo1_8cpp-example.md#a41">mac_demo1.cpp</a>.

## sysStatusbarState() <a href="#ac3325831385c4e7755c3d96575db9496" id="ac3325831385c4e7755c3d96575db9496"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysStatusbarState</p>

Get current statusbar state

**Parameters**

\[out\] **visible**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error



{% hint style="info" %}
This configuration is stored per application
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a44">mac_demo1.cpp</a>.

## sysStopAllCPApps() <a href="#a9dea7108a3a1efc9a1cc087e18548c59" id="a9dea7108a3a1efc9a1cc087e18548c59"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysStopAllCPApps</p>

Stop all Commerce Platform applications

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

### Examples

<a href="mac_demo1_8cpp-example.md#a58">mac_demo1.cpp</a>.

## sysStopAllUserApps() <a href="#a6b24cb5e42ba92f571a4f000e2ed0230" id="a6b24cb5e42ba92f571a4f000e2ed0230"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysStopAllUserApps</p>

Stop all user applications

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error



{% hint style="info" %}
All applications started by MAC (users usr1-usr15) will be stopped.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a57">mac_demo1.cpp</a>.

## sysStopAppid() <a href="#a57f7a1edb91c7479e4c2b2916a252822" id="a57f7a1edb91c7479e4c2b2916a252822"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysStopAppid</p>

Stops application by appid

**Parameters**

\[in\] **appid**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


[MAC_ERR_APP_NOT_RUNNING](#a343256ae5f150542a1f6a38fcaca216ca2b3e6bb894a825d49a856f7d78fbaace) application is not running

### Examples

<a href="mac_demo1_8cpp-example.md#a59">mac_demo1.cpp</a>.

## sysStopAppname() <a href="#a54ba5d09eeee6974f08950ae922c1896" id="a54ba5d09eeee6974f08950ae922c1896"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysStopAppname</p>

Stops application by application name

**Parameters**

\[in\] **appname**

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


[MAC_ERR_APP_NOT_RUNNING](#a343256ae5f150542a1f6a38fcaca216ca2b3e6bb894a825d49a856f7d78fbaace) application is not running

## sysStopOtherApps() <a href="#ad5c53e66bd56f6368628fbbeaa514622" id="ad5c53e66bd56f6368628fbbeaa514622"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysStopOtherApps</p>

Stop all user applications, except for calling application

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error



{% hint style="info" %}
All applications started by MAC (users usr1-usr15) will be stopped.
Calling application will remain active.
This API is useful if you want to avoid any kind of interference from other applications.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a56">mac_demo1.cpp</a>.

## systemNotificationAdd() <a href="#ac4a12edca6083bfb03386f390d67bc3d" id="ac4a12edca6083bfb03386f390d67bc3d"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> int vfimac::systemNotificationAdd</p>

Add new system notification

**Parameters**

\[in\] **p** notification priority like systemNotificationPriority::SYSTEM_NOTIFICATION_INFO systemNotificationPriority::SYSTEM_NOTIFICATION_WARNING systemNotificationPriority::SYSTEM_NOTIFICATION_CRITICAL \[in\] **message** notification message \[in\] **sticky** notification optional parameter. Can\'t be removed via GUI if \'true\'.

### Returns

negative value indicates an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

positive value (ID) indicates success.

### Examples

<a href="mac_demo1_8cpp-example.md#a20">mac_demo1.cpp</a>.

## systemNotificationList() <a href="#a49a2afa866d86f54ab20603abcb7eb45" id="a49a2afa866d86f54ab20603abcb7eb45"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::systemNotificationList</p>

List of current notifications

**Parameters**

\[out\] **list** notifications std::list\<int\>

### Returns

returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

### Examples

<a href="mac_demo1_8cpp-example.md#a24">mac_demo1.cpp</a>.

## systemNotificationRemove() <a href="#a4aa74ec3d2bd8a53334045452b21820f" id="a4aa74ec3d2bd8a53334045452b21820f"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::systemNotificationRemove</p>

Remove notification

**Parameters**

\[in\] **id** notification id to remove

### Returns

returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

### Examples

<a href="mac_demo1_8cpp-example.md#a25">mac_demo1.cpp</a>.

## sysToForeground() <a href="#a424b735dc0296a43429f6dfeab802fa4" id="a424b735dc0296a43429f6dfeab802fa4"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysToForeground</p>

Bring application to foreground.

**Parameters**

\[in\] **appid** application id from manifest file

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is already locked

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

[MAC_ERR_SERVICE](#a343256ae5f150542a1f6a38fcaca216ca12b59c43d38429cdcaeaa7b45461930c) application is service (no GUI)

### Examples

<a href="mac_demo1_8cpp-example.md#a50">mac_demo1.cpp</a>.

## sysToForground() <a href="#a1ac2b7ae5456bc7a0e543804f92f890a" id="a1ac2b7ae5456bc7a0e543804f92f890a"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysToForground</p>

## sysUnSetAppid() <a href="#a738e18eb97f53b402e01c6ee391b2607" id="a738e18eb97f53b402e01c6ee391b2607"></a>

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysUnSetAppid</p>

This API will unregister your application from MAC. MAC will destroy used GUI region and free all resources.

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success


{% hint style="info" %}
This API is needed for specific usecase. Not intended for general use.
Be sure, to invoke this API before your application exits.
{% endhint %}

## sysVirtualKeyboard()\[1/2\] <a href="#acb5c31824823ba4b9708f41f86a3e4f0" id="acb5c31824823ba4b9708f41f86a3e4f0"></a> {#sysvirtualkeyboard-12}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysVirtualKeyboard</p>

Set virtual keyboard mode

**Parameters**

\[in\] **mode** mask using macKeyboard value

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error

[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked

[MAC_ERR_VISIBLE](#a343256ae5f150542a1f6a38fcaca216ca0ed934fa7a34568e74061ef14dfe3958) application is not currently visible


{% hint style="info" %}
Please see [macKeyboard](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5f) enum for reference.
This configuration is stored per application.
{% endhint %}

## sysVirtualKeyboard()\[2/2\] <a href="#a287906c2724d813bb1eb0ad1f3b4f18a" id="a287906c2724d813bb1eb0ad1f3b4f18a"></a> {#sysvirtualkeyboard-22}

<p><a href="mac_8h.md#a8794217925bb13f504792c2e3669bf4b">MAC_API</a> [macError](#a343256ae5f150542a1f6a38fcaca216c) vfimac::sysVirtualKeyboard</p>

Show/hide virtual keyboard

**Parameters**

\[in\] **mode** keyboard mode from macKeyboard enum

### Returns

Returns an [macError](#a343256ae5f150542a1f6a38fcaca216c) value enum

[MAC_ERR_OK](#a343256ae5f150542a1f6a38fcaca216cae7c1d68ad552537bb450a291714bc71f) success

[MAC_ERR_IPC](#a343256ae5f150542a1f6a38fcaca216ca2a66718018e9604e11409a6bb0d9ee32) communication error


[MAC_ERR_LOCKED](#a343256ae5f150542a1f6a38fcaca216ca25189ddd505007eeface48fa0f6336e2) layout is currently locked


[MAC_ERR_VISIBLE](#a343256ae5f150542a1f6a38fcaca216ca0ed934fa7a34568e74061ef14dfe3958) application is not currently visible



{% hint style="info" %}
Please see [macKeyboard](#a7ecd7d8b8c98bd60b3a7d95dc5da7c5f) enum for reference.
This configuration is stored per application.
{% endhint %}

### Examples

<a href="mac_demo1_8cpp-example.md#a18">mac_demo1.cpp</a>.

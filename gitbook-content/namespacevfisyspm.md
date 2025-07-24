---
hidden: true
title: vfisyspm Namespace Referencemanagement functions
---

[Data Structures](#nested-classes) \| [Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [vfisyspm_DateTime](#structvfisyspm_1_1vfisyspm___date_time) |

|  |  |
|----|----|
| Typedefs |  |
| typedef int  | [wakeupHandle](#adeae56fc8c1e11c26aefe7ef065d48b5) |
| typedef int  | [timerHandle](#ae4336e421149646b6ef2394f1c5118a3) |
| typedef void(\*  | [timerNotificationCallback](#a1236e50ed89f0acbdce14dec534b6361)) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &json) |
| typedef void(\*  | [vfisyspmCallback](#af13eecf2baf53d8f7d4197fe496410dc)) ([vfisyspmNotificationType](#a12f0755f1d6c6a1c2116fd1d626a36b2) type, [vfisyspmNotifications](#a40ea12a9b19b561cd7403fc1362c49d0) notification) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) {<br/>  [SYS_PM_ERR_OK](#a116cd14a22494b717a346ddd5be42746ae6e828a228aa2729ef13e39aeb60c993) = 0, [SYS_PM_ERR_FAIL](#a116cd14a22494b717a346ddd5be42746af5bd33ce0af71453dfb44a9814d03cb5) = -1, [SYS_PM_ERR_UNSUPPORTED](#a116cd14a22494b717a346ddd5be42746a82b2f70a22c97206fee5b8dca67f84c0) = -2, [SYS_PM_ERR_UNKNOWN](#a116cd14a22494b717a346ddd5be42746aae8d7f2b6ae4f09e48dcc0fd6bce9839) = -3,<br/>  [SYS_PM_ERR_DAEMON_COM](#a116cd14a22494b717a346ddd5be42746a5884170ce1ce8d75d8a74f4bd374bb11) = -4, [SYS_PM_ERR_TIMEOUT](#a116cd14a22494b717a346ddd5be42746a92138b43bfc3d7edab2a1ab6641c08e3) = -5, [SYS_PM_ERR_LIBNOTIFY](#a116cd14a22494b717a346ddd5be42746a299d89b8ddcaef1c1cb68415ce412739) = -6, [SYS_PM_ERR_IPC](#a116cd14a22494b717a346ddd5be42746a92c5f00991921b77c8e64a3b59284a67) = -7,<br/>  [SYS_PM_ERR_NOT_RUNNING](#a116cd14a22494b717a346ddd5be42746a2ba53fd74486fb81a91f6e5507fb55c4) = -8, [SYS_PM_ERR_PARAM](#a116cd14a22494b717a346ddd5be42746aef56cc53fc519e9cefd5e3360c05c2ca) = -9, [SYS_PM_ERR_INIT](#a116cd14a22494b717a346ddd5be42746a54f680b1baeda8a550260a8cd4d782c4) = -10, [SYS_PM_ERR_IN_CRIT_SECTION](#a116cd14a22494b717a346ddd5be42746a207bb908cae8a83962b29bac0251d1f4) = -11,<br/>  [SYS_PM_ERR_POWER](#a116cd14a22494b717a346ddd5be42746a4202f878b3a87ff06fae1d55724a1967) = -12, [SYS_PM_ERR_CHARGING](#a116cd14a22494b717a346ddd5be42746aea05ecd5dd03fd74cc3d3228f0fa8eb0) = -13, [SYS_PM_ERR_CONFIG](#a116cd14a22494b717a346ddd5be42746ac0c023e278546f72723caeec35b4f170) = -14, [SYS_PM_ERR_NON_EXISTING](#a116cd14a22494b717a346ddd5be42746af6cdb2549cde9a9e94df56d89e8a62ed) = -15,<br/>  [SYS_PM_ERR_NOTIFY_SVC](#a116cd14a22494b717a346ddd5be42746a9652fa520e4543e8237af60e0aa5a191) = -16, [SYS_PM_ERR_TIMER](#a116cd14a22494b717a346ddd5be42746a569d82151dc442011b139abf87e618a0) = -17, [SYS_PM_ERR_ALREADY_INIT](#a116cd14a22494b717a346ddd5be42746a2a1727fbf8eb5c5aaa7d932b96e4e46e) = -18, [SYS_PM_ERR_ALLOWED](#a116cd14a22494b717a346ddd5be42746ac297c7c9668ba922b7794f3bf77f5773) = -19,<br/>  [SYS_PM_ERR_STATE](#a116cd14a22494b717a346ddd5be42746a65f6f5eb0488509067c8a9fac31c6c08) = -20, [SYS_PM_ERR_LOW_LEVEL](#a116cd14a22494b717a346ddd5be42746a5d7a0ef8dbdeffdc3f85bb9066850695) = -21, [SYS_PM_ERR_WAKE_UP_IS_PENDING](#a116cd14a22494b717a346ddd5be42746a4eb7c919019f254c797582f75e29c8df) = -22<br/>} |
| enum   | [vfisyspmNotificationType](#a12f0755f1d6c6a1c2116fd1d626a36b2) {<br/>  [PM_NOTIFY_TYPE_NONE](#a12f0755f1d6c6a1c2116fd1d626a36b2adda9d4b8e95861b3e009c221bc97754f) = 0, [PM_NOTIFY_TYPE_POWER_MODE](#a12f0755f1d6c6a1c2116fd1d626a36b2a876d631d9f439725cdd318d9617a2be1) = (1 \<\< 0), [PM_NOTIFY_TYPE_DOCK_STATE](#a12f0755f1d6c6a1c2116fd1d626a36b2ae25a95a629bf2261792e8f60443dffc4) = (1 \<\< 1), [PM_NOTIFY_TYPE_POWER_SOURCE](#a12f0755f1d6c6a1c2116fd1d626a36b2aa6e6275051c9866a3b16ff4ad5501527) = (1 \<\< 2),<br/>  [PM_NOTIFY_TYPE_WAKEUP_SOURCE](#a12f0755f1d6c6a1c2116fd1d626a36b2afdedc13a10a78a4325571e6824660dbb) = (1 \<\< 3), [PM_NOTIFY_TYPE_CRITICAL_SECTION](#a12f0755f1d6c6a1c2116fd1d626a36b2aa9f7173f2dde2bb8143be3ea6bd81c48) = (1 \<\< 4), [PM_NOTIFY_TYPE_PCI_REBOOT](#a12f0755f1d6c6a1c2116fd1d626a36b2ac5632f655bdad9187cb90e2dc913631b) = (1 \<\< 5), [PM_NOTIFY_TYPE_POWER_BUTTON](#a12f0755f1d6c6a1c2116fd1d626a36b2a332097eb37859446377282c0db9f7498) = (1 \<\< 6),<br/>  [PM_NOTIFY_TYPE_LAST](#a12f0755f1d6c6a1c2116fd1d626a36b2ad6dbc231cf759ee58601f51109a3884f) = (1 \<\< 7), [PM_NOTIFY_TYPE_ALL](#a12f0755f1d6c6a1c2116fd1d626a36b2a8272e895ac429bfa5b91c9072dadd3be) = 0xFFFF<br/>} |
| enum   | [vfisyspmTimerFlags](#a8bf72e0a67065ff830248d4f950bccf8) { [PM_TIMER_NONE](#a8bf72e0a67065ff830248d4f950bccf8a579aa4923fc0124b6528dc730181626b) = 0, [PM_TIMER_NO_WAKE_UP](#a8bf72e0a67065ff830248d4f950bccf8abab523c0bf88d83b778c7a55bd7adfcf) = (1 \<\< 0) } |
| enum   | [vfisyspmChargningModes](#a52110948b0aa4715d6ff642d1cb32889) { [PM_CHARGING_MODE_UNRESTRICTED](#a52110948b0aa4715d6ff642d1cb32889a7a56935fb216076f3a7351bb9499e28a) = 1, [PM_CHARGING_MODE_CAR_CHARGER](#a52110948b0aa4715d6ff642d1cb32889a3a5b3f8570d5f3ecc68f9d1e8e5b60c2) = 2 } |
| enum   | [vfisyspmTransitionFlags](#adffb93f77c4d1190fd7dc0397335b9a2) {<br/>  [PM_SUPPRESS_NONE](#adffb93f77c4d1190fd7dc0397335b9a2a2fcfcf79a2dbb05ff302c1d3a50ffce5) = 0, [PM_SUPPRESS_CRITICAL_SECTION](#adffb93f77c4d1190fd7dc0397335b9a2ae5fa433f19e5c699e0a72e6ff3dae351) = (1 \<\< 0), [PM_SUPPRESS_CHARGE_CHECK](#adffb93f77c4d1190fd7dc0397335b9a2a8246a65429e400d532e58b754c3bf3f5) = (1 \<\< 1), [PM_SUPPRESS_BOOT_STATE](#adffb93f77c4d1190fd7dc0397335b9a2aef52bc9676bca049c63d78e740e2af1a) = (1 \<\< 2),<br/>  [PM_SYNC](#adffb93f77c4d1190fd7dc0397335b9a2ad00ca996a01fdcdb456857eba2a8a054) = (1 \<\< 3), [PM_SUPPRESS_ALL](#adffb93f77c4d1190fd7dc0397335b9a2a1fe1ad21e4f33534364cdd0e734c8b8c)<br/>} |
| enum   | [vfisyspmCritSectionParameters](#ad9757c6641d1ed2c0a5d438d08ce9cc0) { [PM_CRIT_NONE](#ad9757c6641d1ed2c0a5d438d08ce9cc0aef329a468a5a095f29d727afe39c6688) = 0, [PM_CRIT_SUPRESS_STANDBY](#ad9757c6641d1ed2c0a5d438d08ce9cc0a8d83189d664475c36ee3d24ad77d42c2) = (1 \<\< 0) } |
| enum   | [powermngtState](#ad6865f9a76c1985e26c2e86719fc674a) {<br/>  [BOOT](#ad6865f9a76c1985e26c2e86719fc674aaee429d2b18e984f9be3d8a35ab58f77f) =-1, [ACTIVE](#ad6865f9a76c1985e26c2e86719fc674aa33cf1d8ef1d06ee698a7fabf40eb3a7f) = 0, [STANDBY](#ad6865f9a76c1985e26c2e86719fc674aae4634ae4352b512b38c5da9dc1610ca6) = 1, [SLEEP](#ad6865f9a76c1985e26c2e86719fc674aad6137abebe4fdc59e2f0f2c84bdbe3fa) = 2,<br/>  [DEEP_SLEEP](#ad6865f9a76c1985e26c2e86719fc674aa3c282494db59c58249a6b608e20050bf) = 3, [HIBERNATE](#ad6865f9a76c1985e26c2e86719fc674aac22ce256f44d6d9df78af9ee4ee9b3b7) = 4, [OFF](#ad6865f9a76c1985e26c2e86719fc674aaac132f2982b98bcaa3445e535a03ff75) = 5, [REBOOT](#ad6865f9a76c1985e26c2e86719fc674aa054795c72261d4d92e885ac46296a18e) = 6,<br/>  [LAST](#ad6865f9a76c1985e26c2e86719fc674aa990cd45e93be2b4661f3499e0a658a33) = 9<br/>} |
| enum   | [vfisyspmNotifications](#a40ea12a9b19b561cd7403fc1362c49d0) {<br/>  [ENTER_BOOT](#a40ea12a9b19b561cd7403fc1362c49d0a21b09ed5fa8b7dafbfa95197eeb0462f) = 37, [ENTER_ACTIVE](#a40ea12a9b19b561cd7403fc1362c49d0a436b629f22dd3a3e7cc0756587580851) = 0, [ENTER_STANDBY](#a40ea12a9b19b561cd7403fc1362c49d0ae83e2617f3c06e99ab254957bcbe5b48) = 1, [ENTER_SLEEP](#a40ea12a9b19b561cd7403fc1362c49d0a5916aab3235532fa23ed7e8dbb62bafa) = 2,<br/>  [ENTER_DEEP_SLEEP](#a40ea12a9b19b561cd7403fc1362c49d0a7712c5b15a993220069c449414826806) = 13, [ENTER_HIBERNATE](#a40ea12a9b19b561cd7403fc1362c49d0aab963348cd57bdd8d1bff679d825f837) = 10, [ENTER_SHUTDOWN](#a40ea12a9b19b561cd7403fc1362c49d0af9d877a3ba3e6e4c778b9b1721ad913f) = 12, [ENTER_REBOOT](#a40ea12a9b19b561cd7403fc1362c49d0a1d938770222af584750199577cbc366e) = 11,<br/>  [ENTER_SYSMODE](#a40ea12a9b19b561cd7403fc1362c49d0a60dd79b5470a3dcbfd77356325e4325e) = 27, [ENTER_DOCKED](#a40ea12a9b19b561cd7403fc1362c49d0a46d861287edfaeef8c18e3e8199593fd) = 3, [ENTER_UNDOCKED](#a40ea12a9b19b561cd7403fc1362c49d0a6e71020d15bc10c4dd07b4e9ece16133) = 4, [ENTER_BATTERY](#a40ea12a9b19b561cd7403fc1362c49d0ae6fcbf1904b2300b1a380c3e0e7ad658) = 5,<br/>  [ENTER_EXTERNAL_POWER](#a40ea12a9b19b561cd7403fc1362c49d0afaa60ff5a05125cecd8ccbfb5efe3960) = 6, [ENTER_BATTERY_NORMAL](#a40ea12a9b19b561cd7403fc1362c49d0addcbc3a931663eabce71c7ade209d41b) = 26, [ENTER_BATTERY_FULL](#a40ea12a9b19b561cd7403fc1362c49d0a4044700d8a89584d6e79c3b50510c125) = 7, [ENTER_BATTERY_LOW](#a40ea12a9b19b561cd7403fc1362c49d0ab6285d5dc823ff91620260a329ca0bc0) = 8,<br/>  [ENTER_BATTERY_CRITICAL](#a40ea12a9b19b561cd7403fc1362c49d0a6043322349163fdc8bfbc6511c6eafc1) = 9, [BATTERY_FAULT](#a40ea12a9b19b561cd7403fc1362c49d0a5e65c645140a71ee8680731d117db539) = 35, [BATTERY_REMOVED](#a40ea12a9b19b561cd7403fc1362c49d0a1ed19f741a8e8ca234663d12733a4ac9) = 36, [BUTTON_X_PRESSED](#a40ea12a9b19b561cd7403fc1362c49d0a9e4ddc0c463fc8a8e52d052738ce8f7f) = 14,<br/>  [BUTTON_X_RELEASED](#a40ea12a9b19b561cd7403fc1362c49d0aa715b70b669df8305b1bc85e13c3bf17) = 15, [PCI_REBOOT_WARNING](#a40ea12a9b19b561cd7403fc1362c49d0a1a4d75cb3d28ed562ea1860f99b74656) = 17, [WAKEUP](#a40ea12a9b19b561cd7403fc1362c49d0a9204d962c01740d01d1ea40b219a0472) = 16, [WAKEUP_COMM](#a40ea12a9b19b561cd7403fc1362c49d0a69c89a0509fedf5feac1047446dec7d7) = 18,<br/>  [WAKEUP_USB](#a40ea12a9b19b561cd7403fc1362c49d0a61a7a1db2cc82549c02410d2927d861a) = 19, [WAKEUP_CONSOLE](#a40ea12a9b19b561cd7403fc1362c49d0a45f46c8561816869183909e78e4fe4bd) = 20, [WAKEUP_KEY_PRESS](#a40ea12a9b19b561cd7403fc1362c49d0a83a5a1e121975a81de3132c8e22737c0) = 21, [WAKEUP_TIMER](#a40ea12a9b19b561cd7403fc1362c49d0a7400bfb621d43c5b03cda19a40c07c83) = 22,<br/>  [WAKEUP_EXTERNAL](#a40ea12a9b19b561cd7403fc1362c49d0af5dddba077c7f1d02fb870d1ac056fae) = 23, [CRITICAL_SECTION_ENABLED](#a40ea12a9b19b561cd7403fc1362c49d0ae0b0fae8848e9ca883497db9451b3f86) = 24, [CRITICAL_SECTION_DISABLED](#a40ea12a9b19b561cd7403fc1362c49d0ab9bfdaa4f280dc926f19a28f77ec29c5) = 25, [ABORT_PINPAD_ENABLE](#a40ea12a9b19b561cd7403fc1362c49d0ada24837b9778c85a104d0ae5a3b07d6d) = 28,<br/>  [ABORT_EARLY_WAKEUP](#a40ea12a9b19b561cd7403fc1362c49d0afaf2574140a1d211dddea048530e3229) = 29, [ABORT_HMAC_PROCESSING](#a40ea12a9b19b561cd7403fc1362c49d0a170625ad571671b33659bf8259221dce) = 30, [ABORT_CRITICAL_SECTION](#a40ea12a9b19b561cd7403fc1362c49d0a3c990105f87b91a975c3a69f082f6c20) = 31, [ABORT_SYSTEM_ERROR](#a40ea12a9b19b561cd7403fc1362c49d0a3d9a09ae810d52c40b06d468866991fb) = 32,<br/>  [CHARGING_MODE_UNRESTRICTED](#a40ea12a9b19b561cd7403fc1362c49d0a65303937699c54a124f01e78f6b0c778) = 33, [CHARGING_MODE_CAR_CHARGER](#a40ea12a9b19b561cd7403fc1362c49d0abcc6616888db2f6196dfe2ad6fd81bc2) = 34, [POWER_BUTTON_PRESSED](#a40ea12a9b19b561cd7403fc1362c49d0a133bafcf1854e4513b813726d6cf5bff) = 37, [POWER_BUTTON_RELEASED](#a40ea12a9b19b561cd7403fc1362c49d0a6cfca8e555b914a5b68498fb9d52a589) = 38<br/>} |

|  |  |
|----|----|
| Functions |  |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Init](#a828c03869c165b8b79ebba5cccc27fa4) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Init](#affcdd833ed5aac0e91f5c9346edfbc4f) ([vfisyspmCallback](#af13eecf2baf53d8f7d4197fe496410dc) cb) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Init](#abdec5840b8be1aba2e4054207437fd38) ([vfisyspmCallback](#af13eecf2baf53d8f7d4197fe496410dc) cb, int typeMask) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Init](#ad9a48a6a21ba5c32e37f92e9e6263e48) ([vfisyspmCallback](#af13eecf2baf53d8f7d4197fe496410dc) cb, [vfisyspmNotificationType](#a12f0755f1d6c6a1c2116fd1d626a36b2) typeMask) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Deinit](#a691e7888b9004d8a527f419e7966df7f) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetNotificationCB](#a34c2604900fb863f387cb2485d5c8b8c) ([vfisyspmCallback](#af13eecf2baf53d8f7d4197fe496410dc) cb, [vfisyspmNotificationType](#a12f0755f1d6c6a1c2116fd1d626a36b2) typeMask) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetChargingMode](#a5993899ccf9771a2c045a4d15b65f621) ([vfisyspmChargningModes](#a52110948b0aa4715d6ff642d1cb32889) mode) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_GetChargingMode](#a72fd982609120a896c05d8f390c59dc9) ([vfisyspmChargningModes](#a52110948b0aa4715d6ff642d1cb32889) &mode) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_RefreshConfig](#a70b475852f505c319505a7b8d0a13193) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Active](#a7bac542d589655ccc9fd16450ccb0ccb) (int flags) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Active](#a72d161698f6401af9b44559284b818cd) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Standby](#add1c02a9ecf32dea3ffedb136972c7ce) (int flags) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Standby](#a957c8be2ed54e65a5498a98349b9cf86) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Sleep](#a60947349d2da486a930e8847c017b236) (int flags) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Sleep](#ac082ceac95b7703ded5445c8aee7536f) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_DeepSleep](#acb4d7c188a1d12752c5215a44ced3263) (int flags) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_DeepSleep](#add96f5e934bdadf2f6a41e189d6353e9) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Hibernate](#afe74f69646f3357df026f70ac5d943ae) (int flags) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Hibernate](#adb4b44a32a9f1d354d4e142519e6b46e) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Shutdown](#a5b1865b11b0d0bd3887347e29692b8c2) (int flags) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Shutdown](#a1c09afd331bb3ba33601a3ef580a2076) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Reboot](#ac2c3afe63131d7a7fb38604881c643db) (int flags) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_Reboot](#ad55a0bca60ed5c19f87f0a12e9e552e3) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_RebootDock](#af09cc28d263f6316e293617ab360c9cd) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_CriticalSectionEnter](#ac46060410ba78b557470d51eb9c90feb) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_CriticalSectionEnter](#aa27206ac015214c2b9826ceb931caee6) (int params) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_CriticalSectionExit](#a1fe354c573d66613fbae37897509cf04) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_CriticalSectionState](#a553702af12298474a0dbe35685aa582e) (bool &state) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetWakeupTime](#ab6864fd6fce20f5e804d9a9a6fe01239) (struct [vfisyspm_DateTime](#structvfisyspm_1_1vfisyspm___date_time) \*wakeupTime) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetWakeupTime](#a1ab01151064ddf942771a17725333694) ([wakeupHandle](#adeae56fc8c1e11c26aefe7ef065d48b5) &handle, const [vfisyspm_DateTime](#structvfisyspm_1_1vfisyspm___date_time) &wakeup_time) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetWakeupTime](#a2609875d7c7e7a16b50119430ea15802) ([wakeupHandle](#adeae56fc8c1e11c26aefe7ef065d48b5) &handle, time_t time) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetWakeupTime](#a8357d72c64c8dcf1a6f6d0069e9d7bf9) ([wakeupHandle](#adeae56fc8c1e11c26aefe7ef065d48b5) &handle, time_t time, [powermngtState](#ad6865f9a76c1985e26c2e86719fc674a) state, int flags) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetWakeupTime](#a7d682df53ed4dcfe7b15c21dc8fb064a) (time_t time) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_CancelWakeupTime](#a379d3c0293774ea6ae82c084715c9e6a) (const [wakeupHandle](#adeae56fc8c1e11c26aefe7ef065d48b5) &handle) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_ClearWakeupTimes](#a445bbf4ec804907506c633fef8e814f8) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetPciRebootTime](#a27733055b3dffa5f12f8a7a2fdaf4755) (struct [vfisyspm_DateTime](#structvfisyspm_1_1vfisyspm___date_time) \*rebootTime) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_GetPciRebootTime](#aa08792636f5c4645041fa8fe765108ce) (struct [vfisyspm_DateTime](#structvfisyspm_1_1vfisyspm___date_time) \*rebootTime) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_ClearPciRebootTime](#a8d11de8c8d681b6e9023abb735bd2f8a) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_GetConfig](#ac334c4dcb872d09be68678ee3fe4d348) (<a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &config) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetConfig](#a0d11383cc1a0947dd99a8eae48692218) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &config) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetTimer](#a68430a3c800754545a8d83b6213b848b) ([timerHandle](#ae4336e421149646b6ef2394f1c5118a3) &handle, const [vfisyspm_DateTime](#structvfisyspm_1_1vfisyspm___date_time) &time, const std::string &payload=\"\") |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetTimer](#ab520652032bdfab68634715ead24caf7) ([timerHandle](#ae4336e421149646b6ef2394f1c5118a3) &handle, const time_t time, const std::string &payload=\"\") |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetTimer](#af370c14d178d9ea52c63ba7fb2a0693a) ([timerHandle](#ae4336e421149646b6ef2394f1c5118a3) &handle, const time_t time, const std::string &payload, [timerNotificationCallback](#a1236e50ed89f0acbdce14dec534b6361) cb, int flags=0) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_CancelTimer](#a23b7b0a976a2d72581cba03f355fba6b) (const [timerHandle](#ae4336e421149646b6ef2394f1c5118a3) &handle) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_CancelTimers](#addd3c8a0add2df978b277b7a0591b9f1) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_CancelSleep](#a13541ab5c56e234226b5b9994fc78d90) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_SetTimerCallback](#af7e5cd36fc1da64f6d3bc6608150c40d) ([timerNotificationCallback](#a1236e50ed89f0acbdce14dec534b6361) cb) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_GetRebootReason](#a39c288392cb669a9ac2984e1ca54f57c) (std::string &reason) |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_StartSysmode](#aecc49995b326dd842df308d43f882fec) () |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_CriticalSectionList](#aad5db89fd567428a39c63cc68a3d62c8) (<a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &list) |
|   | Get list of applications currently holding critical section. [More\...](#aad5db89fd567428a39c63cc68a3d62c8)<br/> |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_GetCurrentState](#a6c55f9ea47af8b4082e4f3ce63be4ece) ([powermngtState](#ad6865f9a76c1985e26c2e86719fc674a) &state) |
|   | Get current PM daemon state. [More\...](#a6c55f9ea47af8b4082e4f3ce63be4ece)<br/> |
| const <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> char \*  | [sys_GetSvcVersion](#a3d4c62b4ad7152888495785a9efd3705) () |
|   | Get vfisyspm daemon version. [More\...](#a3d4c62b4ad7152888495785a9efd3705)<br/> |
| const <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> char \*  | [sys_GetVersion](#ae217f122b64926db63e29372317fa200) () |
|   | Get vfisyspm library version. [More\...](#ae217f122b64926db63e29372317fa200)<br/> |
| const <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> char \*  | [sys_StrError](#a2c4c002f9b1eed4e0e310fac1a764ad7) ([vfisyspmError](#a116cd14a22494b717a346ddd5be42746) error) |
|   | Get error description message. [More\...](#a2c4c002f9b1eed4e0e310fac1a764ad7)<br/> |
| <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)  | [sys_ResetBatteryFaultState](#a4d6492c4002bd0fe29ab6cb46860b3a6) () |
|   | Remove a faulty battery state. [More\...](#a4d6492c4002bd0fe29ab6cb46860b3a6)<br/> |

## DetailedDescription {#detailed-description}

Verifone Power management (vfisyspm) namespace

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfisyspm::vfisyspm_DateTime <a href="#structvfisyspm_1_1vfisyspm___date_time" id="structvfisyspm_1_1vfisyspm___date_time"></a>

<p>struct vfisyspm::vfisyspm_DateTime</p>

### Examples

<a href="pm-demo_8cpp-example.md#_a8">pm-demo.cpp</a>.

| Data Fields |          |                                               |
|-------------|----------|-----------------------------------------------|
| int         | tm_hour  | <p>hours</p>                |
| int         | tm_isdst | <p>daylight saving time</p> |
| int         | tm_mday  | <p>day of the month</p>     |
| int         | tm_min   | <p>minutes</p>              |
| int         | tm_mon   | <p>month</p>                |
| int         | tm_sec   | <p>seconds</p>              |
| int         | tm_wday  | <p>day of the week</p>      |
| int         | tm_yday  | <p>day in the year</p>      |
| int         | tm_year  | <p>year</p>                 |

## TypedefDocumentation {#typedef-documentation}

## timerHandle <a href="#ae4336e421149646b6ef2394f1c5118a3" id="ae4336e421149646b6ef2394f1c5118a3"></a>

<p>typedef int [timerHandle](#ae4336e421149646b6ef2394f1c5118a3)</p>

## timerNotificationCallback <a href="#a1236e50ed89f0acbdce14dec534b6361" id="a1236e50ed89f0acbdce14dec534b6361"></a>

<p>typedef void(\* timerNotificationCallback) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &json)</p>

## vfisyspmCallback <a href="#af13eecf2baf53d8f7d4197fe496410dc" id="af13eecf2baf53d8f7d4197fe496410dc"></a>

<p>typedef void(\* vfisyspmCallback) ([vfisyspmNotificationType](#a12f0755f1d6c6a1c2116fd1d626a36b2) type, [vfisyspmNotifications](#a40ea12a9b19b561cd7403fc1362c49d0) notification)</p>

Notify callback. The callback gets invoked when a matching notification has been sent.

**Parameters**

\[in\] **type** vfisyspmNotificationType of received notification \[in\] **notification** vfisyspmNotifications received notification


{% hint style="info" %}
All notification and observer callbacks share one thread, therefore, at most one callback can be active at the same time.
{% endhint %}

## wakeupHandle <a href="#adeae56fc8c1e11c26aefe7ef065d48b5" id="adeae56fc8c1e11c26aefe7ef065d48b5"></a>

<p>typedef int [wakeupHandle](#adeae56fc8c1e11c26aefe7ef065d48b5)</p>

## EnumerationType Documentation {#enumeration-type-documentation}

## powermngtState <a href="#ad6865f9a76c1985e26c2e86719fc674a" id="ad6865f9a76c1985e26c2e86719fc674a"></a>

<p>enum [powermngtState](#ad6865f9a76c1985e26c2e86719fc674a)</p>

Possible ADK-PM states

| Enumerator  |                                                          |
|-------------|----------------------------------------------------------|
| BOOT        | <p>System is booting</p>               |
| ACTIVE      | <p>System is in active state</p>       |
| STANDBY     | <p>Standby mode (screen is dimmed)</p> |
| SLEEP       | <p>Power saving sate</p>               |
| DEEP_SLEEP  | <p>Power saving sate</p>               |
| HIBERNATE   | <p>Power saving sate</p>               |
| OFF         | <p>System is going to shutdown</p>     |
| REBOOT      | <p>System is going to reboot</p>       |
| LAST        | <p>Placeholder</p>                     |

## vfisyspmChargningModes <a href="#a52110948b0aa4715d6ff642d1cb32889" id="a52110948b0aa4715d6ff642d1cb32889"></a>

<p>enum [vfisyspmChargningModes](#a52110948b0aa4715d6ff642d1cb32889)</p>

charging modes

| Enumerator |  |
|----|----|
| PM_CHARGING_MODE_UNRESTRICTED  | <p>Regular battery charging mode</p> |
| PM_CHARGING_MODE_CAR_CHARGER  | <p>Car charger mode</p> |

## vfisyspmCritSectionParameters <a href="#ad9757c6641d1ed2c0a5d438d08ce9cc0" id="ad9757c6641d1ed2c0a5d438d08ce9cc0"></a>

<p>enum [vfisyspmCritSectionParameters](#ad9757c6641d1ed2c0a5d438d08ce9cc0)</p>

critical section parameters

| Enumerator |  |
|----|----|
| PM_CRIT_NONE  |  |
| PM_CRIT_SUPRESS_STANDBY  | <p>Standby is not allowed in critical section</p> |

## vfisyspmError <a href="#a116cd14a22494b717a346ddd5be42746" id="a116cd14a22494b717a346ddd5be42746"></a>

<p>enum [vfisyspmError](#a116cd14a22494b717a346ddd5be42746)</p>

error codes returned by the functions

| Enumerator |  |
|----|----|
| SYS_PM_ERR_OK  | <p>no error</p> |
| SYS_PM_ERR_FAIL  | <p>generic error</p> |
| SYS_PM_ERR_UNSUPPORTED  | <p>function is not supported by current platform</p> |
| SYS_PM_ERR_UNKNOWN  | <p>unknown command</p> |
| SYS_PM_ERR_DAEMON_COM  | <p>communication error with the power management daemon</p> |
| SYS_PM_ERR_TIMEOUT  | <p>return code timeout</p> |
| SYS_PM_ERR_LIBNOTIFY  | <p>can\'t obtain appid</p> |
| SYS_PM_ERR_IPC  | <p>IPC call failed</p> |
| SYS_PM_ERR_NOT_RUNNING  | <p>PM daemon is not running</p> |
| SYS_PM_ERR_PARAM  | <p>incorrect parameter is passed</p> |
| SYS_PM_ERR_INIT  | <p>library is not initialized, run [sys_Init()](#a828c03869c165b8b79ebba5cccc27fa4)</p> |
| SYS_PM_ERR_IN_CRIT_SECTION  | <p>not allowed in critical section</p> |
| SYS_PM_ERR_POWER  | <p>not allowed while unit is powered</p> |
| SYS_PM_ERR_CHARGING  | <p>not allowed while unit is charging</p> |
| SYS_PM_ERR_CONFIG  | <p>disabled in current in configuration</p> |
| SYS_PM_ERR_NON_EXISTING  | <p>requested parameter doesn\'t exists</p> |
| SYS_PM_ERR_NOTIFY_SVC  | <p>notification service error</p> |
| SYS_PM_ERR_TIMER  | <p>generic timer subsystem error</p> |
| SYS_PM_ERR_ALREADY_INIT  | <p>library is already initialized</p> |
| SYS_PM_ERR_ALLOWED  | <p>operation is not allowed</p> |
| SYS_PM_ERR_STATE  | <p>wrong state for this operation</p> |
| SYS_PM_ERR_LOW_LEVEL  | <p>low level error</p> |
| SYS_PM_ERR_WAKE_UP_IS_PENDING  | <p>wake up is pending, low power state aborted</p> |

## vfisyspmNotifications <a href="#a40ea12a9b19b561cd7403fc1362c49d0" id="a40ea12a9b19b561cd7403fc1362c49d0"></a>

<p>enum [vfisyspmNotifications](#a40ea12a9b19b561cd7403fc1362c49d0)</p>

notifications returned by callback

| Enumerator |  |
|----|----|
| ENTER_BOOT  | <p>Unit entered Boot state. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ENTER_ACTIVE  | <p>Unit entered Active state. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ENTER_STANDBY  | <p>Unit entered Standby state. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ENTER_SLEEP  | <p>Unit entered Sleep state. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ENTER_DEEP_SLEEP  | <p>Unit entered Deep Sleep state. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ENTER_HIBERNATE  | <p>Unit entered Hibernate state. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ENTER_SHUTDOWN  | <p>Unit will now shutdown. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ENTER_REBOOT  | <p>Unit will now reboot. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ENTER_SYSMODE  | <p>Sysmode is starting. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ENTER_DOCKED  | <p>Unit is docked. Type: PM_NOTIFY_TYPE_DOCK_STATE</p> |
| ENTER_UNDOCKED  | <p>Unit is undocked. Type: PM_NOTIFY_TYPE_DOCK_STATE</p> |
| ENTER_BATTERY  | <p>Unit runs on battery. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| ENTER_EXTERNAL_POWER  | <p>Unit runs on external power source. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| ENTER_BATTERY_NORMAL  | <p>Battery charge is normal. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| ENTER_BATTERY_FULL  | <p>Battery is fully charged. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| ENTER_BATTERY_LOW  | <p>Battery charge is low. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| ENTER_BATTERY_CRITICAL  | <p>Battery charge is critical. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| BATTERY_FAULT  | <p>Faulty battery detected. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| BATTERY_REMOVED  | <p>Battery was removed from device. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| BUTTON_X_PRESSED  | <p>User is pressing X key. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| BUTTON_X_RELEASED  | <p>User released X key. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| PCI_REBOOT_WARNING  | <p>Unit will reboot soon. Type: PM_NOTIFY_TYPE_PCI_REBOOT</p> |
| WAKEUP  | <p>Unit is awaken from power saving state. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| WAKEUP_COMM  | <p>Unit was awaken by common wakeup-source (WiFi, BT, GPRS sync, AC line). Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE</p> |
| WAKEUP_USB  | <p>Unit was awaken by USB interface. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE</p> |
| WAKEUP_CONSOLE  | <p>Unit was awaken by serial interface. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE</p> |
| WAKEUP_KEY_PRESS  | <p>Unit was awaken by keyboard interface. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE</p> |
| WAKEUP_TIMER  | <p>Unit was awaken by HW timer. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE</p> |
| WAKEUP_EXTERNAL  | <p>Unit was awaken by external power cable. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE</p> |
| CRITICAL_SECTION_ENABLED  | <p>Unit entered critical section. Type: PM_NOTIFY_TYPE_CRITICAL_SECTION</p> |
| CRITICAL_SECTION_DISABLED  | <p>Unit exited critical section. Type: PM_NOTIFY_TYPE_CRITICAL_SECTION</p> |
| ABORT_PINPAD_ENABLE  | <p>Abort due to secure keypad (PINPAD) enabled. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ABORT_EARLY_WAKEUP  | <p>Abort due to pending wakeup event. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ABORT_HMAC_PROCESSING  | <p>Abort due to HMAC computation in progress. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ABORT_CRITICAL_SECTION  | <p>Abort due to critical section ON. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| ABORT_SYSTEM_ERROR  | <p>Abort due to sysem error. Type: PM_NOTIFY_TYPE_POWER_MODE</p> |
| CHARGING_MODE_UNRESTRICTED  | <p>Regular charging mode. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| CHARGING_MODE_CAR_CHARGER  | <p>Car charger mode. Type: PM_NOTIFY_TYPE_POWER_SOURCE</p> |
| POWER_BUTTON_PRESSED  | <p>User is pressing Power button. Type: PM_NOTIFY_TYPE_POWER_BUTTON</p> |
| POWER_BUTTON_RELEASED  | <p>User released Power button. Type: PM_NOTIFY_TYPE_POWER_BUTTON</p> |

## vfisyspmNotificationType <a href="#a12f0755f1d6c6a1c2116fd1d626a36b2" id="a12f0755f1d6c6a1c2116fd1d626a36b2"></a>

<p>enum [vfisyspmNotificationType](#a12f0755f1d6c6a1c2116fd1d626a36b2)</p>

notification type mask

| Enumerator                       |     |
|----------------------------------|-----|
| PM_NOTIFY_TYPE_NONE              |     |
| PM_NOTIFY_TYPE_POWER_MODE        |     |
| PM_NOTIFY_TYPE_DOCK_STATE        |     |
| PM_NOTIFY_TYPE_POWER_SOURCE      |     |
| PM_NOTIFY_TYPE_WAKEUP_SOURCE     |     |
| PM_NOTIFY_TYPE_CRITICAL_SECTION  |     |
| PM_NOTIFY_TYPE_PCI_REBOOT        |     |
| PM_NOTIFY_TYPE_POWER_BUTTON      |     |
| PM_NOTIFY_TYPE_LAST              |     |
| PM_NOTIFY_TYPE_ALL               |     |

## vfisyspmTimerFlags <a href="#a8bf72e0a67065ff830248d4f950bccf8" id="a8bf72e0a67065ff830248d4f950bccf8"></a>

<p>enum [vfisyspmTimerFlags](#a8bf72e0a67065ff830248d4f950bccf8)</p>

timer flags

| Enumerator           |                                                      |
|----------------------|------------------------------------------------------|
| PM_TIMER_NONE        |                                                      |
| PM_TIMER_NO_WAKE_UP  | <p>Timer will not wake up unit</p> |

## vfisyspmTransitionFlags <a href="#adffb93f77c4d1190fd7dc0397335b9a2" id="adffb93f77c4d1190fd7dc0397335b9a2"></a>

<p>enum [vfisyspmTransitionFlags](#adffb93f77c4d1190fd7dc0397335b9a2)</p>

transition flags

| Enumerator |  |
|----|----|
| PM_SUPPRESS_NONE  |  |
| PM_SUPPRESS_CRITICAL_SECTION  | <p>Ignore critical section</p> |
| PM_SUPPRESS_CHARGE_CHECK  | <p>Ignore charging</p> |
| PM_SUPPRESS_BOOT_STATE  | <p>Ignore boot state</p> |
| PM_SYNC  | <p>Synchronous API call</p> |
| PM_SUPPRESS_ALL  | <p>Ignore all checks</p> |

## FunctionDocumentation {#function-documentation}

## sys_Active()\[1/2\] <a href="#a72d161698f6401af9b44559284b818cd" id="a72d161698f6401af9b44559284b818cd"></a> {#sys_active-12}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Active</p>

## sys_Active()\[2/2\] <a href="#a7bac542d589655ccc9fd16450ccb0ccb" id="a7bac542d589655ccc9fd16450ccb0ccb"></a> {#sys_active-22}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Active</p>

Enter active mode

**Parameters**

\[in\] **flags** - vfisyspmTransitionFlags

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a28">pm-demo.cpp</a>.

## sys_CancelSleep() <a href="#a13541ab5c56e234226b5b9994fc78d90" id="a13541ab5c56e234226b5b9994fc78d90"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_CancelSleep</p>

Cancel upcoming low power mode state

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_UNSUPPORTED - Functionality is not supported

SYS_PM_ERR_FAIL - General error returned by OS

SYS_PM_ERR_STATE - Not in low power mode state

SYS_PM_ERR_OK - success

## sys_CancelTimer() <a href="#a23b7b0a976a2d72581cba03f355fba6b" id="a23b7b0a976a2d72581cba03f355fba6b"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_CancelTimer</p>

Cancel set timer

**Parameters**

\[in\] **handle**

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_NON_EXISTING - non existing handle

SYS_PM_ERR_OK - success

## sys_CancelTimers() <a href="#addd3c8a0add2df978b277b7a0591b9f1" id="addd3c8a0add2df978b277b7a0591b9f1"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_CancelTimers</p>

Cancel all timers set by application

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_CancelWakeupTime() <a href="#a379d3c0293774ea6ae82c084715c9e6a" id="a379d3c0293774ea6ae82c084715c9e6a"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_CancelWakeupTime</p>

Clears wake up time list

**Parameters**

\[in\] **handle**

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_NON_EXISTING - non existing handle

SYS_PM_ERR_OK - success

## sys_ClearPciRebootTime() <a href="#a8d11de8c8d681b6e9023abb735bd2f8a" id="a8d11de8c8d681b6e9023abb735bd2f8a"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_ClearPciRebootTime</p>

Clears PCI reboot time

### Returns

SYS_PM_ERR_OK - success

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_UNSUPPORTED - PCI reboot is not supported by platform

### Examples

<a href="pm-demo_8cpp-example.md#a27">pm-demo.cpp</a>.

## sys_ClearWakeupTimes() <a href="#a445bbf4ec804907506c633fef8e814f8" id="a445bbf4ec804907506c633fef8e814f8"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_ClearWakeupTimes</p>

Clears all wakeup times set by application

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_CriticalSectionEnter()\[1/2\] <a href="#ac46060410ba78b557470d51eb9c90feb" id="ac46060410ba78b557470d51eb9c90feb"></a> {#sys_criticalsectionenter-12}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_CriticalSectionEnter</p>

Enters PM critical section. Allows Standby

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a39">pm-demo.cpp</a>.

## sys_CriticalSectionEnter()\[2/2\] <a href="#aa27206ac015214c2b9826ceb931caee6" id="aa27206ac015214c2b9826ceb931caee6"></a> {#sys_criticalsectionenter-22}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_CriticalSectionEnter</p>

Enters PM critical section

**Parameters**

\[in\] **params** vfisyspmCritSectionParameters bitmask

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_CriticalSectionExit() <a href="#a1fe354c573d66613fbae37897509cf04" id="a1fe354c573d66613fbae37897509cf04"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_CriticalSectionExit</p>

Exits PM critical section

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a40">pm-demo.cpp</a>.

## sys_CriticalSectionList() <a href="#aad5db89fd567428a39c63cc68a3d62c8" id="aad5db89fd567428a39c63cc68a3d62c8"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_CriticalSectionList</p>

Get list of applications currently holding critical section.

**Parameters**

\[out\] **list** json encoded application list

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_CriticalSectionState() <a href="#a553702af12298474a0dbe35685aa582e" id="a553702af12298474a0dbe35685aa582e"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_CriticalSectionState</p>

Exits PM critical section

**Parameters**

\[out\] **state** if critical section is active or not

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a38">pm-demo.cpp</a>.

## sys_DeepSleep()\[1/2\] <a href="#add96f5e934bdadf2f6a41e189d6353e9" id="add96f5e934bdadf2f6a41e189d6353e9"></a> {#sys_deepsleep-12}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_DeepSleep</p>

## sys_DeepSleep()\[2/2\] <a href="#acb4d7c188a1d12752c5215a44ced3263" id="acb4d7c188a1d12752c5215a44ced3263"></a> {#sys_deepsleep-22}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_DeepSleep</p>

Enter deep sleep mode

**Parameters**

\[in\] **flags** - vfisyspmTransitionFlags

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a33">pm-demo.cpp</a>.

## sys_Deinit() <a href="#a691e7888b9004d8a527f419e7966df7f" id="a691e7888b9004d8a527f419e7966df7f"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Deinit</p>

Deinit library, disable notification callback

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a47">pm-demo.cpp</a>.

## sys_GetChargingMode() <a href="#a72fd982609120a896c05d8f390c59dc9" id="a72fd982609120a896c05d8f390c59dc9"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_GetChargingMode</p>

Get charging mode

**Parameters**

\[in\] **mode** charging mode from vfisyspmChargningModes enum

### Returns

SYS_PM_ERR_UNSUPPORTED - current platform is not supported

SYS_PM_ERR_IPC - can\'t init IPC

SYS_PM_ERR_TIMER - can\'t init timer thread

SYS_PM_ERR_OK - success

## sys_GetConfig() <a href="#ac334c4dcb872d09be68678ee3fe4d348" id="ac334c4dcb872d09be68678ee3fe4d348"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_GetConfig</p>

Returns current PM configuration

**Parameters**

\[out\] **config** json encoded PM configuration

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_GetCurrentState() <a href="#a6c55f9ea47af8b4082e4f3ce63be4ece" id="a6c55f9ea47af8b4082e4f3ce63be4ece"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_GetCurrentState</p>

Get current PM daemon state.

**Parameters**

\[in\] **handle**

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_NON_EXISTING - non existing handle

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a41">pm-demo.cpp</a>.

## sys_GetPciRebootTime() <a href="#aa08792636f5c4645041fa8fe765108ce" id="aa08792636f5c4645041fa8fe765108ce"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_GetPciRebootTime</p>

Get time for 24 hour PCI reboot

**Parameters**

\[out\] **rebootTime** reboot time

### Returns

SYS_PM_ERR_OK - success

SYS_PM_ERR_PARAM - invalid rebbotTime parameter

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_UNSUPPORTED - PCI reboot is not supported by platform


{% hint style="info" %}
only hour, minute and second fields are used
{% endhint %}

### Examples

<a href="pm-demo_8cpp-example.md#a21">pm-demo.cpp</a>.

## sys_GetRebootReason() <a href="#a39c288392cb669a9ac2984e1ca54f57c" id="a39c288392cb669a9ac2984e1ca54f57c"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_GetRebootReason</p>

Request last reboot reason

**Parameters**

\[out\] **reason** reason of last reboot

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_UNSUPPORTED - Functionality is not supported


SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a44">pm-demo.cpp</a>.

## sys_GetSvcVersion() <a href="#a3d4c62b4ad7152888495785a9efd3705" id="a3d4c62b4ad7152888495785a9efd3705"></a>

<p>const <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> char\* vfisyspm::sys_GetSvcVersion</p>

Get vfisyspm daemon version.

### Returns

\"N/A\" - can\'t obtain version

daemon version

### Examples

<a href="pm-demo_8cpp-example.md#a46">pm-demo.cpp</a>.

## sys_GetVersion() <a href="#ae217f122b64926db63e29372317fa200" id="ae217f122b64926db63e29372317fa200"></a>

<p>const <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> char\* vfisyspm::sys_GetVersion</p>

Get vfisyspm library version.

### Returns

\"N/A\" - can\'t obtain version

daemon version

### Examples

<a href="pm-demo_8cpp-example.md#a45">pm-demo.cpp</a>.

## sys_Hibernate()\[1/2\] <a href="#adb4b44a32a9f1d354d4e142519e6b46e" id="adb4b44a32a9f1d354d4e142519e6b46e"></a> {#sys_hibernate-12}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Hibernate</p>

## sys_Hibernate()\[2/2\] <a href="#afe74f69646f3357df026f70ac5d943ae" id="afe74f69646f3357df026f70ac5d943ae"></a> {#sys_hibernate-22}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Hibernate</p>

Enter hibernate mode

**Parameters**

\[in\] **flags** - vfisyspmTransitionFlags

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a34">pm-demo.cpp</a>.

## sys_Init()\[1/4\] <a href="#a828c03869c165b8b79ebba5cccc27fa4" id="a828c03869c165b8b79ebba5cccc27fa4"></a> {#sys_init-14}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Init</p>

Library initialization function

### Returns

SYS_PM_ERR_UNSUPPORTED - current platform is not supported

SYS_PM_ERR_IPC - can\'t init IPC

SYS_PM_ERR_TIMER - can\'t init timer thread

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a11">pm-demo.cpp</a>.

## sys_Init()\[2/4\] <a href="#affcdd833ed5aac0e91f5c9346edfbc4f" id="affcdd833ed5aac0e91f5c9346edfbc4f"></a> {#sys_init-24}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Init</p>

Library initialization function

**Parameters**

\[in\] **cb** notification callback

### Returns

SYS_PM_ERR_UNSUPPORTED - current platform is not supported

SYS_PM_ERR_IPC - can\'t init IPC

SYS_PM_ERR_TIMER - can\'t init timer thread

SYS_PM_ERR_OK - success

## sys_Init()\[3/4\] <a href="#abdec5840b8be1aba2e4054207437fd38" id="abdec5840b8be1aba2e4054207437fd38"></a> {#sys_init-34}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Init</p>

Library initialization function

**Parameters**

\[in\] **cb** notification callback \[in\] **typeMask** vfisyspmNotificationType mask, to register for specific notifications

### Returns

SYS_PM_ERR_UNSUPPORTED - current platform is not supported

SYS_PM_ERR_IPC - can\'t init IPC

SYS_PM_ERR_TIMER - can\'t init timer thread

SYS_PM_ERR_OK - success

## sys_Init()\[4/4\] <a href="#ad9a48a6a21ba5c32e37f92e9e6263e48" id="ad9a48a6a21ba5c32e37f92e9e6263e48"></a> {#sys_init-44}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Init</p>

## sys_Reboot()\[1/2\] <a href="#ad55a0bca60ed5c19f87f0a12e9e552e3" id="ad55a0bca60ed5c19f87f0a12e9e552e3"></a> {#sys_reboot-12}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Reboot</p>

## sys_Reboot()\[2/2\] <a href="#ac2c3afe63131d7a7fb38604881c643db" id="ac2c3afe63131d7a7fb38604881c643db"></a> {#sys_reboot-22}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Reboot</p>

Reboot device

**Parameters**

\[in\] **flags** - vfisyspmTransitionFlags

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a36">pm-demo.cpp</a>.

## sys_RebootDock() <a href="#af09cc28d263f6316e293617ab360c9cd" id="af09cc28d263f6316e293617ab360c9cd"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_RebootDock</p>

Reboot dock station

{% hint style="info" %}
Can be called only if terminal is docked
{% endhint %}

### Returns

SYS_PM_ERR_UNSUPPORTED - current platform is not supported

SYS_PM_ERR_NON_EXISTING - unit is not docked

SYS_PM_ERR_FAIL - failure

SYS_PM_ERR_OK - success


{% hint style="info" %}
When dock station is rebooting or not booted yet, e.g. when calling this function twice within short time interval on VOS2, then return code might be SYS_PM_ERR_FAIL or SYS_PM_ERR_NON_EXISTING
{% endhint %}

### Examples

<a href="pm-demo_8cpp-example.md#a37">pm-demo.cpp</a>.

## sys_RefreshConfig() <a href="#a70b475852f505c319505a7b8d0a13193" id="a70b475852f505c319505a7b8d0a13193"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_RefreshConfig</p>

Rescans available PM configuration files and configures PM accordingly

{% hint style="info" %}
if no configuration file is available on system, default values are set
{% endhint %}

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_ResetBatteryFaultState() <a href="#a4d6492c4002bd0fe29ab6cb46860b3a6" id="a4d6492c4002bd0fe29ab6cb46860b3a6"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_ResetBatteryFaultState</p>

Remove a faulty battery state.

### Returns

SYS_PM_ERR_OK - success


{% hint style="info" %}
Applications need to check for faulty battery:
a) on boot - using property: SYS_PROP_BATTERY_STATUS_OK
b) during runtime, using ADK PM notification PM_NOTIFY_TYPE_POWER_SOURCE with reason BATTERY_FAULT
After that notify users about the faulty battery.
Applications need to confirm with the user that the faulty battery got replaced.
Only after confirmation the API [sys_ResetBatteryFaultState()](#a4d6492c4002bd0fe29ab6cb46860b3a6 "Remove a faulty battery state.") can be called.
After calling [sys_ResetBatteryFaultState()](#a4d6492c4002bd0fe29ab6cb46860b3a6 "Remove a faulty battery state.") the application needs to reboot the device to let the change take effect.
Applications are taking responsibility for the above handling to guarantee battery safety when bypassing or disabling the system user notifications for faulty batteries.
{% endhint %}

## sys_SetChargingMode() <a href="#a5993899ccf9771a2c045a4d15b65f621" id="a5993899ccf9771a2c045a4d15b65f621"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetChargingMode</p>

Set charging mode

**Parameters**

\[in\] **mode** charging mode from vfisyspmChargningModes enum

### Returns

SYS_PM_ERR_UNSUPPORTED - current platform is not supported

SYS_PM_ERR_IPC - can\'t init IPC

SYS_PM_ERR_TIMER - can\'t init timer thread

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a18">pm-demo.cpp</a>.

## sys_SetConfig() <a href="#a0d11383cc1a0947dd99a8eae48692218" id="a0d11383cc1a0947dd99a8eae48692218"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetConfig</p>

Sets passed configuration

**Parameters**

\[in\] **config** json encoded PM configuration

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success


{% hint style="info" %}
JSON structure is similar to configuration file structure
{% endhint %}

## sys_SetNotificationCB() <a href="#a34c2604900fb863f387cb2485d5c8b8c" id="a34c2604900fb863f387cb2485d5c8b8c"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetNotificationCB</p>

Set notification callback

**Parameters**

\[in\] **cb** notification callback \[in\] **typeMask** vfisyspmNotificationType mask, to register for specific notifications

### Returns

SYS_PM_ERR_UNSUPPORTED - current platform is not supported

SYS_PM_ERR_IPC - can\'t init IPC

SYS_PM_ERR_TIMER - can\'t init timer thread

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a12">pm-demo.cpp</a>.

## sys_SetPciRebootTime() <a href="#a27733055b3dffa5f12f8a7a2fdaf4755" id="a27733055b3dffa5f12f8a7a2fdaf4755"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetPciRebootTime</p>

Sets precise time for 24 hour PCI reboot

**Parameters**

\[in\] **rebootTime** reboot time

### Returns

SYS_PM_ERR_OK - success

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_UNSUPPORTED - PCI reboot is not supported by platform


{% hint style="info" %}
only hour, minute and second fields will be used
Terminal should be rebooted for new value to be active
{% endhint %}

### Examples

<a href="pm-demo_8cpp-example.md#a26">pm-demo.cpp</a>.

## sys_SetTimer()\[1/3\] <a href="#af370c14d178d9ea52c63ba7fb2a0693a" id="af370c14d178d9ea52c63ba7fb2a0693a"></a> {#sys_settimer-13}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetTimer</p>

Set timer for certain time

**Parameters**

\[out\] **handle** \[in\] **time** \[in\] **payload** \[in\] **cb** \[in\] **flags**

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_SetTimer()\[2/3\] <a href="#ab520652032bdfab68634715ead24caf7" id="ab520652032bdfab68634715ead24caf7"></a> {#sys_settimer-23}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetTimer</p>

Set timer for certain time

**Parameters**

\[out\] **handle** \[in\] **time** \[in\] **payload**

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success


{% hint style="info" %}
timer will invoke callback set by sys_SetTimerCallback API
{% endhint %}

## sys_SetTimer()\[3/3\] <a href="#a68430a3c800754545a8d83b6213b848b" id="a68430a3c800754545a8d83b6213b848b"></a> {#sys_settimer-33}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetTimer</p>

Set timer for certain time

**Parameters**

\[out\] **handle** \[in\] **time** \[in\] **payload**

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success


{% hint style="info" %}
timer will invoke callback set by sys_SetTimerCallback API
{% endhint %}

### Examples

<a href="pm-demo_8cpp-example.md#a43">pm-demo.cpp</a>.

## sys_SetTimerCallback() <a href="#af7e5cd36fc1da64f6d3bc6608150c40d" id="af7e5cd36fc1da64f6d3bc6608150c40d"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetTimerCallback</p>

Register default timer callback This callback will be invoked in timer API if no timer specific callback is set

**Parameters**

\[in\] **cb** notification callback to be invoked


{% hint style="info" %}
only one default callback can be set
{% endhint %}

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_SetWakeupTime()\[1/5\] <a href="#ab6864fd6fce20f5e804d9a9a6fe01239" id="ab6864fd6fce20f5e804d9a9a6fe01239"></a> {#sys_setwakeuptime-15}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetWakeupTime</p>

Sets time to wake up from sleep

**Parameters**

\[in\] **\*wakeupTime** wake up time from Sleep

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_SetWakeupTime()\[2/5\] <a href="#a7d682df53ed4dcfe7b15c21dc8fb064a" id="a7d682df53ed4dcfe7b15c21dc8fb064a"></a> {#sys_setwakeuptime-25}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetWakeupTime</p>

Sets time to wake up from sleep

**Parameters**

\[in\] **time** wake up time from Sleep

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_SetWakeupTime()\[3/5\] <a href="#a1ab01151064ddf942771a17725333694" id="a1ab01151064ddf942771a17725333694"></a> {#sys_setwakeuptime-35}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetWakeupTime</p>

Sets time to wake up from sleep

**Parameters**

\[out\] **handle** \[in\] **wakeup_time** wake up time from Sleep

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_SetWakeupTime()\[4/5\] <a href="#a2609875d7c7e7a16b50119430ea15802" id="a2609875d7c7e7a16b50119430ea15802"></a> {#sys_setwakeuptime-45}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetWakeupTime</p>

Sets time to wake up from sleep

**Parameters**

\[out\] **handle** \[in\] **time** wake up time from Sleep

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_SetWakeupTime()\[5/5\] <a href="#a8357d72c64c8dcf1a6f6d0069e9d7bf9" id="a8357d72c64c8dcf1a6f6d0069e9d7bf9"></a> {#sys_setwakeuptime-55}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_SetWakeupTime</p>

Sets time to wake up from sleep

**Parameters**

\[out\] **handle** \[in\] **time** wake up time from Sleep \[in\] **state** wake up to certain state from enum powermngtState \[in\] **flags** for future use

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

## sys_Shutdown()\[1/2\] <a href="#a1c09afd331bb3ba33601a3ef580a2076" id="a1c09afd331bb3ba33601a3ef580a2076"></a> {#sys_shutdown-12}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Shutdown</p>

## sys_Shutdown()\[2/2\] <a href="#a5b1865b11b0d0bd3887347e29692b8c2" id="a5b1865b11b0d0bd3887347e29692b8c2"></a> {#sys_shutdown-22}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Shutdown</p>

Shut down device

**Parameters**

\[in\] **flags** - vfisyspmTransitionFlags

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a35">pm-demo.cpp</a>.

## sys_Sleep()\[1/2\] <a href="#ac082ceac95b7703ded5445c8aee7536f" id="ac082ceac95b7703ded5445c8aee7536f"></a> {#sys_sleep-12}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Sleep</p>

## sys_Sleep()\[2/2\] <a href="#a60947349d2da486a930e8847c017b236" id="a60947349d2da486a930e8847c017b236"></a> {#sys_sleep-22}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Sleep</p>

Enter sleep mode

**Parameters**

\[in\] **flags** - vfisyspmTransitionFlags

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a30">pm-demo.cpp</a>.

## sys_Standby()\[1/2\] <a href="#a957c8be2ed54e65a5498a98349b9cf86" id="a957c8be2ed54e65a5498a98349b9cf86"></a> {#sys_standby-12}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Standby</p>

## sys_Standby()\[2/2\] <a href="#add1c02a9ecf32dea3ffedb136972c7ce" id="add1c02a9ecf32dea3ffedb136972c7ce"></a> {#sys_standby-22}

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_Standby</p>

Enter standby mode

**Parameters**

\[in\] **flags** - vfisyspmTransitionFlags

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a29">pm-demo.cpp</a>.

## sys_StartSysmode() <a href="#aecc49995b326dd842df308d43f882fec" id="aecc49995b326dd842df308d43f882fec"></a>

<p><a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> [vfisyspmError](#a116cd14a22494b717a346ddd5be42746) vfisyspm::sys_StartSysmode</p>

Will start sysmode

### Returns

SYS_PM_ERR_INIT - library is not initialized

SYS_PM_ERR_TIMEOUT - PM daemon is not responding

SYS_PM_ERR_IPC - IPC library is not initialized

SYS_PM_ERR_NOTIFY_SVC - Notification service error

SYS_PM_ERR_LIBNOTIFY - Notification service error

SYS_PM_ERR_UNSUPPORTED - Functionality is not supported


SYS_PM_ERR_OK - success

### Examples

<a href="pm-demo_8cpp-example.md#a20">pm-demo.cpp</a>.

## sys_StrError() <a href="#a2c4c002f9b1eed4e0e310fac1a764ad7" id="a2c4c002f9b1eed4e0e310fac1a764ad7"></a>

<p>const <a href="group___power.md#ga60a5fae455021030347aeef511a88634">VFI_SYS_PM_API</a> char\* vfisyspm::sys_StrError</p>

Get error description message.

### Returns

Error message

### Examples

<a href="pm-demo_8cpp-example.md#a25">pm-demo.cpp</a>.

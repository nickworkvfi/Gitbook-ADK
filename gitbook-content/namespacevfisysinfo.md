---
hidden: true
title: vfisysinfo Namespace ReferenceSystem LED functions \| System statusbar functions \| System beep functions \| System property functions \| System property functions \| Low level system power management functions. Please use vfisyspm.h instead. \| Utility functions
---

[Data Structures](#nested-classes) \| [Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| class   | <a href="classvfisysinfo_1_1_ini_file.md">IniFile</a> |

|  |  |
|----|----|
| Typedefs |  |
| typedef void(\*  | [sysStatusbarCallback](#ac7fde07fc977e9f7312af64267659506)) (void \*data, int region_id, std::map\< std::string, std::string \> &values) |
| typedef <a href="namespacevfigui.md#a29ea0490208725e330b8b11f770b51a7">vfigui::uiAsyncCallback</a>  | [sysStatusbarReturnCallback](#a3ec38c5db698e56859eb3e175363d22f) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [LEDs](#ab6831a7d06c0a2bc69f9b024f6445a80) {<br/>  [CTLS_LED_NONE](#ab6831a7d06c0a2bc69f9b024f6445a80af426e11280e04b0573ee9096035b5541) = 0, [MSR_LED_NONE](#ab6831a7d06c0a2bc69f9b024f6445a80a8e09104d36ad9727494206d4e55221e4) = 0, [SYS_LED_NONE](#ab6831a7d06c0a2bc69f9b024f6445a80aac9b09da35c2d54eb64ab416abb37645) = 0, [MSR_LED_0](#ab6831a7d06c0a2bc69f9b024f6445a80a65798fde604548306d987ad18f7e6a8e) = (1\<\<0),<br/>  [MSR_LED_1](#ab6831a7d06c0a2bc69f9b024f6445a80a20d6d3474aef0298b73ffdbd68fc5d0e) = (1\<\<1), [MSR_LED_2](#ab6831a7d06c0a2bc69f9b024f6445a80a80698b4a6eb45a3a019ebcfa952a880c) = (1\<\<2), [KEYPAD_LED](#ab6831a7d06c0a2bc69f9b024f6445a80a27f5f55a7254ef7dbb9907f51ef0ddc6) = (1\<\<3), [SMARTCARD_LED](#ab6831a7d06c0a2bc69f9b024f6445a80a9b4d97ca299bb13e9449f7b7af2511c9) = (1\<\<4),<br/>  [CTLS_LED_LOGO](#ab6831a7d06c0a2bc69f9b024f6445a80a5d504864fade7b081567b450437747f7) = (1\<\<5), [CTLS_LED_0](#ab6831a7d06c0a2bc69f9b024f6445a80af3e19db98073f2485f8eeecfd937bb2b) = (1\<\<6), [CTLS_LED_1](#ab6831a7d06c0a2bc69f9b024f6445a80a13d0a3953ed0e8f578e938a61cd7e9e8) = (1\<\<7), [CTLS_LED_2](#ab6831a7d06c0a2bc69f9b024f6445a80addf37561061e07231c0d4e68bca26056) = (1\<\<8),<br/>  [CTLS_LED_3](#ab6831a7d06c0a2bc69f9b024f6445a80aa6a566782b1accb3be414926ed519baa) = (1\<\<9), [SYSTEM_LED](#ab6831a7d06c0a2bc69f9b024f6445a80a3e1390b17356b014e6e3bb74243a8e89) = (1\<\<10), [POWER_LED](#ab6831a7d06c0a2bc69f9b024f6445a80a4354634783e550e45e8c1c3de0fe7799) = (1\<\<11), [BLUETOOTH_LED](#ab6831a7d06c0a2bc69f9b024f6445a80acab8266e75d4b9e130cee4674862638e) = (1\<\<12),<br/>  [MODEM_LED](#ab6831a7d06c0a2bc69f9b024f6445a80afe56eb35bc594d8cfaf1b616dd31f927) = (1\<\<13), [GREEN_LED](#ab6831a7d06c0a2bc69f9b024f6445a80ac9da5c4501ff07f5930282709dec61b3) = (1\<\<14), [YELLOW_LED](#ab6831a7d06c0a2bc69f9b024f6445a80a9924710c1e80e5287b87b1d6541c3623) = (1\<\<15), [RED_LED](#ab6831a7d06c0a2bc69f9b024f6445a80aedcf3ad9edba345343e3d99b9d27d5a9) = (1\<\<16),<br/>  [MSR_LED_ALL](#ab6831a7d06c0a2bc69f9b024f6445a80a7b834594a2fa42d8d30faa3577421f99) = MSR_LED_0 \| MSR_LED_1 \| MSR_LED_2, [CTLS_LED_ALL](#ab6831a7d06c0a2bc69f9b024f6445a80a363205aef563ac04a7ac3a8236b5d55d) = CTLS_LED_0 \| CTLS_LED_1 \| CTLS_LED_2 \| CTLS_LED_3 \| CTLS_LED_LOGO<br/>} |
| enum   | [LedStates](#ac53d0dd4fdb8c227b07184816614b3f9) { [SWITCH_OFF](#ac53d0dd4fdb8c227b07184816614b3f9a31773366e575d3bc1209834eedf2f525) = 0, [SWITCH_ON](#ac53d0dd4fdb8c227b07184816614b3f9a44eaafa32143d3ddf31d2074e76a0f60) = 1 } |
| enum   | [LedBrightness](#a55dc64efc347b073c4504e53decdbe03) { [MAX_BRIGHTNESS](#a55dc64efc347b073c4504e53decdbe03a9d972ff013f6e9e28c0134c5a79ac88b) = 255, [MIN_BRIGHTNESS](#a55dc64efc347b073c4504e53decdbe03a8f32ee7ca5d7f834671f01e0f3bb4693) = 0 } |
| enum   | [sysError](#aadc050f211cba10bc174fe72cc02ac09) {<br/>  [SYS_ERR_OK](#aadc050f211cba10bc174fe72cc02ac09ab5f89011b3966738d416aa0aadf18d92) = 0, [SYS_ERR_PROP_UNSUPPORTED](#aadc050f211cba10bc174fe72cc02ac09aee91879eb5487ea1c08c5df3f2f24ce9) = -1, [SYS_ERR_PROP_READ_ONLY](#aadc050f211cba10bc174fe72cc02ac09acc98a3e7cf09547bd1edb15246e9a834) = -2, [SYS_ERR_PROP_WRITE_ONLY](#aadc050f211cba10bc174fe72cc02ac09a64be0d83464a4ed0029c2ab2dad2630e) = -3,<br/>  [SYS_ERR_PARAMETER](#aadc050f211cba10bc174fe72cc02ac09ad6fb86a08ba48db4f333915ae4a74aba) = -4, [SYS_ERR_PERMISSION](#aadc050f211cba10bc174fe72cc02ac09a98294b67b51a3fefb96bb3d2e561e21f) = -5, [SYS_ERR_REGION](#aadc050f211cba10bc174fe72cc02ac09a525b649bb9f37ad057660003e6fbe727) = -6, [SYS_ERR_FAIL](#aadc050f211cba10bc174fe72cc02ac09adc4c428b31b0c7764696b3f25121a08c) = -7,<br/>  [SYS_ERR_UNSUPPORTED](#aadc050f211cba10bc174fe72cc02ac09ad7f6353969ac3cbb2c079a77e7e66f03) = -8, [SYS_ERR_ACTIVE_TIMEZONE](#aadc050f211cba10bc174fe72cc02ac09a9ed2880f739be360d77a0f46c3a08691) = -9, [SYS_ERR_INSTALL_LIMIT](#aadc050f211cba10bc174fe72cc02ac09aa41059e859f567948cf01409b50a844d) = -10, [SYS_ERR_REBOOT_NEEDED](#aadc050f211cba10bc174fe72cc02ac09afa707e88cc69d08dcdeeb67c84970b41) = -11,<br/>  [SYS_ERR_FILE_DOES_NOT_EXIST](#aadc050f211cba10bc174fe72cc02ac09a185a7c2ce2ce941bf0a771e2de7c997d) = -12, [SYS_ERR_BUNDLE_VERSION](#aadc050f211cba10bc174fe72cc02ac09aac4414e4c98660e6af68dfcd51980ca2) = -13, [SYS_ERR_EXISTS](#aadc050f211cba10bc174fe72cc02ac09a9d0ca00f32b541af09a3800cd50a538b) = -14, [SYS_ERR_ACCESS](#aadc050f211cba10bc174fe72cc02ac09a6496b238204357c59002508061f1c172) = -15,<br/>  [SYS_ERR_NOT_DOCKED](#aadc050f211cba10bc174fe72cc02ac09a8ec7b5d155f0a7f69c2f34819499d887) = -16, [SYS_ERR_KEY_MISSING](#aadc050f211cba10bc174fe72cc02ac09a66e91b01c0d043dc3ce9481d89f221eb) = -17, [SYS_ERR_EXPECTED_KEY](#aadc050f211cba10bc174fe72cc02ac09a325e4a1a846270d97b6a3b0fea2f978d) = -18, [SYS_ERR_CONFIGURATIION](#aadc050f211cba10bc174fe72cc02ac09a8a1501bb254bd970165895642e54d6f5) = -19,<br/>  [SYS_ERR_PATHNAME_TOO_LONG](#aadc050f211cba10bc174fe72cc02ac09ae5ac24e380fc2047df8da4d580aabd2a) = -20, [SYS_ERR_GET_CWD](#aadc050f211cba10bc174fe72cc02ac09a917ddc6c0da221a3c40f7017b371148e) = -21, [SYS_ERR_IPC](#aadc050f211cba10bc174fe72cc02ac09a673ae20098cc84a102d32cbb09b6aae8) = -22, [SYS_ERR_RUNNING](#aadc050f211cba10bc174fe72cc02ac09af802e34f87c3c8f89e770366ed6cfa2f) = -23,<br/>  [SYS_ERR_SDI_NOT_CONNECTED](#aadc050f211cba10bc174fe72cc02ac09a271d06521567568f63b7007dd2e47fe5) = -24, [SYS_ERR_CALCULATING](#aadc050f211cba10bc174fe72cc02ac09a5e65ec20be12cfba8db8d7aac38371f6) = -25, [SYS_ERR_BASE_CTRL_NOT_AVAILABLE](#aadc050f211cba10bc174fe72cc02ac09a404a2a185d40b430e68a6ea2ac32d2ee) = -26, [SYS_ERR_ANDROID_NOT_AVAILABLE](#aadc050f211cba10bc174fe72cc02ac09a10037a2aeca857fcc0b26de926b81698) = -27<br/>} |
| enum   | [displayContrastConstants](#a41c1459dc516e6151fac2c8691eee617) {<br/>  [ContrastMin](#a41c1459dc516e6151fac2c8691eee617acd42cfafa914944214215ef5b280d6a0) = 1, [ContrastDefault](#a41c1459dc516e6151fac2c8691eee617a4aa7049fca80b0c114c6a58810a7c97b) = 8, [ContrastMax](#a41c1459dc516e6151fac2c8691eee617ad7dc539f1ccfb92c0ae04a256c6c1076) = 15, [ContrastUp](#a41c1459dc516e6151fac2c8691eee617ae3a3615487fa4a08a4d9d5b5cffffe1c) = 64,<br/>  [ContrastDown](#a41c1459dc516e6151fac2c8691eee617aa69483d74fedbc18081d8f5811f92fb4) = 65<br/>} |
| enum   | [batteryTechnology](#ab1364fb3f15eaef5512f0b2747d4d4d4) {<br/>  [BattTUnknown](#ab1364fb3f15eaef5512f0b2747d4d4d4a7edad747b28d7b0bbd4f17184bb367cf) = 0, [BattTNiMH](#ab1364fb3f15eaef5512f0b2747d4d4d4a8d31f3140c0b7bb90b95594a0a087600) = 1, [BattTLiIon](#ab1364fb3f15eaef5512f0b2747d4d4d4a386032e9ddc5b95eeb11a29f8fe9f7bb) = 2, [BattTLiPoly](#ab1364fb3f15eaef5512f0b2747d4d4d4a69607ea30927e68d969ff200bd6e98ef) = 3,<br/>  [BattTLiFe](#ab1364fb3f15eaef5512f0b2747d4d4d4a4e261ab3ae648ff55e3c15fb47dc2c5f) = 4, [BattTNiCd](#ab1364fb3f15eaef5512f0b2747d4d4d4a973081caa44c433fa76cce4047dfd306) = 5, [BattTLiMn](#ab1364fb3f15eaef5512f0b2747d4d4d4a6b2af0b39bca56f0b77c3e3ffdafac22) = 6<br/>} |
| enum   | [deviceMode](#a3fb5bf7c745ff826b7ea1ca5b9fb94bc) { [DEVICE_MANUF](#a3fb5bf7c745ff826b7ea1ca5b9fb94bca30c573a35eba1f66cf3b899df14f0179) = 0, [DEVICE_PROD](#a3fb5bf7c745ff826b7ea1ca5b9fb94bcac60b8f011f67416e164db992a45993d3) = 1, [DEVICE_OS_DEV](#a3fb5bf7c745ff826b7ea1ca5b9fb94bca144fe02356ac78084f453fa0c5a5631c) = 2, [DEVICE_CP_DEV](#a3fb5bf7c745ff826b7ea1ca5b9fb94bca0dcf8c45394789bd1e4ef29683e78003) = 3 } |
| enum   | [batteryChargeMode](#abc77bacf1ef4ca38d5c36d1bd0f0dbc3) { [UNRESTRICTED_CHARGE_MODE](#abc77bacf1ef4ca38d5c36d1bd0f0dbc3a7e8d9c7b8688b805ee7cb2295e76dea6) = 1, [CAR_CHARGER_MODE](#abc77bacf1ef4ca38d5c36d1bd0f0dbc3a902b5c5e44903e88c5d6d56a326fce61) = 2 } |
| enum   | [chargingPort](#ab1d3eb0719374c59ae67ae2510c2a227) { [CHARGING_USB_C_PORT](#ab1d3eb0719374c59ae67ae2510c2a227ae79146662f765a71ab7695847ea8a94b) = 0, [CHARGING_POGO_PORT](#ab1d3eb0719374c59ae67ae2510c2a227a980564640878fe6ba9f9ec4f1628c0a2) = 1 } |
| enum   | [sysUSBmode](#a646d1bfd53de12ebf78fd6c379f37a39) { [SYS_USB_UNKNOWN](#a646d1bfd53de12ebf78fd6c379f37a39ae100df3d9e4dbf59bccade11e0ccfb6a) = 0, [SYS_USB_DEFAULT](#a646d1bfd53de12ebf78fd6c379f37a39a407cbaa8892c0efcdb513649f984433b) = 1, [SYS_USB_HOST](#a646d1bfd53de12ebf78fd6c379f37a39a267d155a8e685efe64856fd287ff5676) = 2, [SYS_USB_DEVICE](#a646d1bfd53de12ebf78fd6c379f37a39a235b6713b250a970fab84ba8ba1e1d59) = 3 } |
| enum   | [deviceType](#aa5d3f9981cdbd91516c1474006a80fe4) { [DEVICE_NON_PORTABLE](#aa5d3f9981cdbd91516c1474006a80fe4a0a76cb221774c5b07465becb5ff7a35b) = 0, [DEVICE_HANDSET](#aa5d3f9981cdbd91516c1474006a80fe4ad10fc270e232050fab4d970e923161fc) = 1, [DEVICE_BASE](#aa5d3f9981cdbd91516c1474006a80fe4a000a391117ea01077a3520378c061e17) = 2, [DEVICE_MOBILE](#aa5d3f9981cdbd91516c1474006a80fe4a54c75bb379d16adfae33363dead54ed8) = 3 } |
| enum   | [batteryType](#ae805055fa35ecba75726c6df82f11579) { [BATTERY_TYPE_SMART](#ae805055fa35ecba75726c6df82f11579ad962f05aa6e67339bfebf84bde009b0b) = 1, [BATTERY_TYPE_SIMPLE](#ae805055fa35ecba75726c6df82f11579a3bc2a746a27a56c180b734e3b34985da) = 2 } |
| enum   | [keyboardType](#a7eb335c3825953082e42dc209ff04c05) {<br/>  [KEYBOARD_TYPE_UNKNOWN](#a7eb335c3825953082e42dc209ff04c05a6207fa417a81b4d72b69d00559f2ad2c) = 0, [KEYBOARD_TYPE_STANDARD](#a7eb335c3825953082e42dc209ff04c05afae94da55d3356c5333f374b839a7d8c) = 3, [KEYBOARD_TYPE_EBS100](#a7eb335c3825953082e42dc209ff04c05a978234c216689c385c8f440e0582321f) = 4, [KEYBOARD_TYPE_ARABIC](#a7eb335c3825953082e42dc209ff04c05a12010cf06ac4d0a0f5234827c518b292) = 5,<br/>  [KEYBOARD_TYPE_RNIB](#a7eb335c3825953082e42dc209ff04c05a2c89dec7f1e43a3b353030718c27deea) = 6<br/>} |
| enum   | [SYSPropertyInt](#a53e0b4c578c61cc0de3c3daa5fee72b6) {<br/>  [SYS_PROP_BATTERY_AVAILABLE](#a53e0b4c578c61cc0de3c3daa5fee72b6aefc67319cd8a7037e0b9d32d15f6031e) =0, [SYS_PROP_BATTERY_STATUS_OK](#a53e0b4c578c61cc0de3c3daa5fee72b6aa89f4d63707dc05ceb8ab3c06e1f8724) =1, [SYS_PROP_BATTERY_DEVICE](#a53e0b4c578c61cc0de3c3daa5fee72b6a3d8570a544f0a00df41fb3794c3ab574) =2, [SYS_PROP_BATTERY_VOLTAGE](#a53e0b4c578c61cc0de3c3daa5fee72b6a73e181a8f521c1dc5afe4b5e2daf1f90) =3,<br/>  [SYS_PROP_BATTERY_CAPACITY](#a53e0b4c578c61cc0de3c3daa5fee72b6abc37e1851d7ceb948147000c19557b1a) =4, [SYS_PROP_BATTERY_CHARGE_LEVEL](#a53e0b4c578c61cc0de3c3daa5fee72b6ae46779893654548bb0b7692f55f8360d) =5, [SYS_PROP_BATTERY_CHARGING](#a53e0b4c578c61cc0de3c3daa5fee72b6a9c15681c70f0381eae1df038c94b2347) =10, [SYS_PROP_BATTERY_FULL](#a53e0b4c578c61cc0de3c3daa5fee72b6a4371fbba406624f207c3807795d3873b) =11,<br/>  [SYS_PROP_BATTERY_TEMP](#a53e0b4c578c61cc0de3c3daa5fee72b6ad3c190ea8b87cade9b51e8c99778e90e) =13, [SYS_PROP_BATTERY_CURRENT](#a53e0b4c578c61cc0de3c3daa5fee72b6a8ff7df266f8d28410e5777ddd01b88a6) =14, [SYS_PROP_BATTERY_CRITICAL](#a53e0b4c578c61cc0de3c3daa5fee72b6a888f1afa77874e164141c5f7479f1792) =18, [SYS_PROP_BATTERY_LOW](#a53e0b4c578c61cc0de3c3daa5fee72b6a208ec2c5e2391b98c8f49cb89b5fe22b) =19,<br/>  [SYS_PROP_BATTERY_NORMAL](#a53e0b4c578c61cc0de3c3daa5fee72b6a967b67fbc6f5363196d5c12b6afc0455) =20, [SYS_PROP_BATTERY_TECHNOLOGY](#a53e0b4c578c61cc0de3c3daa5fee72b6a26d1913473b834cfa42887947f6f5d3e) =700, [SYS_PROP_BATTERY_FCC](#a53e0b4c578c61cc0de3c3daa5fee72b6aca1af4d63f4535be7647362998a79543) =701, [SYS_PROP_BATTERY_SOH](#a53e0b4c578c61cc0de3c3daa5fee72b6a55bec03e4f9a5c099cd36cbbc8ac8e28) =702,<br/>  [SYS_PROP_BATTERY_CHARGE_IN_SLEEP](#a53e0b4c578c61cc0de3c3daa5fee72b6a37527938ac672896d40befc88e40ccae) =21, [SYS_PROP_BATTERY_CALIBRATION](#a53e0b4c578c61cc0de3c3daa5fee72b6a7c651ba23bc342e93cd9a3ce10d16882) =705, [SYS_PROP_BATTERY_TYPE](#a53e0b4c578c61cc0de3c3daa5fee72b6a92badb495da634e27eea2927be7fbd1c) =706, [SYS_PROP_BATTERY_CHARGE_MODE](#a53e0b4c578c61cc0de3c3daa5fee72b6acecc3b39778929a06b2182b5c4fa4d7a) =707,<br/>  [SYS_PROP_CHARGE_CYCLE_COUNT](#a53e0b4c578c61cc0de3c3daa5fee72b6ac6a492411530c37ef8a07f9f57f3367d) =704, [SYS_PROP_UX100_AVAILABLE](#a53e0b4c578c61cc0de3c3daa5fee72b6a9bd293b29b4ad661b3ee1e704f35f6bc) =22, [SYS_PROP_UX100_OPERATIONAL_MODE](#a53e0b4c578c61cc0de3c3daa5fee72b6a96025196a71df79ff1c5b49afb1c724c) =24, [SYS_PROP_UX100_BACKLIGHT](#a53e0b4c578c61cc0de3c3daa5fee72b6a6e77acb76a717e179153e17ff05bc8ed) =209,<br/>  [SYS_PROP_UX400_AVAILABLE](#a53e0b4c578c61cc0de3c3daa5fee72b6ab7c6ca31643bc80b062818283172b1c3) =23, [SYS_PROP_UX115_UNIT](#a53e0b4c578c61cc0de3c3daa5fee72b6aef32bfa7bc4d93f4a4cb4037f8ccb7f4) =26, [SYS_PROP_UX_UNIT](#a53e0b4c578c61cc0de3c3daa5fee72b6aa260a84faff1b0c921fd9f5c07f6ea91) =25, [SYS_PROP_INTERNAL_BATTERY_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6a63b3a13f237ce79653aa2ade02353f58) =7,<br/>  [SYS_PROP_INTERNAL_BATTERY_VOLTAGE](#a53e0b4c578c61cc0de3c3daa5fee72b6a4833d131394eb6de47495e29055290ae) =8, [SYS_PROP_DOCKING_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6af8354dc76725e372b36488f53380b83f) =6, [SYS_PROP_DOCK_SUPPORT](#a53e0b4c578c61cc0de3c3daa5fee72b6aff00ec2256d2f36fe9fb651939ed087f) =15, [SYS_PROP_USB1_MODE](#a53e0b4c578c61cc0de3c3daa5fee72b6aaead90e48245d7d78ec76252549b3967) =16,<br/>  [SYS_PROP_USB2_MODE](#a53e0b4c578c61cc0de3c3daa5fee72b6a64fa0b3803f99c1ff6ea89c649492cfe) =17, [SYS_PROP_USB1_CONFIGURABLE](#a53e0b4c578c61cc0de3c3daa5fee72b6a154bda4ceea4e9d48abcb850448b3a33) =27, [SYS_PROP_USB2_CONFIGURABLE](#a53e0b4c578c61cc0de3c3daa5fee72b6a9919249f4c8fadd8ddd1a40b971aefb7) =28, [SYS_PROP_USB1_DEFAULT](#a53e0b4c578c61cc0de3c3daa5fee72b6a5a8907e62166fd08a976c4dc3aaf9573) =29,<br/>  [SYS_PROP_USB2_DEFAULT](#a53e0b4c578c61cc0de3c3daa5fee72b6abcc5abd90c186f32974945e1c5db89aa) =30, [SYS_PROP_USB1_CHARGE](#a53e0b4c578c61cc0de3c3daa5fee72b6a118533b786669fed5eb1f2947a5767ad) =31, [SYS_PROP_USB2_CHARGE](#a53e0b4c578c61cc0de3c3daa5fee72b6a96682017ea044f819484aef602988e2a) =32, [SYS_PROP_USB_HIGH_POWER_MODE](#a53e0b4c578c61cc0de3c3daa5fee72b6a9c75638018ec53517f3d705822ab7881) =38,<br/>  [SYS_PROP_PRINTER_AVAILABLE](#a53e0b4c578c61cc0de3c3daa5fee72b6a76d2f2429c6d311c0483a869a3a6d4fd) =9, [SYS_PROP_POWER_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6acabc9feddd1d3f6e4c9c940e159bdefd) =12, [SYS_PROP_POWER_ON](#a53e0b4c578c61cc0de3c3daa5fee72b6a4a51a29c38e901e1c72fde5e73feba73) =39, [SYS_PROP_CHARGE_ON_SAVING](#a53e0b4c578c61cc0de3c3daa5fee72b6a70731749397c88a6ccea34ecfb26d4f4) =703,<br/>  [SYS_PROP_KEYBOARD_BEEP](#a53e0b4c578c61cc0de3c3daa5fee72b6ae1c39d3bf7da90daf5bf075a97160888) =100, [SYS_PROP_KEYB_BACKLIGHT](#a53e0b4c578c61cc0de3c3daa5fee72b6a6554f51a46750fcfd60bcf927c6b546f) =101, [SYS_PROP_KEYBOARD_HW](#a53e0b4c578c61cc0de3c3daa5fee72b6a33444be655ab942232e2c595c533169f) =102, [SYS_PROP_KEYBOARD_SIZE](#a53e0b4c578c61cc0de3c3daa5fee72b6a5dc9cf0131fb2c7c75185cda3f6b7044) =103,<br/>  [SYS_PROP_DISP_CONTRAST](#a53e0b4c578c61cc0de3c3daa5fee72b6a5581e41b2f416c48aea2ae94dd2d35cc) =200, [SYS_PROP_DISP_BACKLIGHT](#a53e0b4c578c61cc0de3c3daa5fee72b6a5af0fd9d81e732b9f15962c0c340aa3f) =201, [SYS_PROP_DISP](#a53e0b4c578c61cc0de3c3daa5fee72b6abf54c5396d13503362d18e8716cf25af) =202, [SYS_PROP_DISP_HW](#a53e0b4c578c61cc0de3c3daa5fee72b6afdf36f463336d996544b9ed371512c17) =203,<br/>  [SYS_PROP_DISP_COLOR](#a53e0b4c578c61cc0de3c3daa5fee72b6afe687980907521c2e53028b2ad4babc8) =205, [SYS_PROP_DISP_HEIGHT](#a53e0b4c578c61cc0de3c3daa5fee72b6aec005ebac83ca731603686f66cd4a17e) =206, [SYS_PROP_DISP_WIDTH](#a53e0b4c578c61cc0de3c3daa5fee72b6ae43827746675b7159305b23b68a35ffd) =207, [SYS_PROP_DISP_TOUCH](#a53e0b4c578c61cc0de3c3daa5fee72b6ab3b1ae923edf7b0f6b2cbb5fd788edbd) =208,<br/>  [SYS_PROP_ANDROID](#a53e0b4c578c61cc0de3c3daa5fee72b6abea86f2adb2f792b1bd67028f5a8c436) =204, [SYS_PROP_HW_RAM_SIZE](#a53e0b4c578c61cc0de3c3daa5fee72b6ac45aecc8b4cdaeedc3e99f619ff93da9) =300, [SYS_PROP_HW_RAM_USED](#a53e0b4c578c61cc0de3c3daa5fee72b6a0b0ca2786f8cbe3f8c6c2159229de43d) =302, [SYS_PROP_HW_FLASH_SIZE](#a53e0b4c578c61cc0de3c3daa5fee72b6abd4d85110ee2d9283b0ccf4663948346) =301,<br/>  [SYS_PROP_HW_FLASH_USED](#a53e0b4c578c61cc0de3c3daa5fee72b6aa276858f56b1405ee82b1444ebe9951e) =303, [SYS_PROP_HW_EXE_PARTITION_SIZE](#a53e0b4c578c61cc0de3c3daa5fee72b6aae43134ab62237dab64dbe1ab6367fec) =307, [SYS_PROP_HW_EXE_PARTITION_USED](#a53e0b4c578c61cc0de3c3daa5fee72b6af71f5edbfeab0c9db116ececa03f7500) =308, [SYS_PROP_HW_DATA_PARTITION_SIZE](#a53e0b4c578c61cc0de3c3daa5fee72b6a131d64ad853672af8b4706a281c81399) =309,<br/>  [SYS_PROP_HW_DATA_PARTITION_USED](#a53e0b4c578c61cc0de3c3daa5fee72b6a94740d73d7f4596cda052d50e720cc60) =310, [SYS_PROP_HW_TOUCH_GROUNDED](#a53e0b4c578c61cc0de3c3daa5fee72b6ac9987251dfac389b35faedcb03a66476) =306, [SYS_PROP_LED](#a53e0b4c578c61cc0de3c3daa5fee72b6a5b10a0efae399b9119b75f8437650a31) =304, [SYS_PROP_PCI](#a53e0b4c578c61cc0de3c3daa5fee72b6ad4bc87b33e676f1b85b0e7ec92ad1e60) =305,<br/>  [SYS_PROP_VOLUME](#a53e0b4c578c61cc0de3c3daa5fee72b6ab245b84c72978864738d485ae1bc5b1f) =400, [SYS_PROP_SPEAKER_AVAILABLE](#a53e0b4c578c61cc0de3c3daa5fee72b6abcb899136da44e3bc105aab472aabe54) =401, [SYS_PROP_BUZZER_AVAILABLE](#a53e0b4c578c61cc0de3c3daa5fee72b6a1b9fd2445b0a1bf16097a9b189018f60) =402, [SYS_PROP_ADE_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6a2edf2297e30ddc12845a1793761bd0ba) =500,<br/>  [SYS_PROP_CERT_SPONSOR_PROD](#a53e0b4c578c61cc0de3c3daa5fee72b6a990a3118be6ffe60a3b09196ca021e75) =501, [SYS_PROP_ATTACK_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6ad7105f523f39aca2beafeed5d1e028ea) =502, [SYS_PROP_ATTACK_STATUS_CODE](#a53e0b4c578c61cc0de3c3daa5fee72b6a5e3b5089b7416513cf231b800b753c08) =513, [SYS_PROP_VCL_ENCRYPTION_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6a387a14a845076eb83744fb11db320b6b) =503,<br/>  [SYS_PROP_VOLTAGE_ENCRYPTION_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6ac2f774a05a5f69d19e80553f0dcbc159) =504, [SYS_PROP_POSEIDON_ENCRYPTION_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6a8ee75d6db3ccb061ee5bd6953938cd3b) =505, [SYS_PROP_NAVIGATOR_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6ab7df374ae885fb92848c4f31c2c8be3e) =506, [SYS_PROP_SERVICE_SWITCH_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6a08f92f27e3cf840b8ade35c77e4d373e) =507,<br/>  [SYS_PROP_DEVICE_MODE](#a53e0b4c578c61cc0de3c3daa5fee72b6a53b59b617148d6103f118f73ddefe054) =508, [SYS_PROP_SYSMODE_BUTTON](#a53e0b4c578c61cc0de3c3daa5fee72b6acc75fa2ba2022b32b265b8606a27ff19) =509, [SYS_PROP_DEVICE_TYPE](#a53e0b4c578c61cc0de3c3daa5fee72b6ac789f556bfc207077f1736a2ca07e625) =510, [SYS_PROP_VATS](#a53e0b4c578c61cc0de3c3daa5fee72b6ae08ccb599a0c0026f1202aaba28f5cba) =512,<br/>  [SYS_PROP_UX100_ANTI_REMOVAL_SWITCH](#a53e0b4c578c61cc0de3c3daa5fee72b6a6452a6809a05a64ec94578593d94b781) =511, [SYS_PROP_SLP_TAINTED_STATUS](#a53e0b4c578c61cc0de3c3daa5fee72b6ad8ca7302ece0ecd11d59705d7a03addf) =514, [SYS_PROP_UPTIME](#a53e0b4c578c61cc0de3c3daa5fee72b6a83bbd94a976b75aa96147596b46dcdb8) =600, [SYS_PROP_BARCODE_SCANNER](#a53e0b4c578c61cc0de3c3daa5fee72b6a1e627078426ad3ebc6512f512b79a55f) =33,<br/>  [SYS_PROP_CAMERA](#a53e0b4c578c61cc0de3c3daa5fee72b6a502c97a77a77d9761fb1055ad415cdaf) =34, [SYS_PROP_SWITCH_THRESHOLD_VOLTAGE](#a53e0b4c578c61cc0de3c3daa5fee72b6a7392b2cd6f44828067a7173ec138f291) =35, [SYS_PROP_LOW_THRESHOLD_VOLTAGE](#a53e0b4c578c61cc0de3c3daa5fee72b6ab82d94c6d1a7f20a2551396fc7664d3a) =36, [SYS_PROP_CONSOLE_STATE](#a53e0b4c578c61cc0de3c3daa5fee72b6a2ec32ae60ed3c4be6ea71d51b6de83ee) =37,<br/>  [SYS_PROP_UX_MDB](#a53e0b4c578c61cc0de3c3daa5fee72b6a4d3b4c2a8620f9aed28a26eea2895528) = 40, [SYS_PROP_CARD_SLOT2_MODE](#a53e0b4c578c61cc0de3c3daa5fee72b6a58796fbdad1c4a985719c91c8c9c4b2d) =41, [SYS_PROP_CARD_SLOT_COUNT](#a53e0b4c578c61cc0de3c3daa5fee72b6a7f8d2012f713181ad3854d402c141dd5) =42, [SYS_PROP_KEYBOARD_TYPE](#a53e0b4c578c61cc0de3c3daa5fee72b6a1d6b74eb399eaafc04a3c38277e7ab62) =43,<br/>  [SYS_PROP_EXT_NFC_ANTENNA](#a53e0b4c578c61cc0de3c3daa5fee72b6ad3de9b30d02418d8dc0e90e6c3d80245) =44, [SYS_PROP_VRK2_SUPPORT](#a53e0b4c578c61cc0de3c3daa5fee72b6a9243632ffa323a635e5b274e0f9f4c4c) =45, [SYS_PROP_USB_C_CHARGING_STATE](#a53e0b4c578c61cc0de3c3daa5fee72b6a10c958205e8720348e007f47080d8a2d) =708, [SYS_PROP_POGO_CHARGING_STATE](#a53e0b4c578c61cc0de3c3daa5fee72b6a4802d11ea057516792653701fafba407) =709,<br/>  [SYS_PROP_ECC_VRK_SUPPORT](#a53e0b4c578c61cc0de3c3daa5fee72b6a7cfd54b2ae30aef076602c1a78418b8b) =46, [SYS_PROP_LCD_PANEL_ID](#a53e0b4c578c61cc0de3c3daa5fee72b6af551f02e97e92e2d1d8dad2219352fc5) =47, [SYS_PROP_VRK_CERT_INSTALLED](#a53e0b4c578c61cc0de3c3daa5fee72b6a72179d4fa62bc0df93966920bb8d90e5) =48, [SYS_PROP_VRK_PACKAGING_UVRK_SUPPORT](#a53e0b4c578c61cc0de3c3daa5fee72b6a7f2802bdba2a6b9d3ba1c039065cb851) =49,<br/>  [SYS_PROP_POGO_DATA_STATE](#a53e0b4c578c61cc0de3c3daa5fee72b6a35dff060c5f4a9bb3517ed838f1e1c2c) =710, [SYS_PROP_ANDROID_PREFIX_LENGTH](#a53e0b4c578c61cc0de3c3daa5fee72b6ae2f2f514c4f22815c7cde6959bd046f3) =50, [SYS_PROP_UX100_TYPE](#a53e0b4c578c61cc0de3c3daa5fee72b6a788535e1ce73ce56ab5935befb51efb3) =51<br/>} |
| enum   | [SYSPropertyString](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5) {<br/>  [SYS_PROP_HW_MODEL_NAME](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a7d561d8e30e9d4bdf416a94b2a4e935e) =0, [SYS_PROP_HW_MODEL_NAME_SHORT](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aa8c1d890378799073bfab4b1ab6f79bb) =54, [SYS_PROP_HW_SERIALNO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aa3fa762fb6cfe51564a8d5c3d467aadc) =1, [SYS_PROP_OS_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a8fc1a63a16b1dc89107df762a4292487) =2,<br/>  [SYS_PROP_HW_PTID](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ac5a71632b851ff3b04bc6189305b0ccd) =3, [SYS_PROP_HW_VARIANT_NAME](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a5f4b19b7304b56c2ea3d9ac8094134eb) =4, [SYS_PROP_HW_PART_NO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a2737e98f4f848f6719edb19e29f8b1c2) =5, [SYS_PROP_HW_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aa3b079aefa9d23fa514c73bd09e8149f) =6,<br/>  [SYS_PROP_HW_LOT_NO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5abbcd45f660cc15ecb101669fa4ea23d3) =7, [SYS_PROP_BOOT_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a5ff94c4d417317c748e919d09fa3e7c6) =8, [SYS_PROP_TERMINAL_SPONSOR](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a792a2e993dcdb817306dc0ccdf1626fd) =9, [SYS_PROP_MANUF_DATE](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a27c287766d2773f1caf6bcb41e982a07) =10,<br/>  [SYS_PROP_CERT_SPONSOR_SN](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a51ef347801050f049f7a5af7f9a04879) =11, [SYS_PROP_CERT_SPONSOR_MODE](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a75c4704f290f74d9e96cb66c89be6823) =12, [SYS_PROP_ADK_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a8ab3a6e46e6619287bb6f21f54e6e649) =14, [SYS_PROP_UX100_SERIALNO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a0e652487d1965de8958f2352c0b7a322) =13,<br/>  [SYS_PROP_UX100_PARTNO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a037f139fb2f952df47db43eb91daa405) =65, [SYS_PROP_UX100_FW_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a7a1219176108d085f59739e9ecec2371) =15, [SYS_PROP_SBI_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aac4963dc9d597b0c5a3a1a23cc759152) =16, [SYS_PROP_VAULT_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ab9d957b338fcdff4b4ad9b9c0249afcd) =17,<br/>  [SYS_PROP_CIB_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ae1c3940464f170891652136f16ffdf30) =18, [SYS_PROP_MIB_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a4501cf719263a7631edd4b5b9d3a8964) =19, [SYS_PROP_KERNEL_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a324045684ff5ec20280af8f9a4021825) =20, [SYS_PROP_RFS_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5acf9e6439bd398e22ada1a6bbf9fb3a7e) =21,<br/>  [SYS_PROP_RELEASE_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ac228e85b7165bec5681885341e281a1d) =22, [SYS_PROP_RFS_SECURITY_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a6e2ad0a9e79f0de7a139a3ee753f714b) =23, [SYS_PROP_SRED_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aad961784fed78eb6cb41c9dc24bb98ea) =24, [SYS_PROP_SRED_MODE](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a6afd5690d909b01f174f91c26c01cb58) =75,<br/>  [SYS_PROP_OPENPROTOCOL_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a5ccfb823e05fd08a9757af28de4f1d3d) =25, [SYS_PROP_PCI_REBOOT_TIME](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a2a138d9b29c8a0b64f7f1d44de20fcc8) =26, [SYS_PROP_FILE_NAME_TO_INSTALL](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a5075cb0ddde96fe765df572a8c493d02) =27, [SYS_PROP_MSR_COUNTERS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aa90c372f124aca597377ae89db988799) =29,<br/>  [SYS_PROP_SCR_COUNTERS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a3bd49e99a5616e64f2d3ffd738892ff5) =30, [SYS_PROP_CTLS_COUNTERS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aa078ab77a5d121781695f88ece376b3d) =58, [SYS_PROP_DOCK_STATION_SN](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ab60cf7af6af0e5f58e9cfd15cb12700e) =31, [SYS_PROP_DOCK_STATION_PN](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ae93bfe57aa4984b2d2d38227ed89e357) =32,<br/>  [SYS_PROP_DOCK_STATION_MODEL](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a1a6b19ae30618fe8874a4cfd19d6a869) =33, [SYS_PROP_DOCK_STATION_MAC](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aae4c39ff63886e6bd6465f3701d2dca4) =34, [SYS_PROP_DOCK_STATION_HW_REV](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ad486139e3ac99a4ff4503e2972401f3b) =35, [SYS_PROP_DOCK_STATION_INSTALL](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5afe3bb54a6d26a845713f79df6da8f6c8) =36,<br/>  [SYS_PROP_GSM_FIRMWARE_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a8ace1a7b28d9626f27346d7bc7e5a0a0) =37, [SYS_PROP_DOCK_STATION_OS_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a7b6fec2bd0d208f73fcae0c3696aaa30) =38, [SYS_PROP_DOCK_STATION_IP_ADDRESS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a4f94bd9ec3b8e70e5d35a02442469035) =39, [SYS_PROP_DOCK_STATION_IP_V6_ADDRESS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a06a71a2f6bc3bf36c7b3042d3124c65d) =51,<br/>  [SYS_PROP_DOCK_STATION_USB1_IP_ADDRESS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a1d2f9ca7fffb18f84237107d527afdc9) =57, [SYS_PROP_ANDROID_IP_V4_ADDRESS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a28180a21097570b4a2e3ebf624aa9bb3) =59, [SYS_PROP_ANDROID_IP_V6_ADDRESS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a054197b33e074339c31a98b042a1acab) =66, [SYS_PROP_ANDROID_MAC](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a410fae5a9e8075564c7669615c6d3b23) =67,<br/>  [SYS_PROP_WARRANTIED_KEYS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a79df7419f287c7139ba51e801002b4e8) =53, [SYS_PROP_SECAPP_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a45c90c98bcd15d1bffc92a7e06a01d42) =40, [SYS_PROP_VSS_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a20704377fc6989cc98ff2f0261d50cfe) =41, [SYS_PROP_STBY_MCU_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aa051ac976b90c23973df5d4082941793) =42,<br/>  [SYS_PROP_EXT_STORAGE](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aca5b9f296c56e579d5789419858f58ee) =43, [SYS_PROP_INSTALLED_PCKG_LIST](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a1fb8147c3c6399a27003a405c2f334ca) =28, [SYS_PROP_PKG_LIST](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ae4e55e7a318ab9a6bc87d35db96535f2) =28, [SYS_PROP_APP_PKG_LIST](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a4928bd0adace70014a96ee5da5c95ea4) =44,<br/>  [SYS_PROP_BUNDLE_LIST](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5abc40a40708a95af3a3b26885c540d430) =45, [SYS_PROP_APP_BUNDLE_LIST](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a93c85c8a6862d9c5d4ed929a51ed05dc) =49, [SYS_PROP_MSR_INFO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a2ab3fe72ee58842ffc1bdec55d46fd87) =46, [SYS_PROP_SCR_INFO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a8bd463a79a4fff2cb3aa4757eac001ea) =47,<br/>  [SYS_PROP_CTLS_INFO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a9fb203fa02fbd686ad551a3a4b5b03fb) =48, [SYS_PROP_HW_STRING](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a820afb457966ee7375403baafc447e79) =50, [SYS_PROP_DEV_ID](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a50413150d2cf5c39a43f0128621e0482) =52, [SYS_PROP_FET](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a04847409c2a101bf3abcc2e3b05fe671) =55,<br/>  [SYS_PROP_BT_MAC](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a71fdcddc54ae6bd5740eb99054ffec9c) =60, [SYS_PROP_WIFI_MAC](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5abfc879b8385f2e14158be213f55b90c4) =61, [SYS_PROP_ETH_MAC](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ab3e3c166a26b816acf61f7bc2bc94912) =62, [SYS_PROP_ETH2_MAC](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ae8d206bf1bf48cd4dd5445b60911343b) =63,<br/>  [SYS_PROP_COUNTRY](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a204a207f84472bea854184a4affb74a7) =64, [SYS_PROP_RTC](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5acc6155fb36b174c57c784326228e50a3) =100, [SYS_PROP_NTP_SERVER](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ae5a863c5d8864f466473646efd9885fe) =101, [SYS_PROP_BATTERY_SERIALNO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a9da144330f85e3767920716128cfec94) =200,<br/>  [SYS_PROP_TIME_ZONE](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5af86d8d7cfe224b255b9642e863fe4b07) =300, [SYS_PROP_TIME_ZONE_LIST](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5af53e6ac1fc05d6b953c802067587f8e1) =301, [SYS_PROP_TIME_ZONE_FROM_FILE](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a11b66a87725375dfff3ff9cecca51375) =302, [SYS_PROP_TIME_ZONE_NAME](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a418649eca34ab3a86418cc1846adf062) =304,<br/>  [SYS_PROP_TIME_ISO8601](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a94fc9dde3f48015c6d3ab0ad42338293) =303, [SYS_PROP_REBOOT_REASON](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ae79dd5af0c3fcae3268e1c74da0387e7) =400, [SYS_PROP_ALL_LOADED_KEYS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a6d56e1f9158ae2a3654065a855c5df90) =56, [SYS_PROP_ALL_LOADED_KEYS_V2](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a22c87a9c4e15c984c3af9697edd4d253) =80,<br/>  [SYS_PROP_TAMPER_RECORDS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ae1272a1a468b0a7692d950b41ba50a88) =68, [SYS_PROP_BARCODE_SCANNER_FW_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ab358e2b432363ea56fee93f360bc41c3) =69, [SYS_PROP_ANDROID_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a995dc60fe948eb479e8e59d2fbb66685) =70, [SYS_PROP_STATUSBAR_COLOR](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a9fced6aaff93a1decfac22b8bbf9a232) =71,<br/>  [SYS_PROP_ANDROID_TIME](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ada1b86b61a94b461d95909a82681b6a7) =72, [SYS_PROP_MTD_INFO](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a9b246aaf364d64b76d6c78e0d86af640) =73, [SYS_PROP_HW_ID](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a0b9617674a9d745f38290f36d6197848) =74, [SYS_PROP_LCD_PANEL_MODEL](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5abfd76aaae223630aedbe51f14d43e865) =76,<br/>  [SYS_PROP_DT_NAME](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a49602db3d2f22d0ed1210e21a092a654) =77, [SYS_PROP_PCI_APPS](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a080de5bf14f866384329233e8c4a1bde) =78, [SYS_PROP_FW_PCI_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5aca5a1c92bfa6163af1228294bf2adbca) =79, [SYS_PROP_HW_MODEL_NAME_SEC](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a832c4fc03cdc12433b7c7af94f521f10) =81,<br/>  [SYS_PROP_MOBILE_RADIO_SW_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a53c2e133b245023c89afe8ed54ed17ec) =82, [SYS_PROP_TOUCH_NAME](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a24269c1926357ee3c6dfd9a278b2d3bd) =83, [SYS_PROP_TOUCH_HW_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a33054a071b5e7070d27574a35c421a2a) =84, [SYS_PROP_TOUCH_SW_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5ac0bdb84838ac7073f6980e30115c09a9) =85,<br/>  [SYS_PROP_TOUCH_CONFIG_VERSION](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a705e026b15184535f093a4b69ae4d1dc) =86, [SYS_PROP_ANDROID_GATEWAY](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5abce7c9c1828c1f109b1db45ee0bef855) =87, [SYS_PROP_ANDROID_DNS1](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a38554f4c78dc32a40bf4b3c16ca3a24f) =88, [SYS_PROP_ANDROID_DNS2](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5a54de65f74acca0e59f0be26dd73e498f) =89<br/>} |

|  |  |
|----|----|
| Functions |  |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [ctlsLedsChangeState](#aee000a15a06178175634163e5591b00a) (int ledMap) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [msrLedsChangeState](#aabc99b91721225db16d2ff8358631fe2) (int ledMap) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [scrLedChangeState](#a1587dae29ddad22c7def2be5eac61ff8) (int state) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysLedsChangeState](#a468b20d075222dd30fabc2c3633cb50d) (int ledMap) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [msrShowRunway](#a2ccd3d074bc8c8d3ae6f502232ebe897) (int repeatCount) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [msrShowCancel](#a0a2dc873f3bc7fafff5d08336d8eeaf6) (void) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [logoLedChangeState](#a1eda2d856d4d40113571a95d3d6a4277) (int state) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [setBrightness](#ab373028a6c5ee63e4e24a4bab90bf220) (unsigned int ledMap, int brightness) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> bool  | [isBrightnessAdjustable](#aaa8c401ff147fb47c360e6f2539f9d63) (unsigned int ledId) |
| <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int  | [sysStartStatusbarURL](#adb049b3a939a78dedeae1ac9aa15c9df) (int region_id, const std::string &url, const std::map\< std::string, std::string \> &values, [sysStatusbarCallback](#ac7fde07fc977e9f7312af64267659506) cb=0, void \*cbdata=0) |
| <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int  | [sysStartStatusbarURLReturnVal](#a6401aac22f963860ed0cc55c227ecf8f) (int region_id, const std::string &url, const std::map\< std::string, std::string \> &values, [sysStatusbarCallback](#ac7fde07fc977e9f7312af64267659506) cb, void \*cbdata, [sysStatusbarReturnCallback](#a3ec38c5db698e56859eb3e175363d22f) returncb) |
| <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int  | [sysStartStatusbar](#a002c2133e3e778923940535109afcca4) (int region_id, const std::string &html, const std::map\< std::string, std::string \> &values, const std::string &resource_path=std::string(), [sysStatusbarCallback](#ac7fde07fc977e9f7312af64267659506) cb=0, void \*cbdata=0, [sysStatusbarReturnCallback](#a3ec38c5db698e56859eb3e175363d22f) returncb=0) |
| <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int  | [sysStopStatusbar](#aa28127dbc1ddc94bd9c2b784a98c634c) (int region_id) |
| <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int  | [sysSetStatusbarValues](#a445f352501e089696320af9f48a43013) (int region_id, const std::map\< std::string, std::string \> &values) |
| <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int  | [sysGetStatusbarValues](#a5babb03e766504b26dde5e51a7f5940d) (int region_id, std::map\< std::string, std::string \> &values) |
| <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int  | [sysSetRefreshTime](#aab58488e2ed93f92618307af850f9880) (int region_id, int refresh_time_ms) |
| <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int  | [sysGetRefreshTime](#aec0cd92586bee1cd0df1d8637994983a) (int region_id, int \*refresh_time_ms) |
| <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int  | [sysRefreshStatusBar](#a0a4c0bc815229837e50e2353c1fb9f51) (int region_id) |
| const <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> char \*  | [sysStatusbar_GetVersion](#a8ce093c74ec3a14ede2e8a89ac6af707) () |
| const <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> char \*  | [sysStatusbarGetVersion](#ab9295a05fc42ca989db452a788e77400) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysBeepNormal](#a44a9ee5ce7fe78c798eb2ad1db29c356) (int volume) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysBeepError](#afe4e3fa3d5e705451be9469978f7fd44) (int volume) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysPlaySound](#a920110b547bce1eb8e0c016d4064886f) (int note, int duration, int volume) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysPlaySoundFreq](#a345cb89a149cb5931e68a989da7c5a32) (int frequency, int duration, int volume) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysGetPropertyInt](#ab94a5b33000760afbee10e7fefd16355) (enum [SYSPropertyInt](#a53e0b4c578c61cc0de3c3daa5fee72b6) property, int &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysGetPropertyInt](#ab66a32926c2ccacb867114cfbcbef1d7) (enum [SYSPropertyInt](#a53e0b4c578c61cc0de3c3daa5fee72b6) property, int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysSetPropertyInt](#a377307b06ac969f30af51e7cccf94dbb) (enum [SYSPropertyInt](#a53e0b4c578c61cc0de3c3daa5fee72b6) property, int <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysGetPropertyString](#af6c938992e005c446c81e7f1fe3e4ed3) (enum [SYSPropertyString](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5) property, char \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, int len) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysSetPropertyString](#ae7c891a4a38d050452eee0939a7f82de) (enum [SYSPropertyString](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5) property, const char \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysGetPropertyString](#acec685f395fb99dfba2c189ae8f4614b) (enum [SYSPropertyString](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5) property, std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysSetPropertyString](#a5673a3f04e45faf278515ddf0f2679ea) (enum [SYSPropertyString](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5) property, const std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| const <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> char \*  | [sysInfo_GetVersion](#a37689c755c1f4235c484b9079dfdfaa6) () |
| const <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> char \*  | [sysLibInfo_GetVersion](#a2ea645c1932f87870a8b3efdd3406e98) () |
| const <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> char \*  | [sysGetVersion](#abc840ced7fc2155fcd4c9d1092d8d862) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysReboot](#aae13f271ba6f2d8d1e20d65785df0633) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysSleep](#aa4e2bde8892f7c052fc3ab3efb80a473) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysDeepSleep](#a363ef3b20e3852f6e6cd87085b295f22) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysHibernate](#a6709c064e4794698a20ca0f076a4345f) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysShutdown](#a208c6199b44128a4bccf6fae0be44c95) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysRebootDock](#a3a740e4154bfe01a6f48463a766ee747) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> std::string  | [sysErrorMsg](#a926cb3391c24a1a16c5ffd22e1cb7e73) (enum [sysError](#aadc050f211cba10bc174fe72cc02ac09) code) |
| const <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> char \*  | [sysErrorMessage](#ad76462c4331a43ce2ae5245d237fad21) (enum [sysError](#aadc050f211cba10bc174fe72cc02ac09) code) |
| const char \*  | [sysSDKVersion](#a1a0fd931f24992061dd22d0a4ff16126) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void  | [Dsp2Hex](#a90408ce42d820e13f0f2c7daf474e549) (char \*dsp, long \*hex, unsigned int n) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysPutEnv](#a209d53b4f90b64ad292fa420911cb385) (const std::string &section, const std::string &label, const std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysGetEnv](#a2f4d2c358c2c96255fe07dc63815c341) (const std::string &section, const std::string &label, std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |

## DetailedDescription {#detailed-description}

Verifone system information (vfisysinfo) namespace

## TypedefDocumentation {#typedef-documentation}

## sysStatusbarCallback <a href="#ac7fde07fc977e9f7312af64267659506" id="ac7fde07fc977e9f7312af64267659506"></a>

<p>typedef void(\* sysStatusbarCallback) (void \*data, int region_id, std::map\< std::string, std::string \> &values)</p>

Callback function that is called every time before the statusbar is refreshed. The statusbar is refreshed at regular intervals, which are specified by the refresh time that can be configured with function [sysSetRefreshTime()](#aab58488e2ed93f92618307af850f9880). Application may add customized values to map *values* that should be passed to next <a href="namespacevfigui.md#af330e250493b2c6546274bea96d87fca">uiInvoke()</a> to refresh the statusbar.

**Parameters**

\[in\] **data** data pointer provided by the application \[in\] **region_id** ID of the GUI region, from which the statusbar callback is triggered \[in,out\] **values** values to be passed to next uiInvoke() call for this statusbar. The map already contains values set by sysSetStatusbarValues().

### Returns

true, if the statusbar should be refreshed, else no refresh is done.


{% hint style="info" %}
It is not allowed to call any statusbar API functions on the same region *region_id* from inside the callback function. All API functions will return SYS_ERR_PERMISSION in this case.
{% endhint %}

## sysStatusbarReturnCallback <a href="#a3ec38c5db698e56859eb3e175363d22f" id="a3ec38c5db698e56859eb3e175363d22f"></a>

<p>typedef <a href="namespacevfigui.md#a29ea0490208725e330b8b11f770b51a7">vfigui::uiAsyncCallback</a> [sysStatusbarReturnCallback](#a3ec38c5db698e56859eb3e175363d22f)</p>

Callback function which is called by gui in case as an update

{% hint style="info" %}
this callback function is discribed in <a href="gui_8h.md">html/gui.h</a> header file *if* statusbar refersh is disabled - this sysRefresStatusBar should be called to reset callback
{% endhint %}

## EnumerationType Documentation {#enumeration-type-documentation}

## batteryChargeMode <a href="#abc77bacf1ef4ca38d5c36d1bd0f0dbc3" id="abc77bacf1ef4ca38d5c36d1bd0f0dbc3"></a>

<p>enum [batteryChargeMode](#abc77bacf1ef4ca38d5c36d1bd0f0dbc3)</p>

Battery charge mode used in SYS_PROP_BATTERY_CHARGE_MODE property.

| Enumerator |  |
|----|----|
| UNRESTRICTED_CHARGE_MODE  | <p>Unrestricted charge mode</p> |
| CAR_CHARGER_MODE  | <p>Car charger mode</p> |

## batteryTechnology <a href="#ab1364fb3f15eaef5512f0b2747d4d4d4" id="ab1364fb3f15eaef5512f0b2747d4d4d4"></a>

<p>enum [batteryTechnology](#ab1364fb3f15eaef5512f0b2747d4d4d4)</p>

Battery type used for SYS_PROP_BATTERY_TECHNOLOGY property.

| Enumerator    |                                               |
|---------------|-----------------------------------------------|
| BattTUnknown  | <p>Battery type unknown</p> |
| BattTNiMH     | <p>Battery type NiMH</p>    |
| BattTLiIon    | <p>Battery type LiIon</p>   |
| BattTLiPoly   | <p>Battery type LiPoly</p>  |
| BattTLiFe     | <p>Battery type LiFe</p>    |
| BattTNiCd     | <p>Battery type NiCd</p>    |
| BattTLiMn     | <p>Battery type LiMn</p>    |

## batteryType <a href="#ae805055fa35ecba75726c6df82f11579" id="ae805055fa35ecba75726c6df82f11579"></a>

<p>enum [batteryType](#ae805055fa35ecba75726c6df82f11579)</p>

Battery type used in SYS_PROP_BATTERY_TYPE property.

| Enumerator |  |
|----|----|
| BATTERY_TYPE_SMART  | <p>Smart battery</p> |
| BATTERY_TYPE_SIMPLE  | <p>Simple battery (No fuel gauge)</p> |

### Examples

<a href="demo-sysinfo_8cpp-example.md#a89">demo-sysinfo.cpp</a>.

## chargingPort <a href="#ab1d3eb0719374c59ae67ae2510c2a227" id="ab1d3eb0719374c59ae67ae2510c2a227"></a>

<p>enum [chargingPort](#ab1d3eb0719374c59ae67ae2510c2a227)</p>

Charging port used in SYS_PROP_USB_C_CHARGING_STATE / SYS_PROP_POGO_PIN_CHARGING_STATE property

| Enumerator           |                                              |
|----------------------|----------------------------------------------|
| CHARGING_USB_C_PORT  | <p>charging USB-C port</p> |
| CHARGING_POGO_PORT   | <p>charging POGO port</p>  |

## deviceMode <a href="#a3fb5bf7c745ff826b7ea1ca5b9fb94bc" id="a3fb5bf7c745ff826b7ea1ca5b9fb94bc"></a>

<p>enum [deviceMode](#a3fb5bf7c745ff826b7ea1ca5b9fb94bc)</p>

Device mode used in SYS_PROP_DEVICE_MODE property.

| Enumerator |  |
|----|----|
| DEVICE_MANUF  | <p>Device is in manufacturing mode</p> |
| DEVICE_PROD  | <p>Device is in production mode</p> |
| DEVICE_OS_DEV  | <p>Device is in OS development mode</p> |
| DEVICE_CP_DEV  | <p>Device is in test mode (CP development mode)</p> |

## deviceType <a href="#aa5d3f9981cdbd91516c1474006a80fe4" id="aa5d3f9981cdbd91516c1474006a80fe4"></a>

<p>enum [deviceType](#aa5d3f9981cdbd91516c1474006a80fe4)</p>

Device mode used in SYS_PROP_DEVICE_TYPE property.

| Enumerator |  |
|----|----|
| DEVICE_NON_PORTABLE  | <p>Non portable device (non dockable unit)</p> |
| DEVICE_HANDSET  | <p>Device is portable (dockable unit)</p> |
| DEVICE_BASE  | <p>Device is base</p> |
| DEVICE_MOBILE  | <p>Mobile device (non dockable unit)</p> |

## displayContrastConstants <a href="#a41c1459dc516e6151fac2c8691eee617" id="a41c1459dc516e6151fac2c8691eee617"></a>

<p>enum [displayContrastConstants](#a41c1459dc516e6151fac2c8691eee617)</p>

Display contrast constants for SYS_PROP_DISP_CONTRAST property.

| Enumerator       |                                                    |
|------------------|----------------------------------------------------|
| ContrastMin      | <p>Minimal display contrast</p>  |
| ContrastDefault  | <p>Default display contrast</p>  |
| ContrastMax      | <p>Maximal display contrast</p>  |
| ContrastUp       | <p>Increase display contrast</p> |
| ContrastDown     | <p>Decrease display contrast</p> |

## keyboardType <a href="#a7eb335c3825953082e42dc209ff04c05" id="a7eb335c3825953082e42dc209ff04c05"></a>

<p>enum [keyboardType](#a7eb335c3825953082e42dc209ff04c05)</p>

Keyboard type used in SYS_PROP_KEYBOARD_TYPE poperty.

| Enumerator              |                                                |
|-------------------------|------------------------------------------------|
| KEYBOARD_TYPE_UNKNOWN   |                                                |
| KEYBOARD_TYPE_STANDARD  | <p>Unknown keyboard type</p> |
| KEYBOARD_TYPE_EBS100    | <p>Standard keyboard</p>     |
| KEYBOARD_TYPE_ARABIC    | <p>EBS100 type keyboard</p>  |
| KEYBOARD_TYPE_RNIB      | <p>Arabic keyboard</p>       |

## LedBrightness <a href="#a55dc64efc347b073c4504e53decdbe03" id="a55dc64efc347b073c4504e53decdbe03"></a>

<p>enum [LedBrightness](#a55dc64efc347b073c4504e53decdbe03)</p>

| Enumerator      |     |
|-----------------|-----|
| MAX_BRIGHTNESS  |     |
| MIN_BRIGHTNESS  |     |

## LEDs <a href="#ab6831a7d06c0a2bc69f9b024f6445a80" id="ab6831a7d06c0a2bc69f9b024f6445a80"></a>

<p>enum [LEDs](#ab6831a7d06c0a2bc69f9b024f6445a80)</p>

| Enumerator     |     |
|----------------|-----|
| CTLS_LED_NONE  |     |
| MSR_LED_NONE   |     |
| SYS_LED_NONE   |     |
| MSR_LED_0      |     |
| MSR_LED_1      |     |
| MSR_LED_2      |     |
| KEYPAD_LED     |     |
| SMARTCARD_LED  |     |
| CTLS_LED_LOGO  |     |
| CTLS_LED_0     |     |
| CTLS_LED_1     |     |
| CTLS_LED_2     |     |
| CTLS_LED_3     |     |
| SYSTEM_LED     |     |
| POWER_LED      |     |
| BLUETOOTH_LED  |     |
| MODEM_LED      |     |
| GREEN_LED      |     |
| YELLOW_LED     |     |
| RED_LED        |     |
| MSR_LED_ALL    |     |
| CTLS_LED_ALL   |     |

## LedStates <a href="#ac53d0dd4fdb8c227b07184816614b3f9" id="ac53d0dd4fdb8c227b07184816614b3f9"></a>

<p>enum [LedStates](#ac53d0dd4fdb8c227b07184816614b3f9)</p>

| Enumerator  |     |
|-------------|-----|
| SWITCH_OFF  |     |
| SWITCH_ON   |     |

## sysError <a href="#aadc050f211cba10bc174fe72cc02ac09" id="aadc050f211cba10bc174fe72cc02ac09"></a>

<p>enum [sysError](#aadc050f211cba10bc174fe72cc02ac09)</p>

error codes returned by the functions

| Enumerator |  |
|----|----|
| SYS_ERR_OK  | <p>no error</p> |
| SYS_ERR_PROP_UNSUPPORTED  | <p>the property is not supported by the platform</p> |
| SYS_ERR_PROP_READ_ONLY  | <p>the property value cannot be set</p> |
| SYS_ERR_PROP_WRITE_ONLY  | <p>the property value cannot be obtained</p> |
| SYS_ERR_PARAMETER  | <p>wrong parameter</p> |
| SYS_ERR_PERMISSION  | <p>insufficient permissions</p> |
| SYS_ERR_REGION  | <p>wrong region ID</p> |
| SYS_ERR_FAIL  | <p>generic error</p> |
| SYS_ERR_UNSUPPORTED  | <p>the function requested is not supported on the current platform/device/\...</p> |
| SYS_ERR_ACTIVE_TIMEZONE  | <p>the time zone is active already</p> |
| SYS_ERR_INSTALL_LIMIT  | <p>No more bundles can be installed. Reboot needed</p> |
| SYS_ERR_REBOOT_NEEDED  | <p>Reboot needed to install bundle</p> |
| SYS_ERR_FILE_DOES_NOT_EXIST  | <p>File doesn\'t exist</p> |
| SYS_ERR_BUNDLE_VERSION  | <p>Higher bundle version already installed</p> |
| SYS_ERR_EXISTS  | <p>the property does not exist</p> |
| SYS_ERR_ACCESS  | <p>Not enough privileges</p> |
| SYS_ERR_NOT_DOCKED  | <p>Terminal isn\'t docked</p> |
| SYS_ERR_KEY_MISSING  | <p>Keys are missing</p> |
| SYS_ERR_EXPECTED_KEY  | <p>No information on expected keys</p> |
| SYS_ERR_CONFIGURATIION  | <p>Not configured properly</p> |
| SYS_ERR_PATHNAME_TOO_LONG  | <p>Pathname is too long</p> |
| SYS_ERR_GET_CWD  | <p>Not possible to get pathname of the curent directory</p> |
| SYS_ERR_IPC  | <p>IPC error</p> |
| SYS_ERR_RUNNING  | <p>Daemon is not running</p> |
| SYS_ERR_SDI_NOT_CONNECTED  | <p>No connection to SDI server</p> |
| SYS_ERR_CALCULATING  | <p>Value gets calculated (not available yet)</p> |
| SYS_ERR_BASE_CTRL_NOT_AVAILABLE  | <p>Terminal base control link is not available</p> |
| SYS_ERR_ANDROID_NOT_AVAILABLE  | <p>Android information not available yet</p> |

## SYSPropertyInt <a href="#a53e0b4c578c61cc0de3c3daa5fee72b6" id="a53e0b4c578c61cc0de3c3daa5fee72b6"></a>

<p>enum [SYSPropertyInt](#a53e0b4c578c61cc0de3c3daa5fee72b6)</p>

Integer type system properties

| Enumerator |  |
|----|----|
| SYS_PROP_BATTERY_AVAILABLE  | <p>read-only, Battery exists: 1: battery available, else 0</p> |
| SYS_PROP_BATTERY_STATUS_OK  | <p>read-only, Battery status: 1: ok, else 0</p> |
| SYS_PROP_BATTERY_DEVICE  | <p>read-only, Device can be battery powered: 1: Portable device, else 0</p> |
| SYS_PROP_BATTERY_VOLTAGE  | <p>read-only, Battery voltage in units of mV</p> |
| SYS_PROP_BATTERY_CAPACITY  | <p>read-only, Battery capacity in mAh</p> |
| SYS_PROP_BATTERY_CHARGE_LEVEL  | <p>read-only, Battery charge level in percent (0-100)</p> |
| SYS_PROP_BATTERY_CHARGING  | <p>read-only, Battery charging status: 1: charging, else 0</p> |
| SYS_PROP_BATTERY_FULL  | <p>read-only, Battery full: 1: battery fully charged, else 0</p> |
| SYS_PROP_BATTERY_TEMP  | <p>read-only, Battery temperature in degree Celsius</p> |
| SYS_PROP_BATTERY_CURRENT  | <p>read-only, Battery current in in cA (0.01A)</p> |
| SYS_PROP_BATTERY_CRITICAL  | <p>read-only, Battery critical: 1: battery level is critical, else 0</p> |
| SYS_PROP_BATTERY_LOW  | <p>read-only, Battery low: 1: battery level is low, else 0</p> |
| SYS_PROP_BATTERY_NORMAL  | <p>read-only, Battery normal: 1: battery level is normal, else 0</p> |
| SYS_PROP_BATTERY_TECHNOLOGY  | <p>read-only, Possible values are enumerated in batteryTechnology enum</p> |
| SYS_PROP_BATTERY_FCC  | <p>read-only, Percent Battery FCC (Full Charge Capacity) in mAh</p> |
| SYS_PROP_BATTERY_SOH  | <p>read-only, Percent Battery SOH (State Of Health) in %</p> |
| SYS_PROP_BATTERY_CHARGE_IN_SLEEP  | <p>read-only, Battery can be charged when unit is in power saving state, 1: battery can be charged, 0: can\'t be charged</p> |
| SYS_PROP_BATTERY_CALIBRATION  | <p>read-only, Battery calibration status 1:Calibrated 0:not calibrated</p> |
| SYS_PROP_BATTERY_TYPE  | <p>read-only, Battery type, batteryType enum value</p> |
| SYS_PROP_BATTERY_CHARGE_MODE  | <p>read/write, Battery charge mode, batteryChargeMode enum value</p> |
| SYS_PROP_CHARGE_CYCLE_COUNT  | <p>read-only, Battery charge cycle count</p> |
| SYS_PROP_UX100_AVAILABLE  | <p>read-only, presence of UX100 or UX110 device</p> |
| SYS_PROP_UX100_OPERATIONAL_MODE  | <p>read-only, Get PINPAD Operational Mode</p> |
| SYS_PROP_UX100_BACKLIGHT  | <p>read/write, Ux100 display backlight</p> |
| SYS_PROP_UX400_AVAILABLE  | <p>read-only, presence of UX400 device</p> |
| SYS_PROP_UX115_UNIT  | <p>read-only, If it is UX115 unit, 1: Ux115 unit, else 0</p> |
| SYS_PROP_UX_UNIT  | <p>read-only, If it is UX series unit, 1: Ux unit, else 0</p> |
| SYS_PROP_INTERNAL_BATTERY_STATUS  | <p>read-only, Internal battery battery status, 1: ok, else 0</p> |
| SYS_PROP_INTERNAL_BATTERY_VOLTAGE  | <p>read-only, Internal battery voltage in units of mV, possible values: 3000 = ideal, 2600 = good, 2300 = low</p> |
| SYS_PROP_DOCKING_STATUS  | <p>read-only, Docking status, 1:docked, 0:undocked</p> |
| SYS_PROP_DOCK_SUPPORT  | <p>read-only, Docking supports dock station, 1: dock station supported, 0: not supported</p> |
| SYS_PROP_USB1_MODE  | <p>read/write, USB1 mode, sysUSBmode enum value</p> |
| SYS_PROP_USB2_MODE  | <p>read/write, USB2 mode, sysUSBmode enum value</p> |
| SYS_PROP_USB1_CONFIGURABLE  | <p>read-only, USB1 configurable, 1: configurable, else 0</p> |
| SYS_PROP_USB2_CONFIGURABLE  | <p>read-only, USB2 configurable, 1: configurable, else 0</p> |
| SYS_PROP_USB1_DEFAULT  | <p>read-only, USB1 default mode: sysUSBmode enum value</p> |
| SYS_PROP_USB2_DEFAULT  | <p>read-only, USB2 default mode: sysUSBmode enum value</p> |
| SYS_PROP_USB1_CHARGE  | <p>read-only, USB1 charge port, 1: charge port, else 0</p> |
| SYS_PROP_USB2_CHARGE  | <p>read-only, USB2 charge port, 1: charge port, else 0</p> |
| SYS_PROP_USB_HIGH_POWER_MODE  | <p>read/write, Enable/disable USB high power mode: 2 - High power mode; 1 - Medium power mode; 0 - Low power mode. Requires system reboot.</p> |
| SYS_PROP_PRINTER_AVAILABLE  | <p>read-only, Printer exists: 1: printer available, else 0</p> |
| SYS_PROP_POWER_STATUS  | <p>read-only, Power status, 1: unit is line powered, else 0</p> |
| SYS_PROP_POWER_ON  | <p>read-only, 1: Unit can be powered on by green key, else 0</p> |
| SYS_PROP_CHARGE_ON_SAVING  | <p>read-only, Unit can be charged during power saving state (during sleep)</p> |
| SYS_PROP_KEYBOARD_BEEP  | <p>write-only, Keyboard beep on key press, 1: enabled, 0: disabled; note: on VOS3 also enables beep on secure touch input</p> |
| SYS_PROP_KEYB_BACKLIGHT  | <p>read/write, Keyboard backlight</p> |
| SYS_PROP_KEYBOARD_HW  | <p>read-only, HW keyboard exists, 1: exists, 0: touch only unit</p> |
| SYS_PROP_KEYBOARD_SIZE  | <p>read-only, Number of keys on HW keyboard</p> |
| SYS_PROP_DISP_CONTRAST  | <p>read/write, Display contrast<br/></p> |
| SYS_PROP_DISP_BACKLIGHT  | <p>read/write, Display backlight</p> |
| SYS_PROP_DISP  | <p>write-only, Turn display on/off, 1: turn on, 0: turn off</p> |
| SYS_PROP_DISP_HW  | <p>read-only, Display exists, 1: exists, 0: no display available</p> |
| SYS_PROP_DISP_COLOR  | <p>read-only, Color display exists, 1: color display, 0: monochrome display</p> |
| SYS_PROP_DISP_HEIGHT  | <p>read-only, Color display height in pixels</p> |
| SYS_PROP_DISP_WIDTH  | <p>read-only, Color display width in pixels</p> |
| SYS_PROP_DISP_TOUCH  | <p>read-only, Is touchscreen available, 1: touchscreen, else 0</p> |
| SYS_PROP_ANDROID  | <p>read-only, Android side available 1: available, 0: non Android unit</p> |
| SYS_PROP_HW_RAM_SIZE  | <p>read-only, RAM size KB</p> |
| SYS_PROP_HW_RAM_USED  | <p>read-only, Used ram size KB</p> |
| SYS_PROP_HW_FLASH_SIZE  | <p>read-only, Flash size KB</p> |
| SYS_PROP_HW_FLASH_USED  | <p>read-only, Used flash size KB</p> |
| SYS_PROP_HW_EXE_PARTITION_SIZE  | <p>read-only, Total executable storage partition KB</p> |
| SYS_PROP_HW_EXE_PARTITION_USED  | <p>read-only, Used executable storage partition KB</p> |
| SYS_PROP_HW_DATA_PARTITION_SIZE  | <p>read-only, Total data storage partition KB</p> |
| SYS_PROP_HW_DATA_PARTITION_USED  | <p>read-only, Used data storage partition KB</p> |
| SYS_PROP_HW_TOUCH_GROUNDED  | <p>read/write, Deprecated: Carbon 8/10 support is dropped</p> |
| SYS_PROP_LED  | <p>read-only, Returns mask with available LEDs. Please see enum LEDs from <a href="leds_8h.md">leds.h</a></p> |
| SYS_PROP_PCI  | <p>read-only, Returns terminal PCI version</p> |
| SYS_PROP_VOLUME  | <p>read/write, speaker volume (0-100) (Engage only)</p> |
| SYS_PROP_SPEAKER_AVAILABLE  | <p>read-only, speaker exists, 1: exists, 0: no speaker (Engage only)</p> |
| SYS_PROP_BUZZER_AVAILABLE  | <p>read-only, buzzer exists, 1: exists, 0: no buzzer</p> |
| SYS_PROP_ADE_STATUS  | <p>read-only, ADE status 1: active, 0: inactive</p> |
| SYS_PROP_CERT_SPONSOR_PROD  | <p>read-only, sponsor certificate 1: prod, 0: test</p> |
| SYS_PROP_ATTACK_STATUS  | <p>read-only, Tamper status 1: device tampered, else 0</p> |
| SYS_PROP_ATTACK_STATUS_CODE  | <p>read-only, Tamper status code (Android only)</p> |
| SYS_PROP_VCL_ENCRYPTION_STATUS  | <p>read-only, VCL encryption status 1: enabled, else 0</p> |
| SYS_PROP_VOLTAGE_ENCRYPTION_STATUS  | <p>read-only, VOLTAGE encryption status 1: enabled, else 0</p> |
| SYS_PROP_POSEIDON_ENCRYPTION_STATUS  | <p>read-only, POSEIDON encryption status 1: enabled, else 0</p> |
| SYS_PROP_NAVIGATOR_STATUS  | <p>read-only, NAVIGATOR status 1: enabled, else 0</p> |
| SYS_PROP_SERVICE_SWITCH_STATUS  | <p>read-only, Service switch status: 1: service switch triggered, else 0</p> |
| SYS_PROP_DEVICE_MODE  | <p>read-only, Device mode from deviceMode enum</p> |
| SYS_PROP_SYSMODE_BUTTON  | <p>write-only, Enable/disable sysmode button, 1: enable, 0: disable</p> |
| SYS_PROP_DEVICE_TYPE  | <p>read-only, Device type from deviceType enum</p> |
| SYS_PROP_VATS  | <p>read-only, VATS, 1: VATS OS 0: else</p> |
| SYS_PROP_UX100_ANTI_REMOVAL_SWITCH  | <p>read-only, Status of the anti-removal switch of the ux100. 1: triggered, 0: armed</p> |
| SYS_PROP_SLP_TAINTED_STATUS  | <p>read-only, SLP tainted status. 1: SLP tainted (NOK), 0: SLP OK</p> |
| SYS_PROP_UPTIME  | <p>read-only, System uptime in seconds</p> |
| SYS_PROP_BARCODE_SCANNER  | <p>read-only, Barcode scanner exists: 1: barcode scanner available, else 0</p> |
| SYS_PROP_CAMERA  | <p>read-only, Camera exists: 1: camera available, else 0</p> |
| SYS_PROP_SWITCH_THRESHOLD_VOLTAGE  | <p>read/write, Threshold voltage for successful switchback to HOST mode (Default: 3900000) (E285/E280 only)</p> |
| SYS_PROP_LOW_THRESHOLD_VOLTAGE  | <p>read/write, Low threshold voltage (Default: 3600000) (E285/E280 only)</p> |
| SYS_PROP_CONSOLE_STATE  | <p>read/write, Enable/disable console: 1 - console enabled; 0 - console disabled</p> |
| SYS_PROP_UX_MDB  | <p>read-only, If UX unit supports MDB (Multi-Drop Bus), 1: MDB is supported, else 0</p> |
| SYS_PROP_CARD_SLOT2_MODE  | <p>read/write, Card slot2 mode, 1: SAM1 0: SIM2 (For V210) reboot needed to apply new value</p> |
| SYS_PROP_CARD_SLOT_COUNT  | <p>read-only , Number of available SIM card slots</p> |
| SYS_PROP_KEYBOARD_TYPE  | <p>read-only, keyboard type from enum keyboardType</p> |
| SYS_PROP_EXT_NFC_ANTENNA  | <p>read-only, If external NFC antenna is attached 1:Antenna attached 0:Not attached</p> |
| SYS_PROP_VRK2_SUPPORT  | <p>read-only, Verifone Remote Keys injection version 2 support : 1 supported, 0 unsupported</p> |
| SYS_PROP_USB_C_CHARGING_STATE  | <p>read/write, Enable/disable USB-C port charging: 1 - enabled, 0 - disabled, \<0 - error</p> |
| SYS_PROP_POGO_CHARGING_STATE  | <p>read/write, Enable/disable POGO port charging: 1 - enabled, 0 - disabled, \<0 - error</p> |
| SYS_PROP_ECC_VRK_SUPPORT  | <p>read-only, Elliptic curve cryptography Verifone Remote Keyloading support : 1 supported, 0 unsupported</p> |
| SYS_PROP_LCD_PANEL_ID  | <p>read-only, Returns LCD panel ID (only if information is available)</p> |
| SYS_PROP_VRK_CERT_INSTALLED  | <p>read-only, VRK certificate is installed/available on device: 1 - true, 0 - false<br/></p> |
| SYS_PROP_VRK_PACKAGING_UVRK_SUPPORT  | <p>read-only, Unified VRK packaging support, 1 - supported, 0 - unsupported</p> |
| SYS_PROP_POGO_DATA_STATE  | <p>read/write, Switch USB data lines between USB-C and POGO ports: 0 - USB-C, 1 - POGO</p> |
| SYS_PROP_ANDROID_PREFIX_LENGTH  | <p>read-only, Android network prefix length. Applicable only to Dual Chip solutions</p> |
| SYS_PROP_UX100_TYPE  | <p>read-only, UX1 model (0-unknown, 100-UX100, 110-UX110)</p> |

## SYSPropertyString <a href="#aaa98bbf503c2b2cb3ebd81f35b5cb6c5" id="aaa98bbf503c2b2cb3ebd81f35b5cb6c5"></a>

<p>enum [SYSPropertyString](#aaa98bbf503c2b2cb3ebd81f35b5cb6c5)</p>

String type system properties

| Enumerator |  |
|----|----|
| SYS_PROP_HW_MODEL_NAME  | <p>read-only, Hardware model (full name), e.g. \"P400 DMSR\"</p> |
| SYS_PROP_HW_MODEL_NAME_SHORT  | <p>read-only, Short model name (without information on modifications), e.g. \"P400\"</p> |
| SYS_PROP_HW_SERIALNO  | <p>read-only, Hardware serial number</p> |
| SYS_PROP_OS_VERSION  | <p>read-only, OS version</p> |
| SYS_PROP_HW_PTID  | <p>read-only, Terminal unit identification number</p> |
| SYS_PROP_HW_VARIANT_NAME  | <p>read-only, Hardware variant name</p> |
| SYS_PROP_HW_PART_NO  | <p>read-only, Hardware part number</p> |
| SYS_PROP_HW_VERSION  | <p>read-only, Hardware version</p> |
| SYS_PROP_HW_LOT_NO  | <p>read-only, Hardware LOT number</p> |
| SYS_PROP_BOOT_VERSION  | <p>read-only, Boot(SBI) version</p> |
| SYS_PROP_TERMINAL_SPONSOR  | <p>read-only, Sponsor certificate name</p> |
| SYS_PROP_MANUF_DATE  | <p>read-only, manufacturing date/time in format \"yyyymmddhhmmss\"</p> |
| SYS_PROP_CERT_SPONSOR_SN  | <p>read-only, Sponsor certificate serial number</p> |
| SYS_PROP_CERT_SPONSOR_MODE  | <p>read-only, Sponsor certificate mode: \"test\" or \"prod\"</p> |
| SYS_PROP_ADK_VERSION  | <p>read-only, ADK version</p> |
| SYS_PROP_UX100_SERIALNO  | <p>read-only, UX100 Hardware serial number (UX100 only)</p> |
| SYS_PROP_UX100_PARTNO  | <p>read-only, UX100 Hardware part number (UX100 only)</p> |
| SYS_PROP_UX100_FW_VERSION  | <p>read-only, UX100 firmware security version (e.g. 010605)</p> |
| SYS_PROP_SBI_VERSION  | <p>read-only, Secure Boot Image version</p> |
| SYS_PROP_VAULT_VERSION  | <p>read-only, Vault version</p> |
| SYS_PROP_CIB_VERSION  | <p>read-only, Control Information Block version</p> |
| SYS_PROP_MIB_VERSION  | <p>read-only, Manufacturer Information Block version</p> |
| SYS_PROP_KERNEL_VERSION  | <p>read-only, Linux Kernel version</p> |
| SYS_PROP_RFS_VERSION  | <p>read-only, Overall RFS version</p> |
| SYS_PROP_RELEASE_VERSION  | <p>read-only, Build Release version</p> |
| SYS_PROP_RFS_SECURITY_VERSION  | <p>read-only, Application Manager version</p> |
| SYS_PROP_SRED_VERSION  | <p>read-only, SRED version</p> |
| SYS_PROP_SRED_MODE  | <p>read-omly, SRED runtime mode</p> |
| SYS_PROP_OPENPROTOCOL_VERSION  | <p>read-only, OpenProtocol version</p> |
| SYS_PROP_PCI_REBOOT_TIME  | <p>read/write, PCI 24h reboot time \"hh:mm:ss\"</p> |
| SYS_PROP_FILE_NAME_TO_INSTALL  | <p>write-only, Deprecated: please use API from <a href="sysinstall_8h.md">sysinstall.h</a> header instead</p> |
| SYS_PROP_MSR_COUNTERS  | <p>read-only, MSR counters<br/></p> |
| SYS_PROP_SCR_COUNTERS  | <p>read-only, SCR counters</p> |
| SYS_PROP_CTLS_COUNTERS  | <p>read-only, CTLS counters</p> |
| SYS_PROP_DOCK_STATION_SN  | <p>read-only, Docking station serial number</p> |
| SYS_PROP_DOCK_STATION_PN  | <p>read-only, Docking station product number</p> |
| SYS_PROP_DOCK_STATION_MODEL  | <p>read-only, Docking station model</p> |
| SYS_PROP_DOCK_STATION_MAC  | <p>read-only, Docking station MAC address</p> |
| SYS_PROP_DOCK_STATION_HW_REV  | <p>read-only, Docking station hardware revision</p> |
| SYS_PROP_DOCK_STATION_INSTALL  | <p>write-only, Deprecated: Please use API from from <a href="sysinstall_8h.md">sysinstall.h</a> instead</p> |
| SYS_PROP_GSM_FIRMWARE_VERSION  | <p>read-only, GSM firmware version</p> |
| SYS_PROP_DOCK_STATION_OS_VERSION  | <p>read-only, Docking station OS version</p> |
| SYS_PROP_DOCK_STATION_IP_ADDRESS  | <p>read-only, Docking station IP V4 address corresponding to SYS_PROP_DOCK_STATION_MAC</p> |
| SYS_PROP_DOCK_STATION_IP_V6_ADDRESS  | <p>read-only, Docking station IP V6 address corresponding to SYS_PROP_DOCK_STATION_MAC</p> |
| SYS_PROP_DOCK_STATION_USB1_IP_ADDRESS  | <p>read-only, Returns usb1 local IP address for base</p> |
| SYS_PROP_ANDROID_IP_V4_ADDRESS  | <p>read-only, Returns Android IP V4 address. Applicable only to Dual Chip solutions</p> |
| SYS_PROP_ANDROID_IP_V6_ADDRESS  | <p>read-only, Returns Android IP V6 address. Applicable only to Dual Chip solutions</p> |
| SYS_PROP_ANDROID_MAC  | <p>read-only, Returns Android MAC address. Applicable only to Dual Chip solutions</p> |
| SYS_PROP_WARRANTIED_KEYS  | <p>read-only, JSON encoded information on warrantied keys (warrantied keys/missing keys)</p> |
| SYS_PROP_SECAPP_VERSION  | <p>read-only, Security application version</p> |
| SYS_PROP_VSS_VERSION  | <p>read-only, VSS version</p> |
| SYS_PROP_STBY_MCU_VERSION  | <p>read-only, Standby MCU firmware version</p> |
| SYS_PROP_EXT_STORAGE  | <p>read-only, JSON encoded information on external storage devices</p> |
| SYS_PROP_INSTALLED_PCKG_LIST  | <p>read-only, JSON encoded information on installed packages</p> |
| SYS_PROP_PKG_LIST  | <p>read-only, JSON encoded information on installed packages</p> |
| SYS_PROP_APP_PKG_LIST  | <p>read-only, JSON encoded information on installed application packages</p> |
| SYS_PROP_BUNDLE_LIST  | <p>read-only, JSON encoded information on bundles</p> |
| SYS_PROP_APP_BUNDLE_LIST  | <p>read-only, JSON encoded information on installed application bundles</p> |
| SYS_PROP_MSR_INFO  | <p>read-only, JSON encoded information on MSR card reader</p> |
| SYS_PROP_SCR_INFO  | <p>read-only, JSON encoded information on SCR card reader</p> |
| SYS_PROP_CTLS_INFO  | <p>read-only, JSON encoded information on CTLS card reader</p> |
| SYS_PROP_HW_STRING  | <p>read-only, Hardware description string. Screen resolution / Colored or BW / Keypad size / Touch or non touch. Example: 320x480C15T</p> |
| SYS_PROP_DEV_ID  | <p>read-only, Device id string e.g.: 6E00F942-C5949001-41A97FA3-2F396409-F0896835-6898E7D4-142B43B7-105FEEB0</p> |
| SYS_PROP_FET  | <p>read-only, JSON encoded information on Feature licenses (FET)</p> |
| SYS_PROP_BT_MAC  | <p>read-only, BT MAC address</p> |
| SYS_PROP_WIFI_MAC  | <p>read-only, WIFI MAC address</p> |
| SYS_PROP_ETH_MAC  | <p>read-only, ETH MAC address</p> |
| SYS_PROP_ETH2_MAC  | <p>read-only, ETH2 MAC address</p> |
| SYS_PROP_COUNTRY  | <p>read-only, Radio module country code</p> |
| SYS_PROP_RTC  | <p>read/write, VOS1,VOS2:system date/time VOS3:Real-Time-Clock date/time in format \"yyyymmddhhmmss\" (write limited to secproc_cmd group)</p> |
| SYS_PROP_NTP_SERVER  | <p>write-only, Network Time Protocol host name (if value is empty, pool.ntp.org is used)</p> |
| SYS_PROP_BATTERY_SERIALNO  | <p>read-only, Deprecated</p> |
| SYS_PROP_TIME_ZONE  | <p>read-only, JSON encoded information on current time zone, e.g. {\"doff\":\"0\",\"dst\":\"0\",\"end\":\"0\",\"soff\":\"UTC+08\",\"start\":\"0\",\"std\":\"CST\"}</p> |
| SYS_PROP_TIME_ZONE_LIST  | <p>read-only, JSON encoded information on all available timezones</p> |
| SYS_PROP_TIME_ZONE_FROM_FILE  | <p>write-only, Set time zone using path, e.g. /usr/share/zoneinfo/US/Pacific</p> |
| SYS_PROP_TIME_ZONE_NAME  | <p>write-only, Set time zone using name, e.g. US/Hawaii<br/></p> |
| SYS_PROP_TIME_ISO8601  | <p>read/write, Set time according to ISO8601 standard. Format \"YYYY-MM-ddTHH:mm:ss.SSSzzz\", e.g. 2020-09-02T07:39:31.000+02:00</p> |
| SYS_PROP_REBOOT_REASON  | <p>read-only, Returns reason for last reboot</p> |
| SYS_PROP_ALL_LOADED_KEYS  | <p>read-only, JSON encoded information on generic, payment and warrantied keys</p> |
| SYS_PROP_ALL_LOADED_KEYS_V2  | <p>read-only, JSON encoded information on all keys</p> |
| SYS_PROP_TAMPER_RECORDS  | <p>read-only, JSON encoded information on tamper records</p> |
| SYS_PROP_BARCODE_SCANNER_FW_VERSION  | <p>read-only, Barcode scanner firmware version</p> |
| SYS_PROP_ANDROID_VERSION  | <p>read-only, Returns JSON encoded Android version</p> |
| SYS_PROP_STATUSBAR_COLOR  | <p>read/write, Controls status bar background color on Android devices. Format: HTML #RRGGBB or hex 0xRRGGBB, e.g. #21618c</p> |
| SYS_PROP_ANDROID_TIME  | <p>read/write, Get/set time for Android side. Format \"YYYY-MM-ddTHH:mm:ss\"</p> |
| SYS_PROP_MTD_INFO  | <p>read-only, JSON encoded information about MTD partition: total/bad blocks count, images copies count</p> |
| SYS_PROP_HW_ID  | <p>read-only, Returns hardware ID (Only if information is available in MIB)</p> |
| SYS_PROP_LCD_PANEL_MODEL  | <p>read-only, Returns LCD panel model (only if information is available)</p> |
| SYS_PROP_DT_NAME  | <p>read-only, Returns device dt_name id string from device tree</p> |
| SYS_PROP_PCI_APPS  | <p>read-only, Returns list of PCI apps and versions</p> |
| SYS_PROP_FW_PCI_VERSION  | <p>read-only, Returns security PCI version</p> |
| SYS_PROP_HW_MODEL_NAME_SEC  | <p>read-only, Returns hardware security model name</p> |
| SYS_PROP_MOBILE_RADIO_SW_VERSION  | <p>read-only, Mobile Radio SW version ( mobile radio capable devices only )</p> |
| SYS_PROP_TOUCH_NAME  | <p>read-only, Touch scren name</p> |
| SYS_PROP_TOUCH_HW_VERSION  | <p>read-only, Touch screen HW version</p> |
| SYS_PROP_TOUCH_SW_VERSION  | <p>read-only, Touch screen SW version</p> |
| SYS_PROP_TOUCH_CONFIG_VERSION  | <p>read-only, Touch screen config version</p> |
| SYS_PROP_ANDROID_GATEWAY  | <p>read-only, Android Network Gateway address. Applicable only to Dual Chip solutions</p> |
| SYS_PROP_ANDROID_DNS1  | <p>read-only, Android DNS1 server address. Applicable only to Dual Chip solutions</p> |
| SYS_PROP_ANDROID_DNS2  | <p>read-only, Android DNS2 server address. Applicable only to Dual Chip solutions</p> |

## sysUSBmode <a href="#a646d1bfd53de12ebf78fd6c379f37a39" id="a646d1bfd53de12ebf78fd6c379f37a39"></a>

<p>enum [sysUSBmode](#a646d1bfd53de12ebf78fd6c379f37a39)</p>

USB port modes.

| Enumerator       |                                           |
|------------------|-------------------------------------------|
| SYS_USB_UNKNOWN  | <p>Unknown USB mode</p> |
| SYS_USB_DEFAULT  | <p>Default USB mode</p> |
| SYS_USB_HOST     | <p>Host USB mode</p>    |
| SYS_USB_DEVICE   | <p>Device USB mode</p>  |

## FunctionDocumentation {#function-documentation}

## ctlsLedsChangeState() <a href="#aee000a15a06178175634163e5591b00a" id="aee000a15a06178175634163e5591b00a"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::ctlsLedsChangeState</p>

Switch on or off Contactless LEDs

**Parameters**

\[in\] **ledMap**

### Returns

0 - On success. Otherwise - error code


{% hint style="info" %}
Example: status = ctlsLedsChangeState( CTLS_LED_0 \| CTLS_LED_1 \| CTLS_LED_2 \| CTLS_LED_3 ).
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a138">demo-sysinfo.cpp</a>.

## Dsp2Hex() <a href="#a90408ce42d820e13f0f2c7daf474e549" id="a90408ce42d820e13f0f2c7daf474e549"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void vfisysinfo::Dsp2Hex</p>

Converts ASCII hexadecimal data to binary.

**Parameters**

\[in\] **dsp** The input in dsp consists of 2 × n characters, one per hex digit. If dsp contains invalid hex digits, the result is undefined. \[in\] **hex** The output in hex is n bytes. \[in\] **n** of bytes to convert.

### Returns

void


{% hint style="info" %}
dsp and hex should not overlap.
Hex digits in the input can be either upper or lowercase.
{% endhint %}

## isBrightnessAdjustable() <a href="#aaa8c401ff147fb47c360e6f2539f9d63" id="aaa8c401ff147fb47c360e6f2539f9d63"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> bool vfisysinfo::isBrightnessAdjustable</p>

Check if LED brightness adjustable

**Parameters**

\[in\] **LED** ID

### Returns

true - brightness adjustable. false - otherwise


{% hint style="info" %}
Example: status = isBrightnessAdjustable( CTLS_LED_LOGO ).
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a155">demo-sysinfo.cpp</a>.

## logoLedChangeState() <a href="#a1eda2d856d4d40113571a95d3d6a4277" id="a1eda2d856d4d40113571a95d3d6a4277"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::logoLedChangeState</p>

Switch on or off Logo LED

**Parameters**

\[in\] **state**

### Returns

0 - On success. Otherwise - error code Example: status = logoLedChangeState( SWITCH_ON ).

### Examples

<a href="demo-sysinfo_8cpp-example.md#a135">demo-sysinfo.cpp</a>.

## msrLedsChangeState() <a href="#aabc99b91721225db16d2ff8358631fe2" id="aabc99b91721225db16d2ff8358631fe2"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::msrLedsChangeState</p>

Switch on or off Magnetic Card Reader LEDs

**Parameters**

\[in\] **ledMap**

### Returns

0 - On success. Otherwise - error code


{% hint style="info" %}
Example: status = msrLedsChangeState( MSR_LED_ALL ).
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a146">demo-sysinfo.cpp</a>.

## msrShowCancel() <a href="#a0a2dc873f3bc7fafff5d08336d8eeaf6" id="a0a2dc873f3bc7fafff5d08336d8eeaf6"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::msrShowCancel</p>

Cancel the MSR LED show runway

### Returns

0 - On success

## msrShowRunway() <a href="#a2ccd3d074bc8c8d3ae6f502232ebe897" id="a2ccd3d074bc8c8d3ae6f502232ebe897"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::msrShowRunway</p>

Run the MSR LEDs runway show

**Parameters**

\[in\] **repeatCount;** 0 - for infinite repeat times ( until msrShowCancel() )

### Returns

0 - On success. Otherwise - error code


{% hint style="info" %}
Example: status = msrShowRunway( 5 ).
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a137">demo-sysinfo.cpp</a>.

## scrLedChangeState() <a href="#a1587dae29ddad22c7def2be5eac61ff8" id="a1587dae29ddad22c7def2be5eac61ff8"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::scrLedChangeState</p>

Switch on or off Secure Card Reader LEDs

**Parameters**

\[in\] **state**

### Returns

0 - On success. Otherwise - error code


{% hint style="info" %}
Example: status = scrLedChangeState( SWITCH_ON ).
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a132">demo-sysinfo.cpp</a>.

## setBrightness() <a href="#ab373028a6c5ee63e4e24a4bab90bf220" id="ab373028a6c5ee63e4e24a4bab90bf220"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::setBrightness</p>

Set LEDs brightness

**Parameters**

\[in\] **ledMap** \[in\] **Brightness**

### Returns

0 - On success. Otherwise - error code


{% hint style="info" %}
Example: status = setBrightness( MSR_LED_0 \| MSR_LED_1 \| MSR_LED_2 ).
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a154">demo-sysinfo.cpp</a>.

## sysBeepError() <a href="#afe4e3fa3d5e705451be9469978f7fd44" id="afe4e3fa3d5e705451be9469978f7fd44"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysBeepError</p>

Plays a 100 ms tone at 880 Hz (error beep tone)

**Parameters**

\[in\] **volume** volume in percent, value range: 0 (low) \... 50 (middle) \... 100 (high)

### Returns

SYS_ERR_OK for success, else error code


{% hint style="info" %}
Volume Beep is played with a system specified volume.
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a129">demo-sysinfo.cpp</a>.

## sysBeepNormal() <a href="#a44a9ee5ce7fe78c798eb2ad1db29c356" id="a44a9ee5ce7fe78c798eb2ad1db29c356"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysBeepNormal</p>

Plays a 50 ms tone at 1245 Hz (normal beep tone)

**Parameters**

\[in\] **volume** volume in percent, value range: 0 (low) \... 50 (middle) \... 100 (high)

### Returns

SYS_ERR_OK for success, else error code


{% hint style="info" %}
Volume Beep is played with a system specified volume.
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a128">demo-sysinfo.cpp</a>.

## sysDeepSleep() <a href="#a363ef3b20e3852f6e6cd87085b295f22" id="a363ef3b20e3852f6e6cd87085b295f22"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int sysDeepSleep</p>

Puts terminal in deep sleep mode

### Returns

error code

Puts terminal in deep slee mode

### Returns

error code

## sysErrorMessage() <a href="#ad76462c4331a43ce2ae5245d237fad21" id="ad76462c4331a43ce2ae5245d237fad21"></a>

<p>const <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> char\* vfisysinfo::sysErrorMessage</p>

Return error code description

### Returns

Error message

## sysErrorMsg() <a href="#a926cb3391c24a1a16c5ffd22e1cb7e73" id="a926cb3391c24a1a16c5ffd22e1cb7e73"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> std::string vfisysinfo::sysErrorMsg</p>

Return error code description

### Returns

Error message

### Examples

<a href="demo-sysinfo_8cpp-example.md#a84">demo-sysinfo.cpp</a>.

## sysGetEnv() <a href="#a2f4d2c358c2c96255fe07dc63815c341" id="a2f4d2c358c2c96255fe07dc63815c341"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysGetEnv</p>

Retrieves value in system ini file

**Parameters**

\[in\] **section** \[in\] **label** \[out\] **value**

### Returns

### Examples

<a href="demo-sysinfo_8cpp-example.md#a205">demo-sysinfo.cpp</a>.

## sysGetPropertyInt()\[1/2\] <a href="#ab94a5b33000760afbee10e7fefd16355" id="ab94a5b33000760afbee10e7fefd16355"></a> {#sysgetpropertyint-12}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysGetPropertyInt</p>

get int property

**Parameters**

\[in\] **property** property to be get \[out\] **value** property value

### Returns

error code

### Examples

<a href="demo-sysinfo_8cpp-example.md#a35">demo-sysinfo.cpp</a>.

## sysGetPropertyInt()\[2/2\] <a href="#ab66a32926c2ccacb867114cfbcbef1d7" id="ab66a32926c2ccacb867114cfbcbef1d7"></a> {#sysgetpropertyint-22}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysGetPropertyInt</p>

get int property

**Parameters**

\[in\] **property** property to be get \[out\] **value** property value

### Returns

error code

## sysGetPropertyString()\[1/2\] <a href="#af6c938992e005c446c81e7f1fe3e4ed3" id="af6c938992e005c446c81e7f1fe3e4ed3"></a> {#sysgetpropertystring-12}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysGetPropertyString</p>

get string property

**Parameters**

\[in\] **property** property to be get \[out\] **value** current value \[in\] **len** size of output buffer value in bytes

### Returns

error code

### Examples

<a href="demo-sysinfo_8cpp-example.md#a19">demo-sysinfo.cpp</a>.

## sysGetPropertyString()\[2/2\] <a href="#acec685f395fb99dfba2c189ae8f4614b" id="acec685f395fb99dfba2c189ae8f4614b"></a> {#sysgetpropertystring-22}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysGetPropertyString</p>

get string property

**Parameters**

\[in\] **property** property to be get \[out\] **value** current value

### Returns

error code

## sysGetRefreshTime() <a href="#aec0cd92586bee1cd0df1d8637994983a" id="aec0cd92586bee1cd0df1d8637994983a"></a>

<p><a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int vfisysinfo::sysGetRefreshTime</p>

Get refresh time of the statusbar

**Parameters**

\[in\] **region_id** GUI region ID \[out\] **refresh_time_ms** statusbar refresh time in milliseconds

### Returns

error code

## sysGetStatusbarValues() <a href="#a5babb03e766504b26dde5e51a7f5940d" id="a5babb03e766504b26dde5e51a7f5940d"></a>

<p><a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int vfisysinfo::sysGetStatusbarValues</p>

Get statusbar user variables

**Parameters**

\[in\] **region_id** GUI region ID \[out\] **values** current values of user defined variables used in the HTML document for the statusbar.

### Returns

error code

## sysGetVersion() <a href="#abc840ced7fc2155fcd4c9d1092d8d862" id="abc840ced7fc2155fcd4c9d1092d8d862"></a>

<p>const <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> char\* vfisysinfo::sysGetVersion</p>

returns a zero-terminated string with version and build information of libvfisysinfo in ADK version string format: major.minor.patch-build, e.g. \"1.2.3-4\"

### Returns

version string

### Examples

<a href="demo-sysinfo_8cpp-example.md#a60">demo-sysinfo.cpp</a>.

## sysHibernate() <a href="#a6709c064e4794698a20ca0f076a4345f" id="a6709c064e4794698a20ca0f076a4345f"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int sysHibernate</p>

Puts terminal in hibernate mode

### Returns

error code

## sysInfo_GetVersion() <a href="#a37689c755c1f4235c484b9079dfdfaa6" id="a37689c755c1f4235c484b9079dfdfaa6"></a>

<p>const <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> char\* vfisysinfo::sysInfo_GetVersion</p>

returns a zero-terminated string with version and build information of sysinfo daemon in ADK version string format: major.minor.patch-build, e.g. \"1.2.3-4\"

### Returns

version string

## sysLedsChangeState() <a href="#a468b20d075222dd30fabc2c3633cb50d" id="a468b20d075222dd30fabc2c3633cb50d"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysLedsChangeState</p>

Switch on or off any LEDs ( vos3 only )

**Parameters**

\[in\] **ledMap**

### Returns

0 - On success. Otherwise - error code


{% hint style="info" %}
Example: status = sysLedsChangeState( GREEN_LED \| YELLOW_LED \| RED_LED ).
{% endhint %}

## sysLibInfo_GetVersion() <a href="#a2ea645c1932f87870a8b3efdd3406e98" id="a2ea645c1932f87870a8b3efdd3406e98"></a>

<p>const <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> char\* vfisysinfo::sysLibInfo_GetVersion</p>

returns a zero-terminated string with version and build information of libvfisysinfo in ADK version string format: major.minor.patch-build, e.g. \"1.2.3-4\"

### Returns

version string

## sysPlaySound() <a href="#a920110b547bce1eb8e0c016d4064886f" id="a920110b547bce1eb8e0c016d4064886f"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysPlaySound</p>

Plays an arbitrary tone with arbitrary duration and volume.

**Parameters**

\[in\] **note** value specifying a note listed in the table below \[in\] **duration** duration of the beep in milliseconds. value range: 0 \... 5000 (max) \[in\] **volume** volume in percent, value range: 0 (low) \... 50 (middle) \... 100 (high)

### Returns

SYS_ERR_OK for success, else error code

 
Supported values for parameter *note*

| Value | Note | Frequency |
|----|----|----|
| <p>0</p> | <p>A</p> | <p>55.00</p> |
| <p>1</p> | <p>A#</p> | <p>58.27</p> |
| <p>2</p> | <p>B</p> | <p>61.74</p> |
| <p>3</p> | <p>C</p> | <p>65.41</p> |
| <p>4</p> | <p>C#</p> | <p>69.30</p> |
| <p>5</p> | <p>D</p> | <p>73.42</p> |
| <p>6</p> | <p>D#</p> | <p>77.78</p> |
| <p>7</p> | <p>E</p> | <p>82.41</p> |
| <p>8</p> | <p>F</p> | <p>87.31</p> |
| <p>9</p> | <p>F#</p> | <p>92.50</p> |
| <p>10</p> | <p>G</p> | <p>98.00</p> |
| <p>11</p> | <p>G#</p> | <p>103.83</p> |
| <p>12</p> | <p>A</p> | <p>110.00</p> |
| <p>13</p> | <p>A#</p> | <p>116.54</p> |
| <p>14</p> | <p>B</p> | <p>123.47</p> |
| <p>15</p> | <p>C</p> | <p>130.81</p> |
| <p>16</p> | <p>C#</p> | <p>138.59</p> |
| <p>17</p> | <p>D</p> | <p>146.83</p> |
| <p>18</p> | <p>D#</p> | <p>155.56</p> |
| <p>19</p> | <p>E</p> | <p>164.81</p> |
| <p>20</p> | <p>F</p> | <p>174.61</p> |
| <p>21</p> | <p>F#</p> | <p>185.00</p> |
| <p>22</p> | <p>G</p> | <p>196.00</p> |
| <p>23</p> | <p>G#</p> | <p>207.65</p> |
| <p>24</p> | <p>A</p> | <p>220.00</p> |
| <p>25</p> | <p>A#</p> | <p>233.08</p> |
| <p>26</p> | <p>B</p> | <p>246.94</p> |
| <p>27</p> | <p>C</p> | <p>261.63</p> |
| <p>28</p> | <p>C#</p> | <p>277.18</p> |
| <p>29</p> | <p>D</p> | <p>293.66</p> |
| <p>30</p> | <p>D#</p> | <p>311.13</p> |
| <p>31</p> | <p>E</p> | <p>329.63</p> |
| <p>32</p> | <p>F</p> | <p>349.23</p> |
| <p>33</p> | <p>F#</p> | <p>369.99</p> |
| <p>34</p> | <p>G</p> | <p>392.00</p> |
| <p>35</p> | <p>G#</p> | <p>415.30</p> |
| <p>36</p> | <p>A</p> | <p>440.00</p> |
| <p>37</p> | <p>A#</p> | <p>466.16</p> |
| <p>38</p> | <p>B</p> | <p>493.88</p> |
| <p>39</p> | <p>C</p> | <p>523.25</p> |
| <p>40</p> | <p>C#</p> | <p>554.37</p> |
| <p>41</p> | <p>D</p> | <p>587.33</p> |
| <p>42</p> | <p>D#</p> | <p>622.25</p> |
| <p>43</p> | <p>E</p> | <p>659.26</p> |
| <p>44</p> | <p>F</p> | <p>698.46</p> |
| <p>45</p> | <p>F#</p> | <p>739.99</p> |
| <p>46</p> | <p>G</p> | <p>783.99</p> |
| <p>47</p> | <p>G#</p> | <p>830.61</p> |
| <p>48</p> | <p>A</p> | <p>880</p> |
| <p>49</p> | <p>A#</p> | <p>932</p> |
| <p>50</p> | <p>B</p> | <p>988</p> |
| <p>51</p> | <p>C</p> | <p>1047</p> |
| <p>52</p> | <p>C#</p> | <p>1109</p> |
| <p>53</p> | <p>D</p> | <p>1175</p> |
| <p>54</p> | <p>D#</p> | <p>1245</p> |
| <p>55</p> | <p>E</p> | <p>1319</p> |
| <p>56</p> | <p>F</p> | <p>1397</p> |
| <p>57</p> | <p>F#</p> | <p>1480</p> |
| <p>58</p> | <p>G</p> | <p>1568</p> |
| <p>59</p> | <p>G#</p> | <p>1661</p> |
| <p>60</p> | <p>A</p> | <p>1760</p> |
| <p>61</p> | <p>A#</p> | <p>1865</p> |
| <p>62</p> | <p>B</p> | <p>1976</p> |
| <p>63</p> | <p>C</p> | <p>2093</p> |
| <p>64</p> | <p>C#</p> | <p>2217</p> |
| <p>65</p> | <p>D</p> | <p>2349</p> |
| <p>66</p> | <p>D#</p> | <p>2489</p> |
| <p>67</p> | <p>E</p> | <p>2637</p> |
| <p>68</p> | <p>F</p> | <p>2794</p> |
| <p>69</p> | <p>F#</p> | <p>2960</p> |

70 \| G \| 3136 71 \| G# \| 3322 72 \| A \| 3520 73 \| A# \| 3729 74 \| B \| 3951 75 \| C \| 4186 76 \| C# \| 4435 77 \| D \| 4699 78 \| D# \| 4978 79 \| E \| 5274 80 \| F \| 5588 81 \| F# \| 5920 82 \| G \| 6272 83 \| G# \| 6645 84 \| A \| 7040 85 \| A# \| 7459 86 \| B \| 7902 87 \| C \| 8372 88 \| C# \| 8870 89 \| D \| 9397 90 \| D# \| 9956 91 \| E \| 10548 92 \| F \| 11175 93 \| F# \| 11840 94 \| G \| 12544 95 \| G# \| 13290

### Examples

<a href="demo-sysinfo_8cpp-example.md#a131">demo-sysinfo.cpp</a>.

## sysPlaySoundFreq() <a href="#a345cb89a149cb5931e68a989da7c5a32" id="a345cb89a149cb5931e68a989da7c5a32"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysPlaySoundFreq</p>

Plays an arbitrary frequency with arbitrary duration and volume.

**Parameters**

\[in\] **frequency** in Hz, value range: 400 (min) \... 3000(max) \[in\] **duration** duration of the beep in milliseconds. value range: 0 \... 5000 (max) \[in\] **volume** volume in percent, value range: 0 (low) \... 50 (middle) \... 100 (high)

### Returns

SYS_ERR_OK for success, else error code

### Examples

<a href="demo-sysinfo_8cpp-example.md#a130">demo-sysinfo.cpp</a>.

## sysPutEnv() <a href="#a209d53b4f90b64ad292fa420911cb385" id="a209d53b4f90b64ad292fa420911cb385"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysPutEnv</p>

Stores value in system ini file

**Parameters**

\[in\] **section** \[in\] **label** \[in\] **value**

### Returns

### Examples

<a href="demo-sysinfo_8cpp-example.md#a204">demo-sysinfo.cpp</a>.

## sysReboot() <a href="#aae13f271ba6f2d8d1e20d65785df0633" id="aae13f271ba6f2d8d1e20d65785df0633"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int sysReboot</p>

Reboot terminal

### Returns

error code

reboot terminal

### Returns

error code

### Examples

<a href="demo-sysinfo_8cpp-example.md#a62">demo-sysinfo.cpp</a>.

## sysRebootDock() <a href="#a3a740e4154bfe01a6f48463a766ee747" id="a3a740e4154bfe01a6f48463a766ee747"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int sysRebootDock</p>

Reboot terminal dock station

### Returns

error code

reboot terminal dock

### Returns

error code

### Examples

<a href="demo-sysinfo_8cpp-example.md#a63">demo-sysinfo.cpp</a>.

## sysRefreshStatusBar() <a href="#a0a4c0bc815229837e50e2353c1fb9f51" id="a0a4c0bc815229837e50e2353c1fb9f51"></a>

<p><a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int vfisysinfo::sysRefreshStatusBar</p>

Trigger immediate refresh of the statusbar

**Parameters**

\[in\] **region_id** GUI region ID

### Returns

error code


{% hint style="info" %}
The statusbar will be updated immediately after this call.
{% endhint %}

## sysSDKVersion() <a href="#a1a0fd931f24992061dd22d0a4ff16126" id="a1a0fd931f24992061dd22d0a4ff16126"></a>

<p>const char\* vfisysinfo::sysSDKVersion</p>

inline

Deprecated

## sysSetPropertyInt() <a href="#a377307b06ac969f30af51e7cccf94dbb" id="a377307b06ac969f30af51e7cccf94dbb"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysSetPropertyInt</p>

set int property

**Parameters**

\[in\] **property** property to be set \[in\] **value** property value

### Returns

error code

### Examples

<a href="demo-sysinfo_8cpp-example.md#a15">demo-sysinfo.cpp</a>.

## sysSetPropertyString()\[1/2\] <a href="#ae7c891a4a38d050452eee0939a7f82de" id="ae7c891a4a38d050452eee0939a7f82de"></a> {#syssetpropertystring-12}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysSetPropertyString</p>

set string property

**Parameters**

\[in\] **property** property to be set \[in\] **value** new value, C-string

### Returns

error code

### Examples

<a href="demo-sysinfo_8cpp-example.md#a33">demo-sysinfo.cpp</a>.

## sysSetPropertyString()\[2/2\] <a href="#a5673a3f04e45faf278515ddf0f2679ea" id="a5673a3f04e45faf278515ddf0f2679ea"></a> {#syssetpropertystring-22}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysinfo::sysSetPropertyString</p>

set string property

**Parameters**

\[in\] **property** property to be set \[in\] **value** new value

### Returns

error code

## sysSetRefreshTime() <a href="#aab58488e2ed93f92618307af850f9880" id="aab58488e2ed93f92618307af850f9880"></a>

<p><a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int vfisysinfo::sysSetRefreshTime</p>

Set refresh time of the statusbar

**Parameters**

\[in\] **region_id** GUI region ID \[in\] **refresh_time_ms** statusbar refresh time in milliseconds

### Returns

error code


{% hint style="info" %}
The statusbar will be updated immediately after this call and the new refresh interval will be applied. The initial default for the statusbar update is 60 sec. Please note that a short refresh time may cause a high CPU load, since the GUI server will reder region of this statusbar again. A negative refresh time disables update intervals of the statusbar and application is responsible to update/refresh the statusbar contents with [sysRefreshStatusBar()](#a0a4c0bc815229837e50e2353c1fb9f51) or [sysSetStatusbarValues()](#a445f352501e089696320af9f48a43013). If refresh time is set to zero - statusbar will determine refresh time using html fields
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a13">demo-sysinfo.cpp</a>.

## sysSetStatusbarValues() <a href="#a445f352501e089696320af9f48a43013" id="a445f352501e089696320af9f48a43013"></a>

<p><a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int vfisysinfo::sysSetStatusbarValues</p>

Set statusbar user variables

**Parameters**

\[in\] **region_id** GUI region ID \[in\] **values** updated values of user defined variables used in the HTML document for the statusbar.

### Returns

error code


{% hint style="info" %}
The statusbar will be updated immediately after this call and the new user variables will be applied.
{% endhint %}

## sysShutdown() <a href="#a208c6199b44128a4bccf6fae0be44c95" id="a208c6199b44128a4bccf6fae0be44c95"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int sysShutdown</p>

Shut down terminal

### Returns

error code

### Examples

<a href="demo-sysinfo_8cpp-example.md#a61">demo-sysinfo.cpp</a>.

## sysSleep() <a href="#aa4e2bde8892f7c052fc3ab3efb80a473" id="aa4e2bde8892f7c052fc3ab3efb80a473"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int sysSleep</p>

Puts terminal in sleep mode

### Returns

error code

## sysStartStatusbar() <a href="#a002c2133e3e778923940535109afcca4" id="a002c2133e3e778923940535109afcca4"></a>

<p><a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int vfisysinfo::sysStartStatusbar</p>

Start a statusbar for the specified region ID providing the HTML document as a string

**Parameters**

\[in\] **region_id** GUI region ID \[in\] **html** string containing the HTML document used by the statusbar \[in\] **values** initial values of user defined variables used in the HTML document for the statusbar. These values will be provided in addition to automatically provided system values. \[in\] **resource_path** search path for resources (e.g. images) referenced by the HTML document used for statusbar. If not provided the GUI resource path set in the creating thread will be used. \[in\] **cb** optional callback function, see sysStatusbarCallback \[in\] **cbdata** data pointer passed on to the callback function \[in\] **cb** optional callback function for HTML return value, see sysStatusbarReturnCallback \[in\] **returncb** - callback to be invoked when statusbar html returns

### Returns

error code


{% hint style="info" %}
see sysStartStatusbarURL for details.
{% endhint %}

## sysStartStatusbarURL() <a href="#adb049b3a939a78dedeae1ac9aa15c9df" id="adb049b3a939a78dedeae1ac9aa15c9df"></a>

<p><a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int vfisysinfo::sysStartStatusbarURL</p>

Start a statusbar for the specified region ID using a URL for the HTML document

**Parameters**

\[in\] **region_id** GUI region ID \[in\] **url** string containing the URL to the GUI html file used by the statusbar \[in\] **values** initial values of user defined variables used in the HTML document for the statusbar. These values will be provided in addition to automatically provided system values. \[in\] **cb** optional callback function, see sysStatusbarCallback \[in\] **cbdata** data pointer passed on to the callback function

### Returns

error code


{% hint style="info" %}
The statusbar will be displayed in the provided GUI region ID. Callers have to configure the region previously. Multiple statusbars can be provided in different region IDs. The statusbar does regular updates in the background and needs to be stopped for power-saving to take effect on some platforms.
{% endhint %}

The following system variables are provided for use in the HTML document that describes the statusbar. The values for these system variables are automatically supplied and updated by the statusbar background task for this region ID. They can be used in the HTML document as \<?var variablename ?\>.

a\) Date/Time variables

- sys_time : preformated time string, format: \"hh:mm\"
- sys_time_hour : hours, format: \"00\"-\"23\"
- sys_time_hour_monadic: hours, format: \"0\"-\"23\"
- sys_time_min : min, format: \"00\"-\"59\"
- sys_time_sec : sec, format: \"00\"-\"60\" (The range is up to 60 to allow for occasional leap seconds)
- sys_time_day : day, format: \"01\"-\"31\"
- sys_time_month : month, format: \"01\"-\"12\"
- sys_time_year : year, format: \"yyyy\"
- sys_time_12h : hours, format: \"01\"-\"12\"
- sys_time_12h_monadic : hours, format: \"1\"-\"12\"
- sys_time_am_pm : AM or PM designation, format: \"AM\" or \"PM\"

Please note: Date/Time variables in a statusbar have a special role, since they require an update, if the time unit changes. For this reason the statusbar is updated out of refresh intervals automatically, if a time unit is increased. Depending on time format variable the statusbar is refreshed with beginning of the next time unit as follows:

| format variable | time unit |
|----|----|
| <p>sys_time_sec</p> | <p>every second</p> |
| <p>sys_time_min</p> | <p>every minute</p> |
| <p>sys_time</p> | <p>every minute</p> |
| <p>others</p> | <p>every hour</p> |

Attention: sys_time_sec may cause a high CPU load, since the GUI server will reder region of this statusbar every second.

b\) Battery information

- sys_battery_percentage : Battery Charge Percentage, format: \"0\"-\"100\", \"-1\" if no battery is available
- sys_battery_percentage_2: Battery Charge Percentage, format: \"0%\"-\"100%\", \"\" if no battery is available
- sys_battery_level : Battery Charge Level, format: \"1\"-\"11\" (or \"101-111\" for battery charging), \"-1\" if no battery available Battery Charge Level is mapped from Battery Charge Percentage as follows:
  | Percentage | Level | Level (battery charging) |
  |----|----|----|
  | <p>above 95</p> | <p>11</p> | <p>111</p> |
  | <p>above 90</p> | <p>10</p> | <p>110</p> |
  | <p>above 80</p> | <p>9</p> | <p>109</p> |
  | <p>above 70</p> | <p>8</p> | <p>108</p> |
  | <p>above 60</p> | <p>7</p> | <p>107</p> |
  | <p>above 50</p> | <p>6</p> | <p>106</p> |
  | <p>above 40</p> | <p>5</p> | <p>105</p> |
  | <p>above 30</p> | <p>4</p> | <p>104</p> |
  | <p>above 20</p> | <p>3</p> | <p>103</p> |
  | <p>above 10</p> | <p>2</p> | <p>102</p> |
  | <p>above 5</p> | <p>1</p> | <p>101</p> |
  | <p>below 6</p> | <p>0</p> | <p>100</p> |

c\) Docking Status

- sys_docking_status : Docking Status (format: \"0\"==undocked, \"1\"==docked, battery charging)

## sysStartStatusbarURLReturnVal() <a href="#a6401aac22f963860ed0cc55c227ecf8f" id="a6401aac22f963860ed0cc55c227ecf8f"></a>

<p><a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int vfisysinfo::sysStartStatusbarURLReturnVal</p>

Start a statusbar for the specified region ID using a URL for the HTML document with additional return callback

**Parameters**

\[in\] **region_id** GUI region ID \[in\] **url** string containing the URL to the GUI html file used by the statusbar \[in\] **values** initial values of user defined variables used in the HTML document for the statusbar. These values will be provided in addition to automatically provided system values. \[in\] **cb** optional callback function, see sysStatusbarCallback \[in\] **cbdata** data pointer passed on to the callback function \[in\] **returncb** optional callback function for return value, see sysStatusbarReturnCallback

### Returns

error code


{% hint style="info" %}
Same as sysStartStatusbarURL but with additional callback for HTML return value
{% endhint %}

### Examples

<a href="demo-sysinfo_8cpp-example.md#a7">demo-sysinfo.cpp</a>.

## sysStatusbar_GetVersion() <a href="#a8ce093c74ec3a14ede2e8a89ac6af707" id="a8ce093c74ec3a14ede2e8a89ac6af707"></a>

<p>const <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> char\* vfisysinfo::sysStatusbar_GetVersion</p>

returns a zero-terminated string with version and build information of libvfisysbar

### Returns

version string

## sysStatusbarGetVersion() <a href="#ab9295a05fc42ca989db452a788e77400" id="ab9295a05fc42ca989db452a788e77400"></a>

<p>const <a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> char\* vfisysinfo::sysStatusbarGetVersion</p>

returns a zero-terminated string with version and build information of libvfisysbar

### Returns

version string

## sysStopStatusbar() <a href="#aa28127dbc1ddc94bd9c2b784a98c634c" id="aa28127dbc1ddc94bd9c2b784a98c634c"></a>

<p><a href="group__sysbar.md#ga126c91e085914983e138add8b3591cdd">SYS_BAR_API</a> int vfisysinfo::sysStopStatusbar</p>

Stop statusbar display and background update for the specified region ID

**Parameters**

\[in\] **region_id** GUI region ID

### Returns

error code

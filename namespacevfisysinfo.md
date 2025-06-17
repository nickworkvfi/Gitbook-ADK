---
title: vfisysinfo

---

# vfisysinfo

**Module:** **[Utility functions](group__util.md)**

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfisysinfo::IniFile](classvfisysinfo_1_1_ini_file.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[LEDs](namespacevfisysinfo.md#enum-leds)** { CTLS_LED_NONE = 0, MSR_LED_NONE = 0, SYS_LED_NONE = 0, MSR_LED_0 = (1<<0), MSR_LED_1 = (1<<1), MSR_LED_2 = (1<<2), KEYPAD_LED = (1<<3), SMARTCARD_LED = (1<<4), CTLS_LED_LOGO = (1<<5), CTLS_LED_0 = (1<<6), CTLS_LED_1 = (1<<7), CTLS_LED_2 = (1<<8), CTLS_LED_3 = (1<<9), SYSTEM_LED = (1<<10), POWER_LED = (1<<11), BLUETOOTH_LED = (1<<12), MODEM_LED = (1<<13), GREEN_LED = (1<<14), YELLOW_LED = (1<<15), RED_LED = (1<<16), MSR_LED_ALL = MSR_LED_0 | MSR_LED_1 | MSR_LED_2, CTLS_LED_ALL = CTLS_LED_0 | CTLS_LED_1 | CTLS_LED_2 | CTLS_LED_3 | CTLS_LED_LOGO} |
| enum| **[LedStates](namespacevfisysinfo.md#enum-ledstates)** { SWITCH_OFF = 0, SWITCH_ON = 1} |
| enum| **[LedBrightness](namespacevfisysinfo.md#enum-ledbrightness)** { MAX_BRIGHTNESS = 255, MIN_BRIGHTNESS = 0} |
| enum| **[sysError](namespacevfisysinfo.md#enum-syserror)** { SYS_ERR_OK =  0, SYS_ERR_PROP_UNSUPPORTED = -1, SYS_ERR_PROP_READ_ONLY = -2, SYS_ERR_PROP_WRITE_ONLY = -3, SYS_ERR_PARAMETER = -4, SYS_ERR_PERMISSION = -5, SYS_ERR_REGION = -6, SYS_ERR_FAIL = -7, SYS_ERR_UNSUPPORTED = -8, SYS_ERR_ACTIVE_TIMEZONE = -9, SYS_ERR_INSTALL_LIMIT = -10, SYS_ERR_REBOOT_NEEDED = -11, SYS_ERR_FILE_DOES_NOT_EXIST = -12, SYS_ERR_BUNDLE_VERSION = -13, SYS_ERR_EXISTS = -14, SYS_ERR_ACCESS = -15, SYS_ERR_NOT_DOCKED = -16, SYS_ERR_KEY_MISSING = -17, SYS_ERR_EXPECTED_KEY = -18, SYS_ERR_CONFIGURATIION = -19, SYS_ERR_PATHNAME_TOO_LONG = -20, SYS_ERR_GET_CWD = -21, SYS_ERR_IPC = -22, SYS_ERR_RUNNING = -23, SYS_ERR_SDI_NOT_CONNECTED = -24, SYS_ERR_CALCULATING = -25, SYS_ERR_BASE_CTRL_NOT_AVAILABLE = -26, SYS_ERR_ANDROID_NOT_AVAILABLE = -27} |
| enum| **[displayContrastConstants](namespacevfisysinfo.md#enum-displaycontrastconstants)** { ContrastMin = 1, ContrastDefault = 8, ContrastMax = 15, ContrastUp = 64, ContrastDown = 65} |
| enum| **[batteryTechnology](namespacevfisysinfo.md#enum-batterytechnology)** { BattTUnknown = 0, BattTNiMH = 1, BattTLiIon = 2, BattTLiPoly = 3, BattTLiFe = 4, BattTNiCd = 5, BattTLiMn = 6} |
| enum| **[deviceMode](namespacevfisysinfo.md#enum-devicemode)** { DEVICE_MANUF = 0, DEVICE_PROD = 1, DEVICE_OS_DEV = 2, DEVICE_CP_DEV = 3} |
| enum| **[batteryChargeMode](namespacevfisysinfo.md#enum-batterychargemode)** { UNRESTRICTED_CHARGE_MODE = 1, CAR_CHARGER_MODE = 2} |
| enum| **[chargingPort](namespacevfisysinfo.md#enum-chargingport)** { CHARGING_USB_C_PORT = 0, CHARGING_POGO_PORT = 1} |
| enum| **[sysUSBmode](namespacevfisysinfo.md#enum-sysusbmode)** { SYS_USB_UNKNOWN = 0, SYS_USB_DEFAULT = 1, SYS_USB_HOST = 2, SYS_USB_DEVICE = 3} |
| enum| **[deviceType](namespacevfisysinfo.md#enum-devicetype)** { DEVICE_NON_PORTABLE = 0, DEVICE_HANDSET = 1, DEVICE_BASE = 2, DEVICE_MOBILE = 3} |
| enum| **[batteryType](namespacevfisysinfo.md#enum-batterytype)** { BATTERY_TYPE_SMART = 1, BATTERY_TYPE_SIMPLE = 2} |
| enum| **[keyboardType](namespacevfisysinfo.md#enum-keyboardtype)** { KEYBOARD_TYPE_UNKNOWN = 0, KEYBOARD_TYPE_STANDARD = 3, KEYBOARD_TYPE_EBS100 = 4, KEYBOARD_TYPE_ARABIC = 5, KEYBOARD_TYPE_RNIB = 6} |
| enum| **[SYSPropertyInt](namespacevfisysinfo.md#enum-syspropertyint)** { SYS_PROP_BATTERY_AVAILABLE =0, SYS_PROP_BATTERY_STATUS_OK =1, SYS_PROP_BATTERY_DEVICE =2, SYS_PROP_BATTERY_VOLTAGE =3, SYS_PROP_BATTERY_CAPACITY =4, SYS_PROP_BATTERY_CHARGE_LEVEL =5, SYS_PROP_BATTERY_CHARGING =10, SYS_PROP_BATTERY_FULL =11, SYS_PROP_BATTERY_TEMP =13, SYS_PROP_BATTERY_CURRENT =14, SYS_PROP_BATTERY_CRITICAL =18, SYS_PROP_BATTERY_LOW =19, SYS_PROP_BATTERY_NORMAL =20, SYS_PROP_BATTERY_TECHNOLOGY =700, SYS_PROP_BATTERY_FCC =701, SYS_PROP_BATTERY_SOH =702, SYS_PROP_BATTERY_CHARGE_IN_SLEEP =21, SYS_PROP_BATTERY_CALIBRATION =705, SYS_PROP_BATTERY_TYPE =706, SYS_PROP_BATTERY_CHARGE_MODE =707, SYS_PROP_CHARGE_CYCLE_COUNT =704, SYS_PROP_UX100_AVAILABLE =22, SYS_PROP_UX100_OPERATIONAL_MODE =24, SYS_PROP_UX100_BACKLIGHT =209, SYS_PROP_UX400_AVAILABLE =23, SYS_PROP_UX115_UNIT =26, SYS_PROP_UX_UNIT =25, SYS_PROP_INTERNAL_BATTERY_STATUS =7, SYS_PROP_INTERNAL_BATTERY_VOLTAGE =8, SYS_PROP_DOCKING_STATUS =6, SYS_PROP_DOCK_SUPPORT =15, SYS_PROP_USB1_MODE =16, SYS_PROP_USB2_MODE =17, SYS_PROP_USB1_CONFIGURABLE =27, SYS_PROP_USB2_CONFIGURABLE =28, SYS_PROP_USB1_DEFAULT =29, SYS_PROP_USB2_DEFAULT =30, SYS_PROP_USB1_CHARGE =31, SYS_PROP_USB2_CHARGE =32, SYS_PROP_USB_HIGH_POWER_MODE =38, SYS_PROP_PRINTER_AVAILABLE =9, SYS_PROP_POWER_STATUS =12, SYS_PROP_POWER_ON =39, SYS_PROP_CHARGE_ON_SAVING =703, SYS_PROP_KEYBOARD_BEEP =100, SYS_PROP_KEYB_BACKLIGHT =101, SYS_PROP_KEYBOARD_HW =102, SYS_PROP_KEYBOARD_SIZE =103, SYS_PROP_DISP_CONTRAST =200, SYS_PROP_DISP_BACKLIGHT =201, SYS_PROP_DISP =202, SYS_PROP_DISP_HW =203, SYS_PROP_DISP_COLOR =205, SYS_PROP_DISP_HEIGHT =206, SYS_PROP_DISP_WIDTH =207, SYS_PROP_DISP_TOUCH =208, SYS_PROP_ANDROID =204, SYS_PROP_HW_RAM_SIZE =300, SYS_PROP_HW_RAM_USED =302, SYS_PROP_HW_FLASH_SIZE =301, SYS_PROP_HW_FLASH_USED =303, SYS_PROP_HW_EXE_PARTITION_SIZE =307, SYS_PROP_HW_EXE_PARTITION_USED =308, SYS_PROP_HW_DATA_PARTITION_SIZE =309, SYS_PROP_HW_DATA_PARTITION_USED =310, SYS_PROP_HW_TOUCH_GROUNDED =306, SYS_PROP_LED =304, SYS_PROP_PCI =305, SYS_PROP_VOLUME =400, SYS_PROP_SPEAKER_AVAILABLE =401, SYS_PROP_BUZZER_AVAILABLE =402, SYS_PROP_ADE_STATUS =500, SYS_PROP_CERT_SPONSOR_PROD =501, SYS_PROP_ATTACK_STATUS =502, SYS_PROP_ATTACK_STATUS_CODE =513, SYS_PROP_VCL_ENCRYPTION_STATUS =503, SYS_PROP_VOLTAGE_ENCRYPTION_STATUS =504, SYS_PROP_POSEIDON_ENCRYPTION_STATUS =505, SYS_PROP_NAVIGATOR_STATUS =506, SYS_PROP_SERVICE_SWITCH_STATUS =507, SYS_PROP_DEVICE_MODE =508, SYS_PROP_SYSMODE_BUTTON =509, SYS_PROP_DEVICE_TYPE =510, SYS_PROP_VATS =512, SYS_PROP_UX100_ANTI_REMOVAL_SWITCH =511, SYS_PROP_SLP_TAINTED_STATUS =514, SYS_PROP_UPTIME =600, SYS_PROP_BARCODE_SCANNER =33, SYS_PROP_CAMERA =34, SYS_PROP_SWITCH_THRESHOLD_VOLTAGE =35, SYS_PROP_LOW_THRESHOLD_VOLTAGE =36, SYS_PROP_CONSOLE_STATE =37, SYS_PROP_UX_MDB = 40, SYS_PROP_CARD_SLOT2_MODE =41, SYS_PROP_CARD_SLOT_COUNT =42, SYS_PROP_KEYBOARD_TYPE =43, SYS_PROP_EXT_NFC_ANTENNA =44, SYS_PROP_VRK2_SUPPORT =45, SYS_PROP_USB_C_CHARGING_STATE =708, SYS_PROP_POGO_CHARGING_STATE =709, SYS_PROP_ECC_VRK_SUPPORT =46, SYS_PROP_LCD_PANEL_ID =47, SYS_PROP_VRK_CERT_INSTALLED =48, SYS_PROP_VRK_PACKAGING_UVRK_SUPPORT =49, SYS_PROP_POGO_DATA_STATE =710, SYS_PROP_ANDROID_PREFIX_LENGTH =50, SYS_PROP_UX100_TYPE =51} |
| enum| **[SYSPropertyString](namespacevfisysinfo.md#enum-syspropertystring)** { SYS_PROP_HW_MODEL_NAME =0, SYS_PROP_HW_MODEL_NAME_SHORT =54, SYS_PROP_HW_SERIALNO =1, SYS_PROP_OS_VERSION =2, SYS_PROP_HW_PTID =3, SYS_PROP_HW_VARIANT_NAME =4, SYS_PROP_HW_PART_NO =5, SYS_PROP_HW_VERSION =6, SYS_PROP_HW_LOT_NO =7, SYS_PROP_BOOT_VERSION =8, SYS_PROP_TERMINAL_SPONSOR =9, SYS_PROP_MANUF_DATE =10, SYS_PROP_CERT_SPONSOR_SN =11, SYS_PROP_CERT_SPONSOR_MODE =12, SYS_PROP_ADK_VERSION =14, SYS_PROP_UX100_SERIALNO =13, SYS_PROP_UX100_PARTNO =65, SYS_PROP_UX100_FW_VERSION =15, SYS_PROP_SBI_VERSION =16, SYS_PROP_VAULT_VERSION =17, SYS_PROP_CIB_VERSION =18, SYS_PROP_MIB_VERSION =19, SYS_PROP_KERNEL_VERSION =20, SYS_PROP_RFS_VERSION =21, SYS_PROP_RELEASE_VERSION =22, SYS_PROP_RFS_SECURITY_VERSION =23, SYS_PROP_SRED_VERSION =24, SYS_PROP_SRED_MODE =75, SYS_PROP_OPENPROTOCOL_VERSION =25, SYS_PROP_PCI_REBOOT_TIME =26, SYS_PROP_FILE_NAME_TO_INSTALL =27, SYS_PROP_MSR_COUNTERS =29, SYS_PROP_SCR_COUNTERS =30, SYS_PROP_CTLS_COUNTERS =58, SYS_PROP_DOCK_STATION_SN =31, SYS_PROP_DOCK_STATION_PN =32, SYS_PROP_DOCK_STATION_MODEL =33, SYS_PROP_DOCK_STATION_MAC =34, SYS_PROP_DOCK_STATION_HW_REV =35, SYS_PROP_DOCK_STATION_INSTALL =36, SYS_PROP_GSM_FIRMWARE_VERSION =37, SYS_PROP_DOCK_STATION_OS_VERSION =38, SYS_PROP_DOCK_STATION_IP_ADDRESS =39, SYS_PROP_DOCK_STATION_IP_V6_ADDRESS =51, SYS_PROP_DOCK_STATION_USB1_IP_ADDRESS =57, SYS_PROP_ANDROID_IP_V4_ADDRESS =59, SYS_PROP_ANDROID_IP_V6_ADDRESS =66, SYS_PROP_ANDROID_MAC =67, SYS_PROP_WARRANTIED_KEYS =53, SYS_PROP_SECAPP_VERSION =40, SYS_PROP_VSS_VERSION =41, SYS_PROP_STBY_MCU_VERSION =42, SYS_PROP_EXT_STORAGE =43, SYS_PROP_INSTALLED_PCKG_LIST =28, SYS_PROP_PKG_LIST =28, SYS_PROP_APP_PKG_LIST =44, SYS_PROP_BUNDLE_LIST =45, SYS_PROP_APP_BUNDLE_LIST =49, SYS_PROP_MSR_INFO =46, SYS_PROP_SCR_INFO =47, SYS_PROP_CTLS_INFO =48, SYS_PROP_HW_STRING =50, SYS_PROP_DEV_ID =52, SYS_PROP_FET =55, SYS_PROP_BT_MAC =60, SYS_PROP_WIFI_MAC =61, SYS_PROP_ETH_MAC =62, SYS_PROP_ETH2_MAC =63, SYS_PROP_COUNTRY =64, SYS_PROP_RTC =100, SYS_PROP_NTP_SERVER =101, SYS_PROP_BATTERY_SERIALNO =200, SYS_PROP_TIME_ZONE =300, SYS_PROP_TIME_ZONE_LIST =301, SYS_PROP_TIME_ZONE_FROM_FILE =302, SYS_PROP_TIME_ZONE_NAME =304, SYS_PROP_TIME_ISO8601 =303, SYS_PROP_REBOOT_REASON =400, SYS_PROP_ALL_LOADED_KEYS =56, SYS_PROP_ALL_LOADED_KEYS_V2 =80, SYS_PROP_TAMPER_RECORDS =68, SYS_PROP_BARCODE_SCANNER_FW_VERSION =69, SYS_PROP_ANDROID_VERSION =70, SYS_PROP_STATUSBAR_COLOR =71, SYS_PROP_ANDROID_TIME =72, SYS_PROP_MTD_INFO =73, SYS_PROP_HW_ID =74, SYS_PROP_LCD_PANEL_MODEL =76, SYS_PROP_DT_NAME =77, SYS_PROP_PCI_APPS =78, SYS_PROP_FW_PCI_VERSION =79, SYS_PROP_HW_MODEL_NAME_SEC =81, SYS_PROP_MOBILE_RADIO_SW_VERSION =82, SYS_PROP_TOUCH_NAME =83, SYS_PROP_TOUCH_HW_VERSION =84, SYS_PROP_TOUCH_SW_VERSION =85, SYS_PROP_TOUCH_CONFIG_VERSION =86, SYS_PROP_ANDROID_GATEWAY =87, SYS_PROP_ANDROID_DNS1 =88, SYS_PROP_ANDROID_DNS2 =89} |
| typedef void(*)(void *data, int region_id, std::map< std::string, std::string > &values) | **[sysStatusbarCallback](namespacevfisysinfo.md#typedef-sysstatusbarcallback)**  |
| typedef [vfigui::uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) | **[sysStatusbarReturnCallback](namespacevfisysinfo.md#typedef-sysstatusbarreturncallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[ctlsLedsChangeState](namespacevfisysinfo.md#function-ctlsledschangestate)**(int ledMap) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[msrLedsChangeState](namespacevfisysinfo.md#function-msrledschangestate)**(int ledMap) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[scrLedChangeState](namespacevfisysinfo.md#function-scrledchangestate)**(int state) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysLedsChangeState](namespacevfisysinfo.md#function-sysledschangestate)**(int ledMap) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[msrShowRunway](namespacevfisysinfo.md#function-msrshowrunway)**(int repeatCount) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[msrShowCancel](namespacevfisysinfo.md#function-msrshowcancel)**(void ) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[logoLedChangeState](namespacevfisysinfo.md#function-logoledchangestate)**(int state) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[setBrightness](namespacevfisysinfo.md#function-setbrightness)**(unsigned int ledMap, int brightness) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) bool | **[isBrightnessAdjustable](namespacevfisysinfo.md#function-isbrightnessadjustable)**(unsigned int ledId) |
| [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) int | **[sysStartStatusbarURL](namespacevfisysinfo.md#function-sysstartstatusbarurl)**(int region_id, const std::string & url, const std::map< std::string, std::string > & values, [sysStatusbarCallback](namespacevfisysinfo.md#typedef-sysstatusbarcallback) cb =0, void * cbdata =0) |
| [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) int | **[sysStartStatusbarURLReturnVal](namespacevfisysinfo.md#function-sysstartstatusbarurlreturnval)**(int region_id, const std::string & url, const std::map< std::string, std::string > & values, [sysStatusbarCallback](namespacevfisysinfo.md#typedef-sysstatusbarcallback) cb, void * cbdata, [sysStatusbarReturnCallback](namespacevfisysinfo.md#typedef-sysstatusbarreturncallback) returncb) |
| [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) int | **[sysStartStatusbar](namespacevfisysinfo.md#function-sysstartstatusbar)**(int region_id, const std::string & html, const std::map< std::string, std::string > & values, const std::string & resource_path =std::string(), [sysStatusbarCallback](namespacevfisysinfo.md#typedef-sysstatusbarcallback) cb =0, void * cbdata =0, [sysStatusbarReturnCallback](namespacevfisysinfo.md#typedef-sysstatusbarreturncallback) returncb =0) |
| [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) int | **[sysStopStatusbar](namespacevfisysinfo.md#function-sysstopstatusbar)**(int region_id) |
| [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) int | **[sysSetStatusbarValues](namespacevfisysinfo.md#function-syssetstatusbarvalues)**(int region_id, const std::map< std::string, std::string > & values) |
| [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) int | **[sysGetStatusbarValues](namespacevfisysinfo.md#function-sysgetstatusbarvalues)**(int region_id, std::map< std::string, std::string > & values) |
| [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) int | **[sysSetRefreshTime](namespacevfisysinfo.md#function-syssetrefreshtime)**(int region_id, int refresh_time_ms) |
| [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) int | **[sysGetRefreshTime](namespacevfisysinfo.md#function-sysgetrefreshtime)**(int region_id, int * refresh_time_ms) |
| [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) int | **[sysRefreshStatusBar](namespacevfisysinfo.md#function-sysrefreshstatusbar)**(int region_id) |
| const [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) char * | **[sysStatusbar_GetVersion](namespacevfisysinfo.md#function-sysstatusbar-getversion)**() |
| const [SYS_BAR_API](group__sysbar.md#define-sys-bar-api) char * | **[sysStatusbarGetVersion](namespacevfisysinfo.md#function-sysstatusbargetversion)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysBeepNormal](namespacevfisysinfo.md#function-sysbeepnormal)**(int volume) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysBeepError](namespacevfisysinfo.md#function-sysbeeperror)**(int volume) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysPlaySound](namespacevfisysinfo.md#function-sysplaysound)**(int note, int duration, int volume) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysPlaySoundFreq](namespacevfisysinfo.md#function-sysplaysoundfreq)**(int frequency, int duration, int volume) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysGetPropertyInt](namespacevfisysinfo.md#function-sysgetpropertyint)**(enum [SYSPropertyInt](namespacevfisysinfo.md#enum-syspropertyint) property, int & value) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysGetPropertyInt](namespacevfisysinfo.md#function-sysgetpropertyint)**(enum [SYSPropertyInt](namespacevfisysinfo.md#enum-syspropertyint) property, int * value) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysSetPropertyInt](namespacevfisysinfo.md#function-syssetpropertyint)**(enum [SYSPropertyInt](namespacevfisysinfo.md#enum-syspropertyint) property, int value) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysGetPropertyString](namespacevfisysinfo.md#function-sysgetpropertystring)**(enum [SYSPropertyString](namespacevfisysinfo.md#enum-syspropertystring) property, char * value, int len) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysSetPropertyString](namespacevfisysinfo.md#function-syssetpropertystring)**(enum [SYSPropertyString](namespacevfisysinfo.md#enum-syspropertystring) property, const char * value) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysGetPropertyString](namespacevfisysinfo.md#function-sysgetpropertystring)**(enum [SYSPropertyString](namespacevfisysinfo.md#enum-syspropertystring) property, std::string & value) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysSetPropertyString](namespacevfisysinfo.md#function-syssetpropertystring)**(enum [SYSPropertyString](namespacevfisysinfo.md#enum-syspropertystring) property, const std::string & value) |
| const [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) char * | **[sysInfo_GetVersion](namespacevfisysinfo.md#function-sysinfo-getversion)**() |
| const [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) char * | **[sysLibInfo_GetVersion](namespacevfisysinfo.md#function-syslibinfo-getversion)**() |
| const [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) char * | **[sysGetVersion](namespacevfisysinfo.md#function-sysgetversion)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysReboot](namespacevfisysinfo.md#function-sysreboot)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysSleep](namespacevfisysinfo.md#function-syssleep)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysDeepSleep](namespacevfisysinfo.md#function-sysdeepsleep)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysHibernate](namespacevfisysinfo.md#function-syshibernate)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysShutdown](namespacevfisysinfo.md#function-sysshutdown)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysRebootDock](namespacevfisysinfo.md#function-sysrebootdock)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) std::string | **[sysErrorMsg](namespacevfisysinfo.md#function-syserrormsg)**(enum [sysError](namespacevfisysinfo.md#enum-syserror) code) |
| const [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) char * | **[sysErrorMessage](namespacevfisysinfo.md#function-syserrormessage)**(enum [sysError](namespacevfisysinfo.md#enum-syserror) code) |
| const char * | **[sysSDKVersion](namespacevfisysinfo.md#function-syssdkversion)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) void | **[Dsp2Hex](namespacevfisysinfo.md#function-dsp2hex)**(char * dsp, long * hex, unsigned int n) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysPutEnv](namespacevfisysinfo.md#function-sysputenv)**(const std::string & section, const std::string & label, const std::string & value) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysGetEnv](namespacevfisysinfo.md#function-sysgetenv)**(const std::string & section, const std::string & label, std::string & value) |

## Detailed Description


Verifone system information (vfisysinfo) namespace 

## Types Documentation

### enum LEDs

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CTLS_LED_NONE | 0|   |
| MSR_LED_NONE | 0|   |
| SYS_LED_NONE | 0|   |
| MSR_LED_0 | (1<<0)|   |
| MSR_LED_1 | (1<<1)|   |
| MSR_LED_2 | (1<<2)|   |
| KEYPAD_LED | (1<<3)|   |
| SMARTCARD_LED | (1<<4)|   |
| CTLS_LED_LOGO | (1<<5)|   |
| CTLS_LED_0 | (1<<6)|   |
| CTLS_LED_1 | (1<<7)|   |
| CTLS_LED_2 | (1<<8)|   |
| CTLS_LED_3 | (1<<9)|   |
| SYSTEM_LED | (1<<10)|   |
| POWER_LED | (1<<11)|   |
| BLUETOOTH_LED | (1<<12)|   |
| MODEM_LED | (1<<13)|   |
| GREEN_LED | (1<<14)|   |
| YELLOW_LED | (1<<15)|   |
| RED_LED | (1<<16)|   |
| MSR_LED_ALL | MSR_LED_0 \| MSR_LED_1 \| MSR_LED_2|   |
| CTLS_LED_ALL | CTLS_LED_0 \| CTLS_LED_1 \| CTLS_LED_2 \| CTLS_LED_3 \| CTLS_LED_LOGO|   |




### enum LedStates

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SWITCH_OFF | 0|   |
| SWITCH_ON | 1|   |




### enum LedBrightness

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAX_BRIGHTNESS | 255|   |
| MIN_BRIGHTNESS | 0|   |




### enum sysError

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYS_ERR_OK |  0|  no error  |
| SYS_ERR_PROP_UNSUPPORTED | -1|  the property is not supported by the platform  |
| SYS_ERR_PROP_READ_ONLY | -2|  the property value cannot be set  |
| SYS_ERR_PROP_WRITE_ONLY | -3|  the property value cannot be obtained  |
| SYS_ERR_PARAMETER | -4|  wrong parameter  |
| SYS_ERR_PERMISSION | -5|  insufficient permissions  |
| SYS_ERR_REGION | -6|  wrong region ID  |
| SYS_ERR_FAIL | -7|  generic error  |
| SYS_ERR_UNSUPPORTED | -8|  the function requested is not supported on the current platform/device/...  |
| SYS_ERR_ACTIVE_TIMEZONE | -9|  the time zone is active already  |
| SYS_ERR_INSTALL_LIMIT | -10|  No more bundles can be installed. Reboot needed  |
| SYS_ERR_REBOOT_NEEDED | -11|  Reboot needed to install bundle  |
| SYS_ERR_FILE_DOES_NOT_EXIST | -12|  File doesn't exist  |
| SYS_ERR_BUNDLE_VERSION | -13|  Higher bundle version already installed  |
| SYS_ERR_EXISTS | -14|  the property does not exist  |
| SYS_ERR_ACCESS | -15|  Not enough privileges  |
| SYS_ERR_NOT_DOCKED | -16|  Terminal isn't docked  |
| SYS_ERR_KEY_MISSING | -17|  Keys are missing  |
| SYS_ERR_EXPECTED_KEY | -18|  No information on expected keys  |
| SYS_ERR_CONFIGURATIION | -19|  Not configured properly  |
| SYS_ERR_PATHNAME_TOO_LONG | -20|  Pathname is too long  |
| SYS_ERR_GET_CWD | -21|  Not possible to get pathname of the curent directory  |
| SYS_ERR_IPC | -22|  IPC error  |
| SYS_ERR_RUNNING | -23|  Daemon is not running  |
| SYS_ERR_SDI_NOT_CONNECTED | -24|  No connection to SDI server  |
| SYS_ERR_CALCULATING | -25|  Value gets calculated (not available yet)  |
| SYS_ERR_BASE_CTRL_NOT_AVAILABLE | -26|  Terminal base control link is not available  |
| SYS_ERR_ANDROID_NOT_AVAILABLE | -27|  Android information not available yet  |




error codes returned by the functions 


### enum displayContrastConstants

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ContrastMin | 1|  Minimal display contrast  |
| ContrastDefault | 8|  Default display contrast  |
| ContrastMax | 15|  Maximal display contrast  |
| ContrastUp | 64|  Increase display contrast  |
| ContrastDown | 65|  Decrease display contrast  |




Display contrast constants for SYS_PROP_DISP_CONTRAST property. 


### enum batteryTechnology

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BattTUnknown | 0|  Battery type unknown  |
| BattTNiMH | 1|  Battery type NiMH  |
| BattTLiIon | 2|  Battery type LiIon  |
| BattTLiPoly | 3|  Battery type LiPoly  |
| BattTLiFe | 4|  Battery type LiFe  |
| BattTNiCd | 5|  Battery type NiCd  |
| BattTLiMn | 6|  Battery type LiMn  |




Battery type used for SYS_PROP_BATTERY_TECHNOLOGY property. 


### enum deviceMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DEVICE_MANUF | 0|  Device is in manufacturing mode  |
| DEVICE_PROD | 1|  Device is in production mode  |
| DEVICE_OS_DEV | 2|  Device is in OS development mode  |
| DEVICE_CP_DEV | 3|  Device is in test mode (CP development mode)  |




Device mode used in SYS_PROP_DEVICE_MODE property. 


### enum batteryChargeMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UNRESTRICTED_CHARGE_MODE | 1|  Unrestricted charge mode  |
| CAR_CHARGER_MODE | 2|  Car charger mode  |




Battery charge mode used in SYS_PROP_BATTERY_CHARGE_MODE property. 


### enum chargingPort

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CHARGING_USB_C_PORT | 0|  charging USB-C port  |
| CHARGING_POGO_PORT | 1|  charging POGO port  |




Charging port used in SYS_PROP_USB_C_CHARGING_STATE / SYS_PROP_POGO_PIN_CHARGING_STATE property 


### enum sysUSBmode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYS_USB_UNKNOWN | 0|  Unknown USB mode  |
| SYS_USB_DEFAULT | 1|  Default USB mode  |
| SYS_USB_HOST | 2|  Host USB mode  |
| SYS_USB_DEVICE | 3|  Device USB mode  |




USB port modes. 


### enum deviceType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DEVICE_NON_PORTABLE | 0|  Non portable device (non dockable unit)  |
| DEVICE_HANDSET | 1|  Device is portable (dockable unit)  |
| DEVICE_BASE | 2|  Device is base  |
| DEVICE_MOBILE | 3|  Mobile device (non dockable unit)  |




Device mode used in SYS_PROP_DEVICE_TYPE property. 


### enum batteryType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BATTERY_TYPE_SMART | 1|  Smart battery  |
| BATTERY_TYPE_SIMPLE | 2|  Simple battery (No fuel gauge)  |




Battery type used in SYS_PROP_BATTERY_TYPE property. 


### enum keyboardType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| KEYBOARD_TYPE_UNKNOWN | 0|   |
| KEYBOARD_TYPE_STANDARD | 3|  Unknown keyboard type  |
| KEYBOARD_TYPE_EBS100 | 4|  Standard keyboard  |
| KEYBOARD_TYPE_ARABIC | 5|  EBS100 type keyboard  |
| KEYBOARD_TYPE_RNIB | 6|  Arabic keyboard  |




Keyboard type used in SYS_PROP_KEYBOARD_TYPE poperty. 


### enum SYSPropertyInt

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYS_PROP_BATTERY_AVAILABLE | =0|  read-only, Battery exists: 1: battery available, else 0  |
| SYS_PROP_BATTERY_STATUS_OK | =1|  read-only, Battery status: 1: ok, else 0  |
| SYS_PROP_BATTERY_DEVICE | =2|  read-only, Device can be battery powered: 1: Portable device, else 0  |
| SYS_PROP_BATTERY_VOLTAGE | =3|  read-only, Battery voltage in units of mV  |
| SYS_PROP_BATTERY_CAPACITY | =4|  read-only, Battery capacity in mAh  |
| SYS_PROP_BATTERY_CHARGE_LEVEL | =5|  read-only, Battery charge level in percent (0-100)  |
| SYS_PROP_BATTERY_CHARGING | =10|  read-only, Battery charging status: 1: charging, else 0  |
| SYS_PROP_BATTERY_FULL | =11|  read-only, Battery full: 1: battery fully charged, else 0  |
| SYS_PROP_BATTERY_TEMP | =13|  read-only, Battery temperature in degree Celsius  |
| SYS_PROP_BATTERY_CURRENT | =14|  read-only, Battery current in in cA (0.01A)  |
| SYS_PROP_BATTERY_CRITICAL | =18|  read-only, Battery critical: 1: battery level is critical, else 0  |
| SYS_PROP_BATTERY_LOW | =19|  read-only, Battery low: 1: battery level is low, else 0  |
| SYS_PROP_BATTERY_NORMAL | =20|  read-only, Battery normal: 1: battery level is normal, else 0  |
| SYS_PROP_BATTERY_TECHNOLOGY | =700|  read-only, Possible values are enumerated in batteryTechnology enum  |
| SYS_PROP_BATTERY_FCC | =701|  read-only, Percent Battery FCC (Full Charge Capacity) in mAh  |
| SYS_PROP_BATTERY_SOH | =702|  read-only, Percent Battery SOH (State Of Health) in %  |
| SYS_PROP_BATTERY_CHARGE_IN_SLEEP | =21|  read-only, Battery can be charged when unit is in power saving state, 1: battery can be charged, 0: can't be charged  |
| SYS_PROP_BATTERY_CALIBRATION | =705|  read-only, Battery calibration status 1:Calibrated 0:not calibrated  |
| SYS_PROP_BATTERY_TYPE | =706|  read-only, Battery type, batteryType enum value  |
| SYS_PROP_BATTERY_CHARGE_MODE | =707|  read/write, Battery charge mode, batteryChargeMode enum value  |
| SYS_PROP_CHARGE_CYCLE_COUNT | =704|  read-only, Battery charge cycle count  |
| SYS_PROP_UX100_AVAILABLE | =22|  read-only, presence of UX100 or UX110 device  |
| SYS_PROP_UX100_OPERATIONAL_MODE | =24|  read-only, Get PINPAD Operational Mode  |
| SYS_PROP_UX100_BACKLIGHT | =209|  read/write, Ux100 display backlight  |
| SYS_PROP_UX400_AVAILABLE | =23|  read-only, presence of UX400 device  |
| SYS_PROP_UX115_UNIT | =26|  read-only, If it is UX115 unit, 1: Ux115 unit, else 0  |
| SYS_PROP_UX_UNIT | =25|  read-only, If it is UX series unit, 1: Ux unit, else 0  |
| SYS_PROP_INTERNAL_BATTERY_STATUS | =7|  read-only, Internal battery battery status, 1: ok, else 0  |
| SYS_PROP_INTERNAL_BATTERY_VOLTAGE | =8|  read-only, Internal battery voltage in units of mV, possible values: 3000 = ideal, 2600 = good, 2300 = low  |
| SYS_PROP_DOCKING_STATUS | =6|  read-only, Docking status, 1:docked, 0:undocked  |
| SYS_PROP_DOCK_SUPPORT | =15|  read-only, Docking supports dock station, 1: dock station supported, 0: not supported  |
| SYS_PROP_USB1_MODE | =16|  read/write, USB1 mode, sysUSBmode enum value  |
| SYS_PROP_USB2_MODE | =17|  read/write, USB2 mode, sysUSBmode enum value  |
| SYS_PROP_USB1_CONFIGURABLE | =27|  read-only, USB1 configurable, 1: configurable, else 0  |
| SYS_PROP_USB2_CONFIGURABLE | =28|  read-only, USB2 configurable, 1: configurable, else 0  |
| SYS_PROP_USB1_DEFAULT | =29|  read-only, USB1 default mode: sysUSBmode enum value  |
| SYS_PROP_USB2_DEFAULT | =30|  read-only, USB2 default mode: sysUSBmode enum value  |
| SYS_PROP_USB1_CHARGE | =31|  read-only, USB1 charge port, 1: charge port, else 0  |
| SYS_PROP_USB2_CHARGE | =32|  read-only, USB2 charge port, 1: charge port, else 0  |
| SYS_PROP_USB_HIGH_POWER_MODE | =38|  read/write, Enable/disable USB high power mode: 2 - High power mode; 1 - Medium power mode; 0 - Low power mode. Requires system reboot.  |
| SYS_PROP_PRINTER_AVAILABLE | =9|  read-only, Printer exists: 1: printer available, else 0  |
| SYS_PROP_POWER_STATUS | =12|  read-only, Power status, 1: unit is line powered, else 0  |
| SYS_PROP_POWER_ON | =39|  read-only, 1: Unit can be powered on by green key, else 0  |
| SYS_PROP_CHARGE_ON_SAVING | =703|  read-only, Unit can be charged during power saving state (during sleep)  |
| SYS_PROP_KEYBOARD_BEEP | =100|  write-only, Keyboard beep on key press, 1: enabled, 0: disabled; note: on VOS3 also enables beep on secure touch input  |
| SYS_PROP_KEYB_BACKLIGHT | =101|  read/write, Keyboard backlight  |
| SYS_PROP_KEYBOARD_HW | =102|  read-only, HW keyboard exists, 1: exists, 0: touch only unit  |
| SYS_PROP_KEYBOARD_SIZE | =103|  read-only, Number of keys on HW keyboard  |
| SYS_PROP_DISP_CONTRAST | =200|  read/write, Display contrast  |
| SYS_PROP_DISP_BACKLIGHT | =201|  read/write, Display backlight  |
| SYS_PROP_DISP | =202|  write-only, Turn display on/off, 1: turn on, 0: turn off  |
| SYS_PROP_DISP_HW | =203|  read-only, Display exists, 1: exists, 0: no display available  |
| SYS_PROP_DISP_COLOR | =205|  read-only, Color display exists, 1: color display, 0: monochrome display  |
| SYS_PROP_DISP_HEIGHT | =206|  read-only, Color display height in pixels  |
| SYS_PROP_DISP_WIDTH | =207|  read-only, Color display width in pixels  |
| SYS_PROP_DISP_TOUCH | =208|  read-only, Is touchscreen available, 1: touchscreen, else 0  |
| SYS_PROP_ANDROID | =204|  read-only, Android side available 1: available, 0: non Android unit  |
| SYS_PROP_HW_RAM_SIZE | =300|  read-only, RAM size KB  |
| SYS_PROP_HW_RAM_USED | =302|  read-only, Used ram size KB  |
| SYS_PROP_HW_FLASH_SIZE | =301|  read-only, Flash size KB  |
| SYS_PROP_HW_FLASH_USED | =303|  read-only, Used flash size KB  |
| SYS_PROP_HW_EXE_PARTITION_SIZE | =307|  read-only, Total executable storage partition KB  |
| SYS_PROP_HW_EXE_PARTITION_USED | =308|  read-only, Used executable storage partition KB  |
| SYS_PROP_HW_DATA_PARTITION_SIZE | =309|  read-only, Total data storage partition KB  |
| SYS_PROP_HW_DATA_PARTITION_USED | =310|  read-only, Used data storage partition KB  |
| SYS_PROP_HW_TOUCH_GROUNDED | =306|  read/write, Deprecated: Carbon 8/10 support is dropped  |
| SYS_PROP_LED | =304|  read-only, Returns mask with available LEDs. Please see enum LEDs from [leds.h](leds_8h.md#file-leds.h) |
| SYS_PROP_PCI | =305|  read-only, Returns terminal PCI version  |
| SYS_PROP_VOLUME | =400|  read/write, speaker volume (0-100) (Engage only)  |
| SYS_PROP_SPEAKER_AVAILABLE | =401|  read-only, speaker exists, 1: exists, 0: no speaker (Engage only)  |
| SYS_PROP_BUZZER_AVAILABLE | =402|  read-only, buzzer exists, 1: exists, 0: no buzzer  |
| SYS_PROP_ADE_STATUS | =500|  read-only, ADE status 1: active, 0: inactive  |
| SYS_PROP_CERT_SPONSOR_PROD | =501|  read-only, sponsor certificate 1: prod, 0: test  |
| SYS_PROP_ATTACK_STATUS | =502|  read-only, Tamper status 1: device tampered, else 0  |
| SYS_PROP_ATTACK_STATUS_CODE | =513|  read-only, Tamper status code (Android only)  |
| SYS_PROP_VCL_ENCRYPTION_STATUS | =503|  read-only, VCL encryption status 1: enabled, else 0  |
| SYS_PROP_VOLTAGE_ENCRYPTION_STATUS | =504|  read-only, VOLTAGE encryption status 1: enabled, else 0  |
| SYS_PROP_POSEIDON_ENCRYPTION_STATUS | =505|  read-only, POSEIDON encryption status 1: enabled, else 0  |
| SYS_PROP_NAVIGATOR_STATUS | =506|  read-only, NAVIGATOR status 1: enabled, else 0  |
| SYS_PROP_SERVICE_SWITCH_STATUS | =507|  read-only, Service switch status: 1: service switch triggered, else 0  |
| SYS_PROP_DEVICE_MODE | =508|  read-only, Device mode from deviceMode enum  |
| SYS_PROP_SYSMODE_BUTTON | =509|  write-only, Enable/disable sysmode button, 1: enable, 0: disable  |
| SYS_PROP_DEVICE_TYPE | =510|  read-only, Device type from deviceType enum  |
| SYS_PROP_VATS | =512|  read-only, VATS, 1: VATS OS 0: else  |
| SYS_PROP_UX100_ANTI_REMOVAL_SWITCH | =511|  read-only, Status of the anti-removal switch of the ux100. 1: triggered, 0: armed  |
| SYS_PROP_SLP_TAINTED_STATUS | =514|  read-only, SLP tainted status. 1: SLP tainted (NOK), 0: SLP OK  |
| SYS_PROP_UPTIME | =600|  read-only, System uptime in seconds  |
| SYS_PROP_BARCODE_SCANNER | =33|  read-only, Barcode scanner exists: 1: barcode scanner available, else 0  |
| SYS_PROP_CAMERA | =34|  read-only, Camera exists: 1: camera available, else 0  |
| SYS_PROP_SWITCH_THRESHOLD_VOLTAGE | =35|  read/write, Threshold voltage for successful switchback to HOST mode (Default: 3900000) (E285/E280 only)  |
| SYS_PROP_LOW_THRESHOLD_VOLTAGE | =36|  read/write, Low threshold voltage (Default: 3600000) (E285/E280 only)  |
| SYS_PROP_CONSOLE_STATE | =37|  read/write, Enable/disable console: 1 - console enabled; 0 - console disabled  |
| SYS_PROP_UX_MDB | 40|  read-only, If UX unit supports MDB (Multi-Drop Bus), 1: MDB is supported, else 0  |
| SYS_PROP_CARD_SLOT2_MODE | =41|  read/write, Card slot2 mode, 1: SAM1 0: SIM2 (For V210) reboot needed to apply new value  |
| SYS_PROP_CARD_SLOT_COUNT | =42|  read-only , Number of available SIM card slots  |
| SYS_PROP_KEYBOARD_TYPE | =43|  read-only, keyboard type from enum keyboardType  |
| SYS_PROP_EXT_NFC_ANTENNA | =44|  read-only, If external NFC antenna is attached 1:Antenna attached 0:Not attached  |
| SYS_PROP_VRK2_SUPPORT | =45|  read-only, Verifone Remote Keys injection version 2 support : 1 supported, 0 unsupported  |
| SYS_PROP_USB_C_CHARGING_STATE | =708|  read/write, Enable/disable USB-C port charging: 1 - enabled, 0 - disabled, <0 - error  |
| SYS_PROP_POGO_CHARGING_STATE | =709|  read/write, Enable/disable POGO port charging: 1 - enabled, 0 - disabled, <0 - error  |
| SYS_PROP_ECC_VRK_SUPPORT | =46|  read-only, Elliptic curve cryptography Verifone Remote Keyloading support : 1 supported, 0 unsupported  |
| SYS_PROP_LCD_PANEL_ID | =47|  read-only, Returns LCD panel ID (only if information is available)  |
| SYS_PROP_VRK_CERT_INSTALLED | =48|  read-only, VRK certificate is installed/available on device: 1 - true, 0 - false  |
| SYS_PROP_VRK_PACKAGING_UVRK_SUPPORT | =49|  read-only, Unified VRK packaging support, 1 - supported, 0 - unsupported  |
| SYS_PROP_POGO_DATA_STATE | =710|  read/write, Switch USB data lines between USB-C and POGO ports: 0 - USB-C, 1 - POGO  |
| SYS_PROP_ANDROID_PREFIX_LENGTH | =50|  read-only, Android network prefix length. Applicable only to Dual Chip solutions  |
| SYS_PROP_UX100_TYPE | =51|  read-only, UX1 model (0-unknown, 100-UX100, 110-UX110)  |




Integer type system properties 


### enum SYSPropertyString

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYS_PROP_HW_MODEL_NAME | =0|  read-only, Hardware model (full name), e.g. "P400 DMSR"  |
| SYS_PROP_HW_MODEL_NAME_SHORT | =54|  read-only, Short model name (without information on modifications), e.g. "P400"  |
| SYS_PROP_HW_SERIALNO | =1|  read-only, Hardware serial number  |
| SYS_PROP_OS_VERSION | =2|  read-only, OS version  |
| SYS_PROP_HW_PTID | =3|  read-only, Terminal unit identification number  |
| SYS_PROP_HW_VARIANT_NAME | =4|  read-only, Hardware variant name  |
| SYS_PROP_HW_PART_NO | =5|  read-only, Hardware part number  |
| SYS_PROP_HW_VERSION | =6|  read-only, Hardware version  |
| SYS_PROP_HW_LOT_NO | =7|  read-only, Hardware LOT number  |
| SYS_PROP_BOOT_VERSION | =8|  read-only, Boot(SBI) version  |
| SYS_PROP_TERMINAL_SPONSOR | =9|  read-only, Sponsor certificate name  |
| SYS_PROP_MANUF_DATE | =10|  read-only, manufacturing date/time in format "yyyymmddhhmmss"  |
| SYS_PROP_CERT_SPONSOR_SN | =11|  read-only, Sponsor certificate serial number  |
| SYS_PROP_CERT_SPONSOR_MODE | =12|  read-only, Sponsor certificate mode: "test" or "prod"  |
| SYS_PROP_ADK_VERSION | =14|  read-only, ADK version  |
| SYS_PROP_UX100_SERIALNO | =13|  read-only, UX100 Hardware serial number (UX100 only)  |
| SYS_PROP_UX100_PARTNO | =65|  read-only, UX100 Hardware part number (UX100 only)  |
| SYS_PROP_UX100_FW_VERSION | =15|  read-only, UX100 firmware security version (e.g. 010605)  |
| SYS_PROP_SBI_VERSION | =16|  read-only, Secure Boot Image version  |
| SYS_PROP_VAULT_VERSION | =17|  read-only, Vault version  |
| SYS_PROP_CIB_VERSION | =18|  read-only, Control Information Block version  |
| SYS_PROP_MIB_VERSION | =19|  read-only, Manufacturer Information Block version  |
| SYS_PROP_KERNEL_VERSION | =20|  read-only, Linux Kernel version  |
| SYS_PROP_RFS_VERSION | =21|  read-only, Overall RFS version  |
| SYS_PROP_RELEASE_VERSION | =22|  read-only, Build Release version  |
| SYS_PROP_RFS_SECURITY_VERSION | =23|  read-only, Application Manager version  |
| SYS_PROP_SRED_VERSION | =24|  read-only, SRED version  |
| SYS_PROP_SRED_MODE | =75|  read-omly, SRED runtime mode  |
| SYS_PROP_OPENPROTOCOL_VERSION | =25|  read-only, OpenProtocol version  |
| SYS_PROP_PCI_REBOOT_TIME | =26|  read/write, PCI 24h reboot time "hh:mm:ss"  |
| SYS_PROP_FILE_NAME_TO_INSTALL | =27|  write-only, Deprecated: please use API from [sysinstall.h](sysinstall_8h.md#file-sysinstall.h) header instead  |
| SYS_PROP_MSR_COUNTERS | =29|  read-only, MSR counters  |
| SYS_PROP_SCR_COUNTERS | =30|  read-only, SCR counters  |
| SYS_PROP_CTLS_COUNTERS | =58|  read-only, CTLS counters  |
| SYS_PROP_DOCK_STATION_SN | =31|  read-only, Docking station serial number  |
| SYS_PROP_DOCK_STATION_PN | =32|  read-only, Docking station product number  |
| SYS_PROP_DOCK_STATION_MODEL | =33|  read-only, Docking station model  |
| SYS_PROP_DOCK_STATION_MAC | =34|  read-only, Docking station MAC address  |
| SYS_PROP_DOCK_STATION_HW_REV | =35|  read-only, Docking station hardware revision  |
| SYS_PROP_DOCK_STATION_INSTALL | =36|  write-only, Deprecated: Please use API from from [sysinstall.h](sysinstall_8h.md#file-sysinstall.h) instead  |
| SYS_PROP_GSM_FIRMWARE_VERSION | =37|  read-only, GSM firmware version  |
| SYS_PROP_DOCK_STATION_OS_VERSION | =38|  read-only, Docking station OS version  |
| SYS_PROP_DOCK_STATION_IP_ADDRESS | =39|  read-only, Docking station IP V4 address corresponding to SYS_PROP_DOCK_STATION_MAC  |
| SYS_PROP_DOCK_STATION_IP_V6_ADDRESS | =51|  read-only, Docking station IP V6 address corresponding to SYS_PROP_DOCK_STATION_MAC  |
| SYS_PROP_DOCK_STATION_USB1_IP_ADDRESS | =57|  read-only, Returns usb1 local IP address for base  |
| SYS_PROP_ANDROID_IP_V4_ADDRESS | =59|  read-only, Returns Android IP V4 address. Applicable only to Dual Chip solutions  |
| SYS_PROP_ANDROID_IP_V6_ADDRESS | =66|  read-only, Returns Android IP V6 address. Applicable only to Dual Chip solutions  |
| SYS_PROP_ANDROID_MAC | =67|  read-only, Returns Android MAC address. Applicable only to Dual Chip solutions  |
| SYS_PROP_WARRANTIED_KEYS | =53|  read-only, JSON encoded information on warrantied keys (warrantied keys/missing keys)  |
| SYS_PROP_SECAPP_VERSION | =40|  read-only, Security application version  |
| SYS_PROP_VSS_VERSION | =41|  read-only, VSS version  |
| SYS_PROP_STBY_MCU_VERSION | =42|  read-only, Standby MCU firmware version  |
| SYS_PROP_EXT_STORAGE | =43|  read-only, JSON encoded information on external storage devices  |
| SYS_PROP_INSTALLED_PCKG_LIST | =28|  read-only, JSON encoded information on installed packages  |
| SYS_PROP_PKG_LIST | =28|  read-only, JSON encoded information on installed packages  |
| SYS_PROP_APP_PKG_LIST | =44|  read-only, JSON encoded information on installed application packages  |
| SYS_PROP_BUNDLE_LIST | =45|  read-only, JSON encoded information on bundles  |
| SYS_PROP_APP_BUNDLE_LIST | =49|  read-only, JSON encoded information on installed application bundles  |
| SYS_PROP_MSR_INFO | =46|  read-only, JSON encoded information on MSR card reader  |
| SYS_PROP_SCR_INFO | =47|  read-only, JSON encoded information on SCR card reader  |
| SYS_PROP_CTLS_INFO | =48|  read-only, JSON encoded information on CTLS card reader  |
| SYS_PROP_HW_STRING | =50|  read-only, Hardware description string. Screen resolution / Colored or BW / Keypad size / Touch or non touch. Example: 320x480C15T  |
| SYS_PROP_DEV_ID | =52|  read-only, Device id string e.g.: 6E00F942-C5949001-41A97FA3-2F396409-F0896835-6898E7D4-142B43B7-105FEEB0  |
| SYS_PROP_FET | =55|  read-only, JSON encoded information on Feature licenses (FET)  |
| SYS_PROP_BT_MAC | =60|  read-only, BT MAC address  |
| SYS_PROP_WIFI_MAC | =61|  read-only, WIFI MAC address  |
| SYS_PROP_ETH_MAC | =62|  read-only, ETH MAC address  |
| SYS_PROP_ETH2_MAC | =63|  read-only, ETH2 MAC address  |
| SYS_PROP_COUNTRY | =64|  read-only, Radio module country code  |
| SYS_PROP_RTC | =100|  read/write, VOS1,VOS2:system date/time VOS3:Real-Time-Clock date/time in format "yyyymmddhhmmss" (write limited to secproc_cmd group)  |
| SYS_PROP_NTP_SERVER | =101|  write-only, Network Time Protocol host name (if value is empty, pool.ntp.org is used)  |
| SYS_PROP_BATTERY_SERIALNO | =200|  read-only, Deprecated  |
| SYS_PROP_TIME_ZONE | =300|  read-only, JSON encoded information on current time zone, e.g. {"doff":"0","dst":"0","end":"0","soff":"UTC+08","start":"0","std":"CST"}  |
| SYS_PROP_TIME_ZONE_LIST | =301|  read-only, JSON encoded information on all available timezones  |
| SYS_PROP_TIME_ZONE_FROM_FILE | =302|  write-only, Set time zone using path, e.g. /usr/share/zoneinfo/US/Pacific  |
| SYS_PROP_TIME_ZONE_NAME | =304|  write-only, Set time zone using name, e.g. US/Hawaii  |
| SYS_PROP_TIME_ISO8601 | =303|  read/write, Set time according to ISO8601 standard. Format "YYYY-MM-ddTHH:mm:ss.SSSzzz", e.g. 2020-09-02T07:39:31.000+02:00  |
| SYS_PROP_REBOOT_REASON | =400|  read-only, Returns reason for last reboot  |
| SYS_PROP_ALL_LOADED_KEYS | =56|  read-only, JSON encoded information on generic, payment and warrantied keys  |
| SYS_PROP_ALL_LOADED_KEYS_V2 | =80|  read-only, JSON encoded information on all keys  |
| SYS_PROP_TAMPER_RECORDS | =68|  read-only, JSON encoded information on tamper records  |
| SYS_PROP_BARCODE_SCANNER_FW_VERSION | =69|  read-only, Barcode scanner firmware version  |
| SYS_PROP_ANDROID_VERSION | =70|  read-only, Returns JSON encoded Android version  |
| SYS_PROP_STATUSBAR_COLOR | =71|  read/write, Controls status bar background color on Android devices. Format: HTML #RRGGBB or hex 0xRRGGBB, e.g. #21618c  |
| SYS_PROP_ANDROID_TIME | =72|  read/write, Get/set time for Android side. Format "YYYY-MM-ddTHH:mm:ss"  |
| SYS_PROP_MTD_INFO | =73|  read-only, JSON encoded information about MTD partition: total/bad blocks count, images copies count  |
| SYS_PROP_HW_ID | =74|  read-only, Returns hardware ID (Only if information is available in MIB)  |
| SYS_PROP_LCD_PANEL_MODEL | =76|  read-only, Returns LCD panel model (only if information is available)  |
| SYS_PROP_DT_NAME | =77|  read-only, Returns device dt_name id string from device tree  |
| SYS_PROP_PCI_APPS | =78|  read-only, Returns list of PCI apps and versions  |
| SYS_PROP_FW_PCI_VERSION | =79|  read-only, Returns security PCI version  |
| SYS_PROP_HW_MODEL_NAME_SEC | =81|  read-only, Returns hardware security model name  |
| SYS_PROP_MOBILE_RADIO_SW_VERSION | =82|  read-only, Mobile Radio SW version ( mobile radio capable devices only )  |
| SYS_PROP_TOUCH_NAME | =83|  read-only, Touch scren name  |
| SYS_PROP_TOUCH_HW_VERSION | =84|  read-only, Touch screen HW version  |
| SYS_PROP_TOUCH_SW_VERSION | =85|  read-only, Touch screen SW version  |
| SYS_PROP_TOUCH_CONFIG_VERSION | =86|  read-only, Touch screen config version  |
| SYS_PROP_ANDROID_GATEWAY | =87|  read-only, Android Network Gateway address. Applicable only to Dual Chip solutions  |
| SYS_PROP_ANDROID_DNS1 | =88|  read-only, Android DNS1 server address. Applicable only to Dual Chip solutions  |
| SYS_PROP_ANDROID_DNS2 | =89|  read-only, Android DNS2 server address. Applicable only to Dual Chip solutions  |




String type system properties 


### typedef sysStatusbarCallback

```cpp
typedef void(* sysStatusbarCallback) (void *data, int region_id, std::map< std::string, std::string > &values);
```


**Parameters**: 

  * **data** data pointer provided by the application 
  * **region_id** ID of the GUI region, from which the statusbar callback is triggered 
  * **values** values to be passed to next [uiInvoke()](namespacevfigui.md#function-uiinvoke) call for this statusbar. The map already contains values set by [sysSetStatusbarValues()](namespacevfisysinfo.md#function-syssetstatusbarvalues). 


**Return**: true, if the statusbar should be refreshed, else no refresh is done. 

**Note**: It is not allowed to call any statusbar API functions on the same region _region_id_ from inside the callback function. All API functions will return SYS_ERR_PERMISSION in this case. 

Callback function that is called every time before the statusbar is refreshed. The statusbar is refreshed at regular intervals, which are specified by the refresh time that can be configured with function [sysSetRefreshTime()](namespacevfisysinfo.md#function-syssetrefreshtime). Application may add customized values to map _values_ that should be passed to next [uiInvoke()](namespacevfigui.md#function-uiinvoke) to refresh the statusbar. 


### typedef sysStatusbarReturnCallback

```cpp
typedef vfigui::uiAsyncCallback sysStatusbarReturnCallback;
```


**Note**: this callback function is discribed in [html/gui.h](gui_8h.md#file-gui.h) header file _if_ statusbar refersh is disabled - this sysRefresStatusBar should be called to reset callback 

Callback function which is called by gui in case as an update 



## Functions Documentation

### function ctlsLedsChangeState

```cpp
SYS_INFO_API int ctlsLedsChangeState(
    int ledMap
)
```


**Parameters**: 

  * **ledMap** 


**Return**: 0 - On success. Otherwise - error code 

**Note**: Example: status = ctlsLedsChangeState( CTLS_LED_0 | CTLS_LED_1 | CTLS_LED_2 | CTLS_LED_3 ). 

Switch on or off Contactless LEDs 


### function msrLedsChangeState

```cpp
SYS_INFO_API int msrLedsChangeState(
    int ledMap
)
```


**Parameters**: 

  * **ledMap** 


**Return**: 0 - On success. Otherwise - error code 

**Note**: Example: status = msrLedsChangeState( MSR_LED_ALL ). 

Switch on or off Magnetic Card Reader LEDs 


### function scrLedChangeState

```cpp
SYS_INFO_API int scrLedChangeState(
    int state
)
```


**Parameters**: 

  * **state** 


**Return**: 0 - On success. Otherwise - error code 

**Note**: Example: status = scrLedChangeState( SWITCH_ON ). 

Switch on or off Secure Card Reader LEDs 


### function sysLedsChangeState

```cpp
SYS_INFO_API int sysLedsChangeState(
    int ledMap
)
```


**Parameters**: 

  * **ledMap** 


**Return**: 0 - On success. Otherwise - error code 

**Note**: Example: status = sysLedsChangeState( GREEN_LED | YELLOW_LED | RED_LED ). 

Switch on or off any LEDs ( vos3 only ) 


### function msrShowRunway

```cpp
SYS_INFO_API int msrShowRunway(
    int repeatCount
)
```


**Parameters**: 

  * **repeatCount;** 0 - for infinite repeat times ( until [msrShowCancel()](namespacevfisysinfo.md#function-msrshowcancel) ) 


**Return**: 0 - On success. Otherwise - error code 

**Note**: Example: status = msrShowRunway( 5 ). 

Run the MSR LEDs runway show 


### function msrShowCancel

```cpp
SYS_INFO_API int msrShowCancel(
    void 
)
```


**Return**: 0 - On success 

Cancel the MSR LED show runway 


### function logoLedChangeState

```cpp
SYS_INFO_API int logoLedChangeState(
    int state
)
```


**Parameters**: 

  * **state** 


**Return**: 0 - On success. Otherwise - error code Example: status = logoLedChangeState( SWITCH_ON ). 

Switch on or off Logo LED 


### function setBrightness

```cpp
SYS_INFO_API int setBrightness(
    unsigned int ledMap,
    int brightness
)
```


**Parameters**: 

  * **ledMap** 
  * **Brightness** 


**Return**: 0 - On success. Otherwise - error code 

**Note**: Example: status = setBrightness( MSR_LED_0 | MSR_LED_1 | MSR_LED_2 ). 

Set LEDs brightness 


### function isBrightnessAdjustable

```cpp
SYS_INFO_API bool isBrightnessAdjustable(
    unsigned int ledId
)
```


**Parameters**: 

  * **LED** ID 


**Return**: true - brightness adjustable. false - otherwise 

**Note**: Example: status = isBrightnessAdjustable( CTLS_LED_LOGO ). 

Check if LED brightness adjustable 


### function sysStartStatusbarURL

```cpp
SYS_BAR_API int sysStartStatusbarURL(
    int region_id,
    const std::string & url,
    const std::map< std::string, std::string > & values,
    sysStatusbarCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **region_id** GUI region ID 
  * **url** string containing the URL to the GUI html file used by the statusbar 
  * **values** initial values of user defined variables used in the HTML document for the statusbar. These values will be provided in addition to automatically provided system values. 
  * **cb** optional callback function, see [sysStatusbarCallback](namespacevfisysinfo.md#typedef-sysstatusbarcallback)
  * **cbdata** data pointer passed on to the callback function 


**Return**: error code 

**Note**: The statusbar will be displayed in the provided GUI region ID. Callers have to configure the region previously. Multiple statusbars can be provided in different region IDs. The statusbar does regular updates in the background and needs to be stopped for power-saving to take effect on some platforms.

Start a statusbar for the specified region ID using a URL for the HTML document 
The following system variables are provided for use in the HTML document that describes the statusbar. The values for these system variables are automatically supplied and updated by the statusbar background task for this region ID. They can be used in the HTML document as <?var variablename ?>.

a) Date/Time variables

* sys_time : preformated time string, format: "hh:mm"
* sys_time_hour : hours, format: "00"-"23"
* sys_time_hour_monadic: hours, format: "0"-"23"
* sys_time_min : min, format: "00"-"59"
* sys_time_sec : sec, format: "00"-"60" (The range is up to 60 to allow for occasional leap seconds)
* sys_time_day : day, format: "01"-"31"
* sys_time_month : month, format: "01"-"12"
* sys_time_year : year, format: "yyyy"
* sys_time_12h : hours, format: "01"-"12"
* sys_time_12h_monadic : hours, format: "1"-"12"
* sys_time_am_pm : AM or PM designation, format: "AM" or "PM"

Please note: Date/Time variables in a statusbar have a special role, since they require an update, if the time unit changes. For this reason the statusbar is updated out of refresh intervals automatically, if a time unit is increased. Depending on time format variable the statusbar is refreshed with beginning of the next time unit as follows: 
| format variable  | time unit   |
|  -------- | -------- |
| sys_time_sec  | every second   |
| sys_time_min  | every minute   |
| sys_time  | every minute   |
| others  | every hour   |



Attention: sys_time_sec may cause a high CPU load, since the GUI server will reder region of this statusbar every second.

b) Battery information

* sys_battery_percentage : Battery Charge Percentage, format: "0"-"100", "-1" if no battery is available
* sys_battery_percentage_2: Battery Charge Percentage, format: "0%"-"100%", "" if no battery is available
* sys_battery_level : Battery Charge Level, format: "1"-"11" (or "101-111" for battery charging), "-1" if no battery available Battery Charge Level is mapped from Battery Charge Percentage as follows: 
| Percentage  | Level  | Level (battery charging)   |
|  -------- | -------- | -------- |
| above 95  | 11  | 111   |
| above 90  | 10  | 110   |
| above 80  | 9  | 109   |
| above 70  | 8  | 108   |
| above 60  | 7  | 107   |
| above 50  | 6  | 106   |
| above 40  | 5  | 105   |
| above 30  | 4  | 104   |
| above 20  | 3  | 103   |
| above 10  | 2  | 102   |
| above 5  | 1  | 101   |
| below 6  | 0  | 100   |



c) Docking Status

* sys_docking_status : Docking Status (format: "0"==undocked, "1"==docked, battery charging) 


### function sysStartStatusbarURLReturnVal

```cpp
SYS_BAR_API int sysStartStatusbarURLReturnVal(
    int region_id,
    const std::string & url,
    const std::map< std::string, std::string > & values,
    sysStatusbarCallback cb,
    void * cbdata,
    sysStatusbarReturnCallback returncb
)
```


**Parameters**: 

  * **region_id** GUI region ID 
  * **url** string containing the URL to the GUI html file used by the statusbar 
  * **values** initial values of user defined variables used in the HTML document for the statusbar. These values will be provided in addition to automatically provided system values. 
  * **cb** optional callback function, see [sysStatusbarCallback](namespacevfisysinfo.md#typedef-sysstatusbarcallback)
  * **cbdata** data pointer passed on to the callback function 
  * **returncb** optional callback function for return value, see [sysStatusbarReturnCallback](namespacevfisysinfo.md#typedef-sysstatusbarreturncallback)


**Return**: error code 

**Note**: Same as sysStartStatusbarURL but with additional callback for HTML return value 

Start a statusbar for the specified region ID using a URL for the HTML document with additional return callback 


### function sysStartStatusbar

```cpp
SYS_BAR_API int sysStartStatusbar(
    int region_id,
    const std::string & html,
    const std::map< std::string, std::string > & values,
    const std::string & resource_path =std::string(),
    sysStatusbarCallback cb =0,
    void * cbdata =0,
    sysStatusbarReturnCallback returncb =0
)
```


**Parameters**: 

  * **region_id** GUI region ID 
  * **html** string containing the HTML document used by the statusbar 
  * **values** initial values of user defined variables used in the HTML document for the statusbar. These values will be provided in addition to automatically provided system values. 
  * **resource_path** search path for resources (e.g. images) referenced by the HTML document used for statusbar. If not provided the GUI resource path set in the creating thread will be used. 
  * **cb** optional callback function, see [sysStatusbarCallback](namespacevfisysinfo.md#typedef-sysstatusbarcallback)
  * **cbdata** data pointer passed on to the callback function 
  * **cb** optional callback function for HTML return value, see [sysStatusbarReturnCallback](namespacevfisysinfo.md#typedef-sysstatusbarreturncallback)
  * **returncb** - callback to be invoked when statusbar html returns 


**Return**: error code 

**Note**: see sysStartStatusbarURL for details. 

Start a statusbar for the specified region ID providing the HTML document as a string 


### function sysStopStatusbar

```cpp
SYS_BAR_API int sysStopStatusbar(
    int region_id
)
```


**Parameters**: 

  * **region_id** GUI region ID 


**Return**: error code 

Stop statusbar display and background update for the specified region ID 


### function sysSetStatusbarValues

```cpp
SYS_BAR_API int sysSetStatusbarValues(
    int region_id,
    const std::map< std::string, std::string > & values
)
```


**Parameters**: 

  * **region_id** GUI region ID 
  * **values** updated values of user defined variables used in the HTML document for the statusbar. 


**Return**: error code 

**Note**: The statusbar will be updated immediately after this call and the new user variables will be applied. 

Set statusbar user variables 


### function sysGetStatusbarValues

```cpp
SYS_BAR_API int sysGetStatusbarValues(
    int region_id,
    std::map< std::string, std::string > & values
)
```


**Parameters**: 

  * **region_id** GUI region ID 
  * **values** current values of user defined variables used in the HTML document for the statusbar. 


**Return**: error code 

Get statusbar user variables 


### function sysSetRefreshTime

```cpp
SYS_BAR_API int sysSetRefreshTime(
    int region_id,
    int refresh_time_ms
)
```


**Parameters**: 

  * **region_id** GUI region ID 
  * **refresh_time_ms** statusbar refresh time in milliseconds 


**Return**: error code 

**Note**: The statusbar will be updated immediately after this call and the new refresh interval will be applied. The initial default for the statusbar update is 60 sec. Please note that a short refresh time may cause a high CPU load, since the GUI server will reder region of this statusbar again. A negative refresh time disables update intervals of the statusbar and application is responsible to update/refresh the statusbar contents with [sysRefreshStatusBar()](namespacevfisysinfo.md#function-sysrefreshstatusbar) or [sysSetStatusbarValues()](namespacevfisysinfo.md#function-syssetstatusbarvalues). If refresh time is set to zero - statusbar will determine refresh time using html fields 

Set refresh time of the statusbar 


### function sysGetRefreshTime

```cpp
SYS_BAR_API int sysGetRefreshTime(
    int region_id,
    int * refresh_time_ms
)
```


**Parameters**: 

  * **region_id** GUI region ID 
  * **refresh_time_ms** statusbar refresh time in milliseconds 


**Return**: error code 

Get refresh time of the statusbar 


### function sysRefreshStatusBar

```cpp
SYS_BAR_API int sysRefreshStatusBar(
    int region_id
)
```


**Parameters**: 

  * **region_id** GUI region ID 


**Return**: error code 

**Note**: The statusbar will be updated immediately after this call. 

Trigger immediate refresh of the statusbar 


### function sysStatusbar_GetVersion

```cpp
const SYS_BAR_API char * sysStatusbar_GetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of libvfisysbar 


### function sysStatusbarGetVersion

```cpp
const SYS_BAR_API char * sysStatusbarGetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of libvfisysbar 


### function sysBeepNormal

```cpp
SYS_INFO_API int sysBeepNormal(
    int volume
)
```


**Parameters**: 

  * **volume** volume in percent, value range: 0 (low) ... 50 (middle) ... 100 (high) 


**Return**: SYS_ERR_OK for success, else error code 

**Note**: Volume Beep is played with a system specified volume. 

Plays a 50 ms tone at 1245 Hz (normal beep tone) 


### function sysBeepError

```cpp
SYS_INFO_API int sysBeepError(
    int volume
)
```


**Parameters**: 

  * **volume** volume in percent, value range: 0 (low) ... 50 (middle) ... 100 (high) 


**Return**: SYS_ERR_OK for success, else error code 

**Note**: Volume Beep is played with a system specified volume. 

Plays a 100 ms tone at 880 Hz (error beep tone) 


### function sysPlaySound

```cpp
SYS_INFO_API int sysPlaySound(
    int note,
    int duration,
    int volume
)
```


**Parameters**: 

  * **note** value specifying a note listed in the table below 
  * **duration** duration of the beep in milliseconds. value range: 0 ... 5000 (max) 
  * **volume** volume in percent, value range: 0 (low) ... 50 (middle) ... 100 (high) 


**Return**: SYS_ERR_OK for success, else error code

Plays an arbitrary tone with arbitrary duration and volume. &nbsp;

 Supported values for parameter _note_
| Value  | Note  | Frequency   |
|  -------- | -------- | -------- |
| 0  | A  | 55.00   |
| 1  | A#  | 58.27   |
| 2  | B  | 61.74   |
| 3  | C  | 65.41   |
| 4  | C#  | 69.30   |
| 5  | D  | 73.42   |
| 6  | D#  | 77.78   |
| 7  | E  | 82.41   |
| 8  | F  | 87.31   |
| 9  | F#  | 92.50   |
| 10  | G  | 98.00   |
| 11  | G#  | 103.83   |
| 12  | A  | 110.00   |
| 13  | A#  | 116.54   |
| 14  | B  | 123.47   |
| 15  | C  | 130.81   |
| 16  | C#  | 138.59   |
| 17  | D  | 146.83   |
| 18  | D#  | 155.56   |
| 19  | E  | 164.81   |
| 20  | F  | 174.61   |
| 21  | F#  | 185.00   |
| 22  | G  | 196.00   |
| 23  | G#  | 207.65   |
| 24  | A  | 220.00   |
| 25  | A#  | 233.08   |
| 26  | B  | 246.94   |
| 27  | C  | 261.63   |
| 28  | C#  | 277.18   |
| 29  | D  | 293.66   |
| 30  | D#  | 311.13   |
| 31  | E  | 329.63   |
| 32  | F  | 349.23   |
| 33  | F#  | 369.99   |
| 34  | G  | 392.00   |
| 35  | G#  | 415.30   |
| 36  | A  | 440.00   |
| 37  | A#  | 466.16   |
| 38  | B  | 493.88   |
| 39  | C  | 523.25   |
| 40  | C#  | 554.37   |
| 41  | D  | 587.33   |
| 42  | D#  | 622.25   |
| 43  | E  | 659.26   |
| 44  | F  | 698.46   |
| 45  | F#  | 739.99   |
| 46  | G  | 783.99   |
| 47  | G#  | 830.61   |
| 48  | A  | 880   |
| 49  | A#  | 932   |
| 50  | B  | 988   |
| 51  | C  | 1047   |
| 52  | C#  | 1109   |
| 53  | D  | 1175   |
| 54  | D#  | 1245   |
| 55  | E  | 1319   |
| 56  | F  | 1397   |
| 57  | F#  | 1480   |
| 58  | G  | 1568   |
| 59  | G#  | 1661   |
| 60  | A  | 1760   |
| 61  | A#  | 1865   |
| 62  | B  | 1976   |
| 63  | C  | 2093   |
| 64  | C#  | 2217   |
| 65  | D  | 2349   |
| 66  | D#  | 2489   |
| 67  | E  | 2637   |
| 68  | F  | 2794   |
| 69  | F#  | 2960   |


70 | G | 3136 71 | G# | 3322 72 | A | 3520 73 | A# | 3729 74 | B | 3951 75 | C | 4186 76 | C# | 4435 77 | D | 4699 78 | D# | 4978 79 | E | 5274 80 | F | 5588 81 | F# | 5920 82 | G | 6272 83 | G# | 6645 84 | A | 7040 85 | A# | 7459 86 | B | 7902 87 | C | 8372 88 | C# | 8870 89 | D | 9397 90 | D# | 9956 91 | E | 10548 92 | F | 11175 93 | F# | 11840 94 | G | 12544 95 | G# | 13290 


### function sysPlaySoundFreq

```cpp
SYS_INFO_API int sysPlaySoundFreq(
    int frequency,
    int duration,
    int volume
)
```


**Parameters**: 

  * **frequency** in Hz, value range: 400 (min) ... 3000(max) 
  * **duration** duration of the beep in milliseconds. value range: 0 ... 5000 (max) 
  * **volume** volume in percent, value range: 0 (low) ... 50 (middle) ... 100 (high) 


**Return**: SYS_ERR_OK for success, else error code 

Plays an arbitrary frequency with arbitrary duration and volume. 


### function sysGetPropertyInt

```cpp
SYS_INFO_API int sysGetPropertyInt(
    enum SYSPropertyInt property,
    int & value
)
```


**Parameters**: 

  * **property** property to be get 
  * **value** property value 


**Return**: error code 

get int property 


### function sysGetPropertyInt

```cpp
SYS_INFO_API int sysGetPropertyInt(
    enum SYSPropertyInt property,
    int * value
)
```


**Parameters**: 

  * **property** property to be get 
  * **value** property value 


**Return**: error code 

get int property 


### function sysSetPropertyInt

```cpp
SYS_INFO_API int sysSetPropertyInt(
    enum SYSPropertyInt property,
    int value
)
```


**Parameters**: 

  * **property** property to be set 
  * **value** property value 


**Return**: error code 

set int property 


### function sysGetPropertyString

```cpp
SYS_INFO_API int sysGetPropertyString(
    enum SYSPropertyString property,
    char * value,
    int len
)
```


**Parameters**: 

  * **property** property to be get 
  * **value** current value 
  * **len** size of output buffer _value_ in bytes 


**Return**: error code 

get string property 


### function sysSetPropertyString

```cpp
SYS_INFO_API int sysSetPropertyString(
    enum SYSPropertyString property,
    const char * value
)
```


**Parameters**: 

  * **property** property to be set 
  * **value** new value, C-string 


**Return**: error code 

set string property 


### function sysGetPropertyString

```cpp
SYS_INFO_API int sysGetPropertyString(
    enum SYSPropertyString property,
    std::string & value
)
```


**Parameters**: 

  * **property** property to be get 
  * **value** current value 


**Return**: error code 

get string property 


### function sysSetPropertyString

```cpp
SYS_INFO_API int sysSetPropertyString(
    enum SYSPropertyString property,
    const std::string & value
)
```


**Parameters**: 

  * **property** property to be set 
  * **value** new value 


**Return**: error code 

set string property 


### function sysInfo_GetVersion

```cpp
const SYS_INFO_API char * sysInfo_GetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of sysinfo daemon in ADK version string format: major.minor.patch-build, e.g. "1.2.3-4" 


### function sysLibInfo_GetVersion

```cpp
const SYS_INFO_API char * sysLibInfo_GetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of libvfisysinfo in ADK version string format: major.minor.patch-build, e.g. "1.2.3-4" 


### function sysGetVersion

```cpp
const SYS_INFO_API char * sysGetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of libvfisysinfo in ADK version string format: major.minor.patch-build, e.g. "1.2.3-4" 


### function sysReboot

```cpp
SYS_INFO_API int sysReboot()
```


**Return**: 

  * error code
  * error code 


Reboot terminal 
reboot terminal 


### function sysSleep

```cpp
SYS_INFO_API int sysSleep()
```


**Return**: error code 

Puts terminal in sleep mode 


### function sysDeepSleep

```cpp
SYS_INFO_API int sysDeepSleep()
```


**Return**: 

  * error code
  * error code 


Puts terminal in deep sleep mode 
Puts terminal in deep slee mode 


### function sysHibernate

```cpp
SYS_INFO_API int sysHibernate()
```


**Return**: error code 

Puts terminal in hibernate mode 


### function sysShutdown

```cpp
SYS_INFO_API int sysShutdown()
```


**Return**: error code 

Shut down terminal 


### function sysRebootDock

```cpp
SYS_INFO_API int sysRebootDock()
```


**Return**: 

  * error code
  * error code 


Reboot terminal dock station 
reboot terminal dock 


### function sysErrorMsg

```cpp
SYS_INFO_API std::string sysErrorMsg(
    enum sysError code
)
```


**Return**: Error message 

Return error code description 


### function sysErrorMessage

```cpp
const SYS_INFO_API char * sysErrorMessage(
    enum sysError code
)
```


**Return**: Error message 

Return error code description 


### function sysSDKVersion

```cpp
inline const char * sysSDKVersion()
```


Deprecated 


### function Dsp2Hex

```cpp
SYS_INFO_API void Dsp2Hex(
    char * dsp,
    long * hex,
    unsigned int n
)
```


**Parameters**: 

  * **dsp** The input in dsp consists of 2 × n characters, one per hex digit. If dsp contains invalid hex digits, the result is undefined. 
  * **hex** The output in hex is n bytes. 
  * **n** of bytes to convert. 


**Return**: void 

**Note**: 

  * dsp and hex should not overlap. 
  * Hex digits in the input can be either upper or lowercase. 


Converts ASCII hexadecimal data to binary. 


### function sysPutEnv

```cpp
SYS_INFO_API int sysPutEnv(
    const std::string & section,
    const std::string & label,
    const std::string & value
)
```


**Parameters**: 

  * **section** 
  * **label** 
  * **value** 


**Return**: 

Stores value in system ini file 


### function sysGetEnv

```cpp
SYS_INFO_API int sysGetEnv(
    const std::string & section,
    const std::string & label,
    std::string & value
)
```


**Parameters**: 

  * **section** 
  * **label** 
  * **value** 


**Return**: 

Retrieves value in system ini file 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
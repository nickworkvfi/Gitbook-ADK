---
title: vfisyspm

---

# vfisyspm

**Module:** **[management functions](group___power.md)**

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfisyspm::vfisyspm_DateTime](structvfisyspm_1_1vfisyspm___date_time.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror)** { SYS_PM_ERR_OK =   0, SYS_PM_ERR_FAIL =  -1, SYS_PM_ERR_UNSUPPORTED =  -2, SYS_PM_ERR_UNKNOWN =  -3, SYS_PM_ERR_DAEMON_COM =  -4, SYS_PM_ERR_TIMEOUT =  -5, SYS_PM_ERR_LIBNOTIFY =  -6, SYS_PM_ERR_IPC =  -7, SYS_PM_ERR_NOT_RUNNING =  -8, SYS_PM_ERR_PARAM =  -9, SYS_PM_ERR_INIT = -10, SYS_PM_ERR_IN_CRIT_SECTION = -11, SYS_PM_ERR_POWER = -12, SYS_PM_ERR_CHARGING = -13, SYS_PM_ERR_CONFIG = -14, SYS_PM_ERR_NON_EXISTING = -15, SYS_PM_ERR_NOTIFY_SVC = -16, SYS_PM_ERR_TIMER = -17, SYS_PM_ERR_ALREADY_INIT = -18, SYS_PM_ERR_ALLOWED = -19, SYS_PM_ERR_STATE = -20, SYS_PM_ERR_LOW_LEVEL = -21, SYS_PM_ERR_WAKE_UP_IS_PENDING = -22} |
| enum| **[vfisyspmNotificationType](namespacevfisyspm.md#enum-vfisyspmnotificationtype)** { PM_NOTIFY_TYPE_NONE = 0, PM_NOTIFY_TYPE_POWER_MODE = (1 << 0), PM_NOTIFY_TYPE_DOCK_STATE = (1 << 1), PM_NOTIFY_TYPE_POWER_SOURCE = (1 << 2), PM_NOTIFY_TYPE_WAKEUP_SOURCE = (1 << 3), PM_NOTIFY_TYPE_CRITICAL_SECTION = (1 << 4), PM_NOTIFY_TYPE_PCI_REBOOT = (1 << 5), PM_NOTIFY_TYPE_POWER_BUTTON = (1 << 6), PM_NOTIFY_TYPE_LAST = (1 << 7), PM_NOTIFY_TYPE_ALL = 0xFFFF} |
| enum| **[vfisyspmTimerFlags](namespacevfisyspm.md#enum-vfisyspmtimerflags)** { PM_TIMER_NONE = 0, PM_TIMER_NO_WAKE_UP = (1 << 0)} |
| enum| **[vfisyspmChargningModes](namespacevfisyspm.md#enum-vfisyspmchargningmodes)** { PM_CHARGING_MODE_UNRESTRICTED = 1, PM_CHARGING_MODE_CAR_CHARGER = 2} |
| enum| **[vfisyspmTransitionFlags](namespacevfisyspm.md#enum-vfisyspmtransitionflags)** { PM_SUPPRESS_NONE = 0, PM_SUPPRESS_CRITICAL_SECTION = (1 << 0), PM_SUPPRESS_CHARGE_CHECK = (1 << 1), PM_SUPPRESS_BOOT_STATE = (1 << 2), PM_SYNC = (1 << 3), PM_SUPPRESS_ALL = 
        PM_SUPPRESS_CRITICAL_SECTION | PM_SUPPRESS_CHARGE_CHECK | PM_SUPPRESS_BOOT_STATE} |
| enum| **[vfisyspmCritSectionParameters](namespacevfisyspm.md#enum-vfisyspmcritsectionparameters)** { PM_CRIT_NONE = 0, PM_CRIT_SUPRESS_STANDBY = (1 << 0)} |
| enum| **[powermngtState](namespacevfisyspm.md#enum-powermngtstate)** { BOOT =-1, ACTIVE = 0, STANDBY = 1, SLEEP = 2, DEEP_SLEEP = 3, HIBERNATE = 4, OFF = 5, REBOOT = 6, LAST = 9} |
| enum| **[vfisyspmNotifications](namespacevfisyspm.md#enum-vfisyspmnotifications)** { ENTER_BOOT =                 37, ENTER_ACTIVE =                0, ENTER_STANDBY =               1, ENTER_SLEEP =                 2, ENTER_DEEP_SLEEP =           13, ENTER_HIBERNATE =            10, ENTER_SHUTDOWN =             12, ENTER_REBOOT =               11, ENTER_SYSMODE =              27, ENTER_DOCKED =                3, ENTER_UNDOCKED =              4, ENTER_BATTERY =              5, ENTER_EXTERNAL_POWER =        6, ENTER_BATTERY_NORMAL =       26, ENTER_BATTERY_FULL =          7, ENTER_BATTERY_LOW =           8, ENTER_BATTERY_CRITICAL =      9, BATTERY_FAULT =              35, BATTERY_REMOVED =            36, BUTTON_X_PRESSED =           14, BUTTON_X_RELEASED =          15, PCI_REBOOT_WARNING =         17, WAKEUP =                     16, WAKEUP_COMM =                18, WAKEUP_USB =                 19, WAKEUP_CONSOLE =             20, WAKEUP_KEY_PRESS =           21, WAKEUP_TIMER =               22, WAKEUP_EXTERNAL =            23, CRITICAL_SECTION_ENABLED =   24, CRITICAL_SECTION_DISABLED =  25, ABORT_PINPAD_ENABLE =        28, ABORT_EARLY_WAKEUP =         29, ABORT_HMAC_PROCESSING =      30, ABORT_CRITICAL_SECTION =     31, ABORT_SYSTEM_ERROR =         32, CHARGING_MODE_UNRESTRICTED = 33, CHARGING_MODE_CAR_CHARGER = 34, POWER_BUTTON_PRESSED =       37, POWER_BUTTON_RELEASED =      38} |
| typedef int | **[wakeupHandle](namespacevfisyspm.md#typedef-wakeuphandle)**  |
| typedef int | **[timerHandle](namespacevfisyspm.md#typedef-timerhandle)**  |
| typedef void(*)(const vfiipc::JSObject &json) | **[timerNotificationCallback](namespacevfisyspm.md#typedef-timernotificationcallback)**  |
| typedef void(*)(vfisyspmNotificationType type, vfisyspmNotifications notification) | **[vfisyspmCallback](namespacevfisyspm.md#typedef-vfisyspmcallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Init](namespacevfisyspm.md#function-sys-init)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Init](namespacevfisyspm.md#function-sys-init)**([vfisyspmCallback](namespacevfisyspm.md#typedef-vfisyspmcallback) cb) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Init](namespacevfisyspm.md#function-sys-init)**([vfisyspmCallback](namespacevfisyspm.md#typedef-vfisyspmcallback) cb, int typeMask) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Init](namespacevfisyspm.md#function-sys-init)**([vfisyspmCallback](namespacevfisyspm.md#typedef-vfisyspmcallback) cb, [vfisyspmNotificationType](namespacevfisyspm.md#enum-vfisyspmnotificationtype) typeMask) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Deinit](namespacevfisyspm.md#function-sys-deinit)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetNotificationCB](namespacevfisyspm.md#function-sys-setnotificationcb)**([vfisyspmCallback](namespacevfisyspm.md#typedef-vfisyspmcallback) cb, [vfisyspmNotificationType](namespacevfisyspm.md#enum-vfisyspmnotificationtype) typeMask) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetChargingMode](namespacevfisyspm.md#function-sys-setchargingmode)**([vfisyspmChargningModes](namespacevfisyspm.md#enum-vfisyspmchargningmodes) mode) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_GetChargingMode](namespacevfisyspm.md#function-sys-getchargingmode)**([vfisyspmChargningModes](namespacevfisyspm.md#enum-vfisyspmchargningmodes) & mode) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_RefreshConfig](namespacevfisyspm.md#function-sys-refreshconfig)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Active](namespacevfisyspm.md#function-sys-active)**(int flags) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Active](namespacevfisyspm.md#function-sys-active)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Standby](namespacevfisyspm.md#function-sys-standby)**(int flags) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Standby](namespacevfisyspm.md#function-sys-standby)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Sleep](namespacevfisyspm.md#function-sys-sleep)**(int flags) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Sleep](namespacevfisyspm.md#function-sys-sleep)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_DeepSleep](namespacevfisyspm.md#function-sys-deepsleep)**(int flags) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_DeepSleep](namespacevfisyspm.md#function-sys-deepsleep)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Hibernate](namespacevfisyspm.md#function-sys-hibernate)**(int flags) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Hibernate](namespacevfisyspm.md#function-sys-hibernate)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Shutdown](namespacevfisyspm.md#function-sys-shutdown)**(int flags) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Shutdown](namespacevfisyspm.md#function-sys-shutdown)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Reboot](namespacevfisyspm.md#function-sys-reboot)**(int flags) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_Reboot](namespacevfisyspm.md#function-sys-reboot)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_RebootDock](namespacevfisyspm.md#function-sys-rebootdock)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_CriticalSectionEnter](namespacevfisyspm.md#function-sys-criticalsectionenter)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_CriticalSectionEnter](namespacevfisyspm.md#function-sys-criticalsectionenter)**(int params) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_CriticalSectionExit](namespacevfisyspm.md#function-sys-criticalsectionexit)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_CriticalSectionState](namespacevfisyspm.md#function-sys-criticalsectionstate)**(bool & state) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetWakeupTime](namespacevfisyspm.md#function-sys-setwakeuptime)**(struct [vfisyspm_DateTime](structvfisyspm_1_1vfisyspm___date_time.md) * wakeupTime) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetWakeupTime](namespacevfisyspm.md#function-sys-setwakeuptime)**([wakeupHandle](namespacevfisyspm.md#typedef-wakeuphandle) & handle, const [vfisyspm_DateTime](structvfisyspm_1_1vfisyspm___date_time.md) & wakeup_time) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetWakeupTime](namespacevfisyspm.md#function-sys-setwakeuptime)**([wakeupHandle](namespacevfisyspm.md#typedef-wakeuphandle) & handle, time_t time) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetWakeupTime](namespacevfisyspm.md#function-sys-setwakeuptime)**([wakeupHandle](namespacevfisyspm.md#typedef-wakeuphandle) & handle, time_t time, [powermngtState](namespacevfisyspm.md#enum-powermngtstate) state, int flags) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetWakeupTime](namespacevfisyspm.md#function-sys-setwakeuptime)**(time_t time) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_CancelWakeupTime](namespacevfisyspm.md#function-sys-cancelwakeuptime)**(const [wakeupHandle](namespacevfisyspm.md#typedef-wakeuphandle) & handle) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_ClearWakeupTimes](namespacevfisyspm.md#function-sys-clearwakeuptimes)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetPciRebootTime](namespacevfisyspm.md#function-sys-setpcireboottime)**(struct [vfisyspm_DateTime](structvfisyspm_1_1vfisyspm___date_time.md) * rebootTime) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_GetPciRebootTime](namespacevfisyspm.md#function-sys-getpcireboottime)**(struct [vfisyspm_DateTime](structvfisyspm_1_1vfisyspm___date_time.md) * rebootTime) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_ClearPciRebootTime](namespacevfisyspm.md#function-sys-clearpcireboottime)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_GetConfig](namespacevfisyspm.md#function-sys-getconfig)**([vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & config) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetConfig](namespacevfisyspm.md#function-sys-setconfig)**(const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & config) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetTimer](namespacevfisyspm.md#function-sys-settimer)**([timerHandle](namespacevfisyspm.md#typedef-timerhandle) & handle, const [vfisyspm_DateTime](structvfisyspm_1_1vfisyspm___date_time.md) & time, const std::string & payload ="") |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetTimer](namespacevfisyspm.md#function-sys-settimer)**([timerHandle](namespacevfisyspm.md#typedef-timerhandle) & handle, const time_t time, const std::string & payload ="") |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetTimer](namespacevfisyspm.md#function-sys-settimer)**([timerHandle](namespacevfisyspm.md#typedef-timerhandle) & handle, const time_t time, const std::string & payload, [timerNotificationCallback](namespacevfisyspm.md#typedef-timernotificationcallback) cb, int flags =0) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_CancelTimer](namespacevfisyspm.md#function-sys-canceltimer)**(const [timerHandle](namespacevfisyspm.md#typedef-timerhandle) & handle) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_CancelTimers](namespacevfisyspm.md#function-sys-canceltimers)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_CancelSleep](namespacevfisyspm.md#function-sys-cancelsleep)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_SetTimerCallback](namespacevfisyspm.md#function-sys-settimercallback)**([timerNotificationCallback](namespacevfisyspm.md#typedef-timernotificationcallback) cb) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_GetRebootReason](namespacevfisyspm.md#function-sys-getrebootreason)**(std::string & reason) |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_StartSysmode](namespacevfisyspm.md#function-sys-startsysmode)**() |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_CriticalSectionList](namespacevfisyspm.md#function-sys-criticalsectionlist)**([vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & list)<br>Get list of applications currently holding critical section.  |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_GetCurrentState](namespacevfisyspm.md#function-sys-getcurrentstate)**([powermngtState](namespacevfisyspm.md#enum-powermngtstate) & state)<br>Get current PM daemon state.  |
| const [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api) char * | **[sys_GetSvcVersion](namespacevfisyspm.md#function-sys-getsvcversion)**()<br>Get vfisyspm daemon version.  |
| const [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api) char * | **[sys_GetVersion](namespacevfisyspm.md#function-sys-getversion)**()<br>Get vfisyspm library version.  |
| const [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api) char * | **[sys_StrError](namespacevfisyspm.md#function-sys-strerror)**([vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) error)<br>Get error description message.  |
| [VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)[vfisyspmError](namespacevfisyspm.md#enum-vfisyspmerror) | **[sys_ResetBatteryFaultState](namespacevfisyspm.md#function-sys-resetbatteryfaultstate)**()<br>Remove a faulty battery state.  |

## Detailed Description


Verifone Power management (vfisyspm) namespace 

## Types Documentation

### enum vfisyspmError

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYS_PM_ERR_OK |   0|  no error  |
| SYS_PM_ERR_FAIL |  -1|  generic error  |
| SYS_PM_ERR_UNSUPPORTED |  -2|  function is not supported by current platform  |
| SYS_PM_ERR_UNKNOWN |  -3|  unknown command  |
| SYS_PM_ERR_DAEMON_COM |  -4|  communication error with the power management daemon  |
| SYS_PM_ERR_TIMEOUT |  -5|  return code timeout  |
| SYS_PM_ERR_LIBNOTIFY |  -6|  can't obtain appid  |
| SYS_PM_ERR_IPC |  -7|  IPC call failed  |
| SYS_PM_ERR_NOT_RUNNING |  -8|  PM daemon is not running  |
| SYS_PM_ERR_PARAM |  -9|  incorrect parameter is passed  |
| SYS_PM_ERR_INIT | -10|  library is not initialized, run [sys_Init()](namespacevfisyspm.md#function-sys-init) |
| SYS_PM_ERR_IN_CRIT_SECTION | -11|  not allowed in critical section  |
| SYS_PM_ERR_POWER | -12|  not allowed while unit is powered  |
| SYS_PM_ERR_CHARGING | -13|  not allowed while unit is charging  |
| SYS_PM_ERR_CONFIG | -14|  disabled in current in configuration  |
| SYS_PM_ERR_NON_EXISTING | -15|  requested parameter doesn't exists  |
| SYS_PM_ERR_NOTIFY_SVC | -16|  notification service error  |
| SYS_PM_ERR_TIMER | -17|  generic timer subsystem error  |
| SYS_PM_ERR_ALREADY_INIT | -18|  library is already initialized  |
| SYS_PM_ERR_ALLOWED | -19|  operation is not allowed  |
| SYS_PM_ERR_STATE | -20|  wrong state for this operation  |
| SYS_PM_ERR_LOW_LEVEL | -21|  low level error  |
| SYS_PM_ERR_WAKE_UP_IS_PENDING | -22|  wake up is pending, low power state aborted  |




error codes returned by the functions 


### enum vfisyspmNotificationType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PM_NOTIFY_TYPE_NONE | 0|   |
| PM_NOTIFY_TYPE_POWER_MODE | (1 << 0)|   |
| PM_NOTIFY_TYPE_DOCK_STATE | (1 << 1)|   |
| PM_NOTIFY_TYPE_POWER_SOURCE | (1 << 2)|   |
| PM_NOTIFY_TYPE_WAKEUP_SOURCE | (1 << 3)|   |
| PM_NOTIFY_TYPE_CRITICAL_SECTION | (1 << 4)|   |
| PM_NOTIFY_TYPE_PCI_REBOOT | (1 << 5)|   |
| PM_NOTIFY_TYPE_POWER_BUTTON | (1 << 6)|   |
| PM_NOTIFY_TYPE_LAST | (1 << 7)|   |
| PM_NOTIFY_TYPE_ALL | 0xFFFF|   |




notification type mask 


### enum vfisyspmTimerFlags

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PM_TIMER_NONE | 0|   |
| PM_TIMER_NO_WAKE_UP | (1 << 0)|  Timer will not wake up unit  |




timer flags 


### enum vfisyspmChargningModes

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PM_CHARGING_MODE_UNRESTRICTED | 1|  Regular battery charging mode  |
| PM_CHARGING_MODE_CAR_CHARGER | 2|  Car charger mode  |




charging modes 


### enum vfisyspmTransitionFlags

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PM_SUPPRESS_NONE | 0|   |
| PM_SUPPRESS_CRITICAL_SECTION | (1 << 0)|  Ignore critical section  |
| PM_SUPPRESS_CHARGE_CHECK | (1 << 1)|  Ignore charging  |
| PM_SUPPRESS_BOOT_STATE | (1 << 2)|  Ignore boot state  |
| PM_SYNC | (1 << 3)|  Synchronous API call  |
| PM_SUPPRESS_ALL | 
        PM_SUPPRESS_CRITICAL_SECTION \| PM_SUPPRESS_CHARGE_CHECK \| PM_SUPPRESS_BOOT_STATE|  Ignore all checks  |




transition flags 


### enum vfisyspmCritSectionParameters

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PM_CRIT_NONE | 0|   |
| PM_CRIT_SUPRESS_STANDBY | (1 << 0)|  Standby is not allowed in critical section  |




critical section parameters 


### enum powermngtState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BOOT | =-1|  System is booting  |
| ACTIVE | 0|  System is in active state  |
| STANDBY | 1|  Standby mode (screen is dimmed)  |
| SLEEP | 2|  Power saving sate  |
| DEEP_SLEEP | 3|  Power saving sate  |
| HIBERNATE | 4|  Power saving sate  |
| OFF | 5|  System is going to shutdown  |
| REBOOT | 6|  System is going to reboot  |
| LAST | 9|  Placeholder  |




Possible ADK-PM states 


### enum vfisyspmNotifications

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ENTER_BOOT |                 37|  Unit entered Boot state. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ENTER_ACTIVE |                0|  Unit entered Active state. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ENTER_STANDBY |               1|  Unit entered Standby state. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ENTER_SLEEP |                 2|  Unit entered Sleep state. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ENTER_DEEP_SLEEP |           13|  Unit entered Deep Sleep state. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ENTER_HIBERNATE |            10|  Unit entered Hibernate state. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ENTER_SHUTDOWN |             12|  Unit will now shutdown. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ENTER_REBOOT |               11|  Unit will now reboot. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ENTER_SYSMODE |              27|  Sysmode is starting. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ENTER_DOCKED |                3|  Unit is docked. Type: PM_NOTIFY_TYPE_DOCK_STATE  |
| ENTER_UNDOCKED |              4|  Unit is undocked. Type: PM_NOTIFY_TYPE_DOCK_STATE  |
| ENTER_BATTERY |              5|  Unit runs on battery. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| ENTER_EXTERNAL_POWER |        6|  Unit runs on external power source. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| ENTER_BATTERY_NORMAL |       26|  Battery charge is normal. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| ENTER_BATTERY_FULL |          7|  Battery is fully charged. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| ENTER_BATTERY_LOW |           8|  Battery charge is low. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| ENTER_BATTERY_CRITICAL |      9|  Battery charge is critical. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| BATTERY_FAULT |              35|  Faulty battery detected. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| BATTERY_REMOVED |            36|  Battery was removed from device. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| BUTTON_X_PRESSED |           14|  User is pressing X key. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| BUTTON_X_RELEASED |          15|  User released X key. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| PCI_REBOOT_WARNING |         17|  Unit will reboot soon. Type: PM_NOTIFY_TYPE_PCI_REBOOT  |
| WAKEUP |                     16|  Unit is awaken from power saving state. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| WAKEUP_COMM |                18|  Unit was awaken by common wakeup-source (WiFi, BT, GPRS sync, AC line). Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE  |
| WAKEUP_USB |                 19|  Unit was awaken by USB interface. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE  |
| WAKEUP_CONSOLE |             20|  Unit was awaken by serial interface. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE  |
| WAKEUP_KEY_PRESS |           21|  Unit was awaken by keyboard interface. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE  |
| WAKEUP_TIMER |               22|  Unit was awaken by HW timer. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE  |
| WAKEUP_EXTERNAL |            23|  Unit was awaken by external power cable. Type: PM_NOTIFY_TYPE_WAKEUP_SOURCE  |
| CRITICAL_SECTION_ENABLED |   24|  Unit entered critical section. Type: PM_NOTIFY_TYPE_CRITICAL_SECTION  |
| CRITICAL_SECTION_DISABLED |  25|  Unit exited critical section. Type: PM_NOTIFY_TYPE_CRITICAL_SECTION  |
| ABORT_PINPAD_ENABLE |        28|  Abort due to secure keypad (PINPAD) enabled. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ABORT_EARLY_WAKEUP |         29|  Abort due to pending wakeup event. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ABORT_HMAC_PROCESSING |      30|  Abort due to HMAC computation in progress. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ABORT_CRITICAL_SECTION |     31|  Abort due to critical section ON. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| ABORT_SYSTEM_ERROR |         32|  Abort due to sysem error. Type: PM_NOTIFY_TYPE_POWER_MODE  |
| CHARGING_MODE_UNRESTRICTED | 33|  Regular charging mode. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| CHARGING_MODE_CAR_CHARGER | 34|  Car charger mode. Type: PM_NOTIFY_TYPE_POWER_SOURCE  |
| POWER_BUTTON_PRESSED |       37|  User is pressing Power button. Type: PM_NOTIFY_TYPE_POWER_BUTTON  |
| POWER_BUTTON_RELEASED |      38|  User released Power button. Type: PM_NOTIFY_TYPE_POWER_BUTTON  |




notifications returned by callback 


### typedef wakeupHandle

```cpp
typedef int wakeupHandle;
```


### typedef timerHandle

```cpp
typedef int timerHandle;
```


### typedef timerNotificationCallback

```cpp
typedef void(* timerNotificationCallback) (const vfiipc::JSObject &json);
```


### typedef vfisyspmCallback

```cpp
typedef void(* vfisyspmCallback) (vfisyspmNotificationType type, vfisyspmNotifications notification);
```


**Parameters**: 

  * **type** vfisyspmNotificationType of received notification 
  * **notification** vfisyspmNotifications received notification 


**Note**: All notification and observer callbacks share one thread, therefore, at most one callback can be active at the same time. 

Notify callback. The callback gets invoked when a matching notification has been sent. 



## Functions Documentation

### function sys_Init

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Init()
```


**Return**: 

  * SYS_PM_ERR_UNSUPPORTED - current platform is not supported 
  * SYS_PM_ERR_IPC - can't init IPC 
  * SYS_PM_ERR_TIMER - can't init timer thread 
  * SYS_PM_ERR_OK - success 


Library initialization function 


### function sys_Init

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Init(
    vfisyspmCallback cb
)
```


**Parameters**: 

  * **cb** notification callback 


**Return**: 

  * SYS_PM_ERR_UNSUPPORTED - current platform is not supported 
  * SYS_PM_ERR_IPC - can't init IPC 
  * SYS_PM_ERR_TIMER - can't init timer thread 
  * SYS_PM_ERR_OK - success 


Library initialization function 


### function sys_Init

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Init(
    vfisyspmCallback cb,
    int typeMask
)
```


**Parameters**: 

  * **cb** notification callback 
  * **typeMask** vfisyspmNotificationType mask, to register for specific notifications 


**Return**: 

  * SYS_PM_ERR_UNSUPPORTED - current platform is not supported 
  * SYS_PM_ERR_IPC - can't init IPC 
  * SYS_PM_ERR_TIMER - can't init timer thread 
  * SYS_PM_ERR_OK - success 


Library initialization function 


### function sys_Init

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Init(
    vfisyspmCallback cb,
    vfisyspmNotificationType typeMask
)
```


### function sys_Deinit

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Deinit()
```


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_OK - success 


Deinit library, disable notification callback 


### function sys_SetNotificationCB

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetNotificationCB(
    vfisyspmCallback cb,
    vfisyspmNotificationType typeMask
)
```


**Parameters**: 

  * **cb** notification callback 
  * **typeMask** vfisyspmNotificationType mask, to register for specific notifications 


**Return**: 

  * SYS_PM_ERR_UNSUPPORTED - current platform is not supported 
  * SYS_PM_ERR_IPC - can't init IPC 
  * SYS_PM_ERR_TIMER - can't init timer thread 
  * SYS_PM_ERR_OK - success 


Set notification callback 


### function sys_SetChargingMode

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetChargingMode(
    vfisyspmChargningModes mode
)
```


**Parameters**: 

  * **mode** charging mode from vfisyspmChargningModes enum 


**Return**: 

  * SYS_PM_ERR_UNSUPPORTED - current platform is not supported 
  * SYS_PM_ERR_IPC - can't init IPC 
  * SYS_PM_ERR_TIMER - can't init timer thread 
  * SYS_PM_ERR_OK - success 


Set charging mode 


### function sys_GetChargingMode

```cpp
VFI_SYS_PM_APIvfisyspmError sys_GetChargingMode(
    vfisyspmChargningModes & mode
)
```


**Parameters**: 

  * **mode** charging mode from vfisyspmChargningModes enum 


**Return**: 

  * SYS_PM_ERR_UNSUPPORTED - current platform is not supported 
  * SYS_PM_ERR_IPC - can't init IPC 
  * SYS_PM_ERR_TIMER - can't init timer thread 
  * SYS_PM_ERR_OK - success 


Get charging mode 


### function sys_RefreshConfig

```cpp
VFI_SYS_PM_APIvfisyspmError sys_RefreshConfig()
```


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


**Note**: if no configuration file is available on system, default values are set 

Rescans available PM configuration files and configures PM accordingly 


### function sys_Active

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Active(
    int flags
)
```


**Parameters**: 

  * **flags** - vfisyspmTransitionFlags 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Enter active mode 


### function sys_Active

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Active()
```


### function sys_Standby

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Standby(
    int flags
)
```


**Parameters**: 

  * **flags** - vfisyspmTransitionFlags 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Enter standby mode 


### function sys_Standby

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Standby()
```


### function sys_Sleep

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Sleep(
    int flags
)
```


**Parameters**: 

  * **flags** - vfisyspmTransitionFlags 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Enter sleep mode 


### function sys_Sleep

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Sleep()
```


### function sys_DeepSleep

```cpp
VFI_SYS_PM_APIvfisyspmError sys_DeepSleep(
    int flags
)
```


**Parameters**: 

  * **flags** - vfisyspmTransitionFlags 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Enter deep sleep mode 


### function sys_DeepSleep

```cpp
VFI_SYS_PM_APIvfisyspmError sys_DeepSleep()
```


### function sys_Hibernate

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Hibernate(
    int flags
)
```


**Parameters**: 

  * **flags** - vfisyspmTransitionFlags 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Enter hibernate mode 


### function sys_Hibernate

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Hibernate()
```


### function sys_Shutdown

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Shutdown(
    int flags
)
```


**Parameters**: 

  * **flags** - vfisyspmTransitionFlags 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Shut down device 


### function sys_Shutdown

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Shutdown()
```


### function sys_Reboot

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Reboot(
    int flags
)
```


**Parameters**: 

  * **flags** - vfisyspmTransitionFlags 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Reboot device 


### function sys_Reboot

```cpp
VFI_SYS_PM_APIvfisyspmError sys_Reboot()
```


### function sys_RebootDock

```cpp
VFI_SYS_PM_APIvfisyspmError sys_RebootDock()
```


**Return**: 

  * SYS_PM_ERR_UNSUPPORTED - current platform is not supported 
  * SYS_PM_ERR_NON_EXISTING - unit is not docked 
  * SYS_PM_ERR_FAIL - failure 
  * SYS_PM_ERR_OK - success 


**Note**: 

  * Can be called only if terminal is docked 
  * When dock station is rebooting or not booted yet, e.g. when calling this function twice within short time interval on VOS2, then return code might be SYS_PM_ERR_FAIL or SYS_PM_ERR_NON_EXISTING 


Reboot dock station 


### function sys_CriticalSectionEnter

```cpp
VFI_SYS_PM_APIvfisyspmError sys_CriticalSectionEnter()
```


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Enters PM critical section. Allows Standby 


### function sys_CriticalSectionEnter

```cpp
VFI_SYS_PM_APIvfisyspmError sys_CriticalSectionEnter(
    int params
)
```


**Parameters**: 

  * **params** vfisyspmCritSectionParameters bitmask 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Enters PM critical section 


### function sys_CriticalSectionExit

```cpp
VFI_SYS_PM_APIvfisyspmError sys_CriticalSectionExit()
```


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Exits PM critical section 


### function sys_CriticalSectionState

```cpp
VFI_SYS_PM_APIvfisyspmError sys_CriticalSectionState(
    bool & state
)
```


**Parameters**: 

  * **state** if critical section is active or not 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Exits PM critical section 


### function sys_SetWakeupTime

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetWakeupTime(
    struct vfisyspm_DateTime * wakeupTime
)
```


**Parameters**: 

  * ***wakeupTime** wake up time from Sleep 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Sets time to wake up from sleep 


### function sys_SetWakeupTime

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetWakeupTime(
    wakeupHandle & handle,
    const vfisyspm_DateTime & wakeup_time
)
```


**Parameters**: 

  * **handle** 
  * **wakeup_time** wake up time from Sleep 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Sets time to wake up from sleep 


### function sys_SetWakeupTime

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetWakeupTime(
    wakeupHandle & handle,
    time_t time
)
```


**Parameters**: 

  * **handle** 
  * **time** wake up time from Sleep 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Sets time to wake up from sleep 


### function sys_SetWakeupTime

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetWakeupTime(
    wakeupHandle & handle,
    time_t time,
    powermngtState state,
    int flags
)
```


**Parameters**: 

  * **handle** 
  * **time** wake up time from Sleep 
  * **state** wake up to certain state from enum powermngtState 
  * **flags** for future use 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Sets time to wake up from sleep 


### function sys_SetWakeupTime

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetWakeupTime(
    time_t time
)
```


**Parameters**: 

  * **time** wake up time from Sleep 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Sets time to wake up from sleep 


### function sys_CancelWakeupTime

```cpp
VFI_SYS_PM_APIvfisyspmError sys_CancelWakeupTime(
    const wakeupHandle & handle
)
```


**Parameters**: 

  * **handle** 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_NON_EXISTING - non existing handle 
  * SYS_PM_ERR_OK - success 


Clears wake up time list 


### function sys_ClearWakeupTimes

```cpp
VFI_SYS_PM_APIvfisyspmError sys_ClearWakeupTimes()
```


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Clears all wakeup times set by application 


### function sys_SetPciRebootTime

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetPciRebootTime(
    struct vfisyspm_DateTime * rebootTime
)
```


**Parameters**: 

  * **rebootTime** reboot time 


**Return**: 

  * SYS_PM_ERR_OK - success 
  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_UNSUPPORTED - PCI reboot is not supported by platform 


**Note**: 

  * only hour, minute and second fields will be used 
  * Terminal should be rebooted for new value to be active 


Sets precise time for 24 hour PCI reboot 


### function sys_GetPciRebootTime

```cpp
VFI_SYS_PM_APIvfisyspmError sys_GetPciRebootTime(
    struct vfisyspm_DateTime * rebootTime
)
```


**Parameters**: 

  * **rebootTime** reboot time 


**Return**: 

  * SYS_PM_ERR_OK - success 
  * SYS_PM_ERR_PARAM - invalid rebbotTime parameter 
  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_UNSUPPORTED - PCI reboot is not supported by platform 


**Note**: only hour, minute and second fields are used 

Get time for 24 hour PCI reboot 


### function sys_ClearPciRebootTime

```cpp
VFI_SYS_PM_APIvfisyspmError sys_ClearPciRebootTime()
```


**Return**: 

  * SYS_PM_ERR_OK - success 
  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_UNSUPPORTED - PCI reboot is not supported by platform 


Clears PCI reboot time 


### function sys_GetConfig

```cpp
VFI_SYS_PM_APIvfisyspmError sys_GetConfig(
    vfiipc::JSObject & config
)
```


**Parameters**: 

  * **config** json encoded PM configuration 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Returns current PM configuration 


### function sys_SetConfig

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetConfig(
    const vfiipc::JSObject & config
)
```


**Parameters**: 

  * **config** json encoded PM configuration 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


**Note**: JSON structure is similar to configuration file structure 

Sets passed configuration 


### function sys_SetTimer

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetTimer(
    timerHandle & handle,
    const vfisyspm_DateTime & time,
    const std::string & payload =""
)
```


**Parameters**: 

  * **handle** 
  * **time** 
  * **payload** 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


**Note**: timer will invoke callback set by sys_SetTimerCallback API 

Set timer for certain time 


### function sys_SetTimer

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetTimer(
    timerHandle & handle,
    const time_t time,
    const std::string & payload =""
)
```


**Parameters**: 

  * **handle** 
  * **time** 
  * **payload** 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


**Note**: timer will invoke callback set by sys_SetTimerCallback API 

Set timer for certain time 


### function sys_SetTimer

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetTimer(
    timerHandle & handle,
    const time_t time,
    const std::string & payload,
    timerNotificationCallback cb,
    int flags =0
)
```


**Parameters**: 

  * **handle** 
  * **time** 
  * **payload** 
  * **cb** 
  * **flags** 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Set timer for certain time 


### function sys_CancelTimer

```cpp
VFI_SYS_PM_APIvfisyspmError sys_CancelTimer(
    const timerHandle & handle
)
```


**Parameters**: 

  * **handle** 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_NON_EXISTING - non existing handle 
  * SYS_PM_ERR_OK - success 


Cancel set timer 


### function sys_CancelTimers

```cpp
VFI_SYS_PM_APIvfisyspmError sys_CancelTimers()
```


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


Cancel all timers set by application 


### function sys_CancelSleep

```cpp
VFI_SYS_PM_APIvfisyspmError sys_CancelSleep()
```


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_UNSUPPORTED - Functionality is not supported 
  * SYS_PM_ERR_FAIL - General error returned by OS 
  * SYS_PM_ERR_STATE - Not in low power mode state 
  * SYS_PM_ERR_OK - success 


Cancel upcoming low power mode state 


### function sys_SetTimerCallback

```cpp
VFI_SYS_PM_APIvfisyspmError sys_SetTimerCallback(
    timerNotificationCallback cb
)
```


**Parameters**: 

  * **cb** notification callback to be invoked 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


**Note**: only one default callback can be set 

Register default timer callback This callback will be invoked in timer API if no timer specific callback is set 


### function sys_GetRebootReason

```cpp
VFI_SYS_PM_APIvfisyspmError sys_GetRebootReason(
    std::string & reason
)
```


**Parameters**: 

  * **reason** reason of last reboot 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_UNSUPPORTED - Functionality is not supported 
  * SYS_PM_ERR_OK - success 


Request last reboot reason 


### function sys_StartSysmode

```cpp
VFI_SYS_PM_APIvfisyspmError sys_StartSysmode()
```


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_UNSUPPORTED - Functionality is not supported 
  * SYS_PM_ERR_OK - success 


Will start sysmode 


### function sys_CriticalSectionList

```cpp
VFI_SYS_PM_APIvfisyspmError sys_CriticalSectionList(
    vfiipc::JSObject & list
)
```

Get list of applications currently holding critical section. 

**Parameters**: 

  * **list** json encoded application list 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_OK - success 


### function sys_GetCurrentState

```cpp
VFI_SYS_PM_APIvfisyspmError sys_GetCurrentState(
    powermngtState & state
)
```

Get current PM daemon state. 

**Parameters**: 

  * **handle** 


**Return**: 

  * SYS_PM_ERR_INIT - library is not initialized 
  * SYS_PM_ERR_TIMEOUT - PM daemon is not responding 
  * SYS_PM_ERR_IPC - IPC library is not initialized 
  * SYS_PM_ERR_NOTIFY_SVC - Notification service error 
  * SYS_PM_ERR_LIBNOTIFY - Notification service error 
  * SYS_PM_ERR_NON_EXISTING - non existing handle 
  * SYS_PM_ERR_OK - success 


### function sys_GetSvcVersion

```cpp
const VFI_SYS_PM_API char * sys_GetSvcVersion()
```

Get vfisyspm daemon version. 

**Return**: 

  * "N/A" - can't obtain version 
  * daemon version 


### function sys_GetVersion

```cpp
const VFI_SYS_PM_API char * sys_GetVersion()
```

Get vfisyspm library version. 

**Return**: 

  * "N/A" - can't obtain version 
  * daemon version 


### function sys_StrError

```cpp
const VFI_SYS_PM_API char * sys_StrError(
    vfisyspmError error
)
```

Get error description message. 

**Return**: Error message 

### function sys_ResetBatteryFaultState

```cpp
VFI_SYS_PM_APIvfisyspmError sys_ResetBatteryFaultState()
```

Remove a faulty battery state. 

**Return**: SYS_PM_ERR_OK - success 

**Note**: 

  * Applications need to check for faulty battery: 
  * a) on boot - using property: SYS_PROP_BATTERY_STATUS_OK 
  * b) during runtime, using ADK PM notification PM_NOTIFY_TYPE_POWER_SOURCE with reason BATTERY_FAULT 
  * After that notify users about the faulty battery. 
  * Applications need to confirm with the user that the faulty battery got replaced. 
  * Only after confirmation the API [sys_ResetBatteryFaultState()](namespacevfisyspm.md#function-sys-resetbatteryfaultstate) can be called. 
  * After calling [sys_ResetBatteryFaultState()](namespacevfisyspm.md#function-sys-resetbatteryfaultstate) the application needs to reboot the device to let the change take effect. 
  * Applications are taking responsibility for the above handling to guarantee battery safety when bypassing or disabling the system user notifications for faulty batteries. 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
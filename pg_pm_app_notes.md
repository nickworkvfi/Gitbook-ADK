---
title: ADK PM Application Notes

---

# ADK PM Application Notes




# Introduction

This application note provides notes, tips and tricks to reduce power consumption and extend the battery life in Engage Portable and Mobile devices such as V240m, V400m, E285, E280 etc. ADK PM (Power Management) offers multiple power mode configurations that enable users to meet their power requirements.

The battery life is highly dependent on the individual use case: Power consumption optimization can be achieved by analyzing the use case and configuring properly the operating modes.

Please refer to the [ADK-PM Programmers Guide](pg_syspm_users_guide.md#page-pg-syspm-users-guide) for ADK Power Management features, behavior and configuration.


# Operating Modes

The following table lists the available operating modes, described one-by-one in the following sections.


| Operating Mode  | Communication  | Display   |
|  -------- | -------- | -------- |
| Active  | On  | On   |
| Standby  | On  | Dimmed   |
| Sleep  | On  | Dimmed   |
| Deep sleep  | On  | Off   |
| Hibernate  | Off  | Off   |



## Modes Definition


### Active



* When the device is operating in Active Mode, the system is up and running. The display is active and all the features are available.
* The Run-time CPU Idle is also active; some action on the system itself is taken run-time while it is active in order to reduce power consumption, when possible.
* Power consumption is highly dependent on the individual use case.
* System configuration also impacts the consumption, like the active communication interfaces, LCD brightness value, average CPU load, number of transactions per hour, Contactless interface On/Off etc.


### Standby



* Standby Mode consumes less power than Active Mode.
* When the device is operating in Standby Mode, it acts like the Active Mode but, in order to reduce power consumption, LCD back-light is dimmed and the brightness value is as per the configuration provided by application.
* Any user activity will be captured in order to switch back immediately to the Active Mode, restoring LCD back-light to the active value.


### Sleep



* Sleep Mode consumes less power than Standby Mode.
* When the device is operating in Sleep Mode, the system is suspended to reduce power consumption.
* LCD back-light is dimmed and the brightness value is as per the configuration provided by application.
* All the communication interfaces are kept enabled, if they were enabled before entering in Sleep Mode.
* Any enabled wake-up source can be used in order to resume the system and transit back to the Active Mode, restoring LCD back-light to the active value.
* Please refer to the ADK-SYS-PM Programmers Guide to know which wake-up sources are available and how they can be configured.
* Power consumption is highly dependent on the individual Use Case. System configuration also impacts the consumption, like the enabled communication interfaces.
* The time required by the system to resume properly will always be less than 1-2 sec.


### Deep Sleep



* Deep Sleep mode consumes less power than Sleep mode.
* When the device is operating in Deep Sleep mode, the system is suspended and the LCD back-light is switched off to reduce power consumption.
* All the communication interfaces are kept enabled, if they were enabled before entering Deep Sleep mode.
* Any enabled wake-up source can be used in order to resume the system and transit back to the Active Mode, restoring LCD back-light to the active value.
* Please see [ADK-PM Programmers Guide](pg_syspm_users_guide.md#page-pg-syspm-users-guide) to see what wake-up sources are available and how they can be configured.
* Power consumption is highly dependent on the individual Use Case. System configuration also impacts the consumption, like the enabled communication interfaces.
* The time required by the system to resume properly should always be less than 1-2 sec.


### Hibernate



* Hibernate Mode consumes less power than Deep Sleep Mode (current consumption is always around 1 mA).
* When the device is operating in Hibernate Mode, almost the entire system is switched-off to reduce power consumption at minimum.
* All the communication interfaces are switched off, if they were enabled before entering in Hibernate Mode.
* Pressing the Power-button, plugging-in the AC line or setting the Wake-up timer can be used to resume the system and transit back to the Active Mode, restoring the communication interfaces.
* The time required by the system to resume should always be less than 1-2 sec, expect for the communication interfaces (like Radio Module, WiFi, Bluetooth): since they are powered-off in Hibernate, these modules are powered-on again and the connection is automatically re-established, sometimes requiring also more than 15-20 seconds.
* Time and Power consumption spent to resume properly the system is highly dependent to the system configuration, like the communication interfaces to restore.


# Recommended Operating Modes settings

As mentioned before, the battery life is highly dependent on the individual Use Case.

For example:

* Time between transactions
* Number of receipts per transaction
* Which low power modes are enabled
* Time before low power modes are activated

Depending upon a number of factors, you might experience variations in the number of total transactions achievable in a full battery discharge cycle.

The goal of this section is to give some recommendation in order to extend battery life as much as possible.

Please refer to the [ADK-PM Programmers Guide](pg_syspm_users_guide.md#page-pg-syspm-users-guide) to known how to change PM configuration parameters, by means of the ADK configuration file.


## Update to Latest software

When possible, it is recommended to migrate to the latest available software. It's likely that power consumption optimizations have been taken into account in recent released software, other than have a more stable and reliable system, after fixing known SW defects presents in older versions.


## Avoid high CPU usage

High CPU usage increases the power consumption mainly due to following reasons:

1. The processor is not able to maintain residency in idle states (i.e. C states). The processor core can only enter an idle state if its hardware threads are idles. It cannot be achieved when CPU usage is always high.
2. Several components in the embedded system are designed to use power saving techniques to reduce power consumption when not under load (by means of run-time power management , auto-suspend, etc.).
3. Most of the Engage Mobile and portable devices scale CPU frequency automatically (double) when the CPU load is higher than 50%, increasing substantially the power consumption. (DVFS - Dynamic Voltage and Frequency Scaling - On Demand Governor)

For these reasons, you should take advantage of the recommended best practices to avoid high resource consumption in your application.

Application performance has for long been an important aspect and depends on many factors. While developing applications, you might need to monitor its performance (resource consumption or usage over a period of time) and use the performance data to identify the bottlenecks in the application. Resource consumption here implies CPU or Memory usage.


## Adjust display settings



* High display brightness reduces substantially battery time. You shouldn't need full brightness unless you are outside in direct sunlight. On Engage devices, you can adjust brightness in 12.5% steps. Each step consumes around 15 mA of current, so for example you can save 60 mA just reducing brightness from 100% to 50%.
* Enabling Standby Mode with the minimum brightness (even zero) after a few seconds of inactivity (like 5 sec, configurable), you can save an additional 45 mA (even 60 mA)
* If keeping the Display always ON is a mandatory requirement for your Use Case but it is acceptable to suspend the device after a period of inactivity (configurable), you can enable Sleep Mode. Passing from Standby Mode with minimum brightness to Sleep Mode with minimum brightness, you can save at least 80 mA (and more than 130 mA on those devices where LCD in self-refresh is supported) Since the resume time is less than 1-2 sec, the device can return to Active mode really quickly.
* If keeping the Display Mode ON while inactive is not a requirement and it is acceptable to suspend the device, you can enable Deep Sleep Mode or Hibernate Mode. Reduction of power consumption, increasing battery life, is substantial in this case, as described in the following sections of this document.

**Display****Brightness****-****configuration****file****example**

```cpp
[display]
min_backlight=1
max_backlight=100
```


## Turn-off the communication interfaces

It is recommended to turn-off all the communication interfaces that are not (or rarely) used. For example, when the Radio Module is enabled and the device is placed for prolonged time in a poor reception area, it will use more power communicating with the network operator. Better to switch off it if not in use. Switch-off also WiFi and Bluetooth modules if you don't need them.


## Enable low power modes

As described in the previous sections, Engage Mobile and portable devices offer various options for users with different power requirements, by means of Operating Modes configuration. Obviously, the longer the device is suspended, the lower the power consumption, the longer the battery life.


### Standby Mode

It is recommended to enable the Standby Mode and set the minimum acceptable brightness value, after a few seconds of inactivity (for example 5 seconds). Any user activity will be captured in order to switch back immediately to the Active Mode, restoring LCD back-light to the active value.

**Standby****Mode****-****configuration****file****example**

```cpp
[powermngt_battery]
auto=y
standby=5

[display]
min_backlight=1
```


### Sleep Mode

It is recommended to enable the Sleep Mode when all the following conditions are met:

* Display always ON is an essential requirement
* Suspend the device during inactivity is acceptable
* Wake-up the device using one of the available wake-up sources is acceptable
* Time of 1-2 seconds required to resume the system and switch back to Active Mode is acceptable

All the communication interfaces maintain the same status they had before entering in Sleep Mode and, when configured as a wake-up source, potential incoming traffic can resume the device and being processed without loosing packets. Setting the minimum display brightness in Sleep Mode, current consumption can be reduced to 40% (20% in some Mobile devices) of that one required in Active Mode with full Display brightness. You can configure after how many seconds of inactivity the device will transit to Sleep Mode (for example 15 seconds).

**Sleep****Mode:****configuration****file****example**

```cpp
[powermngt_battery]
auto=y
sleep=15

[display]
min_backlight=1
```

Please note that Verifone recommends to follow some tips in order to prevent image persistence (or image retention) on a liquid crystal (LC) display. It must be a design consideration for all developers of applications that control display content.

You can find useful information here [https://www.verifone.com/en/us/insight/preventing-image-persistence](https://www.verifone.com/en/us/insight/preventing-image-persistence)

If Sleep mode is configured and expected to maintain residency in that mode for longer than what is currently recommended as per above advisory, then you need to either wake-up and go back to the same mode or transition to next low power state - Deep Sleep or Hibernate.


### Deep Sleep Mode

It is recommended to enable the Deep Sleep Mode when all the following conditions are met:

* Display always ON is not an essential requirement
* Suspend the device during inactivity is acceptable
* Wake-up the device using one of the available wake-up sources is acceptable
* Time of 1-2 seconds required to resume the system and switch back to Active Mode is acceptable

All the communication interfaces maintain the same status they had before entering in Deep Sleep Mode and, when configured as a wake-up source, potential incoming traffic can resume the device and being processed without loosing packets. In Deep Sleep Mode, current consumption can be reduced to 10% of that one required in Active Mode with full Display brightness. You can configure after how many seconds of inactivity the device will transit to Deep Sleep Mode (for example 60 seconds).

**Deep****Sleep****Mode:****configuration****file****example**

```cpp
[powermngt_battery]
auto=y
deep_sleep=60
```


### Hibernate Mode

It is recommended to enable the Hibernate Mode when all the following conditions are met:

* Display always ON is not an essential requirement
* Suspend the device during inactivity is acceptable
* Switch-off all the communication interfaces is acceptable
* Wake-up the device by pressing the power-button, plugging-in the AC line or setting the Wake-up timer is acceptable
* Time of 1-2 seconds required to resume the system and switch back to Active Mode is acceptable
* Longer time (can be around or something more than 15-20 seconds) to power-on again the communication interfaces (like the Radio, WiFi and Bluetooth) and restore automatically the connections is acceptable. This additional time is required only if some communication interfaces were up and running before entering into Hibernate Mode and need to be restored.

In Hibernate Mode, current consumption can be reduced to around 1 mA, that is negligible, comparing to that one required in Active Mode with full Display brightness (0.5%)

It is not recommended to enable Hibernate Mode after a really short period of inactivity, when the device is intensely used (i.e. high number of transactions per hour) and some of the communication interfaces are enabled: the benefit of such a reduced current consumption is mitigated by the time and current consumption required to resume the system and restore the connections.

You can configure after how many seconds of inactivity the device will transit to Hibernate Mode (for example 600 seconds).

**Hibernate****Mode:****configuration****file****example**

```cpp
[powermngt_battery]
auto=y
hibernate=600
```


# Known issues and Limitations



* If the WiFi Access Point (to which the device is connected) is turned-off when the device itself is in Sleep Mode or Deep Sleep Mode and WiFi incoming traffic is disabled as a wake-up source, the device itself remains in low power mode but WiFi module starts to consume more current (about three times the normal value) due to background activities triggered by the WiFi firmware. The same can happen if the device itself goes out of the WiFi coverage or the device gets kicked off the network when WPA-2 group key is renewed and the terminal does not respond to this event. On most consumer routers last event usually happens every 1-2 hours. If you are aware that some of these conditions can happen in your setup, it is recommended to enable WiFi as a wake-source so that the device is able to resume and react properly to the changed conditions. WiFi filtering is supported and can be enabled to limit the number of unexpected wake-up events due to a noisy network.
* If the device receives incoming WiFi traffic when the device itself is in Sleep Mode or Deep Sleep Mode and WiFi is disabled as a wake-up source, it remains in low power mode but WiFi module starts to consume more current due to background activities triggered by the WiFi firmware. Since WiFi as a wake-up source is disabled as per default in ADK, this penalty must be taken into account. It is recommended to enable WiFi as a wake-up source, when possible. You can add WiFi custom filters if the network is noisy, trying to keep the device in low power mode.

**WiFi****as****a****wake-up****source:****configuration****file****example**

```cpp
[wakeup_sources]
wifi=y
```


# Common Use Cases


## Use Case I: Terminal always active and ready to transact immediately

In case the terminal must always be ready to make transactions and suspend mode is not an option in any case, in order to reduction the power consumption, it is recommended to:

* Adjust the display brightness setting in Active Mode. High display brightness reduces substantially battery time. You shouldn't need full brightness unless you are outside in direct sunlight. On Engage devices, you can adjust brightness in 12.5% steps. Each step consumes around 15 mA of current, so for example you can save 60 mA just reducing brightness from 100% to 50%.
* Enable Standby Mode and set the minimum acceptable brightness value, after a few seconds of inactivity (for example 5 seconds). Any user activity will be captured in order to switch back immediately to the Active Mode, restoring LCD back-light to the active value. Enabling Standby Mode with the minimum brightness (even zero) after a few seconds of inactivity (like 5 sec, configurable), you can save an additional 45 mA (even 60 mA).


## Use Case II: Light usage of the Terminal with GSM connected only when needed

In case the terminal is rarely used (like 2-3 transactions per hour) and you switch-off GSM module every-time after usage, it is recommended to:

* Enable Standby Mode and set the minimum acceptable brightness value, after a few seconds of inactivity (for example 5 seconds).
* Enable Hibernate Mode after a few minutes of inactivity (like 5 minutes or less). GSM module (like for all the other comm interfaces) is switched off and you can resume the system pressing the power-button or plugging-in the AC line. In Hibernate Mode, current consumption is reduced to around 1 mA, that is negligible, comparing to that one required in Active Mode with full Display brightness (0.5%) The time required by the system to resume should always be less than 1-2 sec, expect for the GSM communication since it is powered-on again and the connection is automatically re-established, sometimes requiring also more than 15-20 seconds (like for all the other comm interfaces).


## Use Case III: Medium usage of the Terminal with Display always ON

In case the terminal is used quite often (like 10 transactions per hour) and keeping the display ON is an essential requirement in order to give the impression that is it always ready to transact when needed, it is recommended to:

* Enable Standby Mode and set the minimum acceptable brightness value, after a few seconds of inactivity (for example 5 seconds).
* Enable Sleep Mode with minimum brightness after further for example 30 seconds or 1 minute of inactivity. Passing from Standby Mode with minimum brightness to Sleep Mode with minimum brightness, you can save at least 80 mA (and more than 130 mA on those devices where LCD in self-refresh is supported) Since the resume time is less than 1-2 sec and comm interfaces are kept enabled, the device can return to Active mode just pressing one key on the keypad (or using any other wake-up source available) and be ready to transact really quickly.
* Please note that Verifone recommends to follow some tips in order to prevent image persistence (or image retention) on a liquid crystal (LC) display. It must be a design consideration for all developers of applications that control display content. You can find useful information here [https://www.verifone.com/en/us/insight/preventing-image-persistence](https://www.verifone.com/en/us/insight/preventing-image-persistence). If Sleep mode is configured and expected to maintain residency in that mode for longer than what is currently recommended as per above advisory, then you need to either wake-up and go back to the same mode or transition to next low power state - Deep Sleep or Hibernate.


## Use Case IV: Heavy usage of the Terminal with WiFi always connected

In case the terminal is heavily used (like 20 transactions per hour), always connected using WiFi, but keeping the display ON is not an essential requirement, it is recommended to:

* Enable Standby Mode and set the minimum acceptable brightness value, after a few seconds of inactivity (for example 5 seconds).
* Enable Deep Sleep Mode after further for example 20 or 30 seconds of inactivity. In this mode, current consumption can be reduced to 10% of that one required in Active Mode with full Display brightness. Since the resume time is less than 1-2 sec and comm interfaces are kept enabled, the device can return to Active mode just pressing one key on the keypad (or using any other wake-up sources available) and be ready to transact really quickly. Please note that, as reported in the Known issues and Limitations section, If the terminal can get kicked off the the WiFi network for some reason, it is recommended to enable WiFi as a wake-up source so that the device is able to resume and react properly to the changed conditions, avoiding to consume high current while remaining in Deep Sleep Mode. In addition, if the device receives incoming WiFi traffic when the device itself is in Deep Sleep Mode and WiFi is disabled as a wake-up source, it starts to consume more current while remaining in Deep Sleep Mode. It is recommended to enable WiFi as a wake-up source, when possible. You can add WiFi custom filters if the network is noisy, trying to keep the device in low power mode.


# FAQ


## Does Deep Sleep mode turn 3G Radio OFF?

No, it doesn't.


## Does Deep Sleep mode turn WiFi OFF?

No, it doesn't.


## Does Hibernate mode turn 3G Radio OFF?

Yes, it does.


## Does Hibernate mode turn WiFi off?

Yes, it does.


## How long does it take to resume the system from Sleep Mode?

It takes 1 or 2 seconds.


## How long does it take to resume the system from Hibernate?

Display will come back in 2 or 3 seconds after resuming from Hibernate and so is most of the peripherals. Since GSM, WiFI and BT (all COMs) are powered-off in Hibernate, these modules are powered back and connection re-established which might take also more than 15-20 seconds.


## Will an application be resumed at the point it entered Hibernation?

Yes


## Is the terminal able to resume from Deep Sleep Mode automatically receiving incoming WiFi traffic?

Yes, it is. if Wifi is configured to a be wake-up source, incoming traffic can resume the device and being processed without loosing packets.


## Can the card readers be used as wake-up sources from Standby, Sleep, etc.?

No, they can't. Nowadays it is not supported by the current HW. It can be used for Standby, but just because it is not a really low power mode; only LCD back-light is dimmed.


## Will the 24-hour auto restart happen in all power states - Sleep, Deep Sleep and Hibernate?

Yes. If no timer set for wake-up, ADK will set 24 hour reboot timer as a wake-up.


# Related Documents



* [ADK-PM Programmers Guide](pg_syspm_users_guide.md#page-pg-syspm-users-guide)

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100

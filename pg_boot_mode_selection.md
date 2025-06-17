---
title: Boot Mode Selection

---

# Boot Mode Selection




# Preface

This document is for programmers and users who want to understand the functionality of system Boot Mode on Engage devices.


# Overview

On Engage devices, since ADK 4.4, the way to select boot mode has changed. Previously, to select a mode, the user had to hold the 5 key (or recessed "sysmode" button on applicable devices) down on boot up, and release it at a certain time based on a prompt printed on the serial console of the device. But this method required a connection to the serial console. The new boot mode selection described below eliminates the reliance on the serial console since some units may not have externally accessible serial ports.


# Boot mode selection on Engage (starting with ADK 4.4)

In the new procedure, you still use the 5 key (or recessed (sysmode) button), but visual feedback is provided by a LED. In the case of Engage P200/P400 line of devices, this LED is the keypad's backlight LED. It may vary on other devices. The procedure is as follows:

* Hold the 5 key (or recessed button) on boot up. At this point the LED will be switched on.
* When the LED goes off, after 8 seconds, release the 5 key (or recessed button).
* The device is now in a state of mode selection. Every few seconds the mode number will be represented by a series of LED flashes. The first LED flash is always a very short flash. This short flash will be followed by 0 or longer flashes. The number of longer flashes represents the mode that the device will boot in when the mode selection state ends. i.e. 0 long flashes = mode 0, 1 long flash = mode 1 and so on.
* To advance the modes simply press the 5 key (or recessed button) for a short period (<1.5 secs). On releasing the 5 key (or recessed button), the mode will be represented by the LED again (as explained in 3). If the 5 key (or recessed button) is not pressed the mode will be represented on the LED every 3 seconds.
* To boot the device in the current mode, hold the 5 key (or recessed button) for > 1.5 secs. The LED will turn on, and the device will boot in the selected mode, after the key is released.


## Mode List

The "Appearance" column below uses '.' for the initial short ( 50 ms) pulse and '-' for the longer (500 ms) pulse.


| Mode  | Appearance  | Behaviour   |
|  -------- | -------- | -------- |
| 0  | .  | Boot as normal (default)   |
| 1  | . -  | Boot from usb/mmc card   |
| 2  | . - -  | Force debug on   |
| 3  | . - - -  | N/A   |
| 4  | . - - - -  | Rescue Menu   |



## LED Indicator per Platform

The LED is the indicator used for boot mode selection. This LED indicator can change between different hardware variants and flashes could be seen as:

* Keypad backlight
* Screen backlight
* White bootup LED (e.g. e285)
* Top MSR LED (e.g. M400)

The LED is lit at a maximum brightness for all flashes. In some terminals, this maximum brightness may be difficult to see in strong ambient light. In such cases, shielding of the indicator may be necessary to see the flashes. The repetition of the mode indication flashes helps in these cases as different positions can be tried without fear of missing a short time window.


# Boot mode selection on Engage via Serial

To access Boot mode via Serial:

* Connect the device via COM1 to a terminal emulator like PuTTY (115200, 8N1)
* Power off the device
* Press and hold key '5' on the terminal
* Connect power cable to the device and monitor the output in the terminal window
* Message "Release key now to initiate mode selection" will be displayed on the window.
* When the key '5' is released, the message "Mode selection sequence initiated. Perform a short press to change mode. Perform a long press to boot in mode 0" is displayed on the window
* Perform a short press on '5' to change the mode, you will see that the mode number will change.
* Perform a long press on '5' to boot in the selected mode. 

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100

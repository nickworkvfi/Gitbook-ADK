---
title: Log Collection

---

# Log Collection




# Preface

This document is for programmers and users who want to know and understand how to collect system logs from V/OS and V/OS2 terminals. There is a description and instruction for every log collection method listed below.



* [Transfer Logs to USB stick]
* [System/Console Logs]
* [ADK Logs]
* [ADK-EMV Trace Collection]
* [Logs Over UDP]


# Transfer Logs to USB stick

Log transfer to USB stick is available on VOS1, VOS2, VOS3 platforms, but the instruction varies across platforms.

In all cases you need a USB stick that is formatted to FAT, and the stick should be connected to a device using an appropriate cable or port. If the terminal does not detect the USB stick, try using one not bigger than 1GB or try different brand USB stick.


## Transfer Logs from the System Mode

On VOS1, VOS2 devices logs may be collected from the System Mode:

1. Start the System Mode
2. When the Sysmode login displayed, press (CANCEL or red "X" button).
3. Select the "Transfer Logs" option.
4. Logs will be copied to the USB stick.
5. Connect USB to the laptop and copy the files.


## Transfer Logs from the MAC CP

On VOS2 and VOS3 devices logs may be collected from the MAC CP:

1. Start the MAC Desktop
2. Select:
    * VOS2: **Log Control / Transfer Logs**
    * VOS3: **Control Panel / Transfer Logs**
3. Logs will be copied to the USB stick.
4. Connect USB to the laptop and copy the files.


# System/Console Logs


## System/Console Logs - VOS1 (Ux, Mx)

You need to have Ux100 connected to Ux3xx or Ux410.


To enable console logs on the serial port of Ux3xx or Ux410 device:

1. Power off Ux device and connect it to PC using P/N 26264-0x-R cable (the same as RS232-COM1).
2. Run the terminal application and connect to the terminal using Serial port connection (115200/8-N-1).
3. Power on Ux device.
4. After approx. 0.5 seconds Ux100 beeps. As soon as You hear beep - press and hold "System Mode" button.
5. Release "System Mode" button:
    * Ux3xx: when GREEN LED is on;
    * Ux410: after 2 seconds of holding.
6. Console logs will be activated for THIS SESSION ONLY.


## System/Console Logs - VOS2 (Engage)

To enable console logs on the serial port of Engage terminals you will need to:

1. Connect a terminal to your PC and start the console application/ terminal application (Putty or similar).
2. Power off the terminal.
3. While its off – press key 5 on the terminal.
4. Without releasing key 5 – power the terminal.
5. You will see the boot mode options 0-4. Depending on the OS version these will change in a cycle or you need to change them manually by pressing key 5.
6. To boot in mode 2:
    * If modes change in cycle, release key 5 when the mode is 2.
    * If manually changing modes, press and hold key 5 when boot mode 2 is set.
7. This will enable console logs printout on the serial port for the corresponding session until the terminal is rebooted.

Above instructions mentioned logs for the corresponding session only. Alternatively, logs can be enabled permanently and only for terminals with ADC. In order to achieve it, use the **setconsole** command. 

For latest VOS2 releases - sysmode has option to permanently enable console printout. Administration -> Console state. 

For VOS2 there is an OS level package that cleans nvram flags and disables console logs. This is OS signed, pre-install package and it can be combined with VOS/ADK upgrader packages. If loaded standalone - after first reboot logs will still be printed; 2nd reboot is needed.


## System/Console Logs - VOS3 (Neo/Vegas)

To enable console logs on the serial port of VOS3 terminals you will need to:

1. Connect a terminal to your PC with USB cable.
2. Power off the terminal.
3. While its off – press red "X" key (or the "5" key) on the terminal.
4. Without releasing the key – power on the terminal. You will see the bootloader mode options.
5. Run "fastboot oem console 1" comman on PC.
6. You should see response: "(bootloader) Console: enabled"
7. Now run "fastboot reboot" to reboot the device.


# ADK Logs

Make sure ADK liblog package is installed in the terminal.

You can find information on logging in [ADK-LOGGING Programmers Guide](pg_logging_users_guide.md#page-pg-logging-users-guide). Specific logs can be collected either by loading the "ADK Component Configuration" file or by using [LCP Main Screen] (LCP), information on both options is in the same guide.


# ADK-EMV Trace Collection

To enable EMV logs, in addition to loading EMV logging package from ADK-LOGGING or enabling EMV logging via Log Control Panel (LCP), you should add this option to the EMV CT/CTLS Init API in your application:

In ADK-EMV-CTLS call [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework) with:

` #define EMV_CTLS_INIT_OPT_TRACE_ADK_LOG 0x00080000 ///< use ADK-LOG instead of callback for trace `

In ADK-EMV-CT call [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) with:

` #define EMV_CT_INIT_OPT_TRACE_ADK_LOG 0x00080000 ///< use ADK-LOG instead of callback for trace `

For the other ADK CARDS components, this is similar. Instead of configuring callbacks for the components use ADK log instead with a configuration parameter. Once configured correctly all logs will be forwarded to ADK log.


# Logs Over UDP

In VOS1 and VOS2 there is a possibility to configure logs to be sent over UDP channel (please refer to the chapter [Log Control Panel] for more details). Any application that read UDP datagrams could be used, e.g.:

* `[http://jlog514.sourceforge.net/](http://jlog514.sourceforge.net/)`
* `[http://sourceforge.net/projects/jlog514/](http://sourceforge.net/projects/jlog514/)`

It should be run from a privileged user in order to allow listening on UDP port 514. Unless absolutely necessary please use port 514, which is intended for syslog traffic.

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100

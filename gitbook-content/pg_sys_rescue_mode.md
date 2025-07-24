---
hidden: true
title: Rescue Mode
---

### Tableof Contents

- [Preface](#sec_sys_rescue_mode_preface)
- [Overview](#sec_sys_rescue_mode_overview)
- [Entering Rescue Mode](#sec_sys_rescue_mode_entering_rescue_mode)
- [Rescue Mode Menu](#sec_sys_rescue_mode_rescue_menus)
  - [1.Rescue Method](#subsec_sys_rescue_mode_1)
  - [2.Configuration](#subsec_sys_rescue_mode_2)
  - [3.Recovery](#subsec_sys_rescue_mode_3)
  - [4.Reboot](#subsec_sys_rescue_mode_4)
  - [Using Rescue Menu on Engage](#subsec_sys_using_rescue_menu)

# Preface <a href="#sec_sys_rescue_mode_preface" id="sec_sys_rescue_mode_preface"></a>

This document is for programmers and users who want to understand the functionality of system recovery using Rescue Mode.

# Overview <a href="#sec_sys_rescue_mode_overview" id="sec_sys_rescue_mode_overview"></a>

The content of the Rescue menu is the same on all devices and is not dependent on S/W stack installed on the device.

The navigation in the Rescue mode is performed with the numeric keypad by selecting the desired number. For example, to enter into the \"1.Rescue Method\" menu, need to press key \"1\".

According to security requirements, access to the Rescue menu can be protected by supervisor password.

# Entering Rescue Mode <a href="#sec_sys_rescue_mode_entering_rescue_mode" id="sec_sys_rescue_mode_entering_rescue_mode"></a>

- For Engage devices the procedure, how to enter Rescue mode according to the device model, described here: <a href="pg_boot_mode_selection.md">Boot Mode Selection</a>.
- For Ux300 devices:
  - Rebooting into rescue:
    - Button press method
      1.  Press and hold SYSMODE button.
      2.  Power on UX3xx.
      3.  Release SYSMODE button when UX3xx RED LED is on.
    - Sysmode menu method
      1.  Authorize into sysmode supervisor
      2.  Sysmode: Exit -\> Reboot to mode -\> Rescue
  - Wait for Rescue Menu startup (10-15 seconds)
  - Rescue auth and navigating:
    - For ADK 4.4 or device without ux100 connected, rescue is running through the serial port:
      1.  Connect UX3xx to PC by standard serial cable (e.g., P/N 26264-01-R)
      2.  Start terminal application on PC (115200, 8N1)
      3.  Press enter key in the terminal application
      4.  Follow prompt instructions in terminal
    - In other case, rescue menu is available though ux100:
      1.  Follow prompt instructions on ux100

# Rescue Mode Menu <a href="#sec_sys_rescue_mode_rescue_menus" id="sec_sys_rescue_mode_rescue_menus"></a>

Following menus are available when the Rescue Mode application is running:

[1.Rescue Method](#subsec_sys_rescue_mode_1)

[2.Configuration](#subsec_sys_rescue_mode_2)

[3.Recovery](#subsec_sys_rescue_mode_3)

[4.Reboot](#subsec_sys_rescue_mode_4)

The content of 2nd and 3rd menus is dependent on the value selected at the 1st step.

## 1.Rescue Method <a href="#subsec_sys_rescue_mode_1" id="subsec_sys_rescue_mode_1"></a>

This menu item provides 3 sub-menu items:

| Item | Description |
|----|----|
| <p>1.Network</p> | <p>If selected then the network will be used for recovery</p> |
| <p>2.Serial</p> | <p>If selected then the COM port will be used for recovery</p> |
| <p>3.USB Memory</p> | <p>If selected then a USB flash will be used for recovery. The terminal loads kernel modules required for USB support and mounts USB Memory Stick.</p> |

## 2.Configuration <a href="#subsec_sys_rescue_mode_2" id="subsec_sys_rescue_mode_2"></a>

The content is dependent on the value selected at the 1st step.

If the Network method was selected in the 1st step then menu content is as follows:

| Item | Description |
|----|----|
| <p>1.DHCP</p> | <p>If selected, then the system is checking the cable connection and if everything OK, shows the message \"Network started\".</p> |
| <p>2.Static</p> | <p>If selected then an IP address should be entered manually (the static IP address of the device). And the local network mask also should be entered manually.</p> |

If the Serial method was selected at the 1st step then menu content is as follows:

| Item | Description |
|----|----|
| <p>1.COM1</p> | <p>If selected then COM1 port will be used</p> |
| <p>2.COM2</p> | <p>If selected then COM2 port will be used</p> |

If the USB method was selected in the 1st step then this operation is not performed.

## 3.Recovery <a href="#subsec_sys_rescue_mode_3" id="subsec_sys_rescue_mode_3"></a>

The content is dependent on the value selected at the 1st step.

If the Network method was selected in the 1st step then menu content is as follows:

| Item | Description |
|----|----|
| <p>1.Start NetLdr</p> | <p>If selected then NetLoader will be started</p> |
| <p>2.Start TFTP Dmn</p> | <p>If selected then TFTP daemon will be started</p> |

If the Serial method was selected at the 1st step then the terminal starts Serial Communication Loader (ComLdr). The ComLdr is using Zontalk protocol to download file. The host can use DDL or LDL utilities to load files.

If the USB method was selected in the 1st step then menu content is as follows:

| Item | Description |
|----|----|
| <p>OK - install</p> | <p>If selected then the selected file will be installed on device</p> |
| <p>CLR - next file</p> | <p>Select if need to navigate to the next file</p> |

The Rescue Menu scans the USB Memory Stick for available updates. The update file name should correspond to the following format: `dl.*release*.tgz`.

{% hint style="info" %}
VOS doesn\'t support the USB recovery method.
{% endhint %}

## 4.Reboot <a href="#subsec_sys_rescue_mode_4" id="subsec_sys_rescue_mode_4"></a>

Reboots a device.

## Using Rescue Menu on Engage <a href="#subsec_sys_using_rescue_menu" id="subsec_sys_using_rescue_menu"></a>

{% hint style="info" %}
Options may slightly differ depending on the version of the Rescue Menu and also based on if Netloader support is present or not.
{% endhint %}

**Step 1: Configure the network**

Once the main menu becomes available, the first and foremost thing to do is to configure the network. To configure the network, press option \'1\' on the keypad. This brings you to the sub-menu where the network can be configured via DHCP, option \'1\' or statically, option \'2\'. Follow the menu options to finish network configuration. If successfully configured, the IP address will be displayed at the bottom of the menu. Ping to confirm that the device is connected to the network. Make sure the network cable stays physically connected throughout the download of the file.

**Step 2: Start the File server**

Main menu will be back on the screen. Press menu option \'2\' to start the Netloader server or option \'3\' to start the TFTP server. \'NetLdr Started\' or \'TFTP Svr Started\' will be displayed if the respective servers are successfully started. Or \'NetLdr Running\' or \'TFTP Svr Running\' will be displayed if they are already running. If failed to start the servers for any reason, \'Netldr Failed\' or \'TFTP Svr Failed\' will be displayed respectively.

**Step 3: Download the file**

From the host machine where the download file exists, start the TFTP client or the Netloader client based on which server is started on the device from Step 2. Download the file to be installed. If successfully downloaded, \"Downld Complete!\" message will be displayed on the screen.

{% hint style="info" %}
There is a filtering on the name of the tgz file. The file must be of the form \"dl.release\*.tgz\".
{% endhint %}

**Step 4: Install the downloaded file**

To install the downloaded file, choose option \'4\' from the main menu to reboot the device. On reboot, Secure Installer attempts to install the downloaded file.

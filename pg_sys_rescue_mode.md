---
title: Rescue Mode
---

# Rescue Mode

# Preface

This document is for programmers and users who want to understand the functionality of system recovery using Rescue Mode.

# Overview

The content of the Rescue menu is the same on all devices and is not dependent on S/W stack installed on the device.

The navigation in the Rescue mode is performed with the numeric keypad by selecting the desired number. For example, to enter into the "1.Rescue Method" menu, need to press key "1".

According to security requirements, access to the Rescue menu can be protected by supervisor password.

# Entering Rescue Mode

- For Engage devices the procedure, how to enter Rescue mode according to the device model, described here: [Boot Mode Selection](pg_boot_mode_selection.md).
- For Ux300 devices:
  - Rebooting into rescue:
    - Button press method
      - Press and hold SYSMODE button.
      - Power on UX3xx.
      - Release SYSMODE button when UX3xx RED LED is on.
    - Sysmode menu method
      - Authorize into sysmode supervisor
      - Sysmode: Exit -> Reboot to mode -> Rescue
  - Wait for Rescue Menu startup (10-15 seconds)
  - Rescue auth and navigating:
    - For ADK 4.4 or device without ux100 connected, rescue is running through the serial port:
      - Connect UX3xx to PC by standard serial cable (e.g., P/N 26264-01-R)
      - Start terminal application on PC (115200, 8N1)
      - Press enter key in the terminal application
      - Follow prompt instructions in terminal
    - In other case, rescue menu is available though ux100:
      - Follow prompt instructions on ux100

# Rescue Mode Menu

Following menus are available when the Rescue Mode application is running:

[1.Rescue Method]

[2.Configuration]

[3.Recovery]

[4.Reboot]

The content of 2nd and 3rd menus is dependent on the value selected at the 1st step.

## 1.Rescue Method

This menu item provides 3 sub-menu items:
| Item | Description |
| -------- | -------- |
| 1.Network | If selected then the network will be used for recovery |
| 2.Serial | If selected then the COM port will be used for recovery |
| 3.USB Memory | If selected then a USB flash will be used for recovery. The terminal loads kernel modules required for USB support and mounts USB Memory Stick. |

## 2.Configuration

The content is dependent on the value selected at the 1st step.

If the Network method was selected in the 1st step then menu content is as follows:
| Item | Description |
| -------- | -------- |
| 1.DHCP | If selected, then the system is checking the cable connection and if everything OK, shows the message "Network started". |
| 2.Static | If selected then an IP address should be entered manually (the static IP address of the device). And the local network mask also should be entered manually. |

If the Serial method was selected at the 1st step then menu content is as follows:
| Item | Description |
| -------- | -------- |
| 1.COM1 | If selected then COM1 port will be used |
| 2.COM2 | If selected then COM2 port will be used |

If the USB method was selected in the 1st step then this operation is not performed.

## 3.Recovery

The content is dependent on the value selected at the 1st step.

If the Network method was selected in the 1st step then menu content is as follows:
| Item | Description |
| -------- | -------- |
| 1.Start NetLdr | If selected then NetLoader will be started |
| 2.Start TFTP Dmn | If selected then TFTP daemon will be started |

If the Serial method was selected at the 1st step then the terminal starts Serial Communication Loader (ComLdr). The ComLdr is using Zontalk protocol to download file. The host can use DDL or LDL utilities to load files.

If the USB method was selected in the 1st step then menu content is as follows:
| Item | Description |
| -------- | -------- |
| OK - install | If selected then the selected file will be installed on device |
| CLR - next file | Select if need to navigate to the next file |

The Rescue Menu scans the USB Memory Stick for available updates. The update file name should correspond to the following format: `dl.*release*.tgz`.

VOS doesn't support the USB recovery method.

## 4.Reboot

Reboots a device.

## Using Rescue Menu on Engage

Options may slightly differ depending on the version of the Rescue Menu and also based on if Netloader support is present or not.

**Step 1: Configure the network**

Once the main menu becomes available, the first and foremost thing to do is to configure the network. To configure the network, press option '1' on the keypad. This brings you to the sub-menu where the network can be configured via DHCP, option '1' or statically, option '2'. Follow the menu options to finish network configuration. If successfully configured, the IP address will be displayed at the bottom of the menu. Ping to confirm that the device is connected to the network. Make sure the network cable stays physically connected throughout the download of the file.

**Step 2: Start the File server**

Main menu will be back on the screen. Press menu option '2' to start the Netloader server or option '3' to start the TFTP server. 'NetLdr Started' or 'TFTP Svr Started' will be displayed if the respective servers are successfully started. Or 'NetLdr Running' or 'TFTP Svr Running' will be displayed if they are already running. If failed to start the servers for any reason, 'Netldr Failed' or 'TFTP Svr Failed' will be displayed respectively.

**Step 3: Download the file**

From the host machine where the download file exists, start the TFTP client or the Netloader client based on which server is started on the device from Step 2. Download the file to be installed. If successfully downloaded, "Downld Complete!" message will be displayed on the screen. There is a filtering on the name of the tgz file. The file must be of the form "dl.release\*.tgz".

**Step 4: Install the downloaded file**

To install the downloaded file, choose option '4' from the main menu to reboot the device. On reboot, Secure Installer attempts to install the downloaded file.

---

Updated on 2025-06-17 at 11:52:27 +0100

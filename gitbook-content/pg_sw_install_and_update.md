---
hidden: true
title: Software Install and Update
---

### Tableof Contents

- [Preface](#sec_sw_install_preface)
- [Overview](#sec_sw_install_overview)
- [Local SW Loading - System Mode](#sec_sw_install_local_sysmode)
- [Local SW Loading - MAC Control Panel](#sec_sw_install_local_mac_cp)
- [Local SW Loading - Mx800 Downloader](#sec_sw_install_local_mx800)
- [Local SW Loading - Serial at Bootup](#sec_sw_install_local_serial_at_bootup)
- [Remote SW Loading](#sec_sw_install_remote)
- [SW Loading on Android Device](#sec_sw_install_android)
- [Radio Firmware Update](#sec_sw_radio_fw_update)
  - [Using Sysmode to Check Radio FW Status](#subsec_sw_radio_fw_update_using_sysmode)
- [Secure processor software update (VOS3 only)](#sec_sw_secproc_update)
  - [Checking the software version of the secure processor](#sec_sw_secproc_update_info)
- [VOS3 Coms firmware updates](#sec_sw_nonhlos_update)

# Preface <a href="#sec_sw_install_preface" id="sec_sw_install_preface"></a>

This document is for programmers and developers who want to understand how to install and update a software on POS terminals.

# Overview <a href="#sec_sw_install_overview" id="sec_sw_install_overview"></a>

Downloads require moving the application and/or application data files from a remote computer to the terminal. In the device application development, application files are downloaded from a development PC directly to the terminal. In the field, application files must be transferred from the device's controlling device (ECR, LAN controller, and so on) to the terminal.

The installation of files on the device is managed by the Secure Installer (SI). The SI is responsible for authentication and installation of applications and operating system components. It follows a well-defined specification requiring bundles and packages. The detailed information about available download files can be found in <a href="pg_all_packages.md">ADK Packaging Structure</a>. Also note that the device SDK includes a tool called the <a href="pg_package_manager.md">Package Manager</a> to aid developers and deployment personal create and maintain bundles and packages.

To load a package to production device, the package needs to be production signed (please refer to <a href="pg_package_signing.md">Package Signing</a>).

### Warning

Observe install flags (reboot/restart apps) returned by the installer after every install.

A Download can be performed via the following connectivity options:

- Over Serial, using the Zontalk Protocol
- Over USB memory device (USB stick)
- Over SD Card
- Over <a href="pg_netloader_users_guide.md">Netloader</a> (that is Verifone\'s proprietary networkbased download protocol)
- Over TMS (Terminal Management System) by remote connection

The following methods are available for file and data downloads through the download and upload procedures:

- [Local SW Loading - System Mode](#sec_sw_install_local_sysmode)
- [Local SW Loading - MAC Control Panel](#sec_sw_install_local_mac_cp)
- [Local SW Loading - Mx800 Downloader](#sec_sw_install_local_mx800)
- [Local SW Loading - Serial at Bootup](#sec_sw_install_local_serial_at_bootup)
- [Remote SW Loading (VHQ, TMS)](#sec_sw_install_remote)
- [SW Loading on Android Device](#sec_sw_install_android)
- [Radio Firmware Update](#sec_sw_radio_fw_update)

# Local SW Loading - System Mode <a href="#sec_sw_install_local_sysmode" id="sec_sw_install_local_sysmode"></a>

To load a package on VOS2 terminal, go to System Mode: press 1+5+9 simulatenously:

- if no applications are present then terminal will automatically enter the system mode
- if application is present then terminal will automatically enter MAC menu. Press 1+5+9 simulatenously one more time to access System Mode.

Enter as a supervisor and navigate to **Update** menu item. In this menu there are different ways how to load a SW:

- **USB Memory**: To transfer files via USB memory device.
  - Copy the signed package into a USB flash drive.
  - Insert the USB flash drive into the USB port of the terminal.
  - Select the file to install and follow instructions on the terminal.
- **SD Card**: To transfer files via SD memory device.
- **Serial**: To start download via Serial port. The user has an option to select the port and baud rate. Selecting AUTO baud allows the serial port to cycle through the available baud rates until communication is established.
- **<a href="pg_netloader_users_guide.md">Netloader</a>**: To start the download/transfer file and to set command over IP from the PC client software, select Netloader. The IP address of the terminal will be displayed on the screen.
  - A network download client, included with the SDK, must be installed onto a PC.
  - Before the file transfer can begin, the network settings must be configured and then the transfer starts by selecting \"Netloader\" under Transfer.

{% hint style="info" %}
When a USB stick or microSD card is used for upgrade, the unit does not reboot automatically. It displays a reboot prompt, but the prompt times out, so it\'s easy to overlook.
See detailed information on how to update SW on a **Base** in the <a href="pg_engage_ffbase.md#sec_engage_ffbase_base_sw_update">Base Software Update</a> chapter.
{% endhint %}

# Local SW Loading - MAC Control Panel <a href="#sec_sw_install_local_mac_cp" id="sec_sw_install_local_mac_cp"></a>

To load a package on VOS3 terminal, go to MAC Desktop / Control Panel / Software. In the menu there are different ways how to load a SW:

- **USB stick**: To transfer files via USB memory device:
  - Copy the signed package into a USB flash drive.
  - Insert the USB flash drive into the USB port of the terminal.
  - Select the file to install and follow instructions on the terminal.
- **<a href="pg_netloader_users_guide.md">Netloader</a>**: To start the download/transfer file and to set command over IP from the PC client software, select Netloader. The IP address of the terminal will be displayed on the screen.
  - A network download client, included with the SDK, must be installed onto a PC.
  - Before the file transfer can begin, the network settings must be configured and then the transfer starts by selecting \"Netloader\" under Transfer.
- **ZonTalk**: The user has an option to select the port.

# Local SW Loading - Mx800 Downloader <a href="#sec_sw_install_local_mx800" id="sec_sw_install_local_mx800"></a>

The Mx800 Downloader utility can be used to easily download applications via Serial or Network. Mx800 Downloader utility should be installed on your PC. The Mx800 Downloader Utility is available on DevNet for download. Search for \"Mx800 Downloader\" (use the quotes).

{% hint style="info" %}
It is recommended to use Network mode instead of Serial.
{% endhint %}

Steps on how to install SW using MX800 Downloader:

- Connect the ethernet cable to the terminal.
- In the terminal, go to download mode:
  - Press 1+5+9 simultaneously to enter the system mode (note: if no applications are present then terminal will automatically enter the system mode).
  - Start Netloader on the device:
    - VOS1/VOS2: go to the System Mode, enter into Supervisor, choose Update/Netloader (the IP address of the terminal will be displayed on the screen)
    - VOS3: go to the MAC Control Panel/Software and start Netloader
- In the Mx800 Downloader in the PC, browse for the file to download to the terminal.
- In the \'Network\' tab, set the correct IP as obtained from the previous step.
- Click \<Send\> to start the download and wait for the installation to complete.

![](mx800.png)

# Local SW Loading - Serial at Bootup <a href="#sec_sw_install_local_serial_at_bootup" id="sec_sw_install_local_serial_at_bootup"></a>

This option is available and is used by Deployment technicians on an out-of-the-box Engage terminals without any manual actions (terminal should be in virgin state, just delivered from the Verifone manufacture, with no sponsor certificates loaded). Option is disabled if a sponsor certificate is loaded on the terminal.

# Remote SW Loading <a href="#sec_sw_install_remote" id="sec_sw_install_remote"></a>

If the POS terminal is connected to a Verifone terminal management service (VHQ) or other TMS, then a SW package can be downloaded remotely from this TMS. See the decription of <a href="pg_agt_users_guide.md#subsec_agt_downloads">TMS agent</a> for details.

# SW Loading on Android Device <a href="#sec_sw_install_android" id="sec_sw_install_android"></a>

To install SW on Android-based devices, the \"fastboot\", that is the Android SDK component, could be used to load a SW on a device.

# Radio Firmware Update <a href="#sec_sw_radio_fw_update" id="sec_sw_radio_fw_update"></a>

Install fwupdater package on flash. When the Radio upgrade bundle runs it writes a result stored in \"/mnt/flash/system/fw/radio_fw_update\" which contains two lines of data.
The first line contains an exit code of the update script (SEC) and the second one contains an exit code of the glinswup application if SEC = SEC_FAILURE or 0 if SEC != SEC_FAILURE.

Update script will exit showing one of the following exit codes:

| Script exit code | Description |
|----|----|
| <p>0</p> | <p>Firmware was uploaded successfully</p> |
| <p>1</p> | <p>Firmware is already up to date</p> |
| <p>2</p> | <p>Update bundle is corrupted due to missing files or wrong glinswup version</p> |
| <p>3</p> | <p>Battery capacity is too low</p> |
| <p>4</p> | <p>No communication with the module</p> |
| <p>5</p> | <p>Unable to parse product identification information (unexpected response)</p> |
| <p>6</p> | <p>Wrong model string (incompatible hardware)</p> |
| <p>7</p> | <p>Wrong hardware revision number (incompatible hardware)</p> |
| <p>8</p> | <p>Firmware update failed</p> |

{% hint style="info" %}
You can use serial console to view update progress.
{% endhint %}

## Using Sysmode to Check Radio FW Status <a href="#subsec_sw_radio_fw_update_using_sysmode" id="subsec_sw_radio_fw_update_using_sysmode"></a>

1\) Turn on the radio: Log on as supervisor and go to: `Admin -> Communication -> GSM -> Power on (button click)`.
You now get a popup if the FW version is not as expected. For example \"Using version.X and you need version.Y\" If the FW version is OK there is no pop-up.

2\) Check FW Version: Log on as supervisor and go to: `Admin -> Communication -> GSM -> Firmware version`. It will display something like \"4.003 1.000.04\"

## Using Sysmode to Check Radio FW Status <a href="#subsec_sw_radio_fw_update_using_sysmode" id="subsec_sw_radio_fw_update_using_sysmode"></a>

1\) Turn on the radio: Log on as supervisor and go to: `Admin -> Communication -> GSM -> Power on (button click)`.
You now get a popup if the FW version is not as expected. For example \"Using version.X and you need version.Y\" If the FW version is OK there is no pop-up.

2\) Check FW Version: Log on as supervisor and go to: `Admin -> Communication -> GSM -> Firmware version`. It will display something like \"4.003 1.000.04\"

# Secure processor software update (VOS3 only) <a href="#sec_sw_secproc_update" id="sec_sw_secproc_update"></a>

By default, the firmware of the secure processor is **not** changed by software updates of the main controller.
Download files of the secure processor are provided by ADK archives, but they are not automatically applied during an update, but must be managed separately, by loading the secproc download file on top of the ADK download file. Newer versions of the secure processor software can be applied on top of releases.

The secure processor software is made up of a boot loader and a main firmware.

{% hint style="info" %}
The boot loader cannot be downgraded in most cases. In this case, the installation of the firmware will still proceed
{% endhint %}

## Checking the software version of the secure processor <a href="#sec_sw_secproc_update_info" id="sec_sw_secproc_update_info"></a>

The version of the secure processor can be checked in the info and the security control panel. The version can also be retrieved from the sys interface by an application.

# VOS3 Coms firmware updates <a href="#sec_sw_nonhlos_update" id="sec_sw_nonhlos_update"></a>

VOS3 comes with several types of coms modules, which are usually **not** part fo the regular main controller download file. Neo makes mostly use of none-hlos binary files, vegas come with firware for external coms modules, but in both cases, the appropriate download files most be applied separately to the device.

---
title: VOS2 System Mode

---

# VOS2 System Mode




# Preface

This document is for programmers and users who want to understand the functionality of FLTK System Mode (also known as Sysmode or sys-mode).


# Overview

Sysmode FLTK is a System Mode GUI application and set of libraries implemented using FLTK (Fast Light Toolkit) and is available on Vx and Engage devices. The System Mode operations available on the terminal can be categorized as:

* Local operations: Addresses a stand-alone unit and do not require communication or data transfers between the unit and another terminal or computer. Perform local System Mode operations to configure, test and display the information about the terminal.
* Remote operations: Requires communication between the unit and a host computer (or another terminal) to perform remote System Mode operations to download application software to the terminal or download from the VHQ or from another download host.


# Entering System Mode

To prevent unauthorized use of System Mode menus, the terminal requires a system password each time you enter the System Mode. The device you are using may or may not have an application program running on it.

* To access the System Mode password entry screen from the Main screen, press 1, 5 and 9 keys simultaneously.
* To access the System Mode password entry screen from any application, there are two steps:
    * First press 1, 5 and 9 keys simultaneously to go back to the Home (MAC) screen. If MAC screen is protected by password (see [Appendix: Desktop]) then this password should be entered first.

    * In the Home (MAC) screen, press 1, 5 and 9 keys simultaneously to access the System Mode password entry screen.

![fltk_login.png](.//fltk_login.png)

The user can access sys-mode using passwords listed below:

* Supervisor (full access to sys-mode operations)
* Level1 (user defined capability, as a subset of Supervisor)
* Level2 (user defined capability, as a subset of Supervisor or Level1)
* Maintenance (Intended for Verifone repair, allows minimal access)

A special menu can be accessed by pressing the Cancel key:

* Reboot
* Run Apps
* Transfer Logs
* Transfer Logs to Base
* System Info
* Connect to KLD can be accessed without logging on or entering any password.

![fltk_back_login.png](.//fltk_back_login.png)

To access the System Mode first time, a default, factory-set password must be used: "166831". This factory-set password is in the pre-expired state, and after the very first log-in, user is automatically prompted to enter a new one. See detailed description of Password Management in the chapter [Password Management VOS1, VOS2](pg_password_management_vos1_vos2.md#page-pg-password-management-vos1-vos2).


# System Mode Menus

Following menus are available when the System Mode application is running:

![fltk_main_menu.png](.//fltk_main_menu.png)

Menu items can differ on different device models. For example, additional menu items like "Base Basic Information" are available only for devices that can have a base.


## Information


| Menu item  | Description   |
|  -------- | -------- |
| Basic information  | Displays general information on the unit - build, Model Name, Model ID, Serial Number, Part number, Hardware Revision, UID, SOC Revision, Vault, SRED, Open Protocol, Application Manager, SBI, UBoot, Kernel, RFS, Ethernet MAC address, BT MAC address, WiFi MAC Address   |
| Ports  | Displays the device port information   |
| Memory  | Displays flash memory and SDRAM usage   |
| Software  | List of installed software   |
| Modem  | Displays the modem information (visible on modem devices)   |
| Logs  | Displays the tamper and installation logs   |
| Counters  | Displays values hold by the terminal counters   |
| Firmware  | Displays the firmware version   |
| Base Basic Information  | Displays base basic information - build, model, serial and part numbers, etc. (visible on devices with base)   |
| Pinpad  | Displays the pinpad information (visible on devices with connected pinpad)   |



## Administration


| Menu item  | Description   |
|  -------- | -------- |
| Date/Time  | To configure Date and Time of the device, set reboot time, set timezone   |
| Communication  | To configure Ethernet, USB Gadget, Serial, Wi-Fi, Bluetooth (all bluetooth or iBeacon devices), Geolocation (all devicies without GPS), iBeacon, USB, or Mini-USB, Modem (all modem devices), GSM (devices with GPRS or 3G), GPS (devices with GPS)   |
| Remove user bundle  | To remove user bundle   |
| Power Management  | To configure power management options and view battery status. For USB Power there are 3 state values: 

 - Low power, 

 - Mid Power, 

 - High power. Refer to [ADK-PM Programmers Guide](pg_syspm_users_guide.md#page-pg-syspm-users-guide) for detailed information.   |
| Display  | To configure display brightness   |
| Language  | To configure the menu language   |
| Sound Utilities  | To configure sound   |
| Configuration Editor  | To modify the configuration parameters   |
| System Mode Time-out  | To configure the time-out period for system mode   |
| Console state  | To turn on/off the console   |
| VHQ Tools  | To configure and chech the status of VHQ connection   |
| Printer Configuration  | To configure the printer   |
| Base Config  | To configure the base (handset should be docked and paired with a base)   |



## Update


| Menu item  | Description   |
|  -------- | -------- |
| NFS  | To transfer files via NFS, select NFS. **NOTE** NFS is not available on production terminals   |
| USB Memory  | To transfer files via USB memory device   |
| SD Card  | To transfer files via SD memory device   |
| Serial  | To start download via Serial port. The user has an option to select the port and baud rate. Selecting AUTO baud allows the serial port to cycle through the available baud rates until communication is established   |
| Netloader  | Netloader is Verifone's proprietary networkbased download protocol. To start the download/transfer file and to set command over IP from the PC client software   |
| Base Netloader  | To download/transfer file to the Base via Netloader. Only available when handset is docked on base   |
| Base/Handset Netloader  | To download /transfer file to both - the handset and base. Then it gets installed on both handset and base   |



## Security


| Menu item  | Description   |
|  -------- | -------- |
| Dump Keys  | To allow user to dump keys to a storage device   |
| Key loading  | To enable key loading state. After presenting both keyload1 and keyload2 passwords, enable the key loading state that allows data to pass from a serial port to the security module for bank/ADE and VRK keys. For Bank or ADE, after presenting both keyload1 and keyload2 passwords, enable the key loading state that allows data to pass from a serial port to the security module.   |
| Tamper status  | Displays security tamper status   |
| Key Status  | To view the key status for Master Session, DUKPT, User, VRK, VSS, Feature Licenses, and ADE   |
| Password Manager  | To allow user to expire, change, and manage passwords. This option provides to Expire Users and keyload passwords and Change passwords. The "Expire password" option not only expires a password but also updates the password to the default factory value. During the next login, the system forces the user to enter the default password value as an "old" and a new password value.   |
| VeriShield tree  | List all installed VeriShield keys   |
| VSP status  | To display the VSP status   |



## Diagnostics


| Menu item  | Sub-menu item  | Description  |
|  -------- | -------- | -------- |
| **Display** | Perform display diagnostics, which attempts to display a bitmap.  |
| **Keyboard** | Display the matrix with the keys. Press a key to increase the counter number for that key value. There is no button to return to a previous menu. If no keys are pressed in 5 seconds, the diagnostic test automatically exits.  |
| **Card** | To Test the MSR, SCR, CTLS Reader.  |
| Magnetic Stripe Reader  | Swipe a magnetic-stripe card to determine if all three tracks can read the card. All tracks should display GOOD to pass the test.  |
| Smart Card Reader  | Determines the state of the smart card reader. If a card is present when the test is run, the first few bytes of the ATR is displayed. For manufacturing test purpose only.  |
| Contactless Reader  | The card details are read by placing the card over the display. On a good read, when the card is removed, TEST SUCCESS is reported.  |
| **Communications** | To perform test for the available connections  |
| Ethernet  | Displays network interface status and parameters. Sends ping to the network gateway. Also allows for a unique IP address to be pinged.  |
| GSM  | Displays network interface status and parameters. Sends ping to the network gateway. Also allows for a unique IP address to be pinged.  |
| GPS  | Tests GPS signal.  |
| Serial  | Performs a loopback test to determine the state of the Serial hardware.  |
| Wi-Fi  | Displays network interface status and parameters. Sends ping to the network gateway. Also allows for a unique IP address to be pinged.  |
| Bluetooth  | Displays Bluetooth status and paired devices. Can scan for other Bluetooth devices and make device discoverable to other devices.  |
| Modem  | Tests modem connection. Connect a phone line to the terminal and then select Modem to initialize. Enter the phone number when prompted. The modem then dials the specified number. Press enter to cancel.  |
| USB  | For USB searches and tests for inserted USB key in host port.  |
| IPV6  | Tests network connection  |
| Syslog  | Displays current level of syslogs with possibility to change from the dropdown.  |
| **Touch Panel** | Perform touch panel diagnostics of touch and signature response.  |
| **Printer** | Printer  | Perform diagnostics for the printer. It prints the numbers 123456789012345678901234, and then a black square.  |
| **Buzzer/Audio** | Perform diagnostic for buzzer and speaker. Speaker test only available on devices with codec.  |
| **LEDs** | <LEDs  | Perform diagnostics for the Bootup LED and keypad LED.  |
| **Battery** | To perform test for the battery. This menu is available on all devices that support Battery.  |
| Status  | Battery actual status.  |
| Health  | Battery health ("Not available", "Calculating..." or "XX%"), temperature and calibration data.  |
| **Temperature** | To perform test for the temperature.  |
| **Power Management** | To perform test for the power management.  |
| **Debug Mode** | Used to set a debug mode for more detailed logging.  |



## Manufacturing


| Menu item  | Description   |
|  -------- | -------- |
| Load MIB  | Used in manufacturing to load MIB into device   |



## Exit


| Menu item  | Description   |
|  -------- | -------- |
| Reboot  | Restart the device   |
| Reboot to mode  | Restart the device into special boot mode: re-flash or rescue-menu   |
| Logout  | Return to the log in menu   |
| Power-off  | Power-off the unit   |



## Run Applications

This menu item will start user applications if they are present on the terminal.


# Wi-Fi Configuration

To configure Wi-Fi from the System Mode Main screen, following steps must be executed:

* Select Administration from the System Mode Main screen. Administration screen is displayed.
* Select Communications option to proceed.
* Select Wi-Fi option to proceed.
* Select WiFi Scan option.
* WiFi status is displayed.
* Press OK to switch ON the WiFi: ![wifi_is_off.png](.//wifi_is_off.png)
* "Powering WiFi on" message is displayed: ![wifi_power_on.png](.//wifi_power_on.png)
* List of WiFi connections are displayed;
* Select a WiFi connection;
* Select WiFi configuration;
* Enter the Passkey (PSK). ![wifi_details.png](.//wifi_details.png)
* Select WiFi Interface IPv4.
    * The WiFi Status icon in red indicates that the WIFi is not connected. ![wifi_ipv4_off.png](.//wifi_ipv4_off.png)
* Set the AutoStart to On
* Press the WiFi Status icon
* Press Ok to save the changes.
* Connecting WiFi screen is displayed.
* WiFi status is turned green indicating that the WiFi is connected: ![wifi_ipv4_connected.png](.//wifi_ipv4_connected.png)


# Bluetooth Configuration

To configure Bluetooth from the System Mode Main screen, following steps must be executed:

* Select Administration from the System Mode Main screen. Administration screen is displayed.
* Select Communications option to proceed.
* Select Bluetooth option to proceed.
* Select Scan option to proceed.
* Press Ok to switch on the Bluetooth: ![bt_is_down.png](.//bt_is_down.png)
* Scanning message is displayed.
* Select a BT Device Name.
* Pairing screen is displayed.
* Confirm PIN message is displayed on both the devices. Press Yes to confirm: ![bt_confirm_pin.png](.//bt_confirm_pin.png)
* Pairing Successful screen is displayed. Press OK to confirm.


# Modem Configuration

Modem information, configuration options and simple diagnostic are available in Sysmode. For handsets, the modem needs to be connected to a base either via USB (i.e. when docked) or via Bluetooth. When docked the USB connection is automatically available. If undocked the Bluetooth DUN channel (for access to the Modem tty) and Bluetooth basectrl channel (for invoking libmodembasic commands remotely on base from handset) need to be set up. Currently the setting up of these two Bluetooth connection channels is not supported by Sysmode.



* Information/ Ports/ Modem

The 'Modem' field is set to 'Yes' if terminal supports modem access. For portable handset, this will be set to 'Yes' regardless of whether the handset is or is not currently connected to a base.



* Information/ Modem
* Administration/ Communication/ Modem/ Modem Information

Both options displays the same screen. which displays a table containing the results of sending the command, libmodembasic_getInfo. For handset, if modem is not connected to a base, then a message is displayed 'Modem information is not available'.



* Administration/ Communication/ Modem/ Set Country

This sets the modem country code by updating/creating the modem configuration file, modem.conf. If modem is available (i.e. for Handset if it is connected to a base) the modem is then reinitialized using the new country profile. If modem is not available a message is displayed to user that new country setting will tale effect on next modem initialization.



* Diagnostic/ Communications/ Modem

If no modem is available (i.e. Handset is not connected to a base) then an error message. Otherwise the following are performed: 

```
- Initialize modem
- Get the following modem information by sending AT commands: Manufacturer name, model and firmware version.
```

If modem line is connected, the user is prompted to enter a number for dial up. On entering the number a call is made to remote end. The far end (e.g. a modem or a phone) will then receive an incoming call. 

 The diagnostics is exited by selecting the 'Cancel' option.

The primary function of any of the Symode diagnostic tests is to provide basic tests of VOS functions and application on the terminal hardware. The VOS modembasic library however does not directly support dialup. It is provided by the ADKCOM. The Sysmode dial up implementation, therefore is part of Sysmode itself and is set up by first calling the libmodembasic_init and them sending a set f AT commands. The purpose of the Sysmode dial up is mainly to check if the modem can indeed connect to an another device (phone or modem). 

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100

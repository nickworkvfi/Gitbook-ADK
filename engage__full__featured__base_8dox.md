---
title: engage_full_featured_base.dox

---

# engage_full_featured_base.dox






## Source code

```cpp

DllSpec int com_PairDockedBase(struct com_MAC *mac, enum com_ErrorCodes *com_errno);
\endverbatim

To pair the handset with a base if the handset is undocked (over the air), execute:

\verbatim
DllSpec int com_BTExtPair(const char *bt_addr, enum com_ErrorCodes *com_errno);
\endverbatim

or

\verbatim
DllSpec int com_BTPair(const char *bt_addr, enum com_BTPairMethod method, const char *PIN, enum com_ErrorCodes *com_errno);
\endverbatim

\note The usage of com_BTExtPair() is highly recommended.

\subsection subsec_engage_ffbase_adk_integration_routing_preferences Routing Preferences

Default values:
- When docked: ETH is preferred
- When undocked: Wifi followed by 2G/3G followed by BT-PAN

Note that the defaults can be overwritten by ADK API:

\verbatim
DllSpec int com_SetInterfacePriority(enum com_Interfaces interfaces[], size_t count, enum com_ErrorCodes *com_errno);
\endverbatim

\section sec_engage_ffbase_base_sw_update Base SW Update

ADK release has a different installation package for Handset and a different package for Base:
- dl.adk-x.x.xx-xxx-vos2-engage-prod.tgz
- dl.adk-x.x.xx-xxx-vos2-base-prod.tgz

The "Base" package should be installed on the Base device. 
\warning Do not install full engage package on Base. 

\note FW Update over the BT is not recommended, but it could be used only when the handset is docked.

\subsection subsec_engage_ffbase_base_sw_update_remote Remote download

The remote download performs FW download via VHQ to the handset and then push from the handset to the base.
Contact the Support Team for detailed information.

\note Software update via VHQ (remote download) is preferred.

\subsection subsec_engage_ffbase_base_sw_update_local_download Local download via System mode and Netloader

It is possible to start Netloader on the base which will listen on all interfaces for connection.

\note A network download client, included with the SDK, must be installed onto a PC. 

\subsubsection subsubsec_engage_ffbase_base_sw_update_local_download_v240m Local download V240m, V400m

When the terminal is docked on the base, in the system mode menu (Supervisor -> Enter password -> Update) you should see the update menu, with additional 2 options: 

- <b>Base Netloader</b>: this will start Netloader on the base where the package can be sent using Netloader PC app directly to the base;
- <b>Base/handset Netloader</b>: this will start Netloader on the handset where the package can be sent using Netloader PC app to the handset and update both the handset and the base at the same time.
For base update, you can use the file “dl.adk-x.x.xx-xxx-vos2-base-prod.tgz”. There is also an upgrader for a base in the upgrader folder, but if not necessary you can use the first file for a clean update.

\subsubsection subsubsec_engage_ffbase_base_sw_update_local_download_cm5p Local download CM5P, T650p

It is possible to start Netloader on the base which will listen on all interfaces for connection.

\note A network download client, included with the SDK, must be installed onto a PC. 

- When the terminal is docked on the base, run the "Base Control" application and choose the connected Base station name.
- In the "Base Settings" menu choose the "Software Update" item.
- Turn on "Netloader". The message "Netloader Running" should appear. 

This will start Netloader on the base where the package can be sent using Netloader PC app directly to the base.

\subsection subsec_engage_ffbase_base_sw_update_api Install SW on base using ADK-SYS API

The function is used for installing packages on dock stations (Example: V240m B-FF).
The package needs to be placed in /mnt/flash/install/dl/ before API is called.
In case return code is SYS_ERR_REBOOT_NEEDED reboot is required to finish instalation.
\code
vfisysinfo::sysError sysBaseInstall();
\endcode

\note Refer to \ref subsubsec_sysinfo_Sys_Base_Install "ADK-SYS Programmer's Guide: System Installation Functions" for more details.

<!-- decided not to publish a detailed description as the "BaseUpdater" should be downloaded at deployment and is not for usual usage --> 

<!-- \subsection subsec_engage_ffbase_base_sw_update_engage_base_automatic_updater Engage Base Automatic Updater -->
<!-- decided not to publish as we don't know how wide it is used externally                                      -->       

<!-- \subsection subsec_engage_ffbase_base_sw_update_vos_auto_update Base update without handset                 -->
<!-- this is a way on how to update using VOS-auto-update folder in the USB flash.                               -->
<!-- as this is an unusual operation, and we don't want to widely share this method externally,                  -->
<!-- the customer should contact a Support team first and the Support team will guide on how to use this method. -->
<!-- P.S. Currently, VOS-auto-update is shared with a Customer if he forgets the supervisor (to install the      -->
<!-- crtreset) or to update the Base.                                                                            -->

\section sec_engage_ffbase_base_config Base Configuration

\subsection subsec_engage_ffbase_base_config_vis_handset_sysmode Base Configuration via the Handset's sysmode

If the Base is docked and paired with an Engage Handset (V400m, V240m, V210), then specific sysmode menus are available on the handset's sysmode to configure the base:

- the <b>Base %Config</b> under the <b>Administration</b> (need to select the base name to proceed)
    - the sub-menu <b>Date/Time</b> to configure the date and time on the base
    - the sub-menu <b>Static IP</b> to configure the static IP on the base
    - the sub-menu <b>Unpair all handsets</b> to unpair all handsets that are paired to that base 

\section sec_engage_ffbase_Troubleshooting Troubleshooting & Getting Information

\subsection subsec_engage_ffbase_adk_integration_getting_information_v240m Troubleshooting & Getting Information V240m, V400m

\subsubsection subsubsec_engage_ffbase_adk_integration_getting_information_mac_status_bar_v240m MAC status bar

MAC status bar will display the BT signal strength.
See detailed information in the ADK-MAC Programmer's Guide \ref sec_mac_statusbar "Appendix: Statusbar".

\subsubsection subsubsec_engage_ffbase_adk_integration_getting_information_retrieving_docked_status_v240m Retrieving Docked Status V240m, V400m

ADK-SYS has a property SYS_PROP_DOCKING_STATUS to obtain the docking status:

\verbatim
#include "sys/sysinfo.h"
int status;
sysGetPropertyInt(SYS_PROP_DOCKING_STATUS, status);
\endverbatim

See detailed information in the ADK-SYS Programmer's Guide \ref subsec_sysinfo_System_Property_Functions "System Property Functions".

\subsubsection subsubsec_engage_ffbase_adk_integration_getting_information_retrieving_other_information_v240m Retrieving Other Information from the V240m, V400m Base 

ADK-SYS has the following string properties to obtain information from the connected base including:
- base serial number
- base product number
- base model ID
- base HW revision
- Base currently installed OS version
- base MAC address
- base current IPv4 and IPv6 address

\verbatim
#include "sys/sysinfo.h"
sysGetPropertyString(>propertyName>, value);
 
SYS_PROP_DOCK_STATION_SN=31,             /**< read-only,  Docking station serial number */
SYS_PROP_DOCK_STATION_PN=32,             /**< read-only,  Docking station product number */
SYS_PROP_DOCK_STATION_MODEL=33,          /**< read-only,  Docking station model */
SYS_PROP_DOCK_STATION_MAC=34,            /**< read-only,  Docking station MAC address */
SYS_PROP_DOCK_STATION_HW_REV=35,         /**< read-only,  Docking station hardware revision */
SYS_PROP_DOCK_STATION_OS_VERSION=38,     /**< read-only,  Docking station OS version */
SYS_PROP_DOCK_STATION_IP_ADDRESS=39,     /**< read-only,  Docking station IP V4 address corresponding to SYS_PROP_DOCK_STATION_MAC*/
SYS_PROP_DOCK_STATION_IP_V6_ADDRESS=51,  /**< read-only,  Docking station IP V6 address corresponding to SYS_PROP_DOCK_STATION_MAC*/
\endverbatim

See detailed information in the ADK-SYS Programmer's Guide \ref subsec_sysinfo_System_Property_Functions "System Property Functions".

\subsection subsec_engage_ffbase_adk_integration_getting_information_cm5p Troubleshooting & Getting Information CM5P, T650p

\warning Both - Engage handset and base should have the same OS release installed. Differing versions may result in the loss of ethernet and other communication channels (BT / Modem).
Base OS version can be confirmed in the System mode "Information" menu under the option "Basic Base information" (menu is available if the handset is docked).

\subsubsection subsubsec_android_ffbase_adk_integration_getting_information_retrieving_docked_status BT/Peripheral Connection Status

- BT connection status is communicated via an icon in the Android Notification bar.
- Base Connected Status is available from the Diagnostics Application found in the Android app tray.
    - The following items are viewable:
        |Field                   |Description                                                   |
        |------------------------|--------------------------------------------------------------|
        |Dock status             |Current device dock status and serial number of docked station|
        |Docked base network info|Network information from the docked station                       |
        |Base OS version         |OS version from docked station                                |


\subsubsection subsubsec_android_ffbase_adk_integration_getting_information_retrieving_other_information Retrieving Other Information from the CM5P, T650p Base

The Base Control (Manager) app home activity screen will show if there is a connected Base (Dock). Selecting that Base brings up a menu showing:
- BT Settings
- BT PAN Mode
- Base Settings
- Base Software Information
- Base Software Update
- Secure Boot Image Version
- Vault version
- U-Boot version
- Control Information Block version
- Machine Information Block version
- Linux Kernel version
- Overall RFS version
- Build Release version
- Application Manager version
- Ability to turn on console logs and send logs to the USB thumb drive
- Serial port settings

\note Contact the Support Team for detailed troubleshooting information.

\subsection subsec_engage_ffbase_Logging Logging

Base logs could be collected by VHQ. Please read the manual log collection methods below.

\subsection subsubsec_engage_ffbase_logs_to_usb Transfer Base Logs to USB stick

To transfer Base Logs to USB, the USB stick should be connected to the Base device.

<b>Instructions for V240m, V400m:</b>
- Format USB stick to FAT.
- Connect a USB stick to a Base device using an appropriate cable
- Start System Mode (see chapter \ref sec_fltk_entering_sysmode for more information).
- When System Mode login displayed, press CANCEL (or red "X" button).
- Select the "Transfer Logs to Base" option.

Logs (both - the base and the handset logs) will be copied to the USB stick.
Connect USB to the laptop and copy the files.

<b>Instructions for CM5P, T650p:</b>
- Format USB stick to FAT.
- Connect a USB stick to a Base device using an appropriate cable
- Start Base Control (Manager) application
- Choose "Send Logs to USB Stick"
- Below this menu item, a status message "Log dump successful" should be displayed 

Logs will be copied to the USB stick.
Connect USB to the laptop and copy the files.

\subsection subsec_engage_ffbase_console_logs System/Console Logs

To enable console logs printout on the serial port of Engage bases you will need to:
- Connect a Base to your PC and start the console application/ terminal application (Putty or similar).
- Power off the Base.
- While it's off – press the System Mode (power) button on the Base.
- Without releasing this button – power the terminal on.
- You will see the boot mode options 0-4. Depending on the OS version these will change in a cycle or you need to change them manually by pressing the sysmode button.
- To boot in mode 2:
    - If modes change in cycle, release sysmode (power) button when the mode is 2.
    - If manually changing modes, press and hold sysmode (power) button when boot mode 2 is set.
This will enable console logs printout on the serial port for the corresponding session until the base is rebooted.

\note Console logs can be already enabled on a Base (disabled by default). If so, then logs are printed out on the serial port without booting in boot mode 2.
    

<!-- \section sec_engage_ffbase_base_web_gui Base WEB GUI                               -->
<!-- Base WEB GUI can be accessed by an IP address of the base unit.                    -->
<!--                            TBD                                                     -->
<!-- Description will be added when the new remote sysmode will be implemented for Base -->
<!-- The old one has vulnerabilities                                                    -->

\section sec_engage_ffbase_Appendix Appendix

\subsection subsec_engage_ffbase_Acronym_Definitions Acronym Definitions

Acronym | Definitions
--------|------------
ADK     | Application Development Kit
API     | Application Program Interface
BT      | Bluetooth
CCP     | Communication Control Panel
ETH     | Ethernet
UI      | User Interface
OS      | Operating System
PM      | Power Management



*/
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

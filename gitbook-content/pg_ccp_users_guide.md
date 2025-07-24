---
hidden: true
title: ADK-CCP Programmers Guide
---

# Introduction <a href="#sec_ccp_introduction" id="sec_ccp_introduction"></a>

## Purpose <a href="#subsec_ccp_preface" id="subsec_ccp_preface"></a>

This guide provides information on the usage of the **Communication Control Panel (CCP)**.

## Audience <a href="#subsec_ccp_audience" id="subsec_ccp_audience"></a>

This document provides descriptions of the ADK Communication Control Panel features and is intended for users and integrators that want to understand and use the CCP.

### Hardware Support <a href="#subsubsec_ccp_hardware_support" id="subsubsec_ccp_hardware_support"></a>

The Communication Control Panel (COM Control) is designed to be platform agnostic and will be supported on V/OS (UX series only), all V/OS2 terminal operating systems, and all V/OS3 terminal operating systems (Neo and Vegas platforms). Every supported device needs a display -- no tty mode is supported. A keypad is not necessary.

## Organization <a href="#subsec_ccp_organization" id="subsec_ccp_organization"></a>

This guide is organized as follows:

[Chapter 1, Overview](#sec_ccp_overview): Provides an overview of the ADK Communication Control Panel component.

[Chapter 2, Installation of ADK CCP](#sec_ccp_installadkccp): Gives guidelines to install the ADK Communication Control Panel component.

[Chapter 3, Using the ADK CCP](#sec_ccp_usingadkccp): Presents common use-cases for ADK Communication Control Panel component.

[Chapter 4, Using the ADK CCP Wizard](#sec_ccp_usingadkwizard): Presents common use-cases for ADK Communication Control Panel Wizard.

[Chapter 5, Using custom ADK CCP configuration](#sec_ccp_usingcustomconfig): Shows the configuration options and where to place them.

[Chapter 6, Using CCP Self Install Wizard](#sec_ccp_usingselfinstallwizard): Gives information and shows how to activate this special installation mode.

[Chapter 7, Using CCP Database Updater](#sec_ccp_usingdatabaseupdater): Gives information and shows how to activate this database update mode.

[Chapter 8, Known Issues and Restrictions](#sec_ccp_knownissues): Gives information about any known issues or restrinctions of the current CCP version.

# Overview <a href="#sec_ccp_overview" id="sec_ccp_overview"></a>

This chapter presents a short introduction to the ADK Communication Control Panel component.

## CCP Main Screen <a href="#sec_ccp_overview_main_screen" id="sec_ccp_overview_main_screen"></a>

The Communication Control Panel (CCP) is a tool to provide the user of an ADK based Verifone payment device with the following functions:

1.  Set / change the network configuration parameters
2.  Run simple network diagnostics
3.  Report the network status

The user is seeing the most important information on the main screen:

- Type of the communication (Ethernet, GPRS, Wi-Fi, Dial-Up, Bluetooth)
- Current interface status (On/Off, Up/Down)
- The CCP expert menu *More* (with submenus: *Status*, *Diagnostic*, *Configuration*)

The following picture shows the main screen of the CCP with status information on the available communication interfaces:

[TABLE]

## CCP Status Menu <a href="#sec_ccp_overview_status_menu" id="sec_ccp_overview_status_menu"></a>

[TABLE]

### QR Code <a href="#sec_ccp_overview_status_menu_qrcode" id="sec_ccp_overview_status_menu_qrcode"></a>

The QR Code contains a JSON-encoded string with the MAC and/or IPv4 address of the selected interface, as well as the model name and serial number of the device. The interface names correspond to those of enum *com_Interfaces*, with the preceding part *COM_INTERFACE\_* being truncated. For interfaces ETH0, ETH1, ETH_BT and WLAN0, the MAC Address is always present. For the IPv4 address, the interface must be active. The data is encoded like this:

``` cpp
{
  "Model": "V240m",
  "SN": "123-456-789",
  "IF": {
   "ETH0": {
   "MAC": "AA:BB:CC:DD:EE:FF",
   "IPv4": "10.216.101.162"
   }
  }
}
```

### Accessory Information <a href="#sec_ccp_overview_status_menu_accessory" id="sec_ccp_overview_status_menu_accessory"></a>

If any accessories are connected to the terminal, a new submenu in the status menu appears. This submenu is called \"Accesssory Information\" and contains information about connected accessories.

Currently only Orange Dongle accessories are supported. If an Orange Dongle is connected, then following information is displayed:

- Dongle type (D0, D1, D2, D3)
- Dongle part number
- Dongle serial number

Then, for D2 and D3 dongles:

- RJ45-USB 5V output status
- RJ45-PoUSB 12V input status
- RJ45-USB data status

Additionally, for a D3 dongle:

- USB-A 5V output status
- PoSERIAL 12V input status
- Serial data status

Also, for D2 and D3 dongles, built-in Ethernet switch information is presented. For each port:

- Information whether port is enabled or disabled
- Information whether port is configured as an uplink
- Link status
- Speed and duplex (half-duplex or full-duplex)

If the link is down or port is disabled, then the last known speed and duplex status are displayed.

Selecting port as an uplink means that link status of this port will be mirrored as the link status of built-in LAN interface. As D2 and D3 Orange Dongles contain a switch and internal LAN interface of the terminal is always connected to it, its link status is always up (even if nothing is connected to any of Orange Dongle ports), just like if it was connected to an external switch. It\'s not what some customers expect. Uplink feature allows to detect link status changes on one of Orange Dongle ports just like it would be without Orange Dongle.

Note that if uplink port is disconnected, switch will still work and pass data between other ports, but internal LAN interface of the terminal will be brought down.

## CCP Diagnostic Menu <a href="#sec_ccp_overview_diag_menu" id="sec_ccp_overview_diag_menu"></a>

| Screenshot | Hints |
|----|----|
| ![](ccp_diag_menu_ccp.png) | <p>The Diagnostic menu contains several options to help the user diagnose and troubleshoot the terminals communication interfaces.<br/></p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>Troubleshoot menu can be extended with additional test options by activating the *ext_diag* configuration option. \[unsupported block\]</p> <p><br/></p> {% endhint %} |
| ![](ccp_diag_ping.png) | <p>The Ping option can be used to diagnose the connectivity to a given remote host. Enter the IP address of the host and start either single or continous ping.<br/></p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>Only IPv4 ping is supported in this input mask. Octets of the IPv4 address have to be filled-up by zeros to fit the input mask of this dialog (eg. 008.008.008.008)</p> <p><br/></p> {% endhint %} |
| ![](ccp_diag_ping_cont.png) | <p>Sending ICMP echo requests to the remote host continously.</p> |

## CCP Configuration Menu <a href="#sec_ccp_overview_config_menu" id="sec_ccp_overview_config_menu"></a>

The Configuration menu provides specific screens to modify all the parameters of the different communication interfaces.

{% hint style="info" %}
Please note that most of the dialogs show the currently stored settings as second line in the menu items. Changes to the settings need to be saved to apply them into the database. Changes will only take effect after applying them to the interface, or after restarting the corresponding network.
{% endhint %}

[TABLE]

Depending on the device and OS version, there might be also other interfaces present, like another LAN interface, BT LAN, BT PPP SPP, serial port connections, USB client mode, or USB host IP settings.

## CCP Configuration Menu <a href="#sec_ccp_overview_config_menu" id="sec_ccp_overview_config_menu"></a>

Device Settings menu contains settings dependent on the current terminal configuration. It can be a WiFi band (for devices equipped with a dual-band WiFi), USB mode (for devices that support changing it), and Orange Dongle settings (if an Orange Dongle D2 or D3 is connected).

Following features can be changed (enabled or disabled) for D2 and D3 dongles:

- RJ45-USB 5V output
- RJ45-USB data

Additional settings for a D3 dongle:

- USB-A 5V output
- Serial data

A built-in Ethernet switch control menu is also provided, allowing the user to selectively enable and disable specific Ethernet ports.

# Installation of CCP <a href="#sec_ccp_installadkccp" id="sec_ccp_installadkccp"></a>

## System Requirements <a href="#sec_ccp_installadkccp_systemreqs" id="sec_ccp_installadkccp_systemreqs"></a>

### Supported Terminal Types <a href="#sec_ccp_installadkccp_systemreqs_terminals" id="sec_ccp_installadkccp_systemreqs_terminals"></a>

CCP runs on UX (Trident), V/OS2 (Raptor), and V/OS3 (Neo and Vegas) devices.

### Minimum OS Requirements <a href="#sec_ccp_installadkccp_systemreqs_minos" id="sec_ccp_installadkccp_systemreqs_minos"></a>

- Minimum OS version: see ADK COM release notes

Packages that need to be installed:

- dl.ccp-\<version\>.tgz package (this package includes the com control panel application and HTML files)
- dl.com-\<version\>.tgz (ADK COM comdaemon)
- dl.adkfonts-\<version\>.tar (ADK FONTS)
- dl.guiprtserver-\<version\>.tar (ADK GUI \> 2.4.0-1)
- dl.libvfiguiprtserver-\<version\>.tar (ADK GUI \> 2.4.0-1)
- dl.libexpat.\<version\>.tgz (ADK EXPAT //XML parser library)
- dl.libinf-\<version\>.tgz (ADK INFOSVC //Information Service)
- dl.libsqlite.\<version\>.tgz (ADK DB-SQLITE)
- dl.liblog.\<version\>.tgz (ADK LOGGING)
- dl.libipc-\<version\>.tgz (ADK IPC)
- dl.libsysinfo-\<version\>.tgz (ADK SYS)

# Using the Communication Control Panel <a href="#sec_ccp_usingadkccp" id="sec_ccp_usingadkccp"></a>

The CCP may be used as separate application invoked from the ADK MAC (ADK-SYS) desktop or embedded into an application via API mode (see \"[Using the CCP in API mode](#sec_ccp_usingadkccp_api_mode)\" for details).

## Navigating through the CCP menus <a href="#sec_ccp_usingadkccp_navigation" id="sec_ccp_usingadkccp_navigation"></a>

### Navigation on touch capable devices <a href="#sec_ccp_usingadkccp_navigation_touch" id="sec_ccp_usingadkccp_navigation_touch"></a>

On touch capable devices, like the Engage P400, the user can navigate through the CCP menus using the touch buttons.
The \'\>\' symbol indicates there are deeper menu levels. Selecting the \'\<\' in the screen title will navigate back to the next higher menu level.

{% hint style="info" %}
In the library mode, the application is responsible for drawing the keyboard when running on a device without a keypad. When running CCP as a standalone application, the MAC will take care of this.
{% endhint %}

### Navigation on non-touch devices <a href="#sec_ccp_usingadkccp_navigation_nontouch" id="sec_ccp_usingadkccp_navigation_nontouch"></a>

On non-touch devices, like the Engage V200, the user needs to use the navigation keys (\< \>) to change the menu level.
The \'\>\' symbol indicates there are deeper menu levels. Selecting the \'\<\' in the screen title will navigate back to the next higher menu level.
The up / down navigation keys need to be used to scroll the display content.

{% hint style="info" %}
There are some devices (eg. E-series (with keypad)) without navigation keys (\< \> or up / down) nor touch. For this devices there is a special navigation model implemented with \* and \# keys. Use the \* key for down navigation and the \# for up navigation.
{% endhint %}

## Configuring Ethernet connections <a href="#sec_ccp_usingadkccp_eth" id="sec_ccp_usingadkccp_eth"></a>

The configuration of ethernet connections is done in submenu **Configuration -\> Network Interface -\> LAN**. On V/OS3, there\'s another submenu level to enter: **Network settings**. Here you will find options to configure DHCP for your LAN interfaces or make manual settings like IP, Netmask, Gateway and DNS-Servers.

It\'s also possible to enable EAP authentication here, and (only on V/OS3) set the interface MTU value.

{% hint style="info" %}
Don\'t forget to save your settings and restart the LAN interface afterwards to apply changes to your physical LAN interface.
{% endhint %}

## Configuring Ethernet link speed <a href="#sec_ccp_usingadkccp_eth_settings" id="sec_ccp_usingadkccp_eth_settings"></a>

On V/OS3, Ethernet configuration menu is divided into two submenus: **Network settings** (containing network settings mentioned above), and **LAN Link Speed**. In the second submenu, the interface link speed can be chosen:

- **Automatic** -- use the auto-negotiation. This is the default and preferred setting
- **100 Mbit/s Full Duplex**
- **100 Mbit/s Half Duplex**
- **10 Mbit/s Full Duplex**
- **10 Mbit/s Half Duplex**

## Configuring WiFi connections <a href="#sec_ccp_usingadkccp_wifi" id="sec_ccp_usingadkccp_wifi"></a>

The configuration of WiFi networks is done in submenu **Configuration -\> Network Interface -\> WiFi**. In this menu you have the option wheather to scan for WiFi networks in your radio range or to configure your previously added WiFi networks.

This menu will give you a list of your known hotspots as well as the option to configure a new network from scratch. By choosing one WiFi node, you can see and modify all settings possible on WiFi networks. Please note, that some of the configuration options are only available in conclusion to other options (eg. PSK is only available, if authentication method is set to WPA2 PSK).

WPA3 standard is available only on V/OS3.

{% hint style="info" %}
Beginning with CCP release 1.36.0, the WiFi **Band Selection** menu for dual band devices is moved out of the WiFi network configuration menu. This setting can be done as a global device setting in menu **Configuration -\> Device Settings -\> WiFi Band** now.
{% endhint %}

As you are able to configure multiple WiFi networks in your known hotspots list, you have to tell the CCP which network profile should be used by your physical WiFi interface. To do this, mark the configured network as \"Active\" in submenu of you WiFi hotspot. If you don\'t need some WiFi networks anymore, you are also able to remove them from you known hotspot list.

{% hint style="info" %}
Don\'t forget to save your settings and to apply them to your physical WiFi interface. Also restarting of the network interface will apply the new settings.
{% endhint %}

WiFi scan shows networks sorted by signal strength. If more than 25 networks are found, then only 25 strongest networks are shown and a button called \"Show all\" appears, which lists all networks, sorted alphabetically.

## Configuring Dialup connections <a href="#sec_ccp_usingadkccp_dialup" id="sec_ccp_usingadkccp_dialup"></a>

The configuration of dialup connections is done in submenu Configuration -\> Network Interface -\> Dial-Up. Here you will find all the options to configure you dialup connection like phone number or dialup type.

{% hint style="info" %}
Don\'t forget to save your settings and to apply them to your physical dialup interface. Also restarting of the network interface will apply the new settings.
{% endhint %}

## Configuring Bluetooth connections <a href="#sec_ccp_usingadkccp_bluetooth" id="sec_ccp_usingadkccp_bluetooth"></a>

The configuration of bluetooth is done in submenu Configuration -\> Network Interface -\> Bluetooth. In this menu you have the option wheather to search for bluetooth nodes in you radio range or to configure your previously added bluetooth nodes. Also it\'s possible to set your terminal into \"Visible Mode\" so it can be found by other devices like a mobile phone or PC.

For adding a searched bluetooth node, you will have to choose a valid pairing method. For details please take a look at the bluetooth specification.

If you are paired with a valid bluetooth node, the CCP scans it\'s services and provides you to configure BT LAN or BT Dial-Up connections for example. Those virtual interfaces are configured like all other network interfaces in the menu **Configuration -\> Network Interfaces -\> BT LAN / BT Dial-Up**

{% hint style="info" %}
Don\'t forget to save your settings and to apply them to your vitual bluetooth interface. Also restarting of the network interface will apply the new settings.
{% endhint %}

## Configuring Bluetooth beacons <a href="#sec_ccp_usingadkccp_bluetooth_beacons" id="sec_ccp_usingadkccp_bluetooth_beacons"></a>

On V/OS3, a new set of submenus appeared in Configuration -\> Network Interface -\> Bluetooth:

- iBeacon
- Eddystone UID
- Eddystone URL

These menus allow to control (configure, enable, disable) iBeacon (a beacon type developed by Apple) and Eddystone (developed by Google) profiles in two variants (UID and URL).

All beacon menus have an **Activate** button that can be used to activate the beacon once it\'s saved. If the beacon is already active, then this button changes name to **Deactivate**.

All beacons share two common parameters:

- **Frequency** -- beacon interval, in milliseconds. Valid range: 100 -- 5000 ms
- **Autostart** -- whether to start the beacon when terminal boots

Other parameters are type-specific.

**iBeacon** should have an unique identifier, consisting of a **proximity UUID** (UUID for short), **Major**, and **Minor** parameters. Hence, following parameters have to be configured for the iBeacon to function properly:

- **UUID** -- 16-byte (32-character) ASCII-hex string, intended to group all beacons in a network
- **Major** -- major value, intended to distinguish a group of beacons in the same network (with the same UUID). Valid range: 1 -- 65535
- **Minor** -- minor value, intended to distinguish an individual beacon within the group (with the same UUID and major values). Valid range: 1 -- 65535

**Eddystone UID** needs the following parameters:

- **Namespace** -- 10-byte (20-character) ASCII-hex string, intended to group all beacons in a network. It has the similar purpose as iBeacon\'s UUID
- **Instance** -- 6-byte (12-character) ASCII-hex string, intended do distinguish an individual beacon in a namespace. It has the similar purpose as iBeacon\'s major and minor parameters

Finally, **Eddystone URL** beacon is used to advertise a specific URL. It needs the URL to be entered. Because of how this beacon works, there are certain restrictions on the URL.

- It has to start with either \"http://\", \"https://\", \"http://www.\", or \"https://www.\"
- It can contain only 7-bit ASCII characters, excluding control characters and space
- It has to have at most 17 characters, not including the prefix (for example, \"https://www.\" doesn\'t count)
- It can have more characters if it contains some known, common TLDs, with or without a slash at the end (they\'re counted as a single character), for example \".com/\" or \".org\". See the Eddystone URL specification for a complete list

For example, this URL is invalid:

``` cpp
ftp://very-long-url.example/ 
```

It\'s too long (22 characters) and has an unsupported URL prefix (\"ftp://\").

This, on the other hand, is valid:

``` cpp
https://www.very-long-url.info/abc 
```

It has the prefix (\"http://www.\") and 22 characters after that, but \".info/\" counts as a single character, so the length (17 characters) is not exceeded.

CCP makes a lot of sanity checks when saving and applying entered data to ensure that the URL meets the specification. CCP shows a generic \"Save failed\" error if any of these checks fail. Look into logs for a detailed description of what went wrong.

## Password protection <a href="#sec_ccp_usingadkccp_password" id="sec_ccp_usingadkccp_password"></a>

The CCP enforces password protection for the configuration menus.

On V/OS1 and V/OS2, the default password is **\"200331\"**. This password has to be changed to a custom password in the configuration menu.

On V/OS3, a different mechanism has been deployed. There\'s a system-wide component called *Password Manager*, which resides in the ADK security control panel. It allows to set passwords for various security levels. These passwords are then used by every ADK component that needs to be protected with a password. There\'s no default password.

When user tries to enter the protected (configuration) menu, he is prompted to select the security level (*supervisor* or *level1*) and enter that level\'s password. Once authenticated, user can enter and leave the menu (and even CCP) as much as he wants, but after three minutes of inactivity user is automatically logged out and CCP is terminated.

User can also manually log out by using the logout button in the ADK control panel.

## Configuring PPP over Bluetooth SPP <a href="#sec_ccp_usingadkccp_bluetooth_pppoverspp" id="sec_ccp_usingadkccp_bluetooth_pppoverspp"></a>

Starting with CCP 1.53.0, a new type of network interface has been introduced: PPP over SPP. It allows connecting to various Bluetooth devices, like electronic cash registers, that export a serial profile and provide PPP (point-to-point protocol) on top of it.

Before this interface can be configured and used, a Bluetooth device has to be paired and activated in the Bluetooth menu.

PPP over SPP interface menu is called \"BT PPP SPP\" and contains following settings:

- **SPP Service** -- SPP service name. It can be entered manually or obtained via SDP discovery after pressing **Browse services** button
- **SPP Channel** -- SPP channel number to use. It should be used only if SDP is not active and SPP service name cannot be used (**SPP Service** should be empty then)
- **Autostart** -- whether to start the interface when terminal boots
- **Authentication** -- PPP authentication type to use
- **PPP Username** and **PPP Password** -- username and password to use if PPP authentication is enabled
- **Timeout** -- timeout to bring the interface up

## Getting help on problems <a href="#sec_ccp_usingadkccp_debugging" id="sec_ccp_usingadkccp_debugging"></a>

If you run into errors during the configuration of ADK-COM via CCP, it may be helpful to take a look in the error log, found in **Diagnostic -\> Error Log**. This log will show you the lastly occured error messages from ADK-COM. Often it\'s possible to take a guess what\'s wrong with your settings (eg. \"WiFi Authentication failed\").

If that didn\'t help, you can use the enhanced debugging capabilities of ADK-COM and CCP. The CCP uses ADK-LOGGING framework to trace messages of different severities. The ID of both the standalone as well as the CCP library is \"CCP\". Please refer to the logging documentation further details on how to obtain the traces of an ID. Please note that activating the ID \"COM\" is also useful in this context.

## Multi Language support <a href="#sec_ccp_usingadkccp_multilang" id="sec_ccp_usingadkccp_multilang"></a>

To customize the CCP standalone application to a specific language, the CCP needs to be started with a command line option to select the CCP menu language:

``` cpp
ccp [--lang | -l] <language catalogue>
```

To use CCP in API mode with a custom language, the calling application has to set and load the language catalogs before calling the CCP API.

The default CCP language is English.

Supported CCP languages:

| Language                            | Catalogue File                      |
|-------------------------------------|-------------------------------------|
| <p>English</p>    | <p>en-US.ctlg</p> |
| <p>German</p>     | <p>de-DE.ctlg</p> |
| <p>Russian</p>    | <p>ru-RU.ctlg</p> |
| <p>French</p>     | <p>fr-FR.ctlg</p> |
| <p>Spanish</p>    | <p>es-ES.ctlg</p> |
| <p>Portuguese</p> | <p>pt-PT.ctlg</p> |
| <p>Swedish</p>    | <p>se-SE.ctlg</p> |

## Using the CCP in API mode <a href="#sec_ccp_usingadkccp_api_mode" id="sec_ccp_usingadkccp_api_mode"></a>

CCP supports an API mode for integration into applications. Therefore the CCP is build as library and provides calling of some submenus (for details see file **libccp.h** of development package).

``` cpp
enum CCPMenuName{
   CCP_MENU_MAIN = 0,
   CCP_MENU_MAIN_NO_PWD,
   CCP_MENU_CONFIGURATION,
   CCP_MENU_CONFIGURATION_NO_PWD,
   CCP_MENU_DIAGNOSTIC,
   CCP_MENU_INFORMATION
};
enum CCPErrorCodes {
   CCP_LIB_OK = 0,
   CCP_LIB_FAIL
};
enum CCPErrorCodes ccp_show(enum CCPMenuName which, const char *infodb, bool useInternalKeyTimeout = true);
```

{% hint style="info" %}
In API mode, the CCP won\'t configure guiprtserver (Resource folders, language settings, \...). Also there is no configuration of the ADK-LOGGING framework. Those configurations have to be done by the application. Since version 1.3.0 of CCP, the standard resource directory names of the ADKGUIPRT are used.
{% endhint %}

**EXAMPLE**

``` cpp
#include <cstdio>
#include "log/liblog.h"
#include "com/libccp.h"
int main(int /*argc*/, char ** /*argv*/) {
   /* Init routine of this GUI application.
 Setup resource folders, setup default languages etc ... */
   prv_init_gui();
   /* call CCP configuration submenu without password protection */
   if(CCP_LIB_OK != ccp_show(CCP_MENU_CONFIGURATION_NO_PWD, "flash/info.db")) {
   fprintf(stderr, "FAILURE ON CALLING CCP_MENU_CONFIGURATION_NO_PWD MENU");
   return 1;
   }
   /* call CCP main menu dialog with own timeout for password entry characters. */
   vfigui::uiSetPropertyInt(vfigui::UI_PROP_PASSWORD_SHOW_CHAR, 5000);
   if(CCP_LIB_OK != ccp_show(CCP_MENU_MAIN_NO_PWD, "flash/info.db", false)) {
   fprintf(stderr, "FAILURE ON CALLING CCP_MENU_MAIN_NO_PWD MENU");
   return 1;
   }
   return 0;
}
```

### Get your settings from CCP <a href="#sec_ccp_sec_usingadkccp_api_mode" id="sec_ccp_sec_usingadkccp_api_mode"></a>

If you integrated CCP menus to your application you may want to obtain the set data from CCP\'s network profiles. You can access the following profiles via ADK_INFOSVC framework:

- com/\_internal/default/net/ETH0
- com/\_internal/default/net/ETH1
- com/\_internal/default/net/GPRS0
- com/\_internal/default/net/PPP0
- com/\_internal/default/net/BT/PAN
- com/\_internal/default/net/BT/DUN
- com/\_internal/default/net/BT/WLAN
- com/\_internal/default/net/BT/USBCLIENT
- com/\_internal/default/net/BT/USBHOST

``` cpp
static const string MY_ETH_PROF ("com/_internal/default/net/ETH0");
InfoDB *db=info_opendb(dbname, INFO_READ_ONLY);
char *out(NULL);
info_readString(db, INFO_ROOT, MY_ETH_PROF + "/device_name", &out);
/* some more readouts here */
info_closedb(db);
```

## CCP certificates and keyfiles <a href="#sec_ccp_sec_certificates" id="sec_ccp_sec_certificates"></a>

In V/OS and V/OS2 there are some features in the CCP which may require you to select certificates and/or keyfiles. For example when connecting to a WiFi network which is using TLS you may need to specify CA/client-certificates and a client-keyfile. CCP will look into directory /etc/config/adk/com/ccp/certs/ for both certificates and keyfiles. To be able to install files there the application must create a user-signed configuration package and load it into the machine.

Example control file:

``` cpp
Package: adkcom-certs
Version: 1.0.0
User: usr1
Type: config
```

The directory structure within the download files package is as follows:

``` cpp
adk/
   com/
   ccp/
   certs/
   key1.key
   key2.key
   ....
   cert1.pem
   cert2.pem
   ....
```

Please refer to the secure-installer documentation for more information on how to create configuration packages.

Keys must have the ending \".der\", \".pem\", \".p12\" or \".key\", to be selectable via ccp. Certificates must have the ending \".der\", \".pem\", \".crt\" or \".cer\" to be selectable via ccp.

WiFi specific: To see which types of keyfiles are supported please refer to <a href="https://w1.fi/cgit/hostap/plain/wpa_supplicant/wpa_supplicant.conf">https://w1.fi/cgit/hostap/plain/wpa_supplicant/wpa_supplicant.conf</a> (search for \"private_key:\")

# Using the ADK CCP Wizard <a href="#sec_ccp_usingadkwizard" id="sec_ccp_usingadkwizard"></a>

While the standard CCP function is an expert menu, the communication wizard makes it easier to setup network profiles. The CCP library is extended by a new function to invoke a Communication Setup Wizard by an application, e.g. to configure all needed communication interfaces on the first start of the terminal.

The ccp_wizard() API is showing a menu to guide the user through the network setup of the following communication interfaces:

- ETH
- Mobile Data
- WiFi
- Bluetooth PAN

**ccp_wizard**

``` cpp
/*
 * While CCP is an expert menu, ccp_wizard should make it easier to setup network profiles.
 * Main menu of wizard is similar to main menu of CCP, but number of steps to configure one network
 * is reduced to a minimal number.
 *
 * @param infodb path to database for storing of the settings (eg. "flash/info.db")
 * @param useInternalKeyTimeout Use an ccp internal timeout which specifies how long it takes for a character in
 * a password dialog to transform from that character into a star (*).
 */
DllSpec void ccp_wizard(const char *infodb, bool useInternalKeyTimeout = true);
```

## Communication Wizard Main Screen <a href="#sec_ccp_usingadkwizardccp_main_screen" id="sec_ccp_usingadkwizardccp_main_screen"></a>

The main menu and the used configuration screens of the Communication Wizard are similar to the CCP, but the number of steps to configure a network is reduced to a minimum.

| Screenshot | Hints |
|----|----|
| ![](ccp_wiz_main.png) | <p>The communication wizard comes up with a main screen similar to the standard CCP, which displays all available network interfaces of a device.<br/>The actual number of displayed interfaces can be limited by suppressing the unwanted ones with the existing \"CCP whitelist\" API.<br/></p> |

### ccp_setWhiteList <a href="#sec_ccp_usingadkwizardccp_main_screen_wiz" id="sec_ccp_usingadkwizardccp_main_screen_wiz"></a>

``` cpp
/*
 * Set the interfaces which should be shown in the CCP or wizard.
 *
 * Call with desired interfaces before calling ccp_show().
 * Should NOT be used while ccp_show is running. If you would like to disable the whitelist call the function
 * again with whitelist set to NULL and count to 0
 *
 * @brief Set the interfaces which should be shown in the CCP.
 * @param whitelist List of interfaces to be shown
 * @param count Number of interfaces in list
 *
 * @return will return CCP_LIB_FAIL if whitelist is non-NULL but count is 0.
 * will return CCP_LIB_FAIL if whitelist is NULL but count is >0
 * will return CCP_LIB_OK on success
 */
DllSpec enum CCPErrorCodes ccp_setWhiteList(CCPInterfaces *whitelist, unsigned int count);
```

## LAN Setup Wizard <a href="#sec_ccp_usingadkwizardccp_lan_setup" id="sec_ccp_usingadkwizardccp_lan_setup"></a>

### DHCP Address Configuration <a href="#sec_ccp_usingadkwizardccp_lan_setup_dhcp" id="sec_ccp_usingadkwizardccp_lan_setup_dhcp"></a>

|                             |                             |
|-----------------------------|-----------------------------|
| ![](ccp_wiz_lan_dhcp_1.png) | ![](ccp_wiz_lan_dhcp_2.png) |

### Static IP Address Configuration <a href="#sec_ccp_usingadkwizardccp_lan_setup_statis" id="sec_ccp_usingadkwizardccp_lan_setup_statis"></a>

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| ![](ccp_wiz_lan_static_1.png) | ![](ccp_wiz_lan_static_2.png) | ![](ccp_wiz_lan_static_3.png) | ![](ccp_wiz_lan_static_4.png) | ![](ccp_wiz_lan_static_5.png) | ![](ccp_wiz_lan_static_6.png) |

## Mobile Data Setup Wizard <a href="#sec_ccp_usingadkwizardccp_mobile_setup" id="sec_ccp_usingadkwizardccp_mobile_setup"></a>

### Full APN Setup <a href="#sec_ccp_usingadkwizardccp_mobile_setup_fullapn" id="sec_ccp_usingadkwizardccp_mobile_setup_fullapn"></a>

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| ![](ccp_wiz_mob_full_apn_1.png) | ![](ccp_wiz_mob_full_apn_2.png) | ![](ccp_wiz_mob_full_apn_3.png) | ![](ccp_wiz_mob_full_apn_4.png) | ![](ccp_wiz_mob_full_apn_5.png) | ![](ccp_wiz_mob_full_apn_6.png) |

The standard way of configuring the Mobile Data network is guiding the user through the complete path of required parameters including the APN settings.

### Predefined APN Setup <a href="#sec_ccp_usingadkwizardccp_mobile_setup_apnlist" id="sec_ccp_usingadkwizardccp_mobile_setup_apnlist"></a>

There is a new API, an application can specify the APN configuration to be used for a specific SIM card / operator. After these settings are applied, the actual configuration a user has to do reduced on just selecting the SIM PIN.
This list of APNs and corresponding parameters (user name, password, \...) is used for the automatic setup of the GPRS profile. If mobile network (MCC+MNC) matches first 5 digits of IMSI, corresponding profile is used, otherwise parameters must be set manually.
No further setup is needed and this is all done by the Wizard.

In special cases, e.g. with Multi-IMSI SIM cards, you may want to show a configuration always, no matter which MCC+MNC the SIM card reports. For this purpose you can set a wildcard, \* or 0, as the mccMnc string. Configurations with \* will show up in the list alongside all other (possible) matches. Configurations with 0 will only be shown if there is not a single match via MCC+MNC and also no configuration with a \* is provided.

### ccp_setApnList <a href="#sec_ccp_usingadkwizardccp_mobile_setup_apn_list_set" id="sec_ccp_usingadkwizardccp_mobile_setup_apn_list_set"></a>

``` cpp
/*
 * set a list of APNs and corresponding parameters (user name, password, ...)
 * This list is used by ccp_wizard (mobile communication) for automatic setup of GPRS profile.
 * If mobile network (MCC+MNC) matches first 5 digits of IMSI, corresponding profile is used.
 * Otherwise parameters must be set manually.
 *
 * @param apnList list of APNs and corresponding parameters
 * @param number number of entries in list
 */
DllSpec void ccp_setApnList(const CCPgprsParameter *apnList, unsigned int number);
```

### Set APN list and start CCP Wizard <a href="#sec_ccp_usingadkwizardccp_mobile_setup_apn_list_set_start" id="sec_ccp_usingadkwizardccp_mobile_setup_apn_list_set_start"></a>

``` cpp
const CCPgprsParameter gprsProviders[] =
{
  {"T-Mobile D", "26201", "internet.t-mobile", "td1", "gprs", "PAP" },
  {"Vodafone D", "26202", "web.vodafone.de", "", "", "none" },
  {"E Plus", "26203", "internet.eplus.de", "eplus", "gprs", "PAP" },
  {"O2", "26207", "surfo2", "", "", "none" }
};
ccp_setApnList(gprsProviders, sizeof(gprsProviders)/sizeof(CCPgprsParameter));
ccp_wizard("flash/info.db", true);
```

### Set APN List via JSON encoded file <a href="#sec_ccp_usingadkwizardccp_mobile_setup_apn_list_file" id="sec_ccp_usingadkwizardccp_mobile_setup_apn_list_file"></a>

Besides ccp_setApnList(), APN configurations may also be provided via a JSON encoded file at:

``` cpp
/mnt/flash/etc/config/adk-com/ccp-gprsparam.json
```

The file should consist of an array with the name \"gprsParameters\". Here is an example file:

``` cpp
{
   "gprsParameters": [
   {
   "name": "123Send",
   "mccMnc": "*",
   "apn": "Eseye1",
   "username": "USER",
   "password": "PASS",
   "authentication": "CHAP"
   },
   {
   "name": "PostMobile_IRL",
   "mccMnc": "0",
   "apn": "ISP.POSTFONE.IE"
   },
   {
   "name": "T-Mobile D",
   "mccMnc": "26201",
   "apn": "internet.t-mobile",
   "username": "td1",
   "password": "gprs",
   "authentication": "PAP"
   }
   ]
}
```

If not all key/value pairs are present, like in the second element, empty strings are set instead of that parameter. Authentication is either set to PAP or CHAP, otherwise it will default to Automatic.

## WiFi Setup Wizard <a href="#sec_ccp_usingadkwizardccp_wifi_setup" id="sec_ccp_usingadkwizardccp_wifi_setup"></a>

|  |  |  |  |
|----|----|----|----|
| ![](ccp_wiz_wifi_1.png) | ![](ccp_wiz_wifi_2.png) | ![](ccp_wiz_wifi_3.png) | ![](ccp_wiz_wifi_4.png) |

In order to setup the WiFi network, the communication wizard is scanning for available SSIDs. Once the users has selected a WiFi network to connect to, the WiFi wizard function is detecting the required authentication method. Dependent on the method, the wizard is prompting for necessary parameters like EAP type, EAP identity and passphrase.

## BT LAN Setup Wizard <a href="#sec_ccp_usingadkwizardccp_btpan_setup" id="sec_ccp_usingadkwizardccp_btpan_setup"></a>

|  |  |  |  |
|----|----|----|----|
| ![](ccp_wiz_btlan_1.png) | ![](ccp_wiz_btlan_2.png) | ![](ccp_wiz_btlan_3.png) | ![](ccp_wiz_btlan_4.png) |

BT LAN setup always starts with a device scan to find any nearby visible BT devices. After the user selects one of the available devices, depending on the required pairing mechanism, the user is guided through the BT pairing dialogue. Once the pairing succeeds, there is no further configuration needed.

## Use of custom resources with standalone CCP <a href="#sec_ccp_custom_resources" id="sec_ccp_custom_resources"></a>

By default, each CCP installation in standalone mode bring its own resource files. For certain cases it might be necessary to use any customized resources. Here the problem arises that a normal application user (usr1, \...) is not allowed to change the default resource. Therefor the CCP is capable to use custom resources which need to be stored under /etc/config/www/ccp. A special download file should be generated which will store the data to the designated location. The secure installer on a V/OS based terminal supports so called \"configuration packaged\" (type must be set to \"config\"). Those packages will be automatically extracted to /etc/config on the terminal. The user of such a package can be usr1 or anything similar. In addition, it is required that the package content must be belong to group \"share\". Both, user and group, are controlled via the CONTROL file of a download package. Such a sample package can be found in the load section of a CCP binary release.

Example control file:

``` cpp
Package: ccp_rsc_custom
Version: 1.0.0
User: usr1
Group: share
Type: config
```

The directory structure within the download files package is as follows:

``` cpp
www/
   ccp/
   ...
```

Please refer to the secure-installer documentation for more information on how to create configuration packages.

# Using custom CCP configuration <a href="#sec_ccp_usingcustomconfig" id="sec_ccp_usingcustomconfig"></a>

Some behavior of the CCP can be modified. The standard CCP distribution includes additional configuration packages to activate/deactivate the self install wizard and the database updater.

The following configuration packages are provided:

**1. Enable/Disable self install wizard**

- dl.ccp-wizard-enable-1.0.0.tgz
- dl.ccp-wizard-disable-1.0.0.tgz

**2. Enable/Disable database update functionality** (Allow database configuration changes provided by ADK-INF import files)

- dl.ccp-database-upd-enable-1.0.0.tgz
- dl.ccp-database-upd-disable-1.0.0.tgz

Furthermore the behavior of the CCP can be modified by a configuration file. This configuration file is JSON encoded and has to be placed under \"/etc/config/adk-com/ccp-config.json\", resp. \"/mnt/appdata/versioned/globalshare/adk-com/ccp-config.json\" in V/OS3. Some configurations are generic to the CCP while others only modify subcomponents. If they modify only the behavior for a subcomponent they must be placed in a JSON subobject (see \"wizard\" in configuration example below).

Following options can be configured right now:

| Option | Type | Possible Values | Default Value | Description |
|----|----|----|----|----|
| <p>version</p> | <p>integer</p> | <p>\[0-9\]+</p> | <p>1</p> | <p>Format version of the configuration. Don\'t change this until you totally know what you are doing\!</p> |
| <p>force_docked_pairing</p> | <p>boolean</p> | <p>true or false</p> | <p>false</p> | <p>Force the user to do backchannel pairing mechanism with base stations (only wizard subcomponent!)</p> |
| <p>auto_com_setup</p> | <p>boolean</p> | <p>true or false</p> | <p>false</p> | <p>Force automatic setup of the communication interfaces (only wizard subcomponent!)</p> |
| <p>force_touch_beep</p> | <p>boolean</p> | <p>true or false</p> | <p>false</p> | <p>Force beeping when touch event is detected. Otherwise use the system settings</p> |
| <p>serial</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Serial Emulation\"</p> |
| <p>eth_rndis</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Ethernet (RNDIS)\"</p> |
| <p>serial_rndis</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Serial + Ethernet (RNDIS)\"</p> |
| <p>eth_ecm</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Ethernet (ECM)\"</p> |
| <p>serial_ecm</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Serial + Ethernet (ECM)\"</p> |
| <p>eth_ecm_x2</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Ethernet (ECMx2)\"</p> |
| <p>serial_ecm_x2</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Serial + Ethernet (ECMx2)\"</p> |
| <p>eth_ncm</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Ethernet (NCM)\"</p> |
| <p>serial_ncm</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Serial + Ethernet (NCM)\"</p> |
| <p>eth_eem</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Ethernet (EEM)\"</p> |
| <p>serial_eem</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Serial + Ethernet (EEM)\"</p> |
| <p>iap2</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Serial Emulation over iAP2\"</p> |
| <p>ext_diag</p> | <p>boolean</p> | <p>true or false</p> | <p>false</p> | <p>Enable extended diagnostics capabilities. New menu options in \"Diagnostic\" menu</p> |
| <p>ip_config_incomplete</p> | <p>string</p> | <p>warn, block</p> | <p>false</p> | <p>Display a warning if DHCP is turned off and the IPv4 configuration is incomplete (IP Address, Subnet Mask, Gateway, DNS).<br/>If set to \"warn\", it is possible to ignore the warning.<br/>If set to \"block\" the \'Ignore\' button is not available, the user has to fill all the required inputs in order to proceed.</p> |
| <p>hide_footer_buttons</p> | <p>boolean</p> | <p>true or false</p> | <p>false, true in V/OS3</p> | <p>Hide blank/unused softkeys. See section [Hide footer buttons](#sec_ccp_usingcustomconfig_hide_footer_buttons)</p> |
| <p>802.1x_config</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of 802.1x authentication for LAN interface</p> |
| <p>usb_mode</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of USB mode \"Host/Device\"</p> |
| <p>wifi_roaming</p> | <p>boolean</p> | <p>true or false</p> | <p>true</p> | <p>Support configuration of WiFi Roaming</p> |
| <p>wifi_max_networks</p> | <p>integer</p> | <p>\[0-9\]+</p> | <p>MAX_WLAN_SURVEY_COUNT</p> | <p>Maximum number of WiFi nodes to show by default (if more are found, then \"Show All\" button will be shown). Defaults to the value of MAX_WLAN_SURVEY_COUNT in <a href="libcom_8h.md">libcom.h</a>. Set to 0 to disable the limit</p> |

Example configuration file looks like:

``` cpp
{
   "version": 1,
   "wizard": {
   "force_docked_pairing": false,
   "auto_com_setup": false
   },
   "usb": {
   "serial": true,
   "eth_rndis": true,
   "serial_rndis": true,
   "eth_ecm": true,
   "serial_ecm": true,
   "eth_ecm_x2": true,
   "serial_ecm_x2": true,
   "eth_ncm": true,
   "serial_ncm": true,
   "eth_eem": true,
   "serial_eem": true,
   "iap2": true,
   "usb_mode": true
   },
   "802.1x_config": true,
   "ext_diag": false,
   "force_touch_beep": false,
   "hide_footer_buttons": false,
   "ip_config_incomplete": "warn",
   "wifi_roaming": true,
   "wifi_max_networks": 25
}
```

## V/OS and V/OS2 config package generation <a href="#sec_vos_package_generation" id="sec_vos_package_generation"></a>

If you wan\'t to use such custom configurations you\'ll have to create a special download file that will store the config to the designated location. Secure installer on V/OS based terminals supports so called \"configuration packages\" (type must be set to \"flashconfig\") which will be extracted to /etc/config on the terminal. Those packages can be created as usr1 or anything similar. Note: the group of such a package has to be \"share\".

Example control file for V/OS and V/OS2 download package:

``` cpp
Package: ccp_config
Version: 1.0.0
User: usr1
Group: share
Type: flashconfig
```

Package must follow the directory structure:

``` cpp
adk-com/
   ccp-config.json
```

On ADK 4.8, the Packman tool should be used to build and sign the config packages. Otherwise, use the older Package Manager.

### V/OS3 config package generation <a href="#sec_vos3_package_generation" id="sec_vos3_package_generation"></a>

On V/OS3 it is mandatory to use the Packman tool to generate a \"share_all_versioned_data\" type package.

## Hide footer buttons <a href="#sec_ccp_usingcustomconfig_hide_footer_buttons" id="sec_ccp_usingcustomconfig_hide_footer_buttons"></a>

By default, softkeys are displayed at the bottom of the screen. Since these buttons are not always used, it is possible to hide them. To do this, change the value of \"hide_footer_buttons\" to true. If only one button is used, it is displayed in the full width of the screen. If both buttons are unused, no button is displayed and the freed-up area is used for the content. The difference can be seen in the following pictures.

|  |  |  |
|----|----|----|
| <p>**Default**</p> | ![](ccp_mainscreen_ccp.png) | ![](ccp_conf_lan1_detail.png) |
| <p>**Buttons hidden**</p> | ![](ccp_hide_footer_buttons_main.png) | ![](ccp_hide_footer_buttons_ipv4.png) |

# Using CCP Self Install Wizard <a href="#sec_ccp_usingselfinstallwizard" id="sec_ccp_usingselfinstallwizard"></a>

The CCP in standalone mode can be configured to setup the basic communication interfaces automatically during first start. Within this mode, the user is guided through the basic communication setup steps of an standard ADK deployed device.

The automatic setup flow tries to activate one of the available communication interfaces of the device. If none of these interfaces could be activated with the Wizard, the standard configuration menu of the CCP is shown.

This mode can be activated/deactivated with the provided Wizard enable/disable installation packages:

- dl.ccp-wizard-enable-1.0.0.tgz
- dl.ccp-wizard-disable-1.0.0.tgz

The configuration settings for the autostart wizard mode are set independently from the custom configuration:

- \"force_docked_pairing\": true
- \"auto_com_setup\": true

# Using the database updater <a href="#sec_ccp_usingdatabaseupdater" id="sec_ccp_usingdatabaseupdater"></a>

ADK-COM contains a mechanism designed to automatically apply (create or modify) interface configuration during deployment. A special package, containing a specially crafted XML file, has to be deployed to the terminal, and either CCP (on V/OS and V/OS2) or COM daemon (on V/OS3) will read this file, process it, and integrate its contents with ADK-COM internal configuration.

The feature, disabled by default, can be enabled (and later disabled) with two provided installation packages:

- dl.ccp-database-upd-enable-1.0.0.tgz (to enable)
- dl.ccp-database-upd-disable-1.0.0.tgz (to disable)

XML file format is compatible with the ADK-INF import file format, and on V/OS and V/OS2 is imported directly into the CCP database. File format is explained below.

If the update mode is active (enabled), then CCP or COM daemon will check for the presence of an import XML file during bootup. This file must have the name *ccp_update.xml* and be placed in */mnt/flash/etc/config/adk-com/* (V/OS and V/OS2) or */mnt/appdata/versioned/globalshare/adk-com/* (V/OS3) directory. The file is removed after processing, but if it can\'t be removed due to insufficient permissions, then ADK-COM will note its modification time and ignore it on subsequent boots, unless the file is modified again.

On V/OS3, interface configuration is stored directly in the comdaemon\'s database, so the update file is processed by the COM daemon instead of CCP, but the file format is the same, with minor differences highlighted below.

## Package generation <a href="#sec_ccp_usingdatabaseupdater_package" id="sec_ccp_usingdatabaseupdater_package"></a>

The database update file needs to be encapsulated into a download package of type *flashconfig*. Refer to V/OS Secure Installer documentation.

The *flashconfig* package is similar to the *config* package type, but it\'s a flash package, so it\'s authenticated and the contents is extracted to flash only once.

- The *Type* field in the package control file must be set to *flashconfig*.
- *User* and *Group* fields are as per *user* packages and determine the ownership of the files once extracted.
- The contents will be extracted to the directory */mnt/flash/etc/config/adk-com/* (V/OS and V/OS2) or */mnt/appdata/versioned/globalshare/adk-com/* (V/OS3), and the package will be removed.
- The directory *adk-com* must have correct access rights (0770: drwxrwx---).
- The file *ccp_update.xml* must have correct access rights (0777: -rwxrwxrwx).

Example control file:

``` cpp
Package: ccp_update_static_wifi
Version: 1.0.0
User: usr1
Group: share
Type: flashconfig
Umask: 000
```

On ADK 4.8, the Packman tool should be used to build and sign the config packages. Otherwise, use the older Package Manager.

## Update process / package download <a href="#sec_ccp_usingdatabaseupdater_download" id="sec_ccp_usingdatabaseupdater_download"></a>

To apply the defined configuration to the system, the database update package needs to be downloaded and installed to the system.

- download the package to the device using e.g. netloader
- database import is started automatically after the device is rebooted
- on successful database import, new network settings are applied automatically to the system

Please note that the contents of the update file is case-sensitive. Infodb keys should be lowercase, but with names of the interfaces written in uppercase, for example: *com/\_internal/default/net/ETH0/dhcp_enabled*. See subsequent sections for more examples.

## Update file format <a href="#sec_ccp_usingdatabaseupdater_format" id="sec_ccp_usingdatabaseupdater_format"></a>

Update file, called *ccp_update.xml*, must start with:

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
```

And end with:

``` cpp
</data>
```

Between these lines, one or more lines with the following format must be present.

``` cpp
<Tag d:condition="condition" Name="name" Value="value"/>
```

*condition* is used to restrict the update to certain serial numbers. Examples:

- \* - to match every serial number
- 111-222-333 - to match only specific serial number
- 111-222-\* - to match a range of serial numbers

*name* is the CCP database path. On V/OS and V/OS2 it\'s treated literally and stored in the database. On V/OS3 the internal COM (not CCP) database format is different, but COM daemon parses this file to retain compatibility with V/OS and V/OS2.

Finally, *value* is the value assigned to each database path.

## Update paths <a href="#sec_ccp_usingdatabaseupdater_paths" id="sec_ccp_usingdatabaseupdater_paths"></a>

There are four formats of the database update path.

- com/\_internal/\...
- com/\_internal/default/config/\...
- com/\_internal/default/net/*interface*/*key*
- com/\_internal/default/net/WLAN*x*/wlan_node/*y*/*key*

First format is used internally by the CCP on V/OS and V/OS2 and allows to:

- Set CCP password (*com/\_internal/password/conf*)
- Set configuration for diagnostics (*com/\_internal/diag/conf/\...*)
- Suppress wizard (*com/\_internal/suppress_wizard* set to 1)

Diagnostics configuration paths (they correspond to menu entries in Configuration -\> Diagnostic menu):

- com/\_internal/diag/conf/dns_lookup
- com/\_internal/diag/conf/host_lookup
- com/\_internal/diag/conf/tcp_addr
- com/\_internal/diag/conf/tcp_port
- com/\_internal/diag/conf/test_message_size
- com/\_internal/diag/conf/test_message_freq

Second format (com/\_internal/default/config/\...) is used only on V/OS3 (ignored on other systems) to store various configuration entries. Currently supported configuration paths:

- com/\_internal/default/config/USB1/mode
- com/\_internal/default/config/USB2/mode
- com/\_internal/default/config/USBGADGET/mode
- com/\_internal/default/config/orange/d3_usb_a_5v
- com/\_internal/default/config/orange/d2_d3_usb_rj45_5v
- com/\_internal/default/config/orange/d2_d3_usb_rj45_data
- com/\_internal/default/config/orange/d3_serial_data
- com/\_internal/default/config/orange/d2_d3_switch_port_1
- com/\_internal/default/config/orange/d2_d3_switch_port_2
- com/\_internal/default/config/orange/d2_d3_switch_port_3
- com/\_internal/default/config/orange/d2_d3_switch_port_4
- com/\_internal/default/config/orange/switch_uplink_port

First two paths (USB1/mode and USB2/mode) accept value *host* and *device*.

Accepted values for the last one (USBGADGET/mode):

- acm
- rndis
- acm+rndis
- acm+ecm
- ecm+ecm
- acm+ecm+ecm
- ecm
- ncm
- acm+ncm
- eem
- acm+eem

Orange Dongle settings, except switch uplink port, accept values *0* or *1*. Their meanings:

- d3_usb_a_5v - enable/disable 5V power output on USB-A port (D3 dongle)
- d2_d3_usb_rj45_5v - enable/disable 5V power output on USB-RJ45 port (D2 and D3 dongles)
- d2_d3_usb_rj45_data - enable/disable data lines on USB-RJ45 port (D2 and D3 dongles)
- d3_serial_data - enable/disable serial port (D3 dongle)
- d2_d3_switch_port_N - enable/disable Ethernet switch port N

Switch uplink port can be \"none\" (uplink feature disabled) or 1\...4 (to select the port).

Third format (com/\_internal/default/net/*interface*/*key*) is for setting interface configuration, with a special case for WiFi.

*interface* can be either an Ethernet-type interface, a PPP-type interface, a GPRS interface, or a WiFi interface. V/OS and V/OS2 supports also BT/DUN and PPP0 (for dial-up) interfaces, but they\'re not supported on V/OS3. Recognized Ethernet-type interfaces:

- ETH0
- ETH1
- USBHOST
- BT/PAN
- BRIDGE0
- USBCLIENT
- USBCLIENT1

Recognized PPP-type interfaces:

- COM1_SERIAL_PPP
- COM2_SERIAL_PPP
- COM3_SERIAL_PPP
- COM4_SERIAL_PPP
- COM5_SERIAL_PPP
- COM6_SERIAL_PPP
- BT/SPP
- USBD_SERIAL_PPP
- USBDYN

GPRS interface is always *GPRS0*, and WiFi interface is always *WLANx*, with *x* starting from 0 (more on it later).

All keys that are supported for different interface types are listed below. Please see the ADK-COM programmers guide for their meaning.

Supported keys for Ethernet-type interfaces:

- IP configuration
  - ipv4_enabled
  - dhcp_enabled
  - manual_dns
  - ip_address
  - netmask
  - gateway
  - dhcp_hostname
  - dhcp_clientid
  - dhcp_ipv4_timeout
  - dhcp_ipv4_retry_count
  - dhcp_ipv4_retry_wait
  - dns_1
  - dns_2
  - ipv6_enabled
  - ipv6_mode
  - ipv6_dns_1
  - ipv6_dns_2
  - ipv6_global_address
  - ipv6_unique_local_address
  - ipv6_global_prefix
  - ipv6_unique_local_prefix
  - ipv6_gateway
- EAP configuration
  - eap_type
  - eap_anonymous_id
  - eap_cacert
  - eap_clientcert
  - eap_identity
  - eap_privkey
  - eap_privkey_pwd
  - eap_password
  - eap_fast_pac_file
  - eap_allow_weak_key
  - eap_allow_tlsv1
- Other configuration
  - device_name
  - startup_mode
  - timeout
  - mtu
  - bt_addr

Supported keys for PPP-type interfaces:

- IP configuration - as for Ethernet
- Serial configuration
  - serial_port
  - baudrate
  - databits
  - stopbits
  - parity
  - flowcontrol
- PPP configuration
  - authentication
  - username
  - password
- USB DYN configuration
  - serial_number
  - serial_usbdyn_vid
  - serial_usbdyn_pid
- SPP configuration
  - bt_addr
  - service_name
  - channel
- Other configuration
  - device_name
  - startup_mode
  - timeout
  - disable_compression

Supported keys for GPRS0:

- IP configuration - as for Ethernet
- PPP configuration - as for serial
- GPRS configuration
  - apn
  - mode
  - mccmnc
  - sim_slot
- Other configuration
  - device_name
  - startup_mode
  - timeout
  - dial_string
  - restart_network_on_host_failure

## WiFi <a href="#sec_ccp_usingdatabaseupdater_wifi" id="sec_ccp_usingdatabaseupdater_wifi"></a>

WiFi is a special case, because it can contain multiple networks. Configuration paths for a single network (without WiFi roaming) look like this:

com/\_internal/default/net/WLAN0/*key* (interface configuration)

And:

com/\_internal/default/net/WLAN0/wlan_node/0/*key* (node configuration)

On V/OS2, IP configuration is set on the interface, while on V/OS3 it\'s set on a node.

On V/OS3, WiFi interface (*WLAN0*) contains:

- device_name
- startup_mode
- timeout
- country_code

And the rest is in individual nodes, starting from 0.

- IP configuration - as for Ethernet
- EAP configuration - as for Ethernet
- Individual network configuration
  - ssid
  - psk
  - band
  - channel
  - key_mgmt
  - visibility
  - group
  - pairwise
  - proto
  - mtu

There\'s no way to enable individual nodes on V/OS3\'s update package. If more than one node exists, terminal will try to connect to all nodes, unless a node has been disabled manually in CCP.

On V/OS2, the configuration layout is different. First, the IP configuration is stored in *WLANx* interface itself (but EAP configuration is stored per node).

Second, while on V/OS3 there\'s a single *WLAN0* interface with individual nodes (0, 1, etc.), on V/OS2 there are many *WLANx* interfaces (*WLAN0*, *WLAN1*, etc.), each with only one node (0).

Third, in order for WiFi roaming to work, node configuration must have the *enabled* flag. It can be 1 to enable given node in roaming or 0 otherwise, but it has to exist.

The logic, on V/OS2, when determining which networks should be enabled, is as follows.

First, it\'s checked if at least one node contains *enabled* flag. If it does, then new behavior (with possible roaming) is triggered. If not, then old, legacy behavior is retained, where roaming profile is updated only if it was manually enabled prior to installing the update.

If at least one *enabled* flag is found, then every node that doesn\'t have this flag is assumed to be disabled. Then, if after the update only single network is found, it\'s either synced with the OS (if enabled) or ignored when syncing (but still added to the database) if disabled. If two or more networks are found and at least one is enabled, then roaming profile containing enabled networks is created and synced (but even disabled networks are still added to the database).

Furthermore, if roaming profile is enabled, then some configuration paths don\'t matter anymore (although they still have to be specified for the profile to be considered valid).

- startup_mode (it\'s always set to AUTO)
- timeout (it\'s always set to 60000)
- IP configuration (it\'s always set to DHCP - dhcp_enabled is set to 1)

It might sound confusing, but has been done to retain compatibility. It should be more clear after reading the examples below.

## \"ccp_update.xml\" file examples <a href="#sec_ccp_usingdatabaseupdater_examples" id="sec_ccp_usingdatabaseupdater_examples"></a>

### Example 1: ETH IP address setup <a href="#sec_ccp_usingdatabaseupdater_examples_1" id="sec_ccp_usingdatabaseupdater_examples_1"></a>

The following example config package contains a list of devices which will get a unique IP address assignment for the Ethernet interface. There are common settings for all devices of that particular serial number range (346-193-\*), like netmask (255.255.255.0) and default gateway (192.168.100.1). The own IP address is assigned per device in the list. (346-193-098 → 192.168.100.4).

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
   <Tag d:condition="346-193-*" Name="com/_internal/default/net/ETH0/dhcp_enabled" Value="0"/>
   <Tag d:condition="346-193-*" Name="com/_internal/default/net/ETH0/netmask" Value="255.255.255.0"/>
   <Tag d:condition="346-193-*" Name="com/_internal/default/net/ETH0/gateway" Value="192.168.100.1"/>
   <Tag d:condition="346-193-096" Name="com/_internal/default/net/ETH0/ip_address" Value="192.168.100.2"/>
   <Tag d:condition="346-193-097" Name="com/_internal/default/net/ETH0/ip_address" Value="192.168.100.3"/>
   <Tag d:condition="346-193-098" Name="com/_internal/default/net/ETH0/ip_address" Value="192.168.100.4"/>
   <Tag d:condition="346-193-099" Name="com/_internal/default/net/ETH0/ip_address" Value="192.168.100.5"/>
</data>
```

### Example 2: WiFi configuration with list of devices <a href="#sec_ccp_usingdatabaseupdater_examples_2" id="sec_ccp_usingdatabaseupdater_examples_2"></a>

The following example config package contains a list of devices which will get a unique IP address assignment for the WiFi interface. There are common settings for all devices of that particular serial number range (346-193-\*), like netmask (255.255.255.0) and default gateway (192.168.101.1). The own IP address is assigned per device in the list. (346-193-098 → 192.168.101.4).

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
   <Tag d:condition="346-193-*" Name="com/_internal/default/net/WLAN0/dhcp_enabled" Value="0"/>
   <Tag d:condition="346-193-*" Name="com/_internal/default/net/WLAN0/netmask" Value="255.255.255.0"/>
   <Tag d:condition="346-193-*" Name="com/_internal/default/net/WLAN0/gateway" Value="192.168.101.1"/>
   <Tag d:condition="346-193-096" Name="com/_internal/default/net/WLAN0/ip_address" Value="192.168.101.2"/>
   <Tag d:condition="346-193-097" Name="com/_internal/default/net/WLAN0/ip_address" Value="192.168.101.3"/>
   <Tag d:condition="346-193-098" Name="com/_internal/default/net/WLAN0/ip_address" Value="192.168.101.4"/>
   <Tag d:condition="346-193-099" Name="com/_internal/default/net/WLAN0/ip_address" Value="192.168.101.5"/>
</data>
```

### Example 3: Ethernet and WiFi mixed configuration <a href="#sec_ccp_usingdatabaseupdater_examples_3" id="sec_ccp_usingdatabaseupdater_examples_3"></a>

The following example config package contains a generic setting to set both the Ethernet and WiFi interface to DHCP IP assignment on any device.

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
   <Tag d:condition="*" Name="com/_internal/default/net/ETH0/dhcp_enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/dhcp_enabled" Value="1"/>
</data>
```

### Example 4: WiFi configuration for different WiFi networks <a href="#sec_ccp_usingdatabaseupdater_examples_4" id="sec_ccp_usingdatabaseupdater_examples_4"></a>

The following example config package contains a list of devices which will get different WiFi network access parameters. There are common settings for all devices, the DHCP IP address assignment and the WiFi node configuration. Different serial number ranges will get assigned to different WiFi networks (SSIDs).

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/type" Value="WLAN"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/device_name" Value="wlan0"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/dhcp_enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/visibility" Value="VISIBLE"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/group" Value="CCMP"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/pairwise" Value="CCMP"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/bss_type" Value="INFRA"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/proto" Value="WPA2"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/key_mgmt" Value="PSK"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/auth_alg" Value="OPEN"/>
   <Tag d:condition="346-193-*" Name="com/_internal/default/net/WLAN0/wlan_node/0/ssid" Value="VFI_GUEST"/>
   <Tag d:condition="346-193-*" Name="com/_internal/default/net/WLAN0/wlan_node/0/psk" Value="Washington06"/>
   <Tag d:condition="346-194-*" Name="com/_internal/default/net/WLAN0/wlan_node/0/ssid" Value="ADK_GUEST"/>
   <Tag d:condition="346-194-*" Name="com/_internal/default/net/WLAN0/wlan_node/0/psk" Value="12345678"/>
</data>
```

### Example 5: Ethernet over USB configuration <a href="#sec_ccp_usingdatabaseupdater_examples_5" id="sec_ccp_usingdatabaseupdater_examples_5"></a>

The following example config package adds USBCLIENT interface with default IPv4 settings.

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
   <Tag d:condition="*" Name="com/_internal/default/net/USBCLIENT/startup_mode" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/USBCLIENT/ipv4_enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/USBCLIENT/dhcp_enabled" Value="1"/>
</data>
```

### Example 6: USB mode configuration <a href="#sec_ccp_usingdatabaseupdater_examples_6" id="sec_ccp_usingdatabaseupdater_examples_6"></a>

The following example, valid only for V/OS3, contains settings that change the mode of USB ports and of the USB gadget. For V/OS and V/OS2 please refer to: <a href="https://confluence.verifone.com/pages/viewpage.action?pageId=236807488">https://confluence.verifone.com/pages/viewpage.action?pageId=236807488</a>

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
   <Tag d:condition="346-193-*" Name="com/_internal/default/config/USB1/mode" Value="HOST"/>
   <Tag d:condition="346-193-*" Name="com/_internal/default/config/USB2/mode" Value="DEVICE"/>
   <Tag d:condition="346-193-*" Name="com/_internal/default/config/USBGADGET/mode" Value="ACM+ECM+ECM"/>
</data>
```

### Example 7: WiFi configuration with roaming on V/OS2 <a href="#sec_ccp_usingdatabaseupdater_examples_7" id="sec_ccp_usingdatabaseupdater_examples_7"></a>

The following example config package contains a list of WiFi networks that the terminal will try to connect to.

{% hint style="info" %}
*enabled* setting must be present in the *wlan_node*. It\'s not propagated into the database, but is needed to trigger the roaming. It\'s done this way to keep compatibility with older versions of CCP.
IP configuration (*dhcp_enabled*, *ipv4_enabled*, etc.) and interface configuration (*startup_mode*, *timeout*, *type*, etc.) must be present for all networks, but in case of WiFi roaming, default settings are used (DHCP is always enabled, startup mode is always set to automatic, timeout is always set to 1 minute).
{% endhint %}

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/device_name" Value="wlan0"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/dhcp_enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/ipv4_enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/ipv6_enabled" Value="0"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/startup_mode" Value="auto"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/timeout" Value="100000"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/type" Value="WLAN"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/ssid" Value="Network1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/psk" Value="Password1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/key_mgmt" Value="PSK"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/group" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/pairwise" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/proto" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/auth_alg" Value="OPEN"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/bss_type" Value="INFRA"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/device_name" Value="wlan0"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/dhcp_enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/ipv4_enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/ipv6_enabled" Value="0"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/startup_mode" Value="auto"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/timeout" Value="100000"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/type" Value="WLAN"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/wlan_node/0/enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/wlan_node/0/ssid" Value="Network2"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/wlan_node/0/psk" Value="Password2"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/wlan_node/0/key_mgmt" Value="PSK"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/wlan_node/0/group" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/wlan_node/0/pairwise" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/wlan_node/0/proto" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/wlan_node/0/auth_alg" Value="OPEN"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN1/wlan_node/0/bss_type" Value="INFRA"/>
</data>
```

### Example 8: WiFi configuration with roaming on V/OS3 <a href="#sec_ccp_usingdatabaseupdater_examples_8" id="sec_ccp_usingdatabaseupdater_examples_8"></a>

{% hint style="info" %}
*enabled* setting is not present here. All nodes are enabled.
{% endhint %}

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/device_name" Value="wlan0"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/dhcp_enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/ipv4_enabled" Value="1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/ipv6_enabled" Value="0"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/startup_mode" Value="auto"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/timeout" Value="100000"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/type" Value="WLAN"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/ssid" Value="Network1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/psk" Value="Password1"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/key_mgmt" Value="PSK"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/group" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/pairwise" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/proto" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/auth_alg" Value="OPEN"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/0/bss_type" Value="INFRA"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/1/ssid" Value="Network2"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/1/psk" Value="Password2"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/1/key_mgmt" Value="PSK"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/1/group" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/1/pairwise" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/1/proto" Value="AUTO"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/1/auth_alg" Value="OPEN"/>
   <Tag d:condition="*" Name="com/_internal/default/net/WLAN0/wlan_node/1/bss_type" Value="INFRA"/>
</data>
```

### Example 9: Set CCP password on V/OS and V/OS2 <a href="#sec_ccp_usingdatabaseupdater_examples_9" id="sec_ccp_usingdatabaseupdater_examples_9"></a>

{% hint style="info" %}
This has no effect on V/OS3, as on V/OS3 there\'s a separate, system-wide authentication component.
{% endhint %}

``` cpp
<data d:action="insert_or_update" xmlns:d="http://www.verifone.com/adk/information-service/action">
   <Tag d:condition="*" Name="com/_internal/password/conf" Value="123456"/>
</data>
```

# Known Issues and Restrictions <a href="#sec_ccp_knownissues" id="sec_ccp_knownissues"></a>

This version does not yet support the following CCP features:

- Restricted WiFi functionality: only WPA2 standard on V/OS2 platforms (built-in OS restriction), only WPA2 and WPA3 standards on V/OS3
- Restrictions in Status menu: no CA certificates information
- Restrictions in Configuration menu: no Connection History function
- Translations for languages other than English and German are not complete for versions above 1.0.x

# Related Documentation <a href="#subsec_ccp_relateddocs" id="subsec_ccp_relateddocs"></a>

To learn more about the general ADK framework and its componenents, please refer to the following documents:

- ADK SDI PINPad Interface API Programmers Guide
- ADK EMV Contact Programmers Guide
- ADK EMV Contactless Programmers Guide
- ADK GUI Programmers Guide
- ADK COM Programmers Guide
- ADK Import/Export Utility Programmers Guide
- ADK Information Service Programmers Guide
- ADK IPC Programmers Guide
- ADK LOGGING Programmers Guide
- ADK MSR Programmers Guide
- ADK Printer Programmers Guide
- ADK SEC Programmers Guide
- ADK SYS Programmers Guide
- VHQ Agent Guide

# Acronyms Definition <a href="#sec_ccp_acronyms" id="sec_ccp_acronyms"></a>

| Acronym | Definitions |
|----|----|
| <p>ADK</p> | <p>Application Development Kit</p> |
| <p>API</p> | <p>Application Programming Interface</p> |
| <p>CCP</p> | <p>Communication Control Panel</p> |
| <p>GPRS</p> | <p>General Packet Radio System</p> |
| <p>ICMP</p> | <p>Internet Control Message Protocol</p> |
| <p>LAN</p> | <p>Local Area Network</p> |
| <p>MAC</p> | <p>Multi Application Controller</p> |
| <p>OS</p> | <p>Operating System</p> |
| <p>V/OS</p> | <p>Linux based Verifone Terminal Operating System</p> |
| <p>WLAN</p> | <p>Wireless Local Area Network</p> |

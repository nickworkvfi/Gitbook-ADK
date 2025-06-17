---
title: Engage Full Featured Base

---

# Engage Full Featured Base




# Preface

This guide is for programmers and developers who want to understand how to configure, maintain and install software on a Base device.


## Audience

This document is intended for programmers and users who maintain and are working with Base terminals.


## Organization

This guide is organized as follows:

[Introduction]. Provides an overview of the Full Featured Base interfaces.

[Getting Started]. Provides FF Base connectivity options.

[Programming and ADK Integration]. Provides setup of communication profiles and pairing preferences with examples using ADK components.

[Base SW Update]. Provides an instruction on Base SW update.

[Base Configuration]. Provides an overview of configuration options of the FF base.

[Troubleshooting & Getting Information]. Gives solutions for possible issues and provides on how to get information from the base.

[Appendix]. Acronym Definitions.


# Introduction

The "Base" is an Engage platform device running Verifone software, including VHQ agent, to support management via the VHQ server. The Base can come in two versions according to the device model:

* Charging Base;
* Full-Featured (FF) Base.

The Charging Base supports charging only with no communication functionality. The charging base has no SW support and only an adaptor in the base. The FF Base supports several connectivity options and provides a serial connection for peripherals (like ECR, check reader, barcode reader, etc.).

See detailed description in:

* [ADK-COM Component](pg_com_users_guide.md#page-pg-com-users-guide) for using profiles and setting up connections;
* [ADK-SYS Component](pg_sysinfo_users_guide.md#page-pg-sysinfo-users-guide) to retrieve information;
* [System mode](pg_sysmode_fltk.md#page-pg-sysmode-fltk) and [CCP UI](pg_ccp_users_guide.md#page-pg-ccp-users-guide) for access by technicians (only Engage handsets).


## Hardware

**Base External Connectors**


| Interface  | Connector  | Notes   |
|  -------- | -------- | -------- |
| USB-serial  | micro USB  | Internally this is a USB-to-serial converter. Only USB-Serial gadget supported   |
| USB-Host  | USB-A  | Default configured to Host mode. Example: a Cheque reader which would expose as a USB-Serial device. Support for transfer of Base logs to USB stick connected to this port   |
| Serial  | RJ45  |  |
| Ethernet  | RJ45  |  |
| Dial-up Modem  | RJ11  | Not active on T650p and CM5P   |
| Handset Docking  | N/A  | Handset docking achieved through BT pairing   |
| Power Supply  |  |  |


![com_V400m_Modem_Ethernet.svg](.//com_V400m_Modem_Ethernet.svg)V400m Network-Interface diagram

![com_V400m_Serial.svg](.//com_V400m_Serial.svg)V400m Serial-Interface diagram

see [Appendix D: Devices] for detailed device-specific information.

**LED indications**



* 1st Light (white) Power indication
    * LED is off when AP is powered down.
    * LED is blinking when AP is booting.
    * LED is steady-on when AP finishes booting and is ready to accept incoming connections.
* 2nd Light (blue) BT communication indication
    * LED is off when no Bluetooth connection is present.
    * LED is blinking when a Bluetooth client is connecting to the AP.
    * LED is steady-on when at least one Bluetooth client is connected to the AP.
* 3rd Light (white) Modem Indication
    * LED is blinking when modem data transmission.


# Getting Started


## Compatibility Requirements

Compatibility defined as the Base is designed to accept the Terminal form factor when docked

* V240m (compatible with V240m full feature or charging base)
* V400m (compatible with V400m full feature or charging base)
* Trinity T650p (compatible with the Trinity full feature base)
* CM5P (compatible with the Carbon Mobile 5 full feature base)


## Handset and Base Connectivity

There is no physical docking connector between the Terminal and Base. Docking is accomplished via BT pairing and communication is accomplished between the Terminal and Base via BT profile protocols.

The Base holds a BT connection to the Terminal if the Terminal was previously paired and connected on a specific BT profile.

Different BT profiles are used to support the external connectors on the base:


| BT Profile  | Connector   |
|  -------- | -------- |
| BT-PAN  | ETH   |
| BT-SPP  | Serial (RJ45), USB-Serial (microUSB), USB-Host (USB-A)   |
| BT-DUN  | Dial-up Modem (V240m and V400m only)   |



### Base Control Channel (docked & undocked)

**V240m, V400m**

The handset maintains a separate base control channel. When docked the base ETH interface is used through the internal USB link (as it would be an internal / native eth interface). When un-docked, the base eth interface can still be used through the BT-PAN profile.

The same is true for the other interfaces (serial, modem).



* When docked, the communication between the base and the handset will be via the USB back-channel.
* When undocked, the base holds a BT connection to the Handset if Handset was previously paired and connected on a specific BT profile.

**Transitions between docked and undocked states**

There is a difference in how the connection with a base is supported during docking and undocking the handset from the base according to the connection type between the handset and the base:



* If the BT connection (all profiles) is used, then the connection is maintained during device dock/undock.
* If ETH, USB, Serial, or other connection is used, then it works in docked mode only. The connection will be broken when undocking.

As the ETH connections are faster than the BT connections, they are more recommended for larger downloads instead of BT connections.

**CM5P, T650p**

The Terminal maintains a separate Base control channel. The Base control app will connect to this via Bluetooth SPP. When multiple Terminals are connected to the Base, whichever device selects the Terminal in the app will be allowed to connect to this channel. Only one Terminal at a time can connect to this channel.

The control channel supports the following internal operations:

* Configuration: switch between router/bridge mode;
* Get base SW Version information;
* Serial port setup;
* etc.


### Base BT-PAN modes

BT-PAN profile has 2 modes:



* Router mode: terminal will get a local IP;
* Bridge mode: terminal can be reached from outside via incoming messages.

**V240m, V400m**

BT-PAN mode setting manually could be done via the CCP application or System Mode:

* CPP: Configuration -> Network Interface -> Bluetooth -> Base network mode -> Router/Bridge
* System Mode: Administration -> Communications -> Bluetooth -> [Config](class_config.md) PAN mode -> Router / Bridged

**CM5P, T650p**

BT-PAN mode setting manually could be done via the Base Control (Manager) Application:

* Start Base Control (Manager) application.
* Choose connected Dock Name.
* In the "Bluetooth Settings" menu choose "Bluetooth PAN Mode".
* Choose Router or Bridged.

Configuring BT FF base for bridging/routing mode is described in [Appendix K: BT FF Base Configuration].


### Pairing V240m, V400m

Secure Pairing:

* While the handset is docked on a base, the BT pairing can be done by exchanging the BT link key via the USB back-channel. After docking the handset to the base, the pairing is happening automatically once triggered by the handset.
* Multiple Handsets, Multiple Bases – Up to 7 handsets can be paired to a single base. A single handset can be paired with multiple bases.

Pairing methods:

* Pairing with CCP: please refer to [Base Pairing using CCP].
* Pairing via API: please refer to [Base Pairing via APIs].
* Pairing via the System Mode: open the System Mode / Administration / Communications / Bluetooth / Devices.

Even if paired against multiple bases, a handset can be connected to a single base only at a time.


### Pairing CM5P, T650p

Pairing is accomplished with the Base Control (Manager) Application

**BT Pairing procedure**



* Launch the Base Control Application from the Android app tray on the Terminal
* Select "Pair a new Dock" from the main app screen and follow instructions to pair
    * Screen 1: Press the (sysmode) button on the Base and verify that the blue light on the side is blinking (click OK)
    * Screen 2: On the next screen use the camera to align the rectangle over the lights on the side of the Base while the device (Terminal) lays on its side (click OK)
    * Screen 3:
        * Please frame the lights on the Base in the red rectangle (until aligned)
        * Please hold still (when aligned)
        * Starting pairing (when BT numeric pairing code reception in progress)
            * At this stage, the LEDs will blink in a sequence to transmit the numerical comparison passkey to the Base Control Application, which will verify if they match the numbers for the Bluetooth stack on the Terminal. If there is a match, the devices - Base and Terminal - will be paired; otherwise, the pairing will be rejected.
    * Screen 4: Please hold the (sysmode) button on the dock for 3 seconds
    * Screen 5: Complete. Paired Successfully

**Transitions between docked and undocked states**

 When using BT (all profiles) connections, the connection is maintained during dock/undock.

**Multiple Terminal, Multiple Bases**

 Up to 6 Terminals can be paired to a single Base. A Terminal handset can be paired with up to multiple Bases.

Even if paired against multiple Bases, a Terminal can be connected to only a single Base at a time. There are no specific rules or algorithms in terms of which previously paired Base a Terminal will try to connect. Base selection is done using standard Android BT device selection methods.


### Roaming V240m, V400m

Leaving / Entering base radio area: When leaving the coverage area of base applications will see a link-down event or can also watch the radio signal strength. At this point, applications can either warn the user or try connecting to another paired base.


### Roaming CM5P, T650p

**Leaving / Entering Base radio area**

 Android Terminals use a Captive Portal check to verify internet connectivity status. The Captive Portal check is triggered each time a new connection is made by the Terminal. When leaving the coverage area of a Base, the Terminal will attempt to reestablish a data connection representing lower priority options, such as Wi-Fi or Cellular, if configured on the Terminal and present in the environment. When returning to the Base coverage area, the Terminal will again attempt to re-establish the BT connection to the Base.

**Base Loss of Data Connectivity Examples**

 To help illustrate the connectivity behavior of the Terminal, including scenarios where the Base loses and eventually restores its internet connectivity, refer to the examples below. In each case, the Base mode is configured for Bridged Mode.


| Initial Condition  | Setup  | Steps/Results  |
|  -------- | -------- | -------- |
| Base with Ethernet Cable Connected; 

 Terminal BT paired to Base.  | Scenario 1: 


* Terminal has Cellular SIM. 
* Terminal connected to Wi-Fi (same router / connection as physical cable connected to Base). 
* Ethernet cable connected to Base. 
* Bluetooth enabled. 
* Terminal not sitting on Base. 

 | 

1. Terminal paired to Base via Base Control app and the Base Ethernet cable connected, data (Ethernet) is provided to the Terminal via BT-PAN profile. 
2. Ethernet cable is removed from Base (or data lost) = Terminal falls back to 4G and shows Wi-Fi icon in Android notification bar with an "x". 

    * With Terminal's Wi-Fi connected to the same router as physical cable connected to base and both Ethernet and Wi-Fi go through same gateway for which No Internet Access is detected for Ethernet, hence Android Connectivity Manager on the Terminal switches from BT-PAN/Ethernet to Cellular data. 
3. Reconnect Ethernet cable to Base = Terminal switches to BT-PAN/Ethernet. 

 |
| Scenario 2: 


* Terminal has Cellular SIM. 
* Terminal connected to Wi-Fi (using independent backhaul relative to Ethernet cable). 
* Ethernet cable connected to Base. 
* Bluetooth enabled. 
* Terminal not sitting on Base. 

 | 

1. Terminal paired to Base via Base Control app and the Base Ethernet cable connected, data (Ethernet) is provided to the Terminal via BT-PAN profile. 
2. Ethernet cable is removed from Base (or data lost) = Terminal falls back to Wi-Fi. 

    * With Terminal's Wi-Fi not from the same router / connection (i.e. independent backhaul), hence Android Connectivity Manager on the Terminal switches from BT-PAN/Ethernet to Wi-Fi data. 
3. Reconnect Ethernet cable to Base = Terminal switches to BT-PAN/Ethernet. 

 |
| Scenario 3: 


* Terminal has Cellular SIM. 
* Wi-Fi disconnected. 
* Ethernet cable connected to Base. 
* Bluetooth enabled. 
* Terminal not sitting on Base. 

 | 

1. Terminal paired to Base via Base Control app and the Base Ethernet cable connected, data (Ethernet) is provided to the Terminal via BT-PAN profile. 
2. Ethernet cable is removed from Base (or data lost) = Terminal falls back to Cellular. 
3. Connect Wi-Fi = Terminal switches to Wi-Fi when Wi-Fi is not from the same router / connection (i.e. independent backhaul). Here, priority-wise, Wi-Fi has higher priority than Cellular. If Wi-Fi is from the same router / connection, then the Terminal would remain on Cellular. 
4. Reconnect Ethernet cable to Base = Terminal switches to BT-PAN/Ethernet. 

 |
| Base with Ethernet Cable Disconnected (or data lost)  | Scenario 1: 

* Terminal has Cellular SIM. 
* Terminal connected to Wi-Fi (same router / connection as physical cable connected to Base). 
* Ethernet cable NOT connected to Base (or data lost). 
* Bluetooth enabled. 
* Terminal not sitting on Base. 


 | 

1. Pair Terminal to Base, which has Ethernet cable disconnected (or data lost) = Terminal uses Wi-Fi 
2. Connect Ethernet cable to base = Terminal remains on Wi-Fi 

    * In Bridge Mode without cable connected to base (or data lost), whenever the Terminal starts BT-PAN, an IP is not getting assigned to the BT-PAN interface. 
    * As a result, without IP address, the Terminal Android Connectivity Manager will not be able to validate BT-PAN interface for internet connectivity, and will avoid the BT-PAN connection 
3. With cable connected and once Base is rebooted, Bridge Mode gets created and valid IP address gets assigned to both Base and Terminal (BT-PAN client) 

    * Connectivity switches from Wi-Fi to BT-PAN/Ethernet on Terminal. 

 |



### Usage scenarios

**V240m, V400m**


| Scenario  | Dock state  | ECR  | Host  | Base Mode  | Notes   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| #1: ECR and Host connected via ETH  | docked, undocked  | ETH, BT-PAN  | ETH, BT-PAN  | bridge mode  | All in the same network. ECR is able to initiate a connection only when in bridge mode.   |
| #2: ECR via USB/serial, Host via ETH  | docked, undocked  | USB/serial, BT-SPP  | ETH, BT-PAN  | router mode  | Terminal will initiate the connection to the host and this can be done in router mode.   |
| #3: ECR via USB/serial, Host via 2G/3G  | docked, undocked  | USB/Serial, BT-SPP  | 2G/3G  | router mode  |  |
| #4: ECR via USB/serial, Host via Dial-up Modem  | docked, undocked  | USB/Serial, BT-SPP  | Dial, BT-DUN  | router mode  |  |


**CM5P, T650p**


| Scenario  | Dock state  | ECR  | Host  | Base Mode  | Notes   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 1: ECR and Host connected via ETH  | docked 

undocked  | ETH 

BT-PAN  | ETH 

BT-PAN  | bridge mode  | All in the same network.

ECR is able to initiate a connection only when in bridge mode.   |
| 2: ECR via USB/serial, Host via ETH  | docked 

undocked  | USB/serial 

BT-SPP  | ETH 

BT-PAN  | router mode  | Terminal will initiate the connection to the host and this can be done in router mode.   |
| 3: ECR via USB/serial, Host via 4G/3G/2G  | docked 

undocked  | USB/serial 

BT-SPP  | 4G/3G/2G 

4G/3G/2G  | router mode  |  |



### Power Management

**V240m, V400m**



* Base: The base does not have any power management, but is running constantly in active mode.
* Handset:
    * When docked (line powered), the handset is configured to stay awake by default in the ADK PM settings.
    * When undocked, the PM settings apply and the handset can go to the configured sleep modes. For details please see [ADK Power Management](pg_syspm_users_guide.md#page-pg-syspm-users-guide).
* Wake-up Scenarios:
    * Both Bridge and router mode can wak eup the terminal:
        * Router mode is preferred mode if BT-PAN needs to be configured as a wakeup source as only packets intended for terminal will wakeup.
        * For bridge mode, all packets including any broadcast packet will wakeup the terminal;
        * Note: any activity on the ETH port will wake-up the handset via BT-PAN if Bluetooth is configured as wake up source (disabled by default).
    * BT-SPP: Incoming ECR request can wake up the handset.
    * Docking the handset will wake up the handset.
    * Under certain conditions, the base can wake up the handset from ADK sleep/deep-sleep modes, but not from ADK hibernate:
        * If automated wakeup is not possible, the handset can wake up via keypress manually, e.g. before sending messages from ECR press a key to wake up the terminal and be ready to receive ECR messages.

**CM5P, T650p**



* Base: The base does not have any power management, but is running constantly in active mode.
* Terminal:
    * When docked, the Terminal will not enter deep sleep because of the charge supply provided by the Base.
    * When undocked, the Terminal settings apply and the device can enter low power and deep sleep modes.
* Wake-up Scenarios: The default Android networking will allow the Terminal to still receive data as long as the data connection is up. It is up to each Android application on the terminal to wake up the screen.
* Routing Preferences
    * When docked or undocked: Base Ethernet via BT-PAN connection is preferred
    * When an outside range of Base radio signal: Fallback to available comms based on default priority settings, configuration, and availability in the environment:
        * Highest priority - unmetered data: Wi-Fi
        * Next highest priority - metered data: Cellular
            * 4G then 3G then 2G


# Programming and ADK Integration

This section provides setup of communication profiles and pairing preferences with examples using ADK components.


## Communication

All communication profiles are described in the [ADK-COM Programmer's Guide](pg_com_users_guide.md#page-pg-com-users-guide).

The guide and examples on how to apply them on the Base described below:

* [Network and Connection Profile examples for BT-PAN, BT-SPP, BT-DUN]
* Base Pairing using CCP
* Base Pairing via APIs
* Routing Preferences


### Network and Connection Profile examples for BT-PAN, BT-SPP, BT-DUN

**BT-PAN**



```
<CONNECTION_PROFILE>
    <CONNECTION>
        <TYPE>TCP</TYPE>
        <NETWORK>LOCAL_NET_PAN</NETWORK>
        <ADDRESS>10.10.10.10</ADDRESS>
        <PORT>80</PORT>
        <TIMEOUT>10000</TIMEOUT>
    </CONNECTION>
</CONNECTION_PROFILE>
```

LOCAL_NET_PAN.xml



```
<NETWORK_PROFILE>
    <TYPE>LAN</TYPE>
    <DEVICE_NAME>BT_PAN</DEVICE_NAME>
    <STARTUP_MODE>ON-DEMAND</STARTUP_MODE>
    <TIMEOUT>60000</TIMEOUT>
    <DHCP_ENABLED>1</DHCP_ENABLED>
    <BT_ADDR>aa:bb:cc:dd:ee:ff</BT_ADDR>
</NETWORK_PROFILE>
```

**BT-SPP**



```
<CONNECTION_PROFILE>
    <CONNECTION>
        <TYPE>RAW_SERIAL</TYPE>
        <SERIAL_PORT>BT_SPP1</SERIAL_PORT>
        <TIMEOUT>60000</TIMEOUT>
        <BAUDRATE>115200</BAUDRATE>
        <PARITY>none</PARITY>
        <DATABITS>8</DATABITS>
        <STOPBITS>1</STOPBITS>
        <FLOWCONTROL>none</FLOWCONTROL>
        <BT_ADDR>aa:bb:cc:dd:ee:ff</BT_ADDR>
    </CONNECTION>
</CONNECTION_PROFILE>
```

**BT-DUN**



```
<CONNECTION_PROFILE>
    <CONNECTION>
        <TYPE>TCP</TYPE>
        <NETWORK>PPP_MODEM_DUN</NETWORK>
        <ADDRESS>10.10.10.10</ADDRESS>
        <PORT>80</PORT>
        <TIMEOUT>1000</TIMEOUT>
    </CONNECTION>
</CONNECTION_PROFILE>
```

**PPP_MODEM_DUN.xml**



```
<NETWORK_PROFILE>
    <TYPE>MODEM</TYPE>
    <DEVICE_NAME>BT_DUN</DEVICE_NAME>
    <STARTUP_MODE>ON-DEMAND</STARTUP_MODE>
    <TIMEOUT>60000</TIMEOUT>
    <IDLE_TIMEOUT>0</IDLE_TIMEOUT>
    <AUTHENTICATION>PAP</AUTHENTICATION>
    <USERNAME>myuser</USERNAME>
    <PASSWORD>mypass</PASSWORD>
    <DIAL_NUMBER>8123456123</DIAL_NUMBER>
    <MODULATION>AUTO</MODULATION>
    <BLIND_DIALING>yes</BLIND_DIALING>
    <BT_ADDR>aa:bb:cc:dd:ee:ff</BT_ADDR>
</NETWORK_PROFILE>
```


## Base Pairing using CCP

To pair the handset with a base if the handset is docked:

* In CCP main screen go to Configuration → Network Interfaces → Bluetooth → Pair with docked base.

To pair the handset with a base if the handset is undocked (over the air):

* In CCP main screen go to Configuration → Network Interfaces → Bluetooth → Search → select device to pair with.


## Base Pairing via APIs

To pair the handset with a base if the handset is docked, execute the following function when the handset is docked to the base:



```
/** Pair a docked device (V/OS2 only)
* @param[out] mac MAC address of the device which we have paired with
* @param[out] com_errno Error code
* @return returns 0 if ok, -1 in case of error
**/
DllSpec int com_PairDockedBase(struct com_MAC *mac, enum com_ErrorCodes *com_errno);
```

To pair the handset with a base if the handset is undocked (over the air), execute:



```
/** Pair with the specified Bluetooth Device
* @param[in] bt_addr Bluetooth device address of the Device. Must have the format AA:BB:CC:DD:EE:FF.
* @param[out] com_errno Error code
* @return returns 0 if ok, -1 in case of error
**/
DllSpec int com_BTExtPair(const char *bt_addr, enum com_ErrorCodes *com_errno);
```

or



```
/** Pair with the specified Bluetooth Device
* @param[in] bt_addr Bluetooth device address of the Device. Must have the format AA:BB:CC:DD:EE:FF.
* @param[in] method Pairing Method used.
* @param[in] PIN Optional PIN string. Required if pairing method is COM_BT_PAIR_SSP_PASSKEY or COM_BT_PAIR_LEGACY (PIN must match the one specified in the web interface of the base (default is 123456))
* @param[out] com_errno Error code
* @return returns 0 if ok, -1 in case of error
**/
DllSpec int com_BTPair(const char *bt_addr, enum com_BTPairMethod method, const char *PIN, enum com_ErrorCodes *com_errno);
```

The usage of [com_BTExtPair()](libcom_8h.md#function-com-btextpair) is highly recommended.


## Routing Preferences

Default values:

* When docked: ETH is preferred
* When undocked: Wifi followed by 2G/3G followed by BT-PAN

Note that the defaults can be overwritten by ADK API:



```
/** Change priority of interfaces. The priority of the interfaces will be decided by the order.
 
* Interfaces in front will be of higher order than interfaces in the back.
* @param[in] interfaces List of interfaces
* @param[in] count Count of interfaces
* @param[out] com_errno Error code
* @return returns 0 if ok, -1 in case of error
**/
DllSpec int com_SetInterfacePriority(enum com_Interfaces interfaces[], size_t count, enum com_ErrorCodes *com_errno);
```


# Base SW Update

ADK release has a different installation package for Handset and a different package for Base:

* dl.adk-x.x.xx-xxx-vos2-engage-prod.tgz
* dl.adk-x.x.xx-xxx-vos2-base-prod.tgz

The "Base" package should be installed on the Base device. Do not install full engage package on Base.

FW Update over the BT is not recommended, but it could be used only when the handset is docked.


## Remote download

The remote download performs FW download via VHQ to the handset and then push from the handset to the base. Contact the Support Team for detailed information.

Software update via VHQ (remote download) is preferred.


## Local download via System mode and Netloader

It is possible to start Netloader on the base which will listen on all interfaces for connection.

A network download client, included with the SDK, must be installed onto a PC.


### Local download V240m, V400m

When the terminal is docked on the base, in the system mode menu (Supervisor -> Enter password -> Update) you should see the update menu, with additional 2 options:



* **Base Netloader**: this will start Netloader on the base where the package can be sent using Netloader PC app directly to the base;
* **Base/handset Netloader**: this will start Netloader on the handset where the package can be sent using Netloader PC app to the handset and update both the handset and the base at the same time. For base update, you can use the file “dl.adk-x.x.xx-xxx-vos2-base-prod.tgz”. There is also an upgrader for a base in the upgrader folder, but if not necessary you can use the first file for a clean update.


### Local download CM5P, T650p

It is possible to start Netloader on the base which will listen on all interfaces for connection.

A network download client, included with the SDK, must be installed onto a PC.



* When the terminal is docked on the base, run the "Base Control" application and choose the connected Base station name.
* In the "Base Settings" menu choose the "Software Update" item.
* Turn on "Netloader". The message "Netloader Running" should appear.

This will start Netloader on the base where the package can be sent using Netloader PC app directly to the base.


## Install SW on base using ADK-SYS API

The function is used for installing packages on dock stations (Example: V240m B-FF). The package needs to be placed in /mnt/flash/install/dl/ before API is called. In case return code is SYS_ERR_REBOOT_NEEDED reboot is required to finish instalation. 

```cpp
vfisysinfo::sysError sysBaseInstall();
```

Refer to [ADK-SYS Programmer's Guide: System Installation Functions] for more details.



# Base Configuration


## Base Configuration via the Handset's sysmode

If the Base is docked and paired with an Engage Handset (V400m, V240m, V210), then specific sysmode menus are available on the handset's sysmode to configure the base:



* the **Base Config** under the **Administration** (need to select the base name to proceed)
    * the sub-menu **Date/Time** to configure the date and time on the base
    * the sub-menu **Static IP** to configure the static IP on the base
    * the sub-menu **Unpair all handsets** to unpair all handsets that are paired to that base


# Troubleshooting & Getting Information


## Troubleshooting & Getting Information V240m, V400m


### MAC status bar

MAC status bar will display the BT signal strength. See detailed information in the ADK-MAC Programmer's Guide [Appendix: Statusbar].


### Retrieving Docked Status V240m, V400m

ADK-SYS has a property SYS_PROP_DOCKING_STATUS to obtain the docking status:



```
#include "sys/sysinfo.h"
int status;
/**< read-only, Docking status, 1:docked, 0:undocked */
sysGetPropertyInt(SYS_PROP_DOCKING_STATUS, status);
```

See detailed information in the ADK-SYS Programmer's Guide [System Property Functions].


### Retrieving Other Information from the V240m, V400m Base

ADK-SYS has the following string properties to obtain information from the connected base including:

* base serial number
* base product number
* base model ID
* base HW revision
* Base currently installed OS version
* base MAC address
* base current IPv4 and IPv6 address



```
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
```

See detailed information in the ADK-SYS Programmer's Guide [System Property Functions].


## Troubleshooting & Getting Information CM5P, T650p

Both - Engage handset and base should have the same OS release installed. Differing versions may result in the loss of ethernet and other communication channels (BT / Modem). Base OS version can be confirmed in the System mode "Information" menu under the option "Basic Base information" (menu is available if the handset is docked).


### BT/Peripheral Connection Status



* BT connection status is communicated via an icon in the Android Notification bar.
* Base Connected Status is available from the Diagnostics Application found in the Android app tray.
    * The following items are viewable: 
| Field  | Description   |
|  -------- | -------- |
| Dock status  | Current device dock status and serial number of docked station   |
| Docked base network info  | Network information from the docked station   |
| Base OS version  | OS version from docked station   |




### Retrieving Other Information from the CM5P, T650p Base

The Base Control (Manager) app home activity screen will show if there is a connected Base (Dock). Selecting that Base brings up a menu showing:

* BT Settings
* BT PAN Mode
* Base Settings
* Base Software Information
* Base Software Update
* Secure Boot Image Version
* Vault version
* U-Boot version
* Control Information Block version
* Machine Information Block version
* Linux Kernel version
* Overall RFS version
* Build Release version
* Application Manager version
* Ability to turn on console logs and send logs to the USB thumb drive
* Serial port settings

Contact the Support Team for detailed troubleshooting information.


## Logging

Base logs could be collected by VHQ. Please read the manual log collection methods below.


## Transfer Base Logs to USB stick

To transfer Base Logs to USB, the USB stick should be connected to the Base device.

**Instructions for V240m, V400m:**

* Format USB stick to FAT.
* Connect a USB stick to a Base device using an appropriate cable
* Start System Mode (see chapter [Entering System Mode] for more information).
* When System Mode login displayed, press CANCEL (or red "X" button).
* Select the "Transfer Logs to Base" option.

Logs (both - the base and the handset logs) will be copied to the USB stick. Connect USB to the laptop and copy the files.

**Instructions for CM5P, T650p:**

* Format USB stick to FAT.
* Connect a USB stick to a Base device using an appropriate cable
* Start Base Control (Manager) application
* Choose "Send Logs to USB Stick"
* Below this menu item, a status message "Log dump successful" should be displayed

Logs will be copied to the USB stick. Connect USB to the laptop and copy the files.


## System/Console Logs

To enable console logs printout on the serial port of Engage bases you will need to:

* Connect a Base to your PC and start the console application/ terminal application (Putty or similar).
* Power off the Base.
* While it's off – press the System Mode (power) button on the Base.
* Without releasing this button – power the terminal on.
* You will see the boot mode options 0-4. Depending on the OS version these will change in a cycle or you need to change them manually by pressing the sysmode button.
* To boot in mode 2:
    * If modes change in cycle, release sysmode (power) button when the mode is 2.
    * If manually changing modes, press and hold sysmode (power) button when boot mode 2 is set. This will enable console logs printout on the serial port for the corresponding session until the base is rebooted.

Console logs can be already enabled on a Base (disabled by default). If so, then logs are printed out on the serial port without booting in boot mode 2.


# Appendix


## Acronym Definitions


| Acronym  | Definitions   |
|  -------- | -------- |
| ADK  | Application Development Kit   |
| API  | Application Program Interface   |
| BT  | Bluetooth   |
| CCP  | Communication Control Panel   |
| ETH  | Ethernet   |
| UI  | User Interface   |
| OS  | Operating System   |
| PM  | Power Management   |

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100

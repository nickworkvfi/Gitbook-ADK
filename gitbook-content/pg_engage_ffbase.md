---
hidden: true
title: Engage Full Featured Base
---

### Tableof Contents

- [Preface](#sec_engage_ffbase_preface)
  - [Audience](#subsec_engage_ffbase_audience)
  - [Organization](#subsec_engage_ffbase_organization)
- [Introduction](#sec_engage_ffbase_introduction)
  - [Hardware](#sec_engage_ffbase_hw)
- [Getting Started](#sec_engage_ffbase_getting_started)
  - [Compatibility Requirements](#subsec_engage_ffbase_base_sw_update_compatibility_requirements)
  - [Handset and Base Connectivity](#sec_engage_ffbase_connectivity)
    - [Base Control Channel (docked & undocked)](#subsec_android_ffbase_docked_undocked)
    - [Base BT-PAN modes](#subsec_engage_ffbase_base_bt_pan_modes)
    - [Pairing V240m, V400m](#subsec_engage_ffbase_pairing_v240m)
    - [Pairing CM5P, T650p](#subsubsec_engage_ffbase_pairing_cmp5)
    - [Roaming V240m, V400m](#subsec_engage_ffbase_roaming_v240m)
    - [Roaming CM5P, T650p](#subsubsec_engage_ffbase_roaming_cm5p)
    - [Usage scenarios](#subsec_engage_ffbase_usage_scenarios)
    - [Power Management](#subsec_engage_ffbase_pm)
- [Programming and ADK Integration](#sec_engage_ffbase_programming)
  - [Communication](#subsec_engage_ffbase_adk_integration_communication)
    - [Network and Connection Profile examples for BT-PAN, BT-SPP, BT-DUN](#subsubsec_engage_ffbase_adk_integration_communication_profiles)
  - [Base Pairing using CCP](#subsec_engage_ffbase_adk_integration_pairing_with_ccp)
  - [Base Pairing via APIs](#subsec_engage_ffbase_adk_integration_pairing_vis_apis)
  - [Routing Preferences](#subsec_engage_ffbase_adk_integration_routing_preferences)
- [Base SW Update](#sec_engage_ffbase_base_sw_update)
  - [Remote download](#subsec_engage_ffbase_base_sw_update_remote)
  - [Local download via System mode and Netloader](#subsec_engage_ffbase_base_sw_update_local_download)
    - [Local download V240m, V400m](#subsubsec_engage_ffbase_base_sw_update_local_download_v240m)
    - [Local download CM5P, T650p](#subsubsec_engage_ffbase_base_sw_update_local_download_cm5p)
  - [Install SW on base using ADK-SYS API](#subsec_engage_ffbase_base_sw_update_api)
- [Base Configuration](#sec_engage_ffbase_base_config)
  - [Base Configuration via the Handset\'s sysmode](#subsec_engage_ffbase_base_config_vis_handset_sysmode)
- [Troubleshooting & Getting Information](#sec_engage_ffbase_troubleshooting)
  - [Troubleshooting & Getting Information V240m, V400m](#subsec_engage_ffbase_adk_integration_getting_information_v240m)
    - [MAC status bar](#subsubsec_engage_ffbase_adk_integration_getting_information_mac_status_bar_v240m)
    - [Retrieving Docked Status V240m, V400m](#subsubsec_engage_ffbase_adk_integration_getting_information_retrieving_docked_status_v240m)
    - [Retrieving Other Information from the V240m, V400m Base](#subsubsec_engage_ffbase_adk_integration_getting_information_retrieving_other_information_v240m)
  - [Troubleshooting & Getting Information CM5P, T650p](#subsec_engage_ffbase_adk_integration_getting_information_cm5p)
    - [BT/Peripheral Connection Status](#subsubsec_android_ffbase_adk_integration_getting_information_retrieving_docked_status)
    - [Retrieving Other Information from the CM5P, T650p Base](#subsubsec_android_ffbase_adk_integration_getting_information_retrieving_other_information)
  - [Logging](#subsec_engage_ffbase_logging)
  - [Transfer Base Logs to USB stick](#subsubsec_engage_ffbase_logs_to_usb)
  - [System/Console Logs](#subsec_engage_ffbase_console_logs)
- [Appendix](#sec_engage_ffbase_appendix)
  - [Acronym Definitions](#subsec_engage_ffbase_acronym_definitions)

# Preface <a href="#sec_engage_ffbase_preface" id="sec_engage_ffbase_preface"></a>

This guide is for programmers and developers who want to understand how to configure, maintain and install software on a Base device.

## Audience <a href="#subsec_engage_ffbase_audience" id="subsec_engage_ffbase_audience"></a>

This document is intended for programmers and users who maintain and are working with Base terminals.

## Organization <a href="#subsec_engage_ffbase_organization" id="subsec_engage_ffbase_organization"></a>

This guide is organized as follows:

[Introduction](#sec_engage_ffbase_introduction). Provides an overview of the Full Featured Base interfaces.

[Getting Started](#sec_engage_ffbase_getting_started). Provides FF Base connectivity options.

[Programming and ADK Integration](#sec_engage_ffbase_programming). Provides setup of communication profiles and pairing preferences with examples using ADK components.

[Base SW Update](#sec_engage_ffbase_base_sw_update). Provides an instruction on Base SW update.

[Base Configuration](#sec_engage_ffbase_base_config). Provides an overview of configuration options of the FF base.

[Troubleshooting & Getting Information](#sec_engage_ffbase_troubleshooting). Gives solutions for possible issues and provides on how to get information from the base.

[Appendix](#sec_engage_ffbase_appendix). Acronym Definitions.

# Introduction <a href="#sec_engage_ffbase_introduction" id="sec_engage_ffbase_introduction"></a>

The \"Base\" is an Engage platform device running Verifone software, including VHQ agent, to support management via the VHQ server. The Base can come in two versions according to the device model:

- Charging Base;
- Full-Featured (FF) Base.

The Charging Base supports charging only with no communication functionality. The charging base has no SW support and only an adaptor in the base. The FF Base supports several connectivity options and provides a serial connection for peripherals (like ECR, check reader, barcode reader, etc.).

See detailed description in:

- <a href="pg_com_users_guide.md">ADK-COM Component</a> for using profiles and setting up connections;
- <a href="pg_sysinfo_users_guide.md">ADK-SYS Component</a> to retrieve information;
- <a href="pg_sysmode_fltk.md">System mode</a> and <a href="pg_ccp_users_guide.md">CCP UI</a> for access by technicians (only Engage handsets).

## Hardware <a href="#sec_engage_ffbase_hw" id="sec_engage_ffbase_hw"></a>

**Base External Connectors**

| Interface | Connector | Notes |
|----|----|----|
| <p>USB-serial</p> | <p>micro USB</p> | <p>Internally this is a USB-to-serial converter. Only USB-Serial gadget supported</p> |
| <p>USB-Host</p> | <p>USB-A</p> | <p>Default configured to Host mode. Example: a Cheque reader which would expose as a USB-Serial device. Support for transfer of Base logs to USB stick connected to this port</p> |
| <p>Serial</p> | <p>RJ45</p> |  |
| <p>Ethernet</p> | <p>RJ45</p> |  |
| <p>Dial-up Modem</p> | <p>RJ11</p> | <p>Not active on T650p and CM5P</p> |
| <p>Handset Docking</p> | <p>N/A</p> | <p>Handset docking achieved through BT pairing</p> |
| <p>Power Supply</p> |  |  |

{% hint style="info" %}
see <a href="pg_com_users_guide.md#sec_com_appendix_d_devices">Appendix D: Devices</a> for detailed device-specific information.
{% endhint %}

**LED indications**

- 1st Light (white) Power indication
  - LED is off when AP is powered down.
  - LED is blinking when AP is booting.
  - LED is steady-on when AP finishes booting and is ready to accept incoming connections.
- 2nd Light (blue) BT communication indication
  - LED is off when no Bluetooth connection is present.
  - LED is blinking when a Bluetooth client is connecting to the AP.
  - LED is steady-on when at least one Bluetooth client is connected to the AP.
- 3rd Light (white) Modem Indication
  - LED is blinking when modem data transmission.

# Getting Started <a href="#sec_engage_ffbase_getting_started" id="sec_engage_ffbase_getting_started"></a>

## Compatibility Requirements <a href="#subsec_engage_ffbase_base_sw_update_compatibility_requirements" id="subsec_engage_ffbase_base_sw_update_compatibility_requirements"></a>

Compatibility defined as the Base is designed to accept the Terminal form factor when docked

- V240m (compatible with V240m full feature or charging base)
- V400m (compatible with V400m full feature or charging base)
- Trinity T650p (compatible with the Trinity full feature base)
- CM5P (compatible with the Carbon Mobile 5 full feature base)

## Handset and Base Connectivity <a href="#sec_engage_ffbase_connectivity" id="sec_engage_ffbase_connectivity"></a>

There is no physical docking connector between the Terminal and Base. Docking is accomplished via BT pairing and communication is accomplished between the Terminal and Base via BT profile protocols.

The Base holds a BT connection to the Terminal if the Terminal was previously paired and connected on a specific BT profile.

Different BT profiles are used to support the external connectors on the base:

| BT Profile | Connector |
|----|----|
| <p>BT-PAN</p> | <p>ETH</p> |
| <p>BT-SPP</p> | <p>Serial (RJ45), USB-Serial (microUSB), USB-Host (USB-A)</p> |
| <p>BT-DUN</p> | <p>Dial-up Modem (V240m and V400m only)</p> |

### Base Control Channel (docked & undocked) <a href="#subsec_android_ffbase_docked_undocked" id="subsec_android_ffbase_docked_undocked"></a>

**V240m, V400m**

The handset maintains a separate base control channel. When docked the base ETH interface is used through the internal USB link (as it would be an internal / native eth interface). When un-docked, the base eth interface can still be used through the BT-PAN profile.

{% hint style="info" %}
The same is true for the other interfaces (serial, modem).
{% endhint %}

- When docked, the communication between the base and the handset will be via the USB back-channel.
- When undocked, the base holds a BT connection to the Handset if Handset was previously paired and connected on a specific BT profile.

**Transitions between docked and undocked states**

There is a difference in how the connection with a base is supported during docking and undocking the handset from the base according to the connection type between the handset and the base:

- If the BT connection (all profiles) is used, then the connection is maintained during device dock/undock.
- If ETH, USB, Serial, or other connection is used, then it works in docked mode only. The connection will be broken when undocking.

As the ETH connections are faster than the BT connections, they are more recommended for larger downloads instead of BT connections.

**CM5P, T650p**

The Terminal maintains a separate Base control channel. The Base control app will connect to this via Bluetooth SPP. When multiple Terminals are connected to the Base, whichever device selects the Terminal in the app will be allowed to connect to this channel. Only one Terminal at a time can connect to this channel.

The control channel supports the following internal operations:

- Configuration: switch between router/bridge mode;
- Get base SW Version information;
- Serial port setup;
- etc.

### Base BT-PAN modes <a href="#subsec_engage_ffbase_base_bt_pan_modes" id="subsec_engage_ffbase_base_bt_pan_modes"></a>

BT-PAN profile has 2 modes:

- Router mode: terminal will get a local IP;
- Bridge mode: terminal can be reached from outside via incoming messages.

**V240m, V400m**

BT-PAN mode setting manually could be done via the CCP application or System Mode:

- CPP: Configuration -\> Network Interface -\> Bluetooth -\> Base network mode -\> Router/Bridge
- System Mode: Administration -\> Communications -\> Bluetooth -\> <a href="class_config.md">Config</a> PAN mode -\> Router / Bridged

**CM5P, T650p**

BT-PAN mode setting manually could be done via the Base Control (Manager) Application:

- Start Base Control (Manager) application.
- Choose connected Dock Name.
- In the \"Bluetooth Settings\" menu choose \"Bluetooth PAN Mode\".
- Choose Router or Bridged.

{% hint style="info" %}
Configuring BT FF base for bridging/routing mode is described in <a href="pg_com_users_guide.md#sec_com_appendix_k_ff_base_configuration">Appendix K: BT FF Base Configuration</a>.
{% endhint %}

### Pairing V240m, V400m <a href="#subsec_engage_ffbase_pairing_v240m" id="subsec_engage_ffbase_pairing_v240m"></a>

Secure Pairing:

- While the handset is docked on a base, the BT pairing can be done by exchanging the BT link key via the USB back-channel. After docking the handset to the base, the pairing is happening automatically once triggered by the handset.
- Multiple Handsets, Multiple Bases -- Up to 7 handsets can be paired to a single base. A single handset can be paired with multiple bases.

Pairing methods:

- Pairing with CCP: please refer to [Base Pairing using CCP](#subsec_engage_ffbase_adk_integration_pairing_with_ccp).
- Pairing via API: please refer to [Base Pairing via APIs](#subsec_engage_ffbase_adk_integration_pairing_vis_apis).
- Pairing via the System Mode: open the System Mode / Administration / Communications / Bluetooth / Devices.

{% hint style="info" %}
Even if paired against multiple bases, a handset can be connected to a single base only at a time.
{% endhint %}

### Pairing CM5P, T650p <a href="#subsubsec_engage_ffbase_pairing_cmp5" id="subsubsec_engage_ffbase_pairing_cmp5"></a>

Pairing is accomplished with the Base Control (Manager) Application

**BT Pairing procedure**

- Launch the Base Control Application from the Android app tray on the Terminal
- Select \"Pair a new Dock\" from the main app screen and follow instructions to pair
  - Screen 1: Press the (sysmode) button on the Base and verify that the blue light on the side is blinking (click OK)
  - Screen 2: On the next screen use the camera to align the rectangle over the lights on the side of the Base while the device (Terminal) lays on its side (click OK)
  - Screen 3:
    - Please frame the lights on the Base in the red rectangle (until aligned)
    - Please hold still (when aligned)
    - Starting pairing (when BT numeric pairing code reception in progress)
      - At this stage, the LEDs will blink in a sequence to transmit the numerical comparison passkey to the Base Control Application, which will verify if they match the numbers for the Bluetooth stack on the Terminal. If there is a match, the devices - Base and Terminal - will be paired; otherwise, the pairing will be rejected.
  - Screen 4: Please hold the (sysmode) button on the dock for 3 seconds
  - Screen 5: Complete. Paired Successfully

**Transitions between docked and undocked states**
When using BT (all profiles) connections, the connection is maintained during dock/undock.

**Multiple Terminal, Multiple Bases**
Up to 6 Terminals can be paired to a single Base. A Terminal handset can be paired with up to multiple Bases.

{% hint style="info" %}
Even if paired against multiple Bases, a Terminal can be connected to only a single Base at a time. There are no specific rules or algorithms in terms of which previously paired Base a Terminal will try to connect. Base selection is done using standard Android BT device selection methods.
{% endhint %}

### Roaming V240m, V400m <a href="#subsec_engage_ffbase_roaming_v240m" id="subsec_engage_ffbase_roaming_v240m"></a>

Leaving / Entering base radio area: When leaving the coverage area of base applications will see a link-down event or can also watch the radio signal strength. At this point, applications can either warn the user or try connecting to another paired base.

### Roaming CM5P, T650p <a href="#subsubsec_engage_ffbase_roaming_cm5p" id="subsubsec_engage_ffbase_roaming_cm5p"></a>

**Leaving / Entering Base radio area**
Android Terminals use a Captive Portal check to verify internet connectivity status. The Captive Portal check is triggered each time a new connection is made by the Terminal. When leaving the coverage area of a Base, the Terminal will attempt to reestablish a data connection representing lower priority options, such as Wi-Fi or Cellular, if configured on the Terminal and present in the environment. When returning to the Base coverage area, the Terminal will again attempt to re-establish the BT connection to the Base.

**Base Loss of Data Connectivity Examples**
To help illustrate the connectivity behavior of the Terminal, including scenarios where the Base loses and eventually restores its internet connectivity, refer to the examples below. In each case, the Base mode is configured for Bridged Mode.

[TABLE]

### Usage scenarios <a href="#subsec_engage_ffbase_usage_scenarios" id="subsec_engage_ffbase_usage_scenarios"></a>

**V240m, V400m**

| Scenario | Dock state | ECR | Host | Base Mode | Notes |
|----|----|----|----|----|----|
| <p>#1: ECR and Host connected via ETH</p> | <p>docked, undocked</p> | <p>ETH, BT-PAN</p> | <p>ETH, BT-PAN</p> | <p>bridge mode</p> | <p>All in the same network. ECR is able to initiate a connection only when in bridge mode.</p> |
| <p>#2: ECR via USB/serial, Host via ETH</p> | <p>docked, undocked</p> | <p>USB/serial, BT-SPP</p> | <p>ETH, BT-PAN</p> | <p>router mode</p> | <p>Terminal will initiate the connection to the host and this can be done in router mode.</p> |
| <p>#3: ECR via USB/serial, Host via 2G/3G</p> | <p>docked, undocked</p> | <p>USB/Serial, BT-SPP</p> | <p>2G/3G</p> | <p>router mode</p> |  |
| <p>#4: ECR via USB/serial, Host via Dial-up Modem</p> | <p>docked, undocked</p> | <p>USB/Serial, BT-SPP</p> | <p>Dial, BT-DUN</p> | <p>router mode</p> |  |

**CM5P, T650p**

| Scenario | Dock state | ECR | Host | Base Mode | Notes |
|----|----|----|----|----|----|
| <p>1: ECR and Host connected via ETH</p> | <p>docked<br/>undocked</p> | <p>ETH<br/>BT-PAN</p> | <p>ETH<br/>BT-PAN</p> | <p>bridge mode</p> | <p>All in the same network.<br/>ECR is able to initiate a connection only when in bridge mode.</p> |
| <p>2: ECR via USB/serial, Host via ETH</p> | <p>docked<br/>undocked</p> | <p>USB/serial<br/>BT-SPP</p> | <p>ETH<br/>BT-PAN</p> | <p>router mode</p> | <p>Terminal will initiate the connection to the host and this can be done in router mode.</p> |
| <p>3: ECR via USB/serial, Host via 4G/3G/2G</p> | <p>docked<br/>undocked</p> | <p>USB/serial<br/>BT-SPP</p> | <p>4G/3G/2G<br/>4G/3G/2G</p> | <p>router mode</p> |  |

### Power Management <a href="#subsec_engage_ffbase_pm" id="subsec_engage_ffbase_pm"></a>

**V240m, V400m**

- Base: The base does not have any power management, but is running constantly in active mode.
- Handset:
  - When docked (line powered), the handset is configured to stay awake by default in the ADK PM settings.
  - When undocked, the PM settings apply and the handset can go to the configured sleep modes. For details please see <a href="pg_syspm_users_guide.md">ADK Power Management</a>.
- Wake-up Scenarios:
  - Both Bridge and router mode can wak eup the terminal:
    - Router mode is preferred mode if BT-PAN needs to be configured as a wakeup source as only packets intended for terminal will wakeup.
    - For bridge mode, all packets including any broadcast packet will wakeup the terminal;
    - Note: any activity on the ETH port will wake-up the handset via BT-PAN if Bluetooth is configured as wake up source (disabled by default).
  - BT-SPP: Incoming ECR request can wake up the handset.
  - Docking the handset will wake up the handset.
  - Under certain conditions, the base can wake up the handset from ADK sleep/deep-sleep modes, but not from ADK hibernate:
    - If automated wakeup is not possible, the handset can wake up via keypress manually, e.g. before sending messages from ECR press a key to wake up the terminal and be ready to receive ECR messages.

**CM5P, T650p**

- Base: The base does not have any power management, but is running constantly in active mode.
- Terminal:
  - When docked, the Terminal will not enter deep sleep because of the charge supply provided by the Base.
  - When undocked, the Terminal settings apply and the device can enter low power and deep sleep modes.
- Wake-up Scenarios: The default Android networking will allow the Terminal to still receive data as long as the data connection is up. It is up to each Android application on the terminal to wake up the screen.
- Routing Preferences
  - When docked or undocked: Base Ethernet via BT-PAN connection is preferred
  - When an outside range of Base radio signal: Fallback to available comms based on default priority settings, configuration, and availability in the environment:
    - Highest priority - unmetered data: Wi-Fi
    - Next highest priority - metered data: Cellular
      - 4G then 3G then 2G

# Programming and ADK Integration <a href="#sec_engage_ffbase_programming" id="sec_engage_ffbase_programming"></a>

This section provides setup of communication profiles and pairing preferences with examples using ADK components.

## Communication <a href="#subsec_engage_ffbase_adk_integration_communication" id="subsec_engage_ffbase_adk_integration_communication"></a>

All communication profiles are described in the <a href="pg_com_users_guide.md">ADK-COM Programmer's Guide</a>.

The guide and examples on how to apply them on the Base described below:

- [Network and Connection Profile examples for BT-PAN, BT-SPP, BT-DUN](#subsubsec_engage_ffbase_adk_integration_communication_profiles)
- Base Pairing using CCP
- Base Pairing via APIs
- Routing Preferences

### Network and Connection Profile examples for BT-PAN, BT-SPP, BT-DUN <a href="#subsubsec_engage_ffbase_adk_integration_communication_profiles" id="subsubsec_engage_ffbase_adk_integration_communication_profiles"></a>

**BT-PAN**

``` fragment
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

``` fragment
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

``` fragment
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

``` fragment
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

``` fragment
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

## Base Pairing using CCP <a href="#subsec_engage_ffbase_adk_integration_pairing_with_ccp" id="subsec_engage_ffbase_adk_integration_pairing_with_ccp"></a>

To pair the handset with a base if the handset is docked:

- In CCP main screen go to Configuration → Network Interfaces → Bluetooth → Pair with docked base.

To pair the handset with a base if the handset is undocked (over the air):

- In CCP main screen go to Configuration → Network Interfaces → Bluetooth → Search → select device to pair with.

## Base Pairing via APIs <a href="#subsec_engage_ffbase_adk_integration_pairing_vis_apis" id="subsec_engage_ffbase_adk_integration_pairing_vis_apis"></a>

To pair the handset with a base if the handset is docked, execute the following function when the handset is docked to the base:

``` fragment
/** Pair a docked device (V/OS2 only)
* @param[out] mac MAC address of the device which we have paired with
* @param[out] com_errno Error code
* @return returns 0 if ok, -1 in case of error
**/
DllSpec int com_PairDockedBase(struct com_MAC *mac, enum com_ErrorCodes *com_errno);
```

To pair the handset with a base if the handset is undocked (over the air), execute:

``` fragment
/** Pair with the specified Bluetooth Device
* @param[in] bt_addr Bluetooth device address of the Device. Must have the format AA:BB:CC:DD:EE:FF.
* @param[out] com_errno Error code
* @return returns 0 if ok, -1 in case of error
**/
DllSpec int com_BTExtPair(const char *bt_addr, enum com_ErrorCodes *com_errno);
```

or

``` fragment
/** Pair with the specified Bluetooth Device
* @param[in] bt_addr Bluetooth device address of the Device. Must have the format AA:BB:CC:DD:EE:FF.
* @param[in] method Pairing Method used.
* @param[in] PIN Optional PIN string. Required if pairing method is COM_BT_PAIR_SSP_PASSKEY or COM_BT_PAIR_LEGACY (PIN must match the one specified in the web interface of the base (default is 123456))
* @param[out] com_errno Error code
* @return returns 0 if ok, -1 in case of error
**/
DllSpec int com_BTPair(const char *bt_addr, enum com_BTPairMethod method, const char *PIN, enum com_ErrorCodes *com_errno);
```

{% hint style="info" %}
The usage of <a href="libcom_8h.md#a50ab27fff8e9fb6eb6fd6644758ad217">com_BTExtPair()</a> is highly recommended.
{% endhint %}

## Routing Preferences <a href="#subsec_engage_ffbase_adk_integration_routing_preferences" id="subsec_engage_ffbase_adk_integration_routing_preferences"></a>

Default values:

- When docked: ETH is preferred
- When undocked: Wifi followed by 2G/3G followed by BT-PAN

Note that the defaults can be overwritten by ADK API:

``` fragment
/** Change priority of interfaces. The priority of the interfaces will be decided by the order.
 
* Interfaces in front will be of higher order than interfaces in the back.
* @param[in] interfaces List of interfaces
* @param[in] count Count of interfaces
* @param[out] com_errno Error code
* @return returns 0 if ok, -1 in case of error
**/
DllSpec int com_SetInterfacePriority(enum com_Interfaces interfaces[], size_t count, enum com_ErrorCodes *com_errno);
```

# Base SW Update <a href="#sec_engage_ffbase_base_sw_update" id="sec_engage_ffbase_base_sw_update"></a>

ADK release has a different installation package for Handset and a different package for Base:

- dl.adk-x.x.xx-xxx-vos2-engage-prod.tgz
- dl.adk-x.x.xx-xxx-vos2-base-prod.tgz

The \"Base\" package should be installed on the Base device.

### Warning

Do not install full engage package on Base.


{% hint style="info" %}
FW Update over the BT is not recommended, but it could be used only when the handset is docked.
{% endhint %}

## Remote download <a href="#subsec_engage_ffbase_base_sw_update_remote" id="subsec_engage_ffbase_base_sw_update_remote"></a>

The remote download performs FW download via VHQ to the handset and then push from the handset to the base. Contact the Support Team for detailed information.

{% hint style="info" %}
Software update via VHQ (remote download) is preferred.
{% endhint %}

## Local download via System mode and Netloader <a href="#subsec_engage_ffbase_base_sw_update_local_download" id="subsec_engage_ffbase_base_sw_update_local_download"></a>

It is possible to start Netloader on the base which will listen on all interfaces for connection.

{% hint style="info" %}
A network download client, included with the SDK, must be installed onto a PC.
{% endhint %}

### Local download V240m, V400m <a href="#subsubsec_engage_ffbase_base_sw_update_local_download_v240m" id="subsubsec_engage_ffbase_base_sw_update_local_download_v240m"></a>

When the terminal is docked on the base, in the system mode menu (Supervisor -\> Enter password -\> Update) you should see the update menu, with additional 2 options:

- **Base Netloader**: this will start Netloader on the base where the package can be sent using Netloader PC app directly to the base;
- **Base/handset Netloader**: this will start Netloader on the handset where the package can be sent using Netloader PC app to the handset and update both the handset and the base at the same time. For base update, you can use the file "dl.adk-x.x.xx-xxx-vos2-base-prod.tgz". There is also an upgrader for a base in the upgrader folder, but if not necessary you can use the first file for a clean update.

### Local download CM5P, T650p <a href="#subsubsec_engage_ffbase_base_sw_update_local_download_cm5p" id="subsubsec_engage_ffbase_base_sw_update_local_download_cm5p"></a>

It is possible to start Netloader on the base which will listen on all interfaces for connection.

{% hint style="info" %}
A network download client, included with the SDK, must be installed onto a PC.
{% endhint %}

- When the terminal is docked on the base, run the \"Base Control\" application and choose the connected Base station name.
- In the \"Base Settings\" menu choose the \"Software Update\" item.
- Turn on \"Netloader\". The message \"Netloader Running\" should appear.

This will start Netloader on the base where the package can be sent using Netloader PC app directly to the base.

## Install SW on base using ADK-SYS API <a href="#subsec_engage_ffbase_base_sw_update_api" id="subsec_engage_ffbase_base_sw_update_api"></a>

The function is used for installing packages on dock stations (Example: V240m B-FF). The package needs to be placed in /mnt/flash/install/dl/ before API is called. In case return code is SYS_ERR_REBOOT_NEEDED reboot is required to finish instalation.

``` cpp
vfisysinfo::sysError sysBaseInstall();
```

{% hint style="info" %}
Refer to <a href="pg_sysinfo_users_guide.md#subsubsec_sysinfo_sys_base_install">ADK-SYS Programmer's Guide: System Installation Functions</a> for more details.
{% endhint %}

# Base Configuration <a href="#sec_engage_ffbase_base_config" id="sec_engage_ffbase_base_config"></a>

## Base Configuration via the Handset\'s sysmode <a href="#subsec_engage_ffbase_base_config_vis_handset_sysmode" id="subsec_engage_ffbase_base_config_vis_handset_sysmode"></a>

If the Base is docked and paired with an Engage Handset (V400m, V240m, V210), then specific sysmode menus are available on the handset\'s sysmode to configure the base:

- the **Base Config** under the **Administration** (need to select the base name to proceed)
  - the sub-menu **Date/Time** to configure the date and time on the base
  - the sub-menu **Static IP** to configure the static IP on the base
  - the sub-menu **Unpair all handsets** to unpair all handsets that are paired to that base

# Troubleshooting & Getting Information <a href="#sec_engage_ffbase_troubleshooting" id="sec_engage_ffbase_troubleshooting"></a>

## Troubleshooting & Getting Information V240m, V400m <a href="#subsec_engage_ffbase_adk_integration_getting_information_v240m" id="subsec_engage_ffbase_adk_integration_getting_information_v240m"></a>

### MAC status bar <a href="#subsubsec_engage_ffbase_adk_integration_getting_information_mac_status_bar_v240m" id="subsubsec_engage_ffbase_adk_integration_getting_information_mac_status_bar_v240m"></a>

MAC status bar will display the BT signal strength. See detailed information in the ADK-MAC Programmer\'s Guide <a href="pg_mac_users_guide.md#sec_mac_statusbar">Appendix: Statusbar</a>.

### Retrieving Docked Status V240m, V400m <a href="#subsubsec_engage_ffbase_adk_integration_getting_information_retrieving_docked_status_v240m" id="subsubsec_engage_ffbase_adk_integration_getting_information_retrieving_docked_status_v240m"></a>

ADK-SYS has a property SYS_PROP_DOCKING_STATUS to obtain the docking status:

``` fragment
#include "sys/sysinfo.h"
int status;
/**< read-only, Docking status, 1:docked, 0:undocked */
sysGetPropertyInt(SYS_PROP_DOCKING_STATUS, status);
```

See detailed information in the ADK-SYS Programmer\'s Guide <a href="pg_sysinfo_users_guide.md#subsec_sysinfo_system_property_functions">System Property Functions</a>.

### Retrieving Other Information from the V240m, V400m Base <a href="#subsubsec_engage_ffbase_adk_integration_getting_information_retrieving_other_information_v240m" id="subsubsec_engage_ffbase_adk_integration_getting_information_retrieving_other_information_v240m"></a>

ADK-SYS has the following string properties to obtain information from the connected base including:

- base serial number
- base product number
- base model ID
- base HW revision
- Base currently installed OS version
- base MAC address
- base current IPv4 and IPv6 address

``` fragment
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

See detailed information in the ADK-SYS Programmer\'s Guide <a href="pg_sysinfo_users_guide.md#subsec_sysinfo_system_property_functions">System Property Functions</a>.

## Troubleshooting & Getting Information CM5P, T650p <a href="#subsec_engage_ffbase_adk_integration_getting_information_cm5p" id="subsec_engage_ffbase_adk_integration_getting_information_cm5p"></a>

### Warning

Both - Engage handset and base should have the same OS release installed. Differing versions may result in the loss of ethernet and other communication channels (BT / Modem). Base OS version can be confirmed in the System mode \"Information\" menu under the option \"Basic Base information\" (menu is available if the handset is docked).

### BT/Peripheral Connection Status <a href="#subsubsec_android_ffbase_adk_integration_getting_information_retrieving_docked_status" id="subsubsec_android_ffbase_adk_integration_getting_information_retrieving_docked_status"></a>

- BT connection status is communicated via an icon in the Android Notification bar.
- Base Connected Status is available from the Diagnostics Application found in the Android app tray.
  - The following items are viewable:
    | Field | Description |
    |----|----|
    | <p>Dock status</p> | <p>Current device dock status and serial number of docked station</p> |
    | <p>Docked base network info</p> | <p>Network information from the docked station</p> |
    | <p>Base OS version</p> | <p>OS version from docked station</p> |

### Retrieving Other Information from the CM5P, T650p Base <a href="#subsubsec_android_ffbase_adk_integration_getting_information_retrieving_other_information" id="subsubsec_android_ffbase_adk_integration_getting_information_retrieving_other_information"></a>

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

{% hint style="info" %}
Contact the Support Team for detailed troubleshooting information.
{% endhint %}

## Logging <a href="#subsec_engage_ffbase_logging" id="subsec_engage_ffbase_logging"></a>

Base logs could be collected by VHQ. Please read the manual log collection methods below.

## Transfer Base Logs to USB stick <a href="#subsubsec_engage_ffbase_logs_to_usb" id="subsubsec_engage_ffbase_logs_to_usb"></a>

To transfer Base Logs to USB, the USB stick should be connected to the Base device.

**Instructions for V240m, V400m:**

- Format USB stick to FAT.
- Connect a USB stick to a Base device using an appropriate cable
- Start System Mode (see chapter <a href="pg_sysmode_fltk.md#sec_fltk_entering_sysmode">Entering System Mode</a> for more information).
- When System Mode login displayed, press CANCEL (or red \"X\" button).
- Select the \"Transfer Logs to Base\" option.

Logs (both - the base and the handset logs) will be copied to the USB stick. Connect USB to the laptop and copy the files.

**Instructions for CM5P, T650p:**

- Format USB stick to FAT.
- Connect a USB stick to a Base device using an appropriate cable
- Start Base Control (Manager) application
- Choose \"Send Logs to USB Stick\"
- Below this menu item, a status message \"Log dump successful\" should be displayed

Logs will be copied to the USB stick. Connect USB to the laptop and copy the files.

## System/Console Logs <a href="#subsec_engage_ffbase_console_logs" id="subsec_engage_ffbase_console_logs"></a>

To enable console logs printout on the serial port of Engage bases you will need to:

- Connect a Base to your PC and start the console application/ terminal application (Putty or similar).
- Power off the Base.
- While it\'s off -- press the System Mode (power) button on the Base.
- Without releasing this button -- power the terminal on.
- You will see the boot mode options 0-4. Depending on the OS version these will change in a cycle or you need to change them manually by pressing the sysmode button.
- To boot in mode 2:
  - If modes change in cycle, release sysmode (power) button when the mode is 2.
  - If manually changing modes, press and hold sysmode (power) button when boot mode 2 is set. This will enable console logs printout on the serial port for the corresponding session until the base is rebooted.

{% hint style="info" %}
Console logs can be already enabled on a Base (disabled by default). If so, then logs are printed out on the serial port without booting in boot mode 2.
{% endhint %}

# Appendix <a href="#sec_engage_ffbase_appendix" id="sec_engage_ffbase_appendix"></a>

## Acronym Definitions <a href="#subsec_engage_ffbase_acronym_definitions" id="subsec_engage_ffbase_acronym_definitions"></a>

| Acronym | Definitions |
|----|----|
| <p>ADK</p> | <p>Application Development Kit</p> |
| <p>API</p> | <p>Application Program Interface</p> |
| <p>BT</p> | <p>Bluetooth</p> |
| <p>CCP</p> | <p>Communication Control Panel</p> |
| <p>ETH</p> | <p>Ethernet</p> |
| <p>UI</p> | <p>User Interface</p> |
| <p>OS</p> | <p>Operating System</p> |
| <p>PM</p> | <p>Power Management</p> |

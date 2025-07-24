---
hidden: true
title: Security Control Panel Programmers Guide
---

# Security Control Panel <a href="#scp_panel" id="scp_panel"></a>

# Preface <a href="#preface" id="preface"></a>

This guide provides information about the usage of the Security control panel application.

## Audience <a href="#audience" id="audience"></a>

This document is meant for programmers who wish to understand and use the Security control panel

## Organization <a href="#subsec_scp_organization" id="subsec_scp_organization"></a>

this guide is organized as follows:

[Introduction](#sec_scp_introduction): Introduction to SCP

[Getting Started](#sec_scp_getting_started): Explains concept

[System setup and requirements](#sec_scp_compile): Compiler and linker settings, dependencies to other components, environment setup.

[Troubleshooting](#sec_scp_troubleshooting): Error handling.

[Appendix: List of SCP panels](#sec_scp_panels): List of panels contained in SCP.

[Appendix: Keys](#subsec_scp_keys): Handles loading and displaying keys on the device.

[Appendix: Tamper](#subsec_scp_tamper): Displays tamper status and option to clear tamper.

[Appendix: Security ID](#subsec_scp_sec_id): Provides information about PCI relevant fields and values.

[Appendix: Secure RTC Date & Time](#subsec_scp_date_time): Shows secure processors RTC and allows changing its values.

[Appendix: MIB](#subsec_scp_mib): Shows values stored in MIB and handles MIB updating.

[Appendix: Password manager](#subsec_scp_password): Handles changing the passwords for users.

# Introduction <a href="#sec_scp_introduction" id="sec_scp_introduction"></a>

SCP is a component to handle all secure operations like keys, tampers and MIB.
SCP can be activated from the MAC desktop.

# Getting Started <a href="#sec_scp_getting_started" id="sec_scp_getting_started"></a>

## Installation <a href="#subsec_scp_installation" id="subsec_scp_installation"></a>

Package name --- dl.scp-{version}.tgz

# System Setup and Requirements <a href="#sec_scp_compile" id="sec_scp_compile"></a>

SCP depends on certain components:

| Component | Purpose |
|----|----|
| <p>ADK-GUI</p> | <p>GUI rendering</p> |
| <p>ADK-IPC</p> | <p>Notification interface</p> |
| <p>ADK-PM</p> | <p>Power management</p> |
| <p>SYSPROP</p> | <p>Access to device properties</p> |
| <p>SPROC</p> | <p>Access to secure processor</p> |
| <p>AUTHMAN</p> | <p>Password protection and management</p> |
| <p>VFIRKL</p> | <p>Key loading tool</p> |

# Troubleshooting <a href="#sec_scp_troubleshooting" id="sec_scp_troubleshooting"></a>

SCP reports error codes from three outside components, SYSPROP, SPROC and VFIRKL.
SYSPROP error codes have explanations added, as well as the most common SPROC error codes.
Error codes when loading warranty keys come from VFIRKL library and have no explanations, they can be found in kld_err.h in the VFIRKL component.

# Appendix: SCP panels <a href="#sec_scp_panels" id="sec_scp_panels"></a>

| SCP panel | Description |
|----|----|
| <p>Keys</p> | <p>The keys panel allows for the loading of Warranty and payment keys as well as viewing the current status of keys on the device.</p> |
| <p>Tamper</p> | <p>The tamper panel shows current device tamper status and allows to acknowledge a tamper</p> |
| <p>Security ID</p> | <p>Security ID panel shows PCI relevant device parameters in a list</p> |
| <p>Secure Date & Time</p> | <p>The Date & Time panel allows you to view and change secure RTC Date and Time</p> |
| <p>MIB</p> | <p>MIB panel allows for the loading of a new MIB via zontalk protocol. As well as displaying the current MIB contents</p> |
| <p>Password management</p> | <p>Password management panel shows which passwords are set ro not and allows to set or change a password</p> |

## Appendix: Keys <a href="#subsec_scp_keys" id="subsec_scp_keys"></a>

| Keys functions | Description |
|----|----|
| <p>Warranty Key status</p> | <p>Displays current status of Warranty keys. Status can be:<br/>-INSTALLED<br/>-NOT INSTALLED<br/>-ERASED ON TAMPER</p> |
| <p>Payment Key status</p> | <p>Displays current status of Payment keys. Status can be:<br/>-INSTALLED<br/>-UNHEALTHY<br/>-ERASED ON TAMPER</p> |
| <p>Load Warranty Keys</p> | <p>Allows to load Warranty keys. Requires a KLD/SST connection via serial</p> |
| <p>Load Payment Keys</p> | <p>Allows to load payment keys. Payment keys are loaded from json file from usb storage stick.<br/>Multiple keys can be loaded form single json file. After loading, installation return status will be reported for each key individually</p> |
| <p>Write VRK certificate to USB</p> | <p>Writes the certificate from VFI_VRK_ECC key. VFI_VRK_ECC key has to be installed on device for this to work</p> |

## Appendix: Tamper <a href="#subsec_scp_tamper" id="subsec_scp_tamper"></a>

| Tamper functions | Description |
|----|----|
| <p>Tamper status</p> | <p>Displays current device tamper status. Status can be:<br/>-Tamper detected<br/>-Tampers not armed<br/>-No tamper detected</p> |
| <p>Tamper log</p> | <p>Displays log of tamper events</p> |
| <p>Clear tamper</p> | <p>Acknowledges tamper event. To fully clear tamper, Warranty keys have to be loaded</p> |

## Appendix: Security ID <a href="#subsec_scp_sec_id" id="subsec_scp_sec_id"></a>

Shows PCI relevant information fields about the device.

| Information field                                     |
|-------------------------------------------------------|
| <p>Model name</p>                   |
| <p>Hardware version</p>             |
| <p>Firmware version</p>             |
| <p>Model name</p>                   |
| <p>Secure chip boot version</p>     |
| <p>Secure chip firmware version</p> |
| <p>Secure chip library version</p>  |

Additionaly on development devices or devices in debug mode shows additional information

| Information field                                    |
|------------------------------------------------------|
| <p>Secure processor state</p>      |
| <p>Application processor state</p> |
| <p>Device build type</p>           |

## Appendix: Date & Time <a href="#subsec_scp_date_time" id="subsec_scp_date_time"></a>

Displays system Date and Time in UTC as well as Secure RTC date and Time in UTC.
Allows changing the secure RTC date and time if the device is in tampered state.
\"Update the secure RTC to the system UTC time\" button changes the secure RTC date and time to current system UTC date and time. The device has to be in tamper state for this to work.

## Appendix: MIB <a href="#subsec_scp_mib" id="subsec_scp_mib"></a>

MIB info screen shows information fields contained in the MIB. The fields are divided into security and non-security fields.
Security fields cannot be changed on production devices when loading a new MIB.

| Non-security fields                                |
|----------------------------------------------------|
| <p>HDR signature</p>             |
| <p>HDR filesize</p>              |
| <p>HDR date & time</p>           |
| <p>Part Number</p>               |
| <p>Hardware Version</p>          |
| <p>Model number</p>              |
| <p>Hardware ID</p>               |
| <p>Software ID</p>               |
| <p>Extended hardware options</p> |

| Security fields                          |
|------------------------------------------|
| <p>Serial Number</p>   |
| <p>PTID</p>            |
| <p>Ethernet MAC</p>    |
| <p>Wifi MAC</p>        |
| <p>BT MAC</p>          |
| <p>UWB MAC</p>         |
| <p>Security Option</p> |
| <p>Detamper Option</p> |

\'load MIB\' button allows to load a new MIB onto the device via zontalk protocol using the \'MIB download\' tool.
On development devices any MIB can be downloaded and installed on the device.
On production devices only a MIB with all matching security field values can be installed on the device.
Loading a new MIB on the device triggers a reboot.

It is currently not possible to go back to the previous screen when the device has entered the \'waiting for upload\' state without going through with a MIB download or rebooting the device.

When a successful conection has been made to the download tool, on device will be \"DOWNLOADING\" message.
On a successful MIB loading the following messages will be displayed:

- DOWNLOAD DONE
- MIB store success
- MIB send back success
- MIB loading successful
  If any of the steps fail, an error message will be displayed instead.

## Appendix: Password manager <a href="#subsec_scp_password" id="subsec_scp_password"></a>

Allows for the setting or changing of a password on the device.

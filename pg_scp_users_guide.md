---
title: Security Control Panel Programmers Guide

---

# Security Control Panel Programmers Guide




# Security Control Panel


# Preface

This guide provides information about the usage of the Security control panel application.

## Audience

This document is meant for programmers who wish to understand and use the Security control panel


## Organization

this guide is organized as follows:
[Introduction]: Introduction to SCP

[Getting Started]: Explains concept

[System setup and requirements]: Compiler and linker settings, dependencies to other components, environment setup.

[Troubleshooting]: Error handling.

[Appendix: List of SCP panels]: List of panels contained in SCP.

[Appendix: Keys]: Handles loading and displaying keys on the device.

[Appendix: Tamper]: Displays tamper status and option to clear tamper.

[Appendix: Security ID]: Provides information about PCI relevant fields and values.

[Appendix: Secure RTC Date & Time]: Shows secure processors RTC and allows changing its values.

[Appendix: MIB]: Shows values stored in MIB and handles MIB updating.

[Appendix: Password manager]: Handles changing the passwords for users.


# Introduction

SCP is a component to handle all secure operations like keys, tampers and MIB.

SCP can be activated from the MAC desktop.


# Getting Started


## Installation

Package name &mdash; dl.scp-{version}.tgz


# System Setup and Requirements

SCP depends on certain components:


| Component  | Purpose   |
|  -------- | -------- |
| ADK-GUI  | GUI rendering   |
| ADK-IPC  | Notification interface   |
| ADK-PM  | Power management   |
| SYSPROP  | Access to device properties   |
| SPROC  | Access to secure processor   |
| AUTHMAN  | Password protection and management   |
| VFIRKL  | Key loading tool   |



# Troubleshooting

SCP reports error codes from three outside components, SYSPROP, SPROC and VFIRKL.

SYSPROP error codes have explanations added, as well as the most common SPROC error codes.

Error codes when loading warranty keys come from VFIRKL library and have no explanations, they can be found in kld_err.h in the VFIRKL component.

# Appendix: SCP panels


| SCP panel  | Description   |
|  -------- | -------- |
| Keys  | The keys panel allows for the loading of Warranty and payment keys as well as viewing the current status of keys on the device.   |
| Tamper  | The tamper panel shows current device tamper status and allows to acknowledge a tamper   |
| Security ID  | Security ID panel shows PCI relevant device parameters in a list   |
| Secure Date & Time  | The Date & Time panel allows you to view and change secure RTC Date and Time   |
| MIB  | MIB panel allows for the loading of a new MIB via zontalk protocol. As well as displaying the current MIB contents   |
| Password management  | Password management panel shows which passwords are set ro not and allows to set or change a password   |



## Appendix: Keys


| Keys functions  | Description   |
|  -------- | -------- |
| Warranty Key status  | Displays current status of Warranty keys. Status can be:

 -INSTALLED

 -NOT INSTALLED

 -ERASED ON TAMPER   |
| Payment Key status  | Displays current status of Payment keys. Status can be:

 -INSTALLED

 -UNHEALTHY

 -ERASED ON TAMPER   |
| Load Warranty Keys  | Allows to load Warranty keys. Requires a KLD/SST connection via serial   |
| Load Payment Keys  | Allows to load payment keys. Payment keys are loaded from json file from usb storage stick.

 Multiple keys can be loaded form single json file. After loading, installation return status will be reported for each key individually   |
| Write VRK certificate to USB  | Writes the certificate from VFI_VRK_ECC key. VFI_VRK_ECC key has to be installed on device for this to work   |



## Appendix: Tamper


| Tamper functions  | Description   |
|  -------- | -------- |
| Tamper status  | Displays current device tamper status. Status can be:

 -Tamper detected

 -Tampers not armed

 -No tamper detected   |
| Tamper log  | Displays log of tamper events   |
| Clear tamper  | Acknowledges tamper event. To fully clear tamper, Warranty keys have to be loaded   |



## Appendix: Security ID

Shows PCI relevant information fields about the device.


| Information field   |
|  -------- |
| Model name   |
| Hardware version   |
| Firmware version   |
| Model name   |
| Secure chip boot version   |
| Secure chip firmware version   |
| Secure chip library version   |


Additionaly on development devices or devices in debug mode shows additional information


| Information field   |
|  -------- |
| Secure processor state   |
| Application processor state   |
| Device build type   |



## Appendix: Date & Time

Displays system Date and Time in UTC as well as Secure RTC date and Time in UTC.

Allows changing the secure RTC date and time if the device is in tampered state.

"Update the secure RTC to the system UTC time" button changes the secure RTC date and time to current system UTC date and time. The device has to be in tamper state for this to work.

## Appendix: MIB

MIB info screen shows information fields contained in the MIB. The fields are divided into security and non-security fields.

Security fields cannot be changed on production devices when loading a new MIB.

| Non-security fields   |
|  -------- |
| HDR signature   |
| HDR filesize   |
| HDR date & time   |
| Part Number   |
| Hardware Version   |
| Model number   |
| Hardware ID   |
| Software ID   |
| Extended hardware options   |



| Security fields   |
|  -------- |
| Serial Number   |
| PTID   |
| Ethernet MAC   |
| Wifi MAC   |
| BT MAC   |
| UWB MAC   |
| Security Option   |
| Detamper Option   |


'load MIB' button allows to load a new MIB onto the device via zontalk protocol using the 'MIB download' tool.

On development devices any MIB can be downloaded and installed on the device.

On production devices only a MIB with all matching security field values can be installed on the device.

 Loading a new MIB on the device triggers a reboot.


 It is currently not possible to go back to the previous screen when the device has entered the 'waiting for upload' state without going through with a MIB download or rebooting the device.


 When a successful conection has been made to the download tool, on device will be "DOWNLOADING" message.

On a successful MIB loading the following messages will be displayed:


* DOWNLOAD DONE
* MIB store success
* MIB send back success
* MIB loading successful

 If any of the steps fail, an error message will be displayed instead.


## Appendix: Password manager

Allows for the setting or changing of a password on the device.

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

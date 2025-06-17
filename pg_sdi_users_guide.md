---
title: ADK-SDI Programmers Guide

---

# ADK-SDI Programmers Guide




# Preface

This guide provides information on the usage of the SDI-Server.


## Audience

This document is intended for users that want to understand and use the SDI-Server.


## Organization

This guide is organized as follows:

[Chapter 1, Introduction]: Introduction to SDI-Server.

[Chapter 2, Getting Started]: Shows the framework concepts.

[Chapter 3, Usage]: Presents common uses.

[Chapter 4, System Setup and Requirements]: Environment setup, description, deployment and installation of SDI download packages.

[Chapter 5, Troubleshooting]: Solutions for possible issues.



# Introduction

This guide is valid for SDI-Server version: 4.32.1-259-P2PE-1.6.39


## Concepts

The SDI-Server interacts with an outside Host-Application which normally includes the SDI-Client-Library for the communication between both sides. SDI-Client and SDI-Server can be run on different devices (e.g. SDI-Client on a Smart Phone and SDI-Server on an Engage device) or on one device. In the second case (on one device) the SDI-Client can be replaced by a separate library or application which controls the security deviating from the SDI standard.


## Software Components

The SDI-Server is composed of the following components:

![SDI_Components.svg](.//SDI_Components.svg)SDI-Server Components



* The Protocol Library is the central component for the communication with an outside application. To get the possibility of exchanging the communication protocol without a rebuild of the SDI-Server the library is implemented as a shared object. Currently only the e105-Protocol is available in two variants (see [Transport Layer]).
* The SDI-Server itself consists of two parts: A static library (libsdicsd.a) linked to the SDI-Server which contains all functionalities regarding sensitive data handling and a common part that includes the none security relevant code. All interfaces that handle and store cardholder sensitive data are led to the libsdicsd. There is no possibiltity to retrieve these data in clear text outside the SDI-Server.
* From the following interfaces cardholder sensitive data are yield into the system:
    * EMV-CT: Data are received from the CT EMVCo kernel.
    * EMV-CTLS: Data are received from the different CTLS EMVCo kernels.
    * MSR: Data are received from the magstripe reader (OS).
    * Manual Card Data Entry: Data are received from the touch/keypad OS driver directly or via ADK-GUI.


## User Modes

The SDI Server supports the user modes standard, headless and EPP.

* In standard mode the SDI Server has full access to display and keypad on the device.
* In headless mode all display content is managed by the outside application and PIN and card data inputs are handled internally. On devices with touch screens only the SDI server needs additional information about the touch coordinates to handle the inputs. The outside application is responsible for the corresponding display content and the touch coordinates has to match.
* The EPP mode means a two piece solution consisting of a Countertop device where the SDI server runs in headless mode connected with an external Pinpad (EPP) using the SDI server in a special EPP-standard mode. Countertop and EPP are physically connected via USB. USB device detection works automatically in background with a running USB watchdog, which is implemented in SDI server:

 Whenever a Verifone device is plugged to USB, SDI server creates an USB network device, which allows IP communication over USB. After the USB network device is up, on EPP SDI server starts a TLS server to accept the incoming connection from Countertop. At the same time on Countertop, SDI server initiates a secure TLS connection to EPP. After TLS handshake additional negotiation commands are executed to check prerequisites of both environments including major and minor version checks of SDI-Server, EMV-CT and EMV-CTLS Framework. Result and status of this procedure is provided by [Enable EPP (20-21)], which is mandatory to active Countertop to use an attached EPP. SDI commands sent to Countertop are either executed on both devices or on Countertop/EPP only. For a couple of SDI commands the payment application has the option to address the device (Countertop or EPP) for its execution. All security relevant actions (ADE, VCL, ...) will be performed on the Countertop device only.
VOS3 devices (e.g. P630) usually have a single USB controller and if the device shall be used as Countertop the USB mode must be set to 'USB host'. If the mode is configured to 'USB device', the USB device detection is disabled, thus, SDI will act as Standalone without Countertop support. Please also note that SDI always sets the controller mode to 'USB device', if SDI is configured to run as EPP. VOS2 devices usually have separate 2 USB controllers, thus, SDI hehaves passive and just checks, if at least one of both controllers operate with the required USB mode.


The following table provides a comparison of the properties of the Countertop and the EPP: 
|  | Countertop (CTP) | External Pinpad (EPP)  |
|  -------- | -------- | -------- |
| Operator | Merchant | Cardholder  |
| Connection between CTP/EPP via USB |  |  |
| Payment Keys | Stored on CTP only | No additional keys have to be loaded. All necessary crypto operations are done

with the warrentied keys preloaded in the factory or repair centre.  |
| Supported card technologies | MSR, CT, manual card data entry | MSR, CT, CTLS  |
| User Mode | Headless | Standard with EPP support  |
| Configuration packages (VOS/VOS2/VOS3) | `dl.sdi_cfg-hdl-X.X.X-X-P2PE-X.X.X.tar` | `dl.sdi_cfg-std-X.X.X-X-P2PE-X.X.X.tar`
`dl.sdi_cfg-epp-X.X.X-X-P2PE-X.X.X.tar` |
| User signed configuration | e.g. SDI user config packages | Automatically synchronisation with CTP  |
| Supported Callbacks | 
    * [Status Callback (9F-XX)]
    * [Control Request (9B-01)]
    * [Notify Callback (9E-01)]
    * [Card Detected Callback (9E-02)]
    * [EMV Callback after the asychronous Card Detection (9E-03)]
 |  |




Different SDI modes (recently supported on Engage only) are activated by a [SDI config package], which is additionally installed next to [SDI base package]. So far, Android platfrom only supports headless mode, therefore, no SDI config packages are provided there. Finally, if SDI-Service must support EPP mode on Android (e.g. P630), some kind of configuration packages will be introduced to activate EPP mode on this platform, too.

Changing SDI user mode from standard to headless (or vice versa) with the installation of the corresponding [SDI config package] will trigger an automatic fatory reset with next SDI startup. This automatic fatory reset behaves same as [Factory Reset (20-22)] and deletes all files, which SDI has created during runtime with the previous mode.


## SDI Certifications

The SDI-Server is certified against Point to Point Encryption (P2PE) Domain 2 (Application Security) and Payment Application Data Security Standard (PA-DSS). The Implementation Guides for P2PE (P2PE_SDI_Implementation_Guide.pdf) and PA-DSS (SDI_PA_DSS_Implementation_Guide.pdf) coming along with documentation and can be found in the subfolder /doc/sdi.



# Getting Started

The SDI-Server is delivered as a runnable application build for a number of VOS and VOS2 devices. Loading and start up depends on the used device and will be handled by the integration packages included in the ADK deliverables. When the SDI-Server is up and running on a device the user has the possibility to execute several commands (TLV, see next section) on it.

Network communication (LAN, WLAN etc.) needs to be configured outside the SDI-Server before it can be used. For details regarding the configuration of the communication possibilities see [Using the Communication Control Panel (CCP)].

During the 1st start of the SDI-Server (in standard mode) automatically a menu pops up to select one of the available communication methods. The variety of the provided communication methods depends on the device type and interface capabilities for the corresponding device. This communication menu is also available by pressing the menu softkey on the idle screen after each start up. The interface selection and communication settings are stored to configuration file [COM_IF.CFG] in folder `flash` next to SDI server binary. Since SDI server version >4.1.1, this communication menu also supports to display the CCP communication wizard (provided by `libccp` of ADKCOM), which allows to do the basic interface setup, such as configuration of static IP adresses or DHCP (for details see [Using the Communication Control Panel]). In case of headless mode the selection of the communication channel is configured by configuration file [COM_IF.CFG] including the filename of the active connection profile, has to be downloaded before the SDI-Server runs.

Following profiles come along with installation of SDI-Server: 
| COM Profile  | Related communication method   |
|  -------- | -------- |
| CONNECT_LAN.XML  | TCP/IP Local Ethernet (checks for existance of network device `eth0` and binds SDI port 12000 to all available devices for internal and external access).   |
| CONNECT_BT.XML  | TCP/IP BT PAN (enables BT PAN network device and binds SDI port 12000 to all available devices for internal and external access).   |
| CONNECT_WIFI.XML  | TCP/IP WiFi (checks for existance of network device `wlan0` and binds SDI port 12000 to all available devices for internal and external access).   |
| CONNECT_USB_SER.XML  | USB serial   |
| CONNECT_USB_LAN.XML  | USB TCP/IP local network (checks for existance of network device `usb0` and binds SDI port 12000 to all available devices for internal and external access).   |
| CONNECT_COM1A.XML  | Virtual channel depending on the devices capabilities   |
| CONNECT_BLE.XML  | BLE   |
| CONNECT_COM1.XML  | Serial COM Port   |
| CONNECT_ANY.XML  | TCP/IP any interface (binds SDI port 12000 to all available devices for internal and external access).   |
| CONNECT_LO.XML  | Localhost (binds SDI port 12000 to network device `lo` for internal access only).   |
| CONNECT_ANDROID.XML  | Internal Android network (binds SDI port 12000 to IP address 192.0.2.6 (or 192.168.50.2 on old OS) for internal Android access only).   |


The content of the connection selection menu is variable depending on the devices communication capabilities.

The following menu entries are possible: 
| Menu entry  | Description and related COM profile   |
|  -------- | -------- |
| ETH (LAN)  | TCP/IP communication via Ethernet/LAN, COM profile: CONNECT_LAN.XML   |
| BT PAN  | TCP/IP communication via Bluetooth PAN (device selectable via submenu), COM profile: CONNECT_BT.XML   |
| WiFi  | TCP/IP communication via WiFi, COM profile: CONNECT_WIFI.XML   |
| USB (serial)  | Serial communication via USB, COM profile: CONNECT_USB_SER.XML   |
| USB (LAN)  | TCP/IP communication via USB, COM profile: CONNECT_USB_LAN.XML   |
| COM1A  | Serial communication via virtual channel (USB and/or Bluetooth selectable via submenu), COM profile: CONNECT_COM1A.XML   |
| BLE  | Serial communication via BLE, COM profile: CONNECT_BLE.XML   |
| COM1  | Serial communication via COM Port, COM profile: CONNECT_COM1.XML   |
| ANY (LAN)  | TCP/IP communication with any network device, COM profile: CONNECT_ANY.XML   |
| LOCALHOST  | TCP/IP communication with local loopback device (device internal network access only), COM profile: CONNECT_LO.XML   |
| ANDROID (intern)  | TCP/IP communication via internal Android network. Use this profile on CM5/M440/M424 to disable external access and allow Android side only to connect to SDI server, COM profile: CONNECT_ANDROID.XML This profile is provided by SDI headless config package (see chapter [SDI config package]), which is installed for CM5/M440/M424 only. Other devices use profile CONNECT_LO.XML, which is the default for Engage.  

 |


For all TCP/IP communications port 12000 is preconfigured in the connection profiles.

Serial communication settings are as follows:

* Baudrate: 115200
* Parity: none
* Databits: 8
* Stopbits: 1
* Flowcontrol: none

For devices supporting Bluetooth (e.g. e285) communication channel COM1A includes a submenu to select USB or one of the paired BT devices. BT pairing needs to be performed outside the SDI-Server and before running into this menu. On special devices or configurations COM1A stands for serial communication via USB (virtual communication channel). For details see ADK-COM Programmers Guide.

If BLE is selected a pairing dialog can appear in case a mobile device is connecting


Since Version 3.x the SDI-Server supports new commands to handle sensitive data ([Data Interface (29-XX)]) and access to ADK-Sec crypto functions ([Generic Crypto Interface (70-XX)]). For a successful handling of all sensitive data operations a suitable configuration of the ADK-Sec stored in file **sccfg.json** is needed as well!

Numerical values are usually represented in hexadecimal in this documentation. If this is not the case or if the representation is unclear (e.g. value 11), this is indicated separately by adding an index (e.g. hex) to the value. For details see [Legend].



# Usage


## Transport Layer


### Protocol Type A: Communication with flow control

For data transfer between an outside application (e.g. a mobile phone) SDI-Server supports serveral protocol variants (protocol types).

Protocol Type A encapsulates the message data in a frame as follows:

![SDI_BasicFlow_A.png](.//SDI_BasicFlow_A.png)Basic Message Flow (Protocol Type A)

The message length shall be coded in two bytes and is limited to 4095 bytes (the highest nibble is used for multiple block transfer). The last two bytes includes a CRC16/XMODEM checksum. Protocol Type A is recommended for communication channels without a underlying flow control (e.g. RS232 serial communication). Each received message has to be confirmed by sending an ACK to the sender of the message.

Example:



```cpp
02 41 00 04 22 01 00 00 03 7B 25 ->
                                 <- 06
                                 <- 02 41 00 14 90 00 47 82 65 CA 63 73 3B 39 FF FF 98 76 54 11 14 A0 00 79 03 86 5A
                              06 ->
```

In case of a protocol error is detected (e.g. wrong message length or protocol frame corrupted etc.) the SDI-Server discards the received data and sends for protocol Type A a NAK to inform the sender.


Protocol type A supports multiple block transfer, if the command length exceeds the maximum message size. Here up to 16 message blocks each with a maximum size of 4095 bytes are possible. SDI-Server accumulates all blocks until the message is received completely before the command will be executed. The following picture demonstrates a command transfer split in three blocks:

![SDI_BlockTransfer_A.png](.//SDI_BlockTransfer_A.png)Multiple Block Transfer (Protocol Type A)

The ETB shall indicate an intermediate block. Only the last block transfer includes the ETX. The upper nibble of the length value indicates the block number.


### Protocol Type B: Communication w/o flow control

For communication channels supporting a underlying flow control (e.g. TCP/IP) Protocol Type B is recommended: ![SDI_BasicFlow_B.png](.//SDI_BasicFlow_B.png)Basic Message Flow (Protocol Type B)

The message length shall be coded in four bytes and is limited to 1048575 bytes in command direction respectively 65535 bytes in response direction (the highest bytes/nibbles are reserved for future use). Because of the underlying flow control neither a CRC nor an ACK is needed.

Example:



```cpp
02 42 00 00 00 04 22 01 00 00 03 ->
                                 <- 02 42 00 00 00 14 90 00 47 82 65 CA 63 73 3B 39 FF FF 98 76 54 11 14 A0 00 79 03
```

In case of a protocol error is detected (e.g. wrong message length or protocol frame corrupted etc.) the SDI-Server closes the connection immediately.


### Protocol Type C: Multi connection support

Since version 4.7.0, SDI server has added support to accept multiple connections from several clients at the same time (draft version). With version 4.7.1, the multi connection concept was revised and improved. With the new concept the new protocol type C was introduced, which has the same message format as protocol type B.

New projects, which integrate SDI the first time and require multi connection support, should prefer implementation of new protocol type D (see chapter [Protocol Type D: Concurrent command support]).


SDI server accepts multiple connections as follows:

* one connection for message transfer with protocol type B (**main connection**)
* multiple connections for message transfer with protocol type C (**side connections**)


Protocol type B messages can only be sent by one SDI client, which holds the main connection. The main connection provides access to full SDI function scope, such as processing payments with EMV commands. SDI server reserves the main connection with receipt of the first message having protocol type B (first come first serve). Other connections using protocol type B messages afterwards are declined with response code `64FA` (main connection already locked). From this point the SDI client is restricted to a side connection, which allows side commands with protocol type C only. For a side connection with protocol type C the function scope of SDI server is limited to the following SDI interfaces:

* [Printer Interface (25-XX)]
* [PED Interface (22-XX)]
* [System Interface (20-XX)]
* [Generic Crypto Interface (70-XX)]
* [Data Interface (29-XX)]

Not all commands of the listed interfaces above have support for protocol type C. Users should consider subchapters and if not explicitely mentioned in description for the corresponding SDI command, it is not supported as side command with protocol type C.


SDI commands having no support for protocol type C are declined by SDI server with response code `64F9` (command not allowed). In addition, side connections don't support callbacks, requests and nested commands. Side commands are usually short-term in nature and directly replied with a final response. Further, asynchronous [Payment Notification Callbacks (9E-XX)] are only issued over main connection and never send over side connections with protocol type C.

Even basically supported as side command, SDI running as Countertop will be restricted to use it with protocol tpye C, if the command requires remote processing or partial interaction with the EPP. The reason is recent SDI implementations do not support asynchronous execution of commands on EPP and a SDI Countertop is not able to forward it as EPP side command. This implies that these commands must use protocol type B (main connection), if they require remote processing by the EPP. For instance, [PED start PIN entry (22-03)] will lose side command support for the SDI Countertop, since EPP will be always responsible for PIN entry, after it was enabled with [Enable EPP (20-21)]. In addition, command addressed to an EPP with TLV tag `DFA150` will also be considered as payment command, which must use the main connection. In this case the command is also declined with `64F9` (command not allowed), if sent with protocol type C on a side connection.

Multi connection support is provided by protocol library `lib_mADK_PP_Prot_ipc.so`. By default, this library is always used on Android platforms such as Neo, Trinity (T650) and CM5, M440 and M424. For SDI versions <= 4.21.0, multi connection support on Engage and Fusion was not available, because these platforms use old protocol library `lib_mADK_PP_Prot_com.so` only. Since version 4.21.0, Engage/Fusion allow to enable it with parameter `multi_connect_support` in configuration file [COM_IF.CFG]. Since version 4.23.10 SDI uses defaults for all VOS platforms depending on SDI operation mode, if parameter `multi_connect_support` is not provided. For more details please refer to chapter [COM_IF.CFG].

Please note that protocol library `lib_mADK_PP_Prot_ipc.so` only supports TCP/IP related communication profiles. Other communication profiles like Bluetooth (e.g. as BT PAN, COM1A, BLE) or serial communication (USB and COM) are only implemented in old protocol library. Thus, these profiles are no longer usable, if multi connection support for Engage/Fusion with the new library is enabled. In addition, protocol type A (designed for serial communication) is implemented in old protocol library `lib_mADK_PP_Prot_com.so` only. Therefore, this protocol type has no multi connection capability. A single protocol type A connection is always treated as main connection. 

An additional example user config package **dl.sdi-usrconfig-ipc-prot-X.X.X-X-P2PE-X.X.X.tar** comes along in subfolder `example/load/usr_config` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`. This package enables multi connection support with communication profile `CONNECT_ANY.XML`.


#### Sharing the main connection with multiple SDI clients

With older SDI versions, multiple SDI clients could share the main connection by closing and reopening the connection only. Since version 4.29.0, command [Sys Abort (20-02)] was enhanced with bit value `0x02` in P2 field to release the main connection without the need that the connection is closed (for more details see chapter [Sys Abort (20-02)]). With its termination (or with command [Sys Abort (20-02)]) the main connection is unlocked for other connections and another secondary SDI client is allowed to send a protocol type B message to obtain the main connection (payment lock). There is no such kind of notification by SDI server for secondary SDI clients, if the main connection is closed/unlocked. Therefore, SDI clients must arrange to get the payment lock for the main connection.


#### Parallel command processing

Older versions of SDI server have implemented a sequential command processing and were able to serve one client at the same time only. Thus, SDI clients were delayed as long as a command on another connection was active. Since version 4.9.3, SDI server has added support for parallel processing so that several commands on multiple connections can be served at the same time. For this feature SDI server implements a session context per connection and settings, which were configured (e.g. for [Set Printer Property (25-00)]), are stored per connection and kept for duration of the connection.

Please note that parallel processing is not possible, if concurrent commands needs access to an exclusive resource. For instance, it won't be possible to start 2 PIN entries in parallel on 2 connections, since SDI server needs to access the PIN entry device. If one connection has started the PIN entry, all PED commands received on other connections will be declined. In addition, SDI server will delay a print command, if the printer device is already in use by another connection. The print command is processed, after the previous print job has been finished, otherwise this would lead to broken receipt contents.


### Protocol Type D: Concurrent command support

Protocol type D was introduced since version 4.29.0 and allows a SDI client to send concurrent commands over the same connection. In addition, the protocol type can be used with multiple connections and there is no need to use different protocol types identifier in header, as required with protocol types B and C (see chapters above). Therefore, new projects, which want to integrate SDI with communications with underlying flow control (e.g. TCP/IP), should implement protocol type D, because (sooner or later) this will replace old protocol types B and C.

Protocol type D with concurrent command support is provided by protocol library `lib_mADK_PP_Prot_ipc.so` only. Old protocol library `lib_mADK_PP_Prot_com.so` without multi connection support only implements protocol types A and B. For more details, see previous chapter [Protocol Type C: Multi connection support].


#### Message format

The message format of protocol type D is similar to B and C, except the header was enhanced by a field containing message ID to identify the command and responses on SDI server and client side.

![SDI_BasicFlow_D.svg](.//SDI_BasicFlow_D.svg)Message format (Protocol Type D)

Similar to protocol type B and C, the header consists of STX (1 byte) and 'D' (1 byte), followed by the length field (4 bytes, big endian). New is the message ID (4 bytes, big endian) inserted between the length field and data, for both, command and response. The length field contains the length of command or response data only and does not include the preceding message ID and the appended ETX.


#### Message identification by ID

The message ID is specified in command on client side and after SDI has processed the command, the same ID returned in the response so that the client is able to associate it with the command that was sent. Usually, the message ID is a numeric value (e.g. starting from 0) and each command for the connection uses the message ID of the previous command incremented by 1. In that way concurrent commands can be processed by its message ID independently, either on the same connection or on another connection, where each client uses its own range of message IDs.

Example: ![SDI_ConcurrentCommandFlow_D.svg](.//SDI_ConcurrentCommandFlow_D.svg)Concurrent command flow (Protocol Type D)


#### Command cancellation

As for old protocol types the existing command [Sys Abort (20-02)] is used to cancel active commands. In difference to protocol types A and B, command [Sys Abort (20-02)] is unidirectional and SDI never provides a command response for it. Thus, command field P2 to control behaviour for command response is always ignored for protocol type D. Command [Sys Abort (20-02)] uses the message ID of the active command, which shall be cancelled.

Example: ![SDI_CommandCancellation_D.svg](.//SDI_CommandCancellation_D.svg)Command cancellation (Protocol Type D)

There is no guarantee that the active command is always cancelled. Only a small set of commands are cancelable at all and it might depend on command progress or user interaction, if it will be considered. In addition, SDI will just ignore it beyond the point of no return. Finally, command [Sys Abort (20-02)] with a message ID referring an inctive command is also ignored (see example above).


#### Payment lock/unlock

Even protocol type D provides best flexibility to support concurrent command processing, most SDI commands use exclusive resources or internal APIs, which still disallow concurrent invocation (e.g. EMV, MSR or card detection commands using the card reader or UI commands using the display). Therefore, SDI clients must request SDI for permission to get access to full function scope, which corresponds blocking the main connection with old protocol type B (see chapter [Protocol Type C: Multi connection support] for more details). For this reason the new command [Sys Lock Payment (20-06)] was introduced to request a global lock for the connection: the payment lock. After obtaining the payment lock successfully, the related connection is allowed to send payment commands, whereas other connections have a limited SDI function scope and only commands especially declared as "side command" can be used then. SDI clients, which send command [Sys Lock Payment (20-06)] to an already locked SDI are declined with `64FA` (already locked) immediately. The same result is returned for a payment command on a connection not owning the lock. Payment commands always require the payment lock and cannot be sent concurrently (see section [Concurrency restrictions]). Side commands instead do not require this lock and can be processed concurrently. A command [Sys Lock Payment (20-06)], which has obtained the payment lock successfully, is responded by SDI with a unidirectional callback [Intermediate Result Callback (99-01)] on this connection, which means that the command is kept open without a final response as long as the payment lock is active. Command [Sys Abort (20-02)] with the message ID of the previous [Sys Lock Payment (20-06)] is sent by SDI client to release the payment lock again. Finally, SDI sends the final response with error code `6500` confirming that [Sys Lock Payment (20-06)] was succesfully cancelled.

Example: ![SDI_LockUnlockPayment_D.svg](.//SDI_LockUnlockPayment_D.svg)Lock/Unlock payment with 2 SDI connections (Protocol Type D)

The list of interfaces providing side command support are list in previous chapter [Protocol Type C: Multi connection support]. Users should consider subchapters and if not explicitely mentioned in description for the corresponsing SDI command, the execution as side command with protocol type C or D is not supported and requires the payment lock. 

A side command will fail, if the command is addressed to EPP with TLV tag `DFA150`. In this case the command is also declined with `64F9` (command not allowed). Thus, side commands are only supported for Countertop with recent SDI implementations. Further, an attched/enabled EPP might lead to additional concurrency limitations for side commands (see section [Concurrency restrictions]).


It is also possible that multiple SDI client applications share the same connection (e.g. a single USB connection). In this case some kind of proxy (either implemented as a seperate process or part of a SDI client library) handles the traffic for these applications on SDI client side. Further, each application might run with an own payment context meaning they act completely independent, even they require access to payment functionality of SDI. Finally, command [Sys Lock Payment (20-06)] can be send multiple times by the proxy over the same connection to cooridinate SDI clients to access SDI payment functions.

Example: ![SDI_LockUnlockPaymentProxy_D.svg](.//SDI_LockUnlockPaymentProxy_D.svg)Lock/Unlock payment with a proxy (Protocol Type D)

The SDI proxy mustn't just pass through the message IDs (`X,Y,Z`) of the client 1:1 to SDI server, instead it must use an own unique number range (`A,B,C,...`) for all client commands to SDI server, which is mapped to back to message ID of the related client whenever a response is received. For the proxy implementation it is also recommended to care about resources and to unblock waiting participants, whenever a connection gets lost in both directions. In case of connection lost to SDI server it should response all SDI clients with an error result for all active command or just close all SDI client connections if possible (e.g. when using TCP/IP). For interruption of a SDI client connection, it should send a [Sys Abort (20-02)] to abort active commmands in SDI server. In addition, special handling will be required for commands [PED start PIN entry (22-03)] and [Start Card Detection (23-03)] : These commands cannot be aborted with [Sys Abort (20-02)], since they were already finalized with a response. Finally, SDI proxy must send of [PED stop PIN entry (22-05)] and [Stop Card Detection (23-05)] to abort an active PIN entry or card detection.

Please note that SDI server is not able to detect violations of a SDI client, if it sends a payment command, when it does not own the payment lock. The reason is another client might have requested the lock before, which SDI has associated with the (one and only) connection to the proxy. The prerequesite for a such working solution is the discipline of all SDI clients, not to send any payment command before the payment lock was obtained successfully with [Sys Lock Payment (20-06)]. Basically, this is the recommendation for all solutions, even if each SDI client uses it's own connection to SDI without a proxy.


#### Command requests and callbacks

Command requests and unidirectional command callbacks use the message ID of the command, for which the request or callback was triggered. Since side commands don't have support for it, requests and callbacks are only sent for payment commands. Finally, the SDI client uses same the message ID received with the request for the its response (see [Command Requests/Callbacks] for more details). Nested commands (during an active request) use another message ID than the active command, usually the message ID of each nested command is incremented by 1. It's also possible that a nested command sends an unidirectional command callback, which then get's the message ID of the nested command.

Example: ![SDI_RequestCommandFlow_D.svg](.//SDI_RequestCommandFlow_D.svg)Commands requests, callbacks and nested commands (Protocol Type D)

As already mentioned, side commands don't support callbacks, requests and nested commands. The only exception is side command [Sys Lock Payment (20-06)], which uses [Intermediate Result Callback (99-01)] to signal the payment lock was obtained successfully. Side commands are usually short-term in nature and directly replied with a final response. In addition, the cancellation of a side command is not supported and [Sys Abort (20-02)] referring a side command will be ignored.


#### Payment notification callbacks

Asynchronous [Payment Notification Callbacks (9E-XX)], which are always unidirectional without a callback response, do not belong to an active command and can be sent by SDI at any time. As for old protocol type B, with protocol type D these notifications are only issued to the main connection, which owns the payment lock. Payment notification callbacks always use the message ID of [Sys Lock Payment (20-06)]. After releasing the payment lock with [Sys Abort (20-02)], SDI no longer issues payment notification callbacks on this connection.

Example: ![SDI_LockUnlockPaymentNotify_D.svg](.//SDI_LockUnlockPaymentNotify_D.svg)Payment notification callbacks (Protocol Type D)


#### Concurrency restrictions

As already mentioned in previous section [Payment lock/unlock], payment commands require the payment lock. Even a connection was successfully locked, payment commands do not support concurrency, therefore, a second payment command will be declined with final response `640A` (busy) as long as the previous payment command is active.

Example: ![SDI_PaymentCommandDeclinedWithBusy_D.svg](.//SDI_PaymentCommandDeclinedWithBusy_D.svg)Payment command declined with a busy response (Protocol Type D)

Side commands instead have concurrency support and can be sent by SDI clients at any time without requesting SDI for access. But please note that side commands might be processed delayed or even can be declined, if they use an exclusive resource, which needs its own access protection (independently from the payment lock). For instance, SDI server will delay a print command, if the printer device is already in use by another side command. The print command is processed, after the previous print job has been finished, otherwise this would lead to broken receipt contents. In addition, it won't be possible to start 2 PIN entries in parallel with 2 side commands [PED start PIN entry (22-03)], since SDI server needs to access the PIN entry device. Only the first [PED start PIN entry (22-03)] will start the PIN entry and block all PED commands on other connections. For more details about PIN entry with side commands and the related restrictions, please read chapter [PED start PIN entry (22-03)] carefully.

Finally, an attached/enabled EPP will lead to additional concurrency restrictions for side commands, if they require remote processing or partial interaction with the EPP. The reason is recent SDI implementations do not support asynchronous execution of commands on EPP and a SDI Countertop is not able to forward it as EPP side command. This implies that some commands are always handled as synchronous payment command, if they require remote processing by the EPP. For instance, [PED start PIN entry (22-03)] will lose side command support for the SDI Countertop, since EPP will be always responsible for PIN entry, after it was enabled with [Enable EPP (20-21)]. In addition, command addressed to an EPP with TLV tag `DFA150` will also be considered as payment command, which requires the payment lock (see [Sys Lock Payment (20-06)]) and sequential synchronous processing.


### Protocol Type K: Remote keyservice

Payment applications running on Android platform, e.g. on P630 (Neo), T650c (Trinity) or CM5, M440 and M424, have the requirement to establish secure TLS connections. For authentication of the terminal as a Verifone device, these applications wants to use the AuthEx key/certificate or another customer loaded RSA key/certificate. AuthEx comes along with default factory installation of warranty keys, whereas customer key/certificates must be injected with RKL (remote key loading) first. Both key/certificate variants are stored in security Vault area on Engage (e.g. CM5) or in a special security domain on Android, which is only allowed to be accessed by SDI server (e.g. K81 security processor on T650c). Android applications have no direct access to the corresponding security APIs, therefore, SDI server must provide a service to use the key/certificate remotely. For this use case a new remote keyservice with Protocol Type K (K = Keyservice) was introduced, which has the same message format as the known Protocol Type B, except the following layer differences:

* On Transport Layer the remote keyservice uses protocol identifier 'K' instead 'B' (see chapter [Transport Layer])
* On Application Protocol Layer the remote keyservice uses P1\P2 for protocol compatibility reasons, but these fields are recently unused and ignored (see chapter [Application Protocol]). Applications can just fill both fields with a dummy value (e.g. `00``00`, see chapter [Remote Keyservice (72-XX)]).


The remote keyservice runs concurrently to normal SDI server under the additional TCP port 12001 and it supports accepting side connections at any time.

The remote keyservice only accepts messages of Protocol Type 'K', other messages having protocol type B or C are declined and still have to be sent to normal SDI interface available under main TCP port 12000 (see chapter [Getting Started]).


In order to restrict access to the remote keyservice for the internal Android device, the keyservice listen port 12001 is always bound to a local network device having one of the follwing IP addresses:

* `127.0.0.1` (localhost) on Android-only devices, e.g. P630 (Neo) or T650c (Trinity)
* `192.0.2.6` (PPP network device) on hybrid OS devices like CM5, M440 or M424, where SDI Server runs on Engage side (IP address `192.168.50.2` for old OS versions is also supported).


The local network devices listed above can be considered as trusted, since device internal connections are accepted only. Remote connections outside from the device will be declined to avoid terminal key/certifcate being misused by undesired TCP clients. Hybrid OS devices use an internal PPP network `192.0.2.0`, where the Android device uses IP address `192.0.2.5` and the Engage device the IP address 192.0.2.6. Binding the keyservice port to `192.0.2.6` will restrict usage of SDI remote keyservice for Android only.

The remote keyservice with new Protocol type 'K' only supports a thin scope of SDI commands, which are descripted in chapter [Remote Keyservice (72-XX)]. New or existing TLS components in Verifone terminals most likely implemented with OpenSSL can use this minimal command set to invoke secure routines required for the TLS authentication with RSA.

OpenSSL provides an engine concept, which allows to implement a SSL engine to invoke RSA private key operations in a secure way without the need to hold the private key in application context.


Such an OpenSSL engine using the SDI remote keyservice is already implemented by ADKIPC project with library `engine_keyservice_sdi.so`. The project provides an easy-to-use API for several terminal platforms. OpenSSL engine `engine_keyservice_sdi.so` comes along with the IPC distribution packages and is fully integrated in ADKIPC's TLS component ready for use. Of course, the provided SSL engine can also be integrated in already existing OpenSSL implementations. For more details please refer to documentation of the ADKIPC project.

Payment applications running on Engage (not on Android) use `engine_keyservice.so`, which is a local keyservice library provided by OS. This engine provides direct access for OpenSSL to use keys/certificates in Vault, thus, these applications don't need to access to SDI remote keyservice.


## Application Protocol

The Application Layer is based on ISO 7816 or APDU. The command and response pairs have the following formats: ![SDI_AppProtCmdResp.png](.//SDI_AppProtCmdResp.png)Application Command and Response

The structure of a SDI command is as follows:

* **CLA**: Class of command
* **INS**: Specific Instruction within command class
* **P1-P2**: See P1-P2 Coding (see [Coding of P1 and P2])
* **Data**: Command data (see [Data Coding])


A SDI response contains the following fields:

* **SW1**: Status word 1 (see [Status Word Coding])
* **SW2**: Status word 2 (see [Status Word Coding])
* **Data**: Response data (see [Data Coding])


The Application Protocol shall also have a callback flow required for EMV: ![SDI_AppProtCmdRespCallback.png](.//SDI_AppProtCmdRespCallback.png)Application Command and Response with Callback


### Coding of P1 and P2

The P1-P2 byte shall be used for either:

* **P1**: Secure channel control (appears as **SC** in this document)
* **P2**: Instruction qualifier

The coding shall be: ![SDI_P1P2Coding.png](.//SDI_P1P2Coding.png)P1-P2 Coding

Example: ![SDI_P1P2SecureMsg.png](.//SDI_P1P2SecureMsg.png)P1-P2 Secure Messaging


### Data Coding

Three types of data encoding shall be used:

* **TLV**: Unless a DOL or COL the data shall be encoded using BER-TLV (ISO/IEC 8825). Both Primitive and Constructed TLVs shall be used. Constructed data shall be included in the **F0** Constructed Tag.
* **DOL**: The data defines a list of Tags and Lengths required. The response shall include only the data (only values, no Tag or Length). DOL requests data shall be included in the **F1** Constructed Tag and DOL responses in the **F2** Constructed Tag.
* **COL**: The data defines a list of Tags and Lengths required. The response shall be constructed using TLV. COL data shall be included in the **F3** Constructed Tag.

The Tags within a constructed tag may appear in any order and not always in the order defined in this document.


### Status Word Coding

The following Status Words (SW1 / SW2) are defined:


| SW1  | SW2  | Comment   |
|  -------- | -------- | -------- |
| 90  | 00  | All OK   |
| 62  | 00  | Tag Error   |
| 63  | 00  | Tag Length Error   |
| 64  | 00  | Execution Error   |
| 64  | 05  | Canceled by user   |
| 64  | 0A  | SDI-Server is busy (e.g. UI menu entered or another command blocks resource)   |
| 64  | 0C  | Timeout during Pin Entry   |
| 64  | F6  | MSR data not available Timeout reached (for UX devices only)   |
| 64  | F7  | Card Removal Timeout reached (for UX devices only)   |
| 64  | F8  | Interchar timeout during Pin Entry   |
| 64  | F9  | Command not allowed   |
| 64  | FA  | Main connection already locked (returned for protocol type B/D, if another client owns the payment lock)   |
| 64  | FB  | Invalid File Content   |
| 64  | FC  | File Access Error   |
| 64  | FD  | Logic Error (e.g. wrong command order)   |
| 64  | FE  | Parameter Error   |
| 64  | FF  | Luhn check of the PAN failed   |
| 65  | 00  | Execution Aborted   |
| 66  | 00  | Execution Timeout   |
| 67  | 00  | Message Length Error   |
| 68  | 00  | No SDI Plugin available   |
| 68  | 01  | Unknown plugin ID in the Instruction byte (INS)   |
| 68  | 02  | Invalid or no result data returned by the plugin   |
| 69  | 00  | EPP connection error   |
| 6D  | 00  | Unknown Instruction (INS)   |
| 6E  | 00  | Unknown Class (CLA)   |
| 6F  | B0  | CMAC Error   |
| 6F  | B1  | CMAC Length Error   |
| 6F  | B2  | CMAC Missing Error   |
| 6F  | B4  | Encryption Error   |
| 6F  | B5  | Encryption Length Error   |
| 6F  | B6  | Encryption Missing Error   |
| 6F  | B8  | Decryption Error   |
| 6F  | B9  | Decryption Length Error   |
| 6F  | BA  | Decryption Missing Error   |
| 6F  | C0  | Excessive PIN Requests   |
| 6F  | D0  | Low Battery   |
| 6F  | E0  | No DUKPT Keys Loaded   |
| 6F  | F0  | Unit Tampered   |
| 6F  | F1  | Recovery Mode. SDI only allows [Check For Update (20-1D)] command. (Android only)   |
| 90  | 70  | PIN bypassed   |
| 90  | 71  | No match for card validation   |
| 90  | XX  | EMV error (for XX see [ADK return codes](group___a_d_k___r_e_t___c_o_d_e.md))   |
| 91  | 00  | Callback Request   |
| 94  | 01  | Smart card removed = error caused by cardholder   |
| 94  | 02  | Smart card error caused by terminal   |
| 94  | 03  | Smart card error caused by ICC   |
| 94  | 04  | CTLS: Two cards in the field (only in relation with smart card commands)   |
| 94  | 05  | Smart card error caused for initialization   |
| 94  | 06  | Smart card error caused passing invalid parameters   |
| 94  | F3  | Error In TLV Data Object (only in relation with EMV commands)   |



### SDI access control

Old SDI versions were more or less permissive and all clients were allowed to send any command. But usage of security related resources or functions depended on the security-mode, which SDI was operating with:

* Trusted mode: Local applications connecting from the same device were considered as "trusted" and got full access on SDI interface without restrictions.
* Untrusted mode: Remote SDI clients connecting from the outside world were classified as potentially "untrusted", therefore, SDI operated in a restricted mode.


The following SDI commands and functionalities were affected by the untrusted/restricted mode:

* SDI configuration update required a MAC, see chapter [Software Upload Finalize (20-16)]. Prerequisite for using a MAC is system authentication with [Sys Auth (20-11)]. Optionally, untrusted applications could implement/install a SDI plugin with `SDITrigger_SDIConfig` to validate and update SDI configuration w/o MAC, see chapter [Internal plugin trigger functions].
* EMV configuration update also required a MAC or optionally a SDI plugin with trigger `SDITrigger_EMVConfig`, see chapter [Internal plugin trigger functions].
* By default, [Generic Crypto Interface (70-XX)] was restricted in use.
* By default, SDI command [getMsgSignature (29-04)] was blocked.


With introduction of ACL (access control list) configuration file [acl.json], the SDI access control is now configurable and can be better adjusted to projects requirements. The ACL file contains access rules, which allow to specify SDI command filters on application protocol level (see chapter [Application Protocol]). These filters consists of a whitelist with class/instruction of allowed commands. Further, access rules can be defined for TCP/IP connections or for local applications (running on the same device as SDI). Finally, old security-mode "trusted"/"untrusted" is supported to align behaviour to old SDI versions. Backwards compatibility is guaranteed with a default ACL configuration file, which is installed with the SDI base package. Optionally, an user ACL configuration file can be installed with an user config package on top to extend/overload the defaults.

A complete overview about SDI installation packages for the corresponding platform is provided by chapters [Software for VOS/VOS2 and VOS3] and [Software for Android].


There are 2 different rule sections, which are used in an ACL file:

* Section `"system"`: List of rules for system services with highest priority. This section is always active and only supported by default ACL configuration file, thus, it will be ignored in user ACL configuration.
* Section `"clients"`: List of rules for user applications. This section is supported for both, in default and user ACL configuration file. A valid section section `"clients"` in user ACL file will disable the section in default ACL file and overlay it completely.


The matching rules for the files and its sections are implemented as follows: 

1. Always the first match (from top to bottom) in a section takes precedence. Once a rules has matched, it is applied for the connection. Other rules of this section and in other ACL files are ignored. 
2. Section `"system"` of default ACL files has highest priority and is looked up at first. If no system rule matches, sections `"clients"` are processed afterwards. 
3. If an user ACL configuration file is installed and found, this file is preferred to the default ACL file. A valid section `"clients"` in user ACL file will disable the section in default ACL file and overlay it completelly. 
4. Finally, SDI will use the section `"clients"` of the default ACL file, if no user ACL file is available. 

Every command received by SDI during the session is validated against the command filters of the selected rule. If the command is not whitelisted, SDI declines it with response `64F9` (command not allowed).

TCP/IP connections are identified by its IP address. SDI detects the remote IP address of the client to match a rule with type `tcp`. For identification of local applications SDI has added support for Unix Domain Sockets, which allow to retrieve credentials of the connecting application. The SDI domain socket is available in the filesystem, its location depends on the used platfrom as follows:

* Fusion/Engage: `/tmp/share/sdi.uds`
* Android: `/dev/socket/sdi/sock.uds`
* VOS3: `/dev/socket/sdi.uds`


Applications connecting on the SDI domain socket either can be identified by user (rule type `user`) or by package name (rule type `package`).

 On Fusion/Engage and VOS3 the ACL file typically must implement rules of type `user`, since type `package` is not supported for this platform.

 On Android, the ACL file typically must implement rules of type `package`, since user name for applications are dynamically assigned by Android system and are not user-friendly.

JSON format and supported parameters as well as default ACL files for all platforms are fully described in chapter [acl.json].

SDI access control is implemented for protocol type B and C with protocol library `lib_mADK_PP_Prot_ipc.so` only. This library is always used on Android, thus, SDI access control works out of the box on this platform. Engage/Fusion and VOS3 platforms use protocol library `lib_mADK_PP_Prot_com.so` by default, which provides no access control and no multi connection support (see chapter [Protocol Type C: Multi connection support]). Finally, users can enable the `lib_mADK_PP_Prot_ipc.so` on Engage/Fusion/VOS3 with [COM_IF.CFG] setting `multi_connect_support`, which also activates the SDI access control in the same way.


## SDI Command Overview

The table gives an overview about all supported SDI commands on the different platforms.

The symbols in it have the following meaning:

 „●“ = command is supported without any restrictions

 „○“ = command is supported with restrictions, see subchapter for details

 „‒“ = command is not supported
The column "EPP Support" indicates how the command will be processed in an EPP solution:

 „C“ stands for card side, which means the command is processed on the device, where the card was swiped, inserted or tapped

 „M“ stands for mirrow, which means the command is forwarded to the EPP automatically

 „T“ stands for tag controlled, which means the command is processed on the countertop or EPP unit depending on tag DFA150

| Cla/Ins  | Command  | VOS  | VOS2  | VOS3  | Trinity  | Neo

Android  | VR1

SCR  | EPP

Support  | Remark   |
|  -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 20-00  | [Sync/Turn On (20-00)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  | deprecated   |
| 20-01  | [Turn OFF (20-01)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  | deprecated   |
| 20-02  | [Sys Abort (20-02)] | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 20-03  | [Sys Get Config (20-03)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  | deprecated, use [Get Property (20-1A)] |
| 20-04  | [Sys Get Status (20-04)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  | deprecated, use [Get Property (20-1A)] |
| 20-05  | [Sys Selftest (20-05)] | ●  | ●  | ●  | ●  | ●  | ●  | ●  | deprecated   |
| 20-06  | [Sys Lock Payment (20-06)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 20-07  | [Sys Reset Link (20-07)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 20-09  | [Sys Set Status (20-09)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  | deprecated, use [Set Property (20-19)] |
| 20-11  | [Sys Auth (20-11)] | ●  | ●  | ‒  | ‒  | ‒  | ‒  | ‒  |  |
| 20-13  | [Set Idle Text (20-13)] | ‒  | ●  | ●  | ‒  | ‒  | ‒  | ● T  |  |
| 20-14  | [Software Upload Start (20-14)] | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 20-15  | [Software Upload Transfer (20-15)] | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 20-16  | [Software Upload Finalize (20-16)] | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 20-17  | [Shutdown/Reboot/Sleep (20-17)] | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 20-18  | [Show MAC Desktop (20-18)] | ●  | ●  | ●  | ‒  | ‒  | ‒  | ‒  |  |
| 20-19  | [Set Property (20-19)] | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 20-1A  | [Get Property (20-1A)] | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 20-1B  | [Install Sponsor Cert (20-1B)] | ‒  | ‒  | ‒  | ●  | ●  | ‒  | ‒  |  |
| 20-1C  | [Get SDI version info (20-1C)] | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 20-1D  | [Check For Update (20-1D)] | ‒  | ‒  | ‒  | ●  | ●  | ‒  | ‒  |  |
| 20-1E  | [Get last install error (20-1E)] | ‒  | ●  | ‒  | ‒  | ‒  | ‒  | ● T  |  |
| 20-20  | [External Button (20-20)] | ‒  | ○  | ‒  | ●  | ●  | ‒  | ‒  |  |
| 20-21  | [Enable EPP (20-21)] | ‒  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 20-22  | [Factory Reset (20-22)] | ●  | ●  | ●  | ‒  | ‒  | ‒  | ● M  |  |
| 20-23  | [Read Keystore Certificate (20-23)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 20-24  | [Force Currency Abbreviation (20-24)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  | relevant for standard mode only   |
| 21-01  | [MSR Read (21-01)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 21-02  | [MSR Card Data Entry (21-02)] | ‒  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 21-03  | [MSR Set Options (21-03)] | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 21-04  | [MSR Switch LEDs (21-04)] | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 21-05  | [MSR Set Sensitivity (21-05)] | ‒  | ‒  | ●  | ●  | ●  | ‒  | ● T  |  |
| 22-01  | [PED Get PIN (22-01)] | ‒  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 22-02  | [PED Set PIN Timeout (22-02)] | ‒  | ●  | ●  | ●  | ●  | ‒  | ● M  |  |
| 22-03  | [PED start PIN entry (22-03)] | ‒  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 22-04  | [PED poll PIN entry (22-04)] | ‒  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 22-05  | [PED stop PIN entry (22-05)] | ‒  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 22-06  | [PED Set PIN Input Parameter (22-06)] | ‒  | ●  | ●  | ●  | ●  | ‒  | ● T  |  |
| 23-01  | [Card Detection (23-01)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 23-02  | [Wait Card Removal (23-02)] | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 23-03  | [Start Card Detection (23-03)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 23-04  | [Poll Card Detection (23-04)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 23-05  | [Stop Card Detection (23-05)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 23-06  | [Add Technology (23-06)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 23-07  | [Remove Technology (23-07)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 23-08  | [Provide Callback Response (23-08)] | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 24-01  | [Display Text (24-01)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ‒  | deprecated, use [Handle Display (24-03)] |
| 24-02  | [Display Text with Confirmation (24-02)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ‒  | deprecated, use [Handle Display (24-03)] |
| 24-03  | [Handle Display (24-03)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ● T  |  |
| 24-04  | [Handle Secure Input (24-04)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ● T  |  |
| 24-05  | [Handle Menu (24-05)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ● T  |  |
| 24-06  | [Handle Card Request Display (24-06)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ● T  |  |
| 24-07  | [Display Idle Screen (24-07)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ● T  |  |
| 24-08  | [Handle Signature Capture (24-08)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ●  |  |
| 24-09  | [Activate LEDs (24-09)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ●  |  |
| 24-0A  | [Handle HTML Dialog (24-0A)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ● T  |  |
| 24-0B  | [Get Async Display Result (24-0B)] | ‒  | ○  | ○  | ‒  | ‒  | ‒  | ● T  |  |
| 25-00  | [Set Printer Property (25-00)] | ‒  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 25-01  | [Get Printer Property (25-01)] | ‒  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 25-02  | [Print HTML (25-02)] | ‒  | ○  | ○  | ○  | ○  | ‒  | ‒  | UX302: 6400 after 10 seconds   |
| 25-04  | [Print BITMAP (25-04)] | ‒  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 28-00  | [VCL Registart SRED Request (28-00)] | ○  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 28-01  | [VCL Status Request (28-01)] | ○  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 28-02  | [VCL Advance DDK (28-02)] | ○  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 28-03  | [VCL Request eParms (28-03)] | ○  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 28-06  | [VCL Request Diag Query (28-06)] | ○  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 28-07  | [VCL Request Derive Query (28-07)] | ○  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 28-08  | [VCL Override Message Query (28-08)] | ○  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 28-09  | [VCL KSN Request (28-09)] | ○  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 28-0A  | [VCL kmailin Request (28-0A)] | ○  | ○  | ○  | ○  | ○  | ‒  | ‒  |  |
| 29-00  | [getEncData (29-00)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 29-01  | [getEncMsgData (29-01)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 29-02  | [fetchTrxTags (29-02)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 29-03  | [clearDataStore (29-03)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 29-04  | [getMsgSignature (29-04)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 29-05  | [performValidationChecks (29-05)] | ●  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 29-06  | [getValidationInfo (29-06)] | ●  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 29-07  | [getEncTrxData (29-07)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 29-08  | [setEncTrxData (29-08)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 29-09  | [endEncTrxData (29-09)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 29-0A  | [getEmvInfo (29-0A)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 31-10  | [NFC Client Init (31-10)] | ●  | ●  | ●  | ●  | ●  | ‒  | ● M  |  |
| 31-11  | [NFC Get Version (31-11)] | ●  | ●  | ●  | ●  | ●  | ‒  | ● T  |  |
| 31-00  | [NFC Ping (31-00)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-01  | [NFC Pass Through Open (31-01)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-02  | [NFC Pass Through Close (31-02)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-03  | [NFC Pass Through Field On (31-03)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-04  | [NFC Pass Through Field Off (31-04)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-05  | [NFC Pass Through Field Polling (31-05)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-07  | [NFC Pass Through Card Activation (31-07)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-09  | [NFC Pass Through Ftech Baud (31-09)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-13  | [NFC Pass Through Field Polling Full (31-13)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-0A  | [NFC Mifare Authenticate (31-0A)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-0B  | [NFC Mifare Read (31-0B)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-0C  | [NFC Mifare Write (31-0C)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-0D  | [NFC Mifare Increment (31-0D)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-0E  | [NFC Mifare Decrement (31-0E)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-15  | [NFC Mifare Increment Only (31-15)] | ●  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 31-16  | [NFC Mifare Decrement Only (31-16)] | ●  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 31-17  | [NFC Mifare Transfer (31-17)] | ●  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 31-18  | [NFC Mifare Restore (31-18)] | ●  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 31-0F  | [NFC Felica Exchange (31-0F)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-14  | [NFC Felica Polling (31-14)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-1C  | [NFC APDU Exchange (31-1C)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-1D  | [NFC Pass Through Field Polling ABF (31-1D)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-20  | [NFC Target Action (31-20)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 31-21  | [NFC Create Ndef (31-21)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 32-00  | [VAS Terminal Config (32-00)] | ●  | ●  | ●  | ●  | ●  | ‒  | ● M  |  |
| 32-01  | [VAS Terminal Read Config (32-01)] | ●  | ●  | ●  | ●  | ●  | ‒  | ● T  |  |
| 32-02  | [VAS Read Config (32-02)] | ●  | ●  | ●  | ●  | ●  | ‒  | ● T  |  |
| 32-03  | [VAS Activate (32-03)] | ●  | ●  | ●  | ●  | ●  | ‒  | ●  |  |
| 32-05  | [VAS Update Config (32-05)] | ●  | ●  | ●  | ●  | ●  | ‒  | ● M  |  |
| 32-06  | [VAS Cancel Config (32-06)] | ●  | ●  | ●  | ●  | ●  | ‒  | ● M  |  |
| 32-07  | [VAS Preload (32-07)] | ●  | ●  | ●  | ●  | ●  | ‒  | ● M  |  |
| 32-08  | [VAS Cancel Preload (32-08)] | ●  | ●  | ●  | ●  | ●  | ‒  | ● M  |  |
| 32-09  | [VAS Decrypt (32-09)] | ●  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 39-00  | [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 39-01  | [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata)
[EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 39-02  | [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata)
[EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 39-03  | [EMV_CT_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey)
[EMV_CT_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-readcapkeys) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 39-04  | [EMV_CT_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 39-06  | [EMV_CT_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 39-10  | [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction) | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 39-11  | [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline) | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 39-12  | [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 39-13  | [EMV_CT_updateTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags) | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 39-15  | [EMV_CT_EndTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-endtransaction) | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 39-16  | [EMV_CT_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getcandidatedata) | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 39-17  | [EMV_CT_CheckSupportedAID()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-checksupportedaid) | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 41-01  | [Smart Card Detect (41-01)] | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 41-02  | [Smart Card Activate (41/42-02)] | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 41-03  | [Smart Card Exchange APDU (41/42-03)] | ○  | ○  | ○  | ○  | ○  | ○  | ● C  |  |
| 41-04  | [Smart Card Deactivate (41/42-04)] | ●  | ●  | ●  | ●  | ●  | ●  | ● C  |  |
| 41-05  | [EMV_CT_Send_PIN_Offline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline) | ●  | ●  | ●  | ●  | ●  | ‒  | ● C  |  |
| 41-09  | [EMV_CT_LED()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led) | ●  | ●  | ●  | ●  | ●  | ●  | ● T  |  |
| 40-00  | [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework)
[EMV_CTLS_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 40-01  | [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata)
[EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 40-02  | [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)
[EMV_CTLS_GetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getapplidataschemespecific) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 40-03  | [EMV_CTLS_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-storecapkey)
[EMV_CTLS_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-readcapkeys) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 40-04  | [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 40-06  | [EMV_CTLS_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal) | ●  | ●  | ●  | ●  | ●  | ●  | ● M  |  |
| 40-10  | [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 40-11  | [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 40-12  | [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 40-15  | [EMV_CTLS_EndTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-endtransaction) | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 40-16  | [EMV_CTLS_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata) | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 40-20  | [EMV_CTLS_Break()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-break) | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 42-02  | [Smart Card Activate (41/42-02)] | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 42-03  | [Smart Card Exchange APDU (41/42-03)] | ○  | ○  | ○  | ○  | ○  | ○  | ●  |  |
| 42-04  | [Smart Card Deactivate (41/42-04)] | ●  | ●  | ●  | ●  | ●  | ●  | ●  |  |
| 43-03  | [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led) | ‒  | ‒  | ‒  | ‒  | ‒  | ‒  | ●  |  |
| 43-04  | [EMV_CTLS_LED_SetMode()](group___a_d_k___l_e_d.md#function-emv-ctls-led-setmode) | ‒  | ‒  | ‒  | ‒  | ‒  | ‒  | ●  |  |
| 43-05  | [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)
[EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended) | ‒  | ‒  | ‒  | ‒  | ‒  | ‒  | ‒  |  |
| 70-00  | [Crypto Open (70-00)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-01  | [Crypto Close (70-01)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-02  | [Crypto Encrypt (70-02)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-03  | [Crypto Decrypt (70-03)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-04  | [Crypto Sign (70-04)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-05  | [Crypto Verify (70-05)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-06  | [Crypto Updatekey (70-06)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-07  | [Crypto Set Key Set (70-07)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-08  | [Crypto Get encrypted Pin (70-08)] | ●  | ●  | ●  | ●  | ●  | ‒  | ‒  |  |
| 70-09  | [Crypto Get Key Inventory (70-09)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-0A  | [Crypto Get Key Data (70-0A)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-0B  | [Crypto Get Status (70-0B)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 70-0C  | [Crypto Get Versions (70-0C)] | ●  | ●  | ●  | ●  | ●  | ●  | ‒  |  |
| 72-00  | [Read Certificate (72-00)] | ‒  | ‒  | ‒  | ●  | ●  | ‒  | ‒  |  |
| 72-01  | [RSA Private Key Calculate (72-01)] | ‒  | ‒  | ‒  | ●  | ●  | ‒  | ‒  |  |



## System Interface (20-XX)


### System Tags

The following tags shall be used with the System CLA (20):


| Name  | Tag  | Min

Len  | Max

Len  | Get Config

 (20 03)  | Get Status

 (20 04)  | Set Status

 (20 09)   |
|  -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| TLV Constructor  | F0  | 00  |  | ●  | ●  | ●   |
| DOL Constructor  | F1  | 00  |  | ●  | ●  |  |
| DOL Data  | F2  | 00  |  | ●  | ●  |  |
| COL Constructor  | F3  | 00  |  | ●  | ●  |  |
| CPU Unique ID  | C0  | 14  | FF  | ●  |  |  |
| Serial Number  | C1  | 0C  | 0C  | ●  |  |  |
| Boot Software ID  | C2  | 24  | 24  | ●  |  |  |
| Application Software ID  | C3  | 24  | 24  | ●  |  |  |
| Hardware ID  | C4  | 04  | 20  | ●  |  |  |
| IFM ID  | C5  | 10  | 10  | ●  |  |  |
| EMV L2 ID  | C6  | 08  | 80  | ●  |  |  |
| Sys Time Date YYYYMMDDhhmmss  | D0  | 07  | 07  |  | ●  | ●   |
| Tamper Status  | D2  | 09  | 09  |  | ●  |  |
| Battery Charge + Charging Status  | D4  | 02  | 02  |  | ●  |  |
| Battery Voltage (Main, Coin)  | D5  | 04  | 04  |  | ●  |  |
| Language ID  | D6  | 01  | 01  |  | ●  | ●   |
| Card Entry Value Deactivation  | D7  | 01  | 01  |  | ●  | ●   |
| Card Entry Mode  | D8  | 01  | 01  |  | ●  | ●   |




* The twenty bytes of the CPU Unique ID are comprised of the HW Unique ID (16 bytes) and the CPU Device ID (4 bytes) 
* Because the access to the Hardware ID is very limited here it is better to use [Get Property (20-1A)] to get the Hardware model name 
* The length of the EMV L2 ID is variable and has to be in range between 8 and 128 bytes 
* The Time Date format is as follows (all bytes are coded in hexadecimal):

 YYYY: First byte is hundreds of years, second is units (i.e. 2015dec is coded as 14 0F)

 MM: Month (i.e. December is coded as 0C)

 DD: Day (i.e. 31st is coded as 1F)

 hh: Hour, in 24 hour format (i.e. 11dec PM is coded as 17hex)

 mm: Minutes (i.e. 59dec is coded as 3B)

 ss: Seconds (i.e. 47dec is coded as 2F) 
* The Battery Charge + Status has two bytes: 
    * 1st Byte: current charge level as percentage (from 0% to 100%, coded as 00 to 64hex) 
    * 2nd Byte: Charge status:

 00: Charging in progress

 01: Charging ended

 02: Charging suspended (to continue)

 03: Charging fault 
* Language ID: Tag values are listed in chapter [Supported System Languages]


The Card Entry Value Deactivation is used to skip the entry of parameters during the input of the manual card data. In default all parameters have to be entered. They can be deactivated by setting the D7-Tag according the following table:


| b8  | b7  | b6  | b5  | b4  | b3  | b2  | b1  | Meaning   |
|  -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| RFU  | RFU  | RFU  | RFU  | RFU  | RFU  | 0  | 1  | Skip Card Verification Code Entry   |
| RFU  | RFU  | RFU  | RFU  | RFU  | RFU  | 1  | 0  | Skip Skip Expiry Date **and** Card Verification Code Entry   |
| RFU  | RFU  | RFU  | RFU  | RFU  | 1  | 0  | 0  | Enter CVV without any other values (a magnetic card needs to be read before)   |


The Card Entry Mode is used to choose between performing the manual card data entry in one screen or in separate screens. In default the entry is performed in one screen. To perform it in separate screens the D8-Tag has to be set to 01. Setting the D8-Tag to 00 will set the manual card data entry mode to one screen.


### Tamper Code

The following table define the tamper code returned by Tamper Status command:


| Tamper Bits  | Tamper Code Name  | Description   |
|  -------- | -------- | -------- |
| 0001  | Tamper voltage  | The VBAT voltage is outside the valid range   |
| 0002  | Tamper clock  | The 32.768 kHz clock source is outside the valid range   |
| 0004  | Tamper temperature  | Temperature is outside of specification   |
| 0008  | Tamper pin 0  | Tamper pin does not equal its expected value   |
| 0010  | Tamper pin 1  | Tamper pin does not equal its expected value   |
| 0020  | Tamper pin 2  | Tamper pin does not equal its expected value   |
| 0040  | Tamper flash  | Flash security is disabled   |
| 0080  | Tamper monotonic  | The RTC monotonic counter is overflow   |
| 0100  | Tamper time  | RTC time overflow   |
| 0200  |  | Reserved   |
| 0400  |  | Reserved   |
| 0800  |  | Reserved   |
| 1000  |  | Reserved   |
| 2000  | No valid tamper status  |  |
| 4000  | No coin cell bat  | Indicate if there is no coin cell or there is low voltage on coin cell.

In this case the tamper time stamp will not be valid.   |
| 8000  | Physical Tamper  | Indicate if the unit is currently physical tamper (currently tamper).   |




### Sync/Turn On (20-00)

The Sync/Turn On command informs about the maximum message size for the data exchange between the Host device and the SDI Server.

**This command is deprecated and should not be sent to the device for new implementations! All message sizes are as described in [Transport Layer]**

In case of response code '64 00' additional tag DFA000 may include detailed information about the error reason.


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 00  | 00  | 00  | None   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Max. message size  | All OK   |


The figure below demonstrates the Protocol Link Setup in detail: ![SDI_Protocol_Link_Setup.png](.//SDI_Protocol_Link_Setup.png)Protocol Link Setup

The 1st byte includes the length of the response data. Max. message size is valid for both directions (command and response messages)


Example: 

```cpp
// Command to turn on PINpad
20 00 00 00

// Response
90 00 02 10 00
```



### Turn OFF (20-01)

This command returns to the idle screen. The power management is done according to the device configuration.

**This command is deprecated and should not be sent to the device for new implementations!**


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 01  | 00  | 00  | None   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |




### Sys Abort (20-02)

This command forces the abort of the following commands in progress:

* [MSR Read (21-01)]
* [MSR Card Data Entry (21-02)]
* [Card Detection (23-01)]
* [Display Text with Confirmation (24-02)]
* [Handle Display (24-03)] (synchronous with timeout)
* [Handle Secure Input (24-04)]
* [Handle Menu (24-05)]
* [Handle Signature Capture (24-08)]
* [Handle HTML Dialog (24-0A)]
* [Smart Card Detect (41-01)]
* [PED Get PIN (22-01)]
* [Sys Lock Payment (20-06)] (protocol type D only)

There is no guarantee that the active command is always cancelled. Only a small set of commands (see list above) are cancelable at all and it might depend on command progress or user interaction, if it will be considered. In addition, SDI will just ignore it beyond the point of no return.


Please be aware of different response behaviour when using different protocol types: 

* Protocol type D: Sys Abort (20-02) is always unidirectional and SDI never provides a command response for it. Thus, command field P2 (see below) to control behaviour for command response is always ignored. Command Sys Abort (20-02) uses the message ID of the active command, which shall be cancelled. Finally, command Sys Abort (20-02) with a message ID referring an inctive command is ignored without command response, the same is with Sys Abort (20-02) referring a side command. Sys Abort (20-02) takes a special role to cancel an active command [Sys Lock Payment (20-06)] to release the payment lock (see chapter [Payment lock/unlock] for more details), 
* Protocol type B: If Sys Abort (20-02) is received during an active command, SDI does not provide a command response for it. If the command was successfully cancelled, a command response with error code `6500` (execution aborted) is for the command returned. During SDI is idle (no command active), by default a Sys Abort (20-02) will provide a command response with the same error code. For this case, SDI client might use command field P2 (bitmask) with bit 0x01 to control response behaviour. With enhancements for protocol type D, the P2 bit 0x02 was added, to allow a SDI client owning the payment lock to release it, which means that SDI client from another connection can send a type B command to reserve the main connection. Thus, a SDI client, which holds the payment lock, no longer requires to close the main connection. 
* Protocol type C: The command is always returns with a command response with error code '64F9' (command not allowed). 
* Protocol type A: Same as for protocol type B, even P2 bit 0x02 is ignored, since A does not support side connections. 

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 02  | 00  | XX  | None  | for XX see description below   |


Meaning of P2 command field (bitmask, for protocol type A/B only):

* `00`: Send a response, if no command is active (default)
* `01`: Suppress response, if no command is active
* `02`: Release payment lock (ignored if not main connection)


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 65  | 00  | None  | Execution Aborted   |


With a two piece solution command Sys Abort (20-02) will be forwarded from Countertop to EPP automatically.



### Sys Get Config (20-03)

Get the requested parameters of the device configuration in DOL or COL format (see [System Tags])

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 03  | SC  | 00  | Tag, DOL or COL request   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


The following system tags are returned with default values: 

* CPU Unique Id (C0) is returned as 20 times 30 
* HW Id (C4) returns the Hardware Id 
* IFM Id (C5) is returned as 16 times 00 
* EMV L2 (C6) id returns up to 128 bytes, depending on the requested number of bytes. 

Example using DOL: 

```cpp
// Command to get the device serial number
20 03 00 00 F1 02 C1 0C

// Response to DOL
90 00 F2 0C 31 32 33 34 35 36 37 38 39 3A 3B 3C
```

Example using COL: 

```cpp
// Command to get the device serial number
20 03 00 00 F3 02 C1 0C

// Response to COL
90 00 F0 0E C1 0C 31 32 33 34 35 36 37 38 39 3A 3B 3C
```

This command is not supported on EPP.



### Sys Get Status (20-04)

Get device status information from the PINPad (see [System Tags])

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 04  | SC  | 00  | Tag, DOL or COL request   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Example using DOL: 

```cpp
// Command to get the device time and date
20 04 00 00 F1 02 D0 07

// Response to DOL
90 00 F2 07 14 0D 02 16 0C 00 00
```

Example using COL: 

```cpp
// Command to get the device time and date
20 04 00 00 F3 02 D0 07

// Response to COL
90 00 F0 09 D0 07 14 0D 02 16 0C 00 00
```

This command is not supported on EPP.



### Sys Selftest (20-05)

Performs a selftest on the PINPad and returns the result.

**This command is deprecated and should not be sent to the device for new implementations!**


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 05  | 00  | 00  | None   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |




### Sys Lock Payment (20-06)

Obtains the payment lock, which is applied to connection of the sending SDI client. After the lock was obtained successfully, the related SDI client has access to the full SDI function scope and can use the complete SDI interface including payment commands. SDI payment commands usually use resources or internal APIs, which disallow concurrent usage or invocation, e.g. [Card Detect Interface (23-XX)], [Card Detect Interface (23-XX)], [EMV System Interface] (and other interfaces required for payments) can be used exclusive only. For this reason, SDI has introduced command Sys Lock Payment (20-06) when adding support for protocol type D (see [Protocol Type D: Concurrent command support]). This new protocol type allows to do use both, side commands (which can be used without the payment lock) and payment commands (which require the lock) on the same or on different connections. For more details please read chapter [Payment lock/unlock] carefully.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]). With protocol type C (see [Protocol Type C: Multi connection support]) the payment lock cannot be obtained on a side connection, therefore, the command is declined with response code '64F9' (command not allowed). With protocol type A or B command Sys Lock Payment (20-06) is treated as every other command type A or B command, which tries to optain the payment lock to use the connection as main connection.


Please be aware of different response behaviour when using different protocol types: 

* Protocol type D: On success the command is kept open and not responded with a command response. The unidirectional callback [Intermediate Result Callback (99-01)] is replied instead to signal that the payment lock was obtained successfully. Afterwards full SDI command interface is accessible for the client including mentioned payment interfaces. Even the command is not finalized, protocol type D allows to send further commands on this connection, while the open command Sys Lock Payment (20-06) holds payment lock for them. Once a SDI client has finished the payment or no longer requires the payment lock, it must use [Sys Abort (20-02)] with the message ID of Sys Lock Payment (20-06) to cancel and finalize it, which corresponds the release of the payment lock. Related command flows can also be found in chapter [Payment lock/unlock]. Other SDI clients, which send command Sys Lock Payment (20-06) on a connection not owning the lock (or a second time on the connection which owns the lock) are declined with 64FA (already locked) immediately. Of course, in this case the command is finalized and does not require cancellation with [Sys Abort (20-02)]. 
* Protocol type B: The command is always responded with a command response. Response code '9000' means that the payment lock was successfully obtained and this connection will be used by SDI as main connection. A second Sys Lock Payment (20-06) on the main connection will also lead to a command response with error code '9000'. Sys Lock Payment (20-06) on another connection than the main connection will be declined with 64FA (already locked) immediately. 
* Protocol type C: The command is always returns with a command response with error code '64F9' (command not allowed). 
* Protocol type A: Same as for protocol type B, even A does not support side connections. 

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 06  | 00  | 00  | None   |


Intermediate result callback (when using protocol type D): 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 99  | 01  | None  | Payment lock obtained successfully for this connection   |


Response (when using protocol type D): 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 65  | 00  | None  | Payment lock released successfully by [Sys Abort (20-02)] |
| 64  | FA  | None  | This or another connection has already obtained the payment lock   |


Response (when using protocol B with multi connection support): 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | Payment lock obtained successfully (or already main connection)   |
| 64  | FA  | None  | Payment lock already owned by another connection (main connection)   |


Response (when using protocol C): 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 64  | F9  | None  | Command not allowed   |


Response (when using protocol A/B without multi connection support): 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | Payment lock obtained successfully (or already main connection)   |




### Sys Reset Link (20-07)

For communication types don't having some kind of connection set up like sockets (e.g. an USB or a serial link) command Sys Reset Link (20-07) is used to trigger an EOF (end-of-file) to reset the permanent link. With the next command on that link, SDI detects a new connection and more or less starts with a "fresh" state.

The command is not supported for communication types providing a connection setup with underlying I/O layers. For instance, SDI will just decline the command with response code '64F9' (command not allowed), if command Sys Reset Link (20-07) is used on a TCP link. 

The command was primary introduced for Titus platform using a single USB-C link (emulated serial connection), but it works also for platforms VOS/VOS2/VOS3 using an USB or serial link. 

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


The command will cause the following actions just like a TCP/IP client when closing a connection to SDI: 

* It closes all crypto handles of [Generic Crypto Interface (70-XX)], which we're opened on this connection with [Crypto Open (70-00)]
* It aborts an active PIN entry, which was started with [PED start PIN entry (22-03)] on this connection 
* It aborts an active card detection, which was started with [Start Card Detection (23-03)] on this connection 
* It aborts an active update upload, which was started with [Software Upload Start (20-14)] on this connection 
* For using it on the main connection, it will release the payment lock. In difference to [Sys Abort (20-02)] for an active [Sys Lock Payment (20-06)], no response is provided for protocol type D. 
* For using it on the main connection with an active payment command, SDI attempts to abort the processing SDI main thread with signal about the connection lost. The aborted command won't provide a response. 
* For using it on a side connection with an active side command, command Sys Reset Link (20-07) is executed after the previous commands has been finished. 
* For both, on a side and on main connection, command Sys Reset Link (20-07) will reset the global busy flag and unlock other connections not to decline commands with response code '640A' (busy), if the busy lock was set by a previous command on this connection. 

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 07  | 00  | 00  | None   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 64  | F9  | None  | Command not allowed   |




### Sys Set Status (20-09)

Set device status info (see [System Tags])

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 09  | SC  | 00  | Constructed   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 64  | 00  | None  | Execution Error   |


Only one TLV field may be supplied with each command. For setting different status info fields, separate commands must be issued. 

To set date and time the year has to be "2000" at least. Otherwise an Execution Error '64 00' will be returned.


Example: 

```cpp
// Command to set time and date (to 2010/12/31 - 23:59:59)
20 09 00 00 F0 09 D0 07 14 0A 0C 1F 17 3B 3B

// Response
90 00
```

In the two piece solution this command will be forwarded from the Countertop to the EPP automatically.



### Sys Get KSN (20-10)

Command checks if a key for PED, SRED or E2E encryption/decryption is loaded and returns the corresponding Key Serial Number (KSN) with one of the following default values: ``

`

* PED:&nbsp; 00 00 00 00 00 00 00 00 00 00
* SRED: 11 11 11 11 11 11 11 11 11 11
* E2E:&nbsp; 22 22 22 22 22 22 22 22 22 22

`

``

P2 indicates the DUKPT engine

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 10  | SC  | 00  | None  | For PED KSN   |
| 20  | 10  | SC  | 01  | None  | For SRED KSN   |
| 20  | 10  | SC  | 02  | None  | For E2E KSN   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | KSN[10]  | All OK   |


**Since SDI-Server version greater than 4.23.2 this command is obsolete and will be always responded with 6D00 (Unknown Instruction).**



### Sys Auth (20-11)

This command manages the synchronization of the E2E session key between the Host device and the SDI Server within two steps.

**Mutual [Auth](class_auth.md) and Session Key Setup Step 1**



* Host sends 16 bytes of random to the SDI-Server
* SDI-Server stores the Host random
* SDI-Server encrypts 16 bytes of SDI-Server token and 16 bytes of SDI-Server random (plus the used KSN) and sends this back to the Host
* The Host decrypts the data and stores the SDI-Server token and random

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 11  | 00  | 01  | HostRandom[16]   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Ciphered SDIServerData[32],

E2E KSN[10]  | Decrypted SDIServerData contains:

SDIServerToken[16],

SDIServerRandom[16]   |


Example: 

```cpp
// Mutual Auth and Session Key Setup Step 1 (clear text)
20 11 00 01 E8 68 23 38 9E 52 83 AE EC 52 04 4C A8 0F 3B 9E

// Response (encrypted)
90 00 2A FE 62 3D C7 6B F0 5B 7E D7 08 CA C0 69 12 D9 C4 69 A6 DC 2C 3E C3 CB 99 50 9B F4 0D 48 A5 1C FF FF 98 76 54 33 33 E0 00 A5
```

**Mutual [Auth](class_auth.md) and Session Key Setup Step 2**



* Host and SDI-Server prepare 16 bytes 3DES session key (SK) as XOR of Host Random and SDI-Server Random.
* Host sends 32 bytes data block, which includes 16 bytes of SDI-Server Token and 16 bytes of Host Token. The data block encrypted with 3DES session key (SK).
* SDI-Server decrypts the data block with 3DES session key (SK) and compares the received SDI-Server token with the SDI-Server Token, which sent to the Host in the step 1. If they are same, the Host is authenticated and the SDI-Server continues the step 2. Else authenticate is stopped.
* SDI-Server sends the response to the Host. The response is 32 bytes data block, which includes 16 bytes of Host Token and 16 bytes of SDI-Server Serial Number. The data block encrypted with 3DES session key (SK).
* Host receives decrypts the data block with 3DES session key (SK) and compares the received Host Token with the Host Token, which sent to the SDI-Server in the step 2 command. If they are same, the SDI-Server is authenticated. Else authenticate is stopped.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 11  | 00  | 02  | Ciphered Host Data [32]:

PINPadToken[16], ServerToken[16]   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Ciphered SDIServerData[32]  | Decrypted SDIServerData contains:

HostToken[16],

SDIServerSerialNumber[16]   |


Example: 

```cpp
// Mutual Auth and Session Key Setup Step 2 (encrypted)
20 11 00 02 E6 8D 3D 0B 2B ED E6 92 9B 6F 39 34 38 A9 46 2C 36 15 9A 7E 9F C4 22 8E 93 6C 12 35 8D 40 B6 9A

// Response (encrypted)
90 00 3E 15 68 C3 C3 59 68 1D EA AF EC 7C 12 82 01 C7 F8 48 79 15 A8 17 F8 04 53 8F 97 53 02 DA 81 E7
```

These commands are not supported on EPP.



### Set Idle Text (20-13)

Command to set a text for SDI idle screen (see [Display Idle Screen (24-07)]). The text is stored persistently and re-used after reboot. If no text was set, SDI takes the default text from UI catalog installed with the SDI config package for standard mode (see [Default UI resource files]), which can be also replaced with a custom UI catalog (see chapter [Custom UI text catalogs]).

Using a custom UI catalog to configure an own idle text is the recommended method, since this works system language depended. 

After deletion of the idle text (with field `P2` containing value `01`) the SDI will be display the text from the UI catalog of current system language.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 13  | SC  | XX  | Constructed  | P2: 00 = set, 01 = delete   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA001  | var.  | M  | utf-8  | Idle Text   |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 64  | 00  | None  | Execution Error   |


Examples: 

```cpp
// Command to set the idle text to "\n\n     Hello world"
20 13 00 00 F0 16 DF A0 01 12 0A 0A 20 20 20 20 20 48 65 6C 6C 6F 20 77 6F 72 6C 64

// Response
90 00
```



```cpp
// Command to delete the idle text
20 13 00 01

// Response
90 00
```



### Software and Configuration Upload

The Secure Data Interface provides 2 different methods to install software updates and SDI configuration files: 

* **Software/File Upload:**

 This method is used to upload a file (e.g. an software download package or configuration file) and to install it after the successful transfer.

 The following commands are used for this method: 
    * [Software Upload Start (20-14)] as start command to initiate the file upload 
    * [Software Upload Transfer (20-15)] to transfer the file content in multiple data records 
    * [Software Upload Finalize (20-16)] as final command to validate the uploaded file records and to install the file 
Software download packages or configuration files are directly uploaded to SDI server over Secure Data Interface. A software download package (TGZ or TAR ball) contains internal bundles and install packages. Each bundle and package comes along with a signature. After file upload the software package is installed with Secure Installer API, which is part of the Engage OS and not supported on Android platform (see Check For Update below). Configuration files are authenticated through a MAC, which provided with the final command [Software Upload Finalize (20-16)]. The MAC is generated with the session key, which was negotiated with the system authentication (see chapter [Sys Auth (20-11)] for more details). Keep in mind that no partial update of configuration files is supported, only complete configuration files have to be uploaded. In case of upload and authentication, the existing update package or configuration file will be deleted after successful installation.  

* **Check For Update:**

 This method is used to check for pending updates and to install one or multiple update packages.

 The following command is used for this method: 
    * [Check For Update (20-1D)]
Update packages may contain software updates or configuration files. In difference to method Software/File Upload the files are not directly uploaded over Secure Data Interface to SDI server. Update packages are uploaded and installed with the Android Secure Installer (Update Service), which is part of the Verifone Android OS. Before upload all files must be packed into an update package (TGZ file), which contains one or more internal ZIP bundles. The update package contains a manifest and a signature for each internal bundle. After the update package was authenticated and verified, the Android Secure Installer extracts the package contents to the update folder of SDI server, before it is notified by Android Secure Installer for pending update. Update packages are provided by SDI users (application or integration team). For more details about Android Secure Installer and the update package format, please refer to Android Secure Installer documentation.  


The Software Update of a two piece solution has to be performd as followed: 

1. Update of the EPP and after this 
2. Update of the Countertop! 


#### Software Upload Start (20-14)

Command to initiate the upload of a download package for software update. In addition, the command supports upload of several configuration files or packages to install UVRK payload files.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). If a SDI command on another connection is active, Software Upload Start (20-14) is declined with response code '640A' (busy). In addition, during processing the upload (until completion with [Software Upload Finalize (20-16)]), SDI server will decline all other SDI commands with response code '640A' (busy).


The type for file upload is specified by TLV tag `DFA01E` (upload type). If the tag is not provided, upload type `00` (Software Update) is taken as default. Some upload types additionally require TLV tag `DFA020` (filename), which is expected as filename without path prefix. For details, see list of supported upload types in table below.

Supported values for TLV tag `DFA01E` (upload type) are the following: 
| Tag&nbsp;Value | Description  |
|  -------- | -------- |
| `00` | Software Update (supported on VOS/VOS2 and Titus only)

 TLV tag `DFAO20` (filename) is mandatory for this upload type on VOS/VOS2, which must have `*.tgz` or `*.tar` as file extension.

 On Titus, the tag is optional, if provided, the file extension `*.tar` is expected.

 A download package is used as upload file, for which SDI will use API of Secure Installer for installation on the target. Thus, please ensure that the package format is considered for the corresponding platform, otherwise Secure Installer will decline the installation.  |
| `01` | White list configuration (not supported on Titus)

 A whitelist file (JSON format) is expected as upload file, see chapter [whitelist.json] for more details. TLV tag `DFAO20` (filename) is not expected by SDI and ignored, if provided.  |
| `02` | Sensitive tags configuration (not supported on Titus)

 A JSON file with additional sensitive EMV tags is expected as upload file, see chapter [sensitivetags.json] for more details. TLV tag `DFAO20` (filename) is not expected by SDI and ignored, if provided.  |
| `03` | Card ranges configuration (not supported on Titus)

 A card ranges configuration files (JSON format) is expected as upload file, see chapter [sensitivetags.json] for more details. TLV tag `DFAO20` (filename) is not expected by SDI and ignored, if provided.  |
| `0B` | Install commerce platform package (supported on VOS2 only)

 TLV tag `DFAO20` (filename) is mandatory for upload type. TLV tag `DFAO20` (filename) is mandatory for this upload type, which must have `*.zip` as file extension. For details about the format of a CP package, please refer to documentation of CP installer. 

 |
| `0C` | EMV configuration package (not supported on Titus)

 This package is uploaded as an uncompressed TAR file containing configuration files for ADKEMV, on which this component requires write access (such as `EMV_Applications.xml`, `EMV_CTLS_Terminal.xml`, `EMV_Terminal.xml` etc.). All files in the archive are expected flat on top level without any subfolders. SDI does not expect the filename of the package, thus, TLV tag `DFAO20` (filename) is ignored, if provided. EMV configuration file `emv-desired.xml` (with EMV kernel/device specifications) is not allowed in EMV configuration package. Please use an user config package to install this file persistenly (see chapter [User config package] and [User config package]). 

Upload of an EMV configuration package will exit EMV CT/CTLS Framework(s) and disable the EPP (if connected and enabled). Therefore, applications must consider after upload to initialize EMV CT/CLTS Framework(s) (see [EMV System Interface]) and enable the EPP again (see [Enable EPP (20-21)]). 

 |
| `0D` | UVRK package (supported on Titus only)

 This package is uploaded as uncompressed TAR file containing *.vrk2.json payload files. All files in the archive are expected flat on top level without any subfolders. SDI does not expect the filename of the package, thus, TLV tag `DFAO20` (filename) can be omitted. If provided, SDI will check the filename against pattern `*.uvrk.tar`, which is expected as filename for UVRK packages. For details about the format of an UVRK package, please refer to Unified VRK package specification. 

 |


Upload type `00` (Software Update) is not supported on Android. For software update on this platform please refer to chapter [Check For Update (20-1D)]. 

Configuration upload with upload types `01`-`03` and `0C` might require additional authentication by MAC, if the connection of SDI client is not considered as trusted, see [Software Upload Finalize (20-16)] for more details. Please also note that configuration upload will install files to flash directories of SDI for direct use. No file backups were kept after upload and SDI might modify files during runtime afterwards. In addition, a [Factory Reset (20-22)] will delete the configuration files or recover them in flash to defaults (if any). Therefore, applications have to consider to upload the configuration files again in this case. If a project requires to overload default configuration files persistenly and to recover them with [Factory Reset (20-22)], the installation of an user config package is the preferred method (for more details see chapters [User config package] and [User config package]).


After successful execution, the payment application must continue with sequence of command [Software Upload Transfer (20-15)] to transfer the file records.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 14  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA020  | var.  | O  | utf-8  | Filename incl. extension (Mandatory for upload types `00` and `0B` (VOS/VOS2 only)   |
| DFA01E  | 1  | O  | b  | Upload type, default: `00` (Software Update)   |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


On Engage the filename must have extension `tar` or `tgz`, otherwise the command is declined. 

The additional optional tag `DFA150` is used to specify the destination device for two piece solutions. Upload types `01`-`03` and `0C` (configuration) are not allowed for EPP.


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


Example: 

```cpp
// Command to initiate the file upload (Software Update)
20 14 00 00 F0 0F DF A0 20 0B 75 70 5F 74 65 73 74 2E 74 67 7A
// Response
90 00
```



#### Software Upload Transfer (20-15)

Command to upload the file, record by record to the terminal.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). Only this connection, which has initiated the upload with [Software Upload Start (20-14)], is allowed to use Software Upload Transfer (20-15). During processing the upload (until completion with [Software Upload Finalize (20-16)]), SDI server will decline all other SDI commands with response code '640A' (busy).


For each record the packet number has to be increased. If the terminal detects a packet number mismatch, it deletes the already stored records and the file update has to be started from scratch. Please note that the upload time depends on communication bandwidth and file size.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 15  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA021  | var.  | M  | b  | Record data. Size is limited by maximum message size of underlying transport layer (see [Transport Layer])   |
| DFA022  | ..4  | M  | b  | Packet number. First packet should be number 1.   |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


Example: 

```cpp
// Command to upload
20 15 00 00 F0 82 03 90 DF A0 21 82 03 84 50 4B 03 04 14 00 02 00 08 00 05 57
7B 47 98 30 7C 69 D0 03 00 00 4A 04 00 00 0A 00 00 00 43 65 72 74 69 66 2E 63
72 74 33 68 62 71 33 68 62 D6 5B C0 CC C4 C8 C4 C4 66 69 6A 6A 6A 60 64 C0 CB
C6 A9 D5 E6 D1 F6 9D 97 91 91 9B 95 C1 C0 D3 50 DE 80 9B 8D 39 94 85 5B 98 25
34 D8 35 C8 40 00 C4 E1 12 E6 0C 4B 2D CA AC 50 48 0D CB 37 54 83 88 E9 32 73
32 33 31 33 32 9A 5B 27 CD 30 10 02 89 30 0B 73 3B BA 38 2B B8 A7 16 E5 26 E6
55 1A 28 88 F3 1A 9A 18 98 19 1A 19 5A 9A 98 1A 98 47 49 F0 1B 19 1A 1A 18 18
02 21 18 44 19 44 1A 1A 13 B0 0C 9B C1 86 4A 06 7C 20 51 1E 11 F6 90 D4 E2 92
78 43 53 B8 83 18 98 58 14 58 42 34 DB 14 0D 9A 18 95 90 BD C6 C8 CA C0 DC C4
C8 CF 00 14 E7 62 6A 62 64 64 78 14 70 E9 63 F7 E3 B4 79 13 8F 5E 9D B8 E2 55
F4 B2 03 27 33 2D EE F7 6F 3A 7C E2 C7 D6 CE D9 A7 1F 7E 98 EB 28 31 D5 48 95
B9 2B 39 32 CF 72 5A 69 A1 D3 8D 50 BD E0 AD 31 6F 56 94 ED 9B C6 D3 25 24 EB
9D 69 EE BF E0 7A 38 A3 A5 C2 4B AE B9 8C B1 FF 9E DE B4 9F 75 F5 61 D7 D2 4B
FD 8E 4C 99 39 31 C6 BE 97 8A E4 36 BE 10 48 32 7B 16 65 E2 E8 6C 95 9B 73 EF
1C EB FE 8D 25 12 65 DB B4 3D 7F 54 97 AD 3C F1 CC 7A 47 BC D4 F9 B2 B5 41 3C
BB CC 4C 6D 83 4E BB E9 4E 6C 7D 5B CD ED 9C E5 37 63 CA BC AF 55 77 BE 33 DB
DF 36 3B 7B 50 20 58 D5 76 61 1B B7 C5 FE 57 0B 37 97 B8 18 31 C8 DD E9 BF CB
37 C1 F9 C5 15 6D 17 1D CF 89 BB 6F BB CD BB D8 72 2E 7B FD AA D7 77 3C 1A 9D
D5 AC E5 EC 66 1A 78 AE E5 FF D4 18 6C C7 A3 F7 68 B5 BA BC 8D 5F A5 F1 86 0E
DE 1B D7 5E 7F BA C6 A1 B2 55 3A CD C2 5C A0 EE F0 67 D1 6A 60 CC 31 30 2E 6E
62 54 00 86 88 8C 81 12 30 FC 64 95 19 19 FF B3 48 18 88 35 88 68 76 15 9E 0B
F8 F2 46 3D F6 54 F0 B2 E9 6E 21 77 75 36 D9 4E 34 50 00 A9 E1 03 A9 11 63 11
49 12 AF FF FE D4 6B 7B A0 E6 C9 A7 5B FC 32 AC 18 E7 B5 89 3F 30 E0 01 A9 E0
67 61 65 66 66 6F 60 80 F0 84 59 58 0D 80 C9 8D C1 A0 94 8D 2B A1 CD 83 B1 67
96 03 30 32 58 D2 0D 52 81 06 19 24 88 31 1A 8A 31 1A 89 31 1A 8B 31 9A 88 31
9A 8A 31 9A 89 31 9A 8B 31 5A 88 31 5A 8A 31 19 1A 00 B1 21 10 1B 01 B1 31 10
9B 00 31 50 8D A3 18 A3 93 18 A3 B3 18 A3 8B 18 A3 AB 18 A3 9B 18 A3 BB 18 A3
87 18 A3 A7 18 A3 97 18 A3 B7 18 A3 8F 18 A3 AF 18 A3 9F 18 A3 BF 81 08 92 B5
4C 20 B7 03 13 2C 83 81 28 92 28 33 48 94 85 89 89 E1 3F 8A 62 16 A8 E2 FF 68
19 84 19 94 78 EE AB 59 7F 95 9C ED B9 49 F6 5E F6 79 DE F2 E8 BA D4 C8 AB 77
FE C6 ED D7 F8 B1 70 B3 EC DD 72 D9 CB 92 FB 9F 56 26 1E 4E D1 30 7E 6A 26 3D
67 E3 EA C3 FF FD 6C B2 2B 64 3D 96 31 7F BB 59 E8 B9 82 3F A8 F8 A0 D2 7E 5D
15 3B FF D9 AD 7C E2 1F 4D 37 E4 F8 46 1D DB D8 78 40 A4 51 E0 54 C3 F7 1A D7
55 C7 1F 69 5C 5E FD 79 D7 95 6D C6 FF B7 6F E8 EB 3C D6 51 DE 59 A7 BC E1 D8
CB 8A E2 35 BB 5F FD 11 9F E7 F4 2A F3 7C EC 3A E9 88 EC A3 29 EF 1F 2D 2D 35
08 AE B8 FB DF A0 22 02 00 01

// Response
90 00
```



#### Software Upload Finalize (20-16)

Final command to validate and install the file, which was previously uploaded with command [Software Upload Transfer (20-15)].

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). Only this connection, which has initiated the upload with [Software Upload Start (20-14)] and [Software Upload Transfer (20-15)], is allowed to finish the upload with Software Upload Finalize (20-16). All other SDI commands are declined with response code '640A' (busy) as long as the upload and the installation are not completed.


For Software Update with upload type `00` (see chapter [Software Upload Start (20-14)]), an optional check of the MD5 file checksum can be requested. After successful validation the terminal installs the software package and does a reboot afterwards.

For configuration file upload with upload types `01`-`03` and `0C` the file must be authenticated through a MAC (TLV tag `DFA01F`), which is provided with tag `DFA01F`. Prerequisite for the MAC calculation is the system authentication with command [Sys Auth (20-11)]. Please note that the system authentication is recently supported on Engage platform only. Other platforms (e.g. Android) might use a SDI plugin, to authorize the configuration file via the trigger SDITrigger_SDIConfig. After successful validation the terminal installs the configuration file without reboot of the terminal.

By default, local SDI clients connecting from the same device are considered as trusted (see chapter [SDI access control]). For these applications the MAC (TLV tag `DFA01F`) can be omitted and an additional SDI plugin to authenticate the configuration is not required. But please note that it is the responsibility of these applications that the provided configuration is authentic! If this default behaviour of SDI server is not desired, projects might implement a corresponsing SDI plugin with their own security.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 16  | SC  | 00  | None  |  |
| 20  | 16  | SC  | 00  | Constructed  | If checksum/MAC is requested   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA023  | 16  | O  | b  | MD5 check sum   |
| DFA01F  | 8  | O  | b  | MAC of the configuration file   |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 90  | 00  | Constructed  | Post installation action   |


Response Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA000 | 4 | O | b | 

* For upload type `00` (Software Update) on VOS/VOS2:

 Post installation action (bit mask).

 01: Reboot is required after installation is complete

 02: Application restart is required after installation is complete 
* For upload type `0D` (UVRK package) on Titus:

 Optional response data in case of error responses. Contains error code from interal SPROC-API function. 

 |


Examples: 

```cpp
// Command to finalize software upload with MD5 checksum: 1020356F6949C4529DFFAD49A146A3419F
20 16 00 00 F0 14 DF A0 23 10 20 35 6F 69 49 C4 52 9D FF AD 49 A1 46 A3 41 9F

// Response
90 00
```



```cpp
// Command to finalize the software upload without checksum check
20 16 00 00

// Response
90 00
```



#### Check For Update (20-1D)

Command to check for available updates on various configuration types and apply those.

This command is only available on Verifone Android platforms. 

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). If a SDI command on another connection is active, Check For Update (20-1D) is declined with response code '640A' (busy). In addition, during processing the command, SDI server will decline all other SDI commands with response code '640A' (busy).


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 1D  | SC  | 00  | None  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA01E  | 1  | M  | b  | Configuration type   |


Configuration Types: 
| Type  | Value  | Description   |
|  -------- | -------- | -------- |
| Whitelist  | 01  | whitelist.json configuration (obsolete, use SDI user config with value 06 instead)   |
| Sensitive Tags  | 02  | sensitivetags.json configuration (obsolete, use SDI user config with value 06 instead)   |
| Card Ranges  | 03  | cardranges.json configuration (obsolete, use SDI user config with value 06 instead)   |
| Firmware  | 04  | secure processor firmware   |
| Keys  | 05  | key configurations   |
| SDI user config  | 06  | SDI user configuration files, see chapter [User config package] for Android   |
| Remove Sponsor  | 07  | check for sponsors to remove from CRTRESET.SYS   |
| Remove SDI user config  | 08  | remove user configuration files, see chapter [User config removal package] for Android   |
| SDI plugin package  | 09  | install SDI plugin(s), see chapter [SDI plugin package] for Android   |
| SDI plugin removal package  | 0A  | remove SDI plugin(s), see chapter [SDI plugin removal package] for Android   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA000  | 4  | O  | b  | Optional response data in case of error responses. Contains error code from interal SPROC-API function.   |




### Shutdown/Reboot/Sleep (20-17)

Executes a system shutdown, reboot or sets the device in sleep or hibernate state.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 17  | 00  | 00  | None  | Shutdown   |
| 20  | 17  | 00  | 01  | None  | Reboot   |
| 20  | 17  | 00  | 02  | None  | Sleep (not supported on Android)   |
| 20  | 17  | 00  | 03  | None  | Hibernate (not supported on Android)   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.



### Show MAC Desktop (20-18)

Switch from SDI to MAC Desktop. SDI is still running in background.

This command is not supported on Android platforms (e.g. Trinity).


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 18  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |




* In case of response code '64 00' additional tag DFA000 include the return value from the MAC.
* This command is not supported on EPP.



### Set Property (20-19)

Access to [sysSetPropertyInt()](namespacevfisysinfo.md#function-syssetpropertyint) and [sysSetPropertyString()](namespacevfisysinfo.md#function-syssetpropertystring) functions via the serialized command interface.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). 

One property can be handled per command call only.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 19  | 00  | 00  | Constructed  | Int Property   |
| 20  | 19  | 00  | 01  | Constructed  | String Property   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFBC01  | ..4  | M  | b  | Property identifier   |
| DFBC02  | var.  | M  | b / ans  | Value identifier   |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.



### Get Property (20-1A)

Access to [sysGetPropertyInt()](namespacevfisysinfo.md#function-sysgetpropertyint) and [sysGetPropertyString()](namespacevfisysinfo.md#function-sysgetpropertystring) functions via the serialized command interface.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). 

One property can be handled per command call only.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 1A  | 00  | 00  | Constructed  | Int Property   |
| 20  | 1A  | 00  | 01  | Constructed  | String Property   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFBC01  | ..4  | M  | b  | Property identifier   |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFBC01  | ..4  | M  | b  | Property identifier   |
| DFBC02  | var.  | M  | b / ans  | Value identifier   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.



### Install Sponsor Cert (20-1B)

Check and Install a Sponsor Certificate.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). If a SDI command on another connection is active, Install Sponsor Cert (20-1B) is declined with response code '640A' (busy). In addition, during processing the command, SDI server will decline all other side commands with response code '640A' (busy).


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 1B  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA12F  | var.  | M  | b  | Sponsor certificate (DER-encoded X.509 certificate)   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | Certificate accepted or still exist   |
| 64  | 00  | None  | Error, certificate not accepted   |


A possibly required restart of the device has to be initiated separately (see [Shutdown/Reboot/Sleep (20-17)])



### Get SDI version info (20-1C)

Get version information of basic SDI components and installed SDI plugins.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 1C  | 00  | 00  | None  |  |
| 20  | 1C  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | Version information successfully returned   |
| 64  | 00  | None  | TLV Export failed   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| FFA103  | var.  | M  | tlv  | SDI component containing a pair of tag DFA00E and DFA00F. May Occur Several Times.   |
| DFA00E  | var.  | M  | ans  | Name of the SDI component   |
| DFA00F  | var.  | M  | ans  | Version of the SDI component   |


Example: 

```cpp
// Command to get SDI component version information
20 1C 00 00
// Response:
90 00 F0 75 FF A1 03 17 DF A0 0E 0A 53 44 49 20 53 65 72 76 65 72 DF A0 0F 05 34 2E 30 2E 30 FF
A1 03 16 DF A0 0E 09 6C 69 62 73 64 69 63 73 64 DF A0 0F 05 31 2E 30 2E 30 FF A1 03 1A DF A0 0E
0D 73 64 69 70 6C 75 67 69 6E 2D 63 62 61 DF A0 0F 05 31 2E 30 2E 32 FF A1 03 1E DF A0 0E 11 73
64 69 70 6C 75 67 69 6E 74 65 73 74 2D 63 62 61 DF A0 0F 05 31 2E 30 2E 30
```

 Included TLV tags in contructed tag F0: 

```
         Found tag SDI component (FFA103):
             Component name (DFA00E)   : SDI Server
             Component version (DFA00F): 4.0.0
         Found tag SDI component (FFA103):
             Component name (DFA00E)   : libsdicsd
             Component version (DFA00F): 1.0.0
         Found tag SDI component (FFA103):
             Component name (DFA00E)   : sdiplugin-cba
             Component version (DFA00F): 1.0.2
         Found tag SDI component (FFA103):
             Component name (DFA00E)   : sdiplugintest-cba
             Component version (DFA00F): 1.0.0
```



### Get last install error (20-1E)

Get last installation error from secure installer. Depending on the libary version the last installation error can occur in two different versions. The new api returns the status of the last installation nevertheless if this installation was successful or not. The output will be in json format. The old api returns the name of the failed bundle and/or package name only in cases of error.

Additional the old api only shows error if the sdi server installed the package. After a reboot which is often due for system packages, the error is gone.

The command can be executed for countertop, external pinpad and standalone devices. Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 1E  | 00  | 00  | None  |  |
| 20  | 1E  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA148  | var.  | M  | ans  | New api output in json format.   |
| DFA149  | var.  | M  | ans  | Old api output - name of the failed bundle   |
| DFA151  | var.  | M  | ans  | Old api output - name of the failed package   |


Example: 

```cpp
// Command to get last installation status from secure installer
20 1E 00 00
// Response:
F0 82 01 6C DF A1 48 82 01 66 7B 22 74 69 74 6C 65 22 3A 22 49 6E 73 74 61 6C 6C 69 6E 67 2E 2E
2E 22 2C 22 64 6C 5F 69 74 65 6D 73 22 3A 5B 7B 22 65 72 72 6F 72 5F 6D 73 67 22 3A 22 53 75 63
63 65 73 73 22 2C 22 65 72 72 6F 72 5F 6E 75 6D 22 3A 30 2C 22 64 6C 6E 61 6D 65 22 3A 22 64 6C
2E 76 6F 73 2E 76 6F 73 32 2E 61 6C 74 5F 63 72 74 5F 70 61 74 63 68 2D 32 2E 30 2E 30 2D 44 45
56 2E 74 67 7A 22 7D 5D 2C 22 64 6C 6E 61 6D 65 22 3A 22 64 6C 2E 76 6F 73 2E 76 6F 73 32 2E 61
6C 74 5F 63 72 74 5F 70 61 74 63 68 2D 32 2E 30 2E 30 2D 44 45 56 2E 74 67 7A 22 2C 22 65 72 72
6F 72 5F 6E 75 6D 22 3A 30 2C 22 6C 65 76 65 6C 73 22 3A 7B 22 6C 65 76 65 6C 30 22 3A 7B 22 74
69 74 6C 65 22 3A 22 53 74 61 67 65 22 2C 22 63 75 72 72 65 6E 74 5F 69 74 65 6D 22 3A 22 45 78
74 72 61 63 74 69 6E 67 20 53 59 53 20 20 70 61 63 6B 61 67 65 73 22 2C 22 69 74 65 6D 73 5F 74
6F 74 61 6C 22 3A 38 2C 22 69 74 65 6D 73 5F 64 6F 6E 65 22 3A 37 2C 22 70 65 72 63 65 6E 74 22
3A 31 30 30 7D 7D 2C 22 65 72 72 6D 73 67 22 3A 22 49 6E 73 74 61 6C 6C 20 53 75 63 63 65 73 66
75 6C 6C 22 2C 22 65 72 72 6E 75 6D 22 3A 30 7D
```

 Included TLV tags in contructed tag F0: 

```
         Found tag software status in json format (DFA148):
         {"title":"Installing...","dl_items":[{"error_msg":"Success","error_num":0,"dlname":"dl.vos.vos2.alt_crt_patch-2.0.0-DEV.tgz"}],"dlname":"dl.vos.vos2.alt_crt_patch-2.0.0-DEV.tgz","error_num":0,"levels":{"level0":{"title":"Stage","current_item":"Extracting SYS  packages","items_total":8,"items_done":7,"percent":100}},"errmsg":"Install Succesfull","errnum":0}
```



### External Button (20-20)

This command informs the SDI-Server in Headless Mode that the external button is pressed. It should be used for confirm the selection of a PIN digit in Navigator mode 2 only either on active [PED Get PIN (22-01)] command where it returns with Navigator Callback '9D 10' (see [Navigator Callback (9D-XX)]) or if PIN entry was started in PIN polling mode with command [PED start PIN entry (22-03)].

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Please be aware of different response behaviour when using different protocol types: 

* Protocol type D: External Button (20-20) always provides a command response. Thus, command field P2 (see below) to control behaviour for command response is always ignored. The message ID of External Button (20-20) can be arbitrary and must not equal the active command [PED Get PIN (22-01)]. The reason is the asynchronous PIN entry with [PED start PIN entry (22-03)] couldn't be referred by message ID, since this command is finalized immediately with a command response, which makes the message ID invalid. In addition, the External Button (20-20) might be provided on another connection than the one started the PIN entry. For instance, this is required on Android, where PIN entry is stared by ARRS, but payment application wants to use External Button (20-20), thus, it cannot access connection from ARRS to SDI and has no knowledge about message IDs used there. 
* Protocol type B: If External Button (20-20) is received during an active command, SDI does not provide a command response for it. During SDI is idle (no command active), by default a External Button (20-20) will provide a command response, either with error code '90XX' or '64FD' (meaning see below). For this case, SDI client might use command field P2 (bitmask) with bit 0x01 to control response behaviour. As already mentioned for protocol type D, the command can be send from another connection than the one started the PIN entry. 
* Protocol type C: Same as for protocol type B. 
* Protocol type A: Same as for protocol type B. 

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 20  | 00  | XX  | None  | for XX see description below   |


Meaning of P2 command field (bitmask, for protocol type A/B only):

* `00`: Send a response, if no command is active (default)
* `01`: Suppress response, if no command is active


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 9D  | 10  | None  | Selection confirmed (Navigator Callback)   |
| 90  | 00  | None  | Selection confirmed (PIN polling mode)   |
| 64  | FD  | None  | No PIN entry with navigator mode 2 is active (logic error)   |


This command is not supported on EPP.



### Enable EPP (20-21)

This command enables or disables a connected EPP. If an EPP is connected it can be enabled or disabled via this command. After startup of the SDI-Server usage of the EPP is disabled per default. If EPP couldn't be enabled the response '69 00' (EPP connection error) is returned providing additional EPP connection status information with TLV tag `DFA000`. If Countertop has established a secure TLS connection and is able to communicate with EPP, but another higher-level error occured (e.g. version mismatch), EPP is operated in a restricted mode.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 21  | 00  | 00  | None  | Enable EPP   |
| 20  | 21  | 00  | 01  | None  | Disable EPP   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 69  | 00  | Constructed  | EPP connection error (only for Enable EPP)   |
| 64  | FE  | None  | Parameter error   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA000  | 4  | M  | b  | EPP connection status   |


In case of EPP connection error the following values are returned with TLV tag `DFA000` (EPP connection status): 
| Value  | EPP connection status   |
|  -------- | -------- |
| `00000000` | EPP is disconnected   |
| `00000001` | EPP Sponsor Id mismatch (EPP sponsor != Countertop sponsor)   |
| `00000002` | EPP Exchange of certificates failed   |
| `00000003` | EPP EMV configuration problem   |
| `00000004` | EPP NFC configuration problem   |
| `00000005` | EPP SDI configuration problem   |
| `00000006` | TCP/TLS handshake with EPP failed   |
| `00000007` | SDI version mismatch (EPP version != Countertop version)   |
| `00000008` | EMV-CT framework version mismatch (EPP version != Countertop version)   |
| `00000009` | EMV-CTLS framework version mismatch (EPP version != Countertop version)   |


For error codes `00000000` (EPP is disconnected) and `00000006` (TCP/TLS handshake with EPP failed) there is no active TLS connection between Countertop and EPP, therefore, both devices are not able to communicate at all.

 For other error codes Countertop operates the EPP in a restricted mode, which allows the following commands only:

* [Software Upload Start (20-14)], [Software Upload Transfer (20-15)] and [Software Upload Finalize (20-16)] (software update commands)
* [Get Property (20-1A)]
* [Get SDI version info (20-1C)]
* [Factory Reset (20-22)]


With activation of the EPP restricted mode the user will be noticed with an appropriate error message on the EPP display.

A version mismatch error is caused when major and minor version of SDI-Server, EMV-CT and EMV-CTLS Framework version are not equal.



### Factory Reset (20-22)

This command resets SDI server to factory defaults.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). If a SDI command on another connection is active, Factory Reset (20-22) is declined with response code '640A' (busy). In addition, during processing the command, SDI server will decline all SDI commands with response code '640A' (busy).


As first step SDI server deletes all files, which were created during runtime to write data persistently. This also includes files of other ADK components such as writable ADKEMV configuration files or ADKCOM related settings changeable in communication menu with SDI standard mode. As next step SDI server restores default settings and does an internal reinitialization. This reinitializaion affects all active connection being closed, after SDI server has sent response '90 00' for Factory Reset command. Finally, SDI communication interface is reopened according communication default settings. In addition, the communication menu is displayed to select a communication method, if it runs in SDI standard mode without configuration default file [COM_IF.CFG] (see chapter [Getting Started] for more details).

Default settings of SDI server can be overloaded with the installation of user config packages (see chapters [User config package] for Fusion/Engage and [User config package] for Android). Please note that these external user configuration files are considered for default settings recovery. Thus, SDI server will always prefer files coming along with user config packages. Finally, if there is no external user configuration file, SDI server will recover the internal configuration file as default.

If an EPP is connected, the Factory Reset is automatically forwarded to this device. After successful execution by EPP, the CT will perform the local Factory Reset. So far, no additional option is provided to perform a Factory Reset for EPP only.

Factory Reset will send trigger `SDITrigger_FactoryReset` to all loaded SDI plugins, which support this trigger (see chapter [Plugin Interface (26-XX)]). Those plugins, which create persistent data (e.g. files) during runtime, should implement this trigger to support the reset to factory defaults.

On Android, the factory data reset is provided by the Android OS (Android FDR), therefore, applications usually need not use command Factory Reset. Command Factory Reset is sent by the Anrdoid Secure Installer after device reboot, which is triggered by the Android FDR. The Android FDR wipes all data files in the application domain folder of the SDI service (`/data/data/com.verifone.sdi`), which do not belong the [SDI base package] (APK). In order to align the same behavior as on Engage, which keeps the installed user configuration packages and SDI plugins after the Factory Reset, the SDI service will store a backup copy of the package files to the persistent partition (`/persist/appdata/sdi`), whenever a [User config package] or [SDI plugin package] is installed. These backup copies are recovered with command Factory Reset to reinstall the previous installed user configuration files and SDI plugins to the application domain folder of SDI service. Of cource, the installation of a [User config removal package] or a [SDI plugin removal package] will remove the back files from persistent partition again so that they are no longer considered for the recovery with command Factory Reset.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 22  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 64  | 00  | None  | Factory Reset aborted/failed   |




### Read Keystore Certificate (20-23)

Read the X.509 certificate for a specified certificate reference name (user friendly label). For platforms with K81 security processor (e.g. Android, VOS3) the certificate is read from security processor's keystore. The certificate is returned in binary DER format.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 20  | 23  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA500  | var.  | M  | ans  | Certificate reference name   |


The certificate to be read is specified by a certificate reference name (in TLV tag DFA500) as follows:


| Ccertificate description  | Certificate reference name  | Supported platform   |
|  -------- | -------- | -------- |
| VFI AuthEx RSA certificate  | `VFI_AUTHN_RSA` (friendly label)  | VOS3, Android (Trinity, Neo), Engage, Fusion   |
| VFI remote key loading RSA certificate  | `VFI_VRK_RSA` (friendly label)  | Android (Trinity), Engage, Fusion   |
| VFI remote key loading ECC certificate  | `VFI_VRK_ECC` (friendly label)  | VOS3, Android (Trinity, Neo), Engage, Fusion   |
| VFI device pairing RSA certificate  | `VFI_PAIRING_RSA` (friendly label)  | VOS3, Android (Trinity, Neo), Engage, Fusion   |
| Any certificate  | `<cert serial number>` (hex string)  | VOS3, Android (Trinity, Neo)   |
| Any certificate  | `CN` (subject common name)  | VOS3, Android (Neo)   |
| Any certificate (customer loaded)  | `[usr[X]/]<key label>` | Engage, Fusion   |


Used certificate reference names depend on platform. On VOS3 and Android (Trinity, Neo) platform the certificate reference name is forwarded to K81 API function, thus, it can be used to read all certificates stored in the K81 keystore. Usually, the certificate serial number (hex string) is used to refer the corresponding certificate (e.g. use `65C95907166F14DA` to read certificate with subject `CN=VFI Dev Root CA`). Further, VOS3 and Neo platfrom also allow to use the subject `CN` to read a certificate. 

Other platforms (Fusion/Engage) support user friendly labels only (e.g. `VFI_AUTHN_RSA` as introduced with Android). Customer loaded certificates can be looked up by user prefix plus key label. For more details please refer to chapter [Remote Keyservice (72-XX)].


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA501  | var.  | M  | b  | Certificate data (DER format)   |


The following SW1/SW2 are returned in response: 
| SW1/SW2  | Description   |
|  -------- | -------- |
| 90 00  | Success   |
| 62 00  | Mandatory tag missing (reference name)   |
| 64 FE  | Parameter error (reference name not supported)   |
| 64 00  | Execution error (certificate not installed or invalid)   |


Both primitive data tags DFA500 and DFA501 are always added to contructed container tag F0.



### Force Currency Abbreviation (20-24)

By default, the SDI server uses the following currency symbols instead of the corresponding ISO-4217 abbreviations:


| Currency  | Symbol  | ISO-4217   |
|  -------- | -------- | -------- |
| 376  | ₪  | ILS   |
| 388  | JM$  | JMD   |
| 826  | £  | GBP   |
| 840  | $  | USD   |
| 978  | €  | EUR   |


This command can be used to change the behavior when displaying a currency (e.g. to use USD instead of $). The configuration is stored persistant inside the SDI datastore and it is not necessery a resend it before each transaction.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 20  | 24  | 00  | 01  | Constructed  | Force Currency Abbreviation   |
| 20  | 24  | 00  | 00  | Constructed  | Use Currency Symbol (default)   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| 5F2A  | 2  | M  | n  | Currency for which the behaviour should be changed   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 62  | 00  | None  | Tag error   |
| 64  | FE  | None  | Parameter error   |
| 67  | 00  | None  | Message Length Error   |


For TLV tag 5F2A the hexadecimal value of the currency is expected (e.g. 0x0840 for USD). 

## MSR Interface (21-XX)


### MSR Read (21-01)

Command to read MSR track data.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 21  | 01  | SC  | NN  | None  | P2 indicates the timeout as multiple of 500ms.

The value FF indicates maximum timeout.   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA01B  | 1  | O  | b  | Timer multiplier flag: 01 means that the timeout value (P2) will be multiplied with 10. Other values will be ignored   |
| DFA153  | 2  | O  | b  | Card Removal Timeout in milliseconds (for UX devices only). It means the maximum time between starting of card removal until card is completely removed.   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |
| 64  | F6  | None  | MSR data not available Timeout reached (for UX devices only)   |
| 64  | F7  | None  | Card Removal Timeout reached (for UX devices only)   |


Response Data: 
| Tag | Size | M/O | Format | Description | Comment  |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| DF1A | 10..19 | O | an | Obfuscated PAN in ASCII format |  |
| 5F20 | ..26 | O | ans | Cardholder name |  |
| 5F30 | 3 | O | an | Service Code |  |
| DFA040 | var. | O | ans | Obfuscated Track1 in ASCII format without LRC, start and end sentinel | e.g. 42343537313939343058585858585834325E334F312F5445535443454E5445522054455354205649444B20205E585858583230315858585858585858585858585858585858585858585858  |
| DF1B | var. | O | nF | Obfuscated Track2 in binary format without LRC, start and end sentinel | e.g. 457199FFFFFF7304DFFFF201FFFFFFFFFFFFFF  |
| DF49 | var. | O | ans | Obfuscated Track2 in ASCII format without LRC, start and end sentinel | e.g. 34353731393958585858585837333034445858585832303158585858585858585858585858  |
| DFA014 | 20 | O | b | Unique card specific token |  |
| DFA034 | 3 | O | b | Track status (one byte per track) in order track 3, track 2 and track 1. For details regarding the status see [Status code](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md) |  |
| DFA101 | var. | O | b | Plugin response data in case only one plugin has been called | For Plugins supporting the SDITrigger_CardDetected trigger  |
| FFA107 | var. | O | b | Plugin response data in case more than one plugin have been called | For Plugins supporting the SDITrigger_CardDetected trigger. For each called plugin a tag FFA107 will be returned with the following primitive tags. 
| Tag | Size | M/O | Format | Description  |
| DFA10C | 1 | M | b | Plugin Id  |
| DFA10D | 2 | M | b | Plugin response code  |
| DFA101 | var. | O | b | Plugin data  |


 |
|  -------- | -------- | -------- | -------- | -------- | -------- |


The sensitive card data will be delivered by [getEncData (29-00)] in case of VCL is disabled or by [fetchTrxTags (29-02)] when VCL is active.



* The read loop will end on card read, System Abort Command or Timeout. No new command can be processed until this command is complete
* PINPad will read any card compliance with ISO-7811
* Track 3 data, when available, are delivered by [fetchTrxTags (29-02)] or [getEncData (29-00)] through tag 58hex
* In the two piece solution this command will be forwarded from the Countertop to the EPP automatically. Both magnetic card readers will be activated and the responded data comes from the reader where the card is swiped first. The MSR Read command on the not used card reader will be aborted automatically.
* On UX devices (VOS) a [Card Removal Callback (9E-04)] will be sent to inform that an inserted card on a hybrid card reader has to be removed.



### MSR Card Data Entry (21-02)

Command to enter card data manual.

In Headless mode on touch only devices the additional Tag DFA024 including the touch coordinates is needed.

For a better user interaction in headless mode the SDI-Server performs the following additional handling with the outside application:

* During the command execution in Headless mode some Status callbacks (see [Status Callback (9F-XX)]) will be sent to inform the outside application about the number of entered digits to update the display content.
* Further there will be Status callbacks if the customer presses the confirmation button but data are not completely entered or if he tries to enter more digits if the maximum number of digits is reached.
* In case of a PAN entry the additional Tag (DFA009) containing the Headless Entry String (e.g. "123456****") will be sent within the Status Callback.
* When the minimum number of PAN digits is entered and the confirm button is pressed the Status Callback 9FFE will be sent including the obfuscated PAN in Tag DFA009. Here the user has two possibilities:
    * Correction of the entered PAN with Backspace (one key press per digit) and reenter of digits. The Status callback will behave as described. Also the Enter key.
    * Confirmation of the enterd PAN by pressing the Enter key once again.
* In case of Expiry date entry the SDI-Server checks if a valid date was entered. If not a Status callback (9FFD) will be sent and the expiry date must be reentered.
* After the PAN or Expiry date is entered completely the SDI-Server performs a validation check based on the card range table (see [cardranges.json]) and sends a Control request ([Control Request (9B-01)]) to the outside application. Depending on the request response (Continue, Reenter or Abort) the SDI-Server performs the next step to enter the card data or cancels the entry.
* To handle special none payment cards without having an expiry date and activated VCL feature additional parameters "defaultExpiryDate" and "skipCvv" have been introduced to the card ranges table. Now it is possible to configure a default expiry date for a special card range which will be used for VCL encryption. To use this feature the tag DFA017 should not be set. If the SDI-Server finds a "defaultExpiryDate" after the PAN is successfully entered, the manual card entry is stopped and this date is used to encrypt the data with VCL. When VCL is not activated the SDI-Server will stop the entry as well and will return this date in clear text if requested by a following [fetchTrxTags (29-02)] command.

Depending on the security configuration (ADE, VCL, ...) the sensitive data (PAN, Expiry Date and/or CVV) will be delivered by using the [fetchTrxTags (29-02)] command in case of VCL or the [getEncData (29-00)] command.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 21  | 02  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA008  | 1  | O  | b  | Text Language, default is current terminal/transaction language (see [Supported System Languages])   |
| DFA005  | 2  | O  | b  | Timeout in seconds (MSB, LSB): Max value 0xFFFF (65535) seconds. If no timeout is set or the value is set to 0, the default value of 300 seconds is used.   |
| DFA017  | 1  | O  | b  | Temporary Card Entry Value Deactivation during the current command execution. For details see [System Tags] |
| DFA018  | 1  | O  | b  | Card Data Entry Mode, valid values:

00: Card Data Entry performed in one screen

01: Card Data Entry performed in separate screens   |
| DFA01A  | 5..6  | O  | ans  | Alternative Input Format String (optional) for CVV   |
| DFA024  | var.  | O  | an  | Touch coordinates for the provided keypad layout. Needs to be added for each key.

Format: xxxxyyyywwwwhhhhaa,

xxxx: x-Position of a touch button,

yyyy: y-Position of a touch button,

wwww: width of a touch button,

hhhh: heigth of a touch button,

aa: associated key (ASCII), 1B = Cancel, 08 = Correction, 0D = Enter   |
| DFA123  | 1  | O  | b  | Force minimum number of Pan digits to 7 instead the default of 10. Valid values:

00: Use default (10 digits)

01: Force to 7 digits   |
| DFA033  | 1  | O  | b  | Skip double confirmation of PAN in headless mode

00 = Double confirmation active (default)

01 = Double Confirmation skipped   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag | Size | M/O | Format | Description | Comment  |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| DF1A | 10..19 | M | an | Obfuscated PAN (7-19 if DFA123 is set) |  |
| DFA014 | 20 | O | b | Unique card specific token |  |
| DFA101 | var. | O | b | Plugin response data in case only one plugin has been called | For Plugins supporting the SDITrigger_CardDetected trigger  |
| FFA107 | var. | O | b | Plugin response data in case more than one plugin have been called | For Plugins supporting the SDITrigger_CardDetected trigger. For each called plugin a tag FFA107 will be returned with the following primitive tags. 
| Tag | Size | M/O | Format | Description  |
| DFA10C | 1 | M | b | Plugin Id  |
| DFA10D | 2 | M | b | Plugin response code  |
| DFA101 | var. | O | b | Plugin data  |


 |
|  -------- | -------- | -------- | -------- | -------- | -------- |


The sensitive card data will be delivered by [getEncData (29-00)] in case of VCL is disabled or by [fetchTrxTags (29-02)] when VCL is active.



* The alternative Input Format String configures the number of digits which have to be entered. The Format is described by the combination of N's and n's included in square brackets. N means mandatory digit, n means optional digit.

 Example: [NNNnn] requests a 5-digit number in which 3 digits must be entered at least.
* The default configuration for CVV is 3 to 4 digits. It can be forced to fix 3 digits respectively fix 4 digits with the optional format string of [NNN] respectively [NNNN]. To bypass the CVV input the values [BBBb], [BBB] or [BBBB] has to be used. Other values are not allowed and will be returned with '6400'.
* Data element CVV is related with Tag DFA131.
* Touch coordinates for the provided keypad layout are necessary for Headless Mode on touch only devices!
* This command is not supported on EPP.
* This command is not supported on UX (VOS) devices and will return with '6D00'.
* In addition to a successful reading of a magnetic card the entry of the CVV only is possible on devices without VCL. When VCL is active the response will be '64FE' (Parameter Error). In case of no magnetic card is read before the command delivers '64FD' (Logic Error).



### MSR Set Options (21-03)

Command to set the MSR options. For details see [MSR_SetOptions()](msr_8h.md#function-msr-setoptions).

The MSR options are passed in TLV tag `DFA026` and applied to subsequent MSR read operations for the recent terminal runtime.

Terminal reboot will recover default MSR options. 

This function has to be called while MSR is deactivated. If an asynchronous card detection was started with [Start Card Detection (23-03)] and card technology `02` (magnetic stripe), it will activate the MSR reader. During this active detection the MSR Set Options (21-03) is blocked and declined with a `6400` response.


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 21  | 03  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA026  | var.  | M  | b  | MSR options   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 62  | 00  | None  | Tag Error   |
| 64  | 00  | Constructed  | Execution Error (additional MSR error code in TLV tag DFA000)   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA000  | 4  | O  | b  | MSR error code (additional result code)   |




* In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.
* In the two piece solution this command will be forwarded from the Countertop to the EPP automatically.



### MSR Switch LEDs (21-04)

Command to switch the MSR LEDs. This command has an effect on devices equipped with MSR LEDs only. For details see [MSR_SwitchLeds()](msr_8h.md#function-msr-switchleds).

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 21  | 04  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA027  | ..4  | M  | b  | LED 1 state   |
| DFA028  | ..4  | M  | b  | LED 2 state   |
| DFA029  | ..4  | M  | b  | LED 3 state   |
| DFA02A  | ..4  | O  | b  | Lighting duration in seconds. All LEDs are switched off after this time.   |


Response 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 62  | 00  | None  | Tag Error   |




* In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.
* In the two piece solution this command will be forwarded from the Countertop to the EPP automatically.



### MSR Set Sensitivity (21-05)

Command to set the MSR sensitivity level for the magnetic head to amplify or damp incoming signals of the swiped MSR card. The sensitivity level is passed in TLV tag `DFA039` (MSR sensitivity level) and applied to subsequent MSR read operations for the recent terminal runtime. Basically, it is recommended to use default MSR sensitivity to get best MSR reading results. Once MSR Set Sensitivity (21-05) is used with another value than the default, it is recommended to recover default sensitivity as soon as possible.

Please note that this API is supported on Android (Trinity/Neo) and VOS3 platform only. On other platforms SDI will reject the command with response `6D00` (unknown instruction). 

Terminal reboot will recover default MSR sensitivity. 

This function has to be called while MSR is deactivated. If an asynchronous card detection was started with [Start Card Detection (23-03)] and card technology `02` (magnetic stripe), it will activate the MSR reader. During this active detection the MSR Set Sensitivity (21-05) is blocked and declined with a `6400` response.


Command: 
| CLA | INS | P1 | P2 | Data  |
|  -------- | -------- | -------- | -------- | -------- |
| 21 | 05 | SC | 00 | Constructed  |


Command Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA039 | 1 | M | b | MSR sensitivity level

 Valid value range is : 20..200 (0 is used for default MSR sensitivity)

 Values >100 will increase MSR sensitivity and amplify signals.

 Values <100 will decrease MSR sensitivity and damp signals.

 Value 100 means no amplification/damping.

 Value 0 will reset to default MSR sensitivity.  |
| DFA150 | 1 | O | b | Command destination: `01` = Countertop (default), `02` = EPP  |


Response: 
| SW1 | SW2 | Data | Comment  |
|  -------- | -------- | -------- | -------- |
| 90 | 00 | None | All OK  |
| 62 | 00 | None | Tag Error  |
| 64 | 00 | Constructed | Execution Error (additional MSR error code in TLV tag DFA000)  |


Response Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA000 | 4 | O | b | MSR error code (additional result code)  |




* In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.
* The additional optional tag DFA150 is used to specify the destination device for two piece solutions. Only the addressed device will use new MSR sensitivity (if supported).



## Smard Card Interface (41/42-XX)

This chapter describes the EMV Smart Card Interface. Details about the constructed data elements are described in the linked EMV documentation (see table below).


| Contact (CT)  | Contactless (CTLS)   |
|  -------- | -------- |
| 41 01: [EMV_CT_SmartDetect()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect) |  |
| 41 02: [EMV_CT_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset) | 42 02: [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset) |
| 41 03: [EMV_CT_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso) | 42 03: [EMV_CTLS_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartiso) |
| 41 04: [EMV_CT_SmartPowerOff()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpoweroff) | 42 04: [EMV_CTLS_SmartPowerOff()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartpoweroff) |
| 41 09: [EMV_CT_LED()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led) |  |
|  | 42 0A: [EMV_CTLS_CardRemoval()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-cardremoval) |




### Smart Card Detect (41-01)

This command handles the Smart Card Detection. It can be used for both a card request and a card removal. In case of card request the SDI-Server waits for the card insertion until the timeout is elapsed. For a card removal check the command has to be used in a loop with timeout 0.

Command 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 41  | 01  | SC  | NN  | None  | P2 indicates the timeout as multiple of 500ms.

The value FF indicates maximum timeout.   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA01B  | 1  | O  | b  | Timer multiplier flag: 01 = The timeout value (P2) will be multiplied with 10. Other values will be ignored   |


Response 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | Card inserted   |
| 94  | 01  | None  | Card removed   |




* The read loop will end on card read, System Abort Command or Timeout. No new command can be processed until this command is complete
* In the two piece solution this command will be forwarded from the Countertop to the EPP automatically. Both chip card readers will be activated and the response is valid for the reader where the card is inserted first. The SDI Server retains the information which card reader is used for further smart card commands. The Smart Card Detect command on the not used card reader will be aborted automatically.



### Smart Card Activate (41/42-02)

Command to activate a Smart Card for CT (41) or CTLS (42).

Command 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 41/42  | 02  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DF06  | 1  | O  | b  | see [EMV_CT_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset)/EMV_CTLS_SmartReset() options   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DF68  | var.  | O  | b  | ATR   |




* In the two piece solution the 41-02 command will be executed on the Countertop or the EPP depending on the stored reader during the [Smart Card Detect (41-01)] command.



### Smart Card Exchange APDU (41/42-03)

This command allows it to perform a Smart Card APDU for CT (41) or CTLS (42).

Command 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 41/42  | 03  | SC  | 00  | Constructed   |


Command Data 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DF06  | 1  | O  | b  | see [EMV_CT_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso)/EMV_CTLS_SmartISO() options   |
| DF01  | var.  | M  | b  | Command APDU   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DF01  | var.  | O  | b  | Response APDU   |




* This command requires encryption of the command and the response. The PINPad shall reject the command if the Security Channel byte (P1) does not indicate encryption.
* In the two piece solution the 41-03 command will be executed on the Countertop or the EPP depending on the stored reader during the [Smart Card Detect (41-01)] command.



### Smart Card Deactivate (41/42-04)

Command to deactivate a Smart Card for CT (41) or CTLS (42).

Command 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 41/42  | 04  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DF06  | 1  | O  | b  | see [EMV_CT_SmartPowerOff()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpoweroff)/EMV_CTLS_SmartPowerOff() options   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


In the two piece solution the 41-04 command will be executed on the Countertop or the EPP depending on the stored reader during the [Smart Card Detect (41-01)] command.



## Card Detect Interface (23-XX)

The Card Detect Interface is a single interface for all three card technologies Magnetic Stripe, Smart Card and Contactless Card (CTLS).


### Card Detection (23-01)

Detect Mag Stripe Read, Smart Card Insertion, Contactless Card or Manual Card Data Entry depending on the value of tag DFA108.

Command 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 23  | 01  | SC  | NN  | None  | All technologies active   |
| 23  | 01  | SC  | NN  | Constructed  |  |




* P2 indicates the timeout as multiple of 500ms. The value FF indicates maximum timeout. TLV tag DFA01B is used to multiply the timeout.
* Card detection only support full second values as timeout. Therefore, a floating point overall timeout will always be rounded up to whole seconds (e.g. P2 = 7 with TLV tag DFA01B value 1 means an overall timeout 3.5 seconds, but finally it is rounded up to 4 seconds).


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA108  | 1  | M  | b  | Supported Card Technology (bit mask).

 01: CT Smart Card

 02: Magnetic stripe

 04: CTLS Smart Card

 08: Manual Card Data Entry   |
| DFA109  | 1  | O  | b  | Set to 01 to allow that card detection can be stopped by an asynchronous dialog, which was started previously (see [Handle Display (24-03)]). If this dialog finishes with arbitrary UI error (except `UI_ERR_BACK`, clear key reserved for Manual Card Data Entry), command Card Detection (23-01) returns response `6405` (Canceled by user). Result of the asynchronous dialog can be read with [Get Async Display Result (24-0B)] afterwards.   |
| DFA12A  | var.  | O  | b  | Card Technology selection options (for details see: [cts_StartSelection()](tec_8h.md#function-cts-startselection))   |
| DFA01B  | 1  | O  | b  | Timer multiplier flag (optional):

01: The timeout value (P2) will be multiplied with 10.

FF: Combined with FF as value for P2 the maximal timeout for card detection is applied, which means 65535 seconds (~18 hours).

Other values for TLV tag DFA01B will be ignored and value of P2 is considered for timeout only.   |
| DFA017  | 1  | O  | b  | Temporary Card Entry Value Deactivation during the current command execution. For details see [System Tags] |
| DFA01A  | var.  | O  | ans  | Alternative Input Format String (optional for CVV during Manual Card Data Entry)   |
| DFA133  | var.  | O  | b  | Additional options for technology selection, used for the [cts_SetOptions()](tec_8h.md#function-cts-setoptions) function (eg: to set the App ID for VAS transactions)   |
| DFA153  | 2  | O  | b  | Card Removal Timeout in milliseconds (for UX devices only). It means the maximum time between starting of card removal until card is completely removed.   |




* In headless mode Manual Card Data Entry is possible as single technology only. In combination with other technologies no Manual Card Data Entry is possible, because the SDI Server has no access to the keyboard in headless mode.
* The default configuration for CVV is 3 to 4 digits. It can be forced to fix 3 digits respectively fix 4 digits with the optional format string of [NNN] respectively [NNNN]. To bypass the CVV input the values [BBBb], [BBB] or [BBBB] has to be used. Other values are not allowed and will be returned with 64 00.


Response 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |
| 64  | F6  | None  | MSR data not available Timeout reached (for UX devices only)   |
| 64  | F7  | None  | Card Removal Timeout reached (for UX devices only)   |


Response Data:


| Tag | Size | M/O | Format | Description | Comment  |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| DFA108 | 1 | M  | b | Selected Card Technology |  |
| DF1A | 10..19 | O | an | Obfuscated PAN in ASCII format | Magstripe or manual card data entry  |
| DFA040 | var. | O | ans | Obfuscated Track1 in ASCII format without LRC, start and end sentinel | Magstripe only  |
| DF1B | var. | O | nF | Obfuscated Track2 in binary format without LRC, start and end sentinel | Magstripe only  |
| DF49 | var. | O | ans | Obfuscated Track2 in ASCII format without LRC, start and end sentinel | Magstripe only  |
| 5F20 | ..26 | O | ans | Cardholder name | Magstripe only  |
| 5F30 | 3 | O | an | Service Code | Magstripe only  |
| DFA034 | 3 | O | b | Track status (one byte per track) in order track 3, track 2 and track 1. For details regarding the status see [Status code](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md) | Magstripe only  |
| DFA101 | var. | O | b | Plugin response data in case only one plugin has been called | For Plugins supporting the SDITrigger_CardDetected trigger  |
| FFA107 | var. | O | b | Plugin response data in case more than one plugin have been called | For Plugins supporting the SDITrigger_CardDetected trigger. For each called plugin a tag FFA107 will be returned with the following primitive tags. 
| Tag | Size | M/O | Format | Description  |
| DFA10C | 1 | M | b | Plugin Id  |
| DFA10D | 2 | M | b | Plugin response code  |
| DFA101 | var. | O | b | Plugin data  |


 |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| DFA150 | 1 | O | b | Response source: 01 = Countertop (default), 02 = EPP |  |
| FFA102 | var. | O | b | NFC/VAS response data | Result of NFC VAS detection from NFC ADK. This is the constructed TLV data buffer returned by cts_WaitSelection, for details refer to tecsel documentation  |
| DFA154 | var. | O | b | Tecsel data | Data buffer returned by cts_WaitSelection in case CTS_DATA_TLV is not set, for details refer to tecsel documentation  |


The sensitive card data will be delivered by [getEncData (29-00)] in case of VCL is disabled or by [fetchTrxTags (29-02)] when VCL is active.

Operation:


* The value of P2 indicates the timeout for selecting a card technology as multiple of 500ms. The value FF indicates maximum timeout. It is recommended to use a sufficiently large value in order to avoid unnecessary timeouts.
* The read loop will end on card read, System Abort Command or Timeout. No new command can be processed until this command is complete.
* All relevant tags of the MSR Card Data Entry command are optional and will be used in case of Manual Card data entry is selected. In that case the data entry is performed and the relevant response data tags will be returned (see [MSR Card Data Entry (21-02)]).



* Track 3 data, when available, are delivered by [fetchTrxTags (29-02)] or [getEncData (29-00)] through tag 58hex
* In the two piece solution this command will be forwarded from the Countertop to the EPP automatically. On both devices the card readers will be activated with the exception that contactless cards are accepted on the EPP only and manual card data entries are allowed on the Countertop only. The response is valid for the reader where a card is detected first. The SDI Server retains the information which device is used for further command executions. The Card Detection command on the not used device will be aborted automatically.
* On UX devices (VOS) a [Card Removal Callback (9E-04)] will be sent to inform that an inserted card on a hybrid card reader has to be removed.



### Wait Card Removal (23-02)

Command to wait until the card is removed (Only for Contact)

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 23  | 02  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA005  | 2  | O  | b  | Card removal timeout in seconds (MSB, LSB). Default is 0000   |


Response: 
| SW1  | SW2  | Data  | Description   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | Card has been removed   |
| 66  | 00  | None  | Timeout reached but card not yet removed   |
| 64  | FD  | None  | Command not allowed for the moment   |
| 64  | 00  | None  | Error   |
| 65  | 05  | None  | Canceled by user (async. dialog)   |


In the two piece solution this command will be executed on the Countertop or the EPP depending on the stored reader during the [Card Detection (23-01)] command.



### Start Card Detection (23-03)

Asynchronous command to detect Mag Stripe Read, Smart Card Insertion or Contactless Card depending on the value of tag DFA108.

Unlike (23-01) this command does not block until a card is detected, but returns immediately with the detection status. Technology result is to be fetched using the Poll Card Detection command or alternatively through a callback message. Callback message is to be enabled by setting tag DFA10B to 01.

Manual Card Data Entry is currently not supported.

If started in callback mode, a callback message [Card Detected Callback (9E-02)] will be sent to the application to signalize the detection result as soon as a result is available.

The EMV query callbacks will be sent as One Way [EMV Callback after the asychronous Card Detection (9E-03)] in callback and polling mode.

During card detection several commands are not allowed in order to avoid unexpected behavior due to conflicting access to SDI resources.

Following commands are blocked with return code 64-F9: MSR interface 21-xx, EMV Smart Contact and Smart Contactless interfaces (41-xx and 42-xx) and NFC and VAS interface (31-xx and 32-xx).

It's recommended not to use time consuming commands such as blocking display commands or similar during asynchronous card detection, as this will disturb the polling procedure or the intime reception of the card detected callback.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 23  | 03  | SC  | 00  | None  | All technologies active   |
| 23  | 03  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA108  | 1  | M  | b  | Supported Card Technology (bit mask).

 01: CT Smart Card

 02: Magnetic stripe

 04: CTLS Smart Card   |
| DFA12A  | var.  | O  | b  | Card Technology selection options (for details see: [cts_StartSelection()](tec_8h.md#function-cts-startselection))   |
| DFA133  | var.  | O  | b  | Additional options for technology selection, used for the [cts_SetOptions()](tec_8h.md#function-cts-setoptions) function (eg: to set the App ID for VAS transactions)   |
| DFA005  | 2  | O  | b  | Timeout in seconds (MSB, LSB): 0000 = No timeout (default to 30dec seconds)

 In polling mode the timeout value is fix set to maximum value of 65535 seconds (~ 18 hours)   |
| DFA10B  | 1  | O  | b  | Card detection response mode. 00: using Poll Card Detection command (default), 01: using callback message   |
| DFA153  | 2  | O  | b  | Card Removal Timeout in milliseconds (for UX devices only). It means the maximum time between starting of card removal until card is completely removed.   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK, card detection in progress   |
| 90  | E6  | None  | Invalid technology selection parameters   |
| 62  | 00  | None  | TLV import failed   |
| 64  | F9  | None  | Command not allowed   |
| 64  | FD  | None  | Logic error, detection already running   |
| 64  | FE  | None  | Parameter error   |
| 64  | 00  | None  | Execution Error   |




### Poll Card Detection (23-04)

Polls for the result of card detection started with the 23-03 command.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 23  | 04  | SC  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK, check DFA108 for result. 00 means in progress   |
| 64  | 05  | None  | Canceled by user (through Stop Card Detection command)   |
| 64  | F9  | None  | Command not allowed   |
| 64  | FD  | None  | Logic error, either detection has not been started or detection has been started in callback mode   |
| 90  | D8  | None  | CTLS in actual state not allowed   |
| 65  | 00  | None  | Card detection aborted   |
| 66  | 00  | None  | Timeout reached, no card has been detected   |
| 67  | 00  | None  | Buffer too small   |
| 64  | 00  | None  | Execution error   |
| 64  | F6  | None  | MSR data not available Timeout reached (for UX devices only)   |
| 64  | F7  | None  | Card Removal Timeout reached (for UX devices only)   |


Response Data: 
| Tag | Size | M/O | Format | Description | Comment  |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| DFA108 | 1 | M  | b | Selected Card Technology |  |
| DF1A | 10..19 | O | an | Obfuscated PAN in ASCII format | Magstripe or manual card data entry  |
| DFA040 | var. | O | ans | Obfuscated Track1 in ASCII format | Magstripe only  |
| DF1B | var. | O | nF | Obfuscated Track2 in binary format | Magstripe only  |
| DF49 | var. | O | ans | Obfuscated Track2 in ASCII format | Magstripe only  |
| 5F20 | ..26 | O | ans | Cardholder name | Magstripe only  |
| 5F30 | 3 | O | an | Service Code | Magstripe only  |
| DFA034 | 3 | O | b | Track status (one byte per track) in order track 3, track 2 and track 1. For details regarding the status see [Status code](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md) | Magstripe only  |
| DFA101 | var. | O | b | Plugin response data in case only one plugin has been called | For Plugins supporting the SDITrigger_CardDetected trigger  |
| FFA107 | var. | O | b | Plugin response data in case more than one plugin have been called | For Plugins supporting the SDITrigger_CardDetected trigger. For each called plugin a tag FFA107 will be returned with the following primitive tags. 
| Tag | Size | M/O | Format | Description  |
| DFA10C | 1 | M | b | Plugin Id  |
| DFA10D | 2 | M | b | Plugin response code  |
| DFA101 | var. | O | b | Plugin data  |


 |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| FFA102 | var. | O | b | NFC/VAS response data | Result of NFC VAS detection from NFC ADK. This is the constructed TLV data buffer returned by cts_WaitSelection, for details refer to tecsel documentation  |
| DFA154 | var. | O | b | Tecsel data | Data buffer returned by cts_WaitSelection in case CTS_DATA_TLV is not set, for details refer to tecsel documentation  |




* The sensitive card data will be delivered by [getEncData (29-00)] in case of VCL is disabled or by [fetchTrxTags (29-02)] when VCL is active.
* Track 3 data, when available, are delivered by [fetchTrxTags (29-02)] or [getEncData (29-00)] through tag 58hex.



### Stop Card Detection (23-05)

Try to stop a running (23-03) Card Detection

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 23  | 05  | SC  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | Stopping the card detection has been requested   |
| 64  | FD  | None  | Logic error, detection has not been started   |


The Stop Card Detection command triggers the card detection to stop and returns immediately. The stopping result is communicated through the callback message or through the poll command.

In case the Stop Card Detection command returned 9000, following scenarios are possible:

* If Card Detection is used in callback mode, an explicit callback message [Card Detected Callback (9E-02)] is sent to the application.
* If Card Detection is used in polling mode, the application has to keep sending the Poll Card Detection command (23-04) until the detection result is returned.


In both cases, the callback or the poll response message can signalize either that the card detection has been stopped successfully (6405), or that it was not possible to stop because a card has already been detected. In this case (not possible to stop), 9000 will be returned together with the detected technology as described in the [Poll Card Detection (23-04)] command response.



### Add Technology (23-06)

Adds a technology to a running (23-03) Card Detection

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 23  | 06  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA108  | 1  | M  | b  | Technology to be added (bit mask).

 01: CT Smart Card

 02: Magnetic stripe

 04: CTLS Smart Card   |
| DFA12A  | var.  | O  | b  | Card Technology selection options (for details see: [cts_StartSelection()](tec_8h.md#function-cts-startselection))   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK, technology has successfully been added   |
| 62  | 00  | None  | TLV import failed   |
| 64  | F9  | None  | Command not allowed   |
| 64  | FD  | None  | Logic error, detection has not been started   |
| 64  | 00  | None  | Execution error   |




### Remove Technology (23-07)

Removes a technology from a running (23-03) Card Detection

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 23  | 07  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA108  | 1  | M  | b  | Technology to be removed (bit mask).

 01: CT Smart Card

 02: Magnetic stripe

 04: CTLS Smart Card   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK, technology has successfully been removed   |
| 62  | 00  | None  | TLV import failed   |
| 64  | F9  | None  | Command not allowed   |
| 64  | FD  | None  | Logic error, detection has not been started   |
| 64  | 00  | None  | Execution error   |


If the technology bitmask is empty after removing of the last technology, it is not necessary to send a Stop Card Detection command. The detection process is then stopped automatically.



### Provide Callback Response (23-08)

Send the EMV Callback response data after a Callback Request has been received during an asynchronous Card Detection (23-03) process.

If the asychronous Card Detection (23-03) has been started in callback mode, this command has to be sent after an [EMV Callback after the asychronous Card Detection (9E-03)] has been received.

If the asychronous Card Detection (23-03) has been started in polling mode, this command has to be sent after the [Poll Card Detection (23-04)] has received a Callback Request in the response message.
Be aware that this command is expected to be received within one minute when you debug your application. In case of timeout a communication error is reported as callback response and card processing is aborted.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 23  | 08  | 00  | 00  | Constructed  | Callback response data as expected by the EMV ADK   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK, callback response data communicated to EMV ADK   |
| 64  | FD  | None  | Logic Error - Not waiting for Provide Callback Response   |




## Display Interface (24-XX)

The device is equipped with a display. To use this display via the SDI protocol some display commands are defined. An additional system tag for the language id is defined to allow Multilanguage support.

**In Headless mode all display commands are not supported!**


### Display Text (24-01)

Command to display a text on the PINPad display.

**This command is deprecated and should not be sent to the device! For new implementation please use command Handle Display (24-03).**


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 01  | SC  | 00  | Display Data   |


Display Data: 
| Size  | Destcription   |
|  -------- | -------- |
| 2  | Display text length (MSB, LSB)   |
| var.  | Display text UTF-8 encoded   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 64  | 00  | None  | Execution Error   |
| 6D  | 00  | None  | Command not supported   |




### Display Text with Confirmation (24-02)

Command to display a text with confirmation on the PINPad display. As confirmation keys only non-numerical keys like (Cancel, Clear or Enter) are accepted. The command can be aborted via Sys Abort (20-02) command.

**This command is deprecated and should not be sent to the device! For new implementation please use command Handle Display (24-03).**


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 02  | SC  | 00  | Display Data   |


Display Data: 
| Size  | Destcription   |
|  -------- | -------- |
| 2  | Display text length (MSB, LSB)   |
| var.  | Display text UTF-8 encoded   |
| 2  | Timeout in seconds (MSB, LSB)   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 64  | 00  | None  | Execution Error   |
| 64  | 05  | None  | Canceled by user   |
| 65  | 00  | None  | Execution Aborted   |
| 66  | 00  | None  | Timeout   |
| 6D  | 00  | None  | Command not supported   |




### Handle Display (24-03)

Command to display a dialog on screen. The dialog supports displaying pure text, with or w/o user confirmation. A flexilbe interface with dialog options (TLV tag `DFA142`) is provided to adjust behaviour and appearance of the dialog: For instance, the user has the option to add softkeys (for devices with touch) or key helpers to inform the user about which function keys to use (on devices w/o touch). Further options allow to specify the text alignment, to display an image or to enable/disable complete dialog regions (e.g. dialog header or virtual LED bar).

It's possible to display a dialog asynchronously, even if the dialog requests confirmation from the user. In this case Handle Display (24-03) returns with `9000` immediately and the result of the dialog can be stored (see option `DLG_StoreAsyncResult`). The stored result can be read with SDI command [Get Async Display Result (24-0B)] afterwards.

Finally, Handle Display (24-03) also allows to use a custom HTML template, which can be installed with a [User config package] to external UI resource folders of SDI:

 VOS/VOS2: 

* `/etc/config/sdi/www/<width>x<height><color><numkeys><touch>` (device specific UI resource folder, e.g. `320x480C15T` is used for P400) 
* `/etc/config/sdi/www/default` (default UI resource folder, used if the resource isn't found in device specific folder) 


VOS3: 

* `/home/usr<X>/sdi/www/<width>x<height><color><numkeys><touch>` (device specific UI resource folder, e.g. `320x480C15T` is used for P630) 
* `/home/usr<X>/sdi/www/default` (default UI resource folder, used if the resource isn't found in device specific folder) 

The external custom HTML template file is addressed with Template Identifier (TLV tag `DFA010`) and must use the following filename notation: 

```
template_e_<id>.html
```

 Field `<id>` in the template filename is the decimal value (3 digits) of Template Identifier (TLV tag `DFA010`), e.g. for Template Identifier value `02` SDI server will lookup the custom HTML template file `template_e_002.html`.

Template Identifier with value `01` (default) is reserved for standard HTML dialog (see chapter [dialog.html]), which is installed with the base SDI config package for standard mode. Usage of standard [dialog.html] is recommended, since it implements all dialog parameters of command Handle Display (24-03), which are finally passed as variables in ADKGUI parameter map `ARGV` to the dialog (for more details see parameter description below). Thus, a custom HTML template will ignore these parameters, if related variables are not considered or implemented.


Resource files used in the custom HTML template (e.g. images) can be either referred by relativ path (if provided with the user config package) or by absolute path to SDI image folder (e.g. `/home/usr1/www/sdi/images` on VOS/VOS3) to use SDI default images. As long as no custom CSS file is provided, the SDI default CSS file is applied, which comes along with SDI config package for standard mode (see [Default UI resource files]). Of course, it might be useful for HTML templates to implement inline CSS to be independent from a common CSS file.

Custom HTML templates can be implemented language independed. SDI server will load the custom UI text catalog for the recent system language to invoke the dialog. Thus, HTML templates can use XML processing instruction `<?text name?>` in HTML to use texts from the custom catalog (for more details see chapter [Custom UI text catalogs]).

Additional variables can be injected into custom dialogs with constructed TLV tag FFA011 (Display Data). Each tag contains a pair of primitive TLV tags `DFA012` (variable name) and `DFA013` (variable value), which are passed in ADKGUI parameter map `ARGV` to the dialog. Please ensure that a variable name in TLV tag `DFA012` doesn't conflict with variable names defined for dialog parameters in this chapter, e.g. a variable with name `key_cancel` would be overwritten by dialog option `DLG_CancelKey`.

It is not possible to inject HTML with TLV tags into a HTML dialog, since SDI will substitute special HTML characters by corresponding escape references, before the TLV contents are forwarded to the dialog.


UI error codes are defined by ADKGUI header file `[gui_error.h](gui__error_8h.md#file-gui-error.h)`, e.g. the return code `-1` stands for `UI_ERR_ABORT`. Please note that well-known UI return codes of the dialog (or template) might be mapped to SDI result code SW1/SW2, thus, `UI_ERR_ABORT` will lead to response 64 05 (see reserved UI error codes for response below). If a non-reserved UI error code is returned (e.g. `-6` for `UI_ERR_PARAMETER`), it is provided with response 6400 and TLV tag DFA000 (additional result code). It is recommended that dialogs (or templates) use well-known error codes of ADKGUI, but if there is the need to use an own range, these the return values must be positive to separate them from internal private error codes ADKGUI is using below range in `[gui_error.h](gui__error_8h.md#file-gui-error.h)` (for more details see ADKGUI documentation).

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 03  | SC  | 00  | Constructed   |


Pure command `24 03 00 00` (without command data) clears the display and returns with response `9000` immediately.


Command Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA010 | 1 | O | b | HTML Template Identifier, default is `01` to use standard dialog [dialog.html]. Use values `>=02` as Template Identifier to address custom HTML template files.  |
| FFA011 | var. | M | tlv | Display Data (dialog input variable as name-value pair). The following primitive TLV tags are used in this tag: 
| Tag | Size | M/O | Format | Description  |
| DFA012 | var. | O | ans | Variable name, default value: `text` |
| DFA013 | var. | M | utf-8 | Variable value  |



The tag may occur more than once to inject multiple variables to the HTML dialog. If TLV tag `DFA012` is missing, SDI server passes the value in variable `text` to the dialog. For standard HTML dialog (with Template Identifier `1`) this is used as dialog text added to region 4 (see chapter [dialog.html]). A variable name must be unique and if two TLV tags `FFA011` use the same variable name, command Display (24-03) fails with response code `6400`. 

 |
|  -------- | -------- | -------- | -------- | -------- |
| DFA005 | 2 | O | b | Timeout in seconds (MSB, LSB), `0000` = Infinite Timeout (default)

 If a Template Identifier `>=02` is used, variable `timeout` with a numeric value is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. In case of an infinite timeout, the variable contains value "-1" so that it can directly used in the HTML template for `<input>` element of ADKGUI as follows: 

```
<input type='timeout' style='display:none' value='<?var timeout?>' action='return -3'>
```

 |
| DFA13D | 1-4 | O | b | Dialog options (big endian), bit mask with following values: 

* **`0x00` (`DLG_DisplayOnly`)**: No options set, display text only 
* **`0x01` (`DLG_Beep`)**: Beep when dialog is displayed. Identical to TLV tag `DFA00D` with value `1`. 
* **`0x02` (`DLG_CancelKey`)**: For standard HTML dialog (Template Identifier `01`) a cancel softkey is added to dialog control bar, if the device has a touch display (see region 5 of [dialog.html]). For devices without touch an entry in helpers bar is displayed to inform the user that the enter key (ADKGUI keycode: `&#27;`) can be pressed on the keyboard. By default, the softkey button and the helper entry in control bar will use image `buttons/x.png` or `helpers/x.png` (see [Default UI resource files]). Optionally, TLV tag `DFA140` (cancel button label) can be used to replace these images by the provided text. If the cancel hardkey/softkey is pressed, `6405` (Canceled by user) is returned as command response. If a Template Identifier `>=02` is used, variable `key_cancel` with value `"1"` (or `"0"`) is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x04` (`DLG_ClearKey`)**: For standard HTML dialog (Template Identifier `01`) a clear softkey is added to dialog control bar, if the device has a touch display (see region 5 of [dialog.html]). For devices without touch an entry in helpers bar is displayed to inform the user that the cancel key (ADKGUI keycode: `&#8;`) can be pressed on the keyboard. By default, the softkey button and the helper entry in control bar will use image `buttons/clear.png` or `helpers/clear.png` (see [Default UI resource files]). Optionally, TLV tag `DFA13F` (clear button label) can be used to replace these images by the provided text. If the clear hardkey/softkey is pressed, `6400` with UI error `-2` (`UI_ERR_BACK`) in TLV tag `DFA000` is returned as command response. If a Template Identifier `>=02` is used, variable `key_clear` with value `"1"` (or `"0"`) is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x08` (`DLG_EnterKey`)**: For standard HTML dialog (Template Identifier `01`) a enter softkey is added to dialog control bar, if the device has a touch display (see region 5 of [dialog.html]). For devices without touch an entry in helpers bar is displayed to inform the user that the enter key (ADKGUI keycode: `&#13;`) can be pressed on the keyboard. By default, the softkey button and the helper entry in control bar will use image `buttons/o.png` or `helpers/o.png` (see [Default UI resource files]). Optionally, TLV tag `DFA13E` (enter button label) can be used to replace these images by the provided text. If the enter hardkey/softkey is pressed, `9000` is returned as command response. If a Template Identifier `>=02` is used, variable `key_enter` with value `"1"` (or `"0"`) is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x10` (`DLG_NoLEDs`)**: For standard HTML dialog (Template Identifier `01`) this option disables LEDs area for the dialog (see region 1 of [dialog.html]) regardless of the global LED area setting (see [Activate LEDs (24-09)]). If a Template Identifier `>=02` is used, variable `led_area` with value `"1"` (or `"0"`) is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x20` (`DLG_CtlsLogo`)**: For standard HTML dialog (Template Identifier `01`) this option shows a CTLS logo `tab_small.png` (contactless card tab) in image area of the dialog (see region 3 of [dialog.html]). If a Template Identifier `>=02` is used, variable `image_file` with a path to `"tap_small.png"` is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. This option is ignored for devices having a separate CTLS landing zone with its own CTLS logo (e.g. X10, X8, m440). 

* **`0x40` (`DLG_QuestionLogo`)**: For standard HTML dialog (Template Identifier `01`) this option shows a question logo `question.png` in image area of the dialog (see region 3 of [dialog.html]). The option is ignored, if a previous logo bit is set. The image file comes along with UI default resources in SDI config package for standard mode (see [Default UI resource files]). If a Template Identifier `>=02` is used, variable `image_file` with a path to `"question.png"` is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x80` (`DLG_WarningLogo`)**: For standard HTML dialog (Template Identifier `01`) this option shows a warning logo `warning.png` in image area of the dialog (see region 3 of [dialog.html]). The option is ignored, if a previous logo bit is set. The image file comes along with UI default resources in SDI config package for standard mode (see [Default UI resource files]). If a Template Identifier `>=02` is used, variable `image_file` with a path to `"warning.png"` is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x100` (`DLG_ErrorLogo`)**: For standard HTML dialog (Template Identifier `01`) this option shows an error logo `error.png` in image area of the dialog (see region 3 of [dialog.html]). The option is ignored, if a previous logo bit is set. The image file comes along with UI default resources in SDI config package for standard mode (see [Default UI resource files]). If a Template Identifier `>=02` is used, variable `image_file` with a path to `"error.png"` is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x200` (`DLG_SuccessLogo`)**: For standard HTML dialog (Template Identifier `01`) this option shows a success logo in `success.png` image area of the dialog (see region 3 of [dialog.html]). The option is ignored, if a previous logo bit is set. The image file comes along with UI default resources in SDI config package for standard mode (see [Default UI resource files]). If a Template Identifier `>=02` is used, variable `image_file` with a path to `"success.png"` is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x400` (`DLG_WaitLogo`)**: For standard HTML dialog (Template Identifier `01`) this option shows a wait logo/animation `wait.png` in image area of the dialog (see region 3 of [dialog.html]). The option is ignored, if a previous logo bit is set. The image file comes along with UI default resources in SDI config package for standard mode (see [Default UI resource files]). If a Template Identifier `>=02` is used, variable `image_file` with a path to `"wait.gif"` is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x800` (`DLG_Async`)**: Display the dialog asynchronously. With this option command Handle Display (24-03) will return with response `9000` immediately. Option `DLG_StoreAsyncResult` must be set additionally to store the asynchronous dialog result (see option below). 

* **`0x1000` (`DLG_StoreAsyncResult`)**: Store result of an asynchronous dialog (see option `DLG_Async`) that it can be retrieved afterwards with SDI command [Get Async Display Result (24-0B)]. The already stored result of a previous dialog is discarded, if a new asynchronous dialog with option `DLG_StoreAsyncResult` is displayed. In addition, a new dialog will abort a previous asynchronous dialog, if this dialog hasn't finished. Asynchronous dialogs are useful, if displayed before another synchronous SDI command, which requires an user interaction while this command is active. For instance, SDI command [Card Detection (23-01)] doesn't return as long as no card is detected, but it provides an option to abort the command by an asynchronous dialog, which result can be provided by [Get Async Display Result (24-0B)] afterwards. 

* **`0x2000` (`DLG_HideSoftKeys`)**: For standard HTML dialog (Template Identifier `01`) this option hides the softkeys on touch screen devices enabled by option `DLG_CancelKey`, `DLG_ClearKey` or `DLG_EnterKey` (see region 5 of [dialog.html]). For devices without touch this option will also hide entries in helpers bar. For devices with keyboard, this option has the same effect as if enter/clear/cancel key(s) are added as additional key action(s) with TLV tag `FFA106`. 
* **`0x4000` (`DLG_TextAlignLeft`)**: For standard HTML dialog (Template Identifier `01`) this option will enable left alignment for the dialog text (see region 4 of [dialog.html]). By default, the dialog text is horizontal centered. If a Template Identifier `>=02` is used, variable `text_align_left` with value `"1"` (or `"0"`) is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x8000` (`DLG_TextAlignRight`)**: For standard HTML dialog (Template Identifier `01`) this option will enable left alignment for the dialog text (see region 4 of [dialog.html]). By default, the dialog text is horizontal centered. The option is ignored, if a `DLG_TextAlignLeft` is set. If a Template Identifier `>=02` is used, variable `text_align_right` with value `"1"` (or `"0"`) is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x10000` (`DLG_TextAlignTop`)**: For standard HTML dialog (Template Identifier `01`) this option will enable top alignment for the dialog text (see region 4 of [dialog.html]). By default, the dialog text is vertical centered. If a Template Identifier `>=02` is used, variable `text_align_top` with value `"1"` (or `"0"`) is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x20000` (`DLG_TextAlignBottom`)**: For standard HTML dialog (Template Identifier `01`) this option will enable bottom alignment for the dialog text (see region 4 of [dialog.html]). By default, the dialog text is horizontal centered. The option is ignored, if a `DLG_TextAlignTop` is set. If a Template Identifier `>=02` is used, variable `text_align_bottom` with value `"1"` (or `"0"`) is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x40000` (`DLG_NoHeader`)**: For standard HTML dialog (Template Identifier `01`) this option disables header area for the dialog (see region 2 of [dialog.html]). By default, the header area is enabled and contains the image `client_logo.png`. The image file comes along with UI default resources in SDI config package for standard mode (see [Default UI resource files]). Optionally, TLV tag `DFA143` (dialog header label) can be used to replace the logo by the provided text. If a Template Identifier `>=02` is used, variable `header_logo` with value `"1"` (or `"0"`) and variable `header_text` with the header text are passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. 
* **`0x80000` (none)**: Reserved (ingored) 
* **`0x100000` (`DLG_ClearOnReturn`)**: This option clears the screen automatically, if the dialog returns. This option is only supported for synchronous dialogs (without option `DLG_Async`). 

* **`0x200000` (`DLG_AbortOnCardRemove`)**: This option will abort the dialog, if a card was inserted when the dialog is displayed and this card is removed while the dialog is active. In this case `6400` with UI error `-8` (`UI_ERR_CANCELLED`) in TLV tag `DFA000` is returned as command response. If TLV tag `DFA13D` (dialog options) is not provided, this option is set as default (compatibility mode to old SDI server versions, see description of TLV tag `DFA006` below). This option is only supported for synchronous dialogs (without option `DLG_Async`). 

* **`0x400000` (`DLG_IgnoreExtAbort`)**: By default, an active dialog can be aborted with [Sys Abort (20-02)]. If this option is set, the dialog will ignore [Sys Abort (20-02)] while the dialog is active. This option is only supported for synchronous dialogs (without option `DLG_Async`). 


 |
| DFA006 | 1 | O | b | Confirmation requested TLV tag `DFA006` (Confirmation requested) is **deprecated**. Please use TLV tag `DFA13D` (Dialog options) instead, even if no option bits with `DLG_DisplayOnly` are used. This is to disable compatibility mode (see below) for old TLV tag `DFA006`, which future SDI versions wants to get rid of. Existance of TLV tag `DFA13D` (Dialog options) will ignore TLV tag `DFA006` (Confirmation requested).


Supported values for TLV tag `DFA006`: `00` = No confirmation (default), `01` = Confirmation required (a Cancel/Enter softkey or key helper is added, which corresponds to combined dialog options `DLG_CancelKey` and `DLG_EnterKey` (see TLV tag `DFA13D`).**Compatibility mode to keep behaviour of old SDI server versions using TLV tag `DFA006` (Confirmation requested) without TLV tag `DFA13D` (Dialog options):**

* Dialog option `DLG_AbortOnCardRemove` is enabled by SDI server as default 
* A combination of value 00 (No Confirmation) with value 0000 in TLV tag DFA005 (Timeout) displays an asynchronous dialog, which behaves according following dialog options of TLV tag `DFA13D`: 

```
DLG_Async | DLG_CancelKey | DLG_ClearKey | DLG_StoreAsyncResult | DLG_HideSoftKeys
```

 For touch only devices w/o keyboard (e.g. e280) the option `DLG_HideSoftKeys` is removed from this bitmask. 

 |
| DFA13E | var. | O | utf-8 | For standard HTML dialog (Template Identifier `01`) this tag provides the text, which is used as label for enter softkey or key helper in the dialog control bar (see region 5 of [dialog.html]). The label will replace the default image provided with option `DLG_EnterKey`. If a Template Identifier `>=02` is used, variable `enter_key_label` with the label text is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. This tag is ignored, if `DLG_EnterKey` is not set in TLV tag `DFA13D` (dialog options). 

 |
| DFA13F | var. | O | utf-8 | For standard HTML dialog (Template Identifier `01`) this tag provides the text, which is used as label for clear softkey or key helper in the dialog control bar (see region 5 of [dialog.html]). The label will replace the default image provided with option `DLG_ClearKey`. If a Template Identifier `>=02` is used, variable `clear_key_label` with the label text is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. This tag is ignored, if `DLG_ClearKey` is not set in TLV tag `DFA13D` (dialog options). 

 |
| DFA140 | var. | O | utf-8 | For standard HTML dialog (Template Identifier `01`) this tag provides the text, which is used as label for cancel softkey or key helper in the dialog control bar (see region 5 of [dialog.html]). The label will replace the default image provided with option `DLG_CancelKey`. If a Template Identifier `>=02` is used, variable `cancel_key_label` with the label text is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. This tag is ignored, if `DLG_CancelKey` is not set in TLV tag `DFA13D` (dialog options). 

 |
| DFA143 | var. | O | utf-8 | For standard HTML dialog (Template Identifier `01`) this tag provides the text, which is used as label for header area of the dialog (see region 2 of [dialog.html]). The label will replace the default image, which is used for the header area. If a Template Identifier `>=02` is used, variable `header_text` with the label text is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog. This tag is ignored, if `DLG_NoHeader` is set in TLV tag `DFA13D` (dialog options). 

 |
| DFA00D | 1 | O | b | Beep when dialog is displayed: `00` = No beep (default), `01` = Beep  |
| DFA150 | 1 | O | b | Command destination: `01` = Countertop (default), `02` = EPP  |
| FFA106 | var. | O | tlv | Additional key action, TLV tag may occur more than once to specify additional function keys on the keyboard to execute a related action on the displayed dialog. A key with a related action is specified by one pair of primitive TLV tags `DFA13B` (key) and `DFA13C` (action), which is added to one constructed TLV tag `FFA106`. Thus, multiple key-action pairs result multiple constructed TLV tags `FFA106`.For standard HTML dialog (Template Identifier `01`) the following additional key actions are implemented: 
| Tag | Size | M/O | Format | Description  |
| DFA13B | var. | M | utf-8 | ADKGUI keycode (string) of function key on the keyboard: 
| Keycode | Description  |
| `&#27;` | Cancel/Abort key, if TLV tag `DFA13D` with option `DLG_CancelKey` exists, this key action will be ignored  |
| `&#8;` | Clear/Back key, if TLV tag `DFA13D` with option `DLG_ClearKey` exists, this key action will be ignored  |
| `&#13;` | Enter/Confirm key, if TLV tag `DFA13D` with option `DLG_EnterKey` exists, this key action will be ignored  |
| `&#129;` | F1 key (e.g. available on P200)  |
| `&#130;` | F2 key (e.g. available on P200)  |
| `&#131;` | F3 key (e.g. available on P200)  |
| `&#132;` | F4 key (e.g. available on P200)  |
| `&#133;` | M0 key (e.g. available on P200)  |
| `&#137;` | M3 key (e.g. available on P200)  |



For more details about supported ADKGUI keycodes per device, please refer to ADKGUI documentation. The following keycodes cannot be used for additional key actions, since they would break SDI dialog implementation or are restricted for use due to security reasons: 
| Keycode | Description  |
|  -------- | -------- |
| `0 - 9` | Numeric keys  |
| `&#138;` | F10 key ('*'), default key to scroll up the dialog text, only if text content exceeds available place of dialog text area (see region 4 in chapter [dialog.html])  |
| `&#139;` | F11 key ('#'), default key to scroll down the dialog text, only if text content exceeds available place of dialog text area (see region 4 in chapter [dialog.html])  |



If one of these restricted keycodes is found, the key with the related action is ignored. 

 |
|  -------- | -------- | -------- | -------- | -------- |
| DFA13C | var. | M | utf-8 | Dialog action associated to the key: 
| Action | Description  |
| `confirm` | Confirm the dialog, command Handle Display (24-03) will return response `9000` as if the enter key is pressed with dialog option `DLG_EnterKey` in TLV tag `DFA13D` |
| `exit&nbsp;<code>` | Abort the dialog, the command returns response code `6400` (Execution error) with specified UI error code `<code>` in TLV tag `DFA000` (Additional result code). Applications should always use positive values (>0) for UI error code `<code>`. When using negative values (<0), these values must be in range of `enum UIError` of ADKGUI header file `[gui_error.h](gui__error_8h.md#file-gui-error.h)` (e.g. use value `-2` for `UI_ERR_BACK`). Using reserved UI error codes (see description of response below) will lead to another response code than `6400` (e.g. value `-1` for `UI_ERR_ABORT` will lead to response `6405`). UI error code `0` (`UI_ERR_OK`) is identical to action `confirm` will lead to response `9000`. 

 |
| `up` | scroll up the dialog text, only if text content exceeds available place of dialog text area (see region 4 in chapter [dialog.html]).  |
| `down` | scroll down the dialog text, only if text content exceeds available place of dialog text area (see region 4 in chapter [dialog.html]).  |


 |
|  -------- | -------- | -------- | -------- | -------- |



If a Template Identifier `>=02` is used, variable `key_actions` with following JSON data is passed in ADKGUI parameter map `ARGV` to the custom HTML dialog.

 Example: 

```
[
  {
    "key": "&#129;",
    "action": "up"
  },
  {
    "key": "&#132;",
    "action": "down"
  },
  {
    "key": "&#137;",
    "action": "confirm"
  },
  {
    "key": "&#133;",
    "action": "exit 5"
  }
]
```

 |
|  -------- | -------- | -------- | -------- | -------- |


Response: 
| SW1  | SW2  | Data  | Comment  | Reserved UI error code   |
|  -------- | -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK  | 0 (UI_ERR_OK)   |
| 64  | 00  | None  | Execution Error (UI error code in TLV tag DFA000)  |  |
| 64  | 05  | None  | Canceled by user  | -1 (UI_ERR_ABORT)   |
| 65  | 00  | None  | Execution Aborted with [Sys Abort (20-02)] |  |
| 66  | 00  | None  | Timeout  | -3 (UI_ERR_TIMEOUT)   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA000  | 4  | O  | b  | UI error code (additional result code)   |


Examples: 

```cpp
// Command to display text "Hello world"
24 03 00 00 F0 13 FF A0 11 0F DF A0 13 0B 48 65 6C 6C 6F 20 77 6F 72 6C 64

// Response
90 00
```

An additional example user config package `dl.sdi-usrconfig-template_e_002-X.X.X-pre1-P2PE-X.X.X.tar` comes along in subfolder `example/load/usr_config` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`. The package contains `template_e_002.html` so that Handle Display (24-03) can be used with Template Identifier `2` to display the installed example. The dialog also demonstrates usage of 2 variables `text` and `text2`, which are provided in TLV tag FFA011 (Display Data). 

Appendix [UI command examples] contains additional command examples demonstrating usage of Handle Display (24-03).



### Handle Secure Input (24-04)

Command to handle a secure input on the display to request a numerical input. Before displaying the addressed text the previous display content will be complete deleted.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 04  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA007  | 1  | O  | b  | Input Template ID (reference to authenticated text stored inside the e-device)   |
| DFA008  | 1  | O  | b  | Text Language, default is current terminal/transaction language (see [Supported System Languages])   |
| DFA005  | 2  | O  | b  | Timeout in seconds (MSB, LSB): 0000 = No timeout (default)   |
| DFA00D  | 1  | O  | b  | Beep when menu will be displayed: 00 = No beep (default), 01 = Beep   |
| DFA019  | 1  | O  | ans  | Masking character; allowed ASCII values from 20 to 7E; if not set no masking will be done   |
| DFA01A  | var.  | O  | ans  | Alternative Input Format String   |
| 9F02  | 6  | O  | n  | Amount, **must** for Template ID 0E   |
| 5F2A  | 2  | O  | n  | Currency (see [Supported Currencies]), **must** for Template ID 0B, 0D and 0E   |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


The alternative Input Format String configures the number of digits which have to be entered. The Format is described by the combination of N's and n's included in square brackets. N means mandatory digit, n means optional digit. Example: [NNNnn] requests a 5-digit number in which 3 digits must be entered at least. 

The default configuration for CVV is 3 to 4 digits. It can be forced to fix 3 digits respectively fix 4 digits with the optional format string of [NNN] respectively [NNNN]. To bypass the CVV input the values [BBBb], [BBB] or [BBBB] has to be used. Other values are not allowed and will be returned with 64 00. 

Supported currencies see [Supported Currencies]

The number of decimal places when displaying amounts is done automatically in accordance with the ISO 4217 standard


Input templates are stored inside the PINPad and have to be loaded in a secure environment. The following input templates are supported: 
| Template ID  | Description  | Name  | Format   |
|  -------- | -------- | -------- | -------- |
| 01  | ZIP code (4 – 6 Digits)  | ZIP  | utf-8   |
| 02  | Card Verification Code (3 – 4 Digits)  | CVV  | utf-8   |
| 03  | Date of Birth (8 Digits: MMDDYYYY)  | BIRTHDAY  | utf-8   |
| 04  | Social Security Number (SSN) (9 Digits)  | SSN  | utf-8   |
| 05  | Last 4 digits of SSN (4 Digits)  | LAST4SSN  | utf-8   |
| 06  | Verify ZIP code (4 – 6 Digits)  | ZIP  | utf-8   |
| 07  | Verify Card Verification Code (3 – 4 Digits)  | CVV  | utf-8   |
| 08  | Verify Date of Birth (8 Digits: MMDDYYYY)  | BIRTHDAY  | utf-8   |
| 09  | Verify Social Security Number (SSN) (9 Digits)  | SSN  | utf-8   |
| 0A  | Verify Last 4 digits of SSN (4 Digits)  | LAST4SSN  | utf-8   |
| 0B  | Enter Gratuity Amount  | AMOUNT  | utf-8   |
| 0C  | Enter Gratuity Percentage  | PERCENT  | utf-8   |
| 0D  | Enter Cashback Amount  | AMOUNT  | utf-8   |
| 0E  | Enter Tip with showing the fare amount  | AMOUNT  | utf-8   |
| 0F  | Entering an email address  | EMAIL  | utf-8   |
| 10  | Entering a telephone number  | PHONE  | utf-8   |
| 11  | Entering the number of installments  | INSTALLMENTS  | utf-8   |


The special characters relevant for an email address (.!#$%25&'*+-/=?^_"{|}~) are available by multiple pressing the key '1. The character '@' is assigned to the key '0'. 

Texts for input dialogs depend on Template ID and are looked up from UI catalogs, one for each supported system language. These texts can be customized with the installation of [Custom UI text catalogs].


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK, valid **Response Data** |
| 64  | 00  | None  | Execution Error   |
| 64  | 05  | None  | Canceled by user   |
| 64  | FE  | None  | Parameter Error   |
| 65  | 00  | None  | Execution Aborted   |
| 66  | 00  | None  | Timeout   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| FFA014  | var.  | O  | tlv  | **Input Data** (see table below). Depending on the used template this tag may occur more than once   |


Input Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA015  | var.  | M  | ans  | Input Data Name   |
| DFA016  | var.  | M  | utf-8  | Input Data Value   |


Examples: 

```cpp
// Command to handle input of a zip code in Spanish with beep and a timeout of 30 seconds
24 04 00 00 F0 16 DF A0 07 01 01 DF A0 08 01 04 DF A0 0D 01 01 DF A0 05 02 00 1E

// Response
90 00 F0 16 FF A0 14 11 DF A0 15 03 5A 49 50 DF A0 16 06 31 32 33 34 35 00
```



```cpp
// Command to handle input of a zip code with alternative Input Format String to enter exactly five digits: [NNNNN]
24 04 00 00 F0 17 DF A0 07 01 01 DF A0 05 02 00 1E DF A0 1A 07 5B 4E 4E 4E 4E 4E 5D

// Response
90 00 F0 16 FF A0 14 11 DF A0 15 03 5A 49 50 DF A0 16 06 31 32 33 34 35 00
```



### Handle Menu (24-05)

Command to display a menu dialog on screen. It expects a menu text prompt (TLV tag `DFA00A`) and menu entries (one or multiple TLV tags `DFA00B`, whereas the order in the provided TLV buffer corresponds the order for the display. The returned index (starts with `1` complies with the input sequence of the TLV tag(s) `DFA00B`. Finally, additional dialog options (TLV tag `DFA142`) are provided to adjust behaviour and appearance of the menu dialog.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 05  | SC  | 00  | Constructed   |


Command Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA00A | var. | O | utf-8 | Menu text prompt, added to region 3 of the menu dialog (see chapter [menu.html]). If this tag is not provided, the region will disappear.  |
| DFA00B | var. | O | utf-8 | Menu Entry Text, added to region 4 of the menu dialog (see chapter [menu.html]). For multiple menue entries this tag may occur more than once.  |
| DFA005 | 2 | O | b | Timeout in seconds (MSB, LSB) 0000 = Infinite Timeout (default)  |
| DFA13D | 1-4 | O | b | Dialog options (big endian), bit mask with following values: 

* **`0x00` (`MENU_NoOpts`)**: No options set 
* **`0x01` (`MENU_Beep`)**: Beep when dialog is displayed. Identical to TLV tag `DFA00D` with value `1`. 
* **`0x02` (`MENU_NoLEDs`)**: This option disables LEDs area for the dialog (see region 1 of [menu.html]) regardless of the global LED area setting (see [Activate LEDs (24-09)]). 
* **`0x04` (`MENU_ClearOnReturn`)**: This option clears the screen automatically, if the menu dialog returns. If TLV tag `DFA13D` (dialog options) is not provided, this option is set as default (compatibility mode to old SDI server versions). 
* **`0x08` (`MENU_AbortOnCardRemove`)**: This option will abort the menu dialog, if a card was inserted when the menu is displayed and this card is removed while the menu is active. In this case `6400` with UI error `-8` (`UI_ERR_CANCELLED`) in TLV tag `DFA000` is returned as command response. If TLV tag `DFA13D` (dialog options) is not provided, this option is set as default (compatibility mode to old SDI server versions). 
* **`0x10` (`MENU_IgnoreExtAbort`)**: By default, an active menu dialog can be aborted with [Sys Abort (20-02)]. If this option is set, the menu dialog will ignore [Sys Abort (20-02)] while the dialog is active. 
* **`0x20` (`MENU_NoHeader`)**: For standard HTML dialog (Template Identifier `01`) this option disables header area for the menu dialog (see region 2 of [menu.html]). By default, the header area is enabled and contains the image `client_logo.png`. The image file comes along with UI default resources in SDI config package for standard mode (see [Default UI resource files]). Optionally, TLV tag `DFA143` (dialog header label) can be used to replace the logo by the provided text. 

 |
| DFA13E | var. | O | utf-8 | This tag provides the text, which is used as label for enter softkey or key helper in the menu dialog control bar (see region 5 of [menu.html]). The label will replace the default image.  |
| DFA140 | var. | O | utf-8 | This tag provides the text, which is used as label for cancel softkey or key helper in the menu dialog control bar (see region 5 of [menu.html]). The label will replace the default image.  |
| DFA141 | var. | O | utf-8 | This tag provides the text, which is used as label for up softkey or key helper in the menu dialog control bar (see region 5 of [menu.html]). The label will replace the default image.  |
| DFA142 | var. | O | utf-8 | This tag provides the text, which is used as label for down softkey or key helper in the menu dialog control bar (see region 5 of [menu.html]). The label will replace the default image.  |
| DFA143 | var. | O | utf-8 | This tag provides the text, which is used as label for header area of the menu dialog (see region 2 of [menu.html]). The label will replace the default image, which is used for the header area. This tag is ignored, if `MENU_NoHeader` is set in TLV tag `DFA13D` (dialog options). 

 |
| DFA00D | 1 | O | b | Beep when menu dialog is displayed: `00` = No beep (default), `01` = Beep  |
| DFA150 | 1 | O | b | Command destination: `01` = Countertop (default), `02` = EPP  |
| DFA00C | 1 | O | b | Index of the pre-selected Menu Entry (use `01` for the first entry) For compatibility reasons SDI server will select the first item, if TLV tag `DFA00C` is omitted. Use an invalid item number (e.g. `0`) to avoid that an item gets pre-selected. 

 |
| FFA106 | var. | O | tlv | Additional key action, TLV tag may occur more than once to specify additional function keys on the keyboard to execute a related action on the displayed dialog. A key with a related action is specified by one pair of primitive TLV tags `DFA13B` (key) and `DFA13C` (action), which is added to one constructed TLV tag `FFA106`. Thus, multiple key-action pairs result multiple constructed TLV tags `FFA106`.For the menu dialog the following additional key actions are implemented 
| Tag | Size | M/O | Format | Description  |
| DFA13B | var. | M | utf-8 | ADKGUI keycode (string) of function key on the keyboard: 
| Keycode | Description  |
| `&#8;` | Clear/Back key  |
| `&#129;` | F1 key (e.g. available on P200)  |
| `&#130;` | F2 key (e.g. available on P200)  |
| `&#131;` | F3 key (e.g. available on P200)  |
| `&#132;` | F4 key (e.g. available on P200)  |
| `&#133;` | M0 key (e.g. available on P200)  |
| `&#137;` | M3 key (e.g. available on P200)  |



For more details about supported ADKGUI keycodes per device, please refer to ADKGUI documentation. The following keycodes cannot be used for additional key actions, since they would break SDI menu implementation or are restricted for use due to security reasons: 
| Keycode | Description  |
|  -------- | -------- |
| `0 - 9` | Numeric keys  |
| `&#13;` | Confirm/Enter key, default key to confirm the menu dialog  |
| `&#27;` | Cancel/Abort key, default key to cancel/abort menu dialog  |
| `&#138;` | F10 key ('*'), default key to select the previous menu item and scroll menu up (if required) to make the item visible (see region 4 in chapter [menu.html])  |
| `&#139;` | F11 key ('#'), default key to Select the next menu item and scroll menu down (if required) to make the item visible (see region 4 in chapter [menu.html])  |



If one of these restricted keycodes is found, the key with the related action is ignored. 

 |
|  -------- | -------- | -------- | -------- | -------- |
| DFA13C | var. | M | utf-8 | Menu action associated to the key: 
| Action | Description  |
| `confirm` | Confirm the menu, command Handle Menu (24-05) will return response `9000` as if Enter key `&#13;` is pressed. The index of the selected menu entry is returned in TLV tag `DFA00C`. The dialog does not return, if the related key is pressed and so far no menu items was selected (e.g. using TLV tag `DFA00C` with value `0`). 

 |
| `exit&nbsp;<code>` | Abort the menu, the command returns response code `6400` (Execution error) with specified UI error code `<code>` in TLV tag `DFA000` (Additional result code). Applications can use positive values (>0) for UI error code `<code>`, but please note that values might collide with index range of menu entries (1...n).

 Example: If 3 menu entries are provided, applications should use UI error codes >=4 to avoid conflicts with values the menu entries.

 Using UI error code in range (1...n) will lead to response code `9000` with TLV tag `DFA00C` (menu entry index).

 Finally, this could be also a use case: Let keys `1-9` always select the corresponding menu entry (`1`->first entry, `2`->second entry ...) 

When using negative values (<0), these values must be in range of `enum UIError` of ADKGUI header file `[gui_error.h](gui__error_8h.md#file-gui-error.h)` (e.g. use value `-2` for `UI_ERR_BACK`). Using reserved UI error codes (see description of response below) will lead to another response code than `6400` (e.g. value `-1` for `UI_ERR_ABORT` will lead to response `6405`). 

Exception is UI error code with value `0` (`UI_ERR_OK`): This will lead to response `6400` with TLV tag `DFA000` containing value `0`, since no menu entry was selected in this case and value `0` is out of range (1...n). 

 |
| `up` | Select the previous menu item and scroll menu up (if required) to make the item visible  |
| `down` | Select the next menu item and scroll menu down (if required) to make the item visible  |


 |
|  -------- | -------- | -------- | -------- | -------- |


 |
|  -------- | -------- | -------- | -------- | -------- |


For devices with keypad '*' and '#' keys are used to scroll through the menu. Enter key will confirm the pre-selected menu item. Cancel key aborts the menu dialog.


Response: 
| SW1  | SW2  | Data  | Comment  | Reserved UI error code   |
|  -------- | -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK (menu confirmed, selected item is returned with TLV tag DFA00C)  | 0 (UI_ERR_OK)   |
| 64  | 00  | None  | Execution Error (UI error code in TLV tag DFA000)  |  |
| 64  | 05  | None  | Canceled by user  | -1 (UI_ERR_ABORT)   |
| 65  | 00  | None  | Execution Aborted with [Sys Abort (20-02)] |  |
| 66  | 00  | None  | Timeout  | -3 (UI_ERR_TIMEOUT)   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA00C  | 1  | O  | b  | Index of the chosen Menu Entry (`01` for the first entry)   |
| DFA000  | 4  | O  | b  | UI error code (additional result code)   |


Appendix [UI command examples] contains additional command examples demonstrating usage of Handle Menu (24-05).



### Handle Card Request Display (24-06)

This command handles the card request display according the given parameter. It can be used directly before the Card Detection command (23-01) to show the corresponding display including the contactless logo on devices it is needed. Only physical card technologies are supported. If the contactless technology is contained and the virtual CLTS LED area is diabled by default it will be enabled for the card request display temporary and disabled afterwards. In addition to the amount also the Transaction Type will be displayed when requested. For manual card data entry only this command is not to be used because the user dialog is handled automatically inside the Card Detection command.

Texts for card request dialog are looked up from UI catalogs, one for each supported system language. These texts can be customized with the installation of [Custom UI text catalogs].


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 06  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA108  | 1  | M  | b  | Requested Card Technology (for details see Card Detection)   |
| DFA10A  | 1  | O  | b  | Mode , 00 = Default, 01 = Fallback, 02 = Retry   |
| 9F02  | 6  | O  | n  | Amount   |
| 5F2A  | 2  | O  | n  | Currency (see [Supported Currencies]), **must** when amount is given   |
| 9C  | 1  | O  | n  | Transaction Type according EMV-ADK definition   |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Supported currencies see [Supported Currencies]

The number of decimal places when displaying amounts is done automatically in accordance with the ISO 4217 standard


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 64  | 00  | None  | Execution Error   |
| 64  | FE  | None  | Parameter Error   |


Example: 

```cpp
// Command to handle the card request display for mag stripe in default mode with an amount of 100,00 €:
24 06 00 00 F0 18 DF A1 08 01 01 DF A1 0A 01 00 9F 02 06 00 00 00 01 00 00 5F 2A 02 09 78

// Response
90 00
```



### Display Idle Screen (24-07)

Command to display the idle screen with a text and/or an image. SDI server invokes HTML dialog `idle.html` (see chapter [idle.html]), which shows the idle message in region 4 and the image (if any) in region 3. The default message is provided by UI catalog installed with the SDI config package for standard mode (see [Default UI resource files]) and can be replaced with an user config package containing a custom UI catalog (see chapter [Custom UI text catalogs]). Using a custom UI catalog to configure an own idle text is the recommended method, since this works system language depended. In addition, the idle text can be set with command [Set Idle Text (20-13)]. If set with this command, this text is always used, independed from used SDI system language. Finally, another user config package can be used to install the custom logo file for the idle screen. The package must install the file `cust_logo.png` into following device location:

VOS/VOS2: 

```
/etc/config/sdi/www/images
```

 VOS3: 

```
/home/usr<X>/sdi/www/images
```

For more details and instruction how to create such a package, please refer to chapter [Install UI user config packages]. An example download package `dl.sdi-usrconfig-idlescreen-logo-X.X.X-X-P2PE-X.X.X.tar` containing the Verifone logo comes along with this SDI documentation package in subfolder `example/load/usr_config`.

A custom text or image will replace the default idle message of SDI server used for the idle screen. Using both, the custom text and an image will display the text on bottom to the image. Deletion of the idle text (see [Set Idle Text (20-13)]) and removing file `cust_logo.png` will reset the SDI server idle screen to default message taken from UI catalog. 

Idle screen is also displayed by SDI itself, e.g. after startup to display states like waiting for connection. Once a connection is established to SDI, the idle screen is displayed at once the idle screen text.


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 07  | 00  | 00  | None   |
| 24  | 07  | 00  | 00  | Constructed   |


Command Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA150 | 1 | O | b | Command destination:
`01` = Countertop (default)
`02` = EPP  |
| DFA155 | 1 | O | b | With enabled administration mode (see [config.json]) this TLV tag can be used to show Info/Menu softkeys/keyhelpers or to control admin menu access for idle screen to display.
`00` = Don't show admin menu softkeys/keyhelpers and allow to enable admin menu by key combination 2-5-8 or clockwise touch presses on four display corners (default)
`01` = Don't show admin menu softkeys/keyhelpers, but disallow to enable admin menu
`02` = Show admin menu softkeys/keyhelpers This tag is ignored, if administartion mode is disabled (default). 

Value of tag `DFA155` is not stored persistently and applied for idle screen only, which was triggered by this command. If SDI shows an internal idle screen afterwards (e.g. with message "Wait for connection...." due to connection lost), the default value `00` is used again. 

 |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


The file name for the image must be cust_logo.png. The maximum size of the image should be conform to the devices display resolution.



### Handle Signature Capture (24-08)

Command to handle a signature capture dialog on the device display. Before displaying the addressed text the previous display content will be complete deleted.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 08  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA008  | 1  | O  | b  | Text Language, default is current terminal/transaction language (see [Supported System Languages])   |
| DFA005  | 2  | O  | b  | Timeout in seconds (MSB, LSB), default is 0000 (no timeout)   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK, valid **Response Data** |
| 64  | 00  | None  | Execution Error   |
| 64  | 05  | None  | Canceled by user   |
| 65  | 00  | None  | Execution Aborted   |
| 66  | 00  | None  | Timeout   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| FFA015  | var.  | M  | tlv  | **Signature Data** (see table below).   |


Signature Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA01C  | var.  | M  | a  | Signature Format (e.g. png)   |
| DFA01D  | var.  | M  | b  | Signature Value   |




* Currently Portable Network Graphics (png) format is supported.
* In the two piece solution this command will be executed on the EPP only.
* Texts for signature capture dialog are looked up from UI catalogs, one for each supported system language. These texts can be customized with the installation of [Custom UI text catalogs].


Examples: 

```cpp
// Command to get a signature in png format
24 08 00 00 F0 0B DF A0 08 01 02 DF A0 05 02 00 1E

// Response
90 00 F0 82 02 91 FF A0 15 82 02 8B DF A0 1C 03 70 6E 67 DF A0 1D 82 02 7E 89 50 4E 47 0D 0A 1A
0A 00 00 00 0D 49 48 44 52 00 00 00 D8 00 00 00 8D 01 00 00 00 00 FD 18 89 04 00 00 02 45 49 44
41 54 48 89 ED D4 41 8E 9B 30 14 06 60 22 46 F5 2C 2A B9 07 18 D5 ED 0D 7A 82 FA 2C 73 8B 2E 2A
39 08 A9 B9 16 88 8B 38 EA 05 BC F4 C2 F2 9B DF 78 12 1E 93 07 BB 6E 2A 90 90 02 5F 30 EF 7F D8
6E 68 FB 68 0E 3B EC 9F 59 B6 DB 16 77 2C EC D8 E0 44 8B E5 76 23 9B C7 ED BC DC 59 59 19 2E 6D
D8 19 16 BE 8B 96 9F 60 FE 55 B4 F4 19 36 4C A2 C5 17 58 2F 5B F8 E5 28 AB 8B 68 1E F9 92 96 AD
0B 18 D7 68 D1 DA 50 E2 8B 96 D5 15 65 66 23 59 32 B0 4E B6 68 51 BE 4A 56 B2 E0 26 94 19 45 F3
74 41 99 C1 49 D6 91 C2 47 0F 24 59 4B 1A CF 5E 25 CB 0A 25 76 34 4A 96 0C AC A5 5E B2 68 93 CD
0A EF 14 2C B8 64 A3 C9 BA 4C 0B F7 C1 3C A6 59 B0 A5 2D FE C1 3A 98 77 A5 2D E7 07 6B 29 A0 48
B4 25 35 73 DF FE 2E 86 32 3C 8A 44 5B 7C ED 69 BF 58 32 88 5D 9C 1A 33 2F A5 76 31 0C 36 A1 C8
B1 4C DE 62 49 2D 86 C1 7A 3C 3B 61 C8 D9 A2 59 0C 83 5D B0 BC 2E 74 B6 B3 E1 F7 DD D0 47 8D B5
A2 CA 5A 29 21 07 96 A1 A7 AC 07 9C 51 55 EB 98 E1 2D A6 47 B5 1E F7 C9 50 6E 17 43 89 C9 2A 54
5B D6 12 9E 4B 9A 99 A1 F8 53 A3 6D A7 7A 11 CC 62 68 45 FC 8D 5B 49 D5 8B B2 84 6F 86 E8 01 A7
2F FF 2F 36 B0 5E 23 7A C0 39 0E A5 5D 58 33 2D 33 44 BF E2 EC CF F3 20 2E 2B 66 88 3E 8E 94 3F
B5 F3 20 14 35 33 4C A1 09 F1 9E 75 B5 79 73 BA 19 C6 F8 83 78 4D 29 05 1F 6B DE 9C 9A 7B 74 7A
D2 14 EA 6C B8 96 8E DD 0D 5F 87 9E 0D F9 D3 7C 35 CD 65 DE 0C D1 F2 17 47 E7 3A 3B A7 A4 99 21
5A D9 AC EA EB E8 12 0D 37 0C 7B C2 3E E7 AA 79 CB 0C AB 27 B6 94 EB EB 48 0F C4 0C D1 F1 51 F3
FB 62 D0 27 6E 88 8E 56 BC EF 03 F9 AB E2 C6 56 0F EC 45 33 CB 7A 65 3F 2C B3 64 56 F6 CD 31 63
1B 07 2D DB 72 73 8B CE AD E5 E6 69 65 8A DB B8 36 C3 AD 27 E9 A8 A6 B6 6D 1D EF 83 99 6D 63 7B
E6 83 C5 1D 5B 47 5F 9B 17 A9 DA B8 63 72 F4 6A 72 F4 6A 72 F4 6A 66 C7 36 8E C3 0E 3B EC B0 FF
C5 DE 00 56 5B 01 D5 9D E5 CD 18 00 00 00 00 49 45 4E 44 AE 42 60 82
```



### Activate LEDs (24-09)

Command to activate/deactivate the virtual CLTS LED area on the display. The command itself doesn't change the display at all. The display content will be updated with the next screen update. The payment application is responsible for the correct command order.

Command: 
| CLA  | INS  | P1  | P2  | Comment   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 09  | 00  | 00  | Activate   |
| 24  | 09  | 00  | 01  | Deactivate   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |




* During the startup the SDI-Server activates the LED area automatically.
* In the two piece solution this command will be executed on the EPP only.



### Handle HTML Dialog (24-0A)

Similar to [Handle Display (24-03)] this command is used to display customer specific HTML dialogs.

 Handle HTML Dialog (24-0A) has the following differences to [Handle Display (24-03)] :

* It always requires a HTML template and does not work without it. HTML templates are installed with an [User config package], which require SDI user signing privileges (e.g. with a regional user signing card for VOS/VOS2).
* It can be used to display dialogs for user inputs. A name-value map `ARGV` for ADKGUI (as already supported for [Handle Display (24-03)] for inbound direction with TLV tags `FFA011`, `DFA012` and `DFA013`) is returned in command response and contains all data, which was produced by the dialog, e.g. data of input fields. For more details see description of TLV tags `FFA014`, `DFA015` and `DFA016` below.
* It supports a reduced set of dialog options with TLV tag `DFA13D`, e.g. it is not supported to run the dialog asynchronously. Only synchronous execution is supported to provide dialog data in command response.
* It is executed with a special ADKGUI secure mode (CPApp mode), which disallows usage of `varhtml` and `print()` function to modify HTML document from JavaScript preprocessor (HTML tag `<js>`). For more details please refer to ADKGUI documentation.
* The secure mode with restrictions allows name-value map `ARGV` in TLV tag `FFA011` to contain HTML characters, which are not filtered/substituted by SDI. For instance, this allows to provide initial data for input files containing HTML entities.
* Users must consider additional security directives to avoid misuse (e.g. fake PIN inputs). These directives are listed below and must be considered by developers providing the HTML template.
* It uses a separate CSS file `custom.css`, whereas [Handle Display (24-03)] uses `style.css`, which is also applied to internal SDI dialogs, see chapter [Default UI resource files].


Additional variables can be injected into custom dialogs with constructed TLV tag `FFA011` (Display Data). Each tag contains a pair of primitive TLV tags `DFA012` (variable name) and `DFA013` (variable value), which are passed in ADKGUI parameter map `ARGV` to the dialog. The ADKGUI parameter map `ARGV` is returned with constructed TLV tag `FFA014` in the same way (primitive TLV tags `DFA015` and `DFA016` used as name-value pairs). Parameter map returned with TLV tag `FFA014` never contains variables with prefix `_`. These variables are considered by the dialog as private, thus, SDI server filters them out and does not add them to the response. HTML template developers can use this prefix to keep dialog variables as private and avoid to send them to outer world in command response.


HTML templates may have an arbitrary filename and are installed with an [User config package] to following UI resource location:

 VOS/VOS2: 

* `/etc/config/sdi/www/<width>x<height><color><numkeys><touch>` (device specific UI resoucre folder, e.g. `320x480C15T` is used for P400) 
* `/etc/config/sdi/www/default` (default UI resource folder, used if the resource isn't found in device specific folder) 


VOS3: 

* `/home/usr<X>/sdi/www/<width>x<height><color><numkeys><touch>` (device specific UI resoucre folder, e.g. `320x480C15T` is used for P630) 
* `/home/usr<X>/sdi/www/default` (default UI resource folder, used if the resource isn't found in device specific folder) 

Finally, the appearance of the custom HTML template can be controlled with a CSS file `custom.css`, which comes along with the a [User config package] to external UI resource folders of SDI (see above). In addition, custom HTML templates can be implemented language independed and SDI server will load the custom UI text catalog for the recent system language to invoke the dialog. Thus, HTML templates can use XML processing instruction `<?text name?>` in HTML to use texts from the custom catalog (for more details see chapter [Custom UI text catalogs]).

The same as decribed for command [Handle Display (24-03)], reserved UI return codes are mapped SDI result codes SW1/SW2. Other result codes are provided with response 6400 and TLV tag DFA000 (additional result code).


#### Security directives for developing HTML templates used for custom dialogs with user inputs

There is a high risk for misuse of customer dialogs, if the HTML template contains elements to input user data with keyboard or touch screen.

 Developers must care about security related to data, which is provided in command with SDI interface, especially, if the interface is accessible from outer world (e.g. public networks).

 For this reason developers of custom dialogs **MUST** consider the following security directives:

* Texts used as prompt for input fields (element `<input>`) must be part of HTML template or taken from a text catalog file with XML processing instruction `<?text name?>`. Texts for the custiom dialogs must be sufficient and unambiguous so that there is no risk that dialog could be misinterpreted as PIN prompt.
* Never pass prompt texts for input fields like "Please enter amount" in TLV tags `FFA011` over external SDI interface to display them in the dialog. This enables attackers to misuse the dialog for fake PIN prompts by just using another text like "Please enter PIN".
* Don't use variables in prompt texts and never place variables between the prompt text and the input field (element `<input>`).
* Reduce number input variables injected to dialogs with TLV tags `FFA011` to a minimum. Be aware that data from outer world, which is put as text to the display could to move elements out of the screen range. Thus, input fields could become unvisible or hidden, but still active, when getting the focus. Use JavaScipt preprocessor (element `<js>`) to check variable values and its length before displaying its content in dialogs.
* Never use multiple buttons (element `<button>`) on touch screens, which could be misused as a virtual PIN keypad. Do not place just numbers as text on buttons and never use variables from TLV tag `FFA011` to label these buttons.
* Before deploying HTML templates review the HTML code with another person, which is aware of these security directives.

HTML template developers and SDI users are responsible for custom dialogs and for its potential misuse!


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 0A  | SC  | 00  | Constructed   |


Command Data:


| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA020 | var. | M | ans | Pure HTML file name without any path information (see table of supported customer input dialogs below)  |
| FFA011 | var. | M | tlv | Display Data (dialog input variable as name-value pair) containing primitive TLV tags DFA012 (variable name) and DFA013 (variable value) as decribed in chapter [Handle Display (24-03)]. The tag may occur more than once to inject multiple variables to the HTML dialog.  |
| DFA005 | 2 | O | b | Timeout in seconds (MSB, LSB), `0000` = Infinite Timeout (default)

 The value is passed as variable `timeout` in ADKGUI parameter map `ARGV` to the custom HTML dialog. In case of an infinite timeout, the variable contains value "-1" so that it can directly used for `<input>` element of ADKGUI as follows: 

```
<input type='idletimeout' style='display:none' value='<?var _timeout?>' action='return -3'>
```

Custom dialog `tip.html` applies the timeout with type `idletimeout` meaning the timeout is reset whenever the user interacts with the dialog. For more details please refer to ADKGUI documentation. 

Since variable `_timeout` is using private prefix `_`, it is not returned in response with parameter map (TLV tag `FFA014`). 

 |
| DFA13D | 1-4 | O | b | Dialog options (big endian), bit mask as described in chapter [Handle Display (24-03)], but for command HTML Dialog (24-0A) only the following options are supported: 

* **`0x00` (`DLG_DisplayOnly`)**
* **`0x01` (`DLG_Beep`)**: Beep when dialog is displayed. Identical to TLV tag `DFA00D` with value `1`. 
* **`0x100000` (`DLG_ClearOnReturn`)**
* **`0x200000` (`DLG_AbortOnCardRemove`)**
* **`0x400000` (`DLG_IgnoreExtAbort`)**

`DLG_DisplayOnly` (no option) is used as default, if TLV tag DFA13D is missing.  |
| DFA00D | 1 | O | b | Beep when text will be displayed: 00 = No beep (default), 01 = Beep  |
| DFA008 | 1 | O | b | Text Language, default is current terminal/transaction language (see [Supported System Languages])  |
| DFA150 | 1 | O | b | Command destination: 01 = Countertop (default), 02 = EPP  |


Response: 
| SW1  | SW2  | Data  | Comment  | Reserved UI error code   |
|  -------- | -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK  | 0 (UI_ERR_OK)   |
| 64  | 00  | None  | Execution Error (UI error code in TLV tag DFA000)  |  |
| 64  | 05  | None  | Canceled by user  | -1 (UI_ERR_ABORT)   |
| 65  | 00  | None  | Execution Aborted with [Sys Abort (20-02)] |  |
| 66  | 00  | None  | Timeout  | -3 (UI_ERR_TIMEOUT)   |


Response Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| FFA014 | var. | M | tlv | Output Data with result of user input (one dialog variable as name-value pair), provided with response 9000.

 The following primitive TLV tags are used in this tag: 
| Tag | Size | M/O | Format | Description  |
| DFA015 | var. | M | ans | Variable name  |
| DFA016 | var. | M | utf-8 | Variable value  |



The tag occurs more than once, if the dialog returns multiple output variables (see table of supported customer input dialogs below).  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA000 | 4 | O | b | UI error code (additional result code), optionally provided with response 6400.  |


An additional sample user config package `dl.sdi-usrconfig-custom-dialog-X.X.X-X-P2PE-X.X.X.tar` with custom dialog `tip.html` comes along in subfolder `example/load/usr_config` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`. The dialog handles a tip input with percent calculation in JavaScript and supports the following parameters:


| Filename | Usage | Variable | I/O | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| `tip.html` | Handles a tip entry with several buttons.

 If `amount` value is below the value of `threshold`, two buttons with tip amounts (2 and 3) are displayed.

 Otherweise the dialog will display three percent buttons (15%, 20%, 25%) to specify the tip amount.

 Tip amount and percent values are recently hardcoded in the `tip.html` file.  | `amount` | I/O | Payment amount  |
| `currency` | I/O | Currency string  |
| `threshold` | I/O | Threshold to control buttons  |
| `tip` | O | Tip amount  |
| `total` | O | Total amount (payment amount plus tip amount)  |


SDI versions <= 4.23.16 provided `tip.html` as build-in custom dialog installed with the [SDI config package]. Thus, projects updating to newer SDI versions now must install `dl.sdi-usrconfig-custom-dialog-X.X.X-X-P2PE-X.X.X.tar` on top of SDI base installation to make this customer dialog available again. Since `tip.html` is installed with an [User config package], users can adjust this dialog easily to fullfil their own project requirements.

Appendix [UI command examples] contains an additional command example demonstrating usage of Handle HTML dialog (24-0A) with custom dialog `tip.html`.



### Get Async Display Result (24-0B)

In case that a previous command [Handle Display (24-03)] was executed asynchronously with TLV tag `DFA13D` containing dialog options `DLG_Async` and `DLG_StoreAsyncResult`, this command can be used to get the status and result of this asynchronous dialog. The following 5 cases are considered: 

* If no asynchronous dialog was started yet, the command returns **response `9000` with TLV tag `DFA144` (Async. Dialog Status)** containing value **`01` (no async. dialog started)**. 
* For an active asynchronous dialog (which is still in progess and has not returned yet), the command returns **response `9000` with TLV tag `DFA144` (Async. Dialog Status)** containing value **`02` (async. dialog in progress)**. 
* If the dialog has finished successfully with UI error `UI_ERR_OK` (usually in case that Enter/Confirm hardkey or softkey was pressed), the command returns **response `9000` with TLV tag `DFA144` (Async. Dialog Status)** containing value **`00` (async. dialog finished with UI error `UI_ERR_OK`)**. 
* If the dialog was aborted (either by user or another error occured), the command returns a negative ** response `6XXX` (see Response table below)**. 
* Once the result of an already finished or aborted dialog was read with Get Async Display Result (24-0B), the result is reset and command again returns **response `9000` with TLV tag `DFA144` (Async. Dialog Status)** containing value **`01` (no async. dialog started)**. 


Except TLV tag `DFA144` (Async. Dialog Status), command Get Async Display Result (24-0B) supports the same result data as [Handle Display (24-03)] for synchronous dialogs.

The result of an already finished dialog is reset and gets lost, if Get Async Display Result (24-0B) wasn't invoked and new asynchronous dialog `DLG_Async` and `DLG_StoreAsyncResult` is started.


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 24  | 0B  | SC  | 00  | None   |
| 24  | 0B  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA150  | 1  | O  | b  | Command destination: 01 = Countertop (default), 02 = EPP   |


Response: 
| SW1  | SW2  | Data  | Comment  | Reserved UI error code   |
|  -------- | -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK (Dialog status returned with TLV tag DFA144)  | 0 (UI_ERR_OK) for finished dialog   |
| 64  | 00  | None  | Execution Error (UI error code in TLV tag DFA000)  |  |
| 64  | 05  | None  | Canceled by user  | -1 (UI_ERR_ABORT)   |
| 65  | 00  | None  | Execution Aborted with [Sys Abort (20-02)] |  |
| 66  | 00  | None  | Timeout  | -3 (UI_ERR_TIMEOUT)   |


Response Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA144 | 1 | O | b | Async. Dialog Status, with following values: 
| Value | Description  |
| **`00`** | async. dialog finished with UI error `UI_ERR_OK` |
| **`01`** | no async. dialog started  |
| **`02`** | async. dialog in progress  |


 |
|  -------- | -------- | -------- | -------- | -------- |
| DFA000 | 4 | O | b | UI error code (additional result code)  |


Examples: 

```cpp
// request status/result of an asynchronous dialog
24 0B 00 00

// Response (dialog successfully finished)
90 00 F0 05 DF A1 44 01 00
```



## Printer Interface (25-XX)

To use this printer via the SDI protocol some printer commands are defined.


### Set Printer Property (25-00)

Access to [prtSetPropertyInt()](namespacevfiprt.md#function-prtsetpropertyint) and [prtSetPropertyString()](namespacevfiprt.md#function-prtsetpropertystring) functions (part of the ADK-HTMLPRINTER Programmers Guide) via the serialized command interface.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). SDI server stores the printer properties per connection and keeps them for duration of the connection. 

One property can be handled per command call only.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 25  | 00  | 00  | 00  | Constructed  | Int Property   |
| 25  | 00  | 00  | 01  | Constructed  | String Property   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFBC01  | ..4  | M  | b  | Property identifier   |
| DFBC02  | var.  | M  | b / ans  | Value identifier   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |




* In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.
* This command is not supported on EPP.



### Get Printer Property (25-01)

Access to [prtGetPropertyInt()](namespacevfiprt.md#function-prtgetpropertyint) and [prtGetPropertyString()](namespacevfiprt.md#function-prtgetpropertystring) functions via the serialized command interface.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). SDI server stores the printer properties per connection and keeps them for duration of the connection. 

One property can be handled per command call only.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 25  | 01  | 00  | 00  | Constructed  | Int Property   |
| 25  | 01  | 00  | 01  | Constructed  | String Property   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFBC01  | ..4  | M  | b  | Property identifier   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFBC01  | ..4  | M  | b  | Property identifier   |
| DFBC02  | var.  | M  | b / ans  | Value identifier   |




* In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.
* This command is not supported on EPP.



### Print HTML (25-02)

Access to [prtHTML()](namespacevfiprt.md#function-prthtml) functions via the serialized command interface.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). SDI server will delay a print command, if the printer device is already in use by another connection. The print command is processed, after the previous print job has been finished.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 25  | 02  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA002  | var.  | M  | html  | Print data   |
| DFA003  | 1  | O  | b  | Landscape printing: 00 = no (default), 01 = yes   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |




* In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.
* This command is not supported on EPP.



### Print BITMAP (25-04)

Function to print BITMAPS via the serialized command interface.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). SDI server will delay a print command, if the printer device is already in use by another connection. The print command is processed, after the previous print job has been finished.


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 25  | 04  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA030  | var.  | M  | b  | Bitmap raw data   |
| DFA031  | var.  | M  | b  | Bitmap width (pixel)   |
| DFA032  | var.  | M  | b  | Bitmap height (pixel)   |


Each pixel is represented by one bit, which means 0 is "white" and 1 is black. The left side of the pixel row is represented by the most significant bit and the right side is low significant bit.

Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.



## Plugin Interface (26-XX)

The plugin mechanism is intended to allow applications to implement extensions to the generic SDI Server functionalities in order to support regional requirements and needs such as domestic card schemes or regional configurations, host protocols, and security requirements. SDI plugins run in context of SDI server under user `usr1` and are not restricted to use APIs of OS, therefore, the mechanism also allows ISO L1 access and direct MSR reader access.

SDI plugins must be either developed by SDI team or if provided by external developers (ADC or third-party), the source code must be reviewed by SDI team, in order to disallow misuse (security requirement). 

On Fusion/Engage platform SDI plugins should be installed as [SDI plugin package] and not directly added to SDI server download package `dl.sdi-X.X.X.tar`. The reason is SDI server will move to system user `sys8` with ADK 4.8 (security requirement) and this location requires special signing cards, therefore, SDI plugins won't be part of normal SDI server releases. 

On Android platform (e.g. Trinity) SDI plugins are either provided with the APK ([SDI base package]) or users can use a [SDI plugin package] to install additional plugins on top of the APK.


So that the SDI Server can find and load a plugin, it should fulfill the following conditions:

* The plugin must be built as a Linux shared object.
* It must be named as `libsdiplugin<name>.so`, whereas `<name>` stands for an arbitrary name identifying the plugin
* It must be signed for authentic loading and loaded to
    * **Engage** device into directory `/home/usr1/lib` directory (Engage)
    * **Android** device into SDI service domain directory `<appdir>` either to subfolder `lib` (if installed with [SDI base package]) or subfolder `files/plugins` (if installed with a [SDI plugin package])


An SDI Plugin should implement the C++ interface "class SDIPlugin" defined in the [sdiplugin.h](sdiplugin_8h.md#file-sdiplugin.h) header file provided separately. An SDI plugin should have a unique plugin identifier which should be defined and returned by the moduleID() member function. An SDI plugin should implement its commands processing logic in the processMessage() member function.

An SDI plugin can use the libsdicardaccess library published with the SDI Server to implement transaparent access to cards on both standalone and EPP solutions. The library interface is defined in sdicardaccess.h and it allows sending of card commands in a similar way as done by the EMV SmartIso API and the NFC APDU_Exchange PT_TxRx APIs.

During startup the SDI-Server initializes all available plugins. Here each plugin can register for one or more SDI triggers (see [Internal plugin trigger functions]).


 A plugin command is defined as follows:


| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 26  | PUGIN_ID  | 00  | CMD_ID  | Constructed  |  |


A unique class 26hex is reserved for all plugins and plugin commands.

The instruction byte should define the plugin. Its value must be equal to the plugin identifier defined in the moduleID() function.

The P2 byte defines the command inside the plugin.

Command data content and format is relative to the plugin design and is to be defined by the plugin developer.

Response data and format is also relative to the plugin design and is to be defined by the plugin developer.

Generic error codes related to plugin commands are to be found under the [Status Word Coding] section.

### Internal plugin trigger functions

The SDI server provides trigger points in the context of SDI command execution to activate a plugin directly without any external plugin command call. The trigger points also identify the kind of a plugin.

There are two trigger types: single and multiple triggers:


* A single trigger is called only once on the first installed plugin supporting it.
* A multiple trigger is called on all installed plugins supporting it.


The following trigger points are currently supported:


| Trigger  | Type  | Functionality   |
|  -------- | -------- | -------- |
| SDITrigger_CardDetected  | Multiple  | For handling of Non-ISO MSR cards, called always when a magnetic stripe card is swiped or when manual card data has been entered   |
| SDITrigger_EMVConfig  | Single  | For EMV Configuration Plugins - to supervise the EMV configuration process   |
| SDITrigger_SDIConfig  | Single  | For SDI Configuration Plugins - to authenticate the SDI configuration files upload   |
| SDITrigger_CardDataAvail  | Multiple  | For specific handling based on the track 2 data (e.g. card specific key derivation)   |
| SDITrigger_MsgDataAvail  | Single  | For specific handling of host message data in clear (see also [getEncMsgData (29-01)])   |
| SDITrigger_EmvCndListCbk  | Multiple  | For handling of EMV Reduce Candidate List callback   |
| SDITrigger_CardId  | Single  | For generating unique card specific token based on the Pan   |
| SDITrigger_FactoryReset  | Multiple  | For reset the plugin to factory defaults, if command [Factory Reset (20-22)] is received   |
| SDITrigger_ExternalCSD  | Single  | For getting extern entered PAN to the SDI server for PIN block generation   |
| SDITrigger_ExtDataStore  | Single  | For getting external entered card data from Plugin when cardholder sensitive data is not available in the SDI Data Store   |
| SDITrigger_ManualPan  | Multiple  | For setting a PAN during manual card data entry if 9B01 callback is sent after PAN is entered and VCL is disabled   |




The following table gives a short overview about the supported tags as input parameter for payment specific plugin triggers: 
| Trigger   | Supported Tags<sup>*</sup> |
|  -------- | -------- |
| MSR   | CT   | CTLS   | Manual

entry    |
| SDITrigger_CardDetected   | DFA108

56

57

58

5A

5F20

5F24

5F30   |  |  | DFA108

5A

5F24

DFA131   |
| SDITrigger_CardDataAvail   | 57   | 57   | 57   | 57    |
| SDITrigger_CardId   | 5A   | 5A   | 5A   | 5A    |
| SDITrigger_ExtDataStore   | DF3B

DF3C   | DF3B

DF3C   | DF3B

DF3C   | DF3B    |
| SDITrigger_ManualPan   |  |  |  | 5A    |


<sup>*</sup> depending on the used card respectively the available card data!


**Detailed explanation:**

**SDITrigger_CardDetected:** This plugin trigger is executed after processing of the [MSR Read (21-01)], the [MSR Card Data Entry (21-02)] or the [Card Detection (23-01)] when a magnetic stripe card is swiped or when manual card data has been entered. Also the asychronous Card Detection supports this trigger when a card is swiped.

The card data (Track data, PAN and all relevant MSR data) are provided to the Plugin in BER-TLV format. The output data delivered by the plugin is sent back to the application in the response to the corresponding command within tag FFA107 or DFA101 depending on the fact if only one plugin or many plugins have been called.

**SDITrigger_EMVConfig:** If a plugin for this trigger is installed, this plugin trigger is executed whenever any EMV configuration command without MAC is received. Local applications connecting from the same device are considered as trusted (see chapter [SDI access control]). For these applications there is no need to install a SDI plugin to authenticate the EMV configuration. But please note that it is the responsibility of these applications that the provided EMV configuration is authentic! If this default behaviour of SDI server is not desired, projects might implement a corresponsing SDI plugin with their own security.


For remote/untrusted connections any EMV configuration command is mandated to be MAC secured. With the plugin mechanism, it's possible to ensure the authentication of the EMV configuration using the EMV configuration plugin.

If an EMV configuration command is not MAC secured, the SDI server will search for a plugin supporting the SDITrigger_EMVConfig trigger and call the corresponding trigger function including the requested config command. This allows the plugin to verify that the passed data is authentic. In general there are two options:


* The plugin just authenticates the host messages and stores the authenticated data. It then supervises the configuration process by using the plugin commands.
* The plugin authenticates the host messages and converts them into EMV-ADK APIs and is doing the configuration on its own. In that case the trigger is not needed since the plugin config replaces the config via the external SDI API.


Any output data of this trigger function is currently ignored and not sent back to the application.

**SDITrigger_CardDataAvail:** This plugin trigger is executed after track 2 or track 2 equivalent data are available (after reading a magnetic card, entering manual card data or 39-11 respectively 40-11 (ContinueOffline) command is performed. No response data will be delivered by this PlugIn.

**SDITrigger_CardId:** This plugin generates a unique card specific token. The token is part of the response of [MSR Read (21-01)], [MSR Card Data Entry (21-02)], [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline) and [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) and will be identified by tag DFA014.

**SDITrigger_FactoryReset**: SDI server will send this trigger to all loaded SDI plugins, if command [Factory Reset (20-22)] is received. Those plugins, which create persistent data (e.g. files) during runtime, should implement this trigger to support the reset of the plugin to factory defaults. So far, if this trigger is supported by the plugin, SDI server will call `processTrigger()` with trigger ID `SDITrigger_FactoryReset` (without any additional data). The plugin in this case should reset all settings to factory defaults and perform a reinitialization with the new default settings.

**SDITrigger_ExtDataStore**: SDI server will send this trigger when cardholder sensitive data is not available in the SDI Data Store in order to get external entered card data from the Plugin. Following tags are provided to the plugin:

* F0/DF3B: Options, 4 bytes:

    * Byte 4 bit 1: Clear text flag. Relevant only in case VTP is enabled. If set to true and VTP is enabled, the plugin has to deliver clear text data (VTP decrypted). Per default, when VTP is enabled, the plugin has to deliver VTP encrypted data
    * Byte 4 bit 2: Request to clear the cardholder sensitive data from the plugin. Called by SDI Server on a Clear Data Store 29-03 command
* F0/DF3C: Requested tags, array with 4 bytes for each tag.

When VCL is enabled and the plugin is registered for SDITrigger_ExtDataStore the SDI Server informs the plugin about a [Vcl_Encryption_Callback()](sdiplugin_8h.md#typedef-vcl-encryption-callback) function with which the plugin can request a VCL encryption for the external entered clear card data (Pan, Expiry Date, CVV) handled by this trigger. This is necessary to get the correct responses (e.g. fetchTrxTags command) for external entered data too.

The following diagram explains this mechanism in detail: ![SDI_External_Card_DataEntry.svg](.//SDI_External_Card_DataEntry.svg)
 For details regarding the used data structures for data exchange see [sdiplugin.h](sdiplugin_8h.md#file-sdiplugin.h)



## VCL Interface (28-XX)


### VCL Registart SRED Request (28-00)

Request VCL to turn on the encryption in SRED mode.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 28  | 00  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA133  | var.  | O  | b  | VCL track 1   |
| DFA134  | var.  | O  | b  | VCL track 2   |
| DFA135  | var.  | O  | b  | VCL track 3   |




* In case of response code '64 00' additional tag DFA000 may be available including the error status of the VCL library.
* This command is not supported on EPP.


### VCL Status Request (28-01)

Get the current status of VCL.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 28  | 01  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA136  | var.  | M  | b  | VCL status   |


This command is not supported on EPP.


### VCL Advance DDK (28-02)

Instruct VCL to use the next derived key for future encryption operations.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 28  | 02  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA133  | var.  | O  | b  | VCL track 1   |
| DFA134  | var.  | O  | b  | VCL track 2   |
| DFA135  | var.  | O  | b  | VCL track 3   |




* In case of response code '64 00' additional tag DFA000 may be available including the error status of the VCL library.
* This command is not supported on EPP.


### VCL Request eParms (28-03)

Get the eParms of the last encryption from VCL. This command should be used by the payment application if eParms is activated only. The eParms will be forwarded from the SDI-Server as obtained from VCL. Further processing is up to the payment application.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 28  | 03  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA137  | var.  | M  | ans  | VCL eParms   |




* In case of response code '64 00' additional tag DFA000 may be available including the error status of the VCL library.
* This command is not supported on EPP.


### VCL Request Diag Query (28-06)

Get the diagnostic data from VCL. The diag query will be forwarded from the SDI-Server as obtained from VCL. Further processing is up to the payment application. Additional parameters can be the output format as well as the requested page number.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 28  | 06  | 00  | 00  | Constructed  |  |


Possible input tags in constructed data: 
| Tag  | Size  | M/O  | Format  | Description  | possible values   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| DFA146  | 1  | M  | b  | output format  | 1 = verbose, 2 = concise, 4 = xml   |
| DFA147  | 1  | M  | b  | page number  | 0 - 127   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA145  | var.  | M  | ans  | VCL diag query   |




* In case of response code '64 00' additional tag DFA000 may be available including the error status of the VCL library.
* This command is not supported on EPP.


### VCL Request Derive Query (28-07)

Get the key status from VCL. The sdi server performs a diag query to the vcl daemon/kernel modul and extracts the information for unique and shared keys. The response will be the tag DFA152 with 0 for shared key or 1 for unique key.

Command: 
| CLA  | INS  | P1  | P2  | Comment   |
|  -------- | -------- | -------- | -------- | -------- |
| 28  | 07  | 00  | 00  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA152  | 1  | M  | b  | 0 = shared key, 1 = unique key   |




* In case of response code '64 00' additional tag DFA000 may be available including the error status of the VCL library.
* This command is not supported on EPP.


### VCL Override Message Query (28-08)

The sdi server performs a override message query to the vcl daemon/kernel modul and delivers the response as track data.

Command: 
| CLA  | INS  | P1  | P2  | Comment   |
|  -------- | -------- | -------- | -------- | -------- |
| 28  | 08  | 00  | 00  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA133  | var.  | O  | b  | VCL track 1   |
| DFA134  | var.  | O  | b  | VCL track 2   |
| DFA135  | var.  | O  | b  | VCL track 3   |




* In case of response code '64 00' additional tag DFA000 may be available including the error status of the VCL library.
* This command is not supported on EPP.


### VCL KSN Request (28-09)

The sdi server performs a KSN request to the vcl daemon/kernel modul and delivers the response in tag DFA157.

Command: 
| CLA  | INS  | P1  | P2  | Comment   |
|  -------- | -------- | -------- | -------- | -------- |
| 28  | 09  | 00  | 00  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA157  | var.  | O  | ans  | KSN   |




* In case of response code '64 00' additional tag DFA000 may be available including the error status of the VCL library.
* This command is not supported on EPP.


### VCL kmailin Request (28-0A)

The sdi server performs a kmailin request to the vcl daemon/kernel modul and delivers the result (success or failed).

Command: 
| CLA  | INS  | P1  | P2  | Comment   |
|  -------- | -------- | -------- | -------- | -------- |
| 28  | 0A  | 00  | 00  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |




* In case of response code '64 00' additional tag DFA000 may be available including the error status of the VCL library.
* This command is supported on VOS3 only. 


## EMV System Interface

This chapter describes the EMV System Interface. Details about the constructed data elements are described in the linked EMV documentation (see table below).


| Contact (CT)  | Contactless (CTLS)   |
|  -------- | -------- |
| 39 00: [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) | 40 00: [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework) |
| 39 00: [EMV_CT_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework) | 40 00: [EMV_CTLS_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework) |
| 39 01: [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata) | 40 01: [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata) |
| 39 01: [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) | 40 01: [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) |
| 39 02: [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata) | 40 02: [EMV_CTLS_SetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific) |
| 39 02: [EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata) | 40 02: [EMV_CTLS_GetAppliDataSchemeSpecific()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getapplidataschemespecific) |
| 39 03: [EMV_CT_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey) | 40 03: [EMV_CTLS_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-storecapkey) |
| 39 03: [EMV_CT_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-readcapkeys) | 40 03: [EMV_CTLS_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-readcapkeys) |
| 39 04: [EMV_CT_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration) | 40 04: [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration) |
| 39 06: [EMV_CT_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal) | 40 06: [EMV_CTLS_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal) |
| 41 09: [EMV_CT_LED()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led) | 43 03: [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led) |
|  | 43 04: [EMV_CTLS_LED_SetMode()](group___a_d_k___l_e_d.md#function-emv-ctls-led-setmode) |
|  | 43 05: [EMV_CTLS_LED_ConfigDesign()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign) / [EMV_CTLS_LED_ConfigDesign_Extended()](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended) |




## EMV Transaction Interface

This chapter describes the EMV Transaction Interface. Details about the constructed data elements are described in the linked EMV documentation (see table below).

In deviation from the EMV description the SDI Server removes the tags 5A (PAN) and 57 respectively DF5E (track2) in all EMV responses or EMV callbacks since these are sensitive data. It replaces them with DF1A and DF1B, obfuscated PAN and obfuscated track2. Also you can find the tags DF44 and DF49 (ASCII instead of binary) in this response.

Exactly these tags you need to read from the EMV command response if you need the **obfuscated** data. By this way you will get the obfuscated info, 6+4 or 8+2, depending on what you have configured in the `[cardranges.json]` for the obfuscation format. [fetchTrxTags (29-02)] doesn't support these tags!

If you have whitelisted a specfic BIN range you can receive the tag 5A/57 by using the [fetchTrxTags (29-02)] command. Tag 5A/57 will be skipped in the fetchTrxTags response if not whitelisted or not available.


| Contact (CT)  | Contactless (CTLS)   |
|  -------- | -------- |
| 39 10: [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction) | 40 10: [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) |
| 39 11: [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline) | 40 11: [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) |
| 39 12: [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) | 40 12: [EMV_CTLS_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueonline) |
| 39 13: [EMV_CT_updateTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags) |  |
| 39 15: [EMV_CT_EndTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-endtransaction) | 40 15: [EMV_CTLS_EndTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-endtransaction) |
| 39 16: [EMV_CT_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getcandidatedata) | 40 16: [EMV_CTLS_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata) |
| 39 17: [EMV_CT_CheckSupportedAID()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-checksupportedaid) |  |
|  | 40 20: [EMV_CTLS_Break()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-break) |
| 41 05: [EMV_CT_Send_PIN_Offline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline) |  |


To get information about the cardholder dialogs during a chip transaction it is recommended to activate the merchant info callbacks (Tag DF36).


Depending on the use case the EMV-CT and EMV-CTLS transaction callbacks are handled different. Some of them are processed in the SDI Server internally and the others are sent to the outside application with an [EMV Request (91-01)]. The following tables shows the differences between standard and headless mode.

EMV-CT callbacks: 
| Tag  | Standard mode  | Headless mode   |
|  -------- | -------- | -------- |
| BF01  | outside application  | outside application   |
| BF02  | SDI Server internally  | outside application   |
| BF03  | outside application  | outside application   |
| BF04  | depending on SDI Server configuration  | outside application   |
| BF05  | outside application  | outside application   |
| BF06  | outside application  | outside application   |
| BF07  | outside application  | outside application   |
| BF08  | SDI Server internally  | outside application   |
| BF09  | SDI Server internally  | SDI Server internally   |
| BF13  | outside application  | outside application   |
| BF7F  | SDI Server internally  | SDI Server internally   |


The default for the application selection callback (BF04) in standard mode is to process it in the SDI Server internally. To handle it by the outside application the [config.json] can be enhanced by an additional configuration parameter:


```cpp
{
  "emvCallbacks":
  {
    "applicationSelectionMode": 1
  }
}
```


For further details about the EMV-CT callbacks see [EMV_CT_CALLBACK_FnT()](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ct-callback-fnt)

EMV-CTLS callbacks: 
| Tag  | Standard mode  | Headless mode   |
|  -------- | -------- | -------- |
| BF0B  | SDI Server internally  | SDI Server internally   |
| BF0C  | outside application  | outside application   |
| BF0E  | outside application  | outside application   |
| BF0F  | SDI Server internally  | SDI Server internally   |
| BF10  | SDI Server internally  | outside application   |
| BF12  | outside application  | outside application   |
| BF13  | outside application  | outside application   |
| BF14  | SDI Server internally  | outside application   |
| BF15  | SDI Server internally  | outside application   |
| BF16  | outside application  | outside application   |
| BF17  | outside application  | outside application   |
| BF18  | outside application  | outside application   |
| BF19  | SDI Server internally  | outside application   |
| BF7F  | SDI Server internally  | SDI Server internally   |


For further details about the EMV-CTLS callbacks see [EMV_CTLS_CALLBACK_FnT()](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt)

For EMV-CTLS transactions in Headless mode additional Notification Callbacks are provided too (see [Notify Callback (9E-01)]).



## PED Interface (22-XX)

The PINPad provides mechanisms to perform the following PIN entry processes:

* Online PIN for MSR
* Offline PIN Ciphered for EMV
* Offline PIN Plaintext for EMV
* Online PIN for EMV

For Online PIN for MSR the process is driven by the Host Device. The Host Device shall Enable the PED, Start Get PIN, Process PED Digit Callbacks, End Get Pin and Disable the PED.

For Online and Offline PIN for EMV the process is driven by the PINPad depending on the card and configuration. The Host device shall be ready to handle the callbacks indicating a PIN entry is required and process the PED Digit Callbacks.

All PED commands are not supported on UX (VOS) devices and will return with '6E00'.


### PED Get PIN (22-01)

Interface to request PIN from User.

The command is supported for both headless and standard mode.

For standard mode SDI server will use the default PIN entry dialog [pin.html] to request the PIN with UI. The PIN prompt message in region 3 as well as the additional PIN text in region 5 can be configured with the installation of [Custom UI text catalogs], one for each supported system language. Depending on enabled PIN bypass and available display data (amount with currency or card application label) different text variables are looked up from these catalogs. In this way users are be able to control positions of the displayed data items and to apply HTML styles (e.g. colors or font weights) to specify their appearance. Finally, in standard mode supports additional parameters to modify other contents of the display, e.g. with TLV tag DFA13D (dialog options).

For headless mode on touch devices without physical keybord the TLV Tag DFA024 (touch coordinates) is mandatory. TLV Tag DFA025 (navigator mode) is supported for headless mode on devices with touch display only, therefore it is ignored for standard mode. Other optional TLV tags, which are used for the display only, such as 9F02 (amount) and 5F2A (currency) are useless for headless mode and will be ignored. During the command execution in headless mode some Status callbacks (see [Status Callback (9F-XX)]) will be sent to inform the outside application about the number of entered digits to update the display content.

The PIN is always stored in secure area of the device and will never be returned in command response. In case of EMV offline PIN handling the stored PIN is used for offline PIN verification. TLV tag DFA038 (PIN bypass key) is returned in command response `9070` optionally to inform the caller about the key, which was used to bypass the PIN.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 22  | 01  | SC  | 00  | None  |  |
| 22  | 01  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA008 | 1 | O | b | Text Language, default is current terminal/transaction language (see [Supported System Languages]).

 The language is used to select the internal or custom UI text catalog from which the PIN dialog texts are read. This TLV tag is supported for standard mode only (ignored for headless mode). 

 |
| DFA005 | 2 | O | b | Total timeout for PIN entry, default: terminal stored value of command [PED Set PIN Timeout (22-02)] is used.

 The timeout in specified in seconds (MSB, LSB), max. value is `300`.  |
| DFA104 | 1 | O | b | PIN bypass, bit mask with following values: 

* **`0x00` (`PINBypass_Disabled`)**: PIN Bypass disabled (default) 
* **`0x01` (`PINBypass_Enter`)**: Bypass with Enter key 
* **`0x02` (`PINBypass_Clear`)**: Bypass with Clear key 
* **`0x04` (`PINBypass_DisableByDigit`)**: Disable PIN Bypass as soon as a digit has been entered 



* Value 03 (combined bits 01 and 02) will enable both keys (Enter and Clear) to bypass the PIN
* Bit 04 is ignored, if bits 01 and 02 are not set, thus, value 04 will disable PIN bypass
* In case the PIN entry is bypassed, SDI server optionally adds TLV tag `DFA038` (PIN bypass key)

 |
| DFA024 | var. | O | an | Touch coordinates for the provided keypad layout. Needs to be added for each key.

 Format: `xxxxyyyywwwwhhhhaa`
`xxxx`: x-Position of a touch button,
`yyyy`: y-Position of a touch button,
`wwww`: width of a touch button,
`hhhh`: heigth of a touch button,
`aa`: associated key (ASCII), 1B = Cancel key, 08 = Backspace key, 0D = Enter key This TLV tag is supported for headless mode only (ignored for standard mode).


Example touch coordinates for Carbon 10: 

```
0001000000D2007531 00D7000000D2007532 01AD000000D2007533 0283000000D200751B
0001007900D2007534 00D7007900D2007535 01AD007900D2007536 0283007900D2007508
000100F200D2007537 00D700F200D2007538 01AD00F200D2007539 028300F200D200EE0D
00D7016B00D2007530
```

 |
| DFA025 | 1 | O | b | Navigator mode: `00` = disable (default), `01` = navigator mode 1 (double tap), `02` = navigator mode 2 (tactile button) 

* In navigator accessibility mode further callbacks will be occur to trigger the payment app with some vocalization events (see [Navigator Callback (9D-XX)])
* This TLV tag is supported for headless mode only (ignored for standard mode).

 |
| DFA02B | 1 | O | b | Minimum number of PIN digits to enter, values between 04 (default) and 0C are allowed. Please note that minimal number (TLV tag DFA02B) must not exceed maximal number (TLV tag DFA02C).  |
| DFA02C | 1 | O | b | Maximum number of PIN digits to enter, values between 04 and 0C (default) are allowed. Please note that minimal number (TLV tag DFA02B) must not exceed maximal number (TLV tag DFA02C).  |
| DFA02F | 1 | O | b | Configure the Clear key behaviour on PIN input: `00` = clear key removes last digit, `01` = Clear key removes all digits

 Due to compatibility reasons, the default value is taken from PIN parameter storage, which is usually applied for internal PIN entry of ADKEMV only (see [PED Set PIN Input Parameter (22-06)]). Therefore, applications should always provide this TLV tag in command PED Get PIN (22-01) to be independent from the interally stored value.  |
| DFA035 | 1-4 | O | b | Interchar timeout in milliseconds, default: 0 (disabled). 

* The interchar timeout is active after pressing the first key during PIN entry.
* In case of interchar timeout, the response `64F8` (Interchar timeout during Pin Entry) is returned.

 |
| DFA02E | 1 | O | b | Automatically terminate the PIN entry when the maximum number of digits (TLV tag DFA02C) has been reached: `00` = disabled (default), `01` = enabled  |
| 9F02 | 6 | O | n | Amount to be displayed. This TLV tag is supported for standard mode only (ignored for headless mode). 

 |
| 5F2A | 2 | O | n | Currency to be displayed, mandatory if when amount is given (hexadecimal value according ISO 4217). 

* Provided ISO code will specify the corresponding currency text for the display (see [Supported Currencies]).
* The number of decimal places when displaying amounts is done automatically in accordance with the ISO 4217 standard.
* This TLV tag is supported for standard mode only (ignored for headless mode).

 |
| DFA037 | var. | O | utf-8 | Card application label to be displayed, e.g. taken from EMV tag 9F12 (application preferred name) or EMV tag 50 (application label). This TLV tag is supported for standard mode only (ignored for headless mode). 

 |
| DFA13D | 1-4 | O | b | Dialog options (big endian). Bit mask with following values: 

* **`0x00` (`PIN_NoOpts`)**: No options set 
* **`0x01` (`PIN_NoLEDs`)**: This option disables LEDs area for the PIN entry dialog (see region 1 of [pin.html]) 
* **`0x02` (`PIN_NoHeader`)**: This option disables header area for the dialog (see region 2 of [pin.html]). By default, the header area is enabled and contains the image `client_logo.png`. The image file comes along with UI default resources in SDI config package for standard mode (see [Default UI resource files]). Optionally, TLV tag `DFA143` (dialog header label) can be used to replace the logo by the provided text. 
* **`0x04` (`PIN_NoAmount`)**: This option will suppress the displaying the amount and currency, even if available. Omitting TLV tags `9F02` and `5F2A` in command has the same effect, therefore, this option is more useful with [PED Set PIN Input Parameter (22-06)], where the amount and currency are provided by ADKEMV for internal PIN entry. 
* **`0x08` (`PIN_NoCardAppLabel`)**: This option will suppress the displaying the card application label, even if available. Omitting TLV tag `DFA037` in command has the same effect, therefore, this option is more useful with [PED Set PIN Input Parameter (22-06)], where the card application label is provided by ADKEMV for internal PIN entry. 

This TLV tag is supported for standard mode only (ignored for headless mode). 

 |
| DFA143 | var. | O | utf-8 | Label for header area of the dialog (see region 2 of [pin.html]). The label will replace the default image, which is used for the header area. 

* This TLV tag is supported for standard mode only (ignored for headless mode).
* If `PIN_NoHeader` is set in TLV tag DFA13D (dialog options), the tag is also ignored.

 |
| DFA036 | 1-4 | O | b | PIN echo character used to mask the PIN digits, default: 0x2A ('*'). The value is specified as unicode character, e.g. use `0x2020` to display a bullet character. 

* This TLV tag is supported for standard mode only (ignored for headless mode).
* Please note the unicode character must be supported by installed font.

 |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 90  | 70  | None  | PIN bypassed (see TLV tag DFA038)   |
| 64  | 05  | None  | Canceled by User   |
| 64  | 0C  | None  | Timeout (see TLV tag DFA005)   |
| 64  | F8  | None  | Interchar Timeout (see TLV tag DFA035)   |
| 65  | 00  | None  | Execution aborted with [Sys Abort (20-02)] |
| 6F  | C0  | None  | Excessive PIN requests   |
| 62  | 00  | None  | Tag error   |
| 64  | FE  | None  | Parameter error   |
| 64  | 00  | None  | Execution error   |


Response Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA038 | 1 | O | b | PIN bypass key:
`01` = Enter key (default)
`02` = Clear key This TLV tag is sent with value `02` (Clear key) only. Response code 9070 without the tag means the Enter key was used (default). 

 |


The encrypted PIN and maybe corresponding KSN will be delivered by [Generic Crypto Interface (70-XX)].



* For successful execution of the command valid card data must be read within the last 8 minutes. Otherwise the command returns with 6400.
* During a CT transaction, PED Get PIN (22-01) will abort with 6400, if the card is removed during PIN entry.
* For two piece solution this command will be executed on the EPP device only.


### PED Set PIN Timeout (22-02)

Interface to configure timeout for PIN entry. System default is 30 seconds.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 22  | 02  | SC  | 00  | Timeout[2] in seconds (MSB, LSB)  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |




* SDI server stores the PIN timeout to flash persistently to use it as default for [PED Get PIN (22-01)], if TLV tag DFA005 (PIN timeout) is omitted there.
* In the two piece solution this command will be executed on the EPP only.


### PED start PIN entry (22-03)

Start PIN entry using a polling interface instead of a callback interface. The state of the PIN entry can be polled using PED poll PIN. When PIN entry has finished [PED stop PIN entry (22-05)] needs to be called to stop PIN entry.

This interface does not show anything on screen. It is up to the application to handle display output.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).

Please note the following restrictions for execution of PED start PIN entry (22-03) as an asynchronous side command: 

1. PED start PIN entry (22-03) as asynchronous side command is allowed with SDI headless mode (w/o UI support) only. 
2. PED start PIN entry (22-03) is not allowed as asynchronous side command, if SDI operates as Countertop with an attached/enabled EPP. As mentioned in chapter [Concurrency restrictions], PIN entry is always handled by the EPP and link between Countertop and EPP does not support side commands. Therefore, with a two piece solution PED start PIN entry (22-03) is always considered as payment command, which requires the payment lock (see [Sys Lock Payment (20-06)]) and sequential synchronous processing. This means that no other payment command must be active. 

If the PIN entry was already started on another connection (either with [PED start PIN entry (22-03)] PED or [PED Get PIN (22-01)]), the command is declined with response code '64FD' (logic error). Due to compatibility reasons for protocol type B/C a second PED start PIN entry (22-03) on the same connection will just restart the PIN entry, instead with protocol type D SDI will declined it with response code '64FD' (logic error).


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 22  | 03  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA02B  | 1  | O  | b  | Minimum number of PIN digits to enter, values between 04 (default) and 0C are allowed   |
| DFA02C  | 1  | O  | b  | Maximum number of PIN digits to enter, values between 04 and 0C (default) are allowed   |
| DFA02D  | ..2  | O  | b  | PIN bypass key: 00 = deactivate PIN bypass (default), ASCII code of bypass key, 256dec for direct PIN bypass   |
| DFA02E  | 1  | O  | b  | Auto-enter flag: 00 = no auto enter (default), 01 = automatically confirm PIN entry when the maximum number of PIN digits has been reached   |
| DFA02F  | 1  | O  | b  | Clear all flag: 00 = clear key removes last digit (default), 01 = clear key removes all digits   |
| DFA025  | 1  | O  | b  | Navigator mode: 00 = disable (default), 01 = navigator mode 1 (double tap), 02 = navigator mode 2 (tactile button)   |
| DFA024  | var.  | O  | an  | Touch coordinates for the provided keypad layout. Needs to be added for each key.

Format: xxxxyyyywwwwhhhhaa,

xxxx: x-Position of a touch button,

yyyy: y-Position of a touch button,

wwww: width of a touch button,

hhhh: heigth of a touch button,

aa: associated key (ASCII), 1B = Cancel, 08 = Correction, 0D = Enter   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 64  | 00  | None  | Execution Error   |
| 6F  | C0  | None  | Excessive PIN Requests   |



### PED poll PIN entry (22-04)

Poll PIN entry for the current status, e.g. the number of digits entered so far.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). If the PIN entry was already started on another connection (either with [PED start PIN entry (22-03)] PED or [PED Get PIN (22-01)]), the command is declined with response code '64FD' (logic error).


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 22  | 04  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |
| 64  | 00  | None  | Execution Error   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA000  | 3  | M  | b  | 3 Bytes PIN status   |


The PIN status contains the following information 
| Byte | Description  |
|  -------- | -------- |
| first byte | 00: PIN entry completed

 01: PIN entry ongoing |
| second byte | 00: no key entered or selected

 01: digit entered

 08: backspace entered

 0D: OK entered

 1B: cancel enterd

 D1: numeric key selected

 D2: cancel selected

 D3: backspace selected

 DE: OK selected

 DF: multiple touches

 F8: underflow

 F9: overflow
 |
| third byte | 00...0C: number of digits

 FC: bypass

 FD: cancel

 FE: timeout

 FF: error
 |



### PED stop PIN entry (22-05)

Stop PIN entry and release allocated resources.

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]). If the PIN entry was already started on another connection (either with [PED start PIN entry (22-03)] PED or [PED Get PIN (22-01)]), the command is declined with response code '64FD' (logic error).


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 22  | 05  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 64  | FD  | None  | Logic Error (e.g. wrong command order)   |



### PED Set PIN Input Parameter (22-06)

Interface to configure input parameter for internal PIN entry with UI, which is triggered by ADKEMV callback.

For SDI standard mode (with UI support) the ADKEMV callback for PIN entry BF-08 is handled by SDI server internally. Thus, SDI server doesn't forward ADKEMV callback to SDI client, instead it calls [PED Get PIN (22-01)] internally to enter the PIN with UI of SDI.


SDI command PED Set PIN Input Parameter (22-06) provides an interface similar to [PED Get PIN (22-01)] to store input parameter for the internal PIN entry. All input parameters are stored in flash persistently.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 22  | 06  | SC  | 00  | Constructed   |


Command Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA02F | 1 | O | b | Configure the Clear key behaviour on PIN input: `00` = clear key removes last digit, `01` = Clear key removes all digits


* Due to compatibility reasons this parameter is supported for both standard and headless mode, since it provides the default for [PED Get PIN (22-01)] in the case that this tag is omitted there.
* For headless mode this parameter is mandatory.

 |
| DFA104 | 1 | O | b | PIN bypass, bit mask with following values: 

* **`0x00` (`PINBypass_Disabled`)**: PIN Bypass disabled 
* **`0x01` (`PINBypass_Enter`)**: Bypass with Enter key (system default) 
* **`0x02` (`PINBypass_Clear`)**: Bypass with Clear key 
* **`0x04` (`PINBypass_DisableByDigit`)**: Disable PIN Bypass as soon as a digit has been entered 



* In difference to [PED Get PIN (22-01)] value `PINBypass_Enter` is used as system default, since ADKEMV grants permission by configuration to allow PIN bypass. If PIN bypass is allowed by ADKEMV in the first step, SDI server uses the stored input parameter in the second step.
* This TLV tag is supported for standard mode only (ignored for headless mode).
* For further details about valid bit combinations, see chapter [PED Get PIN (22-01)]

 |
| DFA02B | 1 | O | b | Minimum number of PIN digits to enter, values between 04 (default) and 0C are allowed. Please note that minimal number (TLV tag DFA02B) must not exceed maximal number (TLV tag DFA02C). This TLV tag is supported for standard mode only (ignored for headless mode). 

 |
| DFA02C | 1 | O | b | Maximum number of PIN digits to enter, values between 04 and 0C (default) are allowed. Please note that minimal number (TLV tag DFA02B) must not exceed maximal number (TLV tag DFA02C). This TLV tag is supported for standard mode only (ignored for headless mode). 

 |
| DFA13D | 1-4 | O | b | Dialog options (big endian). Bit mask with following values: 

* **`0x00` (`PIN_NoOpts`)**: No options set 
* **`0x01` (`PIN_NoLEDs`)**: This option disables LEDs area for the PIN entry dialog (see region 1 of [pin.html]) 
* **`0x02` (`PIN_NoHeader`)**: This option disables header area for the dialog (see region 2 of [pin.html]). By default, the header area is enabled and contains the image `client_logo.png`. The image file comes along with UI default resources in SDI config package for standard mode (see [Default UI resource files]). Optionally, TLV tag `DFA143` (dialog header label) can be used to replace the logo by the provided text. 
* **`0x04` (`PIN_NoAmount`)**: This option will suppress the displaying the amount and currency, even if provided by ADKEMV. 
* **`0x08` (`PIN_NoCardAppLabel`)**: This option will suppress the displaying the card application label, even if provided by ADKEMV. 



* Due to compatibility reasons **`PIN_NoCardAppLabel`** is used as system default value.
* This TLV tag is supported for standard mode only (ignored for headless mode).

 |
| DFA143 | var. | O | utf-8 | Label for header area of the dialog (see region 2 of [pin.html]). The label will replace the default image, which is used for the header area (sytem default) 

* Provide an empty TLV tag DFA143 to delete this input parameter and to reset to system default.
* This TLV tag is supported for standard mode only (ignored for headless mode).

 |
| DFA035 | 1-4 | O | b | Interchar timeout in milliseconds, system default: 0 (disabled). The interchar timeout is active after pressing the first key during PIN entry. This TLV tag is supported for standard mode only (ignored for headless mode). 

 |
| DFA02E | 1 | O | b | Automatically terminate the PIN entry when the maximum number of digits (TLV tag DFA02C) has been reached: `00` = disabled (system default), `01` = enabled This TLV tag is supported for standard mode only (ignored for headless mode). 

 |
| DFA036 | 1-4 | O | b | PIN echo character used to mask the PIN digits, default: 0x2A ('*'). The value is specified as unicode character, e.g. use `0x2020` to display a bullet character. 

* This TLV tag is supported for standard mode only (ignored for headless mode).
* Please note the unicode character must be supported by installed font.

 |
| DFA150 | 1 | O | b | Command destination: 01 = Countertop (default), 02 = EPP  |




* If none of the listed parameters are provided or all parameters are ignored regarding the used SDI operation mode, SDI server will return 6200 (Tag error).
* Transaction related parameters amount, currency and card application label are provided by ADKEMV and not configured with this command persistently.


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |
| 62  | 00  | None  | Tag Error   |
| 64  | 00  | None  | Execution Error   |
| 64  | FE  | None  | Parameter Error   |




## Near Field Communication, NFC (31-XX)

This section describes the serialized interface to all NFC functions supported by the SDI-Server.


### NFC Client Init (31-10)

Initializes NFC Client. P2 should be CL_TYPE_FUNCTION = 01. For details see [GENERAL INTERFACE].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 10  | 00  | [CONNECTION_TYPE] | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [CL_STATUS] |



### NFC Ping (31-00)

Return NFC Framework State of the NFC framework. For details see [GENERAL INTERFACE].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 00  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA200  | 1  | M  | b  | [rawData] |



### NFC Get Version (31-11)

Returns ADK-NFC build and kernels versions. For details see [GENERAL INTERFACE].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 11  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA201  | var.  | M  | json  | NFC components version list   |



### NFC Pass Through Open (31-01)

Initializes L1 driver. For details see [PASS THROUGH].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 01  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Pass Through Close (31-02)

Releases L1 driver. For details see [PASS THROUGH].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 02  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Pass Through Field On (31-03)

Turns RF field on. For details see [PASS THROUGH].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 03  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Pass Through Field Off (31-04)

Turns RF field off. For details see [PASS THROUGH].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 04  | 00  | 00  | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Pass Through Field Polling (31-05)

Open the field and executes polling loop to poll time (in mSec). Duty cycle polling is activated per default. Can be disabled by setting DFA21A to 0.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 05  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA202  | 4  | M  | b  | Technology Bitmap   |
| DFA203  | 4  | M  | b  | Polling Timeout   |
| DFA207  | var.  | O  | b  | Custom poll data   |
| DFA21A  | 1  | O  | b  | Duty Cycle Turn On   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFDB20  | 1  | M  | b  | Return Code   |
| DFDB28  | 1  | M  | b  | Total Number Of Cards Found By NFC   |
| DFDB29  | 1  | M  | b  | Total Number Of Cards Of Type A Found By NFC   |
| DFDB2A  | 1  | M  | b  | Total Number Of Cards Of Type B Found By NFC   |
| DFDB2B  | 1  | M  | b  | Total Number Of Cards Of Type F Found By NFC   |
| DFDB2C  | var.  | M  | b  | Custom-Poll-Result   |
| FFDB20  | var.  | M  | tlv  | Card Detected, May Occur Several Times   |


Card Detected Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFDB21  | 1  | M  | b  | Card Type, Included In [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB22  | var.  | M  | b  | Card Info, Included In [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |



### NFC Pass Through Card Activation (31-07)

Activates (selects) the card found during polling.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 07  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFDB21  | 1  | M  | b  | card type from polling response [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB22  | var.  | M  | b  | card info from polling response [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Pass Through Ftech Baud (31-09)

Changes NFC-F baud rate.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 09  | 00  | [NFC_F_BAUD] | None  |  |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Pass Through Field Polling Full (31-13)

Open the field and executes polling loop to poll time (in mSec). Duty cycle polling is activated per default. Can be disabled by setting DFA21A to 0.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 13  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA202  | 4  | M  | b  | Technology Bitmap   |
| DFA203  | 4  | M  | b  | Polling Timeout   |
| DFA207  | var.  | O  | b  | Custom poll data   |
| DFA21A  | 1  | O  | b  | Duty Cycle Turn On   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFDB20  | 1  | M  | b  | Return Code   |
| DFDB28  | 1  | M  | b  | Total Number Of Cards Found By NFC   |
| DFDB29  | 1  | M  | b  | Total Number Of Cards Of Type A Found By NFC   |
| DFDB2A  | 1  | M  | b  | Total Number Of Cards Of Type B Found By NFC   |
| DFDB2B  | 1  | M  | b  | Total Number Of Cards Of Type F Found By NFC   |
| DFDB2C  | var.  | M  | b  | Custom-Poll-Result   |
| FFDB20  | var.  | M  | tlv  | Card Detected, may Occur Several Times   |


Card Detected Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFDB21  | 1  | M  | b  | Card Type, Included In [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB27  | 4  | M  | b  | nfc-card-type-full, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB2D  | 1  | M  | b  | SAK of the card found by nfc, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB2E  | 2  | M  | b  | ATQ of the card found by nfc, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB22  | var.  | M  | b  | Card Info, Included In [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB2F  | var.  | M  | b  | RFU of the card found by nfc, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |



### NFC Pass Through Field Polling ABF (31-1D)

Open the field and executes polling loop for combined PT_polling and Felica polling to poll time (in mSec). Duty cycle polling is activated per default. Can be disabled by setting DFA21A to 0.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 1D  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA202  | 4  | M  | b  | Technology Bitmap   |
| DFA203  | 4  | M  | b  | Polling Timeout   |
| DFA207  | var.  | O  | b  | Custom poll data   |
| DFA21A  | 1  | O  | b  | Duty Cycle Turn On   |
| DFA212  | 4  | M  | b  | Felica Receive Timeout   |
| DFA213  | 2  | M  | b  | Felica System Code   |
| DFA214  | 1  | M  | b  | Felica Request Code   |
| DFA215  | 1  | M  | b  | Felica Time Slot   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFDB20  | 1  | M  | b  | Return Code   |
| DFDB28  | 1  | M  | b  | Total Number Of Cards Found By NFC   |
| DFDB29  | 1  | M  | b  | Total Number Of Cards Of Type A Found By NFC   |
| DFDB2A  | 1  | M  | b  | Total Number Of Cards Of Type B Found By NFC   |
| DFDB2B  | 1  | M  | b  | Total Number Of Cards Of Type F Found By NFC   |
| DFDB2C  | var.  | M  | b  | Custom-Poll-Result   |
| FFDB20  | var.  | M  | tlv  | Card Detected, may Occur Several Times   |
| DFA216  | 8  | M  | b  | Felica UID   |
| DFA217  | 8  | M  | b  | Felica PAD   |
| DFA213  | 2  | M  | b  | Felica System Code   |


Card Detected Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFDB21  | 1  | M  | b  | Card Type, Included In [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB27  | 4  | M  | b  | nfc-card-type-full, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB2D  | 1  | M  | b  | SAK of the card found by nfc, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB2E  | 2  | M  | b  | ATQ of the card found by nfc, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB22  | var.  | M  | b  | Card Info, Included In [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |
| DFDB2F  | var.  | M  | b  | RFU of the card found by nfc, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card) |



### NFC Mifare Authenticate (31-0A)

Authenticates blockNumber with key.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 0A  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA208  | 1  | M  | b  | blockNumber   |
| DFA209  | 1  | M  | b  | keyType   |
| DFA20A  | var.  | M  | b  | Key   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Mifare Read (31-0B)

Reads the blockAmount (up to 15 blocks at one time) of data from StartBlockNum.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 0B  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA20B  | 1  | M  | b  | [I_MIFARE_CARD_TYPE](titusstubs_8cpp.md#enum-i-mifare-card-type) |
| DFA20C  | 1  | M  | b  | StartBlockNum   |
| DFA20D  | 1  | M  | b  | blockAmount   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA20E  | var.  | M  | b  | Output Data   |



### NFC Mifare Write (31-0C)

Writes blockAmount (up to 15 blocks at one time) of data to StartBlockNum.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 0C  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA20B  | 1  | M  | b  | [I_MIFARE_CARD_TYPE](titusstubs_8cpp.md#enum-i-mifare-card-type) |
| DFA20C  | 1  | M  | b  | StartBlockNum   |
| DFA20D  | 1  | M  | b  | blockAmount   |
| DFA20F  | var.  | M  | b  | Input Data   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Mifare Increment (31-0D)

Increments value of 'blockNum' by 'amount' and stores it in the same block.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 0D  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA208  | ..4  | M  | b  | blockNum   |
| DFA210  | ..4  | M  | b  | amount   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Mifare Decrement (31-0E)

Decrements value of 'blockNum' by 'amount' and stores it in the same block.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 0E  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA208  | ..4  | M  | b  | blockNum   |
| DFA210  | ..4  | M  | b  | amount   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Mifare Increment Only (31-15)

Increments value of 'blockNum' by 'amount' and stores it in the Transfer Buffer.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 15  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA208  | ..4  | M  | b  | blockNum   |
| DFA210  | ..4  | M  | b  | amount   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Mifare Decrement Only (31-16)

Decrements value of 'blockNum' by 'amount' and stores it in the Transfer Buffer.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 16  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA208  | ..4  | M  | b  | blockNum   |
| DFA210  | ..4  | M  | b  | amount   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Mifare Transfer (31-17)

Saves the value from the Transfer Buffer to a data block.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 17  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA208  | ..4  | M  | b  | blockNum   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Mifare Restore (31-18)

Loads the block value to the Transfer Buffer.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 18  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA208  | ..4  | M  | b  | blockNum   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [ResponseCodes] |



### NFC Felica Exchange (31-0F)

Data transive over Felica protocol.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 0F  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA218  | 4  | M  | b  | Timeout   |
| DFA206  | var.  | M  | b  | Tx Data   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA206  | var.  | M  | b  | Rx Data   |



### NFC Felica Polling (31-14)

FeliCa Polling request.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 14  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA211  | 4  | M  | b  | Poll Timeout   |
| DFA212  | 4  | M  | b  | Receive Timeout   |
| DFA213  | 2  | M  | b  | System Code   |
| DFA214  | 1  | M  | b  | Request Code   |
| DFA215  | 1  | M  | b  | Time Slot   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA216  | 8  | M  | b  | UID   |
| DFA217  | 8  | M  | b  | PAD   |
| DFA213  | 2  | M  | b  | System Code   |



### NFC APDU Exchange (31-1C)

Data transive over APDU protocol.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 1C  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA204  | var.  | M  | b  | Tx Data   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA205  | var.  | M  | b  | Rx Data   |
| DFA219  | 2  | M  | b  | SW1/SW2 from card   |



### NFC Target Action (31-20)

Performs the NFC_Target_Action() command. For details see [Target Mode].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 20  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA21B  | 1  | M  | b  | Action   |
| DFA21C  | 4  | M  | b  | Timeout   |
| DFA21D  | var.  | M  | b  | Raw input data   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA21E  | var.  | M  | b  | Raw output data   |



### NFC Create Ndef (31-21)

Performs the NFC_Create_Ndef() command. For details see [Target Mode].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 31  | 21  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA21F  | 1  | M  | b  | Type   |
| DFA21D  | var.  | M  | b  | Raw input data   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [ResponseCodes] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA21E  | var.  | M  | b  | Raw output data   |




## Value Added Service, VAS (32-XX)

This section describes the serialized interface to all VAS functions supported by the SDI-Server.


### VAS Terminal Config (32-00)

Configures the terminal with terminal parameters.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 32  | 00  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA300  | var.  | M  | json  | terminal configuration   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [VasStatus] |



### VAS Terminal Read Config (32-01)

Reads the most updated terminal configuration.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 32  | 01  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA301  | var.  | M  | ans  | Application unique identifier   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [VasStatus] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA300  | var.  | M  | json  | terminal configuration   |



### VAS Read Config (32-02)

Reads the most updated wallets configuration.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 32  | 02  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA301  | var.  | M  | ans  | Application unique identifier   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [VasStatus] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA300  | var.  | M  | json  | configuration for terminal and all wallets   |



### VAS Activate (32-03)

Activates NFC interface, runs through wallet kernel flow and retrieves VAS data.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 32  | 03  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA301  | var.  | M  | ans  | Application unique identifier   |
| DFA300  | var.  | M  | json  | Set of dynamic parameters to be merged with configuration from data base   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [VasStatus] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA300  | var.  | M  | json  | VAS data received from the handset   |



### VAS Update Config (32-05)

Configures the terminal with wallet specific parameters.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 32  | 05  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA301  | var.  | M  | b  | Application unique identifier   |
| DFA300  | var.  | M  | json  | Set of parameters to configure one or multiple wallets   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [VasStatus] |



### VAS Cancel Config (32-06)

Clears all the VAS configuration by application ID.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 32  | 06  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA301  | var.  | M  | b  | Application unique identifier   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [VasStatus] |



### VAS Preload (32-07)

Configures the terminal with wallet specific parameters.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 32  | 07  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA301  | var.  | M  | b  | Application unique identifier   |
| DFA300  | var.  | M  | json  | Set of PreLoad parameters to be merged with configuration from data base   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [VasStatus] |



### VAS Cancel Preload (32-08)

Clear preloaded configuration by application ID and pulls latest static configuration from data base.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 32  | 08  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA301  | var.  | M  | b  | Application unique identifier   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | None  | XX see [VasStatus] |



### VAS Decrypt (32-09)

Decrypts an encrypted VAS response.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 32  | 09  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA301  | var.  | M  | b  | Application unique identifier   |
| DFA300  | var.  | M  | json  | Vas Data Response with the included encrypted message   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | XX  | Constructed  | XX see [VasStatus] |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA300  | var.  | M  | json  | Vas Data Response with the included decrypted message   |




## Data Interface (29-XX)

The SDI-Server provides mechanisms to get sensitive and plaintext transaction data:

* To get sensitive data the command [getEncData (29-00)] delivers the requested data encrypted to the caller.
* To create and encrypt complete host messages [getEncMsgData (29-01)] delivers the requested message to the caller.
* Plaintext transaction data will be delivered with the [fetchTrxTags (29-02)] command. This command does not provide sensitive data!
* To avoid unauthorized access to data inside the SDI data store [clearDataStore (29-03)] command has to be used at the end of a transaction.
* [getMsgSignature (29-04)] calculates a signature (e.g. MAC) for a host message as it is created similar to [getEncMsgData (29-01)]


### getEncData (29-00)

Command to read out card holder sensitive data. Because this data is kept inside SDI server and not exposed to any calling application in plaintext, it is returned encrypted only. The sensitive data items are specified by tag list (TLV tag DF8F30) as DOL (data object list), which may contain both SDI server related tags (for magnetic card processing) as well as EMV related tags (for contact/contactless EMV card processing). In addition, the command may contain additional application data (TLV tag DFA120), which is provided as BERTLV buffer. Thus, the application also can use this command to encrypt arbitrary data, which is not in scope of SDI server.

Please note that both parameters tag list (TLV tag DF8F30) and additional application data (TLV tag DFA120) are optional, but getEncData (29-00) will fail if both TLV tags are not provided.


SDI server uses ADKSEC component to encrypt the data. Therefore, the command requires a crypto handle (TLV tag DFA401), which was previously returned by [Crypto Open (70-00)]. This opens a host profile, which is specified in ADKSEC configuration file [sccfg.json]. Please note that this host profile must allow encryption only and if there is the option for decryption, SDI server will decline getEncData (29-00). A default ADKSEC configuration comes along with [SDI base package], which contains some standard profiles for ADE (account data encryption). ADE is SRED compliant and recommended to encrypt cardholder sensitive data. Nevertheless, getEncData (29-00) is designed as flexible so that projects can implement their own security to handle this data.

As mentioned in chapter [Generic Crypto Interface (70-XX)] SDI server has implemented restrictions to use crypto functions via remote connections. Since getEncData (29-00) can only be used to encrypt data and implements additional security checks (e.g. that decryption is not possible), this command is not blocked by default and can be used by external applications not running on the same device as SDI server.


Additional options (TLV tag DFA121) for truncation/padding can be applied to input data of the tag list before encryption. The result is returned as cipher block (TLV tag TLV tag DFA125) containing the encrypted BERTLV buffer. If decrypted, the TLV tags will have the same order as requested in the tag list (TLV tag DF8F30) and provided in TLV buffer by application (TLV tag DFA120). In result the application BERTLV buffer is always appended to sensitive TLV tags of the tag list. If a TLV tag in tag list conflicts, the application tag is preferred and appended, thus, it is removed from the incoming tag list as it wouldn't be requested.

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 29  | 00  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401 | 4 | M | b | Crypto handle to refer an ADKSEC host profile  |
| DF8F30 | var. | O | b | Tag list contains the requested sensitive data tag/tags with length information (DOL Format, e.g. Tag1 L1 Tag2 L2). Tags with variable length can be marked with length zero, values not equal to zero are interpreted as FIXED length. This means value field will be truncated if longer and padded if shorter. Please note that data options (TLV tag DFA121) might be considered to format the tag data before encryption.  |
| DFA120 | var. | O | tlv | Optional application data (BERTLV encoded)  |
| DFA121 | var. | O | b | Data options (default: `0` none), following are supported: 

* **`0x000001 (DO_Pad_00)`**: data padding with 00: XX XX XX XX 00 00 00 00 (applied to tags of tag list with FIXED length only) 
* **`0x000002 (DO_Pad_ff)`**: data padding with ff: XX XX XX XX ff ff ff ff (applied to tags of tag list with FIXED length only) 
* **`0x000004 (DO_TruncatePAN)`**: truncate PAN (TLV tag 5A): 123456789FFFF => 123456789F (makes sense for variable length only) 
* **`0x000008 (DO_AddEmptyTags)`**: add empty tags (with length 0) to result 
* **`0x000010 (DO_Truncate)`**: truncate, if data exceeds the fixed length (applied to tags of tag list with FIXED length only) 
* **`0x000020 (DO_ConcatData)`**: concatenate tag values in result without tag/length information 
* **`0x000040 (DO_Track2EMVFormat)`**: format Track2 equivalent data (TLV tag 57) according EMV (w/o sentinel and LRC) 
* **`0x000080 (DO_CvvAscii)`**: convert CVV (TLV tag DFA131) to ASCII format (string) 
* **`0x000100 (DO_PanAscii)`**: convert PAN (TLV tag 5A) to ASCII format (string) 
* **`0x000200 (DO_Track2Ascii)`**: convert Track2 equivalent data (TLV tag 57) to ASCII format (string) 
* **`0x000400 (DO_ExpDateAscii)`**: convert Expiry Date (TLV tag 5F24) to ASCII format (string) 
* **`0x000800 (DO_Track2AsciiMSRFormat)`**: convert pure Track2 data (TLV tag 57) to ASCII format (string) 
* **`0x001000 (DO_Track1EMVFormat)`**: format Track1 equivalent data (TLV tag 56) according EMV (w/o sentinel and LRC) 
* **`0x002000 (DO_Track2AsciiEMVFormat)`**: convert Track2 according EMV (w/o sentinel and LRC) to ASCII format (string) w/o any padding 
* **`0x004000 (DO_Track2DiscDataAscii)`**: convert Track2 discretionary data to ASCII format (string) w/o any padding 

Please note that only data options `DO_ConcatData` and `DO_AddEmptyTags` will affect application tags provided with TLV tag DFA120, since these options relate to the result containing all tags. 

Options for FIXED data length `DO_Pad_00`, `DO_Pad_ff` and `DO_Truncate` can be combined with TLV tag related format options (such as `DO_Track2EMVFormat`). 

 |
| DFA403 | var. | O | b | Initialisation Vector, size depends on encryption algorithm being used, for ADE (DUKPT 3DES) the size is 8 bytes  |
| DFA100 | 1 | O | b | Use stored transaction data, `00` = disabled (default) / `01` = enabled, see [setEncTrxData (29-08)] |
| DFA417 | 1 | O | b | Increment KSN with encryption by this command, `00` = disabled (default) / `01` = enabled. If the flag is set to `01`, SDI server will invoke function `[secIncrementKSN()](namespacecom__verifone__seccmd.md#function-secincrementksn)` internally to signal ADKSEC to increment the KSN with encryption of the data. The same can be achieved with [Crypto Updatekey (70-06)] before this command is used. This flag is ignored by ADKSEC, if the used host configuration profile uses auto setting `BY_OPERATION` for KSN incrementation. If this should be controlled manually with this flag or with [Crypto Updatekey (70-06)], users must configure `BY_API` to enable manual incrementation by API. For more details please refer to ADKSEC documentation. 

 |
| DFA409 | 4 | O | b | Keyset ID (1, 2, 3, ...) used for encryption, default: `0` (don't set Keyset ID). If the value is greater than `0`, SDI server will invoke [Crypto Set Key Set (70-07)] internally to set the Keyset ID. If TLV tag DFA409 is omitted the function is not invoked.  |
| DFA415 | 4 | O | b | Master Keyset ID (1, 2, 3, ...) used for encryption, default: `0` (don't set Master Keyset ID). The TLV tag is relevant for Android platform only and ignored for others. The TLV tag can only provided together with DFA409 (Keyset ID). If this is missing, the TLV tag DFA415 is ignored, too. Since both Keyset ID and Master Keyset ID are set with same ADKSEC function `[secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid)`, the function is invoked only, if at least one of TLV tags DFA409 or DFA415 contains a value different than `0`. In case if one TLV tag contains `0`, SDI will use value `1` (ADKSEC default for Keyset ID and Master Keyset ID). 

 |


Example Command: 

```cpp
29000000 F0 23 DFA401 04 05C94B63 DF8F30 0C 5A10570056005F24005F2030 DFA120 00 DFA121 03 000001
```

Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA125  | var.  | M  | b  | Cipher block containing the encrypted data of input tags (card holder sensitive data and/or application data)   |
| DFA124  | var.  | O  | b  | KSN (Key Serial Number), size depends on encryption algorithm being used, for ADE (DUKPT 3DES) the size is 10 bytes   |
| DFA403  | var.  | O  | b  | Initialisation Vector, size depends on encryption algorithm being used, for ADE (DUKPT 3DES) the size is 8 bytes   |


In case of response code '64 00' additional tag DFA000 may be available including the return value from the corresponding ADKSEC function.


### getEncMsgData (29-01)

Command to create a host message with a template (TLV tag DFA126) containing placeholder references to fill in data elements with cardholder sensitive and/or application data. Placeholder references in the template are marked by escape sequences starting with `0x1B` followed by string `"X<number>$"`. The `<number>` less `1` represents the position of entry placeholder data (TLV tag FFA101) in TLV Tag F0.

 Example:

 Escape sequence string `"\x1BX1$"` (with `1` as `<number>`) references the first entry of placeholder data (TLV tag FFA101) with position `0` in TLV Tag F0.

Command [getEncMsgData (29-01)] will fail, if the corresponding placeholder data entry for `<number>` is not provided. 

Binary data in the template containing `0x1B` must be doubled so that it isn't recognized as escape sequence. SDI server will skip the second `0x1B` and just takes over the first byte to the result.


For each placeholder reference found in the template SDI server calls [getEncData (29-00)] without encryption of the data, therefore, a placeholder data entry contains the same parameters (tag list, application data, data options) as described for [getEncData (29-00)]. The result of this internal call is filled to the template in plaintext.

After all data elements are filled into the template and the host message is created completely, the whole message is encrypted and returned as cipher block (TLV tag DFA125). SDI server uses ADKSEC component to encrypt the message. Therefore, the command requires a crypto handle (TLV tag DFA401), which was previously returned by [Crypto Open (70-00)]. Finally, the same parameters and conditions are applied for encryption as already described for [getEncData (29-00)].

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 29  | 01  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401 | 4 | O | b | Crypto handle, which is mandatory, if there is at least one entry with placeholder data, which contains a tag list (TLV tag DF8F30) to request card holder sensitive data. The crypto handle can be omitted, if all entrys with placeholder data only contain application data (TLV tag DFA120) to build the message. In this case the message in TLV tag DFA125 is returned in plaintext, since there is no card holder sensitive data in it. This allows applications to use the template mechanism to build own host messages, which are not encrypted.  |
| DFA126 | var. | M | b | Message Template including placeholder references to insert data elements  |
| FFA101 | var. | O | tlv | Placeholder data (may occur more than once) containing the following tags: 
| Tag | Size | M/O | Format | Description  |
| DF8F30 | var. | O | b | Tag list as described for command [getEncData (29-00)].  |
| DFA120 | var. | O | b | Optional application data as described for command [getEncData (29-00)].  |
| DFA121 | var. | O | b | Data options as described for command [getEncData (29-00)].  |


Please note that both parameters tag list (TLV tag DF8F30) and additional application data (TLV tag DFA120) are optional, but [getEncMsgData (29-01)] will fail if both TLV tags are not provided. 

 |
|  -------- | -------- | -------- | -------- | -------- |
| DFA403 | var. | O | b | Initialisation Vector, size depends on encryption algorithm being used, for ADE (DUKPT 3DES) the size is 8 bytes  |
| DFA100 | 1 | O | b | Use stored transaction data, `00` = disabled (default) / `01` = enabled, see [setEncTrxData (29-08)] |
| DFA417 | 1 | O | b | Increment KSN with encryption by this command, `00` = disabled (default) / `01` = enabled. If the flag is set to `01`, SDI server will invoke function `[secIncrementKSN()](namespacecom__verifone__seccmd.md#function-secincrementksn)` internally to signal ADKSEC to increment the KSN with encryption of the data. The same can be achieved with [Crypto Updatekey (70-06)] before this command is used. This flag is ignored by ADKSEC, if the used host configuration profile uses auto setting `BY_OPERATION` for KSN incrementation. If this should be controlled manually with this flag or with [Crypto Updatekey (70-06)], users must configure `BY_API` to enable manual incrementation by API. For more details please refer to ADKSEC documentation. 

 |
| DFA409 | 4 | O | b | Keyset ID (1, 2, 3, ...) used for encryption, default: `0` (don't set Keyset ID). If the value is greater than `0`, SDI server will invoke [Crypto Set Key Set (70-07)] internally to set the Keyset ID. If TLV tag DFA409 is omitted the function is not invoked.  |
| DFA415 | 4 | O | b | Master Keyset ID (1, 2, 3, ...) used for encryption, default: `0` (don't set Master Keyset ID). The TLV tag is relevant for Android platform only and ignored for others. The TLV tag can only provided together with DFA409 (Keyset ID). If this is missing, the TLV tag DFA415 is ignored, too. Since both Keyset ID and Master Keyset ID are set with same ADKSEC function `[secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid)`, the function is invoked only, if at least one of TLV tags DFA409 or DFA415 contains a value different than `0`. In case if one TLV tag contains `0`, SDI will use value `1` (ADKSEC default for Keyset ID and Master Keyset ID). 

 |


Example Command: 

```cpp
29010000 F0 45 DFA401 04 94AEA3A7 DFA126 0E 12341B58312456781B5832249988 FFA101 11 DF8F30 02 5A00 DFA120 00 DFA121 03 000000 FFA101 12 DF8F30 03 5F2400 DFA120 00 DFA121 03 000000
```

Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA125  | var.  | M  | b  | Cipher block containing the encrypted message including data of input tags (card holder sensitive data and/or application data). In case no crypto handle is provided, the message is returned with application data only in plaintext.   |
| DFA124  | var.  | O  | b  | KSN (Key Serial Number), size depends on encryption algorithm being used, for ADE (DUKPT 3DES) the size is 10 bytes   |
| DFA403  | var.  | O  | b  | Initialisation Vector, size depends on encryption algorithm being used, for ADE (DUKPT 3DES) the size is 8 bytes   |


In case of response code '64 00' additional tag DFA000 may be available including the return value from the corresponding ADKSEC function.


### fetchTrxTags (29-02)

Command to fetch none sensitive transaction data from SDI-Server. Which tags are deliverable depends on the configuration of the SDI-Server via white list (JSON file).

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 29  | 02  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DF8F30  | var.  | M  | b  | Tag list. Must be provided as 4 bytes for each tag   |
| DFA130  | 1  | O  | b  | Mode for sensitive tags handling:

00 = Sensitive tags are not returned in the response (default)

01 = Sensitive tags are returned with zero length

 02 = Sensitive tags are returned with data replaced by FF bytes and original length   |
| DFA139  | 1  | O  | b  | Request expiry date (tag 5F24) in clear if VCL encryption is enabled:

00 = Expiry date VCL encrypted (default)

01 = Expiry date in clear   |
| DFA13A  | 1  | O  | b  | Data options bitmap:

00 = Default behavior: search tags in ADK and Kernal database excluding kernel private tags ("readHypTag")

01 = Additionally use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only)

02 = Use EMV_ADK_FETCHTAGS_ADK option (Search tags only in the ADK configuration database)

04 = Use EMV_ADK_FETCHTAGS_KERNEL option (Search tags only in kernel database, excluding kernel private tags ("readHypTag"))

08 = Use EMV_ADK_FETCHTAGS_KERNEL_PRV option (Search tags only in kernel private database ("readHypTag"))   |


Example Command: 

```cpp
29020000 F0 0C DF8F30 08 00005F2000005F30
```

Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| Requested tags  | var.  | O  | b  | Data relative to the tags requested in the command   |
| DFA138  | 1  | O  | b  | White list indicator for sensitive data. Returned only when sensitive tags are returned:

00 = VCL is enabled. Details regarding the Encryption Status are included in tag DFA159.

01 = Card is in the SDI whitelist.json. Returned sensitive tags contain clear text data   |
| DFA159  | 1  | O  | b  | VCL Encryption Status   |


Example Response: 

```cpp
9000 F0 22 5F20 1A 3234362F5445535443454E5445522054455354205649444B2020 5F30 02 0201
```

To allow the SDI-Server the delivery of card data in plain text the PAN needs to be matched with a PAN range included in the white list. This white list is a file stored on the device as **whitelist.json** with the following content (example): 

```cpp
[
"4377","88888","78787878","10000"
]
```

To change the file content a user signed download package including the updated whitelist.json has to be loaded to the device. For details regarding the upload procedure see [Software and Configuration Upload]. After the device has rebooted the new whitelist is available.


### clearDataStore (29-03)

The SDI-Server stores payment relevant data for later use when a card technology is detected. This command has to be used at the end of a transaction to clear the SDI data store and avoid unauthorized data access!

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 29  | 03  | SC  | 00  | None   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


To be on the safe side, the memory is automatically cleared 8 minutes after the last storage.


### getMsgSignature (29-04)

Command to calculate a signature of a host message. It works similar to command [getEncMsgData (29-01)] :

 It creates a host message with a template (TLV tag DFA126) containing placeholder references to fill in data elements with cardholder sensitive and/or application data.

 Due to the fact that the message creation is done in the same way, both commands take the same input parameters.

 The differences of getMsgSignature (29-04) to command [getEncMsgData (29-01)] are listed as follows: 

* The result is not an encrypted message, rather, a signature is calculated and returned with TLV tag DFA408 to the calling application. 
* The crypto handle (TLV tag DFA401) for getMsgSignature (29-04) is mandatory. 
* If a ADKSEC host profile with DUKPT is used for signature creation, the KSN is returned in TLV Tag DFA405 (and not with TLV tag DFA124). 
* By default, getMsgSignature (29-04) is blocked for applications, which are connected to SDI server remotely (see chapters [SDI access control] and [Generic Crypto Interface (70-XX)]). The reason is an "untrusted" remote client could access SDI via network and misuse the command to authenticate a host message. 

Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 29  | 04  | SC  | 00  | Constructed  |  |


Command Data: 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401 | 4 | M | b | Crypto handle to refer an ADKSEC host profile  |
| DFA126 | var. | M | b | Message Template including placeholder references to insert data elements  |
| FFA101 | var. | O | tlv | Placeholder data (may occur more than once) containing the following tags: 
| Tag | Size | M/O | Format | Description  |
| DF8F30 | var. | O | b | Tag list as described for command [getEncData (29-00)].  |
| DFA120 | var. | O | b | Optional application data as described for command [getEncData (29-00)].  |
| DFA121 | var. | O | b | Data options as described for command [getEncData (29-00)].  |


Please note that both parameters tag list (TLV tag DF8F30) and additional application data (TLV tag DFA120) are optional, but [getEncMsgData (29-01)] will fail if both TLV tags are not provided. 

 |
|  -------- | -------- | -------- | -------- | -------- |
| DFA403 | var. | O | b | Initialisation Vector, size depends on encryption algorithm being used, for ADE (DUKPT 3DES) the size is 8 bytes  |
| DFA100 | 1 | O | b | Use stored transaction data, `00` = disabled (default) / `01` = enabled, see [setEncTrxData (29-08)] |
| DFA417 | 1 | O | b | Increment KSN with encryption by this command, `00` = disabled (default) / `01` = enabled. If the flag is set to `01`, SDI server will invoke function `[secIncrementKSN()](namespacecom__verifone__seccmd.md#function-secincrementksn)` internally to signal ADKSEC to increment the KSN with encryption of the data. The same can be achieved with [Crypto Updatekey (70-06)] before this command is used. This flag is ignored by ADKSEC, if the used host configuration profile uses auto setting `BY_OPERATION` for KSN incrementation. If this should be controlled manually with this flag or with [Crypto Updatekey (70-06)], users must configure `BY_API` to enable manual incrementation by API. For more details please refer to ADKSEC documentation. 

 |
| DFA409 | 4 | O | b | Keyset ID (1, 2, 3, ...) used for encryption, default: `0` (don't set Keyset ID). If the value is greater than `0`, SDI server will invoke [Crypto Set Key Set (70-07)] internally to set the Keyset ID. If TLV tag DFA409 is omitted the function is not invoked.  |
| DFA415 | 4 | O | b | Master Keyset ID (1, 2, 3, ...) used for encryption, default: `0` (don't set Master Keyset ID). The TLV tag is relevant for Android platform only and ignored for others. The TLV tag can only provided together with DFA409 (Keyset ID). If this is missing, the TLV tag DFA415 is ignored, too. Since both Keyset ID and Master Keyset ID are set with same ADKSEC function `[secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid)`, the function is invoked only, if at least one of TLV tags DFA409 or DFA415 contains a value different than `0`. In case if one TLV tag contains `0`, SDI will use value `1` (ADKSEC default for Keyset ID and Master Keyset ID). 

 |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA408  | var.  | M  | b  | Message signature, size depends on crypto algorithm being used   |
| DFA405  | var.  | O  | b  | KSN (Key Serial Number), size depends on crypto algorithm being used   |
| DFA403  | var.  | O  | b  | Initialisation Vector, size depends on crypto algorithm being used   |


In case of response code '64 00' additional tag DFA000 may be available including the return value from the corresponding ADKSEC function.


### performValidationChecks (29-05)

This command performs the validation checks for the current card regarding the validation table (cardranges.json) stored on the device.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 29  | 05  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA127  | 3  | M  | n  | Date (DDMMYY) against which the card is to be checked   |
| DFA129  | 1  | O  | b  | Option to return all matching card ranges:

00 = SDI will return only the most accurate matching card range (default),

otherwise an additional list of all less accurate matching card ranges will be returned.   |
| 42  | 3  | O  | n  | Issuer Identification Number (IIN). This will be used as alternative for the PAN to find the best match   |
| 9F0C  | 3-4  | O  | n  | Issuer Identification Number (IIN). This will be used as alternative for the PAN to find the best match. Alternative to Tag 42 to handle variable IIN length according to the EMV specification.   |


Tag 9F0C also allows 4 bytes as data in which the last (right) byte contain FF. Such values are treated as three bytes and FF is discarded.


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | Match found. Check results available   |
| 90  | 71  | None  | No match found   |
| 64  | 00  | None  | TLV Export failed   |
| 64  | FE  | None  | Parameter error (e.g. date invalid)   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA12C  | var.  | M  | json  | Complete matching table record   |
| DFA12D  | 1  | M  | b  | Expiry date check result   |
| DFA12E  | 1  | M  | b  | Luhn check result   |
| DFA132  | 1  | M  | b  | Activation check result   |
| FFA104  | var.  | O  | tlv  | List of additional matching card ranges (list of tags FFA105).

 Returned only when requested through tag DFA129   |
| FFA105  | var.  | O  | tlv  | Matching card range.

 Contains following tags as range information: DFA12C, DFA12D, DFA12E and DFA132   |


Check results will deliver 01 if check is OK, 00 if check is failed and FF if check has not been performed because it's disabled in the validation table. 

In case of IIN is used no check results are delivered.


### getValidationInfo (29-06)

Command to get the header information of the validation table file.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 29  | 06  | SC  | 00  | None   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |
| 90  | 01  | None  | Invalid parameters   |
| 90  | 02  | None  | Card ranges json file not found   |
| 90  | 03  | None  | File has invalid format or syntax   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA12B  | var.  | M  | json  | Validation table information   |



### getEncTrxData (29-07)

Command to get encrypted transaction data for later use (e.g. offline transaction handling). Data needs to be send back to SDI-Server with command [setEncTrxData (29-08)].

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 29  | 07  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DF8F30  | var.  | M  | b  | Tag list including all requested data elements. Tag list must be provided as 4 bytes for each tag.   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA125  | var.  | M  | b  | Encrypted block containing the requested tags with the transaction data   |


This data encryption/decryption is used by the SDI-Server internally and has no influence to the SDI data interface itself.


### setEncTrxData (29-08)

Command to send encrypted transaction data back to SDI-Server.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 29  | 08  | SC  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA125  | var.  | M  | b  | Encrypted block containing the requested tags with the transaction data   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |


This data encryption/decryption is used by the SDI-Server internally and has no influence to the SDI data interface itself.


### endEncTrxData (29-09)

Command to finish encrypted transaction data procedure inside the SDI-Server.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 29  | 09  | SC  | 00  | None   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | All OK   |



### getEmvInfo (29-0A)

Command to read generic EMV information, which was configured with [EMV System Interface].

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


By design, the usage of [EMV System Interface] is restricted to main connection with protocol type A or B. Therefore, EMV configuration data can only be written or read by primary payment application, which owns the main connection. Secondary applications (without payment service functionality) usually connect with protocol type C or D, which allow to process SDI commands as side command asynchronously. Since also secondary applications require to get information about the stored EMV configuration, the SDI command getEmvInfo (29-0A) was introduced to provide this data. For this, SDI server holds an internal cache, which is filled at startup and updated, whenever EMV configuration is written by the payment application.

The EMV information cache does not contain the complete EMV configuration, it holds just a minimal subset such as some terminal related data.


The data is provided in the same BER-TLV format as it is returned by [EMV System Interface].

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 29  | 0A  | 00  | 00  | None   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | All OK   |


Response Data returned in constructed tag F0:


| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DF6B  | var.  | O  | ans  | EMV contact L1 driver version   |
| DF6F  | var.  | O  | ans  | EMV contactless L1 PCD version   |
| DF65  | var.  | O  | ans  | EMV L2 kernel list, contact + contactless, separated by ';'   |
| 9F1E  | 8  | 0  | an  | Interface Device Serial Number   |
| 9F01  | 6  | O  | n 6-11  | Acquirer ID   |
| 9F15  | 2  | O  | n  | Merchant Category Code   |
| 9F16  | 15  | O  | ans  | Merchant Identifier   |
| 9F4E  | var.  | O  | ans  | Merchant Name and Location   |
| 9F1C  | 8  | O  | an  | Terminal ID   |
| 9F53  | 1  | O  | an  | Application Mode   |


In case of an empty cache the response '90 00' without response data is returned.



## Generic Crypto Interface (70-XX)

The SDI Generic Crypto Interface implements a serialized API of ADKSEC component to access security functions for crypto operations. For details regarding the ADKSEC functions please follow the links added to the Tag description for each function.

Local applications connecting from the same device are considered as trusted and can use the Generic Crypto Interface without restrictions (see chapter [SDI access control]). Remote SDI clients connecting from the outside world are classified as potentially "untrusted", therefore, SDI server configures ADKSEC with command [Crypto Open (70-00)] to block the most crypto operations by default. Projects, which want to unlock the Generic Crypto Interface for use with a remote application, have the option either to install an user ACL file (see chapter [acl.json]) or an user ADKSEC configuration file (see chapter [config.json]). ADKSEC configuration schemes support the flag `UntrustedAllowed`, which grants access for "untrusted" applications to use specific security operations. For more details please refer to ADKSEC documentation.
**Please note that it is the responsibility of these projects that unlocked ADKSEC functions are not misused.**


### Crypto Open (70-00)

Opens the crypto device. For details see [secOpen()](namespacecom__verifone__seccmd.md#function-secopen).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 00  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA400  | var.  | M  | ans  | Host name   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Close (70-01)

Closes the crypto device. For details see [secClose()](namespacecom__verifone__seccmd.md#function-secclose).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 01  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | SUCCESS   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Encrypt (70-02)

Data encryption. For details see [secEncryptData()](namespacecom__verifone__seccmd.md#function-secencryptdata).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 02  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |
| DFA402  | var.  | M  | b  | Plaintext data   |
| DFA403  | var.  | O  | b  | Initial Vector (IV)   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA404  | var.  | M  | b  | Encrypted data   |
| DFA403  | var.  | O  | b  | Initial Vector (IV, Random mode)   |
| DFA405  | var.  | O  | b  | Key Serial Number (DUKPT KSN)   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Decrypt (70-03)

Data decryption. For details see [secDecryptData()](namespacecom__verifone__seccmd.md#function-secdecryptdata).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 03  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |
| DFA404  | var.  | M  | b  | Encrypted data   |
| DFA403  | var.  | O  | b  | Initial Vector (IV)   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA406  | var.  | M  | b  | Decrypted data   |
| DFA405  | var.  | O  | b  | Key Serial Number (DUKPT KSN)   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Sign (70-04)

Data signition. For details see [secSign()](namespacecom__verifone__seccmd.md#function-secsign).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 04  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |
| DFA407  | var.  | M  | b  | Data   |
| DFA403  | var.  | O  | b  | Initial Vector (IV)   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA408  | var.  | M  | b  | MAC or Signature   |
| DFA403  | var.  | O  | b  | Initial Vector (IV)   |
| DFA405  | var.  | O  | b  | Key Serial Number (DUKPT KSN)   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Verify (70-05)

Data verification. For details see [secVerify()](namespacecom__verifone__seccmd.md#function-secverify).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 05  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |
| DFA407  | var.  | M  | b  | Data   |
| DFA408  | var.  | M  | b  | MAC or Signature   |
| DFA403  | var.  | O  | b  | Initial Vector (IV)   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA405  | var.  | O  | b  | Key Serial Number (DUKPT KSN)   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Updatekey (70-06)

Key Update. For details see [secUpdateKey()](namespacecom__verifone__seccmd.md#function-secupdatekey).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 06  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |
| DFA40C  | 1  | M  | b  | Key Type   |
| DFA40D  | var.  | M  | b  | Key Data or DUKPT Initial Key or 'KSN incrementation'   |
| DFA405  | var.  | O  | b  | Proprietary Data (e.g. KSN)   |
| DFA411  | 1  | O  | b  | AS2805 Tag   |
| DFA416  | var.  | O  | b  | Key Check Value (KCV). Relevant only for Trinity/Neo/Titus   |
| DFA403  | var.  | O  | b  | Initial Vector (IV). Relevant only for Trinity/Neo/Titus   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA405  | var.  | O  | b  | Proprietary Data   |
| DFA416  | var.  | O  | b  | Key Check Value (KCV). Relevant only for Trinity/Neo/Titus   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Set Key Set (70-07)

Set Key Set. For details see [secSetKSId()](namespacecom__verifone__seccmd.md#function-secsetksid).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 07  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |
| DFA409  | 4  | M  | b  | Key Set Id (1, 2, 3, ...)   |
| DFA415  | 4  | O  | b  | Master Key Set Id (1, 2, 3, ...). Relevant only for Trinity/Neo/Titus   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | None  | SUCCESS   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Get encrypted Pin (70-08)

Get encrypted Pin. For details see [secRetrieveEncryptedPIN()](namespacecom__verifone__seccmd.md#function-secretrieveencryptedpin).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 08  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |
| DFA40A  | 1  | M  | b  | Pin Block Format (0-ISO0, 1-ISO1, 2-ISO2, 3-ISO3)   |
| DFA414  | 1  | O  | b  | Request Zero PIN Block   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA40B  | var.  | M  | b  | Pin Block   |
| DFA405  | var.  | O  | b  | Key Serial Number (DUKPT KSN)   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Get Key Inventory (70-09)

Get Key Inventory. For details see [secGetKeyInventory()](namespacecom__verifone__seccmd.md#function-secgetkeyinventory).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 09  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA40E  | var.  | M  | json  | Get information about keys related to an opened Security Module (available keys, creation date, etc.)   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Get Key Data (70-0A)

Get Key Data. For details see [secGetKeyData()](namespacecom__verifone__seccmd.md#function-secgetkeydata).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 0A  | 00  | 00  | Constructed   |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | M  | b  | Crypto Handle   |
| DFA40C  | 1  | M  | b  | Key Type   |
| DFA410  | 1  | O  | b  | KEK Flag   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA40F  | var.  | M  | b  | Get key relevant information related to an opened Security Module (key file path, etc.)   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.


### Crypto Get Status (70-0B)

Get Status. For details see [secGetStatus()](namespacecom__verifone__seccmd.md#function-secgetstatus).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 70  | 0B  | 00  | 00  | None  | Request status of all available host configurations   |
| 70  | 0B  | 00  | 00  | Constructed  |  |


Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA401  | 4  | O  | b  | Crypto Handle   |
| DFA400  | var.  | O  | ans  | Host name   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA412  | var.  | M  | ans  | Status information   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function. 

The tags DFA400 and DFA401 exclude each other. The status can be requested by crypto handle (which must be open) or by host name. If both tags are available the crypto handle has the higher priority and will be used.


### Crypto Get Versions (70-0C)

Get Versions. For details see [secGetVersions()](namespacecom__verifone__seccmd.md#function-secgetversions).

This command is supported as side command with protocol type D (see [Protocol Type D: Concurrent command support]) and for a side connection with protocol type C (see [Protocol Type C: Multi connection support]).


Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 70  | 0C  | 00  | 00  | None   |


Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA413  | var.  | M  | ans  | Version information   |


In case of response code '64 00' additional tag DFA000 include the return value from the corresponding ADK function.



## Remote Keyservice (72-XX)

SDI remote keyservice is implemented in separate component `libsdikeyservice` coming along with SDI server installation. This service is intended for applications running on Android (not Engage), thus, it is available on devices with dual Android/Engage OS (e.g. CM5, M440 or M424) as well as on Android-only devices (e.g. T650c, P630 etc.). The remote keyservice is fully decoupled from normal SDI interface, therefore, it uses its own Tranpsort Protocol Type 'K' and these kind of messages can only be sent to the TCP endpoint of this service. Messages having another Protocol Type (e.g. B or C) are declined. In addition, the access to the SDI remote keyservice is restricted for local processes running on the same device as the SDI server. For more details please refer to chapter [Protocol Type K: Remote keyservice].

The following subchapters describe the command set provided by the SDI remote keyservice. The commands can be used by local TCP clients to implement an OpenSSL engine, which requires access to public keys (certificates) or the processing a RSA calculation (decryption) with a specified private key.

Key contents are always kept in the secure area of SDI remote keyservice and are never returned!


The key/certificate to be used is specified by a key reference name, which is unanimously used across supported platforms. Recently, the SDI remote keyservice supports the following RSA keys:


| Supported RSA key/certificate  | Used key reference name   |
|  -------- | -------- |
| AuthEx key/certificate  | `VFI_AUTHN_RSA` |
| Customer loaded RSA key/certificate  | Arbitrary name (depending on platform)   |


**Customer loaded RSA key/certificate**:
Customer RSA keys/certificates can be injected into terminal with RKL (remote key loading). RKL uses VRK (VeriShield remote key) with an end to end authenticated encrpytion to bring in a terminal individual payload containing the key and the certificate. For more details about how to create such download files please refer to RKL/VRK documentation.

SDI remote key service is restriced for keys and certificates, which are intened for TLS use only. The service will check certificate for purposes **TLS client** and **TLS server**, if the custom RSA key/certificate is requested for the first time. If both capabilities are missing the operation is declined by purpose check with `6400` (execution error).


On Engage a customer RSA certificate will be stored by RKL as `*.crt` file unter the following location: 

```
/mnt/flash/system/generickeys/usr<X>
```

`<X>` stands for an user number 1-16, whereas keys/certificates can be shared between different users. The corresponding RSA key is VRK encrypted and stored next to the certificate having the same basename with extension `*.der`. The basename is specified by the VRK key label. Finally, applications can use the following notation as key reference name to address a related customer RSA key/certificate: 

```
[usr<X>/]<key label>
```

`usr<X>/` is the user prefix used as subfolder under `/mnt/flash/system/generickeys`. The user prefix is optional and SDI remote key service uses prefix `usr1/` as default to look up keys/certificates under `/mnt/flash/system/generickeys/usr1`. Thus, the `<key label>` only w/o user prefix can be used as key reference name to address a `usr1` key/certificate. Other users require usage of the user prefix with the key label, e.g. `usr2/mykey`.

The value used for key reference name must match user prefix and key label case sensitive.


Android (Trinity, Neo) usually uses the friendly key label to specify the key or certficate. Additionally, serial number (hex string, e.g. `65C95907166F14DA`) or the subject `CN` of the certificate can be used as key reference name (see chapter [Read Keystore Certificate (20-23)] for more details).


### Read Certificate (72-00)

Read the X.509 certificate for a specified key reference. The certificate is returned in binary DER format.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 72  | 00  | 00  | 00  | Constructed   |


Fields P1/P2 are unused and ignored by the keyservice.

Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA500  | var.  | M  | ans  | Key reference   |


Supported key references are listed in chapter [Remote Keyservice (72-XX)].

Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA501  | var.  | M  | b  | Certificate data (DER format)   |


The following SW1/SW2 are returned in response: 
| SW1/SW2  | Description   |
|  -------- | -------- |
| 90 00  | Success   |
| 62 00  | Mandatory tag missing (key reference)   |
| 64 FE  | Parameter error (key reference not supported)   |
| 64 00  | Execution error (key/certificate not installed or invalid)   |


Primitive data tags DFA500 and DFA501 are always added to contructed container tag F0.


### RSA Private Key Calculate (72-01)

Process a RSA calculation (decryption) with a private key specified by key reference. Both, input and output data are transferred in binary format.

Command: 
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| 72  | 01  | 00  | 00  | Constructed   |


Fields P1/P2 are unused and ignored by the keyservice.

Command Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA500  | var.  | M  | ans  | Key reference   |
| DFA502  | var.  | M  | b  | Input data for RSA private key calculation   |


Supported key references are listed in chapter [Remote Keyservice (72-XX)].

Response: 
| SW1  | SW2  | Data  | Comment   |
|  -------- | -------- | -------- | -------- |
| 90  | 00  | Constructed  | SUCCESS   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA503  | var.  | M  | b  | Result data of the RSA private key calculation   |


The following SW1/SW2 are returned in response: 
| SW1/SW2  | Description   |
|  -------- | -------- |
| 90 00  | Success   |
| 62 00  | Mandatory tag missing (key reference or input data)   |
| 64 FE  | Parameter error (key reference not supported or invalid input data)   |
| 64 00  | Execution error (decryption with private RSA key failed)   |


Primitive data tags DFA500, DFA502 and DFA503 are always added to contructed container tag F0.


## Command Requests/Callbacks

Command Requests/Callbacks always belong to a command and are sent by SDI as long as the command is active. A request always expects a response from the SDI client, whereas a callback is unidirectional without a response. Using protocol type D, Command Requests/Callbacks always use the message ID the active command (see [Command requests and callbacks]). Basically, Command Requests/Callbacks are supported for payment commands on main connection only (see chapter [Protocol Type C: Multi connection support]), which corresponds the connection of protocol type D, which own the payment lock (see chapter [Protocol Type D: Concurrent command support]).

Side commands don't support requests and callbacks. The only exception is side command [Sys Lock Payment (20-06)], which uses callback [Intermediate Result Callback (99-01)] to signal the payment lock was obtained successfully.


### EMV Request (91-01)

An EMV request is triggered by ADKEMV component, which SDI server is exposing with [EMV System Interface] and [EMV Transaction Interface] to SDI applications/clients. During an active EMV command ADKEMV might send the request `9101` to SDI application/client, which always provides the response `9201` with the corresponding result. For more details about supported requests, please refer to chapters of mentioned interfaces above.

EMV Request Command: 
| SW1  | SW2  | Data   |
|  -------- | -------- | -------- |
| 91  | 01  | Constructed   |


Constructed TLV container `F0` contains the request data, which is provided by ADKEMV component. For more details please refer to ADKEMV documentation.

EMV Request Response: 
| SW1  | SW2  | Data   |
|  -------- | -------- | -------- |
| 92  | 01  | Constructed   |


The EMV Request always expects a response with a constructed TLV container `F0`, which SDI server will pass back to ADKEMV transparently.


### Status Callback (9F-XX)

This callback is supported in headless mode only and informs the outside application about the entered digits and in case of more than one input parameter (e.g. manual card data entry) about the confirmation of the actual parameter entry. These callbacks doesn't expect a response from outside. The Status Callback is supported by the PED Get PIN ([PED Get PIN (22-01)]) and MSR Card Data Entry ([MSR Card Data Entry (21-02)]) commands only. 
| XX  | Description   |
|  -------- | -------- |
| 0...n  | Number of entered digits   |
| FE  | PAN entered but not confirmed, correction still possible   |
| FD  | Invalid expiry date entered, already entered expiry date is deleted, re-entry necessary   |
| FC  | PAN, Expiry date or CVV not completely entered, additional digit entry necessary   |
| FB  | PAN, Expiry date or CVV maximum number of digits reached, additional digits will be ignored   |



### Control Request (9B-01)

This request is currently supported in headless mode only and informs the outside application about the validation result of the entered Pan respectively Expiry Date during the manual card data entry procedure.

Control Request Command: 
| SW1  | SW2  | Data   |
|  -------- | -------- | -------- |
| 9B  | 01  | Constructed   |


Command Data "PAN enterd": 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| BF01 | var. | M | b | SDI_TAG_BF01_CONTINUATION_REQ_CB_PAN  |
| DFA12C | var. | M | json | Matching record from card validation (see [performValidationChecks (29-05)])  |
| DFA12E | 1 | M | b | Luhn check result  |
| DF1A | var. | M | an | Obfuscated PAN  |
| FFA108 | var. | O | b | Will be returned, when VCL encryption is enabled with the following primitive tags: 
| Tag | Size | M/O | Format | Description  |
| 5A | var. | M | b | VCL encrypted Pan based on the default Expiry Date  |
| 5F24 | 2 | M | b | VCL encrypted default Expiry Date (YYMM)  |


 |
|  -------- | -------- | -------- | -------- | -------- |
| 5A | var. | O | b | Cleartext Pan, if Pan is whitelisted and VCL is disabled!  |
| 5F24 | 2 | O | b | Cleartext default Expiry Date (YYMM). Supported for VCL only!  |


Command Data "Expiry date enterd": 
| Tag | Size | M/O | Format | Description  |
|  -------- | -------- | -------- | -------- | -------- |
| BF02 | var. | M | b | SDI_TAG_BF02_CONTINUATION_REQ_CB_EXPIRY_DATE  |
| DFA12C | var. | M | json | Matching record from card validation (see [performValidationChecks (29-05)])  |
| DFA12D | 1 | M | b | Expiry date check result  |
| DF1A | var. | M | an | Obfuscated PAN  |
| FFA108 | var. | O | b | Will be returned, when VCL encryption is enabled with the following primitive tags: 
| Tag | Size | M/O | Format | Description  |
| 5A | var. | M | b | VCL encrypted Pan based on the entered Expiry Date or the default Expiry Date (if skipped)  |
| 5F24 | 2 | M | b | VCL encrypted Expiry Date (YYMM, default Expiry Date if skipped)  |


 |
|  -------- | -------- | -------- | -------- | -------- |
| 5A | var. | O | b | Cleartext Pan, if Pan is whitelisted and VCL is disabled!  |
| 5F24 | 2 | O | b | Cleartext entered Expiry Date (YYMM) or default Expiry Date if skipped and VCL is enabeld!  |


Check results will deliver 01 if check is OK, 00 if check is failed and FF if check has not been performed because it's disabled in the validation table. 

In case of IIN is used no check results are delivered.


The Control Request expects a response containing a continuation value to tell the SDI-Server how it should proceed next. 
| SW1  | SW2  | Data   |
|  -------- | -------- | -------- |
| 9C  | 01  | Constructed   |


Response Data: 
| Tag  | Size  | M/O  | Format  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| DFA128  | 1  | M  | b  | Continuation value   |
| DFA158  | 1  | O  | b  | Continuation mode (relevant for continuation value = 01 only)   |
| DFA01A  | 5..6  | O  | a  | Alternative Input Format String for CVV   |


Continuation values: 
| Value  | Description   |
|  -------- | -------- |
| 01  | Continue (perform next step)   |
| 02  | Reenter last Value (input field is cleared)   |
| 03  | Abort   |


Continuation modes: 
| Value  | Description   |
|  -------- | -------- |
| 01  | Continue: Perform entry of the next parameter   |
| 02  | Bypass: Allow bypass for the next parameter   |
| 03  | Skip: Skip the entry of the next parameter   |




* Bypass/skip of the Expiry Date causes the SDI Server to use the default Expiry Date taken from the cardranges.json file in use.

 When no Expiry Date is found in the cardranges.json the SDI Server uses the fix value 12/49.
* Bypass/skip of the CVV results in an empty value for this parameter.


Examples: 

```cpp
// Control Request (PAN entered)
9B 01 F0 81 AD BF 01 81 A9 DF A1 2C 81 9F 7B 22 65 78 70 69 72 79 43 68 65 63 6B 69 6E 67 22 3A 74 72 75 65 2C 22 68 69 67 68 22 3A 22 34 22 2C 22 6C 6F 77 22 3A 22 34 22 2C 22 6C 75 68 6E 43 68 65 63 6B 69 6E 67 22 3A 74 72 75 65 2C 22 6D 61 78 50 61 6E 4C 65 6E 67 74 68 22 3A 31 39 2C 22 6D 69 6E 50 61 6E 4C 65 6E 67 74 68 22 3A 31 33 2C 22 70 72 6F 64 75 63 74 73 22 3A 5B 22 44 45 42 49 54 22 2C 22 56 49 53 41 2D 43 52 45 44 49 54 22 5D 2C 22 73 65 72 76 69 63 65 43 6F 64 65 43 68 65 63 6B 22 3A 74 72 75 65 7D DF A1 2E 01 01

// Response (Continue)
9C 01 F0 05 DF A1 28 01 01
```


### Navigator Callback (9D-XX)

The Navigator Callback informs the outside application about the current interaction status to make the corresponding vocalization possible. It is in the responsibility of the outside application to process the data according to the Navigator requirements that are not part of this documentation. 
| XX  | Description   |
|  -------- | -------- |
| 00  | Digit selected   |
| 01  | OK selected   |
| 02  | Cancel selected   |
| 03  | Backspace/Clear selected   |
| 04  | Multiple touches detected   |
| 05  | Pin digit underflow - informs the Application, that more digits needs to be entered   |
| 06  | Pin digit overflow - informs the Application, that the maximum number of digits is reached   |
| 10  | Selection confirmed   |


Navigator Mode is supported for Pin Entry on touch-only devices only.


### Intermediate Result Callback (99-01)

Intermediate Result Callback is recently used for protocol type D only (see chapter [Protocol Type D: Concurrent command support]) to inform a SDI client about an intermediate result of an operation or command. As for now, the callback consists of a SW1 and SW2 only, which means the operation was successful. For instance, it will be sent for side command [Sys Lock Payment (20-06)] to signal the payment lock was obtained successfully.

Intermediate Status callback: 
| SW1  | SW2  | Data   |
|  -------- | -------- | -------- |
| 99  | 01  | Constructed   |


Additional data (TLV tags) are not provided (empty), but might be added in future to transfer different results or result data.


## Payment Notification Callbacks (9E-XX)

Payment Notification Callbacks (9E-XX) are always unidirectional and never have a SDI client response. These callbacks do not belong to an active command and can be sent by SDI (more ore less) at any time. In addition, only the SDI client will receive these kind of callback, which owns the main connection with protocol types B/C (see chapter [Protocol Type C: Multi connection support]). The main connection corresponds the connection of protocol type D, which own the payment lock (see chapter [Protocol Type D: Concurrent command support]). Using protocol type D, Payment Notification Callbacks (9E-XX) always use the message ID of [Sys Lock Payment (20-06)] (see chapter [Payment notification callbacks]). After releasing the payment lock with [Sys Abort (20-02)], SDI no longer issues Payment Notification Callbacks (9E-XX) on this connection.


### Notify Callback (9E-01)

The notify callback informs the outside application about the needed user interactions during a CTLS transaction. It is in the responsibility of the outside application to process the data according to the EMV requirements. 
| Tag  | Description   |
|  -------- | -------- |
| BF10  | TAG_BF10_CTLS_CBK_LEDS   |
| BF14  | TAG_BF14_CBK_TEXT_DISPLAY   |
| BF15  | TAG_BF15_CBK_CARD_TAPPED   |
| BF19  | TAG_BF19_CTLS_CBK_BEEP   |



### Card Detected Callback (9E-02)

The card detected callback informs the outside application about the detection result after a Start Card Detection command (23-03) has been sent in callback mode (DFA10B = 01).

The callback data is structured exactly like the [Poll Card Detection (23-04)] command response.


### EMV Callback after the asychronous Card Detection (9E-03)

If the asychronous Card Detection command (23-03) is used in callback mode, the EMV callbacks will no more be sent as Callback With Response (91-01), but as unidirectional callback 9E-03.

The reason is callbacks with a response are allowed only during an active SDI command, and this is not the case with the the asychronous Card Detection command (23-03), which has been finished already.

The callback response must be provided by the application as a separate command [Provide Callback Response (23-08)]. The callback data has to be structured exactly as the EMV ADK expects it, same as in the (92-01) Callback Response message.


### Card Removal Callback (9E-04)

On hybrid card readers (UX) the SDI Server sends a specific callback to signal the outside application that an inserted card has to be removed. The callback will be sent on MSR Read command (21-01) or on Card Detection command (23-01) when technology MSR only or CTLS plus MSR is used and the card is inserted. For the asynchronous card detection this callback is recently not supported, but might be added in future if required. Therefore, the callback is implemented as payment notification callback (command independent), since command [Start Card Detection (23-03)]) is always finalized with a response.



# System Setup and Requirements


## Hardware

The SDI server interface is designed to be platform agnostic and will be supported for the following terminal operating systems:

* Fusion (VOS)
* Engage (VOS2)
* Android (Trinity, Neo)
* VOS3 (Neo)


Engage (VOS2) platform uses a Linux operating system, which is almost compatible to the older Fusion (VOS) platform, hence, the programming interface and the content of software packages are more or less equal. Anyway, a separate set of software packages are provided for both platforms, since different compiler toolchains are used, thus, binaries are incompatible and cannot be installed crossover the platforms. For this reason the software packages use "vos" (for Fusion) and "vos2" (for Engage) in the download package filename. Nevertheless, package format and supported features are nearly the same. New VOS3 platform has significant differences to VOS/VOS2, e.g. the new security software stack uses K81 security processor (as on Android) and replaces the old Vault. In addition, the support for Verifone Security Scripts (VSS) has been dropped in favor of Verifone Customizable Crypto Interface (VCCI). However, ADK APIs try to hide away all differences under the hood to guarantee compatibility to VOS/VOS2 as good as possible. Finally, the function and feature scope of SDI is almost equal to VOS/VOS2 and also the package contents are be very similar. For this reason packages for all 3 VOS platforms are described in one common chapter [Software for VOS/VOS2 and VOS3], even VOS3 uses another package installer, which expects another package format. Therefore, sub chapters will explicitely mention differences on the format, e.g. using another user or group name for VOS3 bundles and packages.

Android platforms use a differnt package format (APK), which has no commonalities to those used for VOS platforms. In addition, the command interface has significant differences, therefore, some SDI commands are marked as "VOS only" or "Android only". Package types and its contents for these platforms are described in chapter [Software for Android].

## Software for VOS/VOS2 and VOS3

The setup of SDI server for Fusion (VOS), Engage (VOS2) or VOS3 requires the installation of several download packages.

For ADKs <=4.7, SDI server is installed under `usr1`, but with ADK 4.8 it will move to system user `sys8` (security requirement). Due to the fact that the new location will require special signing cards, configuration files won't be longer part of SDI component packages. Therefore, a new download package concept was introduced and several package types were defined to prepare SDI users for this new requirement. Thus, download packages are devided into SDI system packages now provided by SDI team and into user packages optionally provided by SDI user to change or overload default configuration of SDI server. 

On VOS3 SDI server is installed under system user `sys_sdi`. The package concept aligns to VOS/VOS2 with system user (>= ADK 4.8), which stricly devides packages into system (provided by SDI team to setup SDI components) and those provided by users to bring in SDI configuration optionally.


### Download package overview

SDI project uses several types of different download packages, whereas [SDI base package] and [SDI config package] come along with usual SDI server releases (see chapter [Deployment]). Please note that not all package types can be used on every platform and its support depends on it.

The different types of download packages are listed as follows and described in the chapters below: 

1. [SDI base package] (provided by SDI team as part of SDI server release, supported platforms: VOS,VOS2 and VOS3) 
2. [SDI config package] (provided by SDI team as part of SDI server release, supported platforms: VOS, VOS2 and VOS3) 
3. [User config package] (provided by application team that integrates SDI server, supported platforms: VOS, VOS2 and VOS3) 
4. [User VSS package] (provided by application team or by SDI team as add-on download package, supported platforms: VOS and VOS2) 
5. [SDI plugin package] (provided by SDI team as separate SDI plugin release, supported platforms: VOS, VOS2 and VOS3) 

Package differences for VOS3 are explicitely mentioned in the following chapters, whereas VOS and VOS2 use the same package format and contents.


#### SDI base package

The SDI base package is provided by SDI team and contains common files for user `usr1` (on VOS/VOS2) and system user `sys_sdi` (on VOS3). SDI base package is used for both operating modes, standard and headless mode. The package contains SDI server binaries and files with default configuration settings required for both operating modes.

For VOS/VOS2 an additional package is used to launch the ADKSEC security service under `usr1` with a start file for Secuire Installer. Since both SDI server and security service run under the same user (`usr1`), only a regional user signing card is required for this package on these platforms. The base package also contains VSS script `authenticate.vso` for E2E sessions (see chapter [Sys Auth (20-11)]). With ADK 4.8 server will move to system user `sys8` (security requirement). Then the SDI base package will be pre-signed for system and no longer needs to be resigned by users (e.g. with regional user signing cards). Finally, the package cannot be modified by SDI users any longer.


For VOS3 the security service was dropped and ADKSEC is now part of the SDI server, therefore, the package for launching the security service as used for VOS/VOS2 is omitted. In addition, VSS scripts are no longer supported, which means that E2E (see chapter [Sys Auth (20-11)]) cannot be used as long as there is no appropiate implementation, which will replace this feature in future. As for VOS/VOS2, the SDI base package for VOS3 requires system signing privileges and cannot be modified by SDI users.

SDI base package `dl.sdi-X.X.X-X-P2PE-X.X.X.tar` contains following bundles and packages: 

1. VOS/VOS2: Bundle `**sdiserver**` (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle `**sys_sdi_sdiserver**` (user: `sys_sdi` with `HOME`=`/home/sys_sdi`) 
    * VOS/VOS2: Package `**sdi_bin**` (user: `usr1`, group: `usr1`, type: `user`) 
    * VOS3: Package `**sdi_bin**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `$HOME` | `SDI_Server` | SDI server binary  |
| `$HOME/lib` | `lib_mADK_PP_Prot_com.so.X.X.X` | Mobile ADK PINPad protocol library using ADKCOM component to support special communication types (Bluetooth, BLE, COM1A, serial, USB). This protocol variant is used for standard mode by default. This variant does not provide multi connection support with protocol C (see chapter [Protocol Type C: Multi connection support]). 

Devices with internal Android (such as CM5, M440 and M424) don't support `lib_mADK_PP_Prot_com.so.X.X.X`, even configured by [COM_IF.CFG]. 

 |
| `$HOME/lib` | `lib_mADK_PP_Prot_ipc.so.X.X.X` | Mobile ADK PINPad protocol library using ADKIPC component to provide multi connection support with protocol C (see chapter [Protocol Type C: Multi connection support]). This protocol variant is used for headless and EPP mode by default. Parallel command processing is mandatory for devices with internal Android (such as CM5, M440 and M424), since payment applications running on Android have no direct access to security and ADK APIs. Therefore, `lib_mADK_PP_Prot_ipc.so.X.X.X` cannot be disabled by [COM_IF.CFG] on these devices. 

This variant does not provide special communication types (Bluetooth, BLE, COM1A, serial, USB), only TCP/IP based profiles are supported. 

 |
| `$HOME/lib` | `libsdikeyservice.so-X.X.X` | Library providing the [Remote Keyservice (72-XX)] as well as additional APIs for SDI to read certificates (see [Read Keystore Certificate (20-23)]).  |
| `$HOME/lib` | `libsdicardaccess.so-X.X.X` | Library providing remote EPP card access, when SDI operates as Countertop.  |


    * VOS/VOS2: Package `**sdi_sec**` (user: `usr1`, group: `system`, type: `user`) 
    * VOS3: Package `**sdi_sec**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| VOS/VOS2: `$HOME/share/sdi/sec`

 VOS3: `$HOME/sdi/sec` | `sccfg.json` | ADKSEC default configuration for SDI server. This file can be replaced/overloaded by a [User config package]. 

An example configuration file is provided in chapter [sccfg.json]. 

For more details and content of `sccfg.json`, please refer to chapter [sccfg.json] or to ADKSEC documentation. 

 |


With ADK 4.8 on VOS/VOS2 security service (`scapp2`) will run as a different system user (security requirement). Thus, the group of package `**sdi_sec**` will change to `system` to grant file access for this service. In addition, grsecurity system policy requires to install all data to subfolder `share`. 

On VOS3 this security service was dropped and ADKSEC is now part of the SDI server.  

    * VOS/VOS2: Package `**sdi_com**` (user: `usr1`, group: `system`, type: `user`) 
    * VOS3: Package `**sdi_com**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| VOS/VOS2: `$HOME/share/sdi/com`

 VOS3: `$HOME/sdi/com` | VOS/VOS2/VOS3:
`CONNECT_ANY.XML, CONNECT_LAN.XML, CONNECT_LO.XML, CONNECT_WIFI.XML, LOCAL_NET_ETH.xml, LOCAL_NET_LO.xml, LOCAL_NET_WLAN.xml`


 Additional profiles installed under VOS/VOS2 only: `CONNECT_ANDROID.XML, CONNECT_BLE.XML, CONNECT_BT.XML, CONNECT_COM1A.XML, CONNECT_COM1.XML, CONNECT_USB_LAN.XML, CONNECT_USB_SER.XML, LOCAL_NET_BT_PAN.xml, LOCAL_NET_USB.xml` | ADKCOM default configuration for SDI server (connection and network profiles). These files can be replaced/overloaded by a [User config package]. 

Chapter [Getting Started] describes communication profiles and methods of SDI server. 

Currently, VOS3 does not support communication profiles for USB, BT and serial communication. Finally, subsequent SDI releases will provide these features, once these communication methods are required for this platform. 

For more details or content connection and network profiles, please refer to ADKCOM documentation. 

 |
| VOS/VOS2: `$HOME/share/sdi/com` | `gatt.xml` | Default configuration for GATT server (BLE). This file can be replaced/overloaded by a [User config package]. 

For more details or content of GATT server configuration file, please refer to ADKCOM documentation. 

Currently, VOS3 does not support BLE communication method. Finally, subsequent SDI releases will provide this features, once it is required for this platform. 

 |


Since communication service (`comdaemon`) and GATT server (`svcserverd``bluetooth`) run as different system users (`sys12` and `sys2`) on VOS/VOS2, the group of package `**sdi_com**` is set to `system` to grant file access for these services. In addition, grsecurity system policy requires to install all data to subfolder `share`. 

`CONNECT_BT.XML` and `LOCAL_NET_BT_PAN.xml` require write access by SDI server, for more details refer to section [SDI configuration files with write access](#sdi_config_files_write_access).  

    * VOS/VOS2: Package `**sdi_ct**` (user: `usr1`, group: `system`, type: `user`) 
    * VOS3: Package `**sdi_ct**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| VOS/VOS2: `$HOME/share/sdi/ct`

 VOS3: `$HOME/sdi/ct` | `epp.json` | Contains the configuration settings for SDI server as Countertop to connect to an EPP (External PINPad) with TLS. For description of this file refer to chapter [epp.json]. The TLS client connects to EPP endpoint 192.0.2.8:12000, which will be accessable over USB network device specified by network profile `LOCAL_NET_USB_CT.xml`. Additional TLS related settings in this file specify certificates and keys used for the TLS handshake with mutual authentication.  |
| VOS/VOS2: `$HOME/share/sdi/ct`

 VOS3: `$HOME/sdi/ct` | `LOCAL_NET_USB_CT.xml` | Network profile to configure and setup the USB network device required by Countertop TLS client. This network device has name `miniUSB1` with IP address 192.0.2.7.  |


This configuration is security-related, therefore, it cannot be replaced/overloaded with an [User config package].  

    * VOS/VOS2: Package `**sdi_cfg**` (user: `usr1`, group: `system`, type: `user`) 
    * VOS3: Package `**sdi_cfg**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| VOS/VOS2: `$HOME/share/sdi`

 VOS3: `$HOME/sdi` | `acl.json` | Default ACL (access control list) configuration for SDI server. Section `"clients"` of default ACL file can be overloaded by an user ACL file installed with a [User config package]. For more details please refer to chapter [SDI access control]. 

For more details and content of `acl.json` please refer to chapter [acl.json]. 

 |


    * VOS/VOS2: Package `**sdivso**` (user: `usr1`, group: `usr1`, type: `vss`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `VAULT` | `authenticate.vso` | VSS script for secure SDI message authentication/encryption (E2E), see chapter [Sys Auth (20-11)].  |
| `VAULT` | `TS020122.vso` | VSS script to provide access to AuthEx certificate/key (TLS).  |


Additional VSS scripts can be installed with a [User VSS package]. 

For VOS3 this package is not provided, since VSS scripts are no longer supported.  

    * VOS/VOS2: Package `**sdisec_start**` (user: `usr1`, group: `usr1`, type: `user`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `$HOME` | `scapp2` | Launcher application to run security service `scapp2` (installed under `/home/sys13/lib`) as `usr1` process. The launcher application calls `execve()` and passes all arguments and environment variables to the overlayed `scapp2` process.

 The launcher application is started by Secure Installer with following start file entry: 

```
scapp2 --cfgpath /etc/config/sdi/sec/sccfg.json:/home/usr1/share/sdi/sec/sccfg.json```

 Option `--cfgpath` adds 2 additional configuration paths to lookup ADKSEC configuration file `sccfg.json`. Security service `scapp2` priorizes the paths according the list order, thus, the first path points of optional ADKSEC configuration file, which is provided by a [User config package]. If the file is not found there, security service `scapp2` looks up this file in SDI home directory under `/home/usr1/share/sdi/sec/sccfg.json`.  |


For VOS3 this package is not provided, since security service was dropped and ADKSEC is now part of the SDI server.  

2. VOS/VOS2: Bundle `**libsdicsd**` (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle `**sys_sdi_libsdicsd**` (user: `sys_sdi` with `HOME`=`/home/sys_sdi`) 
    * VOS/VOS2: Package `**libsdicsd**` (user: `usr1`, group: `usr1`, type: `user`) 
    * VOS3: Package `**libsdicsd**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `$HOME` | `libsdicsd-versioninfo.txt` | Version file of P2PE library `libsdicsd`.  |


Version file `libsdicsd-versioninfo.txt` is installed as dummy bundle/package just to display P2PE library version in sysmode (P2PE requirement).  

3. VOS/VOS2: Bundle `**aaa_oldsdiserver-remove**` (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle `**oldsdiserver-remove**` (user: `sys_sdi` with `HOME`=`/home/sys_sdi`) 
    * VOS/VOS2: Package `**aaa_oldsdiserver-remove**` (user: `usr1`, group: `usr1`) 
    * VOS3: Package `**oldsdiserver-remove**` (user: `sys_sdi`, group: `system`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `SYSTEM INSTALLER` | VOS/VOS2: `remove`

 VOS3: No files (`manifest.json` for removal only)  | If it is installed on the system, this removal package will uninstall the SDI base package of a previous old version.  |




#### SDI config package

There are 3 additional configuration packages for user `usr1` (on VOS/VOS2) and system user `sys_sdi` (on VOS3). SDI config packages are provided by SDI team and installed on top of [SDI base package].
These configuration packages will enable the operating mode of SDI server: 

1. **headless mode** (`dl.sdi_cfg-hdl-X.X.X-X-P2PE-X.X.X.tar`) 
2. **standard mode** (`dl.sdi_cfg-std-X.X.X-X-P2PE-X.X.X.tar`) 
3. **EPP mode** (`dl.sdi_cfg-epp-X.X.X-X-P2PE-X.X.X.tar`) 


Configuration packages contain additional files, which specify the operating mode and contain additional files required for this mode, e.g. UI resources files used for **standard mode** with enabled UI interface.

Packages **headless mode** and **standard mode** are mutually exclusive and cannot be installed in parallel on device. Therefore, the installation of one package will lead to removal of the other one.

Package **EPP mode** will configure SDI server to run as an EPP (external PINPad), e.g. additional communication profiles are used to enable secure TLS channel used between SDI Countertop and EPP device. EPP mode usually requires an UI interface (e.g. for PIN entry), therefore, packages **standard mode** and **EPP mode** are installed in parallel to setup SDI as EPP. SDI running as Countertop, does not require installation of additional packages: If normal SDI detects a Verifone device on USB, this device is assumed as EPP and it automatically tries to connect to it as a Countertop device.

On VOS/VOS2 an user signing card is required for these packages. With ADK 4.8 SDI server will move to system user `sys8` (security requirement). From that point SDI config packages are system-signed and cannot be modified by SDI users any longer. Users are advised to use an [User config package] to configure SDI. 

SDI config packages for VOS3 require system signing privileges and cannot be modified by SDI users. 

Changing SDI user mode from standard to headless (or vice versa) with the installation of the corresponding package will trigger an automatic fatory reset with next SDI startup. This automatic fatory reset behaves same as [Factory Reset (20-22)] and deletes all files, which SDI has created during runtime with the previous mode.



1. SDI config package for **headless mode** (`dl.sdi_cfg-hdl-X.X.X-X-P2PE-X.X.X.tar`) contains following bundles and packages: 
    * VOS/VOS2: Bundle `**sdiheadless**` (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle `**sys_sdi_sdiheadless**` (user: `sys_sdi` with `HOME`=`/home/sys_sdi`) 
        * VOS/VOS2: Package `**sdi_www**` (user: `usr1`, group: `system`, type: `user`) 
        * VOS3: Package `**sdi_www**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `$HOME/www` | `SDI_Server.mft` | MAC (Multi Application Controller) manifest file for headless mode.

 This manifest file starts SDI server as a service (without UI interface) as follows: 

```
./SDI_Server --headless```

 Argument `--headless` runs SDI server in headless mode.  |


Since MAC runs as system user `sys13` (on VOS/VOS2) or `sys_mac` (on VOS3), the group of package `**sdi_www**` is set to `system` to grant file access for this service. In addition, MAC and UI server require to install all UI files to subfolder `www`.  

        * VOS/VOS2: Package `**sdi_comcfg**` (user: `usr1`, group: `system`, type: `user`) 
        * VOS3: Package `**sdi_comcfg**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| VOS/VOS2: `$HOME/share/sdi/com`

 VOS3: `$HOME/sdi/com` | `COM_IF.CFG` | Default COM configuration for SDI server (used for all devices except CM5/M424/M440). This file selects COM profile `CONNECT_LO.XML` for headless mode to restrict SDI server to accept connections on local loopback device only.  |
| VOS2: `$HOME/share/sdi/com/android` | `COM_IF.CFG` | Default COM configuration for SDI server (used for CM5/M424/M440 only). This file selects COM profile `CONNECT_ANDROID.XML` for headless mode to restrict SDI server to accept connections from Android application running on CM5, M440 and M424 only. For more details about several COM profiles, please refer to chapter [Getting Started]. This file is installed on VOS2 devices only. 

 |


`COM_IF.CFG` can be replaced/overloaded by a [User config package] installed to user config folder (e.g. `/etc/config/sdi/com` on VOS/VOS2). 

`COM_IF.CFG` requires write access by SDI server, for more details refer to section [SDI configuration files with write access](#sdi_config_files_write_access). 

Content of this file is decribed in chapter [COM_IF.CFG].  

    * VOS/VOS2: Bundle `**aaa_sdi-remove**` (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle `**sdi-remove**` (user: `sys_sdi` with `HOME`=`/home/sys_sdi`)

        * VOS/VOS2: Package `**aaa_sdi-remove**` (user: `usr1`, group: `usr1`) 
        * VOS3: Package `**sdi-remove**` (user: `sys_sdi`, group: `system`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `SYSTEM INSTALLER` | VOS/VOS2: `remove`

 VOS3: No files (`manifest.json` for removal only)  | If it is installed on the system, this removal package will uninstall SDI config package for standard mode to avoid conflicts with headless mode configuration files coming along with this download package.  |


    * VOS/VOS2: Bundle `**aaa_oldconfig-remove**` (user: `usr1` with `HOME`=`/home/usr1`) 
        * VOS/VOS2: Package `**aaa_oldconfig-remove**` (user: `usr1`, group: `usr1`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `SYSTEM INSTALLER` | `remove` | If it is installed on the system, this removal package will uninstall SDI config packages of a previous old version.  |


For VOS3 this bundle is not provided. 


2. SDI config package for **standard mode** (`dl.sdi_cfg-std-X.X.X-X-P2PE-X.X.X.tar`) contains following bundles and packages: 
    * VOS/VOS2: Bundle `**sdistandard**` (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle `**sys_sdi_sdistandard**` (user: `sys_sdi` with `HOME`=`/home/sys_sdi`) 
        * VOS/VOS2: Package `**sdi_www**` (user: `usr1`, group: `system`, type: `user`) 
        * VOS3: Package `**sdi_www**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `$HOME/www/sdi` | HTML, CSS, image files, etc.  | ADKGUI default resource files for standard mode, for more details refer to chapter [Default UI resource files].  |
| `$HOME/www` | `SDI_Server.mft` | MAC manifest file for standard mode.  |


Since both, MAC and UI server run as system user `sys13` (on VOS/VOS2) or `sys_mac`/`sys_ui` (on VOS3), the group of package `**sdi_www**` is set to `system` to grant file access for these services. In addition, MAC and UI server require to install all UI files to subfolder `www`. 

These files can be replaced/overloaded by a [User config package].  

Default COM configuration file `COM_IF.CFG` for SDI server is omitted for standard mode, which will lead to display the COM configuration menu at first startup (see chapter [COM_IF.CFG]). This file can be provided by a [User config package], which will pre-configure SDI server with a specific communication profile. In this case the initial COM configuration menu won't be displayed. 

    * VOS/VOS2: Bundle `**aaa_sdi-remove**` (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle `**sdi-remove**` (user: `sys_sdi` with `HOME`=`/home/sys_sdi`) 
        * VOS/VOS2: Package `**aaa_sdi-remove**` (user: `usr1`, group: `usr1`) 
        * VOS3: Package `**sdi-remove**` (user: `sys_sdi`, group: `system`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `SYSTEM INSTALLER` | VOS/VOS2: `remove`

 VOS3: No files (`manifest.json` for removal only)  | If it is installed on the system, this removal package will uninstall SDI config package for headless mode to avoid conflicts with standard mode configuration files coming along with this download package.  |


    * VOS/VOS2: Bundle `**sdiccp**` (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle `**sdiccp**` (user: `sys_sdi` with `HOME`=`/home/sys_sdi`) 
        * VOS/VOS2: Package `**sdi_ccp**` (user: `usr1`, group: `system`, type: `user`) 
        * VOS3: Package `**sdi_ccp**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `$HOME/www/ccp` | HTML, CSS, image files, etc. | ADKCOM control panel (CCP) related default UI resource files used by SDI server for `libccp`.  |


Since UI server run as system user `sys13` (on VOS/VOS2) or `sys_ui` (on VOS3), the group of package `**sdi_ccp**` is set to `system` to grant file access for the UI service. In addition, MAC and UI server require to install all UI files to subfolder `www`. 

These files can be replaced/overloaded by a [User config package].  

    * Bundle `**aaa_oldconfig-remove**` (user: `usr1` with `HOME`=`/home/usr1`) 
        * Package `**aaa_oldconfig-remove**` (user: `usr1`, group: `usr1`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `SYSTEM INSTALLER` | `remove` | If it is installed on the system, this removal package will uninstall SDI config packages of a previous old version.  |


For VOS3 this bundle is not provided. 


3. SDI EPP config package for **EPP mode** (`dl.sdi_cfg-epp-X.X.X-X-P2PE-X.X.X.tar`) contains following bundles and packages: 
    * VOS/VOS2: Bundle `**sdicfgepp**` (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle `**sys_sdi_sdicfgepp**` (user: `sys_sdi` with `HOME`=`/home/sys_sdi`) 
        * VOS/VOS2: Package `**sdi_cfgepp**` (user: `usr1`, group: `system`, type: `user`) 
        * VOS3: Package `**sdi_cfgepp**` (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| VOS/VOS2: `$HOME/share/sdi/epp`

 VOS3: `$HOME/sdi/epp` | `epp.json` | Contains the configuration to enable SDI server to run as EPP (External PINPad). For description of this file refer to chapter [epp.json].  |
| VOS/VOS2: `$HOME/share/sdi/epp`

 VOS3: `$HOME/sdi/epp` | `LOCAL_NET_USB_EPP.xml` | Network profile to configure and setup the USB network device required by EPP TLS server. This network device has name `miniUSB0` with IP address 192.0.2.8.  |
| VOS/VOS2: `$HOME/share/sdi/epp`

 VOS3: `$HOME/sdi/epp` | `CONNECT_EPP_TLS.XML` | Connection profile to configure and setup EPP TLS server on USB network device. The EPP TLS server uses port 12000, which is bound to IP address 192.0.2.8 to accept IP over USB connections only. Additional TLS related settings in this file specify certificates and keys used for the TLS handshake with mutual authentication.  |


Configuration settings for EPP are security relevant, therefore, it is not possible to replaced/overloaded them with a [User config package].  



#### User config package

SDI default settings are provided by [SDI base package] and [SDI config package] (descripted in previous chapters), which install the related files into `$HOME` folder of SDI server (`/home/usr1` on VOS/VOS2 or `/home/sys_sdi` on VOS3). User config packages provide user configuration files to overload existing SDI defaults or to add additional user related settings. As already supported by SDI server for UI interface, users can overload exisiting resource files to customize UI of SDI server (see chapter [Install UI user config packages]). In addition, SDI server allows users to configure additional domestic payment settings such as EMV configuration or SDI configuration files [whitelist.json], [sensitivetags.json] and [cardranges.json]. User config packages are provided by SDI users (application or integration team), thus, user privileges are required to sign these packages (e.g. a regional user signing cards for VOS/VOS2). On VOS/VOS2 it is recommended for existing SDI server installations to migrate to user config packages, instead of modifying the [SDI base package] or [SDI config package]. The reason is SDI server will move to system user `sys8` with ADK 4.8 (security requirement) and installation to this location will require special system signing cards. Therefore, SDI users won't be able any longer able to modify these packages. Finally, on VOS3 SDI server will always run as system user `sys_sdi`, thus, also system signing privileges are required for these packages and there is no other option than using an user config package to configure SDI.

For more details on VOS/VOS2 how to create such an user config package, please refer to user guide of Verifone Secure Installer ERS. For VOS3 please visit page ["VOS3 Project Home"](https://confluence.verifone.com:8443/display/VOS3/VOS3+Project+Home) on Confluence.

Since user config packages overload existing default settings of SDI server, user configuration files are considered as default settings for command [Factory Reset (20-22)]. SDI server will always favor the files coming along with user config packages. Finally, if no user configuration is provided, SDI server will recover internal default file provided with [SDI base package] or [SDI config package].

Since VOS3 uses another package installer, which expects another package format. Therefore, the this chapter will explicitely mention differences on the format, e.g. when using other user/group names or installation locations.


On VOS/VOS2 user config packages are installed to following device location: 

```
/etc/config
```

 SDI server uses folder `sdi` as application subfolder, whereas the most ADK component specific files are stored to correspondig subfolders: 
| Component | Destination folder | Description  |
|  -------- | -------- | -------- |
| SDI server  | `/etc/config/sdi` | SDI server related configuration files  |
| ADKGUI  | `/etc/config/sdi/www` | UI resource files used by SDI server for ADKGUI  |
| ADKSEC  | `/etc/config/sdi/sec` | ADKSEC related configuration files used by SDI server  |
| ADKCOM  | `/etc/config/sdi/com` | ADKCOM related files (e.g. profiles) used by SDI server  |
| ADKCOM  | `/etc/config/sdi/ccp/www` | ADKCOM control panel (CCP) related UI resource files used by SDI server for `libccp` |
| ADKEMV  | `/etc/config/adkemv` | ADKEMV related configuration files, e.g. read-only file `emv-desired.xml` and other configuration files, which require write access like `EMV_Applications.xml`, `EMV_CTLS_Apps_SchemeSpecific.xml`, `EMV_CTLS_HOTLIST.xml`, `EMV_CTLS_Keys.xml`, `EMV_CTLS_Terminal.xml` etc.)  |
| ADKNFC  | `/etc/config/sdi/nfc` | ADKNFC related configuration files used by SDI server  |


On VOS3 SDI uses different locations for user config files. Instead of using a global system folder as on VOS/VOS2, SDI server looks up the files from home user folder: 

```
/home/usr<X>/sdi
```

 At startup SDI server checks for the existence of the folder `/home/usr<X>/sdi` starting from `usr1` up to `usr16`. If the folder is found under a specific user, this user directory is applied for external user configuration. This means, the first user providing the folder wins, other user home folders with higher user numbers will be ignored. As on VOS/VOS2 SDI server uses folder `sdi` as application subfolder, whereas the most ADK component specific files are stored to correspondig subfolders: 
| Component | Destination folder | Description  |
|  -------- | -------- | -------- |
| SDI server  | `/home/usr<X>/sdi` | SDI server related configuration files  |
| ADKGUI  | `/home/usr<X>/sdi/www` | UI resource files used by SDI server for ADKGUI  |
| ADKSEC  | `/home/usr<X>/sdi/sec` | ADKSEC related configuration files used by SDI server  |
| ADKCOM  | `/home/usr<X>/sdi/com` | ADKCOM related files (e.g. profiles) used by SDI server  |
| ADKCOM  | `/home/usr<X>/sdi/ccp/www` | ADKCOM control panel (CCP) related UI resource files used by SDI server for `libccp` |
| ADKEMV  | `/home/usr<X>/sdi/emv` | ADKEMV related configuration files, e.g. read-only file `emv-desired.xml` and other configuration files, which require write access like `EMV_Applications.xml`, `EMV_CTLS_Apps_SchemeSpecific.xml`, `EMV_CTLS_HOTLIST.xml`, `EMV_CTLS_Keys.xml`, `EMV_CTLS_Terminal.xml` etc.)  |
| ADKNFC  | `/home/usr<X>/sdi/nfc` | ADKNFC related configuration files used by SDI server  |


User config packages may contain the following data (VOS/VOS2/VOS3 prefix used to mention differences): 

1. Bundle with arbitrary name (user: `usr1-usr16`) 
    * VOS/VOS2: Package with arbitrary name (user: `usr1-usr16`, group: `share`, type: `config`) 
    * VOS3: Package with arbitrary name (user: `usr1-usr16`, group: `usr1sys`-`usr16sys`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| VOS/VOS2: `/etc/config/sdi/www`

 VOS3: `/home/usr<X>/sdi/www` | CSS and image files  | User customized UI resource files for SDI server. SDI server will check existance of each CSS and image files and use this location instead of `$HOME/www/sdi` (SDI default installation folder for UI resource files).

 For more details, please refer to chapter [Customizing UI of SDI Server].  |
| VOS/VOS2: `/etc/config/sdi/ccp/www`

 VOS3: `/home/usr<X>/sdi/ccp/www` | HTML, CSS, image files etc.  | User customized UI resource files for CPP. SDI server will check existance of this folder and use this location instead of `$HOME/www/cpp` (CCP default installation folder for resource files).  |
| VOS/VOS2: `/etc/config/sdi/sec`

 VOS3: `/home/usr<X>/sdi/sec` | `sccfg.json`
 | User ADKSEC configuration for SDI server. SDI server will check existance of this file and use this location instead of SDI default file under `$HOME/share/sdi/sec` (VOS/VOS2) or `$HOME/sdi/sec` (VOS3). An example configuration file is provided in chapter [sccfg.json]. 

For more details and content of `sccfg.json`, please refer to chapter [sccfg.json] or to ADKSEC documentation. 

 |
| VOS/VOS2: `/etc/config/sdi/com`

 VOS3: `/home/usr<X>/sdi/com` | `CONNECT_ANY.XML, ... LOCAL_NET_ETH.xml, ...` | User connection and network profiles for ADKCOM. SDI server will check existance of each profile and use this file instead of the SDI default profile under `$HOME/share/sdi/com` (VOS/VOS2) or `$HOME/sdi/com` (VOS3). Chapter [SDI base package] lists the supported connection and network profiles for the correspondig platform. If an user config package adds additional profiles (not listed in this chapter), these profiles are ignored. 

Chapter [Getting Started] describes communication profiles and methods of SDI server. 

For more details or content of connection and network profiles, please refer to ADKCOM documentation. 

Users must use an absolute path in XML tag `<NETWORK>` in connection profiles to refer a network profile, since a relative path relates to working directory of SDI server, which is `$HOME`.

 Example on VOS/VOS2 to refer network profile `LOCAL_NET_WLAN.xml` from file `/etc/config/sdi/com/CONNECT_WIFI.XML`: 

```
<CONNECTION_PROFILE>
<CONNECTION>
<TYPE>TCP</TYPE>
<NETWORK>/etc/config/sdi/com/LOCAL_NET_WLAN.xml</NETWORK>
<PORT>12000</PORT>
<TIMEOUT>0</TIMEOUT>
<SERVER>1</SERVER>
</CONNECTION>
</CONNECTION_PROFILE>```

`CONNECT_BT.XML` and `LOCAL_NET_BT_PAN.xml` require write access by SDI server, for more details refer to section [SDI configuration files with write access](#sdi_config_files_write_access). 

 |
| VOS/VOS2: `/etc/config/sdi/com`

 VOS3: **Not supported** | `gatt.xml` | User configuration for GATT server (BLE). SDI server will check existance of this file and use this location instead of SDI default file under `$HOME/share/sdi/com` (VOS/VOS2). For more details or content of GATT server configuration file, please refer to ADKCOM documentation. 

On VOS3 SDI server so far does not provide support for BLE. 

 |
| VOS/VOS2: `/etc/config/sdi/com`

 VOS3: `/home/usr<X>/sdi/com` | `COM_IF.CFG` | User COM configuration for SDI server. Users can pre-select a connection profile for SDI startup or configure a whitelist of COM types, which should appear in COM menu of SDI server in standard mode. SDI server will check existance of this file and use this location instead of SDI default file under `$HOME/share/sdi/com` (VOS/VOS2) or `$HOME/sdi/com` (VOS3). Content of this file is decribed in chapter [COM_IF.CFG]. 

`COM_IF.CFG` requires write access by SDI server, for more details refer to section [SDI configuration files with write access](#sdi_config_files_write_access). 

 |
| VOS/VOS2: `/etc/config/adkemv`

 VOS3: `/home/usr<X>/sdi/emv` | `emv-desired.xml` | User configuration for ADKEMV, which EMV kernel to use for which device. On VOS/VOS2 SDI server uses EMV options `EMV_CT_INIT_OPT_SHARED_CONFIG` and `EMV_CTLS_INIT_OPT_SHARED_CONFIG` to configure ADKEMV to use the system global shared configuration folder `/etc/config/adkemv` for readonly EMV configuration files. 

On VOS3 global configuration folder `/etc/config/adkemv` is not available, therefore, ADKEMV looks up these files from `usr<X>` home folder in the same way as SDI server does for its configuration. 

Fore more details or content of `emv-desired.xml`, please refer to ADKEMV documentation. 

 |
| VOS/VOS2: `/etc/config/adkemv`

 VOS3: `/home/usr<X>/sdi/emv` | `EMV_Applications.xml, EMV_CTLS_Apps_SchemeSpecific.xml, EMV_CTLS_HOTLIST.xml, EMV_CTLS_Keys.xml, EMV_CTLS_Terminal.xml, EMV_Keys.xml, EMV_Terminal.xml` etc.  | User configuration files for ADKEMV, on which this component requires write access. In previous versions of SDI server these files were installed with a flash user config package, which is deprecated and no longer documented. Therefore, an [User config package] shall be used to install these files now. SDI server uses EMV options `EMV_CT_INIT_OPT_SHARED_CONFIG` and `EMV_CTLS_INIT_OPT_SHARED_CONFIG` to configure ADKEMV to use the system global shared configuration folder `/mnt/flash/etc/config/adkemv` (VOS/VOS2) or `/mnt/appdata/versioned/globalshare/sdi/emv` (VOS3) for writable EMV configuration files. 

On VOS/VOS2 SDI server copies these files from `/etc/config/adkemv` to `/mnt/flash/etc/config/adkemv`, whenever an user config package with writable EMV configuration files is installed or updated. The removal of an user config package removes file from the destination folder again. 

On VOS3 SDI server uses folders `/home/usr<X>/sdi/emv` (as source) and `/mnt/appdata/versioned/globalshare/sdi/emv` (as destination). The synchronizatin between both folders works in the way as on VOS/VOS2. 

Please refer to section [SDI configuration files with write access](#sdi_config_files_write_access) for more details. 

Fore more details or content of writable ADKEMV configuration files, please refer to ADKEMV documentation. 

 |
| VOS/VOS2: `/etc/config/sdi`

 VOS3: `/home/usr<X>/sdi` | `config.json` | User configuration with SDI server related settings. This configuration file is not part of the default SDI Server configuration. Content of this file is decribed in chapter [config.json]. 

 |
| VOS/VOS2: `/etc/config/sdi`

 VOS3: `/home/usr<X>/sdi` | `sensitivetags.json, whitelist.json, cardranges.json` | User configuration to add sensitive tags, card whitelists and card ranges. These configuration files are not part of the default SDI Server configuration. Content of these files is decribed in chapters [sensitivetags.json], [whitelist.json] and [cardranges.json]. 

All files require write access by SDI server for configuration upload commands ([Software Upload Start (20-14)], [Software Upload Transfer (20-15)] and [Software Upload Finalize (20-16)]). For more details refer to section [SDI configuration files with write access](#sdi_config_files_write_access). 

 |
| VOS/VOS2: `/etc/config/sdi/nfc`

 VOS3: `/home/usr<X>/sdi/nfc` | `*.wky` | Wallet key files for ADKNFC These configuration files are not part of the default SDI Server configuration coming along with the [SDI base package]. If required, these files must be provided by the project. 

For more details about WKY files, please refer to ADKNFC documentation. 

Since WKY files require write access, SDI server will take over the files to SDI home flash directory `$HOME/flash`, where files are looked up by ADKNFC. 

 |
| VOS/VOS2: `/etc/config/sdi`

 VOS3: `/home/usr<X>/sdi` | `acl.json` | User ACL (access control list) configuration for SDI server. This file overloads section `"clients"` of default ACL file installed with a [SDI base package]. For more details please refer to chapter [SDI access control]. 

For more details and content of `acl.json`, please refer to chapter [acl.json]. 

 |



Users need not to add all files of this table to an user config package and may just add those that are required or shall selectively replace the default SDI configuration files. Thus, the configuration files can also be distributed to multiple user config packages with different bundle names, but please note that several user config packages must not contain the same files and installed in parallel, since files would conflict and overwrite each other during installation. This could lead to undesired behaviour with Verifone Secure Installer (e.g. when removing the packages). 

Users can easily remove the settings (and switch SDI server back to default settings) by just uninstalling the corresponding user config package.


#### SDI configuration files with write access

Some configuration files require write access by SDI server. Instead installing these files to a writeable global filesystem location (e.g. `/mnt/flash/etc/config/sdi` under VOS/VOS2 with a flash user config package), SDI server must be able to switch to user configuration file(s) and to fallback to default configuration file(s) of base packages, whenever an user config package is installed or uninstalled. Therefore, such a global folder cannot be used, since it does not exist, if no flash user config package is installed. In addition, the installed files would be modified in place of this folder, hence, it wouldn't be possible to recover defaults with [Factory Reset (20-22)] . Thus, SDI server has implemented a synchronization for these configuration files:

 At startup, SDI server checks the files from read-only locations, either default configuration folder (e.g. `/home/usr1/share/sdi` on VOS/VOS2) or user configuration source folder (e.g. `/etc/config/sdi` on VOS/VOS2) to store them into SDI home flash folder `$HOME/flash/sdi`. In order to avoid files get overwritten at every startup, SDI server holds a registration file with a checksum for each file to detect, if the file was overloaded or updated by a file in user config package. With the removal of an user config package, the associated files in flash folder `$HOME/flash/sdi` are removed or replaced with default configuration files again. The same mechanism is used for EMV configuration files to synchnronize EMV folders (e.g. `/etc/config/adkemv` and `/mnt/flash/etc/config/adkemv` on VOS/VOS2). In addition, this synchronization recovers default settings with command [Factory Reset (20-22)] . Modified settings by SDI server during runtime in writable configuration files get lost, if an user config package is updated or removed, since existing flash files are removed, overwritten or recovered by default SDI configuration files.


The following table lists writable configuration files, which SDI server will modify during runtime: 
| File | Runtime write event  |
|  -------- | -------- |
| `COM_IF.CFG` | In standard mode COM configuration can be modified by user during runtime in COM menu of SDI server. With the change and confirmation of COM parameters, SDI server will write `COM_IF.CFG` to store the settings persistent for next SDI startup. File settings are described in chapter [COM_IF.CFG].  |
| `sensitivetags.json` | Sensitive tag configuration can be updated during runtime with configuration upload commands ([Software Upload Start (20-14)], [Software Upload Transfer (20-15)] and [Software Upload Finalize (20-16)]). File settings are described in chapter [sensitivetags.json].  |
| `whitelist.json` | Card whitelist configuration can be updated during runtime with configuration upload commands ([Software Upload Start (20-14)], [Software Upload Transfer (20-15)] and [Software Upload Finalize (20-16)]). File settings are described in chapter [whitelist.json].  |
| `cardranges.json` | Card range configuration can be updated during runtime with configuration upload commands ([Software Upload Start (20-14)], [Software Upload Transfer (20-15)] and [Software Upload Finalize (20-16)]). File settings are described in chapter [cardranges.json].  |
| `CONNECT_BT.XML, LOCAL_NET_BT_PAN.xml` | For communication type BT PAN, ADKCOM requires to add the BT address of the paired device to the network profile `LOCAL_NET_BT_PAN.xml`. Since this BT address is got during BT pairing (e.g. in CCP submenu in BT PAN menu of SDI server), SDI Server must update the existing network profile with the specified BT address during runtime. This happens with the activation of the BT PAN connection profile as follows:

 SDI server opens `CONNECT_BT.XML` (in home flash directory `$HOME/flash/sdi/com`) and reads the path of the network profile, which is referred in XML tag `<NETWORK>` (e.g. `$HOME/share/sdi/com/LOCAL_NET_BT_PAN.xml`). Then SDI server reads the network profile, adds BT address to XML tag `<NETWORK_PROFILE/BT_ADDR>` and writes the network profile to home flash directory `$HOME/flash/sdi/com`. Subsequently, the connection profile `CONNECT_BT.XML` is also modified with the path of the updated network profile, so that XML tag `<NETWORK>` points to correct network profile in home flash directory `$HOME/flash/sdi/com`. Finally both files, the connection and network profile will be stored in home flash folder `$HOME/flash/sdi/com` and used by SDI server from there.  |
| `EMV_Applications.xml, EMV_CTLS_Apps_SchemeSpecific.xml, EMV_CTLS_HOTLIST.xml, EMV_CTLS_Keys.xml, EMV_CTLS_Terminal.xml, EMV_Keys.xml, EMV_Terminal.xml etc.` | SDI server invokes APIs of ADKEMV, which modifies these configuration files during runtime. Destination of these files is `/mnt/flash/etc/config/adkemv` (on VOS/VOS2) or `/mnt/appdata/versioned/globalshare/sdi/emv` (on VOS3), which ADKEMV uses as system global shared configuration folder on the corresponding platform.  |
| `*.wky` | Wallet key files for ADKNFC. SDI server will take over the files to SDI home flash directory `$HOME/flash`, where files are looked up by ADKNFC. For more details about WKY files, please refer to ADKNFC documentation.  |


Additional example user config packages come along in subfolder `example/load/usr_config` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`: 

* **dl.sdi-usrconfig-list-files-X.X.X-X-P2PE-X.X.X.tar**

This package installs example SDI list files `[sensitivetags.json]`, `[whitelist.json]` and `[cardranges.json]`. 
* **dl.sdi-usrconfig-no-emv-led-cb-X.X.X-X-P2PE-X.X.X.tar**

This package installs example SDI configuration file `[config.json]`, which disables EMV LED callbacks. 
* **dl.sdi-usrconfig-admin-mode-X.X.X-X-P2PE-X.X.X.tar**

This package installs example SDI configuration file `[config.json]`, which enables SDI administration mode. 
* **dl.sdi-usrconfig-adk-style-X.X.X-X-P2PE-X.X.X.tar**

This package installs an example look and feel for SDI server, which is similar to flat blue UI design used for several ADK applications (Log Control Panel, CP Downloader). 
* **dl.sdi-usrconfig-emv-X.X.X-X-P2PE-X.X.X.tar**

This package installs an example EMV configuration with the read-only file `emv-desired.xml` and other EMV configuration files, which require write access by ADKEMV. For more details about these EMV configuration files, please refer to ADKEMV documentation. 
* **dl.sdi-usrconfig-nfc-X.X.X-X-P2PE-X.X.X.tar**

This package installs an example WKY file `A1a.wky`. For ADKNFC, this file is taken over to flash folder `$HOME/flash`, since ADKNFC requires write access on it. Uninstalling the user config package will remove the file from flash folder again. 
* **dl.sdi-usrconfig-acl-X.X.X-X-P2PE-X.X.X.tar**

This package installs an example ACL file `acl.json`, which only allows `usr1` application to use SDI with Unix Domain Socket. For more details please refer to chapters [SDI access control] and [acl.json]. 
* **dl.sdi-usrconfig-standalone-mode-X.X.X-X-P2PE-X.X.X.tar**

This package installs example SDI configuration file `[config.json]`, which disables SDI as Countertop (to force Standalone mode). 
* **dl.sdi-usrconfig-countertop-noconnect-X.X.X-X-P2PE-X.X.X.tar**

This package installs example SDI configuration file `[config.json]`, which disables SDI in idle to connect as Countertop to EPP automatically. 


#### User VSS package

Additional domestic or project specific VSS scripts for SDI server are installed with a User VSS package. These packages can be either provided by application teams or by SDI team as add-on download package coming along with the SDI release (see chapter [Deployment]).

On VOS3 the support for Verifone Security Scripts (VSS) has been dropped, therefore, user VSS packages can be used on VOS/VOS2 only. 

If developed by application team, VSS scripts require at least a review by ADKSEC or SDI team (security requirement).


SDI server, running as `usr1` process, does not execute VSS scripts directly. VSS scripts are executed by ADKSEC security service, therefore, VSS developers must consider that VSS macros use IDs and APIs expected by ADKSEC. In addition, a corresponding scheme must be added to ADKSEC configuration file [sccfg.json] so that [Generic Crypto Interface (70-XX)] is able to use the VSS script. For further details about using VSS with ADKSEC, please refer to ADKSEC documentation.

Since ADKSEC security service is responsible to run VSS scripts, a script must be installed in a way so that the service is allowed to access it. ADKSEC security service recently runs under user `usr1`. Please note that this service will move to system user `sys10` with ADK 4.8 (security requirement). This user will require to set special user group `uXsys10` in the VSS installation package. For this reason it is recommended for existing SDI server installations to migrate to User VSS packages, which later need to be slightly modified by just changing the user group. 


Since VSS scripts for SDI server are installed under normal user `usr1-usr16`, User VSS packages can be signed with regional user signing cards.

User VSS packages may contain the following data: 

1. Bundle with arbitrary name (user: `usr1-usr16`) 
    * Package with arbitrary name (user: `usr1-usr16`, group: `usr1-usr16` , type: `vss`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `VAULT` | `*.vso` | Additional domestic VSS script for SDI server, which is required by user application.  |



Please verify your OS version, if it has already supports sharing of VSS scripts with group `uXsys10`.


#### SDI plugin package

SDI plugins provide the option to enhance generic SDI server with additional features to fulfill domestic requirements (see chapter [Plugin Interface (26-XX)]). Plugins run in context of SDI server under user `usr1` (on VOS/VOS2) or `sys_sdi` (on VOS3) and are not restricted to use APIs of OS. Therefore, plugins must be either developed by SDI team or if provided by external developers (ADC or third-party), the source code must be reviewed by SDI team, in order to disallow misuse (security requirement).

On VOS/VOS2 SDI server recently runs under user `usr1` and an user signing card is required for SDI plugin packages. With ADK 4.8 SDI server will move to system user `sys8` (security requirement). From that point SDI plugin packages are system-signed and cannot be deployed by SDI users any longer. Finally, VOS3 follows the same concept and system signing privileges are required tp deploy these packages.


SDI plugin packages may contain the following data: 

1. VOS/VOS2 :Bundle with arbitrary name (user: `usr1` with `HOME`=`/home/usr1`)

 VOS3: Bundle with arbitrary name (user: `sys_sdi` with `HOME`=`/home/sys_sdi`) 
    * VOS/VOS2: Package with arbitrary name (user: `usr1`, group: `usr1`, type: `user`) 
    * VOS3: Package with arbitrary name (user: `sys_sdi`, group: `system`, type: `user_ro`) 
| Destination | File | Description  |
|  -------- | -------- | -------- |
| `$HOME/lib` | `libsdiplugin<name>.so` | Additional domestic SDI plugin(s), which is/are required by user application. Plugins must use prefix `libsdiplugin` and have extension `.so`
`<name>` stands for an arbitrary name identifying the plugin.  |
| `$HOME/share/sdi/plugincfg` | `libsdiplugin<name>.cfg, libsdiplugin<name>.json` | Additional (optional) SDI plugin configuration file(s). Plugin configuration files must also use prefix `libsdiplugin` and have extension `.cfg` or `.json`.
`<name>` stands for an arbitrary name identifying the plugin, thus, basename of configuration files should fit to basename of the plugin to avoid name conflicts between multiple plugins.  |




### Deployment

An SDI Server release provides couple of download packages on Artifactory.

 For the correspondig `**<platform>**` (`**vos**`, `**vos2**` or `**vos3**`), the following packages are deployed with load package file `sdi-**<platform>**-load-X.X.X-X-P2PE-X.X.X.zip`: 
| Package | Provided for platform | Description  |
|  -------- | -------- | -------- |
| `dl.sdi-X.X.X-X-P2PE-X.X.X.tar` | `**vos**`, `**vos2**`, `**vos3**` | SDI Server base package  |
| `dl.sdi_cfg-**std**-X.X.X-X-P2PE-X.X.X.tar` | `**vos**`, `**vos2**`, `**vos3**` | Package to configure SDI server for **standard mode** |
| `dl.sdi_cfg-**hdl**-X.X.X-X-P2PE-X.X.X.tar` | `**vos**`, `**vos2**`, `**vos3**` | Package to configure SDI server for **headless mode** |
| `dl.sdi_cfg-**epp**-X.X.X-X-P2PE-X.X.X.tar` | `**vos**`, `**vos2**`, `**vos3**` | Package to configure SDI server for **EPP mode** |
| `dl.sdi-remove-X.X.X-X-P2PE-X.X.X.tar` | `**vos**`, `**vos2**`, `**vos3**` | SDI Server removal package to uninstall listed packages above. In addition, this package uninstalls components of old SDI versions (if installed on the system).  |
| `dl.sdi_cfg-epp-remove-X.X.X-X-P2PE-X.X.X.tar` | `**vos**`, `**vos2**`, `**vos3**` | Removal package for EPP configuration package `dl.sdi_cfg-epp-X.X.X-X-P2PE-X.X.X.tar` to reset EPP mode w/o removal of other SDI components. Please refer to chapter [SDI config package] for more details.  |


Please refer to chapter [Download package overview], which lists and describes the content of several SDI download packages.


These packages will be stored in Artifactory and are signed for different usage (development, productive).

 Further there are complete ADK packages including the SDI Server as well available in Artifactory.


### Installation

Steps for initial installation or manuel update of SDI download packages: 

1. On VOS/VOS2 enter sysmode, login as supervisor and start Update/Netloader and choose the communication interface you want to use.

 On VOS3 enter MAC, select Control Panel/Download Software and choose Netloader.  
2. Use the **Mx800 Downloader** to install the following packages: 
    * SDI base package: 
        * dl.sdi-X.X.X-X-P2PE-X.X.X.tar 
    * SDI config package(s), to enable the SDI operating mode(s) (standard/headless/EPP): 
        * dl.sdi_cfg-hdl-X.X.X-X-P2PE-X.X.X.tar (**SDI headless mode**, mutually exclusive to **SDI standard mode**) 
        * dl.sdi_cfg-std-X.X.X-X-P2PE-X.X.X.tar (**SDI standard mode**, mutually exclusive to **SDI headless mode**) 
        * dl.sdi_cfg-epp-X.X.X-X-P2PE-X.X.X.tar (**SDI EPP mode**, usually installed with **SDI standard mode**) 
3. After successful download and installation of each package, the device will reboot. Therefore, you have to enter Sysmode/MAC again, if you want to install multiple packages. 

SDI download packages provided by Artifactory are pre-signed for system user `sys8` (VOS/VOS2) or `sys_sdi` (VOS3).

 For more details, please refer to chapters [Deployment] Deployment and [Download package overview]).

For user related packages (e.g. [User config package]) regional user signing cards are used.

 In this case please use the **Package Manager** application for resigning each package before the download.


## Software for Android

For each application the Android OS reserves at least one application domain, in which the application is executed. In this way the application is isolated so that it does not affect other applications or essential system processes. Further, for each domain a subfolder is created by the OS, where the application files (e.g. runtime libraries or resource files) from the Android Package (APK) are installed. In addition, this directory can be used by the application to create or access files.

The domain name for the SDI server on Android (Trinity/Neo) is `com.verifone.sdi`. As domain folder the Android OS uses `/data/data/com.verifone.sdi`. The following chapters use the shortcut `<appdir>` to refer this directory.


SDI server on Android runs as native service application (SDI service), which is installed with an APK package. Usually, this APK is already distributed as image built-in and comes along with the Android OS (e.g. for T650c). In addition, the SDI service might be updated afterwards and can be installed on top of the pre-installed ADK.

Due to the fact that the APK for the SDI service requires a special signature, user configuration files (such as EMV configuration) won't be longer part of the APK package. Therefore, a new package concept was introduced and several package types were defined. Thus, the packages are devided into SDI component packages (APKs) provided by SDI team and into User packages optionally provided by SDI user to add new configurations or to change or overload default configuration of SDI server, which comes along with the APK.

The setup of SDI server for Android platform requires the installation of several packages, which are described in the following chapters.


### Download package overview

SDI project recently provides 3 types of different download packages, whereas only the [SDI base package] comes along with usual SDI server releases.

 The different types of download packages are listed as follows and described in the chapters below: 

1. [SDI base package] (provided by SDI team as part of SDI server release) 
2. [User config package] (provided by application team that integrates SDI server) 
3. [User config removal package] (optional, provided by application team that integrates SDI server) 
4. [SDI plugin package] (provided by SDI team as separate SDI plugin release) 
5. [SDI plugin removal package] (provided by SDI team as separate SDI plugin release) 

There is recently no support for VSS (Verifone Security Scripts) on Android, therefore, an [User VSS package] as provided for Fusion/Engage can't be used on this platform.


#### SDI base package

The SDI base package is provided by SDI team as Android package (APK). It contains the SDI runtime libraries required for this service. In addition, the package contains configuration files, which contain the default settings of SDI service.

Newer versions of the SDI service don't longer contain project specific payment configurations like EMV configuration or other domestic payment settings (see [whitelist.json], [sensitivetags.json] and [cardranges.json]). Thus, SDI service won't be able to process EMV payments out of the box by just installing APK. On top of the installed SDI base package users must provide these additional settings with the installation of an [User config package] (or in case of EMV another option is to use the [EMV System Interface] to upload the EMV configuration).


Most important files of the SDI base package are listed in the table below (such as mandatory ADK runtime libraries or default configuration files of the SDI servive). Since the APK package is created by Android Studio, a lot of managment files e.g. Android resource files or SDI service Java program classes are also added. These files are not described in this chapter, since they are not added to application domain folder `<appdir>`.

SDI base package `SDIService-full-release-X.X.X-X.apk` contains following files:


| Destination | File | Description  |
|  -------- | -------- | -------- |
| `<appdir>/files` | `emv-allowed.xml` | List of EMV L2 contact and contactless kernel that have received a Letter of Approval. This configuration is used by the ADKEMV contact and contactless frameworks to judge if a desired L2 kernel is allowed to load. This configuration is device specific and cannot be overloaded with an [User config package] or removed with an [User config removal package]. 

For more details and content of `emv-allowed.xml`, please refer to ADKEMV documentation. 

 |
| `<appdir>/files/sdi/sec` | `sccfg.json` | ADKSEC default configuration for SDI server. This file can be replaced/overloaded by an [User config package]. If the installed file is removed with an [User config removal package], the SDI service will fallback to this file to use ADKSEC default configuration provided with this APK. 

For more details and content of `sccfg.json`, please refer to chapter [sccfg.json] or to ADKSEC documentation. 

 |
| `<appdir>/files/sdi/ct` | `epp.json` | File containing the configuration settings for SDI Service as Countertop to connect to an EPP (External PINPad) with TLS. For description of this file refer to chapter [epp.json]. The TLS client connects to EPP endpoint 192.0.2.8:12000, which will be accessable over USB network device provided by Android OS. SDI service running as Countertop implements an USB watchdog, which will trigger TLS connection setup to EPP once another Verifone device is plugged to USB.


Additional TLS related settings in this file specify certificates and keys used for the TLS handshake with mutual authentication. This configuration is security-related, therefore, it cannot be overloaded with an [User config package] or removed with an [User config removal package]. 

 |
| `<appdir>/files/fonts` | `DejaVuSans-BoldOblique.ttf, DejaVuSans-Bold.ttf, DejaVuSansMono-BoldOblique.ttf, DejaVuSansMono-Bold.ttf, DejaVuSansMono-Oblique.ttf, DejaVuSansMono.ttf, DejaVuSans-Oblique.ttf, DejaVuSans.ttf` | Deja Vu Sans True Type Font (TTF) files used for printing with ADKPRT component (SDI default font). Additional font files can be loaded with an [User config package]. The removal of fonts with an [User config removal package] will never remove this SDI default font. 

For more details about usage of several font types for printing, please refer to ADKPRT documentation. 

 |
| `<appdir>/lib` | `*.so` | Runtime libraries used for the SDI service.

The most important runtime libraries are listed as follows: 

* `libsdi.so`: SDI server library, which implements the SDI service 
* `lib_mADK_PP_Prot_ipc.so`: SDI server protocol library for sending and receiving SDI commands (including multi connection support, see chapter [Protocol Type C: Multi connection support]) 
* `libsdikeyservice.so`: SDI remote keyservice library (see [Remote Keyservice (72-XX)]) 
* `libsdiprotocol.so`: SDI client protocol library (required by Countertop with EPP) 
* `libsdicardaccess.so`: SDI remote card access library (required by Countertop with EPP) 
* `libvfictm.so`: Countertop manager library (required for external pinpad) 
* `libEMV_CTLS_*.so`: ADKEMV libraries providing contactless payment framework 
* `libEMV_CT_*.so`: ADKEMV libraries providing contact payment framework 
* `libABS-Emv.so`: EMV abstraction layer for card reader 
* `libTLV_Util.so`: ADKEMV helper library for X.690 TLV serialisation 
* `libtec.so`: ADKTEC library providing technology selection functionality 
* `libvfiipc.so`: ADKIPC library for inter process communication 
* `libvfiipctls.so`: ADKIPC librarys for TLS communication (using OpenSSL) 
* `engine_keyservice.so`: OpenSSL engine to access RSA keys in security processor used for TLS connections 
* `libvfissl.so`: OpenSSL library for TLS communication 
* `libvficrypto.so`: Crypto library comming along with OpenSSL 
* `libandroid-pal.so`: Platform abstraction layer with platform specific implementations 
* `libvfiepm.so`: Library for external PINPad communication 
* `libvfilog.so`: ADKLOG logging library 
* `libAIF*.so, libnfc*.so, libNFC*.so`: Additional libraries required for NFC payments 


Additional Trinity specific libraries: 

* `libvfiprtk81.so`: ADKPRT printer library for K81 security processor 


Additional Neo specific libraries: 

* `libvfiprtsp.so`: ADKPRT printer library for security processor 
* `libsproc.so`: ADKPRT printer library for K81 security processor 

Not all libraries are listed here and additional runtime libraries will be installed. Set of Libraries also depends on platform (Trinity, Neo, etc.). 

 |
| `<appdir>/files/cfgfiles` | `*.conf` | PCD configuration files for contactless L1 driver These files are recently used for Neo platform only. 

 |
| `<appdir>/files/sdi` | `acl.json` | Default ACL (access control list) configuration for SDI service. Section `"clients"` of default ACL file can be overloaded by an user ACL file installed with a [User config package]. For more details please refer to chapter [SDI access control]. 

For more details and content of `acl.json`, please refer to chapter [acl.json]. 

 |



#### User config package

User config packages contain user configuration files to provide additional user or project specific settings. Related configuration files can be initially installed or if already part of the [SDI base package] the existing default settings of SDI service can be overloaded. User config packages are provided by SDI users (application or integration team) to configure the SDI service with domestic payment and security settings. A user config package is installed as TGZ package (not as APK). The TGZ contains an additional internal ZIP file, which includes the configuration files for the SDI service. The outer TGZ and inner ZIP package are authenticated, verified and extracted by the **Android Secure Installer**, which is part of the Verifone Android OS.

The Android Secure Installer (Update Service) was introduced to deliver update files to services and applications running on Android. For more details about this component and the package format, please refer to Android Secure Installer documentation.


Processing flow for an update package (TGZ) containing a user config package (ZIP): 

1. TGZ Package is delivered to device (via VHQ or included in cache image) 
2. Update Service begins handling package and analyses its content 
3. Update Service validates list of ZIP files against included manifest file `Android.mft`
4. If all expected ZIP files are present, Update Service processes each file in sequence.

 For the user config package the flow is as follows: 
    * Update Service validate signature on the ZIP file 
    * If the signature is valid, the ZIP file is extracted to device folder `/data/secure`. For SDI service related files the Android Secure Installer uses subfolder `sdi`, so that the content of the user config package is extracted to folder `/data/secure/sdi`. 
    * After all files are written, the Update Service notifies the SDI service for pending update and it sends the SDI command [Check For Update (20-1D)] with Configuration type `06`
    * The SDI service processes the content of the user config package 
        * It looks up files under `/data/secure/sdi` and checks if all files are allowed for the update (see column source in table below) 
        * Before the update of the files the SDI service runs the update pre actions (if any), which depend on files provided (see column description in table below) 
        * If only valid were found for the update, it copies the configuration files to the application domain folder `<appdir>/files` (see column destination in table below). In addition, a backup copy of each file is stored to persistent partition (`/persist/appdata/sdi`) to recover the file with command [Factory Reset (20-22)]. 
        * If all files were processed the SDI service runs the update post actions (if any), which depend on files provided (see column description in table below) 
        * Finally SDI service reports the result in response for SDI command [Check For Update (20-1D)] to the Update Service 
5. After the update, the Update Service deletes all files, which were written to `/data/secure`. All configuration files are handled by SDI service during runtime, thus, no reboot of the device or restart of the SDI service are required. 

The following table lists all files, which are recently supported to be installed with an user config package. Basically, user config files are installed to subfolder `files`, which is located in the application domain folder `<appdir>` (see [Software for Android]). The reference `<updatedir>` represents the installation source folder for the SDI service, which is provided by the Update Service `/data/secure/sdi`.


| Source | Destination | File | Description  |
|  -------- | -------- | -------- | -------- |
| `<updatedir>/emv` | `<appdir>/files/flash/adkemv` | `EMV_Applications.xml, EMV_CTLS_Apps_SchemeSpecific.xml, EMV_CTLS_HOTLIST.xml, EMV_CTLS_Keys.xml, EMV_CTLS_Terminal.xml, EMV_Keys.xml, EMV_Terminal.xml etc.` | User configuration files for ADKEMV, which will require write access. These configuration files are not part of the default SDI Server configuration coming along with the [SDI base package]. 

Fore more details or content of EMV configuration files, please refer to ADKEMV documentation. 

Before installation, the SDI service runs the following pre action for these files:

 It calls the functions `[EMV_CT_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework)` and `[EMV_CTLS_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework)` to force ADKEMV to apply the configuration with next EMV CT/CTLS Init Framework (see [EMV System Interface]). Therefore, application must init the EMV framework before the next EMV payment can be started. 

 |
| `<updatedir>/emv` | `<appdir>/files` | `emv-desired.xml` | User configuration for ADKEMV, which EMV kernel to use for which device. This configuration file is not part of the default SDI Server configuration coming along with the [SDI base package]. 

Fore more details or content of EMV configuration files, please refer to ADKEMV documentation. 

Before installation, the SDI service runs the following pre action for this file:

 It calls the functions `EMV_CT_Exit_Framework_extended(EXIT_CT_COMPLETE)` and `EMV_CTLS_Exit_Framework_extended(EXIT_CTLS_COMPLETE)` to force ADKEMV to apply the configuration with next EMV CT/CTLS Init Framework (see [EMV System Interface]). Therefore, application must init the EMV framework before the next EMV payment can be started. 

 |
| `<updatedir>/sec` | `<appdir>/files/sdi_ext/sec` | `sccfg.json` | User ADKSEC configuration for SDI service. SDI service will check existance of this file and use this location instead of SDI default file under `<appdir>/files/sdi/sec`. If this file is later removed with an [User config removal package], the SDI service will fallback to ADKSEC default configuration provided with this APK (see chapter [SDI base package]). 

For more details and content of `sccfg.json`, please refer to chapter [sccfg.json] or to ADKSEC documentation. 

After successful installation of all files, the SDI service runs the following post action for this file:

 It calls the function `[secInit()](namespacecom__verifone__seccmd.md#function-secinit)` to force ADKSEC component to apply the new configuration. 

 |
| `<updatedir>` | `<appdir>/files/sdi_ext` | `config.json` | User configuration with SDI server related settings. This configuration file is not part of the default SDI Server configuration coming along with the [SDI base package]. 

Content of this file is decribed in chapter [config.json]. 

 |
| `<updatedir>` | `<appdir>/files/flash/sdi` | `sensitivetags.json, whitelist.json, cardranges.json` | User configuration to add sensitive tags, card whitelists and card ranges. These configuration files are not part of the default SDI Server configuration coming along with the [SDI base package]. 

Content of these files is decribed in chapters [sensitivetags.json], [whitelist.json] and [cardranges.json]. 

 |
| `<updatedir>/log` | `/sdcard/config/adk-log` | `SDI_log.conf, PAL_log.conf, EMVCT_log.conf, EMVCTLS_log.conf, IPC_log.conf, PRT_log.conf, SEC_log.conf, SYS_log.conf, TEC_log.conf. CR-ABS_log.conf, NFC_log.conf, SDICLT_log.conf, SDIPROT_log.conf, SDIKS_log.conf` | User ADKLOG configuration for the SDI service. Since SDI service uses several ADK components, logging can be enabled by a separate configuration file per component, whereas the component name represents the file prefix: 

```
<component>_log.conf
```

 The SDI service uses file prefix `SDI`, thus, applications must install file `SDI_log.conf` to enable logging outputs of SDI service. For meaning of other file prefixes please refer to documentation of the correspondig ADK component. ADKLOG configuration files are not part of the default SDI Server configuration coming along with the [SDI base package]. For this reason logging outputs are disabled by default and users must install an user config package with ADKLOG configuration files to enable logging per component. 

Once logging is enabled, user can use an [User config removal package] to remove ADKLOG configuration files to disable logging again. 

For detailed description of ADKLOG configuration file contents please refer to ADKLOG documentation. 

After successful installation of ADKLOG configuration files, the SDI service runs the following post action:

 It calls the function `LogAPI_ReconfigNotification()` to force ADKLOG component to reload its configuration files. 

 |
| `<updatedir>/nfc` | `<appdir>/files` | `*.wky` | Wallet key files for ADKNFC These configuration files are not part of the default SDI Server configuration coming along with the [SDI base package]. If required, these files must be provided by the project. 

For more details about WKY files, please refer to ADKNFC documentation. 

 |
| `<updatedir>/fonts` | `<appdir>/files/fonts/sdi_ext` | `*.afm, *.fnt, *.fon, *.gsf, *.otf, *.pfa, *.pfb, *.pfm, *.ttc, *.ttf` | Additional user fonts for SDI (e.g. used for printing with ADKPRT component). SDI server already provides a default font (Deja Vu Sans) coming along with the [SDI base package]. 

If required, an [User config removal package] can be used to uninstall user font files again. 

For more details about usage of several font types for printing, please refer to ADKPRT documentation. 

 |
| `<updatedir>` | `<appdir>/files/sdi_ext` | `acl.json` | User ACL (access control list) configuration for SDI service. This file overloads section `"clients"` of default ACL file installed with a [SDI base package]. For more details please refer to chapter [SDI access control]. 

For more details and content of `acl.json`, please refer to chapter [acl.json]. 

 |


Additional example user config packages for Android (Trinity/Neo) come along in subfolder `example/load/usr_config/android` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`: 

* **list_files/flash.zip**

This package installs example SDI list files `[sensitivetags.json]`, `[whitelist.json]` and `[cardranges.json]`. 
* **emv/flash.zip**

This package installs an example EMV configuration with the read-only file `emv-desired.xml` and other EMV configuration files, which require write access by ADKEMV. For more details about these EMV configuration files, please refer to ADKEMV documentation. 
* **nfc/flash.zip**

This package installs an example WKY file `A1a.wky`. For more details about WKY files, please refer to ADKNFC documentation. 
* **log/flash.zip**

This package installs example configuration files for several components (SDI, PAL, ADKEMV, ADKSEC etc.) to activate logging with ADKLOG component. 
* **fonts/flash.zip**

This package installs example font files to install TrueType font Tiresias-PCfont. Fonts are recently considered by ADKPRT for printing only. Please check license conditions before installing fonts on productive devices. 
* **acl/flash.zip**

This package installs an example ACL file `acl.json`, which only allows local application to use SDI with Unix Domain Socket. For more details please refer to chapters [SDI access control] and [acl.json]. 
* **standalone/flash.zip**

This package installs an example file `[config.json]` file, which disables SDI as Countertop (to force Standalone mode). 
* **all/flash.zip**

This package contains all packages as listed above to install all examples in one. 

Installation steps for Android device (development unit): 

1. Connect the Android device to your PC, either with USB or Network (ADB over Net) 
2. Navigate to documentation subfolder of the package (e.g. `example/load/usr_config/android/emv`) and execute the following ADB commands: 

```
adb root
adb push flash.zip /cache/update
adb reboot
```

3. After reboot the Android Software Updater comes up and installs the uploaded package 

All example packages are not signed, therefore, its installation works for development units only. Installation on productive devices requires packages to be re-signed using the [Verifone Signing Portal](https://sign.verifone.com). Finally, productive update packages are installed with VHQ, therefore, please refer to VHQ documentation for more details. 

For details about format of Android update packages and included manifest files please refer to documentation of Android Secure Installer. 

Preferred tool for package creation is the [Verifone Android Solutions Dashboard](https://solutions-dashboard.verifone.com/CM-Dashboard) (navigate to Tools/Create T650 Android tgz). In addition, ADK Make Rules provide script `make_android_update_pkg`, which projects can use to generate packages during build process. For details about this script please refer to documentaiton of ADK Make Rules. 

Each package folder also contains a corresponding removal package `remove_flash.zip` to uninstall the User config package again. For removal package creation and installation steps please refer to next chapter [User config removal package].


#### User config removal package

An user config removal package is used to delete user related configuration files, which are not part of the [SDI base package]. The user configuration files could be added either by a previously installed [User config package] or by the SDI service during runtime (e.g. EMV configuration files added by ADKEMV component when using the [EMV System Interface]).

Basically, the user config removal package uses the same format as an [User config package] and the Android Secure Installer (Update Service) is also used to install the package to the device. In difference to the [User config package] the user config removal package contains no configuration files, the only file provided within the ZIP update package is the file `remove.json`. Finally, this file is expected by SDI service in folder `<updatedir>`, which represents the folder `/data/secure/sdi` used as source for updates (see chapter [User config package]).


| Source | File | Description  |
|  -------- | -------- | -------- |
| `<updatedir>` | `remove.json` | Removal file specifying the user configuration files to be removed. The file is JSON encoded.

 Example: 

```cpp
{
  "files": [
    "emv/[Ee][Mm][Vv][_-].*\\.[Xx][Mm][Ll]",
    "sec/sccfg\\.json",
    "config\\.json",
    "whitelist\\.json",
    "sensitivetags\\.json",
    "cardranges\\.json"
  ]
}
```

 File `remove.json` contains an array of files, which shall be removed. Each entry specifies a relative file path appended to `<updatedir>` (as the file was installed with the [User config package]), thus, users must not know the internal destination folder in SDI application domain folder for removal.

 Since ADKEMV uses a lot of different configuration files, SDI service has added support for file patterns with regular expressions. Therefore, the pattern as used in example will match both, e.g. files like `EMV_Applications.xml` (in folder `<appdir>/files/flash/adkemv`) as well as `emv-desired.xml` (in folder `<appdir>/files`). Special characters must be escaped for a regular expression by a single backslash, e.g. "." becomes "\." to match the it as dot and not as any character. In addition, JSON format requires backslashes to be escaped by another '\', which is removed by JSON parser on target again. Thus, the file `remove.json` must use "\\.", which results regular expression "\." to match the dot. 

 |


Processing flow for an update package (TGZ) containing an user config removal package (ZIP):

Same steps 1 - 4b as already described in previous chapter [User config package]

1. After `remove.json` was written, the Update Service notifies the SDI service for pending config removal and it sends the SDI command [Check For Update (20-1D)] with Configuration type `08`
2. The SDI service processes the content of the JSON formatted removal file `remove.json`
    * It reads file `remove.json` under `/data/secure/sdi` to get the list of file patterns used for removal 
    * It generates a list of existing user configuration files, which are allowed to be removed 
    * For each entry of the list in `remove.json`, it creates a pattern to match the files of the existing user configuration files (step II) 
    * Each existing file, which matches the pattern, is added to a list of files to be removed 
    * After all patterns in file `remove.json` were processed, all files added to remove list (step IV) are deleted. In addition, the related backup copy of each file is removed from to persistent partition (`/persist/appdata/sdi`) so that the file is no longer considered for recovery with command [Factory Reset (20-22)]. 
    * After file deletion, the SDI service runs the update post actions (if any), which depend on files removed (see column description in table in previous chapter [User config package]) 
    * Finally SDI service reports the result in response for SDI command [Check For Update (20-1D)] to the Update Service 



1. After the file removal, the Update Service deletes all files, which were written to `/data/secure`, thus, the file `/data/secure/sdi/remove.json` is deleted. All removed configuration files are considered by SDI service during runtime, thus, no reboot of the device or restart of the SDI service are required. 

Additional example user config removal packages for Android (Trinity/Neo) come along in subfolder `example/load/usr_config/android` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`: 

* **list_files/remove_flash.zip**

This package removes example list files installed with package `flash.zip` located next to this file. 
* **emv/remove_flash.zip**

This package removes example EMV configuration files installed with package `flash.zip` located next to this file. 
* **nfc/remove_flash.zip**

This package removes example WKY file for NFC installed with package `flash.zip` located next to this file. 
* **log/remove_flash.zip**

This package removes example ADKLOG configuration files installed with package `flash.zip` located next to this file. 
* **all/remove_flash.zip**

This package removes example configuration files installed with any SDI example user config package or with the all-in-one package `flash.zip` located next to this file. 

Installation steps for Android device (development unit): 

1. Connect the Android device to your PC, either with USB or Network (ADB over Net) 
2. Navigate to documentation subfolder of the package (e.g. `example/load/usr_config/android/emv`) and execute the following ADB commands: 

```
adb root
adb push remove_flash.zip /cache/update/flash.zip
adb reboot
```

3. After reboot the Android Software Updater comes up and uninstalls the user configration with the uploaded removal package 

All example removal packages are not signed, therefore, its installation works for development units only. Installation on productive devices requires packages to be re-signed using the [Verifone Signing Portal](https://sign.verifone.com). Finally, productive removal packages are installed with VHQ, therefore, please refer to VHQ documentation for more details. 

ADK Make Rules provide script `make_android_update_pkg`, which projects can use to generate user config removal packages. For details about this script please refer to documentaiton of ADK Make Rules.


#### SDI plugin package

SDI plugins provide the option to enhance generic SDI server with additional features to fulfill domestic requirements (see chapter [Plugin Interface (26-XX)]). Plugins run in context and in application domain of SDI server and are not restricted to use special APIs, e.g. to access secuirty processor and cardholder sensitive data. Therefore, plugins must be either developed by SDI team or if provided by external developers (ADC or third-party), the source code must be reviewed by SDI team, in order to disallow misuse (security requirement).

SDI plugins are not allowed to be installed with user packages and its installation requires additional privileges. If applications require the installation of own domestic SDI plugins, these packages require a special signature, which can be provided by SDI team only.


A SDI plugin package is installed as TGZ package (not as APK). The TGZ contains an additional internal ZIP file, which includes the SDI plugin(s) for the SDI service. The outer TGZ and inner ZIP package are authenticated, verified and extracted by the **Android Secure Installer**, which is part of the Verifone Android OS.

The Android Secure Installer (Update Service) was introduced to deliver update files to services and applications running on Android. For more details about this component and the package format, please refer to Android Secure Installer documentation.

Processing flow for an update package (TGZ) containing a SDI plugin package (ZIP):

Same steps 1 - 4a as already described in previous chapter [User config package]

1. If the signature is valid, the ZIP file is extracted to device folder `/data/secure`. For SDI service related plugins the Android Secure Installer uses subfolder `sdi/plugin`, so that the content of the SDI plugin package is extracted to folder `/data/secure/sdi/plugin`. 
2. After all files are written, the Update Service notifies the SDI service for pending update and it sends the SDI command [Check For Update (20-1D)] with Configuration type `09`
3. The SDI service processes the content of the SDI plugin package. For this it looks up files under `/data/secure/sdi/plugin`, which match the file name pattern `libsdiplugin*.so` (see column source in table below). 
4. For each plugin, which was found for the update SDI service does the following: 
    * It checks for an already loaded plugin having the same name (this can either be a plugin of a previous SDI plugin package or a plugin in internal `lib` directory, which was installed with the [SDI base package]. If a plugin with the same name is loaded, this old plugin is unloded und unregistered for usage in SDI service. 
    * It copies the new plugin to the application domain folder `<appdir>/files/plugins` (see column destination in table below). In addition, a backup copy of each plugin is stored to persistent partition (`/persist/appdata/sdi`) to recover the plugin with command [Factory Reset (20-22)]. 
    * It loads the new plugin from `<appdir>/files/plugins` and registers the plugin for usage in SDI service. 
5. Finally SDI service reports the result in response for SDI command [Check For Update (20-1D)] to the Update Service 



1. After the SDI plugin update, the Update Service deletes all files, which were written to `/data/secure`. All new SDI plugins are installed by SDI service during runtime, thus, no reboot of the device or restart of the SDI service are required. 

The following table lists the content of a SDI plugin package. Basically, plugins and plugin related files (e.g. plugin configuration files) are installed to subfolder `files` in application domain folder `<appdir>` (see [Software for Android]). The reference `<updatedir>` represents the installation source folder for the SDI service, which is provided by the Update Service `/data/secure/sdi`.


| Source | Destination | File | Description  |
|  -------- | -------- | -------- | -------- |
| `<updatedir>/plugin` | `<appdir>/files/plugins` | `libsdiplugin<name>.so` | Additional domestic SDI plugin(s), which is/are required by user application. Plugin filename must use prefix `libsdiplugin` and have extension `.so`
`<name>` stands for an arbitrary name identifying the plugin.  |
| `<updatedir>/plugin` | `<appdir>/files/sdi/plugincfg` | `libsdiplugin<name>.cfg, libsdiplugin<name>.json` | Additional (optional) SDI plugin configuration file(s). Plugin configuration files must also use prefix `libsdiplugin` and have extension `.cfg` or `.json`.
`<name>` stands for an arbitrary name identifying the plugin, thus, basename of configuration files should fit to basename of the plugin to avoid name conflicts between multiple plugins.  |
| `<updatedir>/plugin` | `<appdir>/files/plugins` | `libEMV_CTLS_GC<xxxxxx>.so` | Additional domestic EMV CTLS kernel(s), which is/are required by user application. Kernel file name must use prefix `libEMV_CTLS_GC` followed by 6 digits `<xxxxxx>` and have extension `.so`.  |


SDI service on Android differs internal plugins (installed under `<appdir>/lib` with the [SDI base package]) and external plugins (installed under `<appdir>/files/plugins` with a SDI plugin package). If an external plugin is installed with a SDI plugin package, which has the same name as an internal plugin installed with the APK, the external plugin is preferred and overloads the internal plugin. After removal of the external plugin with a [SDI plugin removal package], the internal plugin gets activated again.


#### SDI plugin removal package

A SDI plugin removal package is used to remove SDI plugins, which are previously installed with a [SDI plugin package].

Internal SDI plugins, which come along with [SDI base package] cannot be installed, but they can be overloaded by an external SDI plugin having the same plugin name. External SDI plugins are installed with a [SDI plugin package].


Basically, a SDI plugin removal package uses the same format as an [User config removal package] and the Android Secure Installer (Update Service) is also used to install the package to the device. A SDI plugin removal package just contains the file `remove.json`, which comes along within the ZIP update package. Finally, this file is expected by SDI service in folder `<updatedir>`, which represents the folder `/data/secure/sdi` used as source for updates (see chapter [User config package] and chapter [SDI plugin package]). In difference, to an [User config removal package] the removal file is looked up in a separate subfolder `plugin`.


| Source | File | Description  |
|  -------- | -------- | -------- |
| `<updatedir>/plugin` | `remove.json` | Removal file specifying the SDI plugins to be removed. The file is JSON encoded.

 Example: 

```cpp
{
  "files": [
    "libsdiplugin.*\.so",
    "libsdiplugin.*\.(cfg|json)"
  ]
}
```

 File `remove.json` contains an array of plugin filenames or plugin related files (e.g. plugin configuration files), which shall be removed. A regular expression is used to match one or more files and to remove them in `<updatedir>/plugin` (as it was installed with the [SDI plugin package]), thus, users must not know the internal destination folder in SDI application domain folder for removal.

 The pattern as used in example will match and remove all plugins as well as all related configuration files, which are recently installed.  |


Processing flow for an update package (TGZ) containing an user config removal package (ZIP):

Same steps 1 - 4b as already described in previous chapter [User config package]

1. After `remove.json` was written, the Update Service notifies the SDI service for pending plugin removal and it sends the SDI command [Check For Update (20-1D)] with Configuration type `0A`
2. The SDI service processes the content of the JSON formatted removal file `remove.json`
    * It reads file `remove.json` under `/data/secure/sdi/plugin` to get the list of plugin patterns used for removal 
    * It generates a list of external SDI plugins, which are installed and allowed to be removed 
    * For each entry of the list in `remove.json`, it creates a pattern to match the installed external plugins (step II) 
    * Each installed plugin, which matches the pattern, is added to a list of plugins to be removed 
    * After all entries in file `remove.json` were processed, all SDI plugins added to remove list (step IV) are unloaded, removed and unregistered for usage in SDI service. In addition, the related backup copy of each plugin is removed from to persistent partition (`/persist/appdata/sdi`) so that the plugin is no longer considered for recovery with command [Factory Reset (20-22)]. 
    * After plugin removal, the SDI service checks to reload internal plugins, which were overloaded by previous installed external plugin. 
    * Finally SDI service reports the result in response for SDI command [Check For Update (20-1D)] to the Update Service 



1. After the plugin removal, the Update Service deletes all files, which were written to `/data/secure`, thus, the file `/data/secure/sdi/plugin/remove.json` is deleted. All removed SDI plugins are considered by SDI service during runtime, thus, no reboot of the device or restart of the SDI service are required. 


## Software for Titus

Titus platform bases on FreeRTOS real-time OS as scheduler and the same on a hardware abstraction layer (HAL). Basic components are the bootloader and the payment firmware running on top of the bootloader. The bootloader provides basic functionality like authentication and installation of firmware images and finally cares about startup of the firmware. SDI is provided as monolitic binary (image) and runs as payment firmware. Payment functionality is provided by SDI interface (e.g. accessible via USB or Bluetooth). In addition, the interface is used for maintenance including software updates of basic components with a download package. Assuming SDI firmware is already installed (e.g. pre-installed by factory), commands [Software Upload Start (20-14)], [Software Upload Transfer (20-15)] and [Software Upload Finalize (20-16)] with upload type `00` are used to upload and to install download packages for Titus.

Titus download packages are provided as uncompressed TAR ball, which contains one or more files, such as images (e.g. payment firmware, the bootloader or bluetooth module). In addition, configuration files for an existing and running SDI paymemt firmware can be installed, either for initial setup to install default configuration in the factory (as system configuration) or to add additional project specific or domestic configuration afterwards (as user configuration). Firmware images and default system configuration must be system-signed, whereas user configuration is signed by end user with the corresponding sponsor key.

User configuration packages cannot be bundled together with images or default system configuration, since they use different signatures. 

For more details about content and internal format of Titus download packages, please refer to documenation of **Titus Secure Installer**.


Processing flow for a download package with **Titus Secure installer**: 

1. Download package is uploaded with commands [Software Upload Start (20-14)], [Software Upload Transfer (20-15)] and [Software Upload Finalize (20-16)] using upload type `00`. If the upload is finalized, SDI stores the package to flash location `/sdi/install`. 
2. SDI invokes API of Titus Secure installer to authenticate and validate the content of the package.

 Depending on the included file types in the package, Titus Secure Installer creates the following update files to notify the responsible processor for pending update: 
| File type | Description | Update File | Processor  |
|  -------- | -------- | -------- | -------- |
| `blfw` | Bootloader image (system-signed)  | `/.fblupdate` | Bootloader  |
| `spfw` | Firmware image (system-signed)  | `/.fwupdate` | Bootloader  |
| `btfw` | Bluetooth module image (system-signed)  | `/.btupdate` | SDI (using API of Secure Installer)  |
| `sysconfig` | System configuration (system-signed)  | `/.sysconfig` | SDI  |
| `usrconfig` | User configuration (user/sponsor signed)  | `/.usrconfig` | SDI  |



The update file contains package details (e.g. file name, position and length) so that the processor knows where to find update data in the download package.
3. After successful validation by Titus Secure Installer, SDI will reboot the device.

 During next startup the responsible processor checks for existance of the corresponding update file and cares about the installation: 
    * If update file `/.fblupdate` or `/.fwupdate` exists, bootloader obtains the package details from it. Then it reads the update data blockwise from download package to flash the code section of the bootloader or the payment firmware. After flashing is complete the bootloader will delete the update file and reboot the device again. The remaining dowload package will be removed by SDI with next startup. 
    * If update file `/.btupdate` exists, SDI invokes an API of Titus Secure Installer to update the bluetooth module. Titus Secure Installer obtains the package details from the update file and reads the update data blockwise from download package to flash the firmware of the bluetooth module. After flashing is complete and Titus Secure Installer returns, SDI will delete the update file and reboot the device again. The remaining dowload package will be removed by SDI with next startup. 
    * If update file `/.sysconfig` or `/.usrconfig` exits, SDI obtains the package details from it. Then it extracts the content of the inner configuration package to folder `/sdi/update`. After extraction SDI checks, if all files are allowed for update and valid. Using source folder in the package indicates that configuration files are intended for ADK subcomponent, e.g. folder `/sec` is used for ADKSEC (see chapters below for details). If all files are considered being valid, SDI stores the files to its destination expected for runtime. For writable configuration files (for which SDI requires write access, e.g. ADKEMV configuration files) a backup copy for each file is stored to folder `sdi/persist/sys` (for file type `sysconfig`) or `sdi/persist/usr` (for file type `usrconfig`). The backup copy the is required by command [Factory Reset (20-22)] to recover the modified files to origin files, which were installed by the package. Once all configuration files were installed, SDI deletes the update file and the related download package and proceeds with the startup. 

The setup of SDI server for Titus platform requires the installation of several packages, which are described in the following chapters.


### Download package overview

SDI project recently allows the use of 5 types of different download packages, whereas only the first 3 system-signed packages come along with SDI firmware releases.

 The types of download packages are listed as follows and described in the chapters below: 

1. [SDI base package] (including both SDI firmware and default system configuration, provided by SDI team as part of SDI firmware release) 
2. [SDI config package] (including default system configuration only to setup an pre-installed SDI firmware, provided by SDI team as part of SDI firmware release) 
3. [SDI config removal package] (to remove default system configuration, provided by SDI team as part of SDI firmware release) 
4. [User config package] (provided by application team that integrates SDI firmware) 
5. [User config removal package] (to remove user configuration, provided by application team that integrates SDI firmware) 


#### SDI base package

The SDI base package is provided by SDI team and contains files for basic setup of SDI. As for VOS platforms, the SDI base package requires system signing privileges and cannot be modified by SDI users. The package contains the SDI firmware image and a configuration package to bring in default settings, which is taken over by SDI as second step after firmware was installed. From today's point of view, there will be one base package for each device type `<device type>` (e.g. "VR1", or "P100"). It might be possible in future that a `<device type>` requires an additional [SDI config package] to complete the setup, e.g. if it will be necessary to configure different operation modes, as we have headless, standard mode or EPP mode on VOS platforms.

SDI base package `dl.sdifw-<device type>-X.X.X.tar` contains following files: 

1. SDI firmware image `**sdi_fw_sign.bin**` (file type: `spfw`)

 The image is flashed by bootloader to firmware code section on device. 
2. Configuration package `**sdifw-sysconfig.tar**` (file type: `sysconfig`)

 Source represents the folder in the configuration package, destination the installation folder on the target. 
| Source | Destination | File | Description  |
|  -------- | -------- | -------- | -------- |
| `/sec` | `/sdi/sec` | `sccfg.json` | ADKSEC default configuration for SDI firmware. This file can be replaced/overloaded by an [User config package]. If the installed file is removed with an [User config removal package], SDI will fallback to this file to use ADKSEC default configuration provided with this base package. 

For more details and content of `sccfg.json`, please refer to chapter [sccfg.json] or to ADKSEC documentation. 

 |




#### SDI config package

SDI config packages are provided by SDI team (system-signed) and contain system configuration files to complete the setup of SDI. On other platforms, the SDI config package usually configures the operation mode (headless, standard or EPP mode). So far, Titus platform does not support different operation modes, thus, only one SDI config package is provided today. This package contains the same configuration as the [SDI base package], but it does not contain SDI firmware image. This package might be useful for initial SDI setup in the factory, after the bootloader and SDI firmware were flashed with the `vfiblhost` tool.

As long as there is no need for it, the SDI config package is provided device indepenent, thus, the filename does not use `<device type>` as for [SDI base package].


SDI config package `dl.sdifw-sysconfig-X.X.X.tar` contains following files: 

1. Configuration package `**sdifw-sysconfig.tar**` (file type: `sysconfig`)

 Source represents the folder in the configuration package, destination the installation folder on the target. 
| Source | Destination | File | Description  |
|  -------- | -------- | -------- | -------- |
| `/sec` | `/sdi/sec` | `sccfg.json` | ADKSEC default configuration for SDI firmware. This file can be replaced/overloaded by an [User config package]. If the installed file is removed with an [User config removal package], SDI will fallback to this file to use ADKSEC default configuration provided with this base package. 

For more details and content of `sccfg.json`, please refer to chapter [sccfg.json] or to ADKSEC documentation. 

 |




#### SDI config removal package

SDI config removal packages are provided by SDI team (system-signed) and are used to delete related SDI configuration files, which were installed with the [SDI base package] or with a [SDI config package]. This package might be useful for SDI removal or cleanup, e.g. if another firmware than SDI shall be used on the device.

As long as there is no need for it, the SDI config removal package is provided device indepenent, thus, the filename does not use `<device type>` as for [SDI base package].


Basically, the SDI config removal package has the same format as the [SDI config package]. It also uses file type `sysconfig` and the Titus Secure Installer will authenticate and validate the package in the same way on to the device. The removal of configuration is initiated by file `remove.json`, which is added on root level in the package and processed by SDI. It is also possible to add both, configuration files for installation (see [SDI config package]) and a removal file `remove.json`, whereas SDI will first do the removal before it installs the configuration files.

SDI config package `dl.sdifw-sysconfig-remove-X.X.X.tar` contains following files: 

1. Removal file `**remove.json**` (file type: `sysconfig`)

 Source represents the folder in the configuration package that was installed. Since the `remove.json` is not installed, there is no destination for it. 
| Source | File | Description  |
|  -------- | -------- | -------- |
| `/` | `remove.json` | Removal file specifying configuration files to be removed. The file is JSON encoded.

 Example: 

```cpp
{
  "files": [
    "sec/sccfg\\.json"
  ]
}
```

 File `remove.json` contains an array of files, which shall be removed. Each entry specifies the source folder as the file was installed with the [SDI config package], thus, users must not know the internal destination folder in SDI application domain folder for removal.
SDI supports file patterns with regular expressions to match files to remove. This allows removal of multiple files with one entry. Special characters must be escaped for a regular expression by a single backslash, e.g. "." becomes "\." to match the it as dot and not as any character. In addition, JSON format requires backslashes to be escaped by another '\', which is removed by JSON parser on target again. Thus, the file `remove.json` must use "\\.", which results regular expression "\." to match the dot. 

 |




#### User config package

Default system configuration for SDI is provided with the [SDI base package] and/or the [SDI config package] (descripted in previous chapters). User config packages install configuration files to overload existing SDI system defaults or to add additional user related settings, such as domestic payment configuration for ADKEMV or security profiles for ADKSEC. User config packages are provided by SDI users (application or integration team), thus, user privileges are required to sign these packages (regional sponsor).

Since user config packages overload existing default settings of SDI firmware, user configuration files are considered as default settings for command [Factory Reset (20-22)]. SDI will always favor the files coming along with user config packages. Finally, if no user configuration is provided, SDI will recover default system configuration file provided with [SDI base package] and/or the [SDI config package].


An user config package with arbitrary name `*.tar` may contain the following data: 

1. Configuration package with arbitrary name `*.tar` (file type: `usrconfig`) 
| Source | Destination | File | Description  |
|  -------- | -------- | -------- | -------- |
| `/emv` | `/sdi/flash/adkemv` | `EMV_Applications.xml, EMV_CTLS_Apps_SchemeSpecific.xml, EMV_CTLS_HOTLIST.xml, EMV_CTLS_Keys.xml, EMV_CTLS_Terminal.xml, EMV_Keys.xml, EMV_Terminal.xml etc.` | User configuration files for ADKEMV, which will require write access. These configuration files are not part of the default system configuration coming along with the [SDI base package]. 

Fore more details or content of EMV configuration files, please refer to ADKEMV documentation. 

EMV configuration file `emv-desired.xml` is not supported on Titus. 

 |
| `/sec` | `/sdi/ext/sec` | `sccfg.json` | User ADKSEC configuration for SDI. SDI will check existance of this file and use this location instead of SDI default file under `/sdi/sec`. If this file is later removed with an [User config removal package], the SDI will fallback to ADKSEC default configuration provided with [SDI base package]. 

For more details and content of `sccfg.json`, please refer to chapter [sccfg.json] or to ADKSEC documentation. 

 |
| `/` | `/sdi/ext` | `config.json` | User configuration with SDI related settings. This configuration file is not part of the default system configuration coming along with the [SDI base package]. 

Content of this file is decribed in chapter [config.json]. 

 |
| `/log` | `/sdi/ext/adk-log` | `SDI_log.conf, PAL_log.conf, EMVCT_log.conf, EMVCTLS_log.conf, SEC_log.conf, SYS_log.conf, TEC_log.conf. CR-ABS_log.conf, etc.` | User ADKLOG configuration for the SDI. Since SDI uses several ADK components, logging can be enabled by a separate configuration file per component, whereas the component name represents the file prefix: 

```
<component>_log.conf
```

 SDI uses file prefix `SDI`, thus, applications must install file `SDI_log.conf` to enable logging outputs of SDI. For meaning of other file prefixes please refer to documentation of the correspondig ADK component. ADKLOG configuration files are not part of the default system configuration coming along with the [SDI base package]. For this reason logging outputs are disabled by default and users must install an user config package with ADKLOG configuration files to enable logging per component. 

Once logging is enabled, user can use an [User config removal package] to remove ADKLOG configuration files to disable logging again. 

For detailed description of ADKLOG configuration file contents please refer to ADKLOG documentation. 

 |



Additional example user config packages come along in subfolder `example/load/usr_config/titus` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`: 

* **dl.sdi-usrconfig-emv-X.X.X-X-P2PE-X.X.X.tar**

This package installs an example EMV configuration files for Titus. For more details about these EMV configuration files, please refer to ADKEMV documentation. 
* **dl.sdi-usrconfig-log-X.X.X-X-P2PE-X.X.X.tar**

This package installs example configuration files for several components (SDI, PAL, ADKEMV, ADKSEC etc.) to activate logging with ADKLOG component. 
* **dl.sdi-usrconfig-all-X.X.X-X-P2PE-X.X.X.tar**

This package contains all packages as listed above to install all examples in one. 


#### User config removal package

An user config removal package is used to delete user related configuration files, which were installed with previous [User config package]. After the user configuration files were removed, SDI uses the default configuration, if the related file was part of [SDI base package] or [SDI config package].

Basically, the user config removal package has the same format as the [User config package]. It also uses file type `usrconfig` and the Titus Secure Installer will authenticate and validate the package in the same way on to the device. The removal of configuration is initiated by file `remove.json`, which is added on root level in the package and processed by SDI. It is also possible to add both, configuration files for installation (see [User config package]) and a removal file `remove.json`, whereas SDI will first do the removal before it installs the configuration files.

An user config removal package with arbitrary name `*.tar` may contain the following data: 

1. Removal file `**remove.json**` (file type: `usrconfig`)

 Source represents the folder in the configuration package that was installed. Since the `remove.json` is not installed, there is no destination for it. 
| Source | File | Description  |
|  -------- | -------- | -------- |
| `/` | `remove.json` | Removal file specifying configuration files to be removed. The file is JSON encoded.

 Example: 

```cpp
{
  "files": [
    "emv/EMV_.*\\.[Xx][Mm][Ll]",
    "sec/sccfg\\.json",
    "config\\.json",
    "log/.*_log\\.conf"
  ]
}
```

 File `remove.json` contains an array of files, which shall be removed. Each entry specifies the source folder as the file was installed with the [User config package], thus, users must not know the internal destination folder in SDI application domain folder for removal.
SDI supports file patterns with regular expressions to match files to remove. This allows removal of multiple files with one entry. Special characters must be escaped for a regular expression by a single backslash, e.g. "." becomes "\." to match the it as dot and not as any character. In addition, JSON format requires backslashes to be escaped by another '\', which is removed by JSON parser on target again. Thus, the file `remove.json` must use "\\.", which results regular expression "\." to match the dot. 

 |



Additional example user config removal packages for Titus come along in subfolder `example/load/usr_config/titus` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`: 

* **dl.sdi-usrconfig-emv-remove-X.X.X-X-P2PE-X.X.X.tar**

This package removes example EMV configuration files installed with package `dl.sdi-usrconfig-emv-X.X.X-X-P2PE-X.X.X.tar` located next to this file. 
* **dl.sdi-usrconfig-log-remove-X.X.X-X-P2PE-X.X.X.tar**

This package removes example ADKLOG configuration files installed with package `dl.sdi-usrconfig-log-X.X.X-X-P2PE-X.X.X.tar` located next to this file. 
* **dl.sdi-usrconfig-all-remove-X.X.X-X-P2PE-X.X.X.tar**

This package removes example configuration files installed with any SDI example user config package or with the all-in-one package `dl.sdi-usrconfig-all-X.X.X-X-P2PE-X.X.X.tar` located next to this file. 


### Deployment

An SDI release provides several download packages on Artifactory.

 The following packages are deployed with load package file `sdi-stm32-load-X.X.X-X-P2PE-X.X.X.zip`: 
| Package | Description  |
|  -------- | -------- |
| `dl.sdifw-**<device type>**-X.X.X.tar` | The SDI base package contains the SDI firmware as well as the SDI system default configuration to setup SDI.

Since there will be different firmware images for several device types, a separate SDI base package is for each `**<device type>**` is provided, e.g. "VR1".  |
| `dl.sdifw-sysconfig-X.X.X.tar` | Package to install SDI system default configuration without SDI firmware  |
| `dl.sdifw-sysconfig-remove-X.X.X.tar` | SDI config removal package to uninstall SDI system default configuration.  |


Please refer to chapter [Download package overview], which lists and describes the content of several SDI download packages.


These packages will be stored in Artifactory and are signed for different usage (development, productive).


# Configuration


## Configuration Files

SDI server uses several configuration files, which are installed with 

* **Default configuration** in SDI base packages and SDI config packages. 
    * For Fusion/Engage platform: see chapters [SDI base package] or [SDI config package] (for headless or standard mode) 
    * For Android platform: see chapter [SDI base package]
* **User configuration** in user config packages. 
    * For Fusion/Engage platform: see chapters [User config package]
    * For Android platform: see chapter [User config package]

The most configuration files are ADK component related and not directy used by SDI server. For details and content of these files, please refer to documentation of correspondig ADK component.

 SDI server related configuration files are described in the following chapters.


### config.json

Configuration file `config.json` contains miscellaneous settings related to SDI server. The file is JSON encoded and provides the following parameters:


| JSON section | Variable | Type | Description  |
|  -------- | -------- | -------- | -------- |
| `emvCallbacks` | `applicationSelectionMode` | numeric  | `**0**`: for handling EMV application selection callback inside SDI-Server (default)
`**1**`: for sending EMV application selection callbacks outside to application  |
| `emvCallbacks` | `ledMode` | numeric  | `**0**`: for handling CTLS LED callbacks inside SDI-Server
`**1**`: for sending CTLS LED selection callbacks outside to application (default)  |
| `adminMode` | `enabled` | boolean  | `**false**`: Administration mode for idle screen disabled (default). SDI in standard mode displays idle screen at startup with Info/Menu softkeys/keyhelpers (see region 5 of [idle.html]) and allows users to access SDI menus. Idle screen is locked and these buttons will disapear, if a SDI client has connected and sent the first SDI command. During runtime the idle screen might be unlocked again, if SDI detects errors with the COM interface, e.g. the port cannot be opened or another critical I/O error occured.
`**true**`: Administration mode for idle screen enabled. SDI in standard mode does not display region 5 of idle screen with Info/Menu softkeys/keyhelpers at startup (see [idle.html]). On devices with a keyboard users enable menu access by pressing key combination 2-5-8, which will Info/Menu softkeys/keyhelpers let appear on idle screen for `timeout` seconds (see below). Devices w/o keyboard (e.g. e280 with touch screen only) menu access is enabled by touching four display corners (clockwise). The intermediate timeout between the 4 touch presses is 3 seconds and the touch sequence must be started from begin, if this timeout occurs. Returning from menu, will disable menu access for idle screen immediately, thus, softkeys/keyhelpers are not displayed. Then, unlocking by key combination/touch sequence is required. Please note for enabled administration mode:

* SDI command [Display Idle Screen (24-07)] can use TLV tag `DFA155` to display the idle screen with Info/Menu softkeys/keyhelpers and to control menu access.
* Whenever an internal idle screen is displayed by SDI, the menu can be accessed with key combination or touch sequence (as described above), even a SDI client has connected or already sent an SDI command. In case the menu was entered, SDI is set to busy state, which means a `640A` response is returned for every SDI command. Of course, changing I/O settings might close an existing connection to a SDI client.

 |
| `adminMode` | `timeout` | numeric  | Time (in seconds) to enable menu access and how long Info/Menu softkeys/keyhelpers on idle screen are displayed (default: `30`). Starting the 4 corner touch sequence on touch-only devices will reset this timeout and whenever a corner touch is detected.  |
| `countertop` | `enabled` | boolean  | `**true**`: Enable Countertop support and allow to communicate with an EPP attached via USB (default).
`**false**`: Set to `false` to force Standalone mode, which disables SDI as Countertop, even an EPP is attached via USB. In this case command [Enable EPP (20-21)] will always fail with EPP connection status `00000006` (TCP/TLS handshake with EPP failed). On Engage, Standalone mode will disable setup of USB network with gadget mode. On Android, the USB network and gadget mode is handled by underlying Android OS and independent from SDI. On this platform, SDI can only ignore USB plugged events, which more or less affects the same, since SDI does no longer connect via TLS to EPP. Standalone mode (`enable` set to `false`) will ignore setting `auto_connect` below. 

This setting is ignored by SDI running as EPP. 

 |
| `countertop` | `auto_connect` | boolean  | `**true**`: Enable automatic TLS connection setup to EPP, when SDI is idle (default). Whenever an EPP is plugged to USB on a Countertop device (e.g. T650c), SDI tries to detect it and automatically connect to it. In this case EPP display shows the Welcome screen, directly after the devices were plugged.
`**false**`: Set to `false` to disable automatic TLS connection setup to EPP, when SDI is idle. In this case EPP display keeps message "Wait for connection" unless command [Enable EPP (20-21)] was sent to Countertop, finally, to connect to EPP manually. Even automatic TLS connection setup to EPP is disabled, the setup of USB network with gadget mode is not affected and only depends on setting `enabled` above. 

This setting is ignored by SDI running as EPP. 

 |


Example: 

```cpp
{
  "emvCallbacks":
  {
    "applicationSelectionMode": 1,
    "ledMode": 0
  },
  "adminMode": {
    "enabled": true,
    "timeout": 30
  },
  "countertop": {
    "enabled": true,
    "auto_connect": false
  }
}
```

File config.json is provided to SDI with installation of an [User config package]. Please refer to this chapter for more details and corresponding examples.


### COM_IF.CFG

`COM_IF.CFG` contains the configuration for the SDI server communication interface.

 SDI server supports serveral communication profiles, whereas a profile contains settings for one communication method. For more details, please refer to chapter [Getting Started], which lists and describes the supported communication methods of SDI server.

 For SDI headless mode the `COM_IF.CFG` file is provided by download package `dl.sdi_cfg-hdl-X.X.X-X-P2PE-X.X.X.tar` (see chapter [SDI config package]). This default file refers default connection profile `CONNECT_LO.XML` (part of [SDI base package]) to configure SDI server for using loopback device `localhost` with port `12000`.

 For SDI standard mode, file `COM_IF.CFG` is omitted in SDI download packages, thus, SDI server displays a configuration menu at first startup to let the user select, which communication method to use.
`COM_IF.CFG` can also be provided by download packages for user application (see chapter [User config package]). After startup, SDI server overtakes the corresponding file to writable home flash folder `/home/usr1/flash/com`, since it requires write access and it is changed, whenever user modifies settings in COM menu (standard mode).
There is an old and a new file format, which depends on the used SDI server version:

Example for old format (SDI server version <= 4.1.1): 

```cpp
CONNECT_LAN.XML
```

 The old configuration format just defines one text line, which contains the filename of the active connection profile, which is used to initialize ADKCOM component providing the communication interface for SDI server.

Old format is obsolete and applications should only use new format for recent SDI server versions.


Example for new format (SDI server version > 4.1.1): 

```cpp
{
  "profile": "CONNECT_LAN.XML",
  "whitelist": [
    "CONNECT_LAN.XML",
    "CONNECT_WIFI.XML",
    "CONNECT_COM1A.XML",
    "CONNECT_BT.XML"
  ],
  "ble_address": "",
  "ble_device": "",
  "bt_address": "00:1B:DC:06:81:31",
  "bt_device": "device-name",
  "com1a_address": "00:1B:DC:06:81:31",
  "com1a_device": "device-name",
  "com1a_mode": "bt-server",
  "com1a_btclient_reconnect_idle":true,
  "com1a_btserver_pairing_idle":true,
  "bt_own_device_name": "Verifone e285",
  "bt_num_paired": 5,
  "multi_connect_support": true
}
```

 SDI server versions > 4.1.1 use JSON as new configuration file format. SDI server is backward compatible and considers the old file to convert into new JSON format, therefore, integrators need not replace configuration file `COM_IF.CFG` with SDI server update. Value of variable `profile` stores the filename of the active communication profile, thus, it corresponds to the text line of the old file format. The following table describes the parameters supported by the new JSON format: 
| Parameter | Description  |
|  -------- | -------- |
| `profile` | ADKCOM profile filename of the active communication method. With activation of a communication method in COM menu of the SDI server, this variable is overwritten with the filename of the related ADK profile.  |
| `whitelist` | A whitelist of ADK profiles, which allows the customer to reduce the communication methods in the COM menu of the SDI-Server. If variable `whitelist` does not exist or is empty, all available communication supported by the device are displayed in the menu. If whitelist only contains communication methods, which are not supported by device, the whitelist is also ignored and all supported methods are displayed. Headless mode will ignore variable `whitelist`, since it is intended to reduce entries of COM menu in standard mode only. Variable `whitelist` is read-only and SDI server will not overwrite this value during runtime.  |
| `ble_address` | MAC address of the paired and selected Bluetooth (BT) device, which is used for BLE communication profile `CONNECT_BLE.XML`. This variable is written by SDI server, after the user has paired a BT device and selected BLE as active communication method in COM menu. Usually, this MAC address is not pre-configured in `COM_IF.CFG` part of a configuration download package, since BT devices can only be enabled by BLE pairing process, which requires user interaction (e.g. BT PIN confirmation).  |
| `ble_device` | Name of the paired and selected Bluetooth (BT) device, which is used for BLE communication profile `CONNECT_BLE.XML`. This variable is written by SDI server, after the user has paired a BT device and selected BLE as active communication method in COM menu. Usually, this device name is not pre-configured in `COM_IF.CFG` part of a configuration download package, since BT devices can only be enabled by BLE pairing process, which requires user interaction (e.g. BT PIN confirmation).  |
| `bt_address` | MAC address of the paired and selected Bluetooth (BT) device, which is used for BT PAN communication profile `CONNECT_BT.XML`. This variable is written by SDI server, after the user has paired a BT device and selected BT PAN as active communication method in COM menu. Usually, this MAC address is not pre-configured in `COM_IF.CFG` part of a configuration download package, since BT devices can only be enabled by BT pairing process, which requires user interaction (e.g. BT PIN confirmation).  |
| `bt_device` | Name of the paired and selected Bluetooth (BT) device, which is used for BT PAN communication profile `CONNECT_BT.XML`. This variable is written by SDI server, after the user has paired a BT device and selected BT PAN as active communication method in COM menu. Usually, this device name is not pre-configured in `COM_IF.CFG` part of a configuration download package, since BT devices can only be enabled by BT pairing process, which requires user interaction (e.g. BT PIN confirmation).  |
| `com1a_address` | MAC address of the paired and selected Bluetooth (BT) device, which is used for COM1A over BT with communication profile `CONNECT_COM1A.XML`. The address specifies the SPP server device, which SDI server connects in SPP client mode (see `com1a_mode`). The variable is written to `COM_IF.CFG` after the user has paired a BT device and selected COM1A with mode `bt-client` as communication method in COM menu. Usually, this MAC address is not pre-configured in `COM_IF.CFG` part of a configuration download package, since BT devices can only be enabled by BT pairing process, which requires user interaction (e.g. BT PIN confirmation).  |
| `com1a_device` | Name of the paired and selected Bluetooth (BT) device, which is used for COM1A over BT with communication profile `CONNECT_COM1A.XML`. The name represents the SPP server device, which SDI server connects in SPP client mode (see `com1a_mode`). The variable is written to `COM_IF.CFG` after the user has paired a BT device and selected COM1A with mode `bt-client` as communication method in COM menu. Usually, this device name is not pre-configured in `COM_IF.CFG` part of a configuration download package, since BT devices can only be enabled by BT pairing process, which requires user interaction (e.g. BT PIN confirmation).  |
| `com1a_mode` | Operation mode for COM1A with communication profile `CONNECT_COM1A.XML`: 
| Operation mode | Description  |
| `usb` | COM1A over USB (default). SDI server calls `[com_Connect()](libcom_8h.md#function-com-connect)` with communication profile `CONNECT_COM1A.XML` cyclically to poll for a new SPP connection. Since mode `usb` does not power the Bluetooth module, when the profile is activated, this mode is intended for usage with USB. Thus, no additional options for Bluetooth will be provided in COM menu, if this mode is selected.  |
| `bt-client` | COM1A over Bluetooth (SPP client). SDI server calls `[com_BTEnableVirtualChannels()](libcom_8h.md#function-com-btenablevirtualchannels)` to create the virtual channel to SPP server (see `com1a_address`). Once the SPP channel is up, SDI server calls `[com_Connect()](libcom_8h.md#function-com-connect)` with communication profile `CONNECT_COM1A.XML` to establish the connection. Additional options for Bluetooth will be provided for this mode in COM menu, e.g. the user can set the device discoverable and scan/pair from remote devices or enable automatic SPP reconnect, when SDI server runs idle w/o active connection (see `com1a_btclient_reconnect_idle`).  |
| `bt-client` | COM1A over Bluetooth (SPP server). Similar to mode `usb`, SDI server calls `[com_Connect()](libcom_8h.md#function-com-connect)` with communication profile `CONNECT_COM1A.XML` cyclically to poll for a new SPP connection. With activation of the profile, SDI server will power the Bluetooth module, thus, this mode is used to accept SPP connections over Bluetooth. Additional options for Bluetooth will be provided for this mode in COM menu, e.g. the user can set the device discoverable and scan/pair from remote devices or enable automatic scanning/pairing, when SDI server runs idle w/o active connection (see `com1a_btserver_pairing_idle`).  |


 |
|  -------- | -------- |
| `com1a_btclient_reconnect_idle` | If set to `true` for COM1A mode `bt-client` (see `com1a_mode`), SDI server will enable automatic SPP reconnect and call `[com_BTEnableVirtualChannels()](libcom_8h.md#function-com-btenablevirtualchannels)` in idle to setup the virtual SPP channel to a SPP server.  |
| `com1a_btserver_pairing_idle` | If set to `true` for COM1A mode `bt-server` (see `com1a_mode`), SDI server will set the device discoverable and enables automatic scanning/pairing from remote devices when SDI is idle and waits for a new connection. As soon as a virtual SPP channel is created and a new connection to SDI server is established, SDI server disables BT pairing again.  |
| `bt_own_device_name` | Friendly name used for the Bluetooth discovery (pairing) of this device. The maximal length is limited to 127 characters. The name is used for all Bluetooth related COM profiles (BT PAN, BLE and COM1A over BT). Default value is `SDI_<serial>`, whereas `<serial>` represents the serial number of the terminal.  |
| `bt_num_paired` | Maximal number of paired Bluetooth devices (used for BLE and COM1A over BT only). If the number of paired devices exceeds this value, SDI server automatically unpairs BT devices, which were chronologically paired at first. This will avoid blowing up the list of paired BT devices of the terminal. Default value is `2`, value `0` means no limit (automatic unpairing disabled).  |
| `multi_connect_support` | If this flag is set to `true`, SDI server will load protocol library `lib_mADK_PP_Prot_ipc.so`, which enables multi connection support with protocol type C for all VOS platforms. For more details see chapter [Protocol Type C: Multi connection support]. With the activation of multi connection support only TCP/IP related communication profiles will be supported. Other communication profiles for Bluetooth (e.g. as BT PAN, COM1A, BLE) or serial communication (USB and COM) will be disabled. These connection profiles can only be used with protocol library `lib_mADK_PP_Prot_com.so`, which is provided for VOS platforms only. 

Android devices (such as T650, P630, CM5, M440 and M424) will ignore this setting and always enable multi connection support, since library `lib_mADK_PP_Prot_com.so` is not available or usage makes no sense there. The same is for EPP mode, since `lib_mADK_PP_Prot_ipc.so` will provide required TLS support.


If the flag is set to `false`, SDI server will use protocol library `lib_mADK_PP_Prot_com.so` without multi connection support.

 If the flag is missing, SDI uses the following defaults to enable/disable multi connection support, which now depends on SDI operation mode: 
| SDI operation mode | Multi connection support  |
| Standard mode | disabled (use library `lib_mADK_PP_Prot_com.so`)  |
| Headless mode | enabled (use library `lib_mADK_PP_Prot_ipc.so`)  |


 |
|  -------- | -------- |



### sensitivetags.json

A couple of EMV tags are handled as sensitive data by the SDI Server (hard coded). With this configuration file it is possible to extend the number of sensitive tags depending on the different card technologies.

Example: 

```cpp
{
  "msr": [ ],
  "ct": [ "9F02","9A" ],
  "ctls:020000": [ "9A" ]
  "ctls:030000": [ "9A" ]
}
```

Sensitive data will be delivered by commands [getEncData (29-00)] and [getEncMsgData (29-01)] only! 

`sensitivetags.json` is not provided with SDI default configuration coming along with the [SDI base package] and [SDI config package]. If desired by user application, the file can be installed with a [User config package].


### whitelist.json

Basically the SDI Server do not deliver payment relevant sensitive data (e.g. a PAN) as clear text to an outside application. Such data elements are either encrypted or obfuscated to prevent unauthorized data access. There are cases where it is necessary to deviate from this rule (e.g. for loyalty cards). The SDI Server manages this with a list of PAN rages which are excluded from the secure data handling. SDI-Server performs a check of the first digits of the PAN with the PAN’s given in the whitelist. Also ranges of PANs are allowed.

Example: 

```cpp
[
"4377","88888","78787878","10000","600000-601099"
]
```

Sensitive data will not be delivered by fetchTrxTags command except they are white listed! 

`whitelist.json` is not provided with SDI default configuration coming along with the [SDI base package] and [SDI config package]. If desired by user application, the file can be installed with a [User config package].


### cardranges.json

The card range configuration serves to realize card related checks inside the SDI Server because the outside application will not get all relevant data in clear. Following attributes can be used to configure a card range:


| Attribute  | Description   |
|  -------- | -------- |
| `high` | Highest BIN range of the card range   |
| `low` | Lowest BIN range of the card range   |
| `maxPanLength` | Maximum PAN length for the card range   |
| `minPanLength` | Minimum PAN length for the card range   |
| `products` | Product/brand names used with this card range   |
| `expiryChecking` | true: enable expiration date check for the card range

 false: disable expiration date check for the card range   |
| `luhnChecking` | true: enable luhn check for the card range

 false: disable luhn check for the card range   |
| `serviceCodeCheck` | true: enable service code check for the card range

 false: disable service code check for the card range   |
| `startDateChecking` | true: enable activation date check for the card range

 false: disable activation date check for the card range   |
| `startDatePosition` | Position of the card activation date inside the track 2 data, beginning from the filed separatopr after the PAN   |
| `startDateFormat` | Format of the activation date. Possible values are: "YYMM", "MMYY" or "Period". "Period" refers to the number of months whre the card is active, to be substracted from the expiration date in order to retreive the activation date   |
| `defaultExpiryDate` | optional (only valid in headless mode): Use this date on manual card entry instead of entering an expiry date (format: MMYY)   |
| `skipCvv` | optional (only valid in headless mode): true: Skip the entry of CVV on manual card data entry

 false: CVV has to be entered   |
| `panMasking` | optional: PAN masking mode in response messages. Possible values are: "6-4fix", "6-4var", "8-2fix", "8-2var" or "8-2var-a". For more details refer to the following PAN Masking Modes section   |



**PAN Masking Modes:**


* **6-4fix**

First 6 and last 4 digits retained (default, if panMasking is not set) 
| #  | Pan Length  | Masking   |
|  -------- | -------- | -------- |
| 1  | 12  | 6-aa-4   |
| 2  | 13  | 6-aaa-4   |
| 3  | 14  | 6-aaaa-4   |
| 4  | 15  | 6-aaaaa-4   |
| 5  | 16  | 6-aaaaaa-4   |
| 6  | 17  | 6-aaaaaaa-4   |
| 7  | 18  | 6-aaaaaaaa-4   |
| 8  | 19  | 6-aaaaaaaaa-4   |


* **6-4var**

First 6 and last 4 or more digits retained depending on the length of the PAN 
| #  | Pan Length  | Masking   |
|  -------- | -------- | -------- |
| 1  | 12  | 6-aa-4   |
| 2  | 13  | 6-aaa-4   |
| 3  | 14  | 6-aaaa-4   |
| 4  | 15  | 6-aaaaa-4   |
| 5  | 16  | 6-aaaaaa-4   |
| 6  | 17  | 6-aaaaaa-5   |
| 7  | 18  | 6-aaaaaa-6   |
| 8  | 19  | 6-aaaaaa-7   |


* **8-2fix**

First 8 and last 2 digits retained 
| #  | Pan Length  | Masking   |
|  -------- | -------- | -------- |
| 1  | 12  | 8-aa-2   |
| 2  | 13  | 8-aaa-2   |
| 3  | 14  | 8-aaaa-2   |
| 4  | 15  | 8-aaaaa-2   |
| 5  | 16  | 8-aaaaaa-2   |
| 6  | 17  | 8-aaaaaaa-2   |
| 7  | 18  | 8-aaaaaaaa-2   |
| 8  | 19  | 8-aaaaaaaaa-2   |


* **8-2var**

First 8 and last 2 or more digits retained depending on the length of the PAN 
| #  | Pan Length  | Masking   |
|  -------- | -------- | -------- |
| 1  | 12  | 8-aa-2   |
| 2  | 13  | 8-aaa-2   |
| 3  | 14  | 8-aaaa-2   |
| 4  | 15  | 8-aaaaa-2   |
| 5  | 16  | 8-aaaaaa-2   |
| 6  | 17  | 8-aaaaaa-3   |
| 7  | 18  | 8-aaaaaa-4   |
| 8  | 19  | 8-aaaaaa-5   |


* **8-2var-a**

Same as 8-2var except for PAN length 16 first 6 and last 4 digits retained (for MasterCard and Visa) 
| #  | Pan Length  | Masking   |
|  -------- | -------- | -------- |
| 1  | 12  | 8-aa-2   |
| 2  | 13  | 8-aaa-2   |
| 3  | 14  | 8-aaaa-2   |
| 4  | 15  | 8-aaaaa-2   |
| 5  | 16  | 8-aaaa-4   |
| 6  | 17  | 8-aaaaaa-3   |
| 7  | 18  | 8-aaaaaa-4   |
| 8  | 19  | 8-aaaaaa-5   |



Example: 

```cpp
{
    "details": {
        "name": "PaymentCore Template",
        "templateVersion": "1.0.2",
        "generated": "2021-07-7T11:28:00.603+13:00"
    },
    "defaults": {
        "minPanLength": 13,
        "maxPanLength": 19,
        "expiryChecking": true,
        "serviceCodeCheck": true,
        "luhnChecking": true,
        "startDateChecking": false,
        "startDatePosition": 8,
        "startDateFormat": "YYMM"
    },
    "staticRanges": [
        {
            "low": "000000000000",
            "high": "999999999999",
            "products":["DEBIT"],
            "minPanLength": 14,
            "maxPanLength": 19,
            "expiryChecking": true,
            "serviceCodeCheck": true,
            "luhnChecking": true,
            "panMasking": "6-4fix"
        },
        {
            "low": "18000",
            "high": "18009",
            "products":["JCB"],
            "minPanLength": 13,
            "maxPanLength": 16,
            "expiryChecking": true,
            "serviceCodeCheck": true,
            "luhnChecking": true
        },
        ...  // n more entries
    ],
    "dynamicRanges": [
        {
            "low": "5116545113",
            "high": "5116545113",
            "products":["DEBIT", "MASTERCARD-DEBIT"],
            "minPanLength": 13,
            "maxPanLength": 19,
            "expiryChecking": true,
            "serviceCodeCheck": true,
            "luhnChecking": true
        },
        {
            "low": "423953000",
            "high": "423953999",
            "products":["DEBIT", "VISA-DEBIT"],
            "minPanLength": 13,
            "maxPanLength": 19,
            "expiryChecking": true,
            "serviceCodeCheck": true,
            "luhnChecking": true
        },
        ... // n more entries
    ]
}
```

Each card range has to be configured as element of a JSON array which can be called either `staticRanges` or `dynamicRanges`.

These are customer specific range categories and are not relevant for the matching and validation algorithm.

The `defaults` sections can contain default values for several range attributes which should be used by the SDI Server for ranges where a given attribute is missing.

Following range attributes can be configured in the `defaults` section:

* `maxPanLength`
* `minPanLength`
* `expiryChecking`
* `luhnChecking`
* `startDateChecking`
* `serviceCodeCheck`
* `startDatePosition`
* `startDateFormat`


The `details` section provides general information about the validation table such as `name`, `templateVersion` and `generated` to give the name, the version and the generation date of the validation table. The `details` section is returned by the SDI Server with [getValidationInfo (29-06)] command.
`cardranges.json` is not provided with SDI default configuration coming along with the [SDI base package] and [SDI config package]. If desired by user application, the file can be installed with a [User config package].


### sccfg.json

`sccfg.json` contains the configuration for the ADKSEC security service, which is used by the SDI Server for secure operations.

 The file is provided with SDI default configuration coming along with [SDI base package] and it contains several security schemes: 

* ADE (SRED compliant) scheme used for cardholder sensitive data encryption 
* PED scheme for PIN block encryption (online transactions) and host message MAC calculation 
* E2E scheme for using VSS script `authenticate.vso`, which allows secure SDI message authentication/encryption 

If desired by user application, `sccfg.json` can be installed with a [User config package] to overload default file of [SDI base package]. 

These security schemes require several keys loaded to device (see chapter [Required Keys] for more details).


Example sccfg.json (with one security scheme for ADE): 

```cpp
{
  "adksecconfig":
  {
    "hosts":
    [
      {
        "name": "ADE-DUKPT",
        "description": "this is ADE DUKPT configuration",
        "scheme": "schemeADE",
        "module": "ADE",
        "settings":
        {
          "encMode": "MODE_CBC",
          "IVType":  "ZERO",
          "padding": "NONE"
        }
      }
    ],
    "serviceCfg":
    {
      "secSchemes":
      [
        {
          "name": "schemeADE",
          "settings":
          {
            "padding": "PKCS7",
            "KeyManagementType": "DUKPT",
            "KeyAddressTable":
            [
              {"description": "| 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8 |  9 | 10 | <- KeySetId (10 slots)"},
              {"encryptData": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
            ]
          }
        }
      ]
    }
  }
}
```


### epp.json

This JSON configuration file is used for 2 purposes:



1. Enable EPP mode:

 In case the `epp.json` is installed to SDI config folder `sdi/epp`, it configures SDI server to run as EPP (External PINPad). If the file doesn't exist, SDI server uses defaults and runs as Standalone (or as a Countertop, if an EPP is connected).

 It contains the following settings: 
| Attribute | Datatype | Description  |
|  -------- | -------- | -------- |
| `epp_enabled` | Boolean  | Set to `true` to enable EPP mode.

Default: `false` (Standalone/Countertop)  |


The file can be installed with download package `dl.sdi_cfg-epp-X.X.X-X-P2PE-X.X.X.tar` optionally, which comes along with the SDI release as a [SDI config package] (for Engage). So far, SDI Service on Android does not support EPP mode.


Example: 

```cpp
{
   "epp_enabled":true
}
```


2. Configure Countertop TLS client:

 File `epp.json` comes along with the SDI base package, see [SDI base package] (for Engage) or [SDI base package] (for Android). It is installed to SDI config folder `sdi/ct` and contains configuration settings for SDI as Countertop to connect to an EPP (External PINPad). The file is ignored, if SDI has enabled EPP mode (see above).

 It contains the following settings: 
| Attribute | Datatype | Description  |
|  -------- | -------- | -------- |
| `epp_addr` | String  | IP address or host name used by Countertop to connect to EPP.

Default: "192.0.2.8"  |
| `epp_port` | Integer  | IP port used by Countertop to connect to EPP.

Default: 12000  |
| `epp_ca_dev` | String or Array of Strings  | CA certificate location or list of CA certificates used to authenticate the EPP (OSdev/CPdev unit). Usually this refers the Verifone Development AuthEx/AuthN CA.  |
| `epp_ca_prod` | String or Array of Strings  | CA certificate location or list of CA certificates used to authenticate the EPP (productive unit). Usually this refers the Verifone Productive AuthEx/AuthN CA.  |


Example for Engage devices: 

```cpp
{
   "epp_addr":"192.0.2.8",
   "epp_port":12000,
   "epp_ca_dev": "/mnt/flash/root/alt_crt",
   "epp_ca_prod": "/mnt/flash/root/alt_crt"
}
```

Please note that Engage development units might need to install `dl.vos.vos2.alt_crt_patch-2.0.0-DEV.tgz` to install the Verifone Development AuthEx/AuthN CA. The package is available for developers on this [Confluence page](https://confluence.verifone.com:8443/pages/viewpage.action?spaceKey=GR&title=Setting+up+DEV+devices+for+external+PINPad+support).


Example for Android and VOS3 devices: 

```cpp
{
   "epp_addr":"192.0.2.8",
   "epp_port":12000,
   "epp_ca_dev":["65C95907166F14DA", "2AEBEFCF9DEB55DD", "45B78D9C6C904E59"],
   "epp_ca_prod":["53DAC34CE4D842E0", "60A422EBE01285D1", "08BC2390B04DC228"]
}
```

Android devices use certificate serial numbers (as hex dump) to refer corresponding certificates in the K81 certificate store. 



### acl.json

This file contains configuration for [SDI access control] with command filters on application protocol level.

If desired by user application, file `acl.json` can be installed with an user config package to overload ACL default file of the SDI base package. For more details see please refer to chapters [Software for VOS/VOS2 and VOS3] and [Software for Android], which provide a package overview for the corresponding platform.

**Content description**

There are 2 different root elements, which are used as rule sections in an ACL file:

* Section `"system"`: List of rules for system services with highest priority. This section is always active and only supported by default ACL configuration file, thus, it will be ignored in user ACL configuration.
* Section `"clients"`: List of rules for user applications. This section is supported for both, in default and user ACL configuration file. A valid section `"clients"` in user ACL file will disable the section in default ACL file and overlay it completely.


Both root elements contain an array of client description objects. Each client description object must consist of the following elements: 
| Attribute | Format | Description  |
|  -------- | -------- | -------- |
| `client` | String of format

<type:identifier> | Type of this client and the client identifier separated by ':'

 Following types with its identifiers are supported: 
| Type | Identifier  |
| `package` | Package name, e.g. `com.verifone.sampleapp`. Wildcard character '*' can be used to allow all packages. No partial wildcards supported (e.g. com.verifone.*). Type `package` is supported on Android platform only. 

 |
| `user` | Local user name, e.g. `usr1` or `sys12`. Wildcard character '*' can be used to allow all users. No partial wildcards supported (e.g. `sys*`). Type `user` is supported on Fusion/Engage and VOS3 platform only. 

 |
| `tcp` | IP address, e.g. `127.0.0.1` or `192.168.47.11`. Wildcard character '*' can be used to allow all network clients. No partial wildcards supported (e.g. `192.168.0.*`).  |
| `tls` | IP address, e.g. `192.0.2.7`. Wildcard character '*' can be used to allow all clients connected with TLS. No partial wildcards supported (e.g. `192.0.2.*`).  |



Attribute `client` is mandatory.  |
|  -------- | -------- | -------- |
| `description` | String | Textual description for this client policy (attribute `description` is optional, ignored by SDI)  |
| `allowed` | Array | Array of strings describing allowed CLA-INS sets for this client (whitelist). Wildcard '*' is allowed for CLA and INS (`*-*`) or INS only (e.g. `20-*`).

 Attribute `allowed` is mandatory and must contain entries.  |
| `security-mode` | String | SDI security mode (`"trusted"`/`"untrusted"`)

 Default: `"untrusted"` (if attribute `security-mode` missing)  |


Basically, invalid rules (with missing mandatory data or containing invalid attributes) will skip the complete user ACL file, thus, SDI will fallback and apply section `"clients"` from the default ACL file. Rules for unknown packages and users are skipped. Please refer to chapter [SDI access control] for more details and how ACL file is processed by SDI.


Default ACL file for Engage/Fusion (part of [SDI base package]): 

```cpp
{
  "clients":
  [
    {
      "client": "user:*",
      "description":"local payment applications can use all SDI functions and are trusted",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:127.0.0.1",
      "description":"local TCP applications can use all SDI functions and are trusted (current default)",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:[::1]",
      "description":"local TCP applications (IPv6) can use all SDI functions and are trusted (current default)",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:192.0.2.5",
      "description":"local applications (e.g. CM5) on internal private network can use all SDI functions and are trusted (current default)",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:*",
      "description":"remote applications can use all SDI functions, but are untrusted (current default)",
      "allowed" : ["*-*"],
      "security-mode": "untrusted"
    },
    {
      "client": "tls:192.0.2.7",
      "description":"countertop terminal on private USB ECM network with TLS can use all SDI functions of EPP and is trusted (current default)",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    }
  ]
}
```

This ACL file specifies the default access rules to guarantee backwards compatibility to old SDI versions on Engage/Fusion:

* Allow all SDI commands w/o restrictions for local applications, which already access SDI via Unix Domain Socket (type `user`).
* Allow all SDI commands w/o restrictions for local applications, which access SDI via TCP/IP on local loopback.
* Allow all SDI commands w/o restrictions for local applications, which access SDI via internal private network (e.g. CM5, M424, M440).
* Allow all SDI commands for remote SDI clients, but restrict them with security-mode "untrusted".
* Allow all SDI commands w/o restrictions for a Countertop, which accesses SDI as an EPP via private USB ECM network with TLS.



 Default ACL file for VOS3 (part of [SDI base package]): 

```cpp
{
  "clients":
  [
    {
      "client": "user:*",
      "description":"local payment applications can use all SDI functions and are trusted",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:127.0.0.1",
      "description":"local TCP applications can use all SDI functions and are trusted (current default)",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:[::1]",
      "description":"local TCP applications (IPv6) can use all SDI functions and are trusted (current default)",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:*",
      "description":"remote applications can use all SDI functions, but are untrusted (current default)",
      "allowed" : ["*-*"],
      "security-mode": "untrusted"
    },
    {
      "client": "tls:192.0.2.7",
      "description":"countertop terminal on private USB ECM network with TLS can use all SDI functions of EPP and is trusted (current default)",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    }
  ]
}
```

This ACL file specifies the default access rules to guarantee backwards compatibility to old SDI versions on VOS3:

* Allow all SDI commands w/o restrictions for local applications, which already access SDI via Unix Domain Socket (type `user`).
* Allow all SDI commands w/o restrictions for local applications, which access SDI via TCP/IP on local loopback.
* Allow all SDI commands for remote SDI clients, but restrict them with security-mode "untrusted".
* Allow all SDI commands w/o restrictions for a Countertop, which accesses SDI as an EPP via private USB ECM network with TLS.



 Default ACL file for Android (part of [SDI base package]): 

```cpp
{
  "system":
  [
    {
      "client": "package:com.verifone.cardreader",
      "description":"Android cardreader service can use all SDI functions and is trusted",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    }
  ],
  "clients":
  [
    {
      "client": "package:*",
      "description":"local Android payment applications can use all SDI functions and are trusted",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:127.0.0.1",
      "description":"local TCP applications can use all SDI functions and are trusted (current default)",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:[::1]",
      "description":"local TCP applications (IPv6) can use all SDI functions and are trusted (current default)",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    },
    {
      "client": "tcp:*",
      "description":"remote applications can use all SDI functions, but are untrusted (current default)",
      "allowed" : ["*-*"],
      "security-mode": "untrusted"
    }
  ]
}
```

This ACL file specifies the default access rules to guarantee backwards compatibility to old SDI versions:

* Allow system cardreader service w/o restrictions, which already uses SDI Unix Domain Socket (type `package`).
* Allow all SDI commands w/o restrictions for local applications, which access SDI via Unix Domain Socket (type `package`).
* Allow all SDI commands w/o restrictions for local applications, which access SDI via TCP/IP on local loopback.
* Allow all SDI commands for remote SDI clients, but restrict them with security-mode "untrusted".



 Example user configuration for Android: 

```cpp
{
  "clients":
  [
    {
      "client": "package:com.verifone.payapp",
      "description":"Android payment application that can use all SDI functions and is trusted",
      "allowed": ["*-*"],
      "security-mode": "trusted"
    }
  ]
}
```

This sample user ACL file overloads section `"clients"` of the default ACL files as follows:

* Allow all SDI commands w/o restrictions for local application `com.verifone.payapp`, which access SDI via Unix Domain Socket (type `package`).
* Other applications accessing SDI via TCP/IP (type `tcp`) or Unix Domain Socket (type `package`) are disabled (due to missing rules)
* Finally, Android system cardreader service can access SDI via Unix Domain Socket, since section `"system"` of the default ACL file is still active.


## Required Keys

The SDI-Server needs keys for:

* PIN block encryption (PED)
* Cardholder sensitive data encryption (ADE)
* Message encryption (E2E)

This keys can be loaded with VRK. The corresponding files can be requested by the security team. Please provide the security team beside the serial number of the test device the following information.


| Key  | Slot  | KSN   |
|  -------- | -------- | -------- |
| PED  | 0  | FF FF 98 76 54 11 11 E0 00 00   |
| ADE  | 0  | FF FF 98 76 54 22 22 E0 00 00   |
| E2E  | DUK  | FF FF 98 76 54 33 33 E0 00 00   |



## Customizing UI of SDI Server

With version 4.0.0 the User Interface (UI) of SDI server was basically refactured, in order to allow customers to setup an individual look and feel for UI frontend of SDI server, which is active in SDI standard user mode (see chapter [Introduction]). For UI rendering SDI server uses ADKGUI, which provides a HTML based API to display user dialogs and screen contents (for more details, please refer to ADKGUI documentation). Cascading Style Sheets (CSS) files specify the presentation and appearance of HTML elements (e.g. sizes, colors and fonts) in the several SDI dialogs. In addition, a defined set of images are referred by the different HTML dialogs, e.g. to add customer logos or button images. This chapter describes how to use own resource files and how to setup a customized UI design for applications running SDI server in standard user mode.

SDI standard mode with UI support is recently supported for VOS, VOS2 and VOS3 devices only. Therefore, the following chapters will refer to these platforms only and cannot be applied for others (e.g. Android).


### Default UI resource files

Standard SDI server implements a default UI design, which is provided by resource files in `www/sdi` folder for ADKGUI. These files come along with the SDI server config packages for standard mode `dl.sdi_cfg-std-X.X.X-X-P2PE-X.X.X.tar` and are listed as follows: 

* **HTML files**

HTML files specify the basic layout and structure of dialogs. In addition, these files define the API for SDI server to inject dialog contents (e.g. texts) or to specify those elements to be displayed.

SDI server recently uses 5 HTML dialog files:
    * `dialog.html:` Standard dialog to display text messages and/or images. Additionally, this dialog is used for user inputs. The dialog also allows to enable softkeys or hardkeys (on keypad) to request confirmation from the user. Internal structure and CSS classes for this HTML dialog is described in chapter [dialog.html].
    * `menu.html:` Dialog to display a menu to request the user to select an option. Internal structure and CSS classes for this HTML dialog is described in chapter [menu.html].
    * `idle.html:` Dialog to display the idle screen. This dialog appears directly after SDI Server startup as first screen or when command [Display Idle Screen (24-07)] is received. The idle screen may contain additional selection options, e.g. a softkey to enter menu of SDI server. Internal structure and CSS classes for this HTML dialog is described in chapter [idle.html].
    * `pin.html:` Dialog to display a PIN prompt. PIN input with hardkeys is preferred, if the terminal as a physical keypad. For devices with touch screen and no physical keypad, the PIN entry with softkeys via touch screen is enabled. Internal structure and CSS classes for this HTML dialog is described in chapter [pin.html].
    * `nav_pin.html:` Dialog to display PIN prompt with enabled navigator mode (PIN input for visually impaired persons on touch screen, for more details refer to ADKGUI documentation). Internal structure and CSS classes for this HTML dialog is described in chapter [nav_pin.html].

Basic SDI server download package `dl.sdi_cfg-std-X.X.X-X-P2PE-X.X.X.tar` installs these files into ADKGUI resource folder `www/sdi/default` under user `usr1` (VOS/VOS2) or `sys_sdi` (VOS3), which is relative to working directory of SDI server binary. Subfolder `default` is device generic and is used for all device types, which do not require a own set of HTML files. Terminal specific HTML files would be stored in terminal specific subfolder (e.g. `128x64M16N` for UX100, see ADKGUI documentation for details).
The default SDI HTML files as listed above define the basic UI layout, further, the files define an internal dialog API so that SDI server can pass data for the display. This API is essential to run SDI server with UI and must be kept compatible for later SDI versions. Therefore, developers are not allowed to overload existing SDI default HTML files, but it is possible install additional CSS files images to implement a custom UI design for these HTML files (see chapter [HTML structure and CSS classes]). Please also note that SDI command [Handle Display (24-03)] supports displaying own custom dialogs with a HTML template, which can be installed with an user config package (see chapter [Install UI user config packages]).
On VOS/VOS2 it is recommended for existing SDI server installations to use an [User config package], instead of modifying default default UI resource files coming along with [SDI base package] or [SDI config package]. The reason is SDI server will move to system user `sys8` with ADK 4.8 (security requirement) and installation to this location will require special system signing cards. Therefore, SDI users won't be able any longer able to modify these packages. Finally, on VOS3 SDI server will always run as system user `sys_sdi`, thus, also system signing privileges are required for these packages and there is no other option than using an [User config package] to customize UI of SDI.


* **CSS files**

CSS files are used to separate the presentation and appearance of dialog elements from the HTML files. Since SDI server supports multiple device types having different hardware capabilities (e.g. screen resolution or color/monochrome screens), several CSS files with name `style.css` are located in device specific subfolders (e.g. 854x480C15T for M400, see ADKGUI documentation for details). This allows to choose device individual styles, which depend on screen resolution (e.g. font sizes). Furthermore, CSS classes can change appearance by specifying colors for fonts and background or by adding background images to elements.

Developers can write own CSS files to implement CSS classes, which are used by the several HTML dialogs. Chapter [HTML structure and CSS classes] describes the HTML structure of each dialog and which CSS classes can be implemented for the several HTML elements. Finally, the CSS files are installed with an [User config package], also described in chapter [Install UI user config packages].


* **Images**

HTML files also refer serveral images files, which come along with the SDI server download package. The default image files are installed into resource subfolder `www/images`, and most of them can be overloaded for customization:
    * `client_logo.png:` Client logo (Verifone) displayed in dialog header area (image overloadable)
    * `led_config.png:` Virtual LED configuration image for ADKGUI displayed in SDI servers LED area (image overloadable)
    * `tab_small.png` and `tab_small_bw.png:` CTLS logo used for contactless card tab dialog (image not overloadable, since it must fullfil EMVCo requirements on size, resolution and visibility)
    * `question.png:` Image logo used for question dialogs (image overloadable)
    * `warning.png:` Image logo used for warning/attention dialogs (image overloadable)
    * `error.png:` Image logo used for error dialogs (image overloadable)
    * `success.png:` Image logo used for success dialogs (image overloadable)
    * `process.png:` Image logo used for processing/wait dialogs (image overloadable)
    * `submenu.png:` Arrow icon used in `menu.html` indicating that the menu item will display a submenu
    * `submenu_active.png:` Arrow icon used in `menu.html` for a pre-selected submenu item (repaces `submenu.png` on item selection)
    * `radio_checked.png:` Checked radio control icon used in `menu.html` indicating that the menu item is recently enabled
    * `radio_unchecked.png:` Unchecked radio control icon used in `menu.html` indicating that the menu item is recently disabled
    * `buttons/clear.png`: Image added to clear softkey in control bar (image overloadable)
    * `buttons/x.png`: Image added to cancel softkey in control bar (image overloadable)
    * `buttons/o.png`: Image added to enter softkey in control bar (image overloadable)
    * `buttons/down.png`: Image added to down softkey in control bar (image overloadable)
    * `buttons/up.png`: Image added to up softkey in control bar (image overloadable)
    * `buttons/info.png`: Image added to info softkey in control bar of idle screen (image overloadable)
    * `buttons/menu.png`: Image added to menu softkey in control bar of idle screen (image overloadable)
    * `helpers/clear.png`: Image added to helper entry in control bar to signal user that the clear hardkey can be pressed (image overloadable)
    * `helpers/x.png`: Image added to helper entry in control bar to signal user that the cancel hardkey can be pressed (image overloadable)
    * `helpers/o.png`: Image added to helper entry in control bar to signal user that the enter hardkey can be pressed (image overloadable)
    * `helpers/down.png`: Image added to helper entry in control bar to signal user that the down hardkey `#` can be pressed (image overloadable)
    * `helpers/up.png`: Image added to helper entry in control bar to signal user that the up hardkey `*` can be pressed (image overloadable)
    * `helpers/info.png`: Image added to helper entry in control bar of idle screen to signal user that the cancel hardkey can be pressed to show info about SDI server (image overloadable)
    * `helpers/menu.png`: Image added to helper entry in control bar of idle screen to signal user that the enter hardkey can be pressed to show the menu with communication interface settings of SDI server (image overloadable)

Control bar displays either softkeys or key helper entries. For devices with touch capability dialogs prefer to use softkeys. A softkey can be pressed on touch screen or via hardkey, which is assigned as accesskey for this softkey. For devices without touch, the helper entry signals the user that a correspondig hardkey on keypad can be pressed. Chapter [HTML structure and CSS classes] describes the control bar in detail.

Default image files of SDI server can be overloaded by installing an [User config package], which is described in chapter [Install UI user config packages].


* **UI text catalogs**

For multi-language support SDI server uses default UI text catalogs. Basically, one UI text catalog is loaded for a corresponding system language (see [Supported System Languages]). In addition, SDI server might switch to another language of the cardholder during transaction temporarilly. The text catalogs are installed with the [SDI config package] (standard mode) for the following system languages:
    * `sdi-da.ctlg`: Danish language
    * `sdi-de.ctlg`: German language
    * `sdi-en.ctlg`: English language
    * `sdi-es.ctlg`: Spanish language
    * `sdi-fr.ctlg`: French language
    * `sdi-he.ctlg`: Hebrew language
    * `sdi-it.ctlg`: Italian language
    * `sdi-nl.ctlg`: Dutch language
    * `sdi-pt.ctlg`: Portuguese language
    * `sdi-sv.ctlg`: Swedish language
    * `sdi-tr.ctlg`: Turkish language
Default UI text catalog files of SDI server (as listed above) cannot be replaced, but it is possible to add a custom UI text catalog for each language. In special cases, SDI server will prefer the custom text catalog so that specific texts in dialogs can be replaced. For more details please refer to chapter [Custom UI text catalogs]. 



### HTML structure and CSS classes

As mentioned in the previous chapter, SDI server uses several HTML files for the different dialogs. The following pictures illustrate the internal structure of these HTML files. For better understanding the dialogs are devided into regions having a colored frame with a number. Below each picture a table lists and describes the CSS classes, which the several dialogs use from the CSS file.



#### dialog.html

![dialog.png](.//dialog.png)dialog.html: Displays text messages, images and user inputs

An outer `<table>` element (with 5 rows and 1 column) devides the HTML document into 5 regions. These regions are size dynamic and specify the basic structure of the dialog. CSS access on these regions is restricted, since regions can be visible or not depending on parameters passed by SDI server. The content of each region is accessable via CSS and developers can implement following CSS classes to modify appearance of the visible HTML elements in this region:

Region 1: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `ledarea` | `input` | Area containing the CTLS LEDs, which is represented by an `<input>` element with attribute `type='led'`. This element loads the image `led_config.png` containing the virtual LEDs for CTLS. Developers can implement CSS class 

```
input.ledarea
```

 to specify the style for this element. The LED area is visible, if the device has no physical CTLS LEDs and if LEDs weren't disabled by command [Activate LEDs (24-09)]. In case of a disabled LED area, region 1 is removed and gets a height of `0px`.   

 |


Region 2: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `header` | `div` | Division element containing the dialog header with the client logo or a text line. Developers can implement CSS class 

```
div.header
```

 to specify the style for this element. SDI server might disable the header area by parameter via dialog API. In this case, region 2 is removed and gets a height of `0px`. In addition, SDI server may pass a text for the header area, which will omit the client logo in favor of the text.


The following cascaded CSS classes can be used: 

```
div.header.logo
```

 This CSS subclass allows to specify individual style for `<div>` element containing the client logo image, whereas CSS class `div.header` is used for both, text and logo header.   |
| `header` | `img` | Image element, which loads the client logo image `client_logo.png`. Developers can implement CSS class 

```
img.header
```

 to specify the style for this element.    |



Region 3: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `image` | `td` | Table data element containing an arbitrary image (e.g. CTLS tap logo), which is displayed on top of text area (region 4). Developers can implement CSS class 

```
td.image
```

 to specify the style for this element. For instance, this class can be used to specify content height portion of image area (region 3) in relation to text area (region 4).

If SDI server does not pass content for the text area (region 4), the following cascaded CSS class is used: 

```
td.image.notext
```

 This CSS subclass allows to specify an individual region style in dialogs only displaying an image, e.g. to stretch image area (region 3) to maximal available content height. If SDI server does not pass an image via dialog API, region 3 is removed and the text area (region 4) expands to maximal available content height.   

 |


Region 4: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `text` | `div` | Division element to display arbitrary HTML content, usually a text message with or without text input fields. Developers can implement CSS class 

```
div.text
```

 to specify the style for this element.The internal HTML content of this `div` element (region 4) is not part of `dialog.html` and passed by SDI server via dialog API. Nevertheless, developers can implement generic element styles to get a unique presenation for HTML elements in this area (e.g. for `<input>` elements used for text input).


For simple text message dialogs without input fields, SDI server usually just adds normal text with line breaks `<br>`. SDI server expects that these messages are displayed in the middle of the display (horizontal and vertical centered). In some cases SDI server recommends to present the message left/right and top/bottom aligned, therefore, `dialog.html` might use additional CSS classes to enable alignment of the text message: 

```
div.text.left
div.text.right
div.text.top
div.text.bottom
```

 In addition, the following CSS classes should be implemented to allow combination of alignments: 

```
div.text.left.top
div.text.left.bottom
div.text.right.top
div.text.right.bottom
```

 |


Region 5: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `controlbar` | `table` | A table element (with 1 row and variable number of columns), which contains elements for the control bar. The control bar either contains softkey buttons or key helpers to indicate, which hardkeys on the keypad can be pressed. Key helpers usually are displayed on devices without touch screen capability.![softkeys.png](.//softkeys.png)Softkeys used for devices with touch screen capability
![helpers.png](.//helpers.png)Helpers for hardkeys used for devices without touch screen capabilityDescriptions of the button/helper entries according its sequential order above: 

* **Cancel:** User can press this softkey or cancel key on keypad to abort the dialog 
* **Up:** User can press this softkey or * key on keypad to move up focus in the dialog (in case of multiple text input fields in the dialog) 
* **Down:** User can press softkey or # key on keypad to move down focus in the dialog (in case of multiple text input fields in the dialog) 
* **Clear:** User can press this softkey or clear key on keypad to clear characters in an input field having the focus. SDI server also can enable this entry for non-input dialogs, in this case the dialog is finished and returns with the internal result code for this softkey/hardkey. 
* **Enter:** User can press this softkey or enter key on keypad to confirm the dialog 


Depending on parameters passed by SDI server via dialog API, the control bar entries (softkeys or key helpers) are added or not. The HTML content for each entry is added to a table data element `<td>` and its width is calculated according the number of entries in the control bar. The control bar always expands to the maximal dialog width (screen width). If no entries are added, the control bar (region 5) is removed and gets a height of `0px`.


Developers can implement CSS class 

```
table.controlbar
```

 to specify the style for this element (e.g. a background color for control bar area). Each key helper entry is separated by an additional `<td>` element (separator). This element allows to insert additional space between the entries (like the white line as shown in the picture).  

 |
| `softkey` | `td` | Table data element, which contains HTML content for a softkey in the control bar. The HTML content consists of a `<button>` element (described below). Developers can implement CSS class 

```
td.softkey
```

 to specify the style for this element (e.g. a background color, which is visible if the added `<button>` has a smaller size than this `<td>` element).

In addition, the following cascaded CSS classes can be used: 

```
td.softkey.cancel
td.softkey.up
td.softkey.down
td.softkey.clear
td.softkey.enter
```

 These CSS subclasses allow to specify individual styles for each softkey table data element (e.g. individual background colors for each softkey).   |
| `softkey` | `button` | Button element used for a softkey. Additional HTML content is added as `<div>` element (decribed below). Developers can implement CSS class 

```
button.softkey
```

 to specify the style for this element (e.g. a background color, which is visible if the added `<div>` is transparent or has a smaller size than this `<button>` element.

In addition, the following cascaded CSS classes can be used: 

```
button.softkey.cancel
button.softkey.up
button.softkey.down
button.softkey.clear
button.softkey.enter
```

 These CSS subclasses allow to specify individual styles for each softkey (e.g. individual background colors for each softkey).   |
| `softkey` | `div` | Division element added to each softkey `<button>`, which contains a button image `<img>` and an optional text section `<span>` (described below). Developers can implement CSS class 

```
div.softkey
```

 to specify the style for this element (e.g. how to align the image on this softkey).

In addition, the following cascaded CSS classes can be used: 

```
div.softkey.cancel
div.softkey.up
div.softkey.down
div.softkey.clear
div.softkey.enter
```

 These CSS subclasses allow to specify individual styles for each softkey `<div>` element.   |
| `softkey` | `img` | Image element, which loads the label image for each softkey `<button>` from folder `images/buttons`. Developers can implement CSS class 

```
img.softkey
```

 to specify the style for this element (e.g. a width/height to scale the image).

In addition, the following cascaded CSS classes can be used: 

```
img.softkey.cancel
img.softkey.up
img.softkey.down
img.softkey.clear
img.softkey.enter
```

 These CSS subclasses allow to specify individual styles for each softkey `<img>` element.   |
| `softkey` | `span` | Inline section element, which contains an optional label text for each softkey `<button>`. By default, `<div>` elements for up and down softkey is added a <span> element. This element either contains text ``(*) or ``(#) to hint the user that hardkeys * and # are used as accesskey for these softkeys.


Developers can implement CSS class 

```
span.softkey
```

 to specify the style for this element (e.g. a font size for the label text).

In addition, the following cascaded CSS classes can be used: 

```
span.softkey.cancel
span.softkey.up
span.softkey.down
span.softkey.clear
span.softkey.enter
```

 These CSS subclasses allow to specify individual styles for each softkey `<span>` element.   |
| `helper` | `td` | Table data element, which contains HTML content for a key helper in the control bar. The HTML content consists of a `<div>` element (described below). Developers can implement CSS class 

```
td.helper
```

 to specify the style for this element (e.g. a background color, which is visible if the HTML content is transparent or has a smaller size than this table data element).

In addition, the following cascaded CSS classes can be used: 

```
td.helper.cancel
td.helper.up
td.helper.down
td.helper.clear
td.helper.enter
```

 These CSS subclasses allow to specify individual styles for each helper table data element (e.g. individual background colors for each helper entry).   |
| `helper` | `div` | Division element containing HTML content for the helper entry, which is added to table data element `<td>` in control bar (described above). This element contains an image `<img>` and an optional text section `<span>` (described below). Developers can implement CSS class 

```
div.helper
```

 to specify the style for this element (e.g. how to align the image on this helper entry).

In addition, the following cascaded CSS classes can be used: 

```
div.helper.cancel
div.helper.up
div.helper.down
div.helper.clear
div.helper.enter
```

 These CSS subclasses allow to specify individual styles for each helper `<div>` element.   |
| `helper` | `img` | Image element, which loads the label image for each helper entry from folder `images/helpers`. Developers can implement CSS class 

```
img.helper
```

 to specify the style for this element (e.g. a width/height to scale the image).

In addition, the following cascaded CSS classes can be used: 

```
img.helper.cancel
img.helper.up
img.helper.down
img.helper.clear
img.helper.enter
```

 These CSS subclasses allow to specify individual styles for each helper `<img>` element.   |
| `helper` | `span` | Inline section element, which contains an optional label text for each helper entry. By default, `<div>` elements for up and down helper entry is added a <span> element. This element either contains text ``(*) or ``(#) to hint the user that hardkeys * and # can be used for up and down navigation.


Developers can implement CSS class 

```
span.helper
```

 to specify the style for this element (e.g. font size for the helper text).

In addition, the following cascaded CSS classes can be used: 

```
span.helper.cancel
span.helper.up
span.helper.down
span.helper.clear
span.helper.enter
```

 These CSS subclasses allow to specify individual styles for each helper `<span>` element.   |
| `helper_separator` | `div` | Division element used as helper separator, which is added to table data element `<td>` in control bar. This element allows to insert additional space between the helper entries, which can be filled with a different color. Developers can implement CSS class 

```
div.helper_separator
```

 to specify the style for this element (e.g. a color width/height of this separator or to remove it with style `display:none`).    |



Additional CSS classes (region independent): 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `body` | `div` | Due to the fact that ADKGUI does not support CSS on the `<body>` element, an additional `<div>` element was added on this level, which represents the `<body>`. Therefore, all elements of `dialog.html` have this `<div>` as common root. Developers can implement CSS class 

```
div.body
```

 to specify the style for this element (e.g. a background-color used for the whole document region).   |
| `dialog` |  | All HTML elements in `dialog.html` use additional CSS class name `dialog`, which allows to implement dialog specific CSS classes.

Examples: 

```
button.dialog.softkey.cancel
button.softkey.cancel.dialog
```

 These CSS subclasses are individually applied to cancel button of `dialog.html` and do not take effect on other HTML dialogs. 

```
div.body.dialog
div.dialog.body
```

 These CSS subclasses allow to specify individual style for the body `<div>` element in `dialog.html` (described above) and do not take effect on other HTML dialogs.   |




#### menu.html

![menu.png](.//menu.png)menu.html: Displays a menu to select an option

An outer `<table>` element (with 5 rows and 1 column) devides the HTML document into 5 regions. These regions are size dynamic and specify the basic structure of the dialog. CSS access on these regions is restricted, since regions can be visible or not depending on parameters passed by SDI server. The content of each region is accessable via CSS and developers can implement following CSS classes to modify appearance of the visible HTML elements in this region:


Region 1:

This region supports the same CSS classes and HTML elements as [region 1](#dialog_region_1) of dialog.html.


Region 2:

This region supports the same CSS classes and HTML elements as [region 2](#dialog_region_2) of dialog.html.


Region 3: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `headline` | `td` | Area to display the headline text on top of menu area (region 4). Developers can implement CSS class 

```
td.headline
```

 to specify the style for this element (e.g. a background color or font properties for the headline text).
If SDI server does not pass a headline text via dialog API, region 3 is removed and the menu area (region 4) expands to maximal available content height.   

 |



Region 4: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `menuarea` | `div` | Division element containing the menu items. Each menu item is represented by an `<button>` element (described below). Developers can implement CSS class 

```
div.menuarea
```

 to specify the style for this element (e.g. a background color, which is visible if the `<button>` elements have a smaller size than this devision).
 |
| `menuitem` | `button` |  Button element used for a menu item. Additional HTML content is added as `<table>` element (decribed below). Developers can implement CSS class 

```
button.menuitem
```

 to specify the style for this element (e.g. a background color or font properties for the menu items).

In addition, the following cascaded CSS classes can be used: 

```
button.menuitem.i<number>
```

 This CSS subclass allows to specify individual style for a specific menu item `<button>` element, whereas `<number>` stands for the menu item index (ascending from `0`). 

```
button.menuitem.even
button.menuitem.odd
```

 This CSS subclasses allow to specify individual styles for every second menu item `<button>` element, whereas the first entry (with menu item index `0`) is `even`. For instance, this is useful to alternate the background-color of the items in the menu list. 

```
button.menuitem.submenu
```

 This CSS subclass allows to specify individual style for a menu item `<button>` element, which was specified by SDI server as submenu item (e.g. to load an arrow icon with CSS property `background-image`). 

```
button.menuitem.<icon_id>
```

 This CSS subclass allows to specify individual style for a menu item `<button>` element, for which SDI server has specified an <icon_id> (e.g. to load a radio control icon with CSS property `background-image`). The following string values are recently used by SDI server: 
| Icon ID | Purpose  |
| `checked` | Marks the menu item as recently **enabled** |
| `unchecked` | Marks the menu item as recently **disabled** |


Number of menu items is variable and item data (e.g. item texts, pre-selection (y/n), submenu(y/n), icon ID) is passed by SDI server via dialog API.  

 |
|  -------- | -------- | -------- |
| `menuitem` | `table` | A table element (with 1 row and 3 columns), which contains additional HTML elements for each menu item. These elements are added to table data elements `<td>` (described below) as follows: 

* **left:** Aera for additional space before the item text (e.g. to add a radio control icon as background-image, which marks the entry as enabled) 
* **middle:** Aara reserved for the item text 
* **right:** Aera for additional space behind the item text (e.g. to add a arrow icon as background-image, which marks the entry as submenu item) 


Developers can implement CSS class 

```
table.menuitem
```

 to specify the style for this element (e.g. a background color used for this `<table>` element).

In addition, the following cascaded CSS classes can be used: 

```
table.menuitem.i<number>
table.menuitem.even
table.menuitem.odd
table.menuitem.submenu
table.menuitem.<icon_id>
```

 These CSS subclasses were already described for CSS class [`button.menuitem`](#menuitem_button) and can also be applied to this `<table>` element.   |
| `menuitem` | `td` | Table data element, which contains additional HTML content for the left, middle or right area of each menu item. The HTML content consists of `<div>` element (described below). Developers can implement CSS class 

```
td.menuitem
```

 to specify the style for this element (e.g. a background color, which is visible if the added `<div>` is transparent or has a smaller size than this `<td>` element).

In addition, the following cascaded CSS classes can be used: 

```
td.menuitem.left
td.menuitem.middle
td.menuitem.right
```

 These CSS subclasses allow to specify individual styles for each menu item area, left, middle or right, e.g. to specify a fixed column width to get a unique arrangement of contents for all menu items. 

```
td.menuitem.i<number>
td.menuitem.even
td.menuitem.odd
td.menuitem.submenu
td.menuitem.<icon_id>
```

 These CSS subclasses were already described for CSS class [`button.menuitem`](#menuitem_button) and can also be applied to this `<td>` element.   |
| `menuitem` | `div` | Division element with the content for the left, middle or right area of each menu item. Developers can implement CSS classes 

```
div.menuitem.left
div.menuitem.middle
div.menuitem.right
```

 to specify individual styles for these `<div>` elements. 

```
div.menuitem.i<number>
div.menuitem.even
div.menuitem.odd
div.menuitem.submenu
div.menuitem.<icon_id>
```

 These CSS subclasses were already described for CSS class [`button.menuitem`](#menuitem_button) and can also be applied to this `<div>` element.Number of menu items is variable and item data (e.g. item texts, pre-selection (y/n), submenu(y/n), icon ID) is passed by SDI server via dialog API.


Basically, the menu item text is added to the the middle `<div>` element. Thus, developers can implement `div.menuitem.middle` to specify an individual style (e.g. font properties). The left and the right `<div>` elements are empty, but can be used to add icons, e.g. an arrow icon (indicating the menu item provides a submenu) or a radio control icon (to mark the menu item as enabled/disabled).

Developers can implement CSS classes 

```
div.menuitem.submenu
div.menuitem.checked
div.menuitem.unchecked
```

 to specify an individual style for the `<div>` element.

Example CSS class to add a submenu icon to the right `<div>` element: 

```cpp
/* submenu icon on menu item */
div.menuitem.right.submenu {
    background-image: url("../images/submenu.png");
    height:16px;
    width:13px;
    margin-right:5px;
}

/* submenu icon on selected menu item */
div.menuitem.right.submenu:focus {
    background-image: url("../images/submenu_active.png");
}
```

 Pseudo CSS class `focus` allows to replace the menu icon on its selection. The path of the background image is relative to CSS file, which implements this CSS class.

Example CSS class to add a radio icon to the left `<div>` element: 

```cpp
/* checked radio icon on menu item */
div.menuitem.left.checked {
    background-image: url("../images/radio_checked.png");
    height:20px;
    width:20px;
    margin-right:5px;
    margin-left:5px;
}

/* unchecked radio icon on menu item */
div.menuitem.left.unchecked {
    background-image: url("../images/radio_unchecked.png");
    height:20px;
    width:20px;
    margin-right:5px;
    margin-left:5px;
}
```

 CSS classes `checked` and `unchecked` are passed by SDI server as parameter `<icon_id>` via dialog API (see description of CSS class [`button.menuitem`](#menuitem_button).    |



Region 5:

This region contains the most CSS classes and HTML elements of [region 5](#dialog_region_5) in dialog.html.

Differences are listed as follows: 

* The control bar may not contain a **Clear** softkey or helper entry. Therefore, the cascaded CSS classes (e.g. `button.softkey.clear`) take no effect on `menu.html`. 
* Softkeys and hardkeys used for **Up** and **Down** are used to move the menu item selection. **Enter** confirms the pre-selected item and lets the menu return with the corresponding result code for this item. For touch screen devices, menu items can directly be selected by pressing the item area on the screen. 



Additional CSS classes (region independent): 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `body` | `div` | Due to the fact that ADKGUI does not support CSS on the `<body>` element, an additional `<div>` element was added on this level, which represents the `<body>`. Therefore, all elements of `menu.html` have this `<div>` as common root. Developers can implement CSS class 

```
div.body
```

 to specify the style for this element (e.g. a background-color used for the whole document region).   |
| `menu` |  | All HTML elements in `menu.html` use additional CSS class name `menu`, which allows to implement dialog specific CSS classes.

Examples: 

```
button.menu.softkey.cancel
button.softkey.cancel.menu
```

 These CSS subclasses are individually applied to cancel button of `menu.html` and do not take effect on other HTML dialogs. 

```
div.body.menu
div.menu.body
```

 These CSS subclasses allow to specify individual style for the body `<div>` element in `menu.html` (described above) and do not take effect on other HTML dialogs.   |




#### idle.html

![idle.png](.//idle.png)idle.html: Displays the idle screen

An outer `<table>` element (with 5 rows and 1 column) devides the HTML document into 5 regions. These regions are size dynamic and specify the basic structure of the dialog. CSS access on these regions is restricted, since regions can be visible or not depending on parameters passed by SDI server. The content of each region is accessable via CSS and developers can implement following CSS classes to modify appearance of the visible HTML elements in this region:


Region 1:

This region supports the same CSS classes and HTML elements as [region 1](#dialog_region_1) of dialog.html.


Region 2:

This region supports the same CSS classes and HTML elements as [region 2](#dialog_region_2) of dialog.html.


Region 3: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `image` | `td` | Table data element containing an arbitrary image, which is displayed on top of text area (region 4). The image is provided by SDI server via dialog API. This can be a customer logo, which was installed by separate download package (see chapter [Display Idle Screen (24-07)]). Developers can implement CSS class 

```
td.image
```

 to specify the style for this element. For instance, this class can be used to specify content height portion of image area (region 3) in relation to text area (region 4).

If SDI server does not pass content for the text area (region 4), the following cascaded CSS class is used: 

```
td.image.notext
```

 This CSS subclass allows to specify an individual region style in dialogs only displaying an image, e.g. to stretch image area (region 3) to maximal available content height. If SDI server does not pass an image via dialog API, region 3 is removed and the text area (region 4) expands to maximal available content height.   

 |



Region 4: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `text` | `div` | Division element to display arbitrary HTML content, usually a text used as idle screen message. SDI server either uses the default idle text or it can be set with command [Set Idle Text (20-13)]. For more details also please refer to chapter [Display Idle Screen (24-07)]). Developers can implement CSS class 

```
div.text
```

 to specify the style for this element. The internal HTML content of this `div` element (region 4) is not part of `idle.html` and passed by SDI server via dialog API.


Additional CSS classes for text alignment (see `dialog.html`) are also supported by `idle.html`, but SDI server does not use these CSS classes for idle screen so far.    |



Region 5:

This region contains the most CSS classes and HTML elements of [region 5](#dialog_region_5) in `dialog.html`.

Differences are listed as follows: 

* The control bar does not contain softkeys or helper entries **Cancel**, **Up**, **Down**, **Clear**, **Enter** as used in in `dialog.html.Therefore`, the softkey/helper specific CSS classes (e.g. `button.softkey.enter`) take no effect on `idle.html`. 
* The control bar uses other symbols for softkeys or helper entries and the associated hardkeys have a different meaning:
![softkeys_idle.png](.//softkeys_idle.png)Idle screen softkeys used for devices with touch screen capability
![helpers_idle.png](.//helpers_idle.png)Idle screen helpers for hardkeys used for devices without touch screen capability
Descriptions of the button/helper entries according its sequential order above: 
    * **Info:** User can press this softkey or cancel key on keypad to display information about SDI server like software version and status of communication interface. 
    * **Menu:** User can press this softkey or enter key on keypad to show the menu with communication interface settings. This menu allows the user to select a connection profile, which SDI server shall use for communication. 



Additional CSS classes (region independent): 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `body` | `div` | Due to the fact that ADKGUI does not support CSS on the `<body>` element, an additional `<div>` element was added on this level, which represents the `<body>`. Therefore, all elements of `menu.html` have this `<div>` as common root. Developers can implement CSS class 

```
div.body
```

 to specify the style for this element (e.g. a background-color used for the whole document region).   |
| `idle` |  | All HTML elements in `idle.html` use additional CSS class name `idle`, which allows to implement dialog specific CSS classes.

Examples: 

```
button.idle.softkey.info
button.softkey.info.idle
```

 These CSS subclasses are individually applied to info button of `idle.html` and do not take effect on other HTML dialogs. 

```
div.body.idle
div.idle.body
```

 These CSS subclasses allow to specify individual style for the body `<div>` element in `idle.html` (described above) and do not take effect on other HTML dialogs.   |




#### pin.html


| ![pin.png](.//pin.png)pin.html: PIN entry on devices with keypad | ![pin2.png](.//pin2.png)pin.html: PIN entry with virtual keyboard on devices w/o keypad |
|  -------- | -------- |




Depending on hardware capabilities the PIN prompt dialog `pin.html` has different content: 

* PIN entry on devices with keypad:

On devices with physical keypad the PIN digits are always entered via hardkeys. In this case the outer `<table>` element devides the HTML document into 6 visible regions, whereas region 3 contains the PIN prompt message and region 4 the PIN input field. By detault, region 5 is empty, but the optional text for this region (e.g. a disclaimer) which can be provided with a custom text catalog (for more details see chapter [Custom UI text catalogs]). The control bar (region 7) displays key helpers to hint the user that cancel, clear and enter hardkeys can be used. The virtual keyboard (region 6) is always disabled and invisible. 
* PIN entry with virtual keyboard on devices w/o keypad:

On devices without physical keypad the PIN digits are entered with a virtual keyboard on touch screen. In this case the outer `<table>` element is added an additional region 6, which contains the virtual keyboard. The control bar (region 7) displays softkeys to cancel/confirm the PIN entry and to backspace softkey to clear already entered digits from the PIN input field. 


Regions 1-7 of pin.html are size dynamic and specify the basic structure of the PIN dialog. CSS access on these regions is restricted, since regions can be visible or not depending on parameters passed by SDI server. The content of each region is accessable via CSS and developers can implement following CSS classes to modify appearance of the visible HTML elements in this region:


Region 1:

This region supports the same CSS classes and HTML elements as [region 1](#dialog_region_1) of dialog.html.


Region 2:

This region supports the same CSS classes and HTML elements as [region 2](#dialog_region_2) of dialog.html.

Region 3: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `pintext` | `td` | Table data element, which contains HTML content with the PIN prompt message. This HTML content consists of a `<div>` element (described below). Developers can implement CSS class 

```
td.pintext
```

 to specify the style for this element. Please note that this style is applied for both PIN text regions 3 and 5. To use a individual style for the upper PIN text area (region 3), the following cascaded CSS classes can be used: 

```
td.pintext.top
```

 For instance, this class can be used to specify content height portion of PIN text area (region 3) in relation to PIN input area (region 4) and optional PIN text area (region 5).
 |
| `text` | `div` | Division element to display arbitrary HTML content, usually a PIN prompt message. Developers can implement CSS class 

```
div.text
```

 to specify the style for this element (e.g. a background color or font properties for the PIN prompt text).
CSS class `div.txt` is already used in [region 4](#dialog_region_4) of dialog.html, thus, this CSS class is applied to both, dialog.html and pin.html, whereas additional CSS classes for text alignment are not used for `pin.html`.


To use a individual style for the PIN dialog (different from dialog.html), the following cascaded CSS classes can be used: 

```
div.text.pin
```

 Please note that this style is applied for both PIN text divisions in regions 3 and 5. To use a individual style for the upper PIN text division (region 3), the following cascaded CSS classes can be used: 

```
div.text.top.pin
```

 |



Region 4: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `pininput` | `td` | Table data element, which contains HTML content for the PIN input, which is represented by an `<input>` element with attribute `type='pin'` (described below). Developers can implement CSS class 

```
td.pininput
```

 to specify the style for this element. For instance, this class can be used to specify content height portion of PIN input area (region 4) in relation to PIN message area (region 3).
 |
| `pin` | `input` | Input element, which displays the echo characters of the entered PIN digits. Developers can implement CSS class 

```
input.pin
```

 to specify the style for this element (e.g. a background color or font properties for the PIN echo characters).
 |



Region 5: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `pintext` | `td` | For this HTML element the same CSS styles are used as described for [region 3](#pin_region_3). To use a individual style for the bottom PIN text area (region 5), the following cascaded CSS classes can be used: 

```
td.pintext.bottom
```

 For instance, this class can be used to specify content height portion of PIN text area (region 5) in relation to PIN input area (region 4) and PIN prompt text area (region 3).
 |
| `text` | `div` | For this HTML element the same CSS styles are used as described for [region 3](#pin_region_3). To use a individual style for the bottom PIN text division (region 5), the following cascaded CSS classes can be used: 

```
div.text.bottom.pin
```

 |



Region 6: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `pinkeys` | `table` | A table element (with 3 rows and 3 columns), which contains the softkeys to enter the PIN on touch screen. The HTML content for each softkey is added to a table data element `<td>` (decribed below). Developers can implement CSS class 

```
table.pinkeys
```

 to specify the style for this element (e.g. a background color for PIN softkey area). For devices with physical keypad, region 6 is not displayed, therefore, specified CSS classes for this region won't take effect.  

 |
| `pinkey` | `td` |  Table data element, which contains HTML content for a softkey to enter the PIN digit on touch screen. The HTML content consists of a `<button>` element (described below). Developers can implement CSS class 

```
td.pinkey
```

 to specify the style for this element (e.g. a background color, which is visible if the added `<button>` has a smaller size than this `<td>` element).

In addition, the following cascaded CSS classes can be used: 

```
td.pinkey.one
td.pinkey.two
td.pinkey.three
td.pinkey.four
td.pinkey.five
td.pinkey.six
td.pinkey.seven
td.pinkey.eight
td.pinkey.nine
td.pinkey.zero
```

 These CSS subclasses allow to specify individual styles for each PIN softkey (e.g. individual background colors for each softkey). 

```
td.pinkey.left
td.pinkey.middle
td.pinkey.right
```

 These CSS subclasses allow to specify individual styles for table data elements of a special column (left, middle or right) in the PIN softkey table (e.g. individual width).By default, dialog `pin.html` adds the **Clear** softkey to control bar, if the PIN is entered with virtual keyboard on devices w/o keypad (see picture above). The dialog also allows to place the **Clear** softkey to the reserved table data element, which is left or right next to the PIN softkey **0**. The corresponding softkey appears, if the folder of the [User config package] (see also chapter [Install UI user config packages]) contains one of the follwing image files installed to:

 VOS/VOS2: 

```
/etc/config/sdi/www/images/buttons/pinclear_left.png
/etc/config/sdi/www/images/buttons/pinclear_right.png
```

 VOS3: 

```
/home/usr<X>/sdi/www/images/buttons/pinclear_left.png
/home/usr<X>/sdi/www/images/buttons/pinclear_right.png
```

If one of the images is found (`pinclear_left.png` is prior), the default **Clear** softkey in control bar is omitted and a new **Clear** sofkey is placed to the corresponding `<td>` (left or right) next to the PIN softkey **0**. This new `<button>` get the style `pinkey` and it adds an `<img>` element (described below), which loads the corresponding image above. **Cancel** and **Enter** softkey in control bar will row to 50% of width used for control bar `<table>` element. Developers can implement CSS class 

```
td.pinkey.clear.left
td.pinkey.clear.right
```

 to specify the style for this element (e.g. a background color, which is visible if the added `<button>` has a smaller size than this `<td>` element).   |
| `pinkey` | `button` | Button element used for softkeys to enter PIN digits on touchscreen. This element is added to table data element `<td>` of the pinkey table (as described above). Developers can implement CSS class 

```
button.pinkey
```

 to specify the style for this element (e.g. a background color for this `<button>`).

In addition, the following cascaded CSS classes can be used: 

```
button.pinkey.one
button.pinkey.two
button.pinkey.three
button.pinkey.four
button.pinkey.five
button.pinkey.six
button.pinkey.seven
button.pinkey.eight
button.pinkey.nine
button.pinkey.zero
```

 These CSS subclasses allow to specify individual styles for each PIN softkey (e.g. individual background colors for each softkey). 

```
button.pinkey.left
button.pinkey.middle
button.pinkey.right
```

 These CSS subclasses allow to specify individual styles for buttons of a special column (left, middle or right) in the PIN softkey table (e.g. individual width). 

```
button.pinkey.clear
button.pinkey.clear.left
button.pinkey.clear.right
```

 These CSS subclasses allow to specify individual styles for the left or right **Clear** softkey next next to the PIN softkey **0**. For more details, please refer to previous CSS class [td.pinkey](#pinkey_td).   |
| `pinkey` | `img` | Image element, which loads the image `pinclear_left.png` or `pinclear_right.png` to the **Clear** softkey placed next to PIN softkey **0**. Developers can implement CSS class 

```
img.pinkey.clear
img.pinkey.clear.left
img.pinkey.clear.right
```

 These CSS subclasses allow to specify individual styles for `<img>` added to the **Clear** softkey next to the PIN softkey **0**. For more details, please refer to previous CSS class [td.pinkey](#pinkey_td).    |



Region 7:

This region contains the most CSS classes and HTML elements of [region 5](#dialog_region_5) in dialog.html.

Differences are listed as follows: 

* The control bar does not contain **Up** and **Down** softkey or helper entry. Therefore, the cascaded CSS classes (e.g. `button.softkey.up` or `button.softkey.down`) take no effect on `pin.html`. 
* The **Clear** softkey can be omitted and added next to the PIN softkey **0**, if one of the image `pinclear_left.png` or `pinclear_right.png` are looked up in the [User config package] folder. For more details, please refer to description of CSS class [td.pinkey](#pinkey_td). In this case, the cascaded CSS class (e.g. `button.softkey.clear` takes no effect on `pin.html`. 



Additional CSS classes (region independent): 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `body` | `div` | Due to the fact that ADKGUI does not support CSS on the `<body>` element, an additional `<div>` element was added on this level, which represents the `<body>`. Therefore, all elements of `pin.html` have this `<div>` as common root. Developers can implement CSS class 

```
div.body
```

 to specify the style for this element (e.g. a background-color used for the whole document region).   |
| `pin` |  | All HTML elements in `pin.html` use additional CSS class name `pin`, which allows to implement dialog specific CSS classes.

Examples: 

```
button.pin.softkey.cancel
button.softkey.cancel.pin
```

 These CSS subclasses are individually applied to cancel button of `pin.html` and do not take effect on other HTML dialogs. 

```
div.body.pin
div.pin.body
```

 These CSS subclasses allow to specify individual style for the body `<div>` element in `pin.html` (described above) and do not take effect on other HTML dialogs.   |




#### nav_pin.html

![nav_pin.png](.//nav_pin.png)nav_pin.html: PIN entry with enabled navigator mode

If supported by devices with touch screen, the navigator mode can be enabled to help visually impaired persons to enter the PIN (for more details refer to ADKGUI documentation). For this special PIN entry mode, SDI server provides a separate HTML dialog `nav_pin.html`, which consists of a virtual keyboard with full screen size. An outer `<table>` element (with 4 rows and 3 columns) devides the screen into 12 fields (`<td>` elements) having the same size. Softkeys (`<button>` elements) are used to enter the PIN digits. The most left-bottom field is vertical devided to add the softkeys for backspace and abort. Since the layout and appearance of the softkeys must fullfil special requirements, it is not recommended to implement own CSS for this dialog. Therefore, the CSS access for this dialog is restricted as follows: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `navpin` | `button` | Button element used for softkeys to enter PIN digits on touchscreen. This element is added to table data element `<td>` of the pinkey table (as described above). Developers can implement CSS class 

```
button.navpin
```

 to specify the style for this element (e.g. a background color or font properties for the softkeys)    |



Additional CSS classes: 
| CSS class | HTML element | Description  |
|  -------- | -------- | -------- |
| `body` | `div` | Due to the fact that ADKGUI does not support CSS on the `<body>` element, an additional `<div>` element was added on this level, which represents the `<body>`. Therefore, all elements of `nav_pin.html` have this `<div>` as common root. Developers can implement CSS class 

```
div.body
```

 to specify the style for this element (e.g. a background-color used for the whole document region).   |
| `navpin` |  | All HTML elements in `nav_pin.html` use additional CSS class name `navpin`, which allows to implement dialog specific CSS classes.

Example: 

```
div.body.navpin
div.navpin.body
```

 These CSS subclasses allow to specify individual style for the body `<div>` element in `nav_pin.html` (described above) and do not take effect on other HTML dialogs.   |




### Custom UI text catalogs

In standard mode or as EPP (see [User Modes]), SDI operates with UI and displays texts and prompts for user inputs (e.g. PIN entry). The UI interface of SDI is implemented with ADKGUI, an ADK component rendering HTML as a dialog on screen. For multi-language support ADKGUI allows the use of text catalog files, one for each language. UI text catalogs contain a text map, which consists of serveral lines of `name=value` text pairs. The `name` is used as key to lookup the `value`. The `value` represents the text to display. Text values can be HTML formatted, in addition, it may contain XML processing instructions (e.g. `<?text name?>` to refer another text by its name in the same catalog). For more details please refere to ADKGUI documentation.

For the supported languages ([Supported System Languages]) the default texts for SDI are installed with UI catalogs coming along with the SDI config package for standard mode (see chapter [Default UI resource files]). Further, SDI allows the installation of additional custom UI text catalogs provided with an optional [User config package].

For each system language one custom UI text catalag can be installed to the following locations:

VOS/VOS2: 

* `/etc/config/sdi/www/<width>x<height><color><numkeys><touch>` (device specific UI resource folder, e.g. `320x480C15T` is used for P400) 
* `/etc/config/sdi/www/default` (default UI resource folder, used if the resource isn't found in device specific folder) 


VOS3: 

* `/home/use<X>/sdi/www/<width>x<height><color><numkeys><touch>` (device specific UI resource folder, e.g. `320x480C15T` is used for P630) 
* `/home/use<X>/sdi/www/default` (default UI resource folder, used if the resource isn't found in device specific folder) 


Please note that the first device specific UI resource folder is preferred, before the catalog file is looked up from `default` folder.

 The custom UI text catalog must use the following filename notation: 

```
custom-<language-code>.ctlg
```

 The field `<language-code>` in the catalog filename contains the ISO-639-1 language code to specify the language for which the text catalog is used.

Basically, SDI prefers texts of the custom catalog before taking them from own default UI catalog. Since ADKGUI does not support running dialogs with 2 text catalogs at the same time, SDI first looks up the custom catalog (if installed) and afterwards the default catalog. Finally, the found text is injected with instructions `<?var ...?>` or `<?varthml ...?>` into HTML for ADKGUI.

For dual catalog support, SDI implements an additional XML processing instruction `<?custom name?>`, which more or less works the same as `<?text name?>` (as supported by ADKGUI), but this instruction has a special meaning when used in pre-installed default text catalogs: If SDI looks up a text from default catalog, it substitutes all placeholders `<?custom name?>` by the corresponding text value provided by the customer catalog. If not found there (either no custom catalog installed or no text value available), SDI falls back to value found in own default catalog. In this way, SDI implements priorization of custom texts before using SDI default texts.

Example: 

```
invalid_pin=INVALID PIN
txt_sdi_invalid_pin=<?custom invalid_pin?>
```

 Variable `txt_sdi_invalid_pin` is fully composed of instruction `<?custom invalid_pin?>`. This instruction refers variable `invalid_pin`, for which SDI will now look up the value from custom catalog first and (if not found there) afterwards from own catalog, which contains default value `INVALID PIN`. After SDI has substituted all instructions in this way, it displays the result text in dialog with ADKGUI. If the custom catalog is installed, this catalog then is passed to ADKGUI, so that custom catalogs might use instruction `<?text name?>` to refer other texts in this catalog.

Instruction `<?custom name?>` is ignored, if used in a custom catalog and results an empty value. 

Instruction `<?text name?>` used in SDI default catalog does not lookup the custom catalog and is substituted with variable of the own default catalog only. This allows SDI to define private catalog variables to compose other catalog variables with default texts. 

Basically all catalog variables may contain HTML elements, e.g. to insert custom images or to use attribute `class` or `id` to refer them from a custom CSS file to change element's appearance.


SDI uses text catalog files for UI dialogs, which are displayed for: 

* SDI interace (e.g. [Display Interface (24-XX)], [PED Interface (22-XX)]) 
* Internal display messages/confirmations, e.g. amount confirmations, data inputs or transaction status messages (such as EMV status messages with text IDs) 

The following sections list all text variables, which are supported for custom UI catalogs. Sections are categorized for SDI command or purpose, which text variables are used for. For variables not provided by custom catalog, always values of SDI default catalog are applied.



* **Amount formatting**
Variables with global character used to format an amount for the display. 
| `name` | Description  |
|  -------- | -------- |
| `decimal_separator` | Decimal separator applied for displaying or input an amount  |
| `thousand_separator` | Thousand separator applied for displaying or input an amount. If set to empty, no thousand separator is used.  |
| `amount_format` | Format string to specify the order, how currency and amount appear on the display.

SDI passes the amount in variable `amount` and the currency variable `curr` into the HTML dialog: 
| `name` | Description  |
| `curr` | Currency string (see currency texts in chapter [Supported Currencies])  |
| `amount` | Amount string (formatted with `decimal_separator` and `thousand_separator` (e.g. "1.234,56")  |



Example value: 

```
<?var curr?> <?var amount?>
```

Variable `amount_format` is referred by multiple SDI default text values (e.g. `amount_conf`).
 |
|  -------- | -------- |
| `trx_type_amount_format` | Same as variable `amount_format`, in addition, this format string contains the transaction type name, which is passed by SDI in variable `ttt`. Variable `trx_type_amount_format` is referred by command [Handle Card Request Display (24-06)] for multiple SDI default text values (e.g. `amount_insert_card`).

 Example value: 

```
<?var ttt?><br><?text amount_format?>
```

 |



* **Command**[PED Get PIN (22-01)]
Variables specifying content of region 3 and 5 of [pin.html] for PIN entry with command [PED Get PIN (22-01)]. 
| `name` | Description  |
|  -------- | -------- |
| `txt_sdi_bypass_enter` | Additional text to hint the user that the PIN entry can be bypassed with Enter key.

 Example value: 

```
(BYPASS WITH ENTER)
```

 The text is added by SDI server as variable `bypass` to value map for ADKGUI so that it can be used in variables with prefix `txt_sdi_pin_msg` (see below).  |
| `txt_sdi_bypass_clear` | Additional text to hint the user that the PIN entry can be bypassed with Clear key.

 Example value: 

```
(BYPASS WITH <)
```

 The text is added by SDI server as variable `bypass` to value map for ADKGUI so that it can be used in variables with prefix `txt_sdi_pin_msg` (see below).  |
| `txt_sdi_bypass_enter_clear` | Additional text to hint the user that the PIN entry can be bypassed with Clear or Enter key

 Example value: 

```
(BYPASS WITH ENTER/<)
```

 The text is added by SDI server as variable `bypass` to value map for ADKGUI so that it can be used in variables with prefix `txt_sdi_pin_msg` (see below).  |
| `txt_sdi_pinmsg` | PIN prompt (w/o additional data) added to region 3 of PIN entry dialog (see [pin.html]).

 Example value: 

```
ENTER PIN:
```

 |
| `txt_sdi_pinmsg_amount` | PIN prompt with amount added to region 3 of PIN entry dialog (see [pin.html]). This should be composed of `amount_format` containing the formatted amount (see section [Amount formatting](#ui_catalogs_amount_formatting)). Example value: 

```
AMOUNT<br><?text amount_format?><br>ENTER PIN:
```

 |
| `txt_sdi_pinmsg_bypass` | PIN prompt with enabled PIN bypass added to region 3 of PIN entry dialog (see [pin.html]). The following variables are added by SDI server and can be referred with `<?var name>`: 
| `name` | Description  |
| `bypass` | Depending on which keys are used to bypass the PIN entry, this variable contains value `txt_sdi_bypass_enter`, `txt_sdi_bypass_clear` or `txt_sdi_bypass_enter_clear` (described above).  |



Example value: 

```
ENTER PIN:<br><?var bypass?>
```

 |
|  -------- | -------- |
| `txt_sdi_pinmsg_amount_bypass` | PIN prompt with amount and enabled PIN bypass added to region 3 of PIN entry dialog (see [pin.html]). Same variables for `<?var name>` can be used as listed for `txt_sdi_pinmsg_amount` and `txt_sdi_pinmsg_bypass` above.

 Example value: 

```
AMOUNT<br><?text amount_format?><br>ENTER PIN:<br><?var bypass?>
```

 For variable `amount_format` see section [Amount formatting](#ui_catalogs_amount_formatting).  |
| `txt_sdi_pinmsg_prefname` | PIN prompt with card application label added to region 3 of PIN entry dialog (see [pin.html]). The following variables are added by SDI server and can be referred with `<?var name>`: 
| `name` | Description  |
| `prefname` | Application label (application preferred name) of the card, which is used for current transaction.  |



Example value: 

```
<?var prefname?><br>ENTER PIN:
```

 |
|  -------- | -------- |
| `txt_sdi_pinmsg_amount_prefname` | PIN prompt with amount and card application label added to region 3 of PIN entry dialog (see [pin.html]). Same variables for `<?var name>` can be used as listed for `txt_sdi_pinmsg_amount` and `txt_sdi_pinmsg_prefname` above.

 Example value: 

```
<?var prefname?><br>AMOUNT<br><?text amount_format?><br>ENTER PIN:
```

 For variable `amount_format` see section [Amount formatting](#ui_catalogs_amount_formatting).  |
| `txt_sdi_pinmsg_bypass_prefname` | PIN prompt with enabled PIN bypass and card application label added to region 3 of PIN entry dialog (see [pin.html]). Same variables for `<?var name>` can be used as listed for `txt_sdi_pinmsg_bypass` and `txt_sdi_pinmsg_prefname` above.

 Example value: 

```
<?var prefname?><br>ENTER PIN:<br><?var bypass?>
```

 |
| `txt_sdi_pinmsg_amount_bypass_prefname` | PIN prompt with amount, enabled PIN bypass and card application label added to region 3 of PIN entry dialog (see [pin.html]). Same variables for `<?var name>` can be used as listed for `txt_sdi_pinmsg_amount`, `txt_sdi_pinmsg_bypass` and `txt_sdi_pinmsg_prefname` above.

 Example value: 

```
<?var prefname?><br>AMOUNT<br><?text amount_format?><br>ENTER PIN:<br><?var bypass?>
```

 For variable `amount_format` see section [Amount formatting](#ui_catalogs_amount_formatting).  |
| `pin_disclaimer` | Additional PIN text (e.g. a disclaimer) added to region 5 of PIN entry dialog (see [pin.html]).

 Example value: 

```
Enter your code away from prying eyes
```

 |


Due to compatibility reasons SDI default catalog does not use instruction `<?custom name?>` for `sdi_txt_pinmsg_*` variables. Nevertheless, these variables are supported in custom catalog files, since SDI direclty takes values from there first. 

The same UI texts are supported for PIN entry, which is internally triggered by ADKEMV callback (see chapter [PED Set PIN Input Parameter (22-06)]).


* **Commands**[Handle Display (24-03)]**and**[Handle HTML Dialog (24-0A)]
Both commands support HTML templates, which can be installed with an [User config package].

 SDI always uses the custom UI catalog to invoke these templates with ADKGUI.

 This allows to implement language independent HTML templates for both commands. 
| `name` | Description of `value` |
|  -------- | -------- |
| arbitrary name | Multiple variables with arbitrary name can be defined, which can be referred with XML processing instruction `<?text name?>` in HTML.
 |



* **Command**[Handle Secure Input (24-04)]
Variables specifying content of region 4 of [dialog.html] for user inputs with command [Handle Secure Input (24-04)].

 Used HTML `<input>` elements take multiple parameters specified by SDI, thus, these variables are declared as private and cannot be replaced by a custom UI catalog file.

 Therefore, in most cases a header and a footer variable is declared to replace content around these elements.

 SDI looks up the corresponding variables depending on specified Template ID, which is passed in TLV tag `DFA007`. 
| `name` | Template ID | Description of `value` |
|  -------- | -------- | -------- |
| `secure_input_01_postal_code_header` | `01` | Prompt text preceding the `<input>` element for input of ZIP code.
Class `zip` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_01_postal_code_footer` | `01` | Footer text behind the `<input>` element (see also `secure_input_01_postal_code_header`).  |
| `secure_input_02_cvv_header` | `02` | Prompt text preceding the `<input>` element for input of Card Verification Value.
Class `cvv` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_02_cvv_footer` | `02` | Footer text behind the `<input>` element (see also `secure_input_02_cvv_header`).  |
| `secure_input_03_birthday_header` | `03` | Prompt text preceding the `<input>` element for input of the date of birth.
Class `birthday` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_03_birthday_footer` | `03` | Footer text behind the `<input>` element (see also `secure_input_03_birthday_header`).  |
| `secure_input_04_ssn_header` | `04` | Prompt text preceding the `<input>` element for input of Social Security Number.
Class `ssn` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_04_ssn_footer` | `04` | Footer text behind the `<input>` element (see also `secure_input_04_ssn_header`).  |
| `secure_input_05_last_4_of_ssn_header` | `05` | Prompt text preceding `<input>` element for input of last 4 digits of Social Security Number.
Class `last4ssn` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_05_last_4_of_ssn_footer` | `05` | Footer text behind the `<input>` element (see also `secure_input_05_last_4_of_ssn_header`).  |
| `secure_input_06_verify_postal_code_header` | `06` | Prompt text preceding the `<input>` element for input to verify the ZIP code.
Class `zip` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_06_verify_postal_code_footer` | `06` | Footer text behind the `<input>` element (see also `secure_input_06_verify_postal_code_header`).  |
| `secure_input_07_verify_cvv_header` | `07` | Prompt text preceding the `<input>` element for input to verify the Card Verification Value.
Class `cvv` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_07_verify_cvv_footer` | `07` | Footer text behind the `<input>` element (see also `secure_input_07_verify_cvv_header`).  |
| `secure_input_08_verify_birthday_header` | `08` | Prompt text preceding the `<input>` element for input to verify the date of birth.
Class `birthday` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_08_verify_birthday_footer` | `08` | Footer text behind the `<input>` element (see also `secure_input_08_verify_birthday_header`).  |
| `secure_input_09_verify_ssn_header` | `09` | Prompt text preceding the `<input>` element for input to verify the Social Security Number.
Class `ssn` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_09_verify_ssn_footer` | `09` | Footer text behind the `<input>` element (see also `secure_input_09_verify_ssn_header`).  |
| `secure_input_0a_verify_last4ssn_header` | `0A` | Prompt text preceding `<input>` element for input to verify the last 4 digits of Social Security Number.
Class `last4ssn` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_0a_verify_last4ssn_footer` | `0A` | Footer text behind the `<input>` element (see also `secure_input_0a_verify_last4ssn_header`).  |
| `txt_sdi_secure_input_0b_gratuity_amount_prompt` | `0B` | Prompt text preceding the `<input>` element for input of the gratuity/tip amount.
`<input>` element for gratuity/tip amount should precede/append `<?var curr?>` so that the currency is displayed. 

Separator variables `decimal_separator` and `thousand_separator` are applied to amount `<input>` element (see section [Amount formattig](#ui_catalogs_amount_formatting)). 

Class `amount` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `txt_sdi_secure_input_0b_gratuity_amount_footer` | `0B` | Footer text behind the `<input>` element (see also `txt_sdi_secure_input_0b_gratuity_amount_prompt`).  |
| `secure_input_0c_gratuity_percentage_header` | `0C` | Prompt text preceding the `<input>` element for input of percentage to specify the proportion of gratuity/tip.
Class `percent` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_0c_gratuity_percentage_footer` | `0C` | Footer text behind the `<input>` element (see also `secure_input_0c_gratuity_percentage_header`).  |
| `secure_input_0d_cashback_amount_header` | `0D` | Prompt text preceding the `<input>` element for input of the cashback amount.
`<input>` element for cashback amount should precede/append `<?var curr?>` so that the currency is displayed. 

Separator variables `decimal_separator` and `thousand_separator` are applied to amount `<input>` element (see section [Amount formatting](#ui_catalogs_amount_formatting)). 

Class `amount` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_0d_cashback_amount_footer` | `0D` | Footer text behind the `<input>` element (see also `secure_input_0d_cashback_amount_header`).  |
| `secure_disp_amount_and_input_0e_tip_header` | `0E` | Prompt text preceding the `<input>` element for input of the tip amount (with displaying fare/base amount).
This variable should be composed of `amount_format` displaying the fare/base amount (see section [Amount formatting](#ui_catalogs_amount_formatting)). 

`<input>` element for tip amount should precede/append `<?var curr?>` so that the currency is displayed. 

Separator variables `decimal_separator` and `thousand_separator` are applied to amount `<input>` element (see section [Amount formatting](#ui_catalogs_amount_formatting)). 

Class `amount` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_disp_amount_and_input_0e_tip_footer` | `0E` | Footer text behind the `<input>` element (see also `secure_disp_amount_and_input_0e_tip_header`).  |
| `secure_input_0f_email_addr_header` | `0F` | Prompt text preceding `<input>` element for input of an email address.
Class `email` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_0f_email_addr_footer` | `0F` | Footer text behind the `<input>` element (see also `secure_input_0f_email_addr_header`).  |
| `secure_input_10_phone_nbr_header` | `10` | Prompt text preceding `<input>` element for input of a phone number.
Class `phone` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_10_phone_nbr_footer` | `10` | Footer text behind the `<input>` element (see also `secure_input_10_phone_nbr_header`).  |
| `secure_input_11_nbr_installments_header` | `11` | Prompt text preceding `<input>` element for input the number of installments.
Class `installments` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_11_nbr_installments_footer` | `11` | Footer text behind the `<input>` element (see also `secure_input_11_nbr_installments_header`).  |


Header/Footer variables might use `<div>` or `<br>` to seperate them vertically from `<input>` elements.


Following Template IDs are declared as private and internally used by SDI for input of card holder sensitive data only (manual card data input).

 Therefore, these Template IDs cannot be used in TLV tag `DFA007` with command [Handle Secure Input (24-04)]. 
| `name` | Template ID | Description of `value` |
|  -------- | -------- | -------- |
| `secure_input_fc_card_number_header` | `FC` | Prompt text preceding the `<input>` element for input of Primary Account Number.
Class `pan` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_fc_card_number_footer` | `FC` | Footer text behind the `<input>` element (see also `secure_input_fc_card_number_header`).  |
| `secure_input_fd_expiry_date_header` | `FD` | Prompt text preceding the `<input>` element for input of the card expiry date.
Class `date` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_fd_expiry_date_footer` | `FD` | Footer text behind the `<input>` element (see also `secure_input_fd_expiry_date_header`).  |
| `secure_input_fe_manual_card_entry_pan_header` | `FE` | Prompt text preceding the PAN `<input>` element for input of the PAN and the card expiry date.
Class `pan` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_fe_manual_card_entry_expdate_header` | `FE` | Prompt text preceding the expiry date `<input>` element for input of the PAN and the card expiry date (see also `secure_input_fe_manual_card_entry_pan_header`).
Class `date` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_fe_manual_card_entry_footer` | `FE` | Footer text behind the expiry date `<input>` element (see also `secure_input_fe_manual_card_entry_pan_header` and `secure_input_fe_manual_card_entry_expdate_header`).  |
| `secure_input_ff_manual_card_entry_pan_header` | `FF` | Prompt text preceding the PAN `<input>` element for input of the PAN, the card expiry date and the CVV.
Class `pan` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_ff_manual_card_entry_expdate_header` | `FF` | Prompt text preceding the expiry date `<input>` element for input of the PAN, the card expiry date and the CVV (see also `secure_input_ff_manual_card_entry_pan_header`).
Class `date` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_ff_manual_card_entry_cvv_header` | `FF` | Prompt text preceding the CVV `<input>` element for input of the PAN, the card expiry date and the CVV (see also `secure_input_ff_manual_card_entry_pan_header` and `secure_input_ff_manual_card_entry_expdate_header`).
Class `cvv` allows to implement styles for the `<input>` element in a custom CSS file. 

 |
| `secure_input_ff_manual_card_entry_footer` | `FF` | Footer text behind the expiry date `<input>` element (see also `secure_input_ff_manual_card_entry_pan_header`, `secure_input_ff_manual_card_entry_expdate_header` and `secure_input_ff_manual_card_entry_cvv_header`).  |


Header/Footer variables might use `<div>` or `<br>` to seperate them vertically from `<input>` elements.


* **Command**[Handle Signature Capture (24-08)]
Variables specifying content of region 4 of [dialog.html] for signature caputure with command [Handle Signature Capture (24-08)]. 
| `name` | Description of `value` |
|  -------- | -------- |
| `txt_sdi_signature_prompt` | Prompt text preceding the signature `<input>` element. Class `signature` allows to implement styles for the signature `<input>` element in a custom CSS file. 

 |
| `txt_sdi_signature_footer` | Footer text behind the signature `<input>` element (same as `txt_sdi_signature_prompt`).  |


Header/Footer variables might use `<div>` or `<br>` to seperate them vertically from `<input>` elements.


* **Command**[Handle Card Request Display (24-06)]
Variables specifying content of region 4 of [dialog.html] for card requests with command [Handle Card Request Display (24-06)]. Used variables depend on specified card technology (TLV tag `DFA108`) and display mode (TLV tag `DFA10A`).
Each text variable is provided in 2 variants, one using prefix `**amount_**` and one without. Variables with the prefix are used, if the command [Handle Card Request Display (24-06)] contains the transaction amount and currency in TLV tag `9F02` and `5F2A`. Additional EMV transaction type in that case can be provided with TLV tag `9C`, thus, variables using prefix `**amount_**` should be composed of `trx_type_amount_format` (see section [Amount formatting](#ui_catalogs_amount_formatting)). If TLV tags `9F02` or `5F2A` are missing, SDI looks up variables without the prefix and the amount with currency (and transaction type) are not diplayed.

| `name` | Description of `value` |
|  -------- | -------- |
| `**amount_**insert_card`, `insert_card` | Text to request insertion of a chip card.  |
| `**amount_**insert_card_fallback`, `insert_card_fallback` | Text to request insertion of a chip card as fallback.  |
| `**amount_**insert_card_retry`, `insert_card_retry` | Text to request a new insertion of a chip card (retry).  |
| `**amount_**insert_swipe_card`, `insert_swipe_card` | Text to request insertion of a chip card or to swipe a magnetic card.  |
| `**amount_**insert_swipe_tap_card`, `insert_swipe_tap_card` | Text to request insertion of a chip card, to swipe a magnetic card or to tap a contactless card.  |
| `**amount_**insert_tap_card`, `insert_tap_card` | Text to request insertion of a chip card or to tap a contactless card.  |
| `**amount_**swipe_card`, `swipe_card` | Text to request swiping a magnetic card.  |
| `**amount_**swipe_card_fallback`, `swipe_card_fallback` | Text to request swiping a magnetic card as fallback.  |
| `**amount_**swipe_tap_card`, `swipe_tap_card` | Text to request swiping a magnetic card or to tap a contactless card.  |
| `**amount_**tap_card`, `tap_card` | Text to request tapping a contactless card.  |
| `trx_type_cash_advance` | Text used for EMV transaction type `EMV_ADK_TRAN_TYPE_CASH` (value `0x01` in TLV tag `9C`), which is passed as variable `ttt` to `trx_type_amount_format` (see section [Amount formatting](#ui_catalogs_amount_formatting)). Variables above using prefix `**amount_**` are composed `trx_type_amount_format`. 

 |
| `trx_type_cashback` | Text used for EMV transaction type `EMV_ADK_TRAN_TYPE_CASHBACK` (value `0x09` in TLV tag `9C`), which is passed as variable `ttt` to `trx_type_amount_format` (see section [Amount formatting](#ui_catalogs_amount_formatting)). Variables above using prefix `**amount_**` are composed of `trx_type_amount_format`. 

 |
| `trx_type_refund` | Text used for EMV transaction type `EMV_ADK_TRAN_TYPE_REFUND` (value `0x20` in TLV tag `9C`), which is passed as variable `ttt` to `trx_type_amount_format` (see section [Amount formatting](#ui_catalogs_amount_formatting)). Variables above using prefix `**amount_**` are composed of `trx_type_amount_format`. 

 |
| `trx_type_purchase` | Text used for arbitrary EMV transaction type (not equal to values above in TLV tag `9C`), which is passed as variable `ttt` to `trx_type_amount_format` (see section [Amount formatting](#ui_catalogs_amount_formatting)). Variables above using prefix `**amount_**` are composed of `trx_type_amount_format`. 

 |



* **Command**[Display Idle Screen (24-07)]
Variables specifying content of region 4 of [idle.html] for idle screen with command [Display Idle Screen (24-07)].

| `name` | Description of `value` |
|  -------- | -------- |
| `idle_screen_text` | Welcome text used for the SDI idle screen. Since UI catalogs support HTML, it is possible to use element `img` to refer an custom image. 

 |



* **EMV status messages (with text ID)**
Variables used for EMV status messages. ADKEMV triggers status messages from internal transaction flow with a text ID, which SDI has to display.

| `name` | EMV text ID | Description of `value` |
|  -------- | -------- | -------- |
| `amount_conf` | `EMV_ADK_TXT_AMOUNT` | Text to confirm the transaction amount. This should be composed of `amount_format` displaying the amount (see section [Amount formatting](#ui_catalogs_amount_formatting)).  |
| `approved` | `EMV_ADK_TXT_APPROVED` | Text to inform user that transaction was successfull/approved.  |
| `auth_approved` | `EMV_ADK_TXT_AUTH_APPROVED` | Text to inform user that authorization/reservation was successful/approved.  |
| `auth_declined` | `EMV_ADK_TXT_AUTH_DECLINED` | Text to inform user that authorization/reservation has failed/was declined.  |
| `authorizing` | `EMV_ADK_TXT_AUTHORIZING` | Text to inform user that an online authorization/transaction is in progress.  |
| `card_error` | `EMV_ADK_TXT_CARD_ERROR` | Text to inform user that a card error occured.  |
| `2_cards_in_field` | `EMV_ADK_TXT_2_CARDS_IN_FIELD` | Text to inform user that 2 contactless cards in field were detected.  |
| `card_read_ok` | `EMV_ADK_TXT_CARD_READ_OK` | Text to inform user that card was read successfully.  |
| `cashback_conf_amount` | `EMV_ADK_TXT_3AMO_CASHBACK` | Text to confirm total amount for cashback payment. This should be composed of `amount_format` displaying the amount (see section [Amount formatting](#ui_catalogs_amount_formatting)).  |
| `declined` | `EMV_ADK_TXT_DECLINED` | Text to inform user that transaction has failed/was declined.  |
| `not_accepted` | `EMV_ADK_TXT_NOT_ACCEPTED` | Text to inform user that the card was not accepted.  |
| `processing_error` | `EMV_ADK_TXT_PROCESSING_ERROR` | Text to inform user that a processing error occured for this transaction.  |
| `refund_conf_amount` | `EMV_ADK_TXT_REFUND_CONF_AMOUNT` | Text to confirm the refund transaction amount. This should be composed of `amount_format` displaying the amount (see section [Amount formatting](#ui_catalogs_amount_formatting)).  |
| `remove_card` | `EMV_ADK_TXT_REMOVE_CARD` | Text to inform user to remove the card from card reader.  |
| `retap_card` | `EMV_ADK_TXT_RETAP_SAME` | Text to inform user to retap the contactless card.  |
| `retap_card_l1` | `EMV_ADK_TXT_RETAP_SAME_L1` | Text to inform user to retap the contactless card (requested by EMV Level 1 layer).  |
| `see_phone` | `EMV_ADK_TXT_SEE_PHONE` | Text to inform user to follow instructions on mobile phone (during contacless payment).  |
| `tip_conf_amount` | `EMV_ADK_TXT_3AMO_TIP` | Text to confirm total amount for tip payment. This should be composed of `amount_format` displaying the amount (see section [Amount formatting](#ui_catalogs_amount_formatting)).  |
| `use_chip_reader` | `EMV_ADK_TXT_USE_CHIP_READER` | Text to inform user to use the chip card reader.  |
| `use_mag_stripe` | `EMV_ADK_TXT_USE_MAG_STRIPE` | Text to inform user to use the magnetic card reader.  |
| `voice_auth` | `EMV_ADK_TXT_VOICEAUT` | Text to inform user in case of a voice authorization (e.g. due to communication problem).  |
| `invalid_pin` | `0x30` | Text to inform user that entered PIN was wrong (**obsolete**, text ID used by very old ADKEMV versions and kept for compatibility reasons only)  |
| `last_pin_try` | `0x27` | Text to inform user that this is the last try to enter the PIN (**obsolete**, text ID used by very old ADKEMV versions and kept for compatibility reasons only)  |



* **Miscellaneous**
Miscellaneous variables used by SDI, which cannot be categorized into sections above. For details and purpose see column description.

| `name` | Description of `value` |
|  -------- | -------- |
| `invalid_pin` | Text to inform user that entered PIN was wrong (used for internal PIN entry with UI standard mode not using [PED Get PIN (22-01)])  |
| `invalid_pin_try_again` | Text to inform user to enter the PIN again (used for internal PIN entry with UI standard mode not using [PED Get PIN (22-01)])  |
| `invalid_pin_last_pin_try` | Text to inform user that this is the last try to enter the PIN (used for internal PIN entry with UI standard mode not using [PED Get PIN (22-01)])  |
| `please_wait` | Text displayed while terminal or transaction is in progress ("please wait")  |
| `select_application` | Prompt for EMV application selection menu (used for internal menu selection with UI standard mode)  |
| `select_com_if` | Header text for COM interface selection menu (provided with menu button on idle screen in UI standard mode). SDI menus accessable via idle screen in UI standard mode have no multi-language support and are displayed in English language only. Thus, these texts recently cannot be customized with UI catalogs. 

 |





 An additional example user config package comes along in subfolder `example/load/usr_config` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`: 

* **dl.sdi-usrconfig-text-catalog-X.X.X-X-P2PE-X.X.X.tar**

This package installs 3 custom UI text catalogs (for languages English, German and French), which contain all supported SDI texts, which can be used in a custom UI catalog (see tables above). All texts use red color indicating on the display that the text was provided by these sample catalog files. 



### Install UI user config packages

As described in chapter [Default UI resource files], it is not possible to replace default resource files (HTML files, CSS files, images and UI text catalogs), which are installed with SDI base packages to SDI home directory. Customized UI resources must be installed to a different location with an [User config package] so that SDI server can apply them instead using the default files (resource file overloading). With this concept SDI server is able to fallback to the default, whenever an [User config package] is uninstalled.

On VOS/VOS2 user config packages are installed to following device location: 

```
/etc/config
```

 On VOS3 SDI uses different locations for user config files. Instead of using a global system folder as on VOS/VOS2, SDI server looks up the files from home user folder: 

```
/home/usr<X>
```

 SDI server uses folder `sdi` as application subfolder, whereas resource files for ADKGUI are looked up in additional subfolder `www`.

 Thus, the [User config package] must contain resource files in a subfolder `sdi/www`, so that these files are installed to following device location:

 VOS/VOS2: 

```
/etc/config/sdi/www
```

 VOS3: 

```
/home/usr<X>/sdi/www
```

The following resource file types can be added to this folder: 

* **HTML templates**

As mentioned in chapter [Default UI resource files], it is not possible to overload existing SDI default HTML files. However, SDI command [Handle Display (24-03)] supports displaying additional HTML templates, which can be part of the UI user config package. For more details, please refer to command discription of [Handle Display (24-03)]. 
* **CSS files**

CSS files must have file name `style.css` and are located in device specific subfolders (e.g. `854x480C15T` for M400, see ADKGUI documentation for details). For more information about CSS files, please refer to description in chapter [Default UI resource files]. If a CSS file `style.css` is installed into this device specific folder, SDI server prefers this CSS file instead of using the default CSS file under `www` in SDI home directory. 
* **Images**

Image files are installed into subfolder `images`. Images installed by the [User config package] to this subfolder are preferred to default image files under `www` in SDI home directory. Image files must have the same name as listed in chapter [Default UI resource files]. If the image is not found there, SDI server uses the default image, thus, developers need not to add the complete list of images to the [User config package]. Finally, an [User config package] may contain additionals arbitrary images, which are used by HTML templates with command [Handle Display (24-03)]. 
* **UI text catalogs**

Custom UI text catalogs can be installed can installed to device specific subfolders or to default resource folder of ADKGUI (see chapter [Custom UI text catalogs]). These catalog files are applied for special commands, in addition, they can be used to implement language independent HTML templates for command [Handle Display (24-03)]. 

Additional example UI user config packages come along in subfolder `example/load/usr_config` of SDI documentation package `sdi-doc-X.X.X-X-P2PE-X.X.X.zip`: 

* **dl.sdi-usrconfig-adk-style-X.X.X-X-P2PE-X.X.X.tar**

This package installs an example look and feel for SDI server, which is similar to flat blue UI design used for several ADK applications (Log Control Panel, CP Downloader). 
* **dl.sdi-usrconfig-old-leds-X.X.X-X-P2PE-X.X.X.tar**

This package installs the old CTLS LED bar, which was used in old versions of SDI server (< 3.x.x). 
* **dl.sdi-usrconfig-text-catalog-X.X.X-X-P2PE-X.X.X.tar**

This package installs 3 custom UI text catalogs (for languages English, German and French), which contain UI texts to customize the PIN entry dialog. 

Users can easily switch back SDI server to default UI design by just uninstalling the UI user config package.

Different user config packages containing files with the same location must not be installed in parallel, since the files would overwrite each other during installation. This could lead to undesired behaviour with Verifone Secure Installer (e.g. when removing the packages).



# Troubleshooting


## Updates

It is recommended always to use the newest version of SDI server, which contains the most bugfixes, therefore it will solve known issues.

 An Update of the SDI Server is basically possible by two ways: 

1. Download/Install new SDI packages as described in chapter [Installation]
2. Using the Software Upload commands via the serialized interface (see [Software and Configuration Upload]) 


## FAQ

Q: Are additional ADK components required to run the SDI-Server?

A: Yes, depending on the device and use case some further ADK components are neccessary. The best way to load a device correctly is the usage of the ADK integration packages.


## Logging

To activate the SDI-Server log the LCP needs to be configured. Please create a configuration for AppId "SDI" to get the log.



# Appendix


## Basic Transaction Flows


### Basic MSR Flow

![SDI_Basic_MSR_Flow.svg](.//SDI_Basic_MSR_Flow.svg)


### Basic EMV CT Flow

![SDI_Basic_EMV_CT_Flow.svg](.//SDI_Basic_EMV_CT_Flow.svg)


### Basic EMV CTLS Flow

![SDI_Basic_EMV_CTLS_Flow.svg](.//SDI_Basic_EMV_CTLS_Flow.svg)


### Basic Manual Card Entry Flow

![SDI_Basic_MCE_Flow.svg](.//SDI_Basic_MCE_Flow.svg)


### Basic MSR Flow with EPP

![SDI_Basic_MSR_Flow_EPP.svg](.//SDI_Basic_MSR_Flow_EPP.svg)


### Basic EMV CT Flow with EPP

![SDI_Basic_EMV_CT_Flow_EPP.svg](.//SDI_Basic_EMV_CT_Flow_EPP.svg)


### Basic EMV CTLS Flow with EPP

![SDI_Basic_EMV_CTLS_Flow_EPP.svg](.//SDI_Basic_EMV_CTLS_Flow_EPP.svg)


## Hybrid Card Reader Card Detection Flows


### Hybrid Card Reader Card Detection Flow

![SDI_HybridReader_Card_Detect_Scenarios.svg](.//SDI_HybridReader_Card_Detect_Scenarios.svg)


### Hybrid Card Reader Asynchronous Card Detection Flow (Callback Mode)

![SDI_HybridReader_Card_Detect_Async_Scenarios_Callabck.svg](.//SDI_HybridReader_Card_Detect_Async_Scenarios_Callabck.svg)


### Hybrid Card Reader Asynchronous Card Detection Flow (Polling Mode)

![SDI_HybridReader_Card_Detect_Async_Scenarios_Polling.svg](.//SDI_HybridReader_Card_Detect_Async_Scenarios_Polling.svg)


## Supported Currencies

The SDI-Server in Standard Mode is able to display currencies corresponding to the official ISO 4217 definition for the following currency codes:


| ISO Code  | Currency Text  | Description   |
|  -------- | -------- | -------- |
| 008  | ALL  | Albanian lek   |
| 012  | DZD  | Algerian dinar   |
| 032  | ARS  | Argentine peso   |
| 036  | AUD  | Australian dollar   |
| 044  | BSD  | Bahamian dollar   |
| 048  | BHD  | Bahraini dinar   |
| 050  | BDT  | Bangladeshi taka   |
| 051  | AMD  | Armenian dram   |
| 052  | BBD  | Barbados dollar   |
| 060  | BMD  | Bermudian dollar   |
| 064  | BTN  | Bhutanese ngultrum   |
| 068  | BOB  | Boliviano   |
| 072  | BWP  | Botswana pula   |
| 084  | BZD  | Belize dollar   |
| 090  | SBD  | Solomon Islands dollar   |
| 096  | BND  | Brunei dollar   |
| 104  | MMK  | Myanmar kyat   |
| 108  | BIF  | Burundian franc   |
| 116  | KHR  | Cambodian riel   |
| 124  | CAD  | Canadian dollar   |
| 132  | CVE  | Cape Verdean escudo   |
| 136  | KYD  | Cayman Islands dollar   |
| 144  | LKR  | Sri Lankan rupee   |
| 152  | CLP  | Chilean peso   |
| 156  | CNY  | Renminbi   |
| 170  | COP  | Colombian peso   |
| 174  | KMF  | Comoro franc   |
| 188  | CRC  | Costa Rican colon   |
| 192  | CUP  | Cuban peso   |
| 203  | CZK  | Czech koruna   |
| 208  | DKK  | Danish krone   |
| 214  | DOP  | Dominican peso   |
| 222  | SVC  | Salvadoran colón   |
| 230  | ETB  | Ethiopian birr   |
| 232  | ERN  | Eritrean nakfa   |
| 238  | FKP  | Falkland Islands pound   |
| 242  | FJD  | Fiji dollar   |
| 262  | DJF  | Djiboutian franc   |
| 270  | GMD  | Gambian dalasi   |
| 292  | GIP  | Gibraltar pound   |
| 320  | GTQ  | Guatemalan quetzal   |
| 324  | GNF  | Guinean franc   |
| 328  | GYD  | Guyanese dollar   |
| 332  | HTG  | Haitian gourde   |
| 340  | HNL  | Honduran lempira   |
| 344  | HKD  | Hong Kong dollar   |
| 348  | HUF  | Hungarian forint   |
| 352  | ISK  | Icelandic króna (plural: krónur)   |
| 356  | INR  | Indian rupee   |
| 360  | IDR  | Indonesian rupiah   |
| 364  | IRR  | Iranian rial   |
| 368  | IQD  | Iraqi dinar   |
| 376  | ₪  | ILS, Israeli new shekel   |
| 388  | JM$  | JMD, Jamaican dollar   |
| 392  | JPY  | Japanese yen   |
| 398  | KZT  | Kazakhstani tenge   |
| 400  | JOD  | Jordanian dinar   |
| 404  | KES  | Kenyan shilling   |
| 408  | KPW  | North Korean won   |
| 410  | KRW  | South Korean won   |
| 414  | KWD  | Kuwaiti dinar   |
| 417  | KGS  | Kyrgyzstani som   |
| 418  | LAK  | Lao kip   |
| 422  | LBP  | Lebanese pound   |
| 426  | LSL  | Lesotho loti   |
| 430  | LRD  | Liberian dollar   |
| 434  | LYD  | Libyan dinar   |
| 446  | MOP  | Macanese pataca   |
| 454  | MWK  | Malawian kwacha   |
| 458  | MYR  | Malaysian ringgit   |
| 462  | MVR  | Maldivian rufiyaa   |
| 480  | MUR  | Mauritian rupee   |
| 484  | MXN  | Mexican peso   |
| 496  | MNT  | Mongolian tögrög   |
| 498  | MDL  | Moldovan leu   |
| 504  | MAD  | Moroccan dirham   |
| 512  | OMR  | Omani rial   |
| 516  | NAD  | Namibian dollar   |
| 524  | NPR  | Nepalese rupee   |
| 532  | ANG  | Netherlands Antillean guilder   |
| 533  | AWG  | Aruban florin   |
| 548  | VUV  | Vanuatu vatu   |
| 554  | NZD  | New Zealand dollar   |
| 558  | NIO  | Nicaraguan córdoba   |
| 566  | NGN  | Nigerian naira   |
| 578  | NOK  | Norwegian krone   |
| 586  | PKR  | Pakistani rupee   |
| 590  | PAB  | Panamanian balboa   |
| 598  | PGK  | Papua New Guinean kina   |
| 600  | PYG  | Paraguayan guaraní   |
| 604  | PEN  | Peruvian sol   |
| 608  | PHP  | Philippine peso   |
| 634  | QAR  | Qatari riyal   |
| 643  | RUB  | Russian ruble   |
| 646  | RWF  | Rwandan franc   |
| 654  | SHP  | Saint Helena pound   |
| 682  | SAR  | Saudi riyal   |
| 690  | SCR  | Seychelles rupee   |
| 694  | SLL  | Sierra Leonean leone (old leone)   |
| 702  | SGD  | Singapore dollar   |
| 704  | VND  | Vietnamese đồng   |
| 706  | SOS  | Somali shilling   |
| 710  | ZAR  | South African rand   |
| 728  | SSP  | South Sudanese pound   |
| 748  | SZL  | Swazi lilangeni   |
| 752  | SEK  | Swedish krona (plural: kronor)   |
| 756  | CHF  | Swiss franc   |
| 760  | SYP  | Syrian pound   |
| 764  | THB  | Thai baht   |
| 776  | TOP  | Tongan paʻanga   |
| 780  | TTD  | Trinidad and Tobago dollar   |
| 784  | AED  | United Arab Emirates dirham   |
| 788  | TND  | Tunisian dinar   |
| 800  | UGX  | Ugandan shilling   |
| 807  | MKD  | Macedonian denar   |
| 818  | EGP  | Egyptian pound   |
| 826  | £  | GBP, Pound sterling   |
| 834  | TZS  | Tanzanian shilling   |
| 840  | $  | USD, United States dollar   |
| 858  | UYU  | Uruguayan peso   |
| 860  | UZS  | Uzbekistan sum   |
| 882  | WST  | Samoan tala   |
| 886  | YER  | Yemeni rial   |
| 901  | TWD  | New Taiwan dollar   |
| 925  | SLE  | Sierra Leonean leone (new leone)   |
| 926  | VED  | Venezuelan digital bolívar   |
| 927  | UYW  | Unidad previsional   |
| 928  | VES  | Venezuelan sovereign bolívar   |
| 929  | MRU  | Mauritanian ouguiya   |
| 930  | STN  | São Tomé and Príncipe dobra   |
| 932  | ZWL  | Zimbabwean dollar (fifth)   |
| 933  | BYN  | Belarusian ruble   |
| 934  | TMT  | Turkmenistan manat   |
| 936  | GHS  | Ghanaian cedi   |
| 938  | SDG  | Sudanese pound   |
| 940  | UYI  | Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)   |
| 941  | RSD  | Serbian dinar   |
| 943  | MZN  | Mozambican metical   |
| 944  | AZN  | Azerbaijani manat   |
| 946  | RON  | Romanian leu   |
| 947  | CHE  | WIR euro (complementary currency)   |
| 948  | CHW  | WIR franc (complementary currency)   |
| 949  | TRY  | Turkish lira   |
| 950  | XAF  | CFA franc BEAC   |
| 951  | XCD  | East Caribbean dollar   |
| 952  | XOF  | CFA franc BCEAO   |
| 953  | XPF  | CFP franc (franc Pacifique)   |
| 967  | ZMW  | Zambian kwacha   |
| 968  | SRD  | Surinamese dollar   |
| 969  | MGA  | Malagasy ariary   |
| 970  | COU  | Unidad de Valor Real (UVR) (funds code)   |
| 971  | AFN  | Afghan afghani   |
| 972  | TJS  | Tajikistani somoni   |
| 973  | AOA  | Angolan kwanza   |
| 975  | BGN  | Bulgarian lev   |
| 976  | CDF  | Congolese franc   |
| 977  | BAM  | Bosnia and Herzegovina convertible mark   |
| 978  | €  | EUR, Euro   |
| 979  | MXV  | Mexican Unidad de Inversion (UDI) (funds code)   |
| 980  | UAH  | Ukrainian hryvnia   |
| 981  | GEL  | Georgian lari   |
| 984  | BOV  | Bolivian Mvdol (funds code)   |
| 985  | PLN  | Polish złoty   |
| 986  | BRL  | Brazilian real   |
| 990  | CLF  | Unidad de Fomento (funds code)   |
| 997  | USN  | United States dollar (next day) (funds code)   |


For TLV tag 5F2A the hexadecimal value of left column is expected (e.g. 0x0978 for Euro).


## Supported System Languages

SDI server recently supports the following system/transaction languages: 
| Language | Definition | Value  |
|  -------- | -------- | -------- |
| English  | `EMV_ADK_LANG_ENGLISH` | `0x01` |
| German  | `EMV_ADK_LANG_GERMAN` | `0x02` |
| French  | `EMV_ADK_LANG_FRENCH` | `0x03` |
| Spanish  | `EMV_ADK_LANG_SPANISH` | `0x04` |
| Italian  | `EMV_ADK_LANG_ITALIAN` | `0x05` |
| Swedish  | `EMV_ADK_LANG_SWEDISH` | `0x08` |
| Turkish  | `EMV_ADK_LANG_TURKISH` | `0x0B` |
| Danish  | `EMV_ADK_LANG_DANSK` | `0x0C` |
| Dutch  | `EMV_ADK_LANG_DUTCH` | `0x0D` |
| Portuguese  | `EMV_ADK_LANG_PORTUGUESE` | `0x0F` |
| Hebrew  | `EMV_ADK_LANG_HEBREW` | `0x1D` |


SDI interface uses definitions of ADKEMV for TLV tag `D6` (system tag) and TLV tag `DFA008` (text language).

 In standard mode SDI server uses serveral UI text catalogs, which are installed with SDI base packages (see chapter [Default UI resource files]).


## Format Conventions

The SDI-Server documentation uses the following data element formats:


| Format  | Content   |
|  -------- | -------- |
| a  | Alphabetic data elements contain a single character per byte (a to z and A to Z)   |
| an  | Alphabetic data elements contain a single character per byte (a to z, A to Z and 0 to 9)   |
| ans  | ASCII data elements contain a single character per byte   |
| b  | Unsigned binary numbers or bit combinations that are defined elsewhere in the specification   |
| html  | The data element contains Hypertext Markup Language (HTML)   |
| json  | Data element in JavaScript Object Notation (JSON)   |
| n  | Numeric data elements consist of two numeric digits per byte padded with leading hexadecimal zeroes (BCD)   |
| nF  | Numeric data elements consist of two numeric digits per byte padded and/or obfuscated with F at the affected digit   |
| tlv  | Constructed BER-TLV tag   |
| utf-8  | Utf-8 string   |



## Legend

The following is an overview of the abbreviations used in this document and their meaning:


| Abbreviation  | Explanation   |
|  -------- | -------- |
| bin  | The corresponding value is shown in binary format   |
| dec  | The corresponding value is shown in decimal format   |
| hex  | The corresponding value is shown in hexadecimal format   |
| M/O  | The data element is Mandatory (M) respectively Optional (O)   |
| Size  | Specifies the (decimal) number of bytes of a data element   |
| Tag  | Describes a BER-TLV data object   |
| var.  | The corresponding data object has a variable length   |




## Examples


### UI command examples


#### Handle Display (24-03)

This chapter contains examples for command [Handle Display (24-03)]

**Example 1: Display a dialog with text "Hello World" and 2 Buttons (standard cancel and enter button)**

SDI command: 

```
2403 0000 F027FFA0110FDFA0130B48656C6C6F20576F726C64DFA143055469746C65DFA13D010ADFA005020000
Content of tag F0:  size=39  {
      FFA011 (display data)  size=15  {
         DFA013 (variable value)  size=11  48656C6C6F20576F726C64 ("Hello World")
      }
      DFA143 (dialog label text)  size=5   5469746C65 ("Title")
      DFA13D (dialog options)  size=1   0A (DLG_CancelKey|DLG_EnterKey)
      DFA005 (timeout)  size=2   0000 (infinite)
}
```

Display content: 
| ![ui_example_handle_display_1.png](.//ui_example_handle_display_1.png) |
|  -------- |
| Dialog with text and 2 buttons |


SDI response for pressed enter button: 

```
9000
```

 SDI response for pressed cancel button: 

```
6405
```

**Example 2: Display a YES/NO dialog with a question text and logo (w/o dialog title and CTLS Leds)**

SDI command: 

```
2403 0000 F036FFA01113DFA0130F446F20796F75206C696B652069743FDFA13E03594553DFA140024E4FDFA13D0304005ADFA00502003CDFA00D0101
Content of tag F0:  size=54  {
      FFA011 (display data)  size=19  {
         DFA013 (variable value)  size=15  446F20796F75206C696B652069743F ("Do you like it?")
      }
      DFA13E (Enter button label text)  size=3   594553 ("YES")
      DFA140 (Cancel button label text)  size=2   4E4F ("NO")
      DFA13D (dialog options)  size=3   04005A (DLG_NoHeader|DLG_QuestionLogo|DLG_NoLEDs|DLG_EnterKey|DLG_CancelKey)
      DFA005 (timeout)  size=2   003C (60 seconds)
      DFA00D (beep)  size=1   01 (buzzer when dialog is displayed)
}
```

Display content: 
| ![ui_example_handle_display_2.png](.//ui_example_handle_display_2.png) |
|  -------- |
| Display a YES/NO dialog with a question text/logo |


SDI response for pressed YES button: 

```
9000
```

 SDI response for pressed NO button: 

```
6405
```

 SDI response for timeout: 

```
6600
```

**Example 3: Display a text screen on bottom of the screen (w/o softkeys), which uses clear key as additional key action**

SDI command: 

```
2403 0000 F049FFA0111FDFA0131B507265737320636C656172206B657920746F20636F6E74696E7565FFA10615DFA13B042623383BDFA13C0965786974202D313030DFA13D03160010DFA005020000
Content of tag F0:  size=73  {
      FFA011 (display data)  size=31  {
         DFA013 (variable value)  size=27  507265737320636C656172206B657920746F20636F6E74696E7565 ("Press clear key to continue")
      }
      FFA106 (additional key action)  size=21  {
         DFA13B (keycode)  size=4   2623383B ("&#8;")
         DFA13C (action)  size=9   65786974202D313030 ("exit -100")
      }
      DFA13D (dialog options)  size=3   160010 (DLG_ClearOnReturn|DLG_NoHeader|DLG_TextAlignBottomDLG_NoLEDs)
      DFA005 (timeout)  size=2   0000 (infinite)
}
```

Display content: 
| ![ui_example_handle_display_3.png](.//ui_example_handle_display_3.png) |
|  -------- |
| Text screen w/o softkeys, headline, CTLS Leds |



After this dialog returns, the display is cleared by option `DLG_ClearOnReturn`.

SDI response for pressed clear key: 

```
6400 F008DFA00004FFFFFF9C
Content of tag F0:  size=8   {
      DFA000 (UI error code)  size=4   FFFFFF9C (-100)
}
```

 The result `-100` is returned as 6400 with additional UI error code in TLV tag DFA000.


#### Handle Menu (24-05)

This chapter contains examples for command [Handle Menu (24-05)]

**Example 1: Display a menu with 4 options (option 2 pre-selected) including texts for dialog header and menu prompt**

SDI command: 

```
2405 0000 F05DDFA00A0D506C656173652073656C656374DFA00B084F7074696F6E2031DFA00B084F7074696F6E2032DFA00B084F7074696F6E2033DFA00B084F7074696F6E2034DFA00C0102DFA00502001EDFA13D0106DFA14308534449204D656E75
Content of tag F0: size=93  {
      DFA00A (menu text prompt)  size=13  506C656173652073656C656374 ("Please select")
      DFA00B (menu entry text)  size=8   4F7074696F6E2031 ("Option 1" )
      DFA00B (menu entry text)  size=8   4F7074696F6E2032 ("Option 2" )
      DFA00B (menu entry text)  size=8   4F7074696F6E2033 ("Option 3" )
      DFA00B (menu entry text)  size=8   4F7074696F6E2034 ("Option 4" )
      DFA00C (index pre-selected item)  size=1   02
      DFA005 (timeout)  size=2   001E (30 seconds)
      DFA13D (dialog options)  size=1   06 (MENU_ClearOnReturn|MENU_NoLEDs)
      DFA143 (dialog label text)   size=8   534449204D656E75 ("SDI Menu")
}
```

Display content: 
| ![ui_example_handle_menu_1.png](.//ui_example_handle_menu_1.png) |
|  -------- |
| Menu with 4 options (option 2 pre-selected) |



After this dialog returns, the display is cleared by option `MENU_ClearOnReturn`.

SDI response for selected option 3: 

```
9000 F005DFA00C0103
Content of tag F0: size=5   {
      DFA00C (selected menu entry)  size=1   03
}
```

 SDI response for pressed cancel button: 

```
6405
```

 SDI response for timeout: 

```
6600
```

**Example 2: Display a menu with 3 options (no option pre-selected) and button text labels, clear key used as additional key action to move selection down**

SDI command: 

```
2405 0000 F075DFA00A1153656C65637420796F7572206472696E6BDFA00B055761746572DFA00B06436F66666565DFA00B0442656572DFA00C0100DFA005020000DFA13D0102DFA13E0653656C656374DFA1400541626F7274DFA141025570DFA14204446F776EFFA10610DFA13B042623383BDFA13C04646F776E
Content of tag F0: size=117 {
      DFA00A (menu text prompt)  size=17  53656C65637420796F7572206472696E6B ("Select your drink")
      DFA00B (menu entry text)  size=5   5761746572 ("Water")
      DFA00B (menu entry text)  size=6   436F66666565 ("Coffee")
      DFA00B (menu entry text)  size=4   42656572 ("Beer")
      DFA00C (index pre-selected item)  size=1   00 (none)
      DFA005 (timeout)  size=2   0000 (infinite)
      DFA13D (dialog options)  size=1   02 (MENU_NoLEDs)
      DFA13E (Enter button label text)  size=6   53656C656374 ("Select")
      DFA140 (Cancel button label text)  size=5   41626F7274 ("Abort")
      DFA141 (Up button label text)  size=2   5570 ("Up")
      DFA142 (Down button label text) size=4   446F776E ("Down")
      FFA106 (additional key action)  size=16  {
         DFA13B   size=4   2623383B ("&#8;")
         DFA13C   size=4   646F776E ("down")
      }
}
```

Display content: 
| ![ui_example_handle_menu_2.png](.//ui_example_handle_menu_2.png) |
|  -------- |
| Menu with 3 options (none pre-selected) and button text labels

Dialog header contains default logo. |


SDI response for selected option 1: 

```
9000 F005DFA00C0101
Content of tag F0: size=5   {
      DFA00C (selected menu entry)  size=1   01
}
```

 SDI response for pressed Abort button: 

```
6405
```


#### Handle HTML dialog (24-0A)

This chapter contains an example for command [Handle HTML Dialog (24-0A)]

**Example: Display a dialog for input tip**

SDI command: 

```
240A 0000 F058DFA020087469702E68746D6CFFA01113DFA01206616D6F756E74DFA013053130303030FFA01114DFA012097468726573686F6C64DFA01303323030FFA01113DFA0120863757272656E6379DFA01303455552DFA005020000
Content of tag F0:  size=88  {
      DFA020 (HTML file name)  size=8   7469702E68746D6C ("tip.html")
      FFA011 (display data)  size=19  {
         DFA012 (variable name)  size=6   616D6F756E74 ("amount")
         DFA013 (variable value)  size=5   3130303030 ("10000")
      }
      FFA011 (display data)  size=20  {
         DFA012 (variable name)  size=9   7468726573686F6C64 ("threshold")
         DFA013 (variable value)  size=3   323030 ("200")
      }
      FFA011 (display data)  size=19  {
         DFA012 (variable name)  size=8   63757272656E6379 ("currency")
         DFA013 (variable value)  size=3   455552 ("EUR")
      }
      DFA005 (timeout)  size=2   0000 (infinite)
}
```

Display content: 
| ![ui_example_handle_html_dialog.png](.//ui_example_handle_html_dialog.png) |
|  -------- |
| HTML dialog for tip input |


SDI response for successful input (25% button pressed and confirmed) 

```
9000 F06FFFA01413DFA01506616D6F756E74DFA016053130303030FFA01413DFA0150863757272656E6379DFA01603455552FFA01414DFA015097468726573686F6C64DFA01603323030FFA0140FDFA01503746970DFA0160432353030FFA01412DFA01505746F74616CDFA016053132353030
Content of tag F0:  size=111 {
      FFA014 (output data)  size=19  {
         DFA015 (variable name)  size=6   616D6F756E74 ("amount")
         DFA016   size=5   3130303030 ("10000")
      }
      FFA014 (output data)  size=19  {
         DFA015 (variable name)  size=8   63757272656E6379 ("currency")
         DFA016 (variable value)  size=3   455552 ("EUR")
      }
      FFA014 (output data)  size=20  {
         DFA015 (variable name)  size=9   7468726573686F6C64 ("threshold")
         DFA016 (variable value)  size=3   323030 ("200")
      }
      FFA014 (output data)  size=15  {
         DFA015 (variable name)  size=3   746970 ("tip")
         DFA016 (variable value)  size=4   32353030 ("2500")
      }
      FFA014 (output data)  size=18  {
         DFA015 (variable name)  size=5   746F74616C ("total")
         DFA016 (variable value)  size=5   3132353030 ("12500")
      }
}
```


## VCL Particularities

When using the SDI Server with enabled VCL (e.g. in North America), the following points should be taken into account:



* A SDI whitelist.json is not necessary/supported and should therefore not loaded on the device. Instead, the VCL BinTable mechanism works as usual.


## Obsolete Commands

The following commands are obsolete and should no longer be used!



* MSR Enable (21-00)
* PED Enable (22-00)
* Card Detect Enable (23-00)
* Display Enable (24-00)
* Smart Card Enable (41-00) 

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

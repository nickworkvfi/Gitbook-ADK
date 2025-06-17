---
title: ADK-TMS-AGENT Programmers Guide

---

# ADK-TMS-AGENT Programmers Guide




# Preface

This document describes the functionality of ADK TMS Agent and provides the steps to install and configure for various supported platforms.


## Audience

This guide provides the information required for application developers to utilize the functionality of the ADK TMS Agent and how to configure and install it on various platforms.


## Organization

This guide is organized as follows:

[Introduction] Provides a summary and architecture description of ADK TMS Agent.

[Architecture] VHQ Agent high level Architecture

[Getting Started] Shows the steps for installing and setting up ADK TMS Agent.

[Agent Concepts] Agent Concepts

[Programming] Describes API's and Programming Concepts.

[Programming and API Principles] Programming and API Principles

[System Setup and Requirements] Describes build environment, hardware supported, software dependencies and deliverables.

[Troubleshooting] Provides resolutions for some ADK TMS Agent issues you may encounter.

[Frequently Asked Questions (FAQ's)] FAQ's

[Capturing Logs] Discusses the procedures for downloading and investigating error logs.

[Appendixes] - Glossary and special component information.

[Appendix A - Acronym Definitions]

[Appendix B - ADK TMS Agent Configuration Parameters] - Gives ADK TMS Agent configuration parameters.

[Appendix C - ADK TMS Agent Diagnostic Counters] - Gives ADK TMS Agent Diagnostic Counters.

[Appendix D - ADK TMS Agent Diagnostic Actions] - Gives ADK TMS Agent Diagnostic Actions.

[Appendix E - ADK TMS Agent Getdevice Profile] - Gives ADK TMS Agent Get device Profile.

[Appendix F - ADK Communication Options] - Presents a brief discussion of ADK TMS Agent communication options.


# Introduction

The ADK TMS Agent is part of the Application Development Kit (ADK), responsible for communicating to VHQ Server.

ADK is a software abstraction layer that is between the hardware platform operating system and the device application.

It provides a common interface for all applications to use. The ADK interface can also be used to access and control the ADK TMS Agent.

The ADK TMS Agent is part of Verifone HeadQuarters (VHQ). It is a client side terminal application that communicates with the VHQ Server and runs in the background through its own communication channel. The ADK TMS Agent sends and receives various messages in performance of managing the device. It periodically sends a heartbeat message to indicate to the VHQ Server the device is active and communicating.


# Architecture

ADK TMS Agent currently supports 3 different operating system (OS) platforms and various hardware platforms that run these OS types.

The main hardware platforms currently supported by VHQ are the MX and VX platforms which each have various hardware models that belong to each of these platforms.

The MX platforms supported by VHQ consist of the MX8xx and MX7xx series which run Verifone's RFS OS.

The MX platforms also have the MX9xx series which runs Verifone's V/OS operating system.

The VX platforms supported by VHQ run the Verix eVo OS. ADK TMS Agent is a component of the ADK and the ADK interface/APIs can be used to control and access the Agent functionality.

The VX platforms also include the e-series mobile devices, e315, e335 and e355. These are mobile devices and their main communication interface is WiFi.

The following table describes the various platforms, OS and ADK TMS versions:

**Table 2 Agent Version, OS Support and ADK version**


| Agent Version  | OS Support  | ADK Version   |
|  -------- | -------- | -------- |
| 2.17.x  | Verix, V/OS, V/OS2  | ADK 4.4.x   |
| 3.2.x(Previously 2.18.x)  | V/OS, V/OS2  | ADK 4.6.x, ADK 4.7.x & Master   |
| 3.1.x  | Android (Engage secure processor running agent in subdevice mode)  | ADK 4.7.x & Master   |




* All three variations of ADK TMS Agent are generated from a single source code starting with release 2.7.x.
* RFS/MX7/MX8 support is limited only to field issues and there are no new planned development testing.

ADK TMS Agent supports 3 main architectures:



* The ADK TMS Agent ADK mode, which supports multiple communication interfaces such as Ethernet, GPRS/3G, Dial and Bluetooth.
* The ADK TMS Agent in non-ADK mode on a V/OS platform or RFS MX platform, which supports Ethernet communication interface.
* The ADK TMS Agent on a Verix platform in ADK mode, with a non-ADK-based application in the device. This configuration with VHQ using ADK mode supports Ethernet, GPRS/3G and Dial for VHQ communication.

The following illustration shows ADK TMS Agent with ADK-COM.

![04_agt_ADK_TMS_Agent_with_ADK_COM.png](.//04_agt_ADK_TMS_Agent_with_ADK_COM.png)Figure 1: ADK TMS Agent with ADK-COM ![04_agt_ADK_TMS_Agent_with_ADK_COM.png](.//04_agt_ADK_TMS_Agent_with_ADK_COM.png)Figure 1: ADK TMS Agent with ADK-COM ![04_agt_ADK_TMS_Agent_with_ADK_COM.png](.//04_agt_ADK_TMS_Agent_with_ADK_COM.png)Figure 1: ADK TMS Agent with ADK-COM ![04_agt_ADK_TMS_Agent_with_ADK_COM.png](.//04_agt_ADK_TMS_Agent_with_ADK_COM.png)Figure 1: ADK TMS Agent with ADK-COM 



* ADK TMS Agent supports Ethernet, GPRS/3G and Dial-PPP modes.

The following illustration shows ADK TMS Agent with a V/OS or RFS MX platform

![05_agt_ADK_TMS_Agent_with_VOS_or_RFS_MX_Platform.png](.//05_agt_ADK_TMS_Agent_with_VOS_or_RFS_MX_Platform.png)Figure 2: ADK TMS Agent with V/OS or RFS MX Platform![05_agt_ADK_TMS_Agent_with_VOS_or_RFS_MX_Platform.png](.//05_agt_ADK_TMS_Agent_with_VOS_or_RFS_MX_Platform.png)Figure 2: ADK TMS Agent with V/OS or RFS MX Platform![05_agt_ADK_TMS_Agent_with_VOS_or_RFS_MX_Platform.png](.//05_agt_ADK_TMS_Agent_with_VOS_or_RFS_MX_Platform.png)Figure 2: ADK TMS Agent with V/OS or RFS MX Platform![05_agt_ADK_TMS_Agent_with_VOS_or_RFS_MX_Platform.png](.//05_agt_ADK_TMS_Agent_with_VOS_or_RFS_MX_Platform.png)Figure 2: ADK TMS Agent with V/OS or RFS MX Platform



* ADK TMS Agent only supports Ethernet mode.

The following illustration shows ADK TMS Agent with a non-ADK application.

![06_agt_ADK_TMS_Agent_with_Non_ADK_Application.png](.//06_agt_ADK_TMS_Agent_with_Non_ADK_Application.png)Figure 3: ADK TMS Agent with Non-ADK Application![06_agt_ADK_TMS_Agent_with_Non_ADK_Application.png](.//06_agt_ADK_TMS_Agent_with_Non_ADK_Application.png)Figure 3: ADK TMS Agent with Non-ADK Application![06_agt_ADK_TMS_Agent_with_Non_ADK_Application.png](.//06_agt_ADK_TMS_Agent_with_Non_ADK_Application.png)Figure 3: ADK TMS Agent with Non-ADK Application![06_agt_ADK_TMS_Agent_with_Non_ADK_Application.png](.//06_agt_ADK_TMS_Agent_with_Non_ADK_Application.png)Figure 3: ADK TMS Agent with Non-ADK Application



* Supports Ethernet, GPRS/3G and Dial-PPP modes.



1. This architecture is applicable for existing Payment Apps, whether they run in a single application environment or in a multiple application environment using common solutions like VMAC, etc., along with ADK TMS Agent.
2. As EOS/CE on Verix platform will likely be shared between multiple networks, connectivity supporting components like ADK-COMs COM-DAEMON, VMAC or Direct Payment App platform using CE interface, the applications registering with ADK TMS Agent should follow these rules to avoid network resources conflict:
    * When ADK TMS Agent requests connection permission (Go/No-GO), the application should reply with No-GO (report BUSY) if it's using the connection so that ADK TMS Agent waits for GO permission.
    * Application should release EOS/CE resources directly or through their common solution components like VMAC before giving GO permission (report FREE) to ADK TMS Agent. This enables ADK TMS Agent as an application to get the resource when it tries for network connection from EOS/CE (through COM-DAEMON), without any conflict.
3. For detail on GO permissions, refer to [tms_setApplicationState()].


# Getting Started


## Languages Supported

The ADK TMS Agent only supports the English language. The Agent supports ASCII characters 0-128 and does not support Unicode character sets.


## Installation and Configuration

The ADK TMS Agent configuration is stored in flash on the device.

The configuration can be updated using customer configuration files, or "TMS Config" files.

The ADK TMS config file must be named "VHQconfig.ini" (case matters as the filename **IS** case sensitive).

The ADK TMS config file must also be signed with the customer's certificates. The ADK TMS configuration parameters,

just like the ADK TMS Agent itself are continuously going through updates to add new features and improve performance.

So the specifics about the ADK TMS configuration parameters are available in the ADK TMS Agent [Config](class_config.md) Parameters document that gets supplied with every ADK TMS Agent release.

The `VHQconfig.ini` file must have a `newline` character at the end of it. If the `VHQconfig.ini` file does not have a `newline` at the end, it will be ignored.

Since the ADK TMS config file is a user file, and is read by the ADK TMS Agent, the ADK TMS config file must have read permissions for all users.


### MX7 and MX8 ADK TMS Config Signing

For MX7 and MX8 devices, the `VHQconfig.ini` file is signed directly with the customer's certificate. The signature file must be named `VHQconfig.ini.p7s` or `VHQconfig.ini.P7S`.

The config file and its signature file should then be packaged together into a TGZ file, and the TGZ file should be downloaded to `/home/usr1` on the device.

Once the ADK TMS config and its signature file are downloaded to the device, the device must be restarted for the ADK TMS Agent to detect the new configuration file and apply the configuration updates.


### V/OS ADK TMS Config Signing

For V/OS devices, the `VHQconfig.ini` file is packaged into a User [Config](class_config.md) package type.

The User [Config](class_config.md) package should have the group set to "share" so that the ADK TMS Agent will be able to read the ADK TMS config file in the package.

Please see the V/OS Secure Installer ERS for more information about V/OS packages.

While it doesn't hurt to sign the ADK TMS config itself, it is not required that the ADK TMS config file be signed directly with the customer's certificate.

It will be the User [Config](class_config.md) package that contains the config file that gets signed with the customer's certificates.

The ADK TMS config package can be grouped together with other user packages and downloaded all at once, or the ADK TMS config package can be bundled into its own download bundle by itself.

Once the signed ADK TMS config package is downloaded to the device (either on its own or combined with other packages),

the device must be restarted for the ADK TMS Agent to detect the new configuration file and apply the configuration updates.


## ADK Mode configuration files

On Engage devices, when using Operating Mode=ADK, the connection profile can be supplied is several different ways. 


1. [Config](class_config.md) bundle: The simplest way and most secure way is to provide them in the same config bundle where the VHQConfig.ini is supplied; this installs the config files (vhqsrv.xml, which is the connection profile, along with any required network profiles that are referenced therein) in a read-only area on the device.
2. Flashconfig bundle: This will install the agent same files as above to a different area which is writeable and accessible by user apps. This is useful for apps that provide their own communcations configuration interface.
3. Infosvc database: the developer can provide an infosvc database with the communications settings; specify the path in the VHQConfig variable [VHQ]ConnectionPath. For an infosvc database, the path is preceded with "infosvc@". For example: "infosvc@/tmp/conn_info.db@com/con/HOST_A". Consult ADKCOM documentation for further details.

A common configuration with Engage devices is bridge connection, ie, to have one primary device with a secondary pinpad type device connected to it via a USB cable. The V200c and P400 Engage device are two such devices and connecting these two devices via a USB cable and communicating to VHQ and performing payment transactions is a common configuration.

More details about can be found in [https://confluence.verifone.com:8443/pages/viewpage.action?spaceKey=GR&title=How+To+Configure+VHQ+With+Daisy+Chained+Engage+Devices+Using+USB+%28IP+Over+USB%29+Connection](https://confluence.verifone.com:8443/pages/viewpage.action?spaceKey=GR&title=How+To+Configure+VHQ+With+Daisy+Chained+Engage+Devices+Using+USB+%28IP+Over+USB%29+Connection)


### ADK TMS Agent Certificates and Certificate packages

In addition to the proper ADK TMS configuration, the ADK TMS Agent requires certain certificates to be installed in order to properly communicate with the ADK TMS server.

These certificates are stored in flash and the ADK TMS Agent uses three certificates to communicate with the server.

The FULL installation version (see [ADK TMS Agent Installation] for more information about the FULL version) resets the Agent by installing the default version of these certificate for the Verifone Hosted ADK TMS Server and VHQconfig.

These are the 3 certificate files required by the agent:



1. Protocol Certificate - This is stored as `VHQSrvPubKey.crt` on the device. This certificate is used during the key exchange to send encrypted key data to the server.
2. SSL Certificate Tree - This is stored as `VHQSrvSSL.pem` on the device. This is the certificate tree that the agent can use to verify the certificate exchanged during SSL communication all the way back to its issuer CA.
3. Download SSL Certificate Tree - This is stored as `VHQFTP.pem` on the device.

This is the certificate tree that the agent can use to verify the certificate exchanged during SSL downloads all the way back to its issuer CA.

If the agent is retrieving downloads from the same server it is sending messages to, then this certificate will be the same as the SSL Certificate Tree.

The only time this would be different than the SSL Certificate tree is if downloads will be retrieved from a different server than the server the agent is sending messages to.

Installing a FULL package will remove the existing Agent and installs the new Agent and the existing VHQconfig, VHQ Certs are restored to VHQ Home.

CERTS package contains VHQconfig and VHQ Home certs, installing this package will just reset the host. This package is available from 3.2.14 Agent version.

When the agent is talking to a customer hosted server, these three certificates need to be created specifically for the customer's servers and packaged together into a "customer certificate package".

The "customer certificate package" is a customer signed package that puts updated certificates into a secondary location that the ADK TMS Agent checks at startup.

If the ADK TMS Agent detects properly signed certificates in the secondary location at startup, and the certificates are different than the ones the agent is currently using,

then the agent will import these new certificate files and overwrite the certificate files it is currently using. The agent will then use the new certificate files for all communication.

Since the ADK TMS certificate files in a customer certificate package are user files, and they are read by the ADK TMS Agent, the ADK TMS certificate files in a customer certificate package must have read permissions for all users.



Whenever the agent detects a new Protocol Certificate in the secondary location at startup, the agent will reset its `KeysExchanged` configuration parameter and delete its keys so the next message it sends to the server will be a `KeyExchange` using the new protocol certificate.


### ADK TMS Agent Certificate Verification Tool

The ADK TMS Agent Certificate Verification Tool is included with each ADK TMS Agent release (1.06.0002 and later), and can be used to verify that the certificates created specifically for a customer's servers are correct.

The tool is run on a PC and will perform the same verifications that the agent will perform. This tool should be used to verify the customer's certificates are correct before anything is tried on an actual device.


### MX7 and MX8 Certificate Signing (Applicable only to customer hosted deployments)

For MX7 and MX8 devices, the `VHQSrvPubKey.crt`, `VHQSrvSSL.pem` and `VHQFTP.pem` files are signed directly with the customer's certificate.

The signature file must have the same name as the original file with a ``.p7s or ``.P7S extension.

The three certificate files and their signature files should then be packaged together into a TGZ file, and the TGZ file should be downloaded to `/home/usr1` on the device.

Once the certificates and their signature files are downloaded to the device, the device must be restarted for the ADK TMS Agent to import the updated certificates and begin using them.


### V/OS Certificate Signing (Applicable only to customer hosted deployments)

For V/OS devices, the certificate files are packaged into a User [Config](class_config.md) package type.

The User [Config](class_config.md) package should have the group set to "share" so that the ADK TMS Agent will be able to read the certificate files in the package.

Please see the V/OS Secure Installer ERS for more information about V/OS packages.

While it doesn't hurt to sign the certificate files individually, it is not required that the certificate files be signed directly with the customer's certificate.

It will be the User [Config](class_config.md) package that contains the certificate files that gets signed with the customer's certificates.

The ADK TMS certificate package can be grouped together with other user packages and downloaded all at once, or the ADK TMS certificate package can be bundled into its own download bundle by itself.

Once the signed ADK TMS certificate package is downloaded to the device (either on its own or combined with other packages),

the device must be restarted for the ADK TMS Agent to import the updated certificates and begin using them.


## ADK TMS Agent Installation

The ADK TMS Agent releases that have been approved for customer use by the ADK TMS QA team are posted on Agile by the ADK TMS team.

Only ADK TMS Releases that have been posted to Agile should be used for customer deployments.

The correct ADK TMS Agent can be downloaded from Agile and installed onto customer's terminals at deployment, or via some other mechanism if the devices are already installed.


### FULL vs. UPGRADE vs. CERTS ADK TMS Agent Versions

When installing the ADK TMS Agent, it is important to note the difference between the installation files provided with each ADK TMS Agent release.

There are 3 different installation files provided with each agent release: the FULL installation, the UPGRADE installation and the CERTS installation.

The difference between the FULL and UPGRADE installation versions are how the certificates are handled.

The FULL package removes the existing Agent and installs the new Agent and updates the existing config and certs with Default VHQ config and VHQ Home certs. After installing this package device will point to VHQ Home instance. These certs are sys6 signed and installed from sys6 flash unlike regular VHQ config and used for resetting Agent.

The UPGRADE installation packages updates the existing Agent and doesn't update the VHQ [Config](class_config.md). Can be used during regular updates.

Irrespective of FULL/UPGRADE package a device without user config will point to VHQ Home.

CERTS package contains VHQconfig and VHQ Home certs that are sys6 signed and installed in sys6 userflash, it does similar job of FULL package making the device point to VHQ Home without removing the Agent.


### MX8 Installation

For MX8, the ADK TMS Agent installation file is a TGZ that gets downloaded and installed on the device as a package. The MX8 TGZ package includes the agent, and the certificates in the same package.


### V/OS Installation

For V/OS, the ADK TMS Agent installation file is a TGZ that gets downloaded and installed on the device by package manager as bundles.

The FULL installation file contains the ADK TMS Agent Bundle and a separate ADK TMS Certificate Bundle.

The ADK TMS Agent Bundle, named `vhq_sys`, is made up of the `vhq_sys` package and `vhq_svc` package.

The `vhq_sys` package contains the main ADK TMS executable files while the `vhq_svc` package contains the ADK TMS service libraries.

The ADK TMS Certificate Bundle, named vhq_sys-certs, contains only the vhq_sys-cert package which contains the production server certificates.

This package is an OS signed package and is separate from a customer's hosted service certificate package.

The separation of the ADK TMS Agent into the agent bundle and cert bundle began with ADK TMS Agent release 1.03.0019 in order to support customer hosted deployments.

The FULL installation file will update existing agents to the new separated format, and the separated format is required for UPGRADE versions to work correctly.

If a device does not have the separate agent and cert bundles, then certificate upgrade package described in ADK TMS Agent Certificates might not work correctly.

The V/OS UPGRADE version only includes the ADK TMS Agent Bundle, it does not include the ADK TMS Cert Bundle.

The easy way to verify a V/OS has the separated packages is to verify the device has `vhq_sys-certs` bundle installed.


## Automated Download Bundle Creation

The ADK TMS Agent server supports automated downloads, where it will retrieve software information from the device,

and automatically update the software on the device if the device software is out of synch with what is configured for the device on the server.

In order for this to work properly, the software bundles installed on a device must meet certain expectations.


## V/OS Automated Bundles

V/OS Secure Installer bundles already meet the requirements for automated download. So if the bundle is accepted by secure installer, it will also be accepted for automated downloads by ADK TMS Agent.

Due to limitations on the current production server, it will not accept a bundle file that contains more than one bundle. Until the server is updated to support a bundle with multiple bundle files, V/OS download bundles can only contain a single bundle inside of them.


# Agent Concepts


## Maintenance Window, Heartbeats and Events

This section contains information on ADK TMS Agent Maintenance Window, Heartbeats and Events.


## Maintenance Window

The maintenance window is configured by customers for a period of time during the day or week that most maintenance should be performed on the device.

While users can request that any maintenance is done immediately, they can also request that any maintenance is done during the next maintenance window.

When the user requests that maintenance is done during the next maintenance window, that maintenance will be scheduled to happen during the configured maintenance window of a terminal.

The maintenance window is configured in the ADK TMS Agent Configuration file.

The maintenance window is very configurable, and can be set to be certain hours daily (the most common configuration), certain hours on certain days of the week, certain hours once per week, or even to be all day-every day.

The maintenance window for Dial-Up communication interfaces should be configured for when the Agent can have access to the modem to establish its connection with the management Server, and when the agent will be able to perform maintenance tasks like downloads and reboots. The current agent design requires a Maintenance window to happen at least once per month.


## Heartbeats

Heartbeats are the main communication method between the ADK TMS Agent and the ADK TMS Server.

Due to security restrictions, all contact between the agent and server needs to be initiated by the ADK TMS Agent.

So the heartbeat is the agent's way to "ping" the server to let the server know the device is still online and to see if the server has anything for the agent to do.

The heartbeat is a short message sent by the device to the server at a scheduled interval.

In most cases, the agent will send a heartbeat immediately after being started during power up and then will continue to send heartbeats at a regular interval that is configured by users.

For certain cases where the interval between heartbeats is longer than the duration of the maintenance window,

the agent will delay the first heartbeat after startup to make sure that a heartbeat will occur during the maintenance window.

Most maintenance requests to be performed are sent in "Management Plans" in response to a heartbeat.

Automatic heartbeats from the agent to the server can be disabled by setting the heartbeat frequency (see [Heartbeat Frequency] Heartbeat) to 0. When the heartbeat frequency is set to 0, the agent will not schedule any heartbeats and all heartbeats are controlled by the application. All heartbeats must be requested by the application when the heartbeat frequency is set to 0.


If the application needs to control heartbeats and prevent the agent from sending heartbeats during critical times, the application can set the heartbeat frequency value to 0 for the communication interface that is being used and the agent will not send any heartbeats as long as the frequency is set to 0. The application can then set it back to non-zero value to allow the agent to manage the heartbeats again and send at the heartbeat frequency interval. The API to change the heartbeat frequency values is [tms_setNewConfigAvailable()](svc__tms_8h.md#function-tms-setnewconfigavailable). This API can be used to set any of the communication interfaces heartbeat frequency values:

"HeartbeatFreq" for primary network communication interface.

"Dial HeartbeatFreq" for dial-up communication interface.

"GPRS3G HeartbeatFreq" for GPRS communication interface.

It should be noted that the very first heartbeat is ALWAYS controlled by the primary HeartbeatFreq value. If this is set to 0, then the agent will NOT send any heartbeats and it is expected that the application will manage and send the first heartbeat. If this is set to a non-zero value then the agent will send the first initial heartbeat.

Once the initial heartbeat is sent, the agent will then use the heartbeat frequency value for the communication interface being used by the device. If an Ethernet network connection is used, then the HeartbeatFreq value will continue to be used. If a dial-up interface is used, then the "Dial HeartbeatFreq" will be used. For example, if the dial-up modem interface is how the device is communicating then the "Dial HeartbeatFreq" value will then be used after the initial heartbeat is sent. If the "Dial HearbeatFreq" is set to 0, then the application is expected to manage the heartbeats sent to the server.

This method of controlling heartbeats will NOT prevent any scheduled jobs that have already been downloaded from the server to the agent from running. If there are already jobs in the agent queue to process, they will still run regardless if the heartbeat frequency is set to 0.

If the application does not need to control heartbeats, then it is recommended to set the heartbeat frequency to non-zero value and let the agent manage all heartbeats sent. In this case, it is recommended that the application use the FREE/BUSY method described in [tms_setApplicationState()](svc__tms_8h.md#function-tms-setapplicationstate) API to control when agent is allowed to communicate with the server.


### Heartbeat Types

There are 2 different types of heartbeats, regular heartbeats and maintenance heartbeats.

Regular heartbeats are heartbeats that occur outside of the configured maintenance window while maintenance heartbeats occur during the configure maintenance window.

The server can send immediate maintenance requests to the agent in response to either a regular heartbeat or maintenance heartbeat.

But the server will only send "maintenance window" requests to the agent in response to maintenance heartbeats only.


### Heartbeat Frequency

The interval between heartbeats is configured by users in the ADK TMS Agent configuration file.

Since all communication is initiated by the agent, the longer between heartbeats means a longer period of time between requesting

something to be done on the ADK TMS server and when it actually makes its way to the device to be done.

It is recommended to schedule heartbeats to happen at least several times per day. For dial up devices, this may not be reasonable.

There are separate heartbeat frequency parameters in the TMS configuration file for Dialup, GPRS/3G, and all others (Ethernet, WiFi). The heartbeat frequencies should be set for all the communication interfaces the device is going to use.

The heartbeat frequency should be set according to the maintenance window. If the maintenance window is configured to be once per week, and the agent should contact the management server only during maintenance windows, then the heartbeat frequency should be setup for once per week as well (604800 seconds). The agent is smart enough to time the first heartbeat after the device powers up so that it guarantees that a heartbeat will occur during the maintenance window. For instance, if the Maintenance Window is Saturdays from 2 AM - 6 AM, and the heartbeat frequency is once per week (604800 seconds), the agent will factor that in when the device starts. The agent will also add some randomness when calculating the schedule for the first heartbeat after power up so that the first heartbeat will not always occur exactly at the start of the maintenance window. So if the device is powered on at 4 PM on a Wednesday, the first heartbeat after powering the device on will not happen until some random time between 2 AM and 6 AM on the Saturday after the device is powered on.


## Events

The ADK TMS Agent can be configured to detect certain events that happen on the device, and alert the server immediately when the event is detected.

So the agent can send an event to the server at any time. Events do not have to be sent during heartbeats or during the maintenance window,

they will be sent immediately after they are detected. The different types of events that can be detected by the agent are:

Tampers, Low RAM Memory, Low Flash Memory, Device Rebooted, Low Battery (built-in, not main battery), Dock In and Dock out.

The events that the agent should detect are configured in the ADK TMS Agent Configuration file.

The tamper event is unique in the agent because it is not configurable; it is always enabled in agent release 1.3.20 and later. And it gets sent to the server a little differently. When a tamper occurs, the device will automatically reboot itself due to the tamper (this is a feature of the OS). When the agent is started after the reboot, it determines the device was tampered from the OS. At that point, the agent MUST re-generate its keys and re-send them to the server. When the agent does this, it sets a tampered flag in the Key Exchange message to indicate the device has been tampered, which raises the alert at the server.

Device Rebooted alert will be suppressed during download OperationSets.


### Dock-in and Dock-out events

VHQ server can track dock-in/dock-out events between a payment terminal and a corresponding base unit. In order to support this capability, the proper events from the VHQ agent on the payment terminal must be sent to the VHQ server.

The bases are Engage platform devices running Verifone software, including VHQ agent, to support management via VHQ server.

Dock-in/dock-out events will be sent to server in engage(VOS2) devices. Dock-in/dock-out events will be sent only if the Dock-in/dock-out Alert Mask is set in VHQ Agent config file.

The details regarding time of dock-in/dock-out will be available in VHQ Server under device profile - history -docking history.

For dock-in events the base device details to which the device is connected to like docked-in base serial number and docked-in device model number are sent to server as an event message type.


## Upgrading base device

**For****updating****base****via****handset**

For upgrading base, you need the REST application, scan for base, press start netloader command, and run mxdownloader to upload the package for base.

Package can be found in the ADK full release (vos2/load/solutions), there are 2 types of packages:



* adk-vos2-base-prod: This package is a clean installation package to restore the OS and ADK on V/OS2 based base stations to the factory package. It includes the OS and some basic middleware components, mainly to enable remote management on the device. This package will remove any OS or system signed package already on the device prior to installation.
* adk-vos2-base_factory_mw-prod: Basic ADK middleware system signed components for V/OS2 based base station devices to restore the initial factory status. This package is the same as adk-vos2-base-prod but without OS.

During update the base will be blinking with white led. When the blinking stops and the top white LED is continuously lit it means the update is finished.

**For****updating****base****via****handset****from****VHQ**

Base updates will run in a separate piece of SW in a separate bundle/package called "BaseUpdater". It will be installed and run on the handset.

For BaseUpdater to actually do anything, a second bundle is required: the "Update" bundle. The Update bundle is a USR1 bundle, with the base update bundle embedded inside of it.

When a new base update is available in /mnt/flash/etc/config/base_tgz/, the BaseUpdater executable(in  BaseUpdater bundle) on the device will detect that at startup and install it. After successful installing a base update, BaseUpdater will delete the file from /mnt/flash/etc/config/base_tgz/ so that it is only installed one time.

Because the BaseUpdater is a sys6 app, and the "Update" bundle is a USR1 app, permissions of the "Update" bundle need to be set appropriately so that BaseUpdater can read and write (for deleting) the files installed in /mnt/flash/etc/config/base_tgz/.

In order to manage base updates, VHQ (or any other management system) will need to manage the BaseUpdater SW on the handset device (which should rarely change) and the "Update" bundles that get installed on the handset device.

The management system will not manage base devices directly. By managing the two pieces of SW on the handset: "BaseUpdater" and the "Base Update", users will indirectly manage their base devices. If the 2 pieces of SW are up to date on the handset, then it is assumed that the base device is up to date (or will be up to date once the handset is docked).

More details about updating base device from VHQ available in: [https://confluence.verifone.com:8443/pages/viewpage.action?pageId=129628291](https://confluence.verifone.com:8443/pages/viewpage.action?pageId=129628291)


## Power Management

The agent supports power management on V/OS2 devices (note that power management is not a feature on V/OS devices).


### V/OS2 Power Management

V/OS2 power management has evolved in the agent over time. Beginning with agent release 2.14.1 and later versions, any V/OS2 device with a rechargeable battery (i.e. V240m and V400m) will honor OS power management all of the time, whether the device is plugged in or not, docked or undocked. Line powered VOS2 devices have power management fnuctionality included from agent version 3.2.11.This means the agent will enter the "critical sections" of code at the following points:



1. Initialization - at startup, the agent will enter a critical section so that it can initialize without the device going into low power mode. After initialization, the agent can remain in the critical section if it has something to do like a HB. If the agent doesn't have anything to do after initialization, it will exit the critical section.
2. Agent Actions - when the agent has something to do, like a HB or a Download or any other event, the agent will enter a critical section again. Once the agent is finished with all of the actions it needs to do, it will exit the critical section. Note that if the agent has a lot of stuff to do (including new jobs scheduled from the server), the agent will remain in the critical section until it has nothing to do anymore. Once the agent has completed all of the actions it needs to perform, it will exit the critical section
3. Incoming Requests - if an app sends a message to the agent, for example to request a HB, this will trigger the agent to wake up and enter a critical section. The agent will exit the critical section after it has completed the request from the app and goes back to its idle state.

When the agent is completed with any of the above, it will enter its idle state and call `pause()` API to allow OS power management to kick in. Before calling `pause()` API, the agent will call `[sys_SetWakeupTime()](namespacevfisyspm.md#function-sys-setwakeuptime)` with a wakeup time for the next VHQ Agent action. For example, if the next HB is supposed to happen in 20 minutes, the agent will set the wakeup time for 20 minutes and then call `pause()`. After 20 minutes, the agent will get woken and will enter the critical section before starting the heartbeat (as in #2 above).

Please keep in mind your agent's configuration when dealing with V/OS2 battery powered devices. It is recommended that the HB Frequency be set to 60 minutes or longer for battery powered devices as the agent will wake the device up and enter a critical section whenever it needs to do a heartbeat. If you set the heartbeat frequency to less than 60 minutes for a battery powered device, you run the risk of draining the battery very quickly.

Note: Prior to 2.14.1 agent, V/OS2 devices with a rechargeable battery only honored OS power management when the device was unplugged and/or undocked.

Note: With Agent 2.14.1 and later, battery powered V/OS2 devices will not be checking for low memory conditions in real time. The low memory checks will only be performed when the agent is in one of the critical sections mentioned above. For most cases, that means the low memory events are only checked for at the heartbeat frequency.


## Downloads

The ADK TMS Agent has the capability to perform downloads when instructed to do so by the ADK TMS server.

There are 2 distinct actions that are done for each download:



1. Downloading of the file from the ADK TMS server.
2. Installing the download onto the device after the download is completed,

When a user schedules a download, they can choose to do the download at the Next Contact, Next Maintenance Window, or at a specific date and time.

Downloads scheduled for Next Contact are referred to as Immediate Downloads,

downloads scheduled for Next Maintenance Window are referred to as Maintenance Downloads and

downloads scheduled for a specific date and time are referred to as Scheduled Downloads.

In addition to choosing when the start of the download occurs, the user also chooses when the installation of the downloaded file will occur.

The user can choose whether the installation happens immediately after the download or at a specific date and time


### Download Dependencies

Downloads that depend on one another can be grouped together when scheduling a download job to the device.

When downloads are grouped together like this, the agent will download/install the downloads in the sequence specified, and if one of the downloads or installations fails,

the agent will send a failure response to the server at that point and will not attempt to continue with the rest of the downloads/installations in the sequence.


### Immediate Downloads

Immediate downloads are downloads that the user selects to happen at "Next Contact" and are used when a download needs to get downloaded or installed onto a device as soon as possible.

After the download is scheduled, the server will send the download management plan to the device in response to the next heartbeat from the device.

It doesn't matter if the next heartbeat is a Regular Heartbeat or a Maintenance Heartbeat, the download management plan will get sent in response to either.

After receiving the download management plan, the agent will immediately start the download from the server.

In most immediate download cases, the installation will be scheduled "Immediately after the download", and if that is the case, the agent will install the download as soon as the download is complete.

If the user schedules the installation for another date and time, the agent will wait until the specified date/time to install the downloaded file.


### Maintenance Downloads

Maintenance downloads are used to download and install packages during the maintenance window of the terminal.

Users schedule maintenance downloads by selecting "Next Maintenance Window" for the download time.

After scheduling a maintenance download, the server will send the download management plan only in response to a maintenance heartbeat.

The download management plan will not be sent in response to a regular heartbeat.

After receiving a maintenance download, the agent will check for MaintenanceDownloadStaggering parameter in agent configuration file, and if true, schedule the download to happen at some random time during the maintenance window, up to 10 minutes before the maintenance window ends.

Randomly spreading the downloads throughout maintenance window will ease the load on the server so that all of a customer's devices are not initiating downloads at the same time.

If a maintenance download starts inside a maintenance window, agent will continue with the download event even if maintenance end happens during the download progression.

If there are connection issues with the server, and the agent needs to retry downloading a maintenance download, the download will fail if the retries begin to happen outside of the maintenance window.

When the installation starts during maintenance window, agent will continue with the installation even if maintenance end happens during the installation progress.

If we have multiple download events in the same event set and if the maintenance window ended after the successful download of the first download event, other events in the event set will be failed since the download attempts happen out of MW. As a result all the events in install event set will be failed .

If we have multiple install events in the same event set and if the maintenance window ended after the successful completion of the first install event, other events in the event set will be successfully installed without failure.

The installation of a maintenance window downloaded package can happen outside a maintenance window if scheduled to do so.

Since successful downloads and installs can take a long time, especially for large files on a slow connection,

the ADK TMS configuration should allow for a buffer between end of the maintenance window and the start of regular customer activities at a store location.

This will allow for cases where the download is very large and may extend past the end of the maintenance window.

Users do not need to know details about the maintenance window when scheduling maintenance downloads, that is all taken care of by the agent and server.


## Download Scheduling

Scheduling a download allows a user to schedule a download to happen on a device at a specific date and time in the future.

Users schedule downloads by selecting a specific date and time when configuring the download in the ADK TMS Server GUI.

This allows for a download to be configured on the server, but the agent will not start the download until the date and time that the user specifies.

For scheduled downloads, the download management plan will be sent to the device on the next heartbeat (regular or maintenance).

There is information in the download management plan that tells the agent when exactly to start the download, so the agent will store this in its scheduler module.

The scheduled download will be retained through power cycles and at the specified date and time, the agent will begin the download from the server.

If the device happens to be powered off at the scheduled date and time, the download will begin after power is restored to the device.


## Download Recovery and Retry Mechanism

As stated in the section above, the scheduled download will be retained through power cycles and at the specified date and time, the agent will begin the download from the server. If the device happens to be powered off at the scheduled date and time, the download will begin after power is restored to the device. If the network connection and communication is lost during a download that has already started, then the ADK TMS Agent will try to recover and continue the download.

How many times a download is attempted to complete and for how long it retries is configurable with download configration parameters. The Download Maximum Attempts default is 60, Download Network Timeout is 30 and Download Retry Timeout is 15 which calculates 60 * (30 + 15) = 45 minutes before it gives up. But this assumes that agent waits 30 seconds for the tcp/ip network to timeout because it did not receive any data within that time period. Then the agent will wait 15 seconds before retrying again. If the network connection call returns to agent sooner than 30 seconds then total time of retrying could be less. It depends why network connection is lost. By default it will retry for 45 minutes or 60 times whichever comes first before giving up and marking download as a failure. Customer can adjust each parameter as they want. Do not recommend changing network timeout. By default tcp/ip times out after 30 seconds of no data anyways so Download Network Timeout should be left at default value.

**Configuration****Parameters**

Download Maximum Attempts - default value is 60 times.

Download Network Timeout - default value is 30 seconds.

Download Retry Timeout - default value is 15 seconds.


## Installation Scheduling

Installation scheduling allows a download to be installed at a specific date and time, which could be hours, days, weeks or even months after a download has actually happened.

To setup a download for installation scheduling, the user would select to install the download at a specific date and time.

Installation scheduling is nice for larger downloads that should all be installed at the same time.

The download can be scheduled to happen a couple of days before the installation should happen,

which will allow the user to make sure all of the downloads were successful before the installation will happen.

When using installation scheduling, the download will happen whenever the download was configured for (immediate, next maintenance window or specific date and time).

But the installation will not happen until the date and time specified by the user.

For installation scheduling, after the download is complete, the download file is stored in a temporary flash location.

At the installation date and time, the download gets retrieved from the temporary flash location and gets passed to the OS for installation.

If the download of the file is not successful, then the installation will not be attempted.

If the download of the file goes past the specified installation date and time, the installation will happen immediately after the download is completed.


### Post Install Actions

Each download can be configured to perform a Post Install Action. There are 2 supported post install actions: reboot and restart applications.

When a Post Install Action is configured and a download is successfully installed, the agent will perform the Post Install Action immediately after a successful installation.

If the download or installation fails, the Post Install Action will not be performed.

Reboot Post Install action will be ignored if SuppressReboot flag is set by the server in the download management plan. In those cases, the reboot Post Install Action will not be performed until the end of the download OperationSet.


## Content Downloads

Content downloads are very similar to other downloads, except that instead of the download being passed to the OS for installation, the download gets passed to the application for processing.

This requires application support including the application registering itself with the agent for content updates.

Please see [Application Integration with ADK TMS Agent] for more information about how an application will support content management.


### Content with Expiration Date

Some content downloads will only be displayed for a set period of time, after which they will expire and the original content will be restored.

When content with an expiration date gets sent to the agent, the agent will save the original content file in a temporary flash location.

At the expiration date and time, the agent will give the original file back to the application as another content update.

This will restore the original file back at the specified date and time. If the download or installation of expiring content fails, restoring the original content will not be done.


## Diagnostics

The ADK TMS Agent supports many features that help with diagnosing problems on a terminal. However, there are many terminal product lines in Verifone.

Diagnostics features are customized for different types of terminals.

At the top level of categorization, there are two terminal series: MX and VX. MX terminals run V/OS system software; VX terminals run Verix system software.


### V/OS Terminal Diagnostics

In V/OS terminals, the ADK TMS Agent diagnostic actions support the following functions:



* Screen Capture - A PNG image of the current screen will be uploaded to the server. This option is only supported on devices that have screens.
* Get Device Profile - The current device profile will be sent to the server. The device profile consists of:

Installed applications, Serial Number, OS information, clock information, port information, key information, memory profile, Verishield Retain certificate information, VCL information, and other information about the device.



* Get Diagnostic Data - The current diagnostic profile will be sent to the server. The diagnostic profile consists of: Open and Maximum file handle count, Current Process List with memory and CPU usage and diagnostic counter data.
* Get Library Details - The directory listing of /lib will be retrieved and uploaded to the server.
* Get OS [Config](class_config.md) File - The OS config files will be combined into a TGZ and uploaded to the server. For V/OS, these files are retrieved:



```cpp
/mnt/flash/config/config.system /mnt/flash/config/ config.network /mnt/flash/config/config.usr1.
```

For MX8, these files are retrieved:



```cpp
/mnt/sram/config.*.
```



* Get OS Logs - The OS log files will be combined into a TGZ and uploaded to the server.
* Get User Logs - The user log files will be combined into a TGZ and uploaded to the server. See the Application Log section for more information on how the applications logs should be setup.
* List User Files - The agent will do a recursive directory listing on `/home/usr1` and upload a text document with the results.
* Reboot - The agent will reboot the terminal.
* Restart Applications - The agent will restart all user applications on the terminal.
* Touchscreen Recalibration - The agent will perform a touchscreen recalibration. This option is only supported on devices that have a touchscreen.


### Recurring Diagnostic Jobs

The server allows users to set up recurring diagnostic jobs where a single diagnostic action or a sequence of diagnostic actions can be set up to run every day, week or month.

When the agent receives a recurring diagnostic job, the agent will perform the diagnostic job according to the recurring schedule.


### Recurring Diagnostic Job Expiration

When setting up a recurring diagnostic job, the user has an option to choose an Expiration Date for the recurring job, or they can choose the number of times they want the recurring job to execute.

When configured to expire, the agent will stop regularly executing the recurring job at the specified time or number of recurrences.

When the agent receives a recurring diagnostic job that specifies the number of times the job should execute, the agent will calculate an expiration date based on the execution time and number of times the job should execute. So if the date or time of the device gets modified after receiving the management plan for this type of recurring diagnostic job, the job may not run the number of times specified by the user.


### Cancelling Scheduled Jobs

Jobs that have been scheduled for a device can be cancelled from the server as long as they haven't started to execute on the device.

So if a job is set to execute at some future date and time, the server can send a Cancel Management Plan to the device, and as long as that job has not started executing yet, the job will be cancelled.

If the Cancel Management Plan is not sent to the device before the job starts executing, then there will be different behavior depending on the job type and where the job is in its execution.

Below is a table that describes what will happen in different circumstances.

**Table 3: Job Cancellation Scenarios**


| Job Type  | Job State  | Result  | Notes   |
|  -------- | -------- | -------- | -------- |
| Diagnostic  | Scheduled - Started Yet  | Success  | -   |
| Diagnostic  | Started  | Failure  | -   |
| Recurring Diagnostic  | Next Recurrence Scheduled - started yet  | Success  | -   |
| Recurring Diagnostic  | Current Recurrence Executing  | Success  | The current recurrence that was executing will complete.   |
| Package Download(s) (Install immediately after download)  | Scheduled - Started Yet  | Success  | -   |
| Package Download(s) (Install immediately after download)  | 1st Download Started or any state after that  | Failure  | Once the 1st download begins, neither the download nor installation can be cancelled.   |
| Package Download(s) (Install at future time)  | Scheduled - Started Yet  | Success  | -   |
| Package Download(s) (Install at future time)  | 1st Download started and in progress or sequential download started and in progress.  | Success  | The download(s) will complete, but the installation will be cancelled successfully. Downloaded packages will be removed.   |
| Package Download(s) (Install at future time)  | Download(s) completed, installation not started yet.  | Success  | The installation will be cancelled. Downloaded packages will be removed.   |
| Package Download(s) (Install at future time)  | Download(s) completed, installation started  | Failure  | Installation will continue   |



# Programming


## Programming and API Principles


## Application Integration with ADK TMS Agent


### Application Logs (MX8 and V/OS only)

The ADK TMS Agent has the capability to retrieve application logs from the device.

In order for this to work correctly, the application needs to follow some guidelines so that the ADK TMS Agent can retrieve the application log files correctly.



* Log File Permissions - log file that can be retrieved by ADK TMS has to have read permissions for the ADK TMS Agent. The ADK TMS Agent runs as sys6 user on V/OS, and usr1 user on MX8.
* Log File Location/Name - ADK TMS Agent has default locations that it will gather application log files from.

For V/OS, the default search pattern is `"/home/usrX/logs/\*"`. For MX8, the default search pattern is `"/home/usrX/\*.\c log/home/usrX/messages\*"`.

In addition to the default locations, applications can set environment variables in the `"perm"` section to set other locations for the agent to look for log files.

The agent will read `"applogstemp"` and `"applogsperm"` variables from the `"perm"` environment section and the agent will read all *.log files from those locations.


### Application Integration with the Agent for V/ OS

The TMS service provided on V/OS devices is used for tighter integration between Applications and the ADK TMS Agent.

Applications can use these APIs for content and parameter management, event notifications, ADK TMS configuration updates and even to request ADK TMS calls to the ADK TMS server.

These are the TMS APIs that an application can use for better integration with the ADK TMS Agent.


## tms_GetVersion()

This function is used by an application to get the version of TMS library that the application is linked with, or the shared version of the library that the application is using.


### Prototype



```cpp
char* tms_GetVersion(void)
```


### Returns

a zero-terminated string with version and build information of the linked/shared TMS library in format: <major>.<minor>.<patch>-<build number>.

This API is the replacement for `tms_getVersion` that returns a version structure and is unable to support all different <patch> versions.


## tms_GetAgentVersion()

This function is used by an application to get the version of the ADK TMS Agent that is running on the device.

Note that this function will communicate to the ADK TMS Agent via pipes/message queues so it may block for a short period of time.


### Prototype



```cpp
char* tms_GetAgentVersion(void)
```


### Returns

a zero-terminated string with version and build information of the ADK TMS Agent running on the device in format: <major>.<minor>.<patch>-<build number>.



1. This ADK TMS Agent version running on the terminal can be different than the TMS library version that the application is using.
2. This API is the replacement for `tms_getAgentVersion` that returns a version structure and is unable to support all different <patch> versions.


## tms_registerApplication()

This function is used by the application to register itself with the ADK TMS Agent.

When registering, the application provides its name, a mask specifying the types of events the application would like to be notified of, and a callback function for handling events sent to the app from the ADK TMS Agent.


### Prototype



```cpp
struct tmsReturn tms_registerApplication(const char* appName, int eventNotifyMask, unsigned int tmsEvtCb)
```

`appName` - A name used by the ADK TMS Agent to help identify the different applications that are registered.

The app name is used for identification purposes, as well as parameter management.

The registered app name MUST match the application name specified in Secure Installer bundle for V/OS devices.

This name is case sensitive so it must match exactly.

`eventNotifyMask` - A mask provided by the application to configure the events that the application wants to be notified of by the ADK TMS Agent.

The application can request notification for these types of events:



* Reboot (0x00000001) - Notify the application before the agent performs a reboot. If registered for this notification, the application will have to approve a reboot which will give the app time to perform any required tasks before the reboot occurs.
* Restart Applications (0x00000002) - Notify the application before the agent performs a restart of all applications. If registered for this notification, the application will have to approve the application restart which will give the app time to perform any required tasks before the application restarts.
* Download Started (0x00000004) - Notify the application when the agent begins a download.
* Download Percent (0x00000008) - Notify the application with updates about the progress of an ongoing download.
* Download Completed (0x00000010) - Notify the application when the agent completes a download.
* Install Download (0x00000020) - Notify the application before a download is installed by the agent. If registered for this notification, the application will have to approve the install which will give the app time to perform any required tasks before the device is possibly restarted as part of the installation.
* Maintenance End (0x00000040) - Notify the application when all maintenance activities for a given heartbeat have been completed.
* Heartbeat Result (0x00000080) - Notify the application with the final result of heartbeat messages to the server
* Contact Server Start (0x00000100) - Notify the application when contact to the server is beginning.
* Contact Server End (0x00000200) - Notify the application when all contact to the server for a given session has completed.
* Contact Server Approval (0x00000400) - When registered for this notification, the application will have to approve the agent contacting the server. This is useful for dial-up connections so that the agent will not try to use the modem while the application is using it.
* Application Content Update Available (0x00000800) - Notify the application when content is available for the application. This notification must be enabled for the application to support ADK TMS content management.
* Clock Update (0x00001000) - Notify the application when the agent is going to change the clock on the device. When registered for this notification, the application will have to approve the agent changing the clock.
* Server Errors (0x00002000) - Notify the application when the the server returns an error to the agent. So if the server returns a result code other than SUCCESS to the agent, the application will be notified.
* Install Status (0x00004000) - Notify the application of the installation status of downloads. After the agent installs a download through the OS, the application will be notified as to the result of the installation.`tmsEvtCb` - A callback function provided by the application to handle events sent from the agent to the application. The prototype for the callback function is:
* Processing Status (0x00008000) - Notify the application with processing.ini file, this provides device, message and server status after an operation.
* Download Retry (0x00010000) - Notify the application with the retry count of downloads.
* Network Error (0x00020000) - Notify the application if there are any network errors.
* Download Count (0x00040000) - Notify the application with the number of downloads in a MP
* Get Software Update (0x00080000) - Notify the application if MMS Get Software Update is successful.



```cpp
int tmsEventCallback(struct tmsEventData eventData);
```

The following events can be sent from the agent to the application and need to be handled by the application in the callback:



* `REGISTER_APP_RESPONSE` (`eventData.evtType``=``1`) - [Event](struct_event.md) to provide the result of the [tms_registerApplication()] request.
* `UNREGISTER_APP_RESPONSE` (`eventData.evtType``=``2`) - [Event](struct_event.md) to provide the result of the `[tms_unregisterApplication()](svc__tms_8h.md#function-tms-unregisterapplication)` request. This event will only get sent if the unregister call fails.
* `CALL_SERVER_RESPONSE` (`eventData.evtType``=``3`) - [Event](struct_event.md) to provide the result of a `[tms_callServer()](svc__tms_8h.md#function-tms-callserver)` request.
* `GET_TMS_CONFIG_RESPONSE` (`eventData.evtType``=``4`) - [Event](struct_event.md) to provide the result of a `[tms_getConfigLocation()](svc__tms_8h.md#function-tms-getconfiglocation)` request.
* `SET_TMS_CONFIG_RESPONSE` (`eventData.evtType``=``5`) - [Event](struct_event.md) to provide the result of a `[tms_setNewConfigAvailable()](svc__tms_8h.md#function-tms-setnewconfigavailable)` request.
* `SET_APP_STATE` (`eventData.evtType``=``6`) - [Event](struct_event.md) used by the agent to request the application state (whether it is busy or free). The application should call [tms_setApplicationState()] in response to this message.
* `SET_APP_INFO` (`eventData.evtType``=``7`) - [Event](struct_event.md) used by the agent to request application specific parameters to be sent up in ADK TMS messages to the ADK TMS server.

The application should call [tms_setApplicationInfo()] in response to this message.



* `SET_PARM_LIST` (`eventData.evtType``=``8`) - [Event](struct_event.md) used by the agent to request a list of application parameter files that can be controlled through ADK TMS. The application should call [tms_setApplicationParameterList()] in response to this message.
* `GET_FILE` (`eventData.evtType``=``9`) - [Event](struct_event.md) used by the agent to retrieve a file from the application. This event is used for parameter management. The application should call `[tms_getApplicationFileAvailable()](svc__tms_8h.md#function-tms-getapplicationfileavailable)` with the shared location of the parameter file in response to this message.
* `PUT_FILE` (`eventData.evtType``=``10`) - [Event](struct_event.md) used by the agent to send a file to the application. This event is used for parameter management and content management. The application should call [tms_setFileOperationResult()] in response to this message.
* `DEL_FILE` (`eventData.evtType``=``11`) - [Event](struct_event.md) used by the agent to request the application to delete one of its files. The application should - setFileOperationResult() in response to this message. It is up to the application as to whether it will actually delete the file. For instance, the app should respond with an error if the DEL_FILE event is trying to delete a file that should not be deleted.
* `DO_TRANSACTION` (`eventData.evtType``=``12`) - [Event](struct_event.md) used by the agent to request the application to do a transaction (such as a daily clearance or diagnostics). The application should call `[tms_setTransactionResult()](svc__tms_8h.md#function-tms-settransactionresult)` in response to this message.
* `EVENT_NOTIFICATION` (`eventData.evtType``=``13`) - [Event](struct_event.md) sent by the agent to notify the application of the different events the app requested notification for in its register call.
* `GET_SERVER_INSTANCE` (`eventData.evtType``=``14`) - [Event](struct_event.md) sent by the agent to notify the application of the current server instance that is in use.
* `LOCK_SERVER_INSTANCE` (`eventData.evtType``=``15`) - [Event](struct_event.md) sent by the agent to notify the application of the result of locking the server instance.
* `RELEASE_SERVER_LOCK` (`eventData.evtType``=``16`) - [Event](struct_event.md) sent by the agent to notify the application of the result of releasing the server instance lock.

For the events that the agent expects a response from, the agent will timeout after 30 seconds of waiting for the response. The events that the agent expects a response from are: `SET_APP_INFO`, `SET_PARM_LIST`, `GET_FILE`, `PUT_FILE`, `DEL_FILE` and `DO_TRANSACTION`. So if the application is not calling response APIs directly in the callback, it must call the response API within 30 seconds of receiving the event in the callback. `SET_APP_STATE` expects a response as well but the agent will wait 5 minutes for the application to respond to a `SET_APP_STATE` event.


### Returns

A `[tmsReturn](structtms_return.md)` structure:



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the register request to the ADK TMS Agent. All other return values indicate a failure.
* `[tmsReturn.handle](structtms_return.md#variable-handle)` - The handle used for further status tracking in the callback.


## tms_unregisterApplication()

This function is used by an application to unregister itself.


### Prototype



```cpp
struct tmsReturn tms_unregisterApplication(const char* appName)
```

`appName` - The name the app provided in its registration call.


### Returns

A `[tmsReturn](structtms_return.md)` structure.



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the unregister request to the ADK TMS Agent. All other return values indicate a failure.
* `[tmsReturn.handle](structtms_return.md#variable-handle)` - The handle used for further status tracking in the callback. The callback will only get status messages with this handle only in the case where the unregistration fails.

Upon successful unregistration, the only response the application will get is `TMS_STATUS_REQUESTED` status in response to this call.


## tms_callServer()

This function is used by the application to request the agent to contact the ADK TMS server.


### Prototype



```cpp
struct tmsReturn tms_callServer(int secondsToWait)
```

`secondsToWait` - The number of seconds from now to contact the server. This can be used to schedule server contacts for the future. A value of 0 indicates to contact the server right now.


### Returns

A `[tmsReturn](structtms_return.md)` structure



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the contact server request to the ADK TMS Agent. All other return values indicate a failure.
* `[tmsReturn.handle](structtms_return.md#variable-handle)` - The handle used for further status tracking in the callback. The callback status events will only be sent to registered applications.


## tms_callServer2()

This function is used by the application to request the agent to contact the ADK TMS server.


### Prototype



```cpp
struct tmsReturn tms_callServer2(int secondsToWait, int iFlags)
```

`secondsToWait` - The number of seconds from now to contact the server. This can be used to schedule server contacts for the future. A value of 0 indicates to contact the server right now.

`iFlags` - a bitfield of options. Bit 1 will force the requested heartbeat to be a Maintenance heartbeat if it is set. Bit 8 is reserved and will not be used by apps.


### Returns

A `[tmsReturn](structtms_return.md)` structure



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the contact server request to the ADK TMS Agent. All other return values indicate a failure.
* `[tmsReturn.handle](structtms_return.md#variable-handle)` - The handle used for further status tracking in the callback. The callback status events will only be sent to registered applications.


## tms_getConfigLocation(void)

This function is called by the application to request the location of the ADK TMS configuration file.


### Prototype



```cpp
struct tmsReturn tms_getConfigLocation(void)
```


### Returns

A `[tmsReturn](structtms_return.md)` structure



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the get config location request to the ADK TMS Agent.

All other return values indicate a failure.



* `[tmsReturn.handle](structtms_return.md#variable-handle)` - The handle used for further status tracking in the callback. The callback status event will provide the path and name of the ADK TMS configuration file.


## tms_setNewConfigAvailable()

This function can be used by the application to tell the ADK TMS Agent to load and run with a new configuration.

When using this function, the application should first call the `[tms_getConfigLocation()](svc__tms_8h.md#function-tms-getconfiglocation)` function to get the location of the current ADK TMS configuration.

The application should then make a temporary copy of the current ADK TMS configuration and edit the temporary copy for any configuration updates the application wants to make.

After making the changes to the temporary file, the `[tms_setNewConfigAvailable()](svc__tms_8h.md#function-tms-setnewconfigavailable)` function should be called and the temporary file with the requested changes should be passed to this function.

The agent will load the new changes and store them in its permanent configuration. The configuration changes will occur in run-time and no reboot is required.


### Prototype



```cpp
struct tmsReturn tms_setNewConfigAvailable(const char* newTMSConfig)
```

`newTMSConfig` - the full path to the new TMS configuration file.

The agent must have read permissions on the temporary file for this to work correctly.


### Returns

A `[tmsReturn](structtms_return.md)` structure:



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the set new config request to the ADK TMS Agent. All other return values indicate a failure.
* `[tmsReturn.handle](structtms_return.md#variable-handle)` - The handle used for further status tracking in the callback. The callback status event will provide the final result of setting the configuration.


## tms_setNewConfigAvailableWithTimeout()

This function can be used by the application to tell the ADK TMS Agent to load and run with a new configuration and is the same as [tms_setNewConfigAvailable()](svc__tms_8h.md#function-tms-setnewconfigavailable) API except it allows a timeout value to be passed.

When using this function, the application should first call the `[tms_getConfigLocation()](svc__tms_8h.md#function-tms-getconfiglocation)` function to get the location of the current ADK TMS configuration.

The application should then make a temporary copy of the current ADK TMS configuration and edit the temporary copy for any configuration updates the application wants to make.

After making the changes to the temporary file, the `[tms_setNewConfigAvailable()](svc__tms_8h.md#function-tms-setnewconfigavailable)` function should be called and the temporary file with the requested changes should be passed to this function.

The agent will load the new changes and store them in its permanent configuration. The configuration changes will occur in run-time and no reboot is required.


### Prototype



```cpp
struct tmsReturn tms_setNewConfigAvailableWithTimeout(const char* newTMSConfig, int timeout);
```

`newTMSConfig` - the full path to the new TMS configuration file.

`timeout` - timeout value to wait for new configuration file to be processed.

The agent must have read permissions on the temporary file for this to work correctly.


### Returns

A `[tmsReturn](structtms_return.md)` structure:



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the set new config request to the ADK TMS Agent. All other return values indicate a failure.
* `[tmsReturn.handle](structtms_return.md#variable-handle)` - The handle used for further status tracking in the callback. The callback status event will provide the final result of setting the configuration.


## tms_setApplicationInfo()

The application will call this function in response to a `SET_APP_INFO` event received in its callback.

This will allow the application to send application specific parameters to the agent that can be sent in ADK TMS messages to the server.

There are three types of parameters that the application can send to the agent: `IDENTIFIER`, `DEVICE_PROFILE` and `DIAGNOSTIC` parameters.

The `eventMask` field of the event will contain the mask of the parameters the agent is requesting.

The application should provide only the type of parameters requested by the agent in the `eventMask` field.

One example of this would be the Device ID that is controlled by the application.

Another example would be the Lane/Store info that is controlled by the POS system, but can be retrieved by the application.


### Prototype



```cpp
int tms_setApplicationInfo(int handle, struct tmsAppInfo appInfo)
```

`handle` - This should be the same handle provided in the callback event.

`appInfo` - A structure containing all of the application specific parameters that can be sent to the ADK TMS server.


### Returns

Status of the call. TMS_STATUS_SUCCESS indicates the call was successful. All other values indicate a failure.


## tms_setApplicationParameterList()

The application will call this function in response to a `SET_PARM_LIST` event received in its callback.

The application can provide a filename that contains a list of parameter files that can be managed through ADK TMS in its response.


### Prototype



```cpp
int tms_setApplicationParameterList(int handle, int numParamFiles, const char* paramInfoFile)
```

`handle` - This should be the same handle provided in the callback event.

`numParamFiles` - The number of parameter files described in `paramInfoFile`.

`parmInfoFile` - A file that lists all of the applications parameter files, as well as a hash value for each of the parameter files.


### Returns

Status of the call. `TMS_STATUS_SUCCESS` indicates the call was successful. All other values indicate a failure.


## Data Accessor Callback

The data-accessor callback function is called to obtain each parameter value that needs to be retrieved for calculating the hash. That is, each parameter listed in the Parameter Definition(VPDX) File.The parameter value must be provided in a UTF - 8 format string if not already in UTF - 8 format.For the most part this means values will be provided in ASCII, but consideration must be taken to ensure that 7bit and other multi - byte formats are converted correctly.


### Prototype



```cpp
typedef int(*tmsSetAppParamHashCB)(char* paramName, char* paramValue, size_t paramValueLen)
```

`paramName` - Name of the configuration parameter in the same format it is supplied in the parameter import file format.For example, where the Parameter Definition(VPDX) File defines a prefix, a container and the parameter name it is in the format{ prefix } / {container} / {parameter - name}.

`paramValue` - Pointer to return buffer for parameter value in UTF - 8 format.

`paramValueLen` - Length of the parameter value in bytes.


### Returns

Status of the call. `TMS_STATUS_SUCCESS` indicates the call was successful. `TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST` indicates that the requested parameter doesn't exist. All other return values indicate the parameter requested was valid, it was just unable to be retrieved


## tms_setApplicationParameterHash()

The application will call this function in response to a SET_PARM_LIST event received in its callback.

The application will provide the name of the Parameter Definition(VPDX) File defining the configuration parameters being managed by VHQ for this application and the data - accessor callback function.


### Prototype



```cpp
int tms_setApplicationParameterHash(int handle, const char* paramDefFile, tmsSetAppParamHashCB paramDataCb)
```

`handle` - This should be the same handle provided in the callback event.

`paramDefFile` - Filename of the Parameter Definition(VPDX) File.

`paramDataCb` - Function that Agent will use to access the configuration parameter values.


### Returns

Status of the call. `TMS_STATUS_SUCCESS` indicates the call was successful. All other values indicate a failure.


## tms_sendParameterUpdate()

The application will call this function to pass the Agent one or more configuration parameter updates that are to be uploaded to the VHQ Server.


### Prototype



```cpp
struct tmsReturn tms_sendParameterUpdate(struct tmsParamUpdateStruct *parameterUpdates)
```

`parameterUpdates` - A structure containing the parameter updates the the required information to be sent to the VHQ server (see [svc_tms.h](svc__tms_8h.md#file-svc-tms.h) for more information about the details of this structure).


### Returns

Status of the call. `TMS_STATUS_SUCCESS` indicates the call was successful. All other values indicate a failure.


## tms_getApplicationFileAvailable()

The application will call this function in response to a `GET_FILE` event received in its callback.

When the agent requests a file with `GET_FILE`, the application will put the file in a shared location and use this call to notify the agent that the file is available.

The shared location file must have read permissions for the agent. Also, this is currently only used for parameter management.


### Prototype



```cpp
int tms_getApplicationFileAvailable(int handle, int result, const char* fileLocation, unsigned char removeFile)
```

`handle` - This should be the same handle provided in the callback event.

`result` - The status of the application getting the file. If the agent requests a file that the application should not share, the app should respond with an error.

`fileLocation` - The shared location where the application put the requested file. This only needs to be set if the file retrieval was successful.

`removeFile` - A boolean telling the agent whether it should delete the file when it is finished with it. For cases where the app copies a file from its private area to a shared area, this should be set to TRUE.


### Returns

Status of the call. `TMS_STATUS_SUCCESS` indicates the call was successful. All other values indicate a failure.


## tms_setFileOperationResult()

The application will call this function in response to a `PUT_FILE` or `DEL_FILE` event received in its callback.

When the agent requests a `PUT_FILE`, the application should copy the file from the location provided by the event, into its own directory (if allowed).

When the agent requests a `DEL_FILE`, the application should delete the specified file (if allowed).

If the `PUT_FILE` or `DEL_FILE` is trying to operate on a file that should not be operated on, then the app should respond with an error.


### Prototype



```cpp
int tms_setFileOperationResult(int handle, int fileOpResult, int fileOpType)
```

`handle` - This should be the same handle provided in the callback event.

`fileOpResult` - The status of the `PUT_FILE` or `DEL_FILE` request. `TMS_STATUS_SUCCESS` should be used to indicate the operation was successful. Any other status response indicates to the agent that the file operation failed.

`fileOpType` - This should be the same event type provided in the callback event. For `PUT_FILE` requests, it should be `PUT_FILE` and for `DEL_FILE` requests it should be `DEL_FILE`.


### Returns

Status of the call. `TMS_STATUS_SUCCESS` indicates the call was successful. All other values indicate a failure.


## tms_setFileOperationResultWithDescription()

The application will call this function in response to a `PUT_FILE` or `DEL_FILE` event received in its callback.

When the agent requests a `PUT_FILE`, the application should copy the file from the location provided by the event, into its own directory (if allowed).

When the agent requests a `DEL_FILE`, the application should delete the specified file (if allowed).

If the `PUT_FILE` or `DEL_FILE` is trying to operate on a file that should not be operated on, then the app should respond with an error.


### Prototype



```cpp
int tms_setFileOperationResultWithDescription(int handle, int fileOpResult, int fileOpType, char* additional_info)
```

`handle` - This should be the same handle provided in the callback event.

`fileOpResult` - The status of the `PUT_FILE` or `DEL_FILE` request. `TMS_STATUS_SUCCESS` should be used to indicate the operation was successful. Any other status response indicates to the agent that the file operation failed.

`fileOpType` - This should be the same event type provided in the callback event. For `PUT_FILE` requests, it should be `PUT_FILE` and for `DEL_FILE` requests it should be `DEL_FILE`.

`additional_info` - This is a string, mostly used for error cases, that can be relayed to the server with the result (maximum length is 256 characters)


### Returns

Status of the call. `TMS_STATUS_SUCCESS` indicates the call was successful. All other values indicate a failure.


## tms_setTransactionResult()

The application will call this function in response to a `DO_TRANSACTION` event received in its callback function. The application will report the result of the requested transaction in this function call.


### Prototype



```cpp
int tms_setTransactionResult(int handle, int transactionResult)
```

`handle` - this should be the same handle provided in the callback event.

`transactionResult` - The status of the `DO_TRANSACTION` request. `TMS_STATUS_SUCCESS` should be used to indicate the transaction was successful. Any other status response indicates to the agent that the transaction failed.


### Returns

Status of the call. `TMS_STATUS_SUCCESS` indicates the call was successful. All other values indicate a failure.


## tms_sendApplicationAlert()

The application can call this function to generate an application based alert on the server


### Prototype



```cpp
struct tmsReturn tms_sendApplicationAlert(char* description, int severity, char* details)
```

`description` = A short description of the alert (MAX 256 characters).

`severity` = The severity of the alert (valid values are TMS_ALERT_SEVERITY_LOW, TMS_ALERT_SEVERITY_MEDIUM or TMS_ALERT_SEVERITY_HIGH)

`details` = Optional string to provide details about the alert to the server (MAX 511 characters)


### Returns

A `[tmsReturn](structtms_return.md)` structure



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the alert request to the ADK TMS Agent. All other return values indicate a failure.
* `[tmsReturn.handle](structtms_return.md#variable-handle)` - The handle used for further status tracking in the callback. The callback status events will only be sent to registered applications.


## tms_sendCustomAppEvent()

The application can call this function to generate an application based custom event on the server


### Prototype



```cpp
struct tmsReturn tms_sendCustomAppEvent(char* appName, char* description, char* details)
```

`appName` = Application Name

`description` = A short description of the alert (MAX 256 characters).

`details` = Optional string to provide details about the alert to the server (No enforced maximum but 4096 characters is the recommended limit)


### Returns

A `[tmsReturn](structtms_return.md)` structure



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the alert request to the ADK TMS Agent. All other return values indicate a failure.
* `[tmsReturn.handle](structtms_return.md#variable-handle)` - The handle used for further status tracking in the callback. The callback status events will only be sent to registered applications.


## tms_setApplicationState()

The application will call this function in response to a `SET_APP_STATE` event received in its callback.

If the application is not busy, it will respond with a `FREE` status.

If the application is busy, it can respond with a `BUSY` status which will prevent certain agent operations (like a reboot) from taking place.

After the application completes what is causing it to respond with `BUSY`, it will call this function again with the `FREE` status.

If the application responds with the `BUSY` state and does not respond with `FREE` state before a user configured timeout (specified in `AppIfc` Busy Response Timeout which defaults to 5 minutes),

the agent will request the state from the application again by sending another `SET_APP_STATE` event to the app.

As long as the app is responding to the `SET_APP_STATE` event with `BUSY` status, the agent will not proceed with its operation.

If the app does not respond to `SET_APP_STATE` event at all, the agent will proceed with the operation depending on the `AppIfc` Proceed On Failure parameter.

If it is set to `TRUE`, the agent will continue with the operation after the app fails to respond to `SET_APP_STATE` event. If it is set to `FALSE`, the agent will fail the operation.

If the application has been sent the TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD message, then this function can also be called with APP_STATUS_POSTPONE if the application wishes to postpone a software install. If the application wants to install right away, then this function should be called with APP_STATUS_FREE. 
This function can also be called at any time by the app to set its `BUSY` or `FREE` state.

This will allow the app to preemptively cause certain operations (like reboot) from occurring.

So if the app sets its state to BUSY without a `SET_APP_STATE` event being received in the callback,

the agent will already know the app is `BUSY` and won't send the `SET_APP_STATE` in situations when it normally would (like just before rebooting the terminal).

Instead the agent will wait for the app to set its state to `FREE` before proceeding. For instance, before the app does its daily clearance, it can preemptively use this function to set its state to `BUSY`.

When the app is complete with the daily clearance, it can then use this function to set its state to `FREE` again.

But if the agent gets to the point where it needs to perform an event that requires the busy application to approve, the agent will give the pre-emptively `BUSY` application _AppIfc__Busy__Response__Timeout_ seconds to clear its pre-emptive busy status.� If the app does not clear its pre-emptive busy status within _AppIfc__Busy__Response__Timeout_ the agent will begin sending `SET_APP_STATE` messages to the app to confirm the app is still busy.


### Prototype



```cpp
int tms_setApplicationState(int handle, int appState)
```

`handle` - This should be the same handle provided in the callback event. If using this function preemptively, the handle should be set to -1.

`appState` - The state of the app. `APP_STATUS_FREE` if the application is free, or `APP_STATUS_BUSY` if the application is busy. `APP_STATUS_POSTPONE` if the application wishes to postpone a software install. Sent in response to a TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD message.


### Returns

Status of the call. `TMS_STATUS_REQUESTED` indicates the call was successful. All other values indicate a failure.


## tms_lockServerInstance()

This function will be used by the application to request the agent to lock the server instance the agent will talk to.

The timeout provided can be used to specify how long to wait for the lock.

If acquiring the lock is successful, the agent will store its current keys/configuration before switching to the different configuration with name `InstanceID`.

The name of the server instance that was in use before the lock will be returned in the callback event.

That name can be used as the `restoreInstanceId` parameter in the [tms_releaseServerLock()] call to restore the previous server instance when releasing the lock.


### Prototype



```cpp
struct tmsReturn tms_lockServerInstance(const char* InstanceID, int mlSecTimeout)
```

`InstanceID` - The name of the configuration to load. If acquiring the lock is successful, the agent will load its configuration, keys, and current certificates, from its stored configuration of the name provided.

If this is the first time this instance name is being loaded, the agent will create a new default configuration for the instance, and will process

`VHQconfig_<InstanceID>`.`ini`, `VHQSrvPubKey_<InstanceID>`.`crt`, `VHQSrvSSL_<InstanceID>`.`pem`, and `VHQFTP_<InstanceID>`.`pem`.

`mlSecTimeout` - Timeout, in milliseconds, that the agent should wait for the lock.

If the agent is unable to acquire the lock in the specified time, error `TMS_STATUS_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR` will be returned in the callback.

A 0 or negative value for this parameter indicates there is no timeout and the agent should wait until it acquires the lock (however long that might take).


### Returns

A `[tmsReturn](structtms_return.md)` structure.



* `[tmsReturn.status](structtms_return.md#variable-status)` - The immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the server lock request to the agent.

All other return values indicate a failure. Additional status information will be sent in the registration callback in a `TMS_EVT_LOCK_SERVER_INSTANCE` event:



* `TMS_STATUS_SUCCESS` - The lock was successfully acquired and server instance was changed.
* `TMS_STATUS_SERVER_INSTANCE_ERROR` - An error occurred when agent tried to switch server instances.
* `TMS_STATUS_SERVER_INSTANCE_LOCK_ERROR` - A failure occurred acquiring the server lock.
* `TMS_STATUS_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR` - A timeout occurred acquiring the lock.
* `TMS_STATUS_SERVER_INSTANCE_CONFIG_LOAD_ERROR` - An error occurred loading the new instance configuration.



1. The application should be registered to correctly use this API, because additional status about changing the server instance will be sent in the registration callback.
2. When setting up the device for multiple server instances, multiple configuration and certificate files need to be loaded to the device.


The configuration to be used during the initial communications with the server should be loaded as users have always loaded their

configuration (`VHQconfig.ini`, `VHQSrvPubKey.crt`, `VHQSrvSSL.pem`, `VHQFTP.pem` and signature files).

The secondary configuration and certificates should be loaded with `"_<SecondaryInstanceName>"` added.

The files with `"_<SecondaryInstanceName>"` in their name should be signed as well and loaded the same way the initial

configuration files are loaded (i.e. `VHQconfig_backup.ini`, `VHQconfig_backup.ini.p7s`, `VHQSrvPubKey_backup.crt`, `VHQSrvPubKey_backup.crt.p7s`, `VHQSrvSSL_backup.pem`, etc.).

When the app wanted to load the backup configuration, it would call `tms_setServerInstance`("backup").

The first time the "backup" configuration is loaded, the agent will process the "_backup" files and begin talking to the backup server instance.



1. The server instance that was in use before the lock was acquired will be returned in the filename field of the callback event structure.

This instance name can be passed as `restoreInstanceId` parameter of [tms_releaseServerLock()] call to restore the previous instance of the server after the application is finished.


## tms_getServerInstance()

ion to request from the `ADK` TMS Agent which server instance the agent is currently talking to.


### Prototype



```cpp
struct tmsReturn tms_getServerInstance(void)
```


### Returns

A `[tmsReturn](structtms_return.md)` structure



* `[tmsReturn.status](structtms_return.md#variable-status)` - immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the get server instance request to the agent.

The name of the instance will be returned in an event to the registration callback function. A new `TMS_EVT_GET_SERVER_INSTANCE` event will be added and will be used to provide the name of the current instance.

The application must be registered to correctly use this API, because the name of the current server instance will be sent in the registration callback. The name of the current instance will be returned in the filename field of the callback event structure when this call is successful.


## tms_releaseServerLock()

This function will be used by the application to release the server lock the application obtained through successful [tms_lockServerInstance()] API.

If restoreInstanceId is provided, the agent will load that instance after the lock is released.


### Prototype



```cpp
struct tmsReturn tms_releaseServerLock(char* restoreInstanceId)
```

`restoreInstanceId` - parameter can be used to restore the previous server instance that was in use before the application locked the agent to another instance.

The previous instance can be obtained using [tms_getServerInstance()] API. The previous instance is also returned in the callback for a successful [tms_lockServerInstance()] call.


### Returns

A `[tmsReturn](structtms_return.md)` structure.



* `[tmsReturn.status](structtms_return.md#variable-status)` - immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the release server lock request to the agent.

The final status of the lock release will be returned in the registration callback via a `TMS_EVT_RELEASE_SERVER_INSTANCE` event.

Because the status of releasing the server lock will be sent in the registration callback, the application must be registered to correctly use this API.


## tms_idsMode()

This function will be used by the application to find if device is in IDS mode or not


### Prototype



```cpp
bool tms_idsMode(void);
```


### Returns



* `bool` - TRUE if device is in deployment mode if not FALSE


## tms_getUpdates()

This function is used by the application to request updates from the management server. The application needs to be registered in order to request a TMS call. Application will get status information about the downloads and it's notifications in its callback.


### Prototype



```cpp
struct tmsReturn tms_getUpdates(const char* updateType, const char* software, const char* reference);
```


### Returns

A `[tmsReturn](structtms_return.md)` structure.



* `[tmsReturn.status](structtms_return.md#variable-status)` - immediate library status response. `TMS_STATUS_REQUESTED` indicates the library was able to successfully send the release server lock request to the agent.

The final status of the lock release will be returned in the registration callback via a `TMS_EVENT_NOTIFY_GET_SW_UPDATE` event.


## Content Management

The ADK TMS Agent has the capability to update application content, but the application needs to have support for ADK TMS content updates as well for everything to work.

When the agent receives content updates, it will notify the application that new content is available and it will be up to the application to process the new content.

If the application does not support content management, then the agent will reject content updates for that application.

Here are some notes and tips for application support of content updates.



* The ADK TMS Agent supports different types of content updates. When notifying the application about a content update, the agent will also tell the application what type of content the new content is.

The following content types are supported by the agent: Unsigned Bundle, Unsigned File, Mixed Bundle, Signed Bundle.



* It is up to the application to allow the content updates or to not allow the content update.

For example, an application will probably allow a content update of an unsigned file if it receives the Unsigned File content type for that file.

But if an application receives an Unsigned File content type that is trying to update a file that should be signed, the application should reject that content.

About Mixed Bundles: Although the ADK TMS server does not support sending mixed bundles in the current version, it will support sending mixed bundles in the future. When receiving mixed bundle updates, the application will need to decide whether to allow the mixed content update to take place. Once again, if the content update is trying to replace a file that should be signed with an unsigned version of that file, then the application should reject the content update. When a package contains multiple files (signed and unsigned) and any of the files do not pass a signature test, then the application should reject the entire content package so a new and correct package can be used with all of the correct signatures and files.



* ADK TMS supports expiring content and when the ADK TMS Agent receives a content download with an expiration date, one of the first things the agent does for this is to make a backup copy of the original file.

The agent does this so that only the agent needs to know about expiring content, keeping the application isolated from expiring content.

At the expiration time, the agent will notify the application of new content, and provide the original file back to the application as the new content.

In order for this to work correctly, the agent needs to have "read" permission for the original file.

So the application needs to make sure that all content that can be updated through ADK TMS has read permissions for the ADK TMS Agent (sys6 user on V/OS, usr1 user on MX8).

On V/OS, the GRSEC policy will not allow ADK TMS Agent running as sys6 to copy files directly from a user's flash directory (_./flash/_)

but it will allow the agent to copy files from the user's flash/share directory (_./flash/share/_). So it is recommended to store content files that can be updated by the agent in _./flash/share_.


### V/OS Content Management

On V/OS and VX devices, the application needs to register with the Application Content Update Available flag set in the `eventNotifyMask`.

The agent will then send `PUT_FILE` events to the application when content updates are available.

The type of content available will be specified in the `eventData.putFileType` field.

After processing the content update and deciding whether to accept or reject the update, the application should call [tms_setFileOperationResult()] with the final result of the content update.

The ADK TMS Agent will wait 3 minutes for the application to return the result after being notified of a content update.


### MX8 Content Management

MX8 device applications use a ADK TMS Content Library for content management.

Applications will use functionality provided by the ADK TMS content library to register for content updates and get notification when content updates are available for the application.

These are the ADK TMS Content Library functions that an application will use to support content updates. For more information about these functions, please check out the `VHQContentLib.h` header file.



* `vhq_waitForContent()` - This function is called by the application to receive content update notifications through a callback.

This function is a blocking call and should be run on a separate application thread. When content is available for the application, the callback function provided in this function will be called.



* `vhq_setContentResult()` - This function is used by the application to set the result of a content update request.

This result will be passed along to the ADK TMS server so that ADK TMS users can be notified about the status of content updates.

The ADK TMS Agent will wait 3 minutes for the application to return the result after being notified of a content update.


## Application Integration Support for MX8

Starting in ADK TMS Agent version 1.06.0003, extended application integration is supported on MX8 terminals. The extended integration support is provided in the `vfiVHQAppInteg` library.

The same functionality provided for V/OS and VX is provided for MX8 applications as well. For more information about these functions, please check out the `VHQAppIntegLib.h` header file provided with the ADK TMS release.


## Application Integration Flow Example

Here is an example of the sequence of calls that should be made for an application to integrate with the ADK TMS Agent.



1. At startup, the application calls [tms_registerApplication()]. At a minimum, the callback function provided in the register call MUST support handling of these events: `SET_APP_STATE`, `SET_APP_INFO` and `SET_PARM_LIST`.
2. If Contact Server Approval flag is set in `eventNotifyMask` of register call in step 1, then the agent will send a `SET_APP_STATE` event to the app before sending any messages to the server.

The app should respond to `SET_APP_STATE` event by calling [tms_setApplicationState()] to set the application status to free.



1. The agent will begin creating the message to send to the server. While creating the message, the agent will send `SET_APP_INFO` event to the app.

The app should respond to `SET_APP_INFO` event by calling [tms_setApplicationInfo()], and providing a list of parameters that the agent might send up in the message.

Here is an example of some of the parameters that an app might send in [tms_setApplicationInfo()] call:



```cpp
struct tmsAppParameter custom_parameters[] =

{

{"DeviceId", "1234", TMS_PARAMETER_TYPE_IDENTIFIER},

{"StoreId", "Store11", TMS_PARAMETER_TYPE_IDENTIFIER},

{"LaneId", "Lane5", TMS_PARAMETER_TYPE_IDENTIFIER},

{"AppCommMode", "RS232", TMS_PARAMETER_TYPE_DEVICE_PROFILE},

{"CardSwipeCount", "25", TMS_PARAMETER_TYPE_DIAGNOSTIC},

{"MasterCardSwipeCount", "5", TMS_PARAMETER_TYPE_DIAGNOSTIC},

{"VisaSwipeCount", "12", TMS_PARAMETER_TYPE_DIAGNOSTIC},

};
```



1. Depending on the message the agent is creating, it might send a `SET_PARM_LIST` event to the app. The app should respond to SET_PARM_LIST event by calling [tms_setApplicationParameterList()].

Here is an example (`ParamFile.dat`) of a file provided in the [tms_setApplicationParameterList()] call:



```cpp
AppConfig.ini SHA-1 1234567890123456789012345678901234567890

CommConfig.ini SHA-1 0123456789012345678901234567890123456789
```



1. The agent will send the message it created to the server, including any parameters provided by the application to include in the message type created (determined by agent).

If the app registered with all notification enabled in the `eventNotifyMask`, the app will get a few `EVENT_NOTIFICATION` events in the callback while the agent is talking to the server:

Contact Server Start, Contact Server End, Heartbeat Result.


## System Mode Functionality


### System Mode and ADK TMS Agent

Most devices that support ADK TMS Agent functionality will have ADK ADK TMS support in their system mode. The system mode support will allow users to do the following (depending on the model):



* View the status of the last heartbeat.
* View and edit the ADK TMS configuration.
* View and copy the logs from the device to an attached USB device.
* View POS Agent details.

These features will be used to diagnose issues that occur during installation, deployment, configuration or ongoing operation of the device.

The heartbeat status will include error codes and most of the time a short text string describing the error code.

See [Diagnosing ADK TMS Errors from System Mode] for more information.


## Multi-Server Support


### Multi-server Support for ADK TMS Agent

Release 8 and later of the ADK TMS Agent supports talking to multiple servers.

Registered applications can use the APIs described above to configure multiple servers ([tms_lockServerInstance()], [tms_getServerInstance()] and [tms_releaseServerLock()]).

If these APIs are never called by an application on the device, the agent will behave exactly as it does today, talking to a single instance of an ADK TMS server.

It would not be until an application calls these APIs (specifically [tms_lockServerInstance()]) that the agent would behave differently.

When any application does call the [tms_lockServerInstance()] API for the first time ever on a device, the configuration that was used up to that point will be saved as the "primary" instance.

If multiple server instances are stored on a device, the "primary" instance will always be loaded at power up.


### Multi-Server Support Considerations



1. The design limits the agent to talk to a single server at any given time. The agent can't talk to multiple servers at the same time with the current design.
2. This design allows for any number of server instances to be maintained by the agent.
3. The "primary" instance will always be the loaded instance at startup.

Although it is loaded at startup, the "primary" instance will only be locked in place when communication is active with the "primary" instance (i.e. Heartbeats, Downloads or Maintenance Operations).

When the "primary" instance is idle, the instance lock will be available.



1. Since the agent has the capability to store scheduled operations that can be run at any time in the future,

the agent will need to keep track of which server instance the scheduled operations are for.

So when it is time for one of the scheduled operations to run, the agent may need to switch server instances in order to run the scheduled operation.

If server instances are locked, the agent will need to wait for the server lock to be released and then the agent will perform the scheduled operation.

After completing the scheduled operation, the agent will switch back to the server instance that was set before the scheduled operation was executed.



1. All HB operations will be performed against the current server instance.

When switching instances, the HB event will always get rescheduled according to the current instance parameters (frequency, server, etc.).

When the agent is performing its regularly scheduled HB without any app interaction, it will lock server instances while it is doing the HB. When the HB is complete, it will release the server lock.


## IP Over USB Overview


## IP Over USB

The IP over USB solution allows ADK TMS Agent to connect by network (TCP/IP) over a USB interface.

The IP over USB solution is only available for V/OS platforms at this time.

The V/OS operating system uses the USB gadget drivers from the open source community that allows serial and network emulation over a physical USB link.

The V/OS platform supports 3 USB gadget drivers: serial, network and composite:



* USB Gadget Serial: Virtual Serial port over USB
* USB Gadget Ethernet: Virtual Ethernet Interface over USB
* USB Gadget Composite: A Virtual Serial Port and a Virtual Ethernet Interface over USB

The ADK TMS Agent will use the Ethernet interface to communicate to the ADK TMS Server. The V/OS platform block diagram such as an MX9xx unit would look like the following:

![08_agt_VOS_Platform_Block_Diagram.png](.//08_agt_VOS_Platform_Block_Diagram.png)Figure 6: V/OS Platform Block Diagram![08_agt_VOS_Platform_Block_Diagram.png](.//08_agt_VOS_Platform_Block_Diagram.png)Figure 6: V/OS Platform Block Diagram![08_agt_VOS_Platform_Block_Diagram.png](.//08_agt_VOS_Platform_Block_Diagram.png)Figure 6: V/OS Platform Block Diagram![08_agt_VOS_Platform_Block_Diagram.png](.//08_agt_VOS_Platform_Block_Diagram.png)Figure 6: V/OS Platform Block Diagram


### Communication Interfaces



* If Gadget Serial is loaded in the MX, only ttyGS0 is created (usb0 not created). The corresponding COM port is also created on the PC side.
* If Gadget Ethernet is loaded in the MX, only usb0 is created (ttyGS0 not created). The corresponding Ethernet interface is also created on the PC side.
* If Gadget composite is loaded in the MX, both usb0 and ttyGS0 are created. The corresponding COM port and Ethernet interface are also created on the PC side.

The Windows PC block diagram would be the following:

![09_agt_Windows_PC_Block_Diagram.png](.//09_agt_Windows_PC_Block_Diagram.png)Figure 7: Windows PC Block Diagram![09_agt_Windows_PC_Block_Diagram.png](.//09_agt_Windows_PC_Block_Diagram.png)Figure 7: Windows PC Block Diagram![09_agt_Windows_PC_Block_Diagram.png](.//09_agt_Windows_PC_Block_Diagram.png)Figure 7: Windows PC Block Diagram![09_agt_Windows_PC_Block_Diagram.png](.//09_agt_Windows_PC_Block_Diagram.png)Figure 7: Windows PC Block Diagram

The Microsoft CDC-ACM and USB RNDIS drivers will be provided by Verifone to install on Windows systems that will allow connection with V/OS platforms that support the USB gadget drivers. The Windows platforms to be supported are:



* Win 7 (32 and 64 bit)
* POSReady 2009

Linux is also planned to be supported. The minimum V/OS operating system version required for the IP over USB support is: 30145200 or later. The minimum ADK TMS Agent version is: 2.8.x or later.

**Table****4**


| Component  | MX8xx models  | MX9xx models (V/OS based devices)  | Vx (Verix based devices)   |
|  -------- | -------- | -------- | -------- |
| **Operating System Version** | Not Supported  | 30145200 or later  | Not Supported   |
| **ADK TMS Agent** | Not Supported  | 2.8.14 or later  | Not Supported   |


Having the USB ethernet or composite gadget drivers enabled on the V/OS platform allows the ADK TMS Agent to always be able to communicate over a network TCP/IP socket interface.

This allows communication to the ADK TMS Server to always appear as a network connection to the ADK TMS Agent.


## POS and Form Agent Application Configuration

Use the following procedures to configure POS and Form Agent.


### Form Agent Configuration

To configure Form Agent on the Verifone device to communicate over a network connection separate from the USB/Serial connection being used for the ADK TMS communication,

make certain the following settings are present in the correct sections of the config file (`config`, `config.usr1`) used by Form Agent.

It is mandatory these settings are present. The Verifone device should also have Ethernet enabled, but NO network cable should actually be plugged into the Ethernet port of the device.

This allows Form Agent to see the network interface configuration without a physical Ethernet cable connected and be able to communicate over a network socket using the proxy mode of POS Agent.



```cpp
[perm]

tcpip_floating_session_mode=1



[reg]

commtype=TCPIP

server=1

termprt=9001

maxsvrconn=1
```


### POS System Application (TCP IP Connected, Form Agent on the Device)

This is not a common configuration, but if the POS system application can support communication over a network connection to the Verifone device Form Agent application,

then the following must be set for the POS system application. Form Agent settings must also be set as shown above.



1. Configure the payment application on the POS/PC to communicate to 127.0.0.1:9002
2. Configure Form Agent to listen on port 9001 (as shown above for Form Agent settings)
3. Run the POS system payment application and Form Agent as normal.


### Ingenico Emulator, Other Applications

To configure these applications you must consult the respective application user guides to determine what ports they open. You must configure the Verifone device application to open the port _/tmp/ttyECR_.


# System Setup and Requirements


## Compiler and Linker Settings to Build an Application

Please refer to VHQ Agent release "...doc\agt\example\test" directory included in each Agent release for example test application C code that exercises the various VHQ Agent API's. The correct SDK for the OS and ADK versions should be used. Below is example Makefile compiler and linger flag settings to compile the test application. This is only an example, and paths and libraries should be changed to reflect the current application build environment.

PKGNAME=svc_tms_tester NAME= TYPE=program vrx_APPTYPE=vsa

MFT_DIR=test/mft CONFIG_DIR=test/config RES_DIR=test/www/svc_tms_tester

CFLAGS=-I. -Isrc/

vos_SOURCE=test/svc_tms_tester_vos.c vos2_SOURCE=test/svc_tms_tester_vos2.cpp vrx_SOURCE=test/svc_tms_tester_vrx.cpp

vos_CFLAGS=-Wall -pthread -isystem /usr/local/include/fancypants -isystem /usr/local/include/fancypants/libfp -Iimport/vos/include -fvisibility=hidden vos2_CFLAGS=-Wall -pthread -Iimport/vos2/include vrx_CFLAGS=-Iimport/vrx/include -DLOGSYS_FLAG -DLOGSYS_NEW_API_STYLE -D_USE_TIMEVAL_FROM_SVC_NET_H_ -DIPC_TMS_DLL_IMPORT -DTMS_DLL_IMPORT

vos_LDFLAGS_release=-Wl,-Map,vos-release/svc_tms_tester_release.map vos_LDFLAGS_debug=-Wl,Map,vos-debug/svc_tms_tester_debug.map vrx_LDFLAGS=

vos2_LDFLAGS=&ndash;sysroot  -Lvos2-debug/ -Lvos2-release/ -L/usr/local/lib -L/usr/local/lib/svcmgr -Wl,-rpath-link=/usr/local/lib/svcmgr,-rpath-link=/usr/local/lib/

vos_LIBS=-pthread -lsvc_event -lsvc_sigcap -lfp -lfpmedia -lecore_fb -lecore_job -lecore_evas -lecore -levas -leet -lpng -lz -ljpeg -lfreetype -lvfpos1 vrx_LIBS=/lib/svc_net.o /lib/elog.o /lib/VxSTLn.a import/vrx/lib/libposix.so import/vrx/lib/libvfiipc.so import/vrx/lib/liblog.so


## Hardware Supported

Currently VHQ Estate Management System supports all Verix, VOS, VOS2 and RFS based devices which include all Verix models, MX, UX, Engage (Raptor) and Carbon (Swordfish) platforms.


## Software Dependencies

ADK Overview & Components

[http://confluence.verifone.com:8090/pages/viewpage.action?pageId=7997160](http://confluence.verifone.com:8090/pages/viewpage.action?pageId=7997160)

ADK Communication Service

[http://confluence.verifone.com:8090/display/GR/Notebook+-+Communication+Service](http://confluence.verifone.com:8090/display/GR/Notebook+-+Communication+Service)

ADK Logging

[http://confluence.verifone.com:8090/display/GR/Notebook+-+Logging](http://confluence.verifone.com:8090/display/GR/Notebook+-+Logging)

ADK Information Service

[http://confluence.verifone.com:8090/display/GR/Notebook+-+Information+Service](http://confluence.verifone.com:8090/display/GR/Notebook+-+Information+Service)

ADK Inter Process Communication

[http://confluence.verifone.com:8090/display/GR/Notebook+-+ADKIPC](http://confluence.verifone.com:8090/display/GR/Notebook+-+ADKIPC)

ADK System Services

[http://confluence.verifone.com:8090/display/GR/Notebook+-+ADKSYS](http://confluence.verifone.com:8090/display/GR/Notebook+-+ADKSYS)

ADK [Event](struct_event.md) Service

[http://confluence.verifone.com:8090/display/GR/Notebook+-+ADK-EVT](http://confluence.verifone.com:8090/display/GR/Notebook+-+ADK-EVT)

ADK Graphical User Interface Service

[http://confluence.verifone.com:8090/pages/viewpage.action?pageId=39917440](http://confluence.verifone.com:8090/pages/viewpage.action?pageId=39917440)

ADK LIBPOSIX for Verix eVo

[http://confluence.verifone.com:8090/display/GR/Notebook+-+LIBPOSIX+for+Verix+eVo](http://confluence.verifone.com:8090/display/GR/Notebook+-+LIBPOSIX+for+Verix+eVo)


## Deliverables and Deployment

Each VHQ Agent release is included in overall ADK release which contains all ADK components. Please refer to ADK releases which will include all VHQ Agent deliverables.


# Troubleshooting


## Frequently Asked Questions (FAQ's)

Please see the VHQ Agent FAQ Confluence Page which contains current FAQ's in multiple categories:

[http://confluence.verifone.com:8090/display/GR/FAQ+-+ADK+VHQ+Agent+Frequently+Asked+Questions+and+Troubleshooting+Articles](http://confluence.verifone.com:8090/display/GR/FAQ+-+ADK+VHQ+Agent+Frequently+Asked+Questions+and+Troubleshooting+Articles)


## Device Installation

Use the procedures in this section to troubleshoot issues you may encounter during installation.

Mx9 and Mx8 devices have different graphical user interfaces. In the text below, Mx9 device paths are stated in bold, followed by the Mx8 path in (bold, italics within parentheses).


During initial device installations, it is possible to encounter devices that do not connect with ADK TMS Agent.

This section will aid in determining and resolving possible connectivity issues.

In rare circumstances, a device that has previously connected with ADK TMS could cease communicating with the server.

If this should happen, the customer or installer should gather debugging information to correct the problem on site, or if that fails,

the device could be swapped out with a working device.

_**Step 1: Put the Device into System Mode.**_

On the Mx9, press the 1-5-9 keys simultaneously. On the Mx8, you need to insert the tip of a straightened paper clip into the pin hole near the top right corner of MX device,

near the "card swipe" area, and press and hold it for about 3 seconds. You will see the login screen to login as user "USR1".

_**Step 2: Verify that the relevant MX device is powered on and has network connectivity.**_



1. By going to _Home>Admin>Comm>Network_ (Configure, Network), you can determine whether Ethernet is enabled and up.

If Ethernet is not up, go to _Home>Admin>Comm>Net>Ethernet_ (Configure, Network). Is Ethernet enabled?



* If not, click the value for the "Enabled" field and change to "Yes" (follow screen prompts in Configure, Network).
* If yes, go to _Home>Diagnostics, Communications>Ethernet_, does the screen say "Network Up"? (Is Ethernet up and are the network parameters valid?)
* If the Ethernet cable is connected to the device after it is powered on, please ensure that terminal is rebooted prior to performing any further troubleshooting
* Ping the ADK TMS server. Go to Home Diagnostics, Communications, Ethernet (Configure, Network, Ping test). Enter the address of the ADK TMS server [192.030.100.103], and click the Ping button. The device will indicate whether the ping was successful. If the ping was not successful, contact the networking staff; otherwise continue reading.
* Validate connectivity to the ADK TMS server. If the ping is successful, there could still be firewall or other issues blocking connectivity. If you still get connection errors after the ping test, please consult Testing Connectivity Over Port 443. After resolution, continue from this point to Step 3.

_**Step 3: Check to see if ADK TMS is installed.**_

Once we know networking is set up, we need to be sure ADK TMS is installed on the device. On Mx9 devices, under _Home>Administration>Communication_, you will have a VHQ Estate Manager tab.

If this is an Mx8 device, tap the "CONFIGURE" button and check to see if you have a colorful "VHQ ESTATE MGMT" icon. If you do not see ADK VHQ estate manager installed, contact your Verifone technical resource.

_**Step 4: Instruct the terminal to perform an ADK TMS heartbeat.**_

If the ping test worked, and ADK TMS is enabled, go to _Home>Admin>Communications>VHQ>Status_ (Configure, VHQ Estate Mgmt), and press the Enable HB button.

If you see the two lines ADK VHQ Version / ADK VHQ not responding displayed in the ADK TMS Agent UI, wait for about a minute, and then press the Enable HB (Request HB) button. These messages indicate that the ADK TMS Agent is not yet running on the given device.

1. Do you see a status code? [Give it a minute or two to respond.]
    * a If your code is SUCCESS (0), proceed to step 5 below. If your code is not (0), Edit the configuration file by going to Home>Admin>Communications>VHQ>[Config](class_config.md) (Configure, VHQ Estate Mgmt, Edit Configuration) and check the following settings:
        * **Customer****ID** (should be your customer ID),
            * URL (Should be [https://vhq.verifone.com/MessagingServer/MessageHandler.asmx](https://vhq.verifone.com/MessagingServer/MessageHandler.asmx)),
        * **heartbeatsenabled** (should be True)
        * **keysexchanged** (note the value, True or False)
    * b If any of the configuration settings are incorrect
        * change the values by making corrections from the device interface; save the configuration; and reboot the device.
        * Attempt once more to perform a heartbeat by clicking the Enable HB button (Go to the beginning of this step, Step 4). If this works by displaying a SUCCESS (0) message, proceed to Step 5; otherwise, continue reading.
2. Refer to ADK TMS Agent Error Codes and find the code displayed. These codes often provide enough information to describe the problem well enough so that the solution is obvious.
3. If not, however, we can look deeper into the device logs.
    * a Device Logs: Proceed to Acquiring and Diagnosing ADK TMS Errors from the Agent Log Files and send the device logs to Verifone Support.

_**Step 5: Check ADK TMS server information.**_

Log into the ADK TMS web site at [https://vhq.verifone.com](https://vhq.verifone.com) using your company ID, User ID, and password.

On the ADK TMS server's Device Search Filter tab, can you locate the device in ADK TMS? If yes, when was the last heartbeat? If it is recent, then the device is probably communicating properly.



1. Click the View profile link and note the following information about the device:
    * a What is the device status? (Pending Registration, Pending Hierarchy Assignment, Active, or Inactive)
    * b On the Communication History tab, when was the last time the server communicated with the device? When was the last heartbeat?
    * c If the times are recent, then the device is likely communicating properly.
    * d When and what was the last download? (Listed on the Download History tab)
    * e What alerts have been recorded for the device? (Listed on the Alerts tab).
2. If the ADK TMS server information indicates that the device is properly communicating, you are finished.

If not, be sure you have sent the device logs to Verifone Support with a brief explanation and contact number or email address.

Acquiring and Diagnosing ADK TMS Errors from the Agent Log Files details how to obtain and read device logs.


## Capturing Logs


### Acquiring and Diagnosing ADK TMS Errors From Agent Log Files

Use this section to access and analyze error log files.

This section assumes the device you are working with is not connecting to the ADK TMS server. If the ADK TMS Agent in the device is connecting, you can get device logs remotely by viewing the device profile on the ADK TMS server GUI and getting the ADK TMS Agent logs as part of the diagnostic action **Get OS Logs**.


The device should have ADK TMS Agent version 1.06.0007 or higher to perform any of the ADK TMS remote diagnostic actions and for the server to support that version.

Once the device profile is open, you can click on the Schedule Diagnostic Action button and select **Get OS Logs** from the dropdown.

The device logs will be placed at a link on the device's Diagnostic History tab.

If logs cannot be obtained by performing Diagnostic Action **Get OS Logs** then, there are multiple ways to get logs from a Verifone device depending on the platform.

One method for ADK TMS Agent versions 2.8.x and later is to use the ADK LOG component which will allow capturing logs by either:



1. Serial com port
2. UDP network port
3. File specified.

Since the ADK TMS Agent is now part of the Application Development Kit (ADK), ADK operating mode can be set in the ADK TMS Agent configuration file downloaded to the unit (`VHQconfig.ini`).

ADK operating mode requires the ADK COM and ADK LOG components to also be installed in the unit. The other ADK components are part of the larger ADK release.

ADK operating mode allows using the ADK LOG component to capture the logs on any device that supports the ADK mode.

MX7xx/MX8xx platforms do not support ADK mode and require alternate methods described below to capture the logs.

V/OS platforms do support ADK mode and can use the LOG component. As part of the ADK LOG component installation, a `syslog.conf` file is downloaded, specifying the settings on how to capture the logs.

The following is a sample `syslog.conf` file. In this example, a file is specified for the log file (`syslog.log`):



```cpp
# Enable/Disable syslog daemon. 1-enabled, 0-disabled

enabled = 1

# Set log output destination. Available values: 0-serial, 1-udp, 2-file

destination = 2

# Severities from 0 (EMERG) to 7 (DEBUG)

log_level = 7

# Size of a buffer of a FILE* in KB, when using file as destination (must be >0 and <=20).

file_buf_size = 1

# Name of destination file

file_name = syslog.log

# Source of messages. 2 - Verix internal buffer, 4 - application buffer, 6 - both

log_source = 4

#number of files to rotate

number_of_files = 1

#Max size of one logfile (in Kb)

max_logfile_size = 2048

# How many times to retry if send to destination point fails; -1 = infinite, 0 - no retries, >1 - number of retries

send_retries = 0

# Configuration parameters for SERIAL destination (destination = 0)

# Serial communication port: 1-COM1 (default), 2-COM2

serial_com = 1

# Configuration parameters for UDP destination (destination = 1)

udp_host = 127.0.0.1

udp_port = 0
```

You can find documentation for each ADK component in the large ADK release, under the doc directory.

If the ADK LOG component cannot be used to capture logs on the Verifone device, use the following alternate methods:

**MX7xx/MX8xx and V/OS Platforms**

Getting full device logs is possible with MX8xx and most V/OS platforms like MX9xx. Use the ADK LOG component to capture logs as described above. If the device is not using ADK operating mode, use the following method:

_**Getting full device logs**_

Use a Verifone device cable with a USB host connection that you can use to copy the logs to a USB data storage device (e.g. USB stick).

See [Verifone Cables That Can Be Used To Capture Device Log Files] for cable part numbers that support this.

When you have a cable with a USB host connector, you should be able to go to _Home>Admin>Comm>VHQ>Copy Logs_ (Configure, VHQ Estate Mgmt, Copy Logs to USB).

With a USB stick inserted in the USB host connector, press the Copy button. The device logs will be saved with a ``.tgz file extension on the USB stick, which you can read or email to ADK TMS Support for further analysis.

From the system mode screen, use the Copy Logs button to copy ADK TMS log files to a USB drive. After obtaining the log files from the device, you should look through the `vhqlog` files from the logs.

On Mx8 devices, the `vhqlog`, `vhqlog.1` and `vhqlog.2` files will be at the root level of the USB drive. On MX9 terminals, the `vhqlog`, `vhqlog.1` and `vhqlog.2` files will be in the ZIP file created on the USB drive.

The MX9 log files will be in the ZIP file under the _mnt/flash/logs/share/ directory_.

_**Detailed instructions for reading log files**_



* It is possible to view the most recent log messages directly from the device.

Go to the ADK VHQ Log tab (at _Home>Admin>Communications>VHQ>Status_ (Configure, VHQ Management, View VHQ Logs) checking for messages in all caps that appear in the table of messages below.

Once you have located the appropriate message, you can use this information for debugging and/or reporting to Verifone Support.

The newest messages in the ADK VHQ log tab are at the bottom, so scroll down to the bottom of the log, and begin scanning upward from the bottom for messages like `"E_DEVICE_NOT_FOUND"` (i.e. messages in all caps separated by underscores).



* Each `vhqlog` file contains log messages with the older messages at the top of each log file and newer messages at the end of each log file. The file `vhqlog` contains the most recent messages, `vhqlog.1` contains messages older than `vhqlog` and `vhqlog.2` contains the oldest messages.

The best approach is to start with the most recent messages at the end of `vhqlog` file and work your way back to find to find the first place where the agent or server sends an error message.

If the error has been happening for a while, you may not be able to find the first place the error happens because it may have been flushed from the logs.

If the original error has not been flushed from the logs, you should be able to find a sequence where the agent sends a message to server

(a Heartbeat, Maintenance Heartbeat, [Event](struct_event.md), etc.) where the sequence leads to an error message being sent by the agent or server.

If the server sends the first error message below, you should be able to find the error from the server message's `ErrorID` field in the table below:


## Diagnosing ADK TMS Errors from System Mode

The first step in diagnosing an ADK TMS error is to retrieve the error code and error string from the ADK TMS system mode menu if that is possible.

You can match the error code and/or error string with the codes and errors in the table below as a first step.

While some of the errors below are pretty self-explanatory (i.e. Download File-File too Large), a lot of the errors are not self-explanatory and will require some further investigation to be performed.

If the table below does not help you determine root cause of the issue, the next step is to obtain the log files from the device.

Skip to Acquiring and Diagnosing ADK TMS Errors from the Agent Log Files if the table below does not help identify the root cause of the issue.

If the information from the table below leads you to changing a configuration variable in the ADK TMS Agent configuration, a reboot of the terminal is required for the configuration change to take effect.


## ADK TMS Agent Error Codes

Items in bold italics in this section are ones observed to be most common.


### Table 5: ADK TMS Agent Error Codes


| Agent Error Code  | Agent Error String  | Error Description and Troubleshooting Steps   |
|  -------- | -------- | -------- |
| **Connectivity****Errors** | -  | **These errors occur when the agent can't connect with the server** |
| 1000  | `PostPayload` FAILURE  | The agent is unable to communicate with the server. Please verify network connectivity to the server from the terminal. The agent logs might contain more specific information about the failure.   |
| **Server****Errors** | -  | **These are server errors that the device reports** |
| 2000  | Server Message-XML Validation Failure  | The server sent a message to the terminal that is not in the expected format that the device expects. If possible, gather the logs and submit to the development team.   |
| 2001  | Server Message-NO Data  | The server sent an empty message to the terminal.   |
| 2002  | Server Message-XML Structure Failure  | The server sent a message to the terminal that was not in XML format.   |
| 2003  | Server Message-Operation Type Failure  | The server sent a message to the terminal other than a "ServerResponse" message or "ManagementPlan" message.   |
| 2004  | Server Message-Communication ID Mismatch  | The server sent a message to the terminal with an invalid communication ID. More data may be contained in the ADK TMS Logs. If the logs can be retrieved see the next section on diagnosing from the log files.   |
| 2005  | Server Message-Message ID Mismatch  | The server sent a message to the terminal with an invalid message ID. More data may be contained in the ADK TMS Logs. If the logs can be retrieved see the next section on diagnosing from the log files.   |
| 2006  | Server Message-General Failure  | A general error with a server message. This most likely means an invalid server message was sent to the terminal.   |
| 2007  | Server Response-Content Failure  | The content section of the "ServerResponse" message was invalid.   |
| 2008  | Server Response-Server Response is Failed  | The server responded to the agent with a failure. In most cases, a more specific error should be returned.   |
| 2009  | Server Response-Key Exchange Failure  | The server responded to a Key Exchange message with a failure. Please send logs to development team for further investigation.   |
| 2010  | Server Response-General Failure  | The "ServerResponse" message had a generic failure. Please send logs to development team for further investigation.   |
| 2011  | Server Response-Unknown Server Failure  | The "ServerResponse" message contains an Unknown failure. Please send logs to development team for further investigation.   |
| 2012  | Server Response-Device Not Found Failure  | The server could not find the device in its database. Please try setting KeysExchanged = FALSE on the terminal and send another heartbeat.   |
| 2013  | Server Response-Keys Already Exchanged Failure  | The device is sending keys but the server already has this terminal registered. This requires further investigation to determine why the agent is trying to re-exchange its keys and could be a possible attack/ tamper condition. This could be a warning for a possible attack so please try to find root cause (i.e. someone accidentally set `KeysExchange` = FALSE on the device) before deleting the device from the server and re-exchanging keys.   |
| 2014  | Server Response-Customer ID Not Found  | The agent is sending a message with a Customer ID that the server does not recognize. Please verify the `CustomerID` setting in the agent's configuration.   |
| 2015  | Server Response-Model Not Found  | The agent is sending a model ID that the server does not recognize. Please verify this terminal model is supported in ADK TMS.   |
| 2016  | Server Response-Device Cert Creation Failure  | The server is not able to create the device certificate in its database. Please send logs to development team for further investigation.   |
| 2017  | Server Response-Invalid Device Cert  | The agent sent an invalid certificate to the server. Please send logs to development team for further investigation.   |
| 2018  | Server Response-Key Exchange Decryption Failure  | The server was unable to decrypt the key exchange message. This normally means that the device is not using the correct certificates for the server it is talking to. Please double check the Root URL parameter in the agent's configuration and verify the correct certificate package for that server is loaded on the terminal.   |
| 2019  | Server Response-Agent Key Signature Failure  | The server was unable to verify the encrypted agent key signature.   |
| 2020  | Server Response-Agent Message Signature Failure  | The server was unable to verify the message signature of the message the agent sent to the server.   |
| 2021  | Server Response-Keys Not Found  | The server was unable to retrieve the MAC key of the device after keys have been exchanged.   |
| 2022  | Server Response-Invalid Message Format  | The agent sent a message with invalid format to the server. Please send logs to development team for further investigation.   |
| 2023  | Server Response-Invalid Message Signature  | The agent sent a message with an invalid message signature. Please send logs to development team for further investigation.   |
| 2024  | Server Response-Device Deactivated  | The device has been deactivated on the server. Please activate the device on the server and try again.   |
| 2025  | Server Response-Device Not Registered  | The device keys have not been exchanged with the server yet. Please set `KeysExchanged=False` and try again.   |
| 2026  | Server Response-Signature Key ID Mismatch  | The signature key ID in the device message does not match the keys stored in the server. Please send logs to development team for further investigation.   |
| 2027  | Server Response-License Not Available  | The agent sent a message to the server for a module that the customer does not have a license for (i.e. the device sent a diagnostic message but the customer is not licensed for Diagnostics).   |
| 2028  | Server Response-Invalid NONCE  | The device sent a message with an invalid NONCE. This normally means the device is sending an old message to the server and is a possible attack vector. Please obtain the logs and work with the development team to verify this is not an attack on the ADK TMS system.   |
| 2029  | Server Response-Unidentified Device  | The device is not pre-boarded. This error will be returned as the response to Key Exchange Message when automatic generation is disabled and the device is not pre-boarded.   |
| 2030  | Server Response-Device Deleted  | The device has been deleted from the server.   |
| 2031  | Server Response-Device Blacklisted  | The device has been blacklisted by the server and will not be allowed back into the estate.   |
| 2032  | Server Message-Invalid Nonce  | The server sent a message with an invalid NONCE to the device.   |
| 2033  | Server Response-Max Register Retry Error  | The agent sent a key exchange but the server's response never made it to the device too many times in a row.   |
| 2036  | Server Response-E Invalid DID Error  | The agent sent a message with a DID but the server's response to indicate it is an invalid DID associated with this device.   |
| **Signature Errors** | -  | **These are errors with the signature of the message received from the server** |
| 2100  | Server Message Signature-General Failure  | A general error occurred when checking the signature of the server message.   |
| 2101  | Server Message Signature-Type Failure  | The server returned a message with an invalid signature type.   |
| 2102  | Server Message Signature-Algorithm Failure  | The server returned a message with an invalid signature algorithm.   |
| 2103  | Server Message Signature-Key ID Failure  | The server returned a message with an invalid key ID for the signature.   |
| 2104  | Server Message Signature-Key ID Mismatch  | The server returned a message with a signature key ID different that the expected signature Key ID.   |
| 2105  | Server Message Signature-Length Failure  | The server returned a message with a signature of improper length.   |
| 2105  | Server Message Signature-Mismatch  | The signature calculated by the device does not match the signature sent by the server.   |
| 2107  | Server Message Signature-NULL Key ID  | The server returned a message with NULL as the signing key ID. Please obtain the logs for more information.   |
| **Management Plan Errors** | -  | **These are generic errors with the management plan sent from the server** |
| 2200  | Management Plan-Content Failure  | The server sent a Management Plan with invalid content.   |
| 2201  | Management Plan-Response Failure  | The agent was unable to create a valid response to the server's Management Plan   |
| 2202  | Management Plan-Operation Identifier Failure  | The server sent a Management Plan with an invalid Operation Identifier.   |
| 2203  | Management Plan-Operation ID Failure  | The server sent a Management Plan with an invalid Operation ID.   |
| 2204  | Management Plan-Operation Handler Failure  | The server sent a Management Plan with an invalid operation handler.   |
| 2205  | Management Plan-Operation On Error Failure  | The server sent a Management Plan with an invalid OnError type.   |
| 2206  | Management Plan-Operation Schedule Failure  | The agent was unable to schedule the operation in the Management Plan to run.   |
| 2207  | Management Plan-Operation General Failure  | A general error occurred when the agent tried to process a Management Plan operation.   |
| 2208  | Management Plan-General Failure  | A general failure occurred on the device when trying to process a Management Plan.   |
| **Download Lib CURL Errors** | -  | **These errors are errors in libCURL which is a component the agent uses to talk to the server** |
| 2300-2399  | libCURL error - <libCURL error code>  | This is an error returned to the agent from lib CURL. Please lookup the <libCURL error code> here: [http://curl.haxx.se/libcurl/c/libcurl-errors.html](http://curl.haxx.se/libcurl/c/libcurl-errors.html) |
| **Download File Errors** | -  | **These are errors that can happen when downloading files** |
| 2400  | Download File-General Error  | A general error occurred when the agent was trying to download a file.   |
| 2401  | Download Started  | This is not really an error and this error should never be reported on the agent GUI. It is contained in a message to notify the server that the download was started.   |
| 2402  | Download Completed  | This is not really an error and this error should never be reported on the agent GUI. It is contained in a message to notify the server that the download was completed.   |
| 2403  | Download File-File Signature Mismatch  | The agent calculated the signature of a downloaded file that did not match the signature sent by the server.   |
| 2404  | Download File-Processing Error  | The agent was unable to process the downloaded file.   |
| 2405  | Download File-TGZ Content Too Large  | The content of the TGZ file is too large to fit onto the terminal.   |
| 2406  | Download File-TGZ Expansion Error  | An error occurred when trying to expand the TGZ file. Please verify the TGZ file is valid.   |
| 2407  | Download File-OS Load Error  | The OS returned an error when trying to process the contents of the TGZ file.   |
| 2408  | Download Installed  | This is not really an error and this error should never be reported on the agent GUI. It is contained in a message to notify the server that the download was installed.   |
| 2409  | Download File-Too Many Scheduled File Downloads  | Download failed because there are already too many downloads scheduled to this terminal. In older versions of ADK TMS, only 5 downloads were allowed to be scheduled at a time.   |
| 2410  | Download File-File Too Large  | The file to be downloaded is too large to fit onto the terminal.   |
| 2411  | Download File-Content Type Error  | The server sent a message with an invalid Download Type specified.   |
| 2412  | Download File-No Content Consumer  | Content was downloaded to the terminal, but there was no application setup to receive the content. Be sure that the application installed on the terminal supports content management.   |
| 2413  | Download File-Content Filename Error  | The filename of the content download is invalid. This normally means the filename of the downloaded content is too long.   |
| 2414  | Download File-Content Consumer Timeout  | The application took too long to process a content update.   |
| 2415  | Download File-Content Consumer Error  | The application returned an error when it was processing the content update.   |
| 2416  | Download File-Memory Error  | Not enough memory was available to send content message to application.   |
| 2417  | Download File-User Error  | There is an error in the specified user for the content.   |
| 2418  | Content Replaced  | Expired content has been replaced with the original content.   |
| 2419  | Download File-Failure replacing expired content  | A failure occurred when replacing expired content with the original content.   |
| 2420  | Download Installed - Reboot Required  | This is not really an error and this error should never be reported on the agent GUI. It is contained in a message to notify the server that the download was installed but the automatic reboot was suppressed by the management plan. So a reboot is required for the download to take effect.   |
| 2421  | Download File-Parameter Receiver Error  | Parameter management error where the specified receiver of the parameter file is not valid.   |
| 2422  | Download File-Param File Name Error  | Parameter management error where the name of the downloaded parameter file is not valid.   |
| 2423  | Download File-Unsupported Type Error  | The download type specified by the server in not supported by the device the file is being downloaded to.   |
| 2424  | Download File-Maintenance DL Timing Error  | The download was sent to the device as a Maintenance window download, but the device was attempting to download the file outside of the maintenance window.   |
| 2425  | Install File-App Approval Error  | The agent was unable to get approval for the installation from all registered applications.   |
| **Get Data Errors** | -  | **These are errors that can happen when the agent is collecting data about the terminal** |
| 2500  | Get Data-General Error  | A general error occurred when the agent was trying to retrieve terminal data.   |
| 2501  | Get Data-Too Many Get Data Operations  | Too many Get Data operations were scheduled by the server. Older versions of ADK TMS only allow 5 Get Data operations to be scheduled on a terminal.   |
| 2502  | Get Data-Applications Error  | An error occurred when the agent was trying to collect data about applications installed on the terminal.   |
| 2503  | Get Data-Device Profile Error  | An error occurred when the agent was trying to collect data about the Device Profile of the terminal.   |
| 2504  | Get Data-File List Error  | An error occurred when the agent was collecting a file list from the terminal.   |
| 2505  | Get Data-Keys Not Supported  | Retrieving Key data is not supported by the terminal OS.   |
| 2506  | Get Data-Device is Tampered  | Key data could not be retrieved because the device has been tampered.   |
| 2507  | Get Data-Memory Error  | An error occurred when the agent was trying to collect memory information of the terminal.   |
| 2508  | Get Data-VSR Cert Tree Error  | An error occurred when the agent was trying to collect the VeriShield Retain certificates installed on the terminal.   |
| **Set Data Errors** | -  | **These are errors that can happen when the agent is trying to set configuration parameters** |
| 2600  | Set Data-General Error  | A general error occurred when trying to set a configuration parameter on the terminal.   |
| 2601  | Set Data-Too Many Set Data Operations  | Too many Set Data operations have been scheduled on the terminal. Old versions of ADK TMS Agent only allowed 5 Set Data operations to be scheduled.   |
| 2602  | Set Data-Section Name Error  | The server sent a Set Data operation with an invalid section name for the configuration parameter.   |
| 2603  | Set Data-Value Error  | The server sent a Set Data operation with an invalid value for the intended configuration parameter.   |
| 2604  | Set Data-Error Setting Data  | The agent was unable to set the configuration parameter.   |
| **Set Server Cert Errors** | -  | **These are errors that can happen when the agent is replacing it's server certificates** |
| 2700  | Set Server Cert-General Error  | A general error occurred when the server was trying to send updated certificates to the agent.   |
| **Terminal Action Errors** | -  | **These are errors that can happen when the agent is performing actions on the terminal** |
| 2800  | Terminal Action-General Error  | A general error occurred when the agent was trying to perform an action on the terminal.   |
| 2801  | Terminal Action-Reboot Error  | The agent was unable to reboot the terminal.   |
| 2802  | Terminal Action-Reset POS Error  | The agent was unable to reset the POS device (this is currently not supported in ADK TMS but if it is attempted, you will get this error).   |
| 2803  | Terminal Action-Restart APP Error  | The agent was unable to restart the application.   |
| 2804  | Terminal Action-Restart APP no *GO variable Error  | The agent was unable to restart applications because the GO variable is not set on the device. This normally means that there is not application installed on the terminal.   |
| 2805  | Terminal Action-Set Clock Error  | The agent was unable to set the clock of the terminal.   |
| 2806  | Terminal Action-Touchscreen Recalibration Error  | An error occurred when the agent was trying to re-calibrate the touchscreen.   |
| 2807  | Terminal Action-Unknown Error  | The server sent an unknown action type to the terminal.   |
| **Upload File Errors** | -  | **These are errors that can happen when the agent is uploading files to the server** |
| 2900  | Upload File-General Error  | A general error occurred when uploading a file from the terminal.   |
| 2901  | Upload File-Directory Listing Error  | The agent was unable to retrieve and upload a directory listing.   |
| 2902  | Upload File-Screen Capture Error  | The agent was unable to capture and upload a screen shot.   |
| 2903  | Upload File-Log File List Error  | The agent was unable to upload the list of log files to the server.   |
| 2904  | Upload File-OS [Config](class_config.md) Files Error  | The agent was unable to upload the OS configuration files to the server.   |
| 2905  | Upload File-OS Log Files Error  | The agent was unable to upload the OS log files tothe server.   |
| 2906  | Upload File-User Log Files Error  | The agent was unable to upload the user log files to the server.   |
| 2907  | Upload File-Upload Error  | An error occurred when the agent attempted to upload a file to the server.   |
| 2908  | Upload File-Web Method Upload Error  | An error occurred when the agent attempted to upload a file to the server via a Web Method.   |
| 2909  | Upload File-File Does Not Exist  | The file requested to upload does not exist on the terminal.   |
| 2910  | Upload File-Permission Error  | The agent does not have proper permissions to upload the specified file.   |
| 2911  | Upload File-Too Many Upload File Operations  | Too many Upload File operations are scheduled for the device. In old versions of ADK TMS Agent, only 5 upload file operations were allowed to be scheduled at a time.   |
| 2912  | Upload File-Param File Error  | An error occurred trying to upload a parameter file (from ADK TMS or an application).   |
| 2913  | Upload File-Memory Error  | Not enough memory was available on the device to upload the requested file.   |
| 2914  | Upload File-Compression Error  | A compressed upload was specified by the server but the agent encountered an error when compressing the file before uploading.   |
| **Lib CURL Errors** | -  | **These are general errors with the libCURL component that the agent uses to communicate with the server** |
| 3100  | Get Diag Data-General Error  | A general error occurred when collecting diagnostic information about the terminal.   |
| 3101  | Get Diag Data-Too Many GetDiagData Operations  | Too many Get Diagnostic Data operations are scheduled for the device. In old versions of ADK TMS Agent, only 5 Get Diagnostic Data operations were allowed to be scheduled at a time.   |
| App Action Errors  | -  | These errors can happen when the server is requesting the application perform an action   |
| 3200  | App Action-General Error  | A general error occurred when performing an application action request.   |
| 3201  | App Action-NOT Supported  | App Actions are not supported by the device.   |
| 3202  | App Action-Too Many AppAction Operations  | Too many App Action operations are scheduled for the device. This error is obsolete and should never happen.   |
| **Delete File Errors** | -  | **These errors can happen when the server requests an application to delete a file.** |
| 3300  | Delete File-General Error  | A general error occurred when trying to delete a file.   |
| 3301  | Delete File-NOT Supported  | Deleting files is not supported by the device.   |
| 3302  | Delete File-Too Many AppAction Operations  | Too many Delete File operations are scheduled for the device. This error is obsolete and should never happen.   |
| **Cancel Errors** | -  | **These errors can happen when the server is trying to cancel a Job that has already been scheduled on the device** |
| 3400  | Cancel Op-General Error  | An error occurred when trying to cancel the job. Most likely causes of this are that the job could not be found, or the job has already started running on the device.   |
| 3401  | Cancel Op-Partial Cancel  | This means that a job was split into multiple jobs (like a download with install time in the future) and only some of the jobs were cancelled. Most of the time this means that a download was scheduled with an install time in the future. But the download had already started so only the installation was cancelled.   |
| 3402  | Cancel Op-Operation Set ID Not Found  | The cancellation failed because the specified Operation Set ID for the job to cancel was not found.   |
| **Unknown Errors** | -  | **These are unknown errors** |
| -  | Unhandled Error-<Error Code>  | The agent returned an unknown error code.   |



### Acquiring and Diagnosing ADK TMS Errors from the Agent Log Files

This section discusses the acquisition and diagnosis of ADK TMS errors.

This section assumes the device you are working with is not connecting to the ADK TMS server, but if the ADK TMS Agent in the device is connecting, you can get device logs remotely by viewing the device profile on the ADK TMS server GUI and getting the ADK TMS Agent logs as part of the diagnostic action "Get OS Logs".


The device should have ADK TMS Agent version 1.06.0007 or higher to perform any of the ADK TMS remote diagnostic actions and for the server to support that version.

Once the device profile is open, you can click on the Schedule Diagnostic Action button and select Get OS Logs from the dropdown.

The device logs will be placed at a link on the device's Diagnostic History tab.

_**Detailed instructions for reading log files:**_



* It is possible to view the most recent log messages directly from the device. Go to the VHQ Log tab (at _Home>Admin>Communications>VHQ>Status (Configure VHQ Management View VHQ Logs)_

checking for messages in all caps that appear in the table of messages below. Once you have located the appropriate message, you can use this information for debugging and/or reporting to Verifone Support. 
**Important:** The newest messages in the VHQ log tab are at the bottom so scroll down to the bottom of the log and begin scanning upward from the bottom for

messages like "E_DEVICE_NOT_FOUND" (i.e. messages in all caps separated by underscores).

_**Getting full device logs:**_

For this, you will need a Verifone device cable with a USB host connection that you can use to copy the logs to a USB data storage device (e.g. USB stick).

See [Verifone Cables That Can Be Used To Capture Device Log Files] for cable part numbers that support this.

Assuming you have a cable with a USB host connector you should be able to go to _Home>Admin>Comm>VHQ>Copy Logs_

(Configure, VHQ Estate Mgmt, Copy Logs to USB) With a USB stick inserted in the USB host connector, press the **Copy** button.

The device logs will be placed in a ``.tgz file on the USB stick that you can read and/or email to ADK TMS Support for further analysis.



* From the system mode screen, use the Copy Logs button to copy TMS log files to a USB drive.

After obtaining the log files from the device, you should look through the `vhqlog` files from the logs.

On Mx8 devices, the `vhqlog`, `vhqlog.1` and `vhqlog.2` files will be at the root level of the USB drive.

On MX9 terminals, the `vhqlog`, `vhqlog.1` and `vhqlog.2` files will be in the ZIP file created on the USB drive. The MX9 log files will be in the ZIP file under the

_mnt/flash/logs/share/_ directory. Each `vhqlog` file contains log messages with the older messages at the top of each log file and newer messages at the end of each log file.

The file `vhqlog` contains the most recent messages, `vhqlog.1` contains messages older than `vhqlog` and `vhqlog.2` contains the oldest messages.

The best approach is to start with the most recent messages at the end of `vhqlog` file and work your way back to find to find the first place where the agent or server sends an error message.

If the error has been happening for a while, you may not be able to find the first place the error happens because it may have been flushed from the logs.

If the original error has not been flushed from the logs, you should be able to find a sequence where the agent sends a message to server

(a Heartbeat, Maintenance Heartbeat, [Event](struct_event.md), etc.) where the sequence leads to an error message being sent by the agent or server.

If the server sends the first error message below, you should be able to find the error from the server message's `ErrorID` field in the table below:

_**Table 6: Troubleshooting ADK TMS Agent Error Codes**_


| ErrorID  | Description and Troubleshooting Steps  | Additional Information   |
|  -------- | -------- | -------- |
| `E_UNKNOWN` | Unknown server failure. Please send log information to the development team for further investigation.  | -   |
| `E_DEVICE_NOT_FOUND` | Device is not configured in ADK TMS. Please set `KeysExhcnaged=False` on the device and send another heartbeat.  | -   |
| `E_KEYS_ALREADY_EXCHANGED` | Keys already exchanged. This is a warning sign of a possible attack. Please verify why the agent is re-sending the `KeyExchange` message before deleting the device from the server.  | -   |
| `E_CUSTOMER_ID_NOT_FOUND` | Invalid Customer id. Please verify the Customer ID in the agent configuration is correct.  | -   |
| `E_MODEL_NOT_FOUND` | Device model is not configured in ADK TMS. Be sure the model of the terminal is supported by ADK TMS.  | -   |
| `E_DEVICE_CERTIFICATE_CREATION_FAILED` | Not able to create device certificate. Please send the logs to the development team for further investigation.  | -   |
| `E_INVALID_DEVICE_CERTIFICATE` | Device certificate validation failed.  | Device Certificate Subject does not match with Issuer


 Device Certificate date range is not correct for the current date/ time.


 Device Certificate CN does not match the Device Model and Serial Number.


 Device Certificate Signature Algorithm is invalid


 Invalid Device Certificate Key size.


 Invalid Device Certificate Key Usage   |
| `E_AGENT_KEY_MESSAGE_DECRYPTION_FAILED` | Decrypting Agent Key Message With Server Private Key failed  | -   |
| `E_ENCRYPTED_AGENT_KEY_SIGNATURE_VERIFICATION_FAILED` | Verifying the Encrypted Agent Key Signature Using Agent Certificate failed  | -   |
| `E_MESSAGE_SIGNATURE_VERIFICATION_FAILED` | Verifying the message signature using the decrypted Agent MAC key failed.  | -   |
| `E_KEYS_NOT_FOUND` | Keys got exchanged but MAC key is not available. Please let the development team know about this so cause of the issue can be determined.  | -   |
| `E_INVALID_MESSAGE_FORMAT` | Invalid device message format. Be sure the terminal has a released version of the agent installed.  | XSD Validation Error   |
| `E_INVALID_MESSAGE_SIGNATURE` | Invalid device message signature. Keys are out of synch. Further investigation required to determine how the keys got out of synch.  | -   |
| `E_DEVICE_DEACTIVATED` | Device is deactivated in ADK TMS. Activate the device on the server.  | -   |
| `E_DEVICE_NOT_REGISTERED` | Device keys are not yet exchanged from device. Please set `KeysExchanged=False` on the terminal and send another heartbeat.  | -   |
| `E_SIGNATURE_KEY_ID_MISMATCH` | Signature key id in device message does not match with the available key id in server for the device.  | -   |
| `E_LICENSE_NOT_AVAILABLE` | License not available for the device message type.  | -   |
| `E_INVALID_NONCE` | Nonce received from the device is lesser than that of already received. This is a warning sign of a possible attack. Please send log information to the development team.  | -   |
| `E_UNIDENTIFIED_DEVICE` | Device is not pre-boarded. This error will be returned as the response to Key Exchange Message when automatic generation is disabled and the device is not pre-boarded.  | -   |
| `E_DEVICE_DELETED` | Server will return this error on any message (not only for AHB/MHB) received from device- if device is deleted.  | -   |
| `E_DEVICE_STATUS1` | Server will return this error on any message (not only for AHB/MHB) received from device - if device is blacklisted. Exact error is not revealed to the device for security reasons.  | -   |
| `E_DEVICE_MAX_REGISTRATION_RETRY_LIMIT_EXCEEDED` | The agent sent a key exchange but the server's response never made it to the device too many times in a row.  | -   |
| `E_INVALID_DID` | The agent sent a message with DID but the server's response to indicate it is an invalid DID associated with this device.  | -   |



## Verifone Cables That Can Be Used To Capture Device Log Files

Use the following cables to download log files from Verifone terminals.


| Part No.  | Description   |
|  -------- | -------- |
| CBL132-003-01-A  | RJ45 to Host USB, 1M (Designed for loading terminal via thumb drive)   |
| CBL132-003-03-A  | RJ45 to Host USB, 3M (Designed for loading terminal via thumb drive)   |
| CBL132-003-05-A  | RJ45 to Host USB, 5M (Designed for loading terminal via thumb drive)   |
| CBL132-004-01-A  | RJ45 to powered USB connector, no external power supply required, 1M   |
| CBL132-004-03-A  | RJ45 to powered USB connector, no external power supply required, 3M   |
| CBL132-004-05-A  | RJ45 to powered USB connector, no external power supply required, 5M   |



## Testing Connectivity Over Port 443

After doing the terminal ping test, if you still have problems with device connectivity to the ADK TMS server,

you will need to confirm that a network SSL connection from the subnet can be made through your firewall over port 443 to the ADK TMS server.

You will need to perform a command like `telnet``vhq.verifone.com``443` or use a browser to attempt connecting to

[https://vhq.verifone.com](https://vhq.verifone.com) using an ADK TMS computer or POS running computer software.

If this command gets an error, firewall(s) may be blocking the connection, and your IT or networking staff may need to make changes to allow the connection.


# Appendixes


## Appendix A - Acronym Definitions

**Table 7 Acronym Definitions**


| Acronym  | Definitions   |
|  -------- | -------- |
| 3DES  | Triple DES encryption   |
| ADK  | Application Development Kit   |
| AES  | Advanced Encryption Standard   |
| API  | Application Programming Interface   |
| CRC  | Cyclical Redundancy Checking   |
| DES  | Data Encryption Standard   |
| DUKPT  | Derived Unique Key Per Transaction Method   |
| EMV  | Europay, Mastercard and Visa   |
| GISKE  | Global Interoperable Secure Key Exchange   |
| GUI  | Graphical User Interface   |
| HSM  | Hardware Security Module   |
| IPC  | Inter Process Communication   |
| KLK  | Key Loading Key   |
| KSN  | Key Serial Number   |
| MAC  | Message Authentication Code   |
| OS  | Operating System   |
| PED  | PIN Entry Device   |
| PIN  | Personal Identification Number   |
| POS  | Point-of-Sale   |
| RSA  | Rivest-Shamir-Adleman   |
| TAK  | Terminal Authentication Key   |
| TMK  | Terminal Master Key   |
| TPK  | Terminal PIN Key   |
| UI  | User Interface   |
| UID  | Unique Identifier   |
| V/OS  | Verifone Operating System   |
| VPN  | Verifone Part Number   |
| VSS  | VeriShield Security Scripts   |



## Appendix B - ADK TMS Agent Configuration Parameters

This section presents the configuration parameters for ADK TMS Agent


| Section  | Name  | Default  | Type  | Description  | Range   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| Version  | Version  | 4  | Integer  | Version number of Default VHQ [Config](class_config.md). This value shouldn't be modified by users  | N/A   |
| Server  | URL Root  | [https://vhqhome.verifonehq.net/MessagingServer/MessageHandler.asmx](https://vhqhome.verifonehq.net/MessagingServer/MessageHandler.asmx) | String  | URL or IP address of the VHQ server's webservice the agent will send its messages to  | N/A   |
| Server  | SSL Validate Hostname  | true  | Boolean  | When this is TRUE, the agent will validate the hostname in the SSL certificate received from the server matches the hostname that it is actually talking to. NOTE: Set to FALSE if using a host IP address rather than a URL.  | TRUE/FALSE   |
| Server  | Validate Protocol Hostname  | true  | Boolean  | If this is TRUE, then the device will verify that the common name (or Subject Alternative Name) contained in VHQSrvPubKey.crt matches the server name specified in URL Root parameter when exchanging keys. The device will not exchange keys if this is set and the common name (or SAN) in VHQSrvPubKey.crt does not match the server name in URL Root parameter.  | TRUE/FALSE   |
| Server  | Validate Peer Certificate  | true  | Boolean  | When this is TRUE, the agent will validate the SSL certificate received from the server against the CA certificates stored with the agent.  | TRUE/FALSE   |
| Server  | Contact server via proxy  | false  | Boolean  | Use proxy server for communicating to webservice  | TRUE/FALSE   |
| Server  | WebProxyURL  |  | String  | URL or IP address for web proxy  | N/A   |
| Server  | WebProxyTunnelEnable  | false  | Boolean  | Setting this to FALSE allows for alternate SSL certificate for communication with proxy. Setting this to TRUE will allow communication to the proxy in the clear until after the HTTP connect and it switches to HTTPS.  | TRUE/FALSE   |
| Server  | FTPProxyURL  |  | String  | Proxy server address for file transfers. Used for all file transfers, not just via FTP protocol (this is what's used for https download, for example).  | N/A   |
| Server  | FtpForcePASV  | true  | Boolean  | Only applicable for FTP downloads (currently not supported).  | TRUE/FALSE   |
| VHQ  | Operating Mode  | Direct  | String  | 'Direct' for terminal Ethernet; 'ADK' for communications via ADK comm component: requires additional config files. This value is not recommended for V/OS devices; 'Dialup' for modem communications, other parameters are required. This value only applies to VX devices  | 'Direct'; 'UseProxy'; 'UseCradle'; 'ADK'; 'Dialup'   |
| VHQ  | ConnectWhileDockedOnly  | 0  | Integer  | '0' to allow communications anytime required; '1' to allow communications only when device is in docking charger station. This value only applies to mobile devices.  | 0-1   |
| VHQ  | Alert Mask  | 0x8  | Integer  | Bit Fields to Enable Different Device Alerts/Events: 0x2 - RAM Low [Event](struct_event.md) Enable; 0x4 - Flash Low [Event](struct_event.md) Enable; 0x8 - Reboot [Event](struct_event.md) Enable; 0x10 - Low Battery [Event](struct_event.md) Enable; 0x20 - Dock In [Event](struct_event.md) Enable; 0x80 - VSP Encryption Status Change [Event](struct_event.md) Enable; 0x100 - Dock Out [Event](struct_event.md) Enable; 0x200 - Parameter Update [Event](struct_event.md) Enable; Note: 0x1 bit used to control the tamper event.In release 1.3.20 and later tamper events will ALWAYS be reported because they require a new key exchange with the server.So the 0x1 bit is unused in the Alert Mask for release 1.3.20 and later.  | 0x0 - 0x3ff   |
| VHQ  | Free Ram Alert Threshold  | 15  | Integer  | Percent of free RAM for when to send RAM Low [Event](struct_event.md) | 0 - 99   |
| VHQ  | Free Flash Alert Threshold  | 15  | Integer  | Percent of free FLASH for when to send FLASH Low [Event](struct_event.md) | 0 - 99   |
| VHQ  | Low Battery Threshold  | 27  | Integer  | This is coincell battery voltage level (multiplied by 10) to send the low battery event. If the voltage level drops to this level or below, the low battery event will be sent.  | 0 - 40   |
| VHQ  | Safemode  | 0  | Integer  | Can be used to disable certain ADK VHQ features. This should only be changed in rare instances. Please contact ADK VHQ development team for more info.  | N/A   |
| VHQ  | MaintenanceStart  | 2200  | Integer  | Maintenance window start time in the following format: HHMM; Where HH = 00 - 23; MM = 00 - 59. Note that if MaintenanceStart equals MaintenanceEnd, that indicates a 24 hour Maintenance Window.  | 0000 - 2359   |
| VHQ  | MaintenanceEnd  | 0600  | Integer  | Maintenance window end time in the following format: HHMM; Where HH = 00 - 23; MM = 00 - 59. Note that if MaintenanceStart equals MaintenanceEnd, that indicates a 24 hour Maintenance Window.  | 0000 - 2359   |
| VHQ  | MaintenanceDays  | *  | String  | Maintenance Days for the device. Concatenate the following strings together or use * for all days: Su = Sunday; M = Monday; Tu = Tuesday; W = Wednesday; Th = Thursday; F = Friday; Sa = Saturday; So for example, Maintenance days on Monday, Tuesday, Thursday and Friday would set this value to 'MTuThF'; For a monthly maintenance window, you would use 'm' + the day of the month followed by 'm' again.For instance, 'm1m' in this field would indicate the first of each month. Month days can be concatenated together with spaces in between so 'm1m m15m' would mean the 1st and 15th of each month are maintenance days. NOTE: this value is case sensitive so 'M' should be used for Monday, while 'm' should be used for month days. Note that by leaving this field blank, you can disable the Maintenance Window  | See description   |
| VHQ  | CustomerId  | Verifone-home  | String  | The Customer ID assigned to the customer  | N/A   |
| VHQ  | UniqueDeviceId  | 0  | Integer  | A Unique device ID assigned to each device by the server. NOTE: This value should not be modified by users.  | N/A   |
| VHQ  | KeysExchanged  | false  | Boolean  | Flag to tell whether this device has exchanged keys or not. NOTE: This value should not be modified by users.  | N/A   |
| VHQ  | HeartbeatsEnabled  | true  | Boolean  | Flag to tell whether heartbeats have been enabled on a device or not. NOTE: This value should not be modified by users.  | N/A   |
| VHQ  | HeartbeatFreq  | 300  | Integer  | This specifies the heartbeat frequency in seconds to be used for all communication interfaces except for Dial-Up and GPRS/3G.  | 0 or 300 - 86400; minimum = 300 (5 minutes); NOTE: A value of 0 in this field means the ADK VHQ agent will not schedule a recurring HB at startup. All HB's will be initiated by the application(or system mode) in this scenario; NOTE2: Although we recommend a HB Frequency of at least once per day, for certain cases like dial-up, a HB frequency of once per week, month, or even once per year is possbile since the agent DOES NOT check against an upper limit of this value. This parameter ALWAYS controls when the very first initial heartbeat is sent.   |
| VHQ  | Dial HeartbeatFreq  | 86400  | Integer  | When Dial-Up communication interface is used, then this indicates the frequency in seconds to be used.  | 0 or 300 - 86400; minimum = 300 (5 minutes); After the first successful communication to the server this parameter value will control all subsequent heartbeats sent when a dial-up communication interface is used.   |
| VHQ  | GPRS3G HeartbeatFreq  | 86400  | Integer  | When GPRS/3G communication interface is used, then this indicates the frequency in seconds to be used.  | 0 or 300 - 86400; minimum = 300 (5 minutes); After the first successful communication to the server this parameter value will control all subsequent heartbeats sent when GPRS communication interface is used.   |
| VHQ  | HBFailureRetryThreshold  | 7200  | Integer  | The HB frequency threshold in seconds, at which the agent will retry a HB failure instead of skipping it and waiting for the next HB.  | >= 300   |
| VHQ  | HBFailureRetryFreq  | 900  | Integer  | The rate (in seconds) at which a failed HB will be retried. This is also the rate at which a failed event due to network connection failure will be retried. This does not apply if a HB or an event is successful, and does not apply for heartbeat retries if HeartbeatFreq is less than HBFailureRetryThreshold  | Recommended range is 60 - 3600   |
| VHQ  | TerminalID  |  | String  | Can be used in conjunction with DeviceIDBackupSource to define the DeviceId that will get sent to the server. If DeviceIDBackupSource is set to 'VHQConfig', then this parameter will be sent as the DeviceId; Note: for backward compatibility, this is TerminalID and not DeviceID.  | Any string less than 64 bytes long   |
| VHQ  | DeviceIDBackupSource  | Disabled  | String  | Where to get the DeviceId parameter from if it is not provided by an application. If an application provides the DeviceId, then this parameter is ignored; 'Disabled' - Do not send DeviceId unless provided by the application; 'IPAddress' - Send the IP Address of the device as the DeviceId; 'ZT' - Send the *ZT configuration parameter as the DeviceId; 'VHQConfig' - The TerminalId parameter described above will be sent as the DeviceId; Note: 'ZT' only applies to VX devices and will be ignored on other platforms.  | 'Disabled' 'IPAddress' 'ZT' 'VHQConfig'   |
| VHQ  | DeviceIDRequiredToRegister  | false  | Boolean  | Flag to notify agent to wait for application to provide Device ID during key exchange.If DID not recieved from app, agent sends TerminalID from VHQ.ini considering VHQConfig.ini as DeviceIDBackupSource. If Terminal ID is blank, KEM will be done without DID.  | TRUE/FALSE   |
| VHQ  | SCN  |  | String  | Software Collection Number installed on device (only applies to UX300); NOTE: This value should not be modified by users.  | N/A   |
| VHQ  | AppRegWaitTime  | 0  | Integer  | The amount of time (in seconds) for ADK VHQ agent to wait for applications to register with it before sending its first heartbeat. When applications are registered, they can provide application specific data to the agent that can be sent to the server in the agent's messages. Examples of this would be the terminal ID or the lane/store information which are controlled by the applications.  | 0 - 300   |
| VHQ  | MaintenanceDownloadStaggering  | true  | Boolean  | Controls whether maintenance download staggering is enabled on the agent or not. When enabled, maintenance downloads will be scheduled to randomly start sometime before the end of the maintenance window. When disabled, the maintenance download will start as specified by the server.  | TRUE/FALSE   |
| VHQ  | Download Maximum Attempts  | 5  | Integer  | How many times to attempt a file download to the device, including the first initial download attempt.  | 1-9999; This should be set so the(Download Maximum Attempts *(Download Network Timeout + Download Retry Timeout)) = number of seconds to try and recover from network outage / congestion; Example: 5 * (60 + 30) = 7.5 mins. Total time period to try and recover a download should not exceed 20 hours from the time they were initially scheduled.   |
| VHQ  | Download Network Timeout  | 60  | Integer  | How long in seconds to wait for no packets to be sent or received over the network before trying to recover and retrying the download.  | 1-90 seconds can be set before timeout occurs. The default is 60 seconds as a value of 60 seconds or greater is needed for DIAL communication interface.   |
| VHQ  | Download Retry Timeout  | 30  | Integer  | Time in seconds between the Network Timeout and when to try and recover communication to continue with the download  | 1-72000; It is recommended to wait at least 1 second between retries and maximum value is to wait 20 hours before retrying; however, total time to try and recover a download should not exceed 20 hours since the download was scheduled.Typical value is 5 - 120.   |
| VHQ  | Download Receive Buffer Size  | 0  | Integer  | Indicates the Receive Buffer Size to be used when receiving data during downloads. If the value is 0 then the default Receive Buffer Size will not be changed from the default in libCURL which is 16384 bytes (16K). If the value is non-zero and in the valid range, the Receive Buffer Size will be changed to the new value. Since the default size is the maximum value of 16K, then it only makes sense to change this value if you want the Receive Buffer Size to be smaller than 16K. This is necessary sometimes when the communication interface is USB or Serial through the IP over USB bridge. Reducing the size of the Receive Buffer Size effectively reduces the TCP Window size during downloads so timeouts don't occur from the server side.  | 512 - 16384   |
| VHQ  | AppIfc [Event](struct_event.md) Response Timeout  | 30  | Integer  | The timeout in seconds, for the agent when waiting for a response to an event sent to an application via the App Interface. This timeout applies to these events which the agent waits for a response for: TMS_EVT_SET_PARM_LIST, TMS_EVT_SET_APP_INFO, TMS_EVT_GET_FILE, TMS_EVT_PUT_FILE, TMS_EVT_DO_TRANSACTION, TMS_EVT_DEL_FILE.  | 5 - 600   |
| VHQ  | AppIfc SetAppState Timeout  | 300  | Integer  | The timeout in seconds, for the agent when waiting for a response to the TMS_EVT_SET_APP_STATE event sent to an application via the App Interface.  | 5 - 3600   |
| VHQ  | AppIfc Busy Response Timeout  | 300  | Integer  | The timeout in seconds, for the agent when it is waiting for the application to set its state to free, after the application sets it state to busy. Note: This time should always be set less than EventWatchdogTime or task being processed risks being killed.  | 5 - 50000   |
| VHQ  | AppIfc Proceed On Failure  | true  | Boolean  | If the agent is unable to get approval for an event from an application due to the application timing out or some other error, should the agent continue with the event or fail the event.  | TRUE/FALSE   |
| VHQ  | EventPostponedRetryDelay  | 1800  | Integer  | If an Operation gets 'POSTPONED' (most likely by an application), this is the amount of time the agent will wait before retrying the Operation  | 300 - 3600 (recommended)   |
| VHQ  | EventPostponedRetryTimeout  | 43200  | Integer  | If an Operation gets 'POSTPONED' (most likely by an application), this is the MAXIMUM amount of time the agent will continue to retry the operation before sending a FAILURE response  | 3600 - 86400 (recommended)   |
| VHQ  | ModelNum  |  | String  | For testing purposes only. Forces model number to specified value  | N/A   |
| VHQ  | NoIPAddrOK  | 0  | Integer  | If set to 1, it will allow the Key Exchange Message (KEM) to be sent even if no ip address has been retrieved. It is set to 0 by default and requires an ip address for the KEM to be sent. This is normally used for testing purposes  | 0 or 1   |
| VHQ  | AgentLoggingLevel  | Standard  | String  | Used to adjust what messages get logged to the ADK VHQ logs. By default, only some messages will get logged to the ADK VHQ logs. If users are running into issues, they can change this level to try and help debug what is happening.  | Standard; Alert; Critical; Error; Warning; Notice; Info; Debug; Note that these are in order from lowest logging level to highest.So while Standard directs the least amount of information to the logs, Debug will direct the most information to the logs.   |
| VHQ  | AgentMaxLogSize  | 30  | Integer  | The maximum size in KB that the ADK VHQ logs grow to before being rotated out. Keep in mind that the agent rotates its log files from vhqlog to vhqlog.1 to vhqlog.2 in addition to keeping 2 error logs (vhqlog.error and vhqlog.error.1) of this size so the total log size of ADK VHQ logs can be 5 times this value.; NOTE: This parameter does not apply to VX devices.The log size is configured in syslog.conf for VX devices.  | 30 - 500; This is the recommended size. Users can go outside of this range but may run out of flash space if doing so.   |
| VHQ  | ResendInvalidNonceMessages  | true  | Boolean  | If true the agent will update the NONCE in a message and resend it if the server responds with E_INVALID_NONCE  | TRUE/FALSE   |
| VHQ  | DisconnectOverrideWaitSeconds  | 30  | Integer  | Maximum time the agent will allow to override the disconnect of the agent. If the next agent event is scheduled to run within this timeframe, the agent will not disconnect its connection upon completion of the current event  | 0-3600   |
| VHQ  | ConnectRetries  | 3  | Integer  | How many times to retry during connection establishment. Retry is per connection type. If multiple connection types are in the network profile, etc type is retried this number of times, before the next connection type is tried.  | 0 - 10   |
| VHQ  | VHQParamFileReporting  | Current  | String  | This setting determines how the agent will report its parameter files, especially when using multiple server instances.  | Current = Report current server instance parameter files only (the files will be reported with their actual name - i.e. VHQ_backup.ini for 'backup' instance); Current+ = Report both the current server instance's parameter files in addition to primary server instance parameter files (all files will be reported by actual name on the device); Primary = Only report the primary server instance's parameter file (i.e. VHQ.ini); PrimaryOverride = Report the current server instance's parameter files, but override their names with primary server instance names (i.e. 'backup' instance will be reported as VHQ.ini instead of VHQ_backup.ini); All = Report all instances parameter files; None = Do not report any agent parameter files; CurrentContainers = Report container level information of current instance only;   |
| VHQ  | NoDataTransmit  | 120  | Integer  | This setting determines libCURL connection timeout. Slow connections may require large value. DO NOT CHANGE THIS VALUE FROM DEFAULT VALE UNLESS INSTRUCTED TO DO SO BY VERIONE.  | 30 - 300   |
| VHQ  | PinpadComport  | usb  | String  | Type of communication port to which Pinpad is connected. Settings: usb, serial  | N/A   |
| VHQ  | PassthroughEnabled  | false  | Boolean  | Flag to tell whether the test is enabled to do passthrough downloading or not. NOTE: This value should not be modified by users.  | N/A   |
| VHQ  | CURLErrorRetries  | 2  | Integer  | If a libCURL error occurs when contacting the server, this is the number of times the message will be retried  | 0-50   |
| VHQ  | CURLRetryDelay  | 10  | Integer  | If a libCURL error occurs when contacting the server, and CURLErrorRetries is not 0, this is the number of seconds to delay before retrying the message. Configured value can be reduced by up to 20% randomly on each retry attempt  | 0-300   |
| VHQ  | EventWatchdogTime  | 1500  | Integer  | The amount of time (in seconds) before an unresponsive operation will be cancelled. Note that as long as the operation is responsive, this timer will get periodically reset. If an operation becomes unresponsive, this is how long before event scheduler's failsafe mechanisms kick in. NOTE: This value MUST be greater than all 3 AppIfc timeout values or the watchdog may kill processes that are still in a known good state  | 600 - 3600 (recommended)   |
| VHQ  | MaxDLFlashUtilization  | 90  | Integer  | The maximum percentage of available flash that the agent should use for download storage  | 1 - 100   |
| VHQ  | TSCalLoggingEnabled  | false  | Boolean  | Flag to tell whether to log touchscreen calibration values during the maintenance window, Note that this applies to V/OS and V/OS2 devices only, and more specifcally should only be enabled on Carbon devices when directed by Verifone  | TRUE/FALSE   |
| VHQ  | UseTimeZoneFromServer  | true  | Boolean  | Allows to apply timezone information sent by server  | TRUE/FALSE   |
| VHQ  | AppApprovalPerOpSet  | true  | Boolean  | Flag to tell whether application approval applies to an entire Download Operation Set. Force Install Option on Server overrides this flag to TRUE  | TRUE/FALSE   |
| VHQ  | SetAppInfoReqPeriod  | 86400  | Integer  | The amount of time (in seconds) between TMS_EVT_SET_APP_INFO agent requests to application. Whatever parameters the app supplies to the agent will be cached in between the requests  | 0 - 86400 (recommended)   |
| VHQ  | Skip connect for ADK  | true  | Boolean  | If true the agent will not attach to the networks when in operating mode=ADK  | TRUE/FALSE   |
| VHQ  | NetworkConfigWaitTime  | 30  | Integer  | Wait time (in seconds) to allow communication interface obtain network information. WiFi network may require big value  | 0 - 300   |
| VHQ  | TestMode  | 0  | Integer  | Bitfield defining various test modes... for developement and SQA use only  | Bitfield: consult source code for meaning of individual bits.   |
| VHQ  | ConnectionPath  |  | String  | Used to specify a path for the connection file for ADK modes. Must make certain the location is readable by the TMS Agent. If the path is prefixed by "infosvc@" it is a path to an infosvc database. Consult the ADK COM guide for details of that structure. If not specified, Agent will use built in logic.  | Optional Path   |
| VHQ  | CarbonIPCDelayBetweenRetries  | 2  | Integer  | Wait time (in seconds) between retries during Carbon IPC initialization. Up to 5 retries will be performed  | 2 - 60   |
| VHQ  | MPAck  | true  | Boolean  | Flag to tell whether the Management Plan Acknowledgement should be sent. Default is TRUE and should only be set to FALSE for Estate Management Servers that do not support the Management Plan Acknowledgement.  | TRUE/FALSE   |
| VHQ  | KillApps  | true  | Boolean  | Flag to tell whether applications should be killed by the Operating System prior to a downloaded file being installed to insure there is enough memory available for the installation to be successful. Currently this only applies to VOS2 based devices such as Engage and Carbon platforms. Supported from ADK 4.6.8 & ADK 4.7.3  | TRUE/FALSE   |
| VHQ  | Deployment Mode  | false  | Boolean  | If set to TRUE Agent will start IDS Application upon reboot for Deployment purpose.  | TRUE/FALSE   |
| VHQ  | DownloadOnlyOnCharging  | false  | Boolean  | If set to TRUE VHQ Agent will download only when device is charging  | TRUE/FALSE   |



## Appendix C - ADK TMS Agent Diagnostic Counters

This section presents the Diagnostic Counters for ADK TMS Agent.

The VHQ Agent will send Diagnostic Counters to the VHQ Server when the VHQ Server requests for Diagnostic Profile. Diagnostic profile will consist of Open and Maximum file handle count, Current Process List with memory and CPU usage and diagnostic counter data. Currently there are 3 cases where the Diagnostic and Device Profiles are sent automatically as requested by the VHQ Server:

Key Exchange - when Agent first exchanges keys with the server, both profiles are sent. 

First Maintenance Heartbeat - during the 1st MHB of the maintenance window as defined in the VHQ Agent configuration file, both profiles are sent. 

After a reboot, if the Reboot [Event](struct_event.md) Notification is set in the VHQ Agent Alert Mask configuration file (VHQconfig.ini downloaded to device). 


 In addition to the 3 above, automatic sending of the profiles, Device and Diagnostic Profile data can also be scheduled manually on the server by setting up a job for devices to send the Device and Diagnostic profile data at a specific time.


| Name  | Description  | O/S   |
|  -------- | -------- | -------- |
| ID & Ver Maj,Min  | This is an ID that is internally used by the device OS. This information can be used by the Verifone support team when troubleshooting issues with devices.  | V/OS, V/OS2   |
| Key Press  | Number of key presses on hard keypad in non-secure mode.  | V/OS2   |
| PIN Entry Start  | Time (number of seconds since 1970/01/01 epoch) that last PIN entry was started.  | V/OS, V/OS2   |
| PIN Entry End  | Time (number of seconds since 1970/01/01 epoch) that last PIN entry was completed.  | V/OS, V/OS2   |
| PIN Entry Error  | Number of PIN entry errors.  | V/OS, V/OS2   |
| Pwr Cyc / Reboot  | Number of power cycles plus software-initiated reboots.  | V/OS, V/OS2   |
| Sys Mode Entry  | Number of times that system mode has been entered.  | V/OS, V/OS2   |
| Sys Mode Fail  | Number of failed attempts to enter system mode.  | V/OS, V/OS2   |
| Pwd Change Time  | Time (number of seconds since 1970/01/01 epoch) that any system mode password was last changed.  | V/OS, V/OS2   |
| Dnld Processed  | Number of downloaded files and packages processed.  | V/OS, V/OS2   |
| MSR Read Attempt  | Number of magnetic card reads attempted.  | V/OS, V/OS2   |
| MSR Error Trk 1  | Number of magnetic card read errors on track one.  | V/OS, V/OS2   |
| MSR Error Trk 2  | Number of magnetic card read errors on track two.  | V/OS, V/OS2   |
| MSR Error Trk 3  | PNumber of magnetic card read errors on track three.  | V/OS, V/OS2   |
| EMF Encountered  | Number of times electromagnetic intereference detected by magnetic card reader (hw+drivers don't support so actually counts aggregate track read counters instead).  | V/OS, V/OS2   |
| SCR Insertion  | Number of smart card insertions with no errors.  | V/OS, V/OS2   |
| SCR Error  | Number of smart card insertions with errors.  | V/OS, V/OS2   |
| Contactless Read  | Number of contactless card reads.  | V/OS, V/OS2   |
| Contactless Err  | Number of contactless card errors.  | V/OS, V/OS2   |
| Touch Cal  | Number of times capacitive touch panel has been calibrated.  | V/OS, V/OS2   |
| Touch Cal Time  | Time (number of seconds since 1970/01/01 epoch) that capacitive touch panel was last calibrate.  | V/OS, V/OS2   |
| Signature Cap  | Number of signature captures performed.  | V/OS, V/OS2   |
| USB Serial Disc  | Number of times a USB cable disconnection has been detected on USB gadget.  | V/OS, V/OS2   |
| ECR NAK Sent  | Number of NAKs sent by terminal during ECR tailgate protocol.  | V/OS, V/OS2   |
| ECR NAK Recv  | Number of NAKs received by terminal during ECR tailgate protocol.  | V/OS, V/OS2   |
| Touch Samples  | Number of individual capacitive or resistive touch panel data samples received.  | V/OS, V/OS2   |
| UBI Max Erase Cnt  | Number of times the flash memory has been completely erased (same as # that shows up near bottom of screen during reboots).  | V/OS, V/OS2   |
| Touch Scale Cnt  | Number of times touch panel scaling constants have been recalculated.  | V/OS, V/OS2   |
| Touch Scale Time  | Time (number of seconds since 1970/01/01 epoch) of last touch panel scaling constants recalculation.  | V/OS, V/OS2   |
| ECR Poll Addr  | Current poll address for ECR tailgate protocol.  | V/OS, V/OS2   |
| Cumulative Uptime  | Cumulative uptime of the unit - 30second granuality.  | V/OS, V/OS2   |
| HiTemp Normal  | Number of times temperature returns to normal.  | V/OS, V/OS2   |
| HiTemp Warning  | Number of times temperature is high.  | V/OS, V/OS2   |
| HiTemp Danger  | Number of times temperature reaches critical level.  | V/OS, V/OS2   |
| Motor Run Time  | Total motor run time.  | V/OS, V/OS2   |
| Motor Error  | Number of error for motor.  | V/OS, V/OS2   |
| Shutter Error  | Number of error for shutter solenoid.  | V/OS, V/OS2   |
| Sensors Error  | Number of sensors error.  | V/OS, V/OS2   |
| Eject Cnt  | Number of eject due to error.  | V/OS, V/OS2   |
| Max. Current(mA)  | maximum current in mA.  | V/OS2   |
| Vp init error  | Printer Vp Initilization error.  | V/OS2   |
| Cutter error 1  | Printer cutter cannot exit in specified steps, but blade moves to home position after retry.  | V/OS2   |
| Cutter error 2  | Printer cutter cannot exit in specified steps, and blade does not return to home position after retry.  | V/OS2   |
| Cutter error 3  | Printer cutter initialization error.  | V/OS2   |
| System Flags  | Opsys use only: Bit flags used to control various debugging features such as console during boot-up.  | V/OS, V/OS2   |


Example of Diagnostic Counters being sent to the VHQ Server:

<DataSet Identifier="DiagCounters" Version="02.11.0010">

 <DataSetContent>

 <DiagnosticCounters>

 <Counter Name="ID & Ver Maj,Min" Value="42540416" Type="HEX" >

 <Counter Name="Key Press" Value="550510686" Type="Decimal" >

 <Counter Name="PIN Entry Start" Value="29" Type="Time" >

 <Counter Name="PIN Entry End" Value="29" Type="Time" >

 <Counter Name="PIN Entry Error" Value="42440821" Type="Decimal" >

 <Counter Name="Pwr Cyc / Reboot" Value="-929036298" Type="Decimal" >

 <Counter Name="Sys Mode Entry" Value="1153451381" Type="Decimal" >

 <Counter Name="Sys Mode Fail" Value="713217137" Type="Decimal" >

 <Counter Name="Pwd Change Time" Value="34047537" Type="Time" >

 <Counter Name="Dnld Processed" Value="33563969" Type="Decimal" >

 <Counter Name="MSR Read Attempt" Value="-56811487" Type="Decimal" >

 <Counter Name="MSR Error Trk 1" Value="130798120" Type="Decimal" >

 <Counter Name="MSR Error Trk 2" Value="1119899786" Type="Decimal" >

 <Counter Name="MSR Error Trk 3" Value="234881810" Type="Decimal" >

 <Counter Name="EMF Encountered" Value="19437069" Type="Decimal" >

 <Counter Name="SCR Insertion" Value="1096878104" Type="Decimal" >

 <Counter Name="SCR Error" Value="808509445" Type="Decimal" >

 <Counter Name="Contactless Read" Value="-464629759" Type="Decimal" >

 <Counter Name="Contactless Err" Value="274868624" Type="Decimal" >

 <Counter Name="Touch Cal" Value="593494135" Type="Decimal" >

 <Counter Name="Touch Cal Time" Value="1619304513" Type="Time" >

 <Counter Name="Signature Cap" Value="1423978500" Type="Decimal" >

 <Counter Name="USB Serial Disc" Value="-1400233620" Type="Decimal" >

 <Counter Name="ECR NAK Sent" Value="-1591733690" Type="Decimal" >

 <Counter Name="ECR NAK Recv" Value="-1006492139" Type="Decimal" >

 <Counter Name="Touch Samples" Value="252016094" Type="Decimal" >

 <Counter Name="UBI Max Erase Cnt" Value="47" Type="Decimal" >

 <Counter Name="Touch Scale Cnt" Value="-217316720" Type="Decimal" >

 <Counter Name="Touch Scale Time" Value="-1071441118" Type="Time" >

 <Counter Name="ECR Poll Addr" Value="2663624" Type="HEX" >

 <Counter Name="Cumulative Uptime" Value="269631397" Type="HEX" >

 <Counter Name="HiTempState Norma" Value="1116475018" Type="Decimal" >

 <Counter Name="HiTempState Warni" Value="646218035" Type="Decimal" >

 <Counter Name="HiTempState Dange" Value="4753688" Type="Decimal" >

 <Counter Name="Motor Run Time" Value="67175561" Type="HEX" >

 <Counter Name="Motor Error" Value="-1604054784" Type="Decimal" >

 <Counter Name="Shutter Error" Value="-200842048" Type="Decimal" >

 <Counter Name="Sensors Error" Value="-245333656" Type="Decimal" >

 <Counter Name="Eject Cnt" Value="27790336" Type="Decimal" >

 <Counter Name="Max. Current(mA)" Value="687874066" Type="Decimal" >

 <Counter Name="System Flags" Value="1380238512" Type="HEX" >

 </DiagnosticCounters>

 </DataSetContent>

 </DataSet>

## Appendix D - ADK TMS Agent Diagnostic Actions

This section presents the Diagnostic Actions for ADK TMS Agent.


| Name  | Description  | O/S   |
|  -------- | -------- | -------- |
| Capture Screen  | A PNG image of current screen will be uploaded to the server. This option is only supported on devices that have screens.  | V/OS, V/OS2   |
| Get App Parameter Files  | Details about all the application parameter files are uploaded to server  | V/OS, V/OS2   |
| Get Device Profile  | The current device profile will be sent to the server. The device profile consists of:Installed applications, Serial Number, OS information, clock information, port information, and other information about the device.  | V/OS, V/OS2   |
| Diagnostic Data  | The diagnostic profile consists of Open and Maximum file handle count, Current Process List with memory and CPU usage and diagnostic counter data.  | V/OS, V/OS2   |
| Get Library Details  | The directory listing of /lib will be retrieved and uploaded to the server.  | V/OS, V/OS2   |
| Get OS config file  | The OS configuration files will be combined into a TGZ and uploaded to the server.This contains volume, back light intensity and the next scheduled reboot.  | V/OS, V/OS2   |
| Get OS Logs  | The OS log files will be combined into a TGZ and uploaded to the server.  | V/OS, V/OS2   |
| Get User Logs  | The user log files will be combined into a TGZ and uploaded to the server.  | V/OS, V/OS2   |
| List user files  | The agent will do a recursive directory listing on //home//usr1 and upload a text document with the results.  | V/OS, V/OS2   |
| Reboot  | The agent will reboot the terminal.  | V/OS, V/OS2   |
| Restart Applications  | Restart all the applications  | V/OS, V/OS2   |
| Touch Recalibrate  | Agent triggers a touch screen recalibration  | V/OS   |



## Appendix E - ADK TMS Agent Getdevice Profile

This section presents the Getdevice profile attributes for ADK TMS Agent.


| Name  | Description  | O/S   |
|  -------- | -------- | -------- |
| VSRSponsor  | Details about sponsor certificate name  | V/OS, V/OS2   |
| ManufactureDate  | Indicates manufacture date in yyyy/mm/dd format  | V/OS, V/OS2   |
| OSVersion  | Indicates OS version in device  | V/OS, V/OS2   |
| OSName  | Indicates OS name in device.  | V/OS, V/OS2   |
| DTName  | Indicates Device Tree name from system  | V/OS, V/OS2   |
| PTID  | Indicates system information Platform ID  | V/OS, V/OS2   |
| BuiltinBattery  | TRUE, if coin-cell battery is available; FALSE otherwise.  | V/OS, V/OS2   |
| BatteryLevel  | Indicates coin-cell battery level.  | V/OS, V/OS2   |
| ClockSetting  | Indicate device time  | V/OS, V/OS2   |
| ModelNumber  | Indicates Model number of a device  | V/OS, V/OS2   |
| NetworkConfiguration  | Indicates the active network interface type used to communicate to VHQ  | VOS, V/OS2   |
| SerialNumber  | Indicates the device serial number  | V/OS, V/OS2   |
| LastBootDateTime  | Indicates the last device Boot time  | V/OS, V/OS2   |
| StylusVer  | Indicates stylus version if present  | V/OS, V/OS2   |
| GUIMgrVer  | Indicates GUI manager version if present  | V/OS, V/OS2   |
| SecurityPolicy  | Indicates Security policy  | V/OS, V/OS2   |
| IPAddress  | Indicates IP address of device  | V/OS, V/OS2   |
| MACAddress  | Indicates MAC address of device  | V/OS, V/OS2   |
| VHQVersion  | Indicates VHQ version that device communicates to  | V/OS, V/OS2   |
| VHQSrvPubKeyCertExpiration  | Indicates public key certificate expiry date  | V/OS, V/OS2   |
| VHQSrvSSLCertExpiration  | Indicates SSL certificate expiry date  | V/OS, V/OS2   |
| VHQFTPCertExpiration  | Indicates FTP certificate expiry date  | V/OS, V/OS2   |
| MaintenanceStart  | Indicates the maintenance window start time in 24 hr format as configured in VHQConfig.ini file  | V/OS, V/OS2   |
| MaintenanceEnd  | Indicates the maintenance window end time in 24 hr format as configured in VHQConfig.ini file  | V/OS, V/OS2   |
| MaintenanceDays  | Indicates the maintenance window days as configured in VHQConfig.ini file  | V/OS, V/OS2   |
| SOCRevision  | Indicates chip Version of a system  | V/OS, V/OS2   |
| ** IO MODULE ** | ** Details about IO module ** | &ndash; |
| Feature  | Indicates IO module feature value  | V/OS   |
| SerialNumber  | Indicates IO module serial number(not implemented-undefined)  | V/OS   |
| Multiport connected  | Indicates whether multi port is connected or not  | V/OS   |
| ** PORT ** | ** Port Details ** | &ndash; |
| PortType  | Indicates type of ports  | V/OS, V/OS2   |
| PortName  | Indicates port names  | V/OS, V/OS2   |
| Connected  | Indicates Port connection status  | V/OS, V/OS2   |
| RS-485  | Indicates RS-485 port connection status  | V/OS, V/OS2   |
| FirmwareVersion  | Indicates port firmware version  | V/OS, V/OS2   |
| USBDevice  | Indicates USB Device status  | V/OS, V/OS2   |
| ** HARDWARE DEVICES ** | ** Hardware Device Details ** | &ndash; |
| DeviceName  | Indicates hardware device name  | V/OS, V/OS2   |
| FirmwareVersion  | Indicates hardware device firmware version  | V/OS, V/OS2   |
| ** WIFI PROFILE ** | ** WiFi Profile Details ** | &ndash; |
| CONNECTIONSTATUS  | Indicates Wi-Fi Status (up/Down)  | V/OS, V/OS2   |
| SIGNALSTRENGTH  | Indicates Wi-Fi signal strength  | V/OS, V/OS2   |
| SSID  | Indicates Wi-Fi name  | V/OS, V/OS2   |
| CHANNEL  | Indicates Wi-Fi router channel  | V/OS, V/OS2   |
| ENCRYPTTYPE  | Indicate Wi-Fi certificate type  | V/OS, V/OS2   |
| NETWORKTYPE  | Indicate network type of Wi-Fi  | V/OS, V/OS2   |
| AUTHMODE  | Indicates Wi-Fi Authmode details  | V/OS, V/OS2   |
| ** BLUETOOTH PROFILE ** | ** Bluetooth Profile details ** | &ndash; |
| CONNECTIONSTATUS  | Indicates bluetooth Status (up/Down)  | V/OS, V/OS2   |
| SIGNALSTRENGTH  | Indicates bluetooth strength  | V/OS, V/OS2   |
| ** BATTERY ** | ** Battery details ** | &ndash; |
| BatteryInfo Level  | Indicates Device Battery Charge Level  | V/OS, V/OS2   |
| Voltage  | Indicates Voltage level  | V/OS, V/OS2   |
| Capacity  | Indicates Battery capacity  | V/OS, V/OS2   |
| Temperature  | Indicates Battery temperature  | V/OS, V/OS2   |
| SerialNumber  | Indicates Battery serial Number  | V/OS, V/OS2   |
| ** KEY ** | ** Key details ** | &ndash; |
| Key Name  | Indicates key present or not in slot  | V/OS, V/OS2   |
| Slot  | Indicates slot number  | V/OS, V/OS2   |
| Status  | Indicates key status number  | V/OS, V/OS2   |
| Type  | Indicates type of key in slot (DUKPT/MasterSession/ADE)  | V/OS, V/OS2   |
| KSN  | Indicates KSN value associated with any key  | V/OS, V/OS2   |
| EPB  | Indicates EPB value associated with any key  | V/OS, V/OS2   |
| ** MEMORY PROFILE ** | ** Terminal Memory Details ** | &ndash; |
| ProtectedRamFreeSpace  | Indicates Free space available in Protected RAM  | V/OS, V/OS2   |
| RamFreeSpace  | Indicates free RAM available  | V/OS, V/OS2   |
| FlashFreeSpace  | Indicates Flash memory available  | V/OS, V/OS2   |
| ExternalMemoryFreeSpace  | Indicates free external memory available  | V/OS, V/OS2   |
| ProtectedRamDiskSize  | Indicates total Protected RAM size  | V/OS, V/OS2   |
| TotalRamSize  | Indicates total RAM size  | V/OS, V/OS2   |
| TotalFlashSize  | Indicates total Flash memory size  | V/OS, V/OS2   |
| ExternalMemorySize  | Indicates total external memory available  | V/OS, V/OS2   |
| ** VSR CERTIFICATE ** | ** VSR Certificate Details ** | &ndash; |
| VSRCert ID  | Indicates VSR certificate ID  | V/OS, V/OS2   |
| SN  | Indicates Serial number  | V/OS, V/OS2   |
| Type  | Indicates VSR certificate(Unknown/VSR sponsor) issuer type  | V/OS, V/OS2   |
| Name  | Indicates VSR certificate(Unknown/VSR sponsor) issuer name  | V/OS, V/OS2   |
| ** VERISHIELD CRYPTO LIBRARY ** | ** VCL Details ** | &ndash; |
| FWVer  | Indicates Firmware version  | V/OS, V/OS2   |
| Status  | Indicates VCL info status  | V/OS, V/OS2   |
| State  | Indicates VCL info state  | V/OS, V/OS2   |
| EncrStatus  | Indicates encrption status  | V/OS, V/OS2   |
| RootKeyStatus  | Indicates Root key status  | V/OS, V/OS2   |
| ProvKeyStatus  | Indicates Prov key status  | V/OS, V/OS2   |
| PANKeyStatus  | Indicates PAN key status  | V/OS, V/OS2   |
| DiscKeyStatus  | Indicates Disc key status  | V/OS, V/OS2   |
| EncrEnabled  | Indicates encryption enabled or not  | V/OS, V/OS2   |
| _ Firmware status _ | -&mdash; | -&mdash; |
| Name  | Indicates firmware name  | V/OS   |
| Value  | Indicates firmvare version/ value  | V/OS   |
| _ Firmware Keys _ | -&mdash; | -&mdash; |
| Name  | Indicates firmware key name  | V/OS   |
| Value  | Indicates firmware key value  | V/OS   |



## Appendix F - ADK Communication Options

For ADK communications&mdash;which include dialup and GPRS options, set the following values:



* Operating Mode= ADK And include the following files:
    * GID1
        * `Comdaemon.vsa`
        * `syslog.out`
    * GID15
        * `vhqsrv.xml` - Will have a reference to one or more of the following files, depending on your communications configuration (refer to _ADK Communication Service Programmers Guide (VPN DOC00664)_ for details.)
        * `Gprs_smart``ppp.xml`
        * `local_net.xml`
        * `wlan_net.xml`
        * `PPP_modem.xml`. 

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

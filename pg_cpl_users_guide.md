---
title: ADK-CPL Programmers Guide

---

# ADK-CPL Programmers Guide




# Preface

This document is for programmers and developers who want to understand and use the ADK-CPL extension.


## Audience

This guide provides information on the usage of the ADK-CPL system.


## Organization

[Chapter 1, Introduction:] Provides a general introduction to ADK-CPL

[Chapter 2, Getting Started:] Presents an introduction in ADK-CPL usage.

[Chapter 3, Programming:] Supplies ADK-CPL programming information.

[Chapter 4, System Setup and Requirements:] Presents environment setup and dependencies.

[Chapter 5, Troubleshooting:] Gives solutions for possible issues in ADK-CPL.


## Prerequisites


# Introduction

ADK-CPL allows to use the functionality of the Commerce Platform in V/OS and V/OS2 as a static library.

Each library of libcpl only works with a special trigger schema. Currently changes inside the trigger schema can lead to broken backward compatibility. The only solution to fix it is to link the needed library static against the payment application.

![cpl_static_linking.png](.//cpl_static_linking.png)![cpl_static_linking.png](.//cpl_static_linking.png)

The communication flow is shown below ![cpl_004_trigger_architecture_short.png](.//cpl_004_trigger_architecture_short.png)![cpl_004_trigger_architecture_short.png](.//cpl_004_trigger_architecture_short.png)


## Triggers


### Payment flow triggers



* CP_SYSTEM_NOTIFIES_TRANSACTION_STARTED
* CP_SYSTEM_REQUESTS_BASKET_ADJUSTMENT
* CP_SYSTEM_NOTIFIES_BASKET_FINALIZED
* CP_SYSTEM_REQUESTS_LOYALTY
* CP_SYSTEM_REQUESTS_AMOUNT_ADJUSTMENT
* CP_SYSTEM_NOTIFIES_AMOUNT_FINALIZED
* CP_SYSTEM_REQUESTS_ALT_PAYMENT
* CP_SYSTEM_NOTIFIES_CARD_PRESENTED
* CP_SYSTEM_NOTIFIES_CARD_BIN_RECEIVED
* CP_SYSTEM_REQUESTS_PAYMENT_AMOUNT_ADJUSTMENT
* CP_SYSTEM_NOTIFIES_AUTHORIZATION_COMPLETED
* CP_SYSTEM_NOTIFIES_PAYMENT_COMPLETED
* CP_SYSTEM_REQUESTS_RECEIPT_MANAGEMENT
* CP_SYSTEM_NOTIFIES_TRANSACTION_ENDED


### Non payment triggers



* CP_SYSTEM_NOTIFIES_IDLE_ENTERED
* CP_SYSTEM_NOTIFIES_MANUAL_LAUNCH_SELECTED


### API Trigger



* CP_APP_REQUESTS_ENCRYPTED_CARD
* CP_APP_REQUESTS_PRINT
* CP_APP_REQUESTS_APPEND_RECEIPT
* CP_APP_REQUESTS_PAYMENT_TRANSACTION_START
* CP_APP_REQUESTS_CARD_DATA
* CP_APP_REQUESTS_SEND_DATA_TO_POS
* CP_APP_REQUESTS_RECEIPT


## Concepts


### Uniform Interface


# Getting Started

The CPL library comes with the sample application cpltest that demonstrates system features and provides a starting point for application developers who use the CPL library. It can be found in the _test_ folder (test).

The CPL library is provided on different target platforms. The following sections describe how to use the sample application cpltest on these platforms. In addition, this chapter gives general information about required components to run ADK-CPL (runtime libraries).


## Running ADK-CPL on V/OS

To run the ADK-CPL on V/OS and V/OS2. If the sample application cpltest shall be used too, the ADK-GUI packet needs to be installed with all its requirements.


## Running on Verix

To run the ADK-CPL on Verix. If the sample application cpltest shall be used too, the ADK-GUI packet needs to be installed with all its requirements.

Furthermore, ADK-CPL depends on some libraries coming along with OS and the EOS. Please always use the newest OS and EOS versions available on Verifone DevNet.


## Running on Linux


# Programming


## ADK-CPL Deployment Options

The ADK-CPL system provides different header files (`[Commerce.h](_commerce_8h.md#file-commerce.h)`, [Api.h](_api_8h.md#file-api.h), [CpTrigger.h](_cp_trigger_8h.md#file-cptrigger.h), [EnvironmentDataProvider.h](_environment_data_provider_8h.md#file-environmentdataprovider.h) ITransactionDataProvider) that exports the CPL library API function calls. Because of compatibility problems between the different schema versions, the library only supports static linking.


### Headers and binary deliveries

The ADK-CPL system is composed of the following deliveries:


| File  | Purpose   |
|  -------- | -------- |
| **[Api.h](_api_8h.md#file-api.h)** | CPL function header file with exported definitions/functions.   |
| **[Commerce.h](_commerce_8h.md#file-commerce.h)** | CPL function header file with exported definitions/functions.   |
| **[EnvironmentDataProvider.h](_environment_data_provider_8h.md#file-environmentdataprovider.h)** | CPL function header file with exported definitions/functions.   |


**[ITransactionDataProvider.h](_i_transaction_data_provider_8h.md#file-itransactiondataprovider.h)** | CPL function header file with exported definitions/functions.

**libcpl.a** | CPL system client library **cpltest** | CPL sample application binary for V/OS, V/OS2, Verix and linux

All header files can be found in the ‘include/commerce‘ directory.

An application has to be linked with libcpl.


### Multi-Application-Controller Resource Subfolder Support

Multi-Application-Controller (MAC) is used to run several applications in parallel on a terminal. Since version 2.5.0 the UI system has added support to lookup resources in a separate subdirectory for each application to avoid resource location conflicts. For this, MAC sets up the environment variable `GUIPRT_APPNAME`, which provides a name for each application that is used for the subfolder `appname:`

```cpp
www/<appname>/<platform>
```

 or 

```cpp
www/<appname>/<width>x<height><color><numkeys><touch>
```

`GUIPRT_APPNAME` is automatically considered during startup of an application so that most of the MAC handling is transparent to the application. Please note that the variable is just used to set up the default values for `UI_PROP_RESOURCE_PATH` and `UI_PROP_RESOURCE_DEFAULT_PATH`. Once an application has set the properties during runtime, value of `GUIPRT_APPNAME` is ignored.

An application can also set GUIPRT_APPNAME by itself to move the default resource folder. For this the environment variable has to be set using `setenv()` before calling any ADKGUI function.


# System Setup and Requirements

The following are the hardware and software requirements of the ADK-CPL system.


# Hardware Support

The ADK-CPL system is hardware platform agnostic and supports installation on V/OS, Raptor, and Verix terminals.

The ADK-CPL system is intended to run across the entire hardware portfolio. The following table list different characteristics of these devices.


| Model  | Touch  | Color  | Resolution  | Keypad  | Function Keys  | Resource Path   |
|  -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| Vx520 (B/W)  | No  | No  | 128x64  | 0-9,*,#,CAN,CORR,OK  | 4+4+Alpha  | 128x64M24N   |
| Vx6, Vx8  | Yes  | Yes  | 240x320  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 240x320C15T   |
| Vx675/Vx5 color  | No  | Yes  | 320x240  | 0-9,*,#,CAN,CORR,OK  | 4+4*Cursor+Enter  | 320x240C24N   |
| Mx915  | Yes  | Yes  | 480x272  | 0-9,CAN,CORR,OK  | &mdash; | 480x272C13T   |
| Mx925  | Yes  | Yes  | 800x480  | 0-9,CAN,CORR,OK  | &mdash; | 800x480C13T   |
| Ux100  | No  | No  | 128x64  | 0-9,CAN,CORR,OK,INFO  | 2  | 128x64M16N   |
| e265  | No  | No  | 160x120  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 160x120M15N   |
| e285  | Yes  | Yes  | 240x320  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 240x320C15T   |
| e315/335  | No  | No  | 128x32  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 128x32M15N   |
| e355  | No  | Yes  | 320x240  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 320x240C15N   |
| Carbon X10  | Yes  | Yes  | 854x480  | &mdash; | &mdash; | 854x480C0T   |
| M400  | Yes  | Yes  | 854x480  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 854x480C15T   |
| P400/V400  | Yes  | Yes  | 320x480  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 320x480C15T   |
| P200/V200c  | No  | Yes  | 240x320  | 0-9,*,#,CAN,CORR,OK  | 2+4*Cursor  | 240x320C21N   |
| V200t/V205c  | No  | Yes  | 320x240  | 0-9,*,#,CAN,CORR,OK  | 2+4*Cursor  | 320x240C21N   |
| V240m/V400m  | Yes  | Yes  | 320x480  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 320x480C15T   |
| C680  | Yes  | Yes  | 320x480  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 320x480C15T   |


Users need to take these characteristics into account when designing GUI dialogs with CPL library support for the different hardware platforms.

C680 has an additional power button, it is not counted as keypad key since it cannot be used for input. 



For a detailed description of the API functions, see .


# Software Requirements

ADK-CPL requires the installation of corresponding platform packages. For details please refer to the release notes.


# Troubleshooting


# Support for ADKLOG

ADK-CPL has added support for ADKLOG component. ADKLOG is required to implement the new ADK logging concept, which provides the Logging Control Panel (LCP) used as central instance to configure and enable logging for the several ADK components. For this, LCP uses configuration files (for CPL), which are read by `liblog` library. If installed on the system, `liblog` library will be used by client import libraries (`libvfiguiprt`, `libvfiprt`) and server components (`guiprtserver`, `guiserver`, `prtserver`) to output logging messages. In this case, the logging messages are passed to `liblog` library instead of using console logging mechanism (with EOSLog or stderr), which is described above.

In order to lookup the corresponding configuration files, ADKLOG uses component identifiers, which are reserved for each ADK component. Components participating in Commerce Platfrom operation are following:


| Component Id  | Configuration file  | Description   |
|  -------- | -------- | -------- |
| `CPL` | `CPL_log.conf` | Commerce Platform library   |
| `PRX` | `PRX_log.conf` | Cloudproxy daemon   |
| `MAC` | `MAC_log.conf` | Multi Application Controller daemon   |
| `MACCL` | `MACCL_log.conf` | Multi Application Controller Commerce library   |
| `CPR` | `CPR_log.conf` | Commerce Platform Runtime library   |


The configuration files contain several settings for logging like output channels, verbosity and a logging mask. For more details about configuration settings or logging message formats, please refer to documentation of ADKLOG project.


# Cloud connectivity

First step that needs to be done to solve problem appeared with Commerce Platform is to check whether cloud is available. All network traffic produced by CP applications is verified and directed by Cloudproxy daemon. It is possible to check whether Cloudproxy is installed and operating by running CP Downloader application from the desktop. If the daemon is running then Cloudproxy entry should be present in CP downloader main menu. There is Connectivity Check sub entry in the Cloudproxy menu.


| ![cpl_desktop.png](.//cpl_desktop.png)![cpl_desktop.png](.//cpl_desktop.png)![cpl_desktop.png](.//cpl_desktop.png)![cpl_desktop.png](.//cpl_desktop.png) | ![cpl_cpdownloader-menu.png](.//cpl_cpdownloader-menu.png)![cpl_cpdownloader-menu.png](.//cpl_cpdownloader-menu.png)![cpl_cpdownloader-menu.png](.//cpl_cpdownloader-menu.png)![cpl_cpdownloader-menu.png](.//cpl_cpdownloader-menu.png) | ![cpl_cloudproxy-menu.png](.//cpl_cloudproxy-menu.png)![cpl_cloudproxy-menu.png](.//cpl_cloudproxy-menu.png)![cpl_cloudproxy-menu.png](.//cpl_cloudproxy-menu.png)![cpl_cloudproxy-menu.png](.//cpl_cloudproxy-menu.png) |
|  -------- | -------- | -------- |


Pressing it makes a test request to the cloud and displays the response after few seconds. When a red line with text "Cloud not reachable" appears, then cloud support team should be contacted to determine and solve the problem. In success case a green line with text "Cloud reachable" will be seen. Examples of different response codes are shown below.


| ![cpl_cloud_200.png](.//cpl_cloud_200.png)OK![cpl_cloud_200.png](.//cpl_cloud_200.png)OK![cpl_cloud_200.png](.//cpl_cloud_200.png)OK![cpl_cloud_200.png](.//cpl_cloud_200.png)OK | ![cpl_cloud_503.png](.//cpl_cloud_503.png)Service unnavailable![cpl_cloud_503.png](.//cpl_cloud_503.png)Service unnavailable![cpl_cloud_503.png](.//cpl_cloud_503.png)Service unnavailable![cpl_cloud_503.png](.//cpl_cloud_503.png)Service unnavailable | ![cpl_cloud_400.png](.//cpl_cloud_400.png)SSL certificate error![cpl_cloud_400.png](.//cpl_cloud_400.png)SSL certificate error![cpl_cloud_400.png](.//cpl_cloud_400.png)SSL certificate error![cpl_cloud_400.png](.//cpl_cloud_400.png)SSL certificate error |
|  -------- | -------- | -------- |

-------------------------------

Updated on 2025-06-17 at 11:52:28 +0100

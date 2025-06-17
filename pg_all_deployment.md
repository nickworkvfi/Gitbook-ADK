---
title: ADK Runtime System Deployment

---

# ADK Runtime System Deployment



This document details the deployment of ADK component on run-time systems. ADK components can be composed of a daemon or server process and link libraries for applications. Client (application) link libraries are provided as static and shared libraries. Other ADK components just offer a static or shared library and do not require a daemon process.


# Daemons and Servers

Daemons implement shared services that can be used by multiple applications concurrently. These are independent run-time binaries and need to be installed in the terminal. Please note that not all ADK components have a daemon process depending on the service they offer.

Access to the services of a ADK daemon/server is provided through an application client library (either shared or static). These client libraries provides a programming API for applications and hide the interprocess communication between the application process and the daemon/server process.

The ADK daemons and servers are system signed. This is to enable the loading of the ADK components during production as a static factory image.


| Component  | Ports  | Purpose   |
|  -------- | -------- | -------- |
| EMV CT  | 5801, 5803  | EMV CT server port   |
| EMV CT  | 5803  | EMV CT server callback port   |
| EMV CT  | 5811/5813  | stunnel   |
| EMV CTLS  | 5802  | EMV CTLS server port (changed from 5902)   |
| EMV CTLS  | 5804  | EMV CTLS server callback port (changed from 5904)   |
| EMV CTLS  | 5812/5814  | stunnel   |
| MSR  | 5820  | MSR server port   |
| MSR  | 5821..5824  | stunnel   |
| TEC  | 5825  | TEC server port   |
| TEC  | 5826..5829  | stunnel   |
| GUI  | 5900..5909  | 10 internal displays   |
| GUI  | 5910..5919  | 10 external displays   |
| PRT  | 5950..5959  | 10 internal printers   |
| PRT  | 5960..5969  | 10 external printers   |
| ADKCPR  | 8888  | HTTP Proxy server port   |
| SDI  | 12000  | SDI server port   |
| IPC  | 5899  | Notification server port (VOS/VOS2 only)   |



# Shared Libraries

Shared libraries are provided to share ADK code between multiple applications running on the terminal. These libraries can be linked with different applications and are installed as separate binaries on the terminal. Shared libraries are installed at shared location so that applications running under different user accounts can use those.

The ADK shared libraries are system signed, to

* store it once at a common location and share it from different applications
* to enable the loading of ADK components in production as a static factory image


# Static Libraries

Some ADK components are also delivering static link libraries. This allows applications to link ADK code statically with their applications. However, this duplicates code in case multiple applications are using the same static library.

Applications need to link with either static or shared library of an ADK component, but not both!


# Variants and Options

Beside static and shared libraries, some ADK components offer different implementations of the same API or require to select a particular implementation based on regulation and certifications.

Examples:

* EMV CT: there are different EMV contact L2 kernels and version that can be used with the same EMV CT Framework library.
* EMV CTLS: there are different L2 kernels and payment schemes that can be used with the same EMV CTLS Framework library.
* COM: different implementations of client library to use XML or Information Database
* GUI, PRT: different versions of the GUI
* VATS: there are VATS test-framework enabled variants of some ADK components (e.g. GUI, PRT, EMV)

Depending on the use case users need to pick the correct variant of the ADK library or daemon/server.


# OS User Assignment

V/OS 
| User  | Components  | Description   |
|  -------- | -------- | -------- |
| Sys6  | AGT User ID reserved for VHQ services  | Sys6 is reserved for VHQ   |
| Sys13  | GUIPRT server, MAC (SYS), CCP  | Sys13 (browser user) applications are deactivated on sysmode start   |
| Sys12  | COM daemon, All ADK shared libraries  | Sys12 is the general user ID for ADK components if no special behaviour is needed.   |
| UsrX  | Security Service, EMV libs and services  | These components are provided with the default user ID and need to be signed with a sponsor certificate   |



# System Startup and Configuration

The default system configuration is to start the MAC on top of all other required ADK services (GUIPRT, COM, LOG). As a background service, the VHQ Terminal Agent is running on top of its ADK dependencies (COM, LOG). The Communication Control Panel (CCP) and Log Control Panel are present on the MAC desktop as a default system application.

**V/OS:**

* All ADK services are started from Secure Installer, if they are installed in the system.
* Modifying the default system startup configuration is done by de-installing the respective service from the system. That's why all system signed ADK packages need to provide a removal package. 

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100

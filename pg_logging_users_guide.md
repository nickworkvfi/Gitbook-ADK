---
title: ADK-LOGGING Programmers Guide

---

# ADK-LOGGING Programmers Guide




# Preface

This document is intended for developers to understand how to use the ADK logging.


## Audience

This guide provides information of the ADK Logging usage. Discussed topics of application configuration, deployment, API usage. Guide also contains common usage examples.


## Organization

This guide is organized as follows:

[Introduction]. Brief summary on how ADK Logging works.

[Getting Started]. Most simple usage example.

[Programming]. Explains how to use the Logging API.

[System Setup and Requirements]. How to deploy ADK Logging.

[Logging on android devices]. Logging on android devices.

[Storage Space, Log Cleanup, and Limits] Storage Space, Log Cleanup, and Limits

[Troubleshooting]. Common problems encountered for ADK Logging.

[Appendix]. Known issues and limitations, acronym definition.


# Introduction

This chapter shows the basic logging process used by ADK logging.


## Concepts

ADK Logging is a solution targeted to make logging accessible and universal ![04_logging_information_service_overview.png](.//04_logging_information_service_overview.png)ADK Logging![04_logging_information_service_overview.png](.//04_logging_information_service_overview.png)ADK Logging![04_logging_information_service_overview.png](.//04_logging_information_service_overview.png)ADK Logging![04_logging_information_service_overview.png](.//04_logging_information_service_overview.png)ADK Logging

ADK Logging, uses syslog to process user and system messages.


# Getting Started


## ADK Logging Usage Example

This code below shows most simple example:



```cpp
#include <liblog2.h>

log_hdl = LOGAPI_INIT("demoapp");
LOGF_TRACE(log_hdl, "Trace: %s", "Hello world!");
LOGAPI_DEINIT(log_hdl);
```

First, the header file [liblog2.h](liblog2_8h.md#file-liblog2.h) is included. Next, the logging channel `demoapp` is initialized, and its handle is stored. Tracing is performed using the `LOGF_TRACE()` API function, which utilizes the channel handle and follows printf-style syntax. Once all logging tasks are complete, the channel is closed. In most scenarios, the logging channel should be initialized at application startup and closed at exit, eliminating the need to reopen it before each logging operation.

 An application can have multiple logging channels, each configured independently. Most parameters are managed through the Logging Control Panel(LCP), that modifies the application's configuration file.


To run this example, you need to create a configuration file for the `demoapp` channel. The file should be named `demoapp_log.conf`. It can be generated using the LCP or included in the application package.


## How To build Example

You could find ADK Logging example and makefiles in the doc\log\example folder. Follow these steps to build the example:

Prerequisites: You have already installed ADK, SDK and toolchain



1. Change to _ADK_\doc\log\example folder
2. Edit VERSION.mk file and put your toolchain versions/paths here
3. Build an example:

VOS build: 

```cpp
make vos-release-pack
```

VOS2 build: 

```cpp
make vos2-release-pack
```


# Programming


## Configuration


### Application Channel

Each logging channel used in the application must be configured; otherwise, logging will be disabled for that channel.

ADK Logging relies on a JSON-format configuration file that stores all logging parameters, such as masks, verbosity, and more. This file is managed through the LCP or Logging API: [Configuration functions]

Configuration file for the example above: demoapp_log.conf. 

```cpp
{
  "schema_version": "1.0",
  "enabled": true,
  "mask": 16,
  "verbosity" : 1,
  "output" : "LOGAPI_SYSLOG"
}
```


### Log Masks


| Log level  | Bitmask  | Log level description   |
|  -------- | -------- | -------- |
| LOGAPI_EMERG  | 1  | Emergency / system is unusable   |
| LOGAPI_ALERT  | 2  | An immediate action must be taken   |
| LOGAPI_CRIT  | 4  | Critical conditions   |
| LOGAPI_ERROR  | 8  | Error reporting   |
| LOGAPI_WARN  | 16  | Warning reporting   |
| LOGAPI_NOTICE  | 32  | Normal, but significant condition   |
| LOGAPI_INFO  | 64  | Regular info message   |
| LOGAPI_TRACE  | 128  | High verbosity messages   |



### Verbosity

Following information is available with verbosity mode switched "ON":

* FILE:LINE
* [PROCESS ID]
* [THREAD ID]


### Output sources


| Output  | Description   |
|  -------- | -------- |
| LOGAPI_CONSOLE  | Output to console   |
| LOGAPI_SYSLOG  | Output to syslog   |
| LOGAPI_ALL  | Output to both console and syslog   |



### ADK Component Configuration

Each ADK component initializes its channel using a stored configuration file. The file is named in the format `**id_log.conf**,` where `id` represents the ADK component `ID`. For example, the configuration file for the `ADK``**COM** channel` is named `**COM_log.conf**.`


The table below lists all ADK components and their corresponding IDs:


| Component name  | Component Id  | [Config](class_config.md) bundle VOS   |
|  -------- | -------- | -------- |
| ADK-ASL (ADK system loader)  | ASL  | [dl.ASL_log_cfg.tgz](config/dl.ASL_log_cfg.tgz) |
| ADK-AST (Anti Skimming Tool)  | AST  | [dl.AST_log_cfg.tgz](config/dl.AST_log_cfg.tgz) |
| ADK-CCP (Communication Control Panel)  | CCP  | [dl.CCP_log_cfg.tgz](config/dl.CCP_log_cfg.tgz) |
| ADK-COM (Communication Service)  | COM  | [dl.COM_log_cfg.tgz](config/dl.COM_log_cfg.tgz) |
| ADK-CP (Commerce platform)  | CPR  | [dl.CPR_log_cfg.tgz](config/dl.CPR_log_cfg.tgz) |
| ADK-CPL (Commerce Platform Library)  | CPL  | [dl.CPL_log_cfg.tgz](config/dl.CPL_log_cfg.tgz) |
| ADK-EMV-CT (EMV Contact)  | EMVCT  | [dl.EMVCT_log_cfg.tgz](config/dl.EMVCT_log_cfg.tgz) |
| ADK-EMV-CTLS (EMV Contactless)  | EMVCTLS  | [dl.EMVCTLS_log_cfg.tgz](config/dl.EMVCTLS_log_cfg.tgz) |
| ADK-EVENT  | EVT  | [dl.EVT_log_cfg.tgz](config/dl.EVT_log_cfg.tgz) |
| ADK-FPS (Finger print sensor)  | FPS  | [dl.FPS_log_cfg.tgz](config/dl.FPS_log_cfg.tgz) |
| ADK-UTIL-EXPAT  | EXP  | [dl.EXP_log_cfg.tgz](config/dl.EXP_log_cfg.tgz) |
| ADK-PRX  | PRX  | [dl.PRX_log_cfg.tgz](config/dl.PRX_log_cfg.tgz) |
| ADK-INF  | INF  | [dl.INF_log_cfg.tgz](config/dl.INF_log_cfg.tgz) |
| ADK-IPC (IPC layer)  | IPC  | [dl.IPC_log_cfg.tgz](config/dl.IPC_log_cfg.tgz) |
| ADK-IPC (Notification server)  | NFY  | [dl.NFY_log_cfg.tgz](config/dl.NFY_log_cfg.tgz) |
| ADK-IPC (Notification clients)  | NFYCL  | [dl.NFYCL_log_cfg.tgz](config/dl.NFYCL_log_cfg.tgz) |
| ADK-GUIPRT (GUI server)  | GUI  | [dl.GUI_log_cfg.tgz](config/dl.GUI_log_cfg.tgz) |
| ADK-GUIPRT (GUI clients)  | GUICL  | [dl.GUICL_log_cfg.tgz](config/dl.GUICL_log_cfg.tgz) |
| ADK-GUIPRT (Printer server)  | PRT  | [dl.PRT_log_cfg.tgz](config/dl.PRT_log_cfg.tgz) |
| ADK-GUIPRT (Printer clients)  | PRTCL  | [dl.PRTCL_log_cfg.tgz](config/dl.PRTCL_log_cfg.tgz) |
| ADK-MSR  | MSR  | [dl.MSR_log_cfg.tgz](config/dl.MSR_log_cfg.tgz) |
| ADK-NFC (NFC framework)  | NFC  | [dl.NFC_log_cfg.tgz](config/dl.NFC_log_cfg.tgz) |
| ADK-SDI  | SDI  | [dl.SDI_log_cfg.tgz](config/dl.SDI_log_cfg.tgz) |
| ADK-SEC  | SEC  | [dl.SEC_log_cfg.tgz](config/dl.SEC_log_cfg.tgz) |
| ADK-SYS (client)  | SYSCL  | [dl.SYSCL_log_cfg.tgz](config/dl.SYSCL_log_cfg.tgz) |
| ADK-SYS (server)  | SYS  | [dl.SYS_log_cfg.tgz](config/dl.SYS_log_cfg.tgz) |
| ADK-TEC  | TEC  | [dl.TEC_log_cfg.tgz](config/dl.TEC_log_cfg.tgz) |
| ADK-TMS-AGENT  | TMS  | [dl.TMS_log_cfg.tgz](config/dl.TMS_log_cfg.tgz) |
| ADK-PM (Power managment)  | PM  | [dl.PM_log_cfg.tgz](config/dl.PM_log_cfg.tgz) |
| ADK-PM (Power managment clients)  | PMCL  | [dl.PMCL_log_cfg.tgz](config/dl.PMCL_log_cfg.tgz) |
| ADK-MAC (MAC)  | MAC  | [dl.MAC_log_cfg.tgz](config/dl.MAC_log_cfg.tgz) |
| ADK-MAC (MACt clients)  | MACCL  | [dl.MACCL_log_cfg.tgz](config/dl.MACCL_log_cfg.tgz) |
| ADK-LCP  | LCP  | [dl.LCP_log_cfg.tgz](config/dl.LCP_log_cfg.tgz) |


VOS2 only: The following non-ADK channels can also be configured using LCP: VOSBT, VOSGSM, VOSNET, VOSWIFI


Package to disable all ADK logging

V/OS: [dl.disable_logs.tgz](config/dl.disable_logs.tgz)


### Configuration Package

For the **VOS** platform, configuration file should be placed to the "/mnt/flash/etc/config/adk-log" directory. This can be reached if package has "Type: flashconfig" in "control" file and destination file starts with "adk-log/" prefix. In this case config package content is extracted to the directory "/mnt/flash/etc/config/adk-log". For backward compatibility configuration file for requested channel is also searched in "/mnt/flash/etc/config/" directory if nothing is found in "/mnt/flash/etc/config/adk-log" directory. But note, LCP completely ignores content located in obsolete "/mnt/flash/etc/config/" directory.

In the **VOS3** platform configuration files stored at "/mnt/appdata/versioned/globalshare/adk-log/" directory. You can enable ADK Component logging by installing the log enable package. Packages are stored:

 In ADK _full_ release package: "doc/log/example/load/config/vos3"

 In ADK-Log _full_ release package "vos3/load/log/config"

 Among of all logging enable packages for ADK Components, that are system signed, there is a _SAMPLE_ package that is signed as usr1. This is example how to create user-made logging enable packages.


### Configuration functions

The following API is used to modify configuration options for any LOG channel:


| Function  | Description   |
|  -------- | -------- |
| `LOGAPI_GETCONFIG(channel, param, *value)` | Retrieves the configuration parameter for the specified channel and stores its value in _value_ |
| `LOGAPI_SETCONFIG(channel, param, value)` | Sets the specified channel configuration parameter to the value provided in _value_ |


After channel configuration done you may need to call LOGAPI_RECONFIG_NOTIFY() to make all channels re-read their configuration files


| Parameter  | Description   |
|  -------- | -------- |
| LOGAPI_ENABLED_PARAM  | `enabled` parameter. As value you must specify LOGAPI_ENABLED or LOGAPI_DISABLED   |
| LOGAPI_MASK_PARAM  | `mask` parameter (See [Log Masks] for available values)   |
| LOGAPI_VERBOSITY_PARAM  | `verbosity` parameter (See [Verbosity] for available values)   |
| LOGAPI_OUTPUT_PARAM  | `output` parameter (see [Output sources] for available values)   |


Configuration functions could return following error codes:


| Code  | Description   |
|  -------- | -------- |
| LOGAPI_CFG_OK  | Configuration done   |
| LOGAPI_PARAM_ERROR  | Parameter is not supported   |
| LOGAPI_VALUE_ERROR  | Value out of range   |
| LOGAPI_READ_ERROR  | Error parsing channel current configuration file   |
| LOGAPI_WRITE_ERROR  | Error writing configuration file   |



## Initialization Functions

Before an application can log any data, it must initialize the logging channel(s). Once all logging is complete (typically at exit), the application should close these channels. The following API functions handle these tasks:


| Function  | Description   |
|  -------- | -------- |
| `LOGAPI_INIT(channel)` | Initializes `liblog` channel. Returns channel handle.   |
| `LOGAPI_DEINIT(handle)` | Deinitializes liblog channel.   |



## Logging Functions

Generic logging functions are level-specific. All these functions take _handle_ from LOGAPI_INIT() and use printf-like _format_. Provided function set from less critical level _TRACE_ till most critical level _EMERG_.


| Function  | Description   |
|  -------- | -------- |
| `LOGF_TRACE(handle, format, ...)` | Log _Trace_ message   |
| `LOGF_INFO(handle, format, ...)` | Log _Information_ message   |
| `LOGF_NOTICE(handle, format, ...)` | Log _Notice_ message   |
| `LOGF_WARN(handle, format, ...)` | Log _Warning_ message   |
| `LOGF_ERROR(handle, format, ...)` | Log _Error_ message   |
| `LOGF_CRIT(handle, format, ...)` | Log _Critical_ message   |
| `LOGF_ALERT(handle, format, ...)` | Log _Alert_ message   |
| `LOGF_EMERG(handle, format, ...)` | Log _Emergency_ message   |


You must pass a valid _handle_. Passing deinitialized handle results in undefined behavior.

**Example**

```cpp
LOGF_TRACE(handle, "Trace Printf %d test", 1);
```

 Result: 

```cpp
<71>Sep 17 10:28:41    TESTD: (src/main.cpp:117) Trace Printf 1 test
```

In the **VOS3** platform there are additional auxiliary functions:


| Function  | Description   |
|  -------- | -------- |
| `LOGF_ESCAPE(string)` | Processes a string by removing non-printable characters. Returns a pointer to a new string escaped string. Memory for the new string is obtained with new(), and must be freed with delete().   |



## Hex Dump Logging Functions

Hex Dump Logging Functions like a generic logging functions are level-specific, so functions available for each Log Level. There are two choices are available for Hex Dump format output: _RAW_ and _FULL_.

**Raw Hex Dump**

Raw Hex Dump API generates output messages in traditional format: Offset + HEX + ASCII.

Example: 

```cpp
char buffer[15] = “logapi hexdump”;
LOGAPI_HEXDUMP_RAW_TRACE(handle, (void *)buffer, 15);
```

 The result is: 

```cpp
6C 6F 67 61 70 69 20 68 65 78 64 75 6D 70 00    logapi hexdump
```


**Full Hex Dump**

Full Hex Dump API additionally adds separator line, title, data and size information.

Example: 

```cpp
const char buf[] = "12345678901234567890123456789012345678901234567890\x00\x01\xFF";
LOGAPI_HEXDUMP_TRACE( handle, "Buffer", buf, sizeof( buf ) );
```

The result is: 

```cpp
<71>Sep 17 10:28:41  TESTD: Buffer ptr:0x7041FB7C size:0x36
<71>Sep 17 10:28:41  TESTD:  ---- ----------------------------------------------- ----------------
<71>Sep 17 10:28:41  TESTD:  000| 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 1234567890123456
<71>Sep 17 10:28:41  TESTD:  010| 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 7890123456789012
<71>Sep 17 10:28:41  TESTD:  020| 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 3456789012345678
<71>Sep 17 10:28:41  TESTD:  030| 39 30 00 01 FF 00 90....
<71>Sep 17 10:28:41  TESTD:  ---- ----------------------------------------------- ----------------
```

Raw Hex Dump functions:


| Function  | Description   |
|  -------- | -------- |
| `DBG_HEXDUMP_TRACE(handle, data, size)` | Debug hex dump message   |
| `LOGAPI_HEXDUMP_RAW_TRACE(handle, data, size)` | Hex dump _Trace_ message   |
| `LOGAPI_HEXDUMP_RAW_INFO(handle, data, size)` | Hex dump _Information_ message   |
| `LOGAPI_HEXDUMP_RAW_NOTICE(handle, data, size)` | Hex dump _Notice_ message   |
| `LOGAPI_HEXDUMP_RAW_WARN(handle, data, size)` | Hex dump _Warning_ message   |
| `LOGAPI_HEXDUMP_RAW_ERROR(handle, data, size)` | Hex dump _Error_ message   |
| `LOGAPI_HEXDUMP_RAW_CRIT(handle, data, size)` | Hex dump _Critical_ message   |
| `LOGAPI_HEXDUMP_RAW_ALERT(handle, data, size)` | Hex dump _Alert_ message   |
| `LOGAPI_HEXDUMP_RAW_EMERG(handle, data, size)` | Hex dump _Emergency_ message   |




Full Hex Dump functions:


| Function  | Description   |
|  -------- | -------- |
| `DBG_HEXDUMP_TRACE(handle, title, data, size)` | Debug hex dump message   |
| `LOGAPI_HEXDUMP_TRACE(handle, title, data, size)` | Hex dump _Trace_ message   |
| `LOGAPI_HEXDUMP_INFO(handle, title, data, size)` | Hex dump _Information_ message   |
| `LOGAPI_HEXDUMP_NOTICE(handle, title, data, size)` | Hex dump _Notice_ message   |
| `LOGAPI_HEXDUMP_WARN(handle, title, data, size)` | Hex dump _Warning_ message   |
| `LOGAPI_HEXDUMP_ERROR(handle, title, data, size)` | Hex dump _Error_ message   |
| `LOGAPI_HEXDUMP_CRIT(handle, title, data, size)` | Hex dump _Critical_ message   |
| `LOGAPI_HEXDUMP_ALERT(handle, title, data, size)` | Hex dump _Alert_ message   |
| `LOGAPI_HEXDUMP_EMERG(handle, title, data, size)` | Hex dump _Emergency_ message   |


Parameter _title_ shall specify the string which should be printed in the header of the hexdump output. If the parameter value is NULL, then the header will contain 0 in place of the title

 Parameter _data_ shall contain the pointer to the data, which is required to be printed. The parameter expects `void` * `pointer`.
`Parameter`_size_ indicates the length of the data in bytes.


It should be always kept in mind, that the data printed will be a set of bytes stored in the specified address passed in this parameter. If the parameter value is NULL, then nothing will be printed

A misleading situation may occur, when the intention is to print a hex representation of the `const``char` * string, but the pointer to an `std::string` object is passed instead. In such case, the hexdump will print the contents of the `std::string` object, which is not originally expected.


## Syslog Daemon Configuration API

Syslog daemon could be configured by API calls:


| Macro  | Description   |
|  -------- | -------- |
| [syslcmd_set_level(enum SYSL_LVL lvl)](syslogcmd_8h.md#function-syslcmd-set-level) | Sets maximum logging level   |
| [syslcmd_set_source(enum SYSL_SRC src)](syslogcmd_8h.md#function-syslcmd-set-source) | Sets a source of log messages Note: has no effect on V/OS   |
| [syslcmd_set_dest_COM(int serial_port)](syslogcmd_8h.md#function-syslcmd-set-dest-com) | Sets destination to COM   |
| [syslcmd_set_dest_UDP(const char *addr, int port)](syslogcmd_8h.md#function-syslcmd-set-dest-udp) | Sets destination to UDP   |
| [syslcmd_set_dest_FILE(const char *filename)](syslogcmd_8h.md#function-syslcmd-set-dest-file) | Sets destination to file   |
| [syslcmd_set_cfg_int(enum config_option option, int ival)](syslogcmd_8h.md#function-syslcmd-set-cfg-int) | Sets integer options(others than UDP host and file name)   |
| [syslcmd_set_cfg_str(enum config_option option, const char *sval)](syslogcmd_8h.md#function-syslcmd-set-cfg-str) | Sets string options(UDP host and file name)   |
| [syslcmd_get_cfg_int(enum config_option option, int *ival)](syslogcmd_8h.md#function-syslcmd-get-cfg-int) | Returns integer options(others than UDP host and file name)   |
| [syslcmd_get_cfg_str(enum config_option option, char *sval)](syslogcmd_8h.md#function-syslcmd-get-cfg-str) | Returns string options(UDP host and file name)   |
| [syslcmd_apply_config()](syslogcmd_8h.md#function-syslcmd-apply-config) | Apply configuration to syslog daemon   |


Example: 

```cpp
#include <syslogcmd.h>
syslcmd_get_cfg_int(ENABLED, enabled);
syslcmd_apply_config();
```



 The following configuration options are available:


| Configuration option  | Description   |
|  -------- | -------- |
| `ENABLED` | Enable/Disable syslog daemon   |
| `DESTINATION` | Destination (Serial, UDP, File, USB)   |
| `SERIAL_COM` | COM port, if destination is serial   |
| `UDP_HOST` | UDP host, if destination UDP   |
| `UDP_PORT` | UDP host port, if destination UDP   |
| `LOG_LEVEL` | Log message level   |
| `FILE_NAME` | File name, if destination File   |
| `MAX_LOGFILE_SIZE` | Max log file size, if destination File   |
| `NUMBER_OF_FILES` | Number of log files, if destination File   |
| `LOG_FORMAT` | Log format (RFC3164 or RFC5424)   |



## Logging control panel


### ADK logging configuration

![conf_v2.png](.//conf_v2.png)![conf_v2.png](.//conf_v2.png)![conf_v2.png](.//conf_v2.png)![conf_v2.png](.//conf_v2.png)


### LCP Main Screen

The Logging Control Panel (LCP) is a tool to provide the user of an ADK based Verifone Payment device with the following functions:



1. Set / change the application logging settings
2. Set / change the syslog settings
3. Set / change logs destination
4. Check versions of LCP, liblog, syslog

The following picture shows the main screen of the LCP :


| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_mainscreen.png](.//lcp_mainscreen.png)![lcp_mainscreen.png](.//lcp_mainscreen.png)![lcp_mainscreen.png](.//lcp_mainscreen.png)![lcp_mainscreen.png](.//lcp_mainscreen.png) | This is main menu, to configure ADK logging:


 Application - configuration for single application

 Syslog - configuration for global syslog

 Destination - configuration where to send/store logs

 Transfer Logs - Transfers syslog logs to external drive 

 Version - information about LCP, Liblog and Syslog version   |



### LCP application menu


| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_application_menu.png](.//lcp_application_menu.png)![lcp_application_menu.png](.//lcp_application_menu.png)![lcp_application_menu.png](.//lcp_application_menu.png)![lcp_application_menu.png](.//lcp_application_menu.png) | This is application configuraton menu:


Create config - create new logging configuration for application

Edit config - edit already existing application logging configuration

Remove config - remove existing application configuration

Apply config - applys new/changed configuration   |



| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_application_settings1.png](.//lcp_application_settings1.png)![lcp_application_settings1.png](.//lcp_application_settings1.png)![lcp_application_settings1.png](.//lcp_application_settings1.png)![lcp_application_settings1.png](.//lcp_application_settings1.png) | Application configuration:


APPID - same as used in LOGAPI_INIT(APPID)

Enabled - enable/disable logs from application

Verbosity -   |
| ![lcp_application_settings2.png](.//lcp_application_settings2.png)![lcp_application_settings2.png](.//lcp_application_settings2.png)![lcp_application_settings2.png](.//lcp_application_settings2.png)![lcp_application_settings2.png](.//lcp_application_settings2.png) | Application configuration:


Log mask - Can set which logs to see from application   |



| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_application_list.png](.//lcp_application_list.png)![lcp_application_list.png](.//lcp_application_list.png)![lcp_application_list.png](.//lcp_application_list.png)![lcp_application_list.png](.//lcp_application_list.png) | When editing/removing application configuration list of all configurations is showed   |



### LCP syslog settings


| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_syslog_settings1.png](.//lcp_syslog_settings1.png)![lcp_syslog_settings1.png](.//lcp_syslog_settings1.png)![lcp_syslog_settings1.png](.//lcp_syslog_settings1.png)![lcp_syslog_settings1.png](.//lcp_syslog_settings1.png) | Syslog configuration:


 Destination - where to send/store logs (more options under Main menu -> Destinations

 Log level - max level of log message. See [Log masks] for detailed description of each log level   |
| ![lcp_syslog_settings2.png](.//lcp_syslog_settings2.png)![lcp_syslog_settings2.png](.//lcp_syslog_settings2.png)![lcp_syslog_settings2.png](.//lcp_syslog_settings2.png)![lcp_syslog_settings2.png](.//lcp_syslog_settings2.png) | Syslog configuration:


 Log format - syslog daemon will compose messages according to chosen format   |



### LCP destination menu


| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_destination_menu.png](.//lcp_destination_menu.png)![lcp_destination_menu.png](.//lcp_destination_menu.png)![lcp_destination_menu.png](.//lcp_destination_menu.png)![lcp_destination_menu.png](.//lcp_destination_menu.png) | Destination menu:


File settings

Serial settings

UDP settings
 |



| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_destination_file.png](.//lcp_destination_file.png)![lcp_destination_file.png](.//lcp_destination_file.png)![lcp_destination_file.png](.//lcp_destination_file.png)![lcp_destination_file.png](.//lcp_destination_file.png) | File settings:


File name - name of file where to write logs

 Number of files - how many files keep for log rotation. Range: 1..99 

Max file size (in Kb) - max size of each file. Range: 1..4096

**Notice:**

Device flash section is with size of 12MB (compression is used).


This limits to aprox. 40 MB of uncompressed syslog messages as max.   |



| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_destination_serial.png](.//lcp_destination_serial.png)![lcp_destination_serial.png](.//lcp_destination_serial.png)![lcp_destination_serial.png](.//lcp_destination_serial.png)![lcp_destination_serial.png](.//lcp_destination_serial.png) | Serial settings:


Port number - number of pourt where to send log messages   |



| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_destination_udp.png](.//lcp_destination_udp.png)![lcp_destination_udp.png](.//lcp_destination_udp.png)![lcp_destination_udp.png](.//lcp_destination_udp.png)![lcp_destination_udp.png](.//lcp_destination_udp.png) | UDP settings:


IP - IP where to send log messages

Port - port of IP where to send log messages   |



### LCP version info


| Screenshot  | Hints   |
|  -------- | -------- |
| ![lcp_version.png](.//lcp_version.png)![lcp_version.png](.//lcp_version.png)![lcp_version.png](.//lcp_version.png)![lcp_version.png](.//lcp_version.png) | Versions:


 lcp version - LCP version

liblog version - liblog version used

 syslog version - version of syslogc   |



## Miscellaneous API

Listed below are the miscellaneous APIs used for logging


| Macro  | Description   |
|  -------- | -------- |
| `LOGAPI_RECONFIG_NOTIFY()` | Notifies all applications and channels to re-read their configuration files.   |
| `LOGAPI_DUMP_SYS_INFO` | Outputs essential system info such as OS version, RAM size, model number and so on.   |
| `log_getVersion()` | Returns string with version of a library   |
| `Log_GetSvcVersion()` | Returns string with version of a syslog daemon   |
| `LOGAPI_PRINT_CALLSTACK(level)` | Prints actual call stack. Implemented only for V/OS.  

 |
| `dumpLogs(location, fileName)` | Dumps logs to /tmp/ folder (0) or to external storage (1) . File name "logs" will create file "logs.tgz"   |



# System Setup and Requirements


## Deploy liblog

liblog ships in two forms – as a shared object (`liblog.so`) and a static library (`liblog-static.a`).

To use liblog on V/OS, one must link against libsvc_logmgr.so (located under **SDK_DIR%/usr/local/lib**).

In order for linker to resolve symbols in a correct manner, path to said libraries has to be put after a path to `liblog-static.a`.


There is also a `[syslogcmd.h](syslogcmd_8h.md#file-syslogcmd.h)` with API for controlling syslog daemon.


## VOS logging service

Terminal already has default syslog configuration file `user_syslog.conf`.

VOS1/VOS2 - `/mnt/flash/etc/config/syslog/user_syslog`.conf.

VOS3 - `/mnt/appdata/versioned/globalshare/syslog/user_syslog`.conf.

`Default``user_syslog.conf` content:

* enabled = 1
* log_level = 6
* number_of_files = 2
* max_logfile_size = 200
* destination = 2
* file_name = messages
* udp_host = 127.0.0.1
* udp_port = 514
* serial_com = 1
* log_format = 0

This file could be modified through syslcmd_set_XXX calls. Please refer to subsubsec_logging_configuration.


## Syslog Configuration File

This section gives an overview of parameters which can be set for syslog daemon (see **example/conf/syslog.conf** for example).

`enabled` – [1 – enabled, 0 - disabled] enables or disables syslog daemon

`destination` – sets destination for log messages.

* 0 – serial
* 1 – UDP
* 2 – File (default)
* 3 – USB [*]

[*] - USB port should be in device mode and connected to PC. Logging through serial over USB is only supported mode.

`log_level` – sets maximum level of a log message:

* 0 – LOG_EMERG
* 1 – LOG_ALERT
* 2 – LOG_CRIT
* 3 – LOG_ERR
* 4 – LOG_WARNING
* 5 – LOG_NOTICE
* 6 – LOG_INFO
* 7 – LOG_DEBUG

`file_name` – denotes the name of the output file when a file is specified as the destination

There are two log files:

* Temporary memory: /var/log/messages – Contains logs from the most recent reboot.
* Permanent memory (flash): VOS1/VOS2 - /mnt/flash/logs/system/messages. VOS3 - /mnt/sysdata/logs/messages for the system messages and /mnt/appdata/logs/messages for the user/application messages.

The `file_name` configuration parameter specifies the file name in temporary memory (VOS1/VOS2).

VOS3 does not use this; instead, it consistently uses the name 'messages'.

`max_logfile_size` – maximum log file size (in Kb) before logs get rotated

`number_of_files` – number of files to rotate, i.e `<file_name>0` would contain the most recent logs and `<file_name>9` would contain the oldest.

`send_retries` – count of retries to be attempted by daemon to resend failed message

`serial_com` – [1,2,6] when serial is set as destination, denotes COM port number

`udp_host` – when UDP is set as destination, denotes IP address of a host to which messages will be sent

`udp_port` – when UDP is set as destination, denotes port of a host to which messages will be sent

`log_format` – syslog daemon will compose messages according to chosen format.

* 0 - RFC3164:

```cpp
<priority>Mmm DD HH:MM:SS host tag[pid]: msg
```

 Example:

```cpp
<165>Aug 24 05:14:15 192.0.2.1 myproc[8710]: hello world!
```

* 1 - RFC5424:

```cpp
<priority>version YYYY-MM-DDTHH:MM:SS.MMMZ host proc pid msgid structured_data msg
```

 Example:

```cpp
<165>1 2019-02-14T05:14:15.003Z 192.0.2.1 myproc 8710-   - hello world!
```


When you install the ADK release, the logging settings will be reset to the default values. This applies to both syslog settings and channel settings. If you need to keep your settings after installing an ADK release, you can use the liblog API and update the settings programmatically, or create a configuration package with your settings and install it right after the ADK release.


# Logging on android devices

As ADK-LOGGING project was initially made for VOS devices only, there are a few differences in the way logging works on android devices, therefore it has it's own section in documentation. To use ADK-LOGGING functions on android, liblog.so which is compiled for android-arm devices should be used. ADK logging configurations are stored on the device at /sdcard/config/adk-log/. Essentially usage is the same as on VOS devices (check out [Getting Started] for code example), but with some prerequisites:


## Android permissions necessary for logging

Starting from android 10 and up, android introduces scoped storage - this interferes with functionality of liblog, as it's primary functionality of reading configuration files from a specific directory was broken. For liblog.so to function properly (read configuration files) it is necessary to grant these android permissions for apps which want to use liblog (in `AndroidManifest.xml`):

Android 10 (NEO) devices need to grant `READ_EXTERNAL_STORAGE` permission and use `android:requestLegacyExternalStorage="true"` : 

```cpp
<?xml version="1.0" encoding="utf-8"?>
  <manifest ...>
  ...
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <application android:requestLegacyExternalStorage="true">
      ...
    </application>
  </manifest>
</xml>
```

Android 13 (NEO2) and up need to request `MANAGE_EXTERNAL_STORAGE` permission to function properly: 

```cpp
<?xml version="1.0" encoding="utf-8"?>
  <manifest ...>
  ...
  <uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE"/>
  ...
  </manifest>
</xml>
```

Also, these permissions have to be requested programmatically for them to be granted (adding these permissions in the android manifest is not enough). Code simillar to this should be used to request those permissions: 

```cpp
private static final int STORAGE_PERMISSION_CODE = 23;

public boolean checkStoragePermissions() {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
        //Android is 11 (R) or above
        return Environment.isExternalStorageManager();
    } else {
        //Below android 11
        int write = ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE);
        int read = ContextCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE);

        return read == PackageManager.PERMISSION_GRANTED && write == PackageManager.PERMISSION_GRANTED;
    }
}

private void requestForStoragePermissions() {
    //Android is 11 (R) or above
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
        try {
            Intent intent = new Intent();
            intent.setAction(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION);
            Uri uri = Uri.fromParts("package", this.getPackageName(), null);
            intent.setData(uri);
            this.startActivity(intent);
        } catch (Exception e) {
            Intent intent = new Intent();
            intent.setAction(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION);
            this.startActivity(intent);
        }
    } else {
        //Below android 11
        ActivityCompat.requestPermissions(
                this,
                new String[] {
                        Manifest.permission.WRITE_EXTERNAL_STORAGE,
                        Manifest.permission.READ_EXTERNAL_STORAGE
                },
                STORAGE_PERMISSION_CODE
        );
    }
}
```

As it is best to not grant these dangerous permissions to apps, it is also possible to make liblog.so work by installing Log control panel for android. Log control panel shold be available on newest android NEO and NEO2 releases and it is possible to launch it from sysmode -> Other options -> Logging channels. Liblog.so has functionality to connect to LCP service to request config files without needing READ permissions, this means that LCP reads config files and sends this information to liblog.so to use for processing. If permissions are not granted to application which uses liblog and LCP is not installed on the device which runs android >=10, logging will not work! Either add above mentioned permissions, or install LCP and grant it MANAGE_EXTERNAL_STORAGE permissions on first run.


## Log control panel on Android

Latest android releases should have a LCP (Log control panel) application which adds possibility to add/modify/remove logging channels on the device and additionally has functionality to send config data to liblog if the application which uses liblog does not have read permissions. To launch LCP on android, open sysmode, press back arrow to enter "other options" menu and press "Logging channels" button. This should open LCP app.


| Screenshot  | Additional info   |
|  -------- | -------- |
| ![android_sysmode_enter_lcp.png](.//android_sysmode_enter_lcp.png)![android_sysmode_enter_lcp.png](.//android_sysmode_enter_lcp.png)![android_sysmode_enter_lcp.png](.//android_sysmode_enter_lcp.png)![android_sysmode_enter_lcp.png](.//android_sysmode_enter_lcp.png) | LCP can be opened by pressing "logging channels" button in sysmode "other options" menu.   |
| ![android_lcp_main.png](.//android_lcp_main.png)![android_lcp_main.png](.//android_lcp_main.png)![android_lcp_main.png](.//android_lcp_main.png)![android_lcp_main.png](.//android_lcp_main.png) | Main menu of log control panel. Press "Add new channel" to add new config, or press on existing config to edit or delete selected entry.   |
| ![android_lcp_new_config.png](.//android_lcp_new_config.png)![android_lcp_new_config.png](.//android_lcp_new_config.png)![android_lcp_new_config.png](.//android_lcp_new_config.png)![android_lcp_new_config.png](.//android_lcp_new_config.png) | LCP new config menu. press on editable fields to edit them (add name, state, logging level, etc.) and press "save channel" to save it, or cancel.   |
| ![android_lcp_edit_config.png](.//android_lcp_edit_config.png)![android_lcp_edit_config.png](.//android_lcp_edit_config.png)![android_lcp_edit_config.png](.//android_lcp_edit_config.png)![android_lcp_edit_config.png](.//android_lcp_edit_config.png) | LCP edit config menu. Press on fields to edit them, possible to save channel or delete it.   |


As logcat has less levels of logging, some liblog logging levels share the same level in logcat. 

"EMERGENCY" and "ALERT" are printed as `ANDROID_LOG_FATAL`; 

"CRITICAL" and "ERROR" are printed as `ANDROID_LOG_ERROR`; 

"WARNING" and "NOTICE" are printed as `ANDROID_LOG_WARN`.


## How to obtain logs on Android

The logcat logging utility is a command-line tool included with the Android SDK that is used to obtain log on Android.

**Example**

```cpp
$ adb logcat
```

The utility allows to define a list of tags used in the system, with priorities, by running logcat and observing the first two columns of each message, given as <priority>/<tag>

The priority is one of the following character values, ordered from lowest to highest priority:

* V: Verbose (lowest priority)
* D: Debug
* I: Info
* W: Warning
* E: Error
* F: Fatal
* S: Silent (highest priority, on which nothing is ever printed)

Here's an example of a filter expression that suppresses all log messages except those with the tag "SYSCL", at priority "Verbose" or above, and all log messages with tag "TEST", with priority "Debug" or above: 

```cpp
$ adb logcat SYSCL:V TEST:D *:S
```


# Storage Space, Log Cleanup, and Limits

By default, all log channels are disabled except for system logs, which are written to files (default destination). Log rotation periodically overwrites older files, enabling a relatively long log history with minimal flash space usage.

Two configuration options control log storage:

* `number_of_files`
* `max_logfile_size`

The default settings allow for 2 log files, each up to 2MB (200KB for VOS1/VOS2). Log rotation maintains 3 files (2 active + 1 in progress) to provide a history spanning 2 files.

For multiple debug-level channels enabled, the default may be insufficient and should be increased. However, setting very high values risks excessive flash usage.

In VOS3, automatic limits ensure logs do not consume all system data partition space. These adjust /c max_logfile_size to maintain at least 200MB of free system space.

In VOS3, applying new configurations may delete older logs if the current number of files or sizes on the flash exceed the set values. This can also be used to manually free up space: reducing /c max_logfile_size option will automatically remove all existing logs.


# Troubleshooting

One of the issues met by liblog user is that changing settings in LCP does not take an effect after editing existing logging channel or creating new one.

Make sure to press 'Apply config' menu button to apply logging settings immediately.

Otherwise these will be reread after next logging library initialization or after apropriate API function call.
![lcp_apply_config.png](.//lcp_apply_config.png)LCP Apply config![lcp_apply_config.png](.//lcp_apply_config.png)LCP Apply config![lcp_apply_config.png](.//lcp_apply_config.png)LCP Apply config![lcp_apply_config.png](.//lcp_apply_config.png)LCP Apply config


# Appendix


## Known Issues and Limitations

Be aware of the following issues and limitations you may encounter:

* HOSTNAME part of syslog message is empty unless UDP is used as a destination.
* Some packets may be lost when using UDP due to the nature of the protocol.
* BOOT messages are not being converted to syslog format.
* `LOG_ODELAY`, `LOG_NDELAY`, `LOG_NOWAIT`, `LOG_PERROR` flags in `syslog.h` currently are not being used and are present for compatibility.
* Using printf-like macros (LOGF*): passing NULL to string format specifier will cause a crash, e.g. LOGF_TRACE(“%s”, NULL).
* Applying settings to syslog daemon make it restart and few messages are lost.


## Acronym Definitions


| Acronym  | Definitions   |
|  -------- | -------- |
| ADK  | Application Development Kit   |
| API  | Application Protocol Interface   |
| LCP  | Logging Control Panel   |
| OS  | Operating System   |
| V/OS  | Verifone Operating System   |

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100

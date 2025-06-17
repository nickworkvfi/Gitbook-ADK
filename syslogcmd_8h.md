---
title: log/include/syslogcmd.h

---

# log/include/syslogcmd.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error)** { SYSL_E_OK = 0, SYSL_E_PARAM = -1, SYSL_E_CONN = -2, SYSL_E_UNEXP = -3, SYSL_E_NOT_IMPL = -99} |
| enum| **[SYSL_SRC](syslogcmd_8h.md#enum-sysl-src)** { SSRC_VERIX_BUF = 0x2, SSRC_APPS = 0x4, SSRC_ALL = 0x6} |
| enum| **[SYSL_LVL](syslogcmd_8h.md#enum-sysl-lvl)** { SYSL_LVL_EMERG, SYSL_LVL_ALERT, SYSL_LVL_CRIT, SYSL_LVL_ERROR, SYSL_LVL_WARN, SYSL_LVL_NOTICE, SYSL_LVL_INFO, SYSL_LVL_TRACE} |
| enum| **[config_option](syslogcmd_8h.md#enum-config-option)** { ENABLED = 0, DESTINATION = 1, SERIAL_COM = 2, UDP_HOST = 3, LOG_LEVEL = 4, UDP_PORT = 5, FILE_NAME = 6, FILE_BUF_SIZE = 7, LOG_SOURCE = 8, SEND_RETRIES = 9, MAX_LOGFILE_SIZE = 10, NUMBER_OF_FILES = 11, LOG_FORMAT = 12, FILTER_OUT_CONSOLE_LOGS = 13, MAX_ENUM_COUNT = 14} |
| enum| **[COMMUNICATION](syslogcmd_8h.md#enum-communication)** { COM, ETH, FS, USB} |
| enum| **[@7](syslogcmd_8h.md#enum-@7)** { LOGAPI_SYSL_BUFFER_LEN = 50} |

## Functions

|                | Name           |
| -------------- | -------------- |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_set_level](syslogcmd_8h.md#function-syslcmd-set-level)**(enum [SYSL_LVL](syslogcmd_8h.md#enum-sysl-lvl) lvl)<br>Sets level on syslog daemon side.  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_set_source](syslogcmd_8h.md#function-syslcmd-set-source)**(enum [SYSL_SRC](syslogcmd_8h.md#enum-sysl-src) src)<br>Sets source of log messages.  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_set_dest_UDP](syslogcmd_8h.md#function-syslcmd-set-dest-udp)**(const char * addr, int port)<br>Sets UPD as destination for messages.  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_set_dest_COM](syslogcmd_8h.md#function-syslcmd-set-dest-com)**(int serial_port)<br>Sets serial as destination for messages.  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_set_dest_FILE](syslogcmd_8h.md#function-syslcmd-set-dest-file)**(const char * filename)<br>Sets file as destination for messages.  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_apply_config](syslogcmd_8h.md#function-syslcmd-apply-config)**(void )<br>apply configuration to syslog daemon  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_set_cfg_str](syslogcmd_8h.md#function-syslcmd-set-cfg-str)**(enum [config_option](syslogcmd_8h.md#enum-config-option) option, const char * sval)<br>Sets string options(UDP host and file name) on syslog daemon side.  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_set_cfg_int](syslogcmd_8h.md#function-syslcmd-set-cfg-int)**(enum [config_option](syslogcmd_8h.md#enum-config-option) option, int ival)<br>Sets integer options(others than UDP host and file name) on syslog daemon side.  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_get_cfg_str](syslogcmd_8h.md#function-syslcmd-get-cfg-str)**(enum [config_option](syslogcmd_8h.md#enum-config-option) option, char * sval)<br>Returns string options(UDP host and file name) from syslog daemon side.  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_get_cfg_str2](syslogcmd_8h.md#function-syslcmd-get-cfg-str2)**(enum [config_option](syslogcmd_8h.md#enum-config-option) option, char * sval, unsigned int len)<br>Returns string options(UDP host and file name) from syslog daemon side.  |
| LOGAPI_PUBLIC enum [SYSL_ERROR](syslogcmd_8h.md#enum-sysl-error) | **[syslcmd_get_cfg_int](syslogcmd_8h.md#function-syslcmd-get-cfg-int)**(enum [config_option](syslogcmd_8h.md#enum-config-option) option, int * ival)<br>Returns integer options(others than UDP host and file name) on syslog daemon side.  |

## Types Documentation

### enum SYSL_ERROR

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYSL_E_OK | 0|  operation succeeded  |
| SYSL_E_PARAM | -1|  one or more paramteres are invalid  |
| SYSL_E_CONN | -2|  no connection to daemon  |
| SYSL_E_UNEXP | -3|  unexpected error while executing a function  |
| SYSL_E_NOT_IMPL | -99|  not implemented  |




codes returned by syslcmd_ API 


### enum SYSL_SRC

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SSRC_VERIX_BUF | 0x2|   |
| SSRC_APPS | 0x4|   |
| SSRC_ALL | 0x6|   |




Denotes a source of log messages 


### enum SYSL_LVL

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYSL_LVL_EMERG | |   |
| SYSL_LVL_ALERT | |   |
| SYSL_LVL_CRIT | |   |
| SYSL_LVL_ERROR | |   |
| SYSL_LVL_WARN | |   |
| SYSL_LVL_NOTICE | |   |
| SYSL_LVL_INFO | |   |
| SYSL_LVL_TRACE | |   |




Enum denotes an upper level of log messages 


### enum config_option

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ENABLED | 0|   |
| DESTINATION | 1|   |
| SERIAL_COM | 2|   |
| UDP_HOST | 3|   |
| LOG_LEVEL | 4|   |
| UDP_PORT | 5|   |
| FILE_NAME | 6|   |
| FILE_BUF_SIZE | 7|   |
| LOG_SOURCE | 8|   |
| SEND_RETRIES | 9|   |
| MAX_LOGFILE_SIZE | 10|   |
| NUMBER_OF_FILES | 11|   |
| LOG_FORMAT | 12|   |
| FILTER_OUT_CONSOLE_LOGS | 13|   |
| MAX_ENUM_COUNT | 14|   |




### enum COMMUNICATION

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| COM | |   |
| ETH | |   |
| FS | |   |
| USB | |   |




### enum @7

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| LOGAPI_SYSL_BUFFER_LEN | 50|   |





## Functions Documentation

### function syslcmd_set_level

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_level(
    enum SYSL_LVL lvl
)
```

Sets level on syslog daemon side. 

**Parameters**: 

  * **lvl** upper level of log messages 


### function syslcmd_set_source

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_source(
    enum SYSL_SRC src
)
```

Sets source of log messages. 

**Parameters**: 

  * **src** source of log messages 


### function syslcmd_set_dest_UDP

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_dest_UDP(
    const char * addr,
    int port
)
```

Sets UPD as destination for messages. 

**Parameters**: 

  * **addr** address of target host 
  * **port** port of target host 


### function syslcmd_set_dest_COM

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_dest_COM(
    int serial_port
)
```

Sets serial as destination for messages. 

**Parameters**: 

  * **serial_port** COM port to use 


### function syslcmd_set_dest_FILE

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_dest_FILE(
    const char * filename
)
```

Sets file as destination for messages. 

**Parameters**: 

  * **filename** file to write logs to 


### function syslcmd_apply_config

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_apply_config(
    void 
)
```

apply configuration to syslog daemon 

### function syslcmd_set_cfg_str

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_cfg_str(
    enum config_option option,
    const char * sval
)
```

Sets string options(UDP host and file name) on syslog daemon side. 

**Parameters**: 

  * **option** configuration option to set 
  * **sval** value to set 


### function syslcmd_set_cfg_int

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_cfg_int(
    enum config_option option,
    int ival
)
```

Sets integer options(others than UDP host and file name) on syslog daemon side. 

**Parameters**: 

  * **option** configuration option to set 
  * **ival** value to set 


### function syslcmd_get_cfg_str

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_get_cfg_str(
    enum config_option option,
    char * sval
)
```

Returns string options(UDP host and file name) from syslog daemon side. 

**Parameters**: 

  * **option** configuration option to get 
  * **sval** configuration options value 


### function syslcmd_get_cfg_str2

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_get_cfg_str2(
    enum config_option option,
    char * sval,
    unsigned int len
)
```

Returns string options(UDP host and file name) from syslog daemon side. 

**Parameters**: 

  * **option** configuration option to get 
  * **sval** configuration options value 
  * **len** string value's buffer size 


### function syslcmd_get_cfg_int

```cpp
LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_get_cfg_int(
    enum config_option option,
    int * ival
)
```

Returns integer options(others than UDP host and file name) on syslog daemon side. 

**Parameters**: 

  * **option** configuration option to get 
  * **ival** configuration options value 




## Source code

```cpp

#ifndef _SYSLOGCMD_H
#define _SYSLOGCMD_H

#include "priv/logapi_base.h"

#if defined( __cplusplus )
extern "C"
{
#endif

enum SYSL_ERROR
{
    SYSL_E_OK = 0,

    SYSL_E_PARAM = -1,

    SYSL_E_CONN = -2,

    SYSL_E_UNEXP = -3,

    SYSL_E_NOT_IMPL = -99
};

enum SYSL_SRC
{
    SSRC_VERIX_BUF = 0x2,
    SSRC_APPS = 0x4,
    SSRC_ALL = 0x6,
};

enum SYSL_LVL
{
    SYSL_LVL_EMERG,
    SYSL_LVL_ALERT,
    SYSL_LVL_CRIT,
    SYSL_LVL_ERROR,
    SYSL_LVL_WARN,
    SYSL_LVL_NOTICE,
    SYSL_LVL_INFO,
    SYSL_LVL_TRACE 
};

enum config_option
{
    ENABLED = 0,
    DESTINATION = 1,
    SERIAL_COM = 2,
    UDP_HOST = 3,
    LOG_LEVEL = 4,
    UDP_PORT = 5,
    FILE_NAME = 6,
    FILE_BUF_SIZE = 7,
    LOG_SOURCE = 8,
    SEND_RETRIES = 9,
    MAX_LOGFILE_SIZE = 10,
    NUMBER_OF_FILES = 11,
    LOG_FORMAT = 12,
    FILTER_OUT_CONSOLE_LOGS = 13,
    MAX_ENUM_COUNT = 14,
};

enum COMMUNICATION
{
    COM,
    ETH,
    FS,
    USB
};

enum
{
    LOGAPI_SYSL_BUFFER_LEN = 50, // buffer size for the syslcmd_get_cfg_str function
};

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_level(enum SYSL_LVL lvl);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_source(enum SYSL_SRC src);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_dest_UDP(const char *addr, int port);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_dest_COM(int serial_port);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_dest_FILE(const char *filename);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_apply_config(void);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_cfg_str(enum config_option option, const char *sval);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_cfg_int(enum config_option option, int ival);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_get_cfg_str(enum config_option option, char * sval);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_get_cfg_str2(enum config_option option, char * sval, unsigned int len);

LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_get_cfg_int(enum config_option option, int *ival);

#if defined( __cplusplus )
}
#endif

#endif // _SYSLOGCMD_H
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

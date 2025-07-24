---
hidden: true
title: syslogcmd.h
---

<a href="syslogcmd_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 4 #ifndef _SYSLOGCMD_H
 5 #define _SYSLOGCMD_H
 6 
 7 #include "priv/logapi_base.h"
 8 
 9 #if defined( __cplusplus )
 10 extern "C"
 11 {
 12 #endif
 13 
 15 enum SYSL_ERROR
 16 {
 18  SYSL_E_OK = 0,
 19 
 21  SYSL_E_PARAM = -1,
 22 
 24  SYSL_E_CONN = -2,
 25 
 27  SYSL_E_UNEXP = -3,
 28 
 30  SYSL_E_NOT_IMPL = -99
 31 };
 32 
 34 enum SYSL_SRC
 35 {
 36  SSRC_VERIX_BUF = 0x2,
 37  SSRC_APPS = 0x4,
 38  SSRC_ALL = 0x6,
 39 };
 40 
 42 enum SYSL_LVL
 43 {
 44  SYSL_LVL_EMERG,
 45  SYSL_LVL_ALERT,
 46  SYSL_LVL_CRIT,
 47  SYSL_LVL_ERROR,
 48  SYSL_LVL_WARN,
 49  SYSL_LVL_NOTICE,
 50  SYSL_LVL_INFO,
 51  SYSL_LVL_TRACE
 52 };
 53 
 54 enum config_option
 55 {
 56  ENABLED = 0,
 57  DESTINATION = 1,
 58  SERIAL_COM = 2,
 59  UDP_HOST = 3,
 60  LOG_LEVEL = 4,
 61  UDP_PORT = 5,
 62  FILE_NAME = 6,
 63  FILE_BUF_SIZE = 7,
 64  LOG_SOURCE = 8,
 65  SEND_RETRIES = 9,
 66  MAX_LOGFILE_SIZE = 10,
 67  NUMBER_OF_FILES = 11,
 68  LOG_FORMAT = 12,
 69  FILTER_OUT_CONSOLE_LOGS = 13,
 70  MAX_ENUM_COUNT = 14,
 71 };
 72 
 73 enum COMMUNICATION
 74 {
 75  COM,
 76  ETH,
 77  FS,
 78  USB
 79 };
 80 
 81 enum
 82 {
 83  LOGAPI_SYSL_BUFFER_LEN = 50, // buffer size for the syslcmd_get_cfg_str function
 84 };
 85 
 90 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_level(enum SYSL_LVL lvl);
 91 
 96 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_source(enum SYSL_SRC src);
 97 
 103 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_dest_UDP(const char *addr, int port);
 104 
 109 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_dest_COM(int serial_port);
 110 
 115 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_dest_FILE(const char *filename);
 116 
 120 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_apply_config(void);
 121 
 127 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_cfg_str(enum config_option option, const char *sval);
 128 
 134 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_set_cfg_int(enum config_option option, int ival);
 135 
 141 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_get_cfg_str(enum config_option option, char * sval);
 142 
 149 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_get_cfg_str2(enum config_option option, char * sval, unsigned int len);
 150 
 156 LOGAPI_PUBLIC enum SYSL_ERROR syslcmd_get_cfg_int(enum config_option option, int *ival);
 157 
 158 #if defined( __cplusplus )
 159 }
 160 #endif
 161 
 162 #endif // _SYSLOGCMD_H
```

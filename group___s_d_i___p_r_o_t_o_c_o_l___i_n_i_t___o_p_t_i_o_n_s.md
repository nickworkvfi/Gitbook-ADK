---
title: SDI Protocol Initialization Options
summary: SDI protocol configuration flags. 

---

# SDI Protocol Initialization Options

SDI protocol configuration flags. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#define-sdi-protocol-init-opt-trace-emv-cbk)** <br>trace using the EMV callback  |
|  | **[SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#define-sdi-protocol-init-opt-trace-syslog)** <br>use syslog instead of EMV callback for trace  |
|  | **[SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#define-sdi-protocol-init-opt-trace-adk-log)**  |




## Macros Documentation

### define SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK

```
#define SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK 0x01
```

trace using the EMV callback 

**Deprecated**: 

component always uses ADK LOG channel with label SDIPROT 

### define SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG

```
#define SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG 0x02
```

use syslog instead of EMV callback for trace 

**Deprecated**: 

component always uses ADK LOG channel with label SDIPROT 

### define SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG

```
#define SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG 0x04
```


**Deprecated**: 

Trace via ADK-LOG is controlled by LOG control panel 

component always uses ADK LOG channel with label SDIPROT 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
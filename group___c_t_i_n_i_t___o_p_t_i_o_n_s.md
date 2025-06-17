---
title: Options at framework initialisation
summary: Flags used in parameter options in EMV_CT_Init_Framework. 

---

# Options at framework initialisation

**Module:** **[Initialization](group___a_d_k___i_n_i_t_i_a_l_i_z_a_t_i_o_n.md)** **/** **[EMV ADK functions for initialization](group___f_u_n_c___i_n_i_t.md)**

Flags used in parameter `options` in [EMV_CT_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CT_INIT_OPT_BASE_INIT](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-base-init)** <br>base init: set options and register callback, but do not allocate memory. Useful on devices without contact EMV like UX410.  |
|  | **[EMV_CT_INIT_OPT_L1_DUMP](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-l1-dump)**  |
|  | **[EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode)**  |
|  | **[EMV_CT_INIT_OPT_USE_DEF_VT_CAPK](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-use-def-vt-capk)** <br>Use "EMV_Keys.xml" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals.  |
|  | **[EMV_CT_INIT_OPT_DELETE_ALL](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-delete-all)** <br>delete all existing configuration files using the same virtual terminal  |
|  | **[EMV_CT_INIT_OPT_TRACE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace)** <br>Callback trace ([TAG_BF7F_CBK_TRACE]()), switch on EMV trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG]() or log configuration file missing or read error.  |
|  | **[EMV_CT_INIT_OPT_TRACE_CLT](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-clt)** <br>Callback trace ([TAG_BF7F_CBK_TRACE]()), switch on client trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG]() or log configuration file missing or read error.  |
|  | **[EMV_CT_INIT_OPT_TRACE_SYSLOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-syslog)** <br>Callback trace ([TAG_BF7F_CBK_TRACE]()), additionally write to syslog. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG]() or log configuration file missing or read error.  |
|  | **[EMV_CT_INIT_OPT_TRACE_ADK_LOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-adk-log)** <br>Solely use ADK-LOG for tracing. Deactivates trace callback ([TAG_BF7F_CBK_TRACE]()). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file "EMVCT".  |
|  | **[EMV_CT_INIT_OPT_TIMINGS](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-timings)** <br>measure card and terminal performance. Note: For this feature other trace output is switched off  |
|  | **[EMV_CT_INIT_OPT_SHARED_CONFIG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-shared-config)**  |
|  | **[EMV_CT_INIT_OPT_EPP_MASTER](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-epp-master)**  |
|  | **[EMV_CT_INIT_VIRT_1](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-1)** <br>virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_2](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-2)** <br>virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_3](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-3)** <br>virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_4](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-4)** <br>virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_5](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-5)** <br>virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_6](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-6)** <br>virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_7](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-7)** <br>virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_8](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-8)** <br>virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_9](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-9)** <br>virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_10](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-10)** <br>virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_11](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-11)** <br>virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_12](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-12)** <br>virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_13](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-13)** <br>virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_14](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-14)** <br>virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_15](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-15)** <br>virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_16](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-16)** <br>virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_17](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-17)** <br>virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_18](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-18)** <br>virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_19](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-19)** <br>virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X  |
|  | **[EMV_CT_INIT_VIRT_20](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-20)** <br>virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X  |




## Macros Documentation

### define EMV_CT_INIT_OPT_BASE_INIT

```
#define EMV_CT_INIT_OPT_BASE_INIT 0x00000001
```

base init: set options and register callback, but do not allocate memory. Useful on devices without contact EMV like UX410. 

### define EMV_CT_INIT_OPT_L1_DUMP

```
#define EMV_CT_INIT_OPT_L1_DUMP 0x00000002
```


**Deprecated**: 

not supported anymore as non-kernel tags are collected by default 

### define EMV_CT_INIT_OPT_CONFIG_MODE

```
#define EMV_CT_INIT_OPT_CONFIG_MODE 0x00000008
```


**Note**: Do not directly update configuration files if this option is active. 

Configuration is only written to files upon ExitFramework and ApplyConfiguration instead of written upon each configuration function or framework initialisation, which results in performance improvement. 


### define EMV_CT_INIT_OPT_USE_DEF_VT_CAPK

```
#define EMV_CT_INIT_OPT_USE_DEF_VT_CAPK 0x00000010
```

Use "EMV_Keys.xml" for the CAPKeys of ALL virtual terminals. This option is to be set by the initialization of the virtual terminal 0 only. Once set this feature applies to all virtual terminals. 

### define EMV_CT_INIT_OPT_DELETE_ALL

```
#define EMV_CT_INIT_OPT_DELETE_ALL 0x00000020
```

delete all existing configuration files using the same virtual terminal 

### define EMV_CT_INIT_OPT_TRACE

```
#define EMV_CT_INIT_OPT_TRACE 0x00000100
```

Callback trace ([TAG_BF7F_CBK_TRACE]()), switch on EMV trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG]() or log configuration file missing or read error. 

### define EMV_CT_INIT_OPT_TRACE_CLT

```
#define EMV_CT_INIT_OPT_TRACE_CLT 0x00000200
```

Callback trace ([TAG_BF7F_CBK_TRACE]()), switch on client trace. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG]() or log configuration file missing or read error. 

### define EMV_CT_INIT_OPT_TRACE_SYSLOG

```
#define EMV_CT_INIT_OPT_TRACE_SYSLOG 0x00000800
```

Callback trace ([TAG_BF7F_CBK_TRACE]()), additionally write to syslog. Only effective in case of deactivated [EMV_CT_INIT_OPT_TRACE_ADK_LOG]() or log configuration file missing or read error. 

### define EMV_CT_INIT_OPT_TRACE_ADK_LOG

```
#define EMV_CT_INIT_OPT_TRACE_ADK_LOG 0x00080000
```

Solely use ADK-LOG for tracing. Deactivates trace callback ([TAG_BF7F_CBK_TRACE]()). De-/Activation of ADK-LOG traces is determined by ADK-LOG config file "EMVCT". 

### define EMV_CT_INIT_OPT_TIMINGS

```
#define EMV_CT_INIT_OPT_TIMINGS 0x00100000
```

measure card and terminal performance. Note: For this feature other trace output is switched off 

### define EMV_CT_INIT_OPT_SHARED_CONFIG

```
#define EMV_CT_INIT_OPT_SHARED_CONFIG 0x00200000
```


**Note**: Only the processes very first [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) decides the shared config mode. 

On VOS/VOS2 use `/mnt/flash/etc/config/adkemv` for persistence instead of ` $(HOME)/flash `. VOS3: `/mnt/appdata/versioned/globalshare/sdi/emv/`. 


### define EMV_CT_INIT_OPT_EPP_MASTER

```
#define EMV_CT_INIT_OPT_EPP_MASTER 0x00400000
```


Generate a Configuration Id for every configuration change at time of persisting. Generate a checksum for every persistence file to be aware of changes via file system. The configuration id is specific to a Virtual Terminal and returned on Init Framework and when the configuration is stored to the file system. It is seen on serial interface only. 


### define EMV_CT_INIT_VIRT_1

```
#define EMV_CT_INIT_VIRT_1 0x01000000
```

virtual terminal 1: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_2

```
#define EMV_CT_INIT_VIRT_2 0x02000000
```

virtual terminal 2: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_3

```
#define EMV_CT_INIT_VIRT_3 0x03000000
```

virtual terminal 3: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_4

```
#define EMV_CT_INIT_VIRT_4 0x04000000
```

virtual terminal 4: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_5

```
#define EMV_CT_INIT_VIRT_5 0x05000000
```

virtual terminal 5: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_6

```
#define EMV_CT_INIT_VIRT_6 0x06000000
```

virtual terminal 6: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_7

```
#define EMV_CT_INIT_VIRT_7 0x07000000
```

virtual terminal 7: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_8

```
#define EMV_CT_INIT_VIRT_8 0x08000000
```

virtual terminal 8: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_9

```
#define EMV_CT_INIT_VIRT_9 0x09000000
```

virtual terminal 9: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_10

```
#define EMV_CT_INIT_VIRT_10 0x0A000000
```

virtual terminal 10: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_11

```
#define EMV_CT_INIT_VIRT_11 0x0B000000
```

virtual terminal 11: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_12

```
#define EMV_CT_INIT_VIRT_12 0x0C000000
```

virtual terminal 12: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_13

```
#define EMV_CT_INIT_VIRT_13 0x0D000000
```

virtual terminal 13: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_14

```
#define EMV_CT_INIT_VIRT_14 0x0E000000
```

virtual terminal 14: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_15

```
#define EMV_CT_INIT_VIRT_15 0x0F000000
```

virtual terminal 15: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_16

```
#define EMV_CT_INIT_VIRT_16 0x10000000
```

virtual terminal 16: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_17

```
#define EMV_CT_INIT_VIRT_17 0x11000000
```

virtual terminal 17: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_18

```
#define EMV_CT_INIT_VIRT_18 0x12000000
```

virtual terminal 18: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_19

```
#define EMV_CT_INIT_VIRT_19 0x13000000
```

virtual terminal 19: configuration and transaction not done with the standard terminal but virtual terminal No X 

### define EMV_CT_INIT_VIRT_20

```
#define EMV_CT_INIT_VIRT_20 0x14000000
```

virtual terminal 20: configuration and transaction not done with the standard terminal but virtual terminal No X 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
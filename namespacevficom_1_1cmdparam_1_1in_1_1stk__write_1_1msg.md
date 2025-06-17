---
title: vficom::cmdparam::in::stk_write::msg

---

# vficom::cmdparam::in::stk_write::msg



## Namespaces

| Name           |
| -------------- |
| **[vficom::cmdparam::in::stk_write::msg::env](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1env.md)**  |
| **[vficom::cmdparam::in::stk_write::msg::tr](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1tr.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[STKTRCommand](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg.md#enum-stktrcommand)** { STK_TR_CMD_REFRESH = 1, STK_TR_CMD_SETUP_EVENT_LIST = 5, STK_TR_CMD_SELECT_ITEM = 36, STK_TR_CMD_SETUP_MENU = 37, STK_TR_MAX_ENUM = 0x7FFFFFFF} |
| enum| **[STKENVCommand](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg.md#enum-stkenvcommand)** { STK_ENV_CMD_MENU_SELECT = 211, STK_ENV_CMD_EVENT_DOWNLOAD = 214, STK_ENV_MAX_ENUM = 0x7FFFFFFF} |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[usat_command](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg.md#variable-usat-command)** <br>string - "STKTR" or "STKENV"  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[proactCmd](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg.md#variable-proactcmd)** <br>integer - STK Cmd (STKTR Command)  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[envCmd](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg.md#variable-envcmd)** <br>integer - STK Cmd (STKENV Command)  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[parameters](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg.md#variable-parameters)** <br>object - Depends on usat_command and proactCmd/envCmd  |

## Types Documentation

### enum STKTRCommand

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| STK_TR_CMD_REFRESH | 1|   |
| STK_TR_CMD_SETUP_EVENT_LIST | 5|   |
| STK_TR_CMD_SELECT_ITEM | 36|   |
| STK_TR_CMD_SETUP_MENU | 37|   |
| STK_TR_MAX_ENUM | 0x7FFFFFFF|   |




### enum STKENVCommand

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| STK_ENV_CMD_MENU_SELECT | 211|   |
| STK_ENV_CMD_EVENT_DOWNLOAD | 214|   |
| STK_ENV_MAX_ENUM | 0x7FFFFFFF|   |






## Attributes Documentation

### variable usat_command

```cpp
const COM3_DllSpec char[] usat_command;
```

string - "STKTR" or "STKENV" 

### variable proactCmd

```cpp
const COM3_DllSpec char[] proactCmd;
```

integer - STK Cmd (STKTR Command) 

### variable envCmd

```cpp
const COM3_DllSpec char[] envCmd;
```

integer - STK Cmd (STKENV Command) 

### variable parameters

```cpp
const COM3_DllSpec char[] parameters;
```

object - Depends on usat_command and proactCmd/envCmd 




-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
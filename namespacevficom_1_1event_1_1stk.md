---
title: vficom::event::stk

---

# vficom::event::stk



## Namespaces

| Name           |
| -------------- |
| **[vficom::event::stk::menu_selection](namespacevficom_1_1event_1_1stk_1_1menu__selection.md)**  |
| **[vficom::event::stk::select_item](namespacevficom_1_1event_1_1stk_1_1select__item.md)**  |
| **[vficom::event::stk::set_up_event_list](namespacevficom_1_1event_1_1stk_1_1set__up__event__list.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[STKURCProCommand](namespacevficom_1_1event_1_1stk.md#enum-stkurcprocommand)** { SET_UP_EVENT_LIST = 5, SELECT_ITEM = 36, MENU_SELECTION = 37, STK_URC_PRO_MAX_ENUM = 0x7FFFFFFF} |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[urc](namespacevficom_1_1event_1_1stk.md#variable-urc)** <br>string - "+STKPRO:"  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[proactive_command](namespacevficom_1_1event_1_1stk.md#variable-proactive-command)** <br>integer (enum STKURCProCommand) - Type of command, for example 5 (SET UP EVENT LIST)  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[parameters](namespacevficom_1_1event_1_1stk.md#variable-parameters)** <br>object - contains parameters depending on proactive command  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[timeout](namespacevficom_1_1event_1_1stk.md#variable-timeout)** <br>integer - Timeout in milliseconds  |

## Types Documentation

### enum STKURCProCommand

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SET_UP_EVENT_LIST | 5|   |
| SELECT_ITEM | 36|   |
| MENU_SELECTION | 37|   |
| STK_URC_PRO_MAX_ENUM | 0x7FFFFFFF|   |






## Attributes Documentation

### variable urc

```cpp
const COM3_DllSpec char[] urc;
```

string - "+STKPRO:" 

### variable proactive_command

```cpp
const COM3_DllSpec char[] proactive_command;
```

integer (enum STKURCProCommand) - Type of command, for example 5 (SET UP EVENT LIST) 

### variable parameters

```cpp
const COM3_DllSpec char[] parameters;
```

object - contains parameters depending on proactive command 

### variable timeout

```cpp
const COM3_DllSpec char[] timeout;
```

integer - Timeout in milliseconds 




-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
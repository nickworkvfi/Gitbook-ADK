---
hidden: true
title: "vficom::event::stk Namespace Reference"
---

[Namespaces](#namespaces) \| [Enumerations](#enum-members) \| [Variables](#var-members)

|  |  |
|----|----|
| Namespaces |  |
|   | <a href="namespacevficom_1_1event_1_1stk_1_1menu__selection.md">menu_selection</a> |
|   | <a href="namespacevficom_1_1event_1_1stk_1_1select__item.md">select_item</a> |
|   | <a href="namespacevficom_1_1event_1_1stk_1_1set__up__event__list.md">set_up_event_list</a> |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [STKURCProCommand](#a5c9f20e9dfda7ed7ed70d7a4b3dab65c) { [SET_UP_EVENT_LIST](#a5c9f20e9dfda7ed7ed70d7a4b3dab65ca579e57dd8e1b4d3aeea89024110a8faa) = 5, [SELECT_ITEM](#a5c9f20e9dfda7ed7ed70d7a4b3dab65caff4dbb9d650bf39f32e93d17f47ed147) = 36, [MENU_SELECTION](#a5c9f20e9dfda7ed7ed70d7a4b3dab65cae26875fc20d12429767cd8101f356898) = 37, [STK_URC_PRO_MAX_ENUM](#a5c9f20e9dfda7ed7ed70d7a4b3dab65caeb25216260e5ee725a779863deb4d0a3) = 0x7FFFFFFF } |

|  |  |
|----|----|
| Variables |  |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [urc](#a12f36db82ddc1060e18dd1ff5cfb39b9) \[\] |
|   | string - \"+STKPRO:\" [More\...](#a12f36db82ddc1060e18dd1ff5cfb39b9)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [proactive_command](#abd252468ae3a3e5279e052c25dc799ef) \[\] |
|   | integer (enum STKURCProCommand) - Type of command, for example 5 (SET UP EVENT LIST) [More\...](#abd252468ae3a3e5279e052c25dc799ef)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [parameters](#a718fb933f922f59d50270984ea93ec91) \[\] |
|   | object - contains parameters depending on proactive command [More\...](#a718fb933f922f59d50270984ea93ec91)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [timeout](#a2b4a0dc4f4178cae0b1a5abb7d0122de) \[\] |
|   | integer - Timeout in milliseconds [More\...](#a2b4a0dc4f4178cae0b1a5abb7d0122de)<br/> |

## EnumerationType Documentation {#enumeration-type-documentation}

## STKURCProCommand <a href="#a5c9f20e9dfda7ed7ed70d7a4b3dab65c" id="a5c9f20e9dfda7ed7ed70d7a4b3dab65c"></a>

<p>enum [STKURCProCommand](#a5c9f20e9dfda7ed7ed70d7a4b3dab65c)</p>

| Enumerator            |     |
|-----------------------|-----|
| SET_UP_EVENT_LIST     |     |
| SELECT_ITEM           |     |
| MENU_SELECTION        |     |
| STK_URC_PRO_MAX_ENUM  |     |

## VariableDocumentation {#variable-documentation}

## parameters <a href="#a718fb933f922f59d50270984ea93ec91" id="a718fb933f922f59d50270984ea93ec91"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char parameters\[\]</p>

object - contains parameters depending on proactive command

## proactive_command <a href="#abd252468ae3a3e5279e052c25dc799ef" id="abd252468ae3a3e5279e052c25dc799ef"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char proactive_command\[\]</p>

integer (enum STKURCProCommand) - Type of command, for example 5 (SET UP EVENT LIST)

## timeout <a href="#a2b4a0dc4f4178cae0b1a5abb7d0122de" id="a2b4a0dc4f4178cae0b1a5abb7d0122de"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char timeout\[\]</p>

integer - Timeout in milliseconds

## urc <a href="#a12f36db82ddc1060e18dd1ff5cfb39b9" id="a12f36db82ddc1060e18dd1ff5cfb39b9"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char urc\[\]</p>

string - \"+STKPRO:\"

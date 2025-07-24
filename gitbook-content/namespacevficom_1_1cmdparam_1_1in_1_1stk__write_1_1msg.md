---
hidden: true
title: "vficom::cmdparam::in::stk_write::msg Namespace Reference"
---

[Namespaces](#namespaces) \| [Enumerations](#enum-members) \| [Variables](#var-members)

|  |  |
|----|----|
| Namespaces |  |
|   | <a href="namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1env.md">env</a> |
|   | <a href="namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1tr.md">tr</a> |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [STKTRCommand](#a234450c2c657a6d5316bb8188dbbcd5d) {<br/>  [STK_TR_CMD_REFRESH](#a234450c2c657a6d5316bb8188dbbcd5daa0ce25efd0caa8725b776aceb8584bb2) = 1, [STK_TR_CMD_SETUP_EVENT_LIST](#a234450c2c657a6d5316bb8188dbbcd5da3de966187a2f9d6339188503d787a674) = 5, [STK_TR_CMD_SELECT_ITEM](#a234450c2c657a6d5316bb8188dbbcd5da657d0e99bbd4f535e31c71cb691489ed) = 36, [STK_TR_CMD_SETUP_MENU](#a234450c2c657a6d5316bb8188dbbcd5da94d7ddbc8ab0069214ef7eb64a64fe2d) = 37,<br/>  [STK_TR_MAX_ENUM](#a234450c2c657a6d5316bb8188dbbcd5dabf2853413140a0f6b3e77d4ad6b45967) = 0x7FFFFFFF<br/>} |
| enum   | [STKENVCommand](#a37a60d6078b7db799def050b0df8575c) { [STK_ENV_CMD_MENU_SELECT](#a37a60d6078b7db799def050b0df8575ca18c3b5c6924431fbdf0b17510f1bd520) = 211, [STK_ENV_CMD_EVENT_DOWNLOAD](#a37a60d6078b7db799def050b0df8575ca9df31c97c0de893a08eb38b005bdc223) = 214, [STK_ENV_MAX_ENUM](#a37a60d6078b7db799def050b0df8575caec02de6efa9b755fe3ba03d6beb071a5) = 0x7FFFFFFF } |

|  |  |
|----|----|
| Variables |  |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [usat_command](#ab32f80509076e8fdd54922a117a14c6c) \[\] |
|   | string - \"STKTR\" or \"STKENV\" [More\...](#ab32f80509076e8fdd54922a117a14c6c)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [proactCmd](#a78378fa24e0c0249b786249d20122555) \[\] |
|   | integer - STK Cmd (STKTR Command) [More\...](#a78378fa24e0c0249b786249d20122555)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [envCmd](#adef2c7a812cfb2e8b8f4c1197d8e97a3) \[\] |
|   | integer - STK Cmd (STKENV Command) [More\...](#adef2c7a812cfb2e8b8f4c1197d8e97a3)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [parameters](#a718fb933f922f59d50270984ea93ec91) \[\] |
|   | object - Depends on usat_command and proactCmd/envCmd [More\...](#a718fb933f922f59d50270984ea93ec91)<br/> |

## EnumerationType Documentation {#enumeration-type-documentation}

## STKENVCommand <a href="#a37a60d6078b7db799def050b0df8575c" id="a37a60d6078b7db799def050b0df8575c"></a>

<p>enum [STKENVCommand](#a37a60d6078b7db799def050b0df8575c)</p>

| Enumerator                  |     |
|-----------------------------|-----|
| STK_ENV_CMD_MENU_SELECT     |     |
| STK_ENV_CMD_EVENT_DOWNLOAD  |     |
| STK_ENV_MAX_ENUM            |     |

## STKTRCommand <a href="#a234450c2c657a6d5316bb8188dbbcd5d" id="a234450c2c657a6d5316bb8188dbbcd5d"></a>

<p>enum [STKTRCommand](#a234450c2c657a6d5316bb8188dbbcd5d)</p>

| Enumerator                   |     |
|------------------------------|-----|
| STK_TR_CMD_REFRESH           |     |
| STK_TR_CMD_SETUP_EVENT_LIST  |     |
| STK_TR_CMD_SELECT_ITEM       |     |
| STK_TR_CMD_SETUP_MENU        |     |
| STK_TR_MAX_ENUM              |     |

## VariableDocumentation {#variable-documentation}

## envCmd <a href="#adef2c7a812cfb2e8b8f4c1197d8e97a3" id="adef2c7a812cfb2e8b8f4c1197d8e97a3"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char envCmd\[\]</p>

integer - STK Cmd (STKENV Command)

## parameters <a href="#a718fb933f922f59d50270984ea93ec91" id="a718fb933f922f59d50270984ea93ec91"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char parameters\[\]</p>

object - Depends on usat_command and proactCmd/envCmd

## proactCmd <a href="#a78378fa24e0c0249b786249d20122555" id="a78378fa24e0c0249b786249d20122555"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char proactCmd\[\]</p>

integer - STK Cmd (STKTR Command)

## usat_command <a href="#ab32f80509076e8fdd54922a117a14c6c" id="ab32f80509076e8fdd54922a117a14c6c"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char usat_command\[\]</p>

string - \"STKTR\" or \"STKENV\"

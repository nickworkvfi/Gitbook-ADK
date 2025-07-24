---
hidden: true
title: Defines for LED statesLED control
---

[Macros](#define-members)

LED states to be used in <a href="group___a_d_k___l_e_d.md#gabd80a7d1c3dbc5604604b02c20620f51">EMV_CTLS_LED()</a> [More\...](#details)

Collaboration diagram for Defines for LED states:

![](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [CONTACTLESS_LED_OFF](#gadc504080af86aa553677ebc781eaea59)   0x00 |
|   | Switch LED Off. [More\...](#gadc504080af86aa553677ebc781eaea59)<br/> |
| #define  | [CONTACTLESS_LED_ON](#gad98305ca6e2f94ba3c16b90f2f3da97d)   0x01 |
|   | Switch LED On. [More\...](#gad98305ca6e2f94ba3c16b90f2f3da97d)<br/> |
| #define  | [CONTACTLESS_LED_IDLE_BLINK](#gaf2fd36bfa05f6ae684492ebdd5b47ca0)   0x02 |
|   | enable blinking: ALWAYS LED 1 is used for blinking, fixed timing according to specs [More\...](#gaf2fd36bfa05f6ae684492ebdd5b47ca0)<br/> |
| #define  | [CONTACTLESS_LED_ONLINE_BLINK](#ga605be81fd4e77828a6eac9b41d86eeaa)   0x03 |
|   | enable blinking: ALWAYS LED 3 is used for blinking, fixed timing according to specs.<br/>Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a> [More\...](#ga605be81fd4e77828a6eac9b41d86eeaa)<br/> |
| #define  | [CONTACTLESS_LED_HANDLE_EOT_SILENT](#gaec3df5d04660c9766246c8bbd33389a8)   0x04 |
|   | End of Transaction, disable LED in the background after required 750msecs.<br/>Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>. [More\...](#gaec3df5d04660c9766246c8bbd33389a8)<br/> |
| #define  | [CONTACTLESS_LED_HANDLE_EOT_SUCCESS](#ga4bab0d93ec30b5127e214c20ef0dd5a3)   0x05 |
|   | End of Transaction, disable LED in the background after required 750msecs + Beep Success.<br/>Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>. [More\...](#ga4bab0d93ec30b5127e214c20ef0dd5a3)<br/> |
| #define  | [CONTACTLESS_LED_HANDLE_EOT_FAIL](#ga71007d6d0a359120b4d8e7b862642e1c)   0x06 |
|   | End of Transaction, disable LED in the background after required 750msecs + Beep Fail.<br/>Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>. [More\...](#ga71007d6d0a359120b4d8e7b862642e1c)<br/> |
| #define  | [CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK](#gabc8b3a2ecf2175708b443be9485b9c09)   0x07 |
|   | End of Transaction, LED 4 is blinking 4 times + Beep Fail.<br/>Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>. [More\...](#gabc8b3a2ecf2175708b443be9485b9c09)<br/> |
| #define  | [CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3](#ga65d13f18670874d054003cbe73554765)   0x08 |
|   | End of Transaction, LED 1-3 are blinking 4 times + Beep Fail.<br/>Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>. [More\...](#ga65d13f18670874d054003cbe73554765)<br/> |

## DetailedDescription {#detailed-description}

LED states to be used in <a href="group___a_d_k___l_e_d.md#gabd80a7d1c3dbc5604604b02c20620f51">EMV_CTLS_LED()</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## CONTACTLESS_LED_HANDLE_EOT_FAIL <a href="#ga71007d6d0a359120b4d8e7b862642e1c" id="ga71007d6d0a359120b4d8e7b862642e1c"></a>

<p>#define CONTACTLESS_LED_HANDLE_EOT_FAIL   0x06</p>

End of Transaction, disable LED in the background after required 750msecs + Beep Fail.
Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>.

## CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK <a href="#gabc8b3a2ecf2175708b443be9485b9c09" id="gabc8b3a2ecf2175708b443be9485b9c09"></a>

<p>#define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK   0x07</p>

End of Transaction, LED 4 is blinking 4 times + Beep Fail.
Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>.

## CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3 <a href="#ga65d13f18670874d054003cbe73554765" id="ga65d13f18670874d054003cbe73554765"></a>

<p>#define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3   0x08</p>

End of Transaction, LED 1-3 are blinking 4 times + Beep Fail.
Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>.

## CONTACTLESS_LED_HANDLE_EOT_SILENT <a href="#gaec3df5d04660c9766246c8bbd33389a8" id="gaec3df5d04660c9766246c8bbd33389a8"></a>

<p>#define CONTACTLESS_LED_HANDLE_EOT_SILENT   0x04</p>

End of Transaction, disable LED in the background after required 750msecs.
Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>.

## CONTACTLESS_LED_HANDLE_EOT_SUCCESS <a href="#ga4bab0d93ec30b5127e214c20ef0dd5a3" id="ga4bab0d93ec30b5127e214c20ef0dd5a3"></a>

<p>#define CONTACTLESS_LED_HANDLE_EOT_SUCCESS   0x05</p>

End of Transaction, disable LED in the background after required 750msecs + Beep Success.
Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>.

## CONTACTLESS_LED_IDLE_BLINK <a href="#gaf2fd36bfa05f6ae684492ebdd5b47ca0" id="gaf2fd36bfa05f6ae684492ebdd5b47ca0"></a>

<p>#define CONTACTLESS_LED_IDLE_BLINK   0x02</p>

enable blinking: ALWAYS LED 1 is used for blinking, fixed timing according to specs

## CONTACTLESS_LED_OFF <a href="#gadc504080af86aa553677ebc781eaea59" id="gadc504080af86aa553677ebc781eaea59"></a>

<p>#define CONTACTLESS_LED_OFF   0x00</p>

Switch LED Off.

## CONTACTLESS_LED_ON <a href="#gad98305ca6e2f94ba3c16b90f2f3da97d" id="gad98305ca6e2f94ba3c16b90f2f3da97d"></a>

<p>#define CONTACTLESS_LED_ON   0x01</p>

Switch LED On.

## CONTACTLESS_LED_ONLINE_BLINK <a href="#ga605be81fd4e77828a6eac9b41d86eeaa" id="ga605be81fd4e77828a6eac9b41d86eeaa"></a>

<p>#define CONTACTLESS_LED_ONLINE_BLINK   0x03</p>

enable blinking: ALWAYS LED 3 is used for blinking, fixed timing according to specs.
Option not available in mode <a href="group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#gaebe5c99e3868a601e1cfc0052543377c">CONTACTLESS_LED_MODE_API</a>

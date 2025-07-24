---
hidden: true
title: Defines for LED modesLED control
---

[Macros](#define-members)

LED modes to be used in <a href="group___a_d_k___l_e_d.md#ga62eb0e6232dad59e94b75205493fa06d">EMV_CTLS_LED_SetMode()</a> [More\...](#details)

Collaboration diagram for Defines for LED modes:

![](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [CONTACTLESS_LED_MODE_OFF](#ga748c939db096be423b016ec931712a09)   0x00 |
|   | switching LEDs must be done by the application [More\...](#ga748c939db096be423b016ec931712a09)<br/> |
| #define  | [CONTACTLESS_LED_MODE_API](#gaebe5c99e3868a601e1cfc0052543377c)   0x01 |
|   | switching LEDs must be done by the API function <a href="group___a_d_k___l_e_d.md#gabd80a7d1c3dbc5604604b02c20620f51">EMV_CTLS_LED()</a> [More\...](#gaebe5c99e3868a601e1cfc0052543377c)<br/> |
| #define  | [CONTACTLESS_LED_MODE_EMV](#ga3a2b6e39e1596fa43ea5edef0a0ed4d4)   0x02 |
|   | switching LEDs is done by EMV framework on its own (this is the initial mode) [More\...](#ga3a2b6e39e1596fa43ea5edef0a0ed4d4)<br/> |

## DetailedDescription {#detailed-description}

LED modes to be used in <a href="group___a_d_k___l_e_d.md#ga62eb0e6232dad59e94b75205493fa06d">EMV_CTLS_LED_SetMode()</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## CONTACTLESS_LED_MODE_API <a href="#gaebe5c99e3868a601e1cfc0052543377c" id="gaebe5c99e3868a601e1cfc0052543377c"></a>

<p>#define CONTACTLESS_LED_MODE_API   0x01</p>

switching LEDs must be done by the API function <a href="group___a_d_k___l_e_d.md#gabd80a7d1c3dbc5604604b02c20620f51">EMV_CTLS_LED()</a>

## CONTACTLESS_LED_MODE_EMV <a href="#ga3a2b6e39e1596fa43ea5edef0a0ed4d4" id="ga3a2b6e39e1596fa43ea5edef0a0ed4d4"></a>

<p>#define CONTACTLESS_LED_MODE_EMV   0x02</p>

switching LEDs is done by EMV framework on its own (this is the initial mode)

## CONTACTLESS_LED_MODE_OFF <a href="#ga748c939db096be423b016ec931712a09" id="ga748c939db096be423b016ec931712a09"></a>

<p>#define CONTACTLESS_LED_MODE_OFF   0x00</p>

switching LEDs must be done by the application

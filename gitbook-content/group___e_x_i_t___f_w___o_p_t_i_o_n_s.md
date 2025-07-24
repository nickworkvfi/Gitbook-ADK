---
hidden: true
title: Options for Exit FrameworkInitialization » EMV ADK functions for initialization
---

[Macros](#define-members)

Meaning of <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga7809d602c4a9b6f1d35eac38754011fc">TAG_DF8F0A_EXIT_OPTIONS</a>, see also <a href="group___f_u_n_c___i_n_i_t.md#ga8b752de3c5de067e225dd1f09eabdf35">EMV_CTLS_Exit_Framework_extended()</a> [More\...](#details)

Collaboration diagram for Options for Exit Framework:

![](group___e_x_i_t___f_w___o_p_t_i_o_n_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EXIT_CTLS_BASE](#gab2b67f48d269a791a9f5641a649f4b83)   0x00 |
| #define  | [EXIT_CTLS_STOP_LEDS](#gac011593c55b2ccb244dd6e9cb220db3b)   0x01 |
|   | additionally stop LED-Blinking-thread when exit [More\...](#gac011593c55b2ccb244dd6e9cb220db3b)<br/> |
| #define  | [EXIT_CTLS_COMPLETE](#ga2d511cd481102b916dd4025d6064a8ea)   0x02 |
| #define  | [EXIT_CTLS_SEND_CALLBACK](#gac55185bbb2ec33f5d55ee91bd676680e)   [EXIT_CTLS_COMPLETE](#ga2d511cd481102b916dd4025d6064a8ea) |
| #define  | [EXIT_CT_BASE](#gab856684812a80803b38ceb5ed4db8ff9)   0x00 |
| #define  | [EXIT_CT_COMPLETE](#gac611449024c44063379ad513c60d2983)   0x01 |
|   | dlclose all modules [More\...](#gac611449024c44063379ad513c60d2983)<br/> |

## DetailedDescription {#detailed-description}

Meaning of <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga7809d602c4a9b6f1d35eac38754011fc">TAG_DF8F0A_EXIT_OPTIONS</a>, see also <a href="group___f_u_n_c___i_n_i_t.md#ga8b752de3c5de067e225dd1f09eabdf35">EMV_CTLS_Exit_Framework_extended()</a>

Meaning of <a href="group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#ga7809d602c4a9b6f1d35eac38754011fc">TAG_DF8F0A_EXIT_OPTIONS</a>, see also <a href="group___f_u_n_c___i_n_i_t.md#ga151d98c3faeb382103f4bd9ae6b5b708">EMV_CT_Exit_Framework_extended()</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## EXIT_CT_BASE <a href="#gab856684812a80803b38ceb5ed4db8ff9" id="gab856684812a80803b38ceb5ed4db8ff9"></a>

<p>#define EXIT_CT_BASE   0x00</p>

set Framework to base-initialised state. Free memory Transactions not possible

## EXIT_CT_COMPLETE <a href="#gac611449024c44063379ad513c60d2983" id="gac611449024c44063379ad513c60d2983"></a>

<p>#define EXIT_CT_COMPLETE   0x01</p>

dlclose all modules

set Framework to uninitialised state.

## EXIT_CTLS_BASE <a href="#gab2b67f48d269a791a9f5641a649f4b83" id="gab2b67f48d269a791a9f5641a649f4b83"></a>

<p>#define EXIT_CTLS_BASE   0x00</p>

set Framework to base-initialised state. Free memory Transactions not possible

## EXIT_CTLS_COMPLETE <a href="#ga2d511cd481102b916dd4025d6064a8ea" id="ga2d511cd481102b916dd4025d6064a8ea"></a>

<p>#define EXIT_CTLS_COMPLETE   0x02</p>

set Framework to uninitialised state. Led-Blinking No callbacks will be send after this. Send last Callback with TAG_BF0F_EXIT_CALLBACK_THREAD

## EXIT_CTLS_SEND_CALLBACK <a href="#gac55185bbb2ec33f5d55ee91bd676680e" id="gac55185bbb2ec33f5d55ee91bd676680e"></a>

<p>#define EXIT_CTLS_SEND_CALLBACK   [EXIT_CTLS_COMPLETE](#ga2d511cd481102b916dd4025d6064a8ea)</p>

**<a href="deprecated.md#_deprecated000049">Deprecated:</a>** use [EXIT_CTLS_COMPLETE](#ga2d511cd481102b916dd4025d6064a8ea)

## EXIT_CTLS_STOP_LEDS <a href="#gac011593c55b2ccb244dd6e9cb220db3b" id="gac011593c55b2ccb244dd6e9cb220db3b"></a>

<p>#define EXIT_CTLS_STOP_LEDS   0x01</p>

additionally stop LED-Blinking-thread when exit

set Framework to base-initialised state.

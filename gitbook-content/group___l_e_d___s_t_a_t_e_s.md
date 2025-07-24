---
hidden: true
title: LED states
---

[Macros](#define-members)

These are the states of the three MSR LEDs which can be set by <a href="msr_8h.md#abca7e8953c8430d80f51c867c7699fa6">MSR_SwitchLeds()</a>. On devices that don\'t have multicolored LEDs, all \"color defines\" are equivalent and imply \"LED on\". As there is currently no device with multicolored LEDs, multicolor feature is not implemented yet. [More\...](#details)

|          |                                                                |
|----------|----------------------------------------------------------------|
| Macros   |                                                                |
| #define  | [MSR_LED_OFF](#ga732d5b4b7e9dc86936491616790f521c)   0x0000    |
| #define  | [MSR_LED_WHITE](#gaf154b2af61487136381570a0a65eae95)   0x0001  |
| #define  | [MSR_LED_RED](#ga9d645bdc79cf473ad1a4cb2c16e0d540)   0x0002    |
| #define  | [MSR_LED_GREEN](#ga2e04bf1f17254549f2b8d591a4ea9474)   0x0003  |
| #define  | [MSR_LED_BLUE](#ga02373c78ce2427317ac035d08e1fdc17)   0x0004   |
| #define  | [MSR_LED_YELLOW](#ga5ed7fb7eb095670a3901df7f3ddebc50)   0x0005 |
| #define  | [MSR_LED_BLINK](#gac0602288caa7d6664024a579091ccaa2)   0x0100  |

## DetailedDescription {#detailed-description}

These are the states of the three MSR LEDs which can be set by <a href="msr_8h.md#abca7e8953c8430d80f51c867c7699fa6">MSR_SwitchLeds()</a>. On devices that don\'t have multicolored LEDs, all \"color defines\" are equivalent and imply \"LED on\". As there is currently no device with multicolored LEDs, multicolor feature is not implemented yet.

## MacroDefinition Documentation {#macro-definition-documentation}

## MSR_LED_BLINK <a href="#gac0602288caa7d6664024a579091ccaa2" id="gac0602288caa7d6664024a579091ccaa2"></a>

<p>#define MSR_LED_BLINK   0x0100</p>

LED blinks (500ms on, 500ms off), must be combined with one of the \"color defines\".

## MSR_LED_BLUE <a href="#ga02373c78ce2427317ac035d08e1fdc17" id="ga02373c78ce2427317ac035d08e1fdc17"></a>

<p>#define MSR_LED_BLUE   0x0004</p>

LED shines blue.

## MSR_LED_GREEN <a href="#ga2e04bf1f17254549f2b8d591a4ea9474" id="ga2e04bf1f17254549f2b8d591a4ea9474"></a>

<p>#define MSR_LED_GREEN   0x0003</p>

LED shines green.

## MSR_LED_OFF <a href="#ga732d5b4b7e9dc86936491616790f521c" id="ga732d5b4b7e9dc86936491616790f521c"></a>

<p>#define MSR_LED_OFF   0x0000</p>

LED is switched off.

## MSR_LED_RED <a href="#ga9d645bdc79cf473ad1a4cb2c16e0d540" id="ga9d645bdc79cf473ad1a4cb2c16e0d540"></a>

<p>#define MSR_LED_RED   0x0002</p>

LED shines red.

## MSR_LED_WHITE <a href="#gaf154b2af61487136381570a0a65eae95" id="gaf154b2af61487136381570a0a65eae95"></a>

<p>#define MSR_LED_WHITE   0x0001</p>

LED shines white.

## MSR_LED_YELLOW <a href="#ga5ed7fb7eb095670a3901df7f3ddebc50" id="ga5ed7fb7eb095670a3901df7f3ddebc50"></a>

<p>#define MSR_LED_YELLOW   0x0005</p>

LED shines yellow.

---
hidden: true
title: leds.h
---

<a href="leds_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 8 #include "dllspec.h"
 9 
 10 namespace vfisysinfo {
 11 
 12 // System LEDs
 13 enum LEDs
 14 {
 15  CTLS_LED_NONE = 0,
 16  MSR_LED_NONE = 0,
 17  SYS_LED_NONE = 0,
 18 
 19  MSR_LED_0 = (1<<0),
 20  MSR_LED_1 = (1<<1),
 21  MSR_LED_2 = (1<<2),
 22  KEYPAD_LED = (1<<3),
 23  SMARTCARD_LED = (1<<4),
 24  CTLS_LED_LOGO = (1<<5),
 25  CTLS_LED_0 = (1<<6),
 26  CTLS_LED_1 = (1<<7),
 27  CTLS_LED_2 = (1<<8),
 28  CTLS_LED_3 = (1<<9),
 29  SYSTEM_LED = (1<<10),
 30  POWER_LED = (1<<11),
 31  BLUETOOTH_LED = (1<<12),
 32  MODEM_LED = (1<<13),
 33  GREEN_LED = (1<<14),
 34  YELLOW_LED = (1<<15),
 35  RED_LED = (1<<16),
 36 
 37  MSR_LED_ALL = MSR_LED_0 | MSR_LED_1 | MSR_LED_2,
 38  CTLS_LED_ALL = CTLS_LED_0 | CTLS_LED_1 | CTLS_LED_2 | CTLS_LED_3 | CTLS_LED_LOGO
 39 };
 40 
 41 // LEDs states
 42 enum LedStates
 43 {
 44  SWITCH_OFF = 0,
 45  SWITCH_ON = 1
 46 };
 47 
 48 // LED brightness
 49 enum LedBrightness
 50 {
 51  MAX_BRIGHTNESS = 255,
 52  MIN_BRIGHTNESS = 0
 53 };
 54 
 60 SYS_INFO_API int ctlsLedsChangeState( int ledMap );
 61 
 67 SYS_INFO_API int msrLedsChangeState( int ledMap );
 68 
 74 SYS_INFO_API int scrLedChangeState( int state );
 75 
 81 SYS_INFO_API int sysLedsChangeState ( int ledMap );
 82 
 88 SYS_INFO_API int msrShowRunway( int repeatCount );
 89 
 93 SYS_INFO_API int msrShowCancel( void );
 94 
 100 SYS_INFO_API int logoLedChangeState( int state );
 101 
 108 SYS_INFO_API int setBrightness( unsigned int ledMap, int brightness );
 109 
 115 SYS_INFO_API bool isBrightnessAdjustable( unsigned int ledId );
 116 }
 117 
```

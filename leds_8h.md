---
title: sys/export/sysinfo/leds.h

---

# sys/export/sysinfo/leds.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysinfo](namespacevfisysinfo.md)**  |




## Source code

```cpp
#pragma once

#include "dllspec.h"

namespace vfisysinfo {

// System LEDs
enum LEDs
{
    CTLS_LED_NONE   = 0,
    MSR_LED_NONE    = 0,
    SYS_LED_NONE    = 0,

    MSR_LED_0       = (1<<0),
    MSR_LED_1       = (1<<1),
    MSR_LED_2       = (1<<2),
    KEYPAD_LED      = (1<<3),
    SMARTCARD_LED   = (1<<4),
    CTLS_LED_LOGO   = (1<<5),
    CTLS_LED_0      = (1<<6),
    CTLS_LED_1      = (1<<7),
    CTLS_LED_2      = (1<<8),
    CTLS_LED_3      = (1<<9),
    SYSTEM_LED      = (1<<10),
    POWER_LED       = (1<<11),
    BLUETOOTH_LED   = (1<<12),
    MODEM_LED       = (1<<13),
    GREEN_LED       = (1<<14),
    YELLOW_LED      = (1<<15),
    RED_LED         = (1<<16),

    MSR_LED_ALL     = MSR_LED_0 | MSR_LED_1 | MSR_LED_2,
    CTLS_LED_ALL    = CTLS_LED_0 | CTLS_LED_1 | CTLS_LED_2 | CTLS_LED_3 | CTLS_LED_LOGO
};

// LEDs states
enum LedStates
{
    SWITCH_OFF  = 0,
    SWITCH_ON   = 1
};

// LED brightness
enum LedBrightness
{
    MAX_BRIGHTNESS  = 255,
    MIN_BRIGHTNESS  = 0
};

SYS_INFO_API int ctlsLedsChangeState( int ledMap );

SYS_INFO_API int msrLedsChangeState( int ledMap );

SYS_INFO_API int scrLedChangeState( int state );

SYS_INFO_API int sysLedsChangeState ( int ledMap );

SYS_INFO_API int msrShowRunway( int repeatCount );

SYS_INFO_API int msrShowCancel( void );

SYS_INFO_API int logoLedChangeState( int state );

SYS_INFO_API int setBrightness( unsigned int ledMap, int brightness );

SYS_INFO_API bool isBrightnessAdjustable( unsigned int ledId );
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

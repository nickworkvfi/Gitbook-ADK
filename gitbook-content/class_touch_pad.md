---
hidden: true
title: TouchPad Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods)

`#include <`<a href="touch_8h_source.md">touch.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| typedef touch_hotspot_info  | [t_hotspot](#a624447930c529a8f0a120638e7f99b6a) |
| typedef std::vector\< [t_hotspot](#a624447930c529a8f0a120638e7f99b6a) \>  | [t_hotspots](#a0109b1fdc4a1efdab0d3432c99d27195) |
| typedef void(\*  | [callback_t](#a0b604e34d37748d5a896f2cca32a346f)) (unsigned char, csd::csd_string) |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [\~TouchPad](#a9722b674f0372f17b672da52d675b4f4) () |
| void  | [setHotspots](#a5073ea9a20f6903c7f4b23aac55c7326) (const [t_hotspots](#a0109b1fdc4a1efdab0d3432c99d27195) &hotspots) |
| int  | [enterData](#ae75da121153940018e2e437cede0cc3d) (csd::csd_string &data, enum <a href="ui_8h.md#a20ac1546c46d429507d181c015aaa912">DataEntryType</a> entryType, [callback_t](#a0b604e34d37748d5a896f2cca32a346f) cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout=0, unsigned char skipCb9FFE=0) |
|   | enterData [More\...](#ae75da121153940018e2e437cede0cc3d)<br/> |
| int  | [sendHotspotsToVault](#a5a5d358995916af5b65d7e169e87cbe3) () |

|  |  |
|----|----|
| Static Public Member Functions |  |
| static <a href="class_touch_pad.md">TouchPad</a> &  | [getInstance](#adbf9affd00664ea4c37d0b5e2e6f65e0) () |

## MemberTypedef Documentation {#member-typedef-documentation}

## callback_t <a href="#a0b604e34d37748d5a896f2cca32a346f" id="a0b604e34d37748d5a896f2cca32a346f"></a>

<p>typedef void(\* callback_t(unsigned char, csd::csd_string)</p>

## t_hotspot <a href="#a624447930c529a8f0a120638e7f99b6a" id="a624447930c529a8f0a120638e7f99b6a"></a>

<p>typedef touch_hotspot_info [t_hotspot](#a624447930c529a8f0a120638e7f99b6a)</p>

## t_hotspots <a href="#a0109b1fdc4a1efdab0d3432c99d27195" id="a0109b1fdc4a1efdab0d3432c99d27195"></a>

<p>typedef std::vector\<[t_hotspot](#a624447930c529a8f0a120638e7f99b6a)\> [t_hotspots](#a0109b1fdc4a1efdab0d3432c99d27195)</p>

## Constructor& Destructor Documentation

## \~TouchPad() <a href="#a9722b674f0372f17b672da52d675b4f4" id="a9722b674f0372f17b672da52d675b4f4"></a>

<p>\~<a href="class_touch_pad.md">TouchPad</a></p>

## MemberFunction Documentation {#member-function-documentation}

## enterData() <a href="#ae75da121153940018e2e437cede0cc3d" id="ae75da121153940018e2e437cede0cc3d"></a>

<p>int enterData</p>

enterData

**Parameters**

\[out\] **data** the entered data/text \[in\] **entryType** type of data that have to be antered (PAN, Expiry Date, CVV) \[in\] **cb** callback when a digit is entered or Correction button pressed \[in\] **minInputLength** minimum number of digits to enter \[in\] **maxInputLength** maximum number of digits to enter \[in\] **timeout** timeout value for entering the data, default is infinite \[in\] **skipCb9FFE** skip sending of callback 9FFE if PAN was entered, default is to send the callback

### Returns

ok/cancel/timeout

## getInstance() <a href="#adbf9affd00664ea4c37d0b5e2e6f65e0" id="adbf9affd00664ea4c37d0b5e2e6f65e0"></a>

<p>static <a href="class_touch_pad.md">TouchPad</a>& getInstance</p>

inlinestatic

Singleton design

## sendHotspotsToVault() <a href="#a5a5d358995916af5b65d7e169e87cbe3" id="a5a5d358995916af5b65d7e169e87cbe3"></a>

<p>int sendHotspotsToVault</p>

## setHotspots() <a href="#a5073ea9a20f6903c7f4b23aac55c7326" id="a5073ea9a20f6903c7f4b23aac55c7326"></a>

<p>void setHotspots</p>

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="touch_8h_source.md">touch.h</a>
- sdi/src/<a href="touch_8cpp.md">touch.cpp</a>
- sdi/src/<a href="touch__k81_8cpp.md">touch_k81.cpp</a>

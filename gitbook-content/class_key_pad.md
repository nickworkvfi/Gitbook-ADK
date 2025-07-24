---
hidden: true
title: KeyPad Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods)

`#include <`<a href="keypad_8h_source.md">keypad.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| typedef void(\*  | [callback_t](#a0b604e34d37748d5a896f2cca32a346f)) (unsigned char, csd::csd_string) |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [\~KeyPad](#afd290cfb1284260dfed8d790275b0f67) () |
| int  | [enterData](#ae75da121153940018e2e437cede0cc3d) (csd::csd_string &data, enum <a href="ui_8h.md#a20ac1546c46d429507d181c015aaa912">DataEntryType</a> entryType, [callback_t](#a0b604e34d37748d5a896f2cca32a346f) cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout=0, unsigned char skipCb9FFE=0) |
|   | enterData [More\...](#ae75da121153940018e2e437cede0cc3d)<br/> |

|  |  |
|----|----|
| Static Public Member Functions |  |
| static <a href="class_key_pad.md">KeyPad</a> &  | [getInstance](#ad6e661fcf96101fb046bc37b5301691a) () |

## MemberTypedef Documentation {#member-typedef-documentation}

## callback_t <a href="#a0b604e34d37748d5a896f2cca32a346f" id="a0b604e34d37748d5a896f2cca32a346f"></a>

<p>typedef void(\* callback_t(unsigned char, csd::csd_string)</p>

## Constructor& Destructor Documentation

## \~KeyPad() <a href="#afd290cfb1284260dfed8d790275b0f67" id="afd290cfb1284260dfed8d790275b0f67"></a>

<p>\~<a href="class_key_pad.md">KeyPad</a></p>

## MemberFunction Documentation {#member-function-documentation}

## enterData() <a href="#ae75da121153940018e2e437cede0cc3d" id="ae75da121153940018e2e437cede0cc3d"></a>

<p>int enterData</p>

enterData

**Parameters**

\[out\] **data** the entered data/text \[in\] **entryType** type of data that have to be antered (PAN, Expiry Date, CVV) \[in\] **cb** callback when a digit is entered or Correction button pressed \[in\] **minInputLength** minimum number of digits to enter \[in\] **maxInputLength** maximum number of digits to enter \[in\] **timeout** timeout value for entering the data, default is infinite \[in\] **skipCb9FFE** skip sending of callback 9FFE if PAN was entered, default is to send the callback

### Returns

ok/cancel/timeout

## getInstance() <a href="#ad6e661fcf96101fb046bc37b5301691a" id="ad6e661fcf96101fb046bc37b5301691a"></a>

<p>static <a href="class_key_pad.md">KeyPad</a>& getInstance</p>

inlinestatic

Singleton design

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="keypad_8h_source.md">keypad.h</a>
- sdi/src/<a href="keypad_8cpp.md">keypad.cpp</a>
- sdi/src/<a href="keypad__k81_8cpp.md">keypad_k81.cpp</a>

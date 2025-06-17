---
title: KeyPad

---

# KeyPad






`#include <keypad.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(unsigned char, csd::csd_string) | **[callback_t](class_key_pad.md#typedef-callback-t)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [KeyPad](class_key_pad.md) & | **[getInstance](class_key_pad.md#function-getinstance)**() |
| | **[~KeyPad](class_key_pad.md#function-~keypad)**() |
| int | **[enterData](class_key_pad.md#function-enterdata)**(csd::csd_string & data, enum [DataEntryType](ui_8h.md#enum-dataentrytype) entryType, [callback_t](class_key_pad.md#typedef-callback-t) cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout =0, unsigned char skipCb9FFE =0)<br>enterData  |

## Public Types Documentation

### typedef callback_t

```cpp
typedef void(* callback_t(unsigned char, csd::csd_string);
```


## Public Functions Documentation

### function getInstance

```cpp
static inline KeyPad & getInstance()
```


Singleton design 


### function ~KeyPad

```cpp
~KeyPad()
```


### function enterData

```cpp
int enterData(
    csd::csd_string & data,
    enum DataEntryType entryType,
    callback_t cb,
    unsigned char minInputLength,
    unsigned char maxInputLength,
    unsigned short timeout =0,
    unsigned char skipCb9FFE =0
)
```

enterData 

**Parameters**: 

  * **data** the entered data/text 
  * **entryType** type of data that have to be antered (PAN, Expiry Date, CVV) 
  * **cb** callback when a digit is entered or Correction button pressed 
  * **minInputLength** minimum number of digits to enter 
  * **maxInputLength** maximum number of digits to enter 
  * **timeout** timeout value for entering the data, default is infinite 
  * **skipCb9FFE** skip sending of callback 9FFE if PAN was entered, default is to send the callback 


**Return**: ok/cancel/timeout 

-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
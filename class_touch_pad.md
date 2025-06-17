---
title: TouchPad

---

# TouchPad






`#include <touch.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef touch_hotspot_info | **[t_hotspot](class_touch_pad.md#typedef-t-hotspot)**  |
| typedef std::vector< [t_hotspot](class_touch_pad.md#typedef-t-hotspot) > | **[t_hotspots](class_touch_pad.md#typedef-t-hotspots)**  |
| typedef void(*)(unsigned char, csd::csd_string) | **[callback_t](class_touch_pad.md#typedef-callback-t)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [TouchPad](class_touch_pad.md) & | **[getInstance](class_touch_pad.md#function-getinstance)**() |
| | **[~TouchPad](class_touch_pad.md#function-~touchpad)**() |
| void | **[setHotspots](class_touch_pad.md#function-sethotspots)**(const [t_hotspots](class_touch_pad.md#typedef-t-hotspots) & hotspots) |
| int | **[enterData](class_touch_pad.md#function-enterdata)**(csd::csd_string & data, enum [DataEntryType](ui_8h.md#enum-dataentrytype) entryType, [callback_t](class_touch_pad.md#typedef-callback-t) cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout =0, unsigned char skipCb9FFE =0)<br>enterData  |
| int | **[sendHotspotsToVault](class_touch_pad.md#function-sendhotspotstovault)**() |

## Public Types Documentation

### typedef t_hotspot

```cpp
typedef touch_hotspot_info t_hotspot;
```


### typedef t_hotspots

```cpp
typedef std::vector<t_hotspot> t_hotspots;
```


### typedef callback_t

```cpp
typedef void(* callback_t(unsigned char, csd::csd_string);
```


## Public Functions Documentation

### function getInstance

```cpp
static inline TouchPad & getInstance()
```


Singleton design 


### function ~TouchPad

```cpp
~TouchPad()
```


### function setHotspots

```cpp
void setHotspots(
    const t_hotspots & hotspots
)
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

### function sendHotspotsToVault

```cpp
int sendHotspotsToVault()
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
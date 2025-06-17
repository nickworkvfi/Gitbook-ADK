---
title: sdi::Timer

---

# sdi::Timer






`#include <sdi_timer.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Timer](classsdi_1_1_timer.md#function-timer)**() |
| bool | **[isTimedOut](classsdi_1_1_timer.md#function-istimedout)**() |
| long | **[getRemainingTimeInMs](classsdi_1_1_timer.md#function-getremainingtimeinms)**() |
| void | **[disable](classsdi_1_1_timer.md#function-disable)**() |
| bool | **[isEnabled](classsdi_1_1_timer.md#function-isenabled)**() |
| void | **[set](classsdi_1_1_timer.md#function-set)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & tout) |
| void | **[set](classsdi_1_1_timer.md#function-set)**(unsigned tout_ms) |

## Public Functions Documentation

### function Timer

```cpp
inline Timer()
```


constructor 


### function isTimedOut

```cpp
bool isTimedOut()
```


**Return**: true for timeout else false 

check, if this timer has expired 


### function getRemainingTimeInMs

```cpp
long getRemainingTimeInMs()
```


**Return**: remaining time in milliseconds 

get remaining time in milliseconds 


### function disable

```cpp
inline void disable()
```


disable this timer 


### function isEnabled

```cpp
inline bool isEnabled()
```


**Return**: true if this timer was enabled else false 

check, if this timer was enabled by [set()](classsdi_1_1_timer.md#function-set)


### function set

```cpp
void set(
    const TimeStamp & tout
)
```


**Parameters**: 

  * **tout** timeout specified as [TimeStamp](classsdi_1_1_time_stamp.md) object 


enables and sets the timeout as [TimeStamp](classsdi_1_1_time_stamp.md) object from now 


### function set

```cpp
void set(
    unsigned tout_ms
)
```


**Parameters**: 

  * **tout_ms** timeout specified in milliseconds 


enables and sets the timeout in milliseconds from now 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
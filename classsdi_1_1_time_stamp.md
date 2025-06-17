---
title: sdi::TimeStamp

---

# sdi::TimeStamp



 [More...](#detailed-description)


`#include <timestamp.h>`

Inherits from timespec

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Unit_MS](classsdi_1_1_time_stamp_1_1_unit___m_s.md)**  |
| class | **[Unit_S](classsdi_1_1_time_stamp_1_1_unit___s.md)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [TimeStamp](classsdi_1_1_time_stamp.md) | **[Clock](classsdi_1_1_time_stamp.md#function-clock)**() |
| [TimeStamp](classsdi_1_1_time_stamp.md) | **[Monotonic](classsdi_1_1_time_stamp.md#function-monotonic)**() |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(time_t sec, long nsec) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(char sec) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(unsigned char sec) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(short sec) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(unsigned short sec) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(int sec) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(unsigned sec) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(long sec =0) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(unsigned long sec) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(float t) |
| | **[TimeStamp](classsdi_1_1_time_stamp.md#function-timestamp)**(double t) |
| [TimeStamp](classsdi_1_1_time_stamp.md) & | **[operator=](classsdi_1_1_time_stamp.md#function-operator=)**(time_t sec) |
| [TimeStamp](classsdi_1_1_time_stamp.md) & | **[operator=](classsdi_1_1_time_stamp.md#function-operator=)**(double t) |
| [TimeStamp](classsdi_1_1_time_stamp.md) & | **[operator+=](classsdi_1_1_time_stamp.md#function-operator+=)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & o) |
| [TimeStamp](classsdi_1_1_time_stamp.md) & | **[operator-=](classsdi_1_1_time_stamp.md#function-operator-=)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & o) |
| double | **[get](classsdi_1_1_time_stamp.md#function-get)**() const |
| void | **[set](classsdi_1_1_time_stamp.md#function-set)**(double t) |
| time_t | **[s](classsdi_1_1_time_stamp.md#function-s)**() const |
| long | **[ms](classsdi_1_1_time_stamp.md#function-ms)**() const |
| void | **[normalize](classsdi_1_1_time_stamp.md#function-normalize)**() |
| void | **[clear](classsdi_1_1_time_stamp.md#function-clear)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [Unit_MS](classsdi_1_1_time_stamp_1_1_unit___m_s.md) | **[MS](classsdi_1_1_time_stamp.md#variable-ms)**  |
| [Unit_S](classsdi_1_1_time_stamp_1_1_unit___s.md) | **[S](classsdi_1_1_time_stamp.md#variable-s)**  |

## Detailed Description

```cpp
class sdi::TimeStamp;
```


time utility class 

## Public Functions Documentation

### function Clock

```cpp
static TimeStamp Clock()
```


**Return**: unix time 

read realtime clock 


### function Monotonic

```cpp
static TimeStamp Monotonic()
```


**Return**: monitonic time 

read monotonic clock 


### function TimeStamp

```cpp
TimeStamp(
    time_t sec,
    long nsec
)
```


**Parameters**: 

  * **sec** seconds
  * **nsec** nanoseconds 


constuctor


### function TimeStamp

```cpp
inline TimeStamp(
    char sec
)
```


**Parameters**: 

  * **sec** seconds 


constuctor


### function TimeStamp

```cpp
inline TimeStamp(
    unsigned char sec
)
```


**Parameters**: 

  * **sec** seconds 


constuctor


### function TimeStamp

```cpp
inline TimeStamp(
    short sec
)
```


**Parameters**: 

  * **sec** seconds 


constuctor


### function TimeStamp

```cpp
inline TimeStamp(
    unsigned short sec
)
```


**Parameters**: 

  * **sec** seconds 


constuctor


### function TimeStamp

```cpp
inline TimeStamp(
    int sec
)
```


**Parameters**: 

  * **sec** seconds 


constuctor


### function TimeStamp

```cpp
inline TimeStamp(
    unsigned sec
)
```


**Parameters**: 

  * **sec** seconds 


constuctor


### function TimeStamp

```cpp
inline TimeStamp(
    long sec =0
)
```


**Parameters**: 

  * **sec** seconds 


constuctor


### function TimeStamp

```cpp
inline TimeStamp(
    unsigned long sec
)
```


**Parameters**: 

  * **sec** seconds 


constuctor


### function TimeStamp

```cpp
TimeStamp(
    float t
)
```


**Parameters**: 

  * **t** seconds 


constuctor


### function TimeStamp

```cpp
TimeStamp(
    double t
)
```


**Parameters**: 

  * **t** seconds 


constuctor


### function operator=

```cpp
inline TimeStamp & operator=(
    time_t sec
)
```


**Parameters**: 

  * **sec** seconds 


assignment operator


### function operator=

```cpp
TimeStamp & operator=(
    double t
)
```


**Parameters**: 

  * **t** seconds 


assignment operator


### function operator+=

```cpp
TimeStamp & operator+=(
    const TimeStamp & o
)
```


### function operator-=

```cpp
TimeStamp & operator-=(
    const TimeStamp & o
)
```


### function get

```cpp
inline double get() const
```


get time 


### function set

```cpp
inline void set(
    double t
)
```


set time 


### function s

```cpp
inline time_t s() const
```


**Return**: time stamp 

create second based time stamp 


### function ms

```cpp
inline long ms() const
```


**Return**: time stamp 

create millisecond based time stamp 


### function normalize

```cpp
void normalize()
```


normalize time representation 


### function clear

```cpp
inline void clear()
```


reset to 0 


## Public Attributes Documentation

### variable MS

```cpp
static Unit_MS MS;
```


Millisecond unit 


### variable S

```cpp
static Unit_S S;
```


Second unit 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
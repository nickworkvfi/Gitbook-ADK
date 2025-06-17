---
title: com_IBeacon

---

# com_IBeacon






`#include <libcom.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| enum [com_BeaconPowerLevel](libcom_8h.md#enum-com-beaconpowerlevel) | **[powerLevel](structcom___i_beacon.md#variable-powerlevel)**  |
| int | **[interval](structcom___i_beacon.md#variable-interval)**  |
| char[16] | **[uuid](structcom___i_beacon.md#variable-uuid)**  |
| u_int16_t | **[major](structcom___i_beacon.md#variable-major)**  |
| u_int16_t | **[minor](structcom___i_beacon.md#variable-minor)**  |

## Public Attributes Documentation

### variable powerLevel

```cpp
enum com_BeaconPowerLevel powerLevel;
```


Power level of the beacon. please refer to `com_BeaconPowerLevel`


### variable interval

```cpp
int interval;
```


Interval in ms. Can range from 100 to 5000 ms (5 sec). 


### variable uuid

```cpp
char[16] uuid;
```


UUID 


### variable major

```cpp
u_int16_t major;
```


Major 


### variable minor

```cpp
u_int16_t minor;
```


Minor 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
---
title: com_EddystoneUID

---

# com_EddystoneUID






`#include <libcom.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| enum [com_BeaconPowerLevel](libcom_8h.md#enum-com-beaconpowerlevel) | **[powerLevel](structcom___eddystone_u_i_d.md#variable-powerlevel)**  |
| unsigned int | **[interval](structcom___eddystone_u_i_d.md#variable-interval)**  |
| unsigned char[10] | **[namesp](structcom___eddystone_u_i_d.md#variable-namesp)**  |
| unsigned char[6] | **[instance](structcom___eddystone_u_i_d.md#variable-instance)**  |

## Public Attributes Documentation

### variable powerLevel

```cpp
enum com_BeaconPowerLevel powerLevel;
```


Power level of the beacon. please refer to `com_BeaconPowerLevel`


### variable interval

```cpp
unsigned int interval;
```


Interval in ms. Can range from 100 to 5000 ms (5 sec) 


### variable namesp

```cpp
unsigned char[10] namesp;
```


Namespace to advertise. Note that this does not need to be zero-terminated 


### variable instance

```cpp
unsigned char[6] instance;
```


Instance to advertise. Note that this does not need to be zero-terminated 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
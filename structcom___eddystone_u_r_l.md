---
title: com_EddystoneURL

---

# com_EddystoneURL






`#include <libcom.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| enum [com_BeaconPowerLevel](libcom_8h.md#enum-com-beaconpowerlevel) | **[powerLevel](structcom___eddystone_u_r_l.md#variable-powerlevel)**  |
| int | **[interval](structcom___eddystone_u_r_l.md#variable-interval)**  |
| enum [com_BeaconURLPrefix](libcom_8h.md#enum-com-beaconurlprefix) | **[url_prefix](structcom___eddystone_u_r_l.md#variable-url-prefix)**  |
| char[18] | **[url](structcom___eddystone_u_r_l.md#variable-url)**  |

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


### variable url_prefix

```cpp
enum com_BeaconURLPrefix url_prefix;
```


URL Prefix. Please refer to `com_BeaconPrefix`


### variable url

```cpp
char[18] url;
```


URL to advertise. Will be appended after the prefix. Must be null-terminated 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
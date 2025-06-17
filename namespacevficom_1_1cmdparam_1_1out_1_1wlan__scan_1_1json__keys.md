---
title: vficom::cmdparam::out::wlan_scan::json_keys

---

# vficom::cmdparam::out::wlan_scan::json_keys



## Attributes

|                | Name           |
| -------------- | -------------- |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[ssid](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-ssid)**  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[bssid](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-bssid)** <br>String.  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[adhoc](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-adhoc)** <br>Bool, is the network AdHoc?  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[pairw](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-pairw)** <br>Int, pairwise cipher, com_WLANCipherTypes.  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[group](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-group)** <br>Int, group cipher, com_WLANCipherTypes.  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[km](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-km)** <br>Int, key management, com_WLANKeyMgmt.  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[perc](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-perc)** <br>Int, signal level (percentage)  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[dbm](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-dbm)** <br>Int, signal level (dBm)  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[freq](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-freq)** <br>Int, channel frequency.  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[proto](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-proto)** <br>Int, protocol, com_WLANProto.  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[std](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md#variable-std)** <br>Int, standard, com_WLANStandard; present only on VOS3.  |



## Attributes Documentation

### variable ssid

```cpp
const COM3_DllSpec char[] ssid;
```


### variable bssid

```cpp
const COM3_DllSpec char[] bssid;
```

String. 

### variable adhoc

```cpp
const COM3_DllSpec char[] adhoc;
```

Bool, is the network AdHoc? 

### variable pairw

```cpp
const COM3_DllSpec char[] pairw;
```

Int, pairwise cipher, com_WLANCipherTypes. 

### variable group

```cpp
const COM3_DllSpec char[] group;
```

Int, group cipher, com_WLANCipherTypes. 

### variable km

```cpp
const COM3_DllSpec char[] km;
```

Int, key management, com_WLANKeyMgmt. 

### variable perc

```cpp
const COM3_DllSpec char[] perc;
```

Int, signal level (percentage) 

### variable dbm

```cpp
const COM3_DllSpec char[] dbm;
```

Int, signal level (dBm) 

### variable freq

```cpp
const COM3_DllSpec char[] freq;
```

Int, channel frequency. 

### variable proto

```cpp
const COM3_DllSpec char[] proto;
```

Int, protocol, com_WLANProto. 

### variable std

```cpp
const COM3_DllSpec char[] std;
```

Int, standard, com_WLANStandard; present only on VOS3. 




-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
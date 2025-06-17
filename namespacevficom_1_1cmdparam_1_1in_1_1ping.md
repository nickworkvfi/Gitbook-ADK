---
title: vficom::cmdparam::in::ping

---

# vficom::cmdparam::in::ping



## Attributes

|                | Name           |
| -------------- | -------------- |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[destination](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-destination)** <br>string - dns name or ip address  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[count](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-count)** <br>integer - stop after "count" ping request  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[timeout](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-timeout)** <br>integer - Overall timeout in milliseconds  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[addr_family](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-addr-family)** <br>integer - [optional] value of type [com_AddressFamily](), default [COM_AF_UNSPEC]() |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[dont_fragment](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-dont-fragment)** <br>boolean - [optional] set or unset the DF flag in IP header, default (not specified in input command): set automatically based on routing table  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[interface](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-interface)** <br>integer - [optional] value of type 'enum com_Interface', default [COM_INTERFACE_ANY]() |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[interval](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-interval)** <br>integer - [optional] milliseconds between sending each packet, default: 1000  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[size](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-size)** <br>integer - [optional] use "size" as number of data bytes to be sent, default 56  |
| const [COM3_DllSpec](libcom3_8h.md#define-com3-dllspec) char[] | **[waittime](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-waittime)** <br>integer - [optional] reply wait "waittime" in milliseconds, default 5000 milliseconds  |



## Attributes Documentation

### variable destination

```cpp
const COM3_DllSpec char[] destination;
```

string - dns name or ip address 

### variable count

```cpp
const COM3_DllSpec char[] count;
```

integer - stop after "count" ping request 

### variable timeout

```cpp
const COM3_DllSpec char[] timeout;
```

integer - Overall timeout in milliseconds 

### variable addr_family

```cpp
const COM3_DllSpec char[] addr_family;
```

integer - [optional] value of type [com_AddressFamily](), default [COM_AF_UNSPEC]()

### variable dont_fragment

```cpp
const COM3_DllSpec char[] dont_fragment;
```

boolean - [optional] set or unset the DF flag in IP header, default (not specified in input command): set automatically based on routing table 

### variable interface

```cpp
const COM3_DllSpec char[] interface;
```

integer - [optional] value of type 'enum com_Interface', default [COM_INTERFACE_ANY]()

### variable interval

```cpp
const COM3_DllSpec char[] interval;
```

integer - [optional] milliseconds between sending each packet, default: 1000 

### variable size

```cpp
const COM3_DllSpec char[] size;
```

integer - [optional] use "size" as number of data bytes to be sent, default 56 

### variable waittime

```cpp
const COM3_DllSpec char[] waittime;
```

integer - [optional] reply wait "waittime" in milliseconds, default 5000 milliseconds 




-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
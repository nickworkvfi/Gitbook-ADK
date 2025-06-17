---
title: IfInfo

---

# IfInfo





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[IfInfo](struct_if_info.md#function-ifinfo)**(const string & ifn, const string & ip, int af) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| string | **[ifname](struct_if_info.md#variable-ifname)**  |
| string | **[ipaddr](struct_if_info.md#variable-ipaddr)**  |
| int | **[family](struct_if_info.md#variable-family)**  |

## Public Functions Documentation

### function IfInfo

```cpp
inline IfInfo(
    const string & ifn,
    const string & ip,
    int af
)
```


## Public Attributes Documentation

### variable ifname

```cpp
string ifname;
```


interface name 


### variable ipaddr

```cpp
string ipaddr;
```


ip address linked to interface 


### variable family

```cpp
int family;
```


address family of ip address 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
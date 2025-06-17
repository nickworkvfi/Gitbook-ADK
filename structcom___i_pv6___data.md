---
title: com_IPv6_Data

---

# com_IPv6_Data






`#include <libcom.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct [com_IPv6_Data](structcom___i_pv6___data.md) * | **[next](structcom___i_pv6___data.md#variable-next)**  |
| char[COM_IPV6_ADDR_LENGTH] | **[IPV6_Addr](structcom___i_pv6___data.md#variable-ipv6-addr)**  |
| unsigned char | **[IPV6_Addr_Prefixlen](structcom___i_pv6___data.md#variable-ipv6-addr-prefixlen)**  |
| enum [com_IPv6_AddrScope](libcom_8h.md#enum-com-ipv6-addrscope) | **[IPV6_Addr_Scope](structcom___i_pv6___data.md#variable-ipv6-addr-scope)**  |

## Public Attributes Documentation

### variable next

```cpp
struct com_IPv6_Data * next;
```


### variable IPV6_Addr

```cpp
char[COM_IPV6_ADDR_LENGTH] IPV6_Addr;
```


### variable IPV6_Addr_Prefixlen

```cpp
unsigned char IPV6_Addr_Prefixlen;
```


### variable IPV6_Addr_Scope

```cpp
enum com_IPv6_AddrScope IPV6_Addr_Scope;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
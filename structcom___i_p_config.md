---
title: com_IPConfig

---

# com_IPConfig



 [More...](#detailed-description)


`#include <libcom.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned int | **[dhcp](structcom___i_p_config.md#variable-dhcp)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[ip_addr](structcom___i_p_config.md#variable-ip-addr)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[netmask](structcom___i_p_config.md#variable-netmask)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[gateway](structcom___i_p_config.md#variable-gateway)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[dns1](structcom___i_p_config.md#variable-dns1)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[dns2](structcom___i_p_config.md#variable-dns2)**  |
| char[COM_ETH_MAC_ADDR_LENGTH] | **[mac](structcom___i_p_config.md#variable-mac)**  |

## Detailed Description

```cpp
struct com_IPConfig;
```


IP configuration information 

## Public Attributes Documentation

### variable dhcp

```cpp
unsigned int dhcp;
```


0 if DHCP disabled 


### variable ip_addr

```cpp
char[COM_IPV4_ADDR_LENGTH] ip_addr;
```


IPv4 address (string) 


### variable netmask

```cpp
char[COM_IPV4_ADDR_LENGTH] netmask;
```


network mask (string) 


### variable gateway

```cpp
char[COM_IPV4_ADDR_LENGTH] gateway;
```


Gateway address (string), empty string if not set 


### variable dns1

```cpp
char[COM_IPV4_ADDR_LENGTH] dns1;
```


DNS1 address (string), empty string if not set 


### variable dns2

```cpp
char[COM_IPV4_ADDR_LENGTH] dns2;
```


DNS2 address (string), empty string if not set 


### variable mac

```cpp
char[COM_ETH_MAC_ADDR_LENGTH] mac;
```


Ethernet MAC address (string) 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
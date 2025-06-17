---
title: com_NetworkInterfaceInfo

---

# com_NetworkInterfaceInfo



 [More...](#detailed-description)


`#include <libcom.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| enum [com_NetworkStatus](libcom_8h.md#enum-com-networkstatus) | **[status](structcom___network_interface_info.md#variable-status)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[IPV4_Addr](structcom___network_interface_info.md#variable-ipv4-addr)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[IPV4_Netmask](structcom___network_interface_info.md#variable-ipv4-netmask)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[IPV4_Broadcast](structcom___network_interface_info.md#variable-ipv4-broadcast)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[IPV4_Destination](structcom___network_interface_info.md#variable-ipv4-destination)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[IPV4_Gateway](structcom___network_interface_info.md#variable-ipv4-gateway)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[IPV4_DNS1](structcom___network_interface_info.md#variable-ipv4-dns1)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[IPV4_DNS2](structcom___network_interface_info.md#variable-ipv4-dns2)**  |
| int | **[IPV4_DHCP_Enabled](structcom___network_interface_info.md#variable-ipv4-dhcp-enabled)**  |
| int | **[IPV6_Supported](structcom___network_interface_info.md#variable-ipv6-supported)**  |
| int | **[IPV6_Enabled](structcom___network_interface_info.md#variable-ipv6-enabled)**  |
| struct [com_IPv6_Data](structcom___i_pv6___data.md) * | **[IPV6_Address_List](structcom___network_interface_info.md#variable-ipv6-address-list)**  |
| char[COM_IPV6_ADDR_LENGTH] | **[IPV6_Gateway](structcom___network_interface_info.md#variable-ipv6-gateway)**  |
| char[COM_IPV6_ADDR_LENGTH] | **[IPV6_DNS1](structcom___network_interface_info.md#variable-ipv6-dns1)**  |
| char[COM_IPV6_ADDR_LENGTH] | **[IPV6_DNS2](structcom___network_interface_info.md#variable-ipv6-dns2)**  |
| int | **[IPV6_DHCP_Enabled](structcom___network_interface_info.md#variable-ipv6-dhcp-enabled)**  |
| unsigned int | **[RX_Packets](structcom___network_interface_info.md#variable-rx-packets)**  |
| unsigned int | **[RX_Errors](structcom___network_interface_info.md#variable-rx-errors)**  |
| unsigned int | **[RX_Bytes](structcom___network_interface_info.md#variable-rx-bytes)**  |
| unsigned int | **[TX_Packets](structcom___network_interface_info.md#variable-tx-packets)**  |
| unsigned int | **[TX_Errors](structcom___network_interface_info.md#variable-tx-errors)**  |
| unsigned int | **[TX_Bytes](structcom___network_interface_info.md#variable-tx-bytes)**  |
| char[COM_ETH_MAC_ADDR_LENGTH] | **[HW_Addr](structcom___network_interface_info.md#variable-hw-addr)**  |
| int | **[MTU_Size](structcom___network_interface_info.md#variable-mtu-size)**  |
| int | **[Link_Speed](structcom___network_interface_info.md#variable-link-speed)**  |
| enum [com_LinkType](libcom_8h.md#enum-com-linktype) | **[Link_Type](structcom___network_interface_info.md#variable-link-type)**  |

## Detailed Description

```cpp
struct com_NetworkInterfaceInfo;
```


Network interface configuration and statistics 

## Public Attributes Documentation

### variable status

```cpp
enum com_NetworkStatus status;
```


### variable IPV4_Addr

```cpp
char[COM_IPV4_ADDR_LENGTH] IPV4_Addr;
```


### variable IPV4_Netmask

```cpp
char[COM_IPV4_ADDR_LENGTH] IPV4_Netmask;
```


### variable IPV4_Broadcast

```cpp
char[COM_IPV4_ADDR_LENGTH] IPV4_Broadcast;
```


### variable IPV4_Destination

```cpp
char[COM_IPV4_ADDR_LENGTH] IPV4_Destination;
```


### variable IPV4_Gateway

```cpp
char[COM_IPV4_ADDR_LENGTH] IPV4_Gateway;
```


### variable IPV4_DNS1

```cpp
char[COM_IPV4_ADDR_LENGTH] IPV4_DNS1;
```


### variable IPV4_DNS2

```cpp
char[COM_IPV4_ADDR_LENGTH] IPV4_DNS2;
```


### variable IPV4_DHCP_Enabled

```cpp
int IPV4_DHCP_Enabled;
```


### variable IPV6_Supported

```cpp
int IPV6_Supported;
```


### variable IPV6_Enabled

```cpp
int IPV6_Enabled;
```


### variable IPV6_Address_List

```cpp
struct com_IPv6_Data * IPV6_Address_List;
```


### variable IPV6_Gateway

```cpp
char[COM_IPV6_ADDR_LENGTH] IPV6_Gateway;
```


### variable IPV6_DNS1

```cpp
char[COM_IPV6_ADDR_LENGTH] IPV6_DNS1;
```


### variable IPV6_DNS2

```cpp
char[COM_IPV6_ADDR_LENGTH] IPV6_DNS2;
```


### variable IPV6_DHCP_Enabled

```cpp
int IPV6_DHCP_Enabled;
```


### variable RX_Packets

```cpp
unsigned int RX_Packets;
```


### variable RX_Errors

```cpp
unsigned int RX_Errors;
```


### variable RX_Bytes

```cpp
unsigned int RX_Bytes;
```


### variable TX_Packets

```cpp
unsigned int TX_Packets;
```


### variable TX_Errors

```cpp
unsigned int TX_Errors;
```


### variable TX_Bytes

```cpp
unsigned int TX_Bytes;
```


### variable HW_Addr

```cpp
char[COM_ETH_MAC_ADDR_LENGTH] HW_Addr;
```


### variable MTU_Size

```cpp
int MTU_Size;
```


### variable Link_Speed

```cpp
int Link_Speed;
```


### variable Link_Type

```cpp
enum com_LinkType Link_Type;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
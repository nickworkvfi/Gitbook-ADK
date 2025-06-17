---
title: com_NetworkRouteInfo_IPv4

---

# com_NetworkRouteInfo_IPv4



 [More...](#detailed-description)


`#include <libcom.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct [com_NetworkRouteInfo_IPv4](structcom___network_route_info___i_pv4.md) * | **[next](structcom___network_route_info___i_pv4.md#variable-next)**  |
| char[16] | **[ifName](structcom___network_route_info___i_pv4.md#variable-ifname)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[dstAddr](structcom___network_route_info___i_pv4.md#variable-dstaddr)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[srcAddr](structcom___network_route_info___i_pv4.md#variable-srcaddr)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[gateWay](structcom___network_route_info___i_pv4.md#variable-gateway)**  |
| char[COM_IPV4_ADDR_LENGTH] | **[dstNetmask](structcom___network_route_info___i_pv4.md#variable-dstnetmask)**  |
| unsigned char | **[dstPrefixlen](structcom___network_route_info___i_pv4.md#variable-dstprefixlen)**  |
| unsigned int | **[metric](structcom___network_route_info___i_pv4.md#variable-metric)**  |
| enum [com_NetworkRouteScope](libcom_8h.md#enum-com-networkroutescope) | **[scope](structcom___network_route_info___i_pv4.md#variable-scope)**  |
| enum [com_NetworkRouteProtocol](libcom_8h.md#enum-com-networkrouteprotocol) | **[protocol](structcom___network_route_info___i_pv4.md#variable-protocol)**  |
| int | **[isDefaultRoute](structcom___network_route_info___i_pv4.md#variable-isdefaultroute)**  |

## Detailed Description

```cpp
struct com_NetworkRouteInfo_IPv4;
```


Network routing table entry (IPv4) 

## Public Attributes Documentation

### variable next

```cpp
struct com_NetworkRouteInfo_IPv4 * next;
```


Pointer to next routing table element or NULL if end of list is reached 


### variable ifName

```cpp
char[16] ifName;
```


Network interface name 


### variable dstAddr

```cpp
char[COM_IPV4_ADDR_LENGTH] dstAddr;
```


Destination address 


### variable srcAddr

```cpp
char[COM_IPV4_ADDR_LENGTH] srcAddr;
```


Source address 


### variable gateWay

```cpp
char[COM_IPV4_ADDR_LENGTH] gateWay;
```


Gateway address 


### variable dstNetmask

```cpp
char[COM_IPV4_ADDR_LENGTH] dstNetmask;
```


Destination Netmask 


### variable dstPrefixlen

```cpp
unsigned char dstPrefixlen;
```


Destination prefix length 


### variable metric

```cpp
unsigned int metric;
```


Metric 


### variable scope

```cpp
enum com_NetworkRouteScope scope;
```


Scope 


### variable protocol

```cpp
enum com_NetworkRouteProtocol protocol;
```


Routing protocol 


### variable isDefaultRoute

```cpp
int isDefaultRoute;
```


set to 1 if default route, 0 otherwise 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
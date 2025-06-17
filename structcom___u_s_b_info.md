---
title: com_USBInfo

---

# com_USBInfo






`#include <libcom.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct [com_USBInfo](structcom___u_s_b_info.md) * | **[next](structcom___u_s_b_info.md#variable-next)**  |
| char[256+1] | **[manufacturer](structcom___u_s_b_info.md#variable-manufacturer)**  |
| char[256+1] | **[product](structcom___u_s_b_info.md#variable-product)**  |
| char[256+1] | **[serial](structcom___u_s_b_info.md#variable-serial)**  |
| char[4+1] | **[idVendor](structcom___u_s_b_info.md#variable-idvendor)**  |
| char[4+1] | **[idProduct](structcom___u_s_b_info.md#variable-idproduct)**  |
| char[4+1] | **[bcddevice](structcom___u_s_b_info.md#variable-bcddevice)**  |
| char[16+1] | **[ttyDevice](structcom___u_s_b_info.md#variable-ttydevice)**  |

## Public Attributes Documentation

### variable next

```cpp
struct com_USBInfo * next;
```


Pointer to next USB device info element or NULL if end of list is reached 


### variable manufacturer

```cpp
char[256+1] manufacturer;
```


Name of the manufacturer 


### variable product

```cpp
char[256+1] product;
```


Name of the product 


### variable serial

```cpp
char[256+1] serial;
```


USB device serial number 


### variable idVendor

```cpp
char[4+1] idVendor;
```


Vendor ID (Assigned by USB Org) 


### variable idProduct

```cpp
char[4+1] idProduct;
```


Product ID (Assigned by Manufacturer) 


### variable bcddevice

```cpp
char[4+1] bcddevice;
```


Device Release Number 


### variable ttyDevice

```cpp
char[16+1] ttyDevice;
```


currently assigned tty device or zero-length string if no tty device 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
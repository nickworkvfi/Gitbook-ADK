---
title: vfisdi::BitMask::BitAccess

---

# vfisdi::BitMask::BitAccess



 [More...](#detailed-description)


`#include <array.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[operator=](classvfisdi_1_1_bit_mask_1_1_bit_access.md#function-operator=)**(const [BitAccess](classvfisdi_1_1_bit_mask_1_1_bit_access.md) & o) |
| | **[operator bool](classvfisdi_1_1_bit_mask_1_1_bit_access.md#function-operator-bool)**() const |
| void | **[operator=](classvfisdi_1_1_bit_mask_1_1_bit_access.md#function-operator=)**(bool b) |

## Friends

|                | Name           |
| -------------- | -------------- |
| struct | **[BitMask](classvfisdi_1_1_bit_mask_1_1_bit_access.md#friend-bitmask)**  |

## Detailed Description

```cpp
class vfisdi::BitMask::BitAccess;
```


Single bit access object 

## Public Functions Documentation

### function operator=

```cpp
inline void operator=(
    const BitAccess & o
)
```


**Parameters**: 

  * **o** other bit 


copy bit


### function operator bool

```cpp
inline operator bool() const
```


**Return**: bit value 

read bit 


### function operator=

```cpp
inline void operator=(
    bool b
)
```


**Parameters**: 

  * **b** bit 


write bit


## Friends

### friend BitMask

```cpp
friend struct BitMask();
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
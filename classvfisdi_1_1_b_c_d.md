---
title: vfisdi::BCD

---

# vfisdi::BCD



 [More...](#detailed-description)


`#include <bcd.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[BCD](classvfisdi_1_1_b_c_d.md#function-bcd)**() |
| | **[BCD](classvfisdi_1_1_b_c_d.md#function-bcd)**(const unsigned char val[N]) |
| | **[BCD](classvfisdi_1_1_b_c_d.md#function-bcd)**(int64_t val) |
| | **[BCD](classvfisdi_1_1_b_c_d.md#function-bcd)**(int val) |
| void | **[set](classvfisdi_1_1_b_c_d.md#function-set)**(const unsigned char val[N]) |
| bool | **[set](classvfisdi_1_1_b_c_d.md#function-set)**(int64_t val) |
| int64_t | **[get](classvfisdi_1_1_b_c_d.md#function-get)**() const |
| unsigned | **[size](classvfisdi_1_1_b_c_d.md#function-size)**() const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[N] | **[v](classvfisdi_1_1_b_c_d.md#variable-v)**  |

## Detailed Description

```cpp
template <int N>
class vfisdi::BCD;
```


Class for converting to/from [BCD](classvfisdi_1_1_b_c_d.md)

## Public Functions Documentation

### function BCD

```cpp
inline BCD()
```


constructor, initializes value to 0 


### function BCD

```cpp
inline BCD(
    const unsigned char val[N]
)
```


**Parameters**: 

  * **val** value in [BCD](classvfisdi_1_1_b_c_d.md) format 


constructor, set value


### function BCD

```cpp
inline BCD(
    int64_t val
)
```


**Parameters**: 

  * **val** value in binary format 


constructor, set value


### function BCD

```cpp
inline BCD(
    int val
)
```


**Parameters**: 

  * **val** value in binary format 


constructor, set value


### function set

```cpp
inline void set(
    const unsigned char val[N]
)
```


**Parameters**: 

  * **val** value in [BCD](classvfisdi_1_1_b_c_d.md) format 


set value


### function set

```cpp
inline bool set(
    int64_t val
)
```


**Parameters**: 

  * **val** value in binary format 


set value


### function get

```cpp
inline int64_t get() const
```


**Return**: value in binary format 

get value 


### function size

```cpp
inline unsigned size() const
```


**Return**: size 

obtain size of array 


## Public Attributes Documentation

### variable v

```cpp
unsigned char[N] v;
```


value in [BCD](classvfisdi_1_1_b_c_d.md) format for direct access 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
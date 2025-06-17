---
title: vfisdi::Array

---

# vfisdi::Array



 [More...](#detailed-description)


`#include <array.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Array](structvfisdi_1_1_array.md#function-array)**() |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(const unsigned char val[N]) |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(const char val[N]) |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(unsigned long val) |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(int val) |
| void | **[set](structvfisdi_1_1_array.md#function-set)**(const unsigned char val[N]) |
| void | **[set](structvfisdi_1_1_array.md#function-set)**(unsigned long val) |
| void | **[clear](structvfisdi_1_1_array.md#function-clear)**() |
| unsigned | **[size](structvfisdi_1_1_array.md#function-size)**() const |
| unsigned char & | **[operator[]](structvfisdi_1_1_array.md#function-operator[])**(unsigned idx) |
| const unsigned char & | **[operator[]](structvfisdi_1_1_array.md#function-operator[])**(unsigned idx) const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[N] | **[v](structvfisdi_1_1_array.md#variable-v)**  |

## Detailed Description

```cpp
template <unsigned N>
struct vfisdi::Array;
```


Fixed sized byte array 

## Public Functions Documentation

### function Array

```cpp
inline Array()
```


constructor, initializes all array values to 0 


### function Array

```cpp
inline Array(
    const unsigned char val[N]
)
```


**Parameters**: 

  * **val** initialization values 


constructor, initializes array with provided data,


### function Array

```cpp
inline Array(
    const char val[N]
)
```


**Parameters**: 

  * **val** initialization values 


constructor, initializes array with provided data,


### function Array

```cpp
inline Array(
    unsigned long val
)
```


**Parameters**: 

  * **val** initialization values found in lower 8*N bits 


constructor, initializes array with provided data,


### function Array

```cpp
inline Array(
    int val
)
```


**Parameters**: 

  * **val** initialization values found in lower 8*N bits 


constructor, initializes array with provided data,


### function set

```cpp
inline void set(
    const unsigned char val[N]
)
```


**Parameters**: 

  * **val** initialization values 


set array with provided data,


### function set

```cpp
inline void set(
    unsigned long val
)
```


**Parameters**: 

  * **val** initialization values found in lower 8*N bits 


set array with provided data,


### function clear

```cpp
inline void clear()
```


set all values to 0 


### function size

```cpp
inline unsigned size() const
```


**Return**: size 

obtain size of array 


### function operator[]

```cpp
inline unsigned char & operator[](
    unsigned idx
)
```


**Parameters**: 

  * **idx** array index 


**Return**: reference to element 

access array element


### function operator[]

```cpp
inline const unsigned char & operator[](
    unsigned idx
) const
```


**Parameters**: 

  * **idx** array index 


**Return**: reference to element 

access array element


## Public Attributes Documentation

### variable v

```cpp
unsigned char[N] v;
```


array values for direct access 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
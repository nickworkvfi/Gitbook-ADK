---
title: com_verifone_TLVLite::SafeBuffer

---

# com_verifone_TLVLite::SafeBuffer

**Module:** **[TLVLite](group___t_l_v_lite.md)**



 [More...](#detailed-description)


`#include <SafeBuffer.hpp>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SafeBuffer](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-safebuffer)**(void * buffer, std::size_t capacity, std::size_t alreadyUsedLength =0) |
| bool | **[append](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-append)**(char c) |
| bool | **[append](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-append)**(unsigned char c) |
| bool | **[append](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-append)**(void const * data, std::size_t length) |
| bool | **[append](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-append)**(ConstData_t data) |
| bool | **[append](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-append)**([SafeBuffer](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md) const & srcBuilder) |
| void * | **[getBuffer](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-getbuffer)**() const |
| char * | **[getCurrentCharPtr](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-getcurrentcharptr)**() const |
| unsigned char * | **[getCurrentBytePtr](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-getcurrentbyteptr)**() const |
| ConstData_t | **[getDataDesc](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-getdatadesc)**() const |
| std::size_t | **[getLength](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-getlength)**() const |
| std::size_t | **[getCapacity](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-getcapacity)**() const |
| std::size_t | **[getAvailableLen](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-getavailablelen)**() const |
| bool | **[isFull](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-isfull)**() const |
| bool | **[isOverflow](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-isoverflow)**() const |
| template <typename T \> <br>bool | **[append](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-append)**(T const & rhs) |
| void | **[clear](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md#function-clear)**() |

## Detailed Description

```cpp
class com_verifone_TLVLite::SafeBuffer;
```


Preprocessor constant definitions Macro definitions Data type definitions Exported variable declarations Exported function declarations Exported class declarations 

## Public Functions Documentation

### function SafeBuffer

```cpp
inline SafeBuffer(
    void * buffer,
    std::size_t capacity,
    std::size_t alreadyUsedLength =0
)
```


### function append

```cpp
bool append(
    char c
)
```


### function append

```cpp
inline bool append(
    unsigned char c
)
```


### function append

```cpp
bool append(
    void const * data,
    std::size_t length
)
```


### function append

```cpp
inline bool append(
    ConstData_t data
)
```


### function append

```cpp
bool append(
    SafeBuffer const & srcBuilder
)
```


### function getBuffer

```cpp
inline void * getBuffer() const
```


### function getCurrentCharPtr

```cpp
inline char * getCurrentCharPtr() const
```


### function getCurrentBytePtr

```cpp
inline unsigned char * getCurrentBytePtr() const
```


### function getDataDesc

```cpp
inline ConstData_t getDataDesc() const
```


### function getLength

```cpp
inline std::size_t getLength() const
```


### function getCapacity

```cpp
inline std::size_t getCapacity() const
```


### function getAvailableLen

```cpp
inline std::size_t getAvailableLen() const
```


### function isFull

```cpp
inline bool isFull() const
```


### function isOverflow

```cpp
inline bool isOverflow() const
```


### function append

```cpp
template <typename T >
inline bool append(
    T const & rhs
)
```


### function clear

```cpp
inline void clear()
```


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
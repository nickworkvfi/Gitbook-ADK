---
title: vfisdi::TLV::Tag

---

# vfisdi::TLV::Tag



 [More...](#detailed-description)


`#include <tlv.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Tag](classvfisdi_1_1_t_l_v_1_1_tag.md#function-tag)**(const char * t) |
| | **[Tag](classvfisdi_1_1_t_l_v_1_1_tag.md#function-tag)**(unsigned t =0) |
| bool | **[operator==](classvfisdi_1_1_t_l_v_1_1_tag.md#function-operator==)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & o) const |
| bool | **[operator!=](classvfisdi_1_1_t_l_v_1_1_tag.md#function-operator!=)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & o) const |
| int | **[length](classvfisdi_1_1_t_l_v_1_1_tag.md#function-length)**() const |
| const unsigned char * | **[getBytes](classvfisdi_1_1_t_l_v_1_1_tag.md#function-getbytes)**() const |
| unsigned | **[getNumber](classvfisdi_1_1_t_l_v_1_1_tag.md#function-getnumber)**() const |
| bool | **[constructed](classvfisdi_1_1_t_l_v_1_1_tag.md#function-constructed)**() const |
| void | **[constructed](classvfisdi_1_1_t_l_v_1_1_tag.md#function-constructed)**(bool c) |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[TLV](classvfisdi_1_1_t_l_v_1_1_tag.md#friend-tlv)**  |

## Detailed Description

```cpp
class vfisdi::TLV::Tag;
```


class for tag ID value handling 

## Public Functions Documentation

### function Tag

```cpp
Tag(
    const char * t
)
```


**Parameters**: 

  * **t** tag ID as C string, e.g. "9F01" 


constructor


### function Tag

```cpp
inline Tag(
    unsigned t =0
)
```


**Parameters**: 

  * **t** tag ID as number, e.g. 0x9F01 


constructor


### function operator==

```cpp
inline bool operator==(
    const Tag & o
) const
```


**Return**: true if the same, else false 

compare two tags 


### function operator!=

```cpp
inline bool operator!=(
    const Tag & o
) const
```


**Return**: true if different, else false 

compare two tags 


### function length

```cpp
int length() const
```


**Return**: length of the binary representation of the tag 

### function getBytes

```cpp
inline const unsigned char * getBytes() const
```


**Return**: pointer to binary tag ID representation 

### function getNumber

```cpp
unsigned getNumber() const
```


**Return**: tag ID as number 

### function constructed

```cpp
inline bool constructed() const
```


**Return**: true if constructed tag 

### function constructed

```cpp
inline void constructed(
    bool c
)
```


set or clear constructed flag in the tag 


## Friends

### friend TLV

```cpp
friend class TLV;
```


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
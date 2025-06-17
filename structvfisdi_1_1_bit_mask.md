---
title: vfisdi::BitMask

---

# vfisdi::BitMask



 [More...](#detailed-description)


`#include <array.h>`

Inherits from [Array<(NBITS+7)/8 >](structvfisdi_1_1_array.md)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[BitAccess](classvfisdi_1_1_bit_mask_1_1_bit_access.md)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef [Array](structvfisdi_1_1_array.md)<(NBITS+7)/8 > | **[Parent](structvfisdi_1_1_bit_mask.md#typedef-parent)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[BitMask](structvfisdi_1_1_bit_mask.md#function-bitmask)**() |
| unsigned | **[size](structvfisdi_1_1_bit_mask.md#function-size)**() const |
| [BitAccess](classvfisdi_1_1_bit_mask_1_1_bit_access.md) | **[operator[]](structvfisdi_1_1_bit_mask.md#function-operator[])**(ITYPE idx) |
| bool | **[operator[]](structvfisdi_1_1_bit_mask.md#function-operator[])**(ITYPE idx) const |
| void | **[set](structvfisdi_1_1_bit_mask.md#function-set)**(ITYPE * bits, unsigned size) |
| void | **[reset](structvfisdi_1_1_bit_mask.md#function-reset)**(ITYPE * bits, unsigned size) |
| [Parent](structvfisdi_1_1_bit_mask.md#typedef-parent) & | **[array](structvfisdi_1_1_bit_mask.md#function-array)**() |
| const [Parent](structvfisdi_1_1_bit_mask.md#typedef-parent) & | **[array](structvfisdi_1_1_bit_mask.md#function-array)**() const |

## Additional inherited members

**Public Functions inherited from [Array<(NBITS+7)/8 >](structvfisdi_1_1_array.md)**

|                | Name           |
| -------------- | -------------- |
| | **[Array](structvfisdi_1_1_array.md#function-array)**() |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(const unsigned char val[N]) |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(const char val[N]) |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(unsigned long val) |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(int val) |
| void | **[clear](structvfisdi_1_1_array.md#function-clear)**() |

**Public Attributes inherited from [Array<(NBITS+7)/8 >](structvfisdi_1_1_array.md)**

|                | Name           |
| -------------- | -------------- |
| unsigned char[N] | **[v](structvfisdi_1_1_array.md#variable-v)**  |


## Detailed Description

```cpp
template <unsigned NBITS,
typename ITYPE  =unsigned>
struct vfisdi::BitMask;
```


**Parameters**: 

  * **NBITS** number of bits in bit mask 
  * **ITYPE** index type 


**Note**: Base class Array<> is private to prevent automatic reference conversion to base class. Use [array()](structvfisdi_1_1_bit_mask.md#function-array) to explicitly obtain a reference to the base class. 

Bit mask with single bit access. Bits are stored in bytes in little endian ordering. 

## Public Types Documentation

### typedef Parent

```cpp
typedef Array<(NBITS+7)/8> Parent;
```


## Public Functions Documentation

### function BitMask

```cpp
inline BitMask()
```


constructor, initializes all array values to 0 


### function size

```cpp
inline unsigned size() const
```


**Return**: size in bytes 

obtain size of array in bytes


### function operator[]

```cpp
inline BitAccess operator[](
    ITYPE idx
)
```


**Parameters**: 

  * **idx** bit index 


**Return**: access object 

access bit


### function operator[]

```cpp
inline bool operator[](
    ITYPE idx
) const
```


**Parameters**: 

  * **idx** bit index 


**Return**: access object 

access bit


### function set

```cpp
inline void set(
    ITYPE * bits,
    unsigned size
)
```


**Parameters**: 

  * **bits** list of bits to set 
  * **size** size _list_


set bits listed in _bits_


### function reset

```cpp
inline void reset(
    ITYPE * bits,
    unsigned size
)
```


**Parameters**: 

  * **bits** list of bits to set 
  * **size** size _list_


reset bits listed in _bits_


### function array

```cpp
inline Parent & array()
```


**Return**: [BitMask](structvfisdi_1_1_bit_mask.md) as array reference 

### function array

```cpp
inline const Parent & array() const
```


**Return**: [BitMask](structvfisdi_1_1_bit_mask.md) as array reference 

-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
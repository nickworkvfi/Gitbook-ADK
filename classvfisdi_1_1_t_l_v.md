---
title: vfisdi::TLV

---

# vfisdi::TLV



 [More...](#detailed-description)


`#include <tlv.h>`

Inherited by [EMVConf](structvfisdi_1_1_e_m_v_conf.md), [EMVTxn](structvfisdi_1_1_e_m_v_txn.md)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Tag](classvfisdi_1_1_t_l_v_1_1_tag.md)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[TLV](classvfisdi_1_1_t_l_v.md#function-tlv)**(const char * t) |
| | **[TLV](classvfisdi_1_1_t_l_v.md#function-tlv)**(unsigned t =0) |
| | **[TLV](classvfisdi_1_1_t_l_v.md#function-tlv)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) |
| | **[TLV](classvfisdi_1_1_t_l_v.md#function-tlv)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) |
| void | **[assign](classvfisdi_1_1_t_l_v.md#function-assign)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) |
| void | **[tag](classvfisdi_1_1_t_l_v.md#function-tag)**(const char * t) |
| void | **[tag](classvfisdi_1_1_t_l_v.md#function-tag)**(unsigned t) |
| void | **[tag](classvfisdi_1_1_t_l_v.md#function-tag)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) |
| const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & | **[tag](classvfisdi_1_1_t_l_v.md#function-tag)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const std::string & data) |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const char * data) |
| | **[operator std::string](classvfisdi_1_1_t_l_v.md#function-operator-stdstring)**() const |
| std::string | **[getString](classvfisdi_1_1_t_l_v.md#function-getstring)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(long data) |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(int data) |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(unsigned data) |
| | **[operator long](classvfisdi_1_1_t_l_v.md#function-operator-long)**() const |
| | **[operator int](classvfisdi_1_1_t_l_v.md#function-operator-int)**() const |
| | **[operator unsigned](classvfisdi_1_1_t_l_v.md#function-operator-unsigned)**() const |
| long | **[getNumber](classvfisdi_1_1_t_l_v.md#function-getnumber)**() const |
| unsigned long | **[getUnsigned](classvfisdi_1_1_t_l_v.md#function-getunsigned)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(bool data) |
| | **[operator bool](classvfisdi_1_1_t_l_v.md#function-operator-bool)**() const |
| bool | **[getBool](classvfisdi_1_1_t_l_v.md#function-getbool)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(unsigned char data) |
| | **[operator unsigned char](classvfisdi_1_1_t_l_v.md#function-operator-unsigned-char)**() const |
| unsigned char | **[getByte](classvfisdi_1_1_t_l_v.md#function-getbyte)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const std::vector< unsigned char > & data) |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const std::vector< char > & data) |
| void | **[assign](classvfisdi_1_1_t_l_v.md#function-assign)**(const void * data, unsigned size) |
| std::vector< unsigned char > & | **[value](classvfisdi_1_1_t_l_v.md#function-value)**() |
| const std::vector< unsigned char > & | **[value](classvfisdi_1_1_t_l_v.md#function-value)**() const |
| bool | **[load](classvfisdi_1_1_t_l_v.md#function-load)**(const std::vector< unsigned char > & data, bool indefinite =false) |
| void | **[store](classvfisdi_1_1_t_l_v.md#function-store)**(std::vector< unsigned char > & data, bool use_indefinite =false) const |
| bool | **[operator==](classvfisdi_1_1_t_l_v.md#function-operator==)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) const |
| bool | **[operator!=](classvfisdi_1_1_t_l_v.md#function-operator!=)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) const |
| void | **[dumptree](classvfisdi_1_1_t_l_v.md#function-dumptree)**(bool use_indefinite =false, int indent =0, bool skip_toplevel_tag =true) |
| unsigned | **[count](classvfisdi_1_1_t_l_v.md#function-count)**() const |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator[]](classvfisdi_1_1_t_l_v.md#function-operator[])**(unsigned idx) |
| const [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator[]](classvfisdi_1_1_t_l_v.md#function-operator[])**(unsigned idx) const |
| void | **[erasepos](classvfisdi_1_1_t_l_v.md#function-erasepos)**(unsigned idx) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator()](classvfisdi_1_1_t_l_v.md#function-operator())**(const char * t, unsigned idx =0) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator()](classvfisdi_1_1_t_l_v.md#function-operator())**(unsigned t, unsigned idx =0) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator()](classvfisdi_1_1_t_l_v.md#function-operator())**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t, unsigned idx =0) |
| unsigned | **[count](classvfisdi_1_1_t_l_v.md#function-count)**(const char * t) const |
| unsigned | **[count](classvfisdi_1_1_t_l_v.md#function-count)**(unsigned t) const |
| unsigned | **[count](classvfisdi_1_1_t_l_v.md#function-count)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) const |
| unsigned | **[rename](classvfisdi_1_1_t_l_v.md#function-rename)**(const char * from, const char * to) |
| unsigned | **[rename](classvfisdi_1_1_t_l_v.md#function-rename)**(unsigned from, unsigned to) |
| unsigned | **[rename](classvfisdi_1_1_t_l_v.md#function-rename)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & from, const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & to) |
| bool | **[constructed](classvfisdi_1_1_t_l_v.md#function-constructed)**() const |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[add](classvfisdi_1_1_t_l_v.md#function-add)**(const char * t) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[add](classvfisdi_1_1_t_l_v.md#function-add)**(unsigned t) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[add](classvfisdi_1_1_t_l_v.md#function-add)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) |
| void | **[clear](classvfisdi_1_1_t_l_v.md#function-clear)**() |
| unsigned | **[erasetag](classvfisdi_1_1_t_l_v.md#function-erasetag)**(const char * t) |
| unsigned | **[erasetag](classvfisdi_1_1_t_l_v.md#function-erasetag)**(unsigned t) |
| unsigned | **[erasetag](classvfisdi_1_1_t_l_v.md#function-erasetag)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[initSize](classvfisdi_1_1_t_l_v.md#function-initsize)**(bool use_indefinite) |
| unsigned | **[storedSize](classvfisdi_1_1_t_l_v.md#function-storedsize)**(bool use_indefinite) const |
| void | **[storeAdd](classvfisdi_1_1_t_l_v.md#function-storeadd)**(std::vector< unsigned char > & data, bool use_indefinite) const |
| bool | **[load](classvfisdi_1_1_t_l_v.md#function-load)**(const unsigned char *& start, const unsigned char * end, bool indefinite =false) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) | **[m_tag](classvfisdi_1_1_t_l_v.md#variable-m-tag)**  |
| std::vector< unsigned char > | **[m_data](classvfisdi_1_1_t_l_v.md#variable-m-data)**  |
| std::vector< std::shared_ptr< [TLV](classvfisdi_1_1_t_l_v.md) > > | **[m_child](classvfisdi_1_1_t_l_v.md#variable-m-child)**  |
| unsigned | **[m_contentsize](classvfisdi_1_1_t_l_v.md#variable-m-contentsize)**  |

## Detailed Description

```cpp
class vfisdi::TLV;
```


class for handling X690 BER [TLV](classvfisdi_1_1_t_l_v.md) encoding

A [TLV](classvfisdi_1_1_t_l_v.md) object consists of a tag ID and value. The value can be either a primitive value or constructed from a list of [TLV](classvfisdi_1_1_t_l_v.md) objects. Whether the object contains a primitive value or other objects is indicated by a flag in the tag ID and can be queried using the [TLV::constructed()](classvfisdi_1_1_t_l_v.md#function-constructed) method. This flag is updated according to the acual use to prevent an inconsistent setting.

Contained [TLV](classvfisdi_1_1_t_l_v.md) objects can be accessed by their index or by their tag ID (plus index). If the tag ID does not exist, it is created. If the index does not exist, a new index is added. 

## Public Functions Documentation

### function TLV

```cpp
inline explicit TLV(
    const char * t
)
```


**Parameters**: 

  * **t** tag ID as string 


constructor 


### function TLV

```cpp
inline explicit TLV(
    unsigned t =0
)
```


**Parameters**: 

  * **t** tag ID as number 


constructor 


### function TLV

```cpp
inline explicit TLV(
    const Tag & t
)
```


**Parameters**: 

  * **t** tag ID as tag object 


constructor 


### function TLV

```cpp
TLV(
    const TLV & o
)
```


copy constructor 


### function operator=

```cpp
TLV & operator=(
    const TLV & o
)
```


**Return**: reference to this 

assignment operator 


### function assign

```cpp
void assign(
    const TLV & o
)
```


**Parameters**: 

  * **o** other element 


**Note**: Unlike the assignment operator, the tag is not copied to support the following use case: 

```cpp
TLV f,g;
g(0x9F01)=0x1234;
f(0x21).assign(g);
```

assign the content of _o_


### function tag

```cpp
inline void tag(
    const char * t
)
```


**Parameters**: 

  * **t** tag ID as string 


**Note**: based on the contained constructed flag data or children are cleared. 

set tag ID


### function tag

```cpp
inline void tag(
    unsigned t
)
```


**Parameters**: 

  * **t** tag ID as number 


**Note**: based on the contained constructed flag data or children are cleared. 

set tag ID


### function tag

```cpp
void tag(
    const Tag & t
)
```


**Parameters**: 

  * **t** tag ID as tag object 


**Note**: based on the contained constructed flag data or children are cleared. 

set tag ID


### function tag

```cpp
inline const Tag & tag() const
```


get tag ID as tag object 


### function operator=

```cpp
void operator=(
    const std::string & data
)
```


**Parameters**: 

  * **data** value 


assign string value 


### function operator=

```cpp
void operator=(
    const char * data
)
```


**Parameters**: 

  * **data** value 


assign string value 


### function operator std::string

```cpp
inline operator std::string() const
```


**Return**: value of primitive tag as string 

### function getString

```cpp
std::string getString() const
```


**Return**: value of primitive tag as string 

### function operator=

```cpp
void operator=(
    long data
)
```


**Parameters**: 

  * **data** value 


assign number 


### function operator=

```cpp
inline void operator=(
    int data
)
```


### function operator=

```cpp
inline void operator=(
    unsigned data
)
```


### function operator long

```cpp
inline operator long() const
```


**Return**: value of primitive tag as number 

### function operator int

```cpp
inline operator int() const
```


**Return**: value of primitive tag as number 

### function operator unsigned

```cpp
inline operator unsigned() const
```


**Return**: value of primitive tag as number 

### function getNumber

```cpp
long getNumber() const
```


**Return**: value of primitive tag as number 

### function getUnsigned

```cpp
unsigned long getUnsigned() const
```


**Return**: value of primitive tag as unsigned number 

### function operator=

```cpp
void operator=(
    bool data
)
```


**Parameters**: 

  * **data** value; 


assign boolean 


### function operator bool

```cpp
inline operator bool() const
```


**Return**: value of primitive tag as boolean 

### function getBool

```cpp
bool getBool() const
```


**Return**: value of primitive tag as boolean 

### function operator=

```cpp
void operator=(
    unsigned char data
)
```


**Parameters**: 

  * **data** value; 


assign unsigned char 


### function operator unsigned char

```cpp
inline operator unsigned char() const
```


**Return**: value of primitive tag as byte 

### function getByte

```cpp
unsigned char getByte() const
```


**Return**: value of primitive tag as byte 

### function operator=

```cpp
void operator=(
    const std::vector< unsigned char > & data
)
```


**Parameters**: 

  * **data** value 


assign vector 


### function operator=

```cpp
void operator=(
    const std::vector< char > & data
)
```


**Parameters**: 

  * **data** value 


assign vector 


### function assign

```cpp
void assign(
    const void * data,
    unsigned size
)
```


**Parameters**: 

  * **data** start of memory block 
  * **size** size of memory block 


assign memory block 


### function value

```cpp
std::vector< unsigned char > & value()
```


**Return**: reference to value of primitive tag as buffer 

**Note**: 

  * If the tag is not primitive, it is converted to primitive 
  * It is allowed to update the value of the buffer 


**Par**: 

### function value

```cpp
const std::vector< unsigned char > & value() const
```


**Return**: const reference to value of primitive tag as buffer 

### function load

```cpp
inline bool load(
    const std::vector< unsigned char > & data,
    bool indefinite =false
)
```


**Parameters**: 

  * **data** buffer containing [TLV](classvfisdi_1_1_t_l_v.md) data 
  * **indefinite** if true stop loading at terminating tag (00 00). 


load binary [TLV](classvfisdi_1_1_t_l_v.md) buffer into internal representation 


### function store

```cpp
void store(
    std::vector< unsigned char > & data,
    bool use_indefinite =false
) const
```


**Parameters**: 

  * **data** output buffer 
  * **use_indefinite** if true use indefinite length form, else use definite form 


store internal representation to binary [TLV](classvfisdi_1_1_t_l_v.md) buffer 


### function operator==

```cpp
bool operator==(
    const TLV & o
) const
```


**Parameters**: 

  * **o** other object 


**Return**: true if equal else false 

compare two [TLV](classvfisdi_1_1_t_l_v.md) objects 


### function operator!=

```cpp
inline bool operator!=(
    const TLV & o
) const
```


**Parameters**: 

  * **o** other object 


**Return**: true if not equal else false 

compare two [TLV](classvfisdi_1_1_t_l_v.md) objects 


### function dumptree

```cpp
void dumptree(
    bool use_indefinite =false,
    int indent =0,
    bool skip_toplevel_tag =true
)
```


**Parameters**: 

  * **use_indefinite** if true use indefinite length form, else use definite form 
  * **indent** indentation level 
  * **skip_toplevel_tag** skip toplevel tag, which is not part of the data 


print tree to stdout for debugging purposes 


### function count

```cpp
inline unsigned count() const
```


**Return**: number of children 

### function operator[]

```cpp
inline TLV & operator[](
    unsigned idx
)
```


**Parameters**: 

  * **idx** child index, it must be in the range 0...[count()](classvfisdi_1_1_t_l_v.md#function-count)-1. 


**Return**: reference to child 

**Note**: There is no range checking of _idx_, this must be handled by the caller 

access child [TLV](classvfisdi_1_1_t_l_v.md) object 


### function operator[]

```cpp
inline const TLV & operator[](
    unsigned idx
) const
```


**Parameters**: 

  * **idx** child index, it must be in the range 0...[count()](classvfisdi_1_1_t_l_v.md#function-count)-1. 


**Return**: const reference to child 

**Note**: There is no range checking of _idx_, this must be handled by the caller 

access child [TLV](classvfisdi_1_1_t_l_v.md) object 


### function erasepos

```cpp
inline void erasepos(
    unsigned idx
)
```


**Parameters**: 

  * **idx** child index, it must be in the range 0...[count()](classvfisdi_1_1_t_l_v.md#function-count)-1. 


**Note**: There is no range checking of _idx_, this must be handled by the caller 

erase child [TLV](classvfisdi_1_1_t_l_v.md) object 


### function operator()

```cpp
inline TLV & operator()(
    const char * t,
    unsigned idx =0
)
```


**Parameters**: 

  * **t** tag ID as string 
  * **idx** index of tag 


**Return**: reference to tag object 

**Note**: If the tag is not found, it is created 

access _idx-th_ tag having tag value _t_


### function operator()

```cpp
inline TLV & operator()(
    unsigned t,
    unsigned idx =0
)
```


**Parameters**: 

  * **t** tag ID as number 
  * **idx** index of tag 


**Return**: reference to tag object 

**Note**: If the tag is not found, it is created 

access _idx-th_ tag having tag value _t_


### function operator()

```cpp
TLV & operator()(
    const Tag & t,
    unsigned idx =0
)
```


**Parameters**: 

  * **t** tag ID as tag object 
  * **idx** index of tag 


**Return**: reference to tag object 

**Note**: If the tag is not found, it is created 

access _idx-th_ tag having tag value _t_


### function count

```cpp
inline unsigned count(
    const char * t
) const
```


**Parameters**: 

  * **t** tag ID as string 


**Return**: number of tags 

Determine the number of tags matching _t_


### function count

```cpp
inline unsigned count(
    unsigned t
) const
```


**Parameters**: 

  * **t** tag ID as number 


**Return**: number of tags 

Determine the number of tags matching _t_


### function count

```cpp
unsigned count(
    const Tag & t
) const
```


**Parameters**: 

  * **t** tag ID as tag object 


**Return**: number of tags 

Determine the number of tags matching _t_


### function rename

```cpp
inline unsigned rename(
    const char * from,
    const char * to
)
```


**Return**: number of renamed tags 

Rename all tags matching _from_ to _to_


### function rename

```cpp
inline unsigned rename(
    unsigned from,
    unsigned to
)
```


**Return**: number of renamed tags 

Rename all tags matching _from_ to _to_


### function rename

```cpp
unsigned rename(
    const Tag & from,
    const Tag & to
)
```


**Return**: number of renamed tags 

Rename all tags matching _from_ to _to_


### function constructed

```cpp
inline bool constructed() const
```


**Return**: true if the current tag is constructed 

### function add

```cpp
inline TLV & add(
    const char * t
)
```


**Parameters**: 

  * **t** tag ID as string 


**Return**: reference to new tag object 

add tag to end of list 


### function add

```cpp
inline TLV & add(
    unsigned t
)
```


**Parameters**: 

  * **t** tag ID as number 


**Return**: reference to new tag object 

add tag to end of list 


### function add

```cpp
TLV & add(
    const Tag & t
)
```


**Parameters**: 

  * **t** tag ID as tag object 


**Return**: reference to new tag object 

add tag to end of list 


### function clear

```cpp
inline void clear()
```


clear value of current tag 


### function erasetag

```cpp
inline unsigned erasetag(
    const char * t
)
```


**Return**: number of erased tags 

erase tag _t_


### function erasetag

```cpp
inline unsigned erasetag(
    unsigned t
)
```


**Return**: number of erased tags 

erase tag _t_


### function erasetag

```cpp
unsigned erasetag(
    const Tag & t
)
```


**Return**: number of erased tags 

erase tag _t_


## Protected Functions Documentation

### function initSize

```cpp
void initSize(
    bool use_indefinite
)
```


**Parameters**: 

  * **use_indefinite** if true assume indefinite length form, else assume definite length form 


recursively initialize m_contentsize 


### function storedSize

```cpp
unsigned storedSize(
    bool use_indefinite
) const
```


**Parameters**: 

  * **use_indefinite** if true assume indefinite length form, else assume definite length form 


**Return**: size in bytes 

Determine size required for binary representation of this tag and value 


### function storeAdd

```cpp
void storeAdd(
    std::vector< unsigned char > & data,
    bool use_indefinite
) const
```


**Parameters**: 

  * **data** output buffer 
  * **use_indefinite** if true assume indefinite length form, else assume definite length form 


add binary dump to buffer 


### function load

```cpp
bool load(
    const unsigned char *& start,
    const unsigned char * end,
    bool indefinite =false
)
```


**Parameters**: 

  * **start** start of buffer, gets updated to position after parsing 
  * **end** end of buffer 
  * **indefinite** current tag uses indefinite length form, i.e. 0x00 0x00 will terminate current tag. 


load binary buffer to internal representation 


## Protected Attributes Documentation

### variable m_tag

```cpp
Tag m_tag;
```


### variable m_data

```cpp
std::vector< unsigned char > m_data;
```


### variable m_child

```cpp
std::vector< std::shared_ptr< TLV > > m_child;
```


### variable m_contentsize

```cpp
unsigned m_contentsize;
```


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
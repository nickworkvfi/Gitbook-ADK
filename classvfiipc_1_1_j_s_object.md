---
title: vfiipc::JSObject

---

# vfiipc::JSObject



 [More...](#detailed-description)


`#include <jsobject.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[JSType](classvfiipc_1_1_j_s_object.md#enum-jstype)** { JSTNull, JSTBool, JSTString, JSTInt, JSTFloat, JSTObject, JSTArray} |
| typedef std::map< std::string, [JSObject](classvfiipc_1_1_j_s_object.md) >::[iterator](classvfiipc_1_1_j_s_object.md#typedef-iterator) | **[iterator](classvfiipc_1_1_j_s_object.md#typedef-iterator)**  |
| typedef std::map< std::string, [JSObject](classvfiipc_1_1_j_s_object.md) >::[const_iterator](classvfiipc_1_1_j_s_object.md#typedef-const-iterator) | **[const_iterator](classvfiipc_1_1_j_s_object.md#typedef-const-iterator)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[JSObject](classvfiipc_1_1_j_s_object.md#function-jsobject)**() |
| [JSType](classvfiipc_1_1_j_s_object.md#enum-jstype) | **[type](classvfiipc_1_1_j_s_object.md#function-type)**() const |
| bool | **[isNull](classvfiipc_1_1_j_s_object.md#function-isnull)**() const |
| bool | **[isBool](classvfiipc_1_1_j_s_object.md#function-isbool)**() const |
| bool | **[isString](classvfiipc_1_1_j_s_object.md#function-isstring)**() const |
| bool | **[isNumber](classvfiipc_1_1_j_s_object.md#function-isnumber)**() const |
| bool | **[isObject](classvfiipc_1_1_j_s_object.md#function-isobject)**() const |
| bool | **[isArray](classvfiipc_1_1_j_s_object.md#function-isarray)**() const |
| std::string | **[getString](classvfiipc_1_1_j_s_object.md#function-getstring)**() const |
| std::string | **[getString](classvfiipc_1_1_j_s_object.md#function-getstring)**(const char * defaultval) const |
| const std::string * | **[getStringP](classvfiipc_1_1_j_s_object.md#function-getstringp)**() const |
| std::string * | **[getStringP](classvfiipc_1_1_j_s_object.md#function-getstringp)**() |
| double | **[getNumber](classvfiipc_1_1_j_s_object.md#function-getnumber)**() const |
| long | **[getInt](classvfiipc_1_1_j_s_object.md#function-getint)**() const |
| long long | **[getInt64](classvfiipc_1_1_j_s_object.md#function-getint64)**() const |
| bool | **[getBool](classvfiipc_1_1_j_s_object.md#function-getbool)**() const |
| | **[operator bool](classvfiipc_1_1_j_s_object.md#function-operator-bool)**() const |
| | **[operator std::string](classvfiipc_1_1_j_s_object.md#function-operator-stdstring)**() const |
| | **[operator char](classvfiipc_1_1_j_s_object.md#function-operator-char)**() const |
| | **[operator unsigned char](classvfiipc_1_1_j_s_object.md#function-operator-unsigned-char)**() const |
| | **[operator short](classvfiipc_1_1_j_s_object.md#function-operator-short)**() const |
| | **[operator unsigned short](classvfiipc_1_1_j_s_object.md#function-operator-unsigned-short)**() const |
| | **[operator int](classvfiipc_1_1_j_s_object.md#function-operator-int)**() const |
| | **[operator unsigned](classvfiipc_1_1_j_s_object.md#function-operator-unsigned)**() const |
| | **[operator long](classvfiipc_1_1_j_s_object.md#function-operator-long)**() const |
| | **[operator unsigned long](classvfiipc_1_1_j_s_object.md#function-operator-unsigned-long)**() const |
| | **[operator long long](classvfiipc_1_1_j_s_object.md#function-operator-long-long)**() const |
| | **[operator unsigned long long](classvfiipc_1_1_j_s_object.md#function-operator-unsigned-long-long)**() const |
| | **[operator float](classvfiipc_1_1_j_s_object.md#function-operator-float)**() const |
| | **[operator double](classvfiipc_1_1_j_s_object.md#function-operator-double)**() const |
| void | **[clear](classvfiipc_1_1_j_s_object.md#function-clear)**() |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator=](classvfiipc_1_1_j_s_object.md#function-operator=)**(bool val) |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator=](classvfiipc_1_1_j_s_object.md#function-operator=)**(char * val) |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator=](classvfiipc_1_1_j_s_object.md#function-operator=)**(const char * val) |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator=](classvfiipc_1_1_j_s_object.md#function-operator=)**(const std::string & val) |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator=](classvfiipc_1_1_j_s_object.md#function-operator=)**(double val) |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator=](classvfiipc_1_1_j_s_object.md#function-operator=)**(float val) |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator=](classvfiipc_1_1_j_s_object.md#function-operator=)**(long long val) |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator=](classvfiipc_1_1_j_s_object.md#function-operator=)**(unsigned long long val) |
| template <typename T \> <br>[JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator=](classvfiipc_1_1_j_s_object.md#function-operator=)**(T val) |
| bool | **[exists](classvfiipc_1_1_j_s_object.md#function-exists)**(const char * elem) const |
| bool | **[exists](classvfiipc_1_1_j_s_object.md#function-exists)**(const std::string & elem) const |
| void | **[erase](classvfiipc_1_1_j_s_object.md#function-erase)**(const char * elem) |
| void | **[erase](classvfiipc_1_1_j_s_object.md#function-erase)**(const std::string & elem) |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator()](classvfiipc_1_1_j_s_object.md#function-operator())**(const char * elem) |
| const [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator()](classvfiipc_1_1_j_s_object.md#function-operator())**(const char * elem) const |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator()](classvfiipc_1_1_j_s_object.md#function-operator())**(const std::string & elem) |
| const [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator()](classvfiipc_1_1_j_s_object.md#function-operator())**(const std::string & elem) const |
| [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator[]](classvfiipc_1_1_j_s_object.md#function-operator[])**(int idx) |
| const [JSObject](classvfiipc_1_1_j_s_object.md) & | **[operator[]](classvfiipc_1_1_j_s_object.md#function-operator[])**(int idx) const |
| unsigned | **[size](classvfiipc_1_1_j_s_object.md#function-size)**() const |
| void | **[resize](classvfiipc_1_1_j_s_object.md#function-resize)**(unsigned new_size) |
| [iterator](classvfiipc_1_1_j_s_object.md#typedef-iterator) | **[begin](classvfiipc_1_1_j_s_object.md#function-begin)**() |
| [iterator](classvfiipc_1_1_j_s_object.md#typedef-iterator) | **[end](classvfiipc_1_1_j_s_object.md#function-end)**() |
| [const_iterator](classvfiipc_1_1_j_s_object.md#typedef-const-iterator) | **[begin](classvfiipc_1_1_j_s_object.md#function-begin)**() const |
| [const_iterator](classvfiipc_1_1_j_s_object.md#typedef-const-iterator) | **[end](classvfiipc_1_1_j_s_object.md#function-end)**() const |
| bool | **[load](classvfiipc_1_1_j_s_object.md#function-load)**(const std::string & s) |
| std::string | **[dump](classvfiipc_1_1_j_s_object.md#function-dump)**() const |
| void | **[dump](classvfiipc_1_1_j_s_object.md#function-dump)**(std::string & s) const |
| void | **[swap](classvfiipc_1_1_j_s_object.md#function-swap)**([JSObject](classvfiipc_1_1_j_s_object.md) & o) |
| std::string | **[logdump](classvfiipc_1_1_j_s_object.md#function-logdump)**(bool(*)(const std::string &key) filter_cb) const |
| void | **[prettyDump](classvfiipc_1_1_j_s_object.md#function-prettydump)**(std::string & s) const |
| const char * | **[getVersion](classvfiipc_1_1_j_s_object.md#function-getversion)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| int | **[parse](classvfiipc_1_1_j_s_object.md#function-parse)**(const char * s) |
| int | **[parse](classvfiipc_1_1_j_s_object.md#function-parse)**(const char * s, unsigned nestinglevel) |
| void | **[dump](classvfiipc_1_1_j_s_object.md#function-dump)**(std::string & s, bool(*)(const std::string &key) filter_cb) const |
| void | **[prettyDump](classvfiipc_1_1_j_s_object.md#function-prettydump)**(std::string & out, int indent) const |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| [JSType](classvfiipc_1_1_j_s_object.md#enum-jstype) | **[v_type](classvfiipc_1_1_j_s_object.md#variable-v-type)**  |
| bool | **[v_bool](classvfiipc_1_1_j_s_object.md#variable-v-bool)**  |
| std::string | **[v_string](classvfiipc_1_1_j_s_object.md#variable-v-string)**  |
| double | **[v_floatnum](classvfiipc_1_1_j_s_object.md#variable-v-floatnum)**  |
| long | **[v_intnum](classvfiipc_1_1_j_s_object.md#variable-v-intnum)**  |
| std::map< std::string, [JSObject](classvfiipc_1_1_j_s_object.md) > | **[v_object](classvfiipc_1_1_j_s_object.md#variable-v-object)**  |
| std::vector< [JSObject](classvfiipc_1_1_j_s_object.md) > | **[v_array](classvfiipc_1_1_j_s_object.md#variable-v-array)**  |
| [JSObject](classvfiipc_1_1_j_s_object.md) | **[NullObject](classvfiipc_1_1_j_s_object.md#variable-nullobject)**  |

## Detailed Description

```cpp
class vfiipc::JSObject;
```


class for reading / writing JSON data 

## Public Types Documentation

### enum JSType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| JSTNull | |  null (empty object)  |
| JSTBool | |  boolean value  |
| JSTString | |  string value  |
| JSTInt | |  integer value  |
| JSTFloat | |  float value  |
| JSTObject | |  object value  |
| JSTArray | |  array value  |




type of the contained data element 


### typedef iterator

```cpp
typedef std::map<std::string,JSObject>::iterator iterator;
```


iterator type for iterating over the direct members of an object, the iterator type has two members:

* first name of the member
* second content of the member 


### typedef const_iterator

```cpp
typedef std::map<std::string,JSObject>::const_iterator const_iterator;
```


## Public Functions Documentation

### function JSObject

```cpp
inline JSObject()
```


constructor, creates an empty object 


### function type

```cpp
inline JSType type() const
```


**Return**: type 

read type 


### function isNull

```cpp
inline bool isNull() const
```


**Return**: true if type is JSTNull 

check type for null 


### function isBool

```cpp
inline bool isBool() const
```


**Return**: true if type is JSTBool 

check type for boolean 


### function isString

```cpp
inline bool isString() const
```


**Return**: true if type is JSTString 

check type for string 


### function isNumber

```cpp
inline bool isNumber() const
```


**Return**: true if type is JSTInt or JSTFloat 

check type for number 


### function isObject

```cpp
inline bool isObject() const
```


**Return**: true if type is JSTObject 

check type for object 


### function isArray

```cpp
inline bool isArray() const
```


**Return**: true if type is JSTArray 

check type for array 


### function getString

```cpp
std::string getString() const
```


**Return**: obtain value as string, conversion is applied if required 

### function getString

```cpp
inline std::string getString(
    const char * defaultval
) const
```


**Return**: obtain value as string, return _defaultval_, if object is null 

### function getStringP

```cpp
const std::string * getStringP() const
```


**Return**: pointer to string if value is of type string, else NULL 

**Note**: The pointer stays valid until the [JSObject](classvfiipc_1_1_j_s_object.md) is modified or released 

Obtain content of string without copying the data 


### function getStringP

```cpp
std::string * getStringP()
```


**Return**: pointer to string if value is of type string, else NULL 

**Note**: The pointer stays valid until the [JSObject](classvfiipc_1_1_j_s_object.md) is modified or released 

Obtain content of string without copying the data 


### function getNumber

```cpp
double getNumber() const
```


**Return**: obtain value as number, conversion is applied if required 

### function getInt

```cpp
long getInt() const
```


**Return**: obtain value as integer, conversion is applied if required 

### function getInt64

```cpp
long long getInt64() const
```


**Return**: obtain value as 64 bit integer, conversion is applied if required 

### function getBool

```cpp
bool getBool() const
```


**Return**: obtain value as boolean, conversion is applied if required 

### function operator bool

```cpp
inline operator bool() const
```


**Return**: obtain value as boolean, conversion is applied if required 

### function operator std::string

```cpp
inline operator std::string() const
```


**Return**: obtain value as string, conversion is applied if required 

### function operator char

```cpp
inline operator char() const
```


**Return**: obtain value as char, conversion is applied if required 

### function operator unsigned char

```cpp
inline operator unsigned char() const
```


**Return**: obtain value as unsigned char, conversion is applied if required 

### function operator short

```cpp
inline operator short() const
```


**Return**: obtain value as short, conversion is applied if required 

### function operator unsigned short

```cpp
inline operator unsigned short() const
```


**Return**: obtain value as unsigned short, conversion is applied if required 

### function operator int

```cpp
inline operator int() const
```


**Return**: obtain value as integer, conversion is applied if required 

### function operator unsigned

```cpp
inline operator unsigned() const
```


**Return**: obtain value as unsigned, conversion is applied if required 

### function operator long

```cpp
inline operator long() const
```


**Return**: obtain value as long, conversion is applied if required 

### function operator unsigned long

```cpp
inline operator unsigned long() const
```


**Return**: obtain value as unsigned long, conversion is applied if required 

### function operator long long

```cpp
inline operator long long() const
```


**Return**: obtain value as long long, conversion is applied if required 

### function operator unsigned long long

```cpp
inline operator unsigned long long() const
```


**Return**: obtain value as unsigned long long, conversion is applied if required 

### function operator float

```cpp
inline operator float() const
```


**Return**: obtain value as float, conversion is applied if required 

### function operator double

```cpp
inline operator double() const
```


**Return**: obtain value as double, conversion is applied if required 

### function clear

```cpp
inline void clear()
```


reset value to null (empty object) 


### function operator=

```cpp
inline JSObject & operator=(
    bool val
)
```


**Return**: reference to current object 

assingment operator 


### function operator=

```cpp
inline JSObject & operator=(
    char * val
)
```


**Return**: reference to current object 

assingment operator 


### function operator=

```cpp
inline JSObject & operator=(
    const char * val
)
```


**Return**: reference to current object 

assingment operator 


### function operator=

```cpp
inline JSObject & operator=(
    const std::string & val
)
```


**Return**: reference to current object 

assingment operator 


### function operator=

```cpp
inline JSObject & operator=(
    double val
)
```


**Return**: reference to current object 

assingment operator 


### function operator=

```cpp
inline JSObject & operator=(
    float val
)
```


**Return**: reference to current object 

assingment operator 


### function operator=

```cpp
inline JSObject & operator=(
    long long val
)
```


**Return**: reference to current object 

assingment operator 


### function operator=

```cpp
inline JSObject & operator=(
    unsigned long long val
)
```


**Return**: reference to current object 

assingment operator 


### function operator=

```cpp
template <typename T >
inline JSObject & operator=(
    T val
)
```


**Return**: reference to current object 

assingment operator 


### function exists

```cpp
bool exists(
    const char * elem
) const
```


**Parameters**: 

  * **elem** member to test for 


**Return**: true if the object has the named member 

check if this object has a member _elem_


### function exists

```cpp
bool exists(
    const std::string & elem
) const
```


**Parameters**: 

  * **elem** member to test for 


**Return**: true if the object has the named member 

check if this object has a member _elem_


### function erase

```cpp
void erase(
    const char * elem
)
```


remove element from object 


### function erase

```cpp
void erase(
    const std::string & elem
)
```


remove element from object 


### function operator()

```cpp
JSObject & operator()(
    const char * elem
)
```


**Parameters**: 

  * **elem** member to access 


**Return**: reference to the accessed member. 

access the member _elem_ of this object. If the member does not exist, it is created 


### function operator()

```cpp
const JSObject & operator()(
    const char * elem
) const
```


**Parameters**: 

  * **elem** member to access 


**Return**: reference to the accessed member or reference to null object if the member does not exist 

access the member _elem_ of this object. 


### function operator()

```cpp
JSObject & operator()(
    const std::string & elem
)
```


**Parameters**: 

  * **elem** member to access 


**Return**: reference to the accessed member. 

access the member _elem_ of this object. If the member does not exist, it is created 


### function operator()

```cpp
const JSObject & operator()(
    const std::string & elem
) const
```


**Parameters**: 

  * **elem** member to access 


**Return**: reference to the accessed member or reference to null object if the member does not exist 

access the member _elem_ of this object. 


### function operator[]

```cpp
JSObject & operator[](
    int idx
)
```


**Parameters**: 

  * **idx** array index 


**Return**: reference to the element in the array or reference to null object if idx<0 

access the array entry with index _idx_, the array is resized if required. 


### function operator[]

```cpp
const JSObject & operator[](
    int idx
) const
```


**Parameters**: 

  * **idx** array index 


**Return**: reference to the element in the array or reference to null object if idx out of range 

access the array entry with index _idx_


### function size

```cpp
inline unsigned size() const
```


**Return**: size of the array. For non-arrays 0 is returned 

determine size of an array 


### function resize

```cpp
void resize(
    unsigned new_size
)
```


**Parameters**: 

  * **new_size** new size 


**Note**: If the object is not an array, it is cleared and then converted to array 

resize array 


### function begin

```cpp
inline iterator begin()
```


**Return**: iterator for beginning of members 

### function end

```cpp
inline iterator end()
```


**Return**: iterator for end of members 

### function begin

```cpp
inline const_iterator begin() const
```


**Return**: iterator for beginning of members 

### function end

```cpp
inline const_iterator end() const
```


**Return**: iterator for end of members 

### function load

```cpp
inline bool load(
    const std::string & s
)
```


**Parameters**: 

  * **s** string to be imported 


**Return**: true if import was successful, false if an error occurred 

import JSON encoded string 


### function dump

```cpp
std::string dump() const
```


**Return**: exported data 

export data as JSON encoded string 


### function dump

```cpp
void dump(
    std::string & s
) const
```


**Parameters**: 

  * **s** exported data is appended to this string 


export data as JSON encoded string and append to provided string 


### function swap

```cpp
void swap(
    JSObject & o
)
```


**Parameters**: 

  * **o** other object 


swap content with other object 


### function logdump

```cpp
std::string logdump(
    bool(*)(const std::string &key) filter_cb
) const
```


**Parameters**: 

  * **filter_cb** filter callback function. The callback is invoked with the name of the JSON member. If the callback returns true, the value is replaced by "<<HIDDEN>>" 


**Return**: data for logging 

export data as JSON string for logging 


### function prettyDump

```cpp
void prettyDump(
    std::string & s
) const
```


**Parameters**: 

  * **s** exported data is appended to this string 


export data as JSON encoded string formatted for easy reading by humans 


### function getVersion

```cpp
static const char * getVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of libvfijson 


## Protected Functions Documentation

### function parse

```cpp
int parse(
    const char * s
)
```


### function parse

```cpp
int parse(
    const char * s,
    unsigned nestinglevel
)
```


### function dump

```cpp
void dump(
    std::string & s,
    bool(*)(const std::string &key) filter_cb
) const
```


### function prettyDump

```cpp
void prettyDump(
    std::string & out,
    int indent
) const
```


## Protected Attributes Documentation

### variable v_type

```cpp
JSType v_type;
```


### variable v_bool

```cpp
bool v_bool;
```


### variable v_string

```cpp
std::string v_string;
```


### variable v_floatnum

```cpp
double v_floatnum;
```


### variable v_intnum

```cpp
long v_intnum;
```


### variable v_object

```cpp
std::map< std::string, JSObject > v_object;
```


### variable v_array

```cpp
std::vector< JSObject > v_array;
```


### variable NullObject

```cpp
static JSObject NullObject;
```


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
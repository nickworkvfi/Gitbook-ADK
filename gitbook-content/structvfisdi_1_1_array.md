---
hidden: true
title: Array\< N \> Struct Template Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

`#include <`<a href="array_8h_source.md">array.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [Array](#af9474cac29f3177edf5e8d72ea4a440c) () |
|   | [Array](#ab3c8fb1a6457936fef9d4071026c9041) (const unsigned char val\[N\]) |
|   | [Array](#aa66b20fdbfba3c4325bd668e8e3cc15c) (const char val\[N\]) |
|   | [Array](#aa9824990fb0f57ad8a84879613260d45) (unsigned long val) |
|   | [Array](#a01cf37d57ed94955ac7758d79fc05592) (int val) |
| void  | [set](#a136c19d9b00e1b17c64b56f49b908612) (const unsigned char val\[N\]) |
| void  | [set](#a75fa559c702f25c24c11ba2bdbf427b3) (unsigned long val) |
| void  | [clear](#ac8bb3912a3ce86b15842e79d0b421204) () |
| unsigned  | [size](#a126a73e6d140f9e2a7b795c20fa42f70) () const |
| unsigned char &  | [operator\[\]](#ac06afde48b738c3e9c9470486c7f8cda) (unsigned idx) |
| const unsigned char &  | [operator\[\]](#a2a6ca96009e73f504bf02d0acad72cf4) (unsigned idx) const |

|                |                                               |
|----------------|-----------------------------------------------|
| Data Fields    |                                               |
| unsigned char  | [v](#a2874e15a65e17beacb9aa719cda33753) \[N\] |

## DetailedDescription {#detailed-description}

### template\<unsignedN\>
struct vfisdi::Array\< N \>

Fixed sized byte array

## Constructor& Destructor Documentation

## Array()\[1/5\] <a href="#af9474cac29f3177edf5e8d72ea4a440c" id="af9474cac29f3177edf5e8d72ea4a440c"></a> {#array-15}

<p><a href="structvfisdi_1_1_array.md">Array</a></p>

inline

constructor, initializes all array values to 0

## Array()\[2/5\] <a href="#ab3c8fb1a6457936fef9d4071026c9041" id="ab3c8fb1a6457936fef9d4071026c9041"></a> {#array-25}

<p><a href="structvfisdi_1_1_array.md">Array</a></p>

inline

constructor, initializes array with provided data,

**Parameters**

\[in\] **val** initialization values

## Array()\[3/5\] <a href="#aa66b20fdbfba3c4325bd668e8e3cc15c" id="aa66b20fdbfba3c4325bd668e8e3cc15c"></a> {#array-35}

<p><a href="structvfisdi_1_1_array.md">Array</a></p>

inline

constructor, initializes array with provided data,

**Parameters**

\[in\] **val** initialization values

## Array()\[4/5\] <a href="#aa9824990fb0f57ad8a84879613260d45" id="aa9824990fb0f57ad8a84879613260d45"></a> {#array-45}

<p><a href="structvfisdi_1_1_array.md">Array</a></p>

inline

constructor, initializes array with provided data,

**Parameters**

\[in\] **val** initialization values found in lower 8\*N bits

## Array()\[5/5\] <a href="#a01cf37d57ed94955ac7758d79fc05592" id="a01cf37d57ed94955ac7758d79fc05592"></a> {#array-55}

<p><a href="structvfisdi_1_1_array.md">Array</a></p>

inline

constructor, initializes array with provided data,

**Parameters**

\[in\] **val** initialization values found in lower 8\*N bits

## MemberFunction Documentation {#member-function-documentation}

## clear() <a href="#ac8bb3912a3ce86b15842e79d0b421204" id="ac8bb3912a3ce86b15842e79d0b421204"></a>

<p>void clear</p>

inline

set all values to 0

## operator\[\]()\[1/2\] <a href="#ac06afde48b738c3e9c9470486c7f8cda" id="ac06afde48b738c3e9c9470486c7f8cda"></a> {#operator-12}

<p>unsigned char& operator\[\]</p>

inline

access array element

**Parameters**

\[in\] **idx** array index

### Returns

reference to element

## operator\[\]()\[2/2\] <a href="#a2a6ca96009e73f504bf02d0acad72cf4" id="a2a6ca96009e73f504bf02d0acad72cf4"></a> {#operator-22}

<p>const unsigned char& operator\[\]</p>

inline

access array element

**Parameters**

\[in\] **idx** array index

### Returns

reference to element

## set()\[1/2\] <a href="#a136c19d9b00e1b17c64b56f49b908612" id="a136c19d9b00e1b17c64b56f49b908612"></a> {#set-12}

<p>void set</p>

inline

set array with provided data,

**Parameters**

\[in\] **val** initialization values

## set()\[2/2\] <a href="#a75fa559c702f25c24c11ba2bdbf427b3" id="a75fa559c702f25c24c11ba2bdbf427b3"></a> {#set-22}

<p>void set</p>

inline

set array with provided data,

**Parameters**

\[in\] **val** initialization values found in lower 8\*N bits

## size() <a href="#a126a73e6d140f9e2a7b795c20fa42f70" id="a126a73e6d140f9e2a7b795c20fa42f70"></a>

<p>unsigned size</p>

inline

obtain size of array

### Returns

size

## FieldDocumentation {#field-documentation}

## v <a href="#a2874e15a65e17beacb9aa719cda33753" id="a2874e15a65e17beacb9aa719cda33753"></a>

<p>unsigned char v\[N\]</p>

array values for direct access

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- sdiapi/src/sdiapi/<a href="array_8h_source.md">array.h</a>

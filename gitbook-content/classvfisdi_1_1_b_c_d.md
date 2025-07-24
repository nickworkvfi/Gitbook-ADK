---
hidden: true
title: BCD\< N \> Class Template Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

`#include <`<a href="bcd_8h_source.md">bcd.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [BCD](#a47d321ad022139a6ba79ffd2e5d0b85f) () |
|   | [BCD](#a32b8853faac80aaa2d70b1f5bf4a0700) (const unsigned char val\[N\]) |
|   | [BCD](#a4476f809b3f64d03a6fa017582115482) (int64_t val) |
|   | [BCD](#a3f305c7eaf015c8e0dab47f6bd00e017) (int val) |
| void  | [set](#a136c19d9b00e1b17c64b56f49b908612) (const unsigned char val\[N\]) |
| bool  | [set](#ab72088b93a24e8f7abf69f17ec3d0f77) (int64_t val) |
| int64_t  | [get](#a38313af2599e5d5f63083024ed576eab) () const |
| unsigned  | [size](#a126a73e6d140f9e2a7b795c20fa42f70) () const |

|                |                                               |
|----------------|-----------------------------------------------|
| Data Fields    |                                               |
| unsigned char  | [v](#a2874e15a65e17beacb9aa719cda33753) \[N\] |

## DetailedDescription {#detailed-description}

### template\<intN\>
class vfisdi::BCD\< N \>

Class for converting to/from <a href="classvfisdi_1_1_b_c_d.md">BCD</a>

## Constructor& Destructor Documentation

## BCD()\[1/4\] <a href="#a47d321ad022139a6ba79ffd2e5d0b85f" id="a47d321ad022139a6ba79ffd2e5d0b85f"></a> {#bcd-14}

<p><a href="classvfisdi_1_1_b_c_d.md">BCD</a></p>

inline

constructor, initializes value to 0

## BCD()\[2/4\] <a href="#a32b8853faac80aaa2d70b1f5bf4a0700" id="a32b8853faac80aaa2d70b1f5bf4a0700"></a> {#bcd-24}

<p><a href="classvfisdi_1_1_b_c_d.md">BCD</a></p>

inline

constructor, set value

**Parameters**

\[in\] **val** value in BCD format

## BCD()\[3/4\] <a href="#a4476f809b3f64d03a6fa017582115482" id="a4476f809b3f64d03a6fa017582115482"></a> {#bcd-34}

<p><a href="classvfisdi_1_1_b_c_d.md">BCD</a></p>

inline

constructor, set value

**Parameters**

\[in\] **val** value in binary format

## BCD()\[4/4\] <a href="#a3f305c7eaf015c8e0dab47f6bd00e017" id="a3f305c7eaf015c8e0dab47f6bd00e017"></a> {#bcd-44}

<p><a href="classvfisdi_1_1_b_c_d.md">BCD</a></p>

inline

constructor, set value

**Parameters**

\[in\] **val** value in binary format

## MemberFunction Documentation {#member-function-documentation}

## get() <a href="#a38313af2599e5d5f63083024ed576eab" id="a38313af2599e5d5f63083024ed576eab"></a>

<p>int64_t get</p>

inline

get value

### Returns

value in binary format

## set()\[1/2\] <a href="#a136c19d9b00e1b17c64b56f49b908612" id="a136c19d9b00e1b17c64b56f49b908612"></a> {#set-12}

<p>void set</p>

inline

set value

**Parameters**

\[in\] **val** value in BCD format

## set()\[2/2\] <a href="#ab72088b93a24e8f7abf69f17ec3d0f77" id="ab72088b93a24e8f7abf69f17ec3d0f77"></a> {#set-22}

<p>bool set</p>

inline

set value

**Parameters**

\[in\] **val** value in binary format

## size() <a href="#a126a73e6d140f9e2a7b795c20fa42f70" id="a126a73e6d140f9e2a7b795c20fa42f70"></a>

<p>unsigned size</p>

inline

obtain size of array

### Returns

size

## FieldDocumentation {#field-documentation}

## v <a href="#a2874e15a65e17beacb9aa719cda33753" id="a2874e15a65e17beacb9aa719cda33753"></a>

<p>unsigned char v\[N\]</p>

value in <a href="classvfisdi_1_1_b_c_d.md">BCD</a> format for direct access

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sdiapi/src/sdiapi/<a href="bcd_8h_source.md">bcd.h</a>

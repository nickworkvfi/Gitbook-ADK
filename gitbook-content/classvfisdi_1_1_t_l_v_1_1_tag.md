---
hidden: true
title: "TLV::Tag Class Reference"
---

[Public Member Functions](#pub-methods) \| [Friends](#friends)

`#include <`<a href="tlv_8h_source.md">tlv.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [Tag](#ac71116d8ae317bc750382dea784d9a47) (const char \*t) |
|   | [Tag](#a1c88eaf44372c7690463bb6faf2e31fa) (unsigned t=0) |
| bool  | [operator==](#a6552293f300e4ddb1ba16392667a4e88) (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &o) const |
| bool  | [operator!=](#a13e770195c6bb38d7f748b738be67cd4) (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &o) const |
| int  | [length](#a91213974fa3ac3959b1c355a9e588f8d) () const |
| const unsigned char \*  | [getBytes](#adef62653631891e48d06b31c57b4658a) () const |
| unsigned  | [getNumber](#a62c8ed2f8553a7c7c4c34cb06128fe96) () const |
| bool  | [constructed](#a27abda24ad246b03c2244f695d7ba639) () const |
| void  | [constructed](#ae823d442c4f8dbb3facbe0fad4a0fec3) (bool c) |

|         |                                           |
|---------|-------------------------------------------|
| Friends |                                           |
| class   | [TLV](#ab3f74f4ec3a5511ee72a99d2af764139) |

## DetailedDescription {#detailed-description}

class for tag ID value handling

## Constructor& Destructor Documentation

## Tag()\[1/2\] <a href="#ac71116d8ae317bc750382dea784d9a47" id="ac71116d8ae317bc750382dea784d9a47"></a> {#tag-12}

<p><a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a></p>

constructor

**Parameters**

\[in\] **t** tag ID as C string, e.g. \"9F01\"

## Tag()\[2/2\] <a href="#a1c88eaf44372c7690463bb6faf2e31fa" id="a1c88eaf44372c7690463bb6faf2e31fa"></a> {#tag-22}

<p><a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a></p>

inline

constructor

**Parameters**

\[in\] **t** tag ID as number, e.g. 0x9F01

## MemberFunction Documentation {#member-function-documentation}

## constructed()\[1/2\] <a href="#a27abda24ad246b03c2244f695d7ba639" id="a27abda24ad246b03c2244f695d7ba639"></a> {#constructed-12}

<p>bool constructed</p>

inline

### Returns

true if constructed tag

## constructed()\[2/2\] <a href="#ae823d442c4f8dbb3facbe0fad4a0fec3" id="ae823d442c4f8dbb3facbe0fad4a0fec3"></a> {#constructed-22}

<p>void constructed</p>

inline

set or clear constructed flag in the tag

## getBytes() <a href="#adef62653631891e48d06b31c57b4658a" id="adef62653631891e48d06b31c57b4658a"></a>

<p>const unsigned char\* getBytes</p>

inline

### Returns

pointer to binary tag ID representation

## getNumber() <a href="#a62c8ed2f8553a7c7c4c34cb06128fe96" id="a62c8ed2f8553a7c7c4c34cb06128fe96"></a>

<p>unsigned getNumber</p>

### Returns

tag ID as number

## length() <a href="#a91213974fa3ac3959b1c355a9e588f8d" id="a91213974fa3ac3959b1c355a9e588f8d"></a>

<p>int length</p>

### Returns

length of the binary representation of the tag

## operator!=() <a href="#a13e770195c6bb38d7f748b738be67cd4" id="a13e770195c6bb38d7f748b738be67cd4"></a>

<p>bool operator!=</p>

inline

compare two tags

### Returns

true if different, else false

## operator==() <a href="#a6552293f300e4ddb1ba16392667a4e88" id="a6552293f300e4ddb1ba16392667a4e88"></a>

<p>bool operator==</p>

inline

compare two tags

### Returns

true if the same, else false

## FriendsAnd Related Function Documentation {#friends-and-related-function-documentation}

## TLV <a href="#ab3f74f4ec3a5511ee72a99d2af764139" id="ab3f74f4ec3a5511ee72a99d2af764139"></a>

<p>friend class <a href="classvfisdi_1_1_t_l_v.md">TLV</a></p>

friend

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sdiapi/src/sdiapi/<a href="tlv_8h_source.md">tlv.h</a>

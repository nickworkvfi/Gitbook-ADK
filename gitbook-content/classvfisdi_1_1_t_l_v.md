---
hidden: true
title: TLV Class Reference
---

[Data Structures](#nested-classes) \| [Public Member Functions](#pub-methods) \| [Protected Member Functions](#pro-methods) \| [Protected Attributes](#pro-attribs)

`#include <`<a href="tlv_8h_source.md">tlv.h</a>`>`

Inheritance diagram for TLV:

![Inheritance graph](classvfisdi_1_1_t_l_v__inherit__graph.png)

\[<a href="graph_legend.md">legend</a>\]

Collaboration diagram for TLV:

![Collaboration graph](classvfisdi_1_1_t_l_v__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

|  |  |
|----|----|
| Data Structures |  |
| class   | <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [TLV](#adadcd6e42174d9efaf5a865af404c110) (const char \*t) |
|   | [TLV](#a8a8f3aeb5d4c632ca8016ce176a21747) (unsigned t=0) |
|   | [TLV](#a88bf7d93f01d3f32956a08ab6f32f73c) (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) |
|   | [TLV](#aed2b08b3df2ad75ba400b3bf8dd774db) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | [operator=](#a75d46eee22a46308f285eb71cae10157) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) |
| void  | [assign](#ae930d8b6374a5c5ec0bfd38daf6c1419) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) |
| void  | [tag](#a3eae1500a6c7de2686a8aa681ffda0f9) (const char \*t) |
| void  | [tag](#ab1ec860091384b859a71b54ecb0b4981) (unsigned t) |
| void  | [tag](#ad19dd4ec1fd1b22699e44b4fbb63a8cd) (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) |
| const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &  | [tag](#ab329e76e88f49dd0d203def343e78adb) () const |
| void  | [operator=](#a82392f1ed229723c1c7df979f4e29087) (const std::string &data) |
| void  | [operator=](#a92d118aca55189a6549b6ce9c9117d97) (const char \*data) |
|   | [operator std::string](#a3888dcd59dd5acd1ca5b9bee4c2e252a) () const |
| std::string  | [getString](#a23bdc20544ca28878b1ffea144ac2730) () const |
| void  | [operator=](#a223ecb947b6d285e46543dab8042d2c5) (long data) |
| void  | [operator=](#a1a78e62dcebf1473663ab7952690f3ac) (int data) |
| void  | [operator=](#a77859fa0bdc7e0f43b79a26fe0da5c23) (unsigned data) |
|   | [operator long](#ad7ce59321a0dd63e7f1fab6dceabe53b) () const |
|   | [operator int](#a48d27bd92e68c69527589ea65a9af69f) () const |
|   | [operator unsigned](#a7fa77e07b31af13679aa65b9cd60e548) () const |
| long  | [getNumber](#af777e662a783ae11cf93d6b5d355277a) () const |
| unsigned long  | [getUnsigned](#a1ea25a489f43dcbe390a609ba912cbcb) () const |
| void  | [operator=](#afd260029cef89db3e86258c8ac847754) (bool data) |
|   | [operator bool](#a67b76affb3b5d35fa419ac234144038b) () const |
| bool  | [getBool](#a56e70a2d753746f23f8bfb677a030086) () const |
| void  | [operator=](#ad6daa5d828624745ba7e25921531f52f) (unsigned char data) |
|   | [operator unsigned char](#a891f3d5b152d0bd0b8bc27726d45a491) () const |
| unsigned char  | [getByte](#ad1a7498668250d5596044bf990ad35f5) () const |
| void  | [operator=](#a4d834054339da8c3b4f06c5b38dd5d30) (const std::vector\< unsigned char \> &data) |
| void  | [operator=](#a2ed0480b92a6c441073c7de9225f7b0c) (const std::vector\< char \> &data) |
| void  | [assign](#ab7fd53770bccecd3bde53277b9b53a29) (const void \*data, unsigned size) |
| std::vector\< unsigned char \> &  | [value](#a91ff9d66f21f0e4ec5fc1dc4a7f9a7e9) () |
| const std::vector\< unsigned char \> &  | [value](#a275964d772537b4db3c7bdec7d53f85c) () const |
| bool  | [load](#a34ae3b644043aa36d38f313a8d32217b) (const std::vector\< unsigned char \> &data, bool indefinite=false) |
| void  | [store](#ab49c30c493b589a012e3f6889baee8dd) (std::vector\< unsigned char \> &data, bool use_indefinite=false) const |
| bool  | [operator==](#adc704c269fd1ee99360afc447920358d) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) const |
| bool  | [operator!=](#a239917db00f9c13d7df8e323582532c8) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) const |
| void  | [dumptree](#a99aee2ed96208af2ef520b3d8e9c6d97) (bool use_indefinite=false, int indent=0, bool skip_toplevel_tag=true) |
| unsigned  | [count](#a5b0bf194cbc6562759f877a82aa5ad28) () const |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | [operator\[\]](#aea4f1a4a85b385f08634a6a8c6e317fa) (unsigned idx) |
| const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | [operator\[\]](#ada66e365c36d43f34151a9b7f5735c3e) (unsigned idx) const |
| void  | [erasepos](#ad1030ac85b7ccb1fe5e190a2d1b40c79) (unsigned idx) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | [operator()](#a30b22ed76f2c6745d8a9d7d075917b72) (const char \*t, unsigned idx=0) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | [operator()](#ad329e848a42ff3f39bd29a9f9c8c0b92) (unsigned t, unsigned idx=0) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | [operator()](#ad406f97de0275e34b6516777846d2c3b) (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t, unsigned idx=0) |
| unsigned  | [count](#a021f777c8da209f75e387bb78f1ddcbe) (const char \*t) const |
| unsigned  | [count](#a60bb5fe248b02ff1ccc01aacca577bd4) (unsigned t) const |
| unsigned  | [count](#a19377f556d4118d75da504a2159398e6) (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) const |
| unsigned  | [rename](#a4059a86d9d3afa2b94a53e8a7e428fd9) (const char \*from, const char \*to) |
| unsigned  | [rename](#ab78b6da71aa6afd0e5a46ada612c237f) (unsigned from, unsigned to) |
| unsigned  | [rename](#ad6fb714f198bc53716e9a713757076f0) (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &from, const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &to) |
| bool  | [constructed](#a27abda24ad246b03c2244f695d7ba639) () const |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | [add](#aea80d57ebb1a89005665d685ded70bda) (const char \*t) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | [add](#a9329215305b8bb3711fe9dbe73398aba) (unsigned t) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | [add](#a272a220c4a8e3f194e6472586c6f1b60) (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) |
| void  | [clear](#ac8bb3912a3ce86b15842e79d0b421204) () |
| unsigned  | [erasetag](#a932be40e588c0287cb1fa38e4f3a152d) (const char \*t) |
| unsigned  | [erasetag](#a11104ed545ccded52eedb452b0150b08) (unsigned t) |
| unsigned  | [erasetag](#a13f15840dc0bdbf7c90020c6a4bc7ecc) (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) |

|  |  |
|----|----|
| Protected Member Functions |  |
| void  | [initSize](#a596d0da8a3f24918e1da061ab58e1ab3) (bool use_indefinite) |
| unsigned  | [storedSize](#a3cc82af912384a0099a9646cd0706815) (bool use_indefinite) const |
| void  | [storeAdd](#aeb3bb0b33fa1d0331fc810db5efddae0) (std::vector\< unsigned char \> &data, bool use_indefinite) const |
| bool  | [load](#af502026d9727fde52b81a3a64f3c620e) (const unsigned char \*&start, const unsigned char \*end, bool indefinite=false) |

|  |  |
|----|----|
| Protected Attributes |  |
| <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a>  | [m_tag](#a48ed14e787b1be6dd92a2782d11a4ff4) |
| std::vector\< unsigned char \>  | [m_data](#a4252108bbe731880b31e853b01cd16d0) |
| std::vector\< std::shared_ptr\< <a href="classvfisdi_1_1_t_l_v.md">TLV</a> \> \>  | [m_child](#afcc2734e12c53b8280390e586b4daf54) |
| unsigned  | [m_contentsize](#abf78ef14b931e61d33be622a0605f454) |

## DetailedDescription {#detailed-description}

class for handling X690 BER <a href="classvfisdi_1_1_t_l_v.md">TLV</a> encoding

A <a href="classvfisdi_1_1_t_l_v.md">TLV</a> object consists of a tag ID and value. The value can be either a primitive value or constructed from a list of <a href="classvfisdi_1_1_t_l_v.md">TLV</a> objects. Whether the object contains a primitive value or other objects is indicated by a flag in the tag ID and can be queried using the [TLV::constructed()](#a27abda24ad246b03c2244f695d7ba639) method. This flag is updated according to the acual use to prevent an inconsistent setting.

Contained <a href="classvfisdi_1_1_t_l_v.md">TLV</a> objects can be accessed by their index or by their tag ID (plus index). If the tag ID does not exist, it is created. If the index does not exist, a new index is added.

## Constructor& Destructor Documentation

## TLV()\[1/4\] <a href="#adadcd6e42174d9efaf5a865af404c110" id="adadcd6e42174d9efaf5a865af404c110"></a> {#tlv-14}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a></p>

inlineexplicit

constructor

**Parameters**

\[in\] **t** tag ID as string

## TLV()\[2/4\] <a href="#a8a8f3aeb5d4c632ca8016ce176a21747" id="a8a8f3aeb5d4c632ca8016ce176a21747"></a> {#tlv-24}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a></p>

inlineexplicit

constructor

**Parameters**

\[in\] **t** tag ID as number

## TLV()\[3/4\] <a href="#a88bf7d93f01d3f32956a08ab6f32f73c" id="a88bf7d93f01d3f32956a08ab6f32f73c"></a> {#tlv-34}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a></p>

inlineexplicit

constructor

**Parameters**

\[in\] **t** tag ID as tag object

## TLV()\[4/4\] <a href="#aed2b08b3df2ad75ba400b3bf8dd774db" id="aed2b08b3df2ad75ba400b3bf8dd774db"></a> {#tlv-44}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a></p>

copy constructor

## MemberFunction Documentation {#member-function-documentation}

## add()\[1/3\] <a href="#aea80d57ebb1a89005665d685ded70bda" id="aea80d57ebb1a89005665d685ded70bda"></a> {#add-13}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a>& add</p>

inline

add tag to end of list

**Parameters**

\[in\] **t** tag ID as string

### Returns

reference to new tag object

## add()\[2/3\] <a href="#a272a220c4a8e3f194e6472586c6f1b60" id="a272a220c4a8e3f194e6472586c6f1b60"></a> {#add-23}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a>& add</p>

add tag to end of list

**Parameters**

\[in\] **t** tag ID as tag object

### Returns

reference to new tag object

## add()\[3/3\] <a href="#a9329215305b8bb3711fe9dbe73398aba" id="a9329215305b8bb3711fe9dbe73398aba"></a> {#add-33}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a>& add</p>

inline

add tag to end of list

**Parameters**

\[in\] **t** tag ID as number

### Returns

reference to new tag object

## assign()\[1/2\] <a href="#ae930d8b6374a5c5ec0bfd38daf6c1419" id="ae930d8b6374a5c5ec0bfd38daf6c1419"></a> {#assign-12}

<p>void assign</p>

assign the content of *o*

**Parameters**

\[in\] **o** other element


{% hint style="info" %}
Unlike the assignment operator, the tag is not copied to support the following use case: \[unsupported block\]
{% endhint %}

## assign()\[2/2\] <a href="#ab7fd53770bccecd3bde53277b9b53a29" id="ab7fd53770bccecd3bde53277b9b53a29"></a> {#assign-22}

<p>void assign</p>

assign memory block

**Parameters**

\[in\] **data** start of memory block \[in\] **size** size of memory block

## clear() <a href="#ac8bb3912a3ce86b15842e79d0b421204" id="ac8bb3912a3ce86b15842e79d0b421204"></a>

<p>void clear</p>

inline

clear value of current tag

## constructed() <a href="#a27abda24ad246b03c2244f695d7ba639" id="a27abda24ad246b03c2244f695d7ba639"></a>

<p>bool constructed</p>

inline

### Returns

true if the current tag is constructed

## count()\[1/4\] <a href="#a5b0bf194cbc6562759f877a82aa5ad28" id="a5b0bf194cbc6562759f877a82aa5ad28"></a> {#count-14}

<p>unsigned count</p>

inline

### Returns

number of children

## count()\[2/4\] <a href="#a021f777c8da209f75e387bb78f1ddcbe" id="a021f777c8da209f75e387bb78f1ddcbe"></a> {#count-24}

<p>unsigned count</p>

inline

Determine the number of tags matching *t*

**Parameters**

\[in\] **t** tag ID as string

### Returns

number of tags

## count()\[3/4\] <a href="#a19377f556d4118d75da504a2159398e6" id="a19377f556d4118d75da504a2159398e6"></a> {#count-34}

<p>unsigned count</p>

Determine the number of tags matching *t*

**Parameters**

\[in\] **t** tag ID as tag object

### Returns

number of tags

## count()\[4/4\] <a href="#a60bb5fe248b02ff1ccc01aacca577bd4" id="a60bb5fe248b02ff1ccc01aacca577bd4"></a> {#count-44}

<p>unsigned count</p>

inline

Determine the number of tags matching *t*

**Parameters**

\[in\] **t** tag ID as number

### Returns

number of tags

## dumptree() <a href="#a99aee2ed96208af2ef520b3d8e9c6d97" id="a99aee2ed96208af2ef520b3d8e9c6d97"></a>

<p>void dumptree</p>

print tree to stdout for debugging purposes

**Parameters**

\[in\] **use_indefinite** if true use indefinite length form, else use definite form \[in\] **indent** indentation level \[in\] **skip_toplevel_tag** skip toplevel tag, which is not part of the data

## erasepos() <a href="#ad1030ac85b7ccb1fe5e190a2d1b40c79" id="ad1030ac85b7ccb1fe5e190a2d1b40c79"></a>

<p>void erasepos</p>

inline

erase child <a href="classvfisdi_1_1_t_l_v.md">TLV</a> object

**Parameters**

\[in\] **idx** child index, it must be in the range 0\...count()-1.


{% hint style="info" %}
There is no range checking of *idx*, this must be handled by the caller
{% endhint %}

## erasetag()\[1/3\] <a href="#a932be40e588c0287cb1fa38e4f3a152d" id="a932be40e588c0287cb1fa38e4f3a152d"></a> {#erasetag-13}

<p>unsigned erasetag</p>

inline

erase tag *t*

### Returns

number of erased tags

## erasetag()\[2/3\] <a href="#a13f15840dc0bdbf7c90020c6a4bc7ecc" id="a13f15840dc0bdbf7c90020c6a4bc7ecc"></a> {#erasetag-23}

<p>unsigned erasetag</p>

erase tag *t*

### Returns

number of erased tags

## erasetag()\[3/3\] <a href="#a11104ed545ccded52eedb452b0150b08" id="a11104ed545ccded52eedb452b0150b08"></a> {#erasetag-33}

<p>unsigned erasetag</p>

inline

erase tag *t*

### Returns

number of erased tags

## getBool() <a href="#a56e70a2d753746f23f8bfb677a030086" id="a56e70a2d753746f23f8bfb677a030086"></a>

<p>bool getBool</p>

### Returns

value of primitive tag as boolean

## getByte() <a href="#ad1a7498668250d5596044bf990ad35f5" id="ad1a7498668250d5596044bf990ad35f5"></a>

<p>unsigned char getByte</p>

### Returns

value of primitive tag as byte

## getNumber() <a href="#af777e662a783ae11cf93d6b5d355277a" id="af777e662a783ae11cf93d6b5d355277a"></a>

<p>long getNumber</p>

### Returns

value of primitive tag as number

## getString() <a href="#a23bdc20544ca28878b1ffea144ac2730" id="a23bdc20544ca28878b1ffea144ac2730"></a>

<p>std::string getString</p>

### Returns

value of primitive tag as string

## getUnsigned() <a href="#a1ea25a489f43dcbe390a609ba912cbcb" id="a1ea25a489f43dcbe390a609ba912cbcb"></a>

<p>unsigned long getUnsigned</p>

### Returns

value of primitive tag as unsigned number

## initSize() <a href="#a596d0da8a3f24918e1da061ab58e1ab3" id="a596d0da8a3f24918e1da061ab58e1ab3"></a>

<p>void initSize</p>

protected

recursively initialize m_contentsize

**Parameters**

\[in\] **use_indefinite** if true assume indefinite length form, else assume definite length form

## load()\[1/2\] <a href="#a34ae3b644043aa36d38f313a8d32217b" id="a34ae3b644043aa36d38f313a8d32217b"></a> {#load-12}

<p>bool load</p>

inline

load binary <a href="classvfisdi_1_1_t_l_v.md">TLV</a> buffer into internal representation

**Parameters**

\[in\] **data** buffer containing TLV data \[in\] **indefinite** if true stop loading at terminating tag (00 00).

## load()\[2/2\] <a href="#af502026d9727fde52b81a3a64f3c620e" id="af502026d9727fde52b81a3a64f3c620e"></a> {#load-22}

<p>bool load</p>

protected

load binary buffer to internal representation

**Parameters**

\[in,out\] **start** start of buffer, gets updated to position after parsing \[in\] **end** end of buffer \[in\] **indefinite** current tag uses indefinite length form, i.e. 0x00 0x00 will terminate current tag.

## operatorbool() <a href="#a67b76affb3b5d35fa419ac234144038b" id="a67b76affb3b5d35fa419ac234144038b"></a> {#operator-bool}

<p>operator bool</p>

inline

### Returns

value of primitive tag as boolean

## operatorint() <a href="#a48d27bd92e68c69527589ea65a9af69f" id="a48d27bd92e68c69527589ea65a9af69f"></a> {#operator-int}

<p>operator int</p>

inline

### Returns

value of primitive tag as number

## operatorlong() <a href="#ad7ce59321a0dd63e7f1fab6dceabe53b" id="ad7ce59321a0dd63e7f1fab6dceabe53b"></a> {#operator-long}

<p>operator long</p>

inline

### Returns

value of primitive tag as number

## operatorstd::string() <a href="#a3888dcd59dd5acd1ca5b9bee4c2e252a" id="a3888dcd59dd5acd1ca5b9bee4c2e252a"></a> {#operator-stdstring}

<p>operator std::string</p>

inline

### Returns

value of primitive tag as string

## operatorunsigned() <a href="#a7fa77e07b31af13679aa65b9cd60e548" id="a7fa77e07b31af13679aa65b9cd60e548"></a> {#operator-unsigned}

<p>operator unsigned</p>

inline

### Returns

value of primitive tag as number

## operatorunsigned char() <a href="#a891f3d5b152d0bd0b8bc27726d45a491" id="a891f3d5b152d0bd0b8bc27726d45a491"></a> {#operator-unsigned-char}

<p>operator unsigned char</p>

inline

### Returns

value of primitive tag as byte

## operator!=() <a href="#a239917db00f9c13d7df8e323582532c8" id="a239917db00f9c13d7df8e323582532c8"></a>

<p>bool operator!=</p>

inline

compare two <a href="classvfisdi_1_1_t_l_v.md">TLV</a> objects

**Parameters**

\[in\] **o** other object

### Returns

true if not equal else false

## operator()()\[1/3\] <a href="#a30b22ed76f2c6745d8a9d7d075917b72" id="a30b22ed76f2c6745d8a9d7d075917b72"></a> {#operator-13}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a>& operator()</p>

inline

access *idx-th* tag having tag value *t*

**Parameters**

\[in\] **t** tag ID as string \[in\] **idx** index of tag

### Returns

reference to tag object


{% hint style="info" %}
If the tag is not found, it is created
{% endhint %}

## operator()()\[2/3\] <a href="#ad406f97de0275e34b6516777846d2c3b" id="ad406f97de0275e34b6516777846d2c3b"></a> {#operator-23}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a>& operator()</p>

access *idx-th* tag having tag value *t*

**Parameters**

\[in\] **t** tag ID as tag object \[in\] **idx** index of tag

### Returns

reference to tag object


{% hint style="info" %}
If the tag is not found, it is created
{% endhint %}

## operator()()\[3/3\] <a href="#ad329e848a42ff3f39bd29a9f9c8c0b92" id="ad329e848a42ff3f39bd29a9f9c8c0b92"></a> {#operator-33}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a>& operator()</p>

inline

access *idx-th* tag having tag value *t*

**Parameters**

\[in\] **t** tag ID as number \[in\] **idx** index of tag

### Returns

reference to tag object


{% hint style="info" %}
If the tag is not found, it is created
{% endhint %}

## operator=()\[1/10\] <a href="#afd260029cef89db3e86258c8ac847754" id="afd260029cef89db3e86258c8ac847754"></a> {#operator-110}

<p>void operator=</p>

assign boolean

**Parameters**

\[in\] **data** value;

## operator=()\[2/10\] <a href="#a92d118aca55189a6549b6ce9c9117d97" id="a92d118aca55189a6549b6ce9c9117d97"></a> {#operator-210}

<p>void operator=</p>

assign string value

**Parameters**

\[in\] **data** value

## operator=()\[3/10\] <a href="#a82392f1ed229723c1c7df979f4e29087" id="a82392f1ed229723c1c7df979f4e29087"></a> {#operator-310}

<p>void operator=</p>

assign string value

**Parameters**

\[in\] **data** value

## operator=()\[4/10\] <a href="#a2ed0480b92a6c441073c7de9225f7b0c" id="a2ed0480b92a6c441073c7de9225f7b0c"></a> {#operator-410}

<p>void operator=</p>

assign vector

**Parameters**

\[in\] **data** value

## operator=()\[5/10\] <a href="#a4d834054339da8c3b4f06c5b38dd5d30" id="a4d834054339da8c3b4f06c5b38dd5d30"></a> {#operator-510}

<p>void operator=</p>

assign vector

**Parameters**

\[in\] **data** value

## operator=()\[6/10\] <a href="#a75d46eee22a46308f285eb71cae10157" id="a75d46eee22a46308f285eb71cae10157"></a> {#operator-610}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a>& operator=</p>

assignment operator

### Returns

reference to this

## operator=()\[7/10\] <a href="#a1a78e62dcebf1473663ab7952690f3ac" id="a1a78e62dcebf1473663ab7952690f3ac"></a> {#operator-710}

<p>void operator=</p>

inline

## operator=()\[8/10\] <a href="#a223ecb947b6d285e46543dab8042d2c5" id="a223ecb947b6d285e46543dab8042d2c5"></a> {#operator-810}

<p>void operator=</p>

assign number

**Parameters**

\[in\] **data** value

## operator=()\[9/10\] <a href="#ad6daa5d828624745ba7e25921531f52f" id="ad6daa5d828624745ba7e25921531f52f"></a> {#operator-910}

<p>void operator=</p>

assign unsigned char

**Parameters**

\[in\] **data** value;

## operator=()\[10/10\] <a href="#a77859fa0bdc7e0f43b79a26fe0da5c23" id="a77859fa0bdc7e0f43b79a26fe0da5c23"></a> {#operator-1010}

<p>void operator=</p>

inline

## operator==() <a href="#adc704c269fd1ee99360afc447920358d" id="adc704c269fd1ee99360afc447920358d"></a>

<p>bool operator==</p>

compare two <a href="classvfisdi_1_1_t_l_v.md">TLV</a> objects

**Parameters**

\[in\] **o** other object

### Returns

true if equal else false

## operator\[\]()\[1/2\] <a href="#aea4f1a4a85b385f08634a6a8c6e317fa" id="aea4f1a4a85b385f08634a6a8c6e317fa"></a> {#operator-12}

<p><a href="classvfisdi_1_1_t_l_v.md">TLV</a>& operator\[\]</p>

inline

access child <a href="classvfisdi_1_1_t_l_v.md">TLV</a> object

**Parameters**

\[in\] **idx** child index, it must be in the range 0\...count()-1.

### Returns

reference to child


{% hint style="info" %}
There is no range checking of *idx*, this must be handled by the caller
{% endhint %}

## operator\[\]()\[2/2\] <a href="#ada66e365c36d43f34151a9b7f5735c3e" id="ada66e365c36d43f34151a9b7f5735c3e"></a> {#operator-22}

<p>const <a href="classvfisdi_1_1_t_l_v.md">TLV</a>& operator\[\]</p>

inline

access child <a href="classvfisdi_1_1_t_l_v.md">TLV</a> object

**Parameters**

\[in\] **idx** child index, it must be in the range 0\...count()-1.

### Returns

const reference to child


{% hint style="info" %}
There is no range checking of *idx*, this must be handled by the caller
{% endhint %}

## rename()\[1/3\] <a href="#a4059a86d9d3afa2b94a53e8a7e428fd9" id="a4059a86d9d3afa2b94a53e8a7e428fd9"></a> {#rename-13}

<p>unsigned rename</p>

inline

Rename all tags matching *from* to *to*

### Returns

number of renamed tags

## rename()\[2/3\] <a href="#ad6fb714f198bc53716e9a713757076f0" id="ad6fb714f198bc53716e9a713757076f0"></a> {#rename-23}

<p>unsigned rename</p>

Rename all tags matching *from* to *to*

### Returns

number of renamed tags

## rename()\[3/3\] <a href="#ab78b6da71aa6afd0e5a46ada612c237f" id="ab78b6da71aa6afd0e5a46ada612c237f"></a> {#rename-33}

<p>unsigned rename</p>

inline

Rename all tags matching *from* to *to*

### Returns

number of renamed tags

## store() <a href="#ab49c30c493b589a012e3f6889baee8dd" id="ab49c30c493b589a012e3f6889baee8dd"></a>

<p>void store</p>

store internal representation to binary <a href="classvfisdi_1_1_t_l_v.md">TLV</a> buffer

**Parameters**

\[out\] **data** output buffer \[in\] **use_indefinite** if true use indefinite length form, else use definite form

## storeAdd() <a href="#aeb3bb0b33fa1d0331fc810db5efddae0" id="aeb3bb0b33fa1d0331fc810db5efddae0"></a>

<p>void storeAdd</p>

protected

add binary dump to buffer

**Parameters**

\[out\] **data** output buffer \[in\] **use_indefinite** if true assume indefinite length form, else assume definite length form

## storedSize() <a href="#a3cc82af912384a0099a9646cd0706815" id="a3cc82af912384a0099a9646cd0706815"></a>

<p>unsigned storedSize</p>

protected

Determine size required for binary representation of this tag and value

**Parameters**

\[in\] **use_indefinite** if true assume indefinite length form, else assume definite length form

### Returns

size in bytes

## tag()\[1/4\] <a href="#ab329e76e88f49dd0d203def343e78adb" id="ab329e76e88f49dd0d203def343e78adb"></a> {#tag-14}

<p>const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a>& tag</p>

inline

get tag ID as tag object

## tag()\[2/4\] <a href="#a3eae1500a6c7de2686a8aa681ffda0f9" id="a3eae1500a6c7de2686a8aa681ffda0f9"></a> {#tag-24}

<p>void tag</p>

inline

set tag ID

**Parameters**

\[in\] **t** tag ID as string


{% hint style="info" %}
based on the contained constructed flag data or children are cleared.
{% endhint %}

## tag()\[3/4\] <a href="#ad19dd4ec1fd1b22699e44b4fbb63a8cd" id="ad19dd4ec1fd1b22699e44b4fbb63a8cd"></a> {#tag-34}

<p>void tag</p>

set tag ID

**Parameters**

\[in\] **t** tag ID as tag object


{% hint style="info" %}
based on the contained constructed flag data or children are cleared.
{% endhint %}

## tag()\[4/4\] <a href="#ab1ec860091384b859a71b54ecb0b4981" id="ab1ec860091384b859a71b54ecb0b4981"></a> {#tag-44}

<p>void tag</p>

inline

set tag ID

**Parameters**

\[in\] **t** tag ID as number


{% hint style="info" %}
based on the contained constructed flag data or children are cleared.
{% endhint %}

## value()\[1/2\] <a href="#a91ff9d66f21f0e4ec5fc1dc4a7f9a7e9" id="a91ff9d66f21f0e4ec5fc1dc4a7f9a7e9"></a> {#value-12}

<p>std::vector\<unsigned char\>& value</p>

### Returns

reference to value of primitive tag as buffer


{% hint style="info" %}
If the tag is not primitive, it is converted to primitive
{% endhint %}
{% hint style="info" %}
It is allowed to update the value of the buffer
{% endhint %}

## value()\[2/2\] <a href="#a275964d772537b4db3c7bdec7d53f85c" id="a275964d772537b4db3c7bdec7d53f85c"></a> {#value-22}

<p>const std::vector\<unsigned char\>& value</p>

### Returns

const reference to value of primitive tag as buffer

## FieldDocumentation {#field-documentation}

## m_child <a href="#afcc2734e12c53b8280390e586b4daf54" id="afcc2734e12c53b8280390e586b4daf54"></a>

<p>std::vector\<std::shared_ptr\<<a href="classvfisdi_1_1_t_l_v.md">TLV</a>\> \> m_child</p>

protected

## m_contentsize <a href="#abf78ef14b931e61d33be622a0605f454" id="abf78ef14b931e61d33be622a0605f454"></a>

<p>unsigned m_contentsize</p>

protected

## m_data <a href="#a4252108bbe731880b31e853b01cd16d0" id="a4252108bbe731880b31e853b01cd16d0"></a>

<p>std::vector\<unsigned char\> m_data</p>

protected

## m_tag <a href="#a48ed14e787b1be6dd92a2782d11a4ff4" id="a48ed14e787b1be6dd92a2782d11a4ff4"></a>

<p><a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> m_tag</p>

protected

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sdiapi/src/sdiapi/<a href="tlv_8h_source.md">tlv.h</a>

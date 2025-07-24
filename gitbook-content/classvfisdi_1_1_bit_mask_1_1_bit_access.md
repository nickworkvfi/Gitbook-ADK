---
hidden: true
title: "BitMask\\< NBITS, ITYPE \\>::BitAccess Class Reference"
---

[Public Member Functions](#pub-methods) \| [Friends](#friends)

`#include <`<a href="array_8h_source.md">array.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
| void  | [operator=](#a794fadcd68c648e79e0f5053fb5b9a43) (const <a href="classvfisdi_1_1_bit_mask_1_1_bit_access.md">BitAccess</a> &o) |
|   | [operator bool](#a67b76affb3b5d35fa419ac234144038b) () const |
| void  | [operator=](#a204e816fb78d6a687b39b27166944cee) (bool b) |

|         |                                               |
|---------|-----------------------------------------------|
| Friends |                                               |
| struct  | [BitMask](#a3e5ccc6e46a9c6bbd35a9593fab1a6ce) |

## DetailedDescription {#detailed-description}

### template\<unsignedNBITS, typename ITYPE = unsigned\>
class vfisdi::BitMask\< NBITS, ITYPE \>::BitAccess

Single bit access object

## MemberFunction Documentation {#member-function-documentation}

## operatorbool() <a href="#a67b76affb3b5d35fa419ac234144038b" id="a67b76affb3b5d35fa419ac234144038b"></a> {#operator-bool}

<p>operator bool</p>

inline

read bit

### Returns

bit value

## operator=()\[1/2\] <a href="#a204e816fb78d6a687b39b27166944cee" id="a204e816fb78d6a687b39b27166944cee"></a> {#operator-12}

<p>void operator=</p>

inline

write bit

**Parameters**

\[in\] **b** bit

## operator=()\[2/2\] <a href="#a794fadcd68c648e79e0f5053fb5b9a43" id="a794fadcd68c648e79e0f5053fb5b9a43"></a> {#operator-22}

<p>void operator=</p>

inline

copy bit

**Parameters**

\[in\] **o** other bit

## FriendsAnd Related Function Documentation {#friends-and-related-function-documentation}

## BitMask <a href="#a3e5ccc6e46a9c6bbd35a9593fab1a6ce" id="a3e5ccc6e46a9c6bbd35a9593fab1a6ce"></a>

<p>friend struct <a href="structvfisdi_1_1_bit_mask.md">BitMask</a></p>

friend

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sdiapi/src/sdiapi/<a href="array_8h_source.md">array.h</a>

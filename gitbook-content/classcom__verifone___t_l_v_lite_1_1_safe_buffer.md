---
hidden: true
title: SafeBuffer Class ReferenceTLVLite
---

[Public Member Functions](#pub-methods)

`#include <`<a href="_safe_buffer_8hpp_source.md">SafeBuffer.hpp</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [SafeBuffer](#a50fcaf26939e74269bdb74bd43a6bd58) (void \*buffer, std::size_t capacity, std::size_t alreadyUsedLength=0) |
| bool  | [append](#abd9ea7617807e1adff185e3f7de7ab23) (char c) |
| bool  | [append](#ac914e7dc36cfd1791970e59ff25037fc) (unsigned char c) |
| bool  | [append](#aae5b1e498b6d5a528f595a22b92364c7) (void const \*data, std::size_t length) |
| bool  | [append](#a9fdfd2e4c23494f1f6a35611d00d9098) (ConstData_t data) |
| bool  | [append](#a46c99a44257ec27667c0189fcde9b01f) (<a href="classcom__verifone___t_l_v_lite_1_1_safe_buffer.md">SafeBuffer</a> const &srcBuilder) |
| void \*  | [getBuffer](#a18d5f4a268d2ff9f0bbcb2dc536f2dfa) () const |
| char \*  | [getCurrentCharPtr](#a51c2a5f2c6bca5e147f4fc4b66a4a7be) () const |
| unsigned char \*  | [getCurrentBytePtr](#a99add9e3a9eea03ceb64e1b6f07c8f4c) () const |
| ConstData_t  | [getDataDesc](#a9aa2540b3d951c79c977dade2b237324) () const |
| std::size_t  | [getLength](#abbd1f7b9eb921ded1d9b7bd1614d6891) () const |
| std::size_t  | [getCapacity](#aa37b5b2909d4a84a1f5ac00b5b4d0c41) () const |
| std::size_t  | [getAvailableLen](#ae5558c736bfd8a2b077e98d2f87bf426) () const |
| bool  | [isFull](#ad753310e7ebeac80873cea6766ad1e60) () const |
| bool  | [isOverflow](#a08e7d9ecf7b3350a5dd3b698bef94bb8) () const |
| template\<typename T \> |  |
| bool  | [append](#a09d7f0ccf628ddb93f2a9ed539286a9a) (T const &rhs) |
| void  | [clear](#ac8bb3912a3ce86b15842e79d0b421204) () |

## DetailedDescription {#detailed-description}

Preprocessor constant definitions Macro definitions Data type definitions Exported variable declarations Exported function declarations Exported class declarations

## Constructor& Destructor Documentation

## SafeBuffer() <a href="#a50fcaf26939e74269bdb74bd43a6bd58" id="a50fcaf26939e74269bdb74bd43a6bd58"></a>

<p><a href="classcom__verifone___t_l_v_lite_1_1_safe_buffer.md">SafeBuffer</a></p>

inline

## MemberFunction Documentation {#member-function-documentation}

## append()\[1/6\] <a href="#abd9ea7617807e1adff185e3f7de7ab23" id="abd9ea7617807e1adff185e3f7de7ab23"></a> {#append-16}

<p>bool append</p>

## append()\[2/6\] <a href="#a9fdfd2e4c23494f1f6a35611d00d9098" id="a9fdfd2e4c23494f1f6a35611d00d9098"></a> {#append-26}

<p>bool append</p>

inline

## append()\[3/6\] <a href="#a46c99a44257ec27667c0189fcde9b01f" id="a46c99a44257ec27667c0189fcde9b01f"></a> {#append-36}

<p>bool append</p>

## append()\[4/6\] <a href="#a09d7f0ccf628ddb93f2a9ed539286a9a" id="a09d7f0ccf628ddb93f2a9ed539286a9a"></a> {#append-46}

<p>bool append</p>

inline

## append()\[5/6\] <a href="#ac914e7dc36cfd1791970e59ff25037fc" id="ac914e7dc36cfd1791970e59ff25037fc"></a> {#append-56}

<p>bool append</p>

inline

## append()\[6/6\] <a href="#aae5b1e498b6d5a528f595a22b92364c7" id="aae5b1e498b6d5a528f595a22b92364c7"></a> {#append-66}

<p>bool append</p>

## clear() <a href="#ac8bb3912a3ce86b15842e79d0b421204" id="ac8bb3912a3ce86b15842e79d0b421204"></a>

<p>void clear</p>

inline

## getAvailableLen() <a href="#ae5558c736bfd8a2b077e98d2f87bf426" id="ae5558c736bfd8a2b077e98d2f87bf426"></a>

<p>std::size_t getAvailableLen</p>

inline

## getBuffer() <a href="#a18d5f4a268d2ff9f0bbcb2dc536f2dfa" id="a18d5f4a268d2ff9f0bbcb2dc536f2dfa"></a>

<p>void\* getBuffer</p>

inline

## getCapacity() <a href="#aa37b5b2909d4a84a1f5ac00b5b4d0c41" id="aa37b5b2909d4a84a1f5ac00b5b4d0c41"></a>

<p>std::size_t getCapacity</p>

inline

## getCurrentBytePtr() <a href="#a99add9e3a9eea03ceb64e1b6f07c8f4c" id="a99add9e3a9eea03ceb64e1b6f07c8f4c"></a>

<p>unsigned char\* getCurrentBytePtr</p>

inline

## getCurrentCharPtr() <a href="#a51c2a5f2c6bca5e147f4fc4b66a4a7be" id="a51c2a5f2c6bca5e147f4fc4b66a4a7be"></a>

<p>char\* getCurrentCharPtr</p>

inline

## getDataDesc() <a href="#a9aa2540b3d951c79c977dade2b237324" id="a9aa2540b3d951c79c977dade2b237324"></a>

<p>ConstData_t getDataDesc</p>

inline

## getLength() <a href="#abbd1f7b9eb921ded1d9b7bd1614d6891" id="abbd1f7b9eb921ded1d9b7bd1614d6891"></a>

<p>std::size_t getLength</p>

inline

## isFull() <a href="#ad753310e7ebeac80873cea6766ad1e60" id="ad753310e7ebeac80873cea6766ad1e60"></a>

<p>bool isFull</p>

inline

## isOverflow() <a href="#a08e7d9ecf7b3350a5dd3b698bef94bb8" id="a08e7d9ecf7b3350a5dd3b698bef94bb8"></a>

<p>bool isOverflow</p>

inline

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- iso8583/export/<a href="_safe_buffer_8hpp_source.md">SafeBuffer.hpp</a>

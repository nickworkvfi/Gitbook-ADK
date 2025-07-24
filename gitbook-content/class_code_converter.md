---
hidden: true
title: CodeConverter Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods)

`#include <`<a href="codeconverter_8h_source.md">codeconverter.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [Encoding](#afb0564821f132bfe74508af8349a0faa) {<br/>  [Enc_None](#afb0564821f132bfe74508af8349a0faaa877d60443644fbd25a1a582fb4be1102) = 0, [Enc_Latin1](#afb0564821f132bfe74508af8349a0faaab344ef64ff97bde2a5be0a6060614c9c) = 1, [Enc_Latin2](#afb0564821f132bfe74508af8349a0faaaf951452b08eae4d39b9395f76b8565db) = 2, [Enc_Latin3](#afb0564821f132bfe74508af8349a0faaac6301e7a781fe47ba09bf7e05b32ad6b) = 3,<br/>  [Enc_Latin4](#afb0564821f132bfe74508af8349a0faaaf46eef9e3727c051112a527facf09fee) = 4, [Enc_Cyrillic](#afb0564821f132bfe74508af8349a0faaa857ba98dd24383f0390224be7a3c9df0) = 5, [Enc_Arabic](#afb0564821f132bfe74508af8349a0faaa18b99fc8bb4bbf026ab9ae72bb133847) = 6, [Enc_Greek](#afb0564821f132bfe74508af8349a0faaae40e974acb89116fdc71488325ce7f9a) = 7,<br/>  [Enc_Hebrew](#afb0564821f132bfe74508af8349a0faaabb4c36a4b2b3f00af4d755383bc5ae3c) = 8, [Enc_Latin5](#afb0564821f132bfe74508af8349a0faaa81d9e8b57d581b2d2c3f76e535591e7e) = 9, [Enc_Latin6](#afb0564821f132bfe74508af8349a0faaa4b1e26b2b2fd6cb1090c5fd11c3840bc) = 10, [Enc_Last](#afb0564821f132bfe74508af8349a0faaaddacdc98cc86f1701b7b50ab62994153) = 11<br/>} |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [CodeConverter](#ae8e933c33bffd2eb397bee86901bf745) () |
| virtual  | [\~CodeConverter](#a471966e9acdf521904a3d9cf7611d590) () |
| std::string  | [string2utf](#a9d6ec9bef4ea9e9722b25ab6c8ae1fe8) (const std::string &str, enum [Encoding](#afb0564821f132bfe74508af8349a0faa) enc) |

## MemberEnumeration Documentation {#member-enumeration-documentation}

## Encoding <a href="#afb0564821f132bfe74508af8349a0faa" id="afb0564821f132bfe74508af8349a0faa"></a>

<p>enum [Encoding](#afb0564821f132bfe74508af8349a0faa)</p>

| Enumerator |  |
|----|----|
| Enc_None  | <p>No encoding, can be used to check valid encoding range</p> |
| Enc_Latin1  | <p>ISO-8859-1 (latin-1)</p> |
| Enc_Latin2  | <p>ISO-8859-2 (latin-2)</p> |
| Enc_Latin3  | <p>ISO-8859-3 (latin-3)</p> |
| Enc_Latin4  | <p>ISO-8859-4 (latin-4)</p> |
| Enc_Cyrillic  | <p>ISO-8859-5 (Cyrillic)</p> |
| Enc_Arabic  | <p>ISO-8859-6 (Arabic)</p> |
| Enc_Greek  | <p>ISO-8859-7 (Greek)</p> |
| Enc_Hebrew  | <p>ISO-8859-8 (Hebrew)</p> |
| Enc_Latin5  | <p>ISO-8859-9 (latin-5)</p> |
| Enc_Latin6  | <p>ISO-8859-10 (latin-6)</p> |
| Enc_Last  | <p>No encoding, can be used to check valid encoding range</p> |

## Constructor& Destructor Documentation

## CodeConverter() <a href="#ae8e933c33bffd2eb397bee86901bf745" id="ae8e933c33bffd2eb397bee86901bf745"></a>

<p><a href="class_code_converter.md">CodeConverter</a></p>

inline

## \~CodeConverter() <a href="#a471966e9acdf521904a3d9cf7611d590" id="a471966e9acdf521904a3d9cf7611d590"></a>

<p>virtual \~<a href="class_code_converter.md">CodeConverter</a></p>

inlinevirtual

## MemberFunction Documentation {#member-function-documentation}

## string2utf() <a href="#a9d6ec9bef4ea9e9722b25ab6c8ae1fe8" id="a9d6ec9bef4ea9e9722b25ab6c8ae1fe8"></a>

<p>string string2utf</p>

converts an string (encoded with Encoding `enc`) to UTF-8

**Parameters**

\[in\] **str** encoded string \[in\] **enc** Encoding of string str

### Returns

UTF-8 string, an empty string in case of error (wrong value for `enc`)

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="codeconverter_8h_source.md">codeconverter.h</a>
- sdi/src/<a href="codeconverter_8cpp.md">codeconverter.cpp</a>

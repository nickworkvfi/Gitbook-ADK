---
hidden: true
title: PrtErrorEntry Struct Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

`#include <`<a href="guiprt_2src_2html_2prt_8h_source.md">prt.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [ErrorType](#ab0df38968e4f03a3f1f6d6df0f31f45a) { [NOT_FOUND](#ab0df38968e4f03a3f1f6d6df0f31f45aacdaa2919bac56fe1090eb3dbb9526472), [UNSUPPORTED](#ab0df38968e4f03a3f1f6d6df0f31f45aadb29f51e8818eebf58eaf92ba47467c9), [CORRUPT](#ab0df38968e4f03a3f1f6d6df0f31f45aab12f2ed7d74c470a240047ce447fc99c) } |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [PrtErrorEntry](#ac97d3d215506ef11e92a308141ad37a4) ([ErrorType](#ab0df38968e4f03a3f1f6d6df0f31f45a) t, const std::string &n) |

|  |  |
|----|----|
| Data Fields |  |
| enum [vfiprt::PrtErrorEntry::ErrorType](#ab0df38968e4f03a3f1f6d6df0f31f45a)  | [type](#a5bfa63455b05716c2fa9a72449f727ce) |
| std::string  | [name](#a9b45b3e13bd9167aab02e17e08916231) |

## DetailedDescription {#detailed-description}

error entry

## MemberEnumeration Documentation {#member-enumeration-documentation}

## ErrorType <a href="#ab0df38968e4f03a3f1f6d6df0f31f45a" id="ab0df38968e4f03a3f1f6d6df0f31f45a"></a>

<p>enum [ErrorType](#ab0df38968e4f03a3f1f6d6df0f31f45a)</p>

error type

| Enumerator   |                                                  |
|--------------|--------------------------------------------------|
| NOT_FOUND    | <p>resource not found</p>      |
| UNSUPPORTED  | <p>unsupported data format</p> |
| CORRUPT      | <p>corrupt file</p>            |

## Constructor& Destructor Documentation

## PrtErrorEntry() <a href="#ac97d3d215506ef11e92a308141ad37a4" id="ac97d3d215506ef11e92a308141ad37a4"></a>

<p><a href="structvfiprt_1_1_prt_error_entry.md">PrtErrorEntry</a></p>

inline

constructor

## FieldDocumentation {#field-documentation}

## name <a href="#a9b45b3e13bd9167aab02e17e08916231" id="a9b45b3e13bd9167aab02e17e08916231"></a>

<p>std::string name</p>

involved resource name or error message in case of SCRIPT_ERROR

## type <a href="#a5bfa63455b05716c2fa9a72449f727ce" id="a5bfa63455b05716c2fa9a72449f727ce"></a>

<p>enum [vfiprt::PrtErrorEntry::ErrorType](#ab0df38968e4f03a3f1f6d6df0f31f45a) type</p>

type of the error

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- guiprt/src/html/<a href="guiprt_2src_2html_2prt_8h_source.md">prt.h</a>

---
hidden: true
title: UIErrorEntry Struct Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

`#include <`<a href="gui_8h_source.md">gui.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [ErrorType](#ab0df38968e4f03a3f1f6d6df0f31f45a) { [NOT_FOUND](#ab0df38968e4f03a3f1f6d6df0f31f45aacdaa2919bac56fe1090eb3dbb9526472), [UNSUPPORTED](#ab0df38968e4f03a3f1f6d6df0f31f45aadb29f51e8818eebf58eaf92ba47467c9), [CORRUPT](#ab0df38968e4f03a3f1f6d6df0f31f45aab12f2ed7d74c470a240047ce447fc99c) } |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [UIErrorEntry](#ae48b43984f57ded4a259a40cdb9ba480) ([ErrorType](#ab0df38968e4f03a3f1f6d6df0f31f45a) t, const std::string &n) |

|  |  |
|----|----|
| Data Fields |  |
| enum [vfigui::UIErrorEntry::ErrorType](#ab0df38968e4f03a3f1f6d6df0f31f45a)  | [type](#ae4626eb4c5637a89b72a38dcc42e71e7) |
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

## UIErrorEntry() <a href="#ae48b43984f57ded4a259a40cdb9ba480" id="ae48b43984f57ded4a259a40cdb9ba480"></a>

<p><a href="structvfigui_1_1_u_i_error_entry.md">UIErrorEntry</a></p>

inline

constructor

## FieldDocumentation {#field-documentation}

## name <a href="#a9b45b3e13bd9167aab02e17e08916231" id="a9b45b3e13bd9167aab02e17e08916231"></a>

<p>std::string name</p>

involved resource name or error message in case of SCRIPT_ERROR

## type <a href="#ae4626eb4c5637a89b72a38dcc42e71e7" id="ae4626eb4c5637a89b72a38dcc42e71e7"></a>

<p>enum [vfigui::UIErrorEntry::ErrorType](#ab0df38968e4f03a3f1f6d6df0f31f45a) type</p>

type of the error

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- guiprt/src/html/<a href="gui_8h_source.md">gui.h</a>

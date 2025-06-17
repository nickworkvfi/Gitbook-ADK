---
title: XMLDocument
summary: class for reading/writing/modifying XML documents. 

---

# XMLDocument



class for reading/writing/modifying XML documents.  [More...](#detailed-description)


`#include <xmldoc.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct [XMLNode](struct_x_m_l_node.md) * | **[root](struct_x_m_l_document.md#variable-root)**  |
| enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) | **[encoding](struct_x_m_l_document.md#variable-encoding)**  |

## Detailed Description

```cpp
class XMLDocument;
```

class for reading/writing/modifying XML documents. 

[XMLDocument](struct_x_m_l_document.md) is a class for reading/writing/modifying XML documents. The document is internally stored as a tree. Path names are used to access nodes within this tree. the path names have one of the following forms:

` <node-name>/<node-name>/<node-name>/...`

node-name may be one of: 

* `node-name`: refers to the first node with the given name 
* `node-name#n:` refers to the (n+1)-th node with the given name, i.e. `node-name` is equivalent to `node-name#0`
* `*`: refers to the first node with any name 
* `*#n:` refers to the (n+1)-th node with any name 
* `#n:` refers to the (n+1)-th node with an empty name, i.e. a text node


Note that when using `*#n` no matching with backtracking is performed. For example take the following XML-fragment: 

```
<a/>
<b>text</b>
```

`*``/#0` does not match any nodes, since * matches `a` and `a` has no child nodes. 

## Public Attributes Documentation

### variable root

```cpp
struct XMLNode * root;
```


### variable encoding

```cpp
enum XMLTokenizer__Encoding encoding;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
---
title: sdi/src/xmldoc.h

---

# sdi/src/xmldoc.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[XMLTokenizer](struct_x_m_l_tokenizer.md)**  |
| struct | **[XMLNode](struct_x_m_l_node.md)**  |
| class | **[XMLDocument](struct_x_m_l_document.md)** <br>class for reading/writing/modifying XML documents.  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding)** { XMLTokenizer__UTF8, XMLTokenizer__ISOLATIN1, XMLTokenizer__ISOLATIN9} |
| enum| **[XMLTokenizer__Token](xmldoc_8h.md#enum-xmltokenizer--token)** { XMLTokenizer__DONE, XMLTokenizer__TEXT, XMLTokenizer__START_NODE, XMLTokenizer__STOP_NODE, XMLTokenizer__EMPTY_NODE, XMLTokenizer__NODE_DONE, XMLTokenizer__ATTRIBUTE, XMLTokenizer__SYNTAX_ERROR} |
| enum| **[XMLNode__NodeType](xmldoc_8h.md#enum-xmlnode--nodetype)** { XMLNode__ROOT, XMLNode__NODE, XMLNode__ATTRIBUTE, XMLNode__VALUE, XMLNode__ANY} |
| enum| **[XMLNode__CloneMode](xmldoc_8h.md#enum-xmlnode--clonemode)** { XMLNode__CLONE_ALL, XMLNode__CLONE_ATTRIBUTE} |

## Functions

|                | Name           |
| -------------- | -------------- |
| enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) | **[XMLTokenizer__readHeader](xmldoc_8h.md#function-xmltokenizer--readheader)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| enum [XMLTokenizer__Token](xmldoc_8h.md#enum-xmltokenizer--token) | **[XMLTokenizer__readToken](xmldoc_8h.md#function-xmltokenizer--readtoken)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| void | **[XMLTokenizer__Constructor](xmldoc_8h.md#function-xmltokenizer--constructor)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| void | **[XMLTokenizer__Destructor](xmldoc_8h.md#function-xmltokenizer--destructor)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| void | **[XMLTokenizer__init](xmldoc_8h.md#function-xmltokenizer--init)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this, char * buffer, char *(*)(void *fill_data) fill, void * fill_data) |
| enum [XMLTokenizer__Token](xmldoc_8h.md#enum-xmltokenizer--token) | **[XMLTokenizer__nextToken](xmldoc_8h.md#function-xmltokenizer--nexttoken)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| void | **[XMLNode__Constructor](xmldoc_8h.md#function-xmlnode--constructor)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * _name, const char * _value) |
| void | **[XMLNode__Constructor2](xmldoc_8h.md#function-xmlnode--constructor2)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * _name, const char * _value, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) source_encoding) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLNode__Create](xmldoc_8h.md#function-xmlnode--create)**(const char * _name, const char * _value) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLNode__Create2](xmldoc_8h.md#function-xmlnode--create2)**(const char * _name, const char * _value, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) source_encoding) |
| void | **[XMLNode__Destructor](xmldoc_8h.md#function-xmlnode--destructor)**(struct [XMLNode](struct_x_m_l_node.md) * _this) |
| void | **[XMLNode__Destroy](xmldoc_8h.md#function-xmlnode--destroy)**(struct [XMLNode](struct_x_m_l_node.md) * _this) |
| int | **[XMLNode__parse](xmldoc_8h.md#function-xmlnode--parse)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * name, struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * t) |
| int | **[XMLNode__write](xmldoc_8h.md#function-xmlnode--write)**(struct [XMLNode](struct_x_m_l_node.md) * _this, char * buffer, int size, int level, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) dest_encoding) |
| void | **[XMLNode__addToContent](xmldoc_8h.md#function-xmlnode--addtocontent)**(struct [XMLNode](struct_x_m_l_node.md) * _this, struct [XMLNode](struct_x_m_l_node.md) * node) |
| void | **[XMLNode__dump](xmldoc_8h.md#function-xmlnode--dump)**(struct [XMLNode](struct_x_m_l_node.md) * _this, FILE * , int level) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLNode__findNode](xmldoc_8h.md#function-xmlnode--findnode)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * name) |
| void | **[XMLNode__insertNode](xmldoc_8h.md#function-xmlnode--insertnode)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * name, struct [XMLNode](struct_x_m_l_node.md) * node) |
| enum [XMLNode__NodeType](xmldoc_8h.md#enum-xmlnode--nodetype) | **[XMLNode__type](xmldoc_8h.md#function-xmlnode--type)**(const struct [XMLNode](struct_x_m_l_node.md) * _this) |
| const char * | **[XMLNode__getName](xmldoc_8h.md#function-xmlnode--getname)**(const struct [XMLNode](struct_x_m_l_node.md) * _this) |
| const char * | **[XMLNode__getValue](xmldoc_8h.md#function-xmlnode--getvalue)**(const struct [XMLNode](struct_x_m_l_node.md) * _this) |
| void | **[XMLNode__setName](xmldoc_8h.md#function-xmlnode--setname)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * _name) |
| void | **[XMLNode__setValue](xmldoc_8h.md#function-xmlnode--setvalue)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * _value) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLNode__clone](xmldoc_8h.md#function-xmlnode--clone)**(const struct [XMLNode](struct_x_m_l_node.md) * _this, enum [XMLNode__CloneMode](xmldoc_8h.md#enum-xmlnode--clonemode) cm, int clone_successor) |
| void | **[XMLNode__swap](xmldoc_8h.md#function-xmlnode--swap)**(struct [XMLNode](struct_x_m_l_node.md) * _this, struct [XMLNode](struct_x_m_l_node.md) * other) |
| void | **[XMLNode__reorderContent](xmldoc_8h.md#function-xmlnode--reordercontent)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * reference[]) |
| void | **[XMLDocument__Constructor](xmldoc_8h.md#function-xmldocument--constructor)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) enc) |
| void | **[XMLDocument__CopyConstructor](xmldoc_8h.md#function-xmldocument--copyconstructor)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const struct [XMLDocument](struct_x_m_l_document.md) * o) |
| struct [XMLDocument](struct_x_m_l_document.md) * | **[XMLDocument__Assign](xmldoc_8h.md#function-xmldocument--assign)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const struct [XMLDocument](struct_x_m_l_document.md) * o) |
| void | **[XMLDocument__Destructor](xmldoc_8h.md#function-xmldocument--destructor)**(struct [XMLDocument](struct_x_m_l_document.md) * _this) |
| void | **[XMLDocument__clear](xmldoc_8h.md#function-xmldocument--clear)**(struct [XMLDocument](struct_x_m_l_document.md) * _this) |
| int | **[XMLDocument__read](xmldoc_8h.md#function-xmldocument--read)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, char * buffer) |
| int | **[XMLDocument__write](xmldoc_8h.md#function-xmldocument--write)**(const struct [XMLDocument](struct_x_m_l_document.md) * _this, char * buffer, int size) |
| void | **[XMLDocument__dump](xmldoc_8h.md#function-xmldocument--dump)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, FILE * ) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLDocument__findNode](xmldoc_8h.md#function-xmldocument--findnode)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const char * name) |
| void | **[XMLDocument__insertNode](xmldoc_8h.md#function-xmldocument--insertnode)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const char * name, struct [XMLNode](struct_x_m_l_node.md) * node) |
| void | **[XMLDocument__removeNode](xmldoc_8h.md#function-xmldocument--removenode)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const char * name) |

## Types Documentation

### enum XMLTokenizer__Encoding

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| XMLTokenizer__UTF8 | |   |
| XMLTokenizer__ISOLATIN1 | |   |
| XMLTokenizer__ISOLATIN9 | |   |




### enum XMLTokenizer__Token

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| XMLTokenizer__DONE | | end of buffer   |
| XMLTokenizer__TEXT | | text node   |
| XMLTokenizer__START_NODE | | begin of start node, e.g. <name   |
| XMLTokenizer__STOP_NODE | | end node, e.g. </name>   |
| XMLTokenizer__EMPTY_NODE | | node was empty, e.g. <name/>   |
| XMLTokenizer__NODE_DONE | | > of the start node has been reached   |
| XMLTokenizer__ATTRIBUTE | | attribute name-value pair   |
| XMLTokenizer__SYNTAX_ERROR | | syntax error   |




tokens recognized by [XMLTokenizer](struct_x_m_l_tokenizer.md)


### enum XMLNode__NodeType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| XMLNode__ROOT | |  root node  |
| XMLNode__NODE | |  plain node, e.g. <foo>  |
| XMLNode__ATTRIBUTE | |  attribute e.g. foo="bar"  |
| XMLNode__VALUE | |  content text  |
| XMLNode__ANY | |   |




type of a node 


### enum XMLNode__CloneMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| XMLNode__CLONE_ALL | |   |
| XMLNode__CLONE_ATTRIBUTE | |   |





## Functions Documentation

### function XMLTokenizer__readHeader

```cpp
enum XMLTokenizer__Encoding XMLTokenizer__readHeader(
    struct XMLTokenizer * _this
)
```


**Parameters**: 

  * **_this** this object 


**Return**: encoding 

read XML-header and extract the encoding. If no encoding is contained ISO-Latin-9 is assumed 


### function XMLTokenizer__readToken

```cpp
enum XMLTokenizer__Token XMLTokenizer__readToken(
    struct XMLTokenizer * _this
)
```


**Parameters**: 

  * **_this** this object 


**Return**: Token 

read one token from the XML-buffer and fill in name/name_len and value/value_len 


### function XMLTokenizer__Constructor

```cpp
void XMLTokenizer__Constructor(
    struct XMLTokenizer * _this
)
```


**Parameters**: 

  * **_this** this object 


constructor. Default encoding is UTF-8 


### function XMLTokenizer__Destructor

```cpp
void XMLTokenizer__Destructor(
    struct XMLTokenizer * _this
)
```


**Parameters**: 

  * **_this** this object 


destructor 


### function XMLTokenizer__init

```cpp
void XMLTokenizer__init(
    struct XMLTokenizer * _this,
    char * buffer,
    char *(*)(void *fill_data) fill,
    void * fill_data
)
```


**Parameters**: 

  * **_this** this object 
  * **buf** 0-terminated buffer, it will be modified temporarily 
  * **fill** callback function that is called when the end of the buffer is encountered 
  * **fill_data** parameter for the callback function 


sets the buffer to be parsed 


### function XMLTokenizer__nextToken

```cpp
enum XMLTokenizer__Token XMLTokenizer__nextToken(
    struct XMLTokenizer * _this
)
```


**Parameters**: 

  * **_this** this object 


**Return**: Token object containing name and value of the token 

read the next token from the buffer. Temporarily terminate name and value with 0-byte. The next call to nextToken() will revert this modification (and will 0-terminate the next token) 


### function XMLNode__Constructor

```cpp
void XMLNode__Constructor(
    struct XMLNode * _this,
    const char * _name,
    const char * _value
)
```


**Parameters**: 

  * **_this** this pointer 
  * **_name** name of the node 
  * **_value** value contained in the node 


constructor 


### function XMLNode__Constructor2

```cpp
void XMLNode__Constructor2(
    struct XMLNode * _this,
    const char * _name,
    const char * _value,
    enum XMLTokenizer__Encoding source_encoding
)
```


**Parameters**: 

  * **_this** this pointer 
  * **_name** name of the node 
  * **_value** value contained in the node 
  * **source_encoding** encoding scheme of _value 


constructor, the input value is converted to internal representation 


### function XMLNode__Create

```cpp
struct XMLNode * XMLNode__Create(
    const char * _name,
    const char * _value
)
```


**Parameters**: 

  * **_name** name of the node 
  * **_value** value contained in the node 


**Return**: allocated object or 0 if no memory could be allocated 

allocate and initialize a new [XMLNode](struct_x_m_l_node.md) (shortcut for malloc + XMLNode__Constructor) 


### function XMLNode__Create2

```cpp
struct XMLNode * XMLNode__Create2(
    const char * _name,
    const char * _value,
    enum XMLTokenizer__Encoding source_encoding
)
```


**Parameters**: 

  * **_name** name of the node 
  * **_value** value contained in the node 
  * **source_encoding** encoding scheme of _value 


**Return**: allocated object or 0 if no memory could be allocated 

allocate and initialize a new [XMLNode](struct_x_m_l_node.md) (shortcut for malloc + XMLNode__Constructor2) 


### function XMLNode__Destructor

```cpp
void XMLNode__Destructor(
    struct XMLNode * _this
)
```


**Parameters**: 

  * **_this** this object 


destructor 


### function XMLNode__Destroy

```cpp
void XMLNode__Destroy(
    struct XMLNode * _this
)
```


**Parameters**: 

  * **_this** object to be released 


short cut for XMLNode__Destructor + free


### function XMLNode__parse

```cpp
int XMLNode__parse(
    struct XMLNode * _this,
    const char * name,
    struct XMLTokenizer * t
)
```


**Parameters**: 

  * **_this** this object 
  * **name** of the current node to be parsed 
  * **t** tokenizer 


**Return**: 

* `1` success 
* `0` failure (syntax error) 

Parser. The tokens are read from the [XMLTokenizer](struct_x_m_l_tokenizer.md). The parsing stops, if an end-node with name _name_ is found. 


### function XMLNode__write

```cpp
int XMLNode__write(
    struct XMLNode * _this,
    char * buffer,
    int size,
    int level,
    enum XMLTokenizer__Encoding dest_encoding
)
```


**Parameters**: 

  * **_this** this object 
  * **buffer** buffer 
  * **size** size of the buffer 
  * **level** level used for indentation 
  * **dest_encoding** destination encoding 


**Return**: number of bytes written without trailing 0-byte or -1 if the buffer was too small. 

write XML-code. 


### function XMLNode__addToContent

```cpp
void XMLNode__addToContent(
    struct XMLNode * _this,
    struct XMLNode * node
)
```


**Parameters**: 

  * **_this** this object 
  * **node** node to append 


append a node to the content list 


### function XMLNode__dump

```cpp
void XMLNode__dump(
    struct XMLNode * _this,
    FILE * ,
    int level
)
```


### function XMLNode__findNode

```cpp
struct XMLNode * XMLNode__findNode(
    struct XMLNode * _this,
    const char * name
)
```


**Parameters**: 

  * **_this** this object 
  * **name** path of the node relative to this node (see [XMLDocument](struct_x_m_l_document.md)) 


**See**: Path description 

**Return**: node if found or NULL 

search for a node inside this node 


### function XMLNode__insertNode

```cpp
void XMLNode__insertNode(
    struct XMLNode * _this,
    const char * name,
    struct XMLNode * node
)
```


**Parameters**: 

  * **_this** this object 
  * **name** path of the node (see [XMLDocument](struct_x_m_l_document.md)) 
  * **node** to be inserted or 0 to remove and delete a node (removeNode()) 


**See**: Path description 

Insert a node. If a node already exists that matches the path the node is replaced. Note that the name of the new node is not taken from the path, therefore, `insertNode`("a/b",new [XMLNode](struct_x_m_l_node.md)("c",0)) will remove node `b` and insert a node with name `c`! If a node is to be appended to a node, use ``...<path>/+. If components of the path do not exist, they are created as simple nodes, e.g. inserting with the path a/b/c/+ will create nodes a, b and c if they do not already exist. 


### function XMLNode__type

```cpp
enum XMLNode__NodeType XMLNode__type(
    const struct XMLNode * _this
)
```


**Parameters**: 

  * **_this** this object 


**See**: [XMLNode](struct_x_m_l_node.md)

**Return**: type of node, one of [XMLNode__ATTRIBUTE](xmldoc_8h.md#enumvalue-xmlnode--attribute), [XMLNode__NODE](xmldoc_8h.md#enumvalue-xmlnode--node), [XMLNode__VALUE](xmldoc_8h.md#enumvalue-xmlnode--value), [XMLNode__ROOT](xmldoc_8h.md#enumvalue-xmlnode--root)

determine the type of node by the combinations of name and value 


### function XMLNode__getName

```cpp
const char * XMLNode__getName(
    const struct XMLNode * _this
)
```


**Parameters**: 

  * **_this** this object 


**Return**: name 

access name 


### function XMLNode__getValue

```cpp
const char * XMLNode__getValue(
    const struct XMLNode * _this
)
```


**Parameters**: 

  * **_this** this object 


**Return**: value 

access value (text) 


### function XMLNode__setName

```cpp
void XMLNode__setName(
    struct XMLNode * _this,
    const char * _name
)
```


**Parameters**: 

  * **_this** this object 
  * **_name** name 


set name 


### function XMLNode__setValue

```cpp
void XMLNode__setValue(
    struct XMLNode * _this,
    const char * _value
)
```


**Parameters**: 

  * **_this** this object 
  * **_value** value (text) 


set value 


### function XMLNode__clone

```cpp
struct XMLNode * XMLNode__clone(
    const struct XMLNode * _this,
    enum XMLNode__CloneMode cm,
    int clone_successor
)
```


**Parameters**: 

  * **_this** this object 
  * **cm** mode: clone all (XMLNode__CLONE_ALL) or clone only the attributes (XMLNode__CLONE_ATTRIBUTE) 
  * **clone_successor** used for recursion, should be initially set to 0 


**Return**: pointer to cloned node 

clone a node including its content 


### function XMLNode__swap

```cpp
void XMLNode__swap(
    struct XMLNode * _this,
    struct XMLNode * other
)
```


**Parameters**: 

  * **_this** this object 
  * **other** other node with which to swapt the content 


swap contents with another node 


### function XMLNode__reorderContent

```cpp
void XMLNode__reorderContent(
    struct XMLNode * _this,
    const char * reference[]
)
```


**Parameters**: 

  * **_this** this object 
  * **reference** null-pointer terminated string array with a reference ordering of the nodes 


**Note**: nodes not found in reference are moved to the end 

reorder content according to an ordering an a reference table 


### function XMLDocument__Constructor

```cpp
void XMLDocument__Constructor(
    struct XMLDocument * _this,
    enum XMLTokenizer__Encoding enc
)
```


**Parameters**: 

  * **_this** this object 
  * **enc** encoding that should be used internally 


constructor 


### function XMLDocument__CopyConstructor

```cpp
void XMLDocument__CopyConstructor(
    struct XMLDocument * _this,
    const struct XMLDocument * o
)
```


**Parameters**: 

  * **_this** this object 
  * **o** object to be copied 


copy constructor, performs deep copy of contained nodes 


### function XMLDocument__Assign

```cpp
struct XMLDocument * XMLDocument__Assign(
    struct XMLDocument * _this,
    const struct XMLDocument * o
)
```


**Parameters**: 

  * **_this** this object 
  * **o** object to be copied 


copy operator, performs deep copy of contained nodes 


### function XMLDocument__Destructor

```cpp
void XMLDocument__Destructor(
    struct XMLDocument * _this
)
```


**Parameters**: 

  * **_this** this object 


destructor 


### function XMLDocument__clear

```cpp
void XMLDocument__clear(
    struct XMLDocument * _this
)
```


remove all contents from the XML-document 


### function XMLDocument__read

```cpp
int XMLDocument__read(
    struct XMLDocument * _this,
    char * buffer
)
```


**Parameters**: 

  * **_this** this object 
  * **buffer** XML-document 


**Return**: 

* `1` success 
* `0` failure 

read an XML-document from a 0-terminated buffer 


### function XMLDocument__write

```cpp
int XMLDocument__write(
    const struct XMLDocument * _this,
    char * buffer,
    int size
)
```


**Parameters**: 

  * **_this** this object 
  * **buffer** buffer 
  * **size** size of the buffer 


**Return**: number of written bytes without the trailing 0 or -1, if the buffer was too small 

write an XML-document as 0-terminated string to a buffer. 


### function XMLDocument__dump

```cpp
void XMLDocument__dump(
    struct XMLDocument * _this,
    FILE * 
)
```


### function XMLDocument__findNode

```cpp
struct XMLNode * XMLDocument__findNode(
    struct XMLDocument * _this,
    const char * name
)
```


**Parameters**: 

  * **_this** this object 
  * **name** path of the node (see [XMLDocument](struct_x_m_l_document.md)) 


**See**: Path description 

**Return**: node if found or NULL 

find node 


### function XMLDocument__insertNode

```cpp
void XMLDocument__insertNode(
    struct XMLDocument * _this,
    const char * name,
    struct XMLNode * node
)
```


**Parameters**: 

  * **_this** this object 
  * **name** path of the node (see [XMLDocument](struct_x_m_l_document.md)) 
  * **node** to be inserted or 0 to remove and delete a node (removeNode()) 


**See**: Path description 

Insert a node. If a node already exists that matches the path the node is replaced. Note that the name of the new node is not taken from the path, therefore, `insertNode`("a/b",new [XMLNode](struct_x_m_l_node.md)("c",0)) will remove node `b` and insert a node with name `c`! If a node is to be appended to a node, use ``...<path>/+. If components of the path do not exist, they are created as simple nodes, e.g. inserting with the path a/b/c/+ will create nodes a, b and c if they do not already exist. 


### function XMLDocument__removeNode

```cpp
void XMLDocument__removeNode(
    struct XMLDocument * _this,
    const char * name
)
```


**Parameters**: 

  * **_this** this object 
  * **name** path of the node 


**See**: Path description 

remove node 




## Source code

```cpp
#ifndef XML_DOC_H
#define XML_DOC_H

#ifndef _SLIM_VERSION

#include <stdio.h>
#include <stdlib.h>

#if defined _ARTEMA
  #include "posix/posix.h"
#endif

#ifdef __cplusplus
extern "C" {
#endif

enum XMLTokenizer__Encoding
{
  XMLTokenizer__UTF8, XMLTokenizer__ISOLATIN1, XMLTokenizer__ISOLATIN9
};

enum XMLTokenizer__Token
{
  XMLTokenizer__DONE,            
  XMLTokenizer__TEXT,            
  XMLTokenizer__START_NODE,      
  XMLTokenizer__STOP_NODE,       
  XMLTokenizer__EMPTY_NODE,      
  XMLTokenizer__NODE_DONE,       
  XMLTokenizer__ATTRIBUTE,       
  XMLTokenizer__SYNTAX_ERROR     
};

struct XMLTokenizer
{

  char *buffer;
  int inside_node;

  char bn; 
  char bv; 

  enum XMLTokenizer__Encoding encoding;
  char *name;
  int name_len;
  char *value;
  int value_len;

  char *(*fill)(void *fill_data);
  void *fill_data;
};

enum XMLTokenizer__Encoding XMLTokenizer__readHeader(struct XMLTokenizer *_this);
enum XMLTokenizer__Token XMLTokenizer__readToken(struct XMLTokenizer *_this);
void XMLTokenizer__Constructor(struct XMLTokenizer *_this);
void XMLTokenizer__Destructor(struct XMLTokenizer *_this);

void XMLTokenizer__init(struct XMLTokenizer *_this, char *buffer, char * (*fill)(void *fill_data), void *fill_data);
enum XMLTokenizer__Token XMLTokenizer__nextToken(struct XMLTokenizer *_this);

enum XMLNode__NodeType
{
  XMLNode__ROOT,      
  XMLNode__NODE,      
  XMLNode__ATTRIBUTE, 
  XMLNode__VALUE,     
  XMLNode__ANY
};

enum XMLNode__CloneMode
{
  XMLNode__CLONE_ALL, XMLNode__CLONE_ATTRIBUTE
};

struct XMLNode
{
  char *name;              
  char *value;             
  struct XMLNode *content; 
  struct XMLNode *next;    
};

void XMLNode__Constructor(struct XMLNode *_this, const char *_name, const char *_value);
void XMLNode__Constructor2(struct XMLNode *_this, const char *_name, const char *_value,
                           enum XMLTokenizer__Encoding source_encoding);
struct XMLNode *XMLNode__Create(const char *_name, const char *_value);
struct XMLNode *XMLNode__Create2(const char *_name, const char *_value,
                                 enum XMLTokenizer__Encoding source_encoding);
void XMLNode__Destructor(struct XMLNode *_this);
void XMLNode__Destroy(struct XMLNode *_this);

int XMLNode__parse(struct XMLNode *_this, const char *name, struct XMLTokenizer *t);

int XMLNode__write(struct XMLNode *_this, char *buffer, int size, int level, enum XMLTokenizer__Encoding dest_encoding);

void XMLNode__addToContent(struct XMLNode *_this, struct XMLNode *node);

void XMLNode__dump(struct XMLNode *_this, FILE *, int level);

struct XMLNode *XMLNode__findNode(struct XMLNode *_this, const char *name);

void XMLNode__insertNode(struct XMLNode *_this, const char *name, struct XMLNode *node);

enum XMLNode__NodeType XMLNode__type(const struct XMLNode *_this);

const char *XMLNode__getName(const struct XMLNode *_this);

const char *XMLNode__getValue(const struct XMLNode *_this);

void XMLNode__setName(struct XMLNode *_this, const char *_name);

void XMLNode__setValue(struct XMLNode *_this, const char *_value);

struct XMLNode *XMLNode__clone(const struct XMLNode *_this, enum XMLNode__CloneMode cm, int clone_successor);

void XMLNode__swap(struct XMLNode *_this, struct XMLNode *other);

void XMLNode__reorderContent(struct XMLNode *_this, const char *reference[]);



struct XMLDocument
{
  struct XMLNode *root;
  enum XMLTokenizer__Encoding encoding;
};


void XMLDocument__Constructor(struct XMLDocument *_this, enum XMLTokenizer__Encoding enc);
void XMLDocument__CopyConstructor(struct XMLDocument *_this, const struct XMLDocument *o);
struct XMLDocument *XMLDocument__Assign(struct XMLDocument *_this, const struct XMLDocument *o);

void XMLDocument__Destructor(struct XMLDocument *_this);

void XMLDocument__clear(struct XMLDocument *_this);

int  XMLDocument__read(struct XMLDocument *_this, char *);
int  XMLDocument__write(const struct XMLDocument *_this, char *, int size);
void  XMLDocument__dump(struct XMLDocument *_this, FILE *);

struct XMLNode *XMLDocument__findNode(struct XMLDocument *_this, const char *name);
void XMLDocument__insertNode(struct XMLDocument *_this, const char *name, struct XMLNode *node);

void XMLDocument__removeNode(struct XMLDocument *_this, const char *name);

#ifdef __cplusplus
}
#endif

#endif // _SLIM_VERSION

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

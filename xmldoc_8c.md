---
title: sdi/src/xmldoc.c

---

# sdi/src/xmldoc.c



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[concat3](xmldoc_8c.md#function-concat3)**(char * dest, int destsize, const char * src1, const char * src2, const char * src3) |
| int | **[decode](xmldoc_8c.md#function-decode)**(char * dest, const char * src, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) source_encoding) |
| int | **[encode](xmldoc_8c.md#function-encode)**(char * dest, const char * src, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) dest_encoding) |
| enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) | **[XMLTokenizer__readHeader](xmldoc_8c.md#function-xmltokenizer--readheader)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| enum [XMLTokenizer__Token](xmldoc_8h.md#enum-xmltokenizer--token) | **[XMLTokenizer__readToken](xmldoc_8c.md#function-xmltokenizer--readtoken)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| void | **[XMLTokenizer__Constructor](xmldoc_8c.md#function-xmltokenizer--constructor)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| void | **[XMLTokenizer__Destructor](xmldoc_8c.md#function-xmltokenizer--destructor)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| void | **[XMLTokenizer__init](xmldoc_8c.md#function-xmltokenizer--init)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this, char * buf, char *(*)(void *fill_data) fill, void * fill_data) |
| enum [XMLTokenizer__Token](xmldoc_8h.md#enum-xmltokenizer--token) | **[XMLTokenizer__nextToken](xmldoc_8c.md#function-xmltokenizer--nexttoken)**(struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * _this) |
| int | **[XMLDocument__read](xmldoc_8c.md#function-xmldocument--read)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, char * buffer) |
| int | **[XMLDocument__read2](xmldoc_8c.md#function-xmldocument--read2)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, char * buffer, char *(*)(void *fill_data) fill, void * fill_data) |
| int | **[XMLDocument__write](xmldoc_8c.md#function-xmldocument--write)**(const struct [XMLDocument](struct_x_m_l_document.md) * _this, char * buffer, int size) |
| void | **[XMLNode__Constructor](xmldoc_8c.md#function-xmlnode--constructor)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * _name, const char * _value) |
| void | **[XMLNode__Constructor2](xmldoc_8c.md#function-xmlnode--constructor2)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * _name, const char * _value, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) source_encoding) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLNode__Create](xmldoc_8c.md#function-xmlnode--create)**(const char * _name, const char * _value) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLNode__Create2](xmldoc_8c.md#function-xmlnode--create2)**(const char * _name, const char * _value, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) source_encoding) |
| void | **[XMLNode__Destructor](xmldoc_8c.md#function-xmlnode--destructor)**(struct [XMLNode](struct_x_m_l_node.md) * _this) |
| void | **[XMLNode__Destroy](xmldoc_8c.md#function-xmlnode--destroy)**(struct [XMLNode](struct_x_m_l_node.md) * _this) |
| void | **[XMLNode__setName](xmldoc_8c.md#function-xmlnode--setname)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * _name) |
| void | **[XMLNode__setValue](xmldoc_8c.md#function-xmlnode--setvalue)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * _value) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLNode__clone](xmldoc_8c.md#function-xmlnode--clone)**(const struct [XMLNode](struct_x_m_l_node.md) * _this, enum [XMLNode__CloneMode](xmldoc_8h.md#enum-xmlnode--clonemode) cm, int clone_successor) |
| int | **[XMLNode__parse](xmldoc_8c.md#function-xmlnode--parse)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * name, struct [XMLTokenizer](struct_x_m_l_tokenizer.md) * t) |
| int | **[XMLNode__write](xmldoc_8c.md#function-xmlnode--write)**(struct [XMLNode](struct_x_m_l_node.md) * _this, char * buffer, int size, int level, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) dest_encoding) |
| void | **[XMLNode__addToContent](xmldoc_8c.md#function-xmlnode--addtocontent)**(struct [XMLNode](struct_x_m_l_node.md) * _this, struct [XMLNode](struct_x_m_l_node.md) * node) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLNode__findNode](xmldoc_8c.md#function-xmlnode--findnode)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * name) |
| void | **[XMLNode__insertNode](xmldoc_8c.md#function-xmlnode--insertnode)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * name, struct [XMLNode](struct_x_m_l_node.md) * node) |
| void | **[XMLNode__reorderContent](xmldoc_8c.md#function-xmlnode--reordercontent)**(struct [XMLNode](struct_x_m_l_node.md) * _this, const char * reference[]) |
| enum [XMLNode__NodeType](xmldoc_8h.md#enum-xmlnode--nodetype) | **[XMLNode__type](xmldoc_8c.md#function-xmlnode--type)**(const struct [XMLNode](struct_x_m_l_node.md) * _this) |
| const char * | **[XMLNode__getName](xmldoc_8c.md#function-xmlnode--getname)**(const struct [XMLNode](struct_x_m_l_node.md) * _this) |
| const char * | **[XMLNode__getValue](xmldoc_8c.md#function-xmlnode--getvalue)**(const struct [XMLNode](struct_x_m_l_node.md) * _this) |
| void | **[XMLNode__swap](xmldoc_8c.md#function-xmlnode--swap)**(struct [XMLNode](struct_x_m_l_node.md) * _this, struct [XMLNode](struct_x_m_l_node.md) * other) |
| void | **[XMLDocument__Constructor](xmldoc_8c.md#function-xmldocument--constructor)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) enc) |
| void | **[XMLDocument__CopyConstructor](xmldoc_8c.md#function-xmldocument--copyconstructor)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const struct [XMLDocument](struct_x_m_l_document.md) * o) |
| struct [XMLDocument](struct_x_m_l_document.md) * | **[XMLDocument__Assign](xmldoc_8c.md#function-xmldocument--assign)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const struct [XMLDocument](struct_x_m_l_document.md) * o) |
| void | **[XMLDocument__Destructor](xmldoc_8c.md#function-xmldocument--destructor)**(struct [XMLDocument](struct_x_m_l_document.md) * _this) |
| void | **[XMLDocument__clear](xmldoc_8c.md#function-xmldocument--clear)**(struct [XMLDocument](struct_x_m_l_document.md) * _this) |
| struct [XMLNode](struct_x_m_l_node.md) * | **[XMLDocument__findNode](xmldoc_8c.md#function-xmldocument--findnode)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const char * name) |
| void | **[XMLDocument__insertNode](xmldoc_8c.md#function-xmldocument--insertnode)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const char * name, struct [XMLNode](struct_x_m_l_node.md) * node) |
| void | **[XMLDocument__removeNode](xmldoc_8c.md#function-xmldocument--removenode)**(struct [XMLDocument](struct_x_m_l_document.md) * _this, const char * name) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INDENT](xmldoc_8c.md#define-indent)**  |
|  | **[YYCTYPE](xmldoc_8c.md#define-yyctype)**  |
|  | **[YYCURSOR](xmldoc_8c.md#define-yycursor)**  |
|  | **[YYLIMIT](xmldoc_8c.md#define-yylimit)**  |
|  | **[YYMARKER](xmldoc_8c.md#define-yymarker)**  |
|  | **[YYFILL](xmldoc_8c.md#define-yyfill)**(n)  |
|  | **[RETURN](xmldoc_8c.md#define-return)**(x)  |


## Functions Documentation

### function concat3

```cpp
static int concat3(
    char * dest,
    int destsize,
    const char * src1,
    const char * src2,
    const char * src3
)
```


**Parameters**: 

  * **dest** destination buffer 
  * **destsize** size of the destination buffer in bytes 
  * **src1** first string 
  * **src2** second string 
  * **src3** third string 


**Return**: 1 if successful, 0 if the buffer was too small 

**Author**: M. Meixner 

**Date**: 25.7.2006 

concatenate three strings and store them in a destination buffer 


### function decode

```cpp
static int decode(
    char * dest,
    const char * src,
    enum XMLTokenizer__Encoding source_encoding
)
```


**Parameters**: 

  * **dest** destination buffer or NULL 
  * **src** source string, 
  * **source_encoding** source encoding 


**Return**: numbe of decoded bytes without terminating 0-byte 

decode string into ISO-8859-15 (Latin-9). Also supports a subset of xml-encodings, e.g. "&quot;" 


### function encode

```cpp
static int encode(
    char * dest,
    const char * src,
    enum XMLTokenizer__Encoding dest_encoding
)
```


**Parameters**: 

  * **dest** destination buffer or NULL 
  * **src** source string, 
  * **dest_encoding** source encoding 


**Return**: numbe of decoded bytes without terminating 0-byte 

encode string. Also supports a subset of xml-encodings, e.g. "&quot;" 


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
    char * buf,
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


### function XMLDocument__read2

```cpp
int XMLDocument__read2(
    struct XMLDocument * _this,
    char * buffer,
    char *(*)(void *fill_data) fill,
    void * fill_data
)
```


**Parameters**: 

  * **_this** this object 
  * **buffer** XML-document 
  * **fill** callback function that is called when the end of the buffer is encountered 
  * **fill_data** parameter for the callback function 


**Return**: 

* `1` success 
* `0` failure 

read an XML-document from a 0-terminated buffer. Large XML documents may be split after '>' into several parts. When a part is completely read, fill() is called. fill() must return a 0-terminated buffer for the respective next part. It is important that the splitting can only be done after a '>' to not confuse the parser. 


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




## Macros Documentation

### define INDENT

```cpp
#define INDENT 2
```


### define YYCTYPE

```cpp
#define YYCTYPE char
```


### define YYCURSOR

```cpp
#define YYCURSOR cursor
```


### define YYLIMIT

```cpp
#define YYLIMIT cursor /* nicht verwendet: 0-Byte markiert das Ende */
```


### define YYMARKER

```cpp
#define YYMARKER marker
```


### define YYFILL

```cpp
#define YYFILL(
    n
)

```


### define RETURN

```cpp
#define RETURN(
    x
)
do { _this->buffer=cursor; return x; } while(0)
```


## Source code

```cpp
#ifndef _SLIM_VERSION

/* Generated by re2c 0.10.6 on Tue Jul 22 17:54:39 2014 */
#line 1 "xmldoc.re"

/* WICHTIG! Diese Datei muss per re2c in C-Code umgewandelt werden:
 *   re2c -o xmldoc.c xmldoc.re
 * (gibt es unter: http://sourceforge.net/projects/re2c/)
 */

#include <string.h>
#include "xmldoc.h"

#if defined _x86 || defined _VOS3 || defined _STM32
  // avoid warning: self-comparison always evaluates to true for "if(YYLIMIT == YYCURSOR)"
  #pragma GCC diagnostic ignored "-Wtautological-compare"
#endif

// the documentation is only recognized within the generated .c file
#define INDENT 2



static int concat3(char *dest, int destsize, const char *src1, const char *src2, const char *src3)
{
  if (strlen(src1) + strlen(src2) + strlen(src3) >= (unsigned int)destsize)
  {
    return 0;
  }

  strcpy(dest, src1);
  strcat(dest, src2);
  strcat(dest, src3);
  return 1;
}


static int decode(char *dest, const char *src, enum XMLTokenizer__Encoding source_encoding)
{
  int cnt = 0;

  for (; *src; src++)
  {
    if (*src == '&')
    {
      unsigned c = 0;

      if (!strncmp(src, "&quot;", 6))
      {
        c = '"';
        src += 5;
      }
      else if (!strncmp(src, "&apos;", 6))
      {
        c = '\'';
        src += 5;
      }
      else if (!strncmp(src, "&amp;", 5))
      {
        c = '&';
        src += 4;
      }
      else if (!strncmp(src, "&lt;", 4))
      {
        c = '<';
        src += 3;
      }
      else if (!strncmp(src, "&gt;", 4))
      {
        c = '>';
        src += 3;
      }
      else if (!strncmp(src, "&nbsp;", 6))
      {
        c = ' ';
        src += 5;
      }

      else if (!strncmp(src, "&uuml;", 6))
      {
        c = 0xfc; // ISO-8859-15 ü
        src += 5;
      }
      else if (!strncmp(src, "&auml;", 6))
      {
        c = 0xe4; // ISO-8859-15 ä
        src += 5;
      }
      else if (!strncmp(src, "&ouml;", 6))
      {
        c = 0xf6; // ISO-8859-15 ö
        src += 5;
      }
      else if (!strncmp(src, "&Uuml;", 6))
      {
        c = 0xdc; // ISO-8859-15 Ü
        src += 5;
      }
      else if (!strncmp(src, "&Auml;", 6))
      {
        c = 0xc4; // ISO-8859-15 Ä
        src += 5;
      }
      else if (!strncmp(src, "&Ouml;", 6))
      {
        c = 0xd6; // ISO-8859-15 Ö
        src += 5;
      }
      else if (!strncmp(src, "&szlig;", 7))
      {
        c = 0xdf; // ISO-8859-15 ß
        src += 6;
      }
      else if (!strncmp(src, "&euro;", 6))
      {
        c = 0xa4; // ISO-8859-15 €
        src += 5;
      }
      else if (!strncmp(src, "&#x", 3))
      {
        const char *s = src + 3;
        c = 0;

        while ((*s >= '0' && *s <= '9') || (*s >= 'a' && *s <= 'f') || (*s >= 'A' && *s <= 'F'))
        {
          if (*s >= '0' && *s <= '9')
          {
            c = 16 * c + *s - '0';
          }
          else if (*s >= 'a' && *s <= 'f')
          {
            c = 16 * c + *s - 'a' + 10;
          }
          else
          {
            c = 16 * c + *s - 'A' + 10;
          }

          s++;
        }

        if (*s == ';')
        {
          src = s;
        }
        else
        {
          c = 0;
        }
      }
      else if (!strncmp(src, "&#", 2))
      {
        const char *s = src + 2;
        c = 0;

        while (*s >= '0' && *s <= '9')
        {
          c = 10 * c + *s++ -'0';
        }

        if (*s == ';')
        {
          src = s;
        }
        else
        {
          c = 0;
        }
      }

      if (c)
      {
        if (dest)
        {
          dest[cnt++] = c;
        }
        else
        {
          cnt++;
        }
      }
    }
    else if ((unsigned char)*src < 128 || source_encoding != XMLTokenizer__UTF8)
    {
      if (dest)
      {
        dest[cnt++] = *src;
      }
      else
      {
        cnt++;
      }
    }
    else if (source_encoding == XMLTokenizer__UTF8)
    {
      // Anzahl der Bytes ermitteln, aus denen sich das Zeichen zusammensetzt
      int l;
      unsigned char mask;
      unsigned c;

      for (l = 6, mask = 0xfc; l >= 2; l--, mask <<= 1) if ((((unsigned char) * src) & mask) == mask)
        {
          break;
        }

      // Bit-Maske fuer Zeichen-Bits;
      mask = ~(mask | (mask >> 1));

      c = ((unsigned char) * src) & mask;
      l--;

      while (l--)
      {
        c = (c << 6) | ((*++src) & 0x3f);
      }

      // ISO-Latin1 + Euro Symbol konvertieren, Rest ignorieren
      if (c < 256)
      {
        if (dest)
        {
          dest[cnt++] = c;
        }
        else
        {
          cnt++;
        }
      }
      else if (c == 0x20ac)
      {
        if (dest)
        {
          dest[cnt++] = (char)0xa4;
        }
        else
        {
          cnt++;
        }
      }
    }
  }

  if (dest)
  {
    dest[cnt] = 0;
  }

  return cnt;
}


static int encode(char *dest, const char *src, enum XMLTokenizer__Encoding dest_encoding)
{
  int cnt = 0;

  if (dest_encoding == XMLTokenizer__ISOLATIN9)
  {
    cnt = strlen(src);

    if (dest)
    {
      strcpy(dest, src);
    }

    return cnt;
  }

  for (; *src; src++)
  {
    switch ((unsigned char) *src)
    {
      case '<':
        if (dest)
        {
          strcpy(dest + cnt, "&lt;");
        }

        cnt += 4;
        break;

      case '>':
        if (dest)
        {
          strcpy(dest + cnt, "&gt;");
        }

        cnt += 4;
        break;

      case '"':
        if (dest)
        {
          strcpy(dest + cnt, "&quot;");
        }

        cnt += 6;
        break;

      case '\'':
        if (dest)
        {
          strcpy(dest + cnt, "&apos;");
        }

        cnt += 6;
        break;

      case '&':
        if (dest)
        {
          strcpy(dest + cnt, "&amp;");
        }

        cnt += 5;
        break;

      case 0xa4:
        if (dest_encoding == XMLTokenizer__UTF8)
        {
          if (dest)
          {
            strcpy(dest + cnt, "\xe2\x82\xac");
          }

          cnt += 3;
        }
        else
        {
          if (dest)
          {
            dest[cnt] = *src;
          }

          cnt++;
        }

        break;

      default:
        if ((unsigned char)*src < 128 || dest_encoding != XMLTokenizer__UTF8)
        {
          if (dest)
          {
            dest[cnt] = *src;
          }

          cnt++;
        }
        else
        {
          if (dest)
          {
            dest[cnt] = 0xc0 + (((unsigned char) * src) >> 6);
            dest[cnt + 1] = 0x80 + (((unsigned char) * src) & 0x3f);
          }

          cnt += 2;
        }

        break;
    }
  }

  if (dest)
  {
    dest[cnt] = 0;
  }

  return cnt;
}


/* Defines, die von re2c benoetigt werden: */
#define YYCTYPE   char
#define YYCURSOR  cursor
#define YYLIMIT   cursor /* nicht verwendet: 0-Byte markiert das Ende */
#define YYMARKER  marker
#define YYFILL(n)

#define RETURN(x) do { _this->buffer=cursor; return x; } while(0)

#line 212 "xmldoc.re"


enum XMLTokenizer__Encoding XMLTokenizer__readHeader(struct XMLTokenizer *_this)
{
  YYCTYPE *cursor = _this->buffer; // Cursor initialisieren
  YYCTYPE *marker;         // fuer re2c

start: // XML-Header lesen

#line 221 "xmldoc.c"
  {
    YYCTYPE yych;

    if ((YYLIMIT - YYCURSOR) < 5)
    {
      YYFILL(5);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy4;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy2;

      case '<':
        goto yy6;

      default:
        goto yy8;
    }

yy2:
    ++YYCURSOR;
    yych = *YYCURSOR;
    goto yy282;
yy3:
#line 226 "xmldoc.re"
    {
      goto start; /* ignorieren */
    }
#line 243 "xmldoc.c"
yy4:
    ++YYCURSOR;
#line 228 "xmldoc.re"
    {
      RETURN(XMLTokenizer__UTF8); /* \0 erreicht: fertig */
    }
#line 248 "xmldoc.c"
yy6:
    yych = *(YYMARKER = ++YYCURSOR);

    switch (yych)
    {
      case '?':
        goto yy9;

      default:
        goto yy7;
    }

yy7:
#line 235 "xmldoc.re"
    {
      cursor--;
      RETURN(XMLTokenizer__UTF8); /* kein Header gefunden */
    }
#line 258 "xmldoc.c"
yy8:
    yych = *++YYCURSOR;
    goto yy7;
yy9:
    yych = *++YYCURSOR;

    switch (yych)
    {
      case 'x':
        goto yy11;

      default:
        goto yy10;
    }

yy10:
    YYCURSOR = YYMARKER;
    goto yy7;
yy11:
    yych = *++YYCURSOR;

    switch (yych)
    {
      case 'm':
        goto yy12;

      default:
        goto yy10;
    }

yy12:
    yych = *++YYCURSOR;

    switch (yych)
    {
      case 'l':
        goto yy13;

      default:
        goto yy10;
    }

yy13:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy15:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      case 'n':
        goto yy20;

      default:
        goto yy13;
    }

yy17:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '>':
        goto yy18;

      default:
        goto yy13;
    }

yy18:
    ++YYCURSOR;
#line 233 "xmldoc.re"
    {
      RETURN(XMLTokenizer__ISOLATIN1); /* geraten */
    }
#line 317 "xmldoc.c"
yy20:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'c':
        goto yy21;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy21:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      case 'o':
        goto yy22;

      default:
        goto yy13;
    }

yy22:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'd':
        goto yy23;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy23:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      case 'i':
        goto yy24;

      default:
        goto yy13;
    }

yy24:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      case 'n':
        goto yy25;

      default:
        goto yy13;
    }

yy25:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      case 'g':
        goto yy26;

      default:
        goto yy13;
    }

yy26:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy26;

      case '=':
        goto yy28;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy28:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy28;

      case '"':
        goto yy30;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy30:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'I':
        goto yy31;

      case 'U':
        goto yy32;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy31:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'S':
        goto yy172;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy32:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'T':
        goto yy33;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy33:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'F':
        goto yy34;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy34:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy35;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy35:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy36;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy36:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy37;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy37:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy39:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '>':
        goto yy170;

      default:
        goto yy37;
    }

yy40:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      case 'n':
        goto yy42;

      default:
        goto yy37;
    }

yy42:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'c':
        goto yy43;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy43:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      case 'o':
        goto yy44;

      default:
        goto yy37;
    }

yy44:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'd':
        goto yy45;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy45:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      case 'i':
        goto yy46;

      default:
        goto yy37;
    }

yy46:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      case 'n':
        goto yy47;

      default:
        goto yy37;
    }

yy47:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      case 'g':
        goto yy48;

      default:
        goto yy37;
    }

yy48:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy48;

      case '=':
        goto yy50;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy50:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy50;

      case '"':
        goto yy52;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy52:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'I':
        goto yy53;

      case 'U':
        goto yy54;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy53:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'S':
        goto yy59;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy54:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'T':
        goto yy55;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy55:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'F':
        goto yy56;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy56:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy57;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy57:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy58;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy58:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy59:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy39;

      case 'O':
        goto yy60;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy60:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy61;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy61:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy62;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy62:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy63;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy63:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy64;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy64:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '9':
        goto yy65;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy65:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy66;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy66:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '1':
        goto yy67;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy67:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy68;

      case '5':
        goto yy70;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy68:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy70:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy71;

      case '?':
        goto yy39;

      case 'e':
        goto yy40;

      default:
        goto yy37;
    }

yy71:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy73:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '>':
        goto yy137;

      default:
        goto yy71;
    }

yy74:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      case 'n':
        goto yy76;

      default:
        goto yy71;
    }

yy76:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'c':
        goto yy77;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy77:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      case 'o':
        goto yy78;

      default:
        goto yy71;
    }

yy78:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'd':
        goto yy79;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy79:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      case 'i':
        goto yy80;

      default:
        goto yy71;
    }

yy80:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      case 'n':
        goto yy81;

      default:
        goto yy71;
    }

yy81:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      case 'g':
        goto yy82;

      default:
        goto yy71;
    }

yy82:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy82;

      case '=':
        goto yy84;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy84:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy84;

      case '"':
        goto yy86;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy86:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'I':
        goto yy87;

      case 'U':
        goto yy88;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy87:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'S':
        goto yy93;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy88:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'T':
        goto yy89;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy89:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'F':
        goto yy90;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy90:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy91;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy91:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy92;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy92:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy93:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'O':
        goto yy94;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy94:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy95;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy95:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy96;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy96:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy97;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy97:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy98;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy98:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '9':
        goto yy99;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy99:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy100;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy100:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '1':
        goto yy101;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy101:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy102;

      case '5':
        goto yy104;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy102:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy104:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy73;

      case 'e':
        goto yy74;

      default:
        goto yy71;
    }

yy105:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      case 'n':
        goto yy110;

      default:
        goto yy102;
    }

yy107:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '>':
        goto yy108;

      default:
        goto yy102;
    }

yy108:
    ++YYCURSOR;
yy109:
#line 230 "xmldoc.re"
    {
      RETURN(XMLTokenizer__ISOLATIN1);
    }
#line 1164 "xmldoc.c"
yy110:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'c':
        goto yy111;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy111:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      case 'o':
        goto yy112;

      default:
        goto yy102;
    }

yy112:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'd':
        goto yy113;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy113:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      case 'i':
        goto yy114;

      default:
        goto yy102;
    }

yy114:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      case 'n':
        goto yy115;

      default:
        goto yy102;
    }

yy115:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      case 'g':
        goto yy116;

      default:
        goto yy102;
    }

yy116:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy116;

      case '=':
        goto yy118;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy118:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy118;

      case '"':
        goto yy120;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy120:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'I':
        goto yy121;

      case 'U':
        goto yy122;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy121:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'S':
        goto yy127;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy122:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'T':
        goto yy123;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy123:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'F':
        goto yy124;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy124:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy125;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy125:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy126;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy126:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy127:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'O':
        goto yy128;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy128:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy129;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy129:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy130;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy130:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy131;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy131:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy132;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy132:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '9':
        goto yy133;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy133:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy134;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy134:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '1':
        goto yy135;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy135:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy136;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy136:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy107;

      case 'e':
        goto yy105;

      default:
        goto yy102;
    }

yy137:
    ++YYCURSOR;
yy138:
#line 231 "xmldoc.re"
    {
      RETURN(XMLTokenizer__ISOLATIN9);
    }
#line 1452 "xmldoc.c"
yy139:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      case 'n':
        goto yy143;

      default:
        goto yy68;
    }

yy141:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '>':
        goto yy142;

      default:
        goto yy68;
    }

yy142:
    yych = *++YYCURSOR;
    goto yy109;
yy143:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'c':
        goto yy144;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy144:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      case 'o':
        goto yy145;

      default:
        goto yy68;
    }

yy145:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'd':
        goto yy146;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy146:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      case 'i':
        goto yy147;

      default:
        goto yy68;
    }

yy147:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      case 'n':
        goto yy148;

      default:
        goto yy68;
    }

yy148:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      case 'g':
        goto yy149;

      default:
        goto yy68;
    }

yy149:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy149;

      case '=':
        goto yy151;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy151:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy151;

      case '"':
        goto yy153;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy153:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'I':
        goto yy154;

      case 'U':
        goto yy155;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy154:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'S':
        goto yy160;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy155:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'T':
        goto yy156;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy156:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'F':
        goto yy157;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy157:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy158;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy158:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy159;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy159:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy160:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy141;

      case 'O':
        goto yy161;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy161:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy162;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy162:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy163;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy163:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy164;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy164:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy165;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy165:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '9':
        goto yy166;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy166:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy167;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy167:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '1':
        goto yy168;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy168:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy169;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy169:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy102;

      case '?':
        goto yy141;

      case 'e':
        goto yy139;

      default:
        goto yy68;
    }

yy170:
    ++YYCURSOR;
#line 232 "xmldoc.re"
    {
      RETURN(XMLTokenizer__UTF8);
    }
#line 1763 "xmldoc.c"
yy172:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy17;

      case 'O':
        goto yy173;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy173:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy174;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy174:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy175;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy175:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy176;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy176:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy177;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy177:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '9':
        goto yy178;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy178:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy179;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy179:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '1':
        goto yy180;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy180:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy181;

      case '5':
        goto yy183;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy181:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy183:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy184;

      case '?':
        goto yy17;

      case 'e':
        goto yy15;

      default:
        goto yy13;
    }

yy184:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy186:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '>':
        goto yy249;

      default:
        goto yy184;
    }

yy187:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      case 'n':
        goto yy189;

      default:
        goto yy184;
    }

yy189:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'c':
        goto yy190;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy190:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      case 'o':
        goto yy191;

      default:
        goto yy184;
    }

yy191:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'd':
        goto yy192;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy192:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      case 'i':
        goto yy193;

      default:
        goto yy184;
    }

yy193:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      case 'n':
        goto yy194;

      default:
        goto yy184;
    }

yy194:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      case 'g':
        goto yy195;

      default:
        goto yy184;
    }

yy195:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy195;

      case '=':
        goto yy197;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy197:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy197;

      case '"':
        goto yy199;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy199:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'I':
        goto yy200;

      case 'U':
        goto yy201;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy200:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'S':
        goto yy206;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy201:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'T':
        goto yy202;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy202:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'F':
        goto yy203;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy203:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy204;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy204:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy205;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy205:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy71;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy206:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'O':
        goto yy207;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy207:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy208;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy208:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy209;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy209:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy210;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy210:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy211;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy211:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '9':
        goto yy212;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy212:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy213;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy213:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '1':
        goto yy214;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy214:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy215;

      case '5':
        goto yy217;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy215:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy217:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy186;

      case 'e':
        goto yy187;

      default:
        goto yy184;
    }

yy218:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      case 'n':
        goto yy222;

      default:
        goto yy215;
    }

yy220:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '>':
        goto yy221;

      default:
        goto yy215;
    }

yy221:
    yych = *++YYCURSOR;
    goto yy109;
yy222:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'c':
        goto yy223;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy223:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      case 'o':
        goto yy224;

      default:
        goto yy215;
    }

yy224:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'd':
        goto yy225;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy225:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      case 'i':
        goto yy226;

      default:
        goto yy215;
    }

yy226:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      case 'n':
        goto yy227;

      default:
        goto yy215;
    }

yy227:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      case 'g':
        goto yy228;

      default:
        goto yy215;
    }

yy228:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy228;

      case '=':
        goto yy230;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy230:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy230;

      case '"':
        goto yy232;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy232:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'I':
        goto yy233;

      case 'U':
        goto yy234;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy233:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'S':
        goto yy239;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy234:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'T':
        goto yy235;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy235:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'F':
        goto yy236;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy236:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy237;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy237:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy238;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy238:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy102;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy239:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'O':
        goto yy240;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy240:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy241;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy241:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy242;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy242:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy243;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy243:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy244;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy244:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '9':
        goto yy245;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy245:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy246;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy246:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '1':
        goto yy247;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy247:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy248;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy248:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy220;

      case 'e':
        goto yy218;

      default:
        goto yy215;
    }

yy249:
    yych = *++YYCURSOR;
    goto yy138;
yy250:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      case 'n':
        goto yy254;

      default:
        goto yy181;
    }

yy252:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '>':
        goto yy253;

      default:
        goto yy181;
    }

yy253:
    yych = *++YYCURSOR;
    goto yy109;
yy254:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'c':
        goto yy255;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy255:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      case 'o':
        goto yy256;

      default:
        goto yy181;
    }

yy256:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'd':
        goto yy257;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy257:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      case 'i':
        goto yy258;

      default:
        goto yy181;
    }

yy258:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      case 'n':
        goto yy259;

      default:
        goto yy181;
    }

yy259:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      case 'g':
        goto yy260;

      default:
        goto yy181;
    }

yy260:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy260;

      case '=':
        goto yy262;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy262:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy262;

      case '"':
        goto yy264;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy264:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'I':
        goto yy265;

      case 'U':
        goto yy266;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy265:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'S':
        goto yy271;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy266:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'T':
        goto yy267;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy267:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'F':
        goto yy268;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy268:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy269;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy269:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy270;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy270:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy68;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy271:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '?':
        goto yy252;

      case 'O':
        goto yy272;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy272:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy273;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy273:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy274;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy274:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '8':
        goto yy275;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy275:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy276;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy276:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '9':
        goto yy277;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy277:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '-':
        goto yy278;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy278:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '1':
        goto yy279;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy279:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '5':
        goto yy280;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy280:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;

    switch (yych)
    {
      case 0x00:
        goto yy10;

      case '"':
        goto yy215;

      case '?':
        goto yy252;

      case 'e':
        goto yy250;

      default:
        goto yy181;
    }

yy281:
    ++YYCURSOR;

    if (YYLIMIT == YYCURSOR)
    {
      YYFILL(1);
    }

    yych = *YYCURSOR;
yy282:

    switch (yych)
    {
      case 0x09:
      case 0x0A:
      case 0x0D:
      case ' ':
        goto yy281;

      default:
        goto yy3;
    }
  }
#line 236 "xmldoc.re"

}

enum XMLTokenizer__Token XMLTokenizer__readToken(struct XMLTokenizer *_this)
{
  YYCTYPE *cursor;
  YYCTYPE *marker;         // fuer re2c
  YYCTYPE *tokstart;

refill:
  ;
  cursor = _this->buffer; // Cursor initialisieren

  _this->name = _this->value = 0;
  _this->name_len = _this->value_len = 0;

start:
  tokstart = cursor;

  if (!_this->inside_node)
  {

#line 2863 "xmldoc.c"
    {
      YYCTYPE yych;

      if ((YYLIMIT - YYCURSOR) < 4)
      {
        YYFILL(4);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x00:
          goto yy285;

        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy287;

        case '<':
          goto yy289;

        default:
          goto yy291;
      }

yy285:
      ++YYCURSOR;
#line 260 "xmldoc.re"
      {
        if (_this->fill)
        {
          char *s = _this->fill(_this->fill_data);

          if (s)
          {
            _this->buffer = s;
            goto refill;
          }
        }

        RETURN(XMLTokenizer__DONE); /* \0 erreicht: fertig */
      }
#line 2890 "xmldoc.c"
yy287:
      ++YYCURSOR;
      yych = *YYCURSOR;
      goto yy320;
yy288:
#line 270 "xmldoc.re"
      {
        goto start; /* remove leading space */
      }
#line 2898 "xmldoc.c"
yy289:
      yych = *(YYMARKER = ++YYCURSOR);

      switch (yych)
      {
        case '!':
          goto yy302;

        case '/':
          goto yy295;

        case ':':
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
        case '_':
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
          goto yy297;

        case '?':
          goto yy300;

        default:
          goto yy290;
      }

yy290:
#line 292 "xmldoc.re"
      {
        RETURN(XMLTokenizer__SYNTAX_ERROR);
      }
#line 2964 "xmldoc.c"
yy291:
      ++YYCURSOR;
      yych = *YYCURSOR;
      goto yy294;
yy292:
#line 284 "xmldoc.re"
      {
        char *c = cursor;
        _this->value = tokstart;

        /* remove trailing whitespace */
        while (c[-1] == ' ' || c[-1] == '\n' || c[-1] == '\r' || c[-1] == '\t')
        {
          c--;
        }

        _this->value_len = c - tokstart;
        RETURN(XMLTokenizer__TEXT);
      }
#line 2979 "xmldoc.c"
yy293:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;
yy294:

      switch (yych)
      {
        case 0x00:
        case '<':
          goto yy292;

        default:
          goto yy293;
      }

yy295:
      yych = *++YYCURSOR;

      switch (yych)
      {
        case ':':
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
        case '_':
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
          goto yy313;

        default:
          goto yy296;
      }

yy296:
      YYCURSOR = YYMARKER;
      goto yy290;
yy297:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case '-':
        case '.':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case ':':
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
        case '_':
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
          goto yy297;

        default:
          goto yy299;
      }

yy299:
#line 273 "xmldoc.re"
      {
        _this->name = tokstart + 1;
        _this->name_len = cursor - tokstart - 1;
        _this->inside_node = 1;
        RETURN(XMLTokenizer__START_NODE);
      }
#line 3132 "xmldoc.c"
yy300:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x00:
          goto yy296;

        case '?':
          goto yy310;

        default:
          goto yy300;
      }

yy302:
      yych = *++YYCURSOR;

      switch (yych)
      {
        case '-':
          goto yy303;

        default:
          goto yy296;
      }

yy303:
      yych = *++YYCURSOR;

      switch (yych)
      {
        case '-':
          goto yy304;

        default:
          goto yy296;
      }

yy304:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x00:
          goto yy296;

        case '-':
          goto yy306;

        default:
          goto yy304;
      }

yy306:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x00:
          goto yy296;

        case '-':
          goto yy307;

        default:
          goto yy304;
      }

yy307:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x00:
          goto yy296;

        case '>':
          goto yy308;

        default:
          goto yy304;
      }

yy308:
      ++YYCURSOR;
#line 271 "xmldoc.re"
      {
        goto start; /* remove comments */
      }
#line 3185 "xmldoc.c"
yy310:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x00:
          goto yy296;

        case '>':
          goto yy311;

        default:
          goto yy300;
      }

yy311:
      ++YYCURSOR;
#line 272 "xmldoc.re"
      {
        goto start; /* remove processing instruction */
      }
#line 3199 "xmldoc.c"
yy313:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy315;

        case '-':
        case '.':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case ':':
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
        case '_':
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
          goto yy313;

        case '>':
          goto yy317;

        default:
          goto yy296;
      }

yy315:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy315;

        case '>':
          goto yy317;

        default:
          goto yy296;
      }

yy317:
      ++YYCURSOR;
#line 278 "xmldoc.re"
      {
        char *c = cursor - 1;

        while (c[-1] == ' ' || c[-1] == '\n' || c[-1] == '\r' || c[-1] == '\t')
        {
          c--;
        }

        _this->name = tokstart + 2;
        _this->name_len = c - tokstart - 2;
        RETURN(XMLTokenizer__STOP_NODE);
      }
#line 3299 "xmldoc.c"
yy319:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;
yy320:

      switch (yych)
      {
        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy319;

        default:
          goto yy288;
      }
    }
#line 293 "xmldoc.re"

  }
  else
  {

#line 3317 "xmldoc.c"
    {
      YYCTYPE yych;

      if ((YYLIMIT - YYCURSOR) < 2)
      {
        YYFILL(2);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x00:
          goto yy323;

        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy325;

        case '/':
          goto yy327;

        case ':':
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
        case '_':
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
          goto yy331;

        case '>':
          goto yy329;

        default:
          goto yy332;
      }

yy323:
      ++YYCURSOR;
#line 296 "xmldoc.re"
      {
        if (_this->fill)
        {
          char *s = _this->fill(_this->fill_data);

          if (s)
          {
            _this->buffer = s;
            goto refill;
          }
        }

        RETURN(XMLTokenizer__DONE); /* \0 erreicht: fertig */
      }
#line 3399 "xmldoc.c"
yy325:
      ++YYCURSOR;
      yych = *YYCURSOR;
      goto yy351;
yy326:
#line 306 "xmldoc.re"
      {
        goto start; /* remove leading space */
      }
#line 3407 "xmldoc.c"
yy327:
      ++YYCURSOR;

      switch ((yych = *YYCURSOR))
      {
        case '>':
          goto yy348;

        default:
          goto yy328;
      }

yy328:
#line 335 "xmldoc.re"
      {
        RETURN(XMLTokenizer__SYNTAX_ERROR);
      }
#line 3417 "xmldoc.c"
yy329:
      ++YYCURSOR;
#line 308 "xmldoc.re"
      {
        _this->inside_node = 0;
        RETURN(XMLTokenizer__NODE_DONE);
      }
#line 3422 "xmldoc.c"
yy331:
      yych = *(YYMARKER = ++YYCURSOR);

      switch (yych)
      {
        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy336;

        case '-':
        case '.':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case ':':
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
        case '_':
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
          goto yy333;

        case '=':
          goto yy338;

        default:
          goto yy328;
      }

yy332:
      yych = *++YYCURSOR;
      goto yy328;
yy333:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy336;

        case '-':
        case '.':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case ':':
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
        case '_':
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
          goto yy333;

        case '=':
          goto yy338;

        default:
          goto yy335;
      }

yy335:
      YYCURSOR = YYMARKER;
      goto yy328;
yy336:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy336;

        case '=':
          goto yy338;

        default:
          goto yy335;
      }

yy338:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy338;

        case '"':
          goto yy340;

        case '\'':
          goto yy342;

        default:
          goto yy335;
      }

yy340:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x00:
          goto yy335;

        case '"':
          goto yy346;

        default:
          goto yy340;
      }

yy342:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;

      switch (yych)
      {
        case 0x00:
          goto yy335;

        case '\'':
          goto yy344;

        default:
          goto yy342;
      }

yy344:
      ++YYCURSOR;
#line 322 "xmldoc.re"
      {
        char *c;
        /* Namen extrahieren */
        c = strchr(tokstart, '=');

        while (c[-1] == ' ' || c[-1] == '\n' || c[-1] == '\r' || c[-1] == '\t')
        {
          c--;
        }

        _this->name = tokstart;
        _this->name_len = c - tokstart;
        /* Wert extrahieren */
        c = strchr(tokstart, '\'');
        _this->value = c + 1;
        _this->value_len = cursor - c - 2;
        RETURN(XMLTokenizer__ATTRIBUTE);
      }
#line 3642 "xmldoc.c"
yy346:
      ++YYCURSOR;
#line 309 "xmldoc.re"
      {
        char *c;
        /* Namen extrahieren */
        c = strchr(tokstart, '=');

        while (c[-1] == ' ' || c[-1] == '\n' || c[-1] == '\r' || c[-1] == '\t')
        {
          c--;
        }

        _this->name = tokstart;
        _this->name_len = c - tokstart;
        /* Wert extrahieren */
        c = strchr(tokstart, '"');
        _this->value = c + 1;
        _this->value_len = cursor - c - 2;
        RETURN(XMLTokenizer__ATTRIBUTE);
      }
#line 3659 "xmldoc.c"
yy348:
      ++YYCURSOR;
#line 307 "xmldoc.re"
      {
        _this->inside_node = 0;
        RETURN(XMLTokenizer__EMPTY_NODE);
      }
#line 3664 "xmldoc.c"
yy350:
      ++YYCURSOR;

      if (YYLIMIT == YYCURSOR)
      {
        YYFILL(1);
      }

      yych = *YYCURSOR;
yy351:

      switch (yych)
      {
        case 0x09:
        case 0x0A:
        case 0x0D:
        case ' ':
          goto yy350;

        default:
          goto yy326;
      }
    }
#line 336 "xmldoc.re"

  }
}

void XMLTokenizer__Constructor(struct XMLTokenizer *_this)
{
  _this->buffer = 0;
  _this->name = _this->value = 0;
  _this->name_len = _this->value_len = 0;
  _this->encoding = XMLTokenizer__UTF8;
  _this->fill = 0;
  _this->fill_data = 0;
}

void XMLTokenizer__Destructor(struct XMLTokenizer *_this)
{
  (void) _this;
}

void XMLTokenizer__init(struct XMLTokenizer *_this, char *buf, char * (*fill)(void *fill_data), void *fill_data)
{
  _this->buffer = buf;
  _this->inside_node = 0;
  _this->encoding = XMLTokenizer__readHeader(_this);
  _this->name = _this->value = 0;
  _this->name_len = _this->value_len = 0;
  _this->fill = fill;
  _this->fill_data = fill_data;
}

enum XMLTokenizer__Token XMLTokenizer__nextToken(struct XMLTokenizer *_this)
{
  enum XMLTokenizer__Token r;

  if (_this->name)
  {
    _this->name[_this->name_len] = _this->bn;
  }

  if (_this->value)
  {
    _this->value[_this->value_len] = _this->bv;
  }

  r = XMLTokenizer__readToken(_this);

  if (_this->name)
  {
    _this->bn = _this->name[_this->name_len];
    _this->name[_this->name_len] = 0;
  }

  if (_this->value)
  {
    _this->bv = _this->value[_this->value_len];
    _this->value[_this->value_len] = 0;
  }

  return r;
}
#undef YYCTYPE
#undef YYCURSOR
#undef YYLIMIT
#undef YYMARKER
#undef YYFILL

#undef RETURN


int XMLDocument__read(struct XMLDocument *_this, char *buffer)
{
  int r;
  struct XMLTokenizer t;
  XMLTokenizer__Constructor(&t);
  XMLTokenizer__init(&t, buffer, 0, 0);

  _this->encoding = t.encoding;

  if (_this->root)
  {
    XMLNode__Destroy(_this->root);
  }

  _this->root = XMLNode__Create(0, 0);

  if (!_this->root)
  {
    return 0;
  }

  r = XMLNode__parse(_this->root, "", &t);
  XMLTokenizer__Destructor(&t);
  return r;
}

int XMLDocument__read2(struct XMLDocument *_this, char *buffer, char * (*fill)(void *fill_data), void *fill_data)
{
  int r;
  struct XMLTokenizer t;
  XMLTokenizer__Constructor(&t);
  XMLTokenizer__init(&t, buffer, fill, fill_data);

  _this->encoding = t.encoding;

  if (_this->root)
  {
    XMLNode__Destroy(_this->root);
  }

  _this->root = XMLNode__Create(0, 0);

  if (!_this->root)
  {
    return 0;
  }

  r = XMLNode__parse(_this->root, "", &t);
  XMLTokenizer__Destructor(&t);
  return r;
}

int XMLDocument__write(const struct XMLDocument *_this, char *buffer, int size)
{
  const char *enc;
  int r;

  switch (_this->encoding)
  {
    default:
    case XMLTokenizer__UTF8:
      enc = "UTF-8";
      break;

    case XMLTokenizer__ISOLATIN1:
      enc = "ISO-8859-1";
      break;

    case XMLTokenizer__ISOLATIN9:
      enc = "ISO-8859-15";
      break;
  }

  r = concat3(buffer, size, "<?xml version=\"1.0\" encoding=\"", enc, "\" standalone=\"no\" ?>");

  if (!r)
  {
    return -1;
  }

  r = strlen(buffer);

  if (_this->root)
  {
    int r2 = XMLNode__write(_this->root, buffer + r, size - r, -INDENT, _this->encoding);

    if (r2 < 0)
    {
      return r2;
    }

    r += r2;
  }

  if (r < size - 1)
  {
    strcat(buffer, "\n");
  }
  else
  {
    return -1;
  }

  r++;

  return r;
}

#if defined(TEST) || defined(TEST2) || defined(TEST3)

void XMLDocument__dump(struct XMLDocument *_this, FILE *fp)
{
  fprintf(fp, "*** dump of XML-tree ***\n");

  if (_this->root)
  {
    XMLNode__dump(_this->root, fp, 0);
  }

  fprintf(fp, "************************\n");
}
#endif

//--------------- XMLNode methods ---------------------------------------

void XMLNode__Constructor(struct XMLNode *_this, const char *_name, const char *_value)
{
  _this->next = _this->content = 0;

  if (_name)
  {
    // Namen duerfen kein '/' oder '#' enthalten: abschneiden
    int l;

    for (l = 0; _name[l] && _name[l] != '/' && _name[l] != '#'; l++);

    _this->name = (char *)malloc(l + 1);

    if (_this->name)
    {
      strncpy(_this->name, _name, l);
      _this->name[l] = 0;
    }
  }
  else
  {
    _this->name = 0;
  }

  if (_value)
  {
    int l = strlen(_value);
    _this->value = (char *)malloc(l + 1);

    if (_this->value)
    {
      strcpy(_this->value, _value);
    }
  }
  else
  {
    _this->value = 0;
  }
}

void XMLNode__Constructor2(struct XMLNode *_this, const char *_name, const char *_value, enum XMLTokenizer__Encoding source_encoding)
{
  _this->next = _this->content = 0;

  if (_name)
  {
    // Namen duerfen kein '/' oder '#' enthalten: abschneiden
    // Namen werden nur als ASCII-Namen unterstuetzt, daher ist keine Umkodierung notwendig
    int l;

    for (l = 0; _name[l] && _name[l] != '/' && _name[l] != '#'; l++);

    _this->name = (char *)malloc(l + 1);

    if (_this->name)
    {
      strncpy(_this->name, _name, l);
      _this->name[l] = 0;
    }
  }
  else
  {
    _this->name = 0;
  }

  if (_value)
  {
    int l = decode(0, _value, source_encoding);
    _this->value = (char *)malloc(l + 1);

    if (_this->value)
    {
      l = decode(_this->value, _value, source_encoding);
    }
  }
  else
  {
    _this->value = 0;
  }
}

struct XMLNode *XMLNode__Create(const char *_name, const char *_value)
{
  struct XMLNode *n = (struct XMLNode *)malloc(sizeof(struct XMLNode));

  if (n)
  {
    XMLNode__Constructor(n, _name, _value);
  }

  return n;
}

struct XMLNode *XMLNode__Create2(const char *_name, const char *_value, enum XMLTokenizer__Encoding source_encoding)
{
  struct XMLNode *n = (struct XMLNode *)malloc(sizeof(struct XMLNode));

  if (n)
  {
    XMLNode__Constructor2(n, _name, _value, source_encoding);
  }

  return n;
}

void XMLNode__Destructor(struct XMLNode *_this)
{
  if (_this->content)
  {
    XMLNode__Destructor(_this->content);
    free(_this->content);
  }

  if (_this->next)
  {
    XMLNode__Destructor(_this->next);
    free(_this->next);
  }

  if (_this->name)
  {
    free(_this->name);
  }

  if (_this->value)
  {
    free(_this->value);
  }
}

void XMLNode__Destroy(struct XMLNode *_this)
{
  XMLNode__Destructor(_this);
  free(_this);
}

void XMLNode__setName(struct XMLNode *_this, const char *_name)
{
  if (_this->name)
  {
    free(_this->name);
  }

  if (_name)
  {
    // Namen duerfen kein '/' oder '#' enthalten: abschneiden
    int l;

    for (l = 0; _name[l] && _name[l] != '/' && _name[l] != '#'; l++);

    _this->name = (char *)malloc(l + 1);

    if (_this->name)
    {
      strncpy(_this->name, _name, l);
      _this->name[l] = 0;
    }
  }
  else
  {
    _this->name = 0;
  }
}

void XMLNode__setValue(struct XMLNode *_this, const char *_value)
{
  if (_this->value)
  {
    free(_this->value);
  }

  if (_value)
  {
    int l = strlen(_value);
    _this->value = (char *)malloc(l + 1);

    if (_this->value)
    {
      strcpy(_this->value, _value);
    }
  }
  else
  {
    _this->value = 0;
  }
}

struct XMLNode *XMLNode__clone(const struct XMLNode *_this, enum XMLNode__CloneMode cm, int clone_successor)
{
  struct XMLNode *n = XMLNode__Create(_this->name, _this->value);

  if (!n)
  {
    return 0;
  }

  if (_this->content)
  {
    n->content = XMLNode__clone(_this->content, cm, 1);
  }

  if (cm == XMLNode__CLONE_ATTRIBUTE)
  {
    if (clone_successor && _this->next && XMLNode__type(_this->next) == XMLNode__ATTRIBUTE)
    {
      n->next = XMLNode__clone(_this->next, cm, 1);
    }
  }
  else
  {
    if (clone_successor && _this->next)
    {
      n->next = XMLNode__clone(_this->next, cm, 1);
    }
  }

  return n;
}


int XMLNode__parse(struct XMLNode *_this, const char *name, struct XMLTokenizer *t)
// return success
{
  enum XMLTokenizer__Token r;
  int balance = 0; // number of XMLTokenizer__START_NODE-XMLTokenizer__STOP_NODE

  while ((r = XMLTokenizer__nextToken(t)) != XMLTokenizer__DONE)
  {
    switch (r)
    {
      case XMLTokenizer__DONE:
        break; // just to remove a compiler warning

      case XMLTokenizer__TEXT:
      {
        struct XMLNode *n = XMLNode__Create2(0, t->value, t->encoding);

        if (!n)
        {
          return 0;
        }

        XMLNode__addToContent(_this, n);
        break;
      }

      case XMLTokenizer__START_NODE:
      {
        struct XMLNode *n = XMLNode__Create(t->name, 0);

        if (!n)
        {
          return 0;
        }

        balance++;
        XMLNode__addToContent(_this, n);

        while ((r = XMLTokenizer__nextToken(t)) == XMLTokenizer__ATTRIBUTE)
        {
          struct XMLNode *m = XMLNode__Create2(t->name, t->value, t->encoding);

          if (!m)
          {
            return 0;
          }

          XMLNode__addToContent(n, m);
        }

        if (r == XMLTokenizer__EMPTY_NODE)
        {
          if (name[0] != 0)
          {
            balance--;  // #4422: just for the special case that
          }

          // the outermost node is of the form <foo/>
          continue;
        }

        if (r != XMLTokenizer__NODE_DONE)
        {
          return 0; // Syntax-Fehler
        }

        if (!XMLNode__parse(n, n->name, t))
        {
          return 0;
        }

        break;
      }

      case XMLTokenizer__STOP_NODE:
      {
        balance--;

        if (strcmp(name, t->name))
        {
          return 0; // Syntax-Fehler: Name stimmt nicht
        }

        return 1;
      }

      case XMLTokenizer__NODE_DONE:
      case XMLTokenizer__EMPTY_NODE:
      case XMLTokenizer__ATTRIBUTE:
      case XMLTokenizer__SYNTAX_ERROR:
        return 0;
    }

    if (balance < (name[0] == 0 ? 1 : -1))
    {
      return 0;  // closing node without opening node
    }
  }

  // the closing node is parsed in the next lower recursion level, therefore, the
  // balance must be -1 except for the topmost node, since for this the
  // opening node is parsed but the closing node is parsed in the recursion, thus
  // in this case the balance is 1
  return name[0] == 0 ? balance == 1 : balance == -1;
}

int XMLNode__write(struct XMLNode *_this, char *buffer, int size, int level, enum XMLTokenizer__Encoding dest_encoding)
{
  int r = 0, r2 = 0;
  int nodecnt = 0; // number of all nodes but attributes
  struct XMLNode *i;
  enum XMLNode__NodeType t = XMLNode__type(_this);

  if (t == XMLNode__VALUE)
  {
    r = encode(0, _this->value, dest_encoding);

    if (r >= size)
    {
      return -1;
    }

    r = encode(buffer, _this->value, dest_encoding);
    return r;
  }

  if (t == XMLNode__ATTRIBUTE)
  {
    r = concat3(buffer, size, " ", _this->name, "=\"");

    if (!r)
    {
      return -1;
    }

    r = strlen(buffer);
    buffer += r;
    size -= r;
    r2 = r;
    r = encode(0, _this->value, dest_encoding);

    if (r >= size - 1)
    {
      return -1;
    }

    r = encode(buffer, _this->value, dest_encoding);
    buffer[r++] = '"';
    buffer[r] = 0;
    return r2 + r;
  }

  if (t == XMLNode__NODE)
  {
    r = 2 + level + strlen(_this->name);

    if (size <= r)
    {
      return -1;
    }

    sprintf(buffer, "\n%*s<%s", level, "", _this->name);
    r2 += r;
  }

  for (i = _this->content; i; i = i->next)
  {
    if (XMLNode__type(i) == XMLNode__ATTRIBUTE)
    {
      r = XMLNode__write(i, buffer + r2, size - r2, level + INDENT, dest_encoding);

      if (r < 0 || r >= size)
      {
        return -1;
      }

      r2 += r;
    }
    else
    {
      nodecnt++;
    }
  }

  if (t == XMLNode__NODE)
  {
    if (nodecnt == 0)
    {
      r = 2;

      if (size - r2 <= r)
      {
        return -1;
      }

      sprintf(buffer + r2, "/>");
    }
    else
    {
      r = 1;

      if (size - r2 <= r)
      {
        return -1;
      }

      sprintf(buffer + r2, ">");
    }

    r2 += r;

    if (nodecnt == 0)
    {
      return r2;
    }
  }

  for (i = _this->content; i; i = i->next)
  {
    if (XMLNode__type(i) != XMLNode__ATTRIBUTE)
    {
      r = XMLNode__write(i, buffer + r2, size - r2, level + INDENT, dest_encoding);

      if (r < 0 || r >= size)
      {
        return -1;
      }

      r2 += r;
    }
  }

  if (t == XMLNode__NODE && nodecnt)
  {
    //      r=snprintf(buffer+r2,size-r2,"%*s</%s>",level,"",name);
    r = strlen(_this->name) + 3;

    if (size - r2 <= r)
    {
      return -1;
    }

    sprintf(buffer + r2, "</%s>", _this->name);
    r2 += r;
  }

  return r2;
}

void XMLNode__addToContent(struct XMLNode *_this, struct XMLNode *node)
{
  if (_this->content == 0)
  {
    _this->content = node;
  }
  else
  {
    struct XMLNode *i;

    for (i = _this->content; i->next; i = i->next);

    i->next = node;
  }
}

#if defined(TEST) || defined(TEST2) || defined(TEST3)
void XMLNode__dump(struct XMLNode *_this, FILE *fp, int level)
{
  switch (XMLNode__type(_this))
  {
    case XMLNode__ROOT:
      fprintf(fp, "%*sROOT \n", level, "");
      break;

    case XMLNode__NODE:
      fprintf(fp, "%*sNODE '%s' \n", level, "", _this->name);
      break;

    case XMLNode__ATTRIBUTE:
      fprintf(fp, "%*sATTRIBUTE '%s' = '%s' \n", level, "", _this->name, _this->value);
      break;

    default:
    case XMLNode__VALUE:
      fprintf(fp, "%*sVALUE '%s' \n", level, "", _this->value);
      break;
  }

  if (_this->content)
  {
    XMLNode__dump(_this->content, fp, level + INDENT);
  }

  if (_this->next)
  {
    XMLNode__dump(_this->next, fp, level);
  }
}
#endif

struct XMLNode *XMLNode__findNode(struct XMLNode *_this, const char *name)
{
  char *slash = strchr(name, '/');
  char *hash = strchr(name, '#');
  int any = 0;
  int index = 0;
  int len;
  struct XMLNode *i;

  if (hash && slash && hash > slash)
  {
    hash = 0;  // hash-mark hinter '/': ungueltig->loeschen
  }

  if (*name == '*')
  {
    any = 1;  // match any name
    name++;
  }

  if (hash)
  {
    index = atoi(hash + 1);
    len = hash - name;
  }
  else if (slash)
  {
    len = slash - name;
  }
  else
  {
    len = strlen(name);
  }

  // Knoten suchen
  for (i = _this->content; i; i = i->next)
  {
    const char *n = i->name;

    if (n == 0)
    {
      n = "";
    }

    if ((any || ((int)strlen(n) == len && !strncmp(name, n, len))) && index-- == 0)
    {
      break;
    }
  }

  if (i)
  {
    if (slash)
    {
      return XMLNode__findNode(i, slash + 1);
    }

    return i;
  }

  return 0;
}

void XMLNode__insertNode(struct XMLNode *_this, const char *name, struct XMLNode *node)
{
  char *slash = strchr(name, '/');
  char *hash = strchr(name, '#');
  int any = 0;
  int index = 0;
  int len;
  struct XMLNode **i;

  if (hash && slash && hash > slash)
  {
    hash = 0;  // hash-mark hinter '/': ungueltig->loeschen
  }

  if (*name == '*')
  {
    any = 1;  // match any name
    name++;
  }

  if (hash)
  {
    index = atoi(hash + 1);
    len = hash - name;
  }
  else if (slash)
  {
    len = slash - name;
  }
  else
  {
    len = strlen(name);
  }

  // Knoten suchen
  for (i = &_this->content; *i; i = &(*i)->next)
  {
    const char *n = (*i)->name;

    if (n == 0)
    {
      n = "";
    }

    if ((any || ((int)strlen(n) == len && !strncmp(name, n, len))) && index-- == 0)
    {
      break;
    }
  }

  if (*i)
  {
    if (slash)
    {
      XMLNode__insertNode(*i, slash + 1, node);
    }
    else   // Knoten anstelle des gefundenen einfuegen
    {
      struct XMLNode *old = *i;

      if (node)
      {
        node->next = old->next;
        *i = node;
      }
      else
      {
        *i = old->next;
      }

      old->next = 0;
      XMLNode__Destroy(old);
    }

    return;
  }
  else
  {
    if (slash)  // noch nicht am Ende: Knoten auf dem Pfad einfuegen
    {
      if (!node)
      {
        return;  // nichts zu loeschen gefunden
      }

      *i = XMLNode__Create(name, 0); // an '/' bzw. '#' wird abgeschnitten

      if (!*i)
      {
        return;  // kein Speicher
      }

      XMLNode__insertNode(*i, slash + 1, node);
    }
    else
    {
      // Pfadende: Knoten anhaengen
      *i = node;
    }
  }

  // Knoten nicht gefunden

}


void XMLNode__reorderContent(struct XMLNode *_this, const char *reference[])
{
  int s;

  // Bubblesort (Mergesort lohnt nicht bei einer geringen Zahl von Knoten)
  do
  {
    struct XMLNode *a = 0, *b = 0;
    int ia, ib; // reference index
    s = 0;
    a = _this->content;

    if (!a)
    {
      break;
    }

    b = a->next;

    if (!b)
    {
      break;
    }

    for (ia = 0; reference[ia]; ia++) if (!strcmp(reference[ia], XMLNode__getName(a) ? XMLNode__getName(a) : ""))
      {
        break;
      }

    for (; b; (a = b), (b = b->next), (ia = ib))
    {
      for (ib = 0; reference[ib]; ib++) if (!strcmp(reference[ib], XMLNode__getName(b) ? XMLNode__getName(b) : ""))
        {
          break;
        }

      if (ia > ib)
      {
        XMLNode__swap(a, b);
        ib = ia;
        s = 1;
      }
    }

  }
  while (s);
}

enum XMLNode__NodeType XMLNode__type(const struct XMLNode *_this)
{
  if (_this->name)
  {
    if (_this->value)
    {
      return XMLNode__ATTRIBUTE;
    }

    return XMLNode__NODE;
  }
  else if (_this->value)
  {
    return XMLNode__VALUE;
  }

  return XMLNode__ROOT;
}

const char *XMLNode__getName(const struct XMLNode *_this)
{
  return _this->name;
}

const char *XMLNode__getValue(const struct XMLNode *_this)
{
  return _this->value;
}

void XMLNode__swap(struct XMLNode *_this, struct XMLNode *other)
{
  char *s;
  struct XMLNode *t;
  s = other->name;
  other->name = _this->name;
  _this->name = s;
  s = other->value;
  other->value = _this->value;
  _this->value = s;
  t = other->content;
  other->content = _this->content;
  _this->content = t;
}

void XMLDocument__Constructor(struct XMLDocument *_this, enum XMLTokenizer__Encoding enc)
{
  _this->encoding = enc;
  _this->root = 0;
}

void XMLDocument__CopyConstructor(struct XMLDocument *_this, const struct XMLDocument *o)
{
  _this->encoding = o->encoding;

  if (o->root)
  {
    _this->root = XMLNode__clone(o->root, XMLNode__CLONE_ALL, 0);
  }
  else
  {
    _this->root = 0;
  }
}

struct XMLDocument *XMLDocument__Assign(struct XMLDocument *_this, const struct XMLDocument *o)
{
  if (o != _this)
  {
    if (_this->root)
    {
      XMLNode__Destroy(_this->root);
    }

    _this->encoding = o->encoding;

    if (o->root)
    {
      _this->root = XMLNode__clone(o->root, XMLNode__CLONE_ALL, 0);
    }
    else
    {
      _this->root = 0;
    }
  }

  return _this;
}

void XMLDocument__Destructor(struct XMLDocument *_this)
{
  if (_this->root)
  {
    XMLNode__Destroy(_this->root);
  }
}


void XMLDocument__clear(struct XMLDocument *_this)
{
  if (_this->root)
  {
    XMLNode__Destroy(_this->root);
  }

  _this->encoding = XMLTokenizer__UTF8;
  _this->root = 0;
}


struct XMLNode *XMLDocument__findNode(struct XMLDocument *_this, const char *name)
{
  if (_this->root)
  {
    return XMLNode__findNode(_this->root, name);
  }

  return 0;
}

void XMLDocument__insertNode(struct XMLDocument *_this, const char *name, struct XMLNode *node)
{
  if (!_this->root)
  {
    _this->root = XMLNode__Create(0, 0);
  }

  if (!_this->root)
  {
    return;
  }

  XMLNode__insertNode(_this->root, name, node);
}

void XMLDocument__removeNode(struct XMLDocument *_this, const char *name)
{
  XMLDocument__insertNode(_this, name, 0);
}



#ifdef TEST

int main()
{
  char xml[] =
    "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n"
    "<node attrib=\"foobar\" test=\"123\"> test und\n awsd </node >\n";
  int r;
  struct XMLTokenizer t;
  XMLTokenizer__Constructor(&t);
  XMLTokenizer__init(&t, xml);

  printf("encoding: %d\n", t.encoding);

  while ((r = XMLTokenizer__nextToken(&t)) != XMLTokenizer__DONE)
  {
    switch (r)
    {
      case XMLTokenizer__TEXT:
        printf("text: '%s'\n", t.value);
        break;

      case XMLTokenizer__START_NODE:
        printf("start node: '%s'\n", t.name);
        break;

      case XMLTokenizer__STOP_NODE:
        printf("stop node: '%s'\n", t.name);
        break;

      case XMLTokenizer__EMPTY_NODE:
        printf("empty node\n");
        break;

      case XMLTokenizer__NODE_DONE:
        printf("node done\n");
        break;

      case XMLTokenizer__ATTRIBUTE:
        printf("attribute: name '%s'  value '%s'\n", t.name, t.value);
        break;

      case XMLTokenizer__SYNTAX_ERROR:
        printf("syntax error\n");
        break;
    }
  }

}
#endif

#ifdef TEST2
int main(int argc, char *argv[])
{
  FILE *in;
  char xml[1 << 18];
  char line[256];
  int r;

  if (argc < 2)
  {
    fprintf(stderr, "Usage: %s <file>\n", argv[0]);
    return 1;
  }

  if ((in = fopen(argv[1], "r")) && (r = fread(xml, 1, sizeof(xml), in)) > 0)
  {
    if (r == sizeof(xml))
    {
      fprintf(stderr, "File too large\n");
      fclose(in);
      return 1;
    }

    fclose(in);
    xml[r] = 0;
    int r;
    struct XMLDocument doc;
    XMLDocument__Constructor(&doc, XMLTokenizer__UTF8);

    if (!XMLDocument__read(&doc, xml))
    {
      fprintf(stderr, "invalid XML file\n");
      return 1;
    }

    while (printf("(i)nsert (f)ind (r)emove (d)ump (s)ort (t)reedump: "), gets(line))
    {
      struct XMLNode *n;

      switch (line[0])
      {
        case 'd':
          r = XMLDocument__write(&doc, xml, sizeof(xml));

          if (r >= 0)
          {
            printf("%s\n%d bytes\n", xml, r);
          }

          break;

        case 'f':
          if ((n = XMLDocument__findNode(&doc, line + 1)))
          {
            printf("node found");

            if (XMLNode__getName(n))
            {
              printf(" name '%s'", XMLNode__getName(n));
            }

            if (XMLNode__getValue(n))
            {
              printf(" value '%s'", XMLNode__getValue(n));
            }

            printf("\n");
          }
          else
          {
            printf("node not found\n");
          }

          break;

        case 'r':
          XMLDocument__removeNode(&doc, line + 1);
          printf("OK\n");
          break;

        case 'i':
        {
          char *arg1, *arg2, *arg3;
          arg1 = line + 1;
          arg2 = strchr(arg1, ' ');

          if (arg2)
          {
            *arg2++ = 0;
          }

          arg3 = strchr(arg2 ? arg2 : "", ' ');

          if (arg3)
          {
            *arg3++ = 0;
          }

          if (!arg3)
          {
            printf("i<node><SPACE><name><SPACE><value>\n");
            break;
          }

          n = XMLNode__Create(*arg2 ? arg2 : 0, *arg3 ? arg3 : 0);
          XMLDocument__insertNode(&doc, arg1, n);
          printf("OK\n");
          break;
        }

        case 's':
        {
          const char *reftab[100];
          char *p = line + 1;
          int cnt = 0;

          while (p)
          {
            reftab[cnt++] = p;
            p = strchr(p, ' ');

            if (p)
            {
              *p++ = 0;
            }
          }

          reftab[cnt++] = 0;

          if (cnt < 3)
          {
            printf("s<node> <ref1> <ref2> ...\n");
            break;
          }

          if ((n = XMLDocument__findNode(&doc, reftab[0])))
          {
            XMLNode__reorderContent(n, reftab + 1);
            printf("OK\n");
          }
          else
          {
            printf("node not found\n");
          }

          break;
        }

        case 't':
          XMLDocument__dump(&doc, stdout);
          break;

        default:
          printf("Unknown command\n");
          break;
      }
    }

    XMLDocument__Destructor(&doc);

  }

  fclose(in);
  return 0;
}
#endif

#ifdef TEST3

char s1[] =
  "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
  "<application id=\"555\" name=\"Sun Ping Application\" uri=\"ftp://ftp.ietf.org/internet-drafts/draft-calhoun-diameter-sun-ping-02.txt\">"
  "<command name=\"Ping\" code=\"511\" vendor-id=\"Sun\"/>"
  "<avp name=\"Ping-Timestamp-Secs\" code=\"1\" vendor-id=\"Sun\" mandatory=\"mustnot\" vendor-bit=\"must\">"
  " <type type-name=\"Unsigned32\"/>"
  "</avp>"
  "<avp name=\"Ping-Timestamp-Usecs\" code=\"2\" vendor-id=\"Sun\" mandatory=\"mustnot\" vendor-bit=\"must\">"
  " <type type-name=\"Unsigned32\"/>"
  "</avp>";

char s2[] =
  "<avp name=\"Ping-Timestamp\" code=\"3\" vendor-id=\"Sun\" mandatory=\"mustnot\" vendor-bit=\"must\">"
  " <grouped>"
  "     <gavp name=\"Ping-Timestamp-Secs\"/>"
  "     <gavp name=\"Ping-Timestamp-Usecs\"/>"
  " </grouped>"
  "</avp>"
  "</application>";

char *filldata = s2;


char *fill(void *fill_data)
{
  char *s = filldata;
  filldata = 0;
  return s;
}

int main(int argc, char *argv[])
{
  struct XMLDocument doc;
  XMLDocument__Constructor(&doc, XMLTokenizer__UTF8);

  if (!XMLDocument__read2(&doc, s1, fill, 0))
  {
    fprintf(stderr, "invalid XML file\n");
    return 1;
  }

  XMLDocument__dump(&doc, stdout);
  return 0;
}
#endif

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

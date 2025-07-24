---
hidden: true
title: xmldoc.h
---

<a href="xmldoc_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef XML_DOC_H
 2 #define XML_DOC_H
 3 
 4 #ifndef _SLIM_VERSION
 5 
 8 #include <stdio.h>
 9 #include <stdlib.h>
 10 
 11 #if defined _ARTEMA
 12  #include "posix/posix.h"
 13 #endif
 14 
 15 #ifdef __cplusplus
 16 extern "C" {
 17 #endif
 18 
 19 enum XMLTokenizer__Encoding
 20 {
 21  XMLTokenizer__UTF8, XMLTokenizer__ISOLATIN1, XMLTokenizer__ISOLATIN9
 22 };
 23 
 25 enum XMLTokenizer__Token
 26 {
 27  XMLTokenizer__DONE,
 28  XMLTokenizer__TEXT,
 29  XMLTokenizer__START_NODE,
 30  XMLTokenizer__STOP_NODE,
 31  XMLTokenizer__EMPTY_NODE,
 32  XMLTokenizer__NODE_DONE,
 33  XMLTokenizer__ATTRIBUTE,
 34  XMLTokenizer__SYNTAX_ERROR
 35 };
 36 
 38 struct XMLTokenizer
 39 {
 40 
 41  char *buffer;
 42  int inside_node;
 43 
 44  char bn;
 45  char bv;
 46 
 47  enum XMLTokenizer__Encoding encoding;
 48  char *name;
 49  int name_len;
 50  char *value;
 51  int value_len;
 52 
 53  char *(*fill)(void *fill_data);
 54  void *fill_data;
 55 };
 56 
 57 enum XMLTokenizer__Encoding XMLTokenizer__readHeader(struct XMLTokenizer *_this);
 58 enum XMLTokenizer__Token XMLTokenizer__readToken(struct XMLTokenizer *_this);
 59 void XMLTokenizer__Constructor(struct XMLTokenizer *_this);
 60 void XMLTokenizer__Destructor(struct XMLTokenizer *_this);
 61 
 62 void XMLTokenizer__init(struct XMLTokenizer *_this, char *buffer, char * (*fill)(void *fill_data), void *fill_data);
 63 enum XMLTokenizer__Token XMLTokenizer__nextToken(struct XMLTokenizer *_this);
 64 
 66 enum XMLNode__NodeType
 67 {
 68  XMLNode__ROOT,
 69  XMLNode__NODE,
 70  XMLNode__ATTRIBUTE,
 71  XMLNode__VALUE,
 72  XMLNode__ANY
 73 };
 74 
 75 enum XMLNode__CloneMode
 76 {
 77  XMLNode__CLONE_ALL, XMLNode__CLONE_ATTRIBUTE
 78 };
 79 
 84 struct XMLNode
 85 {
 86  char *name;
 87  char *value;
 88  struct XMLNode *content;
 89  struct XMLNode *next;
 90 };
 91 
 92 void XMLNode__Constructor(struct XMLNode *_this, const char *_name, const char *_value);
 93 void XMLNode__Constructor2(struct XMLNode *_this, const char *_name, const char *_value,
 94  enum XMLTokenizer__Encoding source_encoding);
 95 struct XMLNode *XMLNode__Create(const char *_name, const char *_value);
 96 struct XMLNode *XMLNode__Create2(const char *_name, const char *_value,
 97  enum XMLTokenizer__Encoding source_encoding);
 98 void XMLNode__Destructor(struct XMLNode *_this);
 99 void XMLNode__Destroy(struct XMLNode *_this);
 100 
 101 int XMLNode__parse(struct XMLNode *_this, const char *name, struct XMLTokenizer *t);
 102 
 103 int XMLNode__write(struct XMLNode *_this, char *buffer, int size, int level, enum XMLTokenizer__Encoding dest_encoding);
 104 
 105 void XMLNode__addToContent(struct XMLNode *_this, struct XMLNode *node);
 106 
 107 void XMLNode__dump(struct XMLNode *_this, FILE *, int level);
 108 
 109 struct XMLNode *XMLNode__findNode(struct XMLNode *_this, const char *name);
 110 
 111 void XMLNode__insertNode(struct XMLNode *_this, const char *name, struct XMLNode *node);
 112 
 113 enum XMLNode__NodeType XMLNode__type(const struct XMLNode *_this);
 114 
 115 const char *XMLNode__getName(const struct XMLNode *_this);
 116 
 117 const char *XMLNode__getValue(const struct XMLNode *_this);
 118 
 119 void XMLNode__setName(struct XMLNode *_this, const char *_name);
 120 
 121 void XMLNode__setValue(struct XMLNode *_this, const char *_value);
 122 
 123 struct XMLNode *XMLNode__clone(const struct XMLNode *_this, enum XMLNode__CloneMode cm, int clone_successor);
 124 
 125 void XMLNode__swap(struct XMLNode *_this, struct XMLNode *other);
 126 
 127 void XMLNode__reorderContent(struct XMLNode *_this, const char *reference[]);
 128 
 129 
 130 
 132 struct XMLDocument
 133 {
 134  struct XMLNode *root;
 135  enum XMLTokenizer__Encoding encoding;
 136 };
 137 
 138 
 139 void XMLDocument__Constructor(struct XMLDocument *_this, enum XMLTokenizer__Encoding enc);
 140 void XMLDocument__CopyConstructor(struct XMLDocument *_this, const struct XMLDocument *o);
 141 struct XMLDocument *XMLDocument__Assign(struct XMLDocument *_this, const struct XMLDocument *o);
 142 
 143 void XMLDocument__Destructor(struct XMLDocument *_this);
 144 
 145 void XMLDocument__clear(struct XMLDocument *_this);
 146 
 147 int XMLDocument__read(struct XMLDocument *_this, char *);
 148 int XMLDocument__write(const struct XMLDocument *_this, char *, int size);
 149 void XMLDocument__dump(struct XMLDocument *_this, FILE *);
 150 
 151 struct XMLNode *XMLDocument__findNode(struct XMLDocument *_this, const char *name);
 152 void XMLDocument__insertNode(struct XMLDocument *_this, const char *name, struct XMLNode *node);
 153 
 154 void XMLDocument__removeNode(struct XMLDocument *_this, const char *name);
 155 
 156 #ifdef __cplusplus
 157 }
 158 #endif
 159 
 160 #endif // _SLIM_VERSION
 161 
 162 #endif
 163 
```

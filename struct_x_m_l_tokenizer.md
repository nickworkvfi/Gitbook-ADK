---
title: XMLTokenizer

---

# XMLTokenizer



 [More...](#detailed-description)


`#include <xmldoc.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| char * | **[buffer](struct_x_m_l_tokenizer.md#variable-buffer)**  |
| int | **[inside_node](struct_x_m_l_tokenizer.md#variable-inside-node)**  |
| char | **[bn](struct_x_m_l_tokenizer.md#variable-bn)** <br>backup for byte temporarily overwritten by 0-byte to terminate name  |
| char | **[bv](struct_x_m_l_tokenizer.md#variable-bv)** <br>backup for byte temporarily overwritten by 0-byte to terminate value  |
| enum [XMLTokenizer__Encoding](xmldoc_8h.md#enum-xmltokenizer--encoding) | **[encoding](struct_x_m_l_tokenizer.md#variable-encoding)**  |
| char * | **[name](struct_x_m_l_tokenizer.md#variable-name)**  |
| int | **[name_len](struct_x_m_l_tokenizer.md#variable-name-len)**  |
| char * | **[value](struct_x_m_l_tokenizer.md#variable-value)**  |
| int | **[value_len](struct_x_m_l_tokenizer.md#variable-value-len)**  |
| char *(*)(void *fill_data) | **[fill](struct_x_m_l_tokenizer.md#variable-fill)**  |
| void * | **[fill_data](struct_x_m_l_tokenizer.md#variable-fill-data)**  |

## Detailed Description

```cpp
struct XMLTokenizer;
```


class for splitting XML code into tokens 

## Public Attributes Documentation

### variable buffer

```cpp
char * buffer;
```


### variable inside_node

```cpp
int inside_node;
```


### variable bn

```cpp
char bn;
```

backup for byte temporarily overwritten by 0-byte to terminate name 

### variable bv

```cpp
char bv;
```

backup for byte temporarily overwritten by 0-byte to terminate value 

### variable encoding

```cpp
enum XMLTokenizer__Encoding encoding;
```


### variable name

```cpp
char * name;
```


### variable name_len

```cpp
int name_len;
```


### variable value

```cpp
char * value;
```


### variable value_len

```cpp
int value_len;
```


### variable fill

```cpp
char *(*)(void *fill_data) fill;
```


### variable fill_data

```cpp
void * fill_data;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
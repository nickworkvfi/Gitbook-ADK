---
title: XMLNode

---

# XMLNode



 [More...](#detailed-description)


`#include <xmldoc.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| char * | **[name](struct_x_m_l_node.md#variable-name)**  |
| char * | **[value](struct_x_m_l_node.md#variable-value)**  |
| struct [XMLNode](struct_x_m_l_node.md) * | **[content](struct_x_m_l_node.md#variable-content)**  |
| struct [XMLNode](struct_x_m_l_node.md) * | **[next](struct_x_m_l_node.md#variable-next)**  |

## Detailed Description

```cpp
struct XMLNode;
```


node for storing XML information. The different types of nodes are represented by the different combinations of set and unset name and value pointer: 

* **name==0 value==0:** root node 
* **name!=0 value==0:** node 
* **name!=0 value!=0:** attribute 
* **name==0 value!=0:** text [XMLNode__type()](xmldoc_8c.md#function-xmlnode--type)

## Public Attributes Documentation

### variable name

```cpp
char * name;
```


name of the node 


### variable value

```cpp
char * value;
```


value of the node (attribute value or node content) 


### variable content

```cpp
struct XMLNode * content;
```


pointer to the sub nodes that belong to the content of this node 


### variable next

```cpp
struct XMLNode * next;
```


pointer to the next node of the same level, used for chaining nodes 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
---
hidden: true
title: BTLVNode Struct Reference
---

[Data Fields](#pub-attribs)

`#include <`<a href="btlv_8h_source.md">btlv.h</a>`>`

Inheritance diagram for BTLVNode:

![Inheritance graph](struct_b_t_l_v_node__inherit__graph.png)

\[<a href="graph_legend.md">legend</a>\]

Collaboration diagram for BTLVNode:

![Collaboration graph](struct_b_t_l_v_node__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

|  |  |
|----|----|
| Data Fields |  |
| struct <a href="struct_b_t_l_v_node.md">BTLVNode</a> \*  | [pxNext](#a048aed5fef433724f94d95cfec2d33df) |
| struct <a href="struct_b_t_l_v_node.md">BTLVNode</a> \*  | [pxFirst](#a66f9bd31fc168407f7724e16edf60bf5) |
| struct <a href="struct_b_t_l_v_node.md">BTLVNode</a> \*  | [pxParent](#a60e4095f792d811b9826a4cff5047fcc) |
| struct <a href="mem__pool_8h.md#struct_memory_pool">MemoryPool</a> \*  | [pxMempool](#a3faa46016cfde528233b2d81eddc8fd3) |
| char  | [tcName](#a135733138da2d26ea5be2810030ce389) \[2 \*<a href="btlv_8h.md#a50b52ae3c35fc20556babf890cfac1e8">MAX_TAGSIZE</a>+1\] |
| char  | [cConstructed](#aa49ad6910f8c0173df2f113ce5fe61ad) |
| unsigned char \*  | [pucData](#a53aa1f2ebeda62fb9f53902b93665db7) |
| unsigned  | [uSize](#a4701e420ca6a8de15ab0c6dcd3e58680) |

## DetailedDescription {#detailed-description}

data node containing one tag or a root node

### Date

4.12.2006

### Author

M. Meixner

## FieldDocumentation {#field-documentation}

## cConstructed <a href="#aa49ad6910f8c0173df2f113ce5fe61ad" id="aa49ad6910f8c0173df2f113ce5fe61ad"></a>

<p>char cConstructed</p>

type: 0=primitive, 1=constructed

## pucData <a href="#a53aa1f2ebeda62fb9f53902b93665db7" id="a53aa1f2ebeda62fb9f53902b93665db7"></a>

<p>unsigned char\* pucData</p>

pointer to data (only primitive nodes)

## pxFirst <a href="#a66f9bd31fc168407f7724e16edf60bf5" id="a66f9bd31fc168407f7724e16edf60bf5"></a>

<p>struct <a href="struct_b_t_l_v_node.md">BTLVNode</a>\* pxFirst</p>

first child (content) node

## pxMempool <a href="#a3faa46016cfde528233b2d81eddc8fd3" id="a3faa46016cfde528233b2d81eddc8fd3"></a>

<p>struct <a href="mem__pool_8h.md#struct_memory_pool">MemoryPool</a>\* pxMempool</p>

memory pool used for allocation

## pxNext <a href="#a048aed5fef433724f94d95cfec2d33df" id="a048aed5fef433724f94d95cfec2d33df"></a>

<p>struct <a href="struct_b_t_l_v_node.md">BTLVNode</a>\* pxNext</p>

used for chaining nodes

## pxParent <a href="#a60e4095f792d811b9826a4cff5047fcc" id="a60e4095f792d811b9826a4cff5047fcc"></a>

<p>struct <a href="struct_b_t_l_v_node.md">BTLVNode</a>\* pxParent</p>

parent node

## tcName <a href="#a135733138da2d26ea5be2810030ce389" id="a135733138da2d26ea5be2810030ce389"></a>

<p>char tcName\[2 \*<a href="btlv_8h.md#a50b52ae3c35fc20556babf890cfac1e8">MAX_TAGSIZE</a>+1\]</p>

tag name (0-terminated C-string)

## uSize <a href="#a4701e420ca6a8de15ab0c6dcd3e58680" id="a4701e420ca6a8de15ab0c6dcd3e58680"></a>

<p>unsigned uSize</p>

size of data (primitive node) or total size of child nodes (constructed). This size does not include the tag name or the number of bytes for the size field

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- emv/TLV_Util/export/emv/<a href="btlv_8h_source.md">btlv.h</a>

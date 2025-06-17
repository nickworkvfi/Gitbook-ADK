---
title: ADK-EMV TLV Utility Programmers Guide

---

# ADK-EMV TLV Utility Programmers Guide




# Preface

The TLV/util library delivered with the EMV-ADK is an optional component that offers BER-TLV (basic encoding rules) and hexadecimal string conversion function. These can be very helpful if an application lacks this functionality.


## Organization

This guide is organized as follows:

[Overview]. 

 Provides an overview of the TLV/util library.

[Programming]. 

 Gives the programming toolset for the library.

[Samples]

 Supplies samples and use cases for further development.


# Overview


# Programming


## TLV Path names

Path names are used to access nodes within the tree. The path consists of the ASCII representation of the TLV tags separated by '/'. Nodes before the last '/' must be constructed nodes. The path is given as C string, i.e. it is terminated by a 0-byte. Note that only the following characters are allowed in the path:

"0123456789ABCDEF"

The lowercase characters "abcdef" are not supported and may result in errors.

Example path: "20/21/DF03"


## Import filter callback

The import filter callback allows to remove unwanted data during import to the TLV tree. This allows to import parts of large files that would not fit into memory in whole.

The import filter callback is called just before a node is to be imported, i.e. the node has been created but no content imported yet, and when a node has been completely imported. The filter can then decide whether to keep this node or remove it and whether to stop importing at this point.

The third parameter specifies whether the filter has been called before importing the content of the node (BTLV_IMPORT_START) or whether the node is complete (BTLV_IMPORT_DONE).

The order the filter callback is called depends on the context. For BTLV_IMPORT_START the filter is called for parents first and then for child nodes and for BTLV_IMPORT_DONE the import filter is called when the import has been completed for a node, i.e. it is called first for the children and then for the parent.

Note that the filter will not be called for a node with BTLV_IMPORT_DONE when the filter already decided to remove the node when called with BTLV_IMPORT_START.

Within the import filter the function [xBTLVMatchPath()](btlv_8h.md#function-xbtlvmatchpath) is used to check the position of the current node relative to a given path. The following possibilities exist:

* **BTLV_MATCH** the path of the node is equal to the given path
* **BTLV_CHILDMATCH** the node is a child of the selected path, e.g. the node has the path "20/20/DF01" and the selected path was "20/20"
* **BTLV_PARENTMATCH** the node may be a parent of the selected path, e.g. the node has the path "20" and the selected path was "20/20"
* **BTLV_MISMATCH** the path of the node does not match the selected path.

The filter must return one of the following codes:

* **BTLV_FLTR_KEEP** keep the current node and continue importing data
* **BTLV_FLTR_REMOVE** remove the current node but continue importing data.
* **BTLV_FLTR_DONE** keep the current node and stop importing further nodes. When scanning files for information this can be used to stop reading the file when the desired information has been found.
* **BTLV_FLTR_ABORT** remove current node and stop importing further nodes.

Care has to be taken to not inadvertently remove nodes. For example it is not sufficient to keep a node by itself but it is also required to keep the parent nodes, or the node would be deleted when the filter is called for the parent.

Therefore, a typical filter that should keep one node with its children would look like: 

```cpp
enum BTLVFilter testfilter(void *pvData, struct BTLVNode *pxRoot, enum BTLVContext context)
{
   if(context==BTLV_IMPORT_START) return BTLV_FLTR_KEEP;
   if(xBTLVMatchPath(pxRoot,"20/20/20")==BTLV_MISMATCH) return BTLV_FLTR_REMOVE;
   return BTLV_FLTR_KEEP;
}
```

 It would be an error to return BTLV_FLTR_REMOVE if the result of the match was BTLV_PARENTMATCH, since then the desired node would be removed along with its parent when the filter was later called for the parent node.

The filter function itself may only modify the structure of those parts of the tree for which the importing has been completed or it will corrupt the structure of the tree which may result in a crash. That is the filter may only modify (e.g. delete nodes) the subtree of the current node.


# Samples

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100

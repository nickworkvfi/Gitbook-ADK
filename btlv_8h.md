---
title: emv/TLV_Util/export/emv/btlv.h

---

# emv/TLV_Util/export/emv/btlv.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[BTLVNode](struct_b_t_l_v_node.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[@1](btlv_8h.md#enum-@1)** { CONTEXT_CLASS =0x80, PRIVATE_CLASS =0xC0, CONSTRUCTET_TAG =0x20, CONSTRUCTED_TAG =0x20, PRIMITIVE_TAG =0x00} |
| enum| **[BTLV_ERROR](btlv_8h.md#enum-btlv-error)** { BTLV_ERR_INVALID =-1, BTLV_ERR_BUFFER =-2, BTLV_ERR_MEMORY =-3, BTLV_ERR_FILE =-4, BTLV_ERR_NOT_FOUND =-5, BTLV_ERR_CONSTRUCTED =-6, BTLV_ERR_DONE_FILTER =-7, BTLV_ERR_ABORT_FILTER =-8} |
| enum| **[BTLVFilter](btlv_8h.md#enum-btlvfilter)** { BTLV_FLTR_KEEP =0, BTLV_FLTR_DONE =-1, BTLV_FLTR_REMOVE =-2, BTLV_FLTR_ABORT =-3} |
| enum| **[BTLVContext](btlv_8h.md#enum-btlvcontext)** { BTLV_IMPORT_START, BTLV_IMPORT_DONE} |
| enum| **[BTLVMatch](btlv_8h.md#enum-btlvmatch)** { BTLV_MISMATCH, BTLV_MATCH, BTLV_CHILDMATCH, BTLV_PARENTMATCH} |
| typedef char[BTLVTagBufSize] | **[BTLVTagBufType](btlv_8h.md#typedef-btlvtagbuftype)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vBTLVInit](btlv_8h.md#function-vbtlvinit)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxNode, struct [MemoryPool](struct_memory_pool.md) * pxMempool) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) struct [BTLVNode](struct_b_t_l_v_node.md) * | **[pxBTLVAppendTag](btlv_8h.md#function-pxbtlvappendtag)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const char * pcPath, const unsigned char * pucData, unsigned uSize) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) struct [BTLVNode](struct_b_t_l_v_node.md) * | **[pxBTLVWriteTag](btlv_8h.md#function-pxbtlvwritetag)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const char * pcPath, const unsigned char * pucData, unsigned uSize) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVWriteData](btlv_8h.md#function-ibtlvwritedata)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxNode, unsigned char * pucData, unsigned uSize) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) struct [BTLVNode](struct_b_t_l_v_node.md) * | **[pxBTLVFindTag](btlv_8h.md#function-pxbtlvfindtag)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const char * pcPath) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) struct [BTLVNode](struct_b_t_l_v_node.md) * | **[pxBTLVFindNextTag](btlv_8h.md#function-pxbtlvfindnexttag)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const char * pcPath, struct [BTLVNode](struct_b_t_l_v_node.md) * pxPrev) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vBTLVClear](btlv_8h.md#function-vbtlvclear)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxNode) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vBTLVRemoveNode](btlv_8h.md#function-vbtlvremovenode)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxNode) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vBTLVMoveNode](btlv_8h.md#function-vbtlvmovenode)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, struct [BTLVNode](struct_b_t_l_v_node.md) * pxNode) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) unsigned | **[uBTLVContentSize](btlv_8h.md#function-ubtlvcontentsize)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVExport](btlv_8h.md#function-ibtlvexport)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, unsigned char * pucBuffer, unsigned uMaxSize) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVExportFile](btlv_8h.md#function-ibtlvexportfile)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const char * pcFilename) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVAppendFile](btlv_8h.md#function-ibtlvappendfile)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const char * pcFilename) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVImport](btlv_8h.md#function-ibtlvimport)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const unsigned char * pucBuffer, unsigned uSize, enum [BTLVFilter](btlv_8h.md#enum-btlvfilter)(*)(void *, struct [BTLVNode](struct_b_t_l_v_node.md) *, enum [BTLVContext](btlv_8h.md#enum-btlvcontext)) pxFilter, void * pvData) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVImportFile](btlv_8h.md#function-ibtlvimportfile)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const char * pcFilename, enum [BTLVFilter](btlv_8h.md#enum-btlvfilter)(*)(void *, struct [BTLVNode](struct_b_t_l_v_node.md) *, enum [BTLVContext](btlv_8h.md#enum-btlvcontext)) pxFilter, void * pvData) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVExtractTag](btlv_8h.md#function-ibtlvextracttag)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const char * pcPath, unsigned char * pucBuffer, unsigned uSize) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) enum [BTLVMatch](btlv_8h.md#enum-btlvmatch) | **[xBTLVMatchPath](btlv_8h.md#function-xbtlvmatchpath)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, const char * pcPath) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVGetPath](btlv_8h.md#function-ibtlvgetpath)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxRoot, char * pcBuffer, int iMaxsize) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) char * | **[pcBTLVTagStr2](btlv_8h.md#function-pcbtlvtagstr2)**(unsigned long ulTag, [BTLVTagBufType](btlv_8h.md#typedef-btlvtagbuftype) tcTagBuf) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) char * | **[pcBTLVTagStr](btlv_8h.md#function-pcbtlvtagstr)**(unsigned long ulTag) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) unsigned long | **[ulBTLVTagNum](btlv_8h.md#function-ulbtlvtagnum)**(const char * pcTag) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vBTLVBuildTag](btlv_8h.md#function-vbtlvbuildtag)**(unsigned char ucbyte1, unsigned long tag_number, char * pcTag) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vBTLVGetTagNumber](btlv_8h.md#function-vbtlvgettagnumber)**(unsigned char * ucTag, unsigned long * ptag_number) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) unsigned long | **[ulBTLVGetTagNumber](btlv_8h.md#function-ulbtlvgettagnumber)**(const char * Tag) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) struct [BTLVNode](struct_b_t_l_v_node.md) * | **[pxBTLVGetChild](btlv_8h.md#function-pxbtlvgetchild)**(const struct [BTLVNode](struct_b_t_l_v_node.md) * pxParent, int n) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVGetChildOffset](btlv_8h.md#function-ibtlvgetchildoffset)**(const struct [BTLVNode](struct_b_t_l_v_node.md) * pxParent, const struct [BTLVNode](struct_b_t_l_v_node.md) * pxChild) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) int | **[iBTLVGetChildCount](btlv_8h.md#function-ibtlvgetchildcount)**(const struct [BTLVNode](struct_b_t_l_v_node.md) * pxParent) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) struct [BTLVNode](struct_b_t_l_v_node.md) * | **[pxBTLVGetParent](btlv_8h.md#function-pxbtlvgetparent)**(const struct [BTLVNode](struct_b_t_l_v_node.md) * pxChild) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vBTLVWipeAndClear](btlv_8h.md#function-vbtlvwipeandclear)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxNode) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vBTLVWipeAndRemoveNode](btlv_8h.md#function-vbtlvwipeandremovenode)**(struct [BTLVNode](struct_b_t_l_v_node.md) * pxNode) |
| [TLV_UTIL_INTERFACE](mem__pool_8h.md#define-tlv-util-interface) void | **[vBTLVSetWipeCallback](btlv_8h.md#function-vbtlvsetwipecallback)**(void(*)(void *, unsigned) cb) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TLV_UTIL_INTERFACE](btlv_8h.md#define-tlv-util-interface)**  |
|  | **[MAX_TAGSIZE](btlv_8h.md#define-max-tagsize)**  |
|  | **[BTLVTagBufSize](btlv_8h.md#define-btlvtagbufsize)**  |
|  | **[ULTAG2ASC](btlv_8h.md#define-ultag2asc)**(ulTag)  |
|  | **[ULTAG2ASCBUF](btlv_8h.md#define-ultag2ascbuf)**  |

## Types Documentation

### enum @1

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CONTEXT_CLASS | =0x80|  context class (used for [vBTLVBuildTag()](btlv_8h.md#function-vbtlvbuildtag))  |
| PRIVATE_CLASS | =0xC0|  private class (used for [vBTLVBuildTag()](btlv_8h.md#function-vbtlvbuildtag))  |
| CONSTRUCTET_TAG | =0x20|   |
| CONSTRUCTED_TAG | =0x20|  constructed tag (used for [vBTLVBuildTag()](btlv_8h.md#function-vbtlvbuildtag))  |
| PRIMITIVE_TAG | =0x00|  primitive tag (used for [vBTLVBuildTag()](btlv_8h.md#function-vbtlvbuildtag))  |




### enum BTLV_ERROR

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BTLV_ERR_INVALID | =-1|  invalid data was found, e.g. invalid tag, length, ...  |
| BTLV_ERR_BUFFER | =-2|  buffer is too small  |
| BTLV_ERR_MEMORY | =-3|  failed to allocate memory  |
| BTLV_ERR_FILE | =-4|  failed to access/write file  |
| BTLV_ERR_NOT_FOUND | =-5|  the tag has not been found  |
| BTLV_ERR_CONSTRUCTED | =-6|  tried to extract data from a constructed node  |
| BTLV_ERR_DONE_FILTER | =-7|  the import filter has prematurely finished importing data  |
| BTLV_ERR_ABORT_FILTER | =-8|  the import filter has aborted the import of data  |




### enum BTLVFilter

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BTLV_FLTR_KEEP | =0|  keep current node and continue  |
| BTLV_FLTR_DONE | =-1|  keep current node and stop importing further nodes. When scanning files for information this can be used to stop reading the file when the desired information has been found.  |
| BTLV_FLTR_REMOVE | =-2|  remove current node and its children  |
| BTLV_FLTR_ABORT | =-3|  remove current node and stop importing further nodes  |




result codes for filter callbacks 


### enum BTLVContext

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BTLV_IMPORT_START | |  the node is just to be imported, i.e. it is created but still empty  |
| BTLV_IMPORT_DONE | |  the node has been completely imported  |




context in which the filter callback was called 


### enum BTLVMatch

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BTLV_MISMATCH | |  the path to the node does not match  |
| BTLV_MATCH | |  the path to the node is a perfect match  |
| BTLV_CHILDMATCH | |  the node is a child of a matching path  |
| BTLV_PARENTMATCH | |  the node may be a parent of a matching path  |




result when matching paths to nodes 


### typedef BTLVTagBufType

```cpp
typedef char BTLVTagBufType[BTLVTagBufSize];
```



## Functions Documentation

### function vBTLVInit

```cpp
TLV_UTIL_INTERFACE void vBTLVInit(
    struct BTLVNode * pxNode,
    struct MemoryPool * pxMempool
)
```


**Parameters**: 

  * **pxNode** pointer to the root node 
  * **pxMempool** memory pool from which memory is allocated for the child nodes and data or null pointer to allocate memory from the heap 


**Author**: M. Meixner 

**Date**: 4.12.2006 

**Note**: When using vBTLVInit on already initialized nodes, a memory leak may result. 

Initialize the root node of the tree. The root node of the tree may reside on the stack or in the global data segment. If nodes have been created in the tree the memory allocated for them must be released using [vBTLVClear()](btlv_8h.md#function-vbtlvclear) when done. 


### function pxBTLVAppendTag

```cpp
TLV_UTIL_INTERFACE struct BTLVNode * pxBTLVAppendTag(
    struct BTLVNode * pxRoot,
    const char * pcPath,
    const unsigned char * pucData,
    unsigned uSize
)
```


**Parameters**: 

  * **pxRoot** root node of the tree 
  * **pcPath** path consisting of one or several tags separated by '/'. The tags are given as C-string (i.e. hex-dump of the tag), e.g. '20/DF01'. Intermediate nodes will be created as required. If a tag occurs several times, it will append the node in the tree where the best (longest) match was found. If this is not desired, [pxBTLVFindTag()](btlv_8h.md#function-pxbtlvfindtag) may be used to navigate to the desired node and use a path relative to this node to insert data. (See also [TLV Path names]) 
  * **pucData** pointer to data to be stored into the tree. Note that only primitive nodes may contain data. For constructed tags pucData is ignored and should be set to 0. For primitive nodes pucData may be set to 0 to just allocate the memory without initialization. The data may be inserted later using the pointer from the return value. 
  * **uSize** size of the data to be stored into the tree. For constructed nodes uSize is ignored and should be set to 0. 


**Return**: pointer to the newly allocated node. 

**Author**: M. Meixner 

**Date**: 4.12.2006 

append a tag to the tree 


### function pxBTLVWriteTag

```cpp
TLV_UTIL_INTERFACE struct BTLVNode * pxBTLVWriteTag(
    struct BTLVNode * pxRoot,
    const char * pcPath,
    const unsigned char * pucData,
    unsigned uSize
)
```


**Parameters**: 

  * **pxRoot** root node of the tree 
  * **pcPath** path consisting of one or several tags separated by '/'. (see [pxBTLVAppendTag()](btlv_8h.md#function-pxbtlvappendtag)) (See also [TLV Path names]) 
  * **pucData** pointer to data to be stored into the tree. Note that only primitive nodes may contain data. For constructed tags pucData is ignored and should be set to 0. For primitive nodes pucData may be set to 0 to just allocate the memory without initialization. The data may be inserted later using the pointer from the return value. 
  * **uSize** size of the data to be stored into the tree. For constructed nodes uSize is ignored and should be set to 0. 


**Return**: pointer to the newly allocated node. 

**Author**: M. Meixner 

**Date**: 4.12.2006 

Write a tag in the tree. If the tag already exists it gets overwritten. If it does not yet exist, it is appended. 


### function iBTLVWriteData

```cpp
TLV_UTIL_INTERFACE int iBTLVWriteData(
    struct BTLVNode * pxNode,
    unsigned char * pucData,
    unsigned uSize
)
```


**Parameters**: 

  * **pxNode** node to which to write data 
  * **pucData** pointer to data to be stored into the tree. Note that only primitive nodes may contain data. 
  * **uSize** size of the data to be stored into the tree. 


**Return**: 1 in case of success, else 0 

**Author**: M. Meixner 

**Date**: 15.5.2007 

write data to a node 


### function pxBTLVFindTag

```cpp
TLV_UTIL_INTERFACE struct BTLVNode * pxBTLVFindTag(
    struct BTLVNode * pxRoot,
    const char * pcPath
)
```


**Parameters**: 

  * **pxRoot** root node of the tree 
  * **pcPath** path consisting of one or several tags separated by '/'. The tags are given as C-string (i.e. hex-dump of the tag), e.g. '20/DF01'. If a tag occurs several times, the path will descend into the first (left) subtree. The member pxNext may be used to access successive (right) siblings of this node. (See also [TLV Path names]) 


**Return**: pointer to the found node or 0. 

**Author**: M. Meixner 

**Date**: 4.12.2006 

Search for a tag in the tree 


### function pxBTLVFindNextTag

```cpp
TLV_UTIL_INTERFACE struct BTLVNode * pxBTLVFindNextTag(
    struct BTLVNode * pxRoot,
    const char * pcPath,
    struct BTLVNode * pxPrev
)
```


**Parameters**: 

  * **pxRoot** root node of the tree 
  * **pcPath** path consisting of one or several tags separated by '/'. The tags are given as C-string (i.e. hex-dump of the tag), e.g. '20/DF01'. If a tag occurs several times, the path will descend into the first (left) subtree. The member pxNext may be used to access successive (right) siblings of this node. (See also [TLV Path names]) 
  * **pxPrev** previous node in the tree. If set to 0 pxBTLVFindNextTag is the same as pxBTLVFindTag. 


**Return**: pointer to the found node or 0. 

**Author**: M. Meixner 

**Date**: 4.12.2006 

Search for the next tag of the same path in the tree. Within a tree nodes with the same name may occur several times. pxBTLVFindTag only finds the first match. [pxBTLVFindNextTag()](btlv_8h.md#function-pxbtlvfindnexttag) allows to search for other nodes with the same path name. 


### function vBTLVClear

```cpp
TLV_UTIL_INTERFACE void vBTLVClear(
    struct BTLVNode * pxNode
)
```


**Parameters**: 

  * **pxNode** node to be removed 


**Author**: M. Meixner 

**Date**: 2.4.2007 

Remove the content of a node including child nodes, the node itself is not released. The node stays initialized, i.e. it is not required to call [vBTLVInit()](btlv_8h.md#function-vbtlvinit) after [vBTLVClear()](btlv_8h.md#function-vbtlvclear). 


### function vBTLVRemoveNode

```cpp
TLV_UTIL_INTERFACE void vBTLVRemoveNode(
    struct BTLVNode * pxNode
)
```


**Parameters**: 

  * **pxNode** node to be removed 


**Author**: M. Meixner 

**Date**: 4.12.2006 

Remove a node from the tree and release the memory allocated for this node. This function must not be called for root nodes that were allocated on the stack, use [vBTLVClear()](btlv_8h.md#function-vbtlvclear) in this case. 


### function vBTLVMoveNode

```cpp
TLV_UTIL_INTERFACE void vBTLVMoveNode(
    struct BTLVNode * pxRoot,
    struct BTLVNode * pxNode
)
```


**Parameters**: 

  * **pxRoot** node to which the subtree is appended 
  * **pxNode** node that is moved to another tree 


**Author**: M. Meixner 

**Date**: 18.2.2009 

Move a node including subnodes from one tree to another. The node is appended as a child to the supplied node. This function must not be called for root nodes. NOTE: Don't allocate child nodes with malloc on your own. Instead always use [pxBTLVAppendTag()](btlv_8h.md#function-pxbtlvappendtag). 


### function uBTLVContentSize

```cpp
TLV_UTIL_INTERFACE unsigned uBTLVContentSize(
    struct BTLVNode * pxRoot
)
```


**Parameters**: 

  * **pxRoot** node to be removed 


**Author**: M. Meixner 

**Date**: 4.12.2006 

calculate the size that will be required to export the tree into a flat, BER-TLV encoded buffer. As a side effect the uSize entry in the nodes is updated. 


### function iBTLVExport

```cpp
TLV_UTIL_INTERFACE int iBTLVExport(
    struct BTLVNode * pxRoot,
    unsigned char * pucBuffer,
    unsigned uMaxSize
)
```


**Parameters**: 

  * **pxRoot** root node 
  * **pucBuffer** destination buffer 
  * **uMaxSize** size of the destination buffer 


**Return**: number of written bytes. If an error happens a negative value is returned:

* **BTLV_ERR_BUFFER:** the destination buffer is too small
* **BTLV_ERR_INVALID:** invalid tag has been found 

**Author**: M. Meixner 

**Date**: 4.12.2006 

Write the data found in a tree to a buffer in BER-TLV format 


### function iBTLVExportFile

```cpp
TLV_UTIL_INTERFACE int iBTLVExportFile(
    struct BTLVNode * pxRoot,
    const char * pcFilename
)
```


**Parameters**: 

  * **pxRoot** root node 
  * **pcFilename** file name 


**Return**: number of written bytes. If an error happens a negative value is returned:

* **BTLV_ERR_INVALID:** invalid tag has been found
* **BTLV_ERR_MEMORY:** not enough memory available
* **BTLV_ERR_FILE:** error during file access 

**Author**: M. Meixner 

**Date**: 30.1.2007 

Write the data found in a tree to a file in BER-TLV format. The data is first written to a temporary file (suffix ".TMP") and then renamed to the original file name. By this an error or power failue while writing the file does not corrupt any data. 


### function iBTLVAppendFile

```cpp
TLV_UTIL_INTERFACE int iBTLVAppendFile(
    struct BTLVNode * pxRoot,
    const char * pcFilename
)
```


**Parameters**: 

  * **pxRoot** root node; 
  * **pcFilename** file name 


**Return**: number of written bytes. If an error happens a negative value is returned:

* **BTLV_ERR_INVALID:** invalid tag has been found
* **BTLV_ERR_MEMORY:** not enough memory available
* **BTLV_ERR_FILE:** error during file access 

**Author**: M. Meixner 

**Date**: 12.3.2007 

append data to the end of the file. Incomplete nodes at the end of the file (e.g. resulting from a power failure) are removed first. As long as the data to be written has only one node on the topmost level, this function is atomic: Either this node is written completely or it is removed when the next node is appended or ignored when the file is read. 


### function iBTLVImport

```cpp
TLV_UTIL_INTERFACE int iBTLVImport(
    struct BTLVNode * pxRoot,
    const unsigned char * pucBuffer,
    unsigned uSize,
    enum BTLVFilter(*)(void *, struct BTLVNode *, enum BTLVContext) pxFilter,
    void * pvData
)
```


**Parameters**: 

  * **pxRoot** root node that will receive the input. If the node has child nodes these are released prior to reading the data. 
  * **pucBuffer** source buffer 
  * **uSize** size of the source buffer 
  * **pxFilter** import filter callback, see also: [Import filter callback]. The pointer may be set to 0 to disable filtering. 
  * **pvData** pointer to data that is passed on to the import filter, not used when no callback was given. 


**Return**: error code:

* **0**: success
* **BTLV_ERR_MEMORY:** out of memory
* **BTLV_ERR_INVALID:** invalid tag/data has been found When reading fails, pxRoot->uSize contains the number of bytes imported without considering incomplete nodes. 

**Author**: M. Meixner 

**Date**: 4.12.2006 

read data from a buffer in BER-TLV format. 


### function iBTLVImportFile

```cpp
TLV_UTIL_INTERFACE int iBTLVImportFile(
    struct BTLVNode * pxRoot,
    const char * pcFilename,
    enum BTLVFilter(*)(void *, struct BTLVNode *, enum BTLVContext) pxFilter,
    void * pvData
)
```


**Parameters**: 

  * **pxRoot** root node that will receive the input. If the node has child nodes these are released prior to reading the data. 
  * **pcFilename** name of the file 
  * **pxFilter** import filter callback, see also: [Import filter callback]. The pointer may be set to 0 to disable filtering. 
  * **pvData** pointer to data that is passed on to the import filter, not used when no callback was given. 


**Return**: number of bytes read. In case of an error a negative value is returned:

* **BTLV_ERR_MEMORY:** out of memory
* **BTLV_ERR_INVALID:** invalid tag/data has been found
* **BTLV_ERR_FILE:** error during file access

**Author**: M. Meixner 

**Date**: 30.1.2007 

read data from a file in BER-TLV format. 
When reading fails, pxRoot->uSize contains the number of bytes read without considering incomplete nodes. 


### function iBTLVExtractTag

```cpp
TLV_UTIL_INTERFACE int iBTLVExtractTag(
    struct BTLVNode * pxRoot,
    const char * pcPath,
    unsigned char * pucBuffer,
    unsigned uSize
)
```


**Parameters**: 

  * **pxRoot** root node 
  * **pcPath** path consisting of one or several tags separated by '/'. The tags are given as C-string (i.e. hex-dump of the tag), e.g. '20/DF01'. If a tag occurs several times, the path will descend into the first (left) subtree. (See also [TLV Path names]) 
  * **pucBuffer** destination buffer to which the result will be written 
  * **uSize** size of the buffer 


**Return**: number of written bytes. If an error happens a negative value is returned:

* **BTLV_ERR_NOT_FOUND:** tag not found
* **BTLV_ERR_BUFFER:** buffer too small
* **BTLV_ERR_CONSTRUCTED:** tag is a constructed node

**Author**: M. Meixner 

**Date**: 5.12.2006 

extract data from a primitive node 
If the tag was not found pucBuffer remains unmodified. 


### function xBTLVMatchPath

```cpp
TLV_UTIL_INTERFACE enum BTLVMatch xBTLVMatchPath(
    struct BTLVNode * pxRoot,
    const char * pcPath
)
```


**Parameters**: 

  * **pxRoot** node 
  * **pcPath** path consisting of one or several tags separated by '/'. (See also [TLV Path names]) 


**Return**: one of:

* **BTLV_MATCH** the node matches the path
* **BTLV_CHILDMATCH** the node is a child of a matching path
* **BTLV_PARENTMATCH** the node may be a parent of a matching path
* **BTLV_MISMATCH** the node does not match the path 

**Author**: M. Meixner 

**Date**: 6.2.2007 

match a node against a path. 


### function iBTLVGetPath

```cpp
TLV_UTIL_INTERFACE int iBTLVGetPath(
    struct BTLVNode * pxRoot,
    char * pcBuffer,
    int iMaxsize
)
```


**Parameters**: 

  * **pxRoot** current node 
  * **pcBuffer** buffer that is filled with the path 
  * **iMaxsize** size of pcBuffer in bytes 


**Return**: error code, 0 in case of success 

**Author**: M. Meixner 

**Date**: 6.2.2007 

extract the path from the root to the current node 


### function pcBTLVTagStr2

```cpp
TLV_UTIL_INTERFACE char * pcBTLVTagStr2(
    unsigned long ulTag,
    BTLVTagBufType tcTagBuf
)
```


**Parameters**: 

  * **ulTag** tag number 
  * **tcTagBuf** pointer to Buffer (content will be modified) 


**Return**: tag string (pointer to tcTagBuf+offset) 

**Author**: J. Weckmann 

**Date**: 2014-04-17 

**Note**: this is for avoiding trouble if pcBTLVTagStr2 is called several times 

convert tag from number to string with Buffer provided by caller 


### function pcBTLVTagStr

```cpp
TLV_UTIL_INTERFACE char * pcBTLVTagStr(
    unsigned long ulTag
)
```


**Parameters**: 

  * **ulTag** tag number 


**Deprecated**: 

This function is not thread safe! It is strongly recommended to use pcBTLVTagStr2 or macro ULTAG2ASC 

**Return**: tag string 

**Author**: T. Buening 

**Date**: 04.02.2013 

convert tag from number to string 


### function ulBTLVTagNum

```cpp
TLV_UTIL_INTERFACE unsigned long ulBTLVTagNum(
    const char * pcTag
)
```


**Parameters**: 

  * **pcTag** tag string 


**Return**: tag number 

**Author**: T. Buening 

**Date**: 10.12.2014 

convert tag from string to number 


### function vBTLVBuildTag

```cpp
TLV_UTIL_INTERFACE void vBTLVBuildTag(
    unsigned char ucbyte1,
    unsigned long tag_number,
    char * pcTag
)
```


**Parameters**: 

  * **ucbyte1** tag type definition, e.g. ([PRIVATE_CLASS](btlv_8h.md#enumvalue-private-class) | [PRIMITIVE_TAG](btlv_8h.md#enumvalue-primitive-tag)), or ([CONTEXT_CLASS](btlv_8h.md#enumvalue-context-class) | [CONSTRUCTET_TAG](btlv_8h.md#enumvalue-constructet-tag)) 
  * **tag_number** reference number to build the tag 
  * **pcTag** buffer where to put the tag name (ASCII string) 


**Author**: A. Groennert 

```cpp
//example:
{
  ULONG ulIndexNumber = 0x9999;
  char  cPath[30] = {0x00};

  vBTLVBuildTag(CONTEXT_CLASS | CONSTRUCTET_TAG, ulIndexNumber, cPath);
}
```

**Date**: 13.04.2010 

build tag name from given number 


### function vBTLVGetTagNumber

```cpp
TLV_UTIL_INTERFACE void vBTLVGetTagNumber(
    unsigned char * ucTag,
    unsigned long * ptag_number
)
```


**Parameters**: 

  * **ucTag** buffer with tag name (ASCII string) 
  * **ptag_number** buffer where to put the reference number 


**Author**: A. Groennert 

**Date**: 13.04.2010 

recover reference number from tag name 


### function ulBTLVGetTagNumber

```cpp
TLV_UTIL_INTERFACE unsigned long ulBTLVGetTagNumber(
    const char * Tag
)
```


**Parameters**: 

  * **Tag** buffer with tag name (ASCII string) 


**Return**: tag number 

**Author**: A. Groennert 

**Date**: 13.04.2010 

recover reference number from tag name 


### function pxBTLVGetChild

```cpp
TLV_UTIL_INTERFACE struct BTLVNode * pxBTLVGetChild(
    const struct BTLVNode * pxParent,
    int n
)
```


**Parameters**: 

  * **pxParent** parent node 
  * **n** child element index (starting with zero) 


**Return**: pointer to the found node or 0. 

get nth. child element from parent 


### function iBTLVGetChildOffset

```cpp
TLV_UTIL_INTERFACE int iBTLVGetChildOffset(
    const struct BTLVNode * pxParent,
    const struct BTLVNode * pxChild
)
```


**Parameters**: 

  * **pxParent** parent node 
  * **pxChild** child node 


**Return**: child offset within parent (-1 on error) 

get offset of child element 


### function iBTLVGetChildCount

```cpp
TLV_UTIL_INTERFACE int iBTLVGetChildCount(
    const struct BTLVNode * pxParent
)
```


**Parameters**: 

  * **pxParent** parent node 


**Return**: number of children 

get number of child elements from parent 


### function pxBTLVGetParent

```cpp
TLV_UTIL_INTERFACE struct BTLVNode * pxBTLVGetParent(
    const struct BTLVNode * pxChild
)
```


**Parameters**: 

  * **pxChild** child node 


**Return**: pointer to the found parent node or 0. 

get parent of a child 


### function vBTLVWipeAndClear

```cpp
TLV_UTIL_INTERFACE void vBTLVWipeAndClear(
    struct BTLVNode * pxNode
)
```


**Parameters**: 

  * **pxNode** node to be removed 


**Deprecated**: 

[vBTLVWipeAndClear()](btlv_8h.md#function-vbtlvwipeandclear) does not consider BTLV data, which was overwritten by [pxBTLVWriteTag()](btlv_8h.md#function-pxbtlvwritetag), therefore, it is recommended to use [vBTLVSetWipeCallback()](btlv_8h.md#function-vbtlvsetwipecallback) instead. 

**Author**: J. Zaragoza 

**Date**: 05.09.2018 

Wipe data and remove the content of a node including child nodes, the node itself is not released. The node stays initialized, i.e. it is not required to call [vBTLVInit()](btlv_8h.md#function-vbtlvinit) after [vBTLVWipeAndClear()](btlv_8h.md#function-vbtlvwipeandclear). 


### function vBTLVWipeAndRemoveNode

```cpp
TLV_UTIL_INTERFACE void vBTLVWipeAndRemoveNode(
    struct BTLVNode * pxNode
)
```


**Parameters**: 

  * **pxNode** node to be removed 


**Deprecated**: 

[vBTLVWipeAndRemoveNode()](btlv_8h.md#function-vbtlvwipeandremovenode) does not consider BTLV data, which was overwritten by [pxBTLVWriteTag()](btlv_8h.md#function-pxbtlvwritetag), therefore, it is recommended to use [vBTLVSetWipeCallback()](btlv_8h.md#function-vbtlvsetwipecallback) instead. 

**Author**: J. Zaragoza 

**Date**: 05.09.2018 

Wipe data and remove a node including child nodes and release the memory allocated for this node and its child nodes. This function must not be called for root nodes that were allocated on the stack, use [vBTLVWipeAndClear()](btlv_8h.md#function-vbtlvwipeandclear) in this case. 


### function vBTLVSetWipeCallback

```cpp
TLV_UTIL_INTERFACE void vBTLVSetWipeCallback(
    void(*)(void *, unsigned) cb
)
```


**Parameters**: 

  * **cb** callback function, which is invoked to overwrite BTLV data, before the memory for this data is released. The function is passed a pointer and the size of the memory, so that the wipe function might simply memset() to overwrite the old BTLV data. 


**Note**: This function is not thread-safe, therefore, it is recommended to invoke it as one of the very first functions in [main()](main_8cpp.md#function-main), before any BTLV functions are used. 

Set a function, which wipes data of BTLV notes before the memory is released. After setting the wipe function the user needs no longer care about the wipe of sensitive data in BTLV buffers with special functions [vBTLVWipeAndClear()](btlv_8h.md#function-vbtlvwipeandclear) and [vBTLVWipeAndRemoveNode()](btlv_8h.md#function-vbtlvwipeandremovenode), since this will be handled implicitely, if BTLV nodes are removed (e.g. with the normal use of [vBTLVClear()](btlv_8h.md#function-vbtlvclear)). 




## Macros Documentation

### define TLV_UTIL_INTERFACE

```cpp
#define TLV_UTIL_INTERFACE 
```


### define MAX_TAGSIZE

```cpp
#define MAX_TAGSIZE 3
```


maximum size of the (binary) tag name in bytes constants for [vBTLVBuildTag()](btlv_8h.md#function-vbtlvbuildtag): 


### define BTLVTagBufSize

```cpp
#define BTLVTagBufSize 9
```


### define ULTAG2ASC

```cpp
#define ULTAG2ASC(
    ulTag
)
pcBTLVTagStr2(ulTag,_ULTAG2ASC_BUF)
```


### define ULTAG2ASCBUF

```cpp
#define ULTAG2ASCBUF BTLVTagBufType _ULTAG2ASC_BUF;
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     VeriFone
*  Author:      GSS R&D Germany
*  Content:     BER TLV functions
****************************************************************************/

#ifndef BTLV_H
#define BTLV_H

#include "mem_pool.h"

#ifdef __cplusplus
extern "C" {
#endif

#define TLV_UTIL_INTERFACE // NOTE: Do not set visibility("default") because export.map is used

#define MAX_TAGSIZE 3 
enum {
   CONTEXT_CLASS           =0x80,  
   PRIVATE_CLASS           =0xC0,  
   CONSTRUCTET_TAG         =0x20,  // typo, use CONSTRUCTED_TAG instead
   CONSTRUCTED_TAG         =0x20,  
   PRIMITIVE_TAG           =0x00   
};

enum BTLV_ERROR {
   BTLV_ERR_INVALID=-1,  
   BTLV_ERR_BUFFER=-2,   
   BTLV_ERR_MEMORY=-3,   
   BTLV_ERR_FILE=-4,     
   BTLV_ERR_NOT_FOUND=-5, 
   BTLV_ERR_CONSTRUCTED=-6, 
   BTLV_ERR_DONE_FILTER=-7, 
   BTLV_ERR_ABORT_FILTER=-8 
};


enum BTLVFilter {
   BTLV_FLTR_KEEP=0,   
   BTLV_FLTR_DONE=-1,  
   BTLV_FLTR_REMOVE=-2,
   BTLV_FLTR_ABORT=-3  
};


enum BTLVContext {
   BTLV_IMPORT_START, 
   BTLV_IMPORT_DONE  
};

enum BTLVMatch {
   BTLV_MISMATCH,   
   BTLV_MATCH,      
   BTLV_CHILDMATCH, 
   BTLV_PARENTMATCH 
};


struct BTLVNode {
   struct BTLVNode *pxNext;       
   struct BTLVNode *pxFirst;      
   struct BTLVNode *pxParent;     
   struct MemoryPool *pxMempool;  
   char   tcName[2*MAX_TAGSIZE+1];
   char   cConstructed;           
   unsigned char *pucData;        
   unsigned uSize;                
};


TLV_UTIL_INTERFACE void vBTLVInit(struct BTLVNode *pxNode, struct MemoryPool *pxMempool);


TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVAppendTag(struct BTLVNode *pxRoot,
                                               const char *pcPath,
                                               const unsigned char *pucData, unsigned uSize);


TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVWriteTag(struct BTLVNode *pxRoot,
                                              const char *pcPath,
                                              const unsigned char *pucData,
                                              unsigned uSize);


TLV_UTIL_INTERFACE int iBTLVWriteData(struct BTLVNode *pxNode, unsigned char *pucData, unsigned uSize);


TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVFindTag(struct BTLVNode *pxRoot,const char *pcPath);


TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVFindNextTag(struct BTLVNode *pxRoot,
                                                 const char *pcPath,
                                                 struct BTLVNode *pxPrev);


TLV_UTIL_INTERFACE void vBTLVClear(struct BTLVNode *pxNode);


TLV_UTIL_INTERFACE void vBTLVRemoveNode(struct BTLVNode *pxNode);


TLV_UTIL_INTERFACE void vBTLVMoveNode(struct BTLVNode *pxRoot, struct BTLVNode *pxNode);


TLV_UTIL_INTERFACE unsigned uBTLVContentSize(struct BTLVNode *pxRoot);


TLV_UTIL_INTERFACE int iBTLVExport(struct BTLVNode *pxRoot, unsigned char *pucBuffer, unsigned uMaxSize);


TLV_UTIL_INTERFACE int iBTLVExportFile(struct BTLVNode *pxRoot, const char *pcFilename);


TLV_UTIL_INTERFACE int iBTLVAppendFile(struct BTLVNode *pxRoot, const char *pcFilename);


TLV_UTIL_INTERFACE int iBTLVImport(struct BTLVNode *pxRoot, const unsigned char *pucBuffer, unsigned uSize,
                              enum BTLVFilter (*pxFilter)(void *, struct BTLVNode *, enum BTLVContext),void *pvData);


TLV_UTIL_INTERFACE int iBTLVImportFile(struct BTLVNode *pxRoot, const char *pcFilename,
                enum BTLVFilter (*pxFilter)(void *, struct BTLVNode *, enum BTLVContext),void *pvData);


TLV_UTIL_INTERFACE int iBTLVExtractTag(struct BTLVNode *pxRoot, const char *pcPath, unsigned char *pucBuffer, unsigned uSize);


TLV_UTIL_INTERFACE enum BTLVMatch xBTLVMatchPath(struct BTLVNode *pxRoot, const char *pcPath);


TLV_UTIL_INTERFACE int iBTLVGetPath(struct BTLVNode *pxRoot, char *pcBuffer, int iMaxsize);




#define BTLVTagBufSize 9
typedef char BTLVTagBufType[BTLVTagBufSize];

#define ULTAG2ASC(ulTag) pcBTLVTagStr2(ulTag,_ULTAG2ASC_BUF)
#define ULTAG2ASCBUF BTLVTagBufType _ULTAG2ASC_BUF;

TLV_UTIL_INTERFACE  char *pcBTLVTagStr2(unsigned long ulTag, BTLVTagBufType tcTagBuf);


TLV_UTIL_INTERFACE char *pcBTLVTagStr(unsigned long ulTag) __attribute ((deprecated));


TLV_UTIL_INTERFACE unsigned long ulBTLVTagNum(const char *pcTag);


TLV_UTIL_INTERFACE void vBTLVBuildTag(unsigned char ucbyte1, unsigned long tag_number, char* pcTag);


TLV_UTIL_INTERFACE void vBTLVGetTagNumber(unsigned char* ucTag, unsigned long* ptag_number);


TLV_UTIL_INTERFACE unsigned long ulBTLVGetTagNumber(const char *Tag);


TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVGetChild(const struct BTLVNode *pxParent,int n);


TLV_UTIL_INTERFACE int iBTLVGetChildOffset(const struct BTLVNode *pxParent, const struct BTLVNode *pxChild);


TLV_UTIL_INTERFACE int iBTLVGetChildCount(const struct BTLVNode *pxParent);


TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVGetParent(const struct BTLVNode *pxChild);


TLV_UTIL_INTERFACE void vBTLVWipeAndClear(struct BTLVNode *pxNode) __attribute ((deprecated));


TLV_UTIL_INTERFACE void vBTLVWipeAndRemoveNode(struct BTLVNode *pxNode) __attribute ((deprecated));
TLV_UTIL_INTERFACE void vBTLVSetWipeCallback(void(*cb)(void *,unsigned));

#ifdef __cplusplus
}
#endif

#ifndef TLV_UTIL_COMPILE
#   undef TLV_UTIL_INTERFACE
#endif

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
